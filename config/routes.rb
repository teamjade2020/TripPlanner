Rails.application.routes.draw do
  resources :locations
  resources :trips
      devise_for :users
      get '*path', to: 'pages#index', constraints: ->(request){ request.format.html? }
      root to: 'pages#index'
end
