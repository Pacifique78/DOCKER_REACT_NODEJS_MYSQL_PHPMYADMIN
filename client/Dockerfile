FROM node:12.18.4 as builder
WORKDIR /app
COPY package.json /app/
COPY package-lock.json /app/
RUN npm install
COPY . /app/
RUN npm run build
# RUN cd serve && npm start
# RUN npm uninstall -g serve 
# RUN npm i -g serve
# RUN serve -s build -l 3000

EXPOSE 3000

# FROM nginx
# EXPOSE 81
# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY --from=builder /app/build /usr/share/nginx/html
