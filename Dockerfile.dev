FROM --platform=linux/amd64 ruby:2.5.0-slim-stretch

ENV BUNDLE_PATH="/usr/local/bundle"

# Install dependencies
RUN echo "deb http://archive.debian.org/debian stretch main contrib non-free" > /etc/apt/sources.list && \
  echo "deb http://archive.debian.org/debian-security stretch/updates main contrib non-free" >> /etc/apt/sources.list && \
  echo 'Acquire::Check-Valid-Until "false";' > /etc/apt/apt.conf.d/99no-check-valid-until && \
  apt-get update -qq && \
  apt-get install --no-install-recommends -y \
  curl build-essential zlib1g-dev git libpq-dev \
  # Editor
  vim nano \
  # For nvm and Node.js
  libffi-dev python3 python3-pip \
  # For webpack-dev-server
  libsodium-dev \
  # For mimemagic gem
  shared-mime-info \
  # Clean up
  && rm -rf /var/lib/apt/lists/*

# Install Ruby bundler
RUN bash -c "gem install bundler -v '1.17.3'"

# Install nvm
ENV NVM_DIR=/usr/local/nvm
ENV NODE_VERSION=10.24.1
# Create NVM_DIR directory
RUN mkdir -p $NVM_DIR
# Install nvm
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
# Install Node.js and npm
RUN bash -c "source $NVM_DIR/nvm.sh && nvm install $NODE_VERSION && nvm alias default $NODE_VERSION"
# Add Node.js and npm to PATH
ENV PATH="$NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH"
# Install Yarn globally using npm
RUN bash -c "source $NVM_DIR/nvm.sh && npm install -g yarn"
# Source nvm scripts automatically
RUN echo 'export NVM_DIR="$NVM_DIR"' >> /etc/bash.bashrc && \
  echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> /etc/bash.bashrc

# Rails app lives here
WORKDIR /rails

# Entrypoint prepares the database.
ENTRYPOINT ["/rails/bin/docker-entrypoint"]

EXPOSE 3000
CMD ["tail", "-f", "/dev/null"]
