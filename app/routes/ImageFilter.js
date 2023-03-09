module.exports = app => {

const AddFilter = require("../controllers/ImageFilters/AddFilter");
const Enable_DisableFilter = require("../controllers/ImageFilters/Enable_DisableFilter");
const DeleteFilter = require("../controllers/ImageFilters/DeleteFilter");
const UpdateFilter = require("../controllers/ImageFilters/UpdateFilter");
const GetAllFilters = require("../controllers/ImageFilters/GetAllFilters");
const GetFilter = require("../controllers/ImageFilters/GetFilter");

let router = require("express").Router();

router.post("/add_filter", AddFilter);
router.put("/enable_disable_filters", Enable_DisableFilter);
router.delete("/delete_filter/:id", DeleteFilter);
router.put("/update_filter", UpdateFilter);
router.get("/get_filter", GetFilter);
router.get("/get_all_filters", GetAllFilters);

app.use("/image_filters", router);
};
