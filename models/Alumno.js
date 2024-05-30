const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

//Alumnos es mi tabla en BD
const Alumno = sequelize.define(
  "Alumnos",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false, // Desactiva las columnas createdAt y updatedAt
  }
);

module.exports = Alumno;
