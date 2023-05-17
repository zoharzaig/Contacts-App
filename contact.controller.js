(function () {
  var app = angular.module("ContactApp");

  app.controller("ContactCtrl", ContactCtrl);

  function ContactCtrl(ContactDataSvc) {
    var self = this;
    self.editMode = false;
    this.addMode = false;
    self.editButtonText = "Edit";
    self.addMode = false;
    ContactDataSvc.getContacts().then(function (data) {
      self.contacts = data;
    });

    this.trigerEditMode = function () {
      self.editMode = !this.editMode;
    };

    this.save = function () {
      self.editMode = !this.editMode;
      var userData = this.selectedContact;

      if (self.addMode) {
        ContactDataSvc.createUser(userData).then(
          function () {
            self.successMessage = "Data Successfully Updated";
          },
          function () {
            self.errorMessage = "An error occured, try again";
          }
        );
        this.addMode = false;
      } else {
        ContactDataSvc.saveUser(userData).then(
          function () {
            self.successMessage = "Data Successfully Updated";
          },
          function () {
            self.errorMessage = "An error occured, try again";
          }
        );
      }
    };

    this.selectedContact = null;

    this.selectContact = function (index) {
      if (!this.addMode) {
        this.selectedContact = this.contacts[index];
        self.successMessage = undefined;
        self.errorMessage = undefined;
      }
    };

    this.addNewContact = function () {
      this.addMode = true;
      this.selectedContact = {
        id: new Date().toTimeString(),
      };
      this.editMode = true;
    };
  }
})();
