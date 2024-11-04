FROM node:22-alpine

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

WORKDIR /app

RUN apk add --no-cache git
RUN npm install -g pnpm

COPY ./package.json /app/package.json
COPY ./pnpm-lock.yaml /app/pnpm-lock.yaml

RUN pnpm i

COPY ./* /app

ENV PORT=3001
ENV HOSTNAME="0.0.0.0"

CMD ["pnpm", "run", "dev"]