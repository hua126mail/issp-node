var app = angular.module('yearPlanServer',[]);
app.factory('yearPlanSer',function ($http) {
    return {
        findThisYear : findThisYear,
        addYearPlan:addYearPlan,
        editYearPlan:editYearPlan,
        yearSearch:yearSearch,
        countYear:countYear,
        deleteYearplan:deleteYearplan,
        getType:getType,
        getCourse:getCourse
    };
    function findThisYear(data) {
        return $http.get('/plan/yearplan/maps',{
            params: data
        })
    }

    //添加
    function addYearPlan(data){
        return $http.post('/plan/yearplan/save',data)
    }
    //编辑
    function editYearPlan(data){
        return $http.post('/plan/yearplan/update',data)
    }
    //id查询
    function yearSearch(data){
        return $http.post('/plan/yearplan/findById',data)
    }
    //分页总条数
    function countYear(){
        return $http.get('/plan/yearplan/getTotal')
    }
    //删除
    function deleteYearplan(data){

        return $http.get('/plan/yearplan/delete',{
            params: data

        })
    }
    //获取业务类型
    function getType(){
        return $http.get('/businesstype/findThaw')
    }
    //获取业务方向科目数据
    function getCourse(){
        return $http.get('/businesscourse/findThaw')
    }
});
