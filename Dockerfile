FROM node:15.14.0-buster-slim as base
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY . /app
FROM base as test
RUN npm ci
COPY . .
RUN npm run scripts
CMD [ "npm", "run", "test"]
#Test ends
FROM base as prod
RUN npm ci --production
RUN npm run build
RUN npm run generate
EXPOSE 8080
ENV HOST=0.0.0.0
ENV PORT=8080
CMD [ "npm", "run", "start"]
