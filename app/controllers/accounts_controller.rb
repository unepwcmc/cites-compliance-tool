class AccountsController < ApplicationController
  before_action :authenticate_user!

  def index
    @users = User.all.select{ |user| user.id != current_user.id }.to_json
  end
end
