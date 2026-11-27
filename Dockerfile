FROM nginx:alpine

RUN rm /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY index.html og.png og-zakon.png og-dvozivka.png favicon.ico /usr/share/nginx/html/
COPY assets /usr/share/nginx/html/assets
COPY kapica /usr/share/nginx/html/kapica
COPY dvozivka /usr/share/nginx/html/dvozivka
