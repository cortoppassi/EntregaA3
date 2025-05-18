#report-engine

# Usa imagem oficial do Node
FROM node:18

# Copia arquivos
WORKDIR /app

# Copia arquivos
COPY package*.json ./
RUN npm install

COPY . .

# Expõe a porta usada pela aplicação
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "server.js"]
