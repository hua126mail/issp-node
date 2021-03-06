var app = angular.module('emailCongeal', ['toastr']);
app.controller('emailCongealCtrl',function($scope,emailSer,toastr,$stateParams,$state){
    //冻结
    $scope.congealYes = function(){
        var data = {
            id :$stateParams.id
        }
        emailSer.congealEmail(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已冻结", '温馨提示');
                $state.go('root.ability.email.list');
                $scope.conId = $stateParams.id;
                //向父Ctrl传递事件
                $scope.$emit('congealId', $scope.conId)
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        })
    }


});


