import express from "express";
const router = express.Router();
import {
    addPanelMember,
    getPanel,
    addMember,
    getPanelMember,
    removeMember
} from "../../controllers/allocatePanelController/allocatePanelController.js";

router.post("/", addPanelMember);
router.get("/", getPanel);
router.put("/member", addMember);
router.get("/member/:groupId",getPanelMember);
router.post("/remove/:id", removeMember);



export default router;