module.exports = app => {
    
const FAQS = require("../controllers/FAQS");

// const upload = require("../middlewares/userPicsMulter")

let router = require("express").Router();
// const formidable = require("express-formidable");
router.post("/add_faqs", FAQS.addFAQs);
router.delete("/delete_faqs/:id", FAQS.deleteFAQs);
router.put("/dislike_faqs", FAQS.dislikeFAQs);
router.put("/like_faqs", FAQS.likeFAQs);
router.put("/update_faqs", FAQS.UpdateFAQs);
router.get("/view_a_specific_faqs", FAQS.viewASpecificFAQs);
router.get("/view_all_faqs", FAQS.ViewFAQs);
router.get("/dislike_check", FAQS.DislikeCheck);
router.get("/like_check", FAQS.LikeCheck);

app.use("/faqs", router);
};
