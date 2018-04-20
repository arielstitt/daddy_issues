class RenameColumnTypeToMerchType < ActiveRecord::Migration[5.1]
  def change
    rename_column :merchandises, :type, :merch_type
  end
end
