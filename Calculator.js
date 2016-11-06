var app = angular.module("myModule", []);

app.controller("myController", function ($scope, $parse) {

  $scope.message = "";
  $scope.qwe = 'false';

  $scope.Display = function (n1) {

    $scope.message += n1;
  }
  $scope.del = function (a) {
    if ($scope.qwe == 'false') {
      $scope.message = a;

    }

  }
  $scope.sqrt = function (a) {

    $scope.message = Math.sqrt(a);
  }
  $scope.sin = function (a) {

    $scope.message = Math.sin(a * Math.PI / 180);
  }

  $scope.cos = function (a) {

    $scope.message = Math.cos(a * Math.PI / 180);
  }

  $scope.tan = function (a) {

    $scope.message = Math.tan(a);
  }
  $scope.square = function (value) {
    $scope.qwe = 'true';
    console.info($scope.qwe);

  }
  $scope.squareN = function (a) {
    if ($scope.qwe == 'true') {

      var arr = a.split('^');
      $scope.value1 = arr[0];
      $scope.value2 = arr[1];
      $scope.message = Math.pow(arr[0], arr[1]);
      

      $scope.qwe = 'false';

    }
  }

});





