FROM node:22-alpine

WORKDIR /app

COPY ./package.json /app/package.json

RUN npm i

COPY ./* /app

ENV PORT=3001
ENV HOSTNAME="0.0.0.0"

CMD ["npm", "run", "dev"]