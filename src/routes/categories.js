import { Router } from 'express';

import { createCategory, 
        getCategories, 
        getOneCategory,        
        deleteCategory,    
        updateCategory } from '../controllers/category.controller';


const router = Router();
// /api/categories
router.post('/', createCategory );
router.get('/', getCategories );
// /api/categories/:id
router.get('/:id', getOneCategory);
router.delete('/:id', deleteCategory);
router.put('/:id', updateCategory);

export default router;