 import express from "express"
import authservice from "../controllers/authcontroller.js"
import protect from "../Middleware/authmiddleware.js"

 const router = express.Router()

 router.post("/register",authservice.registerUser)
  router.post("/login",authservice.loginUser)
router.get("/me",protect.forUser,authservice.getMyProfile)
router.put("/me",protect.forUser,authservice.updateProfile)

  export default router