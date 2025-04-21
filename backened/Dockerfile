# Use official Node.js image
FROM node:18

# Create app directory inside the container
WORKDIR /app

# Copy only package.json and package-lock.json for faster install step
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of your backend code
COPY . .

# Expose the backend port (usually 5000)
EXPOSE 5000

# Start the server
CMD ["npm", "start"]