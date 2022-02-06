# The first stage
# Build React static files
FROM node:14.17.0-alpine as build

WORKDIR /luckerdogs/frontend
COPY ./frontend/package.json ./
COPY ./frontend/package-lock.json ./
RUN npm ci --silent
COPY ./frontend/ ./
RUN npm run build

# The second stage
# Copy React static files and start nginx
FROM nginx:stable-alpine
COPY --from=build /luckerdogs/frontend/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]