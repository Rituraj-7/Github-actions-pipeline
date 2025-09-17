FROM nginx:stable-alpine
COPY index.html /usr/share/nginx/html/index.html
# Use nginx to reverse proxy /api to app container when deployed behind same domain (ALB)
EXPOSE 80
