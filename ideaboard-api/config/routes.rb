Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  #devise_for :users
  namespace :api do
    namespace :v1 do
      resources :ideas  
      resources :sessions, only: [:create, :destroy]
    end
  end
end
