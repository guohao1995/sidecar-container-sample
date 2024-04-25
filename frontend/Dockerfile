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

# RUN mkdir /client
# WORKDIR /client
# COPY package.json /client/
# RUN npm install
# COPY . .

# # ssh
# ENV SSH_PASSWD "root:Docker!"
# RUN apt-get update \
#         && apt-get install -y openssh-server \
# 	    && echo "$SSH_PASSWD" | chpasswd 

# COPY sshd_config /etc/ssh/
# COPY entrypoint.sh /usr/local/bin/
# RUN chmod +x /usr/local/bin/entrypoint.sh

# EXPOSE 3000 2222
# ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]