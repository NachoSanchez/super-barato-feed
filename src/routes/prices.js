import { Router } from 'express';
import {    createPrice, 
            getPrices,
            getPricesFiltered       } from '../controllers/price.controller'

const router = Router();

router.get('/', getPrices);
router.post('/', createPrice);

router.get('/filter', getPricesFiltered);

export default router;