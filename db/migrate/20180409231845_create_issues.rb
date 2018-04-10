class CreateIssues < ActiveRecord::Migration[5.1]
  def change
    create_table :issues do |t|
      t.string :name
      t.string :location
      t.string :issue
      t.string :image

      t.timestamps
    end
  end
end
