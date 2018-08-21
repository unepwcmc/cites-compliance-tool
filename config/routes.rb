Rails.application.routes.draw do
  devise_for :users

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'dashboard#index'
  resources :search, only: [:index]

  get 'api/v1/sapi', to: 'api/v1/sapi#index', as: 'api/v1/sapi'
  get 'api/v1/sapi/countries', to: 'api/v1/sapi#countries', as: 'api/v1/sapi/countries'
  get 'api/v1/sapi/terms', to: 'api/v1/sapi#terms', as: 'api/v1/sapi/terms'
  get 'api/v1/sapi/species_autocomplete', to: 'api/v1/sapi#species_autocomplete', as: 'api/v1/sapi/species_autocomplete'
  get 'api/v1/sapi/download', to: 'api/v1/sapi#download', as: 'api/v1/sapi/download'
  get 'api/v1/sapi/search_download', to: 'api/v1/sapi#search_download', as: 'api/v1/sapi/search_download'
  get 'api/v1/sapi/search_download_all', to: 'api/v1/sapi#search_download_all', as: 'api/v1/sapi/search_download_all'
end
