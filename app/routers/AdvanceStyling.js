module.exports = app => {

const AdvanceStyling = require("../controllers/AdvanceStyling");

// const upload = require("../middlewares/userPicsMulter")
let router = require("express").Router();
// const formidable = require("express-formidable");

router.post("/add_advance_styling", AdvanceStyling.create);
router.delete("/delete_advance_styling/:id", AdvanceStyling.delete);
router.put("/update_advance_styling", AdvanceStyling.update);
router.get("/view_advance_styling", AdvanceStyling.viewAll);
router.get("/view_Single_advance_styling/:id", AdvanceStyling.viewSpecific);

app.use("/advance_styling", router);
};