class Api::V1::SapiController < ApplicationController
  before_action :authenticate_user

  def index
    call = "#{sapi_params[:call]}_call"
    render json: ShipmentsApiRetriever.send(call, sapi_params).to_json
  end

  def countries
    query = { query_string: sapi_params[:query] || '' }
    render json: ShipmentsApiRetriever.call(:countries, query)
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
      type: sapi_params[:grouping],
      appendix: sapi_params[:appendix]
    }

    data = ShipmentsApiRetriever.call(:download, query)

    send_data CsvDownloader.csv_generator(data),
              filename: filename
  end

  def search_download
    query = {
      group_by: sapi_params[:grouping],
      year: sapi_params[:year],
      ids: sapi_params[:id],
      appendix: sapi_params[:appendix]
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

    type = 'countries' if sapi_params[:grouping].include?('exporting')

    data = ShipmentsApiRetriever.call(:search_download_all, query)

    send_data CsvDownloader.csv_generator(data),
              filename: filename(type)
  end

  def filename(type = nil)
    if sapi_params[:year].present?
      type ||= sapi_params[:grouping].presence || sapi_params[:compliance_type].presence || ''
      id ||= sapi_params[:id].presence || ''
      type = "_#{type}" if type.present?
      id = "_#{id}" if id.present?

      "#{sapi_params[:year]}#{type}#{id}_shipments_#{Time.now.to_i}.csv"
    else
      "2012-#{Date.today.year - 1}_all_shipments_#{Time.now.to_i}.csv"
    end
  end

  private

  def sapi_params
    params.require(:sapi).permit(:call, :grouping, :year, :compliance_type,
                                 :filter, :id, :user_id, :page, :per_page, :query, :all, :appendix)
  end

  def authenticate_user
    unless sapi_params[:user_id].present? && sapi_params[:user_id] == current_user.id.to_s
      head(401)
    end
  end
end
