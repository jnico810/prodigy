class Api::SearchController < ApplicationController

  def filter
    @results = Track.where("title ~* ?", params[:query])
    render :index
  end

end
