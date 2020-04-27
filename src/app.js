import express, { json } from 'express';
import morgan from 'morgan';


//importación de rutas

import categoryRoutes  from './routes/categories';
import subCategoryRoutes from './routes/subCategories';
import productTypeRoutes from './routes/productTypes';
import commerceTypeRoutes from './routes/commerceTypes';
import commerceRoutes from './routes/commerces';

 
//inicialización
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(json());

//aplicando rutas

app.use('/api/categories',categoryRoutes );
app.use('/api/sub_categories',subCategoryRoutes );
app.use('/api/product_types', productTypeRoutes);
app.use('/api/commerce_types', commerceTypeRoutes );
app.use('/api/commerces', commerceRoutes );


export default app;