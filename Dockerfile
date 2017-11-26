FROM mhart/alpine-node

WORKDIR /opt/app

# Install yarn
RUN mkdir -p /opt
ADD latest.tar.gz /opt/
RUN mv /opt/dist /opt/yarn
ENV PATH "$PATH:/opt/yarn/bin"

ADD package.json yarn.lock /tmp/

# Copy cache contents (if any) from local machine
ADD .yarn-cache.tgz /

# Install packages
RUN cd /tmp && yarn

# INSTALL GIT WHEN USING REACT-CORE
RUN apk add --no-cache bash git openssh

# EDIT THIS PART TO GET YOUR NPM LOGIN
ADD .npmrc /root/

# Install packages
# RUN cd /tmp && yarn - bug on scoped packages
RUN cd /tmp && npm i

# Install packages
#RUN cd /tmp && yarn

RUN mkdir -p /opt/app && cd /opt/app && ln -s /tmp/node_modules

# The App
ADD . /opt/app
RUN touch .env
RUN npm run build

EXPOSE 80

CMD npm run production
