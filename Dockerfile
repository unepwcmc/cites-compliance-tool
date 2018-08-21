FROM ruby:2.5.0
RUN apt-get update && apt-get -y install build-essential libpq-dev nodejs
RUN gem install bundler
RUN mkdir /compliance-tool
WORKDIR /compliance-tool
ADD Gemfile /compliance-tool/Gemfile
ADD Gemfile.lock /compliance-tool/Gemfile.lock
RUN bundle install

ADD . /compliance-tool


RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update
RUN apt-get -y install nodejs yarn
