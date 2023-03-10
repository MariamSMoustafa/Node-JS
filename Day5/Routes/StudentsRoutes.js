const express = require("express");
const StudentsController = require("../Controllers/StudentsController");
let router = express.Router();

router.get("/",StudentsController.getAllStudents);

router.get("/:courseName/courses",StudentsController.getStudentsByCourseName);


router.post("/create",StudentsController.addNewStudent);

router.delete("/:id",StudentsController.deleteStudentByID);


module.exports = router;