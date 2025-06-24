# Estágio 1: Build (Construção)
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
RUN npm run build

# Estágio 2: Production (Produção)
FROM nginx:stable-alpine
# Copia os arquivos construídos para a pasta pública do Nginx
COPY --from=build /app/dist /usr/share/nginx/html
# Copia nossa configuração customizada do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80