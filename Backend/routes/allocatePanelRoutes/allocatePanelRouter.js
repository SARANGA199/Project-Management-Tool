import express from "express";
const router = express.Router();
import {
    addPanelMember,
    getPanel,
} from "../../controllers/allocatePanelController/allocatePanelController.js";

router.post("/", addPanelMember);
router.get("/", getPanel);

export default router;