# Build stage
FROM node:23-alpine3.19 AS build

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

# Production stage
FROM node:23-alpine3.19 AS production

WORKDIR /app

COPY package.json .

RUN npm ci --only=production

COPY --from=build /app/dist ./dist

CMD ["node", "dist/main.js"]
