class Api::OrdersController < ApplicationController

  def index
    @orders = current_user.orders
  end

  def show
    @order = Stock.find_by(params[:id])
  end

  def create
    @order = Order.new(order_params)
    @order.user_id = current_user.id

    # @stock = Stock.find_by(symbol: params[:order][:symbol])
    # @order.stock_id = @stock.id 

    if @order.save
      render json: ['Success'], status: 200
    else 
      render json: @order.errors.full_messages, status: 422
    end
  end

  private

  def order_params
    params.require(:order).permit(:user_id, :symbol, :price, :shares, :order_type)
  end

end
