var myMod =require("./module");
console.log(myMod);

let myTicket = myMod.myTicket;

let ticket1 =new myTicket();

ticket1.AddTicket(1,100,"Alex","Paris","15-12-2023");
ticket1.AddTicket(2,105,"Alex","Rome","15-12-2023");

ticket1.GetAllDetails();
ticket1.GetTicket(1);
ticket1.UpdateInfo(2).DeparturePlace = "Dubai";
ticket1.GetAllDetails();

