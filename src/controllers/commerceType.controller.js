import CommerceType from '../models/CommerceType';
import Commerce from '../models/Commerce'

export async function getCommerceTypes(req, res) {
    try {
        const commerceTypes = await CommerceType.findAll();
        res.json({
            data: commerceTypes
        });
    } catch(err) { console.log(err); }
}

export async function createCommerceType(req, res) {
    let { name } = req.body
    try {
        let newCommerceType = await CommerceType.create({
            name
        },{ fields: ['name'] });

        if(newCommerceType) {
            res.json({
                msg: 'Acabas de crear una nueva Clasificación de comercio',
                data: newCommerceType
            });
        }

    } catch(err) { console.log(err); }
}

export async function getOneCommercetype(req, res) {
    const { id } = req.params;
    try {
        const commerceType =  await CommerceType.findOne({
            where: { id }
        });
        res.json(commerceType);
    } catch(err) { console.log(err); }
}

export async function deleteCommerceType(req, res) {
    const { id } = req.params;
    try {
        const papelera = await CommerceType.destroy({
            where: { id }
        });
        res.json({
            msg: 'Tipo de comercio Borrado',
            data: papelera
        })

    } catch(err) { console.log(err); }
}

export async function updateCommerceType(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    try {
        
        const commerceTypes = await CommerceType.findAll({
            attributes: ['id','name'],
            where: { id }
        });

        if(commerceTypes.length > 0) {
            commerceTypes.forEach(
                async el => { await el.update({ name }); }
            );
        }

        return res.json({
            msg: 'nombre actualizado',
            data: commerceTypes
        })

    } catch(err) { console.log(err); }
}

export async function  filterCommercesByType(req, res) {
    const { type } = req.query;
    try {
            const commerces = await Commerce.findAll({
                where: { type },
                attributes: [
                    'id', 'name', 'city', 'geohash', 'lat', 'lng', 'logo', 'type', 'brand'
                ]
            });
            res.send(commerces)
    } catch(err) { console.log(err) }
}