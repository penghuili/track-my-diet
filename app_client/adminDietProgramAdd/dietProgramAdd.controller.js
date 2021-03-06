angular
    .module('trackmydietApp')
    .controller('dietProgramAddCtrl', dietProgramAddCtrl);

function dietProgramAddCtrl (trackmydietData) {
  var vm = this;
  vm.pageHeader = "Add Diet Program";
  vm.formError = "";
  vm.formData = {};
  vm.formData.loseWeight = false;
  vm.formData.buildingMuscle = false;
  vm.formData.keepShape = false;
  vm.formData.beBeautiful = false;

  vm.onSubmit = function() {
  	vm.formError = "";
    vm.formData.foodAllowed = vm.foodAllowed.split(",");
    if (!vm.formData.name || !vm.formData.description) {
      vm.formError = "Name and description are required";
      return false;
    } else {
      console.log("in onSubmit");
      console.log(vm.formData.name);
      console.log(vm.formData.loseWeight);
      vm.doAddDietProgram(vm.formData);
      }
    };

  vm.doAddDietProgram = function (formData) {
      trackmydietData.addDietProgram(formData)
        .success(function (data) {
          vm.formError = data + " saved";
        })
        .error(function (data) {
          vm.formError = data;
        });
  };
}
