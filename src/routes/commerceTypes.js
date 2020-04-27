import { Router } from 'express';
const router = Router();

import { getCommerceTypes, 
         createCommerceType,
         getOneCommercetype,
         updateCommerceType,
         deleteCommerceType,
         filterCommercesByType } from '../controllers/commerceType.controller';

// /api/commerce_types
router.get('/', getCommerceTypes); 
router.post('/', createCommerceType)

// /api/commerce_types/:id
router.get('/:id', getOneCommercetype);
router.put('/:id', updateCommerceType);
router.delete('/:id', deleteCommerceType);
router.get('/filter', filterCommercesByType );

export default router;