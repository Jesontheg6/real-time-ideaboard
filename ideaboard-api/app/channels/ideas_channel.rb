class IdeasChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from 'ideas'
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def receive(data)
    idea = current_user.ideas.find(data["id"])
    idea.update!(title: data["title"], body: data["body"])
    ActionCable.server.broadcast('idea', data)
  end
end