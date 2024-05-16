import express from 'express';
import { router } from './infra/routes';
import path from 'path';

const PORT = process.env.PORT ?? 3001;

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(router);

app.listen(PORT, () => console.log(`Server client is running on PORT ${PORT}`));
