module Api::V1
  class IdeasController < ApplicationController
<<<<<<< HEAD
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
<<<<<<< HEAD
		params.require(:idea).permit(:title, :body, :color)
=======
		params.require(:idea).permit(:title, :body)
>>>>>>> refs/remotes/origin/master
		end
	end
=======
   	 def index
     	 @ideas = Idea.all
      	render json: @ideas
    	end
	end 
>>>>>>> e4c4851... added connector
end 

