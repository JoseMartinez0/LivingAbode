const { json } = require("sequelize")
const { Product } = require("../../db")
const findAllProducts = require("../../utils/json/findJsonProducts")

const createBulkProducts = async ()=>{
    try {
        const jsonProducts = await findAllProducts()
        const bulkProducts = Product.bulkCreate(jsonProducts)
        return bulkProducts
    } catch (error) {
        console.log(error);
    }
}


module.exports = createBulkProducts