FROM node:15.14.0-alpine3.13
COPY . /app
WORKDIR /app
RUN apk add --no-cache bash
RUN npm install
RUN npm run scripts
RUN npm run build
EXPOSE 8080
ENV HOST=0.0.0.0
ENV PORT=8080
ENTRYPOINT [ "npm", "run" ]
