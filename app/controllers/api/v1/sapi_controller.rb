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
              filename: filename
  end

  def search_download
    query = {
      group_by: sapi_params[:grouping],
      year: sapi_params[:year],
      ids: sapi_params[:id]
    }

    data = ShipmentsApiRetriever.call(:search_download, query)

    send_data CsvDownloader.csv_generator(data),
              filename: filename
  end

  def search_download_all
    query = {
      year: sapi_params[:year],
      group_by: sapi_params[:grouping],
      filter: sapi_params[:filter],
      id: sapi_params[:id]
    }

    data = ShipmentsApiRetriever.call(:search_download_all, query)

    send_data CsvDownloader.csv_generator(data),
              filename: filename
  end

  def filename
    if sapi_params[:year].present?
      type = sapi_params[:grouping].presence || sapi_params[:compliance_type].presence || ''
      type = "_#{type}" if type.present?

      "#{sapi_params[:year]}#{type}_shipments_#{Time.now.to_i}.csv"
    else
      "2012-2016_all_shipments_#{Time.now.to_i}.csv"
    end
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
