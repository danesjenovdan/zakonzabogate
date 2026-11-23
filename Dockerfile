FROM nginx:alpine

RUN rm /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY index.html og.png favicon.ico /usr/share/nginx/html/
COPY assets /usr/share/nginx/html/assets
