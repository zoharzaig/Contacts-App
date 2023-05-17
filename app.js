var app = angular.module("ContactApp", []);


//The following was done for learning purposes and not actually needed for the project: 
// app.controller("HeaderCtrl", HeaderCtrl);
// app.controller("FooterCtrl", FooterCtrl);

// //declare a value service for data
// app.value("AppDataSvc", {
//     name: "Contact App",
//     author: "Zohar Zaig",
//     version: 1,
//   });

// //declare a value for login function
// // the same functionality will work with constant service.
// // Its decleration will be as follows:
// // app.value("AppDataSvc", {
// //     name: "Contact App",
// //     author: "Zohar Zaig",
// //     version: 1,
// app.value("LogInSvc", function () {
//   console.log("Hey");
// });

// function AppConfig1(AppNameSvc) {
//   return {
//     name: AppNameSvc,
//     author: "Zohar Zaig",
//     builtDate: new Date().toDateString,
//     version: 1,
//   };
// }

// //Factory- another api for creating shared data.
// // The returned value in the functionn is assigned with AppDataFactorySvc
// // We inject AppNameSvc into AppConfig1. Such injectionn can not be done with Value Service!
// app.factory("AppDataFactorySvc", AppConfig1); //what actually happens: AppDataFactorySvc= AppConfig1()

// //dependency inject AppDataFactorySvc into the header controller
// function HeaderCtrl(AppDataFactorySvc) {
//   //callig AppDataFactorySvc which holds the return value of the dfunction assigned to it
//   this.appTitle = AppDataFactorySvc.name;
// }
// //dependency inject AppDataServiceSvc into the footer controller
// function FooterCtrl(AppDataServiceSvc) {
//   this.appTitle = AppDataServiceSvc.name;
// }
