const express = require("express")
const getCategories = require("./routesHandlers/categories/getCategories")

const routerCategories = express.Router()

//? GET "/categories"
routerCategories.get("/", getCategories)




module.exports = routerCategories;