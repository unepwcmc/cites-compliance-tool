module  ShipmentsApiRetriever
  def self.api_call(compliance_type = nil)
    data = []
    page = 1
    loop do
      response = HTTParty.get(ENV['SPECIES_API_URL'],
                              headers: header,
                              query: { compliance_type: compliance_type,
                                       time_range_start: 2012, time_range_end: 2016,
                                       page: page, per_page: 100_00 })
      parsed_resp = JSON.parse(response.body)
      break if parsed_resp['shipments'].empty?
      data << parsed_resp
      page += 1
    end
    data
  end

  def self.header
    { 'X-Authentication-Token' => Rails.application.secrets['compliance_tool_token'] }
  end
end
