import { Router } from "express";
import { AuthenticateUserController } from "./controllers/authenticateUserController";
import { CreateMessageController } from "./controllers/createMessageController";
import { last3MessagesController } from "./controllers/last3MessagesController";
import { ProfileUserController } from "./controllers/ProfileUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post("/messages", ensureAuthenticated, new CreateMessageController().handle);

router.get("/messages/last3", new last3MessagesController().handle)

router.get("/profile", ensureAuthenticated, new ProfileUserController().handle)

export { router };