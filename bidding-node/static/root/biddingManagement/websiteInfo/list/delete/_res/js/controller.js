var app = angular.module('webDelete', ['toastr']);
app.controller('webDeleteCtrl',function($scope,websiteSer,toastr,$stateParams,$state){
    //删除
    $scope.delYes = function(){

        var data = {
            id :$stateParams.id
        };

        websiteSer.deleteWebsite(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $state.go('root.biddingManagement.websiteInfo.list');
                $scope.deledId = $stateParams.id;
                //向父Ctrl传递事件
                $scope.$emit('deletedId', $scope.deledId);
                $scope.$emit('changeId', null)
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    }


});


