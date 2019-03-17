Rails.application.routes.draw do
  root 'portfolio#index'
  resources :portfolio, only: [:index]
end
