class DashboardController < ApplicationController
  before_action :authenticate_user!

  def index
    @issue_by_category = ShipmentsApiRetriever.grouped_call(grouping: 'category')
    @commodities = ShipmentsApiRetriever.grouped_call(grouping: 'commodity')
    @exporting = ShipmentsApiRetriever.grouped_call(grouping: 'exporting')
    @importing = ShipmentsApiRetriever.grouped_call(grouping: 'importing')
    @species = ShipmentsApiRetriever.grouped_call(grouping: 'species')
    @taxonomy = ShipmentsApiRetriever.grouped_call(grouping: 'taxonomy')
  end
end
