const { DB_DEPLOY } = require("./config");
const { Sequelize } = require("sequelize");
const ProductModel = require("./models/Product")
const CategoryModel = require("./models/Category")
const OrderModel = require("./models/Order")
const UserModel = require("./models/User")
const PurchaseModel = require("./models/Purchase")
const AdminModel = require("./models/Admin")
const Order_Product = require("./models/Order_Product")
const FavoriteModel = require("./models/Favorite")
const ReviewModel = require("./models/Review")

//? CONNECTION
const dataBase = new Sequelize(DB_DEPLOY, {
    logging: false,
    native: false,
    //   dialectOptions:{
    //     ssl:{
    //       require: true,
    //     }
    // }
  
  });

//* MODELS
ProductModel(dataBase)
CategoryModel(dataBase)
OrderModel(dataBase)
UserModel(dataBase)
PurchaseModel(dataBase)
AdminModel(dataBase)
Order_Product(dataBase)
FavoriteModel(dataBase)
ReviewModel(dataBase)

// ASSOCIATIONS
const { Product, Category, Order, User, Purchase, Admin, Review } = dataBase.models 
// Product - Admin (n a n)
Admin.belongsToMany(Product, { through: "Admin_Product" });
Product.belongsToMany(Admin, { through: "Admin_Product" });

// Product - Category (n a n)
Product.belongsToMany(Category, { through: "Product_Category" });
Category.belongsToMany(Product, { through: "Product_Category" });

//Product - Order (n a n)
Order.belongsToMany(Product, {
  through: "Order_Product",
  foreignKey: "orderId",
  otherKey: "productId",
});
Product.belongsToMany(Order, {
  through: "Order_Product",
  foreignKey: "productId",
  otherKey: "orderId",
});

// Product - User (n a n)
Product.belongsToMany(User, { through: "Favorite" });
User.belongsToMany(Product, { through: "Favorite" });

// Product - Review (1 a n)
Product.hasMany(Review);
Review.belongsTo(Product);

// User - Review (1 a n)
User.hasMany(Review);
Review.belongsTo(User);

// Orders - User (n a 1)
Order.belongsTo(User);
User.hasMany(Order);


// Orders - Purchase (n a 1)
Order.belongsTo(Purchase);
Purchase.hasMany(Order);

// Purchase - User (n a 1)
Purchase.belongsTo(User);
User.hasMany(Purchase);



  module.exports = {
    dataBase,
    ...dataBase.models,
  };