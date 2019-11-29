# Build Image
FROM node:12
# Create app directory
WORKDIR /search-api/src/server
# Install app dependencies
# wildcard is used to ensure package.lock and package-lock.json are copied
COPY package*.json ./
RUN npm install
# If building for production 
# RUN npm ci --only=production
# Bundle source
COPY . .
# Port
EXPOSE 8080
# Run CMD
CMD ['node', 'server.ts']

