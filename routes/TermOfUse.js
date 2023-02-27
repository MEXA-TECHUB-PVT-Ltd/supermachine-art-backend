const express = require("express");

const addTermOfUse = require("../controllers/TermOfUse/addTermOfUse");
const updateTermOfUse = require("../controllers/TermOfUse/updateTermOfUse");
const viewTermOfUse  = require("../controllers/TermOfUse/viewTermOfUse");

const router = express.Router();

router.post("/add_term_of_use", addTermOfUse);
router.put("/update_term_of_use", updateTermOfUse);
router.get("/view_term_of_use", viewTermOfUse);

module.exports = router;