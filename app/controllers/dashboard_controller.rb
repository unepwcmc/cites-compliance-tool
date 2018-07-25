class DashboardController < ApplicationController
  before_action :authenticate_user!

  def index
    @issue_by_category = ShipmentsApiRetriever.grouped_call('category')
    @commodities = ShipmentsApiRetriever.grouped_call('commodity')
    @exporting = ShipmentsApiRetriever.grouped_call('exporting')
    @importing = ShipmentsApiRetriever.grouped_call('importing')
    @species = ShipmentsApiRetriever.grouped_call('species')
    @taxonomy = ShipmentsApiRetriever.grouped_call('taxonomy')
  end
end
