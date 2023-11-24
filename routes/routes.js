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

// import function from controller
import { showStudents, showStudentById, createStudent, updateStudent, deleteStudent } from "../controllers/students.js";
 
// Get All Students
router.get('/students', showStudents);
 
// Get Single Student
router.get('/student/:id', showStudentById);
 
// Create New Student
router.post('/student', createStudent);
 
// Update Student
router.put('/student/:id', updateStudent);
 
// Delete Student
router.delete('/student/:id', deleteStudent);
 
// export default router
export default router;