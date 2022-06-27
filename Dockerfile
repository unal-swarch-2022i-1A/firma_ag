FROM node:16-alpine
LABEL org.opencontainers.image.source https://github.com/unal-swarch-2022i-1A/firma_ag
WORKDIR /usr/src/app
COPY package*.json ./
COPY .env.docker .env
COPY ./src /usr/src/app/src
RUN npm install
EXPOSE 8080 
ENTRYPOINT [ "npm", "run", "start" ]