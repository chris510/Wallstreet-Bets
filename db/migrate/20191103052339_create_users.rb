class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :first_name
      t.string :last_name
      t.string :email
      t.timestamps
    end
    add_index :users, :username, unique: true
  end
end
