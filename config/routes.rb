Rails.application.routes.draw do
  namespace :api do
    resources :issues
      resources :carts do
        resources :merchandises
    end
    end
  end
