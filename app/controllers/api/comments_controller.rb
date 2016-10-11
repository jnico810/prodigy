class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    @track = Annotation.find(comment_params[:annotation_id]).track
    if @comment.save
      render 'api/tracks/show'
    else
      render 'no'
    end
  end

  def destroy

  end

  def comment_params
    params.require(:comment).permit(:author_id, :annotation_id, :body)
  end
end
