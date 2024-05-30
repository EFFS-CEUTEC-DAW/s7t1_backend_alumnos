// CREATE TABLE `movil-i`.`Asignaturas` (
//   `id` INT NOT NULL AUTO_INCREMENT,
//   `idAlumno` INT NULL,
//   `asignatura` VARCHAR(50) NULL,
//   PRIMARY KEY (`id`),
//   INDEX `FK_idAlumno_idx` (`idAlumno` ASC) VISIBLE,
//   CONSTRAINT `FK_idAlumno`
//     FOREIGN KEY (`idAlumno`)
//     REFERENCES `movil-i`.`Alumnos` (`id`)
//     ON DELETE CASCADE
//     ON UPDATE CASCADE);
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

//Asignaturas es mi tabla en BD
const Asignatura = sequelize.define(
  "Asignaturas",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    idAlumno: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    asignatura: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false, // Desactiva las columnas createdAt y updatedAt
  }
);

module.exports = Asignatura;
