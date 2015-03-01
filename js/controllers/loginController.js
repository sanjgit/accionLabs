app.controller('loginCntrl', ['$scope', '$http', '$routeParams', '$location', function ($scope, $routeParams, $http, $location) {
    $scope.login = function () {
        //$scope.userName
        $location.path("/quiz/"+$scope.userName);
    }
}]);