const findAllProducts = require("../../../controllers/Products/findAllProducts")
const formatterProducts = require("../../../utils/formatter/formatterProducts")
const createBulkProducts = require("../../../controllers/Products/createBulkProducts")
const inputValidator = require("../../../utils/validators/products/inputValidator")
const jsonProductsError = require("../../../utils/validators/products/errors/jsonProductsError")
const activesInputsValidator = require("../../../utils/validators/products/activesInputsValidator")

const getProducts = async (req,res)=>{
   const {
    page = 1,
    pageSize = 15,
    brand_or_name = "",
    filterBrands = "",
    filterCategories = [],
    filterPrice = [],
    sortBrand = "",
    sortPrice = "",
    sortId = "",
    sortName = "",
    sortRating = "",
   } = req.query

const paginated = { page,pageSize }

const queryInputs = {
    page,
    pageSize,
    brand_or_name,
    filterBrands,
    filterCategories,
    filterPrice,
    sortBrand,
    sortPrice,
    sortId,
    sortName,
    sortRating
}

const queryError = inputValidator(queryInputs);

if(queryError.error){
const message = jsonProductsError(queryError.message);
res.status(404).json(message)
}
const inputsActive = activesInputsValidator(queryInputs);
let products;

try {
    if(inputsActive) {
    products = findAllProducts(paginated, queryInputs)
    }
    
} catch (error) {
    
}

}


module.exports = getProducts