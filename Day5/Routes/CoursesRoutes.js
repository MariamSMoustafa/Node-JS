
const express = require("express");
const CoursesController = require("../Controllers/CoursesController");
let router = express.Router();

router.get("/",CoursesController.getAllCourses);

router.post("/create",CoursesController.addNewCourse);

router.delete("/:id",CoursesController.deleteCourseByID);


module.exports = router;