FROM --platform=linux/amd64 ruby:2.6.10-slim

ENV BUNDLE_PATH="/usr/local/bundle"

RUN apt-get update -qq && \
  apt-get install --no-install-recommends -y \
  curl build-essential zlib1g-dev git libpq-dev \
  # Editor
  vim nano \
  # For nvm and Node.js
  libffi-dev python python-is-python2 \
  # For webpack-dev-server
  libsodium-dev \
  # For mimemagic gem
  shared-mime-info \
  # Clean up
  && rm -rf /var/lib/apt/lists/*

# Install Ruby bundler
RUN bash -c "gem install bundler -v '1.17.3'"

# Leonardo: I tried installing via apt-get using the source (https://deb.nodesource.com/setup_10.x),
# but it ended up installing version 12.
# Install Node.js 10.24.1 manually
RUN curl -fsSL https://nodejs.org/dist/v10.24.1/node-v10.24.1-linux-x64.tar.xz \
  | tar -xJ -C /usr/local --strip-components=1

# Install Yarn globally using npm
RUN npm install -g yarn

# Rails app lives here
WORKDIR /rails

EXPOSE 3000
CMD ["tail", "-f", "/dev/null"]
