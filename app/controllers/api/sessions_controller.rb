class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ["Username or password is incorrect"], status: 422
    end
  end

  def show
    @user = currentUser
    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ["ERRORR"], status: 422
    end

  end

  def destroy
    current_user.reset_session_token!
    session[:session_token] = nil
    current_user = nil
    render json: {}
  end
end
