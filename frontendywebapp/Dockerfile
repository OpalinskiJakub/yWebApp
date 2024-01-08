FROM node:14 as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm build


FROM httpd:2.4
WORKDIR /usr/local/apache2/htdocs/
COPY --from=builder /app/build .
EXPOSE 80
CMD ["httpd-foreground"]
