import Sequelize from 'sequelize';
import Price from '../models/Price';
import Product from '../models/Product';
import Commerce from '../models/Commerce';

const Op = Sequelize.Op;

export async function createPrice(req, res) {
    const { id, product_id, commerce_id, value } = req.body;
    try {   //creando instancia de precio
            const newPrice = Price.create({
               id, product_id, commerce_id, value
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
        const query = req.query;
        let limit= 30; 
        let page= 0;
    
        if(JSON.stringify(query) !== '{}') {
            limit = query.limit;
            page = query.page
        }
        //pagination handler
        const offset = limit * page;
    
        try { 
                const prices = await Price.findAll({
                    limit, offset,
                    include: [{
                        model: Commerce,
                        as: 'commerces'
                    }]
                });
                res.send({
                    msg: 'Estos son todos los productos',
                    data: prices
                });

        } catch(err) { console.log(err); }
}