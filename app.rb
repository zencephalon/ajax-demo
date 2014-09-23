require 'sinatra'
require 'json'

get '/' do
  erb :hello
end

get '/example_ajax' do
  "<p>Hello from Sinatra</p>"
  500
end

get '/article' do
  p params
  if params[:ajax]
    {title: "War in Syria", content: "ISIS blah blah"}.to_json
  else
    erb :hello
  end
end

post '/example_ajax' do
  "HELLO FROM THE POST"
end