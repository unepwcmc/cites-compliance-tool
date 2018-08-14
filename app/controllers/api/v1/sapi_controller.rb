class Api::V1::SapiController < ApplicationController
  before_action :authenticate_user

  def index
    call = "#{sapi_params[:call]}_call"
    @data = ShipmentsApiRetriever.send(call, sapi_params)
    if call.include?('download')
      send_data CsvDownloader.csv_generator(@data),
                filename: "#{sapi_params[:year] || 'all'}_shipments_#{Time.now.to_i}.csv"
    else
      render json: @data.to_json
    end
  end

  private

  def sapi_params
    params.require(:sapi).permit(:call, :grouping, :year, :compliance_type,
                                 :filter, :id, :user_id, :page, :per_page, :query)
  end

  def authenticate_user
    unless sapi_params[:user_id].present? && sapi_params[:user_id] == current_user&.id
      head(401)
    end
  end
end
