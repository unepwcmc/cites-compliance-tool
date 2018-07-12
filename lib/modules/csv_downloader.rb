module CsvDownloader
  def self.csv_generator
    attributes = data_fetcher.first.keys
    CSV.generate(headers: true) do |csv|
      csv << attributes
      data_fetcher.each do |data|
        csv << data.values
      end
    end
  end

  def self.data_fetcher(compliance_type = nil)
    data = []
    if compliance_type.present?
      data = ShipmentsApiRetriever.api_call(compliance_type)['shipments']
    else
      %w[trade_suspensions appendix_i mandatory_quotas].each do |type|
        data << ShipmentsApiRetriever.api_call(type)['shipments']
      end
    end
    data.flatten
  end
end
