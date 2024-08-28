const jsonProductsReader = require("./jsonProductsReader")

const findJsonProducts = async () => {
    try {
  
      //se utiliza para extraer las categorías del objeto JavaScript obtenido del archivo JSON.
      const jsonProducts = await jsonProductsReader();
      return jsonProducts.products;
    } catch (error) {
      console.error("Error al leer el archivo: ", error);
      throw new Error("Error al leer el archivo: ", error);
    }
  };
  
  module.exports = findJsonProducts;