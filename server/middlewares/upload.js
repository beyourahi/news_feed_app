const { nanoid } = require("nanoid");
const multer = require("multer");
const path = require("path");
const image_folder = "../upload";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, image_folder);
  },
  filename: (req, file, cb) => {
    const fileExt = path.extname(file.originalname);
    const fileName = nanoid();
    console.log(fileName)
    req.imgName = fileName+fileExt;
    cb(null, fileName + fileExt);
  },
});

let upload = multer({
  dest: storage,
  limits: {
    fileSize: 8000000,
  },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg" ||
      file.mimetype == "image/webp"
    ) {
      cb(null, true);
    } else {
      cb(new Error("supported files are .png .jpg .jpeg or .webp"));
    }
  },
});

module.exports = upload.single("post");
