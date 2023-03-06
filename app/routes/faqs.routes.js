module.exports = app => {
    const faqs = require("../controllers/FAQs/FAQs.controller.js");
    const addFAQs = require("../controllers/FAQs/addFAQs");

    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/add_faq", faqs.create);
    router.post("/add_faqs", addFAQs);

    // // Retrieve all Tutorials
    // router.get("/", faqs.findAll);
  
    // // Retrieve all published Tutorials
    // router.get("/published", faqs.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    // router.get("/:id", faqs.findOne);
  
    // // Update a Tutorial with id
    // router.put("/:id", faqs.update);
  
    // // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);
  
    // // Delete all Tutorials
    // router.delete("/", faqs.deleteAll);
  
    app.use("/faqs", router);
  };
  

// const express = require("express");
// const dislikeFAQs = require("../controllers/FAQs/dislikeFAQs");
// const likeFAQs = require("../controllers/FAQs/likeFAQs");
// const UpdateFAQs = require("../controllers/FAQs/updateFAQs");
// const deleteFAQs = require("../controllers/FAQs/deleteFAQs");
// const viewASpecificFAQs = require("../controllers/FAQs/viewASpecificFAQs");
// const ViewFAQs = require("../controllers/FAQs/viewFAQs");

// // const upload = require("../middlewares/userPicsMulter")
// var router = require("express").Router();

// const router = express.Router();
// // const formidable = require("express-formidable");
// router.delete("/delete_faqs/:id", deleteFAQs);
// router.put("/dislike_faqs", dislikeFAQs);
// router.put("/like_faqs", likeFAQs);
// router.put("/update_faqs", UpdateFAQs);
// router.get("/view_a_specific_faqs", viewASpecificFAQs);
// router.get("/view_all_faqs", ViewFAQs);

// module.exports = router;