import { Router } from 'express';
import {    createPrice, 
            getPrices       } from '../controllers/price.controller'

const router = Router();

router.get('/', getPrices)
router.post('/', createPrice);

export default router;