import { Request, Response } from "express";
import { Last3MessageService } from "../services/last3MessagesService";

class last3MessagesController {
  async handle(request: Request, response: Response) {

    const service = new Last3MessageService();

    const result = await service.execute();

    return response.json(result);

  }
}

export { last3MessagesController };