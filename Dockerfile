# Use uma imagem base leve do Node.js
FROM node:18-alpine

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia apenas o package.json e package-lock.json primeiro
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o código fonte
COPY . .

# Porta onde o app vai rodar
EXPOSE 3000

# Comando de inicialização
CMD ["npm", "start"]
