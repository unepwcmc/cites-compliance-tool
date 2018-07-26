class Api::V1::SapiController < ApplicationController
  def index
    call = "#{api_params[:call]}_call"
    @data = ShipmentsApiRetriever.send(call, api_params[:type])

    render json: @data.to_json
  end

  private

  def api_params
    params.permit(:call, :type)
  end
end
