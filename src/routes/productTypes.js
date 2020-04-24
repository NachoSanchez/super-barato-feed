import { Router } from 'express';

import { getProductTypeBySubCat,
         getProductTypes } from '../controllers/productType.controller';


const router = Router();
// /api/product_types
router.get('/', getProductTypes)
// /api/product_types/:subcat_id
router.get('/:subcat_id', getProductTypeBySubCat );


export default router;