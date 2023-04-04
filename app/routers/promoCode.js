module.exports = app => {

const promoCode = require("../controllers/promoCode");

// const upload = require("../middlewares/userPicsMulter")
let router = require("express").Router();
// const formidable = require("express-formidable");

router.post("/add_promo_code", promoCode.AddPromoCode);
router.delete("/delete_promo_code/:id", promoCode.deletePromoCode);
router.put("/update_promo_code", promoCode.updatePromoCode);
router.post("/use_promo_code" , promoCode.usePromoCode)
router.get("/view_all_promo_code", promoCode.viewAllPromoCodes);

app.use("/promo_code", router);
};