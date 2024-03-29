(function () {
    var bV, a2 = bV = a2 || {version:"1.3.4"};
    a2.guid = "$BAIDU$";
    window[a2.guid] = window[a2.guid] || {};
    a2.object = a2.object || {};
    a2.extend = a2.object.extend = function (cF, T) {
        for (var cE in T) {
            if (T.hasOwnProperty(cE)) {
                cF[cE] = T[cE]
            }
        }
        return cF
    };
    a2.dom = a2.dom || {};
    a2.dom.g = function (T) {
        if ("string" == typeof T || T instanceof String) {
            return document.getElementById(T)
        } else {
            if (T && T.nodeName && (T.nodeType == 1 || T.nodeType == 9)) {
                return T
            }
        }
        return null
    };
    a2.g = a2.G = a2.dom.g;
    a2.dom.hide = function (T) {
        T = a2.dom.g(T);
        T.style.display = "none";
        return T
    };
    a2.hide = a2.dom.hide;
    a2.lang = a2.lang || {};
    a2.lang.isString = function (T) {
        return"[object String]" == Object.prototype.toString.call(T)
    };
    a2.isString = a2.lang.isString;
    a2.dom._g = function (T) {
        if (a2.lang.isString(T)) {
            return document.getElementById(T)
        }
        return T
    };
    a2._g = a2.dom._g;
    a2.dom.contains = function (T, cE) {
        var cF = a2.dom._g;
        T = cF(T);
        cE = cF(cE);
        return T.contains ? T != cE && T.contains(cE) : !!(T.compareDocumentPosition(cE) & 16)
    };
    a2.browser = a2.browser || {};
    if (/msie (\d+\.\d)/i.test(navigator.userAgent)) {
        a2.browser.ie = a2.ie = document.documentMode || +RegExp["\x241"]
    }
    a2.dom._NAME_ATTRS = (function () {
        var T = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", usemap:"useMap", frameborder:"frameBorder"};
        if (a2.browser.ie < 8) {
            T["for"] = "htmlFor";
            T["class"] = "className"
        } else {
            T.htmlFor = "for";
            T.className = "class"
        }
        return T
    })();
    a2.dom.setAttr = function (cE, T, cF) {
        cE = a2.dom.g(cE);
        if ("style" == T) {
            cE.style.cssText = cF
        } else {
            T = a2.dom._NAME_ATTRS[T] || T;
            cE.setAttribute(T, cF)
        }
        return cE
    };
    a2.setAttr = a2.dom.setAttr;
    a2.dom.setAttrs = function (cF, T) {
        cF = a2.dom.g(cF);
        for (var cE in T) {
            a2.dom.setAttr(cF, cE, T[cE])
        }
        return cF
    };
    a2.setAttrs = a2.dom.setAttrs;
    a2.string = a2.string || {};
    (function () {
        var T = new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+\x24)", "g");
        a2.string.trim = function (cE) {
            return String(cE).replace(T, "")
        }
    })();
    a2.trim = a2.string.trim;
    a2.string.format = function (cF, T) {
        cF = String(cF);
        var cE = Array.prototype.slice.call(arguments, 1), cG = Object.prototype.toString;
        if (cE.length) {
            cE = cE.length == 1 ? (T !== null && (/\[object Array\]|\[object Object\]/.test(cG.call(T))) ? T : cE) : cE;
            return cF.replace(/#\{(.+?)\}/g, function (cH, cJ) {
                var cI = cE[cJ];
                if ("[object Function]" == cG.call(cI)) {
                    cI = cI(cJ)
                }
                return("undefined" == typeof cI ? "" : cI)
            })
        }
        return cF
    };
    a2.format = a2.string.format;
    a2.dom.removeClass = function (cI, cJ) {
        cI = a2.dom.g(cI);
        var cG = cI.className.split(/\s+/), cK = cJ.split(/\s+/), cE, T = cK.length, cF, cH = 0;
        for (; cH < T; ++cH) {
            for (cF = 0, cE = cG.length; cF < cE; ++cF) {
                if (cG[cF] == cK[cH]) {
                    cG.splice(cF, 1);
                    break
                }
            }
        }
        cI.className = cG.join(" ");
        return cI
    };
    a2.removeClass = a2.dom.removeClass;
    a2.dom.insertHTML = function (cG, T, cF) {
        cG = a2.dom.g(cG);
        var cE, cH;
        if (cG.insertAdjacentHTML) {
            cG.insertAdjacentHTML(T, cF)
        } else {
            cE = cG.ownerDocument.createRange();
            T = T.toUpperCase();
            if (T == "AFTERBEGIN" || T == "BEFOREEND") {
                cE.selectNodeContents(cG);
                cE.collapse(T == "AFTERBEGIN")
            } else {
                cH = T == "BEFOREBEGIN";
                cE[cH ? "setStartBefore" : "setEndAfter"](cG);
                cE.collapse(cH)
            }
            cE.insertNode(cE.createContextualFragment(cF))
        }
        return cG
    };
    a2.insertHTML = a2.dom.insertHTML;
    a2.dom.show = function (T) {
        T = a2.dom.g(T);
        T.style.display = "";
        return T
    };
    a2.show = a2.dom.show;
    a2.dom.getDocument = function (T) {
        T = a2.dom.g(T);
        return T.nodeType == 9 ? T : T.ownerDocument || T.document
    };
    a2.dom.addClass = function (cI, cJ) {
        cI = a2.dom.g(cI);
        var cE = cJ.split(/\s+/), T = cI.className, cH = " " + T + " ", cG = 0, cF = cE.length;
        for (; cG < cF; cG++) {
            if (cH.indexOf(" " + cE[cG] + " ") < 0) {
                T += " " + cE[cG]
            }
        }
        cI.className = T;
        return cI
    };
    a2.addClass = a2.dom.addClass;
    a2.dom._styleFixer = a2.dom._styleFixer || {};
    a2.dom._styleFilter = a2.dom._styleFilter || [];
    a2.dom._styleFilter.filter = function (cE, cH, cI) {
        for (var T = 0, cG = a2.dom._styleFilter, cF; cF = cG[T]; T++) {
            if (cF = cF[cI]) {
                cH = cF(cE, cH)
            }
        }
        return cH
    };
    a2.string.toCamelCase = function (T) {
        if (T.indexOf("-") < 0 && T.indexOf("_") < 0) {
            return T
        }
        return T.replace(/[-_][^-_]/g, function (cE) {
            return cE.charAt(1).toUpperCase()
        })
    };
    a2.dom.getStyle = function (cF, cE) {
        var cI = a2.dom;
        cF = cI.g(cF);
        cE = a2.string.toCamelCase(cE);
        var cH = cF.style[cE];
        if (!cH) {
            var T = cI._styleFixer[cE], cG = cF.currentStyle || (a2.browser.ie ? cF.style : getComputedStyle(cF, null));
            cH = T && T.get ? T.get(cF, cG) : cG[T || cE]
        }
        if (T = cI._styleFilter) {
            cH = T.filter(cE, cH, "get")
        }
        return cH
    };
    a2.getStyle = a2.dom.getStyle;
    if (/opera\/(\d+\.\d)/i.test(navigator.userAgent)) {
        a2.browser.opera = +RegExp["\x241"]
    }
    a2.browser.isWebkit = /webkit/i.test(navigator.userAgent);
    a2.browser.isGecko = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent);
    a2.browser.isStrict = document.compatMode == "CSS1Compat";
    a2.dom.getPosition = function (T) {
        T = a2.dom.g(T);
        var cM = a2.dom.getDocument(T), cG = a2.browser, cJ = a2.dom.getStyle, cF = cG.isGecko > 0 && cM.getBoxObjectFor && cJ(T, "position") == "absolute" && (T.style.top === "" || T.style.left === ""), cK = {left:0, top:0}, cI = (cG.ie && !cG.isStrict) ? cM.body : cM.documentElement, cN, cE;
        if (T == cI) {
            return cK
        }
        if (T.getBoundingClientRect) {
            cE = T.getBoundingClientRect();
            cK.left = Math.floor(cE.left) + Math.max(cM.documentElement.scrollLeft, cM.body.scrollLeft);
            cK.top = Math.floor(cE.top) + Math.max(cM.documentElement.scrollTop, cM.body.scrollTop);
            cK.left -= cM.documentElement.clientLeft;
            cK.top -= cM.documentElement.clientTop;
            var cL = cM.body, cO = parseInt(cJ(cL, "borderLeftWidth")), cH = parseInt(cJ(cL, "borderTopWidth"));
            if (cG.ie && !cG.isStrict) {
                cK.left -= isNaN(cO) ? 2 : cO;
                cK.top -= isNaN(cH) ? 2 : cH
            }
        } else {
            cN = T;
            do {
                cK.left += cN.offsetLeft;
                cK.top += cN.offsetTop;
                if (cG.isWebkit > 0 && cJ(cN, "position") == "fixed") {
                    cK.left += cM.body.scrollLeft;
                    cK.top += cM.body.scrollTop;
                    break
                }
                cN = cN.offsetParent
            } while (cN && cN != T);
            if (cG.opera > 0 || (cG.isWebkit > 0 && cJ(T, "position") == "absolute")) {
                cK.top -= cM.body.offsetTop
            }
            cN = T.offsetParent;
            while (cN && cN != cM.body) {
                cK.left -= cN.scrollLeft;
                if (!cG.opera || cN.tagName != "TR") {
                    cK.top -= cN.scrollTop
                }
                cN = cN.offsetParent
            }
        }
        return cK
    };
    if (/firefox\/(\d+\.\d)/i.test(navigator.userAgent)) {
        a2.browser.firefox = +RegExp["\x241"]
    }
    (function () {
        var T = navigator.userAgent;
        if (/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(T) && !/chrome/i.test(T)) {
            a2.browser.safari = +(RegExp["\x241"] || RegExp["\x242"])
        }
    })();
    if (/chrome\/(\d+\.\d)/i.test(navigator.userAgent)) {
        a2.browser.chrome = +RegExp["\x241"]
    }
    a2.array = a2.array || {};
    a2.array.each = function (cI, cG) {
        var cF, cH, cE, T = cI.length;
        if ("function" == typeof cG) {
            for (cE = 0; cE < T; cE++) {
                cH = cI[cE];
                cF = cG.call(cI, cH, cE);
                if (cF === false) {
                    break
                }
            }
        }
        return cI
    };
    a2.each = a2.array.each;
    a2.lang.guid = function () {
        return"TANGRAM__" + (window[a2.guid]._counter++).toString(36)
    };
    window[a2.guid]._counter = window[a2.guid]._counter || 1;
    window[a2.guid]._instances = window[a2.guid]._instances || {};
    a2.lang.isFunction = function (T) {
        return"[object Function]" == Object.prototype.toString.call(T)
    };
    a2.lang.Class = function (T) {
        this.guid = T || a2.lang.guid();
        window[a2.guid]._instances[this.guid] = this
    };
    window[a2.guid]._instances = window[a2.guid]._instances || {};
    a2.lang.Class.prototype.dispose = function () {
        delete window[a2.guid]._instances[this.guid];
        for (var T in this) {
            if (!a2.lang.isFunction(this[T])) {
                delete this[T]
            }
        }
        this.disposed = true
    };
    a2.lang.Class.prototype.toString = function () {
        return"[object " + (this._className || "Object") + "]"
    };
    a2.lang.Event = function (T, cE) {
        this.type = T;
        this.returnValue = true;
        this.target = cE || null;
        this.currentTarget = null
    };
    a2.lang.Class.prototype.addEventListener = function (cG, cF, cE) {
        if (!a2.lang.isFunction(cF)) {
            return
        }
        !this.__listeners && (this.__listeners = {});
        var T = this.__listeners, cH;
        if (typeof cE == "string" && cE) {
            if (/[^\w\-]/.test(cE)) {
                throw ("nonstandard key:" + cE)
            } else {
                cF.hashCode = cE;
                cH = cE
            }
        }
        cG.indexOf("on") != 0 && (cG = "on" + cG);
        typeof T[cG] != "object" && (T[cG] = {});
        cH = cH || a2.lang.guid();
        cF.hashCode = cH;
        T[cG][cH] = cF
    };
    a2.lang.Class.prototype.removeEventListener = function (cF, cE) {
        if (a2.lang.isFunction(cE)) {
            cE = cE.hashCode
        } else {
            if (!a2.lang.isString(cE)) {
                return
            }
        }
        !this.__listeners && (this.__listeners = {});
        cF.indexOf("on") != 0 && (cF = "on" + cF);
        var T = this.__listeners;
        if (!T[cF]) {
            return
        }
        T[cF][cE] && delete T[cF][cE]
    };
    a2.lang.Class.prototype.dispatchEvent = function (cG, T) {
        if (a2.lang.isString(cG)) {
            cG = new a2.lang.Event(cG)
        }
        !this.__listeners && (this.__listeners = {});
        T = T || {};
        for (var cF in T) {
            cG[cF] = T[cF]
        }
        var cF, cE = this.__listeners, cH = cG.type;
        cG.target = cG.target || this;
        cG.currentTarget = this;
        cH.indexOf("on") != 0 && (cH = "on" + cH);
        a2.lang.isFunction(this[cH]) && this[cH].apply(this, arguments);
        if (typeof cE[cH] == "object") {
            for (cF in cE[cH]) {
                cE[cH][cF].apply(this, arguments)
            }
        }
        return cG.returnValue
    };
    a2.lang.inherits = function (cJ, cH, cG) {
        var cF, cI, T = cJ.prototype, cE = new Function();
        cE.prototype = cH.prototype;
        cI = cJ.prototype = new cE();
        for (cF in T) {
            cI[cF] = T[cF]
        }
        cJ.prototype.constructor = cJ;
        cJ.superClass = cH.prototype;
        if ("string" == typeof cG) {
            cI._className = cG
        }
    };
    a2.inherits = a2.lang.inherits;
    a2.lang.instance = function (T) {
        return window[a2.guid]._instances[T] || null
    };
    a2.platform = a2.platform || {};
    a2.platform.isMacintosh = /macintosh/i.test(navigator.userAgent);
    a2.platform.isWindows = /windows/i.test(navigator.userAgent);
    a2.platform.isX11 = /x11/i.test(navigator.userAgent);
    a2.platform.isAndroid = /android/i.test(navigator.userAgent);
    a2.platform.isIpad = /ipad/i.test(navigator.userAgent);
    a2.platform.isIphone = /iphone/i.test(navigator.userAgent);
    a2.lang.Event.prototype.inherit = function (cF) {
        var cE = this;
        this.domEvent = cF = window.event || cF;
        cE.clientX = cF.clientX || cF.pageX;
        cE.clientY = cF.clientY || cF.pageY;
        cE.offsetX = cF.offsetX || cF.layerX;
        cE.offsetY = cF.offsetY || cF.layerY;
        cE.screenX = cF.screenX;
        cE.screenY = cF.screenY;
        cE.ctrlKey = cF.ctrlKey || cF.metaKey;
        cE.shiftKey = cF.shiftKey;
        cE.altKey = cF.altKey;
        if (cF.touches) {
            cE.touches = [];
            for (var T = 0; T < cF.touches.length; T++) {
                cE.touches.push({clientX:cF.touches[T].clientX, clientY:cF.touches[T].clientY, screenX:cF.touches[T].screenX, screenY:cF.touches[T].screenY, pageX:cF.touches[T].pageX, pageY:cF.touches[T].pageY, target:cF.touches[T].target, identifier:cF.touches[T].identifier})
            }
        }
        if (cF.changedTouches) {
            cE.changedTouches = [];
            for (var T = 0; T < cF.changedTouches.length; T++) {
                cE.changedTouches.push({clientX:cF.changedTouches[T].clientX, clientY:cF.changedTouches[T].clientY, screenX:cF.changedTouches[T].screenX, screenY:cF.changedTouches[T].screenY, pageX:cF.changedTouches[T].pageX, pageY:cF.changedTouches[T].pageY, target:cF.changedTouches[T].target, identifier:cF.changedTouches[T].identifier})
            }
        }
        if (cF.targetTouches) {
            cE.targetTouches = [];
            for (var T = 0; T < cF.targetTouches.length; T++) {
                cE.targetTouches.push({clientX:cF.targetTouches[T].clientX, clientY:cF.targetTouches[T].clientY, screenX:cF.targetTouches[T].screenX, screenY:cF.targetTouches[T].screenY, pageX:cF.targetTouches[T].pageX, pageY:cF.targetTouches[T].pageY, target:cF.targetTouches[T].target, identifier:cF.targetTouches[T].identifier})
            }
        }
        cE.rotation = cF.rotation;
        cE.scale = cF.scale;
        return cE
    };
    a2.lang.decontrol = function (cE) {
        var T = window[a2.guid];
        T._instances && (delete T._instances[cE])
    };
    a2.event = {};
    a2.on = a2.event.on = function (cF, cE, T) {
        if (!(cF = a2.g(cF))) {
            return cF
        }
        cE = cE.replace(/^on/, "");
        if (cF.addEventListener) {
            cF.addEventListener(cE, T, false)
        } else {
            if (cF.attachEvent) {
                cF.attachEvent("on" + cE, T)
            }
        }
        return cF
    };
    a2.un = a2.event.un = function (cF, cE, T) {
        if (!(cF = a2.g(cF))) {
            return cF
        }
        cE = cE.replace(/^on/, "");
        if (cF.removeEventListener) {
            cF.removeEventListener(cE, T, false)
        } else {
            if (cF.detachEvent) {
                cF.detachEvent("on" + cE, T)
            }
        }
        return cF
    };
    a2.dom.hasClass = function (cF, cE) {
        if (!cF || !cF.className || typeof cF.className != "string") {
            return false
        }
        var T = -1;
        try {
            T = cF.className == cE || cF.className.search(new RegExp("(\\s|^)" + cE + "(\\s|$)"))
        } catch (cG) {
            return false
        }
        return T > -1
    };
    window.BMap = window.BMap || {};
    window.BMap.version = "1.3";
    window.BMap._register = [];
    window.BMap.register = function (T) {
        this._register.push(T)
    };
    window.BMap.apiLoad = window.BMap.apiLoad || function () {
    };
    function bt(cG, cI) {
        cG = a2.g(cG);
        if (!cG) {
            return
        }
        var cH = this;
        a2.lang.Class.call(cH);
        cH.config = {clickInterval:200, enableDragging:true, enableKeyboard:false, enableDblclickZoom:true, enableContinuousZoom:false, enableWheelZoom:false, enableMouseDown:true, enablePinchToZoom:true, enableAutoResize:true, fps:25, zoomerDuration:240, actionDuration:450, defaultCursor:b5.defaultCursor, draggingCursor:b5.draggingCursor, isOverviewMap:false, minZoom:1, maxZoom:18, mapType:BMAP_NORMAL_MAP, restrictBounds:false, drawer:BMAP_SYS_DRAWER, enableInertialDragging:false, drawMargin:500, enableHighResolution:false};
        a2.extend(cH.config, cI || {});
        if (cH.highResolutionEnabled()) {
            var cK = document.querySelector("meta[name=viewport]");
            cK.content = "initial-scale=0.5, minimum-scale=0.5, maximum-scale=0.5, user-scalable=no, target-densitydpi=high-dpi"
        }
        cH.container = cG;
        cH._setStyle(cG);
        cG.unselectable = "on";
        cG.innerHTML = "";
        cG.appendChild(cH.render());
        var cE = cH.getSize();
        cH.width = cE.width;
        cH.height = cE.height;
        cH.offsetX = 0;
        cH.offsetY = 0;
        cH.platform = cG.firstChild;
        cH.maskLayer = cH.platform.firstChild;
        cH.maskLayer.style.width = cH.width + "px";
        cH.maskLayer.style.height = cH.height + "px";
        cH._panes = {};
        cH.centerPoint = new b6(0, 0);
        cH.mercatorCenter = new b6(0, 0);
        cH.zoomLevel = 1;
        cH.lastLevel = 0;
        cH.defaultZoomLevel = null;
        cH.defaultCenter = null;
        cH.currentCity = "";
        cH.cityCode = "";
        cH._hotspots = {};
        cH.currentOperation = 0;
        cI = cI || {};
        var cJ = cH.mapType = cH.config.mapType;
        cH.projection = cJ.getProjection();
        if (cJ === BMAP_PERSPECTIVE_MAP) {
            _addStat(5002)
        }
        if (cJ === BMAP_SATELLITE_MAP || cJ === BMAP_HYBRID_MAP) {
            _addStat(5003)
        }
        var T = cH.config;
        T.userMinZoom = cI.minZoom;
        T.userMaxZoom = cI.maxZoom;
        cH._checkZoom();
        cH.temp = {operating:false, arrow:0, lastDomMoveTime:0, lastLoadTileTime:0, lastMovingTime:0, canKeyboard:false, registerIndex:-1, curSpots:[]};
        cH.platform.style.cursor = cH.config.defaultCursor;
        for (var cF = 0; cF < BMap._register.length; cF++) {
            BMap._register[cF](cH)
        }
        cH.temp.registerIndex = cF;
        cH._bind();
        ct.load("map", function () {
            cH._draw()
        });
        if (bH()) {
            ct.load("oppc", function () {
                cH._asyncRegister()
            })
        }
        if (aw()) {
            ct.load("opmb", function () {
                cH._asyncRegister()
            })
        }
        cG = null
    }

    a2.lang.inherits(bt, a2.lang.Class, "Map");
    a2.extend(bt.prototype, {render:function () {
        var T = X("div");
        var cG = T.style;
        cG.overflow = "visible";
        cG.position = "absolute";
        cG.zIndex = "0";
        cG.top = cG.left = "0px";
        var cE = X("div", {"class":"BMap_mask"});
        var cF = cE.style;
        cF.position = "absolute";
        cF.top = cF.left = "0px";
        cF.zIndex = "9";
        cF.overflow = "hidden";
        cF.WebkitUserSelect = "none";
        T.appendChild(cE);
        return T
    }, _setStyle:function (cE) {
        var T = cE.style;
        T.overflow = "hidden";
        if (aE(cE).position != "absolute") {
            T.position = "relative";
            T.zIndex = 0
        }
        T.backgroundColor = "#F3F1EC";
        T.color = "#000";
        T.textAlign = "left"
    }, _bind:function () {
        var T = this;
        T._watchSize = function () {
            var cE = T.getSize();
            if (T.width != cE.width || T.height != cE.height) {
                var cG = new aC(T.width, T.height);
                var cH = new ba("onbeforeresize");
                cH.size = cG;
                T.dispatchEvent(cH);
                T._updateCenterPoint((cE.width - T.width) / 2, (cE.height - T.height) / 2);
                T.maskLayer.style.width = (T.width = cE.width) + "px";
                T.maskLayer.style.height = (T.height = cE.height) + "px";
                var cF = new ba("onresize");
                cF.size = cE;
                T.dispatchEvent(cF)
            }
        };
        if (T.config.enableAutoResize) {
            T.temp.autoResizeTimer = setInterval(T._watchSize, 80)
        }
    }, _updateCenterPoint:function (cG, cE, cK, cJ) {
        var cH = this.getMapType().getZoomUnits(this.getZoom());
        var cL = this.projection;
        var cI = true;
        if (cK && b6.isInRange(cK)) {
            this.centerPoint = new b6(cK.lng, cK.lat);
            cI = false
        }
        var cF = (cK && cJ) ? cL.lngLatToMercator(cK, this.currentCity) : this.mercatorCenter;
        if (cF) {
            this.mercatorCenter = new b6(cF.lng + cG * cH, cF.lat - cE * cH);
            var T = cL.mercatorToLngLat(this.mercatorCenter, this.currentCity);
            if (T && cI) {
                this.centerPoint = T
            }
        }
    }, zoomTo:function (cG, cE) {
        if (!aF(cG)) {
            return
        }
        cG = this._getProperZoom(cG).zoom;
        if (cG == this.zoomLevel) {
            return
        }
        this.lastLevel = this.zoomLevel;
        this.zoomLevel = cG;
        var cF;
        if (cE) {
            cF = cE
        } else {
            if (this.getInfoWindow()) {
                cF = this.getInfoWindow().getPosition()
            }
        }
        if (cF) {
            var T = this.pointToPixel(cF, this.lastLevel);
            this._updateCenterPoint(this.width / 2 - T.x, this.height / 2 - T.y, this.pixelToPoint(T, this.lastLevel), true)
        }
        this.dispatchEvent(new ba("onzoomstart"));
        this.dispatchEvent(new ba("onzoomstartcode"))
    }, setZoom:function (T) {
        this.zoomTo(T)
    }, zoomIn:function (T) {
        this.zoomTo(this.zoomLevel + 1, T)
    }, zoomOut:function (T) {
        this.zoomTo(this.zoomLevel - 1, T)
    }, panTo:function (T, cE) {
        if (!(T instanceof b6)) {
            return
        }
        this.mercatorCenter = this.projection.lngLatToMercator(T, this.currentCity);
        if (b6.isInRange(T)) {
            this.centerPoint = new b6(T.lng, T.lat)
        } else {
            this.centerPoint = this.projection.mercatorToLngLat(this.mercatorCenter, this.currentCity)
        }
    }, panBy:function (cE, T) {
        cE = Math.round(cE) || 0;
        T = Math.round(T) || 0;
        this._updateCenterPoint(-cE, -T)
    }, addControl:function (T) {
        if (T && G(T._i)) {
            T._i(this);
            this.dispatchEvent(new ba("onaddcontrol", T))
        }
    }, removeControl:function (T) {
        if (T && G(T.remove)) {
            T.remove();
            this.dispatchEvent(new ba("onremovecontrol", T))
        }
    }, addContextMenu:function (T) {
        if (T && G(T.initialize)) {
            T.initialize(this);
            this.dispatchEvent(new ba("onaddcontextmenu", T))
        }
    }, removeContextMenu:function (T) {
        if (T && G(T.remove)) {
            this.dispatchEvent(new ba("onremovecontextmenu", T));
            T.remove()
        }
    }, addOverlay:function (T) {
        if (T && G(T._i)) {
            T._i(this);
            this.dispatchEvent(new ba("onaddoverlay", T))
        }
    }, removeOverlay:function (T) {
        if (T && G(T.remove)) {
            T.remove();
            this.dispatchEvent(new ba("onremoveoverlay", T))
        }
    }, clearOverlays:function () {
        this.dispatchEvent(new ba("onclearoverlays"))
    }, addTileLayer:function (T) {
        if (T) {
            this.dispatchEvent(new ba("onaddtilelayer", T))
        }
    }, removeTileLayer:function (T) {
        if (T) {
            this.dispatchEvent(new ba("onremovetilelayer", T))
        }
    }, setMapType:function (cE) {
        if (this.mapType === cE) {
            return
        }
        var cF = new ba("onsetmaptype");
        var T = this.mapType;
        cF.preMapType = T;
        this.mapType = this.config.mapType = cE;
        this.projection = this.mapType.getProjection();
        this._updateCenterPoint(0, 0, this.getCenter(), true);
        this._checkZoom();
        var cG = this._getProperZoom(this.getZoom()).zoom;
        this.zoomTo(cG);
        this.dispatchEvent(cF);
        var cF = new ba("onmaptypechange");
        cF.zoomLevel = cG;
        cF.mapType = cE;
        this.dispatchEvent(cF);
        if (cE === BMAP_SATELLITE_MAP || cE === BMAP_HYBRID_MAP) {
            _addStat(5003)
        }
    }, setCenter:function (T) {
        var cF = this;
        if (T instanceof b6) {
            cF.panTo(T, {noAnimation:true})
        } else {
            if (bW(T)) {
                var cE = this._getLocal();
                cE.setSearchCompleteCallback(function (cG) {
                    if (cE.getStatus() == 0 && cE._json.result.type == 2) {
                        cF.setCenter(cG.getPoi(0).point);
                        if (BMAP_PERSPECTIVE_MAP.getCityName(T)) {
                            cF.setCurrentCity(T)
                        }
                    }
                });
                cE.search(T)
            }
        }
    }, centerAndZoom:function (T, cF) {
        var cE = this;
        if (bW(T)) {
            var cI = cE._getLocal();
            cI.setSearchCompleteCallback(function (cJ) {
                if (cI.getStatus() == 0 && cI._json.result.type == 2) {
                    var cL = cJ.getPoi(0).point;
                    var cK = cF || P.getBestLevel(cI._json.content.level, cE);
                    cE.centerAndZoom(cL, cK);
                    if (BMAP_PERSPECTIVE_MAP.getCityName(T)) {
                        cE.setCurrentCity(T)
                    }
                }
            });
            cI.search(T);
            return
        }
        if (!(T instanceof b6) || !cF) {
            return
        }
        cF = cE._getProperZoom(cF).zoom;
        cE.lastLevel = cE.zoomLevel || cF;
        cE.zoomLevel = cF;
        cE.centerPoint = new b6(T.lng, T.lat);
        cE.mercatorCenter = cE.projection.lngLatToMercator(cE.centerPoint, cE.currentCity);
        cE.defaultZoomLevel = cE.defaultZoomLevel || cE.zoomLevel;
        cE.defaultCenter = cE.defaultCenter || cE.centerPoint;
        var cH = new ba("onload");
        var cG = new ba("onloadcode");
        cH.point = new b6(T.lng, T.lat);
        cH.pixel = cE.pointToPixel(cE.centerPoint, cE.zoomLevel);
        cH.zoom = cF;
        if (!cE.loaded) {
            cE.loaded = true;
            cE.dispatchEvent(cH)
        }
        cE.dispatchEvent(cG);
        cE.dispatchEvent(new ba("onmoveend"));
        if (cE.lastLevel != cE.zoomLevel) {
            cE.dispatchEvent(new ba("onzoomend"))
        }
    }, _getLocal:function () {
        if (!this.temp.local) {
            this.temp.local = new aY(1)
        }
        return this.temp.local
    }, reset:function () {
        this.centerAndZoom(this.defaultCenter, this.defaultZoomLevel, true)
    }, enableDragging:function () {
        this.config.enableDragging = true
    }, disableDragging:function () {
        this.config.enableDragging = false
    }, enableInertialDragging:function () {
        this.config.enableInertialDragging = true
    }, disableInertialDragging:function () {
        this.config.enableInertialDragging = false
    }, enableScrollWheelZoom:function () {
        this.config.enableWheelZoom = true
    }, disableScrollWheelZoom:function () {
        this.config.enableWheelZoom = false
    }, enableContinuousZoom:function () {
        this.config.enableContinuousZoom = true
    }, disableContinuousZoom:function () {
        this.config.enableContinuousZoom = false
    }, enableDoubleClickZoom:function () {
        this.config.enableDblclickZoom = true
    }, disableDoubleClickZoom:function () {
        this.config.enableDblclickZoom = false
    }, enableKeyboard:function () {
        this.config.enableKeyboard = true
    }, disableKeyboard:function () {
        this.config.enableKeyboard = false
    }, enablePinchToZoom:function () {
        this.config.enablePinchToZoom = true
    }, disablePinchToZoom:function () {
        this.config.enablePinchToZoom = false
    }, enableAutoResize:function () {
        this.config.enableAutoResize = true;
        this._watchSize();
        if (!this.temp.autoResizeTimer) {
            this.temp.autoResizeTimer = setInterval(this._watchSize, 80)
        }
    }, disableAutoResize:function () {
        this.config.enableAutoResize = false;
        if (this.temp.autoResizeTimer) {
            clearInterval(this.temp.autoResizeTimer);
            this.temp.autoResizeTimer = null
        }
    }, getSize:function () {
        return new aC(this.container.clientWidth, this.container.clientHeight)
    }, getCenter:function () {
        return this.centerPoint
    }, getZoom:function () {
        return this.zoomLevel
    }, checkResize:function () {
        this._watchSize()
    }, _getProperZoom:function (cF) {
        var cE = this.config.minZoom, T = this.config.maxZoom, cG = false;
        if (cF < cE) {
            cG = true;
            cF = cE
        }
        if (cF > T) {
            cG = true;
            cF = T
        }
        return{zoom:cF, exceeded:cG}
    }, getContainer:function () {
        return this.container
    }, pointToPixel:function (T, cE) {
        cE = cE || this.getZoom();
        return this.projection.pointToPixel(T, cE, this.mercatorCenter, this.getSize(), this.currentCity)
    }, pixelToPoint:function (T, cE) {
        cE = cE || this.getZoom();
        return this.projection.pixelToPoint(T, cE, this.mercatorCenter, this.getSize(), this.currentCity)
    }, pointToOverlayPixel:function (T, cF) {
        if (!T) {
            return
        }
        var cG = new b6(T.lng, T.lat);
        var cE = this.pointToPixel(cG, cF);
        cE.x -= this.offsetX;
        cE.y -= this.offsetY;
        return cE
    }, overlayPixelToPoint:function (T, cF) {
        if (!T) {
            return
        }
        var cE = new bo(T.x, T.y);
        cE.x += this.offsetX;
        cE.y += this.offsetY;
        return this.pixelToPoint(cE, cF)
    }, getBounds:function () {
        if (!this.isLoaded()) {
            return new bG()
        }
        var cE = arguments[0] || {}, cG = cE.margins || [0, 0, 0, 0], T = cE.zoom || null, cH = this.pixelToPoint({x:cG[3], y:this.height - cG[2]}, T), cF = this.pixelToPoint({x:this.width - cG[1], y:cG[0]}, T);
        return new bG(cH, cF)
    }, isLoaded:function () {
        return !!this.loaded
    }, _getBestLevel:function (cE, cF) {
        var cI = this.getMapType();
        var cK = cF.margins || [10, 10, 10, 10], cH = cF.zoomFactor || 0, cL = cK[1] + cK[3], cJ = cK[0] + cK[2], T = cI.getMinZoom(), cN = cI.getMaxZoom();
        for (var cG = cN; cG >= T; cG--) {
            var cM = this.getMapType().getZoomUnits(cG);
            if (cE.toSpan().lng / cM < this.width - cL && cE.toSpan().lat / cM < this.height - cJ) {
                break
            }
        }
        cG += cH;
        if (cG < T) {
            cG = T
        }
        if (cG > cN) {
            cG = cN
        }
        return cG
    }, getViewport:function (cM, cE) {
        var cQ = {center:this.getCenter(), zoom:this.getZoom()};
        if (!cM || !cM instanceof bG && cM.length == 0 || cM instanceof bG && cM.isEmpty()) {
            return cQ
        }
        var cO = [];
        if (cM instanceof bG) {
            cO.push(cM.getNorthEast());
            cO.push(cM.getSouthWest())
        } else {
            cO = cM.slice(0)
        }
        cE = cE || {};
        var cI = [];
        for (var cJ = 0, cH = cO.length; cJ < cH; cJ++) {
            cI.push(this.projection.lngLatToMercator(cO[cJ], this.currentCity))
        }
        var cF = new bG();
        for (var cJ = cI.length - 1; cJ >= 0; cJ--) {
            cF.extend(cI[cJ])
        }
        if (cF.isEmpty()) {
            return cQ
        }
        var T = cF.getCenter();
        var cP = this._getBestLevel(cF, cE);
        if (cE.margins) {
            var cL = cE.margins, cK = (cL[1] - cL[3]) / 2, cN = (cL[0] - cL[2]) / 2, cG = this.getMapType().getZoomUnits(cP);
            T.lng = T.lng + cG * cK;
            T.lat = T.lat + cG * cN
        }
        T = this.projection.mercatorToLngLat(T, this.currentCity);
        return{center:T, zoom:cP}
    }, setViewport:function (cE, cH) {
        var T;
        if (cE && cE.center) {
            T = cE
        } else {
            T = this.getViewport(cE, cH)
        }
        cH = cH || {};
        var cF = cH.delay || 200;
        if (T.zoom == this.zoomLevel && cH.enableAnimation != false) {
            var cG = this;
            setTimeout(function () {
                cG.panTo(T.center, {duration:210})
            }, cF)
        } else {
            this.centerAndZoom(T.center, T.zoom)
        }
    }, getPanes:function () {
        return this._panes
    }, getInfoWindow:function () {
        if (this.temp.infoWin && this.temp.infoWin.isOpen()) {
            return this.temp.infoWin
        }
        return null
    }, getDistance:function (cF, T) {
        if (!cF || !T) {
            return
        }
        var cE = 0;
        cE = a4.getDistanceByLL(cF, T);
        return cE
    }, getOverlays:function () {
        var cG = [], cH = this._overlays, cF = this._customOverlays;
        if (cH) {
            for (var cE in cH) {
                if (cH[cE] instanceof V) {
                    cG.push(cH[cE])
                }
            }
        }
        if (cF) {
            for (var cE = 0, T = cF.length; cE < T; cE++) {
                cG.push(cF[cE])
            }
        }
        return cG
    }, getMapType:function () {
        return this.mapType
    }, _asyncRegister:function () {
        for (var T = this.temp.registerIndex; T < BMap._register.length; T++) {
            BMap._register[T](this)
        }
        this.temp.registerIndex = T
    }, setCurrentCity:function (T) {
        this.currentCity = BMAP_PERSPECTIVE_MAP.getCityName(T);
        this.cityCode = BMAP_PERSPECTIVE_MAP.getCityCode(this.currentCity)
    }, setDefaultCursor:function (T) {
        this.config.defaultCursor = T;
        if (this.platform) {
            this.platform.style.cursor = this.config.defaultCursor
        }
    }, getDefaultCursor:function () {
        return this.config.defaultCursor
    }, setDraggingCursor:function (T) {
        this.config.draggingCursor = T
    }, getDraggingCursor:function () {
        return this.config.draggingCursor
    }, highResolutionEnabled:function () {
        return this.config.enableHighResolution && window.devicePixelRatio > 1
    }, addHotspot:function (cE) {
        if (cE instanceof cf) {
            this._hotspots[cE.guid] = cE;
            cE.initialize(this)
        }
        var T = this;
        ct.load("hotspot", function () {
            T._asyncRegister()
        })
    }, removeHotspot:function (T) {
        if (this._hotspots[T.guid]) {
            delete this._hotspots[T.guid]
        }
    }, clearHotspots:function () {
        this._hotspots = {}
    }, _checkZoom:function () {
        var cE = this.mapType.getMinZoom();
        var cF = this.mapType.getMaxZoom();
        var T = this.config;
        T.minZoom = T.userMinZoom || cE;
        T.maxZoom = T.userMaxZoom || cF;
        if (T.minZoom < cE) {
            T.minZoom = cE
        }
        if (T.maxZoom > cF) {
            T.maxZoom = cF
        }
    }, setMinZoom:function (T) {
        if (T > this.config.maxZoom) {
            T = this.config.maxZoom
        }
        this.config.userMinZoom = T;
        this._updateZoom()
    }, setMaxZoom:function (T) {
        if (T < this.config.minZoom) {
            T = this.config.minZoom
        }
        this.config.userMaxZoom = T;
        this._updateZoom()
    }, _updateZoom:function () {
        this._checkZoom();
        var T = this.config;
        if (this.zoomLevel < T.minZoom) {
            this.setZoom(T.minZoom)
        } else {
            if (this.zoomLevel > T.maxZoom) {
                this.setZoom(T.maxZoom)
            }
        }
        var cE = new ba("onzoomspanchange");
        cE.minZoom = T.minZoom;
        cE.maxZoom = T.maxZoom;
        this.dispatchEvent(cE)
    }});
    window.BMAP_API_VERSION = "1.3";
    window.BMAP_COORD_LNGLAT = 0;
    window.BMAP_COORD_MERCATOR = 1;
    window.BMAP_SYS_DRAWER = 0;
    window.BMAP_SVG_DRAWER = 1;
    window.BMAP_VML_DRAWER = 2;
    window.BMAP_CANVAS_DRAWER = 3;
    window._addStat = function (cI, cH) {
        if (!cI) {
            return
        }
        cH = cH || {};
        var cG = "";
        for (var cE in cH) {
            cG = cG + "&" + cE + "=" + encodeURIComponent(cH[cE])
        }
        var cJ = function (cK) {
            if (!cK) {
                return
            }
            _addStat._sending = true;
            setTimeout(function () {
                _addStat._img.src = b5.imgPath + "blank.gif?" + cK.src
            }, 50)
        };
        var T = function () {
            var cK = _addStat._reqQueue.shift();
            if (cK) {
                cJ(cK)
            }
        };
        var cF = (Math.random() * 100000000).toFixed(0);
        if (_addStat._sending) {
            _addStat._reqQueue.push({src:"t=" + cF + "&code=" + cI + cG})
        } else {
            cJ({src:"t=" + cF + "&code=" + cI + cG})
        }
        if (!_addStat._binded) {
            a2.on(_addStat._img, "load", function () {
                _addStat._sending = false;
                T()
            });
            a2.on(_addStat._img, "error", function () {
                _addStat._sending = false;
                T()
            });
            _addStat._binded = true
        }
    };
    window._addStat._reqQueue = [];
    window._addStat._img = new Image();
    _addStat(5000);
    function g(cG) {
        var T = {duration:1000, fps:30, delay:0, transition:ar.linear, onStop:function () {
        }};
        this._anis = [];
        if (cG) {
            for (var cE in cG) {
                T[cE] = cG[cE]
            }
        }
        this._opts = T;
        if (aF(T.delay)) {
            var cF = this;
            setTimeout(function () {
                cF.start()
            }, T.delay)
        } else {
            if (T.delay != g.INFINITE) {
                this.start()
            }
        }
    }

    g.INFINITE = "INFINITE";
    g.prototype.start = function () {
        this._beginTime = aA();
        this._endTime = this._beginTime + this._opts.duration;
        this._launch()
    };
    g.prototype.add = function (T) {
        this._anis.push(T)
    };
    g.prototype._launch = function () {
        var cF = this;
        var T = aA();
        if (T >= cF._endTime) {
            if (G(cF._opts.render)) {
                cF._opts.render(cF._opts.transition(1))
            }
            if (G(cF._opts.finish)) {
                cF._opts.finish()
            }
            if (cF._anis.length > 0) {
                var cE = cF._anis[0];
                cE._anis = [].concat(cF._anis.slice(1));
                cE.start()
            }
            return
        }
        cF.schedule = cF._opts.transition((T - cF._beginTime) / cF._opts.duration);
        if (G(cF._opts.render)) {
            cF._opts.render(cF.schedule)
        }
        if (!cF.terminative) {
            cF._timer = setTimeout(function () {
                cF._launch()
            }, 1000 / cF._opts.fps)
        }
    };
    g.prototype.stop = function (cE) {
        this.terminative = true;
        for (var T = 0; T < this._anis.length; T++) {
            this._anis[T].stop();
            this._anis[T] = null
        }
        this._anis.length = 0;
        if (this._timer) {
            clearTimeout(this._timer);
            this._timer = null
        }
        this._opts.onStop(this.schedule);
        if (cE) {
            this._endTime = this._beginTime;
            this._launch()
        }
    };
    g.prototype.cancel = function () {
        if (this._timer) {
            clearTimeout(this._timer)
        }
        this._endTime = this._beginTime;
        this.schedule = 0
    };
    g.prototype.setFinishCallback = function (T) {
        if (this._anis.length > 0) {
            this._anis[this._anis.length - 1]._opts.finish = T
        } else {
            this._opts.finish = T
        }
    };
    var ar = {linear:function (T) {
        return T
    }, reverse:function (T) {
        return 1 - T
    }, easeInQuad:function (T) {
        return T * T
    }, easeInCubic:function (T) {
        return Math.pow(T, 3)
    }, easeOutQuad:function (T) {
        return -(T * (T - 2))
    }, easeOutCubic:function (T) {
        return Math.pow((T - 1), 3) + 1
    }, easeInOutQuad:function (T) {
        if (T < 0.5) {
            return T * T * 2
        } else {
            return -2 * (T - 2) * T - 1
        }
        return
    }, easeInOutCubic:function (T) {
        if (T < 0.5) {
            return Math.pow(T, 3) * 4
        } else {
            return Math.pow(T - 1, 3) * 4 + 1
        }
    }, easeInOutSine:function (T) {
        return(1 - Math.cos(Math.PI * T)) / 2
    }};
    ar["ease-in"] = ar.easeInQuad;
    ar["ease-out"] = ar.easeOutQuad;
    var b5 = {imgPath:"http://api.map.baidu.com/images/", cityNames:{"\u5317\u4eac":"bj", "\u4e0a\u6d77":"sh", "\u6df1\u5733":"sz", "\u5e7f\u5dde":"gz"}, fontFamily:"arial,sans-serif"};
    if (a2.browser.firefox) {
        a2.extend(b5, {distCursor:"url(" + b5.imgPath + "ruler.cur),crosshair", defaultCursor:"-moz-grab", draggingCursor:"-moz-grabbing"});
        if (a2.platform.isWindows) {
            b5.fontFamily = "arial,simsun,sans-serif"
        }
    } else {
        if (a2.browser.chrome || a2.browser.safari) {
            a2.extend(b5, {distCursor:"url(" + b5.imgPath + "ruler.cur) 2 6,crosshair", defaultCursor:"url(" + b5.imgPath + "openhand.cur) 8 8,default", draggingCursor:"url(" + b5.imgPath + "closedhand.cur) 8 8,move"})
        } else {
            a2.extend(b5, {distCursor:"url(" + b5.imgPath + "ruler.cur),crosshair", defaultCursor:"url(" + b5.imgPath + "openhand.cur),default", draggingCursor:"url(" + b5.imgPath + "closedhand.cur),move"})
        }
    }
    function aq(cF, cE, T) {
        this.id = cF;
        this.bounds = cE;
        this.content = T
    }

    var bh = {undo:1, redo:2, zoom:4, drag:8, move:16, mousewheel:32, toolbarOperation:64, stdMapCtrlDrag:128, dblclick:256};

    function bC(cF, T) {
        var cE = cF.style;
        cE.left = T[0] + "px";
        cE.top = T[1] + "px"
    }

    function cp(T) {
        if (a2.browser.ie > 0) {
            T.unselectable = "on"
        } else {
            T.style.MozUserSelect = "none"
        }
    }

    function w(T) {
        return T && T.parentNode && T.parentNode.nodeType != 11
    }

    function ao(cE, T) {
        a2.dom.insertHTML(cE, "beforeEnd", T);
        return cE.lastChild
    }

    function bR(T) {
        var cE = {left:0, top:0};
        while (T && T.offsetParent) {
            cE.left += T.offsetLeft;
            cE.top += T.offsetTop;
            T = T.offsetParent
        }
        return cE
    }

    function aK(T) {
        var T = window.event || T;
        T.stopPropagation ? T.stopPropagation() : T.cancelBubble = true
    }

    function cv(T) {
        var T = window.event || T;
        T.preventDefault ? T.preventDefault() : T.returnValue = false;
        return false
    }

    function ch(T) {
        aK(T);
        return cv(T)
    }

    function cz() {
        var T = document.documentElement, cE = document.body;
        if (T && (T.scrollTop || T.scrollLeft)) {
            return[T.scrollTop, T.scrollLeft]
        } else {
            if (cE) {
                return[cE.scrollTop, cE.scrollLeft]
            } else {
                return[0, 0]
            }
        }
    }

    function cm(cE, T) {
        if (!cE || !T) {
            return
        }
        return Math.round(Math.sqrt(Math.pow(cE.x - T.x, 2) + Math.pow(cE.y - T.y, 2)))
    }

    function M(T, cF) {
        var cE = [];
        cF = cF || function (cH) {
            return cH
        };
        for (var cG in T) {
            cE.push(cG + "=" + cF(T[cG]))
        }
        return cE.join("&")
    }

    function X(cE, T, cF) {
        var cG = document.createElement(cE);
        if (cF) {
            cG = document.createElementNS(cF, cE)
        }
        return a2.dom.setAttrs(cG, T || {})
    }

    function aE(T) {
        if (T.currentStyle) {
            return T.currentStyle
        } else {
            if (T.ownerDocument && T.ownerDocument.defaultView) {
                return T.ownerDocument.defaultView.getComputedStyle(T, null)
            }
        }
    }

    function G(T) {
        return typeof T == "function"
    }

    function aF(T) {
        return typeof T == "number"
    }

    function bW(T) {
        return typeof T == "string"
    }

    function ca(T) {
        return typeof T != "undefined"
    }

    function cC(T) {
        return typeof T == "object"
    }

    function aT(T) {
        return"[object Array]" == Object.prototype.toString.call(T)
    }

    var b8 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    function bO(cG) {
        var cE = "";
        var cN, cL, cJ = "";
        var cM, cK, cI, cH = "";
        var cF = 0;
        var T = /[^A-Za-z0-9\+\/\=]/g;
        if (!cG || T.exec(cG)) {
            return cG
        }
        cG = cG.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        do {
            cM = b8.indexOf(cG.charAt(cF++));
            cK = b8.indexOf(cG.charAt(cF++));
            cI = b8.indexOf(cG.charAt(cF++));
            cH = b8.indexOf(cG.charAt(cF++));
            cN = (cM << 2) | (cK >> 4);
            cL = ((cK & 15) << 4) | (cI >> 2);
            cJ = ((cI & 3) << 6) | cH;
            cE = cE + String.fromCharCode(cN);
            if (cI != 64) {
                cE = cE + String.fromCharCode(cL)
            }
            if (cH != 64) {
                cE = cE + String.fromCharCode(cJ)
            }
            cN = cL = cJ = "";
            cM = cK = cI = cH = ""
        } while (cF < cG.length);
        return cE
    }

    var ba = a2.lang.Event;

    function aw() {
        return !!(a2.platform.isIphone || a2.platform.isIpad || a2.platform.isAndroid)
    }

    function bH() {
        return !!(a2.platform.isWindows || a2.platform.isMacintosh || a2.platform.isX11)
    }

    function aA() {
        return(new Date).getTime()
    }

    var cq = {request:function (cE) {
        var T = X("script", {src:cE, type:"text/javascript", charset:"utf-8"});
        if (T.addEventListener) {
            T.addEventListener("load", function (cG) {
                var cF = cG.target;
                cF.parentNode.removeChild(cF)
            }, false)
        } else {
            if (T.attachEvent) {
                T.attachEvent("onreadystatechange", function (cG) {
                    var cF = window.event.srcElement;
                    if (cF && (cF.readyState == "loaded" || cF.readyState == "complete")) {
                        cF.parentNode.removeChild(cF)
                    }
                })
            }
        }
        setTimeout(function () {
            document.getElementsByTagName("head")[0].appendChild(T);
            T = null
        }, 1)
    }};

    function ct() {
    }

    a2.object.extend(ct, {Request:{INITIAL:-1, WAITING:0, COMPLETED:1}, Dependency:{control:[], marker:[], poly:["marker"], infowindow:["marker"], menu:[], oppc:[], opmb:[], scommon:[], local:["scommon"], route:["scommon"], othersearch:["scommon"], autocomplete:["scommon"], buslinesearch:["route"], hotspot:[]}, preLoaded:{}, Config:{_baseUrl:"http://api.map.baidu.com/getmodules?v=1.3", _timeout:5000}, delayFlag:false, Module:{_modules:{}, _arrMdls:[]}, load:function (cE, cG) {
        var T = this.current(cE);
        if (T._status == this.Request.COMPLETED) {
            return
        } else {
            if (T._status == this.Request.INITIAL) {
                this.combine(cE);
                this.pushUniqueMdl(cE);
                var cF = this;
                if (cF.delayFlag == false) {
                    cF.delayFlag = true;
                    window.setTimeout(function () {
                        var cH = cF.Config._baseUrl + "&mod=" + cF.Module._arrMdls.join(",");
                        cq.request(cH);
                        cF.Module._arrMdls.length = 0;
                        cF.delayFlag = false
                    }, 1)
                }
                T._status = this.Request.WAITING
            }
            T._callbacks.push(cG)
        }
    }, combine:function (T) {
        if (T && this.Dependency[T]) {
            var cF = this.Dependency[T];
            for (var cE = 0; cE < cF.length; cE++) {
                this.combine(cF[cE]);
                if (!this.Module._modules[cF[cE]]) {
                    this.pushUniqueMdl(cF[cE])
                }
            }
        }
    }, pushUniqueMdl:function (cE) {
        for (var T = 0; T < this.Module._arrMdls.length; T++) {
            if (this.Module._arrMdls[T] == cE) {
                return
            }
        }
        this.Module._arrMdls.push(cE)
    }, run:function (cF, cH) {
        var cE = this.current(cF);
        try {
            eval(cH)
        } catch (cI) {
            return
        }
        cE._status = this.Request.COMPLETED;
        for (var cG = 0, T = cE._callbacks.length; cG < T; cG++) {
            cE._callbacks[cG]()
        }
        cE._callbacks.length = 0
    }, check:function (cE, cF) {
        var T = this;
        T.timeout = setTimeout(function () {
            var cG = T.Module._modules[cE]._status;
            if (cG != T.Request.COMPLETED) {
                T.remove(cE);
                T.load(cE, cF)
            } else {
                clearTimeout(T.timeout)
            }
        }, T.Config._timeout)
    }, current:function (cE) {
        var T;
        if (!this.Module._modules[cE]) {
            this.Module._modules[cE] = {};
            this.Module._modules[cE]._status = this.Request.INITIAL;
            this.Module._modules[cE]._callbacks = []
        }
        T = this.Module._modules[cE];
        return T
    }, remove:function (cE) {
        var T = this.current(cE);
        delete T
    }});
    window._jsload = function (T, cE) {
        ct.run(T, cE)
    };
    function bo(T, cE) {
        this.x = T || 0;
        this.y = cE || 0
    }

    bo.prototype.equals = function (T) {
        return T && T.x == this.x && T.y == this.y
    };
    function aC(cE, T) {
        this.width = cE || 0;
        this.height = T || 0
    }

    aC.prototype.equals = function (T) {
        return T && this.width == T.width && this.height == T.height
    };
    function cf(T, cE) {
        if (!T) {
            return
        }
        this._position = T;
        this.guid = "spot" + (cf.guid++);
        cE = cE || {};
        this._text = cE.text || "";
        this._offsets = cE.offsets ? cE.offsets.slice(0) : [5, 5, 5, 5];
        this._userData = cE.userData || null;
        this._minZoom = cE.minZoom || null;
        this._maxZoom = cE.maxZoom || null
    }

    cf.guid = 0;
    a2.extend(cf.prototype, {initialize:function (T) {
        if (this._minZoom == null) {
            this._minZoom = T.config.minZoom
        }
        if (this._maxZoom == null) {
            this._maxZoom = T.config.maxZoom
        }
    }, setPosition:function (T) {
        if (T instanceof b6) {
            this._position = T
        }
    }, getPosition:function () {
        return this._position
    }, setText:function (T) {
        this._text = T
    }, getText:function () {
        return this._text
    }, setUserData:function (T) {
        this._userData = T
    }, getUserData:function () {
        return this._userData
    }});
    function ci() {
        this._map = null;
        this._container;
        this._type = "control";
        this.blockInfoWindow = true;
        this._visible = true
    }

    a2.lang.inherits(ci, a2.lang.Class, "Control");
    a2.extend(ci.prototype, {initialize:function (T) {
        this._map = T;
        if (this._container) {
            T.container.appendChild(this._container);
            return this._container
        }
        return
    }, _i:function (T) {
        if (!this._container && this.initialize && G(this.initialize)) {
            this._container = this.initialize(T)
        }
        this._opts = this._opts || {printable:false};
        this._setStyle();
        this._setPosition();
        if (this._container) {
            this._container._jsobj = this
        }
    }, _setStyle:function () {
        var cE = this._container;
        if (cE) {
            var T = cE.style;
            T.position = "absolute";
            T.zIndex = this._cZIndex || "10";
            T.MozUserSelect = "none";
            T.WebkitTextSizeAdjust = "none";
            if (!this._opts.printable) {
                a2.dom.addClass(cE, "BMap_noprint")
            }
            a2.on(cE, "contextmenu", ch)
        }
    }, remove:function () {
        this._map = null;
        if (!this._container) {
            return
        }
        this._container.parentNode && this._container.parentNode.removeChild(this._container);
        this._container._jsobj = null;
        this._container = null
    }, _render:function () {
        this._container = ao(this._map.container, "<div unselectable='on'></div>");
        if (this._visible == false) {
            a2.dom.hide(this._container)
        }
        return this._container
    }, _setPosition:function () {
        this.setAnchor(this._opts.anchor)
    }, setAnchor:function (cG) {
        if (this.anchorFixed || !aF(cG) || isNaN(cG) || cG < BMAP_ANCHOR_TOP_LEFT || cG > BMAP_ANCHOR_BOTTOM_RIGHT) {
            cG = this.defaultAnchor
        }
        this._opts = this._opts || {printable:false};
        this._opts.offset = this._opts.offset || this.defaultOffset;
        var cF = this._opts.anchor;
        this._opts.anchor = cG;
        if (!this._container) {
            return
        }
        var cI = this._container;
        var T = this._opts.offset.width;
        var cH = this._opts.offset.height;
        cI.style.left = cI.style.top = cI.style.right = cI.style.bottom = "auto";
        switch (cG) {
            case BMAP_ANCHOR_TOP_LEFT:
                cI.style.top = cH + "px";
                cI.style.left = T + "px";
                break;
            case BMAP_ANCHOR_TOP_RIGHT:
                cI.style.top = cH + "px";
                cI.style.right = T + "px";
                break;
            case BMAP_ANCHOR_BOTTOM_LEFT:
                cI.style.bottom = cH + "px";
                cI.style.left = T + "px";
                break;
            case BMAP_ANCHOR_BOTTOM_RIGHT:
                cI.style.bottom = cH + "px";
                cI.style.right = T + "px";
                break;
            default:
                break
        }
        var cE = ["TL", "TR", "BL", "BR"];
        a2.dom.removeClass(this._container, "anchor" + cE[cF]);
        a2.dom.addClass(this._container, "anchor" + cE[cG])
    }, getAnchor:function () {
        return this._opts.anchor
    }, setOffset:function (T) {
        if (!(T instanceof aC)) {
            return
        }
        this._opts = this._opts || {printable:false};
        this._opts.offset = new aC(T.width, T.height);
        if (!this._container) {
            return
        }
        this.setAnchor(this._opts.anchor)
    }, getOffset:function () {
        return this._opts.offset
    }, getDom:function () {
        return this._container
    }, show:function () {
        if (this._visible == true) {
            return
        }
        this._visible = true;
        if (this._container) {
            a2.dom.show(this._container)
        }
    }, hide:function () {
        if (this._visible == false) {
            return
        }
        this._visible = false;
        if (this._container) {
            a2.dom.hide(this._container)
        }
    }, isPrintable:function () {
        return !!this._opts.printable
    }, isVisible:function () {
        if (!this._container && !this._map) {
            return false
        }
        return !!this._visible
    }});
    window.BMAP_ANCHOR_TOP_LEFT = 0;
    window.BMAP_ANCHOR_TOP_RIGHT = 1;
    window.BMAP_ANCHOR_BOTTOM_LEFT = 2;
    window.BMAP_ANCHOR_BOTTOM_RIGHT = 3;
    window.BMAP_NAVIGATION_CONTROL_LARGE = 0;
    window.BMAP_NAVIGATION_CONTROL_SMALL = 1;
    window.BMAP_NAVIGATION_CONTROL_PAN = 2;
    window.BMAP_NAVIGATION_CONTROL_ZOOM = 3;
    function J(T) {
        ci.call(this);
        T = T || {};
        this._opts = {printable:false, showZoomInfo:true};
        a2.object.extend(this._opts, T);
        this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
        this.defaultOffset = new aC(10, 10);
        this.setAnchor(T.anchor);
        this.setType(T.type);
        this._asyncLoadCode()
    }

    a2.lang.inherits(J, ci, "NavigationControl");
    a2.extend(J.prototype, {initialize:function (T) {
        this._map = T;
        return this._container
    }, setType:function (T) {
        if (aF(T) && T >= BMAP_NAVIGATION_CONTROL_LARGE && T <= BMAP_NAVIGATION_CONTROL_ZOOM) {
            this._opts.type = T
        } else {
            this._opts.type = BMAP_NAVIGATION_CONTROL_LARGE
        }
    }, getType:function () {
        return this._opts.type
    }, _asyncLoadCode:function () {
        var T = this;
        ct.load("control", function () {
            T._asyncDraw()
        })
    }});
    function aj(T) {
        ci.call(this);
        T = T || {};
        this._opts = {printable:false};
        a2.object.extend(this._opts, T);
        this._copyrightCollection = [];
        this.defaultAnchor = BMAP_ANCHOR_BOTTOM_LEFT;
        this.defaultOffset = new aC(5, 2);
        this.setAnchor(T.anchor);
        this._canShow = true;
        this.blockInfoWindow = false;
        this._asyncLoadCode()
    }

    a2.lang.inherits(aj, ci, "CopyrightControl");
    a2.object.extend(aj.prototype, {initialize:function (T) {
        this._map = T;
        return this._container
    }, addCopyright:function (cF) {
        if (!cF || !aF(cF.id) || isNaN(cF.id)) {
            return
        }
        var T = {bounds:null, content:""};
        for (var cE in cF) {
            T[cE] = cF[cE]
        }
        var cG = this.getCopyright(cF.id);
        if (cG) {
            for (var cH in T) {
                cG[cH] = T[cH]
            }
        } else {
            this._copyrightCollection.push(T)
        }
    }, getCopyright:function (cF) {
        for (var cE = 0, T = this._copyrightCollection.length; cE < T; cE++) {
            if (this._copyrightCollection[cE].id == cF) {
                return this._copyrightCollection[cE]
            }
        }
    }, getCopyrightCollection:function () {
        return this._copyrightCollection
    }, removeCopyright:function (cF) {
        for (var cE = 0, T = this._copyrightCollection.length; cE < T; cE++) {
            if (this._copyrightCollection[cE].id == cF) {
                r = this._copyrightCollection.splice(cE, 1);
                cE--;
                T = this._copyrightCollection.length
            }
        }
    }, _asyncLoadCode:function () {
        var T = this;
        ct.load("control", function () {
            T._asyncDraw()
        })
    }});
    function cD(T) {
        ci.call(this);
        T = T || {};
        this._opts = {printable:false};
        this._opts = a2.extend(a2.extend(this._opts, {size:new aC(150, 150), padding:5, isOpen:false, zoomInterval:4}), T);
        this.defaultAnchor = BMAP_ANCHOR_BOTTOM_RIGHT;
        this.defaultOffset = new aC(0, 0);
        this._btnWidth = 13;
        this._btnHeight = 13;
        this.setAnchor(T.anchor);
        this.setSize(this._opts.size);
        this._asyncLoadCode()
    }

    a2.lang.inherits(cD, ci, "OverviewMapControl");
    a2.extend(cD.prototype, {initialize:function (T) {
        this._map = T;
        return this._container
    }, setAnchor:function (T) {
        ci.prototype.setAnchor.call(this, T)
    }, changeView:function () {
        this.changeView._running = true;
        this._opts.isOpen = !this._opts.isOpen;
        if (!this._container) {
            this.changeView._running = false
        }
    }, setSize:function (T) {
        if (!(T instanceof aC)) {
            T = new aC(150, 150)
        }
        T.width = T.width > 0 ? T.width : 150;
        T.height = T.height > 0 ? T.height : 150;
        this._opts.size = T
    }, getSize:function () {
        return this._opts.size
    }, isOpen:function () {
        return this._opts.isOpen
    }, _asyncLoadCode:function () {
        var T = this;
        ct.load("control", function () {
            T._asyncDraw()
        })
    }});
    function bD(T) {
        ci.call(this);
        T = T || {};
        this._opts = {printable:false};
        this._opts = a2.object.extend(a2.object.extend(this._opts, {color:"black", unit:"metric"}), T);
        this.defaultAnchor = BMAP_ANCHOR_BOTTOM_LEFT;
        this.defaultOffset = new aC(81, 18);
        this.setAnchor(T.anchor);
        this._units = {metric:{name:"metric", conv:1, incon:1000, u1:"\u7c73", u2:"\u516c\u91cc"}, us:{name:"us", conv:3.2808, incon:5280, u1:"\u82f1\u5c3a", u2:"\u82f1\u91cc"}};
        if (!this._units[this._opts.unit]) {
            this._opts.unit = "metric"
        }
        this._scaleText = null;
        this._numberArray = {};
        this._asyncLoadCode()
    }

    window.BMAP_UNIT_METRIC = "metric";
    window.BMAP_UNIT_IMPERIAL = "us";
    a2.lang.inherits(bD, ci, "ScaleControl");
    a2.object.extend(bD.prototype, {initialize:function (T) {
        this._map = T;
        return this._container
    }, setColor:function (T) {
        this._opts.color = T + ""
    }, getColor:function () {
        return this._opts.color
    }, setUnit:function (T) {
        this._opts.unit = this._units[T] && this._units[T].name || this._opts.unit
    }, getUnit:function () {
        return this._opts.unit
    }, _asyncLoadCode:function () {
        var T = this;
        ct.load("control", function () {
            T._asyncDraw()
        })
    }});
    window.BMAP_MAPTYPE_CONTROL_HORIZONTAL = 0;
    window.BMAP_MAPTYPE_CONTROL_DROPDOWN = 1;
    function aG(T) {
        ci.call(this);
        T = T || {};
        this._opts = {printable:false, mapTypes:[BMAP_NORMAL_MAP, BMAP_SATELLITE_MAP, BMAP_HYBRID_MAP, BMAP_PERSPECTIVE_MAP], type:BMAP_MAPTYPE_CONTROL_HORIZONTAL};
        this.defaultAnchor = BMAP_ANCHOR_TOP_RIGHT;
        this.defaultOffset = new aC(10, 10);
        this.setAnchor(T.anchor);
        this._opts = a2.extend(a2.extend(this._opts, {offset:this.defaultOffset, enableSwitch:true}), T);
        if (aT(T.mapTypes)) {
            this._opts.mapTypes = T.mapTypes.slice(0)
        }
        this._asyncLoadCode()
    }

    a2.lang.inherits(aG, ci, "MapTypeControl");
    a2.object.extend(aG.prototype, {initialize:function (T) {
        this._map = T;
        return this._container
    }, _asyncLoadCode:function () {
        var T = this;
        ct.load("control", function () {
            T._asyncDraw()
        })
    }});
    function cs(cE) {
        a2.lang.Class.call(this);
        this._opts = {container:null, cursor:"default"};
        this._opts = a2.extend(this._opts, cE);
        this._type = "contextmenu";
        this._map = null;
        this._container;
        this._shadow;
        this._left = 0;
        this._top = 0;
        this._items = [];
        this._rItems = [];
        this._dividers = [];
        this.curPixel = null;
        this.curPoint = null;
        this._isOpen = false;
        var T = this;
        ct.load("menu", function () {
            T._draw()
        })
    }

    a2.lang.inherits(cs, a2.lang.Class, "ContextMenu");
    a2.object.extend(cs.prototype, {initialize:function (cE, T) {
        this._map = cE;
        this._overlay = T || null
    }, remove:function () {
        this._map = this._overlay = null
    }, addItem:function (cF) {
        if (!cF || cF._type != "menuitem" || cF._text == "" || cF._width <= 0) {
            return
        }
        for (var cE = 0, T = this._items.length; cE < T; cE++) {
            if (this._items[cE] === cF) {
                return
            }
        }
        this._items.push(cF);
        this._rItems.push(cF)
    }, removeItem:function (cF) {
        if (!cF || cF._type != "menuitem") {
            return
        }
        for (var cE = 0, T = this._items.length; cE < T; cE++) {
            if (this._items[cE] === cF) {
                this._items[cE].remove();
                this._items.splice(cE, 1);
                T--
            }
        }
        for (var cE = 0, T = this._rItems.length; cE < T; cE++) {
            if (this._rItems[cE] === cF) {
                this._rItems[cE].remove();
                this._rItems.splice(cE, 1);
                T--
            }
        }
    }, addSeparator:function () {
        this._items.push({_type:"divider", _dIndex:this._dividers.length});
        this._dividers.push({dom:null})
    }, removeSeparator:function (cE) {
        if (!this._dividers[cE]) {
            return
        }
        for (var cF = 0, T = this._items.length; cF < T; cF++) {
            if (this._items[cF] && this._items[cF]._type == "divider" && this._items[cF]._dIndex == cE) {
                this._items.splice(cF, 1);
                T--
            }
            if (this._items[cF] && this._items[cF]._type == "divider" && this._items[cF]._dIndex > cE) {
                this._items[cF]._dIndex--
            }
        }
        this._dividers.splice(cE, 1)
    }, getDom:function () {
        return this._container
    }, show:function () {
        if (this._isOpen == true) {
            return
        }
        this._isOpen = true
    }, hide:function () {
        if (this._isOpen == false) {
            return
        }
        this._isOpen = false
    }, setCursor:function (T) {
        if (!T) {
            return
        }
        this._opts.cursor = T
    }, getItem:function (T) {
        return this._rItems[T]
    }});
    function a8(cF, cG, cE) {
        if (!cF || !G(cG)) {
            return
        }
        a2.lang.Class.call(this);
        this._opts = {width:100, id:""};
        cE = cE || {};
        this._opts.width = (cE.width * 1) ? cE.width : 100;
        this._opts.id = cE.id ? cE.id : "";
        this._text = cF + "";
        this._callback = cG;
        this._map = null;
        this._type = "menuitem";
        this._contextmenu = null;
        this._container = null;
        this._enabled = true;
        var T = this;
        ct.load("menu", function () {
            T._draw()
        })
    }

    a2.lang.inherits(a8, a2.lang.Class, "MenuItem");
    a2.object.extend(a8.prototype, {initialize:function (T, cE) {
        this._map = T;
        this._contextmenu = cE
    }, remove:function () {
        this._contextmenu = null;
        this._map = null
    }, setText:function (T) {
        if (!T) {
            return
        }
        this._text = T + ""
    }, getDom:function () {
        return this._container
    }, enable:function () {
        this._enabled = true
    }, disable:function () {
        this._enabled = false
    }});
    function bG(T, cE) {
        if (T && !cE) {
            cE = T
        }
        this._sw = this._ne = null;
        this._swLng = this._swLat = null;
        this._neLng = this._neLat = null;
        if (T) {
            this._sw = new b6(T.lng, T.lat);
            this._ne = new b6(cE.lng, cE.lat);
            this._swLng = T.lng;
            this._swLat = T.lat;
            this._neLng = cE.lng;
            this._neLat = cE.lat
        }
    }

    a2.object.extend(bG.prototype, {isEmpty:function () {
        return !this._sw || !this._ne
    }, equals:function (T) {
        if (!(T instanceof bG) || this.isEmpty()) {
            return false
        }
        return this.getSouthWest().equals(T.getSouthWest()) && this.getNorthEast().equals(T.getNorthEast())
    }, getSouthWest:function () {
        return this._sw
    }, getNorthEast:function () {
        return this._ne
    }, containsBounds:function (T) {
        if (!(T instanceof bG) || this.isEmpty() || T.isEmpty()) {
            return false
        }
        return(T._swLng > this._swLng && T._neLng < this._neLng && T._swLat > this._swLat && T._neLat < this._neLat)
    }, getCenter:function () {
        if (this.isEmpty()) {
            return null
        }
        return new b6((this._swLng + this._neLng) / 2, (this._swLat + this._neLat) / 2)
    }, intersects:function (cF) {
        if (!(cF instanceof bG)) {
            return null
        }
        if (Math.max(cF._swLng, cF._neLng) < Math.min(this._swLng, this._neLng) || Math.min(cF._swLng, cF._neLng) > Math.max(this._swLng, this._neLng) || Math.max(cF._swLat, cF._neLat) < Math.min(this._swLat, this._neLat) || Math.min(cF._swLat, cF._neLat) > Math.max(this._swLat, this._neLat)) {
            return null
        }
        var cH = Math.max(this._swLng, cF._swLng);
        var cE = Math.min(this._neLng, cF._neLng);
        var cG = Math.max(this._swLat, cF._swLat);
        var T = Math.min(this._neLat, cF._neLat);
        return new bG(new b6(cH, cG), new b6(cE, T))
    }, containsPoint:function (T) {
        if (!(T instanceof b6) || this.isEmpty()) {
            return false
        }
        return(T.lng >= this._swLng && T.lng <= this._neLng && T.lat >= this._swLat && T.lat <= this._neLat)
    }, extend:function (T) {
        if (!(T instanceof b6)) {
            return
        }
        var cE = T.lng, cF = T.lat;
        if (!this._sw) {
            this._sw = new b6(0, 0)
        }
        if (!this._ne) {
            this._ne = new b6(0, 0)
        }
        if (!this._swLng || this._swLng > cE) {
            this._sw.lng = this._swLng = cE
        }
        if (!this._neLng || this._neLng < cE) {
            this._ne.lng = this._neLng = cE
        }
        if (!this._swLat || this._swLat > cF) {
            this._sw.lat = this._swLat = cF
        }
        if (!this._neLat || this._neLat < cF) {
            this._ne.lat = this._neLat = cF
        }
    }, toSpan:function () {
        if (this.isEmpty()) {
            return new b6(0, 0)
        }
        return new b6(Math.abs(this._neLng - this._swLng), Math.abs(this._neLat - this._swLat))
    }});
    function b6(T, cE) {
        if (isNaN(T)) {
            T = bO(T);
            T = isNaN(T) ? 0 : T
        }
        if (bW(T)) {
            T = parseFloat(T)
        }
        if (isNaN(cE)) {
            cE = bO(cE);
            cE = isNaN(cE) ? 0 : cE
        }
        if (bW(cE)) {
            cE = parseFloat(cE)
        }
        this.lng = T;
        this.lat = cE
    }

    b6.isInRange = function (T) {
        return T && T.lng <= 180 && T.lng >= -180 && T.lat <= 74 && T.lat >= -74
    };
    b6.prototype.equals = function (T) {
        return T && this.lat == T.lat && this.lng == T.lng
    };
    function a7() {
    }

    a7.prototype.lngLatToPoint = function () {
        throw"lngLatToPoint\u65b9\u6cd5\u672a\u5b9e\u73b0"
    };
    a7.prototype.pointToLngLat = function () {
        throw"pointToLngLat\u65b9\u6cd5\u672a\u5b9e\u73b0"
    };
    function bZ() {
    }

    a2.extend(bZ, {num:{bj:{num:Math.sin(Math.PI / 4), num2:Math.sin(Math.PI / 6)}, gz:{num:Math.sin(Math.PI / 4), num2:Math.sin(Math.PI / 4)}, sz:{num:Math.sin(Math.PI / 4), num2:Math.sin(Math.PI / 4)}, sh:{num:Math.sin(Math.PI / 4), num2:Math.sin(Math.PI / 4)}}, correct_pts:{bj:[
        {j:116.305687, w:39.990912, utm_x:12947230.73, utm_y:4836903.65, x:630412, y:547340},
        {j:116.381837, w:40.000198, utm_x:12955707.8, utm_y:4838247.62, x:667412, y:561832},
        {j:116.430651, w:39.995216, utm_x:12961141.81, utm_y:4837526.55, x:686556, y:573372},
        {j:116.474111, w:39.976323, utm_x:12965979.81, utm_y:4834792.55, x:697152, y:586816},
        {j:116.280328, w:39.953159, utm_x:12944407.75, utm_y:4831441.53, x:603272, y:549976},
        {j:116.316117, w:39.952496, utm_x:12948391.8, utm_y:4831345.64, x:618504, y:557872},
        {j:116.350477, w:39.938107, utm_x:12952216.78, utm_y:4829264.65, x:627044, y:568220},
        {j:116.432025, w:39.947158, utm_x:12961294.76, utm_y:4830573.59, x:666280, y:584016},
        {j:116.46873, w:39.949516, utm_x:12965380.79, utm_y:4830914.63, x:683328, y:591444},
        {j:116.280077, w:39.913823, utm_x:12944379.8, utm_y:4825753.62, x:586150, y:558552},
        {j:116.308625, w:39.91374, utm_x:12947557.79, utm_y:4825741.62, x:598648, y:564732},
        {j:116.369853, w:39.912979, utm_x:12954373.73, utm_y:4825631.62, x:624561, y:578039},
        {j:116.433552, w:39.914694, utm_x:12961464.75, utm_y:4825879.53, x:652972, y:591348},
        {j:116.457034, w:39.914273, utm_x:12964078.78, utm_y:4825818.67, x:663028, y:596444},
        {j:116.490927, w:39.914127, utm_x:12967851.77, utm_y:4825797.57, x:677968, y:604188},
        {j:116.483839, w:39.877198, utm_x:12967062.73, utm_y:4820460.67, x:658596, y:610312},
        {j:116.405777, w:39.864461, utm_x:12958372.82, utm_y:4818620.62, x:619256, y:596088},
        {j:116.35345, w:39.859774, utm_x:12952547.74, utm_y:4817943.6, x:594633, y:585851},
        {j:116.403818, w:39.9141, utm_x:12958154.74, utm_y:4825793.66, x:639699, y:585226},
        {j:116.318111, w:39.891101, utm_x:12948613.78, utm_y:4822469.56, x:592856, y:571480},
        {j:116.413047, w:39.907238, utm_x:12959182.12, utm_y:4824801.76, x:640680, y:588704},
        {j:116.390843, w:39.906113, utm_x:12956710.35, utm_y:4824639.16, x:630620, y:584108},
        {j:116.446527, w:39.899438, utm_x:12962909.14, utm_y:4823674.4, x:651752, y:597416},
        {j:116.388665, w:39.95527, utm_x:12956467.9, utm_y:4831746.87, x:650656, y:572800},
        {j:116.398343, w:39.939704, utm_x:12957545.26, utm_y:4829495.6, x:648036, y:578452},
        {j:116.355101, w:39.973581, utm_x:12952731.53, utm_y:4834395.82, x:643268, y:560944},
        {j:116.380727, w:39.88464, utm_x:12955584.23, utm_y:4821535.94, x:616920, y:586496},
        {j:116.360843, w:39.946452, utm_x:12953370.73, utm_y:4830471.48, x:635293, y:568765},
        {j:116.340955, w:39.973421, utm_x:12951156.79, utm_y:4834372.67, x:638420, y:558632},
        {j:116.322585, w:40.023941, utm_x:12949111.83, utm_y:4841684.79, x:652135, y:543802},
        {j:116.356486, w:39.883341, utm_x:12952885.71, utm_y:4821348.24, x:606050, y:581443},
        {j:116.339592, w:39.992259, utm_x:12951005.06, utm_y:4837098.59, x:645664, y:554400},
        {j:116.3778, w:39.86392, utm_x:12955258.4, utm_y:4818542.48, x:606848, y:590328},
        {j:116.377354, w:39.964124, utm_x:12955208.75, utm_y:4833027.64, x:649911, y:568581},
        {j:116.361837, w:39.963897, utm_x:12953481.39, utm_y:4832994.8, x:643286, y:565175},
        {j:116.441397, w:39.939403, utm_x:12962338.06, utm_y:4829452.07, x:666772, y:587728},
        {j:116.359176, w:40.006631, utm_x:12953185.16, utm_y:4839178.78, x:660440, y:555411}
    ], sz:[
        {w:22.498861, utm_x:12677279.029193671, utm_y:2555027.9501714734, j:113.880696, y:1104472, x:947240},
        {w:22.500706, utm_x:12683920.978881944, utm_y:2555248.973138607, j:113.940361, y:1122320, x:974864},
        {w:22.576848, utm_x:12675897.984563945, utm_y:2564373.058056766, j:113.86829, y:1074048, x:979136},
        {w:22.55689, utm_x:12680064.05051775, utm_y:2561981.0013635466, j:113.905714, y:1092484, x:986240},
        {w:22.58066, utm_x:12678671.98513852, utm_y:2564829.983373251, j:113.893209, y:1080528, x:992088},
        {w:22.595751, utm_x:12678298.949465925, utm_y:2566638.9913895614, j:113.889858, y:1074484, x:997960},
        {w:22.557499, utm_x:12684523.001238672, utm_y:2562053.9875916084, j:113.945769, y:1104696, x:1004564},
        {w:22.648419, utm_x:12676422.97299485, utm_y:2572954.0513219936, j:113.873006, y:1051384, x:1015916},
        {w:22.562664, utm_x:12690460.958807131, utm_y:2562673.0054078405, j:113.99911, y:1119860, x:1030228},
        {w:22.646618, utm_x:12683008.037804369, utm_y:2572738.0652955617, j:113.93216, y:1070324, x:1041496},
        {w:22.571091, utm_x:12695789.992135335, utm_y:2563683.019582462, j:114.046981, y:1131924, x:1055628},
        {w:22.704467, utm_x:12682276.994753957, utm_y:2579677.075645295, j:113.925593, y:1048536, x:1066348},
        {w:22.547152, utm_x:12702917.96800879, utm_y:2560813.9850610085, j:114.111012, y:1160352, x:1072596},
        {w:22.546192, utm_x:12704502.952164687, utm_y:2560698.9417545213, j:114.12525, y:1165256, x:1078452},
        {w:22.5714, utm_x:12702350.00978689, utm_y:2563720.0558210905, j:114.10591, y:1150556, x:1081960},
        {w:22.555004, utm_x:12704883.001041513, utm_y:2561754.9738317807, j:114.128664, y:1163304, x:1084172},
        {w:22.551925, utm_x:12706255.028694374, utm_y:2561385.978019464, j:114.140989, y:1168216, x:1088116},
        {w:22.693756, utm_x:12690318.02302569, utm_y:2578392.0635360866, j:113.997826, y:1075100, x:1092860},
        {w:22.573769, utm_x:12705731.042149788, utm_y:2564004.003107545, j:114.136282, y:1159404, x:1096572},
        {w:22.583238, utm_x:12706369.021093281, utm_y:2565139.002548978, j:114.142013, y:1157896, x:1103632},
        {w:22.605844, utm_x:12704694.980375737, utm_y:2567848.984570506, j:114.126975, y:1145540, x:1107972},
        {w:22.637228, utm_x:12702545.043656897, utm_y:2571612.010208761, j:114.107662, y:1128764, x:1114460},
        {w:22.62496, utm_x:12707132.013185183, utm_y:2570140.9407190788, j:114.148867, y:1145732, x:1127028},
        {w:22.644524, utm_x:12707016.01701364, utm_y:2572486.9446672536, j:114.147825, y:1138800, x:1135876},
        {w:22.640188, utm_x:12711515.0431873, utm_y:2571966.966986786, j:114.18824, y:1152692, x:1151836},
        {w:22.59807, utm_x:12720011.039168343, utm_y:2566916.995355996, j:114.26456, y:1191212, x:1165180},
        {w:22.668221, utm_x:12714081.987256048, utm_y:2575329.007304823, j:114.211299, y:1150576, x:1175404},
        {w:22.702591, utm_x:12717292.031020584, utm_y:2579452.0022288463, j:114.240135, y:1148204, x:1204600},
        {w:22.731786, utm_x:12717795.9798388, utm_y:2582955.0308636553, j:114.244662, y:1139532, x:1220540},
        {w:22.727494, utm_x:12720675.957721734, utm_y:2582439.9980541077, j:114.270533, y:1148992, x:1230084},
        {w:22.716335, utm_x:12725500.040345404, utm_y:2581101.0132384477, j:114.313868, y:1166316, x:1244102}
    ], gz:[
        {j:113.335098, w:23.147289, utm_x:12616542.68, utm_y:2632892.7, x:1129109, y:1073920},
        {j:113.320932, w:23.146956, utm_x:12614965.71, utm_y:2632852.62, x:1125620, y:1071640},
        {j:113.321435, w:23.140119, utm_x:12615021.7, utm_y:2632029.65, x:1124032, y:1072882},
        {j:113.321471, w:23.119165, utm_x:12615025.71, utm_y:2629507.68, x:1118932, y:1076530},
        {j:113.340201, w:23.118616, utm_x:12617110.75, utm_y:2629441.61, x:1123238, y:1079667},
        {j:113.358068, w:23.116323, utm_x:12619099.71, utm_y:2629165.66, x:1126968, y:1083116},
        {j:113.357529, w:23.131271, utm_x:12619039.71, utm_y:2630964.68, x:1130508, y:1080440},
        {j:113.365811, w:23.150595, utm_x:12619961.67, utm_y:2633290.66, x:1137205, y:1078567},
        {j:113.294145, w:23.118467, utm_x:12611983.76, utm_y:2629423.68, x:1112245, y:1072043},
        {j:113.28615, w:23.121525, utm_x:12611093.75, utm_y:2629791.7, x:1110993, y:1070197},
        {j:113.307152, w:23.055497, utm_x:12613431.71, utm_y:2621847.21, x:1100144, y:1085123},
        {j:113.333445, w:23.052687, utm_x:12616358.66, utm_y:2621509.2, x:1105784, y:1089948},
        {j:113.347476, w:23.048755, utm_x:12617920.6, utm_y:2621036.24, x:1108099, y:1093064},
        {j:113.385774, w:23.036574, utm_x:12622183.96, utm_y:2619571.12, x:1113850, y:1101834},
        {j:113.364185, w:22.89798, utm_x:12619780.66, utm_y:2602910.64, x:1073186, y:1123374},
        {j:113.404577, w:22.906481, utm_x:12624277.13, utm_y:2603932.06, x:1084888, y:1128692},
        {j:113.430856, w:22.913156, utm_x:12627202.52, utm_y:2604734.12, x:1092892, y:1131761},
        {j:113.384554, w:22.933021, utm_x:12622048.15, utm_y:2607121.32, x:1086975, y:1120403},
        {j:113.263566, w:23.146333, utm_x:12608579.68, utm_y:2632777.63, x:1111742, y:1062098},
        {j:113.239213, w:23.152996, utm_x:12605868.69, utm_y:2633579.69, x:1107616, y:1056740},
        {j:113.253865, w:23.131628, utm_x:12607499.76, utm_y:2631007.65, x:1105912, y:1062966},
        {j:113.240767, w:23.088434, utm_x:12606041.68, utm_y:2625809.7, x:1092270, y:1068184},
        {j:113.279628, w:23.088284, utm_x:12610367.72, utm_y:2625791.65, x:1101412, y:1074883},
        {j:113.462271, w:23.107058, utm_x:12630699.66, utm_y:2628050.7, x:1148752, y:1101736},
        {j:113.401618, w:23.052957, utm_x:12623947.73, utm_y:2621541.68, x:1121925, y:1101535},
        {j:113.422504, w:23.05905, utm_x:12626272.77, utm_y:2622274.61, x:1128470, y:1104049},
        {j:113.362506, w:23.107149, utm_x:12619593.75, utm_y:2628061.65, x:1125835, y:1085505},
        {j:113.419629, w:23.143176, utm_x:12625952.73, utm_y:2632397.61, x:1148133, y:1089052},
        {j:113.23315, w:23.062251, utm_x:12605193.75, utm_y:2622659.67, x:1084184, y:1071368},
        {j:113.314525, w:23.101412, utm_x:12614252.48, utm_y:2627371.29, x:1113011, y:1078426},
        {j:113.307947, w:23.131369, utm_x:12613520.21, utm_y:2630976.47, x:1118622, y:1072198}
    ], sh:[
        {j:121.524411, w:31.245875, utm_x:13528182.75, utm_y:3642354.51, x:1086581, y:1065728},
        {j:121.419229, w:31.244887, utm_x:13516473.81, utm_y:3642226.51, x:1032616, y:1029148},
        {j:121.405637, w:31.237871, utm_x:13514960.74, utm_y:3641317.54, x:1022724, y:1027244},
        {j:121.415348, w:31.222879, utm_x:13516041.78, utm_y:3639375.47, x:1018548, y:1036980},
        {j:121.422561, w:31.224261, utm_x:13516844.73, utm_y:3639554.48, x:1022976, y:1038908},
        {j:121.412581, w:31.204148, utm_x:13515733.75, utm_y:3636949.48, x:1006568, y:1043696},
        {j:121.443025, w:31.206202, utm_x:13519122.8, utm_y:3637215.49, x:1022656, y:1053704},
        {j:121.524061, w:31.246917, utm_x:13528143.79, utm_y:3642489.52, x:1082052, y:1064124},
        {j:121.529343, w:31.217769, utm_x:13528731.78, utm_y:3638713.59, x:1072696, y:1079064},
        {j:121.530268, w:31.210341, utm_x:13528834.75, utm_y:3637751.53, x:1068748, y:1082416},
        {j:121.511601, w:31.227303, utm_x:13526756.73, utm_y:3639948.53, x:1069276, y:1068716},
        {j:121.4966, w:31.243614, utm_x:13525086.81, utm_y:3642061.58, x:1071220, y:1056805},
        {j:121.485021, w:31.26138, utm_x:13523797.82, utm_y:3644363.54, x:1075708, y:1045540},
        {j:121.465114, w:31.278803, utm_x:13521581.76, utm_y:3646621.48, x:1073740, y:1031268},
        {j:121.454784, w:31.266566, utm_x:13520431.82, utm_y:3645035.58, x:1063591, y:1033191},
        {j:121.46851, w:31.24951, utm_x:13521959.81, utm_y:3642825.48, x:1060200, y:1044520},
        {j:121.446384, w:31.248422, utm_x:13519496.73, utm_y:3642684.51, x:1048784, y:1037750},
        {j:121.509499, w:31.246469, utm_x:13526522.73, utm_y:3642431.47, x:1079309, y:1060105},
        {j:121.481643, w:31.283943, utm_x:13523421.78, utm_y:3647287.68, x:1087096, y:1035304},
        {j:121.508054, w:31.280609, utm_x:13526361.87, utm_y:3646855.56, x:1098432, y:1045648},
        {j:121.493854, w:31.19121, utm_x:13524781.12, utm_y:3635274.07, x:1039624, y:1077288},
        {j:121.500079, w:31.185541, utm_x:13525474.09, utm_y:3634540.04, x:1039960, y:1081640},
        {j:121.484482, w:31.202846, utm_x:13523737.82, utm_y:3636780.87, x:1041388, y:1069232},
        {j:121.480877, w:31.189587, utm_x:13523336.51, utm_y:3635063.92, x:1032484, y:1073640},
        {j:121.502652, w:31.195209, utm_x:13525760.52, utm_y:3635791.9, x:1046384, y:1078728}
    ]}, getLnglatIndex:function (cG, cK, cJ) {
        var cF = 0;
        var cE = 0;
        var cL = 10000000, cI = 1000000000;
        for (var cH = 0; cH < this.correct_pts[cG].length; cH++) {
            var T = this.getDis(this.correct_pts[cG][cH].x, this.correct_pts[cG][cH].y, cK, cJ);
            if (T < cI) {
                if (T < cL) {
                    cI = cL;
                    cL = T;
                    cE = cF;
                    cF = cH
                } else {
                    sedMinDis = T;
                    cE = cH
                }
            }
        }
        return{lt:cF, rb:cE}
    }, getOMapIndex_mm:function (cG, cL, cK) {
        var cF = 0;
        var cE = 0;
        var cJ = 1294723000, cI = 1294723000;
        for (var cH = 0; cH < this.correct_pts[cG].length; cH++) {
            var T = this.getDis(this.correct_pts[cG][cH].utm_x, this.correct_pts[cG][cH].utm_y, cL, cK);
            if (T < cI) {
                if (T < cJ) {
                    cI = cJ;
                    cJ = T;
                    cE = cF;
                    cF = cH
                } else {
                    sedMinDis = T;
                    cE = cH
                }
            }
        }
        return{lt:cF, rb:cE}
    }, getDis:function (T, cG, cE, cF) {
        return Math.abs(T - cE) + Math.abs(cG - cF)
    }, toMap:function (cG, T, cH) {
        var cE = (T - cH) * this.num[cG].num;
        var cF = (T + cH) * this.num[cG].num * this.num[cG].num2;
        return{x:cE, y:cF}
    }, fromMap:function (cG, T, cH) {
        cH = cH / this.num[cG].num2;
        var cE = (T + cH) / (this.num[cG].num * 2);
        var cF = (cH - T) / (this.num[cG].num * 2);
        return{x:cE, y:cF}
    }, getDgPix_mm:function (cH, cM, cI) {
        var cL = this.fromMap(cH, this.correct_pts[cH][cM].x, this.correct_pts[cH][cM].y);
        var cJ = this.fromMap(cH, this.correct_pts[cH][cI].x, this.correct_pts[cH][cI].y);
        var cR = cL.x, cE = cL.y;
        var cQ = cJ.x, T = cJ.y;
        var cO = this.correct_pts[cH][cM].utm_x, cG = this.correct_pts[cH][cM].utm_y;
        var cK = this.correct_pts[cH][cI].utm_x, cF = this.correct_pts[cH][cI].utm_y;
        var cP = Math.abs((cK - cO) * 100000 / (cQ - cR));
        var cN = Math.abs((cF - cG) * 100000 / (T - cE));
        return{j:cP, w:cN, x:100000 / cP, y:100000 / cN}
    }, getPx_mm:function (cU, cQ, cP, cH, cG) {
        var cF = this.correct_pts[cU][cH];
        var T = this.correct_pts[cU][cH];
        var cN = this.getDgPix_mm(cU, cH, cG);
        var cJ = this.fromMap(cU, cF.x, cF.y);
        var cI = T.utm_x, cW = T.utm_y;
        var cV = cQ, cO = cP;
        var cT = cJ.x;
        var cE = cJ.y;
        var cL = cV - cI, cS = cO - cW;
        var cM = cL * cN.x + cT;
        var cK = -cS * cN.y + cE;
        var cR = this.toMap(cU, cM, cK);
        return cR
    }, getJw_mm:function (cS, cN, cM, cI, cH) {
        var cL = this.correct_pts[cS][cI];
        var cE = this.correct_pts[cS][cI];
        var cO = this.getDgPix_mm(cS, cI, cH);
        var cQ = this.fromMap(cS, cN, cM);
        var cG = this.fromMap(cS, cL.x, cL.y);
        var cJ = cE.utm_x, cT = cE.utm_y;
        var cR = cG.x;
        var cF = cG.y;
        var cU = cQ.x - cR, cP = cF - cQ.y;
        var cK = cU / cO.x + cJ;
        var T = cP / cO.y + cT;
        return{lng:cK, lat:T}
    }, getOMap_pts:function (cE, T) {
        return this.getOMap_index(cE, T.lng, T.lat, T.lt, T.rb)
    }, getMapJw_pts:function (cE, T) {
        return this.getMapJw_index(cE, T.lng, 9998336 - T.lat, T.lt, T.rb)
    }, getOMap_index:function (cJ, cI, cH, T, cG) {
        if (!T || !cG) {
            var cE = this.getOMapIndex_mm(cJ, cI, cH)
        } else {
            var cE = {lt:T, rb:cG}
        }
        var cF = this.getPx_mm(cJ, cI, cH, cE.lt, cE.rb);
        return{x:Math.floor(cF.x), y:9998336 - Math.floor(cF.y), lt:cE.lt, rb:cE.rb}
    }, getMapJw_index:function (cI, cF, cJ, cE, cH) {
        if (!cE || !cH) {
            var cG = this.getLnglatIndex(cI, cF, cJ)
        } else {
            var cG = {lt:cE, rb:cH}
        }
        var T = this.getJw_mm(cI, cF, cJ, cG.lt, cG.rb);
        return{lng:T.lng, lat:T.lat, lt:cG.lt, rb:cG.rb}
    }});
    function a4() {
    }

    a4.prototype = new a7();
    a2.extend(a4, {EARTHRADIUS:6370996.81, MCBAND:[12890594.86, 8362377.87, 5591021, 3481989.83, 1678043.12, 0], LLBAND:[75, 60, 45, 30, 15, 0], MC2LL:[
        [1.410526172116255e-8, 0.00000898305509648872, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 17337981.2],
        [-7.435856389565537e-9, 0.000008983055097726239, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 10260144.86],
        [-3.030883460898826e-8, 0.00000898305509983578, 0.30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6856817.37],
        [-1.981981304930552e-8, 0.000008983055099779535, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4482777.06],
        [3.09191371068437e-9, 0.000008983055096812155, 0.00006995724062, 23.10934304144901, -0.00023663490511, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2555164.4],
        [2.890871144776878e-9, 0.000008983055095805407, -3.068298e-8, 7.47137025468032, -0.00000353937994, -0.02145144861037, -0.00001234426596, 0.00010322952773, -0.00000323890364, 826088.5]
    ], LL2MC:[
        [-0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5],
        [0.0008277824516172526, 111320.7020463578, 647795574.6671607, -4082003173.641316, 10774905663.51142, -15171875531.51559, 12053065338.62167, -5124939663.577472, 913311935.9512032, 67.5],
        [0.00337398766765, 111320.7020202162, 4481351.045890365, -23393751.19931662, 79682215.47186455, -115964993.2797253, 97236711.15602145, -43661946.33752821, 8477230.501135234, 52.5],
        [0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5],
        [-0.0003441963504368392, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5],
        [-0.0003218135878613132, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]
    ], getDistanceByMC:function (cI, cG) {
        if (!cI || !cG) {
            return 0
        }
        var cE, cH, T, cF;
        cI = this.convertMC2LL(cI);
        if (!cI) {
            return 0
        }
        cE = this.toRadians(cI.lng);
        cH = this.toRadians(cI.lat);
        cG = this.convertMC2LL(cG);
        if (!cG) {
            return 0
        }
        T = this.toRadians(cG.lng);
        cF = this.toRadians(cG.lat);
        return this.getDistance(cE, T, cH, cF)
    }, getDistanceByLL:function (cI, cG) {
        if (!cI || !cG) {
            return 0
        }
        cI.lng = this.getLoop(cI.lng, -180, 180);
        cI.lat = this.getRange(cI.lat, -74, 74);
        cG.lng = this.getLoop(cG.lng, -180, 180);
        cG.lat = this.getRange(cG.lat, -74, 74);
        var cE, T, cH, cF;
        cE = this.toRadians(cI.lng);
        cH = this.toRadians(cI.lat);
        T = this.toRadians(cG.lng);
        cF = this.toRadians(cG.lat);
        return this.getDistance(cE, T, cH, cF)
    }, convertMC2LL:function (cE) {
        var cF, cH;
        cF = new b6(Math.abs(cE.lng), Math.abs(cE.lat));
        for (var cG = 0; cG < this.MCBAND.length; cG++) {
            if (cF.lat >= this.MCBAND[cG]) {
                cH = this.MC2LL[cG];
                break
            }
        }
        var T = this.convertor(cE, cH);
        var cE = new b6(T.lng.toFixed(6), T.lat.toFixed(6));
        return cE
    }, convertLL2MC:function (T) {
        var cE, cG;
        T.lng = this.getLoop(T.lng, -180, 180);
        T.lat = this.getRange(T.lat, -74, 74);
        cE = new b6(T.lng, T.lat);
        for (var cF = 0; cF < this.LLBAND.length; cF++) {
            if (cE.lat >= this.LLBAND[cF]) {
                cG = this.LL2MC[cF];
                break
            }
        }
        if (!cG) {
            for (var cF = this.LLBAND.length - 1; cF >= 0; cF--) {
                if (cE.lat <= -this.LLBAND[cF]) {
                    cG = this.LL2MC[cF];
                    break
                }
            }
        }
        var cH = this.convertor(T, cG);
        var T = new b6(cH.lng.toFixed(2), cH.lat.toFixed(2));
        return T
    }, convertor:function (cF, cG) {
        if (!cF || !cG) {
            return
        }
        var T = cG[0] + cG[1] * Math.abs(cF.lng);
        var cE = Math.abs(cF.lat) / cG[9];
        var cH = cG[2] + cG[3] * cE + cG[4] * cE * cE + cG[5] * cE * cE * cE + cG[6] * cE * cE * cE * cE + cG[7] * cE * cE * cE * cE * cE + cG[8] * cE * cE * cE * cE * cE * cE;
        T *= (cF.lng < 0 ? -1 : 1);
        cH *= (cF.lat < 0 ? -1 : 1);
        return new b6(T, cH)
    }, getDistance:function (cE, T, cG, cF) {
        return this.EARTHRADIUS * Math.acos((Math.sin(cG) * Math.sin(cF) + Math.cos(cG) * Math.cos(cF) * Math.cos(T - cE)))
    }, toRadians:function (T) {
        return Math.PI * T / 180
    }, toDegrees:function (T) {
        return(180 * T) / Math.PI
    }, getRange:function (cF, cE, T) {
        if (cE != null) {
            cF = Math.max(cF, cE)
        }
        if (T != null) {
            cF = Math.min(cF, T)
        }
        return cF
    }, getLoop:function (cF, cE, T) {
        while (cF > T) {
            cF -= T - cE
        }
        while (cF < cE) {
            cF += T - cE
        }
        return cF
    }});
    a2.extend(a4.prototype, {lngLatToMercator:function (T) {
        return a4.convertLL2MC(T)
    }, lngLatToPoint:function (T) {
        var cE = a4.convertLL2MC(T);
        return new bo(cE.lng, cE.lat)
    }, mercatorToLngLat:function (T) {
        return a4.convertMC2LL(T)
    }, pointToLngLat:function (T) {
        var cE = new b6(T.x, T.y);
        return a4.convertMC2LL(cE)
    }, pointToPixel:function (cE, cI, cH, cG, cJ) {
        if (!cE) {
            return
        }
        cE = this.lngLatToMercator(cE, cJ);
        var cF = this.getZoomUnits(cI);
        var T = Math.round((cE.lng - cH.lng) / cF + cG.width / 2);
        var cK = Math.round((cH.lat - cE.lat) / cF + cG.height / 2);
        return new bo(T, cK)
    }, pixelToPoint:function (T, cL, cH, cF, cE) {
        if (!T) {
            return
        }
        var cK = this.getZoomUnits(cL);
        var cI = cH.lng + cK * (T.x - cF.width / 2);
        var cG = cH.lat - cK * (T.y - cF.height / 2);
        var cJ = new b6(cI, cG);
        return this.mercatorToLngLat(cJ, cE)
    }, getZoomUnits:function (T) {
        return Math.pow(2, (18 - T))
    }});
    function cx() {
    }

    cx.prototype = new a4();
    a2.extend(cx.prototype, {lngLatToMercator:function (cE, T) {
        return this._convert2DTo3D(T, a4.convertLL2MC(cE))
    }, mercatorToLngLat:function (cE, T) {
        return a4.convertMC2LL(this._convert3DTo2D(T, cE))
    }, lngLatToPoint:function (cF, T) {
        var cE = this._convert2DTo3D(T, a4.convertLL2MC(cF));
        return new bo(cE.lng, cE.lat)
    }, pointToLngLat:function (cE, T) {
        var cF = new b6(cE.x, cE.y);
        return a4.convertMC2LL(this._convert3DTo2D(T, cF))
    }, _convert2DTo3D:function (cF, T) {
        var cE = bZ.getOMap_pts(cF || "bj", T);
        return new b6(cE.x, cE.y)
    }, _convert3DTo2D:function (cF, T) {
        var cE = bZ.getMapJw_pts(cF || "bj", T);
        return new b6(cE.lng, cE.lat)
    }, getZoomUnits:function (T) {
        return Math.pow(2, (20 - T))
    }});
    function bA() {
        this._type = "overlay"
    }

    a2.lang.inherits(bA, a2.lang.Class, "Overlay");
    bA.getZIndex = function (T) {
        T = T * 1;
        if (!T) {
            return 0
        }
        return(T * -100000) << 1
    };
    a2.extend(bA.prototype, {_i:function (T) {
        if (!this.domElement && G(this.initialize)) {
            this.domElement = this.initialize(T);
            if (this.domElement) {
                this.domElement.style.WebkitUserSelect = "none"
            }
        }
        this.draw()
    }, initialize:function (T) {
        throw"initialize\u65b9\u6cd5\u672a\u5b9e\u73b0"
    }, draw:function () {
        throw"draw\u65b9\u6cd5\u672a\u5b9e\u73b0"
    }, remove:function () {
        if (this.domElement && this.domElement.parentNode) {
            this.domElement.parentNode.removeChild(this.domElement)
        }
        this.domElement = null;
        this.dispatchEvent(new ba("onremove"))
    }, hide:function () {
        if (this.domElement) {
            a2.dom.hide(this.domElement)
        }
    }, show:function () {
        if (this.domElement) {
            a2.dom.show(this.domElement)
        }
    }, isVisible:function () {
        if (!this.domElement) {
            return false
        }
        if (this.domElement.style.display == "none" || this.domElement.style.visibility == "hidden") {
            return false
        }
        return true
    }});
    BMap.register(function (cF) {
        var T = cF.temp;
        T.overlayDiv = cF.overlayDiv = cE(cF.platform, 200);
        cF._panes.floatPane = cE(T.overlayDiv, 800);
        cF._panes.markerMouseTarget = cE(T.overlayDiv, 700);
        cF._panes.floatShadow = cE(T.overlayDiv, 600);
        cF._panes.labelPane = cE(T.overlayDiv, 500);
        cF._panes.markerPane = cE(T.overlayDiv, 400);
        cF._panes.markerShadow = cE(T.overlayDiv, 300);
        cF._panes.mapPane = cE(T.overlayDiv, 200);
        function cE(cG, cJ) {
            var cI = X("div"), cH = cI.style;
            cH.position = "absolute";
            cH.top = cH.left = cH.width = cH.height = "0";
            cH.zIndex = cJ;
            cG.appendChild(cI);
            return cI
        }
    });
    function V() {
        a2.lang.Class.call(this);
        bA.call(this);
        this.map = null;
        this._visible = true;
        this.infoWindow = null;
        this._dblclickTime = 0
    }

    a2.lang.inherits(V, bA, "OverlayInternal");
    a2.extend(V.prototype, {initialize:function (T) {
        this.map = T;
        a2.lang.Class.call(this, this.guid);
        return null
    }, getMap:function () {
        return this.map
    }, draw:function () {
    }, remove:function () {
        this.map = null;
        a2.lang.decontrol(this.guid);
        bA.prototype.remove.call(this)
    }, hide:function () {
        if (this._visible == false) {
            return
        }
        this._visible = false
    }, show:function () {
        if (this._visible == true) {
            return
        }
        this._visible = true
    }, isVisible:function () {
        if (!this.domElement) {
            return false
        }
        return !!this._visible
    }, getContainer:function () {
        return this.domElement
    }, setConfig:function (cE) {
        cE = cE || {};
        for (var T in cE) {
            this._config[T] = cE[T]
        }
    }, setZIndex:function (T) {
        this.zIndex = T
    }, enableMassClear:function () {
        this._config.enableMassClear = true
    }, disableMassClear:function () {
        this._config.enableMassClear = false
    }, addContextMenu:function (T) {
        this._menu = T
    }, removeContextMenu:function (T) {
        this._menu = null
    }});
    function cl() {
        this.map = null;
        this._overlays = {};
        this._customOverlays = []
    }

    BMap.register(function (cE) {
        var T = new cl();
        T.map = cE;
        cE._overlays = T._overlays;
        cE._customOverlays = T._customOverlays;
        cE.addEventListener("load", function (cF) {
            T.draw(cF)
        });
        cE.addEventListener("moveend", function (cF) {
            T.draw(cF)
        });
        if (a2.browser.ie && a2.browser.ie < 8 || document.compatMode == "BackCompat") {
            cE.addEventListener("zoomend", function (cF) {
                setTimeout(function () {
                    T.draw(cF)
                }, 20)
            })
        } else {
            cE.addEventListener("zoomend", function (cF) {
                T.draw(cF)
            })
        }
        cE.addEventListener("maptypechange", function (cF) {
            T.draw(cF)
        });
        cE.addEventListener("addoverlay", function (cJ) {
            var cG = cJ.target;
            if (cG instanceof V) {
                if (!T._overlays[cG.guid]) {
                    T._overlays[cG.guid] = cG
                }
            } else {
                var cI = false;
                for (var cH = 0, cF = T._customOverlays.length; cH < cF; cH++) {
                    if (T._customOverlays[cH] === cG) {
                        cI = true;
                        break
                    }
                }
                if (!cI) {
                    T._customOverlays.push(cG)
                }
            }
        });
        cE.addEventListener("removeoverlay", function (cI) {
            var cG = cI.target;
            if (cG instanceof V) {
                delete T._overlays[cG.guid]
            } else {
                for (var cH = 0, cF = T._customOverlays.length; cH < cF; cH++) {
                    if (T._customOverlays[cH] === cG) {
                        T._customOverlays.splice(cH, 1);
                        break
                    }
                }
            }
        });
        cE.addEventListener("clearoverlays", function (cI) {
            this.closeInfoWindow();
            for (var cH in T._overlays) {
                if (T._overlays[cH]._config.enableMassClear) {
                    T._overlays[cH].remove();
                    delete T._overlays[cH]
                }
            }
            for (var cG = 0, cF = T._customOverlays.length; cG < cF; cG++) {
                if (T._customOverlays[cG].enableMassClear != false) {
                    T._customOverlays[cG].remove();
                    T._customOverlays[cG] = null;
                    T._customOverlays.splice(cG, 1);
                    cG--;
                    cF--
                }
            }
        });
        cE.addEventListener("infowindowopen", function (cG) {
            var cF = this.infoWindow;
            if (cF) {
                a2.dom.hide(cF.popDom);
                a2.dom.hide(cF.shadowDom)
            }
        });
        cE.addEventListener("movestart", function () {
            if (this.getInfoWindow()) {
                this.getInfoWindow()._setOverflow()
            }
        });
        cE.addEventListener("moveend", function () {
            if (this.getInfoWindow()) {
                this.getInfoWindow()._resetOverflow()
            }
        })
    });
    cl.prototype.draw = function (cF) {
        for (var cE in this._overlays) {
            this._overlays[cE].draw()
        }
        a2.array.each(this._customOverlays, function (cG) {
            cG.draw()
        });
        if (this.map.temp.infoWin) {
            this.map.temp.infoWin.setPosition()
        }
        if (BMap.DrawerSelector) {
            var T = BMap.DrawerSelector.getDrawer(this.map);
            T.setPalette()
        }
    };
    function cy(T) {
        V.call(this);
        this._config = {strokeColor:"#3a6bdb", strokeWeight:5, strokeOpacity:0.65, strokeStyle:"solid", enableMassClear:true, getParseTolerance:null, getParseCacheIndex:null, enableEditing:false, mouseOverTolerance:15, use3DCoords:false, clickable:true};
        T = T || {};
        this.setConfig(T);
        if (this._config.strokeWeight <= 0) {
            this._config.strokeWeight = 5
        }
        if (this._config.strokeOpacity < 0 || this._config.strokeOpacity > 1) {
            this._config.strokeOpacity = 0.65
        }
        if (this._config.fillOpacity < 0 || this._config.fillOpacity > 1) {
            this._config.fillOpacity = 0.65
        }
        if (this._config.strokeStyle != "solid" && this._config.strokeStyle != "dashed") {
            this._config.strokeStyle = "solid"
        }
        if (ca(T.enableClicking)) {
            this._config.clickable = T.enableClicking
        }
        this.domElement = null;
        this._bounds = new BMap.Bounds(0, 0, 0, 0);
        this._parseCache = [];
        this.vertexMarkers = [];
        this._temp = {}
    }

    a2.lang.inherits(cy, V, "Graph");
    cy.getGraphPoints = function (cE) {
        var T = [];
        if (!cE) {
            return T
        }
        if (bW(cE)) {
            var cF = cE.split(";");
            a2.array.each(cF, function (cH) {
                var cG = cH.split(",");
                T.push(new b6(cG[0], cG[1]))
            })
        }
        if (cE.constructor == Array && cE.length > 0) {
            T = cE
        }
        return T
    };
    cy.parseTolerance = [0.09, 0.005, 0.0001, 0.00001];
    a2.extend(cy.prototype, {initialize:function (T) {
        this.map = T;
        return null
    }, draw:function () {
        return;
        if (!this.domElement) {
            return
        }
        if (this._drawer) {
            this._drawer.setPath(this.domElement, this._getDisplayPixels(this.points))
        }
    }, setPath:function (T) {
        this._parseCache.length = 0;
        this.points = cy.getGraphPoints(T).slice(0);
        this._calcBounds()
    }, _calcBounds:function () {
        if (!this.points) {
            return
        }
        var T = this;
        T._bounds = new bG();
        a2.array.each(this.points, function (cE) {
            T._bounds.extend(cE)
        })
    }, getPath:function () {
        return this.points
    }, setPositionAt:function (cE, T) {
        if (!T || !this.points[cE]) {
            return
        }
        this._parseCache.length = 0;
        this.points[cE] = new b6(T.lng, T.lat);
        this._calcBounds()
    }, setStrokeColor:function (T) {
        this._config.strokeColor = T
    }, getStrokeColor:function () {
        return this._config.strokeColor
    }, setStrokeWeight:function (T) {
        if (T > 0) {
            this._config.strokeWeight = T
        }
    }, getStrokeWeight:function () {
        return this._config.strokeWeight
    }, setStrokeOpacity:function (T) {
        if (!T || T > 1 || T < 0) {
            return
        }
        this._config.strokeOpacity = T
    }, getStrokeOpacity:function () {
        return this._config.strokeOpacity
    }, setFillOpacity:function (T) {
        if (T > 1 || T < 0) {
            return
        }
        this._config.fillOpacity = T
    }, getFillOpacity:function () {
        return this._config.fillOpacity
    }, setStrokeStyle:function (T) {
        if (T != "solid" && T != "dashed") {
            return
        }
        this._config.strokeStyle = T
    }, getStrokeStyle:function () {
        return this._config.strokeStyle
    }, setFillColor:function (T) {
        this._config.fillColor = T || ""
    }, getFillColor:function () {
        return this._config.fillColor
    }, getBounds:function () {
        return this._bounds
    }, remove:function () {
        if (this.map) {
            this.map.removeEventListener("onmousemove", this._graphMouseEvent)
        }
        V.prototype.remove.call(this);
        this._parseCache.length = 0
    }, enableEditing:function () {
        this._config.enableEditing = true
    }, disableEditing:function () {
        this._config.enableEditing = false
    }});
    function l(T) {
        V.call(this);
        this.map = null;
        this.domElement = null;
        this._config = {width:0, height:0, offset:new aC(0, 0), opacity:1, background:"transparent", lineStroke:1, lineColor:"#000", lineStyle:"solid", point:null};
        this.setConfig(T);
        this.point = this._config.point
    }

    a2.lang.inherits(l, V, "Division");
    a2.extend(l.prototype, {_addDom:function () {
        var T = this._config;
        var cF = this.content;
        var cE = ['<div class="BMap_Division" style="position:absolute;'];
        cE.push("width:" + T.width + "px;display:block;");
        cE.push("overflow:hidden;");
        if (T.borderColor != "none") {
            cE.push("border:" + T.lineStroke + "px " + T.lineStyle + " " + T.lineColor + ";")
        }
        cE.push("opacity:" + T.opacity + "; filter:(opacity=" + T.opacity * 100 + ")");
        cE.push("background:" + T.background + ";");
        cE.push('z-index:60;">');
        cE.push(cF);
        cE.push("</div>");
        this.domElement = ao(this.map.getPanes().markerMouseTarget, cE.join(""))
    }, initialize:function (T) {
        this.map = T;
        this._addDom();
        if (this.domElement) {
            a2.on(this.domElement, "mousedown", function (cE) {
                aK(cE)
            })
        }
        return this.domElement
    }, draw:function () {
        var T = this.map.pointToOverlayPixel(this._config.point);
        this._config.offset = new aC(-Math.round(this._config.width / 2) - Math.round(this._config.lineStroke), -Math.round(this._config.height / 2) - Math.round(this._config.lineStroke));
        this.domElement.style.left = T.x + this._config.offset.width + "px";
        this.domElement.style.top = T.y + this._config.offset.height + "px"
    }, getPosition:function () {
        return this._config.point
    }, _getPixel:function (T) {
        return this.map.pointToPixel(this.getPosition())
    }, setPosition:function (T) {
        this._config.point = T;
        this.draw()
    }, setDimension:function (T, cE) {
        this._config.width = Math.round(T);
        this._config.height = Math.round(cE);
        if (this.domElement) {
            this.domElement.style.width = this._config.width + "px";
            this.domElement.style.height = this._config.height + "px";
            this.draw()
        }
    }});
    function K(cE, cF, cG) {
        if (!cE || !cF) {
            return
        }
        this.imageUrl = cE;
        this.size = cF;
        var T = new aC(Math.floor(cF.width / 2), Math.floor(cF.height / 2));
        var cH = {anchor:T, imageOffset:new aC(0, 0)};
        cG = cG || {};
        a2.extend(cH, cG);
        this.anchor = cH.anchor;
        this.imageOffset = cH.imageOffset;
        this.infoWindowAnchor = cG.infoWindowAnchor || this.anchor;
        this.printImageUrl = cG.printImageUrl || ""
    }

    var bx = K.prototype;
    bx.setImageUrl = function (T) {
        if (!T) {
            return
        }
        this.imageUrl = T
    };
    bx.setPrintImageUrl = function (T) {
        if (!T) {
            return
        }
        this.printImageUrl = T
    };
    bx.setSize = function (T) {
        if (!T) {
            return
        }
        this.size = new aC(T.width, T.height)
    };
    bx.setAnchor = function (T) {
        if (!T) {
            return
        }
        this.anchor = new aC(T.width, T.height)
    };
    bx.setImageOffset = function (T) {
        if (!T) {
            return
        }
        this.imageOffset = new aC(T.width, T.height)
    };
    bx.setInfoWindowAnchor = function (T) {
        if (!T) {
            return
        }
        this.infoWindowAnchor = new aC(T.width, T.height)
    };
    bx.toString = function () {
        return"Icon"
    };
    function bI(cF, cE) {
        a2.lang.Class.call(this);
        this.content = cF;
        this.map = null;
        this._config = {width:0, height:0, maxWidth:600, offset:new aC(0, 0), title:"", maxContent:"", enableMaximize:false, enableAutoPan:true, enableCloseOnClick:true, margin:[10, 10, 40, 10], collisions:[
            [10, 10],
            [10, 10],
            [10, 10],
            [10, 10]
        ], ifMaxScene:false, onClosing:function () {
            return true
        }};
        a2.extend(this._config, cE || {});
        if (this._config.width != 0) {
            if (this._config.width < 220) {
                this._config.width = 220
            }
            if (this._config.width > 730) {
                this._config.width = 730
            }
        }
        if (this._config.height != 0) {
            if (this._config.height < 60) {
                this._config.height = 60
            }
            if (this._config.height > 650) {
                this._config.height = 650
            }
        }
        if (this._config.maxWidth != 0) {
            if (this._config.maxWidth < 220) {
                this._config.maxWidth = 220
            }
            if (this._config.maxWidth > 730) {
                this._config.maxWidth = 730
            }
        }
        this.isWinMax = false;
        this.IMG_PATH = b5.imgPath;
        this.overlay = null;
        var T = this;
        ct.load("infowindow", function () {
            T._draw()
        })
    }

    a2.lang.inherits(bI, a2.lang.Class, "InfoWindow");
    a2.extend(bI.prototype, {setWidth:function (T) {
        if (!T && T != 0 || isNaN(T) || T < 0) {
            return
        }
        if (T != 0) {
            if (T < 220) {
                T = 220
            }
            if (T > 730) {
                T = 730
            }
        }
        this._config.width = T
    }, setHeight:function (T) {
        if (!T && T != 0 || isNaN(T) || T < 0) {
            return
        }
        if (T != 0) {
            if (T < 60) {
                T = 60
            }
            if (T > 650) {
                T = 650
            }
        }
        this._config.height = T
    }, setMaxWidth:function (T) {
        if (!T && T != 0 || isNaN(T) || T < 0) {
            return
        }
        if (T != 0) {
            if (T < 220) {
                T = 220
            }
            if (T > 730) {
                T = 730
            }
        }
        this._config.maxWidth = T
    }, setTitle:function (T) {
        this._config.title = T
    }, getTitle:function () {
        return this._config.title
    }, setContent:function (T) {
        this.content = T
    }, getContent:function () {
        return this.content
    }, setMaxContent:function (T) {
        this._config.maxContent = T + ""
    }, redraw:function () {
    }, enableAutoPan:function () {
        this._config.enableAutoPan = true
    }, disableAutoPan:function () {
        this._config.enableAutoPan = false
    }, enableCloseOnClick:function () {
        this._config.enableCloseOnClick = true
    }, disableCloseOnClick:function () {
        this._config.enableCloseOnClick = false
    }, enableMaximize:function () {
        this._config.enableMaximize = true
    }, disableMaximize:function () {
        this._config.enableMaximize = false
    }, show:function () {
        this._visible = true
    }, hide:function () {
        this._visible = false
    }, close:function () {
        this.hide()
    }, maximize:function () {
        this.isWinMax = true
    }, restore:function () {
        this.isWinMax = false
    }, isVisible:function () {
        return this.isOpen()
    }, isOpen:function () {
        return false
    }, getPosition:function () {
        if (this.overlay && this.overlay.getPosition) {
            return this.overlay.getPosition()
        }
    }, getOffset:function () {
        return this._config.offset
    }});
    bt.prototype.openInfoWindow = function (cG, T) {
        if (!(cG instanceof bI) || !(T instanceof b6)) {
            return
        }
        var cE = this.temp;
        if (!cE.marker) {
            var cF = new K(b5.imgPath + "blank.gif", {width:1, height:1});
            cE.marker = new aa(T, {icon:cF, width:1, height:1, offset:new aC(0, 0), infoWindowOffset:new aC(0, 0), clickable:false});
            cE.marker._fromMap = 1
        } else {
            cE.marker.setPosition(T)
        }
        this.addOverlay(cE.marker);
        cE.marker.openInfoWindow(cG)
    };
    bt.prototype.closeInfoWindow = function () {
        var T = this.temp.infoWin || this.temp._infoWin;
        if (T && T.overlay) {
            T.overlay.closeInfoWindow()
        }
    };
    V.prototype.openInfoWindow = function (T) {
        if (this.map) {
            this.map.closeInfoWindow();
            T._visible = true;
            this.map.temp._infoWin = T;
            T.overlay = this;
            a2.lang.Class.call(T, T.guid)
        }
    };
    V.prototype.closeInfoWindow = function () {
        if (this.map && this.map.temp._infoWin) {
            this.map.temp._infoWin._visible = false;
            a2.lang.decontrol(this.map.temp._infoWin.guid);
            this.map.temp._infoWin = null
        }
    };
    function ad(cF, cE) {
        V.call(this);
        this.content = cF;
        this.map = null;
        this.domElement = null;
        this._config = {width:0, offset:new aC(0, 0), styles:{backgroundColor:"#fff", border:"1px solid #f00", padding:"1px", whiteSpace:"nowrap", font:"12px " + b5.fontFamily, zIndex:"80", MozUserSelect:"none"}, position:null, enableMassClear:true, clickable:true};
        cE = cE || {};
        this.setConfig(cE);
        if (this._config.width < 0) {
            this._config.width = 0
        }
        if (ca(cE.enableClicking)) {
            this._config.clickable = cE.enableClicking
        }
        this.point = this._config.position;
        var T = this;
        ct.load("marker", function () {
            T._draw()
        })
    }

    a2.lang.inherits(ad, V, "Label");
    a2.extend(ad.prototype, {getPosition:function () {
        if (this._marker) {
            return this._marker.getPosition()
        }
        return this.point
    }, setPosition:function (T) {
        if (T instanceof b6 && !this.getMarker()) {
            this.point = this._config.position = new b6(T.lng, T.lat)
        }
    }, setContent:function (T) {
        this.content = T
    }, setOpacity:function (T) {
        if (T >= 0 && T <= 1) {
            this._config.opacity = T
        }
    }, setOffset:function (T) {
        if (!(T instanceof aC)) {
            return
        }
        this._config.offset = new aC(T.width, T.height)
    }, getOffset:function () {
        return this._config.offset
    }, setStyle:function (T) {
        T = T || {};
        this._config.styles = a2.extend(this._config.styles, T)
    }, setStyles:function (T) {
        return this.setStyle(T)
    }, setTitle:function (T) {
        this._config.title = T || ""
    }, getTitle:function () {
        return this._config.title
    }, setMarker:function (T) {
        this._marker = T;
        if (T) {
            this.point = this._config.position = T.getPosition()
        } else {
            this.point = this._config.position = null
        }
    }, getMarker:function () {
        return this._marker || null
    }});
    window.BMAP_ANIMATION_DROP = 1;
    window.BMAP_ANIMATION_BOUNCE = 2;
    var ap = new K(b5.imgPath + "marker_red_sprite.png", new aC(19, 25), {anchor:new aC(10, 25), infoWindowAnchor:new aC(10, 0)});
    var an = new K(b5.imgPath + "marker_red_sprite.png", new aC(20, 11), {anchor:new aC(6, 11), imageOffset:new aC(-19, -13)});

    function aa(T, cF) {
        V.call(this);
        cF = cF || {};
        this.point = T;
        this.map = null;
        this._animation = null;
        this._config = {offset:new aC(0, 0), icon:ap, shadow:an, title:"", label:null, baseZIndex:0, clickable:true, zIndexFixed:false, isTop:false, enableMassClear:true, enableDragging:false, raiseOnDrag:false, restrictDraggingArea:false, draggingCursor:b5.draggingCursor};
        this.setConfig(cF);
        if (cF.icon && !cF.shadow) {
            this._config.shadow = null
        }
        if (ca(cF.enableClicking)) {
            this._config.clickable = cF.enableClicking
        }
        var cE = this;
        ct.load("marker", function () {
            cE._draw()
        })
    }

    aa.TOP_ZINDEX = bA.getZIndex(-90) + 1000000;
    aa.DRAG_ZINDEX = aa.TOP_ZINDEX + 1000000;
    a2.lang.inherits(aa, V, "Marker");
    a2.extend(aa.prototype, {setIcon:function (T) {
        if (T instanceof K) {
            this._config.icon = T
        }
    }, getIcon:function () {
        return this._config.icon
    }, setShadow:function (T) {
        if (T instanceof K) {
            this._config.shadow = T
        }
    }, getShadow:function () {
        return this._config.shadow
    }, setLabel:function (T) {
        this._config.label = T || null
    }, getLabel:function () {
        return this._config.label
    }, enableDragging:function () {
        this._config.enableDragging = true
    }, disableDragging:function () {
        this._config.enableDragging = false
    }, getPosition:function () {
        return this.point
    }, setPosition:function (T) {
        if (T instanceof b6) {
            this.point = new b6(T.lng, T.lat)
        }
    }, setTop:function (cE, T) {
        this._config.isTop = !!cE;
        if (cE) {
            this._addi = T || 0
        }
    }, setTitle:function (T) {
        this._config.title = T + ""
    }, getTitle:function () {
        return this._config.title
    }, setOffset:function (T) {
        if (T instanceof aC) {
            this._config.offset = T
        }
    }, getOffset:function () {
        return this._config.offset
    }, setAnimation:function (T) {
        this._animation = T
    }});
    function cg(T, cF) {
        cy.call(this, cF);
        cF = cF || {};
        this._config.fillOpacity = cF.fillOpacity ? cF.fillOpacity : 0.65;
        if (cF.fillColor == "") {
            this._config.fillColor = ""
        } else {
            this._config.fillColor = cF.fillColor ? cF.fillColor : "#fff"
        }
        this.setPath(T);
        var cE = this;
        ct.load("poly", function () {
            cE._draw()
        })
    }

    a2.lang.inherits(cg, cy, "Polygon");
    a2.extend(cg.prototype, {setPath:function (cE, T) {
        this._userPoints = cy.getGraphPoints(cE).slice(0);
        var cF = cy.getGraphPoints(cE).slice(0);
        if (cF.length > 1 && !cF[0].equals(cF[cF.length - 1])) {
            cF.push(new b6(cF[0].lng, cF[0].lat))
        }
        cy.prototype.setPath.call(this, cF, T)
    }, setPositionAt:function (cE, T) {
        if (!this._userPoints[cE]) {
            return
        }
        this._userPoints[cE] = new b6(T.lng, T.lat);
        this.points[cE] = new b6(T.lng, T.lat);
        if (cE == 0 && !this.points[0].equals(this.points[this.points.length - 1])) {
            this.points[this.points.length - 1] = new b6(T.lng, T.lat)
        }
        this._calcBounds()
    }, getPath:function () {
        var T = this._userPoints;
        if (T.length == 0) {
            T = this.points
        }
        return T
    }});
    function f(T, cF) {
        cy.call(this, cF);
        this.setPath(T);
        var cE = this;
        ct.load("poly", function () {
            cE._draw()
        })
    }

    a2.lang.inherits(f, cy, "Polyline");
    function a(cE, T, cF) {
        this.point = cE;
        this.radius = Math.abs(T);
        cg.call(this, [], cF)
    }

    a.parseTolerance = [0.01, 0.0001, 0.00001, 0.000004];
    a2.lang.inherits(a, cg, "Circle");
    a2.extend(a.prototype, {initialize:function (T) {
        this.map = T;
        this.points = this._getPerimeterPoints(this.point, this.radius);
        this._calcBounds();
        return null
    }, getCenter:function () {
        return this.point
    }, setCenter:function (T, cE) {
        if (!T) {
            return
        }
        this.point = T
    }, getRadius:function () {
        return this.radius
    }, setRadius:function (T) {
        this.radius = Math.abs(T)
    }, _getPerimeterPoints:function (T, cL) {
        if (!T || !cL || !this.map) {
            return[]
        }
        var cE = this.map;
        var cI = T.lng, cG = T.lat;
        var cS = [];
        var cN = cL / 6378800, cK = (Math.PI / 180) * cG, cQ = (Math.PI / 180) * cI;
        for (var cJ = 0; cJ < 360; cJ += 9) {
            var cH = (Math.PI / 180) * cJ, cO = Math.asin(Math.sin(cK) * Math.cos(cN) + Math.cos(cK) * Math.sin(cN) * Math.cos(cH)), cM = Math.atan2(Math.sin(cH) * Math.sin(cN) * Math.cos(cK), Math.cos(cN) - Math.sin(cK) * Math.sin(cO)), cP = ((cQ - cM + Math.PI) % (2 * Math.PI)) - Math.PI, cR = new b6(cP * (180 / Math.PI), cO * (180 / Math.PI));
            cS.push(cR)
        }
        var cF = cS[0];
        cS.push(new b6(cF.lng, cF.lat));
        return cS
    }});
    function bK(T) {
        this.map = T;
        this.mapTypeLayers = [];
        this.tileLayers = [];
        this.bufferNumber = 300;
        this.realBufferNumber = 0;
        this.mapTiles = {};
        this.bufferTiles = {};
        this.numLoading = 0;
        this._mapTypeLayerContainer = this._createDiv(1);
        this._normalLayerContainer = this._createDiv(2);
        T.platform.appendChild(this._mapTypeLayerContainer);
        T.platform.appendChild(this._normalLayerContainer)
    }

    BMap.register(function (cE) {
        var T = new bK(cE);
        T.initialize()
    });
    a2.extend(bK.prototype, {initialize:function () {
        var T = this, cE = T.map;
        cE.addEventListener("loadcode", function () {
            T.loadTiles()
        });
        cE.addEventListener("addtilelayer", function (cF) {
            T.addTileLayer(cF)
        });
        cE.addEventListener("removetilelayer", function (cF) {
            T.removeTileLayer(cF)
        });
        cE.addEventListener("setmaptype", function (cF) {
            T.setMapType(cF)
        });
        cE.addEventListener("zoomstartcode", function (cF) {
            T._zoom(cF)
        })
    }, loadTiles:function () {
        var T = this;
        if (a2.browser.ie) {
            try {
                document.execCommand("BackgroundImageCache", false, true)
            } catch (cE) {
            }
        }
        if (!this.loaded) {
            T.initMapTypeTiles()
        }
        T.moveGridTiles();
        if (!this.loaded) {
            this.loaded = true;
            ct.load("tile", function () {
                T._asyncLoadTiles()
            })
        }
    }, initMapTypeTiles:function () {
        var cE = this.map.getMapType();
        var cF = cE.getTileLayers();
        for (var T = 0; T < cF.length; T++) {
            var cG = new n();
            a2.extend(cG, cF[T]);
            this.mapTypeLayers.push(cG);
            cG.initialize(this.map, this._mapTypeLayerContainer)
        }
    }, _createDiv:function (cE) {
        var T = X("div");
        T.style.position = "absolute";
        T.style.left = T.style.top = "0";
        T.style.zIndex = cE;
        return T
    }, showTile:function (cI, cH, cL) {
        var cO = this;
        cO.centerPos = cH;
        var cK = this.map.getMapType();
        var cF = cO.getTileName(cI, cL);
        var cS = cK.getTileSize();
        var cG = (cI[0] * cS) + cH[0];
        var cR = 0;
        if (cK === BMAP_PERSPECTIVE_MAP && cO.map.getZoom() == 15) {
            cR = 0.5
        }
        var cE = (cR - 1 - cI[1]) * cS + cH[1];
        var cM = [cG, cE];
        var cN = this.mapTiles[cF];
        if (cN && cN.img) {
            bC(cN.img, cM);
            if (cN.loaded) {
                this._checkTilesLoaded()
            } else {
                cN._addLoadCbk(function () {
                    cO._checkTilesLoaded()
                })
            }
            return
        }
        cN = this.bufferTiles[cF];
        if (cN && cN.img) {
            cL.tilesDiv.insertBefore(cN.img, cL.tilesDiv.lastChild);
            this.mapTiles[cF] = cN;
            bC(cN.img, cM);
            if (cN.loaded) {
                this._checkTilesLoaded()
            } else {
                cN._addLoadCbk(function () {
                    cO._checkTilesLoaded()
                })
            }
            return
        }
        var cQ = 256 * Math.pow(2, (cK.getMaxZoom() - cI[2]));
        var cP = new b6(cI[0] * cQ, cI[1] * cQ);
        var cJ = new bo(cI[0], cI[1]);
        var T = cL.getTilesUrl(cJ, cI[2]);
        cN = new bN(this, T, cM, cI, cL);
        cN._addLoadCbk(function () {
            cO._checkTilesLoaded()
        });
        cN._load();
        this.mapTiles[cF] = cN
    }, _checkTilesLoaded:function () {
        this.numLoading--;
        var T = this;
        if (this.numLoading == 0) {
            if (this._checkLoadedTimer) {
                clearTimeout(this._checkLoadedTimer);
                this._checkLoadedTimer = null
            }
            this._checkLoadedTimer = setTimeout(function () {
                if (T.numLoading == 0) {
                    T.map.dispatchEvent(new ba("ontilesloaded"))
                }
                T._checkLoadedTimer = null
            }, 80)
        }
    }, getTileName:function (T, cE) {
        if (this.map.getMapType() === BMAP_PERSPECTIVE_MAP) {
            return"TILE-" + cE.guid + "-" + this.map.cityCode + "-" + T[0] + "-" + T[1] + "-" + T[2]
        } else {
            return"TILE-" + cE.guid + "-" + T[0] + "-" + T[1] + "-" + T[2]
        }
    }, hideTile:function (cE) {
        var T = cE.img;
        if (T) {
            H(T);
            if (w(T)) {
                T.parentNode.removeChild(T)
            }
        }
        delete this.mapTiles[cE.name];
        if (!cE.loaded) {
            H(T);
            T = null;
            cE._callCbks();
            cE.img = null;
            cE.mgr = null
        }
    }, moveGridTiles:function () {
        var c3 = this.mapTypeLayers;
        var cP = c3.concat(this.tileLayers);
        var cV = cP.length;
        for (var cX = 0; cX < cV; cX++) {
            var cI = cP[cX];
            if (cI.baseLayer) {
                this.tilesDiv = cI.tilesDiv
            }
            var c9 = this.map;
            var c5 = c9.getMapType();
            var da = c5.getProjection();
            var cW = c9.zoomLevel;
            var cZ = c9.mercatorCenter;
            this.mapCenterPoint = cZ;
            var cN = c5.getZoomUnits(cW);
            var cQ = c5.getZoomFactor(cW);
            var cO = Math.ceil(cZ.lng / cQ);
            var cJ = Math.ceil(cZ.lat / cQ);
            var cU = c5.getTileSize();
            var cH = [cO, cJ, (cZ.lng - cO * cQ) / cQ * cU, (cZ.lat - cJ * cQ) / cQ * cU];
            var c4 = cH[0] - Math.ceil((c9.width / 2 - cH[2]) / cU);
            var cG = cH[1] - Math.ceil((c9.height / 2 - cH[3]) / cU);
            var c0 = cH[0] + Math.ceil((c9.width / 2 + cH[2]) / cU);
            var cS = 0;
            if (c5 === BMAP_PERSPECTIVE_MAP && c9.getZoom() == 15) {
                cS = 1
            }
            var cR = cH[1] + Math.ceil((c9.height / 2 + cH[3]) / cU) + cS;
            this.areaCenter = new b6(cZ.lng, cZ.lat);
            var cF = this.mapTiles;
            var cM = -this.areaCenter.lng / cN;
            var cL = this.areaCenter.lat / cN;
            var c7 = [Math.round(cM), Math.round(cL)];
            var cE = c9.getZoom();
            for (var c8 in cF) {
                var db = cF[c8];
                var c6 = db.info;
                if (c6[2] != cE || (c6[2] == cE && (c4 > c6[0] || c0 <= c6[0] || cG > c6[1] || cR <= c6[1]))) {
                    this.hideTile(db)
                }
            }
            var cK = -c9.offsetX + c9.width / 2;
            var cT = -c9.offsetY + c9.height / 2;
            cI.tilesDiv.style.left = Math.round(cM + cK) - c7[0] + "px";
            cI.tilesDiv.style.top = Math.round(cL + cT) - c7[1] + "px";
            var T = [];
            for (var c2 = c4; c2 < c0; c2++) {
                for (var c1 = cG; c1 < cR; c1++) {
                    T.push([c2, c1])
                }
            }
            T.sort((function (dc) {
                return function (dd, de) {
                    return((0.4 * Math.abs(dd[0] - dc[0]) + 0.6 * Math.abs(dd[1] - dc[1])) - (0.4 * Math.abs(de[0] - dc[0]) + 0.6 * Math.abs(de[1] - dc[1])))
                }
            })([cH[0] - 1, cH[1] - 1]));
            this.numLoading += T.length;
            for (var c2 = 0, cY = T.length; c2 < cY; c2++) {
                this.showTile([T[c2][0], T[c2][1], cE], c7, cI)
            }
        }
        return
    }, addTileLayer:function (cG) {
        var cF = this;
        var T = cG.target;
        for (var cE = 0; cE < cF.tileLayers.length; cE++) {
            if (cF.tileLayers[cE] == T) {
                return
            }
        }
        T.initialize(this.map, this._normalLayerContainer);
        cF.tileLayers.push(T)
    }, removeTileLayer:function (cH) {
        var cG = this;
        var cE = cH.target;
        for (var cF = 0, T = cG.tileLayers.length; cF < T; cF++) {
            if (cE == cG.tileLayers[cF]) {
                cG.tileLayers.splice(cF, 1)
            }
        }
        cE.remove()
    }, setMapType:function () {
        var cF = this;
        var cG = this.mapTypeLayers;
        for (var cE = 0, T = cG.length; cE < T; cE++) {
            cG[cE].remove()
        }
        delete this.tilesDiv;
        this.mapTypeLayers = [];
        this.bufferTiles = this.mapTiles = {};
        this.initMapTypeTiles();
        this.moveGridTiles()
    }, _zoom:function () {
        var T = this;
        if (T.zoomsDiv) {
            a2.dom.hide(T.zoomsDiv)
        }
        setTimeout(function () {
            T.moveGridTiles();
            T.map.dispatchEvent(new ba("onzoomend"))
        }, 10)
    }});
    function bN(cK, T, cH, cE, cG) {
        this.mgr = cK;
        this.position = cH;
        this._cbks = [];
        this.name = cK.getTileName(cE, cG);
        this.info = cE;
        this._transparentPng = cG.isTransparentPng();
        var cL = X("img");
        cp(cL);
        cL.galleryImg = false;
        var cJ = cL.style;
        var cF = cK.map.getMapType();
        cJ.position = "absolute";
        cJ.border = "none";
        cJ.width = cF.getTileSize() + "px";
        cJ.height = cF.getTileSize() + "px";
        cJ.left = cH[0] + "px";
        cJ.top = cH[1] + "px";
        this.img = cL;
        this.src = T;
        if (C) {
            this.img.style.opacity = 0
        }
        var cI = this;
        this.img.onload = function (cR) {
            cI.loaded = true;
            if (!cI.mgr) {
                return
            }
            var cN = cI.mgr;
            var cM = cN.bufferTiles;
            if (!cM[cI.name]) {
                cN.realBufferNumber++;
                cM[cI.name] = cI
            }
            if (cI.img && !w(cI.img)) {
                if (cG.tilesDiv) {
                    cG.tilesDiv.appendChild(cI.img);
                    if (a2.browser.ie <= 6 && a2.browser.ie > 0 && cI._transparentPng) {
                        cI.img.style.cssText += ';filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + cI.src + '",sizingMethod=scale);'
                    }
                }
            }
            var cP = cN.realBufferNumber - cN.bufferNumber;
            for (var cQ in cM) {
                if (cP <= 0) {
                    break
                }
                if (!cN.mapTiles[cQ]) {
                    cM[cQ].mgr = null;
                    var cO = cM[cQ].img;
                    if (cO && cO.parentNode) {
                        cO.parentNode.removeChild(cO);
                        H(cO)
                    }
                    cO = null;
                    cM[cQ].img = null;
                    delete cM[cQ];
                    cN.realBufferNumber--;
                    cP--
                }
            }
            if (C) {
                new g({fps:20, duration:200, render:function (cS) {
                    if (cI.img && cI.img.style) {
                        cI.img.style.opacity = cS * 1
                    }
                }, finish:function () {
                    if (cI.img && cI.img.style) {
                        delete cI.img.style.opacity
                    }
                }})
            }
            cI._callCbks()
        };
        this.img.onerror = function () {
            cI._callCbks();
            if (!cI.mgr) {
                return
            }
            var cM = cI.mgr;
            var cN = cM.map.getMapType();
            if (cN.getErrorImageUrl()) {
                cI.error = true;
                cI.img.src = cN.getErrorImageUrl();
                if (cI.img && !w(cI.img)) {
                    cG.tilesDiv.appendChild(cI.img)
                }
            }
        };
        cL = null
    }

    bN.prototype._addLoadCbk = function (T) {
        this._cbks.push(T)
    };
    bN.prototype._load = function () {
        if (a2.browser.ie > 0 && a2.browser.ie <= 6 && this._transparentPng) {
            this.img.src = b5.imgPath + "blank.gif"
        } else {
            this.img.src = this.src
        }
    };
    bN.prototype._callCbks = function () {
        var cE = this;
        for (var T = 0; T < cE._cbks.length; T++) {
            cE._cbks[T]()
        }
        cE._cbks.length = 0
    };
    function H(cG) {
        if (!cG) {
            return
        }
        cG.onload = cG.onerror = null;
        var cE = cG.attributes, cF, T, cH;
        if (cE) {
            T = cE.length;
            for (cF = 0; cF < T; cF += 1) {
                cH = cE[cF].name;
                if (G(cG[cH])) {
                    cG[cH] = null
                }
            }
        }
        cE = cG.children;
        if (cE) {
            T = cE.length;
            for (cF = 0; cF < T; cF += 1) {
                H(cG.children[cF])
            }
        }
    }

    var C = (!a2.browser.ie || a2.browser.ie > 8);

    function n(T) {
        this.opts = T || {};
        this.copyright = this.opts.copyright || null;
        this.transparentPng = this.opts.transparentPng || false;
        this.baseLayer = this.opts.baseLayer || false;
        this.zIndex = this.opts.zIndex || 0;
        this.guid = n._guid++
    }

    n._guid = 0;
    a2.lang.inherits(n, a2.lang.Class, "TileLayer");
    a2.extend(n.prototype, {initialize:function (cF, T) {
        if (this.baseLayer) {
            this.zIndex = -100
        }
        this.map = cF;
        if (!this.tilesDiv) {
            var cG = X("div");
            var cE = cG.style;
            T.style.WebkitBackfaceVisibility = "hidden";
            cE.position = "absolute";
            cE.zIndex = this.zIndex;
            cE.left = Math.ceil(-cF.offsetX + cF.width / 2) + "px";
            cE.top = Math.ceil(-cF.offsetY + cF.height / 2) + "px";
            T.appendChild(cG);
            this.tilesDiv = cG
        }
    }, remove:function () {
        if (this.tilesDiv && this.tilesDiv.parentNode) {
            this.tilesDiv.innerHTML = "";
            this.tilesDiv.parentNode.removeChild(this.tilesDiv)
        }
        delete this.tilesDiv
    }, isTransparentPng:function () {
        return this.transparentPng
    }, getTilesUrl:function (cE, cF) {
        var T = "";
        if (this.opts.tileUrlTemplate) {
            T = this.opts.tileUrlTemplate.replace(/\{X\}/, cE.x);
            T = T.replace(/\{Y\}/, cE.y);
            T = T.replace(/\{Z\}/, cF)
        }
        return T
    }, getCopyright:function () {
        return this.copyright
    }, getMapType:function () {
        return this.mapType || BMAP_NORMAL_MAP
    }});
    function ay(T) {
        n.call(this, T);
        this._opts = {};
        T = T || {};
        this._opts = a2.object.extend(this._opts, T);
        if (this._opts.predictDate) {
            if (this._opts.predictDate.weekday < 1 || this._opts.predictDate.weekday > 7) {
                this._opts.predictDate = 1
            }
            if (this._opts.predictDate.hour < 0 || this._opts.predictDate.hour > 23) {
                this._opts.predictDate.hour = 0
            }
        }
        this._tileUrl = "http://its.map.baidu.com:8002/traffic/"
    }

    ay.prototype = new n();
    ay.prototype.initialize = function (cE, T) {
        n.prototype.initialize.call(this, cE, T);
        this._map = cE
    };
    ay.prototype.isTransparentPng = function () {
        return true
    };
    ay.prototype.getTilesUrl = function (cJ, cE) {
        var cK = "";
        if (this._opts.predictDate) {
            cK = "HistoryService?day=" + (this._opts.predictDate.weekday - 1) + "&hour=" + this._opts.predictDate.hour + "&t=" + new Date().getTime() + "&"
        } else {
            cK = "TrafficTileService?time=" + new Date().getTime() + "&"
        }
        var cF = this._map, cL = cJ.x, cG = cJ.y, cI = Math.floor(cL / 200), cH = Math.floor(cG / 200), T = this._tileUrl + cK + "level=" + cE + "&x=" + cL + "&y=" + cG;
        return T.replace(/-(\d+)/gi, "M$1")
    };
    function cn(T, cE, cF) {
        this._name = T;
        this._layers = cE instanceof n ? [cE] : cE.slice(0);
        this._opts = {tips:"", labelText:"", minZoom:1, maxZoom:19, tileSize:256, textColor:"black", errorImageUrl:"", projection:new a4()};
        if (this._layers.length == 1) {
            this._layers[0].baseLayer = true
        }
        a2.extend(this._opts, cF || {})
    }

    a2.extend(cn.prototype, {getName:function () {
        return this._name
    }, getTips:function () {
        return this._opts.tips
    }, getLabelText:function () {
        return this._opts.labelText
    }, getTileLayer:function () {
        return this._layers[0]
    }, getTileLayers:function () {
        return this._layers
    }, getTileSize:function () {
        return this._opts.tileSize
    }, getMinZoom:function () {
        return this._opts.minZoom
    }, getMaxZoom:function () {
        return this._opts.maxZoom
    }, getTextColor:function () {
        return this._opts.textColor
    }, getProjection:function () {
        return this._opts.projection
    }, getErrorImageUrl:function () {
        return this._opts.errorImageUrl
    }, getZoomUnits:function (T) {
        return Math.pow(2, (18 - T))
    }, getZoomFactor:function (T) {
        return this.getZoomUnits(T) * 256
    }});
    var b0 = ["http://q1.baidu.com/it/", "http://q2.baidu.com/it/", "http://q3.baidu.com/it/", "http://q4.baidu.com/it/", "http://q5.baidu.com/it/", "http://q6.baidu.com/it/", "http://q7.baidu.com/it/", "http://q8.baidu.com/it/"];
    var aO = new n();
    aO.getTilesUrl = function (cF, cI) {
        var cJ = cF.x;
        var cG = cF.y;
        var cH = "44", T = "011";
        if (this.map.highResolutionEnabled()) {
            cH = "41";
            T = "011"
        }
        var cE = b0[Math.abs(cJ + cG) % b0.length] + "u=x=" + cJ + ";y=" + cG + ";z=" + cI + ";v=" + T + ";type=web&fm=" + cH;
        return cE.replace(/-(\d+)/gi, "M$1")
    };
    window.BMAP_NORMAL_MAP = new cn("\u5730\u56fe", aO, {tips:"\u663e\u793a\u666e\u901a\u5730\u56fe"});
    var bm = new n();
    bm.tileUrls = ["http://d0.map.baidu.com/resource/mappic/", "http://d1.map.baidu.com/resource/mappic/", "http://d2.map.baidu.com/resource/mappic/", "http://d3.map.baidu.com/resource/mappic/"];
    bm.getTilesUrl = function (T, cF) {
        var cH = T.x;
        var cE = T.y;
        var cG = Math.pow(2, (20 - cF)) * 256;
        cE = Math.round((9998336 - cG * (cE)) / cG) - 1;
        url = this.tileUrls[Math.abs(cH + cE) % this.tileUrls.length] + this.map.currentCity + "/" + this.map.cityCode + "/3/lv" + (21 - cF) + "/" + cH + "," + cE + ".jpg";
        return url
    };
    window.BMAP_PERSPECTIVE_MAP = new cn("\u4e09\u7ef4", bm, {tips:"\u663e\u793a\u4e09\u7ef4\u5730\u56fe", minZoom:15, maxZoom:20, textColor:"white", projection:new cx()});
    BMAP_PERSPECTIVE_MAP.getZoomUnits = function (T) {
        return Math.pow(2, (20 - T))
    };
    BMAP_PERSPECTIVE_MAP.getCityName = function (T) {
        if (!T) {
            return""
        }
        var cE = b5.cityNames;
        for (var cF in cE) {
            if (T.search(cF) > -1) {
                return cE[cF]
            }
        }
        return""
    };
    BMAP_PERSPECTIVE_MAP.getCityCode = function (T) {
        return({bj:2, gz:1, sz:14, sh:4})[T]
    };
    var bJ = new n({baseLayer:true});
    bJ.getTilesUrl = function (cE, cG) {
        var cH = cE.x;
        var cF = cE.y;
        var T = b0[Math.abs(cH + cF) % b0.length] + "u=x=" + cH + ";y=" + cF + ";z=" + cG + ";v=009;type=sate&fm=46";
        return T.replace(/-(\d+)/gi, "M$1")
    };
    window.BMAP_SATELLITE_MAP = new cn("\u536b\u661f", bJ, {tips:"\u663e\u793a\u536b\u661f\u5f71\u50cf", minZoom:1, maxZoom:19, textColor:"white"});
    var m = new n({transparentPng:true});
    m.getTilesUrl = function (cE, cG) {
        var cH = cE.x;
        var cF = cE.y;
        var T = b0[Math.abs(cH + cF) % b0.length] + "u=x=" + cH + ";y=" + cF + ";z=" + cG + ";v=011;type=trans&fm=47";
        return T.replace(/-(\d+)/gi, "M$1")
    };
    window.BMAP_HYBRID_MAP = new cn("\u6df7\u5408", [bJ, m], {tips:"\u663e\u793a\u5e26\u6709\u8857\u9053\u7684\u536b\u661f\u5f71\u50cf", labelText:"\u8def\u7f51", minZoom:1, maxZoom:19, textColor:"white"});
    window.BMAP_POI_TYPE_NORMAL = 0;
    window.BMAP_POI_TYPE_BUSSTOP = 1;
    window.BMAP_POI_TYPE_BUSLINE = 2;
    window.BMAP_POI_TYPE_SUBSTOP = 3;
    window.BMAP_POI_TYPE_SUBLINE = 4;
    var F = 0;
    var bb = 1;
    var ak = {};

    function u(cE, T) {
        a2.lang.Class.call(this);
        this._loc = {};
        this.setLocation(cE);
        this._opts = {renderOptions:{panel:null, map:null, autoViewport:true}, onSearchComplete:function () {
        }, onMarkersSet:function () {
        }, onInfoHtmlSet:function () {
        }, onResultsHtmlSet:function () {
        }, onGetBusListComplete:function () {
        }, onGetBusLineComplete:function () {
        }, onBusListHtmlSet:function () {
        }, onBusLineHtmlSet:function () {
        }, onPolylinesSet:function () {
        }, reqFrom:""};
        a2.extend(this._opts, T);
        if (typeof T != "undefined" && typeof T.renderOptions != "undefined" && typeof T.renderOptions.autoViewport != "undefined") {
            this._opts.renderOptions.autoViewport = T.renderOptions.autoViewport
        } else {
            this._opts.renderOptions.autoViewport = true
        }
        this._opts.renderOptions.panel = a2.G(this._opts.renderOptions.panel)
    }

    a2.inherits(u, a2.lang.Class);
    a2.extend(u.prototype, {getResults:function () {
        if (!this._isMultiKey) {
            return this._results
        } else {
            return this._arrResults
        }
    }, enableAutoViewport:function () {
        this._opts.renderOptions.autoViewport = true
    }, disableAutoViewport:function () {
        this._opts.renderOptions.autoViewport = false
    }, setLocation:function (T) {
        if (!T) {
            return
        }
        this._loc.src = T
    }, setSearchCompleteCallback:function (T) {
        this._opts.onSearchComplete = T || function () {
        }
    }, setMarkersSetCallback:function (T) {
        this._opts.onMarkersSet = T || function () {
        }
    }, setPolylinesSetCallback:function (T) {
        this._opts.onPolylinesSet = T || function () {
        }
    }, setInfoHtmlSetCallback:function (T) {
        this._opts.onInfoHtmlSet = T || function () {
        }
    }, setResultsHtmlSetCallback:function (T) {
        this._opts.onResultsHtmlSet = T || function () {
        }
    }, getStatus:function () {
        return this._status
    }});
    var a5 = {REQ_BASE_URL:"http://api.map.baidu.com/", request:function (cE, cK, T, cJ) {
        var cF = (Math.random() * 100000).toFixed(0);
        BMap._rd["_cbk" + cF] = function (cL) {
            T = T || {};
            cE && cE(cL, T);
            delete BMap._rd["_cbk" + cF]
        };
        cJ = cJ || "";
        var cH;
        if (T && T.useEncodeURI) {
            cH = M(cK, encodeURI)
        } else {
            cH = M(cK, encodeURIComponent)
        }
        var cI = this, cG = cI.REQ_BASE_URL + cJ + "?" + cH + "&ie=utf-8&oue=1&res=api&callback=BMap._rd._cbk" + cF;
        cq.request(cG)
    }};
    BMap._rd = {};
    var P = {};
    P.removeHtml = function (T) {
        return T.replace(/<\/?b>/g, "")
    };
    P.parseGeoExtReg1 = function (T) {
        return T.replace(/([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*),([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*)(,)/g, "$1,$2;")
    };
    P.parseGeoExtReg2 = function (cE, T) {
        var cF = new RegExp("(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);)(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);){" + T + "}", "ig");
        return cE.replace(cF, "$1")
    };
    window.BMAP_STATUS_SUCCESS = 0;
    window.BMAP_STATUS_CITY_LIST = 1;
    window.BMAP_STATUS_UNKNOWN_LOCATION = 2;
    window.BMAP_STATUS_UNKNOWN_ROUTE = 3;
    window.BMAP_STATUS_INVALID_KEY = 4;
    window.BMAP_STATUS_INVALID_REQUEST = 5;
    window.BMAP_STATUS_PERMISSION_DENIED = 6;
    window.BMAP_STATUS_SERVICE_UNAVAILABLE = 7;
    window.BMAP_STATUS_TIMEOUT = 8;
    window.BMAP_ROUTE_TYPE_WALKING = 2;
    window.BMAP_ROUTE_TYPE_DRIVING = 3;
    var co = "cur";
    var c = "cen";
    var cc = "s";
    var N = "con";
    var ai = "bd";
    var b4 = "nb";
    var D = "bt";
    var bF = "nav";
    var bp = "walk";
    var bu = "gc";
    var d = "rgc";
    var Q = "dec";
    var aL = "bse";
    var e = "nse";
    var E = "bl";
    var a9 = "bsl";
    var aB = "bda";
    var af = "sa";
    var aV = "nba";
    var cb = "drag";
    var bX = "ext";
    var p = 2;
    var aZ = 4;
    var bn = 7;
    var U = 11;
    var aI = 12;
    var bc = 14;
    var aW = 15;
    var cr = 18;
    var s = 20;
    var O = 21;
    var am = 26;
    var by = 28;
    var x = 31;
    var bk = 35;
    var bw = 44;
    var at = 45;
    var ab = 46;
    var bL = 47;
    var aU = -1;
    var Y = 0;
    var cj = 1;
    var a0 = 2;
    var z = 3;
    var cB = "http://map.baidu.com/";
    var v = "http://api.map.baidu.com/";
    BMap.I = window.Instance = a2.lang.instance;
    var aY = function (cF, cE) {
        u.call(this, cF, cE);
        cE = cE || {};
        cE.renderOptions = cE.renderOptions || {};
        this.setPageCapacity(cE.pageCapacity);
        if (typeof cE.renderOptions.selectFirstResult != "undefined" && !cE.renderOptions.selectFirstResult) {
            this.disableFirstResultSelection()
        } else {
            this.enableFirstResultSelection()
        }
        this._overlays = [];
        this._arrPois = [];
        this._curIndex = -1;
        this._queryList = [];
        var T = this;
        ct.load("local", function () {
            T._check()
        })
    };
    a2.inherits(aY, u, "LocalSearch");
    aY.DEFAULT_PAGE_CAPACITY = 10;
    aY.MIN_PAGE_CAPACITY = 1;
    aY.MAX_PAGE_CAPACITY = 100;
    aY.DEFAULT_RADIUS = 2000;
    aY.MAX_RADIUS = 100000;
    a2.extend(aY.prototype, {search:function (T) {
        this._queryList.push({method:"search", arguments:[T]})
    }, searchInBounds:function (T, cE) {
        this._queryList.push({method:"searchInBounds", arguments:[T, cE]})
    }, searchNearby:function (cF, cE, T) {
        this._queryList.push({method:"searchNearby", arguments:[cF, cE, T]})
    }, clearResults:function () {
        delete this._json;
        delete this._status;
        delete this._results;
        delete this._ud;
        this._curIndex = -1;
        this._setStatus();
        if (this._opts.renderOptions.panel) {
            this._opts.renderOptions.panel.innerHTML = ""
        }
    }, gotoPage:function () {
    }, enableFirstResultSelection:function () {
        this._opts.renderOptions.selectFirstResult = true
    }, disableFirstResultSelection:function () {
        this._opts.renderOptions.selectFirstResult = false
    }, setPageCapacity:function (T) {
        if (typeof T == "number" && !isNaN(T)) {
            this._opts.pageCapacity = T < 1 ? aY.DEFAULT_PAGE_CAPACITY : (T > aY.MAX_PAGE_CAPACITY ? aY.DEFAULT_PAGE_CAPACITY : T)
        } else {
            this._opts.pageCapacity = aY.DEFAULT_PAGE_CAPACITY
        }
    }, getPageCapacity:function () {
        return this._opts.pageCapacity
    }, toString:function () {
        return"LocalSearch"
    }});
    var bY = function (cE, T) {
        u.call(this, cE, T)
    };
    a2.inherits(bY, u, "BaseRoute");
    a2.extend(bY.prototype, {clearResults:function () {
    }});
    window.BMAP_TRANSIT_POLICY_LEAST_TIME = 0;
    window.BMAP_TRANSIT_POLICY_LEAST_TRANSFER = 2;
    window.BMAP_TRANSIT_POLICY_LEAST_WALKING = 3;
    window.BMAP_TRANSIT_POLICY_AVOID_SUBWAYS = 4;
    window.BMAP_LINE_TYPE_BUS = 0;
    window.BMAP_LINE_TYPE_SUBWAY = 1;
    window.BMAP_LINE_TYPE_FERRY = 2;
    function aP(cF, cE) {
        bY.call(this, cF, cE);
        cE = cE || {};
        this.setPolicy(cE.policy);
        this.setPageCapacity(cE.pageCapacity);
        this.QUERY_TYPE = D;
        this.RETURN_TYPE = bc;
        this.ROUTE_TYPE = bb;
        this._overlays = [];
        this._curIndex = -1;
        this._queryList = [];
        var T = this;
        ct.load("route", function () {
            T._asyncSearch()
        })
    }

    aP.MAX_PAGE_CAPACITY = 100;
    aP.LINE_TYPE_MAPPING = [0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1];
    a2.inherits(aP, bY, "TransitRoute");
    a2.extend(aP.prototype, {setPolicy:function (T) {
        if (T >= BMAP_TRANSIT_POLICY_LEAST_TIME && T <= BMAP_TRANSIT_POLICY_AVOID_SUBWAYS) {
            this._opts.policy = T
        } else {
            this._opts.policy = BMAP_TRANSIT_POLICY_LEAST_TIME
        }
    }, _internalSearch:function (cE, T) {
        this._queryList.push({method:"_internalSearch", arguments:[cE, T]})
    }, search:function (cE, T) {
        this._queryList.push({method:"search", arguments:[cE, T]})
    }, setPageCapacity:function (T) {
        if (typeof T == "string") {
            T = parseInt(T);
            if (isNaN(T)) {
                this._opts.pageCapacity = aP.MAX_PAGE_CAPACITY;
                return
            }
        }
        if (typeof T != "number") {
            this._opts.pageCapacity = aP.MAX_PAGE_CAPACITY;
            return
        }
        if (T >= 1 && T <= aP.MAX_PAGE_CAPACITY) {
            this._opts.pageCapacity = Math.round(T)
        } else {
            this._opts.pageCapacity = aP.MAX_PAGE_CAPACITY
        }
    }, toString:function () {
        return"TransitRoute"
    }, _shortTitle:function (T) {
        return T.replace(/\(.*\)/, "")
    }});
    window.BMAP_HIGHLIGHT_STEP = 1;
    window.BMAP_HIGHLIGHT_ROUTE = 2;
    var bf = function (T, cG) {
        bY.call(this, T, cG);
        this._overlays = [];
        this._curIndex = -1;
        this._queryList = [];
        var cF = this;
        var cE = this._opts.renderOptions;
        if (cE.highlightMode != BMAP_HIGHLIGHT_STEP && cE.highlightMode != BMAP_HIGHLIGHT_ROUTE) {
            cE.highlightMode = BMAP_HIGHLIGHT_STEP
        }
        this._enableDragging = this._opts.renderOptions.enableDragging ? true : false;
        ct.load("route", function () {
            cF._asyncSearch()
        })
    };
    bf.ROAD_TYPE = ["", "\u73af\u5c9b", "\u65e0\u5c5e\u6027\u9053\u8def", "\u4e3b\u8def", "\u9ad8\u901f\u8fde\u63a5\u8def", "\u4ea4\u53c9\u70b9\u5185\u8def\u6bb5", "\u8fde\u63a5\u9053\u8def", "\u505c\u8f66\u573a\u5185\u90e8\u9053\u8def", "\u670d\u52a1\u533a\u5185\u90e8\u9053\u8def", "\u6865", "\u6b65\u884c\u8857", "\u8f85\u8def", "\u531d\u9053", "\u5168\u5c01\u95ed\u9053\u8def", "\u672a\u5b9a\u4e49\u4ea4\u901a\u533a\u57df", "POI\u8fde\u63a5\u8def", "\u96a7\u9053", "\u6b65\u884c\u9053", "\u516c\u4ea4\u4e13\u7528\u9053", "\u63d0\u524d\u53f3\u8f6c\u9053"];
    a2.inherits(bf, bY, "DWRoute");
    a2.extend(bf.prototype, {search:function (cE, T) {
        this._queryList.push({method:"search", arguments:[cE, T]})
    }});
    window.BMAP_DRIVING_POLICY_LEAST_TIME = 0;
    window.BMAP_DRIVING_POLICY_LEAST_DISTANCE = 1;
    window.BMAP_DRIVING_POLICY_AVOID_HIGHWAYS = 2;
    function o(T, cE) {
        bf.call(this, T, cE);
        cE = cE || {};
        this.setPolicy(cE.policy);
        this.QUERY_TYPE = bF;
        this.RETURN_TYPE = s;
        this.ROUTE_TYPE = BMAP_ROUTE_TYPE_DRIVING
    }

    a2.inherits(o, bf, "DrivingRoute");
    a2.extend(o.prototype, {setPolicy:function (T) {
        if (T >= BMAP_DRIVING_POLICY_LEAST_TIME && T <= BMAP_DRIVING_POLICY_AVOID_HIGHWAYS) {
            this._opts.policy = T
        } else {
            this._opts.policy = BMAP_DRIVING_POLICY_LEAST_TIME
        }
    }});
    function cw(T, cE) {
        bf.call(this, T, cE);
        this.QUERY_TYPE = bp;
        this.RETURN_TYPE = x;
        this.ROUTE_TYPE = BMAP_ROUTE_TYPE_WALKING;
        this._enableDragging = false
    }

    a2.inherits(cw, bf, "WalkingRoute");
    function aS(cE) {
        this._opts = {};
        a2.extend(this._opts, cE);
        this._queryList = [];
        var T = this;
        ct.load("othersearch", function () {
            T._asyncSearch()
        })
    }

    a2.inherits(aS, a2.lang.Class, "Geocoder");
    a2.extend(aS.prototype, {getPoint:function (T, cF, cE) {
        this._queryList.push({method:"getPoint", arguments:[T, cF, cE]})
    }, getLocation:function (T, cF, cE) {
        this._queryList.push({method:"getLocation", arguments:[T, cF, cE]})
    }, toString:function () {
        return"Geocoder"
    }});
    function ah(cE) {
        this._opts = {};
        a2.extend(this._opts, cE);
        this._queryList = [];
        var T = this;
        ct.load("othersearch", function () {
            T._asyncSearch()
        })
    }

    a2.extend(ah.prototype, {getCurrentPosition:function (cE, T) {
        this._queryList.push({method:"getCurrentPosition", arguments:[cE, T]})
    }, getStatus:function () {
        return this._status
    }});
    function b2(cE) {
        this._opts = {renderOptions:{map:null}};
        a2.extend(this._opts, cE);
        this._queryList = [];
        var T = this;
        ct.load("othersearch", function () {
            T._asyncSearch()
        })
    }

    a2.inherits(b2, a2.lang.Class, "LocalCity");
    a2.extend(b2.prototype, {get:function (T) {
        this._queryList.push({method:"get", arguments:[T]})
    }, toString:function () {
        return"LocalCity"
    }});
    function R() {
        this._queryList = [];
        var T = this;
        ct.load("othersearch", function () {
            T._asyncSearch()
        })
    }

    a2.inherits(R, a2.lang.Class, "Boundary");
    a2.extend(R.prototype, {get:function (cE, T) {
        this._queryList.push({method:"get", arguments:[cE, T]})
    }, toString:function () {
        return"Boundary"
    }});
    function bg(cF, cE) {
        u.call(this, cF, cE);
        this.QUERY_TYPE_BUSLIST = E;
        this.RETURN_TYPE_BUSLIST = aW;
        this.QUERY_TYPE_BUSLINE = a9;
        this.RETURN_TYPE_BUSLINE = cr;
        this._queryList = [];
        var T = this;
        ct.load("buslinesearch", function () {
            T._asyncSearch()
        })
    }

    bg._iconOpen = b5.imgPath + "iw_plus.gif";
    bg._iconClose = b5.imgPath + "iw_minus.gif";
    bg._stopUrl = b5.imgPath + "stop_icon.png";
    a2.inherits(bg, u);
    a2.extend(bg.prototype, {getBusList:function (T) {
        this._queryList.push({method:"getBusList", arguments:[T]})
    }, getBusLine:function (T) {
        this._queryList.push({method:"getBusLine", arguments:[T]})
    }, setGetBusListCompleteCallback:function (T) {
        this._opts.onGetBusListComplete = T || function () {
        }
    }, setGetBusLineCompleteCallback:function (T) {
        this._opts.onGetBusLineComplete = T || function () {
        }
    }, setBusListHtmlSetCallback:function (T) {
        this._opts.onBusListHtmlSet = T || function () {
        }
    }, setBusLineHtmlSetCallback:function (T) {
        this._opts.onBusLineHtmlSet = T || function () {
        }
    }, setPolylinesSetCallback:function (T) {
        this._opts.onPolylinesSet = T || function () {
        }
    }});
    function bs(cE) {
        u.call(this, cE);
        cE = cE || {};
        this._options = {input:null, types:[], onSearchComplete:function () {
        }};
        a2.extend(this._options, cE);
        this._loc.src = cE.location || "\u5168\u56fd";
        this._word = "";
        this._show = false;
        this._suggestion = null;
        this._inputValue = "";
        this._initialize();
        _addStat(5011);
        var T = this;
        ct.load("autocomplete", function () {
            T._asyncSearch()
        })
    }

    a2.inherits(bs, u, "Autocomplete");
    a2.extend(bs.prototype, {_initialize:function () {
    }, show:function () {
        this._show = true
    }, hide:function () {
        this._show = false
    }, setTypes:function (T) {
        this._options.types = T
    }, setLocation:function (T) {
        this._loc.src = T
    }, search:function (T) {
        this._word = T
    }, setInputValue:function (T) {
        this._inputValue = T
    }});
    function ag(T, cE) {
        window.BMap[T] = cE
    }

    ag("Map", bt);
    ag("Hotspot", cf);
    ag("MapType", cn);
    ag("Point", b6);
    ag("Pixel", bo);
    ag("Size", aC);
    ag("Bounds", bG);
    ag("TileLayer", n);
    ag("Projection", a7);
    ag("MercatorProjection", a4);
    ag("PerspectiveProjection", cx);
    ag("Copyright", aq);
    ag("Overlay", bA);
    ag("Label", ad);
    ag("Marker", aa);
    ag("Icon", K);
    ag("Polyline", f);
    ag("Polygon", cg);
    ag("InfoWindow", bI);
    ag("Circle", a);
    ag("Control", ci);
    ag("NavigationControl", J);
    ag("OverviewMapControl", cD);
    ag("CopyrightControl", aj);
    ag("ScaleControl", bD);
    ag("MapTypeControl", aG);
    ag("TrafficLayer", ay);
    ag("ContextMenu", cs);
    ag("MenuItem", a8);
    ag("LocalSearch", aY);
    ag("TransitRoute", aP);
    ag("DrivingRoute", o);
    ag("WalkingRoute", cw);
    ag("Autocomplete", bs);
    ag("Geocoder", aS);
    ag("LocalCity", b2);
    ag("Geolocation", ah);
    ag("BusLineSearch", bg);
    ag("Boundary", R);
    window.BMap.apiLoad();
})();
var _key = ""