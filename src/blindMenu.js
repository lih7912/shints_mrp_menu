/* eslint-disable */
import $ from 'jquery';

async function ajaxToRouter(method, url, data) {
    return new Promise( resolve => {
        $.ajax({
            type : method,
            url : url,
            headers : {
                "Content-Type" : "application/json",
            },
            Accept: "application/json",
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
        `${window.location.protocol}//${window.location.hostname}:${apolloOption.server_port}/restapi/auth`, 
        {
            userId: userId,
            authCd: 0,
            menuName: '',
        }
    );
}

// 'Capa Record','Capa List' 강제로 대표아이디에게 열어주기
function forceOpenCapa(userId, menuName) {
    let ret = false;

    if (userId != 'kr' && userId != 'mt' && userId != 'sales1' && userId != 'sales2' && userId != 'sales3' && userId != 'sales4' && userId != 'sales5') {
        ret = false;
    } else {
        if (menuName === 'Capa Record' || menuName === 'Capa List') {
            ret = true;
        }
    }

    return ret;
}

// 무조건 강제열기
function forceOpen(userId, menuName) {
    let ret = false;

    if (userId === 'trade1' || userId === 'jim1') {
        if (menuName.includes('Debit Note'))
            ret = true;
    }

    console.log(userId, menuName, ret);

    return ret;
}

function setBlind(menu, menuName) {
    let li = $(menu).closest('li');
    li.children().remove();
    li.append(`<span class="disabled">${menuName}</span>`)
}

async function blindMenu(window, apolloOption, userInfoForAuth) {
    let userId = userInfoForAuth.userId;

    if (userId === 'lih7912' || userId === 'chibumy' || userId === 'lkj83' || userId === 'haein' || userId === 'bell1' || userId.indexOf('test') >= 0) return;
    
    userInfoForAuth.authMenuList = await getAuthInfo(window, apolloOption, userId);

    console.log(userInfoForAuth.authMenuList);

    $('.p-tree-toggler').on('click', () => {
        setTimeout( () => {
            let menuList = $('.p-treenode-label');
            menuList.each( (index, menu) => {
                let menuName = $(menu).text();

                if (menuName !== 'INFO' && menuName !== 'ORDER' && menuName !== 'MRP' && menuName !== 'PURCHASE' && menuName !== 'EXPORT/IMPORT' && menuName !== 'FACTORY IN-OUT' && menuName !== 'COST' && menuName !== 'RECEIVABLES') {

                    for (let blindMenu of userInfoForAuth.authMenuList) {
                        if (blindMenu.MENU_NAME === menuName && !forceOpenCapa(userId, menuName) && !forceOpen(userId, menuName)) {
                            setBlind(menu, menuName);
                        }
                    }
                }
            });
        }, 100);
    })
}

export { blindMenu }
