angular
  .module('trackmydietApp')
  .controller('dietProgramDetailCtrl', dietProgramDetailCtrl);

function dietProgramDetailCtrl ($location, trackmydietData, authentication, $routeParams) {
  var vm = this;
  trackmydietData.dietPrograms()
      .success(function(data1) {
        vm.data = {dietPrograms: data1};
      })
      .error(function (e) {
        vm.message = "Sorry, something's gone wrong, please try again later";
      });
   vm.dietprogramid = $routeParams.dietprogramid;
   
     trackmydietData.dietProgramById(vm.dietprogramid)
      .success(function(data2) {
        vm.data2 = {dietProgram: data2};
      })
      .error(function (e) {
        vm.message = "Sorry, something's gone wrong, please try again later";
      });

  vm.isLoggedIn = authentication.isLoggedIn();
  vm.currentPath = $location.path();
  vm.logout = function() {
    authentication.logout();
    $location.path('/');
  };
}
