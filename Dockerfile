FROM node:15

#Proxy settings
ENV http_proxy http://10.58.0.50:8080
ENV https_proxy http://10.58.0.50:8080


WORKDIR /home/node/app

# aqui vc coloca os RUN da vida e outras coisas

RUN apt-get update && apt-get install -y wget

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

RUN node -v
RUN npm -v
# RUN apt-get install redis-server -y
# RUN npm install --global yarn

COPY . .

RUN yarn install

EXPOSE 3334

# RUN ["chmod", "+x", "./.docker/entrypoint.sh"]
# ENTRYPOINT ["./.docker/entrypoint.sh"]
CMD ["yarn","dev"]