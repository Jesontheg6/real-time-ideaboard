module Api::V1
  class IdeasController < ApplicationController
    before_action :authenticate_user! 

  	def index
      if !user_signed_in?
        redirect_to @authenticate_user
      else
     	 @ideas = current_user.ideas.order("created_at DESC")
      	render json: @ideas
   	 end
    end

   	 def create 
    	@idea = current_user.ideas.new(idea_params)
      if @idea.save
        render json: @idea
      else 
        render json: @idea.errors, status: :unprocessable_entity
      end 
    end

    def update
    	@idea = current_user.ideas.find(params[:id])
    	@idea.update_attributes(idea_params)
    	render json: @idea 
    end 

    def destroy
      @idea = current_user.ideas.find(params[:id])
      if @idea.destroy
        head :no_content, status: :ok
      else
        render json: @ideas.errors, status: :unprocessable_entity
      end
    end
    
	private	
	def idea_params
		params.require(:idea).permit(:title, :body, :color)
		end
	end
end 

