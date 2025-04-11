import { Router } from "express";
import { getEstudiantes, getEstduiante, createEstudiante, updateEstudiante, deleteEstudiante } from "../controllers/estudiante.controller";

const router = Router();

router.get('/', getEstudiantes);
router.get('/:id', getEstduiante);
router.put('/', createEstudiante);
router.post('/:id', updateEstudiante);
router.delete('/:id', deleteEstudiante);

export default router;