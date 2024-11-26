FROM node:23.1.0 AS builder
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:23.1.0
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --production

COPY --from=builder /usr/src/app/dist ./dist
COPY ./public ./public
EXPOSE 3000
CMD ["node", "dist/index.js"]