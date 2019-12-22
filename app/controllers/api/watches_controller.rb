class Api::WatchesController < ApplicationController

  def index 
    @watches = current_user.watches
  end

  def create
    @watch = Watch.new(watch_params)
    @watch.user_id = current_user.id
    if @watch.save 
      render :show
    else
      render json: @watch.errors.full_messages, status: 422
    end
  end

  def destroy
    @watch = Watch.find(params[:id])
    if @watch
      @watch.destroy
      render json: ['Removed from your watchlist!']
    else
      render json: ['Could not find stock'], status: 401
    end 
  end

  private

  def watch_params
    params.require(:watch).permit(:symbol)
  end
end
