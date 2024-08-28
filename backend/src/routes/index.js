const { Router } = require("express")
const router = Router()

const routerCategories = require("./categories");
const routerProducts = require("./products")

//? RUTAS
router.use("/categories", routerCategories);
router.use("/products", routerProducts)

module.exports = router;