var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
var urlEncode = require(path.resolve('plugins/urlEncode.js'));
module.exports = function(){
    // --------------------------已确认薪资------------------
    //第二次付款
    this.confirmedSecond= function(argvs){
        var options = {
            method : 'PATCH',
            timeout : 3000,
            uri : config()['rurl'] + `/confirmed/v1/second/${argvs.id}`,

            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //第一次付款
    this.confirmedFirst= function(argvs){
        var options = {
            method : 'PATCH',
            timeout : 3000,
            uri : config()['rurl'] + `/confirmed/v1/first/${argvs.id}`,

            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //列表分页查询
    this.confirmedList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/confirmed/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    }; 
    //-------------------------------发票管理业务接口-------------------------------
    //查询总记录数
    this.invoicesubmitCount= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/invoicesubmit/v1/count',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //新增上交发票
    this.invoicesubmitAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/invoicesubmit/v1/add',
            form : argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //删除上交发票
    this.invoicesubmitDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/invoicesubmit/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };

        return request(options);
    };
    //列表分页查询
    this.invoicesubmitList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/invoicesubmit/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    }; 
    //编辑上交发票
    this.invoicesubmitEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/invoicesubmit/v1/edit',
            form : argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //根据id查询上交发票
    this.invoicesubmitFind= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/invoicesubmit/v1/find/${argvs.id}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //-------------------------已付薪资-------------------------
    //第二次收款确认
    this.payedSecond= function(argvs){
        var options = {
            method : 'PATCH',
            timeout : 3000,
            uri : config()['rurl'] + `/payed/v1/second/${argvs.id}`,

            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //第一次收款确认
    this.payedFirst= function(argvs){
        var options = {
            method : 'PATCH',
            timeout : 3000,
            uri : config()['rurl'] + `/payed/v1/first/${argvs.id}`,

            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //列表分页查询
    this.payedList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/payed/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //----------------------------薪资核算确认----------------------------
    //删除薪资核算确认
    this.salaryconfirmDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/salaryconfirm/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };

        return request(options);
    };
    //查询总记录数
    this.countSalaryconfirm= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/salaryconfirm/v1/count',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //地区列表查询
    this.salaryconfirmAreas= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/salaryconfirm/v1/areas',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //新增薪资核算确认
    this.salaryconfirmAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/salaryconfirm/v1/add',
            form : argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //编辑薪资核算确认
    this.salaryconfirmEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/salaryconfirm/v1/edit',
            form : argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //列表分页查询
    this.salaryconfirmList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/salaryconfirm/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //根据id查询薪资核算确认
    this.salaryconfirmFind= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/salaryconfirm/v1/find/${argvs.id}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };


    //根据部门查询薪资核算确认
    this.salaryconfirmDepartments= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/salaryconfirm/v1/departments',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //根据职位查询薪资核算确认
    this.salaryconfirPositions= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/salaryconfirm/v1/positions',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //根据用户查询薪资核算确认
    this.salaryconfirmUsers= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/salaryconfirm/v1/users',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //导入
    this.salaryconfirmImport= function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/salaryconfirm/v1/import',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //导出
    this.salaryconfirmExport= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/salaryconfirm/v1/export',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //----------------------------------------汇总分析----------------------------------------
    //部门列表查询
    this.departmentList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/condition/v1/departments',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //部门汇总
    this.departmentSummary= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/department/v1/collect'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //地区列表查询
    this.areasList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/condition/v1/areas',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //部门分析
    this.departmentAnalyze= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/department/v1/analyze'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //个人汇总
    this.oneSummary= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/user/v1/collect'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //地区分析
    this.areasAnalyze= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/area/v1/analyze'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //个人分析
    this.oneAnalyze= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/user/v1/analyze'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //用户列表查询
    this.userList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/condition/v1/users',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //地区汇总
    this.areasSummary= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/area/v1/collect'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //---------------------------------------待确认薪资---------------------------------------
    //确认薪资
    this.waitconfirmConfirm= function(argvs){
        var options = {
            method : 'PATCH',
            timeout : 3000,
            uri : config()['rurl'] + `/waitconfirm/v1/confirm/${argvs.id}`,
            
            headers : {
                userToken : argvs.token
            }
        };
        console.log(argvs)
        return request(options);
    };
    //列表分页查询
    this.waitconfirmList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/waitconfirm/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };

    return this;
};