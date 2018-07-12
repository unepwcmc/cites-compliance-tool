class DashboardController < ApplicationController
  def index
    @appendix_i_total_cnt = ShipmentsApiRetriever.api_call('appendix_i')['meta']['total']
    @trade_suspensions_total_cnt = ShipmentsApiRetriever.api_call('trade_suspensions')['meta']['total']
    @mandatory_quotas_total_cnt = ShipmentsApiRetriever.api_call('mandatory_quotas')['meta']['total']
  end
end
