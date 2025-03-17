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
``
let userInfoForAuth = {};
let screenScale = 1.0;
let screenScaleCons = 1.245;
let origToastOffset = null;

$(async function() {
    blindMenu(window, apolloOption, userInfoForAuth);
    showTestEnvLabel(window);
    showMenuCodeToolTip(window);
  
    $('iframe').attr('scrolling', 'no');

    // 초기 스케일 설정
    adjustScale();
    resizeIframe();

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

    const toastContainer = document.body; // body 전체를 감지하거나 특정 부모 요소를 지정
    observer.observe(toastContainer, { childList: true, subtree: true });
});

// **MutationObserver 사용하여 Toast DOM 변화 감지**
const observer = new MutationObserver((mutationsList) => {
    const width = $(window).width();
    const screenScale = screenScaleCons * width / 1920;

    for (let mutation of mutationsList) {
        if (mutation.addedNodes.length) {
            mutation.addedNodes.forEach(node => {
                if ($(node).hasClass('p-toast')) {
                    if (!origToastOffset) {
                        origToastOffset = $('.p-toast').offset();
                    }
                    adjustToastPosition(screenScale);
                }
            });
        }
    }
});

function resizeIframe() {
    let windowHeight = $(window).height();
    let remInPx = parseFloat($("html").css("font-size")); // 1rem을 px 단위로 변환
    let newHeight = windowHeight - remInPx - 50; // 최종 높이 계산

    $("iframe").css("height", newHeight + "px");
}

function adjustScale() {
    const width = $(window).width();
    screenScale = screenScaleCons * width / 1920;

    /*
    if (screenScale > 1.45)
        screenScale = 1.45;
    */

    //if (screenScale < 0.85)
        //screenScale = 0.85;

    // `transform: scale` 적용
    $("body").css("transform", `scale(${screenScale})`);

    // 토스트 위치 보정
    $("body").css("transform-origin", "top left"); // transform 기준점 설정
}

function adjustTooltipPosition() {
    // 현재 body의 transform: scale 값 가져오기
    let bodyScale = $('body').css('transform');
    let scaleFactor = screenScaleCons;
  
    if (bodyScale !== 'none') {
        let values = bodyScale.match(/matrix\(([\d., -]+)\)/);
        if (values) {
            scaleFactor = parseFloat(values[1].split(', ')[0]); // Scale 값 추출
        }
    }
  
    // 툴팁 위치 보정
    $('.menuCodeTooltip').each(function () {
        let $tooltip = $(this);
        let offset = $tooltip.offset(); // 현재 위치 가져오기
        let newLeft = offset.left / scaleFactor;
        let newTop = offset.top / scaleFactor;
  
        $tooltip.css({
            'transform': `scale(${1 / scaleFactor})`,
            'left': (newLeft / scaleFactor) + 'px',
            'top': newTop + 'px'
        });
    });
}
  
function adjustToastPosition(scaleFactor) {
    $('.p-toast').each(function () {
        let $toast = $(this);
        
        // 현재 위치 (좌표)
        let offset = $toast.offset();
        let newLeft = offset.left / scaleFactor;
        let newTop = offset.top / scaleFactor;
  
        $toast.css({
            'transform': `scale(${1 / scaleFactor})`,
            'transform-origin': 'top left',
            'left': newLeft + 'px',
            'top': newTop + 'px'
        });
    });
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
  
function showMenuCodeToolTip(window) {
    if (!window.location.host.includes('erp.shints.com')) {
        // 툴팁 관련 로직이 필요하면 이곳에 추가
    }
}

const App = () => {
    const [tabs, setTabs] = useState([]);
    const [userInfo, setUserInfo] = useState({});
    const [menuInfo, setMenuInfo] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [iframeRefreshKeys, setIframeRefreshKeys] = useState({});
    const [tooltipContent, setTooltipContent] = useState("기본 툴팁 내용");
    const toast = useRef(null); 
    

    const BASE_URL = `https://${window.location.hostname}:3201/#/`;

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.hash.split("?")[1]);
        const userId = urlParams.get("user_id");
        const userName= urlParams.get("user_name");
        userInfoForAuth.userId = userId;
        setUserInfo({ USER_ID: userId, USER_NAME: userName });
       
        if (!userId) {
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
                    if (prevTabs.length >= 10) {
                        toast.current.show({
                            severity: 'error',
                            summary: 'Error',
                            detail: '탭은 10개까지 열 수 있습니다. 열린 탭을 닫고 새로 열어주세요. (Alt+X)',
                            life: 5000,
                        });
                        return prevTabs;
                    }
                }
                item.idx = `${item.label}-${new Date().getTime()}`;
                const newTabs = [...prevTabs, item];
                // 새 탭을 추가한 후 마지막 탭(새로 추가된 탭)을 활성화
                setActiveIndex(newTabs.length - 1);
                return newTabs;
            } else {
                // 이미 있는 탭이면 해당 탭 인덱스를 활성화
                setActiveIndex(existingTabIndex);
                return prevTabs;
            }
        });
    };

    // 🔹 탭 닫기 (iframe도 삭제)
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

    const onCloseClick = (idx) => {
        const tabIndex = tabs.findIndex(tab => tab.idx === idx);
        if (tabIndex !== -1) {
            removeTab(tabIndex);
        }
    }

    const headerTemplate = (item, options) => {
        var tLabel = '';
        if (item.label.length > 13) tLabel = item.label.substring(0, 15);
        else {
            var tSpace = '             ';
            tLabel = item.label + tSpace.substring(0, 14-item.label.length);
        }
        
        //let showTooltip = window.location.host.includes('erp.shints.com') ? 'none' : 'block';
        let showTooltip = 'block'
        let tooltipLabel = window.location.host.includes('erp.shints.com') ? item.label : `${item.label} - ${item.url.split(BASE_URL)[1].split('?')[0]}`;

        return (
            <div className={options.className} 
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '90px',
                    height: '42px',
                    overflow: 'hidden',
                    padding: '0 5px',
                    
                }}
                >
                <Tooltip className="menuCodeTooltip" target={`#tab_${item.idx}`} content={`${tooltipLabel}`} position="bottom" style={{ display: showTooltip }}/>
                <span className={classNames(options.labelClassName)} target={item.target} onClick={options.onClick} id={`tab_${item.idx}`}>{tLabel}</span>
                <span className={classNames(options.iconClassName, 'pi pi-times')} style={{marginLeft: '5px', textAlign:'right'}} onClick={() => onCloseClick(item.idx)} accessKey='x'></span>
            </div>
        );
    }

    /***************************************/

    return (
        <div className="app-container" style={{ display: "flex", height: "100vh" }}>
            <Toast ref={toast} />
            <div className="sidebar" style={{ width: "200px", minWidth: "200px", background: "#f8f9fa", padding: "10px", borderRight: "1px solid #ddd" }}>
                <div style={{ marginTop: '0rem', width: '100%', height: '4rem', marginBottom: '0rem' }}>
                    <div style={{ float: 'left', marginTop: '0rem', width: '7.5rem', height: '4rem', marginLeft: '15px' }}>
                        <span style={{ width: '9rem' }}>
                            <p style={{ width: '9rem', display: 'inline-block', color: 'blue' }}>{userInfo.USER_ID}</p>
                        </span>
                        <span style={{ width: '9rem' }}>
                            <p style={{ width: '9rem', display: 'inline-block', color: 'blue' }}>{userInfo.USER_NAME}</p>
                        </span>
                    </div>
                    <div style={{ float: 'left', marginLeft: '37px', marginTop: '0.6rem', width: '2rem', height: '2rem' }}>
                        <i className="custom-target-icon pi pi-unlock p-text-secondary"
                            onClick={() => { setPasswordModalVisible(true); setCurrentPassword(''); setNewPassword(''); setConfirmPassword(''); }}
                            style={{ fontSize: '1.5rem', cursor: "pointer" }}>
                        </i>
                    </div>
                    <div style={{ float: 'left', marginTop: '0.6rem', width: '3rem', height: '2rem' }}>
                        <i className="custom-target-icon pi pi-refresh p-text-secondary"
                            data-pr-position="right"
                            data-pr-at="right+5 top"
                            data-pr-my="left center-2"
                            style={{ fontSize: '1.5rem', cursor: "pointer" }}
                            onClick={() => {
                                setIframeRefreshKeys(prev => ({
                                    ...prev,
                                    [activeIndex]: (prev[activeIndex] || 0) + 1
                                }));
                            }}>    
                        </i>
                    </div>
                </div>
                <div style={{ marginBottom: '1.5rem', width: '100%', padding: '0', marginLeft: '7px' }}>
                    <button style={{ marginBottom: '0.5rem', width: '90%', height: '20px' }} onClick={() => { window.sessionStorage.removeItem('AF_ERP_USERINFO'); window.location.href = `${BASE_URL}login`; }}>Log out</button>
                    <button style={{ marginBottom: '0.5rem', width: '90%', height: '20px' }} onClick={() => { window.open('https://shints.notion.site/shints-erp-manual?v=abd027845fc846f49081807f183af5ba', 'blank'); }}>Manual</button>
                    <button id='btnAuth' style={{ marginBottom: '0.5rem', width: '90%', height: '20px' }} onClick={() => { window.open(`${window.location.protocol}//${window.location.hostname}:3201/authority.html`, 'blank'); }}>권한 설정</button>
                    <button id='btnTrLog' style={{ marginBottom: '0.5rem', width: '90%', height: '20px' }} onClick={() => { window.open(`${window.location.protocol}//${window.location.hostname}:3201/tr_log.html`, 'blank'); }}>Transaction LOG</button>
                    <div className="testEnvLabel blink" style={{ marginBottom: '1rem', width: '90%', height: '20px', backgroundColor: 'purple', borderRadius: '3px', color: 'white', fontWeight: '700', textAlign: 'center' }}>TEST 환경</div>
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

            {/* 🔹 탭 UI */}
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
                                        data-pr-tooltip="ㅁㅁㅁㅁㅁ" // URL 툴팁 설정
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
                                    key={tab.label + "_" + (iframeRefreshKeys[index] || 0)}
                                    src={tab.url}
                                    width="100%"
                                    height="500px"
                                    style={{ border: "none", marginTop:'-5px' }}
                                />
                            </TabPanel>
                        ))}
                    </TabView>
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
