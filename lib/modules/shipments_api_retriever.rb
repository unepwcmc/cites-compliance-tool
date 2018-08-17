module ShipmentsApiRetriever

  AVAILABLE_TYPES = ['category', 'importing', 'exporting', 'commodity', 'species', 'taxonomy']

  def self.api_call(params)
    response = HTTParty.get(Rails.application.secrets['species_api_url'],
                            headers: header,
                            query: { compliance_type: params[:compliance_type],
                                     time_range_start: params[:year] || 2012, time_range_end: params[:year] || 2016,
                                     page: params[:page] || 1 , per_page: 100_00 })
    JSON.parse(response.body)
  end

  def self.grouped_call(params)
    response = HTTParty.get(Rails.application.secrets['species_api_url'] + '/grouped',
                            headers: header,
                            query: { group_by: sanitise_type(params[:grouping]) })
    data = JSON.parse(response.body)
    data['shipments'] || data
  end

  def self.search_call(params)
    response = HTTParty.get(Rails.application.secrets['species_api_url'] + '/search',
                            headers: header,
                            query: { year: params[:year] || 2012, group_by: params[:grouping] || 'exporting' })
    JSON.parse(response.body)
  end

  def self.header
    { 'X-Authentication-Token' => Rails.application.secrets['compliance_tool_token'] }
  end

  def self.sanitise_type(type)
    AVAILABLE_TYPES.include?(type) ? type : 'category'
  end
end
