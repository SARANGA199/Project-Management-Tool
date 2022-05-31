import express from "express";
const router = express.Router();
import {
    addPanelMember,
    getPanel,
    addMember,
    getPanelMember
} from "../../controllers/allocatePanelController/allocatePanelController.js";

router.post("/", addPanelMember);
router.get("/", getPanel);
router.put("/member", addMember);
router.get("/member/:groupId/:memberId",getPanelMember);


export default router;