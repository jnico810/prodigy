class Api::VotesController < ApplicationController

  def create
    # debugger
    @vote = Vote.new(vote_params)
    @track = @vote.annotation.track

    if @vote.save
      render 'api/tracks/show'
    else
      render 'no'
    end
  end

  def update
    @vote = Vote.find(vote_params[:id])
    @track = @vote.annotation.track
    # debugger
    if @vote.value == vote_params[:value].to_i
      self.destroy
      render 'api/tracks/show'
    elsif @vote.update(value: vote_params[:value])
      render 'api/tracks/show'
    else
      render 'no'
    end

  end

  def destroy
    @vote.destroy
    @track = @vote.annotation.track
  end

  private

  def vote_params
    params.require(:vote).permit(:author_id, :annotation_id, :value, :id)
  end

end
