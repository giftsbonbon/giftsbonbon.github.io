; /* /bitrix/js/main/core/core.min.js?149703842673097*/
; /* /bitrix/js/main/core/core_ajax.js?149703842635797*/
; /* /bitrix/js/main/json/json2.min.js?14970384273467*/
; /* /bitrix/js/main/core/core_ls.min.js?14970384267365*/
; /* /bitrix/js/main/session.js?14970384283642*/
; /* /bitrix/js/main/core/core_window.js?149703842696650*/
; /* /bitrix/js/main/core/core_fx.min.js?14970384269768*/
; /* /bitrix/js/main/core/core_popup.min.js?149703842639198*/
; /* /bitrix/js/main/core/core_date.min.js?149703842634241*/
; /* /bitrix/js/main/utils.min.js?149703842719858*/

; /* Start:"a:4:{s:4:"full";s:48:"http://atrspb.com/bitrix/js/main/core/core.min.js?149703842673097";s:6:"source";s:28:"core.js"/*tpa=http://atrspb.com/bitrix/js/main/core/core.js*/;s:3:"min";s:32:"core.min.js"/*tpa=http://atrspb.com/bitrix/js/main/core/core.min.js*/;s:3:"map";s:32:"core.map.js"/*tpa=http://atrspb.com/bitrix/js/main/core/core.map.js*/;}"*/
(function(window){if(!!window.BX&&!!window.BX.extend)return;var _bxtmp;if(!!window.BX){_bxtmp=window.BX}window.BX=function(e,t){if(BX.type.isNotEmptyString(e)){var n;if(!!t&&null!=NODECACHE[e])n=NODECACHE[e];n=n||document.getElementById(e);if(!!t)NODECACHE[e]=n;return n}else if(BX.type.isDomNode(e))return e;else if(BX.type.isFunction(e))return BX.ready(e);return null};BX.debugEnableFlag=true;BX.message=function(e){if(BX.type.isString(e)){if(typeof BX.message[e]=="undefined"){BX.onCustomEvent("onBXMessageNotFound",[e]);if(typeof BX.message[e]=="undefined"){BX.debug("message undefined: "+e);BX.message[e]=""}}return BX.message[e]}else{for(var t in e){if(e.hasOwnProperty(t)){BX.message[t]=e[t]}}return true}};if(!!_bxtmp){for(var i in _bxtmp){if(_bxtmp.hasOwnProperty(i)){if(!BX[i]){BX[i]=_bxtmp[i]}else if(i=="message"){for(var j in _bxtmp[i]){if(_bxtmp[i].hasOwnProperty(j)){BX.message[j]=_bxtmp[i][j]}}}}}_bxtmp=null}var __readyHandler=null,readyBound=false,readyList=[],proxySalt=Math.random(),proxyId=1,proxyList=[],NODECACHE={},deniedEvents=[],eventsList=[],customEvents={},garbageCollectors=[],cssList=[],cssInit=false,jsList=[],jsInit=false,bSafari=navigator.userAgent.toLowerCase().indexOf("webkit")!=-1,bOpera=navigator.userAgent.toLowerCase().indexOf("opera")!=-1,bFirefox=navigator.userAgent.toLowerCase().indexOf("firefox")!=-1,bChrome=navigator.userAgent.toLowerCase().indexOf("chrome")!=-1,bIE=document.attachEvent&&!bOpera,r={script:/<script([^>]*)>/gi,script_end:/<\/script>/gi,script_src:/src=["\']([^"\']+)["\']/i,script_type:/type=["\']([^"\']+)["\']/i,space:/\s+/,ltrim:/^[\s\r\n]+/g,rtrim:/[\s\r\n]+$/g,style:/<link.*?(rel="stylesheet"|type="text\/css")[^>]*>/i,style_href:/href=["\']([^"\']+)["\']/i},eventTypes={click:"MouseEvent",dblclick:"MouseEvent",mousedown:"MouseEvent",mousemove:"MouseEvent",mouseout:"MouseEvent",mouseover:"MouseEvent",mouseup:"MouseEvent",focus:"MouseEvent",blur:"MouseEvent"},lastWait=[],CHECK_FORM_ELEMENTS={tagName:/^INPUT|SELECT|TEXTAREA|BUTTON$/i},PRELOADING=1,PRELOADED=2,LOADING=3,LOADED=4,assets={},isAsync=null;BX.MSLEFT=1;BX.MSMIDDLE=2;BX.MSRIGHT=4;BX.ext=function(e){for(var t in e){if(e.hasOwnProperty(t)){this[t]=e[t]}}};BX.extend=function(e,t){var n=function(){};n.prototype=t.prototype;e.prototype=new n;e.prototype.constructor=e;e.superclass=t.prototype;if(t.prototype.constructor==Object.prototype.constructor){t.prototype.constructor=t}};BX.namespace=function(e){var t=e.split(".");var n=BX;if(t[0]==="BX"){t=t.slice(1)}for(var i=0;i<t.length;i++){if(typeof n[t[i]]==="undefined"){n[t[i]]={}}n=n[t[i]]}return n};BX.debug=function(){if(BX.debugStatus()){if(window.console&&window.console.log)window.console.log("BX.debug: ",arguments.length>0?arguments:arguments[0]);if(window.console&&window.console.trace)console.trace()}};BX.debugEnable=function(e){e=typeof e=="boolean"?e:true;BX.debugEnableFlag=e};BX.debugStatus=function(){return BX.debugEnableFlag||true};BX.is_subclass_of=function(e,t){if(e instanceof t)return true;if(t.superclass)return BX.is_subclass_of(e,t.superclass);return false};BX.clearNodeCache=function(){NODECACHE={};return false};BX.bitrix_sessid=function(){return BX.message("bitrix_sessid")};BX.create=function(e,t,n){n=n||document;if(null==t&&typeof e=="object"&&e.constructor!==String){t=e;e=e.tag}var i;if(BX.browser.IsIE()&&!BX.browser.IsIE9()&&null!=t&&null!=t.props&&(t.props.name||t.props.id)){i=n.createElement("<"+e+(t.props.name?' name="'+t.props.name+'"':"")+(t.props.id?' id="'+t.props.id+'"':"")+">")}else{i=n.createElement(e)}return t?BX.adjust(i,t):i};BX.adjust=function(e,t){var n,i;if(!e.nodeType)return null;if(e.nodeType==9)e=e.body;if(t.attrs){for(n in t.attrs){if(t.attrs.hasOwnProperty(n)){if(n=="class"||n=="className")e.className=t.attrs[n];else if(n=="for")e.htmlFor=t.attrs[n];else if(t.attrs[n]=="")e.removeAttribute(n);else e.setAttribute(n,t.attrs[n])}}}if(t.style){for(n in t.style){if(t.style.hasOwnProperty(n)){e.style[n]=t.style[n]}}}if(t.props){for(n in t.props){if(t.props.hasOwnProperty(n)){e[n]=t.props[n]}}}if(t.events){for(n in t.events){if(t.events.hasOwnProperty(n)){BX.bind(e,n,t.events[n])}}}if(t.dataset){for(n in t.dataset){if(t.dataset.hasOwnProperty(n)){e.dataset[n]=t.dataset[n]}}}if(t.children&&t.children.length>0){for(n=0,i=t.children.length;n<i;n++){if(BX.type.isNotEmptyString(t.children[n]))e.innerHTML+=t.children[n];else if(BX.type.isElementNode(t.children[n]))e.appendChild(t.children[n])}}else if(t.text){BX.cleanNode(e);e.appendChild((e.ownerDocument||document).createTextNode(t.text))}else if(typeof t.html!=="undefined"){e.innerHTML=t.html}return e};BX.remove=function(e){if(e&&null!=e.parentNode)e.parentNode.removeChild(e);e=null;return null};BX.cleanNode=function(e,t){e=BX(e);t=!!t;if(e&&e.childNodes){while(e.childNodes.length>0)e.removeChild(e.firstChild)}if(e&&t){e=BX.remove(e)}return e};BX.html=function(e,t,n){if(typeof t=="undefined")return e.innerHTML;if(typeof n=="undefined")n={};t=BX.processHTML(t.toString());var i=[];var r=[];if(typeof t.STYLE!="undefined"&&t.STYLE.length>0){for(var o in t.STYLE)i.push(t.STYLE[o])}if(typeof t.SCRIPT!="undefined"&&t.SCRIPT.length>0){for(var o in t.SCRIPT){if(t.SCRIPT[o].isInternal)r.push(t.SCRIPT[o].JS);else i.push(t.SCRIPT[o].JS)}}if(n.htmlFirst&&typeof t.HTML!="undefined"&&e){e.innerHTML=t.HTML}var s=new BX.Promise;var a=function(){if(!n.htmlFirst&&typeof t.HTML!="undefined"&&e){e.innerHTML=t.HTML}for(var i in r){BX.evalGlobal(r[i])}if(BX.type.isFunction(n.callback)){n.callback()}s.fulfill()};if(i.length>0){BX.load(i,a)}else{a()}return s};BX.insertAfter=function(e,t){t.parentNode.insertBefore(e,t.nextSibling)};BX.prepend=function(e,t){t.insertBefore(e,t.firstChild)};BX.append=function(e,t){t.appendChild(e)};BX.addClass=function(e,t){var n;e=BX(e);t=BX.util.trim(t);if(t=="")return e;if(e){if(!e.className){e.className=t}else if(!!e.classList&&t.indexOf(" ")<0){e.classList.add(t)}else{n=(t||"").split(r.space);var i=" "+e.className+" ";for(var o=0,s=n.length;o<s;o++){if(i.indexOf(" "+n[o]+" ")<0){e.className+=" "+n[o]}}}}return e};BX.removeClass=function(e,t){e=BX(e);if(e){if(e.className&&!!t){if(BX.type.isString(t)){if(!!e.classList&&t.indexOf(" ")<0){e.classList.remove(t)}else{var n=t.split(r.space),i=" "+e.className+" ";for(var o=0,s=n.length;o<s;o++){i=i.replace(" "+n[o]+" "," ")}e.className=BX.util.trim(i)}}else{e.className=""}}}return e};BX.toggleClass=function(e,t){var n;e=BX(e);if(BX.type.isArray(t)){n=" "+e.className+" ";for(var i=0,r=t.length;i<r;i++){if(BX.hasClass(e,t[i])){n=(" "+n+" ").replace(" "+t[i]+" "," ");n+=" "+t[i>=r-1?0:i+1];i--;break}}if(i==r)e.className+=" "+t[0];else e.className=n;e.className=BX.util.trim(e.className)}else if(BX.type.isNotEmptyString(t)){if(!!e.classList){e.classList.toggle(t)}else{n=e.className;if(BX.hasClass(e,t)){n=(" "+n+" ").replace(" "+t+" "," ")}else{n+=" "+t}e.className=BX.util.trim(n)}}return e};BX.hasClass=function(e,t){e=BX(e);if(!e||!BX.type.isDomNode(e)){BX.debug(e);return false}if(!e.className||!t){return false}if(!!e.classList&&!!t&&t.indexOf(" ")<0){return e.classList.contains(BX.util.trim(t))}else return(" "+e.className+" ").indexOf(" "+t+" ")>=0};BX.setOpacity=function(e,t){if(e.style.filter!=null){e.style.zoom="100%";if(t==100){e.style.filter=""}else{e.style.filter="alpha(opacity="+t.toString()+")"}}else if(e.style.opacity!=null){e.style.opacity=(t/100).toString()}else if(e.style.MozOpacity!=null){e.style.MozOpacity=(t/100).toString()}};BX.hoverEvents=function(e){if(e)return BX.adjust(e,{events:BX.hoverEvents()});else return{mouseover:BX.hoverEventsHover,mouseout:BX.hoverEventsHout}};BX.hoverEventsHover=function(){BX.addClass(this,"bx-hover");this.BXHOVER=true};BX.hoverEventsHout=function(){BX.removeClass(this,"bx-hover");this.BXHOVER=false};BX.focusEvents=function(e){if(e)return BX.adjust(e,{events:BX.focusEvents()});else return{mouseover:BX.focusEventsFocus,mouseout:BX.focusEventsBlur}};BX.focusEventsFocus=function(){BX.addClass(this,"bx-focus");this.BXFOCUS=true};BX.focusEventsBlur=function(){BX.removeClass(this,"bx-focus");this.BXFOCUS=false};BX.setUnselectable=function(e){e.style.userSelect=e.style.MozUserSelect=e.style.WebkitUserSelect=e.style.KhtmlUserSelect=e.style="none";e.setAttribute("unSelectable","on")};BX.setSelectable=function(e){e.style.userSelect=e.style.MozUserSelect=e.style.WebkitUserSelect=e.style.KhtmlUserSelect=e.style="";e.removeAttribute("unSelectable")};BX.styleIEPropertyName=function(e){if(e=="float")e=BX.browser.IsIE()?"styleFloat":"cssFloat";else{var t=BX.browser.isPropertySupported(e);if(t){e=t}else{var n=/(\-([a-z]){1})/g;if(n.test(e)){e=e.replace(n,function(){return arguments[2].toUpperCase()})}}}return e};BX.style=function(e,t,n){if(!BX.type.isElementNode(e))return null;if(n==null){var i;if(e.currentStyle)i=e.currentStyle[BX.styleIEPropertyName(t)];else if(window.getComputedStyle){var r=BX.browser.isPropertySupported(t,true);if(!!r)t=r;i=BX.GetContext(e).getComputedStyle(e,null).getPropertyValue(t)}if(!i)i="";return i}else{e.style[BX.styleIEPropertyName(t)]=n;return e}};BX.focus=function(e){try{e.focus();return true}catch(t){return false}};BX.firstChild=function(e){var t=e.firstChild;while(t&&!BX.type.isElementNode(t)){t=t.nextSibling}return t};BX.lastChild=function(e){var t=e.lastChild;while(t&&!BX.type.isElementNode(t)){t=t.previousSibling}return t};BX.previousSibling=function(e){var t=e.previousSibling;while(t&&!BX.type.isElementNode(t)){t=t.previousSibling}return t};BX.nextSibling=function(e){var t=e.nextSibling;while(t&&!BX.type.isElementNode(t)){t=t.nextSibling}return t};BX.findChildrenByClassName=function(e,t,n){if(!e||!e.childNodes)return null;var r=[];if(typeof e.getElementsByClassName=="undefined"){n=n!==false;r=BX.findChildren(e,{className:t},n)}else{var o=e.getElementsByClassName(t);for(i=0,l=o.length;i<l;i++){r[i]=o[i]}}return r};BX.findChildByClassName=function(e,t,n){if(!e||!e.childNodes)return null;var i=null;if(typeof e.getElementsByClassName=="undefined"){n=n!==false;i=BX.findChild(e,{className:t},n)}else{var r=e.getElementsByClassName(t);if(r&&typeof r[0]!="undefined"){i=r[0]}else{i=null}}return i};BX.findChildren=function(e,t,n){return BX.findChild(e,t,n,true)};BX.findChild=function(e,t,n,i){if(!e||!e.childNodes)return null;n=!!n;i=!!i;var r=e.childNodes.length,o=[];for(var s=0;s<r;s++){var a=e.childNodes[s];if(_checkNode(a,t)){if(i)o.push(a);else return a}if(n==true){var l=BX.findChild(a,t,n,i);if(l){if(i)o=BX.util.array_merge(o,l);else return l}}}if(i||o.length>0)return o;else return null};BX.findParent=function(e,t,n){if(!e)return null;var i=e;while(i.parentNode){var r=i.parentNode;if(_checkNode(r,t))return r;i=r;if(!!n&&(BX.type.isFunction(n)||typeof n=="object")){if(BX.type.isElementNode(n)){if(i==n)break}else{if(_checkNode(i,n))break}}}return null};BX.findNextSibling=function(e,t){if(!e)return null;var n=e;while(n.nextSibling){var i=n.nextSibling;if(_checkNode(i,t))return i;n=i}return null};BX.findPreviousSibling=function(e,t){if(!e)return null;var n=e;while(n.previousSibling){var i=n.previousSibling;if(_checkNode(i,t))return i;n=i}return null};BX.checkNode=function(e,t){return _checkNode(e,t)};BX.findFormElements=function(e){if(BX.type.isString(e))e=document.forms[e]||BX(e);var t=[];if(BX.type.isElementNode(e)){if(e.tagName.toUpperCase()=="FORM"){t=e.elements}else{t=BX.findChildren(e,CHECK_FORM_ELEMENTS,true)}}return t};BX.isParentForNode=function(e,t){if(!BX.type.isDomNode(e)||!BX.type.isDomNode(t))return false;while(true){if(e==t)return true;if(t&&t.parentNode)t=t.parentNode;else break}return false};BX.clone=function(e,t){var n,i,r;if(t!==false)t=true;if(e===null)return null;if(BX.type.isDomNode(e)){n=e.cloneNode(t)}else if(typeof e=="object"){if(BX.type.isArray(e)){n=[];for(i=0,r=e.length;i<r;i++){if(typeof e[i]=="object"&&t)n[i]=BX.clone(e[i],t);else n[i]=e[i]}}else{n={};if(e.constructor){if(BX.type.isDate(e))n=new Date(e);else n=new e.constructor}for(i in e){if(typeof e[i]=="object"&&t)n[i]=BX.clone(e[i],t);else n[i]=e[i]}}}else{n=e}return n};BX.merge=function(){var e=Array.prototype.slice.call(arguments);if(e.length<2)return{};var t=e.shift();for(var n=0;n<e.length;n++){for(var i in e[n]){if(typeof e[n]=="undefined"||e[n]==null)continue;if(e[n].hasOwnProperty(i)){if(typeof e[n][i]=="undefined"||e[n][i]==null)continue;if(typeof e[n][i]=="object"&&!BX.type.isDomNode(e[n][i])&&typeof e[n][i]["isUIWidget"]=="undefined"){var r="length"in e[n][i];if(typeof t[i]!="object")t[i]=r?[]:{};if(r)BX.util.array_merge(t[i],e[n][i]);else BX.merge(t[i],e[n][i])}else t[i]=e[n][i]}}}return t};BX.mergeEx=function(){var e=Array.prototype.slice.call(arguments);if(e.length<2){return{}}var t=e.shift();for(var n=0;n<e.length;n++){for(var i in e[n]){if(typeof e[n]=="undefined"||e[n]==null||!e[n].hasOwnProperty(i)){continue}if(BX.type.isPlainObject(e[n][i])&&BX.type.isPlainObject(t[i])){BX.mergeEx(t[i],e[n][i])}else{t[i]=BX.type.isPlainObject(e[n][i])?BX.clone(e[n][i]):e[n][i]}}}return t};BX.bind=function(e,t,n){if(!e){return}if(t==="mousewheel"){BX.bind(e,"DOMMouseScroll",n)}else if(t==="transitionend"){BX.bind(e,"webkitTransitionEnd",n);BX.bind(e,"msTransitionEnd",n);BX.bind(e,"oTransitionEnd",n)}else if(t==="bxchange"){BX.bind(e,"change",n);BX.bind(e,"cut",n);BX.bind(e,"paste",n);BX.bind(e,"drop",n);BX.bind(e,"keyup",n);return}if(e.addEventListener){e.addEventListener(t,n,false)}else if(e.attachEvent){e.attachEvent("on"+t,BX.proxy(n,e))}else{try{e["on"+t]=n}catch(i){BX.debug(i)}}eventsList[eventsList.length]={element:e,event:t,fn:n}};BX.unbind=function(e,t,n){if(!e){return}if(t==="mousewheel"){BX.unbind(e,"DOMMouseScroll",n)}else if(t==="transitionend"){BX.unbind(e,"webkitTransitionEnd",n);BX.unbind(e,"msTransitionEnd",n);BX.unbind(e,"oTransitionEnd",n)}else if(t==="bxchange"){BX.unbind(e,"change",n);BX.unbind(e,"cut",n);BX.unbind(e,"paste",n);BX.unbind(e,"drop",n);BX.unbind(e,"keyup",n);return}if(e.removeEventListener){e.removeEventListener(t,n,false)}else if(e.detachEvent){e.detachEvent("on"+t,BX.proxy(n,e))}else{e["on"+t]=null}};BX.getEventButton=function(e){e=e||window.event;var t=0;if(typeof e.which!="undefined"){switch(e.which){case 1:t=t|BX.MSLEFT;break;case 2:t=t|BX.MSMIDDLE;break;case 3:t=t|BX.MSRIGHT;break}}else if(typeof e.button!="undefined"){t=event.button}return t||BX.MSLEFT};BX.unbindAll=function(e){if(!e)return;for(var t=0,n=eventsList.length;t<n;t++){try{if(eventsList[t]&&(null==e||e==eventsList[t].element)){BX.unbind(eventsList[t].element,eventsList[t].event,eventsList[t].fn);eventsList[t]=null}}catch(i){}}if(null==e){eventsList=[]}};var captured_events=null,_bind=null;BX.CaptureEvents=function(e,t){if(_bind)return;_bind=BX.bind;captured_events=[];BX.bind=function(n,i,r){if(n===e&&i===t)captured_events.push(r);_bind.apply(this,arguments)}};BX.CaptureEventsGet=function(){if(_bind){BX.bind=_bind;var e=captured_events;_bind=null;captured_events=null;return e}return null};BX.fireEvent=function(e,t){var n=false,i=null;if(BX.type.isDomNode(e)){n=true;if(document.createEventObject){if(eventTypes[t]!="MouseEvent"){i=document.createEventObject();i.type=t;n=e.fireEvent("on"+t,i)}if(e[t]){e[t]()}}else{i=null;switch(eventTypes[t]){case"MouseEvent":i=document.createEvent("MouseEvent");try{i.initMouseEvent(t,true,true,top,1,0,0,0,0,0,0,0,0,0,null)}catch(r){i.initMouseEvent(t,true,true,window,1,0,0,0,0,0,0,0,0,0,null)}break;default:i=document.createEvent("Event");i.initEvent(t,true,true)}n=e.dispatchEvent(i)}}return n};BX.getWheelData=function(e){e=e||window.event;e.wheelData=e.detail?e.detail*-1:e.wheelDelta/40;return e.wheelData};BX.proxy_context=null;BX.delegate=function(e,t){if(!e||!t)return e;return function(){var n=BX.proxy_context;BX.proxy_context=this;var i=e.apply(t,arguments);BX.proxy_context=n;return i}};BX.delegateLater=function(e,t,n){return function(){if(t[e]){var i=BX.proxy_context;BX.proxy_context=this;var r=t[e].apply(n||t,arguments);BX.proxy_context=i;return r}return null}};BX._initObjectProxy=function(e){if(typeof e["__proxy_id_"+proxySalt]=="undefined"){e["__proxy_id_"+proxySalt]=proxyList.length;proxyList[e["__proxy_id_"+proxySalt]]={}}};BX.proxy=function(e,t){if(!e||!t)return e;BX._initObjectProxy(t);if(typeof e["__proxy_id_"+proxySalt]=="undefined")e["__proxy_id_"+proxySalt]=proxyId++;if(!proxyList[t["__proxy_id_"+proxySalt]][e["__proxy_id_"+proxySalt]])proxyList[t["__proxy_id_"+proxySalt]][e["__proxy_id_"+proxySalt]]=BX.delegate(e,t);return proxyList[t["__proxy_id_"+proxySalt]][e["__proxy_id_"+proxySalt]]};BX.defer=function(e,t){if(!!t)return BX.defer_proxy(e,t);else return function(){var t=arguments;setTimeout(function(){e.apply(this,t)},10)}};BX.defer_proxy=function(e,t){if(!e||!t)return e;BX.proxy(e,t);this._initObjectProxy(t);if(typeof e["__defer_id_"+proxySalt]=="undefined")e["__defer_id_"+proxySalt]=proxyId++;if(!proxyList[t["__proxy_id_"+proxySalt]][e["__defer_id_"+proxySalt]]){proxyList[t["__proxy_id_"+proxySalt]][e["__defer_id_"+proxySalt]]=BX.defer(BX.delegate(e,t))}return proxyList[t["__proxy_id_"+proxySalt]][e["__defer_id_"+proxySalt]]};BX.once=function(e,t,n){if(typeof n["__once_id_"+t+"_"+proxySalt]=="undefined"){n["__once_id_"+t+"_"+proxySalt]=proxyId++}this._initObjectProxy(e);if(!proxyList[e["__proxy_id_"+proxySalt]][n["__once_id_"+t+"_"+proxySalt]]){var i=function(){BX.unbind(e,t,i);n.apply(this,arguments)};proxyList[e["__proxy_id_"+proxySalt]][n["__once_id_"+t+"_"+proxySalt]]=i}return proxyList[e["__proxy_id_"+proxySalt]][n["__once_id_"+t+"_"+proxySalt]]};BX.bindDelegate=function(e,t,n,i){var r=BX.delegateEvent(n,i);BX.bind(e,t,r);return r};BX.delegateEvent=function(e,t){return function(n){n=n||window.event;var i=n.target||n.srcElement;while(i!=this){if(_checkNode(i,e)){return t.call(i,n)}if(i&&i.parentNode)i=i.parentNode;else break}return null}};BX.False=function(){return false};BX.DoNothing=function(){};BX.denyEvent=function(e,t){deniedEvents.push([e,t,e["on"+t]]);e["on"+t]=BX.DoNothing};BX.allowEvent=function(e,t){for(var n=0,i=deniedEvents.length;n<i;n++){if(deniedEvents[n][0]==e&&deniedEvents[n][1]==t){e["on"+t]=deniedEvents[n][2];BX.util.deleteFromArray(deniedEvents,n);return}}};BX.fixEventPageXY=function(e){BX.fixEventPageX(e);BX.fixEventPageY(e);return e};BX.fixEventPageX=function(e){if(e.pageX==null&&e.clientX!=null){e.pageX=e.clientX+(document.documentElement&&document.documentElement.scrollLeft||document.body&&document.body.scrollLeft||0)-(document.documentElement.clientLeft||0)}return e};BX.fixEventPageY=function(e){if(e.pageY==null&&e.clientY!=null){e.pageY=e.clientY+(document.documentElement&&document.documentElement.scrollTop||document.body&&document.body.scrollTop||0)-(document.documentElement.clientTop||0)}return e};BX.PreventDefault=function(e){if(!e)e=window.event;if(e.stopPropagation){e.preventDefault();e.stopPropagation()}else{e.cancelBubble=true;e.returnValue=false}return false};BX.eventReturnFalse=function(e){e=e||window.event;if(e&&e.preventDefault)e.preventDefault();else e.returnValue=false;return false};BX.eventCancelBubble=function(e){e=e||window.event;if(e&&e.stopPropagation)e.stopPropagation();else e.cancelBubble=true};BX.addCustomEvent=function(e,t,n){if(BX.type.isString(e)){n=t;t=e;e=window}t=t.toUpperCase();if(!customEvents[t])customEvents[t]=[];customEvents[t].push({handler:n,obj:e})};BX.removeCustomEvent=function(e,t,n){if(BX.type.isString(e)){n=t;t=e;e=window}t=t.toUpperCase();if(!customEvents[t])return;for(var i=0,r=customEvents[t].length;i<r;i++){if(!customEvents[t][i])continue;if(customEvents[t][i].handler==n&&customEvents[t][i].obj==e){delete customEvents[t][i];return}}};BX.onCustomEvent=function(e,t,n,i){if(BX.type.isString(e)){i=n;n=t;t=e;e=window}t=t.toUpperCase();if(!customEvents[t])return;if(!n)n=[];var r;for(var o=0,s=customEvents[t].length;o<s;o++){r=customEvents[t][o];if(!r||!r.handler)continue;if(r.obj==window||r.obj==e){r.handler.apply(e,!!i?BX.clone(n):n)}}};BX.bindDebouncedChange=function(e,t,n,i,r){r=r||window;i=i||300;var o="bx-dc-previous-value";BX.data(e,o,e.value);var s=function(t,n){var i=BX.data(e,o);if(typeof i=="undefined"||i!=n){if(typeof r!="object")t(n);else t.apply(r,[n])}};var a=BX.debounce(function(){var n=e.value;s(t,n);BX.data(e,o,n)},i);BX.bind(e,"keyup",a);BX.bind(e,"change",a);BX.bind(e,"input",a);if(BX.type.isFunction(n)){var l=function(){s(n,e.value)};BX.bind(e,"keyup",l);BX.bind(e,"change",l);BX.bind(e,"input",l)}};BX.parseJSON=function(data,context){var result=null;if(BX.type.isString(data)){try{if(data.indexOf("\n")>=0)eval("result = "+data);else result=new Function("return "+data)()}catch(e){BX.onCustomEvent(context,"onParseJSONFailure",[data,context])}}else if(BX.type.isPlainObject(data)){return data}return result};BX.isReady=false;BX.ready=function(e){bindReady();if(!BX.type.isFunction(e)){BX.debug("READY: not a function! ",e)}else{if(BX.isReady)e.call(document);else if(readyList)readyList.push(e)}};BX.submit=function(e,t,n,i){t=t||"save";if(!e["BXFormSubmit_"+t]){e["BXFormSubmit_"+t]=e.appendChild(BX.create("INPUT",{props:{type:"submit",name:t,value:n||"Y"},style:{display:"none"}}))}if(e.sessid)e.sessid.value=BX.bitrix_sessid();setTimeout(BX.delegate(function(){BX.fireEvent(this,"click");if(i)i()},e["BXFormSubmit_"+t]),10)};BX.debounce=function(e,t,n){var i=0;return function(){n=n||this;var r=arguments;clearTimeout(i);i=setTimeout(function(){e.apply(n,r)},t)}};BX.throttle=function(e,t,n){var i=0,r=null,o;return function(){n=n||this;r=arguments;o=true;if(!i){var s=function(){if(o){e.apply(n,r);o=false;i=setTimeout(s,t)}else{i=null}};s()}}};BX.browser={IsIE:function(){return bIE},IsIE6:function(){return/MSIE 6/i.test(navigator.userAgent)},IsIE7:function(){return/MSIE 7/i.test(navigator.userAgent)},IsIE8:function(){return/MSIE 8/i.test(navigator.userAgent)},IsIE9:function(){return!!document.documentMode&&document.documentMode>=9},IsIE10:function(){return!!document.documentMode&&document.documentMode>=10},IsIE11:function(){return BX.browser.DetectIeVersion()>=11},IsOpera:function(){return bOpera},IsSafari:function(){return bSafari},IsFirefox:function(){return bFirefox},IsChrome:function(){return bChrome},IsMac:function(){return/Macintosh/i.test(navigator.userAgent)},IsAndroid:function(){return/Android/i.test(navigator.userAgent)},IsIOS:function(){return/(iPad;)|(iPhone;)/i.test(navigator.userAgent)},IsMobile:function(){return/(ipad|iphone|android|mobile|touch)/i.test(navigator.userAgent)},DetectIeVersion:function(){if(BX.browser.IsOpera()||BX.browser.IsSafari()||BX.browser.IsFirefox()||BX.browser.IsChrome()){return-1}var e=-1;if(!!window.MSStream&&!window.ActiveXObject&&"ActiveXObject"in window){e=11}else if(BX.browser.IsIE10()){e=10}else if(BX.browser.IsIE9()){e=9}else if(BX.browser.IsIE()){e=8}if(e==-1||e==8){var t;if(navigator.appName=="Microsoft Internet Explorer"){t=new RegExp("MSIE ([0-9]+[.0-9]*)");if(t.exec(navigator.userAgent)!=null)e=parseFloat(RegExp.$1)}else if(navigator.appName=="Netscape"){e=11;t=new RegExp("Trident/.*rv:([0-9]+[.0-9]*)");if(t.exec(navigator.userAgent)!=null)e=parseFloat(RegExp.$1)}}return e},IsDoctype:function(e){e=e||document;if(e.compatMode)return e.compatMode=="CSS1Compat";return e.documentElement&&e.documentElement.clientHeight},SupportLocalStorage:function(){return!!BX.localStorage&&!!BX.localStorage.checkBrowser()},addGlobalClass:function(){var e="bx-core";if(BX.hasClass(document.documentElement,e)){return}if(BX.browser.IsIOS()){e+=" bx-ios"}else if(BX.browser.IsMac()){e+=" bx-mac"}else if(BX.browser.IsAndroid()){e+=" bx-android"}e+=BX.browser.IsMobile()?" bx-touch":" bx-no-touch";e+=BX.browser.isRetina()?" bx-retina":" bx-no-retina";var t=-1;if(/AppleWebKit/.test(navigator.userAgent)){e+=" bx-chrome"}else if((t=BX.browser.DetectIeVersion())>0){e+=" bx-ie bx-ie"+t;if(t>7&&t<10&&!BX.browser.IsDoctype()){e+=" bx-quirks"}}else if(/Opera/.test(navigator.userAgent)){e+=" bx-opera"}else if(/Gecko/.test(navigator.userAgent)){e+=" bx-firefox"}BX.addClass(document.documentElement,e)},isPropertySupported:function(e,t){if(!BX.type.isNotEmptyString(e))return false;var n=e.indexOf("-")>-1?f(e):e;t=!!t;var i=n.charAt(0).toUpperCase()+n.slice(1);var r=(n+" "+["Webkit","Moz","O","ms"].join(i+" ")+i).split(" ");var o=document.body||document.documentElement;for(var s=0;s<r.length;s++){var a=r[s];if(o.style[a]!==undefined){var l=a==n?"":"-"+a.substr(0,a.length-n.length).toLowerCase()+"-";return t?l+u(n):a}}function u(e){return e.replace(/([A-Z])/g,function(){return"-"+arguments[1].toLowerCase()})}function f(e){var t=/(\-([a-z]){1})/g;if(t.test(e))return e.replace(t,function(){return arguments[2].toUpperCase()});else return e}return false},addGlobalFeatures:function(e,t){if(!BX.type.isArray(e))return;var n=[];for(var i=0;i<e.length;i++){var r=!!BX.browser.isPropertySupported(e[i]);n.push("bx-"+(r?"":"no-")+e[i].toLowerCase())}BX.addClass(document.documentElement,n.join(" "))},isRetina:function(){return window.devicePixelRatio&&window.devicePixelRatio>=2}};BX.show=function(e,t){if(e.BXDISPLAY||!_checkDisplay(e,t)){e.style.display=e.BXDISPLAY}};BX.hide=function(e,t){if(!e.BXDISPLAY)_checkDisplay(e,t);e.style.display="none"};BX.toggle=function(e,t){if(!t&&BX.type.isElementNode(e)){var n=true;if(e.BXDISPLAY)n=!_checkDisplay(e);else n=e.style.display=="none";if(n)BX.show(e);else BX.hide(e)}else if(BX.type.isArray(t)){for(var i=0,r=t.length;i<r;i++){if(e==t[i]){e=t[i==r-1?0:i+1];break}}if(i==r)e=t[0]}return e};BX.util={array_values:function(e){if(!BX.type.isArray(e))return BX.util._array_values_ob(e);var t=[];for(var n=0,i=e.length;n<i;n++)if(e[n]!==null&&typeof e[n]!="undefined")t.push(e[n]);return t},_array_values_ob:function(e){var t=[];for(var n in e)if(e[n]!==null&&typeof e[n]!="undefined")t.push(e[n]);return t},array_keys:function(e){if(!BX.type.isArray(e))return BX.util._array_keys_ob(e);var t=[];for(var n=0,i=e.length;n<i;n++)if(e[n]!==null&&typeof e[n]!="undefined")t.push(n);return t},_array_keys_ob:function(e){var t=[];for(var n in e)if(e[n]!==null&&typeof e[n]!="undefined")t.push(n);return t},object_keys:function(e){var t=[];for(var n in e){if(e.hasOwnProperty(n)){t.push(n)}}return t},array_merge:function(e,t){if(!BX.type.isArray(e))e=[];if(!BX.type.isArray(t))t=[];var n=e.length,i=0;if(typeof t.length==="number"){for(var r=t.length;i<r;i++){e[n++]=t[i]}}else{while(t[i]!==undefined){e[n++]=t[i++]}}e.length=n;return e},array_flip:function(e){var t={};for(var n in e){t[e[n]]=n}return t},array_unique:function(e){var t=0,n,i=e.length;if(i<2)return e;for(;t<i-1;t++){for(n=t+1;n<i;n++){if(e[t]==e[n]){e.splice(n--,1);i--}}}return e},in_array:function(e,t){for(var n=0;n<t.length;n++){if(t[n]==e)return true}return false},array_search:function(e,t){for(var n=0;n<t.length;n++){if(t[n]==e)return n}return-1},object_search_key:function(e,t){if(typeof t[e]!="undefined")return t[e];for(var n in t){if(typeof t[n]=="object"){var i=BX.util.object_search_key(e,t[n]);if(i!==false)return i}}return false},trim:function(e){if(BX.type.isString(e))return e.replace(r.ltrim,"").replace(r.rtrim,"");else return e},urlencode:function(e){return encodeURIComponent(e)},deleteFromArray:function(e,t){return e.slice(0,t).concat(e.slice(t+1))},insertIntoArray:function(e,t,n){return e.slice(0,t).concat([n]).concat(e.slice(t))},htmlspecialchars:function(e){if(!e.replace)return e;return e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},htmlspecialcharsback:function(e){if(!e.replace)return e;return e.replace(/\&quot;/g,'"').replace(/&#39;/g,"'").replace(/\&lt;/g,"<").replace(/\&gt;/g,">").replace(/\&amp;/g,"&")},preg_quote:function(e,t){if(!e.replace)return e;return e.replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\"+(t||"")+"-]","g"),"\\$&")},jsencode:function(e){if(!e||!e.replace)return e;var t=[{c:"\\\\",r:"\\\\"},{c:"\\t",r:"\\t"},{c:"\\n",r:"\\n"},{c:"\\r",r:"\\r"},{c:'"',r:'\\"'},{c:"'",r:"\\'"},{c:"<",r:"\\x3C"},{c:">",r:"\\x3E"},{c:"\\u2028",r:"\\u2028"},{c:"\\u2029",r:"\\u2029"}];for(var n=0;n<t.length;n++)e=e.replace(new RegExp(t[n].c,"g"),t[n].r);return e},nl2br:function(e){if(!e||!e.replace)return e;return e.replace(/([^>])\n/g,"$1<br/>")},str_pad:function(e,t,n,i){n=n||" ";i=i||"right";e=e.toString();if(i=="left")return BX.util.str_pad_left(e,t,n);else return BX.util.str_pad_right(e,t,n)},str_pad_left:function(e,t,n){var i=e.length,r=n.length;if(i>=t)return e;for(;i<t;i+=r)e=n+e;return e},str_pad_right:function(e,t,n){var i=e.length,r=n.length;if(i>=t)return e;for(;i<t;i+=r)e+=n;return e},strip_tags:function(e){return e.split(/<[^>]+>/g).join("")},strip_php_tags:function(e){return e.replace(/<\?(.|[\r\n])*?\?>/g,"")},popup:function(e,t,n){var i,r;if(BX.browser.IsOpera()){i=document.body.offsetWidth;r=document.body.offsetHeight}else{i=screen.width;r=screen.height}return window.open(e,"","status=no,scrollbars=yes,resizable=yes,width="+t+",height="+n+",top="+Math.floor((r-n)/2-14)+",left="+Math.floor((i-t)/2-5))},shuffle:function(e){var t,n;var i=e.length;while(0!==i){n=Math.floor(Math.random()*i);i-=1;t=e[i];e[i]=e[n];e[n]=t}return e},objectSort:function(e,t,n){n=n=="asc"?"asc":"desc";var i=[],r;for(r in e){if(e.hasOwnProperty(r)&&e[r][t]){i.push([r,e[r][t]])}}if(n=="asc"){i.sort(function(e,t){var n,i;if(!isNaN(e[1])&&!isNaN(t[1])){n=parseInt(e[1]);i=parseInt(t[1])}else{n=e[1].toString().toLowerCase();i=t[1].toString().toLowerCase()}if(n>i)return 1;else if(n<i)return-1;else return 0})}else{i.sort(function(e,t){var n,i;if(!isNaN(e[1])&&!isNaN(t[1])){n=parseInt(e[1]);i=parseInt(t[1])}else{n=e[1].toString().toLowerCase();i=t[1].toString().toLowerCase()}if(n<i)return 1;else if(n>i)return-1;else return 0})}var o=Array();for(r=0;r<i.length;r++){o.push(e[i[r][0]])}return o},hex2rgb:function(e){var t=e.replace(/[# ]/g,"").replace(/^(.)(.)(.)$/,"$1$1$2$2$3$3").match(/.{2}/g);for(var n=0;n<3;n++){t[n]=parseInt(t[n],16)}return{r:t[0],g:t[1],b:t[2]}},remove_url_param:function(e,t){if(BX.type.isArray(t)){for(var n=0;n<t.length;n++){e=BX.util.remove_url_param(e,t[n])}}else{var i,r;if((i=e.indexOf("?"))>=0&&i!=e.length-1){r=e.substr(i+1);e=e.substr(0,i+1);r=r.replace(new RegExp("(^|&)"+t+"=[^&#]*","i"),"");r=r.replace(/^&/,"");if(BX.type.isNotEmptyString(r)){e=e+r}else{e=e.substr(0,e.length-1)}}}return e},add_url_param:function(e,t){var n;var i="";var r="";var o;for(n in t){e=this.remove_url_param(e,n);i+=(i!=""?"&":"")+n+"="+t[n]}if((o=e.indexOf("#"))>=0){r=e.substr(o);e=e.substr(0,o)}if((o=e.indexOf("?"))>=0){e=e+(o!=e.length-1?"&":"")+i+r}else{e=e+"?"+i+r}return e},even:function(e){return parseInt(e)%2==0},hashCode:function(e){if(!BX.type.isNotEmptyString(e)){return 0}var t=0;for(var n=0;n<e.length;n++){var i=e.charCodeAt(n);t=(t<<5)-t+i;t=t&t}return t},getRandomString:function(e){var t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";var n=t.length;e=parseInt(e);if(isNaN(e)||e<=0){e=8}var i="";for(var r=0;r<e;r++){i+=t.charAt(Math.floor(Math.random()*n))}return i},number_format:function(e,t,n,i){var r,o,s,a,l,u="";t=Math.abs(t);if(isNaN(t)||t<0){t=2}n=n||",";if(typeof i==="undefined")i=".";e=(+e||0).toFixed(t);if(e<0){u="-";e=-e}r=parseInt(e,10)+"";o=r.length>3?r.length%3:0;l=o?r.substr(0,o)+i:"";s=r.substr(o).replace(/(\d{3})(?=\d)/g,"$1"+i);a=t?n+Math.abs(e-r).toFixed(t).replace(/-/,"0").slice(2):"";return u+l+s+a},getExtension:function(e){e=e||"";var t=e.split("?")[0].split(".");return t[t.length-1].toLowerCase()},addObjectToForm:function(e,t,n){if(!BX.type.isString(n)){n=""}for(var i in e){if(!e.hasOwnProperty(i)){continue}var r=e[i];var o=n!==""?n+"["+i+"]":i;if(BX.type.isArray(r)){for(var s=0;s<r.length;s++){BX.util.addObjectToForm(r[s],t,o+"["+s.toString()+"]")}}else if(BX.type.isPlainObject(r)){BX.util.addObjectToForm(r,t,o)}else{r=BX.type.isFunction(r.toString)?r.toString():"";if(r!==""){t.appendChild(BX.create("INPUT",{attrs:{type:"hidden",name:o,value:r}}))}}}},observe:function(e,t){if(!BX.browser.IsChrome()||typeof e!="object")return false;t=t!==false;var n=function(e){e.forEach(function(e){var t=e.name+" changed";console.groupCollapsed(t);console.log("Old value: ",e.oldValue);console.log("New value: ",e.object[e.name]);

console.groupEnd(t)})};if(t){Object.observe(e,n)}else{Object.unobserve(e,n)}return t}};BX.type={isString:function(e){return e===""?true:e?typeof e=="string"||e instanceof String:false},isNotEmptyString:function(e){return BX.type.isString(e)?e.length>0:false},isBoolean:function(e){return e===true||e===false},isNumber:function(e){return e===0?true:e?typeof e=="number"||e instanceof Number:false},isFunction:function(e){return e===null?false:typeof e=="function"||e instanceof Function},isElementNode:function(e){return e&&typeof e=="object"&&"nodeType"in e&&e.nodeType==1&&e.tagName&&e.tagName.toUpperCase()!="SCRIPT"&&e.tagName.toUpperCase()!="STYLE"&&e.tagName.toUpperCase()!="LINK"},isDomNode:function(e){return e&&typeof e=="object"&&"nodeType"in e},isArray:function(e){return e&&Object.prototype.toString.call(e)=="[object Array]"},isDate:function(e){return e&&Object.prototype.toString.call(e)=="[object Date]"},isPlainObject:function(e){if(!e||typeof e!=="object"||e.nodeType){return false}var t=Object.prototype.hasOwnProperty;try{if(e.constructor&&!t.call(e,"constructor")&&!t.call(e.constructor.prototype,"isPrototypeOf")){return false}}catch(n){return false}var i;for(i in e){}return typeof i==="undefined"||t.call(e,i)}};BX.isNodeInDom=function(e,t){return e===(t||document)?true:e.parentNode?BX.isNodeInDom(e.parentNode):false};BX.isNodeHidden=function(e){if(e===document)return false;else if(BX.style(e,"display")=="none")return true;else return e.parentNode?BX.isNodeHidden(e.parentNode):true};BX.evalPack=function(e){while(e.length>0){var t=e.shift();if(t.TYPE=="SCRIPT_EXT"||t.TYPE=="SCRIPT_SRC"){BX.loadScript(t.DATA,function(){BX.evalPack(e)});return}else if(t.TYPE=="SCRIPT"){BX.evalGlobal(t.DATA)}}};BX.evalGlobal=function(e){if(e){var t=document.getElementsByTagName("head")[0]||document.documentElement,n=document.createElement("script");n.type="text/javascript";if(!BX.browser.IsIE()){n.appendChild(document.createTextNode(e))}else{n.text=e}t.insertBefore(n,t.firstChild);t.removeChild(n)}};BX.processHTML=function(e,t){var n,i,o,s,a,l=[],u=[];var f=[];var c=r.script.lastIndex=r.script_end.lastIndex=0;while((n=r.script.exec(e))!==null){r.script_end.lastIndex=r.script.lastIndex;var d=r.script_end.exec(e);if(d===null){break}var p=false;if((a=n[1].match(r.script_type))!==null){if(a[1]=="text/html"||a[1]=="text/template")p=true}if(p){f.push([c,r.script_end.lastIndex-c])}else{f.push([c,n.index-c]);var h=t||n[1].indexOf("bxrunfirst")!="-1";if((o=n[1].match(r.script_src))!==null){l.push({bRunFirst:h,isInternal:false,JS:o[1]})}else{var m=n.index+n[0].length;var y=e.substr(m,d.index-m);l.push({bRunFirst:h,isInternal:true,JS:y})}}c=d.index+9;r.script.lastIndex=c}f.push([c,c===0?e.length:e.length-c]);var B="";for(var X=0,g=f.length;X<g;X++){B+=e.substr(f[X][0],f[X][1])}while((i=B.match(r.style))!==null){if((s=i[0].match(r.style_href))!==null&&i[0].indexOf('media="')<0){u.push(s[1])}B=B.replace(i[0],"")}return{HTML:B,SCRIPT:l,STYLE:u}};BX.garbage=function(e,t){garbageCollectors.push({callback:e,context:t})};BX.GetDocElement=function(e){e=e||document;return BX.browser.IsDoctype(e)?e.documentElement:e.body};BX.GetContext=function(e){if(BX.type.isElementNode(e))return e.ownerDocument.parentWindow||e.ownerDocument.defaultView||window;else if(BX.type.isDomNode(e))return e.parentWindow||e.defaultView||window;else return window};BX.GetWindowInnerSize=function(e){var t,n;e=e||document;if(window.innerHeight){t=BX.GetContext(e).innerWidth;n=BX.GetContext(e).innerHeight}else if(e.documentElement&&(e.documentElement.clientHeight||e.documentElement.clientWidth)){t=e.documentElement.clientWidth;n=e.documentElement.clientHeight}else if(e.body){t=e.body.clientWidth;n=e.body.clientHeight}return{innerWidth:t,innerHeight:n}};BX.GetWindowScrollPos=function(e){var t,n;e=e||document;if(window.pageYOffset){t=BX.GetContext(e).pageXOffset;n=BX.GetContext(e).pageYOffset}else if(e.documentElement&&(e.documentElement.scrollTop||e.documentElement.scrollLeft)){t=e.documentElement.scrollLeft;n=e.documentElement.scrollTop}else if(e.body){t=e.body.scrollLeft;n=e.body.scrollTop}return{scrollLeft:t,scrollTop:n}};BX.GetWindowScrollSize=function(e){var t,n;if(!e)e=document;if(e.compatMode&&e.compatMode=="CSS1Compat"){t=e.documentElement.scrollWidth;n=e.documentElement.scrollHeight}else{if(e.body.scrollHeight>e.body.offsetHeight)n=e.body.scrollHeight;else n=e.body.offsetHeight;if(e.body.scrollWidth>e.body.offsetWidth||e.compatMode&&e.compatMode=="BackCompat"||e.documentElement&&!e.documentElement.clientWidth)t=e.body.scrollWidth;else t=e.body.offsetWidth}return{scrollWidth:t,scrollHeight:n}};BX.GetWindowSize=function(e){var t=this.GetWindowInnerSize(e);var n=this.GetWindowScrollPos(e);var i=this.GetWindowScrollSize(e);return{innerWidth:t.innerWidth,innerHeight:t.innerHeight,scrollLeft:n.scrollLeft,scrollTop:n.scrollTop,scrollWidth:i.scrollWidth,scrollHeight:i.scrollHeight}};BX.scrollTop=function(e,t){if(typeof t!="undefined"){if(e==window){throw new Error("scrollTop() for window is not implemented")}else e.scrollTop=parseInt(t)}else{if(e==window)return BX.GetWindowScrollPos().scrollTop;return e.scrollTop}};BX.scrollLeft=function(e,t){if(typeof t!="undefined"){if(e==window){throw new Error("scrollLeft() for window is not implemented")}else e.scrollLeft=parseInt(t)}else{if(e==window)return BX.GetWindowScrollPos().scrollLeft;return e.scrollLeft}};BX.hide_object=function(e){e=BX(e);e.style.position="absolute";e.style.top="-1000px";e.style.left="-1000px";e.style.height="10px";e.style.width="10px"};BX.is_relative=function(e){var t=BX.style(e,"position");return t=="relative"||t=="absolute"};BX.is_float=function(e){var t=BX.style(e,"float");return t=="right"||t=="left"};BX.is_fixed=function(e){var t=BX.style(e,"position");return t=="fixed"};BX.pos=function(e,t){var n={top:0,right:0,bottom:0,left:0,width:0,height:0};t=!!t;if(!e)return n;if(typeof e.getBoundingClientRect!="undefined"&&e.ownerDocument==document&&!t){var i={};try{i=e.getBoundingClientRect()}catch(r){i={top:e.offsetTop,left:e.offsetLeft,width:e.offsetWidth,height:e.offsetHeight,right:e.offsetLeft+e.offsetWidth,bottom:e.offsetTop+e.offsetHeight}}var o=document.documentElement;var s=document.body;n.top=i.top+(o.scrollTop||s.scrollTop);n.left=i.left+(o.scrollLeft||s.scrollLeft);n.width=i.right-i.left;n.height=i.bottom-i.top;n.right=i.right+(o.scrollLeft||s.scrollLeft);n.bottom=i.bottom+(o.scrollTop||s.scrollTop)}else{var a=0,l=0,u=e.offsetWidth,f=e.offsetHeight;var c=true;for(;e!=null;e=e.offsetParent){if(!c&&t&&BX.is_relative(e))break;a+=e.offsetLeft;l+=e.offsetTop;if(c){c=false;continue}var d=parseInt(BX.style(e,"border-left-width")),p=parseInt(BX.style(e,"border-top-width"));if(!isNaN(d)&&d>0)a+=d;if(!isNaN(p)&&p>0)l+=p}n.top=l;n.left=a;n.width=u;n.height=f;n.right=n.left+u;n.bottom=n.top+f}for(var h in n){if(n.hasOwnProperty(h)){n[h]=Math.round(n[h])}}return n};BX.width=function(e,t){if(typeof t!="undefined")BX.style(e,"width",parseInt(t)+"px");else{if(e==window)return window.innerWidth;return BX.pos(e).width}};BX.height=function(e,t){if(typeof t!="undefined")BX.style(e,"height",parseInt(t)+"px");else{if(e==window)return window.innerHeight;return BX.pos(e).height}};BX.align=function(e,t,n,i){if(i)i=i.toLowerCase();else i="";var r=document;if(BX.type.isElementNode(e)){r=e.ownerDocument;e=BX.pos(e)}var o=e["left"],s=e["bottom"];var a=BX.GetWindowScrollPos(r);var l=BX.GetWindowInnerSize(r);if(l.innerWidth+a.scrollLeft-(e["left"]+t)<0){if(e["right"]-t>=0)o=e["right"]-t;else o=a.scrollLeft}if(l.innerHeight+a.scrollTop-(e["bottom"]+n)<0||~i.indexOf("top")){if(e["top"]-n>=0||~i.indexOf("top"))s=e["top"]-n;else s=a.scrollTop}return{left:o,top:s}};BX.scrollToNode=function(e){var t=BX(e);if(t.scrollIntoView)t.scrollIntoView(true);else{var n=BX.pos(t);window.scrollTo(n.left,n.top)}};BX.showWait=function(e,t){e=BX(e)||document.body||document.documentElement;t=t||BX.message("JS_CORE_LOADING");var n=e.id||Math.random();var i=e.bxmsg=document.body.appendChild(BX.create("DIV",{props:{id:"wait_"+n},style:{background:'url("wait.gif"/*tpa=http://atrspb.com/bitrix/js/main/core/images/wait.gif*/) no-repeat scroll 10px center #fcf7d1',border:"1px solid #E1B52D",color:"black",fontFamily:"Verdana,Arial,sans-serif",fontSize:"11px",padding:"10px 30px 10px 37px",position:"absolute",zIndex:"10000",textAlign:"center"},text:t}));setTimeout(BX.delegate(_adjustWait,e),10);lastWait[lastWait.length]=i;return i};BX.closeWait=function(e,t){if(e&&!t)t=e.bxmsg;if(e&&!t&&BX.hasClass(e,"bx-core-waitwindow"))t=e;if(e&&!t)t=BX("wait_"+e.id);if(!t)t=lastWait.pop();if(t&&t.parentNode){for(var n=0,i=lastWait.length;n<i;n++){if(t==lastWait[n]){lastWait=BX.util.deleteFromArray(lastWait,n);break}}t.parentNode.removeChild(t);if(e)e.bxmsg=null;BX.cleanNode(t,true)}};BX.setJSList=function(e){if(BX.type.isArray(e)){jsList=e}};BX.getJSList=function(){initJsList();return jsList};BX.setCSSList=function(e){if(BX.type.isArray(e)){cssList=e}};BX.getCSSList=function(){initCssList();return cssList};BX.getJSPath=function(e){return e.replace(/^(http[s]*:)*\/\/[^\/]+/i,"")};BX.getCSSPath=function(e){return e.replace(/^(http[s]*:)*\/\/[^\/]+/i,"")};BX.getCDNPath=function(e){return e};BX.loadScript=function(e,t,n){if(BX.type.isString(e)){e=[e]}return BX.load(e,t,n)};BX.loadCSS=function(e,t,n){if(BX.type.isString(e)){e=[e]}if(BX.type.isArray(e)){e=e.map(function(e){return{url:e,ext:"css"}});BX.load(e,null,t)}};BX.load=function(e,t,n){if(!BX.isReady){var i=arguments;BX.ready(function(){BX.load.apply(this,i)});return null}n=n||document;if(isAsync===null){isAsync="async"in n.createElement("script")||"MozAppearance"in n.documentElement.style||window.opera}return isAsync?loadAsync(e,t,n):loadAsyncEmulation(e,t,n)};BX.convert={nodeListToArray:function(e){try{return Array.prototype.slice.call(e,0)}catch(t){var n=[];for(var i=0,r=e.length;i<r;i++){n.push(e[i])}return n}}};function loadAsync(e,t,n){if(!BX.type.isArray(e)){return}function i(e){e=e||assets;for(var t in e){if(e.hasOwnProperty(t)&&e[t].state!==LOADED){return false}}return true}if(!BX.type.isFunction(t)){t=null}var r={},o,s;for(s=0;s<e.length;s++){o=e[s];o=getAsset(o);r[o.name]=o}var a=false;for(s=0;s<e.length;s++){o=e[s];o=getAsset(o);load(o,function(){if(i(r)){if(!a){t&&t();a=true}}},n)}}function loadAsyncEmulation(e,t,n){function i(e){e.state=PRELOADED;if(BX.type.isArray(e.onpreload)&&e.onpreload){for(var t=0;t<e.onpreload.length;t++){e.onpreload[t].call()}}}function r(e){if(e.state===undefined){e.state=PRELOADING;e.onpreload=[];loadAsset({url:e.url,type:"cache",ext:e.ext},function(){i(e)},n)}}if(!BX.type.isArray(e)){return}if(!BX.type.isFunction(t)){t=null}var o=[].slice.call(e,1);for(var s=0;s<o.length;s++){r(getAsset(o[s]))}load(getAsset(e[0]),e.length===1?t:function(){loadAsyncEmulation.apply(null,[o,t,n])},n)}function load(e,t,n){t=t||BX.DoNothing;if(e.state===LOADED){t();return}if(e.state===PRELOADING){e.onpreload.push(function(){load(e,t,n)});return}e.state=LOADING;loadAsset(e,function(){e.state=LOADED;t()},n)}function loadAsset(e,t,n){t=t||BX.DoNothing;function i(e){s.onload=s.onreadystatechange=s.onerror=null;t()}function r(i){i=i||window.event;if(i.type==="load"||/loaded|complete/.test(s.readyState)&&(!n.documentMode||n.documentMode<9)){window.clearTimeout(e.errorTimeout);window.clearTimeout(e.cssTimeout);s.onload=s.onreadystatechange=s.onerror=null;t()}}function o(){if(e.state!==LOADED&&e.cssRetries<=20){for(var t=0,i=n.styleSheets.length;t<i;t++){if(n.styleSheets[t].href===s.href){r({type:"load"});return}}e.cssRetries++;e.cssTimeout=window.setTimeout(o,250)}}var s;var a=BX.type.isNotEmptyString(e.ext)?e.ext:BX.util.getExtension(e.url);if(a==="css"){s=n.createElement("link");s.type="text/"+(e.type||"css");s.rel="stylesheet";s.href=e.url;e.cssRetries=0;e.cssTimeout=window.setTimeout(o,500)}else{s=n.createElement("script");s.type="text/"+(e.type||"javascript");s.src=e.url}s.onload=s.onreadystatechange=r;s.onerror=i;s.async=false;s.defer=false;e.errorTimeout=window.setTimeout(function(){i({type:"timeout"})},7e3);if(a==="css"){cssList.push(normalizeMinUrl(normalizeUrl(e.url)))}else{jsList.push(normalizeMinUrl(normalizeUrl(e.url)))}var l=null;var u=n.head||n.getElementsByTagName("head")[0];if(a==="css"&&(l=getTemplateLink(u))!==null){l.parentNode.insertBefore(s,l)}else{u.insertBefore(s,u.lastChild)}}function getAsset(e){var t={};if(typeof e==="object"){t=e;t.name=t.name?t.name:BX.util.hashCode(e.url)}else{t={name:BX.util.hashCode(e),url:e}}var n=BX.type.isNotEmptyString(t.ext)?t.ext:BX.util.getExtension(t.url);if(n==="css"&&isCssLoaded(t.url)||isScriptLoaded(t.url)){t.state=LOADED}var i=assets[t.name];if(i&&i.url===t.url){return i}assets[t.name]=t;return t}function normalizeUrl(e){if(!BX.type.isNotEmptyString(e)){return""}e=BX.getJSPath(e);e=e.replace(/\?[0-9]*$/,"");return e}function normalizeMinUrl(e){if(!BX.type.isNotEmptyString(e)){return""}var t=e.indexOf(".min");return t>=0?e.substr(0,t)+e.substr(t+4):e}function isCssLoaded(e){initCssList();e=normalizeUrl(e);var t=normalizeMinUrl(e);return e!==t&&BX.util.in_array(t,cssList)||BX.util.in_array(e,cssList)}function initCssList(){if(!cssInit){var e=document.getElementsByTagName("link");if(!!e&&e.length>0){for(var t=0;t<e.length;t++){var n=e[t].getAttribute("href");if(BX.type.isNotEmptyString(n)){n=normalizeMinUrl(normalizeUrl(n));cssList.push(n)}}}cssInit=true}}function getTemplateLink(e){var t=function(t){var n=e.getElementsByTagName(t);for(var i=0,r=n.length;i<r;i++){var o=n[i].getAttribute("data-template-style");if(BX.type.isNotEmptyString(o)&&o=="true"){return n[i]}}return null};var n=t("link");if(n===null){n=t("style")}return n}function isScriptLoaded(e){initJsList();e=normalizeUrl(e);var t=normalizeMinUrl(e);return e!==t&&BX.util.in_array(t,jsList)||BX.util.in_array(e,jsList)}function initJsList(){if(!jsInit){var e=document.getElementsByTagName("script");if(!!e&&e.length>0){for(var t=0;t<e.length;t++){var n=e[t].getAttribute("src");if(BX.type.isNotEmptyString(n)){n=normalizeMinUrl(normalizeUrl(n));jsList.push(n)}}}jsInit=true}}BX.reload=function(e,t){if(e===true){t=true;e=null}var n=e||top.location.href;var i=n.indexOf("#"),r="";if(i!=-1){r=n.substr(i);n=n.substr(0,i)}if(t&&n.indexOf("clear_cache=Y")<0)n+=(n.indexOf("?")==-1?"?":"&")+"clear_cache=Y";if(r){if(t&&(r.substr(0,5)=="view/"||r.substr(0,6)=="#view/")&&r.indexOf("clear_cache%3DY")<0)r+=(r.indexOf("%3F")==-1?"%3F":"%26")+"clear_cache%3DY";n=n.replace(/(\?|\&)_r=[\d]*/,"");n+=(n.indexOf("?")==-1?"?":"&")+"_r="+Math.round(Math.random()*1e4)+r}top.location.href=n};BX.clearCache=function(){BX.showWait();BX.reload(true)};BX.template=function(e,t,n){BX.ready(function(){_processTpl(BX(e),t,n)})};BX.isAmPmMode=function(){return BX.message("FORMAT_DATETIME").match("T")!=null};BX.formatDate=function(e,t){e=e||new Date;var n=e.getHours()||e.getMinutes()||e.getSeconds(),i=!!t?t:n?BX.message("FORMAT_DATETIME"):BX.message("FORMAT_DATE");return i.replace(/YYYY/gi,e.getFullYear()).replace(/MMMM/gi,BX.util.str_pad_left((e.getMonth()+1).toString(),2,"0")).replace(/MM/gi,BX.util.str_pad_left((e.getMonth()+1).toString(),2,"0")).replace(/DD/gi,BX.util.str_pad_left(e.getDate().toString(),2,"0")).replace(/HH/gi,BX.util.str_pad_left(e.getHours().toString(),2,"0")).replace(/MI/gi,BX.util.str_pad_left(e.getMinutes().toString(),2,"0")).replace(/SS/gi,BX.util.str_pad_left(e.getSeconds().toString(),2,"0"))};BX.formatName=function(e,t,n){e=e||{};t=t||"";var i={TITLE:e["TITLE"]||"",NAME:e["NAME"]||"",LAST_NAME:e["LAST_NAME"]||"",SECOND_NAME:e["SECOND_NAME"]||"",LOGIN:e["LOGIN"]||"",NAME_SHORT:e["NAME"]?e["NAME"].substr(0,1)+".":"",LAST_NAME_SHORT:e["LAST_NAME"]?e["LAST_NAME"].substr(0,1)+".":"",SECOND_NAME_SHORT:e["SECOND_NAME"]?e["SECOND_NAME"].substr(0,1)+".":"",EMAIL:e["EMAIL"]||"",ID:e["ID"]||"",NOBR:"","/NOBR":""},r=t;for(var o in i){if(i.hasOwnProperty(o)){r=r.replace("#"+o+"#",i[o])}}r=r.replace(/([\s]+)/gi," ").trim();if(r==""){r=n=="Y"?i["LOGIN"]:"";r=r==""?"Noname":r}return r};BX.getNumMonth=function(e){var t=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];var n=["january","february","march","april","may","june","july","august","september","october","november","december"];var r=e.toUpperCase();for(i=1;i<=12;i++){if(r==BX.message("MON_"+i).toUpperCase()||r==BX.message("MONTH_"+i).toUpperCase()||r==t[i-1].toUpperCase()||r==n[i-1].toUpperCase()){return i}}return e};BX.parseDate=function(e,t,n,i){if(BX.type.isNotEmptyString(e)){if(!n)n=BX.message("FORMAT_DATE");if(!i)i=BX.message("FORMAT_DATETIME");var r="";for(l=1;l<=12;l++){r=r+"|"+BX.message("MON_"+l)}var o=new RegExp("([0-9]+|[a-z]+"+r+")","ig");var s=e.match(o),a=n.match(/(DD|MI|MMMM|MM|M|YYYY)/gi),l,u,f=[],c=[],d={};if(!s)return null;if(s.length>a.length){a=i.match(/(DD|MI|MMMM|MM|M|YYYY|HH|H|SS|TT|T|GG|G)/gi)}for(l=0,u=s.length;l<u;l++){if(BX.util.trim(s[l])!=""){f[f.length]=s[l]}}for(l=0,u=a.length;l<u;l++){if(BX.util.trim(a[l])!=""){c[c.length]=a[l]}}var p=BX.util.array_search("MMMM",c);if(p>0){f[p]=BX.getNumMonth(f[p]);c[p]="MM"}else{p=BX.util.array_search("M",c);if(p>0){f[p]=BX.getNumMonth(f[p]);c[p]="MM"}}for(l=0,u=c.length;l<u;l++){var h=c[l].toUpperCase();d[h]=h=="T"||h=="TT"?f[l]:parseInt(f[l],10)}if(d["DD"]>0&&d["MM"]>0&&d["YYYY"]>0){var m=new Date;if(t){m.setUTCDate(1);m.setUTCFullYear(d["YYYY"]);m.setUTCMonth(d["MM"]-1);m.setUTCDate(d["DD"]);m.setUTCHours(0,0,0)}else{m.setDate(1);m.setFullYear(d["YYYY"]);m.setMonth(d["MM"]-1);m.setDate(d["DD"]);m.setHours(0,0,0)}if((!isNaN(d["HH"])||!isNaN(d["GG"])||!isNaN(d["H"])||!isNaN(d["G"]))&&!isNaN(d["MI"])){if(!isNaN(d["H"])||!isNaN(d["G"])){var y=(d["T"]||d["TT"]||"am").toUpperCase()=="PM";var B=parseInt(d["H"]||d["G"]||0,10);if(y){d["HH"]=B+(B==12?0:12)}else{d["HH"]=B<12?B:0}}else{d["HH"]=parseInt(d["HH"]||d["GG"]||0,10)}if(isNaN(d["SS"]))d["SS"]=0;if(t){m.setUTCHours(d["HH"],d["MI"],d["SS"])}else{m.setHours(d["HH"],d["MI"],d["SS"])}}return m}}return null};BX.selectUtils={addNewOption:function(e,t,n,i,r){e=BX(e);if(e){var o=e.length;if(r!==false){for(var s=0;s<o;s++){if(e[s].value==t){return}}}e.options[o]=new Option(n,t,false,false)}if(i===true){this.sortSelect(e)}},deleteOption:function(e,t){e=BX(e);if(e){for(var n=0;n<e.length;n++){if(e[n].value==t){e.remove(n);break}}}},deleteSelectedOptions:function(e){e=BX(e);if(e){var t=0;while(t<e.length){if(e[t].selected){e[t].selected=false;e.remove(t)}else{t++}}}},deleteAllOptions:function(e){e=BX(e);if(e){for(var t=e.length-1;t>=0;t--){e.remove(t)}}},optionCompare:function(e,t){var n=e.optText.toLowerCase();var i=t.optText.toLowerCase();if(n>i)return 1;if(n<i)return-1;return 0},sortSelect:function(e){e=BX(e);if(e){var t=[];var n=e.options.length;var i;for(i=0;i<n;i++){t[i]={optText:e[i].text,optValue:e[i].value}}t.sort(this.optionCompare);e.length=0;n=t.length;for(i=0;i<n;i++){e[i]=new Option(t[i].optText,t[i].optValue,false,false)}}},selectAllOptions:function(e){e=BX(e);if(e){var t=e.length;for(var n=0;n<t;n++){e[n].selected=true}}},selectOption:function(e,t){e=BX(e);if(e){var n=e.length;for(var i=0;i<n;i++){e[i].selected=e[i].value==t}}},addSelectedOptions:function(e,t,n,i){e=BX(e);if(!e)return;var r=e.length;for(var o=0;o<r;o++)if(e[o].selected)this.addNewOption(t,e[o].value,e[o].text,i,n)},moveOptionsUp:function(e){e=BX(e);if(!e)return;var t=e.length;for(var n=0;n<t;n++){if(e[n].selected&&n>0&&e[n-1].selected==false){var i=new Option(e[n].text,e[n].value);e[n]=new Option(e[n-1].text,e[n-1].value);e[n].selected=false;e[n-1]=i;e[n-1].selected=true}}},moveOptionsDown:function(e){e=BX(e);if(!e)return;var t=e.length;for(var n=t-1;n>=0;n--){if(e[n].selected&&n<t-1&&e[n+1].selected==false){var i=new Option(e[n].text,e[n].value);e[n]=new Option(e[n+1].text,e[n+1].value);e[n].selected=false;e[n+1]=i;e[n+1].selected=true}}}};BX.getEventTarget=function(e){if(e.target){return e.target}else if(e.srcElement){return e.srcElement}return null};BX.hint=function(e,t,n,i){if(null==n){n=t;t=""}if(null==e.BXHINT){e.BXHINT=new BX.CHint({parent:e,hint:n,title:t,id:i});e.BXHINT.Show()}};BX.hint_replace=function(e,t,n){if(null==n){n=t;t=""}if(!e||!e.parentNode||!n)return null;var i=new BX.CHint({hint:n,title:t});i.CreateParent();e.parentNode.insertBefore(i.PARENT,e);e.parentNode.removeChild(e);i.PARENT.style.marginLeft="5px";return e};BX.CHint=function(e){this.PARENT=BX(e.parent);this.HINT=e.hint;this.HINT_TITLE=e.title;this.PARAMS={};for(var t in this.defaultSettings){if(null==e[t])this.PARAMS[t]=this.defaultSettings[t];else this.PARAMS[t]=e[t]}if(null!=e.id)this.ID=e.id;this.timer=null;this.bInited=false;this.msover=true;if(this.PARAMS.showOnce){this.__show();this.msover=false;this.timer=setTimeout(BX.proxy(this.__hide,this),this.PARAMS.hide_timeout)}else if(this.PARENT){BX.bind(this.PARENT,"mouseover",BX.proxy(this.Show,this));BX.bind(this.PARENT,"mouseout",BX.proxy(this.Hide,this))}BX.addCustomEvent("onMenuOpen",BX.delegate(this.disable,this));BX.addCustomEvent("onMenuClose",BX.delegate(this.enable,this))};BX.CHint.prototype.defaultSettings={show_timeout:1e3,hide_timeout:500,dx:2,showOnce:false,preventHide:true,min_width:250};BX.CHint.prototype.CreateParent=function(e,t){if(this.PARENT){BX.unbind(this.PARENT,"mouseover",BX.proxy(this.Show,this));BX.unbind(this.PARENT,"mouseout",BX.proxy(this.Hide,this))}if(!t)t={};var n="icon";if(t.type&&(t.type=="link"||t.type=="icon"))n=t.type;if(e)n="element";if(n=="icon"){e=BX.create("IMG",{props:{src:t.iconSrc?t.iconSrc:"hint.gif"/*tpa=http://atrspb.com/bitrix/js/main/core/images/hint.gif*/}})}else if(n=="link"){e=BX.create("A",{props:{href:"javascript:void(0)"},html:"[?]"})}this.PARENT=e;BX.bind(this.PARENT,"mouseover",BX.proxy(this.Show,this));BX.bind(this.PARENT,"mouseout",BX.proxy(this.Hide,this));return this.PARENT};BX.CHint.prototype.Show=function(){this.msover=true;if(null!=this.timer)clearTimeout(this.timer);this.timer=setTimeout(BX.proxy(this.__show,this),this.PARAMS.show_timeout)};BX.CHint.prototype.Hide=function(){this.msover=false;if(null!=this.timer)clearTimeout(this.timer);this.timer=setTimeout(BX.proxy(this.__hide,this),this.PARAMS.hide_timeout)};BX.CHint.prototype.__show=function(){if(!this.msover||this.disabled)return;if(!this.bInited)this.Init();if(this.prepareAdjustPos()){this.DIV.style.display="block";this.adjustPos();BX.bind(window,"scroll",BX.proxy(this.__onscroll,this));if(this.PARAMS.showOnce){this.timer=setTimeout(BX.proxy(this.__hide,this),this.PARAMS.hide_timeout)}}};BX.CHint.prototype.__onscroll=function(){if(!BX.admin||!BX.admin.panel||!BX.admin.panel.isFixed())return;if(this.scrollTimer)clearTimeout(this.scrollTimer);this.DIV.style.display="none";this.scrollTimer=setTimeout(BX.proxy(this.Reopen,this),this.PARAMS.show_timeout)};BX.CHint.prototype.Reopen=function(){if(null!=this.timer)clearTimeout(this.timer);this.timer=setTimeout(BX.proxy(this.__show,this),50)};BX.CHint.prototype.__hide=function(){if(this.msover)return;if(!this.bInited)return;BX.unbind(window,"scroll",BX.proxy(this.Reopen,this));if(this.PARAMS.showOnce){this.Destroy()}else{this.DIV.style.display="none"}};BX.CHint.prototype.__hide_immediately=function(){this.msover=false;this.__hide()};BX.CHint.prototype.Init=function(){this.DIV=document.body.appendChild(BX.create("DIV",{props:{className:"bx-panel-tooltip"},style:{display:"none"},children:[BX.create("DIV",{props:{className:"bx-panel-tooltip-top-border"},html:'<div class="bx-panel-tooltip-corner bx-panel-tooltip-left-corner"></div><div class="bx-panel-tooltip-border"></div><div class="bx-panel-tooltip-corner bx-panel-tooltip-right-corner"></div>'}),this.CONTENT=BX.create("DIV",{props:{className:"bx-panel-tooltip-content"},children:[BX.create("DIV",{props:{className:"bx-panel-tooltip-underlay"},children:[BX.create("DIV",{props:{className:"bx-panel-tooltip-underlay-bg"}})]})]}),BX.create("DIV",{props:{className:"bx-panel-tooltip-bottom-border"},html:'<div class="bx-panel-tooltip-corner bx-panel-tooltip-left-corner"></div><div class="bx-panel-tooltip-border"></div><div class="bx-panel-tooltip-corner bx-panel-tooltip-right-corner"></div>'})]}));if(this.ID){this.CONTENT.insertBefore(BX.create("A",{attrs:{href:"javascript:void(0)"},props:{className:"bx-panel-tooltip-close"},events:{click:BX.delegate(this.Close,this)}}),this.CONTENT.firstChild)}if(this.HINT_TITLE){this.CONTENT.appendChild(BX.create("DIV",{props:{className:"bx-panel-tooltip-title"},text:this.HINT_TITLE}))}if(this.HINT){this.CONTENT_TEXT=this.CONTENT.appendChild(BX.create("DIV",{props:{className:"bx-panel-tooltip-text"}})).appendChild(BX.create("SPAN",{html:this.HINT}))}if(this.PARAMS.preventHide){BX.bind(this.DIV,"mouseout",BX.proxy(this.Hide,this));BX.bind(this.DIV,"mouseover",BX.proxy(this.Show,this))}this.bInited=true};BX.CHint.prototype.setContent=function(e){this.HINT=e;if(this.CONTENT_TEXT)this.CONTENT_TEXT.innerHTML=this.HINT;else this.CONTENT_TEXT=this.CONTENT.appendChild(BX.create("DIV",{props:{className:"bx-panel-tooltip-text"}})).appendChild(BX.create("SPAN",{html:this.HINT}))};BX.CHint.prototype.prepareAdjustPos=function(){this._wnd={scrollPos:BX.GetWindowScrollPos(),scrollSize:BX.GetWindowScrollSize()};return BX.style(this.PARENT,"display")!="none"};BX.CHint.prototype.getAdjustPos=function(){var e={},t=BX.pos(this.PARENT),n=0;e.top=t.bottom+this.PARAMS.dx;if(BX.admin&&BX.admin.panel.DIV){n=BX.admin.panel.DIV.offsetHeight+this.PARAMS.dx;if(BX.admin.panel.isFixed()){n+=this._wnd.scrollPos.scrollTop}}if(e.top<n)e.top=n;else{if(e.top+this.DIV.offsetHeight>this._wnd.scrollSize.scrollHeight)e.top=t.top-this.PARAMS.dx-this.DIV.offsetHeight}e.left=t.left;if(t.left<this.PARAMS.dx)t.left=this.PARAMS.dx;else{var i=this.DIV.offsetWidth;var r=this._wnd.scrollSize.scrollWidth-i-this.PARAMS.dx;if(e.left>r)e.left=r}return e};BX.CHint.prototype.adjustWidth=function(){if(this.bWidthAdjusted)return;var e=this.DIV.offsetWidth,t=this.DIV.offsetHeight;if(e>this.PARAMS.min_width)e=Math.round(Math.sqrt(1.618*e*t));if(e<this.PARAMS.min_width)e=this.PARAMS.min_width;this.DIV.style.width=e+"px";if(this._adjustWidthInt)clearInterval(this._adjustWidthInt);this._adjustWidthInt=setInterval(BX.delegate(this._adjustWidthInterval,this),5);this.bWidthAdjusted=true};BX.CHint.prototype._adjustWidthInterval=function(){if(!this.DIV||this.DIV.style.display=="none")clearInterval(this._adjustWidthInt);var e=20,t=1500,n=this.DIV.offsetWidth,i=this.CONTENT_TEXT.offsetWidth;if(n>0&&i>0&&n-i<e&&n<t){this.DIV.style.width=n+e+"px";return}clearInterval(this._adjustWidthInt)};BX.CHint.prototype.adjustPos=function(){this.adjustWidth();var e=this.getAdjustPos();this.DIV.style.top=e.top+"px";this.DIV.style.left=e.left+"px"};BX.CHint.prototype.Close=function(){if(this.ID&&BX.WindowManager)BX.WindowManager.saveWindowOptions(this.ID,{display:"off"});this.__hide_immediately();this.Destroy()};BX.CHint.prototype.Destroy=function(){if(this.PARENT){BX.unbind(this.PARENT,"mouseover",BX.proxy(this.Show,this));BX.unbind(this.PARENT,"mouseout",BX.proxy(this.Hide,this))}if(this.DIV){BX.unbind(this.DIV,"mouseover",BX.proxy(this.Show,this));BX.unbind(this.DIV,"mouseout",BX.proxy(this.Hide,this));BX.cleanNode(this.DIV,true)}};BX.CHint.prototype.enable=function(){this.disabled=false};BX.CHint.prototype.disable=function(){this.__hide_immediately();this.disabled=true};if(document.addEventListener){__readyHandler=function(){document.removeEventListener("DOMContentLoaded",__readyHandler,false);runReady()}}else if(document.attachEvent){__readyHandler=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",__readyHandler);runReady()}}}function bindReady(){if(!readyBound){readyBound=true;if(document.readyState==="complete"){return runReady()}if(document.addEventListener){document.addEventListener("DOMContentLoaded",__readyHandler,false);window.addEventListener("load",runReady,false)}else if(document.attachEvent){document.attachEvent("onreadystatechange",__readyHandler);window.attachEvent("onload",runReady);var e=false;try{e=window.frameElement==null}catch(t){}if(document.documentElement.doScroll&&e)doScrollCheck()}}return null}function runReady(){if(!BX.isReady){if(!document.body)return setTimeout(runReady,15);BX.isReady=true;if(readyList&&readyList.length>0){var e,t=0;while(readyList&&(e=readyList[t++])){try{e.call(document)}catch(n){BX.debug("BX.ready error: ",n)}}readyList=null}}return null}function doScrollCheck(){if(BX.isReady)return;try{document.documentElement.doScroll("left")}catch(e){setTimeout(doScrollCheck,1);return}runReady()}function _adjustWait(){if(!this.bxmsg)return;var e=BX.pos(this),t=e.top;if(t<BX.GetDocElement().scrollTop)t=BX.GetDocElement().scrollTop+5;this.bxmsg.style.top=t+5+"px";if(this==BX.GetDocElement()){this.bxmsg.style.right="5px"}else{this.bxmsg.style.left=e.right-this.bxmsg.offsetWidth-5+"px"}}function _checkDisplay(e,t){if(typeof t!="undefined")e.BXDISPLAY=t;var n=e.style.display||BX.style(e,"display");if(n!="none"){e.BXDISPLAY=e.BXDISPLAY||n;return true}else{e.BXDISPLAY=e.BXDISPLAY||"block";return false}}function _processTpl(e,t,n){if(e){if(n)e.parentNode.removeChild(e);var i={},r=BX.findChildren(e,{attribute:"data-role"},true);for(var o=0,s=r.length;o<s;o++){i[r[o].getAttribute("data-role")]=r[o]}t.apply(e,[i])}}function _checkNode(e,t){t=t||{};if(BX.type.isFunction(t))return t.call(window,e);if(!t.allowTextNodes&&!BX.type.isElementNode(e))return false;var n,i,r;for(n in t){if(t.hasOwnProperty(n)){switch(n){case"tag":case"tagName":if(BX.type.isString(t[n])){if(e.tagName.toUpperCase()!=t[n].toUpperCase())return false}else if(t[n]instanceof RegExp){if(!t[n].test(e.tagName))return false}break;case"class":case"className":if(BX.type.isString(t[n])){if(!BX.hasClass(e,t[n]))return false}else if(t[n]instanceof RegExp){if(!BX.type.isString(e.className)||!t[n].test(e.className))return false}break;case"attr":case"attribute":if(BX.type.isString(t[n])){if(!e.getAttribute(t[n]))return false}else if(BX.type.isArray(t[n])){for(i=0,r=t[n].length;i<r;i++){if(t[n]&&!e.getAttribute(t[n]))return false}}else{for(i in t[n]){if(t[n].hasOwnProperty(i)){var o=e.getAttribute(i);if(t[n][i]instanceof RegExp){if(!BX.type.isString(o)||!t[n][i].test(o)){return false}}else{if(o!=""+t[n][i]){return false}}}}}break;case"property":if(BX.type.isString(t[n])){if(!e[t[n]])return false}else if(BX.type.isArray(t[n])){for(i=0,r=t[n].length;i<r;i++){if(t[n]&&!e[t[n]])return false}}else{for(i in t[n]){if(BX.type.isString(t[n][i])){if(e[i]!=t[n][i])return false}else if(t[n][i]instanceof RegExp){if(!BX.type.isString(e[i])||!t[n][i].test(e[i]))return false}}}break;case"callback":return t[n](e)}}}return true}function Trash(){var e,t;for(e=0,t=garbageCollectors.length;e<t;e++){try{garbageCollectors[e].callback.apply(garbageCollectors[e].context||window);delete garbageCollectors[e];garbageCollectors[e]=null}catch(n){}}try{BX.unbindAll()}catch(n){}}if(window.attachEvent)window.attachEvent("onunload",Trash);else if(window.addEventListener)window.addEventListener("unload",Trash,false);else window.onunload=Trash;BX(BX.DoNothing);window.BX=BX;BX.browser.addGlobalClass();BX.data=function(e,t,n){if(typeof e=="undefined")return undefined;if(typeof t=="undefined")return undefined;if(typeof n!="undefined"){dataStorage.set(e,t,n)}else{var i;if((i=dataStorage.get(e,t))!=undefined){return i}else{if("getAttribute"in e){i=e.getAttribute("data-"+t.toString());if(i===null){return undefined}return i}}return undefined}};BX.DataStorage=function(){this.keyOffset=1;this.data={};this.uniqueTag="BX-"+Math.random();this.resolve=function(e,t){if(typeof e[this.uniqueTag]=="undefined")if(t){try{Object.defineProperty(e,this.uniqueTag,{value:this.keyOffset++})}catch(n){e[this.uniqueTag]=this.keyOffset++}}else return undefined;return e[this.uniqueTag]};this.get=function(e,t){if(e!=document&&!BX.type.isElementNode(e)||typeof t=="undefined")return undefined;e=this.resolve(e,false);if(typeof e=="undefined"||typeof this.data[e]=="undefined")return undefined;return this.data[e][t]};this.set=function(e,t,n){if(e!=document&&!BX.type.isElementNode(e)||typeof n=="undefined")return;var i=this.resolve(e,true);if(typeof this.data[i]=="undefined")this.data[i]={};

this.data[i][t]=n}};var dataStorage=new BX.DataStorage;BX.LazyLoad={images:[],imageStatus:{hidden:-2,error:-1,undefined:0,inited:1,loaded:2},imageTypes:{image:1,background:2},registerImage:function(e,t){if(BX.type.isNotEmptyString(e)){this.images.push({id:e,node:null,src:null,type:null,func:BX.type.isFunction(t)?t:null,status:this.imageStatus.undefined})}},registerImages:function(e,t){if(BX.type.isArray(e)){for(var n=0,i=e.length;n<i;n++){this.registerImage(e[n],t)}}},showImages:function(e){var t=null;var n=false;e=e!==false;for(var i=0,r=this.images.length;i<r;i++){t=this.images[i];if(t.status==this.imageStatus.undefined){this.initImage(t)}if(t.status!==this.imageStatus.inited){continue}if(!t.node||!t.node.parentNode){t.node=null;t.status=this.imageStatus.error;continue}n=true;if(e&&t.func){n=t.func(t)}if(n===true&&this.isElementVisibleOnScreen(t.node)){if(t.type==this.imageTypes.image){t.node.src=t.src}else{t.node.style.backgroundImage="url('"+t.src+"')"}t.node.setAttribute("data-src","");t.status=this.imageStatus.loaded}}},initImage:function(e){e.status=this.imageStatus.error;var t=BX(e.id);if(t){var n=t.getAttribute("data-src");if(BX.type.isNotEmptyString(n)){e.node=t;e.src=n;e.status=this.imageStatus.inited;e.type=e.node.tagName.toLowerCase()=="img"?this.imageTypes.image:this.imageTypes.background}}},isElementVisibleOnScreen:function(e){var t=this.getElementCoords(e);var n=window.pageYOffset||document.documentElement.scrollTop;var i=n+document.documentElement.clientHeight;t.bottom=t.top+e.offsetHeight;var r=t.top>n&&t.top<i;var o=t.bottom<i&&t.bottom>n;return r||o},isElementVisibleOn2Screens:function(e){var t=this.getElementCoords(e);var n=document.documentElement.clientHeight;var i=window.pageYOffset||document.documentElement.scrollTop;var r=i+n;t.bottom=t.top+e.offsetHeight;i-=n;r+=n;var o=t.top>i&&t.top<r;var s=t.bottom<r&&t.bottom>i;return o||s},getElementCoords:function(e){var t=e.getBoundingClientRect();return{originTop:t.top,originLeft:t.left,top:t.top+window.pageYOffset,left:t.left+window.pageXOffset}},onScroll:function(){BX.LazyLoad.showImages()},clearImages:function(){this.images=[]}};BX.getCookie=function(e){var t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):undefined};BX.setCookie=function(e,t,n){n=n||{};var i=n.expires;if(typeof i=="number"&&i){var r=new Date;r.setTime(r.getTime()+i*1e3);i=n.expires=r}if(i&&i.toUTCString){n.expires=i.toUTCString()}t=encodeURIComponent(t);var o=e+"="+t;for(var s in n){if(!n.hasOwnProperty(s)){continue}o+="; "+s;var a=n[s];if(a!==true){o+="="+a}}document.cookie=o;return true};BX.FixFontSize=function(e){var t,n,i;this.node=null;this.prevWindowSize=0;this.prevWrapperSize=0;this.mainWrapper=null;this.textWrapper=null;this.objList=e.objList;this.minFontSizeList=[];this.minFontSize=0;if(e.onresize){this.prevWindowSize=window.innerWidth||document.documentElement.clientWidth;BX.bind(window,"resize",BX.proxy(BX.throttle(this.onResize,350),this))}if(e.onAdaptiveResize){t=this.objList[0].scaleBy||this.objList[0].node;n=getComputedStyle(t);this.prevWrapperSize=parseInt(n["width"])-parseInt(n["paddingLeft"])-parseInt(n["paddingRight"]);BX.bind(window,"resize",BX.proxy(BX.throttle(this.onAdaptiveResize,350),this))}this.createTestNodes();this.decrease()};BX.FixFontSize.prototype={createTestNodes:function(){this.textWrapper=BX.create("div",{style:{display:"inline-block",whiteSpace:"nowrap"}});this.mainWrapper=BX.create("div",{style:{height:0,overflow:"hidden"},children:[this.textWrapper]})},insertTestNodes:function(){document.body.appendChild(this.mainWrapper)},removeTestNodes:function(){document.body.removeChild(this.mainWrapper)},decrease:function(){var e,t,n,i;this.insertTestNodes();for(var r=this.objList.length-1;r>=0;r--){n=this.objList[r].scaleBy||this.objList[r].node;i=getComputedStyle(n);e=parseInt(i["width"])-parseInt(i["paddingLeft"])-parseInt(i["paddingRight"]);t=parseInt(getComputedStyle(this.objList[r].node)["font-size"]);this.textWrapperSetStyle(this.objList[r].node);if(this.textWrapperInsertText(this.objList[r].node)){while(this.textWrapper.offsetWidth>e&&t>0){this.textWrapper.style.fontSize=--t+"px"}if(this.objList[r].smallestValue){this.minFontSize=this.minFontSize?Math.min(this.minFontSize,t):t;this.minFontSizeList.push(this.objList[r].node)}else{this.objList[r].node.style.fontSize=t+"px"}}}if(this.minFontSizeList.length>0)this.setMinFont();this.removeTestNodes()},increase:function(){this.insertTestNodes();var e,t,n,i;this.insertTestNodes();for(var r=this.objList.length-1;r>=0;r--){n=this.objList[r].scaleBy||this.objList[r].node;i=getComputedStyle(n);e=parseInt(i["width"])-parseInt(i["paddingLeft"])-parseInt(i["paddingRight"]);t=parseInt(getComputedStyle(this.objList[r].node)["font-size"]);this.textWrapperSetStyle(this.objList[r].node);if(this.textWrapperInsertText(this.objList[r].node)){while(this.textWrapper.offsetWidth<e&&t<this.objList[r].maxFontSize){this.textWrapper.style.fontSize=++t+"px"}t--;if(this.objList[r].smallestValue){this.minFontSize=this.minFontSize?Math.min(this.minFontSize,t):t;this.minFontSizeList.push(this.objList[r].node)}else{this.objList[r].node.style.fontSize=t+"px"}}}if(this.minFontSizeList.length>0)this.setMinFont();this.removeTestNodes()},setMinFont:function(){for(var e=this.minFontSizeList.length-1;e>=0;e--){this.minFontSizeList[e].style.fontSize=this.minFontSize+"px"}this.minFontSize=0},onResize:function(){var e=window.innerWidth||document.documentElement.clientWidth;if(this.prevWindowSize>e)this.decrease();else if(this.prevWindowSize<e)this.increase();this.prevWindowSize=e},onAdaptiveResize:function(){var e=this.objList[0].scaleBy||this.objList[0].node,t=getComputedStyle(e),n=parseInt(t["width"])-parseInt(t["paddingLeft"])-parseInt(t["paddingRight"]);if(this.prevWrapperSize>n)this.decrease();else if(this.prevWrapperSize<n)this.increase();this.prevWrapperSize=n},textWrapperInsertText:function(e){if(e.textContent){this.textWrapper.textContent=e.textContent;return true}else if(e.innerText){this.textWrapper.innerText=e.innerText;return true}else{return false}},textWrapperSetStyle:function(e){this.textWrapper.style.fontFamily=getComputedStyle(e)["font-family"];this.textWrapper.style.fontSize=getComputedStyle(e)["font-size"];this.textWrapper.style.fontStyle=getComputedStyle(e)["font-style"];this.textWrapper.style.fontWeight=getComputedStyle(e)["font-weight"];this.textWrapper.style.lineHeight=getComputedStyle(e)["line-height"]}};BX.FixFontSize.init=function(e){return new BX.FixFontSize(e)};if(typeof BX.ParamBag==="undefined"){BX.ParamBag=function(){this._params={}};BX.ParamBag.prototype={initialize:function(e){this._params=e?e:{}},getParam:function(e,t){var n=this._params;return typeof n[e]!="undefined"?n[e]:t},setParam:function(e,t){this._params[e]=t},clear:function(){this._params={}}};BX.ParamBag.create=function(e){var t=new BX.ParamBag;t.initialize(e);return t}}if(typeof BX.Promise==="undefined"){BX.Promise=function(e,t){this.state=null;this.value=null;this.reason=null;this.next=null;this.ctx=t||this;this.onFulfilled=[];this.onRejected=[]};BX.Promise.prototype.fulfill=function(e){this.checkState();this.value=e;this.state=true;this.execute()};BX.Promise.prototype.reject=function(e){this.checkState();this.reason=e;this.state=false;this.execute()};BX.Promise.prototype.then=function(e,t){if(BX.type.isFunction(e)){this.onFulfilled.push(e)}if(BX.type.isFunction(t)){this.onRejected.push(t)}if(this.next===null){this.next=new BX.Promise(null,this.ctx)}if(this.state!==null){this.execute()}return this.next};BX.Promise.prototype.setAutoResolve=function(e,t){this.timer=setTimeout(BX.delegate(function(){if(this.state===null){this[e?"fulfill":"reject"]()}},this),t||15)};BX.Promise.prototype.cancelAutoResolve=function(){clearTimeout(this.timer)};BX.Promise.prototype.resolve=function(e){var t=this;if(this===e){this.reject(new TypeError("Promise cannot fulfill or reject itself"))}else if(e instanceof BX.Promise){e.then(function(e){t.fulfill(e)},function(e){t.reject(e)})}else{this.fulfill(e)}};BX.Promise.prototype.execute=function(){if(this.state===null){return}var e=undefined;var t=undefined;var n=undefined;var i;if(this.state===true){if(this.onFulfilled.length){try{for(i=0;i<this.onFulfilled.length;i++){n=this.onFulfilled[i].apply(this.ctx,[this.value]);if(typeof n!="undefined"){e=n}}}catch(r){if("console"in window){console.dir(r)}BX.debug(r);t=r}}else{e=this.value}}else if(this.state===false){if(this.onRejected.length){try{for(i=0;i<this.onRejected.length;i++){n=this.onRejected[i].apply(this.ctx,[this.reason]);if(typeof n!="undefined"){e=n}}}catch(r){if("console"in window){console.dir(r)}BX.debug(r);t=r}}else{t=this.reason}}if(this.next!==null){if(typeof t!="undefined"){this.next.reject(t)}else if(typeof e!="undefined"){this.next.resolve(e)}}};BX.Promise.prototype.checkState=function(){if(this.state!==null){throw new Error("You can not do fulfill() or reject() multiple times")}}}})(window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:49:"http://atrspb.com/bitrix/js/main/core/core_ajax.js?149703842635797";s:6:"source";s:33:"core_ajax.js"/*tpa=http://atrspb.com/bitrix/js/main/core/core_ajax.js*/;s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
;(function(window){

if (window.BX.ajax)
	return;

var
	BX = window.BX,

	tempDefaultConfig = {},
	defaultConfig = {
		method: 'GET', // request method: GET|POST
		dataType: 'html', // type of data loading: html|json|script
		timeout: 0, // request timeout in seconds. 0 for browser-default
		async: true, // whether request is asynchronous or not
		processData: true, // any data processing is disabled if false, only callback call
		scriptsRunFirst: false, // whether to run _all_ found scripts before onsuccess call. script tag can have an attribute "bxrunfirst" to turn  this flag on only for itself
		emulateOnload: true,
		skipAuthCheck: false, // whether to check authorization failure (SHOUD be set to true for CORS requests)
		start: true, // send request immediately (if false, request can be started manually via XMLHttpRequest object returned)
		cache: true, // whether NOT to add random addition to URL
		preparePost: true, // whether set Content-Type x-www-form-urlencoded in POST
		headers: false, // add additional headers, example: [{'name': 'If-Modified-Since', 'value': 'Wed, 15 Aug 2012 08:59:08 GMT'}, {'name': 'If-None-Match', 'value': '0'}]
		lsTimeout: 30, //local storage data TTL. useless without lsId.
		lsForce: false //wheter to force query instead of using localStorage data. useless without lsId.
/*
other parameters:
	url: url to get/post
	data: data to post
	onsuccess: successful request callback. BX.proxy may be used.
	onfailure: request failure callback. BX.proxy may be used.
	onprogress: request progress callback. BX.proxy may be used.

	lsId: local storage id - for constantly updating queries which can communicate via localStorage. core_ls.js needed

any of the default parameters can be overridden. defaults can be changed by BX.ajax.Setup() - for all further requests!
*/
	},
	ajax_session = null,
	loadedScripts = {},
	loadedScriptsQueue = [],
	r = {
		'url_utf': /[^\034-\254]+/g,
		'script_self': /\/bitrix\/js\/main\/core\/core(_ajax)*.js$/i,
		'script_self_window': /\/bitrix\/js\/main\/core\/core_window.js$/i,
		'script_self_admin': /\/bitrix\/js\/main\/core\/core_admin.js$/i,
		'script_onload': /window.onload/g
	};

// low-level method
BX.ajax = function(config)
{
	var status, data;

	if (!config || !config.url || !BX.type.isString(config.url))
	{
		return false;
	}

	for (var i in tempDefaultConfig)
		if (typeof (config[i]) == "undefined") config[i] = tempDefaultConfig[i];

	tempDefaultConfig = {};

	for (i in defaultConfig)
		if (typeof (config[i]) == "undefined") config[i] = defaultConfig[i];

	config.method = config.method.toUpperCase();

	if (!BX.localStorage)
		config.lsId = null;

	if (BX.browser.IsIE())
	{
		var result = r.url_utf.exec(config.url);
		if (result)
		{
			do
			{
				config.url = config.url.replace(result, BX.util.urlencode(result));
				result = r.url_utf.exec(config.url);
			} while (result);
		}
	}

	if(config.dataType == 'json')
		config.emulateOnload = false;

	if (!config.cache && config.method == 'GET')
		config.url = BX.ajax._uncache(config.url);

	if (config.method == 'POST' && config.preparePost)
	{
		config.data = BX.ajax.prepareData(config.data);
	}

	var bXHR = true;
	if (config.lsId && !config.lsForce)
	{
		var v = BX.localStorage.get('ajax-' + config.lsId);
		if (v !== null)
		{
			bXHR = false;

			var lsHandler = function(lsData) {
				if (lsData.key == 'ajax-' + config.lsId && lsData.value != 'BXAJAXWAIT')
				{
					var data = lsData.value,
						bRemove = !!lsData.oldValue && data == null;
					if (!bRemove)
						BX.ajax.__run(config, data);
					else if (config.onfailure)
						config.onfailure("timeout");

					BX.removeCustomEvent('onLocalStorageChange', lsHandler);
				}
			};

			if (v == 'BXAJAXWAIT')
			{
				BX.addCustomEvent('onLocalStorageChange', lsHandler);
			}
			else
			{
				setTimeout(function() {lsHandler({key: 'ajax-' + config.lsId, value: v})}, 10);
			}
		}
	}

	if (bXHR)
	{
		config.xhr = BX.ajax.xhr();
		if (!config.xhr) return;

		if (config.lsId)
		{
			BX.localStorage.set('ajax-' + config.lsId, 'BXAJAXWAIT', config.lsTimeout);
		}

		config.xhr.open(config.method, config.url, config.async);

		if (!config.skipBxHeader && !BX.ajax.isCrossDomain(config.url))
		{
			config.xhr.setRequestHeader('Bx-ajax', 'true');
		}

		if (config.method == 'POST' && config.preparePost)
		{
			config.xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		}
		if (typeof(config.headers) == "object")
		{
			for (i = 0; i < config.headers.length; i++)
				config.xhr.setRequestHeader(config.headers[i].name, config.headers[i].value);
		}

		if(!!config.onprogress)
		{
			BX.bind(config.xhr, 'progress', config.onprogress);
		}

		var bRequestCompleted = false;
		var onreadystatechange = config.xhr.onreadystatechange = function(additional)
		{
			if (bRequestCompleted)
				return;

			if (additional === 'timeout')
			{
				if (config.onfailure)
				{
					config.onfailure("timeout");
				}

				BX.onCustomEvent(config.xhr, 'onAjaxFailure', ['timeout', '', config]);

				config.xhr.onreadystatechange = BX.DoNothing;
				config.xhr.abort();

				if (config.async)
				{
					config.xhr = null;
				}
			}
			else
			{
				if (config.xhr.readyState == 4 || additional == 'run')
				{
					status = BX.ajax.xhrSuccess(config.xhr) ? "success" : "error";
					bRequestCompleted = true;
					config.xhr.onreadystatechange = BX.DoNothing;

					if (status == 'success')
					{
						var authHeader = (!!config.skipAuthCheck || BX.ajax.isCrossDomain(config.url))
							? false
							: config.xhr.getResponseHeader('X-Bitrix-Ajax-Status');

						if(!!authHeader && authHeader == 'Authorize')
						{
							if (config.onfailure)
							{
								config.onfailure("auth", config.xhr.status);
							}

							BX.onCustomEvent(config.xhr, 'onAjaxFailure', ['auth', config.xhr.status, config]);
						}
						else
						{
							var data = config.xhr.responseText;

							if (config.lsId)
							{
								BX.localStorage.set('ajax-' + config.lsId, data, config.lsTimeout);
							}

							BX.ajax.__run(config, data);
						}
					}
					else
					{
						if (config.onfailure)
						{
							config.onfailure("status", config.xhr.status);
						}

						BX.onCustomEvent(config.xhr, 'onAjaxFailure', ['status', config.xhr.status, config]);
					}

					if (config.async)
					{
						config.xhr = null;
					}
				}
			}
		};

		if (config.async && config.timeout > 0)
		{
			setTimeout(function() {
				if (config.xhr && !bRequestCompleted)
				{
					onreadystatechange("timeout");
				}
			}, config.timeout * 1000);
		}

		if (config.start)
		{
			config.xhr.send(config.data);

			if (!config.async)
			{
				onreadystatechange('run');
			}
		}

		return config.xhr;
	}
};

BX.ajax.xhr = function()
{
	if (window.XMLHttpRequest)
	{
		try {return new XMLHttpRequest();} catch(e){}
	}
	else if (window.ActiveXObject)
	{
		try { return new window.ActiveXObject("Msxml2.XMLHTTP.6.0"); }
			catch(e) {}
		try { return new window.ActiveXObject("Msxml2.XMLHTTP.3.0"); }
			catch(e) {}
		try { return new window.ActiveXObject("Msxml2.XMLHTTP"); }
			catch(e) {}
		try { return new window.ActiveXObject("Microsoft.XMLHTTP"); }
			catch(e) {}
		throw new Error("This browser does not support XMLHttpRequest.");
	}

	return null;
};

BX.ajax.isCrossDomain = function(url, location)
{
	location = location || window.location;

	//Relative URL gets a current protocol
	if (url.indexOf("//") === 0)
	{
		url = location.protocol + url;
	}

	//Fast check
	if (url.indexOf("http") !== 0)
	{
		return false;
	}

	var link = window.document.createElement("a");
	link.href = url;

	return  link.protocol !== location.protocol ||
			link.hostname !== location.hostname ||
			BX.ajax.getHostPort(link.protocol, link.host) !== BX.ajax.getHostPort(location.protocol, location.host);
};

BX.ajax.getHostPort = function(protocol, host)
{
	var match = /:(\d+)$/.exec(host);
	if (match)
	{
		return match[1];
	}
	else
	{
		if (protocol === "http:")
		{
			return "80";
		}
		else if (protocol === "https:")
		{
			return "443";
		}
	}

	return "";
};

BX.ajax.__prepareOnload = function(scripts)
{
	if (scripts.length > 0)
	{
		BX.ajax['onload_' + ajax_session] = null;

		for (var i=0,len=scripts.length;i<len;i++)
		{
			if (scripts[i].isInternal)
			{
				scripts[i].JS = scripts[i].JS.replace(r.script_onload, 'BX.ajax.onload_' + ajax_session);
			}
		}
	}

	BX.CaptureEventsGet();
	BX.CaptureEvents(window, 'load');
};

BX.ajax.__runOnload = function()
{
	if (null != BX.ajax['onload_' + ajax_session])
	{
		BX.ajax['onload_' + ajax_session].apply(window);
		BX.ajax['onload_' + ajax_session] = null;
	}

	var h = BX.CaptureEventsGet();

	if (h)
	{
		for (var i=0; i<h.length; i++)
			h[i].apply(window);
	}
};

BX.ajax.__run = function(config, data)
{
	if (!config.processData)
	{
		if (config.onsuccess)
		{
			config.onsuccess(data);
		}

		BX.onCustomEvent(config.xhr, 'onAjaxSuccess', [data, config]);
	}
	else
	{
		data = BX.ajax.processRequestData(data, config);
	}
};


BX.ajax._onParseJSONFailure = function(data)
{
	this.jsonFailure = true;
	this.jsonResponse = data;
	this.jsonProactive = /^\[WAF\]/.test(data);
};

BX.ajax.processRequestData = function(data, config)
{
	var result, scripts = [], styles = [];
	switch (config.dataType.toUpperCase())
	{
		case 'JSON':

			BX.addCustomEvent(config.xhr, 'onParseJSONFailure', BX.proxy(BX.ajax._onParseJSONFailure, config));
			result = BX.parseJSON(data, config.xhr);
			BX.removeCustomEvent(config.xhr, 'onParseJSONFailure', BX.proxy(BX.ajax._onParseJSONFailure, config));

			if(!!result && BX.type.isArray(result['bxjs']))
			{
				for(var i = 0; i < result['bxjs'].length; i++)
				{
					if(BX.type.isNotEmptyString(result['bxjs'][i]))
					{
						scripts.push({
							"isInternal": false,
							"JS": result['bxjs'][i],
							"bRunFirst": config.scriptsRunFirst
						});
					}
					else
					{
						scripts.push(result['bxjs'][i])
					}
				}
			}

			if(!!result && BX.type.isArray(result['bxcss']))
			{
				styles = result['bxcss'];
			}

		break;
		case 'SCRIPT':
			scripts.push({"isInternal": true, "JS": data, "bRunFirst": config.scriptsRunFirst});
			result = data;
		break;

		default: // HTML
			var ob = BX.processHTML(data, config.scriptsRunFirst);
			result = ob.HTML; scripts = ob.SCRIPT; styles = ob.STYLE;
		break;
	}

	var bSessionCreated = false;
	if (null == ajax_session)
	{
		ajax_session = parseInt(Math.random() * 1000000);
		bSessionCreated = true;
	}

	if (styles.length > 0)
		BX.loadCSS(styles);

	if (config.emulateOnload)
			BX.ajax.__prepareOnload(scripts);

	var cb = BX.DoNothing;
	if(config.emulateOnload || bSessionCreated)
	{
		cb = BX.defer(function()
		{
			if (config.emulateOnload)
				BX.ajax.__runOnload();
			if (bSessionCreated)
				ajax_session = null;
			BX.onCustomEvent(config.xhr, 'onAjaxSuccessFinish', [config]);
		});
	}

	try
	{
		if (!!config.jsonFailure)
		{
			throw {type: 'json_failure', data: config.jsonResponse, bProactive: config.jsonProactive};
		}

		config.scripts = scripts;

		BX.ajax.processScripts(config.scripts, true);

		if (config.onsuccess)
		{
			config.onsuccess(result);
		}

		BX.onCustomEvent(config.xhr, 'onAjaxSuccess', [result, config]);

		BX.ajax.processScripts(config.scripts, false, cb);
	}
	catch (e)
	{
		if (config.onfailure)
			config.onfailure("processing", e);
		BX.onCustomEvent(config.xhr, 'onAjaxFailure', ['processing', e, config]);
	}
};

BX.ajax.processScripts = function(scripts, bRunFirst, cb)
{
	var scriptsExt = [], scriptsInt = '';

	cb = cb || BX.DoNothing;

	for (var i = 0, length = scripts.length; i < length; i++)
	{
		if (typeof bRunFirst != 'undefined' && bRunFirst != !!scripts[i].bRunFirst)
			continue;

		if (scripts[i].isInternal)
			scriptsInt += ';' + scripts[i].JS;
		else
			scriptsExt.push(scripts[i].JS);
	}

	scriptsExt = BX.util.array_unique(scriptsExt);
	var inlineScripts = scriptsInt.length > 0 ? function() { BX.evalGlobal(scriptsInt); } : BX.DoNothing;

	if (scriptsExt.length > 0)
	{
		BX.load(scriptsExt, function() {
			inlineScripts();
			cb();
		});
	}
	else
	{
		inlineScripts();
		cb();
	}
};

// TODO: extend this function to use with any data objects or forms
BX.ajax.prepareData = function(arData, prefix)
{
	var data = '';
	if (BX.type.isString(arData))
		data = arData;
	else if (null != arData)
	{
		for(var i in arData)
		{
			if (arData.hasOwnProperty(i))
			{
				if (data.length > 0)
					data += '&';
				var name = BX.util.urlencode(i);
				if(prefix)
					name = prefix + '[' + name + ']';
				if(typeof arData[i] == 'object')
					data += BX.ajax.prepareData(arData[i], name);
				else
					data += name + '=' + BX.util.urlencode(arData[i]);
			}
		}
	}
	return data;
};

BX.ajax.xhrSuccess = function(xhr)
{
	return (xhr.status >= 200 && xhr.status < 300) || xhr.status === 304 || xhr.status === 1223 || xhr.status === 0;
};

BX.ajax.Setup = function(config, bTemp)
{
	bTemp = !!bTemp;

	for (var i in config)
	{
		if (bTemp)
			tempDefaultConfig[i] = config[i];
		else
			defaultConfig[i] = config[i];
	}
};

BX.ajax.replaceLocalStorageValue = function(lsId, data, ttl)
{
	if (!!BX.localStorage)
		BX.localStorage.set('ajax-' + lsId, data, ttl);
};


BX.ajax._uncache = function(url)
{
	return url + ((url.indexOf('?') !== -1 ? "&" : "?") + '_=' + (new Date()).getTime());
};

/* simple interface */
BX.ajax.get = function(url, data, callback)
{
	if (BX.type.isFunction(data))
	{
		callback = data;
		data = '';
	}

	data = BX.ajax.prepareData(data);

	if (data)
	{
		url += (url.indexOf('?') !== -1 ? "&" : "?") + data;
		data = '';
	}

	return BX.ajax({
		'method': 'GET',
		'dataType': 'html',
		'url': url,
		'data':  '',
		'onsuccess': callback
	});
};

BX.ajax.getCaptcha = function(callback)
{
	return BX.ajax.loadJSON('http://atrspb.com/bitrix/tools/ajax_captcha.php', callback);
};

BX.ajax.insertToNode = function(url, node)
{
	node = BX(node);
	if (!!node)
	{
		var eventArgs = { cancel: false };
		BX.onCustomEvent('onAjaxInsertToNode', [{ url: url, node: node, eventArgs: eventArgs }]);
		if(eventArgs.cancel === true)
		{
			return;
		}

		var show = null;
		if (!tempDefaultConfig.denyShowWait)
		{
			show = BX.showWait(node);
			delete tempDefaultConfig.denyShowWait;
		}

		return BX.ajax.get(url, function(data) {
			node.innerHTML = data;
			BX.closeWait(node, show);
		});
	}
};

BX.ajax.post = function(url, data, callback)
{
	data = BX.ajax.prepareData(data);

	return BX.ajax({
		'method': 'POST',
		'dataType': 'html',
		'url': url,
		'data':  data,
		'onsuccess': callback
	});
};

/* load and execute external file script with onload emulation */
BX.ajax.loadScriptAjax = function(script_src, callback, bPreload)
{
	if (BX.type.isArray(script_src))
	{
		for (var i=0,len=script_src.length;i<len;i++)
		{
			BX.ajax.loadScriptAjax(script_src[i], callback, bPreload);
		}
	}
	else
	{
		var script_src_test = script_src.replace(/\.js\?.*/, '.js');

		if (r.script_self.test(script_src_test)) return;
		if (r.script_self_window.test(script_src_test) && BX.CWindow) return;
		if (r.script_self_admin.test(script_src_test) && BX.admin) return;

		if (typeof loadedScripts[script_src_test] == 'undefined')
		{
			if (!!bPreload)
			{
				loadedScripts[script_src_test] = '';
				return BX.loadScript(script_src);
			}
			else
			{
				return BX.ajax({
					url: script_src,
					method: 'GET',
					dataType: 'script',
					processData: true,
					emulateOnload: false,
					scriptsRunFirst: true,
					async: false,
					start: true,
					onsuccess: function(result) {
						loadedScripts[script_src_test] = result;
						if (callback)
							callback(result);
					}
				});
			}
		}
		else if (callback)
		{
			callback(loadedScripts[script_src_test]);
		}
	}
};

/* non-xhr loadings */
BX.ajax.loadJSON = function(url, data, callback, callback_failure)
{
	if (BX.type.isFunction(data))
	{
		callback_failure = callback;
		callback = data;
		data = '';
	}

	data = BX.ajax.prepareData(data);

	if (data)
	{
		url += (url.indexOf('?') !== -1 ? "&" : "?") + data;
		data = '';
	}

	return BX.ajax({
		'method': 'GET',
		'dataType': 'json',
		'url': url,
		'onsuccess': callback,
		'onfailure': callback_failure
	});
};

/*
arObs = [{
	url: url,
	type: html|script|json|css,
	callback: function
}]
*/
BX.ajax.load = function(arObs, callback)
{
	if (!BX.type.isArray(arObs))
		arObs = [arObs];

	var cnt = 0;

	if (!BX.type.isFunction(callback))
		callback = BX.DoNothing;

	var handler = function(data)
		{
			if (BX.type.isFunction(this.callback))
				this.callback(data);

			if (++cnt >= len)
				callback();
		};

	for (var i = 0, len = arObs.length; i<len; i++)
	{
		switch(arObs[i].type.toUpperCase())
		{
			case 'SCRIPT':
				BX.loadScript([arObs[i].url], BX.proxy(handler, arObs[i]));
			break;
			case 'CSS':
				BX.loadCSS([arObs[i].url]);

				if (++cnt >= len)
					callback();
			break;
			case 'JSON':
				BX.ajax.loadJSON(arObs[i].url, BX.proxy(handler, arObs[i]));
			break;

			default:
				BX.ajax.get(arObs[i].url, '', BX.proxy(handler, arObs[i]));
			break;
		}
	}
};

/* ajax form sending */
BX.ajax.submit = function(obForm, callback)
{
	if (!obForm.target)
	{
		if (null == obForm.BXFormTarget)
		{
			var frame_name = 'formTarget_' + Math.random();
			obForm.BXFormTarget = document.body.appendChild(BX.create('IFRAME', {
				props: {
					name: frame_name,
					id: frame_name,
					src: 'javascript:void(0)'
				},
				style: {
					display: 'none'
				}
			}));
		}

		obForm.target = obForm.BXFormTarget.name;
	}

	obForm.BXFormCallback = callback;
	BX.bind(obForm.BXFormTarget, 'load', BX.proxy(BX.ajax._submit_callback, obForm));

	BX.submit(obForm);

	return false;
};

BX.ajax.submitComponentForm = function(obForm, container, bWait)
{
	if (!obForm.target)
	{
		if (null == obForm.BXFormTarget)
		{
			var frame_name = 'formTarget_' + Math.random();
			obForm.BXFormTarget = document.body.appendChild(BX.create('IFRAME', {
				props: {
					name: frame_name,
					id: frame_name,
					src: 'javascript:void(0)'
				},
				style: {
					display: 'none'
				}
			}));
		}

		obForm.target = obForm.BXFormTarget.name;
	}

	if (!!bWait)
		var w = BX.showWait(container);

	obForm.BXFormCallback = function(d) {
		if (!!bWait)
			BX.closeWait(w);

		var callOnload = function(){
			if(!!window.bxcompajaxframeonload)
			{
				setTimeout(function(){window.bxcompajaxframeonload();window.bxcompajaxframeonload=null;}, 10);
			}
		};

		BX(container).innerHTML = d;
		BX.onCustomEvent('onAjaxSuccess', [null,null,callOnload]);
	};

	BX.bind(obForm.BXFormTarget, 'load', BX.proxy(BX.ajax._submit_callback, obForm));

	return true;
};

// func will be executed in form context
BX.ajax._submit_callback = function()
{
	//opera and IE8 triggers onload event even on empty iframe
	try
	{
		if(this.BXFormTarget.contentWindow.location.href.indexOf('http') != 0)
			return;
	} catch (e) {
		return;
	}

	if (this.BXFormCallback)
		this.BXFormCallback.apply(this, [this.BXFormTarget.contentWindow.document.body.innerHTML]);

	BX.unbindAll(this.BXFormTarget);
};

BX.ajax.prepareForm = function(obForm, data)
{
	data = (!!data ? data : {});
	var i, ii, el,
		_data = [],
		n = obForm.elements.length,
		files = 0, length = 0;
	if(!!obForm)
	{
		for (i = 0; i < n; i++)
		{
			el = obForm.elements[i];
			if (el.disabled)
				continue;

			if(!el.type)
				continue;

			switch(el.type.toLowerCase())
			{
				case 'text':
				case 'textarea':
				case 'password':
				case 'number':
				case 'hidden':
				case 'select-one':
					_data.push({name: el.name, value: el.value});
					length += (el.name.length + el.value.length);
					break;
				case 'file':
					if (!!el.files)
					{
						for (ii = 0; ii < el.files.length; ii++)
						{
							files++;
							_data.push({name: el.name, value: el.files[ii], file : true});
							length += el.files[ii].size;
						}
					}
					break;
				case 'radio':
				case 'checkbox':
					if(el.checked)
					{
						_data.push({name: el.name, value: el.value});
						length += (el.name.length + el.value.length);
					}
					break;
				case 'select-multiple':
					for (var j = 0; j < el.options.length; j++)
					{
						if (el.options[j].selected)
						{
							_data.push({name : el.name, value : el.options[j].value});
							length += (el.name.length + el.options[j].length);
						}
					}
					break;
				default:
					break;
			}
		}

		i = 0; length = 0;
		var current = data, name, rest, pp;

		while(i < _data.length)
		{
			var p = _data[i].name.indexOf('[');
			if (p == -1) {
				current[_data[i].name] = _data[i].value;
				current = data;
				i++;
			}
			else
			{
				name = _data[i].name.substring(0, p);
				rest = _data[i].name.substring(p+1);
				pp = rest.indexOf(']');

				if(pp == -1)
				{
					if (!current[name])
						current[name] = [];
					current = data;
					i++;
				}
				else if(pp == 0)
				{
					if (!current[name])
						current[name] = [];
					//No index specified - so take the next integer
					current = current[name];
					_data[i].name = '' + current.length;
				}
				else
				{
					if (!current[name])
						current[name] = {};
					//Now index name becomes and name and we go deeper into the array
					current = current[name];
					_data[i].name = rest.substring(0, pp) + rest.substring(pp+1);
				}
			}
		}
	}
	return {data : data, filesCount : files, roughSize : length};
};
BX.ajax.submitAjax = function(obForm, config)
{
	config = (config !== null && typeof config == "object" ? config : {});
	config.url = (config["url"] || obForm.getAttribute("action"));

	var additionalData = (config["data"] || {});
	config.data = BX.ajax.prepareForm(obForm).data;
	for (var ii in additionalData)
	{
		if (additionalData.hasOwnProperty(ii))
		{
			config.data[ii] = additionalData[ii];
		}
	}

	if (!window["FormData"])
	{
		BX.ajax(config);
	}
	else
	{
		var isFile = function(item)
		{
			var res = Object.prototype.toString.call(item);
			return (res == '[object File]' || res == '[object Blob]');
		},
		appendToForm = function(fd, key, val)
		{
			if (!!val && typeof val == "object" && !isFile(val))
			{
				for (var ii in val)
				{
					if (val.hasOwnProperty(ii))
					{
						appendToForm(fd, (key == '' ? ii : key + '[' + ii + ']'), val[ii]);
					}
				}
			}
			else
				fd.append(key, (!!val ? val : ''));
		},
		prepareData = function(arData)
		{
			var data = {};
			if (null != arData)
			{
				if(typeof arData == 'object')
				{
					for(var i in arData)
					{
						if (arData.hasOwnProperty(i))
						{
							var name = BX.util.urlencode(i);
							if(typeof arData[i] == 'object' && arData[i]["file"] !== true)
								data[name] = prepareData(arData[i]);
							else if (arData[i]["file"] === true)
								data[name] = arData[i]["value"];
							else
								data[name] = BX.util.urlencode(arData[i]);
						}
					}
				}
				else
					data = BX.util.urlencode(arData);
			}
			return data;
		},
		fd = new window.FormData();

		if (config.method !== 'POST')
		{
			config.data = BX.ajax.prepareData(config.data);
			if (config.data)
			{
				config.url += (config.url.indexOf('?') !== -1 ? "&" : "?") + config.data;
				config.data = '';
			}
		}
		else
		{
			if (config.preparePost === true)
				config.data = prepareData(config.data);
			appendToForm(fd, '', config.data);
			config.data = fd;
		}

		config.preparePost = false;
		config.start = false;

		var xhr = BX.ajax(config);
		if (!!config["onprogress"])
			xhr.upload.addEventListener(
				'progress',
				function(e){
					var percent = null;
					if(e.lengthComputable && (e.total || e["totalSize"])) {
						percent = e.loaded * 100 / (e.total || e["totalSize"]);
					}
					config["onprogress"](e, percent);
				}
			);
		xhr.send(fd);
	}
};

BX.ajax.UpdatePageData = function (arData)
{
	if (arData.TITLE)
		BX.ajax.UpdatePageTitle(arData.TITLE);
	if (arData.WINDOW_TITLE || arData.TITLE)
		BX.ajax.UpdateWindowTitle(arData.WINDOW_TITLE || arData.TITLE);
	if (arData.NAV_CHAIN)
		BX.ajax.UpdatePageNavChain(arData.NAV_CHAIN);
	if (arData.CSS && arData.CSS.length > 0)
		BX.loadCSS(arData.CSS);
	if (arData.SCRIPTS && arData.SCRIPTS.length > 0)
	{
		var f = function(result,config,cb){

			if(!!config && BX.type.isArray(config.scripts))
			{
				for(var i=0,l=arData.SCRIPTS.length;i<l;i++)
				{
					config.scripts.push({isInternal:false,JS:arData.SCRIPTS[i]});
				}
			}
			else
			{
				BX.loadScript(arData.SCRIPTS,cb);
			}

			BX.removeCustomEvent('onAjaxSuccess',f);
		};
		BX.addCustomEvent('onAjaxSuccess',f);
	}
	else
	{
		var f1 = function(result,config,cb){
			if(BX.type.isFunction(cb))
			{
				cb();
			}
			BX.removeCustomEvent('onAjaxSuccess',f1);
		};
		BX.addCustomEvent('onAjaxSuccess', f1);
	}
};

BX.ajax.UpdatePageTitle = function(title)
{
	var obTitle = BX('pagetitle');
	if (obTitle)
	{
		obTitle.removeChild(obTitle.firstChild);
		if (!obTitle.firstChild)
			obTitle.appendChild(document.createTextNode(title));
		else
			obTitle.insertBefore(document.createTextNode(title), obTitle.firstChild);
	}
};

BX.ajax.UpdateWindowTitle = function(title)
{
	document.title = title;
};

BX.ajax.UpdatePageNavChain = function(nav_chain)
{
	var obNavChain = BX('navigation');
	if (obNavChain)
	{
		obNavChain.innerHTML = nav_chain;
	}
};

/* user options handling */
BX.userOptions = {
	options: null,
	bSend: false,
	delay: 5000,
	path: '/bitrix/admin/user_options.php?'
};

BX.userOptions.setAjaxPath = function(url)
{
	BX.userOptions.path = url.indexOf('?') == -1? url+'?': url+'&';
}
BX.userOptions.save = function(sCategory, sName, sValName, sVal, bCommon)
{
	if (null == BX.userOptions.options)
		BX.userOptions.options = {};

	bCommon = !!bCommon;
	BX.userOptions.options[sCategory+'.'+sName+'.'+sValName] = [sCategory, sName, sValName, sVal, bCommon];

	var sParam = BX.userOptions.__get();
	if (sParam != '')
		document.cookie = BX.message('COOKIE_PREFIX')+"_LAST_SETTINGS=" + encodeURIComponent(sParam) + "&sessid="+BX.bitrix_sessid()+"; expires=Thu, 31 Dec 2020 23:59:59 GMT; path=/;";

	if(!BX.userOptions.bSend)
	{
		BX.userOptions.bSend = true;
		setTimeout(function(){BX.userOptions.send(null)}, BX.userOptions.delay);
	}
};

BX.userOptions.send = function(callback)
{
	var sParam = BX.userOptions.__get();
	BX.userOptions.options = null;
	BX.userOptions.bSend = false;

	if (sParam != '')
	{
		document.cookie = BX.message('COOKIE_PREFIX') + "_LAST_SETTINGS=; path=/;";
		BX.ajax({
			'method': 'GET',
			'dataType': 'html',
			'processData': false,
			'cache': false,
			'url': BX.userOptions.path+sParam+'&sessid='+BX.bitrix_sessid(),
			'onsuccess': callback
		});
	}
};

BX.userOptions.del = function(sCategory, sName, bCommon, callback)
{
	BX.ajax.get(BX.userOptions.path+'action=delete&c='+sCategory+'&n='+sName+(bCommon == true? '&common=Y':'')+'&sessid='+BX.bitrix_sessid(), callback);
};

BX.userOptions.__get = function()
{
	if (!BX.userOptions.options) return '';

	var sParam = '', n = -1, prevParam = '', aOpt, i;

	for (i in BX.userOptions.options)
	{
		if(BX.userOptions.options.hasOwnProperty(i))
		{
			aOpt = BX.userOptions.options[i];

			if (prevParam != aOpt[0]+'.'+aOpt[1])
			{
				n++;
				sParam += '&p['+n+'][c]='+BX.util.urlencode(aOpt[0]);
				sParam += '&p['+n+'][n]='+BX.util.urlencode(aOpt[1]);
				if (aOpt[4] == true)
					sParam += '&p['+n+'][d]=Y';
				prevParam = aOpt[0]+'.'+aOpt[1];
			}

			sParam += '&p['+n+'][v]['+BX.util.urlencode(aOpt[2])+']='+BX.util.urlencode(aOpt[3]);
		}
	}

	return sParam.substr(1);
};

BX.ajax.history = {
	expected_hash: '',

	obParams: null,

	obFrame: null,
	obImage: null,

	obTimer: null,

	bInited: false,
	bHashCollision: false,
	bPushState: !!(history.pushState && BX.type.isFunction(history.pushState)),

	startState: null,

	init: function(obParams)
	{
		if (BX.ajax.history.bInited)
			return;

		this.obParams = obParams;
		var obCurrentState = this.obParams.getState();

		if (BX.ajax.history.bPushState)
		{
			BX.ajax.history.expected_hash = window.location.pathname;
			if (window.location.search)
				BX.ajax.history.expected_hash += window.location.search;

			BX.ajax.history.put(obCurrentState, BX.ajax.history.expected_hash, '', true);
			// due to some strange thing, chrome calls popstate event on page start. so we should delay it
			setTimeout(function(){BX.bind(window, 'popstate', BX.ajax.history.__hashListener);}, 500);
		}
		else
		{
			BX.ajax.history.expected_hash = window.location.hash;

			if (!BX.ajax.history.expected_hash || BX.ajax.history.expected_hash == '#')
				BX.ajax.history.expected_hash = '__bx_no_hash__';

			jsAjaxHistoryContainer.put(BX.ajax.history.expected_hash, obCurrentState);
			BX.ajax.history.obTimer = setTimeout(BX.ajax.history.__hashListener, 500);

			if (BX.browser.IsIE())
			{
				BX.ajax.history.obFrame = document.createElement('IFRAME');
				BX.hide_object(BX.ajax.history.obFrame);

				document.body.appendChild(BX.ajax.history.obFrame);

				BX.ajax.history.obFrame.contentWindow.document.open();
				BX.ajax.history.obFrame.contentWindow.document.write(BX.ajax.history.expected_hash);
				BX.ajax.history.obFrame.contentWindow.document.close();
			}
			else if (BX.browser.IsOpera())
			{
				BX.ajax.history.obImage = document.createElement('IMG');
				BX.hide_object(BX.ajax.history.obImage);

				document.body.appendChild(BX.ajax.history.obImage);

				BX.ajax.history.obImage.setAttribute('src', 'javascript:location.href = \'javascript:BX.ajax.history.__hashListener();\';');
			}
		}

		BX.ajax.history.bInited = true;
	},

	__hashListener: function(e)
	{
		e = e || window.event || {state:false};

		if (BX.ajax.history.bPushState)
		{
			BX.ajax.history.obParams.setState(e.state||BX.ajax.history.startState);
		}
		else
		{
			if (BX.ajax.history.obTimer)
			{
				window.clearTimeout(BX.ajax.history.obTimer);
				BX.ajax.history.obTimer = null;
			}

			var current_hash;
			if (null != BX.ajax.history.obFrame)
				current_hash = BX.ajax.history.obFrame.contentWindow.document.body.innerText;
			else
				current_hash = window.location.hash;

			if (!current_hash || current_hash == '#')
				current_hash = '__bx_no_hash__';

			if (current_hash.indexOf('#') == 0)
				current_hash = current_hash.substring(1);

			if (current_hash != BX.ajax.history.expected_hash)
			{
				var state = jsAjaxHistoryContainer.get(current_hash);
				if (state)
				{
					BX.ajax.history.obParams.setState(state);

					BX.ajax.history.expected_hash = current_hash;
					if (null != BX.ajax.history.obFrame)
					{
						var __hash = current_hash == '__bx_no_hash__' ? '' : current_hash;
						if (window.location.hash != __hash && window.location.hash != '#' + __hash)
							window.location.hash = __hash;
					}
				}
			}

			BX.ajax.history.obTimer = setTimeout(BX.ajax.history.__hashListener, 500);
		}
	},

	put: function(state, new_hash, new_hash1, bStartState)
	{
		if (this.bPushState)
		{
			if(!bStartState)
			{
				history.pushState(state, '', new_hash);
			}
			else
			{
				BX.ajax.history.startState = state;
			}
		}
		else
		{
			if (typeof new_hash1 != 'undefined')
				new_hash = new_hash1;
			else
				new_hash = 'view' + new_hash;

			jsAjaxHistoryContainer.put(new_hash, state);
			BX.ajax.history.expected_hash = new_hash;

			window.location.hash = BX.util.urlencode(new_hash);

			if (null != BX.ajax.history.obFrame)
			{
				BX.ajax.history.obFrame.contentWindow.document.open();
				BX.ajax.history.obFrame.contentWindow.document.write(new_hash);
				BX.ajax.history.obFrame.contentWindow.document.close();
			}
		}
	},

	checkRedirectStart: function(param_name, param_value)
	{
		var current_hash = window.location.hash;
		if (current_hash.substring(0, 1) == '#') current_hash = current_hash.substring(1);

		var test = current_hash.substring(0, 5);
		if (test == 'view/' || test == 'view%')
		{
			BX.ajax.history.bHashCollision = true;
			document.write('<' + 'div id="__ajax_hash_collision_' + param_value + '" style="display: none;">');
		}
	},

	checkRedirectFinish: function(param_name, param_value)
	{
		document.write('</div>');

		var current_hash = window.location.hash;
		if (current_hash.substring(0, 1) == '#') current_hash = current_hash.substring(1);

		BX.ready(function ()
		{
			var test = current_hash.substring(0, 5);
			if (test == 'view/' || test == 'view%')
			{
				var obColNode = BX('__ajax_hash_collision_' + param_value);
				var obNode = obColNode.firstChild;
				BX.cleanNode(obNode);
				obColNode.style.display = 'block';

				// IE, Opera and Chrome automatically modifies hash with urlencode, but FF doesn't ;-(
				if (test != 'view%')
					current_hash = BX.util.urlencode(current_hash);

				current_hash += (current_hash.indexOf('%3F') == -1 ? '%3F' : '%26') + param_name + '=' + param_value;

				var url = '/bitrix/tools/ajax_redirector.php?hash=' + current_hash;

				BX.ajax.insertToNode(url, obNode);
			}
		});
	}
};

BX.ajax.component = function(node)
{
	this.node = node;
};

BX.ajax.component.prototype.getState = function()
{
	var state = {
		'node': this.node,
		'title': window.document.title,
		'data': BX(this.node).innerHTML
	};

	var obNavChain = BX('navigation');
	if (null != obNavChain)
		state.nav_chain = obNavChain.innerHTML;

	BX.onCustomEvent(BX(state.node), "onComponentAjaxHistoryGetState", [state]);

	return state;
};

BX.ajax.component.prototype.setState = function(state)
{
	BX(state.node).innerHTML = state.data;
	BX.ajax.UpdatePageTitle(state.title);

	if (state.nav_chain)
	{
		BX.ajax.UpdatePageNavChain(state.nav_chain);
	}

	BX.onCustomEvent(BX(state.node), "onComponentAjaxHistorySetState", [state]);
};

var jsAjaxHistoryContainer = {
	arHistory: {},

	put: function(hash, state)
	{
		this.arHistory[hash] = state;
	},

	get: function(hash)
	{
		return this.arHistory[hash];
	}
};


BX.ajax.FormData = function()
{
	this.elements = [];
	this.files = [];
	this.features = {};
	this.isSupported();
	this.log('BX FormData init');
};

BX.ajax.FormData.isSupported = function()
{
	var f = new BX.ajax.FormData();
	var result = f.features.supported;
	f = null;
	return result;
};

BX.ajax.FormData.prototype.log = function(o)
{
	if (false) {
		try {
			if (BX.browser.IsIE()) o = JSON.stringify(o);
			console.log(o);
		} catch(e) {}
	}
};

BX.ajax.FormData.prototype.isSupported = function()
{
	var f = {};
	f.fileReader = (window.FileReader && window.FileReader.prototype.readAsBinaryString);
	f.readFormData = f.sendFormData = !!(window.FormData);
	f.supported = !!(f.readFormData && f.sendFormData);
	this.features = f;
	this.log('features:');
	this.log(f);

	return f.supported;
};

BX.ajax.FormData.prototype.append = function(name, value)
{
	if (typeof(value) === 'object') { // seems to be files element
		this.files.push({'name': name, 'value':value});
	} else {
		this.elements.push({'name': name, 'value':value});
	}
};

BX.ajax.FormData.prototype.send = function(url, callbackOk, callbackProgress, callbackError)
{
	this.log('FD send');
	this.xhr = BX.ajax({
			'method': 'POST',
			'dataType': 'html',
			'url': url,
			'onsuccess': callbackOk,
			'onfailure': callbackError,
			'start': false,
			'preparePost':false
		});

	if (callbackProgress)
	{
		this.xhr.upload.addEventListener(
			'progress',
			function(e) {
				if (e.lengthComputable)
					callbackProgress(e.loaded / (e.total || e.totalSize));
			},
			false
		);
	}

	if (this.features.readFormData && this.features.sendFormData)
	{
		var fd = new FormData();
		this.log('use browser formdata');
		for (var i in this.elements)
		{
			if(this.elements.hasOwnProperty(i))
				fd.append(this.elements[i].name,this.elements[i].value);
		}
		for (i in this.files)
		{
			if(this.files.hasOwnProperty(i))
				fd.append(this.files[i].name, this.files[i].value);
		}
		this.xhr.send(fd);
	}

	return this.xhr;
};

BX.addCustomEvent('onAjaxFailure', BX.debug);
})(window);


/* End */
;
; /* Start:"a:4:{s:4:"full";s:48:"http://atrspb.com/bitrix/js/main/json/json2.min.js?14970384273467";s:6:"source";s:33:"json2.min.js"/*tpa=http://atrspb.com/bitrix/js/main/json/json2.min.js*/;s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/

var JSON;if(!JSON){JSON={};}
(function(){'use strict';function f(n){return n<10?'0'+n:n;}
if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z':null;};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf();};}
var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}
function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}
if(typeof rep==='function'){value=rep.call(holder,key,value);}
switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}
v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}
if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==='string'){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}
v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}
if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}
rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}
return str('',{'':value});};}
if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}
return reviver.call(holder,key,value);}
text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+
('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}
if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}
throw new SyntaxError('JSON.parse');};}}());
/* End */
;
; /* Start:"a:4:{s:4:"full";s:50:"http://atrspb.com/bitrix/js/main/core/core_ls.min.js?14970384267365";s:6:"source";s:31:"core_ls.js"/*tpa=http://atrspb.com/bitrix/js/main/core/core_ls.js*/;s:3:"min";s:35:"core_ls.min.js"/*tpa=http://atrspb.com/bitrix/js/main/core/core_ls.min.js*/;s:3:"map";s:35:"core_ls.map.js"/*tpa=http://atrspb.com/bitrix/js/main/core/core_ls.map.js*/;}"*/
(function(e){if(e.BX.localStorage)return;var t=e.BX,r=null,o=null,a="_bxCurrentKey",i=false;t.localStorage=function(){this.keyChanges={};t.bind(t.browser.IsIE()&&!t.browser.IsIE9()?document:e,"storage",t.proxy(this._onchange,this));setInterval(t.delegate(this._clear,this),5e3)};t.localStorage.checkBrowser=function(){return i};t.localStorage.set=function(e,r,o){return t.localStorage.instance().set(e,r,o)};t.localStorage.get=function(e){return t.localStorage.instance().get(e)};t.localStorage.remove=function(e){return t.localStorage.instance().remove(e)};t.localStorage.instance=function(){if(!r){var e=t.localStorage.checkBrowser();if(e=="native")r=new t.localStorage;else if(e=="ie8")r=new t.localStorageIE8;else if(e=="ie7")r=new t.localStorageIE7;else{r={set:t.DoNothing,get:function(){return null},remove:t.DoNothing}}}return r};t.localStorage.prototype.prefix=function(){if(!o){o="bx"+t.message("USER_ID")+"-"+(t.message.SITE_ID?t.message("SITE_ID"):"admin")+"-"}return o};t.localStorage.prototype._onchange=function(r){r=r||e.event;if(!r.key)return;if(t.browser.DetectIeVersion()>0&&this.keyChanges[r.key]){this.keyChanges[r.key]=false;return}if(!!r.key&&r.key.substring(0,this.prefix().length)==this.prefix()){var o={key:r.key.substring(this.prefix().length,r.key.length),value:!!r.newValue?this._decode(r.newValue.substring(11,r.newValue.length)):null,oldValue:!!r.oldValue?this._decode(r.oldValue.substring(11,r.oldValue.length)):null};switch(o.key){case"BXGCE":if(o.value){t.onCustomEvent(o.value.e,o.value.p)}break;default:if(r.newValue)t.onCustomEvent(e,"onLocalStorageSet",[o]);if(r.oldValue&&!r.newValue)t.onCustomEvent(e,"onLocalStorageRemove",[o]);t.onCustomEvent(e,"onLocalStorageChange",[o]);break}}};t.localStorage.prototype._clear=function(){var e=+new Date,t,r;for(r=0;r<localStorage.length;r++){t=localStorage.key(r);if(t.substring(0,2)=="bx"){var o=localStorage.getItem(t).split(":",1)*1e3;if(e>=o)localStorage.removeItem(t)}}};t.localStorage.prototype._encode=function(e){if(typeof e=="object")e=JSON.stringify(e);else e=e.toString();return e};t.localStorage.prototype._decode=function(e){var t=null;if(!!e){try{t=JSON.parse(e)}catch(r){t=e}}return t};t.localStorage.prototype._trigger_error=function(e,r,o,a){t.onCustomEvent(this,"onLocalStorageError",[e,{key:r,value:o,ttl:a}])};t.localStorage.prototype.set=function(e,t,r){if(!r||r<=0)r=60;if(e==undefined||e==null||t==undefined)return false;this.keyChanges[this.prefix()+e]=true;try{localStorage.setItem(this.prefix()+e,Math.round(+new Date/1e3)+r+":"+this._encode(t))}catch(o){this._trigger_error(o,e,t,r)}};t.localStorage.prototype.get=function(e){var t=localStorage.getItem(this.prefix()+e);if(t){var r=t.split(":",1)*1e3;if(+new Date<=r){t=t.substring(11,t.length);return this._decode(t)}}return null};t.localStorage.prototype.remove=function(e){this.keyChanges[this.prefix()+e]=true;localStorage.removeItem(this.prefix()+e)};t.localStorageIE7=function(){this.NS="BXLocalStorage";this.__current_state={};this.keyChanges={};t.ready(t.delegate(this._Init,this))};t.extend(t.localStorageIE7,t.localStorage);t.localStorageIE7.prototype._Init=function(){this.storage_element=document.body.appendChild(t.create("DIV"));this.storage_element.addBehavior("#default#userData");this.storage_element.load(this.NS);var e=this.storage_element.xmlDocument,r=e.firstChild.attributes.length;for(var o=0;o<r;o++){if(!!e.firstChild.attributes[o]){var a=e.firstChild.attributes[o].nodeName;if(a.substring(0,this.prefix().length)==this.prefix()){this.__current_state[a]=e.firstChild.attributes[o].nodeValue}}}setInterval(t.delegate(this._Listener,this),500);setInterval(t.delegate(this._clear,this),5e3)};t.localStorageIE7.prototype._Listener=function(e){this.storage_element.load(this.NS);var t=this.storage_element.xmlDocument,r=t.firstChild.attributes.length,o,a,i;var l={},s=[];for(o=0;o<r;o++){if(!!t.firstChild.attributes[o]){a=t.firstChild.attributes[o].nodeName;if(a.substring(0,this.prefix().length)==this.prefix()){i=t.firstChild.attributes[o].nodeValue;if(this.__current_state[a]!=i){s.push({key:a,newValue:i,oldValue:this.__current_state[a]})}l[a]=i;delete this.__current_state[a]}}}for(o in this.__current_state){if(this.__current_state.hasOwnProperty(o)){s.push({key:o,newValue:undefined,oldValue:this.__current_state[o]})}}this.__current_state=l;for(o=0;o<s.length;o++){this._onchange(s[o])}};t.localStorageIE7.prototype._clear=function(){this.storage_element.load(this.NS);var e=this.storage_element.xmlDocument,t=e.firstChild.attributes.length,r=+new Date,o,a,i,l;for(o=0;o<t;o++){if(!!e.firstChild.attributes[o]){a=e.firstChild.attributes[o].nodeName;if(a.substring(0,2)=="bx"){i=e.firstChild.attributes[o].nodeValue;l=i.split(":",1)*1e3;if(r>=l){e.firstChild.removeAttribute(a)}}}}this.storage_element.save(this.NS)};t.localStorageIE7.prototype.set=function(e,t,r){if(!r||r<=0)r=60;try{this.storage_element.load(this.NS);var o=this.storage_element.xmlDocument;this.keyChanges[this.prefix()+e]=true;o.firstChild.setAttribute(this.prefix()+e,Math.round(+new Date/1e3)+r+":"+this._encode(t));this.storage_element.save(this.NS)}catch(a){this._trigger_error(a,e,t,r)}};t.localStorageIE7.prototype.get=function(e){this.storage_element.load(this.NS);var t=this.storage_element.xmlDocument;var r=t.firstChild.getAttribute(this.prefix()+e);if(r){var o=r.split(":",1)*1e3;if(+new Date<=o){r=r.substring(11,r.length);return this._decode(r)}}return null};t.localStorageIE7.prototype.remove=function(e){this.storage_element.load(this.NS);var t=this.storage_element.xmlDocument;t.firstChild.removeAttribute(this.prefix()+e);this.keyChanges[this.prefix()+e]=true;this.storage_element.save(this.NS)};t.localStorageIE8=function(){this.key=a;this.currentKey=null;this.currentValue=null;t.localStorageIE8.superclass.constructor.apply(this)};t.extend(t.localStorageIE8,t.localStorage);t.localStorageIE8.prototype._onchange=function(e){if(null==this.currentKey){this.currentKey=localStorage.getItem(this.key);if(this.currentKey){this.currentValue=localStorage.getItem(this.prefix()+this.currentKey)}}else{e={key:this.prefix()+this.currentKey,newValue:localStorage.getItem(this.prefix()+this.currentKey),oldValue:this.currentValue};this.currentKey=null;this.currentValue=null;if(this.keyChanges[e.key]){this.keyChanges[e.key]=false;return}t.localStorageIE8.superclass._onchange.apply(this,[e])}};t.localStorageIE8.prototype.set=function(e,r,o){this.currentKey=null;this.keyChanges[this.prefix()+e]=true;try{localStorage.setItem(this.key,e);t.localStorageIE8.superclass.set.apply(this,arguments)}catch(a){this._trigger_error(a,e,r,o)}};t.localStorageIE8.prototype.remove=function(e){this.currentKey=null;this.keyChanges[this.prefix()+e]=true;localStorage.setItem(this.key,e);t.localStorageIE8.superclass.remove.apply(this,arguments)};t.onGlobalCustomEvent=function(e,r,o){if(!!t.localStorage.checkBrowser())t.localStorage.set("BXGCE",{e:e,p:r},1);if(!o)t.onCustomEvent(e,r)};try{i=!!localStorage.setItem}catch(l){}if(i){i="native";var s=t.browser.IsIE()&&!t.browser.IsIE9()?document:e,n=function(r){if(typeof(r||e.event).key=="undefined")i="ie8";t.unbind(s,"storage",n);t.localStorage.instance()};t.bind(s,"storage",n);try{localStorage.setItem(a,null)}catch(l){i=false;t.localStorage.instance()}}else if(t.browser.IsIE7()){i="ie7";t.localStorage.instance()}})(window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:41:"http://atrspb.com/bitrix/js/main/session.js?14970384283642";s:6:"source";s:26:"session.js"/*tpa=http://atrspb.com/bitrix/js/main/session.js*/;s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function CBXSession()
{
	var _this = this;
	this.mess = {};
	this.timeout = null;
	this.sessid = null;
	this.bShowMess = true;
	this.dateStart = new Date();
	this.dateInput = new Date();
	this.dateCheck = new Date();
	this.activityInterval = 0;
	this.notifier = null;
	
	this.Expand = function(timeout, sessid, bShowMess, key)
	{
		this.timeout = timeout;
		this.sessid = sessid;
		this.bShowMess = bShowMess;
		this.key = key;
		
		BX.ready(function(){
			BX.bind(document, "keypress", _this.OnUserInput);
			BX.bind(document.body, "mousemove", _this.OnUserInput);
			BX.bind(document.body, "click", _this.OnUserInput);
			
			setTimeout(_this.CheckSession, (_this.timeout-60)*1000);
		})
	};
		
	this.OnUserInput = function()
	{
		var curr = new Date();
		_this.dateInput.setTime(curr.valueOf());
	};
	
	this.CheckSession = function()
	{
		var curr = new Date();
		if(curr.valueOf() - _this.dateCheck.valueOf() < 30000)
			return;

		_this.activityInterval = Math.round((_this.dateInput.valueOf() - _this.dateStart.valueOf())/1000);
		_this.dateStart.setTime(_this.dateInput.valueOf());
		var interval = (_this.activityInterval > _this.timeout? (_this.timeout-60) : _this.activityInterval);

		var config = {
			'method': 'GET',
			'dataType': 'html',
			'url': '/bitrix/tools/public_session.php?sessid='+_this.sessid+'&interval='+interval+'&k='+_this.key,
			'data':  '',
			'onsuccess': function(data){_this.CheckResult(data)},
			'lsId': 'sess_expand', //caching the result in the local storage for multiple tabs
			'lsTimeout': 60
		};
		if(interval > 0)
		{
			//forced request
			config.lsForce = true;
		}
		BX.ajax(config);
	};
	
	this.CheckResult = function(data)
	{
		if(data == 'SESSION_EXPIRED')
		{
			if(_this.bShowMess)
			{
				if(!_this.notifier)
				{
					_this.notifier = document.body.appendChild(BX.create('DIV', {
						props: {className: 'bx-session-message'},
						style: {
							top: '0px',
							backgroundColor: '#FFEB41',
							border: '1px solid #EDDA3C',
							width: '630px',
							fontFamily: 'Arial,Helvetica,sans-serif',
							fontSize: '13px',
							fontWeight: 'bold',
							textAlign: 'center',
							color: 'black',
							position: 'absolute',
							zIndex: '10000',
							padding: '10px'
						},
						html: '<a class="bx-session-message-close" style="display:block; width:12px; height:12px; background:url(/bitrix/js/main/core/images/close.gif) center no-repeat; float:right;" href="javascript:bxSession.Close()"></a>'+_this.mess.messSessExpired
					}));

					var windowScroll = BX.GetWindowScrollPos();
					var windowSize = BX.GetWindowInnerSize();

					_this.notifier.style.left = parseInt(windowScroll.scrollLeft + windowSize.innerWidth / 2 - parseInt(_this.notifier.clientWidth) / 2) + 'px';

					if(BX.browser.IsIE())
					{
						_this.notifier.style.top = windowScroll.scrollTop + 'px';

						BX.bind(window, 'scroll', function()
						{
							var windowScroll = BX.GetWindowScrollPos();
							_this.notifier.style.top = windowScroll.scrollTop + 'px';
						});
					}
					else
					{
						_this.notifier.style.position='fixed';
					}
				}

				_this.notifier.style.display = '';
			}
		}
		else
		{
			var timeout;
			if(data == 'SESSION_CHANGED')
				timeout = (_this.timeout-60);
			else
				timeout = (_this.activityInterval < 60? 60 : (_this.activityInterval > _this.timeout? (_this.timeout-60) : _this.activityInterval));

			var curr = new Date();
			_this.dateCheck.setTime(curr.valueOf());
			setTimeout(_this.CheckSession, timeout*1000);
		}
	};
	
	this.Close = function()
	{
		this.notifier.style.display = 'none';
	}
}

var bxSession = new CBXSession();

/* End */
;
; /* Start:"a:4:{s:4:"full";s:51:"http://atrspb.com/bitrix/js/main/core/core_window.js?149703842696650";s:6:"source";s:35:"core_window.js"/*tpa=http://atrspb.com/bitrix/js/main/core/core_window.js*/;s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
;(function(window) {
if (BX.WindowManager) return;

/* windows manager */
BX.WindowManager = {
	_stack: [],
	_runtime_resize: {},
	_delta: 2,
	_delta_start: 1000,
	currently_loaded: null,

	settings_category: 'BX.WindowManager.9.5',

	register: function (w)
	{
		this.currently_loaded = null;
		var div = w.Get();

		div.style.zIndex = w.zIndex = this.GetZIndex();

		w.WM_REG_INDEX = this._stack.length;
		this._stack.push(w);

		if (this._stack.length < 2)
		{
			BX.bind(document, 'keyup', BX.proxy(this.__checkKeyPress, this));
		}
	},

	unregister: function (w)
	{
		if (null == w.WM_REG_INDEX)
			return null;

		var _current;
		if (this._stack.length > 0)
		{
			while ((_current = this.__pop_stack()) != w)
			{
				if (!_current)
				{
					_current = null;
					break;
				}
			}

			if (this._stack.length <= 0)
			{
				this.enableKeyCheck();
			}

			return _current;
		}
		else
		{
			return null;
		}
	},

	__pop_stack: function(clean)
	{
		if (this._stack.length > 0)
		{
			var _current = this._stack.pop();
			_current.WM_REG_INDEX = null;
			BX.onCustomEvent(_current, 'onWindowUnRegister', [clean === true]);

			return _current;
		}
		else
			return null;
	},

	clean: function()
	{
		while (this.__pop_stack(true)){}
		this._stack = null;
		this.disableKeyCheck();
	},

	Get: function()
	{
		if (this.currently_loaded)
			return this.currently_loaded;
		else if (this._stack.length > 0)
			return this._stack[this._stack.length-1];
		else
			return null;
	},

	setStartZIndex: function(value)
	{
		this._delta_start = value;
	},

	restoreStartZIndex: function()
	{
		this._delta_start = 1000;
	},

	GetZIndex: function()
	{
		var _current;
		return (null != (_current = this._stack[this._stack.length-1])
			? parseInt(_current.Get().style.zIndex) + this._delta
			: this._delta_start
		);
	},

	__get_check_url: function(url)
	{
		var pos = url.indexOf('?');
		return pos == -1 ? url : url.substring(0, pos);
	},

	saveWindowSize: function(url, params)
	{
		var check_url = this.__get_check_url(url);
		if (BX.userOptions)
		{
			BX.userOptions.save(this.settings_category, 'size_' + check_url, 'width', params.width);
			BX.userOptions.save(this.settings_category, 'size_' + check_url, 'height', params.height);
		}

		this._runtime_resize[check_url] = params;
	},

	saveWindowOptions: function(wnd_id, opts)
	{
		if (BX.userOptions)
		{
			for (var i in opts)
			{
				if(opts.hasOwnProperty(i))
				{
					BX.userOptions.save(this.settings_category, 'options_' + wnd_id, i, opts[i]);
				}
			}
		}
	},

	getRuntimeWindowSize: function(url)
	{
		return this._runtime_resize[this.__get_check_url(url)];
	},

	disableKeyCheck: function()
	{
		BX.unbind(document, 'keyup', BX.proxy(this.__checkKeyPress, this));
	},

	enableKeyCheck: function()
	{
		BX.bind(document, 'keyup', BX.proxy(this.__checkKeyPress, this));
	},

	__checkKeyPress: function(e)
	{
		if (null == e)
			e = window.event;

		if (e.keyCode == 27)
		{
			var wnd = BX.WindowManager.Get();
			if (wnd && !wnd.unclosable) wnd.Close();
		}
	}
};

BX.garbage(BX.WindowManager.clean, BX.WindowManager);

/* base button class */
BX.CWindowButton = function(params)
{
	if (params.btn)
	{
		this.btn = params.btn;
		this.parentWindow = params.parentWindow;

		if (/save|apply/i.test(this.btn.name))
		{
			BX.bind(this.btn, 'click', BX.delegate(this.disableUntilError, this));
		}
	}
	else
	{
		this.title = params.title; // html value attr
		this.hint = params.hint; // html title attr
		this.id = params.id; // html name and id attrs
		this.name = params.name; // html name or value attrs when id and title 're absent
		this.className = params.className; // className for button input

		this.action = params.action;
		this.onclick = params.onclick;

		// you can override button creation method
		if (params.Button && BX.type.isFunction(params.Button))
			this.Button = params.Button;

		this.btn = null;
	}
};

BX.CWindowButton.prototype.disable = function()
{
	if (this.btn)
		this.parentWindow.showWait(this.btn);
};
BX.CWindowButton.prototype.enable = function(){
	if (this.btn)
		this.parentWindow.closeWait(this.btn);
};

BX.CWindowButton.prototype.emulate = function()
{
	if (this.btn && this.btn.disabled)
		return;

	var act =
		this.action
		? BX.delegate(this.action, this)
		: (
			this.onclick
			? this.onclick
			: (
				this.btn
				? this.btn.getAttribute('onclick')
				: ''
			)
		);

	if (act)
	{
		setTimeout(act, 50);
		if (this.btn && /save|apply/i.test(this.btn.name) && !this.action)
		{
			this.disableUntilError();
		}
	}
};

BX.CWindowButton.prototype.Button = function(parentWindow)
{
	this.parentWindow = parentWindow;

	var btn = {
		props: {
			'type': 'button',
			'name': this.id ? this.id : this.name,
			'value': this.title ? this.title : this.name,
			'id': this.id
		}
	};

	if (this.hint)
		btn.props.title = this.hint;
	if (!!this.className)
		btn.props.className = this.className;

	if (this.action)
	{
		btn.events = {
			'click': BX.delegate(this.action, this)
		};
	}
	else if (this.onclick)
	{
		if (BX.browser.IsIE())
		{
			btn.events = {
				'click': BX.delegate(function() {eval(this.onclick)}, this)
			};
		}
		else
		{
			btn.attrs = {
				'onclick': this.onclick
			};
		}
	}

	this.btn = BX.create('INPUT', btn);

	return this.btn;
};

BX.CWindowButton.prototype.disableUntilError = function() {
	this.disable();
	if (!this.__window_error_handler_set)
	{
		BX.addCustomEvent(this.parentWindow, 'onWindowError', BX.delegate(this.enable, this));
		this.__window_error_handler_set = true;
	}
};

/* base window class */
BX.CWindow = function(div, type)
{
	this.DIV = div || document.createElement('DIV');

	this.SETTINGS = {
		resizable: false,
		min_height: 0,
		min_width: 0,
		top: 0,
		left: 0,
		draggable: false,
		drag_restrict: true,
		resize_restrict: true
	};

	this.ELEMENTS = {
		draggable: [],
		resizer: [],
		close: []
	};

	this.type = type == 'float' ? 'float' : 'dialog';

	BX.adjust(this.DIV, {
		props: {
			className: 'bx-core-window'
		},
		style: {
			'zIndex': 0,
			'position': 'absolute',
			'display': 'none',
			'top': this.SETTINGS.top + 'px',
			'left': this.SETTINGS.left + 'px',
			'height': '100px',
			'width': '100px'
		}
	});

	this.isOpen = false;

	BX.addCustomEvent(this, 'onWindowRegister', BX.delegate(this.onRegister, this));
	BX.addCustomEvent(this, 'onWindowUnRegister', BX.delegate(this.onUnRegister, this));

	this.MOUSEOVER = null;
	BX.bind(this.DIV, 'mouseover', BX.delegate(this.__set_msover, this));
	BX.bind(this.DIV, 'mouseout', BX.delegate(this.__unset_msover, this));

	BX.ready(BX.delegate(function() {
		document.body.appendChild(this.DIV);
	}, this));
};

BX.CWindow.prototype.Get = function () {return this.DIV};
BX.CWindow.prototype.visible = function() {return this.isOpen;};

BX.CWindow.prototype.Show = function(bNotRegister)
{
	this.DIV.style.display = 'block';

	if (!bNotRegister)
	{
		BX.WindowManager.register(this);
		BX.onCustomEvent(this, 'onWindowRegister');
	}
};

BX.CWindow.prototype.Hide = function()
{
	BX.WindowManager.unregister(this);
	this.DIV.style.display = 'none';
};

BX.CWindow.prototype.onRegister = function()
{
	this.isOpen = true;
};

BX.CWindow.prototype.onUnRegister = function(clean)
{
	this.isOpen = false;

	if (clean || (this.PARAMS && this.PARAMS.content_url))
	{
		if (clean) {BX.onCustomEvent(this, 'onWindowClose', [this, true]);}

		if (this.DIV.parentNode)
			this.DIV.parentNode.removeChild(this.DIV);
	}
	else
	{
		this.DIV.style.display = 'none';
	}
};

BX.CWindow.prototype.CloseDialog = // compatibility
BX.CWindow.prototype.Close = function(bImmediately)
{
	BX.onCustomEvent(this, 'onBeforeWindowClose', [this]);
	if (bImmediately !== true)
	{
		if (this.denyClose)
			return false;
	}

	BX.onCustomEvent(this, 'onWindowClose', [this]);

	//this crashes vis editor in ie via onWindowResizeExt event handler
	//if (this.bExpanded) this.__expand();
	// alternative version:
	if (this.bExpanded)
	{
		var pDocElement = BX.GetDocElement();
		BX.unbind(window, 'resize', BX.proxy(this.__expand_onresize, this));
		pDocElement.style.overflow = this.__expand_settings.overflow;
	}

	BX.WindowManager.unregister(this);

	return true;
};

BX.CWindow.prototype.SetResize = function(elem)
{
	elem.style.cursor = 'se-resize';
	BX.bind(elem, 'mousedown', BX.proxy(this.__startResize, this));

	this.ELEMENTS.resizer.push(elem);
	this.SETTINGS.resizable = true;
};

BX.CWindow.prototype.SetExpand = function(elem, event_name)
{
	event_name = event_name || 'click';
	BX.bind(elem, event_name, BX.proxy(this.__expand, this));
};

BX.CWindow.prototype.__expand_onresize = function()
{
	var windowSize = BX.GetWindowInnerSize();
	this.DIV.style.width = windowSize.innerWidth + "px";
	this.DIV.style.height = windowSize.innerHeight + "px";

	BX.onCustomEvent(this, 'onWindowResize');
};

BX.CWindow.prototype.__expand = function()
{
	var pDocElement = BX.GetDocElement();

	if (!this.bExpanded)
	{
		var wndScroll = BX.GetWindowScrollPos(),
			wndSize = BX.GetWindowInnerSize();

		this.__expand_settings = {
			resizable: this.SETTINGS.resizable,
			draggable: this.SETTINGS.draggable,
			width: this.DIV.style.width,
			height: this.DIV.style.height,
			left: this.DIV.style.left,
			top: this.DIV.style.top,
			scrollTop: wndScroll.scrollTop,
			scrollLeft: wndScroll.scrollLeft,
			overflow: BX.style(pDocElement, 'overflow')
		};

		this.SETTINGS.resizable = false;
		this.SETTINGS.draggable = false;

		window.scrollTo(0,0);
		pDocElement.style.overflow = 'hidden';

		this.DIV.style.top = '0px';
		this.DIV.style.left = '0px';

		this.DIV.style.width = wndSize.innerWidth + 'px';
		this.DIV.style.height = wndSize.innerHeight + 'px';

		this.bExpanded = true;

		BX.onCustomEvent(this, 'onWindowExpand');
		BX.onCustomEvent(this, 'onWindowResize');

		BX.bind(window, 'resize', BX.proxy(this.__expand_onresize, this));
	}
	else
	{
		BX.unbind(window, 'resize', BX.proxy(this.__expand_onresize, this));

		this.SETTINGS.resizable = this.__expand_settings.resizable;
		this.SETTINGS.draggable = this.__expand_settings.draggable;

		pDocElement.style.overflow = this.__expand_settings.overflow;

		this.DIV.style.top = this.__expand_settings.top;
		this.DIV.style.left = this.__expand_settings.left;
		this.DIV.style.width = this.__expand_settings.width;
		this.DIV.style.height = this.__expand_settings.height;

		window.scrollTo(this.__expand_settings.scrollLeft, this.__expand_settings.scrollTop);

		this.bExpanded = false;

		BX.onCustomEvent(this, 'onWindowNarrow');
		BX.onCustomEvent(this, 'onWindowResize');

	}
};

BX.CWindow.prototype.Resize = function(x, y)
{
	var new_width = Math.max(x - this.pos.left + this.dx, this.SETTINGS.min_width);
	var new_height = Math.max(y - this.pos.top + this.dy, this.SETTINGS.min_height);

	if (this.SETTINGS.resize_restrict)
	{
		var scrollSize = BX.GetWindowScrollSize();

		if (this.pos.left + new_width > scrollSize.scrollWidth - this.dw)
			new_width = scrollSize.scrollWidth - this.pos.left - this.dw;
	}

	this.DIV.style.width = new_width + 'px';
	this.DIV.style.height = new_height + 'px';

	BX.onCustomEvent(this, 'onWindowResize');
};

BX.CWindow.prototype.__startResize = function(e)
{
	if (!this.SETTINGS.resizable)
		return false;

	if(!e) e = window.event;

	this.wndSize = BX.GetWindowScrollPos();
	this.wndSize.innerWidth = BX.GetWindowInnerSize().innerWidth;

	this.pos = BX.pos(this.DIV);

	this.x = e.clientX + this.wndSize.scrollLeft;
	this.y = e.clientY + this.wndSize.scrollTop;

	this.dx = this.pos.left + this.pos.width - this.x;
	this.dy = this.pos.top + this.pos.height - this.y;
	this.dw = this.pos.width - parseInt(this.DIV.style.width);

	BX.bind(document, "mousemove", BX.proxy(this.__moveResize, this));
	BX.bind(document, "mouseup", BX.proxy(this.__stopResize, this));

	if(document.body.setCapture)
		document.body.setCapture();

	document.onmousedown = BX.False;

	var b = document.body;
	b.ondrag = b.onselectstart = BX.False;
	b.style.MozUserSelect = this.DIV.style.MozUserSelect = 'none';
	b.style.cursor = 'se-resize';

	BX.onCustomEvent(this, 'onWindowResizeStart');

	return true;
};

BX.CWindow.prototype.__moveResize = function(e)
{
	if(!e) e = window.event;

	var windowScroll = BX.GetWindowScrollPos();

	var x = e.clientX + windowScroll.scrollLeft;
	var y = e.clientY + windowScroll.scrollTop;

	if(this.x == x && this.y == y)
		return;

	this.Resize(x, y);

	this.x = x;
	this.y = y;
};

BX.CWindow.prototype.__stopResize = function()
{
	if(document.body.releaseCapture)
		document.body.releaseCapture();

	BX.unbind(document, "mousemove", BX.proxy(this.__moveResize, this));
	BX.unbind(document, "mouseup", BX.proxy(this.__stopResize, this));

	document.onmousedown = null;

	var b = document.body;
	b.ondrag = b.onselectstart = null;
	b.style.MozUserSelect = this.DIV.style.MozUserSelect = '';
	b.style.cursor = '';

	BX.onCustomEvent(this, 'onWindowResizeFinished')
};

BX.CWindow.prototype.SetClose = function(elem)
{
	BX.bind(elem, 'click', BX.proxy(this.Close, this));
	this.ELEMENTS.close.push(elem);
};

BX.CWindow.prototype.SetDraggable = function(elem)
{
	BX.bind(elem, 'mousedown', BX.proxy(this.__startDrag, this));

	elem.style.cursor = 'move';

	this.ELEMENTS.draggable.push(elem);
	this.SETTINGS.draggable = true;
};

BX.CWindow.prototype.Move = function(x, y)
{
	var dxShadow = 1; // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

	var left = parseInt(this.DIV.style.left)+x;
	var top = parseInt(this.DIV.style.top)+y;

	if (this.SETTINGS.drag_restrict)
	{
		//Left side
		if (left < 0)
			left = 0;

		//Right side
		var scrollSize = BX.GetWindowScrollSize();
		var floatWidth = this.DIV.offsetWidth;
		var floatHeight = this.DIV.offsetHeight;

		if (left > (scrollSize.scrollWidth - floatWidth - dxShadow))
			left = scrollSize.scrollWidth - floatWidth - dxShadow;

		if (top > (scrollSize.scrollHeight - floatHeight - dxShadow))
			top = scrollSize.scrollHeight - floatHeight - dxShadow;

		//Top side
		if (top < 0)
			top = 0;
	}

	this.DIV.style.left = left+'px';
	this.DIV.style.top = top+'px';

	//this.AdjustShadow(div);
};

BX.CWindow.prototype.__startDrag = function(e)
{
	if (!this.SETTINGS.draggable)
		return false;

	if(!e) e = window.event;

	this.x = e.clientX + document.body.scrollLeft;
	this.y = e.clientY + document.body.scrollTop;

	this.__bWasDragged = false;
	BX.bind(document, "mousemove", BX.proxy(this.__moveDrag, this));
	BX.bind(document, "mouseup", BX.proxy(this.__stopDrag, this));

	if(document.body.setCapture)
		document.body.setCapture();

	document.onmousedown = BX.False;

	var b = document.body;
	b.ondrag = b.onselectstart = BX.False;
	b.style.MozUserSelect = this.DIV.style.MozUserSelect = 'none';
	b.style.cursor = 'move';
	return BX.PreventDefault(e);
};

BX.CWindow.prototype.__moveDrag = function(e)
{
	if(!e) e = window.event;

	var x = e.clientX + document.body.scrollLeft;
	var y = e.clientY + document.body.scrollTop;

	if(this.x == x && this.y == y)
		return;

	this.Move((x - this.x), (y - this.y));
	this.x = x;
	this.y = y;

	if (!this.__bWasDragged)
	{
		BX.onCustomEvent(this, 'onWindowDragStart');
		this.__bWasDragged = true;
		BX.bind(BX.proxy_context, "click", BX.PreventDefault);
	}

	BX.onCustomEvent(this, 'onWindowDrag');
};

BX.CWindow.prototype.__stopDrag = function(e)
{
	if(document.body.releaseCapture)
		document.body.releaseCapture();

	BX.unbind(document, "mousemove", BX.proxy(this.__moveDrag, this));
	BX.unbind(document, "mouseup", BX.proxy(this.__stopDrag, this));

	document.onmousedown = null;

	var b = document.body;
	b.ondrag = b.onselectstart = null;
	b.style.MozUserSelect = this.DIV.style.MozUserSelect = '';
	b.style.cursor = '';

	if (this.__bWasDragged)
	{
		BX.onCustomEvent(this, 'onWindowDragFinished');
		var _proxy_context = BX.proxy_context;
		setTimeout(function(){BX.unbind(_proxy_context, "click", BX.PreventDefault)}, 100);
		this.__bWasDragged = false;
	}
	return BX.PreventDefault(e);
};

BX.CWindow.prototype.DenyClose = function()
{
	this.denyClose = true;
};

BX.CWindow.prototype.AllowClose = function()
{
	this.denyClose = false;
};

BX.CWindow.prototype.ShowError = function(str)
{
	BX.onCustomEvent(this, 'onWindowError', [str]);

	if (this._wait)
		BX.closeWait(this._wait);

	window.alert(str);
};

BX.CWindow.prototype.__set_msover = function() {this.MOUSEOVER = true;};
BX.CWindow.prototype.__unset_msover = function() {this.MOUSEOVER = false;};

/* dialog window class extends window class */
BX.CWindowDialog = function() {
	var a = arguments;
	a[1] = 'dialog';
	BX.CWindowDialog.superclass.constructor.apply(this, a);

	this.DIV.style.top = '10px';
	this.OVERLAY = null;
};
BX.extend(BX.CWindowDialog, BX.CWindow);

BX.CWindowDialog.prototype.__resizeOverlay = function()
{
	var windowSize = BX.GetWindowScrollSize();
	this.OVERLAY.style.width = windowSize.scrollWidth + "px";
};

BX.CWindowDialog.prototype.CreateOverlay = function(zIndex)
{
	if (null == this.OVERLAY)
	{
		var windowSize = BX.GetWindowScrollSize();
		this.OVERLAY = document.body.appendChild(BX.create("DIV", {
			style: {
				position: 'absolute',
				top: '0px',
				left: '0px',
				zIndex: zIndex || (parseInt(this.DIV.style.zIndex)-2),
				width: windowSize.scrollWidth + "px",
				height: windowSize.scrollHeight + "px"
			}
		}));
	}

	return this.OVERLAY;
};

BX.CWindowDialog.prototype.Show = function()
{
	BX.CWindowDialog.superclass.Show.apply(this, arguments);

	this.CreateOverlay();

	this.OVERLAY.style.display = 'block';
	this.OVERLAY.style.zIndex = parseInt(this.DIV.style.zIndex)-2;

	BX.unbind(window, 'resize', BX.proxy(this.__resizeOverlay, this));
	BX.bind(window, 'resize', BX.proxy(this.__resizeOverlay, this));
};

BX.CWindowDialog.prototype.onUnRegister = function(clean)
{
	BX.CWindowDialog.superclass.onUnRegister.apply(this, arguments);

	if (this.clean)
	{
		if (this.OVERLAY.parentNode)
			this.OVERLAY.parentNode.removeChild(this.OVERLAY);
	}
	else
	{
		this.OVERLAY.style.display = 'none';
	}

	BX.unbind(window, 'resize', BX.proxy(this.__resizeOverlay, this));
};

/* standard bitrix dialog extends BX.CWindowDialog */
/*
	arParams = {
		(
			title: 'dialog title',
			head: 'head block html',
			content: 'dialog content',
			icon: 'head icon classname or filename',

			resize_id: 'some id to save resize information'// useless if resizable = false
		)
		or
		(
			content_url: url to content load
				loaded content scripts can use BX.WindowManager.Get() to get access to the current window object
		)

		height: window_height_in_pixels,
		width: window_width_in_pixels,

		draggable: true|false,
		resizable: true|false,

		min_height: min_window_height_in_pixels, // useless if resizable = false
		min_width: min_window_width_in_pixels, // useless if resizable = false

		buttons: [
			'html_code',
			BX.CDialog.btnSave, BX.CDialog.btnCancel, BX.CDialog.btnClose
		]
	}
*/
BX.CDialog = function(arParams)
{
	BX.CDialog.superclass.constructor.apply(this);

	this._sender = 'core_window_cdialog';

	this.PARAMS = arParams || {};

	for (var i in this.defaultParams)
	{
		if (typeof this.PARAMS[i] == 'undefined')
			this.PARAMS[i] = this.defaultParams[i];
	}

	this.PARAMS.width = (!isNaN(parseInt(this.PARAMS.width)))
		? this.PARAMS.width
		: this.defaultParams['width'];
	this.PARAMS.height = (!isNaN(parseInt(this.PARAMS.height)))
		? this.PARAMS.height
		: this.defaultParams['height'];

	if (this.PARAMS.resize_id || this.PARAMS.content_url)
	{
		var arSize = BX.WindowManager.getRuntimeWindowSize(this.PARAMS.resize_id || this.PARAMS.content_url);
		if (arSize)
		{
			this.PARAMS.width = arSize.width;
			this.PARAMS.height = arSize.height;
		}
	}

	BX.addClass(this.DIV, 'bx-core-adm-dialog');
	this.DIV.id = 'bx-admin-prefix';

	this.PARTS = {};

	this.DIV.style.height = null;
	this.DIV.style.width = null;

	this.PARTS.TITLEBAR = this.DIV.appendChild(BX.create('DIV', {props: {
			className: 'bx-core-adm-dialog-head'
		}
	}));

	this.PARTS.TITLE_CONTAINER = this.PARTS.TITLEBAR.appendChild(BX.create('SPAN', {
		props: {className: 'bx-core-adm-dialog-head-inner'},
		text: this.PARAMS.title
	}));

	this.PARTS.TITLEBAR_ICONS = this.PARTS.TITLEBAR.appendChild(BX.create('DIV', {
		props: {
			className: 'bx-core-adm-dialog-head-icons'
		},
		children: (this.PARAMS.resizable ? [
			BX.create('SPAN', {props: {className: 'bx-core-adm-icon-expand', title: BX.message('JS_CORE_WINDOW_EXPAND')}}),
			BX.create('SPAN', {props: {className: 'bx-core-adm-icon-close', title: BX.message('JS_CORE_WINDOW_CLOSE')}})
		] : [
			BX.create('SPAN', {props: {className: 'bx-core-adm-icon-close', title: BX.message('JS_CORE_WINDOW_CLOSE')}})
		])
	}));


	this.PARTS.CONTENT = this.DIV.appendChild(BX.create('DIV', {
		props: {className: 'bx-core-adm-dialog-content-wrap adm-workarea'}
	}));

	this.PARTS.CONTENT_DATA = this.PARTS.CONTENT.appendChild(BX.create('DIV', {
		props: {className: 'bx-core-adm-dialog-content'},
		style: {
			height: this.PARAMS.height + 'px',
			width: this.PARAMS.width + 'px'
		}
	}));

	this.PARTS.HEAD = this.PARTS.CONTENT_DATA.appendChild(BX.create('DIV', {
		props: {
			className: 'bx-core-adm-dialog-head-block' + (this.PARAMS.icon ? ' ' + this.PARAMS.icon : '')
		}
	}));

	this.SetHead(this.PARAMS.head);
	this.SetContent(this.PARAMS.content);
	this.SetTitle(this.PARAMS.title);
	this.SetClose(this.PARTS.TITLEBAR_ICONS.lastChild);

	if (this.PARAMS.resizable)
	{
		this.SetExpand(this.PARTS.TITLEBAR_ICONS.firstChild);
		this.SetExpand(this.PARTS.TITLEBAR, 'dblclick');

		BX.addCustomEvent(this, 'onWindowExpand', BX.proxy(this.__onexpand, this));
		BX.addCustomEvent(this, 'onWindowNarrow', BX.proxy(this.__onexpand, this));
	}

	this.PARTS.FOOT = this.PARTS.BUTTONS_CONTAINER = this.PARTS.CONTENT.appendChild(BX.create('DIV', {
			props: {
				className: 'bx-core-adm-dialog-buttons'
			},
			//events: {
			//	'click': BX.delegateEvent({property:{type: /button|submit/}}, BX.delegate(function() {this.showWait(BX.proxy_context)}, this))
			//},
			children: this.ShowButtons()
		}
	));

	if (this.PARAMS.draggable)
		this.SetDraggable(this.PARTS.TITLEBAR);

	if (this.PARAMS.resizable)
	{
		this.PARTS.RESIZER = this.DIV.appendChild(BX.create('DIV', {
			props: {className: 'bx-core-resizer'}
		}));

		this.SetResize(this.PARTS.RESIZER);

		this.SETTINGS.min_width = this.PARAMS.min_width;
		this.SETTINGS.min_height = this.PARAMS.min_height;
	}

	this.auth_callback = BX.delegate(function(){
		this.PARAMS.content = '';
		this.hideNotify();
		this.Show();
	}, this)
};
BX.extend(BX.CDialog, BX.CWindowDialog);

BX.CDialog.prototype.defaultParams = {
	width: 700,
	height: 400,
	min_width: 500,
	min_height: 300,

	resizable: true,
	draggable: true,

	title: '',
	icon: ''
};

BX.CDialog.prototype.showWait = function(el)
{
	if (BX.type.isElementNode(el) && (el.type == 'button' || el.type == 'submit'))
	{
		BX.defer(function(){el.disabled = true})();

		var bSave = (BX.hasClass(el, 'adm-btn-save') || BX.hasClass(el, 'adm-btn-save')),
			pos = BX.pos(el, true);

		el.bxwaiter = this.PARTS.FOOT.appendChild(BX.create('DIV', {
			props: {className: 'adm-btn-load-img' + (bSave ? '-green' : '')},
			style: {
				top: parseInt((pos.bottom + pos.top)/2 - 10) + 'px',
				left: parseInt((pos.right + pos.left)/2 - 10) + 'px'
			}
		}));

		BX.addClass(el, 'adm-btn-load');

		this.lastWaitElement = el;

		return el.bxwaiter;
	}
	return null;
};

BX.CDialog.prototype.closeWait = function(el)
{
	el = el || this.lastWaitElement;

	if (BX.type.isElementNode(el))
	{
		if (el.bxwaiter)
		{
			if(el.bxwaiter.parentNode)
			{
				el.bxwaiter.parentNode.removeChild(el.bxwaiter);
			}

			el.bxwaiter = null;
		}

		el.disabled = false;
		BX.removeClass(el, 'adm-btn-load');

		if (this.lastWaitElement == el)
			this.lastWaitElement = null;
	}
};

BX.CDialog.prototype.Authorize = function(arAuthResult)
{
	this.bSkipReplaceContent = true;
	this.ShowError(BX.message('JSADM_AUTH_REQ'));

	BX.onCustomEvent(this, 'onWindowError', []);

	BX.closeWait();

	(new BX.CAuthDialog({
		content_url: this.PARAMS.content_url,
		auth_result: arAuthResult,
		callback: BX.delegate(function(){
			if (this.auth_callback)
				this.auth_callback()
		}, this)
	})).Show();
};

BX.CDialog.prototype.ShowError = function(str)
{
	BX.onCustomEvent(this, 'onWindowError', [str]);

	this.closeWait();

	if (this._wait)
		BX.closeWait(this._wait);

	this.Notify(str, true);
};


BX.CDialog.prototype.__expandGetSize = function()
{
	var pDocElement = BX.GetDocElement();
	pDocElement.style.overflow = 'hidden';

	var wndSize = BX.GetWindowInnerSize();

	pDocElement.scrollTop = 0;

	this.DIV.style.top = '-' + this.dxShadow + 'px';
	this.DIV.style.left = '-' + this.dxShadow + 'px';

	return {
		width: (wndSize.innerWidth - parseInt(BX.style(this.PARTS.CONTENT, 'padding-right')) - parseInt(BX.style(this.PARTS.CONTENT, 'padding-left'))) + this.dxShadow,
		height: (wndSize.innerHeight - this.PARTS.TITLEBAR.offsetHeight - this.PARTS.FOOT.offsetHeight - parseInt(BX.style(this.PARTS.CONTENT, 'padding-top')) - parseInt(BX.style(this.PARTS.CONTENT, 'padding-bottom'))) + this.dxShadow
	};
};

BX.CDialog.prototype.__expand = function()
{
	var pDocElement = BX.GetDocElement();
	this.dxShadow = 2;

	if (!this.bExpanded)
	{
		var wndScroll = BX.GetWindowScrollPos();

		this.__expand_settings = {
			resizable: this.SETTINGS.resizable,
			draggable: this.SETTINGS.draggable,
			width: this.PARTS.CONTENT_DATA.style.width,
			height: this.PARTS.CONTENT_DATA.style.height,
			left: this.DIV.style.left,
			top: this.DIV.style.top,
			scrollTop: wndScroll.scrollTop,
			scrollLeft: wndScroll.scrollLeft,
			overflow: BX.style(pDocElement, 'overflow')
		};

		this.SETTINGS.resizable = false;
		this.SETTINGS.draggable = false;

		var pos = this.__expandGetSize();

		this.PARTS.CONTENT_DATA.style.width = pos.width + 'px';
		this.PARTS.CONTENT_DATA.style.height = pos.height + 'px';

		window.scrollTo(0,0);
		pDocElement.style.overflow = 'hidden';

		this.bExpanded = true;

		BX.onCustomEvent(this, 'onWindowExpand');
		BX.onCustomEvent(this, 'onWindowResize');
		BX.onCustomEvent(this, 'onWindowResizeExt', [{'width': pos.width, 'height': pos.height}]);

		BX.bind(window, 'resize', BX.proxy(this.__expand_onresize, this));
	}
	else
	{
		BX.unbind(window, 'resize', BX.proxy(this.__expand_onresize, this));

		this.SETTINGS.resizable = this.__expand_settings.resizable;
		this.SETTINGS.draggable = this.__expand_settings.draggable;

		pDocElement.style.overflow = this.__expand_settings.overflow;

		this.DIV.style.top = this.__expand_settings.top;
		this.DIV.style.left = this.__expand_settings.left;
		this.PARTS.CONTENT_DATA.style.width = this.__expand_settings.width;
		this.PARTS.CONTENT_DATA.style.height = this.__expand_settings.height;
		window.scrollTo(this.__expand_settings.scrollLeft, this.__expand_settings.scrollTop);
		this.bExpanded = false;

		BX.onCustomEvent(this, 'onWindowNarrow');
		BX.onCustomEvent(this, 'onWindowResize');
		BX.onCustomEvent(this, 'onWindowResizeExt', [{'width': parseInt(this.__expand_settings.width), 'height': parseInt(this.__expand_settings.height)}]);
	}
};

BX.CDialog.prototype.__expand_onresize = function()
{
	var pos = this.__expandGetSize();

	this.PARTS.CONTENT_DATA.style.width = pos.width + 'px';
	this.PARTS.CONTENT_DATA.style.height = pos.height + 'px';

	BX.onCustomEvent(this, 'onWindowResize');
	BX.onCustomEvent(this, 'onWindowResizeExt', [pos]);
};

BX.CDialog.prototype.__onexpand = function()
{
	var ob = this.PARTS.TITLEBAR_ICONS.firstChild;
	ob.className = BX.toggle(ob.className, ['bx-core-adm-icon-expand', 'bx-core-adm-icon-narrow']);
	ob.title = BX.toggle(ob.title, [BX.message('JS_CORE_WINDOW_EXPAND'), BX.message('JS_CORE_WINDOW_NARROW')]);

	if (this.PARTS.RESIZER)
	{
		this.PARTS.RESIZER.style.display = this.bExpanded ? 'none' : 'block';
	}
};


BX.CDialog.prototype.__startResize = function(e)
{
	if (!this.SETTINGS.resizable)
		return false;

	if(!e) e = window.event;

	this.wndSize = BX.GetWindowScrollPos();
	this.wndSize.innerWidth = BX.GetWindowInnerSize().innerWidth;

	this.pos = BX.pos(this.PARTS.CONTENT_DATA);

	this.x = e.clientX + this.wndSize.scrollLeft;
	this.y = e.clientY + this.wndSize.scrollTop;

	this.dx = this.pos.left + this.pos.width - this.x;
	this.dy = this.pos.top + this.pos.height - this.y;


	// TODO: suspicious
	this.dw = this.pos.width - parseInt(this.PARTS.CONTENT_DATA.style.width) + parseInt(BX.style(this.PARTS.CONTENT, 'padding-right'));

	BX.bind(document, "mousemove", BX.proxy(this.__moveResize, this));
	BX.bind(document, "mouseup", BX.proxy(this.__stopResize, this));

	if(document.body.setCapture)
		document.body.setCapture();

	document.onmousedown = BX.False;

	var b = document.body;
	b.ondrag = b.onselectstart = BX.False;
	b.style.MozUserSelect = this.DIV.style.MozUserSelect = 'none';
	b.style.cursor = 'se-resize';

	BX.onCustomEvent(this, 'onWindowResizeStart');

	return true;
};

BX.CDialog.prototype.Resize = function(x, y)
{
	var new_width = Math.max(x - this.pos.left + this.dx, this.SETTINGS.min_width);
	var new_height = Math.max(y - this.pos.top + this.dy, this.SETTINGS.min_height);

	if (this.SETTINGS.resize_restrict)
	{
		var scrollSize = BX.GetWindowScrollSize();

		if (this.pos.left + new_width > scrollSize.scrollWidth - this.dw)
			new_width = scrollSize.scrollWidth - this.pos.left - this.dw;
	}

	this.PARTS.CONTENT_DATA.style.width = new_width + 'px';
	this.PARTS.CONTENT_DATA.style.height = new_height + 'px';

	BX.onCustomEvent(this, 'onWindowResize');
	BX.onCustomEvent(this, 'onWindowResizeExt', [{'height': new_height, 'width': new_width}]);
};

BX.CDialog.prototype.SetSize = function(obSize)
{
	this.PARTS.CONTENT_DATA.style.width = obSize.width + 'px';
	this.PARTS.CONTENT_DATA.style.height = obSize.height + 'px';

	BX.onCustomEvent(this, 'onWindowResize');
	BX.onCustomEvent(this, 'onWindowResizeExt', [obSize]);
};

BX.CDialog.prototype.GetParameters = function(form_name)
{
	var form = this.GetForm();

	if(!form)
		return "";

	var i, s = "";
	var n = form.elements.length;

	var delim = '';
	for(i=0; i<n; i++)
	{
		if (s != '') delim = '&';
		var el = form.elements[i];
		if (el.disabled)
			continue;

		switch(el.type.toLowerCase())
		{
			case 'text':
			case 'textarea':
			case 'password':
			case 'hidden':
				if (null == form_name && el.name.substr(el.name.length-4) == '_alt' && form.elements[el.name.substr(0, el.name.length-4)])
					break;
				s += delim + el.name + '=' + BX.util.urlencode(el.value);
				break;
			case 'radio':
				if(el.checked)
					s += delim + el.name + '=' + BX.util.urlencode(el.value);
				break;
			case 'checkbox':
				s += delim + el.name + '=' + BX.util.urlencode(el.checked ? 'Y':'N');
				break;
			case 'select-one':
				var val = "";
				if (null == form_name && form.elements[el.name + '_alt'] && el.selectedIndex == 0)
					val = form.elements[el.name+'_alt'].value;
				else
					val = el.value;
				s += delim + el.name + '=' + BX.util.urlencode(val);
				break;
			case 'select-multiple':
				var j, bAdded = false;
				var l = el.options.length;
				for (j=0; j<l; j++)
				{
					if (el.options[j].selected)
					{
						s += delim + el.name + '=' + BX.util.urlencode(el.options[j].value);
						bAdded = true;
					}
				}
				if (!bAdded)
					s += delim + el.name + '=';
				break;
			default:
				break;
		}
	}

	return s;
};

BX.CDialog.prototype.PostParameters = function(params)
{
	var url = this.PARAMS.content_url;

	if (null == params)
		params = "";

	params += (params == "" ? "" : "&") + "bxsender=" + this._sender;

	var index = url.indexOf('?');
	if (index == -1)
		url += '?' + params;
	else
		url = url.substring(0, index) + '?' + params + "&" + url.substring(index+1);

	BX.showWait();

	this.auth_callback = BX.delegate(function(){
		this.hideNotify();
		this.PostParameters(params);
	}, this);

	BX.ajax.Setup({skipAuthCheck:true},true);
	BX.ajax.post(url, this.GetParameters(), BX.delegate(function(result) {
		BX.closeWait();
		if (!this.bSkipReplaceContent)
		{
			this.ClearButtons(); // buttons are appended during form reload, so we should clear footer
			this.SetContent(result);
			this.Show(true);
		}

		this.bSkipReplaceContent = false;
	}, this));
};

BX.CDialog.prototype.Submit = function(params, url)
{
	var FORM = this.GetForm();
	if (FORM)
	{
		FORM.onsubmit = null;

		FORM.method = 'POST';
		if (!FORM.action || url)
		{
			url = url || this.PARAMS.content_url;
			if (null != params)
			{
				var index = url.indexOf('?');
				if (index == -1)
					url += '?' + params;
				else
					url = url.substring(0, index) + '?' + params + "&" + url.substring(index+1);
			}

			FORM.action = url;
		}

		if (!FORM._bxsender)
		{
			FORM._bxsender = FORM.appendChild(BX.create('INPUT', {
				attrs: {
					type: 'hidden',
					name: 'bxsender',
					value: this._sender
				}
			}));
		}

		this._wait = BX.showWait();

		this.auth_callback = BX.delegate(function(){
			this.hideNotify();
			this.Submit(params);
		}, this);

		BX.ajax.submit(FORM, BX.delegate(function(){this.closeWait()}, this));
	}
	else
	{
		window.alert('no form registered!');
	}
};

BX.CDialog.prototype.GetForm = function()
{
	if (null == this.__form)
	{
		var forms = this.PARTS.CONTENT_DATA.getElementsByTagName('FORM');
		this.__form = forms[0] ? forms[0] : null;
	}

	return this.__form;
};

BX.CDialog.prototype.GetRealForm = function()
{
	if (null == this.__rform)
	{
		var forms = this.PARTS.CONTENT_DATA.getElementsByTagName('FORM');
		this.__rform = forms[1] ? forms[1] : (forms[0] ? forms[0] : null);
	}

	return this.__rform;
};

BX.CDialog.prototype._checkButton = function(btn)
{
	var arCustomButtons = ['btnSave', 'btnCancel', 'btnClose'];

	for (var i = 0; i < arCustomButtons.length; i++)
	{
		if (this[arCustomButtons[i]] && (btn == this[arCustomButtons[i]]))
			return arCustomButtons[i];
	}

	return false;
};

BX.CDialog.prototype.ShowButtons = function()
{
	var result = [];
	if (this.PARAMS.buttons)
	{
		if (this.PARAMS.buttons.title) this.PARAMS.buttons = [this.PARAMS.buttons];

		for (var i=0, len=this.PARAMS.buttons.length; i<len; i++)
		{
			if (BX.type.isNotEmptyString(this.PARAMS.buttons[i]))
			{
				result.push(this.PARAMS.buttons[i]);
			}
			else if (BX.type.isElementNode(this.PARAMS.buttons[i]))
			{
				result.push(this.PARAMS.buttons[i]);
			}
			else if (this.PARAMS.buttons[i])
			{
				//if (!(this.PARAMS.buttons[i] instanceof BX.CWindowButton))
				if (!BX.is_subclass_of(this.PARAMS.buttons[i], BX.CWindowButton))
				{
					var b = this._checkButton(this.PARAMS.buttons[i]); // hack to set links to real CWindowButton object in btnSave etc;
					this.PARAMS.buttons[i] = new BX.CWindowButton(this.PARAMS.buttons[i]);
					if (b) this[b] = this.PARAMS.buttons[i];
				}

				result.push(this.PARAMS.buttons[i].Button(this));
			}
		}
	}

	return result;
};

BX.CDialog.prototype.setAutosave = function () {
	if (!this.bSetAutosaveDelay)
	{
		this.bSetAutosaveDelay = true;
		setTimeout(BX.proxy(this.setAutosave, this), 10);
	}
};

BX.CDialog.prototype.SetTitle = function(title)
{
	this.PARAMS.title = title;
	BX.cleanNode(this.PARTS.TITLE_CONTAINER).appendChild(document.createTextNode(this.PARAMS.title));
};

BX.CDialog.prototype.SetHead = function(head)
{
	this.PARAMS.head = BX.util.trim(head);
	this.PARTS.HEAD.innerHTML = this.PARAMS.head || "&nbsp;";
	this.PARTS.HEAD.style.display = this.PARAMS.head ? 'block' : 'none';
	this.adjustSize();
};

BX.CDialog.prototype.Notify = function(note, bError)
{
	if (!this.PARTS.NOTIFY)
	{
		this.PARTS.NOTIFY = this.DIV.insertBefore(BX.create('DIV', {
			props: {className: 'adm-warning-block'},
			children: [
				BX.create('SPAN', {
					props: {className: 'adm-warning-text'}
				}),
				BX.create('SPAN', {
					props: {className: 'adm-warning-icon'}
				}),
				BX.create('SPAN', {
					props: {className: 'adm-warning-close'},
					events: {click: BX.proxy(this.hideNotify, this)}
				})
			]
		}), this.DIV.firstChild);
	}

	if (bError)
		BX.addClass(this.PARTS.NOTIFY, 'adm-warning-block-red');
	else
		BX.removeClass(this.PARTS.NOTIFY, 'adm-warning-block-red');

	this.PARTS.NOTIFY.firstChild.innerHTML = note || '&nbsp;';
	this.PARTS.NOTIFY.firstChild.style.width = (this.PARAMS.width-50) + 'px';
	BX.removeClass(this.PARTS.NOTIFY, 'adm-warning-animate');
};

BX.CDialog.prototype.hideNotify = function()
{
	BX.addClass(this.PARTS.NOTIFY, 'adm-warning-animate');
};

BX.CDialog.prototype.__adjustHeadToIcon = function()
{
	if (!this.PARTS.HEAD.offsetHeight)
	{
		setTimeout(BX.delegate(this.__adjustHeadToIcon, this), 50);
	}
	else
	{
		if (this.icon_image && this.icon_image.height && this.icon_image.height > this.PARTS.HEAD.offsetHeight - 5)
		{
			this.PARTS.HEAD.style.height = this.icon_image.height + 5 + 'px';
			this.adjustSize();
		}

		this.icon_image.onload = null;
		this.icon_image = null;
	}
};

BX.CDialog.prototype.SetIcon = function(icon_class)
{
	if (this.PARAMS.icon != icon_class)
	{
		if (this.PARAMS.icon)
			BX.removeClass(this.PARTS.HEAD, this.PARAMS.icon);

		this.PARAMS.icon = icon_class;

		if (this.PARAMS.icon)
		{
			BX.addClass(this.PARTS.HEAD, this.PARAMS.icon);

			var icon_file = (BX.style(this.PARTS.HEAD, 'background-image') || BX.style(this.PARTS.HEAD, 'backgroundImage'));
			if (BX.type.isNotEmptyString(icon_file) && icon_file != 'none')
			{
				var match = icon_file.match(new RegExp('url\\s*\\(\\s*(\'|"|)(.+?)(\\1)\\s*\\)'));
				if(match)
				{
					icon_file = match[2];
					if (BX.type.isNotEmptyString(icon_file))
					{
						this.icon_image = new Image();
						this.icon_image.onload = BX.delegate(this.__adjustHeadToIcon, this);
						this.icon_image.src = icon_file;
					}
				}
			}
		}
	}
	this.adjustSize();
};

BX.CDialog.prototype.SetIconFile = function(icon_file)
{
	this.icon_image = new Image();
	this.icon_image.onload = BX.delegate(this.__adjustHeadToIcon, this);
	this.icon_image.src = icon_file;

	BX.adjust(this.PARTS.HEAD, {style: {backgroundImage: 'url(' + icon_file + ')', backgroundPosition: 'right 9px'/*'99% center'*/}});
	this.adjustSize();
};

/*
BUTTON: {
	title: 'title',
	'action': function executed in window object context
}
BX.CDialog.btnSave || BX.CDialog.btnCancel - standard buttons
*/

BX.CDialog.prototype.SetButtons = function(a)
{
	if (BX.type.isString(a))
	{
		if (a.length > 0)
		{
			this.PARTS.BUTTONS_CONTAINER.innerHTML += a;

			var btns = this.PARTS.BUTTONS_CONTAINER.getElementsByTagName('INPUT');
			if (btns.length > 0)
			{
				this.PARAMS.buttons = [];
				for (var i = 0; i < btns.length; i++)
				{
					this.PARAMS.buttons.push(new BX.CWindowButton({btn: btns[i], parentWindow: this}));
				}
			}
		}
	}
	else
	{
		this.PARAMS.buttons = a;
		BX.adjust(this.PARTS.BUTTONS_CONTAINER, {
			children: this.ShowButtons()
		});
	}
	this.adjustSize();
};

BX.CDialog.prototype.ClearButtons = function()
{
	BX.cleanNode(this.PARTS.BUTTONS_CONTAINER);
	this.adjustSize();
};

BX.CDialog.prototype.SetContent = function(html)
{
	this.__form = null;

	if (BX.type.isElementNode(html))
	{
		if (html.parentNode)
			html.parentNode.removeChild(html);
	}
	else if (BX.type.isString(html))
	{
		html = BX.create('DIV', {html: html});
	}

	this.PARAMS.content = html;
	BX.cleanNode(this.PARTS.CONTENT_DATA);

	BX.adjust(this.PARTS.CONTENT_DATA, {
		children: [
			this.PARTS.HEAD,
			BX.create('DIV', {
				props: {
					className: 'bx-core-adm-dialog-content-wrap-inner'
				},
				children: [this.PARAMS.content]
			})
		]
	});

	if (this.PARAMS.content_url && this.GetForm())
	{
		this.__form.submitbtn = this.__form.appendChild(BX.create('INPUT', {props:{type:'submit'},style:{display:'none'}}));
		this.__form.onsubmit = BX.delegate(this.__submit, this);
	}
};

BX.CDialog.prototype.__submit = function(e)
{
	for (var i=0,len=this.PARAMS.buttons.length; i<len; i++)
	{
		if (
			this.PARAMS.buttons[i]
			&& (
				this.PARAMS.buttons[i].name && /save|apply/i.test(this.PARAMS.buttons[i].name)
				||
				this.PARAMS.buttons[i].btn && this.PARAMS.buttons[i].btn.name && /save|apply/i.test(this.PARAMS.buttons[i].btn.name)
			)
		)
		{
			this.PARAMS.buttons[i].emulate();
			break;
		}
	}

	return BX.PreventDefault(e);
};

BX.CDialog.prototype.SwapContent = function(cont)
{
	cont = BX(cont);

	BX.cleanNode(this.PARTS.CONTENT_DATA);
	cont.parentNode.removeChild(cont);
	this.PARTS.CONTENT_DATA.appendChild(cont);
	cont.style.display = 'block';
	this.SetContent(cont.innerHTML);
};

// this method deprecated
BX.CDialog.prototype.adjustSize = function()
{
};

// this method deprecated
BX.CDialog.prototype.__adjustSize = function()
{
};

BX.CDialog.prototype.adjustSizeEx = function()
{
	BX.defer(this.__adjustSizeEx, this)();
};

BX.CDialog.prototype.__adjustSizeEx = function()
{
	var ob = this.PARTS.CONTENT_DATA.firstChild,
		new_height = 0,
		marginTop,
		marginBottom;

	while (ob)
	{
		if (BX.type.isElementNode(ob))
		{
			marginTop = parseInt(BX.style(ob, 'margin-top'), 10);
			if (isNaN(marginTop))
				marginTop = 0;
			marginBottom = parseInt(BX.style(ob, 'margin-bottom'), 10);
			if (isNaN(marginBottom))
				marginBottom = 0;
			new_height += ob.offsetHeight + marginTop + marginBottom;
		}
		ob = BX.nextSibling(ob);
	}

	if (new_height)
		this.PARTS.CONTENT_DATA.style.height = new_height + 'px';
};


BX.CDialog.prototype.__onResizeFinished = function()
{
	BX.WindowManager.saveWindowSize(
		this.PARAMS.resize_id || this.PARAMS.content_url, {height: parseInt(this.PARTS.CONTENT_DATA.style.height), width: parseInt(this.PARTS.CONTENT_DATA.style.width)}
	);
};

BX.CDialog.prototype.Show = function(bNotRegister)
{
	if ((!this.PARAMS.content) && this.PARAMS.content_url && BX.ajax && !bNotRegister)
	{
		var wait = BX.showWait();

		BX.WindowManager.currently_loaded = this;

		this.CreateOverlay(parseInt(BX.style(wait, 'z-index'))-1);
		this.OVERLAY.style.display = 'block';
		this.OVERLAY.className = 'bx-core-dialog-overlay';

		var post_data = '', method = 'GET';
		if (this.PARAMS.content_post)
		{
			post_data = this.PARAMS.content_post;
			method = 'POST';
		}

		var url = this.PARAMS.content_url
			+ (this.PARAMS.content_url.indexOf('?')<0?'?':'&')+'bxsender=' + this._sender;

		this.auth_callback = BX.delegate(function(){
			this.PARAMS.content = '';
			this.hideNotify();
			this.Show();
		}, this);

		BX.ajax({
			method: method,
			dataType: 'html',
			url: url,
			data: post_data,
			skipAuthCheck: true,
			onsuccess: BX.delegate(function(data) {
				BX.closeWait(null, wait);

				this.SetContent(data || '&nbsp;');
				this.Show();
			}, this)
		});
	}
	else
	{
		BX.WindowManager.currently_loaded = null;
		BX.CDialog.superclass.Show.apply(this, arguments);

		this.adjustPos();

		this.OVERLAY.className = 'bx-core-dialog-overlay';

		this.__adjustSize();

		BX.addCustomEvent(this, 'onWindowResize', BX.proxy(this.__adjustSize, this));

		if (this.PARAMS.resizable && (this.PARAMS.content_url || this.PARAMS.resize_id))
			BX.addCustomEvent(this, 'onWindowResizeFinished', BX.delegate(this.__onResizeFinished, this));
	}
};

BX.CDialog.prototype.GetInnerPos = function()
{
	return {'width': parseInt(this.PARTS.CONTENT_DATA.style.width), 'height': parseInt(this.PARTS.CONTENT_DATA.style.height)};
};

BX.CDialog.prototype.adjustPos = function()
{
	if (!this.bExpanded)
	{
		var windowSize = BX.GetWindowInnerSize();
		var windowScroll = BX.GetWindowScrollPos();

		BX.adjust(this.DIV, {
			style: {
				left: parseInt(windowScroll.scrollLeft + windowSize.innerWidth / 2 - parseInt(this.DIV.offsetWidth) / 2) + 'px',
				top: Math.max(parseInt(windowScroll.scrollTop + windowSize.innerHeight / 2 - parseInt(this.DIV.offsetHeight) / 2), 0) + 'px'
			}
		});
	}
};

BX.CDialog.prototype.GetContent = function () {return this.PARTS.CONTENT_DATA};

BX.CDialog.prototype.btnSave = BX.CDialog.btnSave = {
	title: BX.message('JS_CORE_WINDOW_SAVE'),
	id: 'savebtn',
	name: 'savebtn',
	className: BX.browser.IsIE() && BX.browser.IsDoctype() && !BX.browser.IsIE10() ? '' : 'adm-btn-save',
	action: function () {
		this.disableUntilError();
		this.parentWindow.PostParameters();
	}
};

BX.CDialog.prototype.btnCancel = BX.CDialog.btnCancel = {
	title: BX.message('JS_CORE_WINDOW_CANCEL'),
	id: 'cancel',
	name: 'cancel',
	action: function () {
		this.parentWindow.Close();
	}
};

BX.CDialog.prototype.btnClose = BX.CDialog.btnClose = {
	title: BX.message('JS_CORE_WINDOW_CLOSE'),
	id: 'close',
	name: 'close',
	action: function () {
		this.parentWindow.Close();
	}
};

/* special child for admin forms loaded into public page */
BX.CAdminDialog = function(arParams)
{
	BX.CAdminDialog.superclass.constructor.apply(this, arguments);

	this._sender = 'core_window_cadmindialog';

	BX.addClass(this.DIV, 'bx-core-adm-admin-dialog');

	this.PARTS.CONTENT.insertBefore(this.PARTS.HEAD, this.PARTS.CONTENT.firstChild);
	this.PARTS.HEAD.className = 'bx-core-adm-dialog-tabs';
};
BX.extend(BX.CAdminDialog, BX.CDialog);

BX.CAdminDialog.prototype.SetHead = function()
{
	BX.CAdminDialog.superclass.SetHead.apply(this, arguments);

	if (this.PARTS.HEAD.firstChild && BX.type.isElementNode(this.PARTS.HEAD.firstChild))
	{
		var ob = this.PARTS.HEAD.firstChild, new_width = 0, marginLeft = 0, marginRight = 0;

		while (ob)
		{
			if (BX.type.isElementNode(ob))
			{
				marginLeft = parseInt(BX.style(ob, 'margin-left'), 10);
				if (isNaN(marginLeft))
					marginLeft = 0;
				marginRight = parseInt(BX.style(ob, 'margin-right'), 10);
				if (isNaN(marginRight))
					marginRight = 0;
				new_width += ob.offsetWidth + marginLeft + marginRight;
			}
			ob = BX.nextSibling(ob);
		}

		this.SETTINGS.min_width = Math.max(new_width, this.SETTINGS.min_width) - 2;
		if (this.PARAMS.width < this.SETTINGS.min_width)
		{
			BX.adjust(this.PARTS.CONTENT_DATA, {
				style: {
					width: this.SETTINGS.min_width + 'px'
				}
			});
		}
	}
};

BX.CAdminDialog.prototype.SetContent = function(html)
{
	this.__form = null;

	if (BX.type.isElementNode(html))
	{
		if (html.parentNode)
			html.parentNode.removeChild(html);
	}

	this.PARAMS.content = html;
	BX.cleanNode(this.PARTS.CONTENT_DATA);

	BX.adjust(this.PARTS.CONTENT_DATA, {
		children: [
			this.PARAMS.content || '&nbsp;'
		]
	});

	if (this.PARAMS.content_url && this.GetForm())
	{
		this.__form.appendChild(BX.create('INPUT', {props:{type:'submit'},style:{display:'none'}}));
		this.__form.onsubmit = BX.delegate(this.__submit, this);
	}
};

BX.CAdminDialog.prototype.__expandGetSize = function()
{
	var res = BX.CAdminDialog.superclass.__expandGetSize.apply(this, arguments);

	res.width -= parseInt(BX.style(this.PARTS.CONTENT_DATA, 'padding-right')) + parseInt(BX.style(this.PARTS.CONTENT_DATA, 'padding-left'));
	res.height -= parseInt(BX.style(this.PARTS.CONTENT_DATA, 'padding-top')) + parseInt(BX.style(this.PARTS.CONTENT_DATA, 'padding-bottom'));

	res.height -= this.PARTS.HEAD.offsetHeight;

	return res;
};

BX.CAdminDialog.prototype.Submit = function()
{
	var FORM = this.GetForm();
	if (FORM && !FORM['bxpublic'] && !/bxpublic=/.test(FORM.action))
	{
		FORM.appendChild(BX.create('INPUT', {
			props: {
				type: 'hidden',
				name: 'bxpublic',
				value: 'Y'
			}
		}));
	}

	return BX.CAdminDialog.superclass.Submit.apply(this, arguments);
};

BX.CAdminDialog.prototype.btnSave = BX.CAdminDialog.btnSave = {
	title: BX.message('JS_CORE_WINDOW_SAVE'),
	id: 'savebtn',
	name: 'savebtn',
	className: 'adm-btn-save',
	action: function () {
		this.disableUntilError();
		this.parentWindow.Submit();
	}
};

BX.CAdminDialog.btnCancel = BX.CAdminDialog.superclass.btnCancel;
BX.CAdminDialog.btnClose = BX.CAdminDialog.superclass.btnClose;

BX.CDebugDialog = function(arParams)
{
	BX.CDebugDialog.superclass.constructor.apply(this, arguments);
};
BX.extend(BX.CDebugDialog, BX.CDialog);

BX.CDebugDialog.prototype.ShowDetails = function(div_id)
{
	var div = BX(div_id);
	if (div)
	{
		if (this.div_detail_current)
			this.div_detail_current.style.display = 'none';

		div.style.display = 'block';
		this.div_detail_current = div;
	}
};

BX.CDebugDialog.prototype.SetContent = function(html)
{
	if (!html)
		return;

	var arHtml = html.split('#DIVIDER#');
	if (arHtml.length > 1)
	{
		this.PARAMS.content = arHtml[1];

		this.PARTS.CONTENT_DATA.style.overflow = 'hidden';

		BX.CDebugDialog.superclass.SetContent.apply(this, [arHtml[1]]);

		this.PARTS.CONTENT_INNER = this.PARTS.CONTENT_DATA.firstChild.nextSibling;
		this.PARTS.CONTENT_TOP = this.PARTS.CONTENT_DATA.insertBefore(BX.create('DIV', {
			props: {
				className: 'bx-debug-content-top'
			},
			html: arHtml[0]
		}), this.PARTS.CONTENT_INNER);
		this.PARTS.CONTENT_INNER.style.overflow = 'auto';
	}
	else
	{
		BX.CDebugDialog.superclass.SetContent.apply(this, arguments);
	}
};

BX.CDebugDialog.prototype.__adjustSize = function()
{
	BX.CDebugDialog.superclass.__adjustSize.apply(this, arguments);

	if (this.PARTS.CONTENT_TOP)
	{
		var new_height = this.PARTS.CONTENT_DATA.offsetHeight - this.PARTS.HEAD.offsetHeight - this.PARTS.CONTENT_TOP.offsetHeight - 38;

		if (new_height > 0)
		{
			this.PARTS.CONTENT_INNER.style.height = new_height + 'px';
		}
	}
};


/* class for dialog window with editors */

BX.CEditorDialog = function(arParams)
{
	BX.CEditorDialog.superclass.constructor.apply(this, arguments);

	BX.removeClass(this.PARTS.CONTENT, 'bx-core-adm-dialog-content-wrap');
	BX.removeClass(this.PARTS.CONTENT_DATA, 'bx-core-adm-dialog-content');

	BX.removeClass(this.PARTS.CONTENT_DATA.lastChild, 'bx-core-adm-dialog-content-wrap-inner');
	BX.removeClass(this.PARTS.BUTTONS_CONTAINER, 'bx-core-adm-dialog-buttons');

	BX.addClass(this.PARTS.CONTENT, 'bx-core-editor-dialog-content-wrap');
	BX.addClass(this.PARTS.CONTENT_DATA, 'bx-core-editor-dialog-content');
	BX.addClass(this.PARTS.BUTTONS_CONTAINER, 'bx-core-editor-dialog-buttons');
};
BX.extend(BX.CEditorDialog, BX.CDialog);

BX.CEditorDialog.prototype.SetContent  = function()
{
	BX.CEditorDialog.superclass.SetContent.apply(this, arguments);

	BX.removeClass(this.PARTS.CONTENT_DATA.lastChild, 'bx-core-adm-dialog-content-wrap-inner');
};

/* class for wizards in admin section */
BX.CWizardDialog = function(arParams)
{
	BX.CWizardDialog.superclass.constructor.apply(this, arguments);

	BX.removeClass(this.PARTS.CONTENT, 'bx-core-adm-dialog-content-wrap');
	BX.removeClass(this.PARTS.CONTENT_DATA, 'bx-core-adm-dialog-content');
	BX.removeClass(this.PARTS.CONTENT_DATA.lastChild, 'bx-core-adm-dialog-content-wrap-inner');
	BX.removeClass(this.PARTS.BUTTONS_CONTAINER, 'bx-core-adm-dialog-buttons');

	BX.addClass(this.PARTS.CONTENT, 'bx-core-wizard-dialog-content-wrap');
};

BX.extend(BX.CWizardDialog, BX.CDialog);

/* class for auth dialog */
BX.CAuthDialog = function(arParams)
{
	arParams.resizable = false;
	arParams.width = 350;
	arParams.height = 200;

	arParams.buttons = [this.btnSave];

	BX.CAuthDialog.superclass.constructor.apply(this, arguments);
	this._sender = 'core_window_cauthdialog';

	BX.addClass(this.DIV, 'bx-core-auth-dialog');

	BX.AUTHAGENT = this;
};
BX.extend(BX.CAuthDialog, BX.CDialog);

BX.CAuthDialog.prototype.btnSave = BX.CAuthDialog.btnSave = {
	title: BX.message('JS_CORE_WINDOW_AUTH'),
	id: 'savebtn',
	name: 'savebtn',
	className: 'adm-btn-save',
	action: function () {
		this.disableUntilError();
		this.parentWindow.Submit('', this.parentWindow.PARAMS.content_url);
	}
};

BX.CAuthDialog.prototype.SetError = function(error)
{
	BX.closeWait();

	if (!!error)
		this.ShowError(error.MESSAGE || error);
};

BX.CAuthDialog.prototype.setAuthResult = function(result)
{
	BX.closeWait();

	if (result === false)
	{
		this.Close();
		if (this.PARAMS.callback)
			this.PARAMS.callback();
	}
	else
	{
		this.SetError(result);
	}
};

/* MENU CLASSES */

BX.CWindowFloat = function(node)
{
	BX.CWindowFloat.superclass.constructor.apply(this, [node, 'float']);

	this.SETTINGS.resizable = false;
};
BX.extend(BX.CWindowFloat, BX.CWindow);

BX.CWindowFloat.prototype.adjustPos = function()
{
	if (this.PARAMS.parent)
		this.adjustToNode();
	else if (this.PARAMS.x && this.PARAMS.y)
		this.adjustToPos([this.PARAMS.x, this.PARAMS.y]);
};

BX.CWindowFloat.prototype.adjustToPos = function(pos)
{
	this.DIV.style.left = parseInt(pos[0]) + 'px';
	this.DIV.style.top = parseInt(pos[1]) + 'px';
};

BX.CWindowFloat.prototype.adjustToNodeGetPos = function()
{
	return BX.pos(this.PARAMS.parent);
};

BX.CWindowFloat.prototype.adjustToNode = function(el)
{
	el = el || this.PARAMS.parent;

	this.PARAMS.parent = BX(el);

	if (this.PARAMS.parent)
	{
		var pos = this.adjustToNodeGetPos();

		this.DIV.style.top = pos.top + 'px';//(pos.top - 26) + 'px';
		this.DIV.style.left = pos.left + 'px';

		this.PARAMS.parent.OPENER = this;
	}
};

BX.CWindowFloat.prototype.Show = function()
{
	this.adjustToPos([-1000, -1000]);
	BX.CWindowFloat.superclass.Show.apply(this, arguments);
	this.adjustPos();
};

/* menu opener class */
/*
{
	DOMNode DIV,
	BX.CMenu or Array MENU,
	TYPE = 'hover' | 'click',
	TIMEOUT: 1000
	ATTACH_MODE: 'top' | 'right'
	ACTIVE_CLASS: className for opener element when menu is opened
}
*/
BX.COpener = function(arParams)
{
	this.PARAMS = arParams || {};

	this.MENU = arParams.MENU || [];

	this.DIV = arParams.DIV;
	this.ATTACH = arParams.ATTACH || arParams.DIV;
	this.ATTACH_MODE = arParams.ATTACH_MODE || 'bottom';

	this.ACTIVE_CLASS = arParams.ACTIVE_CLASS || '';
	this.LEVEL = arParams.LEVEL || 0;

	this.CLOSE_ON_CLICK = typeof arParams.CLOSE_ON_CLICK != 'undefined' ? !!arParams.CLOSE_ON_CLICK : true;
	this.ADJUST_ON_CLICK = typeof arParams.ADJUST_ON_CLICK != 'undefined' ? !!arParams.ADJUST_ON_CLICK : true;

	this.TYPE = this.PARAMS.TYPE == 'hover' ? 'hover' : 'click';

	this._openTimeout = null;

	if (this.PARAMS.TYPE == 'hover' && arParams.TIMEOUT !== 0)
		this.TIMEOUT = arParams.TIMEOUT || 1000;
	else
		this.TIMEOUT = 0;

	if (!!this.PARAMS.MENU_URL)
	{
		this.bMenuLoaded = false;
		this.bMenuLoading = false;

		this.MENU = [{
			TEXT: BX.message('JS_CORE_LOADING'),
			CLOSE_ON_CLICK: false
		}];

		if (this.PARAMS.MENU_PRELOAD)
		{
			BX.defer(this.Load, this)();
		}
	}

	BX.ready(BX.defer(this.Init, this));
};

BX.COpener.prototype.Init = function()
{
	this.DIV = BX(this.DIV);

	switch (this.TYPE)
	{
		case 'hover':
			BX.bind(this.DIV, 'mouseover', BX.proxy(this.Open, this));
			BX.bind(this.DIV, 'click', BX.proxy(this.Toggle, this));
		break;

		case 'click':
			BX.bind(this.DIV, 'click', BX.proxy(this.Toggle, this));
		break;
	}

	//BX.bind(window, 'scroll', BX.delegate(this.__close_immediately, this));

	this.bMenuInit = false;
};

BX.COpener.prototype.Load = function()
{
	if (this.PARAMS.MENU_URL && !this.bMenuLoaded)
	{
		if (!this.bMenuLoading)
		{
			var url = this.PARAMS.MENU_URL;
			if (url.indexOf('sessid=') <= 0)
				url += (url.indexOf('?') > 0 ? '&' : '?') + 'sessid=' + BX.bitrix_sessid();

			this.bMenuLoading = true;
			BX.ajax.loadJSON(url, BX.proxy(this.SetMenu, this), BX.proxy(this.LoadFailed, this));
		}
	}
};

BX.COpener.prototype.SetMenu = function(menu)
{
	this.bMenuLoaded = true;
	this.bMenuLoading = false;
	if (this.bMenuInit)
	{
		this.MENU.setItems(menu);
	}
	else
	{
		this.MENU = menu;
	}
};

BX.COpener.prototype.LoadFailed = function(type, error)
{
	this.bMenuLoading = false;
	this.SetMenu([{
		TEXT: BX.message('JS_CORE_NO_DATA'),
		CLOSE_ON_CLICK: true
	}]);
	BX.debug(arguments);
};

BX.COpener.prototype.checkAdminMenu = function()
{
	if (document.documentElement.id == 'bx-admin-prefix')
		return true;

	return !!BX.findParent(this.DIV, {property: {id: 'bx-admin-prefix'}});
};

BX.COpener.prototype.Toggle = function(e)
{
	this.__clear_timeout();

	if (!this.bMenuInit || !this.MENU.visible())
	{
		var t = this.TIMEOUT;
		this.TIMEOUT = 0;
		this.Open(e);
		this.TIMEOUT = t;
	}
	else
	{
		this.MENU.Close();
	}

	return !!(e||window.event) && BX.PreventDefault(e);
};

BX.COpener.prototype.GetMenu = function()
{
	if (!this.bMenuInit)
	{
		if (BX.type.isArray(this.MENU))
		{
			this.MENU = new BX.CMenu({
				ITEMS: this.MENU,
				ATTACH_MODE: this.ATTACH_MODE,
				SET_ID: this.checkAdminMenu() ? 'bx-admin-prefix' : '',
				CLOSE_ON_CLICK: !!this.CLOSE_ON_CLICK,
				ADJUST_ON_CLICK: !!this.ADJUST_ON_CLICK,
				LEVEL: this.LEVEL,
				parent: BX(this.DIV),
				parent_attach: BX(this.ATTACH)
			});

			if (this.LEVEL > 0)
			{
				BX.bind(this.MENU.DIV, 'mouseover', BX.proxy(this._on_menu_hover, this));
				BX.bind(this.MENU.DIV, 'mouseout', BX.proxy(this._on_menu_hout, this));
			}
		}

		BX.addCustomEvent(this.MENU, 'onMenuOpen', BX.proxy(this.handler_onopen, this));
		BX.addCustomEvent(this.MENU, 'onMenuClose', BX.proxy(this.handler_onclose, this));

		BX.addCustomEvent('onMenuItemHover', BX.proxy(this.handler_onover, this));

		this.bMenuInit = true;
	}

	return this.MENU;
};

BX.COpener.prototype.Open = function()
{
	this.GetMenu();

	this.bOpen = true;

	this.__clear_timeout();

	if (this.TIMEOUT > 0)
	{
		BX.bind(this.DIV, 'mouseout', BX.proxy(this.__clear_timeout, this));
		this._openTimeout = setTimeout(BX.proxy(this.__open, this), this.TIMEOUT);
	}
	else
	{
		this.__open();
	}

	if (!!this.PARAMS.MENU_URL && !this.bMenuLoaded)
	{
		this._loadTimeout = setTimeout(BX.proxy(this.Load, this), parseInt(this.TIMEOUT/2));
	}

	return true;
};

BX.COpener.prototype.__clear_timeout = function()
{
	if (!!this._openTimeout)
		clearTimeout(this._openTimeout);
	if (!!this._loadTimeout)
		clearTimeout(this._loadTimeout);

	BX.unbind(this.DIV, 'mouseout', BX.proxy(this.__clear_timeout, this));
};

BX.COpener.prototype._on_menu_hover = function()
{
	this.bMenuHover = true;

	this.__clear_timeout();

	if (this.ACTIVE_CLASS)
		BX.addClass(this.DIV, this.ACTIVE_CLASS);

};

BX.COpener.prototype._on_menu_hout = function()
{
	this.bMenuHover = false;
};

BX.COpener.prototype.handler_onover = function(level, opener)
{
	if (this.bMenuHover)
		return;

	if (opener != this && level == this.LEVEL-1 && this.ACTIVE_CLASS)
	{
		BX.removeClass(this.DIV, this.ACTIVE_CLASS);
	}

	if (this.bMenuInit && level <= this.LEVEL-1 && this.MENU.visible())
	{
		if (opener != this)
		{
			this.__clear_timeout();
			this._openTimeout = setTimeout(BX.proxy(this.Close, this), this.TIMEOUT);
		}
	}
};

BX.COpener.prototype.handler_onopen = function()
{
	this.bOpen = true;

	if (this.ACTIVE_CLASS)
		BX.addClass(this.DIV, this.ACTIVE_CLASS);

	BX.defer(function() {
		BX.onCustomEvent(this, 'onOpenerMenuOpen');
	}, this)();
};

BX.COpener.prototype.handler_onclose = function()
{
	this.bOpen = false;
	BX.onCustomEvent(this, 'onOpenerMenuClose');

	if (this.ACTIVE_CLASS)
		BX.removeClass(this.DIV, this.ACTIVE_CLASS);
};

BX.COpener.prototype.Close = function()
{
	if (!this.bMenuInit)
		return;

	if (!!this._openTimeout)
		clearTimeout(this._openTimeout);

	this.bOpen = false;

	this.__close();
};

BX.COpener.prototype.__open = function()
{
	this.__clear_timeout();

	if (this.bMenuInit && this.bOpen && !this.MENU.visible())
		this.MENU.Show();
};

BX.COpener.prototype.__close = function()
{
	if (this.bMenuInit && !this.bOpen && this.MENU.visible())
		this.MENU.Hide();
};

BX.COpener.prototype.__close_immediately = function() {
	this.bOpen = false; this.__close();
};

BX.COpener.prototype.isMenuVisible = function() {
	return null != this.MENU.visible && this.MENU.visible()
};

/* common menu class */

BX.CMenu = function(arParams)
{
	BX.CMenu.superclass.constructor.apply(this);

	this.DIV.style.width = 'auto';//this.DIV.firstChild.offsetWidth + 'px';
	this.DIV.style.height = 'auto';//this.DIV.firstChild.offsetHeight + 'px';

	this.PARAMS = arParams || {};
	this.PARTS = {};

	this.PARAMS.ATTACH_MODE = this.PARAMS.ATTACH_MODE || 'bottom';
	this.PARAMS.CLOSE_ON_CLICK = typeof this.PARAMS.CLOSE_ON_CLICK == 'undefined' ? true : this.PARAMS.CLOSE_ON_CLICK;
	this.PARAMS.ADJUST_ON_CLICK = typeof this.PARAMS.ADJUST_ON_CLICK == 'undefined' ? true : this.PARAMS.ADJUST_ON_CLICK;
	this.PARAMS.LEVEL = this.PARAMS.LEVEL || 0;

	this.DIV.className = 'bx-core-popup-menu bx-core-popup-menu-' + this.PARAMS.ATTACH_MODE + ' bx-core-popup-menu-level' + this.PARAMS.LEVEL + (typeof this.PARAMS.ADDITIONAL_CLASS != 'undefined' ? ' ' + this.PARAMS.ADDITIONAL_CLASS : '');
	if (!!this.PARAMS.SET_ID)
		this.DIV.id = this.PARAMS.SET_ID;

	if (this.PARAMS.LEVEL == 0)
	{
		this.ARROW = this.DIV.appendChild(BX.create('SPAN', {props: {className: 'bx-core-popup-menu-angle'}, style: {left:'15px'}}));
	}

	if (!!this.PARAMS.CLASS_NAME)
		this.DIV.className += ' ' + this.PARAMS.CLASS_NAME;

	BX.bind(this.DIV, 'click', BX.eventCancelBubble);

	this.ITEMS = [];

	this.setItems(this.PARAMS.ITEMS);

	BX.addCustomEvent('onMenuOpen', BX.proxy(this._onMenuOpen, this));
	BX.addCustomEvent('onMenuItemSelected', BX.proxy(this.Hide, this));
};
BX.extend(BX.CMenu, BX.CWindowFloat);

BX.CMenu.broadcastCloseEvent = function()
{
	BX.onCustomEvent("onMenuItemSelected");
};

BX.CMenu._toggleChecked = function()
{
	BX.toggleClass(this, 'bx-core-popup-menu-item-checked');
};

BX.CMenu._itemDblClick = function()
{
	window.location.href = this.href;
};

BX.CMenu.prototype.toggleArrow = function(v)
{
	if (!!this.ARROW)
	{
		if (typeof v == 'undefined')
		{
			v = this.ARROW.style.visibility == 'hidden';
		}

		this.ARROW.style.visibility = !!v ? 'visible' : 'hidden';
	}
};

BX.CMenu.prototype.visible = function()
{
	return this.DIV.style.display !== 'none';
};

BX.CMenu.prototype._onMenuOpen = function(menu, menu_level)
{
	if (this.visible())
	{
		if (menu_level == this.PARAMS.LEVEL && menu != this)
		{
			this.Hide();
		}
	}
};

BX.CMenu.prototype.onUnRegister = function()
{
	if (!this.visible())
		return;

	this.Hide();
};

BX.CMenu.prototype.setItems = function(items)
{
	this.PARAMS.ITEMS = items;

	BX.cleanNode(this.DIV);

	if (!!this.ARROW)
		this.DIV.appendChild(this.ARROW);

	if (this.PARAMS.ITEMS)
	{
		this.PARAMS.ITEMS = BX.util.array_values(this.PARAMS.ITEMS);

		var bIcons = false;
		var cnt = 0;
		for (var i = 0, len = this.PARAMS.ITEMS.length; i < len; i++)
		{
			if ((i == 0 || i == len-1) && this.PARAMS.ITEMS[i].SEPARATOR)
				continue;

			cnt++;

			if (!bIcons)
				bIcons = !!this.PARAMS.ITEMS[i].GLOBAL_ICON;

			this.addItem(this.PARAMS.ITEMS[i], i);
		}

		// Occam turning in his grave
		if (cnt === 1)
			BX.addClass(this.DIV, 'bx-core-popup-menu-single-item');
		else
			BX.removeClass(this.DIV, 'bx-core-popup-menu-single-item');

		if (!bIcons)
			BX.addClass(this.DIV, 'bx-core-popup-menu-no-icons');
		else
			BX.removeClass(this.DIV, 'bx-core-popup-menu-no-icons');

	}
};

BX.CMenu.prototype.addItem = function(item)
{
	this.ITEMS.push(item);

	if (item.SEPARATOR)
	{
		item.NODE = BX.create(
			'DIV', {props: {className: 'bx-core-popup-menu-separator'}}
		);
	}
	else
	{
		var bHasMenu = (!!item.MENU
			&& (
				(BX.type.isArray(item.MENU) && item.MENU.length > 0)
				|| item.MENU instanceof BX.CMenu
			) || !!item.MENU_URL
		);

		if (item.DISABLED)
		{
			item.CLOSE_ON_CLICK = false;
			item.LINK = null;
			item.ONCLICK = null;
			item.ACTION = null;
		}

		item.NODE = BX.create(!!item.LINK || BX.browser.IsIE() && !BX.browser.IsDoctype() ? 'A' : 'SPAN', {
			props: {
				className: 'bx-core-popup-menu-item'
					+ (bHasMenu ? ' bx-core-popup-menu-item-opener' : '')
					+ (!!item.DEFAULT ? ' bx-core-popup-menu-item-default' : '')
					+ (!!item.DISABLED ? ' bx-core-popup-menu-item-disabled' : '')
					+ (!!item.CHECKED ? ' bx-core-popup-menu-item-checked' : ''),
					title: !!BX.message['MENU_ENABLE_TOOLTIP'] || !!item.SHOW_TITLE ? item.TITLE || '' : '',
				BXMENULEVEL: this.PARAMS.LEVEL
			},
			attrs: !!item.LINK || BX.browser.IsIE() && !BX.browser.IsDoctype() ? {href: item.LINK || 'javascript:void(0)'} : {},
			events: {
				mouseover: function()
				{
					BX.onCustomEvent('onMenuItemHover', [this.BXMENULEVEL, this.OPENER])
				}
			},
			html: '<span class="bx-core-popup-menu-item-icon' + (item.GLOBAL_ICON ? ' '+item.GLOBAL_ICON : '') + '"></span><span class="bx-core-popup-menu-item-text">'+item.TEXT+'</span>'
		});

		if (bHasMenu && !item.DISABLED)
		{
			item.NODE.OPENER = new BX.COpener({
				DIV: item.NODE,
				ACTIVE_CLASS: 'bx-core-popup-menu-item-opened',
				TYPE: 'hover',
				MENU: item.MENU,
				MENU_URL: item.MENU_URL,
				MENU_PRELOAD: !!item.MENU_PRELOAD,
				LEVEL: this.PARAMS.LEVEL + 1,
				ATTACH_MODE:'right',
				TIMEOUT: 500
			});
		}
		else if (this.PARAMS.CLOSE_ON_CLICK && (typeof item.CLOSE_ON_CLICK == 'undefined' || !!item.CLOSE_ON_CLICK))
		{
			BX.bind(item.NODE, 'click', BX.CMenu.broadcastCloseEvent);
		}
		else if (this.PARAMS.ADJUST_ON_CLICK && (typeof item.ADJUST_ON_CLICK == 'undefined' || !!item.ADJUST_ON_CLICK))
		{
			BX.bind(item.NODE, 'click', BX.defer(this.adjustPos, this));
		}

		if (bHasMenu && !!item.LINK)
		{
			BX.bind(item.NODE, 'dblclick', BX.CMenu._itemDblClick);
		}

		if (typeof item.CHECKED != 'undefined')
		{
			BX.bind(item.NODE, 'click', BX.CMenu._toggleChecked);
		}

		item.ONCLICK = item.ACTION || item.ONCLICK;
		if (!!item.ONCLICK)
		{
			if (BX.type.isString(item.ONCLICK))
			{
				item.ONCLICK = new Function("event", item.ONCLICK);
			}

			BX.bind(item.NODE, 'click', item.ONCLICK);
		}
	}

	this.DIV.appendChild(item.NODE);
};

BX.CMenu.prototype._documentClickBind = function()
{
	this._documentClickUnBind();
	BX.bind(document, 'click', BX.proxy(this._documentClick, this));
};

BX.CMenu.prototype._documentClickUnBind = function()
{
	BX.unbind(document, 'click', BX.proxy(this._documentClick, this));
};

BX.CMenu.prototype._documentClick = function(e)
{
	e = e||window.event;
	if(!!e && !(BX.getEventButton(e) & BX.MSLEFT))
		return;

	this.Close();
};

BX.CMenu.prototype.Show = function()
{
	BX.onCustomEvent(this, 'onMenuOpen', [this, this.PARAMS.LEVEL]);
	BX.CMenu.superclass.Show.apply(this, []);

	this.bCloseEventFired = false;

	BX.addCustomEvent(this.PARAMS.parent_attach, 'onChangeNodePosition', BX.proxy(this.adjustToNode, this));

	(BX.defer(this._documentClickBind, this))();
};

BX.CMenu.prototype.Close = // we shouldn't 'Close' window - only hide
BX.CMenu.prototype.Hide = function()
{
	if (!this.visible())
		return;

	BX.removeCustomEvent(this.PARAMS.parent_attach, 'onChangeNodePosition', BX.proxy(this.adjustToNode, this));

	this._documentClickUnBind();

	if (!this.bCloseEventFired)
	{
		BX.onCustomEvent(this, 'onMenuClose', [this, this.PARAMS.LEVEL]);
		this.bCloseEventFired = true;
	}
	BX.CMenu.superclass.Hide.apply(this, arguments);


//	this.DIV.onclick = null;
	//this.PARAMS.parent.onclick = null;
};

BX.CMenu.prototype.__adjustMenuToNode = function()
{
	var pos = BX.pos(this.PARAMS.parent_attach),
		bFixed = !!BX.findParent(this.PARAMS.parent_attach, BX.is_fixed);

	if (bFixed)
		this.DIV.style.position = 'fixed';
	else
		this.DIV.style.position = 'absolute';

	if (!pos.top)
	{
		this.DIV.style.top = '-1000px';
		this.DIV.style.left = '-1000px';
	}

	if (this.bTimeoutSet) return;

	var floatWidth = this.DIV.offsetWidth, floatHeight = this.DIV.offsetHeight;
	if (!floatWidth)
	{
		setTimeout(BX.delegate(function(){
			this.bTimeoutSet = false; this.__adjustMenuToNode();
		}, this), 100);

		this.bTimeoutSet = true;
		return;
	}

	var menu_pos = {},
		wndSize = BX.GetWindowSize();

/*
	if (BX.browser.IsIE() && !BX.browser.IsDoctype())
	{
		pos.top -= 4; pos.bottom -= 4;
		pos.left -= 2; pos.right -= 2;
	}
*/

	switch (this.PARAMS.ATTACH_MODE)
	{
		case 'bottom':
			menu_pos.top = pos.bottom + 9;
			menu_pos.left = pos.left;

			var arrowPos = 0;
			if (!!this.ARROW)
			{
				if (pos.width > floatWidth)
					arrowPos = parseInt(floatWidth/2 - 7);
				else
					arrowPos = parseInt(Math.min(floatWidth, pos.width)/2 - 7);

				if (arrowPos < 7)
				{
					menu_pos.left -= 15;
					arrowPos += 15;
				}
			}

			if (menu_pos.left > wndSize.scrollWidth - floatWidth - 10)
			{
				var orig_menu_pos = menu_pos.left;
				menu_pos.left = wndSize.scrollWidth - floatWidth - 10;

				if (!!this.ARROW)
					arrowPos += orig_menu_pos - menu_pos.left;
			}

			if (bFixed)
			{
				menu_pos.left -= wndSize.scrollLeft;
			}

			if (!!this.ARROW)
				this.ARROW.style.left = arrowPos + 'px';
		break;
		case 'right':
			menu_pos.top = pos.top-1;
			menu_pos.left = pos.right;

			if (menu_pos.left > wndSize.scrollWidth - floatWidth - 10)
			{
				menu_pos.left = pos.left - floatWidth - 1;
			}
		break;
	}

	if (bFixed)
	{
		menu_pos.top -= wndSize.scrollTop;
	}

	if (!!this.ARROW)
		this.ARROW.className = 'bx-core-popup-menu-angle';

	if((menu_pos.top + floatHeight > wndSize.scrollTop + wndSize.innerHeight)
		|| (menu_pos.top + floatHeight > wndSize.scrollHeight))
	{
		var new_top = this.PARAMS.ATTACH_MODE == 'bottom'
			? pos.top - floatHeight - 9
			: pos.bottom - floatHeight + 1;

		if((new_top > wndSize.scrollTop)
			|| (menu_pos.top + floatHeight > wndSize.scrollHeight))
		{
			if ((menu_pos.top + floatHeight > wndSize.scrollHeight))
			{
				menu_pos.top = Math.max(0, wndSize.scrollHeight-floatHeight);
				this.toggleArrow(false);
			}
			else
			{
				menu_pos.top = new_top;

				if (!!this.ARROW)
					this.ARROW.className = 'bx-core-popup-menu-angle-bottom';
			}
		}
	}

	if (menu_pos.top + menu_pos.left == 0)
	{
		this.Hide();
	}
	else
	{
		this.DIV.style.top = menu_pos.top + 'px';
		this.DIV.style.left = menu_pos.left + 'px';
	}
};

BX.CMenu.prototype.adjustToNode = function(el)
{
	this.PARAMS.parent_attach = BX(el) || this.PARAMS.parent_attach || this.PARAMS.parent;
	this.__adjustMenuToNode();
};


/* components toolbar class */

BX.CMenuOpener = function(arParams)
{
	BX.CMenuOpener.superclass.constructor.apply(this);

	this.PARAMS = arParams || {};
	this.setParent(this.PARAMS.parent);
	this.PARTS = {};

	this.SETTINGS.drag_restrict = true;

	this.defaultAction = null;

	this.timeout = 500;

	this.DIV.className = 'bx-component-opener';
	this.DIV.ondblclick = BX.PreventDefault;

	if (this.PARAMS.component_id)
	{
		this.PARAMS.transform = !!this.PARAMS.transform;
	}

	this.OPENERS = [];

	this.DIV.appendChild(BX.create('SPAN', {
		props: {className: 'bx-context-toolbar' + (this.PARAMS.transform ? ' bx-context-toolbar-vertical-mode' : '')}
	}));

	//set internal structure and register draggable element
	this.PARTS.INNER = this.DIV.firstChild.appendChild(BX.create('SPAN', {
		props: {className: 'bx-context-toolbar-inner'},
		html: '<span class="bx-context-toolbar-drag-icon"></span><span class="bx-context-toolbar-vertical-line"></span><br>'
	}));

	this.EXTRA_BUTTONS = {};

	var btnCount = 0;
	for (var i = 0, len = this.PARAMS.menu.length; i < len; i++)
	{
		var item = this.addItem(this.PARAMS.menu[i]);
		if (null != item)
		{
			btnCount++;
			this.PARTS.INNER.appendChild(item);
			this.PARTS.INNER.appendChild(BX.create('BR'));
		}
	}
	var bHasButtons = btnCount > 0;

	//menu items will be attached here

	this.PARTS.ICONS = this.PARTS.INNER.appendChild(BX.create('SPAN', {
		props: {className: 'bx-context-toolbar-icons'}
	}));

	if (this.PARAMS.component_id)
	{
		this.PARAMS.pin = !!this.PARAMS.pin;

		if (bHasButtons)
			this.PARTS.ICONS.appendChild(BX.create('SPAN', {props: {className: 'bx-context-toolbar-separator'}}));

		this.PARTS.ICON_PIN = this.PARTS.ICONS.appendChild(BX.create('A', {
			attrs: {
				href: 'javascript:void(0)'
			},
			props: {
				className: this.PARAMS.pin
							? 'bx-context-toolbar-pin-fixed'
							: 'bx-context-toolbar-pin'
			},
			events: {
				click: BX.delegate(this.__pin_btn_clicked, this)
			}
		}));
	}


	if (this.EXTRA_BUTTONS['components2_props'])
	{
		var btn = this.EXTRA_BUTTONS['components2_props'] || {URL: 'javascript:void(0)'};
		if (null == this.defaultAction)
		{
			this.defaultAction = btn.ONCLICK;
			this.defaultActionTitle = btn.TITLE || btn.TEXT;
		}

		btn.URL = 'javascript:' + BX.util.urlencode(btn.ONCLICK);

		this.ATTACH = this.PARTS.ICONS.appendChild(BX.create('SPAN', {
			props: {className: 'bx-context-toolbar-button bx-context-toolbar-button-settings' },
			children:
			[
				BX.create('SPAN',
				{
					props:{className: 'bx-context-toolbar-button-inner'},
					children:
					[
						BX.create('A', {
							attrs: {href: btn.URL},
							events: {
								mouseover: BX.proxy(this.__msover_text, this),
								mouseout: BX.proxy(this.__msout_text, this),
								mousedown: BX.proxy(this.__msdown_text, this)
							},
							html: '<span class="bx-context-toolbar-button-icon bx-context-toolbar-settings-icon"></span>'
						}),
						BX.create('A', {
							attrs: {href: 'javascript: void(0)'},
							props: {className: 'bx-context-toolbar-button-arrow'},
							events: {
								mouseover: BX.proxy(this.__msover_arrow, this),
								mouseout: BX.proxy(this.__msout_arrow, this),
								mousedown: BX.proxy(this.__msdown_arrow, this)
							},
							html: '<span class="bx-context-toolbar-button-arrow"></span>'
						})
					]
				})
			]
		}));

		this.OPENER = this.ATTACH.firstChild.lastChild;

		var opener = this.attachMenu(this.EXTRA_BUTTONS['components2_submenu']['MENU']);

		BX.addCustomEvent(opener, 'onOpenerMenuOpen', BX.proxy(this.__menu_open, this));
		BX.addCustomEvent(opener, 'onOpenerMenuClose', BX.proxy(this.__menu_close, this));
	}

	if (btnCount > 1)
	{
		this.PARTS.ICONS.appendChild(BX.create('span', { props: {className: 'bx-context-toolbar-separator bx-context-toolbar-separator-switcher'}}));

		this.ICON_TRANSFORM = this.PARTS.ICONS.appendChild(BX.create('A', {
			attrs: {href: 'javascript: void(0)'},
			props: {className: 'bx-context-toolbar-switcher'},
			events: {
				click: BX.delegate(this.__trf_btn_clicked, this)
			}
		}));
	}

	if (this.PARAMS.HINT)
	{
		this.DIV.BXHINT = this.HINT = new BX.CHint({
			parent: this.DIV,
			hint:this.PARAMS.HINT.TEXT || '',
			title: this.PARAMS.HINT.TITLE || '',
			hide_timeout: this.timeout/2,
			preventHide: false
		});
	}

	BX.addCustomEvent(this, 'onWindowDragFinished', BX.delegate(this.__onMoveFinished, this));
	BX.addCustomEvent('onDynamicModeChange', BX.delegate(this.__onDynamicModeChange, this));
	BX.addCustomEvent('onTopPanelCollapse', BX.delegate(this.__onPanelCollapse, this));

	BX.addCustomEvent('onMenuOpenerMoved', BX.delegate(this.checkPosition, this));
	BX.addCustomEvent('onMenuOpenerUnhide', BX.delegate(this.checkPosition, this));

	if (this.OPENERS)
	{
		for (i=0,len=this.OPENERS.length; i<len; i++)
		{
			BX.addCustomEvent(this.OPENERS[i], 'onOpenerMenuOpen', BX.proxy(this.__hide_hint, this));
		}
	}
};
BX.extend(BX.CMenuOpener, BX.CWindowFloat);

BX.CMenuOpener.prototype.setParent = function(new_parent)
{
	new_parent = BX(new_parent);
	if(new_parent.OPENER && new_parent.OPENER != this)
	{
		new_parent.OPENER.Close();
		new_parent.OPENER.clearHoverHoutEvents();
	}

	if(this.PARAMS.parent && this.PARAMS.parent != new_parent)
	{
		this.clearHoverHoutEvents();
		this.PARAMS.parent.OPENER = null;
	}

	this.PARAMS.parent = new_parent;
	this.PARAMS.parent.OPENER = this;
};

BX.CMenuOpener.prototype.setHoverHoutEvents = function(hover, hout)
{
	if(!this.__opener_events_set)
	{
		BX.bind(this.Get(), 'mouseover', hover);
		BX.bind(this.Get(), 'mouseout', hout);
		this.__opener_events_set = true;
	}
};

BX.CMenuOpener.prototype.clearHoverHoutEvents = function()
{
	if(this.Get())
	{
		BX.unbindAll(this.Get());
		this.__opener_events_set = false;
	}
};


BX.CMenuOpener.prototype.unclosable = true;

BX.CMenuOpener.prototype.__check_intersection = function(pos_self, pos_other)
{
	return !(pos_other.right <= pos_self.left || pos_other.left >= pos_self.right
			|| pos_other.bottom <= pos_self.top || pos_other.top >= pos_self.bottom);
};


BX.CMenuOpener.prototype.__msover_text = function() {
	this.bx_hover = true;
	if (!this._menu_open)
		BX.addClass(this.ATTACH, 'bx-context-toolbar-button-text-hover');
};

BX.CMenuOpener.prototype.__msout_text = function() {
	this.bx_hover = false;
	if (!this._menu_open)
		BX.removeClass(this.ATTACH, 'bx-context-toolbar-button-text-hover bx-context-toolbar-button-text-active');
};

BX.CMenuOpener.prototype.__msover_arrow = function() {
	this.bx_hover = true;
	if (!this._menu_open)
		BX.addClass(this.ATTACH, 'bx-context-toolbar-button-arrow-hover');
};

BX.CMenuOpener.prototype.__msout_arrow = function() {
	this.bx_hover = false;
	if (!this._menu_open)
		BX.removeClass(this.ATTACH, 'bx-context-toolbar-button-arrow-hover bx-context-toolbar-button-arrow-active');
};

BX.CMenuOpener.prototype.__msdown_text = function() {
	this.bx_active = true;
	if (!this._menu_open)
		BX.addClass(this.ATTACH, 'bx-context-toolbar-button-text-active');
};

BX.CMenuOpener.prototype.__msdown_arrow = function() {
	this.bx_active = true;
	if (!this._menu_open)
		BX.addClass(this.ATTACH, 'bx-context-toolbar-button-arrow-active');
};

BX.CMenuOpener.prototype.__menu_close = function() {
	this._menu_open = false;
	this.bx_active = false;
	BX.removeClass(this.ATTACH, 'bx-context-toolbar-button-active bx-context-toolbar-button-text-active bx-context-toolbar-button-arrow-active');
	if (!this.bx_hover)
	{
		BX.removeClass(this.ATTACH, 'bx-context-toolbar-button-hover bx-context-toolbar-button-text-hover bx-context-toolbar-button-arrow-hover');
		this.bx_hover = false;
	}
};

BX.CMenuOpener.prototype.__menu_open = function() {
	this._menu_open = true;
};

BX.CMenuOpener.prototype.checkPosition = function()
{
	if (this.isMenuVisible() || this.DIV.style.display == 'none'
		|| this == BX.proxy_context || BX.proxy_context.zIndex > this.zIndex)
		return;

	this.correctPosition(BX.proxy_context);
};

BX.CMenuOpener.prototype.correctPosition = function(opener)
{
	var pos_self = BX.pos(this.DIV), pos_other = BX.pos(opener.Get());
	if (this.__check_intersection(pos_self, pos_other))
	{
		var new_top = pos_other.top - pos_self.height;
		if (new_top < 0)
			new_top = pos_other.bottom;

		this.DIV.style.top = new_top + 'px';

		BX.addCustomEvent(opener, 'onMenuOpenerHide', BX.proxy(this.restorePosition, this));
		BX.onCustomEvent(this, 'onMenuOpenerMoved');
	}
};

BX.CMenuOpener.prototype.restorePosition = function()
{
	if (!this.MOUSEOVER && !this.isMenuVisible())
	{
		if (this.originalPos)
			this.DIV.style.top = this.originalPos.top + 'px';

		BX.removeCustomEvent(BX.proxy_context, 'onMenuOpenerHide', BX.proxy(this.restorePosition, this));
		if (this.restore_pos_timeout) clearTimeout(this.restore_pos_timeout);
	}
	else
	{
		this.restore_pos_timeout = setTimeout(BX.proxy(this.restorePosition, this), this.timeout);
	}
};


BX.CMenuOpener.prototype.Show = function()
{
	BX.CMenuOpener.superclass.Show.apply(this, arguments);

	this.SetDraggable(this.PARTS.INNER.firstChild);

	this.DIV.style.width = 'auto';
	this.DIV.style.height = 'auto';

	if (!this.PARAMS.pin)
	{
		this.DIV.style.left = '-1000px';
		this.DIV.style.top = '-1000px';

		this.Hide();
	}
	else
	{
		this.bPosAdjusted = true;
		this.bMoved = true;

		if (this.PARAMS.top) this.DIV.style.top = this.PARAMS.top + 'px';
		if (this.PARAMS.left) this.DIV.style.left = this.PARAMS.left + 'px';

		this.DIV.style.display = (!BX.admin.dynamic_mode || BX.admin.dynamic_mode_show_borders) ? 'block' : 'none';

		if (this.DIV.style.display == 'block')
		{
			setTimeout(BX.delegate(function() {BX.onCustomEvent(this, 'onMenuOpenerUnhide')}, this), 50);
		}
	}
};

BX.CMenuOpener.prototype.executeDefaultAction = function()
{
	if (this.defaultAction)
	{
		if (BX.type.isFunction(this.defaultAction))
			this.defaultAction();
		else if(BX.type.isString(this.defaultAction))
			BX.evalGlobal(this.defaultAction);
	}
};

BX.CMenuOpener.prototype.__onDynamicModeChange = function(val)
{
	this.DIV.style.display = val ? 'block' : 'none';
};

BX.CMenuOpener.prototype.__onPanelCollapse = function(bCollapsed, dy)
{
	this.DIV.style.top = (parseInt(this.DIV.style.top) + dy) + 'px';
	if (this.PARAMS.pin)
	{
		this.__savePosition();
	}
};

BX.CMenuOpener.prototype.__onMoveFinished = function()
{
	BX.onCustomEvent(this, 'onMenuOpenerMoved');

	this.bMoved = true;

	if (this.PARAMS.pin)
		this.__savePosition();
};

BX.CMenuOpener.prototype.__savePosition = function()
{
	var arOpts = {};

	arOpts.pin = this.PARAMS.pin;
	if (!this.PARAMS.pin)
	{
		arOpts.top = false; arOpts.left = false; arOpts.transform = false;
	}
	else
	{
		arOpts.transform = this.PARAMS.transform;
		if (this.bMoved)
		{
			arOpts.left = parseInt(this.DIV.style.left);
			arOpts.top = parseInt(this.DIV.style.top);
		}
	}

	BX.WindowManager.saveWindowOptions(this.PARAMS.component_id, arOpts);
};

BX.CMenuOpener.prototype.__pin_btn_clicked = function() {this.Pin()};
BX.CMenuOpener.prototype.Pin = function(val)
{
	if (null == val)
		this.PARAMS.pin = !this.PARAMS.pin;
	else
		this.PARAMS.pin = !!val;

	this.PARTS.ICON_PIN.className = (this.PARAMS.pin ? 'bx-context-toolbar-pin-fixed' : 'bx-context-toolbar-pin');

	this.__savePosition();
};

BX.CMenuOpener.prototype.__trf_btn_clicked = function() {this.Transform()};
BX.CMenuOpener.prototype.Transform = function(val)
{
	var pos = {};

	if (null == val)
		this.PARAMS.transform = !this.PARAMS.transform;
	else
		this.PARAMS.transform = !!val;

	if (this.bMoved)
	{
		pos = BX.pos(this.DIV);
	}

	if (this.PARAMS.transform)
		BX.addClass(this.DIV.firstChild, 'bx-context-toolbar-vertical-mode');
	else
		BX.removeClass(this.DIV.firstChild, 'bx-context-toolbar-vertical-mode');

	if (!this.bMoved)
	{
		this.adjustPos();
	}
	else
	{
		this.DIV.style.left = (pos.right - this.DIV.offsetWidth - (BX.browser.IsIE() && !BX.browser.IsDoctype() ? 2 : 0)) + 'px';
	}

	this.__savePosition();
};

BX.CMenuOpener.prototype.adjustToNodeGetPos = function()
{
	var pos = BX.pos(this.PARAMS.parent/*, true*/);

	var scrollSize = BX.GetWindowScrollSize();
	var floatWidth = this.DIV.offsetWidth;

	pos.left -= BX.admin.__border_dx;
	pos.top -= BX.admin.__border_dx;

	if (true || !this.PARAMS.transform)
	{
		pos.top -= 45;
	}

	if (pos.left > scrollSize.scrollWidth - floatWidth)
	{
		pos.left = scrollSize.scrollWidth - floatWidth;
	}

	return pos;
};

BX.CMenuOpener.prototype.addItem = function(item)
{
	if (item.TYPE)
	{
		this.EXTRA_BUTTONS[item.TYPE] = item;
		return null;
	}
	else
	{
		var q = new BX.CMenuOpenerItem(item);
		if (null == this.defaultAction)
		{
			if (q.item.ONCLICK)
			{
				this.defaultAction = item.ONCLICK;
			}
			else if (q.item.MENU)
			{
				this.defaultAction = BX.delegate(function() {this.Open()}, q.item.OPENER);
			}

			this.defaultActionTitle = item.TITLE || item.TEXT;

			BX.addClass(q.Get(), 'bx-content-toolbar-default');
		}
		if (q.item.OPENER) this.OPENERS[this.OPENERS.length] = q.item.OPENER;
		return q.Get();
	}
};

BX.CMenuOpener.prototype.attachMenu = function(menu)
{
	var opener = new BX.COpener({
		'DIV':  this.OPENER,
		'ATTACH': this.ATTACH,
		'MENU': menu,
		'TYPE': 'click'
	});

	this.OPENERS[this.OPENERS.length] = opener;

	return opener;
};

BX.CMenuOpener.prototype.__hide_hint = function()
{
	if (this.HINT) this.HINT.__hide_immediately();
};

BX.CMenuOpener.prototype.isMenuVisible = function()
{
	for (var i=0,len=this.OPENERS.length; i<len; i++)
	{
		if (this.OPENERS[i].isMenuVisible())
			return true;
	}

	return false;
};

BX.CMenuOpener.prototype.Hide = function()
{
	if (!this.PARAMS.pin)
	{
		this.DIV.style.display = 'none';
		BX.onCustomEvent(this, 'onMenuOpenerHide');
	}
};
BX.CMenuOpener.prototype.UnHide = function()
{
	this.DIV.style.display = 'block';
	if (!this.bPosAdjusted && !this.PARAMS.pin)
	{
		this.adjustPos();
		this.bPosAdjusted = true;
	}

	if (null == this.originalPos && !this.bMoved)
	{
		this.originalPos = BX.pos(this.DIV);
	}

	BX.onCustomEvent(this, 'onMenuOpenerUnhide');
};

BX.CMenuOpenerItem = function(item)
{
	this.item = item;

	if (this.item.ACTION && !this.item.ONCLICK)
	{
		this.item.ONCLICK = this.item.ACTION;
	}

	this.DIV = BX.create('SPAN');
	this.DIV.appendChild(BX.create('SPAN', {props: {className: 'bx-context-toolbar-button-underlay'}}));

	this.WRAPPER = this.DIV.appendChild(BX.create('SPAN', {
		props: {className: 'bx-context-toolbar-button-wrapper'},
		children: [
			BX.create('SPAN', {
				props: {className: 'bx-context-toolbar-button', title: item.TITLE},
				children: [
					BX.create('SPAN', {
						props: {className: 'bx-context-toolbar-button-inner'}
					})
				]
			})
		]
	}));

	var btn_icon = BX.create('SPAN', {
		props: {className: 'bx-context-toolbar-button-icon' + (this.item.ICON || this.item.ICONCLASS ? ' ' + (this.item.ICON || this.item.ICONCLASS) : '')},
		attrs: (
				!(this.item.ICON || this.item.ICONCLASS)
				&&
				(this.item.SRC || this.item.IMAGE)
			)
			? {
				style: 'background: scroll transparent url(' + (this.item.SRC || this.item.IMAGE) + ') no-repeat center center !important;'
			}
			: {}
	}), btn_text = BX.create('SPAN', {
		props: {className: 'bx-context-toolbar-button-text'},
		text: this.item.TEXT
	});

	if (this.item.ACTION && !this.item.ONCLICK)
	{
		this.item.ONCLICK = this.item.ACTION;
	}

	this.bHasMenu = !!this.item.MENU;
	this.bHasAction = !!this.item.ONCLICK;

	if (this.bHasAction)
	{
		this.LINK = this.WRAPPER.firstChild.firstChild.appendChild(BX.create('A', {
			attrs: {
				'href': 'javascript: void(0)'
			},
			events: {
				mouseover: this.bHasMenu ? BX.proxy(this.__msover_text, this) : BX.proxy(this.__msover, this),
				mouseout: this.bHasMenu ? BX.proxy(this.__msout_text, this) : BX.proxy(this.__msout, this),
				mousedown: this.bHasMenu ? BX.proxy(this.__msdown_text, this) : BX.proxy(this.__msdown, this)
			},
			children: [btn_icon, btn_text]
		}));

		if (this.bHasMenu)
		{
			this.LINK_MENU = this.WRAPPER.firstChild.firstChild.appendChild(BX.create('A', {
				props: {className: 'bx-context-toolbar-button-arrow'},
				attrs: {
					'href': 'javascript: void(0)'
				},
				events: {
					mouseover: BX.proxy(this.__msover_arrow, this),
					mouseout: BX.proxy(this.__msout_arrow, this),
					mousedown: BX.proxy(this.__msdown_arrow, this)
				},
				children: [
					BX.create('SPAN', {props: {className: 'bx-context-toolbar-button-arrow'}})
				]
			}));
		}

	}
	else if (this.bHasMenu)
	{
		this.item.ONCLICK = null;

		this.LINK = this.LINK_MENU = this.WRAPPER.firstChild.firstChild.appendChild(BX.create('A', {
			attrs: {
				'href': 'javascript: void(0)'
			},
			events: {
				mouseover: BX.proxy(this.__msover, this),
				mouseout: BX.proxy(this.__msout, this),
				mousedown: BX.proxy(this.__msdown, this)
			},
			children: [
				btn_icon,
				btn_text
			]
		}));

		this.LINK.appendChild(BX.create('SPAN', {props: {className: 'bx-context-toolbar-single-button-arrow'}}));

	}

	if (this.bHasMenu)
	{
		this.item.SUBMENU = new BX.CMenu({
			ATTACH_MODE:'bottom',
			ITEMS:this.item['MENU'],
			//PARENT_MENU:this.parentMenu,
			parent: this.LINK_MENU,
			parent_attach: this.WRAPPER.firstChild
		});

		this.item.OPENER = new BX.COpener({
			DIV: this.LINK_MENU,
			TYPE: 'click',
			MENU: this.item.SUBMENU
		});

		BX.addCustomEvent(this.item.OPENER, 'onOpenerMenuOpen', BX.proxy(this.__menu_open, this));
		BX.addCustomEvent(this.item.OPENER, 'onOpenerMenuClose', BX.proxy(this.__menu_close, this));
	}

	if (this.bHasAction)
	{
		BX.bind(this.LINK, 'click', BX.delegate(this.__click, this));
	}
};

BX.CMenuOpenerItem.prototype.Get = function() {return this.DIV;};
BX.CMenuOpenerItem.prototype.__msover = function() {
	this.bx_hover = true;
	if (!this._menu_open)
		BX.addClass(this.LINK.parentNode.parentNode, 'bx-context-toolbar-button-hover');
};
BX.CMenuOpenerItem.prototype.__msout = function() {
	this.bx_hover = false;
	if (!this._menu_open)
		BX.removeClass(this.LINK.parentNode.parentNode, 'bx-context-toolbar-button-hover bx-context-toolbar-button-active');
};
BX.CMenuOpenerItem.prototype.__msover_text = function() {
	this.bx_hover = true;
	if (!this._menu_open)
		BX.addClass(this.LINK.parentNode.parentNode, 'bx-context-toolbar-button-text-hover');
};
BX.CMenuOpenerItem.prototype.__msout_text = function() {
	this.bx_hover = false;
	if (!this._menu_open)
		BX.removeClass(this.LINK.parentNode.parentNode, 'bx-context-toolbar-button-text-hover bx-context-toolbar-button-text-active');
};
BX.CMenuOpenerItem.prototype.__msover_arrow = function() {
	this.bx_hover = true;
	if (!this._menu_open)
		BX.addClass(this.LINK.parentNode.parentNode, 'bx-context-toolbar-button-arrow-hover');
};
BX.CMenuOpenerItem.prototype.__msout_arrow = function() {
	this.bx_hover = false;
	if (!this._menu_open)
		BX.removeClass(this.LINK.parentNode.parentNode, 'bx-context-toolbar-button-arrow-hover bx-context-toolbar-button-arrow-active');
};
BX.CMenuOpenerItem.prototype.__msdown = function() {
	this.bx_active = true;
	if (!this._menu_open)
		BX.addClass(this.LINK.parentNode.parentNode, 'bx-context-toolbar-button-active');
};
BX.CMenuOpenerItem.prototype.__msdown_text = function() {
	this.bx_active = true;
	if (!this._menu_open)
		BX.addClass(this.LINK.parentNode.parentNode, 'bx-context-toolbar-button-text-active');
};
BX.CMenuOpenerItem.prototype.__msdown_arrow = function() {
	this.bx_active = true;
	if (!this._menu_open)
		BX.addClass(this.LINK.parentNode.parentNode, 'bx-context-toolbar-button-arrow-active');
};
BX.CMenuOpenerItem.prototype.__menu_close = function() {

	this._menu_open = false;
	this.bx_active = false;
	BX.removeClass(this.LINK.parentNode.parentNode, 'bx-context-toolbar-button-active bx-context-toolbar-button-text-active bx-context-toolbar-button-arrow-active');
	if (!this.bx_hover)
	{
		BX.removeClass(this.LINK.parentNode.parentNode, 'bx-context-toolbar-button-hover bx-context-toolbar-button-text-hover bx-context-toolbar-button-arrow-hover');
		this.bx_hover = false;
	}
};
BX.CMenuOpenerItem.prototype.__menu_open = function() {
	this._menu_open = true;
};

BX.CMenuOpenerItem.prototype.__click = function() {BX.evalGlobal(this.item.ONCLICK)};

/* global page opener class */
BX.CPageOpener = function(arParams)
{
	//if (null == arParams.pin) arParams.pin = true;
	BX.CPageOpener.superclass.constructor.apply(this, arguments);

	this.timeout = 505;

	window.PAGE_EDIT_CONTROL = this;
};
BX.extend(BX.CPageOpener, BX.CMenuOpener);

BX.CPageOpener.prototype.checkPosition = function()
{
	if (/*this.isMenuVisible() || this.DIV.style.display == 'none' || */this == BX.proxy_context)
		return;

	this.correctPosition(BX.proxy_context);
};

BX.CPageOpener.prototype.correctPosition = function(opener)
{
	if (this.bPosCorrected) return;
	var pos_self;
	if (this.DIV.style.display == 'none')
	{
		pos_self = this.adjustToNodeGetPos();
		pos_self.bottom = pos_self.top + 30;
		pos_self.right = pos_self.left + 300;
	}
	else
	{
		pos_self = BX.pos(this.DIV);
	}

	var pos_other = BX.pos(opener.Get());
	if (this.__check_intersection(pos_self, pos_other))
	{
		this.DIV.style.display = 'none';
		BX.addCustomEvent(opener, 'onMenuOpenerHide', BX.proxy(this.restorePosition, this));

		this.bPosCorrected = true;
	}
};

BX.CPageOpener.prototype.restorePosition = function()
{
	if (BX.proxy_context && BX.proxy_context.Get().style.display == 'none')
	{
		this.bPosCorrected = false;

		if (this.PARAMS.parent.bx_over || this.PARAMS.pin)
			this.UnHide();

		BX.removeCustomEvent('onMenuOpenerHide', BX.proxy(this.restorePosition, this));
	}
};

BX.CPageOpener.prototype.UnHide = function()
{
	if (!this.bPosCorrected)
		BX.CPageOpener.superclass.UnHide.apply(this, arguments);
};

BX.CPageOpener.prototype.Remove = function()
{
	BX.admin.removeComponentBorder(this.PARAMS.parent);
	BX.userOptions.save('global', 'settings', 'page_edit_control_enable', 'N');
	this.DIV.style.display = 'none';
};

/******* HINT ***************/
BX.CHintSimple = function()
{
	BX.CHintSimple.superclass.constructor.apply(this, arguments);
};
BX.extend(BX.CHintSimple, BX.CHint);

BX.CHintSimple.prototype.Init = function()
{
	this.DIV = document.body.appendChild(BX.create('DIV', {props: {className: 'bx-tooltip-simple'}, style: {display: 'none'}, children: [(this.CONTENT = BX.create('DIV'))]}));

	if (this.HINT_TITLE)
		this.CONTENT.appendChild(BX.create('B', {text: this.HINT_TITLE}));

	if (this.HINT)
		this.CONTENT_TEXT = this.CONTENT.appendChild(BX.create('DIV')).appendChild(BX.create('SPAN', {html: this.HINT}));

	if (this.PARAMS.preventHide)
	{
		BX.bind(this.DIV, 'mouseout', BX.proxy(this.Hide, this));
		BX.bind(this.DIV, 'mouseover', BX.proxy(this.Show, this));
	}

	this.bInited = true;
};

/*************************** admin informer **********************************/
BX.adminInformer = {

	itemsShow: 3,

	Init: function (itemsShow)
	{
		if(itemsShow)
			BX.adminInformer.itemsShow = itemsShow;

		var informer = BX("admin-informer");

		if(informer)
			document.body.appendChild(informer);

		BX.addCustomEvent("onTopPanelCollapse", BX.proxy(BX.adminInformer.Close, BX.adminInformer));
	},

	Toggle: function(notifyBlock)
	{
		var informer = BX("admin-informer");

		if(!informer)
			return false;

		var pos = BX.pos(notifyBlock);

		informer.style.top = (parseInt(pos.top)+parseInt(pos.height)+7)+'px';
		informer.style.left = pos.left+'px';

		if(!BX.hasClass(informer, "adm-informer-active"))
			BX.adminInformer.Show(informer);
		else
			BX.adminInformer.Hide(informer);

		return false;
	},

	Close: function()
	{
		BX.adminInformer.Hide(BX("admin-informer"));
	},

	OnInnerClick: function(event)
	{
		var target = event.target || event.srcElement;

		if(target.nodeName.toLowerCase() != 'a' || BX.hasClass(target,"adm-informer-footer"))
		{
			return BX.PreventDefault(event);
		}

		return true;
	},

	ToggleExtra : function()
	{
		var footerLink = BX("adm-informer-footer");

		if (BX.hasClass(footerLink, "adm-informer-footer-collapsed"))
			this.ShowAll();
		else
			this.HideExtra();

		return false;
	},

	ShowAll: function()
	{
		var informer = BX("admin-informer");
		for(var i=0; i<informer.children.length; i++)

			if(BX.hasClass(informer.children[i], "adm-informer-item") && informer.children[i].style.display == "none") {
				informer.children[i].style.display = "block";
			}

		var footerLink = BX("adm-informer-footer");

		if(footerLink.textContent !== undefined)
			footerLink.textContent = BX.message('JSADM_AI_HIDE_EXTRA');
		else
			footerLink.innerText = BX.message('JSADM_AI_HIDE_EXTRA');

		BX.removeClass(footerLink, "adm-informer-footer-collapsed");

		return false;
	},

	HideExtra: function()
	{
		var informer = BX("admin-informer");
		var hided = 0;

		for(var i=BX.adminInformer.itemsShow+1; i<informer.children.length; i++)
		{
			if (BX.hasClass(informer.children[i], "adm-informer-item") && informer.children[i].style.display == "block") {
				informer.children[i].style.display = "none";
				hided++;
			}
		}

		var footerLink = BX("adm-informer-footer");

		var linkText = BX.message('JSADM_AI_ALL_NOTIF')+" ("+(BX.adminInformer.itemsShow+parseInt(hided))+")";

		if(footerLink.textContent !== undefined)
			footerLink.textContent = linkText;
		else
			footerLink.innerText = linkText;

		BX.addClass(footerLink, "adm-informer-footer-collapsed");

		return false;
	},

	Show: function(informer)
	{
		var notifButton = BX("adm-header-notif-block");
		if (notifButton)
			BX.addClass(notifButton, "adm-header-notif-block-active");

		BX.onCustomEvent(informer, 'onBeforeAdminInformerShow');
		setTimeout(
			BX.proxy(function() {
					BX.bind(document, "click", BX.proxy(BX.adminInformer.Close, BX.adminInformer));
				},
				BX.adminInformer
			),0
		);
		BX.addClass(informer, "adm-informer-active");
		setTimeout(function() {BX.addClass(informer, "adm-informer-animate");},0);
	},

	Hide: function(informer)
	{
		var notifButton = BX("adm-header-notif-block");
		if (notifButton)
			BX.removeClass(notifButton, "adm-header-notif-block-active");

		BX.unbind(document, "click", BX.proxy(BX.adminInformer.Close, BX.adminInformer));

		BX.removeClass(informer, "adm-informer-animate");

		if (this.IsAnimationSupported())
			setTimeout(function() {BX.removeClass(informer, "adm-informer-active");}, 300);
		else
			BX.removeClass(informer, "adm-informer-active");

		BX.onCustomEvent(informer, 'onAdminInformerHide');
		//setTimeout(function() {BX.adminInformer.HideExtra();},500);
	},

	IsAnimationSupported : function()
	{
		var d = document.body || document.documentElement;
		if (typeof(d.style.transition) == "string")
			return true;
		else if (typeof(d.style.MozTransition) == "string")
			return true;
		else if (typeof(d.style.OTransition) == "string")
			return true;
		else if (typeof(d.style.WebkitTransition) == "string")
			return true;
		else if (typeof(d.style.msTransition) == "string")
			return true;

		return false;
	},


	SetItemHtml: function(itemIdx, html)
	{
		var itemHtmlDiv = BX("adm-informer-item-html-"+itemIdx);

		if(!itemHtmlDiv)
			return false;

		itemHtmlDiv.innerHTML = html;

		return true;
	},

	SetItemFooter: function(itemIdx, html)
	{
		var itemFooterDiv = BX("adm-informer-item-footer-"+itemIdx);

		if(!itemFooterDiv)
			return false;

		itemFooterDiv.innerHTML = html;

		if(html)
			itemFooterDiv.style.display = "block";
		else
			itemFooterDiv.style.display = "none";

		return true;
	}

};

})(window);


/* End */
;
; /* Start:"a:4:{s:4:"full";s:50:"http://atrspb.com/bitrix/js/main/core/core_fx.min.js?14970384269768";s:6:"source";s:31:"core_fx.js"/*tpa=http://atrspb.com/bitrix/js/main/core/core_fx.js*/;s:3:"min";s:35:"core_fx.min.js"/*tpa=http://atrspb.com/bitrix/js/main/core/core_fx.min.js*/;s:3:"map";s:35:"core_fx.map.js"/*tpa=http://atrspb.com/bitrix/js/main/core/core_fx.map.js*/;}"*/
(function(t){var i={time:1,step:.05,type:"linear",allowFloat:false};BX.fx=function(t){this.options=t;if(null!=this.options.time)this.options.originalTime=this.options.time;if(null!=this.options.step)this.options.originalStep=this.options.step;if(!this.__checkOptions())return false;this.__go=BX.delegate(this.go,this);this.PARAMS={}};BX.fx.prototype.__checkOptions=function(){if(typeof this.options.start!=typeof this.options.finish)return false;if(null==this.options.time)this.options.time=i.time;if(null==this.options.step)this.options.step=i.step;if(null==this.options.type)this.options.type=i.type;if(null==this.options.allowFloat)this.options.allowFloat=i.allowFloat;this.options.time*=1e3;this.options.step*=1e3;if(typeof this.options.start!="object"){this.options.start={_param:this.options.start};this.options.finish={_param:this.options.finish}}var e;for(e in this.options.start){if(null==this.options.finish[e]){this.options.start[e]=null;delete this.options.start[e]}}if(!BX.type.isFunction(this.options.type)){if(BX.type.isFunction(t[this.options.type]))this.options.type=t[this.options.type];else if(BX.type.isFunction(BX.fx.RULES[this.options.type]))this.options.type=BX.fx.RULES[this.options.type];else this.options.type=BX.fx.RULES[i.type]}return true};BX.fx.prototype.go=function(){var t=(new Date).valueOf();if(t<this.PARAMS.timeFinish){for(var i in this.PARAMS.current){this.PARAMS.current[i][0]=this.options.type.apply(this,[{start_value:this.PARAMS.start[i][0],finish_value:this.PARAMS.finish[i][0],current_value:this.PARAMS.current[i][0],current_time:t-this.PARAMS.timeStart,total_time:this.options.time}])}this._callback(this.options.callback);if(!this.paused)this.PARAMS.timer=setTimeout(this.__go,this.options.step)}else{this.stop()}};BX.fx.prototype._callback=function(t){var i={};t=t||this.options.callback;for(var e in this.PARAMS.current){i[e]=(this.options.allowFloat?this.PARAMS.current[e][0]:Math.round(this.PARAMS.current[e][0]))+this.PARAMS.current[e][1]}return t.apply(this,[null!=i["_param"]?i._param:i])};BX.fx.prototype.start=function(){var t,i,e;this.PARAMS.start={};this.PARAMS.current={};this.PARAMS.finish={};for(t in this.options.start){i=+this.options.start[t];e=(this.options.start[t]+"").substring((i+"").length);this.PARAMS.start[t]=[i,e];this.PARAMS.current[t]=[i,e];this.PARAMS.finish[t]=[+this.options.finish[t],e]}this._callback(this.options.callback_start);this._callback(this.options.callback);this.PARAMS.timeStart=(new Date).valueOf();this.PARAMS.timeFinish=this.PARAMS.timeStart+this.options.time;this.PARAMS.timer=setTimeout(BX.delegate(this.go,this),this.options.step);return this};BX.fx.prototype.pause=function(){if(this.paused){this.PARAMS.timer=setTimeout(this.__go,this.options.step);this.paused=false}else{clearTimeout(this.PARAMS.timer);this.paused=true}};BX.fx.prototype.stop=function(t){t=!!t;if(this.PARAMS.timer)clearTimeout(this.PARAMS.timer);if(null!=this.options.originalTime)this.options.time=this.options.originalTime;if(null!=this.options.originalStep)this.options.step=this.options.originalStep;this.PARAMS.current=this.PARAMS.finish;if(!t){this._callback(this.options.callback);this._callback(this.options.callback_complete)}};BX.fx.RULES={linear:function(t){return t.start_value+t.current_time/t.total_time*(t.finish_value-t.start_value)},decelerated:function(t){return t.start_value+Math.sqrt(t.current_time/t.total_time)*(t.finish_value-t.start_value)},accelerated:function(t){var i=t.current_time/t.total_time;return t.start_value+i*i*(t.finish_value-t.start_value)}};BX.fx.hide=function(t,i,e){t=BX(t);if(typeof i=="object"&&null==e){e=i;i=e.type}if(!e)e={};if(!BX.type.isNotEmptyString(i)){t.style.display="none";return}var s=BX.fx.EFFECTS[i](t,e,0);s.callback_complete=function(){if(e.hide!==false)t.style.display="none";if(e.callback_complete)e.callback_complete.apply(this,arguments)};return new BX.fx(s).start()};BX.fx.show=function(t,i,e){t=BX(t);if(typeof i=="object"&&null==e){e=i;i=e.type}if(!e)e={};if(!BX.type.isNotEmptyString(i)){t.style.display="block";return}var s=BX.fx.EFFECTS[i](t,e,1);s.callback_complete=function(){if(e.show!==false)t.style.display="block";if(e.callback_complete)e.callback_complete.apply(this,arguments)};return new BX.fx(s).start()};BX.fx.EFFECTS={scroll:function(t,e,s){if(!e.direction)e.direction="vertical";var n=e.direction=="horizontal"?"width":"height";var o=parseInt(BX.style(t,n));if(isNaN(o)){o=BX.pos(t)[n]}if(s==0)var a=o,r=e.min_height?parseInt(e.min_height):0;else var r=o,a=e.min_height?parseInt(e.min_height):0;return{start:a,finish:r,time:e.time||i.time,type:"linear",callback_start:function(){if(BX.style(t,"position")=="static")t.style.position="relative";t.style.overflow="hidden";t.style[n]=a+"px";t.style.display="block"},callback:function(i){t.style[n]=i+"px"}}},fade:function(t,e,s){var n={time:e.time||i.time,type:s==0?"decelerated":"linear",start:s==0?1:0,finish:s==0?0:1,allowFloat:true};if(BX.browser.IsIE()&&!BX.browser.IsIE9()){n.start*=100;n.finish*=100;n.allowFloat=false;n.callback_start=function(){t.style.display="block";t.style.filter+="progid:DXImageTransform.Microsoft.Alpha(opacity="+n.start+")"};n.callback=function(i){(t.filters["DXImageTransform.Microsoft.alpha"]||t.filters.alpha).opacity=i}}else{n.callback_start=function(){t.style.display="block"};n.callback=function(i){t.style.opacity=t.style.KhtmlOpacity=t.style.MozOpacity=i}}return n},fold:function(t,e,s){if(s!=0)return;var n=BX.pos(t);var o=n.height/(n.width+n.height);var a={time:e.time||i.time,callback_complete:e.callback_complete,hide:e.hide};e.type="scroll";e.direction="vertical";e.min_height=e.min_height||10;e.hide=false;e.time=o*a.time;e.callback_complete=function(){t.style.whiteSpace="nowrap";e.direction="horizontal";e.min_height=null;e.time=a.time-e.time;e.hide=a.hide;e.callback_complete=a.callback_complete;BX.fx.hide(t,e)};return BX.fx.EFFECTS.scroll(t,e,s)},scale:function(t,e,s){var n={width:parseInt(BX.style(t,"width")),height:parseInt(BX.style(t,"height"))};if(isNaN(n.width)||isNaN(n.height)){var o=BX.pos(t);n={width:o.width,height:o.height}}if(s==0)var a=n,r={width:0,height:0};else var r=n,a={width:0,height:0};return{start:a,finish:r,time:e.time||i.time,type:"linear",callback_start:function(){t.style.position="relative";t.style.overflow="hidden";t.style.display="block";t.style.height=a.height+"px";t.style.width=a.width+"px"},callback:function(i){t.style.height=i.height+"px";t.style.width=i.width+"px"}}}};var e={arStack:{},arRules:{},globalAnimationId:0};BX.fx.colorAnimate=function(t,i,s){if(t==null)return;animationId=t.getAttribute("data-animation-id");if(animationId==null){animationId=e.globalAnimationId;t.setAttribute("data-animation-id",e.globalAnimationId++)}var n=i.split(/\s*,\s*/);for(var o=0;o<n.length;o++){i=n[o];if(!e.arRules[i])continue;var a=0;if(!e.arStack[animationId]){e.arStack[animationId]={}}else if(e.arStack[animationId][i]){a=e.arStack[animationId][i].i;clearInterval(e.arStack[animationId][i].tId)}if(a==0&&s||a==e.arRules[i][3]&&!s)continue;e.arStack[animationId][i]={i:a,element:t,tId:setInterval('BX.fx.colorAnimate.run("'+animationId+'","'+i+'")',e.arRules[i][4]),back:Boolean(s)}}};BX.fx.colorAnimate.addRule=function(t,i,s,n,o,a,r){e.arRules[t]=[BX.util.hex2rgb(i),BX.util.hex2rgb(s),n.replace(/\-(.)/g,function(){return arguments[1].toUpperCase()}),o,a||1,r||false]};BX.fx.colorAnimate.run=function(t,i){element=e.arStack[t][i].element;e.arStack[t][i].i+=e.arStack[t][i].back?-1:1;var s=e.arStack[t][i].i/e.arRules[i][3];var n=1-s;var o=e.arRules[i][0];var a=e.arRules[i][1];element.style[e.arRules[i][2]]="rgb("+Math.floor(o["r"]*n+a["r"]*s)+","+Math.floor(o["g"]*n+a["g"]*s)+","+Math.floor(o["b"]*n+a["b"]*s)+")";if(e.arStack[t][i].i==e.arRules[i][3]||e.arStack[t][i].i==0){clearInterval(e.arStack[t][i].tId);if(e.arRules[i][5])BX.fx.colorAnimate(e.arStack[t][i].element,i,true)}};BX.easing=function(t){this.options=t;this.timer=null};BX.easing.prototype.animate=function(){if(!this.options||!this.options.start||!this.options.finish||typeof this.options.start!="object"||typeof this.options.finish!="object")return null;for(var t in this.options.start){if(typeof this.options.finish[t]=="undefined"){delete this.options.start[t]}}this.options.progress=function(t){var i={};for(var e in this.start)i[e]=Math.round(this.start[e]+(this.finish[e]-this.start[e])*t);if(this.step){this.step(i)}};this.animateProgress()};BX.easing.prototype.stop=function(t){if(this.timer){cancelAnimationFrame(this.timer);this.timer=null;if(t){this.options.complete&&this.options.complete()}}};BX.easing.prototype.animateProgress=function(){if(!t.requestAnimationFrame){this.options.progress(1);this.options.complete&&this.options.complete();return}var i=null;var e=this.options.transition||BX.easing.transitions.linear;var s=this.options.duration||1e3;var n=BX.proxy(function(t){if(i===null){i=t}var o=(t-i)/s;if(o>1){o=1}this.options.progress(e(o));if(o==1){this.stop(true)}else{this.timer=requestAnimationFrame(n)}},this);this.timer=requestAnimationFrame(n)};BX.easing.makeEaseInOut=function(t){return function(i){if(i<.5)return t(2*i)/2;else return(2-t(2*(1-i)))/2}};BX.easing.makeEaseOut=function(t){return function(i){return 1-t(1-i)}};BX.easing.transitions={linear:function(t){return t},quad:function(t){return Math.pow(t,2)},cubic:function(t){return Math.pow(t,3)},quart:function(t){return Math.pow(t,4)},quint:function(t){return Math.pow(t,5)},circ:function(t){return 1-Math.sin(Math.acos(t))},back:function(t){return Math.pow(t,2)*((1.5+1)*t-1.5)},elastic:function(t){return Math.pow(2,10*(t-1))*Math.cos(20*Math.PI*1.5/3*t)},bounce:function(t){for(var i=0,e=1;1;i+=e,e/=2){if(t>=(7-4*i)/11){return-Math.pow((11-6*i-11*t)/4,2)+Math.pow(e,2)}}}}})(window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:54:"http://atrspb.com/bitrix/js/main/core/core_popup.min.js?149703842639198";s:6:"source";s:34:"core_popup.js"/*tpa=http://atrspb.com/bitrix/js/main/core/core_popup.js*/;s:3:"min";s:38:"core_popup.min.js"/*tpa=http://atrspb.com/bitrix/js/main/core/core_popup.min.js*/;s:3:"map";s:38:"core_popup.map.js"/*tpa=http://atrspb.com/bitrix/js/main/core/core_popup.map.js*/;}"*/
(function(t){"use strict";if(BX.PopupWindowManager){return}BX.PopupWindowManager={_popups:[],_currentPopup:null,create:function(t,e,i){var n=-1;if((n=this._getPopupIndex(t))!==-1){return this._popups[n]}var o=new BX.PopupWindow(t,e,i);BX.addCustomEvent(o,"onPopupShow",BX.delegate(this.onPopupShow,this));BX.addCustomEvent(o,"onPopupClose",BX.delegate(this.onPopupClose,this));return o},onPopupWindowIsInitialized:function(t,e){BX.addCustomEvent(e,"onPopupDestroy",BX.delegate(this.onPopupDestroy,this));this._popups.push(e)},onPopupShow:function(t){if(this._currentPopup!==null){this._currentPopup.close()}this._currentPopup=t},onPopupClose:function(t){this._currentPopup=null},onPopupDestroy:function(t){var e;if((e=this._getPopupIndex(t.uniquePopupId))!==-1){this._popups=BX.util.deleteFromArray(this._popups,e)}},getCurrentPopup:function(){return this._currentPopup},isPopupExists:function(t){return this._getPopupIndex(t)!==-1},_getPopupIndex:function(t){var e=-1;for(var i=0;i<this._popups.length;i++){if(this._popups[i].uniquePopupId===t){return i}}return e},getMaxZIndex:function(){var t=0,e;for(e=0;e<this._popups.length;e++){t=Math.max(t,this._popups[e].params.zIndex)}return t}};BX.addCustomEvent("onPopupWindowIsInitialized",BX.proxy(BX.PopupWindowManager.onPopupWindowIsInitialized,BX.PopupWindowManager));BX.PopupWindow=function(e,i,n){n=n||{};this.params=n;BX.onCustomEvent("onPopupWindowInit",[e,i,n]);this.uniquePopupId=e;this.params.zIndex=parseInt(n.zIndex);this.params.zIndex=isNaN(n.zIndex)?0:n.zIndex;this.buttons=n.buttons&&BX.type.isArray(n.buttons)?n.buttons:[];this.offsetTop=BX.PopupWindow.getOption("offsetTop");this.offsetLeft=BX.PopupWindow.getOption("offsetLeft");this.firstShow=false;this.bordersWidth=20;this.bindElementPos=null;this.closeIcon=null;this.resizeIcon=null;this.angle=null;this.overlay=null;this.titleBar=null;this.bindOptions=typeof n.bindOptions==="object"?n.bindOptions:{};this.autoHide=n.autoHide===true;this.isAutoHideBinded=false;this.closeByEsc=n.closeByEsc===true;this.isCloseByEscBinded=false;this.width=null;this.height=null;this.minWidth=0;this.minHeight=0;if(n.parentPopup instanceof BX.PopupWindow){this.parentPopup=n.parentPopup;this.appendContainer=n.parentPopup.contentContainer;n.offsetTop=(n.offsetTop?n.offsetTop:0)-(BX.PopupWindow.fullscreenStatus?0:this.parentPopup.popupContainer.offsetTop);n.offsetLeft=(n.offsetLeft?n.offsetLeft:0)-(BX.PopupWindow.fullscreenStatus?0:this.parentPopup.popupContainer.offsetLeft)}else{this.parentPopup=null;this.appendContainer=document.body}this.dragOptions={cursor:"",callback:BX.DoNothing,eventName:""};this.dragged=false;this.dragPageX=0;this.dragPageY=0;if(n.events){for(var o in n.events){BX.addCustomEvent(this,o,n.events[o])}}var s="popup-window";if(n.contentColor&&BX.type.isNotEmptyString(n.contentColor)){s+=" popup-window-content-"+n.contentColor}if(n.contentNoPaddings){s+=" popup-window-content-no-paddings"}if(n.noAllPaddings){s+=" popup-window-no-paddings"}if(n.titleBar){s+=" popup-window-with-titlebar"}if(n.className&&BX.type.isNotEmptyString(n.className)){s+=" "+n.className}if(n.darkMode){s+=" popup-window-dark"}this.popupContainer=document.createElement("div");var p="popup-window-titlebar-"+e;if(n.titleBar){this.titleBar=BX.create("div",{props:{className:"popup-window-titlebar",id:p}})}if(n.closeIcon){this.closeIcon=BX.create("span",{props:{className:"popup-window-close-icon"+(n.titleBar?" popup-window-titlebar-close-icon":"")},style:typeof n.closeIcon==="object"?n.closeIcon:{},events:{click:BX.proxy(this._onCloseIconClick,this)}});if(BX.browser.IsIE()){BX.adjust(this.closeIcon,{attrs:{hidefocus:"true"}})}}this.contentContainer=BX.create("div",{props:{id:"popup-window-content-"+e,className:"popup-window-content"}});BX.adjust(this.popupContainer,{props:{id:e,className:s},style:{zIndex:this.getZindex(),position:"absolute",display:"none",top:"0px",left:"0px"},children:[this.titleBar,this.contentContainer,this.closeIcon]});this.appendContainer.appendChild(this.popupContainer);this.buttonsContainer=null;if(n.angle){this.setAngle(n.angle)}if(n.overlay){this.setOverlay(n.overlay)}this.setOffset(n);this.setBindElement(i);this.setTitleBar(n.titleBar);this.setContent(n.content);this.setButtons(n.buttons);this.setWidth(n.width);this.setHeight(n.height);this.setResizeMode(n.resizable);if(n.bindOnResize!==false){BX.bind(t,"resize",BX.proxy(this._onResizeWindow,this))}BX.onCustomEvent("onPopupWindowIsInitialized",[e,this])};BX.PopupWindow.prototype.setContent=function(t){if(!this.contentContainer||!t){return}if(BX.type.isElementNode(t)){BX.cleanNode(this.contentContainer);this.contentContainer.appendChild(t.parentNode?t.parentNode.removeChild(t):t);t.style.display="block"}else if(BX.type.isString(t)){this.contentContainer.innerHTML=t}else{this.contentContainer.innerHTML="&nbsp;"}};BX.PopupWindow.prototype.setButtons=function(t){this.buttons=t&&BX.type.isArray(t)?t:[];if(this.buttonsContainer){BX.remove(this.buttonsContainer)}if(this.buttons.length>0&&this.contentContainer){var e=[];for(var i=0;i<this.buttons.length;i++){var n=this.buttons[i];if(n===null||!BX.is_subclass_of(n,BX.PopupWindowButton)){continue}n.popupWindow=this;e.push(n.render())}this.buttonsContainer=this.contentContainer.parentNode.appendChild(BX.create("div",{props:{className:"popup-window-buttons"},children:e}))}};BX.PopupWindow.prototype.setBindElement=function(t){if(!t||typeof t!=="object"){return}if(BX.type.isDomNode(t)||BX.type.isNumber(t.top)&&BX.type.isNumber(t.left)){this.bindElement=t}else if(BX.type.isNumber(t.clientX)&&BX.type.isNumber(t.clientY)){BX.fixEventPageXY(t);this.bindElement={left:t.pageX,top:t.pageY,bottom:t.pageY}}};BX.PopupWindow.prototype.getBindElementPos=function(t){if(BX.type.isDomNode(t)){return BX.pos(t,false)}else if(t&&typeof t==="object"){if(!BX.type.isNumber(t.bottom)){t.bottom=t.top}return t}else{var e=BX.GetWindowInnerSize();var i=BX.GetWindowScrollPos();var n=this.popupContainer.offsetWidth;var o=this.popupContainer.offsetHeight;this.bindOptions.forceTop=true;return{left:e.innerWidth/2-n/2+i.scrollLeft,top:e.innerHeight/2-o/2+i.scrollTop,bottom:e.innerHeight/2-o/2+i.scrollTop,windowSize:e,windowScroll:i,popupWidth:n,popupHeight:o}}};BX.PopupWindow.prototype.setAngle=function(t){if(t===false&&this.angle!==null){BX.remove(this.angle.element);this.angle=null;return}var e="popup-window-angly";if(this.angle===null){var i=this.bindOptions.position&&this.bindOptions.position==="top"?"bottom":"top";var n=BX.PopupWindow.getOption(i==="top"?"angleMinTop":"angleMinBottom");var o=BX.type.isNumber(t.offset)?t.offset:0;var s=BX.PopupWindow.getOption("angleLeftOffset",null);if(o>0&&BX.type.isNumber(s)){o+=s-BX.PopupWindow.defaultOptions.angleLeftOffset}this.angle={element:BX.create("div",{props:{className:e+" "+e+"-"+i}}),position:i,offset:0,defaultOffset:Math.max(o,n)};this.popupContainer.appendChild(this.angle.element)}if(typeof t==="object"&&t.position&&BX.util.in_array(t.position,["top","right","bottom","left","hide"])){BX.removeClass(this.angle.element,e+"-"+this.angle.position);BX.addClass(this.angle.element,e+"-"+t.position);this.angle.position=t.position}if(typeof t==="object"&&BX.type.isNumber(t.offset)){var p=t.offset;var u,r;if(this.angle.position==="top"){u=BX.PopupWindow.getOption("angleMinTop");r=this.popupContainer.offsetWidth-BX.PopupWindow.getOption("angleMaxTop");r=r<u?Math.max(u,p):r;this.angle.offset=Math.min(Math.max(u,p),r);this.angle.element.style.left=this.angle.offset+"px";this.angle.element.style.marginLeft=0}else if(this.angle.position==="bottom"){u=BX.PopupWindow.getOption("angleMinBottom");r=this.popupContainer.offsetWidth-BX.PopupWindow.getOption("angleMaxBottom");r=r<u?Math.max(u,p):r;this.angle.offset=Math.min(Math.max(u,p),r);this.angle.element.style.marginLeft=this.angle.offset+"px";this.angle.element.style.left=0}else if(this.angle.position==="right"){u=BX.PopupWindow.getOption("angleMinRight");r=this.popupContainer.offsetHeight-BX.PopupWindow.getOption("angleMaxRight");r=r<u?Math.max(u,p):r;this.angle.offset=Math.min(Math.max(u,p),r);this.angle.element.style.top=this.angle.offset+"px"}else if(this.angle.position==="left"){u=BX.PopupWindow.getOption("angleMinLeft");r=this.popupContainer.offsetHeight-BX.PopupWindow.getOption("angleMaxLeft");r=r<u?Math.max(u,p):r;this.angle.offset=Math.min(Math.max(u,p),r);this.angle.element.style.top=this.angle.offset+"px"}}};BX.PopupWindow.prototype.setWidth=function(t){if(BX.type.isNumber(t)&&t>=0){this.width=t;this.contentContainer.style.width=t+"px";this.contentContainer.style.overflowX="auto";if(this.titleBar){this.titleBar.style.width=t+"px"}}else if(t===false){this.width=null;this.contentContainer.style.removeProperty("width");this.contentContainer.style.removeProperty("overflowX");if(this.titleBar){this.titleBar.style.removeProperty("width")}}};BX.PopupWindow.prototype.setHeight=function(t){if(BX.type.isNumber(t)&&t>=0){this.height=t;this.contentContainer.style.height=t+"px";this.contentContainer.style.overflowY="auto"}else if(t===false){this.height=null;this.contentContainer.style.removeProperty("height");this.contentContainer.style.removeProperty("overflowY")}};BX.PopupWindow.prototype.setResizeMode=function(t){if(t===true||BX.type.isPlainObject(t)){if(!this.resizeIcon){this.resizeIcon=BX.create("div",{props:{className:"popup-window-resize"},events:{mousedown:BX.proxy(this.onResizeMouseDown,this)}});this.popupContainer.appendChild(this.resizeIcon)}if(BX.type.isNumber(t.minWidth)&&t.minWidth>0){this.minWidth=t.minWidth}if(BX.type.isNumber(t.minHeight)&&t.minHeight>0){this.minHeight=t.minHeight}}else if(t===false&&this.resizeIcon){BX.remove(this.resizeIcon);this.resizeIcon=null}};BX.PopupWindow.prototype.getWidth=function(){return this.width};BX.PopupWindow.prototype.getHeight=function(){return this.height};BX.PopupWindow.prototype.onTitleMouseDown=function(t){this._startDrag(t,{cursor:"move",callback:BX.proxy(this.move,this),eventName:"Drag"})};BX.PopupWindow.prototype.onResizeMouseDown=function(t){this._startDrag(t,{cursor:"nwse-resize",eventName:"Resize",callback:BX.proxy(this._resize,this)});this.resizeContentPos=BX.pos(this.contentContainer);this.resizeContentOffset=this.resizeContentPos.left-BX.pos(this.popupContainer).left};BX.PopupWindow.prototype._resize=function(t,e,i,n){var o=i-this.resizeContentPos.left;var s=n-this.resizeContentPos.top;var p=BX.GetWindowScrollSize().scrollWidth;if(this.resizeContentPos.left+o+this.resizeContentOffset>=p){o=p-this.resizeContentPos.left-this.resizeContentOffset}this.setWidth(Math.max(o,this.minWidth));this.setHeight(Math.max(s,this.minHeight))};BX.PopupWindow.prototype.isTopAngle=function(){return this.angle!==null&&this.angle.position==="top"};BX.PopupWindow.prototype.isBottomAngle=function(){return this.angle!==null&&this.angle.position==="bottom"};BX.PopupWindow.prototype.isTopOrBottomAngle=function(){return this.angle!==null&&BX.util.in_array(this.angle.position,["top","bottom"])};BX.PopupWindow.prototype.getAngleHeight=function(){return this.isTopOrBottomAngle()?BX.PopupWindow.getOption("angleTopOffset"):0};BX.PopupWindow.prototype.setOffset=function(t){if(!BX.type.isPlainObject(t)){return}if(t.offsetLeft&&BX.type.isNumber(t.offsetLeft)){this.offsetLeft=t.offsetLeft+BX.PopupWindow.getOption("offsetLeft")}if(t.offsetTop&&BX.type.isNumber(t.offsetTop)){this.offsetTop=t.offsetTop+BX.PopupWindow.getOption("offsetTop")}};BX.PopupWindow.prototype.setTitleBar=function(t){if(!this.titleBar){return}if(typeof t==="object"&&BX.type.isDomNode(t.content)){this.titleBar.innerHTML="";this.titleBar.appendChild(t.content)}else if(typeof t==="string"){this.titleBar.innerHTML="";this.titleBar.appendChild(BX.create("span",{props:{className:"popup-window-titlebar-text"},text:t}))}if(this.params.draggable){this.titleBar.style.cursor="move";BX.bind(this.titleBar,"mousedown",BX.proxy(this.onTitleMouseDown,this))}};BX.PopupWindow.prototype.setClosingByEsc=function(t){t=BX.type.isBoolean(t)?t:true;if(t){this.closeByEsc=true;if(!this.isCloseByEscBinded){BX.bind(document,"keyup",BX.proxy(this._onKeyUp,this));this.isCloseByEscBinded=true}}else{this.closeByEsc=false;if(this.isCloseByEscBinded){BX.unbind(document,"keyup",BX.proxy(this._onKeyUp,this));this.isCloseByEscBinded=false}}};BX.PopupWindow.prototype.setAutoHide=function(t){t=BX.type.isBoolean(t)?t:true;if(t){this.autoHide=true;if(this.isShown()){this.bindAutoHide()}}else{this.autoHide=false;this.unbindAutoHide()}};BX.PopupWindow.prototype.bindAutoHide=function(){if(!this.isAutoHideBinded){this.isAutoHideBinded=true;BX.bind(this.popupContainer,"click",this.cancelBubble);BX.bind(document,"click",BX.proxy(this.close,this))}};BX.PopupWindow.prototype.unbindAutoHide=function(){if(this.isAutoHideBinded){this.isAutoHideBinded=false;BX.unbind(this.popupContainer,"click",this.cancelBubble);BX.unbind(document,"click",BX.proxy(this.close,this))}};BX.PopupWindow.prototype.setOverlay=function(t){if(this.overlay===null){this.overlay={element:BX.create("div",{props:{className:"popup-window-overlay",id:"popup-window-overlay-"+this.uniquePopupId}})};this.adjustOverlayZindex();this.resizeOverlay();this.appendContainer.appendChild(this.overlay.element)}if(t&&t.hasOwnProperty("opacity")&&BX.type.isNumber(t.opacity)&&t.opacity>=0&&t.opacity<=100){if(BX.browser.IsIE()&&!BX.browser.IsIE9()){this.overlay.element.style.filter="alpha(opacity="+t.opacity+")"}else{this.overlay.element.style.filter="none";this.overlay.element.style.opacity=parseFloat(t.opacity/100).toPrecision(3)}}if(t&&t.backgroundColor){this.overlay.element.style.backgroundColor=t.backgroundColor}};BX.PopupWindow.prototype.removeOverlay=function(){if(this.overlay!==null&&this.overlay.element!==null){BX.remove(this.overlay.element)}if(this.overlayTimeout){clearInterval(this.overlayTimeout);this.overlayTimeout=null}this.overlay=null};BX.PopupWindow.prototype.hideOverlay=function(){if(this.overlay!==null&&this.overlay.element!==null){if(this.overlayTimeout){clearInterval(this.overlayTimeout);this.overlayTimeout=null}this.overlay.element.style.display="none"}};BX.PopupWindow.prototype.showOverlay=function(){if(this.overlay!==null&&this.overlay.element!==null){this.overlay.element.style.display="block";var t=this.popupContainer.offsetHeight;this.overlayTimeout=setInterval(function(){if(t!==this.popupContainer.offsetHeight){this.resizeOverlay();t=this.popupContainer.offsetHeight}}.bind(this),1e3)}};BX.PopupWindow.prototype.resizeOverlay=function(){if(this.overlay!==null&&this.overlay.element!==null){if(this.parentPopup){this.overlay.element.style.width=this.parentPopup.popupContainer.offsetWidth+"px";this.overlay.element.style.height=this.parentPopup.popupContainer.offsetHeight+"px"}else{var t=BX.GetWindowScrollSize();var e=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight);this.overlay.element.style.width=t.scrollWidth+"px";this.overlay.element.style.height=e+"px"}}};BX.PopupWindow.prototype.getZindex=function(){if(this.overlay!==null){return BX.PopupWindow.getOption("popupOverlayZindex")+this.params.zIndex}else{return BX.PopupWindow.getOption("popupZindex")+this.params.zIndex}};BX.PopupWindow.prototype.adjustOverlayZindex=function(){if(this.overlay!==null&&this.overlay.element!==null){this.overlay.element.style.zIndex=parseInt(this.popupContainer.style.zIndex)-1}};BX.PopupWindow.prototype.show=function(){if(!this.firstShow){BX.onCustomEvent(this,"onPopupFirstShow",[this]);this.firstShow=true}BX.onCustomEvent(this,"onPopupShow",[this]);this.showOverlay();this.popupContainer.style.display="block";this.adjustPosition();BX.onCustomEvent(this,"onAfterPopupShow",[this]);if(this.closeByEsc&&!this.isCloseByEscBinded){BX.bind(document,"keyup",BX.proxy(this._onKeyUp,this));this.isCloseByEscBinded=true}if(this.autoHide&&!this.isAutoHideBinded){setTimeout(BX.proxy(function(){if(this.isShown()){this.bindAutoHide()}},this),100)}};BX.PopupWindow.prototype.isShown=function(){return this.popupContainer.style.display==="block"};BX.PopupWindow.prototype.cancelBubble=function(e){e=e||t.event;if(e.stopPropagation){e.stopPropagation()}else{e.cancelBubble=true}};BX.PopupWindow.prototype.close=function(t){if(!this.isShown()){return}if(t&&!(BX.getEventButton(t)&BX.MSLEFT)){return true}BX.onCustomEvent(this,"onPopupClose",[this,t]);this.hideOverlay();this.popupContainer.style.display="none";if(this.isCloseByEscBinded){BX.unbind(document,"keyup",BX.proxy(this._onKeyUp,this));this.isCloseByEscBinded=false}setTimeout(BX.proxy(this._close,this),0)};BX.PopupWindow.prototype._close=function(){if(this.autoHide){this.unbindAutoHide()}};BX.PopupWindow.prototype._onCloseIconClick=function(e){e=e||t.event;this.close(e);BX.PreventDefault(e)};BX.PopupWindow.prototype._onKeyUp=function(e){e=e||t.event;if(e.keyCode===27){n(this.getZindex(),BX.proxy(this.close,this))}};BX.PopupWindow.prototype.destroy=function(){BX.onCustomEvent(this,"onPopupDestroy",[this]);BX.unbindAll(this);BX.unbind(document,"keyup",BX.proxy(this._onKeyUp,this));BX.unbind(document,"click",BX.proxy(this.close,this));BX.unbind(document,"mousemove",BX.proxy(this._moveDrag,this));BX.unbind(document,"mouseup",BX.proxy(this._stopDrag,this));BX.unbind(t,"resize",BX.proxy(this._onResizeWindow,this));BX.remove(this.popupContainer);this.removeOverlay()};BX.PopupWindow.prototype.enterFullScreen=function(){if(BX.PopupWindow.fullscreenStatus){if(document.cancelFullScreen){document.cancelFullScreen()}else if(document.mozCancelFullScreen){document.mozCancelFullScreen()}else if(document.webkitCancelFullScreen){document.webkitCancelFullScreen()}}else{if(BX.browser.IsChrome()||BX.browser.IsSafari()){this.contentContainer.webkitRequestFullScreen(this.contentContainer.ALLOW_KEYBOARD_INPUT);BX.bind(t,"webkitfullscreenchange",this.fullscreenBind=BX.proxy(this.eventFullScreen,this))}else if(BX.browser.IsFirefox()){this.contentContainer.mozRequestFullScreen(this.contentContainer.ALLOW_KEYBOARD_INPUT);BX.bind(t,"mozfullscreenchange",this.fullscreenBind=BX.proxy(this.eventFullScreen,this))}}};BX.PopupWindow.prototype.eventFullScreen=function(e){if(BX.PopupWindow.fullscreenStatus){if(BX.browser.IsChrome()||BX.browser.IsSafari()){BX.unbind(t,"webkitfullscreenchange",this.fullscreenBind)}else if(BX.browser.IsFirefox()){BX.unbind(t,"mozfullscreenchange",this.fullscreenBind)}BX.removeClass(this.contentContainer,"popup-window-fullscreen",[this.contentContainer]);BX.PopupWindow.fullscreenStatus=false;BX.onCustomEvent(this,"onPopupFullscreenLeave");this.adjustPosition()}else{BX.addClass(this.contentContainer,"popup-window-fullscreen");BX.PopupWindow.fullscreenStatus=true;BX.onCustomEvent(this,"onPopupFullscreenEnter",[this.contentContainer]);this.adjustPosition()}};BX.PopupWindow.prototype.adjustPosition=function(t){if(t&&typeof t==="object"){this.bindOptions=t}var e=this.getBindElementPos(this.bindElement);if(!this.bindOptions.forceBindPosition&&this.bindElementPos!==null&&e.top===this.bindElementPos.top&&e.left===this.bindElementPos.left){return}this.bindElementPos=e;var i=e.windowSize?e.windowSize:BX.GetWindowInnerSize();var n=e.windowScroll?e.windowScroll:BX.GetWindowScrollPos();var o=e.popupWidth?e.popupWidth:this.popupContainer.offsetWidth;var s=e.popupHeight?e.popupHeight:this.popupContainer.offsetHeight;var p=BX.PopupWindow.getOption("angleTopOffset");var u=this.bindElementPos.left+this.offsetLeft-(this.isTopOrBottomAngle()?BX.PopupWindow.getOption("angleLeftOffset"):0);if(!this.bindOptions.forceLeft&&u+o+this.bordersWidth>=i.innerWidth+n.scrollLeft&&i.innerWidth+n.scrollLeft-o-this.bordersWidth>0){var r=u;u=i.innerWidth+n.scrollLeft-o-this.bordersWidth;if(this.isTopOrBottomAngle()){this.setAngle({offset:r-u+this.angle.defaultOffset})}}else if(this.isTopOrBottomAngle()){this.setAngle({offset:this.angle.defaultOffset+(u<0?u:0)})}if(u<0){u=0}var a=0;if(this.bindOptions.position&&this.bindOptions.position==="top"){a=this.bindElementPos.top-s-this.offsetTop-(this.isBottomAngle()?p:0);if(a<0||!this.bindOptions.forceTop&&a<n.scrollTop){a=this.bindElementPos.bottom+this.offsetTop;if(this.angle!==null){a+=p;this.setAngle({position:"top"})}}else if(this.isTopAngle()){a=a-p+BX.PopupWindow.getOption("positionTopXOffset");this.setAngle({position:"bottom"})}else{a+=BX.PopupWindow.getOption("positionTopXOffset")}}else{a=this.bindElementPos.bottom+this.offsetTop+this.getAngleHeight();if(!this.bindOptions.forceTop&&a+s>i.innerHeight+n.scrollTop&&this.bindElementPos.top-s-this.getAngleHeight()>=0){a=this.bindElementPos.top-s;if(this.isTopOrBottomAngle()){a-=p;this.setAngle({position:"bottom"})}a+=BX.PopupWindow.getOption("positionTopXOffset")}else if(this.isBottomAngle()){a+=p;this.setAngle({position:"top"})}}if(!this.parentPopup&&a<0){a=0}BX.adjust(this.popupContainer,{style:{top:a+"px",left:u+"px",zIndex:this.getZindex()}});this.adjustOverlayZindex()};BX.PopupWindow.prototype._onResizeWindow=function(t){if(this.isShown()){this.adjustPosition();if(this.overlay!==null){this.resizeOverlay()}}};BX.PopupWindow.prototype.move=function(t,e,i,n){var o=parseInt(this.popupContainer.style.left)+t;var s=parseInt(this.popupContainer.style.top)+e;if(typeof this.params.draggable==="object"&&this.params.draggable.restrict){if(!this.parentPopup&&o<0){o=0}var p=BX.GetWindowScrollSize();var u=this.popupContainer.offsetWidth;var r=this.popupContainer.offsetHeight;if(o>p.scrollWidth-u){o=p.scrollWidth-u}if(s>p.scrollHeight-r){s=p.scrollHeight-r}if(!this.parentPopup&&s<0){s=0}}this.popupContainer.style.left=o+"px";this.popupContainer.style.top=s+"px"};BX.PopupWindow.prototype._startDrag=function(e,i){e=e||t.event;BX.fixEventPageXY(e);i=i||{};if(BX.type.isNotEmptyString(i.cursor)){this.dragOptions.cursor=i.cursor}if(BX.type.isNotEmptyString(i.eventName)){this.dragOptions.eventName=i.eventName}if(BX.type.isFunction(i.callback)){this.dragOptions.callback=i.callback}this.dragPageX=e.pageX;this.dragPageY=e.pageY;this.dragged=false;BX.bind(document,"mousemove",BX.proxy(this._moveDrag,this));BX.bind(document,"mouseup",BX.proxy(this._stopDrag,this));if(document.body.setCapture){document.body.setCapture()}document.body.ondrag=BX.False;document.body.onselectstart=BX.False;document.body.style.cursor=this.dragOptions.cursor;document.body.style.MozUserSelect="none";this.popupContainer.style.MozUserSelect="none";return BX.PreventDefault(e)};BX.PopupWindow.prototype._moveDrag=function(e){e=e||t.event;BX.fixEventPageXY(e);if(this.dragPageX===e.pageX&&this.dragPageY===e.pageY){return}this.dragOptions.callback(e.pageX-this.dragPageX,e.pageY-this.dragPageY,e.pageX,e.pageY);this.dragPageX=e.pageX;this.dragPageY=e.pageY;if(!this.dragged){BX.onCustomEvent(this,"onPopup"+this.dragOptions.eventName+"Start",[this]);this.dragged=true}BX.onCustomEvent(this,"onPopup"+this.dragOptions.eventName,[this])};BX.PopupWindow.prototype._stopDrag=function(t){if(document.body.releaseCapture){document.body.releaseCapture()}BX.unbind(document,"mousemove",BX.proxy(this._moveDrag,this));BX.unbind(document,"mouseup",BX.proxy(this._stopDrag,this));document.body.ondrag=null;document.body.onselectstart=null;document.body.style.cursor="";document.body.style.MozUserSelect="";this.popupContainer.style.MozUserSelect="";BX.onCustomEvent(this,"onPopup"+this.dragOptions.eventName+"End",[this]);this.dragged=false;return BX.PreventDefault(t)};BX.PopupWindow.options={};BX.PopupWindow.defaultOptions={angleLeftOffset:40,positionTopXOffset:-11,angleTopOffset:10,popupZindex:1e3,popupOverlayZindex:1100,angleMinLeft:10,angleMaxLeft:10,angleMinRight:10,angleMaxRight:10,angleMinBottom:23,angleMaxBottom:25,angleMinTop:23,angleMaxTop:25,offsetLeft:0,offsetTop:0};BX.PopupWindow.setOptions=function(t){if(!t||typeof t!=="object"){return}for(var e in t){BX.PopupWindow.options[e]=t[e]}};BX.PopupWindow.getOption=function(t,e){if(typeof BX.PopupWindow.options[t]!=="undefined"){return BX.PopupWindow.options[t]}else if(typeof e!=="undefined"){return e}else{return BX.PopupWindow.defaultOptions[t]}};BX.PopupWindowButton=function(t){this.popupWindow=null;this.params=t||{};this.text=this.params.text||"";this.id=this.params.id||"";this.className=this.params.className||"";this.events=this.params.events||{};this.contextEvents={};for(var e in this.events){this.contextEvents[e]=BX.proxy(this.events[e],this)}this.buttonNode=BX.create("span",{props:{className:"popup-window-button"+(this.className.length>0?" "+this.className:""),id:this.id},events:this.contextEvents,text:this.text})};BX.PopupWindowButton.prototype.render=function(){return this.buttonNode};BX.PopupWindowButton.prototype.setName=function(t){this.text=t||"";if(this.buttonNode){BX.cleanNode(this.buttonNode);BX.adjust(this.buttonNode,{text:this.text})}};BX.PopupWindowButton.prototype.setClassName=function(t){if(this.buttonNode){if(BX.type.isString(this.className)&&this.className!==""){BX.removeClass(this.buttonNode,this.className)}BX.addClass(this.buttonNode,t)}this.className=t};BX.PopupWindowButtonLink=function(t){BX.PopupWindowButtonLink.superclass.constructor.apply(this,arguments);this.buttonNode=BX.create("span",{props:{className:"popup-window-button popup-window-button-link"+(this.className.length>0?" "+this.className:""),id:this.id},text:this.text,events:this.contextEvents})};BX.extend(BX.PopupWindowButtonLink,BX.PopupWindowButton);BX.PopupMenu={Data:{},currentItem:null,show:function(t,e,i,n){if(this.currentItem!==null){this.currentItem.popupWindow.close()}this.currentItem=this.create(t,e,i,n);this.currentItem.popupWindow.show()},create:function(t,e,i,n){if(!this.Data[t]){this.Data[t]=new BX.PopupMenuWindow(t,e,i,n)}return this.Data[t]},getCurrentMenu:function(){return this.currentItem},getMenuById:function(t){return this.Data[t]?this.Data[t]:null},destroy:function(t){var e=this.getMenuById(t);if(e){if(this.currentItem===e){this.currentItem=null}e.popupWindow.destroy();delete this.Data[t]}}};BX.PopupMenuWindow=function(t,e,i,n){this.id=t;this.bindElement=e;this.menuItems=[];this.itemsContainer=null;this.params=n&&typeof n==="object"?n:{};this.parentMenuWindow=null;this.parentMenuItem=null;if(i&&BX.type.isArray(i)){for(var o=0;o<i.length;o++){this.addMenuItemInternal(i[o],null)}}this.layout={menuContainer:null,itemsContainer:null};this.popupWindow=this.__createPopup()};BX.PopupMenuWindow.prototype.__createPopup=function(){var t=[];for(var e=0;e<this.menuItems.length;e++){var i=this.menuItems[e];var n=i.getLayout();t.push(n.item)}var o=new BX.PopupWindow("menu-popup-"+this.id,this.bindElement,{closeByEsc:typeof this.params.closeByEsc!=="undefined"?this.params.closeByEsc:false,bindOptions:typeof this.params.bindOptions==="object"?this.params.bindOptions:{},angle:typeof this.params.angle!=="undefined"?this.params.angle:false,zIndex:this.params.zIndex?this.params.zIndex:0,overlay:typeof this.params.overlay==="object"?this.params.overlay:null,autoHide:typeof this.params.autoHide!=="undefined"?this.params.autoHide:true,offsetTop:this.params.offsetTop?this.params.offsetTop:1,offsetLeft:this.params.offsetLeft?this.params.offsetLeft:0,className:BX.type.isNotEmptyString(this.params.className)?this.params.className:"",noAllPaddings:true,content:this.layout.menuContainer=BX.create("div",{props:{className:"menu-popup"},children:[this.layout.itemsContainer=this.itemsContainer=BX.create("div",{props:{className:"menu-popup-items"},children:t})]}),events:{onPopupClose:this.onMenuWindowClose.bind(this),onPopupDestroy:this.onMenuWindowDestroy.bind(this)}});if(this.params&&this.params.events){for(var s in this.params.events){if(this.params.events.hasOwnProperty(s)){BX.addCustomEvent(o,s,this.params.events[s])}}}return o};BX.PopupMenuWindow.prototype.getPopupWindow=function(){return this.popupWindow};BX.PopupMenuWindow.prototype.show=function(){this.popupWindow.show()};BX.PopupMenuWindow.prototype.close=function(){this.popupWindow.close()};BX.PopupMenuWindow.prototype.destroy=function(){this.popupWindow.destroy()};BX.PopupMenuWindow.prototype.onMenuWindowClose=function(){for(var t=0;t<this.menuItems.length;t++){var e=this.menuItems[t];e.closeSubMenu()}};BX.PopupMenuWindow.prototype.onMenuWindowDestroy=function(){for(var t=0;t<this.menuItems.length;t++){var e=this.menuItems[t];e.destroySubMenu()}};BX.PopupMenuWindow.prototype.setParentMenuWindow=function(t){if(t instanceof BX.PopupMenuWindow){this.parentMenuWindow=t}};BX.PopupMenuWindow.prototype.getParentMenuWindow=function(){return this.parentMenuWindow};BX.PopupMenuWindow.prototype.setParentMenuItem=function(t){if(t instanceof BX.PopupMenuItem){this.parentMenuItem=t}};BX.PopupMenuWindow.prototype.getParentMenuItem=function(){return this.parentMenuItem};BX.PopupMenuWindow.prototype.addMenuItem=function(t,e){var i=this.addMenuItemInternal(t,e);if(!i){return null}var n=i.getLayout();var o=this.getMenuItem(e);if(o!==null){var s=o.getLayout();this.itemsContainer.insertBefore(n.item,s.item)}else{this.itemsContainer.appendChild(n.item)}return i};BX.PopupMenuWindow.prototype.addMenuItemInternal=function(t,e){if(!t||!t.delimiter&&!BX.type.isNotEmptyString(t.text)||t.id&&this.getMenuItem(t.id)!==null){return null}if(BX.type.isNumber(this.params.menuShowDelay)){t.menuShowDelay=this.params.menuShowDelay}var i=new BX.PopupMenuItem(t);i.setMenuWindow(this);var n=this.getMenuItemPosition(e);if(n>=0){this.menuItems=BX.util.insertIntoArray(this.menuItems,n,i)}else{this.menuItems.push(i)}return i};BX.PopupMenuWindow.prototype.removeMenuItem=function(t){var e=this.getMenuItem(t);if(!e){return}for(var i=0;i<this.menuItems.length;i++){if(this.menuItems[i]===e){e.destroySubMenu();this.menuItems=BX.util.deleteFromArray(this.menuItems,i);break}}if(!this.menuItems.length){var n=e.getMenuWindow();if(n){var o=n.getParentMenuItem();if(o){o.destroySubMenu()}else{n.destroy()}}}e.layout.item.parentNode.removeChild(e.layout.item);e.layout={item:null,text:null}};BX.PopupMenuWindow.prototype.getMenuItem=function(t){for(var e=0;e<this.menuItems.length;e++){if(this.menuItems[e].id&&this.menuItems[e].id===t){return this.menuItems[e]}}return null};BX.PopupMenuWindow.prototype.getMenuItems=function(){return this.menuItems};BX.PopupMenuWindow.prototype.getMenuItemPosition=function(t){if(t){for(var e=0;e<this.menuItems.length;e++){if(this.menuItems[e].id&&this.menuItems[e].id===t){return e}}}return-1};BX.PopupMenuItem=function(t){t=t||{};this.options=t;this.id=t.id||BX.util.getRandomString().toLowerCase();this.text=BX.type.isNotEmptyString(t.text)?t.text:"";this.title=BX.type.isNotEmptyString(t.title)?t.title:"";this.delimiter=t.delimiter===true;this.href=BX.type.isNotEmptyString(t.href)?t.href:null;this.target=BX.type.isNotEmptyString(t.target)?t.target:null;this.className=BX.type.isNotEmptyString(t.className)?t.className:null;this.menuShowDelay=BX.type.isNumber(t.menuShowDelay)?t.menuShowDelay:300;this.subMenuOffsetX=BX.type.isNumber(t.subMenuOffsetX)?t.subMenuOffsetX:4;this._items=BX.type.isArray(t.items)?t.items:[];this.onclick=BX.type.isNotEmptyString(t.onclick)||BX.type.isFunction(t.onclick)?t.onclick:null;if(BX.type.isPlainObject(t.events)){for(var e in t.events){BX.addCustomEvent(this,e,t.events[e])}}this.menuWindow=null;this.subMenuWindow=null;this.layout={item:null,text:null};this.getLayout();this.events={};this.items=[];for(var i in t){if(t.hasOwnProperty(i)&&typeof this[i]==="undefined"){this[i]=t[i]}}};BX.PopupMenuItem.prototype={getLayout:function(){if(this.layout.item){return this.layout}if(this.delimiter){this.layout.item=BX.create("span",{props:{className:"popup-window-delimiter"}})}else{this.layout.item=BX.create(this.href?"a":"span",{props:{className:["menu-popup-item",this.className?this.className:"menu-popup-no-icon",this.hasSubMenu()?"menu-popup-item-submenu":""].join(" ")},attrs:{title:this.title,onclick:BX.type.isString(this.onclick)?this.onclick:"",target:this.target?this.target:""},events:BX.type.isFunction(this.onclick)?{click:BX.delegate(this.onItemClick,this)}:null,children:[BX.create("span",{props:{className:"menu-popup-item-icon"
}}),this.layout.text=BX.create("span",{props:{className:"menu-popup-item-text"},html:this.text})]});if(this.href){this.layout.item.href=this.href}BX.bind(this.layout.item,"mouseenter",this.onItemMouseEnter.bind(this));BX.bind(this.layout.item,"mouseleave",this.onItemMouseLeave.bind(this))}return this.layout},onItemClick:function(t){this.onclick.call(this.menuWindow,t,this)},onItemMouseEnter:function(t){BX.onCustomEvent(this,"onMouseEnter");if(this.subMenuTimeout){clearTimeout(this.subMenuTimeout)}if(this.hasSubMenu()){this.subMenuTimeout=setTimeout(function(){this.showSubMenu()}.bind(this),this.menuShowDelay)}else{this.subMenuTimeout=setTimeout(function(){this.closeSiblings()}.bind(this),this.menuShowDelay)}},onItemMouseLeave:function(t){BX.onCustomEvent(this,"onMouseLeave");if(this.subMenuTimeout){clearTimeout(this.subMenuTimeout)}},hasSubMenu:function(){return this.subMenuWindow!==null||this._items.length},showSubMenu:function(){this.addSubMenu(this._items);if(this.subMenuWindow){BX.addClass(this.layout.item,"menu-popup-item-open");this.closeSiblings();this.closeChildren();var t=this.subMenuWindow.getPopupWindow();if(!t.isShown()){BX.onCustomEvent(this,"onSubMenuShow");t.show()}this.adjustSubMenu()}},addSubMenu:function(t){if(this.subMenuWindow!==null||!BX.type.isArray(t)||!t.length){return}this.subMenuWindow=new BX.PopupMenuWindow("popup-submenu-"+this.id,null,t,{autoHide:false,menuShowDelay:this.menuShowDelay,bindOptions:{forceTop:true,forceLeft:true,forceBindPosition:true}});this.subMenuWindow.setParentMenuWindow(this.menuWindow);this.subMenuWindow.setParentMenuItem(this);BX.addClass(this.layout.item,"menu-popup-item-submenu")},closeSubMenu:function(){if(this.subMenuWindow){BX.removeClass(this.layout.item,"menu-popup-item-open");this.closeChildren();var t=this.subMenuWindow.getPopupWindow();if(t.isShown()){BX.onCustomEvent(this,"onSubMenuClose");t.close()}this.subMenuWindow.close()}},closeSiblings:function(){var t=this.menuWindow.getMenuItems();for(var e=0;e<t.length;e++){if(t[e]!==this){t[e].closeSubMenu()}}},closeChildren:function(){if(this.subMenuWindow){var t=this.subMenuWindow.getMenuItems();for(var e=0;e<t.length;e++){t[e].closeSubMenu()}}},destroySubMenu:function(){if(this.subMenuWindow){BX.removeClass(this.layout.item,"menu-popup-item-open menu-popup-item-submenu");this.destroyChildren();this.subMenuWindow.destroy();this.subMenuWindow=null;this._items=[]}},destroyChildren:function(){if(this.subMenuWindow){var t=this.subMenuWindow.getMenuItems();for(var e=0;e<t.length;e++){t[e].destroySubMenu()}}},adjustSubMenu:function(){if(!this.subMenuWindow||!this.layout.item){return}var t=this.subMenuWindow.getPopupWindow();var e=BX.pos(this.layout.item);var i=e.width+this.subMenuOffsetX;var n="left";var o=t.popupContainer.offsetWidth;var s=document.documentElement.clientWidth;if(e.left+i+o>s){var p=e.left-o-this.subMenuOffsetX;if(p>0){i=-o-this.subMenuOffsetX;n="right"}}t.setBindElement(this.layout.item);t.setOffset({offsetLeft:i,offsetTop:-(e.height+this.getPopupPadding())});t.setAngle({position:n,offset:e.height/2-this.getPopupPadding()});t.adjustPosition()},getPopupPadding:function(){if(!BX.type.isNumber(this.popupPadding)){if(this.subMenuWindow){var t=this.subMenuWindow.layout.menuContainer;this.popupPadding=parseInt(BX.style(t,"paddingTop"),10)}else{this.popupPadding=0}}return this.popupPadding},getSubMenu:function(){return this.subMenuWindow},getId:function(){return this.id},setMenuWindow:function(t){this.menuWindow=t},getMenuWindow:function(){return this.menuWindow},getMenuShowDelay:function(){return this.menuShowDelay}};t.BXInputPopup=function(t){this.id=t.id||"bx-inp-popup-"+Math.round(Math.random()*1e6);this.handler=t.handler||false;this.values=t.values||false;this.pInput=t.input;this.bValues=!!this.values;this.defaultValue=t.defaultValue||"";this.openTitle=t.openTitle||"";this.className=t.className||"";this.noMRclassName=t.noMRclassName||"ec-no-rm";this.emptyClassName=t.noMRclassName||"ec-label";var e=this;this.curInd=false;if(this.bValues){this.pInput.onfocus=this.pInput.onclick=function(t){if(this.value==e.defaultValue){this.value="";this.className=e.className}e.ShowPopup();return BX.PreventDefault(t)};this.pInput.onblur=function(){if(e.bShowed)setTimeout(function(){e.ClosePopup(true)},200);e.OnChange()}}else{this.pInput.className=this.noMRclassName;this.pInput.onblur=BX.proxy(this.OnChange,this)}};BXInputPopup.prototype={ShowPopup:function(){if(this.bShowed)return;var t=this;if(!this.oPopup){var e,i=BX.create("DIV",{props:{className:"bxecpl-loc-popup "+this.className}});for(var n=0,o=this.values.length;n<o;n++){e=i.appendChild(BX.create("DIV",{props:{id:"bxecmr_"+n},text:this.values[n].NAME,events:{mouseover:function(){BX.addClass(this,"bxecplloc-over")},mouseout:function(){BX.removeClass(this,"bxecplloc-over")},click:function(){var e=this.id.substr("bxecmr_".length);t.pInput.value=t.values[e].NAME;t.curInd=e;t.OnChange();t.ClosePopup(true)}}}));if(this.values[n].DESCRIPTION)e.title=this.values[n].DESCRIPTION;if(this.values[n].CLASS_NAME)BX.addClass(e,this.values[n].CLASS_NAME);if(this.values[n].URL)e.appendChild(BX.create("A",{props:{href:this.values[n].URL,className:"bxecplloc-view",target:"_blank",title:this.openTitle}}))}this.oPopup=new BX.PopupWindow(this.id,this.pInput,{autoHide:true,offsetTop:1,offsetLeft:0,lightShadow:true,closeByEsc:true,content:i});BX.addCustomEvent(this.oPopup,"onPopupClose",BX.proxy(this.ClosePopup,this))}this.oPopup.show();this.pInput.select();this.bShowed=true;BX.onCustomEvent(this,"onInputPopupShow",[this])},ClosePopup:function(t){this.bShowed=false;if(this.pInput.value=="")this.OnChange();BX.onCustomEvent(this,"onInputPopupClose",[this]);if(t===true)this.oPopup.close()},OnChange:function(){var t=this.pInput.value;if(this.bValues){if(this.pInput.value==""||this.pInput.value==this.defaultValue){this.pInput.value=this.defaultValue;this.pInput.className=this.emptyClassName;t=""}else{this.pInput.className=""}}if(isNaN(parseInt(this.curInd))||this.curInd!==false&&t!=this.values[this.curInd].NAME)this.curInd=false;else this.curInd=parseInt(this.curInd);BX.onCustomEvent(this,"onInputPopupChanged",[this,this.curInd,t]);if(this.handler&&typeof this.handler=="function")this.handler({ind:this.curInd,value:t})},Set:function(t,e,i){this.curInd=t;if(this.curInd!==false)this.pInput.value=this.values[this.curInd].NAME;else this.pInput.value=e;if(i!==false)this.OnChange()},Get:function(t){var e=false;if(typeof t=="undefined")t=this.curInd;if(t!==false&&this.values[t])e=this.values[t].ID;return e},GetIndex:function(t){for(var e=0,i=this.values.length;e<i;e++)if(this.values[e].ID==t)return e;return false},Deactivate:function(t){if(this.pInput.value==""||this.pInput.value==this.defaultValue){if(t){this.pInput.value="";this.pInput.className=this.noMRclassName}else if(this.oEC.bUseMR){this.pInput.value=this.defaultValue;this.pInput.className=this.emptyClassName}}this.pInput.disabled=t}};var e=-1,i=null;function n(t,o){if(t===false){if(i&&i.length>0){for(var s=0;s<i.length;s++){i[s]()}i=null;e=-1}}else{if(i===null){i=[];e=-1;BX.defer(n)(false)}if(t>e){e=t;i=[o]}else if(t==e){i.push(o)}}}})(window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:53:"http://atrspb.com/bitrix/js/main/core/core_date.min.js?149703842634241";s:6:"source";s:33:"core_date.js"/*tpa=http://atrspb.com/bitrix/js/main/core/core_date.js*/;s:3:"min";s:37:"core_date.min.js"/*tpa=http://atrspb.com/bitrix/js/main/core/core_date.min.js*/;s:3:"map";s:37:"core_date.map.js"/*tpa=http://atrspb.com/bitrix/js/main/core/core_date.map.js*/;}"*/
(function(){if(BX.date)return;BX.date={};BX.date.format=function(e,t,a,i){var s=BX.type.isDate(t)?new Date(t.getTime()):BX.type.isNumber(t)?new Date(t*1e3):new Date;var r=BX.type.isDate(a)?new Date(a.getTime()):BX.type.isNumber(a)?new Date(a*1e3):new Date;var n=!!i;if(BX.type.isArray(e))return c(e,s,r,n);else if(!BX.type.isNotEmptyString(e))return"";var o=/\\?(sago|iago|isago|Hago|dago|mago|Yago|sdiff|idiff|Hdiff|ddiff|mdiff|Ydiff|yesterday|today|tommorow|[a-z])/gi;var l={d:function(){return BX.util.str_pad_left(p(s).toString(),2,"0")},D:function(){return BX.message("DOW_"+v(s))},j:function(){return p(s)},l:function(){return BX.message("DAY_OF_WEEK_"+v(s))},N:function(){return v(s)||7},S:function(){if(p(s)%10==1&&p(s)!=11)return"st";else if(p(s)%10==2&&p(s)!=12)return"nd";else if(p(s)%10==3&&p(s)!=13)return"rd";else return"th"},w:function(){return v(s)},z:function(){var e=new Date(d(s),0,1);var t=new Date(d(s),h(s),p(s));return Math.ceil((t-e)/(24*3600*1e3))},W:function(){var e=new Date(s.getTime());var t=(v(s)+6)%7;B(e,p(e)-t+3);var a=e.getTime();M(e,0,1);if(v(e)!=4)M(e,0,1+(4-v(e)+7)%7);var i=1+Math.ceil((a-e)/(7*24*3600*1e3));return BX.util.str_pad_left(i.toString(),2,"0")},F:function(){return BX.message("MONTH_"+(h(s)+1)+"_S")},f:function(){return BX.message("MONTH_"+(h(s)+1))},m:function(){return BX.util.str_pad_left((h(s)+1).toString(),2,"0")},M:function(){return BX.message("MON_"+(h(s)+1))},n:function(){return h(s)+1},t:function(){var e=n?new Date(Date.UTC(d(s),h(s)+1,0)):new Date(d(s),h(s)+1,0);return p(e)},L:function(){var e=d(s);return e%4==0&&e%100!=0||e%400==0?1:0},o:function(){var e=new Date(s.getTime());B(e,p(e)-(v(s)+6)%7+3);return d(e)},Y:function(){return d(s)},y:function(){return d(s).toString().slice(2)},a:function(){return f(s)>11?"pm":"am"},A:function(){return f(s)>11?"PM":"AM"},B:function(){var e=(s.getUTCHours()+1)%24+s.getUTCMinutes()/60+s.getUTCSeconds()/3600;return BX.util.str_pad_left(Math.floor(e*1e3/24).toString(),3,"0")},g:function(){return f(s)%12||12},G:function(){return f(s)},h:function(){return BX.util.str_pad_left((f(s)%12||12).toString(),2,"0")},H:function(){return BX.util.str_pad_left(f(s).toString(),2,"0")},i:function(){return BX.util.str_pad_left(m(s).toString(),2,"0")},s:function(){return BX.util.str_pad_left(D(s).toString(),2,"0")},u:function(){return BX.util.str_pad_left((T(s)*1e3).toString(),6,"0")},e:function(){if(n)return"UTC";return""},I:function(){if(n)return 0;var e=new Date(d(s),0,1);var t=Date.UTC(d(s),0,1);var a=new Date(d(s),6,0);var i=Date.UTC(d(s),6,0);return 0+(e-t!==a-i)},O:function(){if(n)return"+0000";var e=s.getTimezoneOffset();var t=Math.abs(e);return(e>0?"-":"+")+BX.util.str_pad_left((Math.floor(t/60)*100+t%60).toString(),4,"0")},P:function(){if(n)return"+00:00";var e=this.O();return e.substr(0,3)+":"+e.substr(3)},Z:function(){if(n)return 0;return-s.getTimezoneOffset()*60},c:function(){return"Y-m-d\\TH:i:sP".replace(o,C)},r:function(){return"D, d M Y H:i:s O".replace(o,C)},U:function(){return Math.floor(s.getTime()/1e3)},sago:function(){return X(O((r-s)/1e3),{0:"FD_SECOND_AGO_0",1:"FD_SECOND_AGO_1","10_20":"FD_SECOND_AGO_10_20",MOD_1:"FD_SECOND_AGO_MOD_1",MOD_2_4:"FD_SECOND_AGO_MOD_2_4",MOD_OTHER:"FD_SECOND_AGO_MOD_OTHER"})},sdiff:function(){return X(O((r-s)/1e3),{0:"FD_SECOND_DIFF_0",1:"FD_SECOND_DIFF_1","10_20":"FD_SECOND_DIFF_10_20",MOD_1:"FD_SECOND_DIFF_MOD_1",MOD_2_4:"FD_SECOND_DIFF_MOD_2_4",MOD_OTHER:"FD_SECOND_DIFF_MOD_OTHER"})},iago:function(){return X(O((r-s)/60/1e3),{0:"FD_MINUTE_AGO_0",1:"FD_MINUTE_AGO_1","10_20":"FD_MINUTE_AGO_10_20",MOD_1:"FD_MINUTE_AGO_MOD_1",MOD_2_4:"FD_MINUTE_AGO_MOD_2_4",MOD_OTHER:"FD_MINUTE_AGO_MOD_OTHER"})},idiff:function(){return X(O((r-s)/60/1e3),{0:"FD_MINUTE_DIFF_0",1:"FD_MINUTE_DIFF_1","10_20":"FD_MINUTE_DIFF_10_20",MOD_1:"FD_MINUTE_DIFF_MOD_1",MOD_2_4:"FD_MINUTE_DIFF_MOD_2_4",MOD_OTHER:"FD_MINUTE_DIFF_MOD_OTHER"})},isago:function(){var e=O((r-s)/60/1e3);var t=X(e,{0:"FD_MINUTE_0",1:"FD_MINUTE_1","10_20":"FD_MINUTE_10_20",MOD_1:"FD_MINUTE_MOD_1",MOD_2_4:"FD_MINUTE_MOD_2_4",MOD_OTHER:"FD_MINUTE_MOD_OTHER"});t+=" ";var a=O((r-s)/1e3)-e*60;t+=X(a,{0:"FD_SECOND_AGO_0",1:"FD_SECOND_AGO_1","10_20":"FD_SECOND_AGO_10_20",MOD_1:"FD_SECOND_AGO_MOD_1",MOD_2_4:"FD_SECOND_AGO_MOD_2_4",MOD_OTHER:"FD_SECOND_AGO_MOD_OTHER"});return t},Hago:function(){return X(O((r-s)/60/60/1e3),{0:"FD_HOUR_AGO_0",1:"FD_HOUR_AGO_1","10_20":"FD_HOUR_AGO_10_20",MOD_1:"FD_HOUR_AGO_MOD_1",MOD_2_4:"FD_HOUR_AGO_MOD_2_4",MOD_OTHER:"FD_HOUR_AGO_MOD_OTHER"})},Hdiff:function(){return X(O((r-s)/60/60/1e3),{0:"FD_HOUR_DIFF_0",1:"FD_HOUR_DIFF_1","10_20":"FD_HOUR_DIFF_10_20",MOD_1:"FD_HOUR_DIFF_MOD_1",MOD_2_4:"FD_HOUR_DIFF_MOD_2_4",MOD_OTHER:"FD_HOUR_DIFF_MOD_OTHER"})},yesterday:function(){return BX.message("FD_YESTERDAY")},today:function(){return BX.message("FD_TODAY")},tommorow:function(){return BX.message("FD_TOMORROW")},dago:function(){return X(O((r-s)/60/60/24/1e3),{0:"FD_DAY_AGO_0",1:"FD_DAY_AGO_1","10_20":"FD_DAY_AGO_10_20",MOD_1:"FD_DAY_AGO_MOD_1",MOD_2_4:"FD_DAY_AGO_MOD_2_4",MOD_OTHER:"FD_DAY_AGO_MOD_OTHER"})},ddiff:function(){return X(O((r-s)/60/60/24/1e3),{0:"FD_DAY_DIFF_0",1:"FD_DAY_DIFF_1","10_20":"FD_DAY_DIFF_10_20",MOD_1:"FD_DAY_DIFF_MOD_1",MOD_2_4:"FD_DAY_DIFF_MOD_2_4",MOD_OTHER:"FD_DAY_DIFF_MOD_OTHER"})},mago:function(){return X(O((r-s)/60/60/24/31/1e3),{0:"FD_MONTH_AGO_0",1:"FD_MONTH_AGO_1","10_20":"FD_MONTH_AGO_10_20",MOD_1:"FD_MONTH_AGO_MOD_1",MOD_2_4:"FD_MONTH_AGO_MOD_2_4",MOD_OTHER:"FD_MONTH_AGO_MOD_OTHER"})},mdiff:function(){return X(O((r-s)/60/60/24/31/1e3),{0:"FD_MONTH_DIFF_0",1:"FD_MONTH_DIFF_1","10_20":"FD_MONTH_DIFF_10_20",MOD_1:"FD_MONTH_DIFF_MOD_1",MOD_2_4:"FD_MONTH_DIFF_MOD_2_4",MOD_OTHER:"FD_MONTH_DIFF_MOD_OTHER"})},Yago:function(){return X(O((r-s)/60/60/24/365/1e3),{0:"FD_YEARS_AGO_0",1:"FD_YEARS_AGO_1","10_20":"FD_YEARS_AGO_10_20",MOD_1:"FD_YEARS_AGO_MOD_1",MOD_2_4:"FD_YEARS_AGO_MOD_2_4",MOD_OTHER:"FD_YEARS_AGO_MOD_OTHER"})},Ydiff:function(){return X(O((r-s)/60/60/24/365/1e3),{0:"FD_YEARS_DIFF_0",1:"FD_YEARS_DIFF_1","10_20":"FD_YEARS_DIFF_10_20",MOD_1:"FD_YEARS_DIFF_MOD_1",MOD_2_4:"FD_YEARS_DIFF_MOD_2_4",MOD_OTHER:"FD_YEARS_DIFF_MOD_OTHER"})},x:function(){return BX.date.format([["tommorow","tommorow, H:i"],["-",BX.date.convertBitrixFormat(BX.message("FORMAT_DATETIME")).replace(/:s$/g,"")],["s","sago"],["i","iago"],["today","today, H:i"],["yesterday","yesterday, H:i"],["",BX.date.convertBitrixFormat(BX.message("FORMAT_DATETIME")).replace(/:s$/g,"")]],s,r,n)},X:function(){var e=BX.date.format([["tommorow","tommorow"],["-",BX.date.convertBitrixFormat(BX.message("FORMAT_DATE"))],["today","today"],["yesterday","yesterday"],["",BX.date.convertBitrixFormat(BX.message("FORMAT_DATE"))]],s,r,n);var t=BX.date.format([["tommorow","H:i"],["today","H:i"],["yesterday","H:i"],["",""]],s,r,n);if(t.length>0)return BX.message("FD_DAY_AT_TIME").replace(/#DAY#/g,e).replace(/#TIME#/g,t);else return e},Q:function(){var e=O((r-s)/60/60/24/1e3);if(e==0)return BX.message("FD_DAY_DIFF_1").replace(/#VALUE#/g,1);else return BX.date.format([["d","ddiff"],["m","mdiff"],["","Ydiff"]],s,r)}};var u=false;if(e[0]&&e[0]=="^"){u=true;e=e.substr(1)}var _=e.replace(o,C);if(u){_=_.replace(/\s*00:00:00\s*/g,"").replace(/(\d\d:\d\d)(:00)/g,"$1").replace(/(\s*00:00\s*)(?!:)/g,"")}return _;function c(e,t,a,i){var s=O((a-t)/1e3);for(var r=0;r<e.length;r++){var n=e[r][0];var o=e[r][1];var l=null;if(n=="s"){if(s<60)return BX.date.format(o,t,a,i)}else if((l=/^s(\d+)/.exec(n))!=null){if(s<l[1])return BX.date.format(o,t,a,i)}else if(n=="i"){if(s<60*60)return BX.date.format(o,t,a,i)}else if((l=/^i(\d+)/.exec(n))!=null){if(s<l[1]*60)return BX.date.format(o,t,a,i)}else if(n=="H"){if(s<24*60*60)return BX.date.format(o,t,a,i)}else if((l=/^H(\d+)/.exec(n))!=null){if(s<l[1]*60*60)return BX.date.format(o,t,a,i)}else if(n=="d"){if(s<31*24*60*60)return BX.date.format(o,t,a,i)}else if((l=/^d(\d+)/.exec(n))!=null){if(s<l[1]*60*60)return BX.date.format(o,t,a,i)}else if(n=="m"){if(s<365*24*60*60)return BX.date.format(o,t,a,i)}else if((l=/^m(\d+)/.exec(n))!=null){if(s<l[1]*31*24*60*60)return BX.date.format(o,t,a,i)}else if(n=="today"){var u=d(a),_=h(a),c=p(a);var f=i?new Date(Date.UTC(u,_,c,0,0,0,0)):new Date(u,_,c,0,0,0,0);var m=i?new Date(Date.UTC(u,_,c+1,0,0,0,0)):new Date(u,_,c+1,0,0,0,0);if(t>=f&&t<m)return BX.date.format(o,t,a,i)}else if(n=="yesterday"){u=d(a);_=h(a);c=p(a);var D=i?new Date(Date.UTC(u,_,c-1,0,0,0,0)):new Date(u,_,c-1,0,0,0,0);var T=i?new Date(Date.UTC(u,_,c,0,0,0,0)):new Date(u,_,c,0,0,0,0);if(t>=D&&t<T)return BX.date.format(o,t,a,i)}else if(n=="tommorow"){u=d(a);_=h(a);c=p(a);var v=i?new Date(Date.UTC(u,_,c+1,0,0,0,0)):new Date(u,_,c+1,0,0,0,0);var B=i?new Date(Date.UTC(u,_,c+2,0,0,0,0)):new Date(u,_,c+2,0,0,0,0);if(t>=v&&t<B)return BX.date.format(o,t,a,i)}else if(n=="-"){if(s<0)return BX.date.format(o,t,a,i)}}return e.length>0?BX.date.format(e.pop()[1],t,a,i):""}function d(e){return n?e.getUTCFullYear():e.getFullYear()}function p(e){return n?e.getUTCDate():e.getDate()}function h(e){return n?e.getUTCMonth():e.getMonth()}function f(e){return n?e.getUTCHours():e.getHours()}function m(e){return n?e.getUTCMinutes():e.getMinutes()}function D(e){return n?e.getUTCSeconds():e.getSeconds()}function T(e){return n?e.getUTCMilliseconds():e.getMilliseconds()}function v(e){return n?e.getUTCDay():e.getDay()}function B(e,t){return n?e.setUTCDate(t):e.setDate(t)}function M(e,t,a){return n?e.setUTCMonth(t,a):e.setMonth(t,a)}function X(e,t){var a=e<100?Math.abs(e):Math.abs(e%100);var i=a%10;var s="";if(a==0)s=BX.message(t["0"]);else if(a==1)s=BX.message(t["1"]);else if(a>=10&&a<=20)s=BX.message(t["10_20"]);else if(i==1)s=BX.message(t["MOD_1"]);else if(2<=i&&i<=4)s=BX.message(t["MOD_2_4"]);else s=BX.message(t["MOD_OTHER"]);return s.replace(/#VALUE#/g,e)}function C(e,t){if(l[e])return l[e]();else return t}function O(e){return e>=0?Math.floor(e):Math.ceil(e)}};BX.date.convertBitrixFormat=function(e){if(!BX.type.isNotEmptyString(e))return"";return e.replace("YYYY","Y").replace("MMMM","F").replace("MM","m").replace("M","M").replace("DD","d").replace("G","g").replace(/GG/i,"G").replace("H","h").replace(/HH/i,"H").replace("MI","i").replace("SS","s").replace("TT","A").replace("T","a")};BX.date.convertToUTC=function(e){if(!BX.type.isDate(e))return null;return new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()))};BX.date.getNewDate=function(e){return new Date(BX.date.getBrowserTimestamp(e))};BX.date.getBrowserTimestamp=function(e){e=parseInt(e,10);var t=new Date(e*1e3).getTimezoneOffset()*60;return(parseInt(e,10)+parseInt(BX.message("SERVER_TZ_OFFSET"))+t)*1e3};BX.date.getServerTimestamp=function(e){e=parseInt(e,10);var t=new Date(e).getTimezoneOffset()*60;return Math.round(e/1e3-(parseInt(BX.message("SERVER_TZ_OFFSET"),10)+parseInt(t,10)))};var e=null;BX.calendar=function(e){return BX.calendar.get().Show(e)};BX.calendar.get=function(){if(!e)e=new BX.JCCalendar;return e};BX.calendar.InsertDaysBack=function(e,t){if(t!=""){var a=new Date;if(t>0){a.setTime(a.valueOf()-t*864e5)}e.value=BX.date.format(BX.date.convertBitrixFormat(BX.message("FORMAT_DATE")),a,null)}else{e.value=""}};BX.calendar.ValueToString=function(e,t,a){return BX.date.format(BX.date.convertBitrixFormat(BX.message(t?"FORMAT_DATETIME":"FORMAT_DATE")),e,null,!!a)};BX.CalendarPeriod={Init:function(e,t,a){if((e.value!=""||t.value!="")&&a.value=="")a.value="interval";a.onchange()},ChangeDirectOpts:function(e,t){var a=BX.findChild(t,{className:"adm-select adm-calendar-direction"},true);if(e=="week"){a.options[0].text=BX.message("JSADM_CALEND_PREV_WEEK");a.options[1].text=BX.message("JSADM_CALEND_CURR_WEEK");a.options[2].text=BX.message("JSADM_CALEND_NEXT_WEEK")}else{a.options[0].text=BX.message("JSADM_CALEND_PREV");a.options[1].text=BX.message("JSADM_CALEND_CURR");a.options[2].text=BX.message("JSADM_CALEND_NEXT")}},SaveAndClearInput:function(e){if(!window.SavedPeriodValues)window.SavedPeriodValues={};window.SavedPeriodValues[e.id]=e.value;e.value=""},RestoreInput:function(e){if(!window.SavedPeriodValues||!window.SavedPeriodValues[e.id])return;e.value=window.SavedPeriodValues[e.id];delete window.SavedPeriodValues[e.id]},OnChangeP:function(e){var t=e.parentNode.parentNode;var a,i,s,r;a=i=s=r=false;var n=BX.findChild(t,{className:"adm-input-wrap adm-calendar-inp adm-calendar-first"});var o=BX.findChild(t,{className:"adm-input-wrap adm-calendar-second"});var l=BX.findChild(t,{className:"adm-select-wrap adm-calendar-direction"});var u=BX.findChild(t,{className:"adm-calendar-separate"});var _=BX.findChild(t,{className:"adm-input adm-calendar-from"},true);var c=BX.findChild(t,{className:"adm-input adm-calendar-to"},true);switch(e.value){case"day":case"week":case"month":case"quarter":case"year":s=true;BX.CalendarPeriod.OnChangeD(l.children[0]);break;case"before":i=true;break;case"after":a=true;break;case"exact":a=true;break;case"interval":a=i=r=true;BX.CalendarPeriod.RestoreInput(_);BX.CalendarPeriod.RestoreInput(c);break;case"":BX.CalendarPeriod.SaveAndClearInput(_);BX.CalendarPeriod.SaveAndClearInput(c);break;default:break}BX.CalendarPeriod.ChangeDirectOpts(e.value,t);n.style.display=a?"inline-block":"none";o.style.display=i?"inline-block":"none";l.style.display=s?"inline-block":"none";u.style.display=r?"inline-block":"none"},OnChangeD:function(e){var t=e.parentNode.parentNode;var a=BX.findChild(t,{className:"adm-input adm-calendar-from"},true);var i=BX.findChild(t,{className:"adm-input adm-calendar-to"},true);var s=BX.findChild(t,{className:"adm-select adm-calendar-period"},true);var r=0;switch(e.value){case"previous":r=-1;break;case"next":r=1;break;case"current":default:break}var n=false;var o=false;var l=new Date;var u=l.getFullYear();var _=l.getMonth();var c=l.getDate();var d=l.getDay();if(d==0)d=7;switch(s.value){case"day":n=new Date(u,_,c+r,0,0,0);o=new Date(u,_,c+r,23,59,59);break;case"week":n=new Date(u,_,c-d+1+r*7,0,0,0);o=new Date(u,_,c+(7-d)+r*7,23,59,59);break;case"month":n=new Date(u,_+r,1,0,0,0);o=new Date(u,_+1+r,0,23,59,59);break;case"quarter":var p=Math.floor(_/3)+r;n=new Date(u,3*p,1,0,0,0);o=new Date(u,3*(p+1),0,23,59,59);break;case"year":n=new Date(u+r,0,1,0,0,0);o=new Date(u+1+r,0,0,23,59,59);break;default:break}var h=window[a.name+"_bTime"]?BX.message("FORMAT_DATETIME"):BX.message("FORMAT_DATE");if(n){a.value=BX.formatDate(n,h);BX.addClass(a,"adm-calendar-inp-setted")}if(o){i.value=BX.formatDate(o,h);BX.addClass(i,"adm-calendar-inp-setted")}}};BX.JCCalendar=function(){this.params={};this.bAmPm=BX.isAmPmMode();this.popup=null;this.popup_month=null;this.popup_year=null;this.value=null;this.control_id=Math.random();this._layers={};this._current_layer=null;this.DIV=null;this.PARTS={};this.weekStart=0;this.numRows=6;this._create=function(e){this.popup=new BX.PopupWindow("calendar_popup_"+this.control_id,e.node,{closeByEsc:true,autoHide:false,content:this._get_content(),zIndex:3e3,bindOptions:{forceBindPosition:true}});BX.bind(this.popup.popupContainer,"click",this.popup.cancelBubble)};this._auto_hide_disable=function(){BX.unbind(document,"click",BX.proxy(this._auto_hide,this))};this._auto_hide_enable=function(){BX.bind(document,"click",BX.proxy(this._auto_hide,this))};this._auto_hide=function(e){this._auto_hide_disable();this.popup.close()};this._get_content=function(){var e=BX.delegate(function(e){e=e||window.event;this.SetDate(new Date(parseInt(BX.proxy_context.getAttribute("data-date"))),e.type=="dblclick")},this);this.DIV=BX.create("DIV",{props:{className:"bx-calendar"},children:[BX.create("DIV",{props:{className:"bx-calendar-header"},children:[BX.create("A",{attrs:{href:"javascript:void(0)"},props:{className:"bx-calendar-left-arrow"},events:{click:BX.proxy(this._prev,this)}}),BX.create("SPAN",{props:{className:"bx-calendar-header-content"},children:[this.PARTS.MONTH=BX.create("A",{attrs:{href:"javascript:void(0)"},props:{className:"bx-calendar-top-month"},events:{click:BX.proxy(this._menu_month,this)}}),this.PARTS.YEAR=BX.create("A",{attrs:{href:"javascript:void(0)"},props:{className:"bx-calendar-top-year"},events:{click:BX.proxy(this._menu_year,this)}})]}),BX.create("A",{attrs:{href:"javascript:void(0)"},props:{className:"bx-calendar-right-arrow"},events:{click:BX.proxy(this._next,this)}})]}),this.PARTS.WEEK=BX.create("DIV",{props:{className:"bx-calendar-name-day-wrap"}}),this.PARTS.LAYERS=BX.create("DIV",{props:{className:"bx-calendar-cell-block"},events:{click:BX.delegateEvent({className:"bx-calendar-cell"},e),dblclick:BX.delegateEvent({className:"bx-calendar-cell"},e)}}),this.PARTS.TIME=BX.create("DIV",{props:{className:"bx-calendar-set-time-wrap"},events:{click:BX.delegateEvent({attr:"data-action"},BX.delegate(this._time_actions,this))},html:'<a href="javascript:void(0)" data-action="time_show" class="bx-calendar-set-time"><i></i>'+BX.message("CAL_TIME_SET")+'</a><div class="bx-calendar-form-block"><span class="bx-calendar-form-text">'+BX.message("CAL_TIME")+'</span><span class="bx-calendar-form"><input type="text" class="bx-calendar-form-input" maxwidth="2" onkeyup="BX.calendar.get()._check_time()" /><span class="bx-calendar-form-separator"></span><input type="text" class="bx-calendar-form-input" maxwidth="2" onkeyup="BX.calendar.get()._check_time()" />'+(this.bAmPm?'<span class="bx-calendar-AM-PM-block"><span class="bx-calendar-AM-PM-text" data-action="time_ampm"></span><span class="bx-calendar-form-arrow-r"><a href="javascript:void(0)" class="bx-calendar-form-arrow-top" data-action="time_ampm_up"><i></i></a><a href="javascript:void(0)" class="bx-calendar-form-arrow-bottom" data-action="time_ampm_down"><i></i></a></span></span>':"")+'</span><a href="javascript:void(0)" data-action="time_hide" class="bx-calendar-form-close"><i></i></a></div>'}),BX.create("DIV",{props:{className:"bx-calendar-button-block"},events:{click:BX.delegateEvent({attr:"data-action"},BX.delegate(this._button_actions,this))},html:'<a href="javascript:void(0)" class="bx-calendar-button bx-calendar-button-select" data-action="submit"><span class="bx-calendar-button-left"></span><span class="bx-calendar-button-text">'+BX.message("CAL_BUTTON")+'</span><span class="bx-calendar-button-right"></span></a><a href="javascript:void(0)" class="bx-calendar-button bx-calendar-button-cancel" data-action="cancel"><span class="bx-calendar-button-left"></span><span class="bx-calendar-button-text">'+BX.message("JS_CORE_WINDOW_CLOSE")+'</span><span class="bx-calendar-button-right"></span></a>'})]});this.PARTS.TIME_INPUT_H=BX.findChild(this.PARTS.TIME,{tag:"INPUT"},true);this.PARTS.TIME_INPUT_M=this.PARTS.TIME_INPUT_H.nextSibling.nextSibling;if(this.bAmPm)this.PARTS.TIME_AMPM=this.PARTS.TIME_INPUT_M.nextSibling.firstChild;var t=new BX.JCSpinner({input:this.PARTS.TIME_INPUT_H,callback_change:BX.proxy(this._check_time,this),bSaveValue:false}).Show();t.className="bx-calendar-form-arrow-l";this.PARTS.TIME_INPUT_H.parentNode.insertBefore(t,this.PARTS.TIME_INPUT_H);t=new BX.JCSpinner({input:this.PARTS.TIME_INPUT_M,callback_change:BX.proxy(this._check_time,this),bSaveValue:true}).Show();t.className="bx-calendar-form-arrow-r";if(!this.PARTS.TIME_INPUT_M.nextSibling)this.PARTS.TIME_INPUT_M.parentNode.appendChild(t);else this.PARTS.TIME_INPUT_M.parentNode.insertBefore(t,this.PARTS.TIME_INPUT_M.nextSibling);for(var a=0;a<7;a++){this.PARTS.WEEK.appendChild(BX.create("SPAN",{props:{className:"bx-calendar-name-day"},text:BX.message("DOW_"+(a+this.weekStart)%7)}))}return this.DIV};this._time_actions=function(){switch(BX.proxy_context.getAttribute("data-action")){case"time_show":BX.addClass(this.PARTS.TIME,"bx-calendar-set-time-opened");this.popup.adjustPosition();break;case"time_hide":BX.removeClass(this.PARTS.TIME,"bx-calendar-set-time-opened");this.popup.adjustPosition();break;case"time_ampm":this.PARTS.TIME_AMPM.innerHTML=this.PARTS.TIME_AMPM.innerHTML=="AM"?"PM":"AM";break;case"time_ampm_up":this._check_time({bSaveValue:false},null,12);return;break;case"time_ampm_down":this._check_time({bSaveValue:false},null,-12);return;break}this._check_time()};this._button_actions=function(){switch(BX.proxy_context.getAttribute("data-action")){case"submit":this.SaveValue();break;case"cancel":this.Close();break}};this._check_time=function(e,t,a){var i=parseInt(this.PARTS.TIME_INPUT_H.value.substring(0,5),10)||0,s=parseInt(this.PARTS.TIME_INPUT_M.value.substring(0,5),10)||0,r=false;if(!!e&&!e.bSaveValue){this.value.setUTCHours(this.value.getUTCHours()+a)}else if(!isNaN(i)){if(this.bAmPm){if(i!=12&&this.PARTS.TIME_AMPM.innerHTML=="PM"){i+=12}}r=true;this.value.setUTCHours(i%24)}if(!isNaN(s)){r=true;this.value.setUTCMinutes(s%60)}if(r){this.SetValue(this.value)}};this._set_layer=function(){var e=parseInt(this.value.getUTCFullYear()+""+BX.util.str_pad_left(this.value.getUTCMonth()+"",2,"0"));if(!this._layers[e]){this._layers[e]=this._create_layer();this._layers[e].BXLAYERID=e}if(this._current_layer){var t=new Date(this.value.valueOf());t.setUTCHours(0);t.setUTCMinutes(0);var a=BX.findChild(this._layers[e],{tag:"A",className:"bx-calendar-active"},true),i=BX.findChild(this._layers[e],{tag:"A",attr:{"data-date":t.valueOf()+""}},true);if(a){BX.removeClass(a,"bx-calendar-active")}if(i){BX.addClass(i,"bx-calendar-active")}this._replace_layer(this._current_layer,this._layers[e])}else{this.PARTS.LAYERS.appendChild(this._layers[e])}this._current_layer=this._layers[e]};this._replace_layer=function(e,t){if(e!=t){if(!BX.browser.IsIE()||BX.browser.IsDoctype()){var a=e.BXLAYERID>t.BXLAYERID?1:-1;var i=0;var s=-a*e.offsetHeight;e.style.position="relative";e.style.top="0px";e.style.zIndex=5;t.style.position="absolute";t.style.top=s+"px";t.style.zIndex=6;this.PARTS.LAYERS.appendChild(t);var r=15;var n;(n=function(){s+=a*r;i+=a*r;if(a*s<0){e.style.top=i+"px";t.style.top=s+"px";setTimeout(n,10)}else{e.parentNode.removeChild(e);t.style.top="0px";t.style.position="static";t.style.zIndex=0}})()}else{this.PARTS.LAYERS.replaceChild(t,e)}}};this._create_layer=function(){var e=BX.create("DIV",{props:{className:"bx-calendar-layer"}});var t=new Date(this.value);t.setUTCHours(0);t.setUTCMinutes(0);t.setUTCDate(1);if(t.getUTCDay()!=this.weekStart){var a=t.getUTCDay()-this.weekStart;a+=a<0?7:0;t.setUTCDate(t.getUTCDate()-a)}var i=this.value.getUTCMonth(),s=this.value.getUTCDate(),r="";for(var n=0;n<this.numRows;n++){r+='<div class="bx-calendar-range'+(n==this.numRows-1?" bx-calendar-range-noline":"")+'">';for(var o=0;o<7;o++){a=t.getUTCDate();var l=t.getUTCDay();var u="bx-calendar-cell";if(i!=t.getUTCMonth())u+=" bx-calendar-date-hidden";else if(s==a)u+=" bx-calendar-active";if(l==0||l==6)u+=" bx-calendar-weekend";r+='<a href="javascript:void(0)" class="'+u+'" data-date="'+t.valueOf()+'">'+a+"</a>";t.setUTCDate(t.getUTCDate()+1)}r+="</div>"}e.innerHTML=r;return e};this._prev=function(){this.SetMonth(this.value.getUTCMonth()-1)};this._next=function(){this.SetMonth(this.value.getUTCMonth()+1)};this._menu_month_content=function(){var e="",t=this.value.getMonth(),a;for(a=0;a<12;a++){e+='<a href="javascript:void(0)" class="bx-calendar-month'+(a==t?" bx-calendar-month-active":"")+'" onclick="BX.calendar.get().SetMonth('+a+')">'+BX.message("MONTH_"+(a+1))+"</a>"}return'<div class="bx-calendar-month-popup"><div class="bx-calendar-month-title" onclick="BX.calendar.get().popup_month.close();">'+BX.message("MONTH_"+(this.value.getUTCMonth()+1))+'</div><div class="bx-calendar-month-content">'+e+"</div></div>"};this._menu_month=function(){if(!this.popup_month){this.popup_month=new BX.PopupWindow("calendar_popup_month_"+this.control_id,this.PARTS.MONTH,{content:this._menu_month_content(),zIndex:3001,closeByEsc:true,autoHide:true,offsetTop:-29,offsetLeft:-1,events:{onPopupShow:BX.delegate(function(){if(this.popup_year){this.popup_year.close()}},this)}});this.popup_month.BXMONTH=this.value.getUTCMonth()}else if(this.popup_month.BXMONTH!=this.value.getUTCMonth()){this.popup_month.setContent(this._menu_month_content());this.popup_month.BXMONTH=this.value.getUTCMonth()}this.popup_month.show()};this._menu_year_content=function(){var e='<div class="bx-calendar-year-popup"><div class="bx-calendar-year-title" onclick="BX.calendar.get().popup_year.close();">'+this.value.getUTCFullYear()+'</div><div class="bx-calendar-year-content" id="bx-calendar-year-content">';for(var t=-3;t<=3;t++){e+='<a href="javascript:void(0)" class="bx-calendar-year-number'+(t==0?" bx-calendar-year-active":"")+'" onclick="BX.calendar.get().SetYear('+(this.value.getUTCFullYear()-t)+')">'+(this.value.getUTCFullYear()-t)+"</a>"}e+='</div><input type="text" class="bx-calendar-year-input" onkeyup="if(this.value>=1900&&this.value<=2100)BX.calendar.get().SetYear(this.value);" maxlength="4" /></div>';return e};this._menu_year=function(){if(!this.popup_year){this.popup_year=new BX.PopupWindow("calendar_popup_year_"+this.control_id,this.PARTS.YEAR,{content:this._menu_year_content(),zIndex:3001,closeByEsc:true,autoHide:true,offsetTop:-29,offsetLeft:-1,events:{onPopupShow:BX.delegate(function(){if(this.popup_month){this.popup_month.close()}},this)}});this.popup_year.BXYEAR=this.value.getUTCFullYear()}else if(this.popup_year.BXYEAR!=this.value.getUTCFullYear()){this.popup_year.setContent(this._menu_year_content());this.popup_year.BXYEAR=this.value.getUTCFullYear()}this.popup_year.show()};this._check_date=function(e){var t=e;if(BX.type.isString(e)){t=BX.parseDate(e,true)}if(!BX.type.isDate(t)||isNaN(t.valueOf())){t=BX.date.convertToUTC(new Date);if(this.params.bHideTime){t.setUTCHours(0);t.setUTCMinutes(0)}}t.setUTCMilliseconds(0);t.setUTCSeconds(0);t.BXCHECKED=true;return t}};BX.JCCalendar.prototype.Show=function(e){if(!BX.isReady){BX.ready(BX.delegate(function(){this.Show(e)},this));return}e.node=e.node||document.body;if(BX.type.isNotEmptyString(e.node)){var t=BX(e.node);if(!t){t=document.getElementsByName(e.node);if(t&&t.length>0){t=t[0]}}e.node=t}if(!e.node)return;if(!!e.field){if(BX.type.isString(e.field)){t=BX(e.field);if(!!t){e.field=t}else{if(e.form){if(BX.type.isString(e.form)){e.form=document.forms[e.form]}}if(BX.type.isDomNode(e.form)&&!!e.form[e.field]){e.field=e.form[e.field]}else{t=document.getElementsByName(e.field);if(t&&t.length>0){t=t[0];e.field=t}}}if(BX.type.isString(e.field)){e.field=BX(e.field)}}}var a=!this.popup||!this.popup.isShown()||this.params.node!=e.node;this.params=e;this.params.bTime=typeof this.params.bTime=="undefined"?true:!!this.params.bTime;this.params.bHideTime=typeof this.params.bHideTime=="undefined"?true:!!this.params.bHideTime;this.weekStart=parseInt(this.params.weekStart||this.params.weekStart||BX.message("WEEK_START"));if(isNaN(this.weekStart))this.weekStart=1;if(!this.popup){this._create(this.params)}else{this.popup.setBindElement(this.params.node)}var i=!!this.params.bHideTime;if(this.params.value){this.SetValue(this.params.value);i=this.value.getUTCHours()<=0&&this.value.getUTCMinutes()<=0}else if(this.params.field){this.SetValue(this.params.field.value);i=this.value.getUTCHours()<=0&&this.value.getUTCMinutes()<=0}else if(!!this.params.currentTime){this.SetValue(this.params.currentTime)}else{this.SetValue()}if(!!this.params.bTime)BX.removeClass(this.DIV,"bx-calendar-time-disabled");else BX.addClass(this.DIV,"bx-calendar-time-disabled");if(!!i)BX.removeClass(this.PARTS.TIME,"bx-calendar-set-time-opened");else BX.addClass(this.PARTS.TIME,"bx-calendar-set-time-opened");if(a){this._auto_hide_disable();this.popup.show();setTimeout(BX.proxy(this._auto_hide_enable,this),0)}this.params.bSetFocus=typeof this.params.bSetFocus=="undefined"?true:!!this.params.bSetFocus;if(this.params.bSetFocus)e.node.blur();return this};BX.JCCalendar.prototype.SetDay=function(e){this.value.setUTCDate(e);return this.SetValue(this.value)};BX.JCCalendar.prototype.SetMonth=function(e){if(this.popup_month)this.popup_month.close();this.value.setUTCMonth(e);if(e<0)e+=12;else if(e>=12)e-=12;while(this.value.getUTCMonth()>e){this.value.setUTCDate(this.value.getUTCDate()-1)}return this.SetValue(this.value)};BX.JCCalendar.prototype.SetYear=function(e){if(this.popup_year)this.popup_year.close();this.value.setUTCFullYear(e);return this.SetValue(this.value)};BX.JCCalendar.prototype.SetDate=function(e,t){e=this._check_date(e);e.setUTCHours(this.value.getUTCHours());e.setUTCMinutes(this.value.getUTCMinutes());e.setUTCSeconds(this.value.getUTCSeconds());if(this.params.bTime&&!t){return this.SetValue(e)}else{this.SetValue(e);this.SaveValue()}};BX.JCCalendar.prototype.SetValue=function(e){this.value=e&&e.BXCHECKED?e:this._check_date(e);this.PARTS.MONTH.innerHTML=BX.message("MONTH_"+(this.value.getUTCMonth()+1));this.PARTS.YEAR.innerHTML=this.value.getUTCFullYear();if(!!this.params.bTime){var t=this.value.getUTCHours();if(this.bAmPm){if(t>=12){this.PARTS.TIME_AMPM.innerHTML="PM";if(t!=12)t-=12}else{this.PARTS.TIME_AMPM.innerHTML="AM";if(t==0)t=12}}this.PARTS.TIME_INPUT_H.value=BX.util.str_pad_left(t.toString(),2,"0");this.PARTS.TIME_INPUT_M.value=BX.util.str_pad_left(this.value.getUTCMinutes().toString(),2,"0")}this._set_layer();return this};BX.JCCalendar.prototype.SaveValue=function(){if(this.popup_month)this.popup_month.close();if(this.popup_year)this.popup_year.close();var e=true;if(!!this.params.callback){var t=this.params.callback.apply(this,[new Date(this.value.valueOf()+this.value.getTimezoneOffset()*6e4)]);if(t===false)e=false}if(e){var a=!!this.params.bTime&&BX.hasClass(this.PARTS.TIME,"bx-calendar-set-time-opened");if(this.params.field){this.params.field.value=BX.calendar.ValueToString(this.value,a,true);BX.fireEvent(this.params.field,"change")}this.popup.close();if(!!this.params.callback_after){this.params.callback_after.apply(this,[new Date(this.value.valueOf()+this.value.getTimezoneOffset()*6e4),a])}}return this};BX.JCCalendar.prototype.Close=function(){if(!!this.popup)this.popup.close();return this};BX.JCSpinner=function(e){e=e||{};this.params={input:e.input||null,delta:e.delta||1,timeout_start:e.timeout_start||1e3,timeout_cont:e.timeout_cont||150,callback_start:e.callback_start||null,callback_change:e.callback_change||null,callback_finish:e.callback_finish||null,bSaveValue:typeof e.bSaveValue=="undefined"?!!e.input:!!e.bSaveValue};this.mousedown=false;this.direction=1};BX.JCSpinner.prototype.Show=function(){this.node=BX.create("span",{events:{mousedown:BX.delegateEvent({attr:"data-dir"},BX.delegate(this.Start,this))},html:'<a href="javascript:void(0)" class="bx-calendar-form-arrow bx-calendar-form-arrow-top" data-dir="1"><i></i></a><a href="javascript:void(0)" class="bx-calendar-form-arrow bx-calendar-form-arrow-bottom" data-dir="-1"><i></i></a>'});return this.node};BX.JCSpinner.prototype.Start=function(){this.mousedown=true;this.direction=BX.proxy_context.getAttribute("data-dir")>0?1:-1;BX.bind(document,"mouseup",BX.proxy(this.MouseUp,this));this.ChangeValue(true)};BX.JCSpinner.prototype.ChangeValue=function(e){if(!this.mousedown)return;if(this.params.input){var t=parseInt(this.params.input.value,10)+this.params.delta*this.direction;if(this.params.bSaveValue)this.params.input.value=t;if(!!e&&this.params.callback_start)this.params.callback_start(this.params,t,this.direction);if(this.params.callback_change)this.params.callback_change(this.params,t,this.direction);setTimeout(BX.proxy(this.ChangeValue,this),!!e?this.params.timeout_start:this.params.timeout_cont)}};BX.JCSpinner.prototype.MouseUp=function(){this.mousedown=false;BX.unbind(document,"mouseup",BX.proxy(this.MouseUp,this));if(this.params.callback_finish)this.params.callback_finish(this.params,this.params.input.value)};window.jsCalendar={Show:function(e,t,a,i,s,r,n,o){return BX.calendar({node:e,field:t,form:n,bTime:!!s,currentTime:r,bHideTimebar:!!o})},ValueToString:BX.calendar.ValueToString};BX.CClockSelector=function(e){this.params=e;this.params.popup_buttons=this.params.popup_buttons||[new BX.PopupWindowButton({text:BX.message("CAL_BUTTON"),className:"popup-window-button-create",events:{click:BX.proxy(this.setValue,this)}})];this.isReady=false;this.WND=new BX.PopupWindow(this.params.popup_id||"clock_selector_popup",this.params.node,this.params.popup_config||{
titleBar:BX.message("CAL_TIME"),offsetLeft:-45,offsetTop:-135,autoHide:true,closeIcon:true,closeByEsc:true,zIndex:this.params.zIndex});this.SHOW=false;BX.addCustomEvent(this.WND,"onPopupClose",BX.delegate(this.onPopupClose,this));this.obClocks={};this.CLOCK_ID=this.params.clock_id||"clock_selector"};BX.CClockSelector.prototype.Show=function(){if(!this.isReady){BX.addCustomEvent("onClockRegister",BX.proxy(this.onClockRegister,this));return BX.ajax.get("http://atrspb.com/bitrix/tools/clock_selector.php",{start_time:this.params.start_time,clock_id:this.CLOCK_ID,sessid:BX.bitrix_sessid()},BX.delegate(this.Ready,this))}this.WND.setButtons(this.params.popup_buttons);this.WND.show();this.SHOW=true;if(window["bxClock_"+this.obClocks[this.CLOCK_ID]]){setTimeout("window['bxClock_"+this.obClocks[this.CLOCK_ID]+"'].CalculateCoordinates()",40)}return true};BX.CClockSelector.prototype.onClockRegister=function(e){if(e[this.CLOCK_ID]){this.obClocks[this.CLOCK_ID]=e[this.CLOCK_ID];BX.removeCustomEvent("onClockRegister",BX.proxy(this.onClockRegister,this))}};BX.CClockSelector.prototype.Ready=function(e){this.content=this.CreateContent(e);this.WND.setContent(this.content);this.isReady=true;setTimeout(BX.proxy(this.Show,this),30)};BX.CClockSelector.prototype.CreateContent=function(e){return BX.create("DIV",{events:{click:BX.PreventDefault},html:'<div class="bx-tm-popup-clock">'+e+"</div>"})};BX.CClockSelector.prototype.setValue=function(e){if(this.params.callback){var t=BX.findChild(this.content,{tagName:"INPUT"},true);this.params.callback.apply(this.params.node,[t.value])}return BX.PreventDefault(e)};BX.CClockSelector.prototype.closeWnd=function(e){this.WND.close();return e||window.event?BX.PreventDefault(e):true};BX.CClockSelector.prototype.setNode=function(e){this.WND.setBindElement(e)};BX.CClockSelector.prototype.setTime=function(e){this.params.start_time=e;if(window["bxClock_"+this.obClocks[this.CLOCK_ID]]){window["bxClock_"+this.obClocks[this.CLOCK_ID]].SetTime(parseInt(e/3600),parseInt(e%3600/60))}};BX.CClockSelector.prototype.setCallback=function(e){this.params.callback=e};BX.CClockSelector.prototype.onPopupClose=function(){this.SHOW=false}})();
/* End */
;
; /* Start:"a:4:{s:4:"full";s:44:"http://atrspb.com/bitrix/js/main/utils.min.js?149703842719858";s:6:"source";s:24:"utils.js"/*tpa=http://atrspb.com/bitrix/js/main/utils.js*/;s:3:"min";s:28:"utils.min.js"/*tpa=http://atrspb.com/bitrix/js/main/utils.min.js*/;s:3:"map";s:28:"utils.map.js"/*tpa=http://atrspb.com/bitrix/js/main/utils.map.js*/;}"*/
var phpVars;if(!phpVars){phpVars={ADMIN_THEME_ID:".default",LANGUAGE_ID:"en",FORMAT_DATE:"http://atrspb.com/bitrix/cache/js/s1/atrspb/kernel_main/DD.MM.YYYY",FORMAT_DATETIME:"DD.MM.YYYY HH:MI:SS",opt_context_ctrl:false,cookiePrefix:"BITRIX_SM",titlePrefix:"",bitrix_sessid:"",messHideMenu:"",messShowMenu:"",messHideButtons:"",messShowButtons:"",messFilterInactive:"",messFilterActive:"",messFilterLess:"",messLoading:"Loading...",messMenuLoading:"",messMenuLoadingTitle:"",messNoData:"",messExpandTabs:"",messCollapseTabs:"",messPanelFixOn:"",messPanelFixOff:"",messPanelCollapse:"",messPanelExpand:""}}var jsUtils={arEvents:Array(),addEvent:function(e,t,n,i){if(e.attachEvent)e.attachEvent("on"+t,n);else if(e.addEventListener)e.addEventListener(t,n,false);else e["on"+t]=n;this.arEvents[this.arEvents.length]={element:e,event:t,fn:n}},removeEvent:function(e,t,n){if(e.detachEvent)e.detachEvent("on"+t,n);else if(e.removeEventListener)e.removeEventListener(t,n,false);else e["on"+t]=null},removeAllEvents:function(e){var t;for(t=0;t<this.arEvents.length;t++){if(this.arEvents[t]&&(e==false||e==this.arEvents[t].element)){jsUtils.removeEvent(this.arEvents[t].element,this.arEvents[t].event,this.arEvents[t].fn);this.arEvents[t]=null}}if(e==false)this.arEvents.length=0},IsDoctype:function(){if(document.compatMode)return document.compatMode=="CSS1Compat";if(document.documentElement&&document.documentElement.clientHeight)return true;return false},GetRealPos:function(e){if(window.BX)return BX.pos(e);if(!e||!e.offsetParent)return false;var t=Array();t["left"]=e.offsetLeft;t["top"]=e.offsetTop;var n=e.offsetParent;while(n&&n.tagName!="BODY"){t["left"]+=n.offsetLeft;t["top"]+=n.offsetTop;n=n.offsetParent}t["right"]=t["left"]+e.offsetWidth;t["bottom"]=t["top"]+e.offsetHeight;return t},FindChildObject:function(e,t,n,i){if(!e)return null;var o=t.toUpperCase();var s=n?n.toLowerCase():null;var r=e.childNodes.length;for(var l=0;l<r;l++){var a=e.childNodes[l];if(a.tagName&&a.tagName.toUpperCase()==o)if(!n||a.className.toLowerCase()==s)return a;if(i==true){var d;if(d=jsUtils.FindChildObject(a,t,n,true))return d}}return null},FindParentObject:function(e,t,n){if(!e)return null;var i=e;var o=t.toUpperCase();var s=n?n.toLowerCase():null;while(i.parentNode){var r=i.parentNode;if(r.tagName&&r.tagName.toUpperCase()==o)if(!n||r.className.toLowerCase()==s)return r;i=r}return null},FindNextSibling:function(e,t){if(!e)return null;var n=e;var i=t.toUpperCase();while(n.nextSibling){var o=n.nextSibling;if(o.tagName&&o.tagName.toUpperCase()==i)return o;n=o}return null},FindPreviousSibling:function(e,t){if(!e)return null;var n=e;var i=t.toUpperCase();while(n.previousSibling){var o=n.previousSibling;if(o.tagName&&o.tagName.toUpperCase()==i)return o;n=o}return null},bOpera:navigator.userAgent.toLowerCase().indexOf("opera")!=-1,bIsIE:document.attachEvent&&navigator.userAgent.toLowerCase().indexOf("opera")==-1,IsIE:function(){return this.bIsIE},IsOpera:function(){return this.bOpera},IsSafari:function(){var e=navigator.userAgent.toLowerCase();return/webkit/.test(e)},IsEditor:function(){var e=navigator.userAgent.toLowerCase();var t=(e.match(/.+(msie)[\/: ]([\d.]+)/)||[])[2];var n=/webkit/.test(e);if(this.IsOpera()||document.all&&!document.compatMode&&t<6||n)return false;return true},ToggleDiv:function(e){var t=document.getElementById(e).style;if(t.display!="none")t.display="none";else t.display="block";return t.display!="none"},urlencode:function(e){return escape(e).replace(new RegExp("\\+","g"),"%2B")},OpenWindow:function(e,t,n){var i=screen.width,o=screen.height;if(this.IsOpera()){i=document.body.offsetWidth;o=document.body.offsetHeight}window.open(e,"","status=no,scrollbars=yes,resizable=yes,width="+t+",height="+n+",top="+Math.floor((o-n)/2-14)+",left="+Math.floor((i-t)/2-5))},SetPageTitle:function(e){document.title=phpVars.titlePrefix+e;var t=document.getElementsByTagName("H1");if(t)t[0].innerHTML=e},LoadPageToDiv:function(e,t){var n=document.getElementById(t);if(!n)return;CHttpRequest.Action=function(e){CloseWaitWindow();document.getElementById(t).innerHTML=e};ShowWaitWindow();CHttpRequest.Send(e)},trim:function(e){if(typeof e=="string"||typeof e=="object"&&e.constructor==String){var t,n;n=/^[\s\r\n]+/g;t=e.replace(n,"");n=/[\s\r\n]+$/g;t=t.replace(n,"");return t}else return e},Redirect:function(e,t){var n=null,i=false;if(e&&e.length>0)n=e[0];if(!n)n=window.event;if(n)i=n.shiftKey;if(i)window.open(t);else{window.location.href=t}},False:function(){return false},AlignToPos:function(e,t,n){var i=e["left"],o=e["bottom"];var s=jsUtils.GetWindowScrollPos();var r=jsUtils.GetWindowInnerSize();if(r.innerWidth+s.scrollLeft-(e["left"]+t)<0){if(e["right"]-t>=0)i=e["right"]-t;else i=s.scrollLeft}if(r.innerHeight+s.scrollTop-(e["bottom"]+n)<0){if(e["top"]-n>=0)o=e["top"]-n;else o=s.scrollTop}return{left:i,top:o}},EvalGlobal:function(e){try{if(window.execScript)window.execScript(e,"javascript");else if(jsUtils.IsSafari())window.setTimeout(e,0);else window.eval(e)}catch(t){}},GetStyleValue:function(e,t){var n;if(e.currentStyle)n=e.currentStyle[t];else if(window.getComputedStyle)n=document.defaultView.getComputedStyle(e,null).getPropertyValue(t);if(!n)n="";return n},GetWindowInnerSize:function(e){var t,n;if(!e)e=document;if(self.innerHeight){t=self.innerWidth;n=self.innerHeight}else if(e.documentElement&&(e.documentElement.clientHeight||e.documentElement.clientWidth)){t=e.documentElement.clientWidth;n=e.documentElement.clientHeight}else if(e.body){t=e.body.clientWidth;n=e.body.clientHeight}return{innerWidth:t,innerHeight:n}},GetWindowScrollPos:function(e){var t,n;if(!e)e=document;if(self.pageYOffset){t=self.pageXOffset;n=self.pageYOffset}else if(e.documentElement&&(e.documentElement.scrollTop||e.documentElement.scrollLeft)){t=document.documentElement.scrollLeft;n=document.documentElement.scrollTop}else if(e.body){t=e.body.scrollLeft;n=e.body.scrollTop}return{scrollLeft:t,scrollTop:n}},GetWindowScrollSize:function(e){var t,n;if(!e)e=document;if(e.compatMode&&e.compatMode=="CSS1Compat"){t=e.documentElement.scrollWidth;n=e.documentElement.scrollHeight}else{if(e.body.scrollHeight>e.body.offsetHeight)n=e.body.scrollHeight;else n=e.body.offsetHeight;if(e.body.scrollWidth>e.body.offsetWidth||e.compatMode&&e.compatMode=="BackCompat"||e.documentElement&&!e.documentElement.clientWidth)t=e.body.scrollWidth;else t=e.body.offsetWidth}return{scrollWidth:t,scrollHeight:n}},GetWindowSize:function(){var e=jsUtils.GetWindowInnerSize();var t=jsUtils.GetWindowScrollPos();var n=jsUtils.GetWindowScrollSize();return{innerWidth:e.innerWidth,innerHeight:e.innerHeight,scrollLeft:t.scrollLeft,scrollTop:t.scrollTop,scrollWidth:n.scrollWidth,scrollHeight:n.scrollHeight}},arCustomEvents:{},addCustomEvent:function(e,t,n,i){if(!this.arCustomEvents[e])this.arCustomEvents[e]=[];if(!n)n=[];if(!i)i=false;this.arCustomEvents[e].push({handler:t,arParams:n,obj:i})},removeCustomEvent:function(e,t){if(!this.arCustomEvents[e])return;var n=this.arCustomEvents[e].length;if(n==1){delete this.arCustomEvents[e];return}for(var i=0;i<n;i++){if(!this.arCustomEvents[e][i])continue;if(this.arCustomEvents[e][i].handler==t){delete this.arCustomEvents[e][i];return}}},onCustomEvent:function(e,t){if(!this.arCustomEvents[e])return;if(!t)t=[];var n;for(var i=0,o=this.arCustomEvents[e].length;i<o;i++){n=this.arCustomEvents[e][i];if(!n||!n.handler)continue;if(n.obj)n.handler.call(n.obj,n.arParams,t);else n.handler(n.arParams,t)}},loadJSFile:function(e,t,n){if(!n)n=document;if(typeof e=="string")e=[e];var i=function(){if(!t)return;if(typeof t=="function")return t();if(typeof t!="object"||!t.func)return;var e=t.params||{};if(t.obj)t.func.apply(t.obj,e);else t.func(e)};var o=function(t){if(t>=e.length)return i();var s=n.body.appendChild(n.createElement("script"));s.src=e[t];var r=false;s.onload=s.onreadystatechange=function(){if(!r&&(!s.readyState||s.readyState=="loaded"||s.readyState=="complete")){r=true;setTimeout(function(){o(++t)},50)}}};o(0)},loadCSSFile:function(e,t,n){if(typeof e=="string"){var i=true;e=[e]}var o,s=e.length,r=[];if(s==0)return;if(!t)t=document;if(!n)n=window;if(!n.bxhead){var l=t.getElementsByTagName("HEAD");n.bxhead=l[0]}if(!n.bxhead)return;for(o=0;o<s;o++){var a=document.createElement("LINK");a.href=e[o];a.rel="stylesheet";a.type="text/css";n.bxhead.appendChild(a);r.push(a)}if(i)return a;return r},appendBXHint:function(e,t){if(!e||!e.parentNode||!t)return;var n=new BXHint(t);e.parentNode.insertBefore(n.oIcon,e);e.parentNode.removeChild(e);n.oIcon.style.marginLeft="5px"},PreventDefault:function(e){if(!e)e=window.event;if(e.stopPropagation){e.preventDefault();e.stopPropagation()}else{e.cancelBubble=true;e.returnValue=false}return false},CreateElement:function(e,t,n,i){if(!i)i=document;var o=i.createElement(e),s;if(t){for(s in t){if(s=="className"||s=="class"){o.setAttribute("class",t[s]);if(jsUtils.IsIE())o.setAttribute("className",t[s]);continue}if(t[s]!=undefined&&t[s]!=null)o.setAttribute(s,t[s])}}if(n){for(s in n)o.style[s]=n[s]}return o},in_array:function(e,t){for(var n=0;n<t.length;n++){if(t[n]==e)return true}return false},htmlspecialchars:function(e){if(!e.replace)return e;return e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}};function JCFloatDiv(){var e=this;this.floatDiv=null;this.x=this.y=0;this.Create=function(e){var t=document.body.appendChild(document.createElement("DIV"));t.id=e.id;t.style.position="absolute";t.style.left="-10000px";t.style.top="-10000px";if(e.className)t.className=e.className;if(e.zIndex)t.style.zIndex=e.zIndex;if(e.width)t.style.width=e.width+"px";if(e.height)t.style.height=e.height+"px";return t};this.Show=function(e,t,n,i,o,s){if(s!==false)s=true;var r=parseInt(e.style.zIndex);if(r<=0||isNaN(r))r=100;e.style.zIndex=r;if(t<0)t=0;if(n<0)n=0;e.style.left=parseInt(t)+"px";e.style.top=parseInt(n)+"px";if(jsUtils.IsIE()&&s===true){var l=document.getElementById(e.id+"_frame");if(!l){l=document.createElement("IFRAME");l.src="javascript:''";l.id=e.id+"_frame";l.style.position="absolute";l.style.borderWidth="0px";l.style.zIndex=r-1;document.body.appendChild(l)}l.style.width=e.offsetWidth+"px";l.style.height=e.offsetHeight+"px";l.style.left=e.style.left;l.style.top=e.style.top;l.style.visibility="visible"}e.restrictDrag=o||false;if(isNaN(i))i=5;if(i>0){var a=document.getElementById(e.id+"_shadow");if(!a){if(jsUtils.IsIE()){a=document.createElement("DIV");a.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='/bitrix/themes/"+phpVars.ADMIN_THEME_ID+"/images/shadow.png',sizingMethod='scale')"}else{a=document.createElement("IMG");a.src="/bitrix/themes/"+phpVars.ADMIN_THEME_ID+"/images/shadow.png"}a.id=e.id+"_shadow";a.style.position="absolute";a.style.zIndex=r-2;a.style.left="-1000px";a.style.top="-1000px";a.style.lineHeight="normal";a.className="bx-js-float-shadow";document.body.appendChild(a)}a.style.width=e.offsetWidth+"px";a.style.height=e.offsetHeight+"px";a.style.left=parseInt(e.style.left)+i+"px";a.style.top=parseInt(e.style.top)+i+"px";a.style.visibility="visible"}e.dxShadow=i};this.Close=function(e){if(!e)return;var t=document.getElementById(e.id+"_shadow");if(t)t.style.visibility="hidden";var n=document.getElementById(e.id+"_frame");if(n)n.style.visibility="hidden"};this.Move=function(e,t,n){if(!e)return;var i=e.dxShadow;var o=parseInt(e.style.left)+t;var s=parseInt(e.style.top)+n;if(e.restrictDrag){if(o<0)o=0;if(document.compatMode&&document.compatMode=="CSS1Compat")windowWidth=document.documentElement.scrollWidth;else{if(document.body.scrollWidth>document.body.offsetWidth||document.compatMode&&document.compatMode=="BackCompat"||document.documentElement&&!document.documentElement.clientWidth)windowWidth=document.body.scrollWidth;else windowWidth=document.body.offsetWidth}var r=e.offsetWidth;if(o>windowWidth-r-i)o=windowWidth-r-i;if(s<0)s=0}e.style.left=o+"px";e.style.top=s+"px";this.AdjustShadow(e)};this.HideShadow=function(e){var t=document.getElementById(e.id+"_shadow");t.style.visibility="hidden"};this.UnhideShadow=function(e){var t=document.getElementById(e.id+"_shadow");t.style.visibility="visible"};this.AdjustShadow=function(e){var t=document.getElementById(e.id+"_shadow");if(t&&t.style.visibility!="hidden"){var n=e.dxShadow;t.style.width=e.offsetWidth+"px";t.style.height=e.offsetHeight+"px";t.style.left=parseInt(e.style.left)+n+"px";t.style.top=parseInt(e.style.top)+n+"px"}var i=document.getElementById(e.id+"_frame");if(i){i.style.width=e.offsetWidth+"px";i.style.height=e.offsetHeight+"px";i.style.left=e.style.left;i.style.top=e.style.top}};this.StartDrag=function(t,n){if(!t)t=window.event;this.x=t.clientX+document.body.scrollLeft;this.y=t.clientY+document.body.scrollTop;this.floatDiv=n;jsUtils.addEvent(document,"mousemove",this.MoveDrag);document.onmouseup=this.StopDrag;if(document.body.setCapture)document.body.setCapture();document.onmousedown=jsUtils.False;var i=document.body;i.ondrag=jsUtils.False;i.onselectstart=jsUtils.False;i.style.MozUserSelect=e.floatDiv.style.MozUserSelect="none";i.style.cursor="move"};this.StopDrag=function(t){if(document.body.releaseCapture)document.body.releaseCapture();jsUtils.removeEvent(document,"mousemove",e.MoveDrag);document.onmouseup=null;this.floatDiv=null;document.onmousedown=null;var n=document.body;n.ondrag=null;n.onselectstart=null;n.style.MozUserSelect=e.floatDiv.style.MozUserSelect="";n.style.cursor=""};this.MoveDrag=function(t){var n=t.clientX+document.body.scrollLeft;var i=t.clientY+document.body.scrollTop;if(e.x==n&&e.y==i)return;e.Move(e.floatDiv,n-e.x,i-e.y);e.x=n;e.y=i}}var jsFloatDiv=new JCFloatDiv;var BXHint=function(e,t,n){this.oDivOver=false;this.timeOutID=null;this.oIcon=null;this.freeze=false;this.x=0;this.y=0;this.time=700;if(!e)e="";this.Create(e,t,n)};BXHint.prototype.Create=function(e,t,n){var i=this,o=0,s=0,r=null,l="icon";this.bWidth=true;if(n){if(n.width===false)this.bWidth=false;else if(n.width)o=n.width;if(n.height)s=n.height;if(n.className)r=n.className;if(n.type&&(n.type=="link"||n.type=="icon"))l=n.type;if(n.time>0)this.time=n.time}if(t)l="element";if(l=="icon"){var t=document.createElement("IMG");t.src=n&&n.iconSrc?n.iconSrc:"/bitrix/themes/"+phpVars.ADMIN_THEME_ID+"/public/popup/hint.gif";t.ondrag=jsUtils.False}else if(l=="link"){var t=document.createElement("A");t.href="";t.onclick=function(e){return false};t.innerHTML="[?]"}this.element=t;if(l=="element"){if(n&&n.show_on_click){jsUtils.addEvent(t,"click",function(t){if(!t)t=window.event;i.GetMouseXY(t);i.timeOutID=setTimeout(function(){i.Show(e,o,s,r)},10)})}else{jsUtils.addEvent(t,"mouseover",function(t){if(!t)t=window.event;i.GetMouseXY(t);i.timeOutID=setTimeout(function(){i.Show(e,o,s,r)},750)})}jsUtils.addEvent(t,"mouseout",function(e){if(i.timeOutID)clearTimeout(i.timeOutID);i.SmartHide(i)})}else{this.oIcon=t;t.onmouseover=function(t){if(!t)t=window.event;i.GetMouseXY(t);i.Show(e,o,s,r)};t.onmouseout=function(){i.SmartHide(i)}}};BXHint.prototype.IsFrozen=function(){return this.freeze};BXHint.prototype.Freeze=function(){this.freeze=true;this.Hide()};BXHint.prototype.UnFreeze=function(){this.freeze=false};BXHint.prototype.GetMouseXY=function(e){if(e.pageX||e.pageY){this.x=e.pageX;this.y=e.pageY}else if(e.clientX||e.clientY){this.x=e.clientX+(document.documentElement.scrollLeft||document.body.scrollLeft)-document.documentElement.clientLeft;this.y=e.clientY+(document.documentElement.scrollTop||document.body.scrollTop)-document.documentElement.clientTop}};BXHint.prototype.Show=function(e,t,n,i){var o=document.getElementById("__BXHint_div");if(o)this.Hide();if(this.freeze)return;var s=this;var r=document.body.appendChild(document.createElement("DIV"));r.onmouseover=function(){s.oDivOver=true};r.onmouseout=function(){s.oDivOver=false;s.SmartHide(s)};r.id="__BXHint_div";r.className=i?i:"bxhint";r.style.position="absolute";if(t&&this.bWidth)r.style.width=t+"px";if(n)r.style.height=n+"px";r.innerHTML=e;var l=r.offsetWidth;var a=r.offsetHeight;if(this.bWidth){if(!t&&l>200)l=Math.round(Math.sqrt(1.618*l*a));r.style.width=l+"px";a=r.offsetHeight}var d={left:this.x+10,right:this.x+l,top:this.y,bottom:this.y+a};d=this.AlignToPos(d,l,a);r.style.zIndex=2100;jsFloatDiv.Show(r,d.left,d.top,3);r=null};BXHint.prototype.AlignToPos=function(e,t,n){var i=document.body;if(i.clientWidth+i.scrollLeft<e.left+t)e.left=e.left-t>=0?e.left-t:i.scrollLeft;if(i.clientHeight+i.scrollTop-e["bottom"]<0)e.top=e.top-n>=0?e.top-n:i.scrollTop;return e};BXHint.prototype.Hide=function(){var e=document.getElementById("__BXHint_div");if(!e)return;jsFloatDiv.Close(e);e.parentNode.removeChild(e);e=null};BXHint.prototype.SmartHide=function(e){setTimeout(function(){if(!e.oDivOver)e.Hide()},100)};function WaitOnKeyPress(e){if(!e)e=window.event;if(!e)return;if(e.keyCode==27)CloseWaitWindow()}function ShowWaitWindow(){CloseWaitWindow();var e=jsUtils.GetWindowSize();var t=document.body.appendChild(document.createElement("DIV"));t.id="wait_window_div";t.innerHTML=phpVars.messLoading;t.className="waitwindow";t.style.right=5-e.scrollLeft+"px";t.style.top=e.scrollTop+5+"px";if(jsUtils.IsIE()){var n=document.createElement("IFRAME");n.src="javascript:''";n.id="wait_window_frame";n.className="waitwindow";n.style.width=t.offsetWidth+"px";n.style.height=t.offsetHeight+"px";n.style.right=t.style.right;n.style.top=t.style.top;document.body.appendChild(n)}jsUtils.addEvent(document,"keypress",WaitOnKeyPress)}function CloseWaitWindow(){jsUtils.removeEvent(document,"keypress",WaitOnKeyPress);var e=document.getElementById("wait_window_frame");if(e)e.parentNode.removeChild(e);var t=document.getElementById("wait_window_div");if(t)t.parentNode.removeChild(t)}var jsSelectUtils={addNewOption:function(e,t,n,i,o){var s=typeof e=="string"||e instanceof String?document.getElementById(e):e;if(s){var r=s.length;if(o!==false){for(var l=0;l<r;l++)if(s[l].value==t)return}var a=new Option(n,t,false,false);s.options[r]=a}if(i===true)this.sortSelect(e)},deleteOption:function(e,t){var n=typeof e=="string"||e instanceof String?document.getElementById(e):e;if(n){for(var i=0;i<n.length;i++)if(n[i].value==t){n.remove(i);break}}},deleteSelectedOptions:function(e){var t=typeof e=="string"||e instanceof String?document.getElementById(e):e;if(t){var n=0;while(n<t.length)if(t[n].selected){t[n].selected=false;t.remove(n)}else n++}},deleteAllOptions:function(e){if(e){for(var t=e.length-1;t>=0;t--)e.remove(t)}},optionCompare:function(e,t){var n=e.optText.toLowerCase();var i=t.optText.toLowerCase();if(n>i)return 1;if(n<i)return-1;return 0},sortSelect:function(e){var t=typeof e=="string"||e instanceof String?document.getElementById(e):e;if(t){var n=[];var i=t.options.length;for(var o=0;o<i;o++){n[o]={optText:t[o].text,optValue:t[o].value}}n.sort(this.optionCompare);t.length=0;i=n.length;for(var o=0;o<i;o++){var s=new Option(n[o].optText,n[o].optValue,false,false);t[o]=s}}},selectAllOptions:function(e){var t=typeof e=="string"||e instanceof String?document.getElementById(e):e;if(t){var n=t.length;for(var i=0;i<n;i++)t[i].selected=true}},selectOption:function(e,t){var n=typeof e=="string"||e instanceof String?document.getElementById(e):e;if(n){var i=n.length;for(var o=0;o<i;o++)n[o].selected=n[o].value==t}},addSelectedOptions:function(e,t,n,i){if(!e)return;var o=e.length;for(var s=0;s<o;s++)if(e[s].selected)this.addNewOption(t,e[s].value,e[s].text,i,n)},moveOptionsUp:function(e){if(!e)return;var t=e.length;for(var n=0;n<t;n++){if(e[n].selected&&n>0&&e[n-1].selected==false){var i=new Option(e[n].text,e[n].value);var o=new Option(e[n-1].text,e[n-1].value);e[n]=o;e[n].selected=false;e[n-1]=i;e[n-1].selected=true}}},moveOptionsDown:function(e){if(!e)return;var t=e.length;for(var n=t-1;n>=0;n--){if(e[n].selected&&n<t-1&&e[n+1].selected==false){var i=new Option(e[n].text,e[n].value);var o=new Option(e[n+1].text,e[n+1].value);e[n]=o;e[n].selected=false;e[n+1]=i;e[n+1].selected=true}}}};
/* End */
;
//# sourceMappingURL=kernel_main.map.js