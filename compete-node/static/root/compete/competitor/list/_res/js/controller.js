var app = angular.module('competitorList', ['ng-pagination','toastr','ipCookie']);
app.controller('competitorListCtrl',function($scope,competitorSer,toastr,ipCookie,$location) {
    $scope.companySearchFun = function(){
        $scope.teamInfo = {};
    };
   //选择
    $scope.selectList = function(event){
        angular.forEach($scope.competitorLists.data,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idList = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idList);
    };
    //查看更多
    $scope.moreList = function(event){
        angular.forEach($scope.competitorLists.data,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    
    function activatePage(page) {
        var listData = {
            page:page
        }
        competitorSer.listAbilityCompanyCap(listData).then(function(response){
            if(response.data.code==0){
                $scope.competitorLists = response.data
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    }
    $scope.abili = {
        itemsCount: 14, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    competitorSer.countBaseInfo().then(function(response){
        if(response.data.code == 0){;
            $scope.abili.itemsCount = response.data;
        }else{
            toastr.error( response.data.msg , '温馨提示');
        }
    });
    //删除
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.competitorLists.data,function(obj){
            if(obj.id == delid){
                obj._delete = true
            }
        })
    });
});
