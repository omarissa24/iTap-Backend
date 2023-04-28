import express from 'express';
import { getUserProfile, updateUserProfile } from "../controllers/profile.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get('/:id', getUserProfile);
router.put('/:id', verifyToken, updateUserProfile);

export default router;