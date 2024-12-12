//import $ from 'jquery';
/*
async function ajaxToRouter(method, url, data) {
    return new Promise( resolve => {
        $.ajax({
            type : method,
            url : url,
            headers : {
                "Content-Type" : "application/json",
            },
            dataType : 'text',
            data : JSON.stringify(data),
            success : function(result) {
                resolve(JSON.parse(result));
            },
            error : function(request, status, error) {
                console.log(error)
            }
        })
    });
}
  
async function getAuthInfo(window, apolloOption, userId) {
    return await ajaxToRouter(
    'post',
    `${window.location.protocol}//${window.location.hostname}:${apolloOption.server_port}/restapi/mssql_query`, 
    {
        dbQuery: `select * from kcd_user where user_id='${userId}'`
    }
);
}

async function blindMenu(window, apolloOption, userId) {
    let authInfo = await getAuthInfo(window, apolloOption, userId);
    console.log(authInfo);

    let blindList = ['Purchase Manager', 'STSIN List'];

    let menuList = $('.p-treenode-label');
    menuList.each( (index, menu) => {
        console.log(menu);
        //$(menu).closest('li').remove();
    });
}
export { blindMenu }
*/