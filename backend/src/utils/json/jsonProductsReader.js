const fs = require("fs")
const util = require("util")

const readFileAsync = util.promisify(fs.readFile);

const jsonProductsReader = async () => {
    try {
  
      // Lee el archivo JSON como una promesa y convertirlo en un objeto JavaScript.
      const data = await readFileAsync("src/utils/preloadedData/dbProducts.json", "utf8");
      const jsonData = JSON.parse(data);
      return jsonData;
    } catch (error) {
      console.error("Error al leer el archivo: ", error);
      throw new Error("Error al leer el archivo: ", error);
    }
  };
  
  module.exports = jsonProductsReader;