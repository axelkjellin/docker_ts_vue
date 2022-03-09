import { Router } from "express";
import authMiddleware from "./app/middlewares/authMiddleware";
import UserController from "./app/controllers/UserController";
import AuthController from "./app/controllers/AuthController";
const router = Router();

router.post('/register', UserController.register)
router.post('/login', AuthController.login)
router.get('/', authMiddleware, UserController.index)
export default router;