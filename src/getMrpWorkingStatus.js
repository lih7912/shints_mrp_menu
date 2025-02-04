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
  
async function getStatus(window, apolloOption, userId) {
    return await ajaxToRouter(
        'post',
        `${window.location.protocol}//${window.location.hostname}:${apolloOption.server_port}/restapi/mrp/working_status`, 
        {
            userId: userId,
        }
    );
}

let intervalId = new Array();

async function getMrpWorkingStatus(window, apolloOption, userInfoForAuth) {
    let userId = userInfoForAuth.userId;

    $('.workingMrpIcon').css('display','flex');

    intervalId.push(setInterval(async () => {
        try {
          const result = await getStatus(window, apolloOption, userId);
          if (result == false) {
            intervalId.forEach( interval => clearInterval(interval) ) // Interval 중지
            $('.workingMrpIcon').css('display','none');
          }
        } catch (error) {
          console.error("Error fetching status:", error);
        }
    }, 10000)); // 10초마다 실행
   return;
}

export { getMrpWorkingStatus }
