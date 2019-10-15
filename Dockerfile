FROM node:12.10-alpine
WORKDIR /var/app
COPY . ./
EXPOSE 3000
RUN npm install
CMD npm start