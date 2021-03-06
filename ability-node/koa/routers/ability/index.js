var Router = require('koa-router');
var path = require('path');
var sendfile = require('koa-sendfile');
var server = require(path.resolve('koa/servers/' + path.basename(path.resolve(__filename,'../'))+'/index.js'));
var config = require(path.resolve('plugins/read-config.js'));
var fetch = require('node-fetch');//url转发
module.exports = function(){
    var router = new Router();
     //列表
    router.get('/ability/abilitycompanycap/listAbilityCompanyCap', function*(){
        var $self = this;
       var page = $self.request.query;
        page.token = this.cookies.get('token');
        yield (server().abilitybaseinfoList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/abilitycompanycap/count', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().countBaseInfos(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/addCompanyAbility/add', function*(){
            var $self = this;
            var addData = this.request.body;
            addData.token = this.cookies.get('token');
                yield (server().companyAbilityAdd(addData)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    $self.set('Content-Type','application/json;charset=utf-8');
                    $self.body=error.error;
                    console.error(error.error);
                }));
        //删除
        }).post('/ability/deleteCompanyAbility/delete', function*(){
        var $self = this;
        var delData = this.request.body;
        delData.token = this.cookies.get('token');
        yield (server().companyAbilityDelete(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
        //编辑
    }).post('/ability/editCompanyAbility/edit', function*(){
        var editData = this.request.body;
        editData.token = this.cookies.get('token');
        var $self = this;
        yield (server().companyAbilityEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
        //编辑id
    }).post('/ability/getOneById', function*(){
        var $self = this;
        var EditId = this.request.body;
        EditId.token = $self.cookies.get('token');
        yield (server().companyEditById(EditId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/searchCompanyAbility', function*(){
        var $self = this;
        var searchName = this.request.body;
        searchName.token = $self.cookies.get('token');
        yield (server().companySeachByname(searchName)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/searchPersonAbility', function*(){
        var searchName = this.request.body;
        var $self = this;
        searchName.token = $self.cookies.get('token');
        yield (server().personSeachByname(searchName)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/ability/searchCooperationAbility', function*(){
        var $self = this;
        var searchName = this.request.query;
        searchName.token = $self.cookies.get('token');
        yield (server().cooperationSeachByName(searchName)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    })
        .get('/ability/abilitySelfCap/listAbilitySelfCap', function*(){
        var $self = this;
        var page2 = this.request.query;
            page2.token = $self.cookies.get('token');
        yield (server().abilitySelfCapList(page2)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/abilitySelfCap/count', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().countSelfCapInfo(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/countSelfCap2/count', function*(){
        var $self = this;
        var countData = this.request.query;
        countData.token = $self.cookies.get('token');
        yield (server().countSelfCap2Info(countData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/countBaseInfo2/count', function*(){
        var $self = this;
        var countData = this.request.query;
        countData.token = $self.cookies.get('token');
        yield (server().countBaseInfo2Info(countData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/countCooperation2/count', function*(){
        var $self = this;
        var countData = this.request.query;
        countData.token = $self.cookies.get('token');
        yield (server().countCooperation2Info(countData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/deleteAbilitySelf/delete', function*(){
        var $self = this;
        var delData = this.request.body;
        delData.token = this.cookies.get('token');
        yield (server().deleteAbilitySelfDelete(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
        //编辑
    }).post('/ability/addSelfCapAbility/add', function*(){
        var addData = this.request.body;
        addData.token = this.cookies.get('token');
       var $self = this;
        yield (server().selfAbilityAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/editSelfCapAbility/edit', function*(){
        var $self = this;
        var editData = this.request.body;
        editData.token = this.cookies.get('token');
        yield (server().personAbilityEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
        //编辑id
    }).post('/ability/getTwoById', function*(){
        var $self = this;
        var EditId = this.request.body;
        EditId.token = this.cookies.get('token');
        yield (server().personEditById(EditId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/editEditSocial/editsocial', function*(){
        var editData = this.request.body;
        editData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().SocialEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
        //编辑id
    }).get('/ability/listAbilityCooperation/listCoop', function*(){
        var $self = this;
        var page = this.request.query;
        page.userToken = this.cookies.get('token');
        yield (server().abilityCooperationList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/countCooperation/count', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().CooperationInfo(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
        //添加公司能力
    }).post('/ability/deleteCooperationSelf/delete', function*(){
        var delData = this.request.body;
        delData.token = this.cookies.get('token');
        var $self = this;
        yield (server().CooperationSelfDelete(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/addCooperationAbility/add', function*(){
        var addData = this.request.body;
        addData.token = this.cookies.get('token');
        var $self = this;
        yield (server().cooperationAbilityAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
        //删除
    }).post('/ability/editCooperationAbility/edit', function*(){
        var editData = this.request.body;
        editData.token = this.cookies.get('token');
        var $self = this;
        yield (server().cooperationAbilityEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/getThreeById', function*(){
        var $self = this;
        var EditId = this.request.body;
        EditId.token = this.cookies.get('token');
        yield (server().threeEditById(EditId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/editRelation/editRel', function*(){
        var editData = this.request.body;
        editData.token = this.cookies.get('token');
        var $self = this;
        yield (server().RelationEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
        //汇总和邮件发送
    }).get('/ability/listAbilityEmail/listEmail', function*(){
        var $self = this;
        var page = this.request.query;
        page.token = this.cookies.get('token');
        yield (server().collectemaillist(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/countEmail/count', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().emailCountInfo(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/congealEmail/congeal', function*(){//冻结
        var $self = this;
        var congealData = this.request.body;
        congealData.token = this.cookies.get('token');
        yield (server().EmailCongeal(congealData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/thawEmail/thaw', function*(){//解冻
        var thawData = this.request.body;
        thawData.token = this.cookies.get('token');
        var $self = this;
        yield (server().EmailThaw(thawData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/deleteEmail/delete', function*(){ //删除
        var delData = this.request.body;
        delData.token = this.cookies.get('token');
        var $self = this;
        yield (server().emailDelete(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/addEmail/add', function*(){ //添加邮件
        var addData = this.request.body;
        addData.token = this.cookies.get('token');
        var $self = this;
        yield (server().emailAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/ability/listNameType/type', function*(){
        var getTyoeData = this.request.query;
        var $self = this;
        getTyoeData.token = this.cookies.get('token');
        yield (server().typelistName(getTyoeData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/editEmail/edit', function*(){
        var editData = this.request.body;
        editData.token = this.cookies.get('token');
        var $self = this;
        yield (server().emailEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/getFourById', function*(){
        var editId = this.request.body;
        var $self = this;
        editId.token = this.cookies.get('token');
        yield (server().fourEditById(editId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/ectSummaryCompany', function*(){ //汇总
        var getCollect = this.request.body;
        var $self = this;
        getCollect.token = this.cookies.get('token');
        yield (server().getCollectCompany(getCollect)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/ability/getCompanyNames', function*(){   //数组
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().getCompanyName(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/ectSummaryPerson', function*(){
        var getCollect = this.request.body;
        var $self = this;
        getCollect.token = this.cookies.get('token');
        yield (server().getCollectPerson(getCollect)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/ability/getPersonNames', function*(){   //数组
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().getPersonName(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/ectSummaryCooperation', function*(){
        var getCollect = this.request.body;
        var $self = this;
        getCollect.token = this.cookies.get('token');
        yield (server().getCollectCooperation(getCollect)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/ability/getCooperationNames', function*(){   //数组
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().getCooperationName(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/addSocialSelf/add', function*(){
        var socialData = this.request.body;
        socialData.token = this.cookies.get('token');
        var $self = this;
        yield (server().socialSelfAdd(socialData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/ability/listSocialSelf/socialList', function*(){
        var $self = this;
        var listData = this.request.query;
        listData.token = this.cookies.get('token');
        yield (server().socialSelfList(listData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/countSocial/count', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().socialCount(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/deleteSocialSelf/delete', function*(){
        var delData = this.request.body;
        delData.token = this.cookies.get('token');
        var $self = this;
        yield (server().socialSelfDelete(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/editSocialSelf/socialEdit', function*(){
        var editSocial = this.request.body;
        editSocial.token = this.cookies.get('token');
        var $self = this;
        yield (server().socialSelfEdit(editSocial)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/ability/getFiveById', function*(){
        var $self = this;
        var EditFiveId = $self.request.query;
        EditFiveId.token = this.cookies.get('token');
        yield (server().socialEditById(EditFiveId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/user/logout', function*(next){
        var url = this.request.query;
        this.cookies.set("absUrl",url.absurl);
        this.body = {
            code:0,
            msg:"重定向"
        };
    }).get('/listSetting', function*(){
        var $self = this;
        var setting = this.request.query;
        setting.token = $self.cookies.get('token');
        yield (server().listSetting(setting)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/countSetting', function*(){
        var $self = this;
        yield (server().countSetting()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/getpermit', function*(){
        var $self = this;
        var getId = $self.request.query;
        yield (server().getpermit(getId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/getListpermit', function*(){
        var $self = this;
        var listPermit = $self.request.query;
        yield (server().getListpermit(listPermit)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/editSetting', function*(){
        var $self = this;
        var editSet = $self.request.body;
        editSet.token = $self.cookies.get("token");
        yield (server().editSetting(editSet)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    })
    return router;
};
