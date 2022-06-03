import express from "express";
import {
  getRequestSV,
  saveRequestSV,
  getRequestsById,
  updateRequest,
  updateCoSupervisorRequest,
    updateCoSupervisorStatus,
  deleteRequest,
} from "../../controllers/requestSupervisorController/requestSupervisorController.js";

const router = express.Router();

router.get('/requestSV',getRequestSV);
router.post('/requestSV',saveRequestSV);
router.get('/requestSV/:id',getRequestsById);
router.put('/requestSV/:id',updateRequest);
router.put('/requestCoSV/:id',updateCoSupervisorRequest);
router.put('/request/:id',updateCoSupervisorStatus);

router.delete("/requestSV/:id", deleteRequest);

export default router;
