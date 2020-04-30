import { Router } from 'express';

import {    createInstance, 
            getInstances, 
            getOneInstance, 
            getInstancesByType,
            searchInstance,
            updateInstance,
            deleteInstance       } from '../controllers/product.controller';

const router = Router();

// /api/products?limit=30&page=0  --DEFAULT de ser reescrito es via Query str
router.get('/', getInstances);

// /api/products
router.post('/', createInstance);

// /api/products/:id
router.put('/:id', updateInstance);
router.delete('/:id', deleteInstance );
router.get('/:id', getOneInstance);

// /api/products/type/:product_type_id
router.get('/type/:type', getInstancesByType);

// /api/products/search/:input value
router.get('/search/:filter', searchInstance);


export default router;