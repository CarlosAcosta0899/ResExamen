import { Router } from "express";
const router = Router();

import * as RolesCtrl from "../controller/rol.controller";
router.get("/", RolesCtrl.getRol);
router.get("/:id", RolesCtrl.getRolId);
router.post("/", RolesCtrl.crearRol);
router.delete("/:id", RolesCtrl.deleteRol);
router.put("/:id", RolesCtrl.updateRol);


export default router;
