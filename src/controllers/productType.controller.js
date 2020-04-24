import ProductType from '../models/ProductType';

export async function getProductTypes(req,res) {
    try {
        const types = await ProductType.findAll();
        res.json({
            msg: 'Estos son todos los Tipos de producto',
            data: types
        });
    } catch(err) {
        console.log(err);
    }
}

export async function getProductTypeBySubCat(req, res) {
    const { subcat_id } = req.params;
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