class V1::SessionsController < ApplicationController

	def create
		user = User.where(email: params[:email]).first
		 if user && user.authenticate(params[:session][:password])
		 	 json user.as_json(only: [:email, :authentication_token]), status: :created
		 else
		 	head(:unauthorized)
		 end
	end 

	def destroy

	end 

end 