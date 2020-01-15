const sub = require("./electron-quick-start/sub.js");
const info = require("./electron-quick-start/information.js");

const app = angular.module("mainApp", []);

app.controller("mainController", function($scope) {
  $scope.todoArr = [
    { todoText: "지옥에서 온 AngularJS 1회독", isDone: false, info: null, hasInfo: true },
    {
      todoText: "전기에 감전된 것처럼 일렉트론 마스터 1회독",
      isDone: false,
      info: null,
      hasInfo: true
    }
  ];

  $scope.todoIndex = null;

  $scope.addTodo = function() {
    if ($scope.todoText !== "" && typeof $scope.todoText === "string") {
      $scope.todoArr.push({ todoText: $scope.todoText, isDone: false, hasInfo: true });
      $scope.todoText = "";
    }
  };

  $scope.deleteTodo = function() {
    $scope.todoArr = $scope.todoArr.filter(el => el.isDone === false);
  };

  $scope.calculateRemains = function() {
    return $scope.todoArr.filter(el => el.isDone === false).length;
  };

  $scope.addInfo = function() {
    $scope.todoArr[$scope.todoIndex].info = [
      $scope.info_start,
      $scope.info_end,
      $scope.info_remark,
      $scope.info_priority
    ];
  };

  $scope.storeCurrentIndex = function(index) {
    $scope.todoIndex = index;
  };

  $scope.createSubWindow = sub.createWindow;

  $scope.createInfoWindow = info.createWindow;
});
