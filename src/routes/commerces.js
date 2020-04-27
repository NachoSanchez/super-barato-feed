import { Router } from 'express';
import {getCommerces, createCommerce, getOneCommerce, filterByGeohash } from '../controllers/commerce.controller'

const router = Router();


// /api/commerces
router.get('/', getCommerces);
router.post('/', createCommerce);

// /api/commerces/:id
router.get('/:id', getOneCommerce);

// /api/commerces?geohash=******
router.get('/filter', filterByGeohash);

export default router;