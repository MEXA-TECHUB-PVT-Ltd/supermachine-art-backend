module.exports = app => {

    const AddFilter = require("../services/ImageFilters/AddFilter");
    const Enable_DisableFilter = require("../services/ImageFilters/Enable_DisableFilter");
    const DeleteFilter = require("../services/ImageFilters/DeleteFilter");
    const UpdateFilter = require("../services/ImageFilters/UpdateFilter");
    const GetAllFilters = require("../services/ImageFilters/GetAllFilters");
    const GetFilter = require("../services/ImageFilters/GetFilter");
    const GetFilters = require("../services/ImageFilters/GetFilters");

    let router = require("express").Router();

    router.post("/add_filter", AddFilter);
    router.put("/enable_disable_filters", Enable_DisableFilter);
    router.delete("/delete_filter/:id", DeleteFilter);
    router.put("/update_filter", UpdateFilter);
    router.get("/get_filter", GetFilter);
    router.get("/get_all_filters", GetAllFilters);
    router.get("/get_filters", GetFilters);

    app.use("/image_filters", router);
};
