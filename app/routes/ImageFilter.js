module.exports = app => {

const AddFilter = require("../controllers/ImageFilters/AddFilter");
// const deleteAdvanceStyling = require("../controllers/AdvanceStyling/deleteAdvanceStyling");
const Enable_DisableFilter = require("../controllers/ImageFilters/Enable_DisableFilter");
// const viewAdvanceStyling = require("../controllers/AdvanceStyling/viewAdvanceStyling");

// const upload = require("../middlewares/userPicsMulter")
let router = require("express").Router();
// const formidable = require("express-formidable");

router.post("/add_filter", AddFilter);
// router.delete("/delete_advance_styling/:id", deleteAdvanceStyling);
router.put("/enable_disable_filters", Enable_DisableFilter);
// router.get("/view_advance_styling", viewAdvanceStyling);

app.use("/image_filters", router);
};
