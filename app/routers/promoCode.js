module.exports = app => {

const promoCode = require("../controllers/promoCode");

// const upload = require("../middlewares/userPicsMulter")
let router = require("express").Router();
// const formidable = require("express-formidable");

router.post("/add_promo_code", promoCode.create);
router.delete("/delete_promo_code/:id", promoCode.delete);
router.put("/update_promo_code", promoCode.update);
router.post("/use_promo_code" , promoCode.use)
router.get("/view_all_promo_code", promoCode.viewAll);
router.post("/view_specific_promo_code", promoCode.viewSpecific);

app.use("/promo_code", router);
};