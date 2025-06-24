# Usa uma imagem oficial do Node.js como base
FROM node:18-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependência
COPY package.json package-lock.json* ./

# Instala as dependências do projeto
RUN npm install

# Copia o resto dos arquivos da sua aplicação
COPY . .

# Expõe a porta que a sua aplicação usa
EXPOSE 3000

# Comando para iniciar a aplicação quando o container subir
CMD [ "npm", "start" ]