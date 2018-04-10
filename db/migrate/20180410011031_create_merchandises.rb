class CreateMerchandises < ActiveRecord::Migration[5.1]
  def change
    create_table :merchandises do |t|
      t.string :title
      t.decimal :price
      t.string :description
      t.string :image
      t.references :cart, foreign_key: true

      t.timestamps
    end
  end
end
