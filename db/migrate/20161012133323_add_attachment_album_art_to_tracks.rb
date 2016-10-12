class AddAttachmentAlbumArtToTracks < ActiveRecord::Migration
  def self.up
    change_table :tracks do |t|
      t.attachment :album_art
    end
  end

  def self.down
    remove_attachment :tracks, :album_art
  end
end
