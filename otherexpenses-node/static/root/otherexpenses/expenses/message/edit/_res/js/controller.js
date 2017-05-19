/**
 * Created by ike on 2017/4/18.
 */
var app = angular.module('currencyEdit', ['toastr','ipCookie']);
app.controller('currenyEditCtrl', function($scope, currencySer,$state,toastr,$stateParams,ipCookie,$location){
    var companyId = {id : $stateParams.id};
    //获取id对应的数据
    currencySer.getOneById1(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
            $scope.monthList = [1,2,3,4,5,6,7,8,9,10,11,12];//月份
        }
    });
    //点击提交
    $scope.EditFun =function(){
        var data = $scope.data;
        $scope.data.target = Number($scope.target).toFixed(2);//目标费用
        $scope.data.actual = Number($scope.actual).toFixed(2);//实际费用
        currencySer.marketserveapplyEdit1(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.otherexpenses.expenses.message.list');
                toastr.success('温馨提示',"此次编辑成功");
            }else if(response.data.code==403  || response.data.code==401){
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        })
    }
    
    //控制年份为整数
    $scope.changeNum =function(val){
        if($scope.year){
            $scope.data.year = parseInt(val);
        }
    }
});
   