class Api::VotesController < ApplicationController

  def create
    @vote = Vote.new(vote_params)
    @track = @vote.annotation.track

    if @vote.save
      render 'api/tracks/show'
    else
      render :no
    end
  end

  def update
  end

  def destroy
  end

  private

  def vote_params
    params.require(:vote).permit(:author_id, :annotation_id, :value)
  end

end
