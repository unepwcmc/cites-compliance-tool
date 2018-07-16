module  ShipmentsApiRetriever
  def self.api_call(compliance_type = nil, page = 1)
    response = HTTParty.get(Rails.application.secrets['species_api_url'],
                            headers: header,
                            query: { compliance_type: compliance_type,
                                     time_range_start: 2012, time_range_end: 2016,
                                     page: page, per_page: 100_00 })
    JSON.parse(response.body)
  end

  def self.header
    { 'X-Authentication-Token' => Rails.application.secrets['compliance_tool_token'] }
  end
end
