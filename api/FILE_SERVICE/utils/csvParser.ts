import csvParser from 'csv-parser';
import fs from 'fs';

type Client = {
    name: string;
    password: string;
    email: string;
    phone: string;
};

export const parseCSV = (filePath: string): Promise<Client[]> => {
    return new Promise((resolve, reject) => {
        const results: Client[] = [];
        fs.createReadStream(filePath)
            .pipe(csvParser())
            .on('data', (data) => results.push(data))
            .on('end', () => resolve(results))
            .on('error', (error) => reject(error));
    });
};
