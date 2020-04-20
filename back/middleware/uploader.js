import multer from "multer";
import cloudinaryStorage from "multer-storage-cloudinary";
import cloudinary from "cloudinary";
import _ from "lodash";

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "avatar",
  allowedFormats: ["jpg", "png"],
  filename: function (req, file, cb) {
    const userID = _.get(req, "user._id");
    const userFile = userID ? `avatar${userID}` : file;
    cb(undefined, userFile);
  },
});

// Si quieres crear otra carpeta en cloudinari, repetimos el código cambiando el nombre de la carpeta E INCLUSO DIFERENTES FORMATOS PERMITIDOS
// const storage = cloudinaryStorage({
//   cloudinary: cloudinary,
//   folder: "OTRACARPETA",
//   allowedFormats: ["jpg", "png", "pdf"],
//   filename: function (req, file, cb) {
//     const userID = _.get(req, "user._id");
//     const userFile = userID ? `avatar${userID}` : file;
//     cb(undefined, userFile);
//   },
// });

//en index.js haces una ruta diferente

// router.post(
//     "/profilepic",
//     uploadCloudinary.single("avatar"),
//     async (req, res) => {
//       console.log(req.file);
//       const user = req.user;

//       // if there was previous profile pic, delete it

//       // Set the new profile pic
//       user.profilePic = req.file;
//       const updatedUser = await user.save();

//       return res.json({ status: "Uploaded completed", user: updatedUser });
//     }
//   );

export const uploadCloudinaryAvatar = multer({ storage });

export const upload = multer({ dest: "uploads/" });
