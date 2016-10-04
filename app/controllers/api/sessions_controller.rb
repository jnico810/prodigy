class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ["Unable to login!"], status: 422
    end
  end

  def destroy
    current_user.reset_session_token!
    session[:session_token] = nil
    current_user = nil
    render json: {}
  end
end
