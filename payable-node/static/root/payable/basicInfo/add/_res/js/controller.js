var app = angular.module('basicInfoAdd', ['toastr','ipCookie']);
app.controller('basicInfoAddCtrl', function ($scope, basicInfoSer, $state, toastr,ipCookie,$location) {
    //添加
    $scope.basicInfoAddFun = function () {
        var vm = $scope;
        vm.add.taxDate = angular.element('.taxDate').val();
        basicInfoSer.addBasicInfo(vm.add).then(function (response) {
            console.log(response)
            if (response.data.code == 0) {
                $state.go('root.payable.basicInfo.list');
                toastr.success("已成功添加", '温馨提示');
            } else if (response.data.code == 403||response.data.code == 401) {
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        });
    };
});



