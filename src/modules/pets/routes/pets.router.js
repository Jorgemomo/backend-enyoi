const express = require("express"); // se llama  al modulo de express
const { getAllPets, getById, createPet } = require("../services/pets.service");

const router = express.Router(); //  creamos el router base

router.get("/", getAllPets);
router.get("/byId/:id", getById);
router.post("/create", createPet);

module.exports = router;
