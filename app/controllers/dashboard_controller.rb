class DashboardController < ApplicationController
  before_action :authenticate_user!

  def index
    @issue_by_category = ShipmentsApiRetriever.grouped_call(grouping: 'category').to_json
    @commodities = ShipmentsApiRetriever.grouped_call(grouping: 'commodity').to_json
    @exporting = ShipmentsApiRetriever.grouped_call(grouping: 'exporting').to_json
    @importing = ShipmentsApiRetriever.grouped_call(grouping: 'importing').to_json
    @species = ShipmentsApiRetriever.grouped_call(grouping: 'species').to_json
    @taxonomy = ShipmentsApiRetriever.grouped_call(grouping: 'taxonomy').to_json
  end
end
