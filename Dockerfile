FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install -g npm@latest && npm i
COPY . .
RUN npm run build

FROM nginx:1.22.1 as production-stage
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
