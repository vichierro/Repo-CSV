import { prismaClient } from "../../infra/providers/kafka/database/prismaClient";

export class ListCustomersUseCase {
    async execute() {
        const customers = await prismaClient.customer.findMany();
        return customers;
    }
}
