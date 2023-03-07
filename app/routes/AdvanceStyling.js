module.exports = app => {

const AddAdvanceStyling = require("../controllers/AdvanceStyling/AddAdvanceStyling");
const deleteAdvanceStyling = require("../controllers/AdvanceStyling/deleteAdvanceStyling");
const updateAdvanceStyling = require("../controllers/AdvanceStyling/updateAdvanceStyling");
const viewAdvanceStyling = require("../controllers/AdvanceStyling/viewAdvanceStyling");

// const upload = require("../middlewares/userPicsMulter")
let router = require("express").Router();
// const formidable = require("express-formidable");

router.post("/add_advance_styling", AddAdvanceStyling);
router.delete("/delete_advance_styling/:id", deleteAdvanceStyling);
router.put("/update_advance_styling", updateAdvanceStyling);
router.get("/view_advance_styling", viewAdvanceStyling);

app.use("/advance_styling", router);
};