import { Request, Response } from "express";
import { DeleteCustomerUseCase } from "./delete-customer.usecase";

export class DeleteCustomerController {

    constructor(private deleteCustomerUseCase: DeleteCustomerUseCase) {}

    async handle(request: Request, response: Response) {
        try {
            const { id } = request.params;
            await this.deleteCustomerUseCase.execute(id);
            return response.status(204).send();
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            return response.status(400).json({ error: errorMessage });
        }
    }
}
