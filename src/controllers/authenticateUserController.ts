import { json, Request, Response } from "express";
import { AuthenticateUserService } from "../services/authenticateUserService";



class AuthenticateUserController {
    async handle(request: Request, response: Response) {

        const { code } = request.body;

        const service = new AuthenticateUserService();

        try {
            const result = await service.execute(code);
            return response.json(result);
        }catch(error) {
            return response.json(error.message);
        }

    };
};

export { AuthenticateUserController };