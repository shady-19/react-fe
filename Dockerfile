FROM node:latest

WORKDIR /app

RUN npm install 

RUN  requirements.txt

COPY . .

CMD ["npm" , "start"]
