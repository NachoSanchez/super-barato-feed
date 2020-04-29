import ProductType from '../models/ProductType';

export async function getProductTypes(req,res) {
    try {
        const types = await ProductType.findAll();
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