FROM node:18

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --freeze-lockfile

COPY . .

RUN yarn build

EXPOSE 3001

RUN ['yarn', 'start']