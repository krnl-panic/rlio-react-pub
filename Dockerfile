FROM node:16-alpine as base
# Alpine images missing dependencies
RUN apk add --no-cache git
WORKDIR /usr/app

# Default environment (build + run time)
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

EXPOSE $PORT
# App and dev dependencies
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install --production=false
# App source
COPY . .
RUN yarn build:prod

# Build step for production
FROM base
# Prune dev dependencies, modules ts files, yarn cache after build
RUN yarn install --production
 
RUN yarn autoclean --init && \
    echo *.ts >> .yarnclean && \
    yarn autoclean --force

RUN yarn cache clean

CMD ["node", "dist/server.js"]