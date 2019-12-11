class AddSymbolsToOrders < ActiveRecord::Migration[5.2]
  def change
    remove_column :orders, :stock_id
    add_column :orders, :symbol, :string, null: false
  end
end
