Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :tracks, only: [:create, :index, :show] do
      resources :annotations, only: [:create]
    end
    resources :annotations, only: [:destroy]
    resources :comments, only: [:destroy, :create]
    resources :votes, only: [:destroy, :create, :update]

    get 'search/:query' => 'search#filter', as: :search_filter
  end
end
