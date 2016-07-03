angular
  .module('trackmydietApp')
  .service('trackmydietData', trackmydietData);

function trackmydietData ($http, authentication) {
  var dietPrograms = function() {
    return $http.get('/api/dietPrograms');
  };

  var addDietProgram = function(data) {
    return $http.post('/api/dietPrograms', data, {
      headers: {
        Authorization: 'Bearer ' + authentication.getToken()
        }
     });
  };

  var dietProgramById = function(dietprogramid) {
    return $http.get('/api/dietPrograms/' + dietprogramid);
  };

  var addProduct = function(data) {
    console.log("addProduct in service");
    return $http.post('/api/products', data, {
      headers: {
        Authorization: 'Bearer ' + authentication.getToken()
      }
    });
  };

  var addDiary = function(data) {
    console.log("in addDiary");
    return $http.post('/api/diary/add', data, {
      headers: {
        Authorization: 'Bearer ' + authentication.getToken()
        }
     });
  };

  var addMealPlan = function(data) {
    return $http.post('/api/diary/plan', data, {
      headers: {
        Authorization: 'Bearer ' + authentication.getToken()
        }
     });
  };

  return {
    dietPrograms: dietPrograms,
    dietProgramById: dietProgramById,
    addDiary: addDiary,
    addDietProgram: addDietProgram,
    addMealPlan: addMealPlan,
    addProduct: addProduct
  };
}
