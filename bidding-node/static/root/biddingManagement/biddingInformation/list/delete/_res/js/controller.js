var app = angular.module('infoDelete', ['toastr']);
app.controller('infoDeleteCtrl',function($scope,infoSer,toastr,$stateParams,$state){
    //删除
    $scope.delYes = function(){

        var data = {
            id :$stateParams.id
        };

        infoSer.deleteInfo(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $state.go('root.biddingManagement.biddingInformation.list');
                $scope.deledId = $stateParams.id;
                //向父Ctrl传递事件
                $scope.$emit('deletedId', $scope.deledId);
                $scope.$emit('changeId', null);
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    }
});





