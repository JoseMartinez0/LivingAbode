const express = require("express")
const getProducts = require("./routesHandlers/Products/getProducts")

const routerProducts = express.Router()

//? GET "/products"
routerProducts.get("/", getProducts) 




module.exports = routerProducts