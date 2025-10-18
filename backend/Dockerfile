# Use the official Node.js runtime as base image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json first (for better Docker layer caching)
COPY package.json .

# Install dependencies
RUN npm install

# Copy the rest of application code
COPY . .

# Expose the port our app runs on
EXPOSE 3001

# Command to run our application
CMD ["npm", "start"]
