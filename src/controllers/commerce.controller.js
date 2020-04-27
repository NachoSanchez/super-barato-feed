import Geohash from 'ngeohash';
import Commerce from '../models/Commerce';

const Op = require('sequelize').Op;

export async function getCommerces(req, res) {
    try {
            const commerces = await Commerce.findAll();
            res.json({
                msg: 'estos son todos los comercios',
                data: commerces
            })
    } catch(err) {
        console.log(err);
    }
}

export async function getOneCommerce(req, res) {
    const { id } =  req.params;
    try {
            const commerce =  await Commerce.findOne({
                where: { id },
                attributes: [ 
                    'id', 'name', 'city', 'geohash', 'lat', 'lng', 'logo', 'type', 'brand'
                ]
            });
            res.json(commerce);

    } catch(err) { console.log(err); }

}

export async function createCommerce(req, res) {
    let { id, name, city, brand, lat, lng, logo, type } = req.body;
    let geohash = Geohash.encode(lat, lng);
    try {
            let newCommerce = await Commerce.create({
                id, name, city, brand, lat, lng, geohash, type, logo
            },{
                fields: [
                    'id', 'name', 'city', 'brand', 'geohash', 'lat', 'lng', 'logo', 'type'
                ]
            });

            if(newCommerce) {
                res.json({
                    msg: 'Comercio Nuevo creado exitosamente',
                    data: newCommerce
                })
            }

    } catch(err) {
        console.log(err);
    }
}

export async function filterByGeohash(req, res) {
    const { geohash } = req.query;
    try{
        const commerces = await Commerce.findAll({
            where: { geohash: { [Op.like]: `%${ geohash }%` } }
        });
        res.send(commerces);

    } catch(err) { console.log(err); }
}