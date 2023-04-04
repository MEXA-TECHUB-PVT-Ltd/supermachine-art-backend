module.exports = app => {

const TermOfUse = require("../controllers/termOfUse");

let router = require("express").Router();

router.post("/add_term_of_use", TermOfUse.create);
router.put("/update_term_of_use", TermOfUse.update);
router.get("/view_term_of_use", TermOfUse.viewAll);
router.get("/view_specific_term_of_use", TermOfUse.viewSpecific);
router.delete("/delete_term_of_use/:id", TermOfUse.delete);

app.use("/term_of_use", router);
};
