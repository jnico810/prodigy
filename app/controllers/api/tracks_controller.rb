class Api::TracksController < ApplicationController

  def index
    @tracks = Track.all
  end

  def show
    @track = Track.find_by(title: title)
  end

  def create
    @track = Track.new(track_params)
    if @track.save
      login(@track)
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:track).permit(
    :title, :description, :lyrics, :artist_id, :author_id)
  end
