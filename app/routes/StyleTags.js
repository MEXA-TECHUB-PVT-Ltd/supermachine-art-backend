module.exports = app => {

const AddStyleTags = require("../controllers/StyleTags/AddStyleTags");
const deleteStyleTags = require("../controllers/StyleTags/deleteStyleTags");
const updateStyleTags = require("../controllers/StyleTags/updateStyleTags");
const viewTag = require("../controllers/StyleTags/viewTag");

// const upload = require("../middlewares/userPicsMulter")
let router = require("express").Router();
// const formidable = require("express-formidable");

router.post("/add_style_tags", AddStyleTags);
router.delete("/delete_style_tags/:id", deleteStyleTags);
router.put("/update_style_tags", updateStyleTags);
router.post("/view_tag", viewTag);

app.use("/style_tags", router);
};
