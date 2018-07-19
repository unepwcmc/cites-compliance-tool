class DashboardController < ApplicationController
  def index
    @issue_by_category = ShipmentsApiRetriever.grouped_call('issue_type')
    @commodities = ShipmentsApiRetriever.grouped_call('term')
    @exporting = ShipmentsApiRetriever.grouped_call('exporter', 'exporter_iso')
    @importing = ShipmentsApiRetriever.grouped_call('importer', 'importer_iso')
    @species = ShipmentsApiRetriever.grouped_call('taxon', 'appendix')
    @taxonomy = ShipmentsApiRetriever.grouped_call
  end
end
