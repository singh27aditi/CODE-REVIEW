//in routes file we define the route and which controller would run on reaching that route

const express = require('express');
const aiController = require('../controllers/ai.controller');

const router = express.Router();

router.get("/get-response", aiController.getResponse);

module.exports = router;