const { Product, Category } = require("../../db")


const findAllCategories = async () =>{

    const categories = await Category.findAll({
        include:{
            model: Product,
            attributes: ["name"],
            through: {
                attributes:[]
            } 
        },
        order: [['id', 'ASC']]
    })
return categories
}


module.exports = findAllCategories