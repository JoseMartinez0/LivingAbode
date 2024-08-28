const activesInputsValidator = (queryInputs) =>{
const {
    brand_or_name,
    filterBrands,
    filterCategories,
    filterPrice,
    sortBrand,
    sortPrice,
    sortId,
    sortName,
    sortRating
} = queryInputs;

let inputsActive = false;

if(
    brand_or_name !== "" ||
    filterBrands !== "" ||
    filterCategories.length > 0 ||
    filterPrice.length > 0 ||
    sortBrand !== "" ||
    sortPrice !== "" ||
    sortId !== "" ||
    sortName !== "" ||
    sortRating !== ""
){
    inputsActive = true;
}
return inputsActive
}

module.exports = activesInputsValidator