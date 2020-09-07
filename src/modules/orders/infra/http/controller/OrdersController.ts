import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateOrderService from '@modules/orders/services/CreateOrderService';
import FindOrderService from '@modules/orders/services/FindOrderService';

export default class OrdersController {
  public async show(request: Request, response: Response): Promise<Response> {
    const {
      params: { id },
    } = request;

    const findOrderService = container.resolve(FindOrderService);
    const order = await findOrderService.execute({ id });
    return response.json(order);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      body: { customer_id, products },
    } = request;

    const createOrderservice = container.resolve(CreateOrderService);
    const order = await createOrderservice.execute({ customer_id, products });
    return response.json(order);
  }
}
