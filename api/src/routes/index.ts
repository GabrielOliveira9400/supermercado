import { Router } from 'express';


import * as UserController from '../controllers/userController';
import * as ProductController from '../controllers/productsController';
import {updateProduct} from "../controllers/productsController";




const router = Router();

router.get('/produto', ProductController.allProduct);
router.get('/produto/:_id',ProductController.getProduct);
router.post('/novo-usuario', UserController.addUser);
router.post('/produto', ProductController.addProduct);
router.delete('/produto/:_id', ProductController.removeProduct);
router.put('/produto/:_id', ProductController.updateProduct);



router.get('/random',(req,res) => {
    let randon: number = Math.floor(Math.random()*10);
    res.json({number: randon})
});

export default router;