# Use an official Node.js runtime as the base image
FROM node:18.12.1

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React app
RUN npm run build

# Expose port 80
EXPOSE 80

# Start the React app when the container runs
CMD ["npm", "start"]
