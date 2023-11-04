const express = require("express");
const router = express.Router();

const sendApiRequest = require('../manager/sendApiRequest');

router.route("/handle").get(sendApiRequest);

module.exports = router;