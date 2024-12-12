import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { Route, useHistory, useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { AppTopbar } from './AppTopbar';
import { AppFooter } from './AppFooter';
import { AppMenu } from './AppMenu';
import { AppConfig } from './AppConfig';
import { Button } from 'primereact/button';
import { Tree } from 'primereact/tree';

import PrimeReact from 'primereact/api';
import { Tooltip } from 'primereact/tooltip';
import { TabView, TabPanel } from 'primereact/tabview';
import { TabMenu } from 'primereact/tabmenu';
import { Panel } from 'primereact/panel';

import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'prismjs/themes/prism-coy.css';
import './assets/demo/flags/flags.css';
import './assets/demo/Demos.scss';
import './assets/layout/layout.scss';
import './AppMain.scss';
import './TabViewDemo.css';
import Iframe from 'react-iframe'

const AppMain = () => {

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
    const [iframeUrls11, setIframeUrls11] = useState('');
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
    const [styleVal0, setStyleVal0] = useState({ width: '18rem' });

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
    // const [styleVal, setStyleVal] = useState({ position: 'fixed', marginLeft: '18rem' });
    const [styleVal, setStyleVal] = useState({ marginLeft: '18rem' });
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
        let _tabDatas0 =  JSON.parse(localStorage.getItem('tabinfo1'));
        let _tOnes = _tabDatas0.filter((el) => el.idx === argIdx);
        let _tOne = _tOnes[0];
        return (_tOne);
    }

    const unprocTabDatas = (argIdx) => {

        let _tabDatas0 =  JSON.parse(localStorage.getItem('tabinfo1'));

        let _tOnes = _tabDatas0.filter((el) => el.idx === argIdx);
        let _tOne = _tOnes[0];

        let _globalTabDatas =  JSON.parse(localStorage.getItem('tabinfo'));
        console.log("unprocTabDatas:" + _globalTabDatas.length);
        let _tArray = _globalTabDatas.map(el =>
              el.idx === argIdx ? { ...el, url1: '', label: '' } : el 
           );
        localStorage.setItem('tabinfo', JSON.stringify(_tArray, null, 4));

        let _tabDatas = _tArray.filter((el) => el.url1 !== "");
        let _tabDatas1 = _tabDatas.map((el, index) => ({ ...el, tabidx: index, template: headerTemplate }));
        setTabDatas(_tabDatas1);
        localStorage.setItem('tabinfo1', JSON.stringify(_tabDatas1, null, 4));

        console.log(_tOne);
        let _retObj = {};
        _retObj.src = _tOne;
        _retObj.tab = _tabDatas1[_tabDatas1.length-1];
        return (_retObj);
    }

    const onCloseClick = (argIdx) => {
        let _retObj = unprocTabDatas(argIdx);
        // if (argIdx === _retObj.src.idx) {
        console.log('onCloseClick:' + argIdx + ',' + saveIndex2 + ',' + _retObj.src.idx);
        procAllUnVisible();
        if (argIdx === saveIndex2) {
          if (typeof _retObj.tab === 'undefined') {
             ;
          } else {
             procVisible(_retObj.tab.idx, "", "");
             setActiveIndex2(_retObj.tab.tabidx);
             setSaveIndex2(_retObj.tab.idx);
          }
        } else {
          if (typeof _retObj.tab === 'undefined') {
            ;
          } else {
            procVisible(_retObj.tab.idx, "", "");
            setActiveIndex2(_retObj.tab.tabidx);
            setSaveIndex2(_retObj.tab.idx);
          }
        }
    }

    const headerTemplate = (item, options) => {
        return (
           <div className={options.className}>
                <span className={options.labelClassName} target={item.target} onClick={options.onClick}>{item.label}</span>
                <span className={classNames(options.iconClassName, 'pi pi-times')} onClick={(e) => onCloseClick(item.idx)}></span>
           </div>
        );
    }
  
    const makeInits = (argStr) => {
      let _tArray = [];
      let tIdx = 20;
      for (tIdx = 0; tIdx < 20; tIdx ++) {

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

      localStorage.setItem('tabinfo', JSON.stringify(_tArray, null, 4));
    }

    const [usedIndex, setUsedIndex] = useState([]);
    const [unUsedIndex, setUnUsedIndex] = useState(Array.from({ length: 20 }, (_, i) => (
        {  
           idx: i 
        }
    )));


    const getTabViews_0 = (tab) => {
       // let _url1 = "http://localhost:3201/#/" + tab.url1;
       // let _url1 = `${process.env.APP_URL}` + tab.url1;

       // let _url1 = "http://localhost:3288/webapp/mrpapp/index.html#/" + tab.url1;
       let _url1 = "http://localhost:3101/#/" + tab.url1;
       return (
          <TabPanel key={tab.title} header={tab.content} closable >
            <Iframe url={_url1}
                    width="100%"
                    height="850px"
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
       if (tab.url1 === "mgrkcdbank") _component = MgrKcdBank;
       if (tab.url1 === "mgrkcduser") _component = MgrKcdUser;
       if (tab.url1 === "mgrkcdsizemst") _component = MgrKcdSizeMst;
           
       return (
          <TabPanel key={tab.title} header={tab.content} closable >
               <Route path={_path} component={_component} />
          </TabPanel>
       )
    } 

    useEffect(() => {
        // document.documentElement.style.fontSize = '14.5px';
        document.documentElement.style.fontSize = '10.9px';

        var tUserInfo = window.localStorage.getItem('AF_ERP_USERINFO');
        console.log("USER_INFO=>" + tUserInfo);
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
          setIsTabs1('hidden');
        }
        if (idx === 1) {
          setIsTabs2('hidden');
        }
        if (idx === 2) {
          setIsTabs3('hidden');
        }
        if (idx === 3) {
          setIsTabs4('hidden');
        }
        if (idx === 4) {
          setIsTabs5('hidden');
        }
        if (idx === 5) {
          setIsTabs6('hidden');
        }
        if (idx === 6) {
          setIsTabs7('hidden');
        }
        if (idx === 7) {
          setIsTabs8('hidden');
        }
        if (idx === 8) {
          setIsTabs9('hidden');
        }
        if (idx === 9) {
          setIsTabs10('hidden');
        }
        if (idx === 10) {
          setIsTabs11('hidden');
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
    }

    const procVisible = (idx, argUrl, argLabel) => {
        if (idx === 0) {
          setIsTabs1('show0');
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls1(argUrl);
            setIframeTitles1(argLabel);
          }
        }
        if (idx === 1) {
          setIsTabs2('show0');
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls2(argUrl);
            setIframeTitles2(argLabel);
          }
        }
        if (idx === 2) {
          setIsTabs3('show0');
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls3(argUrl);
            setIframeTitles3(argLabel);
          }
        }
        if (idx === 3) {
          setIsTabs4('show0');
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls4(argUrl);
            setIframeTitles4(argLabel);
          }
        }
        if (idx === 4) {
          setIsTabs5('show0');
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls5(argUrl);
            setIframeTitles5(argLabel);
          }
        }
        if (idx === 5) {
          setIsTabs6('show0');
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls6(argUrl);
            setIframeTitles6(argLabel);
          }
        }
        if (idx === 6) {
          setIsTabs7('show0');
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls7(argUrl);
            setIframeTitles7(argLabel);
          }
        }
        if (idx === 7) {
          setIsTabs8('show0');
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls8(argUrl);
            setIframeTitles8(argLabel);
          }
        }
        if (idx === 8) {
          setIsTabs9('show0');
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls9(argUrl);
            setIframeTitles9(argLabel);
          }
        }
        if (idx === 9) {
          setIsTabs10('show0');
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls10(argUrl);
            setIframeTitles10(argLabel);
          }
        }
        if (idx === 10) {
          setIsTabs11('show0');
          if (argUrl === "") {
            ;
          } else {
            setIframeUrls11(argUrl);
            setIframeTitles11(argLabel);
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

    const getTabIndex1 = () => {
        let _tArray = JSON.parse(localStorage.getItem('tabinfo'));
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
        let _tArray = JSON.parse(localStorage.getItem('tabinfo'));
        let _tIdx = 0;
        for (_tIdx = 0; _tIdx < _tArray.length; _tIdx ++) {
          let tOne = _tArray[_tIdx];
          if (tOne.label === event.label) {
             return (tOne);
          }
        }
        let _tObj = {};
         _tObj.idx = -1;
        return (_tObj);
    }

/*
    const onMenuItemClick = (event) => {
*/
    const onMenuItemClick = (argValue) => {
        // console.log(event);

        var tFindObj = {};
        menu1.forEach((col, i) => {
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

        var item = tFindObj1;

        let _tabDatas = [];
        var _findObj0 = findTabIndex1(item);
        if (_findObj0.idx >= 0) { 
          onTabChangeProgram (_findObj0);
          return;
        }
        
        var _retObj0 = getTabIndex1();
        if (_retObj0.idx < 0) return;
      
        var _retObj = procTabDatas(_retObj0.idx, item.url1, item.label);

        procUnVisible(saveIndex2);
        // let _url1 = `${process.env.APP_URL}` + item.url1;

        // let _url1 = "http://localhost:3288/webapp/mrpapp/index.html#/" + item.url1;
        let _url1 = "http://localhost:3201/#/" + item.url1;
        procVisible(_retObj.idx, _url1, item.label);

        console.log('onMennItem:' + saveIndex2 + ',' + _retObj.idx);

        setActiveIndex2(_retObj.tabidx);
        setSaveIndex2(_retObj.idx);

        if (!item.children) {
            setOverlayMenuActive(false);
            setMobileMenuActive(false);
        }
    }

    const procTabDatas = (argIdx, argUrl, argLabel) => {
        let _globalTabDatas =  JSON.parse(localStorage.getItem('tabinfo'));
        console.log("procTabDatas:" + _globalTabDatas.length);
        let _tArray = _globalTabDatas.map(el =>
              el.idx === argIdx ? { ...el, url1: argUrl, label:argLabel } : el 
           );
        localStorage.setItem('tabinfo', JSON.stringify(_tArray, null, 4));

        let _tabDatas = _tArray.filter((el) => el.url1 !== "");
        let _tabDatas1 = _tabDatas.map((el, index) => ({ ...el, tabidx: index, template: headerTemplate }));
        setTabDatas(_tabDatas1);
        localStorage.setItem('tabinfo1', JSON.stringify(_tabDatas1, null, 4));

        console.log(_tabDatas1);
        return (_tabDatas1[_tabDatas1.length-1]);

    }

    const onClickClose = (event) => {
        console.log("onClickClose:tabDatas=>" + tabDatas.length);
    }

    const onTabChange1 = (event) => {
        console.log(event.value.idx);

        let _tArray = JSON.parse(localStorage.getItem('tabinfo1'));
        console.log(_tArray);

        let _tOnes = _tArray.filter((el) => el.idx === event.value.idx);
        let _tOne = _tOnes[0];

        let _tOne1s = _tArray.filter((el) => el.idx === saveIndex2);
        let _tOne1 = _tOne1s[0];

        procUnVisible(_tOne1.idx);
        procVisible(_tOne.idx, "", "");

        console.log("onTabChange1:" + event.value.idx + "," + _tOne.tabidx + "," + _tOne.idx);

        let _tFind = _tArray.filter((el) => el.idx === event.value.idx);
        let _tabIdx = _tFind[0].tabidx;

        setActiveIndex2(_tabIdx);
        setSaveIndex2(_tOne.idx);
    }


    const onTabChangeProgram = (argData) => {
        console.log(argData.idx);

        let _tArray = JSON.parse(localStorage.getItem('tabinfo1'));
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
                { label: 'Sale Matl Plan관리', icon: 'pi pi-fw pi-user-edit', url1: 'S0216_SALES_MATL_PLAN_QRY'},
                { label: 'Sale Matl Plan조회', icon: 'pi pi-fw pi-user-edit', url1: 'S0217_SALES_MATL_PLAN_LIST'}
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
                { label: 'Shippment관리', icon: 'pi pi-fw pi-user-edit', url1: 'S0434_SHIPMENT_MANAGER' },
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
                { label: '관리메인', icon: 'pi pi-fw pi-user-edit', url1: 'S0501_FACTORY_IO_MAIN' },
                { label: 'Clearance_Arrival', icon: 'pi pi-fw pi-user-edit', url1: 'S0518_FACTORY_ARRIVAL' },
                { label: 'Inspection Report', icon: 'pi pi-fw pi-user-edit', url1: 'S0519_INSPECT_REPORT' },
                { label: 'FAC-IN조회', icon: 'pi pi-fw pi-user-edit', url1: 'S0504_FACTORY_INPUT_LIST' },
                { label: '재고확인', icon: 'pi pi-fw pi-user-edit', url1: 'S0516_STOCK_USE_CONFIRM' },
                { label: 'Fac-Out등록', icon: 'pi pi-fw pi-user-edit', url1: 'S0507_FACTORY_OUTPUT_RECORD' },
                { label: 'Fac-Out조회', icon: 'pi pi-fw pi-user-edit', url1: 'S0506_FACTORY_OUTPUT_LIST' },
                { label: '생산종료', icon: 'pi pi-fw pi-user-edit', url1: 'S0508_PRODUCTION_COMPLETE' },
                { label: '반납등록', icon: 'pi pi-fw pi-user-edit', url1: 'S0509_RETURN_MATL' },
                { label: '(*)Pendding Shipment', icon: 'pi pi-fw pi-user-edit', url1: '' },
                { label: '자재재고등록', icon: 'pi pi-fw pi-user-edit', url1: 'S0511_STOCK_RECORD' },
                { label: '자재재고관리', icon: 'pi pi-fw pi-user-edit', url1: 'S0512_STOCK_LIST' },
                { label: 'Stock I/O History', icon: 'pi pi-fw pi-user-edit', url1: 'S0517_STOCK_HISTORY'},
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
                { label: 'Debit Note(F)', icon: 'pi pi-fw pi-user-edit', url1: 'S0703_DEBIT_NOTE_FACTORY_BVT'},
                { label: '(*)수입자재미지급조회', icon: 'pi pi-fw pi-user-edit', url1: ''},
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
                { label: 'Nego입금등록', icon: 'pi pi-fw pi-user-edit', url1: 'S0607_NEGO'},
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
            key: '0', label: 'Base Info Manage', url1: '', icon: 'pi pi-fw pi-clone',
            children: [
                { key: '0-1', label: 'Bank', icon: 'pi pi-fw pi-user-edit', url1: 'S0110_KCD_BANK_QRY', children: [] },
                { key: '0-3', label: 'Size', icon: 'pi pi-fw pi-user-edit', url1: 'S0107_KCD_SIZEMST', children: []},
                { key: '0-4', label: 'Buyer', icon: 'pi pi-fw pi-user-edit', url1: 'S0113_KCD_BUYER', children: []},
                { key: '0-5', label: 'Suuplier', icon: 'pi pi-fw pi-user-edit', url1: 'S0114_KCD_SUPPLIER', children: []},
                { key: '0-6', label: 'Factory', icon: 'pi pi-fw pi-user-edit', url1: 'S0101_KCD_FACTORY', children: []},
                { key: '0-7', label: 'Forwarder', icon: 'pi pi-fw pi-user-edit', url1: 'S0108_KCD_PLACE', children: []},
                { key: '0-8', label: 'HS_CODE', icon: 'pi pi-fw pi-user-edit', url1: 'S0105_KCD_HSCODE', children: []},
                { key: '0-9', label: 'Currency', icon: 'pi pi-fw pi-user-edit', url1: 'S0112_KCD_CURRENCY', children: []},
                { key: '0-10', label: 'Currency for Price', icon: 'pi pi-fw pi-user-edit', url1: 'S0218_EXCHANGE_RATE_RECORD', children: []},
                { key: '0-11', label: 'Country', icon: 'pi pi-fw pi-user-edit', url1: 'S0104_KCD_NATION', children: []},
                { key: '0-12', label: 'Loss', icon: 'pi pi-fw pi-user-edit', url1: '', children: []},
            ]
        },
        {
            key: '1', label: 'Order Manage', url1: '',  icon: 'pi pi-fw pi-clone',
            children: [
                { key: '1-1', label: 'Style Regist', icon: 'pi pi-fw pi-user-edit', url1: 'S0200_KCD_STYLE' },
                { key: '1-2', label: 'Style Cost', icon: 'pi pi-fw pi-user-edit', url1: 'S0202_STYLE_COST' },
                { key: '1-3', label: 'Sample Cost', icon: 'pi pi-fw pi-user-edit', url1: 'S0203_SAMPLE_COST' },
                { key: '1-4', label: 'Order Manger', icon: 'pi pi-fw pi-user-edit', url1: 'S0204_ORDER_LIST'},
                { key: '1-19', label: 'Order Regist', icon: 'pi pi-fw pi-user-edit', url1: 'S020602_ORDER_REG'},
                { key: '1-6', label: 'PO Manager', icon: 'pi pi-fw pi-user-edit', url1: 'S020701_PO_MANAGER'},
                { key: '1-8', label: 'PI Manager', icon: 'pi pi-fw pi-user-edit', url1: 'S0205_PI_MANAGER'},
                { key: '1-9', label: 'Capa Record', icon: 'pi pi-fw pi-user-edit', url1: 'S0208_CAPABOOK_RECORD_BVT'},
                { key: '1-10', label: 'Capa List', icon: 'pi pi-fw pi-user-edit', url1: 'S0209_CAPABOOK_LIST_BVT'},
                { key: '1-13', label: 'CMPT Confirmation', icon: 'pi pi-fw pi-user-edit', url1: 'S0212_NEGO_CMPT'},
                { key: '1-14', label: '손익현황', icon: 'pi pi-fw pi-user-edit', url1: 'S0213_ORDER_REPORT'},
                { key: '1-15', label: 'Order Status', icon: 'pi pi-fw pi-user-edit', url1: 'S0214_ORDER_STATUS_BEFORE_AFTER_CHECK'},
                { key: '1-16', label: 'Over/Shortage', icon: 'pi pi-fw pi-user-edit', url1: 'S0215_ORDER_STATUS_SHORTAGE'},
                { key: '1-17', label: 'Sale Matl Plan(Record)', icon: 'pi pi-fw pi-user-edit', url1: 'S0216_SALES_MATL_PLAN_QRY'},
                { key: '1-18', label: 'Sale Matl Plan(List)', icon: 'pi pi-fw pi-user-edit', url1: 'S0217_SALES_MATL_PLAN_LIST'}
            ]
        },
        {
            key: '2', label: 'MRP Manage', icon: 'pi pi-fw pi-clone', url1: '',
            children: [
                { key: '2-1', label: 'Material Record', icon: 'pi pi-fw pi-user-edit', url1: 'S0301_MATL_RECORD' },
                { key: '2-2', label: 'Material Search', icon: 'pi pi-fw pi-user-edit', url1: 'S0302_MATL_SEARCH'},
                { key: '2-3', label: 'MRP Record(Style)', icon: 'pi pi-fw pi-user-edit', url1: 'S0303_MRP_RECORD_STYLE'},
                { key: '2-4', label: 'MRP Manager', icon: 'pi pi-fw pi-user-edit', url1: 'S0305_MRP_MANAGER'},
                { key: '2-5', label: 'MRP Record(Order)', icon: 'pi pi-fw pi-user-edit', url1: 'S0306_MRP_BY_ORDER'}
            ]
        },
        {
            key: '3', label: 'Purchase Manage', icon: 'pi pi-fw pi-clone', url1: '',
            children: [
                { key: '3-1', label: 'Purchase Manager', icon: 'pi pi-fw pi-user-edit', url1: 'S0401_PURCHASING_MANAGER' },
                { key: '3-2', label: 'STSIN Record', icon: 'pi pi-fw pi-user-edit', url1: 'S0430_STSIN_RECORD'},
                { key: '3-4', label: 'STSIN List', icon: 'pi pi-fw pi-user-edit', url1: 'S043001_STSIN_LIST'},
                { key: '3-5', label: 'STSOUT Record', icon: 'pi pi-fw pi-user-edit', url1: 'S0431_STSOUT_RECORD'},
                { key: '3-6', label: 'STSOUT List', icon: 'pi pi-fw pi-user-edit', url1: 'S043101_STSOUT_LIST'},
                { key: '3-3', label: 'LC & Deposit', icon: 'pi pi-fw pi-user-edit', url1: 'S0439_LC_DEPOSIT'},
                { key: '3-7', label: 'Bill Regist', icon: 'pi pi-fw pi-user-edit', url1: 'S0419_ENDDING_MATL_AMT_DOMESTIC'},
                { key: '3-8', label: 'Bill Manager', icon: 'pi pi-fw pi-user-edit', url1: 'S0423_TAXBILL'}
            ]
        },
        {
            key: '4', label: 'Import/Export', icon: 'pi pi-fw pi-clone', url1: '',
            children: [
                { key: '4-1', label: 'Shippment Manager', icon: 'pi pi-fw pi-user-edit', url1: 'S0434_SHIPMENT_MANAGER' },
                { key: '4-2', label: '수출등록(국내)', icon: 'pi pi-fw pi-user-edit', url1: 'S0437_EXPORT_REGIST'},
                { key: '4-3', label: '수입등록(국내)', icon: 'pi pi-fw pi-user-edit', url1: 'S0438_IMPORT_REGIST'},
                { key: '4-8', label: 'Garment Ship', icon: 'pi pi-fw pi-user-edit', url1: 'S0513_SHIPPING_LIST'},
                { key: '4-6', label: 'Garment Invoice List(#)', icon: 'pi pi-fw pi-user-edit', url1: '#'},
                { key: '4-7', label: 'Delay Report(#)', icon: 'pi pi-fw pi-user-edit', url1: '#'}
            ]
        },
        {
            key: '5', label: 'Factory In/Out', icon: 'pi pi-fw pi-clone',url1: '',
            children: [
                { key: '5-1', label: '관리메인(#)', icon: 'pi pi-fw pi-user-edit', url1: '#' },
                { key: '5-2', label: 'Clearance_Arrival(BVT)', icon: 'pi pi-fw pi-user-edit', url1: 'S0518_FACTORY_ARRIVAL' },
                { key: '5-16', label: 'Clearance_Arrival(ETP)', icon: 'pi pi-fw pi-user-edit', url1: 'S051801_FACTORY_ARRIVAL_ETP' },
                { key: '5-3', label: 'Inspection Report', icon: 'pi pi-fw pi-user-edit', url1: 'S0519_INSPECT_REPORT' },
                { key: '5-4', label: 'FAC-IN List', icon: 'pi pi-fw pi-user-edit', url1: 'S051901_FACIN_LIST' },
                { key: '5-5', label: 'Stock Check', icon: 'pi pi-fw pi-user-edit', url1: 'S0516_STOCK_USE_CONFIRM' },
                { key: '5-6', label: 'Fac-Out Record', icon: 'pi pi-fw pi-user-edit', url1: 'S0520_FACOUT_RECORD' },
                { key: '5-7', label: 'Fac-Out List', icon: 'pi pi-fw pi-user-edit', url1: 'S052001_FACOUT_LIST' },
                { key: '5-8', label: 'Production Finish', icon: 'pi pi-fw pi-user-edit', url1: 'S0508_CAPABOOK_LIST_BVT' },
                { key: '5-9', label: 'Return Matl', icon: 'pi pi-fw pi-user-edit', url1: 'S0509_RETURN_MATL' },
                { key: '5-10', label: 'Pendding Shipment(#)', icon: 'pi pi-fw pi-user-edit', url1: '' },
                { key: '5-11', label: 'Stock Record', icon: 'pi pi-fw pi-user-edit', url1: 'S0521_STOCK_RECORD_NEW' },
                { key: '5-16', label: 'Stock List', icon: 'pi pi-fw pi-user-edit', url1: 'S0522_STOCK_LIST' },
                { key: '5-12', label: 'Stock Manager(#)', icon: 'pi pi-fw pi-user-edit', url1: 'S0512_STOCK_LIST' },
                { key: '5-13', label: 'Stock I/O History', icon: 'pi pi-fw pi-user-edit', url1: 'S0517_STOCK_HISTORY'},
            ]
        },
        {
            key: '6', label: '지출관리', icon: 'pi pi-fw pi-clone',url1: '',
            children: [
                { key: '6-1', label: 'Cost Confirmation', icon: 'pi pi-fw pi-user-edit', url1: 'S0610_COST_CONFIRM' },
                { key: '6-2', label: 'CMPT Payment', icon: 'pi pi-fw pi-user-edit', url1: 'S0705_CMPT_PAYMENT' },
                { key: '6-3', label: 'Credit Note', icon: 'pi pi-fw pi-user-edit', url1: 'S0701_CREDIT_NOTE'},
                { key: '6-4', label: 'Debit Note', icon: 'pi pi-fw pi-user-edit', url1: 'S0702_DEBIT_NOTE'},
                { key: '6-5', label: 'Debit Note(F)', icon: 'pi pi-fw pi-user-edit', url1: 'S0703_DEBIT_NOTE_FACTORY_BVT'},
                { key: '6-7', label: 'Debit Note(E)', icon: 'pi pi-fw pi-user-edit', url1: 'S070301_DEBIT_NOTE_FACTORY_ETP'},
                { key: '6-6', label: '(#)수입자재미지급조회', icon: 'pi pi-fw pi-user-edit', url1: ''},
            ]
        },
        {
            key: '7', label: '매출관리', icon: 'pi pi-fw pi-clone', url1: '',
            children: [
                { key: '7-1', label: '(#)관세환급관리', icon: 'pi pi-fw pi-user-edit', url1: 'S0609_MANAGE_RETURN_TAX' },
                { key: '7-2', label: '매출등록(국내)', icon: 'pi pi-fw pi-user-edit', url1: 'S0801_DOCU_REGIST_DOMESTIC' },
                { key: '7-3', label: '매출등록(해외)', icon: 'pi pi-fw pi-user-edit', url1: 'S0802_DOCU_REGIST_OVERSEA' },
                { key: '7-5', label: 'Nego입금등록', icon: 'pi pi-fw pi-user-edit', url1: 'S0607_NEGO'},
                { key: '7-7', label: 'TT입금등록', icon: 'pi pi-fw pi-user-edit', url1: 'S0707_MAN_INVOICE'},
                { key: '7-6', label: '(#)입금조회', icon: 'pi pi-fw pi-user-edit', url1: 'S0608_NEGO_LIST'},
                { key: '7-8', label: '바이어별입금관리', icon: 'pi pi-fw pi-user-edit', url1: 'S0708_MANAGE_BUYER_INPUT'},
                { key: '7-9', label: '(#)매출채권조회', icon: 'pi pi-fw pi-user-edit', url1: 'S0709_MANAGE_INVOICE_AMT'},
                { key: '7-10', label: '(#)오더수불부', icon: 'pi pi-fw pi-user-edit', url1: 'S0710_ORDER_EXPORT_REPORT'}
            ]
        }
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
          
          setStyleVal0({ width: '18rem' });
          setStyleVal({ marginLeft: '18rem' });
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
                <Tree value={menu1} onSelectionChange={onMenuItemClick} />
                */}

                <div style={{ marginTop: '0rem', width: '17rem', height: '4rem' }}>
                    <div style={{ float:'left', marginTop: '0rem', width: '3.5rem', height: '4rem' }}>
                        <i className="custom-target-icon pi pi-user p-text-secondary "
                            data-pr-position="right"
                            data-pr-at="right+5 top"
                            data-pr-my="left center-2"
                            onClick={onClickIcon}
                            style={{ fontSize: '2.5rem', cursor: 'pointer' }}>
                        </i>
                    </div>
                    <div style={{ float:'left', marginTop: '0rem', width: '9.5rem', height: '4rem' }}>
                        <span style={{ width: '9rem' }}>
                            <p style={{ width: '9rem', display: 'inline-block' }} >User:Test </p>
                        </span>
                        <span style={{ width: '9rem' }}>
                            <p style={{ width: '9rem', display: 'inline-block' }} >Team:Test </p>
                        </span>
                    </div>
                    <div style={{ float:'left', marginTop: '0rem', width: '3.5rem', height: '4rem' }}>
                        <i className="custom-target-icon pi pi-refresh p-text-secondary "
                            data-pr-position="right"
                            data-pr-at="right+5 top"
                            data-pr-my="left center-2"
                            onClick={onClickIcon1}
                            style={{ fontSize: '2.5rem', cursor: 'pointer' }}>
                        </i>
                    </div>
                </div>
                <Tree value={menu1} selectionMode="single" selectionKeys={selectedKey} onSelectionChange={(e) => onMenuItemClick(e.value)} />
            </div>

            <div className="layout-main-container9" style={styleVal}>
                <div className="layout-main9">
                    <TabMenu model={tabDatas} activeIndex={activeIndex2} onTabChange={onTabChange1} />
                    <div className={isTabs1}>
                       {/* <Button style={{ padding: '0rem' }} label="Reload" icon="pi pi-check" className="p-button-text" onClick={reloadTab(1)} /> */}
                       <iframe src={iframeUrls1}
                               key={iframeKey1}
                               frameborder="0"
                               scrolling="no"
                               width="1170px"
                               height="850px"
                               ref={ref_iframe1}
                               id="id1"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs2} >
                       <iframe src={iframeUrls2}
                               key={iframeKey2}
                               ref={ref_iframe2}
                               frameborder="0"
                               scrolling="no"
                               width="1170px"
                               height="850px"
                               id="id2"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs3} >
                       <iframe src={iframeUrls3}
                               key={iframeKey3}
                               ref={ref_iframe3}
                               frameborder="0"
                               scrolling="no"
                               width="1170px"
                               height="850px"
                               id="id3"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs4} >
                       <iframe src={iframeUrls4}
                               key={iframeKey4}
                               ref={ref_iframe4}
                               frameborder="0"
                               scrolling="no"
                               width="1170px"
                               height="850px"
                               id="id4"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs5} >
                       <iframe src={iframeUrls5}
                               key={iframeKey5}
                               ref={ref_iframe5}
                               frameborder="0"
                               scrolling="no"
                               width="1170px"
                               height="850px"
                               id="id5"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs6} >
                       <iframe src={iframeUrls6}
                               key={iframeKey6}
                               ref={ref_iframe6}
                               frameborder="0"
                               scrolling="no"
                               width="1170px"
                               height="850px"
                               id="id6"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs7} >
                       <iframe src={iframeUrls7}
                               key={iframeKey7}
                               ref={ref_iframe7}
                               frameborder="0"
                               scrolling="no"
                               width="1170px"
                               height="850px"
                               id="id7"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs8} >
                       <iframe src={iframeUrls8}
                               key={iframeKey8}
                               ref={ref_iframe8}
                               frameborder="0"
                               scrolling="no"
                               width="1170px"
                               height="850px"
                               id="id8"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs9} >
                       <iframe src={iframeUrls9}
                               key={iframeKey9}
                               ref={ref_iframe9}
                               frameborder="0"
                               scrolling="no"
                               width="1170px"
                               height="850px"
                               id="id9"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs10} >
                       <iframe src={iframeUrls10}
                               key={iframeKey10}
                               ref={ref_iframe10}
                               frameborder="0"
                               scrolling="no"
                               width="1170px"
                               height="850px"
                               id="id10"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs11} >
                       <iframe src={iframeUrls11}
                               key={iframeKey11}
                               ref={ref_iframe11}
                               frameborder="0"
                               scrolling="no"
                               width="1170px"
                               height="850px"
                               id="id11"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs12} >
                       <iframe src={iframeUrls12}
                               key={iframeKey12}
                               ref={ref_iframe12}
                               frameborder="0"
                               scrolling="no"
                               width="1170px"
                               height="850px"
                               id="id12"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs13} >
                       <iframe src={iframeUrls13}
                               key={iframeKey13}
                               ref={ref_iframe13}
                               frameborder="0"
                               scrolling="no"
                               width="1170px"
                               height="850px"
                               id="id13"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs14} >
                       <iframe src={iframeUrls14}
                               key={iframeKey14}
                               ref={ref_iframe14}
                               frameborder="0"
                               scrolling="no"
                               width="1170px"
                               height="850px"
                               id="id14"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs15} >
                       <iframe src={iframeUrls15}
                               key={iframeKey15}
                               ref={ref_iframe15}
                               frameborder="0"
                               scrolling="no"
                               width="1170px"
                               height="850px"
                               id="id15"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs16} >
                       <iframe src={iframeUrls16}
                               key={iframeKey16}
                               ref={ref_iframe16}
                               frameborder="0"
                               scrolling="no"
                               width="1170px"
                               height="850px"
                               id="id16"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs17} >
                       <iframe src={iframeUrls17}
                               key={iframeKey17}
                               ref={ref_iframe17}
                               frameborder="0"
                               scrolling="no"
                               width="1170px"
                               height="850px"
                               id="id17"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs18} >
                       <iframe src={iframeUrls18}
                               key={iframeKey18}
                               ref={ref_iframe18}
                               frameborder="0"
                               scrolling="no"
                               width="1170px"
                               height="850px"
                               id="id18"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs19} >
                       <iframe src={iframeUrls19}
                               key={iframeKey19}
                               ref={ref_iframe19}
                               frameborder="0"
                               scrolling="no"
                               width="1170px"
                               height="850px"
                               id="id19"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs20} >
                       <iframe src={iframeUrls20}
                               key={iframeKey20}
                               ref={ref_iframe20}
                               frameborder="0"
                               scrolling="no"
                               width="1170px"
                               height="850px"
                               id="id20"
                               className="myClassname"
                               />
                    </div>
                </div>

                <AppFooter layoutColorMode={layoutColorMode} />
            </div>

            <CSSTransition classNames="layout-mask" timeout={{ enter: 200, exit: 200 }} in={mobileMenuActive} unmountOnExit>
                <div className="layout-mask p-component-overlay"></div>
            </CSSTransition>

        </div>
    );

}

export default App;