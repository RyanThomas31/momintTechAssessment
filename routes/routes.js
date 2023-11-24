// import express
import express from "express";
 
// import function from controller
import { showSubjects, showSubjectById, createSubject, updateSubject, deleteSubject } from "../controllers/subjects.js";
 
// init express router
const router = express.Router();
 
// Get All subjects
router.get('/subjects', showSubjects);
 
// Get Single subject
router.get('/subject/:id', showSubjectById);
 
// Create New subject
router.post('/subjects', createSubject);
 
// Update subject
router.put('/subject/:id', updateSubject);
 
// Delete subject
router.delete('/subject/:id', deleteSubject);
 
// export default router
export default router;