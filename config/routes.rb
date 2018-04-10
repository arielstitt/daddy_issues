Rails.application.routes.draw do
  namespace :api do
    resources :issues do
    end
  end
end
