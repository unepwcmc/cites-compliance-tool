Rails.application.routes.draw do
  get 'download/download'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'dashboard#index'
  resources :search, only: [:index]
end
