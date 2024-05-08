// ==UserScript==
// @name                 Remove Restrictions and Restore Default Behavior
// @name:zh-CN           解除网页限制，恢复默认行为
// @name:en-US           Remove Restrictions and Restore Default Behavior
// @namespace            http://hl-bo.github.io/namespaces/user-script/remove-limits
// @source               https://github.com/HL-Bo/user-script
// @supportURL           https://github.com/HL-Bo/user-script/issues
// @version              2.5
// @license              AGPLv3
// @description          Allows you select, cut, copy, paste, save and open the DevTools on any website.
// @description:zh-CN    恢复选择、剪切、复制、粘贴、保存、右键菜单和打开开发者工具的默认行为。
// @description:en-US    Allows you select, cut, copy, paste, save and open the DevTools on any website.
// @author               HL-Bo
// @match                *://*/**
// @exclude              *://vscode.dev
// @exclude              *://vscode.dev/**
// @exclude              *://*.github.dev
// @exclude              *://*.github.dev/**
// @exclude              *://github.com/*/*/edit/**
// @exclude              *://gitee.com/*/*/edit/**
// @exclude              *://codeberg.org/*/*/_edit/**
// @exclude              *://www.figma.com/file/**
// @exclude              *://www.notion.so/**
// @exclude              *://outlook.live.com/**
// @exclude              *://mail.netease.com/**
// @exclude              *://mail.163.com/**
// @exclude              *://mail.126.com/**
// @exclude              *://www.yeah.net/**
// @exclude              *://mail.qq.com/**
// @exclude              *://uutool.cn/*
// @exclude              *://anytexteditor.com/*/online-notepad
// @exclude              *://*.zhihuishu.com/**
// @exclude              *://localhost
// @exclude              *://localhost:*
// @exclude              *://localhost/**
// @exclude              *://localhost:*/**
// @exclude              *://127.0.0.1
// @exclude              *://127.0.0.1:*
// @exclude              *://127.0.0.1/**
// @exclude              *://127.0.0.1:*/**
// @icon                 data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAspJREFUWEfVl89PE1EQx7/TdpcabKFAoEKQH22ktEYSqRevXiRijEr8cSDe/DNM9D/xhPFn4oF4MeBZuJi0SiiQikTjD2gLCLS7jNmFLt2mu/uWYtB36G73zWQ+b2bevDeEijE5Od/Q3ut5CNA9gMOVc3bvG7+3MLeYRU9nhxqP9r2WURoPh8ObIvpUKTSbzkww6I6IYqWMAdAVxmCkF8z8zk/KFREIA2BmbilGu7tpZpigRGCqATQdAk3LKI46QRjGZtOZ6wx6KWKwWqYWgCbDzNN+UmwhDID3HxduEuP5UQKIQPx1gDJEnpTRoRqJaQnw/dcqVvPrANf2iST50N/dCSKCVQjMmjyVg3K1GsISILvyFT/X8pYRkXw+nD3TD4/HIwigp+ZUDkUThG0I9MVbeIAq9srW9g7SmSW0t4ZwPjHglEZvf3xZGkkmk6W93bI/qpNQUVVs7xRtPOBFgyzr88yM1PwidoolRE53oS3UbAuhMo8Mx/re2ALMZ5dRWLcuZlrsh2JReL1e3ZiWB5nsMlR118kDII/39v2xy09tAQobm8jrALVjIEsSOtpaTMZKioLVXAHaU/OK1fAAt65duvjMFsBxGXUIMGHswmDkhS2AtpK1wnodZg5UQ8EAWpqDxgchgIXPK8gdEUBzMKAnZ3kIAWgxLCmq9T4U9g1B8nn1gvV/ARx7CI49CYVDfAhBoSR0KkTidglNgUYETza6S0KtrO5VwvqHBhDt6XYH4HQYucHyN8jw7Z8Z+uElUgl1QePHjbkqWao4cvenhACcLiRukNpCTejpOuUuBE5XMmEAAlqaAmhvPTg5hTwgbOAQgv8mQD2NiVsnEPjGcDz6ynQfmPkwFyPJd6jWzA0AEZhLSjx5buCTCUD7M5temGDAdXPqCgB4MhyP3C3rmBrRVColb5H/kdv2XAyAvgH8+ARvP0gkEsZ1+w+ixcUwoQ+80AAAAABJRU5ErkJggg==
// @grant                none
// @run-at               document-start
// ==/UserScript==

(function () {
    'use strict';
    let in_frame = false;
    if (window.frameElement && window.frameElement.tagName === 'IFRAME' || window !== window.top) { in_frame = true; }
    if (!in_frame) {
        console.log(
            "  ____                                              _       _               _   _         \n" +
            " |  _ \\    ___   _ __ ___     ___   __   __   ___  | |     (_)  _ __ ___   (_) | |_   ___ \n" +
            " | |_) |  / _ \\ | '_ ` _ \\   / _ \\  \\ \\ / /  / _ \\ | |     | | | '_ ` _ \\  | | | __| / __|\n" +
            " |  _ <  |  __/ | | | | | | | (_) |  \\ V /  |  __/ | |___  | | | | | | | | | | | |_  \\__ \\\n" +
            " |_| \\_\\  \\___| |_| |_| |_|  \\___/    \\_/    \\___| |_____| |_| |_| |_| |_| |_|  \\__| |___/\n" +
            "                                                                                          \n" +
            " By HL-Bo"
        );
    }
    if (in_frame) {
        console.debug('Start the installation of user-script/remove-limits (IN-FRAME)');
    } else { console.info('Start the installation of user-script/remove-limits'); }

    // 尝试禁用 debugger
    // 仅在 eval('debugger') 或 setInterval('debugger', sec) 构造前执行才能阻止
    try {
        Function.prototype.$rl_constructor = Function.prototype.constructor;
        Function.prototype.constructor = function () {
            if (arguments && typeof arguments[0] === 'string') {
                if ('debugger' === arguments[0]) {
                    console.debug('Disable an function which may execute debugger');
                    return;
                }
            }
            return Function.prototype.$rl_constructor.apply(this, arguments);
        };
    } catch (error) { console.warn(error); } finally { }
    // 防止清空控制台
    console.$rl_clear = console.clear;
    console.clear = function () { };

    let logError = function (error) {
        let error_message = error.toString();
        if (document && document.body) {
            if (document.body.$rl_errors) {
                if (!document.body.$rl_errors.includes(error_message)) {
                    if (in_frame) { console.debug(error_message); } else { console.warn(error_message); }
                    document.body.$rl_errors.push(error_message);
                }
            } else { document.body.$rl_errors = new Array(); }
        }
    };
    let executeWithInterval = function (func, delay) {
        setTimeout(func, 0); // 异步执行，防止阻塞
        setInterval(func, delay);
    };
    let setEventListener = function (element, event_name, listener) {
        if (!element.$rl_lazy_events) { element.$rl_lazy_events = new Map(); }
        if (!element.$rl_events) { element.$rl_events = new Map(); }
        if (!element.$rl_lazy_events.has(event_name)) {
            element.$rl_lazy_events.set(event_name, listener);
            element.addEventListener(event_name, listener);
        }
        if (!element.$rl_events.has(event_name)) {
            element.removeEventListener(event_name, element.$rl_events.get(event_name));
            element.$rl_events.set(event_name, listener);
            element.addEventListener(event_name, listener);
        }
    };
    let copyEventType = function (old_event) {
        /*
        Event
        +-- ClipboardEvent (cut, copy, paste)
        +-- UIEvent
            +-- FocusEvent (focus, blur, focusin, focusout, ...)
            +-- InputEvent
            +-- CompositionEvent (compositionstart, compositionupdate, compositionend, ...)
            +-- KeyboardEvent (keydown, keypress, keyup)
            +-- TouchEvent
            +-- MouseEvent (click, dblclick, mouseup, mousedown, ...)
                +-- PointerEvent
                +-- WheelEvent
        */
        let new_event_type = Event;
        if (old_event instanceof ClipboardEvent) { new_event_type = ClipboardEvent; }
        if (old_event instanceof UIEvent) { new_event_type = UIEvent; }
        if (old_event instanceof FocusEvent) { new_event_type = FocusEvent; }
        if (old_event instanceof InputEvent) { new_event_type = InputEvent; }
        if (old_event instanceof CompositionEvent) { new_event_type = CompositionEvent; }
        if (old_event instanceof KeyboardEvent) { new_event_type = KeyboardEvent; }
        if (old_event instanceof TouchEvent) { new_event_type = TouchEvent; }
        if (old_event instanceof MouseEvent) { new_event_type = MouseEvent; }
        if (old_event instanceof PointerEvent) { new_event_type = PointerEvent; }
        if (old_event instanceof WheelEvent) { new_event_type = WheelEvent; }
        return new_event_type;
    }
    let copyEventAttr = function (old_event) {
        let new_event_init_dict = {};
        new_event_init_dict.cancelable = false;
        if (old_event.bubbles) { new_event_init_dict.bubbles = old_event.bubbles; } // Event
        if (old_event.composed) { new_event_init_dict.composed = old_event.composed; } // Event
        if (old_event.detail) { new_event_init_dict.detail = old_event.detail; } // UIEvent
        if (old_event.view) { new_event_init_dict.view = old_event.view; } // UIEvent
        if (old_event.sourceCapabilities) { new_event_init_dict.sourceCapabilities = old_event.sourceCapabilities; } // UIEvent
        if (old_event.relatedTarget) { new_event_init_dict.relatedTarget = old_event.relatedTarget; } // FocusEvent
        if (old_event.screenX) { new_event_init_dict.screenX = old_event.screenX; } // MouseEvent
        if (old_event.screenY) { new_event_init_dict.screenY = old_event.screenY; } // MouseEvent
        if (old_event.clientX) { new_event_init_dict.clientX = old_event.clientX; } // MouseEvent
        if (old_event.clientY) { new_event_init_dict.screenX = old_event.clientY; } // MouseEvent
        if (old_event.key) { new_event_init_dict.key = old_event.key; } // KeyboardEvent
        if (old_event.code) { new_event_init_dict.code = old_event.code; } // KeyboardEvent
        if (old_event.location) { new_event_init_dict.location = old_event.location; } // KeyboardEvent
        if (old_event.touches) { new_event_init_dict.touches = old_event.touches; } // TouchEvent
        if (old_event.targetTouches) { new_event_init_dict.targetTouches = old_event.targetTouches; } // TouchEvent
        if (old_event.changedTouches) { new_event_init_dict.changedTouches = old_event.changedTouches; } // TouchEvent
        if (old_event.ctrlKey) { new_event_init_dict.ctrlKey = old_event.ctrlKey; } // MouseEvent & KeyboardEvent & TouchEvent
        if (old_event.shiftKey) { new_event_init_dict.shiftKey = old_event.shiftKey; } // MouseEvent & KeyboardEvent & TouchEvent
        if (old_event.altKey) { new_event_init_dict.altKey = old_event.altKey; } // MouseEvent & KeyboardEvent & TouchEvent
        if (old_event.metaKey) { new_event_init_dict.metaKey = old_event.metaKey; } // MouseEvent & KeyboardEvent & TouchEvent
        if (old_event.repeat) { new_event_init_dict.repeat = old_event.repeat; } // KeyboardEvent
        if (old_event.inputType) { new_event_init_dict.inputType = old_event.inputType; } // InputEvent
        if (old_event.isComposing) { new_event_init_dict.isComposing = old_event.isComposing; } // KeyboardEvent & InputEvent
        if (old_event.charCode) { new_event_init_dict.charCode = old_event.charCode; } // KeyboardEvent
        if (old_event.keyCode) { new_event_init_dict.keyCode = old_event.keyCode; } // KeyboardEvent
        if (old_event.which) { new_event_init_dict.which = old_event.which; } // KeyboardEvent
        if (old_event.button) { new_event_init_dict.button = old_event.button; } // MouseEvent
        if (old_event.buttons) { new_event_init_dict.buttons = old_event.buttons; } // MouseEvent
        if (old_event.relatedTarget) { new_event_init_dict.relatedTarget = old_event.relatedTarget; } // MouseEvent
        if (old_event.region) { new_event_init_dict.region = old_event.region; } // MouseEvent
        if (old_event.deltaX) { new_event_init_dict.deltaX = old_event.deltaX; } // WheelEvent
        if (old_event.deltaY) { new_event_init_dict.deltaY = old_event.deltaY; } // WheelEvent
        if (old_event.deltaZ) { new_event_init_dict.deltaZ = old_event.deltaZ; } // WheelEvent
        if (old_event.deltaMode) { new_event_init_dict.deltaMode = old_event.deltaMode; } // WheelEvent
        if (old_event.pointerId) { new_event_init_dict.pointerId = old_event.pointerId; } // PointerEvent
        if (old_event.width) { new_event_init_dict.width = old_event.width; } // PointerEvent
        if (old_event.height) { new_event_init_dict.height = old_event.height; } // PointerEvent
        if (old_event.pressure) { new_event_init_dict.pressure = old_event.pressure; } // PointerEvent
        if (old_event.tangentialPressure) { new_event_init_dict.tangentialPressure = old_event.tangentialPressure; } // PointerEvent
        if (old_event.tiltX) { new_event_init_dict.tiltX = old_event.tiltX; } // PointerEvent
        if (old_event.tiltY) { new_event_init_dict.tiltY = old_event.tiltY; } // PointerEvent
        if (old_event.twist) { new_event_init_dict.twist = old_event.twist; } // PointerEvent
        if (old_event.pointerType) { new_event_init_dict.pointerType = old_event.pointerType; } // PointerEvent
        if (old_event.isPrimary) { new_event_init_dict.isPrimary = old_event.isPrimary; } // PointerEvent
        if (old_event.dataTransfer) { new_event_init_dict.dataTransfer = old_event.dataTransfer; } // DragEvent
        if (old_event.clipboardData) { new_event_init_dict.clipboardData = old_event.clipboardData; } // ClipboardEvent
        if (old_event.dataType) { new_event_init_dict.dataType = old_event.dataType; } // ClipboardEvent
        if (old_event.data) { new_event_init_dict.data = old_event.data; } // ClipboardEvent & InputEvent & CompositionEvent
        return new_event_init_dict;
    }
    let copyEvent = function (old_event) {
        let event_type = copyEventType(old_event);
        let event_init = copyEventAttr(old_event);
        let new_event = new event_type(old_event.type, event_init);
        return new_event;
    };
    let returnEventAllowed = function (event) {
        if (event.defaultPrevented) {
            // 如果调用了 Event.preventDefault() ，则重新构建一个不可取消的事件。
            event.stopPropagation(); // 停止原事件冒泡，以防重复新建事件。
            let new_event = copyEvent(event);
            if (event.target) { event.target.dispatchEvent(new_event); } else { event.currentTarget.dispatchEvent(new_event); }
            event = new_event;
        }
        event.stopImmediatePropagation(); // 防止其它事件处理器被调用
        try { event.returnValue = true; } catch (error) { logError(error); } finally { }
        if (event.currentTarget === document) { console.debug(`Allow ${event.type}`); }
    };
    let allowEvent = function (element, event_name) {
        setEventListener(element, event_name, function (event) { returnEventAllowed(event); return true; });
    };
    let onKeyEvents = function (event) {
        let keyCode = event.keyCode || event.which || event.charCode;
        let ctrlKey = event.ctrlKey || event.metaKey;
        let shiftKey = event.shiftKey;
        if (ctrlKey && (keyCode == 65 || keyCode == 88 || keyCode == 67 || keyCode == 86 || keyCode == 83 || keyCode == 85)) {
            // Ctrl+A (select-all), Ctrl+X (cut), Ctrl+C (copy), Ctrl+V (paste), Ctrl+S (save), Ctrl+U (view-source)
            returnEventAllowed(event);
        } else if (ctrlKey && shiftKey && (keyCode == 73 || keyCode == 74 || keyCode == 67)) {
            // Ctrl+Shift+I (devtools), Ctrl+Shift+J (console), Ctrl+Shift+C (elements)
            returnEventAllowed(event);
        } else if (keyCode && keyCode == 123) { // F12
            returnEventAllowed(event);
        }
        return true;
    };
    let allowKeyEvents = function (element, event_name) {
        setEventListener(element, event_name, onKeyEvents);
    };
    let preventEventChecks = function (element) {
        let all_events = ['onbeforecopy', 'oncopy', 'onbeforecut', 'oncut', 'onbeforepaste', 'onpaste', 'onselectstart', 'oncontextmenu', 'ondragstart', 'ondragenter', 'ondragover', 'ondragleave', 'ondragend', 'ondrop', 'onkeypress', 'onkeydown', 'onkeyup', 'onvisibilitychange', 'onmousedown', 'onmouseup', 'onmousewheel', 'onwheel', 'onmouseenter', 'onmousemove', 'onmouseover', 'onmouseout', 'onmouseleave', 'ongotpointercapture', 'onlostpointercapture', 'onpointerdown', 'onpointerrawupdate', 'onpointerup', 'onpointerenter', 'onpointermove', 'onpointerover', 'onpointerout', 'onpointerleave', 'onpointercancel', 'onfocus', 'onfocusin', 'onfocusout', 'onblur'];
        for (let i of all_events) {
            Object.defineProperty(element, i,
                {
                    get: () => { (event) => false },
                    set: (value) => { if (value !== null) { console.debug('Prevent to set property'); } }
                }
            );
        }
    };
    let allowElement = function (element) {
        // 取消通过 JavaScript 实现的禁止复制
        try { element.onbeforecopy = null; } catch (error) { logError(error); } finally { allowEvent(element, 'beforecopy'); }
        try { element.oncopy = null; } catch (error) { logError(error); } finally { allowEvent(element, 'copy'); }
        // 取消通过 JavaScript 实现的禁止剪切实现的禁止复制
        try { element.onbeforecut = null; } catch (error) { logError(error); } finally { allowEvent(element, 'beforecut'); }
        try { element.oncut = null; } catch (error) { logError(error); } finally { allowEvent(element, 'cut'); }
        // 取消通过 JavaScript 实现的禁止粘贴
        try { element.onbeforepaste = null; } catch (error) { logError(error); } finally { allowEvent(element, 'beforepaste'); }
        try { element.onpaste = null; } catch (error) { logError(error); } finally { allowEvent(element, 'paste'); }
        // 取消通过 JavaScript 实现的禁止文字选择
        try { element.onselectstart = null; } catch (error) { logError(error); } finally { allowEvent(element, 'selectstart'); }
        // 取消通过 JavaScript 实现的禁止右键菜单
        try { element.oncontextmenu = null; } catch (error) { logError(error); } finally { allowEvent(element, 'contextmenu'); }
        // 取消通过 JavaScript 实现的禁止拖动
        try { element.ondragstart = null; } catch (error) { logError(error); } finally { allowEvent(element, 'dragstart'); }
        try { element.ondragenter = null; } catch (error) { logError(error); } finally { allowEvent(element, 'dragenter'); }
        try { element.ondragover = null; } catch (error) { logError(error); } finally { allowEvent(element, 'dragover'); }
        try { element.ondragleave = null; } catch (error) { logError(error); } finally { allowEvent(element, 'dragleave'); }
        try { element.ondragend = null; } catch (error) { logError(error); } finally { allowEvent(element, 'dragend'); }
        // try { element.ondrop = null; } catch (error) { logError(error); } finally { allowEvent(element, 'drop'); }
        // 取消通过 CSS 实现的禁止选中
        try { element.style.mozUserSelect = 'auto'; } catch (error) { logError(error); } finally { }
        try { element.style.webkitUserSelect = 'auto'; } catch (error) { logError(error); } finally { }
        try { element.style.msUserSelect = 'auto'; } catch (error) { logError(error); } finally { }
        try { element.style.userSelect = 'auto'; } catch (error) { logError(error); } finally { }
        // 取消通过 JavaScript 实现的禁用快捷键
        try { element.onkeypress = null; } catch (error) { logError(error); } finally { allowKeyEvents(element, 'keypress'); }
        try { element.onkeydown = null; } catch (error) { logError(error); } finally { allowKeyEvents(element, 'keydown'); }
        try { element.onkeyup = null; } catch (error) { logError(error); } finally { allowKeyEvents(element, 'keyup'); }
        // 取消通过 JavaScript 实现的页面离开检测
        try { element.onvisibilitychange = null; } catch (error) { logError(error); } finally { allowEvent(element, 'visibilitychange'); }
        // 取消通过 JavaScript 实现的鼠标离开检测
        // try { element.onmousedown = null; } catch (error) { logError(error); } finally { allowEvent(element, 'mousedown'); }
        // try { element.onmouseup = null; } catch (error) { logError(error); } finally { allowEvent(element, 'mouseup'); }
        // try { element.onmousewheel = null; } catch (error) { logError(error); } finally { allowEvent(element, 'mousewheel'); }
        // try { element.onwheel = null; } catch (error) { logError(error); } finally { allowEvent(element, 'wheel'); }
        // try { element.onmouseenter = null; } catch (error) { logError(error); } finally { allowEvent(element, 'mouseenter'); }
        // try { element.onmousemove = null; } catch (error) { logError(error); } finally { allowEvent(element, 'mousemove'); }
        // try { element.onmouseover = null; } catch (error) { logError(error); } finally { allowEvent(element, 'mouseover'); }
        try { element.onmouseout = null; } catch (error) { logError(error); } finally { allowEvent(element, 'mouseout'); }
        try { element.onmouseleave = null; } catch (error) { logError(error); } finally { allowEvent(element, 'mouseleave'); }
        // 取消通过 JavaScript 实现的指针离开检测
        // try { element.ongotpointercapture = null; } catch (error) { logError(error); } finally { allowEvent(element, 'gotpointercapture'); }
        try { element.onlostpointercapture = null; } catch (error) { logError(error); } finally { allowEvent(element, 'lostpointercapture'); }
        // try { element.onpointerdown = null; } catch (error) { logError(error); } finally { allowEvent(element, 'pointerdown'); }
        // try { element.onpointerrawupdate = null; } catch (error) { logError(error); } finally { allowEvent(element, 'pointerrawupdate'); }
        try { element.onpointerup = null; } catch (error) { logError(error); } finally { allowEvent(element, 'pointerup'); }
        // try { element.onpointerenter = null; } catch (error) { logError(error); } finally { allowEvent(element, 'pointerenter'); }
        // try { element.onpointermove = null; } catch (error) { logError(error); } finally { allowEvent(element, 'pointermove'); }
        // try { element.onpointerover = null; } catch (error) { logError(error); } finally { allowEvent(element, 'pointerover'); }
        try { element.onpointerout = null; } catch (error) { logError(error); } finally { allowEvent(element, 'pointerout'); }
        try { element.onpointerleave = null; } catch (error) { logError(error); } finally { allowEvent(element, 'pointerleave'); }
        try { element.onpointercancel = null; } catch (error) { logError(error); } finally { allowEvent(element, 'pointercancel'); }
        // 取消通过 JavaScript 实现的焦点离开检测
        try { element.onfocus = null; } catch (error) { logError(error); } finally { allowEvent(element, 'focus'); }
        try { element.onfocusin = null; } catch (error) { logError(error); } finally { allowEvent(element, 'focusin'); }
        try { element.onfocusout = null; } catch (error) { logError(error); } finally { allowEvent(element, 'focusout'); }
        try { element.onblur = null; } catch (error) { logError(error); } finally { allowEvent(element, 'blur'); }
        // 取消通过 HTML 实现的表单项禁用/禁止修改
        try { if (element instanceof Element && element.hasAttribute('disabled')) { element.removeAttribute('disabled'); } } catch (error) { logError(error); } finally { }
        try { if (element instanceof Element && element.hasAttribute('readonly')) { element.removeAttribute('readonly'); } } catch (error) { logError(error); } finally { }
        // 防止 JavaScript 事件检测
        preventEventChecks(element);
    };
    let allowElementRecursion = function (element) {
        allowElement(element);
        for (let i of element.children) { allowElementRecursion(i); }
    };
    // let removeAllListeners = function (old_element) {
    //     let new_element = old_element.cloneNode(true);
    //     old_element.parentNode.replaceChild(new_element, old_element);
    // };
    let removeHiddenElements = function (element, recursion) {
        if ((element.hidden || element.style.display == 'none' || element.style.visibility == 'hidden' || ((element.style.height <= 0 || element.style.width <= 0) && element.style.overflow == 'hidden') && element.children.length <= 0)) {
            console.info(`Remove <${element.tagName} id='${element.id}' class='${element.className}' />`);
            element.remove();
        } else if (recursion) { for (let i of element.children) { removeHiddenElements(i, recursion); } }
    };
    let getMainContainerElement = function () {
        // 获取正文节点
        let main_container_element = null;
        if (document) {
            if (main_container_element === null) { // 检查 main 标签
                let elements = document.getElementsByTagName('main');
                if (elements.length > 0) { main_container_element = elements[0]; }
            }
            if (main_container_element === null) { // 检查 id='main' 的标签
                main_container_element = document.getElementById('main');
            }
            if (main_container_element === null) { // 检查 id='main-content' 的标签
                main_container_element = document.getElementById('main-content');
            }
            if (main_container_element === null) { // 检查 id='main-contents' 的标签
                main_container_element = document.getElementById('main-content');
            }
            if (main_container_element === null) { // 检查 id='content' 的标签
                main_container_element = document.getElementById('content');
            }
            if (main_container_element === null) { // 检查 id='contents' 的标签
                main_container_element = document.getElementById('contents');
            }
            if (main_container_element === null) { // 检查 class='main' 的标签
                let elements = document.getElementsByClassName('main');
                if (elements.length > 0) { main_container_element = elements[0]; }
            }
            if (main_container_element === null) { // 检查 class='main-content' 的标签
                let elements = document.getElementsByClassName('content');
                if (elements.length > 0) { main_container_element = elements[0]; }
            }
            if (main_container_element === null) { // 检查 class='main-contents' 的标签
                let elements = document.getElementsByClassName('content');
                if (elements.length > 0) { main_container_element = elements[0]; }
            }
            if (main_container_element === null) { // 检查 class='content' 的标签
                let elements = document.getElementsByClassName('content');
                if (elements.length > 0) { main_container_element = elements[0]; }
            }
            if (main_container_element === null) { // 检查 class='contents' 的标签
                let elements = document.getElementsByClassName('contents');
                if (elements.length > 0) { main_container_element = elements[0]; }
            }
        }
        return main_container_element;
    };

    // 对抗延迟运行（即在此脚本执行后运行）的禁用程序和循环执行的禁用程序，
    executeWithInterval( // 每 0.2 秒执行一次。
        (function () {
            if (document) {
                try { allowElement(document); } catch (error) { logError(error); } finally { }
            }
        }), 200
    );
    executeWithInterval( // 每 0.3 秒执行一次。
        (function () {
            if (document && document.body) {
                try { allowElement(document.body); } catch (error) { logError(error); } finally { }
            }
        }), 300
    );
    setTimeout(
        // 延迟 2.0 秒。
        function () {
            executeWithInterval( // 每 5.0 秒执行一次。
                (function () {
                    if (document && document.body) {
                        try { allowElementRecursion(document.body); } catch (error) { logError(error); } finally { }
                    }
                }), 5000
            );
        }, 2000
    );
    executeWithInterval( // 每 2.0 秒执行一次。
        (function () {
            let mce = getMainContainerElement();
            if (document && mce) {
                try { allowElementRecursion(mce); } catch (error) { logError(error); } finally { }
            }
        }), 2000
    );

    // 对抗延迟运行（即在此脚本执行后运行）的混淆程序和循环执行的混淆程序，
    setTimeout(
        // 延迟 1.0 秒，有助于动态加载的内容的显示。
        function () {
            executeWithInterval(
                // 每 3.0 秒执行一次。
                function () {
                    if (document) {
                        // 移除正文中的不可见元素
                        try {
                            let mce = getMainContainerElement();
                            // 移除不可见元素
                            if (mce) { removeHiddenElements(mce, true); }
                        } catch (error) { logError(error); } finally { }
                    }
                }, 3000
            );
        }, 1000
    );
    /*
    // 安装 Service Worker 以过滤请求
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register(
                'https://cdn.jsdelivr.net/gh/HL-Bo/user-script/remove-limits/service-worker.js',
                { scope: window.location.origin + window.location.pathname }
            )
            .then((registration) => {
                if (in_frame) {
                    console.debug(`Register service worker for ${registration.scope} (IN-FRAME)`);
                } else { console.info(`Register service worker for ${registration.scope}`); }
            })
            .catch((error) => { logError(error); });
    }
    */
    if (in_frame) {
        console.debug('Complete the installation of user-script/remove-limits (IN-FRAME)');
    } else { console.info('Complete the installation of user-script/remove-limits'); }
})();