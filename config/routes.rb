Rails.application.routes.draw do
  devise_for :users

  get 'download/download'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'dashboard#index'
  resources :search, only: [:index]

  get 'api/v1/sapi', to: 'api/v1/sapi#index', as: 'api/v1/sapi'
end
