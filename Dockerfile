FROM node:alpine
WORKDIR /usr/src
RUN npm install -g @11ty/eleventy
ADD src/ ./src
COPY .eleventy.js .
COPY package.json .
COPY package-lock.json .
RUN npm install -g nunjucks
RUN npm install
RUN npx eleventy
CMD npx eleventy --serve --port=$PORT
EXPOSE $PORT