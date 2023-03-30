module.exports = app => {

const AddAdvanceStyling = require("../services/AdvanceStyling/AddAdvanceStyling");
const deleteAdvanceStyling = require("../services/AdvanceStyling/deleteAdvanceStyling");
const updateAdvanceStyling = require("../services/AdvanceStyling/updateAdvanceStyling");
const viewAdvanceStyling = require("../services/AdvanceStyling/viewAdvanceStyling");

// const upload = require("../middlewares/userPicsMulter")
let router = require("express").Router();
// const formidable = require("express-formidable");

router.post("/add_advance_styling", AddAdvanceStyling);
router.delete("/delete_advance_styling/:id", deleteAdvanceStyling);
router.put("/update_advance_styling", updateAdvanceStyling);
router.get("/view_advance_styling", viewAdvanceStyling);

app.use("/advance_styling", router);
};