angular
  .module('trackmydietApp')
  .controller('homeCtrl', homeCtrl);

function homeCtrl () {
  var vm = this;
  vm.pageHeader =  "Track My Diet";
}

