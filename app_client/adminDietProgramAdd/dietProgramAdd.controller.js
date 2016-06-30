angular
    .module('trackmydietApp')
    .controller('dietProgramAddCtrl', dietProgramAddCtrl);

function dietProgramAddCtrl () {
    var vm = this;
    vm.pageHeader =  "Add diet programs";
    vm.pageContent = "";

}

var counter = 1;
var limit = 10;
function addInput(divName){
    if (counter == limit)  {
        alert("You have reached the limit of adding " + counter + " inputs");
    }
    else {
        var newdiv = document.createElement('div');
        newdiv.innerHTML = "Food " + (counter + 1) + " <br><input type='text' name='myInputs[]'>";
        document.getElementById(divName).appendChild(newdiv);
        counter++;
    }
}