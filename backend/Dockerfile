# Use a imagem oficial do Node.js
FROM node:18-alpine

# Crie um diretório de trabalho
WORKDIR /app

# Copie o pacote de dependências primeiro
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o código-fonte para dentro da imagem
COPY . .

# Exponha a porta 3000
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "start"]