# Imagem Base (alpine é mais leve)
FROM node:18-alpine 

# Diretório de trabalho
WORKDIR /app

# Arquivos de dependências
COPY package*.json ./

# Instalação de dependências
RUN npm install

# Copia o resto do código 
COPY . . 

# Buildar o projeto
RUN npm run build

# Porta
EXPOSE 3000

# Comando pra iniciar
CMD [ "npm", "start" ]