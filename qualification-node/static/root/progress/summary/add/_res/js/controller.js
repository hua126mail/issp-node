var app = angular.module('add', ['toastr','ipCookie']);
app.controller('addCtrl', function($scope,$state,toastr,summarySer,ipCookie,$location){

    $scope.addFun = function(){
        $scope.add.attestation=angular.element('.rztime').val();
        $scope.add.handleTime=angular.element('.starttime').val();
        $scope.add.endTime=angular.element('.endtime').val();
        summarySer.addProgress($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.progress.summary.list');
                toastr.success( $scope.add.qualifications+"已成功添加", '温馨提示');
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },2000)
            }
        });
    };
});





