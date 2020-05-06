import Sequelize from 'sequelize';
import Price from '../models/Price';
import Product from '../models/Product';
import Commerce from '../models/Commerce';

const Op = Sequelize.Op;

export async function createPrice(req, res) {
    const { id, product_id, commerce_id, value, geohash } = req.body;
    try {   //creando instancia de precio
            const newPrice = Price.create({
               id, product_id, commerce_id, value, geohash
            });
            //enviando respuesta
            res.send({
                msg: 'Precio guardado',
                data: newPrice
            });

     } catch(err) {
        console.log(err);
    }
}

export async function getPrices(req, res) {
        //initial set-up
        const limit = req.query.limit ? req.query.limit : 20;
        const page = req.query.page ? req.query.page : 0;
        //pagination handler
        const offset = limit * page;
    
        try { 
                const prices = await Price.findAll({
                    limit, offset,
                    include: { 
                        model: Commerce, as: 'commerce',
                    }
                });
                res.send({
                    msg: 'Estos son todos los precios',
                    data: prices
                });

        } catch(err) { console.log(err); }
}

export async function getPricesFiltered(req, res) {
    //initial setup. 
    //to make this request effectively you will need the product_id and geohash
    // of the prices queried.
    const limit = req.query.limit ? req.query.limit : 20;
    const page = req.query.page ? req.query.page : 0;
    const offset = limit * page
    const { product_id, geohash } = req.query;

    try { 
            const prices = await Price.findAll({
                limit, offset,
                include: { 
                    model: Commerce, as: 'commerce',
                },
                where: { 
                    geohash: { [Op.like]: '%'+ geohash +'%' },
                    product_id
                }
                
            });

            const product = await Product.findOne({
                where: { id: product_id }
            })

            res.send({
                msg: `Estos son todos los precios de ${ product.presentation} disponibles en tu localidad.`,
                product, prices
            });

    } catch(err) { console.log(err); }
}