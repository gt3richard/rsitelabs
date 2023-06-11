FROM node:18-alpine

COPY . .
RUN npm run build

EXPOSE 3000
CMD [ "npm", "run", "start" ]