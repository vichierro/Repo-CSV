import { Request, Response } from "express";
import { CreateCustomerUseCase } from "./create-customer.usecase";

export class CreateCustomerController {
  constructor(private createCustomerUseCase: CreateCustomerUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;
    try {
      const newCustomer = await this.createCustomerUseCase.execute({ email });
      return response.status(201).json(newCustomer);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      return response.status(400).json({ error: errorMessage });
    }
  }
}

export default CreateCustomerController;
