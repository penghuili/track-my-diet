angular
    .module('trackmydietApp')
    .controller('registerCtrl', registerCtrl);

function registerCtrl($location, authentication) {
    var vm = this;

    vm.pageHeader = {
      title: 'Create a new TrackMyDiet account'
    };

    vm.credentials = {
      name : "",
      email : "",
      password : ""
    };

    vm.returnPage = $location.search().page || '/';

    vm.onSubmit = function () {
      vm.formError = "";
      if (!vm.credentials.name || !vm.credentials.email || !vm.credentials.password) {
        vm.formError = "All fields required, please try again";
        return false;
      } else {
        vm.doRegister();
      }
    };

    vm.doRegister = function() {
      vm.formError = "";
      authentication
        .register(vm.credentials)
        .error(function(err){
          vm.formError = err;
        })
        .then(function(){
          $location.search('page', null); 
          $location.path(vm.returnPage);
        });
    };

  }

