import { Router } from 'express';

import { getSubCategoriesByCategory,
         getSubCategories } from '../controllers/subCategory.controller';


const router = Router();
// /api/sub_categories
router.get('/', getSubCategories);

// /api/sub_categories/:cat_id
router.get('/:cat_id', getSubCategoriesByCategory );


export default router;