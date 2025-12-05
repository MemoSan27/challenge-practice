import { Router } from "express";
import {
  createOne,
  deleteOne,
  findAll,
  findOne,
  updateOne,
} from "../controllers/user.controller";

const router = Router();

router.post("", createOne);
router.get("/", findAll);
router.get("/:id", findOne);
router.put("/:id", updateOne);
router.delete("/:id", deleteOne);

export default router;
