Rails.application.routes.draw do
  devise_for :users

  get 'download/download_all'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'dashboard#index'
end
