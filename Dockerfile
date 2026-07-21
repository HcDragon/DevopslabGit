# ── Dockerfile for KEZIA Rooftop Frontend ──
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files for cached dependency installation
COPY package*.json ./

# Install dependencies
RUN npm ci || npm install

# Copy application source
COPY . .

# Expose Vite dev server port
EXPOSE 5173

# Start development server with hot-reload enabled
CMD ["npm", "run", "dev"]
