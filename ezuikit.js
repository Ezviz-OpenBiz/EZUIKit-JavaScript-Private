/**
 * jssdk 3.5.0
 */
(function (global, factory) {

  "use strict";

  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = global.document ?
      factory(global, true) :
      function (w) {
        if (!w.document) {
          throw new Error("EZUIPlayer requires a window with a document");
        }
        return factory(w);
      };
  } else {
    factory(global);
  }

  // Pass this if window is not defined yet
})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {

  /**
   * @preserve HTML5 Shiv 3.7.3 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
   */
  !function (a, b) { function c(a, b) { var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement; return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild) } function d() { var a = t.elements; return "string" == typeof a ? a.split(" ") : a } function e(a, b) { var c = t.elements; "string" != typeof c && (c = c.join(" ")), "string" != typeof a && (a = a.join(" ")), t.elements = c + " " + a, j(b) } function f(a) { var b = s[a[q]]; return b || (b = {}, r++, a[q] = r, s[r] = b), b } function g(a, c, d) { if (c || (c = b), l) return c.createElement(a); d || (d = f(c)); var e; return e = d.cache[a] ? d.cache[a].cloneNode() : p.test(a) ? (d.cache[a] = d.createElem(a)).cloneNode() : d.createElem(a), !e.canHaveChildren || o.test(a) || e.tagUrn ? e : d.frag.appendChild(e) } function h(a, c) { if (a || (a = b), l) return a.createDocumentFragment(); c = c || f(a); for (var e = c.frag.cloneNode(), g = 0, h = d(), i = h.length; i > g; g++)e.createElement(h[g]); return e } function i(a, b) { b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) { return t.shivMethods ? g(c, a, b) : b.createElem(c) }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/[\w\-:]+/g, function (a) { return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")' }) + ");return n}")(t, b.frag) } function j(a) { a || (a = b); var d = f(a); return !t.shivCSS || k || d.hasCSS || (d.hasCSS = !!c(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), l || i(a, d), a } var k, l, m = "3.7.3", n = a.html5 || {}, o = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, q = "_html5shiv", r = 0, s = {}; !function () { try { var a = b.createElement("a"); a.innerHTML = "<xyz></xyz>", k = "hidden" in a, l = 1 == a.childNodes.length || function () { b.createElement("a"); var a = b.createDocumentFragment(); return "undefined" == typeof a.cloneNode || "undefined" == typeof a.createDocumentFragment || "undefined" == typeof a.createElement }() } catch (c) { k = !0, l = !0 } }(); var t = { elements: n.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video", version: m, shivCSS: n.shivCSS !== !1, supportsUnknownElements: l, shivMethods: n.shivMethods !== !1, type: "default", shivDocument: j, createElement: g, createDocumentFragment: h, addElements: e }; a.html5 = t, j(b), "object" == typeof module && module.exports && (module.exports = t) }("undefined" != typeof window ? window : this, document);

  /*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
  if ("document" in self) { if (!("classList" in document.createElement("_"))) { (function (j) { "use strict"; if (!("Element" in j)) { return } var a = "classList", f = "prototype", m = j.Element[f], b = Object, k = String[f].trim || function () { return this.replace(/^\s+|\s+$/g, "") }, c = Array[f].indexOf || function (q) { var p = 0, o = this.length; for (; p < o; p++) { if (p in this && this[p] === q) { return p } } return -1 }, n = function (o, p) { this.name = o; this.code = DOMException[o]; this.message = p }, g = function (p, o) { if (o === "") { throw new n("SYNTAX_ERR", "An invalid or illegal string was specified") } if (/\s/.test(o)) { throw new n("INVALID_CHARACTER_ERR", "String contains an invalid character") } return c.call(p, o) }, d = function (s) { var r = k.call(s.getAttribute("class") || ""), q = r ? r.split(/\s+/) : [], p = 0, o = q.length; for (; p < o; p++) { this.push(q[p]) } this._updateClassName = function () { s.setAttribute("class", this.toString()) } }, e = d[f] = [], i = function () { return new d(this) }; n[f] = Error[f]; e.item = function (o) { return this[o] || null }; e.contains = function (o) { o += ""; return g(this, o) !== -1 }; e.add = function () { var s = arguments, r = 0, p = s.length, q, o = false; do { q = s[r] + ""; if (g(this, q) === -1) { this.push(q); o = true } } while (++r < p); if (o) { this._updateClassName() } }; e.remove = function () { var t = arguments, s = 0, p = t.length, r, o = false, q; do { r = t[s] + ""; q = g(this, r); while (q !== -1) { this.splice(q, 1); o = true; q = g(this, r) } } while (++s < p); if (o) { this._updateClassName() } }; e.toggle = function (p, q) { p += ""; var o = this.contains(p), r = o ? q !== true && "remove" : q !== false && "add"; if (r) { this[r](p) } if (q === true || q === false) { return q } else { return !o } }; e.toString = function () { return this.join(" ") }; if (b.defineProperty) { var l = { get: i, enumerable: true, configurable: true }; try { b.defineProperty(m, a, l) } catch (h) { if (h.number === -2146823252) { l.enumerable = false; b.defineProperty(m, a, l) } } } else { if (b[f].__defineGetter__) { m.__defineGetter__(a, i) } } }(self)) } else { (function () { var b = document.createElement("_"); b.classList.add("c1", "c2"); if (!b.classList.contains("c2")) { var c = function (e) { var d = DOMTokenList.prototype[e]; DOMTokenList.prototype[e] = function (h) { var g, f = arguments.length; for (g = 0; g < f; g++) { h = arguments[g]; d.call(this, h) } } }; c("add"); c("remove") } b.classList.toggle("c3", false); if (b.classList.contains("c3")) { var a = DOMTokenList.prototype.toggle; DOMTokenList.prototype.toggle = function (d, e) { if (1 in arguments && !this.contains(d) === !e) { return e } else { return a.call(this, d) } } } b = null }()) } };


  Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
      "M+": this.getMonth() + 1, //月份
      "d+": this.getDate(), //日
      "h+": this.getHours(), //小时
      "m+": this.getMinutes(), //分
      "s+": this.getSeconds(), //秒
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度
      "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  };


  var Domain = 'https://open.ys7.com';
  var logDomain = 'https://log.ys7.com/statistics.do';

  // 当前页面是否是https协议
  var isHttps = window.location.protocol === 'https:' ? true : false;
  // 是否为移动端
  var isMobile = !!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|ios|SymbianOS)/i);
  var testVideo = document.createElement('video');
  // 是否支持video标签和addEventListener方法（主要为了区别ie8）
  var isModernBrowser = !!testVideo.canPlayType && !!window.addEventListener;
  // 是否能使用video原生播放hls，目前只有safari可以支持原生video播放。
  var isNativeSupportHls = isModernBrowser && testVideo.canPlayType('application/vnd.apple.mpegURL');
  // 是否能使用hls.js播放
  var isSupportHls = false;
  // 是否使用flash
  var useFlash = false;
  // 初始化播放时间
  var playStartTime = new Date().getTime();
  // 本地信息上报
  var LOCALINFO = 'open_netstream_localinfo';
  // 预览主表上报
  var PLAY_MAIN = 'open_netstream_play_main';
  // 日志上报（轻应用独立上报）
  var LOCALINFO_EZUIKIT = 'open_ezuikit_localinfo';
  var PERFORMANCE_EZUIKIT = 'open_ezuikit_performance';
  var appKey = "";

  function dclog(obj) {
    var domain = window.location.protocol + '//' + window.location.host;
    var logObj = {
      Ver: 'v.2.6.5',
      PlatAddr: domain,
      ExterVer: 'Ez.2.6.5',
      OpId: uuid(),
      CltType: 102,
      AppId: appKey,
      StartTime: (new Date()).Format('yyyy-MM-dd hh:mm:ss.S'),  // 每个日志包含当前的时间
      OS: navigator.platform
    }
    for (var i in obj) {
      logObj[i] = obj[i];
    }

    var tempArray = [];
    for (var j in logObj) {
      tempArray.push(j + '=' + logObj[j]);
    }
    var params = '?' + tempArray.join('&');
    // 上报一次本地统计信息
    var img = new Image();
    img.src = logDomain + params;
  }
  // 日志上报-2019-09-10
  function ezuikitDclog(obj) {
    var domain = window.location.protocol + '//' + window.location.host;
    var logObj = {
      version: 'v.2.6.5',
      plate_addr: domain,
      appId: appKey,
      st: new Date().getTime(),  // 每个日志包含当前的时间
    }
    for (var i in obj) {
      logObj[i] = obj[i];
    }

    var tempArray = [];
    for (var j in logObj) {
      tempArray.push(j + '=' + logObj[j]);
    }
    var params = '?' + tempArray.join('&');
    // 上报一次本地统计信息
    var img = new Image();
    img.src = logDomain + params;
  }
// 加载js
function addJs(filepath, callback) {
  var headerScript = document.getElementsByTagName('head')[0].getElementsByTagName("script");
  var isReady = false;

  for (var i = 0; i < headerScript.length; i++) {
    if (headerScript[i].getAttribute("src") == filepath) {
      isReady = true;
      callback();
    }
  }
  if (!isReady) {
    var oJs = document.createElement("script");
    oJs.setAttribute("src", filepath);
    oJs.onload = callback;
    document.getElementsByTagName("head")[0].appendChild(oJs);
  }
}
function addCss(filepath, callback) {
  var headerLink = document.getElementsByTagName('head')[0].getElementsByTagName("link");
  var isReady = false;

  for (var i = 0; i < headerLink.length; i++) {
    if (headerLink[i].getAttribute("href") == filepath) {
      isReady = true;
    }
  }

  if (!isReady) {
    var oJs = document.createElement('link');
    oJs.rel = 'stylesheet';
    oJs.type = 'text/css';
    oJs.href = filepath;
    oJs.onload = callback;
    document.getElementsByTagName("head")[0].appendChild(oJs);
  }
}
  // 通用请求方法
  function request(url, method, params, header, success, error) {
    var _url = url;
    var http_request = new XMLHttpRequest();
    http_request.onreadystatechange = function () {
      if (http_request.readyState == 4) {
        if (http_request.status == 200) {
          if (isJSON(http_request.responseText)) {
            var _data = JSON.parse(http_request.responseText);
            success(_data);
          } else {
            success(http_request.responseText)
          }
        }
      }
    };
    http_request.open(method, _url, true);
    // http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var data = new FormData();
    for (var i in params) {
      data.append(i, params[i]);
    }
    http_request.send(data);
  };
  /** 获取url参数 */
  function getQueryString(name, url) { var r = new RegExp("(\\?|#|&)" + name + "=(.*?)(#|&|$)"); var m = (url || location.href).match(r); return decodeURIComponent(m ? m[2] : ''); }
  /** 判断是否为promise对象 */
  function isPromise(obj) { return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function'; }
  /** 生成uuid */
  function uuid() { var s = []; var hexDigits = "0123456789abcdef"; for (var i = 0; i < 36; i++) { s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1) }; s[14] = "4"; s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); s[8] = s[13] = s[18] = s[23] = "-"; var uuid = s.join(""); return uuid; }
  /**获取浏览器名称，版本 */
  function getBrowserInfo() { var Sys = {}; var ua = navigator.userAgent.toLowerCase(); var re = /(msie|firefox|chrome|opera|version).*?([\d.]+)/; var m = ua.match(re); try { Sys.browser = m[1].replace(/version/, "'safari"); Sys.ver = m[2]; } catch (e) { console.log("getBrowserInfo fail.") } return Sys; }
  /** 是否为JSON格式字符串 */
  function isJSON(str) { if (typeof str == 'string') { try { var obj = JSON.parse(str); if (typeof obj == 'object' && obj) { return true; } else { return false; } } catch (e) { return false; } } console.log('It is not a string!') }
  /** insertAfter */
  function insertAfter(newElement, targetElement) { var parent = targetElement.parentNode; if (parent.lastChild == targetElement) { parent.appendChild(newElement); } else { parent.insertBefore(newElement, targetElement.nextSibling); } }

  
  
  var EZUIPlayer = function (playParams) {
    if (!isModernBrowser) {
      throw new Error('不支持ie8等低版本浏览器');
      return;
    }
    /**定义播放配置项 */
    this.opt = {};
    this.opt.sources = [];
    this.handlers = {};

    // 修订 - 支持JS Decoder 允许非字符串配置项
    // if (typeof playParams === 'object' && playParams.hasOwnProperty('decoderPath')) {
      if (typeof playParams.audioId === 'undefined') {
        playParams["audioId"] = 0;
      }
      this.playParams = playParams;
      /* 校验播放器配置参数合法性 */
      var oS = document.createElement('style');
      document.getElementsByTagName("head")[0].appendChild(oS);
      oS.innerHTML = '.draw-window {border: none!important}';
      // 解码器路径
      if (typeof playParams.decoderPath !== 'string' || typeof playParams.decoderPath === 'undefined') {
        throw new Error('EZUIDecoder requires the path of decoder');
        return;
      }
      // Id
      if (typeof playParams.id !== 'string' || typeof playParams.id === 'undefined') {
        throw new Error('EZUIDecoder requires parameter id');
        return;
      }
      if (typeof playParams.url !== 'string' || typeof playParams.url === 'undefined') {
        throw new Error('EZUIDecoder requires parameter url');
        return;
      }
      // 状态提示
      this.loadingStart = function () {
        var oS = document.createElement('style');
        document.getElementsByTagName("head")[0].appendChild(oS);
        oS.innerHTML = '@keyframes antRotate {to {transform: rotate(400deg);transform-origin:50% 50%;}} .loading {display: inline-block;z-index: 1000;-webkit-animation: antRotate 1s infinite linear;animation: antRotate 1s infinite linear;}';
        if (playParams && playParams.id) {
          var domId = playParams.id;
          var domElement = document.getElementById(domId);
          var windowWidth = domElement.offsetWidth;
          var windowHeight = domElement.offsetHeight || playParams.height || 400;
          var offsetTop = domElement.offsetTop;
          var offsetLeft = domElement.offsetLeft;
          // 先执行清空loading
          if (document.getElementById('loading-id-0')) {
            document.getElementById('loading-id-0').parentNode.removeChild(document.getElementById('loading-id-0'))
          }
          var loadingContainerDOM = document.createElement('div');
          loadingContainerDOM.setAttribute('id', 'loading-id-0');
          var style = 'position:absolute;outline:none;'
          style += 'width: 0px;'
          style += 'height: 0px;'
          style += 'top:' + offsetTop + 'px;'
          style += 'left:' + offsetLeft + 'px;'

          loadingContainerDOM.setAttribute('style', style);
          var loadingContainer = document.getElementById("loading-id-0");
          loadingContainerDOM.style.height = windowHeight;

          loadingContainerDOM.setAttribute('class', 'loading-container');
          // loadingContainerDOM.innerHTML= loading;


          insertAfter(loadingContainerDOM, domElement);

          var splitBasis = playParams.splitBasis || 1;
          var windowLength = playParams.url.split(",").length;
          for (var i = 0; i < windowLength; i++) {
            var loadingContainer = document.createElement('div');
            var loadingStatusDOM = document.createElement('div');
            loadingContainer.setAttribute('class', 'loading-item');
            loadingContainer.setAttribute('id', 'loading-item-' + i);
            //loadingContainer.setAttribute('style','display:inline-flex;flex-direction:column;justify-content:center;align-items: center;width:'+(windowWidth / splitBasis)+'px;height:'+(windowHeight /splitBasis )+'px;outline:none;vertical-align: top;position:absolute');
            var style = 'display:inline-flex;flex-direction:column;justify-content:center;align-items: center;width:' + (windowWidth / splitBasis) + 'px;height:' + (windowHeight / splitBasis) + 'px;outline:none;vertical-align: top;position:absolute;';
            style += ('left:' + calLoadingPostion(windowHeight, windowWidth, splitBasis, i).left + 'px;');
            style += ('top:' + calLoadingPostion(windowHeight, windowWidth, splitBasis, i).top + 'px;');
            loadingContainer.setAttribute('style', style);
            function calLoadingPostion(windowHeight, windowWidth, splitBasis, i) {
              var top = parseInt(i / splitBasis, 10) * (windowHeight / splitBasis);
              var left = (i % splitBasis) * (windowWidth / splitBasis);
              return {
                top: top,
                left: left
              }
            }
            var loadingDOM = document.createElement('div');
            loadingStatusDOM.innerHTML = "";
            loadingStatusDOM.style.color = "#fff";
            loadingDOM.setAttribute('class', 'loading');
            var loading = '<svg t="1567069979438" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2399" width="32" height="32"><path d="M538.5344 266.4448a133.12 133.12 0 1 1 133.12-133.12 133.4272 133.4272 0 0 1-133.12 133.12zM255.0144 372.1984a121.6768 121.6768 0 1 1 121.6768-121.6768 121.856 121.856 0 0 1-121.6768 121.6768zM134.72 647.424a107.3664 107.3664 0 1 1 107.3664-107.264A107.52 107.52 0 0 1 134.72 647.424z m120.32 272.4608a90.9824 90.9824 0 1 1 90.9824-90.9824A91.1616 91.1616 0 0 1 255.04 919.8848zM538.5344 1024a79.36 79.36 0 1 1 79.36-79.36 79.36 79.36 0 0 1-79.36 79.36z m287.6928-134.144a64.1792 64.1792 0 1 1 64.1792-64.1792 64.3584 64.3584 0 0 1-64.1792 64.1792z m117.76-296.704a52.6336 52.6336 0 1 1 52.6592-52.6336 52.608 52.608 0 0 1-52.6336 52.6336z m-158.72-338.7136a40.96 40.96 0 1 1 12.0064 28.8512 40.5248 40.5248 0 0 1-12.0064-28.8512z" fill="#ffffff" p-id="2400"></path></svg>';
            if (playParams.loading && playParams.loading.svg) {
              loading = playParams.loading.svg;
            }
            loadingDOM.innerHTML = loading;
            loadingContainer.appendChild(loadingDOM);
            // loadingContainer.appendChild(loading);
            loadingContainer.appendChild(loadingStatusDOM);
            loadingContainerDOM.appendChild(loadingContainer)
          }
        }

      }
      this.loadingSet = function (index, opt) {
        var loadingContainer = document.getElementById('loading-id-0');
        if (document.getElementById('loading-item-' + index)) {
          var textElement = document.getElementById('loading-item-' + index).childNodes[1];
          textElement.innerHTML = opt.text;
          if (opt.color) {
            textElement.style.color = opt.color;
          }
        }
      }
      this.loadingSetIcon = function (i, type) {
        var _this = this;
        if (playParams && playParams.id) {
          var domId = playParams.id;
          var domElement = document.getElementById(domId);
          var windowWidth = domElement.offsetWidth;
          var windowHeight = domElement.offsetHeight || playParams.height || 400;
          var offsetTop = domElement.offsetTop;
          var offsetLeft = domElement.offsetLeft;
          // 先执行清空loading
          if (document.getElementById('loading-id-0')) {
            document.getElementById('loading-id-0').parentNode.removeChild(document.getElementById('loading-id-0'))
          }
          var loadingContainerDOM = document.createElement('div');
          loadingContainerDOM.setAttribute('id', 'loading-id-0');
          var style = 'position:absolute;outline:none;'
          style += 'width: 0px;'
          style += 'height: 0px;'
          style += 'top:' + offsetTop + 'px;'
          style += 'left:' + offsetLeft + 'px;'

          loadingContainerDOM.setAttribute('style', style);
          var loadingContainer = document.getElementById("loading-id-0");
          loadingContainerDOM.style.height = windowHeight;

          loadingContainerDOM.setAttribute('class', 'loading-container');
          insertAfter(loadingContainerDOM, domElement);

          var splitBasis = playParams.splitBasis || 1;
          var windowLength = playParams.url.split(",").length;
          var loadingContainer = document.createElement('div');
          var loadingStatusDOM = document.createElement('div');
          loadingContainer.setAttribute('class', 'loading-item');
          loadingContainer.setAttribute('id', 'loading-item-' + i);
          //loadingContainer.setAttribute('style','display:inline-flex;flex-direction:column;justify-content:center;align-items: center;width:'+(windowWidth / splitBasis)+'px;height:'+(windowHeight /splitBasis )+'px;outline:none;vertical-align: top;position:absolute');
          var style = 'display:inline-flex;flex-direction:column;justify-content:center;align-items: center;width:' + (windowWidth / splitBasis) + 'px;height:' + (windowHeight / splitBasis) + 'px;outline:none;vertical-align: top;position:absolute;';
          style += ('left:' + calLoadingPostion(windowHeight, windowWidth, splitBasis, i).left + 'px;');
          style += ('top:' + calLoadingPostion(windowHeight, windowWidth, splitBasis, i).top + 'px;');
          loadingContainer.setAttribute('style', style);
          function calLoadingPostion(windowHeight, windowWidth, splitBasis, i) {
            var top = parseInt(i / splitBasis, 10) * (windowHeight / splitBasis);
            var left = (i % splitBasis) * (windowWidth / splitBasis);
            return {
              top: top,
              left: left
            }
          }
          var loadingDOM = document.createElement('div');
          loadingStatusDOM.innerHTML = "";
          loadingStatusDOM.style.color = "#fff";
          loadingDOM.setAttribute('class', type);
          var icon = '';
          switch (type) {
            case 'retry':
              icon = '<svg t="1590935684181" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1623" width="32" height="32"><path d="M972.8 102.4c-30.72 0-51.2 20.48-51.2 51.2v51.2c-51.2-71.68-122.88-128-204.8-158.72C460.8-66.56 158.72 51.2 46.08 307.2S51.2 865.28 307.2 977.92 865.28 972.8 977.92 716.8H972.8c0-30.72-20.48-51.2-51.2-51.2s-51.2 20.48-51.2 51.2h-5.12c-46.08 76.8-112.64 138.24-199.68 174.08-209.92 87.04-445.44-15.36-532.48-225.28S148.48 215.04 358.4 133.12c189.44-81.92 404.48 0 506.88 174.08H768c-30.72 0-51.2 20.48-51.2 51.2s20.48 51.2 51.2 51.2h204.8c30.72 0 51.2-20.48 51.2-51.2V153.6c0-30.72-20.48-51.2-51.2-51.2z" p-id="1624" fill="#ffffff"></path></svg>';
              loadingDOM.style.cursor = 'pointer';
              loadingDOM.onclick = function () {
                console.log("点击重试", i);
                // _this.loadingStart();
                _this.play(i);
              }
              break;
          }

          loadingDOM.innerHTML = icon;
          loadingContainer.appendChild(loadingDOM);
          loadingContainer.appendChild(loadingStatusDOM);
          loadingContainerDOM.appendChild(loadingContainer)

        }
      }
      this.loadingEnd = function (index) {
        var loadingItemContainerDOM = document.getElementById('loading-item-' + index);
        if (loadingItemContainerDOM) {
          loadingItemContainerDOM.parentNode.removeChild(loadingItemContainerDOM);
          var loadingContainerDOM = document.getElementById('loading-id-0');
          if (loadingContainerDOM && loadingContainerDOM.children.length === 0) {
            loadingContainerDOM.parentNode.removeChild(loadingContainerDOM);
          }
        }
      }
      // 将播放地址配置在实例 opt 属性中
      this.opt.sources.push(playParams.url);
      // JSDecoder  只有一个播放地址
      this.opt.currentSource = this.opt.sources[0];

      /* 获取解码器用户配置项 - 开始 */
      /** 
       * 调试模式配置
       * 可通过dev属性指定API服务域名
       */
      var domain = "https://open.ys7.com";
      if (playParams.env) {
        var environmentParams = playParams.env;
        domain = environmentParams.domain;
      }

      /** 创建jSPlugin 对象 */
      this.jSPlugin = {};
      var _this = this;
      /** 根据播放参数获取真实播放地址 */
      this.loadingStart();
      playStartTime = new Date().getTime();
      // var getRealUrl = this.getRealUrl(playParams);
      var initDecoder = this.initDecoder(playParams);
      // 初始化播放器
      _this.loadingSet(0, { text: _this.opt.domain !== 'open' ? 'Initialize the player...' : '初始化播放器...' });
      if (isPromise(initDecoder)) {
        initDecoder.then(function (data) {
          _this.loadingSet(0, { text: _this.opt.domain !== 'open' ? 'Initialization is complete' : '初始化完成' });
          _this.loadingEnd(0);
          if(playParams.autoplay){
            setTimeout(function () {
              _this.play();
            }, 2000)
          }
        })
      }

    /* 创建播放，错误，停止事件钩子，上报用户行为 */
    this.handlers = {};
    this.initTime = (new Date()).getTime();
    this.on('play', function () {
      // 上报播放成功信息
      dclog({
        systemName: PLAY_MAIN,
        playurl: this.opt.currentSource,
        Time: (new Date()).Format('yyyy-MM-dd hh:mm:ss.S'),
        Enc: 0,  // 0 不加密 1 加密
        PlTp: 1,  // 1 直播 2 回放
        Via: 911,  // 2 私有流 911 标准流
        ErrCd: 0,
        OpId: uuid(),
        Cost: (new Date()).getTime() - this.initTime  // 毫秒数
      });
    });
    this.retry = 2;
    this.on('error', function () {
      dclog({
        systemName: PLAY_MAIN,
        playurl: this.opt.currentSource,
        cost: -1,
        ErrCd: -1,
        Via: 911,  // 2 私有流 911 标准流
        OpId: uuid(),
      });
    });
    var deviceSerial = '';
    var playUid = '';
    var accessToken = '';
    var uuidReg = /[a-z0-9]{32}/;
    var deviceSerialReg = /[a-zA-Z0-9]{9}\/[0-9]{0,2}\./;
    if (typeof playParams === 'string') {
      var url = this.opt.currentSource;
      if (uuidReg.test(url)) {
        playUid = url.match(uuidReg)[0];
      } else if (deviceSerialReg.test(url)) {
        deviceSerial = url.match(deviceSerialReg)[0].split('/')[0];
      }
    } else if (typeof playParams === 'object') {
      var url = playParams.url;
      if (uuidReg.test(url)) {
        playUid = url.match(uuidReg);
      } else if (deviceSerialReg.test(url)) {
        deviceSerial = url.match(deviceSerialReg)[0].split('/')[0];
      }
      if (playParams.accessToken) {
        accessToken = playParams.accessToken;
      }
    }
    if(domain === "https://open.ys7.com"){
      var appInfoSuccess = function (data) {
        if (data.retcode === 0 && data.data) {
          appKey = data.data.appKey;
        }
        // 上报一次本地信息
        dclog({
          systemName: LOCALINFO,
        });
        // 上报一次本地信息-新
        ezuikitDclog({
          systemName: LOCALINFO_EZUIKIT,
          os: navigator.platform,
          browser: JSON.stringify(getBrowserInfo()),
        })
      }
      var appInfoError = function (error) {
        // 上报一次本地信息
        dclog({
          systemName: LOCALINFO
        });
        // 上报一次本地信息-新
        ezuikitDclog({
          systemName: LOCALINFO_EZUIKIT,
          os: navigator.platform,
          browser: JSON.stringify(getBrowserInfo()),
        })
      }
    // 获取appKey
      request(domain + '/jssdk/ezopen/getAppInfo?uuid=' + playUid + '&accessToken=' + accessToken + "&deviceSerial=" + deviceSerial + "&channelNo=1",
        'GET',
        '',
        '',
        appInfoSuccess,
        appInfoError
      );
    }
    // 全屏变化回调
    function fullscreenchange(data) {
      if(!data) {
        _this.jSPlugin.JS_Resize(_this.playParams.width, _this.playParams.height);
      }else {
        _this.jSPlugin.JS_Resize(document.documentElement.clientWidth , document.documentElement.clientHeight);
      }
    }
    if (typeof document.fullScreen !== "undefined") {
      document.addEventListener("fullscreenchange", function() {
        var e = document.fullscreen || false;
        fullscreenchange(e)
      })
    } else if (typeof document.webkitIsFullScreen !== "undefined") {
      document.addEventListener("webkitfullscreenchange", function() {
        var e = document.webkitIsFullScreen || false;
        console.log("EEEEEE-1",e);
        fullscreenchange(e)
      })
    } else if (typeof document.mozFullScreen !== "undefined") {
      document.addEventListener("mozfullscreenchange", function() {
        var e = document.mozFullScreen || false;
        fullscreenchange(e)
      })
    }
  };

  // 事件监听
  EZUIPlayer.prototype.on = function (eventName, callback) {
    if (typeof eventName !== 'string' || typeof callback !== 'function') {
      return;
    }
    if (typeof this.handlers[eventName] === 'undefined') {
      this.handlers[eventName] = [];
    }
    this.handlers[eventName].push(callback);
  };

  // 事件触发
  EZUIPlayer.prototype.emit = function () {
    if (this.handlers[arguments[0]] instanceof Array) {
      var handlers = this.handlers[arguments[0]];
      var l = handlers.length;
      for (var i = 0; i < l; i++) {
        handlers[i].apply(this, Array.prototype.slice.call(arguments, 1));
      }
    }
  };
  // 日志
  EZUIPlayer.prototype.log = function (msg, className) {
    this.emit('log', msg, className);
  };

  EZUIPlayer.prototype.getRealUrl = function (playParams) {
    var _this = this;
    var apiDomain = 'https://open.ys7.com';
    /** jsDecoder 获取真实地址 -- 开始 */
      if(playParams.url.split(",")[0].indexOf('open.ezviz.com') !==-1){ ///海外
        var host = "https://open.ys7.com";
        var hostName =  playParams.url.split(",")[0].match(/ezopen:\/\/(\S*)\.ezviz\.com/)[1];
        if (playParams.env) {
          var environmentParams = playParams.env;
          domain = environmentParams.domain;
          if(domain.match(/https:\/\/(\S*)\.ezviz(\S*)\.com/)) {
            hostName = domain.match(/https:\/\/(\S*)\.ezviz(\S*)\.com/)[1];
          }
        }
        if(hostName.indexOf("@")!== -1){
          hostName = hostName.split("@")[1];
        }
        switch (hostName){
          case 'isgpopen':
            host = "https://isgpopen.ezvizlife.com";
            break;
          case 'ieuopen':
            host = "https://ieuopen.ezvizlife.com";
            break;
          case 'isaopen':
            host = "https://isaopen.ezvizlife.com";
            break;
          case 'irusopen':
            host = "https://irusopen.ezvizru.com";
            break;
          case 'testusopen':
            host = "https://testusopen.ezvizlife.com";
            break;
        }
        apiDomain = host;
      }
      if (playParams && playParams.env) {
        apiDomain = playParams.env.domain;
      }
      // api 获取真实地址开始时间
      var getRealUrlDurationST = new Date().getTime();
      var getRealUrlPromise = function (resolve, reject, ezopenURL) {
        var realUrl = '';
        if (!/^ezopen:\/\//.test(ezopenURL)) { // JSDecoder ws协议播放
          resolve(ezopenURL);
        } else {
          // 向API请求真实地址
          var apiUrl = apiDomain + "/api/lapp/live/url/ezopen";
          var apiSuccess = function (data) {
            if (data.code == 200 || data.retcode == 0) {
              var playUrl ="";
              if(data.ext && data.ext.token){
                realUrl += data.data;
                stream = data.ext.token;
                playUrl = data.data;
              }else if(data.data && data.data.token) {
                realUrl += data.data.url;
                stream = data.data.token;
                playUrl = data.data.url;
              }
              var type= playParams.url.indexOf('live') !== -1 ? 'live' : 'playback';
              if(type === 'live'){
                realUrl = realUrl + '&ssn=' + stream + '&auth=1&biz=4&cln=100' ;
              }else {
                realUrl = realUrl + '&ssn=' + stream + '&auth=1&cln=100';
              }
              console.log(realUrl)

              /**参数容错处理  start*/
              if (playUrl.indexOf('playback') !== -1) { //回放
                var wsBegin = getQueryString('begin', playUrl) || getQueryString('begin', playParams.url);
                var wsEnd = getQueryString('end', playUrl) || getQueryString('end', playParams.url);
                // 兼容各种时间格式
                if (!wsBegin) {
                  var defaultDate = new Date();
                  realUrl = realUrl + '&begin=' + defaultDate.Format('yyyyMMdd') + 'T000000Z';
                } else {
                  realUrl = realUrl.replace('&begin=' + getQueryString('begin', playUrl), '&begin=' + formatRecTime(wsBegin, '000000'))
                  if(!getQueryString('begin',realUrl)){
                    realUrl += '&begin=' + formatRecTime(wsBegin, '000000');
                  }
                }
                if (!wsEnd) {
                  realUrl = realUrl + '&end=' + formatRecTime(getQueryString('begin', realUrl).substr(0, 8), '235959');
                } else {
                  realUrl = realUrl.replace('&end=' + getQueryString('end', playUrl), '&end=' + formatRecTime(wsEnd, '235959'))
                  if(!getQueryString('end',realUrl)){
                    realUrl += '&end=' + formatRecTime(wsEnd, '235959');
                  }
                }
                // api错误处理
                if (!getQueryString('stream', playUrl)) {
                  realUrl = realUrl.replace('stream', '&stream');
                }
                if (playParams.url.indexOf('.cloud') !== -1) {
                  // 调用回放API接口获取回放片段 - start
                  var recBegin = reRormatRecTime(getQueryString('begin', realUrl));
                  var recEnd = reRormatRecTime(getQueryString('end', realUrl));
                  var deviceSerial = getQueryString('serial', realUrl)
                  var channelNo = getQueryString('chn', realUrl);

                  var recSliceUrl = apiDomain + "/api/lapp/video/by/time";
                  var recSliceParams = {
                    accessToken: playParams.accessToken,
                    recType: 1,
                    deviceSerial: deviceSerial,
                    channelNo: channelNo,
                    startTime: recBegin,
                    endTime: recEnd,
                    version: '2.0'
                  }
                  function recAPISuccess(data) {
                    if (data.code == 200) {
                      var recSliceArr = [];
                      if (data.data && data.data.files && data.data.files.length > 0) {
                        var dataArr = data.data.files;
                        var nextFileTime = new Date().getTime();
                        var isAll = data.data.isAll;
                        // mock
                        // var number = 0;
                        //isAll = false;
                        if (isAll) {
                          recSliceArr = recSliceArrFun(dataArr);
                          var recSliceArrJSON = JSON.stringify(recSliceArr).replace('\\', '');
                          realUrl += ('&recSlice=' + recSliceArrJSON.replace('\\', '')) + '&r='+ Math.random();
                          resolve(realUrl);
                        } else {
                          recTransaction();
                          // 云存储回调事务
                          function recTransaction() {
                            function recAPIV2Success(data) {
                              if (data.data && data.data.files && data.data.files.length > 0) {
                                //if(number < 2 ) {
                                if(data.data.isAll == false) {
                                  if(data.data.files){
                                    dataArr = dataArr.concat(data.data.files);
                                  }
                                  nextFileTime = data.data.nextFileTime > 0 ? data.data.nextFileTime : new Date().getTime();
                                  recTransaction();
                                } else {
                                  recSliceArr = recSliceArrFun(dataArr);
                                  var recSliceArrJSON = JSON.stringify(recSliceArr).replace('\\', '');
                                  realUrl += ('&recSlice=' + recSliceArrJSON.replace('\\', '')) + '&r='+ Math.random();
                                  resolve(realUrl);
                                }
                              // mock
                              //number = number + 1;
                              } else {
                                recSliceArr = recSliceArrFun(dataArr);
                                var recSliceArrJSON = JSON.stringify(recSliceArr).replace('\\', '');
                                realUrl += ('&recSlice=' + recSliceArrJSON.replace('\\', '')) + '&r='+ Math.random();
                                resolve(realUrl);
                              }
                            }
                            function recAPIV2Error (err) {
                              console.log(err);
                            }
                            recSliceParams.startTime = nextFileTime;
                            request(recSliceUrl, 'POST', recSliceParams, '', recAPIV2Success, recAPIV2Error);
                          }
                        }
                      } else {
                        _this.log('未找到录像片段', 'error');
                        _this.loadingSet(0, { text:  _this.opt.domain !== 'open' ? 'Get device live view address' : '获取设备播放地址' })
                        resolve(JSON.stringify({ code: -1, msg: _this.opt.domain !== 'open' ? 'Not found video clips' : "未找到录像片段" }))
                        // reject('未找到录像片段');
                      }
                    } else {
                      _this.log(data.msg, 'error');
                      _this.loadingSet(0, { text:  _this.opt.domain !== 'open' ? 'Get device live view address complete' : '获取设备播放地址' });
                      resolve(JSON.stringify({ code: -1, msg: _this.opt.domain !== 'open' ? 'Not found video clips' : "未找到录像片段" }))
                      //reject('未找到录像片段');
                    }
                    function recSliceArrFun(data) {
                      var downloadPathArr = [];
                      var currentDP = downloadPathArr.length
                      data.forEach(function (item, index) {
                        if (downloadPathArr.length == 0 || (item.downloadPath !== downloadPathArr[downloadPathArr.length - 1].downloadPath)) {
                          downloadPathArr.push({
                            downloadPath: item.downloadPath,
                            ownerId: item.ownerId,
                            iStorageVersion: item.iStorageVersion,
                            videoType: item.videoType,
                            iPlaySpeed: 0,
                            startTime: item.startTime,
                            endTime: item.endTime
                          })
                        } else {
                          downloadPathArr[downloadPathArr.length - 1].endTime = item.endTime;
                        }
                      })
                      return downloadPathArr;
                    }
                  }
                  function recAPIError(err) {
                    console.log("获取回放片段错误")
                  }
                  request(recSliceUrl, 'POST', recSliceParams, '', recAPISuccess, recAPIError);

                } else {// 本地回放
                  //alarm rec - start
                  if (playParams.url.indexOf('alarmId') !== -1) {
                    console.log("进入alarmId回放")
                    // 调用回放API接口获取回放片段 - start
                    var alarmId = getQueryString('alarmId', realUrl)
                    var recBegin = reRormatRecTime(getQueryString('begin', realUrl));
                    var recEnd = reRormatRecTime(getQueryString('end', realUrl));
                    var deviceSerial = getQueryString('serial', realUrl)
                    var channelNo = getQueryString('chn', realUrl);

                    var recSliceUrl = apiDomain + "/api/lapp/video/by/id";
                    var recSliceParams = {
                      accessToken: playParams.accessToken,
                      // recType: 1,
                      deviceSerial: deviceSerial,
                      channelNo: channelNo,
                      alarmId: alarmId,
                      // startTime:recBegin,
                      // endTime:recEnd
                    }
                    function recAPISuccess(data) {
                      if (data.code == 200) {
                        var recSliceArr = [];
                        if (data.data) {
                          recSliceArr = recSliceArrFun([data.data]);
                          var recSliceArrJSON = JSON.stringify(recSliceArr).replace('\\', '');
                          realUrl += ('&recSlice=' + recSliceArrJSON.replace('\\', ''));
                          console.log("realUrl", realUrl, data.data.recType);
                          if (data.data.recType == 1) {
                            realUrl = realUrl.replace('/playback', '/cloudplayback')
                          } else {
                            realUrl = realUrl.replace('/cloudplayback', '/playback')

                          }
                          _this.opt.sources[0] = realUrl;
                          resolve(realUrl);
                          // request(nodeUrl, 'GET', '', '', nodeSuccess, nodeError);
                        } else {
                          _this.log('未找到录像片段', 'error');
                          _this.loadingSet(0, { text:  _this.opt.domain !== 'open' ? 'Get device live view address' : '获取设备播放地址' })
                          resolve(JSON.stringify({ code: -1, msg:_this.opt.domain !== 'open' ? 'Not found video clips' :  "未找到录像片段" }))
                          // reject('未找到录像片段');
                        }
                      } else {
                        _this.log(data.msg, 'error');
                        _this.loadingSet(0, { text:  _this.opt.domain !== 'open' ? 'Get device live view address' : '获取设备播放地址' });
                        resolve(JSON.stringify({ code: -1, msg: _this.opt.domain !== 'open' ? 'Not found video clips' : "未找到录像片段" }))
                        //reject('未找到录像片段');
                      }
                      function recSliceArrFun(data) {
                        var downloadPathArr = [];
                        var currentDP = downloadPathArr.length
                        data.forEach(function (item, index) {
                          if (downloadPathArr.length == 0 || (item.downloadPath !== downloadPathArr[downloadPathArr.length - 1].downloadPath)) {
                            downloadPathArr.push({
                              downloadPath: item.downloadPath,
                              ownerId: item.ownerId,
                              iStorageVersion: item.iStorageVersion,
                              videoType: item.videoType,
                              iPlaySpeed: 0,
                              startTime: item.startTime,
                              endTime: item.endTime
                            })
                          } else {
                            downloadPathArr[downloadPathArr.length - 1].endTime = item.endTime;
                          }
                        })
                        console.log("downloadPathArr", downloadPathArr)
                        return downloadPathArr;
                      }
                    }
                    function recAPIError(err) {
                      console.log("获取回放片段错误")
                    }
                    request(recSliceUrl, 'POST', recSliceParams, '', recAPISuccess, recAPIError);
                  } else {
                    // arlar rec - end
                  // request(nodeUrl, 'GET', '', '', nodeSuccess, nodeError);
                  resolve(realUrl);
                  }
                }

              } else {
                // 预览直接获取回放片段
                // request(nodeUrl, 'GET', '', '', nodeSuccess, nodeError);
                resolve(realUrl);
              }
              getPlayTokenST = new Date().getTime();
              // 执行一次API服务请求上报
              var getRealUrlDurationET = new Date().getTime();
              ezuikitDclog({
                systemName: PERFORMANCE_EZUIKIT,
                bn: 0,
                browser: JSON.stringify(getBrowserInfo()),
                duration: getRealUrlDurationET - getRealUrlDurationST,
                rt: 200,
              })
            } else {
              // 将错误信息捕获到用户自定义错误回调中
              if (playParams && playParams.handleError) {
                playParams.handleError(Object.assign({retcode: data.code || -1,msg: data.msg || '其他错误'}));
              }
              // 执行一次API服务请求服务错误上报
              var getRealUrlDurationET = new Date().getTime();
              ezuikitDclog({
                systemName: PERFORMANCE_EZUIKIT,
                bn: 0,
                browser: JSON.stringify(getBrowserInfo()),
                duration: getRealUrlDurationET - getRealUrlDurationST,
                rt: data.code || 500,
                msg: data.msg || '未知服务错误'
              })
              resolve(JSON.stringify(data), 'error')
              //throw new Error('获取播放设备信息失败');
            }
            /**参数容错处理  end*/
          }
          var apiError = function (error) {
            // 将错误信息捕获到用户自定义错误回调中
            if (playParams && playParams.handleError) {
              playParams.handleError(Object.assign({retcode: error.code || -1,msg: error.msg || '其他错误'}));
            }
            var getRealUrlDurationET = new Date().getTime();
            ezuikitDclog({
              systemName: PERFORMANCE_EZUIKIT,
              bn: 0,
              browser: JSON.stringify(getBrowserInfo()),
              duration: getRealUrlDurationET - getRealUrlDurationST,
              rt: 500,
              msg: data.msg || '网络错误'
            })
            resolve(JSON.stringify(error))
            //throw new Error('获取播放设备信息失败');
          }
          var isHttp = 'false';
          // if (playParams && playParams.env && playParams.env.domain) {
          //   isHttp = playParams.env.domain.indexOf('https') !== -1 ? 'false' : 'true';
          // } else {
          //   isHttp = window.location.href.indexOf('https') !== -1 ? 'false' : 'true';
          // }
          var apiParams = {
            ezopen: ezopenURL,
            userAgent: window.navigator.userAgent,
            isFlv: false,
            addressTypes: null,
            isHttp: isHttp,
            accessToken: playParams.accessToken,
          }
          request(apiUrl, 'POST', apiParams, '', apiSuccess, apiError);
        }
      }
      var urlList = playParams.url.split(',');
      var promiseTaskList = [];
      var promiseTaskFun = function (ezopenURL) {
        return new Promise(function (resolve, reject) { return getRealUrlPromise(resolve, reject, ezopenURL) })
      };
      urlList.map(function (item, index) {
        _this.loadingSet(index, { text:  _this.opt.domain !== 'open' ? 'Get device live view address' : '获取设备播放地址' });
        var adaptHost = item.match(/ezopen:\/\/(\S*)\.com/)[1] + '.com';
        if(adaptHost.indexOf("@")!== -1){
          adaptHost = adaptHost.split("@")[1];
        }
        var adaptItem = item.replace(adaptHost, _this.opt.domain !== 'open' ?'open.ezviz.com' : 'open.ys7.com');
        
        promiseTaskList.push(promiseTaskFun(adaptItem));
      });
      var getRealUrlPromiseObj = Promise.all(promiseTaskList)
        .then(function (result) {
          // 获取真实地址成功后，赋值到opt属性中
          _this.opt.sources = result;
          _this.opt.currentSource = result[0];
          result.forEach(function (item, index) {
            _this.loadingSet(index, { text:  _this.opt.domain !== 'open' ? 'Get live view Address Success' : '获取播放地址成功' })
          })
        })
        .catch(function (err) {
          _this.log("获取真实地址错误" + JSON.stringify(err), 'error')
        })
      return getRealUrlPromiseObj;
    // 格式化回放时间
    function formatRecTime(time, defaultTime) {
      // 用户格式 无需更改 => 20182626T000000Z
      // return time
      // 用户格式需要更改
      //用户时间长度为 14 20181226000000  =》 20181226000000
      // 用户长度为12     201812260000    =》 201812260000 + defaultTime后面2位
      // 用户长度为10     2018122600      =》 201812260000 + defaultTime后面4位
      // 用户长度为8     20181226         =》 201812260000 + defaultTime后面6位
      // 结果 20181226000000 14位
      // 插入 TZ
      var reg = /^[0-9]{8}T[0-9]{6}Z$/;
      if (reg.test(time)) { // 用户格式 无需更改 => 20182626T000000Z
        return time;
      } else if (/[0-9]{8,14}/.test(time)) {
        var start = 6 - (14 - time.length);
        var end = defaultTime.length;
        var standardTime = time + defaultTime.substring(start, end);
        return standardTime.slice(0, 8) + 'T' + standardTime.slice(8) + 'Z';
      } else {
        throw new Error('回放时间格式有误，请确认');
      }
    }
    function reRormatRecTime(time) {
      var year = time.slice(0, 4);
      var month = time.slice(4, 6);
      var day = time.slice(6, 8);
      var hour = time.slice(9, 11);
      var minute = time.slice(11, 13);
      var second = time.slice(13, 15);
      var date = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
      if (_this.opt.domain !== 'open') {
        return new Date(date.replace(/-/g, '/')).getTime() + (8 * 60*60*1000);        
      }
      return new Date(date.replace(/-/g, '/')).getTime();
    }
  };
  EZUIPlayer.prototype.rePlay = function (playParams) {
    this.loadingStart();
    // _this.loadingSet(0,{text:'获取设备播放地址'})
    var _this = this;
    var getRealUrl = this.getRealUrl(playParams);
    /**是否自动播放 */
    if (isPromise(getRealUrl)) {
      getRealUrl.then(function (data) {
        _this.play(playParams);
      })
        .catch(function (err) {
          console.log("播放错误", err)
        });
    }
  }

  EZUIPlayer.prototype.play = function (data) {
    this.loadingStart(0);
    var playParams = this.playParams;
    var audioId = 0
    if(playParams && playParams.audioId){
      audioId = playParams.audioId;
    }else if(playParams && playParams.audioId === -1){
      audioId = undefined;
    }
    if ( typeof data === 'string'){
      playParams.url = data;
    }else if(typeof data === 'object'){
      playParams = Object.assign(playParams,data);
    }
    var _this = this;
    var playPromise = new Promise(function(resolve, reject){
      var getRealUrl = _this.getRealUrl(playParams);
      getRealUrl.then(function () {
        function getPlayParams(url) {
          var websocketConnectUrl = url.split('?')[0].replace('/live', '').replace('/playback', '');
          // console.log("playParams,",playParams,playParams.env.wsUrl)
          if(playParams && playParams.env && playParams.env.wsUrl){
            websocketConnectUrl= playParams.env.wsUrl;
          }
          console.log("_this.opt.sources.", _this.opt.sources)
          var websocketStreamingParam = (url.indexOf('/live') === -1 ? (url.indexOf('cloudplayback') !== -1 ? '/cloudplayback?' : '/playback?') : '/live?') + url.split('?')[1];
          if(playParams.websocketParams) {
            Object.keys(playParams.websocketParams).map(function(item){
              websocketStreamingParam += ("&"+ item +"=" + playParams.websocketParams[item]);
            })
          }
          // 本地回放仅支持主码流 - 2019-11-05 修订
          if (websocketStreamingParam.indexOf('/playback') !== -1) {
            websocketStreamingParam = websocketStreamingParam.replace("stream=2", 'stream=1');
          }
          // 本地回放仅支持主码流
          return { websocketConnectUrl: websocketConnectUrl, websocketStreamingParam: websocketStreamingParam }
        }
        _this.opt.sources.forEach(function (item, index) {
          if (getQueryString('dev', item) || item.indexOf('ws') !== -1) {
            _this.log("开始播放, 第" + (index + 1) + '路，' + '地址：' + item);
            _this.loadingSet(index, { text: _this.opt.domain !== 'open' ? 'Ready to play...' : '准备播放...', color: '#fff' })
            // 设置秘钥 - 如果地址中包含秘钥参数，播放前配置到JSPlugin对应实例中
            var validateCode = getQueryString('checkCode', item);
            if (validateCode) {
              _this.log('设置秘钥，视频路数：' + (index + 1) + '验证码：' + validateCode)
              _this.jSPlugin.JS_SetSecretKey(index, validateCode);
            }
            var playST = new Date().getTime();

            var wsUrl = ''
            var wsParams = ''
            wsUrl = getPlayParams(item).websocketConnectUrl;
            wsParams = {
              playURL: getPlayParams(item).websocketStreamingParam
            }
            _this.jSPlugin.JS_Play(wsUrl, wsParams, index).then(function () {
              _this.log('播放成功，当前播放第' + (index + 1) + '路');
              _this.loadingSet(index, { text:  _this.opt.domain !== 'open' ? 'Played successfully...' : '播放成功...' });
              //单次播放日志上报
              ezuikitDclog({
                systemName: PERFORMANCE_EZUIKIT,
                bn: 2,
                browser: JSON.stringify(getBrowserInfo()),
                duration: new Date().getTime() - playST,
                rt: 200,
              })
              // 播放成功
              ezuikitDclog({
                systemName: PERFORMANCE_EZUIKIT,
                bn: 99,
                browser: JSON.stringify(getBrowserInfo()),
                duration: new Date().getTime() - playStartTime,
                rt: 200,
              });
              _this.loadingEnd(index);
              setTimeout(function () {
                // 检测播放状态
                _this.getOSDTime()
                .then((data)=>{
                  _this.loadingEnd(index);
                })
                .catch((err)=>{
                  if(_this.opt.isEncrypt) {
                    _this.loadingStart();
                    _this.loadingSet(0,{text:'设备已加密，请解密或使用加密地址播放', color: "red"});
                  }else {
                    // _this.loadingSet(index, { text: "播放失败，请确认设备状态及播放地址", color: 'red' });
                  }
                })
              }, 2000)
              // 默认开启声音
              // 默认开启第一路声音
              if (typeof(audioId) !== "undefined" && audioId === index) {
                _this.log("默认开启第1路声音");
                setTimeout(function () {
                  var openSoundRT = _this.openSound(0);
                  if (isPromise(openSoundRT)) {
                    openSoundRT.then(function(){
                      _this.log('开启声音成功');        
                    })
                    .catch(function(err){
                      _this.log('开启声音失败', 'error');
                    })
                  }else if(openSoundRT == 0) {
                    _this.log('开启声音成功', data)
                  }else {
                    _this.log('开启声音失败', 'error')
                  }
                  console.log("openSoundRT", openSoundRT)
                }, 100)
              }
              // 播放成功回调
              if (playParams && playParams.handleSuccess) {
                playParams.handleSuccess();
              }
              if(_this.playControls){
                _this.playControls.setPlayStatus(1)
              }
              if ((index + 1) === _this.opt.sources.length) {
                resolve({code:0})
              }
              // 播放成功日志上报
              var PlTp = 1;
              if (playParams && playParams.url) {
                if (playParams.url.indexOf('rec') !== -1) {
                  PlTp = 2;
                }
              }
              dclog({
                systemName: PLAY_MAIN,
                playurl: encodeURIComponent(item),
                Time: (new Date()).Format('yyyy-MM-dd hh:mm:ss.S'),
                Enc: 0,  // 0 不加密 1 加密
                PlTp: PlTp,  // 1 直播 2 回放
                Via: 2,  // 2 服务端取流
                ErrCd: 0,
                OpId: uuid(),
                Cost: (new Date()).getTime() - _this.initTime,  // 毫秒数
                Serial: getQueryString('dev', item),
                Channel: getQueryString('chn', item),
              });
            }, function (err) {
              _this.log('播放失败' + JSON.stringify(err), 'error');
              var errorInfo = JSON.parse(_this.errorCode).find(function (item) { return item.detailCode.substr(-4) == err.oError.errorCode });
              ezuikitDclog({
                systemName: PERFORMANCE_EZUIKIT,
                bn: 2,
                browser: JSON.stringify(getBrowserInfo()),
                duration: new Date().getTime() - playStartTime,
                rt: err.oError ? err.oError.errorCode : 500,
                msg: errorInfo ? errorInfo.description : (_this.opt.domain !== 'open' ? 'Other error' : '其他错误')
              })
              var msg = errorInfo ? errorInfo.description : (_this.opt.domain !== 'open' ? 'Other error' : '其他错误');
              _this.loadingSet(index, { text: msg, color: 'red' });
              dclog({
                systemName: PLAY_MAIN,
                playurl: encodeURIComponent(item),
                cost: -1,
                ErrCd: (err && err.oError && err.oError.errorCode && (err.oError.errorCode + "").substr(-4)) || -1,
                Via: 2,
                OpId: uuid(),
                Serial: getQueryString('dev', item),
                Channel: getQueryString('chn', item),
              });
              if (playParams && playParams.handleError) {
                var errorInfo = JSON.parse(_this.errorCode).find(function (item) { return item.detailCode.substr(-4) == err.oError.errorCode })
                playParams.handleError({ retcode: err.oError.errorCode, msg: errorInfo ? errorInfo.description : (_this.opt.domain !== 'open' ? 'Other error' : '其他错误') });
              }
              if ((index + 1) === _this.opt.sources.length) {
                resolve({ retcode: err.oError.errorCode, msg: errorInfo ? errorInfo.description : (_this.opt.domain !== 'open' ? 'Other error' : '其他错误') })
              }
            })

          } else {
            if (isJSON(item) && JSON.parse(item).msg) {
              _this.loadingSet(index, { text: JSON.parse(item).msg, color: 'red' })
            }
          }
        })
      })
    })
    return playPromise;
  };
  EZUIPlayer.prototype.changePlayUrl = function (options) {
    var initUrl = this.playParams.url;
    var url = matchUrl(initUrl,options);
    console.log("changePlayUrl",url);
    this.playParams.url = url;
    this.stop()
      .then(() => {
        if(options.accessToken) {
          this.play({accessToken:options.accessToken,url:url});
        }else {
          this.play(url);
        }
      });
      /**
 * 匹配播放地址 用户播放地址切换
 * options
 * type | string | live,rec
 * hd | boolean | true,false
 * deviceSerial
 * channelNO 
 * begin
 * end
*/
  function  matchUrl(initUrl,options) {
    var type = initUrl.split("/")[4].split(".")[initUrl.split("/")[4].split(".").length -1 ].split("?")[0];
    if(type === 'rec' && initUrl.indexOf(".cloud.rec")!== -1) {
      type = 'cloud.rec';
    }
    if(options.type) {
      type = options.type
    }
    var deviceSerial = initUrl.split("/")[3];
    if(options.deviceSerial) {
      deviceSerial = options.deviceSerial
    }
    var channelNo = initUrl.split("/")[4].split(".")[0];
    // 如果切换设备，之前设备有验证码，新设备无验证码，建议传空验证码,清理验证码（降低解码消耗）
    var validCode =  initUrl.split("/")[2].split("@").length === 2 ? initUrl.split("/")[2].split("@")[0] : "";
    if(typeof options.validCode !== 'undefined') {
      validCode = options.validCode
    }
    var hd = typeof options.hd === 'undefined' ?  initUrl.indexOf('.hd') !== -1  : options.hd;
    let result =  `ezopen://${validCode ? `${validCode}@` : ""}open.ys7.com/${deviceSerial}/${channelNo}${hd ? '.hd': ''}.${type}`;
    if(type === 'live'){
      return result;
    } else {
      // if(initUrl.indexOf(".cloud")!== -1) {
      //   type = 'cloud.rec'
      // }
      result =  `ezopen://${validCode ? `${validCode}@` : ""}open.ys7.com/${deviceSerial}/${channelNo}.${type}`;
      if(options.begin && options.end) {
        result += `?begin=${options.begin}&end=${options.end}`;
      } else if(options.begin) {
        result += `?begin=${options.begin}`;
      }
    }
    return result;
  }
  return url;
  }
  EZUIPlayer.prototype.initDecoder = function (playParams) {
    this.opt.id = playParams.id;
    this.log("初始化解码器---开始");
    var _this = this;
    _this.opt.domain = playParams.url.split(",")[0].match(/ezopen:\/\/(\S*)\.(ys7|ezviz)\.com/)[1];
    if (playParams.env) {
      var environmentParams = playParams.env;
      domain = environmentParams.domain;
      if(domain.match(/https:\/\/(\S*)\.ezviz(\S*)\.com/)) {
        _this.opt.domain = domain.match(/https:\/\/(\S*)\.ezviz(\S*)\.com/)[1];
      }
    }
    if( _this.opt.domain.indexOf("@")!== -1) {
      _this.opt.domain =  _this.opt.domain.split("@")[1];
    }
    var initDecoderDurationST = new Date().getTime();
    // DOM id
    function initDecoder(resolve, reject) {
      var jsPluginPath = playParams.decoderPath + '/js/jsPlugin-1.2.0.min.js?v=20211012';
      document.getElementById(playParams.id).style.width = (playParams.width || 600) + 'px';
      document.getElementById(playParams.id).style.height= (playParams.height || 400) + 'px';
      /** 初始化解码器 */
      addJs(jsPluginPath, function () {
        _this.log("下载解码器完成，开始初始化");
        /* decoder 属性配置 */
        _this.jSPlugin = new JSPlugin({
          szId: playParams.id,
          iType: 2,
          // iMode: 0,
          iWidth: playParams.width || 600,
          iHeight: playParams.height || 400,
          iMaxSplit: Math.ceil(Math.sqrt(playParams.url.split(",").length)),
          iCurrentSplit: playParams.splitBasis || Math.ceil(Math.sqrt(playParams.url.split(",").length)),
          szBasePath:playParams.decoderPath + '/js',
          oStyle: {
            border: "none",
            background: "#000000"
          }
        });
        _this.jSPlugin.EventCallback = {
          loadEventHandler: function () {
          },
          zoomEventResponse: function (/*iMode, aPoint*/) {  //电子放大回调
          },
          windowEventSelect: function (iWndIndex) {  //插件选中窗口回调
          },
          pluginErrorHandler: function (iWndIndex, iErrorCode, oError) {  //插件错误回调
            console.log(iWndIndex, iErrorCode, oError);
            if(iErrorCode === 1003) {
              if (playParams && playParams.handleError) {
                playParams.handleError({ retcode: iErrorCode, msg: oError ? oError : '连接断开，请重试' });
                if(playParams.url.indexOf("alarmId")!== -1) {
                  _this.loadingSetIcon(iWndIndex, 'retry');
                  _this.loadingSet(iWndIndex, { text: '播放结束' });
                } else {
                  _this.loadingSetIcon(iWndIndex, 'retry');
                  _this.loadingSet(iWndIndex, { text: '连接断开，请重试' });
                }
              }
            }
          },
          windowEventOver: function (iWndIndex) {
          },
          windowEventOut: function (iWndIndex) {
          },
          windowEventUp: function (iWndIndex) {
          },
          windowFullCcreenChange: function (bFull) {
          },
          firstFrameDisplay: function (iWndIndex, iWidth, iHeight) {
  
          },
          performanceLack: function () {
          },
          mouseEvent: function (iMouseEventType, iMouseX, iMouseY) {
          }
        }
        _this.jSPlugin.oEventCallback = _this.jSPlugin.EventCallback;
        // _this.jSPlugin.JS_SetWindowControlCallback({
        //   windowEventSelect: function (iWndIndex) {  //插件选中窗口回调
        //     iWind = iWndIndex;
        //   },
        //   pluginErrorHandler: function (iWndIndex, iErrorCode, oError) {  //插件错误回调
        //     console.log(iWndIndex, iErrorCode, oError);
        //     if (playParams && playParams.handleError) {
        //       playParams.handleError({ retcode: iErrorCode, msg: oError ? oError : '播放失败，请重试' });
        //       if(playParams.url.indexOf("alarmId")!== -1) {
        //         _this.loadingSetIcon(iWndIndex, 'retry');
        //         _this.loadingSet(iWndIndex, { text: '播放结束' });
        //       } else {
        //         _this.loadingSetIcon(iWndIndex, 'retry');
        //         _this.loadingSet(iWndIndex, { text: '播放失败，请重试' });
        //       }
        //     }
        //   },
        // });
        _this.jSPlugin.JS_SetCanFullScreen(false);
        // _this.jSPlugin.JS_SetOptions({
        //   //bSupportSound: false  //是否支持音频，默认支持
        //   bSupporDoubleClickFull: false,
        //   //bOnlySupportMSE: true  //只支持MSE
        // }).then(function () {
        //   console.log("JS_SetOptions");
        // });
        // 注册全屏事件
        // window.onresize = function () {
        //   var width = document.documentElement.clientWidth;
        //   var height = document.documentElement.clientHeight;
        //   _this.jSPlugin.JS_Resize(width || playParams.width || 600, height || playParams.height || 400);
        // }
        _this.log("初始化解码器----完成");
        // 执行一次初始化解码器服务请求上报
        ezuikitDclog({
          systemName: PERFORMANCE_EZUIKIT,
          bn: 1,
          browser: JSON.stringify(getBrowserInfo()),
          duration: new Date().getTime() - initDecoderDurationST,
          rt: 200,
        })
        resolve('200 OK')
      });
      /** 
       * 加载错误码
       * 错误码维护平台 - omm管理系统
       */
      var errorCodeLan = 'zh';
      var errorCodePath = playParams.decoderPath + "/js/errorCode.json";
      var errorCodeKey = 'errorCode';
      if(_this.opt.domain !== 'open'){
        errorCodeLan = 'en';
        errorCodePath = playParams.decoderPath + "/js/errorCode-EN.json";
        errorCodeKey = "errorCode-EN"
      }
      function success(data) {
        if (data.code == 200) {
          if (!window.localStorage) {
            return false;
          } else {
            var storage = window.localStorage;
            //写入a字段
            storage[errorCodeKey] = JSON.stringify(data.data);
            _this.errorCode = storage[errorCodeKey];
          }
        }
      }
      if (!window.localStorage) {
        request(
          errorCodePath,
          "get",
          {
            language: 1,
            time: new Date().getTime(),
            appKey: '26810f3acd794862b608b6cfbc32a6b8',
          },
          '',
          success
        );
      } else {
        var storage = window.localStorage;
        var errorCode = storage[errorCodeKey];
        if (!errorCode) {
          request(
            errorCodePath,
            "get",
            {
              language: 1,
              time: new Date().getTime(),
              appKey: '26810f3acd794862b608b6cfbc32a6b8',
            },
            '',
            success
          );
        } else {
          _this.errorCode = storage[errorCodeKey];
        }
      }


    }
    var initDecoderPromise = new Promise(initDecoder);

    return initDecoderPromise;
  }
  EZUIPlayer.prototype.stop = function (i, unDestory) {
    // 执行停止
    this.log("停止播放" + this.opt.currentSource);
    this.opt.autoplay = false;
      var _this = this;
      if (typeof i === "undefined") {
        _this.closeSound(0)
        return this.jSPlugin.JS_Stop(0).then(function () {
          _this.log("停止播放成功" + _this.opt.currentSource);
          console.log("stop success");
          // 额外销毁worker
          // _this.jSPlugin.JS_DestroyWorker();
          _this.loadingEnd(0);
          //removeChild(0);
          if(_this.playControls){
            _this.playControls.setPlayStatus(0);
          }
        }, function () {
          _this.log("停止播放失败" + _this.opt.currentSource);
          console.log("stop failed");
        });
      } else {
        return this.jSPlugin.JS_Stop(i).then(function () {
          _this.log("第" + i + "路停止播放成功" + _this.opt.currentSource);
          _this.loadingEnd(i);
          console.log("stop success");
        }, function () {
          _this.log("第" + i + "路停止播放失败" + _this.opt.currentSource);
          _this.loadingEnd(i);
          console.log("stop failed");
        });
        // 额外销毁worker - 多窗口暂不销毁
        // this.jSPlugin.JS_DestroyWorker();
        //removeChild(i);
      }
  };
  EZUIPlayer.prototype.destroy = function (i) {
    this.jSPlugin.JS_DestroyWorker();
  }
  // 返回promise的getOSDTime方法
  EZUIPlayer.prototype.getOSDTime = function (wNum) {
    var _this = this;
    if (!!this.jSPlugin) {
      return _this.jSPlugin.JS_GetOSDTime(wNum || 0);
    } else {
      throw new Error("Method  not support");
    }
  }
  // 返回promise的getOSDTime方法
  EZUIPlayer.prototype.getVersion = function (wNum) {
    var _this = this;
    if (!!this.jSPlugin) {
      console.log(_this.jSPlugin.JS_GetSdkVersion());
    } else {
      throw new Error("Method  not support");
    }
  }

  // 开启声音
  EZUIPlayer.prototype.openSound = function (iWind) {
    if (!!this.jSPlugin) {
      var _this = this;
      var openSoundRT = this.jSPlugin.JS_OpenSound(iWind || 0);
      if (isPromise(openSoundRT)) {
        openSoundRT.then(function(){
          _this.log('开启声音成功');
          if(_this.playControls){
            _this.playControls.setVoiceStatus(1)
          }          
        })
        .catch(function(err){
          _this.log('开启声音失败', 'error');
        })
      } else if(openSoundRT === 0 ){
        _this.log('开启声音成功');
        if(_this.playControls){
          _this.playControls.setVoiceStatus(1)
        }
      }else {
        _this.log('开启声音失败', 'error');
      }
      return openSoundRT;
    } else {
      throw new Error("Method  not support");
    }
  }
  // 全屏
  EZUIPlayer.prototype.fullScreen = function () {
    if (!!this.jSPlugin) {
      return this.jSPlugin.JS_FullScreenDisplay(1);
    } else {
      throw new Error("Method  not support");
    }
  }
  // 关闭声音
  EZUIPlayer.prototype.closeSound = function (iWind) {
    if (!!this.jSPlugin) {
      var _this = this;
      var closeSoundRT = this.jSPlugin.JS_CloseSound(iWind || 0);
      if (isPromise(closeSoundRT)) {
        closeSoundRT.then(function(){
          _this.log('关闭声音成功');
          if(_this.playControls){
            _this.playControls.setVoiceStatus(0)
          }          
        })
        .catch(function(err){
          _this.log('关闭声音失败', 'error');
        })
      } else if(closeSoundRT === 0 ){
        _this.log('关闭声音成功');
        if(_this.playControls){
          _this.playControls.setVoiceStatus(0)
        }
      }else {
        _this.log('关闭声音失败', 'error');
      }
      return closeSoundRT;
    } else {
      throw new Error("Method  not support");
    }
  }
  // 视频截图
  EZUIPlayer.prototype.capturePicture = function (iWind, pictureName,callback,isUndownload) {
    if (!!this.jSPlugin) {
      return this.jSPlugin.JS_CapturePicture(iWind, pictureName,'JPEG',callback,isUndownload);
    } else {
      throw new Error("Method  not support");
    }
  }
  // 开始录像
  EZUIPlayer.prototype.startSave = function (iWind, fileName) {
    if (!!this.jSPlugin) {
      this.log("开始录制录像");
      return this.jSPlugin.JS_StartSave(iWind, fileName)
    } else {
      throw new Error("Method  not support");
    }
  }
  // 结束录像
  EZUIPlayer.prototype.stopSave = function (iWind) {
    if (!!this.jSPlugin) {
      return this.jSPlugin.JS_StopSave(iWind);
      this.log("结束录制录像");
    } else {
      throw new Error("Method  not support");
    }
  }
  EZUIPlayer.prototype.reSize = function (width, height) {
    if (!!this.jSPlugin) {
      return this.jSPlugin.JS_Resize(width, height);
    } else {
      throw new Error("Method  not support");
    }
  }

  EZUIPlayer.prototype.load = function () {
    if (!!window['CKobject']) {
      // flash load
    } else if (!!this.video) {
      this.video.load();
    }
  };
  // 开启电子放大
  EZUIPlayer.prototype.enableZoom = function (iWind) {
    if (!!this.jSPlugin) {
      return this.jSPlugin.JS_EnableZoom(iWind || 0);
    } else {
      throw new Error("Method  not support");
    }
  }
  // 关闭电子放大
  EZUIPlayer.prototype.closeZoom = function (iWind) {
    if (!!this.jSPlugin) {
      return this.jSPlugin.JS_DisableZoom(iWind || 0);
    } else {
      throw new Error("Method  not support");
    }
  }
  // 返回promise的getOSDTime方法
  EZUIPlayer.prototype.controlsSwitchDisabled = function (value) {
    if(this.playControls){
      this.playControls.switchDisabled(value)
    }
  }

  var EZUIKit = {
    'EZUIPlayer': EZUIPlayer,
  };
  // 兼容1.4 以下旧版本
  // var EZUIPlayer = EZuikit.EZUIPlayer;

  if (!noGlobal) {
    window.EZUIKit = EZUIKit;
    // 兼容1.4 以下旧版本
    window.EZUIPlayer = EZUIPlayer;
  }
  return EZUIKit;
});
