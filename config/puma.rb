# Puma can serve each request in a thread from an internal thread pool.
# The `threads` method setting takes two numbers: a minimum and maximum.
# Any libraries that use thread pools should be configured to match
# the maximum value specified for Puma. Default is set to 5 threads for minimum
# and maximum; this matches the default thread size of Active Record.
#
threads_count = ENV.fetch("RAILS_MAX_THREADS") { 5 }
threads threads_count, threads_count

# Specifies the `port` that Puma will listen on to receive requests; default is 3000.
#
port        ENV.fetch("PORT") { 3000 }

# Specifies the `environment` that Puma will run in.
#
environment ENV.fetch("RAILS_ENV") { "development" }

# Specifies the number of `workers` to boot in clustered mode.
# Workers are forked webserver processes. If using threads and workers together
# the concurrency of the application would be max `threads` * `workers`.
# Workers do not work on JRuby or Windows (both of which do not support
# processes).
#
# Puma 3 does not read WEB_CONCURRENCY automatically. This directive lets
# production select multiple processes while the zero fallback preserves
# single-mode development. Remove it after upgrading to Puma 5 or newer,
# where WEB_CONCURRENCY configures workers without a DSL directive.
workers ENV.fetch("WEB_CONCURRENCY") { 0 }

# Puma 3 does not automatically preload clustered workers. Loading Rails before
# forking lets workers share boot-time memory through copy-on-write on the
# shared VM. Remove this after upgrading to Puma 5 or newer, which automatically
# preloads when WEB_CONCURRENCY enables multiple workers.
preload_app!

on_worker_boot do
  # Rails 5.2 can inherit the master's PostgreSQL pool when Puma preloads before
  # forking, so every worker must replace it with a process-local pool. Review
  # and remove this after upgrading to Rails 7.1+ and Puma 5+, once a clustered
  # boot test confirms the framework gives each worker separate connections.
  ActiveRecord::Base.establish_connection
end

# Allow puma to be restarted by `rails restart` command.
plugin :tmp_restart
