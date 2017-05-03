/**
 * Created by ike on 2017/4/20.
 */
/**
 * Created by ike on 2017/4/18.
 */
var app = angular.module('socialPAdd', ['toastr']);
app.controller('socialPAddCtrl', function($scope, selfcapSer,$state,toastr,$stateParams){
    var selfcapId = {id : $stateParams.id};
    //获取值
    selfcapSer.getTwoById(selfcapId).then(function(response){
        if(response.data.code==0){
            $scope.peditInfo = response.data.data;
        }
    });
    $scope.selfcapAddFun = function(){
        var vm = $scope;

        var data = {
            selfCapabilityId:vm.peditInfo.id,
            contactName: vm.peditInfo.contactName2,
            family: vm.peditInfo.family2,
            sex: vm.peditInfo.sex2,
            contactWay: vm.peditInfo.contactWay2,
            emailName: vm.peditInfo.emailName2,
            qqOrWechat: vm.peditInfo.qqOrWechat2,
            natives: vm.peditInfo.natives2,
            hobby: vm.peditInfo.hobby2,
            charact: vm.peditInfo.charact2,
            family: vm.peditInfo.family2,
            familyRelation: vm.peditInfo.familyRelation2,
            studyExperience: vm.peditInfo.studyExperience2,
            connectExperience: vm.peditInfo.connectExperience2,
            oldWorkPlace: vm.peditInfo.oldWorkPlace2,
            livePlace: vm.peditInfo.livePlace2,
            growthPlace: vm.peditInfo.growthPlace2,
            createTime: vm.peditInfo.createTime2,
            modifyTime: vm.peditInfo.modifyTime2,
        };
        selfcapSer.addSocialSelf(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.ability.selfcap.list');
                toastr.success( vm.peditInfo.contactName2+"已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
});