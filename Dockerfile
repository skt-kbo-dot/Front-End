FROM node

# Copy package.json and package-lock.json first to leverage Docker's cache
COPY package.json package-lock.json ./

# Install npm packages
RUN npm install

# Copy the rest of the application code
COPY ./ ./

# Set the entrypoint command to start the application
ENTRYPOINT ["npm", "run", "start"]
