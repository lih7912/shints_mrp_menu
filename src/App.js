/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { useParams } from "react-router-dom";
import { TabView, TabPanel } from "primereact/tabview";
import { Button } from "primereact/button";
import { Tree } from 'primereact/tree';
import { Dialog } from "primereact/dialog";
import { Password } from "primereact/password";
import { Toast } from 'primereact/toast';
import { Tooltip } from 'primereact/tooltip';

import Swal from 'sweetalert2';
import { blindMenu } from './blindMenu';
import { getMrpWorkingStatus } from './getMrpWorkingStatus';
import { changePassword, getPassword } from './changePassword';``
import apolloOption from './assets/env_graphql';

const menu1 = require('./menu').menu1;
const menu3 = require('./menu').menu3;

import $ from 'jquery';
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import './assets/layout/layout.scss';
import './App.scss';

let userInfoForAuth = {};
let screenScale = 1.0;
let screenScaleConst = 1.245;
let origToastOffset = null;

$(async function() {
    blindMenu(window, apolloOption, userInfoForAuth);
    showTestEnvLabel(window);

    // 초기 스케일 설정
    /*
    adjustScale();
    resizeIframe();
    $('iframe').attr('scrolling', 'no');
    */

    /*
    // 창 크기 변경 시 스케일 조정 및 토스트 위치 조정
    $(window).resize(() => {
        adjustScale();
        resizeIframe();
    });

    // Toast 위치 보정
    adjustToastPosition(screenScale);

    // 툴팁이 나타날 때 위치 조정
    $(document).on('mouseenter', '[id^="tab_"]', function () {
        setTimeout(adjustTooltipPosition, 10); // 툴팁이 나타난 후 위치 조정
    });
    */
    $('#userInfoWrapper').on('click', function () {
        $('body').attr('scrolling', 'no');
        $('body').css('overflow', 'hidden');
        $('iframe').attr('scrolling', 'yes');
        $('iframe').attr('overflow-y', 'auto');
        $('iframe').attr('padding-right', '20px');
        adjustScale();
        resizeIframe();
    });
});

function resizeIframe() {
    let windowHeight = $(window).height();
    let remInPx = parseFloat($("html").css("font-size")); // 1rem을 px 단위로 변환
    let newHeight = windowHeight - remInPx - 50; // 최종 높이 계산

    $("iframe").css("height", newHeight + "px");
}

function adjustScale() {
    const width = $(window).width();
    screenScale = screenScaleConst * width / 1920;

    /*
    if (screenScale > 1.45)
        screenScale = 1.45;
    */

    //if (screenScale < 0.85)
        //screenScale = 0.85;

    // `transform: scale` 적용
    console.log(screenScale);
    $("body").css("transform", `scale(${screenScale})`);
    $("body").css("transform-origin", "top left"); // transform 기준점 설정
}
    
// 메시지를 수신하는 이벤트 리스너
window.addEventListener('message', function(event) {
    // 보낸 iframe의 출처(origin)을 확인
    if (event.origin === `https://${window.location.hostname}:3201`) {
        if (event.data === 'focusParent') {
            window.focus(); // 부모 프레임에 포커스
            console.log('Parent frame focused!');
            $('.p-tabmenu').fadeOut(200).fadeIn(200);
        }
  
        if (event.data === 'WorkingMrp') {
            console.log('Working MrpEVENT 수신');
            getMrpWorkingStatus(window, apolloOption, userInfoForAuth);
        }
    }
});
  
function showTestEnvLabel(window) {
    if (!window.location.host.includes('erp.shints.com')) {
        $('.testEnvLabel').css('display','block');
    }
}
  
const App = () => {
    const [tabs, setTabs] = useState([]);
    const [userInfo, setUserInfo] = useState({});
    const [menuInfo, setMenuInfo] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const toast = useRef(null); 

    const BASE_URL = `https://${window.location.hostname}:3201/#/`;

    function getCookie(name) {
        const cookies = document.cookie.split("; ");
        
        for (let cookie of cookies) {
            const [key, value] = cookie.split("=");
            if (key === name) {
                return decodeURIComponent(value); // 쿠키 값이 인코딩된 경우 해제
            }
        }
        return null; // 해당 쿠키가 없으면 null 반환
    }

    function deleteCookie(name) {
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

    useEffect(() => {
        // 쿠키에서 사용자 정보 가져오기
        let userId = new URLSearchParams(location.hash.split('?')[1]).get('userId');
        
        if (userId) {
            window.sessionStorage.setItem('SESSION_USER_ID', userId);
        } else {
            userId = window.sessionStorage.getItem('SESSION_USER_ID');
        }

        let userInfoFromLogin = JSON.parse(getCookie(`AF_ERP_USERINFO_${userId}`));

        if (userInfoFromLogin) {
            userInfoForAuth.userId = userInfoFromLogin.USER_ID;
            userInfoForAuth.userName = userInfoFromLogin.USER_NAME;
            setUserInfo(userInfoFromLogin);
            history.pushState({}, "", "/#/");
        } else {
            window.location.href = `${window.location.protocol}//${window.location.hostname}:${apolloOption.client_port}/#/login`;
            return;
        }

        const transformMenuUrls = (menu) => {
            return menu.map(item => ({
                ...item,
                url: item.url ? `${BASE_URL}${item.url}?label=${encodeURI(item.label)}` : '',
                children: item.children ? transformMenuUrls(item.children) : []
            }));
        };
    
        const updatedMenu1 = transformMenuUrls(menu1);
        setMenuInfo(updatedMenu1);

        window.addEventListener("message", (e) => {
            if (e.data.func && e.data.func === 'call_url') {
                console.log(e.data.message);
                openTab(e.data.message);
            }
        }, false);
         
        $('input[type="text"]').on('focus', function () {
            $(this).select(); // 포커스된 input 요소의 내용을 전체 선택
        });
    }, []);

    // 메뉴 클릭 시 탭 추가
    const openTab = (item) => {
        if (item.url1) {
            item.url = `${BASE_URL}${item.url1}?label=${encodeURI(item.label)}`;
        }
        if (!item.url) return;

        setTabs((prevTabs) => {
            const existingTabIndex = prevTabs.findIndex(tab => tab.label === item.label);
            if (existingTabIndex === -1) {
                if (prevTabs.length >= 10) {
                    toast.current.show({
                        severity: 'error',
                        summary: 'Error',
                        detail: '탭은 10개까지 열 수 있습니다. 열린 탭을 닫고 새로 열어주세요. (Alt+X)',
                        life: 5000,
                    });
                    return prevTabs;
                }
                item.idx = `${item.label}-${new Date().getTime()}`;
                item.key = `${item.idx}-key-${new Date().getTime()}`; // 강제 리렌더링을 위한 key 추가
                const newTabs = [...prevTabs, item];
                setActiveIndex(newTabs.length - 1);
                return newTabs;
            } else {
                // 기존 탭이 있으면 URL을 업데이트하면서 key도 변경하여 리렌더링 유도
                const updatedTabs = prevTabs.map((tab, index) => {
                    if (index === existingTabIndex) {
                        return { ...tab, url: item.url, key: `${tab.idx}-key-${new Date().getTime()}` };
                    }
                    return tab;
                });

                setActiveIndex(existingTabIndex);
                return updatedTabs;
            }
        });
    };

    

    // 탭 닫기 (iframe도 삭제)
    const removeTab = (index) => {
        // 현재 탭 목록에서 해당 인덱스의 탭 제거
        const newTabs = tabs.filter((_, i) => i !== index);
        setTabs(newTabs);

        if (index === 0 && newTabs.length > 0) {
            // 첫번째 탭이 닫혔을 때: 남은 탭의 첫번째(원래 두번째 탭)를 활성화
            setActiveIndex(0);
        } else if (index < activeIndex) {
            // 닫은 탭이 현재 활성 탭보다 앞쪽에 있다면, 인덱스가 한 칸씩 당겨지므로 activeIndex 조정
            setActiveIndex(activeIndex - 1);
        } else if (index === activeIndex) {
            // 닫은 탭이 현재 활성 탭일 경우: 남은 탭이 있다면 동일 인덱스 유지, 없으면 마지막 탭 활성화
            if (newTabs.length > activeIndex) {
                setActiveIndex(activeIndex);
            } else {
                setActiveIndex(newTabs.length - 1);
            }
        }
    };

    const [expandedKeys, setExpandedKeys] = useState({});

    const onToggleNode = (node) => {
        openTab(node);
        setExpandedKeys((prevExpandedKeys) => {
            const newExpandedKeys = { ...prevExpandedKeys };
            if (newExpandedKeys[node.key]) {
                delete newExpandedKeys[node.key]; // 이미 확장되어 있다면 닫기
            } else {
                newExpandedKeys[node.key] = true; // 닫혀 있다면 열기
            }
            return newExpandedKeys;
        });
    };

    const nodeTemplate = (node, options) => {
        return (
            <div 
                className="tree-node-custom p-treenode-label" 
                onClick={() => onToggleNode(node)} 
                style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            >
                <span style={{ marginLeft: "2px" }}>{node.label}</span>
            </div>
        );
    };

    /* 패스워드 변경 */
    const [passwordModalVisible, setPasswordModalVisible] = useState(false);
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const validatePassword = (password) => {
        const lengthCheck = password.length >= 8;
        const complexityCheck = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(password);
        const hasNoSequential = !/(1111|0123|1234|2345|3456|4567|5678|6789|7890|abcd|bcde|cdef|defg|efgh|fghi|ghij|hijk|ijkl|jklm|klmn|lmno|mnop|nopq|opqr|pqrs|qrst|rstu|stuv|tuvw|uvwx|vwxy|wxyz|aaaa|bbbb|cccc|dddd|eeee|ffff|gggg|hhhh|iiii|jjjj|kkkk|llll|mmmm|nnnn|oooo|pppp|qqqq|rrrr|ssss|tttt|uuuu|vvvv|wwww|xxxx|yyyy|zzzz)/i.test(password);

        return lengthCheck && complexityCheck && hasNoSequential;
    };

    const handleSave = async () => {
        let result = (await getPassword(window, apolloOption, userInfoForAuth.userId))[0].passwd;

        console.log(result);

        if (currentPassword !== result) {
            Swal.fire({
                html: "Wrong current password!",
                icon: "error",
            });
            return;
        }

        if (newPassword !== confirmPassword) {
            Swal.fire({
                title: "Confirm new password",
                html: "Passwords do not match!",
            });
            return;
        }

        if (!validatePassword(newPassword)) {
            Swal.fire({
                title: "Confirm new password",
                html: "Password must be at least 8 characters, include letters, numbers, and special characters, and must not contain 4 consecutive characters.<br><br>비밀번호는 최소 8자 이상이어야 하며, 영문자, 숫자, 특수문자를 포함해야 합니다. 또한, 4자리 이상의 연속된 문자를 포함할 수 없습니다.",
                icon: "error",
            });
            return;
        }

        await changePassword(window, apolloOption, userInfoForAuth.userId, newPassword, currentPassword);

        Swal.fire({
            html: "Password changed successfully!",
            icon: "success",
        });
        setPasswordModalVisible(false);
    };
        
    const handleCancel = () => {
        setPasswordModalVisible(false);
    };
    /***************************************/
    

    return (
        <div className="app-container" style={{ display: "flex", height: "100vh" }}>
            <Toast ref={toast} />
            <div className="sidebar" style={{ width: "200px", minWidth: "200px", background: "#f8f9fa", padding: "10px", borderRight: "1px solid #ddd" }}>
                <div style={{ marginTop: '0rem', width: '100%', height: '4rem', marginBottom: '0rem' }}>
                    <div id="userInfoWrapper" style={{ float: 'left', marginTop: '0rem', width: '7.5rem', height: '4rem', marginLeft: '15px', cursor: 'pointer' }}>
                        <span style={{ width: '9rem' }}>
                            <p class="p-text-secondary" style={{ width: '9rem', display: 'inline-block' }}>{userInfo.USER_ID}</p>
                        </span>
                        <span style={{ width: '9rem' }}>
                            <p class="p-text-secondary" style={{ width: '9rem', display: 'inline-block' }}>{userInfo.USER_NAME}</p>
                        </span>
                         
                    </div>
                    <div style={{ float: 'left', marginLeft: '24px', marginTop: '0.6rem', width: '2rem', height: '2rem' }}>
                        <i className="custom-target-icon pi pi-unlock p-text-secondary"
                            onClick={() => { setPasswordModalVisible(true); setCurrentPassword(''); setNewPassword(''); setConfirmPassword(''); }}
                            style={{ fontSize: '1.5rem', cursor: "pointer" }}
                            title="Change password">
                        </i>
                    </div>
                    {/*
                    <div style={{ float: 'left', marginTop: '0.6rem', width: '2rem', height: '2rem' }}>
                        <i className="custom-target-icon pi pi-times p-text-secondary"
                            onClick={() => { setTabs([]); }}
                            style={{ fontSize: '1.5rem', cursor: "pointer" }}
                            title="Close all tabs">
                        </i>
                    </div>
                    */}
                    <div style={{ float: 'left', marginTop: '0.6rem', width: '3rem', height: '2rem' }}>
                        <i className="custom-target-icon pi pi-refresh p-text-secondary"
                            data-pr-position="right"
                            data-pr-at="right+5 top"
                            data-pr-my="left center-2"
                            style={{ fontSize: '1.5rem', cursor: "pointer" }}
                            onClick={() => {
                                setTabs((prevTabs) => 
                                    prevTabs.map((tab, index) => {
                                        if (index === activeIndex) {
                                            return { 
                                                ...tab, 
                                                key: `${tab.idx}-key-${new Date().getTime()}` // key 변경하여 iframe 리프레시
                                            };
                                        }
                                        return tab;
                                    })
                                );
                            }}
                            title="Reload current tab">    
                        </i>
                    </div>
                </div>
                <div style={{ marginBottom: '1.5rem', width: '100%', padding: '0', marginLeft: '7px' }}>
                    <button style={{ marginBottom: '0.5rem', width: '90%', height: '20px' }} onClick={() => { window.sessionStorage.removeItem('AF_ERP_USERINFO'); deleteCookie(`AF_ERP_USERINFO_${userInfoForAuth.userId}`); window.location.href = `${BASE_URL}login`; }}>Log out</button>
                    <button style={{ marginBottom: '0.5rem', width: '90%', height: '20px' }} onClick={() => { window.open('https://shints.notion.site/shints-erp-manual?v=abd027845fc846f49081807f183af5ba', 'blank'); }}>Manual</button>
                    <button id='btnAuth' style={{ marginBottom: '0.5rem', width: '90%', height: '20px' }} onClick={() => { window.open(`${window.location.protocol}//${window.location.hostname}:3201/authority.html`, 'blank'); }}>권한 설정</button>
                    <button id='btnTrLog' style={{ marginBottom: '0.5rem', width: '90%', height: '20px' }} onClick={() => { window.open(`${window.location.protocol}//${window.location.hostname}:3201/tr_log.html`, 'blank'); }}>Transaction LOG</button>
                    <div className="testEnvLabel blink" style={{ marginBottom: '1rem', width: '90%', height: '20px', backgroundColor: 'purple', borderRadius: '3px', color: 'white', fontWeight: '700', textAlign: 'center', alignContent:'center' }}>TEST 환경</div>
                    <div className="workingMrpIcon">
                        <dotlottie-player 
                            src="https://lottie.host/8bad9105-8a45-4862-a1bc-ff9efaa5a99b/hiboDpMUKL.lottie" 
                            background="transparent" 
                            speed="1" 
                            style={{ width: '20px', height: '20px' }} 
                            direction="1" 
                            playMode="normal" 
                            loop autoplay>
                        </dotlottie-player>
                        <span>WORKING MRPLIST…</span>
                    </div>
                </div>
                <Tree
                    value={menuInfo}
                    style={{ width: "100%" }}
                    expandedKeys={expandedKeys}
                    onToggle={(e) => setExpandedKeys(e.value)}
                    nodeTemplate={nodeTemplate}
                />
            </div>

            {/* 탭 UI */}
            <div className="tab-container" style={{ flex: 1, padding: "10px" }}>
                    <Tooltip target=".tab-header" position="bottom" />
                    <TabView 
                        activeIndex={activeIndex} 
                        onTabChange={(e) => setActiveIndex(e.index)}
                        renderActiveOnly={false}  // 모든 탭 패널을 렌더링하여 상태 유지
                    >
                        {tabs.map((tab, index) => (
                            <TabPanel 
                                key={tab.idx}
                                header={
                                    <span 
                                        className="tab-header"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            width: '132px',
                                            height: '15px',
                                            overflow: 'hidden',
                                            padding: '0 5px',
                                        }}>
                                        <span style={{ 
                                            width: '110px', 
                                            overflow: 'hidden', 
                                            height: '25px',
                                            paddingTop: '9px'
                                        }}
                                        title={tab.url.split('#/')[1].split('?')[0]}
                                        >{tab.label}</span>
                                        <Button
                                            icon="pi pi-times"
                                            className="p-button-text p-button-sm p-ml-2"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                removeTab(index);
                                            }}
                                            style={{ textAlign: 'right', marginRight: "0px", color: "red" }}
                                            title='CLOSE TAB'
                                            accessKey='x'
                                        />
                                    </span>
                                }
                            >
                                <iframe
                                    key={tab.key}
                                    src={tab.url}
                                    width="100%"
                                    style={{ border: "none", marginTop:'-5px' }}
                                />
                            </TabPanel>
                        ))}
                    </TabView>
                    <div id="mainFooter" />
                        
            </div>

            <Dialog
                header="Change Password"
                visible={passwordModalVisible}
                style={{ width: "400px" }}
                modal
                onHide={() => setPasswordModalVisible(false)}
                footer={
                    <div>
                        <Button label="Cancel" icon="pi pi-times" onClick={handleCancel} />
                        <Button label="Save" icon="pi pi-check" onClick={handleSave} />
                    </div>
                }
            >
                <div className="p-fluid">
                    <div className="field">
                        <label htmlFor="currentPassword">Current Password</label>
                        <Password
                            id="currentPassword"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            toggleMask
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="newPassword">New Password</label>
                        <Password
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            toggleMask
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="confirmPassword">Confirm New Password</label>
                        <Password
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            toggleMask
                            feedback={false}
                        />
                    </div>
                    <p style={{ color: '#BF0000' }}>
                        Password must be at least 8 characters, include letters, numbers, and special characters, and must not contain 4 consecutive characters.
                        <br/><br/>
                        비밀번호는 최소 8자 이상이어야 하며, 영문자, 숫자, 특수문자를 포함해야 합니다. 또한, 4자리 이상의 연속된 문자를 포함할 수 없습니다.
                    </p>
                </div>
            </Dialog>
        </div>
    );
};

export default App;
