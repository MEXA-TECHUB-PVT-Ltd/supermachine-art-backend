const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");
const bodyParser = require("body-parser"); /* deprecated */
const client = require("./app/models/db");
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
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

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
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
client.connect();

(async () => {
  client.on('connection', (err, connection) => {
    if (err) {
      console.log(err)
    } else {
      console.log('connected to postgres')
    }
  })
})();

client.on('error', (err) => {
  console.log(err);
})
client.on('end', (err) => {
  console.log("end connection");
})




// set port, listen for requests
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});