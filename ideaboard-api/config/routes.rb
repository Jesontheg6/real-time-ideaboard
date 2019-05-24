Rails.application.routes.draw do
<<<<<<< HEAD
  mount_devise_token_auth_for 'User', at: 'auth'
  mount ActionCable.server => '/cable'
  #devise_for :users
  namespace :api do
    namespace :v1 do
      resources :ideas  
      # resources :sessions, only: [:create, :destroy]
=======
  namespace :api do
    namespace :v1 do
      resources :ideas  
>>>>>>> e4c4851... added connector
    end
  end
end
