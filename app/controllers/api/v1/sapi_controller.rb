class Api::V1::SapiController < ApplicationController
  before_action :authenticate_user

  def index
    call = "#{sapi_params[:call]}_call"
    @data = ShipmentsApiRetriever.send(call, sapi_params)

    render json: @data.to_json
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

  private

  def sapi_params
    params.require(:sapi).permit(:call, :grouping, :year, :compliance_type,
                                 :filter, :id, :user_id, :page, :query)
  end

  def authenticate_user
    unless sapi_params[:user_id].present? && sapi_params[:user_id] == current_user&.id
      head(401)
    end
  end
end
