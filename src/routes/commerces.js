import { Router } from 'express';

import {    getCommerces, 
            createCommerce, 
            getOneCommerce, 
            filterByGeohash, 
            deleteCommerce, 
            updateCommerce   } from '../controllers/commerce.controller'

const router = Router();


// /api/commerces
router.get('/', getCommerces);
router.post('/', createCommerce);

// /api/commerces/:id
router.get('/commerce', getOneCommerce);
router.put('/update', updateCommerce);
router.delete('/delete', deleteCommerce);

// /api/commerces?geohash=******
router.get('/filter', filterByGeohash );

export default router;