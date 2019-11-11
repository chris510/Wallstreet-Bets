class CreateWatches < ActiveRecord::Migration[5.2]
  def change
    create_table :watches do |t|
      t.integer :user_id, null: false
      t.string :symbol, null: false
      t.timestamps
    end
    add_index :watches, :user_id
  end
end
