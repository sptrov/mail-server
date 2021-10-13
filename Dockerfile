FROM node:14

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 5544

CMD ["node", "index.js" ]

#docker build -t mail-server .
#docker run mail-server