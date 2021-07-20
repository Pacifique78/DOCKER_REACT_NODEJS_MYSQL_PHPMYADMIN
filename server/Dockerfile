FROM node:12.18.4
WORKDIR /app
COPY package.json /app/
COPY package-lock.json /app/
RUN npm install -g sequelize
RUN npm install
COPY . /app/


EXPOSE 5000