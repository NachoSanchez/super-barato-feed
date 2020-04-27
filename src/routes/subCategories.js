import { Router } from 'express';

import { filterByCategory,
         getSubCategories } from '../controllers/subCategory.controller';


const router = Router();
// /api/sub_categories
router.get('/', getSubCategories);

// /api/sub_categories/filter?cat_id=*
router.get('/filter', filterByCategory );


export default router;