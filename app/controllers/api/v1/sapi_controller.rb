class Api::V1::SapiController < ApplicationController
  before_action :authenticate_user

  def index
    call = "#{sapi_params[:call]}_call"
    render json: ShipmentsApiRetriever.send(call, sapi_params).to_json
  end

  def countries
    render json: ShipmentsApiRetriever.call(:countries)
  end

  def terms
    render json: ShipmentsApiRetriever.call(:terms)
  end

  def species_autocomplete
    query = { taxon_concept_query: sapi_params[:query] || '' }
    render json: ShipmentsApiRetriever.call(:species_autocomplete, query)
  end

  def download
    query = {
      compliance_type: sapi_params[:compliance_type],
      year: sapi_params[:year],
      ids: sapi_params[:id],
      type: sapi_params[:grouping]
    }
    data = ShipmentsApiRetriever.call(:download, query)

    send_data CsvDownloader.csv_generator(data),
              filename: "#{sapi_params[:year] || 'all'}_shipments_#{Time.now.to_i}.csv"
  end

  def search_download
    query = {
      type: sapi_params[:grouping],
      year: sapi_params[:year],
      ids: sapi_params[:id]
    }

    data = ShipmentsApiRetriever.call(:search_download, query)

    send_data CsvDownloader.csv_generator(data),
              filename: "#{sapi_params[:year] || 'all'}_shipments_#{Time.now.to_i}.csv"
  end

  private

  def sapi_params
    params.require(:sapi).permit(:call, :grouping, :year, :compliance_type,
                                 :filter, :id, :user_id, :page, :per_page, :query, :all)
  end

  def authenticate_user
    unless sapi_params[:user_id].present? && sapi_params[:user_id] == current_user.id.to_s
      head(401)
    end
  end
end
