const util = require("util");
const fs = require("fs");

const readFileAsync = util.promisify(fs.readFile);

const jsonCategoriesReader = async () => {
  try {

    // Lee el archivo JSON como una promesa y convertirlo en un objeto JavaScript.
    const data = await readFileAsync("src/utils/preloadedData/dbCategories.json", "utf8");
    const jsonData = JSON.parse(data);
    return jsonData;
  } catch (error) {
    console.error("Error al leer el archivo: ", error);
    throw new Error("Error al leer el archivo: ", error);
  }
};

module.exports = jsonCategoriesReader;



