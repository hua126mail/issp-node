var app = angular.module('basicinfo', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.contract.basicinfo", {
        url : "/basicinfo",
        views : {
            "content@root.contract" : {
                templateUrl : "root/contract/basicinfo/_res/html/index.html",
                controller:"basicinfoCtrl"
            },"menu@root.contract" : {
                templateUrl : "root/contract/basicinfo/_res/html/menu.html",
                controller:"basicinfoMenuCtrl"
            }
        }
    }).state("root.contract.basicinfo.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.contract.basicinfo":{
                templateUrl : "root/contract/basicinfo/add/_res/html/index.html",
                controller:'basicinfoAddCtrl'
            }
        }
    }).state("root.contract.basicinfo.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.contract.basicinfo":{
                templateUrl : "root/contract/basicinfo/edit/_res/html/index.html",
                controller:'basicinfoEditCtrl'
            }
        }
    })
});