FROM nginx:1.17.9
RUN rm -rf /usr/share/nginx/html/*
COPY ./dist /usr/share/nginx/html
RUN chmod 777 -R /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
