import { getStudents, getStudentById, insertStudent, updateStudentById, deleteStudentById } from "../models/studentModel.js";

//Get all students
export const showStudents = (req, res) => {
    getStudents((err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    })
}

// Get Single student
export const showStudentById = (req, res) => {
    getStudentById(req.params.id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}
  
// Create New student
export const createStudent = (req, res) => {
    const data = req.body;
    insertStudent(data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Update student
export const updateStudent = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    updateStudentById(data, id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });

}

// Delete student
export const deleteStudent = (req, res) => {
    const id = req.params.id;
    deleteStudentById(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}
