FROM node:lts-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build


FROM nginx:1.25.3-alpine AS react-prod
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 4000
CMD ["nginx", "-g", "daemon off;"]