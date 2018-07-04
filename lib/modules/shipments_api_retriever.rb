module  ShipmentsApiRetriever

  def self.api_call(compliance_type=nil)
    response = HTTParty.get(ENV['SPECIES_API_URL'],
                             headers: header,
                             query: {compliance_type: compliance_type})
    JSON.parse response.body
  end

  def self.header
    {'X-Authentication-Token' => Rails.application.secrets["compliance_tool_token"]}
  end

end