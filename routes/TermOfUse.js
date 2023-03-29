module.exports = app => {

const addTermOfUse = require("../services/TermOfUse/addTermOfUse");
const updateTermOfUse = require("../services/TermOfUse/updateTermOfUse");
const viewTermOfUse  = require("../services/TermOfUse/viewTermOfUse");

let router = require("express").Router();

router.post("/add_term_of_use", addTermOfUse);
router.put("/update_term_of_use", updateTermOfUse);
router.get("/view_term_of_use", viewTermOfUse);

app.use("/term_of_use", router);
};
