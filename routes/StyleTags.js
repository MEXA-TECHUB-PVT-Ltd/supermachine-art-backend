module.exports = app => {

const AddStyleTags = require("../services/StyleTags/AddStyleTags");
const deleteStyleTags = require("../services/StyleTags/deleteStyleTags");
const updateStyleTags = require("../services/StyleTags/updateStyleTags");
const viewTag = require("../services/StyleTags/viewTag");

// const upload = require("../middlewares/userPicsMulter")
let router = require("express").Router();
// const formidable = require("express-formidable");

router.post("/add_style_tags", AddStyleTags);
router.delete("/delete_style_tags/:id", deleteStyleTags);
router.put("/update_style_tags", updateStyleTags);
router.post("/view_tag", viewTag);

app.use("/style_tags", router);
};
