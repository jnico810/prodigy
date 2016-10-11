class Api::AnnotationsController < ApplicationController

  #  id         :integer          not null, primary key
  #  author_id  :integer          not null
  #  track_id   :integer          not null
  #  start_idx  :integer          not null
  #  end_idx    :integer          not null
  #  created_at :datetime         not null
  #  updated_at :datetime         not null
  #

  def create

    @annotation = Annotation.new(author_id: current_user.id,
    start_idx: annotation_params[:start_idx],
    end_idx: annotation_params[:end_idx],
    body: annotation_params[:body],
    track_id: annotation_params[:track_id])
    @track = Track.find(annotation_params[:track_id])
    if @annotation.save
      render 'api/tracks/show'
    else
      render 'no'
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
