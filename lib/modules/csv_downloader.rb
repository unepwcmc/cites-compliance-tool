module CsvDownloader
  HEADER = %w[ id year appendix taxon class order family genus
               term importer_reported_quantity exporter_reported_quantity
               unit importer exporter origin purpose source import_permit
               export_permit origin_permit issue_type ].freeze

  def self.csv_generator
    CSV.generate(headers: true) do |csv|
      csv << HEADER
      %w[trade_suspensions appendix_i mandatory_quotas].each do |type|
        page = 1
        loop do
          data = ShipmentsApiRetriever.api_call(type, page)
          break if data['shipments'].empty?
          data['shipments'].each do |row|
            csv << row.values
          end
          page += 1
        end
      end
    end
  end
end
