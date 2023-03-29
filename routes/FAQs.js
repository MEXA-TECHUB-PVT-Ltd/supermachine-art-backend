module.exports = app => {
    const dislikeFAQs = require("../services/FAQs/dislikeFAQs");
const likeFAQs = require("../services/FAQs/likeFAQs");
const UpdateFAQs = require("../services/FAQs/updateFAQs");
const addFAQs = require("../services/FAQs/addFAQs");
const deleteFAQs = require("../services/FAQs/deleteFAQs");
const viewASpecificFAQs = require("../services/FAQs/viewASpecificFAQs");
const ViewFAQs = require("../services/FAQs/viewFAQs");

// const upload = require("../middlewares/userPicsMulter")

let router = require("express").Router();
// const formidable = require("express-formidable");
router.post("/add_faqs", addFAQs);
router.delete("/delete_faqs/:id", deleteFAQs);
router.put("/dislike_faqs", dislikeFAQs);
router.put("/like_faqs", likeFAQs);
router.put("/update_faqs", UpdateFAQs);
router.get("/view_a_specific_faqs", viewASpecificFAQs);
router.get("/view_all_faqs", ViewFAQs);

app.use("/faqs", router);
};
