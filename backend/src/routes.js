const express = require("express");
const routes = express.Router();

const SensorController = require('./controller/SensorController');

routes.get('/sensor', SensorController.index);
routes.post('/sensor', SensorController.create);
routes.get('/sensorAtualizado', SensorController.indexUpdate);
routes.get('/media', SensorController.indexAvg);


module.exports = routes;