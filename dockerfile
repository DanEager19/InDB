FROM node:latest as builder

RUN npm install && npm build

FROM nginx:latest

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]