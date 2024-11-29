import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { Route, useHistory, useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { AppTopbar } from './AppTopbar';
import { AppFooter } from './AppFooter';
import { AppMenu } from './AppMenu';
import { AppConfig } from './AppConfig';

import MgrKcdBank from './pages/MgrKcdBank';
import MgrKcdUser from './pages/MgrKcdUser';
import MgrKcdSizeMst from './pages/MgrKcdSizeMst';

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
import './App.scss';
import './TabViewDemo.css';
import Iframe from 'react-iframe'

const App = () => {
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


    const copyTooltipRef = useRef();
    const location = useLocation();
    const history = useHistory();

    PrimeReact.ripple = true;

    let menuClick = false;
    let mobileTopbarMenuClick = false;

    const iframe1 = useRef(null);
    const iframe2 = useRef(null);
    const iframe3 = useRef(null);

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
          procVisible(_retObj.tab.idx, "", "");
          setActiveIndex2(_retObj.tab.tabidx);
          setSaveIndex2(_retObj.tab.idx);
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
       let _url1 = "http://localhost:3000/#/" + tab.url1;
       return (
          <TabPanel key={tab.title} header={tab.content} closable >
            <Iframe url={_url1}
                    width="100%"
                    height="1000px"
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
          if (tOne.label === event.item.label) {
             return (tOne);
          }
        }
        let _tObj = {};
         _tObj.idx = -1;
        return (_tObj);
    }

    const onMenuItemClick = (event) => {

        let _tabDatas = [];
        var _findObj0 = findTabIndex1(event);
        if (_findObj0.idx >= 0) { 
          onTabChangeProgram (_findObj0);
          return;
        }
        
        var _retObj0 = getTabIndex1();
        if (_retObj0.idx < 0) return;
      
        var _retObj = procTabDatas(_retObj0.idx, event.item.url1, event.item.label);

        procUnVisible(saveIndex2);
        procVisible(_retObj.idx, "http://localhost:3000/#/" + event.item.url1, event.item.label);

        console.log('onMennItem:' + saveIndex2 + ',' + _retObj.idx);

        setActiveIndex2(_retObj.tabidx);
        setSaveIndex2(_retObj.idx);

        if (!event.item.items) {
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
                { label: '은행계좌관리', icon: 'pi pi-fw pi-user-edit', url1: 'mgrkcdbank' },
                { label: '사용자관리', icon: 'pi pi-fw pi-user-edit', url1: 'mgrkcduser' },
                { label: '사이즈관리', icon: 'pi pi-fw pi-user-edit', url1: 'mgrkcdsizemst'},
                { label: '바이어관리', icon: 'pi pi-fw pi-user-edit', url1: 'mgrkcdbuyer'},
                { label: '공급사관리', icon: 'pi pi-fw pi-user-edit', url1: 'mgrkcdvendor'},
                { label: '공장관리', icon: 'pi pi-fw pi-user-edit', url1: 'mgrkcdfactory'},
                { label: '창고관리', icon: 'pi pi-fw pi-user-edit', url1: 'mgrkcdplace'}
            ]
        },
        {
            label: '영업관리', icon: 'pi pi-fw pi-clone',
            items: [
                { label: '스타일관리', icon: 'pi pi-fw pi-user-edit', url1: 'mgrkcdstyle' },
                { label: '주문관리', icon: 'pi pi-fw pi-user-edit', url1: 'mgrksvordermst'}
            ]
        },
        {
            label: '자재관리', icon: 'pi pi-fw pi-clone',
            items: [
                { label: '자재관리', icon: 'pi pi-fw pi-user-edit', url1: 'mgrkcdmatlmst' },
                { label: '제품관리', icon: 'pi pi-fw pi-user-edit', url1: 'mgrksvprodmem'}
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

    return (
        <div className={wrapperClass} onClick={onWrapperClick}>
            <Tooltip ref={copyTooltipRef} target=".block-action-copy" position="bottom" content="Copied to clipboard" event="focus" />

            <AppTopbar onToggleMenuClick={onToggleMenuClick} layoutColorMode={layoutColorMode}
                mobileTopbarMenuActive={mobileTopbarMenuActive} onMobileTopbarMenuClick={onMobileTopbarMenuClick} onMobileSubTopbarMenuClick={onMobileSubTopbarMenuClick} />

            <div className="layout-sidebar" onClick={onSidebarClick}>
                <AppMenu model={menu} onMenuItemClick={onMenuItemClick} layoutColorMode={layoutColorMode} />
            </div>

            <div className="layout-main-container">
                <div className="layout-main">
                    <TabMenu model={tabDatas} activeIndex={activeIndex2} onTabChange={onTabChange1} />
                    <div className={isTabs1} >
                       <iframe src={iframeUrls1}
                               width="100%"
                               height="1000px"
                               id="id1"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs2} >
                       <iframe src={iframeUrls2}
                               width="100%"
                               height="1000px"
                               id="id2"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs3} >
                       <iframe src={iframeUrls3}
                               width="100%"
                               height="1000px"
                               id="id3"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs4} >
                       <iframe src={iframeUrls4}
                               width="100%"
                               height="1000px"
                               id="id4"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs5} >
                       <iframe src={iframeUrls5}
                               width="100%"
                               height="1000px"
                               id="id5"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs6} >
                       <iframe src={iframeUrls6}
                               width="100%"
                               height="1000px"
                               id="id6"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs7} >
                       <iframe src={iframeUrls7}
                               width="100%"
                               height="1000px"
                               id="id7"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs8} >
                       <iframe src={iframeUrls8}
                               width="100%"
                               height="1000px"
                               id="id8"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs9} >
                       <iframe src={iframeUrls9}
                               width="100%"
                               height="1000px"
                               id="id9"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs10} >
                       <iframe src={iframeUrls10}
                               width="100%"
                               height="1000px"
                               id="id10"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs11} >
                       <iframe src={iframeUrls11}
                               width="100%"
                               height="1000px"
                               id="id11"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs12} >
                       <iframe src={iframeUrls12}
                               width="100%"
                               height="1000px"
                               id="id12"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs13} >
                       <iframe src={iframeUrls13}
                               width="100%"
                               height="1000px"
                               id="id13"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs14} >
                       <iframe src={iframeUrls14}
                               width="100%"
                               height="1000px"
                               id="id14"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs15} >
                       <iframe src={iframeUrls15}
                               width="100%"
                               height="1000px"
                               id="id15"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs16} >
                       <iframe src={iframeUrls16}
                               width="100%"
                               height="1000px"
                               id="id16"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs17} >
                       <iframe src={iframeUrls17}
                               width="100%"
                               height="1000px"
                               id="id17"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs18} >
                       <iframe src={iframeUrls18}
                               width="100%"
                               height="1000px"
                               id="id18"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs19} >
                       <iframe src={iframeUrls19}
                               width="100%"
                               height="1000px"
                               id="id19"
                               className="myClassname"
                               />
                    </div>
                    <div className={isTabs20} >
                       <iframe src={iframeUrls20}
                               width="100%"
                               height="1000px"
                               id="id20"
                               className="myClassname"
                               />
                    </div>
                </div>

                <AppFooter layoutColorMode={layoutColorMode} />
            </div>

            <AppConfig rippleEffect={ripple} onRippleEffect={onRipple} inputStyle={inputStyle} onInputStyleChange={onInputStyleChange}
                layoutMode={layoutMode} onLayoutModeChange={onLayoutModeChange} layoutColorMode={layoutColorMode} onColorModeChange={onColorModeChange} />

            <CSSTransition classNames="layout-mask" timeout={{ enter: 200, exit: 200 }} in={mobileMenuActive} unmountOnExit>
                <div className="layout-mask p-component-overlay"></div>
            </CSSTransition>

        </div>
    );

}

export default App;
