@watches.each do |watch|
  json.set! watch.user_id do
     json.partial! 'api/watches/watch', watch: watch
  end
end