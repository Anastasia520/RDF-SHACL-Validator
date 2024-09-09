FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .
EXPOSE 8000

# Run app in development mode
CMD ["npm", "run", "dev"]
