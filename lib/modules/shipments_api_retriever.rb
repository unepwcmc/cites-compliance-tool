module ShipmentsApiRetriever

  AVAILABLE_TYPES = ['category', 'importing', 'exporting', 'commodity', 'species', 'taxonomy']

  ENDPOINTS = {
    shipments: 'shipments',
    grouped: 'shipments/grouped',
    search: 'shipments/search',
    countries: 'geo_entities',
    terms: 'terms',
    species_autocomplete: 'auto_complete_taxon_concepts'
  }

  def self.api_call(params)
    query = {
      compliance_type: params[:compliance_type],
      time_range_start: params[:year] || 2012,
      time_range_end: params[:year] || 2016,
      page: params[:page] || 1,
      per_page: 100_00
    }

    call(:shipments, query)
  end

  def self.grouped_call(params)
    query = { group_by: sanitise_type(params[:grouping]) }

    data = call(:grouped, query)
    data['shipments'] || data
  end

  def self.search_call(params)
    query = {
      year: params[:year] || 2012,
      group_by: params[:grouping] || 'exporting',
      filter: params[:filter] || '',
      id: params[:id] || '',
      page: params[:page] || 1
    }

    call(:search, query)
  end

  def self.call(endpoint, query=nil)
    return '' unless ENDPOINTS[endpoint]

    url = "#{Rails.application.secrets['species_api_url']}/#{ENDPOINTS[endpoint]}"
    response = HTTParty.get(url, headers: header, query: query)
    JSON.parse(response.body)
  end

  def self.header
    { 'X-Authentication-Token' => Rails.application.secrets['compliance_tool_token'] }
  end

  def self.sanitise_type(type)
    AVAILABLE_TYPES.include?(type) ? type : 'category'
  end
end
