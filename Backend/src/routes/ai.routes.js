const express = require('express');
const aiConteroller = require("../controller/ai.controller")


const router = express.Router();

router.post("/get-response",aiConteroller)

module.exports = router;


