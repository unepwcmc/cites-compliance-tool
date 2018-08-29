class AccountsController < ApplicationController
  before_action :authenticate_user!
  before_action :admin_only

  def index
    @users = User.all.reject { |user| user.id == current_user.id }.to_json
  end

  private

  def admin_only
    redirect_to root_path unless current_user.admin?
  end
end
