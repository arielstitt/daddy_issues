class ChangeIssueToDescriptionOnIssues < ActiveRecord::Migration[5.1]
  def change
    rename_column :issues, :issue, :description 
  end
end
