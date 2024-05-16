// routes.ts
import { Router } from "express";
import { CreateCustomerController } from "../modules/create-customer/create-customer.controller";
import { UpdateCustomerController } from "../modules/update-customer/update-customer.controller";
import { DeleteCustomerController } from "../modules/delete-customer/delete-customer.controller";
import { GetCustomerController } from "../modules/get-customer/get-customer.controller";
import { CreateCustomerUseCase } from "../modules/create-customer/create-customer.usecase";
import { UpdateCustomerUseCase } from "../modules/update-customer/update-customer.usecase";
import { DeleteCustomerUseCase } from "../modules/delete-customer/delete-customer.usecase";
import { GetCustomerUseCase } from "../modules/get-customer/get-customer.usecase";
import { ListCustomersController } from "../modules/list-customer/list-costumers.controller";
import { ListCustomersUseCase } from "../modules/list-customer/list-customers.usecase";

const router = Router();

// Criação das instâncias dos casos de uso
const createCustomerUseCase = new CreateCustomerUseCase();
const updateCustomerUseCase = new UpdateCustomerUseCase();
const deleteCustomerUseCase = new DeleteCustomerUseCase();
const getCustomerUseCase = new GetCustomerUseCase();
const listCustomersUseCase = new ListCustomersUseCase();

// Rotas para criar, atualizar, excluir e obter clientes
router.post("/customers", (request, response) => {
    new CreateCustomerController(createCustomerUseCase).handle(request, response);
});

router.put("/customers/:id", (request, response) => {
    new UpdateCustomerController(updateCustomerUseCase).handle(request, response);
});

router.delete("/customers/:id", (request, response) => {
    new DeleteCustomerController(deleteCustomerUseCase).handle(request, response);
});

router.get("/customers/:id", (request, response) => {
    new GetCustomerController(getCustomerUseCase).handle(request, response);
});

router.get("/customers", (request, response) => {
    new ListCustomersController(listCustomersUseCase).handle(request, response);
});

export { router };
