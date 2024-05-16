import { Router, Request, Response } from "express";
import { CreateCustomerController } from "../modules/create-client/create-client.controller";
import multer from "multer";
import { parseCSV } from "../../utils/csvParser";
import { CreateClientUseCase } from "../modules/create-client/create-client.usecase";
import path from "path";
import fs from "fs";

const router = Router();
const upload = multer({ dest: 'uploads/' });

router.post("/customers", (request, response) => {
    new CreateCustomerController().handle(request, response);
});

router.post("/upload-csv", upload.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send({ error: 'No file uploaded' });
        }
        
        const clients = await parseCSV(req.file.path);
        const useCase = new CreateClientUseCase();
        for (const client of clients) {
            await useCase.execute(client);
        }
        res.status(201).send({ message: 'Clients imported successfully' });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(400).send({ error: errorMessage });
    }
});

// Rota para servir o arquivo HTML
router.get("/", (req: Request, res: Response) => {
    const htmlPath = path.resolve(__dirname, '../../public/index.html');
    fs.readFile(htmlPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading HTML file:', err);
            return res.status(500).send('Internal Server Error');
        }
        res.send(data);
    });
});

export { router };

