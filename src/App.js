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
import { Rnd } from "react-rnd";

import Swal from 'sweetalert2';
import { blindMenu } from './blindMenu';
import { getMrpWorkingStatus } from './getMrpWorkingStatus';
import { changePassword, getPassword } from './changePassword';``
import apolloOption from './assets/env_graphql';
import axios from 'axios';

const menu1 = require('./menu').menu1;
const menu3 = require('./menu').menu3;

import $ from 'jquery';
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import './assets/layout/layout.scss';
import './App.scss';

let userInfoForAuth = {};
let prismaDate = '';

$(async function() {
    blindMenu(window, apolloOption, userInfoForAuth);
    showTestEnvLabel(window);
});

// 높이 측정 → CSS 변수 주입
function refreshOffset() {
    let total = 0;

    // 기존 영역 높이
    const userInfoH = $('#userInfoWrapper').outerHeight() || 0;
    const menuTopH = $('#menuTopWrapper').outerHeight() || 0;

    // Favorites 영역 높이 (id를 따로 주는 게 안전)
    const favoritesH = $('#favoritesWrapper').outerHeight() || 0;
    total = userInfoH + menuTopH + favoritesH ;

    $(':root').css('--dynamicOffset', total + 'px');
}
// 첫 로드 & 창 리사이즈 때 반영
$(window).on('load resize', refreshOffset);

// 최초 한 번 실행
refreshOffset();

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

function clearAllColumnOrders() {
    const confirmMessage = '모든 Custom된 컬럼 순서정보를 삭제하시겠습니까?\nDo you want to delete all customized column settings?';
    
    if (window.confirm(confirmMessage)) {
        const iframe = document.getElementById('tabIframe');
        if (iframe && iframe.contentWindow) {
            iframe.contentWindow.postMessage({ type: 'CLEAR_AF_COLUMNS' }, '*');
        } else {
            console.warn('iframe with id "tabIframe" not found.');
        }
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
    
    const [dbName, setDbName] = useState('');
    useEffect(() => {
        axios.get(`${window.location.protocol}//${window.location.hostname}:${apolloOption.server_port}/restapi/db-name`)
            .then(res => setDbName(res.data.dbName.replace('test','')))
            .catch(() => setDbName('오류 발생'));
    }, []);

    useEffect(() => {
        const handleMessage = (event) => {
            if (!event.data || typeof event.data !== 'object') return;

            const { type, url } = event.data;

            if (type === 'closeTab' && url) {
                setTabs((prevTabs) => {
                    const tabIndex = prevTabs.findIndex(tab => tab.url === url);
                    if (tabIndex !== -1) {
                        const newTabs = prevTabs.filter((_, i) => i !== tabIndex);

                        if (tabIndex === activeIndex) {
                            setActiveIndex((prev) => (tabIndex === 0 ? 0 : prev - 1));
                        } else if (tabIndex < activeIndex) {
                            setActiveIndex((prev) => prev - 1);
                        }

                        return newTabs;
                    }
                    return prevTabs;
                });
            }
        };

        window.addEventListener('message', handleMessage);
        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, [activeIndex]);

    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    // 상태로 floatingTabs 배열 관리
    const [floatingTabs, setFloatingTabs] = useState([]);

    const floatTab = (tab) => {
        const newZ = maxZIndex + 1;
        const newTab = { ...tab, zIndex: newZ };

        setFloatingTabs(prev => [...prev, newTab]);
        setMaxZIndex(newZ);
        setTabs(prev => prev.filter(t => t.idx !== tab.idx));
    };

    const returnToTab = (tab) => {
        setTabs(prev => [...prev, tab]);
        setFloatingTabs(prev => prev.filter((t) => t.idx !== tab.idx));
        setActiveIndex(tabs.length);
    };

    const [maxZIndex, setMaxZIndex] = useState(2000);  // 초기 z-index

    const iframeRefs = useRef({});
    
    const DEFAULT_WIDTH = 1400;
    const DEFAULT_HEIGHT = 600;
    const ASPECT = DEFAULT_WIDTH / DEFAULT_HEIGHT;
    
    // 리사이즈 이벤트 핸들러
    const handleResizeFloatingTab = (i, width, height) => {
        // 비율 유지: width 기준으로 height 재계산
        let newWidth = width;
        let newHeight = Math.round(newWidth / ASPECT);
        setFloatingTabs((prev) =>
            prev.map((tab, idx) => idx === i ? { ...tab, width: newWidth, height: newHeight } : tab)
        );
    };

    const [favorites, setFavorites] = useState([]); // [{key, label, url}]
    const storageKey = userInfo?.USER_ID ? `${userInfo.USER_ID}-favorites` : null;

    const getNodeKey = (node) => node?.url || node?.key || node?.label;

    const loadFavorites = () => {
        if (!storageKey) return;
        try {
            const raw = localStorage.getItem(storageKey);
            const arr = raw ? JSON.parse(raw) : [];
            setFavorites(Array.isArray(arr) ? arr : []);
        } catch {
            setFavorites([]);
        }
    };

    const saveFavorites = (next) => {
        if (!storageKey) return;
        localStorage.setItem(storageKey, JSON.stringify(next));
    };

    const isFavorite = (node) => {
        const k = getNodeKey(node);
        if (!k) return false;
        return favorites.some(f => f.key === k);
    };

    const toggleFavorite = (node) => {
        const k = getNodeKey(node);
        if (!k) return;
        setFavorites(prev => {
            const exists = prev.some(f => f.key === k);
            let next;
            if (exists) {
                next = prev.filter(f => f.key !== k);
            } else {
                next = [...prev, { key: k, label: node.label, url: node.url || '' }];
            }
            saveFavorites(next);
            return next;
        });
    };

    useEffect(() => {
        if (storageKey) {
            loadFavorites();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [storageKey]);

    const nodeTemplate = (node, options) => {
        const fav = isFavorite(node);

        return (
            <div 
                className="tree-node-custom p-treenode-label" 
                onClick={() => onToggleNode(node)} 
                style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            >
                {/* 노란별 (왼쪽) 
                <i
                    className={`pi ${fav ? 'pi-star-fill' : 'pi-star'}`}
                    style={{ 
                        marginRight: '6px', 
                        fontSize: '1rem', 
                        color: '#f59e0b',
                        flex: '0 0 auto'
                    }}
                    title={fav ? '즐겨찾기 해제' : '즐겨찾기 추가'}
                    onClick={(e) => {
                        e.stopPropagation(); // 라벨 클릭과 분리
                        toggleFavorite(node);
                    }}
                />
                */}
                {/* 라벨 */}
                <span style={{ marginLeft: "2px" }}>{node.label}</span>
            </div>
        );
    };

    useEffect(() => {
        refreshOffset();
    }, [favorites]);

    const getTabKey = (tab) => tab?.url || tab?.idx || tab?.label;

    // 현재 탭이 즐겨찾기인지
    const isFavoriteTab = (tab) => favorites.some(f => f.key === getTabKey(tab));

    // 탭에서 즐겨찾기 토글
    const toggleFavoriteFromTab = (tab) => {
        const key = getTabKey(tab);
        const label = tab?.label || key;
        const url = tab?.url || '';

        setFavorites(prev => {
            const exists = prev.some(f => f.key === key);
            const next = exists
            ? prev.filter(f => f.key !== key)
            : [...prev, { key, label, url }];
            saveFavorites(next);
            return next;
        });
    };



    return (
        <div className="app-container" style={{ display: "flex", height: "100vh"}}>
            <Toast ref={toast} />
            <div 
                style={{ 
                    position: 'fixed',       // 고정 위치
                    bottom: '5px',             // 상단 여백
                    left: '5px',            // 왼쪽 여백
                    zIndex: 2000             // 다른 요소보다 위에
                }}
            >
                <Button 
                    icon={sidebarCollapsed ? 'pi pi-chevron-right' : 'pi pi-chevron-left'} 
                    className="p-button-rounded p-button-primary"
                    onClick={() => setSidebarCollapsed(prev => !prev)} 
                    title={sidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
                    style={{
                        width: '2rem',
                        height: '2rem',
                        fontSize: '1.8rem',
                        backgroundColor: '#6366F1',
                        opacity: sidebarCollapsed ? '0.5' : '1.0'
                    }}
                />
            </div>
            <div 
                className="sidebar"
                style={{
                    width: sidebarCollapsed ? "0px" : "160px",
                    minWidth: sidebarCollapsed ? "0px" : "160px",
                    background: "#f8f9fa",
                    padding: sidebarCollapsed ? "0px" : "5px",
                    borderRight: "1px solid #ddd",
                    overflowX: 'hidden',
                    overflowY: 'auto',
                    //transition: 'width 0.1s ease'
                }}
            >
                <div>
                  <div id="userInfoWrapper" style={{ marginTop: '0rem', width: '100%', height: '4rem', marginBottom: '0rem', display:'flex', flexDirection:'column' }}>
                    <div style={{ float: 'left', marginTop: '0rem', width: '6rem', height: '4rem', marginLeft: '15px' }}>
                        <span style={{ width: '9rem' }}>
                            <p className="p-text-secondary" style={{ width: '9rem', fontSize:'11px', fontWeight: '600', display: 'inline-block' }}>{userInfo.USER_ID}</p>
                        </span>
                        <span style={{ width: '9rem' }}>
                            <p className="p-text-secondary" style={{ width: '9rem',  fontSize:'11px', fontWeight: '600', display: 'inline-block' }}>{userInfo.USER_NAME}</p>
                        </span>
                    </div>
                    
                    <div style={{ width: '100%', display:'flex', justifyContent:'center', marginTop:'10px' }}>
                        <div style={{ width: '2.5rem', height: '2rem', textAlign: 'center' }}>
                            <i className="af-button custom-target-icon pi pi-arrows-h p-text-secondary"
                                onClick={() => { clearAllColumnOrders(); }}
                                style={{ fontSize: '1.5rem', cursor: "pointer" }}
                                title="Clear customized column">
                            </i>
                        </div>
                        
                        <div style={{ width: '2.5rem', height: '2rem', textAlign: 'center' }}>
                            <i className="af-button custom-target-icon pi pi-unlock p-text-secondary"
                                onClick={() => { setPasswordModalVisible(true); setCurrentPassword(''); setNewPassword(''); setConfirmPassword(''); }}
                                style={{ fontSize: '1.5rem', cursor: "pointer" }}
                                title="Change password">
                            </i>
                        </div>
                        {/*}
                        <div style={{ float: 'left', marginTop: '0.6rem', width: '2rem', height: '2rem' }}>
                            <i className="custom-target-icon pi pi-arrows-h p-text-secondary"
                                id='iconFitToWindow'
                                style={{ fontSize: '1.5rem', cursor: "pointer" }}
                                title="Fit to window">
                            </i>
                        </div>
                        */}
                        <div style={{ width: '2.5rem', height: '2rem', textAlign: 'center' }}>
                            <i className="af-button custom-target-icon pi pi-times p-text-secondary"
                                onClick={() => { setTabs([]); }}
                                style={{ fontSize: '1.5rem', cursor: "pointer" }}
                                title="Close all tabs">
                            </i>
                        </div>
                        <div style={{ width: '2.5rem', height: '2rem', textAlign: 'center' }}>
                            <i className="af-button custom-target-icon pi pi-refresh p-text-secondary"
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
                    
                </div>
                <div id='menuTopWrapper' style={{ marginBottom: '1.5rem', width: '100%', padding: '0', marginLeft: '7px', paddingTop: '25px' }}>
                    <button style={{ marginBottom: '0.5rem', width: '90%', height: '20px' }} onClick={() => { window.sessionStorage.removeItem('AF_ERP_USERINFO'); deleteCookie(`AF_ERP_USERINFO_${userInfoForAuth.userId}`); window.location.href = `${BASE_URL}login`; }}>Log out</button>
                    <button style={{ marginBottom: '0.5rem', width: '90%', height: '20px' }} onClick={() => { window.open('https://shints.notion.site/shints-erp-manual?v=abd027845fc846f49081807f183af5ba', 'blank'); }}>Manual</button>
                    <button id='btnAuth' style={{ marginBottom: '0.5rem', width: '90%', height: '20px', display:'none'}} onClick={() => { window.open(`${window.location.protocol}//${window.location.hostname}:3201/authority.html`, 'blank'); }}>권한 설정</button>
                    <button id='btnTrLog' style={{ marginBottom: '0.5rem', width: '90%', height: '20px', display:'none'}} onClick={() => { window.open(`${window.location.protocol}//${window.location.hostname}:3201/tr_log.html`, 'blank'); }}>Transaction LOG</button>
                    {/*<button id='btnDevManual' style={{ marginBottom: '0.5rem', width: '90%', height: '20px' }} onClick={() => { window.open(`https://www.notion.so/shints/1cf09bcd64ff803ea457dc278b9ba591?v=1cf09bcd64ff8031b40e000c9bdf5071`, 'blank'); }}>화면 분석서</button>*/}
                    <div className="testEnvLabel blink" style={{ marginBottom: '1rem', width: '90%', height: '20px', backgroundColor: 'purple', borderRadius: '3px', color: 'white', fontWeight: '700', textAlign: 'center', alignContent:'center' }}>TEST 환경 ({dbName})</div>
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
                {favorites.length > 0 && (
                    <div 
                        id='favoritesWrapper' 
                        style={{ 
                            width: '100%', 
                            padding: sidebarCollapsed ? '0' : '0' 
                        }}
                    >
                        <div 
                            style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'space-between',
                                margin: '6px 0 4px 6px' 
                            }}
                        >
                            <div style={{ fontWeight: 700, fontSize: '12px' }}>
                                <span style={{ color: '#f59e0b' }}>★</span> Favorites
                            </div>
                            <Button
                                icon="pi pi-trash"
                                className="p-button-text p-button-plain p-button-sm"
                                onClick={() => { 
                                    setFavorites([]); 
                                    saveFavorites([]); 
                                }}
                                style={{ fontSize: '1.5rem', height: '1.3rem', color: 'gray' }}
                            />
                        </div>

                        <Tree
                            value={
                                favorites.map(f => ({
                                    key: f.key,
                                    label: f.label,
                                    url: f.url,
                                }))
                            }
                            style={{ width: "100%", marginBottom: '0px' }}
                            nodeTemplate={nodeTemplate}
                        />
                    </div>
                )}
                
                <Tree
                    id='menuTree'
                    value={menuInfo}
                    style={{ width: "100%", marginTop: '10px'}}
                    expandedKeys={expandedKeys}
                    onToggle={(e) => setExpandedKeys(e.value)}
                    nodeTemplate={nodeTemplate}
                />
                </div>
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

                                    {/* ★ 즐겨찾기 토글 버튼 (닫기 버튼 바로 앞) */}
                                    <Button
                                        icon={isFavoriteTab(tab) ? 'pi pi-star-fill' : 'pi pi-star'}
                                        className="p-button-text p-button-sm"
                                        onClick={(e) => { e.stopPropagation(); toggleFavoriteFromTab(tab); }}
                                        style={{ 
                                        marginRight: '0.15rem',
                                        // Button의 fontSize로 아이콘 크기가 안 바뀔 수 있어 기본 유지
                                        color: isFavoriteTab(tab) ? '#f59e0b' : '#8a8a8a'
                                        }}
                                        title={isFavoriteTab(tab) ? '즐겨찾기 해제' : '즐겨찾기 추가'}
                                    />
                                    
                                    
                                    <Button
                                        icon="pi pi-clone"
                                        className="p-button-text p-button-sm"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            floatTab(tab);
                                        }}
                                        style={{ color: "green", marginLeft: "0px" }}
                                        title="Detach to floating"
                                    />
                                    
                                    <Button
                                        icon="pi pi-times"
                                        className="p-button-text p-button-sm p-ml-2"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            removeTab(index);
                                        }}
                                        style={{ textAlign: 'right', marginLeft: "0px", color: "red" }}
                                        title='CLOSE TAB'
                                        accessKey='x'
                                    />
                                </span>
                            }
                        >
                            <iframe
                                id="tabIframe"
                                key={tab.key}
                                src={tab.url}
                                width="100%"
                                style={{ border: "none", marginTop:'-5px', overflow:'auto' }}
                            />
                        </TabPanel>
                    ))}
                </TabView>

                {floatingTabs.map((tab, i) => {
                const width = tab.width || DEFAULT_WIDTH;
                const height = tab.height || DEFAULT_HEIGHT;
                const scale = width / DEFAULT_WIDTH;

                // scale 비율 계산
                const scaleX = width / DEFAULT_WIDTH;
                const scaleY = height / DEFAULT_HEIGHT;

                return (
                    <Rnd
                        key={tab.idx}
                        size={{ width, height }}
                        default={{
                            x: i * 30 - 50,
                            y: 100 + i * 30,
                            width,
                            height,
                        }}
                        minWidth={1000}
                        minHeight={1000 / ASPECT}
                        lockAspectRatio={ASPECT}
                        style={{
                            zIndex: tab.zIndex || 2000,
                            position: 'absolute',
                            background: '#fff',
                            boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                            overflow: 'hidden',
                        }}
                        onResizeStop={(e, direction, ref, delta, position) => {
                            handleResizeFloatingTab(i, parseInt(ref.style.width, 10), parseInt(ref.style.height, 10));
                        }}
                        onMouseDown={() => {
                            const newZ = maxZIndex + 1;
                            setFloatingTabs((prevTabs) =>
                                prevTabs.map((ft, j) =>
                                    j === i ? { ...ft, zIndex: newZ } : ft
                                )
                            );
                            setMaxZIndex(newZ);
                        }}
                    >
                        {/* 헤더 */}
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            background: "#f1f1f1",
                            padding: "5px 10px"
                        }}>
                            <div>
                                <strong>{tab.label}</strong>
                            </div>
                            <div>
                                <Button
                                    icon="pi pi-refresh"
                                    className="p-button-text"
                                    onClick={() => {
                                        const iframe = iframeRefs.current[tab.idx];
                                        if (iframe && iframe.contentWindow) {
                                            iframe.contentWindow.postMessage({ type: 'RELOAD_ME' }, '*');
                                        }
                                    }}
                                    title="Reload iframe"
                                />
                                <Button
                                    icon="pi pi-clone"
                                    className="p-button-text"
                                    style={{ color: "#333", marginRight: "0rem" }}
                                    onClick={() => returnToTab(tab)}
                                    title="Return to tab"
                                />
                                <Button icon="pi pi-times"
                                    className="p-button-text"
                                    style={{ color: "red" }}
                                    onClick={() => setFloatingTabs(floatingTabs.filter((_, j) => j !== i))}
                                    title="Close floating tab"
                                />
                            </div>
                        </div>
                        <div style={{
                            width: "100%",
                            height: `calc(100%)`,
                            overflow: "hidden",
                            background: "#fff"
                        }}>
                            <iframe
                                ref={el => iframeRefs.current[tab.idx] = el}
                                src={tab.url}
                                style={{
                                    width: `${DEFAULT_WIDTH}px`,
                                    height: `${DEFAULT_HEIGHT-50}px`,
                                    border: "none",
                                    transform: `scale(${scaleX},${scaleY})`,
                                    transformOrigin: "top left",
                                    pointerEvents: "auto", 
                                    background: "#fff",
                                    display: "block"
                                }}
                                title={tab.label}
                            />
                        </div>
                    </Rnd>
                );
            })}
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
