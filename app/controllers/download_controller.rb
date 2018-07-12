class DownloadController < ApplicationController
  def download_all
    send_data CsvDownloader.csv_generator,
              filename: "trade_suspensions-#{Date.today}.csv"
  end
end
