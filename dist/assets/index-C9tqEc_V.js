function df(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r]
    if (typeof n != 'string' && !Array.isArray(n)) {
      for (const i in n)
        if (i !== 'default' && !(i in e)) {
          const l = Object.getOwnPropertyDescriptor(n, i)
          l && Object.defineProperty(e, i, l.get ? l : { enumerable: !0, get: () => n[i] })
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }))
}
;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i)
  new MutationObserver((i) => {
    for (const l of i) if (l.type === 'childList') for (const a of l.addedNodes) a.tagName === 'LINK' && a.rel === 'modulepreload' && n(a)
  }).observe(document, { childList: !0, subtree: !0 })
  function r(i) {
    const l = {}
    return (
      i.integrity && (l.integrity = i.integrity),
      i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (l.credentials = 'include')
        : i.crossOrigin === 'anonymous'
          ? (l.credentials = 'omit')
          : (l.credentials = 'same-origin'),
      l
    )
  }
  function n(i) {
    if (i.ep) return
    i.ep = !0
    const l = r(i)
    fetch(i.href, l)
  }
})()
function Ao(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e
}
var ff = { exports: {} },
  Vo = {},
  hf = { exports: {} },
  ye = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gl = Symbol.for('react.element'),
  Zh = Symbol.for('react.portal'),
  qh = Symbol.for('react.fragment'),
  Kh = Symbol.for('react.strict_mode'),
  Qh = Symbol.for('react.profiler'),
  Gh = Symbol.for('react.provider'),
  Yh = Symbol.for('react.context'),
  Xh = Symbol.for('react.forward_ref'),
  Jh = Symbol.for('react.suspense'),
  ep = Symbol.for('react.memo'),
  tp = Symbol.for('react.lazy'),
  hd = Symbol.iterator
function rp(e) {
  return e === null || typeof e != 'object' ? null : ((e = (hd && e[hd]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
var pf = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  },
  mf = Object.assign,
  vf = {}
function Mi(e, t, r) {
  ;(this.props = e), (this.context = t), (this.refs = vf), (this.updater = r || pf)
}
Mi.prototype.isReactComponent = {}
Mi.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error('setState(...): takes an object of state variables to update or a function which returns an object of state variables.')
  this.updater.enqueueSetState(this, e, t, 'setState')
}
Mi.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function gf() {}
gf.prototype = Mi.prototype
function Zu(e, t, r) {
  ;(this.props = e), (this.context = t), (this.refs = vf), (this.updater = r || pf)
}
var qu = (Zu.prototype = new gf())
qu.constructor = Zu
mf(qu, Mi.prototype)
qu.isPureReactComponent = !0
var pd = Array.isArray,
  yf = Object.prototype.hasOwnProperty,
  Ku = { current: null },
  xf = { key: !0, ref: !0, __self: !0, __source: !0 }
function wf(e, t, r) {
  var n,
    i = {},
    l = null,
    a = null
  if (t != null)
    for (n in (t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (l = '' + t.key), t))
      yf.call(t, n) && !xf.hasOwnProperty(n) && (i[n] = t[n])
  var o = arguments.length - 2
  if (o === 1) i.children = r
  else if (1 < o) {
    for (var s = Array(o), u = 0; u < o; u++) s[u] = arguments[u + 2]
    i.children = s
  }
  if (e && e.defaultProps) for (n in ((o = e.defaultProps), o)) i[n] === void 0 && (i[n] = o[n])
  return {
    $$typeof: Gl,
    type: e,
    key: l,
    ref: a,
    props: i,
    _owner: Ku.current
  }
}
function np(e, t) {
  return {
    $$typeof: Gl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner
  }
}
function Qu(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Gl
}
function ip(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (r) {
      return t[r]
    })
  )
}
var md = /\/+/g
function ds(e, t) {
  return typeof e == 'object' && e !== null && e.key != null ? ip('' + e.key) : t.toString(36)
}
function La(e, t, r, n, i) {
  var l = typeof e
  ;(l === 'undefined' || l === 'boolean') && (e = null)
  var a = !1
  if (e === null) a = !0
  else
    switch (l) {
      case 'string':
      case 'number':
        a = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case Gl:
          case Zh:
            a = !0
        }
    }
  if (a)
    return (
      (a = e),
      (i = i(a)),
      (e = n === '' ? '.' + ds(a, 0) : n),
      pd(i)
        ? ((r = ''),
          e != null && (r = e.replace(md, '$&/') + '/'),
          La(i, t, r, '', function (u) {
            return u
          }))
        : i != null &&
          (Qu(i) && (i = np(i, r + (!i.key || (a && a.key === i.key) ? '' : ('' + i.key).replace(md, '$&/') + '/') + e)), t.push(i)),
      1
    )
  if (((a = 0), (n = n === '' ? '.' : n + ':'), pd(e)))
    for (var o = 0; o < e.length; o++) {
      l = e[o]
      var s = n + ds(l, o)
      a += La(l, t, r, s, i)
    }
  else if (((s = rp(e)), typeof s == 'function'))
    for (e = s.call(e), o = 0; !(l = e.next()).done; ) (l = l.value), (s = n + ds(l, o++)), (a += La(l, t, r, s, i))
  else if (l === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    )
  return a
}
function ma(e, t, r) {
  if (e == null) return e
  var n = [],
    i = 0
  return (
    La(e, n, '', '', function (l) {
      return t.call(r, l, i++)
    }),
    n
  )
}
function lp(e) {
  if (e._status === -1) {
    var t = e._result
    ;(t = t()),
      t.then(
        function (r) {
          ;(e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = r))
        },
        function (r) {
          ;(e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = r))
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t))
  }
  if (e._status === 1) return e._result.default
  throw e._result
}
var St = { current: null },
  Da = { transition: null },
  ap = {
    ReactCurrentDispatcher: St,
    ReactCurrentBatchConfig: Da,
    ReactCurrentOwner: Ku
  }
function _f() {
  throw Error('act(...) is not supported in production builds of React.')
}
ye.Children = {
  map: ma,
  forEach: function (e, t, r) {
    ma(
      e,
      function () {
        t.apply(this, arguments)
      },
      r
    )
  },
  count: function (e) {
    var t = 0
    return (
      ma(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      ma(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!Qu(e)) throw Error('React.Children.only expected to receive a single React element child.')
    return e
  }
}
ye.Component = Mi
ye.Fragment = qh
ye.Profiler = Qh
ye.PureComponent = Zu
ye.StrictMode = Kh
ye.Suspense = Jh
ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ap
ye.act = _f
ye.cloneElement = function (e, t, r) {
  if (e == null) throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.')
  var n = mf({}, e.props),
    i = e.key,
    l = e.ref,
    a = e._owner
  if (t != null) {
    if ((t.ref !== void 0 && ((l = t.ref), (a = Ku.current)), t.key !== void 0 && (i = '' + t.key), e.type && e.type.defaultProps))
      var o = e.type.defaultProps
    for (s in t) yf.call(t, s) && !xf.hasOwnProperty(s) && (n[s] = t[s] === void 0 && o !== void 0 ? o[s] : t[s])
  }
  var s = arguments.length - 2
  if (s === 1) n.children = r
  else if (1 < s) {
    o = Array(s)
    for (var u = 0; u < s; u++) o[u] = arguments[u + 2]
    n.children = o
  }
  return { $$typeof: Gl, type: e.type, key: i, ref: l, props: n, _owner: a }
}
ye.createContext = function (e) {
  return (
    (e = {
      $$typeof: Yh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }),
    (e.Provider = { $$typeof: Gh, _context: e }),
    (e.Consumer = e)
  )
}
ye.createElement = wf
ye.createFactory = function (e) {
  var t = wf.bind(null, e)
  return (t.type = e), t
}
ye.createRef = function () {
  return { current: null }
}
ye.forwardRef = function (e) {
  return { $$typeof: Xh, render: e }
}
ye.isValidElement = Qu
ye.lazy = function (e) {
  return { $$typeof: tp, _payload: { _status: -1, _result: e }, _init: lp }
}
ye.memo = function (e, t) {
  return { $$typeof: ep, type: e, compare: t === void 0 ? null : t }
}
ye.startTransition = function (e) {
  var t = Da.transition
  Da.transition = {}
  try {
    e()
  } finally {
    Da.transition = t
  }
}
ye.unstable_act = _f
ye.useCallback = function (e, t) {
  return St.current.useCallback(e, t)
}
ye.useContext = function (e) {
  return St.current.useContext(e)
}
ye.useDebugValue = function () {}
ye.useDeferredValue = function (e) {
  return St.current.useDeferredValue(e)
}
ye.useEffect = function (e, t) {
  return St.current.useEffect(e, t)
}
ye.useId = function () {
  return St.current.useId()
}
ye.useImperativeHandle = function (e, t, r) {
  return St.current.useImperativeHandle(e, t, r)
}
ye.useInsertionEffect = function (e, t) {
  return St.current.useInsertionEffect(e, t)
}
ye.useLayoutEffect = function (e, t) {
  return St.current.useLayoutEffect(e, t)
}
ye.useMemo = function (e, t) {
  return St.current.useMemo(e, t)
}
ye.useReducer = function (e, t, r) {
  return St.current.useReducer(e, t, r)
}
ye.useRef = function (e) {
  return St.current.useRef(e)
}
ye.useState = function (e) {
  return St.current.useState(e)
}
ye.useSyncExternalStore = function (e, t, r) {
  return St.current.useSyncExternalStore(e, t, r)
}
ye.useTransition = function () {
  return St.current.useTransition()
}
ye.version = '18.3.1'
hf.exports = ye
var D = hf.exports
const zt = Ao(D),
  op = df({ __proto__: null, default: zt }, [D])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sp = D,
  up = Symbol.for('react.element'),
  cp = Symbol.for('react.fragment'),
  dp = Object.prototype.hasOwnProperty,
  fp = sp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  hp = { key: !0, ref: !0, __self: !0, __source: !0 }
function kf(e, t, r) {
  var n,
    i = {},
    l = null,
    a = null
  r !== void 0 && (l = '' + r), t.key !== void 0 && (l = '' + t.key), t.ref !== void 0 && (a = t.ref)
  for (n in t) dp.call(t, n) && !hp.hasOwnProperty(n) && (i[n] = t[n])
  if (e && e.defaultProps) for (n in ((t = e.defaultProps), t)) i[n] === void 0 && (i[n] = t[n])
  return {
    $$typeof: up,
    type: e,
    key: l,
    ref: a,
    props: i,
    _owner: fp.current
  }
}
Vo.Fragment = cp
Vo.jsx = kf
Vo.jsxs = kf
ff.exports = Vo
var x = ff.exports,
  Sf = { exports: {} },
  Ut = {},
  bf = { exports: {} },
  Ef = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t(j, B) {
    var I = j.length
    j.push(B)
    e: for (; 0 < I; ) {
      var ce = (I - 1) >>> 1,
        be = j[ce]
      if (0 < i(be, B)) (j[ce] = B), (j[I] = be), (I = ce)
      else break e
    }
  }
  function r(j) {
    return j.length === 0 ? null : j[0]
  }
  function n(j) {
    if (j.length === 0) return null
    var B = j[0],
      I = j.pop()
    if (I !== B) {
      j[0] = I
      e: for (var ce = 0, be = j.length, Rt = be >>> 1; ce < Rt; ) {
        var Ke = 2 * (ce + 1) - 1,
          Oe = j[Ke],
          Pe = Ke + 1,
          at = j[Pe]
        if (0 > i(Oe, I)) Pe < be && 0 > i(at, Oe) ? ((j[ce] = at), (j[Pe] = I), (ce = Pe)) : ((j[ce] = Oe), (j[Ke] = I), (ce = Ke))
        else if (Pe < be && 0 > i(at, I)) (j[ce] = at), (j[Pe] = I), (ce = Pe)
        else break e
      }
    }
    return B
  }
  function i(j, B) {
    var I = j.sortIndex - B.sortIndex
    return I !== 0 ? I : j.id - B.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var l = performance
    e.unstable_now = function () {
      return l.now()
    }
  } else {
    var a = Date,
      o = a.now()
    e.unstable_now = function () {
      return a.now() - o
    }
  }
  var s = [],
    u = [],
    c = 1,
    d = null,
    h = 3,
    v = !1,
    g = !1,
    k = !1,
    R = typeof setTimeout == 'function' ? setTimeout : null,
    p = typeof clearTimeout == 'function' ? clearTimeout : null,
    f = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function m(j) {
    for (var B = r(u); B !== null; ) {
      if (B.callback === null) n(u)
      else if (B.startTime <= j) n(u), (B.sortIndex = B.expirationTime), t(s, B)
      else break
      B = r(u)
    }
  }
  function b(j) {
    if (((k = !1), m(j), !g))
      if (r(s) !== null) (g = !0), X(z)
      else {
        var B = r(u)
        B !== null && O(b, B.startTime - j)
      }
  }
  function z(j, B) {
    ;(g = !1), k && ((k = !1), p(A), (A = -1)), (v = !0)
    var I = h
    try {
      for (m(B), d = r(s); d !== null && (!(d.expirationTime > B) || (j && !q())); ) {
        var ce = d.callback
        if (typeof ce == 'function') {
          ;(d.callback = null), (h = d.priorityLevel)
          var be = ce(d.expirationTime <= B)
          ;(B = e.unstable_now()), typeof be == 'function' ? (d.callback = be) : d === r(s) && n(s), m(B)
        } else n(s)
        d = r(s)
      }
      if (d !== null) var Rt = !0
      else {
        var Ke = r(u)
        Ke !== null && O(b, Ke.startTime - B), (Rt = !1)
      }
      return Rt
    } finally {
      ;(d = null), (h = I), (v = !1)
    }
  }
  var _ = !1,
    Z = null,
    A = -1,
    T = 5,
    M = -1
  function q() {
    return !(e.unstable_now() - M < T)
  }
  function C() {
    if (Z !== null) {
      var j = e.unstable_now()
      M = j
      var B = !0
      try {
        B = Z(!0, j)
      } finally {
        B ? L() : ((_ = !1), (Z = null))
      }
    } else _ = !1
  }
  var L
  if (typeof f == 'function')
    L = function () {
      f(C)
    }
  else if (typeof MessageChannel < 'u') {
    var U = new MessageChannel(),
      F = U.port2
    ;(U.port1.onmessage = C),
      (L = function () {
        F.postMessage(null)
      })
  } else
    L = function () {
      R(C, 0)
    }
  function X(j) {
    ;(Z = j), _ || ((_ = !0), L())
  }
  function O(j, B) {
    A = R(function () {
      j(e.unstable_now())
    }, B)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null
    }),
    (e.unstable_continueExecution = function () {
      g || v || ((g = !0), X(z))
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error('forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported')
        : (T = 0 < j ? Math.floor(1e3 / j) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(s)
    }),
    (e.unstable_next = function (j) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var B = 3
          break
        default:
          B = h
      }
      var I = h
      h = B
      try {
        return j()
      } finally {
        h = I
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, B) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          j = 3
      }
      var I = h
      h = j
      try {
        return B()
      } finally {
        h = I
      }
    }),
    (e.unstable_scheduleCallback = function (j, B, I) {
      var ce = e.unstable_now()
      switch ((typeof I == 'object' && I !== null ? ((I = I.delay), (I = typeof I == 'number' && 0 < I ? ce + I : ce)) : (I = ce), j)) {
        case 1:
          var be = -1
          break
        case 2:
          be = 250
          break
        case 5:
          be = 1073741823
          break
        case 4:
          be = 1e4
          break
        default:
          be = 5e3
      }
      return (
        (be = I + be),
        (j = {
          id: c++,
          callback: B,
          priorityLevel: j,
          startTime: I,
          expirationTime: be,
          sortIndex: -1
        }),
        I > ce
          ? ((j.sortIndex = I), t(u, j), r(s) === null && j === r(u) && (k ? (p(A), (A = -1)) : (k = !0), O(b, I - ce)))
          : ((j.sortIndex = be), t(s, j), g || v || ((g = !0), X(z))),
        j
      )
    }),
    (e.unstable_shouldYield = q),
    (e.unstable_wrapCallback = function (j) {
      var B = h
      return function () {
        var I = h
        h = B
        try {
          return j.apply(this, arguments)
        } finally {
          h = I
        }
      }
    })
})(Ef)
bf.exports = Ef
var pp = bf.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mp = D,
  It = pp
function H(e) {
  for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, r = 1; r < arguments.length; r++)
    t += '&args[]=' + encodeURIComponent(arguments[r])
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
var Cf = new Set(),
  gl = {}
function In(e, t) {
  xi(e, t), xi(e + 'Capture', t)
}
function xi(e, t) {
  for (gl[e] = t, e = 0; e < t.length; e++) Cf.add(t[e])
}
var Lr = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
  Zs = Object.prototype.hasOwnProperty,
  vp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  vd = {},
  gd = {}
function gp(e) {
  return Zs.call(gd, e) ? !0 : Zs.call(vd, e) ? !1 : vp.test(e) ? (gd[e] = !0) : ((vd[e] = !0), !1)
}
function yp(e, t, r, n) {
  if (r !== null && r.type === 0) return !1
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0
    case 'boolean':
      return n ? !1 : r !== null ? !r.acceptsBooleans : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
    default:
      return !1
  }
}
function xp(e, t, r, n) {
  if (t === null || typeof t > 'u' || yp(e, t, r, n)) return !0
  if (n) return !1
  if (r !== null)
    switch (r.type) {
      case 3:
        return !t
      case 4:
        return t === !1
      case 5:
        return isNaN(t)
      case 6:
        return isNaN(t) || 1 > t
    }
  return !1
}
function bt(e, t, r, n, i, l, a) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = i),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = a)
}
var ft = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    ft[e] = new bt(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv']
].forEach(function (e) {
  var t = e[0]
  ft[t] = new bt(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  ft[e] = new bt(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
  ft[e] = new bt(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    ft[e] = new bt(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  ft[e] = new bt(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  ft[e] = new bt(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  ft[e] = new bt(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  ft[e] = new bt(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var Gu = /[\-:]([a-z])/g
function Yu(e) {
  return e[1].toUpperCase()
}
'secondary-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Gu, Yu)
    ft[t] = new bt(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
  var t = e.replace(Gu, Yu)
  ft[t] = new bt(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
})
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Gu, Yu)
  ft[t] = new bt(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  ft[e] = new bt(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
ft.xlinkHref = new bt('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  ft[e] = new bt(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function Xu(e, t, r, n) {
  var i = ft.hasOwnProperty(t) ? ft[t] : null
  ;(i !== null ? i.type !== 0 : n || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
    (xp(t, r, i, n) && (r = null),
    n || i === null
      ? gp(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, '' + r))
      : i.mustUseProperty
        ? (e[i.propertyName] = r === null ? (i.type === 3 ? !1 : '') : r)
        : ((t = i.attributeName),
          (n = i.attributeNamespace),
          r === null
            ? e.removeAttribute(t)
            : ((i = i.type), (r = i === 3 || (i === 4 && r === !0) ? '' : '' + r), n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))))
}
var Ir = mp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  va = Symbol.for('react.element'),
  Jn = Symbol.for('react.portal'),
  ei = Symbol.for('react.fragment'),
  Ju = Symbol.for('react.strict_mode'),
  qs = Symbol.for('react.profiler'),
  Tf = Symbol.for('react.provider'),
  Nf = Symbol.for('react.context'),
  ec = Symbol.for('react.forward_ref'),
  Ks = Symbol.for('react.suspense'),
  Qs = Symbol.for('react.suspense_list'),
  tc = Symbol.for('react.memo'),
  Wr = Symbol.for('react.lazy'),
  jf = Symbol.for('react.offscreen'),
  yd = Symbol.iterator
function Ui(e) {
  return e === null || typeof e != 'object' ? null : ((e = (yd && e[yd]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
var $e = Object.assign,
  fs
function el(e) {
  if (fs === void 0)
    try {
      throw Error()
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/)
      fs = (t && t[1]) || ''
    }
  return (
    `
` +
    fs +
    e
  )
}
var hs = !1
function ps(e, t) {
  if (!e || hs) return ''
  hs = !0
  var r = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (t)
      if (
        ((t = function () {
          throw Error()
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error()
          }
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, [])
        } catch (u) {
          var n = u
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (u) {
          n = u
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (u) {
        n = u
      }
      e()
    }
  } catch (u) {
    if (u && n && typeof u.stack == 'string') {
      for (
        var i = u.stack.split(`
`),
          l = n.stack.split(`
`),
          a = i.length - 1,
          o = l.length - 1;
        1 <= a && 0 <= o && i[a] !== l[o];

      )
        o--
      for (; 1 <= a && 0 <= o; a--, o--)
        if (i[a] !== l[o]) {
          if (a !== 1 || o !== 1)
            do
              if ((a--, o--, 0 > o || i[a] !== l[o])) {
                var s =
                  `
` + i[a].replace(' at new ', ' at ')
                return e.displayName && s.includes('<anonymous>') && (s = s.replace('<anonymous>', e.displayName)), s
              }
            while (1 <= a && 0 <= o)
          break
        }
    }
  } finally {
    ;(hs = !1), (Error.prepareStackTrace = r)
  }
  return (e = e ? e.displayName || e.name : '') ? el(e) : ''
}
function wp(e) {
  switch (e.tag) {
    case 5:
      return el(e.type)
    case 16:
      return el('Lazy')
    case 13:
      return el('Suspense')
    case 19:
      return el('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = ps(e.type, !1)), e
    case 11:
      return (e = ps(e.type.render, !1)), e
    case 1:
      return (e = ps(e.type, !0)), e
    default:
      return ''
  }
}
function Gs(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case ei:
      return 'Fragment'
    case Jn:
      return 'Portal'
    case qs:
      return 'Profiler'
    case Ju:
      return 'StrictMode'
    case Ks:
      return 'Suspense'
    case Qs:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Nf:
        return (e.displayName || 'Context') + '.Consumer'
      case Tf:
        return (e._context.displayName || 'Context') + '.Provider'
      case ec:
        var t = e.render
        return (e = e.displayName), e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')), e
      case tc:
        return (t = e.displayName || null), t !== null ? t : Gs(e.type) || 'Memo'
      case Wr:
        ;(t = e._payload), (e = e._init)
        try {
          return Gs(e(t))
        } catch {}
    }
  return null
}
function _p(e) {
  var t = e.type
  switch (e.tag) {
    case 24:
      return 'Cache'
    case 9:
      return (t.displayName || 'Context') + '.Consumer'
    case 10:
      return (t._context.displayName || 'Context') + '.Provider'
    case 18:
      return 'DehydratedFragment'
    case 11:
      return (e = t.render), (e = e.displayName || e.name || ''), t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
    case 7:
      return 'Fragment'
    case 5:
      return t
    case 4:
      return 'Portal'
    case 3:
      return 'Root'
    case 6:
      return 'Text'
    case 16:
      return Gs(t)
    case 8:
      return t === Ju ? 'StrictMode' : 'Mode'
    case 22:
      return 'Offscreen'
    case 12:
      return 'Profiler'
    case 21:
      return 'Scope'
    case 13:
      return 'Suspense'
    case 19:
      return 'SuspenseList'
    case 25:
      return 'TracingMarker'
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null
      if (typeof t == 'string') return t
  }
  return null
}
function un(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e
    case 'object':
      return e
    default:
      return ''
  }
}
function Mf(e) {
  var t = e.type
  return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio')
}
function kp(e) {
  var t = Mf(e) ? 'checked' : 'value',
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    n = '' + e[t]
  if (!e.hasOwnProperty(t) && typeof r < 'u' && typeof r.get == 'function' && typeof r.set == 'function') {
    var i = r.get,
      l = r.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this)
        },
        set: function (a) {
          ;(n = '' + a), l.call(this, a)
        }
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return n
        },
        setValue: function (a) {
          n = '' + a
        },
        stopTracking: function () {
          ;(e._valueTracker = null), delete e[t]
        }
      }
    )
  }
}
function ga(e) {
  e._valueTracker || (e._valueTracker = kp(e))
}
function Pf(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var r = t.getValue(),
    n = ''
  return e && (n = Mf(e) ? (e.checked ? 'true' : 'false') : e.value), (e = n), e !== r ? (t.setValue(e), !0) : !1
}
function Ya(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function Ys(e, t) {
  var r = t.checked
  return $e({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? e._wrapperState.initialChecked
  })
}
function xd(e, t) {
  var r = t.defaultValue == null ? '' : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked
  ;(r = un(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null
    })
}
function Rf(e, t) {
  ;(t = t.checked), t != null && Xu(e, 'checked', t, !1)
}
function Xs(e, t) {
  Rf(e, t)
  var r = un(t.value),
    n = t.type
  if (r != null)
    n === 'number' ? ((r === 0 && e.value === '') || e.value != r) && (e.value = '' + r) : e.value !== '' + r && (e.value = '' + r)
  else if (n === 'submit' || n === 'reset') {
    e.removeAttribute('value')
    return
  }
  t.hasOwnProperty('value') ? Js(e, t.type, r) : t.hasOwnProperty('defaultValue') && Js(e, t.type, un(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function wd(e, t, r) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var n = t.type
    if (!((n !== 'submit' && n !== 'reset') || (t.value !== void 0 && t.value !== null))) return
    ;(t = '' + e._wrapperState.initialValue), r || t === e.value || (e.value = t), (e.defaultValue = t)
  }
  ;(r = e.name), r !== '' && (e.name = ''), (e.defaultChecked = !!e._wrapperState.initialChecked), r !== '' && (e.name = r)
}
function Js(e, t, r) {
  ;(t !== 'number' || Ya(e.ownerDocument) !== e) &&
    (r == null ? (e.defaultValue = '' + e._wrapperState.initialValue) : e.defaultValue !== '' + r && (e.defaultValue = '' + r))
}
var tl = Array.isArray
function fi(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {}
    for (var i = 0; i < r.length; i++) t['$' + r[i]] = !0
    for (r = 0; r < e.length; r++)
      (i = t.hasOwnProperty('$' + e[r].value)), e[r].selected !== i && (e[r].selected = i), i && n && (e[r].defaultSelected = !0)
  } else {
    for (r = '' + un(r), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === r) {
        ;(e[i].selected = !0), n && (e[i].defaultSelected = !0)
        return
      }
      t !== null || e[i].disabled || (t = e[i])
    }
    t !== null && (t.selected = !0)
  }
}
function eu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(H(91))
  return $e({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue
  })
}
function _d(e, t) {
  var r = t.value
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(H(92))
      if (tl(r)) {
        if (1 < r.length) throw Error(H(93))
        r = r[0]
      }
      t = r
    }
    t == null && (t = ''), (r = t)
  }
  e._wrapperState = { initialValue: un(r) }
}
function zf(e, t) {
  var r = un(t.value),
    n = un(t.defaultValue)
  r != null && ((r = '' + r), r !== e.value && (e.value = r), t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = '' + n)
}
function kd(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function Of(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function tu(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Of(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e
}
var ya,
  Lf = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, r, n, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, n, i)
          })
        }
      : e
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t
    else {
      for (
        ya = ya || document.createElement('div'), ya.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>', t = ya.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function yl(e, t) {
  if (t) {
    var r = e.firstChild
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var ol = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  },
  Sp = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(ol).forEach(function (e) {
  Sp.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ol[t] = ol[e])
  })
})
function Df(e, t, r) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : r || typeof t != 'number' || t === 0 || (ol.hasOwnProperty(e) && ol[e])
      ? ('' + t).trim()
      : t + 'px'
}
function Af(e, t) {
  e = e.style
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf('--') === 0,
        i = Df(r, t[r], n)
      r === 'float' && (r = 'cssFloat'), n ? e.setProperty(r, i) : (e[r] = i)
    }
}
var bp = $e(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
  }
)
function ru(e, t) {
  if (t) {
    if (bp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(H(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(H(60))
      if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML)) throw Error(H(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(H(62))
  }
}
function nu(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string'
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1
    default:
      return !0
  }
}
var iu = null
function rc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var lu = null,
  hi = null,
  pi = null
function Sd(e) {
  if ((e = Jl(e))) {
    if (typeof lu != 'function') throw Error(H(280))
    var t = e.stateNode
    t && ((t = $o(t)), lu(e.stateNode, e.type, t))
  }
}
function Vf(e) {
  hi ? (pi ? pi.push(e) : (pi = [e])) : (hi = e)
}
function Ff() {
  if (hi) {
    var e = hi,
      t = pi
    if (((pi = hi = null), Sd(e), t)) for (e = 0; e < t.length; e++) Sd(t[e])
  }
}
function If(e, t) {
  return e(t)
}
function Uf() {}
var ms = !1
function Bf(e, t, r) {
  if (ms) return e(t, r)
  ms = !0
  try {
    return If(e, t, r)
  } finally {
    ;(ms = !1), (hi !== null || pi !== null) && (Uf(), Ff())
  }
}
function xl(e, t) {
  var r = e.stateNode
  if (r === null) return null
  var n = $o(r)
  if (n === null) return null
  r = n[t]
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ;(n = !n.disabled) || ((e = e.type), (n = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))), (e = !n)
      break e
    default:
      e = !1
  }
  if (e) return null
  if (r && typeof r != 'function') throw Error(H(231, t, typeof r))
  return r
}
var au = !1
if (Lr)
  try {
    var Bi = {}
    Object.defineProperty(Bi, 'passive', {
      get: function () {
        au = !0
      }
    }),
      window.addEventListener('test', Bi, Bi),
      window.removeEventListener('test', Bi, Bi)
  } catch {
    au = !1
  }
function Ep(e, t, r, n, i, l, a, o, s) {
  var u = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(r, u)
  } catch (c) {
    this.onError(c)
  }
}
var sl = !1,
  Xa = null,
  Ja = !1,
  ou = null,
  Cp = {
    onError: function (e) {
      ;(sl = !0), (Xa = e)
    }
  }
function Tp(e, t, r, n, i, l, a, o, s) {
  ;(sl = !1), (Xa = null), Ep.apply(Cp, arguments)
}
function Np(e, t, r, n, i, l, a, o, s) {
  if ((Tp.apply(this, arguments), sl)) {
    if (sl) {
      var u = Xa
      ;(sl = !1), (Xa = null)
    } else throw Error(H(198))
    Ja || ((Ja = !0), (ou = u))
  }
}
function Un(e) {
  var t = e,
    r = e
  if (e.alternate) for (; t.return; ) t = t.return
  else {
    e = t
    do (t = e), t.flags & 4098 && (r = t.return), (e = t.return)
    while (e)
  }
  return t.tag === 3 ? r : null
}
function $f(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated
  }
  return null
}
function bd(e) {
  if (Un(e) !== e) throw Error(H(188))
}
function jp(e) {
  var t = e.alternate
  if (!t) {
    if (((t = Un(e)), t === null)) throw Error(H(188))
    return t !== e ? null : e
  }
  for (var r = e, n = t; ; ) {
    var i = r.return
    if (i === null) break
    var l = i.alternate
    if (l === null) {
      if (((n = i.return), n !== null)) {
        r = n
        continue
      }
      break
    }
    if (i.child === l.child) {
      for (l = i.child; l; ) {
        if (l === r) return bd(i), e
        if (l === n) return bd(i), t
        l = l.sibling
      }
      throw Error(H(188))
    }
    if (r.return !== n.return) (r = i), (n = l)
    else {
      for (var a = !1, o = i.child; o; ) {
        if (o === r) {
          ;(a = !0), (r = i), (n = l)
          break
        }
        if (o === n) {
          ;(a = !0), (n = i), (r = l)
          break
        }
        o = o.sibling
      }
      if (!a) {
        for (o = l.child; o; ) {
          if (o === r) {
            ;(a = !0), (r = l), (n = i)
            break
          }
          if (o === n) {
            ;(a = !0), (n = l), (r = i)
            break
          }
          o = o.sibling
        }
        if (!a) throw Error(H(189))
      }
    }
    if (r.alternate !== n) throw Error(H(190))
  }
  if (r.tag !== 3) throw Error(H(188))
  return r.stateNode.current === r ? e : t
}
function Hf(e) {
  return (e = jp(e)), e !== null ? Wf(e) : null
}
function Wf(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = Wf(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var Zf = It.unstable_scheduleCallback,
  Ed = It.unstable_cancelCallback,
  Mp = It.unstable_shouldYield,
  Pp = It.unstable_requestPaint,
  Ge = It.unstable_now,
  Rp = It.unstable_getCurrentPriorityLevel,
  nc = It.unstable_ImmediatePriority,
  qf = It.unstable_UserBlockingPriority,
  eo = It.unstable_NormalPriority,
  zp = It.unstable_LowPriority,
  Kf = It.unstable_IdlePriority,
  Fo = null,
  xr = null
function Op(e) {
  if (xr && typeof xr.onCommitFiberRoot == 'function')
    try {
      xr.onCommitFiberRoot(Fo, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var lr = Math.clz32 ? Math.clz32 : Ap,
  Lp = Math.log,
  Dp = Math.LN2
function Ap(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Lp(e) / Dp) | 0)) | 0
}
var xa = 64,
  wa = 4194304
function rl(e) {
  switch (e & -e) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return e
  }
}
function to(e, t) {
  var r = e.pendingLanes
  if (r === 0) return 0
  var n = 0,
    i = e.suspendedLanes,
    l = e.pingedLanes,
    a = r & 268435455
  if (a !== 0) {
    var o = a & ~i
    o !== 0 ? (n = rl(o)) : ((l &= a), l !== 0 && (n = rl(l)))
  } else (a = r & ~i), a !== 0 ? (n = rl(a)) : l !== 0 && (n = rl(l))
  if (n === 0) return 0
  if (t !== 0 && t !== n && !(t & i) && ((i = n & -n), (l = t & -t), i >= l || (i === 16 && (l & 4194240) !== 0))) return t
  if ((n & 4 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= n; 0 < t; ) (r = 31 - lr(t)), (i = 1 << r), (n |= e[r]), (t &= ~i)
  return n
}
function Vp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1
    default:
      return -1
  }
}
function Fp(e, t) {
  for (var r = e.suspendedLanes, n = e.pingedLanes, i = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
    var a = 31 - lr(l),
      o = 1 << a,
      s = i[a]
    s === -1 ? (!(o & r) || o & n) && (i[a] = Vp(o, t)) : s <= t && (e.expiredLanes |= o), (l &= ~o)
  }
}
function su(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Qf() {
  var e = xa
  return (xa <<= 1), !(xa & 4194240) && (xa = 64), e
}
function vs(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e)
  return t
}
function Yl(e, t, r) {
  ;(e.pendingLanes |= t), t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)), (e = e.eventTimes), (t = 31 - lr(t)), (e[t] = r)
}
function Ip(e, t) {
  var r = e.pendingLanes & ~t
  ;(e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements)
  var n = e.eventTimes
  for (e = e.expirationTimes; 0 < r; ) {
    var i = 31 - lr(r),
      l = 1 << i
    ;(t[i] = 0), (n[i] = -1), (e[i] = -1), (r &= ~l)
  }
}
function ic(e, t) {
  var r = (e.entangledLanes |= t)
  for (e = e.entanglements; r; ) {
    var n = 31 - lr(r),
      i = 1 << n
    ;(i & t) | (e[n] & t) && (e[n] |= t), (r &= ~i)
  }
}
var Te = 0
function Gf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var Yf,
  lc,
  Xf,
  Jf,
  e0,
  uu = !1,
  _a = [],
  en = null,
  tn = null,
  rn = null,
  wl = new Map(),
  _l = new Map(),
  qr = [],
  Up =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    )
function Cd(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      en = null
      break
    case 'dragenter':
    case 'dragleave':
      tn = null
      break
    case 'mouseover':
    case 'mouseout':
      rn = null
      break
    case 'pointerover':
    case 'pointerout':
      wl.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      _l.delete(t.pointerId)
  }
}
function $i(e, t, r, n, i, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: l,
        targetContainers: [i]
      }),
      t !== null && ((t = Jl(t)), t !== null && lc(t)),
      e)
    : ((e.eventSystemFlags |= n), (t = e.targetContainers), i !== null && t.indexOf(i) === -1 && t.push(i), e)
}
function Bp(e, t, r, n, i) {
  switch (t) {
    case 'focusin':
      return (en = $i(en, e, t, r, n, i)), !0
    case 'dragenter':
      return (tn = $i(tn, e, t, r, n, i)), !0
    case 'mouseover':
      return (rn = $i(rn, e, t, r, n, i)), !0
    case 'pointerover':
      var l = i.pointerId
      return wl.set(l, $i(wl.get(l) || null, e, t, r, n, i)), !0
    case 'gotpointercapture':
      return (l = i.pointerId), _l.set(l, $i(_l.get(l) || null, e, t, r, n, i)), !0
  }
  return !1
}
function t0(e) {
  var t = bn(e.target)
  if (t !== null) {
    var r = Un(t)
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = $f(r)), t !== null)) {
          ;(e.blockedOn = t),
            e0(e.priority, function () {
              Xf(r)
            })
          return
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null
        return
      }
    }
  }
  e.blockedOn = null
}
function Aa(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = cu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (r === null) {
      r = e.nativeEvent
      var n = new r.constructor(r.type, r)
      ;(iu = n), r.target.dispatchEvent(n), (iu = null)
    } else return (t = Jl(r)), t !== null && lc(t), (e.blockedOn = r), !1
    t.shift()
  }
  return !0
}
function Td(e, t, r) {
  Aa(e) && r.delete(t)
}
function $p() {
  ;(uu = !1),
    en !== null && Aa(en) && (en = null),
    tn !== null && Aa(tn) && (tn = null),
    rn !== null && Aa(rn) && (rn = null),
    wl.forEach(Td),
    _l.forEach(Td)
}
function Hi(e, t) {
  e.blockedOn === t && ((e.blockedOn = null), uu || ((uu = !0), It.unstable_scheduleCallback(It.unstable_NormalPriority, $p)))
}
function kl(e) {
  function t(i) {
    return Hi(i, e)
  }
  if (0 < _a.length) {
    Hi(_a[0], e)
    for (var r = 1; r < _a.length; r++) {
      var n = _a[r]
      n.blockedOn === e && (n.blockedOn = null)
    }
  }
  for (
    en !== null && Hi(en, e), tn !== null && Hi(tn, e), rn !== null && Hi(rn, e), wl.forEach(t), _l.forEach(t), r = 0;
    r < qr.length;
    r++
  )
    (n = qr[r]), n.blockedOn === e && (n.blockedOn = null)
  for (; 0 < qr.length && ((r = qr[0]), r.blockedOn === null); ) t0(r), r.blockedOn === null && qr.shift()
}
var mi = Ir.ReactCurrentBatchConfig,
  ro = !0
function Hp(e, t, r, n) {
  var i = Te,
    l = mi.transition
  mi.transition = null
  try {
    ;(Te = 1), ac(e, t, r, n)
  } finally {
    ;(Te = i), (mi.transition = l)
  }
}
function Wp(e, t, r, n) {
  var i = Te,
    l = mi.transition
  mi.transition = null
  try {
    ;(Te = 4), ac(e, t, r, n)
  } finally {
    ;(Te = i), (mi.transition = l)
  }
}
function ac(e, t, r, n) {
  if (ro) {
    var i = cu(e, t, r, n)
    if (i === null) Cs(e, t, n, no, r), Cd(e, n)
    else if (Bp(i, e, t, r, n)) n.stopPropagation()
    else if ((Cd(e, n), t & 4 && -1 < Up.indexOf(e))) {
      for (; i !== null; ) {
        var l = Jl(i)
        if ((l !== null && Yf(l), (l = cu(e, t, r, n)), l === null && Cs(e, t, n, no, r), l === i)) break
        i = l
      }
      i !== null && n.stopPropagation()
    } else Cs(e, t, n, null, r)
  }
}
var no = null
function cu(e, t, r, n) {
  if (((no = null), (e = rc(n)), (e = bn(e)), e !== null))
    if (((t = Un(e)), t === null)) e = null
    else if (((r = t.tag), r === 13)) {
      if (((e = $f(t)), e !== null)) return e
      e = null
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (no = e), null
}
function r0(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4
    case 'message':
      switch (Rp()) {
        case nc:
          return 1
        case qf:
          return 4
        case eo:
        case zp:
          return 16
        case Kf:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var Yr = null,
  oc = null,
  Va = null
function n0() {
  if (Va) return Va
  var e,
    t = oc,
    r = t.length,
    n,
    i = 'value' in Yr ? Yr.value : Yr.textContent,
    l = i.length
  for (e = 0; e < r && t[e] === i[e]; e++);
  var a = r - e
  for (n = 1; n <= a && t[r - n] === i[l - n]; n++);
  return (Va = i.slice(e, 1 < n ? 1 - n : void 0))
}
function Fa(e) {
  var t = e.keyCode
  return 'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t), e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}
function ka() {
  return !0
}
function Nd() {
  return !1
}
function Bt(e) {
  function t(r, n, i, l, a) {
    ;(this._reactName = r), (this._targetInst = i), (this.type = n), (this.nativeEvent = l), (this.target = a), (this.currentTarget = null)
    for (var o in e) e.hasOwnProperty(o) && ((r = e[o]), (this[o] = r ? r(l) : l[o]))
    return (
      (this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? ka : Nd),
      (this.isPropagationStopped = Nd),
      this
    )
  }
  return (
    $e(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var r = this.nativeEvent
        r &&
          (r.preventDefault ? r.preventDefault() : typeof r.returnValue != 'unknown' && (r.returnValue = !1),
          (this.isDefaultPrevented = ka))
      },
      stopPropagation: function () {
        var r = this.nativeEvent
        r &&
          (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != 'unknown' && (r.cancelBubble = !0),
          (this.isPropagationStopped = ka))
      },
      persist: function () {},
      isPersistent: ka
    }),
    t
  )
}
var Pi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  sc = Bt(Pi),
  Xl = $e({}, Pi, { view: 0, detail: 0 }),
  Zp = Bt(Xl),
  gs,
  ys,
  Wi,
  Io = $e({}, Xl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: uc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0 ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Wi &&
            (Wi && e.type === 'mousemove' ? ((gs = e.screenX - Wi.screenX), (ys = e.screenY - Wi.screenY)) : (ys = gs = 0), (Wi = e)),
          gs)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : ys
    }
  }),
  jd = Bt(Io),
  qp = $e({}, Io, { dataTransfer: 0 }),
  Kp = Bt(qp),
  Qp = $e({}, Xl, { relatedTarget: 0 }),
  xs = Bt(Qp),
  Gp = $e({}, Pi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Yp = Bt(Gp),
  Xp = $e({}, Pi, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    }
  }),
  Jp = Bt(Xp),
  em = $e({}, Pi, { data: 0 }),
  Md = Bt(em),
  tm = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified'
  },
  rm = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta'
  },
  nm = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey'
  }
function im(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = nm[e]) ? !!t[e] : !1
}
function uc() {
  return im
}
var lm = $e({}, Xl, {
    key: function (e) {
      if (e.key) {
        var t = tm[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = Fa(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? rm[e.keyCode] || 'Unidentified'
          : ''
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: uc,
    charCode: function (e) {
      return e.type === 'keypress' ? Fa(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress' ? Fa(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    }
  }),
  am = Bt(lm),
  om = $e({}, Io, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }),
  Pd = Bt(om),
  sm = $e({}, Xl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: uc
  }),
  um = Bt(sm),
  cm = $e({}, Pi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  dm = Bt(cm),
  fm = $e({}, Io, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
  }),
  hm = Bt(fm),
  pm = [9, 13, 27, 32],
  cc = Lr && 'CompositionEvent' in window,
  ul = null
Lr && 'documentMode' in document && (ul = document.documentMode)
var mm = Lr && 'TextEvent' in window && !ul,
  i0 = Lr && (!cc || (ul && 8 < ul && 11 >= ul)),
  Rd = ' ',
  zd = !1
function l0(e, t) {
  switch (e) {
    case 'keyup':
      return pm.indexOf(t.keyCode) !== -1
    case 'keydown':
      return t.keyCode !== 229
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0
    default:
      return !1
  }
}
function a0(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var ti = !1
function vm(e, t) {
  switch (e) {
    case 'compositionend':
      return a0(t)
    case 'keypress':
      return t.which !== 32 ? null : ((zd = !0), Rd)
    case 'textInput':
      return (e = t.data), e === Rd && zd ? null : e
    default:
      return null
  }
}
function gm(e, t) {
  if (ti) return e === 'compositionend' || (!cc && l0(e, t)) ? ((e = n0()), (Va = oc = Yr = null), (ti = !1), e) : null
  switch (e) {
    case 'paste':
      return null
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char
        if (t.which) return String.fromCharCode(t.which)
      }
      return null
    case 'compositionend':
      return i0 && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var ym = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
}
function Od(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!ym[e.type] : t === 'textarea'
}
function o0(e, t, r, n) {
  Vf(n), (t = io(t, 'onChange')), 0 < t.length && ((r = new sc('onChange', 'change', null, r, n)), e.push({ event: r, listeners: t }))
}
var cl = null,
  Sl = null
function xm(e) {
  y0(e, 0)
}
function Uo(e) {
  var t = ii(e)
  if (Pf(t)) return e
}
function wm(e, t) {
  if (e === 'change') return t
}
var s0 = !1
if (Lr) {
  var ws
  if (Lr) {
    var _s = 'oninput' in document
    if (!_s) {
      var Ld = document.createElement('div')
      Ld.setAttribute('oninput', 'return;'), (_s = typeof Ld.oninput == 'function')
    }
    ws = _s
  } else ws = !1
  s0 = ws && (!document.documentMode || 9 < document.documentMode)
}
function Dd() {
  cl && (cl.detachEvent('onpropertychange', u0), (Sl = cl = null))
}
function u0(e) {
  if (e.propertyName === 'value' && Uo(Sl)) {
    var t = []
    o0(t, Sl, e, rc(e)), Bf(xm, t)
  }
}
function _m(e, t, r) {
  e === 'focusin' ? (Dd(), (cl = t), (Sl = r), cl.attachEvent('onpropertychange', u0)) : e === 'focusout' && Dd()
}
function km(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Uo(Sl)
}
function Sm(e, t) {
  if (e === 'click') return Uo(t)
}
function bm(e, t) {
  if (e === 'input' || e === 'change') return Uo(t)
}
function Em(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var sr = typeof Object.is == 'function' ? Object.is : Em
function bl(e, t) {
  if (sr(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1
  var r = Object.keys(e),
    n = Object.keys(t)
  if (r.length !== n.length) return !1
  for (n = 0; n < r.length; n++) {
    var i = r[n]
    if (!Zs.call(t, i) || !sr(e[i], t[i])) return !1
  }
  return !0
}
function Ad(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function Vd(e, t) {
  var r = Ad(e)
  e = 0
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (((n = e + r.textContent.length), e <= t && n >= t)) return { node: r, offset: t - e }
      e = n
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling
          break e
        }
        r = r.parentNode
      }
      r = void 0
    }
    r = Ad(r)
  }
}
function c0(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? c0(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1
}
function d0() {
  for (var e = window, t = Ya(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == 'string'
    } catch {
      r = !1
    }
    if (r) e = t.contentWindow
    else break
    t = Ya(e.document)
  }
  return t
}
function dc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return (
    t &&
    ((t === 'input' && (e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  )
}
function Cm(e) {
  var t = d0(),
    r = e.focusedElem,
    n = e.selectionRange
  if (t !== r && r && r.ownerDocument && c0(r.ownerDocument.documentElement, r)) {
    if (n !== null && dc(r)) {
      if (((t = n.start), (e = n.end), e === void 0 && (e = t), 'selectionStart' in r))
        (r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length))
      else if (((e = ((t = r.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection()
        var i = r.textContent.length,
          l = Math.min(n.start, i)
        ;(n = n.end === void 0 ? l : Math.min(n.end, i)), !e.extend && l > n && ((i = n), (n = l), (l = i)), (i = Vd(r, l))
        var a = Vd(r, n)
        i &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          l > n ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)))
      }
    }
    for (t = [], e = r; (e = e.parentNode); ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof r.focus == 'function' && r.focus(), r = 0; r < t.length; r++)
      (e = t[r]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var Tm = Lr && 'documentMode' in document && 11 >= document.documentMode,
  ri = null,
  du = null,
  dl = null,
  fu = !1
function Fd(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument
  fu ||
    ri == null ||
    ri !== Ya(n) ||
    ((n = ri),
    'selectionStart' in n && dc(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = ((n.ownerDocument && n.ownerDocument.defaultView) || window).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset
        })),
    (dl && bl(dl, n)) ||
      ((dl = n),
      (n = io(du, 'onSelect')),
      0 < n.length && ((t = new sc('onSelect', 'select', null, t, r)), e.push({ event: t, listeners: n }), (t.target = ri))))
}
function Sa(e, t) {
  var r = {}
  return (r[e.toLowerCase()] = t.toLowerCase()), (r['Webkit' + e] = 'webkit' + t), (r['Moz' + e] = 'moz' + t), r
}
var ni = {
    animationend: Sa('Animation', 'AnimationEnd'),
    animationiteration: Sa('Animation', 'AnimationIteration'),
    animationstart: Sa('Animation', 'AnimationStart'),
    transitionend: Sa('Transition', 'TransitionEnd')
  },
  ks = {},
  f0 = {}
Lr &&
  ((f0 = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete ni.animationend.animation, delete ni.animationiteration.animation, delete ni.animationstart.animation),
  'TransitionEvent' in window || delete ni.transitionend.transition)
function Bo(e) {
  if (ks[e]) return ks[e]
  if (!ni[e]) return e
  var t = ni[e],
    r
  for (r in t) if (t.hasOwnProperty(r) && r in f0) return (ks[e] = t[r])
  return e
}
var h0 = Bo('animationend'),
  p0 = Bo('animationiteration'),
  m0 = Bo('animationstart'),
  v0 = Bo('transitionend'),
  g0 = new Map(),
  Id =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    )
function mn(e, t) {
  g0.set(e, t), In(t, [e])
}
for (var Ss = 0; Ss < Id.length; Ss++) {
  var bs = Id[Ss],
    Nm = bs.toLowerCase(),
    jm = bs[0].toUpperCase() + bs.slice(1)
  mn(Nm, 'on' + jm)
}
mn(h0, 'onAnimationEnd')
mn(p0, 'onAnimationIteration')
mn(m0, 'onAnimationStart')
mn('dblclick', 'onDoubleClick')
mn('focusin', 'onFocus')
mn('focusout', 'onBlur')
mn(v0, 'onTransitionEnd')
xi('onMouseEnter', ['mouseout', 'mouseover'])
xi('onMouseLeave', ['mouseout', 'mouseover'])
xi('onPointerEnter', ['pointerout', 'pointerover'])
xi('onPointerLeave', ['pointerout', 'pointerover'])
In('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '))
In('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '))
In('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
In('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '))
In('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '))
In('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '))
var nl =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Mm = new Set('cancel close invalid load scroll toggle'.split(' ').concat(nl))
function Ud(e, t, r) {
  var n = e.type || 'unknown-event'
  ;(e.currentTarget = r), Np(n, t, void 0, e), (e.currentTarget = null)
}
function y0(e, t) {
  t = (t & 4) !== 0
  for (var r = 0; r < e.length; r++) {
    var n = e[r],
      i = n.event
    n = n.listeners
    e: {
      var l = void 0
      if (t)
        for (var a = n.length - 1; 0 <= a; a--) {
          var o = n[a],
            s = o.instance,
            u = o.currentTarget
          if (((o = o.listener), s !== l && i.isPropagationStopped())) break e
          Ud(i, o, u), (l = s)
        }
      else
        for (a = 0; a < n.length; a++) {
          if (((o = n[a]), (s = o.instance), (u = o.currentTarget), (o = o.listener), s !== l && i.isPropagationStopped())) break e
          Ud(i, o, u), (l = s)
        }
    }
  }
  if (Ja) throw ((e = ou), (Ja = !1), (ou = null), e)
}
function Le(e, t) {
  var r = t[gu]
  r === void 0 && (r = t[gu] = new Set())
  var n = e + '__bubble'
  r.has(n) || (x0(t, e, 2, !1), r.add(n))
}
function Es(e, t, r) {
  var n = 0
  t && (n |= 4), x0(r, e, n, t)
}
var ba = '_reactListening' + Math.random().toString(36).slice(2)
function El(e) {
  if (!e[ba]) {
    ;(e[ba] = !0),
      Cf.forEach(function (r) {
        r !== 'selectionchange' && (Mm.has(r) || Es(r, !1, e), Es(r, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[ba] || ((t[ba] = !0), Es('selectionchange', !1, t))
  }
}
function x0(e, t, r, n) {
  switch (r0(t)) {
    case 1:
      var i = Hp
      break
    case 4:
      i = Wp
      break
    default:
      i = ac
  }
  ;(r = i.bind(null, t, r, e)),
    (i = void 0),
    !au || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (i = !0),
    n
      ? i !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: i })
        : e.addEventListener(t, r, !0)
      : i !== void 0
        ? e.addEventListener(t, r, { passive: i })
        : e.addEventListener(t, r, !1)
}
function Cs(e, t, r, n, i) {
  var l = n
  if (!(t & 1) && !(t & 2) && n !== null)
    e: for (;;) {
      if (n === null) return
      var a = n.tag
      if (a === 3 || a === 4) {
        var o = n.stateNode.containerInfo
        if (o === i || (o.nodeType === 8 && o.parentNode === i)) break
        if (a === 4)
          for (a = n.return; a !== null; ) {
            var s = a.tag
            if ((s === 3 || s === 4) && ((s = a.stateNode.containerInfo), s === i || (s.nodeType === 8 && s.parentNode === i))) return
            a = a.return
          }
        for (; o !== null; ) {
          if (((a = bn(o)), a === null)) return
          if (((s = a.tag), s === 5 || s === 6)) {
            n = l = a
            continue e
          }
          o = o.parentNode
        }
      }
      n = n.return
    }
  Bf(function () {
    var u = l,
      c = rc(r),
      d = []
    e: {
      var h = g0.get(e)
      if (h !== void 0) {
        var v = sc,
          g = e
        switch (e) {
          case 'keypress':
            if (Fa(r) === 0) break e
          case 'keydown':
          case 'keyup':
            v = am
            break
          case 'focusin':
            ;(g = 'focus'), (v = xs)
            break
          case 'focusout':
            ;(g = 'blur'), (v = xs)
            break
          case 'beforeblur':
          case 'afterblur':
            v = xs
            break
          case 'click':
            if (r.button === 2) break e
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            v = jd
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            v = Kp
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            v = um
            break
          case h0:
          case p0:
          case m0:
            v = Yp
            break
          case v0:
            v = dm
            break
          case 'scroll':
            v = Zp
            break
          case 'wheel':
            v = hm
            break
          case 'copy':
          case 'cut':
          case 'paste':
            v = Jp
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            v = Pd
        }
        var k = (t & 4) !== 0,
          R = !k && e === 'scroll',
          p = k ? (h !== null ? h + 'Capture' : null) : h
        k = []
        for (var f = u, m; f !== null; ) {
          m = f
          var b = m.stateNode
          if ((m.tag === 5 && b !== null && ((m = b), p !== null && ((b = xl(f, p)), b != null && k.push(Cl(f, b, m)))), R)) break
          f = f.return
        }
        0 < k.length && ((h = new v(h, g, null, r, c)), d.push({ event: h, listeners: k }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === 'mouseover' || e === 'pointerover'),
          (v = e === 'mouseout' || e === 'pointerout'),
          h && r !== iu && (g = r.relatedTarget || r.fromElement) && (bn(g) || g[Dr]))
        )
          break e
        if (
          (v || h) &&
          ((h = c.window === c ? c : (h = c.ownerDocument) ? h.defaultView || h.parentWindow : window),
          v
            ? ((g = r.relatedTarget || r.toElement),
              (v = u),
              (g = g ? bn(g) : null),
              g !== null && ((R = Un(g)), g !== R || (g.tag !== 5 && g.tag !== 6)) && (g = null))
            : ((v = null), (g = u)),
          v !== g)
        ) {
          if (
            ((k = jd),
            (b = 'onMouseLeave'),
            (p = 'onMouseEnter'),
            (f = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') && ((k = Pd), (b = 'onPointerLeave'), (p = 'onPointerEnter'), (f = 'pointer')),
            (R = v == null ? h : ii(v)),
            (m = g == null ? h : ii(g)),
            (h = new k(b, f + 'leave', v, r, c)),
            (h.target = R),
            (h.relatedTarget = m),
            (b = null),
            bn(c) === u && ((k = new k(p, f + 'enter', g, r, c)), (k.target = m), (k.relatedTarget = R), (b = k)),
            (R = b),
            v && g)
          )
            t: {
              for (k = v, p = g, f = 0, m = k; m; m = Kn(m)) f++
              for (m = 0, b = p; b; b = Kn(b)) m++
              for (; 0 < f - m; ) (k = Kn(k)), f--
              for (; 0 < m - f; ) (p = Kn(p)), m--
              for (; f--; ) {
                if (k === p || (p !== null && k === p.alternate)) break t
                ;(k = Kn(k)), (p = Kn(p))
              }
              k = null
            }
          else k = null
          v !== null && Bd(d, h, v, k, !1), g !== null && R !== null && Bd(d, R, g, k, !0)
        }
      }
      e: {
        if (
          ((h = u ? ii(u) : window), (v = h.nodeName && h.nodeName.toLowerCase()), v === 'select' || (v === 'input' && h.type === 'file'))
        )
          var z = wm
        else if (Od(h))
          if (s0) z = bm
          else {
            z = km
            var _ = _m
          }
        else (v = h.nodeName) && v.toLowerCase() === 'input' && (h.type === 'checkbox' || h.type === 'radio') && (z = Sm)
        if (z && (z = z(e, u))) {
          o0(d, z, r, c)
          break e
        }
        _ && _(e, h, u), e === 'focusout' && (_ = h._wrapperState) && _.controlled && h.type === 'number' && Js(h, 'number', h.value)
      }
      switch (((_ = u ? ii(u) : window), e)) {
        case 'focusin':
          ;(Od(_) || _.contentEditable === 'true') && ((ri = _), (du = u), (dl = null))
          break
        case 'focusout':
          dl = du = ri = null
          break
        case 'mousedown':
          fu = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(fu = !1), Fd(d, r, c)
          break
        case 'selectionchange':
          if (Tm) break
        case 'keydown':
        case 'keyup':
          Fd(d, r, c)
      }
      var Z
      if (cc)
        e: {
          switch (e) {
            case 'compositionstart':
              var A = 'onCompositionStart'
              break e
            case 'compositionend':
              A = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              A = 'onCompositionUpdate'
              break e
          }
          A = void 0
        }
      else ti ? l0(e, r) && (A = 'onCompositionEnd') : e === 'keydown' && r.keyCode === 229 && (A = 'onCompositionStart')
      A &&
        (i0 &&
          r.locale !== 'ko' &&
          (ti || A !== 'onCompositionStart'
            ? A === 'onCompositionEnd' && ti && (Z = n0())
            : ((Yr = c), (oc = 'value' in Yr ? Yr.value : Yr.textContent), (ti = !0))),
        (_ = io(u, A)),
        0 < _.length &&
          ((A = new Md(A, e, null, r, c)),
          d.push({ event: A, listeners: _ }),
          Z ? (A.data = Z) : ((Z = a0(r)), Z !== null && (A.data = Z)))),
        (Z = mm ? vm(e, r) : gm(e, r)) &&
          ((u = io(u, 'onBeforeInput')),
          0 < u.length && ((c = new Md('onBeforeInput', 'beforeinput', null, r, c)), d.push({ event: c, listeners: u }), (c.data = Z)))
    }
    y0(d, t)
  })
}
function Cl(e, t, r) {
  return { instance: e, listener: t, currentTarget: r }
}
function io(e, t) {
  for (var r = t + 'Capture', n = []; e !== null; ) {
    var i = e,
      l = i.stateNode
    i.tag === 5 &&
      l !== null &&
      ((i = l), (l = xl(e, r)), l != null && n.unshift(Cl(e, l, i)), (l = xl(e, t)), l != null && n.push(Cl(e, l, i))),
      (e = e.return)
  }
  return n
}
function Kn(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function Bd(e, t, r, n, i) {
  for (var l = t._reactName, a = []; r !== null && r !== n; ) {
    var o = r,
      s = o.alternate,
      u = o.stateNode
    if (s !== null && s === n) break
    o.tag === 5 &&
      u !== null &&
      ((o = u), i ? ((s = xl(r, l)), s != null && a.unshift(Cl(r, s, o))) : i || ((s = xl(r, l)), s != null && a.push(Cl(r, s, o)))),
      (r = r.return)
  }
  a.length !== 0 && e.push({ event: t, listeners: a })
}
var Pm = /\r\n?/g,
  Rm = /\u0000|\uFFFD/g
function $d(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Pm,
      `
`
    )
    .replace(Rm, '')
}
function Ea(e, t, r) {
  if (((t = $d(t)), $d(e) !== t && r)) throw Error(H(425))
}
function lo() {}
var hu = null,
  pu = null
function mu(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null)
  )
}
var vu = typeof setTimeout == 'function' ? setTimeout : void 0,
  zm = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Hd = typeof Promise == 'function' ? Promise : void 0,
  Om =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Hd < 'u'
        ? function (e) {
            return Hd.resolve(null).then(e).catch(Lm)
          }
        : vu
function Lm(e) {
  setTimeout(function () {
    throw e
  })
}
function Ts(e, t) {
  var r = t,
    n = 0
  do {
    var i = r.nextSibling
    if ((e.removeChild(r), i && i.nodeType === 8))
      if (((r = i.data), r === '/$')) {
        if (n === 0) {
          e.removeChild(i), kl(t)
          return
        }
        n--
      } else (r !== '$' && r !== '$?' && r !== '$!') || n++
    r = i
  } while (r)
  kl(t)
}
function nn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType
    if (t === 1 || t === 3) break
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
      if (t === '/$') return null
    }
  }
  return e
}
function Wd(e) {
  e = e.previousSibling
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data
      if (r === '$' || r === '$!' || r === '$?') {
        if (t === 0) return e
        t--
      } else r === '/$' && t++
    }
    e = e.previousSibling
  }
  return null
}
var Ri = Math.random().toString(36).slice(2),
  vr = '__reactFiber$' + Ri,
  Tl = '__reactProps$' + Ri,
  Dr = '__reactContainer$' + Ri,
  gu = '__reactEvents$' + Ri,
  Dm = '__reactListeners$' + Ri,
  Am = '__reactHandles$' + Ri
function bn(e) {
  var t = e[vr]
  if (t) return t
  for (var r = e.parentNode; r; ) {
    if ((t = r[Dr] || r[vr])) {
      if (((r = t.alternate), t.child !== null || (r !== null && r.child !== null)))
        for (e = Wd(e); e !== null; ) {
          if ((r = e[vr])) return r
          e = Wd(e)
        }
      return t
    }
    ;(e = r), (r = e.parentNode)
  }
  return null
}
function Jl(e) {
  return (e = e[vr] || e[Dr]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
}
function ii(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(H(33))
}
function $o(e) {
  return e[Tl] || null
}
var yu = [],
  li = -1
function vn(e) {
  return { current: e }
}
function De(e) {
  0 > li || ((e.current = yu[li]), (yu[li] = null), li--)
}
function ze(e, t) {
  li++, (yu[li] = e.current), (e.current = t)
}
var cn = {},
  vt = vn(cn),
  jt = vn(!1),
  Rn = cn
function wi(e, t) {
  var r = e.type.contextTypes
  if (!r) return cn
  var n = e.stateNode
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t) return n.__reactInternalMemoizedMaskedChildContext
  var i = {},
    l
  for (l in r) i[l] = t[l]
  return n && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = i)), i
}
function Mt(e) {
  return (e = e.childContextTypes), e != null
}
function ao() {
  De(jt), De(vt)
}
function Zd(e, t, r) {
  if (vt.current !== cn) throw Error(H(168))
  ze(vt, t), ze(jt, r)
}
function w0(e, t, r) {
  var n = e.stateNode
  if (((t = t.childContextTypes), typeof n.getChildContext != 'function')) return r
  n = n.getChildContext()
  for (var i in n) if (!(i in t)) throw Error(H(108, _p(e) || 'Unknown', i))
  return $e({}, r, n)
}
function oo(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || cn), (Rn = vt.current), ze(vt, e), ze(jt, jt.current), !0
  )
}
function qd(e, t, r) {
  var n = e.stateNode
  if (!n) throw Error(H(169))
  r ? ((e = w0(e, t, Rn)), (n.__reactInternalMemoizedMergedChildContext = e), De(jt), De(vt), ze(vt, e)) : De(jt), ze(jt, r)
}
var Mr = null,
  Ho = !1,
  Ns = !1
function _0(e) {
  Mr === null ? (Mr = [e]) : Mr.push(e)
}
function Vm(e) {
  ;(Ho = !0), _0(e)
}
function gn() {
  if (!Ns && Mr !== null) {
    Ns = !0
    var e = 0,
      t = Te
    try {
      var r = Mr
      for (Te = 1; e < r.length; e++) {
        var n = r[e]
        do n = n(!0)
        while (n !== null)
      }
      ;(Mr = null), (Ho = !1)
    } catch (i) {
      throw (Mr !== null && (Mr = Mr.slice(e + 1)), Zf(nc, gn), i)
    } finally {
      ;(Te = t), (Ns = !1)
    }
  }
  return null
}
var ai = [],
  oi = 0,
  so = null,
  uo = 0,
  Ht = [],
  Wt = 0,
  zn = null,
  Pr = 1,
  Rr = ''
function wn(e, t) {
  ;(ai[oi++] = uo), (ai[oi++] = so), (so = e), (uo = t)
}
function k0(e, t, r) {
  ;(Ht[Wt++] = Pr), (Ht[Wt++] = Rr), (Ht[Wt++] = zn), (zn = e)
  var n = Pr
  e = Rr
  var i = 32 - lr(n) - 1
  ;(n &= ~(1 << i)), (r += 1)
  var l = 32 - lr(t) + i
  if (30 < l) {
    var a = i - (i % 5)
    ;(l = (n & ((1 << a) - 1)).toString(32)), (n >>= a), (i -= a), (Pr = (1 << (32 - lr(t) + i)) | (r << i) | n), (Rr = l + e)
  } else (Pr = (1 << l) | (r << i) | n), (Rr = e)
}
function fc(e) {
  e.return !== null && (wn(e, 1), k0(e, 1, 0))
}
function hc(e) {
  for (; e === so; ) (so = ai[--oi]), (ai[oi] = null), (uo = ai[--oi]), (ai[oi] = null)
  for (; e === zn; ) (zn = Ht[--Wt]), (Ht[Wt] = null), (Rr = Ht[--Wt]), (Ht[Wt] = null), (Pr = Ht[--Wt]), (Ht[Wt] = null)
}
var Vt = null,
  Dt = null,
  Ve = !1,
  rr = null
function S0(e, t) {
  var r = Zt(5, null, null, 0)
  ;(r.elementType = 'DELETED'),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r)
}
function Kd(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type
      return (
        (t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (Vt = e), (Dt = nn(t.firstChild)), !0) : !1
      )
    case 6:
      return (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t), t !== null ? ((e.stateNode = t), (Vt = e), (Dt = null), !0) : !1
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = zn !== null ? { id: Pr, overflow: Rr } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: r,
              retryLane: 1073741824
            }),
            (r = Zt(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (Vt = e),
            (Dt = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function xu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function wu(e) {
  if (Ve) {
    var t = Dt
    if (t) {
      var r = t
      if (!Kd(e, t)) {
        if (xu(e)) throw Error(H(418))
        t = nn(r.nextSibling)
        var n = Vt
        t && Kd(e, t) ? S0(n, r) : ((e.flags = (e.flags & -4097) | 2), (Ve = !1), (Vt = e))
      }
    } else {
      if (xu(e)) throw Error(H(418))
      ;(e.flags = (e.flags & -4097) | 2), (Ve = !1), (Vt = e)
    }
  }
}
function Qd(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return
  Vt = e
}
function Ca(e) {
  if (e !== Vt) return !1
  if (!Ve) return Qd(e), (Ve = !0), !1
  var t
  if (
    ((t = e.tag !== 3) && !(t = e.tag !== 5) && ((t = e.type), (t = t !== 'head' && t !== 'body' && !mu(e.type, e.memoizedProps))),
    t && (t = Dt))
  ) {
    if (xu(e)) throw (b0(), Error(H(418)))
    for (; t; ) S0(e, t), (t = nn(t.nextSibling))
  }
  if ((Qd(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(H(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data
          if (r === '/$') {
            if (t === 0) {
              Dt = nn(e.nextSibling)
              break e
            }
            t--
          } else (r !== '$' && r !== '$!' && r !== '$?') || t++
        }
        e = e.nextSibling
      }
      Dt = null
    }
  } else Dt = Vt ? nn(e.stateNode.nextSibling) : null
  return !0
}
function b0() {
  for (var e = Dt; e; ) e = nn(e.nextSibling)
}
function _i() {
  ;(Dt = Vt = null), (Ve = !1)
}
function pc(e) {
  rr === null ? (rr = [e]) : rr.push(e)
}
var Fm = Ir.ReactCurrentBatchConfig
function Zi(e, t, r) {
  if (((e = r.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(H(309))
        var n = r.stateNode
      }
      if (!n) throw Error(H(147, e))
      var i = n,
        l = '' + e
      return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === l
        ? t.ref
        : ((t = function (a) {
            var o = i.refs
            a === null ? delete o[l] : (o[l] = a)
          }),
          (t._stringRef = l),
          t)
    }
    if (typeof e != 'string') throw Error(H(284))
    if (!r._owner) throw Error(H(290, e))
  }
  return e
}
function Ta(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(H(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)))
  )
}
function Gd(e) {
  var t = e._init
  return t(e._payload)
}
function E0(e) {
  function t(p, f) {
    if (e) {
      var m = p.deletions
      m === null ? ((p.deletions = [f]), (p.flags |= 16)) : m.push(f)
    }
  }
  function r(p, f) {
    if (!e) return null
    for (; f !== null; ) t(p, f), (f = f.sibling)
    return null
  }
  function n(p, f) {
    for (p = new Map(); f !== null; ) f.key !== null ? p.set(f.key, f) : p.set(f.index, f), (f = f.sibling)
    return p
  }
  function i(p, f) {
    return (p = sn(p, f)), (p.index = 0), (p.sibling = null), p
  }
  function l(p, f, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate), m !== null ? ((m = m.index), m < f ? ((p.flags |= 2), f) : m) : ((p.flags |= 2), f))
        : ((p.flags |= 1048576), f)
    )
  }
  function a(p) {
    return e && p.alternate === null && (p.flags |= 2), p
  }
  function o(p, f, m, b) {
    return f === null || f.tag !== 6 ? ((f = Ls(m, p.mode, b)), (f.return = p), f) : ((f = i(f, m)), (f.return = p), f)
  }
  function s(p, f, m, b) {
    var z = m.type
    return z === ei
      ? c(p, f, m.props.children, b, m.key)
      : f !== null && (f.elementType === z || (typeof z == 'object' && z !== null && z.$$typeof === Wr && Gd(z) === f.type))
        ? ((b = i(f, m.props)), (b.ref = Zi(p, f, m)), (b.return = p), b)
        : ((b = Za(m.type, m.key, m.props, null, p.mode, b)), (b.ref = Zi(p, f, m)), (b.return = p), b)
  }
  function u(p, f, m, b) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== m.containerInfo || f.stateNode.implementation !== m.implementation
      ? ((f = Ds(m, p.mode, b)), (f.return = p), f)
      : ((f = i(f, m.children || [])), (f.return = p), f)
  }
  function c(p, f, m, b, z) {
    return f === null || f.tag !== 7 ? ((f = Mn(m, p.mode, b, z)), (f.return = p), f) : ((f = i(f, m)), (f.return = p), f)
  }
  function d(p, f, m) {
    if ((typeof f == 'string' && f !== '') || typeof f == 'number') return (f = Ls('' + f, p.mode, m)), (f.return = p), f
    if (typeof f == 'object' && f !== null) {
      switch (f.$$typeof) {
        case va:
          return (m = Za(f.type, f.key, f.props, null, p.mode, m)), (m.ref = Zi(p, null, f)), (m.return = p), m
        case Jn:
          return (f = Ds(f, p.mode, m)), (f.return = p), f
        case Wr:
          var b = f._init
          return d(p, b(f._payload), m)
      }
      if (tl(f) || Ui(f)) return (f = Mn(f, p.mode, m, null)), (f.return = p), f
      Ta(p, f)
    }
    return null
  }
  function h(p, f, m, b) {
    var z = f !== null ? f.key : null
    if ((typeof m == 'string' && m !== '') || typeof m == 'number') return z !== null ? null : o(p, f, '' + m, b)
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case va:
          return m.key === z ? s(p, f, m, b) : null
        case Jn:
          return m.key === z ? u(p, f, m, b) : null
        case Wr:
          return (z = m._init), h(p, f, z(m._payload), b)
      }
      if (tl(m) || Ui(m)) return z !== null ? null : c(p, f, m, b, null)
      Ta(p, m)
    }
    return null
  }
  function v(p, f, m, b, z) {
    if ((typeof b == 'string' && b !== '') || typeof b == 'number') return (p = p.get(m) || null), o(f, p, '' + b, z)
    if (typeof b == 'object' && b !== null) {
      switch (b.$$typeof) {
        case va:
          return (p = p.get(b.key === null ? m : b.key) || null), s(f, p, b, z)
        case Jn:
          return (p = p.get(b.key === null ? m : b.key) || null), u(f, p, b, z)
        case Wr:
          var _ = b._init
          return v(p, f, m, _(b._payload), z)
      }
      if (tl(b) || Ui(b)) return (p = p.get(m) || null), c(f, p, b, z, null)
      Ta(f, b)
    }
    return null
  }
  function g(p, f, m, b) {
    for (var z = null, _ = null, Z = f, A = (f = 0), T = null; Z !== null && A < m.length; A++) {
      Z.index > A ? ((T = Z), (Z = null)) : (T = Z.sibling)
      var M = h(p, Z, m[A], b)
      if (M === null) {
        Z === null && (Z = T)
        break
      }
      e && Z && M.alternate === null && t(p, Z), (f = l(M, f, A)), _ === null ? (z = M) : (_.sibling = M), (_ = M), (Z = T)
    }
    if (A === m.length) return r(p, Z), Ve && wn(p, A), z
    if (Z === null) {
      for (; A < m.length; A++) (Z = d(p, m[A], b)), Z !== null && ((f = l(Z, f, A)), _ === null ? (z = Z) : (_.sibling = Z), (_ = Z))
      return Ve && wn(p, A), z
    }
    for (Z = n(p, Z); A < m.length; A++)
      (T = v(Z, p, A, m[A], b)),
        T !== null &&
          (e && T.alternate !== null && Z.delete(T.key === null ? A : T.key),
          (f = l(T, f, A)),
          _ === null ? (z = T) : (_.sibling = T),
          (_ = T))
    return (
      e &&
        Z.forEach(function (q) {
          return t(p, q)
        }),
      Ve && wn(p, A),
      z
    )
  }
  function k(p, f, m, b) {
    var z = Ui(m)
    if (typeof z != 'function') throw Error(H(150))
    if (((m = z.call(m)), m == null)) throw Error(H(151))
    for (var _ = (z = null), Z = f, A = (f = 0), T = null, M = m.next(); Z !== null && !M.done; A++, M = m.next()) {
      Z.index > A ? ((T = Z), (Z = null)) : (T = Z.sibling)
      var q = h(p, Z, M.value, b)
      if (q === null) {
        Z === null && (Z = T)
        break
      }
      e && Z && q.alternate === null && t(p, Z), (f = l(q, f, A)), _ === null ? (z = q) : (_.sibling = q), (_ = q), (Z = T)
    }
    if (M.done) return r(p, Z), Ve && wn(p, A), z
    if (Z === null) {
      for (; !M.done; A++, M = m.next())
        (M = d(p, M.value, b)), M !== null && ((f = l(M, f, A)), _ === null ? (z = M) : (_.sibling = M), (_ = M))
      return Ve && wn(p, A), z
    }
    for (Z = n(p, Z); !M.done; A++, M = m.next())
      (M = v(Z, p, A, M.value, b)),
        M !== null &&
          (e && M.alternate !== null && Z.delete(M.key === null ? A : M.key),
          (f = l(M, f, A)),
          _ === null ? (z = M) : (_.sibling = M),
          (_ = M))
    return (
      e &&
        Z.forEach(function (C) {
          return t(p, C)
        }),
      Ve && wn(p, A),
      z
    )
  }
  function R(p, f, m, b) {
    if (
      (typeof m == 'object' && m !== null && m.type === ei && m.key === null && (m = m.props.children), typeof m == 'object' && m !== null)
    ) {
      switch (m.$$typeof) {
        case va:
          e: {
            for (var z = m.key, _ = f; _ !== null; ) {
              if (_.key === z) {
                if (((z = m.type), z === ei)) {
                  if (_.tag === 7) {
                    r(p, _.sibling), (f = i(_, m.props.children)), (f.return = p), (p = f)
                    break e
                  }
                } else if (_.elementType === z || (typeof z == 'object' && z !== null && z.$$typeof === Wr && Gd(z) === _.type)) {
                  r(p, _.sibling), (f = i(_, m.props)), (f.ref = Zi(p, _, m)), (f.return = p), (p = f)
                  break e
                }
                r(p, _)
                break
              } else t(p, _)
              _ = _.sibling
            }
            m.type === ei
              ? ((f = Mn(m.props.children, p.mode, b, m.key)), (f.return = p), (p = f))
              : ((b = Za(m.type, m.key, m.props, null, p.mode, b)), (b.ref = Zi(p, f, m)), (b.return = p), (p = b))
          }
          return a(p)
        case Jn:
          e: {
            for (_ = m.key; f !== null; ) {
              if (f.key === _)
                if (f.tag === 4 && f.stateNode.containerInfo === m.containerInfo && f.stateNode.implementation === m.implementation) {
                  r(p, f.sibling), (f = i(f, m.children || [])), (f.return = p), (p = f)
                  break e
                } else {
                  r(p, f)
                  break
                }
              else t(p, f)
              f = f.sibling
            }
            ;(f = Ds(m, p.mode, b)), (f.return = p), (p = f)
          }
          return a(p)
        case Wr:
          return (_ = m._init), R(p, f, _(m._payload), b)
      }
      if (tl(m)) return g(p, f, m, b)
      if (Ui(m)) return k(p, f, m, b)
      Ta(p, m)
    }
    return (typeof m == 'string' && m !== '') || typeof m == 'number'
      ? ((m = '' + m),
        f !== null && f.tag === 6
          ? (r(p, f.sibling), (f = i(f, m)), (f.return = p), (p = f))
          : (r(p, f), (f = Ls(m, p.mode, b)), (f.return = p), (p = f)),
        a(p))
      : r(p, f)
  }
  return R
}
var ki = E0(!0),
  C0 = E0(!1),
  co = vn(null),
  fo = null,
  si = null,
  mc = null
function vc() {
  mc = si = fo = null
}
function gc(e) {
  var t = co.current
  De(co), (e._currentValue = t)
}
function _u(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
        : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
      e === r)
    )
      break
    e = e.return
  }
}
function vi(e, t) {
  ;(fo = e),
    (mc = si = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (Nt = !0), (e.firstContext = null))
}
function Qt(e) {
  var t = e._currentValue
  if (mc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), si === null)) {
      if (fo === null) throw Error(H(308))
      ;(si = e), (fo.dependencies = { lanes: 0, firstContext: e })
    } else si = si.next = e
  return t
}
var En = null
function yc(e) {
  En === null ? (En = [e]) : En.push(e)
}
function T0(e, t, r, n) {
  var i = t.interleaved
  return i === null ? ((r.next = r), yc(t)) : ((r.next = i.next), (i.next = r)), (t.interleaved = r), Ar(e, n)
}
function Ar(e, t) {
  e.lanes |= t
  var r = e.alternate
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    (e.childLanes |= t), (r = e.alternate), r !== null && (r.childLanes |= t), (r = e), (e = e.return)
  return r.tag === 3 ? r.stateNode : null
}
var Zr = !1
function xc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null
  }
}
function N0(e, t) {
  ;(e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
      })
}
function zr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null
  }
}
function ln(e, t, r) {
  var n = e.updateQueue
  if (n === null) return null
  if (((n = n.shared), Se & 2)) {
    var i = n.pending
    return i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (n.pending = t), Ar(e, r)
  }
  return (i = n.interleaved), i === null ? ((t.next = t), yc(n)) : ((t.next = i.next), (i.next = t)), (n.interleaved = t), Ar(e, r)
}
function Ia(e, t, r) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))) {
    var n = t.lanes
    ;(n &= e.pendingLanes), (r |= n), (t.lanes = r), ic(e, r)
  }
}
function Yd(e, t) {
  var r = e.updateQueue,
    n = e.alternate
  if (n !== null && ((n = n.updateQueue), r === n)) {
    var i = null,
      l = null
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var a = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null
        }
        l === null ? (i = l = a) : (l = l.next = a), (r = r.next)
      } while (r !== null)
      l === null ? (i = l = t) : (l = l.next = t)
    } else i = l = t
    ;(r = {
      baseState: n.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: l,
      shared: n.shared,
      effects: n.effects
    }),
      (e.updateQueue = r)
    return
  }
  ;(e = r.lastBaseUpdate), e === null ? (r.firstBaseUpdate = t) : (e.next = t), (r.lastBaseUpdate = t)
}
function ho(e, t, r, n) {
  var i = e.updateQueue
  Zr = !1
  var l = i.firstBaseUpdate,
    a = i.lastBaseUpdate,
    o = i.shared.pending
  if (o !== null) {
    i.shared.pending = null
    var s = o,
      u = s.next
    ;(s.next = null), a === null ? (l = u) : (a.next = u), (a = s)
    var c = e.alternate
    c !== null &&
      ((c = c.updateQueue),
      (o = c.lastBaseUpdate),
      o !== a && (o === null ? (c.firstBaseUpdate = u) : (o.next = u), (c.lastBaseUpdate = s)))
  }
  if (l !== null) {
    var d = i.baseState
    ;(a = 0), (c = u = s = null), (o = l)
    do {
      var h = o.lane,
        v = o.eventTime
      if ((n & h) === h) {
        c !== null &&
          (c = c.next =
            {
              eventTime: v,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null
            })
        e: {
          var g = e,
            k = o
          switch (((h = t), (v = r), k.tag)) {
            case 1:
              if (((g = k.payload), typeof g == 'function')) {
                d = g.call(v, d, h)
                break e
              }
              d = g
              break e
            case 3:
              g.flags = (g.flags & -65537) | 128
            case 0:
              if (((g = k.payload), (h = typeof g == 'function' ? g.call(v, d, h) : g), h == null)) break e
              d = $e({}, d, h)
              break e
            case 2:
              Zr = !0
          }
        }
        o.callback !== null && o.lane !== 0 && ((e.flags |= 64), (h = i.effects), h === null ? (i.effects = [o]) : h.push(o))
      } else
        (v = {
          eventTime: v,
          lane: h,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null
        }),
          c === null ? ((u = c = v), (s = d)) : (c = c.next = v),
          (a |= h)
      if (((o = o.next), o === null)) {
        if (((o = i.shared.pending), o === null)) break
        ;(h = o), (o = h.next), (h.next = null), (i.lastBaseUpdate = h), (i.shared.pending = null)
      }
    } while (!0)
    if (
      (c === null && (s = d), (i.baseState = s), (i.firstBaseUpdate = u), (i.lastBaseUpdate = c), (t = i.shared.interleaved), t !== null)
    ) {
      i = t
      do (a |= i.lane), (i = i.next)
      while (i !== t)
    } else l === null && (i.shared.lanes = 0)
    ;(Ln |= a), (e.lanes = a), (e.memoizedState = d)
  }
}
function Xd(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        i = n.callback
      if (i !== null) {
        if (((n.callback = null), (n = r), typeof i != 'function')) throw Error(H(191, i))
        i.call(n)
      }
    }
}
var ea = {},
  wr = vn(ea),
  Nl = vn(ea),
  jl = vn(ea)
function Cn(e) {
  if (e === ea) throw Error(H(174))
  return e
}
function wc(e, t) {
  switch ((ze(jl, t), ze(Nl, e), ze(wr, ea), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : tu(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = tu(t, e))
  }
  De(wr), ze(wr, t)
}
function Si() {
  De(wr), De(Nl), De(jl)
}
function j0(e) {
  Cn(jl.current)
  var t = Cn(wr.current),
    r = tu(t, e.type)
  t !== r && (ze(Nl, e), ze(wr, r))
}
function _c(e) {
  Nl.current === e && (De(wr), De(Nl))
}
var Ue = vn(0)
function po(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState
      if (r !== null && ((r = r.dehydrated), r === null || r.data === '$?' || r.data === '$!')) return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      ;(t.child.return = t), (t = t.child)
      continue
    }
    if (t === e) break
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null
      t = t.return
    }
    ;(t.sibling.return = t.return), (t = t.sibling)
  }
  return null
}
var js = []
function kc() {
  for (var e = 0; e < js.length; e++) js[e]._workInProgressVersionPrimary = null
  js.length = 0
}
var Ua = Ir.ReactCurrentDispatcher,
  Ms = Ir.ReactCurrentBatchConfig,
  On = 0,
  Be = null,
  rt = null,
  it = null,
  mo = !1,
  fl = !1,
  Ml = 0,
  Im = 0
function ht() {
  throw Error(H(321))
}
function Sc(e, t) {
  if (t === null) return !1
  for (var r = 0; r < t.length && r < e.length; r++) if (!sr(e[r], t[r])) return !1
  return !0
}
function bc(e, t, r, n, i, l) {
  if (
    ((On = l),
    (Be = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ua.current = e === null || e.memoizedState === null ? Hm : Wm),
    (e = r(n, i)),
    fl)
  ) {
    l = 0
    do {
      if (((fl = !1), (Ml = 0), 25 <= l)) throw Error(H(301))
      ;(l += 1), (it = rt = null), (t.updateQueue = null), (Ua.current = Zm), (e = r(n, i))
    } while (fl)
  }
  if (((Ua.current = vo), (t = rt !== null && rt.next !== null), (On = 0), (it = rt = Be = null), (mo = !1), t)) throw Error(H(300))
  return e
}
function Ec() {
  var e = Ml !== 0
  return (Ml = 0), e
}
function pr() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  }
  return it === null ? (Be.memoizedState = it = e) : (it = it.next = e), it
}
function Gt() {
  if (rt === null) {
    var e = Be.alternate
    e = e !== null ? e.memoizedState : null
  } else e = rt.next
  var t = it === null ? Be.memoizedState : it.next
  if (t !== null) (it = t), (rt = e)
  else {
    if (e === null) throw Error(H(310))
    ;(rt = e),
      (e = {
        memoizedState: rt.memoizedState,
        baseState: rt.baseState,
        baseQueue: rt.baseQueue,
        queue: rt.queue,
        next: null
      }),
      it === null ? (Be.memoizedState = it = e) : (it = it.next = e)
  }
  return it
}
function Pl(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function Ps(e) {
  var t = Gt(),
    r = t.queue
  if (r === null) throw Error(H(311))
  r.lastRenderedReducer = e
  var n = rt,
    i = n.baseQueue,
    l = r.pending
  if (l !== null) {
    if (i !== null) {
      var a = i.next
      ;(i.next = l.next), (l.next = a)
    }
    ;(n.baseQueue = i = l), (r.pending = null)
  }
  if (i !== null) {
    ;(l = i.next), (n = n.baseState)
    var o = (a = null),
      s = null,
      u = l
    do {
      var c = u.lane
      if ((On & c) === c)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null
            }),
          (n = u.hasEagerState ? u.eagerState : e(n, u.action))
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        }
        s === null ? ((o = s = d), (a = n)) : (s = s.next = d), (Be.lanes |= c), (Ln |= c)
      }
      u = u.next
    } while (u !== null && u !== l)
    s === null ? (a = n) : (s.next = o),
      sr(n, t.memoizedState) || (Nt = !0),
      (t.memoizedState = n),
      (t.baseState = a),
      (t.baseQueue = s),
      (r.lastRenderedState = n)
  }
  if (((e = r.interleaved), e !== null)) {
    i = e
    do (l = i.lane), (Be.lanes |= l), (Ln |= l), (i = i.next)
    while (i !== e)
  } else i === null && (r.lanes = 0)
  return [t.memoizedState, r.dispatch]
}
function Rs(e) {
  var t = Gt(),
    r = t.queue
  if (r === null) throw Error(H(311))
  r.lastRenderedReducer = e
  var n = r.dispatch,
    i = r.pending,
    l = t.memoizedState
  if (i !== null) {
    r.pending = null
    var a = (i = i.next)
    do (l = e(l, a.action)), (a = a.next)
    while (a !== i)
    sr(l, t.memoizedState) || (Nt = !0), (t.memoizedState = l), t.baseQueue === null && (t.baseState = l), (r.lastRenderedState = l)
  }
  return [l, n]
}
function M0() {}
function P0(e, t) {
  var r = Be,
    n = Gt(),
    i = t(),
    l = !sr(n.memoizedState, i)
  if (
    (l && ((n.memoizedState = i), (Nt = !0)),
    (n = n.queue),
    Cc(O0.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || l || (it !== null && it.memoizedState.tag & 1))
  ) {
    if (((r.flags |= 2048), Rl(9, z0.bind(null, r, n, i, t), void 0, null), lt === null)) throw Error(H(349))
    On & 30 || R0(r, t, i)
  }
  return i
}
function R0(e, t, r) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = Be.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (Be.updateQueue = t), (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e))
}
function z0(e, t, r, n) {
  ;(t.value = r), (t.getSnapshot = n), L0(t) && D0(e)
}
function O0(e, t, r) {
  return r(function () {
    L0(t) && D0(e)
  })
}
function L0(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var r = t()
    return !sr(e, r)
  } catch {
    return !0
  }
}
function D0(e) {
  var t = Ar(e, 1)
  t !== null && ar(t, e, 1, -1)
}
function Jd(e) {
  var t = pr()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Pl,
      lastRenderedState: e
    }),
    (t.queue = e),
    (e = e.dispatch = $m.bind(null, Be, e)),
    [t.memoizedState, e]
  )
}
function Rl(e, t, r, n) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
    (t = Be.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (Be.updateQueue = t), (t.lastEffect = e.next = e))
      : ((r = t.lastEffect), r === null ? (t.lastEffect = e.next = e) : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
    e
  )
}
function A0() {
  return Gt().memoizedState
}
function Ba(e, t, r, n) {
  var i = pr()
  ;(Be.flags |= e), (i.memoizedState = Rl(1 | t, r, void 0, n === void 0 ? null : n))
}
function Wo(e, t, r, n) {
  var i = Gt()
  n = n === void 0 ? null : n
  var l = void 0
  if (rt !== null) {
    var a = rt.memoizedState
    if (((l = a.destroy), n !== null && Sc(n, a.deps))) {
      i.memoizedState = Rl(t, r, l, n)
      return
    }
  }
  ;(Be.flags |= e), (i.memoizedState = Rl(1 | t, r, l, n))
}
function e1(e, t) {
  return Ba(8390656, 8, e, t)
}
function Cc(e, t) {
  return Wo(2048, 8, e, t)
}
function V0(e, t) {
  return Wo(4, 2, e, t)
}
function F0(e, t) {
  return Wo(4, 4, e, t)
}
function I0(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null)
      }
    )
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null
      }
    )
}
function U0(e, t, r) {
  return (r = r != null ? r.concat([e]) : null), Wo(4, 4, I0.bind(null, t, e), r)
}
function Tc() {}
function B0(e, t) {
  var r = Gt()
  t = t === void 0 ? null : t
  var n = r.memoizedState
  return n !== null && t !== null && Sc(t, n[1]) ? n[0] : ((r.memoizedState = [e, t]), e)
}
function $0(e, t) {
  var r = Gt()
  t = t === void 0 ? null : t
  var n = r.memoizedState
  return n !== null && t !== null && Sc(t, n[1]) ? n[0] : ((e = e()), (r.memoizedState = [e, t]), e)
}
function H0(e, t, r) {
  return On & 21
    ? (sr(r, t) || ((r = Qf()), (Be.lanes |= r), (Ln |= r), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (Nt = !0)), (e.memoizedState = r))
}
function Um(e, t) {
  var r = Te
  ;(Te = r !== 0 && 4 > r ? r : 4), e(!0)
  var n = Ms.transition
  Ms.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(Te = r), (Ms.transition = n)
  }
}
function W0() {
  return Gt().memoizedState
}
function Bm(e, t, r) {
  var n = on(e)
  if (
    ((r = {
      lane: n,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }),
    Z0(e))
  )
    q0(t, r)
  else if (((r = T0(e, t, r, n)), r !== null)) {
    var i = _t()
    ar(r, e, n, i), K0(r, t, n)
  }
}
function $m(e, t, r) {
  var n = on(e),
    i = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }
  if (Z0(e)) q0(t, i)
  else {
    var l = e.alternate
    if (e.lanes === 0 && (l === null || l.lanes === 0) && ((l = t.lastRenderedReducer), l !== null))
      try {
        var a = t.lastRenderedState,
          o = l(a, r)
        if (((i.hasEagerState = !0), (i.eagerState = o), sr(o, a))) {
          var s = t.interleaved
          s === null ? ((i.next = i), yc(t)) : ((i.next = s.next), (s.next = i)), (t.interleaved = i)
          return
        }
      } catch {
      } finally {
      }
    ;(r = T0(e, t, i, n)), r !== null && ((i = _t()), ar(r, e, n, i), K0(r, t, n))
  }
}
function Z0(e) {
  var t = e.alternate
  return e === Be || (t !== null && t === Be)
}
function q0(e, t) {
  fl = mo = !0
  var r = e.pending
  r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)), (e.pending = t)
}
function K0(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes
    ;(n &= e.pendingLanes), (r |= n), (t.lanes = r), ic(e, r)
  }
}
var vo = {
    readContext: Qt,
    useCallback: ht,
    useContext: ht,
    useEffect: ht,
    useImperativeHandle: ht,
    useInsertionEffect: ht,
    useLayoutEffect: ht,
    useMemo: ht,
    useReducer: ht,
    useRef: ht,
    useState: ht,
    useDebugValue: ht,
    useDeferredValue: ht,
    useTransition: ht,
    useMutableSource: ht,
    useSyncExternalStore: ht,
    useId: ht,
    unstable_isNewReconciler: !1
  },
  Hm = {
    readContext: Qt,
    useCallback: function (e, t) {
      return (pr().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: Qt,
    useEffect: e1,
    useImperativeHandle: function (e, t, r) {
      return (r = r != null ? r.concat([e]) : null), Ba(4194308, 4, I0.bind(null, t, e), r)
    },
    useLayoutEffect: function (e, t) {
      return Ba(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return Ba(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var r = pr()
      return (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
    },
    useReducer: function (e, t, r) {
      var n = pr()
      return (
        (t = r !== void 0 ? r(t) : t),
        (n.memoizedState = n.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t
        }),
        (n.queue = e),
        (e = e.dispatch = Bm.bind(null, Be, e)),
        [n.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = pr()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: Jd,
    useDebugValue: Tc,
    useDeferredValue: function (e) {
      return (pr().memoizedState = e)
    },
    useTransition: function () {
      var e = Jd(!1),
        t = e[0]
      return (e = Um.bind(null, e[1])), (pr().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var n = Be,
        i = pr()
      if (Ve) {
        if (r === void 0) throw Error(H(407))
        r = r()
      } else {
        if (((r = t()), lt === null)) throw Error(H(349))
        On & 30 || R0(n, t, r)
      }
      i.memoizedState = r
      var l = { value: r, getSnapshot: t }
      return (i.queue = l), e1(O0.bind(null, n, l, e), [e]), (n.flags |= 2048), Rl(9, z0.bind(null, n, l, r, t), void 0, null), r
    },
    useId: function () {
      var e = pr(),
        t = lt.identifierPrefix
      if (Ve) {
        var r = Rr,
          n = Pr
        ;(r = (n & ~(1 << (32 - lr(n) - 1))).toString(32) + r),
          (t = ':' + t + 'R' + r),
          (r = Ml++),
          0 < r && (t += 'H' + r.toString(32)),
          (t += ':')
      } else (r = Im++), (t = ':' + t + 'r' + r.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1
  },
  Wm = {
    readContext: Qt,
    useCallback: B0,
    useContext: Qt,
    useEffect: Cc,
    useImperativeHandle: U0,
    useInsertionEffect: V0,
    useLayoutEffect: F0,
    useMemo: $0,
    useReducer: Ps,
    useRef: A0,
    useState: function () {
      return Ps(Pl)
    },
    useDebugValue: Tc,
    useDeferredValue: function (e) {
      var t = Gt()
      return H0(t, rt.memoizedState, e)
    },
    useTransition: function () {
      var e = Ps(Pl)[0],
        t = Gt().memoizedState
      return [e, t]
    },
    useMutableSource: M0,
    useSyncExternalStore: P0,
    useId: W0,
    unstable_isNewReconciler: !1
  },
  Zm = {
    readContext: Qt,
    useCallback: B0,
    useContext: Qt,
    useEffect: Cc,
    useImperativeHandle: U0,
    useInsertionEffect: V0,
    useLayoutEffect: F0,
    useMemo: $0,
    useReducer: Rs,
    useRef: A0,
    useState: function () {
      return Rs(Pl)
    },
    useDebugValue: Tc,
    useDeferredValue: function (e) {
      var t = Gt()
      return rt === null ? (t.memoizedState = e) : H0(t, rt.memoizedState, e)
    },
    useTransition: function () {
      var e = Rs(Pl)[0],
        t = Gt().memoizedState
      return [e, t]
    },
    useMutableSource: M0,
    useSyncExternalStore: P0,
    useId: W0,
    unstable_isNewReconciler: !1
  }
function Jt(e, t) {
  if (e && e.defaultProps) {
    ;(t = $e({}, t)), (e = e.defaultProps)
    for (var r in e) t[r] === void 0 && (t[r] = e[r])
    return t
  }
  return t
}
function ku(e, t, r, n) {
  ;(t = e.memoizedState),
    (r = r(n, t)),
    (r = r == null ? t : $e({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r)
}
var Zo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Un(e) === e : !1
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals
    var n = _t(),
      i = on(e),
      l = zr(n, i)
    ;(l.payload = t), r != null && (l.callback = r), (t = ln(e, l, i)), t !== null && (ar(t, e, i, n), Ia(t, e, i))
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals
    var n = _t(),
      i = on(e),
      l = zr(n, i)
    ;(l.tag = 1), (l.payload = t), r != null && (l.callback = r), (t = ln(e, l, i)), t !== null && (ar(t, e, i, n), Ia(t, e, i))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var r = _t(),
      n = on(e),
      i = zr(r, n)
    ;(i.tag = 2), t != null && (i.callback = t), (t = ln(e, i, n)), t !== null && (ar(t, e, n, r), Ia(t, e, n))
  }
}
function t1(e, t, r, n, i, l, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(n, l, a)
      : t.prototype && t.prototype.isPureReactComponent
        ? !bl(r, n) || !bl(i, l)
        : !0
  )
}
function Q0(e, t, r) {
  var n = !1,
    i = cn,
    l = t.contextType
  return (
    typeof l == 'object' && l !== null
      ? (l = Qt(l))
      : ((i = Mt(t) ? Rn : vt.current), (n = t.contextTypes), (l = (n = n != null) ? wi(e, i) : cn)),
    (t = new t(r, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Zo),
    (e.stateNode = t),
    (t._reactInternals = e),
    n && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = i), (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  )
}
function r1(e, t, r, n) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && Zo.enqueueReplaceState(t, t.state, null)
}
function Su(e, t, r, n) {
  var i = e.stateNode
  ;(i.props = r), (i.state = e.memoizedState), (i.refs = {}), xc(e)
  var l = t.contextType
  typeof l == 'object' && l !== null ? (i.context = Qt(l)) : ((l = Mt(t) ? Rn : vt.current), (i.context = wi(e, l))),
    (i.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == 'function' && (ku(e, t, l, r), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' && typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount(),
      t !== i.state && Zo.enqueueReplaceState(i, i.state, null),
      ho(e, r, i, n),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308)
}
function bi(e, t) {
  try {
    var r = '',
      n = t
    do (r += wp(n)), (n = n.return)
    while (n)
    var i = r
  } catch (l) {
    i =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack
  }
  return { value: e, source: t, stack: i, digest: null }
}
function zs(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null }
}
function bu(e, t) {
  try {
    console.error(t.value)
  } catch (r) {
    setTimeout(function () {
      throw r
    })
  }
}
var qm = typeof WeakMap == 'function' ? WeakMap : Map
function G0(e, t, r) {
  ;(r = zr(-1, r)), (r.tag = 3), (r.payload = { element: null })
  var n = t.value
  return (
    (r.callback = function () {
      yo || ((yo = !0), (Ou = n)), bu(e, t)
    }),
    r
  )
}
function Y0(e, t, r) {
  ;(r = zr(-1, r)), (r.tag = 3)
  var n = e.type.getDerivedStateFromError
  if (typeof n == 'function') {
    var i = t.value
    ;(r.payload = function () {
      return n(i)
    }),
      (r.callback = function () {
        bu(e, t)
      })
  }
  var l = e.stateNode
  return (
    l !== null &&
      typeof l.componentDidCatch == 'function' &&
      (r.callback = function () {
        bu(e, t), typeof n != 'function' && (an === null ? (an = new Set([this])) : an.add(this))
        var a = t.stack
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : ''
        })
      }),
    r
  )
}
function n1(e, t, r) {
  var n = e.pingCache
  if (n === null) {
    n = e.pingCache = new qm()
    var i = new Set()
    n.set(t, i)
  } else (i = n.get(t)), i === void 0 && ((i = new Set()), n.set(t, i))
  i.has(r) || (i.add(r), (e = o3.bind(null, e, t, r)), t.then(e, e))
}
function i1(e) {
  do {
    var t
    if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e
    e = e.return
  } while (e !== null)
  return null
}
function l1(e, t, r, n, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 && (r.alternate === null ? (r.tag = 17) : ((t = zr(-1, 1)), (t.tag = 2), ln(r, t, 1))),
          (r.lanes |= 1)),
      e)
}
var Km = Ir.ReactCurrentOwner,
  Nt = !1
function xt(e, t, r, n) {
  t.child = e === null ? C0(t, null, r, n) : ki(t, e.child, r, n)
}
function a1(e, t, r, n, i) {
  r = r.render
  var l = t.ref
  return (
    vi(t, i),
    (n = bc(e, t, r, n, l, i)),
    (r = Ec()),
    e !== null && !Nt
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Vr(e, t, i))
      : (Ve && r && fc(t), (t.flags |= 1), xt(e, t, n, i), t.child)
  )
}
function o1(e, t, r, n, i) {
  if (e === null) {
    var l = r.type
    return typeof l == 'function' && !Lc(l) && l.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), X0(e, t, l, n, i))
      : ((e = Za(r.type, null, n, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e))
  }
  if (((l = e.child), !(e.lanes & i))) {
    var a = l.memoizedProps
    if (((r = r.compare), (r = r !== null ? r : bl), r(a, n) && e.ref === t.ref)) return Vr(e, t, i)
  }
  return (t.flags |= 1), (e = sn(l, n)), (e.ref = t.ref), (e.return = t), (t.child = e)
}
function X0(e, t, r, n, i) {
  if (e !== null) {
    var l = e.memoizedProps
    if (bl(l, n) && e.ref === t.ref)
      if (((Nt = !1), (t.pendingProps = n = l), (e.lanes & i) !== 0)) e.flags & 131072 && (Nt = !0)
      else return (t.lanes = e.lanes), Vr(e, t, i)
  }
  return Eu(e, t, r, n, i)
}
function J0(e, t, r) {
  var n = t.pendingProps,
    i = n.children,
    l = e !== null ? e.memoizedState : null
  if (n.mode === 'hidden')
    if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), ze(ci, Ot), (Ot |= r)
    else {
      if (!(r & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | r : r),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null
          }),
          (t.updateQueue = null),
          ze(ci, Ot),
          (Ot |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), (n = l !== null ? l.baseLanes : r), ze(ci, Ot), (Ot |= n)
    }
  else l !== null ? ((n = l.baseLanes | r), (t.memoizedState = null)) : (n = r), ze(ci, Ot), (Ot |= n)
  return xt(e, t, i, r), t.child
}
function e2(e, t) {
  var r = t.ref
  ;((e === null && r !== null) || (e !== null && e.ref !== r)) && ((t.flags |= 512), (t.flags |= 2097152))
}
function Eu(e, t, r, n, i) {
  var l = Mt(r) ? Rn : vt.current
  return (
    (l = wi(t, l)),
    vi(t, i),
    (r = bc(e, t, r, n, l, i)),
    (n = Ec()),
    e !== null && !Nt
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Vr(e, t, i))
      : (Ve && n && fc(t), (t.flags |= 1), xt(e, t, r, i), t.child)
  )
}
function s1(e, t, r, n, i) {
  if (Mt(r)) {
    var l = !0
    oo(t)
  } else l = !1
  if ((vi(t, i), t.stateNode === null)) $a(e, t), Q0(t, r, n), Su(t, r, n, i), (n = !0)
  else if (e === null) {
    var a = t.stateNode,
      o = t.memoizedProps
    a.props = o
    var s = a.context,
      u = r.contextType
    typeof u == 'object' && u !== null ? (u = Qt(u)) : ((u = Mt(r) ? Rn : vt.current), (u = wi(t, u)))
    var c = r.getDerivedStateFromProps,
      d = typeof c == 'function' || typeof a.getSnapshotBeforeUpdate == 'function'
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' && typeof a.componentWillReceiveProps != 'function') ||
      ((o !== n || s !== u) && r1(t, a, n, u)),
      (Zr = !1)
    var h = t.memoizedState
    ;(a.state = h),
      ho(t, n, a, i),
      (s = t.memoizedState),
      o !== n || h !== s || jt.current || Zr
        ? (typeof c == 'function' && (ku(t, r, c, n), (s = t.memoizedState)),
          (o = Zr || t1(t, r, o, n, h, s, u))
            ? (d ||
                (typeof a.UNSAFE_componentWillMount != 'function' && typeof a.componentWillMount != 'function') ||
                (typeof a.componentWillMount == 'function' && a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == 'function' && a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308), (t.memoizedProps = n), (t.memoizedState = s)),
          (a.props = n),
          (a.state = s),
          (a.context = u),
          (n = o))
        : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308), (n = !1))
  } else {
    ;(a = t.stateNode),
      N0(e, t),
      (o = t.memoizedProps),
      (u = t.type === t.elementType ? o : Jt(t.type, o)),
      (a.props = u),
      (d = t.pendingProps),
      (h = a.context),
      (s = r.contextType),
      typeof s == 'object' && s !== null ? (s = Qt(s)) : ((s = Mt(r) ? Rn : vt.current), (s = wi(t, s)))
    var v = r.getDerivedStateFromProps
    ;(c = typeof v == 'function' || typeof a.getSnapshotBeforeUpdate == 'function') ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' && typeof a.componentWillReceiveProps != 'function') ||
      ((o !== d || h !== s) && r1(t, a, n, s)),
      (Zr = !1),
      (h = t.memoizedState),
      (a.state = h),
      ho(t, n, a, i)
    var g = t.memoizedState
    o !== d || h !== g || jt.current || Zr
      ? (typeof v == 'function' && (ku(t, r, v, n), (g = t.memoizedState)),
        (u = Zr || t1(t, r, u, n, h, g, s) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != 'function' && typeof a.componentWillUpdate != 'function') ||
              (typeof a.componentWillUpdate == 'function' && a.componentWillUpdate(n, g, s),
              typeof a.UNSAFE_componentWillUpdate == 'function' && a.UNSAFE_componentWillUpdate(n, g, s)),
            typeof a.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != 'function' || (o === e.memoizedProps && h === e.memoizedState) || (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != 'function' || (o === e.memoizedProps && h === e.memoizedState) || (t.flags |= 1024),
            (t.memoizedProps = n),
            (t.memoizedState = g)),
        (a.props = n),
        (a.state = g),
        (a.context = s),
        (n = u))
      : (typeof a.componentDidUpdate != 'function' || (o === e.memoizedProps && h === e.memoizedState) || (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != 'function' || (o === e.memoizedProps && h === e.memoizedState) || (t.flags |= 1024),
        (n = !1))
  }
  return Cu(e, t, r, n, l, i)
}
function Cu(e, t, r, n, i, l) {
  e2(e, t)
  var a = (t.flags & 128) !== 0
  if (!n && !a) return i && qd(t, r, !1), Vr(e, t, l)
  ;(n = t.stateNode), (Km.current = t)
  var o = a && typeof r.getDerivedStateFromError != 'function' ? null : n.render()
  return (
    (t.flags |= 1),
    e !== null && a ? ((t.child = ki(t, e.child, null, l)), (t.child = ki(t, null, o, l))) : xt(e, t, o, l),
    (t.memoizedState = n.state),
    i && qd(t, r, !0),
    t.child
  )
}
function t2(e) {
  var t = e.stateNode
  t.pendingContext ? Zd(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Zd(e, t.context, !1), wc(e, t.containerInfo)
}
function u1(e, t, r, n, i) {
  return _i(), pc(i), (t.flags |= 256), xt(e, t, r, n), t.child
}
var Tu = { dehydrated: null, treeContext: null, retryLane: 0 }
function Nu(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function r2(e, t, r) {
  var n = t.pendingProps,
    i = Ue.current,
    l = !1,
    a = (t.flags & 128) !== 0,
    o
  if (
    ((o = a) || (o = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    o ? ((l = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (i |= 1),
    ze(Ue, i & 1),
    e === null)
  )
    return (
      wu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
        : ((a = n.children),
          (e = n.fallback),
          l
            ? ((n = t.mode),
              (l = t.child),
              (a = { mode: 'hidden', children: a }),
              !(n & 1) && l !== null ? ((l.childLanes = 0), (l.pendingProps = a)) : (l = Qo(a, n, 0, null)),
              (e = Mn(e, n, r, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = Nu(r)),
              (t.memoizedState = Tu),
              e)
            : Nc(t, a))
    )
  if (((i = e.memoizedState), i !== null && ((o = i.dehydrated), o !== null))) return Qm(e, t, a, n, o, i, r)
  if (l) {
    ;(l = n.fallback), (a = t.mode), (i = e.child), (o = i.sibling)
    var s = { mode: 'hidden', children: n.children }
    return (
      !(a & 1) && t.child !== i
        ? ((n = t.child), (n.childLanes = 0), (n.pendingProps = s), (t.deletions = null))
        : ((n = sn(i, s)), (n.subtreeFlags = i.subtreeFlags & 14680064)),
      o !== null ? (l = sn(o, l)) : ((l = Mn(l, a, r, null)), (l.flags |= 2)),
      (l.return = t),
      (n.return = t),
      (n.sibling = l),
      (t.child = n),
      (n = l),
      (l = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Nu(r)
          : {
              baseLanes: a.baseLanes | r,
              cachePool: null,
              transitions: a.transitions
            }),
      (l.memoizedState = a),
      (l.childLanes = e.childLanes & ~r),
      (t.memoizedState = Tu),
      n
    )
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (n = sn(l, { mode: 'visible', children: n.children })),
    !(t.mode & 1) && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null && ((r = t.deletions), r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
    (t.child = n),
    (t.memoizedState = null),
    n
  )
}
function Nc(e, t) {
  return (t = Qo({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t)
}
function Na(e, t, r, n) {
  return n !== null && pc(n), ki(t, e.child, null, r), (e = Nc(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e
}
function Qm(e, t, r, n, i, l, a) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (n = zs(Error(H(422)))), Na(e, t, a, n))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((l = n.fallback),
          (i = t.mode),
          (n = Qo({ mode: 'visible', children: n.children }, i, 0, null)),
          (l = Mn(l, i, a, null)),
          (l.flags |= 2),
          (n.return = t),
          (l.return = t),
          (n.sibling = l),
          (t.child = n),
          t.mode & 1 && ki(t, e.child, null, a),
          (t.child.memoizedState = Nu(a)),
          (t.memoizedState = Tu),
          l)
  if (!(t.mode & 1)) return Na(e, t, a, null)
  if (i.data === '$!') {
    if (((n = i.nextSibling && i.nextSibling.dataset), n)) var o = n.dgst
    return (n = o), (l = Error(H(419))), (n = zs(l, n, void 0)), Na(e, t, a, n)
  }
  if (((o = (a & e.childLanes) !== 0), Nt || o)) {
    if (((n = lt), n !== null)) {
      switch (a & -a) {
        case 4:
          i = 2
          break
        case 16:
          i = 8
          break
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32
          break
        case 536870912:
          i = 268435456
          break
        default:
          i = 0
      }
      ;(i = i & (n.suspendedLanes | a) ? 0 : i), i !== 0 && i !== l.retryLane && ((l.retryLane = i), Ar(e, i), ar(n, e, i, -1))
    }
    return Oc(), (n = zs(Error(H(421)))), Na(e, t, a, n)
  }
  return i.data === '$?'
    ? ((t.flags |= 128), (t.child = e.child), (t = s3.bind(null, e)), (i._reactRetry = t), null)
    : ((e = l.treeContext),
      (Dt = nn(i.nextSibling)),
      (Vt = t),
      (Ve = !0),
      (rr = null),
      e !== null && ((Ht[Wt++] = Pr), (Ht[Wt++] = Rr), (Ht[Wt++] = zn), (Pr = e.id), (Rr = e.overflow), (zn = t)),
      (t = Nc(t, n.children)),
      (t.flags |= 4096),
      t)
}
function c1(e, t, r) {
  e.lanes |= t
  var n = e.alternate
  n !== null && (n.lanes |= t), _u(e.return, t, r)
}
function Os(e, t, r, n, i) {
  var l = e.memoizedState
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: i
      })
    : ((l.isBackwards = t), (l.rendering = null), (l.renderingStartTime = 0), (l.last = n), (l.tail = r), (l.tailMode = i))
}
function n2(e, t, r) {
  var n = t.pendingProps,
    i = n.revealOrder,
    l = n.tail
  if ((xt(e, t, n.children, r), (n = Ue.current), n & 2)) (n = (n & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && c1(e, r, t)
        else if (e.tag === 19) c1(e, r, t)
        else if (e.child !== null) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === t) break e
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    n &= 1
  }
  if ((ze(Ue, n), !(t.mode & 1))) t.memoizedState = null
  else
    switch (i) {
      case 'forwards':
        for (r = t.child, i = null; r !== null; ) (e = r.alternate), e !== null && po(e) === null && (i = r), (r = r.sibling)
        ;(r = i), r === null ? ((i = t.child), (t.child = null)) : ((i = r.sibling), (r.sibling = null)), Os(t, !1, i, r, l)
        break
      case 'backwards':
        for (r = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && po(e) === null)) {
            t.child = i
            break
          }
          ;(e = i.sibling), (i.sibling = r), (r = i), (i = e)
        }
        Os(t, !0, r, null, l)
        break
      case 'together':
        Os(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function $a(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function Vr(e, t, r) {
  if ((e !== null && (t.dependencies = e.dependencies), (Ln |= t.lanes), !(r & t.childLanes))) return null
  if (e !== null && t.child !== e.child) throw Error(H(153))
  if (t.child !== null) {
    for (e = t.child, r = sn(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; )
      (e = e.sibling), (r = r.sibling = sn(e, e.pendingProps)), (r.return = t)
    r.sibling = null
  }
  return t.child
}
function Gm(e, t, r) {
  switch (t.tag) {
    case 3:
      t2(t), _i()
      break
    case 5:
      j0(t)
      break
    case 1:
      Mt(t.type) && oo(t)
      break
    case 4:
      wc(t, t.stateNode.containerInfo)
      break
    case 10:
      var n = t.type._context,
        i = t.memoizedProps.value
      ze(co, n._currentValue), (n._currentValue = i)
      break
    case 13:
      if (((n = t.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (ze(Ue, Ue.current & 1), (t.flags |= 128), null)
          : r & t.child.childLanes
            ? r2(e, t, r)
            : (ze(Ue, Ue.current & 1), (e = Vr(e, t, r)), e !== null ? e.sibling : null)
      ze(Ue, Ue.current & 1)
      break
    case 19:
      if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
        if (n) return n2(e, t, r)
        t.flags |= 128
      }
      if (((i = t.memoizedState), i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)), ze(Ue, Ue.current), n))
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), J0(e, t, r)
  }
  return Vr(e, t, r)
}
var i2, ju, l2, a2
i2 = function (e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode)
    else if (r.tag !== 4 && r.child !== null) {
      ;(r.child.return = r), (r = r.child)
      continue
    }
    if (r === t) break
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return
      r = r.return
    }
    ;(r.sibling.return = r.return), (r = r.sibling)
  }
}
ju = function () {}
l2 = function (e, t, r, n) {
  var i = e.memoizedProps
  if (i !== n) {
    ;(e = t.stateNode), Cn(wr.current)
    var l = null
    switch (r) {
      case 'input':
        ;(i = Ys(e, i)), (n = Ys(e, n)), (l = [])
        break
      case 'select':
        ;(i = $e({}, i, { value: void 0 })), (n = $e({}, n, { value: void 0 })), (l = [])
        break
      case 'textarea':
        ;(i = eu(e, i)), (n = eu(e, n)), (l = [])
        break
      default:
        typeof i.onClick != 'function' && typeof n.onClick == 'function' && (e.onclick = lo)
    }
    ru(r, n)
    var a
    r = null
    for (u in i)
      if (!n.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === 'style') {
          var o = i[u]
          for (a in o) o.hasOwnProperty(a) && (r || (r = {}), (r[a] = ''))
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (gl.hasOwnProperty(u) ? l || (l = []) : (l = l || []).push(u, null))
    for (u in n) {
      var s = n[u]
      if (((o = i != null ? i[u] : void 0), n.hasOwnProperty(u) && s !== o && (s != null || o != null)))
        if (u === 'style')
          if (o) {
            for (a in o) !o.hasOwnProperty(a) || (s && s.hasOwnProperty(a)) || (r || (r = {}), (r[a] = ''))
            for (a in s) s.hasOwnProperty(a) && o[a] !== s[a] && (r || (r = {}), (r[a] = s[a]))
          } else r || (l || (l = []), l.push(u, r)), (r = s)
        else
          u === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0), (o = o ? o.__html : void 0), s != null && o !== s && (l = l || []).push(u, s))
            : u === 'children'
              ? (typeof s != 'string' && typeof s != 'number') || (l = l || []).push(u, '' + s)
              : u !== 'suppressContentEditableWarning' &&
                u !== 'suppressHydrationWarning' &&
                (gl.hasOwnProperty(u)
                  ? (s != null && u === 'onScroll' && Le('scroll', e), l || o === s || (l = []))
                  : (l = l || []).push(u, s))
    }
    r && (l = l || []).push('style', r)
    var u = l
    ;(t.updateQueue = u) && (t.flags |= 4)
  }
}
a2 = function (e, t, r, n) {
  r !== n && (t.flags |= 4)
}
function qi(e, t) {
  if (!Ve)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail
        for (var r = null; t !== null; ) t.alternate !== null && (r = t), (t = t.sibling)
        r === null ? (e.tail = null) : (r.sibling = null)
        break
      case 'collapsed':
        r = e.tail
        for (var n = null; r !== null; ) r.alternate !== null && (n = r), (r = r.sibling)
        n === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (n.sibling = null)
    }
}
function pt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    r = 0,
    n = 0
  if (t)
    for (var i = e.child; i !== null; )
      (r |= i.lanes | i.childLanes), (n |= i.subtreeFlags & 14680064), (n |= i.flags & 14680064), (i.return = e), (i = i.sibling)
  else for (i = e.child; i !== null; ) (r |= i.lanes | i.childLanes), (n |= i.subtreeFlags), (n |= i.flags), (i.return = e), (i = i.sibling)
  return (e.subtreeFlags |= n), (e.childLanes = r), t
}
function Ym(e, t, r) {
  var n = t.pendingProps
  switch ((hc(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return pt(t), null
    case 1:
      return Mt(t.type) && ao(), pt(t), null
    case 3:
      return (
        (n = t.stateNode),
        Si(),
        De(jt),
        De(vt),
        kc(),
        n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ca(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), rr !== null && (Au(rr), (rr = null)))),
        ju(e, t),
        pt(t),
        null
      )
    case 5:
      _c(t)
      var i = Cn(jl.current)
      if (((r = t.type), e !== null && t.stateNode != null)) l2(e, t, r, n, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(H(166))
          return pt(t), null
        }
        if (((e = Cn(wr.current)), Ca(t))) {
          ;(n = t.stateNode), (r = t.type)
          var l = t.memoizedProps
          switch (((n[vr] = t), (n[Tl] = l), (e = (t.mode & 1) !== 0), r)) {
            case 'dialog':
              Le('cancel', n), Le('close', n)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              Le('load', n)
              break
            case 'video':
            case 'audio':
              for (i = 0; i < nl.length; i++) Le(nl[i], n)
              break
            case 'source':
              Le('error', n)
              break
            case 'img':
            case 'image':
            case 'link':
              Le('error', n), Le('load', n)
              break
            case 'details':
              Le('toggle', n)
              break
            case 'input':
              xd(n, l), Le('invalid', n)
              break
            case 'select':
              ;(n._wrapperState = { wasMultiple: !!l.multiple }), Le('invalid', n)
              break
            case 'textarea':
              _d(n, l), Le('invalid', n)
          }
          ru(r, l), (i = null)
          for (var a in l)
            if (l.hasOwnProperty(a)) {
              var o = l[a]
              a === 'children'
                ? typeof o == 'string'
                  ? n.textContent !== o && (l.suppressHydrationWarning !== !0 && Ea(n.textContent, o, e), (i = ['children', o]))
                  : typeof o == 'number' &&
                    n.textContent !== '' + o &&
                    (l.suppressHydrationWarning !== !0 && Ea(n.textContent, o, e), (i = ['children', '' + o]))
                : gl.hasOwnProperty(a) && o != null && a === 'onScroll' && Le('scroll', n)
            }
          switch (r) {
            case 'input':
              ga(n), wd(n, l, !0)
              break
            case 'textarea':
              ga(n), kd(n)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof l.onClick == 'function' && (n.onclick = lo)
          }
          ;(n = i), (t.updateQueue = n), n !== null && (t.flags |= 4)
        } else {
          ;(a = i.nodeType === 9 ? i : i.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Of(r)),
            e === 'http://www.w3.org/1999/xhtml'
              ? r === 'script'
                ? ((e = a.createElement('div')), (e.innerHTML = '<script></script>'), (e = e.removeChild(e.firstChild)))
                : typeof n.is == 'string'
                  ? (e = a.createElement(r, { is: n.is }))
                  : ((e = a.createElement(r)), r === 'select' && ((a = e), n.multiple ? (a.multiple = !0) : n.size && (a.size = n.size)))
              : (e = a.createElementNS(e, r)),
            (e[vr] = t),
            (e[Tl] = n),
            i2(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((a = nu(r, n)), r)) {
              case 'dialog':
                Le('cancel', e), Le('close', e), (i = n)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                Le('load', e), (i = n)
                break
              case 'video':
              case 'audio':
                for (i = 0; i < nl.length; i++) Le(nl[i], e)
                i = n
                break
              case 'source':
                Le('error', e), (i = n)
                break
              case 'img':
              case 'image':
              case 'link':
                Le('error', e), Le('load', e), (i = n)
                break
              case 'details':
                Le('toggle', e), (i = n)
                break
              case 'input':
                xd(e, n), (i = Ys(e, n)), Le('invalid', e)
                break
              case 'option':
                i = n
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!n.multiple }), (i = $e({}, n, { value: void 0 })), Le('invalid', e)
                break
              case 'textarea':
                _d(e, n), (i = eu(e, n)), Le('invalid', e)
                break
              default:
                i = n
            }
            ru(r, i), (o = i)
            for (l in o)
              if (o.hasOwnProperty(l)) {
                var s = o[l]
                l === 'style'
                  ? Af(e, s)
                  : l === 'dangerouslySetInnerHTML'
                    ? ((s = s ? s.__html : void 0), s != null && Lf(e, s))
                    : l === 'children'
                      ? typeof s == 'string'
                        ? (r !== 'textarea' || s !== '') && yl(e, s)
                        : typeof s == 'number' && yl(e, '' + s)
                      : l !== 'suppressContentEditableWarning' &&
                        l !== 'suppressHydrationWarning' &&
                        l !== 'autoFocus' &&
                        (gl.hasOwnProperty(l) ? s != null && l === 'onScroll' && Le('scroll', e) : s != null && Xu(e, l, s, a))
              }
            switch (r) {
              case 'input':
                ga(e), wd(e, n, !1)
                break
              case 'textarea':
                ga(e), kd(e)
                break
              case 'option':
                n.value != null && e.setAttribute('value', '' + un(n.value))
                break
              case 'select':
                ;(e.multiple = !!n.multiple),
                  (l = n.value),
                  l != null ? fi(e, !!n.multiple, l, !1) : n.defaultValue != null && fi(e, !!n.multiple, n.defaultValue, !0)
                break
              default:
                typeof i.onClick == 'function' && (e.onclick = lo)
            }
            switch (r) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                n = !!n.autoFocus
                break e
              case 'img':
                n = !0
                break e
              default:
                n = !1
            }
          }
          n && (t.flags |= 4)
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
      }
      return pt(t), null
    case 6:
      if (e && t.stateNode != null) a2(e, t, e.memoizedProps, n)
      else {
        if (typeof n != 'string' && t.stateNode === null) throw Error(H(166))
        if (((r = Cn(jl.current)), Cn(wr.current), Ca(t))) {
          if (((n = t.stateNode), (r = t.memoizedProps), (n[vr] = t), (l = n.nodeValue !== r) && ((e = Vt), e !== null)))
            switch (e.tag) {
              case 3:
                Ea(n.nodeValue, r, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Ea(n.nodeValue, r, (e.mode & 1) !== 0)
            }
          l && (t.flags |= 4)
        } else (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)), (n[vr] = t), (t.stateNode = n)
      }
      return pt(t), null
    case 13:
      if ((De(Ue), (n = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
        if (Ve && Dt !== null && t.mode & 1 && !(t.flags & 128)) b0(), _i(), (t.flags |= 98560), (l = !1)
        else if (((l = Ca(t)), n !== null && n.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(H(318))
            if (((l = t.memoizedState), (l = l !== null ? l.dehydrated : null), !l)) throw Error(H(317))
            l[vr] = t
          } else _i(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          pt(t), (l = !1)
        } else rr !== null && (Au(rr), (rr = null)), (l = !0)
        if (!l) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = r), t)
        : ((n = n !== null),
          n !== (e !== null && e.memoizedState !== null) &&
            n &&
            ((t.child.flags |= 8192), t.mode & 1 && (e === null || Ue.current & 1 ? nt === 0 && (nt = 3) : Oc())),
          t.updateQueue !== null && (t.flags |= 4),
          pt(t),
          null)
    case 4:
      return Si(), ju(e, t), e === null && El(t.stateNode.containerInfo), pt(t), null
    case 10:
      return gc(t.type._context), pt(t), null
    case 17:
      return Mt(t.type) && ao(), pt(t), null
    case 19:
      if ((De(Ue), (l = t.memoizedState), l === null)) return pt(t), null
      if (((n = (t.flags & 128) !== 0), (a = l.rendering), a === null))
        if (n) qi(l, !1)
        else {
          if (nt !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = po(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    qi(l, !1),
                    n = a.updateQueue,
                    n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    n = r,
                    r = t.child;
                  r !== null;

                )
                  (l = r),
                    (e = n),
                    (l.flags &= 14680066),
                    (a = l.alternate),
                    a === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = a.childLanes),
                        (l.lanes = a.lanes),
                        (l.child = a.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = a.memoizedProps),
                        (l.memoizedState = a.memoizedState),
                        (l.updateQueue = a.updateQueue),
                        (l.type = a.type),
                        (e = a.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext
                              })),
                    (r = r.sibling)
                return ze(Ue, (Ue.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          l.tail !== null && Ge() > Ei && ((t.flags |= 128), (n = !0), qi(l, !1), (t.lanes = 4194304))
        }
      else {
        if (!n)
          if (((e = po(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (n = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              qi(l, !0),
              l.tail === null && l.tailMode === 'hidden' && !a.alternate && !Ve)
            )
              return pt(t), null
          } else 2 * Ge() - l.renderingStartTime > Ei && r !== 1073741824 && ((t.flags |= 128), (n = !0), qi(l, !1), (t.lanes = 4194304))
        l.isBackwards ? ((a.sibling = t.child), (t.child = a)) : ((r = l.last), r !== null ? (r.sibling = a) : (t.child = a), (l.last = a))
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = Ge()),
          (t.sibling = null),
          (r = Ue.current),
          ze(Ue, n ? (r & 1) | 2 : r & 1),
          t)
        : (pt(t), null)
    case 22:
    case 23:
      return (
        zc(),
        (n = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
        n && t.mode & 1 ? Ot & 1073741824 && (pt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : pt(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(H(156, t.tag))
}
function Xm(e, t) {
  switch ((hc(t), t.tag)) {
    case 1:
      return Mt(t.type) && ao(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
    case 3:
      return Si(), De(jt), De(vt), kc(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
    case 5:
      return _c(t), null
    case 13:
      if ((De(Ue), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(H(340))
        _i()
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
    case 19:
      return De(Ue), null
    case 4:
      return Si(), null
    case 10:
      return gc(t.type._context), null
    case 22:
    case 23:
      return zc(), null
    case 24:
      return null
    default:
      return null
  }
}
var ja = !1,
  mt = !1,
  Jm = typeof WeakSet == 'function' ? WeakSet : Set,
  te = null
function ui(e, t) {
  var r = e.ref
  if (r !== null)
    if (typeof r == 'function')
      try {
        r(null)
      } catch (n) {
        qe(e, t, n)
      }
    else r.current = null
}
function Mu(e, t, r) {
  try {
    r()
  } catch (n) {
    qe(e, t, n)
  }
}
var d1 = !1
function e3(e, t) {
  if (((hu = ro), (e = d0()), dc(e))) {
    if ('selectionStart' in e) var r = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window
        var n = r.getSelection && r.getSelection()
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode
          var i = n.anchorOffset,
            l = n.focusNode
          n = n.focusOffset
          try {
            r.nodeType, l.nodeType
          } catch {
            r = null
            break e
          }
          var a = 0,
            o = -1,
            s = -1,
            u = 0,
            c = 0,
            d = e,
            h = null
          t: for (;;) {
            for (
              var v;
              d !== r || (i !== 0 && d.nodeType !== 3) || (o = a + i),
                d !== l || (n !== 0 && d.nodeType !== 3) || (s = a + n),
                d.nodeType === 3 && (a += d.nodeValue.length),
                (v = d.firstChild) !== null;

            )
              (h = d), (d = v)
            for (;;) {
              if (d === e) break t
              if ((h === r && ++u === i && (o = a), h === l && ++c === n && (s = a), (v = d.nextSibling) !== null)) break
              ;(d = h), (h = d.parentNode)
            }
            d = v
          }
          r = o === -1 || s === -1 ? null : { start: o, end: s }
        } else r = null
      }
    r = r || { start: 0, end: 0 }
  } else r = null
  for (pu = { focusedElem: e, selectionRange: r }, ro = !1, te = t; te !== null; )
    if (((t = te), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (te = e)
    else
      for (; te !== null; ) {
        t = te
        try {
          var g = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (g !== null) {
                  var k = g.memoizedProps,
                    R = g.memoizedState,
                    p = t.stateNode,
                    f = p.getSnapshotBeforeUpdate(t.elementType === t.type ? k : Jt(t.type, k), R)
                  p.__reactInternalSnapshotBeforeUpdate = f
                }
                break
              case 3:
                var m = t.stateNode.containerInfo
                m.nodeType === 1 ? (m.textContent = '') : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(H(163))
            }
        } catch (b) {
          qe(t, t.return, b)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (te = e)
          break
        }
        te = t.return
      }
  return (g = d1), (d1 = !1), g
}
function hl(e, t, r) {
  var n = t.updateQueue
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var i = (n = n.next)
    do {
      if ((i.tag & e) === e) {
        var l = i.destroy
        ;(i.destroy = void 0), l !== void 0 && Mu(t, r, l)
      }
      i = i.next
    } while (i !== n)
  }
}
function qo(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var r = (t = t.next)
    do {
      if ((r.tag & e) === e) {
        var n = r.create
        r.destroy = n()
      }
      r = r.next
    } while (r !== t)
  }
}
function Pu(e) {
  var t = e.ref
  if (t !== null) {
    var r = e.stateNode
    switch (e.tag) {
      case 5:
        e = r
        break
      default:
        e = r
    }
    typeof t == 'function' ? t(e) : (t.current = e)
  }
}
function o2(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), o2(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 && ((t = e.stateNode), t !== null && (delete t[vr], delete t[Tl], delete t[gu], delete t[Dm], delete t[Am])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function s2(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function f1(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || s2(e.return)) return null
      e = e.return
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;(e.child.return = e), (e = e.child)
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function Ru(e, t, r) {
  var n = e.tag
  if (n === 5 || n === 6)
    (e = e.stateNode),
      t
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (r.nodeType === 8 ? ((t = r.parentNode), t.insertBefore(e, r)) : ((t = r), t.appendChild(e)),
          (r = r._reactRootContainer),
          r != null || t.onclick !== null || (t.onclick = lo))
  else if (n !== 4 && ((e = e.child), e !== null)) for (Ru(e, t, r), e = e.sibling; e !== null; ) Ru(e, t, r), (e = e.sibling)
}
function zu(e, t, r) {
  var n = e.tag
  if (n === 5 || n === 6) (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e)
  else if (n !== 4 && ((e = e.child), e !== null)) for (zu(e, t, r), e = e.sibling; e !== null; ) zu(e, t, r), (e = e.sibling)
}
var ut = null,
  er = !1
function $r(e, t, r) {
  for (r = r.child; r !== null; ) u2(e, t, r), (r = r.sibling)
}
function u2(e, t, r) {
  if (xr && typeof xr.onCommitFiberUnmount == 'function')
    try {
      xr.onCommitFiberUnmount(Fo, r)
    } catch {}
  switch (r.tag) {
    case 5:
      mt || ui(r, t)
    case 6:
      var n = ut,
        i = er
      ;(ut = null),
        $r(e, t, r),
        (ut = n),
        (er = i),
        ut !== null &&
          (er
            ? ((e = ut), (r = r.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : ut.removeChild(r.stateNode))
      break
    case 18:
      ut !== null &&
        (er
          ? ((e = ut), (r = r.stateNode), e.nodeType === 8 ? Ts(e.parentNode, r) : e.nodeType === 1 && Ts(e, r), kl(e))
          : Ts(ut, r.stateNode))
      break
    case 4:
      ;(n = ut), (i = er), (ut = r.stateNode.containerInfo), (er = !0), $r(e, t, r), (ut = n), (er = i)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (!mt && ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))) {
        i = n = n.next
        do {
          var l = i,
            a = l.destroy
          ;(l = l.tag), a !== void 0 && (l & 2 || l & 4) && Mu(r, t, a), (i = i.next)
        } while (i !== n)
      }
      $r(e, t, r)
      break
    case 1:
      if (!mt && (ui(r, t), (n = r.stateNode), typeof n.componentWillUnmount == 'function'))
        try {
          ;(n.props = r.memoizedProps), (n.state = r.memoizedState), n.componentWillUnmount()
        } catch (o) {
          qe(r, t, o)
        }
      $r(e, t, r)
      break
    case 21:
      $r(e, t, r)
      break
    case 22:
      r.mode & 1 ? ((mt = (n = mt) || r.memoizedState !== null), $r(e, t, r), (mt = n)) : $r(e, t, r)
      break
    default:
      $r(e, t, r)
  }
}
function h1(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var r = e.stateNode
    r === null && (r = e.stateNode = new Jm()),
      t.forEach(function (n) {
        var i = u3.bind(null, e, n)
        r.has(n) || (r.add(n), n.then(i, i))
      })
  }
}
function Xt(e, t) {
  var r = t.deletions
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var i = r[n]
      try {
        var l = e,
          a = t,
          o = a
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              ;(ut = o.stateNode), (er = !1)
              break e
            case 3:
              ;(ut = o.stateNode.containerInfo), (er = !0)
              break e
            case 4:
              ;(ut = o.stateNode.containerInfo), (er = !0)
              break e
          }
          o = o.return
        }
        if (ut === null) throw Error(H(160))
        u2(l, a, i), (ut = null), (er = !1)
        var s = i.alternate
        s !== null && (s.return = null), (i.return = null)
      } catch (u) {
        qe(i, t, u)
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) c2(t, e), (t = t.sibling)
}
function c2(e, t) {
  var r = e.alternate,
    n = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Xt(t, e), hr(e), n & 4)) {
        try {
          hl(3, e, e.return), qo(3, e)
        } catch (k) {
          qe(e, e.return, k)
        }
        try {
          hl(5, e, e.return)
        } catch (k) {
          qe(e, e.return, k)
        }
      }
      break
    case 1:
      Xt(t, e), hr(e), n & 512 && r !== null && ui(r, r.return)
      break
    case 5:
      if ((Xt(t, e), hr(e), n & 512 && r !== null && ui(r, r.return), e.flags & 32)) {
        var i = e.stateNode
        try {
          yl(i, '')
        } catch (k) {
          qe(e, e.return, k)
        }
      }
      if (n & 4 && ((i = e.stateNode), i != null)) {
        var l = e.memoizedProps,
          a = r !== null ? r.memoizedProps : l,
          o = e.type,
          s = e.updateQueue
        if (((e.updateQueue = null), s !== null))
          try {
            o === 'input' && l.type === 'radio' && l.name != null && Rf(i, l), nu(o, a)
            var u = nu(o, l)
            for (a = 0; a < s.length; a += 2) {
              var c = s[a],
                d = s[a + 1]
              c === 'style' ? Af(i, d) : c === 'dangerouslySetInnerHTML' ? Lf(i, d) : c === 'children' ? yl(i, d) : Xu(i, c, d, u)
            }
            switch (o) {
              case 'input':
                Xs(i, l)
                break
              case 'textarea':
                zf(i, l)
                break
              case 'select':
                var h = i._wrapperState.wasMultiple
                i._wrapperState.wasMultiple = !!l.multiple
                var v = l.value
                v != null
                  ? fi(i, !!l.multiple, v, !1)
                  : h !== !!l.multiple &&
                    (l.defaultValue != null ? fi(i, !!l.multiple, l.defaultValue, !0) : fi(i, !!l.multiple, l.multiple ? [] : '', !1))
            }
            i[Tl] = l
          } catch (k) {
            qe(e, e.return, k)
          }
      }
      break
    case 6:
      if ((Xt(t, e), hr(e), n & 4)) {
        if (e.stateNode === null) throw Error(H(162))
        ;(i = e.stateNode), (l = e.memoizedProps)
        try {
          i.nodeValue = l
        } catch (k) {
          qe(e, e.return, k)
        }
      }
      break
    case 3:
      if ((Xt(t, e), hr(e), n & 4 && r !== null && r.memoizedState.isDehydrated))
        try {
          kl(t.containerInfo)
        } catch (k) {
          qe(e, e.return, k)
        }
      break
    case 4:
      Xt(t, e), hr(e)
      break
    case 13:
      Xt(t, e),
        hr(e),
        (i = e.child),
        i.flags & 8192 &&
          ((l = i.memoizedState !== null),
          (i.stateNode.isHidden = l),
          !l || (i.alternate !== null && i.alternate.memoizedState !== null) || (Pc = Ge())),
        n & 4 && h1(e)
      break
    case 22:
      if (
        ((c = r !== null && r.memoizedState !== null), e.mode & 1 ? ((mt = (u = mt) || c), Xt(t, e), (mt = u)) : Xt(t, e), hr(e), n & 8192)
      ) {
        if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !c && e.mode & 1))
          for (te = e, c = e.child; c !== null; ) {
            for (d = te = c; te !== null; ) {
              switch (((h = te), (v = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  hl(4, h, h.return)
                  break
                case 1:
                  ui(h, h.return)
                  var g = h.stateNode
                  if (typeof g.componentWillUnmount == 'function') {
                    ;(n = h), (r = h.return)
                    try {
                      ;(t = n), (g.props = t.memoizedProps), (g.state = t.memoizedState), g.componentWillUnmount()
                    } catch (k) {
                      qe(n, r, k)
                    }
                  }
                  break
                case 5:
                  ui(h, h.return)
                  break
                case 22:
                  if (h.memoizedState !== null) {
                    m1(d)
                    continue
                  }
              }
              v !== null ? ((v.return = h), (te = v)) : m1(d)
            }
            c = c.sibling
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d
              try {
                ;(i = d.stateNode),
                  u
                    ? ((l = i.style),
                      typeof l.setProperty == 'function' ? l.setProperty('display', 'none', 'important') : (l.display = 'none'))
                    : ((o = d.stateNode),
                      (s = d.memoizedProps.style),
                      (a = s != null && s.hasOwnProperty('display') ? s.display : null),
                      (o.style.display = Df('display', a)))
              } catch (k) {
                qe(e, e.return, k)
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? '' : d.memoizedProps
              } catch (k) {
                qe(e, e.return, k)
              }
          } else if (((d.tag !== 22 && d.tag !== 23) || d.memoizedState === null || d === e) && d.child !== null) {
            ;(d.child.return = d), (d = d.child)
            continue
          }
          if (d === e) break e
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e
            c === d && (c = null), (d = d.return)
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling)
        }
      }
      break
    case 19:
      Xt(t, e), hr(e), n & 4 && h1(e)
      break
    case 21:
      break
    default:
      Xt(t, e), hr(e)
  }
}
function hr(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (s2(r)) {
            var n = r
            break e
          }
          r = r.return
        }
        throw Error(H(160))
      }
      switch (n.tag) {
        case 5:
          var i = n.stateNode
          n.flags & 32 && (yl(i, ''), (n.flags &= -33))
          var l = f1(e)
          zu(e, l, i)
          break
        case 3:
        case 4:
          var a = n.stateNode.containerInfo,
            o = f1(e)
          Ru(e, o, a)
          break
        default:
          throw Error(H(161))
      }
    } catch (s) {
      qe(e, e.return, s)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function t3(e, t, r) {
  ;(te = e), d2(e)
}
function d2(e, t, r) {
  for (var n = (e.mode & 1) !== 0; te !== null; ) {
    var i = te,
      l = i.child
    if (i.tag === 22 && n) {
      var a = i.memoizedState !== null || ja
      if (!a) {
        var o = i.alternate,
          s = (o !== null && o.memoizedState !== null) || mt
        o = ja
        var u = mt
        if (((ja = a), (mt = s) && !u))
          for (te = i; te !== null; )
            (a = te), (s = a.child), a.tag === 22 && a.memoizedState !== null ? v1(i) : s !== null ? ((s.return = a), (te = s)) : v1(i)
        for (; l !== null; ) (te = l), d2(l), (l = l.sibling)
        ;(te = i), (ja = o), (mt = u)
      }
      p1(e)
    } else i.subtreeFlags & 8772 && l !== null ? ((l.return = i), (te = l)) : p1(e)
  }
}
function p1(e) {
  for (; te !== null; ) {
    var t = te
    if (t.flags & 8772) {
      var r = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              mt || qo(5, t)
              break
            case 1:
              var n = t.stateNode
              if (t.flags & 4 && !mt)
                if (r === null) n.componentDidMount()
                else {
                  var i = t.elementType === t.type ? r.memoizedProps : Jt(t.type, r.memoizedProps)
                  n.componentDidUpdate(i, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate)
                }
              var l = t.updateQueue
              l !== null && Xd(t, l, n)
              break
            case 3:
              var a = t.updateQueue
              if (a !== null) {
                if (((r = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode
                      break
                    case 1:
                      r = t.child.stateNode
                  }
                Xd(t, a, r)
              }
              break
            case 5:
              var o = t.stateNode
              if (r === null && t.flags & 4) {
                r = o
                var s = t.memoizedProps
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && r.focus()
                    break
                  case 'img':
                    s.src && (r.src = s.src)
                }
              }
              break
            case 6:
              break
            case 4:
              break
            case 12:
              break
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate
                if (u !== null) {
                  var c = u.memoizedState
                  if (c !== null) {
                    var d = c.dehydrated
                    d !== null && kl(d)
                  }
                }
              }
              break
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break
            default:
              throw Error(H(163))
          }
        mt || (t.flags & 512 && Pu(t))
      } catch (h) {
        qe(t, t.return, h)
      }
    }
    if (t === e) {
      te = null
      break
    }
    if (((r = t.sibling), r !== null)) {
      ;(r.return = t.return), (te = r)
      break
    }
    te = t.return
  }
}
function m1(e) {
  for (; te !== null; ) {
    var t = te
    if (t === e) {
      te = null
      break
    }
    var r = t.sibling
    if (r !== null) {
      ;(r.return = t.return), (te = r)
      break
    }
    te = t.return
  }
}
function v1(e) {
  for (; te !== null; ) {
    var t = te
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return
          try {
            qo(4, t)
          } catch (s) {
            qe(t, r, s)
          }
          break
        case 1:
          var n = t.stateNode
          if (typeof n.componentDidMount == 'function') {
            var i = t.return
            try {
              n.componentDidMount()
            } catch (s) {
              qe(t, i, s)
            }
          }
          var l = t.return
          try {
            Pu(t)
          } catch (s) {
            qe(t, l, s)
          }
          break
        case 5:
          var a = t.return
          try {
            Pu(t)
          } catch (s) {
            qe(t, a, s)
          }
      }
    } catch (s) {
      qe(t, t.return, s)
    }
    if (t === e) {
      te = null
      break
    }
    var o = t.sibling
    if (o !== null) {
      ;(o.return = t.return), (te = o)
      break
    }
    te = t.return
  }
}
var r3 = Math.ceil,
  go = Ir.ReactCurrentDispatcher,
  jc = Ir.ReactCurrentOwner,
  qt = Ir.ReactCurrentBatchConfig,
  Se = 0,
  lt = null,
  et = null,
  dt = 0,
  Ot = 0,
  ci = vn(0),
  nt = 0,
  zl = null,
  Ln = 0,
  Ko = 0,
  Mc = 0,
  pl = null,
  Tt = null,
  Pc = 0,
  Ei = 1 / 0,
  jr = null,
  yo = !1,
  Ou = null,
  an = null,
  Ma = !1,
  Xr = null,
  xo = 0,
  ml = 0,
  Lu = null,
  Ha = -1,
  Wa = 0
function _t() {
  return Se & 6 ? Ge() : Ha !== -1 ? Ha : (Ha = Ge())
}
function on(e) {
  return e.mode & 1
    ? Se & 2 && dt !== 0
      ? dt & -dt
      : Fm.transition !== null
        ? (Wa === 0 && (Wa = Qf()), Wa)
        : ((e = Te), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : r0(e.type))), e)
    : 1
}
function ar(e, t, r, n) {
  if (50 < ml) throw ((ml = 0), (Lu = null), Error(H(185)))
  Yl(e, r, n),
    (!(Se & 2) || e !== lt) &&
      (e === lt && (!(Se & 2) && (Ko |= r), nt === 4 && Kr(e, dt)),
      Pt(e, n),
      r === 1 && Se === 0 && !(t.mode & 1) && ((Ei = Ge() + 500), Ho && gn()))
}
function Pt(e, t) {
  var r = e.callbackNode
  Fp(e, t)
  var n = to(e, e === lt ? dt : 0)
  if (n === 0) r !== null && Ed(r), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((r != null && Ed(r), t === 1))
      e.tag === 0 ? Vm(g1.bind(null, e)) : _0(g1.bind(null, e)),
        Om(function () {
          !(Se & 6) && gn()
        }),
        (r = null)
    else {
      switch (Gf(n)) {
        case 1:
          r = nc
          break
        case 4:
          r = qf
          break
        case 16:
          r = eo
          break
        case 536870912:
          r = Kf
          break
        default:
          r = eo
      }
      r = x2(r, f2.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = r)
  }
}
function f2(e, t) {
  if (((Ha = -1), (Wa = 0), Se & 6)) throw Error(H(327))
  var r = e.callbackNode
  if (gi() && e.callbackNode !== r) return null
  var n = to(e, e === lt ? dt : 0)
  if (n === 0) return null
  if (n & 30 || n & e.expiredLanes || t) t = wo(e, n)
  else {
    t = n
    var i = Se
    Se |= 2
    var l = p2()
    ;(lt !== e || dt !== t) && ((jr = null), (Ei = Ge() + 500), jn(e, t))
    do
      try {
        l3()
        break
      } catch (o) {
        h2(e, o)
      }
    while (!0)
    vc(), (go.current = l), (Se = i), et !== null ? (t = 0) : ((lt = null), (dt = 0), (t = nt))
  }
  if (t !== 0) {
    if ((t === 2 && ((i = su(e)), i !== 0 && ((n = i), (t = Du(e, i)))), t === 1)) throw ((r = zl), jn(e, 0), Kr(e, n), Pt(e, Ge()), r)
    if (t === 6) Kr(e, n)
    else {
      if (
        ((i = e.current.alternate),
        !(n & 30) && !n3(i) && ((t = wo(e, n)), t === 2 && ((l = su(e)), l !== 0 && ((n = l), (t = Du(e, l)))), t === 1))
      )
        throw ((r = zl), jn(e, 0), Kr(e, n), Pt(e, Ge()), r)
      switch (((e.finishedWork = i), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error(H(345))
        case 2:
          _n(e, Tt, jr)
          break
        case 3:
          if ((Kr(e, n), (n & 130023424) === n && ((t = Pc + 500 - Ge()), 10 < t))) {
            if (to(e, 0) !== 0) break
            if (((i = e.suspendedLanes), (i & n) !== n)) {
              _t(), (e.pingedLanes |= e.suspendedLanes & i)
              break
            }
            e.timeoutHandle = vu(_n.bind(null, e, Tt, jr), t)
            break
          }
          _n(e, Tt, jr)
          break
        case 4:
          if ((Kr(e, n), (n & 4194240) === n)) break
          for (t = e.eventTimes, i = -1; 0 < n; ) {
            var a = 31 - lr(n)
            ;(l = 1 << a), (a = t[a]), a > i && (i = a), (n &= ~l)
          }
          if (
            ((n = i),
            (n = Ge() - n),
            (n =
              (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * r3(n / 1960)) -
              n),
            10 < n)
          ) {
            e.timeoutHandle = vu(_n.bind(null, e, Tt, jr), n)
            break
          }
          _n(e, Tt, jr)
          break
        case 5:
          _n(e, Tt, jr)
          break
        default:
          throw Error(H(329))
      }
    }
  }
  return Pt(e, Ge()), e.callbackNode === r ? f2.bind(null, e) : null
}
function Du(e, t) {
  var r = pl
  return (
    e.current.memoizedState.isDehydrated && (jn(e, t).flags |= 256), (e = wo(e, t)), e !== 2 && ((t = Tt), (Tt = r), t !== null && Au(t)), e
  )
}
function Au(e) {
  Tt === null ? (Tt = e) : Tt.push.apply(Tt, e)
}
function n3(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var i = r[n],
            l = i.getSnapshot
          i = i.value
          try {
            if (!sr(l(), i)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((r = t.child), t.subtreeFlags & 16384 && r !== null)) (r.return = t), (t = r)
    else {
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
  }
  return !0
}
function Kr(e, t) {
  for (t &= ~Mc, t &= ~Ko, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var r = 31 - lr(t),
      n = 1 << r
    ;(e[r] = -1), (t &= ~n)
  }
}
function g1(e) {
  if (Se & 6) throw Error(H(327))
  gi()
  var t = to(e, 0)
  if (!(t & 1)) return Pt(e, Ge()), null
  var r = wo(e, t)
  if (e.tag !== 0 && r === 2) {
    var n = su(e)
    n !== 0 && ((t = n), (r = Du(e, n)))
  }
  if (r === 1) throw ((r = zl), jn(e, 0), Kr(e, t), Pt(e, Ge()), r)
  if (r === 6) throw Error(H(345))
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), _n(e, Tt, jr), Pt(e, Ge()), null
}
function Rc(e, t) {
  var r = Se
  Se |= 1
  try {
    return e(t)
  } finally {
    ;(Se = r), Se === 0 && ((Ei = Ge() + 500), Ho && gn())
  }
}
function Dn(e) {
  Xr !== null && Xr.tag === 0 && !(Se & 6) && gi()
  var t = Se
  Se |= 1
  var r = qt.transition,
    n = Te
  try {
    if (((qt.transition = null), (Te = 1), e)) return e()
  } finally {
    ;(Te = n), (qt.transition = r), (Se = t), !(Se & 6) && gn()
  }
}
function zc() {
  ;(Ot = ci.current), De(ci)
}
function jn(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var r = e.timeoutHandle
  if ((r !== -1 && ((e.timeoutHandle = -1), zm(r)), et !== null))
    for (r = et.return; r !== null; ) {
      var n = r
      switch ((hc(n), n.tag)) {
        case 1:
          ;(n = n.type.childContextTypes), n != null && ao()
          break
        case 3:
          Si(), De(jt), De(vt), kc()
          break
        case 5:
          _c(n)
          break
        case 4:
          Si()
          break
        case 13:
          De(Ue)
          break
        case 19:
          De(Ue)
          break
        case 10:
          gc(n.type._context)
          break
        case 22:
        case 23:
          zc()
      }
      r = r.return
    }
  if (((lt = e), (et = e = sn(e.current, null)), (dt = Ot = t), (nt = 0), (zl = null), (Mc = Ko = Ln = 0), (Tt = pl = null), En !== null)) {
    for (t = 0; t < En.length; t++)
      if (((r = En[t]), (n = r.interleaved), n !== null)) {
        r.interleaved = null
        var i = n.next,
          l = r.pending
        if (l !== null) {
          var a = l.next
          ;(l.next = i), (n.next = a)
        }
        r.pending = n
      }
    En = null
  }
  return e
}
function h2(e, t) {
  do {
    var r = et
    try {
      if ((vc(), (Ua.current = vo), mo)) {
        for (var n = Be.memoizedState; n !== null; ) {
          var i = n.queue
          i !== null && (i.pending = null), (n = n.next)
        }
        mo = !1
      }
      if (((On = 0), (it = rt = Be = null), (fl = !1), (Ml = 0), (jc.current = null), r === null || r.return === null)) {
        ;(nt = 1), (zl = t), (et = null)
        break
      }
      e: {
        var l = e,
          a = r.return,
          o = r,
          s = t
        if (((t = dt), (o.flags |= 32768), s !== null && typeof s == 'object' && typeof s.then == 'function')) {
          var u = s,
            c = o,
            d = c.tag
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var h = c.alternate
            h
              ? ((c.updateQueue = h.updateQueue), (c.memoizedState = h.memoizedState), (c.lanes = h.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null))
          }
          var v = i1(a)
          if (v !== null) {
            ;(v.flags &= -257), l1(v, a, o, l, t), v.mode & 1 && n1(l, u, t), (t = v), (s = u)
            var g = t.updateQueue
            if (g === null) {
              var k = new Set()
              k.add(s), (t.updateQueue = k)
            } else g.add(s)
            break e
          } else {
            if (!(t & 1)) {
              n1(l, u, t), Oc()
              break e
            }
            s = Error(H(426))
          }
        } else if (Ve && o.mode & 1) {
          var R = i1(a)
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256), l1(R, a, o, l, t), pc(bi(s, o))
            break e
          }
        }
        ;(l = s = bi(s, o)), nt !== 4 && (nt = 2), pl === null ? (pl = [l]) : pl.push(l), (l = a)
        do {
          switch (l.tag) {
            case 3:
              ;(l.flags |= 65536), (t &= -t), (l.lanes |= t)
              var p = G0(l, s, t)
              Yd(l, p)
              break e
            case 1:
              o = s
              var f = l.type,
                m = l.stateNode
              if (
                !(l.flags & 128) &&
                (typeof f.getDerivedStateFromError == 'function' ||
                  (m !== null && typeof m.componentDidCatch == 'function' && (an === null || !an.has(m))))
              ) {
                ;(l.flags |= 65536), (t &= -t), (l.lanes |= t)
                var b = Y0(l, o, t)
                Yd(l, b)
                break e
              }
          }
          l = l.return
        } while (l !== null)
      }
      v2(r)
    } catch (z) {
      ;(t = z), et === r && r !== null && (et = r = r.return)
      continue
    }
    break
  } while (!0)
}
function p2() {
  var e = go.current
  return (go.current = vo), e === null ? vo : e
}
function Oc() {
  ;(nt === 0 || nt === 3 || nt === 2) && (nt = 4), lt === null || (!(Ln & 268435455) && !(Ko & 268435455)) || Kr(lt, dt)
}
function wo(e, t) {
  var r = Se
  Se |= 2
  var n = p2()
  ;(lt !== e || dt !== t) && ((jr = null), jn(e, t))
  do
    try {
      i3()
      break
    } catch (i) {
      h2(e, i)
    }
  while (!0)
  if ((vc(), (Se = r), (go.current = n), et !== null)) throw Error(H(261))
  return (lt = null), (dt = 0), nt
}
function i3() {
  for (; et !== null; ) m2(et)
}
function l3() {
  for (; et !== null && !Mp(); ) m2(et)
}
function m2(e) {
  var t = y2(e.alternate, e, Ot)
  ;(e.memoizedProps = e.pendingProps), t === null ? v2(e) : (et = t), (jc.current = null)
}
function v2(e) {
  var t = e
  do {
    var r = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((r = Xm(r, t)), r !== null)) {
        ;(r.flags &= 32767), (et = r)
        return
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(nt = 6), (et = null)
        return
      }
    } else if (((r = Ym(r, t, Ot)), r !== null)) {
      et = r
      return
    }
    if (((t = t.sibling), t !== null)) {
      et = t
      return
    }
    et = t = e
  } while (t !== null)
  nt === 0 && (nt = 5)
}
function _n(e, t, r) {
  var n = Te,
    i = qt.transition
  try {
    ;(qt.transition = null), (Te = 1), a3(e, t, r, n)
  } finally {
    ;(qt.transition = i), (Te = n)
  }
  return null
}
function a3(e, t, r, n) {
  do gi()
  while (Xr !== null)
  if (Se & 6) throw Error(H(327))
  r = e.finishedWork
  var i = e.finishedLanes
  if (r === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current)) throw Error(H(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var l = r.lanes | r.childLanes
  if (
    (Ip(e, l),
    e === lt && ((et = lt = null), (dt = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      Ma ||
      ((Ma = !0),
      x2(eo, function () {
        return gi(), null
      })),
    (l = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || l)
  ) {
    ;(l = qt.transition), (qt.transition = null)
    var a = Te
    Te = 1
    var o = Se
    ;(Se |= 4),
      (jc.current = null),
      e3(e, r),
      c2(r, e),
      Cm(pu),
      (ro = !!hu),
      (pu = hu = null),
      (e.current = r),
      t3(r),
      Pp(),
      (Se = o),
      (Te = a),
      (qt.transition = l)
  } else e.current = r
  if ((Ma && ((Ma = !1), (Xr = e), (xo = i)), (l = e.pendingLanes), l === 0 && (an = null), Op(r.stateNode), Pt(e, Ge()), t !== null))
    for (n = e.onRecoverableError, r = 0; r < t.length; r++) (i = t[r]), n(i.value, { componentStack: i.stack, digest: i.digest })
  if (yo) throw ((yo = !1), (e = Ou), (Ou = null), e)
  return xo & 1 && e.tag !== 0 && gi(), (l = e.pendingLanes), l & 1 ? (e === Lu ? ml++ : ((ml = 0), (Lu = e))) : (ml = 0), gn(), null
}
function gi() {
  if (Xr !== null) {
    var e = Gf(xo),
      t = qt.transition,
      r = Te
    try {
      if (((qt.transition = null), (Te = 16 > e ? 16 : e), Xr === null)) var n = !1
      else {
        if (((e = Xr), (Xr = null), (xo = 0), Se & 6)) throw Error(H(331))
        var i = Se
        for (Se |= 4, te = e.current; te !== null; ) {
          var l = te,
            a = l.child
          if (te.flags & 16) {
            var o = l.deletions
            if (o !== null) {
              for (var s = 0; s < o.length; s++) {
                var u = o[s]
                for (te = u; te !== null; ) {
                  var c = te
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hl(8, c, l)
                  }
                  var d = c.child
                  if (d !== null) (d.return = c), (te = d)
                  else
                    for (; te !== null; ) {
                      c = te
                      var h = c.sibling,
                        v = c.return
                      if ((o2(c), c === u)) {
                        te = null
                        break
                      }
                      if (h !== null) {
                        ;(h.return = v), (te = h)
                        break
                      }
                      te = v
                    }
                }
              }
              var g = l.alternate
              if (g !== null) {
                var k = g.child
                if (k !== null) {
                  g.child = null
                  do {
                    var R = k.sibling
                    ;(k.sibling = null), (k = R)
                  } while (k !== null)
                }
              }
              te = l
            }
          }
          if (l.subtreeFlags & 2064 && a !== null) (a.return = l), (te = a)
          else
            e: for (; te !== null; ) {
              if (((l = te), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    hl(9, l, l.return)
                }
              var p = l.sibling
              if (p !== null) {
                ;(p.return = l.return), (te = p)
                break e
              }
              te = l.return
            }
        }
        var f = e.current
        for (te = f; te !== null; ) {
          a = te
          var m = a.child
          if (a.subtreeFlags & 2064 && m !== null) (m.return = a), (te = m)
          else
            e: for (a = f; te !== null; ) {
              if (((o = te), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      qo(9, o)
                  }
                } catch (z) {
                  qe(o, o.return, z)
                }
              if (o === a) {
                te = null
                break e
              }
              var b = o.sibling
              if (b !== null) {
                ;(b.return = o.return), (te = b)
                break e
              }
              te = o.return
            }
        }
        if (((Se = i), gn(), xr && typeof xr.onPostCommitFiberRoot == 'function'))
          try {
            xr.onPostCommitFiberRoot(Fo, e)
          } catch {}
        n = !0
      }
      return n
    } finally {
      ;(Te = r), (qt.transition = t)
    }
  }
  return !1
}
function y1(e, t, r) {
  ;(t = bi(r, t)), (t = G0(e, t, 1)), (e = ln(e, t, 1)), (t = _t()), e !== null && (Yl(e, 1, t), Pt(e, t))
}
function qe(e, t, r) {
  if (e.tag === 3) y1(e, e, r)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        y1(t, e, r)
        break
      } else if (t.tag === 1) {
        var n = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof n.componentDidCatch == 'function' && (an === null || !an.has(n)))
        ) {
          ;(e = bi(r, e)), (e = Y0(t, e, 1)), (t = ln(t, e, 1)), (e = _t()), t !== null && (Yl(t, 1, e), Pt(t, e))
          break
        }
      }
      t = t.return
    }
}
function o3(e, t, r) {
  var n = e.pingCache
  n !== null && n.delete(t),
    (t = _t()),
    (e.pingedLanes |= e.suspendedLanes & r),
    lt === e && (dt & r) === r && (nt === 4 || (nt === 3 && (dt & 130023424) === dt && 500 > Ge() - Pc) ? jn(e, 0) : (Mc |= r)),
    Pt(e, t)
}
function g2(e, t) {
  t === 0 && (e.mode & 1 ? ((t = wa), (wa <<= 1), !(wa & 130023424) && (wa = 4194304)) : (t = 1))
  var r = _t()
  ;(e = Ar(e, t)), e !== null && (Yl(e, t, r), Pt(e, r))
}
function s3(e) {
  var t = e.memoizedState,
    r = 0
  t !== null && (r = t.retryLane), g2(e, r)
}
function u3(e, t) {
  var r = 0
  switch (e.tag) {
    case 13:
      var n = e.stateNode,
        i = e.memoizedState
      i !== null && (r = i.retryLane)
      break
    case 19:
      n = e.stateNode
      break
    default:
      throw Error(H(314))
  }
  n !== null && n.delete(t), g2(e, r)
}
var y2
y2 = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || jt.current) Nt = !0
    else {
      if (!(e.lanes & r) && !(t.flags & 128)) return (Nt = !1), Gm(e, t, r)
      Nt = !!(e.flags & 131072)
    }
  else (Nt = !1), Ve && t.flags & 1048576 && k0(t, uo, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type
      $a(e, t), (e = t.pendingProps)
      var i = wi(t, vt.current)
      vi(t, r), (i = bc(null, t, n, e, i, r))
      var l = Ec()
      return (
        (t.flags |= 1),
        typeof i == 'object' && i !== null && typeof i.render == 'function' && i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Mt(n) ? ((l = !0), oo(t)) : (l = !1),
            (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
            xc(t),
            (i.updater = Zo),
            (t.stateNode = i),
            (i._reactInternals = t),
            Su(t, n, e, r),
            (t = Cu(null, t, n, !0, l, r)))
          : ((t.tag = 0), Ve && l && fc(t), xt(null, t, i, r), (t = t.child)),
        t
      )
    case 16:
      n = t.elementType
      e: {
        switch (
          ($a(e, t), (e = t.pendingProps), (i = n._init), (n = i(n._payload)), (t.type = n), (i = t.tag = d3(n)), (e = Jt(n, e)), i)
        ) {
          case 0:
            t = Eu(null, t, n, e, r)
            break e
          case 1:
            t = s1(null, t, n, e, r)
            break e
          case 11:
            t = a1(null, t, n, e, r)
            break e
          case 14:
            t = o1(null, t, n, Jt(n.type, e), r)
            break e
        }
        throw Error(H(306, n, ''))
      }
      return t
    case 0:
      return (n = t.type), (i = t.pendingProps), (i = t.elementType === n ? i : Jt(n, i)), Eu(e, t, n, i, r)
    case 1:
      return (n = t.type), (i = t.pendingProps), (i = t.elementType === n ? i : Jt(n, i)), s1(e, t, n, i, r)
    case 3:
      e: {
        if ((t2(t), e === null)) throw Error(H(387))
        ;(n = t.pendingProps), (l = t.memoizedState), (i = l.element), N0(e, t), ho(t, n, null, r)
        var a = t.memoizedState
        if (((n = a.element), l.isDehydrated))
          if (
            ((l = {
              element: n,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            ;(i = bi(Error(H(423)), t)), (t = u1(e, t, n, r, i))
            break e
          } else if (n !== i) {
            ;(i = bi(Error(H(424)), t)), (t = u1(e, t, n, r, i))
            break e
          } else
            for (Dt = nn(t.stateNode.containerInfo.firstChild), Vt = t, Ve = !0, rr = null, r = C0(t, null, n, r), t.child = r; r; )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling)
        else {
          if ((_i(), n === i)) {
            t = Vr(e, t, r)
            break e
          }
          xt(e, t, n, r)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        j0(t),
        e === null && wu(t),
        (n = t.type),
        (i = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (a = i.children),
        mu(n, i) ? (a = null) : l !== null && mu(n, l) && (t.flags |= 32),
        e2(e, t),
        xt(e, t, a, r),
        t.child
      )
    case 6:
      return e === null && wu(t), null
    case 13:
      return r2(e, t, r)
    case 4:
      return wc(t, t.stateNode.containerInfo), (n = t.pendingProps), e === null ? (t.child = ki(t, null, n, r)) : xt(e, t, n, r), t.child
    case 11:
      return (n = t.type), (i = t.pendingProps), (i = t.elementType === n ? i : Jt(n, i)), a1(e, t, n, i, r)
    case 7:
      return xt(e, t, t.pendingProps, r), t.child
    case 8:
      return xt(e, t, t.pendingProps.children, r), t.child
    case 12:
      return xt(e, t, t.pendingProps.children, r), t.child
    case 10:
      e: {
        if (
          ((n = t.type._context),
          (i = t.pendingProps),
          (l = t.memoizedProps),
          (a = i.value),
          ze(co, n._currentValue),
          (n._currentValue = a),
          l !== null)
        )
          if (sr(l.value, a)) {
            if (l.children === i.children && !jt.current) {
              t = Vr(e, t, r)
              break e
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var o = l.dependencies
              if (o !== null) {
                a = l.child
                for (var s = o.firstContext; s !== null; ) {
                  if (s.context === n) {
                    if (l.tag === 1) {
                      ;(s = zr(-1, r & -r)), (s.tag = 2)
                      var u = l.updateQueue
                      if (u !== null) {
                        u = u.shared
                        var c = u.pending
                        c === null ? (s.next = s) : ((s.next = c.next), (c.next = s)), (u.pending = s)
                      }
                    }
                    ;(l.lanes |= r), (s = l.alternate), s !== null && (s.lanes |= r), _u(l.return, r, t), (o.lanes |= r)
                    break
                  }
                  s = s.next
                }
              } else if (l.tag === 10) a = l.type === t.type ? null : l.child
              else if (l.tag === 18) {
                if (((a = l.return), a === null)) throw Error(H(341))
                ;(a.lanes |= r), (o = a.alternate), o !== null && (o.lanes |= r), _u(a, r, t), (a = l.sibling)
              } else a = l.child
              if (a !== null) a.return = l
              else
                for (a = l; a !== null; ) {
                  if (a === t) {
                    a = null
                    break
                  }
                  if (((l = a.sibling), l !== null)) {
                    ;(l.return = a.return), (a = l)
                    break
                  }
                  a = a.return
                }
              l = a
            }
        xt(e, t, i.children, r), (t = t.child)
      }
      return t
    case 9:
      return (i = t.type), (n = t.pendingProps.children), vi(t, r), (i = Qt(i)), (n = n(i)), (t.flags |= 1), xt(e, t, n, r), t.child
    case 14:
      return (n = t.type), (i = Jt(n, t.pendingProps)), (i = Jt(n.type, i)), o1(e, t, n, i, r)
    case 15:
      return X0(e, t, t.type, t.pendingProps, r)
    case 17:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : Jt(n, i)),
        $a(e, t),
        (t.tag = 1),
        Mt(n) ? ((e = !0), oo(t)) : (e = !1),
        vi(t, r),
        Q0(t, n, i),
        Su(t, n, i, r),
        Cu(null, t, n, !0, e, r)
      )
    case 19:
      return n2(e, t, r)
    case 22:
      return J0(e, t, r)
  }
  throw Error(H(156, t.tag))
}
function x2(e, t) {
  return Zf(e, t)
}
function c3(e, t, r, n) {
  ;(this.tag = e),
    (this.key = r),
    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function Zt(e, t, r, n) {
  return new c3(e, t, r, n)
}
function Lc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function d3(e) {
  if (typeof e == 'function') return Lc(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === ec)) return 11
    if (e === tc) return 14
  }
  return 2
}
function sn(e, t) {
  var r = e.alternate
  return (
    r === null
      ? ((r = Zt(e.tag, t, e.key, e.mode)),
        (r.elementType = e.elementType),
        (r.type = e.type),
        (r.stateNode = e.stateNode),
        (r.alternate = e),
        (e.alternate = r))
      : ((r.pendingProps = t), (r.type = e.type), (r.flags = 0), (r.subtreeFlags = 0), (r.deletions = null)),
    (r.flags = e.flags & 14680064),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  )
}
function Za(e, t, r, n, i, l) {
  var a = 2
  if (((n = e), typeof e == 'function')) Lc(e) && (a = 1)
  else if (typeof e == 'string') a = 5
  else
    e: switch (e) {
      case ei:
        return Mn(r.children, i, l, t)
      case Ju:
        ;(a = 8), (i |= 8)
        break
      case qs:
        return (e = Zt(12, r, t, i | 2)), (e.elementType = qs), (e.lanes = l), e
      case Ks:
        return (e = Zt(13, r, t, i)), (e.elementType = Ks), (e.lanes = l), e
      case Qs:
        return (e = Zt(19, r, t, i)), (e.elementType = Qs), (e.lanes = l), e
      case jf:
        return Qo(r, i, l, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Tf:
              a = 10
              break e
            case Nf:
              a = 9
              break e
            case ec:
              a = 11
              break e
            case tc:
              a = 14
              break e
            case Wr:
              ;(a = 16), (n = null)
              break e
          }
        throw Error(H(130, e == null ? e : typeof e, ''))
    }
  return (t = Zt(a, r, t, i)), (t.elementType = e), (t.type = n), (t.lanes = l), t
}
function Mn(e, t, r, n) {
  return (e = Zt(7, e, n, t)), (e.lanes = r), e
}
function Qo(e, t, r, n) {
  return (e = Zt(22, e, n, t)), (e.elementType = jf), (e.lanes = r), (e.stateNode = { isHidden: !1 }), e
}
function Ls(e, t, r) {
  return (e = Zt(6, e, null, t)), (e.lanes = r), e
}
function Ds(e, t, r) {
  return (
    (t = Zt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }),
    t
  )
}
function f3(e, t, r, n, i) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = vs(0)),
    (this.expirationTimes = vs(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = vs(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null)
}
function Dc(e, t, r, n, i, l, a, o, s) {
  return (
    (e = new f3(e, t, r, o, s)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Zt(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: n,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    }),
    xc(l),
    e
  )
}
function h3(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: Jn,
    key: n == null ? null : '' + n,
    children: e,
    containerInfo: t,
    implementation: r
  }
}
function w2(e) {
  if (!e) return cn
  e = e._reactInternals
  e: {
    if (Un(e) !== e || e.tag !== 1) throw Error(H(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (Mt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(H(171))
  }
  if (e.tag === 1) {
    var r = e.type
    if (Mt(r)) return w0(e, r, t)
  }
  return t
}
function _2(e, t, r, n, i, l, a, o, s) {
  return (
    (e = Dc(r, n, !0, e, i, l, a, o, s)),
    (e.context = w2(null)),
    (r = e.current),
    (n = _t()),
    (i = on(r)),
    (l = zr(n, i)),
    (l.callback = t ?? null),
    ln(r, l, i),
    (e.current.lanes = i),
    Yl(e, i, n),
    Pt(e, n),
    e
  )
}
function Go(e, t, r, n) {
  var i = t.current,
    l = _t(),
    a = on(i)
  return (
    (r = w2(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = zr(l, a)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    (e = ln(i, t, a)),
    e !== null && (ar(e, i, a, l), Ia(e, i, a)),
    a
  )
}
function _o(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function x1(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane
    e.retryLane = r !== 0 && r < t ? r : t
  }
}
function Ac(e, t) {
  x1(e, t), (e = e.alternate) && x1(e, t)
}
function p3() {
  return null
}
var k2 =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function Vc(e) {
  this._internalRoot = e
}
Yo.prototype.render = Vc.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(H(409))
  Go(e, t, null, null)
}
Yo.prototype.unmount = Vc.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    Dn(function () {
      Go(null, e, null, null)
    }),
      (t[Dr] = null)
  }
}
function Yo(e) {
  this._internalRoot = e
}
Yo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Jf()
    e = { blockedOn: null, target: e, priority: t }
    for (var r = 0; r < qr.length && t !== 0 && t < qr[r].priority; r++);
    qr.splice(r, 0, e), r === 0 && t0(e)
  }
}
function Fc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function Xo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function w1() {}
function m3(e, t, r, n, i) {
  if (i) {
    if (typeof n == 'function') {
      var l = n
      n = function () {
        var u = _o(a)
        l.call(u)
      }
    }
    var a = _2(t, n, e, 0, null, !1, !1, '', w1)
    return (e._reactRootContainer = a), (e[Dr] = a.current), El(e.nodeType === 8 ? e.parentNode : e), Dn(), a
  }
  for (; (i = e.lastChild); ) e.removeChild(i)
  if (typeof n == 'function') {
    var o = n
    n = function () {
      var u = _o(s)
      o.call(u)
    }
  }
  var s = Dc(e, 0, !1, null, null, !1, !1, '', w1)
  return (
    (e._reactRootContainer = s),
    (e[Dr] = s.current),
    El(e.nodeType === 8 ? e.parentNode : e),
    Dn(function () {
      Go(t, s, r, n)
    }),
    s
  )
}
function Jo(e, t, r, n, i) {
  var l = r._reactRootContainer
  if (l) {
    var a = l
    if (typeof i == 'function') {
      var o = i
      i = function () {
        var s = _o(a)
        o.call(s)
      }
    }
    Go(t, a, e, i)
  } else a = m3(r, t, e, i, n)
  return _o(a)
}
Yf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var r = rl(t.pendingLanes)
        r !== 0 && (ic(t, r | 1), Pt(t, Ge()), !(Se & 6) && ((Ei = Ge() + 500), gn()))
      }
      break
    case 13:
      Dn(function () {
        var n = Ar(e, 1)
        if (n !== null) {
          var i = _t()
          ar(n, e, 1, i)
        }
      }),
        Ac(e, 1)
  }
}
lc = function (e) {
  if (e.tag === 13) {
    var t = Ar(e, 134217728)
    if (t !== null) {
      var r = _t()
      ar(t, e, 134217728, r)
    }
    Ac(e, 134217728)
  }
}
Xf = function (e) {
  if (e.tag === 13) {
    var t = on(e),
      r = Ar(e, t)
    if (r !== null) {
      var n = _t()
      ar(r, e, t, n)
    }
    Ac(e, t)
  }
}
Jf = function () {
  return Te
}
e0 = function (e, t) {
  var r = Te
  try {
    return (Te = e), t()
  } finally {
    Te = r
  }
}
lu = function (e, t, r) {
  switch (t) {
    case 'input':
      if ((Xs(e, r), (t = r.name), r.type === 'radio' && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode
        for (r = r.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
          var n = r[t]
          if (n !== e && n.form === e.form) {
            var i = $o(n)
            if (!i) throw Error(H(90))
            Pf(n), Xs(n, i)
          }
        }
      }
      break
    case 'textarea':
      zf(e, r)
      break
    case 'select':
      ;(t = r.value), t != null && fi(e, !!r.multiple, t, !1)
  }
}
If = Rc
Uf = Dn
var v3 = { usingClientEntryPoint: !1, Events: [Jl, ii, $o, Vf, Ff, Rc] },
  Ki = {
    findFiberByHostInstance: bn,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom'
  },
  g3 = {
    bundleType: Ki.bundleType,
    version: Ki.version,
    rendererPackageName: Ki.rendererPackageName,
    rendererConfig: Ki.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ir.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Hf(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Ki.findFiberByHostInstance || p3,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426'
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Pa = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!Pa.isDisabled && Pa.supportsFiber)
    try {
      ;(Fo = Pa.inject(g3)), (xr = Pa)
    } catch {}
}
Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = v3
Ut.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!Fc(t)) throw Error(H(200))
  return h3(e, t, null, r)
}
Ut.createRoot = function (e, t) {
  if (!Fc(e)) throw Error(H(299))
  var r = !1,
    n = '',
    i = k2
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Dc(e, 1, !1, null, null, r, !1, n, i)),
    (e[Dr] = t.current),
    El(e.nodeType === 8 ? e.parentNode : e),
    new Vc(t)
  )
}
Ut.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0) throw typeof e.render == 'function' ? Error(H(188)) : ((e = Object.keys(e).join(',')), Error(H(268, e)))
  return (e = Hf(t)), (e = e === null ? null : e.stateNode), e
}
Ut.flushSync = function (e) {
  return Dn(e)
}
Ut.hydrate = function (e, t, r) {
  if (!Xo(t)) throw Error(H(200))
  return Jo(null, e, t, !0, r)
}
Ut.hydrateRoot = function (e, t, r) {
  if (!Fc(e)) throw Error(H(405))
  var n = (r != null && r.hydratedSources) || null,
    i = !1,
    l = '',
    a = k2
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (i = !0),
      r.identifierPrefix !== void 0 && (l = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (a = r.onRecoverableError)),
    (t = _2(t, null, e, 1, r ?? null, i, !1, l, a)),
    (e[Dr] = t.current),
    El(e),
    n)
  )
    for (e = 0; e < n.length; e++)
      (r = n[e]),
        (i = r._getVersion),
        (i = i(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, i])
          : t.mutableSourceEagerHydrationData.push(r, i)
  return new Yo(t)
}
Ut.render = function (e, t, r) {
  if (!Xo(t)) throw Error(H(200))
  return Jo(null, e, t, !1, r)
}
Ut.unmountComponentAtNode = function (e) {
  if (!Xo(e)) throw Error(H(40))
  return e._reactRootContainer
    ? (Dn(function () {
        Jo(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[Dr] = null)
        })
      }),
      !0)
    : !1
}
Ut.unstable_batchedUpdates = Rc
Ut.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!Xo(r)) throw Error(H(200))
  if (e == null || e._reactInternals === void 0) throw Error(H(38))
  return Jo(e, t, r, !1, n)
}
Ut.version = '18.3.1-next-f1338f8080-20240426'
function S2() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S2)
    } catch (e) {
      console.error(e)
    }
}
S2(), (Sf.exports = Ut)
var Ic = Sf.exports
const y3 = Ao(Ic),
  x3 = df({ __proto__: null, default: y3 }, [Ic])
var b2,
  _1 = Ic
;(b2 = _1.createRoot), _1.hydrateRoot
/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ae() {
  return (
    (Ae = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    Ae.apply(this, arguments)
  )
}
var Je
;(function (e) {
  ;(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE')
})(Je || (Je = {}))
const k1 = 'popstate'
function w3(e) {
  e === void 0 && (e = {})
  function t(n, i) {
    let { pathname: l, search: a, hash: o } = n.location
    return Ol('', { pathname: l, search: a, hash: o }, (i.state && i.state.usr) || null, (i.state && i.state.key) || 'default')
  }
  function r(n, i) {
    return typeof i == 'string' ? i : An(i)
  }
  return k3(t, r, null, e)
}
function we(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t)
}
function Ci(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t)
    try {
      throw new Error(t)
    } catch {}
  }
}
function _3() {
  return Math.random().toString(36).substr(2, 8)
}
function S1(e, t) {
  return { usr: e.state, key: e.key, idx: t }
}
function Ol(e, t, r, n) {
  return (
    r === void 0 && (r = null),
    Ae({ pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' }, typeof t == 'string' ? yn(t) : t, {
      state: r,
      key: (t && t.key) || n || _3()
    })
  )
}
function An(e) {
  let { pathname: t = '/', search: r = '', hash: n = '' } = e
  return r && r !== '?' && (t += r.charAt(0) === '?' ? r : '?' + r), n && n !== '#' && (t += n.charAt(0) === '#' ? n : '#' + n), t
}
function yn(e) {
  let t = {}
  if (e) {
    let r = e.indexOf('#')
    r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)))
    let n = e.indexOf('?')
    n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))), e && (t.pathname = e)
  }
  return t
}
function k3(e, t, r, n) {
  n === void 0 && (n = {})
  let { window: i = document.defaultView, v5Compat: l = !1 } = n,
    a = i.history,
    o = Je.Pop,
    s = null,
    u = c()
  u == null && ((u = 0), a.replaceState(Ae({}, a.state, { idx: u }), ''))
  function c() {
    return (a.state || { idx: null }).idx
  }
  function d() {
    o = Je.Pop
    let R = c(),
      p = R == null ? null : R - u
    ;(u = R), s && s({ action: o, location: k.location, delta: p })
  }
  function h(R, p) {
    o = Je.Push
    let f = Ol(k.location, R, p)
    u = c() + 1
    let m = S1(f, u),
      b = k.createHref(f)
    try {
      a.pushState(m, '', b)
    } catch (z) {
      if (z instanceof DOMException && z.name === 'DataCloneError') throw z
      i.location.assign(b)
    }
    l && s && s({ action: o, location: k.location, delta: 1 })
  }
  function v(R, p) {
    o = Je.Replace
    let f = Ol(k.location, R, p)
    u = c()
    let m = S1(f, u),
      b = k.createHref(f)
    a.replaceState(m, '', b), l && s && s({ action: o, location: k.location, delta: 0 })
  }
  function g(R) {
    let p = i.location.origin !== 'null' ? i.location.origin : i.location.href,
      f = typeof R == 'string' ? R : An(R)
    return (f = f.replace(/ $/, '%20')), we(p, 'No window.location.(origin|href) available to create URL for href: ' + f), new URL(f, p)
  }
  let k = {
    get action() {
      return o
    },
    get location() {
      return e(i, a)
    },
    listen(R) {
      if (s) throw new Error('A history only accepts one active listener')
      return (
        i.addEventListener(k1, d),
        (s = R),
        () => {
          i.removeEventListener(k1, d), (s = null)
        }
      )
    },
    createHref(R) {
      return t(i, R)
    },
    createURL: g,
    encodeLocation(R) {
      let p = g(R)
      return { pathname: p.pathname, search: p.search, hash: p.hash }
    },
    push: h,
    replace: v,
    go(R) {
      return a.go(R)
    }
  }
  return k
}
var je
;(function (e) {
  ;(e.data = 'data'), (e.deferred = 'deferred'), (e.redirect = 'redirect'), (e.error = 'error')
})(je || (je = {}))
const S3 = new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children'])
function b3(e) {
  return e.index === !0
}
function ko(e, t, r, n) {
  return (
    r === void 0 && (r = []),
    n === void 0 && (n = {}),
    e.map((i, l) => {
      let a = [...r, String(l)],
        o = typeof i.id == 'string' ? i.id : a.join('-')
      if (
        (we(i.index !== !0 || !i.children, 'Cannot specify children on an index route'),
        we(!n[o], 'Found a route id collision on id "' + o + `".  Route id's must be globally unique within Data Router usages`),
        b3(i))
      ) {
        let s = Ae({}, i, t(i), { id: o })
        return (n[o] = s), s
      } else {
        let s = Ae({}, i, t(i), { id: o, children: void 0 })
        return (n[o] = s), i.children && (s.children = ko(i.children, t, a, n)), s
      }
    })
  )
}
function kn(e, t, r) {
  return r === void 0 && (r = '/'), qa(e, t, r, !1)
}
function qa(e, t, r, n) {
  let i = typeof t == 'string' ? yn(t) : t,
    l = zi(i.pathname || '/', r)
  if (l == null) return null
  let a = E2(e)
  C3(a)
  let o = null
  for (let s = 0; o == null && s < a.length; ++s) {
    let u = A3(l)
    o = L3(a[s], u, n)
  }
  return o
}
function E3(e, t) {
  let { route: r, pathname: n, params: i } = e
  return { id: r.id, pathname: n, params: i, data: t[r.id], handle: r.handle }
}
function E2(e, t, r, n) {
  t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = '')
  let i = (l, a, o) => {
    let s = {
      relativePath: o === void 0 ? l.path || '' : o,
      caseSensitive: l.caseSensitive === !0,
      childrenIndex: a,
      route: l
    }
    s.relativePath.startsWith('/') &&
      (we(
        s.relativePath.startsWith(n),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + n + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (s.relativePath = s.relativePath.slice(n.length)))
    let u = Or([n, s.relativePath]),
      c = r.concat(s)
    l.children &&
      l.children.length > 0 &&
      (we(l.index !== !0, 'Index routes must not have child routes. Please remove ' + ('all child routes from route path "' + u + '".')),
      E2(l.children, t, c, u)),
      !(l.path == null && !l.index) && t.push({ path: u, score: z3(u, l.index), routesMeta: c })
  }
  return (
    e.forEach((l, a) => {
      var o
      if (l.path === '' || !((o = l.path) != null && o.includes('?'))) i(l, a)
      else for (let s of C2(l.path)) i(l, a, s)
    }),
    t
  )
}
function C2(e) {
  let t = e.split('/')
  if (t.length === 0) return []
  let [r, ...n] = t,
    i = r.endsWith('?'),
    l = r.replace(/\?$/, '')
  if (n.length === 0) return i ? [l, ''] : [l]
  let a = C2(n.join('/')),
    o = []
  return (
    o.push(...a.map((s) => (s === '' ? l : [l, s].join('/')))), i && o.push(...a), o.map((s) => (e.startsWith('/') && s === '' ? '/' : s))
  )
}
function C3(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : O3(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex)
        )
  )
}
const T3 = /^:[\w-]+$/,
  N3 = 3,
  j3 = 2,
  M3 = 1,
  P3 = 10,
  R3 = -2,
  b1 = (e) => e === '*'
function z3(e, t) {
  let r = e.split('/'),
    n = r.length
  return r.some(b1) && (n += R3), t && (n += j3), r.filter((i) => !b1(i)).reduce((i, l) => i + (T3.test(l) ? N3 : l === '' ? M3 : P3), n)
}
function O3(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, i) => n === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function L3(e, t, r) {
  r === void 0 && (r = !1)
  let { routesMeta: n } = e,
    i = {},
    l = '/',
    a = []
  for (let o = 0; o < n.length; ++o) {
    let s = n[o],
      u = o === n.length - 1,
      c = l === '/' ? t : t.slice(l.length) || '/',
      d = E1({ path: s.relativePath, caseSensitive: s.caseSensitive, end: u }, c),
      h = s.route
    if (
      (!d && u && r && !n[n.length - 1].route.index && (d = E1({ path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 }, c)), !d)
    )
      return null
    Object.assign(i, d.params),
      a.push({
        params: i,
        pathname: Or([l, d.pathname]),
        pathnameBase: I3(Or([l, d.pathnameBase])),
        route: h
      }),
      d.pathnameBase !== '/' && (l = Or([l, d.pathnameBase]))
  }
  return a
}
function E1(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 })
  let [r, n] = D3(e.path, e.caseSensitive, e.end),
    i = t.match(r)
  if (!i) return null
  let l = i[0],
    a = l.replace(/(.)\/+$/, '$1'),
    o = i.slice(1)
  return {
    params: n.reduce((u, c, d) => {
      let { paramName: h, isOptional: v } = c
      if (h === '*') {
        let k = o[d] || ''
        a = l.slice(0, l.length - k.length).replace(/(.)\/+$/, '$1')
      }
      const g = o[d]
      return v && !g ? (u[h] = void 0) : (u[h] = (g || '').replace(/%2F/g, '/')), u
    }, {}),
    pathname: l,
    pathnameBase: a,
    pattern: e
  }
}
function D3(e, t, r) {
  t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    Ci(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    )
  let n = [],
    i =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(/\/:([\w-]+)(\?)?/g, (a, o, s) => (n.push({ paramName: o, isOptional: s != null }), s ? '/?([^\\/]+)?' : '/([^\\/]+)'))
  return (
    e.endsWith('*')
      ? (n.push({ paramName: '*' }), (i += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : r
        ? (i += '\\/*$')
        : e !== '' && e !== '/' && (i += '(?:(?=\\/|$))'),
    [new RegExp(i, t ? void 0 : 'i'), n]
  )
}
function A3(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/')
  } catch (t) {
    return (
      Ci(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    )
  }
}
function zi(e, t) {
  if (t === '/') return e
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null
  let r = t.endsWith('/') ? t.length - 1 : t.length,
    n = e.charAt(r)
  return n && n !== '/' ? null : e.slice(r) || '/'
}
function V3(e, t) {
  t === void 0 && (t = '/')
  let { pathname: r, search: n = '', hash: i = '' } = typeof e == 'string' ? yn(e) : e
  return {
    pathname: r ? (r.startsWith('/') ? r : F3(r, t)) : t,
    search: U3(n),
    hash: B3(i)
  }
}
function F3(e, t) {
  let r = t.replace(/\/+$/, '').split('/')
  return (
    e.split('/').forEach((i) => {
      i === '..' ? r.length > 1 && r.pop() : i !== '.' && r.push(i)
    }),
    r.length > 1 ? r.join('/') : '/'
  )
}
function As(e, t, r, n) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' + t + '` field [' + JSON.stringify(n) + '].  Please separate it out to the ') +
    ('`to.' + r + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  )
}
function T2(e) {
  return e.filter((t, r) => r === 0 || (t.route.path && t.route.path.length > 0))
}
function Uc(e, t) {
  let r = T2(e)
  return t ? r.map((n, i) => (i === r.length - 1 ? n.pathname : n.pathnameBase)) : r.map((n) => n.pathnameBase)
}
function Bc(e, t, r, n) {
  n === void 0 && (n = !1)
  let i
  typeof e == 'string'
    ? (i = yn(e))
    : ((i = Ae({}, e)),
      we(!i.pathname || !i.pathname.includes('?'), As('?', 'pathname', 'search', i)),
      we(!i.pathname || !i.pathname.includes('#'), As('#', 'pathname', 'hash', i)),
      we(!i.search || !i.search.includes('#'), As('#', 'search', 'hash', i)))
  let l = e === '' || i.pathname === '',
    a = l ? '/' : i.pathname,
    o
  if (a == null) o = r
  else {
    let d = t.length - 1
    if (!n && a.startsWith('..')) {
      let h = a.split('/')
      for (; h[0] === '..'; ) h.shift(), (d -= 1)
      i.pathname = h.join('/')
    }
    o = d >= 0 ? t[d] : '/'
  }
  let s = V3(i, o),
    u = a && a !== '/' && a.endsWith('/'),
    c = (l || a === '.') && r.endsWith('/')
  return !s.pathname.endsWith('/') && (u || c) && (s.pathname += '/'), s
}
const Or = (e) => e.join('/').replace(/\/\/+/g, '/'),
  I3 = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  U3 = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  B3 = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e)
class So {
  constructor(t, r, n, i) {
    i === void 0 && (i = !1),
      (this.status = t),
      (this.statusText = r || ''),
      (this.internal = i),
      n instanceof Error ? ((this.data = n.toString()), (this.error = n)) : (this.data = n)
  }
}
function es(e) {
  return e != null && typeof e.status == 'number' && typeof e.statusText == 'string' && typeof e.internal == 'boolean' && 'data' in e
}
const N2 = ['post', 'put', 'patch', 'delete'],
  $3 = new Set(N2),
  H3 = ['get', ...N2],
  W3 = new Set(H3),
  Z3 = new Set([301, 302, 303, 307, 308]),
  q3 = new Set([307, 308]),
  Vs = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
  },
  K3 = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
  },
  Qi = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  $c = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Q3 = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  j2 = 'remix-router-transitions'
function G3(e) {
  const t = e.window ? e.window : typeof window < 'u' ? window : void 0,
    r = typeof t < 'u' && typeof t.document < 'u' && typeof t.document.createElement < 'u',
    n = !r
  we(e.routes.length > 0, 'You must provide a non-empty routes array to createRouter')
  let i
  if (e.mapRouteProperties) i = e.mapRouteProperties
  else if (e.detectErrorBoundary) {
    let w = e.detectErrorBoundary
    i = (S) => ({ hasErrorBoundary: w(S) })
  } else i = Q3
  let l = {},
    a = ko(e.routes, i, void 0, l),
    o,
    s = e.basename || '/',
    u = e.dataStrategy || e4,
    c = e.patchRoutesOnNavigation,
    d = Ae(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        v7_skipActionErrorRevalidation: !1
      },
      e.future
    ),
    h = null,
    v = new Set(),
    g = null,
    k = null,
    R = null,
    p = e.hydrationData != null,
    f = kn(a, e.history.location, s),
    m = null
  if (f == null && !c) {
    let w = Et(404, { pathname: e.history.location.pathname }),
      { matches: S, route: N } = D1(a)
    ;(f = S), (m = { [N.id]: w })
  }
  f && !e.hydrationData && da(f, a, e.history.location.pathname).active && (f = null)
  let b
  if (f)
    if (f.some((w) => w.route.lazy)) b = !1
    else if (!f.some((w) => w.route.loader)) b = !0
    else if (d.v7_partialHydration) {
      let w = e.hydrationData ? e.hydrationData.loaderData : null,
        S = e.hydrationData ? e.hydrationData.errors : null
      if (S) {
        let N = f.findIndex((V) => S[V.route.id] !== void 0)
        b = f.slice(0, N + 1).every((V) => !Fu(V.route, w, S))
      } else b = f.every((N) => !Fu(N.route, w, S))
    } else b = e.hydrationData != null
  else if (((b = !1), (f = []), d.v7_partialHydration)) {
    let w = da(null, a, e.history.location.pathname)
    w.active && w.matches && (f = w.matches)
  }
  let z,
    _ = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: f,
      initialized: b,
      navigation: Vs,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || m,
      fetchers: new Map(),
      blockers: new Map()
    },
    Z = Je.Pop,
    A = !1,
    T,
    M = !1,
    q = new Map(),
    C = null,
    L = !1,
    U = !1,
    F = [],
    X = new Set(),
    O = new Map(),
    j = 0,
    B = -1,
    I = new Map(),
    ce = new Set(),
    be = new Map(),
    Rt = new Map(),
    Ke = new Set(),
    Oe = new Map(),
    Pe = new Map(),
    at
  function br() {
    if (
      ((h = e.history.listen((w) => {
        let { action: S, location: N, delta: V } = w
        if (at) {
          at(), (at = void 0)
          return
        }
        Ci(
          Pe.size === 0 || V != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
        )
        let re = ud({
          currentLocation: _.location,
          nextLocation: N,
          historyAction: S
        })
        if (re && V != null) {
          let se = new Promise((he) => {
            at = he
          })
          e.history.go(V * -1),
            ca(re, {
              state: 'blocked',
              location: N,
              proceed() {
                ca(re, {
                  state: 'proceeding',
                  proceed: void 0,
                  reset: void 0,
                  location: N
                }),
                  se.then(() => e.history.go(V))
              },
              reset() {
                let he = new Map(_.blockers)
                he.set(re, Qi), Fe({ blockers: he })
              }
            })
          return
        }
        return Ur(S, N)
      })),
      r)
    ) {
      p4(t, q)
      let w = () => m4(t, q)
      t.addEventListener('pagehide', w), (C = () => t.removeEventListener('pagehide', w))
    }
    return _.initialized || Ur(Je.Pop, _.location, { initialHydration: !0 }), z
  }
  function yt() {
    h && h(), C && C(), v.clear(), T && T.abort(), _.fetchers.forEach((w, S) => Br(S)), _.blockers.forEach((w, S) => sd(S))
  }
  function Yt(w) {
    return v.add(w), () => v.delete(w)
  }
  function Fe(w, S) {
    S === void 0 && (S = {}), (_ = Ae({}, _, w))
    let N = [],
      V = []
    d.v7_fetcherPersist &&
      _.fetchers.forEach((re, se) => {
        re.state === 'idle' && (Ke.has(se) ? V.push(se) : N.push(se))
      }),
      [...v].forEach((re) =>
        re(_, {
          deletedFetchers: V,
          viewTransitionOpts: S.viewTransitionOpts,
          flushSync: S.flushSync === !0
        })
      ),
      d.v7_fetcherPersist && (N.forEach((re) => _.fetchers.delete(re)), V.forEach((re) => Br(re)))
  }
  function cr(w, S, N) {
    var V, re
    let { flushSync: se } = N === void 0 ? {} : N,
      he =
        _.actionData != null &&
        _.navigation.formMethod != null &&
        tr(_.navigation.formMethod) &&
        _.navigation.state === 'loading' &&
        ((V = w.state) == null ? void 0 : V._isRedirect) !== !0,
      ie
    S.actionData ? (Object.keys(S.actionData).length > 0 ? (ie = S.actionData) : (ie = null)) : he ? (ie = _.actionData) : (ie = null)
    let le = S.loaderData ? O1(_.loaderData, S.loaderData, S.matches || [], S.errors) : _.loaderData,
      ne = _.blockers
    ne.size > 0 && ((ne = new Map(ne)), ne.forEach((ke, st) => ne.set(st, Qi)))
    let ue =
      A === !0 ||
      (_.navigation.formMethod != null && tr(_.navigation.formMethod) && ((re = w.state) == null ? void 0 : re._isRedirect) !== !0)
    o && ((a = o), (o = void 0)),
      L || Z === Je.Pop || (Z === Je.Push ? e.history.push(w, w.state) : Z === Je.Replace && e.history.replace(w, w.state))
    let xe
    if (Z === Je.Pop) {
      let ke = q.get(_.location.pathname)
      ke && ke.has(w.pathname)
        ? (xe = { currentLocation: _.location, nextLocation: w })
        : q.has(w.pathname) && (xe = { currentLocation: w, nextLocation: _.location })
    } else if (M) {
      let ke = q.get(_.location.pathname)
      ke ? ke.add(w.pathname) : ((ke = new Set([w.pathname])), q.set(_.location.pathname, ke)),
        (xe = { currentLocation: _.location, nextLocation: w })
    }
    Fe(
      Ae({}, S, {
        actionData: ie,
        loaderData: le,
        historyAction: Z,
        location: w,
        initialized: !0,
        navigation: Vs,
        revalidation: 'idle',
        restoreScrollPosition: dd(w, S.matches || _.matches),
        preventScrollReset: ue,
        blockers: ne
      }),
      { viewTransitionOpts: xe, flushSync: se === !0 }
    ),
      (Z = Je.Pop),
      (A = !1),
      (M = !1),
      (L = !1),
      (U = !1),
      (F = [])
  }
  async function Er(w, S) {
    if (typeof w == 'number') {
      e.history.go(w)
      return
    }
    let N = Vu(
        _.location,
        _.matches,
        s,
        d.v7_prependBasename,
        w,
        d.v7_relativeSplatPath,
        S == null ? void 0 : S.fromRouteId,
        S == null ? void 0 : S.relative
      ),
      { path: V, submission: re, error: se } = C1(d.v7_normalizeFormMethod, !1, N, S),
      he = _.location,
      ie = Ol(_.location, V, S && S.state)
    ie = Ae({}, ie, e.history.encodeLocation(ie))
    let le = S && S.replace != null ? S.replace : void 0,
      ne = Je.Push
    le === !0
      ? (ne = Je.Replace)
      : le === !1 || (re != null && tr(re.formMethod) && re.formAction === _.location.pathname + _.location.search && (ne = Je.Replace))
    let ue = S && 'preventScrollReset' in S ? S.preventScrollReset === !0 : void 0,
      xe = (S && S.flushSync) === !0,
      ke = ud({ currentLocation: he, nextLocation: ie, historyAction: ne })
    if (ke) {
      ca(ke, {
        state: 'blocked',
        location: ie,
        proceed() {
          ca(ke, {
            state: 'proceeding',
            proceed: void 0,
            reset: void 0,
            location: ie
          }),
            Er(w, S)
        },
        reset() {
          let st = new Map(_.blockers)
          st.set(ke, Qi), Fe({ blockers: st })
        }
      })
      return
    }
    return await Ur(ne, ie, {
      submission: re,
      pendingError: se,
      preventScrollReset: ue,
      replace: S && S.replace,
      enableViewTransition: S && S.viewTransition,
      flushSync: xe
    })
  }
  function oa() {
    if ((He(), Fe({ revalidation: 'loading' }), _.navigation.state !== 'submitting')) {
      if (_.navigation.state === 'idle') {
        Ur(_.historyAction, _.location, { startUninterruptedRevalidation: !0 })
        return
      }
      Ur(Z || _.historyAction, _.navigation.location, {
        overrideNavigation: _.navigation,
        enableViewTransition: M === !0
      })
    }
  }
  async function Ur(w, S, N) {
    T && T.abort(),
      (T = null),
      (Z = w),
      (L = (N && N.startUninterruptedRevalidation) === !0),
      Bh(_.location, _.matches),
      (A = (N && N.preventScrollReset) === !0),
      (M = (N && N.enableViewTransition) === !0)
    let V = o || a,
      re = N && N.overrideNavigation,
      se = kn(V, S, s),
      he = (N && N.flushSync) === !0,
      ie = da(se, V, S.pathname)
    if ((ie.active && ie.matches && (se = ie.matches), !se)) {
      let { error: Re, notFoundMatches: Ce, route: We } = ss(S.pathname)
      cr(S, { matches: Ce, loaderData: {}, errors: { [We.id]: Re } }, { flushSync: he })
      return
    }
    if (_.initialized && !U && a4(_.location, S) && !(N && N.submission && tr(N.submission.formMethod))) {
      cr(S, { matches: se }, { flushSync: he })
      return
    }
    T = new AbortController()
    let le = Qn(e.history, S, T.signal, N && N.submission),
      ne
    if (N && N.pendingError) ne = [Sn(se).route.id, { type: je.error, error: N.pendingError }]
    else if (N && N.submission && tr(N.submission.formMethod)) {
      let Re = await ad(le, S, N.submission, se, ie.active, {
        replace: N.replace,
        flushSync: he
      })
      if (Re.shortCircuited) return
      if (Re.pendingActionResult) {
        let [Ce, We] = Re.pendingActionResult
        if (Lt(We) && es(We.error) && We.error.status === 404) {
          ;(T = null),
            cr(S, {
              matches: Re.matches,
              loaderData: {},
              errors: { [Ce]: We.error }
            })
          return
        }
      }
      ;(se = Re.matches || se),
        (ne = Re.pendingActionResult),
        (re = Fs(S, N.submission)),
        (he = !1),
        (ie.active = !1),
        (le = Qn(e.history, le.url, le.signal))
    }
    let {
      shortCircuited: ue,
      matches: xe,
      loaderData: ke,
      errors: st
    } = await od(
      le,
      S,
      se,
      ie.active,
      re,
      N && N.submission,
      N && N.fetcherSubmission,
      N && N.replace,
      N && N.initialHydration === !0,
      he,
      ne
    )
    ue || ((T = null), cr(S, Ae({ matches: xe || se }, L1(ne), { loaderData: ke, errors: st })))
  }
  async function ad(w, S, N, V, re, se) {
    se === void 0 && (se = {}), He()
    let he = f4(S, N)
    if ((Fe({ navigation: he }, { flushSync: se.flushSync === !0 }), re)) {
      let ne = await fa(V, S.pathname, w.signal)
      if (ne.type === 'aborted') return { shortCircuited: !0 }
      if (ne.type === 'error') {
        let ue = Sn(ne.partialMatches).route.id
        return {
          matches: ne.partialMatches,
          pendingActionResult: [ue, { type: je.error, error: ne.error }]
        }
      } else if (ne.matches) V = ne.matches
      else {
        let { notFoundMatches: ue, error: xe, route: ke } = ss(S.pathname)
        return {
          matches: ue,
          pendingActionResult: [ke.id, { type: je.error, error: xe }]
        }
      }
    }
    let ie,
      le = il(V, S)
    if (!le.route.action && !le.route.lazy)
      ie = {
        type: je.error,
        error: Et(405, {
          method: w.method,
          pathname: S.pathname,
          routeId: le.route.id
        })
      }
    else if (((ie = (await ae('action', _, w, [le], V, null))[le.route.id]), w.signal.aborted)) return { shortCircuited: !0 }
    if (Tn(ie)) {
      let ne
      return (
        se && se.replace != null
          ? (ne = se.replace)
          : (ne = P1(ie.response.headers.get('Location'), new URL(w.url), s) === _.location.pathname + _.location.search),
        await $(w, ie, !0, { submission: N, replace: ne }),
        { shortCircuited: !0 }
      )
    }
    if (Jr(ie)) throw Et(400, { type: 'defer-action' })
    if (Lt(ie)) {
      let ne = Sn(V, le.route.id)
      return (se && se.replace) !== !0 && (Z = Je.Push), { matches: V, pendingActionResult: [ne.route.id, ie] }
    }
    return { matches: V, pendingActionResult: [le.route.id, ie] }
  }
  async function od(w, S, N, V, re, se, he, ie, le, ne, ue) {
    let xe = re || Fs(S, se),
      ke = se || he || V1(xe),
      st = !L && (!d.v7_partialHydration || !le)
    if (V) {
      if (st) {
        let Ze = y(ue)
        Fe(Ae({ navigation: xe }, Ze !== void 0 ? { actionData: Ze } : {}), {
          flushSync: ne
        })
      }
      let Ee = await fa(N, S.pathname, w.signal)
      if (Ee.type === 'aborted') return { shortCircuited: !0 }
      if (Ee.type === 'error') {
        let Ze = Sn(Ee.partialMatches).route.id
        return {
          matches: Ee.partialMatches,
          loaderData: {},
          errors: { [Ze]: Ee.error }
        }
      } else if (Ee.matches) N = Ee.matches
      else {
        let { error: Ze, notFoundMatches: Zn, route: Ii } = ss(S.pathname)
        return { matches: Zn, loaderData: {}, errors: { [Ii.id]: Ze } }
      }
    }
    let Re = o || a,
      [Ce, We] = N1(
        e.history,
        _,
        N,
        ke,
        S,
        d.v7_partialHydration && le === !0,
        d.v7_skipActionErrorRevalidation,
        U,
        F,
        X,
        Ke,
        be,
        ce,
        Re,
        s,
        ue
      )
    if (
      (us((Ee) => !(N && N.some((Ze) => Ze.route.id === Ee)) || (Ce && Ce.some((Ze) => Ze.route.id === Ee))),
      (B = ++j),
      Ce.length === 0 && We.length === 0)
    ) {
      let Ee = ua()
      return (
        cr(
          S,
          Ae(
            {
              matches: N,
              loaderData: {},
              errors: ue && Lt(ue[1]) ? { [ue[0]]: ue[1].error } : null
            },
            L1(ue),
            Ee ? { fetchers: new Map(_.fetchers) } : {}
          ),
          { flushSync: ne }
        ),
        { shortCircuited: !0 }
      )
    }
    if (st) {
      let Ee = {}
      if (!V) {
        Ee.navigation = xe
        let Ze = y(ue)
        Ze !== void 0 && (Ee.actionData = Ze)
      }
      We.length > 0 && (Ee.fetchers = E(We)), Fe(Ee, { flushSync: ne })
    }
    We.forEach((Ee) => {
      dr(Ee.key), Ee.controller && O.set(Ee.key, Ee.controller)
    })
    let Wn = () => We.forEach((Ee) => dr(Ee.key))
    T && T.signal.addEventListener('abort', Wn)
    let { loaderResults: Vi, fetcherResults: Cr } = await me(_, N, Ce, We, w)
    if (w.signal.aborted) return { shortCircuited: !0 }
    T && T.signal.removeEventListener('abort', Wn), We.forEach((Ee) => O.delete(Ee.key))
    let fr = Ra(Vi)
    if (fr) return await $(w, fr.result, !0, { replace: ie }), { shortCircuited: !0 }
    if (((fr = Ra(Cr)), fr)) return ce.add(fr.key), await $(w, fr.result, !0, { replace: ie }), { shortCircuited: !0 }
    let { loaderData: cs, errors: Fi } = z1(_, N, Vi, ue, We, Cr, Oe)
    Oe.forEach((Ee, Ze) => {
      Ee.subscribe((Zn) => {
        ;(Zn || Ee.done) && Oe.delete(Ze)
      })
    }),
      d.v7_partialHydration && le && _.errors && (Fi = Ae({}, _.errors, Fi))
    let xn = ua(),
      ha = Ai(B),
      pa = xn || ha || We.length > 0
    return Ae({ matches: N, loaderData: cs, errors: Fi }, pa ? { fetchers: new Map(_.fetchers) } : {})
  }
  function y(w) {
    if (w && !Lt(w[1])) return { [w[0]]: w[1].data }
    if (_.actionData) return Object.keys(_.actionData).length === 0 ? null : _.actionData
  }
  function E(w) {
    return (
      w.forEach((S) => {
        let N = _.fetchers.get(S.key),
          V = Gi(void 0, N ? N.data : void 0)
        _.fetchers.set(S.key, V)
      }),
      new Map(_.fetchers)
    )
  }
  function P(w, S, N, V) {
    if (n)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      )
    dr(w)
    let re = (V && V.flushSync) === !0,
      se = o || a,
      he = Vu(_.location, _.matches, s, d.v7_prependBasename, N, d.v7_relativeSplatPath, S, V == null ? void 0 : V.relative),
      ie = kn(se, he, s),
      le = da(ie, se, he)
    if ((le.active && le.matches && (ie = le.matches), !ie)) {
      ot(w, S, Et(404, { pathname: he }), { flushSync: re })
      return
    }
    let { path: ne, submission: ue, error: xe } = C1(d.v7_normalizeFormMethod, !0, he, V)
    if (xe) {
      ot(w, S, xe, { flushSync: re })
      return
    }
    let ke = il(ie, ne),
      st = (V && V.preventScrollReset) === !0
    if (ue && tr(ue.formMethod)) {
      Q(w, S, ne, ke, ie, le.active, re, st, ue)
      return
    }
    be.set(w, { routeId: S, path: ne }), K(w, S, ne, ke, ie, le.active, re, st, ue)
  }
  async function Q(w, S, N, V, re, se, he, ie, le) {
    He(), be.delete(w)
    function ne(Xe) {
      if (!Xe.route.action && !Xe.route.lazy) {
        let qn = Et(405, { method: le.formMethod, pathname: N, routeId: S })
        return ot(w, S, qn, { flushSync: he }), !0
      }
      return !1
    }
    if (!se && ne(V)) return
    let ue = _.fetchers.get(w)
    Me(w, h4(le, ue), { flushSync: he })
    let xe = new AbortController(),
      ke = Qn(e.history, N, xe.signal, le)
    if (se) {
      let Xe = await fa(re, N, ke.signal)
      if (Xe.type === 'aborted') return
      if (Xe.type === 'error') {
        ot(w, S, Xe.error, { flushSync: he })
        return
      } else if (Xe.matches) {
        if (((re = Xe.matches), (V = il(re, N)), ne(V))) return
      } else {
        ot(w, S, Et(404, { pathname: N }), { flushSync: he })
        return
      }
    }
    O.set(w, xe)
    let st = j,
      Ce = (await ae('action', _, ke, [V], re, w))[V.route.id]
    if (ke.signal.aborted) {
      O.get(w) === xe && O.delete(w)
      return
    }
    if (d.v7_fetcherPersist && Ke.has(w)) {
      if (Tn(Ce) || Lt(Ce)) {
        Me(w, Hr(void 0))
        return
      }
    } else {
      if (Tn(Ce))
        if ((O.delete(w), B > st)) {
          Me(w, Hr(void 0))
          return
        } else return ce.add(w), Me(w, Gi(le)), $(ke, Ce, !1, { fetcherSubmission: le, preventScrollReset: ie })
      if (Lt(Ce)) {
        ot(w, S, Ce.error)
        return
      }
    }
    if (Jr(Ce)) throw Et(400, { type: 'defer-action' })
    let We = _.navigation.location || _.location,
      Wn = Qn(e.history, We, xe.signal),
      Vi = o || a,
      Cr = _.navigation.state !== 'idle' ? kn(Vi, _.navigation.location, s) : _.matches
    we(Cr, "Didn't find any matches after fetcher action")
    let fr = ++j
    I.set(w, fr)
    let cs = Gi(le, Ce.data)
    _.fetchers.set(w, cs)
    let [Fi, xn] = N1(e.history, _, Cr, le, We, !1, d.v7_skipActionErrorRevalidation, U, F, X, Ke, be, ce, Vi, s, [V.route.id, Ce])
    xn
      .filter((Xe) => Xe.key !== w)
      .forEach((Xe) => {
        let qn = Xe.key,
          fd = _.fetchers.get(qn),
          Wh = Gi(void 0, fd ? fd.data : void 0)
        _.fetchers.set(qn, Wh), dr(qn), Xe.controller && O.set(qn, Xe.controller)
      }),
      Fe({ fetchers: new Map(_.fetchers) })
    let ha = () => xn.forEach((Xe) => dr(Xe.key))
    xe.signal.addEventListener('abort', ha)
    let { loaderResults: pa, fetcherResults: Ee } = await me(_, Cr, Fi, xn, Wn)
    if (xe.signal.aborted) return
    xe.signal.removeEventListener('abort', ha), I.delete(w), O.delete(w), xn.forEach((Xe) => O.delete(Xe.key))
    let Ze = Ra(pa)
    if (Ze) return $(Wn, Ze.result, !1, { preventScrollReset: ie })
    if (((Ze = Ra(Ee)), Ze)) return ce.add(Ze.key), $(Wn, Ze.result, !1, { preventScrollReset: ie })
    let { loaderData: Zn, errors: Ii } = z1(_, Cr, pa, void 0, xn, Ee, Oe)
    if (_.fetchers.has(w)) {
      let Xe = Hr(Ce.data)
      _.fetchers.set(w, Xe)
    }
    Ai(fr),
      _.navigation.state === 'loading' && fr > B
        ? (we(Z, 'Expected pending action'),
          T && T.abort(),
          cr(_.navigation.location, {
            matches: Cr,
            loaderData: Zn,
            errors: Ii,
            fetchers: new Map(_.fetchers)
          }))
        : (Fe({
            errors: Ii,
            loaderData: O1(_.loaderData, Zn, Cr, Ii),
            fetchers: new Map(_.fetchers)
          }),
          (U = !1))
  }
  async function K(w, S, N, V, re, se, he, ie, le) {
    let ne = _.fetchers.get(w)
    Me(w, Gi(le, ne ? ne.data : void 0), { flushSync: he })
    let ue = new AbortController(),
      xe = Qn(e.history, N, ue.signal)
    if (se) {
      let Ce = await fa(re, N, xe.signal)
      if (Ce.type === 'aborted') return
      if (Ce.type === 'error') {
        ot(w, S, Ce.error, { flushSync: he })
        return
      } else if (Ce.matches) (re = Ce.matches), (V = il(re, N))
      else {
        ot(w, S, Et(404, { pathname: N }), { flushSync: he })
        return
      }
    }
    O.set(w, ue)
    let ke = j,
      Re = (await ae('loader', _, xe, [V], re, w))[V.route.id]
    if ((Jr(Re) && (Re = (await Hc(Re, xe.signal, !0)) || Re), O.get(w) === ue && O.delete(w), !xe.signal.aborted)) {
      if (Ke.has(w)) {
        Me(w, Hr(void 0))
        return
      }
      if (Tn(Re))
        if (B > ke) {
          Me(w, Hr(void 0))
          return
        } else {
          ce.add(w), await $(xe, Re, !1, { preventScrollReset: ie })
          return
        }
      if (Lt(Re)) {
        ot(w, S, Re.error)
        return
      }
      we(!Jr(Re), 'Unhandled fetcher deferred data'), Me(w, Hr(Re.data))
    }
  }
  async function $(w, S, N, V) {
    let { submission: re, fetcherSubmission: se, preventScrollReset: he, replace: ie } = V === void 0 ? {} : V
    S.response.headers.has('X-Remix-Revalidate') && (U = !0)
    let le = S.response.headers.get('Location')
    we(le, 'Expected a Location header on the redirect Response'), (le = P1(le, new URL(w.url), s))
    let ne = Ol(_.location, le, { _isRedirect: !0 })
    if (r) {
      let Ce = !1
      if (S.response.headers.has('X-Remix-Reload-Document')) Ce = !0
      else if ($c.test(le)) {
        const We = e.history.createURL(le)
        Ce = We.origin !== t.location.origin || zi(We.pathname, s) == null
      }
      if (Ce) {
        ie ? t.location.replace(le) : t.location.assign(le)
        return
      }
    }
    T = null
    let ue = ie === !0 || S.response.headers.has('X-Remix-Replace') ? Je.Replace : Je.Push,
      { formMethod: xe, formAction: ke, formEncType: st } = _.navigation
    !re && !se && xe && ke && st && (re = V1(_.navigation))
    let Re = re || se
    if (q3.has(S.response.status) && Re && tr(Re.formMethod))
      await Ur(ue, ne, {
        submission: Ae({}, Re, { formAction: le }),
        preventScrollReset: he || A,
        enableViewTransition: N ? M : void 0
      })
    else {
      let Ce = Fs(ne, re)
      await Ur(ue, ne, {
        overrideNavigation: Ce,
        fetcherSubmission: se,
        preventScrollReset: he || A,
        enableViewTransition: N ? M : void 0
      })
    }
  }
  async function ae(w, S, N, V, re, se) {
    let he,
      ie = {}
    try {
      he = await t4(u, w, S, N, V, re, se, l, i)
    } catch (le) {
      return (
        V.forEach((ne) => {
          ie[ne.route.id] = { type: je.error, error: le }
        }),
        ie
      )
    }
    for (let [le, ne] of Object.entries(he))
      if (o4(ne)) {
        let ue = ne.result
        ie[le] = {
          type: je.redirect,
          response: i4(ue, N, le, re, s, d.v7_relativeSplatPath)
        }
      } else ie[le] = await n4(ne)
    return ie
  }
  async function me(w, S, N, V, re) {
    let se = w.matches,
      he = ae('loader', w, re, N, S, null),
      ie = Promise.all(
        V.map(async (ue) => {
          if (ue.matches && ue.match && ue.controller) {
            let ke = (await ae('loader', w, Qn(e.history, ue.path, ue.controller.signal), [ue.match], ue.matches, ue.key))[
              ue.match.route.id
            ]
            return { [ue.key]: ke }
          } else
            return Promise.resolve({
              [ue.key]: {
                type: je.error,
                error: Et(404, { pathname: ue.path })
              }
            })
        })
      ),
      le = await he,
      ne = (await ie).reduce((ue, xe) => Object.assign(ue, xe), {})
    return await Promise.all([c4(S, le, re.signal, se, w.loaderData), d4(S, ne, V)]), { loaderResults: le, fetcherResults: ne }
  }
  function He() {
    ;(U = !0),
      F.push(...us()),
      be.forEach((w, S) => {
        O.has(S) && X.add(S), dr(S)
      })
  }
  function Me(w, S, N) {
    N === void 0 && (N = {}), _.fetchers.set(w, S), Fe({ fetchers: new Map(_.fetchers) }, { flushSync: (N && N.flushSync) === !0 })
  }
  function ot(w, S, N, V) {
    V === void 0 && (V = {})
    let re = Sn(_.matches, S)
    Br(w), Fe({ errors: { [re.route.id]: N }, fetchers: new Map(_.fetchers) }, { flushSync: (V && V.flushSync) === !0 })
  }
  function sa(w) {
    return d.v7_fetcherPersist && (Rt.set(w, (Rt.get(w) || 0) + 1), Ke.has(w) && Ke.delete(w)), _.fetchers.get(w) || K3
  }
  function Br(w) {
    let S = _.fetchers.get(w)
    O.has(w) && !(S && S.state === 'loading' && I.has(w)) && dr(w),
      be.delete(w),
      I.delete(w),
      ce.delete(w),
      Ke.delete(w),
      X.delete(w),
      _.fetchers.delete(w)
  }
  function Li(w) {
    if (d.v7_fetcherPersist) {
      let S = (Rt.get(w) || 0) - 1
      S <= 0 ? (Rt.delete(w), Ke.add(w)) : Rt.set(w, S)
    } else Br(w)
    Fe({ fetchers: new Map(_.fetchers) })
  }
  function dr(w) {
    let S = O.get(w)
    S && (S.abort(), O.delete(w))
  }
  function Di(w) {
    for (let S of w) {
      let N = sa(S),
        V = Hr(N.data)
      _.fetchers.set(S, V)
    }
  }
  function ua() {
    let w = [],
      S = !1
    for (let N of ce) {
      let V = _.fetchers.get(N)
      we(V, 'Expected fetcher: ' + N), V.state === 'loading' && (ce.delete(N), w.push(N), (S = !0))
    }
    return Di(w), S
  }
  function Ai(w) {
    let S = []
    for (let [N, V] of I)
      if (V < w) {
        let re = _.fetchers.get(N)
        we(re, 'Expected fetcher: ' + N), re.state === 'loading' && (dr(N), I.delete(N), S.push(N))
      }
    return Di(S), S.length > 0
  }
  function Ih(w, S) {
    let N = _.blockers.get(w) || Qi
    return Pe.get(w) !== S && Pe.set(w, S), N
  }
  function sd(w) {
    _.blockers.delete(w), Pe.delete(w)
  }
  function ca(w, S) {
    let N = _.blockers.get(w) || Qi
    we(
      (N.state === 'unblocked' && S.state === 'blocked') ||
        (N.state === 'blocked' && S.state === 'blocked') ||
        (N.state === 'blocked' && S.state === 'proceeding') ||
        (N.state === 'blocked' && S.state === 'unblocked') ||
        (N.state === 'proceeding' && S.state === 'unblocked'),
      'Invalid blocker state transition: ' + N.state + ' -> ' + S.state
    )
    let V = new Map(_.blockers)
    V.set(w, S), Fe({ blockers: V })
  }
  function ud(w) {
    let { currentLocation: S, nextLocation: N, historyAction: V } = w
    if (Pe.size === 0) return
    Pe.size > 1 && Ci(!1, 'A router only supports one blocker at a time')
    let re = Array.from(Pe.entries()),
      [se, he] = re[re.length - 1],
      ie = _.blockers.get(se)
    if (!(ie && ie.state === 'proceeding') && he({ currentLocation: S, nextLocation: N, historyAction: V })) return se
  }
  function ss(w) {
    let S = Et(404, { pathname: w }),
      N = o || a,
      { matches: V, route: re } = D1(N)
    return us(), { notFoundMatches: V, route: re, error: S }
  }
  function us(w) {
    let S = []
    return (
      Oe.forEach((N, V) => {
        ;(!w || w(V)) && (N.cancel(), S.push(V), Oe.delete(V))
      }),
      S
    )
  }
  function Uh(w, S, N) {
    if (((g = w), (R = S), (k = N || null), !p && _.navigation === Vs)) {
      p = !0
      let V = dd(_.location, _.matches)
      V != null && Fe({ restoreScrollPosition: V })
    }
    return () => {
      ;(g = null), (R = null), (k = null)
    }
  }
  function cd(w, S) {
    return (
      (k &&
        k(
          w,
          S.map((V) => E3(V, _.loaderData))
        )) ||
      w.key
    )
  }
  function Bh(w, S) {
    if (g && R) {
      let N = cd(w, S)
      g[N] = R()
    }
  }
  function dd(w, S) {
    if (g) {
      let N = cd(w, S),
        V = g[N]
      if (typeof V == 'number') return V
    }
    return null
  }
  function da(w, S, N) {
    if (c)
      if (w) {
        if (Object.keys(w[0].params).length > 0) return { active: !0, matches: qa(S, N, s, !0) }
      } else return { active: !0, matches: qa(S, N, s, !0) || [] }
    return { active: !1, matches: null }
  }
  async function fa(w, S, N) {
    if (!c) return { type: 'success', matches: w }
    let V = w
    for (;;) {
      let re = o == null,
        se = o || a,
        he = l
      try {
        await c({
          path: S,
          matches: V,
          patch: (ne, ue) => {
            N.aborted || M1(ne, ue, se, he, i)
          }
        })
      } catch (ne) {
        return { type: 'error', error: ne, partialMatches: V }
      } finally {
        re && !N.aborted && (a = [...a])
      }
      if (N.aborted) return { type: 'aborted' }
      let ie = kn(se, S, s)
      if (ie) return { type: 'success', matches: ie }
      let le = qa(se, S, s, !0)
      if (!le || (V.length === le.length && V.every((ne, ue) => ne.route.id === le[ue].route.id))) return { type: 'success', matches: null }
      V = le
    }
  }
  function $h(w) {
    ;(l = {}), (o = ko(w, i, void 0, l))
  }
  function Hh(w, S) {
    let N = o == null
    M1(w, S, o || a, l, i), N && ((a = [...a]), Fe({}))
  }
  return (
    (z = {
      get basename() {
        return s
      },
      get future() {
        return d
      },
      get state() {
        return _
      },
      get routes() {
        return a
      },
      get window() {
        return t
      },
      initialize: br,
      subscribe: Yt,
      enableScrollRestoration: Uh,
      navigate: Er,
      fetch: P,
      revalidate: oa,
      createHref: (w) => e.history.createHref(w),
      encodeLocation: (w) => e.history.encodeLocation(w),
      getFetcher: sa,
      deleteFetcher: Li,
      dispose: yt,
      getBlocker: Ih,
      deleteBlocker: sd,
      patchRoutes: Hh,
      _internalFetchControllers: O,
      _internalActiveDeferreds: Oe,
      _internalSetRoutes: $h
    }),
    z
  )
}
function Y3(e) {
  return e != null && (('formData' in e && e.formData != null) || ('body' in e && e.body !== void 0))
}
function Vu(e, t, r, n, i, l, a, o) {
  let s, u
  if (a) {
    s = []
    for (let d of t)
      if ((s.push(d), d.route.id === a)) {
        u = d
        break
      }
  } else (s = t), (u = t[t.length - 1])
  let c = Bc(i || '.', Uc(s, l), zi(e.pathname, r) || e.pathname, o === 'path')
  if ((i == null && ((c.search = e.search), (c.hash = e.hash)), (i == null || i === '' || i === '.') && u)) {
    let d = Wc(c.search)
    if (u.route.index && !d) c.search = c.search ? c.search.replace(/^\?/, '?index&') : '?index'
    else if (!u.route.index && d) {
      let h = new URLSearchParams(c.search),
        v = h.getAll('index')
      h.delete('index'), v.filter((k) => k).forEach((k) => h.append('index', k))
      let g = h.toString()
      c.search = g ? '?' + g : ''
    }
  }
  return n && r !== '/' && (c.pathname = c.pathname === '/' ? r : Or([r, c.pathname])), An(c)
}
function C1(e, t, r, n) {
  if (!n || !Y3(n)) return { path: r }
  if (n.formMethod && !u4(n.formMethod)) return { path: r, error: Et(405, { method: n.formMethod }) }
  let i = () => ({ path: r, error: Et(400, { type: 'invalid-body' }) }),
    l = n.formMethod || 'get',
    a = e ? l.toUpperCase() : l.toLowerCase(),
    o = R2(r)
  if (n.body !== void 0) {
    if (n.formEncType === 'text/plain') {
      if (!tr(a)) return i()
      let h =
        typeof n.body == 'string'
          ? n.body
          : n.body instanceof FormData || n.body instanceof URLSearchParams
            ? Array.from(n.body.entries()).reduce((v, g) => {
                let [k, R] = g
                return (
                  '' +
                  v +
                  k +
                  '=' +
                  R +
                  `
`
                )
              }, '')
            : String(n.body)
      return {
        path: r,
        submission: {
          formMethod: a,
          formAction: o,
          formEncType: n.formEncType,
          formData: void 0,
          json: void 0,
          text: h
        }
      }
    } else if (n.formEncType === 'application/json') {
      if (!tr(a)) return i()
      try {
        let h = typeof n.body == 'string' ? JSON.parse(n.body) : n.body
        return {
          path: r,
          submission: {
            formMethod: a,
            formAction: o,
            formEncType: n.formEncType,
            formData: void 0,
            json: h,
            text: void 0
          }
        }
      } catch {
        return i()
      }
    }
  }
  we(typeof FormData == 'function', 'FormData is not available in this environment')
  let s, u
  if (n.formData) (s = Iu(n.formData)), (u = n.formData)
  else if (n.body instanceof FormData) (s = Iu(n.body)), (u = n.body)
  else if (n.body instanceof URLSearchParams) (s = n.body), (u = R1(s))
  else if (n.body == null) (s = new URLSearchParams()), (u = new FormData())
  else
    try {
      ;(s = new URLSearchParams(n.body)), (u = R1(s))
    } catch {
      return i()
    }
  let c = {
    formMethod: a,
    formAction: o,
    formEncType: (n && n.formEncType) || 'application/x-www-form-urlencoded',
    formData: u,
    json: void 0,
    text: void 0
  }
  if (tr(c.formMethod)) return { path: r, submission: c }
  let d = yn(r)
  return t && d.search && Wc(d.search) && s.append('index', ''), (d.search = '?' + s), { path: An(d), submission: c }
}
function T1(e, t, r) {
  r === void 0 && (r = !1)
  let n = e.findIndex((i) => i.route.id === t)
  return n >= 0 ? e.slice(0, r ? n + 1 : n) : e
}
function N1(e, t, r, n, i, l, a, o, s, u, c, d, h, v, g, k) {
  let R = k ? (Lt(k[1]) ? k[1].error : k[1].data) : void 0,
    p = e.createURL(t.location),
    f = e.createURL(i),
    m = r
  l && t.errors ? (m = T1(r, Object.keys(t.errors)[0], !0)) : k && Lt(k[1]) && (m = T1(r, k[0]))
  let b = k ? k[1].statusCode : void 0,
    z = a && b && b >= 400,
    _ = m.filter((A, T) => {
      let { route: M } = A
      if (M.lazy) return !0
      if (M.loader == null) return !1
      if (l) return Fu(M, t.loaderData, t.errors)
      if (X3(t.loaderData, t.matches[T], A) || s.some((L) => L === A.route.id)) return !0
      let q = t.matches[T],
        C = A
      return j1(
        A,
        Ae(
          {
            currentUrl: p,
            currentParams: q.params,
            nextUrl: f,
            nextParams: C.params
          },
          n,
          {
            actionResult: R,
            actionStatus: b,
            defaultShouldRevalidate: z ? !1 : o || p.pathname + p.search === f.pathname + f.search || p.search !== f.search || M2(q, C)
          }
        )
      )
    }),
    Z = []
  return (
    d.forEach((A, T) => {
      if (l || !r.some((U) => U.route.id === A.routeId) || c.has(T)) return
      let M = kn(v, A.path, g)
      if (!M) {
        Z.push({
          key: T,
          routeId: A.routeId,
          path: A.path,
          matches: null,
          match: null,
          controller: null
        })
        return
      }
      let q = t.fetchers.get(T),
        C = il(M, A.path),
        L = !1
      h.has(T)
        ? (L = !1)
        : u.has(T)
          ? (u.delete(T), (L = !0))
          : q && q.state !== 'idle' && q.data === void 0
            ? (L = o)
            : (L = j1(
                C,
                Ae(
                  {
                    currentUrl: p,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: f,
                    nextParams: r[r.length - 1].params
                  },
                  n,
                  {
                    actionResult: R,
                    actionStatus: b,
                    defaultShouldRevalidate: z ? !1 : o
                  }
                )
              )),
        L &&
          Z.push({
            key: T,
            routeId: A.routeId,
            path: A.path,
            matches: M,
            match: C,
            controller: new AbortController()
          })
    }),
    [_, Z]
  )
}
function Fu(e, t, r) {
  if (e.lazy) return !0
  if (!e.loader) return !1
  let n = t != null && t[e.id] !== void 0,
    i = r != null && r[e.id] !== void 0
  return !n && i ? !1 : typeof e.loader == 'function' && e.loader.hydrate === !0 ? !0 : !n && !i
}
function X3(e, t, r) {
  let n = !t || r.route.id !== t.route.id,
    i = e[r.route.id] === void 0
  return n || i
}
function M2(e, t) {
  let r = e.route.path
  return e.pathname !== t.pathname || (r != null && r.endsWith('*') && e.params['*'] !== t.params['*'])
}
function j1(e, t) {
  if (e.route.shouldRevalidate) {
    let r = e.route.shouldRevalidate(t)
    if (typeof r == 'boolean') return r
  }
  return t.defaultShouldRevalidate
}
function M1(e, t, r, n, i) {
  var l
  let a
  if (e) {
    let u = n[e]
    we(u, 'No route found to patch children into: routeId = ' + e), u.children || (u.children = []), (a = u.children)
  } else a = r
  let o = t.filter((u) => !a.some((c) => P2(u, c))),
    s = ko(o, i, [e || '_', 'patch', String(((l = a) == null ? void 0 : l.length) || '0')], n)
  a.push(...s)
}
function P2(e, t) {
  return 'id' in e && 'id' in t && e.id === t.id
    ? !0
    : e.index === t.index && e.path === t.path && e.caseSensitive === t.caseSensitive
      ? (!e.children || e.children.length === 0) && (!t.children || t.children.length === 0)
        ? !0
        : e.children.every((r, n) => {
            var i
            return (i = t.children) == null ? void 0 : i.some((l) => P2(r, l))
          })
      : !1
}
async function J3(e, t, r) {
  if (!e.lazy) return
  let n = await e.lazy()
  if (!e.lazy) return
  let i = r[e.id]
  we(i, 'No route found in manifest')
  let l = {}
  for (let a in n) {
    let s = i[a] !== void 0 && a !== 'hasErrorBoundary'
    Ci(
      !s,
      'Route "' +
        i.id +
        '" has a static property "' +
        a +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + a + '" will be ignored.')
    ),
      !s && !S3.has(a) && (l[a] = n[a])
  }
  Object.assign(i, l), Object.assign(i, Ae({}, t(i), { lazy: void 0 }))
}
async function e4(e) {
  let { matches: t } = e,
    r = t.filter((i) => i.shouldLoad)
  return (await Promise.all(r.map((i) => i.resolve()))).reduce((i, l, a) => Object.assign(i, { [r[a].route.id]: l }), {})
}
async function t4(e, t, r, n, i, l, a, o, s, u) {
  let c = l.map((v) => (v.route.lazy ? J3(v.route, s, o) : void 0)),
    d = l.map((v, g) => {
      let k = c[g],
        R = i.some((f) => f.route.id === v.route.id)
      return Ae({}, v, {
        shouldLoad: R,
        resolve: async (f) => (
          f && n.method === 'GET' && (v.route.lazy || v.route.loader) && (R = !0),
          R ? r4(t, n, v, k, f, u) : Promise.resolve({ type: je.data, result: void 0 })
        )
      })
    }),
    h = await e({
      matches: d,
      request: n,
      params: l[0].params,
      fetcherKey: a,
      context: u
    })
  try {
    await Promise.all(c)
  } catch {}
  return h
}
async function r4(e, t, r, n, i, l) {
  let a,
    o,
    s = (u) => {
      let c,
        d = new Promise((g, k) => (c = k))
      ;(o = () => c()), t.signal.addEventListener('abort', o)
      let h = (g) =>
          typeof u != 'function'
            ? Promise.reject(
                new Error(
                  'You cannot call the handler for a route which defines a boolean ' + ('"' + e + '" [routeId: ' + r.route.id + ']')
                )
              )
            : u({ request: t, params: r.params, context: l }, ...(g !== void 0 ? [g] : [])),
        v = (async () => {
          try {
            return { type: 'data', result: await (i ? i((k) => h(k)) : h()) }
          } catch (g) {
            return { type: 'error', result: g }
          }
        })()
      return Promise.race([v, d])
    }
  try {
    let u = r.route[e]
    if (n)
      if (u) {
        let c,
          [d] = await Promise.all([
            s(u).catch((h) => {
              c = h
            }),
            n
          ])
        if (c !== void 0) throw c
        a = d
      } else if ((await n, (u = r.route[e]), u)) a = await s(u)
      else if (e === 'action') {
        let c = new URL(t.url),
          d = c.pathname + c.search
        throw Et(405, { method: t.method, pathname: d, routeId: r.route.id })
      } else return { type: je.data, result: void 0 }
    else if (u) a = await s(u)
    else {
      let c = new URL(t.url),
        d = c.pathname + c.search
      throw Et(404, { pathname: d })
    }
    we(
      a.result !== void 0,
      'You defined ' +
        (e === 'action' ? 'an action' : 'a loader') +
        ' for route ' +
        ('"' + r.route.id + '" but didn\'t return anything from your `' + e + '` ') +
        'function. Please return a value or `null`.'
    )
  } catch (u) {
    return { type: je.error, result: u }
  } finally {
    o && t.signal.removeEventListener('abort', o)
  }
  return a
}
async function n4(e) {
  let { result: t, type: r } = e
  if (z2(t)) {
    let u
    try {
      let c = t.headers.get('Content-Type')
      c && /\bapplication\/json\b/.test(c) ? (t.body == null ? (u = null) : (u = await t.json())) : (u = await t.text())
    } catch (c) {
      return { type: je.error, error: c }
    }
    return r === je.error
      ? {
          type: je.error,
          error: new So(t.status, t.statusText, u),
          statusCode: t.status,
          headers: t.headers
        }
      : { type: je.data, data: u, statusCode: t.status, headers: t.headers }
  }
  if (r === je.error) {
    if (A1(t)) {
      var n
      if (t.data instanceof Error) {
        var i
        return {
          type: je.error,
          error: t.data,
          statusCode: (i = t.init) == null ? void 0 : i.status
        }
      }
      t = new So(((n = t.init) == null ? void 0 : n.status) || 500, void 0, t.data)
    }
    return { type: je.error, error: t, statusCode: es(t) ? t.status : void 0 }
  }
  if (s4(t)) {
    var l, a
    return {
      type: je.deferred,
      deferredData: t,
      statusCode: (l = t.init) == null ? void 0 : l.status,
      headers: ((a = t.init) == null ? void 0 : a.headers) && new Headers(t.init.headers)
    }
  }
  if (A1(t)) {
    var o, s
    return {
      type: je.data,
      data: t.data,
      statusCode: (o = t.init) == null ? void 0 : o.status,
      headers: (s = t.init) != null && s.headers ? new Headers(t.init.headers) : void 0
    }
  }
  return { type: je.data, data: t }
}
function i4(e, t, r, n, i, l) {
  let a = e.headers.get('Location')
  if ((we(a, 'Redirects returned/thrown from loaders/actions must have a Location header'), !$c.test(a))) {
    let o = n.slice(0, n.findIndex((s) => s.route.id === r) + 1)
    ;(a = Vu(new URL(t.url), o, i, !0, a, l)), e.headers.set('Location', a)
  }
  return e
}
function P1(e, t, r) {
  if ($c.test(e)) {
    let n = e,
      i = n.startsWith('//') ? new URL(t.protocol + n) : new URL(n),
      l = zi(i.pathname, r) != null
    if (i.origin === t.origin && l) return i.pathname + i.search + i.hash
  }
  return e
}
function Qn(e, t, r, n) {
  let i = e.createURL(R2(t)).toString(),
    l = { signal: r }
  if (n && tr(n.formMethod)) {
    let { formMethod: a, formEncType: o } = n
    ;(l.method = a.toUpperCase()),
      o === 'application/json'
        ? ((l.headers = new Headers({ 'Content-Type': o })), (l.body = JSON.stringify(n.json)))
        : o === 'text/plain'
          ? (l.body = n.text)
          : o === 'application/x-www-form-urlencoded' && n.formData
            ? (l.body = Iu(n.formData))
            : (l.body = n.formData)
  }
  return new Request(i, l)
}
function Iu(e) {
  let t = new URLSearchParams()
  for (let [r, n] of e.entries()) t.append(r, typeof n == 'string' ? n : n.name)
  return t
}
function R1(e) {
  let t = new FormData()
  for (let [r, n] of e.entries()) t.append(r, n)
  return t
}
function l4(e, t, r, n, i) {
  let l = {},
    a = null,
    o,
    s = !1,
    u = {},
    c = r && Lt(r[1]) ? r[1].error : void 0
  return (
    e.forEach((d) => {
      if (!(d.route.id in t)) return
      let h = d.route.id,
        v = t[h]
      if ((we(!Tn(v), 'Cannot handle redirect results in processLoaderData'), Lt(v))) {
        let g = v.error
        c !== void 0 && ((g = c), (c = void 0)), (a = a || {})
        {
          let k = Sn(e, h)
          a[k.route.id] == null && (a[k.route.id] = g)
        }
        ;(l[h] = void 0), s || ((s = !0), (o = es(v.error) ? v.error.status : 500)), v.headers && (u[h] = v.headers)
      } else
        Jr(v)
          ? (n.set(h, v.deferredData),
            (l[h] = v.deferredData.data),
            v.statusCode != null && v.statusCode !== 200 && !s && (o = v.statusCode),
            v.headers && (u[h] = v.headers))
          : ((l[h] = v.data), v.statusCode && v.statusCode !== 200 && !s && (o = v.statusCode), v.headers && (u[h] = v.headers))
    }),
    c !== void 0 && r && ((a = { [r[0]]: c }), (l[r[0]] = void 0)),
    { loaderData: l, errors: a, statusCode: o || 200, loaderHeaders: u }
  )
}
function z1(e, t, r, n, i, l, a) {
  let { loaderData: o, errors: s } = l4(t, r, n, a)
  return (
    i.forEach((u) => {
      let { key: c, match: d, controller: h } = u,
        v = l[c]
      if ((we(v, 'Did not find corresponding fetcher result'), !(h && h.signal.aborted)))
        if (Lt(v)) {
          let g = Sn(e.matches, d == null ? void 0 : d.route.id)
          ;(s && s[g.route.id]) || (s = Ae({}, s, { [g.route.id]: v.error })), e.fetchers.delete(c)
        } else if (Tn(v)) we(!1, 'Unhandled fetcher revalidation redirect')
        else if (Jr(v)) we(!1, 'Unhandled fetcher deferred data')
        else {
          let g = Hr(v.data)
          e.fetchers.set(c, g)
        }
    }),
    { loaderData: o, errors: s }
  )
}
function O1(e, t, r, n) {
  let i = Ae({}, t)
  for (let l of r) {
    let a = l.route.id
    if (
      (t.hasOwnProperty(a) ? t[a] !== void 0 && (i[a] = t[a]) : e[a] !== void 0 && l.route.loader && (i[a] = e[a]),
      n && n.hasOwnProperty(a))
    )
      break
  }
  return i
}
function L1(e) {
  return e ? (Lt(e[1]) ? { actionData: {} } : { actionData: { [e[0]]: e[1].data } }) : {}
}
function Sn(e, t) {
  return (t ? e.slice(0, e.findIndex((n) => n.route.id === t) + 1) : [...e]).reverse().find((n) => n.route.hasErrorBoundary === !0) || e[0]
}
function D1(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((r) => r.index || !r.path || r.path === '/') || {
          id: '__shim-error-route__'
        }
  return {
    matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }],
    route: t
  }
}
function Et(e, t) {
  let { pathname: r, routeId: n, method: i, type: l, message: a } = t === void 0 ? {} : t,
    o = 'Unknown Server Error',
    s = 'Unknown @remix-run/router error'
  return (
    e === 400
      ? ((o = 'Bad Request'),
        i && r && n
          ? (s =
              'You made a ' +
              i +
              ' request to "' +
              r +
              '" but ' +
              ('did not provide a `loader` for route "' + n + '", ') +
              'so there is no way to handle the request.')
          : l === 'defer-action'
            ? (s = 'defer() is not supported in actions')
            : l === 'invalid-body' && (s = 'Unable to encode submission body'))
      : e === 403
        ? ((o = 'Forbidden'), (s = 'Route "' + n + '" does not match URL "' + r + '"'))
        : e === 404
          ? ((o = 'Not Found'), (s = 'No route matches URL "' + r + '"'))
          : e === 405 &&
            ((o = 'Method Not Allowed'),
            i && r && n
              ? (s =
                  'You made a ' +
                  i.toUpperCase() +
                  ' request to "' +
                  r +
                  '" but ' +
                  ('did not provide an `action` for route "' + n + '", ') +
                  'so there is no way to handle the request.')
              : i && (s = 'Invalid request method "' + i.toUpperCase() + '"')),
    new So(e || 500, o, new Error(s), !0)
  )
}
function Ra(e) {
  let t = Object.entries(e)
  for (let r = t.length - 1; r >= 0; r--) {
    let [n, i] = t[r]
    if (Tn(i)) return { key: n, result: i }
  }
}
function R2(e) {
  let t = typeof e == 'string' ? yn(e) : e
  return An(Ae({}, t, { hash: '' }))
}
function a4(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === '' ? t.hash !== '' : e.hash === t.hash ? !0 : t.hash !== ''
}
function o4(e) {
  return z2(e.result) && Z3.has(e.result.status)
}
function Jr(e) {
  return e.type === je.deferred
}
function Lt(e) {
  return e.type === je.error
}
function Tn(e) {
  return (e && e.type) === je.redirect
}
function A1(e) {
  return typeof e == 'object' && e != null && 'type' in e && 'data' in e && 'init' in e && e.type === 'DataWithResponseInit'
}
function s4(e) {
  let t = e
  return (
    t &&
    typeof t == 'object' &&
    typeof t.data == 'object' &&
    typeof t.subscribe == 'function' &&
    typeof t.cancel == 'function' &&
    typeof t.resolveData == 'function'
  )
}
function z2(e) {
  return e != null && typeof e.status == 'number' && typeof e.statusText == 'string' && typeof e.headers == 'object' && typeof e.body < 'u'
}
function u4(e) {
  return W3.has(e.toLowerCase())
}
function tr(e) {
  return $3.has(e.toLowerCase())
}
async function c4(e, t, r, n, i) {
  let l = Object.entries(t)
  for (let a = 0; a < l.length; a++) {
    let [o, s] = l[a],
      u = e.find((h) => (h == null ? void 0 : h.route.id) === o)
    if (!u) continue
    let c = n.find((h) => h.route.id === u.route.id),
      d = c != null && !M2(c, u) && (i && i[u.route.id]) !== void 0
    Jr(s) &&
      d &&
      (await Hc(s, r, !1).then((h) => {
        h && (t[o] = h)
      }))
  }
}
async function d4(e, t, r) {
  for (let n = 0; n < r.length; n++) {
    let { key: i, routeId: l, controller: a } = r[n],
      o = t[i]
    e.find((u) => (u == null ? void 0 : u.route.id) === l) &&
      Jr(o) &&
      (we(a, 'Expected an AbortController for revalidating fetcher deferred result'),
      await Hc(o, a.signal, !0).then((u) => {
        u && (t[i] = u)
      }))
  }
}
async function Hc(e, t, r) {
  if ((r === void 0 && (r = !1), !(await e.deferredData.resolveData(t)))) {
    if (r)
      try {
        return { type: je.data, data: e.deferredData.unwrappedData }
      } catch (i) {
        return { type: je.error, error: i }
      }
    return { type: je.data, data: e.deferredData.data }
  }
}
function Wc(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '')
}
function il(e, t) {
  let r = typeof t == 'string' ? yn(t).search : t.search
  if (e[e.length - 1].route.index && Wc(r || '')) return e[e.length - 1]
  let n = T2(e)
  return n[n.length - 1]
}
function V1(e) {
  let { formMethod: t, formAction: r, formEncType: n, text: i, formData: l, json: a } = e
  if (!(!t || !r || !n)) {
    if (i != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: void 0,
        json: void 0,
        text: i
      }
    if (l != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: l,
        json: void 0,
        text: void 0
      }
    if (a !== void 0)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: void 0,
        json: a,
        text: void 0
      }
  }
}
function Fs(e, t) {
  return t
    ? {
        state: 'loading',
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text
      }
    : {
        state: 'loading',
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
      }
}
function f4(e, t) {
  return {
    state: 'submitting',
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text
  }
}
function Gi(e, t) {
  return e
    ? {
        state: 'loading',
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t
      }
    : {
        state: 'loading',
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t
      }
}
function h4(e, t) {
  return {
    state: 'submitting',
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0
  }
}
function Hr(e) {
  return {
    state: 'idle',
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e
  }
}
function p4(e, t) {
  try {
    let r = e.sessionStorage.getItem(j2)
    if (r) {
      let n = JSON.parse(r)
      for (let [i, l] of Object.entries(n || {})) l && Array.isArray(l) && t.set(i, new Set(l || []))
    }
  } catch {}
}
function m4(e, t) {
  if (t.size > 0) {
    let r = {}
    for (let [n, i] of t) r[n] = [...i]
    try {
      e.sessionStorage.setItem(j2, JSON.stringify(r))
    } catch (n) {
      Ci(!1, 'Failed to save applied view transitions in sessionStorage (' + n + ').')
    }
  }
}
/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function bo() {
  return (
    (bo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    bo.apply(this, arguments)
  )
}
const ts = D.createContext(null),
  O2 = D.createContext(null),
  Bn = D.createContext(null),
  Zc = D.createContext(null),
  $n = D.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  L2 = D.createContext(null)
function v4(e, t) {
  let { relative: r } = t === void 0 ? {} : t
  ta() || we(!1)
  let { basename: n, navigator: i } = D.useContext(Bn),
    { hash: l, pathname: a, search: o } = V2(e, { relative: r }),
    s = a
  return n !== '/' && (s = a === '/' ? n : Or([n, a])), i.createHref({ pathname: s, search: o, hash: l })
}
function ta() {
  return D.useContext(Zc) != null
}
function Oi() {
  return ta() || we(!1), D.useContext(Zc).location
}
function D2(e) {
  D.useContext(Bn).static || D.useLayoutEffect(e)
}
function A2() {
  let { isDataRoute: e } = D.useContext($n)
  return e ? N4() : g4()
}
function g4() {
  ta() || we(!1)
  let e = D.useContext(ts),
    { basename: t, future: r, navigator: n } = D.useContext(Bn),
    { matches: i } = D.useContext($n),
    { pathname: l } = Oi(),
    a = JSON.stringify(Uc(i, r.v7_relativeSplatPath)),
    o = D.useRef(!1)
  return (
    D2(() => {
      o.current = !0
    }),
    D.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !o.current)) return
        if (typeof u == 'number') {
          n.go(u)
          return
        }
        let d = Bc(u, JSON.parse(a), l, c.relative === 'path')
        e == null && t !== '/' && (d.pathname = d.pathname === '/' ? t : Or([t, d.pathname])),
          (c.replace ? n.replace : n.push)(d, c.state, c)
      },
      [t, n, a, l, e]
    )
  )
}
function V2(e, t) {
  let { relative: r } = t === void 0 ? {} : t,
    { future: n } = D.useContext(Bn),
    { matches: i } = D.useContext($n),
    { pathname: l } = Oi(),
    a = JSON.stringify(Uc(i, n.v7_relativeSplatPath))
  return D.useMemo(() => Bc(e, JSON.parse(a), l, r === 'path'), [e, a, l, r])
}
function y4(e, t, r, n) {
  ta() || we(!1)
  let { navigator: i } = D.useContext(Bn),
    { matches: l } = D.useContext($n),
    a = l[l.length - 1],
    o = a ? a.params : {}
  a && a.pathname
  let s = a ? a.pathnameBase : '/'
  a && a.route
  let u = Oi(),
    c
  c = u
  let d = c.pathname || '/',
    h = d
  if (s !== '/') {
    let k = s.replace(/^\//, '').split('/')
    h = '/' + d.replace(/^\//, '').split('/').slice(k.length).join('/')
  }
  let v = kn(e, { pathname: h })
  return S4(
    v &&
      v.map((k) =>
        Object.assign({}, k, {
          params: Object.assign({}, o, k.params),
          pathname: Or([s, i.encodeLocation ? i.encodeLocation(k.pathname).pathname : k.pathname]),
          pathnameBase: k.pathnameBase === '/' ? s : Or([s, i.encodeLocation ? i.encodeLocation(k.pathnameBase).pathname : k.pathnameBase])
        })
      ),
    l,
    r,
    n
  )
}
function x4() {
  let e = T4(),
    t = es(e) ? e.status + ' ' + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    i = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' }
  return D.createElement(
    D.Fragment,
    null,
    D.createElement('h2', null, 'Unexpected Application Error!'),
    D.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    r ? D.createElement('pre', { style: i }, r) : null,
    null
  )
}
const w4 = D.createElement(x4, null)
class _4 extends D.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error
      })
  }
  static getDerivedStateFromError(t) {
    return { error: t }
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location || (r.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : r.error,
          location: r.location,
          revalidation: t.revalidation || r.revalidation
        }
  }
  componentDidCatch(t, r) {
    console.error('React Router caught the following error during render', t, r)
  }
  render() {
    return this.state.error !== void 0
      ? D.createElement(
          $n.Provider,
          { value: this.props.routeContext },
          D.createElement(L2.Provider, {
            value: this.state.error,
            children: this.props.component
          })
        )
      : this.props.children
  }
}
function k4(e) {
  let { routeContext: t, match: r, children: n } = e,
    i = D.useContext(ts)
  return (
    i &&
      i.static &&
      i.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = r.route.id),
    D.createElement($n.Provider, { value: t }, n)
  )
}
function S4(e, t, r, n) {
  var i
  if ((t === void 0 && (t = []), r === void 0 && (r = null), n === void 0 && (n = null), e == null)) {
    var l
    if (!r) return null
    if (r.errors) e = r.matches
    else if ((l = n) != null && l.v7_partialHydration && t.length === 0 && !r.initialized && r.matches.length > 0) e = r.matches
    else return null
  }
  let a = e,
    o = (i = r) == null ? void 0 : i.errors
  if (o != null) {
    let c = a.findIndex((d) => d.route.id && (o == null ? void 0 : o[d.route.id]) !== void 0)
    c >= 0 || we(!1), (a = a.slice(0, Math.min(a.length, c + 1)))
  }
  let s = !1,
    u = -1
  if (r && n && n.v7_partialHydration)
    for (let c = 0; c < a.length; c++) {
      let d = a[c]
      if (((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c), d.route.id)) {
        let { loaderData: h, errors: v } = r,
          g = d.route.loader && h[d.route.id] === void 0 && (!v || v[d.route.id] === void 0)
        if (d.route.lazy || g) {
          ;(s = !0), u >= 0 ? (a = a.slice(0, u + 1)) : (a = [a[0]])
          break
        }
      }
    }
  return a.reduceRight((c, d, h) => {
    let v,
      g = !1,
      k = null,
      R = null
    r &&
      ((v = o && d.route.id ? o[d.route.id] : void 0),
      (k = d.route.errorElement || w4),
      s &&
        (u < 0 && h === 0
          ? (j4('route-fallback'), (g = !0), (R = null))
          : u === h && ((g = !0), (R = d.route.hydrateFallbackElement || null))))
    let p = t.concat(a.slice(0, h + 1)),
      f = () => {
        let m
        return (
          v
            ? (m = k)
            : g
              ? (m = R)
              : d.route.Component
                ? (m = D.createElement(d.route.Component, null))
                : d.route.element
                  ? (m = d.route.element)
                  : (m = c),
          D.createElement(k4, {
            match: d,
            routeContext: { outlet: c, matches: p, isDataRoute: r != null },
            children: m
          })
        )
      }
    return r && (d.route.ErrorBoundary || d.route.errorElement || h === 0)
      ? D.createElement(_4, {
          location: r.location,
          revalidation: r.revalidation,
          component: k,
          error: v,
          children: f(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 }
        })
      : f()
  }, null)
}
var F2 = (function (e) {
    return (e.UseBlocker = 'useBlocker'), (e.UseRevalidator = 'useRevalidator'), (e.UseNavigateStable = 'useNavigate'), e
  })(F2 || {}),
  Eo = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    )
  })(Eo || {})
function b4(e) {
  let t = D.useContext(ts)
  return t || we(!1), t
}
function E4(e) {
  let t = D.useContext(O2)
  return t || we(!1), t
}
function C4(e) {
  let t = D.useContext($n)
  return t || we(!1), t
}
function I2(e) {
  let t = C4(),
    r = t.matches[t.matches.length - 1]
  return r.route.id || we(!1), r.route.id
}
function T4() {
  var e
  let t = D.useContext(L2),
    r = E4(Eo.UseRouteError),
    n = I2(Eo.UseRouteError)
  return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[n]
}
function N4() {
  let { router: e } = b4(F2.UseNavigateStable),
    t = I2(Eo.UseNavigateStable),
    r = D.useRef(!1)
  return (
    D2(() => {
      r.current = !0
    }),
    D.useCallback(
      function (i, l) {
        l === void 0 && (l = {}), r.current && (typeof i == 'number' ? e.navigate(i) : e.navigate(i, bo({ fromRouteId: t }, l)))
      },
      [e, t]
    )
  )
}
const F1 = {}
function j4(e, t, r) {
  F1[e] || (F1[e] = !0)
}
const I1 = {}
function M4(e, t) {
  I1[t] || ((I1[t] = !0), console.warn(t))
}
const Gn = (e, t, r) =>
  M4(
    e,
    '⚠️ React Router Future Flag Warning: ' +
      t +
      '. ' +
      ('You can use the `' + e + '` future flag to opt-in early. ') +
      ('For more information, see ' + r + '.')
  )
function P4(e, t) {
  ;(e != null && e.v7_startTransition) ||
    Gn(
      'v7_startTransition',
      'React Router will begin wrapping state updates in `React.startTransition` in v7',
      'https://reactrouter.com/v6/upgrading/future#v7_starttransition'
    ),
    !(e != null && e.v7_relativeSplatPath) &&
      (!t || !t.v7_relativeSplatPath) &&
      Gn(
        'v7_relativeSplatPath',
        'Relative route resolution within Splat routes is changing in v7',
        'https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath'
      ),
    t &&
      (t.v7_fetcherPersist ||
        Gn(
          'v7_fetcherPersist',
          'The persistence behavior of fetchers is changing in v7',
          'https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist'
        ),
      t.v7_normalizeFormMethod ||
        Gn(
          'v7_normalizeFormMethod',
          'Casing of `formMethod` fields is being normalized to uppercase in v7',
          'https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod'
        ),
      t.v7_partialHydration ||
        Gn(
          'v7_partialHydration',
          '`RouterProvider` hydration behavior is changing in v7',
          'https://reactrouter.com/v6/upgrading/future#v7_partialhydration'
        ),
      t.v7_skipActionErrorRevalidation ||
        Gn(
          'v7_skipActionErrorRevalidation',
          'The revalidation behavior after 4xx/5xx `action` responses is changing in v7',
          'https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation'
        ))
}
function R4(e) {
  let { basename: t = '/', children: r = null, location: n, navigationType: i = Je.Pop, navigator: l, static: a = !1, future: o } = e
  ta() && we(!1)
  let s = t.replace(/^\/*/, '/'),
    u = D.useMemo(
      () => ({
        basename: s,
        navigator: l,
        static: a,
        future: bo({ v7_relativeSplatPath: !1 }, o)
      }),
      [s, o, l, a]
    )
  typeof n == 'string' && (n = yn(n))
  let { pathname: c = '/', search: d = '', hash: h = '', state: v = null, key: g = 'default' } = n,
    k = D.useMemo(() => {
      let R = zi(c, s)
      return R == null
        ? null
        : {
            location: { pathname: R, search: d, hash: h, state: v, key: g },
            navigationType: i
          }
    }, [s, c, d, h, v, g, i])
  return k == null ? null : D.createElement(Bn.Provider, { value: u }, D.createElement(Zc.Provider, { children: r, value: k }))
}
new Promise(() => {})
function z4(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null
  }
  return (
    e.Component &&
      Object.assign(t, {
        element: D.createElement(e.Component),
        Component: void 0
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: D.createElement(e.HydrateFallback),
        HydrateFallback: void 0
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: D.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0
      }),
    t
  )
}
/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ll() {
  return (
    (Ll = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    Ll.apply(this, arguments)
  )
}
function O4(e, t) {
  if (e == null) return {}
  var r = {},
    n = Object.keys(e),
    i,
    l
  for (l = 0; l < n.length; l++) (i = n[l]), !(t.indexOf(i) >= 0) && (r[i] = e[i])
  return r
}
function L4(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function D4(e, t) {
  return e.button === 0 && (!t || t === '_self') && !L4(e)
}
const A4 = ['onClick', 'relative', 'reloadDocument', 'replace', 'state', 'target', 'to', 'preventScrollReset', 'viewTransition'],
  V4 = '6'
try {
  window.__reactRouterVersion = V4
} catch {}
function F4(e, t) {
  return G3({
    basename: void 0,
    future: Ll({}, void 0, { v7_prependBasename: !0 }),
    history: w3({ window: void 0 }),
    hydrationData: I4(),
    routes: e,
    mapRouteProperties: z4,
    dataStrategy: void 0,
    patchRoutesOnNavigation: void 0,
    window: void 0
  }).initialize()
}
function I4() {
  var e
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData
  return t && t.errors && (t = Ll({}, t, { errors: U4(t.errors) })), t
}
function U4(e) {
  if (!e) return null
  let t = Object.entries(e),
    r = {}
  for (let [n, i] of t)
    if (i && i.__type === 'RouteErrorResponse') r[n] = new So(i.status, i.statusText, i.data, i.internal === !0)
    else if (i && i.__type === 'Error') {
      if (i.__subType) {
        let l = window[i.__subType]
        if (typeof l == 'function')
          try {
            let a = new l(i.message)
            ;(a.stack = ''), (r[n] = a)
          } catch {}
      }
      if (r[n] == null) {
        let l = new Error(i.message)
        ;(l.stack = ''), (r[n] = l)
      }
    } else r[n] = i
  return r
}
const B4 = D.createContext({ isTransitioning: !1 }),
  $4 = D.createContext(new Map()),
  H4 = 'startTransition',
  U1 = op[H4],
  W4 = 'flushSync',
  B1 = x3[W4]
function Z4(e) {
  U1 ? U1(e) : e()
}
function Yi(e) {
  B1 ? B1(e) : e()
}
class q4 {
  constructor() {
    ;(this.status = 'pending'),
      (this.promise = new Promise((t, r) => {
        ;(this.resolve = (n) => {
          this.status === 'pending' && ((this.status = 'resolved'), t(n))
        }),
          (this.reject = (n) => {
            this.status === 'pending' && ((this.status = 'rejected'), r(n))
          })
      }))
  }
}
function K4(e) {
  let { fallbackElement: t, router: r, future: n } = e,
    [i, l] = D.useState(r.state),
    [a, o] = D.useState(),
    [s, u] = D.useState({ isTransitioning: !1 }),
    [c, d] = D.useState(),
    [h, v] = D.useState(),
    [g, k] = D.useState(),
    R = D.useRef(new Map()),
    { v7_startTransition: p } = n || {},
    f = D.useCallback(
      (A) => {
        p ? Z4(A) : A()
      },
      [p]
    ),
    m = D.useCallback(
      (A, T) => {
        let { deletedFetchers: M, flushSync: q, viewTransitionOpts: C } = T
        M.forEach((U) => R.current.delete(U)),
          A.fetchers.forEach((U, F) => {
            U.data !== void 0 && R.current.set(F, U.data)
          })
        let L = r.window == null || r.window.document == null || typeof r.window.document.startViewTransition != 'function'
        if (!C || L) {
          q ? Yi(() => l(A)) : f(() => l(A))
          return
        }
        if (q) {
          Yi(() => {
            h && (c && c.resolve(), h.skipTransition()),
              u({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: C.currentLocation,
                nextLocation: C.nextLocation
              })
          })
          let U = r.window.document.startViewTransition(() => {
            Yi(() => l(A))
          })
          U.finished.finally(() => {
            Yi(() => {
              d(void 0), v(void 0), o(void 0), u({ isTransitioning: !1 })
            })
          }),
            Yi(() => v(U))
          return
        }
        h
          ? (c && c.resolve(),
            h.skipTransition(),
            k({
              state: A,
              currentLocation: C.currentLocation,
              nextLocation: C.nextLocation
            }))
          : (o(A),
            u({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: C.currentLocation,
              nextLocation: C.nextLocation
            }))
      },
      [r.window, h, c, R, f]
    )
  D.useLayoutEffect(() => r.subscribe(m), [r, m]),
    D.useEffect(() => {
      s.isTransitioning && !s.flushSync && d(new q4())
    }, [s]),
    D.useEffect(() => {
      if (c && a && r.window) {
        let A = a,
          T = c.promise,
          M = r.window.document.startViewTransition(async () => {
            f(() => l(A)), await T
          })
        M.finished.finally(() => {
          d(void 0), v(void 0), o(void 0), u({ isTransitioning: !1 })
        }),
          v(M)
      }
    }, [f, a, c, r.window]),
    D.useEffect(() => {
      c && a && i.location.key === a.location.key && c.resolve()
    }, [c, h, i.location, a]),
    D.useEffect(() => {
      !s.isTransitioning &&
        g &&
        (o(g.state),
        u({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: g.currentLocation,
          nextLocation: g.nextLocation
        }),
        k(void 0))
    }, [s.isTransitioning, g]),
    D.useEffect(() => {}, [])
  let b = D.useMemo(
      () => ({
        createHref: r.createHref,
        encodeLocation: r.encodeLocation,
        go: (A) => r.navigate(A),
        push: (A, T, M) =>
          r.navigate(A, {
            state: T,
            preventScrollReset: M == null ? void 0 : M.preventScrollReset
          }),
        replace: (A, T, M) =>
          r.navigate(A, {
            replace: !0,
            state: T,
            preventScrollReset: M == null ? void 0 : M.preventScrollReset
          })
      }),
      [r]
    ),
    z = r.basename || '/',
    _ = D.useMemo(() => ({ router: r, navigator: b, static: !1, basename: z }), [r, b, z]),
    Z = D.useMemo(() => ({ v7_relativeSplatPath: r.future.v7_relativeSplatPath }), [r.future.v7_relativeSplatPath])
  return (
    D.useEffect(() => P4(n, r.future), [n, r.future]),
    D.createElement(
      D.Fragment,
      null,
      D.createElement(
        ts.Provider,
        { value: _ },
        D.createElement(
          O2.Provider,
          { value: i },
          D.createElement(
            $4.Provider,
            { value: R.current },
            D.createElement(
              B4.Provider,
              { value: s },
              D.createElement(
                R4,
                {
                  basename: z,
                  location: i.location,
                  navigationType: i.historyAction,
                  navigator: b,
                  future: Z
                },
                i.initialized || r.future.v7_partialHydration
                  ? D.createElement(Q4, {
                      routes: r.routes,
                      future: r.future,
                      state: i
                    })
                  : t
              )
            )
          )
        )
      ),
      null
    )
  )
}
const Q4 = D.memo(G4)
function G4(e) {
  let { routes: t, future: r, state: n } = e
  return y4(t, void 0, n, r)
}
const Y4 = typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u',
  X4 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  $1 = D.forwardRef(function (t, r) {
    let {
        onClick: n,
        relative: i,
        reloadDocument: l,
        replace: a,
        state: o,
        target: s,
        to: u,
        preventScrollReset: c,
        viewTransition: d
      } = t,
      h = O4(t, A4),
      { basename: v } = D.useContext(Bn),
      g,
      k = !1
    if (typeof u == 'string' && X4.test(u) && ((g = u), Y4))
      try {
        let m = new URL(window.location.href),
          b = u.startsWith('//') ? new URL(m.protocol + u) : new URL(u),
          z = zi(b.pathname, v)
        b.origin === m.origin && z != null ? (u = z + b.search + b.hash) : (k = !0)
      } catch {}
    let R = v4(u, { relative: i }),
      p = J4(u, {
        replace: a,
        state: o,
        target: s,
        preventScrollReset: c,
        relative: i,
        viewTransition: d
      })
    function f(m) {
      n && n(m), m.defaultPrevented || p(m)
    }
    return D.createElement('a', Ll({}, h, { href: g || R, onClick: k || l ? n : f, ref: r, target: s }))
  })
var H1
;(function (e) {
  ;(e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState')
})(H1 || (H1 = {}))
var W1
;(function (e) {
  ;(e.UseFetcher = 'useFetcher'), (e.UseFetchers = 'useFetchers'), (e.UseScrollRestoration = 'useScrollRestoration')
})(W1 || (W1 = {}))
function J4(e, t) {
  let { target: r, replace: n, state: i, preventScrollReset: l, relative: a, viewTransition: o } = t === void 0 ? {} : t,
    s = A2(),
    u = Oi(),
    c = V2(e, { relative: a })
  return D.useCallback(
    (d) => {
      if (D4(d, r)) {
        d.preventDefault()
        let h = n !== void 0 ? n : An(u) === An(c)
        s(e, {
          replace: h,
          state: i,
          preventScrollReset: l,
          relative: a,
          viewTransition: o
        })
      }
    },
    [u, s, c, n, i, r, e, l, a, o]
  )
}
const e5 = '/assets/GuitarStock-BX5LRB6X.jpg',
  t5 = '/assets/LucaPortrait-Da2mDF87.jpg',
  r5 = '/assets/MusicNotes-Bm2_kT0z.jpg',
  n5 = '/assets/Contract-BYm8sWSF.pdf',
  Z1 = {
    withContract: [
      {
        heading: 'Probestunde',
        description:
          'Zum gegenseitigen Kennenlernen. Wir können uns anschauen, wo deine Interessen liegen und wie ich dich am besten unterstützen kann.',
        priceOptions: [{ duration: '45 Minuten', price: '20€' }]
      },
      {
        heading: 'Ab vier Terminen/Monat',
        description: 'Vertrag, vierteljährlich kündbar. Wöchentliche Unterrichtseinheiten, angepasst an deine Bedürfnisse.',
        priceOptions: [{ duration: '60 Minuten', price: '35€' }],
        isHighlighted: !0,
        benefits: [
          'Regelmäßiger fester Termin ',
          'Unterrichtsmaterialien (Noten, Tabs)',
          'Kaufberatung Gitarre',
          'Hausbesuch möglich gegen Aufpreis',
          'Unterricht in Musiktheorie, Gehörbildung, Noten/Tabs lesen (optional)',
          '45-minütiger Unterricht für 30€'
        ]
      },
      {
        heading: 'Zwei bis drei Termine/Monat',
        description: 'Vertrag, vierteljährlich kündbar. Regelmäßige Unterrichtseinheiten, angepasst an deine Bedürfnisse.',
        priceOptions: [{ duration: '60 Minuten', price: '40€' }],
        benefits: [
          'Regelmäßiger fester Termin ',
          'Unterrichtsmaterialien (Noten, Tabs)',
          'Kaufberatung Gitarre',
          'Hausbesuch möglich gegen Aufpreis',
          'Unterricht in Musiktheorie, Gehörbildung, Noten/Tabs lesen (optional)',
          '45-minütiger Unterricht für 35€'
        ]
      }
    ],
    withoutContract: [
      {
        heading: 'Individuelle Einzelstunde',
        description: 'Ideal für gezielte Vertiefung oder als Geschenk-Gutschein. 12 Monate gültig.',
        priceOptions: [{ duration: '60 Minuten', price: '47€' }],
        benefits: [
          'Zugang zu grundlegenden Lernmaterialien',
          'Möglichkeit ein Thema zu vertiefen',
          'Flexibilität bei der Stundenbuchung',
          'Kein langfristiger Vertrag',
          '45-minütiger Unterricht für 42€'
        ]
      },
      {
        heading: 'Zeitkarten (2er/5er/10er)',
        description: 'Flexibilität für Berufstätige oder als Geschenk-Gutschein. 12 Monate gültig.',
        priceOptions: [{ duration: '60 Minuten', price: '45€' }],
        benefits: [
          'Übertragbar',
          'Zugang zu grundlegenden Lernmaterialien',
          'Flexibilität bei der Stundenbuchung',
          'Kein langfristiger Vertrag',
          '45-minütiger Unterricht für 45€'
        ]
      }
    ]
  }
function U2(e) {
  var t,
    r,
    n = ''
  if (typeof e == 'string' || typeof e == 'number') n += e
  else if (typeof e == 'object')
    if (Array.isArray(e)) {
      var i = e.length
      for (t = 0; t < i; t++) e[t] && (r = U2(e[t])) && (n && (n += ' '), (n += r))
    } else for (r in e) e[r] && (n && (n += ' '), (n += r))
  return n
}
function Kt() {
  for (var e, t, r = 0, n = '', i = arguments.length; r < i; r++) (e = arguments[r]) && (t = U2(e)) && (n && (n += ' '), (n += t))
  return n
}
const i5 = ({ children: e }) => {
    const t = Oi()
    return (
      D.useLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      }, [t.pathname]),
      e
    )
  },
  qc = ({ children: e }) => {
    const r = Oi().pathname === '/'
    return x.jsx(i5, {
      children: x.jsxs('div', {
        children: [
          r
            ? x.jsxs(x.Fragment, {
                children: [
                  x.jsxs('header', {
                    className: Kt('relative bg-cover bg-center', 'lg:min-h-screen', !r && 'bg-gray-300'),
                    style: {
                      backgroundImage: r
                        ? 'url(https://www.londonguitarinstitute.co.uk/wp-content/uploads/2020/06/Folk-guitarist-1.jpg)'
                        : 'none'
                    },
                    children: [x.jsx(q1, {}), x.jsx(ov, {})]
                  }),
                  x.jsxs('main', {
                    children: [x.jsx(ev, {}), x.jsx(l5, { imageUrl: e5 }), x.jsx(av, {}), x.jsx(lv, {}), x.jsx(sv, {}), x.jsx(iv, {})]
                  })
                ]
              })
            : x.jsxs(x.Fragment, {
                children: [x.jsx(q1, {}), x.jsx('main', { children: e })]
              }),
          x.jsx(d5, {})
        ]
      })
    })
  },
  Hn = ({ title: e, bgColor: t = 'bg-textLight', className: r = '', children: n }) =>
    x.jsxs('div', {
      className: Kt(t, 'min-h-screen relative', r),
      children: [
        e &&
          x.jsx('div', {
            className: 'text-center',
            children: x.jsx(At, {
              children: x.jsx('h1', {
                className: 'text-4xl sm:text-5xl  text-textLight',
                children: e
              })
            })
          }),
        x.jsx('main', { className: 'mx-4 lg:px-6', children: n })
      ]
    }),
  B2 = ({ children: e, onClick: t, backgroundColor: r = 'secondary', disabled: n = !1 }) => {
    const i = `bg-${r}`,
      l = `hover:bg-transparent hover:text-${r}`
    return x.jsx('button', {
      onClick: t,
      disabled: n,
      className: Kt('px-6 py-3 border-solid border-2 border-textLight text-textLight rounded-3xl transition-colors duration-300', i, l, {
        'bg-gray-400 cursor-not-allowed': n
      }),
      children: e
    })
  },
  q1 = () => {
    const [e, t] = D.useState(!1),
      r = A2(),
      n = () => {
        t(!e)
      },
      i = (o) => x.jsx(J6, { href: o.href, children: o.name }, o.name),
      l = [
        { name: 'Über mich', href: '/#about' },
        { name: 'Gitarrenunterricht', href: '/#teaching' },
        { name: 'Preise', href: '/#pricing' },
        { name: 'Kontakt', href: '/#contact' }
      ],
      a = () => {
        r('/')
      }
    return x.jsx('div', {
      className: 'px-6 py-3 flex flex-wrap place-items-center lg:border-y lg:border-textLight bg-primary relative z-10',
      children: x.jsxs('section', {
        className: 'relative mx-auto w-full',
        children: [
          x.jsxs('nav', {
            className: 'flex justify-between items-center text-textLight w-full',
            children: [
              x.jsx('a', {
                href: '#home',
                onClick: (o) => {
                  o.preventDefault(), a()
                },
                className: 'text-2xl italic  font-sm mr-8 pr-8 lg:border-r lg:border-textLight hover:text-amber-500',
                children: 'Luca de Michieli'
              }),
              x.jsx('div', {
                className: 'hidden lg:flex px-5 lg:px-12 py-6 w-full justify-center',
                children: x.jsx('ul', {
                  className: 'flex space-x-8 ',
                  children: l.map(i)
                })
              }),
              x.jsx('a', {
                className: 'navbar-burger self-center mr-12 lg:hidden',
                href: '#',
                onClick: n,
                children: x.jsx('svg', {
                  xmlns: 'http://www.w3.org/2000/svg',
                  className: 'h-6 w-6 hover:text-gray-200',
                  fill: 'none',
                  viewBox: '0 0 24 24',
                  stroke: 'currentColor',
                  children: x.jsx('path', {
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '2',
                    d: 'M4 6h16M4 12h16M4 18h16'
                  })
                })
              })
            ]
          }),
          x.jsx('div', {
            className: Kt('lg:hidden bg-primary transition-all duration-300 w-full py-4', e ? 'block' : 'hidden'),
            children: x.jsx('ul', {
              className: 'flex flex-col space-y-4 ',
              children: l.map(({ name: o, href: s }) =>
                x.jsx(
                  'li',
                  {
                    children: x.jsx('a', {
                      className: 'text-textLight hover:text-gray-200 hover:bg-textLight hover:bg-opacity-20 rounded-lg block p-2',
                      href: s,
                      children: o
                    })
                  },
                  o
                )
              )
            })
          })
        ]
      })
    })
  },
  l5 = ({ imageUrl: e }) =>
    x.jsx('div', {
      className: 'bg-fixed bg-center bg-cover',
      style: { backgroundImage: `url(${e})` },
      children: x.jsx('div', {
        className: 'h-screen bg-opacity-75 flex justify-center pt-8'
      })
    }),
  a5 = ({ benefit: e }) =>
    x.jsxs('li', {
      className: 'flex items-center space-x-3',
      children: [
        x.jsx('svg', {
          className: 'flex-shrink-0 w-5 h-5',
          fill: 'currentColor',
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 256 256',
          children: x.jsx('path', {
            fill: '#000000',
            d: 'M148.6,37.3c0-18.2-7-27.3-20.9-27.3c-13.9,0-20.9,9.1-20.9,27.3c0,3.4,0.4,7,1.3,10.8l10.1,48.2c0.8,4.2,1.3,7.4,1.3,9.5c0,2.5-1.1,3.8-3.2,3.8c-1.3,0-4.4-2.4-9.5-7.1L70,67.9C62.3,60.6,53.9,57,44.6,57c-14,0-20.9,6.2-20.9,18.5c0,11.9,8.3,21,24.9,27.4l47.3,17.8c7.2,2.6,10.9,5.1,10.9,7.6c0,1.7-3.6,4-10.9,7l-47.3,17.8c-16.6,6.4-24.9,15.7-24.9,28.1c0,12.3,6.8,18.5,20.3,18.5c9.3,0,18-3.8,26-11.5l36.8-34.2c5.1-4.6,8.2-7,9.5-7c2.1,0,3.2,1.3,3.2,3.8c0,2.1-0.5,5.3-1.3,9.5L108,208.6c-0.8,3.8-1.3,7.4-1.3,10.7c0,17.8,7,26.7,20.9,26.7c14,0,20.9-8.9,20.9-26.7c0-2.9-0.5-6.5-1.3-10.7l-9.5-48.2l-1.3-7.6v-2.5c0-2.1,1.1-3.2,3.2-3.2c1.3,0,4.4,2.3,9.5,7l36.8,34.2c8,7.6,16.5,11.5,25.4,11.5c14,0,20.9-6.3,20.9-19c0-11.8-8.3-20.9-24.9-27.3l-47.9-17.8c-7.2-3-10.8-5.3-10.8-7c0-2.1,3.6-4.6,10.8-7.6l47.9-17.8c16.6-6.3,24.9-15.7,24.9-27.9s-7-18.4-20.9-18.4c-8.9,0-17.3,3.8-25.4,11.4l-36.8,34.2c-5.1,4.7-8.2,7-9.5,7c-2.1,0-3.2-1.1-3.2-3.2l10.8-58.4C148.2,43.8,148.6,40.2,148.6,37.3L148.6,37.3z'
          })
        }),
        x.jsx('span', { className: 'font-body', children: e })
      ]
    }),
  o5 = ({ pricingPlan: e }) => {
    const t = e.priceOptions[0] || {},
      r = (n, i) => x.jsx(a5, { benefit: n }, i)
    return x.jsx('div', {
      className: 'p-4 max-w-sm',
      children: x.jsxs('div', {
        className: Kt(
          'flex flex-col p-6 mx-auto text-center text-textDark rounded-3xl shadow h-auto transition-transform duration-300 ease-in-out md:hover:translate-y-[-3rem]',
          {
            'bg-neutralMedium border-4 border-textLight sm:transform sm:translate-y-[-15px] sm:z-10': e.isHighlighted,
            'bg-neutralMedium border-4 border-spicyMustard': !e.isHighlighted
          }
        ),
        children: [
          x.jsx('h3', {
            className: 'text-3xl  text-textDark mb-4',
            children: e.heading
          }),
          x.jsxs('div', {
            className: 'flex flex-col justify-between flex-grow',
            children: [
              x.jsx('p', {
                className: ' sm:text-lg text-textDark mb-4',
                children: e.description
              }),
              x.jsxs('div', {
                className: 'flex justify-center items-baseline my-4',
                children: [
                  x.jsx('span', {
                    className: 'mr-2 text-4xl ',
                    children: t.price
                  }),
                  x.jsxs('span', {
                    className: 'font-body',
                    children: ['/ ', t.duration]
                  })
                ]
              }),
              e.benefits &&
                e.benefits.length > 0 &&
                x.jsx('div', {
                  className: 'flex flex-col justify-between flex-grow',
                  children: x.jsx('ul', {
                    role: 'list',
                    className: 'space-y-4 text-left',
                    children: e.benefits.map(r)
                  })
                }),
              x.jsx('div', {
                className: 'inline-flex items-center pt-4 justify-center',
                children: x.jsx(B2, {
                  className: 'border-0',
                  children: x.jsx('a', {
                    className: 'px-10 py-4 text-2xl md:text-xl',
                    href: 'mailto:lucademichieli@posteo.net',
                    children: 'Anmelden'
                  })
                })
              })
            ]
          })
        ]
      })
    })
  },
  s5 = ({ isChecked: e, onToggle: t, inactiveLabel: r, activeLabel: n }) => {
    const i = (l) => {
      t(l.target.checked)
    }
    return x.jsxs('label', {
      className: 'inline-flex items-center cursor-pointer',
      children: [
        x.jsx('input', {
          type: 'checkbox',
          checked: e,
          onChange: i,
          className: 'sr-only peer'
        }),
        x.jsx('div', {
          className: Kt(
            'relative w-11 h-6 rounded-full transition-all',
            e ? 'bg-textDark peer-checked:bg-textDark' : 'bg-gray-200',
            'peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-500 peer-focus:ring-opacity-50',
            'peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full',
            'peer-checked:after:border-textLight after:content-[""] after:absolute after:top-[2px] after:left-[2px]',
            'after:bg-textLight after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5'
          )
        }),
        x.jsx('span', {
          className: 'ml-3 text-xl text-textLight',
          children: e ? n : r
        })
      ]
    })
  },
  rs = ({ type: e = 'default', fillColor: t = '#b87333', backgroundColor: r = 'textLight', className: n = '' }) => {
    const i = {
        opaqueWavesBottom: [
          {
            d: 'M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z',
            opacity: 0.25
          },
          {
            d: 'M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z',
            opacity: 0.5
          },
          {
            d: 'M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z',
            opacity: 1
          }
        ],
        assymetricalCurveBottom: [
          {
            d: 'M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z',
            opacity: 1
          }
        ],
        waveBottom: [
          {
            d: 'M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z',
            opacity: 1
          }
        ],
        shapeBottom: [
          {
            d: 'M0,0V112.77C0,65.52,268.63,7.23,600,7.23S1200,65.52,1200,112.77V0Z',
            opacity: 1
          }
        ]
      },
      l = i[e] || i.waveBottom
    return x.jsx('div', {
      className: Kt('w-full relative overflow-hidden', n, `bg-${r}`),
      children: x.jsx('svg', {
        'data-name': 'Layer 1',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 1200 120',
        preserveAspectRatio: 'none',
        className: 'w-full',
        children: l.map((a, o) => x.jsx('path', { d: a.d, opacity: a.opacity, fill: t, className: 'shape-fill' }, o))
      })
    })
  }
var $2 = {},
  H2 = {},
  Kc = {}
;(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    Object.defineProperty(e, 'default', {
      enumerable: !0,
      get: function () {
        return t
      }
    })
  function t(r) {
    if (((r = `${r}`), r === '0')) return '0'
    if (/^[+-]?(\d+|\d*\.\d+)(e[+-]?\d+)?(%|\w+)?$/.test(r)) return r.replace(/^[+-]?/, (i) => (i === '-' ? '' : '-'))
    let n = ['var', 'calc', 'min', 'max', 'clamp']
    for (const i of n) if (r.includes(`${i}(`)) return `calc(${r} * -1)`
  }
})(Kc)
var W2 = {}
;(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    Object.defineProperty(e, 'default', {
      enumerable: !0,
      get: function () {
        return t
      }
    })
  const t = [
    'preflight',
    'container',
    'accessibility',
    'pointerEvents',
    'visibility',
    'position',
    'inset',
    'isolation',
    'zIndex',
    'order',
    'gridColumn',
    'gridColumnStart',
    'gridColumnEnd',
    'gridRow',
    'gridRowStart',
    'gridRowEnd',
    'float',
    'clear',
    'margin',
    'boxSizing',
    'lineClamp',
    'display',
    'aspectRatio',
    'size',
    'height',
    'maxHeight',
    'minHeight',
    'width',
    'minWidth',
    'maxWidth',
    'flex',
    'flexShrink',
    'flexGrow',
    'flexBasis',
    'tableLayout',
    'captionSide',
    'borderCollapse',
    'borderSpacing',
    'transformOrigin',
    'translate',
    'rotate',
    'skew',
    'scale',
    'transform',
    'animation',
    'cursor',
    'touchAction',
    'userSelect',
    'resize',
    'scrollSnapType',
    'scrollSnapAlign',
    'scrollSnapStop',
    'scrollMargin',
    'scrollPadding',
    'listStylePosition',
    'listStyleType',
    'listStyleImage',
    'appearance',
    'columns',
    'breakBefore',
    'breakInside',
    'breakAfter',
    'gridAutoColumns',
    'gridAutoFlow',
    'gridAutoRows',
    'gridTemplateColumns',
    'gridTemplateRows',
    'flexDirection',
    'flexWrap',
    'placeContent',
    'placeItems',
    'alignContent',
    'alignItems',
    'justifyContent',
    'justifyItems',
    'gap',
    'space',
    'divideWidth',
    'divideStyle',
    'divideColor',
    'divideOpacity',
    'placeSelf',
    'alignSelf',
    'justifySelf',
    'overflow',
    'overscrollBehavior',
    'scrollBehavior',
    'textOverflow',
    'hyphens',
    'textLightspace',
    'textWrap',
    'wordBreak',
    'borderRadius',
    'borderWidth',
    'borderStyle',
    'borderColor',
    'borderOpacity',
    'backgroundColor',
    'backgroundOpacity',
    'backgroundImage',
    'gradientColorStops',
    'boxDecorationBreak',
    'backgroundSize',
    'backgroundAttachment',
    'backgroundClip',
    'backgroundPosition',
    'backgroundRepeat',
    'backgroundOrigin',
    'fill',
    'stroke',
    'strokeWidth',
    'objectFit',
    'objectPosition',
    'padding',
    'textAlign',
    'textIndent',
    'verticalAlign',
    'fontFamily',
    'fontSize',
    'fontWeight',
    'textTransform',
    'fontStyle',
    'fontVariantNumeric',
    'lineHeight',
    'letterSpacing',
    'textColor',
    'textOpacity',
    'textDecoration',
    'textDecorationColor',
    'textDecorationStyle',
    'textDecorationThickness',
    'textUnderlineOffset',
    'fontSmoothing',
    'placeholderColor',
    'placeholderOpacity',
    'caretColor',
    'secondaryColor',
    'opacity',
    'backgroundBlendMode',
    'mixBlendMode',
    'boxShadow',
    'boxShadowColor',
    'outlineStyle',
    'outlineWidth',
    'outlineOffset',
    'outlineColor',
    'ringWidth',
    'ringColor',
    'ringOpacity',
    'ringOffsetWidth',
    'ringOffsetColor',
    'blur',
    'brightness',
    'contrast',
    'dropShadow',
    'grayscale',
    'hueRotate',
    'invert',
    'saturate',
    'sepia',
    'filter',
    'backdropBlur',
    'backdropBrightness',
    'backdropContrast',
    'backdropGrayscale',
    'backdropHueRotate',
    'backdropInvert',
    'backdropOpacity',
    'backdropSaturate',
    'backdropSepia',
    'backdropFilter',
    'transitionProperty',
    'transitionDelay',
    'transitionDuration',
    'transitionTimingFunction',
    'willChange',
    'contain',
    'content',
    'forcedColorAdjust'
  ]
})(W2)
var Z2 = {}
;(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    Object.defineProperty(e, 'default', {
      enumerable: !0,
      get: function () {
        return t
      }
    })
  function t(r, n) {
    return r === void 0
      ? n
      : Array.isArray(r)
        ? r
        : [...new Set(n.filter((l) => r !== !1 && r[l] !== !1).concat(Object.keys(r).filter((l) => r[l] !== !1)))]
  }
})(Z2)
var q2 = {},
  ns = {},
  Qc = { exports: {} },
  ve = String,
  K2 = function () {
    return {
      isColorSupported: !1,
      reset: ve,
      bold: ve,
      dim: ve,
      italic: ve,
      underline: ve,
      inverse: ve,
      hidden: ve,
      strikethrough: ve,
      textDark: ve,
      red: ve,
      green: ve,
      yellow: ve,
      blue: ve,
      magenta: ve,
      cyan: ve,
      textLight: ve,
      gray: ve,
      bgtextDark: ve,
      bgRed: ve,
      bgGreen: ve,
      bgYellow: ve,
      bgBlue: ve,
      bgMagenta: ve,
      bgCyan: ve,
      bgtextLight: ve,
      textDarkBright: ve,
      redBright: ve,
      greenBright: ve,
      yellowBright: ve,
      blueBright: ve,
      magentaBright: ve,
      cyanBright: ve,
      textLightBright: ve,
      bgtextDarkBright: ve,
      bgRedBright: ve,
      bgGreenBright: ve,
      bgYellowBright: ve,
      bgBlueBright: ve,
      bgMagentaBright: ve,
      bgCyanBright: ve,
      bgtextLightBright: ve
    }
  }
Qc.exports = K2()
Qc.exports.createColors = K2
var Q2 = Qc.exports
;(function (e) {
  var t = {}
  Object.defineProperty(e, '__esModule', { value: !0 })
  function r(u, c) {
    for (var d in c) Object.defineProperty(u, d, { enumerable: !0, get: c[d] })
  }
  r(e, {
    dim: function () {
      return o
    },
    default: function () {
      return s
    }
  })
  const n = i(Q2)
  function i(u) {
    return u && u.__esModule ? u : { default: u }
  }
  let l = new Set()
  function a(u, c, d) {
    ;(typeof process < 'u' && t.JEST_WORKER_ID) ||
      (d && l.has(d)) ||
      (d && l.add(d), console.warn(''), c.forEach((h) => console.warn(u, '-', h)))
  }
  function o(u) {
    return n.default.dim(u)
  }
  const s = {
    info(u, c) {
      a(n.default.bold(n.default.cyan('info')), ...(Array.isArray(u) ? [u] : [c, u]))
    },
    warn(u, c) {
      a(n.default.bold(n.default.yellow('warn')), ...(Array.isArray(u) ? [u] : [c, u]))
    },
    risk(u, c) {
      a(n.default.bold(n.default.magenta('risk')), ...(Array.isArray(u) ? [u] : [c, u]))
    }
  }
})(ns)
;(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    Object.defineProperty(e, 'default', {
      enumerable: !0,
      get: function () {
        return i
      }
    })
  const t = r(ns)
  function r(l) {
    return l && l.__esModule ? l : { default: l }
  }
  function n({ version: l, from: a, to: o }) {
    t.default.warn(`${a}-color-renamed`, [
      `As of Tailwind CSS ${l}, \`${a}\` has been renamed to \`${o}\`.`,
      'Update your configuration file to silence this warning.'
    ])
  }
  const i = {
    inherit: 'inherit',
    current: 'currentColor',
    transparent: 'transparent',
    textDark: '#000',
    textLight: '#fff',
    slate: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
      950: '#020617'
    },
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
      950: '#030712'
    },
    zinc: {
      50: '#fafafa',
      100: '#f4f4f5',
      200: '#e4e4e7',
      300: '#d4d4d8',
      400: '#a1a1aa',
      500: '#71717a',
      600: '#52525b',
      700: '#3f3f46',
      800: '#27272a',
      900: '#18181b',
      950: '#09090b'
    },
    neutral: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
      950: '#0a0a0a'
    },
    stone: {
      50: '#fafaf9',
      100: '#f5f5f4',
      200: '#e7e5e4',
      300: '#d6d3d1',
      400: '#a8a29e',
      500: '#78716c',
      600: '#57534e',
      700: '#44403c',
      800: '#292524',
      900: '#1c1917',
      950: '#0c0a09'
    },
    red: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
      950: '#450a0a'
    },
    orange: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316',
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
      950: '#431407'
    },
    amber: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
      950: '#451a03'
    },
    yellow: {
      50: '#fefce8',
      100: '#fef9c3',
      200: '#fef08a',
      300: '#fde047',
      400: '#facc15',
      500: '#eab308',
      600: '#ca8a04',
      700: '#a16207',
      800: '#854d0e',
      900: '#713f12',
      950: '#422006'
    },
    lime: {
      50: '#f7fee7',
      100: '#ecfccb',
      200: '#d9f99d',
      300: '#bef264',
      400: '#a3e635',
      500: '#84cc16',
      600: '#65a30d',
      700: '#4d7c0f',
      800: '#3f6212',
      900: '#365314',
      950: '#1a2e05'
    },
    green: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
      950: '#052e16'
    },
    emerald: {
      50: '#ecfdf5',
      100: '#d1fae5',
      200: '#a7f3d0',
      300: '#6ee7b7',
      400: '#34d399',
      500: '#10b981',
      600: '#059669',
      700: '#047857',
      800: '#065f46',
      900: '#064e3b',
      950: '#022c22'
    },
    teal: {
      50: '#f0fdfa',
      100: '#ccfbf1',
      200: '#99f6e4',
      300: '#5eead4',
      400: '#2dd4bf',
      500: '#14b8a6',
      600: '#0d9488',
      700: '#0f766e',
      800: '#115e59',
      900: '#134e4a',
      950: '#042f2e'
    },
    cyan: {
      50: '#ecfeff',
      100: '#cffafe',
      200: '#a5f3fc',
      300: '#67e8f9',
      400: '#22d3ee',
      500: '#06b6d4',
      600: '#0891b2',
      700: '#0e7490',
      800: '#155e75',
      900: '#164e63',
      950: '#083344'
    },
    sky: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
      950: '#082f49'
    },
    blue: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554'
    },
    indigo: {
      50: '#eef2ff',
      100: '#e0e7ff',
      200: '#c7d2fe',
      300: '#a5b4fc',
      400: '#818cf8',
      500: '#6366f1',
      600: '#4f46e5',
      700: '#4338ca',
      800: '#3730a3',
      900: '#312e81',
      950: '#1e1b4b'
    },
    violet: {
      50: '#f5f3ff',
      100: '#ede9fe',
      200: '#ddd6fe',
      300: '#c4b5fd',
      400: '#a78bfa',
      500: '#8b5cf6',
      600: '#7c3aed',
      700: '#6d28d9',
      800: '#5b21b6',
      900: '#4c1d95',
      950: '#2e1065'
    },
    purple: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',
      600: '#9333ea',
      700: '#7e22ce',
      800: '#6b21a8',
      900: '#581c87',
      950: '#3b0764'
    },
    fuchsia: {
      50: '#fdf4ff',
      100: '#fae8ff',
      200: '#f5d0fe',
      300: '#f0abfc',
      400: '#e879f9',
      500: '#d946ef',
      600: '#c026d3',
      700: '#a21caf',
      800: '#86198f',
      900: '#701a75',
      950: '#4a044e'
    },
    pink: {
      50: '#fdf2f8',
      100: '#fce7f3',
      200: '#fbcfe8',
      300: '#f9a8d4',
      400: '#f472b6',
      500: '#ec4899',
      600: '#db2777',
      700: '#be185d',
      800: '#9d174d',
      900: '#831843',
      950: '#500724'
    },
    rose: {
      50: '#fff1f2',
      100: '#ffe4e6',
      200: '#fecdd3',
      300: '#fda4af',
      400: '#fb7185',
      500: '#f43f5e',
      600: '#e11d48',
      700: '#be123c',
      800: '#9f1239',
      900: '#881337',
      950: '#4c0519'
    },
    get lightBlue() {
      return n({ version: 'v2.2', from: 'lightBlue', to: 'sky' }), this.sky
    },
    get warmGray() {
      return n({ version: 'v3.0', from: 'warmGray', to: 'stone' }), this.stone
    },
    get trueGray() {
      return n({ version: 'v3.0', from: 'trueGray', to: 'neutral' }), this.neutral
    },
    get coolGray() {
      return n({ version: 'v3.0', from: 'coolGray', to: 'gray' }), this.gray
    },
    get blueGray() {
      return n({ version: 'v3.0', from: 'blueGray', to: 'slate' }), this.slate
    }
  }
})(q2)
var G2 = {}
;(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    Object.defineProperty(e, 'defaults', {
      enumerable: !0,
      get: function () {
        return t
      }
    })
  function t(r, ...n) {
    for (let a of n) {
      for (let o in a) {
        var i
        ;(!(r == null || (i = r.hasOwnProperty) === null || i === void 0) && i.call(r, o)) || (r[o] = a[o])
      }
      for (let o of Object.getOwnPropertySymbols(a)) {
        var l
        ;(!(r == null || (l = r.hasOwnProperty) === null || l === void 0) && l.call(r, o)) || (r[o] = a[o])
      }
    }
    return r
  }
})(G2)
var Y2 = {}
;(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    Object.defineProperty(e, 'toPath', {
      enumerable: !0,
      get: function () {
        return t
      }
    })
  function t(r) {
    if (Array.isArray(r)) return r
    let n = r.split('[').length - 1,
      i = r.split(']').length - 1
    if (n !== i) throw new Error(`Path is invalid. Has unbalanced brackets: ${r}`)
    return r.split(/\.(?![^\[]*\])|[\[\]]/g).filter(Boolean)
  }
})(Y2)
var X2 = {},
  is = {}
;(function (e) {
  var t = {}
  Object.defineProperty(e, '__esModule', { value: !0 })
  function r(h, v) {
    for (var g in v) Object.defineProperty(h, g, { enumerable: !0, get: v[g] })
  }
  r(e, {
    flagEnabled: function () {
      return s
    },
    issueFlagNotices: function () {
      return c
    },
    default: function () {
      return d
    }
  })
  const n = l(Q2),
    i = l(ns)
  function l(h) {
    return h && h.__esModule ? h : { default: h }
  }
  let a = {
      optimizeUniversalDefaults: !1,
      generalizedModifiers: !0,
      disableColorOpacityUtilitiesByDefault: !1,
      relativeContentPathsByDefault: !1
    },
    o = {
      future: [
        'hoverOnlyWhenSupported',
        'respectDefaultRingColorOpacity',
        'disableColorOpacityUtilitiesByDefault',
        'relativeContentPathsByDefault'
      ],
      experimental: ['optimizeUniversalDefaults', 'generalizedModifiers']
    }
  function s(h, v) {
    if (o.future.includes(v)) {
      var g, k, R
      return (
        h.future === 'all' ||
        ((R = (k = h == null || (g = h.future) === null || g === void 0 ? void 0 : g[v]) !== null && k !== void 0 ? k : a[v]) !== null &&
        R !== void 0
          ? R
          : !1)
      )
    }
    if (o.experimental.includes(v)) {
      var p, f, m
      return (
        h.experimental === 'all' ||
        ((m = (f = h == null || (p = h.experimental) === null || p === void 0 ? void 0 : p[v]) !== null && f !== void 0 ? f : a[v]) !==
          null && m !== void 0
          ? m
          : !1)
      )
    }
    return !1
  }
  function u(h) {
    if (h.experimental === 'all') return o.experimental
    var v
    return Object.keys((v = h == null ? void 0 : h.experimental) !== null && v !== void 0 ? v : {}).filter(
      (g) => o.experimental.includes(g) && h.experimental[g]
    )
  }
  function c(h) {
    if (t.JEST_WORKER_ID === void 0 && u(h).length > 0) {
      let v = u(h)
        .map((g) => n.default.yellow(g))
        .join(', ')
      i.default.warn('experimental-flags-enabled', [
        `You have enabled experimental features: ${v}`,
        'Experimental features in Tailwind CSS are not covered by semver, may introduce breaking changes, and can change at any time.'
      ])
    }
  }
  const d = o
})(is)
;(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    Object.defineProperty(e, 'normalizeConfig', {
      enumerable: !0,
      get: function () {
        return l
      }
    })
  const t = is,
    r = i(ns)
  function n(a) {
    if (typeof WeakMap != 'function') return null
    var o = new WeakMap(),
      s = new WeakMap()
    return (n = function (u) {
      return u ? s : o
    })(a)
  }
  function i(a, o) {
    if (a && a.__esModule) return a
    if (a === null || (typeof a != 'object' && typeof a != 'function')) return { default: a }
    var s = n(o)
    if (s && s.has(a)) return s.get(a)
    var u = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor
    for (var d in a)
      if (d !== 'default' && Object.prototype.hasOwnProperty.call(a, d)) {
        var h = c ? Object.getOwnPropertyDescriptor(a, d) : null
        h && (h.get || h.set) ? Object.defineProperty(u, d, h) : (u[d] = a[d])
      }
    return (u.default = a), s && s.set(a, u), u
  }
  function l(a) {
    if (
      ((() => {
        if (a.purge || !a.content || (!Array.isArray(a.content) && !(typeof a.content == 'object' && a.content !== null))) return !1
        if (Array.isArray(a.content))
          return a.content.every((u) =>
            typeof u == 'string'
              ? !0
              : !(
                  typeof (u == null ? void 0 : u.raw) != 'string' ||
                  (u != null && u.extension && typeof (u == null ? void 0 : u.extension) != 'string')
                )
          )
        if (typeof a.content == 'object' && a.content !== null) {
          if (Object.keys(a.content).some((u) => !['files', 'relative', 'extract', 'transform'].includes(u))) return !1
          if (Array.isArray(a.content.files)) {
            if (
              !a.content.files.every((u) =>
                typeof u == 'string'
                  ? !0
                  : !(
                      typeof (u == null ? void 0 : u.raw) != 'string' ||
                      (u != null && u.extension && typeof (u == null ? void 0 : u.extension) != 'string')
                    )
              )
            )
              return !1
            if (typeof a.content.extract == 'object') {
              for (let u of Object.values(a.content.extract)) if (typeof u != 'function') return !1
            } else if (!(a.content.extract === void 0 || typeof a.content.extract == 'function')) return !1
            if (typeof a.content.transform == 'object') {
              for (let u of Object.values(a.content.transform)) if (typeof u != 'function') return !1
            } else if (!(a.content.transform === void 0 || typeof a.content.transform == 'function')) return !1
            if (typeof a.content.relative != 'boolean' && typeof a.content.relative < 'u') return !1
          }
          return !0
        }
        return !1
      })() ||
        r.default.warn('purge-deprecation', [
          'The `purge`/`content` options have changed in Tailwind CSS v3.0.',
          'Update your configuration file to eliminate this warning.',
          'https://tailwindcss.com/docs/upgrade-guide#configure-content-sources'
        ]),
      (a.safelist = (() => {
        var u
        let { content: c, purge: d, safelist: h } = a
        return Array.isArray(h)
          ? h
          : Array.isArray(c == null ? void 0 : c.safelist)
            ? c.safelist
            : Array.isArray(d == null ? void 0 : d.safelist)
              ? d.safelist
              : Array.isArray(d == null || (u = d.options) === null || u === void 0 ? void 0 : u.safelist)
                ? d.options.safelist
                : []
      })()),
      (a.blocklist = (() => {
        let { blocklist: u } = a
        if (Array.isArray(u)) {
          if (u.every((c) => typeof c == 'string')) return u
          r.default.warn('blocklist-invalid', [
            'The `blocklist` option must be an array of strings.',
            'https://tailwindcss.com/docs/content-configuration#discarding-classes'
          ])
        }
        return []
      })()),
      typeof a.prefix == 'function')
    )
      r.default.warn('prefix-function', [
        'As of Tailwind CSS v3.0, `prefix` cannot be a function.',
        'Update `prefix` in your configuration to be a string to eliminate this warning.',
        'https://tailwindcss.com/docs/upgrade-guide#prefix-cannot-be-a-function'
      ]),
        (a.prefix = '')
    else {
      var s
      a.prefix = (s = a.prefix) !== null && s !== void 0 ? s : ''
    }
    a.content = {
      relative: (() => {
        let { content: u } = a
        return u != null && u.relative ? u.relative : (0, t.flagEnabled)(a, 'relativeContentPathsByDefault')
      })(),
      files: (() => {
        let { content: u, purge: c } = a
        return Array.isArray(c)
          ? c
          : Array.isArray(c == null ? void 0 : c.content)
            ? c.content
            : Array.isArray(u)
              ? u
              : Array.isArray(u == null ? void 0 : u.content)
                ? u.content
                : Array.isArray(u == null ? void 0 : u.files)
                  ? u.files
                  : []
      })(),
      extract: (() => {
        let u = (() => {
            var h, v, g, k, R, p, f, m, b, z
            return !((h = a.purge) === null || h === void 0) && h.extract
              ? a.purge.extract
              : !((v = a.content) === null || v === void 0) && v.extract
                ? a.content.extract
                : !((g = a.purge) === null || g === void 0 || (k = g.extract) === null || k === void 0) && k.DEFAULT
                  ? a.purge.extract.DEFAULT
                  : !((R = a.content) === null || R === void 0 || (p = R.extract) === null || p === void 0) && p.DEFAULT
                    ? a.content.extract.DEFAULT
                    : !((f = a.purge) === null || f === void 0 || (m = f.options) === null || m === void 0) && m.extractors
                      ? a.purge.options.extractors
                      : !((b = a.content) === null || b === void 0 || (z = b.options) === null || z === void 0) && z.extractors
                        ? a.content.options.extractors
                        : {}
          })(),
          c = {},
          d = (() => {
            var h, v, g, k
            if (!((h = a.purge) === null || h === void 0 || (v = h.options) === null || v === void 0) && v.defaultExtractor)
              return a.purge.options.defaultExtractor
            if (!((g = a.content) === null || g === void 0 || (k = g.options) === null || k === void 0) && k.defaultExtractor)
              return a.content.options.defaultExtractor
          })()
        if ((d !== void 0 && (c.DEFAULT = d), typeof u == 'function')) c.DEFAULT = u
        else if (Array.isArray(u)) for (let { extensions: h, extractor: v } of u ?? []) for (let g of h) c[g] = v
        else typeof u == 'object' && u !== null && Object.assign(c, u)
        return c
      })(),
      transform: (() => {
        let u = (() => {
            var d, h, v, g, k, R
            return !((d = a.purge) === null || d === void 0) && d.transform
              ? a.purge.transform
              : !((h = a.content) === null || h === void 0) && h.transform
                ? a.content.transform
                : !((v = a.purge) === null || v === void 0 || (g = v.transform) === null || g === void 0) && g.DEFAULT
                  ? a.purge.transform.DEFAULT
                  : !((k = a.content) === null || k === void 0 || (R = k.transform) === null || R === void 0) && R.DEFAULT
                    ? a.content.transform.DEFAULT
                    : {}
          })(),
          c = {}
        return typeof u == 'function' ? (c.DEFAULT = u) : typeof u == 'object' && u !== null && Object.assign(c, u), c
      })()
    }
    for (let u of a.content.files)
      if (typeof u == 'string' && /{([^,]*?)}/g.test(u)) {
        r.default.warn('invalid-glob-braces', [
          `The glob pattern ${(0, r.dim)(u)} in your Tailwind CSS configuration is invalid.`,
          `Update it to ${(0, r.dim)(u.replace(/{([^,]*?)}/g, '$1'))} to silence this warning.`
        ])
        break
      }
    return a
  }
})(X2)
var J2 = {}
;(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    Object.defineProperty(e, 'default', {
      enumerable: !0,
      get: function () {
        return t
      }
    })
  function t(r) {
    if (Object.prototype.toString.call(r) !== '[object Object]') return !1
    const n = Object.getPrototypeOf(r)
    return n === null || Object.getPrototypeOf(n) === null
  }
})(J2)
var Gc = {}
;(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    Object.defineProperty(e, 'cloneDeep', {
      enumerable: !0,
      get: function () {
        return t
      }
    })
  function t(r) {
    return Array.isArray(r)
      ? r.map((n) => t(n))
      : typeof r == 'object' && r !== null
        ? Object.fromEntries(Object.entries(r).map(([n, i]) => [n, t(i)]))
        : r
  }
})(Gc)
var eh = {},
  th = {}
;(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    Object.defineProperty(e, 'default', {
      enumerable: !0,
      get: function () {
        return t
      }
    })
  function t(r) {
    return r.replace(/\\,/g, '\\2c ')
  }
})(th)
var Yc = {},
  Xc = {},
  rh = {}
;(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    Object.defineProperty(e, 'default', {
      enumerable: !0,
      get: function () {
        return t
      }
    })
  const t = {
    aliceblue: [240, 248, 255],
    antiquetextLight: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    textDark: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floraltextLight: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghosttextLight: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajotextLight: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    neutralMediumybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    textLight: [255, 255, 255],
    textLightsmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50]
  }
})(rh)
;(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 })
  function t(g, k) {
    for (var R in k) Object.defineProperty(g, R, { enumerable: !0, get: k[R] })
  }
  t(e, {
    parseColor: function () {
      return h
    },
    formatColor: function () {
      return v
    }
  })
  const r = n(rh)
  function n(g) {
    return g && g.__esModule ? g : { default: g }
  }
  let i = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i,
    l = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,
    a = /(?:\d+|\d*\.\d+)%?/,
    o = /(?:\s*,\s*|\s+)/,
    s = /\s*[,/]\s*/,
    u = /var\(--(?:[^ )]*?)(?:,(?:[^ )]*?|var\(--[^ )]*?\)))?\)/,
    c = new RegExp(
      `^(rgba?)\\(\\s*(${a.source}|${u.source})(?:${o.source}(${a.source}|${u.source}))?(?:${o.source}(${a.source}|${u.source}))?(?:${s.source}(${a.source}|${u.source}))?\\s*\\)$`
    ),
    d = new RegExp(
      `^(hsla?)\\(\\s*((?:${a.source})(?:deg|rad|grad|turn)?|${u.source})(?:${o.source}(${a.source}|${u.source}))?(?:${o.source}(${a.source}|${u.source}))?(?:${s.source}(${a.source}|${u.source}))?\\s*\\)$`
    )
  function h(g, { loose: k = !1 } = {}) {
    var R, p
    if (typeof g != 'string') return null
    if (((g = g.trim()), g === 'transparent')) return { mode: 'rgb', color: ['0', '0', '0'], alpha: '0' }
    if (g in r.default) return { mode: 'rgb', color: r.default[g].map((_) => _.toString()) }
    let f = g.replace(l, (_, Z, A, T, M) => ['#', Z, Z, A, A, T, T, M ? M + M : ''].join('')).match(i)
    if (f !== null)
      return {
        mode: 'rgb',
        color: [parseInt(f[1], 16), parseInt(f[2], 16), parseInt(f[3], 16)].map((_) => _.toString()),
        alpha: f[4] ? (parseInt(f[4], 16) / 255).toString() : void 0
      }
    var m
    let b = (m = g.match(c)) !== null && m !== void 0 ? m : g.match(d)
    if (b === null) return null
    let z = [b[2], b[3], b[4]].filter(Boolean).map((_) => _.toString())
    return z.length === 2 && z[0].startsWith('var(')
      ? { mode: b[1], color: [z[0]], alpha: z[1] }
      : (!k && z.length !== 3) || (z.length < 3 && !z.some((_) => /^var\(.*?\)$/.test(_)))
        ? null
        : {
            mode: b[1],
            color: z,
            alpha: (R = b[5]) === null || R === void 0 || (p = R.toString) === null || p === void 0 ? void 0 : p.call(R)
          }
  }
  function v({ mode: g, color: k, alpha: R }) {
    let p = R !== void 0
    return g === 'rgba' || g === 'hsla' ? `${g}(${k.join(', ')}${p ? `, ${R}` : ''})` : `${g}(${k.join(' ')}${p ? ` / ${R}` : ''})`
  }
})(Xc)
;(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 })
  function t(l, a) {
    for (var o in a) Object.defineProperty(l, o, { enumerable: !0, get: a[o] })
  }
  t(e, {
    withAlphaValue: function () {
      return n
    },
    default: function () {
      return i
    }
  })
  const r = Xc
  function n(l, a, o) {
    if (typeof l == 'function') return l({ opacityValue: a })
    let s = (0, r.parseColor)(l, { loose: !0 })
    return s === null ? o : (0, r.formatColor)({ ...s, alpha: a })
  }
  function i({ color: l, property: a, variable: o }) {
    let s = [].concat(a)
    if (typeof l == 'function')
      return {
        [o]: '1',
        ...Object.fromEntries(s.map((c) => [c, l({ opacityVariable: o, opacityValue: `var(${o})` })]))
      }
    const u = (0, r.parseColor)(l)
    return u === null
      ? Object.fromEntries(s.map((c) => [c, l]))
      : u.alpha !== void 0
        ? Object.fromEntries(s.map((c) => [c, l]))
        : {
            [o]: '1',
            ...Object.fromEntries(s.map((c) => [c, (0, r.formatColor)({ ...u, alpha: `var(${o})` })]))
          }
  }
})(Yc)
var Jc = {},
  nh = {},
  ls = {}
;(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    Object.defineProperty(e, 'splitAtTopLevelOnly', {
      enumerable: !0,
      get: function () {
        return t
      }
    })
  function t(r, n) {
    let i = [],
      l = [],
      a = 0,
      o = !1
    for (let s = 0; s < r.length; s++) {
      let u = r[s]
      i.length === 0 &&
        u === n[0] &&
        !o &&
        (n.length === 1 || r.slice(s, s + n.length) === n) &&
        (l.push(r.slice(a, s)), (a = s + n.length)),
        (o = o ? !1 : u === '\\'),
        u === '(' || u === '[' || u === '{'
          ? i.push(u)
          : ((u === ')' && i[i.length - 1] === '(') || (u === ']' && i[i.length - 1] === '[') || (u === '}' && i[i.length - 1] === '{')) &&
            i.pop()
    }
    return l.push(r.slice(a)), l
  }
})(ls)
;(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 })
  function t(s, u) {
    for (var c in u) Object.defineProperty(s, c, { enumerable: !0, get: u[c] })
  }
  t(e, {
    parseBoxShadowValue: function () {
      return a
    },
    formatBoxShadowValue: function () {
      return o
    }
  })
  const r = ls
  let n = new Set(['inset', 'inherit', 'initial', 'revert', 'unset']),
    i = /\ +(?![^(]*\))/g,
    l = /^-?(\d+|\.\d+)(.*?)$/g
  function a(s) {
    return (0, r.splitAtTopLevelOnly)(s, ',').map((c) => {
      let d = c.trim(),
        h = { raw: d },
        v = d.split(i),
        g = new Set()
      for (let k of v)
        (l.lastIndex = 0),
          !g.has('KEYWORD') && n.has(k)
            ? ((h.keyword = k), g.add('KEYWORD'))
            : l.test(k)
              ? g.has('X')
                ? g.has('Y')
                  ? g.has('BLUR')
                    ? g.has('SPREAD') || ((h.spread = k), g.add('SPREAD'))
                    : ((h.blur = k), g.add('BLUR'))
                  : ((h.y = k), g.add('Y'))
                : ((h.x = k), g.add('X'))
              : h.color
                ? (h.unknown || (h.unknown = []), h.unknown.push(k))
                : (h.color = k)
      return (h.valid = h.x !== void 0 && h.y !== void 0), h
    })
  }
  function o(s) {
    return s.map((u) => (u.valid ? [u.keyword, u.x, u.y, u.blur, u.spread, u.color].filter(Boolean).join(' ') : u.raw)).join(', ')
  }
})(nh)
;(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 })
  function t(O, j) {
    for (var B in j) Object.defineProperty(O, B, { enumerable: !0, get: j[B] })
  }
  t(e, {
    normalize: function () {
      return s
    },
    normalizeAttributeSelectors: function () {
      return u
    },
    url: function () {
      return d
    },
    number: function () {
      return h
    },
    percentage: function () {
      return v
    },
    length: function () {
      return R
    },
    lineWidth: function () {
      return f
    },
    shadow: function () {
      return m
    },
    color: function () {
      return b
    },
    image: function () {
      return z
    },
    gradient: function () {
      return Z
    },
    position: function () {
      return T
    },
    familyName: function () {
      return M
    },
    genericName: function () {
      return C
    },
    absoluteSize: function () {
      return U
    },
    relativeSize: function () {
      return X
    }
  })
  const r = Xc,
    n = nh,
    i = ls
  let l = ['min', 'max', 'clamp', 'calc']
  function a(O) {
    return l.some((j) => new RegExp(`^${j}\\(.*\\)`).test(O))
  }
  const o = new Set([
    'scroll-timeline-name',
    'timeline-scope',
    'view-timeline-name',
    'font-palette',
    'anchor-name',
    'anchor-scope',
    'position-anchor',
    'position-try-options',
    'scroll-timeline',
    'animation-timeline',
    'view-timeline',
    'position-try'
  ])
  function s(O, j = null, B = !0) {
    let I = j && o.has(j.property)
    return O.startsWith('--') && !I
      ? `var(${O})`
      : O.includes('url(')
        ? O.split(/(url\(.*?\))/g)
            .filter(Boolean)
            .map((ce) => (/^url\(.*?\)$/.test(ce) ? ce : s(ce, j, !1)))
            .join('')
        : ((O = O.replace(/([^\\])_+/g, (ce, be) => be + ' '.repeat(ce.length - 1))
            .replace(/^_/g, ' ')
            .replace(/\\_/g, '_')),
          B && (O = O.trim()),
          (O = c(O)),
          O)
  }
  function u(O) {
    return (
      O.includes('=') &&
        (O = O.replace(/(=.*)/g, (j, B) => {
          if (B[1] === "'" || B[1] === '"') return B
          if (B.length > 2) {
            let I = B[B.length - 1]
            if (B[B.length - 2] === ' ' && (I === 'i' || I === 'I' || I === 's' || I === 'S'))
              return `="${B.slice(1, -2)}" ${B[B.length - 1]}`
          }
          return `="${B.slice(1)}"`
        })),
      O
    )
  }
  function c(O) {
    let j = ['theme'],
      B = [
        'min-content',
        'max-content',
        'fit-content',
        'safe-area-inset-top',
        'safe-area-inset-right',
        'safe-area-inset-bottom',
        'safe-area-inset-left',
        'titlebar-area-x',
        'titlebar-area-y',
        'titlebar-area-width',
        'titlebar-area-height',
        'keyboard-inset-top',
        'keyboard-inset-right',
        'keyboard-inset-bottom',
        'keyboard-inset-left',
        'keyboard-inset-width',
        'keyboard-inset-height',
        'radial-gradient',
        'linear-gradient',
        'conic-gradient',
        'repeating-radial-gradient',
        'repeating-linear-gradient',
        'repeating-conic-gradient',
        'anchor-size'
      ]
    return O.replace(/(calc|min|max|clamp)\(.+\)/g, (I) => {
      let ce = ''
      function be() {
        let Oe = ce.trimEnd()
        return Oe[Oe.length - 1]
      }
      for (let Oe = 0; Oe < I.length; Oe++) {
        let Pe = function (yt) {
            return yt.split('').every((Yt, Fe) => I[Oe + Fe] === Yt)
          },
          at = function (yt) {
            let Yt = 1 / 0
            for (let cr of yt) {
              let Er = I.indexOf(cr, Oe)
              Er !== -1 && Er < Yt && (Yt = Er)
            }
            let Fe = I.slice(Oe, Yt)
            return (Oe += Fe.length - 1), Fe
          }
        var Rt = Pe,
          Ke = at
        let br = I[Oe]
        if (Pe('var')) ce += at([')', ','])
        else if (B.some((yt) => Pe(yt))) {
          let yt = B.find((Yt) => Pe(Yt))
          ;(ce += yt), (Oe += yt.length - 1)
        } else
          j.some((yt) => Pe(yt))
            ? (ce += at([')']))
            : Pe('[')
              ? (ce += at([']']))
              : ['+', '-', '*', '/'].includes(br) && !['(', '+', '-', '*', '/', ','].includes(be())
                ? (ce += ` ${br} `)
                : (ce += br)
      }
      return ce.replace(/\s+/g, ' ')
    })
  }
  function d(O) {
    return O.startsWith('url(')
  }
  function h(O) {
    return !isNaN(Number(O)) || a(O)
  }
  function v(O) {
    return (O.endsWith('%') && h(O.slice(0, -1))) || a(O)
  }
  let k = `(?:${['cm', 'mm', 'Q', 'in', 'pc', 'pt', 'px', 'em', 'ex', 'ch', 'rem', 'lh', 'rlh', 'vw', 'vh', 'vmin', 'vmax', 'vb', 'vi', 'svw', 'svh', 'lvw', 'lvh', 'dvw', 'dvh', 'cqw', 'cqh', 'cqi', 'cqb', 'cqmin', 'cqmax'].join('|')})`
  function R(O) {
    return O === '0' || new RegExp(`^[+-]?[0-9]*.?[0-9]+(?:[eE][+-]?[0-9]+)?${k}$`).test(O) || a(O)
  }
  let p = new Set(['thin', 'medium', 'thick'])
  function f(O) {
    return p.has(O)
  }
  function m(O) {
    let j = (0, n.parseBoxShadowValue)(s(O))
    for (let B of j) if (!B.valid) return !1
    return !0
  }
  function b(O) {
    let j = 0
    return (0, i.splitAtTopLevelOnly)(O, '_').every(
      (I) => ((I = s(I)), I.startsWith('var(') ? !0 : (0, r.parseColor)(I, { loose: !0 }) !== null ? (j++, !0) : !1)
    )
      ? j > 0
      : !1
  }
  function z(O) {
    let j = 0
    return (0, i.splitAtTopLevelOnly)(O, ',').every(
      (I) => (
        (I = s(I)),
        I.startsWith('var(')
          ? !0
          : d(I) || Z(I) || ['element(', 'image(', 'cross-fade(', 'image-set('].some((ce) => I.startsWith(ce))
            ? (j++, !0)
            : !1
      )
    )
      ? j > 0
      : !1
  }
  let _ = new Set([
    'conic-gradient',
    'linear-gradient',
    'radial-gradient',
    'repeating-conic-gradient',
    'repeating-linear-gradient',
    'repeating-radial-gradient'
  ])
  function Z(O) {
    O = s(O)
    for (let j of _) if (O.startsWith(`${j}(`)) return !0
    return !1
  }
  let A = new Set(['center', 'top', 'right', 'bottom', 'left'])
  function T(O) {
    let j = 0
    return (0, i.splitAtTopLevelOnly)(O, '_').every(
      (I) => ((I = s(I)), I.startsWith('var(') ? !0 : A.has(I) || R(I) || v(I) ? (j++, !0) : !1)
    )
      ? j > 0
      : !1
  }
  function M(O) {
    let j = 0
    return (0, i.splitAtTopLevelOnly)(O, ',').every(
      (I) => ((I = s(I)), I.startsWith('var(') ? !0 : (I.includes(' ') && !/(['"])([^"']+)\1/g.test(I)) || /^\d/g.test(I) ? !1 : (j++, !0))
    )
      ? j > 0
      : !1
  }
  let q = new Set([
    'serif',
    'sans-serif',
    'monospace',
    'cursive',
    'fantasy',
    'system-ui',
    'ui-serif',
    'ui-sans-serif',
    'ui-monospace',
    'ui-rounded',
    'math',
    'emoji',
    'fangsong'
  ])
  function C(O) {
    return q.has(O)
  }
  let L = new Set(['xx-small', 'x-small', 'small', 'medium', 'large', 'x-large', 'xx-large', 'xxx-large'])
  function U(O) {
    return L.has(O)
  }
  let F = new Set(['larger', 'smaller'])
  function X(O) {
    return F.has(O)
  }
})(Jc)
var ih = {}
;(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    Object.defineProperty(e, 'backgroundSize', {
      enumerable: !0,
      get: function () {
        return n
      }
    })
  const t = Jc,
    r = ls
  function n(i) {
    let l = ['cover', 'contain']
    return (0, r.splitAtTopLevelOnly)(i, ',').every((a) => {
      let o = (0, r.splitAtTopLevelOnly)(a, '_').filter(Boolean)
      return o.length === 1 && l.includes(o[0])
        ? !0
        : o.length !== 1 && o.length !== 2
          ? !1
          : o.every((s) => (0, t.length)(s) || (0, t.percentage)(s) || s === 'auto')
    })
  }
})(ih)
;(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 })
  function t(T, M) {
    for (var q in M) Object.defineProperty(T, q, { enumerable: !0, get: M[q] })
  }
  t(e, {
    updateAllClasses: function () {
      return u
    },
    asValue: function () {
      return h
    },
    parseColorFormat: function () {
      return k
    },
    asColor: function () {
      return p
    },
    asLookupValue: function () {
      return f
    },
    typeMap: function () {
      return b
    },
    coerceValue: function () {
      return Z
    },
    getMatchingTypes: function () {
      return A
    }
  })
  const r = s(th),
    n = Yc,
    i = Jc,
    l = s(Kc),
    a = ih,
    o = is
  function s(T) {
    return T && T.__esModule ? T : { default: T }
  }
  function u(T, M) {
    T.walkClasses((q) => {
      ;(q.value = M(q.value)), q.raws && q.raws.value && (q.raws.value = (0, r.default)(q.raws.value))
    })
  }
  function c(T, M) {
    if (!v(T)) return
    let q = T.slice(1, -1)
    if (M(q)) return (0, i.normalize)(q)
  }
  function d(T, M = {}, q) {
    let C = M[T]
    if (C !== void 0) return (0, l.default)(C)
    if (v(T)) {
      let L = c(T, q)
      return L === void 0 ? void 0 : (0, l.default)(L)
    }
  }
  function h(T, M = {}, { validate: q = () => !0 } = {}) {
    var C
    let L = (C = M.values) === null || C === void 0 ? void 0 : C[T]
    return L !== void 0 ? L : M.supportsNegativeValues && T.startsWith('-') ? d(T.slice(1), M.values, q) : c(T, q)
  }
  function v(T) {
    return T.startsWith('[') && T.endsWith(']')
  }
  function g(T) {
    let M = T.lastIndexOf('/'),
      q = T.lastIndexOf('[', M),
      C = T.indexOf(']', M)
    return (
      T[M - 1] === ']' || T[M + 1] === '[' || (q !== -1 && C !== -1 && q < M && M < C && (M = T.lastIndexOf('/', q))),
      M === -1 || M === T.length - 1 ? [T, void 0] : v(T) && !T.includes(']/[') ? [T, void 0] : [T.slice(0, M), T.slice(M + 1)]
    )
  }
  function k(T) {
    if (typeof T == 'string' && T.includes('<alpha-value>')) {
      let M = T
      return ({ opacityValue: q = 1 }) => M.replace(/<alpha-value>/g, q)
    }
    return T
  }
  function R(T) {
    return (0, i.normalize)(T.slice(1, -1))
  }
  function p(T, M = {}, { tailwindConfig: q = {} } = {}) {
    var C
    if (((C = M.values) === null || C === void 0 ? void 0 : C[T]) !== void 0) {
      var L
      return k((L = M.values) === null || L === void 0 ? void 0 : L[T])
    }
    let [U, F] = g(T)
    if (F !== void 0) {
      var X, O, j, B
      let I = (B = (X = M.values) === null || X === void 0 ? void 0 : X[U]) !== null && B !== void 0 ? B : v(U) ? U.slice(1, -1) : void 0
      return I === void 0
        ? void 0
        : ((I = k(I)),
          v(F)
            ? (0, n.withAlphaValue)(I, R(F))
            : ((O = q.theme) === null || O === void 0 || (j = O.opacity) === null || j === void 0 ? void 0 : j[F]) === void 0
              ? void 0
              : (0, n.withAlphaValue)(I, q.theme.opacity[F]))
    }
    return h(T, M, { validate: i.color })
  }
  function f(T, M = {}) {
    var q
    return (q = M.values) === null || q === void 0 ? void 0 : q[T]
  }
  function m(T) {
    return (M, q) => h(M, q, { validate: T })
  }
  let b = {
      any: h,
      color: p,
      url: m(i.url),
      image: m(i.image),
      length: m(i.length),
      percentage: m(i.percentage),
      position: m(i.position),
      lookup: f,
      'generic-name': m(i.genericName),
      'family-name': m(i.familyName),
      number: m(i.number),
      'line-width': m(i.lineWidth),
      'absolute-size': m(i.absoluteSize),
      'relative-size': m(i.relativeSize),
      shadow: m(i.shadow),
      size: m(a.backgroundSize)
    },
    z = Object.keys(b)
  function _(T, M) {
    let q = T.indexOf(M)
    return q === -1 ? [void 0, T] : [T.slice(0, q), T.slice(q + 1)]
  }
  function Z(T, M, q, C) {
    if (q.values && M in q.values)
      for (let { type: U } of T ?? []) {
        let F = b[U](M, q, { tailwindConfig: C })
        if (F !== void 0) return [F, U, null]
      }
    if (v(M)) {
      let U = M.slice(1, -1),
        [F, X] = _(U, ':')
      if (!/^[\w-_]+$/g.test(F)) X = U
      else if (F !== void 0 && !z.includes(F)) return []
      if (X.length > 0 && z.includes(F)) return [h(`[${X}]`, q), F, null]
    }
    let L = A(T, M, q, C)
    for (let U of L) return U
    return []
  }
  function* A(T, M, q, C) {
    let L = (0, o.flagEnabled)(C, 'generalizedModifiers'),
      [U, F] = g(M)
    if (
      ((L && q.modifiers != null && (q.modifiers === 'any' || (typeof q.modifiers == 'object' && ((F && v(F)) || F in q.modifiers)))) ||
        ((U = M), (F = void 0)),
      F !== void 0 && U === '' && (U = 'DEFAULT'),
      F !== void 0 && typeof q.modifiers == 'object')
    ) {
      var O, j
      let B = (j = (O = q.modifiers) === null || O === void 0 ? void 0 : O[F]) !== null && j !== void 0 ? j : null
      B !== null ? (F = B) : v(F) && (F = R(F))
    }
    for (let { type: B } of T ?? []) {
      let I = b[B](U, q, { tailwindConfig: C })
      I !== void 0 && (yield [I, B, F ?? null])
    }
  }
})(eh)
var lh = {}
;(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    Object.defineProperty(e, 'default', {
      enumerable: !0,
      get: function () {
        return t
      }
    })
  function t(r) {
    return typeof r == 'function' ? r({}) : r
  }
})(lh)
;(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    Object.defineProperty(e, 'default', {
      enumerable: !0,
      get: function () {
        return q
      }
    })
  const t = v(Kc),
    r = v(W2),
    n = v(Z2),
    i = v(q2),
    l = G2,
    a = Y2,
    o = X2,
    s = v(J2),
    u = Gc,
    c = eh,
    d = Yc,
    h = v(lh)
  function v(C) {
    return C && C.__esModule ? C : { default: C }
  }
  function g(C) {
    return typeof C == 'function'
  }
  function k(C, ...L) {
    let U = L.pop()
    for (let F of L)
      for (let X in F) {
        let O = U(C[X], F[X])
        O === void 0 ? ((0, s.default)(C[X]) && (0, s.default)(F[X]) ? (C[X] = k({}, C[X], F[X], U)) : (C[X] = F[X])) : (C[X] = O)
      }
    return C
  }
  const R = {
    colors: i.default,
    negative(C) {
      return Object.keys(C)
        .filter((L) => C[L] !== '0')
        .reduce((L, U) => {
          let F = (0, t.default)(C[U])
          return F !== void 0 && (L[`-${U}`] = F), L
        }, {})
    },
    breakpoints(C) {
      return Object.keys(C)
        .filter((L) => typeof C[L] == 'string')
        .reduce((L, U) => ({ ...L, [`screen-${U}`]: C[U] }), {})
    }
  }
  function p(C, ...L) {
    return g(C) ? C(...L) : C
  }
  function f(C) {
    return C.reduce((L, { extend: U }) => k(L, U, (F, X) => (F === void 0 ? [X] : Array.isArray(F) ? [X, ...F] : [X, F])), {})
  }
  function m(C) {
    return { ...C.reduce((L, U) => (0, l.defaults)(L, U), {}), extend: f(C) }
  }
  function b(C, L) {
    if (Array.isArray(C) && (0, s.default)(C[0])) return C.concat(L)
    if (Array.isArray(L) && (0, s.default)(L[0]) && (0, s.default)(C)) return [C, ...L]
    if (Array.isArray(L)) return L
  }
  function z({ extend: C, ...L }) {
    return k(L, C, (U, F) => (!g(U) && !F.some(g) ? k({}, U, ...F, b) : (X, O) => k({}, ...[U, ...F].map((j) => p(j, X, O)), b)))
  }
  function* _(C) {
    let L = (0, a.toPath)(C)
    if (L.length === 0 || (yield L, Array.isArray(C))) return
    let U = /^(.*?)\s*\/\s*([^/]+)$/,
      F = C.match(U)
    if (F !== null) {
      let [, X, O] = F,
        j = (0, a.toPath)(X)
      ;(j.alpha = O), yield j
    }
  }
  function Z(C) {
    const L = (U, F) => {
      for (const X of _(U)) {
        let O = 0,
          j = C
        for (; j != null && O < X.length; ) (j = j[X[O++]]), (j = g(j) && (X.alpha === void 0 || O <= X.length - 1) ? j(L, R) : j)
        if (j !== void 0) {
          if (X.alpha !== void 0) {
            let B = (0, c.parseColorFormat)(j)
            return (0, d.withAlphaValue)(B, X.alpha, (0, h.default)(B))
          }
          return (0, s.default)(j) ? (0, u.cloneDeep)(j) : j
        }
      }
      return F
    }
    return Object.assign(L, { theme: L, ...R }), Object.keys(C).reduce((U, F) => ((U[F] = g(C[F]) ? C[F](L, R) : C[F]), U), {})
  }
  function A(C) {
    let L = []
    return (
      C.forEach((U) => {
        L = [...L, U]
        var F
        const X = (F = U == null ? void 0 : U.plugins) !== null && F !== void 0 ? F : []
        X.length !== 0 &&
          X.forEach((O) => {
            O.__isOptionsFunction && (O = O())
            var j
            L = [...L, ...A([(j = O == null ? void 0 : O.config) !== null && j !== void 0 ? j : {}])]
          })
      }),
      L
    )
  }
  function T(C) {
    return [...C].reduceRight((U, F) => (g(F) ? F({ corePlugins: U }) : (0, n.default)(F, U)), r.default)
  }
  function M(C) {
    return [...C].reduceRight((U, F) => [...U, ...F], [])
  }
  function q(C) {
    let L = [...A(C), { prefix: '', important: !1, separator: ':' }]
    var U, F
    return (0, o.normalizeConfig)(
      (0, l.defaults)(
        {
          theme: Z(z(m(L.map((X) => ((U = X == null ? void 0 : X.theme) !== null && U !== void 0 ? U : {}))))),
          corePlugins: T(L.map((X) => X.corePlugins)),
          plugins: M(C.map((X) => ((F = X == null ? void 0 : X.plugins) !== null && F !== void 0 ? F : [])))
        },
        ...L
      )
    )
  }
})(H2)
var ah = {},
  oh = {
    content: [],
    presets: [],
    darkMode: 'media',
    theme: {
      secondaryColor: ({ theme: e }) => ({ ...e('colors'), auto: 'auto' }),
      animation: {
        none: 'none',
        spin: 'spin 1s linear infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite'
      },
      aria: {
        busy: 'busy="true"',
        checked: 'checked="true"',
        disabled: 'disabled="true"',
        expanded: 'expanded="true"',
        hidden: 'hidden="true"',
        pressed: 'pressed="true"',
        readonly: 'readonly="true"',
        required: 'required="true"',
        selected: 'selected="true"'
      },
      aspectRatio: { auto: 'auto', square: '1 / 1', video: '16 / 9' },
      backdropBlur: ({ theme: e }) => e('blur'),
      backdropBrightness: ({ theme: e }) => e('brightness'),
      backdropContrast: ({ theme: e }) => e('contrast'),
      backdropGrayscale: ({ theme: e }) => e('grayscale'),
      backdropHueRotate: ({ theme: e }) => e('hueRotate'),
      backdropInvert: ({ theme: e }) => e('invert'),
      backdropOpacity: ({ theme: e }) => e('opacity'),
      backdropSaturate: ({ theme: e }) => e('saturate'),
      backdropSepia: ({ theme: e }) => e('sepia'),
      backgroundColor: ({ theme: e }) => e('colors'),
      backgroundImage: {
        none: 'none',
        'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
        'gradient-to-tr': 'linear-gradient(to top right, var(--tw-gradient-stops))',
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
        'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
        'gradient-to-bl': 'linear-gradient(to bottom left, var(--tw-gradient-stops))',
        'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
        'gradient-to-tl': 'linear-gradient(to top left, var(--tw-gradient-stops))'
      },
      backgroundOpacity: ({ theme: e }) => e('opacity'),
      backgroundPosition: {
        bottom: 'bottom',
        center: 'center',
        left: 'left',
        'left-bottom': 'left bottom',
        'left-top': 'left top',
        right: 'right',
        'right-bottom': 'right bottom',
        'right-top': 'right top',
        top: 'top'
      },
      backgroundSize: { auto: 'auto', cover: 'cover', contain: 'contain' },
      blur: {
        0: '0',
        none: '',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px',
        '3xl': '64px'
      },
      borderColor: ({ theme: e }) => ({
        ...e('colors'),
        DEFAULT: e('colors.gray.200', 'currentColor')
      }),
      borderOpacity: ({ theme: e }) => e('opacity'),
      borderRadius: {
        none: '0px',
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px'
      },
      borderSpacing: ({ theme: e }) => ({ ...e('spacing') }),
      borderWidth: { DEFAULT: '1px', 0: '0px', 2: '2px', 4: '4px', 8: '8px' },
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        none: 'none'
      },
      boxShadowColor: ({ theme: e }) => e('colors'),
      brightness: {
        0: '0',
        50: '.5',
        75: '.75',
        90: '.9',
        95: '.95',
        100: '1',
        105: '1.05',
        110: '1.1',
        125: '1.25',
        150: '1.5',
        200: '2'
      },
      caretColor: ({ theme: e }) => e('colors'),
      colors: ({ colors: e }) => ({
        inherit: e.inherit,
        current: e.current,
        transparent: e.transparent,
        textDark: e.textDark,
        textLight: e.textLight,
        slate: e.slate,
        gray: e.gray,
        zinc: e.zinc,
        neutral: e.neutral,
        stone: e.stone,
        red: e.red,
        orange: e.orange,
        amber: e.amber,
        yellow: e.yellow,
        lime: e.lime,
        green: e.green,
        emerald: e.emerald,
        teal: e.teal,
        cyan: e.cyan,
        sky: e.sky,
        blue: e.blue,
        indigo: e.indigo,
        violet: e.violet,
        purple: e.purple,
        fuchsia: e.fuchsia,
        pink: e.pink,
        rose: e.rose
      }),
      columns: {
        auto: 'auto',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        '3xs': '16rem',
        '2xs': '18rem',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem'
      },
      container: {},
      content: { none: 'none' },
      contrast: {
        0: '0',
        50: '.5',
        75: '.75',
        100: '1',
        125: '1.25',
        150: '1.5',
        200: '2'
      },
      cursor: {
        auto: 'auto',
        default: 'default',
        pointer: 'pointer',
        wait: 'wait',
        text: 'text',
        move: 'move',
        help: 'help',
        'not-allowed': 'not-allowed',
        none: 'none',
        'context-menu': 'context-menu',
        progress: 'progress',
        cell: 'cell',
        crosshair: 'crosshair',
        'vertical-text': 'vertical-text',
        alias: 'alias',
        copy: 'copy',
        'no-drop': 'no-drop',
        grab: 'grab',
        grabbing: 'grabbing',
        'all-scroll': 'all-scroll',
        'col-resize': 'col-resize',
        'row-resize': 'row-resize',
        'n-resize': 'n-resize',
        'e-resize': 'e-resize',
        's-resize': 's-resize',
        'w-resize': 'w-resize',
        'ne-resize': 'ne-resize',
        'nw-resize': 'nw-resize',
        'se-resize': 'se-resize',
        'sw-resize': 'sw-resize',
        'ew-resize': 'ew-resize',
        'ns-resize': 'ns-resize',
        'nesw-resize': 'nesw-resize',
        'nwse-resize': 'nwse-resize',
        'zoom-in': 'zoom-in',
        'zoom-out': 'zoom-out'
      },
      divideColor: ({ theme: e }) => e('borderColor'),
      divideOpacity: ({ theme: e }) => e('borderOpacity'),
      divideWidth: ({ theme: e }) => e('borderWidth'),
      dropShadow: {
        sm: '0 1px 1px rgb(0 0 0 / 0.05)',
        DEFAULT: ['0 1px 2px rgb(0 0 0 / 0.1)', '0 1px 1px rgb(0 0 0 / 0.06)'],
        md: ['0 4px 3px rgb(0 0 0 / 0.07)', '0 2px 2px rgb(0 0 0 / 0.06)'],
        lg: ['0 10px 8px rgb(0 0 0 / 0.04)', '0 4px 3px rgb(0 0 0 / 0.1)'],
        xl: ['0 20px 13px rgb(0 0 0 / 0.03)', '0 8px 5px rgb(0 0 0 / 0.08)'],
        '2xl': '0 25px 25px rgb(0 0 0 / 0.15)',
        none: '0 0 #0000'
      },
      fill: ({ theme: e }) => ({ none: 'none', ...e('colors') }),
      flex: {
        1: '1 1 0%',
        auto: '1 1 auto',
        initial: '0 1 auto',
        none: 'none'
      },
      flexBasis: ({ theme: e }) => ({
        auto: 'auto',
        ...e('spacing'),
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        full: '100%'
      }),
      flexGrow: { 0: '0', DEFAULT: '1' },
      flexShrink: { 0: '0', DEFAULT: '1' },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ],
        serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace']
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }]
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        textDark: '900'
      },
      gap: ({ theme: e }) => e('spacing'),
      gradientColorStops: ({ theme: e }) => e('colors'),
      gradientColorStopPositions: {
        '0%': '0%',
        '5%': '5%',
        '10%': '10%',
        '15%': '15%',
        '20%': '20%',
        '25%': '25%',
        '30%': '30%',
        '35%': '35%',
        '40%': '40%',
        '45%': '45%',
        '50%': '50%',
        '55%': '55%',
        '60%': '60%',
        '65%': '65%',
        '70%': '70%',
        '75%': '75%',
        '80%': '80%',
        '85%': '85%',
        '90%': '90%',
        '95%': '95%',
        '100%': '100%'
      },
      grayscale: { 0: '0', DEFAULT: '100%' },
      gridAutoColumns: {
        auto: 'auto',
        min: 'min-content',
        max: 'max-content',
        fr: 'minmax(0, 1fr)'
      },
      gridAutoRows: {
        auto: 'auto',
        min: 'min-content',
        max: 'max-content',
        fr: 'minmax(0, 1fr)'
      },
      gridColumn: {
        auto: 'auto',
        'span-1': 'span 1 / span 1',
        'span-2': 'span 2 / span 2',
        'span-3': 'span 3 / span 3',
        'span-4': 'span 4 / span 4',
        'span-5': 'span 5 / span 5',
        'span-6': 'span 6 / span 6',
        'span-7': 'span 7 / span 7',
        'span-8': 'span 8 / span 8',
        'span-9': 'span 9 / span 9',
        'span-10': 'span 10 / span 10',
        'span-11': 'span 11 / span 11',
        'span-12': 'span 12 / span 12',
        'span-full': '1 / -1'
      },
      gridColumnEnd: {
        auto: 'auto',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13'
      },
      gridColumnStart: {
        auto: 'auto',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13'
      },
      gridRow: {
        auto: 'auto',
        'span-1': 'span 1 / span 1',
        'span-2': 'span 2 / span 2',
        'span-3': 'span 3 / span 3',
        'span-4': 'span 4 / span 4',
        'span-5': 'span 5 / span 5',
        'span-6': 'span 6 / span 6',
        'span-7': 'span 7 / span 7',
        'span-8': 'span 8 / span 8',
        'span-9': 'span 9 / span 9',
        'span-10': 'span 10 / span 10',
        'span-11': 'span 11 / span 11',
        'span-12': 'span 12 / span 12',
        'span-full': '1 / -1'
      },
      gridRowEnd: {
        auto: 'auto',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13'
      },
      gridRowStart: {
        auto: 'auto',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13'
      },
      gridTemplateColumns: {
        none: 'none',
        subgrid: 'subgrid',
        1: 'repeat(1, minmax(0, 1fr))',
        2: 'repeat(2, minmax(0, 1fr))',
        3: 'repeat(3, minmax(0, 1fr))',
        4: 'repeat(4, minmax(0, 1fr))',
        5: 'repeat(5, minmax(0, 1fr))',
        6: 'repeat(6, minmax(0, 1fr))',
        7: 'repeat(7, minmax(0, 1fr))',
        8: 'repeat(8, minmax(0, 1fr))',
        9: 'repeat(9, minmax(0, 1fr))',
        10: 'repeat(10, minmax(0, 1fr))',
        11: 'repeat(11, minmax(0, 1fr))',
        12: 'repeat(12, minmax(0, 1fr))'
      },
      gridTemplateRows: {
        none: 'none',
        subgrid: 'subgrid',
        1: 'repeat(1, minmax(0, 1fr))',
        2: 'repeat(2, minmax(0, 1fr))',
        3: 'repeat(3, minmax(0, 1fr))',
        4: 'repeat(4, minmax(0, 1fr))',
        5: 'repeat(5, minmax(0, 1fr))',
        6: 'repeat(6, minmax(0, 1fr))',
        7: 'repeat(7, minmax(0, 1fr))',
        8: 'repeat(8, minmax(0, 1fr))',
        9: 'repeat(9, minmax(0, 1fr))',
        10: 'repeat(10, minmax(0, 1fr))',
        11: 'repeat(11, minmax(0, 1fr))',
        12: 'repeat(12, minmax(0, 1fr))'
      },
      height: ({ theme: e }) => ({
        auto: 'auto',
        ...e('spacing'),
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        full: '100%',
        screen: '100vh',
        svh: '100svh',
        lvh: '100lvh',
        dvh: '100dvh',
        min: 'min-content',
        max: 'max-content',
        fit: 'fit-content'
      }),
      hueRotate: {
        0: '0deg',
        15: '15deg',
        30: '30deg',
        60: '60deg',
        90: '90deg',
        180: '180deg'
      },
      inset: ({ theme: e }) => ({
        auto: 'auto',
        ...e('spacing'),
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        full: '100%'
      }),
      invert: { 0: '0', DEFAULT: '100%' },
      keyframes: {
        spin: { to: { transform: 'rotate(360deg)' } },
        ping: { '75%, 100%': { transform: 'scale(2)', opacity: '0' } },
        pulse: { '50%': { opacity: '.5' } },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)'
          },
          '50%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)'
          }
        }
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em'
      },
      lineHeight: {
        none: '1',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
        3: '.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem'
      },
      listStyleType: { none: 'none', disc: 'disc', decimal: 'decimal' },
      listStyleImage: { none: 'none' },
      margin: ({ theme: e }) => ({ auto: 'auto', ...e('spacing') }),
      lineClamp: { 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6' },
      maxHeight: ({ theme: e }) => ({
        ...e('spacing'),
        none: 'none',
        full: '100%',
        screen: '100vh',
        svh: '100svh',
        lvh: '100lvh',
        dvh: '100dvh',
        min: 'min-content',
        max: 'max-content',
        fit: 'fit-content'
      }),
      maxWidth: ({ theme: e, breakpoints: t }) => ({
        ...e('spacing'),
        none: 'none',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
        full: '100%',
        min: 'min-content',
        max: 'max-content',
        fit: 'fit-content',
        prose: '65ch',
        ...t(e('screens'))
      }),
      minHeight: ({ theme: e }) => ({
        ...e('spacing'),
        full: '100%',
        screen: '100vh',
        svh: '100svh',
        lvh: '100lvh',
        dvh: '100dvh',
        min: 'min-content',
        max: 'max-content',
        fit: 'fit-content'
      }),
      minWidth: ({ theme: e }) => ({
        ...e('spacing'),
        full: '100%',
        min: 'min-content',
        max: 'max-content',
        fit: 'fit-content'
      }),
      objectPosition: {
        bottom: 'bottom',
        center: 'center',
        left: 'left',
        'left-bottom': 'left bottom',
        'left-top': 'left top',
        right: 'right',
        'right-bottom': 'right bottom',
        'right-top': 'right top',
        top: 'top'
      },
      opacity: {
        0: '0',
        5: '0.05',
        10: '0.1',
        15: '0.15',
        20: '0.2',
        25: '0.25',
        30: '0.3',
        35: '0.35',
        40: '0.4',
        45: '0.45',
        50: '0.5',
        55: '0.55',
        60: '0.6',
        65: '0.65',
        70: '0.7',
        75: '0.75',
        80: '0.8',
        85: '0.85',
        90: '0.9',
        95: '0.95',
        100: '1'
      },
      order: {
        first: '-9999',
        last: '9999',
        none: '0',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12'
      },
      outlineColor: ({ theme: e }) => e('colors'),
      outlineOffset: { 0: '0px', 1: '1px', 2: '2px', 4: '4px', 8: '8px' },
      outlineWidth: { 0: '0px', 1: '1px', 2: '2px', 4: '4px', 8: '8px' },
      padding: ({ theme: e }) => e('spacing'),
      placeholderColor: ({ theme: e }) => e('colors'),
      placeholderOpacity: ({ theme: e }) => e('opacity'),
      ringColor: ({ theme: e }) => ({
        DEFAULT: e('colors.blue.500', '#3b82f6'),
        ...e('colors')
      }),
      ringOffsetColor: ({ theme: e }) => e('colors'),
      ringOffsetWidth: { 0: '0px', 1: '1px', 2: '2px', 4: '4px', 8: '8px' },
      ringOpacity: ({ theme: e }) => ({ DEFAULT: '0.5', ...e('opacity') }),
      ringWidth: {
        DEFAULT: '3px',
        0: '0px',
        1: '1px',
        2: '2px',
        4: '4px',
        8: '8px'
      },
      rotate: {
        0: '0deg',
        1: '1deg',
        2: '2deg',
        3: '3deg',
        6: '6deg',
        12: '12deg',
        45: '45deg',
        90: '90deg',
        180: '180deg'
      },
      saturate: { 0: '0', 50: '.5', 100: '1', 150: '1.5', 200: '2' },
      scale: {
        0: '0',
        50: '.5',
        75: '.75',
        90: '.9',
        95: '.95',
        100: '1',
        105: '1.05',
        110: '1.1',
        125: '1.25',
        150: '1.5'
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      },
      scrollMargin: ({ theme: e }) => ({ ...e('spacing') }),
      scrollPadding: ({ theme: e }) => e('spacing'),
      sepia: { 0: '0', DEFAULT: '100%' },
      skew: {
        0: '0deg',
        1: '1deg',
        2: '2deg',
        3: '3deg',
        6: '6deg',
        12: '12deg'
      },
      space: ({ theme: e }) => ({ ...e('spacing') }),
      spacing: {
        px: '1px',
        0: '0px',
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem'
      },
      stroke: ({ theme: e }) => ({ none: 'none', ...e('colors') }),
      strokeWidth: { 0: '0', 1: '1', 2: '2' },
      supports: {},
      data: {},
      textColor: ({ theme: e }) => e('colors'),
      textDecorationColor: ({ theme: e }) => e('colors'),
      textDecorationThickness: {
        auto: 'auto',
        'from-font': 'from-font',
        0: '0px',
        1: '1px',
        2: '2px',
        4: '4px',
        8: '8px'
      },
      textIndent: ({ theme: e }) => ({ ...e('spacing') }),
      textOpacity: ({ theme: e }) => e('opacity'),
      textUnderlineOffset: {
        auto: 'auto',
        0: '0px',
        1: '1px',
        2: '2px',
        4: '4px',
        8: '8px'
      },
      transformOrigin: {
        center: 'center',
        top: 'top',
        'top-right': 'top right',
        right: 'right',
        'bottom-right': 'bottom right',
        bottom: 'bottom',
        'bottom-left': 'bottom left',
        left: 'left',
        'top-left': 'top left'
      },
      transitionDelay: {
        0: '0s',
        75: '75ms',
        100: '100ms',
        150: '150ms',
        200: '200ms',
        300: '300ms',
        500: '500ms',
        700: '700ms',
        1e3: '1000ms'
      },
      transitionDuration: {
        DEFAULT: '150ms',
        0: '0s',
        75: '75ms',
        100: '100ms',
        150: '150ms',
        200: '200ms',
        300: '300ms',
        500: '500ms',
        700: '700ms',
        1e3: '1000ms'
      },
      transitionProperty: {
        none: 'none',
        all: 'all',
        DEFAULT:
          'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
        colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
        opacity: 'opacity',
        shadow: 'box-shadow',
        transform: 'transform'
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
        linear: 'linear',
        in: 'cubic-bezier(0.4, 0, 1, 1)',
        out: 'cubic-bezier(0, 0, 0.2, 1)',
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
      },
      translate: ({ theme: e }) => ({
        ...e('spacing'),
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        full: '100%'
      }),
      size: ({ theme: e }) => ({
        auto: 'auto',
        ...e('spacing'),
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        full: '100%',
        min: 'min-content',
        max: 'max-content',
        fit: 'fit-content'
      }),
      width: ({ theme: e }) => ({
        auto: 'auto',
        ...e('spacing'),
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        full: '100%',
        screen: '100vw',
        svw: '100svw',
        lvw: '100lvw',
        dvw: '100dvw',
        min: 'min-content',
        max: 'max-content',
        fit: 'fit-content'
      }),
      willChange: {
        auto: 'auto',
        scroll: 'scroll-position',
        contents: 'contents',
        transform: 'transform'
      },
      zIndex: {
        auto: 'auto',
        0: '0',
        10: '10',
        20: '20',
        30: '30',
        40: '40',
        50: '50'
      }
    },
    plugins: []
  }
;(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    Object.defineProperty(e, 'default', {
      enumerable: !0,
      get: function () {
        return i
      }
    })
  const t = n(oh),
    r = is
  function n(l) {
    return l && l.__esModule ? l : { default: l }
  }
  function i(l) {
    var a
    const o = ((a = l == null ? void 0 : l.presets) !== null && a !== void 0 ? a : [t.default])
        .slice()
        .reverse()
        .flatMap((c) => i(c instanceof Function ? c() : c)),
      s = {
        respectDefaultRingColorOpacity: {
          theme: {
            ringColor: ({ theme: c }) => ({
              DEFAULT: '#3b82f67f',
              ...c('colors')
            })
          }
        },
        disableColorOpacityUtilitiesByDefault: {
          corePlugins: {
            backgroundOpacity: !1,
            borderOpacity: !1,
            divideOpacity: !1,
            placeholderOpacity: !1,
            ringOpacity: !1,
            textOpacity: !1
          }
        }
      },
      u = Object.keys(s)
        .filter((c) => (0, r.flagEnabled)(l, c))
        .map((c) => s[c])
    return [l, ...u, ...o]
  }
})(ah)
;(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    Object.defineProperty(e, 'default', {
      enumerable: !0,
      get: function () {
        return i
      }
    })
  const t = n(H2),
    r = n(ah)
  function n(l) {
    return l && l.__esModule ? l : { default: l }
  }
  function i(...l) {
    let [, ...a] = (0, r.default)(l[0])
    return (0, t.default)([...l, ...a])
  }
})($2)
let Is = $2
var u5 = (Is.__esModule ? Is : { default: Is }).default
const ra = Ao(u5)
var sh = {}
;(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    Object.defineProperty(e, 'default', {
      enumerable: !0,
      get: function () {
        return i
      }
    })
  const t = Gc,
    r = n(oh)
  function n(l) {
    return l && l.__esModule ? l : { default: l }
  }
  const i = (0, t.cloneDeep)(r.default.theme)
})(sh)
let Us = sh
var c5 = (Us.__esModule ? Us : { default: Us }).default
const K1 = Ao(c5),
  na = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        animation: { fadeIn: 'fadeIn 2s ease-in forwards' },
        keyframes: { fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } } },
        clipPath: {
          'curve-top': 'ellipse(70% 50% at 50% 0)',
          'curve-bottom': 'ellipse(70% 50% at 50% 100%)',
          wave: 'polygon(0 50%, 100% 0%, 100% 100%, 0 100%)'
        },
        fontFamily: {
          heading: ['QuickneutralMedium', ...K1.fontFamily.sans],
          body: ['QuickneutralMedium', ...K1.fontFamily.sans],
          doto: ['doto']
        },
        colors: {
          primary: '#A1662F',
          secondary: '#secondary',
          neutralMedium: '#EFCC8C',
          spicyMustard: '#6B580A',
          textDark: '#35210f',
          redWood: '#a45a52',
          darkRedWood: '#89030E',
          secondaryLight: '#D3A65B',
          textDark: '#503F23',
          neutralLight: '#f1e2ca',
          accent: '#7A2222'
        }
      }
    },
    plugins: [
      function ({ addComponents: e }) {
        e({
          '.remove-arrow::-webkit-outer-spin-button, .remove-arrow::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: '0'
          },
          '.remove-arrow': { '-moz-appearance': 'textfield' }
        })
      }
    ]
  },
  d5 = () => {
    const e = ra(na),
      t = e.theme.colors.secondary,
      r = e.theme.colors.spicyMustard
    return x.jsxs('div', {
      className: 'bg-spicyMustard text-textLight',
      children: [
        x.jsx(rs, { type: 'curveTop', fillColor: t, backgroundColor: r }),
        x.jsx('div', {
          className: 'pb-10 text-center ',
          children: x.jsxs('div', {
            className: 'container mx-auto px-4',
            children: [
              x.jsx('p', {
                className: 'text-sm md:text-base',
                children: '© 2024 Luca de Michieli'
              }),
              x.jsxs('div', {
                className: 'mt-2 space-x-4 text-sm md:text-base',
                children: [
                  x.jsx($1, {
                    to: '/impressum',
                    className: 'border-b-2 border-transparent hover:border-secondary transition-all',
                    children: 'Impressum'
                  }),
                  x.jsx($1, {
                    to: '/privacy',
                    className: 'border-b-2 border-transparent hover:border-secondary transition-all',
                    children: 'Datenschutzerklärung'
                  }),
                  x.jsx('a', {
                    href: 'mailto:lucademichieli@posteo.net',
                    className: 'border-b-2 border-transparent hover:border-secondary transition-all',
                    children: 'lucademichieli@posteo.net'
                  })
                ]
              })
            ]
          })
        })
      ]
    })
  }
var ia = (e) => e.type === 'checkbox',
  Nn = (e) => e instanceof Date,
  wt = (e) => e == null
const uh = (e) => typeof e == 'object'
var Ye = (e) => !wt(e) && !Array.isArray(e) && uh(e) && !Nn(e),
  f5 = (e) => (Ye(e) && e.target ? (ia(e.target) ? e.target.checked : e.target.value) : e),
  h5 = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  p5 = (e, t) => e.has(h5(t)),
  m5 = (e) => {
    const t = e.constructor && e.constructor.prototype
    return Ye(t) && t.hasOwnProperty('isPrototypeOf')
  },
  ed = typeof window < 'u' && typeof window.HTMLElement < 'u' && typeof document < 'u'
function $t(e) {
  let t
  const r = Array.isArray(e)
  if (e instanceof Date) t = new Date(e)
  else if (e instanceof Set) t = new Set(e)
  else if (!(ed && (e instanceof Blob || e instanceof FileList)) && (r || Ye(e)))
    if (((t = r ? [] : {}), !r && !m5(e))) t = e
    else for (const n in e) e.hasOwnProperty(n) && (t[n] = $t(e[n]))
  else return e
  return t
}
var as = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  Qe = (e) => e === void 0,
  ee = (e, t, r) => {
    if (!t || !Ye(e)) return r
    const n = as(t.split(/[,[\].]+?/)).reduce((i, l) => (wt(i) ? i : i[l]), e)
    return Qe(n) || n === e ? (Qe(e[t]) ? r : e[t]) : n
  },
  mr = (e) => typeof e == 'boolean',
  td = (e) => /^\w*$/.test(e),
  ch = (e) => as(e.replace(/["|']|\]/g, '').split(/\.|\[/)),
  Ne = (e, t, r) => {
    let n = -1
    const i = td(t) ? [t] : ch(t),
      l = i.length,
      a = l - 1
    for (; ++n < l; ) {
      const o = i[n]
      let s = r
      if (n !== a) {
        const u = e[o]
        s = Ye(u) || Array.isArray(u) ? u : isNaN(+i[n + 1]) ? {} : []
      }
      if (o === '__proto__') return
      ;(e[o] = s), (e = e[o])
    }
    return e
  }
const Q1 = { BLUR: 'blur', FOCUS_OUT: 'focusout', CHANGE: 'change' },
  nr = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all'
  },
  Tr = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate'
  }
zt.createContext(null)
var v5 = (e, t, r, n = !0) => {
    const i = { defaultValues: t._defaultValues }
    for (const l in e)
      Object.defineProperty(i, l, {
        get: () => {
          const a = l
          return t._proxyFormState[a] !== nr.all && (t._proxyFormState[a] = !n || nr.all), e[a]
        }
      })
    return i
  },
  Ct = (e) => Ye(e) && !Object.keys(e).length,
  g5 = (e, t, r, n) => {
    r(e)
    const { name: i, ...l } = e
    return Ct(l) || Object.keys(l).length >= Object.keys(t).length || Object.keys(l).find((a) => t[a] === nr.all)
  },
  Ka = (e) => (Array.isArray(e) ? e : [e])
function y5(e) {
  const t = zt.useRef(e)
  ;(t.current = e),
    zt.useEffect(() => {
      const r = !e.disabled && t.current.subject && t.current.subject.subscribe({ next: t.current.next })
      return () => {
        r && r.unsubscribe()
      }
    }, [e.disabled])
}
var yr = (e) => typeof e == 'string',
  x5 = (e, t, r, n, i) =>
    yr(e)
      ? (n && t.watch.add(e), ee(r, e, i))
      : Array.isArray(e)
        ? e.map((l) => (n && t.watch.add(l), ee(r, l)))
        : (n && (t.watchAll = !0), r),
  dh = (e, t, r, n, i) =>
    t
      ? {
          ...r[e],
          types: { ...(r[e] && r[e].types ? r[e].types : {}), [n]: i || !0 }
        }
      : {},
  G1 = (e) => ({
    isOnSubmit: !e || e === nr.onSubmit,
    isOnBlur: e === nr.onBlur,
    isOnChange: e === nr.onChange,
    isOnAll: e === nr.all,
    isOnTouch: e === nr.onTouched
  }),
  Y1 = (e, t, r) => !r && (t.watchAll || t.watch.has(e) || [...t.watch].some((n) => e.startsWith(n) && /^\.\w+/.test(e.slice(n.length))))
const vl = (e, t, r, n) => {
  for (const i of r || Object.keys(e)) {
    const l = ee(e, i)
    if (l) {
      const { _f: a, ...o } = l
      if (a) {
        if (a.refs && a.refs[0] && t(a.refs[0], i) && !n) return !0
        if (a.ref && t(a.ref, a.name) && !n) return !0
        if (vl(o, t)) break
      } else if (Ye(o) && vl(o, t)) break
    }
  }
}
var w5 = (e, t, r) => {
    const n = Ka(ee(e, r))
    return Ne(n, 'root', t[r]), Ne(e, r, n), e
  },
  rd = (e) => e.type === 'file',
  gr = (e) => typeof e == 'function',
  Co = (e) => {
    if (!ed) return !1
    const t = e ? e.ownerDocument : 0
    return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
  },
  Qa = (e) => yr(e),
  nd = (e) => e.type === 'radio',
  To = (e) => e instanceof RegExp
const X1 = { value: !1, isValid: !1 },
  J1 = { value: !0, isValid: !0 }
var fh = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((r) => r && r.checked && !r.disabled).map((r) => r.value)
      return { value: t, isValid: !!t.length }
    }
    return e[0].checked && !e[0].disabled
      ? e[0].attributes && !Qe(e[0].attributes.value)
        ? Qe(e[0].value) || e[0].value === ''
          ? J1
          : { value: e[0].value, isValid: !0 }
        : J1
      : X1
  }
  return X1
}
const ef = { isValid: !1, value: null }
var hh = (e) => (Array.isArray(e) ? e.reduce((t, r) => (r && r.checked && !r.disabled ? { isValid: !0, value: r.value } : t), ef) : ef)
function tf(e, t, r = 'validate') {
  if (Qa(e) || (Array.isArray(e) && e.every(Qa)) || (mr(e) && !e)) return { type: r, message: Qa(e) ? e : '', ref: t }
}
var Yn = (e) => (Ye(e) && !To(e) ? e : { value: e, message: '' }),
  rf = async (e, t, r, n, i) => {
    const {
        ref: l,
        refs: a,
        required: o,
        maxLength: s,
        minLength: u,
        min: c,
        max: d,
        pattern: h,
        validate: v,
        name: g,
        valueAsNumber: k,
        mount: R,
        disabled: p
      } = e._f,
      f = ee(t, g)
    if (!R || p) return {}
    const m = a ? a[0] : l,
      b = (C) => {
        n && m.reportValidity && (m.setCustomValidity(mr(C) ? '' : C || ''), m.reportValidity())
      },
      z = {},
      _ = nd(l),
      Z = ia(l),
      A = _ || Z,
      T = ((k || rd(l)) && Qe(l.value) && Qe(f)) || (Co(l) && l.value === '') || f === '' || (Array.isArray(f) && !f.length),
      M = dh.bind(null, g, r, z),
      q = (C, L, U, F = Tr.maxLength, X = Tr.minLength) => {
        const O = C ? L : U
        z[g] = { type: C ? F : X, message: O, ref: l, ...M(C ? F : X, O) }
      }
    if (
      i ? !Array.isArray(f) || !f.length : o && ((!A && (T || wt(f))) || (mr(f) && !f) || (Z && !fh(a).isValid) || (_ && !hh(a).isValid))
    ) {
      const { value: C, message: L } = Qa(o) ? { value: !!o, message: o } : Yn(o)
      if (
        C &&
        ((z[g] = {
          type: Tr.required,
          message: L,
          ref: m,
          ...M(Tr.required, L)
        }),
        !r)
      )
        return b(L), z
    }
    if (!T && (!wt(c) || !wt(d))) {
      let C, L
      const U = Yn(d),
        F = Yn(c)
      if (!wt(f) && !isNaN(f)) {
        const X = l.valueAsNumber || (f && +f)
        wt(U.value) || (C = X > U.value), wt(F.value) || (L = X < F.value)
      } else {
        const X = l.valueAsDate || new Date(f),
          O = (I) => new Date(new Date().toDateString() + ' ' + I),
          j = l.type == 'time',
          B = l.type == 'week'
        yr(U.value) && f && (C = j ? O(f) > O(U.value) : B ? f > U.value : X > new Date(U.value)),
          yr(F.value) && f && (L = j ? O(f) < O(F.value) : B ? f < F.value : X < new Date(F.value))
      }
      if ((C || L) && (q(!!C, U.message, F.message, Tr.max, Tr.min), !r)) return b(z[g].message), z
    }
    if ((s || u) && !T && (yr(f) || (i && Array.isArray(f)))) {
      const C = Yn(s),
        L = Yn(u),
        U = !wt(C.value) && f.length > +C.value,
        F = !wt(L.value) && f.length < +L.value
      if ((U || F) && (q(U, C.message, L.message), !r)) return b(z[g].message), z
    }
    if (h && !T && yr(f)) {
      const { value: C, message: L } = Yn(h)
      if (To(C) && !f.match(C) && ((z[g] = { type: Tr.pattern, message: L, ref: l, ...M(Tr.pattern, L) }), !r)) return b(L), z
    }
    if (v) {
      if (gr(v)) {
        const C = await v(f, t),
          L = tf(C, m)
        if (L && ((z[g] = { ...L, ...M(Tr.validate, L.message) }), !r)) return b(L.message), z
      } else if (Ye(v)) {
        let C = {}
        for (const L in v) {
          if (!Ct(C) && !r) break
          const U = tf(await v[L](f, t), m, L)
          U && ((C = { ...U, ...M(L, U.message) }), b(U.message), r && (z[g] = C))
        }
        if (!Ct(C) && ((z[g] = { ref: m, ...C }), !r)) return z
      }
    }
    return b(!0), z
  }
function _5(e, t) {
  const r = t.slice(0, -1).length
  let n = 0
  for (; n < r; ) e = Qe(e) ? n++ : e[t[n++]]
  return e
}
function k5(e) {
  for (const t in e) if (e.hasOwnProperty(t) && !Qe(e[t])) return !1
  return !0
}
function tt(e, t) {
  const r = Array.isArray(t) ? t : td(t) ? [t] : ch(t),
    n = r.length === 1 ? e : _5(e, r),
    i = r.length - 1,
    l = r[i]
  return n && delete n[l], i !== 0 && ((Ye(n) && Ct(n)) || (Array.isArray(n) && k5(n))) && tt(e, r.slice(0, -1)), e
}
var Bs = () => {
    let e = []
    return {
      get observers() {
        return e
      },
      next: (i) => {
        for (const l of e) l.next && l.next(i)
      },
      subscribe: (i) => (
        e.push(i),
        {
          unsubscribe: () => {
            e = e.filter((l) => l !== i)
          }
        }
      ),
      unsubscribe: () => {
        e = []
      }
    }
  },
  Uu = (e) => wt(e) || !uh(e)
function Qr(e, t) {
  if (Uu(e) || Uu(t)) return e === t
  if (Nn(e) && Nn(t)) return e.getTime() === t.getTime()
  const r = Object.keys(e),
    n = Object.keys(t)
  if (r.length !== n.length) return !1
  for (const i of r) {
    const l = e[i]
    if (!n.includes(i)) return !1
    if (i !== 'ref') {
      const a = t[i]
      if ((Nn(l) && Nn(a)) || (Ye(l) && Ye(a)) || (Array.isArray(l) && Array.isArray(a)) ? !Qr(l, a) : l !== a) return !1
    }
  }
  return !0
}
var ph = (e) => e.type === 'select-multiple',
  S5 = (e) => nd(e) || ia(e),
  $s = (e) => Co(e) && e.isConnected,
  mh = (e) => {
    for (const t in e) if (gr(e[t])) return !0
    return !1
  }
function No(e, t = {}) {
  const r = Array.isArray(e)
  if (Ye(e) || r)
    for (const n in e)
      Array.isArray(e[n]) || (Ye(e[n]) && !mh(e[n])) ? ((t[n] = Array.isArray(e[n]) ? [] : {}), No(e[n], t[n])) : wt(e[n]) || (t[n] = !0)
  return t
}
function vh(e, t, r) {
  const n = Array.isArray(e)
  if (Ye(e) || n)
    for (const i in e)
      Array.isArray(e[i]) || (Ye(e[i]) && !mh(e[i]))
        ? Qe(t) || Uu(r[i])
          ? (r[i] = Array.isArray(e[i]) ? No(e[i], []) : { ...No(e[i]) })
          : vh(e[i], wt(t) ? {} : t[i], r[i])
        : (r[i] = !Qr(e[i], t[i]))
  return r
}
var Xi = (e, t) => vh(e, t, No(t)),
  gh = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: n }) =>
    Qe(e) ? e : t ? (e === '' ? NaN : e && +e) : r && yr(e) ? new Date(e) : n ? n(e) : e
function Hs(e) {
  const t = e.ref
  if (!(e.refs ? e.refs.every((r) => r.disabled) : t.disabled))
    return rd(t)
      ? t.files
      : nd(t)
        ? hh(e.refs).value
        : ph(t)
          ? [...t.selectedOptions].map(({ value: r }) => r)
          : ia(t)
            ? fh(e.refs).value
            : gh(Qe(t.value) ? e.ref.value : t.value, e)
}
var b5 = (e, t, r, n) => {
    const i = {}
    for (const l of e) {
      const a = ee(t, l)
      a && Ne(i, l, a._f)
    }
    return {
      criteriaMode: r,
      names: [...e],
      fields: i,
      shouldUseNativeValidation: n
    }
  },
  Ji = (e) => (Qe(e) ? e : To(e) ? e.source : Ye(e) ? (To(e.value) ? e.value.source : e.value) : e)
const nf = 'AsyncFunction'
var E5 = (e) =>
    (!e || !e.validate) &&
    !!(
      (gr(e.validate) && e.validate.constructor.name === nf) ||
      (Ye(e.validate) && Object.values(e.validate).find((t) => t.constructor.name === nf))
    ),
  C5 = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate)
function lf(e, t, r) {
  const n = ee(e, r)
  if (n || td(r)) return { error: n, name: r }
  const i = r.split('.')
  for (; i.length; ) {
    const l = i.join('.'),
      a = ee(t, l),
      o = ee(e, l)
    if (a && !Array.isArray(a) && r !== l) return { name: r }
    if (o && o.type) return { name: l, error: o }
    i.pop()
  }
  return { name: r }
}
var T5 = (e, t, r, n, i) =>
    i.isOnAll ? !1 : !r && i.isOnTouch ? !(t || e) : (r ? n.isOnBlur : i.isOnBlur) ? !e : (r ? n.isOnChange : i.isOnChange) ? e : !0,
  N5 = (e, t) => !as(ee(e, t)).length && tt(e, t)
const j5 = {
  mode: nr.onSubmit,
  reValidateMode: nr.onChange,
  shouldFocusError: !0
}
function M5(e = {}) {
  let t = { ...j5, ...e },
    r = {
      submitCount: 0,
      isDirty: !1,
      isLoading: gr(t.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: t.errors || {},
      disabled: t.disabled || !1
    },
    n = {},
    i = Ye(t.defaultValues) || Ye(t.values) ? $t(t.defaultValues || t.values) || {} : {},
    l = t.shouldUnregister ? {} : $t(i),
    a = { action: !1, mount: !1, watch: !1 },
    o = {
      mount: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set()
    },
    s,
    u = 0
  const c = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1
    },
    d = { values: Bs(), array: Bs(), state: Bs() },
    h = G1(t.mode),
    v = G1(t.reValidateMode),
    g = t.criteriaMode === nr.all,
    k = (y) => (E) => {
      clearTimeout(u), (u = setTimeout(y, E))
    },
    R = async (y) => {
      if (!t.disabled && (c.isValid || y)) {
        const E = t.resolver ? Ct((await A()).errors) : await M(n, !0)
        E !== r.isValid && d.state.next({ isValid: E })
      }
    },
    p = (y, E) => {
      !t.disabled &&
        (c.isValidating || c.validatingFields) &&
        ((y || Array.from(o.mount)).forEach((P) => {
          P && (E ? Ne(r.validatingFields, P, E) : tt(r.validatingFields, P))
        }),
        d.state.next({
          validatingFields: r.validatingFields,
          isValidating: !Ct(r.validatingFields)
        }))
    },
    f = (y, E = [], P, Q, K = !0, $ = !0) => {
      if (Q && P && !t.disabled) {
        if (((a.action = !0), $ && Array.isArray(ee(n, y)))) {
          const ae = P(ee(n, y), Q.argA, Q.argB)
          K && Ne(n, y, ae)
        }
        if ($ && Array.isArray(ee(r.errors, y))) {
          const ae = P(ee(r.errors, y), Q.argA, Q.argB)
          K && Ne(r.errors, y, ae), N5(r.errors, y)
        }
        if (c.touchedFields && $ && Array.isArray(ee(r.touchedFields, y))) {
          const ae = P(ee(r.touchedFields, y), Q.argA, Q.argB)
          K && Ne(r.touchedFields, y, ae)
        }
        c.dirtyFields && (r.dirtyFields = Xi(i, l)),
          d.state.next({
            name: y,
            isDirty: C(y, E),
            dirtyFields: r.dirtyFields,
            errors: r.errors,
            isValid: r.isValid
          })
      } else Ne(l, y, E)
    },
    m = (y, E) => {
      Ne(r.errors, y, E), d.state.next({ errors: r.errors })
    },
    b = (y) => {
      ;(r.errors = y), d.state.next({ errors: r.errors, isValid: !1 })
    },
    z = (y, E, P, Q) => {
      const K = ee(n, y)
      if (K) {
        const $ = ee(l, y, Qe(P) ? ee(i, y) : P)
        Qe($) || (Q && Q.defaultChecked) || E ? Ne(l, y, E ? $ : Hs(K._f)) : F(y, $), a.mount && R()
      }
    },
    _ = (y, E, P, Q, K) => {
      let $ = !1,
        ae = !1
      const me = { name: y }
      if (!t.disabled) {
        const He = !!(ee(n, y) && ee(n, y)._f && ee(n, y)._f.disabled)
        if (!P || Q) {
          c.isDirty && ((ae = r.isDirty), (r.isDirty = me.isDirty = C()), ($ = ae !== me.isDirty))
          const Me = He || Qr(ee(i, y), E)
          ;(ae = !!(!He && ee(r.dirtyFields, y))),
            Me || He ? tt(r.dirtyFields, y) : Ne(r.dirtyFields, y, !0),
            (me.dirtyFields = r.dirtyFields),
            ($ = $ || (c.dirtyFields && ae !== !Me))
        }
        if (P) {
          const Me = ee(r.touchedFields, y)
          Me || (Ne(r.touchedFields, y, P), (me.touchedFields = r.touchedFields), ($ = $ || (c.touchedFields && Me !== P)))
        }
        $ && K && d.state.next(me)
      }
      return $ ? me : {}
    },
    Z = (y, E, P, Q) => {
      const K = ee(r.errors, y),
        $ = c.isValid && mr(E) && r.isValid !== E
      if (
        (e.delayError && P
          ? ((s = k(() => m(y, P))), s(e.delayError))
          : (clearTimeout(u), (s = null), P ? Ne(r.errors, y, P) : tt(r.errors, y)),
        (P ? !Qr(K, P) : K) || !Ct(Q) || $)
      ) {
        const ae = {
          ...Q,
          ...($ && mr(E) ? { isValid: E } : {}),
          errors: r.errors,
          name: y
        }
        ;(r = { ...r, ...ae }), d.state.next(ae)
      }
    },
    A = async (y) => {
      p(y, !0)
      const E = await t.resolver(l, t.context, b5(y || o.mount, n, t.criteriaMode, t.shouldUseNativeValidation))
      return p(y), E
    },
    T = async (y) => {
      const { errors: E } = await A(y)
      if (y)
        for (const P of y) {
          const Q = ee(E, P)
          Q ? Ne(r.errors, P, Q) : tt(r.errors, P)
        }
      else r.errors = E
      return E
    },
    M = async (y, E, P = { valid: !0 }) => {
      for (const Q in y) {
        const K = y[Q]
        if (K) {
          const { _f: $, ...ae } = K
          if ($) {
            const me = o.array.has($.name),
              He = K._f && E5(K._f)
            He && c.validatingFields && p([Q], !0)
            const Me = await rf(K, l, g, t.shouldUseNativeValidation && !E, me)
            if ((He && c.validatingFields && p([Q]), Me[$.name] && ((P.valid = !1), E))) break
            !E && (ee(Me, $.name) ? (me ? w5(r.errors, Me, $.name) : Ne(r.errors, $.name, Me[$.name])) : tt(r.errors, $.name))
          }
          !Ct(ae) && (await M(ae, E, P))
        }
      }
      return P.valid
    },
    q = () => {
      for (const y of o.unMount) {
        const E = ee(n, y)
        E && (E._f.refs ? E._f.refs.every((P) => !$s(P)) : !$s(E._f.ref)) && Pe(y)
      }
      o.unMount = new Set()
    },
    C = (y, E) => !t.disabled && (y && E && Ne(l, y, E), !Qr(ce(), i)),
    L = (y, E, P) => x5(y, o, { ...(a.mount ? l : Qe(E) ? i : yr(y) ? { [y]: E } : E) }, P, E),
    U = (y) => as(ee(a.mount ? l : i, y, e.shouldUnregister ? ee(i, y, []) : [])),
    F = (y, E, P = {}) => {
      const Q = ee(n, y)
      let K = E
      if (Q) {
        const $ = Q._f
        $ &&
          (!$.disabled && Ne(l, y, gh(E, $)),
          (K = Co($.ref) && wt(E) ? '' : E),
          ph($.ref)
            ? [...$.ref.options].forEach((ae) => (ae.selected = K.includes(ae.value)))
            : $.refs
              ? ia($.ref)
                ? $.refs.length > 1
                  ? $.refs.forEach(
                      (ae) =>
                        (!ae.defaultChecked || !ae.disabled) &&
                        (ae.checked = Array.isArray(K) ? !!K.find((me) => me === ae.value) : K === ae.value)
                    )
                  : $.refs[0] && ($.refs[0].checked = !!K)
                : $.refs.forEach((ae) => (ae.checked = ae.value === K))
              : rd($.ref)
                ? ($.ref.value = '')
                : (($.ref.value = K), $.ref.type || d.values.next({ name: y, values: { ...l } })))
      }
      ;(P.shouldDirty || P.shouldTouch) && _(y, K, P.shouldTouch, P.shouldDirty, !0), P.shouldValidate && I(y)
    },
    X = (y, E, P) => {
      for (const Q in E) {
        const K = E[Q],
          $ = `${y}.${Q}`,
          ae = ee(n, $)
        ;(o.array.has(y) || Ye(K) || (ae && !ae._f)) && !Nn(K) ? X($, K, P) : F($, K, P)
      }
    },
    O = (y, E, P = {}) => {
      const Q = ee(n, y),
        K = o.array.has(y),
        $ = $t(E)
      Ne(l, y, $),
        K
          ? (d.array.next({ name: y, values: { ...l } }),
            (c.isDirty || c.dirtyFields) &&
              P.shouldDirty &&
              d.state.next({
                name: y,
                dirtyFields: Xi(i, l),
                isDirty: C(y, $)
              }))
          : Q && !Q._f && !wt($)
            ? X(y, $, P)
            : F(y, $, P),
        Y1(y, o) && d.state.next({ ...r }),
        d.values.next({ name: a.mount ? y : void 0, values: { ...l } })
    },
    j = async (y) => {
      a.mount = !0
      const E = y.target
      let P = E.name,
        Q = !0
      const K = ee(n, P),
        $ = () => (E.type ? Hs(K._f) : f5(y)),
        ae = (me) => {
          Q = Number.isNaN(me) || (Nn(me) && isNaN(me.getTime())) || Qr(me, ee(l, P, me))
        }
      if (K) {
        let me, He
        const Me = $(),
          ot = y.type === Q1.BLUR || y.type === Q1.FOCUS_OUT,
          sa = (!C5(K._f) && !t.resolver && !ee(r.errors, P) && !K._f.deps) || T5(ot, ee(r.touchedFields, P), r.isSubmitted, v, h),
          Br = Y1(P, o, ot)
        Ne(l, P, Me), ot ? (K._f.onBlur && K._f.onBlur(y), s && s(0)) : K._f.onChange && K._f.onChange(y)
        const Li = _(P, Me, ot, !1),
          dr = !Ct(Li) || Br
        if ((!ot && d.values.next({ name: P, type: y.type, values: { ...l } }), sa))
          return c.isValid && (e.mode === 'onBlur' ? ot && R() : R()), dr && d.state.next({ name: P, ...(Br ? {} : Li) })
        if ((!ot && Br && d.state.next({ ...r }), t.resolver)) {
          const { errors: Di } = await A([P])
          if ((ae(Me), Q)) {
            const ua = lf(r.errors, n, P),
              Ai = lf(Di, n, ua.name || P)
            ;(me = Ai.error), (P = Ai.name), (He = Ct(Di))
          }
        } else
          p([P], !0),
            (me = (await rf(K, l, g, t.shouldUseNativeValidation))[P]),
            p([P]),
            ae(Me),
            Q && (me ? (He = !1) : c.isValid && (He = await M(n, !0)))
        Q && (K._f.deps && I(K._f.deps), Z(P, He, me, Li))
      }
    },
    B = (y, E) => {
      if (ee(r.errors, E) && y.focus) return y.focus(), 1
    },
    I = async (y, E = {}) => {
      let P, Q
      const K = Ka(y)
      if (t.resolver) {
        const $ = await T(Qe(y) ? y : K)
        ;(P = Ct($)), (Q = y ? !K.some((ae) => ee($, ae)) : P)
      } else
        y
          ? ((Q = (
              await Promise.all(
                K.map(async ($) => {
                  const ae = ee(n, $)
                  return await M(ae && ae._f ? { [$]: ae } : ae)
                })
              )
            ).every(Boolean)),
            !(!Q && !r.isValid) && R())
          : (Q = P = await M(n))
      return (
        d.state.next({
          ...(!yr(y) || (c.isValid && P !== r.isValid) ? {} : { name: y }),
          ...(t.resolver || !y ? { isValid: P } : {}),
          errors: r.errors
        }),
        E.shouldFocus && !Q && vl(n, B, y ? K : o.mount),
        Q
      )
    },
    ce = (y) => {
      const E = { ...(a.mount ? l : i) }
      return Qe(y) ? E : yr(y) ? ee(E, y) : y.map((P) => ee(E, P))
    },
    be = (y, E) => ({
      invalid: !!ee((E || r).errors, y),
      isDirty: !!ee((E || r).dirtyFields, y),
      error: ee((E || r).errors, y),
      isValidating: !!ee(r.validatingFields, y),
      isTouched: !!ee((E || r).touchedFields, y)
    }),
    Rt = (y) => {
      y && Ka(y).forEach((E) => tt(r.errors, E)), d.state.next({ errors: y ? r.errors : {} })
    },
    Ke = (y, E, P) => {
      const Q = (ee(n, y, { _f: {} })._f || {}).ref,
        K = ee(r.errors, y) || {},
        { ref: $, message: ae, type: me, ...He } = K
      Ne(r.errors, y, { ...He, ...E, ref: Q }),
        d.state.next({ name: y, errors: r.errors, isValid: !1 }),
        P && P.shouldFocus && Q && Q.focus && Q.focus()
    },
    Oe = (y, E) => (gr(y) ? d.values.subscribe({ next: (P) => y(L(void 0, E), P) }) : L(y, E, !0)),
    Pe = (y, E = {}) => {
      for (const P of y ? Ka(y) : o.mount)
        o.mount.delete(P),
          o.array.delete(P),
          E.keepValue || (tt(n, P), tt(l, P)),
          !E.keepError && tt(r.errors, P),
          !E.keepDirty && tt(r.dirtyFields, P),
          !E.keepTouched && tt(r.touchedFields, P),
          !E.keepIsValidating && tt(r.validatingFields, P),
          !t.shouldUnregister && !E.keepDefaultValue && tt(i, P)
      d.values.next({ values: { ...l } }), d.state.next({ ...r, ...(E.keepDirty ? { isDirty: C() } : {}) }), !E.keepIsValid && R()
    },
    at = ({ disabled: y, name: E, field: P, fields: Q, value: K }) => {
      if ((mr(y) && a.mount) || y) {
        const $ = y ? void 0 : Qe(K) ? Hs(P ? P._f : ee(Q, E)._f) : K
        Ne(l, E, $), _(E, $, !1, !1, !0)
      }
    },
    br = (y, E = {}) => {
      let P = ee(n, y)
      const Q = mr(E.disabled) || mr(t.disabled)
      return (
        Ne(n, y, {
          ...(P || {}),
          _f: {
            ...(P && P._f ? P._f : { ref: { name: y } }),
            name: y,
            mount: !0,
            ...E
          }
        }),
        o.mount.add(y),
        P
          ? at({
              field: P,
              disabled: mr(E.disabled) ? E.disabled : t.disabled,
              name: y,
              value: E.value
            })
          : z(y, !0, E.value),
        {
          ...(Q ? { disabled: E.disabled || t.disabled } : {}),
          ...(t.progressive
            ? {
                required: !!E.required,
                min: Ji(E.min),
                max: Ji(E.max),
                minLength: Ji(E.minLength),
                maxLength: Ji(E.maxLength),
                pattern: Ji(E.pattern)
              }
            : {}),
          name: y,
          onChange: j,
          onBlur: j,
          ref: (K) => {
            if (K) {
              br(y, E), (P = ee(n, y))
              const $ = (Qe(K.value) && K.querySelectorAll && K.querySelectorAll('input,select,textarea')[0]) || K,
                ae = S5($),
                me = P._f.refs || []
              if (ae ? me.find((He) => He === $) : $ === P._f.ref) return
              Ne(n, y, {
                _f: {
                  ...P._f,
                  ...(ae
                    ? {
                        refs: [...me.filter($s), $, ...(Array.isArray(ee(i, y)) ? [{}] : [])],
                        ref: { type: $.type, name: y }
                      }
                    : { ref: $ })
                }
              }),
                z(y, !1, void 0, $)
            } else
              (P = ee(n, y, {})),
                P._f && (P._f.mount = !1),
                (t.shouldUnregister || E.shouldUnregister) && !(p5(o.array, y) && a.action) && o.unMount.add(y)
          }
        }
      )
    },
    yt = () => t.shouldFocusError && vl(n, B, o.mount),
    Yt = (y) => {
      mr(y) &&
        (d.state.next({ disabled: y }),
        vl(
          n,
          (E, P) => {
            const Q = ee(n, P)
            Q &&
              ((E.disabled = Q._f.disabled || y),
              Array.isArray(Q._f.refs) &&
                Q._f.refs.forEach((K) => {
                  K.disabled = Q._f.disabled || y
                }))
          },
          0,
          !1
        ))
    },
    Fe = (y, E) => async (P) => {
      let Q
      if ((P && (P.preventDefault && P.preventDefault(), P.persist && P.persist()), t.disabled)) {
        E && (await E({ ...r.errors }, P))
        return
      }
      let K = $t(l)
      if ((d.state.next({ isSubmitting: !0 }), t.resolver)) {
        const { errors: $, values: ae } = await A()
        ;(r.errors = $), (K = ae)
      } else await M(n)
      if ((tt(r.errors, 'root'), Ct(r.errors))) {
        d.state.next({ errors: {} })
        try {
          await y(K, P)
        } catch ($) {
          Q = $
        }
      } else E && (await E({ ...r.errors }, P)), yt(), setTimeout(yt)
      if (
        (d.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: Ct(r.errors) && !Q,
          submitCount: r.submitCount + 1,
          errors: r.errors
        }),
        Q)
      )
        throw Q
    },
    cr = (y, E = {}) => {
      ee(n, y) &&
        (Qe(E.defaultValue) ? O(y, $t(ee(i, y))) : (O(y, E.defaultValue), Ne(i, y, $t(E.defaultValue))),
        E.keepTouched || tt(r.touchedFields, y),
        E.keepDirty || (tt(r.dirtyFields, y), (r.isDirty = E.defaultValue ? C(y, $t(ee(i, y))) : C())),
        E.keepError || (tt(r.errors, y), c.isValid && R()),
        d.state.next({ ...r }))
    },
    Er = (y, E = {}) => {
      const P = y ? $t(y) : i,
        Q = $t(P),
        K = Ct(y),
        $ = K ? i : Q
      if ((E.keepDefaultValues || (i = P), !E.keepValues)) {
        if (E.keepDirtyValues) {
          const ae = new Set([...o.mount, ...Object.keys(Xi(i, l))])
          for (const me of Array.from(ae)) ee(r.dirtyFields, me) ? Ne($, me, ee(l, me)) : O(me, ee($, me))
        } else {
          if (ed && Qe(y))
            for (const ae of o.mount) {
              const me = ee(n, ae)
              if (me && me._f) {
                const He = Array.isArray(me._f.refs) ? me._f.refs[0] : me._f.ref
                if (Co(He)) {
                  const Me = He.closest('form')
                  if (Me) {
                    Me.reset()
                    break
                  }
                }
              }
            }
          n = {}
        }
        ;(l = e.shouldUnregister ? (E.keepDefaultValues ? $t(i) : {}) : $t($)),
          d.array.next({ values: { ...$ } }),
          d.values.next({ values: { ...$ } })
      }
      ;(o = {
        mount: E.keepDirtyValues ? o.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: ''
      }),
        (a.mount = !c.isValid || !!E.keepIsValid || !!E.keepDirtyValues),
        (a.watch = !!e.shouldUnregister),
        d.state.next({
          submitCount: E.keepSubmitCount ? r.submitCount : 0,
          isDirty: K ? !1 : E.keepDirty ? r.isDirty : !!(E.keepDefaultValues && !Qr(y, i)),
          isSubmitted: E.keepIsSubmitted ? r.isSubmitted : !1,
          dirtyFields: K
            ? {}
            : E.keepDirtyValues
              ? E.keepDefaultValues && l
                ? Xi(i, l)
                : r.dirtyFields
              : E.keepDefaultValues && y
                ? Xi(i, y)
                : E.keepDirty
                  ? r.dirtyFields
                  : {},
          touchedFields: E.keepTouched ? r.touchedFields : {},
          errors: E.keepErrors ? r.errors : {},
          isSubmitSuccessful: E.keepIsSubmitSuccessful ? r.isSubmitSuccessful : !1,
          isSubmitting: !1
        })
    },
    oa = (y, E) => Er(gr(y) ? y(l) : y, E)
  return {
    control: {
      register: br,
      unregister: Pe,
      getFieldState: be,
      handleSubmit: Fe,
      setError: Ke,
      _executeSchema: A,
      _getWatch: L,
      _getDirty: C,
      _updateValid: R,
      _removeUnmounted: q,
      _updateFieldArray: f,
      _updateDisabledField: at,
      _getFieldArray: U,
      _reset: Er,
      _resetDefaultValues: () =>
        gr(t.defaultValues) &&
        t.defaultValues().then((y) => {
          oa(y, t.resetOptions), d.state.next({ isLoading: !1 })
        }),
      _updateFormState: (y) => {
        r = { ...r, ...y }
      },
      _disableForm: Yt,
      _subjects: d,
      _proxyFormState: c,
      _setErrors: b,
      get _fields() {
        return n
      },
      get _formValues() {
        return l
      },
      get _state() {
        return a
      },
      set _state(y) {
        a = y
      },
      get _defaultValues() {
        return i
      },
      get _names() {
        return o
      },
      set _names(y) {
        o = y
      },
      get _formState() {
        return r
      },
      set _formState(y) {
        r = y
      },
      get _options() {
        return t
      },
      set _options(y) {
        t = { ...t, ...y }
      }
    },
    trigger: I,
    register: br,
    handleSubmit: Fe,
    watch: Oe,
    setValue: O,
    getValues: ce,
    reset: oa,
    resetField: cr,
    clearErrors: Rt,
    unregister: Pe,
    setError: Ke,
    setFocus: (y, E = {}) => {
      const P = ee(n, y),
        Q = P && P._f
      if (Q) {
        const K = Q.refs ? Q.refs[0] : Q.ref
        K.focus && (K.focus(), E.shouldSelect && gr(K.select) && K.select())
      }
    },
    getFieldState: be
  }
}
function P5(e = {}) {
  const t = zt.useRef(),
    r = zt.useRef(),
    [n, i] = zt.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: gr(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: e.errors || {},
      disabled: e.disabled || !1,
      defaultValues: gr(e.defaultValues) ? void 0 : e.defaultValues
    })
  t.current || (t.current = { ...M5(e), formState: n })
  const l = t.current.control
  return (
    (l._options = e),
    y5({
      subject: l._subjects.state,
      next: (a) => {
        g5(a, l._proxyFormState, l._updateFormState) && i({ ...l._formState })
      }
    }),
    zt.useEffect(() => l._disableForm(e.disabled), [l, e.disabled]),
    zt.useEffect(() => {
      if (l._proxyFormState.isDirty) {
        const a = l._getDirty()
        a !== n.isDirty && l._subjects.state.next({ isDirty: a })
      }
    }, [l, n.isDirty]),
    zt.useEffect(() => {
      e.values && !Qr(e.values, r.current)
        ? (l._reset(e.values, l._options.resetOptions), (r.current = e.values), i((a) => ({ ...a })))
        : l._resetDefaultValues()
    }, [e.values, l]),
    zt.useEffect(() => {
      e.errors && l._setErrors(e.errors)
    }, [e.errors, l]),
    zt.useEffect(() => {
      l._state.mount || (l._updateValid(), (l._state.mount = !0)),
        l._state.watch && ((l._state.watch = !1), l._subjects.state.next({ ...l._formState })),
        l._removeUnmounted()
    }),
    zt.useEffect(() => {
      e.shouldUnregister && l._subjects.values.next({ values: l._getWatch() })
    }, [e.shouldUnregister, l]),
    (t.current.formState = v5(n, l)),
    t.current
  )
}
var _e
;(function (e) {
  e.assertEqual = (i) => i
  function t(i) {}
  e.assertIs = t
  function r(i) {
    throw new Error()
  }
  ;(e.assertNever = r),
    (e.arrayToEnum = (i) => {
      const l = {}
      for (const a of i) l[a] = a
      return l
    }),
    (e.getValidEnumValues = (i) => {
      const l = e.objectKeys(i).filter((o) => typeof i[i[o]] != 'number'),
        a = {}
      for (const o of l) a[o] = i[o]
      return e.objectValues(a)
    }),
    (e.objectValues = (i) =>
      e.objectKeys(i).map(function (l) {
        return i[l]
      })),
    (e.objectKeys =
      typeof Object.keys == 'function'
        ? (i) => Object.keys(i)
        : (i) => {
            const l = []
            for (const a in i) Object.prototype.hasOwnProperty.call(i, a) && l.push(a)
            return l
          }),
    (e.find = (i, l) => {
      for (const a of i) if (l(a)) return a
    }),
    (e.isInteger =
      typeof Number.isInteger == 'function'
        ? (i) => Number.isInteger(i)
        : (i) => typeof i == 'number' && isFinite(i) && Math.floor(i) === i)
  function n(i, l = ' | ') {
    return i.map((a) => (typeof a == 'string' ? `'${a}'` : a)).join(l)
  }
  ;(e.joinValues = n), (e.jsonStringifyReplacer = (i, l) => (typeof l == 'bigint' ? l.toString() : l))
})(_e || (_e = {}))
var Bu
;(function (e) {
  e.mergeShapes = (t, r) => ({ ...t, ...r })
})(Bu || (Bu = {}))
const J = _e.arrayToEnum([
    'string',
    'nan',
    'number',
    'integer',
    'float',
    'boolean',
    'date',
    'bigint',
    'symbol',
    'function',
    'undefined',
    'null',
    'array',
    'object',
    'unknown',
    'promise',
    'void',
    'never',
    'map',
    'set'
  ]),
  Gr = (e) => {
    switch (typeof e) {
      case 'undefined':
        return J.undefined
      case 'string':
        return J.string
      case 'number':
        return isNaN(e) ? J.nan : J.number
      case 'boolean':
        return J.boolean
      case 'function':
        return J.function
      case 'bigint':
        return J.bigint
      case 'symbol':
        return J.symbol
      case 'object':
        return Array.isArray(e)
          ? J.array
          : e === null
            ? J.null
            : e.then && typeof e.then == 'function' && e.catch && typeof e.catch == 'function'
              ? J.promise
              : typeof Map < 'u' && e instanceof Map
                ? J.map
                : typeof Set < 'u' && e instanceof Set
                  ? J.set
                  : typeof Date < 'u' && e instanceof Date
                    ? J.date
                    : J.object
      default:
        return J.unknown
    }
  },
  W = _e.arrayToEnum([
    'invalid_type',
    'invalid_literal',
    'custom',
    'invalid_union',
    'invalid_union_discriminator',
    'invalid_enum_value',
    'unrecognized_keys',
    'invalid_arguments',
    'invalid_return_type',
    'invalid_date',
    'invalid_string',
    'too_small',
    'too_big',
    'invalid_intersection_types',
    'not_multiple_of',
    'not_finite'
  ]),
  R5 = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, '$1:')
class Ft extends Error {
  constructor(t) {
    super(),
      (this.issues = []),
      (this.addIssue = (n) => {
        this.issues = [...this.issues, n]
      }),
      (this.addIssues = (n = []) => {
        this.issues = [...this.issues, ...n]
      })
    const r = new.target.prototype
    Object.setPrototypeOf ? Object.setPrototypeOf(this, r) : (this.__proto__ = r), (this.name = 'ZodError'), (this.issues = t)
  }
  get errors() {
    return this.issues
  }
  format(t) {
    const r =
        t ||
        function (l) {
          return l.message
        },
      n = { _errors: [] },
      i = (l) => {
        for (const a of l.issues)
          if (a.code === 'invalid_union') a.unionErrors.map(i)
          else if (a.code === 'invalid_return_type') i(a.returnTypeError)
          else if (a.code === 'invalid_arguments') i(a.argumentsError)
          else if (a.path.length === 0) n._errors.push(r(a))
          else {
            let o = n,
              s = 0
            for (; s < a.path.length; ) {
              const u = a.path[s]
              s === a.path.length - 1 ? ((o[u] = o[u] || { _errors: [] }), o[u]._errors.push(r(a))) : (o[u] = o[u] || { _errors: [] }),
                (o = o[u]),
                s++
            }
          }
      }
    return i(this), n
  }
  static assert(t) {
    if (!(t instanceof Ft)) throw new Error(`Not a ZodError: ${t}`)
  }
  toString() {
    return this.message
  }
  get message() {
    return JSON.stringify(this.issues, _e.jsonStringifyReplacer, 2)
  }
  get isEmpty() {
    return this.issues.length === 0
  }
  flatten(t = (r) => r.message) {
    const r = {},
      n = []
    for (const i of this.issues) i.path.length > 0 ? ((r[i.path[0]] = r[i.path[0]] || []), r[i.path[0]].push(t(i))) : n.push(t(i))
    return { formErrors: n, fieldErrors: r }
  }
  get formErrors() {
    return this.flatten()
  }
}
Ft.create = (e) => new Ft(e)
const Ti = (e, t) => {
  let r
  switch (e.code) {
    case W.invalid_type:
      e.received === J.undefined ? (r = 'Required') : (r = `Expected ${e.expected}, received ${e.received}`)
      break
    case W.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(e.expected, _e.jsonStringifyReplacer)}`
      break
    case W.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${_e.joinValues(e.keys, ', ')}`
      break
    case W.invalid_union:
      r = 'Invalid input'
      break
    case W.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${_e.joinValues(e.options)}`
      break
    case W.invalid_enum_value:
      r = `Invalid enum value. Expected ${_e.joinValues(e.options)}, received '${e.received}'`
      break
    case W.invalid_arguments:
      r = 'Invalid function arguments'
      break
    case W.invalid_return_type:
      r = 'Invalid function return type'
      break
    case W.invalid_date:
      r = 'Invalid date'
      break
    case W.invalid_string:
      typeof e.validation == 'object'
        ? 'includes' in e.validation
          ? ((r = `Invalid input: must include "${e.validation.includes}"`),
            typeof e.validation.position == 'number' &&
              (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`))
          : 'startsWith' in e.validation
            ? (r = `Invalid input: must start with "${e.validation.startsWith}"`)
            : 'endsWith' in e.validation
              ? (r = `Invalid input: must end with "${e.validation.endsWith}"`)
              : _e.assertNever(e.validation)
        : e.validation !== 'regex'
          ? (r = `Invalid ${e.validation}`)
          : (r = 'Invalid')
      break
    case W.too_small:
      e.type === 'array'
        ? (r = `Array must contain ${e.exact ? 'exactly' : e.inclusive ? 'at least' : 'more than'} ${e.minimum} element(s)`)
        : e.type === 'string'
          ? (r = `String must contain ${e.exact ? 'exactly' : e.inclusive ? 'at least' : 'over'} ${e.minimum} character(s)`)
          : e.type === 'number'
            ? (r = `Number must be ${e.exact ? 'exactly equal to ' : e.inclusive ? 'greater than or equal to ' : 'greater than '}${e.minimum}`)
            : e.type === 'date'
              ? (r = `Date must be ${e.exact ? 'exactly equal to ' : e.inclusive ? 'greater than or equal to ' : 'greater than '}${new Date(Number(e.minimum))}`)
              : (r = 'Invalid input')
      break
    case W.too_big:
      e.type === 'array'
        ? (r = `Array must contain ${e.exact ? 'exactly' : e.inclusive ? 'at most' : 'less than'} ${e.maximum} element(s)`)
        : e.type === 'string'
          ? (r = `String must contain ${e.exact ? 'exactly' : e.inclusive ? 'at most' : 'under'} ${e.maximum} character(s)`)
          : e.type === 'number'
            ? (r = `Number must be ${e.exact ? 'exactly' : e.inclusive ? 'less than or equal to' : 'less than'} ${e.maximum}`)
            : e.type === 'bigint'
              ? (r = `BigInt must be ${e.exact ? 'exactly' : e.inclusive ? 'less than or equal to' : 'less than'} ${e.maximum}`)
              : e.type === 'date'
                ? (r = `Date must be ${e.exact ? 'exactly' : e.inclusive ? 'smaller than or equal to' : 'smaller than'} ${new Date(Number(e.maximum))}`)
                : (r = 'Invalid input')
      break
    case W.custom:
      r = 'Invalid input'
      break
    case W.invalid_intersection_types:
      r = 'Intersection results could not be merged'
      break
    case W.not_multiple_of:
      r = `Number must be a multiple of ${e.multipleOf}`
      break
    case W.not_finite:
      r = 'Number must be finite'
      break
    default:
      ;(r = t.defaultError), _e.assertNever(e)
  }
  return { message: r }
}
let yh = Ti
function z5(e) {
  yh = e
}
function jo() {
  return yh
}
const Mo = (e) => {
    const { data: t, path: r, errorMaps: n, issueData: i } = e,
      l = [...r, ...(i.path || [])],
      a = { ...i, path: l }
    if (i.message !== void 0) return { ...i, path: l, message: i.message }
    let o = ''
    const s = n
      .filter((u) => !!u)
      .slice()
      .reverse()
    for (const u of s) o = u(a, { data: t, defaultError: o }).message
    return { ...i, path: l, message: o }
  },
  O5 = []
function G(e, t) {
  const r = jo(),
    n = Mo({
      issueData: t,
      data: e.data,
      path: e.path,
      errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, r, r === Ti ? void 0 : Ti].filter((i) => !!i)
    })
  e.common.issues.push(n)
}
class gt {
  constructor() {
    this.value = 'valid'
  }
  dirty() {
    this.value === 'valid' && (this.value = 'dirty')
  }
  abort() {
    this.value !== 'aborted' && (this.value = 'aborted')
  }
  static mergeArray(t, r) {
    const n = []
    for (const i of r) {
      if (i.status === 'aborted') return fe
      i.status === 'dirty' && t.dirty(), n.push(i.value)
    }
    return { status: t.value, value: n }
  }
  static async mergeObjectAsync(t, r) {
    const n = []
    for (const i of r) {
      const l = await i.key,
        a = await i.value
      n.push({ key: l, value: a })
    }
    return gt.mergeObjectSync(t, n)
  }
  static mergeObjectSync(t, r) {
    const n = {}
    for (const i of r) {
      const { key: l, value: a } = i
      if (l.status === 'aborted' || a.status === 'aborted') return fe
      l.status === 'dirty' && t.dirty(),
        a.status === 'dirty' && t.dirty(),
        l.value !== '__proto__' && (typeof a.value < 'u' || i.alwaysSet) && (n[l.value] = a.value)
    }
    return { status: t.value, value: n }
  }
}
const fe = Object.freeze({ status: 'aborted' }),
  di = (e) => ({ status: 'dirty', value: e }),
  kt = (e) => ({ status: 'valid', value: e }),
  $u = (e) => e.status === 'aborted',
  Hu = (e) => e.status === 'dirty',
  Dl = (e) => e.status === 'valid',
  Al = (e) => typeof Promise < 'u' && e instanceof Promise
function Po(e, t, r, n) {
  if (typeof t == 'function' ? e !== t || !n : !t.has(e))
    throw new TypeError('Cannot read private member from an object whose class did not declare it')
  return t.get(e)
}
function xh(e, t, r, n, i) {
  if (typeof t == 'function' ? e !== t || !i : !t.has(e))
    throw new TypeError('Cannot write private member to an object whose class did not declare it')
  return t.set(e, r), r
}
var oe
;(function (e) {
  ;(e.errToObj = (t) => (typeof t == 'string' ? { message: t } : t || {})),
    (e.toString = (t) => (typeof t == 'string' ? t : t == null ? void 0 : t.message))
})(oe || (oe = {}))
var ll, al
class kr {
  constructor(t, r, n, i) {
    ;(this._cachedPath = []), (this.parent = t), (this.data = r), (this._path = n), (this._key = i)
  }
  get path() {
    return (
      this._cachedPath.length ||
        (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)),
      this._cachedPath
    )
  }
}
const af = (e, t) => {
  if (Dl(t)) return { success: !0, data: t.value }
  if (!e.common.issues.length) throw new Error('Validation failed but no issues detected.')
  return {
    success: !1,
    get error() {
      if (this._error) return this._error
      const r = new Ft(e.common.issues)
      return (this._error = r), this._error
    }
  }
}
function pe(e) {
  if (!e) return {}
  const { errorMap: t, invalid_type_error: r, required_error: n, description: i } = e
  if (t && (r || n)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`)
  return t
    ? { errorMap: t, description: i }
    : {
        errorMap: (a, o) => {
          var s, u
          const { message: c } = e
          return a.code === 'invalid_enum_value'
            ? { message: c ?? o.defaultError }
            : typeof o.data > 'u'
              ? {
                  message: (s = c ?? n) !== null && s !== void 0 ? s : o.defaultError
                }
              : a.code !== 'invalid_type'
                ? { message: o.defaultError }
                : {
                    message: (u = c ?? r) !== null && u !== void 0 ? u : o.defaultError
                  }
        },
        description: i
      }
}
class ge {
  constructor(t) {
    ;(this.spa = this.safeParseAsync),
      (this._def = t),
      (this.parse = this.parse.bind(this)),
      (this.safeParse = this.safeParse.bind(this)),
      (this.parseAsync = this.parseAsync.bind(this)),
      (this.safeParseAsync = this.safeParseAsync.bind(this)),
      (this.spa = this.spa.bind(this)),
      (this.refine = this.refine.bind(this)),
      (this.refinement = this.refinement.bind(this)),
      (this.superRefine = this.superRefine.bind(this)),
      (this.optional = this.optional.bind(this)),
      (this.nullable = this.nullable.bind(this)),
      (this.nullish = this.nullish.bind(this)),
      (this.array = this.array.bind(this)),
      (this.promise = this.promise.bind(this)),
      (this.or = this.or.bind(this)),
      (this.and = this.and.bind(this)),
      (this.transform = this.transform.bind(this)),
      (this.brand = this.brand.bind(this)),
      (this.default = this.default.bind(this)),
      (this.catch = this.catch.bind(this)),
      (this.describe = this.describe.bind(this)),
      (this.pipe = this.pipe.bind(this)),
      (this.readonly = this.readonly.bind(this)),
      (this.isNullable = this.isNullable.bind(this)),
      (this.isOptional = this.isOptional.bind(this))
  }
  get description() {
    return this._def.description
  }
  _getType(t) {
    return Gr(t.data)
  }
  _getOrReturnCtx(t, r) {
    return (
      r || {
        common: t.parent.common,
        data: t.data,
        parsedType: Gr(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    )
  }
  _processInputParams(t) {
    return {
      status: new gt(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: Gr(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    }
  }
  _parseSync(t) {
    const r = this._parse(t)
    if (Al(r)) throw new Error('Synchronous parse encountered promise.')
    return r
  }
  _parseAsync(t) {
    const r = this._parse(t)
    return Promise.resolve(r)
  }
  parse(t, r) {
    const n = this.safeParse(t, r)
    if (n.success) return n.data
    throw n.error
  }
  safeParse(t, r) {
    var n
    const i = {
        common: {
          issues: [],
          async: (n = r == null ? void 0 : r.async) !== null && n !== void 0 ? n : !1,
          contextualErrorMap: r == null ? void 0 : r.errorMap
        },
        path: (r == null ? void 0 : r.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: Gr(t)
      },
      l = this._parseSync({ data: t, path: i.path, parent: i })
    return af(i, l)
  }
  async parseAsync(t, r) {
    const n = await this.safeParseAsync(t, r)
    if (n.success) return n.data
    throw n.error
  }
  async safeParseAsync(t, r) {
    const n = {
        common: {
          issues: [],
          contextualErrorMap: r == null ? void 0 : r.errorMap,
          async: !0
        },
        path: (r == null ? void 0 : r.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: Gr(t)
      },
      i = this._parse({ data: t, path: n.path, parent: n }),
      l = await (Al(i) ? i : Promise.resolve(i))
    return af(n, l)
  }
  refine(t, r) {
    const n = (i) => (typeof r == 'string' || typeof r > 'u' ? { message: r } : typeof r == 'function' ? r(i) : r)
    return this._refinement((i, l) => {
      const a = t(i),
        o = () => l.addIssue({ code: W.custom, ...n(i) })
      return typeof Promise < 'u' && a instanceof Promise ? a.then((s) => (s ? !0 : (o(), !1))) : a ? !0 : (o(), !1)
    })
  }
  refinement(t, r) {
    return this._refinement((n, i) => (t(n) ? !0 : (i.addIssue(typeof r == 'function' ? r(n, i) : r), !1)))
  }
  _refinement(t) {
    return new ur({
      schema: this,
      typeName: de.ZodEffects,
      effect: { type: 'refinement', refinement: t }
    })
  }
  superRefine(t) {
    return this._refinement(t)
  }
  optional() {
    return _r.create(this, this._def)
  }
  nullable() {
    return pn.create(this, this._def)
  }
  nullish() {
    return this.nullable().optional()
  }
  array() {
    return or.create(this, this._def)
  }
  promise() {
    return ji.create(this, this._def)
  }
  or(t) {
    return Ul.create([this, t], this._def)
  }
  and(t) {
    return Bl.create(this, t, this._def)
  }
  transform(t) {
    return new ur({
      ...pe(this._def),
      schema: this,
      typeName: de.ZodEffects,
      effect: { type: 'transform', transform: t }
    })
  }
  default(t) {
    const r = typeof t == 'function' ? t : () => t
    return new ql({
      ...pe(this._def),
      innerType: this,
      defaultValue: r,
      typeName: de.ZodDefault
    })
  }
  brand() {
    return new id({ typeName: de.ZodBranded, type: this, ...pe(this._def) })
  }
  catch(t) {
    const r = typeof t == 'function' ? t : () => t
    return new Kl({
      ...pe(this._def),
      innerType: this,
      catchValue: r,
      typeName: de.ZodCatch
    })
  }
  describe(t) {
    const r = this.constructor
    return new r({ ...this._def, description: t })
  }
  pipe(t) {
    return la.create(this, t)
  }
  readonly() {
    return Ql.create(this)
  }
  isOptional() {
    return this.safeParse(void 0).success
  }
  isNullable() {
    return this.safeParse(null).success
  }
}
const L5 = /^c[^\s-]{8,}$/i,
  D5 = /^[0-9a-z]+$/,
  A5 = /^[0-9A-HJKMNP-TV-Z]{26}$/,
  V5 = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  F5 = /^[a-z0-9_-]{21}$/i,
  I5 =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  U5 = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  B5 = '^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$'
let Ws
const $5 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  H5 =
    /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
  W5 = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  wh =
    '((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))',
  Z5 = new RegExp(`^${wh}$`)
function _h(e) {
  let t = '([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d'
  return e.precision ? (t = `${t}\\.\\d{${e.precision}}`) : e.precision == null && (t = `${t}(\\.\\d+)?`), t
}
function q5(e) {
  return new RegExp(`^${_h(e)}$`)
}
function kh(e) {
  let t = `${wh}T${_h(e)}`
  const r = []
  return r.push(e.local ? 'Z?' : 'Z'), e.offset && r.push('([+-]\\d{2}:?\\d{2})'), (t = `${t}(${r.join('|')})`), new RegExp(`^${t}$`)
}
function K5(e, t) {
  return !!(((t === 'v4' || !t) && $5.test(e)) || ((t === 'v6' || !t) && H5.test(e)))
}
class ir extends ge {
  _parse(t) {
    if ((this._def.coerce && (t.data = String(t.data)), this._getType(t) !== J.string)) {
      const l = this._getOrReturnCtx(t)
      return (
        G(l, {
          code: W.invalid_type,
          expected: J.string,
          received: l.parsedType
        }),
        fe
      )
    }
    const n = new gt()
    let i
    for (const l of this._def.checks)
      if (l.kind === 'min')
        t.data.length < l.value &&
          ((i = this._getOrReturnCtx(t, i)),
          G(i, {
            code: W.too_small,
            minimum: l.value,
            type: 'string',
            inclusive: !0,
            exact: !1,
            message: l.message
          }),
          n.dirty())
      else if (l.kind === 'max')
        t.data.length > l.value &&
          ((i = this._getOrReturnCtx(t, i)),
          G(i, {
            code: W.too_big,
            maximum: l.value,
            type: 'string',
            inclusive: !0,
            exact: !1,
            message: l.message
          }),
          n.dirty())
      else if (l.kind === 'length') {
        const a = t.data.length > l.value,
          o = t.data.length < l.value
        ;(a || o) &&
          ((i = this._getOrReturnCtx(t, i)),
          a
            ? G(i, {
                code: W.too_big,
                maximum: l.value,
                type: 'string',
                inclusive: !0,
                exact: !0,
                message: l.message
              })
            : o &&
              G(i, {
                code: W.too_small,
                minimum: l.value,
                type: 'string',
                inclusive: !0,
                exact: !0,
                message: l.message
              }),
          n.dirty())
      } else if (l.kind === 'email')
        U5.test(t.data) ||
          ((i = this._getOrReturnCtx(t, i)),
          G(i, {
            validation: 'email',
            code: W.invalid_string,
            message: l.message
          }),
          n.dirty())
      else if (l.kind === 'emoji')
        Ws || (Ws = new RegExp(B5, 'u')),
          Ws.test(t.data) ||
            ((i = this._getOrReturnCtx(t, i)),
            G(i, {
              validation: 'emoji',
              code: W.invalid_string,
              message: l.message
            }),
            n.dirty())
      else if (l.kind === 'uuid')
        V5.test(t.data) ||
          ((i = this._getOrReturnCtx(t, i)),
          G(i, {
            validation: 'uuid',
            code: W.invalid_string,
            message: l.message
          }),
          n.dirty())
      else if (l.kind === 'nanoid')
        F5.test(t.data) ||
          ((i = this._getOrReturnCtx(t, i)),
          G(i, {
            validation: 'nanoid',
            code: W.invalid_string,
            message: l.message
          }),
          n.dirty())
      else if (l.kind === 'cuid')
        L5.test(t.data) ||
          ((i = this._getOrReturnCtx(t, i)),
          G(i, {
            validation: 'cuid',
            code: W.invalid_string,
            message: l.message
          }),
          n.dirty())
      else if (l.kind === 'cuid2')
        D5.test(t.data) ||
          ((i = this._getOrReturnCtx(t, i)),
          G(i, {
            validation: 'cuid2',
            code: W.invalid_string,
            message: l.message
          }),
          n.dirty())
      else if (l.kind === 'ulid')
        A5.test(t.data) ||
          ((i = this._getOrReturnCtx(t, i)),
          G(i, {
            validation: 'ulid',
            code: W.invalid_string,
            message: l.message
          }),
          n.dirty())
      else if (l.kind === 'url')
        try {
          new URL(t.data)
        } catch {
          ;(i = this._getOrReturnCtx(t, i)),
            G(i, {
              validation: 'url',
              code: W.invalid_string,
              message: l.message
            }),
            n.dirty()
        }
      else
        l.kind === 'regex'
          ? ((l.regex.lastIndex = 0),
            l.regex.test(t.data) ||
              ((i = this._getOrReturnCtx(t, i)),
              G(i, {
                validation: 'regex',
                code: W.invalid_string,
                message: l.message
              }),
              n.dirty()))
          : l.kind === 'trim'
            ? (t.data = t.data.trim())
            : l.kind === 'includes'
              ? t.data.includes(l.value, l.position) ||
                ((i = this._getOrReturnCtx(t, i)),
                G(i, {
                  code: W.invalid_string,
                  validation: { includes: l.value, position: l.position },
                  message: l.message
                }),
                n.dirty())
              : l.kind === 'toLowerCase'
                ? (t.data = t.data.toLowerCase())
                : l.kind === 'toUpperCase'
                  ? (t.data = t.data.toUpperCase())
                  : l.kind === 'startsWith'
                    ? t.data.startsWith(l.value) ||
                      ((i = this._getOrReturnCtx(t, i)),
                      G(i, {
                        code: W.invalid_string,
                        validation: { startsWith: l.value },
                        message: l.message
                      }),
                      n.dirty())
                    : l.kind === 'endsWith'
                      ? t.data.endsWith(l.value) ||
                        ((i = this._getOrReturnCtx(t, i)),
                        G(i, {
                          code: W.invalid_string,
                          validation: { endsWith: l.value },
                          message: l.message
                        }),
                        n.dirty())
                      : l.kind === 'datetime'
                        ? kh(l).test(t.data) ||
                          ((i = this._getOrReturnCtx(t, i)),
                          G(i, {
                            code: W.invalid_string,
                            validation: 'datetime',
                            message: l.message
                          }),
                          n.dirty())
                        : l.kind === 'date'
                          ? Z5.test(t.data) ||
                            ((i = this._getOrReturnCtx(t, i)),
                            G(i, {
                              code: W.invalid_string,
                              validation: 'date',
                              message: l.message
                            }),
                            n.dirty())
                          : l.kind === 'time'
                            ? q5(l).test(t.data) ||
                              ((i = this._getOrReturnCtx(t, i)),
                              G(i, {
                                code: W.invalid_string,
                                validation: 'time',
                                message: l.message
                              }),
                              n.dirty())
                            : l.kind === 'duration'
                              ? I5.test(t.data) ||
                                ((i = this._getOrReturnCtx(t, i)),
                                G(i, {
                                  validation: 'duration',
                                  code: W.invalid_string,
                                  message: l.message
                                }),
                                n.dirty())
                              : l.kind === 'ip'
                                ? K5(t.data, l.version) ||
                                  ((i = this._getOrReturnCtx(t, i)),
                                  G(i, {
                                    validation: 'ip',
                                    code: W.invalid_string,
                                    message: l.message
                                  }),
                                  n.dirty())
                                : l.kind === 'base64'
                                  ? W5.test(t.data) ||
                                    ((i = this._getOrReturnCtx(t, i)),
                                    G(i, {
                                      validation: 'base64',
                                      code: W.invalid_string,
                                      message: l.message
                                    }),
                                    n.dirty())
                                  : _e.assertNever(l)
    return { status: n.value, value: t.data }
  }
  _regex(t, r, n) {
    return this.refinement((i) => t.test(i), {
      validation: r,
      code: W.invalid_string,
      ...oe.errToObj(n)
    })
  }
  _addCheck(t) {
    return new ir({ ...this._def, checks: [...this._def.checks, t] })
  }
  email(t) {
    return this._addCheck({ kind: 'email', ...oe.errToObj(t) })
  }
  url(t) {
    return this._addCheck({ kind: 'url', ...oe.errToObj(t) })
  }
  emoji(t) {
    return this._addCheck({ kind: 'emoji', ...oe.errToObj(t) })
  }
  uuid(t) {
    return this._addCheck({ kind: 'uuid', ...oe.errToObj(t) })
  }
  nanoid(t) {
    return this._addCheck({ kind: 'nanoid', ...oe.errToObj(t) })
  }
  cuid(t) {
    return this._addCheck({ kind: 'cuid', ...oe.errToObj(t) })
  }
  cuid2(t) {
    return this._addCheck({ kind: 'cuid2', ...oe.errToObj(t) })
  }
  ulid(t) {
    return this._addCheck({ kind: 'ulid', ...oe.errToObj(t) })
  }
  base64(t) {
    return this._addCheck({ kind: 'base64', ...oe.errToObj(t) })
  }
  ip(t) {
    return this._addCheck({ kind: 'ip', ...oe.errToObj(t) })
  }
  datetime(t) {
    var r, n
    return typeof t == 'string'
      ? this._addCheck({
          kind: 'datetime',
          precision: null,
          offset: !1,
          local: !1,
          message: t
        })
      : this._addCheck({
          kind: 'datetime',
          precision: typeof (t == null ? void 0 : t.precision) > 'u' ? null : t == null ? void 0 : t.precision,
          offset: (r = t == null ? void 0 : t.offset) !== null && r !== void 0 ? r : !1,
          local: (n = t == null ? void 0 : t.local) !== null && n !== void 0 ? n : !1,
          ...oe.errToObj(t == null ? void 0 : t.message)
        })
  }
  date(t) {
    return this._addCheck({ kind: 'date', message: t })
  }
  time(t) {
    return typeof t == 'string'
      ? this._addCheck({ kind: 'time', precision: null, message: t })
      : this._addCheck({
          kind: 'time',
          precision: typeof (t == null ? void 0 : t.precision) > 'u' ? null : t == null ? void 0 : t.precision,
          ...oe.errToObj(t == null ? void 0 : t.message)
        })
  }
  duration(t) {
    return this._addCheck({ kind: 'duration', ...oe.errToObj(t) })
  }
  regex(t, r) {
    return this._addCheck({ kind: 'regex', regex: t, ...oe.errToObj(r) })
  }
  includes(t, r) {
    return this._addCheck({
      kind: 'includes',
      value: t,
      position: r == null ? void 0 : r.position,
      ...oe.errToObj(r == null ? void 0 : r.message)
    })
  }
  startsWith(t, r) {
    return this._addCheck({ kind: 'startsWith', value: t, ...oe.errToObj(r) })
  }
  endsWith(t, r) {
    return this._addCheck({ kind: 'endsWith', value: t, ...oe.errToObj(r) })
  }
  min(t, r) {
    return this._addCheck({ kind: 'min', value: t, ...oe.errToObj(r) })
  }
  max(t, r) {
    return this._addCheck({ kind: 'max', value: t, ...oe.errToObj(r) })
  }
  length(t, r) {
    return this._addCheck({ kind: 'length', value: t, ...oe.errToObj(r) })
  }
  nonempty(t) {
    return this.min(1, oe.errToObj(t))
  }
  trim() {
    return new ir({
      ...this._def,
      checks: [...this._def.checks, { kind: 'trim' }]
    })
  }
  toLowerCase() {
    return new ir({
      ...this._def,
      checks: [...this._def.checks, { kind: 'toLowerCase' }]
    })
  }
  toUpperCase() {
    return new ir({
      ...this._def,
      checks: [...this._def.checks, { kind: 'toUpperCase' }]
    })
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === 'datetime')
  }
  get isDate() {
    return !!this._def.checks.find((t) => t.kind === 'date')
  }
  get isTime() {
    return !!this._def.checks.find((t) => t.kind === 'time')
  }
  get isDuration() {
    return !!this._def.checks.find((t) => t.kind === 'duration')
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === 'email')
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === 'url')
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === 'emoji')
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === 'uuid')
  }
  get isNANOID() {
    return !!this._def.checks.find((t) => t.kind === 'nanoid')
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === 'cuid')
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === 'cuid2')
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === 'ulid')
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === 'ip')
  }
  get isBase64() {
    return !!this._def.checks.find((t) => t.kind === 'base64')
  }
  get minLength() {
    let t = null
    for (const r of this._def.checks) r.kind === 'min' && (t === null || r.value > t) && (t = r.value)
    return t
  }
  get maxLength() {
    let t = null
    for (const r of this._def.checks) r.kind === 'max' && (t === null || r.value < t) && (t = r.value)
    return t
  }
}
ir.create = (e) => {
  var t
  return new ir({
    checks: [],
    typeName: de.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...pe(e)
  })
}
function Q5(e, t) {
  const r = (e.toString().split('.')[1] || '').length,
    n = (t.toString().split('.')[1] || '').length,
    i = r > n ? r : n,
    l = parseInt(e.toFixed(i).replace('.', '')),
    a = parseInt(t.toFixed(i).replace('.', ''))
  return (l % a) / Math.pow(10, i)
}
class dn extends ge {
  constructor() {
    super(...arguments), (this.min = this.gte), (this.max = this.lte), (this.step = this.multipleOf)
  }
  _parse(t) {
    if ((this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== J.number)) {
      const l = this._getOrReturnCtx(t)
      return (
        G(l, {
          code: W.invalid_type,
          expected: J.number,
          received: l.parsedType
        }),
        fe
      )
    }
    let n
    const i = new gt()
    for (const l of this._def.checks)
      l.kind === 'int'
        ? _e.isInteger(t.data) ||
          ((n = this._getOrReturnCtx(t, n)),
          G(n, {
            code: W.invalid_type,
            expected: 'integer',
            received: 'float',
            message: l.message
          }),
          i.dirty())
        : l.kind === 'min'
          ? (l.inclusive ? t.data < l.value : t.data <= l.value) &&
            ((n = this._getOrReturnCtx(t, n)),
            G(n, {
              code: W.too_small,
              minimum: l.value,
              type: 'number',
              inclusive: l.inclusive,
              exact: !1,
              message: l.message
            }),
            i.dirty())
          : l.kind === 'max'
            ? (l.inclusive ? t.data > l.value : t.data >= l.value) &&
              ((n = this._getOrReturnCtx(t, n)),
              G(n, {
                code: W.too_big,
                maximum: l.value,
                type: 'number',
                inclusive: l.inclusive,
                exact: !1,
                message: l.message
              }),
              i.dirty())
            : l.kind === 'multipleOf'
              ? Q5(t.data, l.value) !== 0 &&
                ((n = this._getOrReturnCtx(t, n)),
                G(n, {
                  code: W.not_multiple_of,
                  multipleOf: l.value,
                  message: l.message
                }),
                i.dirty())
              : l.kind === 'finite'
                ? Number.isFinite(t.data) || ((n = this._getOrReturnCtx(t, n)), G(n, { code: W.not_finite, message: l.message }), i.dirty())
                : _e.assertNever(l)
    return { status: i.value, value: t.data }
  }
  gte(t, r) {
    return this.setLimit('min', t, !0, oe.toString(r))
  }
  gt(t, r) {
    return this.setLimit('min', t, !1, oe.toString(r))
  }
  lte(t, r) {
    return this.setLimit('max', t, !0, oe.toString(r))
  }
  lt(t, r) {
    return this.setLimit('max', t, !1, oe.toString(r))
  }
  setLimit(t, r, n, i) {
    return new dn({
      ...this._def,
      checks: [...this._def.checks, { kind: t, value: r, inclusive: n, message: oe.toString(i) }]
    })
  }
  _addCheck(t) {
    return new dn({ ...this._def, checks: [...this._def.checks, t] })
  }
  int(t) {
    return this._addCheck({ kind: 'int', message: oe.toString(t) })
  }
  positive(t) {
    return this._addCheck({
      kind: 'min',
      value: 0,
      inclusive: !1,
      message: oe.toString(t)
    })
  }
  negative(t) {
    return this._addCheck({
      kind: 'max',
      value: 0,
      inclusive: !1,
      message: oe.toString(t)
    })
  }
  nonpositive(t) {
    return this._addCheck({
      kind: 'max',
      value: 0,
      inclusive: !0,
      message: oe.toString(t)
    })
  }
  nonnegative(t) {
    return this._addCheck({
      kind: 'min',
      value: 0,
      inclusive: !0,
      message: oe.toString(t)
    })
  }
  multipleOf(t, r) {
    return this._addCheck({
      kind: 'multipleOf',
      value: t,
      message: oe.toString(r)
    })
  }
  finite(t) {
    return this._addCheck({ kind: 'finite', message: oe.toString(t) })
  }
  safe(t) {
    return this._addCheck({
      kind: 'min',
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: oe.toString(t)
    })._addCheck({
      kind: 'max',
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: oe.toString(t)
    })
  }
  get minValue() {
    let t = null
    for (const r of this._def.checks) r.kind === 'min' && (t === null || r.value > t) && (t = r.value)
    return t
  }
  get maxValue() {
    let t = null
    for (const r of this._def.checks) r.kind === 'max' && (t === null || r.value < t) && (t = r.value)
    return t
  }
  get isInt() {
    return !!this._def.checks.find((t) => t.kind === 'int' || (t.kind === 'multipleOf' && _e.isInteger(t.value)))
  }
  get isFinite() {
    let t = null,
      r = null
    for (const n of this._def.checks) {
      if (n.kind === 'finite' || n.kind === 'int' || n.kind === 'multipleOf') return !0
      n.kind === 'min' ? (r === null || n.value > r) && (r = n.value) : n.kind === 'max' && (t === null || n.value < t) && (t = n.value)
    }
    return Number.isFinite(r) && Number.isFinite(t)
  }
}
dn.create = (e) =>
  new dn({
    checks: [],
    typeName: de.ZodNumber,
    coerce: (e == null ? void 0 : e.coerce) || !1,
    ...pe(e)
  })
class fn extends ge {
  constructor() {
    super(...arguments), (this.min = this.gte), (this.max = this.lte)
  }
  _parse(t) {
    if ((this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== J.bigint)) {
      const l = this._getOrReturnCtx(t)
      return (
        G(l, {
          code: W.invalid_type,
          expected: J.bigint,
          received: l.parsedType
        }),
        fe
      )
    }
    let n
    const i = new gt()
    for (const l of this._def.checks)
      l.kind === 'min'
        ? (l.inclusive ? t.data < l.value : t.data <= l.value) &&
          ((n = this._getOrReturnCtx(t, n)),
          G(n, {
            code: W.too_small,
            type: 'bigint',
            minimum: l.value,
            inclusive: l.inclusive,
            message: l.message
          }),
          i.dirty())
        : l.kind === 'max'
          ? (l.inclusive ? t.data > l.value : t.data >= l.value) &&
            ((n = this._getOrReturnCtx(t, n)),
            G(n, {
              code: W.too_big,
              type: 'bigint',
              maximum: l.value,
              inclusive: l.inclusive,
              message: l.message
            }),
            i.dirty())
          : l.kind === 'multipleOf'
            ? t.data % l.value !== BigInt(0) &&
              ((n = this._getOrReturnCtx(t, n)),
              G(n, {
                code: W.not_multiple_of,
                multipleOf: l.value,
                message: l.message
              }),
              i.dirty())
            : _e.assertNever(l)
    return { status: i.value, value: t.data }
  }
  gte(t, r) {
    return this.setLimit('min', t, !0, oe.toString(r))
  }
  gt(t, r) {
    return this.setLimit('min', t, !1, oe.toString(r))
  }
  lte(t, r) {
    return this.setLimit('max', t, !0, oe.toString(r))
  }
  lt(t, r) {
    return this.setLimit('max', t, !1, oe.toString(r))
  }
  setLimit(t, r, n, i) {
    return new fn({
      ...this._def,
      checks: [...this._def.checks, { kind: t, value: r, inclusive: n, message: oe.toString(i) }]
    })
  }
  _addCheck(t) {
    return new fn({ ...this._def, checks: [...this._def.checks, t] })
  }
  positive(t) {
    return this._addCheck({
      kind: 'min',
      value: BigInt(0),
      inclusive: !1,
      message: oe.toString(t)
    })
  }
  negative(t) {
    return this._addCheck({
      kind: 'max',
      value: BigInt(0),
      inclusive: !1,
      message: oe.toString(t)
    })
  }
  nonpositive(t) {
    return this._addCheck({
      kind: 'max',
      value: BigInt(0),
      inclusive: !0,
      message: oe.toString(t)
    })
  }
  nonnegative(t) {
    return this._addCheck({
      kind: 'min',
      value: BigInt(0),
      inclusive: !0,
      message: oe.toString(t)
    })
  }
  multipleOf(t, r) {
    return this._addCheck({
      kind: 'multipleOf',
      value: t,
      message: oe.toString(r)
    })
  }
  get minValue() {
    let t = null
    for (const r of this._def.checks) r.kind === 'min' && (t === null || r.value > t) && (t = r.value)
    return t
  }
  get maxValue() {
    let t = null
    for (const r of this._def.checks) r.kind === 'max' && (t === null || r.value < t) && (t = r.value)
    return t
  }
}
fn.create = (e) => {
  var t
  return new fn({
    checks: [],
    typeName: de.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...pe(e)
  })
}
class Vl extends ge {
  _parse(t) {
    if ((this._def.coerce && (t.data = !!t.data), this._getType(t) !== J.boolean)) {
      const n = this._getOrReturnCtx(t)
      return (
        G(n, {
          code: W.invalid_type,
          expected: J.boolean,
          received: n.parsedType
        }),
        fe
      )
    }
    return kt(t.data)
  }
}
Vl.create = (e) =>
  new Vl({
    typeName: de.ZodBoolean,
    coerce: (e == null ? void 0 : e.coerce) || !1,
    ...pe(e)
  })
class Vn extends ge {
  _parse(t) {
    if ((this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== J.date)) {
      const l = this._getOrReturnCtx(t)
      return (
        G(l, {
          code: W.invalid_type,
          expected: J.date,
          received: l.parsedType
        }),
        fe
      )
    }
    if (isNaN(t.data.getTime())) {
      const l = this._getOrReturnCtx(t)
      return G(l, { code: W.invalid_date }), fe
    }
    const n = new gt()
    let i
    for (const l of this._def.checks)
      l.kind === 'min'
        ? t.data.getTime() < l.value &&
          ((i = this._getOrReturnCtx(t, i)),
          G(i, {
            code: W.too_small,
            message: l.message,
            inclusive: !0,
            exact: !1,
            minimum: l.value,
            type: 'date'
          }),
          n.dirty())
        : l.kind === 'max'
          ? t.data.getTime() > l.value &&
            ((i = this._getOrReturnCtx(t, i)),
            G(i, {
              code: W.too_big,
              message: l.message,
              inclusive: !0,
              exact: !1,
              maximum: l.value,
              type: 'date'
            }),
            n.dirty())
          : _e.assertNever(l)
    return { status: n.value, value: new Date(t.data.getTime()) }
  }
  _addCheck(t) {
    return new Vn({ ...this._def, checks: [...this._def.checks, t] })
  }
  min(t, r) {
    return this._addCheck({
      kind: 'min',
      value: t.getTime(),
      message: oe.toString(r)
    })
  }
  max(t, r) {
    return this._addCheck({
      kind: 'max',
      value: t.getTime(),
      message: oe.toString(r)
    })
  }
  get minDate() {
    let t = null
    for (const r of this._def.checks) r.kind === 'min' && (t === null || r.value > t) && (t = r.value)
    return t != null ? new Date(t) : null
  }
  get maxDate() {
    let t = null
    for (const r of this._def.checks) r.kind === 'max' && (t === null || r.value < t) && (t = r.value)
    return t != null ? new Date(t) : null
  }
}
Vn.create = (e) =>
  new Vn({
    checks: [],
    coerce: (e == null ? void 0 : e.coerce) || !1,
    typeName: de.ZodDate,
    ...pe(e)
  })
class Ro extends ge {
  _parse(t) {
    if (this._getType(t) !== J.symbol) {
      const n = this._getOrReturnCtx(t)
      return (
        G(n, {
          code: W.invalid_type,
          expected: J.symbol,
          received: n.parsedType
        }),
        fe
      )
    }
    return kt(t.data)
  }
}
Ro.create = (e) => new Ro({ typeName: de.ZodSymbol, ...pe(e) })
class Fl extends ge {
  _parse(t) {
    if (this._getType(t) !== J.undefined) {
      const n = this._getOrReturnCtx(t)
      return (
        G(n, {
          code: W.invalid_type,
          expected: J.undefined,
          received: n.parsedType
        }),
        fe
      )
    }
    return kt(t.data)
  }
}
Fl.create = (e) => new Fl({ typeName: de.ZodUndefined, ...pe(e) })
class Il extends ge {
  _parse(t) {
    if (this._getType(t) !== J.null) {
      const n = this._getOrReturnCtx(t)
      return (
        G(n, {
          code: W.invalid_type,
          expected: J.null,
          received: n.parsedType
        }),
        fe
      )
    }
    return kt(t.data)
  }
}
Il.create = (e) => new Il({ typeName: de.ZodNull, ...pe(e) })
class Ni extends ge {
  constructor() {
    super(...arguments), (this._any = !0)
  }
  _parse(t) {
    return kt(t.data)
  }
}
Ni.create = (e) => new Ni({ typeName: de.ZodAny, ...pe(e) })
class Pn extends ge {
  constructor() {
    super(...arguments), (this._unknown = !0)
  }
  _parse(t) {
    return kt(t.data)
  }
}
Pn.create = (e) => new Pn({ typeName: de.ZodUnknown, ...pe(e) })
class Fr extends ge {
  _parse(t) {
    const r = this._getOrReturnCtx(t)
    return G(r, { code: W.invalid_type, expected: J.never, received: r.parsedType }), fe
  }
}
Fr.create = (e) => new Fr({ typeName: de.ZodNever, ...pe(e) })
class zo extends ge {
  _parse(t) {
    if (this._getType(t) !== J.undefined) {
      const n = this._getOrReturnCtx(t)
      return (
        G(n, {
          code: W.invalid_type,
          expected: J.void,
          received: n.parsedType
        }),
        fe
      )
    }
    return kt(t.data)
  }
}
zo.create = (e) => new zo({ typeName: de.ZodVoid, ...pe(e) })
class or extends ge {
  _parse(t) {
    const { ctx: r, status: n } = this._processInputParams(t),
      i = this._def
    if (r.parsedType !== J.array)
      return (
        G(r, {
          code: W.invalid_type,
          expected: J.array,
          received: r.parsedType
        }),
        fe
      )
    if (i.exactLength !== null) {
      const a = r.data.length > i.exactLength.value,
        o = r.data.length < i.exactLength.value
      ;(a || o) &&
        (G(r, {
          code: a ? W.too_big : W.too_small,
          minimum: o ? i.exactLength.value : void 0,
          maximum: a ? i.exactLength.value : void 0,
          type: 'array',
          inclusive: !0,
          exact: !0,
          message: i.exactLength.message
        }),
        n.dirty())
    }
    if (
      (i.minLength !== null &&
        r.data.length < i.minLength.value &&
        (G(r, {
          code: W.too_small,
          minimum: i.minLength.value,
          type: 'array',
          inclusive: !0,
          exact: !1,
          message: i.minLength.message
        }),
        n.dirty()),
      i.maxLength !== null &&
        r.data.length > i.maxLength.value &&
        (G(r, {
          code: W.too_big,
          maximum: i.maxLength.value,
          type: 'array',
          inclusive: !0,
          exact: !1,
          message: i.maxLength.message
        }),
        n.dirty()),
      r.common.async)
    )
      return Promise.all([...r.data].map((a, o) => i.type._parseAsync(new kr(r, a, r.path, o)))).then((a) => gt.mergeArray(n, a))
    const l = [...r.data].map((a, o) => i.type._parseSync(new kr(r, a, r.path, o)))
    return gt.mergeArray(n, l)
  }
  get element() {
    return this._def.type
  }
  min(t, r) {
    return new or({
      ...this._def,
      minLength: { value: t, message: oe.toString(r) }
    })
  }
  max(t, r) {
    return new or({
      ...this._def,
      maxLength: { value: t, message: oe.toString(r) }
    })
  }
  length(t, r) {
    return new or({
      ...this._def,
      exactLength: { value: t, message: oe.toString(r) }
    })
  }
  nonempty(t) {
    return this.min(1, t)
  }
}
or.create = (e, t) =>
  new or({
    type: e,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: de.ZodArray,
    ...pe(t)
  })
function Xn(e) {
  if (e instanceof Ie) {
    const t = {}
    for (const r in e.shape) {
      const n = e.shape[r]
      t[r] = _r.create(Xn(n))
    }
    return new Ie({ ...e._def, shape: () => t })
  } else
    return e instanceof or
      ? new or({ ...e._def, type: Xn(e.element) })
      : e instanceof _r
        ? _r.create(Xn(e.unwrap()))
        : e instanceof pn
          ? pn.create(Xn(e.unwrap()))
          : e instanceof Sr
            ? Sr.create(e.items.map((t) => Xn(t)))
            : e
}
class Ie extends ge {
  constructor() {
    super(...arguments), (this._cached = null), (this.nonstrict = this.passthrough), (this.augment = this.extend)
  }
  _getCached() {
    if (this._cached !== null) return this._cached
    const t = this._def.shape(),
      r = _e.objectKeys(t)
    return (this._cached = { shape: t, keys: r })
  }
  _parse(t) {
    if (this._getType(t) !== J.object) {
      const u = this._getOrReturnCtx(t)
      return (
        G(u, {
          code: W.invalid_type,
          expected: J.object,
          received: u.parsedType
        }),
        fe
      )
    }
    const { status: n, ctx: i } = this._processInputParams(t),
      { shape: l, keys: a } = this._getCached(),
      o = []
    if (!(this._def.catchall instanceof Fr && this._def.unknownKeys === 'strip')) for (const u in i.data) a.includes(u) || o.push(u)
    const s = []
    for (const u of a) {
      const c = l[u],
        d = i.data[u]
      s.push({
        key: { status: 'valid', value: u },
        value: c._parse(new kr(i, d, i.path, u)),
        alwaysSet: u in i.data
      })
    }
    if (this._def.catchall instanceof Fr) {
      const u = this._def.unknownKeys
      if (u === 'passthrough')
        for (const c of o)
          s.push({
            key: { status: 'valid', value: c },
            value: { status: 'valid', value: i.data[c] }
          })
      else if (u === 'strict') o.length > 0 && (G(i, { code: W.unrecognized_keys, keys: o }), n.dirty())
      else if (u !== 'strip') throw new Error('Internal ZodObject error: invalid unknownKeys value.')
    } else {
      const u = this._def.catchall
      for (const c of o) {
        const d = i.data[c]
        s.push({
          key: { status: 'valid', value: c },
          value: u._parse(new kr(i, d, i.path, c)),
          alwaysSet: c in i.data
        })
      }
    }
    return i.common.async
      ? Promise.resolve()
          .then(async () => {
            const u = []
            for (const c of s) {
              const d = await c.key,
                h = await c.value
              u.push({ key: d, value: h, alwaysSet: c.alwaysSet })
            }
            return u
          })
          .then((u) => gt.mergeObjectSync(n, u))
      : gt.mergeObjectSync(n, s)
  }
  get shape() {
    return this._def.shape()
  }
  strict(t) {
    return (
      oe.errToObj,
      new Ie({
        ...this._def,
        unknownKeys: 'strict',
        ...(t !== void 0
          ? {
              errorMap: (r, n) => {
                var i, l, a, o
                const s =
                  (a = (l = (i = this._def).errorMap) === null || l === void 0 ? void 0 : l.call(i, r, n).message) !== null && a !== void 0
                    ? a
                    : n.defaultError
                return r.code === 'unrecognized_keys'
                  ? {
                      message: (o = oe.errToObj(t).message) !== null && o !== void 0 ? o : s
                    }
                  : { message: s }
              }
            }
          : {})
      })
    )
  }
  strip() {
    return new Ie({ ...this._def, unknownKeys: 'strip' })
  }
  passthrough() {
    return new Ie({ ...this._def, unknownKeys: 'passthrough' })
  }
  extend(t) {
    return new Ie({
      ...this._def,
      shape: () => ({ ...this._def.shape(), ...t })
    })
  }
  merge(t) {
    return new Ie({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({ ...this._def.shape(), ...t._def.shape() }),
      typeName: de.ZodObject
    })
  }
  setKey(t, r) {
    return this.augment({ [t]: r })
  }
  catchall(t) {
    return new Ie({ ...this._def, catchall: t })
  }
  pick(t) {
    const r = {}
    return (
      _e.objectKeys(t).forEach((n) => {
        t[n] && this.shape[n] && (r[n] = this.shape[n])
      }),
      new Ie({ ...this._def, shape: () => r })
    )
  }
  omit(t) {
    const r = {}
    return (
      _e.objectKeys(this.shape).forEach((n) => {
        t[n] || (r[n] = this.shape[n])
      }),
      new Ie({ ...this._def, shape: () => r })
    )
  }
  deepPartial() {
    return Xn(this)
  }
  partial(t) {
    const r = {}
    return (
      _e.objectKeys(this.shape).forEach((n) => {
        const i = this.shape[n]
        t && !t[n] ? (r[n] = i) : (r[n] = i.optional())
      }),
      new Ie({ ...this._def, shape: () => r })
    )
  }
  required(t) {
    const r = {}
    return (
      _e.objectKeys(this.shape).forEach((n) => {
        if (t && !t[n]) r[n] = this.shape[n]
        else {
          let l = this.shape[n]
          for (; l instanceof _r; ) l = l._def.innerType
          r[n] = l
        }
      }),
      new Ie({ ...this._def, shape: () => r })
    )
  }
  keyof() {
    return Sh(_e.objectKeys(this.shape))
  }
}
Ie.create = (e, t) =>
  new Ie({
    shape: () => e,
    unknownKeys: 'strip',
    catchall: Fr.create(),
    typeName: de.ZodObject,
    ...pe(t)
  })
Ie.strictCreate = (e, t) =>
  new Ie({
    shape: () => e,
    unknownKeys: 'strict',
    catchall: Fr.create(),
    typeName: de.ZodObject,
    ...pe(t)
  })
Ie.lazycreate = (e, t) =>
  new Ie({
    shape: e,
    unknownKeys: 'strip',
    catchall: Fr.create(),
    typeName: de.ZodObject,
    ...pe(t)
  })
class Ul extends ge {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t),
      n = this._def.options
    function i(l) {
      for (const o of l) if (o.result.status === 'valid') return o.result
      for (const o of l) if (o.result.status === 'dirty') return r.common.issues.push(...o.ctx.common.issues), o.result
      const a = l.map((o) => new Ft(o.ctx.common.issues))
      return G(r, { code: W.invalid_union, unionErrors: a }), fe
    }
    if (r.common.async)
      return Promise.all(
        n.map(async (l) => {
          const a = { ...r, common: { ...r.common, issues: [] }, parent: null }
          return {
            result: await l._parseAsync({
              data: r.data,
              path: r.path,
              parent: a
            }),
            ctx: a
          }
        })
      ).then(i)
    {
      let l
      const a = []
      for (const s of n) {
        const u = { ...r, common: { ...r.common, issues: [] }, parent: null },
          c = s._parseSync({ data: r.data, path: r.path, parent: u })
        if (c.status === 'valid') return c
        c.status === 'dirty' && !l && (l = { result: c, ctx: u }), u.common.issues.length && a.push(u.common.issues)
      }
      if (l) return r.common.issues.push(...l.ctx.common.issues), l.result
      const o = a.map((s) => new Ft(s))
      return G(r, { code: W.invalid_union, unionErrors: o }), fe
    }
  }
  get options() {
    return this._def.options
  }
}
Ul.create = (e, t) => new Ul({ options: e, typeName: de.ZodUnion, ...pe(t) })
const Nr = (e) =>
  e instanceof Hl
    ? Nr(e.schema)
    : e instanceof ur
      ? Nr(e.innerType())
      : e instanceof Wl
        ? [e.value]
        : e instanceof hn
          ? e.options
          : e instanceof Zl
            ? _e.objectValues(e.enum)
            : e instanceof ql
              ? Nr(e._def.innerType)
              : e instanceof Fl
                ? [void 0]
                : e instanceof Il
                  ? [null]
                  : e instanceof _r
                    ? [void 0, ...Nr(e.unwrap())]
                    : e instanceof pn
                      ? [null, ...Nr(e.unwrap())]
                      : e instanceof id || e instanceof Ql
                        ? Nr(e.unwrap())
                        : e instanceof Kl
                          ? Nr(e._def.innerType)
                          : []
class os extends ge {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t)
    if (r.parsedType !== J.object)
      return (
        G(r, {
          code: W.invalid_type,
          expected: J.object,
          received: r.parsedType
        }),
        fe
      )
    const n = this.discriminator,
      i = r.data[n],
      l = this.optionsMap.get(i)
    return l
      ? r.common.async
        ? l._parseAsync({ data: r.data, path: r.path, parent: r })
        : l._parseSync({ data: r.data, path: r.path, parent: r })
      : (G(r, {
          code: W.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [n]
        }),
        fe)
  }
  get discriminator() {
    return this._def.discriminator
  }
  get options() {
    return this._def.options
  }
  get optionsMap() {
    return this._def.optionsMap
  }
  static create(t, r, n) {
    const i = new Map()
    for (const l of r) {
      const a = Nr(l.shape[t])
      if (!a.length) throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`)
      for (const o of a) {
        if (i.has(o)) throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(o)}`)
        i.set(o, l)
      }
    }
    return new os({
      typeName: de.ZodDiscriminatedUnion,
      discriminator: t,
      options: r,
      optionsMap: i,
      ...pe(n)
    })
  }
}
function Wu(e, t) {
  const r = Gr(e),
    n = Gr(t)
  if (e === t) return { valid: !0, data: e }
  if (r === J.object && n === J.object) {
    const i = _e.objectKeys(t),
      l = _e.objectKeys(e).filter((o) => i.indexOf(o) !== -1),
      a = { ...e, ...t }
    for (const o of l) {
      const s = Wu(e[o], t[o])
      if (!s.valid) return { valid: !1 }
      a[o] = s.data
    }
    return { valid: !0, data: a }
  } else if (r === J.array && n === J.array) {
    if (e.length !== t.length) return { valid: !1 }
    const i = []
    for (let l = 0; l < e.length; l++) {
      const a = e[l],
        o = t[l],
        s = Wu(a, o)
      if (!s.valid) return { valid: !1 }
      i.push(s.data)
    }
    return { valid: !0, data: i }
  } else return r === J.date && n === J.date && +e == +t ? { valid: !0, data: e } : { valid: !1 }
}
class Bl extends ge {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t),
      i = (l, a) => {
        if ($u(l) || $u(a)) return fe
        const o = Wu(l.value, a.value)
        return o.valid
          ? ((Hu(l) || Hu(a)) && r.dirty(), { status: r.value, value: o.data })
          : (G(n, { code: W.invalid_intersection_types }), fe)
      }
    return n.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: n.data, path: n.path, parent: n }),
          this._def.right._parseAsync({
            data: n.data,
            path: n.path,
            parent: n
          })
        ]).then(([l, a]) => i(l, a))
      : i(
          this._def.left._parseSync({ data: n.data, path: n.path, parent: n }),
          this._def.right._parseSync({ data: n.data, path: n.path, parent: n })
        )
  }
}
Bl.create = (e, t, r) => new Bl({ left: e, right: t, typeName: de.ZodIntersection, ...pe(r) })
class Sr extends ge {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t)
    if (n.parsedType !== J.array)
      return (
        G(n, {
          code: W.invalid_type,
          expected: J.array,
          received: n.parsedType
        }),
        fe
      )
    if (n.data.length < this._def.items.length)
      return (
        G(n, {
          code: W.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: 'array'
        }),
        fe
      )
    !this._def.rest &&
      n.data.length > this._def.items.length &&
      (G(n, {
        code: W.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: 'array'
      }),
      r.dirty())
    const l = [...n.data]
      .map((a, o) => {
        const s = this._def.items[o] || this._def.rest
        return s ? s._parse(new kr(n, a, n.path, o)) : null
      })
      .filter((a) => !!a)
    return n.common.async ? Promise.all(l).then((a) => gt.mergeArray(r, a)) : gt.mergeArray(r, l)
  }
  get items() {
    return this._def.items
  }
  rest(t) {
    return new Sr({ ...this._def, rest: t })
  }
}
Sr.create = (e, t) => {
  if (!Array.isArray(e)) throw new Error('You must pass an array of schemas to z.tuple([ ... ])')
  return new Sr({ items: e, typeName: de.ZodTuple, rest: null, ...pe(t) })
}
class $l extends ge {
  get keySchema() {
    return this._def.keyType
  }
  get valueSchema() {
    return this._def.valueType
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t)
    if (n.parsedType !== J.object)
      return (
        G(n, {
          code: W.invalid_type,
          expected: J.object,
          received: n.parsedType
        }),
        fe
      )
    const i = [],
      l = this._def.keyType,
      a = this._def.valueType
    for (const o in n.data)
      i.push({
        key: l._parse(new kr(n, o, n.path, o)),
        value: a._parse(new kr(n, n.data[o], n.path, o)),
        alwaysSet: o in n.data
      })
    return n.common.async ? gt.mergeObjectAsync(r, i) : gt.mergeObjectSync(r, i)
  }
  get element() {
    return this._def.valueType
  }
  static create(t, r, n) {
    return r instanceof ge
      ? new $l({ keyType: t, valueType: r, typeName: de.ZodRecord, ...pe(n) })
      : new $l({
          keyType: ir.create(),
          valueType: t,
          typeName: de.ZodRecord,
          ...pe(r)
        })
  }
}
class Oo extends ge {
  get keySchema() {
    return this._def.keyType
  }
  get valueSchema() {
    return this._def.valueType
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t)
    if (n.parsedType !== J.map) return G(n, { code: W.invalid_type, expected: J.map, received: n.parsedType }), fe
    const i = this._def.keyType,
      l = this._def.valueType,
      a = [...n.data.entries()].map(([o, s], u) => ({
        key: i._parse(new kr(n, o, n.path, [u, 'key'])),
        value: l._parse(new kr(n, s, n.path, [u, 'value']))
      }))
    if (n.common.async) {
      const o = new Map()
      return Promise.resolve().then(async () => {
        for (const s of a) {
          const u = await s.key,
            c = await s.value
          if (u.status === 'aborted' || c.status === 'aborted') return fe
          ;(u.status === 'dirty' || c.status === 'dirty') && r.dirty(), o.set(u.value, c.value)
        }
        return { status: r.value, value: o }
      })
    } else {
      const o = new Map()
      for (const s of a) {
        const u = s.key,
          c = s.value
        if (u.status === 'aborted' || c.status === 'aborted') return fe
        ;(u.status === 'dirty' || c.status === 'dirty') && r.dirty(), o.set(u.value, c.value)
      }
      return { status: r.value, value: o }
    }
  }
}
Oo.create = (e, t, r) => new Oo({ valueType: t, keyType: e, typeName: de.ZodMap, ...pe(r) })
class Fn extends ge {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t)
    if (n.parsedType !== J.set) return G(n, { code: W.invalid_type, expected: J.set, received: n.parsedType }), fe
    const i = this._def
    i.minSize !== null &&
      n.data.size < i.minSize.value &&
      (G(n, {
        code: W.too_small,
        minimum: i.minSize.value,
        type: 'set',
        inclusive: !0,
        exact: !1,
        message: i.minSize.message
      }),
      r.dirty()),
      i.maxSize !== null &&
        n.data.size > i.maxSize.value &&
        (G(n, {
          code: W.too_big,
          maximum: i.maxSize.value,
          type: 'set',
          inclusive: !0,
          exact: !1,
          message: i.maxSize.message
        }),
        r.dirty())
    const l = this._def.valueType
    function a(s) {
      const u = new Set()
      for (const c of s) {
        if (c.status === 'aborted') return fe
        c.status === 'dirty' && r.dirty(), u.add(c.value)
      }
      return { status: r.value, value: u }
    }
    const o = [...n.data.values()].map((s, u) => l._parse(new kr(n, s, n.path, u)))
    return n.common.async ? Promise.all(o).then((s) => a(s)) : a(o)
  }
  min(t, r) {
    return new Fn({
      ...this._def,
      minSize: { value: t, message: oe.toString(r) }
    })
  }
  max(t, r) {
    return new Fn({
      ...this._def,
      maxSize: { value: t, message: oe.toString(r) }
    })
  }
  size(t, r) {
    return this.min(t, r).max(t, r)
  }
  nonempty(t) {
    return this.min(1, t)
  }
}
Fn.create = (e, t) =>
  new Fn({
    valueType: e,
    minSize: null,
    maxSize: null,
    typeName: de.ZodSet,
    ...pe(t)
  })
class yi extends ge {
  constructor() {
    super(...arguments), (this.validate = this.implement)
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t)
    if (r.parsedType !== J.function)
      return (
        G(r, {
          code: W.invalid_type,
          expected: J.function,
          received: r.parsedType
        }),
        fe
      )
    function n(o, s) {
      return Mo({
        data: o,
        path: r.path,
        errorMaps: [r.common.contextualErrorMap, r.schemaErrorMap, jo(), Ti].filter((u) => !!u),
        issueData: { code: W.invalid_arguments, argumentsError: s }
      })
    }
    function i(o, s) {
      return Mo({
        data: o,
        path: r.path,
        errorMaps: [r.common.contextualErrorMap, r.schemaErrorMap, jo(), Ti].filter((u) => !!u),
        issueData: { code: W.invalid_return_type, returnTypeError: s }
      })
    }
    const l = { errorMap: r.common.contextualErrorMap },
      a = r.data
    if (this._def.returns instanceof ji) {
      const o = this
      return kt(async function (...s) {
        const u = new Ft([]),
          c = await o._def.args.parseAsync(s, l).catch((v) => {
            throw (u.addIssue(n(s, v)), u)
          }),
          d = await Reflect.apply(a, this, c)
        return await o._def.returns._def.type.parseAsync(d, l).catch((v) => {
          throw (u.addIssue(i(d, v)), u)
        })
      })
    } else {
      const o = this
      return kt(function (...s) {
        const u = o._def.args.safeParse(s, l)
        if (!u.success) throw new Ft([n(s, u.error)])
        const c = Reflect.apply(a, this, u.data),
          d = o._def.returns.safeParse(c, l)
        if (!d.success) throw new Ft([i(c, d.error)])
        return d.data
      })
    }
  }
  parameters() {
    return this._def.args
  }
  returnType() {
    return this._def.returns
  }
  args(...t) {
    return new yi({ ...this._def, args: Sr.create(t).rest(Pn.create()) })
  }
  returns(t) {
    return new yi({ ...this._def, returns: t })
  }
  implement(t) {
    return this.parse(t)
  }
  strictImplement(t) {
    return this.parse(t)
  }
  static create(t, r, n) {
    return new yi({
      args: t || Sr.create([]).rest(Pn.create()),
      returns: r || Pn.create(),
      typeName: de.ZodFunction,
      ...pe(n)
    })
  }
}
class Hl extends ge {
  get schema() {
    return this._def.getter()
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t)
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r })
  }
}
Hl.create = (e, t) => new Hl({ getter: e, typeName: de.ZodLazy, ...pe(t) })
class Wl extends ge {
  _parse(t) {
    if (t.data !== this._def.value) {
      const r = this._getOrReturnCtx(t)
      return (
        G(r, {
          received: r.data,
          code: W.invalid_literal,
          expected: this._def.value
        }),
        fe
      )
    }
    return { status: 'valid', value: t.data }
  }
  get value() {
    return this._def.value
  }
}
Wl.create = (e, t) => new Wl({ value: e, typeName: de.ZodLiteral, ...pe(t) })
function Sh(e, t) {
  return new hn({ values: e, typeName: de.ZodEnum, ...pe(t) })
}
class hn extends ge {
  constructor() {
    super(...arguments), ll.set(this, void 0)
  }
  _parse(t) {
    if (typeof t.data != 'string') {
      const r = this._getOrReturnCtx(t),
        n = this._def.values
      return (
        G(r, {
          expected: _e.joinValues(n),
          received: r.parsedType,
          code: W.invalid_type
        }),
        fe
      )
    }
    if ((Po(this, ll) || xh(this, ll, new Set(this._def.values)), !Po(this, ll).has(t.data))) {
      const r = this._getOrReturnCtx(t),
        n = this._def.values
      return G(r, { received: r.data, code: W.invalid_enum_value, options: n }), fe
    }
    return kt(t.data)
  }
  get options() {
    return this._def.values
  }
  get enum() {
    const t = {}
    for (const r of this._def.values) t[r] = r
    return t
  }
  get Values() {
    const t = {}
    for (const r of this._def.values) t[r] = r
    return t
  }
  get Enum() {
    const t = {}
    for (const r of this._def.values) t[r] = r
    return t
  }
  extract(t, r = this._def) {
    return hn.create(t, { ...this._def, ...r })
  }
  exclude(t, r = this._def) {
    return hn.create(
      this.options.filter((n) => !t.includes(n)),
      { ...this._def, ...r }
    )
  }
}
ll = new WeakMap()
hn.create = Sh
class Zl extends ge {
  constructor() {
    super(...arguments), al.set(this, void 0)
  }
  _parse(t) {
    const r = _e.getValidEnumValues(this._def.values),
      n = this._getOrReturnCtx(t)
    if (n.parsedType !== J.string && n.parsedType !== J.number) {
      const i = _e.objectValues(r)
      return (
        G(n, {
          expected: _e.joinValues(i),
          received: n.parsedType,
          code: W.invalid_type
        }),
        fe
      )
    }
    if ((Po(this, al) || xh(this, al, new Set(_e.getValidEnumValues(this._def.values))), !Po(this, al).has(t.data))) {
      const i = _e.objectValues(r)
      return G(n, { received: n.data, code: W.invalid_enum_value, options: i }), fe
    }
    return kt(t.data)
  }
  get enum() {
    return this._def.values
  }
}
al = new WeakMap()
Zl.create = (e, t) => new Zl({ values: e, typeName: de.ZodNativeEnum, ...pe(t) })
class ji extends ge {
  unwrap() {
    return this._def.type
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t)
    if (r.parsedType !== J.promise && r.common.async === !1)
      return (
        G(r, {
          code: W.invalid_type,
          expected: J.promise,
          received: r.parsedType
        }),
        fe
      )
    const n = r.parsedType === J.promise ? r.data : Promise.resolve(r.data)
    return kt(
      n.then((i) =>
        this._def.type.parseAsync(i, {
          path: r.path,
          errorMap: r.common.contextualErrorMap
        })
      )
    )
  }
}
ji.create = (e, t) => new ji({ type: e, typeName: de.ZodPromise, ...pe(t) })
class ur extends ge {
  innerType() {
    return this._def.schema
  }
  sourceType() {
    return this._def.schema._def.typeName === de.ZodEffects ? this._def.schema.sourceType() : this._def.schema
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t),
      i = this._def.effect || null,
      l = {
        addIssue: (a) => {
          G(n, a), a.fatal ? r.abort() : r.dirty()
        },
        get path() {
          return n.path
        }
      }
    if (((l.addIssue = l.addIssue.bind(l)), i.type === 'preprocess')) {
      const a = i.transform(n.data, l)
      if (n.common.async)
        return Promise.resolve(a).then(async (o) => {
          if (r.value === 'aborted') return fe
          const s = await this._def.schema._parseAsync({
            data: o,
            path: n.path,
            parent: n
          })
          return s.status === 'aborted' ? fe : s.status === 'dirty' || r.value === 'dirty' ? di(s.value) : s
        })
      {
        if (r.value === 'aborted') return fe
        const o = this._def.schema._parseSync({
          data: a,
          path: n.path,
          parent: n
        })
        return o.status === 'aborted' ? fe : o.status === 'dirty' || r.value === 'dirty' ? di(o.value) : o
      }
    }
    if (i.type === 'refinement') {
      const a = (o) => {
        const s = i.refinement(o, l)
        if (n.common.async) return Promise.resolve(s)
        if (s instanceof Promise)
          throw new Error('Async refinement encountered during synchronous parse operation. Use .parseAsync instead.')
        return o
      }
      if (n.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        })
        return o.status === 'aborted' ? fe : (o.status === 'dirty' && r.dirty(), a(o.value), { status: r.value, value: o.value })
      } else
        return this._def.schema
          ._parseAsync({ data: n.data, path: n.path, parent: n })
          .then((o) =>
            o.status === 'aborted' ? fe : (o.status === 'dirty' && r.dirty(), a(o.value).then(() => ({ status: r.value, value: o.value })))
          )
    }
    if (i.type === 'transform')
      if (n.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        })
        if (!Dl(a)) return a
        const o = i.transform(a.value, l)
        if (o instanceof Promise)
          throw new Error('Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.')
        return { status: r.value, value: o }
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((a) =>
          Dl(a)
            ? Promise.resolve(i.transform(a.value, l)).then((o) => ({
                status: r.value,
                value: o
              }))
            : a
        )
    _e.assertNever(i)
  }
}
ur.create = (e, t, r) => new ur({ schema: e, typeName: de.ZodEffects, effect: t, ...pe(r) })
ur.createWithPreprocess = (e, t, r) =>
  new ur({
    schema: t,
    effect: { type: 'preprocess', transform: e },
    typeName: de.ZodEffects,
    ...pe(r)
  })
class _r extends ge {
  _parse(t) {
    return this._getType(t) === J.undefined ? kt(void 0) : this._def.innerType._parse(t)
  }
  unwrap() {
    return this._def.innerType
  }
}
_r.create = (e, t) => new _r({ innerType: e, typeName: de.ZodOptional, ...pe(t) })
class pn extends ge {
  _parse(t) {
    return this._getType(t) === J.null ? kt(null) : this._def.innerType._parse(t)
  }
  unwrap() {
    return this._def.innerType
  }
}
pn.create = (e, t) => new pn({ innerType: e, typeName: de.ZodNullable, ...pe(t) })
class ql extends ge {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t)
    let n = r.data
    return r.parsedType === J.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({ data: n, path: r.path, parent: r })
  }
  removeDefault() {
    return this._def.innerType
  }
}
ql.create = (e, t) =>
  new ql({
    innerType: e,
    typeName: de.ZodDefault,
    defaultValue: typeof t.default == 'function' ? t.default : () => t.default,
    ...pe(t)
  })
class Kl extends ge {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t),
      n = { ...r, common: { ...r.common, issues: [] } },
      i = this._def.innerType._parse({
        data: n.data,
        path: n.path,
        parent: { ...n }
      })
    return Al(i)
      ? i.then((l) => ({
          status: 'valid',
          value:
            l.status === 'valid'
              ? l.value
              : this._def.catchValue({
                  get error() {
                    return new Ft(n.common.issues)
                  },
                  input: n.data
                })
        }))
      : {
          status: 'valid',
          value:
            i.status === 'valid'
              ? i.value
              : this._def.catchValue({
                  get error() {
                    return new Ft(n.common.issues)
                  },
                  input: n.data
                })
        }
  }
  removeCatch() {
    return this._def.innerType
  }
}
Kl.create = (e, t) =>
  new Kl({
    innerType: e,
    typeName: de.ZodCatch,
    catchValue: typeof t.catch == 'function' ? t.catch : () => t.catch,
    ...pe(t)
  })
class Lo extends ge {
  _parse(t) {
    if (this._getType(t) !== J.nan) {
      const n = this._getOrReturnCtx(t)
      return G(n, { code: W.invalid_type, expected: J.nan, received: n.parsedType }), fe
    }
    return { status: 'valid', value: t.data }
  }
}
Lo.create = (e) => new Lo({ typeName: de.ZodNaN, ...pe(e) })
const G5 = Symbol('zod_brand')
class id extends ge {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t),
      n = r.data
    return this._def.type._parse({ data: n, path: r.path, parent: r })
  }
  unwrap() {
    return this._def.type
  }
}
class la extends ge {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t)
    if (n.common.async)
      return (async () => {
        const l = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        })
        return l.status === 'aborted'
          ? fe
          : l.status === 'dirty'
            ? (r.dirty(), di(l.value))
            : this._def.out._parseAsync({
                data: l.value,
                path: n.path,
                parent: n
              })
      })()
    {
      const i = this._def.in._parseSync({
        data: n.data,
        path: n.path,
        parent: n
      })
      return i.status === 'aborted'
        ? fe
        : i.status === 'dirty'
          ? (r.dirty(), { status: 'dirty', value: i.value })
          : this._def.out._parseSync({
              data: i.value,
              path: n.path,
              parent: n
            })
    }
  }
  static create(t, r) {
    return new la({ in: t, out: r, typeName: de.ZodPipeline })
  }
}
class Ql extends ge {
  _parse(t) {
    const r = this._def.innerType._parse(t),
      n = (i) => (Dl(i) && (i.value = Object.freeze(i.value)), i)
    return Al(r) ? r.then((i) => n(i)) : n(r)
  }
  unwrap() {
    return this._def.innerType
  }
}
Ql.create = (e, t) => new Ql({ innerType: e, typeName: de.ZodReadonly, ...pe(t) })
function bh(e, t = {}, r) {
  return e
    ? Ni.create().superRefine((n, i) => {
        var l, a
        if (!e(n)) {
          const o = typeof t == 'function' ? t(n) : typeof t == 'string' ? { message: t } : t,
            s = (a = (l = o.fatal) !== null && l !== void 0 ? l : r) !== null && a !== void 0 ? a : !0,
            u = typeof o == 'string' ? { message: o } : o
          i.addIssue({ code: 'custom', ...u, fatal: s })
        }
      })
    : Ni.create()
}
const Y5 = { object: Ie.lazycreate }
var de
;(function (e) {
  ;(e.ZodString = 'ZodString'),
    (e.ZodNumber = 'ZodNumber'),
    (e.ZodNaN = 'ZodNaN'),
    (e.ZodBigInt = 'ZodBigInt'),
    (e.ZodBoolean = 'ZodBoolean'),
    (e.ZodDate = 'ZodDate'),
    (e.ZodSymbol = 'ZodSymbol'),
    (e.ZodUndefined = 'ZodUndefined'),
    (e.ZodNull = 'ZodNull'),
    (e.ZodAny = 'ZodAny'),
    (e.ZodUnknown = 'ZodUnknown'),
    (e.ZodNever = 'ZodNever'),
    (e.ZodVoid = 'ZodVoid'),
    (e.ZodArray = 'ZodArray'),
    (e.ZodObject = 'ZodObject'),
    (e.ZodUnion = 'ZodUnion'),
    (e.ZodDiscriminatedUnion = 'ZodDiscriminatedUnion'),
    (e.ZodIntersection = 'ZodIntersection'),
    (e.ZodTuple = 'ZodTuple'),
    (e.ZodRecord = 'ZodRecord'),
    (e.ZodMap = 'ZodMap'),
    (e.ZodSet = 'ZodSet'),
    (e.ZodFunction = 'ZodFunction'),
    (e.ZodLazy = 'ZodLazy'),
    (e.ZodLiteral = 'ZodLiteral'),
    (e.ZodEnum = 'ZodEnum'),
    (e.ZodEffects = 'ZodEffects'),
    (e.ZodNativeEnum = 'ZodNativeEnum'),
    (e.ZodOptional = 'ZodOptional'),
    (e.ZodNullable = 'ZodNullable'),
    (e.ZodDefault = 'ZodDefault'),
    (e.ZodCatch = 'ZodCatch'),
    (e.ZodPromise = 'ZodPromise'),
    (e.ZodBranded = 'ZodBranded'),
    (e.ZodPipeline = 'ZodPipeline'),
    (e.ZodReadonly = 'ZodReadonly')
})(de || (de = {}))
const X5 = (e, t = { message: `Input not instance of ${e.name}` }) => bh((r) => r instanceof e, t),
  Eh = ir.create,
  Ch = dn.create,
  J5 = Lo.create,
  e6 = fn.create,
  Th = Vl.create,
  t6 = Vn.create,
  r6 = Ro.create,
  n6 = Fl.create,
  i6 = Il.create,
  l6 = Ni.create,
  a6 = Pn.create,
  o6 = Fr.create,
  s6 = zo.create,
  u6 = or.create,
  c6 = Ie.create,
  d6 = Ie.strictCreate,
  f6 = Ul.create,
  h6 = os.create,
  p6 = Bl.create,
  m6 = Sr.create,
  v6 = $l.create,
  g6 = Oo.create,
  y6 = Fn.create,
  x6 = yi.create,
  w6 = Hl.create,
  _6 = Wl.create,
  k6 = hn.create,
  S6 = Zl.create,
  b6 = ji.create,
  of = ur.create,
  E6 = _r.create,
  C6 = pn.create,
  T6 = ur.createWithPreprocess,
  N6 = la.create,
  j6 = () => Eh().optional(),
  M6 = () => Ch().optional(),
  P6 = () => Th().optional(),
  R6 = {
    string: (e) => ir.create({ ...e, coerce: !0 }),
    number: (e) => dn.create({ ...e, coerce: !0 }),
    boolean: (e) => Vl.create({ ...e, coerce: !0 }),
    bigint: (e) => fn.create({ ...e, coerce: !0 }),
    date: (e) => Vn.create({ ...e, coerce: !0 })
  },
  z6 = fe
var za = Object.freeze({
  __proto__: null,
  defaultErrorMap: Ti,
  setErrorMap: z5,
  getErrorMap: jo,
  makeIssue: Mo,
  EMPTY_PATH: O5,
  addIssueToContext: G,
  ParseStatus: gt,
  INVALID: fe,
  DIRTY: di,
  OK: kt,
  isAborted: $u,
  isDirty: Hu,
  isValid: Dl,
  isAsync: Al,
  get util() {
    return _e
  },
  get objectUtil() {
    return Bu
  },
  ZodParsedType: J,
  getParsedType: Gr,
  ZodType: ge,
  datetimeRegex: kh,
  ZodString: ir,
  ZodNumber: dn,
  ZodBigInt: fn,
  ZodBoolean: Vl,
  ZodDate: Vn,
  ZodSymbol: Ro,
  ZodUndefined: Fl,
  ZodNull: Il,
  ZodAny: Ni,
  ZodUnknown: Pn,
  ZodNever: Fr,
  ZodVoid: zo,
  ZodArray: or,
  ZodObject: Ie,
  ZodUnion: Ul,
  ZodDiscriminatedUnion: os,
  ZodIntersection: Bl,
  ZodTuple: Sr,
  ZodRecord: $l,
  ZodMap: Oo,
  ZodSet: Fn,
  ZodFunction: yi,
  ZodLazy: Hl,
  ZodLiteral: Wl,
  ZodEnum: hn,
  ZodNativeEnum: Zl,
  ZodPromise: ji,
  ZodEffects: ur,
  ZodTransformer: ur,
  ZodOptional: _r,
  ZodNullable: pn,
  ZodDefault: ql,
  ZodCatch: Kl,
  ZodNaN: Lo,
  BRAND: G5,
  ZodBranded: id,
  ZodPipeline: la,
  ZodReadonly: Ql,
  custom: bh,
  Schema: ge,
  ZodSchema: ge,
  late: Y5,
  get ZodFirstPartyTypeKind() {
    return de
  },
  coerce: R6,
  any: l6,
  array: u6,
  bigint: e6,
  boolean: Th,
  date: t6,
  discriminatedUnion: h6,
  effect: of,
  enum: k6,
  function: x6,
  instanceof: X5,
  intersection: p6,
  lazy: w6,
  literal: _6,
  map: g6,
  nan: J5,
  nativeEnum: S6,
  never: o6,
  null: i6,
  nullable: C6,
  number: Ch,
  object: c6,
  oboolean: P6,
  onumber: M6,
  optional: E6,
  ostring: j6,
  pipeline: N6,
  preprocess: T6,
  promise: b6,
  record: v6,
  set: y6,
  strictObject: d6,
  string: Eh,
  symbol: r6,
  transformer: of,
  tuple: m6,
  undefined: n6,
  union: f6,
  unknown: a6,
  void: s6,
  NEVER: z6,
  ZodIssueCode: W,
  quotelessJson: R5,
  ZodError: Ft
})
const sf = (e, t, r) => {
    if (e && 'reportValidity' in e) {
      const n = ee(r, t)
      e.setCustomValidity((n && n.message) || ''), e.reportValidity()
    }
  },
  Nh = (e, t) => {
    for (const r in t.fields) {
      const n = t.fields[r]
      n && n.ref && 'reportValidity' in n.ref ? sf(n.ref, r, e) : n.refs && n.refs.forEach((i) => sf(i, r, e))
    }
  },
  O6 = (e, t) => {
    t.shouldUseNativeValidation && Nh(e, t)
    const r = {}
    for (const n in e) {
      const i = ee(t.fields, n),
        l = Object.assign(e[n] || {}, { ref: i && i.ref })
      if (L6(t.names || Object.keys(e), n)) {
        const a = Object.assign({}, ee(r, n))
        Ne(a, 'root', l), Ne(r, n, a)
      } else Ne(r, n, l)
    }
    return r
  },
  L6 = (e, t) => e.some((r) => r.startsWith(t + '.'))
var D6 = function (e, t) {
    for (var r = {}; e.length; ) {
      var n = e[0],
        i = n.code,
        l = n.message,
        a = n.path.join('.')
      if (!r[a])
        if ('unionErrors' in n) {
          var o = n.unionErrors[0].errors[0]
          r[a] = { message: o.message, type: o.code }
        } else r[a] = { message: l, type: i }
      if (
        ('unionErrors' in n &&
          n.unionErrors.forEach(function (c) {
            return c.errors.forEach(function (d) {
              return e.push(d)
            })
          }),
        t)
      ) {
        var s = r[a].types,
          u = s && s[n.code]
        r[a] = dh(a, t, r, i, u ? [].concat(u, n.message) : n.message)
      }
      e.shift()
    }
    return r
  },
  A6 = function (e, t, r) {
    return (
      r === void 0 && (r = {}),
      function (n, i, l) {
        try {
          return Promise.resolve(
            (function (a, o) {
              try {
                var s = Promise.resolve(e[r.mode === 'sync' ? 'parse' : 'parseAsync'](n, t)).then(function (u) {
                  return l.shouldUseNativeValidation && Nh({}, l), { errors: {}, values: r.raw ? n : u }
                })
              } catch (u) {
                return o(u)
              }
              return s && s.then ? s.then(void 0, o) : s
            })(0, function (a) {
              if (
                (function (o) {
                  return Array.isArray(o == null ? void 0 : o.errors)
                })(a)
              )
                return {
                  values: {},
                  errors: O6(D6(a.errors, !l.shouldUseNativeValidation && l.criteriaMode === 'all'), l)
                }
              throw a
            })
          )
        } catch (a) {
          return Promise.reject(a)
        }
      }
    )
  }
class aa {
  constructor(t = 0, r = 'Network Error') {
    ;(this.status = t), (this.text = r)
  }
}
const V6 = () => {
    if (!(typeof localStorage > 'u'))
      return {
        get: (e) => Promise.resolve(localStorage.getItem(e)),
        set: (e, t) => Promise.resolve(localStorage.setItem(e, t)),
        remove: (e) => Promise.resolve(localStorage.removeItem(e))
      }
  },
  ct = {
    origin: 'https://api.emailjs.com',
    blockHeadless: !1,
    storageProvider: V6()
  },
  ld = (e) => (e ? (typeof e == 'string' ? { publicKey: e } : e.toString() === '[object Object]' ? e : {}) : {}),
  F6 = (e, t = 'https://api.emailjs.com') => {
    if (!e) return
    const r = ld(e)
    ;(ct.publicKey = r.publicKey),
      (ct.blockHeadless = r.blockHeadless),
      (ct.storageProvider = r.storageProvider),
      (ct.blockList = r.blockList),
      (ct.limitRate = r.limitRate),
      (ct.origin = r.origin || t)
  },
  jh = async (e, t, r = {}) => {
    const n = await fetch(ct.origin + e, {
        method: 'POST',
        headers: r,
        body: t
      }),
      i = await n.text(),
      l = new aa(n.status, i)
    if (n.ok) return l
    throw l
  },
  Mh = (e, t, r) => {
    if (!e || typeof e != 'string') throw 'The public key is required. Visit https://dashboard.emailjs.com/admin/account'
    if (!t || typeof t != 'string') throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin'
    if (!r || typeof r != 'string') throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates'
  },
  I6 = (e) => {
    if (e && e.toString() !== '[object Object]')
      throw 'The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/'
  },
  Ph = (e) => e.webdriver || !e.languages || e.languages.length === 0,
  Rh = () => new aa(451, 'Unavailable For Headless Browser'),
  U6 = (e, t) => {
    if (!Array.isArray(e)) throw 'The BlockList list has to be an array'
    if (typeof t != 'string') throw 'The BlockList watchVariable has to be a string'
  },
  B6 = (e) => {
    var t
    return !((t = e.list) != null && t.length) || !e.watchVariable
  },
  $6 = (e, t) => (e instanceof FormData ? e.get(t) : e[t]),
  zh = (e, t) => {
    if (B6(e)) return !1
    U6(e.list, e.watchVariable)
    const r = $6(t, e.watchVariable)
    return typeof r != 'string' ? !1 : e.list.includes(r)
  },
  Oh = () => new aa(403, 'Forbidden'),
  H6 = (e, t) => {
    if (typeof e != 'number' || e < 0) throw 'The LimitRate throttle has to be a positive number'
    if (t && typeof t != 'string') throw 'The LimitRate ID has to be a non-empty string'
  },
  W6 = async (e, t, r) => {
    const n = Number((await r.get(e)) || 0)
    return t - Date.now() + n
  },
  Lh = async (e, t, r) => {
    if (!t.throttle || !r) return !1
    H6(t.throttle, t.id)
    const n = t.id || e
    return (await W6(n, t.throttle, r)) > 0 ? !0 : (await r.set(n, Date.now().toString()), !1)
  },
  Dh = () => new aa(429, 'Too Many Requests'),
  Z6 = async (e, t, r, n) => {
    const i = ld(n),
      l = i.publicKey || ct.publicKey,
      a = i.blockHeadless || ct.blockHeadless,
      o = i.storageProvider || ct.storageProvider,
      s = { ...ct.blockList, ...i.blockList },
      u = { ...ct.limitRate, ...i.limitRate }
    return a && Ph(navigator)
      ? Promise.reject(Rh())
      : (Mh(l, e, t),
        I6(r),
        r && zh(s, r)
          ? Promise.reject(Oh())
          : (await Lh(location.pathname, u, o))
            ? Promise.reject(Dh())
            : jh(
                '/api/v1.0/email/send',
                JSON.stringify({
                  lib_version: '4.4.1',
                  user_id: l,
                  service_id: e,
                  template_id: t,
                  template_params: r
                }),
                { 'Content-type': 'application/json' }
              ))
  },
  q6 = (e) => {
    if (!e || e.nodeName !== 'FORM') throw 'The 3rd parameter is expected to be the HTML form element or the style selector of the form'
  },
  K6 = (e) => (typeof e == 'string' ? document.querySelector(e) : e),
  Q6 = async (e, t, r, n) => {
    const i = ld(n),
      l = i.publicKey || ct.publicKey,
      a = i.blockHeadless || ct.blockHeadless,
      o = ct.storageProvider || i.storageProvider,
      s = { ...ct.blockList, ...i.blockList },
      u = { ...ct.limitRate, ...i.limitRate }
    if (a && Ph(navigator)) return Promise.reject(Rh())
    const c = K6(r)
    Mh(l, e, t), q6(c)
    const d = new FormData(c)
    return zh(s, d)
      ? Promise.reject(Oh())
      : (await Lh(location.pathname, u, o))
        ? Promise.reject(Dh())
        : (d.append('lib_version', '4.4.1'),
          d.append('service_id', e),
          d.append('template_id', t),
          d.append('user_id', l),
          jh('/api/v1.0/email/send-form', d))
  },
  G6 = { init: F6, send: Z6, sendForm: Q6, EmailJSResponseStatus: aa },
  Y6 = ({ onValidationError: e, onValidationSuccess: t }) => {
    const [r, n] = D.useState(null),
      [i, l] = D.useState(null),
      [a, o] = D.useState(null),
      [s, u] = D.useState(''),
      c = () => {
        const v = Math.floor(Math.random() * 10) + 1,
          g = Math.floor(Math.random() * 10) + 1
        n(v), l(g), o(v + g)
      }
    D.useEffect(() => {
      c()
    }, [])
    const d = (v) => {
        u(v.target.value)
      },
      h = () => {
        parseInt(s) === a ? t() : e()
      }
    return (
      D.useEffect(() => {
        h()
      }, [s]),
      x.jsx('div', {
        children: x.jsxs('div', {
          className: 'flex items-center space-x-4 flex-wrap',
          children: [
            x.jsxs('p', {
              className: 'm-0 text-lg flex-shrink-0',
              children: ['Was ergibt ', r, ' + ', i, '?']
            }),
            x.jsx('input', {
              type: 'number',
              value: s,
              onChange: d,
              className: 'bg-textLight text-textDark p-3 rounded-3xl w-16 text-center text-lg remove-arrow'
            })
          ]
        })
      })
    )
  },
  X6 = ({ onSubmitSuccess: e, onSubmitError: t }) => {
    const [r, n] = D.useState(!1),
      [i, l] = D.useState(!1),
      [a, o] = D.useState(''),
      s = za.object({
        name: za
          .string()
          .min(1, 'Bitte gib einen Namen an')
          .max(70, 'Name muss kürzer als 70 Zeichen sein')
          .regex(/^[\p{L}\s-]+$/u, 'Name darf keine Zahlen oder Sonderzeichen enthalten'),
        email: za
          .string()
          .min(1, 'Bitte gib eine Email-Adresse an')
          .max(320, 'Email-Adresse muss kürzer als 320 Zeichen sein')
          .email('Ungültige Email-Adresse'),
        message: za.string().min(1, 'Bitte gib eine Nachricht an').max(1e3, 'Nachricht muss kürzer als 1000 Zeichen sein')
      }),
      {
        register: u,
        handleSubmit: c,
        formState: { errors: d },
        trigger: h,
        reset: v
      } = P5({ resolver: A6(s) })
    D.useEffect(() => {
      l(!1), o('')
    }, [])
    const g = () => {
        l(!0), o('')
      },
      k = () => {
        l(!1)
      },
      R = (p) => {
        if (!i) {
          o('Falsche Antwort. Versuche es erneut.')
          return
        }
        n(!0),
          G6.send('service_mz4nzrg', 'template_5cr4d8y', { name: p.name, email: p.email, message: p.message }, 'ko3cXEca8dSqNcscN').then(
            () => {
              n(!1), e(), v()
            },
            () => {
              n(!1), t()
            }
          )
      }
    return x.jsxs('form', {
      onSubmit: c(R),
      className: 'space-y-4 ',
      children: [
        x.jsxs('div', {
          className: 'flex flex-col',
          children: [
            x.jsx('label', {
              htmlFor: 'name',
              className: 'text-md mb-2',
              children: 'Name'
            }),
            x.jsx('input', {
              type: 'text',
              ...u('name'),
              onBlur: () => h('name'),
              className: Kt(
                'bg-neutralLight text-textDark p-3 rounded-3xl pl-4 focus:border-textDark focus:border-2 focus:outline-none focus:ring-0',
                d.name && 'border-2 border-accent'
              )
            }),
            d.name &&
              x.jsx('span', {
                className: 'text-accent',
                children: d.name.message
              })
          ]
        }),
        x.jsxs('div', {
          className: 'flex flex-col',
          children: [
            x.jsx('label', {
              htmlFor: 'email',
              className: 'text-md mb-2',
              children: 'E-Mail'
            }),
            x.jsx('input', {
              type: 'email',
              ...u('email'),
              onBlur: () => h('email'),
              className: Kt(
                'bg-neutralLight text-textDark p-3 rounded-3xl pl-4 focus:border-textDark focus:border-2 focus:outline-none focus:ring-0',
                d.email && 'border-2 border-accent'
              )
            }),
            d.email &&
              x.jsx('span', {
                className: 'text-accent',
                children: d.email.message
              })
          ]
        }),
        x.jsxs('div', {
          className: 'flex flex-col',
          children: [
            x.jsx('label', {
              htmlFor: 'message',
              className: 'text-md mb-2',
              children: 'Nachricht'
            }),
            x.jsx('textarea', {
              ...u('message'),
              onBlur: () => h('message'),
              rows: '4',
              className: Kt(
                'bg-neutralLight text-textDark p-6 rounded-3xl pl-4 focus:outline-none focus:ring-0 focus:border-textDark focus:border-2',
                d.message && 'border-2 border-accent'
              )
            }),
            d.message &&
              x.jsx('span', {
                className: 'text-accent',
                children: d.message.message
              })
          ]
        }),
        x.jsxs('div', {
          className: 'flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mt-4 justify-between items-center',
          children: [
            x.jsx(Y6, { onValidationError: k, onValidationSuccess: g }),
            x.jsx(B2, {
              backgroundColor: 'spicyMustard',
              disabled: r,
              children: r ? 'Sende...' : 'Nachricht senden'
            })
          ]
        }),
        a &&
          x.jsx('p', {
            className:
              'bg-accent border-textLight border-2 text-textLight text-lg p-3 rounded-3xl my-4 w-full max-w-md mx-auto text-center',
            children: a
          })
      ]
    })
  },
  J6 = ({ children: e, href: t }) =>
    x.jsx('li', {
      className: 'flex items-center pr-8 border-r border-textLight last:border-0',
      children: x.jsx('a', {
        className: 'hover:text-amber-500',
        href: t,
        children: e
      })
    }),
  At = ({ children: e, className: t = '', threshold: r = 0.3 }) => {
    const [n, i] = D.useState(!1),
      l = D.useRef()
    return (
      D.useEffect(() => {
        const a = new IntersectionObserver(
          ([o]) => {
            o.isIntersecting && (i(!0), a.unobserve(o.target))
          },
          { threshold: r }
        )
        return (
          l.current && a.observe(l.current),
          () => {
            l.current && a.unobserve(l.current)
          }
        )
      }, []),
      x.jsx('div', {
        ref: l,
        className: Kt('transition-opacity duration-1000 ease-in-out', n ? 'opacity-100' : 'opacity-0', t),
        children: e
      })
    )
  },
  ev = () =>
    x.jsx(Hn, {
      bgColor: 'bg-primary',
      children: x.jsx('section', {
        id: 'about',
        className: 'text-textLight py-20 min-h-screen flex items-center justify-center',
        children: x.jsxs('div', {
          className: 'container flex flex-col lg:flex-row items-center px-8 md:px-20 gap-8 md:gap-16',
          children: [
            x.jsxs('div', {
              className: 'flex-1',
              children: [
                x.jsx(At, {
                  children: x.jsx('h1', {
                    className: 'text-center md:text-left text-3xl sm:text-4xl md:text-5xl  mb-6',
                    children: 'Über mich'
                  })
                }),
                x.jsx(At, {
                  children: x.jsx('p', {
                    className: ' text-lg text-center md:text-justify mb-6',
                    children:
                      'Ciao, ich bin Luca, 32 Jahre alt, und spiele Gitarre seit 22 Jahren. Ursprünglich aus Berlin, wurde ich schon früh von meinem Vater, der selbst Gitarre spielt, inspiriert. Als Kind habe ich klassischen Gitarrenunterricht genommen, später verschiedene Stile wie Jazz und Flamenco ausprobiert und vieles auch autodidaktisch erlernt.'
                  })
                }),
                x.jsx(At, {
                  children: x.jsx('p', {
                    className: ' text-lg text-center md:text-justify mb-6',
                    children:
                      'Seit über 12 Jahren unterrichte ich Gitarre – vom Anfänger bis zum Fortgeschrittenen, auf Akustik-, Konzert- und E-Gitarre. Momentan liegt mein Fokus auf klassischer Gitarre, dem Komponieren eigener Stücke und der Produktion elektronischer Musik. Zudem habe ich auch schon Filmmusik produziert und werde immer wieder für solche Projekte engagiert – ein spannendes Feld, das meine kreative Arbeit immer wieder auf neue Weise herausfordert.'
                  })
                }),
                x.jsx(At, {
                  children: x.jsx('p', {
                    className: ' text-lg text-center md:text-justify sm:text-left',
                    children:
                      'Wenn du einen flexiblen und persönlichen Gitarrenunterricht suchst, der dich in deinem eigenen Tempo weiterbringt, freue ich mich darauf, mit dir zu arbeiten!'
                  })
                })
              ]
            }),
            x.jsx('div', {
              className: 'flex-shrink-0 w-full lg:w-1/3 mt-4 md:mt-0',
              children: x.jsx('img', {
                src: t5,
                alt: 'Luca',
                className: 'w-full h-auto rounded-lg shadow-lg'
              })
            })
          ]
        })
      })
    }),
  Do = 'sharethis',
  tv = {
    display: 'inline-block',
    width: '50px',
    height: '50px',
    position: 'relative',
    overflow: 'hidden',
    verticalAlign: 'middle'
  },
  Ah = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%'
  },
  rv = { ...Ah, borderRadius: '50%', fillRule: 'evenodd' },
  uf = { transition: 'fill 170ms ease-in-out', fill: 'transparent' },
  Vh = function () {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
    return new RegExp('(?:[/.]|^)($SOCIALS)([.]|$|/)'.replace('$SOCIALS', e.join('|').replace(/\./gu, '\\.')), 'u')
  },
  Ga = new Map(),
  cf = new Set()
let Fh = Vh()
function Y(e, t) {
  return Ga.set(e, t), cf.add(e), (Fh = Vh([...cf].sort((r, n) => n.length - r.length))), t
}
function nv(e) {
  var t
  return e ? (e.startsWith('mailto:') ? 'mailto' : ((t = e.match(Fh)) == null ? void 0 : t[1]) || Do) : Do
}
const Oa = D.forwardRef(function (t, r) {
  const {
      as: n = 'a',
      href: i,
      url: l,
      network: a,
      bgColor: o,
      fgColor: s,
      className: u,
      label: c,
      children: d,
      fallback: h,
      defaultSVG: v,
      ...g
    } = t,
    k = a || nv(l),
    R = c || t['aria-label'] || k,
    p = (typeof h == 'string' ? Ga.get(h) : h || v) || Ga.get(Do),
    { color: f, path: m } = k === Do ? p : Ga.get(k) || {}
  return D.createElement(
    n,
    {
      href: i || l,
      className: `social-icon${u ? ` ${u}` : ''}`,
      ...g,
      style: { ...tv, ...g.style },
      'aria-label': R,
      ref: r
    },
    D.createElement(
      'span',
      { className: 'social-container', style: Ah },
      D.createElement(
        'svg',
        {
          role: 'img',
          'aria-label': `${R} social icon`,
          className: 'social-svg',
          viewBox: '0 0 64 64',
          style: rv
        },
        D.createElement(
          'g',
          {
            className: 'social-svg-icon',
            style: { ...uf, fill: s || 'textLight' }
          },
          D.createElement('path', { d: `M0,0H64V64H0Z${m}` })
        ),
        D.createElement('g', { className: 'social-svg-mask', style: { ...uf, fill: o || f } }, D.createElement('path', { d: m }))
      )
    ),
    d
  )
})
Y('auth0', {
  color: '#191919',
  path: 'M0 0v64h64V0Zm34.088 16.287c3.965.307 7.705 1.604 9.787 2.45a2.73 2.73 0 0 1 1.707 2.523v8.164a.79.79 0 0 1-.92.776l-.77-.124c-5.246-.858-9.356-5.162-10.22-10.37l-.004-.003-.29-2.504c-.06-.393.202-.95.71-.912m-3.363.006c.507-.038.777.515.707.913l-.291 2.503c-.865 5.205-4.974 9.51-10.221 10.369v.004l-.77.124a.79.79 0 0 1-.92-.776v-8.164c0-1.107.676-2.104 1.707-2.522 2.086-.845 5.823-2.145 9.788-2.45m-10.82 15.92c.346 0 .762.12 1.019.149 7.168 1.403 10.496 6.133 10.496 15.089 0 .45-.45.758-.826.51-3.297-2.207-10.55-7.967-11.3-15.175-.014-.454.264-.574.61-.574m25.001 0c.347-.001.626.119.612.573-.75 7.208-8.005 12.968-11.301 15.175-.376.248-.826-.06-.826-.51 0-8.956 3.33-13.686 10.498-15.09.257-.028.67-.148 1.017-.149'
})
Y('bandsintown', {
  color: '#1B8793',
  path: 'M0 0v64h64V0zm32.6 24.7h5.6v7.8h-5.6zm-6.8 0h5.6v7.8h-5.6zM44.9 46H19.1V18h5.6v22.4h14.6v-1.1H25.8v-5.6h19V46zm0-13.4h-5.6V18h5.6z'
})
Y('behance', {
  color: '#007CFF',
  path: 'M40.4 30.1q-.9 0-1.5.3c-.4.2-.7.4-.9.7s-.4.6-.5.9-.2.6-.2.9h6c-.1-.9-.4-1.6-.8-2.1-.5-.5-1.2-.7-2.1-.7m-14.9 2.7h-4.4v5.1h4.3c.4 0 .8 0 1.1-.1.4-.1.7-.2 1-.4s.5-.4.7-.7.2-.7.2-1.2c0-1-.3-1.6-.8-2-.5-.5-1.2-.7-2.1-.7m1.5-3.3c.5-.3.7-.9.7-1.7 0-.4-.1-.8-.2-1.1q-.3-.45-.6-.6-.45-.3-.9-.3c-.3-.1-.7-.1-1-.1h-3.8V30h4.1c.6.1 1.2-.1 1.7-.5M0 0v64h64V0zm36.6 23.8h7.5v1.8h-7.5zm-4.7 14.3c-.4.7-.9 1.2-1.5 1.7-.6.4-1.3.8-2.1 1q-1.2.3-2.4.3H17V22.6h8.7c.9 0 1.7.1 2.4.2.7.2 1.3.4 1.9.8.5.4.9.8 1.2 1.4s.4 1.3.4 2.2-.2 1.7-.6 2.3-1 1.1-1.9 1.5c1.1.3 2 .9 2.5 1.7.6.8.8 1.8.8 3 .1.9-.1 1.7-.5 2.4M47 35.3h-9.6c0 1.1.4 2.1.9 2.6s1.3.8 2.4.8c.7 0 1.4-.2 1.9-.6s.9-.8 1-1.2h3.2c-.5 1.6-1.3 2.8-2.4 3.4-1.1.7-2.4 1-3.9 1-1.1 0-2-.2-2.9-.5-.8-.3-1.6-.8-2.2-1.4s-1-1.4-1.4-2.2c-.3-.9-.5-1.8-.5-2.8s.2-1.9.5-2.8.8-1.6 1.4-2.2 1.3-1.1 2.2-1.5c.8-.4 1.8-.5 2.8-.5 1.1 0 2.1.2 3 .7q1.2.6 2.1 1.8c.5.7.9 1.6 1.2 2.5.3.8.3 1.8.3 2.9'
})
Y('bsky.app', {
  color: '#1185fe',
  path: 'M0 0v64h64V0Zm45.498 17.766a2.84 2.84 0 0 1 1.354.312c.578.296.932.915 1.103 1.92.085.513.046 2.326-.086 3.666-.013.125-.038.494-.064.822-.02.322-.054.696-.067.82-.013.125-.039.434-.058.69-.027.25-.06.585-.073.736-.02.158-.046.408-.066.559-.099.92-.118 1.07-.13 1.104-.014.02-.041.244-.067.494-.171 1.662-1.354 3.376-2.938 4.263-1.261.703-2.667 1.045-4.336 1.051-.801.007-.927.041-.447.133.94.17 2.005.518 2.86.945 2.247 1.11 3.041 2.747 2.331 4.778-.118.322-.25.636-.302.695-.053.052-.092.131-.092.164 0 .066-.617 1.025-.8 1.242-.06.072-.219.264-.35.428-.355.434-1.004 1.097-1.346 1.373-.164.131-.31.25-.33.27-.184.203-1.333.946-1.938 1.261-.808.42-1.425.591-2.135.598-.722.006-.953-.033-1.439-.256-1.386-.63-2.418-2.34-3.39-5.586-.421-1.426-.54-1.826-.598-2.082-.066-.276-.131-.218-.256.223-.381 1.38-1.117 3.344-1.623 4.363-.92 1.853-1.927 2.937-3.11 3.357-.499.178-1.45.166-2.029-.025-1.452-.486-2.899-1.623-4.357-3.443-1.426-1.774-2.116-3.292-2.037-4.475.046-.69.118-.933.447-1.426.302-.453.841-.914 1.44-1.236.426-.23 1.28-.584 1.609-.676.111-.026.375-.099.592-.158.216-.066.453-.126.525-.139.867-.17 1.255-.255 1.295-.281.026-.02-.302-.04-.723-.047-.42 0-.947-.026-1.164-.053-.453-.059-1.445-.276-1.642-.36a6 6 0 0 0-.46-.17c-1.241-.441-2.378-1.33-3.087-2.427-.316-.486-.659-1.221-.73-1.576a10 10 0 0 1-.19-1.123c-.027-.217-.054-.466-.067-.558a33 33 0 0 1-.197-1.873c-.026-.29-.053-.632-.066-.756a72 72 0 0 1-.073-.756c-.02-.29-.05-.631-.064-.756-.164-1.938-.172-3.68-.008-4.238.302-1.019.73-1.466 1.623-1.715.29-.08 1.157-.078 1.531.008 1.183.25 3.576 1.655 5.008 2.93.072.065.237.21.361.322.927.828 2.543 2.522 3.358 3.521.23.29.447.553.486.592.033.04.139.17.23.289.093.118.196.25.23.29.098.104 1.065 1.43 1.486 2.042.492.71 1.201 1.847 1.378 2.229.138.282.256.387.256.236 0-.105.836-1.485 1.434-2.365 1.866-2.76 4.257-5.488 6.353-7.262.566-.473.769-.63 1.63-1.22 1.648-1.126 2.937-1.676 4.015-1.688'
})
Y('clubhouse', {
  color: '#1F1F1A',
  path: 'M0 0v64.271h64.203V0zm32.694 15.453c1.277 0 2.24.566 2.804 1.842.824-.538 1.956-.738 2.92-.483 1.305.34 2.1 1.249 2.581 4.03.17.882.423 1.96.735 2.895.396 1.194.85 2.128 1.643 3.518.255.425.566.908.878 1.361l.256-.51c.764-1.562 2.268-3.093 4.45-3.093.937 0 1.956.34 2.522 1.305a3.04 3.04 0 0 1 .51 1.7c0 .737-.311 1.475-.566 2.042-.057.114-.084.17-.084.198-.652 1.36-1.53 3.066-1.53 5.05 0 5.76-2.127 8.71-3.77 10.242-1.674 1.562-4.28 2.893-7.313 2.893-2.152 0-4.393-.623-6.234-1.843-2.52-1.672-4.052-4.255-5.44-6.524-1.136-1.9-1.958-3.43-3.176-6.324-.708-1.617-1.36-3.293-1.897-5.079-.482-1.562-.228-2.696.393-3.433.625-.766 1.505-1.135 2.468-1.192.17 0 .34.001.51.03a6 6 0 0 1-.2-1.475c0-1.846 1.448-3.207 3.403-3.207.255 0 .51.028.736.085-.028-.312-.056-.567-.056-.822 0-2.016 1.644-3.206 3.457-3.206m0 1.704c-.822 0-1.812.424-1.812 1.502 0 .709.197 1.758.395 2.606.34.825.398 1.336.823 3.122.255 1.052.565 1.958.877 2.752.368.967.793 1.79 1.388 2.896.283.538.426.539 1.106.17.538-.284 1.33-.625 1.924-.824-1.02-2.211-1.869-4.057-2.294-5.616-.113-.454-.51-2.272-.623-3.066-.085-.794-.17-1.473-.368-2.21-.226-.908-.538-1.332-1.416-1.332m4.87 1.252c-.445-.004-.919.14-1.216.395-.312.283-.425.509-.34 1.132.142 1.364.368 2.414.623 3.406.595 2.325 1.585 4.142 2.095 5.22.17.368.313.511.596.483.397-.029.623-.058.878-.03.34.029.596.228.596.568 0 .283-.143.397-.653.51-1.048.227-2.38.595-3.684 1.333-1.107.626-2.07 1.392-2.948 2.498-.085.113-.172.17-.313.17-.198 0-.368-.227-.538-.454s-.283-.397-.283-.567c0-.199.085-.37.283-.624.312-.426.68-.737.68-.935 0-.142-.254-.482-.48-.879-.368-.68-.992-2.044-1.417-3.065-.651-1.56-1.105-3.546-1.36-4.766-.312-1.332-.794-1.702-1.53-1.702-1.02 0-1.698.595-1.698 1.503 0 .598.197 1.391.594 2.696.255.85.51 1.7.736 2.296a53 53 0 0 0 1.218 3.066c.368.822.906 1.787 1.16 2.269.142.255.397.68.397.935 0 .454-.338.708-.791.708-.255 0-.482-.113-.737-.51-.311-.457-.992-1.788-1.473-2.78-.369-.823-.992-2.3-1.304-3.32-.51-1.616-.85-2.24-1.727-2.213-.51.029-.936.2-1.247.568-.312.397-.339 1.02-.084 1.843.538 1.73 1.163 3.317 1.835 4.943 1.192 2.807 1.957 4.257 3.062 6.1 1.388 2.268 2.75 4.538 4.93 5.984 1.558 1.02 3.46 1.561 5.3 1.561 2.578 0 4.762-1.137 6.15-2.441 1.419-1.305 3.23-3.859 3.23-8.993 0-2.354 1.02-4.4 1.644-5.732.17-.34.537-1.049.537-1.56 0-.226-.055-.537-.197-.764-.255-.397-.652-.54-1.133-.54-1.504 0-2.468 1.136-3.006 2.128a7 7 0 0 0-.537 1.36c-.312 1.049-.624 1.475-1.53 2.212-.482.426-1.076.964-1.415 1.39-.567.767-.738 1.42-.88 2.44-.028.256-.51.369-1.104.369-.34 0-.453-.113-.453-.652 0-.567.198-1.418.623-2.183.595-1.05 1.246-1.617 1.898-2.156s.85-.765.963-1.105c-.595-.797-1.16-1.618-1.614-2.412-.822-1.446-1.36-2.526-1.784-3.83a25 25 0 0 1-.794-3.152c-.34-1.988-.679-2.497-1.33-2.667a1.8 1.8 0 0 0-.428-.054m-23.056.313c.206-.014.437.052.698.187.806.42 3.65 2.637 4.193 3.076.526.422.454.641.178 1.185-.275.544-.533.683-1.022.528-.978-.309-3.882-2.07-4.64-2.523-.684-.413-.773-.784-.296-1.689.264-.499.545-.742.889-.764m-1.79 9.45c.139-.014.296-.005.469.012.803.077 4.524.682 5.116.865.613.19.698.47.623 1.005-.095.696-.409.829-.81.841-.855.024-4.407-.129-5.218-.209-.706-.07-.992-.381-.915-1.404.062-.824.319-1.068.735-1.11m7.768 7.597c.308.018.54.218.713.653.255.637.08.89-.463 1.228-.6.372-3.78 2.04-4.499 2.305-.512.19-1.068.146-1.395-.824-.402-1.198.162-1.482.965-1.794.711-.275 3.66-1.344 4.345-1.53a1 1 0 0 1 .334-.038'
})
Y('codepen', {
  color: '#151515',
  path: 'M0 0v64h64V0zm32 48c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16m.5-25.7q-.45-.3-.9 0l-9.1 5.9c-.2.2-.4.4-.4.7v6.2c0 .3.1.6.4.7l9.1 5.9q.45.3.9 0l9.1-5.9c.2-.2.4-.4.4-.7v-6.2c0-.3-.1-.6-.4-.7zm.3 2.2 6.8 4.5-3 2-3.7-2.5v-4zm-1.6 0v4L27.4 31l-3-2zm-7.4 6.1 2.1 1.4-2.1 1.4zm7.4 8.9L24.4 35l3-2 3.7 2.5v4zM32 34l-3-2 3-2 3 2zm.8 5.5v-4l3.7-2.5 3 2zm7.4-6.1L38.1 32l2.1-1.4z'
})
Y('developer.mozilla', {
  color: '#236ab4',
  path: 'M0 0v64h64V0zm32 48.35h-3.69v-32.7l-10.15 32.7h-4.15l10.11-32.7H32zm18 0h-3.69v-32.7l-10.12 32.7h-4.15l10.11-32.7H50z'
})
Y('discord', {
  color: '#5865F2',
  path: 'M0 0v64h64V0zm36.903 18.5a29.6 29.6 0 0 1 7.374 2.269c4.045 5.914 6.055 12.585 5.313 20.283a29.6 29.6 0 0 1-9.05 4.537 21.7 21.7 0 0 1-1.936-3.12 19.3 19.3 0 0 0 3.055-1.46 11 11 0 0 1-.747-.562 21.25 21.25 0 0 1-18.082 0c-.242.186-.492.377-.748.562a19 19 0 0 0 3.05 1.457 22 22 0 0 1-1.937 3.123 29.7 29.7 0 0 1-9.043-4.54c-.633-6.638.632-13.37 5.299-20.275a29.8 29.8 0 0 1 7.38-2.274q.522.935.944 1.92a27.5 27.5 0 0 1 8.183 0q.422-.985.945-1.92m-10.97 18.467c-1.762 0-3.218-1.6-3.218-3.568s1.405-3.581 3.213-3.581c1.807 0 3.252 1.614 3.222 3.581-.031 1.968-1.42 3.568-3.216 3.568m11.875 0c-1.765 0-3.216-1.6-3.216-3.568s1.406-3.581 3.216-3.581 3.244 1.614 3.213 3.581c-.03 1.968-1.417 3.568-3.213 3.568'
})
Y('dribbble', {
  color: '#ea4c89',
  path: 'M34.3 34.3c-7.7 2.7-10.5 8-10.7 8.5 2.3 1.8 5.2 2.9 8.4 2.9 1.9 0 3.7-.4 5.3-1.1-.2-1.2-1-5.4-3-10.3.1-.1.1 0 0 0m-3-6.7c-2.3-4-4.7-7.4-5.1-7.9-3.8 1.8-6.7 5.3-7.6 9.6.6-.1 6.3 0 12.7-1.7m1.7 4.5c.2-.1.4-.1.5-.2-.3-.8-.7-1.6-1.1-2.3-6.8 2-13.4 2-14 1.9v.4c0 3.5 1.3 6.7 3.5 9.1.3-.4 4-6.6 11.1-8.9m8.1-10.3c-2.4-2.1-5.6-3.4-9.1-3.4-1.1 0-2.2.1-3.2.4.4.5 2.9 3.9 5.1 8 4.9-1.9 6.9-4.7 7.2-5m-6.2 7c.3.7.6 1.3.9 2 .1.2.2.5.3.7 4.5-.6 9.1.3 9.5.4 0-3.2-1.2-6.2-3.1-8.5-.2.4-2.5 3.3-7.6 5.4m2.1 4.8c1.8 4.9 2.5 8.9 2.7 9.7 3.1-2.1 5.2-5.4 5.9-9.2-.6-.1-4.3-1.2-8.6-.5M0 0v64h64V0zm32 48c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16'
})
Y('dropbox', {
  color: '#1081DE',
  path: 'M0 0v64h64V0zm41.5 41.2L32 46.9l-9.4-5.7v-2.1l2.8 1.8 6.6-5.5 6.6 5.5 2.8-1.8v2.1zm6.5-7.5-9.4 6.1-6.6-5.5-6.6 5.5-9.4-6.1 6.5-5.2-6.5-5.2 9.4-6.1 6.6 5.5 6.6-5.5 9.4 6.1-6.5 5.2zm-25.5-5.2 9.5 5.9 9.5-5.9-9.5-5.9z'
})
Y('email', {
  color: '#7f7f7f',
  path: 'M41.1 25H22.9l9.1 7.1zm2.9 1.6-12 9.3-12-9.3V39h24zM0 0v64h64V0zm47 42H17V22h30z'
})
Y('facebook', {
  color: '#3b5998',
  path: 'M0 0v64h64V0zm39.6 22h-2.8c-2.2 0-2.6 1.1-2.6 2.6V28h5.3l-.7 5.3h-4.6V47h-5.5V33.3H24V28h4.6v-4c0-4.6 2.8-7 6.9-7 2 0 3.6.1 4.1.2z'
})
Y('fivehundredpix', {
  color: '#222222',
  path: 'M33.3 31.3c-.4-.2-.7-.4-1.1-.6-.3-.1-.8-.1-.9-.1-1.1 0-1.9.6-2.2 2.1v.9c0 .1.1.4.2.7.3.9 1.4 1.3 2.1 1.3s1.2-.2 1.9-.6c.5-.3 1-.7 1.4-1.1.2-.2.5-.5.5-.6.1-.5-1.5-1.7-1.9-2m9.5-.7c-1.3 0-2.4 1-3.8 2.6 1.3 1.5 2.6 2.3 3.9 2.3 1.5 0 2.2-1.1 2.2-2.4.1-1.4-.8-2.5-2.3-2.5M0 0v64h64V0zm42.9 38.5c-2 0-3.8-1-5.7-3.3-2.2 2.4-3.7 3.3-5.7 3.3-1.8 0-3.7-.7-4.8-3.1-1.2 2.5-3.3 3.2-5.1 3.2-1.6 0-3.8-.4-5-2.5-.1-.1-.6-1.3-.6-1.6v-.7h3c.1 1.6 1.3 2.2 2.4 2.2 1.3 0 2.4-.9 2.6-2.6v-.7c-.2-1.8-1.3-2.4-2.6-2.4-.8 0-1.6.2-2.3 1.2h-2.7v-.2l1.5-8h8.4v2.5h-6.2l-.6 3.3c1-.9 2-1.1 2.9-1.1 1.4 0 3.2.6 4.1 2.6 1-2.4 3-3.2 4.7-3.2 2 0 3.9 1 5.8 3.5 2.1-2.6 3.7-3.5 5.8-3.5 3.3 0 5.1 2.4 5.1 5.4.1 3.1-1.7 5.7-5 5.7'
})
Y('foursquare', {
  color: '#0072b1',
  path: 'M39.7 20.4H26.4c-.6 0-1 .5-1 1v20.5c0 .1 0 .1.1 0 0 0 4.9-5.9 5.4-6.5.5-.7.8-.8 1.6-.8H37c.6 0 1-.5 1-.8.1-.3.6-3 .7-3.6.1-.5-.4-1.1-.9-1.1h-5.5c-.7 0-1.2-.5-1.2-1.2v-.8c0-.7.5-1.2 1.2-1.2h6.4c.5 0 .9-.4 1-.8l.7-3.6c.2-.6-.2-1.1-.7-1.1M0 0v64h64V0zm44 20.9-1 5.2c-.8 4.2-1.8 9-1.9 9.5-.2.9-.6 2.4-2.7 2.4h-5.1c-.2 0-.2 0-.4.2-.1.1-7.9 9.2-7.9 9.2-.6.7-1.6.6-2 .4-.4-.1-1-.6-1-1.8V19.7c0-1.1.7-2.8 3-2.8h16.5c2.4.1 3.1 1.5 2.5 4'
})
Y('flickr', {
  color: '#0063db',
  path: 'M38 27c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5M0 0v64h64V0zm32 48c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16m-6-21c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5'
})
Y('gitlab', {
  color: '#f96424',
  path: 'M0 0v64h64V0zm50.402 32.559-1.969-6.066v.007-.011L44.52 14.454a1.54 1.54 0 0 0-1.476-1.055c-.68.004-1.25.422-1.461 1.062l-3.715 11.426h-11.72l-3.722-11.426a1.52 1.52 0 0 0-1.46-1.062h-.009c-.664 0-1.257.422-1.472 1.062L15.58 26.488v.004s0 .004-.004.008q.005-.007.004-.008l-1.98 6.067c-.297.914.027 1.91.805 2.476l17.082 12.402q.006-.001.007.004c.008.004.016.012.024.016-.008-.004-.012-.012-.02-.016l.004.004h.004q.035.028.082.051l.008.008h.004l.004.004h.008q0 .005.003.004c.004 0 .004.004.008.004q.024.009.047.02.022.006.043.015v.004h.008q.006.004.012.003h.004c0 .004.007.004.011.004h.004q.03.011.063.016.012.007.023.008h.004l.008.004h.015q.004-.001.008.004h.004q.061.006.121.007h.004q.061 0 .121-.007h.004q.006-.005.012-.004h.012q.007-.002.007-.004h.004l.028-.008.062-.016h.004q.006.001.012-.004h.004s.004 0 .008-.003h.007v-.004c.016-.004.032-.012.047-.016l.043-.02.008-.003h.004q.004-.005.008-.004l.008-.004.011-.008q.042-.023.082-.05.002.001.004-.005h.004q.004-.005.008-.004L49.6 35.035a2.21 2.21 0 0 0 .8-2.476zm-7.352-16.98 3.352 10.309h-6.7zm2.766 12.051-1.367 1.75-10.086 12.91 4.77-14.66zM31.171 47.001q.005.004.004.008.001-.004-.004-.008m-1.527-4.707L18.199 27.63h6.68zm-8.688-26.715 3.356 10.309h-6.703zm-5.523 18.047a.47.47 0 0 1-.172-.527l1.473-4.512 10.773 13.805zM31.46 47.415q-.006-.007-.012-.008v-.004q-.013-.008-.02-.015-.022-.018-.039-.036c.004 0 .004.004.004.004s.004 0 .004.004c.028.024.051.047.078.067h.004s0 .004.004.004c-.008-.004-.015-.012-.023-.016m.543-3.504-2.805-8.625-2.484-7.656H37.3zm.574 3.477q-.013.008-.02.015-.004-.001-.003.004a.01.01 0 0 0-.008.008c-.008.004-.016.012-.024.016 0 0 0-.004.004-.004a1 1 0 0 0 .078-.067l.004-.004s.004 0 .004-.003zm15.996-13.762-12.074 8.761L47.28 28.59l1.465 4.508a.47.47 0 0 1-.172.528'
})
Y('github', {
  color: '#24292e',
  path: 'M0 0v64h64V0zm37.1 47.2c-.8.2-1.1-.3-1.1-.8V42c0-1.5-.5-2.5-1.1-3 3.6-.4 7.3-1.7 7.3-7.9 0-1.7-.6-3.2-1.6-4.3.2-.4.7-2-.2-4.2 0 0-1.3-.4-4.4 1.6-1.3-.4-2.6-.5-4-.5s-2.7.2-4 .5c-3.1-2.1-4.4-1.6-4.4-1.6-.9 2.2-.3 3.8-.2 4.2-1 1.1-1.6 2.5-1.6 4.3 0 6.1 3.7 7.5 7.3 7.9-.5.4-.9 1.1-1 2.1-.9.4-3.2 1.1-4.7-1.3 0 0-.8-1.5-2.5-1.6 0 0-1.6 0-.1 1 0 0 1 .5 1.8 2.3 0 0 .9 3.1 5.4 2.1v2.7c0 .4-.3.9-1.1.8-6.3-2-10.9-8-10.9-15.1 0-8.8 7.2-16 16-16s16 7.2 16 16c0 7.1-4.6 13.1-10.9 15.2'
})
Y('google', {
  color: '#dd4b39',
  path: 'M0 0v64h64V0zm31.3 19.1q.45.45.9 1.2c.3.4.5.9.7 1.5q.3.9.3 2.1c0 1.4-.3 2.6-.9 3.4l-.9 1.2c-.4.4-.8.7-1.2 1.1-.2.2-.5.5-.7.8s-.4.7-.4 1.1.1.8.4 1c.2.3.4.5.6.7l1.4 1.1c.8.7 1.6 1.5 2.2 2.3s.9 2 .9 3.3c0 1.9-.9 3.7-2.6 5.2-1.8 1.6-4.3 2.4-7.7 2.4q-4.2 0-6.3-1.8-2.1-1.65-2.1-3.9c0-.7.2-1.6.7-2.5q.6-1.35 2.4-2.4c1.3-.7 2.7-1.2 4.1-1.5 1.4-.2 2.6-.3 3.5-.4-.3-.4-.5-.8-.8-1.2s-.4-.9-.4-1.5c0-.4 0-.6.2-.9.1-.2.2-.5.2-.7-.5.1-.9.1-1.3.1-2.1 0-3.8-.7-4.9-2-1.2-1.2-1.8-2.7-1.8-4.3 0-2 .8-3.8 2.5-5.4 1.1-.9 2.3-1.6 3.5-1.8s2.3-.4 3.4-.4h8L33 18.4h-2.5c.2.2.5.4.8.7M48 32h-4.3v4.2h-2.5V32H37v-2.5h4.2v-4.3h2.5v4.3H48zM27.1 19.1c-.6-.5-1.4-.7-2.2-.7-1.1 0-2 .5-2.7 1.3q-.9 1.35-.9 3c0 1.5.4 3 1.3 4.5.4.7.9 1.4 1.6 1.9.6.5 1.4.8 2.2.8 1.1 0 1.9-.4 2.6-1.1.3-.5.6-1 .7-1.6.1-.5.1-1 .1-1.4q0-2.4-1.2-4.8c-.4-.8-.9-1.5-1.5-1.9m-.2 17.1c-.2 0-.7 0-1.6.1-.8.1-1.7.3-2.5.6-.2.1-.5.2-.9.4s-.7.4-1.1.7q-.6.45-.9 1.2c-.3.5-.4 1.1-.4 1.8 0 1.4.6 2.6 1.9 3.5 1.2.9 2.9 1.4 5 1.4 1.9 0 3.3-.4 4.3-1.3 1-.8 1.5-1.8 1.5-3.1 0-1-.3-1.9-1-2.7-.7-.7-1.8-1.6-3.3-2.6z'
})
Y('google_play', {
  color: '#40BBC1',
  path: 'M0 0v64h64V0zm40.4 27.1-3.6 3.6-12.3-12.3zM22 44.5V19.4c0-.4.1-.7.2-.9L35.6 32 22.2 45.4c-.1-.2-.2-.5-.2-.9m2.4 1.1 12.4-12.4 3.6 3.6zm22.7-12.4-5 2.8-4-4 3.9-3.9 5.1 2.8c1.2.5 1.2 1.6 0 2.3'
})
Y('instagram', {
  color: '#e94475',
  path: 'M0 0v64h64V0zm39.88 25.89c.98 0 1.77-.79 1.77-1.77s-.79-1.77-1.77-1.77-1.77.79-1.77 1.77.79 1.77 1.77 1.77M32 24.42c-4.18 0-7.58 3.39-7.58 7.58s3.4 7.58 7.58 7.58 7.58-3.4 7.58-7.58-3.4-7.58-7.58-7.58m0 12.5c-2.72 0-4.92-2.2-4.92-4.92s2.2-4.92 4.92-4.92 4.92 2.2 4.92 4.92-2.2 4.92-4.92 4.92m0-17.02c3.94 0 4.41.02 5.96.09 1.45.06 2.23.3 2.75.51.69.27 1.18.58 1.7 1.1.51.52.83 1.01 1.1 1.7.2.52.44 1.3.51 2.74.07 1.56.09 2.02.09 5.97 0 3.94-.02 4.4-.09 5.96-.07 1.44-.31 2.22-.51 2.74-.27.69-.59 1.19-1.1 1.7-.52.52-1.01.84-1.7 1.1-.52.2-1.3.45-2.75.51-1.55.07-2.02.09-5.96.09s-4.41-.02-5.96-.09c-1.45-.06-2.23-.3-2.75-.51-.69-.27-1.18-.58-1.7-1.1-.51-.51-.83-1.01-1.1-1.7-.2-.52-.44-1.3-.51-2.74-.07-1.56-.09-2.02-.09-5.96 0-3.95.02-4.41.09-5.97.07-1.44.31-2.22.51-2.74.27-.69.59-1.18 1.1-1.7.52-.52 1.01-.84 1.7-1.1.52-.2 1.3-.45 2.75-.51 1.55-.08 2.02-.09 5.96-.09m0-2.66c-4.01 0-4.51.02-6.09.09-1.57.07-2.64.32-3.58.68-.97.38-1.79.89-2.61 1.71s-1.33 1.65-1.71 2.61c-.36.94-.61 2.01-.68 3.59-.07 1.57-.09 2.07-.09 6.08s.02 4.51.09 6.09c.07 1.57.32 2.64.68 3.58.38.98.89 1.8 1.71 2.62s1.65 1.32 2.61 1.7c.94.37 2.01.62 3.59.69 1.57.07 2.07.09 6.09.09 4.01 0 4.51-.02 6.08-.09s2.65-.32 3.59-.69c.97-.37 1.79-.88 2.61-1.7s1.33-1.65 1.71-2.62c.36-.93.61-2.01.68-3.58.07-1.58.09-2.08.09-6.09s-.02-4.51-.09-6.09c-.07-1.57-.32-2.64-.68-3.58-.38-.98-.89-1.8-1.71-2.62a7.3 7.3 0 0 0-2.61-1.7c-.94-.37-2.01-.62-3.59-.69-1.58-.06-2.08-.08-6.09-.08'
})
Y('groupme', {
  color: '#00aff0',
  path: 'M0 0v64h64V0zm40.321 39.434a10.4 9.517 0 0 1-16.64 0 2.6 2.38 0 1 0-4.161 2.856 15.6 14.276 0 0 0 24.961 0 2.6 2.38 0 0 0-4.16-2.856m-17.42-12.848a2.6 2.38 0 0 0 0 4.759h1.3v1.19a2.6 2.38 0 0 0 5.2 0v-1.19h5.2v1.19a2.6 2.38 0 0 0 5.2 0v-1.19h1.3a2.6 2.38 0 0 0 0-4.759h-1.3v-4.758h1.3a2.6 2.38 0 0 0 0-4.759h-1.3v-1.19a2.6 2.38 0 0 0-5.2 0v1.19h-5.2v-1.19a2.6 2.38 0 0 0-5.2 0v1.19h-1.3a2.6 2.38 0 0 0 0 4.759h1.3v4.758zm6.5-4.758h5.2v4.758h-5.2z'
})
Y('itunes', {
  color: '#E049D1',
  path: 'M0 0v64h64V0zm42.5 40c0 2.2-1.8 4-4 4h-2c-1.9 0-3.4-1.5-3.4-3.4s1.5-3.4 3.4-3.4h2.8c.8 0 1.4-.6 1.4-1.4v-11c0-.5-.4-.9-.9-.9h-.2l-12.1 2.4c-.4.1-.7.4-.7.9V43c0 2.2-1.8 4-4 4h-2c-1.9 0-3.4-1.5-3.4-3.4s1.5-3.4 3.4-3.4h2.8c.8 0 1.4-.6 1.4-1.4V21.3c0-.7.5-1.2 1.1-1.4l14.7-3h.3c.8 0 1.4.6 1.4 1.4z'
})
Y('itch.io', {
  color: '#fa5c5c',
  path: 'M0 0v64h64V0zm32 16c4.482 0 7.49.028 11.828.197 1.396.921 4.146 4.435 4.172 5.356v1.523c0 1.933-1.624 3.631-3.1 3.631-1.771 0-3.248-1.631-3.248-3.568 0 1.937-1.425 3.568-3.197 3.568-1.771 0-3.152-1.631-3.152-3.568 0 1.937-1.516 3.568-3.287 3.568h-.032c-1.771 0-3.287-1.631-3.287-3.568 0 1.937-1.38 3.568-3.152 3.568s-3.197-1.631-3.197-3.568c0 1.937-1.477 3.568-3.248 3.568-1.476 0-3.1-1.698-3.1-3.63v-1.524c.026-.921 2.776-4.434 4.172-5.356C21.407 16.077 27.518 16 32 16m-3.326 9.797a3.65 4.058 0 0 0 .619.892 3.716 4.13 0 0 0 2.602 1.178q.053 0 .105-.002l.107.002a3.716 4.13 0 0 0 2.602-1.178 3.65 4.058 0 0 0 .617-.892 3.655 4.063 0 0 0 .623.892c.669.727 1.585 1.178 2.596 1.178a3.714 4.129 0 0 0 2.601-1.178c.243-.263.427-.546.596-.875.169.33.404.611.647.875a3.717 4.132 0 0 0 2.601 1.178c.122 0 .25-.037.352-.076a66 66 0 0 1 .222 4.373l.002.006.008 1.73c-.027 3.46.307 11.21-1.373 13.116-2.603.674-7.395.982-12.201.984-4.806-.002-9.598-.31-12.201-.984-1.68-1.905-1.344-9.657-1.371-13.116.002-.666.005-1.147.008-1.73v-.006c.02-1.149.08-2.724.222-4.373.103.04.23.076.352.076a3.717 4.132 0 0 0 2.601-1.178c.243-.264.478-.545.647-.875.168.329.353.612.596.875a3.714 4.129 0 0 0 2.601 1.178c1.01 0 1.927-.45 2.596-1.178a3.655 4.063 0 0 0 .623-.892m9.324 3.84v.002h-.002c-1.058.002-1.997 0-3.162 1.414a24 24 0 0 0-2.834-.16 24 24 0 0 0-2.834.16c-1.165-1.413-2.104-1.412-3.162-1.414h-.002c-.5 0-2.5 0-3.893 4.35l-1.496 5.966c-1.109 4.44.354 4.549 2.18 4.553 2.708-.112 4.209-2.298 4.209-4.485 1.5.274 3.249.41 4.998.41s3.499-.136 4.998-.41c0 2.187 1.499 4.373 4.207 4.485 1.826-.004 3.29-.113 2.182-4.553l-1.496-5.967c-1.394-4.35-3.393-4.351-3.893-4.351M32 33.057s2.851 2.91 3.363 3.945l-1.865-.082v1.809c0 .084-.749.05-1.498.011-.75.039-1.498.073-1.498-.011v-1.81l-1.865.083c.512-1.034 3.36-3.943 3.363-3.945'
})
Y('line.me', {
  color: '#4cc764',
  path: 'M0 0h64v64H0Zm27.54 13.171a26 26 0 0 1 6.17-.319c3.058.196 5.992.9 8.776 2.19 3.394 1.572 6.257 3.797 8.336 6.945 1.942 2.94 2.79 6.171 2.425 9.69-.286 2.758-1.398 5.185-3.046 7.382s-3.614 4.082-5.734 5.811c-3.558 2.901-7.32 5.505-11.32 7.758-.463.26-.954.469-1.437.69a2.4 2.4 0 0 1-.457.14c-.9.212-1.32-.166-1.184-1.077.099-.663.247-1.32.322-1.986.062-.558.074-1.124.062-1.686-.01-.494-.3-.862-.747-1.026-.574-.211-1.166-.405-1.767-.504-4.812-.789-9.1-2.66-12.59-6.137-2.247-2.238-3.792-4.89-4.423-8.028-.762-3.794-.064-7.333 1.949-10.61 1.868-3.044 4.503-5.257 7.642-6.896 2.205-1.15 4.545-1.912 7.023-2.337m4.31 18.669v-2.078c.126.159.192.239.254.323 1.294 1.747 2.59 3.492 3.875 5.244.176.24.369.352.67.335.392-.022.787-.004 1.181-.006.414-.002.54-.12.541-.529q.003-4.543 0-9.085c0-.4-.133-.531-.542-.538-.394-.006-.788-.002-1.182-.001-.512.002-.618.107-.618.621v5.291c-.149-.192-.234-.299-.316-.409-1.28-1.73-2.563-3.458-3.837-5.193-.153-.209-.324-.318-.585-.313-.426.01-.852-.004-1.278.004-.369.008-.503.14-.504.51q-.006 4.575 0 9.15c.001.362.143.488.516.491q.639.005 1.279 0c.428-.002.545-.118.546-.555.002-1.066 0-2.132 0-3.263m12.106 1.473h-1.79v-1.558h.366q1.79.001 3.58-.001c.39 0 .52-.125.527-.514.008-.405.004-.81.001-1.216-.002-.507-.11-.614-.627-.614l-3.484-.002c-.123 0-.245-.012-.355-.018v-1.54h.38q1.773.001 3.546-.001c.409 0 .533-.124.539-.535q.01-.656-.001-1.312c-.006-.35-.137-.493-.486-.494q-2.925-.009-5.849 0c-.353 0-.48.14-.48.489q-.003 4.59 0 9.18c0 .356.125.479.484.48q2.907.003 5.816 0c.383 0 .51-.13.516-.525q.007-.624 0-1.248c-.003-.447-.122-.568-.574-.57-.681-.005-1.363-.002-2.109-.002m-26.32 1.893c.006.32.178.454.488.454 1.949-.002 3.898 0 5.847-.002.35 0 .476-.13.482-.486.006-.395.002-.79.002-1.184 0-.585-.087-.674-.66-.674l-3.451-.001c-.113 0-.226-.01-.365-.018v-7.159c0-.519-.106-.627-.612-.63q-.56-.003-1.118 0c-.515.001-.613.101-.613.622zm10.432-1.51v-7.606c0-.465-.117-.581-.589-.585q-.543-.002-1.085 0c-.58 0-.68.103-.681.693v8.756c0 .086-.004.171.002.256.024.286.163.451.468.45.468-.003.936.003 1.405-.002.34-.004.475-.144.478-.492.004-.468.001-.937.001-1.47z'
})
Y('leetcode', {
  color: '#E7A41F',
  path: 'M0 0h64v64H0zm42.05 42.07a2.12 2.12 0 0 0-3.069-.005l-3.77 3.885a4.65 4.65 0 0 1-6.616.06l-6.758-6.84c-1.824-1.846-2.143-4.74-.56-6.49l6.21-6.625c1.664-1.84 5.04-2.061 6.97-.45l5.508 4.596c.932.779 2.299.628 3.052-.336s.607-2.377-.326-3.156l-5.507-4.596c-1.204-1.005-2.649-1.641-4.161-1.917L36.5 16.5c.85-.91.947-2.264.04-3.116a2.245 2.245 0 0 0-3.181.107l-9.043 9.499-6.063 6.7c-3.252 3.594-2.908 9.19.548 12.688l6.79 6.871a8.887 8.887 0 0 0 12.685-.12l3.77-3.886a2.3 2.3 0 0 0 .005-3.173m-14.396-6.016c0 1.24.971 2.244 2.17 2.244H45.83c1.198 0 2.17-1.005 2.17-2.244s-.972-2.244-2.17-2.244H29.824c-1.199 0-2.17 1.005-2.17 2.244'
})
Y('linkedin', {
  color: '#007fb1',
  path: 'M0 0v64h64V0zm25.8 44h-5.4V26.6h5.4zm-2.7-19.7c-1.7 0-3.1-1.4-3.1-3.1s1.4-3.1 3.1-3.1 3.1 1.4 3.1 3.1-1.4 3.1-3.1 3.1M46 44h-5.4v-8.4c0-2 0-4.6-2.8-4.6s-3.2 2.2-3.2 4.5V44h-5.4V26.6h5.2V29h.1c.7-1.4 2.5-2.8 5.1-2.8 5.5 0 6.5 3.6 6.5 8.3V44z'
})
Y('linktree', {
  color: '#39e09b',
  path: 'M0 0v64h64V0zm27.436 19.386c-.6-.948-2.162-.948-2.762 0L14.344 35.83c-.48.843.24 1.792 1.322 1.792h6.966v6.218c0 .633.6 1.16 1.321 1.16h4.083c.721 0 1.321-.527 1.321-1.16v-6.218h-1.921c-.84 0-1.441-.527-1.562-1.16 0-.21 0-.421.12-.635l5.766-9.17zm9.128 0c.6-.948 2.162-.948 2.762 0l10.33 16.444c.48.843-.24 1.792-1.322 1.792h-6.846v6.218c0 .633-.6 1.16-1.322 1.16h-4.323c-.72 0-1.32-.527-1.32-1.16v-6.218h1.921c.84 0 1.441-.527 1.561-1.16 0-.21 0-.421-.12-.635L32.12 26.66z'
})
Y('mailto', {
  color: '#7f7f7f',
  path: 'M41.1 25H22.9l9.1 7.1zm2.9 1.6-12 9.3-12-9.3V39h24zM0 0v64h64V0zm47 42H17V22h30z'
})
Y('mastodon', {
  color: '#17063B',
  path: 'M-.135-.135v64.541h64.678V-.134ZM31.91 16c4.394-.016 8.82.462 11.213 1.488 0 0 4.875 2.042 4.875 8.992 0 0 .064 5.126-.684 8.688-.477 2.26-4.218 4.734-8.515 5.213-1.54.17-7.13 1.013-13.686-.48q-.002.5.069.995c.507 3.546 3.767 3.76 6.861 3.86 3.123.093 5.646-.723 5.646-.723l.13 2.639s-1.924 1.093-5.815 1.295c-2.144.113-4.811-.05-7.912-.815C15.994 45.143 16 34.754 16 26.48c0-6.95 4.883-8.992 4.883-8.992 2.27-.96 6.633-1.472 11.027-1.488m-4.703 5.3c-1.505-.036-3.027.51-4.016 1.532-1.802 1.918-1.406 3.174-1.406 11.816h3.569v-7.513c0-3.518 4.882-3.651 4.882.49v4.354h3.537v-4.354c0-4.141 4.887-4.006 4.887-.488v7.515h3.56v-.004c0-8.636.404-9.883-1.406-11.816-1.962-2.032-6.087-2.196-7.927.43l-.883 1.383-.887-1.383c-.916-1.306-2.405-1.924-3.91-1.961'
})
Y('matrix', {
  color: '#000000',
  path: 'M0 0v64h64V0zm16 16h3.04v.732h-2.198v30.536h2.197V48H16zm28.96 0H48v32h-3.04v-.732h2.198V16.732h-2.197zM29.769 26.104c.72 0 1.377.143 1.974.42.598.277 1.046.775 1.36 1.476q.509-.749 1.378-1.322.87-.574 2.061-.574.904 0 1.68.222c.517.147.955.382 1.324.707.368.327.652.745.861 1.268q.306.783.307 1.89v7.637h-3.131V31.36q0-.573-.043-1.082a2.3 2.3 0 0 0-.24-.88 1.5 1.5 0 0 0-.584-.596q-.39-.222-1.047-.223-.665 0-1.07.252a1.84 1.84 0 0 0-.641.666 2.6 2.6 0 0 0-.309.928 7.4 7.4 0 0 0-.08 1.047v6.357h-3.132v-6.4c0-.339-.005-.67-.024-1.002a2.8 2.8 0 0 0-.191-.918 1.4 1.4 0 0 0-.553-.67c-.259-.167-.635-.254-1.139-.254q-.224 0-.586.1a2 2 0 0 0-.705.375q-.344.277-.586.793-.24.519-.24 1.36v6.622H23.28v-11.42h2.953v1.541h.045a4.4 4.4 0 0 1 1.49-1.365c.578-.327 1.249-.486 2-.486'
})
Y('medium', {
  color: '#000000',
  path: 'M0 0v64h64V0zm25.025 22.914c4.985 0 9.026 4.068 9.026 9.086s-4.041 9.086-9.026 9.086S16 37.018 16 32s4.041-9.086 9.025-9.086m14.413.531c2.492 0 4.511 3.83 4.511 8.555h.002c0 4.724-2.021 8.555-4.514 8.555-2.492 0-4.511-3.831-4.511-8.555s2.02-8.555 4.511-8.555m6.974.89C47.288 24.336 48 27.768 48 32c0 4.231-.711 7.664-1.588 7.664S44.826 36.232 44.826 32s.71-7.664 1.586-7.664'
})
Y('meetup', {
  color: '#E51937',
  path: 'M0 0v64h64V0zm47.8 44.3c-.4.2-2.5.9-3.9 1-.6.1-1.1-.6-1.4-1.5C41 39.2 39 32 37.3 27.2c0 3.7-.3 10.8-.4 12-.1 1.7-.4 3.7-1.8 3.9-1.1.2-2.4.4-4 .4-1.3 0-1.8-.9-2.4-1.8-1-1.4-3.1-4.8-4.1-6.9.3 2.3.7 4.7.9 5.8.1.8 0 1.5-.6 1.9-1 .7-3.2 1.4-4.1 1.4-.8 0-1.5-.8-1.6-1.6-.7-3.4-1.2-8-1.1-11.1 0-2.8 0-5.9.2-8.3 0-.7.3-1.1.9-1.4 1.2-.5 3-.6 4.7-.3.8.1 1 .8 1.4 1.4 1.7 2.8 3.8 6.7 5.7 10.6 0-6.3 1.9-11.9 3.5-15.3.5-1.1.9-1.4 1.9-1.4 1.3 0 2.9.2 4.1.4 1.1.2 1.5 1.6 1.7 2.5 1.2 4.5 4.7 18.7 5.5 22.4.1 1 .6 2.2.1 2.5'
})
Y('misskey', {
  color: '#86b300',
  path: 'M0 0h64v64H0Zm16.97 18.07c-.57 0-1.13.1-1.66.29-.94.33-1.72.93-2.32 1.78-.58.83-.87 1.75-.87 2.78v18.16c0 1.33.47 2.47 1.41 3.44.97.94 2.12 1.41 3.44 1.41 1.36 0 2.5-.47 3.44-1.41.97-.97 1.45-2.12 1.45-3.44v-3.3c.01-.72.75-.53 1.12 0 .7 1.21 2.33 2.24 3.9 2.24s3.15-.86 3.9-2.24c.28-.33 1.08-.9 1.16 0v3.3c0 1.33.47 2.47 1.41 3.44.97.94 2.12 1.41 3.44 1.41 1.35 0 2.5-.47 3.44-1.41.97-.97 1.45-2.12 1.45-3.44V22.92c0-1.02-.3-1.95-.91-2.78-.58-.86-1.34-1.45-2.28-1.78-.55-.19-1.11-.29-1.66-.29-1.49 0-2.75.58-3.77 1.74l-4.92 5.76c-.11.08-.48.72-1.26.72s-1.1-.63-1.21-.72l-4.96-5.76c-1-1.16-2.24-1.74-3.74-1.74m30.68 0c-1.16 0-2.16.41-2.98 1.24q-1.2 1.2-1.2 2.94c0 1.16.4 2.16 1.2 2.98.83.8 1.82 1.2 2.98 1.2s2.16-.4 2.99-1.2c.83-.83 1.24-1.82 1.24-2.98s-.41-2.14-1.24-2.94c-.84-.83-1.83-1.24-2.99-1.24m.04 9.2c-1.16 0-2.16.41-2.99 1.24s-1.24 1.82-1.24 2.99v10.24c0 1.16.41 2.16 1.24 2.98.83.8 1.82 1.2 2.99 1.2q1.74 0 2.94-1.2c.83-.83 1.24-1.82 1.24-2.98V31.5c0-1.16-.41-2.16-1.24-2.99-.8-.82-1.78-1.24-2.94-1.24'
})
Y('opensea', {
  color: '#2081E2',
  path: 'M0 0h64v64H0Zm33 12.8c.5 0 .956.204 1.281.536.326.332.528.787.528 1.293v3.101l.375.106q.046.014.086.043c.092.069.222.172.39.297.132.105.275.232.445.363.34.273.744.627 1.188 1.031.118.102.235.208.34.313a27 27 0 0 1 1.824 1.847c.171.194.337.391.508.598.17.21.354.418.512.625.207.276.427.56.62.86.093.14.2.288.29.43.25.377.469.768.68 1.16.088.18.178.376.257.57a8.5 8.5 0 0 1 .54 1.59c.035.115.06.24.074.351v.027c.039.158.053.326.066.496a5.3 5.3 0 0 1-.094 1.641c-.05.234-.112.454-.191.688-.08.223-.16.455-.262.675-.197.457-.43.913-.707 1.34a8 8 0 0 1-.297.485c-.115.167-.234.326-.34.48a10 10 0 0 1-.457.59 6 6 0 0 1-.445.559c-.22.26-.428.505-.648.742a7 7 0 0 1-.418.453c-.142.158-.287.298-.418.43-.22.22-.404.393-.559.535l-.363.332a.3.3 0 0 1-.196.07h-2.8v3.594h3.527c.789 0 1.536-.28 2.14-.793.208-.181 1.112-.96 2.18-2.14a.3.3 0 0 1 .137-.083l9.734-2.816a.287.287 0 0 1 .364.277v2.059c0 .118-.07.223-.176.27-.644.275-2.852 1.29-3.77 2.566-2.34 3.258-4.127 7.918-8.125 7.918H24.14c-5.91 0-10.699-4.808-10.699-10.739v-.191c0-.158.128-.285.286-.285h9.296c.184 0 .318.17.301.351a3.17 3.17 0 0 0 .332 1.785 3.27 3.27 0 0 0 2.934 1.82h4.605v-3.593h-4.55a.294.294 0 0 1-.239-.46c.05-.077.105-.154.164-.243a33 33 0 0 0 1.657-2.645c.417-.73.822-1.506 1.148-2.289a5 5 0 0 0 .172-.43c.089-.25.18-.48.246-.714.066-.198.12-.404.172-.598a9.3 9.3 0 0 0 .219-2.098 10 10 0 0 0-.04-.87c-.013-.313-.05-.626-.09-.938a10 10 0 0 0-.128-.836 14 14 0 0 0-.266-1.25l-.035-.156c-.079-.286-.146-.562-.238-.848a32 32 0 0 0-.871-2.59c-.115-.325-.248-.637-.38-.949-.193-.47-.393-.896-.574-1.3a18 18 0 0 1-.25-.524 17 17 0 0 0-.269-.574c-.066-.142-.143-.271-.195-.403l-.563-1.039a.183.183 0 0 1 .207-.265l3.52.953h.008l.011.004.465.128.512.145.187.05v-2.09c0-1.008.805-1.827 1.805-1.827m-8.488 6.903a.28.28 0 0 1 .238.168c1.39 3.117 2.59 6.993 2.027 9.406-.24.993-.897 2.34-1.636 3.582q-.145.272-.313.528a.28.28 0 0 1-.234.125H16.03a.284.284 0 0 1-.242-.438l.137-.215 8.324-13.023a.28.28 0 0 1 .262-.133'
})
Y('patreon', {
  color: '#000000',
  path: 'M0 0h64v64H0Zm52.853 23.459c-.008-5.72-4.462-10.41-9.69-12.1-6.492-2.1-15.053-1.796-21.252 1.127-7.511 3.546-9.871 11.312-9.959 19.055-.07 6.369.564 23.139 10.022 23.259 7.03.088 8.077-8.969 11.328-13.33 2.314-3.104 5.294-3.979 8.96-4.886 6.303-1.562 10.6-6.536 10.591-13.125m0 0'
})
Y('pinterest', {
  color: '#cb2128',
  path: 'M0 0v64h64V0zm32 48c-1.6 0-3.1-.2-4.5-.7.6-1 1.3-2.2 1.6-3.4.2-.7 1.1-4.4 1.1-4.4.6 1.1 2.2 2 3.9 2 5.1 0 8.6-4.7 8.6-11 0-4.7-4-9.2-10.1-9.2-7.6 0-11.4 5.5-11.4 10 0 2.8 1 5.2 3.3 6.1.4.1.7 0 .8-.4.1-.3.2-1 .3-1.3.1-.4.1-.5-.2-.9-.6-.8-1.1-1.7-1.1-3.1 0-4 3-7.7 7.9-7.7 4.3 0 6.7 2.6 6.7 6.1 0 4.6-2 8.5-5.1 8.5-1.7 0-2.9-1.4-2.5-3.1.5-2 1.4-4.2 1.4-5.7 0-1.3-.7-2.4-2.2-2.4-1.7 0-3.1 1.8-3.1 4.1 0 1.5.5 2.5.5 2.5s-1.8 7.4-2.1 8.7c-.3 1.2-.3 2.6-.3 3.7C19.9 44.2 16 38.6 16 32c0-8.8 7.2-16 16-16s16 7.2 16 16-7.2 16-16 16'
})
Y('pixiv', {
  color: '#0097fa',
  path: 'M0 0v64h64V0zm33.553 16.469c-11.844 0-19.903 9.146-19.903 9.146l2.27 3.606s1.26.106.592-2.018c.573-1.086 1.698-2.545 3.892-4.232v24.008c-.946.268-2.194.768-1.34 1.623h6.518c.86-.861-.493-1.38-1.32-1.623v-5.663s4.469 1.756 9.29 1.756c4.234 0 8.088-1.26 10.954-3.537 2.869-2.264 4.712-5.642 4.703-9.506a12.75 12.75 0 0 0-4.41-9.709c-2.793-2.438-6.705-3.847-11.246-3.847zm-.397 2.027c3.601.003 6.425 1.36 8.338 3.43 1.907 2.075 2.948 4.83 2.957 8.04-.012 3.126-1.124 5.698-3.107 7.673-1.98 1.959-4.864 3.195-8.188 3.195h-.021c-3.699 0-6.816-.72-8.873-1.732V21.088c2.261-1.605 5.928-2.598 8.894-2.592'
})
Y('ravelry', {
  color: '#EE6E62',
  path: 'M0 0h64v64H0Zm42.692 28.943s-2.184-.397-3.752-.397c-3.584 0-4.424 1.987-4.424 4.939v12.488H24.83V20.542h9.687v4.257c1.176-3.576 3.528-4.825 8.176-4.825z'
})
Y('rdio', {
  color: '#0475C5',
  path: 'M0 0v64h64V0zm43.9 30.5c.1.5.1 1 .1 1.5 0 6.4-5.1 11.6-12 11.6s-12-5.1-12-11.5V32c0-6.4 5.1-11.6 12-11.6 1.2 0 2.3.2 3.4.5v6.8l-.6-.3c-3-1-6.2.4-7.7 2.9v.1c-1.5 2.5-.8 5.3 2.1 6.3 3 1 6.2-.4 7.7-2.9v-.1c.5-.8.8-1.7.8-2.6v-9.3c.2.1.3.2.5.3.1.1.3.2.4.2 1.5 1 5.4 3.5 8.7 3.4 1.7.1.2 3.8-3.4 4.8'
})
Y('reddit', {
  color: '#FF4500',
  path: 'M0 0v64h64V0zm53.344 32a4.67 4.67 0 0 0-7.903-3.2 22.77 22.77 0 0 0-12.32-3.937L35.2 14.88l6.848 1.441a3.2 3.2 0 0 0 3.02 2.852 3.2 3.2 0 1 0-2.602-4.805l-7.84-1.566a1 1 0 0 0-.754.136.98.98 0 0 0-.43.63l-2.37 11.105a22.8 22.8 0 0 0-12.477 3.937 4.672 4.672 0 1 0-5.152 7.648q-.06.704 0 1.407c0 7.168 8.351 12.992 18.656 12.992 10.3 0 18.656-5.824 18.656-12.992a9.4 9.4 0 0 0 0-1.406A4.68 4.68 0 0 0 53.344 32m-32 3.2a3.198 3.198 0 1 1 6.398 0 3.195 3.195 0 0 1-3.199 3.198c-1.766 0-3.2-1.43-3.2-3.199M39.938 44a12.3 12.3 0 0 1-7.907 2.465A12.3 12.3 0 0 1 24.13 44a.87.87 0 0 1 .055-1.16.87.87 0 0 1 1.16-.055A10.48 10.48 0 0 0 32 44.801a10.5 10.5 0 0 0 6.688-1.953.9.9 0 0 1 1.265.015.9.9 0 0 1-.016 1.266Zm-.579-5.473a3.2 3.2 0 0 1-3.199-3.199 3.198 3.198 0 1 1 6.398 0 3.2 3.2 0 0 1-3.23 3.328Zm0 0'
})
Y('rss', {
  color: '#EF8733',
  path: 'M0 0v64h64V0zm24 44c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4m11-1c-1.1 0-2-.9-2-2 0-5.5-4.5-10-10-10-1.1 0-2-.9-2-2s.9-2 2-2c7.7 0 14 6.3 14 14 0 1.1-.9 2-2 2m9 0c-1.1 0-2-.9-2-2 0-10.5-8.5-19-19-19-1.1 0-2-.9-2-2s.9-2 2-2c12.7 0 23 10.3 23 23 0 1.1-.9 2-2 2'
})
Y('sharethis', {
  color: '#00BF00',
  path: 'M0 0h64v64H0zm28.388 32c0 .084-.02.163-.025.247l8.802 4.4a4.3 4.3 0 0 1 2.782-1.037 4.335 4.335 0 0 1 4.335 4.335 4.335 4.335 0 1 1-8.67 0c0-.086.02-.163.025-.247l-8.802-4.4a4.3 4.3 0 0 1-2.782 1.034 4.335 4.335 0 0 1 0-8.67c1.065 0 2.027.402 2.782 1.037l8.802-4.4c-.005-.083-.024-.162-.024-.249a4.333 4.333 0 0 1 4.334-4.332 4.335 4.335 0 0 1 0 8.67 4.28 4.28 0 0 1-2.782-1.04l-8.802 4.403c.005.084.024.163.024.25'
})
Y('slack', {
  color: '#4A164A',
  path: 'M0 0v64h64V0Zm12.636 37.56c0 5.066 8 5.066 8 0v-3.8h-4c-2.209 0-4 1.7-4 3.8m25.28-6.346c2.21 0 4-1.702 4-3.8V17.287c0-5.066-8-5.066-8 0v10.127c0 2.113 1.815 3.82 4.04 3.8zm14.64-3.8c0-5.067-8-5.067-8 0v3.8h4c2.24.042 4.08-1.672 4.08-3.8zm-25.24 6.345c-2.209 0-4 1.702-4 3.8v10.127c0 5.067 8 5.067 8 0V37.559c0-2.098-1.79-3.8-4-3.8m10.64 10.127h-4v3.8c0 3.386 4.309 5.08 6.829 2.687s.735-6.487-2.829-6.487m10.68-10.127h-10.68c-5.324.009-5.324 7.592 0 7.6h10.68c5.325-.008 5.325-7.591 0-7.6m-21.32-10.145h-10.68c-5.342-.008-5.342 7.608 0 7.6h10.68c5.325-.009 5.325-7.592 0-7.6m0-10.127c-5.324.008-5.324 7.592 0 7.6h4v-3.8c0-2.126-1.804-3.8-4-3.8'
})
Y('smugmug', {
  color: '#8cca1e',
  path: 'M0 0v64h64V0zm36.1 19.8c.2-1.3 1.3-2.6 3.2-2.8 2.4-.2 3.8 1.3 3.8 2.8 0 1.3-1.2 2.6-3.8 2.8-2.4.1-3.4-1.3-3.2-2.8m-13.6.4c.2-1.4 1.4-2.8 3.3-2.8 2.3 0 3.5 1.1 3.6 2.4.2 1.5-1.1 3.1-3.9 3.1-2.4.1-3.2-1.3-3-2.7M28.8 47c-10.9 0-12-17.5-6.9-17.5 12.1-.3 12.5-.3 19-1C51.7 27.4 39.2 47 28.8 47m11.5-15.4c-3.9 0-6.8.5-17.8.9-1.6.1-2.9 11.4 6.6 11.4 7.5 0 15.2-12.3 11.2-12.3'
})
Y('snapchat', {
  color: '#FFC91B',
  path: 'M0 0v64h64V0zm47.927 39.545c-.326.76-1.702 1.318-4.21 1.707-.083.113-.17.511-.223.754a11 11 0 0 1-.183.743c-.104.357-.367.554-.74.554h-.037a4 4 0 0 1-.723-.089 8.5 8.5 0 0 0-1.706-.181c-.397 0-.809.034-1.222.103-.809.135-1.496.62-2.293 1.184-1.139.805-2.43 1.718-4.392 1.718-.088 0-.171-.003-.234-.006a2 2 0 0 1-.162.006c-1.962 0-3.253-.912-4.393-1.718-.796-.562-1.483-1.048-2.292-1.183a7.5 7.5 0 0 0-1.223-.103c-.716 0-1.288.112-1.706.193-.278.055-.519.102-.723.102-.505 0-.701-.308-.776-.565-.077-.262-.131-.51-.183-.751-.053-.244-.14-.644-.224-.758-2.507-.389-3.884-.948-4.21-1.711a.9.9 0 0 1-.071-.298.664.664 0 0 1 .555-.692c4.349-.716 6.308-5.181 6.389-5.371l.015-.032c.232-.471.284-.866.154-1.172-.251-.592-1.177-.885-1.789-1.08-.17-.054-.331-.105-.464-.157-1.482-.585-1.688-1.258-1.601-1.719.122-.64.903-1.07 1.555-1.07q.284 0 .507.104c.557.261 1.053.394 1.472.394.314 0 .513-.075.622-.136l-.048-.779c-.136-2.173-.307-4.877.403-6.469 2.111-4.732 6.585-5.1 7.905-5.1l.554-.005.078-.001h.001c1.324 0 5.807.368 7.919 5.103.711 1.593.54 4.299.403 6.474l-.006.092-.042.685c.099.055.272.121.537.134.4-.018.863-.149 1.379-.391.219-.103.454-.124.613-.124.232 0 .468.045.667.128l.002.001c.592.212.965.638.974 1.117.011.609-.533 1.135-1.617 1.564-.132.052-.293.103-.465.158-.612.194-1.538.488-1.788 1.079-.13.306-.079.701.154 1.172l.015.032c.081.189 2.038 4.654 6.389 5.371a.664.664 0 0 1 .555.691.9.9 0 0 1-.071.298'
})
Y('soundcloud', {
  color: '#FF5700',
  path: 'M0 0v64h64V0zm18.5 36.3c0 .7-.6 1.2-1.2 1.2-.7 0-1.2-.6-1.2-1.2v-4.9c0-.6.6-1.1 1.2-1.1.7 0 1.2.5 1.2 1.1zm4.9 1.2c0 .7-.6 1.2-1.2 1.2s-1.2-.5-1.2-1.2V29c0-.6.6-1.1 1.2-1.1s1.2.5 1.2 1.1zm5 0c0 .7-.6 1.2-1.2 1.2-.7 0-1.2-.6-1.2-1.2V26.2c0-.6.6-1.1 1.2-1.1.7 0 1.2.5 1.2 1.1zm15.2 1.2H31.4c-.3 0-.5-.2-.5-.5V24.3c0-.3.1-.4.4-.5.9-.3 1.8-.5 2.8-.5 4 0 7.4 3.1 7.7 7.1.5-.2 1.1-.3 1.7-.3 2.4 0 4.4 2 4.4 4.4.1 2.3-1.9 4.2-4.3 4.2'
})
Y('spotify', {
  color: '#2EBD59',
  path: 'M39 37.7c-4.2-2.6-9.4-3.2-15.5-1.8-.5.1-.9.7-.8 1.2s.7.9 1.2.7q8.4-1.95 14.1 1.5c.5.3 1.1.1 1.4-.3.2-.4.1-1-.4-1.3m1.9-4.7c-4.9-3-12.2-3.9-18-2.1-.7.2-1 .9-.8 1.6s.9 1 1.6.8c5.1-1.5 11.6-.8 15.9 1.9.6.4 1.4.2 1.7-.4.4-.7.2-1.4-.4-1.8M0 0v64h64V0zm32 48c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16m11-20.4c-5.9-3.5-15.3-3.9-21-2.1-.8.2-1.2 1.1-1 1.9s1.1 1.2 1.9 1c4.9-1.5 13.4-1.2 18.6 1.9.7.4 1.6.2 2.1-.5.3-.8.1-1.8-.6-2.2'
})
Y('squarespace', {
  color: '#1C1C1C',
  path: 'M0 0v64h64V0zm39.6 21.1c.6.6.6 1.6 0 2.2s-1.6.6-2.2 0c-1.2-1.2-3.2-1.2-4.4 0l-9.8 9.8c-.6.6-1.6.6-2.2 0s-.6-1.6 0-2.2l9.8-9.8c2.5-2.4 6.4-2.4 8.8 0M17.8 36.4c-2.4-2.4-2.4-6.3 0-8.7l7.5-7.5c1.2-1.2 3.2-1.2 4.4 0L20 29.8c-1.2 1.2-1.2 3.2 0 4.4s3.2 1.2 4.4 0l9.8-9.8c.6-.6 1.6-.6 2.2 0s.6 1.6 0 2.2l-9.8 9.8c-2.5 2.4-6.4 2.4-8.8 0m6.6 6.5c-.6-.6-.6-1.6 0-2.2s1.6-.6 2.2 0c1.2 1.2 3.2 1.2 4.4 0l9.8-9.8c.6-.6 1.6-.6 2.2 0s.6 1.6 0 2.2l-9.8 9.8c-2.5 2.4-6.4 2.4-8.8 0m21.8-6.5-7.5 7.5c-1.2 1.2-3.2 1.2-4.4 0l9.6-9.6c1.2-1.2 1.2-3.2 0-4.4s-3.2-1.2-4.4 0l-9.8 9.8c-.6.6-1.6.6-2.2 0s-.6-1.6 0-2.2l9.8-9.8c2.4-2.4 6.3-2.4 8.7 0 2.6 2.3 2.6 6.3.2 8.7'
})
Y('substack', {
  color: '#ff6719',
  path: 'M0 0h64v64H0Zm20.098 18.477v3.195h23.805v-3.195zm0 6.075v3.24h23.805v-3.24zm0 6.075v14.895c.972-.28 1.95-1.042 2.835-1.536l5.94-3.317c.735-.411 1.472-.818 2.205-1.234.239-.136.644-.475.925-.47.278.005.681.346.919.482q1.03.588 2.07 1.157c2.094 1.149 4.162 2.343 6.256 3.492.809.445 1.754 1.221 2.655 1.426V30.627z'
})
Y('t.me', {
  color: '#49a9e9',
  path: 'M0 0v64h64V0zm11.887 33.477c3.73-2.055 7.894-3.77 11.785-5.497 6.695-2.824 13.414-5.597 20.203-8.18 1.324-.44 3.695-.87 3.93 1.087-.13 2.773-.653 5.527-1.012 8.281-.914 6.055-1.969 12.094-2.996 18.133-.356 2.008-2.875 3.05-4.488 1.761-3.871-2.613-7.778-5.207-11.598-7.882-1.254-1.274-.094-3.102 1.027-4.012 3.188-3.145 6.575-5.816 9.598-9.121.816-1.973-1.594-.313-2.39.2-4.368 3.007-8.63 6.202-13.235 8.847-2.352 1.297-5.094.187-7.445-.535-2.11-.871-5.2-1.75-3.38-3.082m0 0'
})
Y('stackoverflow', {
  color: '#ed803d',
  path: 'M64 0v64H0V0zM46.145 37.265H42.8v10.038H19.376V37.265H16.03V50.65h30.115zm-6.688 2.46L23.023 36.27l.69-3.287 16.435 3.456zm.964-4.234-15.224-7.09 1.418-3.045 15.224 7.09zm1.895-3.811L29.41 20.932l2.15-2.58 12.906 10.747zm-7.27-16.688 2.695-2.004 10.022 13.476-2.695 2.004zm4.407 28.965H22.722v-3.346h16.73z'
})
Y('telegram', {
  color: '#49a9e9',
  path: 'M0 0v64h64V0zm11.887 33.477c3.73-2.055 7.894-3.77 11.785-5.497 6.695-2.824 13.414-5.597 20.203-8.18 1.324-.44 3.695-.87 3.93 1.087-.13 2.773-.653 5.527-1.012 8.281-.914 6.055-1.969 12.094-2.996 18.133-.356 2.008-2.875 3.05-4.488 1.761-3.871-2.613-7.778-5.207-11.598-7.882-1.254-1.274-.094-3.102 1.027-4.012 3.188-3.145 6.575-5.816 9.598-9.121.816-1.973-1.594-.313-2.39.2-4.368 3.007-8.63 6.202-13.235 8.847-2.352 1.297-5.094.187-7.445-.535-2.11-.871-5.2-1.75-3.38-3.082m0 0'
})
Y('threads', {
  color: '#000000',
  path: 'M0 0v64h64V0zm32.28 15.75h.02c3.718.026 6.827.982 9.241 2.84 2.272 1.75 3.872 4.238 4.753 7.404l-2.763.771c-1.495-5.362-5.278-8.102-11.245-8.145-3.94.03-6.918 1.267-8.855 3.678-1.81 2.259-2.747 5.523-2.783 9.702.036 4.18.971 7.443 2.785 9.702 1.937 2.415 4.918 3.652 8.857 3.678 3.552-.026 5.902-.855 7.855-2.77 2.23-2.184 2.19-4.864 1.476-6.496-.42-.962-1.184-1.76-2.214-2.368-.26 1.83-.843 3.311-1.74 4.43-1.199 1.49-2.898 2.306-5.05 2.423-1.628.088-3.198-.295-4.414-1.085-1.44-.933-2.28-2.355-2.372-4.013-.088-1.612.553-3.094 1.801-4.173 1.193-1.03 2.87-1.636 4.852-1.75 1.46-.081 2.827-.016 4.088.192-.169-1.004-.506-1.803-1.013-2.378-.696-.793-1.77-1.196-3.194-1.206h-.04c-1.144 0-2.697.315-3.685 1.787l-2.379-1.595c1.326-1.97 3.477-3.056 6.064-3.056h.058c4.326.026 6.904 2.676 7.16 7.297q.22.093.435.19c2.018.95 3.494 2.387 4.271 4.159 1.079 2.466 1.18 6.486-2.097 9.694-2.505 2.45-5.543 3.559-9.852 3.588h-.02c-4.85-.033-8.577-1.63-11.083-4.75-2.226-2.78-3.377-6.644-3.416-11.486v-.024c.04-4.846 1.19-8.706 3.42-11.485 2.502-3.123 6.233-4.722 11.079-4.755m1.368 16.669q-.49 0-1.001.03c-2.487.14-4.038 1.28-3.95 2.901.091 1.7 1.967 2.49 3.771 2.393 1.658-.088 3.816-.735 4.18-5.025-.917-.198-1.92-.3-3-.3'
})
Y('tiktok', {
  color: '#000000',
  path: 'M0 0v64h64V0zm32.781 16h5.494c-.008 0-.064.526.075 1.34h-.008c.166.98.617 2.381 1.824 3.762a8.857 8.858 0 0 0 1.617 1.375 7 7 0 0 0 .631.367c1.405.7 2.777.913 3.453.84v5.457s-1.93-.081-3.361-.461c-1.996-.534-3.276-1.354-3.276-1.354s-.888-.587-.955-.627v11.274c0 .626-.164 2.194-.662 3.502a10.6 10.6 0 0 1-1.843 3.062s-1.227 1.52-3.381 2.541c-1.943.92-3.652.9-4.162.92 0 0-2.951.119-5.612-1.69l-.013-.013v.014a11.2 11.2 0 0 1-2.381-2.246c-.842-1.074-1.36-2.348-1.492-2.721v-.014c-.212-.634-.657-2.168-.59-3.648.106-2.609.983-4.216 1.215-4.616a10.8 10.8 0 0 1 2.351-2.902 10.2 10.2 0 0 1 7.867-2.3l-.006 5.595a4.6 4.6 0 0 0-1.427-.227c-2.56 0-4.637 2.09-4.637 4.668s2.076 4.666 4.637 4.666a4.6 4.6 0 0 0 2.273-.6 4.67 4.67 0 0 0 2.348-3.704v-.012a.2.2 0 0 0 .004-.047q.005-.054.006-.103c.012-.279.011-.563.011-.848z'
})
Y('twitch', {
  color: '#6441A5',
  path: 'M0 0v64h64V0zm47 35.8-7.6 7.6h-5.7l-3.8 3.8H26v-3.8h-7V23.1l1.9-5.1H47zm-17.8 7L33 39h7l4.5-4.5v-14h-21V39h5.7zm8.3-17.2H40v7.6h-2.5zm-7 0H33v7.6h-2.5z'
})
Y('tumblr', {
  color: '#2c4762',
  path: 'M0 0v64h64V0zm35.4 47c-6.5.1-9-4.7-9-8v-9.8h-3v-3.9c4.6-1.6 5.6-5.7 5.9-8.1 0-.2.1-.2.2-.2h4.4v7.6h6v4.5h-6v9.3c0 1.3.5 3 2.9 3 .8 0 1.9-.3 2.4-.5l1.4 4.3c-.5.8-3 1.8-5.2 1.8'
})
Y('twitter', {
  color: '#00aced',
  path: 'M0 0v64h64V0zm44.7 25.5v.8C44.7 35 38.1 45 26.1 45c-3.7 0-7.2-1.1-10.1-2.9.5.1 1 .1 1.6.1 3.1 0 5.9-1 8.2-2.8-2.9-.1-5.3-2-6.1-4.6.4.1.8.1 1.2.1.6 0 1.2-.1 1.7-.2-3-.6-5.3-3.3-5.3-6.4v-.1c.9.5 1.9.8 3 .8-1.8-1.2-2.9-3.2-2.9-5.5q0-1.8.9-3.3c3.2 4 8.1 6.6 13.5 6.9-.1-.5-.2-1-.2-1.5 0-3.6 2.9-6.6 6.6-6.6 1.9 0 3.6.8 4.8 2.1 1.5-.3 2.9-.8 4.2-1.6-.5 1.5-1.5 2.8-2.9 3.6 1.3-.2 2.6-.5 3.8-1-1 1.3-2.1 2.4-3.4 3.4'
})
Y('upwork', {
  color: '#3da800',
  path: 'M0 0h64v64H0Zm24.938 17.111h5.6c1.1 3.8 3.099 8.2 5.599 12.1 1.6-5.5 5.6-9 10.9-9 6.1 0 11.1 5.002 11.1 11.102 0 6.4-5 11.398-11.1 11.398-3 0-5.5-.8-7.7-2.2l-2.4 11.901h-5.7l3.5-16.3c-1.5-2.1-2.9-4.5-4-6.7v2.5c0 6.1-4.9 11-10.9 11s-10.9-4.9-10.9-11V17.211h5.4v14.602c0 2.9 2.4 5.298 5.3 5.298s5.3-2.398 5.3-5.298zm22.199 8.801c-4.1 0-5.4 4-5.8 6.4v.1l-.6 2.2c1.8 1.5 4.1 2.5 6.3 2.5 2.9 0 5.6-2.5 5.7-5.6 0-3.1-2.5-5.6-5.6-5.6'
})
Y('vevo', {
  color: '#ED1A3B',
  path: 'M0 0v64h64V0zm34.2 41.9c-1.4 2.1-2.9 3.1-5 3.1 0 0-3 .2-4.1-3.4L20 21h8.1l3 12.3c1.4-2.1 5.1-7.7 5.1-7.7 1.4-1.9 2.2-4.6 6.8-4.6h5z'
})
Y('vine', {
  color: '#00BF8F',
  path: 'M0 0v64h64V0zm38.4 21.5c-1.2 0-2.1 1.2-2.1 3.4 0 4.6 2.9 7.2 6.7 7.2.7 0 1.4-.1 2.2-.3v3.6c-1.3.3-2.5.4-3.6.4-2.5 5.3-7 9.8-8.6 10.7-1 .5-1.9.6-2.9-.1-1.9-1.1-8.9-6.9-11.2-25H24c1.3 10.9 4.4 16.5 7.9 20.7 1.9-1.9 3.7-4.4 5.2-7.3-3.4-1.7-5.5-5.5-5.5-10s2.6-7.9 7-7.9c4.3 0 6.6 2.7 6.6 7.3 0 1.7-.4 3.7-1 5.2-3.2.6-4.4-1.4-4.4-1.4.2-.8.6-2.1.6-3.3-.1-2.1-.9-3.2-2-3.2'
})
Y('vimeo', {
  color: '#1ab7ea',
  path: 'M0 0v64h64V0zm40.9 37c-4.1 5.3-7.5 8-10.4 8-1.7 0-3.2-1.6-4.4-4.8-.8-3-1.6-5.9-2.4-8.9-.9-3.2-1.9-4.8-2.9-4.8-.2 0-1 .5-2.4 1.4L17 26c1.5-1.3 2.9-2.6 4.4-3.9 2-1.7 3.5-2.6 4.4-2.7 2.3-.2 3.8 1.4 4.3 4.8q.9 5.55 1.2 6.9c.7 3.1 1.4 4.6 2.2 4.6.6 0 1.6-1 2.8-3 1.3-2 1.9-3.5 2-4.5.2-1.7-.5-2.6-2-2.6-.7 0-1.5.2-2.2.5 1.5-4.8 4.3-7.2 8.4-7 3.1.1 4.5 2.1 4.4 6 0 2.8-2.1 6.8-6 11.9'
})
Y('vk', {
  color: '#45668e',
  path: 'M0 0v64h64V0zm44.94 44.84h-.2c-2.17-.36-3.66-1.92-4.92-3.37-.72-.81-1.82-2.66-3.12-2.47-1.85.3-.93 3.52-1.71 4.9-.62 1.11-3.29.91-5.12.71-5.79-.62-8.75-3.77-11.35-7.14A64 64 0 0 1 11.6 26a10.6 10.6 0 0 1-1.51-4.49c.91-.81 2.47-.51 4.02-.51 1.31 0 3.36-.29 4.32.2.57.26 1.14 1.8 1.57 2.8a37 37 0 0 0 3.31 5.82c.56.81 1.41 2.35 2.41 2.14s1.06-2.63 1.1-4.18c0-1.77 0-4-.5-4.9S25 22 24.15 21.47c.73-1.49 2.72-1.63 5.12-1.63 2 0 4.84-.23 5.62 1.12s.25 3.85.2 5.71c-.06 2.09-.41 4.25 1 5.21 1.09-.12 1.68-1.2 2.31-2A28 28 0 0 0 41.72 24c.44-1 .91-2.65 1.71-3 1.21-.47 3.15-.1 4.92-.1 1.46 0 4.05-.41 4.52.61.39.85-.75 3-1.1 3.57a62 62 0 0 1-4.12 5.61c-.58.78-1.78 2-1.71 3.27.05.94 1 1.67 1.71 2.35a33 33 0 0 1 3.92 4.18c.47.62 1.5 2 1.4 2.76-.31 2.56-6.09.99-8.03 1.59'
})
Y('vsco', {
  color: '#83878A',
  path: 'M0 0v64h64V0zm18.5 34.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5S21 30.6 21 32c-.1 1.4-1.2 2.5-2.5 2.5m6.6 6.6c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5m.1-13.4c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5M32 48c-1.4 0-2.5-1.1-2.5-2.5S30.6 43 32 43s2.5 1.1 2.5 2.5S33.4 48 32 48m-2.5-16.1c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5m2.5-11c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5m6.7 1.8c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5m.1 18.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c-.1 1.4-1.2 2.5-2.5 2.5m6.7-6.7c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5S48 30.6 48 32s-1.1 2.5-2.5 2.5'
})
Y('wechat', {
  color: '#00c80f',
  path: 'M65.6 65.6H-1.6V-1.6h67.2zM49.738 46.043c2.846-2.061 4.662-5.107 4.662-8.498 0-6.207-6.043-11.244-13.492-11.244-7.453 0-13.494 5.037-13.494 11.244 0 6.213 6.041 11.246 13.494 11.246 1.537 0 3.025-.221 4.402-.615l.395-.059c.262 0 .498.078.717.207l2.955 1.707.26.082a.45.45 0 0 0 .451-.449l-.074-.328-.605-2.271-.047-.287a.9.9 0 0 1 .376-.735M25.793 13.887C16.85 13.887 9.6 19.93 9.6 27.383c0 4.066 2.182 7.723 5.596 10.197.275.195.453.518.453.879l-.055.344-.732 2.725-.086.393c0 .301.24.541.539.541l.311-.1 3.545-2.049c.27-.152.551-.248.861-.248l.475.068a19 19 0 0 0 5.287.742l.891-.021a10.3 10.3 0 0 1-.543-3.309c0-6.793 6.611-12.305 14.768-12.305l.879.021c-1.225-6.443-7.918-11.374-15.996-11.374m10.615 21.859a1.798 1.798 0 1 1-.001-3.6 1.798 1.798 0 0 1 .001 3.6m8.996 0a1.798 1.798 0 1 1-.001-3.6 1.798 1.798 0 0 1 .001 3.6M20.395 25.221a2.16 2.16 0 1 1 .002-4.318 2.16 2.16 0 0 1-.002 4.318m10.796 0c-1.193 0-2.158-.965-2.158-2.158s.965-2.158 2.158-2.158 2.158.965 2.158 2.158-.964 2.158-2.158 2.158'
})
Y('x', {
  color: '#000000',
  path: 'M0 0v64h64V0zm16 17.537h10.125l6.992 9.242 8.084-9.242h4.908L35.39 29.79 48 46.463h-9.875l-7.734-10.111-8.85 10.11h-4.908l11.465-13.105zm5.73 2.783 17.75 23.205h2.72L24.647 20.32z'
})
Y('whatsapp', {
  color: '#25D366',
  path: 'M0 0v64h64V0zm48 31.59c0 8.605-7.031 15.586-15.71 15.586-2.755 0-5.34-.703-7.595-1.942L16 48l2.836-8.363a15.43 15.43 0 0 1-2.254-8.047c0-8.61 7.031-15.59 15.707-15.59C40.97 16 48 22.98 48 31.59M32.29 18.484c-7.282 0-13.208 5.88-13.208 13.106 0 2.867.938 5.52 2.516 7.68l-1.649 4.867 5.074-1.61a13.2 13.2 0 0 0 7.27 2.164c7.281 0 13.207-5.875 13.207-13.101s-5.926-13.106-13.21-13.106m7.933 16.696c-.098-.16-.352-.258-.739-.45-.382-.187-2.277-1.113-2.629-1.242-.355-.125-.613-.191-.867.192-.258.383-.996 1.242-1.218 1.5-.227.254-.45.285-.836.093-.387-.191-1.625-.593-3.098-1.894-1.145-1.012-1.918-2.262-2.14-2.645-.223-.382-.024-.59.167-.78.176-.173.387-.446.578-.669.196-.223.258-.383.387-.637.129-.257.063-.48-.035-.671-.094-.192-.867-2.07-1.188-2.836s-.64-.637-.863-.637c-.226 0-.484-.031-.738-.031a1.4 1.4 0 0 0-1.027.476c-.356.383-1.348 1.309-1.348 3.188s1.379 3.695 1.57 3.949c.196.258 2.664 4.238 6.578 5.77 3.914 1.53 3.914 1.019 4.621.956.707-.066 2.278-.925 2.602-1.816.32-.894.32-1.66.223-1.816m0 0'
})
Y('xiaohongshu', {
  color: '#ff2741',
  path: 'M8.494-.006h47.784c4.552 0 8.596 3.953 8.715 8.5V56.28a8.91 8.91 90 0 1-8.717 8.702H8.509A8.92 8.92 90 0 1 .004 56.26V8.514C.114 4.038 4.018.12 8.494-.006m4.247 23.213c-.033 5.045-.016 10.092-.041 15.138a.533.533 90 0 1-.54.66c-.607.036-1.217.015-1.826.02a61 61 0 0 0 1.307 2.978c1.148-.038 2.458.201 3.438-.55.88-.656 1.162-1.82 1.145-2.87 0-5.125 0-10.253-.023-15.378a263 263 0 0 0-3.46.002m14.236-.228q-1.29 2.963-2.63 5.9c-.254.586-.56 1.363-.028 1.893.683.62 1.686.381 2.524.437-.581 1.467-1.346 2.861-1.836 4.364-.271.741.407 1.495 1.148 1.503 1.343.091 2.69 0 4.036.035.44-.982.881-1.962 1.313-2.95-.785 0-1.577.056-2.348-.099.835-2.096 1.825-4.125 2.71-6.196-1.083-.127-2.31.226-3.3-.196.483-1.625 1.361-3.115 1.98-4.696-1.192-.005-2.38-.013-3.568.005zm18.469.013v1.322h-2.33v3.536c.779 0 1.556 0 2.332.016q.03 1.523 0 3.066c-1.167.023-2.338 0-3.506.018a149 149 0 0 0 0 3.529c1.17.013 2.344 0 3.514 0v7.512h3.516v-7.507c1.711 0 3.42-.025 5.13 0 .602-.05 1.29.37 1.27 1.033a28 28 90 0 1 0 2.813.574.574 90 0 1-.538.607c-.978.07-1.958 0-2.938.033.432 1.015.85 2.03 1.34 3.033 1.613-.083 3.583.323 4.812-1.015 1.167-1.082.817-2.793.865-4.204-.073-1.485.29-3.163-.632-4.463-.784-1.102-2.198-1.401-3.473-1.424-.076-1.777.348-3.856-.96-5.3-1.218-1.367-3.18-1.372-4.866-1.306v-1.32c-1.193.013-2.366.015-3.536.02zM32.9 24.317v3.534h2.206v10.596c-1.053.018-2.11 0-3.163.013a315 315 0 0 0-1.61 3.528c3.93.016 7.87 0 11.79 0V38.46c-1.13 0-2.262 0-3.392-.013V27.843h2.214v-3.536c-2.676.005-5.36 0-8.045.01m23.19.325c-.985.746-.662 2.112-.705 3.175.657 0 1.317.036 1.975-.022 1.056-.097 1.85-1.328 1.426-2.323-.332-1.092-1.807-1.567-2.696-.83M6.86 27.848c-.178 2.315-.358 4.628-.526 6.943a5.6 5.6 90 0 1-.335 1.539 156 156 0 0 0 1.823 4.061c1.421-1.901 1.95-4.298 2.097-6.625.124-1.98.345-3.958.416-5.94-1.165.04-2.323.012-3.476.022m11.71 0 .508 6.44c.185 2.153.741 4.347 2.056 6.093a172 172 0 0 0 1.82-4.062 5.5 5.5 90 0 1-.355-1.546c-.167-2.307-.35-4.615-.528-6.923q-1.757-.01-3.508-.002zm4.357 13.884c1.797.53 3.7.167 5.546.266a295 295 0 0 0 1.612-3.536c-1.845-.071-3.724.193-5.534-.272q-.83 1.765-1.632 3.542zM48.94 27.86c.762.109 1.777-.31 2.359.304.096.927.025 1.859.035 2.793h-2.37q-.024-1.549-.024-3.097'
})
Y('xing', {
  color: '#0698A0',
  path: 'M1.008 0C.45 0 0 .45 0 1.01v62.11c0 .56.45 1.01 1.008 1.01h62.02c.56 0 1.009-.45 1.009-1.01V1.01c0-.56-.45-1.01-1.009-1.01ZM41.72 16.032h5.482c.327 0 .585.106.723.296.143.197.139.459-.012.714L35.898 35.145a.025.025 0 0 0 0 .032l7.65 11.91c.152.257.156.517.012.715-.138.19-.394.295-.721.295h-5.42c-.83 0-1.247-.47-1.516-.88l-7.71-12.056c.386-.58 12.074-18.248 12.074-18.248.291-.446.642-.88 1.452-.88m-22.794 6.334h5.425c.832 0 1.24.456 1.51.867l3.731 5.544-5.857 8.828c-.277.427-.668.893-1.48.893h-5.426c-.326 0-.571-.125-.71-.315-.142-.198-.15-.453 0-.709l5.766-8.672c.006-.01.006-.015 0-.025l-3.668-5.413c-.152-.258-.175-.513-.032-.71.138-.192.414-.288.74-.288'
})
Y('yandex', {
  color: '#fc3f1d',
  path: 'M0 0v64h64V0Zm18.656 16h5.91l7.248 15.793c2.124 4.604 3.05 6.998 3.05 12.293V48H29.46v-3.223c0-4.374-.507-6.539-2.262-10.314zm21.008 0h5.68L38.51 31.47h-5.586z'
})
Y('yelp', {
  color: '#B90C04',
  path: 'M0 0v64h64V0zm22.4 37.9q-.6 0-.9-.6c-.1-.3-.2-.7-.3-1.3-.2-1.7 0-4.2.5-5 .2-.4.6-.6 1-.6.3 0 .5.1 5.5 2.1l1.5.6c.5.2.9.7.8 1.4 0 .6-.4 1.1-.9 1.2l-2.1.7c-4.7 1.5-4.8 1.5-5.1 1.5M33 41c0 4.9 0 5-.1 5.3-.1.4-.4.6-.9.7-1.2.2-5.1-1.2-6-2.2q-.3-.3-.3-.6c0-.2 0-.3.1-.4.1-.2.2-.4 3.7-4.5l1-1.2c.3-.4 1-.6 1.5-.4.6.2.9.7.9 1.2.1-.1.1 2.1.1 2.1m-.8-10.2c-.3.1-1 .3-2-1.2 0 0-6.4-10.1-6.5-10.4s0-.7.3-1.1c1-1 6.1-2.4 7.5-2.1.4.1.7.4.9.8.1.4.7 9.8.8 11.9 0 1.8-.8 2-1 2.1m3.2.5 1.3-1.8c2.8-3.9 3-4.1 3.2-4.2.3-.2.7-.2 1.1 0 1.1.5 3.4 3.9 3.5 5.2 0 .4-.1.8-.5 1-.2.1-.4.2-5.7 1.5-.8.2-1.3.3-1.6.4-.5.1-1.1-.1-1.4-.6-.2-.5-.2-1.1.1-1.5m9.3 8.3c-.2 1.3-2.7 4.5-3.9 5-.4.2-.8.1-1.1-.1-.2-.2-.4-.5-3.2-5l-.8-1.3c-.3-.5-.3-1.1.1-1.6s.9-.6 1.4-.5l2.1.7c4.6 1.5 4.8 1.6 5 1.7.4.3.5.7.4 1.1'
})
Y('youtube', {
  color: '#ff3333',
  path: 'M0 0v64h64V0zm47 33.1c0 2.4-.3 4.9-.3 4.9s-.3 2.1-1.2 3c-1.1 1.2-2.4 1.2-3 1.3-4.2.2-10.5.3-10.5.3s-7.8-.1-10.2-.3c-.7-.1-2.2-.1-3.3-1.3-.9-.9-1.2-3-1.2-3s-.3-2.4-.3-4.9v-2.3c0-2.4.3-4.9.3-4.9s.3-2.1 1.2-3c1.1-1.2 2.4-1.2 3-1.3 4.2-.3 10.5-.3 10.5-.3s6.3 0 10.5.3c.6.1 1.9.1 3 1.3.9.9 1.2 3 1.2 3s.3 2.4.3 4.9zm-18.1 2.8 8.1-4.2-8.1-4.2z'
})
const iv = () => {
    const [e, t] = D.useState(''),
      [r, n] = D.useState(!1),
      [i, l] = D.useState(!1),
      a = ra(na),
      o = a.theme.colors.neutralMedium,
      s = a.theme.colors.spicyMustard,
      u = () => {
        t('Vielen Dank für deine Nachricht! Ich melde mich so schnell wie möglich zurück.'),
          n(!0),
          l(!1),
          setTimeout(() => {
            n(!1), t('')
          }, 1e4)
      },
      c = () => {
        t(
          x.jsxs('span', {
            children: [
              'Etwas ist schief gelaufen. Bitte versuche es später noch einmal oder sende mir',
              ' ',
              x.jsx('a', {
                href: 'mailto:lucademichieli@posteo.net',
                className: 'text-amber-50 underline',
                children: 'direkt eine Email.'
              })
            ]
          })
        ),
          l(!0),
          n(!1)
      }
    return x.jsx(Hn, {
      bgColor: 'bg-secondary',
      className: 'py-16',
      children: x.jsx('section', {
        id: 'contact',
        children: x.jsxs('div', {
          className: 'container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 text-textDark',
          children: [
            x.jsxs('div', {
              className: 'flex flex-col justify-center text-center md:text-left bg-secondaryLight p-6 rounded-3xl',
              children: [
                x.jsx('h2', {
                  className: 'text-3xl md:text-4xl  mb-4',
                  children: 'Interesse geweckt? Lass uns in Kontakt treten!'
                }),
                x.jsx('p', {
                  className: 'text-lg md:text-xl mb-6 ',
                  children:
                    'Möchtest du mehr erfahren oder eine Probestunde buchen? Fülle das Formular aus, um mit mir in Kontakt zu treten!'
                }),
                e &&
                  x.jsx('div', {
                    className: Kt(' text-lg p-6 rounded-3xl mb-4 w-full max-w-md mx-auto md:mx-0 border-2', {
                      'text-textLight bg-redWood': i,
                      'text-spicyMustard bg-neutralMedium': !i
                    }),
                    children: e
                  }),
                !i && !r && x.jsx(X6, { onSubmitSuccess: u, onSubmitError: c })
              ]
            }),
            x.jsxs('div', {
              className: 'flex flex-col justify-center items-center h-full',
              children: [
                x.jsx('div', {
                  className: 'relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg mb-6',
                  children: x.jsx('iframe', {
                    title: 'Google Maps',
                    src: 'https://www.google.com/maps/embed?pb=...',
                    width: '100%',
                    height: '100%',
                    style: { border: 0 },
                    allowFullScreen: '',
                    'aria-hidden': 'false',
                    tabIndex: '0'
                  })
                }),
                x.jsx(At, {
                  children: x.jsxs('div', {
                    className: 'flex flex-wrap justify-center items-center gap-4 mt-6',
                    children: [
                      x.jsx(Oa, {
                        url: 'https://whatsapp.com',
                        href: 'https://wa.me/2348100000000',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        bgColor: o,
                        fgColor: s,
                        label: 'Whatsapp Kontakt',
                        style: { width: '70px', height: '70px' },
                        className: 'rounded-full hover:border-2 hover:border-textLight'
                      }),
                      x.jsx(Oa, {
                        url: 'https://telegram.org',
                        href: 'https://t.me/lucademi',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        bgColor: o,
                        fgColor: s,
                        label: 'Telegram Kontakt',
                        style: { width: '70px', height: '70px' },
                        className: 'rounded-full hover:border-2 hover:border-textLight'
                      }),
                      x.jsx(Oa, {
                        url: 'https://www.instagram.com/',
                        href: 'https://www.instagram.com/luca_de_michieli',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        bgColor: o,
                        fgColor: s,
                        label: 'Mein Instagram Account',
                        style: { width: '70px', height: '70px' },
                        className: 'rounded-full hover:border-2 hover:border-textLight'
                      }),
                      x.jsx(Oa, {
                        url: 'https://www.soundcloud.com',
                        href: 'https://soundcloud.com/lucademichieliguitar',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        bgColor: o,
                        fgColor: s,
                        label: 'Mein Soundcloud Account',
                        style: { width: '70px', height: '70px' },
                        className: 'rounded-full hover:border-2 hover:border-textLight'
                      })
                    ]
                  })
                })
              ]
            })
          ]
        })
      })
    })
  },
  lv = () => {
    const [e, t] = D.useState(!0),
      n = ra(na).theme.colors.secondary,
      i = (a) => {
        t(a)
      },
      l = (a) => x.jsx(o5, { pricingPlan: a }, a.heading)
    return x.jsxs('div', {
      children: [
        x.jsx(Hn, {
          title: 'Preise mit und ohne Vertragsbindung',
          bgColor: 'bg-secondary',
          className: 'pb-12',
          children: x.jsx('section', {
            id: 'pricing',
            className: 'relative text-textLight pt-6',
            children: x.jsxs('div', {
              children: [
                x.jsx(At, {
                  children: x.jsxs('div', {
                    className: 'text-center mx-auto max-w-screen-md mb-8 lg:mb-12',
                    children: [
                      x.jsxs('p', {
                        className: 'mb-5 text-textLight sm:text-xl',
                        children: [
                          'Der Vertrag kann',
                          ' ',
                          x.jsx('a', {
                            href: n5,
                            target: '_blank',
                            rel: 'noreferrer',
                            className: 'underline',
                            children: 'hier'
                          }),
                          ' ',
                          'eingesehen werden.'
                        ]
                      }),
                      x.jsx(s5, {
                        isChecked: e,
                        onToggle: i,
                        activeLabel: 'mit Vertrag',
                        inactiveLabel: 'ohne Vertrag'
                      })
                    ]
                  })
                }),
                x.jsx(At, {
                  children: x.jsx('div', {
                    className: 'flex flex-wrap justify-center mt-10 gap-4 sm:gap-6 ',
                    children: e ? Z1.withContract.map(l) : Z1.withoutContract.map(l)
                  })
                })
              ]
            })
          })
        }),
        x.jsx(rs, {
          type: 'curveBottom',
          fillColor: n,
          backgroundColor: 'primary'
        })
      ]
    })
  },
  av = () => {
    const t = ra(na).theme.colors.primary
    return x.jsxs('div', {
      children: [
        x.jsx(Hn, {
          bgColor: 'bg-primary',
          children: x.jsx('section', {
            id: 'teaching',
            className: ' text-textLight pt-16',
            children: x.jsx('div', {
              className: 'container mx-auto px-8 md:px-20 pb-16',
              children: x.jsx('div', {
                className: 'gap-6 ',
                children: x.jsxs('div', {
                  className: 'flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-12',
                  children: [
                    x.jsx('div', {
                      className: 'w-full lg:w-1/2 max-h-[90vh] overflow-hidden rounded-lg shadow-xl',
                      children: x.jsx('img', {
                        src: r5,
                        alt: 'Guitar teacher illustration',
                        className: 'object-cover w-full h-full'
                      })
                    }),
                    x.jsx('div', {
                      className: 'w-full lg:w-1/2 flex items-center justify-center text-center lg:text-justify text-xl mt-6 lg:mt-0',
                      children: x.jsxs('div', {
                        children: [
                          x.jsx(At, {
                            children: x.jsx('h1', {
                              className: 'text-4xl sm:text-5xl  text-textLight pb-8',
                              children: 'Gitarrenunterricht'
                            })
                          }),
                          x.jsx(At, {
                            children: x.jsx('p', {
                              className: 'mb-6',
                              children:
                                'Du möchtest das Gitarrespielen lernen oder dein Spiel auf das nächste Level bringen? In meinem Unterricht geht es vor allem darum, dir zu helfen, deine musikalischen Ziele zu erreichen. Ich gehe auf deine Wünsche ein – ob du ein bestimmtes Stück spielen möchtest oder einfach die Grundlagen der Gitarre erlernen willst. Gemeinsam schaffen wir eine individuelle Lernreise, die auf deine Stärken und Interessen abgestimmt ist.'
                            })
                          }),
                          x.jsx(At, {
                            children: x.jsx('p', {
                              children:
                                'Mein Unterricht ist nicht nur praxisorientiert, sondern vermittelt dir auch ein tiefes Verständnis für Musiktheorie und Harmonielehre. So wirst du nicht nur technische Fähigkeiten am Instrument entwickeln, sondern auch lernen, Musik intuitiv zu verstehen und kreativ zu gestalten. Ich lege großen Wert darauf, dass du die Freude an der Musik entdeckst und selbstbewusst deine Lieblingsstücke spielen kannst.'
                            })
                          })
                        ]
                      })
                    })
                  ]
                })
              })
            })
          })
        }),
        x.jsx(rs, {
          type: 'shapeBottom',
          fillColor: t,
          backgroundColor: 'secondary'
        })
      ]
    })
  },
  ov = () =>
    x.jsx('section', {
      id: 'welcome',
      className: 'flex items-center justify-center text-center text-textLight py-16 sm:py-24 lg:py-32 z-10',
      children: x.jsx('div', {
        className: 'w-full px-4',
        children: x.jsxs('div', {
          className: 'p-6 rounded-lg bg-textDark bg-opacity-40',
          children: [
            x.jsx('h2', {
              className: 'text-3xl sm:text-4xl lg:text-5xl  mb-4 zoom-in',
              children: 'Entdecke die Welt der Gitarre – Dein musikalischer Weg beginnt hier!'
            }),
            x.jsx('p', {
              className: 'text-lg sm:text-xl zoom-in',
              children:
                'Egal, ob du gerade erst anfängst oder deine Fähigkeiten weiter ausbauen möchtest, hier findest du die Unterstützung, die du brauchst. Lass uns gemeinsam deine musikalischen Ziele erreichen!'
            })
          ]
        })
      })
    }),
  sv = () => {
    const t = ra(na).theme.colors.primary
    return x.jsxs('div', {
      children: [
        x.jsx(Hn, {
          title: 'Meine Musik',
          bgColor: 'bg-primary',
          children: x.jsx('section', {
            className: ' text-textLight min-h-screen flex flex-col items-center justify-between',
            children: x.jsxs('div', {
              className: 'pb-12 md:pb-32 container flex flex-col lg:flex-row items-center justify-center px-8 md:px-20 gap-8 flex-grow',
              children: [
                x.jsx('div', {
                  className: 'w-full lg:w-1/2 pb-6',
                  children: x.jsx('div', {
                    className: 'relative pb-[56.25%] w-full',
                    children: x.jsx('iframe', {
                      className: 'absolute top-0 left-0 w-full h-full rounded-lg shadow-lg',
                      src: 'https://www.youtube.com/embed/iZ-P3zDm1iE',
                      title: 'Luca - Gitarrenstück',
                      allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
                      allowFullScreen: !0
                    })
                  })
                }),
                x.jsx('div', {
                  className: 'w-full lg:w-1/2 pb-6',
                  children: x.jsx('div', {
                    className: 'relative pb-[56.25%] w-full',
                    children: x.jsx('iframe', {
                      className: 'absolute top-0 left-0 w-full h-full rounded-lg shadow-lg',
                      src: 'https://www.youtube.com/embed?list=PLln4ZKDJpfJWMyEXNsYuTLgbNlm5uvdvk',
                      title: 'Luca - Musik Playlist',
                      allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
                      allowFullScreen: !0
                    })
                  })
                })
              ]
            })
          })
        }),
        x.jsx(rs, {
          type: 'opaqueWavesBottom',
          fillColor: t,
          backgroundColor: 'secondary'
        })
      ]
    })
  },
  uv = () =>
    x.jsx(qc, {
      children: x.jsx(Hn, {
        title: 'Impressum',
        bgColor: 'bg-secondary pt-8',
        children: x.jsx('section', {
          className: ' min-h-screen py-20 md:px-20 ',
          children: x.jsx(At, {
            children: x.jsxs('div', {
              className: 'max-w-4xl mx-auto p-12 bg-secondaryLight rounded-3xl text-textDark',
              children: [
                x.jsx('p', {
                  className: 'mb-4',
                  children: 'Angaben gemäß § 5 DDG'
                }),
                x.jsx('p', { children: 'Luca De Michieli' }),
                x.jsx('p', { children: 'Lepsiusstr. 6' }),
                x.jsx('p', { children: '12163 Berlin' }),
                x.jsxs('div', {
                  className: 'mb-4',
                  children: [
                    x.jsx('span', {
                      className: 'font-bold',
                      children: 'Vertreten durch:'
                    }),
                    x.jsx('p', { children: 'Luca De Michieli' })
                  ]
                }),
                x.jsxs('div', {
                  className: 'mb-4',
                  children: [
                    x.jsx('span', {
                      className: 'font-bold',
                      children: 'Kontakt:'
                    }),
                    x.jsx('p', { children: 'Telefon: +49 157 53366391' })
                  ]
                }),
                x.jsxs('div', {
                  children: [
                    x.jsx('span', {
                      className: 'font-bold',
                      children: 'E-Mail: '
                    }),
                    x.jsx('a', {
                      href: 'mailto:lucademichieli@posteo.net',
                      className: 'hover:underline',
                      children: 'lucademichieli@posteo.net'
                    })
                  ]
                })
              ]
            })
          })
        })
      })
    }),
  cv = () =>
    x.jsx(qc, {
      children: x.jsx(Hn, {
        title: 'Datenschutzerklärung',
        bgColor: 'bg-secondary pt-8',
        children: x.jsx('section', {
          className: 'text-textDark min-h-screen py-20 md:px-20',
          children: x.jsx(At, {
            children: x.jsxs('p', {
              className: 'mb-4',
              children: [
                'Icons made from',
                ' ',
                x.jsx('a', {
                  href: 'https://www.onlinewebfonts.com/icon',
                  target: '_blank',
                  rel: 'noreferrer',
                  className: 'underline text-blue-600',
                  children: 'svg icons'
                }),
                ' ',
                'is licensed by CC BY 4.0'
              ]
            })
          })
        })
      })
    }),
  dv = F4([
    { path: '/', element: x.jsx(qc, {}) },
    { path: '/impressum', element: x.jsx(uv, {}) },
    { path: '/privacy', element: x.jsx(cv, {}) }
  ])
b2(document.getElementById('root')).render(x.jsxs(D.StrictMode, { children: [x.jsx(K4, { router: dv }), ' '] }))
