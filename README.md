## Local development

* `bundle install`
* `yarn install` # yarn 10 works
* If you want hot reloading:
  * Ensure `dev_server.hmr` is `true` in `config/webpacker.yml` ([more info](https://github.com/rails/webpacker/blob/master/docs/webpack-dev-server.md#hot-module-replacement))
  * `./bin/webpack-dev-server`
* `bundle exec rails s`
* Open http://localhost:3000/
