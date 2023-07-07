## Otherwise known as the CITES Trade Monitoring Tool

## Local development

* `bundle install`
* `yarn install` # yarn 10.0.0 works
* If you want hot reloading:
  * Ensure `dev_server.hmr` is `true` in `config/webpacker.yml` ([more info](https://github.com/rails/webpacker/blob/master/docs/webpack-dev-server.md#hot-module-replacement))
  * `./bin/webpack-dev-server`
* Add a .env using the .env.example
* `bundle exec rails s`
* Open http://localhost:3000/

For development you can point the app at your local instance of SAPI, or the staging server using the variables in .env, e.g.:
```
SPECIES_API_URL='http://localhost:3001/api/v1/'
OR
SPECIES_API_URL='https://shipments.sapi-staging.linode.unep-wcmc.org/api/v1'
```
