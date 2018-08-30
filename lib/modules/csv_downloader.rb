module CsvDownloader
  HEADER = %w[id year appendix taxon_name taxon_concept_id class_name order_name
              family_name genus_name term term_id importer_reported_quantity
              exporter_reported_quantity unit importer importer_iso importer_id
              exporter exporter_iso exporter_id origin purpose source
              import_permit export_permit origin_permit issue_type
              rank_name].freeze

  def self.csv_generator(data)
    return unless data
    CSV.generate(headers: true) do |csv|
      csv << HEADER
      data.each do |row|
        csv << row.values
      end
    end
  end
end
