FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

WORKDIR /usr/src/app/apps/frontend

RUN npm install

WORKDIR /usr/src/app/apps/backend
RUN npm install

WORKDIR /usr/src/app

CMD ["npm", "run", "dev:docker"]
