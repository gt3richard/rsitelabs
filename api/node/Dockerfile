FROM node:18-alpine

COPY . .
RUN npm run build

EXPOSE 9000
CMD [ "node", "dist/app.js" ]