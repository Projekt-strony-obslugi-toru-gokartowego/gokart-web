# Below code for production
# build stage
FROM node:lts-alpine3.19 AS build-stage
WORKDIR /app
COPY ./rakieta/package*.json ./
RUN npm install
COPY ./rakieta/ .
RUN npm run build-only
#RUN npm run build - should be

# production stage
FROM nginx:stable-alpine AS production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]