class DownloadController < ApplicationController
  def download
    send_data CsvDownloader.csv_generator(params[:year]),
              filename: "#{params[:year] || 'all'}_shipments_#{Time.now.to_i}.csv"
  end
end
