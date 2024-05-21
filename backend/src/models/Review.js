// Review model
const { DataTypes } = require('sequelize');



 module.exports = (dataBase) => {
    dataBase.define(
        "Review",
  {id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
 },
{
    timestamps: false,
}
)
 }
