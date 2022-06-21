FROM node:16

LABEL org.opencontainers.image.source https://github.com/unal-swarch-2022i-1A/firma_ag

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

EXPOSE 8080 
CMD [ "node", "src/server.js" ]