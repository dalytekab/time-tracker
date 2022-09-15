# Install node dependencies 
FROM node:16.17.0 as dependencies
WORKDIR /app
COPY ././package.json ./
RUN npm install
COPY . .
#RUN ls -la /app/node_modules/
RUN npx prisma generate --schema=./src/prisma/schema.prisma


# FE
FROM node:16.17.0 as build-client
WORKDIR /app
COPY ././timetracker-frontend/package.json ./
COPY ././timetracker-frontend/package-lock.json ./
RUN npm install
COPY ././timetracker-frontend/. .
ARG VUE_APP_DATABASE_URL=$API
RUN npm run build

# RUN
FROM node:16.17.0 as builder
WORKDIR /app
ADD . .
COPY --from=dependencies /app/node_modules/ /app/node_modules/
COPY --from=build-client /app/dist/ /app/fo_client/dist/
CMD ["npm", "run", "start:migrate:prod"]



