# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## Local development

* `bundle install`
* `yarn install`
* If you want hot reloading:
  * Ensure `dev_server.hmr` is `true` in `config/webpacker.yml` ([more info](https://github.com/rails/webpacker/blob/master/docs/webpack-dev-server.md#hot-module-replacement))
  * `./bin/webpack-dev-server`
* `bundle exec rails s`
* Open http://localhost:3000/


# Docker


Clone repo

* Rename .env-docker to .env and configure with correct info
* docker-compose build
* docker-compose run web rake db:create
* docker-compose run web rake db:migrate
* docker-compose run web rake db:seed
* docker-compose run web rake assets:precompile
* docker-compose up
