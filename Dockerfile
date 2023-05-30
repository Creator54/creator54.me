FROM alpine

RUN apk update && apk add npm

WORKDIR /app

RUN npm install http-server

COPY . .

CMD ["./start"]

