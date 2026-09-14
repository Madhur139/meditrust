import express from "express"
import protect from "../middleware/authMiddleware.js"
import aiController from "../controllers/aicontroller.js"
import upload from "../Middleware/fileUploadMiddleware.js"

const router = express.Router()


router.post("/prescription", protect.forUser, upload.single('prescription'), aiController.explainPrescription)


export default router