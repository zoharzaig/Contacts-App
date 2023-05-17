(function () {
  var app = angular.module("ContactApp");

  //service- an api that links to the object return by a constructor function
  //what actually happens: AppDataServiceSvc= new AppConfig2()
  app.service("AppDataServiceSvc", function (AppNameSvc) {
    // what js does here in construction mode: var this = {}
    this.name = AppNameSvc;
    this.author = "Zohar Zaig";
    this.builtDate = new Date().toDateString;
    //what js does here in construction mode: return this
  });
})();
