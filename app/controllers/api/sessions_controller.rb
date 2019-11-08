class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username], 
      params[:user][:password]
      )
      
    if @user.nil?
      render json: ['Wrong credentials!'], status: 401
    else
      login!(@user)
      render 'api/users/show';
    end
  end

  def destroy
    if logged_in?
      logout! 
      render json: { message: 'Logout successful.' }
    else
      render json: ['Cannot log out because youre not logged in!']
    end
  end
end
