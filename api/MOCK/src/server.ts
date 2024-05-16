import express from 'express';
import { router } from './infra/routes';
import path from 'path';
import cors from 'cors';
import "./infra/providers/kafka/consumers"

const PORT = process.env.PORT ?? 3002;

const app = express();

// Configurar o Express para servir os arquivos estáticos do diretório 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Habilitar o parsing de JSON no corpo das requisições
app.use(express.json());

app.use(cors());

// Roteamento da aplicação
app.use(router);

// Iniciar o servidor
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
