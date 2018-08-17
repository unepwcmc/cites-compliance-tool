class UsersController < ApplicationController
  before_action :authenticate_user!

  def index; end

  def create
    @user = User.new(email: params[:email], password: params[:password])
    @user.save!
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy unless @user.admin? || @user.id == current_user.id
  end
end
