FROM --platform=linux/amd64 ruby:2.6.10-slim

ENV BUNDLE_PATH="/usr/local/bundle"

# Debian bullseye left LTS on 2026-08-31. security.debian.org then dropped the
# bullseye-security pool, so its packages 404 and its Release file expired;
# `apt-get update` fails and, chained with `&&` below, takes the whole build
# with it (exit 100).
#
# Pin every suite to a snapshot taken on the last day of LTS. Two alternatives
# were measured on the build host and rejected:
#   - repointing security at archive.debian.org: that suite is simply not there
#     ("does not have a Release file"), so apt-get update still fails;
#   - dropping the security suite and using bullseye main: builds, but silently
#     rolls packages back to their pre-security versions (vim-runtime +deb11u1
#     instead of +deb11u3), and breaks again once bullseye leaves deb.debian.org
#     - it is already published on archive.debian.org.
# The snapshot keeps +deb11u3 and is immune to further mirror changes.
#
# snapshot-cloudflare.debian.org, not snapshot.debian.org: the latter is heavily
# rate-limited and times out in CI. Measured here at ~76s for a full apt layer.
#
# This freezes the base at bullseye's final security state - no NEW fixes land.
# It buys time; it is not a substitute for moving off Ruby 2.6.10 / bullseye.
RUN printf '%s\n' \
      "deb http://snapshot-cloudflare.debian.org/archive/debian/20260901T000000Z bullseye main" \
      "deb http://snapshot-cloudflare.debian.org/archive/debian-security/20260901T000000Z bullseye-security main" \
      "deb http://snapshot-cloudflare.debian.org/archive/debian/20260901T000000Z bullseye-updates main" \
      > /etc/apt/sources.list \
 && printf '%s\n' \
      'Acquire::Check-Valid-Until "false";' \
      'Acquire::Retries "5";' \
      > /etc/apt/apt.conf.d/99snapshot-pin

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
