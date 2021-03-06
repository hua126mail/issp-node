var app = angular.module('type', [{
    files:[
        "root/supplier/type/_res/js/service.js"
    ]
}]);
app.controller('typeCtrl',function ($scope,$state) {
    if ($state.current.url == '/type') {
        $state.go('root.supplier.type.list');
    }
}).controller('typeMenuCtrl',function($scope,$state,$rootScope,$location){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list'){
            $scope.menuClass = 'listMenu';
        }
    });
    //监听到父Ctrl后改变事件
    $scope.$on("listId", function(event, id){
        $scope.idList = id;
    });
    $scope.congeal = function(){
        if($scope.idList){
            $state.go('root.supplier.type.list.congeal[12]',{id:$scope.idList});
            $scope.menuClass = 'congealMenu'
        }
    };
    //关于删除
    $scope.delete = function(){
        if($scope.idList){
            $state.go('root.supplier.type.list.delete[12]',{id:$scope.idList});
            $scope.menuClass = 'deleteMenu'
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.supplier.type.edit[12]',{id:$scope.idList});
            $scope.menuClass = 'editMenu'
        }
    };

    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
});
//自定义过滤器
app.filter('cover', function(){
    return function(val){
        var result;
        switch(val){
            case "THAW":
                result = "解冻";
                break;
            case "CONGEAL":
                result = "冻结";
                break;
            case "DELETE":
                result = "删除";
                break;
            case "NOACTIVE":
                result = "未激活";
                break;
            case "UNREVIEW":
                result = "未审核";
                break;
        }
        return result;
    }

})

