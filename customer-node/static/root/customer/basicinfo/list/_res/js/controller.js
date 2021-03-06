var app = angular.module('basicinfoList', ['ng-pagination','toastr','ipCookie']);
app.controller('basicinfoListCtrl',function($scope,basicinfoSer,toastr,ipCookie,$location){
    $scope.$emit('changeCusnum', null)
    $scope.moreList = function(event){
        angular.forEach($scope.basicinfoLists.data,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };

    $scope.selectList = function(event){
        angular.forEach($scope.basicinfoLists.data,function(obj){
                obj._selectList = false
        });
        event._selectList = true;
        $scope.idList = event.id;
        $scope.cusNum = event.customerNum;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idList);
        $scope.$emit('changeCusnum', $scope.cusNum)
    }


    //解冻
    $scope.thaw = function(event){
        var data = {
            id :event.id
        }
        basicinfoSer.thawCustomerbaseinfo(data).then(function(response){
            if(response.data.code==0){
                event.status = "THAW"
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' });
                setTimeout(function(){
                    window.location.href='http://user.issp.bjike.com'
                },2000)
            }else if(response.data.code==1){
                toastr.error( response.data.msg, '温馨提示');
            }

        })
    }



    //分页
    $scope.custom = {
        itemsCount: 11, //总条数
        take: 10,        //每页显示
        activatePage: activatePage
    };


    function activatePage(page) {
        var listData = {
            page:page
        }
        basicinfoSer.listCustomerBaseInfo(listData).then(function(response){
            if(response.data.code==0){
                $scope.basicinfoLists = response.data
            }else if(response.data.code==1){
                toastr.error( response.data.msg, '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    }
    basicinfoSer.countBaseInfo().then(function(response){
        if(response.data.code==0){
            $scope.custom.itemsCount = response.data.data;
        }else if(response.data.code==1){
            toastr.error( response.data.msg, '温馨提示');
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    })


    $scope.$on('deletedId',function(event,delid){
       angular.forEach($scope.basicinfoLists.data,function(obj){
        if(obj.id == delid){
            obj._delete = true
        }
       })
    });

    $scope.$on('congealId',function(event,conid){
        angular.forEach($scope.basicinfoLists.data,function(obj){
            if(obj.id == conid){
                obj.status = 'CONGEAL';
                obj._selectList = false;
            }
        })
    });
})
;


