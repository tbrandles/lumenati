//  *****************************************   //
//  *                                       *   //
//  *           GROUPS FACTORY              *   //
//  *                                       *   //
//  *****************************************   //

app.factory('groupsFactory', ['$http', '$routeParams', function($http, $routeParams) {
    var factory = {};

    // REGISTER METHOD TO SERVER ====================================================================
    factory.create = function(groupRegistrationObjectFromForm, callback){
        // console.log("***************** Got to CLIENT usersFactory.js FACTORY.REGISTER");
        // console.log(userRegistrationObjectFromForm);
        $http.post('/group/new', groupRegistrationObjectFromForm).then(function(returnedDataFromServer){
            // console.log("Response from server is: ", returnedDataFromServer.data);
            if(typeof(callback) == 'function'){
                callback(returnedDataFromServer.data);
            }
        })
    };








    return factory;

}]);