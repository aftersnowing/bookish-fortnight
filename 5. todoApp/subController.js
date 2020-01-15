// const main = require("./electron-quick-start/main.js")
const { ipcRenderer } = require("electron");

const app = angular.module("mainApp", []);

app.controller("mainController", function($scope) {
  $scope.info = null;

  $scope.addInfo = function() {
    $scope.info = [$scope.info_start, $scope.info_end, $scope.info_remark, $scope.info_priority];
    ipcRenderer.send("sendInfo", $scope.info);
    console.log($scope.info);
  };
});
