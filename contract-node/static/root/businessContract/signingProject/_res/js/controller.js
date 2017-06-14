var app = angular.module('signingProject', [{
    files:[
        "root/businessContract/signingProject/_res/js/service.js",
    ]
}]);
app.controller('signingCtrl',function ($scope,$state) {
    if ($state.current.url == '/signingProject') {//默认加载列表
        $state.go('root.businessContract.signingProject.list[12]')
    }
    $scope.$emit('isVi',true);//判断是否出现搜索按钮
}).controller('signingMenuCtrl',function($scope,$state,$rootScope,$location,signingSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新

        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){

            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idListd = window.location.href.split('id=')[1];
    }
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        signingSer.menuPermission(buttonName).then(function(response){
            if(response.data.code == 0 && response.data.data){
                $scope[buttonName] = true;
            }else{
                $scope[buttonName] = false;
            }
        });
        $scope.menuAdd = false;
    };
    //监听到父Ctrl后改变事件
    $scope.$on("getId", function(event, msg){
       $scope.idListd = msg;
    });

    $scope.delete = function(){
        if($scope.idListd){
            $state.go('root.businessContract.signingProject.list[12]',{id:$scope.idListd,name:'delete'});
            $scope.menuClass = 'deleteMenu';

        }
    };
    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.businessContract.signingProject.edit[12]',{id:$scope.idListd});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.review = function(){
        if($scope.idListd){
            $state.go('root.businessContract.signingProject.review[12]',{id:$scope.idListd});
            $scope.menuClass = 'reviewMenu';
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
    $scope.upload = function(){
        if($scope.idListd){
            $state.go('root.businessContract.signingProject.upload[12]',{id:$scope.idListd});
            $scope.menuClass = 'uploadMenu'
        }
    };
    $scope.view = function(){
        if($scope.idListd){
            $state.go('root.businessContract.signingProject.view[12]',{id:$scope.idListd,view:1});
            $scope.menuClass = 'viewMenu'
        }
    };
    $scope.export = function(){
        $scope.menuClass = 'exportMenu'
    };
    $scope.import = function(){
        $scope.menuClass = 'importMenu'
    };
});

//自定义过滤器
app.filter('cover',function(){
   return function(val){
       var result;
       switch(val){
           case "LIST":
               result = "查看或列表";
               break;
           case "ADD":
               result = "添加";
               break;
           case "EDIT":
               result = "编辑";
               break;
           case "AUDIT":
               result = "审核";
               break;
           case "DELETE":
               result = "删除";
               break;
           case "CONGEL":
               result = "冻结";
               break;
           case "THAW":
               result = "解冻";
               break;
           case "COLLECT":
               result = "汇总";
               break;
           case "UPLOAD":
               result = "上传附件";
               break;
           case "DOWNLOAD":
               result = "下载附件";
               break;
           case "IMPORT":
               result = "导入";
               break;
           case "EXPORT":
               result = "导出";
               break;
           case "SEE":
               result = "查看";
               break;
           case "SEEFILE":
               result = "查看附件";
               break;
           case "MOBILECOMMUNICATION":
               result = "移动通信类";
               break;
           case "SOFTDEVELOP":
               result = "软件开发类";
               break;
           case "INTELLIGENCESYSTEM":
               result = "智能系统集成类";
               break;
           case "ADVERT":
               result = "广告策划营销类";
               break;
           case "RENTCONTRACT":
               result = "租赁合同";
               break;
           case "CHARCONTRACT":
               result = "承包的项目合同";
               break;
           case "DISTRIBUTECONTRACT":
               result = "分包项目合同";
               break;
           case "SALECONTRACT":
               result = "销售合同";
               break;
           case "FRAMECONTRACT":
               result = "框架合同";
               break;
           case "SINGLECONTRACT":
               result = "单次合同";
               break;
       }
       return result;
   }

});