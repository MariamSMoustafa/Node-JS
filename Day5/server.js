//#region Config
const express = require("express");
const app = express();
const PORT  = process.env.PORT || 7005;
const bodyParser = require("body-parser");
const loggingMW = require("./MiddleWares/logging");
const StudentsRoutes = require("./Routes/StudentsRoutes");
const CoursesRoutes = require("./Routes/CoursesRoutes");
//#endregion

//#region MiddleWares
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(loggingMW);
//#endregion

//#region Student
app.use("/api/students",StudentsRoutes)
//#endregion


//#region Courses
app.use("/api/courses",CoursesRoutes)
//#endregion


app.listen(PORT,()=>{
  console.log("http://localhost:" + PORT);
})