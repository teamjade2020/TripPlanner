class CreateLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :locations do |t|

      t.string :location
      t.date :start_date
      t.date :end_date
      t.text :details
      t.references :trip , null: false, foreign_key: true
      t.timestamps
    end
  end
end
