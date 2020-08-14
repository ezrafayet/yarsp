# This is not a production dockerfile

#FROM alpine:latest

#RUN apk add --update nodejs npm
#RUN npm install -g pm2

#WORKDIR /usr/src/app

#COPY package*.json ./

#RUN npm i

#RUN npm cache clean && npm --update-checksums

#COPY . ./

#EXPOSE 3000

#RUN npm run start

#CMD ["npm", "start"]