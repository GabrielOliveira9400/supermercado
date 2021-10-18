import { Router } from 'express';

import * as HomeController from '../controllers/homeController';
import * as UserController from '../controllers/userController';
import * as ProductController from '../controllers/productsController';




const router = Router();

router.get('/', HomeController.home);
router.post('/novo-usuario', UserController.addUser);
router.post('/produto', ProductController.addProduct);
router.delete('/produto/:_id', ProductController.removeProduct);


export default router;