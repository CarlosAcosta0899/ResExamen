import { Router } from "express";
const router = Router();
import * as PersonaCtrl from "../controller/personas.controller";
router.get("/", PersonaCtrl.getPersona);
router.get("/:id", PersonaCtrl.getPersonaId);
router.post("/", PersonaCtrl.crearPersona);
router.delete("/:id", PersonaCtrl.deletePersona);
router.put("/:id", PersonaCtrl.updatePersona);


export default router;
