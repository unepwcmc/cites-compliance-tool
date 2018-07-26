module ShipmentsApiRetriever

  AVAILABLE_TYPES = ['category', 'importing', 'exporting', 'commodity', 'species', 'taxonomy']

  def self.api_call(compliance_type = nil, page = 1, year = nil)
    response = HTTParty.get(Rails.application.secrets['species_api_url'],
                            headers: header,
                            query: { compliance_type: compliance_type,
                                     time_range_start: year || 2012, time_range_end: year || 2016,
                                     page: page, per_page: 100_00 })
    JSON.parse(response.body)
  end

  def self.grouped_call(grouping)
    response = HTTParty.get(Rails.application.secrets['species_api_url'] + '/grouped',
                            headers: header,
                            query: { group_by: sanitise_type(grouping) })
    data = JSON.parse(response.body)
    data['shipments'] || data
  end

  def self.header
    { 'X-Authentication-Token' => Rails.application.secrets['compliance_tool_token'] }
  end

  def self.sanitise_type(type)
    AVAILABLE_TYPES.include?(type) ? type : 'category'
  end
end
