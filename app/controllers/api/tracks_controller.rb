class Api::TracksController < ApplicationController

  def index
    @tracks = Track.all
  end

  def show
    @track = Track.find(params[:id])
  end

  def create
    artist = Artist.find_by(name: track_params[:artist])
    if !artist
      artist = Artist.create(name: track_params[:artist])
    end
    @track = Track.new(
      title: track_params[:title],
      album: track_params[:album],
      description: track_params[:description],
      lyrics: track_params[:lyrics],
      author_id: current_user.id,
      artist_id: artist.id)
    if @track.save
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end
  private

  def track_params
    params.require(:track).permit(
    :title, :description, :lyrics, :artist, :artist_id, :author_id, :album)
  end
end
