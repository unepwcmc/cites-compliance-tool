class DashboardController < ApplicationController
  def index
    @appendix_i_total_cnt = ShipmentsApiRetriever.api_call('appendix_i').first['meta']['total']
    @trade_suspensions_total_cnt = ShipmentsApiRetriever.api_call('trade_suspensions').first['meta']['total']
    @mandatory_quotas_total_cnt = ShipmentsApiRetriever.api_call('mandatory_quotas').first['meta']['total']
  end
end
