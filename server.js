const express = require("express");
const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");

const app = express();
var corsOptions = {
  // origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());
// parse requests of content-type - application/json
app.use(express.json());  /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */
app.use("/FolderImages", express.static("FolderImages"))

const db = require("./app/models");
db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Super Machine." });
});

require("./app/routes/turorial.routes")(app);
require("./app/routes/faqs.routes")(app);
require("./app/routes/privacyPolicy")(app);
require("./app/routes/ImgRatioSize")(app);
require("./app/routes/UserType")(app);
require("./app/routes/AdvanceStyling")(app);
require("./app/routes/ManageUser")(app);
require("./app/routes/subscription")(app);
require("./app/routes/auth")(app);
require("./app/routes/privacyPolicy")(app);
require("./app/routes/TermOfUse")(app);
require("./app/routes/promoCode")(app);
require("./app/routes/StyleTags")(app);
require("./app/routes/LicenseAgreement")(app);
require("./app/routes/ImageFilter")(app);
require("./app/routes/FAQs")(app);
require("./app/routes/folder")(app);
require("./app/routes/ImageAspects")(app);
require("./app/routes/GalleryImages")(app);
require("./app/routes/GalleryProfile")(app);
require("./app/routes/Images")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
