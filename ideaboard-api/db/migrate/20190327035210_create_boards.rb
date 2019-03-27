class CreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
    	t.string :boardtitle
    	t.references :idea ,foreign_key: true
    	t.references :user ,foreign_key: true

      	t.timestamps
    end
  end
end
