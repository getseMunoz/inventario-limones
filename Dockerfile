#FROM node:22-alpine
FROM node:14-slim
WORKDIR /app
COPY package*.json ./
RUN npm install -g npm@latest
RUN npm install
COPY . .
EXPOSE 3000
USER node
CMD ["node", "server.js"]

#git add Dockerfile
#git commit -m "Cambio para video "
#git push


#git add Dockerfile
#git commit -m "Arreglado para video "
#git push