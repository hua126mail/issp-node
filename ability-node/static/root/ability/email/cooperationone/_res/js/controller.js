var app = angular.module('emailCooperationOne', ['toastr','angularjs-dropdown-multiselect']);
app.controller('emailCooperationOneCtrl', function($scope, emailSer,toastr){
    $scope.words = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    //获取公司
    emailSer.getCooperationNames().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        }
    });
    $scope.getSummary ={onSelectionChanged(){
        emailSer.ectSummaryCooperation($scope.words).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
            }
        })
    }}
});





