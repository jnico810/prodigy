class Api::AnnotationsController < ApplicationController

  def create
    @annotation = Annotation.new(author_id: current_user.id,
    start_idx: annotation_params[:start_idx],
    end_idx: annotation_params[:end_idx],
    body: annotation_params[:body],
    track_id: annotation_params[:track_id])
    @annotations = @annotation.track.annotations
    if @annotation.save
      render :index
    else
      render json: @annotation.errors.full_messages, status: 422
    end
  end

  def destroy
    @annotation = Annotation.find(params[:id])
    @track = @annotation.track
    @annotation.destroy
    render 'api/tracks/show'
  end

  private
  def annotation_params
    params.require(:annotation).permit(:track_id, :start_idx, :end_idx, :body)
  end
end
