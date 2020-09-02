FROM node:14.9.0-alpine3.11
EXPOSE 3000
COPY . /app
WORKDIR /app
RUN npm install
CMD npm run start