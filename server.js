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
app.use("/imges_uploads", express.static("imges_uploads"))

const db = require("./models");
db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Super Machine." });
});

require("./routes/turorial.routes")(app);
require("./routes/faqs.routes")(app);
require("./routes/privacyPolicy")(app);
require("./routes/ImgRatioSize")(app);
require("./routes/UserType")(app);
require("./routes/AdvanceStyling")(app);
require("./routes/ManageUser")(app);
require("./routes/subscription")(app);
require("./routes/auth")(app);
require("./routes/privacyPolicy")(app);
require("./routes/TermOfUse")(app);
require("./routes/promoCode")(app);
require("./routes/StyleTags")(app);
require("./routes/LicenseAgreement")(app);
require("./routes/ImageFilter")(app);
require("./routes/FAQs")(app);
require("./routes/folder")(app);
require("./routes/ImageAspects")(app);
require("./routes/GalleryImages")(app);
require("./routes/GalleryProfile")(app);
require("./routes/Images")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
