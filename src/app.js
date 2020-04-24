import express, { json } from 'express';
import morgan from 'morgan';
//importación de rutas
import productRoutes from './routes/products';
import priceRoutes from './routes/prices';
import commerceRoutes from './routes/commerces';
import categoryRoutes  from './routes/categories';
import subCategoryRoutes from './routes/subCategories';
import ProductTypeRoutes from './routes/productTypes'
 
//inicialización
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(json());

//aplicando rutas
app.use('/api/products', productRoutes);
app.use('/api/prices', priceRoutes);
app.use('/api/commerces', commerceRoutes );
app.use('/api/categories',categoryRoutes );
app.use('/api/sub_categories',subCategoryRoutes );
app.use('/api/product_types',ProductTypeRoutes );


export default app;