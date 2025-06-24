# Estágio 1: Build
FROM node:18-alpine AS build
WORKDIR /app

# --- LINHAS NOVAS ---
# Declara um argumento que pode ser passado durante o build
ARG VITE_API_URL
# Cria uma variável de ambiente DENTRO deste estágio de build
ENV VITE_API_URL=$VITE_API_URL
# ------------------

COPY package.json package-lock.json* ./
RUN npm install
COPY . .
# O comando 'npm run build' agora usará a variável VITE_API_URL
RUN npm run build

# Estágio 2: Production
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80