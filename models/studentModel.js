// import connection
import db from "../config/db.js";

// Get All Subjects
export const getStudents = (result) => {
    db.query("SELECT * FROM students", (err, results) => {            
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });  
}

// Get Single Subject
export const getStudentById = (id, result) => {
    db.query("SELECT * FROM students WHERE id = ?", [id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });  
}

// Insert Subject to Database
export const insertStudent = (data, result) => {
    db.query("INSERT INTO students SET ?", [data], (err, results) => {            
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Update Subject to Database
export const updateStudentById = (data, id, result) => {
    db.query("UPDATE students SET firstname = ?, lastname = ? WHERE id = ?", [data.firstname, data.lastname, id], (err, results) => {            
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });  
}

// Delete subject from Database
export const deleteStudentById = (id, result) => {
    db.query("DELETE FROM students WHERE id = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });  
}
