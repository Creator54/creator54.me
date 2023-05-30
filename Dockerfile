FROM alpine

RUN apk update && apk add npm

WORKDIR /app

COPY . .

RUN npm install http-server

CMD ["npx","http-server"]

