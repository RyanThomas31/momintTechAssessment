import { getSubjects, getSubjectById, insertSubject, updateSubjectById, deleteSubjectById } from "../models/subjectModel.js";

//Get all subjects
export const showSubjects = (req, res) => {
    getSubjects((err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    })
}

// Get Single subject
export const showSubjectById = (req, res) => {
    getSubjectById(req.params.id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}
  
// Create New subject
export const createSubject = (req, res) => {
    const data = req.body;
    insertSubject(data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Update subject
export const updateSubject = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    updateSubjectById(data, id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });

}

// Delete subject
export const deleteSubject = (req, res) => {
    const id = req.params.id;
    deleteSubjectById(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}
