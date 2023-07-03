var express = require("express");
var router = express.Router();

// /* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' });
// });

let cors = require("cors");

let methodOverride = require("method-override");
let bodyParser = require("body-parser");
let path = require("path");

let fs = require("fs");

router.use(methodOverride());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.static(path.join(__dirname, "public")));

let cont = {};

router.use(cors());
const { spawn } = require("node:child_process");

var multer = require("multer");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    console.log(file);
    var filetype = "";
    if (file.mimetype === "image/gif") {
      filetype = "gif";
    }
    if (file.mimetype === "image/png") {
      filetype = "png";
    }
    if (file.mimetype === "image/jpeg") {
      filetype = "jpg";
    }
    cb(null, "image-" + Date.now() + "." + filetype);
  },
});
var upload = multer({ storage: storage });

router.post("/upload", upload.any(), function (req, res, err) {
  let dataToSend;

  const python = spawn("python3", [
    "script.py",
    req.files[0].filename,
    "M_" + req.files[0].filename,
  ]);

  python.stdout.on("data", (data) => {
    console.log(data);
    dataToSend = data.toString();
    console.log(dataToSend);
  });

  python.on("close", (code) => {
    console.log(`child process close all stdio with code ${code}`);
    res.send("M_" + req.files[0].filename);
  });

  if (!req.files) {
    res.status(500);
    return err;
  }
  // const timeout = setTimeout(() => {

  // }, 300000);

  // clearTimeout(timeout);
});

module.exports = router;
