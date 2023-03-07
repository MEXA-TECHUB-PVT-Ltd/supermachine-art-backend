const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.FAQS = require("./FAQS")(sequelize, Sequelize);
db.likes = require("./FAQs.likes")(sequelize, Sequelize);
db.dislikes = require("./FAQS.dislikes")(sequelize, Sequelize);

db.admin = require("./admin")(sequelize, Sequelize);
db.AdvanceStyling = require("./AdvanceStyling")(sequelize, Sequelize);
db.FAQsModel = require("./FAQs.model")(sequelize, Sequelize);
db.ImageFilters = require("./ImageFilters")(sequelize, Sequelize);
db.ImgSizeRatio = require("./ImgSizeRatio")(sequelize, Sequelize);
db.LicenseAgreement = require("./LicenseAgreement")(sequelize, Sequelize);
db.payments = require("./payments")(sequelize, Sequelize);
db.privacyPolicy = require("./privacyPolicy")(sequelize, Sequelize);
db.promoCode = require("./promoCode")(sequelize, Sequelize);
db.StyleTags = require("./StyleTags")(sequelize, Sequelize);
db.subscriptionPlan = require("./subscriptionPlan")(sequelize, Sequelize);
db.termOfUse = require("./termOfUse")(sequelize, Sequelize);
db.usePromoCode = require("./usePromoCode")(sequelize, Sequelize);
db.user = require("./user")(sequelize, Sequelize);
db.userOTPVerificationModel = require("./userOTPVerificationModel")(sequelize, Sequelize);
db.usersSubscriptions = require("./usersSubscriptions")(sequelize, Sequelize);
db.UserType = require("./UserType")(sequelize, Sequelize);

module.exports = db;
