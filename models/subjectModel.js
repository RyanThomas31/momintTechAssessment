// import connection
import db from "../config/db.js";

// Get All Subjects
export const getSubjects = (result) => {
    db.query("SELECT * FROM subjects", (err, results) => {            
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });  
}

// Get Single Subject
export const getSubjectById = (id, result) => {
    db.query("SELECT * FROM subjects WHERE id = ?", [id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });  
}

// Insert Subject to Database
export const insertSubject = (data, result) => {
    db.query("INSERT INTO subjects SET ?", [data], (err, results) => {            
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Update Subject to Database
export const updateSubjectById = (data, id, result) => {
    db.query("UPDATE subjects SET name = ?, teacher = ? WHERE id = ?", [data.name, data.teacher, id], (err, results) => {            
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });  
}

// Delete subject from Database
export const deleteSubjectById = (id, result) => {
    db.query("DELETE FROM subjects WHERE id = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });  
}
