alert("ok")
function _extends() {
    return (_extends = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
      }
      return t
    }).apply(this, arguments)
  }
  
  function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }! function (t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
      if (!t.document) throw new Error("jQuery requires a window with a document");
      return e(t)
    } : e(t)
  }("undefined" != typeof window ? window : this, function (t, e) {
    "use strict";
    var n = [],
      i = Object.getPrototypeOf,
      s = n.slice,
      o = n.flat ? function (t) {
        return n.flat.call(t)
      } : function (t) {
        return n.concat.apply([], t)
      },
      r = n.push,
      a = n.indexOf,
      l = {},
      c = l.toString,
      u = l.hasOwnProperty,
      h = u.toString,
      d = h.call(Object),
      p = {},
      f = function (t) {
        return "function" == typeof t && "number" != typeof t.nodeType && "function" != typeof t.item
      },
      g = function (t) {
        return null != t && t === t.window
      },
      m = t.document,
      v = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
      };
  
    function y(t, e, n) {
      var i, s, o = (n = n || m).createElement("script");
      if (o.text = t, e)
        for (i in v)(s = e[i] || e.getAttribute && e.getAttribute(i)) && o.setAttribute(i, s);
      n.head.appendChild(o).parentNode.removeChild(o)
    }
  
    function _(t) {
      return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? l[c.call(t)] || "object" : typeof t
    }
    var b = "3.6.0",
      w = function (t, e) {
        return new w.fn.init(t, e)
      };
  
    function x(t) {
      var e = !!t && "length" in t && t.length,
        n = _(t);
      return !f(t) && !g(t) && ("array" === n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
    }
    w.fn = w.prototype = {
      jquery: b,
      constructor: w,
      length: 0,
      toArray: function () {
        return s.call(this)
      },
      get: function (t) {
        return null == t ? s.call(this) : t < 0 ? this[t + this.length] : this[t]
      },
      pushStack: function (t) {
        var e = w.merge(this.constructor(), t);
        return e.prevObject = this, e
      },
      each: function (t) {
        return w.each(this, t)
      },
      map: function (t) {
        return this.pushStack(w.map(this, function (e, n) {
          return t.call(e, n, e)
        }))
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments))
      },
      first: function () {
        return this.eq(0)
      },
      last: function () {
        return this.eq(-1)
      },
      even: function () {
        return this.pushStack(w.grep(this, function (t, e) {
          return (e + 1) % 2
        }))
      },
      odd: function () {
        return this.pushStack(w.grep(this, function (t, e) {
          return e % 2
        }))
      },
      eq: function (t) {
        var e = this.length,
          n = +t + (t < 0 ? e : 0);
        return this.pushStack(0 <= n && n < e ? [this[n]] : [])
      },
      end: function () {
        return this.prevObject || this.constructor()
      },
      push: r,
      sort: n.sort,
      splice: n.splice
    }, w.extend = w.fn.extend = function () {
      var t, e, n, i, s, o, r = arguments[0] || {},
        a = 1,
        l = arguments.length,
        c = !1;
      for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || f(r) || (r = {}), a === l && (r = this, a--); a < l; a++)
        if (null != (t = arguments[a]))
          for (e in t) i = t[e], "__proto__" !== e && r !== i && (c && i && (w.isPlainObject(i) || (s = Array.isArray(i))) ? (n = r[e], o = s && !Array.isArray(n) ? [] : s || w.isPlainObject(n) ? n : {}, s = !1, r[e] = w.extend(c, o, i)) : void 0 !== i && (r[e] = i));
      return r
    }, w.extend({
      expando: "jQuery" + (b + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (t) {
        throw new Error(t)
      },
      noop: function () {},
      isPlainObject: function (t) {
        var e, n;
        return !(!t || "[object Object]" !== c.call(t) || (e = i(t)) && ("function" != typeof (n = u.call(e, "constructor") && e.constructor) || h.call(n) !== d))
      },
      isEmptyObject: function (t) {
        var e;
        for (e in t) return !1;
        return !0
      },
      globalEval: function (t, e, n) {
        y(t, {
          nonce: e && e.nonce
        }, n)
      },
      each: function (t, e) {
        var n, i = 0;
        if (x(t))
          for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
        else
          for (i in t)
            if (!1 === e.call(t[i], i, t[i])) break;
        return t
      },
      makeArray: function (t, e) {
        var n = e || [];
        return null != t && (x(Object(t)) ? w.merge(n, "string" == typeof t ? [t] : t) : r.call(n, t)), n
      },
      inArray: function (t, e, n) {
        return null == e ? -1 : a.call(e, t, n)
      },
      merge: function (t, e) {
        for (var n = +e.length, i = 0, s = t.length; i < n; i++) t[s++] = e[i];
        return t.length = s, t
      },
      grep: function (t, e, n) {
        for (var i = [], s = 0, o = t.length, r = !n; s < o; s++) !e(t[s], s) !== r && i.push(t[s]);
        return i
      },
      map: function (t, e, n) {
        var i, s, r = 0,
          a = [];
        if (x(t))
          for (i = t.length; r < i; r++) null != (s = e(t[r], r, n)) && a.push(s);
        else
          for (r in t) null != (s = e(t[r], r, n)) && a.push(s);
        return o(a)
      },
      guid: 1,
      support: p
    }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
      l["[object " + e + "]"] = e.toLowerCase()
    });
    var C = function (t) {
      var e, n, i, s, o, r, a, l, c, u, h, d, p, f, g, m, v, y, _, b = "sizzle" + 1 * new Date,
        w = t.document,
        x = 0,
        C = 0,
        E = lt(),
        T = lt(),
        k = lt(),
        S = lt(),
        A = function (t, e) {
          return t === e && (h = !0), 0
        },
        O = {}.hasOwnProperty,
        L = [],
        N = L.pop,
        D = L.push,
        P = L.push,
        $ = L.slice,
        I = function (t, e) {
          for (var n = 0, i = t.length; n < i; n++)
            if (t[n] === e) return n;
          return -1
        },
        M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        j = "[\\x20\\t\\r\\n\\f]",
        H = "(?:\\\\[\\da-fA-F]{1,6}" + j + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        z = "\\[" + j + "*(" + H + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + j + "*\\]",
        q = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + z + ")*)|.*)\\)|)",
        R = new RegExp(j + "+", "g"),
        B = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g"),
        W = new RegExp("^" + j + "*," + j + "*"),
        F = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
        U = new RegExp(j + "|>"),
        V = new RegExp(q),
        X = new RegExp("^" + H + "$"),
        Q = {
          ID: new RegExp("^#(" + H + ")"),
          CLASS: new RegExp("^\\.(" + H + ")"),
          TAG: new RegExp("^(" + H + "|[*])"),
          ATTR: new RegExp("^" + z),
          PSEUDO: new RegExp("^" + q),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + M + ")$", "i"),
          needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)", "i")
        },
        K = /HTML$/i,
        Y = /^(?:input|select|textarea|button)$/i,
        Z = /^h\d$/i,
        G = /^[^{]+\{\s*\[native \w/,
        J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        tt = /[+~]/,
        et = new RegExp("\\\\[\\da-fA-F]{1,6}" + j + "?|\\\\([^\\r\\n\\f])", "g"),
        nt = function (t, e) {
          var n = "0x" + t.slice(1) - 65536;
          return e || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
        },
        it = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        st = function (t, e) {
          return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        },
        ot = function () {
          d()
        },
        rt = bt(function (t) {
          return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
        }, {
          dir: "parentNode",
          next: "legend"
        });
      try {
        P.apply(L = $.call(w.childNodes), w.childNodes), L[w.childNodes.length].nodeType
      } catch (e) {
        P = {
          apply: L.length ? function (t, e) {
            D.apply(t, $.call(e))
          } : function (t, e) {
            for (var n = t.length, i = 0; t[n++] = e[i++];);
            t.length = n - 1
          }
        }
      }
  
      function at(t, e, i, s) {
        var o, a, c, u, h, f, v, y = e && e.ownerDocument,
          w = e ? e.nodeType : 9;
        if (i = i || [], "string" != typeof t || !t || 1 !== w && 9 !== w && 11 !== w) return i;
        if (!s && (d(e), e = e || p, g)) {
          if (11 !== w && (h = J.exec(t)))
            if (o = h[1]) {
              if (9 === w) {
                if (!(c = e.getElementById(o))) return i;
                if (c.id === o) return i.push(c), i
              } else if (y && (c = y.getElementById(o)) && _(e, c) && c.id === o) return i.push(c), i
            } else {
              if (h[2]) return P.apply(i, e.getElementsByTagName(t)), i;
              if ((o = h[3]) && n.getElementsByClassName && e.getElementsByClassName) return P.apply(i, e.getElementsByClassName(o)), i
            } if (n.qsa && !S[t + " "] && (!m || !m.test(t)) && (1 !== w || "object" !== e.nodeName.toLowerCase())) {
            if (v = t, y = e, 1 === w && (U.test(t) || F.test(t))) {
              for ((y = tt.test(t) && vt(e.parentNode) || e) === e && n.scope || ((u = e.getAttribute("id")) ? u = u.replace(it, st) : e.setAttribute("id", u = b)), a = (f = r(t)).length; a--;) f[a] = (u ? "#" + u : ":scope") + " " + _t(f[a]);
              v = f.join(",")
            }
            try {
              return P.apply(i, y.querySelectorAll(v)), i
            } catch (e) {
              S(t, !0)
            } finally {
              u === b && e.removeAttribute("id")
            }
          }
        }
        return l(t.replace(B, "$1"), e, i, s)
      }
  
      function lt() {
        var t = [];
        return function e(n, s) {
          return t.push(n + " ") > i.cacheLength && delete e[t.shift()], e[n + " "] = s
        }
      }
  
      function ct(t) {
        return t[b] = !0, t
      }
  
      function ut(t) {
        var e = p.createElement("fieldset");
        try {
          return !!t(e)
        } catch (t) {
          return !1
        } finally {
          e.parentNode && e.parentNode.removeChild(e), e = null
        }
      }
  
      function ht(t, e) {
        for (var n = t.split("|"), s = n.length; s--;) i.attrHandle[n[s]] = e
      }
  
      function dt(t, e) {
        var n = e && t,
          i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
        if (i) return i;
        if (n)
          for (; n = n.nextSibling;)
            if (n === e) return -1;
        return t ? 1 : -1
      }
  
      function pt(t) {
        return function (e) {
          return "input" === e.nodeName.toLowerCase() && e.type === t
        }
      }
  
      function ft(t) {
        return function (e) {
          var n = e.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && e.type === t
        }
      }
  
      function gt(t) {
        return function (e) {
          return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && rt(e) === t : e.disabled === t : "label" in e && e.disabled === t
        }
      }
  
      function mt(t) {
        return ct(function (e) {
          return e = +e, ct(function (n, i) {
            for (var s, o = t([], n.length, e), r = o.length; r--;) n[s = o[r]] && (n[s] = !(i[s] = n[s]))
          })
        })
      }
  
      function vt(t) {
        return t && void 0 !== t.getElementsByTagName && t
      }
      for (e in n = at.support = {}, o = at.isXML = function (t) {
          var e = t && t.namespaceURI,
            n = t && (t.ownerDocument || t).documentElement;
          return !K.test(e || n && n.nodeName || "HTML")
        }, d = at.setDocument = function (t) {
          var e, s, r = t ? t.ownerDocument || t : w;
          return r != p && 9 === r.nodeType && r.documentElement && (f = (p = r).documentElement, g = !o(p), w != p && (s = p.defaultView) && s.top !== s && (s.addEventListener ? s.addEventListener("unload", ot, !1) : s.attachEvent && s.attachEvent("onunload", ot)), n.scope = ut(function (t) {
            return f.appendChild(t).appendChild(p.createElement("div")), void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length
          }), n.attributes = ut(function (t) {
            return t.className = "i", !t.getAttribute("className")
          }), n.getElementsByTagName = ut(function (t) {
            return t.appendChild(p.createComment("")), !t.getElementsByTagName("*").length
          }), n.getElementsByClassName = G.test(p.getElementsByClassName), n.getById = ut(function (t) {
            return f.appendChild(t).id = b, !p.getElementsByName || !p.getElementsByName(b).length
          }), n.getById ? (i.filter.ID = function (t) {
            var e = t.replace(et, nt);
            return function (t) {
              return t.getAttribute("id") === e
            }
          }, i.find.ID = function (t, e) {
            if (void 0 !== e.getElementById && g) {
              var n = e.getElementById(t);
              return n ? [n] : []
            }
          }) : (i.filter.ID = function (t) {
            var e = t.replace(et, nt);
            return function (t) {
              var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
              return n && n.value === e
            }
          }, i.find.ID = function (t, e) {
            if (void 0 !== e.getElementById && g) {
              var n, i, s, o = e.getElementById(t);
              if (o) {
                if ((n = o.getAttributeNode("id")) && n.value === t) return [o];
                for (s = e.getElementsByName(t), i = 0; o = s[i++];)
                  if ((n = o.getAttributeNode("id")) && n.value === t) return [o]
              }
              return []
            }
          }), i.find.TAG = n.getElementsByTagName ? function (t, e) {
            return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
          } : function (t, e) {
            var n, i = [],
              s = 0,
              o = e.getElementsByTagName(t);
            if ("*" === t) {
              for (; n = o[s++];) 1 === n.nodeType && i.push(n);
              return i
            }
            return o
          }, i.find.CLASS = n.getElementsByClassName && function (t, e) {
            if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t)
          }, v = [], m = [], (n.qsa = G.test(p.querySelectorAll)) && (ut(function (t) {
            var e;
            f.appendChild(t).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + j + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || m.push("\\[" + j + "*(?:value|" + M + ")"), t.querySelectorAll("[id~=" + b + "-]").length || m.push("~="), (e = p.createElement("input")).setAttribute("name", ""), t.appendChild(e), t.querySelectorAll("[name='']").length || m.push("\\[" + j + "*name" + j + "*=" + j + "*(?:''|\"\")"), t.querySelectorAll(":checked").length || m.push(":checked"), t.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]"), t.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]")
          }), ut(function (t) {
            t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
            var e = p.createElement("input");
            e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && m.push("name" + j + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), f.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), m.push(",.*:")
          })), (n.matchesSelector = G.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && ut(function (t) {
            n.disconnectedMatch = y.call(t, "*"), y.call(t, "[s!='']:x"), v.push("!=", q)
          }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), e = G.test(f.compareDocumentPosition), _ = e || G.test(f.contains) ? function (t, e) {
            var n = 9 === t.nodeType ? t.documentElement : t,
              i = e && e.parentNode;
            return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
          } : function (t, e) {
            if (e)
              for (; e = e.parentNode;)
                if (e === t) return !0;
            return !1
          }, A = e ? function (t, e) {
            if (t === e) return h = !0, 0;
            var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
            return i || (1 & (i = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t == p || t.ownerDocument == w && _(w, t) ? -1 : e == p || e.ownerDocument == w && _(w, e) ? 1 : u ? I(u, t) - I(u, e) : 0 : 4 & i ? -1 : 1)
          } : function (t, e) {
            if (t === e) return h = !0, 0;
            var n, i = 0,
              s = t.parentNode,
              o = e.parentNode,
              r = [t],
              a = [e];
            if (!s || !o) return t == p ? -1 : e == p ? 1 : s ? -1 : o ? 1 : u ? I(u, t) - I(u, e) : 0;
            if (s === o) return dt(t, e);
            for (n = t; n = n.parentNode;) r.unshift(n);
            for (n = e; n = n.parentNode;) a.unshift(n);
            for (; r[i] === a[i];) i++;
            return i ? dt(r[i], a[i]) : r[i] == w ? -1 : a[i] == w ? 1 : 0
          }), p
        }, at.matches = function (t, e) {
          return at(t, null, null, e)
        }, at.matchesSelector = function (t, e) {
          if (d(t), n.matchesSelector && g && !S[e + " "] && (!v || !v.test(e)) && (!m || !m.test(e))) try {
            var i = y.call(t, e);
            if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
          } catch (t) {
            S(e, !0)
          }
          return 0 < at(e, p, null, [t]).length
        }, at.contains = function (t, e) {
          return (t.ownerDocument || t) != p && d(t), _(t, e)
        }, at.attr = function (t, e) {
          (t.ownerDocument || t) != p && d(t);
          var s = i.attrHandle[e.toLowerCase()],
            o = s && O.call(i.attrHandle, e.toLowerCase()) ? s(t, e, !g) : void 0;
          return void 0 !== o ? o : n.attributes || !g ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null
        }, at.escape = function (t) {
          return (t + "").replace(it, st)
        }, at.error = function (t) {
          throw new Error("Syntax error, unrecognized expression: " + t)
        }, at.uniqueSort = function (t) {
          var e, i = [],
            s = 0,
            o = 0;
          if (h = !n.detectDuplicates, u = !n.sortStable && t.slice(0), t.sort(A), h) {
            for (; e = t[o++];) e === t[o] && (s = i.push(o));
            for (; s--;) t.splice(i[s], 1)
          }
          return u = null, t
        }, s = at.getText = function (t) {
          var e, n = "",
            i = 0,
            o = t.nodeType;
          if (o) {
            if (1 === o || 9 === o || 11 === o) {
              if ("string" == typeof t.textContent) return t.textContent;
              for (t = t.firstChild; t; t = t.nextSibling) n += s(t)
            } else if (3 === o || 4 === o) return t.nodeValue
          } else
            for (; e = t[i++];) n += s(e);
          return n
        }, (i = at.selectors = {
          cacheLength: 50,
          createPseudo: ct,
          match: Q,
          attrHandle: {},
          find: {},
          relative: {
            ">": {
              dir: "parentNode",
              first: !0
            },
            " ": {
              dir: "parentNode"
            },
            "+": {
              dir: "previousSibling",
              first: !0
            },
            "~": {
              dir: "previousSibling"
            }
          },
          preFilter: {
            ATTR: function (t) {
              return t[1] = t[1].replace(et, nt), t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
            },
            CHILD: function (t) {
              return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || at.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && at.error(t[0]), t
            },
            PSEUDO: function (t) {
              var e, n = !t[6] && t[2];
              return Q.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && V.test(n) && (e = r(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
            }
          },
          filter: {
            TAG: function (t) {
              var e = t.replace(et, nt).toLowerCase();
              return "*" === t ? function () {
                return !0
              } : function (t) {
                return t.nodeName && t.nodeName.toLowerCase() === e
              }
            },
            CLASS: function (t) {
              var e = E[t + " "];
              return e || (e = new RegExp("(^|" + j + ")" + t + "(" + j + "|$)")) && E(t, function (t) {
                return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
              })
            },
            ATTR: function (t, e, n) {
              return function (i) {
                var s = at.attr(i, t);
                return null == s ? "!=" === e : !e || (s += "", "=" === e ? s === n : "!=" === e ? s !== n : "^=" === e ? n && 0 === s.indexOf(n) : "*=" === e ? n && -1 < s.indexOf(n) : "$=" === e ? n && s.slice(-n.length) === n : "~=" === e ? -1 < (" " + s.replace(R, " ") + " ").indexOf(n) : "|=" === e && (s === n || s.slice(0, n.length + 1) === n + "-"))
              }
            },
            CHILD: function (t, e, n, i, s) {
              var o = "nth" !== t.slice(0, 3),
                r = "last" !== t.slice(-4),
                a = "of-type" === e;
              return 1 === i && 0 === s ? function (t) {
                return !!t.parentNode
              } : function (e, n, l) {
                var c, u, h, d, p, f, g = o !== r ? "nextSibling" : "previousSibling",
                  m = e.parentNode,
                  v = a && e.nodeName.toLowerCase(),
                  y = !l && !a,
                  _ = !1;
                if (m) {
                  if (o) {
                    for (; g;) {
                      for (d = e; d = d[g];)
                        if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                      f = g = "only" === t && !f && "nextSibling"
                    }
                    return !0
                  }
                  if (f = [r ? m.firstChild : m.lastChild], r && y) {
                    for (_ = (p = (c = (u = (h = (d = m)[b] || (d[b] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] || [])[0] === x && c[1]) && c[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (_ = p = 0) || f.pop();)
                      if (1 === d.nodeType && ++_ && d === e) {
                        u[t] = [x, p, _];
                        break
                      }
                  } else if (y && (_ = p = (c = (u = (h = (d = e)[b] || (d[b] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] || [])[0] === x && c[1]), !1 === _)
                    for (;
                      (d = ++p && d && d[g] || (_ = p = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++_ || (y && ((u = (h = d[b] || (d[b] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] = [x, _]), d !== e)););
                  return (_ -= s) === i || _ % i == 0 && 0 <= _ / i
                }
              }
            },
            PSEUDO: function (t, e) {
              var n, s = i.pseudos[t] || i.setFilters[t.toLowerCase()] || at.error("unsupported pseudo: " + t);
              return s[b] ? s(e) : 1 < s.length ? (n = [t, t, "", e], i.setFilters.hasOwnProperty(t.toLowerCase()) ? ct(function (t, n) {
                for (var i, o = s(t, e), r = o.length; r--;) t[i = I(t, o[r])] = !(n[i] = o[r])
              }) : function (t) {
                return s(t, 0, n)
              }) : s
            }
          },
          pseudos: {
            not: ct(function (t) {
              var e = [],
                n = [],
                i = a(t.replace(B, "$1"));
              return i[b] ? ct(function (t, e, n, s) {
                for (var o, r = i(t, null, s, []), a = t.length; a--;)(o = r[a]) && (t[a] = !(e[a] = o))
              }) : function (t, s, o) {
                return e[0] = t, i(e, null, o, n), e[0] = null, !n.pop()
              }
            }),
            has: ct(function (t) {
              return function (e) {
                return 0 < at(t, e).length
              }
            }),
            contains: ct(function (t) {
              return t = t.replace(et, nt),
                function (e) {
                  return -1 < (e.textContent || s(e)).indexOf(t)
                }
            }),
            lang: ct(function (t) {
              return X.test(t || "") || at.error("unsupported lang: " + t), t = t.replace(et, nt).toLowerCase(),
                function (e) {
                  var n;
                  do {
                    if (n = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                  } while ((e = e.parentNode) && 1 === e.nodeType);
                  return !1
                }
            }),
            target: function (e) {
              var n = t.location && t.location.hash;
              return n && n.slice(1) === e.id
            },
            root: function (t) {
              return t === f
            },
            focus: function (t) {
              return t === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
            },
            enabled: gt(!1),
            disabled: gt(!0),
            checked: function (t) {
              var e = t.nodeName.toLowerCase();
              return "input" === e && !!t.checked || "option" === e && !!t.selected
            },
            selected: function (t) {
              return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
            },
            empty: function (t) {
              for (t = t.firstChild; t; t = t.nextSibling)
                if (t.nodeType < 6) return !1;
              return !0
            },
            parent: function (t) {
              return !i.pseudos.empty(t)
            },
            header: function (t) {
              return Z.test(t.nodeName)
            },
            input: function (t) {
              return Y.test(t.nodeName)
            },
            button: function (t) {
              var e = t.nodeName.toLowerCase();
              return "input" === e && "button" === t.type || "button" === e
            },
            text: function (t) {
              var e;
              return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
            },
            first: mt(function () {
              return [0]
            }),
            last: mt(function (t, e) {
              return [e - 1]
            }),
            eq: mt(function (t, e, n) {
              return [n < 0 ? n + e : n]
            }),
            even: mt(function (t, e) {
              for (var n = 0; n < e; n += 2) t.push(n);
              return t
            }),
            odd: mt(function (t, e) {
              for (var n = 1; n < e; n += 2) t.push(n);
              return t
            }),
            lt: mt(function (t, e, n) {
              for (var i = n < 0 ? n + e : e < n ? e : n; 0 <= --i;) t.push(i);
              return t
            }),
            gt: mt(function (t, e, n) {
              for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
              return t
            })
          }
        }).pseudos.nth = i.pseudos.eq, {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) i.pseudos[e] = pt(e);
      for (e in {
          submit: !0,
          reset: !0
        }) i.pseudos[e] = ft(e);
  
      function yt() {}
  
      function _t(t) {
        for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
        return i
      }
  
      function bt(t, e, n) {
        var i = e.dir,
          s = e.next,
          o = s || i,
          r = n && "parentNode" === o,
          a = C++;
        return e.first ? function (e, n, s) {
          for (; e = e[i];)
            if (1 === e.nodeType || r) return t(e, n, s);
          return !1
        } : function (e, n, l) {
          var c, u, h, d = [x, a];
          if (l) {
            for (; e = e[i];)
              if ((1 === e.nodeType || r) && t(e, n, l)) return !0
          } else
            for (; e = e[i];)
              if (1 === e.nodeType || r)
                if (u = (h = e[b] || (e[b] = {}))[e.uniqueID] || (h[e.uniqueID] = {}), s && s === e.nodeName.toLowerCase()) e = e[i] || e;
                else {
                  if ((c = u[o]) && c[0] === x && c[1] === a) return d[2] = c[2];
                  if ((u[o] = d)[2] = t(e, n, l)) return !0
                } return !1
        }
      }
  
      function wt(t) {
        return 1 < t.length ? function (e, n, i) {
          for (var s = t.length; s--;)
            if (!t[s](e, n, i)) return !1;
          return !0
        } : t[0]
      }
  
      function xt(t, e, n, i, s) {
        for (var o, r = [], a = 0, l = t.length, c = null != e; a < l; a++)(o = t[a]) && (n && !n(o, i, s) || (r.push(o), c && e.push(a)));
        return r
      }
  
      function Ct(t, e, n, i, s, o) {
        return i && !i[b] && (i = Ct(i)), s && !s[b] && (s = Ct(s, o)), ct(function (o, r, a, l) {
          var c, u, h, d = [],
            p = [],
            f = r.length,
            g = o || function (t, e, n) {
              for (var i = 0, s = e.length; i < s; i++) at(t, e[i], n);
              return n
            }(e || "*", a.nodeType ? [a] : a, []),
            m = !t || !o && e ? g : xt(g, d, t, a, l),
            v = n ? s || (o ? t : f || i) ? [] : r : m;
          if (n && n(m, v, a, l), i)
            for (c = xt(v, p), i(c, [], a, l), u = c.length; u--;)(h = c[u]) && (v[p[u]] = !(m[p[u]] = h));
          if (o) {
            if (s || t) {
              if (s) {
                for (c = [], u = v.length; u--;)(h = v[u]) && c.push(m[u] = h);
                s(null, v = [], c, l)
              }
              for (u = v.length; u--;)(h = v[u]) && -1 < (c = s ? I(o, h) : d[u]) && (o[c] = !(r[c] = h))
            }
          } else v = xt(v === r ? v.splice(f, v.length) : v), s ? s(null, r, v, l) : P.apply(r, v)
        })
      }
  
      function Et(t) {
        for (var e, n, s, o = t.length, r = i.relative[t[0].type], a = r || i.relative[" "], l = r ? 1 : 0, u = bt(function (t) {
            return t === e
          }, a, !0), h = bt(function (t) {
            return -1 < I(e, t)
          }, a, !0), d = [function (t, n, i) {
            var s = !r && (i || n !== c) || ((e = n).nodeType ? u(t, n, i) : h(t, n, i));
            return e = null, s
          }]; l < o; l++)
          if (n = i.relative[t[l].type]) d = [bt(wt(d), n)];
          else {
            if ((n = i.filter[t[l].type].apply(null, t[l].matches))[b]) {
              for (s = ++l; s < o && !i.relative[t[s].type]; s++);
              return Ct(1 < l && wt(d), 1 < l && _t(t.slice(0, l - 1).concat({
                value: " " === t[l - 2].type ? "*" : ""
              })).replace(B, "$1"), n, l < s && Et(t.slice(l, s)), s < o && Et(t = t.slice(s)), s < o && _t(t))
            }
            d.push(n)
          } return wt(d)
      }
      return yt.prototype = i.filters = i.pseudos, i.setFilters = new yt, r = at.tokenize = function (t, e) {
        var n, s, o, r, a, l, c, u = T[t + " "];
        if (u) return e ? 0 : u.slice(0);
        for (a = t, l = [], c = i.preFilter; a;) {
          for (r in n && !(s = W.exec(a)) || (s && (a = a.slice(s[0].length) || a), l.push(o = [])), n = !1, (s = F.exec(a)) && (n = s.shift(), o.push({
              value: n,
              type: s[0].replace(B, " ")
            }), a = a.slice(n.length)), i.filter) !(s = Q[r].exec(a)) || c[r] && !(s = c[r](s)) || (n = s.shift(), o.push({
            value: n,
            type: r,
            matches: s
          }), a = a.slice(n.length));
          if (!n) break
        }
        return e ? a.length : a ? at.error(t) : T(t, l).slice(0)
      }, a = at.compile = function (t, e) {
        var n, s, o, a, l, u, h = [],
          f = [],
          m = k[t + " "];
        if (!m) {
          for (e || (e = r(t)), n = e.length; n--;)(m = Et(e[n]))[b] ? h.push(m) : f.push(m);
          (m = k(t, (s = f, a = 0 < (o = h).length, l = 0 < s.length, u = function (t, e, n, r, u) {
            var h, f, m, v = 0,
              y = "0",
              _ = t && [],
              b = [],
              w = c,
              C = t || l && i.find.TAG("*", u),
              E = x += null == w ? 1 : Math.random() || .1,
              T = C.length;
            for (u && (c = e == p || e || u); y !== T && null != (h = C[y]); y++) {
              if (l && h) {
                for (f = 0, e || h.ownerDocument == p || (d(h), n = !g); m = s[f++];)
                  if (m(h, e || p, n)) {
                    r.push(h);
                    break
                  } u && (x = E)
              }
              a && ((h = !m && h) && v--, t && _.push(h))
            }
            if (v += y, a && y !== v) {
              for (f = 0; m = o[f++];) m(_, b, e, n);
              if (t) {
                if (0 < v)
                  for (; y--;) _[y] || b[y] || (b[y] = N.call(r));
                b = xt(b)
              }
              P.apply(r, b), u && !t && 0 < b.length && 1 < v + o.length && at.uniqueSort(r)
            }
            return u && (x = E, c = w), _
          }, a ? ct(u) : u))).selector = t
        }
        return m
      }, l = at.select = function (t, e, n, s) {
        var o, l, c, u, h, d = "function" == typeof t && t,
          p = !s && r(t = d.selector || t);
        if (n = n || [], 1 === p.length) {
          if (2 < (l = p[0] = p[0].slice(0)).length && "ID" === (c = l[0]).type && 9 === e.nodeType && g && i.relative[l[1].type]) {
            if (!(e = (i.find.ID(c.matches[0].replace(et, nt), e) || [])[0])) return n;
            d && (e = e.parentNode), t = t.slice(l.shift().value.length)
          }
          for (o = Q.needsContext.test(t) ? 0 : l.length; o-- && (c = l[o], !i.relative[u = c.type]);)
            if ((h = i.find[u]) && (s = h(c.matches[0].replace(et, nt), tt.test(l[0].type) && vt(e.parentNode) || e))) {
              if (l.splice(o, 1), !(t = s.length && _t(l))) return P.apply(n, s), n;
              break
            }
        }
        return (d || a(t, p))(s, e, !g, n, !e || tt.test(t) && vt(e.parentNode) || e), n
      }, n.sortStable = b.split("").sort(A).join("") === b, n.detectDuplicates = !!h, d(), n.sortDetached = ut(function (t) {
        return 1 & t.compareDocumentPosition(p.createElement("fieldset"))
      }), ut(function (t) {
        return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
      }) || ht("type|href|height|width", function (t, e, n) {
        if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
      }), n.attributes && ut(function (t) {
        return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
      }) || ht("value", function (t, e, n) {
        if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
      }), ut(function (t) {
        return null == t.getAttribute("disabled")
      }) || ht(M, function (t, e, n) {
        var i;
        if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
      }), at
    }(t);
    w.find = C, w.expr = C.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = C.uniqueSort, w.text = C.getText, w.isXMLDoc = C.isXML, w.contains = C.contains, w.escapeSelector = C.escape;
    var E = function (t, e, n) {
        for (var i = [], s = void 0 !== n;
          (t = t[e]) && 9 !== t.nodeType;)
          if (1 === t.nodeType) {
            if (s && w(t).is(n)) break;
            i.push(t)
          } return i
      },
      T = function (t, e) {
        for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
        return n
      },
      k = w.expr.match.needsContext;
  
    function S(t, e) {
      return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  
    function O(t, e, n) {
      return f(e) ? w.grep(t, function (t, i) {
        return !!e.call(t, i, t) !== n
      }) : e.nodeType ? w.grep(t, function (t) {
        return t === e !== n
      }) : "string" != typeof e ? w.grep(t, function (t) {
        return -1 < a.call(e, t) !== n
      }) : w.filter(e, t, n)
    }
    w.filter = function (t, e, n) {
      var i = e[0];
      return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? w.find.matchesSelector(i, t) ? [i] : [] : w.find.matches(t, w.grep(e, function (t) {
        return 1 === t.nodeType
      }))
    }, w.fn.extend({
      find: function (t) {
        var e, n, i = this.length,
          s = this;
        if ("string" != typeof t) return this.pushStack(w(t).filter(function () {
          for (e = 0; e < i; e++)
            if (w.contains(s[e], this)) return !0
        }));
        for (n = this.pushStack([]), e = 0; e < i; e++) w.find(t, s[e], n);
        return 1 < i ? w.uniqueSort(n) : n
      },
      filter: function (t) {
        return this.pushStack(O(this, t || [], !1))
      },
      not: function (t) {
        return this.pushStack(O(this, t || [], !0))
      },
      is: function (t) {
        return !!O(this, "string" == typeof t && k.test(t) ? w(t) : t || [], !1).length
      }
    });
    var L, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function (t, e, n) {
      var i, s;
      if (!t) return this;
      if (n = n || L, "string" == typeof t) {
        if (!(i = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : N.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
        if (i[1]) {
          if (e = e instanceof w ? e[0] : e, w.merge(this, w.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : m, !0)), A.test(i[1]) && w.isPlainObject(e))
            for (i in e) f(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
          return this
        }
        return (s = m.getElementById(i[2])) && (this[0] = s, this.length = 1), this
      }
      return t.nodeType ? (this[0] = t, this.length = 1, this) : f(t) ? void 0 !== n.ready ? n.ready(t) : t(w) : w.makeArray(t, this)
    }).prototype = w.fn, L = w(m);
    var D = /^(?:parents|prev(?:Until|All))/,
      P = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };
  
    function $(t, e) {
      for (;
        (t = t[e]) && 1 !== t.nodeType;);
      return t
    }
    w.fn.extend({
      has: function (t) {
        var e = w(t, this),
          n = e.length;
        return this.filter(function () {
          for (var t = 0; t < n; t++)
            if (w.contains(this, e[t])) return !0
        })
      },
      closest: function (t, e) {
        var n, i = 0,
          s = this.length,
          o = [],
          r = "string" != typeof t && w(t);
        if (!k.test(t))
          for (; i < s; i++)
            for (n = this[i]; n && n !== e; n = n.parentNode)
              if (n.nodeType < 11 && (r ? -1 < r.index(n) : 1 === n.nodeType && w.find.matchesSelector(n, t))) {
                o.push(n);
                break
              } return this.pushStack(1 < o.length ? w.uniqueSort(o) : o)
      },
      index: function (t) {
        return t ? "string" == typeof t ? a.call(w(t), this[0]) : a.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function (t, e) {
        return this.pushStack(w.uniqueSort(w.merge(this.get(), w(t, e))))
      },
      addBack: function (t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
      }
    }), w.each({
      parent: function (t) {
        var e = t.parentNode;
        return e && 11 !== e.nodeType ? e : null
      },
      parents: function (t) {
        return E(t, "parentNode")
      },
      parentsUntil: function (t, e, n) {
        return E(t, "parentNode", n)
      },
      next: function (t) {
        return $(t, "nextSibling")
      },
      prev: function (t) {
        return $(t, "previousSibling")
      },
      nextAll: function (t) {
        return E(t, "nextSibling")
      },
      prevAll: function (t) {
        return E(t, "previousSibling")
      },
      nextUntil: function (t, e, n) {
        return E(t, "nextSibling", n)
      },
      prevUntil: function (t, e, n) {
        return E(t, "previousSibling", n)
      },
      siblings: function (t) {
        return T((t.parentNode || {}).firstChild, t)
      },
      children: function (t) {
        return T(t.firstChild)
      },
      contents: function (t) {
        return null != t.contentDocument && i(t.contentDocument) ? t.contentDocument : (S(t, "template") && (t = t.content || t), w.merge([], t.childNodes))
      }
    }, function (t, e) {
      w.fn[t] = function (n, i) {
        var s = w.map(this, e, n);
        return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (s = w.filter(i, s)), 1 < this.length && (P[t] || w.uniqueSort(s), D.test(t) && s.reverse()), this.pushStack(s)
      }
    });
    var I = /[^\x20\t\r\n\f]+/g;
  
    function M(t) {
      return t
    }
  
    function j(t) {
      throw t
    }
  
    function H(t, e, n, i) {
      var s;
      try {
        t && f(s = t.promise) ? s.call(t).done(e).fail(n) : t && f(s = t.then) ? s.call(t, e, n) : e.apply(void 0, [t].slice(i))
      } catch (t) {
        n.apply(void 0, [t])
      }
    }
    w.Callbacks = function (t) {
      var e, n;
      t = "string" == typeof t ? (e = t, n = {}, w.each(e.match(I) || [], function (t, e) {
        n[e] = !0
      }), n) : w.extend({}, t);
      var i, s, o, r, a = [],
        l = [],
        c = -1,
        u = function () {
          for (r = r || t.once, o = i = !0; l.length; c = -1)
            for (s = l.shift(); ++c < a.length;) !1 === a[c].apply(s[0], s[1]) && t.stopOnFalse && (c = a.length, s = !1);
          t.memory || (s = !1), i = !1, r && (a = s ? [] : "")
        },
        h = {
          add: function () {
            return a && (s && !i && (c = a.length - 1, l.push(s)), function e(n) {
              w.each(n, function (n, i) {
                f(i) ? t.unique && h.has(i) || a.push(i) : i && i.length && "string" !== _(i) && e(i)
              })
            }(arguments), s && !i && u()), this
          },
          remove: function () {
            return w.each(arguments, function (t, e) {
              for (var n; - 1 < (n = w.inArray(e, a, n));) a.splice(n, 1), n <= c && c--
            }), this
          },
          has: function (t) {
            return t ? -1 < w.inArray(t, a) : 0 < a.length
          },
          empty: function () {
            return a && (a = []), this
          },
          disable: function () {
            return r = l = [], a = s = "", this
          },
          disabled: function () {
            return !a
          },
          lock: function () {
            return r = l = [], s || i || (a = s = ""), this
          },
          locked: function () {
            return !!r
          },
          fireWith: function (t, e) {
            return r || (e = [t, (e = e || []).slice ? e.slice() : e], l.push(e), i || u()), this
          },
          fire: function () {
            return h.fireWith(this, arguments), this
          },
          fired: function () {
            return !!o
          }
        };
      return h
    }, w.extend({
      Deferred: function (e) {
        var n = [
            ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
            ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
            ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
          ],
          i = "pending",
          s = {
            state: function () {
              return i
            },
            always: function () {
              return o.done(arguments).fail(arguments), this
            },
            catch: function (t) {
              return s.then(null, t)
            },
            pipe: function () {
              var t = arguments;
              return w.Deferred(function (e) {
                w.each(n, function (n, i) {
                  var s = f(t[i[4]]) && t[i[4]];
                  o[i[1]](function () {
                    var t = s && s.apply(this, arguments);
                    t && f(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, s ? [t] : arguments)
                  })
                }), t = null
              }).promise()
            },
            then: function (e, i, s) {
              var o = 0;
  
              function r(e, n, i, s) {
                return function () {
                  var a = this,
                    l = arguments,
                    c = function () {
                      var t, c;
                      if (!(e < o)) {
                        if ((t = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                        c = t && ("object" == typeof t || "function" == typeof t) && t.then, f(c) ? s ? c.call(t, r(o, n, M, s), r(o, n, j, s)) : (o++, c.call(t, r(o, n, M, s), r(o, n, j, s), r(o, n, M, n.notifyWith))) : (i !== M && (a = void 0, l = [t]), (s || n.resolveWith)(a, l))
                      }
                    },
                    u = s ? c : function () {
                      try {
                        c()
                      } catch (t) {
                        w.Deferred.exceptionHook && w.Deferred.exceptionHook(t, u.stackTrace), o <= e + 1 && (i !== j && (a = void 0, l = [t]), n.rejectWith(a, l))
                      }
                    };
                  e ? u() : (w.Deferred.getStackHook && (u.stackTrace = w.Deferred.getStackHook()), t.setTimeout(u))
                }
              }
              return w.Deferred(function (t) {
                n[0][3].add(r(0, t, f(s) ? s : M, t.notifyWith)), n[1][3].add(r(0, t, f(e) ? e : M)), n[2][3].add(r(0, t, f(i) ? i : j))
              }).promise()
            },
            promise: function (t) {
              return null != t ? w.extend(t, s) : s
            }
          },
          o = {};
        return w.each(n, function (t, e) {
          var r = e[2],
            a = e[5];
          s[e[1]] = r.add, a && r.add(function () {
            i = a
          }, n[3 - t][2].disable, n[3 - t][3].disable, n[0][2].lock, n[0][3].lock), r.add(e[3].fire), o[e[0]] = function () {
            return o[e[0] + "With"](this === o ? void 0 : this, arguments), this
          }, o[e[0] + "With"] = r.fireWith
        }), s.promise(o), e && e.call(o, o), o
      },
      when: function (t) {
        var e = arguments.length,
          n = e,
          i = Array(n),
          o = s.call(arguments),
          r = w.Deferred(),
          a = function (t) {
            return function (n) {
              i[t] = this, o[t] = 1 < arguments.length ? s.call(arguments) : n, --e || r.resolveWith(i, o)
            }
          };
        if (e <= 1 && (H(t, r.done(a(n)).resolve, r.reject, !e), "pending" === r.state() || f(o[n] && o[n].then))) return r.then();
        for (; n--;) H(o[n], a(n), r.reject);
        return r.promise()
      }
    });
    var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function (e, n) {
      t.console && t.console.warn && e && z.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
    }, w.readyException = function (e) {
      t.setTimeout(function () {
        throw e
      })
    };
    var q = w.Deferred();
  
    function R() {
      m.removeEventListener("DOMContentLoaded", R), t.removeEventListener("load", R), w.ready()
    }
    w.fn.ready = function (t) {
      return q.then(t).catch(function (t) {
        w.readyException(t)
      }), this
    }, w.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (t) {
        (!0 === t ? --w.readyWait : w.isReady) || (w.isReady = !0) !== t && 0 < --w.readyWait || q.resolveWith(m, [w])
      }
    }), w.ready.then = q.then, "complete" === m.readyState || "loading" !== m.readyState && !m.documentElement.doScroll ? t.setTimeout(w.ready) : (m.addEventListener("DOMContentLoaded", R), t.addEventListener("load", R));
    var B = function (t, e, n, i, s, o, r) {
        var a = 0,
          l = t.length,
          c = null == n;
        if ("object" === _(n))
          for (a in s = !0, n) B(t, e, a, n[a], !0, o, r);
        else if (void 0 !== i && (s = !0, f(i) || (r = !0), c && (r ? (e.call(t, i), e = null) : (c = e, e = function (t, e, n) {
            return c.call(w(t), n)
          })), e))
          for (; a < l; a++) e(t[a], n, r ? i : i.call(t[a], a, e(t[a], n)));
        return s ? t : c ? e.call(t) : l ? e(t[0], n) : o
      },
      W = /^-ms-/,
      F = /-([a-z])/g;
  
    function U(t, e) {
      return e.toUpperCase()
    }
  
    function V(t) {
      return t.replace(W, "ms-").replace(F, U)
    }
    var X = function (t) {
      return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    };
  
    function Q() {
      this.expando = w.expando + Q.uid++
    }
    Q.uid = 1, Q.prototype = {
      cache: function (t) {
        var e = t[this.expando];
        return e || (e = {}, X(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
          value: e,
          configurable: !0
        }))), e
      },
      set: function (t, e, n) {
        var i, s = this.cache(t);
        if ("string" == typeof e) s[V(e)] = n;
        else
          for (i in e) s[V(i)] = e[i];
        return s
      },
      get: function (t, e) {
        return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][V(e)]
      },
      access: function (t, e, n) {
        return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
      },
      remove: function (t, e) {
        var n, i = t[this.expando];
        if (void 0 !== i) {
          if (void 0 !== e) {
            n = (e = Array.isArray(e) ? e.map(V) : (e = V(e)) in i ? [e] : e.match(I) || []).length;
            for (; n--;) delete i[e[n]]
          }(void 0 === e || w.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
        }
      },
      hasData: function (t) {
        var e = t[this.expando];
        return void 0 !== e && !w.isEmptyObject(e)
      }
    };
    var K = new Q,
      Y = new Q,
      Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      G = /[A-Z]/g;
  
    function J(t, e, n) {
      var i, s;
      if (void 0 === n && 1 === t.nodeType)
        if (i = "data-" + e.replace(G, "-$&").toLowerCase(), "string" == typeof (n = t.getAttribute(i))) {
          try {
            n = "true" === (s = n) || "false" !== s && ("null" === s ? null : s === +s + "" ? +s : Z.test(s) ? JSON.parse(s) : s)
          } catch (t) {}
          Y.set(t, e, n)
        } else n = void 0;
      return n
    }
    w.extend({
      hasData: function (t) {
        return Y.hasData(t) || K.hasData(t)
      },
      data: function (t, e, n) {
        return Y.access(t, e, n)
      },
      removeData: function (t, e) {
        Y.remove(t, e)
      },
      _data: function (t, e, n) {
        return K.access(t, e, n)
      },
      _removeData: function (t, e) {
        K.remove(t, e)
      }
    }), w.fn.extend({
      data: function (t, e) {
        var n, i, s, o = this[0],
          r = o && o.attributes;
        if (void 0 === t) {
          if (this.length && (s = Y.get(o), 1 === o.nodeType && !K.get(o, "hasDataAttrs"))) {
            for (n = r.length; n--;) r[n] && 0 === (i = r[n].name).indexOf("data-") && (i = V(i.slice(5)), J(o, i, s[i]));
            K.set(o, "hasDataAttrs", !0)
          }
          return s
        }
        return "object" == typeof t ? this.each(function () {
          Y.set(this, t)
        }) : B(this, function (e) {
          var n;
          if (o && void 0 === e) return void 0 !== (n = Y.get(o, t)) ? n : void 0 !== (n = J(o, t)) ? n : void 0;
          this.each(function () {
            Y.set(this, t, e)
          })
        }, null, e, 1 < arguments.length, null, !0)
      },
      removeData: function (t) {
        return this.each(function () {
          Y.remove(this, t)
        })
      }
    }), w.extend({
      queue: function (t, e, n) {
        var i;
        if (t) return e = (e || "fx") + "queue", i = K.get(t, e), n && (!i || Array.isArray(n) ? i = K.access(t, e, w.makeArray(n)) : i.push(n)), i || []
      },
      dequeue: function (t, e) {
        e = e || "fx";
        var n = w.queue(t, e),
          i = n.length,
          s = n.shift(),
          o = w._queueHooks(t, e);
        "inprogress" === s && (s = n.shift(), i--), s && ("fx" === e && n.unshift("inprogress"), delete o.stop, s.call(t, function () {
          w.dequeue(t, e)
        }, o)), !i && o && o.empty.fire()
      },
      _queueHooks: function (t, e) {
        var n = e + "queueHooks";
        return K.get(t, n) || K.access(t, n, {
          empty: w.Callbacks("once memory").add(function () {
            K.remove(t, [e + "queue", n])
          })
        })
      }
    }), w.fn.extend({
      queue: function (t, e) {
        var n = 2;
        return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? w.queue(this[0], t) : void 0 === e ? this : this.each(function () {
          var n = w.queue(this, t, e);
          w._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && w.dequeue(this, t)
        })
      },
      dequeue: function (t) {
        return this.each(function () {
          w.dequeue(this, t)
        })
      },
      clearQueue: function (t) {
        return this.queue(t || "fx", [])
      },
      promise: function (t, e) {
        var n, i = 1,
          s = w.Deferred(),
          o = this,
          r = this.length,
          a = function () {
            --i || s.resolveWith(o, [o])
          };
        for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;)(n = K.get(o[r], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
        return a(), s.promise(e)
      }
    });
    var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      et = new RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$", "i"),
      nt = ["Top", "Right", "Bottom", "Left"],
      it = m.documentElement,
      st = function (t) {
        return w.contains(t.ownerDocument, t)
      },
      ot = {
        composed: !0
      };
    it.getRootNode && (st = function (t) {
      return w.contains(t.ownerDocument, t) || t.getRootNode(ot) === t.ownerDocument
    });
    var rt = function (t, e) {
      return "none" === (t = e || t).style.display || "" === t.style.display && st(t) && "none" === w.css(t, "display")
    };
  
    function at(t, e, n, i) {
      var s, o, r = 20,
        a = i ? function () {
          return i.cur()
        } : function () {
          return w.css(t, e, "")
        },
        l = a(),
        c = n && n[3] || (w.cssNumber[e] ? "" : "px"),
        u = t.nodeType && (w.cssNumber[e] || "px" !== c && +l) && et.exec(w.css(t, e));
      if (u && u[3] !== c) {
        for (l /= 2, c = c || u[3], u = +l || 1; r--;) w.style(t, e, u + c), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (r = 0), u /= o;
        u *= 2, w.style(t, e, u + c), n = n || []
      }
      return n && (u = +u || +l || 0, s = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = s)), s
    }
    var lt = {};
  
    function ct(t, e) {
      for (var n, i, s, o, r, a, l, c = [], u = 0, h = t.length; u < h; u++)(i = t[u]).style && (n = i.style.display, e ? ("none" === n && (c[u] = K.get(i, "display") || null, c[u] || (i.style.display = "")), "" === i.style.display && rt(i) && (c[u] = (l = r = o = void 0, r = (s = i).ownerDocument, a = s.nodeName, (l = lt[a]) || (o = r.body.appendChild(r.createElement(a)), l = w.css(o, "display"), o.parentNode.removeChild(o), "none" === l && (l = "block"), lt[a] = l)))) : "none" !== n && (c[u] = "none", K.set(i, "display", n)));
      for (u = 0; u < h; u++) null != c[u] && (t[u].style.display = c[u]);
      return t
    }
    w.fn.extend({
      show: function () {
        return ct(this, !0)
      },
      hide: function () {
        return ct(this)
      },
      toggle: function (t) {
        return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
          rt(this) ? w(this).show() : w(this).hide()
        })
      }
    });
    var ut, ht, dt = /^(?:checkbox|radio)$/i,
      pt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      ft = /^$|^module$|\/(?:java|ecma)script/i;
    ut = m.createDocumentFragment().appendChild(m.createElement("div")), (ht = m.createElement("input")).setAttribute("type", "radio"), ht.setAttribute("checked", "checked"), ht.setAttribute("name", "t"), ut.appendChild(ht), p.checkClone = ut.cloneNode(!0).cloneNode(!0).lastChild.checked, ut.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!ut.cloneNode(!0).lastChild.defaultValue, ut.innerHTML = "<option></option>", p.option = !!ut.lastChild;
    var gt = {
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
  
    function mt(t, e) {
      var n;
      return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && S(t, e) ? w.merge([t], n) : n
    }
  
    function vt(t, e) {
      for (var n = 0, i = t.length; n < i; n++) K.set(t[n], "globalEval", !e || K.get(e[n], "globalEval"))
    }
    gt.tbody = gt.tfoot = gt.colgroup = gt.caption = gt.thead, gt.th = gt.td, p.option || (gt.optgroup = gt.option = [1, "<select multiple='multiple'>", "</select>"]);
    var yt = /<|&#?\w+;/;
  
    function _t(t, e, n, i, s) {
      for (var o, r, a, l, c, u, h = e.createDocumentFragment(), d = [], p = 0, f = t.length; p < f; p++)
        if ((o = t[p]) || 0 === o)
          if ("object" === _(o)) w.merge(d, o.nodeType ? [o] : o);
          else if (yt.test(o)) {
        for (r = r || h.appendChild(e.createElement("div")), a = (pt.exec(o) || ["", ""])[1].toLowerCase(), l = gt[a] || gt._default, r.innerHTML = l[1] + w.htmlPrefilter(o) + l[2], u = l[0]; u--;) r = r.lastChild;
        w.merge(d, r.childNodes), (r = h.firstChild).textContent = ""
      } else d.push(e.createTextNode(o));
      for (h.textContent = "", p = 0; o = d[p++];)
        if (i && -1 < w.inArray(o, i)) s && s.push(o);
        else if (c = st(o), r = mt(h.appendChild(o), "script"), c && vt(r), n)
        for (u = 0; o = r[u++];) ft.test(o.type || "") && n.push(o);
      return h
    }
    var bt = /^([^.]*)(?:\.(.+)|)/;
  
    function wt() {
      return !0
    }
  
    function xt() {
      return !1
    }
  
    function Ct(t, e) {
      return t === function () {
        try {
          return m.activeElement
        } catch (t) {}
      }() == ("focus" === e)
    }
  
    function Et(t, e, n, i, s, o) {
      var r, a;
      if ("object" == typeof e) {
        for (a in "string" != typeof n && (i = i || n, n = void 0), e) Et(t, a, n, i, e[a], o);
        return t
      }
      if (null == i && null == s ? (s = n, i = n = void 0) : null == s && ("string" == typeof n ? (s = i, i = void 0) : (s = i, i = n, n = void 0)), !1 === s) s = xt;
      else if (!s) return t;
      return 1 === o && (r = s, (s = function (t) {
        return w().off(t), r.apply(this, arguments)
      }).guid = r.guid || (r.guid = w.guid++)), t.each(function () {
        w.event.add(this, e, s, i, n)
      })
    }
  
    function Tt(t, e, n) {
      n ? (K.set(t, e, !1), w.event.add(t, e, {
        namespace: !1,
        handler: function (t) {
          var i, o, r = K.get(this, e);
          if (1 & t.isTrigger && this[e]) {
            if (r.length)(w.event.special[e] || {}).delegateType && t.stopPropagation();
            else if (r = s.call(arguments), K.set(this, e, r), i = n(this, e), this[e](), r !== (o = K.get(this, e)) || i ? K.set(this, e, !1) : o = {}, r !== o) return t.stopImmediatePropagation(), t.preventDefault(), o && o.value
          } else r.length && (K.set(this, e, {
            value: w.event.trigger(w.extend(r[0], w.Event.prototype), r.slice(1), this)
          }), t.stopImmediatePropagation())
        }
      })) : void 0 === K.get(t, e) && w.event.add(t, e, wt)
    }
    w.event = {
      global: {},
      add: function (t, e, n, i, s) {
        var o, r, a, l, c, u, h, d, p, f, g, m = K.get(t);
        if (X(t))
          for (n.handler && (n = (o = n).handler, s = o.selector), s && w.find.matchesSelector(it, s), n.guid || (n.guid = w.guid++), (l = m.events) || (l = m.events = Object.create(null)), (r = m.handle) || (r = m.handle = function (e) {
              return void 0 !== w && w.event.triggered !== e.type ? w.event.dispatch.apply(t, arguments) : void 0
            }), c = (e = (e || "").match(I) || [""]).length; c--;) p = g = (a = bt.exec(e[c]) || [])[1], f = (a[2] || "").split(".").sort(), p && (h = w.event.special[p] || {}, p = (s ? h.delegateType : h.bindType) || p, h = w.event.special[p] || {}, u = w.extend({
            type: p,
            origType: g,
            data: i,
            handler: n,
            guid: n.guid,
            selector: s,
            needsContext: s && w.expr.match.needsContext.test(s),
            namespace: f.join(".")
          }, o), (d = l[p]) || ((d = l[p] = []).delegateCount = 0, h.setup && !1 !== h.setup.call(t, i, f, r) || t.addEventListener && t.addEventListener(p, r)), h.add && (h.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), s ? d.splice(d.delegateCount++, 0, u) : d.push(u), w.event.global[p] = !0)
      },
      remove: function (t, e, n, i, s) {
        var o, r, a, l, c, u, h, d, p, f, g, m = K.hasData(t) && K.get(t);
        if (m && (l = m.events)) {
          for (c = (e = (e || "").match(I) || [""]).length; c--;)
            if (p = g = (a = bt.exec(e[c]) || [])[1], f = (a[2] || "").split(".").sort(), p) {
              for (h = w.event.special[p] || {}, d = l[p = (i ? h.delegateType : h.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = o = d.length; o--;) u = d[o], !s && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(o, 1), u.selector && d.delegateCount--, h.remove && h.remove.call(t, u));
              r && !d.length && (h.teardown && !1 !== h.teardown.call(t, f, m.handle) || w.removeEvent(t, p, m.handle), delete l[p])
            } else
              for (p in l) w.event.remove(t, p + e[c], n, i, !0);
          w.isEmptyObject(l) && K.remove(t, "handle events")
        }
      },
      dispatch: function (t) {
        var e, n, i, s, o, r, a = new Array(arguments.length),
          l = w.event.fix(t),
          c = (K.get(this, "events") || Object.create(null))[l.type] || [],
          u = w.event.special[l.type] || {};
        for (a[0] = l, e = 1; e < arguments.length; e++) a[e] = arguments[e];
        if (l.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
          for (r = w.event.handlers.call(this, l, c), e = 0;
            (s = r[e++]) && !l.isPropagationStopped();)
            for (l.currentTarget = s.elem, n = 0;
              (o = s.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o, l.data = o.data, void 0 !== (i = ((w.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
          return u.postDispatch && u.postDispatch.call(this, l), l.result
        }
      },
      handlers: function (t, e) {
        var n, i, s, o, r, a = [],
          l = e.delegateCount,
          c = t.target;
        if (l && c.nodeType && !("click" === t.type && 1 <= t.button))
          for (; c !== this; c = c.parentNode || this)
            if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
              for (o = [], r = {}, n = 0; n < l; n++) void 0 === r[s = (i = e[n]).selector + " "] && (r[s] = i.needsContext ? -1 < w(s, this).index(c) : w.find(s, this, null, [c]).length), r[s] && o.push(i);
              o.length && a.push({
                elem: c,
                handlers: o
              })
            } return c = this, l < e.length && a.push({
          elem: c,
          handlers: e.slice(l)
        }), a
      },
      addProp: function (t, e) {
        Object.defineProperty(w.Event.prototype, t, {
          enumerable: !0,
          configurable: !0,
          get: f(e) ? function () {
            if (this.originalEvent) return e(this.originalEvent)
          } : function () {
            if (this.originalEvent) return this.originalEvent[t]
          },
          set: function (e) {
            Object.defineProperty(this, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: e
            })
          }
        })
      },
      fix: function (t) {
        return t[w.expando] ? t : new w.Event(t)
      },
      special: {
        load: {
          noBubble: !0
        },
        click: {
          setup: function (t) {
            var e = this || t;
            return dt.test(e.type) && e.click && S(e, "input") && Tt(e, "click", wt), !1
          },
          trigger: function (t) {
            var e = this || t;
            return dt.test(e.type) && e.click && S(e, "input") && Tt(e, "click"), !0
          },
          _default: function (t) {
            var e = t.target;
            return dt.test(e.type) && e.click && S(e, "input") && K.get(e, "click") || S(e, "a")
          }
        },
        beforeunload: {
          postDispatch: function (t) {
            void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
          }
        }
      }
    }, w.removeEvent = function (t, e, n) {
      t.removeEventListener && t.removeEventListener(e, n)
    }, w.Event = function (t, e) {
      if (!(this instanceof w.Event)) return new w.Event(t, e);
      t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? wt : xt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && w.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[w.expando] = !0
    }, w.Event.prototype = {
      constructor: w.Event,
      isDefaultPrevented: xt,
      isPropagationStopped: xt,
      isImmediatePropagationStopped: xt,
      isSimulated: !1,
      preventDefault: function () {
        var t = this.originalEvent;
        this.isDefaultPrevented = wt, t && !this.isSimulated && t.preventDefault()
      },
      stopPropagation: function () {
        var t = this.originalEvent;
        this.isPropagationStopped = wt, t && !this.isSimulated && t.stopPropagation()
      },
      stopImmediatePropagation: function () {
        var t = this.originalEvent;
        this.isImmediatePropagationStopped = wt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
      }
    }, w.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      char: !0,
      code: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: !0
    }, w.event.addProp), w.each({
      focus: "focusin",
      blur: "focusout"
    }, function (t, e) {
      w.event.special[t] = {
        setup: function () {
          return Tt(this, t, Ct), !1
        },
        trigger: function () {
          return Tt(this, t), !0
        },
        _default: function () {
          return !0
        },
        delegateType: e
      }
    }), w.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function (t, e) {
      w.event.special[t] = {
        delegateType: e,
        bindType: e,
        handle: function (t) {
          var n, i = t.relatedTarget,
            s = t.handleObj;
          return i && (i === this || w.contains(this, i)) || (t.type = s.origType, n = s.handler.apply(this, arguments), t.type = e), n
        }
      }
    }), w.fn.extend({
      on: function (t, e, n, i) {
        return Et(this, t, e, n, i)
      },
      one: function (t, e, n, i) {
        return Et(this, t, e, n, i, 1)
      },
      off: function (t, e, n) {
        var i, s;
        if (t && t.preventDefault && t.handleObj) return i = t.handleObj, w(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
        if ("object" == typeof t) {
          for (s in t) this.off(s, e, t[s]);
          return this
        }
        return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = xt), this.each(function () {
          w.event.remove(this, t, n, e)
        })
      }
    });
    var kt = /<script|<style|<link/i,
      St = /checked\s*(?:[^=]|=\s*.checked.)/i,
      At = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  
    function Ot(t, e) {
      return S(t, "table") && S(11 !== e.nodeType ? e : e.firstChild, "tr") && w(t).children("tbody")[0] || t
    }
  
    function Lt(t) {
      return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }
  
    function Nt(t) {
      return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
    }
  
    function Dt(t, e) {
      var n, i, s, o, r, a;
      if (1 === e.nodeType) {
        if (K.hasData(t) && (a = K.get(t).events))
          for (s in K.remove(e, "handle events"), a)
            for (n = 0, i = a[s].length; n < i; n++) w.event.add(e, s, a[s][n]);
        Y.hasData(t) && (o = Y.access(t), r = w.extend({}, o), Y.set(e, r))
      }
    }
  
    function Pt(t, e, n, i) {
      e = o(e);
      var s, r, a, l, c, u, h = 0,
        d = t.length,
        g = d - 1,
        m = e[0],
        v = f(m);
      if (v || 1 < d && "string" == typeof m && !p.checkClone && St.test(m)) return t.each(function (s) {
        var o = t.eq(s);
        v && (e[0] = m.call(this, s, o.html())), Pt(o, e, n, i)
      });
      if (d && (r = (s = _t(e, t[0].ownerDocument, !1, t, i)).firstChild, 1 === s.childNodes.length && (s = r), r || i)) {
        for (l = (a = w.map(mt(s, "script"), Lt)).length; h < d; h++) c = s, h !== g && (c = w.clone(c, !0, !0), l && w.merge(a, mt(c, "script"))), n.call(t[h], c, h);
        if (l)
          for (u = a[a.length - 1].ownerDocument, w.map(a, Nt), h = 0; h < l; h++) c = a[h], ft.test(c.type || "") && !K.access(c, "globalEval") && w.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? w._evalUrl && !c.noModule && w._evalUrl(c.src, {
            nonce: c.nonce || c.getAttribute("nonce")
          }, u) : y(c.textContent.replace(At, ""), c, u))
      }
      return t
    }
  
    function $t(t, e, n) {
      for (var i, s = e ? w.filter(e, t) : t, o = 0; null != (i = s[o]); o++) n || 1 !== i.nodeType || w.cleanData(mt(i)), i.parentNode && (n && st(i) && vt(mt(i, "script")), i.parentNode.removeChild(i));
      return t
    }
    w.extend({
      htmlPrefilter: function (t) {
        return t
      },
      clone: function (t, e, n) {
        var i, s, o, r, a, l, c, u = t.cloneNode(!0),
          h = st(t);
        if (!(p.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || w.isXMLDoc(t)))
          for (r = mt(u), i = 0, s = (o = mt(t)).length; i < s; i++) a = o[i], "input" === (c = (l = r[i]).nodeName.toLowerCase()) && dt.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
        if (e)
          if (n)
            for (o = o || mt(t), r = r || mt(u), i = 0, s = o.length; i < s; i++) Dt(o[i], r[i]);
          else Dt(t, u);
        return 0 < (r = mt(u, "script")).length && vt(r, !h && mt(t, "script")), u
      },
      cleanData: function (t) {
        for (var e, n, i, s = w.event.special, o = 0; void 0 !== (n = t[o]); o++)
          if (X(n)) {
            if (e = n[K.expando]) {
              if (e.events)
                for (i in e.events) s[i] ? w.event.remove(n, i) : w.removeEvent(n, i, e.handle);
              n[K.expando] = void 0
            }
            n[Y.expando] && (n[Y.expando] = void 0)
          }
      }
    }), w.fn.extend({
      detach: function (t) {
        return $t(this, t, !0)
      },
      remove: function (t) {
        return $t(this, t)
      },
      text: function (t) {
        return B(this, function (t) {
          return void 0 === t ? w.text(this) : this.empty().each(function () {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
          })
        }, null, t, arguments.length)
      },
      append: function () {
        return Pt(this, arguments, function (t) {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ot(this, t).appendChild(t)
        })
      },
      prepend: function () {
        return Pt(this, arguments, function (t) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var e = Ot(this, t);
            e.insertBefore(t, e.firstChild)
          }
        })
      },
      before: function () {
        return Pt(this, arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this)
        })
      },
      after: function () {
        return Pt(this, arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
        })
      },
      empty: function () {
        for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (w.cleanData(mt(t, !1)), t.textContent = "");
        return this
      },
      clone: function (t, e) {
        return t = null != t && t, e = null == e ? t : e, this.map(function () {
          return w.clone(this, t, e)
        })
      },
      html: function (t) {
        return B(this, function (t) {
          var e = this[0] || {},
            n = 0,
            i = this.length;
          if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
          if ("string" == typeof t && !kt.test(t) && !gt[(pt.exec(t) || ["", ""])[1].toLowerCase()]) {
            t = w.htmlPrefilter(t);
            try {
              for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (w.cleanData(mt(e, !1)), e.innerHTML = t);
              e = 0
            } catch (t) {}
          }
          e && this.empty().append(t)
        }, null, t, arguments.length)
      },
      replaceWith: function () {
        var t = [];
        return Pt(this, arguments, function (e) {
          var n = this.parentNode;
          w.inArray(this, t) < 0 && (w.cleanData(mt(this)), n && n.replaceChild(e, this))
        }, t)
      }
    }), w.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function (t, e) {
      w.fn[t] = function (t) {
        for (var n, i = [], s = w(t), o = s.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), w(s[a])[e](n), r.apply(i, n.get());
        return this.pushStack(i)
      }
    });
    var It = new RegExp("^(" + tt + ")(?!px)[a-z%]+$", "i"),
      Mt = function (e) {
        var n = e.ownerDocument.defaultView;
        return n && n.opener || (n = t), n.getComputedStyle(e)
      },
      jt = function (t, e, n) {
        var i, s, o = {};
        for (s in e) o[s] = t.style[s], t.style[s] = e[s];
        for (s in i = n.call(t), e) t.style[s] = o[s];
        return i
      },
      Ht = new RegExp(nt.join("|"), "i");
  
    function zt(t, e, n) {
      var i, s, o, r, a = t.style;
      return (n = n || Mt(t)) && ("" !== (r = n.getPropertyValue(e) || n[e]) || st(t) || (r = w.style(t, e)), !p.pixelBoxStyles() && It.test(r) && Ht.test(e) && (i = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = n.width, a.width = i, a.minWidth = s, a.maxWidth = o)), void 0 !== r ? r + "" : r
    }
  
    function qt(t, e) {
      return {
        get: function () {
          if (!t()) return (this.get = e).apply(this, arguments);
          delete this.get
        }
      }
    }! function () {
      function e() {
        if (u) {
          c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", it.appendChild(c).appendChild(u);
          var e = t.getComputedStyle(u);
          i = "1%" !== e.top, l = 12 === n(e.marginLeft), u.style.right = "60%", r = 36 === n(e.right), s = 36 === n(e.width), u.style.position = "absolute", o = 12 === n(u.offsetWidth / 3), it.removeChild(c), u = null
        }
      }
  
      function n(t) {
        return Math.round(parseFloat(t))
      }
      var i, s, o, r, a, l, c = m.createElement("div"),
        u = m.createElement("div");
      u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === u.style.backgroundClip, w.extend(p, {
        boxSizingReliable: function () {
          return e(), s
        },
        pixelBoxStyles: function () {
          return e(), r
        },
        pixelPosition: function () {
          return e(), i
        },
        reliableMarginLeft: function () {
          return e(), l
        },
        scrollboxSize: function () {
          return e(), o
        },
        reliableTrDimensions: function () {
          var e, n, i, s;
          return null == a && (e = m.createElement("table"), n = m.createElement("tr"), i = m.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", n.style.cssText = "border:1px solid", n.style.height = "1px", i.style.height = "9px", i.style.display = "block", it.appendChild(e).appendChild(n).appendChild(i), s = t.getComputedStyle(n), a = parseInt(s.height, 10) + parseInt(s.borderTopWidth, 10) + parseInt(s.borderBottomWidth, 10) === n.offsetHeight, it.removeChild(e)), a
        }
      }))
    }();
    var Rt = ["Webkit", "Moz", "ms"],
      Bt = m.createElement("div").style,
      Wt = {};
  
    function Ft(t) {
      return w.cssProps[t] || Wt[t] || (t in Bt ? t : Wt[t] = function (t) {
        for (var e = t[0].toUpperCase() + t.slice(1), n = Rt.length; n--;)
          if ((t = Rt[n] + e) in Bt) return t
      }(t) || t)
    }
    var Ut = /^(none|table(?!-c[ea]).+)/,
      Vt = /^--/,
      Xt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      Qt = {
        letterSpacing: "0",
        fontWeight: "400"
      };
  
    function Kt(t, e, n) {
      var i = et.exec(e);
      return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
    }
  
    function Yt(t, e, n, i, s, o) {
      var r = "width" === e ? 1 : 0,
        a = 0,
        l = 0;
      if (n === (i ? "border" : "content")) return 0;
      for (; r < 4; r += 2) "margin" === n && (l += w.css(t, n + nt[r], !0, s)), i ? ("content" === n && (l -= w.css(t, "padding" + nt[r], !0, s)), "margin" !== n && (l -= w.css(t, "border" + nt[r] + "Width", !0, s))) : (l += w.css(t, "padding" + nt[r], !0, s), "padding" !== n ? l += w.css(t, "border" + nt[r] + "Width", !0, s) : a += w.css(t, "border" + nt[r] + "Width", !0, s));
      return !i && 0 <= o && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - a - .5)) || 0), l
    }
  
    function Zt(t, e, n) {
      var i = Mt(t),
        s = (!p.boxSizingReliable() || n) && "border-box" === w.css(t, "boxSizing", !1, i),
        o = s,
        r = zt(t, e, i),
        a = "offset" + e[0].toUpperCase() + e.slice(1);
      if (It.test(r)) {
        if (!n) return r;
        r = "auto"
      }
      return (!p.boxSizingReliable() && s || !p.reliableTrDimensions() && S(t, "tr") || "auto" === r || !parseFloat(r) && "inline" === w.css(t, "display", !1, i)) && t.getClientRects().length && (s = "border-box" === w.css(t, "boxSizing", !1, i), (o = a in t) && (r = t[a])), (r = parseFloat(r) || 0) + Yt(t, e, n || (s ? "border" : "content"), o, i, r) + "px"
    }
  
    function Gt(t, e, n, i, s) {
      return new Gt.prototype.init(t, e, n, i, s)
    }
    w.extend({
      cssHooks: {
        opacity: {
          get: function (t, e) {
            if (e) {
              var n = zt(t, "opacity");
              return "" === n ? "1" : n
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {},
      style: function (t, e, n, i) {
        if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
          var s, o, r, a = V(e),
            l = Vt.test(e),
            c = t.style;
          if (l || (e = Ft(a)), r = w.cssHooks[e] || w.cssHooks[a], void 0 === n) return r && "get" in r && void 0 !== (s = r.get(t, !1, i)) ? s : c[e];
          "string" == (o = typeof n) && (s = et.exec(n)) && s[1] && (n = at(t, e, s), o = "number"), null != n && n == n && ("number" !== o || l || (n += s && s[3] || (w.cssNumber[a] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"), r && "set" in r && void 0 === (n = r.set(t, n, i)) || (l ? c.setProperty(e, n) : c[e] = n))
        }
      },
      css: function (t, e, n, i) {
        var s, o, r, a = V(e);
        return Vt.test(e) || (e = Ft(a)), (r = w.cssHooks[e] || w.cssHooks[a]) && "get" in r && (s = r.get(t, !0, n)), void 0 === s && (s = zt(t, e, i)), "normal" === s && e in Qt && (s = Qt[e]), "" === n || n ? (o = parseFloat(s), !0 === n || isFinite(o) ? o || 0 : s) : s
      }
    }), w.each(["height", "width"], function (t, e) {
      w.cssHooks[e] = {
        get: function (t, n, i) {
          if (n) return !Ut.test(w.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Zt(t, e, i) : jt(t, Xt, function () {
            return Zt(t, e, i)
          })
        },
        set: function (t, n, i) {
          var s, o = Mt(t),
            r = !p.scrollboxSize() && "absolute" === o.position,
            a = (r || i) && "border-box" === w.css(t, "boxSizing", !1, o),
            l = i ? Yt(t, e, i, a, o) : 0;
          return a && r && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(o[e]) - Yt(t, e, "border", !1, o) - .5)), l && (s = et.exec(n)) && "px" !== (s[3] || "px") && (t.style[e] = n, n = w.css(t, e)), Kt(0, n, l)
        }
      }
    }), w.cssHooks.marginLeft = qt(p.reliableMarginLeft, function (t, e) {
      if (e) return (parseFloat(zt(t, "marginLeft")) || t.getBoundingClientRect().left - jt(t, {
        marginLeft: 0
      }, function () {
        return t.getBoundingClientRect().left
      })) + "px"
    }), w.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function (t, e) {
      w.cssHooks[t + e] = {
        expand: function (n) {
          for (var i = 0, s = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) s[t + nt[i] + e] = o[i] || o[i - 2] || o[0];
          return s
        }
      }, "margin" !== t && (w.cssHooks[t + e].set = Kt)
    }), w.fn.extend({
      css: function (t, e) {
        return B(this, function (t, e, n) {
          var i, s, o = {},
            r = 0;
          if (Array.isArray(e)) {
            for (i = Mt(t), s = e.length; r < s; r++) o[e[r]] = w.css(t, e[r], !1, i);
            return o
          }
          return void 0 !== n ? w.style(t, e, n) : w.css(t, e)
        }, t, e, 1 < arguments.length)
      }
    }), ((w.Tween = Gt).prototype = {
      constructor: Gt,
      init: function (t, e, n, i, s, o) {
        this.elem = t, this.prop = n, this.easing = s || w.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (w.cssNumber[n] ? "" : "px")
      },
      cur: function () {
        var t = Gt.propHooks[this.prop];
        return t && t.get ? t.get(this) : Gt.propHooks._default.get(this)
      },
      run: function (t) {
        var e, n = Gt.propHooks[this.prop];
        return this.options.duration ? this.pos = e = w.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Gt.propHooks._default.set(this), this
      }
    }).init.prototype = Gt.prototype, (Gt.propHooks = {
      _default: {
        get: function (t) {
          var e;
          return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = w.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
        },
        set: function (t) {
          w.fx.step[t.prop] ? w.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !w.cssHooks[t.prop] && null == t.elem.style[Ft(t.prop)] ? t.elem[t.prop] = t.now : w.style(t.elem, t.prop, t.now + t.unit)
        }
      }
    }).scrollTop = Gt.propHooks.scrollLeft = {
      set: function (t) {
        t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
      }
    }, w.easing = {
      linear: function (t) {
        return t
      },
      swing: function (t) {
        return .5 - Math.cos(t * Math.PI) / 2
      },
      _default: "swing"
    }, w.fx = Gt.prototype.init, w.fx.step = {};
    var Jt, te, ee, ne, ie = /^(?:toggle|show|hide)$/,
      se = /queueHooks$/;
  
    function oe() {
      te && (!1 === m.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(oe) : t.setTimeout(oe, w.fx.interval), w.fx.tick())
    }
  
    function re() {
      return t.setTimeout(function () {
        Jt = void 0
      }), Jt = Date.now()
    }
  
    function ae(t, e) {
      var n, i = 0,
        s = {
          height: t
        };
      for (e = e ? 1 : 0; i < 4; i += 2 - e) s["margin" + (n = nt[i])] = s["padding" + n] = t;
      return e && (s.opacity = s.width = t), s
    }
  
    function le(t, e, n) {
      for (var i, s = (ce.tweeners[e] || []).concat(ce.tweeners["*"]), o = 0, r = s.length; o < r; o++)
        if (i = s[o].call(n, e, t)) return i
    }
  
    function ce(t, e, n) {
      var i, s, o = 0,
        r = ce.prefilters.length,
        a = w.Deferred().always(function () {
          delete l.elem
        }),
        l = function () {
          if (s) return !1;
          for (var e = Jt || re(), n = Math.max(0, c.startTime + c.duration - e), i = 1 - (n / c.duration || 0), o = 0, r = c.tweens.length; o < r; o++) c.tweens[o].run(i);
          return a.notifyWith(t, [c, i, n]), i < 1 && r ? n : (r || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1)
        },
        c = a.promise({
          elem: t,
          props: w.extend({}, e),
          opts: w.extend(!0, {
            specialEasing: {},
            easing: w.easing._default
          }, n),
          originalProperties: e,
          originalOptions: n,
          startTime: Jt || re(),
          duration: n.duration,
          tweens: [],
          createTween: function (e, n) {
            var i = w.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
            return c.tweens.push(i), i
          },
          stop: function (e) {
            var n = 0,
              i = e ? c.tweens.length : 0;
            if (s) return this;
            for (s = !0; n < i; n++) c.tweens[n].run(1);
            return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
          }
        }),
        u = c.props;
      for (function (t, e) {
          var n, i, s, o, r;
          for (n in t)
            if (s = e[i = V(n)], o = t[n], Array.isArray(o) && (s = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), (r = w.cssHooks[i]) && "expand" in r)
              for (n in o = r.expand(o), delete t[i], o) n in t || (t[n] = o[n], e[n] = s);
            else e[i] = s
        }(u, c.opts.specialEasing); o < r; o++)
        if (i = ce.prefilters[o].call(c, t, u, c.opts)) return f(i.stop) && (w._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
      return w.map(u, le, c), f(c.opts.start) && c.opts.start.call(t, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), w.fx.timer(w.extend(l, {
        elem: t,
        anim: c,
        queue: c.opts.queue
      })), c
    }
    w.Animation = w.extend(ce, {
      tweeners: {
        "*": [function (t, e) {
          var n = this.createTween(t, e);
          return at(n.elem, t, et.exec(e), n), n
        }]
      },
      tweener: function (t, e) {
        f(t) ? (e = t, t = ["*"]) : t = t.match(I);
        for (var n, i = 0, s = t.length; i < s; i++) n = t[i], ce.tweeners[n] = ce.tweeners[n] || [], ce.tweeners[n].unshift(e)
      },
      prefilters: [function (t, e, n) {
        var i, s, o, r, a, l, c, u, h = "width" in e || "height" in e,
          d = this,
          p = {},
          f = t.style,
          g = t.nodeType && rt(t),
          m = K.get(t, "fxshow");
        for (i in n.queue || (null == (r = w._queueHooks(t, "fx")).unqueued && (r.unqueued = 0, a = r.empty.fire, r.empty.fire = function () {
            r.unqueued || a()
          }), r.unqueued++, d.always(function () {
            d.always(function () {
              r.unqueued--, w.queue(t, "fx").length || r.empty.fire()
            })
          })), e)
          if (s = e[i], ie.test(s)) {
            if (delete e[i], o = o || "toggle" === s, s === (g ? "hide" : "show")) {
              if ("show" !== s || !m || void 0 === m[i]) continue;
              g = !0
            }
            p[i] = m && m[i] || w.style(t, i)
          } if ((l = !w.isEmptyObject(e)) || !w.isEmptyObject(p))
          for (i in h && 1 === t.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = m && m.display) && (c = K.get(t, "display")), "none" === (u = w.css(t, "display")) && (c ? u = c : (ct([t], !0), c = t.style.display || c, u = w.css(t, "display"), ct([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === w.css(t, "float") && (l || (d.done(function () {
              f.display = c
            }), null == c && (u = f.display, c = "none" === u ? "" : u)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", d.always(function () {
              f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            })), l = !1, p) l || (m ? "hidden" in m && (g = m.hidden) : m = K.access(t, "fxshow", {
            display: c
          }), o && (m.hidden = !g), g && ct([t], !0), d.done(function () {
            for (i in g || ct([t]), K.remove(t, "fxshow"), p) w.style(t, i, p[i])
          })), l = le(g ? m[i] : 0, i, d), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
      }],
      prefilter: function (t, e) {
        e ? ce.prefilters.unshift(t) : ce.prefilters.push(t)
      }
    }), w.speed = function (t, e, n) {
      var i = t && "object" == typeof t ? w.extend({}, t) : {
        complete: n || !n && e || f(t) && t,
        duration: t,
        easing: n && e || e && !f(e) && e
      };
      return w.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in w.fx.speeds ? i.duration = w.fx.speeds[i.duration] : i.duration = w.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
        f(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue)
      }, i
    }, w.fn.extend({
      fadeTo: function (t, e, n, i) {
        return this.filter(rt).css("opacity", 0).show().end().animate({
          opacity: e
        }, t, n, i)
      },
      animate: function (t, e, n, i) {
        var s = w.isEmptyObject(t),
          o = w.speed(e, n, i),
          r = function () {
            var e = ce(this, w.extend({}, t), o);
            (s || K.get(this, "finish")) && e.stop(!0)
          };
        return r.finish = r, s || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
      },
      stop: function (t, e, n) {
        var i = function (t) {
          var e = t.stop;
          delete t.stop, e(n)
        };
        return "string" != typeof t && (n = e, e = t, t = void 0), e && this.queue(t || "fx", []), this.each(function () {
          var e = !0,
            s = null != t && t + "queueHooks",
            o = w.timers,
            r = K.get(this);
          if (s) r[s] && r[s].stop && i(r[s]);
          else
            for (s in r) r[s] && r[s].stop && se.test(s) && i(r[s]);
          for (s = o.length; s--;) o[s].elem !== this || null != t && o[s].queue !== t || (o[s].anim.stop(n), e = !1, o.splice(s, 1));
          !e && n || w.dequeue(this, t)
        })
      },
      finish: function (t) {
        return !1 !== t && (t = t || "fx"), this.each(function () {
          var e, n = K.get(this),
            i = n[t + "queue"],
            s = n[t + "queueHooks"],
            o = w.timers,
            r = i ? i.length : 0;
          for (n.finish = !0, w.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
          for (e = 0; e < r; e++) i[e] && i[e].finish && i[e].finish.call(this);
          delete n.finish
        })
      }
    }), w.each(["toggle", "show", "hide"], function (t, e) {
      var n = w.fn[e];
      w.fn[e] = function (t, i, s) {
        return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(ae(e, !0), t, i, s)
      }
    }), w.each({
      slideDown: ae("show"),
      slideUp: ae("hide"),
      slideToggle: ae("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function (t, e) {
      w.fn[t] = function (t, n, i) {
        return this.animate(e, t, n, i)
      }
    }), w.timers = [], w.fx.tick = function () {
      var t, e = 0,
        n = w.timers;
      for (Jt = Date.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
      n.length || w.fx.stop(), Jt = void 0
    }, w.fx.timer = function (t) {
      w.timers.push(t), w.fx.start()
    }, w.fx.interval = 13, w.fx.start = function () {
      te || (te = !0, oe())
    }, w.fx.stop = function () {
      te = null
    }, w.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, w.fn.delay = function (e, n) {
      return e = w.fx && w.fx.speeds[e] || e, n = n || "fx", this.queue(n, function (n, i) {
        var s = t.setTimeout(n, e);
        i.stop = function () {
          t.clearTimeout(s)
        }
      })
    }, ee = m.createElement("input"), ne = m.createElement("select").appendChild(m.createElement("option")), ee.type = "checkbox", p.checkOn = "" !== ee.value, p.optSelected = ne.selected, (ee = m.createElement("input")).value = "t", ee.type = "radio", p.radioValue = "t" === ee.value;
    var ue, he = w.expr.attrHandle;
    w.fn.extend({
      attr: function (t, e) {
        return B(this, w.attr, t, e, 1 < arguments.length)
      },
      removeAttr: function (t) {
        return this.each(function () {
          w.removeAttr(this, t)
        })
      }
    }), w.extend({
      attr: function (t, e, n) {
        var i, s, o = t.nodeType;
        if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? w.prop(t, e, n) : (1 === o && w.isXMLDoc(t) || (s = w.attrHooks[e.toLowerCase()] || (w.expr.match.bool.test(e) ? ue : void 0)), void 0 !== n ? null === n ? void w.removeAttr(t, e) : s && "set" in s && void 0 !== (i = s.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : s && "get" in s && null !== (i = s.get(t, e)) ? i : null == (i = w.find.attr(t, e)) ? void 0 : i)
      },
      attrHooks: {
        type: {
          set: function (t, e) {
            if (!p.radioValue && "radio" === e && S(t, "input")) {
              var n = t.value;
              return t.setAttribute("type", e), n && (t.value = n), e
            }
          }
        }
      },
      removeAttr: function (t, e) {
        var n, i = 0,
          s = e && e.match(I);
        if (s && 1 === t.nodeType)
          for (; n = s[i++];) t.removeAttribute(n)
      }
    }), ue = {
      set: function (t, e, n) {
        return !1 === e ? w.removeAttr(t, n) : t.setAttribute(n, n), n
      }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), function (t, e) {
      var n = he[e] || w.find.attr;
      he[e] = function (t, e, i) {
        var s, o, r = e.toLowerCase();
        return i || (o = he[r], he[r] = s, s = null != n(t, e, i) ? r : null, he[r] = o), s
      }
    });
    var de = /^(?:input|select|textarea|button)$/i,
      pe = /^(?:a|area)$/i;
  
    function fe(t) {
      return (t.match(I) || []).join(" ")
    }
  
    function ge(t) {
      return t.getAttribute && t.getAttribute("class") || ""
    }
  
    function me(t) {
      return Array.isArray(t) ? t : "string" == typeof t && t.match(I) || []
    }
    w.fn.extend({
      prop: function (t, e) {
        return B(this, w.prop, t, e, 1 < arguments.length)
      },
      removeProp: function (t) {
        return this.each(function () {
          delete this[w.propFix[t] || t]
        })
      }
    }), w.extend({
      prop: function (t, e, n) {
        var i, s, o = t.nodeType;
        if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(t) || (e = w.propFix[e] || e, s = w.propHooks[e]), void 0 !== n ? s && "set" in s && void 0 !== (i = s.set(t, n, e)) ? i : t[e] = n : s && "get" in s && null !== (i = s.get(t, e)) ? i : t[e]
      },
      propHooks: {
        tabIndex: {
          get: function (t) {
            var e = w.find.attr(t, "tabindex");
            return e ? parseInt(e, 10) : de.test(t.nodeName) || pe.test(t.nodeName) && t.href ? 0 : -1
          }
        }
      },
      propFix: {
        for: "htmlFor",
        class: "className"
      }
    }), p.optSelected || (w.propHooks.selected = {
      get: function (t) {
        var e = t.parentNode;
        return e && e.parentNode && e.parentNode.selectedIndex, null
      },
      set: function (t) {
        var e = t.parentNode;
        e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
      }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      w.propFix[this.toLowerCase()] = this
    }), w.fn.extend({
      addClass: function (t) {
        var e, n, i, s, o, r, a, l = 0;
        if (f(t)) return this.each(function (e) {
          w(this).addClass(t.call(this, e, ge(this)))
        });
        if ((e = me(t)).length)
          for (; n = this[l++];)
            if (s = ge(n), i = 1 === n.nodeType && " " + fe(s) + " ") {
              for (r = 0; o = e[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
              s !== (a = fe(i)) && n.setAttribute("class", a)
            } return this
      },
      removeClass: function (t) {
        var e, n, i, s, o, r, a, l = 0;
        if (f(t)) return this.each(function (e) {
          w(this).removeClass(t.call(this, e, ge(this)))
        });
        if (!arguments.length) return this.attr("class", "");
        if ((e = me(t)).length)
          for (; n = this[l++];)
            if (s = ge(n), i = 1 === n.nodeType && " " + fe(s) + " ") {
              for (r = 0; o = e[r++];)
                for (; - 1 < i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
              s !== (a = fe(i)) && n.setAttribute("class", a)
            } return this
      },
      toggleClass: function (t, e) {
        var n = typeof t,
          i = "string" === n || Array.isArray(t);
        return "boolean" == typeof e && i ? e ? this.addClass(t) : this.removeClass(t) : f(t) ? this.each(function (n) {
          w(this).toggleClass(t.call(this, n, ge(this), e), e)
        }) : this.each(function () {
          var e, s, o, r;
          if (i)
            for (s = 0, o = w(this), r = me(t); e = r[s++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
          else void 0 !== t && "boolean" !== n || ((e = ge(this)) && K.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : K.get(this, "__className__") || ""))
        })
      },
      hasClass: function (t) {
        var e, n, i = 0;
        for (e = " " + t + " "; n = this[i++];)
          if (1 === n.nodeType && -1 < (" " + fe(ge(n)) + " ").indexOf(e)) return !0;
        return !1
      }
    });
    var ve = /\r/g;
    w.fn.extend({
      val: function (t) {
        var e, n, i, s = this[0];
        return arguments.length ? (i = f(t), this.each(function (n) {
          var s;
          1 === this.nodeType && (null == (s = i ? t.call(this, n, w(this).val()) : t) ? s = "" : "number" == typeof s ? s += "" : Array.isArray(s) && (s = w.map(s, function (t) {
            return null == t ? "" : t + ""
          })), (e = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s))
        })) : s ? (e = w.valHooks[s.type] || w.valHooks[s.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(s, "value")) ? n : "string" == typeof (n = s.value) ? n.replace(ve, "") : null == n ? "" : n : void 0
      }
    }), w.extend({
      valHooks: {
        option: {
          get: function (t) {
            var e = w.find.attr(t, "value");
            return null != e ? e : fe(w.text(t))
          }
        },
        select: {
          get: function (t) {
            var e, n, i, s = t.options,
              o = t.selectedIndex,
              r = "select-one" === t.type,
              a = r ? null : [],
              l = r ? o + 1 : s.length;
            for (i = o < 0 ? l : r ? o : 0; i < l; i++)
              if (((n = s[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !S(n.parentNode, "optgroup"))) {
                if (e = w(n).val(), r) return e;
                a.push(e)
              } return a
          },
          set: function (t, e) {
            for (var n, i, s = t.options, o = w.makeArray(e), r = s.length; r--;)((i = s[r]).selected = -1 < w.inArray(w.valHooks.option.get(i), o)) && (n = !0);
            return n || (t.selectedIndex = -1), o
          }
        }
      }
    }), w.each(["radio", "checkbox"], function () {
      w.valHooks[this] = {
        set: function (t, e) {
          if (Array.isArray(e)) return t.checked = -1 < w.inArray(w(t).val(), e)
        }
      }, p.checkOn || (w.valHooks[this].get = function (t) {
        return null === t.getAttribute("value") ? "on" : t.value
      })
    }), p.focusin = "onfocusin" in t;
    var ye = /^(?:focusinfocus|focusoutblur)$/,
      _e = function (t) {
        t.stopPropagation()
      };
    w.extend(w.event, {
      trigger: function (e, n, i, s) {
        var o, r, a, l, c, h, d, p, v = [i || m],
          y = u.call(e, "type") ? e.type : e,
          _ = u.call(e, "namespace") ? e.namespace.split(".") : [];
        if (r = p = a = i = i || m, 3 !== i.nodeType && 8 !== i.nodeType && !ye.test(y + w.event.triggered) && (-1 < y.indexOf(".") && (y = (_ = y.split(".")).shift(), _.sort()), c = y.indexOf(":") < 0 && "on" + y, (e = e[w.expando] ? e : new w.Event(y, "object" == typeof e && e)).isTrigger = s ? 2 : 3, e.namespace = _.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + _.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : w.makeArray(n, [e]), d = w.event.special[y] || {}, s || !d.trigger || !1 !== d.trigger.apply(i, n))) {
          if (!s && !d.noBubble && !g(i)) {
            for (l = d.delegateType || y, ye.test(l + y) || (r = r.parentNode); r; r = r.parentNode) v.push(r), a = r;
            a === (i.ownerDocument || m) && v.push(a.defaultView || a.parentWindow || t)
          }
          for (o = 0;
            (r = v[o++]) && !e.isPropagationStopped();) p = r, e.type = 1 < o ? l : d.bindType || y, (h = (K.get(r, "events") || Object.create(null))[e.type] && K.get(r, "handle")) && h.apply(r, n), (h = c && r[c]) && h.apply && X(r) && (e.result = h.apply(r, n), !1 === e.result && e.preventDefault());
          return e.type = y, s || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !X(i) || c && f(i[y]) && !g(i) && ((a = i[c]) && (i[c] = null), w.event.triggered = y, e.isPropagationStopped() && p.addEventListener(y, _e), i[y](), e.isPropagationStopped() && p.removeEventListener(y, _e), w.event.triggered = void 0, a && (i[c] = a)), e.result
        }
      },
      simulate: function (t, e, n) {
        var i = w.extend(new w.Event, n, {
          type: t,
          isSimulated: !0
        });
        w.event.trigger(i, null, e)
      }
    }), w.fn.extend({
      trigger: function (t, e) {
        return this.each(function () {
          w.event.trigger(t, e, this)
        })
      },
      triggerHandler: function (t, e) {
        var n = this[0];
        if (n) return w.event.trigger(t, e, n, !0)
      }
    }), p.focusin || w.each({
      focus: "focusin",
      blur: "focusout"
    }, function (t, e) {
      var n = function (t) {
        w.event.simulate(e, t.target, w.event.fix(t))
      };
      w.event.special[e] = {
        setup: function () {
          var i = this.ownerDocument || this.document || this,
            s = K.access(i, e);
          s || i.addEventListener(t, n, !0), K.access(i, e, (s || 0) + 1)
        },
        teardown: function () {
          var i = this.ownerDocument || this.document || this,
            s = K.access(i, e) - 1;
          s ? K.access(i, e, s) : (i.removeEventListener(t, n, !0), K.remove(i, e))
        }
      }
    });
    var be = t.location,
      we = {
        guid: Date.now()
      },
      xe = /\?/;
    w.parseXML = function (e) {
      var n, i;
      if (!e || "string" != typeof e) return null;
      try {
        n = (new t.DOMParser).parseFromString(e, "text/xml")
      } catch (e) {}
      return i = n && n.getElementsByTagName("parsererror")[0], n && !i || w.error("Invalid XML: " + (i ? w.map(i.childNodes, function (t) {
        return t.textContent
      }).join("\n") : e)), n
    };
    var Ce = /\[\]$/,
      Ee = /\r?\n/g,
      Te = /^(?:submit|button|image|reset|file)$/i,
      ke = /^(?:input|select|textarea|keygen)/i;
  
    function Se(t, e, n, i) {
      var s;
      if (Array.isArray(e)) w.each(e, function (e, s) {
        n || Ce.test(t) ? i(t, s) : Se(t + "[" + ("object" == typeof s && null != s ? e : "") + "]", s, n, i)
      });
      else if (n || "object" !== _(e)) i(t, e);
      else
        for (s in e) Se(t + "[" + s + "]", e[s], n, i)
    }
    w.param = function (t, e) {
      var n, i = [],
        s = function (t, e) {
          var n = f(e) ? e() : e;
          i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
        };
      if (null == t) return "";
      if (Array.isArray(t) || t.jquery && !w.isPlainObject(t)) w.each(t, function () {
        s(this.name, this.value)
      });
      else
        for (n in t) Se(n, t[n], e, s);
      return i.join("&")
    }, w.fn.extend({
      serialize: function () {
        return w.param(this.serializeArray())
      },
      serializeArray: function () {
        return this.map(function () {
          var t = w.prop(this, "elements");
          return t ? w.makeArray(t) : this
        }).filter(function () {
          var t = this.type;
          return this.name && !w(this).is(":disabled") && ke.test(this.nodeName) && !Te.test(t) && (this.checked || !dt.test(t))
        }).map(function (t, e) {
          var n = w(this).val();
          return null == n ? null : Array.isArray(n) ? w.map(n, function (t) {
            return {
              name: e.name,
              value: t.replace(Ee, "\r\n")
            }
          }) : {
            name: e.name,
            value: n.replace(Ee, "\r\n")
          }
        }).get()
      }
    });
    var Ae = /%20/g,
      Oe = /#.*$/,
      Le = /([?&])_=[^&]*/,
      Ne = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      De = /^(?:GET|HEAD)$/,
      Pe = /^\/\//,
      $e = {},
      Ie = {},
      Me = "*/".concat("*"),
      je = m.createElement("a");
  
    function He(t) {
      return function (e, n) {
        "string" != typeof e && (n = e, e = "*");
        var i, s = 0,
          o = e.toLowerCase().match(I) || [];
        if (f(n))
          for (; i = o[s++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
      }
    }
  
    function ze(t, e, n, i) {
      var s = {},
        o = t === Ie;
  
      function r(a) {
        var l;
        return s[a] = !0, w.each(t[a] || [], function (t, a) {
          var c = a(e, n, i);
          return "string" != typeof c || o || s[c] ? o ? !(l = c) : void 0 : (e.dataTypes.unshift(c), r(c), !1)
        }), l
      }
      return r(e.dataTypes[0]) || !s["*"] && r("*")
    }
  
    function qe(t, e) {
      var n, i, s = w.ajaxSettings.flatOptions || {};
      for (n in e) void 0 !== e[n] && ((s[n] ? t : i || (i = {}))[n] = e[n]);
      return i && w.extend(!0, t, i), t
    }
    je.href = be.href, w.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: be.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(be.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Me,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": w.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function (t, e) {
        return e ? qe(qe(t, w.ajaxSettings), e) : qe(w.ajaxSettings, t)
      },
      ajaxPrefilter: He($e),
      ajaxTransport: He(Ie),
      ajax: function (e, n) {
        "object" == typeof e && (n = e, e = void 0), n = n || {};
        var i, s, o, r, a, l, c, u, h, d, p = w.ajaxSetup({}, n),
          f = p.context || p,
          g = p.context && (f.nodeType || f.jquery) ? w(f) : w.event,
          v = w.Deferred(),
          y = w.Callbacks("once memory"),
          _ = p.statusCode || {},
          b = {},
          x = {},
          C = "canceled",
          E = {
            readyState: 0,
            getResponseHeader: function (t) {
              var e;
              if (c) {
                if (!r)
                  for (r = {}; e = Ne.exec(o);) r[e[1].toLowerCase() + " "] = (r[e[1].toLowerCase() + " "] || []).concat(e[2]);
                e = r[t.toLowerCase() + " "]
              }
              return null == e ? null : e.join(", ")
            },
            getAllResponseHeaders: function () {
              return c ? o : null
            },
            setRequestHeader: function (t, e) {
              return null == c && (t = x[t.toLowerCase()] = x[t.toLowerCase()] || t, b[t] = e), this
            },
            overrideMimeType: function (t) {
              return null == c && (p.mimeType = t), this
            },
            statusCode: function (t) {
              var e;
              if (t)
                if (c) E.always(t[E.status]);
                else
                  for (e in t) _[e] = [_[e], t[e]];
              return this
            },
            abort: function (t) {
              var e = t || C;
              return i && i.abort(e), T(0, e), this
            }
          };
        if (v.promise(E), p.url = ((e || p.url || be.href) + "").replace(Pe, be.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(I) || [""], null == p.crossDomain) {
          l = m.createElement("a");
          try {
            l.href = p.url, l.href = l.href, p.crossDomain = je.protocol + "//" + je.host != l.protocol + "//" + l.host
          } catch (e) {
            p.crossDomain = !0
          }
        }
        if (p.data && p.processData && "string" != typeof p.data && (p.data = w.param(p.data, p.traditional)), ze($e, p, n, E), c) return E;
        for (h in (u = w.event && p.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !De.test(p.type), s = p.url.replace(Oe, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Ae, "+")) : (d = p.url.slice(s.length), p.data && (p.processData || "string" == typeof p.data) && (s += (xe.test(s) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (s = s.replace(Le, "$1"), d = (xe.test(s) ? "&" : "?") + "_=" + we.guid++ + d), p.url = s + d), p.ifModified && (w.lastModified[s] && E.setRequestHeader("If-Modified-Since", w.lastModified[s]), w.etag[s] && E.setRequestHeader("If-None-Match", w.etag[s])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && E.setRequestHeader("Content-Type", p.contentType), E.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Me + "; q=0.01" : "") : p.accepts["*"]), p.headers) E.setRequestHeader(h, p.headers[h]);
        if (p.beforeSend && (!1 === p.beforeSend.call(f, E, p) || c)) return E.abort();
        if (C = "abort", y.add(p.complete), E.done(p.success), E.fail(p.error), i = ze(Ie, p, n, E)) {
          if (E.readyState = 1, u && g.trigger("ajaxSend", [E, p]), c) return E;
          p.async && 0 < p.timeout && (a = t.setTimeout(function () {
            E.abort("timeout")
          }, p.timeout));
          try {
            c = !1, i.send(b, T)
          } catch (e) {
            if (c) throw e;
            T(-1, e)
          }
        } else T(-1, "No Transport");
  
        function T(e, n, r, l) {
          var h, d, m, b, x, C = n;
          c || (c = !0, a && t.clearTimeout(a), i = void 0, o = l || "", E.readyState = 0 < e ? 4 : 0, h = 200 <= e && e < 300 || 304 === e, r && (b = function (t, e, n) {
            for (var i, s, o, r, a = t.contents, l = t.dataTypes;
              "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
            if (i)
              for (s in a)
                if (a[s] && a[s].test(i)) {
                  l.unshift(s);
                  break
                } if (l[0] in n) o = l[0];
            else {
              for (s in n) {
                if (!l[0] || t.converters[s + " " + l[0]]) {
                  o = s;
                  break
                }
                r || (r = s)
              }
              o = o || r
            }
            if (o) return o !== l[0] && l.unshift(o), n[o]
          }(p, E, r)), !h && -1 < w.inArray("script", p.dataTypes) && w.inArray("json", p.dataTypes) < 0 && (p.converters["text script"] = function () {}), b = function (t, e, n, i) {
            var s, o, r, a, l, c = {},
              u = t.dataTypes.slice();
            if (u[1])
              for (r in t.converters) c[r.toLowerCase()] = t.converters[r];
            for (o = u.shift(); o;)
              if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = u.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
              if (!(r = c[l + " " + o] || c["* " + o]))
                for (s in c)
                  if ((a = s.split(" "))[1] === o && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                    !0 === r ? r = c[s] : !0 !== c[s] && (o = a[0], u.unshift(a[1]));
                    break
                  } if (!0 !== r)
                if (r && t.throws) e = r(e);
                else try {
                  e = r(e)
                } catch (t) {
                  return {
                    state: "parsererror",
                    error: r ? t : "No conversion from " + l + " to " + o
                  }
                }
            }
            return {
              state: "success",
              data: e
            }
          }(p, b, E, h), h ? (p.ifModified && ((x = E.getResponseHeader("Last-Modified")) && (w.lastModified[s] = x), (x = E.getResponseHeader("etag")) && (w.etag[s] = x)), 204 === e || "HEAD" === p.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, d = b.data, h = !(m = b.error))) : (m = C, !e && C || (C = "error", e < 0 && (e = 0))), E.status = e, E.statusText = (n || C) + "", h ? v.resolveWith(f, [d, C, E]) : v.rejectWith(f, [E, C, m]), E.statusCode(_), _ = void 0, u && g.trigger(h ? "ajaxSuccess" : "ajaxError", [E, p, h ? d : m]), y.fireWith(f, [E, C]), u && (g.trigger("ajaxComplete", [E, p]), --w.active || w.event.trigger("ajaxStop")))
        }
        return E
      },
      getJSON: function (t, e, n) {
        return w.get(t, e, n, "json")
      },
      getScript: function (t, e) {
        return w.get(t, void 0, e, "script")
      }
    }), w.each(["get", "post"], function (t, e) {
      w[e] = function (t, n, i, s) {
        return f(n) && (s = s || i, i = n, n = void 0), w.ajax(w.extend({
          url: t,
          type: e,
          dataType: s,
          data: n,
          success: i
        }, w.isPlainObject(t) && t))
      }
    }), w.ajaxPrefilter(function (t) {
      var e;
      for (e in t.headers) "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "")
    }), w._evalUrl = function (t, e, n) {
      return w.ajax({
        url: t,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: {
          "text script": function () {}
        },
        dataFilter: function (t) {
          w.globalEval(t, e, n)
        }
      })
    }, w.fn.extend({
      wrapAll: function (t) {
        var e;
        return this[0] && (f(t) && (t = t.call(this[0])), e = w(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
          for (var t = this; t.firstElementChild;) t = t.firstElementChild;
          return t
        }).append(this)), this
      },
      wrapInner: function (t) {
        return f(t) ? this.each(function (e) {
          w(this).wrapInner(t.call(this, e))
        }) : this.each(function () {
          var e = w(this),
            n = e.contents();
          n.length ? n.wrapAll(t) : e.append(t)
        })
      },
      wrap: function (t) {
        var e = f(t);
        return this.each(function (n) {
          w(this).wrapAll(e ? t.call(this, n) : t)
        })
      },
      unwrap: function (t) {
        return this.parent(t).not("body").each(function () {
          w(this).replaceWith(this.childNodes)
        }), this
      }
    }), w.expr.pseudos.hidden = function (t) {
      return !w.expr.pseudos.visible(t)
    }, w.expr.pseudos.visible = function (t) {
      return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, w.ajaxSettings.xhr = function () {
      try {
        return new t.XMLHttpRequest
      } catch (t) {}
    };
    var Re = {
        0: 200,
        1223: 204
      },
      Be = w.ajaxSettings.xhr();
    p.cors = !!Be && "withCredentials" in Be, p.ajax = Be = !!Be, w.ajaxTransport(function (e) {
      var n, i;
      if (p.cors || Be && !e.crossDomain) return {
        send: function (s, o) {
          var r, a = e.xhr();
          if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
            for (r in e.xhrFields) a[r] = e.xhrFields[r];
          for (r in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest"), s) a.setRequestHeader(r, s[r]);
          n = function (t) {
            return function () {
              n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Re[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                binary: a.response
              } : {
                text: a.responseText
              }, a.getAllResponseHeaders()))
            }
          }, a.onload = n(), i = a.onerror = a.ontimeout = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
            4 === a.readyState && t.setTimeout(function () {
              n && i()
            })
          }, n = n("abort");
          try {
            a.send(e.hasContent && e.data || null)
          } catch (s) {
            if (n) throw s
          }
        },
        abort: function () {
          n && n()
        }
      }
    }), w.ajaxPrefilter(function (t) {
      t.crossDomain && (t.contents.script = !1)
    }), w.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function (t) {
          return w.globalEval(t), t
        }
      }
    }), w.ajaxPrefilter("script", function (t) {
      void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), w.ajaxTransport("script", function (t) {
      var e, n;
      if (t.crossDomain || t.scriptAttrs) return {
        send: function (i, s) {
          e = w("<script>").attr(t.scriptAttrs || {}).prop({
            charset: t.scriptCharset,
            src: t.url
          }).on("load error", n = function (t) {
            e.remove(), n = null, t && s("error" === t.type ? 404 : 200, t.type)
          }), m.head.appendChild(e[0])
        },
        abort: function () {
          n && n()
        }
      }
    });
    var We, Fe = [],
      Ue = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var t = Fe.pop() || w.expando + "_" + we.guid++;
        return this[t] = !0, t
      }
    }), w.ajaxPrefilter("json jsonp", function (e, n, i) {
      var s, o, r, a = !1 !== e.jsonp && (Ue.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ue.test(e.data) && "data");
      if (a || "jsonp" === e.dataTypes[0]) return s = e.jsonpCallback = f(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ue, "$1" + s) : !1 !== e.jsonp && (e.url += (xe.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function () {
        return r || w.error(s + " was not called"), r[0]
      }, e.dataTypes[0] = "json", o = t[s], t[s] = function () {
        r = arguments
      }, i.always(function () {
        void 0 === o ? w(t).removeProp(s) : t[s] = o, e[s] && (e.jsonpCallback = n.jsonpCallback, Fe.push(s)), r && f(o) && o(r[0]), r = o = void 0
      }), "script"
    }), p.createHTMLDocument = ((We = m.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === We.childNodes.length), w.parseHTML = function (t, e, n) {
      return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (p.createHTMLDocument ? ((i = (e = m.implementation.createHTMLDocument("")).createElement("base")).href = m.location.href, e.head.appendChild(i)) : e = m), o = !n && [], (s = A.exec(t)) ? [e.createElement(s[1])] : (s = _t([t], e, o), o && o.length && w(o).remove(), w.merge([], s.childNodes)));
      var i, s, o
    }, w.fn.load = function (t, e, n) {
      var i, s, o, r = this,
        a = t.indexOf(" ");
      return -1 < a && (i = fe(t.slice(a)), t = t.slice(0, a)), f(e) ? (n = e, e = void 0) : e && "object" == typeof e && (s = "POST"), 0 < r.length && w.ajax({
        url: t,
        type: s || "GET",
        dataType: "html",
        data: e
      }).done(function (t) {
        o = arguments, r.html(i ? w("<div>").append(w.parseHTML(t)).find(i) : t)
      }).always(n && function (t, e) {
        r.each(function () {
          n.apply(this, o || [t.responseText, e, t])
        })
      }), this
    }, w.expr.pseudos.animated = function (t) {
      return w.grep(w.timers, function (e) {
        return t === e.elem
      }).length
    }, w.offset = {
      setOffset: function (t, e, n) {
        var i, s, o, r, a, l, c = w.css(t, "position"),
          u = w(t),
          h = {};
        "static" === c && (t.style.position = "relative"), a = u.offset(), o = w.css(t, "top"), l = w.css(t, "left"), ("absolute" === c || "fixed" === c) && -1 < (o + l).indexOf("auto") ? (r = (i = u.position()).top, s = i.left) : (r = parseFloat(o) || 0, s = parseFloat(l) || 0), f(e) && (e = e.call(t, n, w.extend({}, a))), null != e.top && (h.top = e.top - a.top + r), null != e.left && (h.left = e.left - a.left + s), "using" in e ? e.using.call(t, h) : u.css(h)
      }
    }, w.fn.extend({
      offset: function (t) {
        if (arguments.length) return void 0 === t ? this : this.each(function (e) {
          w.offset.setOffset(this, t, e)
        });
        var e, n, i = this[0];
        return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
          top: e.top + n.pageYOffset,
          left: e.left + n.pageXOffset
        }) : {
          top: 0,
          left: 0
        } : void 0
      },
      position: function () {
        if (this[0]) {
          var t, e, n, i = this[0],
            s = {
              top: 0,
              left: 0
            };
          if ("fixed" === w.css(i, "position")) e = i.getBoundingClientRect();
          else {
            for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === w.css(t, "position");) t = t.parentNode;
            t && t !== i && 1 === t.nodeType && ((s = w(t).offset()).top += w.css(t, "borderTopWidth", !0), s.left += w.css(t, "borderLeftWidth", !0))
          }
          return {
            top: e.top - s.top - w.css(i, "marginTop", !0),
            left: e.left - s.left - w.css(i, "marginLeft", !0)
          }
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (var t = this.offsetParent; t && "static" === w.css(t, "position");) t = t.offsetParent;
          return t || it
        })
      }
    }), w.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function (t, e) {
      var n = "pageYOffset" === e;
      w.fn[t] = function (i) {
        return B(this, function (t, i, s) {
          var o;
          if (g(t) ? o = t : 9 === t.nodeType && (o = t.defaultView), void 0 === s) return o ? o[e] : t[i];
          o ? o.scrollTo(n ? o.pageXOffset : s, n ? s : o.pageYOffset) : t[i] = s
        }, t, i, arguments.length)
      }
    }), w.each(["top", "left"], function (t, e) {
      w.cssHooks[e] = qt(p.pixelPosition, function (t, n) {
        if (n) return n = zt(t, e), It.test(n) ? w(t).position()[e] + "px" : n
      })
    }), w.each({
      Height: "height",
      Width: "width"
    }, function (t, e) {
      w.each({
        padding: "inner" + t,
        content: e,
        "": "outer" + t
      }, function (n, i) {
        w.fn[i] = function (s, o) {
          var r = arguments.length && (n || "boolean" != typeof s),
            a = n || (!0 === s || !0 === o ? "margin" : "border");
          return B(this, function (e, n, s) {
            var o;
            return g(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === s ? w.css(e, n, a) : w.style(e, n, s, a)
          }, e, r ? s : void 0, r)
        }
      })
    }), w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
      w.fn[e] = function (t) {
        return this.on(e, t)
      }
    }), w.fn.extend({
      bind: function (t, e, n) {
        return this.on(t, null, e, n)
      },
      unbind: function (t, e) {
        return this.off(t, null, e)
      },
      delegate: function (t, e, n, i) {
        return this.on(e, t, n, i)
      },
      undelegate: function (t, e, n) {
        return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
      },
      hover: function (t, e) {
        return this.mouseenter(t).mouseleave(e || t)
      }
    }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
      w.fn[e] = function (t, n) {
        return 0 < arguments.length ? this.on(e, null, t, n) : this.trigger(e)
      }
    });
    var Ve = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    w.proxy = function (t, e) {
      var n, i, o;
      if ("string" == typeof e && (n = t[e], e = t, t = n), f(t)) return i = s.call(arguments, 2), (o = function () {
        return t.apply(e || this, i.concat(s.call(arguments)))
      }).guid = t.guid = t.guid || w.guid++, o
    }, w.holdReady = function (t) {
      t ? w.readyWait++ : w.ready(!0)
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = S, w.isFunction = f, w.isWindow = g, w.camelCase = V, w.type = _, w.now = Date.now, w.isNumeric = function (t) {
      var e = w.type(t);
      return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
    }, w.trim = function (t) {
      return null == t ? "" : (t + "").replace(Ve, "")
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
      return w
    });
    var Xe = t.jQuery,
      Qe = t.$;
    return w.noConflict = function (e) {
      return t.$ === w && (t.$ = Qe), e && t.jQuery === w && (t.jQuery = Xe), w
    }, void 0 === e && (t.jQuery = t.$ = w), w
  }),
  function (t, e, n, i) {
    function s(e, n) {
      this.settings = null, this.options = t.extend({}, s.Defaults, n), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
        time: null,
        target: null,
        pointer: null,
        stage: {
          start: null,
          current: null
        },
        direction: null
      }, this._states = {
        current: {},
        tags: {
          initializing: ["busy"],
          animating: ["busy"],
          dragging: ["interacting"]
        }
      }, t.each(["onResize", "onThrottledResize"], t.proxy(function (e, n) {
        this._handlers[n] = t.proxy(this[n], this)
      }, this)), t.each(s.Plugins, t.proxy(function (t, e) {
        this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
      }, this)), t.each(s.Workers, t.proxy(function (e, n) {
        this._pipe.push({
          filter: n.filter,
          run: t.proxy(n.run, this)
        })
      }, this)), this.setup(), this.initialize()
    }
    s.Defaults = {
      items: 3,
      loop: !1,
      center: !1,
      rewind: !1,
      checkVisibility: !0,
      mouseDrag: !0,
      touchDrag: !0,
      pullDrag: !0,
      freeDrag: !1,
      margin: 0,
      stagePadding: 0,
      merge: !1,
      mergeFit: !0,
      autoWidth: !1,
      startPosition: 0,
      rtl: !1,
      smartSpeed: 250,
      fluidSpeed: !1,
      dragEndSpeed: !1,
      responsive: {},
      responsiveRefreshRate: 200,
      responsiveBaseElement: e,
      fallbackEasing: "swing",
      slideTransition: "",
      info: !1,
      nestedItemSelector: !1,
      itemElement: "div",
      stageElement: "div",
      refreshClass: "owl-refresh",
      loadedClass: "owl-loaded",
      loadingClass: "owl-loading",
      rtlClass: "owl-rtl",
      responsiveClass: "owl-responsive",
      dragClass: "owl-drag",
      itemClass: "owl-item",
      stageClass: "owl-stage",
      stageOuterClass: "owl-stage-outer",
      grabClass: "owl-grab"
    }, s.Width = {
      Default: "default",
      Inner: "inner",
      Outer: "outer"
    }, s.Type = {
      Event: "event",
      State: "state"
    }, s.Plugins = {}, s.Workers = [{
      filter: ["width", "settings"],
      run: function () {
        this._width = this.$element.width()
      }
    }, {
      filter: ["width", "items", "settings"],
      run: function (t) {
        t.current = this._items && this._items[this.relative(this._current)]
      }
    }, {
      filter: ["items", "settings"],
      run: function () {
        this.$stage.children(".cloned").remove()
      }
    }, {
      filter: ["width", "items", "settings"],
      run: function (t) {
        var e = this.settings.margin || "",
          n = !this.settings.autoWidth,
          i = this.settings.rtl,
          s = {
            width: "auto",
            "margin-left": i ? e : "",
            "margin-right": i ? "" : e
          };
        !n && this.$stage.children().css(s), t.css = s
      }
    }, {
      filter: ["width", "items", "settings"],
      run: function (t) {
        var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
          n = null,
          i = this._items.length,
          s = !this.settings.autoWidth,
          o = [];
        for (t.items = {
            merge: !1,
            width: e
          }; i--;) n = this._mergers[i], n = this.settings.mergeFit && Math.min(n, this.settings.items) || n, t.items.merge = n > 1 || t.items.merge, o[i] = s ? e * n : this._items[i].width();
        this._widths = o
      }
    }, {
      filter: ["items", "settings"],
      run: function () {
        var e = [],
          n = this._items,
          i = this.settings,
          s = Math.max(2 * i.items, 4),
          o = 2 * Math.ceil(n.length / 2),
          r = i.loop && n.length ? i.rewind ? s : Math.max(s, o) : 0,
          a = "",
          l = "";
        for (r /= 2; r > 0;) e.push(this.normalize(e.length / 2, !0)), a += n[e[e.length - 1]][0].outerHTML, e.push(this.normalize(n.length - 1 - (e.length - 1) / 2, !0)), l = n[e[e.length - 1]][0].outerHTML + l, r -= 1;
        this._clones = e, t(a).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage)
      }
    }, {
      filter: ["width", "items", "settings"],
      run: function () {
        for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, n = -1, i = 0, s = 0, o = []; ++n < e;) i = o[n - 1] || 0, s = this._widths[this.relative(n)] + this.settings.margin, o.push(i + s * t);
        this._coordinates = o
      }
    }, {
      filter: ["width", "items", "settings"],
      run: function () {
        var t = this.settings.stagePadding,
          e = this._coordinates,
          n = {
            width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
            "padding-left": t || "",
            "padding-right": t || ""
          };
        this.$stage.css(n)
      }
    }, {
      filter: ["width", "items", "settings"],
      run: function (t) {
        var e = this._coordinates.length,
          n = !this.settings.autoWidth,
          i = this.$stage.children();
        if (n && t.items.merge)
          for (; e--;) t.css.width = this._widths[this.relative(e)], i.eq(e).css(t.css);
        else n && (t.css.width = t.items.width, i.css(t.css))
      }
    }, {
      filter: ["items"],
      run: function () {
        this._coordinates.length < 1 && this.$stage.removeAttr("style")
      }
    }, {
      filter: ["width", "items", "settings"],
      run: function (t) {
        t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
      }
    }, {
      filter: ["position"],
      run: function () {
        this.animate(this.coordinates(this._current))
      }
    }, {
      filter: ["width", "position", "items", "settings"],
      run: function () {
        var t, e, n, i, s = this.settings.rtl ? 1 : -1,
          o = 2 * this.settings.stagePadding,
          r = this.coordinates(this.current()) + o,
          a = r + this.width() * s,
          l = [];
        for (n = 0, i = this._coordinates.length; n < i; n++) t = this._coordinates[n - 1] || 0, e = Math.abs(this._coordinates[n]) + o * s, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && l.push(n);
        this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
      }
    }], s.prototype.initializeStage = function () {
      this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ">", {
        class: this.settings.stageClass
      }).wrap(t("<div/>", {
        class: this.settings.stageOuterClass
      })), this.$element.append(this.$stage.parent()))
    }, s.prototype.initializeItems = function () {
      var e = this.$element.find(".owl-item");
      if (e.length) return this._items = e.get().map(function (e) {
        return t(e)
      }), this._mergers = this._items.map(function () {
        return 1
      }), void this.refresh();
      this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
    }, s.prototype.initialize = function () {
      var t, e, n;
      (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) && (t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : void 0, n = this.$element.children(e).width(), t.length && n <= 0 && this.preloadAutoWidthImages(t));
      this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, s.prototype.isVisible = function () {
      return !this.settings.checkVisibility || this.$element.is(":visible")
    }, s.prototype.setup = function () {
      var e = this.viewport(),
        n = this.options.responsive,
        i = -1,
        s = null;
      n ? (t.each(n, function (t) {
        t <= e && t > i && (i = Number(t))
      }), "function" == typeof (s = t.extend({}, this.options, n[i])).stagePadding && (s.stagePadding = s.stagePadding()), delete s.responsive, s.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) : s = t.extend({}, this.options), this.trigger("change", {
        property: {
          name: "settings",
          value: s
        }
      }), this._breakpoint = i, this.settings = s, this.invalidate("settings"), this.trigger("changed", {
        property: {
          name: "settings",
          value: this.settings
        }
      })
    }, s.prototype.optionsLogic = function () {
      this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, s.prototype.prepare = function (e) {
      var n = this.trigger("prepare", {
        content: e
      });
      return n.data || (n.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {
        content: n.data
      }), n.data
    }, s.prototype.update = function () {
      for (var e = 0, n = this._pipe.length, i = t.proxy(function (t) {
          return this[t]
        }, this._invalidated), s = {}; e < n;)(this._invalidated.all || t.grep(this._pipe[e].filter, i).length > 0) && this._pipe[e].run(s), e++;
      this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, s.prototype.width = function (t) {
      switch (t = t || s.Width.Default) {
        case s.Width.Inner:
        case s.Width.Outer:
          return this._width;
        default:
          return this._width - 2 * this.settings.stagePadding + this.settings.margin
      }
    }, s.prototype.refresh = function () {
      this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, s.prototype.onThrottledResize = function () {
      e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, s.prototype.onResize = function () {
      return !!this._items.length && (this._width !== this.$element.width() && (!!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
    }, s.prototype.registerEventHandlers = function () {
      t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
        return !1
      })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
    }, s.prototype.onDragStart = function (e) {
      var i = null;
      3 !== e.which && (t.support.transform ? i = {
        x: (i = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === i.length ? 12 : 4],
        y: i[16 === i.length ? 13 : 5]
      } : (i = this.$stage.position(), i = {
        x: this.settings.rtl ? i.left + this.$stage.width() - this.width() + this.settings.margin : i.left,
        y: i.top
      }), this.is("animating") && (t.support.transform ? this.animate(i.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = i, this._drag.stage.current = i, this._drag.pointer = this.pointer(e), t(n).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(n).one("mousemove.owl.core touchmove.owl.core", t.proxy(function (e) {
        var i = this.difference(this._drag.pointer, this.pointer(e));
        t(n).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(i.x) < Math.abs(i.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
      }, this)))
    }, s.prototype.onDragMove = function (t) {
      var e = null,
        n = null,
        i = null,
        s = this.difference(this._drag.pointer, this.pointer(t)),
        o = this.difference(this._drag.stage.start, s);
      this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), n = this.coordinates(this.maximum() + 1) - e, o.x = ((o.x - e) % n + n) % n + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), n = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), i = this.settings.pullDrag ? -1 * s.x / 5 : 0, o.x = Math.max(Math.min(o.x, e + i), n + i)), this._drag.stage.current = o, this.animate(o.x))
    }, s.prototype.onDragEnd = function (e) {
      var i = this.difference(this._drag.pointer, this.pointer(e)),
        s = this._drag.stage.current,
        o = i.x > 0 ^ this.settings.rtl ? "left" : "right";
      t(n).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== i.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(s.x, 0 !== i.x ? o : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = o, (Math.abs(i.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
        return !1
      })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, s.prototype.closest = function (e, n) {
      var i = -1,
        s = this.width(),
        o = this.coordinates();
      return this.settings.freeDrag || t.each(o, t.proxy(function (t, r) {
        return "left" === n && e > r - 30 && e < r + 30 ? i = t : "right" === n && e > r - s - 30 && e < r - s + 30 ? i = t + 1 : this.op(e, "<", r) && this.op(e, ">", void 0 !== o[t + 1] ? o[t + 1] : r - s) && (i = "left" === n ? t + 1 : t), -1 === i
      }, this)), this.settings.loop || (this.op(e, ">", o[this.minimum()]) ? i = e = this.minimum() : this.op(e, "<", o[this.maximum()]) && (i = e = this.maximum())), i
    }, s.prototype.animate = function (e) {
      var n = this.speed() > 0;
      this.is("animating") && this.onTransitionEnd(), n && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
        transform: "translate3d(" + e + "px,0px,0px)",
        transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
      }) : n ? this.$stage.animate({
        left: e + "px"
      }, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({
        left: e + "px"
      })
    }, s.prototype.is = function (t) {
      return this._states.current[t] && this._states.current[t] > 0
    }, s.prototype.current = function (t) {
      if (void 0 === t) return this._current;
      if (0 !== this._items.length) {
        if (t = this.normalize(t), this._current !== t) {
          var e = this.trigger("change", {
            property: {
              name: "position",
              value: t
            }
          });
          void 0 !== e.data && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
            property: {
              name: "position",
              value: this._current
            }
          })
        }
        return this._current
      }
    }, s.prototype.invalidate = function (e) {
      return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, function (t, e) {
        return e
      })
    }, s.prototype.reset = function (t) {
      void 0 !== (t = this.normalize(t)) && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, s.prototype.normalize = function (t, e) {
      var n = this._items.length,
        i = e ? 0 : this._clones.length;
      return !this.isNumeric(t) || n < 1 ? t = void 0 : (t < 0 || t >= n + i) && (t = ((t - i / 2) % n + n) % n + i / 2), t
    }, s.prototype.relative = function (t) {
      return t -= this._clones.length / 2, this.normalize(t, !0)
    }, s.prototype.maximum = function (t) {
      var e, n, i, s = this.settings,
        o = this._coordinates.length;
      if (s.loop) o = this._clones.length / 2 + this._items.length - 1;
      else if (s.autoWidth || s.merge) {
        if (e = this._items.length)
          for (n = this._items[--e].width(), i = this.$element.width(); e-- && !((n += this._items[e].width() + this.settings.margin) > i););
        o = e + 1
      } else o = s.center ? this._items.length - 1 : this._items.length - s.items;
      return t && (o -= this._clones.length / 2), Math.max(o, 0)
    }, s.prototype.minimum = function (t) {
      return t ? 0 : this._clones.length / 2
    }, s.prototype.items = function (t) {
      return void 0 === t ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    }, s.prototype.mergers = function (t) {
      return void 0 === t ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    }, s.prototype.clones = function (e) {
      var n = this._clones.length / 2,
        i = n + this._items.length,
        s = function (t) {
          return t % 2 == 0 ? i + t / 2 : n - (t + 1) / 2
        };
      return void 0 === e ? t.map(this._clones, function (t, e) {
        return s(e)
      }) : t.map(this._clones, function (t, n) {
        return t === e ? s(n) : null
      })
    }, s.prototype.speed = function (t) {
      return void 0 !== t && (this._speed = t), this._speed
    }, s.prototype.coordinates = function (e) {
      var n, i = 1,
        s = e - 1;
      return void 0 === e ? t.map(this._coordinates, t.proxy(function (t, e) {
        return this.coordinates(e)
      }, this)) : (this.settings.center ? (this.settings.rtl && (i = -1, s = e + 1), n = this._coordinates[e], n += (this.width() - n + (this._coordinates[s] || 0)) / 2 * i) : n = this._coordinates[s] || 0, n = Math.ceil(n))
    }, s.prototype.duration = function (t, e, n) {
      return 0 === n ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(n || this.settings.smartSpeed)
    }, s.prototype.to = function (t, e) {
      var n = this.current(),
        i = null,
        s = t - this.relative(n),
        o = (s > 0) - (s < 0),
        r = this._items.length,
        a = this.minimum(),
        l = this.maximum();
      this.settings.loop ? (!this.settings.rewind && Math.abs(s) > r / 2 && (s += -1 * o * r), (i = (((t = n + s) - a) % r + r) % r + a) !== t && i - s <= l && i - s > 0 && (n = i - s, t = i, this.reset(n))) : t = this.settings.rewind ? (t % (l += 1) + l) % l : Math.max(a, Math.min(l, t)), this.speed(this.duration(n, t, e)), this.current(t), this.isVisible() && this.update()
    }, s.prototype.next = function (t) {
      t = t || !1, this.to(this.relative(this.current()) + 1, t)
    }, s.prototype.prev = function (t) {
      t = t || !1, this.to(this.relative(this.current()) - 1, t)
    }, s.prototype.onTransitionEnd = function (t) {
      if (void 0 !== t && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
      this.leave("animating"), this.trigger("translated")
    }, s.prototype.viewport = function () {
      var i;
      return this.options.responsiveBaseElement !== e ? i = t(this.options.responsiveBaseElement).width() : e.innerWidth ? i = e.innerWidth : n.documentElement && n.documentElement.clientWidth ? i = n.documentElement.clientWidth : console.warn("Can not detect viewport width."), i
    }, s.prototype.replace = function (e) {
      this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function () {
        return 1 === this.nodeType
      }).each(t.proxy(function (t, e) {
        e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
      }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, s.prototype.add = function (e, n) {
      var i = this.relative(this._current);
      n = void 0 === n ? this._items.length : this.normalize(n, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", {
        content: e,
        position: n
      }), e = this.prepare(e), 0 === this._items.length || n === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[n - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[n].before(e), this._items.splice(n, 0, e), this._mergers.splice(n, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[i] && this.reset(this._items[i].index()), this.invalidate("items"), this.trigger("added", {
        content: e,
        position: n
      })
    }, s.prototype.remove = function (t) {
      void 0 !== (t = this.normalize(t, !0)) && (this.trigger("remove", {
        content: this._items[t],
        position: t
      }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
        content: null,
        position: t
      }))
    }, s.prototype.preloadAutoWidthImages = function (e) {
      e.each(t.proxy(function (e, n) {
        this.enter("pre-loading"), n = t(n), t(new Image).one("load", t.proxy(function (t) {
          n.attr("src", t.target.src), n.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
        }, this)).attr("src", n.attr("src") || n.attr("data-src") || n.attr("data-src-retina"))
      }, this))
    }, s.prototype.destroy = function () {
      for (var i in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(n).off(".owl.core"), !1 !== this.settings.responsive && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[i].destroy();
      this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, s.prototype.op = function (t, e, n) {
      var i = this.settings.rtl;
      switch (e) {
        case "<":
          return i ? t > n : t < n;
        case ">":
          return i ? t < n : t > n;
        case ">=":
          return i ? t <= n : t >= n;
        case "<=":
          return i ? t >= n : t <= n
      }
    }, s.prototype.on = function (t, e, n, i) {
      t.addEventListener ? t.addEventListener(e, n, i) : t.attachEvent && t.attachEvent("on" + e, n)
    }, s.prototype.off = function (t, e, n, i) {
      t.removeEventListener ? t.removeEventListener(e, n, i) : t.detachEvent && t.detachEvent("on" + e, n)
    }, s.prototype.trigger = function (e, n, i, o, r) {
      var a = {
          item: {
            count: this._items.length,
            index: this.current()
          }
        },
        l = t.camelCase(t.grep(["on", e, i], function (t) {
          return t
        }).join("-").toLowerCase()),
        c = t.Event([e, "owl", i || "carousel"].join(".").toLowerCase(), t.extend({
          relatedTarget: this
        }, a, n));
      return this._supress[e] || (t.each(this._plugins, function (t, e) {
        e.onTrigger && e.onTrigger(c)
      }), this.register({
        type: s.Type.Event,
        name: e
      }), this.$element.trigger(c), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, c)), c
    }, s.prototype.enter = function (e) {
      t.each([e].concat(this._states.tags[e] || []), t.proxy(function (t, e) {
        void 0 === this._states.current[e] && (this._states.current[e] = 0), this._states.current[e]++
      }, this))
    }, s.prototype.leave = function (e) {
      t.each([e].concat(this._states.tags[e] || []), t.proxy(function (t, e) {
        this._states.current[e]--
      }, this))
    }, s.prototype.register = function (e) {
      if (e.type === s.Type.Event) {
        if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
          var n = t.event.special[e.name]._default;
          t.event.special[e.name]._default = function (t) {
            return !n || !n.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : n.apply(this, arguments)
          }, t.event.special[e.name].owl = !0
        }
      } else e.type === s.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function (n, i) {
        return t.inArray(n, this._states.tags[e.name]) === i
      }, this)))
    }, s.prototype.suppress = function (e) {
      t.each(e, t.proxy(function (t, e) {
        this._supress[e] = !0
      }, this))
    }, s.prototype.release = function (e) {
      t.each(e, t.proxy(function (t, e) {
        delete this._supress[e]
      }, this))
    }, s.prototype.pointer = function (t) {
      var n = {
        x: null,
        y: null
      };
      return (t = (t = t.originalEvent || t || e.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (n.x = t.pageX, n.y = t.pageY) : (n.x = t.clientX, n.y = t.clientY), n
    }, s.prototype.isNumeric = function (t) {
      return !isNaN(parseFloat(t))
    }, s.prototype.difference = function (t, e) {
      return {
        x: t.x - e.x,
        y: t.y - e.y
      }
    }, t.fn.owlCarousel = function (e) {
      var n = Array.prototype.slice.call(arguments, 1);
      return this.each(function () {
        var i = t(this),
          o = i.data("owl.carousel");
        o || (o = new s(this, "object" == typeof e && e), i.data("owl.carousel", o), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (e, n) {
          o.register({
            type: s.Type.Event,
            name: n
          }), o.$element.on(n + ".owl.carousel.core", t.proxy(function (t) {
            t.namespace && t.relatedTarget !== this && (this.suppress([n]), o[n].apply(this, [].slice.call(arguments, 1)), this.release([n]))
          }, o))
        })), "string" == typeof e && "_" !== e.charAt(0) && o[e].apply(o, n)
      })
    }, t.fn.owlCarousel.Constructor = s
  }(window.Zepto || window.jQuery, window, document),
  function (t, e, n, i) {
    var s = function (e) {
      this._core = e, this._interval = null, this._visible = null, this._handlers = {
        "initialized.owl.carousel": t.proxy(function (t) {
          t.namespace && this._core.settings.autoRefresh && this.watch()
        }, this)
      }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    s.Defaults = {
      autoRefresh: !0,
      autoRefreshInterval: 500
    }, s.prototype.watch = function () {
      this._interval || (this._visible = this._core.isVisible(), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, s.prototype.refresh = function () {
      this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, s.prototype.destroy = function () {
      var t, n;
      for (t in e.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]);
      for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = s
  }(window.Zepto || window.jQuery, window, document),
  function (t, e, n, i) {
    var s = function (e) {
      this._core = e, this._loaded = [], this._handlers = {
        "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function (e) {
          if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type)) {
            var n = this._core.settings,
              i = n.center && Math.ceil(n.items / 2) || n.items,
              s = n.center && -1 * i || 0,
              o = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + s,
              r = this._core.clones().length,
              a = t.proxy(function (t, e) {
                this.load(e)
              }, this);
            for (n.lazyLoadEager > 0 && (i += n.lazyLoadEager, n.loop && (o -= n.lazyLoadEager, i++)); s++ < i;) this.load(r / 2 + this._core.relative(o)), r && t.each(this._core.clones(this._core.relative(o)), a), o++
          }
        }, this)
      }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    s.Defaults = {
      lazyLoad: !1,
      lazyLoadEager: 0
    }, s.prototype.load = function (n) {
      var i = this._core.$stage.children().eq(n),
        s = i && i.find(".owl-lazy");
      !s || t.inArray(i.get(0), this._loaded) > -1 || (s.each(t.proxy(function (n, i) {
        var s, o = t(i),
          r = e.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src") || o.attr("data-srcset");
        this._core.trigger("load", {
          element: o,
          url: r
        }, "lazy"), o.is("img") ? o.one("load.owl.lazy", t.proxy(function () {
          o.css("opacity", 1), this._core.trigger("loaded", {
            element: o,
            url: r
          }, "lazy")
        }, this)).attr("src", r) : o.is("source") ? o.one("load.owl.lazy", t.proxy(function () {
          this._core.trigger("loaded", {
            element: o,
            url: r
          }, "lazy")
        }, this)).attr("srcset", r) : ((s = new Image).onload = t.proxy(function () {
          o.css({
            "background-image": 'url("' + r + '")',
            opacity: "1"
          }), this._core.trigger("loaded", {
            element: o,
            url: r
          }, "lazy")
        }, this), s.src = r)
      }, this)), this._loaded.push(i.get(0)))
    }, s.prototype.destroy = function () {
      var t, e;
      for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
      for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Lazy = s
  }(window.Zepto || window.jQuery, window, document),
  function (t, e, n, i) {
    var s = function (n) {
      this._core = n, this._previousHeight = null, this._handlers = {
        "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function (t) {
          t.namespace && this._core.settings.autoHeight && this.update()
        }, this),
        "changed.owl.carousel": t.proxy(function (t) {
          t.namespace && this._core.settings.autoHeight && "position" === t.property.name && this.update()
        }, this),
        "loaded.owl.lazy": t.proxy(function (t) {
          t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
        }, this)
      }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
      var i = this;
      t(e).on("load", function () {
        i._core.settings.autoHeight && i.update()
      }), t(e).resize(function () {
        i._core.settings.autoHeight && (null != i._intervalId && clearTimeout(i._intervalId), i._intervalId = setTimeout(function () {
          i.update()
        }, 250))
      })
    };
    s.Defaults = {
      autoHeight: !1,
      autoHeightClass: "owl-height"
    }, s.prototype.update = function () {
      var e = this._core._current,
        n = e + this._core.settings.items,
        i = this._core.settings.lazyLoad,
        s = this._core.$stage.children().toArray().slice(e, n),
        o = [],
        r = 0;
      t.each(s, function (e, n) {
        o.push(t(n).height())
      }), (r = Math.max.apply(null, o)) <= 1 && i && this._previousHeight && (r = this._previousHeight), this._previousHeight = r, this._core.$stage.parent().height(r).addClass(this._core.settings.autoHeightClass)
    }, s.prototype.destroy = function () {
      var t, e;
      for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
      for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = s
  }(window.Zepto || window.jQuery, window, document),
  function (t, e, n, i) {
    var s = function (e) {
      this.core = e, this.core.options = t.extend({}, s.Defaults, this.core.options), this.swapping = !0, this.previous = void 0, this.next = void 0, this.handlers = {
        "change.owl.carousel": t.proxy(function (t) {
          t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
        }, this),
        "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function (t) {
          t.namespace && (this.swapping = "translated" == t.type)
        }, this),
        "translate.owl.carousel": t.proxy(function (t) {
          t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
        }, this)
      }, this.core.$element.on(this.handlers)
    };
    s.Defaults = {
      animateOut: !1,
      animateIn: !1
    }, s.prototype.swap = function () {
      if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
        this.core.speed(0);
        var e, n = t.proxy(this.clear, this),
          i = this.core.$stage.children().eq(this.previous),
          s = this.core.$stage.children().eq(this.next),
          o = this.core.settings.animateIn,
          r = this.core.settings.animateOut;
        this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.one(t.support.animation.end, n).css({
          left: e + "px"
        }).addClass("animated owl-animated-out").addClass(r)), o && s.one(t.support.animation.end, n).addClass("animated owl-animated-in").addClass(o))
      }
    }, s.prototype.clear = function (e) {
      t(e.target).css({
        left: ""
      }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, s.prototype.destroy = function () {
      var t, e;
      for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
      for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Animate = s
  }(window.Zepto || window.jQuery, window, document),
  function (t, e, n, i) {
    var s = function (e) {
      this._core = e, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
        "changed.owl.carousel": t.proxy(function (t) {
          t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._paused && (this._time = 0)
        }, this),
        "initialized.owl.carousel": t.proxy(function (t) {
          t.namespace && this._core.settings.autoplay && this.play()
        }, this),
        "play.owl.autoplay": t.proxy(function (t, e, n) {
          t.namespace && this.play(e, n)
        }, this),
        "stop.owl.autoplay": t.proxy(function (t) {
          t.namespace && this.stop()
        }, this),
        "mouseover.owl.autoplay": t.proxy(function () {
          this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
        }, this),
        "mouseleave.owl.autoplay": t.proxy(function () {
          this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
        }, this),
        "touchstart.owl.core": t.proxy(function () {
          this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
        }, this),
        "touchend.owl.core": t.proxy(function () {
          this._core.settings.autoplayHoverPause && this.play()
        }, this)
      }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, s.Defaults, this._core.options)
    };
    s.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1
    }, s.prototype._next = function (i) {
      this._call = e.setTimeout(t.proxy(this._next, this, i), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || n.hidden || this._core.next(i || this._core.settings.autoplaySpeed)
    }, s.prototype.read = function () {
      return (new Date).getTime() - this._time
    }, s.prototype.play = function (n, i) {
      var s;
      this._core.is("rotating") || this._core.enter("rotating"), n = n || this._core.settings.autoplayTimeout, s = Math.min(this._time % (this._timeout || n), n), this._paused ? (this._time = this.read(), this._paused = !1) : e.clearTimeout(this._call), this._time += this.read() % n - s, this._timeout = n, this._call = e.setTimeout(t.proxy(this._next, this, i), n - s)
    }, s.prototype.stop = function () {
      this._core.is("rotating") && (this._time = 0, this._paused = !0, e.clearTimeout(this._call), this._core.leave("rotating"))
    }, s.prototype.pause = function () {
      this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, e.clearTimeout(this._call))
    }, s.prototype.destroy = function () {
      var t, e;
      for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]);
      for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.autoplay = s
  }(window.Zepto || window.jQuery, window, document),
  function (t, e, n, i) {
    "use strict";
    var s = function (e) {
      this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
        next: this._core.next,
        prev: this._core.prev,
        to: this._core.to
      }, this._handlers = {
        "prepared.owl.carousel": t.proxy(function (e) {
          e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
        }, this),
        "added.owl.carousel": t.proxy(function (t) {
          t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
        }, this),
        "remove.owl.carousel": t.proxy(function (t) {
          t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
        }, this),
        "changed.owl.carousel": t.proxy(function (t) {
          t.namespace && "position" == t.property.name && this.draw()
        }, this),
        "initialized.owl.carousel": t.proxy(function (t) {
          t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
        }, this),
        "refreshed.owl.carousel": t.proxy(function (t) {
          t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
        }, this)
      }, this._core.options = t.extend({}, s.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    s.Defaults = {
      nav: !1,
      navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
      navSpeed: !1,
      navElement: 'button type="button" role="presentation"',
      navContainer: !1,
      navContainerClass: "owl-nav",
      navClass: ["owl-prev", "owl-next"],
      slideBy: 1,
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1
    }, s.prototype.initialize = function () {
      var e, n = this._core.settings;
      for (e in this._controls.$relative = (n.navContainer ? t(n.navContainer) : t("<div>").addClass(n.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + n.navElement + ">").addClass(n.navClass[0]).html(n.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function (t) {
          this.prev(n.navSpeed)
        }, this)), this._controls.$next = t("<" + n.navElement + ">").addClass(n.navClass[1]).html(n.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function (t) {
          this.next(n.navSpeed)
        }, this)), n.dotsData || (this._templates = [t('<button role="button">').addClass(n.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (n.dotsContainer ? t(n.dotsContainer) : t("<div>").addClass(n.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", t.proxy(function (e) {
          var i = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
          e.preventDefault(), this.to(i, n.dotsSpeed)
        }, this)), this._overrides) this._core[e] = t.proxy(this[e], this)
    }, s.prototype.destroy = function () {
      var t, e, n, i, s;
      for (t in s = this._core.settings, this._handlers) this.$element.off(t, this._handlers[t]);
      for (e in this._controls) "$relative" === e && s.navContainer ? this._controls[e].html("") : this._controls[e].remove();
      for (i in this.overides) this._core[i] = this._overrides[i];
      for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, s.prototype.update = function () {
      var t, e, n = this._core.clones().length / 2,
        i = n + this._core.items().length,
        s = this._core.maximum(!0),
        o = this._core.settings,
        r = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
      if ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)), o.dots || "page" == o.slideBy)
        for (this._pages = [], t = n, e = 0, 0; t < i; t++) {
          if (e >= r || 0 === e) {
            if (this._pages.push({
                start: Math.min(s, t - n),
                end: t - n + r - 1
              }), Math.min(s, t - n) === s) break;
            e = 0, 0
          }
          e += this._core.mergers(this._core.relative(t))
        }
    }, s.prototype.draw = function () {
      var e, n = this._core.settings,
        i = this._core.items().length <= n.items,
        s = this._core.relative(this._core.current()),
        o = n.loop || n.rewind;
      this._controls.$relative.toggleClass("disabled", !n.nav || i), n.nav && (this._controls.$previous.toggleClass("disabled", !o && s <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !o && s >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !n.dots || i), n.dots && (e = this._pages.length - this._controls.$absolute.children().length, n.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
    }, s.prototype.onTrigger = function (e) {
      var n = this._core.settings;
      e.page = {
        index: t.inArray(this.current(), this._pages),
        count: this._pages.length,
        size: n && (n.center || n.autoWidth || n.dotsData ? 1 : n.dotsEach || n.items)
      }
    }, s.prototype.current = function () {
      var e = this._core.relative(this._core.current());
      return t.grep(this._pages, t.proxy(function (t, n) {
        return t.start <= e && t.end >= e
      }, this)).pop()
    }, s.prototype.getPosition = function (e) {
      var n, i, s = this._core.settings;
      return "page" == s.slideBy ? (n = t.inArray(this.current(), this._pages), i = this._pages.length, e ? ++n : --n, n = this._pages[(n % i + i) % i].start) : (n = this._core.relative(this._core.current()), i = this._core.items().length, e ? n += s.slideBy : n -= s.slideBy), n
    }, s.prototype.next = function (e) {
      t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
    }, s.prototype.prev = function (e) {
      t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
    }, s.prototype.to = function (e, n, i) {
      var s;
      !i && this._pages.length ? (s = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % s + s) % s].start, n)) : t.proxy(this._overrides.to, this._core)(e, n)
    }, t.fn.owlCarousel.Constructor.Plugins.Navigation = s
  }(window.Zepto || window.jQuery, window, document),
  function (t, e, n, i) {
    "use strict";
    var s = function (n) {
      this._core = n, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
        "initialized.owl.carousel": t.proxy(function (n) {
          n.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
        }, this),
        "prepared.owl.carousel": t.proxy(function (e) {
          if (e.namespace) {
            var n = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
            if (!n) return;
            this._hashes[n] = e.content
          }
        }, this),
        "changed.owl.carousel": t.proxy(function (n) {
          if (n.namespace && "position" === n.property.name) {
            var i = this._core.items(this._core.relative(this._core.current())),
              s = t.map(this._hashes, function (t, e) {
                return t === i ? e : null
              }).join();
            if (!s || e.location.hash.slice(1) === s) return;
            e.location.hash = s
          }
        }, this)
      }, this._core.options = t.extend({}, s.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function (t) {
        var n = e.location.hash.substring(1),
          i = this._core.$stage.children(),
          s = this._hashes[n] && i.index(this._hashes[n]);
        void 0 !== s && s !== this._core.current() && this._core.to(this._core.relative(s), !1, !0)
      }, this))
    };
    s.Defaults = {
      URLhashListener: !1
    }, s.prototype.destroy = function () {
      var n, i;
      for (n in t(e).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(n, this._handlers[n]);
      for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Hash = s
  }(window.Zepto || window.jQuery, window, document),
  function (t, e, n, i) {
    var s = t("<support>").get(0).style,
      o = "Webkit Moz O ms".split(" "),
      r = {
        transition: {
          end: {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            transition: "transitionend"
          }
        },
        animation: {
          end: {
            WebkitAnimation: "webkitAnimationEnd",
            MozAnimation: "animationend",
            OAnimation: "oAnimationEnd",
            animation: "animationend"
          }
        }
      },
      a = function () {
        return !!u("transform")
      },
      l = function () {
        return !!u("perspective")
      },
      c = function () {
        return !!u("animation")
      };
  
    function u(e, n) {
      var r = !1,
        a = e.charAt(0).toUpperCase() + e.slice(1);
      return t.each((e + " " + o.join(a + " ") + a).split(" "), function (t, e) {
        if (s[e] !== i) return r = !n || e, !1
      }), r
    }
  
    function h(t) {
      return u(t, !0)
    }(function () {
      return !!u("transition")
    })() && (t.support.transition = new String(h("transition")), t.support.transition.end = r.transition.end[t.support.transition]), c() && (t.support.animation = new String(h("animation")), t.support.animation.end = r.animation.end[t.support.animation]), a() && (t.support.transform = new String(h("transform")), t.support.transform3d = l())
  }(window.Zepto || window.jQuery, window, document),
  function (t, e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : t.jquery_mmenu_all_js = e(t.jQuery)
  }(this, function (t) {
    var e, n, i, s, o, r, a;
    ! function (t) {
      function e() {
        t[r].glbl || (o = {
          $wndw: t(window),
          $docu: t(document),
          $html: t("html"),
          $body: t("body")
        }, n = {}, i = {}, s = {}, t.each([n, i, s], function (t, e) {
          e.add = function (t) {
            for (var n = 0, i = (t = t.split(" ")).length; n < i; n++) e[t[n]] = e.mm(t[n])
          }
        }), n.mm = function (t) {
          return "mm-" + t
        }, n.add("wrapper menu panels panel nopanel highest opened subopened navbar hasnavbar title btn prev next listview nolistview inset vertical selected divider spacer hidden fullsubopen noanimation"), n.umm = function (t) {
          return "mm-" == t.slice(0, 3) && (t = t.slice(3)), t
        }, i.mm = function (t) {
          return "mm-" + t
        }, i.add("parent child"), s.mm = function (t) {
          return t + ".mm"
        }, s.add("transitionend webkitTransitionEnd click scroll resize keydown mousedown mouseup touchstart touchmove touchend orientationchange"), t[r]._c = n, t[r]._d = i, t[r]._e = s, t[r].glbl = o)
      }
      var n, i, s, o, r = "mmenu",
        a = "6.1.8";
      t[r] && t[r].version > a || (t[r] = function (t, e, n) {
        return this.$menu = t, this._api = ["bind", "getInstance", "initPanels", "openPanel", "closePanel", "closeAllPanels", "setSelected"], this.opts = e, this.conf = n, this.vars = {}, this.cbck = {}, this.mtch = {}, "function" == typeof this.___deprecated && this.___deprecated(), this._initAddons(), this._initExtensions(), this._initMenu(), this._initPanels(), this._initOpened(), this._initAnchors(), this._initMatchMedia(), "function" == typeof this.___debug && this.___debug(), this
      }, t[r].version = a, t[r].addons = {}, t[r].uniqueId = 0, t[r].defaults = {
        extensions: [],
        initMenu: function () {},
        initPanels: function () {},
        navbar: {
          add: !0,
          title: "Menu",
          titleLink: "parent"
        },
        onClick: {
          setSelected: !0
        },
        slidingSubmenus: !0
      }, t[r].configuration = {
        classNames: {
          divider: "Divider",
          inset: "Inset",
          nolistview: "NoListview",
          nopanel: "NoPanel",
          panel: "Panel",
          selected: "Selected",
          spacer: "Spacer",
          vertical: "Vertical"
        },
        clone: !1,
        openingInterval: 25,
        panelNodetype: "ul, ol, div",
        transitionDuration: 400
      }, t[r].prototype = {
        getInstance: function () {
          return this
        },
        initPanels: function (t) {
          this._initPanels(t)
        },
        openPanel: function (e, s) {
          if (this.trigger("openPanel:before", e), e && e.length && (e.is("." + n.panel) || (e = e.closest("." + n.panel)), e.is("." + n.panel))) {
            var o = this;
            if ("boolean" != typeof s && (s = !0), e.hasClass(n.vertical)) e.add(e.parents("." + n.vertical)).removeClass(n.hidden).parent("li").addClass(n.opened), this.openPanel(e.parents("." + n.panel).not("." + n.vertical).first()), this.trigger("openPanel:start", e), this.trigger("openPanel:finish", e);
            else {
              if (e.hasClass(n.opened)) return;
              var a = this.$pnls.children("." + n.panel),
                l = a.filter("." + n.opened);
              if (!t[r].support.csstransitions) return l.addClass(n.hidden).removeClass(n.opened), e.removeClass(n.hidden).addClass(n.opened), this.trigger("openPanel:start", e), void this.trigger("openPanel:finish", e);
              a.not(e).removeClass(n.subopened);
              for (var c = e.data(i.parent); c;)(c = c.closest("." + n.panel)).is("." + n.vertical) || c.addClass(n.subopened), c = c.data(i.parent);
              a.removeClass(n.highest).not(l).not(e).addClass(n.hidden), e.removeClass(n.hidden), this.openPanelStart = function () {
                l.removeClass(n.opened), e.addClass(n.opened), e.hasClass(n.subopened) ? (l.addClass(n.highest), e.removeClass(n.subopened)) : (l.addClass(n.subopened), e.addClass(n.highest)), this.trigger("openPanel:start", e)
              }, this.openPanelFinish = function () {
                l.removeClass(n.highest).addClass(n.hidden), e.removeClass(n.highest), this.trigger("openPanel:finish", e)
              }, s && !e.hasClass(n.noanimation) ? setTimeout(function () {
                o.__transitionend(e, function () {
                  o.openPanelFinish.call(o)
                }, o.conf.transitionDuration), o.openPanelStart.call(o)
              }, o.conf.openingInterval) : (this.openPanelStart.call(this), this.openPanelFinish.call(this))
            }
            this.trigger("openPanel:after", e)
          }
        },
        closePanel: function (t) {
          this.trigger("closePanel:before", t);
          var e = t.parent();
          e.hasClass(n.vertical) && (e.removeClass(n.opened), this.trigger("closePanel", t)), this.trigger("closePanel:after", t)
        },
        closeAllPanels: function (t) {
          this.trigger("closeAllPanels:before"), this.$pnls.find("." + n.listview).children().removeClass(n.selected).filter("." + n.vertical).removeClass(n.opened);
          var e = this.$pnls.children("." + n.panel),
            i = t && t.length ? t : e.first();
          this.$pnls.children("." + n.panel).not(i).removeClass(n.subopened).removeClass(n.opened).removeClass(n.highest).addClass(n.hidden), this.openPanel(i, !1), this.trigger("closeAllPanels:after")
        },
        togglePanel: function (t) {
          var e = t.parent();
          e.hasClass(n.vertical) && this[e.hasClass(n.opened) ? "closePanel" : "openPanel"](t)
        },
        setSelected: function (t) {
          this.trigger("setSelected:before", t), this.$menu.find("." + n.listview).children("." + n.selected).removeClass(n.selected), t.addClass(n.selected), this.trigger("setSelected:after", t)
        },
        bind: function (t, e) {
          this.cbck[t] = this.cbck[t] || [], this.cbck[t].push(e)
        },
        trigger: function () {
          var t = Array.prototype.slice.call(arguments),
            e = t.shift();
          if (this.cbck[e])
            for (var n = 0, i = this.cbck[e].length; n < i; n++) this.cbck[e][n].apply(this, t)
        },
        matchMedia: function (t, e, n) {
          var i = {
            yes: e,
            no: n
          };
          this.mtch[t] = this.mtch[t] || [], this.mtch[t].push(i)
        },
        _initAddons: function () {
          var e;
          for (e in this.trigger("initAddons:before"), t[r].addons) t[r].addons[e].add.call(this), t[r].addons[e].add = function () {};
          for (e in t[r].addons) t[r].addons[e].setup.call(this);
          this.trigger("initAddons:after")
        },
        _initExtensions: function () {
          this.trigger("initExtensions:before");
          var t = this;
          for (var e in this.opts.extensions.constructor === Array && (this.opts.extensions = {
              all: this.opts.extensions
            }), this.opts.extensions) this.opts.extensions[e] = this.opts.extensions[e].length ? "mm-" + this.opts.extensions[e].join(" mm-") : "", this.opts.extensions[e] && function (e) {
            t.matchMedia(e, function () {
              this.$menu.addClass(this.opts.extensions[e])
            }, function () {
              this.$menu.removeClass(this.opts.extensions[e])
            })
          }(e);
          this.trigger("initExtensions:after")
        },
        _initMenu: function () {
          this.trigger("initMenu:before"), this.conf.clone && (this.$orig = this.$menu, this.$menu = this.$orig.clone(), this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function () {
            t(this).attr("id", n.mm(t(this).attr("id")))
          })), this.opts.initMenu.call(this, this.$menu, this.$orig), this.$menu.attr("id", this.$menu.attr("id") || this.__getUniqueId()), this.$pnls = t('<div class="' + n.panels + '" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu);
          var e = [n.menu];
          this.opts.slidingSubmenus || e.push(n.vertical), this.$menu.addClass(e.join(" ")).parent().addClass(n.wrapper), this.trigger("initMenu:after")
        },
        _initPanels: function (e) {
          this.trigger("initPanels:before", e), e = e || this.$pnls.children(this.conf.panelNodetype);
          var i = t(),
            s = this,
            o = function (e) {
              e.filter(this.conf.panelNodetype).each(function () {
                var e = s._initPanel(t(this));
                if (e) {
                  s._initNavbar(e), s._initListview(e), i = i.add(e);
                  var r = e.children("." + n.listview).children("li").children(s.conf.panelNodeType).add(e.children("." + s.conf.classNames.panel));
                  r.length && o.call(s, r)
                }
              })
            };
          o.call(this, e), this.opts.initPanels.call(this, i), this.trigger("initPanels:after", i)
        },
        _initPanel: function (t) {
          if (this.trigger("initPanel:before", t), t.hasClass(n.panel)) return t;
          if (this.__refactorClass(t, this.conf.classNames.panel, "panel"), this.__refactorClass(t, this.conf.classNames.nopanel, "nopanel"), this.__refactorClass(t, this.conf.classNames.vertical, "vertical"), this.__refactorClass(t, this.conf.classNames.inset, "inset"), t.filter("." + n.inset).addClass(n.nopanel), t.hasClass(n.nopanel)) return !1;
          var e = t.hasClass(n.vertical) || !this.opts.slidingSubmenus;
          t.removeClass(n.vertical);
          var s = t.attr("id") || this.__getUniqueId();
          t.removeAttr("id"), t.is("ul, ol") && (t.wrap("<div />"), t = t.parent()), t.addClass(n.panel + " " + n.hidden).attr("id", s);
          var o = t.parent("li");
          return e ? t.add(o).addClass(n.vertical) : t.appendTo(this.$pnls), o.length && (o.data(i.child, t), t.data(i.parent, o)), this.trigger("initPanel:after", t), t
        },
        _initNavbar: function (e) {
          if (this.trigger("initNavbar:before", e), !e.children("." + n.navbar).length) {
            var s = e.data(i.parent),
              o = t('<div class="' + n.navbar + '" />'),
              a = t[r].i18n(this.opts.navbar.title),
              l = "";
            if (s && s.length) {
              if (s.hasClass(n.vertical)) return;
              if (s.parent().is("." + n.listview)) var c = s.children("a, span").not("." + n.next);
              else c = s.closest("." + n.panel).find('a[href="#' + e.attr("id") + '"]');
              var u = (s = (c = c.first()).closest("." + n.panel)).attr("id");
              switch (a = c.text(), this.opts.navbar.titleLink) {
                case "anchor":
                  l = c.attr("href");
                  break;
                case "parent":
                  l = "#" + u
              }
              o.append('<a class="' + n.btn + " " + n.prev + '" href="#' + u + '" />')
            } else if (!this.opts.navbar.title) return;
            this.opts.navbar.add && e.addClass(n.hasnavbar), o.append('<a class="' + n.title + '"' + (l.length ? ' href="' + l + '"' : "") + ">" + a + "</a>").prependTo(e), this.trigger("initNavbar:after", e)
          }
        },
        _initListview: function (e) {
          this.trigger("initListview:before", e);
          var s = this.__childAddBack(e, "ul, ol");
          this.__refactorClass(s, this.conf.classNames.nolistview, "nolistview"), s.filter("." + this.conf.classNames.inset).addClass(n.nolistview);
          var o = s.not("." + n.nolistview).addClass(n.listview).children();
          this.__refactorClass(o, this.conf.classNames.selected, "selected"), this.__refactorClass(o, this.conf.classNames.divider, "divider"), this.__refactorClass(o, this.conf.classNames.spacer, "spacer");
          var r = e.data(i.parent);
          if (r && r.parent().is("." + n.listview) && !r.children("." + n.next).length) {
            var a = r.children("a, span").first(),
              l = t('<a class="' + n.next + '" href="#' + e.attr("id") + '" />').insertBefore(a);
            a.is("span") && l.addClass(n.fullsubopen)
          }
          this.trigger("initListview:after", e)
        },
        _initOpened: function () {
          this.trigger("initOpened:before");
          var t = this.$pnls.find("." + n.listview).children("." + n.selected).removeClass(n.selected).last().addClass(n.selected),
            e = t.length ? t.closest("." + n.panel) : this.$pnls.children("." + n.panel).first();
          this.openPanel(e, !1), this.trigger("initOpened:after")
        },
        _initAnchors: function () {
          var e = this;
          o.$body.on(s.click + "-oncanvas", "a[href]", function (i) {
            var s = t(this),
              o = !1,
              a = e.$menu.find(s).length;
            for (var l in t[r].addons)
              if (t[r].addons[l].clickAnchor.call(e, s, a)) {
                o = !0;
                break
              } var c = s.attr("href");
            if (!o && a && c.length > 1 && "#" == c.slice(0, 1)) try {
              var u = t(c, e.$menu);
              u.is("." + n.panel) && (o = !0, e[s.parent().hasClass(n.vertical) ? "togglePanel" : "openPanel"](u))
            } catch (t) {}
            if (o && i.preventDefault(), !o && a && s.is("." + n.listview + " > li > a") && !s.is('[rel="external"]') && !s.is('[target="_blank"]')) {
              e.__valueOrFn(e.opts.onClick.setSelected, s) && e.setSelected(t(i.target).parent());
              var h = e.__valueOrFn(e.opts.onClick.preventDefault, s, "#" == c.slice(0, 1));
              h && i.preventDefault(), e.__valueOrFn(e.opts.onClick.close, s, h) && e.opts.offCanvas && "function" == typeof e.close && e.close()
            }
          })
        },
        _initMatchMedia: function () {
          var t = this;
          this._fireMatchMedia(), o.$wndw.on(s.resize, function (e) {
            t._fireMatchMedia()
          })
        },
        _fireMatchMedia: function () {
          for (var t in this.mtch)
            for (var e = window.matchMedia && window.matchMedia(t).matches ? "yes" : "no", n = 0; n < this.mtch[t].length; n++) this.mtch[t][n][e].call(this)
        },
        _getOriginalMenuId: function () {
          var t = this.$menu.attr("id");
          return this.conf.clone && t && t.length && (t = n.umm(t)), t
        },
        __api: function () {
          var e = this,
            n = {};
          return t.each(this._api, function (t) {
            var i = this;
            n[i] = function () {
              var t = e[i].apply(e, arguments);
              return void 0 === t ? n : t
            }
          }), n
        },
        __valueOrFn: function (t, e, n) {
          return "function" == typeof t ? t.call(e[0]) : void 0 === t && void 0 !== n ? n : t
        },
        __refactorClass: function (t, e, i) {
          return t.filter("." + e).removeClass(e).addClass(n[i])
        },
        __findAddBack: function (t, e) {
          return t.find(e).add(t.filter(e))
        },
        __childAddBack: function (t, e) {
          return t.children(e).add(t.filter(e))
        },
        __filterListItems: function (t) {
          return t.not("." + n.divider).not("." + n.hidden)
        },
        __filterListItemAnchors: function (t) {
          return this.__filterListItems(t).children("a").not("." + n.next)
        },
        __transitionend: function (t, e, n) {
          var i = !1,
            o = function (n) {
              void 0 !== n && n.target != t[0] || (i || (t.off(s.transitionend), t.off(s.webkitTransitionEnd), e.call(t[0])), i = !0)
            };
          t.on(s.transitionend, o), t.on(s.webkitTransitionEnd, o), setTimeout(o, 1.1 * n)
        },
        __getUniqueId: function () {
          return n.mm(t[r].uniqueId++)
        }
      }, t.fn[r] = function (n, i) {
        e(), n = t.extend(!0, {}, t[r].defaults, n), i = t.extend(!0, {}, t[r].configuration, i);
        var s = t();
        return this.each(function () {
          var e = t(this);
          if (!e.data(r)) {
            var o = new t[r](e, n, i);
            o.$menu.data(r, o.__api()), s = s.add(o.$menu)
          }
        }), s
      }, t[r].i18n = function () {
        var e = {};
        return function (n) {
          switch (typeof n) {
            case "object":
              return t.extend(e, n), e;
            case "string":
              return e[n] || n;
            case "undefined":
            default:
              return e
          }
        }
      }(), t[r].support = {
        touch: "ontouchstart" in window || navigator.msMaxTouchPoints || !1,
        csstransitions: "undefined" == typeof Modernizr || void 0 === Modernizr.csstransitions || Modernizr.csstransitions,
        csstransforms: "undefined" == typeof Modernizr || void 0 === Modernizr.csstransforms || Modernizr.csstransforms,
        csstransforms3d: "undefined" == typeof Modernizr || void 0 === Modernizr.csstransforms3d || Modernizr.csstransforms3d
      })
    }(t), a = "offCanvas", (e = t)[r = "mmenu"].addons[a] = {
        setup: function () {
          if (this.opts[a]) {
            var t = this,
              i = this.opts[a],
              s = this.conf[a];
            o = e[r].glbl, this._api = e.merge(this._api, ["open", "close", "setPage"]), "object" != typeof i && (i = {}), "top" != i.position && "bottom" != i.position || (i.zposition = "front"), i = this.opts[a] = e.extend(!0, {}, e[r].defaults[a], i), "string" != typeof s.pageSelector && (s.pageSelector = "> " + s.pageNodetype), this.vars.opened = !1;
            var l = [n.offcanvas];
            "left" != i.position && l.push(n.mm(i.position)), "back" != i.zposition && l.push(n.mm(i.zposition)), e[r].support.csstransforms || l.push(n["no-csstransforms"]), e[r].support.csstransforms3d || l.push(n["no-csstransforms3d"]), this.bind("initMenu:after", function () {
              var t = this;
              this.setPage(o.$page), this._initBlocker(), this["_initWindow_" + a](), this.$menu.addClass(l.join(" ")).parent("." + n.wrapper).removeClass(n.wrapper), this.$menu[s.menuInsertMethod](s.menuInsertSelector);
              var e = window.location.hash;
              if (e) {
                var i = this._getOriginalMenuId();
                i && i == e.slice(1) && setTimeout(function () {
                  t.open()
                }, 1e3)
              }
            }), this.bind("initExtensions:after", function () {
              for (var e = [n.mm("widescreen"), n.mm("iconbar")], i = 0; i < e.length; i++)
                for (var s in this.opts.extensions)
                  if (this.opts.extensions[s].indexOf(e[i]) > -1) {
                    ! function (n, i) {
                      t.matchMedia(n, function () {
                        o.$html.addClass(e[i])
                      }, function () {
                        o.$html.removeClass(e[i])
                      })
                    }(s, i);
                    break
                  }
            }), this.bind("open:start:sr-aria", function () {
              this.__sr_aria(this.$menu, "hidden", !1)
            }), this.bind("close:finish:sr-aria", function () {
              this.__sr_aria(this.$menu, "hidden", !0)
            }), this.bind("initMenu:after:sr-aria", function () {
              this.__sr_aria(this.$menu, "hidden", !0)
            })
          }
        },
        add: function () {
          n = e[r]._c, i = e[r]._d, s = e[r]._e, n.add("offcanvas slideout blocking modal background opening blocker page no-csstransforms3d"), i.add("style")
        },
        clickAnchor: function (t, e) {
          var i = this;
          if (this.opts[a]) {
            var s = this._getOriginalMenuId();
            if (s && t.is('[href="#' + s + '"]')) {
              if (e) return !0;
              var r = t.closest("." + n.menu);
              if (r.length) {
                var l = r.data("mmenu");
                if (l && l.close) return l.close(), i.__transitionend(r, function () {
                  i.open()
                }, i.conf.transitionDuration), !0
              }
              return this.open(), !0
            }
            if (o.$page) return (s = o.$page.first().attr("id")) && t.is('[href="#' + s + '"]') ? (this.close(), !0) : void 0
          }
        }
      }, e[r].defaults[a] = {
        position: "left",
        zposition: "back",
        blockUI: !0,
        moveBackground: !0
      }, e[r].configuration[a] = {
        pageNodetype: "div",
        pageSelector: null,
        noPageSelector: [],
        wrapPageIfNeeded: !0,
        menuInsertMethod: "prependTo",
        menuInsertSelector: "body"
      }, e[r].prototype.open = function () {
        if (this.trigger("open:before"), !this.vars.opened) {
          var t = this;
          this._openSetup(), setTimeout(function () {
            t._openFinish()
          }, this.conf.openingInterval), this.trigger("open:after")
        }
      }, e[r].prototype._openSetup = function () {
        var t = this,
          r = this.opts[a];
        this.closeAllOthers(), o.$page.each(function () {
          e(this).data(i.style, e(this).attr("style") || "")
        }), o.$wndw.trigger(s.resize + "-" + a, [!0]);
        var l = [n.opened];
        r.blockUI && l.push(n.blocking), "modal" == r.blockUI && l.push(n.modal), r.moveBackground && l.push(n.background), "left" != r.position && l.push(n.mm(this.opts[a].position)), "back" != r.zposition && l.push(n.mm(this.opts[a].zposition)), o.$html.addClass(l.join(" ")), setTimeout(function () {
          t.vars.opened = !0
        }, this.conf.openingInterval), this.$menu.addClass(n.opened)
      }, e[r].prototype._openFinish = function () {
        var t = this;
        this.__transitionend(o.$page.first(), function () {
          t.trigger("open:finish")
        }, this.conf.transitionDuration), this.trigger("open:start"), o.$html.addClass(n.opening)
      }, e[r].prototype.close = function () {
        if (this.trigger("close:before"), this.vars.opened) {
          var t = this;
          this.__transitionend(o.$page.first(), function () {
            t.$menu.removeClass(n.opened);
            var s = [n.opened, n.blocking, n.modal, n.background, n.mm(t.opts[a].position), n.mm(t.opts[a].zposition)];
            o.$html.removeClass(s.join(" ")), o.$page.each(function () {
              e(this).attr("style", e(this).data(i.style))
            }), t.vars.opened = !1, t.trigger("close:finish")
          }, this.conf.transitionDuration), this.trigger("close:start"), o.$html.removeClass(n.opening), this.trigger("close:after")
        }
      }, e[r].prototype.closeAllOthers = function () {
        o.$body.find("." + n.menu + "." + n.offcanvas).not(this.$menu).each(function () {
          var t = e(this).data(r);
          t && t.close && t.close()
        })
      }, e[r].prototype.setPage = function (t) {
        this.trigger("setPage:before", t);
        var i = this,
          s = this.conf[a];
        t && t.length || (t = o.$body.find(s.pageSelector), s.noPageSelector.length && (t = t.not(s.noPageSelector.join(", "))), t.length > 1 && s.wrapPageIfNeeded && (t = t.wrapAll("<" + this.conf[a].pageNodetype + " />").parent())), t.each(function () {
          e(this).attr("id", e(this).attr("id") || i.__getUniqueId())
        }), t.addClass(n.page + " " + n.slideout), o.$page = t, this.trigger("setPage:after", t)
      }, e[r].prototype["_initWindow_" + a] = function () {
        o.$wndw.off(s.keydown + "-" + a).on(s.keydown + "-" + a, function (t) {
          if (o.$html.hasClass(n.opened) && 9 == t.keyCode) return t.preventDefault(), !1
        });
        var t = 0;
        o.$wndw.off(s.resize + "-" + a).on(s.resize + "-" + a, function (e, i) {
          if (1 == o.$page.length && (i || o.$html.hasClass(n.opened))) {
            var s = o.$wndw.height();
            (i || s != t) && (t = s, o.$page.css("minHeight", s))
          }
        })
      }, e[r].prototype._initBlocker = function () {
        var t = this;
        this.opts[a].blockUI && (o.$blck || (o.$blck = e('<div id="' + n.blocker + '" class="' + n.slideout + '" />')), o.$blck.appendTo(o.$body).off(s.touchstart + "-" + a + " " + s.touchmove + "-" + a).on(s.touchstart + "-" + a + " " + s.touchmove + "-" + a, function (t) {
          t.preventDefault(), t.stopPropagation(), o.$blck.trigger(s.mousedown + "-" + a)
        }).off(s.mousedown + "-" + a).on(s.mousedown + "-" + a, function (e) {
          e.preventDefault(), o.$html.hasClass(n.modal) || (t.closeAllOthers(), t.close())
        }))
      },
      function (t) {
        var e, n, i, s = "mmenu",
          o = "scrollBugFix";
        t[s].addons[o] = {
          setup: function () {
            var n = this.opts[o];
            this.conf[o], i = t[s].glbl, t[s].support.touch && this.opts.offCanvas && this.opts.offCanvas.blockUI && ("boolean" == typeof n && (n = {
              fix: n
            }), "object" != typeof n && (n = {}), (n = this.opts[o] = t.extend(!0, {}, t[s].defaults[o], n)).fix && (this.bind("open:start", function () {
              this.$pnls.children("." + e.opened).scrollTop(0)
            }), this.bind("initMenu:after", function () {
              this["_initWindow_" + o]()
            })))
          },
          add: function () {
            e = t[s]._c, t[s]._d, n = t[s]._e
          },
          clickAnchor: function (t, e) {}
        }, t[s].defaults[o] = {
          fix: !0
        }, t[s].prototype["_initWindow_" + o] = function () {
          var s = this;
          i.$docu.off(n.touchmove + "-" + o).on(n.touchmove + "-" + o, function (t) {
            i.$html.hasClass(e.opened) && t.preventDefault()
          });
          var r = !1;
          i.$body.off(n.touchstart + "-" + o).on(n.touchstart + "-" + o, "." + e.panels + "> ." + e.panel, function (t) {
            i.$html.hasClass(e.opened) && (r || (r = !0, 0 === t.currentTarget.scrollTop ? t.currentTarget.scrollTop = 1 : t.currentTarget.scrollHeight === t.currentTarget.scrollTop + t.currentTarget.offsetHeight && (t.currentTarget.scrollTop -= 1), r = !1))
          }).off(n.touchmove + "-" + o).on(n.touchmove + "-" + o, "." + e.panels + "> ." + e.panel, function (n) {
            i.$html.hasClass(e.opened) && t(this)[0].scrollHeight > t(this).innerHeight() && n.stopPropagation()
          }), i.$wndw.off(n.orientationchange + "-" + o).on(n.orientationchange + "-" + o, function () {
            s.$pnls.children("." + e.opened).scrollTop(0).css({
              "-webkit-overflow-scrolling": "auto"
            }).css({
              "-webkit-overflow-scrolling": "touch"
            })
          })
        }
      }(t),
      function (t) {
        var e, n, i = "mmenu",
          s = "screenReader";
        t[i].addons[s] = {
          setup: function () {
            var o = this,
              r = this.opts[s],
              a = this.conf[s];
            t[i].glbl, "boolean" == typeof r && (r = {
              aria: r,
              text: r
            }), "object" != typeof r && (r = {}), (r = this.opts[s] = t.extend(!0, {}, t[i].defaults[s], r)).aria && (this.bind("initAddons:after", function () {
              this.bind("initMenu:after", function () {
                this.trigger("initMenu:after:sr-aria")
              }), this.bind("initNavbar:after", function () {
                this.trigger("initNavbar:after:sr-aria", arguments[0])
              }), this.bind("openPanel:start", function () {
                this.trigger("openPanel:start:sr-aria", arguments[0])
              }), this.bind("close:start", function () {
                this.trigger("close:start:sr-aria")
              }), this.bind("close:finish", function () {
                this.trigger("close:finish:sr-aria")
              }), this.bind("open:start", function () {
                this.trigger("open:start:sr-aria")
              }), this.bind("open:finish", function () {
                this.trigger("open:finish:sr-aria")
              })
            }), this.bind("updateListview", function () {
              this.$pnls.find("." + e.listview).children().each(function () {
                o.__sr_aria(t(this), "hidden", t(this).is("." + e.hidden))
              })
            }), this.bind("openPanel:start", function (t) {
              var n = this.$menu.find("." + e.panel).not(t).not(t.parents("." + e.panel)),
                i = t.add(t.find("." + e.vertical + "." + e.opened).children("." + e.panel));
              this.__sr_aria(n, "hidden", !0), this.__sr_aria(i, "hidden", !1)
            }), this.bind("closePanel", function (t) {
              this.__sr_aria(t, "hidden", !0)
            }), this.bind("initPanels:after", function (n) {
              var i = n.find("." + e.prev + ", ." + e.next).each(function () {
                o.__sr_aria(t(this), "owns", t(this).attr("href").replace("#", ""))
              });
              this.__sr_aria(i, "haspopup", !0)
            }), this.bind("initNavbar:after", function (t) {
              var n = t.children("." + e.navbar);
              this.__sr_aria(n, "hidden", !t.hasClass(e.hasnavbar))
            }), r.text && (this.bind("initlistview:after", function (t) {
              var n = t.find("." + e.listview).find("." + e.fullsubopen).parent().children("span");
              this.__sr_aria(n, "hidden", !0)
            }), "parent" == this.opts.navbar.titleLink && this.bind("initNavbar:after", function (t) {
              var n = t.children("." + e.navbar),
                i = !!n.children("." + e.prev).length;
              this.__sr_aria(n.children("." + e.title), "hidden", i)
            }))), r.text && (this.bind("initAddons:after", function () {
              this.bind("setPage:after", function () {
                this.trigger("setPage:after:sr-text", arguments[0])
              })
            }), this.bind("initNavbar:after", function (n) {
              var s = n.children("." + e.navbar),
                o = s.children("." + e.title).text(),
                r = t[i].i18n(a.text.closeSubmenu);
              o && (r += " (" + o + ")"), s.children("." + e.prev).html(this.__sr_text(r))
            }), this.bind("initListview:after", function (s) {
              var r = s.data(n.parent);
              if (r && r.length) {
                var l = r.children("." + e.next),
                  c = l.nextAll("span, a").first().text(),
                  u = t[i].i18n(a.text[l.parent().is("." + e.vertical) ? "toggleSubmenu" : "openSubmenu"]);
                c && (u += " (" + c + ")"), l.html(o.__sr_text(u))
              }
            }))
          },
          add: function () {
            e = t[i]._c, n = t[i]._d, t[i]._e, e.add("sronly")
          },
          clickAnchor: function (t, e) {}
        }, t[i].defaults[s] = {
          aria: !0,
          text: !0
        }, t[i].configuration[s] = {
          text: {
            closeMenu: "Close menu",
            closeSubmenu: "Close submenu",
            openSubmenu: "Open submenu",
            toggleSubmenu: "Toggle submenu"
          }
        }, t[i].prototype.__sr_aria = function (t, e, n) {
          t.prop("aria-" + e, n)[n ? "attr" : "removeAttr"]("aria-" + e, n)
        }, t[i].prototype.__sr_text = function (t) {
          return '<span class="' + e.sronly + '">' + t + "</span>"
        }
      }(t),
      function (t) {
        var e, n, i = "mmenu",
          s = "autoHeight";
        t[i].addons[s] = {
          setup: function () {
            var n = this.opts[s];
            if (this.conf[s], t[i].glbl, "boolean" == typeof n && n && (n = {
                height: "auto"
              }), "string" == typeof n && (n = {
                height: n
              }), "object" != typeof n && (n = {}), "auto" == (n = this.opts[s] = t.extend(!0, {}, t[i].defaults[s], n)).height || "highest" == n.height) {
              this.bind("initMenu:after", function () {
                this.$menu.addClass(e.autoheight)
              });
              var o = function (i) {
                if (!this.opts.offCanvas || this.vars.opened) {
                  var s = Math.max(parseInt(this.$pnls.css("top"), 10), 0) || 0,
                    o = Math.max(parseInt(this.$pnls.css("bottom"), 10), 0) || 0,
                    r = 0;
                  this.$menu.addClass(e.measureheight), "auto" == n.height ? ((i = i || this.$pnls.children("." + e.opened)).is("." + e.vertical) && (i = i.parents("." + e.panel).not("." + e.vertical)), i.length || (i = this.$pnls.children("." + e.panel)), r = i.first().outerHeight()) : "highest" == n.height && this.$pnls.children().each(function () {
                    var n = t(this);
                    n.is("." + e.vertical) && (n = n.parents("." + e.panel).not("." + e.vertical).first()), r = Math.max(r, n.outerHeight())
                  }), this.$menu.height(r + s + o).removeClass(e.measureheight)
                }
              };
              this.opts.offCanvas && this.bind("open:start", o), "highest" == n.height && this.bind("initPanels:after", o), "auto" == n.height && (this.bind("updateListview", o), this.bind("openPanel:start", o), this.bind("closePanel", o))
            }
          },
          add: function () {
            e = t[i]._c, t[i]._d, n = t[i]._e, e.add("autoheight measureheight"), n.add("resize")
          },
          clickAnchor: function (t, e) {}
        }, t[i].defaults[s] = {
          height: "default"
        }
      }(t),
      function (t) {
        var e, n, i = "mmenu",
          s = "fixedElements";
        t[i].addons[s] = {
          setup: function () {
            if (this.opts.offCanvas) {
              var o = (this.opts[s], this.conf[s]);
              n = t[i].glbl;
              this.bind("setPage:after", function (i) {
                var r = this.conf.classNames[s].fixed,
                  a = i.find("." + r);
                this.__refactorClass(a, r, "slideout"), a[o.elemInsertMethod](o.elemInsertSelector);
                var l = this.conf.classNames[s].sticky,
                  c = i.find("." + l);
                this.__refactorClass(c, l, "sticky"), (c = i.find("." + e.sticky)).length && (this.bind("open:before", function () {
                  var e = n.$wndw.scrollTop() + o.sticky.offset;
                  c.each(function () {
                    t(this).css("top", parseInt(t(this).css("top"), 10) + e)
                  })
                }), this.bind("close:finish", function () {
                  c.css("top", "")
                }))
              })
            }
          },
          add: function () {
            e = t[i]._c, t[i]._d, t[i]._e, e.add("sticky")
          },
          clickAnchor: function (t, e) {}
        }, t[i].configuration[s] = {
          sticky: {
            offset: 0
          },
          elemInsertMethod: "appendTo",
          elemInsertSelector: "body"
        }, t[i].configuration.classNames[s] = {
          fixed: "Fixed",
          sticky: "Sticky"
        }
      }(t),
      function (t) {
        var e, n = "mmenu",
          i = "navbars";
        t[n].addons[i] = {
          setup: function () {
            var s = this,
              o = this.opts[i],
              r = this.conf[i];
            if (t[n].glbl, void 0 !== o) {
              o instanceof Array || (o = [o]);
              var a = {},
                l = {};
              o.length && (t.each(o, function (c) {
                var u = o[c];
                "boolean" == typeof u && u && (u = {}), "object" != typeof u && (u = {}), void 0 === u.content && (u.content = ["prev", "title"]), u.content instanceof Array || (u.content = [u.content]), u = t.extend(!0, {}, s.opts.navbar, u);
                var h = t('<div class="' + e.navbar + '" />'),
                  d = u.height;
                "number" != typeof d && (d = 1), d = Math.min(4, Math.max(1, d)), h.addClass(e.navbar + "-size-" + d);
                var p = u.position;
                "bottom" != p && (p = "top"), a[p] || (a[p] = 0), a[p] += d, l[p] || (l[p] = t('<div class="' + e.navbars + "-" + p + '" />')), l[p].append(h);
                for (var f = 0, g = 0, m = u.content.length; g < m; g++) {
                  var v = t[n].addons[i][u.content[g]] || !1;
                  v ? f += v.call(s, h, u, r) : ((v = u.content[g]) instanceof t || (v = t(u.content[g])), h.append(v))
                }(f += Math.ceil(h.children().not("." + e.btn).length / d)) > 1 && h.addClass(e.navbar + "-content-" + f), h.children("." + e.btn).length && h.addClass(e.hasbtns)
              }), this.bind("initMenu:after", function () {
                for (var t in a) this.$menu.addClass(e.hasnavbar + "-" + t + "-" + a[t]), this.$menu["bottom" == t ? "append" : "prepend"](l[t])
              }))
            }
          },
          add: function () {
            e = t[n]._c, t[n]._d, t[n]._e, e.add("navbars close hasbtns")
          },
          clickAnchor: function (t, e) {}
        }, t[n].configuration[i] = {
          breadcrumbSeparator: "/"
        }, t[n].configuration.classNames[i] = {}
      }(t),
      function (t) {
        var e, n, i = "mmenu",
          s = "rtl";
        t[i].addons[s] = {
          setup: function () {
            var o = this.opts[s];
            this.conf[s], n = t[i].glbl, "object" != typeof o && (o = {
              use: o
            }), "boolean" != typeof (o = this.opts[s] = t.extend(!0, {}, t[i].defaults[s], o)).use && (o.use = "rtl" == (n.$html.attr("dir") || "").toLowerCase()), o.use && this.bind("initMenu:after", function () {
              this.$menu.addClass(e.rtl)
            })
          },
          add: function () {
            e = t[i]._c, t[i]._d, t[i]._e, e.add("rtl")
          },
          clickAnchor: function (t, e) {}
        }, t[i].defaults[s] = {
          use: "detect"
        }
      }(t)
  }),
  function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
  }(function (t) {
    "use strict";
    var e = [],
      n = [],
      i = {
        precision: 100,
        elapse: !1,
        defer: !1
      };
    n.push(/^[0-9]*$/.source), n.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), n.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), n = new RegExp(n.join("|"));
    var s = {
      Y: "years",
      m: "months",
      n: "daysToMonth",
      d: "daysToWeek",
      w: "weeks",
      W: "weeksToMonth",
      H: "hours",
      M: "minutes",
      S: "seconds",
      D: "totalDays",
      I: "totalHours",
      N: "totalMinutes",
      T: "totalSeconds"
    };
  
    function o(t, e) {
      var n = "s",
        i = "";
      return t && (1 === (t = t.replace(/(:|;|\s)/gi, "").split(/\,/)).length ? n = t[0] : (i = t[0], n = t[1])), Math.abs(e) > 1 ? n : i
    }
    var r = function (n, s, o) {
      this.el = n, this.$el = t(n), this.interval = null, this.offset = {}, this.options = t.extend({}, i), this.firstTick = !0, this.instanceNumber = e.length, e.push(this), this.$el.data("countdown-instance", this.instanceNumber), o && ("function" == typeof o ? (this.$el.on("update.countdown", o), this.$el.on("stoped.countdown", o), this.$el.on("finish.countdown", o)) : this.options = t.extend({}, i, o)), this.setFinalDate(s), !1 === this.options.defer && this.start()
    };
    t.extend(r.prototype, {
      start: function () {
        null !== this.interval && clearInterval(this.interval);
        var t = this;
        this.update(), this.interval = setInterval(function () {
          t.update.call(t)
        }, this.options.precision)
      },
      stop: function () {
        clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped")
      },
      toggle: function () {
        this.interval ? this.stop() : this.start()
      },
      pause: function () {
        this.stop()
      },
      resume: function () {
        this.start()
      },
      remove: function () {
        this.stop.call(this), e[this.instanceNumber] = null, delete this.$el.data().countdownInstance
      },
      setFinalDate: function (t) {
        this.finalDate = function (t) {
          if (t instanceof Date) return t;
          if (String(t).match(n)) return String(t).match(/^[0-9]*$/) && (t = Number(t)), String(t).match(/\-/) && (t = String(t).replace(/\-/g, "/")), new Date(t);
          throw new Error("Couldn't cast `" + t + "` to a date object.")
        }(t)
      },
      update: function () {
        if (0 !== this.$el.closest("html").length) {
          var t, e = new Date;
          t = this.finalDate.getTime() - e.getTime(), t = Math.ceil(t / 1e3), t = !this.options.elapse && t < 0 ? 0 : Math.abs(t), this.totalSecsLeft === t || this.firstTick ? this.firstTick = !1 : (this.totalSecsLeft = t, this.elapsed = e >= this.finalDate, this.offset = {
            seconds: this.totalSecsLeft % 60,
            minutes: Math.floor(this.totalSecsLeft / 60) % 60,
            hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
            days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
            daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
            daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
            weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
            weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
            months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
            years: Math.abs(this.finalDate.getFullYear() - e.getFullYear()),
            totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
            totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
            totalMinutes: Math.floor(this.totalSecsLeft / 60),
            totalSeconds: this.totalSecsLeft
          }, this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish")))
        } else this.remove()
      },
      dispatchEvent: function (e) {
        var n, i = t.Event(e + ".countdown");
        i.finalDate = this.finalDate, i.elapsed = this.elapsed, i.offset = t.extend({}, this.offset), i.strftime = (n = this.offset, function (t) {
          var e, i, r = t.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
          if (r)
            for (var a = 0, l = r.length; a < l; ++a) {
              var c = r[a].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                u = (e = c[0], i = void 0, i = e.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"), new RegExp(i)),
                h = c[1] || "",
                d = c[3] || "",
                p = null;
              c = c[2], s.hasOwnProperty(c) && (p = s[c], p = Number(n[p])), null !== p && ("!" === h && (p = o(d, p)), "" === h && p < 10 && (p = "0" + p.toString()), t = t.replace(u, p.toString()))
            }
          return t = t.replace(/%%/, "%")
        }), this.$el.trigger(i)
      }
    }), t.fn.countdown = function () {
      var n = Array.prototype.slice.call(arguments, 0);
      return this.each(function () {
        var i = t(this).data("countdown-instance");
        if (void 0 !== i) {
          var s = e[i],
            o = n[0];
          r.prototype.hasOwnProperty(o) ? s[o].apply(s, n.slice(1)) : null === String(o).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (s.setFinalDate.call(s, o), s.start()) : t.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, o))
        } else new r(this, n[0], n[1])
      })
    }
  }),
  function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? t(require("jquery")) : t(window.jQuery || window.Zepto)
  }(function (t) {
    var e, n, i, s, o, r, a = function () {},
      l = !!window.jQuery,
      c = t(window),
      u = function (t, n) {
        e.ev.on("mfp" + t + ".mfp", n)
      },
      h = function (e, n, i, s) {
        var o = document.createElement("div");
        return o.className = "mfp-" + e, i && (o.innerHTML = i), s ? n && n.appendChild(o) : (o = t(o), n && o.appendTo(n)), o
      },
      d = function (n, i) {
        e.ev.triggerHandler("mfp" + n, i), e.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), e.st.callbacks[n] && e.st.callbacks[n].apply(e, t.isArray(i) ? i : [i]))
      },
      p = function (n) {
        return n === r && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), r = n), e.currTemplate.closeBtn
      },
      f = function () {
        t.magnificPopup.instance || ((e = new a).init(), t.magnificPopup.instance = e)
      };
    a.prototype = {
      constructor: a,
      init: function () {
        var n = navigator.appVersion;
        e.isLowIE = e.isIE8 = document.all && !document.addEventListener, e.isAndroid = /android/gi.test(n), e.isIOS = /iphone|ipad|ipod/gi.test(n), e.supportsTransition = function () {
          var t = document.createElement("p").style,
            e = ["ms", "O", "Moz", "Webkit"];
          if (void 0 !== t.transition) return !0;
          for (; e.length;)
            if (e.pop() + "Transition" in t) return !0;
          return !1
        }(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), i = t(document), e.popupsCache = {}
      },
      open: function (n) {
        var s;
        if (!1 === n.isObj) {
          e.items = n.items.toArray(), e.index = 0;
          var r, a = n.items;
          for (s = 0; s < a.length; s++)
            if ((r = a[s]).parsed && (r = r.el[0]), r === n.el[0]) {
              e.index = s;
              break
            }
        } else e.items = t.isArray(n.items) ? n.items : [n.items], e.index = n.index || 0;
        if (!e.isOpen) {
          e.types = [], o = "", n.mainEl && n.mainEl.length ? e.ev = n.mainEl.eq(0) : e.ev = i, n.key ? (e.popupsCache[n.key] || (e.popupsCache[n.key] = {}), e.currTemplate = e.popupsCache[n.key]) : e.currTemplate = {}, e.st = t.extend(!0, {}, t.magnificPopup.defaults, n), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, e.st.enableEscapeKey = !1), e.bgOverlay || (e.bgOverlay = h("bg").on("click.mfp", function () {
            e.close()
          }), e.wrap = h("wrap").attr("tabindex", -1).on("click.mfp", function (t) {
            e._checkIfClose(t.target) && e.close()
          }), e.container = h("container", e.wrap)), e.contentContainer = h("content"), e.st.preloader && (e.preloader = h("preloader", e.container, e.st.tLoading));
          var l = t.magnificPopup.modules;
          for (s = 0; s < l.length; s++) {
            var f = l[s];
            f = f.charAt(0).toUpperCase() + f.slice(1), e["init" + f].call(e)
          }
          d("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? (u("MarkupParse", function (t, e, n, i) {
            n.close_replaceWith = p(i.type)
          }), o += " mfp-close-btn-in") : e.wrap.append(p())), e.st.alignTop && (o += " mfp-align-top"), e.fixedContentPos ? e.wrap.css({
            overflow: e.st.overflowY,
            overflowX: "hidden",
            overflowY: e.st.overflowY
          }) : e.wrap.css({
            top: c.scrollTop(),
            position: "absolute"
          }), (!1 === e.st.fixedBgPos || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({
            height: i.height(),
            position: "absolute"
          }), e.st.enableEscapeKey && i.on("keyup.mfp", function (t) {
            27 === t.keyCode && e.close()
          }), c.on("resize.mfp", function () {
            e.updateSize()
          }), e.st.closeOnContentClick || (o += " mfp-auto-cursor"), o && e.wrap.addClass(o);
          var g = e.wH = c.height(),
            m = {};
          if (e.fixedContentPos && e._hasScrollBar(g)) {
            var v = e._getScrollbarSize();
            v && (m.marginRight = v)
          }
          e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : m.overflow = "hidden");
          var y = e.st.mainClass;
          return e.isIE7 && (y += " mfp-ie7"), y && e._addClassToMFP(y), e.updateItemHTML(), d("BuildControls"), t("html").css(m), e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || t(document.body)), e._lastFocusedEl = document.activeElement, setTimeout(function () {
            e.content ? (e._addClassToMFP("mfp-ready"), e._setFocus()) : e.bgOverlay.addClass("mfp-ready"), i.on("focusin.mfp", e._onFocusIn)
          }, 16), e.isOpen = !0, e.updateSize(g), d("Open"), n
        }
        e.updateItemHTML()
      },
      close: function () {
        e.isOpen && (d("BeforeClose"), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP("mfp-removing"), setTimeout(function () {
          e._close()
        }, e.st.removalDelay)) : e._close())
      },
      _close: function () {
        d("Close");
        var n = "mfp-removing mfp-ready ";
        if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (n += e.st.mainClass + " "), e._removeClassFromMFP(n), e.fixedContentPos) {
          var s = {
            marginRight: ""
          };
          e.isIE7 ? t("body, html").css("overflow", "") : s.overflow = "", t("html").css(s)
        }
        i.off("keyup.mfp focusin.mfp"), e.ev.off(".mfp"), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), !e.st.showCloseBtn || e.st.closeBtnInside && !0 !== e.currTemplate[e.currItem.type] || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), e.st.autoFocusLast && e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, e.content = null, e.currTemplate = null, e.prevHeight = 0, d("AfterClose")
      },
      updateSize: function (t) {
        if (e.isIOS) {
          var n = document.documentElement.clientWidth / window.innerWidth,
            i = window.innerHeight * n;
          e.wrap.css("height", i), e.wH = i
        } else e.wH = t || c.height();
        e.fixedContentPos || e.wrap.css("height", e.wH), d("Resize")
      },
      updateItemHTML: function () {
        var n = e.items[e.index];
        e.contentContainer.detach(), e.content && e.content.detach(), n.parsed || (n = e.parseEl(e.index));
        var i = n.type;
        if (d("BeforeChange", [e.currItem ? e.currItem.type : "", i]), e.currItem = n, !e.currTemplate[i]) {
          var o = !!e.st[i] && e.st[i].markup;
          d("FirstMarkupParse", o), e.currTemplate[i] = !o || t(o)
        }
        s && s !== n.type && e.container.removeClass("mfp-" + s + "-holder");
        var r = e["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, e.currTemplate[i]);
        e.appendContent(r, i), n.preloaded = !0, d("Change", n), s = n.type, e.container.prepend(e.contentContainer), d("AfterChange")
      },
      appendContent: function (t, n) {
        e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && !0 === e.currTemplate[n] ? e.content.find(".mfp-close").length || e.content.append(p()) : e.content = t : e.content = "", d("BeforeAppend"), e.container.addClass("mfp-" + n + "-holder"), e.contentContainer.append(e.content)
      },
      parseEl: function (n) {
        var i, s = e.items[n];
        if (s.tagName ? s = {
            el: t(s)
          } : (i = s.type, s = {
            data: s,
            src: s.src
          }), s.el) {
          for (var o = e.types, r = 0; r < o.length; r++)
            if (s.el.hasClass("mfp-" + o[r])) {
              i = o[r];
              break
            } s.src = s.el.attr("data-mfp-src"), s.src || (s.src = s.el.attr("href"))
        }
        return s.type = i || e.st.type || "inline", s.index = n, s.parsed = !0, e.items[n] = s, d("ElementParse", s), e.items[n]
      },
      addGroup: function (t, n) {
        var i = function (i) {
          i.mfpEl = this, e._openClick(i, t, n)
        };
        n || (n = {});
        var s = "click.magnificPopup";
        n.mainEl = t, n.items ? (n.isObj = !0, t.off(s).on(s, i)) : (n.isObj = !1, n.delegate ? t.off(s).on(s, n.delegate, i) : (n.items = t, t.off(s).on(s, i)))
      },
      _openClick: function (n, i, s) {
        if ((void 0 !== s.midClick ? s.midClick : t.magnificPopup.defaults.midClick) || !(2 === n.which || n.ctrlKey || n.metaKey || n.altKey || n.shiftKey)) {
          var o = void 0 !== s.disableOn ? s.disableOn : t.magnificPopup.defaults.disableOn;
          if (o)
            if (t.isFunction(o)) {
              if (!o.call(e)) return !0
            } else if (c.width() < o) return !0;
          n.type && (n.preventDefault(), e.isOpen && n.stopPropagation()), s.el = t(n.mfpEl), s.delegate && (s.items = i.find(s.delegate)), e.open(s)
        }
      },
      updateStatus: function (t, i) {
        if (e.preloader) {
          n !== t && e.container.removeClass("mfp-s-" + n), i || "loading" !== t || (i = e.st.tLoading);
          var s = {
            status: t,
            text: i
          };
          d("UpdateStatus", s), t = s.status, i = s.text, e.preloader.html(i), e.preloader.find("a").on("click", function (t) {
            t.stopImmediatePropagation()
          }), e.container.addClass("mfp-s-" + t), n = t
        }
      },
      _checkIfClose: function (n) {
        if (!t(n).hasClass("mfp-prevent-close")) {
          var i = e.st.closeOnContentClick,
            s = e.st.closeOnBgClick;
          if (i && s) return !0;
          if (!e.content || t(n).hasClass("mfp-close") || e.preloader && n === e.preloader[0]) return !0;
          if (n === e.content[0] || t.contains(e.content[0], n)) {
            if (i) return !0
          } else if (s && t.contains(document, n)) return !0;
          return !1
        }
      },
      _addClassToMFP: function (t) {
        e.bgOverlay.addClass(t), e.wrap.addClass(t)
      },
      _removeClassFromMFP: function (t) {
        this.bgOverlay.removeClass(t), e.wrap.removeClass(t)
      },
      _hasScrollBar: function (t) {
        return (e.isIE7 ? i.height() : document.body.scrollHeight) > (t || c.height())
      },
      _setFocus: function () {
        (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus()
      },
      _onFocusIn: function (n) {
        if (n.target !== e.wrap[0] && !t.contains(e.wrap[0], n.target)) return e._setFocus(), !1
      },
      _parseMarkup: function (e, n, i) {
        var s;
        i.data && (n = t.extend(i.data, n)), d("MarkupParse", [e, n, i]), t.each(n, function (n, i) {
          if (void 0 === i || !1 === i) return !0;
          if ((s = n.split("_")).length > 1) {
            var o = e.find(".mfp-" + s[0]);
            if (o.length > 0) {
              var r = s[1];
              "replaceWith" === r ? o[0] !== i[0] && o.replaceWith(i) : "img" === r ? o.is("img") ? o.attr("src", i) : o.replaceWith(t("<img>").attr("src", i).attr("class", o.attr("class"))) : o.attr(s[1], i)
            }
          } else e.find(".mfp-" + n).html(i)
        })
      },
      _getScrollbarSize: function () {
        if (void 0 === e.scrollbarSize) {
          var t = document.createElement("div");
          t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), e.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
        }
        return e.scrollbarSize
      }
    }, t.magnificPopup = {
      instance: null,
      proto: a.prototype,
      modules: [],
      open: function (e, n) {
        return f(), (e = e ? t.extend(!0, {}, e) : {}).isObj = !0, e.index = n || 0, this.instance.open(e)
      },
      close: function () {
        return t.magnificPopup.instance && t.magnificPopup.instance.close()
      },
      registerModule: function (e, n) {
        n.options && (t.magnificPopup.defaults[e] = n.options), t.extend(this.proto, n.proto), this.modules.push(e)
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: "",
        preloader: !0,
        focus: "",
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: "auto",
        fixedBgPos: "auto",
        overflowY: "auto",
        closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
        tClose: "Close (Esc)",
        tLoading: "Loading...",
        autoFocusLast: !0
      }
    }, t.fn.magnificPopup = function (n) {
      f();
      var i = t(this);
      if ("string" == typeof n)
        if ("open" === n) {
          var s, o = l ? i.data("magnificPopup") : i[0].magnificPopup,
            r = parseInt(arguments[1], 10) || 0;
          o.items ? s = o.items[r] : (s = i, o.delegate && (s = s.find(o.delegate)), s = s.eq(r)), e._openClick({
            mfpEl: s
          }, i, o)
        } else e.isOpen && e[n].apply(e, Array.prototype.slice.call(arguments, 1));
      else n = t.extend(!0, {}, n), l ? i.data("magnificPopup", n) : i[0].magnificPopup = n, e.addGroup(i, n);
      return i
    };
    var g, m, v, y = function () {
      v && (m.after(v.addClass(g)).detach(), v = null)
    };
    t.magnificPopup.registerModule("inline", {
      options: {
        hiddenClass: "hide",
        markup: "",
        tNotFound: "Content not found"
      },
      proto: {
        initInline: function () {
          e.types.push("inline"), u("Close.inline", function () {
            y()
          })
        },
        getInline: function (n, i) {
          if (y(), n.src) {
            var s = e.st.inline,
              o = t(n.src);
            if (o.length) {
              var r = o[0].parentNode;
              r && r.tagName && (m || (g = s.hiddenClass, m = h(g), g = "mfp-" + g), v = o.after(m).detach().removeClass(g)), e.updateStatus("ready")
            } else e.updateStatus("error", s.tNotFound), o = t("<div>");
            return n.inlineElement = o, o
          }
          return e.updateStatus("ready"), e._parseMarkup(i, {}, n), i
        }
      }
    });
    var _, b = function () {
        _ && t(document.body).removeClass(_)
      },
      w = function () {
        b(), e.req && e.req.abort()
      };
    t.magnificPopup.registerModule("ajax", {
      options: {
        settings: null,
        cursor: "mfp-ajax-cur",
        tError: '<a href="%url%">The content</a> could not be loaded.'
      },
      proto: {
        initAjax: function () {
          e.types.push("ajax"), _ = e.st.ajax.cursor, u("Close.ajax", w), u("BeforeChange.ajax", w)
        },
        getAjax: function (n) {
          _ && t(document.body).addClass(_), e.updateStatus("loading");
          var i = t.extend({
            url: n.src,
            success: function (i, s, o) {
              var r = {
                data: i,
                xhr: o
              };
              d("ParseAjax", r), e.appendContent(t(r.data), "ajax"), n.finished = !0, b(), e._setFocus(), setTimeout(function () {
                e.wrap.addClass("mfp-ready")
              }, 16), e.updateStatus("ready"), d("AjaxContentAdded")
            },
            error: function () {
              b(), n.finished = n.loadError = !0, e.updateStatus("error", e.st.ajax.tError.replace("%url%", n.src))
            }
          }, e.st.ajax.settings);
          return e.req = t.ajax(i), ""
        }
      }
    });
    var x, C = function (n) {
      if (n.data && void 0 !== n.data.title) return n.data.title;
      var i = e.st.image.titleSrc;
      if (i) {
        if (t.isFunction(i)) return i.call(e, n);
        if (n.el) return n.el.attr(i) || ""
      }
      return ""
    };
    t.magnificPopup.registerModule("image", {
      options: {
        markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
        cursor: "mfp-zoom-out-cur",
        titleSrc: "title",
        verticalFit: !0,
        tError: '<a href="%url%">The image</a> could not be loaded.'
      },
      proto: {
        initImage: function () {
          var n = e.st.image,
            i = ".image";
          e.types.push("image"), u("Open" + i, function () {
            "image" === e.currItem.type && n.cursor && t(document.body).addClass(n.cursor)
          }), u("Close" + i, function () {
            n.cursor && t(document.body).removeClass(n.cursor), c.off("resize.mfp")
          }), u("Resize" + i, e.resizeImage), e.isLowIE && u("AfterChange", e.resizeImage)
        },
        resizeImage: function () {
          var t = e.currItem;
          if (t && t.img && e.st.image.verticalFit) {
            var n = 0;
            e.isLowIE && (n = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", e.wH - n)
          }
        },
        _onImageHasSize: function (t) {
          t.img && (t.hasSize = !0, x && clearInterval(x), t.isCheckingImgSize = !1, d("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1))
        },
        findImageSize: function (t) {
          var n = 0,
            i = t.img[0],
            s = function (o) {
              x && clearInterval(x), x = setInterval(function () {
                i.naturalWidth > 0 ? e._onImageHasSize(t) : (n > 200 && clearInterval(x), 3 === ++n ? s(10) : 40 === n ? s(50) : 100 === n && s(500))
              }, o)
            };
          s(1)
        },
        getImage: function (n, i) {
          var s = 0,
            o = function () {
              n && (n.img[0].complete ? (n.img.off(".mfploader"), n === e.currItem && (e._onImageHasSize(n), e.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, d("ImageLoadComplete")) : ++s < 200 ? setTimeout(o, 100) : r())
            },
            r = function () {
              n && (n.img.off(".mfploader"), n === e.currItem && (e._onImageHasSize(n), e.updateStatus("error", a.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0)
            },
            a = e.st.image,
            l = i.find(".mfp-img");
          if (l.length) {
            var c = document.createElement("img");
            c.className = "mfp-img", n.el && n.el.find("img").length && (c.alt = n.el.find("img").attr("alt")), n.img = t(c).on("load.mfploader", o).on("error.mfploader", r), c.src = n.src, l.is("img") && (n.img = n.img.clone()), (c = n.img[0]).naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1)
          }
          return e._parseMarkup(i, {
            title: C(n),
            img_replaceWith: n.img
          }, n), e.resizeImage(), n.hasSize ? (x && clearInterval(x), n.loadError ? (i.addClass("mfp-loading"), e.updateStatus("error", a.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), e.updateStatus("ready")), i) : (e.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), e.findImageSize(n)), i)
        }
      }
    });
    var E;
    t.magnificPopup.registerModule("zoom", {
      options: {
        enabled: !1,
        easing: "ease-in-out",
        duration: 300,
        opener: function (t) {
          return t.is("img") ? t : t.find("img")
        }
      },
      proto: {
        initZoom: function () {
          var t, n = e.st.zoom,
            i = ".zoom";
          if (n.enabled && e.supportsTransition) {
            var s, o, r = n.duration,
              a = function (t) {
                var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                  i = "all " + n.duration / 1e3 + "s " + n.easing,
                  s = {
                    position: "fixed",
                    zIndex: 9999,
                    left: 0,
                    top: 0,
                    "-webkit-backface-visibility": "hidden"
                  },
                  o = "transition";
                return s["-webkit-" + o] = s["-moz-" + o] = s["-o-" + o] = s[o] = i, e.css(s), e
              },
              l = function () {
                e.content.css("visibility", "visible")
              };
            u("BuildControls" + i, function () {
              if (e._allowZoom()) {
                if (clearTimeout(s), e.content.css("visibility", "hidden"), !(t = e._getItemToZoom())) return void l();
                (o = a(t)).css(e._getOffset()), e.wrap.append(o), s = setTimeout(function () {
                  o.css(e._getOffset(!0)), s = setTimeout(function () {
                    l(), setTimeout(function () {
                      o.remove(), t = o = null, d("ZoomAnimationEnded")
                    }, 16)
                  }, r)
                }, 16)
              }
            }), u("BeforeClose" + i, function () {
              if (e._allowZoom()) {
                if (clearTimeout(s), e.st.removalDelay = r, !t) {
                  if (!(t = e._getItemToZoom())) return;
                  o = a(t)
                }
                o.css(e._getOffset(!0)), e.wrap.append(o), e.content.css("visibility", "hidden"), setTimeout(function () {
                  o.css(e._getOffset())
                }, 16)
              }
            }), u("Close" + i, function () {
              e._allowZoom() && (l(), o && o.remove(), t = null)
            })
          }
        },
        _allowZoom: function () {
          return "image" === e.currItem.type
        },
        _getItemToZoom: function () {
          return !!e.currItem.hasSize && e.currItem.img
        },
        _getOffset: function (n) {
          var i, s = (i = n ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem)).offset(),
            o = parseInt(i.css("padding-top"), 10),
            r = parseInt(i.css("padding-bottom"), 10);
          s.top -= t(window).scrollTop() - o;
          var a = {
            width: i.width(),
            height: (l ? i.innerHeight() : i[0].offsetHeight) - r - o
          };
          return void 0 === E && (E = void 0 !== document.createElement("p").style.MozTransform), E ? a["-moz-transform"] = a.transform = "translate(" + s.left + "px," + s.top + "px)" : (a.left = s.left, a.top = s.top), a
        }
      }
    });
    var T = function (t) {
      if (e.currTemplate.iframe) {
        var n = e.currTemplate.iframe.find("iframe");
        n.length && (t || (n[0].src = "//about:blank"), e.isIE8 && n.css("display", t ? "block" : "none"))
      }
    };
    t.magnificPopup.registerModule("iframe", {
      options: {
        markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
        srcAction: "iframe_src",
        patterns: {
          youtube: {
            index: "youtube.com",
            id: "v=",
            src: "//www.youtube.com/embed/%id%?autoplay=1"
          },
          vimeo: {
            index: "vimeo.com/",
            id: "/",
            src: "//player.vimeo.com/video/%id%?autoplay=1"
          },
          gmaps: {
            index: "//maps.google.",
            src: "%id%&output=embed"
          }
        }
      },
      proto: {
        initIframe: function () {
          e.types.push("iframe"), u("BeforeChange", function (t, e, n) {
            e !== n && ("iframe" === e ? T() : "iframe" === n && T(!0))
          }), u("Close.iframe", function () {
            T()
          })
        },
        getIframe: function (n, i) {
          var s = n.src,
            o = e.st.iframe;
          t.each(o.patterns, function () {
            if (s.indexOf(this.index) > -1) return this.id && (s = "string" == typeof this.id ? s.substr(s.lastIndexOf(this.id) + this.id.length, s.length) : this.id.call(this, s)), s = this.src.replace("%id%", s), !1
          });
          var r = {};
          return o.srcAction && (r[o.srcAction] = s), e._parseMarkup(i, r, n), e.updateStatus("ready"), i
        }
      }
    });
    var k = function (t) {
        var n = e.items.length;
        return t > n - 1 ? t - n : t < 0 ? n + t : t
      },
      S = function (t, e, n) {
        return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, n)
      };
    t.magnificPopup.registerModule("gallery", {
      options: {
        enabled: !1,
        arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
        preload: [0, 2],
        navigateByImgClick: !0,
        arrows: !0,
        tPrev: "Previous (Left arrow key)",
        tNext: "Next (Right arrow key)",
        tCounter: "%curr% of %total%"
      },
      proto: {
        initGallery: function () {
          var n = e.st.gallery,
            s = ".mfp-gallery";
          if (e.direction = !0, !n || !n.enabled) return !1;
          o += " mfp-gallery", u("Open" + s, function () {
            n.navigateByImgClick && e.wrap.on("click" + s, ".mfp-img", function () {
              if (e.items.length > 1) return e.next(), !1
            }), i.on("keydown" + s, function (t) {
              37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next()
            })
          }), u("UpdateStatus" + s, function (t, n) {
            n.text && (n.text = S(n.text, e.currItem.index, e.items.length))
          }), u("MarkupParse" + s, function (t, i, s, o) {
            var r = e.items.length;
            s.counter = r > 1 ? S(n.tCounter, o.index, r) : ""
          }), u("BuildControls" + s, function () {
            if (e.items.length > 1 && n.arrows && !e.arrowLeft) {
              var i = n.arrowMarkup,
                s = e.arrowLeft = t(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass("mfp-prevent-close"),
                o = e.arrowRight = t(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass("mfp-prevent-close");
              s.click(function () {
                e.prev()
              }), o.click(function () {
                e.next()
              }), e.container.append(s.add(o))
            }
          }), u("Change" + s, function () {
            e._preloadTimeout && clearTimeout(e._preloadTimeout), e._preloadTimeout = setTimeout(function () {
              e.preloadNearbyImages(), e._preloadTimeout = null
            }, 16)
          }), u("Close" + s, function () {
            i.off(s), e.wrap.off("click" + s), e.arrowRight = e.arrowLeft = null
          })
        },
        next: function () {
          e.direction = !0, e.index = k(e.index + 1), e.updateItemHTML()
        },
        prev: function () {
          e.direction = !1, e.index = k(e.index - 1), e.updateItemHTML()
        },
        goTo: function (t) {
          e.direction = t >= e.index, e.index = t, e.updateItemHTML()
        },
        preloadNearbyImages: function () {
          var t, n = e.st.gallery.preload,
            i = Math.min(n[0], e.items.length),
            s = Math.min(n[1], e.items.length);
          for (t = 1; t <= (e.direction ? s : i); t++) e._preloadItem(e.index + t);
          for (t = 1; t <= (e.direction ? i : s); t++) e._preloadItem(e.index - t)
        },
        _preloadItem: function (n) {
          if (n = k(n), !e.items[n].preloaded) {
            var i = e.items[n];
            i.parsed || (i = e.parseEl(n)), d("LazyLoad", i), "image" === i.type && (i.img = t('<img class="mfp-img" />').on("load.mfploader", function () {
              i.hasSize = !0
            }).on("error.mfploader", function () {
              i.hasSize = !0, i.loadError = !0, d("LazyLoadError", i)
            }).attr("src", i.src)), i.preloaded = !0
          }
        }
      }
    });
    t.magnificPopup.registerModule("retina", {
      options: {
        replaceSrc: function (t) {
          return t.src.replace(/\.\w+$/, function (t) {
            return "@2x" + t
          })
        },
        ratio: 1
      },
      proto: {
        initRetina: function () {
          if (window.devicePixelRatio > 1) {
            var t = e.st.retina,
              n = t.ratio;
            (n = isNaN(n) ? n() : n) > 1 && (u("ImageHasSize.retina", function (t, e) {
              e.img.css({
                "max-width": e.img[0].naturalWidth / n,
                width: "100%"
              })
            }), u("ElementParse.retina", function (e, i) {
              i.src = t.replaceSrc(i, n)
            }))
          }
        }
      }
    }), f()
  }),
  function () {
    var t, e, n, i, s, o = function (t, e) {
        return function () {
          return t.apply(e, arguments)
        }
      },
      r = [].indexOf || function (t) {
        for (var e = 0, n = this.length; e < n; e++)
          if (e in this && this[e] === t) return e;
        return -1
      };
    e = function () {
      function t() {}
      return t.prototype.extend = function (t, e) {
        var n, i;
        for (n in e) i = e[n], null == t[n] && (t[n] = i);
        return t
      }, t.prototype.isMobile = function (t) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
      }, t.prototype.createEvent = function (t, e, n, i) {
        var s;
        return null == e && (e = !1), null == n && (n = !1), null == i && (i = null), null != document.createEvent ? (s = document.createEvent("CustomEvent")).initCustomEvent(t, e, n, i) : null != document.createEventObject ? (s = document.createEventObject()).eventType = t : s.eventName = t, s
      }, t.prototype.emitEvent = function (t, e) {
        return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0
      }, t.prototype.addEvent = function (t, e, n) {
        return null != t.addEventListener ? t.addEventListener(e, n, !1) : null != t.attachEvent ? t.attachEvent("on" + e, n) : t[e] = n
      }, t.prototype.removeEvent = function (t, e, n) {
        return null != t.removeEventListener ? t.removeEventListener(e, n, !1) : null != t.detachEvent ? t.detachEvent("on" + e, n) : delete t[e]
      }, t.prototype.innerHeight = function () {
        return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
      }, t
    }(), n = this.WeakMap || this.MozWeakMap || (n = function () {
      function t() {
        this.keys = [], this.values = []
      }
      return t.prototype.get = function (t) {
        var e, n, i, s;
        for (e = n = 0, i = (s = this.keys).length; n < i; e = ++n)
          if (s[e] === t) return this.values[e]
      }, t.prototype.set = function (t, e) {
        var n, i, s, o;
        for (n = i = 0, s = (o = this.keys).length; i < s; n = ++i)
          if (o[n] === t) return void(this.values[n] = e);
        return this.keys.push(t), this.values.push(e)
      }, t
    }()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function () {
      function t() {
        "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
      }
      return t.notSupported = !0, t.prototype.observe = function () {}, t
    }()), i = this.getComputedStyle || function (t, e) {
      return this.getPropertyValue = function (e) {
        var n;
        return "float" === e && (e = "styleFloat"), s.test(e) && e.replace(s, function (t, e) {
          return e.toUpperCase()
        }), (null != (n = t.currentStyle) ? n[e] : void 0) || null
      }, this
    }, s = /(\-([a-z]){1})/g, this.WOW = function () {
      function s(t) {
        null == t && (t = {}), this.scrollCallback = o(this.scrollCallback, this), this.scrollHandler = o(this.scrollHandler, this), this.resetAnimation = o(this.resetAnimation, this), this.start = o(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), null != t.scrollContainer && (this.config.scrollContainer = document.querySelector(t.scrollContainer)), this.animationNameCache = new n, this.wowEvent = this.util().createEvent(this.config.boxClass)
      }
      return s.prototype.defaults = {
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: !0,
        live: !0,
        callback: null,
        scrollContainer: null
      }, s.prototype.init = function () {
        var t;
        return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
      }, s.prototype.start = function () {
        var e, n, i, s, o;
        if (this.stopped = !1, this.boxes = function () {
            var t, n, i, s;
            for (s = [], t = 0, n = (i = this.element.querySelectorAll("." + this.config.boxClass)).length; t < n; t++) e = i[t], s.push(e);
            return s
          }.call(this), this.all = function () {
            var t, n, i, s;
            for (s = [], t = 0, n = (i = this.boxes).length; t < n; t++) e = i[t], s.push(e);
            return s
          }.call(this), this.boxes.length)
          if (this.disabled()) this.resetStyle();
          else
            for (n = 0, i = (s = this.boxes).length; n < i; n++) e = s[n], this.applyStyle(e, !0);
        if (this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live) return new t((o = this, function (t) {
          var e, n, i, s, r;
          for (r = [], e = 0, n = t.length; e < n; e++) s = t[e], r.push(function () {
            var t, e, n, o;
            for (o = [], t = 0, e = (n = s.addedNodes || []).length; t < e; t++) i = n[t], o.push(this.doSync(i));
            return o
          }.call(o));
          return r
        })).observe(document.body, {
          childList: !0,
          subtree: !0
        })
      }, s.prototype.stop = function () {
        if (this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval) return clearInterval(this.interval)
      }, s.prototype.sync = function (e) {
        if (t.notSupported) return this.doSync(this.element)
      }, s.prototype.doSync = function (t) {
        var e, n, i, s, o;
        if (null == t && (t = this.element), 1 === t.nodeType) {
          for (o = [], n = 0, i = (s = (t = t.parentNode || t).querySelectorAll("." + this.config.boxClass)).length; n < i; n++) e = s[n], r.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), o.push(this.scrolled = !0)) : o.push(void 0);
          return o
        }
      }, s.prototype.show = function (t) {
        return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t), this.util().emitEvent(t, this.wowEvent), this.util().addEvent(t, "animationend", this.resetAnimation), this.util().addEvent(t, "oanimationend", this.resetAnimation), this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation), t
      }, s.prototype.applyStyle = function (t, e) {
        var n, i, s, o;
        return i = t.getAttribute("data-wow-duration"), n = t.getAttribute("data-wow-delay"), s = t.getAttribute("data-wow-iteration"), this.animate((o = this, function () {
          return o.customStyle(t, e, i, n, s)
        }))
      }, s.prototype.animate = "requestAnimationFrame" in window ? function (t) {
        return window.requestAnimationFrame(t)
      } : function (t) {
        return t()
      }, s.prototype.resetStyle = function () {
        var t, e, n, i, s;
        for (s = [], e = 0, n = (i = this.boxes).length; e < n; e++) t = i[e], s.push(t.style.visibility = "visible");
        return s
      }, s.prototype.resetAnimation = function (t) {
        var e;
        if (t.type.toLowerCase().indexOf("animationend") >= 0) return (e = t.target || t.srcElement).className = e.className.replace(this.config.animateClass, "").trim()
      }, s.prototype.customStyle = function (t, e, n, i, s) {
        return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", n && this.vendorSet(t.style, {
          animationDuration: n
        }), i && this.vendorSet(t.style, {
          animationDelay: i
        }), s && this.vendorSet(t.style, {
          animationIterationCount: s
        }), this.vendorSet(t.style, {
          animationName: e ? "none" : this.cachedAnimationName(t)
        }), t
      }, s.prototype.vendors = ["moz", "webkit"], s.prototype.vendorSet = function (t, e) {
        var n, i, s, o;
        for (n in i = [], e) s = e[n], t["" + n] = s, i.push(function () {
          var e, i, r, a;
          for (a = [], e = 0, i = (r = this.vendors).length; e < i; e++) o = r[e], a.push(t["" + o + n.charAt(0).toUpperCase() + n.substr(1)] = s);
          return a
        }.call(this));
        return i
      }, s.prototype.vendorCSS = function (t, e) {
        var n, s, o, r, a, l;
        for (r = (a = i(t)).getPropertyCSSValue(e), n = 0, s = (o = this.vendors).length; n < s; n++) l = o[n], r = r || a.getPropertyCSSValue("-" + l + "-" + e);
        return r
      }, s.prototype.animationName = function (t) {
        var e;
        try {
          e = this.vendorCSS(t, "animation-name").cssText
        } catch (n) {
          e = i(t).getPropertyValue("animation-name")
        }
        return "none" === e ? "" : e
      }, s.prototype.cacheAnimationName = function (t) {
        return this.animationNameCache.set(t, this.animationName(t))
      }, s.prototype.cachedAnimationName = function (t) {
        return this.animationNameCache.get(t)
      }, s.prototype.scrollHandler = function () {
        return this.scrolled = !0
      }, s.prototype.scrollCallback = function () {
        var t;
        if (this.scrolled && (this.scrolled = !1, this.boxes = function () {
            var e, n, i, s;
            for (s = [], e = 0, n = (i = this.boxes).length; e < n; e++)(t = i[e]) && (this.isVisible(t) ? this.show(t) : s.push(t));
            return s
          }.call(this), !this.boxes.length && !this.config.live)) return this.stop()
      }, s.prototype.offsetTop = function (t) {
        for (var e; void 0 === t.offsetTop;) t = t.parentNode;
        for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
        return e
      }, s.prototype.isVisible = function (t) {
        var e, n, i, s, o;
        return n = t.getAttribute("data-wow-offset") || this.config.offset, s = (o = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset) + Math.min(this.element.clientHeight, this.util().innerHeight()) - n, e = (i = this.offsetTop(t)) + t.clientHeight, i <= s && e >= o
      }, s.prototype.util = function () {
        return null != this._util ? this._util : this._util = new e
      }, s.prototype.disabled = function () {
        return !this.config.mobile && this.util().isMobile(navigator.userAgent)
      }, s
    }()
  }.call(this),
    function (t) {
      t.fn.footerReveal = function (e) {
        var n = t(this),
          i = n.prev(),
          s = t(window),
          o = t.extend({
            shadow: !0,
            shadowOpacity: .8,
            zIndex: -100
          }, e);
        t.extend(!0, {}, o, e);
        return n.outerHeight() <= s.outerHeight() && n.offset().top >= s.outerHeight() && (n.css({
          "z-index": o.zIndex,
          position: "fixed",
          bottom: 0
        }), o.shadow && i.css({
          "-moz-box-shadow": "0 20px 30px -20px rgba(0,0,0," + o.shadowOpacity + ")",
          "-webkit-box-shadow": "0 20px 30px -20px rgba(0,0,0," + o.shadowOpacity + ")",
          "box-shadow": "0 20px 30px -20px rgba(0,0,0," + o.shadowOpacity + ")"
        }), s.on("load resize footerRevealResize", function () {
          n.css({
            width: i.outerWidth()
          }), i.css({
            "margin-bottom": n.outerHeight()
          })
        })), this
      }
    }(jQuery),
    function (t, e) {
      "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.LazyLoad = e()
    }(this, function () {
      "use strict";
      var t = "undefined" != typeof window,
        e = t && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
        n = t && "IntersectionObserver" in window,
        i = t && "classList" in document.createElement("p"),
        s = {
          elements_selector: "img",
          container: e || t ? document : null,
          threshold: 300,
          thresholds: null,
          data_src: "src",
          data_srcset: "srcset",
          data_sizes: "sizes",
          data_bg: "bg",
          class_loading: "loading",
          class_loaded: "loaded",
          class_error: "error",
          load_delay: 0,
          auto_unobserve: !0,
          callback_enter: null,
          callback_exit: null,
          callback_reveal: null,
          callback_loaded: null,
          callback_error: null,
          callback_finish: null,
          use_native: !1
        },
        o = function (t, e) {
          var n, i = new t(e);
          try {
            n = new CustomEvent("LazyLoad::Initialized", {
              detail: {
                instance: i
              }
            })
          } catch (t) {
            (n = document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized", !1, !1, {
              instance: i
            })
          }
          window.dispatchEvent(n)
        };
      var r = function (t, e) {
          return t.getAttribute("data-" + e)
        },
        a = function (t, e, n) {
          var i = "data-" + e;
          null !== n ? t.setAttribute(i, n) : t.removeAttribute(i)
        },
        l = function (t) {
          return "true" === r(t, "was-processed")
        },
        c = function (t, e) {
          return a(t, "ll-timeout", e)
        },
        u = function (t) {
          return r(t, "ll-timeout")
        },
        h = function (t, e) {
          t && t(e)
        },
        d = function (t, e) {
          t._loadingCount += e, 0 === t._elements.length && 0 === t._loadingCount && h(t._settings.callback_finish)
        },
        p = function (t) {
          for (var e, n = [], i = 0; e = t.children[i]; i += 1) "SOURCE" === e.tagName && n.push(e);
          return n
        },
        f = function (t, e, n) {
          n && t.setAttribute(e, n)
        },
        g = function (t, e) {
          f(t, "sizes", r(t, e.data_sizes)), f(t, "srcset", r(t, e.data_srcset)), f(t, "src", r(t, e.data_src))
        },
        m = {
          IMG: function (t, e) {
            var n = t.parentNode;
            n && "PICTURE" === n.tagName && p(n).forEach(function (t) {
              g(t, e)
            });
            g(t, e)
          },
          IFRAME: function (t, e) {
            f(t, "src", r(t, e.data_src))
          },
          VIDEO: function (t, e) {
            p(t).forEach(function (t) {
              f(t, "src", r(t, e.data_src))
            }), f(t, "src", r(t, e.data_src)), t.load()
          }
        },
        v = function (t, e) {
          var n, i, s = e._settings,
            o = t.tagName,
            a = m[o];
          if (a) return a(t, s), d(e, 1), void(e._elements = (n = e._elements, i = t, n.filter(function (t) {
            return t !== i
          })));
          ! function (t, e) {
            var n = r(t, e.data_src),
              i = r(t, e.data_bg);
            n && (t.style.backgroundImage = 'url("'.concat(n, '")')), i && (t.style.backgroundImage = i)
          }(t, s)
        },
        y = function (t, e) {
          i ? t.classList.add(e) : t.className += (t.className ? " " : "") + e
        },
        _ = function (t, e, n) {
          t.addEventListener(e, n)
        },
        b = function (t, e, n) {
          t.removeEventListener(e, n)
        },
        w = function (t, e, n) {
          b(t, "load", e), b(t, "loadeddata", e), b(t, "error", n)
        },
        x = function (t, e, n) {
          var s = n._settings,
            o = e ? s.class_loaded : s.class_error,
            r = e ? s.callback_loaded : s.callback_error,
            a = t.target;
          ! function (t, e) {
            i ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
          }(a, s.class_loading), y(a, o), h(r, a), d(n, -1)
        },
        C = function (t, e) {
          var n = function n(s) {
              x(s, !0, e), w(t, n, i)
            },
            i = function i(s) {
              x(s, !1, e), w(t, n, i)
            };
          ! function (t, e, n) {
            _(t, "load", e), _(t, "loadeddata", e), _(t, "error", n)
          }(t, n, i)
        },
        E = ["IMG", "IFRAME", "VIDEO"],
        T = function (t, e) {
          var n = e._observer;
          A(t, e), n && e._settings.auto_unobserve && n.unobserve(t)
        },
        k = function (t) {
          var e = u(t);
          e && (clearTimeout(e), c(t, null))
        },
        S = function (t, e) {
          var n = e._settings.load_delay,
            i = u(t);
          i || (i = setTimeout(function () {
            T(t, e), k(t)
          }, n), c(t, i))
        },
        A = function (t, e, n) {
          var i = e._settings;
          !n && l(t) || (E.indexOf(t.tagName) > -1 && (C(t, e), y(t, i.class_loading)), v(t, e), function (t) {
            a(t, "was-processed", "true")
          }(t), h(i.callback_reveal, t), h(i.callback_set, t))
        },
        O = function (t) {
          return !!n && (t._observer = new IntersectionObserver(function (e) {
            e.forEach(function (e) {
              return function (t) {
                return t.isIntersecting || t.intersectionRatio > 0
              }(e) ? function (t, e) {
                var n = e._settings;
                h(n.callback_enter, t), n.load_delay ? S(t, e) : T(t, e)
              }(e.target, t) : function (t, e) {
                var n = e._settings;
                h(n.callback_exit, t), n.load_delay && k(t)
              }(e.target, t)
            })
          }, {
            root: (e = t._settings).container === document ? null : e.container,
            rootMargin: e.thresholds || e.threshold + "px"
          }), !0);
          var e
        },
        L = ["IMG", "IFRAME"],
        N = function (t, e) {
          return function (t) {
            return t.filter(function (t) {
              return !l(t)
            })
          }((n = t || function (t) {
            return t.container.querySelectorAll(t.elements_selector)
          }(e), Array.prototype.slice.call(n)));
          var n
        },
        D = function (t, e) {
          this._settings = function (t) {
            return _extends({}, s, t)
          }(t), this._loadingCount = 0, O(this), this.update(e)
        };
      return D.prototype = {
        update: function (t) {
          var n, i = this,
            s = this._settings;
          (this._elements = N(t, s), !e && this._observer) ? (function (t) {
            return t.use_native && "loading" in HTMLImageElement.prototype
          }(s) && ((n = this)._elements.forEach(function (t) {
            -1 !== L.indexOf(t.tagName) && (t.setAttribute("loading", "lazy"), A(t, n))
          }), this._elements = N(t, s)), this._elements.forEach(function (t) {
            i._observer.observe(t)
          })) : this.loadAll()
        },
        destroy: function () {
          var t = this;
          this._observer && (this._elements.forEach(function (e) {
            t._observer.unobserve(e)
          }), this._observer = null), this._elements = null, this._settings = null
        },
        load: function (t, e) {
          A(t, this, e)
        },
        loadAll: function () {
          var t = this;
          this._elements.forEach(function (e) {
            T(e, t)
          })
        }
      }, t && function (t, e) {
        if (e)
          if (e.length)
            for (var n, i = 0; n = e[i]; i += 1) o(t, n);
          else o(t, e)
      }(D, window.lazyLoadOptions), D
    }),
    function (t, e) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e()
    }(this, function () {
      "use strict";
      const t = {
          find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
          findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
          children: (t, e) => [].concat(...t.children).filter(t => t.matches(e)),
          parents(t, e) {
            const n = [];
            let i = t.parentNode;
            for (; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;) i.matches(e) && n.push(i), i = i.parentNode;
            return n
          },
          prev(t, e) {
            let n = t.previousElementSibling;
            for (; n;) {
              if (n.matches(e)) return [n];
              n = n.previousElementSibling
            }
            return []
          },
          next(t, e) {
            let n = t.nextElementSibling;
            for (; n;) {
              if (n.matches(e)) return [n];
              n = n.nextElementSibling
            }
            return []
          }
        },
        e = t => {
          do {
            t += Math.floor(1e6 * Math.random())
          } while (document.getElementById(t));
          return t
        },
        n = t => {
          let e = t.getAttribute("data-bs-target");
          if (!e || "#" === e) {
            let n = t.getAttribute("href");
            if (!n || !n.includes("#") && !n.startsWith(".")) return null;
            n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`), e = n && "#" !== n ? n.trim() : null
          }
          return e
        },
        i = t => {
          const e = n(t);
          return e && document.querySelector(e) ? e : null
        },
        s = t => {
          const e = n(t);
          return e ? document.querySelector(e) : null
        },
        o = t => {
          t.dispatchEvent(new Event("transitionend"))
        },
        r = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
        a = e => r(e) ? e.jquery ? e[0] : e : "string" == typeof e && e.length > 0 ? t.findOne(e) : null,
        l = (t, e, n) => {
          Object.keys(n).forEach(i => {
            const s = n[i],
              o = e[i],
              a = o && r(o) ? "element" : (t => null == t ? `${t}` : {}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase())(o);
            if (!new RegExp(s).test(a)) throw new TypeError(`${t.toUpperCase()}: Option "${i}" provided type "${a}" but expected type "${s}".`)
          })
        },
        c = t => !(!r(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility"),
        u = t => !t || t.nodeType !== Node.ELEMENT_NODE || (!!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"))),
        h = t => {
          if (!document.documentElement.attachShadow) return null;
          if ("function" == typeof t.getRootNode) {
            const e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null
          }
          return t instanceof ShadowRoot ? t : t.parentNode ? h(t.parentNode) : null
        },
        d = () => {},
        p = t => t.offsetHeight,
        f = () => {
          const {
            jQuery: t
          } = window;
          return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
        },
        g = [],
        m = () => "rtl" === document.documentElement.dir,
        v = t => {
          (t => {
            "loading" === document.readyState ? (g.length || document.addEventListener("DOMContentLoaded", () => {
              g.forEach(t => t())
            }), g.push(t)) : t()
          })(() => {
            const e = f();
            if (e) {
              const n = t.NAME,
                i = e.fn[n];
              e.fn[n] = t.jQueryInterface, e.fn[n].Constructor = t, e.fn[n].noConflict = (() => (e.fn[n] = i, t.jQueryInterface))
            }
          })
        },
        y = t => {
          "function" == typeof t && t()
        },
        _ = (t, e, n = !0) => {
          if (!n) return void y(t);
          const i = (t => {
            if (!t) return 0;
            let {
              transitionDuration: e,
              transitionDelay: n
            } = window.getComputedStyle(t);
            const i = Number.parseFloat(e),
              s = Number.parseFloat(n);
            return i || s ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(n))) : 0
          })(e) + 5;
          let s = !1;
          const r = ({
            target: n
          }) => {
            n === e && (s = !0, e.removeEventListener("transitionend", r), y(t))
          };
          e.addEventListener("transitionend", r), setTimeout(() => {
            s || o(e)
          }, i)
        },
        b = (t, e, n, i) => {
          let s = t.indexOf(e);
          if (-1 === s) return t[!n && i ? t.length - 1 : 0];
          const o = t.length;
          return s += n ? 1 : -1, i && (s = (s + o) % o), t[Math.max(0, Math.min(s, o - 1))]
        },
        w = /[^.]*(?=\..*)\.|.*/,
        x = /\..*/,
        C = /::\d+$/,
        E = {};
      let T = 1;
      const k = {
          mouseenter: "mouseover",
          mouseleave: "mouseout"
        },
        S = /^(mouseenter|mouseleave)/i,
        A = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
  
      function O(t, e) {
        return e && `${e}::${T++}` || t.uidEvent || T++
      }
  
      function L(t) {
        const e = O(t);
        return t.uidEvent = e, E[e] = E[e] || {}, E[e]
      }
  
      function N(t, e, n = null) {
        const i = Object.keys(t);
        for (let s = 0, o = i.length; s < o; s++) {
          const o = t[i[s]];
          if (o.originalHandler === e && o.delegationSelector === n) return o
        }
        return null
      }
  
      function D(t, e, n) {
        const i = "string" == typeof e,
          s = i ? n : e;
        let o = I(t);
        return A.has(o) || (o = t), [i, s, o]
      }
  
      function P(t, e, n, i, s) {
        if ("string" != typeof e || !t) return;
        if (n || (n = i, i = null), S.test(e)) {
          const t = t => (function (e) {
            if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e)
          });
          i ? i = t(i) : n = t(n)
        }
        const [o, r, a] = D(e, n, i), l = L(t), c = l[a] || (l[a] = {}), u = N(c, r, o ? n : null);
        if (u) return void(u.oneOff = u.oneOff && s);
        const h = O(r, e.replace(w, "")),
          d = o ? function (t, e, n) {
            return function i(s) {
              const o = t.querySelectorAll(e);
              for (let {
                  target: r
                } = s; r && r !== this; r = r.parentNode)
                for (let a = o.length; a--;)
                  if (o[a] === r) return s.delegateTarget = r, i.oneOff && M.off(t, s.type, e, n), n.apply(r, [s]);
              return null
            }
          }(t, n, i) : function (t, e) {
            return function n(i) {
              return i.delegateTarget = t, n.oneOff && M.off(t, i.type, e), e.apply(t, [i])
            }
          }(t, n);
        d.delegationSelector = o ? n : null, d.originalHandler = r, d.oneOff = s, d.uidEvent = h, c[h] = d, t.addEventListener(a, d, o)
      }
  
      function $(t, e, n, i, s) {
        const o = N(e[n], i, s);
        o && (t.removeEventListener(n, o, Boolean(s)), delete e[n][o.uidEvent])
      }
  
      function I(t) {
        return t = t.replace(x, ""), k[t] || t
      }
      const M = {
          on(t, e, n, i) {
            P(t, e, n, i, !1)
          },
          one(t, e, n, i) {
            P(t, e, n, i, !0)
          },
          off(t, e, n, i) {
            if ("string" != typeof e || !t) return;
            const [s, o, r] = D(e, n, i), a = r !== e, l = L(t), c = e.startsWith(".");
            if (void 0 !== o) {
              if (!l || !l[r]) return;
              return void $(t, l, r, o, s ? n : null)
            }
            c && Object.keys(l).forEach(n => {
              ! function (t, e, n, i) {
                const s = e[n] || {};
                Object.keys(s).forEach(o => {
                  if (o.includes(i)) {
                    const i = s[o];
                    $(t, e, n, i.originalHandler, i.delegationSelector)
                  }
                })
              }(t, l, n, e.slice(1))
            });
            const u = l[r] || {};
            Object.keys(u).forEach(n => {
              const i = n.replace(C, "");
              if (!a || e.includes(i)) {
                const e = u[n];
                $(t, l, r, e.originalHandler, e.delegationSelector)
              }
            })
          },
          trigger(t, e, n) {
            if ("string" != typeof e || !t) return null;
            const i = f(),
              s = I(e),
              o = e !== s,
              r = A.has(s);
            let a, l = !0,
              c = !0,
              u = !1,
              h = null;
            return o && i && (a = i.Event(e, n), i(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), u = a.isDefaultPrevented()), r ? (h = document.createEvent("HTMLEvents")).initEvent(s, l, !0) : h = new CustomEvent(e, {
              bubbles: l,
              cancelable: !0
            }), void 0 !== n && Object.keys(n).forEach(t => {
              Object.defineProperty(h, t, {
                get: () => n[t]
              })
            }), u && h.preventDefault(), c && t.dispatchEvent(h), h.defaultPrevented && void 0 !== a && a.preventDefault(), h
          }
        },
        j = new Map;
      var H = {
        set(t, e, n) {
          j.has(t) || j.set(t, new Map);
          const i = j.get(t);
          i.has(e) || 0 === i.size ? i.set(e, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)
        },
        get: (t, e) => j.has(t) && j.get(t).get(e) || null,
        remove(t, e) {
          if (!j.has(t)) return;
          const n = j.get(t);
          n.delete(e), 0 === n.size && j.delete(t)
        }
      };
      const z = "5.0.2";
      class q {
        constructor(t) {
          (t = a(t)) && (this._element = t, H.set(this._element, this.constructor.DATA_KEY, this))
        }
        dispose() {
          H.remove(this._element, this.constructor.DATA_KEY), M.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach(t => {
            this[t] = null
          })
        }
        _queueCallback(t, e, n = !0) {
          _(t, e, n)
        }
        static getInstance(t) {
          return H.get(t, this.DATA_KEY)
        }
        static getOrCreateInstance(t, e = {}) {
          return this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
        }
        static get VERSION() {
          return z
        }
        static get NAME() {
          throw new Error('You have to implement the static method "NAME", for each component!')
        }
        static get DATA_KEY() {
          return `bs.${this.NAME}`
        }
        static get EVENT_KEY() {
          return `.${this.DATA_KEY}`
        }
      }
      const R = "alert",
        B = "close.bs.alert",
        W = "closed.bs.alert",
        F = "alert",
        U = "fade",
        V = "show";
      class X extends q {
        static get NAME() {
          return R
        }
        close(t) {
          const e = t ? this._getRootElement(t) : this._element,
            n = this._triggerCloseEvent(e);
          null === n || n.defaultPrevented || this._removeElement(e)
        }
        _getRootElement(t) {
          return s(t) || t.closest(`.${F}`)
        }
        _triggerCloseEvent(t) {
          return M.trigger(t, B)
        }
        _removeElement(t) {
          t.classList.remove(V);
          const e = t.classList.contains(U);
          this._queueCallback(() => this._destroyElement(t), t, e)
        }
        _destroyElement(t) {
          t.remove(), M.trigger(t, W)
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = X.getOrCreateInstance(this);
            "close" === t && e[t](this)
          })
        }
        static handleDismiss(t) {
          return function (e) {
            e && e.preventDefault(), t.close(this)
          }
        }
      }
      M.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', X.handleDismiss(new X)), v(X);
      const Q = "button",
        K = "active";
      class Y extends q {
        static get NAME() {
          return Q
        }
        toggle() {
          this._element.setAttribute("aria-pressed", this._element.classList.toggle(K))
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = Y.getOrCreateInstance(this);
            "toggle" === t && e[t]()
          })
        }
      }
  
      function Z(t) {
        return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
      }
  
      function G(t) {
        return t.replace(/[A-Z]/g, t => `-${t.toLowerCase()}`)
      }
      M.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', t => {
        t.preventDefault();
        const e = t.target.closest('[data-bs-toggle="button"]');
        Y.getOrCreateInstance(e).toggle()
      }), v(Y);
      const J = {
          setDataAttribute(t, e, n) {
            t.setAttribute(`data-bs-${G(e)}`, n)
          },
          removeDataAttribute(t, e) {
            t.removeAttribute(`data-bs-${G(e)}`)
          },
          getDataAttributes(t) {
            if (!t) return {};
            const e = {};
            return Object.keys(t.dataset).filter(t => t.startsWith("bs")).forEach(n => {
              let i = n.replace(/^bs/, "");
              i = i.charAt(0).toLowerCase() + i.slice(1, i.length), e[i] = Z(t.dataset[n])
            }), e
          },
          getDataAttribute: (t, e) => Z(t.getAttribute(`data-bs-${G(e)}`)),
          offset(t) {
            const e = t.getBoundingClientRect();
            return {
              top: e.top + document.body.scrollTop,
              left: e.left + document.body.scrollLeft
            }
          },
          position: t => ({
            top: t.offsetTop,
            left: t.offsetLeft
          })
        },
        tt = "carousel",
        et = 500,
        nt = 40,
        it = {
          interval: 5e3,
          keyboard: !0,
          slide: !1,
          pause: "hover",
          wrap: !0,
          touch: !0
        },
        st = {
          interval: "(number|boolean)",
          keyboard: "boolean",
          slide: "(boolean|string)",
          pause: "(string|boolean)",
          wrap: "boolean",
          touch: "boolean"
        },
        ot = "next",
        rt = "prev",
        at = "left",
        lt = "right",
        ct = {
          ArrowLeft: lt,
          ArrowRight: at
        },
        ut = "slide.bs.carousel",
        ht = "slid.bs.carousel",
        dt = "keydown.bs.carousel",
        pt = "mouseenter.bs.carousel",
        ft = "mouseleave.bs.carousel",
        gt = "touchstart.bs.carousel",
        mt = "touchmove.bs.carousel",
        vt = "touchend.bs.carousel",
        yt = "pointerdown.bs.carousel",
        _t = "pointerup.bs.carousel",
        bt = "dragstart.bs.carousel",
        wt = "carousel",
        xt = "active",
        Ct = "slide",
        Et = "carousel-item-end",
        Tt = "carousel-item-start",
        kt = "carousel-item-next",
        St = "carousel-item-prev",
        At = "pointer-event",
        Ot = ".active",
        Lt = ".active.carousel-item",
        Nt = ".carousel-item",
        Dt = ".carousel-item img",
        Pt = ".carousel-item-next, .carousel-item-prev",
        $t = ".carousel-indicators",
        It = "[data-bs-target]",
        Mt = "touch",
        jt = "pen";
      class Ht extends q {
        constructor(e, n) {
          super(e), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(n), this._indicatorsElement = t.findOne($t, this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners()
        }
        static get Default() {
          return it
        }
        static get NAME() {
          return tt
        }
        next() {
          this._slide(ot)
        }
        nextWhenVisible() {
          !document.hidden && c(this._element) && this.next()
        }
        prev() {
          this._slide(rt)
        }
        pause(e) {
          e || (this._isPaused = !0), t.findOne(Pt, this._element) && (o(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
        }
        cycle(t) {
          t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        to(e) {
          this._activeElement = t.findOne(Lt, this._element);
          const n = this._getItemIndex(this._activeElement);
          if (e > this._items.length - 1 || e < 0) return;
          if (this._isSliding) return void M.one(this._element, ht, () => this.to(e));
          if (n === e) return this.pause(), void this.cycle();
          const i = e > n ? ot : rt;
          this._slide(i, this._items[e])
        }
        _getConfig(t) {
          return t = {
            ...it,
            ...J.getDataAttributes(this._element),
            ..."object" == typeof t ? t : {}
          }, l(tt, t, st), t
        }
        _handleSwipe() {
          const t = Math.abs(this.touchDeltaX);
          if (t <= nt) return;
          const e = t / this.touchDeltaX;
          this.touchDeltaX = 0, e && this._slide(e > 0 ? lt : at)
        }
        _addEventListeners() {
          this._config.keyboard && M.on(this._element, dt, t => this._keydown(t)), "hover" === this._config.pause && (M.on(this._element, pt, t => this.pause(t)), M.on(this._element, ft, t => this.cycle(t))), this._config.touch && this._touchSupported && this._addTouchEventListeners()
        }
        _addTouchEventListeners() {
          const e = t => {
              !this._pointerEvent || t.pointerType !== jt && t.pointerType !== Mt ? this._pointerEvent || (this.touchStartX = t.touches[0].clientX) : this.touchStartX = t.clientX
            },
            n = t => {
              this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX
            },
            i = t => {
              !this._pointerEvent || t.pointerType !== jt && t.pointerType !== Mt || (this.touchDeltaX = t.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(t => this.cycle(t), et + this._config.interval))
            };
          t.find(Dt, this._element).forEach(t => {
            M.on(t, bt, t => t.preventDefault())
          }), this._pointerEvent ? (M.on(this._element, yt, t => e(t)), M.on(this._element, _t, t => i(t)), this._element.classList.add(At)) : (M.on(this._element, gt, t => e(t)), M.on(this._element, mt, t => n(t)), M.on(this._element, vt, t => i(t)))
        }
        _keydown(t) {
          if (/input|textarea/i.test(t.target.tagName)) return;
          const e = ct[t.key];
          e && (t.preventDefault(), this._slide(e))
        }
        _getItemIndex(e) {
          return this._items = e && e.parentNode ? t.find(Nt, e.parentNode) : [], this._items.indexOf(e)
        }
        _getItemByOrder(t, e) {
          const n = t === ot;
          return b(this._items, e, n, this._config.wrap)
        }
        _triggerSlideEvent(e, n) {
          const i = this._getItemIndex(e),
            s = this._getItemIndex(t.findOne(Lt, this._element));
          return M.trigger(this._element, ut, {
            relatedTarget: e,
            direction: n,
            from: s,
            to: i
          })
        }
        _setActiveIndicatorElement(e) {
          if (this._indicatorsElement) {
            const n = t.findOne(Ot, this._indicatorsElement);
            n.classList.remove(xt), n.removeAttribute("aria-current");
            const i = t.find(It, this._indicatorsElement);
            for (let t = 0; t < i.length; t++)
              if (Number.parseInt(i[t].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(e)) {
                i[t].classList.add(xt), i[t].setAttribute("aria-current", "true");
                break
              }
          }
        }
        _updateInterval() {
          const e = this._activeElement || t.findOne(Lt, this._element);
          if (!e) return;
          const n = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
          n ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = n) : this._config.interval = this._config.defaultInterval || this._config.interval
        }
        _slide(e, n) {
          const i = this._directionToOrder(e),
            s = t.findOne(Lt, this._element),
            o = this._getItemIndex(s),
            r = n || this._getItemByOrder(i, s),
            a = this._getItemIndex(r),
            l = Boolean(this._interval),
            c = i === ot,
            u = c ? Tt : Et,
            h = c ? kt : St,
            d = this._orderToDirection(i);
          if (r && r.classList.contains(xt)) return void(this._isSliding = !1);
          if (this._isSliding) return;
          if (this._triggerSlideEvent(r, d).defaultPrevented) return;
          if (!s || !r) return;
          this._isSliding = !0, l && this.pause(), this._setActiveIndicatorElement(r), this._activeElement = r;
          const f = () => {
            M.trigger(this._element, ht, {
              relatedTarget: r,
              direction: d,
              from: o,
              to: a
            })
          };
          if (this._element.classList.contains(Ct)) {
            r.classList.add(h), p(r), s.classList.add(u), r.classList.add(u);
            const t = () => {
              r.classList.remove(u, h), r.classList.add(xt), s.classList.remove(xt, h, u), this._isSliding = !1, setTimeout(f, 0)
            };
            this._queueCallback(t, s, !0)
          } else s.classList.remove(xt), r.classList.add(xt), this._isSliding = !1, f();
          l && this.cycle()
        }
        _directionToOrder(t) {
          return [lt, at].includes(t) ? m() ? t === at ? rt : ot : t === at ? ot : rt : t
        }
        _orderToDirection(t) {
          return [ot, rt].includes(t) ? m() ? t === rt ? at : lt : t === rt ? lt : at : t
        }
        static carouselInterface(t, e) {
          const n = Ht.getOrCreateInstance(t, e);
          let {
            _config: i
          } = n;
          "object" == typeof e && (i = {
            ...i,
            ...e
          });
          const s = "string" == typeof e ? e : i.slide;
          if ("number" == typeof e) n.to(e);
          else if ("string" == typeof s) {
            if (void 0 === n[s]) throw new TypeError(`No method named "${s}"`);
            n[s]()
          } else i.interval && i.ride && (n.pause(), n.cycle())
        }
        static jQueryInterface(t) {
          return this.each(function () {
            Ht.carouselInterface(this, t)
          })
        }
        static dataApiClickHandler(t) {
          const e = s(this);
          if (!e || !e.classList.contains(wt)) return;
          const n = {
              ...J.getDataAttributes(e),
              ...J.getDataAttributes(this)
            },
            i = this.getAttribute("data-bs-slide-to");
          i && (n.interval = !1), Ht.carouselInterface(e, n), i && Ht.getInstance(e).to(i), t.preventDefault()
        }
      }
      M.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", Ht.dataApiClickHandler), M.on(window, "load.bs.carousel.data-api", () => {
        const e = t.find('[data-bs-ride="carousel"]');
        for (let t = 0, n = e.length; t < n; t++) Ht.carouselInterface(e[t], Ht.getInstance(e[t]))
      }), v(Ht);
      const zt = "collapse",
        qt = "bs.collapse",
        Rt = `.${qt}`,
        Bt = {
          toggle: !0,
          parent: ""
        },
        Wt = {
          toggle: "boolean",
          parent: "(string|element)"
        },
        Ft = `show${Rt}`,
        Ut = `shown${Rt}`,
        Vt = `hide${Rt}`,
        Xt = `hidden${Rt}`,
        Qt = `click${Rt}.data-api`,
        Kt = "show",
        Yt = "collapse",
        Zt = "collapsing",
        Gt = "collapsed",
        Jt = "width",
        te = "height",
        ee = ".show, .collapsing",
        ne = '[data-bs-toggle="collapse"]';
      class ie extends q {
        constructor(e, n) {
          super(e), this._isTransitioning = !1, this._config = this._getConfig(n), this._triggerArray = t.find(`${ne}[href="#${this._element.id}"],` + `${ne}[data-bs-target="#${this._element.id}"]`);
          const s = t.find(ne);
          for (let e = 0, n = s.length; e < n; e++) {
            const n = s[e],
              o = i(n),
              r = t.find(o).filter(t => t === this._element);
            null !== o && r.length && (this._selector = o, this._triggerArray.push(n))
          }
          this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
        }
        static get Default() {
          return Bt
        }
        static get NAME() {
          return zt
        }
        toggle() {
          this._element.classList.contains(Kt) ? this.hide() : this.show()
        }
        show() {
          if (this._isTransitioning || this._element.classList.contains(Kt)) return;
          let e, n;
          this._parent && 0 === (e = t.find(ee, this._parent).filter(t => "string" == typeof this._config.parent ? t.getAttribute("data-bs-parent") === this._config.parent : t.classList.contains(Yt))).length && (e = null);
          const i = t.findOne(this._selector);
          if (e) {
            const t = e.find(t => i !== t);
            if ((n = t ? ie.getInstance(t) : null) && n._isTransitioning) return
          }
          if (M.trigger(this._element, Ft).defaultPrevented) return;
          e && e.forEach(t => {
            i !== t && ie.collapseInterface(t, "hide"), n || H.set(t, qt, null)
          });
          const s = this._getDimension();
          this._element.classList.remove(Yt), this._element.classList.add(Zt), this._element.style[s] = 0, this._triggerArray.length && this._triggerArray.forEach(t => {
            t.classList.remove(Gt), t.setAttribute("aria-expanded", !0)
          }), this.setTransitioning(!0);
          const o = `scroll${s[0].toUpperCase()+s.slice(1)}`;
          this._queueCallback(() => {
            this._element.classList.remove(Zt), this._element.classList.add(Yt, Kt), this._element.style[s] = "", this.setTransitioning(!1), M.trigger(this._element, Ut)
          }, this._element, !0), this._element.style[s] = `${this._element[o]}px`
        }
        hide() {
          if (this._isTransitioning || !this._element.classList.contains(Kt)) return;
          if (M.trigger(this._element, Vt).defaultPrevented) return;
          const t = this._getDimension();
          this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, p(this._element), this._element.classList.add(Zt), this._element.classList.remove(Yt, Kt);
          const e = this._triggerArray.length;
          if (e > 0)
            for (let t = 0; t < e; t++) {
              const e = this._triggerArray[t],
                n = s(e);
              n && !n.classList.contains(Kt) && (e.classList.add(Gt), e.setAttribute("aria-expanded", !1))
            }
          this.setTransitioning(!0);
          this._element.style[t] = "", this._queueCallback(() => {
            this.setTransitioning(!1), this._element.classList.remove(Zt), this._element.classList.add(Yt), M.trigger(this._element, Xt)
          }, this._element, !0)
        }
        setTransitioning(t) {
          this._isTransitioning = t
        }
        _getConfig(t) {
          return (t = {
            ...Bt,
            ...t
          }).toggle = Boolean(t.toggle), l(zt, t, Wt), t
        }
        _getDimension() {
          return this._element.classList.contains(Jt) ? Jt : te
        }
        _getParent() {
          let {
            parent: e
          } = this._config;
          e = a(e);
          const n = `${ne}[data-bs-parent="${e}"]`;
          return t.find(n, e).forEach(t => {
            const e = s(t);
            this._addAriaAndCollapsedClass(e, [t])
          }), e
        }
        _addAriaAndCollapsedClass(t, e) {
          if (!t || !e.length) return;
          const n = t.classList.contains(Kt);
          e.forEach(t => {
            n ? t.classList.remove(Gt) : t.classList.add(Gt), t.setAttribute("aria-expanded", n)
          })
        }
        static collapseInterface(t, e) {
          let n = ie.getInstance(t);
          const i = {
            ...Bt,
            ...J.getDataAttributes(t),
            ..."object" == typeof e && e ? e : {}
          };
          if (!n && i.toggle && "string" == typeof e && /show|hide/.test(e) && (i.toggle = !1), n || (n = new ie(t, i)), "string" == typeof e) {
            if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
            n[e]()
          }
        }
        static jQueryInterface(t) {
          return this.each(function () {
            ie.collapseInterface(this, t)
          })
        }
      }
      M.on(document, Qt, ne, function (e) {
        ("A" === e.target.tagName || e.delegateTarget && "A" === e.delegateTarget.tagName) && e.preventDefault();
        const n = J.getDataAttributes(this),
          s = i(this);
        t.find(s).forEach(t => {
          const e = ie.getInstance(t);
          let i;
          e ? (null === e._parent && "string" == typeof n.parent && (e._config.parent = n.parent, e._parent = e._getParent()), i = "toggle") : i = n, ie.collapseInterface(t, i)
        })
      }), v(ie);
      var se = "top",
        oe = "bottom",
        re = "right",
        ae = "left",
        le = "auto",
        ce = [se, oe, re, ae],
        ue = "start",
        he = "end",
        de = "clippingParents",
        pe = "viewport",
        fe = "popper",
        ge = "reference",
        me = ce.reduce(function (t, e) {
          return t.concat([e + "-" + ue, e + "-" + he])
        }, []),
        ve = [].concat(ce, [le]).reduce(function (t, e) {
          return t.concat([e, e + "-" + ue, e + "-" + he])
        }, []),
        ye = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
  
      function _e(t) {
        return t ? (t.nodeName || "").toLowerCase() : null
      }
  
      function be(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
          var e = t.ownerDocument;
          return e && e.defaultView || window
        }
        return t
      }
  
      function we(t) {
        return t instanceof be(t).Element || t instanceof Element
      }
  
      function xe(t) {
        return t instanceof be(t).HTMLElement || t instanceof HTMLElement
      }
  
      function Ce(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof be(t).ShadowRoot || t instanceof ShadowRoot)
      }
      var Ee = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function (t) {
          var e = t.state;
          Object.keys(e.elements).forEach(function (t) {
            var n = e.styles[t] || {},
              i = e.attributes[t] || {},
              s = e.elements[t];
            xe(s) && _e(s) && (Object.assign(s.style, n), Object.keys(i).forEach(function (t) {
              var e = i[t];
              !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e)
            }))
          })
        },
        effect: function (t) {
          var e = t.state,
            n = {
              popper: {
                position: e.options.strategy,
                left: "0",
                top: "0",
                margin: "0"
              },
              arrow: {
                position: "absolute"
              },
              reference: {}
            };
          return Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow),
            function () {
              Object.keys(e.elements).forEach(function (t) {
                var i = e.elements[t],
                  s = e.attributes[t] || {},
                  o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : n[t]).reduce(function (t, e) {
                    return t[e] = "", t
                  }, {});
                xe(i) && _e(i) && (Object.assign(i.style, o), Object.keys(s).forEach(function (t) {
                  i.removeAttribute(t)
                }))
              })
            }
        },
        requires: ["computeStyles"]
      };
  
      function Te(t) {
        return t.split("-")[0]
      }
  
      function ke(t) {
        var e = t.getBoundingClientRect();
        return {
          width: e.width,
          height: e.height,
          top: e.top,
          right: e.right,
          bottom: e.bottom,
          left: e.left,
          x: e.left,
          y: e.top
        }
      }
  
      function Se(t) {
        var e = ke(t),
          n = t.offsetWidth,
          i = t.offsetHeight;
        return Math.abs(e.width - n) <= 1 && (n = e.width), Math.abs(e.height - i) <= 1 && (i = e.height), {
          x: t.offsetLeft,
          y: t.offsetTop,
          width: n,
          height: i
        }
      }
  
      function Ae(t, e) {
        var n = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (n && Ce(n)) {
          var i = e;
          do {
            if (i && t.isSameNode(i)) return !0;
            i = i.parentNode || i.host
          } while (i)
        }
        return !1
      }
  
      function Oe(t) {
        return be(t).getComputedStyle(t)
      }
  
      function Le(t) {
        return ["table", "td", "th"].indexOf(_e(t)) >= 0
      }
  
      function Ne(t) {
        return ((we(t) ? t.ownerDocument : t.document) || window.document).documentElement
      }
  
      function De(t) {
        return "html" === _e(t) ? t : t.assignedSlot || t.parentNode || (Ce(t) ? t.host : null) || Ne(t)
      }
  
      function Pe(t) {
        return xe(t) && "fixed" !== Oe(t).position ? t.offsetParent : null
      }
  
      function $e(t) {
        for (var e = be(t), n = Pe(t); n && Le(n) && "static" === Oe(n).position;) n = Pe(n);
        return n && ("html" === _e(n) || "body" === _e(n) && "static" === Oe(n).position) ? e : n || function (t) {
          var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
          if (-1 !== navigator.userAgent.indexOf("Trident") && xe(t) && "fixed" === Oe(t).position) return null;
          for (var n = De(t); xe(n) && ["html", "body"].indexOf(_e(n)) < 0;) {
            var i = Oe(n);
            if ("none" !== i.transform || "none" !== i.perspective || "paint" === i.contain || -1 !== ["transform", "perspective"].indexOf(i.willChange) || e && "filter" === i.willChange || e && i.filter && "none" !== i.filter) return n;
            n = n.parentNode
          }
          return null
        }(t) || e
      }
  
      function Ie(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
      }
      var Me = Math.max,
        je = Math.min,
        He = Math.round;
  
      function ze(t, e, n) {
        return Me(t, je(e, n))
      }
  
      function qe(t) {
        return Object.assign({}, {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }, t)
      }
  
      function Re(t, e) {
        return e.reduce(function (e, n) {
          return e[n] = t, e
        }, {})
      }
      var Be = function (t, e) {
        return qe("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
          placement: e.placement
        })) : t) ? t : Re(t, ce))
      };
      var We = {
          name: "arrow",
          enabled: !0,
          phase: "main",
          fn: function (t) {
            var e, n = t.state,
              i = t.name,
              s = t.options,
              o = n.elements.arrow,
              r = n.modifiersData.popperOffsets,
              a = Te(n.placement),
              l = Ie(a),
              c = [ae, re].indexOf(a) >= 0 ? "height" : "width";
            if (o && r) {
              var u = Be(s.padding, n),
                h = Se(o),
                d = "y" === l ? se : ae,
                p = "y" === l ? oe : re,
                f = n.rects.reference[c] + n.rects.reference[l] - r[l] - n.rects.popper[c],
                g = r[l] - n.rects.reference[l],
                m = $e(o),
                v = m ? "y" === l ? m.clientHeight || 0 : m.clientWidth || 0 : 0,
                y = f / 2 - g / 2,
                _ = u[d],
                b = v - h[c] - u[p],
                w = v / 2 - h[c] / 2 + y,
                x = ze(_, w, b),
                C = l;
              n.modifiersData[i] = ((e = {})[C] = x, e.centerOffset = x - w, e)
            }
          },
          effect: function (t) {
            var e = t.state,
              n = t.options.element,
              i = void 0 === n ? "[data-popper-arrow]" : n;
            null != i && ("string" != typeof i || (i = e.elements.popper.querySelector(i))) && Ae(e.elements.popper, i) && (e.elements.arrow = i)
          },
          requires: ["popperOffsets"],
          requiresIfExists: ["preventOverflow"]
        },
        Fe = {
          top: "auto",
          right: "auto",
          bottom: "auto",
          left: "auto"
        };
  
      function Ue(t) {
        var e, n = t.popper,
          i = t.popperRect,
          s = t.placement,
          o = t.offsets,
          r = t.position,
          a = t.gpuAcceleration,
          l = t.adaptive,
          c = t.roundOffsets,
          u = !0 === c ? function (t) {
            var e = t.x,
              n = t.y,
              i = window.devicePixelRatio || 1;
            return {
              x: He(He(e * i) / i) || 0,
              y: He(He(n * i) / i) || 0
            }
          }(o) : "function" == typeof c ? c(o) : o,
          h = u.x,
          d = void 0 === h ? 0 : h,
          p = u.y,
          f = void 0 === p ? 0 : p,
          g = o.hasOwnProperty("x"),
          m = o.hasOwnProperty("y"),
          v = ae,
          y = se,
          _ = window;
        if (l) {
          var b = $e(n),
            w = "clientHeight",
            x = "clientWidth";
          b === be(n) && "static" !== Oe(b = Ne(n)).position && (w = "scrollHeight", x = "scrollWidth"), b = b, s === se && (y = oe, f -= b[w] - i.height, f *= a ? 1 : -1), s === ae && (v = re, d -= b[x] - i.width, d *= a ? 1 : -1)
        }
        var C, E = Object.assign({
          position: r
        }, l && Fe);
        return a ? Object.assign({}, E, ((C = {})[y] = m ? "0" : "", C[v] = g ? "0" : "", C.transform = (_.devicePixelRatio || 1) < 2 ? "translate(" + d + "px, " + f + "px)" : "translate3d(" + d + "px, " + f + "px, 0)", C)) : Object.assign({}, E, ((e = {})[y] = m ? f + "px" : "", e[v] = g ? d + "px" : "", e.transform = "", e))
      }
      var Ve = {
          name: "computeStyles",
          enabled: !0,
          phase: "beforeWrite",
          fn: function (t) {
            var e = t.state,
              n = t.options,
              i = n.gpuAcceleration,
              s = void 0 === i || i,
              o = n.adaptive,
              r = void 0 === o || o,
              a = n.roundOffsets,
              l = void 0 === a || a,
              c = {
                placement: Te(e.placement),
                popper: e.elements.popper,
                popperRect: e.rects.popper,
                gpuAcceleration: s
              };
            null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, Ue(Object.assign({}, c, {
              offsets: e.modifiersData.popperOffsets,
              position: e.options.strategy,
              adaptive: r,
              roundOffsets: l
            })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, Ue(Object.assign({}, c, {
              offsets: e.modifiersData.arrow,
              position: "absolute",
              adaptive: !1,
              roundOffsets: l
            })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
              "data-popper-placement": e.placement
            })
          },
          data: {}
        },
        Xe = {
          passive: !0
        };
      var Qe = {
          name: "eventListeners",
          enabled: !0,
          phase: "write",
          fn: function () {},
          effect: function (t) {
            var e = t.state,
              n = t.instance,
              i = t.options,
              s = i.scroll,
              o = void 0 === s || s,
              r = i.resize,
              a = void 0 === r || r,
              l = be(e.elements.popper),
              c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return o && c.forEach(function (t) {
                t.addEventListener("scroll", n.update, Xe)
              }), a && l.addEventListener("resize", n.update, Xe),
              function () {
                o && c.forEach(function (t) {
                  t.removeEventListener("scroll", n.update, Xe)
                }), a && l.removeEventListener("resize", n.update, Xe)
              }
          },
          data: {}
        },
        Ke = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        };
  
      function Ye(t) {
        return t.replace(/left|right|bottom|top/g, function (t) {
          return Ke[t]
        })
      }
      var Ze = {
        start: "end",
        end: "start"
      };
  
      function Ge(t) {
        return t.replace(/start|end/g, function (t) {
          return Ze[t]
        })
      }
  
      function Je(t) {
        var e = be(t);
        return {
          scrollLeft: e.pageXOffset,
          scrollTop: e.pageYOffset
        }
      }
  
      function tn(t) {
        return ke(Ne(t)).left + Je(t).scrollLeft
      }
  
      function en(t) {
        var e = Oe(t),
          n = e.overflow,
          i = e.overflowX,
          s = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + s + i)
      }
  
      function nn(t, e) {
        var n;
        void 0 === e && (e = []);
        var i = function t(e) {
            return ["html", "body", "#document"].indexOf(_e(e)) >= 0 ? e.ownerDocument.body : xe(e) && en(e) ? e : t(De(e))
          }(t),
          s = i === (null == (n = t.ownerDocument) ? void 0 : n.body),
          o = be(i),
          r = s ? [o].concat(o.visualViewport || [], en(i) ? i : []) : i,
          a = e.concat(r);
        return s ? a : a.concat(nn(De(r)))
      }
  
      function sn(t) {
        return Object.assign({}, t, {
          left: t.x,
          top: t.y,
          right: t.x + t.width,
          bottom: t.y + t.height
        })
      }
  
      function on(t, e) {
        return e === pe ? sn(function (t) {
          var e = be(t),
            n = Ne(t),
            i = e.visualViewport,
            s = n.clientWidth,
            o = n.clientHeight,
            r = 0,
            a = 0;
          return i && (s = i.width, o = i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = i.offsetLeft, a = i.offsetTop)), {
            width: s,
            height: o,
            x: r + tn(t),
            y: a
          }
        }(t)) : xe(e) ? function (t) {
          var e = ke(t);
          return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e
        }(e) : sn(function (t) {
          var e, n = Ne(t),
            i = Je(t),
            s = null == (e = t.ownerDocument) ? void 0 : e.body,
            o = Me(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
            r = Me(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
            a = -i.scrollLeft + tn(t),
            l = -i.scrollTop;
          return "rtl" === Oe(s || n).direction && (a += Me(n.clientWidth, s ? s.clientWidth : 0) - o), {
            width: o,
            height: r,
            x: a,
            y: l
          }
        }(Ne(t)))
      }
  
      function rn(t, e, n) {
        var i = "clippingParents" === e ? function (t) {
            var e = nn(De(t)),
              n = ["absolute", "fixed"].indexOf(Oe(t).position) >= 0 && xe(t) ? $e(t) : t;
            return we(n) ? e.filter(function (t) {
              return we(t) && Ae(t, n) && "body" !== _e(t)
            }) : []
          }(t) : [].concat(e),
          s = [].concat(i, [n]),
          o = s[0],
          r = s.reduce(function (e, n) {
            var i = on(t, n);
            return e.top = Me(i.top, e.top), e.right = je(i.right, e.right), e.bottom = je(i.bottom, e.bottom), e.left = Me(i.left, e.left), e
          }, on(t, o));
        return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r
      }
  
      function an(t) {
        return t.split("-")[1]
      }
  
      function ln(t) {
        var e, n = t.reference,
          i = t.element,
          s = t.placement,
          o = s ? Te(s) : null,
          r = s ? an(s) : null,
          a = n.x + n.width / 2 - i.width / 2,
          l = n.y + n.height / 2 - i.height / 2;
        switch (o) {
          case se:
            e = {
              x: a,
              y: n.y - i.height
            };
            break;
          case oe:
            e = {
              x: a,
              y: n.y + n.height
            };
            break;
          case re:
            e = {
              x: n.x + n.width,
              y: l
            };
            break;
          case ae:
            e = {
              x: n.x - i.width,
              y: l
            };
            break;
          default:
            e = {
              x: n.x,
              y: n.y
            }
        }
        var c = o ? Ie(o) : null;
        if (null != c) {
          var u = "y" === c ? "height" : "width";
          switch (r) {
            case ue:
              e[c] = e[c] - (n[u] / 2 - i[u] / 2);
              break;
            case he:
              e[c] = e[c] + (n[u] / 2 - i[u] / 2)
          }
        }
        return e
      }
  
      function cn(t, e) {
        void 0 === e && (e = {});
        var n = e,
          i = n.placement,
          s = void 0 === i ? t.placement : i,
          o = n.boundary,
          r = void 0 === o ? de : o,
          a = n.rootBoundary,
          l = void 0 === a ? pe : a,
          c = n.elementContext,
          u = void 0 === c ? fe : c,
          h = n.altBoundary,
          d = void 0 !== h && h,
          p = n.padding,
          f = void 0 === p ? 0 : p,
          g = qe("number" != typeof f ? f : Re(f, ce)),
          m = u === fe ? ge : fe,
          v = t.elements.reference,
          y = t.rects.popper,
          _ = t.elements[d ? m : u],
          b = rn(we(_) ? _ : _.contextElement || Ne(t.elements.popper), r, l),
          w = ke(v),
          x = ln({
            reference: w,
            element: y,
            strategy: "absolute",
            placement: s
          }),
          C = sn(Object.assign({}, y, x)),
          E = u === fe ? C : w,
          T = {
            top: b.top - E.top + g.top,
            bottom: E.bottom - b.bottom + g.bottom,
            left: b.left - E.left + g.left,
            right: E.right - b.right + g.right
          },
          k = t.modifiersData.offset;
        if (u === fe && k) {
          var S = k[s];
          Object.keys(T).forEach(function (t) {
            var e = [re, oe].indexOf(t) >= 0 ? 1 : -1,
              n = [se, oe].indexOf(t) >= 0 ? "y" : "x";
            T[t] += S[n] * e
          })
        }
        return T
      }
  
      function un(t, e) {
        void 0 === e && (e = {});
        var n = e,
          i = n.placement,
          s = n.boundary,
          o = n.rootBoundary,
          r = n.padding,
          a = n.flipVariations,
          l = n.allowedAutoPlacements,
          c = void 0 === l ? ve : l,
          u = an(i),
          h = u ? a ? me : me.filter(function (t) {
            return an(t) === u
          }) : ce,
          d = h.filter(function (t) {
            return c.indexOf(t) >= 0
          });
        0 === d.length && (d = h);
        var p = d.reduce(function (e, n) {
          return e[n] = cn(t, {
            placement: n,
            boundary: s,
            rootBoundary: o,
            padding: r
          })[Te(n)], e
        }, {});
        return Object.keys(p).sort(function (t, e) {
          return p[t] - p[e]
        })
      }
      var hn = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (t) {
          var e = t.state,
            n = t.options,
            i = t.name;
          if (!e.modifiersData[i]._skip) {
            for (var s = n.mainAxis, o = void 0 === s || s, r = n.altAxis, a = void 0 === r || r, l = n.fallbackPlacements, c = n.padding, u = n.boundary, h = n.rootBoundary, d = n.altBoundary, p = n.flipVariations, f = void 0 === p || p, g = n.allowedAutoPlacements, m = e.options.placement, v = Te(m), y = l || (v !== m && f ? function (t) {
                if (Te(t) === le) return [];
                var e = Ye(t);
                return [Ge(t), e, Ge(e)]
              }(m) : [Ye(m)]), _ = [m].concat(y).reduce(function (t, n) {
                return t.concat(Te(n) === le ? un(e, {
                  placement: n,
                  boundary: u,
                  rootBoundary: h,
                  padding: c,
                  flipVariations: f,
                  allowedAutoPlacements: g
                }) : n)
              }, []), b = e.rects.reference, w = e.rects.popper, x = new Map, C = !0, E = _[0], T = 0; T < _.length; T++) {
              var k = _[T],
                S = Te(k),
                A = an(k) === ue,
                O = [se, oe].indexOf(S) >= 0,
                L = O ? "width" : "height",
                N = cn(e, {
                  placement: k,
                  boundary: u,
                  rootBoundary: h,
                  altBoundary: d,
                  padding: c
                }),
                D = O ? A ? re : ae : A ? oe : se;
              b[L] > w[L] && (D = Ye(D));
              var P = Ye(D),
                $ = [];
              if (o && $.push(N[S] <= 0), a && $.push(N[D] <= 0, N[P] <= 0), $.every(function (t) {
                  return t
                })) {
                E = k, C = !1;
                break
              }
              x.set(k, $)
            }
            if (C)
              for (var I = function (t) {
                  var e = _.find(function (e) {
                    var n = x.get(e);
                    if (n) return n.slice(0, t).every(function (t) {
                      return t
                    })
                  });
                  if (e) return E = e, "break"
                }, M = f ? 3 : 1; M > 0 && "break" !== I(M); M--);
            e.placement !== E && (e.modifiersData[i]._skip = !0, e.placement = E, e.reset = !0)
          }
        },
        requiresIfExists: ["offset"],
        data: {
          _skip: !1
        }
      };
  
      function dn(t, e, n) {
        return void 0 === n && (n = {
          x: 0,
          y: 0
        }), {
          top: t.top - e.height - n.y,
          right: t.right - e.width + n.x,
          bottom: t.bottom - e.height + n.y,
          left: t.left - e.width - n.x
        }
      }
  
      function pn(t) {
        return [se, re, oe, ae].some(function (e) {
          return t[e] >= 0
        })
      }
      var fn = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function (t) {
          var e = t.state,
            n = t.name,
            i = e.rects.reference,
            s = e.rects.popper,
            o = e.modifiersData.preventOverflow,
            r = cn(e, {
              elementContext: "reference"
            }),
            a = cn(e, {
              altBoundary: !0
            }),
            l = dn(r, i),
            c = dn(a, s, o),
            u = pn(l),
            h = pn(c);
          e.modifiersData[n] = {
            referenceClippingOffsets: l,
            popperEscapeOffsets: c,
            isReferenceHidden: u,
            hasPopperEscaped: h
          }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
            "data-popper-reference-hidden": u,
            "data-popper-escaped": h
          })
        }
      };
      var gn = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (t) {
          var e = t.state,
            n = t.options,
            i = t.name,
            s = n.offset,
            o = void 0 === s ? [0, 0] : s,
            r = ve.reduce(function (t, n) {
              return t[n] = function (t, e, n) {
                var i = Te(t),
                  s = [ae, se].indexOf(i) >= 0 ? -1 : 1,
                  o = "function" == typeof n ? n(Object.assign({}, e, {
                    placement: t
                  })) : n,
                  r = o[0],
                  a = o[1];
                return r = r || 0, a = (a || 0) * s, [ae, re].indexOf(i) >= 0 ? {
                  x: a,
                  y: r
                } : {
                  x: r,
                  y: a
                }
              }(n, e.rects, o), t
            }, {}),
            a = r[e.placement],
            l = a.x,
            c = a.y;
          null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[i] = r
        }
      };
      var mn = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function (t) {
          var e = t.state,
            n = t.name;
          e.modifiersData[n] = ln({
            reference: e.rects.reference,
            element: e.rects.popper,
            strategy: "absolute",
            placement: e.placement
          })
        },
        data: {}
      };
      var vn = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (t) {
          var e = t.state,
            n = t.options,
            i = t.name,
            s = n.mainAxis,
            o = void 0 === s || s,
            r = n.altAxis,
            a = void 0 !== r && r,
            l = n.boundary,
            c = n.rootBoundary,
            u = n.altBoundary,
            h = n.padding,
            d = n.tether,
            p = void 0 === d || d,
            f = n.tetherOffset,
            g = void 0 === f ? 0 : f,
            m = cn(e, {
              boundary: l,
              rootBoundary: c,
              padding: h,
              altBoundary: u
            }),
            v = Te(e.placement),
            y = an(e.placement),
            _ = !y,
            b = Ie(v),
            w = "x" === b ? "y" : "x",
            x = e.modifiersData.popperOffsets,
            C = e.rects.reference,
            E = e.rects.popper,
            T = "function" == typeof g ? g(Object.assign({}, e.rects, {
              placement: e.placement
            })) : g,
            k = {
              x: 0,
              y: 0
            };
          if (x) {
            if (o || a) {
              var S = "y" === b ? se : ae,
                A = "y" === b ? oe : re,
                O = "y" === b ? "height" : "width",
                L = x[b],
                N = x[b] + m[S],
                D = x[b] - m[A],
                P = p ? -E[O] / 2 : 0,
                $ = y === ue ? C[O] : E[O],
                I = y === ue ? -E[O] : -C[O],
                M = e.elements.arrow,
                j = p && M ? Se(M) : {
                  width: 0,
                  height: 0
                },
                H = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0
                },
                z = H[S],
                q = H[A],
                R = ze(0, C[O], j[O]),
                B = _ ? C[O] / 2 - P - R - z - T : $ - R - z - T,
                W = _ ? -C[O] / 2 + P + R + q + T : I + R + q + T,
                F = e.elements.arrow && $e(e.elements.arrow),
                U = F ? "y" === b ? F.clientTop || 0 : F.clientLeft || 0 : 0,
                V = e.modifiersData.offset ? e.modifiersData.offset[e.placement][b] : 0,
                X = x[b] + B - V - U,
                Q = x[b] + W - V;
              if (o) {
                var K = ze(p ? je(N, X) : N, L, p ? Me(D, Q) : D);
                x[b] = K, k[b] = K - L
              }
              if (a) {
                var Y = "x" === b ? se : ae,
                  Z = "x" === b ? oe : re,
                  G = x[w],
                  J = G + m[Y],
                  tt = G - m[Z],
                  et = ze(p ? je(J, X) : J, G, p ? Me(tt, Q) : tt);
                x[w] = et, k[w] = et - G
              }
            }
            e.modifiersData[i] = k
          }
        },
        requiresIfExists: ["offset"]
      };
  
      function yn(t, e, n) {
        void 0 === n && (n = !1);
        var i, s, o = Ne(e),
          r = ke(t),
          a = xe(e),
          l = {
            scrollLeft: 0,
            scrollTop: 0
          },
          c = {
            x: 0,
            y: 0
          };
        return (a || !a && !n) && (("body" !== _e(e) || en(o)) && (l = (i = e) !== be(i) && xe(i) ? {
          scrollLeft: (s = i).scrollLeft,
          scrollTop: s.scrollTop
        } : Je(i)), xe(e) ? ((c = ke(e)).x += e.clientLeft, c.y += e.clientTop) : o && (c.x = tn(o))), {
          x: r.left + l.scrollLeft - c.x,
          y: r.top + l.scrollTop - c.y,
          width: r.width,
          height: r.height
        }
      }
  
      function _n(t) {
        var e = new Map,
          n = new Set,
          i = [];
        return t.forEach(function (t) {
          e.set(t.name, t)
        }), t.forEach(function (t) {
          n.has(t.name) || function t(s) {
            n.add(s.name), [].concat(s.requires || [], s.requiresIfExists || []).forEach(function (i) {
              if (!n.has(i)) {
                var s = e.get(i);
                s && t(s)
              }
            }), i.push(s)
          }(t)
        }), i
      }
      var bn = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
      };
  
      function wn() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return !e.some(function (t) {
          return !(t && "function" == typeof t.getBoundingClientRect)
        })
      }
  
      function xn(t) {
        void 0 === t && (t = {});
        var e = t,
          n = e.defaultModifiers,
          i = void 0 === n ? [] : n,
          s = e.defaultOptions,
          o = void 0 === s ? bn : s;
        return function (t, e, n) {
          void 0 === n && (n = o);
          var s, r, a = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, bn, o),
              modifiersData: {},
              elements: {
                reference: t,
                popper: e
              },
              attributes: {},
              styles: {}
            },
            l = [],
            c = !1,
            u = {
              state: a,
              setOptions: function (n) {
                h(), a.options = Object.assign({}, o, a.options, n), a.scrollParents = {
                  reference: we(t) ? nn(t) : t.contextElement ? nn(t.contextElement) : [],
                  popper: nn(e)
                };
                var s, r, c = function (t) {
                  var e = _n(t);
                  return ye.reduce(function (t, n) {
                    return t.concat(e.filter(function (t) {
                      return t.phase === n
                    }))
                  }, [])
                }((s = [].concat(i, a.options.modifiers), r = s.reduce(function (t, e) {
                  var n = t[e.name];
                  return t[e.name] = n ? Object.assign({}, n, e, {
                    options: Object.assign({}, n.options, e.options),
                    data: Object.assign({}, n.data, e.data)
                  }) : e, t
                }, {}), Object.keys(r).map(function (t) {
                  return r[t]
                })));
                return a.orderedModifiers = c.filter(function (t) {
                  return t.enabled
                }), a.orderedModifiers.forEach(function (t) {
                  var e = t.name,
                    n = t.options,
                    i = void 0 === n ? {} : n,
                    s = t.effect;
                  if ("function" == typeof s) {
                    var o = s({
                      state: a,
                      name: e,
                      instance: u,
                      options: i
                    });
                    l.push(o || function () {})
                  }
                }), u.update()
              },
              forceUpdate: function () {
                if (!c) {
                  var t = a.elements,
                    e = t.reference,
                    n = t.popper;
                  if (wn(e, n)) {
                    a.rects = {
                      reference: yn(e, $e(n), "fixed" === a.options.strategy),
                      popper: Se(n)
                    }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach(function (t) {
                      return a.modifiersData[t.name] = Object.assign({}, t.data)
                    });
                    for (var i = 0; i < a.orderedModifiers.length; i++)
                      if (!0 !== a.reset) {
                        var s = a.orderedModifiers[i],
                          o = s.fn,
                          r = s.options,
                          l = void 0 === r ? {} : r,
                          h = s.name;
                        "function" == typeof o && (a = o({
                          state: a,
                          options: l,
                          name: h,
                          instance: u
                        }) || a)
                      } else a.reset = !1, i = -1
                  }
                }
              },
              update: (s = function () {
                return new Promise(function (t) {
                  u.forceUpdate(), t(a)
                })
              }, function () {
                return r || (r = new Promise(function (t) {
                  Promise.resolve().then(function () {
                    r = void 0, t(s())
                  })
                })), r
              }),
              destroy: function () {
                h(), c = !0
              }
            };
          if (!wn(t, e)) return u;
  
          function h() {
            l.forEach(function (t) {
              return t()
            }), l = []
          }
          return u.setOptions(n).then(function (t) {
            !c && n.onFirstUpdate && n.onFirstUpdate(t)
          }), u
        }
      }
      var Cn = xn(),
        En = xn({
          defaultModifiers: [Qe, mn, Ve, Ee]
        }),
        Tn = xn({
          defaultModifiers: [Qe, mn, Ve, Ee, gn, hn, vn, We, fn]
        }),
        kn = Object.freeze({
          __proto__: null,
          popperGenerator: xn,
          detectOverflow: cn,
          createPopperBase: Cn,
          createPopper: Tn,
          createPopperLite: En,
          top: se,
          bottom: oe,
          right: re,
          left: ae,
          auto: le,
          basePlacements: ce,
          start: ue,
          end: he,
          clippingParents: de,
          viewport: pe,
          popper: fe,
          reference: ge,
          variationPlacements: me,
          placements: ve,
          beforeRead: "beforeRead",
          read: "read",
          afterRead: "afterRead",
          beforeMain: "beforeMain",
          main: "main",
          afterMain: "afterMain",
          beforeWrite: "beforeWrite",
          write: "write",
          afterWrite: "afterWrite",
          modifierPhases: ye,
          applyStyles: Ee,
          arrow: We,
          computeStyles: Ve,
          eventListeners: Qe,
          flip: hn,
          hide: fn,
          offset: gn,
          popperOffsets: mn,
          preventOverflow: vn
        });
      const Sn = "dropdown",
        An = "Escape",
        On = "Space",
        Ln = "Tab",
        Nn = "ArrowUp",
        Dn = "ArrowDown",
        Pn = 2,
        $n = new RegExp(`${Nn}|${Dn}|${An}`),
        In = "hide.bs.dropdown",
        Mn = "hidden.bs.dropdown",
        jn = "show.bs.dropdown",
        Hn = "shown.bs.dropdown",
        zn = "click.bs.dropdown",
        qn = "show",
        Rn = "dropup",
        Bn = "dropend",
        Wn = "dropstart",
        Fn = "navbar",
        Un = '[data-bs-toggle="dropdown"]',
        Vn = ".dropdown-menu",
        Xn = ".navbar-nav",
        Qn = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        Kn = m() ? "top-end" : "top-start",
        Yn = m() ? "top-start" : "top-end",
        Zn = m() ? "bottom-end" : "bottom-start",
        Gn = m() ? "bottom-start" : "bottom-end",
        Jn = m() ? "left-start" : "right-start",
        ti = m() ? "right-start" : "left-start",
        ei = {
          offset: [0, 2],
          boundary: "clippingParents",
          reference: "toggle",
          display: "dynamic",
          popperConfig: null,
          autoClose: !0
        },
        ni = {
          offset: "(array|string|function)",
          boundary: "(string|element)",
          reference: "(string|element|object)",
          display: "string",
          popperConfig: "(null|object|function)",
          autoClose: "(boolean|string)"
        };
      class ii extends q {
        constructor(t, e) {
          super(t), this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
        }
        static get Default() {
          return ei
        }
        static get DefaultType() {
          return ni
        }
        static get NAME() {
          return Sn
        }
        toggle() {
          if (u(this._element)) return;
          this._element.classList.contains(qn) ? this.hide() : this.show()
        }
        show() {
          if (u(this._element) || this._menu.classList.contains(qn)) return;
          const t = ii.getParentFromElement(this._element),
            e = {
              relatedTarget: this._element
            };
          if (!M.trigger(this._element, jn, e).defaultPrevented) {
            if (this._inNavbar) J.setDataAttribute(this._menu, "popper", "none");
            else {
              if (void 0 === kn) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
              let e = this._element;
              "parent" === this._config.reference ? e = t : r(this._config.reference) ? e = a(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference);
              const n = this._getPopperConfig(),
                i = n.modifiers.find(t => "applyStyles" === t.name && !1 === t.enabled);
              this._popper = Tn(e, this._menu, n), i && J.setDataAttribute(this._menu, "popper", "static")
            }
            "ontouchstart" in document.documentElement && !t.closest(Xn) && [].concat(...document.body.children).forEach(t => M.on(t, "mouseover", d)), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle(qn), this._element.classList.toggle(qn), M.trigger(this._element, Hn, e)
          }
        }
        hide() {
          if (u(this._element) || !this._menu.classList.contains(qn)) return;
          const t = {
            relatedTarget: this._element
          };
          this._completeHide(t)
        }
        dispose() {
          this._popper && this._popper.destroy(), super.dispose()
        }
        update() {
          this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
        }
        _addEventListeners() {
          M.on(this._element, zn, t => {
            t.preventDefault(), this.toggle()
          })
        }
        _completeHide(t) {
          M.trigger(this._element, In, t).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => M.off(t, "mouseover", d)), this._popper && this._popper.destroy(), this._menu.classList.remove(qn), this._element.classList.remove(qn), this._element.setAttribute("aria-expanded", "false"), J.removeDataAttribute(this._menu, "popper"), M.trigger(this._element, Mn, t))
        }
        _getConfig(t) {
          if (t = {
              ...this.constructor.Default,
              ...J.getDataAttributes(this._element),
              ...t
            }, l(Sn, t, this.constructor.DefaultType), "object" == typeof t.reference && !r(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError(`${Sn.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
          return t
        }
        _getMenuElement() {
          return t.next(this._element, Vn)[0]
        }
        _getPlacement() {
          const t = this._element.parentNode;
          if (t.classList.contains(Bn)) return Jn;
          if (t.classList.contains(Wn)) return ti;
          const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
          return t.classList.contains(Rn) ? e ? Yn : Kn : e ? Gn : Zn
        }
        _detectNavbar() {
          return null !== this._element.closest(`.${Fn}`)
        }
        _getOffset() {
          const {
            offset: t
          } = this._config;
          return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t
        }
        _getPopperConfig() {
          const t = {
            placement: this._getPlacement(),
            modifiers: [{
              name: "preventOverflow",
              options: {
                boundary: this._config.boundary
              }
            }, {
              name: "offset",
              options: {
                offset: this._getOffset()
              }
            }]
          };
          return "static" === this._config.display && (t.modifiers = [{
            name: "applyStyles",
            enabled: !1
          }]), {
            ...t,
            ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
          }
        }
        _selectMenuItem({
          key: e,
          target: n
        }) {
          const i = t.find(Qn, this._menu).filter(c);
          i.length && b(i, n, e === Dn, !i.includes(n)).focus()
        }
        static dropdownInterface(t, e) {
          const n = ii.getOrCreateInstance(t, e);
          if ("string" == typeof e) {
            if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
            n[e]()
          }
        }
        static jQueryInterface(t) {
          return this.each(function () {
            ii.dropdownInterface(this, t)
          })
        }
        static clearMenus(e) {
          if (e && (e.button === Pn || "keyup" === e.type && e.key !== Ln)) return;
          const n = t.find(Un);
          for (let t = 0, i = n.length; t < i; t++) {
            const i = ii.getInstance(n[t]);
            if (!i || !1 === i._config.autoClose) continue;
            if (!i._element.classList.contains(qn)) continue;
            const s = {
              relatedTarget: i._element
            };
            if (e) {
              const t = e.composedPath(),
                n = t.includes(i._menu);
              if (t.includes(i._element) || "inside" === i._config.autoClose && !n || "outside" === i._config.autoClose && n) continue;
              if (i._menu.contains(e.target) && ("keyup" === e.type && e.key === Ln || /input|select|option|textarea|form/i.test(e.target.tagName))) continue;
              "click" === e.type && (s.clickEvent = e)
            }
            i._completeHide(s)
          }
        }
        static getParentFromElement(t) {
          return s(t) || t.parentNode
        }
        static dataApiKeydownHandler(e) {
          if (/input|textarea/i.test(e.target.tagName) ? e.key === On || e.key !== An && (e.key !== Dn && e.key !== Nn || e.target.closest(Vn)) : !$n.test(e.key)) return;
          const n = this.classList.contains(qn);
          if (!n && e.key === An) return;
          if (e.preventDefault(), e.stopPropagation(), u(this)) return;
          const i = () => this.matches(Un) ? this : t.prev(this, Un)[0];
          return e.key === An ? (i().focus(), void ii.clearMenus()) : e.key === Nn || e.key === Dn ? (n || i().click(), void ii.getInstance(i())._selectMenuItem(e)) : void(n && e.key !== On || ii.clearMenus())
        }
      }
      M.on(document, "keydown.bs.dropdown.data-api", Un, ii.dataApiKeydownHandler), M.on(document, "keydown.bs.dropdown.data-api", Vn, ii.dataApiKeydownHandler), M.on(document, "click.bs.dropdown.data-api", ii.clearMenus), M.on(document, "keyup.bs.dropdown.data-api", ii.clearMenus), M.on(document, "click.bs.dropdown.data-api", Un, function (t) {
        t.preventDefault(), ii.dropdownInterface(this)
      }), v(ii);
      const si = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        oi = ".sticky-top";
      class ri {
        constructor() {
          this._element = document.body
        }
        getWidth() {
          const t = document.documentElement.clientWidth;
          return Math.abs(window.innerWidth - t)
        }
        hide() {
          const t = this.getWidth();
          this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", e => e + t), this._setElementAttributes(si, "paddingRight", e => e + t), this._setElementAttributes(oi, "marginRight", e => e - t)
        }
        _disableOverFlow() {
          this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
        }
        _setElementAttributes(t, e, n) {
          const i = this.getWidth();
          this._applyManipulationCallback(t, t => {
            if (t !== this._element && window.innerWidth > t.clientWidth + i) return;
            this._saveInitialAttribute(t, e);
            const s = window.getComputedStyle(t)[e];
            t.style[e] = `${n(Number.parseFloat(s))}px`
          })
        }
        reset() {
          this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(si, "paddingRight"), this._resetElementAttributes(oi, "marginRight")
        }
        _saveInitialAttribute(t, e) {
          const n = t.style[e];
          n && J.setDataAttribute(t, e, n)
        }
        _resetElementAttributes(t, e) {
          this._applyManipulationCallback(t, t => {
            const n = J.getDataAttribute(t, e);
            void 0 === n ? t.style.removeProperty(e) : (J.removeDataAttribute(t, e), t.style[e] = n)
          })
        }
        _applyManipulationCallback(e, n) {
          r(e) ? n(e) : t.find(e, this._element).forEach(n)
        }
        isOverflowing() {
          return this.getWidth() > 0
        }
      }
      const ai = {
          isVisible: !0,
          isAnimated: !1,
          rootElement: "body",
          clickCallback: null
        },
        li = {
          isVisible: "boolean",
          isAnimated: "boolean",
          rootElement: "(element|string)",
          clickCallback: "(function|null)"
        },
        ci = "backdrop",
        ui = "modal-backdrop",
        hi = "fade",
        di = "show",
        pi = `mousedown.bs.${ci}`;
      class fi {
        constructor(t) {
          this._config = this._getConfig(t), this._isAppended = !1, this._element = null
        }
        show(t) {
          this._config.isVisible ? (this._append(), this._config.isAnimated && p(this._getElement()), this._getElement().classList.add(di), this._emulateAnimation(() => {
            y(t)
          })) : y(t)
        }
        hide(t) {
          this._config.isVisible ? (this._getElement().classList.remove(di), this._emulateAnimation(() => {
            this.dispose(), y(t)
          })) : y(t)
        }
        _getElement() {
          if (!this._element) {
            const t = document.createElement("div");
            t.className = ui, this._config.isAnimated && t.classList.add(hi), this._element = t
          }
          return this._element
        }
        _getConfig(t) {
          return (t = {
            ...ai,
            ..."object" == typeof t ? t : {}
          }).rootElement = a(t.rootElement), l(ci, t, li), t
        }
        _append() {
          this._isAppended || (this._config.rootElement.appendChild(this._getElement()), M.on(this._getElement(), pi, () => {
            y(this._config.clickCallback)
          }), this._isAppended = !0)
        }
        dispose() {
          this._isAppended && (M.off(this._element, pi), this._element.remove(), this._isAppended = !1)
        }
        _emulateAnimation(t) {
          _(t, this._getElement(), this._config.isAnimated)
        }
      }
      const gi = "modal",
        mi = ".bs.modal",
        vi = "Escape",
        yi = {
          backdrop: !0,
          keyboard: !0,
          focus: !0
        },
        _i = {
          backdrop: "(boolean|string)",
          keyboard: "boolean",
          focus: "boolean"
        },
        bi = `hide${mi}`,
        wi = `hidePrevented${mi}`,
        xi = `hidden${mi}`,
        Ci = `show${mi}`,
        Ei = `shown${mi}`,
        Ti = `focusin${mi}`,
        ki = `resize${mi}`,
        Si = `click.dismiss${mi}`,
        Ai = `keydown.dismiss${mi}`,
        Oi = `mouseup.dismiss${mi}`,
        Li = `mousedown.dismiss${mi}`,
        Ni = `click${mi}.data-api`,
        Di = "modal-open",
        Pi = "fade",
        $i = "show",
        Ii = "modal-static",
        Mi = ".modal-dialog",
        ji = ".modal-body",
        Hi = '[data-bs-dismiss="modal"]';
      class zi extends q {
        constructor(e, n) {
          super(e), this._config = this._getConfig(n), this._dialog = t.findOne(Mi, this._element), this._backdrop = this._initializeBackDrop(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollBar = new ri
        }
        static get Default() {
          return yi
        }
        static get NAME() {
          return gi
        }
        toggle(t) {
          return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
          if (this._isShown || this._isTransitioning) return;
          M.trigger(this._element, Ci, {
            relatedTarget: t
          }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add(Di), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), M.on(this._element, Si, Hi, t => this.hide(t)), M.on(this._dialog, Li, () => {
            M.one(this._element, Oi, t => {
              t.target === this._element && (this._ignoreBackdropClick = !0)
            })
          }), this._showBackdrop(() => this._showElement(t)))
        }
        hide(t) {
          if (t && ["A", "AREA"].includes(t.target.tagName) && t.preventDefault(), !this._isShown || this._isTransitioning) return;
          if (M.trigger(this._element, bi).defaultPrevented) return;
          this._isShown = !1;
          const e = this._isAnimated();
          e && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), M.off(document, Ti), this._element.classList.remove($i), M.off(this._element, Si), M.off(this._dialog, Li), this._queueCallback(() => this._hideModal(), this._element, e)
        }
        dispose() {
          [window, this._dialog].forEach(t => M.off(t, mi)), this._backdrop.dispose(), super.dispose(), M.off(document, Ti)
        }
        handleUpdate() {
          this._adjustDialog()
        }
        _initializeBackDrop() {
          return new fi({
            isVisible: Boolean(this._config.backdrop),
            isAnimated: this._isAnimated()
          })
        }
        _getConfig(t) {
          return t = {
            ...yi,
            ...J.getDataAttributes(this._element),
            ..."object" == typeof t ? t : {}
          }, l(gi, t, _i), t
        }
        _showElement(e) {
          const n = this._isAnimated(),
            i = t.findOne(ji, this._dialog);
          this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), n && p(this._element), this._element.classList.add($i), this._config.focus && this._enforceFocus();
          this._queueCallback(() => {
            this._config.focus && this._element.focus(), this._isTransitioning = !1, M.trigger(this._element, Ei, {
              relatedTarget: e
            })
          }, this._dialog, n)
        }
        _enforceFocus() {
          M.off(document, Ti), M.on(document, Ti, t => {
            document === t.target || this._element === t.target || this._element.contains(t.target) || this._element.focus()
          })
        }
        _setEscapeEvent() {
          this._isShown ? M.on(this._element, Ai, t => {
            this._config.keyboard && t.key === vi ? (t.preventDefault(), this.hide()) : this._config.keyboard || t.key !== vi || this._triggerBackdropTransition()
          }) : M.off(this._element, Ai)
        }
        _setResizeEvent() {
          this._isShown ? M.on(window, ki, () => this._adjustDialog()) : M.off(window, ki)
        }
        _hideModal() {
          this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
            document.body.classList.remove(Di), this._resetAdjustments(), this._scrollBar.reset(), M.trigger(this._element, xi)
          })
        }
        _showBackdrop(t) {
          M.on(this._element, Si, t => {
            this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition())
          }), this._backdrop.show(t)
        }
        _isAnimated() {
          return this._element.classList.contains(Pi)
        }
        _triggerBackdropTransition() {
          if (M.trigger(this._element, wi).defaultPrevented) return;
          const {
            classList: t,
            scrollHeight: e,
            style: n
          } = this._element, i = e > document.documentElement.clientHeight;
          !i && "hidden" === n.overflowY || t.contains(Ii) || (i || (n.overflowY = "hidden"), t.add(Ii), this._queueCallback(() => {
            t.remove(Ii), i || this._queueCallback(() => {
              n.overflowY = ""
            }, this._dialog)
          }, this._dialog), this._element.focus())
        }
        _adjustDialog() {
          const t = this._element.scrollHeight > document.documentElement.clientHeight,
            e = this._scrollBar.getWidth(),
            n = e > 0;
          (!n && t && !m() || n && !t && m()) && (this._element.style.paddingLeft = `${e}px`), (n && !t && !m() || !n && t && m()) && (this._element.style.paddingRight = `${e}px`)
        }
        _resetAdjustments() {
          this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
        }
        static jQueryInterface(t, e) {
          return this.each(function () {
            const n = zi.getOrCreateInstance(this, t);
            if ("string" == typeof t) {
              if (void 0 === n[t]) throw new TypeError(`No method named "${t}"`);
              n[t](e)
            }
          })
        }
      }
      M.on(document, Ni, '[data-bs-toggle="modal"]', function (t) {
        const e = s(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(), M.one(e, Ci, t => {
          t.defaultPrevented || M.one(e, xi, () => {
            c(this) && this.focus()
          })
        }), zi.getOrCreateInstance(e).toggle(this)
      }), v(zi);
      const qi = "offcanvas",
        Ri = "Escape",
        Bi = {
          backdrop: !0,
          keyboard: !0,
          scroll: !1
        },
        Wi = {
          backdrop: "boolean",
          keyboard: "boolean",
          scroll: "boolean"
        },
        Fi = "show",
        Ui = "show.bs.offcanvas",
        Vi = "shown.bs.offcanvas",
        Xi = "hide.bs.offcanvas",
        Qi = "hidden.bs.offcanvas",
        Ki = "focusin.bs.offcanvas",
        Yi = "click.dismiss.bs.offcanvas",
        Zi = "keydown.dismiss.bs.offcanvas",
        Gi = '[data-bs-dismiss="offcanvas"]';
      class Ji extends q {
        constructor(t, e) {
          super(t), this._config = this._getConfig(e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._addEventListeners()
        }
        static get NAME() {
          return qi
        }
        static get Default() {
          return Bi
        }
        toggle(t) {
          return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
          if (this._isShown) return;
          if (M.trigger(this._element, Ui, {
              relatedTarget: t
            }).defaultPrevented) return;
          this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || ((new ri).hide(), this._enforceFocusOnElement(this._element)), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Fi);
          this._queueCallback(() => {
            M.trigger(this._element, Vi, {
              relatedTarget: t
            })
          }, this._element, !0)
        }
        hide() {
          if (!this._isShown) return;
          if (M.trigger(this._element, Xi).defaultPrevented) return;
          M.off(document, Ki), this._element.blur(), this._isShown = !1, this._element.classList.remove(Fi), this._backdrop.hide();
          this._queueCallback(() => {
            this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || (new ri).reset(), M.trigger(this._element, Qi)
          }, this._element, !0)
        }
        dispose() {
          this._backdrop.dispose(), super.dispose(), M.off(document, Ki)
        }
        _getConfig(t) {
          return t = {
            ...Bi,
            ...J.getDataAttributes(this._element),
            ..."object" == typeof t ? t : {}
          }, l(qi, t, Wi), t
        }
        _initializeBackDrop() {
          return new fi({
            isVisible: this._config.backdrop,
            isAnimated: !0,
            rootElement: this._element.parentNode,
            clickCallback: () => this.hide()
          })
        }
        _enforceFocusOnElement(t) {
          M.off(document, Ki), M.on(document, Ki, e => {
            document === e.target || t === e.target || t.contains(e.target) || t.focus()
          }), t.focus()
        }
        _addEventListeners() {
          M.on(this._element, Yi, Gi, () => this.hide()), M.on(this._element, Zi, t => {
            this._config.keyboard && t.key === Ri && this.hide()
          })
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = Ji.getOrCreateInstance(this, t);
            if ("string" == typeof t) {
              if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
              e[t](this)
            }
          })
        }
      }
      M.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (e) {
        const n = s(this);
        if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), u(this)) return;
        M.one(n, Qi, () => {
          c(this) && this.focus()
        });
        const i = t.findOne(".offcanvas.show");
        i && i !== n && Ji.getInstance(i).hide(), Ji.getOrCreateInstance(n).toggle(this)
      }), M.on(window, "load.bs.offcanvas.data-api", () => t.find(".offcanvas.show").forEach(t => Ji.getOrCreateInstance(t).show())), v(Ji);
      const ts = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
        es = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&\/:?]*(?:[#\/?]|$))/i,
        ns = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+\/a-z]+=*$/i,
        is = (t, e) => {
          const n = t.nodeName.toLowerCase();
          if (e.includes(n)) return !ts.has(n) || Boolean(es.test(t.nodeValue) || ns.test(t.nodeValue));
          const i = e.filter(t => t instanceof RegExp);
          for (let t = 0, e = i.length; t < e; t++)
            if (i[t].test(n)) return !0;
          return !1
        },
        ss = {
          "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
          a: ["target", "href", "title", "rel"],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          div: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ["src", "srcset", "alt", "title", "width", "height"],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: []
        };
  
      function os(t, e, n) {
        if (!t.length) return t;
        if (n && "function" == typeof n) return n(t);
        const i = (new window.DOMParser).parseFromString(t, "text/html"),
          s = Object.keys(e),
          o = [].concat(...i.body.querySelectorAll("*"));
        for (let t = 0, n = o.length; t < n; t++) {
          const n = o[t],
            i = n.nodeName.toLowerCase();
          if (!s.includes(i)) {
            n.remove();
            continue
          }
          const r = [].concat(...n.attributes),
            a = [].concat(e["*"] || [], e[i] || []);
          r.forEach(t => {
            is(t, a) || n.removeAttribute(t.nodeName)
          })
        }
        return i.body.innerHTML
      }
      const rs = "tooltip",
        as = "bs-tooltip",
        ls = new RegExp(`(^|\\s)${as}\\S+`, "g"),
        cs = new Set(["sanitize", "allowList", "sanitizeFn"]),
        us = {
          animation: "boolean",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
          delay: "(number|object)",
          html: "boolean",
          selector: "(string|boolean)",
          placement: "(string|function)",
          offset: "(array|string|function)",
          container: "(string|element|boolean)",
          fallbackPlacements: "array",
          boundary: "(string|element)",
          customClass: "(string|function)",
          sanitize: "boolean",
          sanitizeFn: "(null|function)",
          allowList: "object",
          popperConfig: "(null|object|function)"
        },
        hs = {
          AUTO: "auto",
          TOP: "top",
          RIGHT: m() ? "left" : "right",
          BOTTOM: "bottom",
          LEFT: m() ? "right" : "left"
        },
        ds = {
          animation: !0,
          template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
          trigger: "hover focus",
          title: "",
          delay: 0,
          html: !1,
          selector: !1,
          placement: "top",
          offset: [0, 0],
          container: !1,
          fallbackPlacements: ["top", "right", "bottom", "left"],
          boundary: "clippingParents",
          customClass: "",
          sanitize: !0,
          sanitizeFn: null,
          allowList: ss,
          popperConfig: null
        },
        ps = {
          HIDE: "hide.bs.tooltip",
          HIDDEN: "hidden.bs.tooltip",
          SHOW: "show.bs.tooltip",
          SHOWN: "shown.bs.tooltip",
          INSERTED: "inserted.bs.tooltip",
          CLICK: "click.bs.tooltip",
          FOCUSIN: "focusin.bs.tooltip",
          FOCUSOUT: "focusout.bs.tooltip",
          MOUSEENTER: "mouseenter.bs.tooltip",
          MOUSELEAVE: "mouseleave.bs.tooltip"
        },
        fs = "fade",
        gs = "modal",
        ms = "show",
        vs = "show",
        ys = "out",
        _s = ".tooltip-inner",
        bs = "hover",
        ws = "focus",
        xs = "click",
        Cs = "manual";
      class Es extends q {
        constructor(t, e) {
          if (void 0 === kn) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
          super(t), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(e), this.tip = null, this._setListeners()
        }
        static get Default() {
          return ds
        }
        static get NAME() {
          return rs
        }
        static get Event() {
          return ps
        }
        static get DefaultType() {
          return us
        }
        enable() {
          this._isEnabled = !0
        }
        disable() {
          this._isEnabled = !1
        }
        toggleEnabled() {
          this._isEnabled = !this._isEnabled
        }
        toggle(t) {
          if (this._isEnabled)
            if (t) {
              const e = this._initializeOnDelegatedTarget(t);
              e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e)
            } else {
              if (this.getTipElement().classList.contains(ms)) return void this._leave(null, this);
              this._enter(null, this)
            }
        }
        dispose() {
          clearTimeout(this._timeout), M.off(this._element.closest(`.${gs}`), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.remove(), this._popper && this._popper.destroy(), super.dispose()
        }
        show() {
          if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
          if (!this.isWithContent() || !this._isEnabled) return;
          const t = M.trigger(this._element, this.constructor.Event.SHOW),
            n = h(this._element),
            i = null === n ? this._element.ownerDocument.documentElement.contains(this._element) : n.contains(this._element);
          if (t.defaultPrevented || !i) return;
          const s = this.getTipElement(),
            o = e(this.constructor.NAME);
          s.setAttribute("id", o), this._element.setAttribute("aria-describedby", o), this.setContent(), this._config.animation && s.classList.add(fs);
          const r = "function" == typeof this._config.placement ? this._config.placement.call(this, s, this._element) : this._config.placement,
            a = this._getAttachment(r);
          this._addAttachmentClass(a);
          const {
            container: l
          } = this._config;
          H.set(s, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (l.appendChild(s), M.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = Tn(this._element, s, this._getPopperConfig(a)), s.classList.add(ms);
          const c = "function" == typeof this._config.customClass ? this._config.customClass() : this._config.customClass;
          c && s.classList.add(...c.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => {
            M.on(t, "mouseover", d)
          });
          const u = this.tip.classList.contains(fs);
          this._queueCallback(() => {
            const t = this._hoverState;
            this._hoverState = null, M.trigger(this._element, this.constructor.Event.SHOWN), t === ys && this._leave(null, this)
          }, this.tip, u)
        }
        hide() {
          if (!this._popper) return;
          const t = this.getTipElement();
          if (M.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
          t.classList.remove(ms), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => M.off(t, "mouseover", d)), this._activeTrigger[xs] = !1, this._activeTrigger[ws] = !1, this._activeTrigger[bs] = !1;
          const e = this.tip.classList.contains(fs);
          this._queueCallback(() => {
            this._isWithActiveTrigger() || (this._hoverState !== vs && t.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), M.trigger(this._element, this.constructor.Event.HIDDEN), this._popper && (this._popper.destroy(), this._popper = null))
          }, this.tip, e), this._hoverState = ""
        }
        update() {
          null !== this._popper && this._popper.update()
        }
        isWithContent() {
          return Boolean(this.getTitle())
        }
        getTipElement() {
          if (this.tip) return this.tip;
          const t = document.createElement("div");
          return t.innerHTML = this._config.template, this.tip = t.children[0], this.tip
        }
        setContent() {
          const e = this.getTipElement();
          this.setElementContent(t.findOne(_s, e), this.getTitle()), e.classList.remove(fs, ms)
        }
        setElementContent(t, e) {
          if (null !== t) return r(e) ? (e = a(e), void(this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.textContent = e.textContent)) : void(this._config.html ? (this._config.sanitize && (e = os(e, this._config.allowList, this._config.sanitizeFn)), t.innerHTML = e) : t.textContent = e)
        }
        getTitle() {
          let t = this._element.getAttribute("data-bs-original-title");
          return t || (t = "function" == typeof this._config.title ? this._config.title.call(this._element) : this._config.title), t
        }
        updateAttachment(t) {
          return "right" === t ? "end" : "left" === t ? "start" : t
        }
        _initializeOnDelegatedTarget(t, e) {
          const n = this.constructor.DATA_KEY;
          return (e = e || H.get(t.delegateTarget, n)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), H.set(t.delegateTarget, n, e)), e
        }
        _getOffset() {
          const {
            offset: t
          } = this._config;
          return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t
        }
        _getPopperConfig(t) {
          const e = {
            placement: t,
            modifiers: [{
              name: "flip",
              options: {
                fallbackPlacements: this._config.fallbackPlacements
              }
            }, {
              name: "offset",
              options: {
                offset: this._getOffset()
              }
            }, {
              name: "preventOverflow",
              options: {
                boundary: this._config.boundary
              }
            }, {
              name: "arrow",
              options: {
                element: `.${this.constructor.NAME}-arrow`
              }
            }, {
              name: "onChange",
              enabled: !0,
              phase: "afterWrite",
              fn: t => this._handlePopperPlacementChange(t)
            }],
            onFirstUpdate: t => {
              t.options.placement !== t.placement && this._handlePopperPlacementChange(t)
            }
          };
          return {
            ...e,
            ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
          }
        }
        _addAttachmentClass(t) {
          this.getTipElement().classList.add(`${as}-${this.updateAttachment(t)}`)
        }
        _getAttachment(t) {
          return hs[t.toUpperCase()]
        }
        _setListeners() {
          this._config.trigger.split(" ").forEach(t => {
            if ("click" === t) M.on(this._element, this.constructor.Event.CLICK, this._config.selector, t => this.toggle(t));
            else if (t !== Cs) {
              const e = t === bs ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN,
                n = t === bs ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
              M.on(this._element, e, this._config.selector, t => this._enter(t)), M.on(this._element, n, this._config.selector, t => this._leave(t))
            }
          }), this._hideModalHandler = (() => {
            this._element && this.hide()
          }), M.on(this._element.closest(`.${gs}`), "hide.bs.modal", this._hideModalHandler), this._config.selector ? this._config = {
            ...this._config,
            trigger: "manual",
            selector: ""
          } : this._fixTitle()
        }
        _fixTitle() {
          const t = this._element.getAttribute("title"),
            e = typeof this._element.getAttribute("data-bs-original-title");
          (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""))
        }
        _enter(t, e) {
          e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? ws : bs] = !0), e.getTipElement().classList.contains(ms) || e._hoverState === vs ? e._hoverState = vs : (clearTimeout(e._timeout), e._hoverState = vs, e._config.delay && e._config.delay.show ? e._timeout = setTimeout(() => {
            e._hoverState === vs && e.show()
          }, e._config.delay.show) : e.show())
        }
        _leave(t, e) {
          e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? ws : bs] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = ys, e._config.delay && e._config.delay.hide ? e._timeout = setTimeout(() => {
            e._hoverState === ys && e.hide()
          }, e._config.delay.hide) : e.hide())
        }
        _isWithActiveTrigger() {
          for (const t in this._activeTrigger)
            if (this._activeTrigger[t]) return !0;
          return !1
        }
        _getConfig(t) {
          const e = J.getDataAttributes(this._element);
          return Object.keys(e).forEach(t => {
            cs.has(t) && delete e[t]
          }), (t = {
            ...this.constructor.Default,
            ...e,
            ..."object" == typeof t && t ? t : {}
          }).container = !1 === t.container ? document.body : a(t.container), "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
          }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), l(rs, t, this.constructor.DefaultType), t.sanitize && (t.template = os(t.template, t.allowList, t.sanitizeFn)), t
        }
        _getDelegateConfig() {
          const t = {};
          if (this._config)
            for (const e in this._config) this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
          return t
        }
        _cleanTipClass() {
          const t = this.getTipElement(),
            e = t.getAttribute("class").match(ls);
          null !== e && e.length > 0 && e.map(t => t.trim()).forEach(e => t.classList.remove(e))
        }
        _handlePopperPlacementChange(t) {
          const {
            state: e
          } = t;
          e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)))
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = Es.getOrCreateInstance(this, t);
            if ("string" == typeof t) {
              if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
              e[t]()
            }
          })
        }
      }
      v(Es);
      const Ts = "popover",
        ks = "bs-popover",
        Ss = new RegExp(`(^|\\s)${ks}\\S+`, "g"),
        As = {
          ...Es.Default,
          placement: "right",
          offset: [0, 8],
          trigger: "click",
          content: "",
          template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        },
        Os = {
          ...Es.DefaultType,
          content: "(string|element|function)"
        },
        Ls = {
          HIDE: "hide.bs.popover",
          HIDDEN: "hidden.bs.popover",
          SHOW: "show.bs.popover",
          SHOWN: "shown.bs.popover",
          INSERTED: "inserted.bs.popover",
          CLICK: "click.bs.popover",
          FOCUSIN: "focusin.bs.popover",
          FOCUSOUT: "focusout.bs.popover",
          MOUSEENTER: "mouseenter.bs.popover",
          MOUSELEAVE: "mouseleave.bs.popover"
        },
        Ns = "fade",
        Ds = "show",
        Ps = ".popover-header",
        $s = ".popover-body";
      class Is extends Es {
        static get Default() {
          return As
        }
        static get NAME() {
          return Ts
        }
        static get Event() {
          return Ls
        }
        static get DefaultType() {
          return Os
        }
        isWithContent() {
          return this.getTitle() || this._getContent()
        }
        getTipElement() {
          return this.tip ? this.tip : (this.tip = super.getTipElement(), this.getTitle() || t.findOne(Ps, this.tip).remove(), this._getContent() || t.findOne($s, this.tip).remove(), this.tip)
        }
        setContent() {
          const e = this.getTipElement();
          this.setElementContent(t.findOne(Ps, e), this.getTitle());
          let n = this._getContent();
          "function" == typeof n && (n = n.call(this._element)), this.setElementContent(t.findOne($s, e), n), e.classList.remove(Ns, Ds)
        }
        _addAttachmentClass(t) {
          this.getTipElement().classList.add(`${ks}-${this.updateAttachment(t)}`)
        }
        _getContent() {
          return this._element.getAttribute("data-bs-content") || this._config.content
        }
        _cleanTipClass() {
          const t = this.getTipElement(),
            e = t.getAttribute("class").match(Ss);
          null !== e && e.length > 0 && e.map(t => t.trim()).forEach(e => t.classList.remove(e))
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = Is.getOrCreateInstance(this, t);
            if ("string" == typeof t) {
              if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
              e[t]()
            }
          })
        }
      }
      v(Is);
      const Ms = "scrollspy",
        js = ".bs.scrollspy",
        Hs = {
          offset: 10,
          method: "auto",
          target: ""
        },
        zs = {
          offset: "number",
          method: "string",
          target: "(string|element)"
        },
        qs = `activate${js}`,
        Rs = `scroll${js}`,
        Bs = `load${js}.data-api`,
        Ws = "dropdown-item",
        Fs = "active",
        Us = ".nav, .list-group",
        Vs = ".nav-link",
        Xs = ".nav-item",
        Qs = ".list-group-item",
        Ks = ".dropdown",
        Ys = ".dropdown-toggle",
        Zs = "offset",
        Gs = "position";
      class Js extends q {
        constructor(t, e) {
          super(t), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(e), this._selector = `${this._config.target} ${Vs}, ${this._config.target} ${Qs}, ${this._config.target} .${Ws}`, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, M.on(this._scrollElement, Rs, () => this._process()), this.refresh(), this._process()
        }
        static get Default() {
          return Hs
        }
        static get NAME() {
          return Ms
        }
        refresh() {
          const e = this._scrollElement === this._scrollElement.window ? Zs : Gs,
            n = "auto" === this._config.method ? e : this._config.method,
            s = n === Gs ? this._getScrollTop() : 0;
          this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), t.find(this._selector).map(e => {
            const o = i(e),
              r = o ? t.findOne(o) : null;
            if (r) {
              const t = r.getBoundingClientRect();
              if (t.width || t.height) return [J[n](r).top + s, o]
            }
            return null
          }).filter(t => t).sort((t, e) => t[0] - e[0]).forEach(t => {
            this._offsets.push(t[0]), this._targets.push(t[1])
          })
        }
        dispose() {
          M.off(this._scrollElement, js), super.dispose()
        }
        _getConfig(t) {
          if ("string" != typeof (t = {
              ...Hs,
              ...J.getDataAttributes(this._element),
              ..."object" == typeof t && t ? t : {}
            }).target && r(t.target)) {
            let {
              id: n
            } = t.target;
            n || (n = e(Ms), t.target.id = n), t.target = `#${n}`
          }
          return l(Ms, t, zs), t
        }
        _getScrollTop() {
          return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        _getScrollHeight() {
          return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        _getOffsetHeight() {
          return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        _process() {
          const t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            n = this._config.offset + e - this._getOffsetHeight();
          if (this._scrollHeight !== e && this.refresh(), t >= n) {
            const t = this._targets[this._targets.length - 1];
            this._activeTarget !== t && this._activate(t)
          } else {
            if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
            for (let e = this._offsets.length; e--;) {
              this._activeTarget !== this._targets[e] && t >= this._offsets[e] && (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e])
            }
          }
        }
        _activate(e) {
          this._activeTarget = e, this._clear();
          const n = this._selector.split(",").map(t => `${t}[data-bs-target="${e}"],${t}[href="${e}"]`),
            i = t.findOne(n.join(","));
          i.classList.contains(Ws) ? (t.findOne(Ys, i.closest(Ks)).classList.add(Fs), i.classList.add(Fs)) : (i.classList.add(Fs), t.parents(i, Us).forEach(e => {
            t.prev(e, `${Vs}, ${Qs}`).forEach(t => t.classList.add(Fs)), t.prev(e, Xs).forEach(e => {
              t.children(e, Vs).forEach(t => t.classList.add(Fs))
            })
          })), M.trigger(this._scrollElement, qs, {
            relatedTarget: e
          })
        }
        _clear() {
          t.find(this._selector).filter(t => t.classList.contains(Fs)).forEach(t => t.classList.remove(Fs))
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = Js.getOrCreateInstance(this, t);
            if ("string" == typeof t) {
              if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
              e[t]()
            }
          })
        }
      }
      M.on(window, Bs, () => {
        t.find('[data-bs-spy="scroll"]').forEach(t => new Js(t))
      }), v(Js);
      const to = "tab",
        eo = "hide.bs.tab",
        no = "hidden.bs.tab",
        io = "show.bs.tab",
        so = "shown.bs.tab",
        oo = "dropdown-menu",
        ro = "active",
        ao = "fade",
        lo = "show",
        co = ".dropdown",
        uo = ".nav, .list-group",
        ho = ".active",
        po = ":scope > li > .active",
        fo = ".dropdown-toggle",
        go = ":scope > .dropdown-menu .active";
      class mo extends q {
        static get NAME() {
          return to
        }
        show() {
          if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(ro)) return;
          let e;
          const n = s(this._element),
            i = this._element.closest(uo);
          if (i) {
            const n = "UL" === i.nodeName || "OL" === i.nodeName ? po : ho;
            e = (e = t.find(n, i))[e.length - 1]
          }
          const o = e ? M.trigger(e, eo, {
            relatedTarget: this._element
          }) : null;
          if (M.trigger(this._element, io, {
              relatedTarget: e
            }).defaultPrevented || null !== o && o.defaultPrevented) return;
          this._activate(this._element, i);
          const r = () => {
            M.trigger(e, no, {
              relatedTarget: this._element
            }), M.trigger(this._element, so, {
              relatedTarget: e
            })
          };
          n ? this._activate(n, n.parentNode, r) : r()
        }
        _activate(e, n, i) {
          const s = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? t.children(n, ho) : t.find(po, n))[0],
            o = i && s && s.classList.contains(ao),
            r = () => this._transitionComplete(e, s, i);
          s && o ? (s.classList.remove(lo), this._queueCallback(r, e, !0)) : r()
        }
        _transitionComplete(e, n, i) {
          if (n) {
            n.classList.remove(ro);
            const e = t.findOne(go, n.parentNode);
            e && e.classList.remove(ro), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
          }
          e.classList.add(ro), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), p(e), e.classList.contains(ao) && e.classList.add(lo);
          let s = e.parentNode;
          if (s && "LI" === s.nodeName && (s = s.parentNode), s && s.classList.contains(oo)) {
            const n = e.closest(co);
            n && t.find(fo, n).forEach(t => t.classList.add(ro)), e.setAttribute("aria-expanded", !0)
          }
          i && i()
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = mo.getOrCreateInstance(this);
            if ("string" == typeof t) {
              if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
              e[t]()
            }
          })
        }
      }
      M.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function (t) {
        if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), u(this)) return;
        mo.getOrCreateInstance(this).show()
      }), v(mo);
      const vo = "toast",
        yo = "click.dismiss.bs.toast",
        _o = "mouseover.bs.toast",
        bo = "mouseout.bs.toast",
        wo = "focusin.bs.toast",
        xo = "focusout.bs.toast",
        Co = "hide.bs.toast",
        Eo = "hidden.bs.toast",
        To = "show.bs.toast",
        ko = "shown.bs.toast",
        So = "fade",
        Ao = "hide",
        Oo = "show",
        Lo = "showing",
        No = {
          animation: "boolean",
          autohide: "boolean",
          delay: "number"
        },
        Do = {
          animation: !0,
          autohide: !0,
          delay: 5e3
        },
        Po = '[data-bs-dismiss="toast"]';
      class $o extends q {
        constructor(t, e) {
          super(t), this._config = this._getConfig(e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
        }
        static get DefaultType() {
          return No
        }
        static get Default() {
          return Do
        }
        static get NAME() {
          return vo
        }
        show() {
          if (M.trigger(this._element, To).defaultPrevented) return;
          this._clearTimeout(), this._config.animation && this._element.classList.add(So);
          this._element.classList.remove(Ao), p(this._element), this._element.classList.add(Lo), this._queueCallback(() => {
            this._element.classList.remove(Lo), this._element.classList.add(Oo), M.trigger(this._element, ko), this._maybeScheduleHide()
          }, this._element, this._config.animation)
        }
        hide() {
          if (!this._element.classList.contains(Oo)) return;
          if (M.trigger(this._element, Co).defaultPrevented) return;
          this._element.classList.remove(Oo), this._queueCallback(() => {
            this._element.classList.add(Ao), M.trigger(this._element, Eo)
          }, this._element, this._config.animation)
        }
        dispose() {
          this._clearTimeout(), this._element.classList.contains(Oo) && this._element.classList.remove(Oo), super.dispose()
        }
        _getConfig(t) {
          return t = {
            ...Do,
            ...J.getDataAttributes(this._element),
            ..."object" == typeof t && t ? t : {}
          }, l(vo, t, this.constructor.DefaultType), t
        }
        _maybeScheduleHide() {
          this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
            this.hide()
          }, this._config.delay)))
        }
        _onInteraction(t, e) {
          switch (t.type) {
            case "mouseover":
            case "mouseout":
              this._hasMouseInteraction = e;
              break;
            case "focusin":
            case "focusout":
              this._hasKeyboardInteraction = e
          }
          if (e) return void this._clearTimeout();
          const n = t.relatedTarget;
          this._element === n || this._element.contains(n) || this._maybeScheduleHide()
        }
        _setListeners() {
          M.on(this._element, yo, Po, () => this.hide()), M.on(this._element, _o, t => this._onInteraction(t, !0)), M.on(this._element, bo, t => this._onInteraction(t, !1)), M.on(this._element, wo, t => this._onInteraction(t, !0)), M.on(this._element, xo, t => this._onInteraction(t, !1))
        }
        _clearTimeout() {
          clearTimeout(this._timeout), this._timeout = null
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = $o.getOrCreateInstance(this, t);
            if ("string" == typeof t) {
              if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
              e[t](this)
            }
          })
        }
      }
      return v($o), {
        Alert: X,
        Button: Y,
        Carousel: Ht,
        Collapse: ie,
        Dropdown: ii,
        Modal: zi,
        Offcanvas: Ji,
        Popover: Is,
        ScrollSpy: Js,
        Tab: mo,
        Toast: $o,
        Tooltip: Es
      }
    }),
    function (t) {
      "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? t(require("jquery")) : t(jQuery)
    }(function (t, e) {
      var n = "plugin_hideShowPassword",
        i = ["show", "innerToggle"],
        s = {
          show: "infer",
          innerToggle: !1,
          enable: function () {
            var t = document.body,
              e = document.createElement("input"),
              n = !0;
            t || (t = document.createElement("body")), e = t.appendChild(e);
            try {
              e.setAttribute("type", "text")
            } catch (t) {
              n = !1
            }
            return t.removeChild(e), n
          }(),
          triggerOnToggle: !1,
          className: "hideShowPassword-field",
          initEvent: "hideShowPasswordInit",
          changeEvent: "passwordVisibilityChange",
          props: {
            autocapitalize: "off",
            autocomplete: "off",
            autocorrect: "off",
            spellcheck: "false"
          },
          toggle: {
            element: '<button type="button">',
            className: "hideShowPassword-toggle",
            touchSupport: "undefined" != typeof Modernizr && Modernizr.touchevents,
            attachToEvent: "click.hideShowPassword",
            attachToTouchEvent: "touchstart.hideShowPassword mousedown.hideShowPassword",
            attachToKeyEvent: "keyup",
            attachToKeyCodes: !0,
            styles: {
              position: "absolute"
            },
            touchStyles: {
              pointerEvents: "none"
            },
            position: "infer",
            verticalAlign: "middle",
            offset: 0,
            attr: {
              role: "button",
              "aria-label": "Show Password",
              title: "Show Password",
              tabIndex: 0
            }
          },
          wrapper: {
            element: "<div>",
            className: "hideShowPassword-wrapper",
            enforceWidth: !1,
            styles: {
              position: "relative"
            },
            inheritStyles: ["display", "verticalAlign", "marginTop", "marginRight", "marginBottom", "marginLeft"],
            innerElementStyles: {
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0
            }
          },
          states: {
            shown: {
              className: "hideShowPassword-shown",
              changeEvent: "passwordShown",
              props: {
                type: "text"
              },
              toggle: {
                className: "hideShowPassword-toggle-hide",
                content: "Hide",
                attr: {
                  "aria-pressed": "true",
                  title: "Hide Password"
                }
              }
            },
            hidden: {
              className: "hideShowPassword-hidden",
              changeEvent: "passwordHidden",
              props: {
                type: "password"
              },
              toggle: {
                className: "hideShowPassword-toggle-show",
                content: "Show",
                attr: {
                  "aria-pressed": "false",
                  title: "Show Password"
                }
              }
            }
          }
        };
  
      function o(e, n) {
        this.element = t(e), this.wrapperElement = t(), this.toggleElement = t(), this.init(n)
      }
      o.prototype = {
        init: function (e) {
          this.update(e, s) && (this.element.addClass(this.options.className), this.options.innerToggle && (this.wrapElement(this.options.wrapper), this.initToggle(this.options.toggle), "string" == typeof this.options.innerToggle && (this.toggleElement.hide(), this.element.one(this.options.innerToggle, t.proxy(function () {
            this.toggleElement.show()
          }, this)))), this.element.trigger(this.options.initEvent, [this]))
        },
        update: function (t, e) {
          return this.options = this.prepareOptions(t, e), this.updateElement() && this.element.trigger(this.options.changeEvent, [this]).trigger(this.state().changeEvent, [this]), this.options.enable
        },
        toggle: function (t) {
          return t = t || "toggle", this.update({
            show: t
          })
        },
        prepareOptions: function (e, n) {
          var i, s = e || {},
            o = [];
          if (n = n || this.options, e = t.extend(!0, {}, n, e), s.hasOwnProperty("wrapper") && s.wrapper.hasOwnProperty("inheritStyles") && (e.wrapper.inheritStyles = s.wrapper.inheritStyles), e.enable && ("toggle" === e.show ? e.show = this.isType("hidden", e.states) : "infer" === e.show && (e.show = this.isType("shown", e.states)), "infer" === e.toggle.position && (e.toggle.position = "rtl" === this.element.css("text-direction") ? "left" : "right"), !t.isArray(e.toggle.attachToKeyCodes))) {
            if (!0 === e.toggle.attachToKeyCodes) switch ((i = t(e.toggle.element)).prop("tagName").toLowerCase()) {
              case "button":
              case "input":
                break;
              case "a":
                if (i.filter("[href]").length) {
                  o.push(32);
                  break
                }
                default:
                  o.push(32, 13)
            }
            e.toggle.attachToKeyCodes = o
          }
          return e
        },
        updateElement: function () {
          return !(!this.options.enable || this.isType()) && (this.element.prop(t.extend({}, this.options.props, this.state().props)).addClass(this.state().className).removeClass(this.otherState().className), this.options.triggerOnToggle && this.element.trigger(this.options.triggerOnToggle, [this]), this.updateToggle(), !0)
        },
        isType: function (t, n) {
          return (n = n || this.options.states)[t = t || this.state(e, e, n).props.type] && (t = n[t].props.type), this.element.prop("type") === t
        },
        state: function (t, n, i) {
          return i = i || this.options.states, t === e && (t = this.options.show), "boolean" == typeof t && (t = t ? "shown" : "hidden"), n && (t = "shown" === t ? "hidden" : "shown"), i[t]
        },
        otherState: function (t) {
          return this.state(t, !0)
        },
        wrapElement: function (e) {
          var n, i = e.enforceWidth;
          return this.wrapperElement.length || (n = this.element.outerWidth(), t.each(e.inheritStyles, t.proxy(function (t, n) {
            e.styles[n] = this.element.css(n)
          }, this)), this.element.css(e.innerElementStyles).wrap(t(e.element).addClass(e.className).css(e.styles)), this.wrapperElement = this.element.parent(), !0 === i && (i = this.wrapperElement.outerWidth() !== n && n), !1 !== i && this.wrapperElement.css("width", i)), this.wrapperElement
        },
        initToggle: function (e) {
          return this.toggleElement.length || (this.toggleElement = t(e.element).attr(e.attr).addClass(e.className).css(e.styles).appendTo(this.wrapperElement), this.updateToggle(), this.positionToggle(e.position, e.verticalAlign, e.offset), e.touchSupport ? (this.toggleElement.css(e.touchStyles), this.element.on(e.attachToTouchEvent, t.proxy(this.toggleTouchEvent, this))) : this.toggleElement.on(e.attachToEvent, t.proxy(this.toggleEvent, this)), e.attachToKeyCodes.length && this.toggleElement.on(e.attachToKeyEvent, t.proxy(this.toggleKeyEvent, this))), this.toggleElement
        },
        positionToggle: function (t, e, n) {
          var i = {};
          switch (i[t] = n, e) {
            case "top":
            case "bottom":
              i[e] = n;
              break;
            case "middle":
              i.top = "50%", i.marginTop = this.toggleElement.outerHeight() / -2
          }
          return this.toggleElement.css(i)
        },
        updateToggle: function (t, e) {
          var n, i;
          return this.toggleElement.length && (n = "padding-" + this.options.toggle.position, t = t || this.state().toggle, e = e || this.otherState().toggle, this.toggleElement.attr(t.attr).addClass(t.className).removeClass(e.className).html(t.content), i = this.toggleElement.outerWidth() + 2 * this.options.toggle.offset, this.element.css(n) !== i && this.element.css(n, i)), this.toggleElement
        },
        toggleEvent: function (t) {
          t.preventDefault(), this.toggle()
        },
        toggleKeyEvent: function (e) {
          t.each(this.options.toggle.attachToKeyCodes, t.proxy(function (t, n) {
            if (e.which === n) return this.toggleEvent(e), !1
          }, this))
        },
        toggleTouchEvent: function (t) {
          var e, n, i, s = this.toggleElement.offset().left;
          s && (e = t.pageX || t.originalEvent.pageX, "left" === this.options.toggle.position ? (n = e, i = s += this.toggleElement.outerWidth()) : (n = s, i = e), i >= n && this.toggleEvent(t))
        }
      }, t.fn.hideShowPassword = function () {
        var e = {};
        return t.each(arguments, function (n, s) {
          var o = {};
          if ("object" == typeof s) o = s;
          else {
            if (!i[n]) return !1;
            o[i[n]] = s
          }
          t.extend(!0, e, o)
        }), this.each(function () {
          var i = t(this),
            s = i.data(n);
          s ? s.update(e) : i.data(n, new o(this, e))
        })
      }, t.each({
        show: !0,
        hide: !1,
        toggle: "toggle"
      }, function (e, n) {
        t.fn[e + "Password"] = function (t, e) {
          return this.hideShowPassword(n, t, e)
        }
      })
    }),
    function (t) {
      t.fn.niceSelect = function (e) {
        if ("string" == typeof e) return "update" == e ? this.each(function () {
          var e = t(this),
            i = t(this).next(".nice-select"),
            s = i.hasClass("open");
          i.length && (i.remove(), n(e), s && e.next().trigger("click"))
        }) : "destroy" == e ? (this.each(function () {
          var e = t(this),
            n = t(this).next(".nice-select");
          n.length && (n.remove(), e.css("display", ""))
        }), 0 == t(".nice-select").length && t(document).off(".nice_select")) : console.log('Method "' + e + '" does not exist.'), this;
  
        function n(e) {
          e.after(t("<div></div>").addClass("nice-select").addClass(e.attr("class") || "").addClass(e.attr("disabled") ? "disabled" : "").attr("tabindex", e.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
          var n = e.next(),
            i = e.find("option"),
            s = e.find("option:selected");
          n.find(".current").html(s.data("display") || s.text()), i.each(function (e) {
            var i = t(this),
              s = i.data("display");
            n.find("ul").append(t("<li></li>").attr("data-value", i.val()).attr("data-display", s || null).addClass("option" + (i.is(":selected") ? " selected" : "") + (i.is(":disabled") ? " disabled" : "")).html(i.text()))
          })
        }
        this.hide(), this.each(function () {
          var e = t(this);
          e.next().hasClass("nice-select") || n(e)
        }), t(document).off(".nice_select"), t(document).on("click.nice_select", ".nice-select", function (e) {
          var n = t(this);
          t(".nice-select").not(n).removeClass("open"), n.toggleClass("open"), n.hasClass("open") ? (n.find(".option"), n.find(".focus").removeClass("focus"), n.find(".selected").addClass("focus")) : n.focus()
        }), t(document).on("click.nice_select", function (e) {
          0 === t(e.target).closest(".nice-select").length && t(".nice-select").removeClass("open").find(".option")
        }), t(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function (e) {
          var n = t(this),
            i = n.closest(".nice-select");
          i.find(".selected").removeClass("selected"), n.addClass("selected");
          var s = n.data("display") || n.text();
          i.find(".current").text(s), i.prev("select").val(n.data("value")).trigger("change")
        }), t(document).on("keydown.nice_select", ".nice-select", function (e) {
          var n = t(this),
            i = t(n.find(".focus") || n.find(".list .option.selected"));
          if (32 == e.keyCode || 13 == e.keyCode) return n.hasClass("open") ? i.trigger("click") : n.trigger("click"), !1;
          if (40 == e.keyCode) {
            if (n.hasClass("open")) {
              var s = i.nextAll(".option:not(.disabled)").first();
              s.length > 0 && (n.find(".focus").removeClass("focus"), s.addClass("focus"))
            } else n.trigger("click");
            return !1
          }
          if (38 == e.keyCode) {
            if (n.hasClass("open")) {
              var o = i.prevAll(".option:not(.disabled)").first();
              o.length > 0 && (n.find(".focus").removeClass("focus"), o.addClass("focus"))
            } else n.trigger("click");
            return !1
          }
          if (27 == e.keyCode) n.hasClass("open") && n.trigger("click");
          else if (9 == e.keyCode && n.hasClass("open")) return !1
        });
        var i = document.createElement("a").style;
        return i.cssText = "pointer-events:auto", "auto" !== i.pointerEvents && t("html").addClass("no-csspointerevents"), this
      }
    }(jQuery);
  