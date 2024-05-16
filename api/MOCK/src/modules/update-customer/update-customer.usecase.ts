import { prismaClient } from "../../infra/providers/kafka/database/prismaClient";
interface UpdateCustomerRequest {
    id: string;
    email: string;
    // Adicione aqui outros campos necessários
}

export class UpdateCustomerUseCase {
    async execute(id: string, data: UpdateCustomerRequest) {
        const customer = await prismaClient.customer.update({
            where: { id },
            data: {
                id: data.id,
                email: data.email
                // Adicione aqui outros campos necessários
            },
        });
        return customer;
    }
}
