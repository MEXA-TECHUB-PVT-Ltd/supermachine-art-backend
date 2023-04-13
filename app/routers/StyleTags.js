module.exports = app => {

const StyleTags = require("../controllers/StyleTags");

// const upload = require("../middlewares/userPicsMulter")
let router = require("express").Router();
// const formidable = require("express-formidable");

router.post("/add_style_tags", StyleTags.create);
router.delete("/delete_style_tags/:id", StyleTags.delete);
router.put("/update_style_tags",StyleTags.update);
router.post("/view_tag", StyleTags.viewAll);
router.get("/view_specific_tag", StyleTags.viewSpecific);

app.use("/style_tags", router);
};
