
FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

COPY apps/frontend/package*.json ./apps/frontend/
COPY apps/backend/package*.json ./apps/backend/
RUN npm install

COPY . .


EXPOSE 5173

CMD ["npm", "run", "dev:docker"]
