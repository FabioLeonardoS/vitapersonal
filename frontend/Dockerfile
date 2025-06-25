# Estágio 1: Build
FROM node:18-alpine AS build
WORKDIR /app

# Declara o argumento que pode ser passado durante o build
ARG VITE_API_URL
# Cria uma variável de ambiente para ser usada pelo processo de build
ENV VITE_API_URL=$VITE_API_URL

COPY package.json package-lock.json* ./
RUN npm install
COPY . .
RUN npm run build

# Estágio 2: Production
FROM nginx:stable-alpine

# --- MUDANÇA IMPORTANTE AQUI ---
# Copia TODO o conteúdo da pasta /app/dist (gerada pelo build)
# para a pasta pública do Nginx.
COPY --from=build /app/dist/ /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80