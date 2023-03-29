module.exports = app => {

const AddPromoCode = require("../services/promoCode/AddPromoCode");
const deletePromoCode = require("../services/promoCode/deletePromoCode");
const updatePromoCode = require("../services/promoCode/updatePromoCode");
const usePromoCode  = require("../services/promoCode/usePromoCode");
const viewAllPromoCodes  = require("../services/promoCode/viewAllPromoCodes");

// const upload = require("../middlewares/userPicsMulter")
let router = require("express").Router();
// const formidable = require("express-formidable");

router.post("/add_promo_code", AddPromoCode);
router.delete("/delete_promo_code/:id", deletePromoCode);
router.put("/update_promo_code", updatePromoCode);
router.post("/use_promo_code" , usePromoCode)
router.get("/view_all_promo_code", viewAllPromoCodes);

app.use("/promo_code", router);
};