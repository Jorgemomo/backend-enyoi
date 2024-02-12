const express = require("express"); // se llama  al modulo de express
const {
  getAllPets,
  getById,
  createPet,
  updatePet,
  deletePet,
} = require("../services/pets.service");

const router = express.Router(); //  creamos el router base

router.get("/", getAllPets);
router.get("/byId/:id", getById);
router.post("/create", createPet);
router.put("/update", updatePet);
router.delete("/delete/:id", deletePet);

module.exports = router;
