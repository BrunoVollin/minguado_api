# Set the base image to use
FROM node:14-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source code
COPY . .

# Expose port 3000 for the app to listen on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
