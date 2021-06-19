# TODO
# - Build project
# - Only keep /dist
# - Entry point


# This base image because 14.16 and stretch are current LTS
# And 'slim' to use just essentials for running node
FROM node:14.16.0-stretch-slim

# Create user
USER node

# Make dir as user so it is owned by user
RUN mkdir /home/node/weather-app

# Change working directory
WORKDIR /home/node/weather-app

# # Copy over and change ownership to package.json to run npm install
# COPY --chown=node:node package-lock.json package.json ./
# Copy over and change ownership to package.json to run npm install
COPY --chown=node:node . ./
# # Copy over and change ownership to package.json to run npm install
# COPY --chown=node:node package-lock.json package.json ./

# npm ci ensures dependencies are installed in using package-lock.json specific versions
RUN npm ci

# Build project
RUN npm run build

# npm in production may be a security vulnerability
RUN npm uninstall npm -g

# Container entry point
CMD ["react-scripts", "start"]