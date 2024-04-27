FROM node:18

WORKDIR /app

COPY package*.json ./

COPY package*.json ./

COPY sshd_config /etc/ssh/

COPY . .

# Start and enable SSH
RUN apt-get update \
    && apt-get install -y --no-install-recommends dialog \
    && apt-get install -y --no-install-recommends openssh-server \
    && echo "root:Docker!" | chpasswd \
    && chmod u+x /app/init_container.sh

RUN npm install

EXPOSE 3000

ENTRYPOINT [ "/app/init_container.sh" ] 
