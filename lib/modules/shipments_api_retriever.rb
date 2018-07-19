module  ShipmentsApiRetriever
  def self.api_call(compliance_type = nil, page = 1, year = nil)
    response = HTTParty.get(Rails.application.secrets['species_api_url'],
                            headers: header,
                            query: { compliance_type: compliance_type,
                                     time_range_start: year || 2012, time_range_end: year || 2016,
                                     page: page, per_page: 100_00 })
    JSON.parse(response.body)
  end

  def self.grouped_call(*grouping)
    record = {}
    response = HTTParty.get(Rails.application.secrets['species_api_url'] + '/grouped',
                            headers: header,
                            query: { group_by: grouping })
    data = JSON.parse(response.body)['shipments']
    return data if grouping.include?('issue_type') || grouping.empty?
    data.each do |d|
      key = d.keys.first
      record[key] = d[key][0..4]
    end
    record
  end

  def self.header
    { 'X-Authentication-Token' => Rails.application.secrets['compliance_tool_token'] }
  end
end
