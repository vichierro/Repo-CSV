import { prismaClient } from "../../infra/providers/kafka/database/prismaClient";

export class DeleteCustomerUseCase {
    async execute(id: string) {
        const customer = await prismaClient.customer.findUnique({ where: { id } });
        if (!customer) {
            throw new Error('Customer not found');
        }
        
        await prismaClient.customer.delete({ where: { id } });
    }

    async exists(id: string): Promise<boolean> {
        const customer = await prismaClient.customer.findUnique({ where: { id } });
        return !!customer;
    }
}
