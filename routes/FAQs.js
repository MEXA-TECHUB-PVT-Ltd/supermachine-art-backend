const express = require("express");
const dislikeFAQs = require("../controllers/FAQs/dislikeFAQs");
const likeFAQs = require("../controllers/FAQs/likeFAQs");
const UpdateFAQs = require("../controllers/FAQs/updateFAQs");
const addFAQs = require("../controllers/FAQs/addFAQs");
const deleteFAQs = require("../controllers/FAQs/deleteFAQs");
const viewASpecificFAQs = require("../controllers/FAQs/viewASpecificFAQs");
const ViewFAQs = require("../controllers/FAQs/viewFAQs");

// const upload = require("../middlewares/userPicsMulter")

const router = express.Router();
// const formidable = require("express-formidable");
router.post("/add_faqs", addFAQs);
router.delete("/delete_faqs/:id", deleteFAQs);
router.put("/dislike_faqs", dislikeFAQs);
router.put("/like_faqs", likeFAQs);
router.put("/update_faqs", UpdateFAQs);
router.get("/view_a_specific_faqs", viewASpecificFAQs);
router.get("/view_all_faqs", ViewFAQs);

module.exports = router;