const express = require("express");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionsController = require("./controllers/SessionsController");

const connection = require("./database/connection");

const routes = express.Router();

// login
routes.post("/sessions", SessionsController.create);

//listar ongs cadastradas
routes.get("/ongs", OngController.index);
// criação de ongs
routes.post("/ongs", OngController.create);

//listar incidentes de uma so ONG
routes.get("/profile", ProfileController.index);

// criação de incidentes
routes.post("/incidents", IncidentController.create);

// listar incidentes
routes.get("/incidents", IncidentController.index);

//deletar incidente
routes.delete("/incidents/:id", IncidentController.delete);

module.exports = routes;
