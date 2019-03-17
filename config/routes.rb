Rails.application.routes.draw do
  root 'portfolios#index'
  resources :portfolio, only: [:index]
end
