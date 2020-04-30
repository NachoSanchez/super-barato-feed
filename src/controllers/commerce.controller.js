import Commerce from '../models/Commerce';
import CommerceType from '../models/CommerceType';
import Geohash from 'ngeohash';
import Sequelize from 'sequelize';

const Op = Sequelize.Op;

//Crear comercio
export async function createCommerce(req, res) {
    //seteando Valores
    let { name, tarjeta_alimentar, lat, lng, logo, commerce_type_id, precios_cuidados } = req.body;
    let geohash = Geohash.encode(lat, lng);

    try {
            let newCommerce = await Commerce.create({
                 name, lat, lng, geohash, commerce_type_id, logo, tarjeta_alimentar, precios_cuidados
            },{
                fields: [
                     'name', 'geohash', 'lat', 'lng', 'logo', 'commerce_type_id', 'tarjeta_alimentar', 'precios_cuidados'
                ]
            });
            
            if(newCommerce) {
                res.json({
                    msg: 'Comercio Nuevo creado exitosamente',
                    data: newCommerce
                })
            }

    } catch(err) {
        console.log(err)
        res.send({
            msg: 'Este Comercio ya existe en nuestra base de datos',
        })
    }
}

//Leer Comercios de a uno y de a todos        
//              !NOTA => comentarios dentro probar paginación
export async function getCommerces(req, res) {
    //const { limit } = req.query ? req.query : 30;
    //const { page } = req.query ? req.query : 0;
    //const offset = limit * page
    try {
            const commerces = await Commerce.findAll({
                //limit, offset,
                include: CommerceType,
            });
            res.json({
                msg: 'estos son todos los comercios',
                data: commerces
            })
    } catch(err) {
        console.log(err);
    }
}

export async function getOneCommerce(req, res) {
    const { id } =  req.query;
    try {
            const commerce =  await Commerce.findOne({
                where: { id },
                attributes: [ 
                    'id', 'name', 'geohash', 'lat', 'lng', 'logo', 'type_id', 'tarjeta_alimentar','precios_cuidados'
                ]
            });
            res.json(commerce);

    } catch(err) { console.log(err); }
}

//Actualizar Comercio
export async function updateCommerce(req, res) {
    const { id } = req.query;
    const { name, logo, lat, lng, type_id, tarjeta_alimentar, precios_cuidados } = req.body;
    const geohash = Geohash.encode(lat, lng);

    try {   //Obteniendo registros
            const commerces = await Commerce.findAll({
                attributes: [ 
                    'id', 'name', 'geohash', 'lat', 'lng', 'logo', 'type_id', 'tarjeta_alimentar','precios_cuidados'
                ],
                where: { id }
            });
            //actualizando registros
            if(commerces.length > 0){
                commerces.forEach(async commerce => { 
                    await commerce.update({
                        name, logo, geohash, lat, lng, type_id, tarjeta_alimentar, precios_cuidados
                    })
                });
            }
            //seteo de respuesta
            return res.json({
                msg: 'Comercio Actualizado',
                data: commerces
            });

    } catch(err) {
        console.log(err);
    }
}

//Eliminar Comercio
export async function deleteCommerce(req, res) {
    const { id } = req.query;
    try {
            const deletion = await Commerce.destroy({
                where: { id }
            });
            res.json({
                msg: 'Comercio borrado',
                data: deletion
            });
    } catch(err) { console.log(err) }
}

//Filtro por geohash
export async function filterByGeohash(req, res) {
    const { geohash } = req.query;
    try{
        const commerces = await Commerce.findAll({
            where: { geohash: { [Op.like]: '%'+ geohash +'%' } },
            attributes: [
                'id', 'name', 'geohash', 'lat', 'lng', 'logo', 'type_id','tarjeta_alimentar','precios_cuidados'
            ]
        });
        res.send(commerces);

    } catch(err) { console.log(err); }
}
