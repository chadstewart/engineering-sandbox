FROM node:lts-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build
RUN npm run build-storybook


FROM nginx:1.25.3-alpine AS react-prod
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx/website/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 4000
CMD ["nginx", "-g", "daemon off;"]


FROM nginx:1.25.3-alpine AS storybook
COPY --from=builder /app/storybook-static /usr/share/nginx/html
COPY nginx/storybook/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3999
CMD ["nginx", "-g", "daemon off;"]