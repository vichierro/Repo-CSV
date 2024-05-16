import { Request, Response } from "express";
import { GetCustomerUseCase } from "./get-customer.usecase";

export class GetCustomerController {

    constructor(private getCustomerUseCase: GetCustomerUseCase) {}

    async handle(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const result = await this.getCustomerUseCase.execute(id);
            return response.status(200).json(result);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            return response.status(400).json({ error: errorMessage });
        }
    }
}
