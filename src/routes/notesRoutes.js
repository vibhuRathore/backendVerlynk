import { Router } from "express";
import { getAllNotes , getAllNoteById , createNote , deleteNote } from "../controllers/notesController.js"

const router = Router();

router.get("/" , getAllNotes);
router.post("/" , createNote);
router.get("/:id" , getAllNoteById);
router.delete("/:id" , deleteNote);

export default router;  