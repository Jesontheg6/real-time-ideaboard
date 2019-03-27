class User < ApplicationRecord
# Include default devise modules.
devise :database_authenticatable, :registerable,
		:recoverable, :rememberable, :trackable, :validatable
	include DeviseTokenAuth::Concerns::User

<<<<<<< HEAD
	has_many :boards
	has_many :ideas
	
=======
	has_many :ideas
>>>>>>> refs/remotes/origin/master
end
