var app = angular.module('voucherAuditList', ['ng-pagination','toastr']);
app.controller('voucherAuditListCtrl',function($scope,auditSer,toastr){
    $scope.$emit('changeId', null);
    function activatePage(page) {
        var listData = {
            page:page
        }
        auditSer.AuditList(listData).then(function(response){
            if(response.data.code==0){

                $scope.auditLists = response.data.data
            }else{
                toastr.error( "请求超时，请联系管理员", '温馨提示');
            }
        });
    }

    $scope.selectList = function(event){
        angular.forEach($scope.auditLists,function(obj){
                obj._selectList = false
        });
        event._selectList = true;
        $scope.idListd = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idListd);

    };
    //点击更多详细
    $scope.moreList = function(event){
        angular.forEach($scope.auditLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    //删除
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.auditLists,function(obj){
            if(obj.id == delid){
                obj._delete = delid
            }
        })
    });
    //审核
    $scope.$on('reviewId',function(event,checkid){
        angular.forEach($scope.auditLists,function(obj){
            if(obj.id == checkid){
                obj._delete = checkid
            }
        })
    });
//分页
    $scope.custom = {
        itemsCount: 2, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };

    auditSer.countReview().then(function(response){
        if(response.data.code==0){
            $scope.custom.itemsCount = response.data.data;
        }else{
            toastr.error( "请求超时，请联系管理员", '温馨提示');
        }
    })

});

