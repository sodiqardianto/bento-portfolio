# Development Stage
FROM node:22-alpine AS development
WORKDIR /app
COPY . .
RUN npm install && npm list next
EXPOSE 3000
VOLUME /app
CMD ["npm", "run", "dev"]


# Production Stage
FROM node:22-alpine AS production
WORKDIR /app
COPY --from=development /app .
RUN npm install --production
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]