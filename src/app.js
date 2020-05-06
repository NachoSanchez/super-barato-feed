import express, { json } from 'express';
import cors from 'cors'
import morgan from 'morgan';

//importación de rutas

import categoryRoutes  from './routes/categories';
import subCategoryRoutes from './routes/subCategories';
import productTypeRoutes from './routes/productTypes';
import commerceTypeRoutes from './routes/commerceTypes';
import commerceRoutes from './routes/commerces';
import productRoutes from './routes/products';
import priceRoutes from './routes/prices';

 
//inicialización
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(json());
app.use(cors());

//aplicando rutas

app.use('/api/categories',categoryRoutes );
app.use('/api/sub_categories',subCategoryRoutes );
app.use('/api/product_types', productTypeRoutes);
app.use('/api/commerce_types', commerceTypeRoutes );
app.use('/api/commerces', commerceRoutes );
app.use('/api/products', productRoutes);
app.use('/api/prices', priceRoutes);


export default app;