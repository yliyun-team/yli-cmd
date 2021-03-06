(function (t) {
        var ender = 1;

        function e(t, e) {
            return function (n) {
                return u(t.call(this, n), e)
            }
        }

        function n(t, e) {
            return function (n) {
                return this.lang().ordinal(t.call(this, n), e)
            }
        }

        function s() {
        }

        function r(t) {
            a(this, t)
        }

        function i(t) {
            var e = this._data = {}, n = t.years || t.year || t.y || 0, s = t.months || t.month || t.M || 0, r = t.weeks || t.week || t.w || 0, i = t.days || t.day || t.d || 0, a = t.hours || t.hour || t.h || 0, u = t.minutes || t.minute || t.m || 0, d = t.seconds || t.second || t.s || 0, h = t.milliseconds || t.millisecond || t.ms || 0;
            this._milliseconds = h + 1e3 * d + 6e4 * u + 36e5 * a, this._days = i + 7 * r, this._months = s + 12 * n, e.milliseconds = h % 1e3, d += o(h / 1e3), e.seconds = d % 60, u += o(d / 60), e.minutes = u % 60, a += o(u / 60), e.hours = a % 24, i += o(a / 24), i += 7 * r, e.days = i % 30, s += o(i / 30), e.months = s % 12, n += o(s / 12), e.years = n
        }

        function a(t, e) {
            for (var n in e)e.hasOwnProperty(n) && (t[n] = e[n]);
            return t
        }

        function o(t) {
            return 0 > t ? Math.ceil(t) : Math.floor(t)
        }

        function u(t, e) {
            for (var n = t + ""; e > n.length;)n = "0" + n;
            return n
        }

        function d(t, e, n) {
            var s, r = e._milliseconds, i = e._days, a = e._months;
            r && t._d.setTime(+t + r * n), i && t.date(t.date() + i * n), a && (s = t.date(), t.date(1).month(t.month() + a * n).date(Math.min(s, t.daysInMonth())))
        }

        function h(t) {
            return"[object Array]" === Object.prototype.toString.call(t)
        }

        function c(t, e) {
            var n, s = Math.min(t.length, e.length), r = Math.abs(t.length - e.length), i = 0;
            for (n = 0; s > n; n++)~~t[n] !== ~~e[n] && i++;
            return i + r
        }

        function f(t) {
            return t ? se[t] || t.toLowerCase().replace(/(.)s$/, "$1") : t
        }

        function l(t, e) {
            return e.abbr = t, U[t] || (U[t] = new s), U[t].set(e), U[t]
        }

        function _(t) {
            return t ? (!U[t] && x && require("./lang/" + t), U[t]) : C.fn._lang
        }

        function m(t) {
            return t.match(/\[.*\]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
        }

        function y(t) {
            var e, n, s = t.match(Z);
            for (e = 0, n = s.length; n > e; e++)s[e] = oe[s[e]] ? oe[s[e]] : m(s[e]);
            return function (r) {
                var i = "";
                for (e = 0; n > e; e++)i += "function" == typeof s[e].call ? s[e].call(r, t) : s[e];
                return i
            }
        }

        function M(t, e) {
            function n(e) {
                return t.lang().longDateFormat(e) || e
            }

            for (var s = 5; s-- && E.test(e);)e = e.replace(E, n);
            return re[e] || (re[e] = y(e)), re[e](t)
        }

        function g(t) {
            switch (t) {
                case"DDDD":
                    return N;
                case"YYYY":
                    return I;
                case"YYYYY":
                    return X;
                case"S":
                case"SS":
                case"SSS":
                case"DDD":
                    return V;
                case"MMM":
                case"MMMM":
                case"dd":
                case"ddd":
                case"dddd":
                case"a":
                case"A":
                    return $;
                case"X":
                    return q;
                case"Z":
                case"ZZ":
                    return R;
                case"T":
                    return j;
                case"MM":
                case"DD":
                case"YY":
                case"HH":
                case"hh":
                case"mm":
                case"ss":
                case"M":
                case"D":
                case"d":
                case"H":
                case"h":
                case"m":
                case"s":
                    return J;
                default:
                    return RegExp(t.replace("\\", ""))
            }
        }

        function D(t, e, n) {
            var s, r = n._a;
            switch (t) {
                case"M":
                case"MM":
                    r[1] = null == e ? 0 : ~~e - 1;
                    break;
                case"MMM":
                case"MMMM":
                    s = _(n._l).monthsParse(e), null != s ? r[1] = s : n._isValid = !1;
                    break;
                case"D":
                case"DD":
                case"DDD":
                case"DDDD":
                    null != e && (r[2] = ~~e);
                    break;
                case"YY":
                    r[0] = ~~e + (~~e > 68 ? 1900 : 2e3);
                    break;
                case"YYYY":
                case"YYYYY":
                    r[0] = ~~e;
                    break;
                case"a":
                case"A":
                    n._isPm = "pm" === (e + "").toLowerCase();
                    break;
                case"H":
                case"HH":
                case"h":
                case"hh":
                    r[3] = ~~e;
                    break;
                case"m":
                case"mm":
                    r[4] = ~~e;
                    break;
                case"s":
                case"ss":
                    r[5] = ~~e;
                    break;
                case"S":
                case"SS":
                case"SSS":
                    r[6] = ~~(1e3 * ("0." + e));
                    break;
                case"X":
                    n._d = new Date(1e3 * parseFloat(e));
                    break;
                case"Z":
                case"ZZ":
                    n._useUTC = !0, s = (e + "").match(te), s && s[1] && (n._tzh = ~~s[1]), s && s[2] && (n._tzm = ~~s[2]), s && "+" === s[0] && (n._tzh = -n._tzh, n._tzm = -n._tzm)
            }
            null == e && (n._isValid = !1)
        }

        function Y(t) {
            var e, n, s = [];
            if (!t._d) {
                for (e = 0; 7 > e; e++)t._a[e] = s[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
                s[3] += t._tzh || 0, s[4] += t._tzm || 0, n = new Date(0), t._useUTC ? (n.setUTCFullYear(s[0], s[1], s[2]), n.setUTCHours(s[3], s[4], s[5], s[6])) : (n.setFullYear(s[0], s[1], s[2]), n.setHours(s[3], s[4], s[5], s[6])), t._d = n
            }
        }

        function w(t) {
            var e, n, s = t._f.match(Z), r = t._i;
            for (t._a = [], e = 0; s.length > e; e++)n = (g(s[e]).exec(r) || [])[0], n && (r = r.slice(r.indexOf(n) + n.length)), oe[s[e]] && D(s[e], n, t);
            t._isPm && 12 > t._a[3] && (t._a[3] += 12), t._isPm === !1 && 12 === t._a[3] && (t._a[3] = 0), Y(t)
        }

        function p(t) {
            var e, n, s, i, o, u = 99;
            for (i = t._f.length; i > 0; i--) {
                if (e = a({}, t), e._f = t._f[i - 1], w(e), n = new r(e), n.isValid()) {
                    s = n;
                    break
                }
                o = c(e._a, n.toArray()), u > o && (u = o, s = n)
            }
            a(t, s)
        }

        function k(t) {
            var e, n = t._i;
            if (B.exec(n)) {
                for (t._f = "YYYY-MM-DDT", e = 0; 4 > e; e++)if (Q[e][1].exec(n)) {
                    t._f += Q[e][0];
                    break
                }
                R.exec(n) && (t._f += " Z"), w(t)
            } else t._d = new Date(n)
        }

        function v(e) {
            var n = e._i, s = A.exec(n);
            n === t ? e._d = new Date : s ? e._d = new Date(+s[1]) : "string" == typeof n ? k(e) : h(n) ? (e._a = n.slice(0), Y(e)) : e._d = n instanceof Date ? new Date(+n) : new Date(n)
        }

        function T(t, e, n, s, r) {
            return r.relativeTime(e || 1, !!n, t, s)
        }

        function S(t, e, n) {
            var s = P(Math.abs(t) / 1e3), r = P(s / 60), i = P(r / 60), a = P(i / 24), o = P(a / 365), u = 45 > s && ["s", s] || 1 === r && ["m"] || 45 > r && ["mm", r] || 1 === i && ["h"] || 22 > i && ["hh", i] || 1 === a && ["d"] || 25 >= a && ["dd", a] || 45 >= a && ["M"] || 345 > a && ["MM", P(a / 30)] || 1 === o && ["y"] || ["yy", o];
            return u[2] = e, u[3] = t > 0, u[4] = n, T.apply({}, u)
        }

        function b(t, e, n) {
            var s, r = n - e, i = n - t.day();
            return i > r && (i -= 7), r - 7 > i && (i += 7), s = C(t).add("d", i), {week: Math.ceil(s.dayOfYear() / 7), year: s.year()}
        }

        function F(t) {
            var e = t._i, n = t._f;
            return null === e || "" === e ? null : ("string" == typeof e && (t._i = e = _().preparse(e)), C.isMoment(e) ? (t = a({}, e), t._d = new Date(+e._d)) : n ? h(n) ? p(t) : w(t) : v(t), new r(t))
        }

        function L(t, e) {
            C.fn[t] = C.fn[t + "s"] = function (t) {
                var n = this._isUTC ? "UTC" : "";
                return null != t ? (this._d["set" + n + e](t), this) : this._d["get" + n + e]()
            }
        }

        function H(t) {
            C.duration.fn[t] = function () {
                return this._data[t]
            }
        }

        function O(t, e) {
            C.duration.fn["as" + t] = function () {
                return+this / e
            }
        }

        for (var C, z, W = "2.0.0", P = Math.round, U = {}, x = "undefined" != typeof module && module.exports, A = /^\/?Date\((\-?\d+)/i, G = /(\-)?(\d*)?\.?(\d+)\:(\d+)\:(\d+)\.?(\d{3})?/, Z = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g, E = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, J = /\d\d?/, V = /\d{1,3}/, N = /\d{3}/, I = /\d{1,4}/, X = /[+\-]?\d{1,6}/, $ = /[0-9]*[a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, R = /Z|[\+\-]\d\d:?\d\d/i, j = /T/i, q = /[\+\-]?\d+(\.\d{1,3})?/, B = /^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/, K = "YYYY-MM-DDTHH:mm:ssZ", Q = [
            ["HH:mm:ss.S", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/],
            ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
            ["HH:mm", /(T| )\d\d:\d\d/],
            ["HH", /(T| )\d\d/]
        ], te = /([\+\-]|\d\d)/gi, ee = "Date|Hours|Minutes|Seconds|Milliseconds".split("|"), ne = {Milliseconds: 1, Seconds: 1e3, Minutes: 6e4, Hours: 36e5, Days: 864e5, Months: 2592e6, Years: 31536e6}, se = {ms: "millisecond", s: "second", m: "minute", h: "hour", d: "day", w: "week", M: "month", y: "year"}, re = {}, ie = "DDD w W M D d".split(" "), ae = "M D H h m s w W".split(" "), oe = {M: function () {
            return this.month() + 1
        }, MMM: function (t) {
            return this.lang().monthsShort(this, t)
        }, MMMM: function (t) {
            return this.lang().months(this, t)
        }, D: function () {
            return this.date()
        }, DDD: function () {
            return this.dayOfYear()
        }, d: function () {
            return this.day()
        }, dd: function (t) {
            return this.lang().weekdaysMin(this, t)
        }, ddd: function (t) {
            return this.lang().weekdaysShort(this, t)
        }, dddd: function (t) {
            return this.lang().weekdays(this, t)
        }, w: function () {
            return this.week()
        }, W: function () {
            return this.isoWeek()
        }, YY: function () {
            return u(this.year() % 100, 2)
        }, YYYY: function () {
            return u(this.year(), 4)
        }, YYYYY: function () {
            return u(this.year(), 5)
        }, gg: function () {
            return u(this.weekYear() % 100, 2)
        }, gggg: function () {
            return this.weekYear()
        }, ggggg: function () {
            return u(this.weekYear(), 5)
        }, GG: function () {
            return u(this.isoWeekYear() % 100, 2)
        }, GGGG: function () {
            return this.isoWeekYear()
        }, GGGGG: function () {
            return u(this.isoWeekYear(), 5)
        }, e: function () {
            return this.weekday()
        }, E: function () {
            return this.isoWeekday()
        }, a: function () {
            return this.lang().meridiem(this.hours(), this.minutes(), !0)
        }, A: function () {
            return this.lang().meridiem(this.hours(), this.minutes(), !1)
        }, H: function () {
            return this.hours()
        }, h: function () {
            return this.hours() % 12 || 12
        }, m: function () {
            return this.minutes()
        }, s: function () {
            return this.seconds()
        }, S: function () {
            return~~(this.milliseconds() / 100)
        }, SS: function () {
            return u(~~(this.milliseconds() / 10), 2)
        }, SSS: function () {
            return u(this.milliseconds(), 3)
        }, Z: function () {
            var t = -this.zone(), e = "+";
            return 0 > t && (t = -t, e = "-"), e + u(~~(t / 60), 2) + ":" + u(~~t % 60, 2)
        }, ZZ: function () {
            var t = -this.zone(), e = "+";
            return 0 > t && (t = -t, e = "-"), e + u(~~(10 * t / 6), 4)
        }, X: function () {
            return this.unix()
        }}; ie.length;)z = ie.pop(), oe[z + "o"] = n(oe[z], z);
        for (; ae.length;)z = ae.pop(), oe[z + z] = e(oe[z], 2);
        for (oe.DDDD = e(oe.DDD, 3), s.prototype = {set: function (t) {
            var e, n;
            for (n in t)e = t[n], "function" == typeof e ? this[n] = e : this["_" + n] = e
        }, _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), months: function (t) {
            return this._months[t.month()]
        }, _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), monthsShort: function (t) {
            return this._monthsShort[t.month()]
        }, monthsParse: function (t) {
            var e, n, s;
            for (this._monthsParse || (this._monthsParse = []), e = 0; 12 > e; e++)if (this._monthsParse[e] || (n = C([2e3, e]), s = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[e] = RegExp(s.replace(".", ""), "i")), this._monthsParse[e].test(t))return e
        }, _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdays: function (t) {
            return this._weekdays[t.day()]
        }, _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysShort: function (t) {
            return this._weekdaysShort[t.day()]
        }, _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), weekdaysMin: function (t) {
            return this._weekdaysMin[t.day()]
        }, weekdaysParse: function (t) {
            var e, n, s;
            for (this._weekdaysParse || (this._weekdaysParse = []), e = 0; 7 > e; e++)if (this._weekdaysParse[e] || (n = C([2e3, 1]).day(e), s = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[e] = RegExp(s.replace(".", ""), "i")), this._weekdaysParse[e].test(t))return e
        }, _longDateFormat: {LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D YYYY", LLL: "MMMM D YYYY LT", LLLL: "dddd, MMMM D YYYY LT"}, longDateFormat: function (t) {
            var e = this._longDateFormat[t];
            return!e && this._longDateFormat[t.toUpperCase()] && (e = this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (t) {
                return t.slice(1)
            }), this._longDateFormat[t] = e), e
        }, meridiem: function (t, e, n) {
            return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
        }, _calendar: {sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L"}, calendar: function (t, e) {
            var n = this._calendar[t];
            return"function" == typeof n ? n.apply(e) : n
        }, _relativeTime: {future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years"}, relativeTime: function (t, e, n, s) {
            var r = this._relativeTime[n];
            return"function" == typeof r ? r(t, e, n, s) : r.replace(/%d/i, t)
        }, pastFuture: function (t, e) {
            var n = this._relativeTime[t > 0 ? "future" : "past"];
            return"function" == typeof n ? n(e) : n.replace(/%s/i, e)
        }, ordinal: function (t) {
            return this._ordinal.replace("%d", t)
        }, _ordinal: "%d", preparse: function (t) {
            return t
        }, postformat: function (t) {
            return t
        }, week: function (t) {
            return b(t, this._week.dow, this._week.doy).week
        }, _week: {dow: 0, doy: 6}}, C = function (t, e, n) {
            return F({_i: t, _f: e, _l: n, _isUTC: !1})
        }, C.utc = function (t, e, n) {
            return F({_useUTC: !0, _isUTC: !0, _l: n, _i: t, _f: e})
        }, C.unix = function (t) {
            return C(1e3 * t)
        }, C.duration = function (t, e) {
            var n, s, r = C.isDuration(t), a = "number" == typeof t, o = r ? t._data : a ? {} : t, u = G.exec(t);
            return a ? e ? o[e] = t : o.milliseconds = t : u && (n = "-" === u[1] ? -1 : 1, o = {y: 0, d: ~~u[2] * n, h: ~~u[3] * n, m: ~~u[4] * n, s: ~~u[5] * n, ms: ~~u[6] * n}), s = new i(o), r && t.hasOwnProperty("_lang") && (s._lang = t._lang), s
        }, C.version = W, C.defaultFormat = K, C.lang = function (e, n) {
            return e ? (n ? l(e, n) : U[e] || _(e), C.duration.fn._lang = C.fn._lang = _(e), t) : C.fn._lang._abbr
        }, C.langData = function (t) {
            return t && t._lang && t._lang._abbr && (t = t._lang._abbr), _(t)
        }, C.isMoment = function (t) {
            return t instanceof r
        }, C.isDuration = function (t) {
            return t instanceof i
        }, C.fn = r.prototype = {clone: function () {
            return C(this)
        }, valueOf: function () {
            return+this._d
        }, unix: function () {
            return Math.floor(+this._d / 1e3)
        }, toString: function () {
            return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        }, toDate: function () {
            return this._d
        }, toJSON: function () {
            return M(C(this).utc(), "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        }, toArray: function () {
            var t = this;
            return[t.year(), t.month(), t.date(), t.hours(), t.minutes(), t.seconds(), t.milliseconds()]
        }, isValid: function () {
            return null == this._isValid && (this._isValid = this._a ? !c(this._a, (this._isUTC ? C.utc(this._a) : C(this._a)).toArray()) : !isNaN(this._d.getTime())), !!this._isValid
        }, utc: function () {
            return this._isUTC = !0, this
        }, local: function () {
            return this._isUTC = !1, this
        }, format: function (t) {
            var e = M(this, t || C.defaultFormat);
            return this.lang().postformat(e)
        }, add: function (t, e) {
            var n;
            return n = "string" == typeof t ? C.duration(+e, t) : C.duration(t, e), d(this, n, 1), this
        }, subtract: function (t, e) {
            var n;
            return n = "string" == typeof t ? C.duration(+e, t) : C.duration(t, e), d(this, n, -1), this
        }, diff: function (t, e, n) {
            var s, r, i = this._isUTC ? C(t).utc() : C(t).local(), a = 6e4 * (this.zone() - i.zone());
            return e = f(e), "year" === e || "month" === e ? (s = 432e5 * (this.daysInMonth() + i.daysInMonth()), r = 12 * (this.year() - i.year()) + (this.month() - i.month()), r += (this - C(this).startOf("month") - (i - C(i).startOf("month"))) / s, "year" === e && (r /= 12)) : (s = this - i - a, r = "second" === e ? s / 1e3 : "minute" === e ? s / 6e4 : "hour" === e ? s / 36e5 : "day" === e ? s / 864e5 : "week" === e ? s / 6048e5 : s), n ? r : o(r)
        }, from: function (t, e) {
            return C.duration(this.diff(t)).lang(this.lang()._abbr).humanize(!e)
        }, fromNow: function (t) {
            return this.from(C(), t)
        }, calendar: function () {
            var t = this.diff(C().startOf("day"), "days", !0), e = -6 > t ? "sameElse" : -1 > t ? "lastWeek" : 0 > t ? "lastDay" : 1 > t ? "sameDay" : 2 > t ? "nextDay" : 7 > t ? "nextWeek" : "sameElse";
            return this.format(this.lang().calendar(e, this))
        }, isLeapYear: function () {
            var t = this.year();
            return 0 === t % 4 && 0 !== t % 100 || 0 === t % 400
        }, isDST: function () {
            return this.zone() < C([this.year()]).zone() || this.zone() < C([this.year(), 5]).zone()
        }, day: function (t) {
            var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != t ? "string" == typeof t && (t = this.lang().weekdaysParse(t), "number" != typeof t) ? this : this.add({d: t - e}) : e
        }, month: function (t) {
            var e = this._isUTC ? "UTC" : "";
            return null != t ? "string" == typeof t && (t = this.lang().monthsParse(t), "number" != typeof t) ? this : (this._d["set" + e + "Month"](t), this) : this._d["get" + e + "Month"]()
        }, startOf: function (t) {
            switch (t = f(t)) {
                case"year":
                    this.month(0);
                case"month":
                    this.date(1);
                case"week":
                case"day":
                    this.hours(0);
                case"hour":
                    this.minutes(0);
                case"minute":
                    this.seconds(0);
                case"second":
                    this.milliseconds(0)
            }
            return"week" === t && this.day(0), this
        }, endOf: function (t) {
            return this.startOf(t).add(t, 1).subtract("ms", 1)
        }, isAfter: function (e, n) {
            return n = n !== t ? n : "millisecond", +this.clone().startOf(n) > +C(e).startOf(n)
        }, isBefore: function (e, n) {
            return n = n !== t ? n : "millisecond", +this.clone().startOf(n) < +C(e).startOf(n)
        }, isSame: function (e, n) {
            return n = n !== t ? n : "millisecond", +this.clone().startOf(n) === +C(e).startOf(n)
        }, zone: function () {
            return this._isUTC ? 0 : this._d.getTimezoneOffset()
        }, daysInMonth: function () {
            return C.utc([this.year(), this.month() + 1, 0]).date()
        }, dayOfYear: function (t) {
            var e = P((C(this).startOf("day") - C(this).startOf("year")) / 864e5) + 1;
            return null == t ? e : this.add("d", t - e)
        }, weekYear: function (t) {
            var e = b(this, this.lang()._week.dow, this.lang()._week.doy).year;
            return null == t ? e : this.add("y", t - e)
        }, isoWeekYear: function (t) {
            var e = b(this, 1, 4).year;
            return null == t ? e : this.add("y", t - e)
        }, week: function (t) {
            var e = this.lang().week(this);
            return null == t ? e : this.add("d", 7 * (t - e))
        }, isoWeek: function (t) {
            var e = b(this, 1, 4).week;
            return null == t ? e : this.add("d", 7 * (t - e))
        }, weekday: function (t) {
            var e = (this._d.getDay() + 7 - this.lang()._week.dow) % 7;
            return null == t ? e : this.add("d", t - e)
        }, isoWeekday: function (t) {
            var e = (this._d.getDay() + 6) % 7;
            return null == t ? e : this.add("d", t - e)
        }, lang: function (e) {
            return e === t ? this._lang : (this._lang = _(e), this)
        }}, z = 0; ee.length > z; z++)L(ee[z].toLowerCase().replace(/s$/, ""), ee[z]);
        L("year", "FullYear"), C.fn.days = C.fn.day, C.fn.months = C.fn.month, C.fn.weeks = C.fn.week, C.fn.isoWeeks = C.fn.isoWeek, C.duration.fn = i.prototype = {weeks: function () {
            return o(this.days() / 7)
        }, valueOf: function () {
            return this._milliseconds + 864e5 * this._days + 2592e6 * (this._months % 12) + 31536e6 * ~~(this._months / 12)
        }, humanize: function (t) {
            var e = +this, n = S(e, !t, this.lang());
            return t && (n = this.lang().pastFuture(e, n)), this.lang().postformat(n)
        }, get: function (t) {
            return t = f(t), this[t.toLowerCase() + "s"]()
        }, as: function (t) {
            return t = f(t), this["as" + t.charAt(0).toUpperCase() + t.slice(1) + "s"]()
        }, lang: C.fn.lang};
        for (z in ne)ne.hasOwnProperty(z) && (O(z, ne[z]), H(z.toLowerCase()));
        O("Weeks", 6048e5), C.duration.fn.asMonths = function () {
            return(+this - 31536e6 * this.years()) / 2592e6 + 12 * this.years()
        }, C.lang("en", {ordinal: function (t) {
            var e = t % 10, n = 1 === ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
            return t + n
        }}), x && (module.exports = C), "undefined" == typeof ender && (this.moment = C), "function" == typeof define && define("commons/moment/2.0.0/moment", [], function () {
            return C
        })
    }).call(this);