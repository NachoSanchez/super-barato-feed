import ProductType from '../models/ProductType';
import Product from '../models/Product'

export async function getProductTypes(req,res) {
    try {
        const types = await ProductType.findAll({
            include: [Product]
        });
        res.json({
            msg: 'Estos son todos los Tipos disponibles de producto',
            data: types
        });
    } catch(err) {
        console.log(err);
    }
}

export async function filterBySubCat(req, res) {
    const { subcat_id } = req.query;
    try {
        const types = await ProductType.findAll({
            attributes: ['id', 'name', 'subcat_id'],
            where: { subcat_id }
        });
        res.json({types});
        
    } catch(err) {
        console.log(err);
    }
}