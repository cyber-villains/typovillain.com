FROM node:20.5-alpine

WORKDIR /villain

COPY spa/package.json .
COPY spa/package-lock.json .
RUN npm install --save

CMD ["npm", "run", "start"]
