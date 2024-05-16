import { Request, Response } from "express";
import { ListCustomersUseCase } from "./list-customers.usecase";

export class ListCustomersController {
    constructor(private listCustomersUseCase: ListCustomersUseCase) {}

    async handle(request: Request, response: Response) {
        try {
            const customers = await this.listCustomersUseCase.execute();
            return response.status(200).json(customers);
        } catch (error) {
            return response.status(500).json({ error: 'Internal server error' });
        }
    }
}
