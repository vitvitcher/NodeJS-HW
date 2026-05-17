import { Router } from "express";
import {  createNote, deleteNote, getNoteById, getNotes, updateNote } from "../controllers/notesController";

const studentRoutes = Router();

studentRoutes.get('/notes', getNotes);

studentRoutes.get('/notes/:noteId', getNoteById);

studentRoutes.post('/notes', createNote);

studentRoutes.delete('/notes/:noteId', deleteNote);

studentRoutes.patch('/notes/:noteId', updateNote);

export default studentRoutes;
