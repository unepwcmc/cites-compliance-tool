class Rails::HealthController < ActionController::Base
  def show
    head :ok
  end
end
