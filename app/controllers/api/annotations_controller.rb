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
    @track = Track.find(annotation_params[:track_id])
    @track.annotations.create(
     author_id: current_user.id,
     start_idx: annotation_params[:start_idx],
     end_idx: annotation_params[:end_idx],
     body: annotation_params[:body]
     )
    render 'api/tracks/show'
  end

  def destroy
    @annotation = Annotation.find(params[:id])
    @annotation.destroy
  end

  private

  def annotation_params
    params.require(:annotation).permit(:track_id, :start_idx, :end_idx, :body)
  end



end
