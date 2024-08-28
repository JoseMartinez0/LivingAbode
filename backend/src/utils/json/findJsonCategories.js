const jsonCategoriesReader = require("./jsonCategoriesReader");

const findJsonCategories = async () => {
  try {

    //se utiliza para extraer las categorías del objeto JavaScript obtenido del archivo JSON.
    const jsonCategories = await jsonCategoriesReader();
    return jsonCategories.categories;
  } catch (error) {
    console.error("Error al leer el archivo: ", error);
    throw new Error("Error al leer el archivo: ", error);
  }
};

module.exports = findJsonCategories;
