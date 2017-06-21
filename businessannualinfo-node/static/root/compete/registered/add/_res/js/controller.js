var app = angular.module('registeredAdd', ['toastr']);
app.controller('registeredAddCtrl', function($scope, registeredSer,$state,toastr){
    //添加个人能力
    $scope.registeredAddFun = function(){
        var data = $scope.data;
        registeredSer.loginadd(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.compete.registered.list');
                toastr.success( "公司信息已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        });

    };
});



