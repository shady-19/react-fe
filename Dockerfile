FROM node:latest

WORKDIR /app

RUN npm install 

RUN npm install requirements.txt

COPY . .

CMD ["npm" , "start"]
