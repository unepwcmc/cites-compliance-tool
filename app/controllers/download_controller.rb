class DownloadController < ApplicationController
  def download_all
    send_data CsvDownloader.csv_generator,
              filename: "all_shipments_#{Date.today}.csv"
  end
end
