# Install node dependencies 

FROM node:16.17.0 as dependencies
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
#RUN ls -la /app/node_modules/
RUN npx prisma generate --schema=./src/prisma/schema.prisma




# RUN
FROM node:16.17.0 as builder
WORKDIR /app
ADD . .
COPY --from=dependencies /app/node_modules/ /app/node_modules/
#RUN ls -la /app/node_modules/
#RUN npx prisma migrate --schema=./src/prisma/schema.prisma
CMD ["npm", "run", "start:migrate"]
