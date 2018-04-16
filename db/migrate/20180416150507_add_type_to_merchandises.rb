class AddTypeToMerchandises < ActiveRecord::Migration[5.1]
  def change
    add_column :merchandises, :type, :string
  end
end
