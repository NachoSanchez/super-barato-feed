import Category from '../models/Category';
import SubCategory from '../models/SubCategory';

export async function getCategories(req,res) {
    try {
        const categories = await Category.findAll({
            include: [SubCategory]
        });
        res.json({
            data: categories
        });
    } catch(err) {
        console.log(err);
    }
}

export async function createCategory(req, res) {
    let { name } = req.body;
    try {
        let newCategory = await Category.create({
            name
        },{
            fields: ['name']
        });
        
        if(newCategory) {
            res.json({
                msg: 'Categoría creada exitosamente!',
                data: newCategory
            })
        }
    } catch(err) {
        console.log(err);
    }
}

export async function getOneCategory(req, res) {
    const { id } = req.params;
    try {
        const category = await Category.findOne({
            where: {
                id
            }
        });
        res.json(category);
    } catch(err) {
        console.log(err);
    }
}

export async function deleteCategory(req, res) {
    const { id } = req.params;
    try {
        const deletion = await Category.destroy({
            where: {
                id
            }
        });
        res.json({
            msg: 'La categoría fue borrada',
            data: deletion
        })
    } catch(err) {
        console.log(err);
    }
}

export async function updateCategory(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const categories = await Category.findAll({
            attributes: ['id', 'name'],
            where: {
                id
            }
        });
        if(categories.length > 0) {
            categories.forEach(
                async category => { await category.update({ name }); }
            )
        }
        return res.json({
            msg: 'Categoria Actualizada',
            data: categories
        });
    } catch(err) {
        console.log(err);
    }
}