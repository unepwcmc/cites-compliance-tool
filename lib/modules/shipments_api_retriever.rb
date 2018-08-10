module ShipmentsApiRetriever

  AVAILABLE_TYPES = ['category', 'importing', 'exporting', 'commodity', 'species', 'taxonomy']

  def self.api_call(params)
    response = HTTParty.get(Rails.application.secrets['species_api_url'] + '/shipments',
                            headers: header,
                            query: { compliance_type: params[:compliance_type],
                                     time_range_start: params[:year] || 2012, time_range_end: params[:year] || 2016,
                                     page: params[:page] || 1, per_page: 100_00 })
    JSON.parse(response.body)
  end

  def self.grouped_call(params)
    response = HTTParty.get(Rails.application.secrets['species_api_url'] + '/shipments/grouped',
                            headers: header,
                            query: { group_by: sanitise_type(params[:grouping]) })
    data = JSON.parse(response.body)
    data['shipments'] || data
  end

  def self.search_call(params)
    response = HTTParty.get(Rails.application.secrets['species_api_url'] + '/shipments/search',
                            headers: header,
                            query: { year: params[:year] || 2012, group_by: params[:grouping] || 'exporting',
                                     filter: params[:filter] || '', id: params[:id] || '',
                                     page: params[:page] || 1 })
    JSON.parse(response.body)
  end

  # API calls for data download
  def self.download_call(params)
    response = HTTParty.get(Rails.application.secrets['species_api_url'] + '/shipments/download',
                            headers: header,
                            query: { compliance_type: params[:compliance_type],
                                     year: params[:year], ids: params[:id],
                                     type: params[:grouping] })
    JSON.parse(response.body)
  end

  def self.search_download_call(params)
    response = HTTParty.get(Rails.application.secrets['species_api_url'] + '/shipments/search_download',
                            headers: header,
                            query: { type: params[:grouping],
                                     year: params[:year], ids: params[:id] })
    JSON.parse(response.body)
  end

  # API calls for autocomplete and dropdown search page
  def self.species_autocomplete_call(params)
    response = HTTParty.get(Rails.application.secrets['species_api_url'] + '/auto_complete_taxon_concepts',
                            headers: header,
                            query: { taxon_concept_query: params[:query] || '' })
    JSON.parse(response.body)
  end

  def self.countries_call(_params)
    response = HTTParty.get(Rails.application.secrets['species_api_url'] + '/geo_entities',
                            headers: header,
                            query: { geo_entity_types_set: 4 })
    JSON.parse(response.body)
  end

  def self.terms_call(_params)
    response = HTTParty.get(Rails.application.secrets['species_api_url'] + '/terms',
                            headers: header)
    JSON.parse(response.body)
  end

  def self.header
    { 'X-Authentication-Token' => Rails.application.secrets['compliance_tool_token'] }
  end

  def self.sanitise_type(type)
    AVAILABLE_TYPES.include?(type) ? type : 'category'
  end
end
