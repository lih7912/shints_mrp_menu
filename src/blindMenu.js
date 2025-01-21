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
    li.children().css('display','none');
    li.append(`<span class="menu_blind disabled">${menuName}</span>`)
}

function setShow(menu) {
    let li = $(menu).closest('li');
    li.children().css('display','block');
    li.find('.menu_blind').remove();

}

async function blindMenu(window, apolloOption, userInfoForAuth) {
    let userId = userInfoForAuth.userId;

    if (userId === 'lih7912' || userId === 'chibumy' || userId === 'lkj83' || userId === 'haein' || userId === 'bell1' || userId === 'mila' || userId === 'won21kr' || userId.indexOf('test') >= 0) return;

    let authInfoList = await getAuthInfo(window, apolloOption, userId);
    userInfoForAuth.authMenuList = authInfoList.afAuthPart;
    userInfoForAuth.authMenuListUser = authInfoList.afAuthUser;

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

                    for (let blindMenu of userInfoForAuth.authMenuListUser) {
                        console.log(blindMenu);
                        if (blindMenu.MENU_NAME == menuName && blindMenu.AUTH_CD > 0) {
                            setShow(menu);
                        }
                    }
                }
            });
        }, 100);
    })
}

export { blindMenu }
