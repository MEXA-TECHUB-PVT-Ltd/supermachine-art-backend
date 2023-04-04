module.exports = app => {
    const ImageAspects = require("../controllers/ImageAspects");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/add_image_aspects", ImageAspects.create);
    router.get("/get_image_aspects", ImageAspects.viewSpecific);
    router.put("/update_image_aspects", ImageAspects.update);
    router.get("/get_all_image_aspects", ImageAspects.viewAll);
    router.delete("/delete_image_aspects/:id", ImageAspects.delete);



    app.use('/image_aspects', router);
  };