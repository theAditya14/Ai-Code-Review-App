const express = require('express');
const aiConteroller = require("../controller/ai.controller")


const router = express.Router();

router.get("/get-response",aiConteroller)

module.exports = router;


