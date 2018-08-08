# TODO: Stop the current user from deleting their own account
# TODO: Prevent admin accounts from being deleted?

class UsersController < ApplicationController
  before_action :authenticate_user!

  def index
  end

  def create
    @user = User.new(:email => params[:email], :password => params[:password])
    @user.save!
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
  end
end
