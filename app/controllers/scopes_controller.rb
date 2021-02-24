class ScopesController < ApplicationController
  def index
    send_file File.join(Rails.root, "public/michigan/chapter_001.xml")
  end
end
