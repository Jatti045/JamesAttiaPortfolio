const { fetchDataFromGithub } = require("../controllers/api-controller");
const express = require("express");

const router = express.Router();

router.get("/github", fetchDataFromGithub);

module.exports = router;
