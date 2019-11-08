Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update, :show, :index, :destroy] do
      resources :orders, only: [:create, :index, :show]
    end
    resources :stocks, only: [:index, :show]
    resource :session, only: [:create, :destroy]
    
  end
end
