#store-manager

# Usa imagem oficial do Node
FROM node:18

# Copia arquivos
WORKDIR /app

# Copia arquivos
COPY package*.json ./
RUN npm install

COPY . .

# Expõe a porta usada pela aplicação
EXPOSE 3001

# Iniciar a aplicação
CMD ["node", "server.js"]
