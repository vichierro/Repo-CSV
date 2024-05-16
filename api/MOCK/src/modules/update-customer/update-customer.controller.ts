import { Request, Response } from "express";
import { UpdateCustomerUseCase } from "./update-customer.usecase";

export class UpdateCustomerController {

    constructor(private updateCustomerUseCase: UpdateCustomerUseCase) {}

    async handle(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const result = await this.updateCustomerUseCase.execute(id, request.body);
            return response.status(200).json(result);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            return response.status(400).json({ error: errorMessage });
        }
    }
}
