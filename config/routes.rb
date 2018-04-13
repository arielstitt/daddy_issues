Rails.application.routes.draw do
  namespace :api do
    resources :issues
      resources :merchandises
    end
  end
end