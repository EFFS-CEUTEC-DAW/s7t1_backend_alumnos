const express = require("express");
const bodyParser = require("body-parser");

const sequelize = require("../config/db.js");
const Alumno = require("../models/Alumno.js");

// Metodos
//Metodo GET
const getAlumnos = app.get("/alumnos", async (req, res) => {
  try {
    //Sequlize
    const items = await Alumno.findAll();
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
});
// GET un ítem por ID
const getAlumnosByID = app.get("/alumnos/:id", async (req, res) => {
  try {
    const item = await Alumno.findByPk(req.params.id);
    if (!item) {
      return res.status(404).send("Item not found");
    }
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
});

const postAlumnos = app.post("/alumnos", async (req, res) => {
  try {
    const item = await Alumno.create(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(400).send(error);
  }
});

const putAlumnos = app.put("/alumnos/:id", async (req, res) => {
  try {
    const item = await Alumno.findByPk(req.params.id);
    if (!item) {
      return res.status(404).send("Item not found");
    }
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Eliminar un ítem por ID
const deleteAlumnos = app.delete("/alumnos/:id", async (req, res) => {
  try {
    const item = await Alumno.findByPk(req.params.id);
    if (!item) {
      return res.status(404).send("Item not found");
    }
    await item.destroy();
    res.status(200).send("Item deleted");
  } catch (error) {
    res.status(500).send(error);
  }
});

export { getAlumnos, getAlumnosByID, postAlumnos, putAlumnos, deleteAlumnos };
