class Api::V1::SapiController < ApplicationController
  before_action :authenticate_user

  def index
    call = "#{sapi_params[:call]}_call"
    @data = ShipmentsApiRetriever.send(call, sapi_params)

    render json: @data.to_json
  end

  private

  def sapi_params
    params.require(:sapi).permit(:call, :grouping, :year, :compliance_type, :user_id, :page)
  end

  def authenticate_user
    unless sapi_params[:user_id].present? && sapi_params[:user_id] == current_user.id.to_s
      head(401)
    end
  end
end
