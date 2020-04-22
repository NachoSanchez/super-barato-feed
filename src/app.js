import express, { json } from 'express';
import morgan from 'morgan';
//importación de rutas
import productRoutes from './routes/products';
import priceRoutes from './routes/prices';
import commerceRoutes from './routes/commerces';

//inicialización
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(json());

//aplicando rutas
app.use('/api/products', productRoutes);
app.use('/api/prices', priceRoutes);
app.use('/api/commerces', commerceRoutes );

export default app;