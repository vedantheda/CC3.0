# Use an official Node.js runtime as a base image
FROM node

# Install pnpm globally
RUN npm install -g pnpm

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and pnpm-lock.yaml to the working directory
COPY package.json pnpm-lock.yaml ./

# Install project dependencies using pnpm
RUN pnpm install

# Copy the entire project to the working directory
COPY . .

# Expose the port that Next.js will run on during development
EXPOSE 3000

# Command to run the application in development mode
CMD ["pnpm", "run", "dev"]
