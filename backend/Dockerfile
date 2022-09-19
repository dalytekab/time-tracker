# Install node dependencies 
FROM node:16.17.0 as dependencies
WORKDIR /app
COPY ././package*.json ./
RUN npm install
COPY . .
RUN npx prisma generate --schema=./src/prisma/schema.prisma
RUN npm run build

# RUN
FROM node:16.17.0 as builder
WORKDIR /app
ADD . .
COPY --from=dependencies /app/node_modules/ /app/node_modules/
COPY --from=dependencies /app/dist/ /app/dist/
EXPOSE 3000
CMD ["npm", "run", "start:migrate"]



