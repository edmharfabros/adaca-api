FROM node:20-alpine
RUN apk update && apk add curl python3 make g++
RUN corepack enable

WORKDIR /app

COPY package.json ./
COPY pnpm-lock.yaml ./
COPY tsconfig.json ./
COPY nodemon.json ./

RUN pnpm install

COPY src ./src

EXPOSE ${PORT}


CMD ["pnpm","dev"]
