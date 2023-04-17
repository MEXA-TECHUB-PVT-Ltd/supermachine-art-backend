const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");
const bodyParser = require("body-parser"); /* deprecated */
const client = require("./app/models/db");
const app = express();
const dbConfig = require('./app/config/db.config')
require('dotenv').config()

var corsOptions = {
  // origin: "http://localhost:8081"
};
app.use(cors()) // Use this
app.use(cors(corsOptions));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());
// parse requests of content-type - application/json
app.use(express.json());  /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */
app.use("/images_uploads", express.static("images_uploads"))

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to SUPER MACHINE ART." });
});

require("./app/routers/admin")(app);
require("./app/routers/privacyPolicy")(app);
require("./app/routers/UserType")(app);
require("./app/routers/AdvanceStyling")(app);
require("./app/routers/TermOfUse")(app);
require("./app/routers/LicenseAgreement")(app);
require("./app/routers/ImageAspects")(app);
require("./app/routers/StyleTags")(app);
require("./app/routers/ImageFilter")(app);
require("./app/routers/folder")(app);
require("./app/routers/ImgRatioSize")(app);
require("./app/routers/ManageUser")(app);
require("./app/routers/subscription")(app);
require("./app/routers/user")(app);
require("./app/routers/promoCode")(app);
require("./app/routers/FAQs")(app);
// require("./app/routers/GalleryImages")(app);
require("./app/routers/GalleryProfile")(app);
require("./app/routers/Images")(app);
require("./app/routers/Favorite")(app);
require("./app/routers/Search")(app);

// dbConfig.connect() ;

// (async () => {
//   dbConfig.on('connection', (err, connection) => {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log('connected to postgres')
//     }
//   })
// })();

// dbConfig.on('error', (err) => {
//   console.log(err);
// })
// dbConfig.on('end', (err) => {
//   console.log("end connection");
// })




// set port, listen for requests
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});