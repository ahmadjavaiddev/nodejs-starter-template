import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
     upload.fields([
          {
               name: "avatar",
               maxCount: 1,
          },
          {
               name: "coverImage",
               maxCount: 1,
          },
     ]),
     registerUser
);

// router.route("/login").post(loginUser);
router.route("/login").get(() => {
     console.log("login");
});

export default router;
