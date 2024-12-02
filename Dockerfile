FROM node:18

WORKDIR /app

COPY package.json yarn.lock .

RUN yarn install --freeze-lockfile

COPY . .

RUN yarn build

EXPOSE 3001

CMD ["yarn", "start"]