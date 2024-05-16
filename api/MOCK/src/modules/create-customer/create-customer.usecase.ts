import { prismaClient } from "../../infra/providers/kafka/database/prismaClient";
import { v4 as uuidv4 } from 'uuid';

interface IRequest {
  email: string;
}

export class CreateCustomerUseCase {
  async execute({ email }: IRequest) {
    const customer = await prismaClient.customer.create({
      data: {
        externalId: uuidv4(),
        email,
      },
    });
    return customer;
  }
}

export default CreateCustomerUseCase;
