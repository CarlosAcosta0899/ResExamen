import { Router } from "express";
const router = Router();
import * as PostCtrl from "../controller/post.controller";
router.get("/", PostCtrl.getPost);
router.get("/:id", PostCtrl.getPostId);
router.post("/", PostCtrl.crearPost);
router.delete("/:id", PostCtrl.deletePost);
router.put("/:id", PostCtrl.updatePost);


export default router;
