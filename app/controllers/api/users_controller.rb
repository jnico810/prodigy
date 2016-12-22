class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    debugger
    @user = User.find(user_params(:id))
    if @user.update(user_picture: user_params[:user_picture])
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:password, :username, :score, :email, :user_picture, :id)
  end
end
