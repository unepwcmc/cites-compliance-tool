module CsvDownloader
  HEADER = %w[Shipment\ ID Year App. Taxon Class Order Family Genus Term
              Importer\ reported\ quantity Exporter\ reported\ quantity Unit
              Importer Exporter Origin Purpose Source Import\ Permit
              Export\ Permit Origin\ Permit Issue\ Type].freeze

  def self.csv_generator(data)
    return unless data
    CSV.generate(headers: true) do |csv|
      csv << HEADER
      data['shipments'].each do |row|
        csv << row.values
      end
    end
  end
end
