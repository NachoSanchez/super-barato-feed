import SubCategory from '../models/SubCategory';

export async function getSubCategories(req,res) {
    try {
        const subCategories = await SubCategory.findAll();
        res.json({
            msg: 'Estas son todas las sub categorias!',
            data: subCategories
        });
    } catch(err) {
        console.log(err);
    }
}

export async function filterByCategory(req, res) {
    const { cat_id } = req.query;
    try {
        const subcategories = await SubCategory.findAll({
            attributes: ['id', 'name', 'cat_id'],
            where: { cat_id }
        });
        res.json({subcategories});
    } catch(err) {
        console.log(err);
    }
}