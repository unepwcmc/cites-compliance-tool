module  ShipmentsApiRetriever
  def self.api_call(compliance_type = nil)
    response = HTTParty.get(ENV['SPECIES_API_URL'],
                            headers: header,
                            query: { compliance_type: compliance_type, per_page: 110_000 },
                            read_timeout: 120)
    JSON.parse response.body
  end

  def self.header
    { 'X-Authentication-Token' => Rails.application.secrets['compliance_tool_token'] }
  end
end
