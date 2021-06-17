FROM node:15.14.0-buster-slim
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run scripts
RUN npm run build
RUN npm run generate
EXPOSE 8080
ENV HOST=0.0.0.0
ENV PORT=8080
ENTRYPOINT [ "npm", "run" ]
