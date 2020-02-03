Rails.application.routes.draw do

      devise_for :users
      get '*path', to: 'pages#index', constraints: ->(request){ request.format.html? }
      resources :locations
      resources :trips
      root to: 'pages#index'
end
