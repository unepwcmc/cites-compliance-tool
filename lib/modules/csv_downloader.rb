module CsvDownloader
  HEADER = %w[ id year appendix taxon class order family genus
               term importer_reported_quantity exporter_reported_quantity
               unit importer exporter origin purpose source
               compliance_type_taxonomic_rank
               import_permit
               export_permit origin_permit compliance_type ].freeze

  def self.csv_generator
    CSV.generate(headers: true) do |csv|
      csv << HEADER
      %w[trade_suspensions appendix_i mandatory_quotas].each do |type|
        data = ShipmentsApiRetriever.api_call(type)['shipments']
        data.each do |row|
          row[:compliance_type] = type
          csv << row.values
        end
      end
    end
  end
end
