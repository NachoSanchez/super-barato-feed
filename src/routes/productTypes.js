import { Router } from 'express';

import { filterBySubCat,
         getProductTypes } from '../controllers/productType.controller';


const router = Router();

// /api/product_types
router.get('/', getProductTypes);
// /api/product_types/filter?subcat_id=**
router.get('/filter', filterBySubCat );


export default router;