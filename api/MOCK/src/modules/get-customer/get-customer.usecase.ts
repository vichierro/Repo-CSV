import { prismaClient } from "../../infra/providers/kafka/database/prismaClient";

export class GetCustomerUseCase {
    async execute(id: string) {
        const customer = await prismaClient.customer.findUnique({ where: { id } });
        if (!customer) {
            throw new Error('Customer not found');
        }
        return customer;
    }
}