module.exports = app => {

    const Filter = require("../controllers/ImageFilters");

    let router = require("express").Router();

    router.post("/add_filter", Filter.create);
    router.put("/enable_disable_filters", Filter.Enable_DisableFilter);
    router.delete("/delete_filter/:id", Filter.delete);
    router.put("/update_filter", Filter.update);
    router.get("/get_filter", Filter.viewSpecific);
    router.get("/get_enabled_filters", Filter.viewEnable);
    router.get("/get_disabled_filters", Filter.viewDisable);
    router.get("/get_filters", Filter.viewAll);

    app.use("/image_filters", router);
};
