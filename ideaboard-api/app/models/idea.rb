class Idea < ApplicationRecord

	belongs_to :users , optional: true
	
end
