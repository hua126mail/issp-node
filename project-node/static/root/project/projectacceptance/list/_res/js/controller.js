/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('projectacceptanceList', ['ng-pagination','toastr']);
app.controller('projectacceptanceListCtrl',function($scope,projectacceptanceSer,toastr) {
    $scope.teamInfo = {};
    $scope.resetFilter = function(v) {
        if (!v) $scope.teamInfo = {};
    };
   //选择
    $scope.selectList = function(event){
        angular.forEach($scope.projectacceptanceLists.data,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idList = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idList);
    };
    //查看更多
    $scope.moreList = function(event){
        angular.forEach($scope.projectacceptanceLists.data,function(obj){
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
        projectacceptanceSer.listProjectAcceptance(listData).then(function(response){
            if(response.data.code==0){
                $scope.projectacceptanceLists = response.data
            }else{
                toastr.error( "请求超时，请联系管理员", '温馨提示');
            }
        });
    }
    $scope.abili = {
        itemsCount: 14, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    projectacceptanceSer.countProjectAcceptance().then(function(response){
        if(response.data.code==0){
            $scope.abili.itemsCount = response.data.data;
        }else{
            toastr.error( "请求超时，请联系管理员", '温馨提示');
        }
    });
    //删除
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.projectacceptanceLists.data,function(obj){
            if(obj.id == delid){
                obj._delete = true
            }
        })
    });
});
