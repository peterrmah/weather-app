# This base image because 14.16 and stretch are current LTS
# And 'slim' to use just essentials for running node
FROM node:14.16.0-stretch-slim

# Switch users to prexisting user from distro
USER node
# Make dir as user so it is owned by user
RUN mkdir /home/node/weather-app-temp
WORKDIR /home/node/weather-app-temp
COPY --chown=node:node . .
# Install dependencies and build project
RUN npm ci
RUN npm run build

# Remove source code
RUN mkdir /home/node/weather-app
RUN mv /home/node/weather-app-temp/node_modules /home/node/weather-app-temp/build /home/node/weather-app
RUN rm -r /home/node/weather-app-temp

WORKDIR /home/node/weather-app

# Container entry point
CMD ["react-scripts", "start"]