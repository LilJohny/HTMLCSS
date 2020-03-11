FROM node:alpine
WORKDIR /usr/src
RUN npm install -g @11ty/eleventy
ADD css ./css
ADD html ./html
COPY .eleventy.js .
COPY package.json .
RUN npm install
RUN npx @11ty/eleventy
CMD ["eleventy","--serve","--port=8080"]
EXPOSE 8080
EXPOSE 3001