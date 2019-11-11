@watches.each do |watch|
  json.set! watch.symbol do
     json.partial! 'api/watches/watch', watch: watch
  end
end