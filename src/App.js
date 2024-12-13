import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { Route, useHistory, useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { Tree } from 'primereact/tree';

import PrimeReact from 'primereact/api';
import { Tooltip } from 'primereact/tooltip';
import { TabPanel } from 'primereact/tabview';
import { TabMenu } from 'primereact/tabmenu';

import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'prismjs/themes/prism-coy.css';
import './assets/demo/flags/flags.css';
import './assets/demo/Demos.scss';
import './assets/layout/layout.scss';
import './App.scss';
import './TabViewDemo.css';
import Iframe from 'react-iframe'
import apolloOption from './assets/env_graphql';
import { blindMenu, getAuthInfo } from './blindMenu'
import $ from 'jquery';

let userInfoForAuth = {};

$( document ).ready( async function() {
  userInfoForAuth.authMenuList = await getAuthInfo(window, apolloOption, userInfoForAuth.userId);
  //console.log(userInfoForAuth);
/*
  $('.p-tree-toggler').on('click', () => {
    setTimeout( () => {
      let menuList = $('.p-treenode-label');
      menuList.each( (index, menu) => {
          for (let blindMenu of userInfoForAuth.authMenuList) {
            if (blindMenu == $(menu).text()) {
              $(menu).closest('li').remove();
            }
          }
      });
    }, 100);
  })
*/
});

const App = () => {
    const [userInfo, setUserInfo] = useState({});
    const [menuInfo, setMenuInfo] = useState([]);

    const [iframeH1, setIframeH1] = useState('');
    const [iframeH2, setIframeH2] = useState('');
    const [iframeH3, setIframeH3] = useState('');
    const [iframeH4, setIframeH4] = useState('');
    const [iframeH5, setIframeH5] = useState('');
    const [iframeH6, setIframeH6] = useState('');
    const [iframeH7, setIframeH7] = useState('');
    const [iframeH8, setIframeH8] = useState('');
    const [iframeH9, setIframeH9] = useState('');
    const [iframeH10, setIframeH10] = useState('');
    const [iframeH11, setIframeH11] = useState('');

    const [iframeS1, setIframeS1] = useState('no');
    const [iframeS2, setIframeS2] = useState('no');
    const [iframeS3, setIframeS3] = useState('no');
    const [iframeS4, setIframeS4] = useState('no');
    const [iframeS5, setIframeS5] = useState('no');
    const [iframeS6, setIframeS6] = useState('no');
    const [iframeS7, setIframeS7] = useState('no');
    const [iframeS8, setIframeS8] = useState('no');
    const [iframeS9, setIframeS9] = useState('no');
    const [iframeS10, setIframeS10] = useState('no');
    const [iframeS11, setIframeS11] = useState('no');

    const [iframeKey1, setIframeKey1] = useState(0);
    const [iframeKey2, setIframeKey2] = useState(0);
    const [iframeKey3, setIframeKey3] = useState(0);
    const [iframeKey4, setIframeKey4] = useState(0);
    const [iframeKey5, setIframeKey5] = useState(0);
    const [iframeKey6, setIframeKey6] = useState(0);
    const [iframeKey7, setIframeKey7] = useState(0);
    const [iframeKey8, setIframeKey8] = useState(0);
    const [iframeKey9, setIframeKey9] = useState(0);
    const [iframeKey10, setIframeKey10] = useState(0);
    const [iframeKey11, setIframeKey11] = useState(0);
    const [iframeKey12, setIframeKey12] = useState(0);
    const [iframeKey13, setIframeKey13] = useState(0);
    const [iframeKey14, setIframeKey14] = useState(0);
    const [iframeKey15, setIframeKey15] = useState(0);
    const [iframeKey16, setIframeKey16] = useState(0);
    const [iframeKey17, setIframeKey17] = useState(0);
    const [iframeKey18, setIframeKey18] = useState(0);
    const [iframeKey19, setIframeKey19] = useState(0);
    const [iframeKey20, setIframeKey20] = useState(0);

    const [iframeUrls1, setIframeUrls1] = useState('');
    const [iframeUrls2, setIframeUrls2] = useState('');
    const [iframeUrls3, setIframeUrls3] = useState('');
    const [iframeUrls4, setIframeUrls4] = useState('');
    const [iframeUrls5, setIframeUrls5] = useState('');
    const [iframeUrls6, setIframeUrls6] = useState('');
    const [iframeUrls7, setIframeUrls7] = useState('');
    const [iframeUrls8, setIframeUrls8] = useState('');
    const [iframeUrls9, setIframeUrls9] = useState('');
    const [iframeUrls10, setIframeUrls10] = useState('');
    const [iframeUrls11, setIframeUrls11] = useState('about:blank');
    const [iframeUrls12, setIframeUrls12] = useState('');
    const [iframeUrls13, setIframeUrls13] = useState('');
    const [iframeUrls14, setIframeUrls14] = useState('');
    const [iframeUrls15, setIframeUrls15] = useState('');
    const [iframeUrls16, setIframeUrls16] = useState('');
    const [iframeUrls17, setIframeUrls17] = useState('');
    const [iframeUrls18, setIframeUrls18] = useState('');
    const [iframeUrls19, setIframeUrls19] = useState('');
    const [iframeUrls20, setIframeUrls20] = useState('');

    const [iframeTitles1, setIframeTitles1] = useState('');
    const [iframeTitles2, setIframeTitles2] = useState('');
    const [iframeTitles3, setIframeTitles3] = useState('');
    const [iframeTitles4, setIframeTitles4] = useState('');
    const [iframeTitles5, setIframeTitles5] = useState('');
    const [iframeTitles6, setIframeTitles6] = useState('');
    const [iframeTitles7, setIframeTitles7] = useState('');
    const [iframeTitles8, setIframeTitles8] = useState('');
    const [iframeTitles9, setIframeTitles9] = useState('');
    const [iframeTitles10, setIframeTitles10] = useState('');
    const [iframeTitles11, setIframeTitles11] = useState('');
    const [iframeTitles12, setIframeTitles12] = useState('');
    const [iframeTitles13, setIframeTitles13] = useState('');
    const [iframeTitles14, setIframeTitles14] = useState('');
    const [iframeTitles15, setIframeTitles15] = useState('');
    const [iframeTitles16, setIframeTitles16] = useState('');
    const [iframeTitles17, setIframeTitles17] = useState('');
    const [iframeTitles18, setIframeTitles18] = useState('');
    const [iframeTitles19, setIframeTitles19] = useState('');
    const [iframeTitles20, setIframeTitles20] = useState('');

    const [styleValOff, setStyleValOff] = useState({ zIndex: '1', position:'absolute' , backgroundColor:'#e5e5e5'});
    const [styleValOn, setStyleValOn] = useState({ zIndex: '999', position:'absolute', backgroundColor:'#e5e5e5' });
    const [styleVal1, setStyleVal1] = useState({ zIndex: '1' });
    const [styleVal2, setStyleVal2] = useState({ zIndex: '1' });
    const [styleVal3, setStyleVal3] = useState({ zIndex: '1' });
    const [styleVal4, setStyleVal4] = useState({ zIndex: '1' });
    const [styleVal5, setStyleVal5] = useState({ zIndex: '1' });
    const [styleVal6, setStyleVal6] = useState({ zIndex: '1' });
    const [styleVal7, setStyleVal7] = useState({ zIndex: '1' });
    const [styleVal8, setStyleVal8] = useState({ zIndex: '1' });
    const [styleVal9, setStyleVal9] = useState({ zIndex: '1' });
    const [styleVal10, setStyleVal10] = useState({ zIndex: '1' });
    const [styleVal11, setStyleVal11] = useState({ zIndex: '1', backgroundColor:'#e5e5e5' });

    const [isTabs1, setIsTabs1] = useState('show0');
    const [isTabs2, setIsTabs2] = useState('show0');
    const [isTabs3, setIsTabs3] = useState('show0');
    const [isTabs4, setIsTabs4] = useState('show0');
    const [isTabs5, setIsTabs5] = useState('show0');
    const [isTabs6, setIsTabs6] = useState('show0');
    const [isTabs7, setIsTabs7] = useState('show0');
    const [isTabs8, setIsTabs8] = useState('show0');
    const [isTabs9, setIsTabs9] = useState('show0');
    const [isTabs10, setIsTabs10] = useState('show0');
    const [isTabs11, setIsTabs11] = useState('show0');
    const [isTabs12, setIsTabs12] = useState('show0');
    const [isTabs13, setIsTabs13] = useState('show0');
    const [isTabs14, setIsTabs14] = useState('hidden');
    const [isTabs15, setIsTabs15] = useState('hidden');
    const [isTabs16, setIsTabs16] = useState('hidden');
    const [isTabs17, setIsTabs17] = useState('hidden');
    const [isTabs18, setIsTabs18] = useState('hidden');
    const [isTabs19, setIsTabs19] = useState('hidden');
    const [isTabs20, setIsTabs20] = useState('hidden');

/*
    const [isTabs1, setIsTabs1] = useState('hidden');
    const [isTabs2, setIsTabs2] = useState('hidden');
    const [isTabs3, setIsTabs3] = useState('hidden');
    const [isTabs4, setIsTabs4] = useState('hidden');
    const [isTabs5, setIsTabs5] = useState('hidden');
    const [isTabs6, setIsTabs6] = useState('hidden');
    const [isTabs7, setIsTabs7] = useState('hidden');
    const [isTabs8, setIsTabs8] = useState('hidden');
    const [isTabs9, setIsTabs9] = useState('hidden');
    const [isTabs10, setIsTabs10] = useState('hidden');
    const [isTabs11, setIsTabs11] = useState('hidden');
    const [isTabs12, setIsTabs12] = useState('hidden');
    const [isTabs13, setIsTabs13] = useState('hidden');
    const [isTabs14, setIsTabs14] = useState('hidden');
    const [isTabs15, setIsTabs15] = useState('hidden');
    const [isTabs16, setIsTabs16] = useState('hidden');
    const [isTabs17, setIsTabs17] = useState('hidden');
    const [isTabs18, setIsTabs18] = useState('hidden');
    const [isTabs19, setIsTabs19] = useState('hidden');
    const [isTabs20, setIsTabs20] = useState('hidden');
*/

    const [tabViewDatas, setTabViewDatas] = useState([]);
    const [tabDatas, setTabDatas] = useState([]);
    const [tabDatas1, setTabDatas1] = useState([]);
    const [tabCount, setTabCount] = useState(0);
    const [layoutMode, setLayoutMode] = useState('static');
    const [layoutColorMode, setLayoutColorMode] = useState('light')
    const [inputStyle, setInputStyle] = useState('outlined');
    const [ripple, setRipple] = useState(true);
    const [staticMenuInactive, setStaticMenuInactive] = useState(false);
    const [overlayMenuActive, setOverlayMenuActive] = useState(false);
    const [mobileMenuActive, setMobileMenuActive] = useState(false);
    const [mobileTopbarMenuActive, setMobileTopbarMenuActive] = useState(false);
    const [activeIndex2, setActiveIndex2] = useState(0);
    const [saveIndex2, setSaveIndex2] = useState(-1);

    const [styleMode, setStyleMode] = useState(0);
    const [styleVal0, setStyleVal0] = useState({ width: '14rem' });

    const copyTooltipRef = useRef();
    const location = useLocation();
    const history = useHistory();

    PrimeReact.ripple = true;

    let menuClick = false;
    let mobileTopbarMenuClick = false;

    const ref_iframe1 = useRef(null);
    const ref_iframe2 = useRef(null);
    const ref_iframe3 = useRef(null);
    const ref_iframe4 = useRef(null);
    const ref_iframe5 = useRef(null);
    const ref_iframe6 = useRef(null);
    const ref_iframe7 = useRef(null);
    const ref_iframe8 = useRef(null);
    const ref_iframe9 = useRef(null);
    const ref_iframe10 = useRef(null);
    const ref_iframe11 = useRef(null);
    const ref_iframe12 = useRef(null);
    const ref_iframe13 = useRef(null);
    const ref_iframe14 = useRef(null);
    const ref_iframe15 = useRef(null);
    const ref_iframe16 = useRef(null);
    const ref_iframe17 = useRef(null);
    const ref_iframe18 = useRef(null);
    const ref_iframe19 = useRef(null);
    const ref_iframe20 = useRef(null);

    const [selectedKey, setSelectedKey] = useState('');

    // const [styleVal, setStyleVal] = useState({ width: '65vw' });
    // const [styleVal, setStyleVal] = useState({ position: 'fixed', marginLeft: '14rem' });
    const [styleVal, setStyleVal] = useState({ marginLeft: '14rem' });
    const onCall = (e) => {
        const rVal = {};
        rVal.marginLeft = '0.5rem';
        setStyleVal(rVal);
        console.log(e);
    }

    const reloadTab = (argIdx) => {
        // ref_iframe1.reload();
        if (typeof ref_iframe1.current !== 'undefined') {
           if (ref_iframe1.current !== null) { 
              console.log('reload tab');
              // console.log(ref_iframe1.current.src);
              // ref_iframe1.current.src += '';
              // ref_iframe1.current.contentWindow.location.reload();
              var tSrc = ref_iframe1.current.src;
              ref_iframe1.current.src = '';
              ref_iframe1.current.src = tSrc;
           }
        }
        // ref_iframe1.src += '';
    } 

    const findCloseTab = (argIdx) => {
        // let _tabDatas0 =  JSON.parse(localStorage.getItem('tabinfo1'));
        let _tabDatas0 =  JSON.parse(sessionStorage.getItem('tabinfo1'));
        let _tOnes = _tabDatas0.filter((el) => el.idx === argIdx);
        let _tOne = _tOnes[0];
        return (_tOne);
    }

    const unprocTabDatas = (argIdx) => {

        // let _tabDatas0 =  JSON.parse(localStorage.getItem('tabinfo1'));
        let _tabDatas0 =  JSON.parse(sessionStorage.getItem('tabinfo1'));

        let _tOnes = _tabDatas0.filter((el) => el.idx === argIdx);
        let _tOne = _tOnes[0];

        // let _globalTabDatas =  JSON.parse(localStorage.getItem('tabinfo'));
        let _globalTabDatas =  JSON.parse(sessionStorage.getItem('tabinfo'));
        console.log("unprocTabDatas:" + _globalTabDatas.length);
        let _tArray = _globalTabDatas.map(el =>
              el.idx === argIdx ? { ...el, url1: '', label: '' } : el 
           );
        // localStorage.setItem('tabinfo', JSON.stringify(_tArray, null, 4));
        sessionStorage.setItem('tabinfo', JSON.stringify(_tArray, null, 4));

        let _tabDatas = _tArray.filter((el) => el.url1 !== "");
        let _tabDatas1 = _tabDatas.map((el, index) => ({ ...el, tabidx: index, template: headerTemplate }));
        setTabDatas(_tabDatas1);
        // localStorage.setItem('tabinfo1', JSON.stringify(_tabDatas1, null, 4));
        sessionStorage.setItem('tabinfo1', JSON.stringify(_tabDatas1, null, 4));

        console.log(_tOne);
        let _retObj = {};
        _retObj.src = _tOne;
        _retObj.tab = _tabDatas1[_tabDatas1.length-1];
        return (_retObj);
    }

    const onCloseClick = (argIdx) => {
        let _retObj = unprocTabDatas(argIdx);
        // if (argIdx === _retObj.src.idx) {
        console.log('onCloseClick:' + argIdx + ',' + saveIndex2 + ',' + _retObj.src.idx );
        procAllUnVisible();
        if (argIdx === saveIndex2) {
          if (typeof _retObj.tab === 'undefined') {
             ;
          } else {
             procVisible(_retObj.tab.idx, "", "");
             setActiveIndex2(_retObj.tab.tabidx);
             setSaveIndex2(_retObj.tab.idx);
             localStorage.setItem('save_index2', String(_retObj.tab.idx));
          }
        } else {
          if (typeof _retObj.tab === 'undefined') {
            ;
          } else {
            procVisible(_retObj.tab.idx, "", "");
            setActiveIndex2(_retObj.tab.tabidx);
            setSaveIndex2(_retObj.tab.idx);
             localStorage.setItem('save_index2', String(_retObj.tab.idx));
          }
        }
    }

    const headerTemplate = (item, options) => {
        var tLabel = '';
        if (item.label.length > 13) tLabel = item.label.substring(0, 13);
        else {
           var tSpace = '             ';
           tLabel = item.label + tSpace.substring(0, 12-item.label.length);
        }
        
        return (
           <div className={options.className}>
                <span className={options.labelClassName} target={item.target} onClick={options.onClick}>{tLabel}</span>
                <span className={classNames(options.iconClassName, 'pi pi-times')} onClick={(e) => onCloseClick(item.idx)}></span>
           </div>
        );
    }
  
    const makeInits = (argStr) => {
      let _tArray = [];
      let tIdx = 0;   // Tab 갯수 조정 :10 
      for (tIdx = 0; tIdx < 10; tIdx ++) {

        let tObj = {};
        tObj.tabidx = tIdx;
        tObj.idx = tIdx;
        tObj.label =  'tab' + (tIdx+1);
        tObj.title =  'tab' + (tIdx+1);
        tObj.content =  argStr;
        tObj.url1 =  '';
        tObj.command1 = unprocTabDatas;
        tObj.template = headerTemplate;
        _tArray.push(tObj);
      }

      // localStorage.setItem('tabinfo', JSON.stringify(_tArray, null, 4));
      sessionStorage.setItem('tabinfo', JSON.stringify(_tArray, null, 4));
    }

    const [usedIndex, setUsedIndex] = useState([]);
    const [unUsedIndex, setUnUsedIndex] = useState(Array.from({ length: 20 }, (_, i) => (
        {  
           idx: i 
        }
    )));


    const getTabViews_0 = (tab) => {
       let _url1 = `${window.location.protocol}//${window.location.hostname}:3101/#/` + tab.url1;
       return (
          <TabPanel key={tab.title} header={tab.content} closable >
            <Iframe url={_url1}
                    width="100%"
                    height="677px"
                    id="{tab.title}"
                    className="myClassname"
                    display="block"
                    styles={{border: 0}}
                    position="relative"/>
           </TabPanel>
       )
    } 

    const getTabViews_1 = (tab) => {
       var _path = "/" + tab.url1;
       var _component  = null;
/*
       if (tab.url1 === "mgrkcdbank") _component = MgrKcdBank;
       if (tab.url1 === "mgrkcduser") _component = MgrKcdUser;
       if (tab.url1 === "mgrkcdsizemst") _component = MgrKcdSizeMst;
*/
       return (
          <TabPanel key={tab.title} header={tab.content} closable >
               <Route path={_path} component={_component} />
          </TabPanel>
       )
    } 

    useEffect(() => {
        // document.documentElement.style.fontSize = '14.5px';
        document.documentElement.style.fontSize = '10.9px';

        var tUserId = '';
        var tUserName = '';

        var tUrls = window.location.href.split('?');
        if (tUrls.length <= 1) {
           ;
        } else {
          var tParams1 = tUrls[1].split('&');
          var tParams2 = tParams1.map((col, i) => {
             var tObj = {};
             var tCols = col.split('=');
             
             if (tCols[0].includes('user_id')) {
               tObj.key = tCols[0];
               tObj.value= tCols[1];
               tUserId = tObj.value;
             }

             if (tCols[0].includes('user_name')) {
               tObj.key = tCols[0];
               tObj.value= tCols[1];
               tUserName = decodeURI(tObj.value);
             }
          });
        }

        if (tUserId === '') {
           var tUrl = '';
           if (window.location.href.includes('webapp')) 
              tUrl = `${window.location.protocol}//${window.location.hostname}/webapp/shintsapp/index.html#/login`;
           else if (window.location.href.includes(apolloOption.client_port)) 
              tUrl = `${window.location.protocol}//${window.location.hostname}:${apolloOption.client_port}/#/login`;
           else  
              tUrl = `${window.location.protocol}//${window.location.hostname}:${apolloOption.client_port}/#/login`;
           window.location.href = tUrl;
           return;
        }

        if (tUserId === 'aftest01') setMenuInfo(menu2);
        else setMenuInfo(menu1);

        var tUserInfo = {};
        tUserInfo.USER_ID = tUserId;
        tUserInfo.USER_NAME = tUserName;

        userInfoForAuth.userId = tUserId;
        
        setUserInfo(tUserInfo);

/*
        function handleKeyDown(e) {
           if (!ref.current || ref.current.contains(event.target)) {
               return;
           }
           console.log("click =>" e);
           onKeyDown(e);
        }
        document.addEventListener("keydown", handleKeyDown);
        return function cleanup() {
            document.removeEventListener("keydown", handleKeyDown);
        };
*/

        localStorage.setItem('iframe-key', '99999');

        window.addEventListener(
           "message",
              (e) => {
                 if (e.data.func) {
                    if (e.data.func === 'call_url') {
                        console.log('window message=>' + e.data.message + ',' + saveIndex2 );
                        console.log(e.data.message);
                        var argData = e.data.message;
                        onExternCall(argData);
                        // hideORDER_INFO();
                    }
                 }
                    
                 // hideORDER_INFO();
                 /*
                 if (e.origin === SERVER_URL && e.data.message) {
                     ;
                 }
                 */
              },
            false
        );

    }, []);

    useEffect(() => {
        // history.push('/' + _tTabView.url1);
        makeInits('kkk');
        if (mobileMenuActive) {
            addClass(document.body, "body-overflow-hidden");
        } else {
            removeClass(document.body, "body-overflow-hidden");
        }
    }, [mobileMenuActive]);

    useEffect(() => {
        copyTooltipRef && copyTooltipRef.current && copyTooltipRef.current.updateTargetEvents();
    }, [location]);

    const onInputStyleChange = (inputStyle) => {
        console.log("onInputStyleChange");
        console.log(inputStyle);
        setInputStyle(inputStyle);
    }

    const onRipple = (e) => {
        console.log("onRipple");
        console.log(e);
        PrimeReact.ripple = e.value;
        setRipple(e.value)
    }

    const onLayoutModeChange = (mode) => {
        console.log("onLayoutModeChange");
        setLayoutMode(mode)
    }

    const onColorModeChange = (mode) => {
        console.log("onColorModeChange");
        setLayoutColorMode(mode)
    }

    const onWrapperClick = (event) => {
        if (!menuClick) {
            setOverlayMenuActive(false);
            setMobileMenuActive(false);
        }

        if (!mobileTopbarMenuClick) {
            setMobileTopbarMenuActive(false);
        }

        mobileTopbarMenuClick = false;
        menuClick = false;
    }

    const onToggleMenuClick = (event) => {
        menuClick = true;

        if (isDesktop()) {
            if (layoutMode === 'overlay') {
                if (mobileMenuActive === true) {
                    setOverlayMenuActive(true);
                }

                setOverlayMenuActive((prevState) => !prevState);
                setMobileMenuActive(false);
            }
            else if (layoutMode === 'static') {
                setStaticMenuInactive((prevState) => !prevState);
            }
        }
        else {
            setMobileMenuActive((prevState) => !prevState);
        }

        event.preventDefault();
    }

    const onSidebarClick = () => {
        menuClick = true;
    }

    const onMobileTopbarMenuClick = (event) => {
        mobileTopbarMenuClick = true;

        setMobileTopbarMenuActive((prevState) => !prevState);
        event.preventDefault();
    }

    const onMobileSubTopbarMenuClick = (event) => {
        mobileTopbarMenuClick = true;

        event.preventDefault();
    }

    const procUnVisible = (idx) => {
        if (idx === 0) {
          // setIsTabs1('hidden');
          setStyleVal1(styleValOff);
        }
        if (idx === 1) {
          // setIsTabs2('hidden');
          setStyleVal2(styleValOff);
        }
        if (idx === 2) {
          // setIsTabs3('hidden');
          setStyleVal3(styleValOff);
        }
        if (idx === 3) {
          // setIsTabs4('hidden');
          setStyleVal4(styleValOff);
        }
        if (idx === 4) {
          // setIsTabs5('hidden');
          setStyleVal5(styleValOff);
        }
        if (idx === 5) {
          // setIsTabs6('hidden');
          setStyleVal6(styleValOff);
        }
        if (idx === 6) {
          // setIsTabs7('hidden');
          setStyleVal7(styleValOff);
        }
        if (idx === 7) {
          // setIsTabs8('hidden');
          setStyleVal8(styleValOff);
        }
        if (idx === 8) {
          // setIsTabs9('hidden');
          setStyleVal9(styleValOff);
        }
        if (idx === 9) {
          // setIsTabs10('hidden');
          setStyleVal10(styleValOff);
        }
        if (idx === 10) {
          // setIsTabs11('hidden');
          setStyleVal11(styleValOff);
        }
        if (idx === 11) {
          setIsTabs12('hidden');
        }
        if (idx === 12) {
          setIsTabs13('hidden');
        }
        if (idx === 13) {
          setIsTabs14('hidden');
        }
        if (idx === 14) {
          setIsTabs15('hidden');
        }
        if (idx === 15) {
          setIsTabs16('hidden');
        }
        if (idx === 16) {
          setIsTabs17('hidden');
        }
        if (idx === 17) {
          setIsTabs18('hidden');
        }
        if (idx === 18) {
          setIsTabs19('hidden');
        }
        if (idx === 19) {
          setIsTabs20('hidden');
        }
    }

    const procAllUnVisible = () => {

          setStyleVal1(styleValOff);
          setStyleVal2(styleValOff);
          setStyleVal3(styleValOff);
          setStyleVal4(styleValOff);
          setStyleVal5(styleValOff);
          setStyleVal6(styleValOff);
          setStyleVal7(styleValOff);
          setStyleVal8(styleValOff);
          setStyleVal9(styleValOff);
          setStyleVal10(styleValOff);
          setStyleVal11(styleValOn);

/*
          setIsTabs1('hidden');
          setIsTabs2('hidden');
          setIsTabs3('hidden');
          setIsTabs4('hidden');
          setIsTabs5('hidden');
          setIsTabs6('hidden');
          setIsTabs7('hidden');
          setIsTabs8('hidden');
          setIsTabs9('hidden');
          setIsTabs10('hidden');
          setIsTabs11('hidden');
          setIsTabs12('hidden');
          setIsTabs13('hidden');
          setIsTabs14('hidden');
          setIsTabs15('hidden');
          setIsTabs16('hidden');
          setIsTabs17('hidden');
          setIsTabs18('hidden');
          setIsTabs19('hidden');
          setIsTabs20('hidden');
*/
    }

    const procVisible = (idx, argUrl, argLabel) => {

        var argH = '677px';
        var argS = 'no';

        if (idx === 0) {
          // setIsTabs1('show0');
          setStyleVal11(styleValOff);
          setStyleVal1(styleValOn);
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls1(argUrl);
            setIframeTitles1(argLabel);
            setIframeH1(argH);
            setIframeS1(argS);
          }
        }
        if (idx === 1) {
          // setIsTabs2('show0');
          setStyleVal11(styleValOff);
          setStyleVal2(styleValOn);
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls2(argUrl);
            setIframeTitles2(argLabel);
            setIframeH2(argH);
            setIframeS2(argS);
          }
        }
        if (idx === 2) {
          // setIsTabs3('show0');
          setStyleVal11(styleValOff);
          setStyleVal3(styleValOn);
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls3(argUrl);
            setIframeTitles3(argLabel);
            setIframeH3(argH);
            setIframeS3(argS);
          }
        }
        if (idx === 3) {
          // setIsTabs4('show0');
          setStyleVal11(styleValOff);
          setStyleVal4(styleValOn);
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls4(argUrl);
            setIframeTitles4(argLabel);
            setIframeH4(argH);
            setIframeS4(argS);
          }
        }
        if (idx === 4) {
          // setIsTabs5('show0');
          setStyleVal11(styleValOff);
          setStyleVal5(styleValOn);
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls5(argUrl);
            setIframeTitles5(argLabel);
            setIframeH5(argH);
            setIframeS5(argS);
          }
        }
        if (idx === 5) {
          // setIsTabs6('show0');
          setStyleVal11(styleValOff);
          setStyleVal6(styleValOn);
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls6(argUrl);
            setIframeTitles6(argLabel);
            setIframeH6(argH);
            setIframeS6(argS);
          }
        }
        if (idx === 6) {
          // setIsTabs7('show0');
          setStyleVal11(styleValOff);
          setStyleVal7(styleValOn);
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls7(argUrl);
            setIframeTitles7(argLabel);
            setIframeH7(argH);
            setIframeS7(argS);
          }
        }
        if (idx === 7) {
          // setIsTabs8('show0');
          setStyleVal11(styleValOff);
          setStyleVal8(styleValOn);
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls8(argUrl);
            setIframeTitles8(argLabel);
            setIframeH8(argH);
            setIframeS8(argS);
          }
        }
        if (idx === 8) {
          // setIsTabs9('show0');
          setStyleVal11(styleValOff);
          setStyleVal9(styleValOn);
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls9(argUrl);
            setIframeTitles9(argLabel);
            setIframeH9(argH);
            setIframeS9(argS);
          }
        }
        if (idx === 9) {
          // setIsTabs10('show0');
          setStyleVal11(styleValOff);
          setStyleVal10(styleValOn);
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls10(argUrl);
            setIframeTitles10(argLabel);
            setIframeH10(argH);
            setIframeS10(argS);
          }
        }
        if (idx === 10) {
          setIsTabs11('show0');
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls11(argUrl);
            setIframeTitles11(argLabel);
            setIframeH11(argH);
            setIframeS11(argS);
          }
        }
        if (idx === 11) {
          setIsTabs12('show0');
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls12(argUrl);
            setIframeTitles12(argLabel);
          }
        }
        if (idx === 12) {
          setIsTabs13('show0');
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls13(argUrl);
            setIframeTitles13(argLabel);
          }
        }
        if (idx === 13) {
          setIsTabs14('show0');
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls14(argUrl);
            setIframeTitles14(argLabel);
          }
        }
        if (idx === 14) {
          setIsTabs15('show0');
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls15(argUrl);
            setIframeTitles15(argLabel);
          }
        }
        if (idx === 15) {
          setIsTabs16('show0');
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls16(argUrl);
            setIframeTitles16(argLabel);
          }
        }
        if (idx === 16) {
          setIsTabs17('show0');
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls17(argUrl);
            setIframeTitles17(argLabel);
          }
        }
        if (idx === 17) {
          setIsTabs18('show0');
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls18(argUrl);
            setIframeTitles18(argLabel);
          }
        }
        if (idx === 18) {
          setIsTabs19('show0');
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls19(argUrl);
            setIframeTitles19(argLabel);
          }
        }
        if (idx === 19) {
          setIsTabs20('show0');
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls20(argUrl);
            setIframeTitles20(argLabel);
          }
        }
    }

    const procVisible_extern = (idx, argUrl, argLabel, argH0) => {
        var tKey0 = new Date();
        var tKey = tKey0.toString();
        var argS = 'no';
        var argH = '675px';
            
        if (idx === 0) {
          // setIsTabs1('show0');
          setStyleVal1(styleValOn);
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls1(argUrl);
            setIframeTitles1(argLabel);
            setIframeH1(argH);
            if (argH0 >= '800px') {
               argS = 'yes';
            }
            setIframeS1(argS);

            var tObj = parseInt(localStorage.getItem('iframe-key'))+ 1;
            setIframeKey1(tKey);
            localStorage.setItem('iframe-key', tKey);
          }
        }
        if (idx === 1) {
          // setIsTabs2('show0');
          setStyleVal2(styleValOn);
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls2(argUrl);
            setIframeTitles2(argLabel);
            setIframeH2(argH);
            if (argH0 >= '800px') {
               argS = 'yes';
            }
            setIframeS2(argS);

            var tObj = parseInt(localStorage.getItem('iframe-key'))+ 1;
            setIframeKey2(tKey);
            localStorage.setItem('iframe-key', String(tKey));
          }
        }
        if (idx === 2) {
          // setIsTabs3('show0');
          setStyleVal3(styleValOn);
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls3(argUrl);
            setIframeTitles3(argLabel);
            setIframeH3(argH);
            if (argH0 >= '800px') {
               argS = 'yes';
            }
            setIframeS3(argS);

            var tObj = parseInt(localStorage.getItem('iframe-key'))+ 1;
            setIframeKey3(tKey);
            localStorage.setItem('iframe-key', String(tKey));
          }
        }
        if (idx === 3) {
          // setIsTabs4('show0');
          setStyleVal4(styleValOn);
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls4(argUrl);
            setIframeTitles4(argLabel);
            setIframeH4(argH);
            if (argH0 >= '800px') {
               argS = 'yes';
            }
            setIframeS4(argS);

            var tObj = parseInt(localStorage.getItem('iframe-key'))+ 1;
            setIframeKey4(tKey);
            localStorage.setItem('iframe-key', String(tKey));
          }
        }
        if (idx === 4) {
          // setIsTabs5('show0');
          setStyleVal5(styleValOn);
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls5(argUrl);
            setIframeTitles5(argLabel);
            setIframeH5(argH);
            if (argH0 >= '800px') {
               argS = 'yes';
            }
            setIframeS5(argS);

            var tObj = parseInt(localStorage.getItem('iframe-key'))+ 1;
            setIframeKey5(tKey);
            localStorage.setItem('iframe-key', String(tKey));
          }
        }
        if (idx === 5) {
          // setIsTabs6('show0');
          setStyleVal6(styleValOn);
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls6(argUrl);
            setIframeTitles6(argLabel);
            setIframeH6(argH);
            if (argH0 >= '800px') {
               argS = 'yes';
            }
            setIframeS6(argS);

            var tObj = parseInt(localStorage.getItem('iframe-key'))+ 1;
            setIframeKey6(tKey);
            localStorage.setItem('iframe-key', String(tKey));
          }
        }
        if (idx === 6) {
          // setIsTabs7('show0');
          setStyleVal7(styleValOn);
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls7(argUrl);
            setIframeTitles7(argLabel);
            setIframeH7(argH);
            if (argH0 >= '800px') {
               argS = 'yes';
            }
            setIframeS7(argS);

            var tObj = parseInt(localStorage.getItem('iframe-key'))+ 1;
            setIframeKey7(tKey);
            localStorage.setItem('iframe-key', String(tKey));
          }
        }
        if (idx === 7) {
          // setIsTabs8('show0');
          setStyleVal8(styleValOn);
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls8(argUrl);
            setIframeTitles8(argLabel);
            setIframeH8(argH);
            if (argH0 >= '800px') {
               argS = 'yes';
            }
            setIframeS8(argS);

            var tObj = parseInt(localStorage.getItem('iframe-key'))+ 1;

            var tObj = parseInt(localStorage.getItem('iframe-key'))+ 1;
            setIframeKey8(tKey);
            localStorage.setItem('iframe-key', String(tKey));
          }
        }
        if (idx === 8) {
          // setIsTabs9('show0');
          setStyleVal9(styleValOn);
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls9(argUrl);
            setIframeTitles9(argLabel);
            setIframeH9(argH);
            if (argH0 >= '800px') {
               argS = 'yes';
            }
            setIframeS9(argS);

            var tObj = parseInt(localStorage.getItem('iframe-key'))+ 1;
            setIframeKey9(tKey);
            localStorage.setItem('iframe-key', String(tKey));
          }
        }
        if (idx === 9) {
          // setIsTabs10('show0');
          setStyleVal10(styleValOn);
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls10(argUrl);
            setIframeTitles10(argLabel);
            setIframeH10(argH);
            if (argH0 >= '800px') {
               argS = 'yes';
            }
            setIframeS10(argS);

            var tObj = parseInt(localStorage.getItem('iframe-key'))+ 1;
            setIframeKey10(tKey);
            localStorage.setItem('iframe-key', String(tKey));
          }
        }
        if (idx === 10) {
          setIsTabs11('show0');
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls11(argUrl);
            setIframeTitles11(argLabel);
            setIframeH11(argH);
            if (argH0 >= '800px') {
               argS = 'yes';
            }
            setIframeS11(argS);

            var tObj = parseInt(localStorage.getItem('iframe-key'))+ 1;
            setIframeKey11(tKey);
            localStorage.setItem('iframe-key', String(tKey));
          }
        }
        if (idx === 11) {
          setIsTabs12('show0');
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls12(argUrl);
            setIframeTitles12(argLabel);

            var tObj = parseInt(localStorage.getItem('iframe-key'))+ 1;
            setIframeKey12(tKey);
            localStorage.setItem('iframe-key', String(tKey));
          }
        }
        if (idx === 12) {
          setIsTabs13('show0');
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls13(argUrl);
            setIframeTitles13(argLabel);

            var tObj = parseInt(localStorage.getItem('iframe-key'))+ 1;
            setIframeKey13(tObj);
            localStorage.setItem('iframe-key', String(tObj));
          }
        }
        if (idx === 13) {
          setIsTabs14('show0');
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls14(argUrl);
            setIframeTitles14(argLabel);

            var tObj = parseInt(localStorage.getItem('iframe-key'))+ 1;
            setIframeKey14(tObj);
            localStorage.setItem('iframe-key', String(tObj));
          }
        }
        if (idx === 14) {
          setIsTabs15('show0');
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls15(argUrl);
            setIframeTitles15(argLabel);

            var tObj = parseInt(localStorage.getItem('iframe-key'))+ 1;
            setIframeKey15(tObj);
            localStorage.setItem('iframe-key', String(tObj));
          }
        }
        if (idx === 15) {
          setIsTabs16('show0');
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls16(argUrl);
            setIframeTitles16(argLabel);

            var tObj = parseInt(localStorage.getItem('iframe-key'))+ 1;
            setIframeKey16(tObj);
            localStorage.setItem('iframe-key', String(tObj));
          }
        }
        if (idx === 16) {
          setIsTabs17('show0');
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls17(argUrl);
            setIframeTitles17(argLabel);

            var tObj = parseInt(localStorage.getItem('iframe-key'))+ 1;
            setIframeKey17(tObj);
            localStorage.setItem('iframe-key', String(tObj));
          }
        }
        if (idx === 17) {
          setIsTabs18('show0');
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls18(argUrl);
            setIframeTitles18(argLabel);

            var tObj = parseInt(localStorage.getItem('iframe-key'))+ 1;
            setIframeKey18(tObj);
            localStorage.setItem('iframe-key', String(tObj));
          }
        }
        if (idx === 18) {
          setIsTabs19('show0');
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls19(argUrl);
            setIframeTitles19(argLabel);

            var tObj = parseInt(localStorage.getItem('iframe-key'))+ 1;
            setIframeKey19(tObj);
            localStorage.setItem('iframe-key', String(tObj));
          }
        }
        if (idx === 19) {
          setIsTabs20('show0');
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls20(argUrl);
            setIframeTitles20(argLabel);

            var tObj = parseInt(localStorage.getItem('iframe-key'))+ 1;
            setIframeKey20(tObj);
            localStorage.setItem('iframe-key', String(tObj));
          }
        }
    }


    const getTabIndex1 = () => {
        // let _tArray = JSON.parse(localStorage.getItem('tabinfo'));
        let _tArray = JSON.parse(sessionStorage.getItem('tabinfo'));
        let _tIdx = 0;
        for (_tIdx = 0; _tIdx < _tArray.length; _tIdx ++) {
          let tOne = _tArray[_tIdx];
          if (tOne.url1 === '') {
             return (tOne);
          }
        }
        let _tObj = {};
         _tObj.idx = -1;
        return (_tObj);
    }


    const findTabIndex1 = (event) => {
        // let _tArray = JSON.parse(localStorage.getItem('tabinfo'));
        let _tArray = JSON.parse(sessionStorage.getItem('tabinfo'));
        console.log('findTabIndex1', event, _tArray);
        let _tIdx = 0;
        for (_tIdx = 0; _tIdx < _tArray.length; _tIdx ++) {
          let tOne = _tArray[_tIdx];
          if (tOne.label === event.label) {
             console.log('findTabIndex1-ret', tOne);
             return (tOne);
          }
        }
        let _tObj = {};
        _tObj.idx = -1;
        console.log('findTabIndex1-no find', _tObj);
        return (_tObj);
    }

/*
    const onMenuItemClick = (event) => {
*/

    const onExternCall = (argValue) => {
        // console.log(event);
        console.log(argValue);

        var tFindObj = {};
        menu3.forEach((col, i) => {
            var tObj = { ...col };
            if (col.key === argValue.key) tFindObj = tObj;
        });

        console.log('find obj ExternCall:');
        console.log(tFindObj);

        if (typeof tFindObj.key === 'undefined') return;
        if (argValue.key.length < 2) return;

        var tFindObj1 = { ...tFindObj };

        var item = { ...tFindObj1 };
        item.url1 = argValue.url1;

        let _tabDatas = [];
        var _findObj0 = findTabIndex1(item);
        if (_findObj0.idx >= 0) { 
          var tObj10 = { ..._findObj0 };
          tObj10.url1 = argValue.url1; 
          onTabChangeProgram_extern (tObj10, item);
          return;
        }
        
        var _retObj0 = getTabIndex1();
        if (_retObj0.idx < 0) {
           alert('탭은 10개까지만 가능합니다. 탭을 하나 닫은후 클릭하세요');
           return;
        }
      
        var _retObj = procTabDatas(_retObj0.idx, item.url1, item.label);

        var tSaveIndex2 = saveIndex2;
        if (tSaveIndex2 < 0) {
           tSaveIndex2 = parseInt(localStorage.getItem('save_index2'));
        }

        procUnVisible(tSaveIndex2);

        var tUrl = '';
        if (window.location.href.includes('webapp')) 
              tUrl = `${window.location.protocol}//${window.location.hostname}/webapp/shintsapp/index.html#/${item.url1}`;
        else if (window.location.href.includes(apolloOption.client_port)) 
              tUrl = `${window.location.protocol}//${window.location.hostname}:${apolloOption.client_port}/#/${item.url1}`;
        else  
              tUrl = `${window.location.protocol}//${window.location.hostname}:${apolloOption.client_port}/#/${item.url1}`;
        
        let _url1 = tUrl; 
        procVisible_extern (_retObj.idx, _url1, item.label, item.height);
        // procVisible(_retObj.idx, _url1, item.label);

        console.log('onMennItem(extern call):' + saveIndex2 + ',' + _retObj.idx + ',' + tSaveIndex2);

        setActiveIndex2(_retObj.tabidx);
        setSaveIndex2(_retObj.idx);
        localStorage.setItem('save_index2', String(_retObj.idx));
        console.log('onMennItem(extern call-1):' + saveIndex2 + ',' + _retObj.idx + ',' + tSaveIndex2);

        if (!item.children) {
            setOverlayMenuActive(false);
            setMobileMenuActive(false);
        }
    }

    const onMenuItemClick = (argValue) => {
        console.log('onMenuItemClick=>' + argValue);

        var tFindObj = {};
        menuInfo.forEach((col, i) => {
            var tObj = { ...col };
            if (col.key === argValue.substring(0, 1)) tFindObj = tObj;
        });
        
        if (typeof tFindObj.key === 'undefined') return;
        if (argValue.length < 2) return;

        var tFindObj1 = {};
        tFindObj.children.forEach((col, i) => {
            var tObj = { ...col };
            if (col.key === argValue) tFindObj1 = tObj;
        });
        console.log('onMenuItemClick1' ,tFindObj1);

        var item = tFindObj1;

        let _tabDatas = [];
        var _findObj0 = findTabIndex1(item);
        console.log('onMenuItemClick2' , _findObj0);

        if (_findObj0.idx >= 0) { 
          console.log('onMenuItemClick2-1' , _findObj0);
          onTabChangeProgram (_findObj0);
          return;
        }
        
        var _retObj0 = getTabIndex1();
        console.log('onMenuItemClick3' , _retObj0);
        if (_retObj0.idx < 0) {
           alert('탭은 10개까지만 가능합니다. 탭을 하나 닫은후 클릭하세요');
           return;
        }
      
        var _retObj = procTabDatas(_retObj0.idx, item.url1, item.label);
        console.log('onMenuItemClick4(procTabDatas)' , _retObj);

        procUnVisible(saveIndex2);
        console.log('onMenuItemClick5(procUnVisible)' , saveIndex2);

        var tUrl = '';
        if (window.location.href.includes('webapp')) 
              tUrl = `${window.location.protocol}//${window.location.hostname}/webapp/shintsapp/index.html#/${item.url1}`;
        else if (window.location.href.includes(apolloOption.client_port)) 
              tUrl = `${window.location.protocol}//${window.location.hostname}:${apolloOption.client_port}/#/${item.url1}`;
        else  
              tUrl = `${window.location.protocol}//${window.location.hostname}:${apolloOption.client_port}/#/${item.url1}`;

        let _url1 = tUrl;

        procVisible(_retObj.idx, _url1, item.label);
        console.log('onMennItemClick6(procVisible)', _retObj, _url1, item.label);

        setActiveIndex2(_retObj.tabidx);
        console.log('onMennItemClick7(setActiveIndex2(tabidx, idx))', _retObj.tabidx, _retObj.idx);
        setSaveIndex2(_retObj.idx);
        localStorage.setItem('save_index2', String(_retObj.idx));

        if (!item.children) {
            setOverlayMenuActive(false);
            setMobileMenuActive(false);
        }
    }

    const procTabDatas = (argIdx, argUrl, argLabel) => {
        // let _globalTabDatas =  JSON.parse(localStorage.getItem('tabinfo'));
        console.log("procTabDatas-1:", argIdx, argUrl, argLabel);
        let _globalTabDatas =  JSON.parse(sessionStorage.getItem('tabinfo'));
        console.log("procTabDatas-2:", _globalTabDatas);


        var tRetIdx = 0;
        var _tArray = [];
        _globalTabDatas.forEach((col, i) => {
            var tObj = { ...col }; 
            if (col.idx === argIdx) {
                tObj.url1 = argUrl;
                tObj.label = argLabel;
                tRetIdx = i;
            }
            _tArray.push(tObj);
        });
        sessionStorage.setItem('tabinfo', JSON.stringify(_tArray, null, 4));

        var _tabDatas = [];
        _tArray.forEach((col, i) => {
            var tObj = { ...col }; 
            if (tObj.url1 !== '') {
                tObj.tabidx = i;
                tObj.template = headerTemplate;
                _tabDatas.push(tObj);
            }
        });
        let _tabDatas1 = [ ..._tabDatas ];
        setTabDatas(_tabDatas1);
        sessionStorage.setItem('tabinfo1', JSON.stringify(_tabDatas1, null, 4));

        console.log("procTabDatas-4:", _tabDatas1);
        // return (_tabDatas1[_tabDatas1.length-1]);
        return (_tabDatas1[tRetIdx]);

    }

    const onClickClose = (event) => {
        console.log("onClickClose:tabDatas=>" + tabDatas.length);
    }

    const onTabChange1 = (event) => {
        console.log('onTabChange-1:' + event.value.idx);

        // let _tArray = JSON.parse(localStorage.getItem('tabinfo1'));
        let _tArray = JSON.parse(sessionStorage.getItem('tabinfo1'));
        console.log('onTabChange-2:' + _tArray);

        let _tOnes = _tArray.filter((el) => el.idx === event.value.idx);
        let _tOne = _tOnes[0];

        let _tOne1s = _tArray.filter((el) => el.idx === saveIndex2);
        let _tOne1 = _tOne1s[0];

        procUnVisible(_tOne1.idx);
        console.log("onTabChange-3:" + event.value.idx + "," + _tOne1.tabidx + "," + _tOne1.idx);

        procVisible(_tOne.idx, "", "");
        console.log("onTabChange-4:" + event.value.idx + "," + _tOne.tabidx + "," + _tOne.idx);

        let _tFind = _tArray.filter((el) => el.idx === event.value.idx);
        let _tabIdx = _tFind[0].tabidx;
        console.log("onTabChange-5:" + _tabIdx );

        setActiveIndex2(_tabIdx);
        setSaveIndex2(_tOne.idx);
        localStorage.setItem('save_index2', String(_tOne.idx));
    }


    const onTabChangeProgram = (argData) => {
        console.log(argData.idx);

        // let _tArray = JSON.parse(localStorage.getItem('tabinfo1'));
        let _tArray = JSON.parse(sessionStorage.getItem('tabinfo1'));
        console.log(_tArray);

        let _tOnes = _tArray.filter((el) => el.idx === argData.idx);
        let _tOne = _tOnes[0];

        let _tOne1s = _tArray.filter((el) => el.idx === saveIndex2);
        let _tOne1 = _tOne1s[0];

        procUnVisible(_tOne1.idx);
        procVisible(_tOne.idx, "", "");

        console.log("onTabChangeProgram:" + argData.idx + "," + _tOne.tabidx + "," + _tOne.idx);

        let _tFind = _tArray.filter((el) => el.idx === argData.idx);
        let _tabIdx = _tFind[0].tabidx;

        setActiveIndex2(_tabIdx);
        setSaveIndex2(_tOne.idx);
        localStorage.setItem('save_index2', String(_tOne.idx));
    }


    const onTabChangeProgram_extern = (argData, argItem) => {
        console.log("onTabChangeProgram(extern-1):" + argData.idx);
        console.log(argData);

        // let _tArray = JSON.parse(localStorage.getItem('tabinfo1'));
        let _tArray = JSON.parse(sessionStorage.getItem('tabinfo1'));
        console.log(_tArray);

        let _tOnes = _tArray.filter((el) => el.idx === argData.idx);
        let _tOne = _tOnes[0];

        var tSaveIndex2 = saveIndex2; 
        if (tSaveIndex2 < 0) tSaveIndex2 = parseInt(localStorage.getItem('save_index2'));

        let _tOne1s = _tArray.filter((el) => el.idx === tSaveIndex2);
        let _tOne1 = _tOne1s[0];

        procUnVisible(_tOne1.idx);

        var tUrl = '';
        if (window.location.href.includes('webapp')) 
              tUrl = `${window.location.protocol}//${window.location.hostname}/webapp/shintsapp/index.html#/${argData.url1}`;
        else if (window.location.href.includes(apolloOption.client_port)) 
              tUrl = `${window.location.protocol}//${window.location.hostname}:${apolloOption.client_port}/#/${argData.url1}`;
        else  
              tUrl = `${window.location.protocol}//${window.location.hostname}:${apolloOption.client_port}/#/${argData.url1}`;

        let _url1 = tUrl;
        console.log("onTabChangeProgram(extern-2):" + _url1 + "," + argData.height);
        procVisible_extern (_tOne.idx, _url1, argItem.label, argItem.height);
        // procVisible(_retObj.idx, _url1, item.label);

        console.log("onTabChangeProgram(extern-3):" + argData.idx + "," + _tOne.tabidx + "," + _tOne.idx);

        let _tFind = _tArray.filter((el) => el.idx === argData.idx);
        let _tabIdx = _tFind[0].tabidx;

        setActiveIndex2(_tabIdx);
        setSaveIndex2(_tOne.idx);
        localStorage.setItem('save_index2', String(_tOne.idx));
    }

    const isDesktop = () => {
        return window.innerWidth >= 992;
    }

    const menu = [
        {
            label: '기초정보관리', icon: 'pi pi-fw pi-clone',
            items: [
                { label: '은행계좌관리', icon: 'pi pi-fw pi-user-edit', url1: 'S0110_KCD_BANK_QRY' },
                { label: '사용자관리', icon: 'pi pi-fw pi-user-edit', url1: 'S0111_KCD_USER' },
                { label: '사이즈관리', icon: 'pi pi-fw pi-user-edit', url1: 'S0107_KCD_SIZEMST'},
                { label: '바이어관리', icon: 'pi pi-fw pi-user-edit', url1: 'S0113_KCD_BUYER'},
                { label: '공급사관리', icon: 'pi pi-fw pi-user-edit', url1: 'S0114_KCD_SUPPLIER'},
                { label: '공장관리', icon: 'pi pi-fw pi-user-edit', url1: 'S0101_KCD_FACTORY'},
                { label: 'Forwarder관리', icon: 'pi pi-fw pi-user-edit', url1: 'S0108_KCD_PLACE'},
                { label: 'HS_CODE관리', icon: 'pi pi-fw pi-user-edit', url1: 'S0105_KCD_HSCODE'},
                { label: 'Currency관리', icon: 'pi pi-fw pi-user-edit', url1: 'S0112_KCD_CURRENCY'},
                { label: '원가적용환율관리', icon: 'pi pi-fw pi-user-edit', url1: 'S0218_EXCHANGE_RATE_RECORD'},
                { label: '국가관리', icon: 'pi pi-fw pi-user-edit', url1: 'S0104_KCD_NATION'},
                { label: '(*)로스관리', icon: 'pi pi-fw pi-user-edit', url1: ''},
            ]
        },
        {
            label: '오더관리', icon: 'pi pi-fw pi-clone',
            items: [
                { label: '스타일관리', icon: 'pi pi-fw pi-user-edit', url1: 'S0200_KCD_STYLE' },
                { label: 'Style Cost', icon: 'pi pi-fw pi-user-edit', url1: 'S0202_STYLE_COST' },
                { label: 'Sample Cost', icon: 'pi pi-fw pi-user-edit', url1: 'S0203_SAMPLE_COST' },
                { label: 'Order관리', icon: 'pi pi-fw pi-user-edit', url1: 'S0204_ORDER_LIST'},
                { label: 'Order등록', icon: 'pi pi-fw pi-user-edit', url1: 'S020602_ORDER_REG'},
                { label: 'PO관리', icon: 'pi pi-fw pi-user-edit', url1: 'S020701_PO_MANAGER'},
                { label: 'PI관리', icon: 'pi pi-fw pi-user-edit', url1: 'S0205_PI_MANAGER'},
                { label: 'Capa 관리', icon: 'pi pi-fw pi-user-edit', url1: 'S0208_CAPABOOK_RECORD_BVT'},
                { label: 'Capa 조회', icon: 'pi pi-fw pi-user-edit', url1: 'S0209_CAPABOOK_LIST_BVT'},
                { label: 'Nego CMPT', icon: 'pi pi-fw pi-user-edit', url1: 'S0212_NEGO_CMPT'},
                { label: '손익현황', icon: 'pi pi-fw pi-user-edit', url1: 'S0213_ORDER_REPORT'},
                { label: 'Order Status', icon: 'pi pi-fw pi-user-edit', url1: 'S0214_ORDER_STATUS_BEFORE_AFTER_CHECK'},
                { label: 'Over/Shortage', icon: 'pi pi-fw pi-user-edit', url1: 'S0215_ORDER_STATUS_SHORTAGE'},
                { label: 'Sales Plan관리', icon: 'pi pi-fw pi-user-edit', url1: 'S0216_SALES_MATL_PLAN_QRY'},
                { label: 'Sales Plan조회', icon: 'pi pi-fw pi-user-edit', url1: 'S0217_SALES_MATL_PLAN_LIST'}
            ]
        },
        {
            label: 'MRP관리', icon: 'pi pi-fw pi-clone',
            items: [
                { label: '자재등록', icon: 'pi pi-fw pi-user-edit', url1: 'S0301_MATL_RECORD' },
                { label: '자재조회', icon: 'pi pi-fw pi-user-edit', url1: 'S0302_MATL_SEARCH'},
                { label: 'MRP Record Style', icon: 'pi pi-fw pi-user-edit', url1: 'S0303_MRP_RECORD_STYLE'},
                { label: 'MRP Manager', icon: 'pi pi-fw pi-user-edit', url1: 'S0305_MRP_MANAGER'},
                { label: 'MRP Record(Order)', icon: 'pi pi-fw pi-user-edit', url1: 'S0306_MRP_BY_ORDER'}
            ]
        },
        {
            label: '구매관리', icon: 'pi pi-fw pi-clone',
            items: [
                { label: 'Purchase관리', icon: 'pi pi-fw pi-user-edit', url1: 'S0401_PURCHASING_MANAGER' },
                { label: '입고등록', icon: 'pi pi-fw pi-user-edit', url1: 'S0430_STSIN_RECORD'},
                { label: '입고등록(LC)', icon: 'pi pi-fw pi-user-edit', url1: 'S0407_STSI N_DEPOSIT_LC'},
                { label: '입고관리', icon: 'pi pi-fw pi-user-edit', url1: 'S043001_STSIN_LIST'},
                { label: '출고등록', icon: 'pi pi-fw pi-user-edit', url1: 'S0431_STSOUT_RECORD'},
                { label: '출고관리', icon: 'pi pi-fw pi-user-edit', url1: 'S043101_STSOUT_LIST'},
                { label: 'Bill Regist', icon: 'pi pi-fw pi-user-edit', url1: 'S0419_ENDDING_MATL_AMT_DOMESTIC'},
                { label: 'Bill Manager', icon: 'pi pi-fw pi-user-edit', url1: 'S0423_TAXBILL'}
            ]
        },
        {
            label: '수출입관리', icon: 'pi pi-fw pi-clone',
            items: [
                { label: 'Shipment관리', icon: 'pi pi-fw pi-user-edit', url1: 'S0434_SHIPMENT_MANAGER' },
                { label: '수출등록(국내)', icon: 'pi pi-fw pi-user-edit', url1: 'S0413_INVOICE_REG_MATL'},
                { label: '수입등록(국내)', icon: 'pi pi-fw pi-user-edit', url1: 'S0604_IMPORT_CHARGE_RECORD'},
                { label: '수입등록(국내)조회', icon: 'pi pi-fw pi-user-edit', url1: 'S0605_IMPORT_CHARGE_LIST'},
                { label: '수입등록(해외)', icon: 'pi pi-fw pi-user-edit', url1: 'S0601_INVOICE_REG_OVERSEA'},
                { label: 'Invoice조회', icon: 'pi pi-fw pi-user-edit', url1: 'S0414_INVOICE_QRY_MATL'},
                { label: 'Delay Report', icon: 'pi pi-fw pi-user-edit', url1: 'S0416_MATL_DELAY_REPORT'}
            ]
        },
        {
            label: '공장입출고관리', icon: 'pi pi-fw pi-clone',
            items: [
                { label: 'Clearance_Arrival', icon: 'pi pi-fw pi-user-edit', url1: 'S0518_FACTORY_ARRIVAL' },
                { label: 'FAC-IN(Inspection)', icon: 'pi pi-fw pi-user-edit', url1: 'S0519_INSPECT_REPORT' },
                { label: 'FAC-IN조회', icon: 'pi pi-fw pi-user-edit', url1: 'S0504_FACTORY_INPUT_LIST' },
                { label: '재고확인', icon: 'pi pi-fw pi-user-edit', url1: 'S0516_STOCK_USE_CONFIRM' },
                { label: 'Fac-Out등록', icon: 'pi pi-fw pi-user-edit', url1: 'S0507_FACTORY_OUTPUT_RECORD' },
                { label: 'Fac-Out조회', icon: 'pi pi-fw pi-user-edit', url1: 'S0506_FACTORY_OUTPUT_LIST' },
                { label: '생산종료', icon: 'pi pi-fw pi-user-edit', url1: 'S0508_PRODUCTION_COMPLETE' },
                { label: '반납등록', icon: 'pi pi-fw pi-user-edit', url1: 'S0509_RETURN_MATL' },
                { label: '(*)Pendding Shipment', icon: 'pi pi-fw pi-user-edit', url1: '' },
                { label: '자재재고등록', icon: 'pi pi-fw pi-user-edit', url1: 'S0511_STOCK_RECORD' },
                { label: '자재재고관리', icon: 'pi pi-fw pi-user-edit', url1: 'S0512_STOCK_LIST' },
                { label: '선적등록', icon: 'pi pi-fw pi-user-edit', url1: 'S0513_SHIPPING_REGIST_BVT'},
                { label: '선적관리', icon: 'pi pi-fw pi-user-edit', url1: 'S0514_SHIPPING_LIST_BVT_OLD'}
            ]
        },
        {
            label: '지출관리', icon: 'pi pi-fw pi-clone',
            items: [
                { label: '(*)Cost Confirm', icon: 'pi pi-fw pi-user-edit', url1: '' },
                { label: 'CMPT Payment', icon: 'pi pi-fw pi-user-edit', url1: 'S0705_CMPT_PAYMENT' },
                { label: 'Credit Note', icon: 'pi pi-fw pi-user-edit', url1: 'S0701_CREDIT_NOTE'},
                { label: 'Debit Note', icon: 'pi pi-fw pi-user-edit', url1: 'S0702_DEBIT_NOTE'},
                { label: 'Debit Note(B)', icon: 'pi pi-fw pi-user-edit', url1: 'S0703_DEBIT_NOTE_FACTORY_BVT'},
                { label: '자재금액결제', icon: 'pi pi-fw pi-user-edit', url1: 'S0704_PAYMENT_MATL_AMT'},
                { label: '수입업체결제', icon: 'pi pi-fw pi-user-edit', url1: 'S0706_PAYMENT_IMPORT_VENDOR'}
            ]
        },
        {
            label: '매출관리', icon: 'pi pi-fw pi-clone',
            items: [
                { label: '관세환급관리', icon: 'pi pi-fw pi-user-edit', url1: 'S0609_MANAGE_RETURN_TAX' },
                { label: '매출등록(국내)', icon: 'pi pi-fw pi-user-edit', url1: 'S0413_INVOICE_REG_MATL' },
                { label: '매출등록(해외)', icon: 'pi pi-fw pi-user-edit', url1: 'S0606_IMPORT_REG' },
                { label: 'Invoice조회(제품)', icon: 'pi pi-fw pi-user-edit', url1: 'S0603_INVOICE_LIST'},
                { label: 'Nego입금등록', icon: 'pi pi-fw pi-user-edit', url1: 'S0607_LC_NEGO'},
                { label: 'Nego입금관리', icon: 'pi pi-fw pi-user-edit', url1: 'S0608_NEGO_LIST'},
                { label: 'TT입금관리', icon: 'pi pi-fw pi-user-edit', url1: 'S0707_MAN_INVOICE'},
                { label: '바이어별입금관리', icon: 'pi pi-fw pi-user-edit', url1: 'S0708_MANAGE_BUYER_INPUT'},
                { label: '매출채권조회', icon: 'pi pi-fw pi-user-edit', url1: 'S0709_MANAGE_INVOICE_AMT'},
                { label: '오더수불부', icon: 'pi pi-fw pi-user-edit', url1: 'S0710_ORDER_EXPORT_REPORT'}
            ]
        }
    ];

/*
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},

*/

    const menu1 = [
        {
            key: '0', label: 'INFO',  width:'1365px', height:'675px', url1: '', icon: 'pi pi-fw pi-clone',
            children: [
                { key: '0-1', label: 'Bank', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0110_KCD_BANK_QRY', children: [] },
                { key: '0-3', label: 'Size', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0107_KCD_SIZEMST', children: []},
                { key: '0-4', label: 'Buyer', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0113_KCD_BUYER', children: []},
                { key: '0-5', label: 'Supplier', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0114_KCD_SUPPLIER', children: []},
                { key: '0-6', label: 'Factory', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0101_KCD_FACTORY', children: []},
                { key: '0-7', label: 'Forwarder', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0108_KCD_PLACE', children: []},
                { key: '0-8', label: 'HS_CODE', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0105_KCD_HSCODE', children: []},
                { key: '0-9', label: 'Currency', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0112_KCD_CURRENCY', children: []},
                { key: '0-10', label: 'Currency for Price', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0218_EXCHANGE_RATE_RECORD', children: []},
                { key: '0-11', label: 'Country', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0104_KCD_NATION', children: []},
                /* { key: '0-12', label: 'Loss', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: '', children: []}, */
            ]
        },
        {
            key: '1', label: 'ORDER',  width:'1365px', height:'675px', url1: '',  icon: 'pi pi-fw pi-clone',
            children: [
                { key: '1-1', label: 'Style Regist', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0200_KCD_STYLE' },
                { key: '1-2', label: 'Style Price', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0202_STYLE_COST' },
                { key: '1-4', label: 'Order Manager', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0204_ORDER_LIST'},
                { key: '1-19', label: 'Order Regist', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S020602_ORDER_REG'},
                { key: '1-6', label: 'PO Manager', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S020701_PO_MANAGER'},
                { key: '1-8', label: 'PI Manager', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0205_PI_MANAGER'},
                { key: '1-9', label: 'Capa Record', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0208_CAPABOOK_RECORD_BVT'},
                { key: '1-10', label: 'Capa List', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0209_CAPABOOK_LIST_BVT'},
                { key: '1-14', label: '손익현황', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0213_ORDER_REPORT'},
                { key: '1-15', label: 'Order Status', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0214_ORDER_STATUS_BEFORE_AFTER_CHECK'},
                { key: '1-16', label: 'Over/Shortage', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0215_ORDER_STATUS_SHORTAGE'},
                { key: '1-17', label: 'Sales Plan(Record)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0216_SALES_MATL_PLAN_QRY'},
                { key: '1-18', label: 'Sales Plan(List)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0217_SALES_MATL_PLAN_LIST'}
            ]
        },
        {
            key: '2', label: 'MRP', icon: 'pi pi-fw pi-clone',  width:'1365px', height:'675px', url1: '',
            children: [
                { key: '2-1', label: 'Material Record', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0301_MATL_RECORD' },
                { key: '2-2', label: 'Material Search', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0302_MATL_SEARCH'},
                { key: '2-3', label: 'MRP Record(Style)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0303_MRP_RECORD_STYLE'},
                { key: '2-4', label: 'MRP Manager', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0305_MRP_MANAGER'},
                { key: '2-6', label: 'MRP Record(Order)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0306_MRP_BY_ORDER'}
            ]
        },
        {
            key: '3', label: 'PURCHASE', icon: 'pi pi-fw pi-clone',  width:'1365px', height:'675px', url1: '',
            children: [
                { key: '3-1', label: 'Purchase Manager', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0401_PURCHASING_MANAGER' },
                { key: '3-4', label: 'STSIN List', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S043001_STSIN_LIST'},
                { key: '3-6', label: 'STSOUT List', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S043101_STSOUT_LIST'},
                { key: '3-3', label: 'Deposit & L/C Manager', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0439_LC_DEPOSIT'},
                { key: '3-7', label: 'Bill Regist', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0419_ENDDING_MATL_AMT_DOMESTIC'},
                { key: '3-8', label: 'Bill Manager', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0423_TAXBILL'}
            ]
        },
        {
            key: '4', label: 'EXPORT/IMPORT', icon: 'pi pi-fw pi-clone',  width:'1365px', height:'675px', url1: '',
            children: [
                { key: '4-1', label: 'Shipment Manager', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0434_SHIPMENT_MANAGER' },
                /* { key: '4-2', label: '수출등록(국내)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0437_EXPORT_REGIST'}, */
                { key: '4-3', label: '수입등록(국내)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0438_IMPORT_REGIST'},
                { key: '4-8', label: 'Garment Ship', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0513_SHIPPING_LIST'},
                { key: '4-7', label: 'Delay Report', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0450_DELAY_REPORT'}
            ]
        },
        {
            key: '5', label: 'FACTORY IN-OUT', icon: 'pi pi-fw pi-clone', width:'1365px', height:'675px', url1: '',
            children: [
                { key: '5-2', label: 'Clearance_Arrival(BVT)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0518_FACTORY_ARRIVAL?FACTORY=BVT' },
                { key: '5-17', label: 'Clearance_Arrival(ETP)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0518_FACTORY_ARRIVAL?FACTORY=ETP' },
                { key: '5-3', label: 'FAC-IN(Inspection)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0519_INSPECT_REPORT' },
                { key: '5-4', label: 'FAC-IN List', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S051901_FACIN_LIST' },
                { key: '5-5', label: 'Stock Confirm', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0516_STOCK_USE_CONFIRM' },
                { key: '5-6', label: 'Fac-Out Record', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0520_FACOUT_RECORD' },
                { key: '5-7', label: 'Fac-Out List', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S052001_FACOUT_LIST' },
                { key: '5-8', label: 'Production Finish', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0508_CAPABOOK_LIST_BVT' },
                { key: '5-9', label: 'Line Return', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0509_RETURN_MATL' },
                { key: '5-10', label: 'Pendding Shipment', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0531_PENDDING_SHIPMENT' },
                { key: '5-11', label: 'Stock Record', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0521_STOCK_RECORD_NEW' },
                { key: '5-12', label: 'Stock Manager', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0523_STOCK_MANAGER' },
            ]
        },
        {
            key: '6', label: 'COST', icon: 'pi pi-fw pi-clone', width:'1365px', height:'675px', url1: '',
            children: [
                { key: '6-1', label: 'Cost Confirmation', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0610_COST_CONFIRM' },
                { key: '6-2', label: 'CMPT Payment', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0705_CMPT_PAYMENT' },
                { key: '6-3', label: 'Credit Note', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0701_CREDIT_NOTE'},
                { key: '6-4', label: 'Debit Note', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0702_DEBIT_NOTE'},
                { key: '6-5', label: 'Debit Note(B)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0703_DEBIT_NOTE_FACTORY_BVT'},
                { key: '6-7', label: 'Debit Note(E)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S070301_DEBIT_NOTE_FACTORY_ETP'},
                { key: '6-8', label: 'Sample Cost', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0203_SAMPLE_COST' },
                { key: '6-9', label: 'CMPT Confirmation', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0212_NEGO_CMPT'},
            ]
        },
        {
            key: '7', label: 'RECEIVABLES', icon: 'pi pi-fw pi-clone',  width:'1365px', height:'675px', url1: '',
            children: [
                { key: '7-2', label: '매출등록(국내)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0801_DOCU_REGIST_DOMESTIC' },
                { key: '7-3', label: '매출등록(해외)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0802_DOCU_REGIST_OVERSEA' },
                { key: '7-5', label: 'Nego입금등록', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0607_LC_NEGO'},
                { key: '7-7', label: 'TT입금등록', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0707_MAN_INVOICE'},
                { key: '7-6', label: '입금조회', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0608_LC_NEGO_LIST'},
                { key: '7-8', label: '바이어별입금관리', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0708_MANAGE_BUYER_INPUT'},
                { key: '7-9', label: '매출채권조회', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0709_MANAGE_INVOICE_AMT'},
                /*{ key: '7-10', label: '(#)오더수불부', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0710_ORDER_EXPORT_REPORT'}*/
            ]
        }
    ];

    const menu2 = [
        {
            key: '0', label: 'INFO',  width:'1365px', height:'675px', url1: '', icon: 'pi pi-fw pi-clone',
            children: [
                { key: '0-1', label: 'Bank', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0110_KCD_BANK_QRY', children: [] },
                { key: '0-2', label: 'User', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0111_KCD_USER', children: []},
                { key: '0-3', label: 'Size', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0107_KCD_SIZEMST', children: []},
                { key: '0-4', label: 'Buyer', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0113_KCD_BUYER', children: []},
                { key: '0-5', label: 'Supplier', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0114_KCD_SUPPLIER', children: []},
                { key: '0-6', label: 'Factory', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0101_KCD_FACTORY', children: []},
                { key: '0-7', label: 'Forwarder', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0108_KCD_PLACE', children: []},
                { key: '0-8', label: 'HS_CODE', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0105_KCD_HSCODE', children: []},
                { key: '0-9', label: 'Currency', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0112_KCD_CURRENCY', children: []},
                { key: '0-10', label: 'Currency for Price', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0218_EXCHANGE_RATE_RECORD', children: []},
                { key: '0-11', label: 'Country', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0104_KCD_NATION', children: []},
                /*{ key: '0-12', label: 'Loss', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: '', children: []},*/
            ]
        },
        {
            key: '1', label: 'ORDER',  width:'1365px', height:'675px', url1: '',  icon: 'pi pi-fw pi-clone',
            children: [
                { key: '1-1', label: 'Style Regist', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0200_KCD_STYLE' },
                { key: '1-2', label: 'Style Price', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0202_STYLE_COST' },
                { key: '1-4', label: 'Order Manager', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0204_ORDER_LIST'},
                { key: '1-19', label: 'Order Regist', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S020602_ORDER_REG'},
                { key: '1-6', label: 'PO Manager', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S020701_PO_MANAGER'},
                { key: '1-8', label: 'PI Manager', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0205_PI_MANAGER'},
                { key: '1-9', label: 'Capa Record', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0208_CAPABOOK_RECORD_BVT'},
                { key: '1-10', label: 'Capa List', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0209_CAPABOOK_LIST_BVT'},
                { key: '1-14', label: '손익현황', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0213_ORDER_REPORT'},
                { key: '1-15', label: 'Order Status', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0214_ORDER_STATUS_BEFORE_AFTER_CHECK'},
                { key: '1-16', label: 'Over/Shortage', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0215_ORDER_STATUS_SHORTAGE'},
                { key: '1-17', label: 'Sales Plan(Record)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0216_SALES_MATL_PLAN_QRY'},
                { key: '1-18', label: 'Sales Plan(List)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0217_SALES_MATL_PLAN_LIST'}
            ]
        },
        {
            key: '2', label: 'MRP', icon: 'pi pi-fw pi-clone',  width:'1365px', height:'675px', url1: '',
            children: [
                { key: '2-1', label: 'Material Record', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0301_MATL_RECORD' },
                { key: '2-2', label: 'Material Search', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0302_MATL_SEARCH'},
                { key: '2-3', label: 'MRP Record(Style)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0303_MRP_RECORD_STYLE'},
                { key: '2-4', label: 'MRP Manager', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0305_MRP_MANAGER'},
                { key: '2-6', label: 'MRP Record(Order)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0306_MRP_BY_ORDER'}
            ]
        },
        {
            key: '3', label: 'PURCHASE', icon: 'pi pi-fw pi-clone',  width:'1365px', height:'675px', url1: '',
            children: [
                { key: '3-1', label: 'Purchase Manager', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0401_PURCHASING_MANAGER' },
                { key: '3-4', label: 'STSIN List', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S043001_STSIN_LIST'},
                { key: '3-6', label: 'STSOUT List', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S043101_STSOUT_LIST'},
                { key: '3-3', label: 'Deposit & L/C Manager', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0439_LC_DEPOSIT'},
                { key: '3-7', label: 'Bill Regist', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0419_ENDDING_MATL_AMT_DOMESTIC'},
                { key: '3-8', label: 'Bill Manager', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0423_TAXBILL'}
            ]
        },
        {
            key: '4', label: 'EXPORT/IMPORT', icon: 'pi pi-fw pi-clone',  width:'1365px', height:'675px', url1: '',
            children: [
                { key: '4-1', label: 'Shipment Manager', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0434_SHIPMENT_MANAGER' },
                /*{ key: '4-2', label: '수출등록(국내)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0437_EXPORT_REGIST'},*/
                { key: '4-3', label: '수입등록(국내)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0438_IMPORT_REGIST'},
                { key: '4-8', label: 'Garment Ship', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0513_SHIPPING_LIST'},
                { key: '4-7', label: 'Delay Report', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0450_DELAY_REPORT'},
            ]
        },
        {
            key: '5', label: 'FACTORY IN-OUT', icon: 'pi pi-fw pi-clone', width:'1365px', height:'675px', url1: '',
            children: [
                { key: '5-2', label: 'Clearance_Arrival(BVT)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0518_FACTORY_ARRIVAL?FACTORY=BVT' },
                { key: '5-17', label: 'Clearance_Arrival(ETP)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0518_FACTORY_ARRIVAL?FACTORY=ETP' },
                { key: '5-3', label: 'FAC-IN(Inspection)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0519_INSPECT_REPORT' },
                { key: '5-4', label: 'FAC-IN List', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S051901_FACIN_LIST' },
                { key: '5-5', label: 'Stock Confirm', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0516_STOCK_USE_CONFIRM' },
                { key: '5-6', label: 'Fac-Out Record', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0520_FACOUT_RECORD' },
                { key: '5-7', label: 'Fac-Out List', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S052001_FACOUT_LIST' },
                { key: '5-8', label: 'Production Finish', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0508_CAPABOOK_LIST_BVT' },
                { key: '5-9', label: 'Line Return', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0509_RETURN_MATL' },
                { key: '5-10', label: 'Pendding Shipment', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0531_PENDDING_SHIPMENT' },
                { key: '5-11', label: 'Stock Record', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0521_STOCK_RECORD_NEW' },
                { key: '5-12', label: 'Stock Manager', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0523_STOCK_MANAGER' },
            ]
        },
        {
            key: '6', label: 'COST', icon: 'pi pi-fw pi-clone', width:'1365px', height:'675px', url1: '',
            children: [
                { key: '6-1', label: 'Cost Confirmation', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0610_COST_CONFIRM' },
                { key: '6-2', label: 'CMPT Payment', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0705_CMPT_PAYMENT' },
                { key: '6-3', label: 'Credit Note', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0701_CREDIT_NOTE'},
                { key: '6-4', label: 'Debit Note', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0702_DEBIT_NOTE'},
                { key: '6-5', label: 'Debit Note(B)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0703_DEBIT_NOTE_FACTORY_BVT'},
                { key: '6-7', label: 'Debit Note(E)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S070301_DEBIT_NOTE_FACTORY_ETP'},
                { key: '6-8', label: 'Sample Cost', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0203_SAMPLE_COST' },
                { key: '6-9', label: 'CMPT Confirmation', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0212_NEGO_CMPT'},
            ]
        },
        {
            key: '7', label: 'RECEIVABLES', icon: 'pi pi-fw pi-clone',  width:'1365px', height:'675px', url1: '',
            children: [
                { key: '7-2', label: '매출등록(국내)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0801_DOCU_REGIST_DOMESTIC' },
                { key: '7-3', label: '매출등록(해외)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0802_DOCU_REGIST_OVERSEA' },
                { key: '7-5', label: 'Nego입금등록', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0607_LC_NEGO'},
                { key: '7-7', label: 'TT입금등록', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0707_MAN_INVOICE'},
                { key: '7-6', label: '입금조회', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0608_LC_NEGO_LIST'},
                { key: '7-8', label: '바이어별입금관리', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0708_MANAGE_BUYER_INPUT'},
                { key: '7-9', label: '매출채권조회', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0709_MANAGE_INVOICE_AMT'},
                /*{ key: '7-10', label: '(#)오더수불부', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0710_ORDER_EXPORT_REPORT'}*/
            ]
        }
    ];

    const menu3 = [
                { key: '0-1', label: 'Bank', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0110_KCD_BANK_QRY', children: [] },
                { key: '0-2', label: 'User', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0111_KCD_USER', children: []},
                { key: '0-3', label: 'Size', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0107_KCD_SIZEMST', children: []},
                { key: '0-4', label: 'Buyer', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0113_KCD_BUYER', children: []},
                { key: '0-5', label: 'Suuplier', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0114_KCD_SUPPLIER', children: []},
                { key: '0-6', label: 'Factory', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0101_KCD_FACTORY', children: []},
                { key: '0-7', label: 'Forwarder', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0108_KCD_PLACE', children: []},
                { key: '0-8', label: 'HS_CODE', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0105_KCD_HSCODE', children: []},
                { key: '0-9', label: 'Currency', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0112_KCD_CURRENCY', children: []},
                { key: '0-10', label: 'Currency for Price', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0218_EXCHANGE_RATE_RECORD', children: []},
                { key: '0-11', label: 'Country', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0104_KCD_NATION', children: []},
                { key: '0-12', label: 'Loss', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: '', children: []},
                { key: '1-1', label: 'Style Regist', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0200_KCD_STYLE' },
                { key: '1-2', label: 'Style Cost', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0202_STYLE_COST' },
                { key: '1-3', label: 'Sample Cost', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0203_SAMPLE_COST' },
                { key: '1-4', label: 'Order Manager', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0204_ORDER_LIST'},
                { key: '1-19', label: 'Order Regist', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'800px', url1: 'S020602_ORDER_REG'},
                { key: '1-20', label: 'Order Info', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'800px', url1: 'S020602_ORDER_REG'},
                { key: '1-6', label: 'PO Manager', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S020701_PO_MANAGER'},
                { key: '1-8', label: 'PI Manager', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0205_PI_MANAGER'},
                { key: '1-9', label: 'Capa Record', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0208_CAPABOOK_RECORD_BVT'},
                { key: '1-10', label: 'Capa List', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0209_CAPABOOK_LIST_BVT'},
                { key: '1-13', label: 'CMPT Confirmation', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0212_NEGO_CMPT'},
                { key: '1-14', label: '손익현황', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0213_ORDER_REPORT'},
                { key: '1-15', label: 'Order Status', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0214_ORDER_STATUS_BEFORE_AFTER_CHECK'},
                { key: '1-16', label: 'Over/Shortage', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0215_ORDER_STATUS_SHORTAGE'},
                { key: '1-17', label: 'Sales Plan(Record)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0216_SALES_MATL_PLAN_QRY'},
                { key: '1-18', label: 'Sales Plan(List)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0217_SALES_MATL_PLAN_LIST'},
                { key: '2-1', label: 'Material Record', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0301_MATL_RECORD' },
                { key: '2-2', label: 'Material Search', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0302_MATL_SEARCH'},
                { key: '2-3', label: 'MRP Record(Style)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0303_MRP_RECORD_STYLE'},
                { key: '2-20', label: 'Copy Product', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S030301_COPY_PRODUCT'},
                { key: '2-21', label: 'Style Mrp Search', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S030302_COPY_STYLE'},
                { key: '2-22', label: 'Order Mrp Search', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S030303_MRP_BY_SEARCH'},
                { key: '2-4', label: 'MRP Manager', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0305_MRP_MANAGER'},
                { key: '2-6', label: 'Seq Delete', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S030501_DEL_MRP_PACK'},
                { key: '2-7', label: 'Po History', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S030502_PO_HISTORY'},
                { key: '2-25', label: 'MRP List', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S030513_MRP_LIST'},
                { key: '2-26', label: 'PO List', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S030514_PO_LIST'},
                { key: '2-27', label: 'MRP Pack Down', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S030515_MRP_PACK'},
                { key: '2-8', label: 'Stock Check', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S030503_STOCK_CHECK'},
                { key: '2-9', label: 'PO Revise', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S030504_REVISE'},
                { key: '2-10', label: 'Matl Add', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S030505_PO_RECORD_MATL_ADD'},
                { key: '2-11', label: 'PO Regist(Material)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S030506_NEW_PO_SAMPLE'},
                { key: '2-12', label: 'Make MRP', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S030510_PO_MAKE_MRP'},
                { key: '2-13', label: 'Make MRP(F)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S030512_PO_MAKE_MRP_FIRST'},
                { key: '2-14', label: 'PO History2', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S030511_PO_HISTORY2'},
                { key: '2-5', label: 'MRP Record(Order)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0306_MRP_BY_ORDER'},
                { key: '2-24', label: 'Copy Style', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S030602_MRP_BY_ORDER_STYLE'},
                { key: '3-1', label: 'Purchase Manager', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0401_PURCHASING_MANAGER' },
                { key: '3-12', label: 'Purchase Monitor', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S040100_PUR_MONITOR' },
                { key: '3-10', label: 'Purchase Reg', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S040101_PURCHASER_REG' },
                { key: '3-11', label: 'Purchase Info', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S040102_PURCHASER_INFO' },
                { key: '3-2', label: 'STSIN Record', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0430_STSIN_RECORD'},
                { key: '3-4', label: 'STSIN List', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S043001_STSIN_LIST'},
                { key: '3-5', label: 'STSOUT Record', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0431_STSOUT_RECORD'},
                { key: '3-6', label: 'STSOUT List', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S043101_STSOUT_LIST'},
                { key: '3-3', label: 'Deposit & L/C Manager', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0439_LC_DEPOSIT'},
                { key: '3-7', label: 'Bill Regist', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0419_ENDDING_MATL_AMT_DOMESTIC'},
                { key: '3-8', label: 'Bill Manager', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0423_TAXBILL'},
                { key: '4-1', label: 'Shipment Manager', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0434_SHIPMENT_MANAGER' },
                { key: '4-10', label: 'Shipment Reg', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0433_SHIPMENT_REGIST' },
                { key: '4-11', label: 'Shipment Info', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S043401_SHIPMENT_INFO' },
                { key: '4-12', label: 'Freight Reg', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0440_FREIGHT_REGIST' },
                { key: '4-13', label: 'Shiping Cost', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0435_SHIPPING_COST' },
                { key: '4-14', label: 'Local Cost', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0436_LOCAL_COST' },
                { key: '4-15', label: 'STSIN_INFO', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S043002_STSIN_INFO' },
                { key: '4-2', label: '수출등록(국내)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0437_EXPORT_REGIST'},
                { key: '4-3', label: '수입등록(국내)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0438_IMPORT_REGIST'},
                { key: '4-8', label: 'Garment Ship', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0513_SHIPPING_LIST'},
                { key: '4-7', label: 'Delay Report(#)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0450_DELAY_REPORT'},
                { key: '5-1', label: '관리메인(#)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: '#' },
                { key: '5-2', label: 'Clearance_Arrival(BVT)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0518_FACTORY_ARRIVAL?FACTORY=BVT' },
                { key: '5-17', label: 'Clearance_Arrival(ETP)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0518_FACTORY_ARRIVAL?FACTORY=ETP' },
                { key: '5-3', label: 'FAC-IN(Inspection)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0519_INSPECT_REPORT' },
                { key: '5-4', label: 'FAC-IN List', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S051901_FACIN_LIST' },
                { key: '5-5', label: 'Stock Confirm', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0516_STOCK_USE_CONFIRM' },
                { key: '5-6', label: 'Fac-Out Record', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0520_FACOUT_RECORD' },
                { key: '5-7', label: 'Fac-Out List', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S052001_FACOUT_LIST' },
                { key: '5-8', label: 'Production Finish', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0508_CAPABOOK_LIST_BVT' },
                { key: '5-9', label: 'Line Return', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0509_RETURN_MATL' },
                { key: '5-10', label: 'Pendding Shipment', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0531_PENDDING_SHIPMENT' },
                { key: '5-11', label: 'Stock Record', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0521_STOCK_RECORD_NEW' },
                { key: '5-12', label: 'Stock Manager(#)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0512_STOCK_LIST' },
                { key: '5-13', label: 'Stock I/O History', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0517_STOCK_HISTORY'},
                { key: '6-1', label: 'Cost Confirmation', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0610_COST_CONFIRM' },
                { key: '6-2', label: 'CMPT Payment', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0705_CMPT_PAYMENT' },
                { key: '6-3', label: 'Credit Note', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0701_CREDIT_NOTE'},
                { key: '6-4', label: 'Debit Note', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0702_DEBIT_NOTE'},
                { key: '6-5', label: 'Debit Note(B)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0703_DEBIT_NOTE_FACTORY_BVT'},
                { key: '6-7', label: 'Debit Note(E)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S070301_DEBIT_NOTE_FACTORY_ETP'},
                { key: '6-8', label: 'Sample Cost', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0203_SAMPLE_COST' },
                { key: '6-9', label: 'CMPT Confirmation', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0212_NEGO_CMPT'},
                { key: '7-2', label: '매출등록(국내)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0801_DOCU_REGIST_DOMESTIC' },
                { key: '7-11', label: '세금계산서등록', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S080101_DOCU_REGIST_DOMESTIC' },
                { key: '7-3', label: '매출등록(해외)', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0802_DOCU_REGIST_OVERSEA' },
                { key: '7-5', label: 'Nego입금등록', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0607_LC_NEGO'},
                { key: '7-7', label: 'TT입금등록', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0707_MAN_INVOICE'},
                { key: '7-6', label: '입금조회', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0608_LC_NEGO_LIST'},
                { key: '7-8', label: '바이어별입금관리', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0708_MANAGE_BUYER_INPUT'},
                { key: '7-9', label: '매출채권조회', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0709_MANAGE_INVOICE_AMT'},
                /*{ key: '7-10', label: '(#)오더수불부', icon: 'pi pi-fw pi-user-edit',  width:'1365px', height:'675px', url1: 'S0710_ORDER_EXPORT_REPORT'}*/
    ];


    const addClass = (element, className) => {
        if (element.classList)
            element.classList.add(className);
        else
            element.className += ' ' + className;
    }

    const removeClass = (element, className) => {
        if (element.classList)
            element.classList.remove(className);
        else
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }

    const wrapperClass = classNames('layout-wrapper', {
        'layout-overlay': layoutMode === 'overlay',
        'layout-static': layoutMode === 'static',
        'layout-static-sidebar-inactive': staticMenuInactive && layoutMode === 'static',
        'layout-overlay-sidebar-active': overlayMenuActive && layoutMode === 'overlay',
        'layout-mobile-sidebar-active': mobileMenuActive,
        'p-input-filled': inputStyle === 'filled',
        'p-ripple-disabled': ripple === false,
        'layout-theme-light': layoutColorMode === 'light'
    });

    const onClickIcon = (e) => {
        console.log('onClickIcon');

        if (styleMode === 0) {
          setStyleMode(1);
          
          setStyleVal0({ width: '4rem' });
          setStyleVal({ marginLeft: '4rem' });
        } else {
          setStyleMode(0);
          
          setStyleVal0({ width: '14rem' });
          setStyleVal({ marginLeft: '14rem' });
        }

        // onToggleMenuClick(e);
    }

    const onClickIcon1 = (e) => {
        console.log('onClickIcon');
        // onToggleMenuClick(e);
        // reloadTab(1);
        if (activeIndex2 === 0) { 
           var tObj = iframeKey1;
           setIframeKey1(tObj+1);
        }
        if (activeIndex2 === 1) { 
           var tObj = iframeKey2;
           setIframeKey2(tObj+1);
        }
        if (activeIndex2 === 2) { 
           var tObj = iframeKey3;
           setIframeKey3(tObj+1);
        }
        if (activeIndex2 === 3) { 
           var tObj = iframeKey4;
           setIframeKey4(tObj+1);
        }
        if (activeIndex2 === 4) { 
           var tObj = iframeKey5;
           setIframeKey5(tObj+1);
        }
        if (activeIndex2 === 5) { 
           var tObj = iframeKey6;
           setIframeKey6(tObj+1);
        }
        if (activeIndex2 === 6) { 
           var tObj = iframeKey7;
           setIframeKey7(tObj+1);
        }
        if (activeIndex2 === 7) { 
           var tObj = iframeKey8;
           setIframeKey8(tObj+1);
        }
        if (activeIndex2 === 8) { 
           var tObj = iframeKey9;
           setIframeKey9(tObj+1);
        }
        if (activeIndex2 === 9) { 
           var tObj = iframeKey10;
           setIframeKey10(tObj+1);
        }
        if (activeIndex2 === 10) { 
           var tObj = iframeKey11;
           setIframeKey11(tObj+1);
        }
        if (activeIndex2 === 11) { 
           var tObj = iframeKey12;
           setIframeKey12(tObj+1);
        }
        if (activeIndex2 === 12) { 
           var tObj = iframeKey13;
           setIframeKey13(tObj+1);
        }
        if (activeIndex2 === 13) { 
           var tObj = iframeKey14;
           setIframeKey14(tObj+1);
        }
        if (activeIndex2 === 14) { 
           var tObj = iframeKey15;
           setIframeKey15(tObj+1);
        }
    }

    return (
        <div className="wrapperClass9" onClick={onWrapperClick} >
            <Tooltip ref={copyTooltipRef} target=".block-action-copy" position="bottom" content="Copied to clipboard" event="focus" />

            {/*
            <AppTopbar onToggleMenuClick={onToggleMenuClick} layoutColorMode={layoutColorMode}
                mobileTopbarMenuActive={mobileTopbarMenuActive} onMobileTopbarMenuClick={onMobileTopbarMenuClick} onMobileSubTopbarMenuClick={onMobileSubTopbarMenuClick} />
             */}

            <div className="layout-sidebar" onClick={onSidebarClick} style={styleVal0}>
                {/*
                <AppMenu model={menu} onMenuItemClick={onMenuItemClick} layoutColorMode={layoutColorMode} />
                */}
                {/*
                <Tree value={menuInfo} onSelectionChange={onMenuItemClick} />
                */}

                <div style={{ marginTop: '0rem', width: '13rem', height: '4rem',  marginBottom:'0rem' }}>
                   {/*
                    <div style={{ float:'left', marginTop: '0rem', width: '3.5rem', height: '4rem' }}>
                        <i className="custom-target-icon pi pi-user p-text-secondary "
                            data-pr-position="right"
                            data-pr-at="right+5 top"
                            data-pr-my="left center-2"
                            onClick={onClickIcon}
                            style={{ fontSize: '2.5rem', cursor: 'pointer' }}>
                        </i>
                    </div>
                    */}
                    <div style={{ float:'left', marginTop: '0rem', width: '9.5rem', height: '4rem' }}>
                        <span style={{ width: '9rem' }}>
                            <p style={{ width: '9rem', display: 'inline-block', color:'blue'}} >{userInfo.USER_ID} </p>
                        </span>
                        <span style={{ width: '9rem' }}>
                            <p style={{ width: '9rem', display: 'inline-block', color:'blue' }} >{userInfo.USER_NAME} </p>
                        </span>
                    </div>
                    <div style={{ float:'left', marginTop: '0.6rem', width: '3rem', height: '2rem' }}>
                        <i className="custom-target-icon pi pi-refresh p-text-secondary "
                            data-pr-position="right"
                            data-pr-at="right+5 top"
                            data-pr-my="left center-2"
                            onClick={onClickIcon1}
                            style={{ fontSize: '2rem', cursor: 'pointer'}}>
                        </i>
                    </div>
                    
                </div>
                <div style={{ marginBottom: '0rem', width:'100%', padding:'0'}}>
                      <button style={{ marginBottom: '0.5rem', width:'90%'}} onClick={ () => { window.location.href='/' }}>Log out</button>
                      <button style={{ marginBottom: '1rem', width:'90%'}} onClick={ () => { window.open('https://shints.notion.site/shints-erp-manual?v=abd027845fc846f49081807f183af5ba', 'blank'); }}>Manual</button>
                </div>
                <Tree value={menuInfo} selectionMode="single" selectionKeys={selectedKey} onSelectionChange={(e) => onMenuItemClick(e.value)} />
            </div>

            <div className="layout-main-container9" style={styleVal}>
                <div className="layout-main9">
                    <TabMenu model={tabDatas} activeIndex={activeIndex2} onTabChange={onTabChange1} />
                    <div style={{ height:'62rem', position:'relative' }}>
                    <div className={isTabs1} style={styleVal1} >
                       {/* <Button style={{ padding: '0rem' }} label="Reload" icon="pi pi-check" className="p-button-text" onClick={reloadTab(1)} /> */}
                       <iframe src={iframeUrls1}
                               key={iframeKey1}
                               frameBorder="0"
                               scrolling={iframeS1}
                               
                               height={iframeH1}
                               ref={ref_iframe1}
                               id="id1"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs2}  style={styleVal2} >
                       <iframe src={iframeUrls2}
                               key={iframeKey2}
                               ref={ref_iframe2}
                               frameBorder="0"
                               scrolling={iframeS2}
                               
                               height={iframeH2}
                               id="id2"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs3}   style={styleVal3} >
                       <iframe src={iframeUrls3}
                               key={iframeKey3}
                               ref={ref_iframe3}
                               frameBorder="0"
                               scrolling={iframeS3}
                               
                               height={iframeH3}
                               id="id3"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs4}   style={styleVal4}  >
                       <iframe src={iframeUrls4}
                               key={iframeKey4}
                               ref={ref_iframe4}
                               frameBorder="0"
                               scrolling={iframeS4}
                               
                               height={iframeH4}
                               id="id4"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs5}   style={styleVal5} >
                       <iframe src={iframeUrls5}
                               key={iframeKey5}
                               ref={ref_iframe5}
                               frameBorder="0"
                               scrolling={iframeS5}
                               
                               height={iframeH5}
                               id="id5"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs6}   style={styleVal6} >
                       <iframe src={iframeUrls6}
                               key={iframeKey6}
                               ref={ref_iframe6}
                               frameBorder="0"
                               scrolling={iframeS6}
                               
                               height={iframeH6}
                               id="id6"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs7}   style={styleVal7} >
                       <iframe src={iframeUrls7}
                               key={iframeKey7}
                               ref={ref_iframe7}
                               frameBorder="0"
                               scrolling={iframeS7}
                               
                               height={iframeH7}
                               id="id7"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs8}   style={styleVal8} >
                       <iframe src={iframeUrls8}
                               key={iframeKey8}
                               ref={ref_iframe8}
                               frameBorder="0"
                               scrolling={iframeS8}
                               
                               height={iframeH8}
                               id="id8"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs9}   style={styleVal9} >
                       <iframe src={iframeUrls9}
                               key={iframeKey9}
                               ref={ref_iframe9}
                               frameBorder="0"
                               scrolling={iframeS9}
                               
                               height={iframeH9}
                               id="id9"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs10}   style={styleVal10} >
                       <iframe src={iframeUrls10}
                               key={iframeKey10}
                               ref={ref_iframe10}
                               frameBorder="0"
                               scrolling={iframeS10}
                               
                               height={iframeH10}
                               id="id10"
                               className="myClassname"
                               />
                    </div>

                    <div className={isTabs11}   style={styleVal11} >
                       <iframe src={iframeUrls11}
                               key={iframeKey11}
                               ref={ref_iframe11}
                               frameBorder="0"
                               scrolling={iframeS11}
                               id="id11"
                               className="cover"
                               />
                    </div>
                    
                    </div>
                </div>
            </div>

            <CSSTransition classNames="layout-mask" timeout={{ enter: 200, exit: 200 }} in={mobileMenuActive} unmountOnExit>
                <div className="layout-mask p-component-overlay"></div>
            </CSSTransition>

        </div>
    );

}

export default App;
