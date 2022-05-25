import { Router } from "express";
const router = Router();

import * as UsuarioCtrl from "../controller/usuario.controller";
router.get("/", UsuarioCtrl.getUsuario);
router.get("/:id", UsuarioCtrl.getUsuarioId);
router.post("/", UsuarioCtrl.crearUsuario);
router.delete("/:id", UsuarioCtrl.deleteUsuario);
router.put("/:id", UsuarioCtrl.updateUsuario);


export default router;
