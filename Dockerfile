FROM node:lts-alpine

WORKDIR /app

ADD package.json package-lock.json /app/

RUN npm install

RUN npm install -g http-server

ADD . /app/

ENV HOST 0.0.0.0

ENV NODE_ENV production
ENV BASE_URL /admin/

RUN npm run build

RUN npm run export

EXPOSE 3000

# start command
CMD ["http-server", "-p 3000", "./dist"]