var app = angular.module('emailList', ['ng-pagination','toastr']);
app.controller('emailListCtrl',function($scope,emailSer,toastr,$state,$location) {
    $scope.$emit('changeId', null);
    //分页
    function activatePage(page) {
        var listData = {
            page:page
        };
        emailSer.listAbilityEmail(listData).then(function(response){
            if(response.data.code==0){
                $scope.emailLists = response.data
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    }
    $scope.abili = {
        itemsCount: 12, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    emailSer.countEmail().then(function(response){
        if(response.data.code==0){
            $scope.abili.itemsCount = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });

    //解冻
    $scope.thaw = function(event){
        var data = {
            id :event.id
        };
        emailSer.thawEmail(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已解冻", '温馨提示');
                event.status = 'THAW'
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    }
    //选择
    $scope.selectList = function(event){
        angular.forEach($scope.emailLists.data,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idList = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idList);
    };
    //查看更多
    $scope.moreList = function(event){
        angular.forEach($scope.emailLists.data,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    //删除
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.emailLists.data,function(obj){
            if(obj.id == delid){
                obj._delete = true;
            }
        })
    });
    //冻结
    $scope.$on('congealId',function(event,conid){
        angular.forEach($scope.emailLists.data,function(obj){
            if(obj.id == conid){
                obj._selectList = false;
                obj.status = 'CONGEAL'
            }
        })
    });
});
