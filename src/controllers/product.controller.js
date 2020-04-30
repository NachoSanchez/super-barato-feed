import Sequelize from 'sequelize';
import Product from '../models/Product';

const Op = Sequelize.Op;

//Create ctrl
export async function createInstance(req, res) {
    const { id, presentation, brand, product_type_id, precios_cuidados, oferta_temporal  } = req.body;
    try {
            const newInstance = await Product.create({
                id, presentation, brand, product_type_id, precios_cuidados, oferta_temporal
            },{ 
                fields: [
                'id', 'presentation', 'brand', 'product_type_id', 'precios_cuidados', 'oferta_temporal'
                ]
            });
            res.send({
                msg: 'Producto Creado',
                data: newInstance
            });
    } catch(err) {
        console.log(err);
    }
}

//Read Ctrl
export async function getInstances(req, res) {
    //initial set-up
    const query = req.query;
    let limit= 30; 
    let page= 0;

    if(JSON.stringify(query) !== '{}') {
        limit = query.limit;
        page = query.page
    }
    //pagination enabler
    const offset = limit * page;

    try { 
            const instances = await Product.findAll({
                limit, offset,
                attributes: [
                    'id', 'presentation', 'brand', 'product_type_id', 'precios_cuidados', 'oferta_temporal'
                ]
            });
            res.send({
                msg: 'Estos son todos los productos',
                data: instances
            });
    } catch(err) { console.log(err); }
}
//get only one instance by ID ONLY
export async function getOneInstance(req, res) {
    const { id } = req.params;
    try {
            const instance = await Product.findOne({
                where: { id },
                attributes: [
                    'id', 'presentation', 'brand', 'product_type_id', 'precios_cuidados', 'oferta_temporal'
                ]
            });
            res.send(instance);
    
    } catch(err) { console.log(err); }
}
//This will work filtering by product_type_id.
export async function getInstancesByType(req, res) {
    const { type } = req.params;
    try {
            const instances = await Product.findAll({
                where: { 
                    product_type_id: { [Op.eq]: type } 
                }
            });
            res.send({ data: instances});
            
    } catch(err) { console.log(err); }
}
//Search ONLY by presentation 
export async function searchInstance(req, res) {
    const filter = req.params;
    try {
            const suggestions = await Product.findAll({
                where: {
                    presentation: { 
                        [Op.iLike]: '%'+ filter 
                    }
                }
            });
            res.send({ data: suggestions})
    } catch(err) {
        console.log(err);
    }
}
//Update Ctrl
export async function updateInstance(req, res) {
    const { id } = req.params;
    const { presentation, brand, precios_cuidados, oferta_temporal, product_type_id } = req.body;

    try {
            const instances = await Product.findAll({
                where: { id }
            });

            if(instances.length > 0) {
                instances.forEach(async(instance) => {
                    await instance.update({
                        presentation, brand, precios_cuidados, oferta_temporal, product_type_id
                    })
                });
            }

            res.send({
                msg: 'Producto Actualizado'
            });
    } catch(err) { console.log(err.detail); }
}
//Delete Ctrl
export async function deleteInstance(req, res) {
    const { id } = req.params;
    try {
            const deletion = await Product.destroy({
                where: { id }
            });
            res.send({ msg: 'Producto Borrado' });

    } catch(err) { console.log(err.detail); }
}