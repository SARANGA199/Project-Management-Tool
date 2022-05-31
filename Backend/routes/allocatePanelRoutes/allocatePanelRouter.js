import express from "express";
const router = express.Router();
import {
    addPanelMember,
    getPanel,
    addMember
} from "../../controllers/allocatePanelController/allocatePanelController.js";

router.post("/", addPanelMember);
router.get("/", getPanel);
router.put("/member", addMember);


export default router;