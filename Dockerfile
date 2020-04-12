FROM node:alpine
WORKDIR /usr/src
RUN npm install -g @11ty/eleventy
ADD css ./css
ADD html ./html
ADD img ./img
COPY .eleventy.js .
COPY package.json .
RUN npm install -g nunjucks
RUN npx @11ty/eleventy
CMD npx eleventy --serve --port=$PORT
EXPOSE $PORT