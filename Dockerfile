FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i -g pnpm@9.10

RUN pnpm i 

RUN pnpm run optimize

COPY . .

RUN pnpm run build

EXPOSE 5173

CMD ["pnpm", "run", "dev"]

LABEL author="Vedansh <superuser.ntsystems@outlook.com>"