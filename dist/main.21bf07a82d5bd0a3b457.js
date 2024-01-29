(()=>{"use strict";var t={d:(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};function e(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function n(){document.querySelectorAll(".todo-item").forEach((t=>{t.remove()}))}t.d({},{mB:()=>kt,gq:()=>St,LD:()=>vt,o6:()=>Mt});class a{constructor(t,e,n,a,o){this.title=t,this.description=e,this.dueDate=n,this.priority=a,this.tag=o,this.done=!1}}function o(){localStorage.setItem("todoListLocal",JSON.stringify(vt))}function r(){localStorage.setItem("tagListLocal",JSON.stringify(l))}function i(){localStorage.setItem("tagColorsLocal",JSON.stringify(m))}function s(){if(localStorage.getItem("todoListLocal")){let t=[...JSON.parse(localStorage.getItem("todoListLocal"))];return t.forEach((t=>{t.toggle=function(){this.done=!this.done}})),t}return[]}function c(){return localStorage.getItem("tagListLocal")?[...JSON.parse(localStorage.getItem("tagListLocal"))]:["all"]}function u(){return localStorage.getItem("tagColorsLocal")?JSON.parse(localStorage.getItem("tagColorsLocal")):{all:"hsl(44, 84%, 50%)",sport:"hsl(180, 70%, 42%)",work:"hsl(262, 41%, 40%)",relax:"hsl(203, 83%, 33%)",family:"hsl(11, 77%, 57%)"}}a.prototype.toggle=function(){this.done=!this.done};let d="all",l=c(),m=u();function g(t){document.getElementById(t).classList.add("pressed")}function h(){e(document.querySelector(".tags")),l.forEach((t=>{!function(t){const e=m[t],n=`#${t}`,a=document.createElement("div");a.classList.add("tag-item"),a.setAttribute("id",`${t}`),a.textContent=n.toUpperCase(),a.style.setProperty("background-color",e),document.querySelector(".tags").appendChild(a)}(t)})),g(d)}function f(){l.forEach((t=>{if("all"!=t&&null==vt.find((e=>e.tag==t))){let e=l.indexOf(t);l.splice(e,1),r(),document.querySelector(`#${t}`).setAttribute("hide",""),d="all"}})),setTimeout((()=>{h()}),300)}function p(){return"hsl("+Math.floor(360*Math.random())+", 54%, 45%)"}const y={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function b(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const w={date:b({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:b({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:b({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},v={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function S(t){return(e,n)=>{let a;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,o=n?.width?String(n.width):e;a=t.formattingValues[o]||t.formattingValues[e]}else{const e=t.defaultWidth,o=n?.width?String(n.width):t.defaultWidth;a=t.values[o]||t.values[e]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function M(t){return(e,n={})=>{const a=n.width,o=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],r=e.match(o);if(!r)return null;const i=r[0],s=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?function(t,e){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(s):function(t,e){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(s);let u;return u=t.valueCallback?t.valueCallback(c):c,u=n.valueCallback?n.valueCallback(u):u,{value:u,rest:e.slice(i.length)}}}var k;const L={code:"en-US",formatDistance:(t,e,n)=>{let a;const o=y[t];return a="string"==typeof o?o:1===e?o.one:o.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:w,formatRelative:(t,e,n,a)=>v[t],localize:{ordinalNumber:(t,e)=>{const n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:S({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:S({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:S({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:S({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:S({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(k={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(k.matchPattern);if(!n)return null;const a=n[0],o=t.match(k.parsePattern);if(!o)return null;let r=k.valueCallback?k.valueCallback(o[0]):o[0];return r=e.valueCallback?e.valueCallback(r):r,{value:r,rest:t.slice(a.length)}}),era:M({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:M({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:M({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:M({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:M({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};let x={};function E(){return x}Math.pow(10,8);const D=6048e5,P=864e5;function T(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function q(t){const e=T(t);return e.setHours(0,0,0,0),e}function C(t){const e=T(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function O(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function W(t){const e=T(t);return function(t,e){const n=q(t),a=q(e),o=+n-C(n),r=+a-C(a);return Math.round((o-r)/P)}(e,function(t){const e=T(t),n=O(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}(e))+1}function N(t,e){const n=E(),a=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,o=T(t),r=o.getDay(),i=(r<a?7:0)+r-a;return o.setDate(o.getDate()-i),o.setHours(0,0,0,0),o}function B(t){return N(t,{weekStartsOn:1})}function I(t){const e=T(t),n=e.getFullYear(),a=O(t,0);a.setFullYear(n+1,0,4),a.setHours(0,0,0,0);const o=B(a),r=O(t,0);r.setFullYear(n,0,4),r.setHours(0,0,0,0);const i=B(r);return e.getTime()>=o.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function Y(t){const e=T(t),n=+B(e)-+function(t){const e=I(t),n=O(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),B(n)}(e);return Math.round(n/D)+1}function H(t,e){const n=T(t),a=n.getFullYear(),o=E(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,i=O(t,0);i.setFullYear(a+1,0,r),i.setHours(0,0,0,0);const s=N(i,e),c=O(t,0);c.setFullYear(a,0,r),c.setHours(0,0,0,0);const u=N(c,e);return n.getTime()>=s.getTime()?a+1:n.getTime()>=u.getTime()?a:a-1}function A(t,e){const n=T(t),a=+N(n,e)-+function(t,e){const n=E(),a=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,o=H(t,e),r=O(t,0);return r.setFullYear(o,0,a),r.setHours(0,0,0,0),N(r,e)}(n,e);return Math.round(a/D)+1}function F(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const j={y(t,e){const n=t.getFullYear(),a=n>0?n:1-n;return F("yy"===e?a%100:a,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):F(n+1,2)},d:(t,e)=>F(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>F(t.getHours()%12||12,e.length),H:(t,e)=>F(t.getHours(),e.length),m:(t,e)=>F(t.getMinutes(),e.length),s:(t,e)=>F(t.getSeconds(),e.length),S(t,e){const n=e.length,a=t.getMilliseconds();return F(Math.trunc(a*Math.pow(10,n-3)),e.length)}},z={G:function(t,e,n){const a=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),a=e>0?e:1-e;return n.ordinalNumber(a,{unit:"year"})}return j.y(t,e)},Y:function(t,e,n,a){const o=H(t,a),r=o>0?o:1-o;return"YY"===e?F(r%100,2):"Yo"===e?n.ordinalNumber(r,{unit:"year"}):F(r,e.length)},R:function(t,e){return F(I(t),e.length)},u:function(t,e){return F(t.getFullYear(),e.length)},Q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return F(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return F(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){const a=t.getMonth();switch(e){case"M":case"MM":return j.M(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){const a=t.getMonth();switch(e){case"L":return String(a+1);case"LL":return F(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){const o=A(t,a);return"wo"===e?n.ordinalNumber(o,{unit:"week"}):F(o,e.length)},I:function(t,e,n){const a=Y(t);return"Io"===e?n.ordinalNumber(a,{unit:"week"}):F(a,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):j.d(t,e)},D:function(t,e,n){const a=W(t);return"Do"===e?n.ordinalNumber(a,{unit:"dayOfYear"}):F(a,e.length)},E:function(t,e,n){const a=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){const o=t.getDay(),r=(o-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(r);case"ee":return F(r,2);case"eo":return n.ordinalNumber(r,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){const o=t.getDay(),r=(o-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(r);case"cc":return F(r,e.length);case"co":return n.ordinalNumber(r,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(t,e,n){const a=t.getDay(),o=0===a?7:a;switch(e){case"i":return String(o);case"ii":return F(o,e.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){const a=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){const a=t.getHours();let o;switch(o=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(t,e,n){const a=t.getHours();let o;switch(o=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return j.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):j.H(t,e)},K:function(t,e,n){const a=t.getHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):F(a,e.length)},k:function(t,e,n){let a=t.getHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):F(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):j.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):j.s(t,e)},S:function(t,e){return j.S(t,e)},X:function(t,e,n){const a=t.getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return G(a);case"XXXX":case"XX":return X(a);default:return X(a,":")}},x:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"x":return G(a);case"xxxx":case"xx":return X(a);default:return X(a,":")}},O:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Q(a,":");default:return"GMT"+X(a,":")}},z:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Q(a,":");default:return"GMT"+X(a,":")}},t:function(t,e,n){return F(Math.trunc(t.getTime()/1e3),e.length)},T:function(t,e,n){return F(t.getTime(),e.length)}};function Q(t,e=""){const n=t>0?"-":"+",a=Math.abs(t),o=Math.trunc(a/60),r=a%60;return 0===r?n+String(o):n+String(o)+e+F(r,2)}function G(t,e){return t%60==0?(t>0?"-":"+")+F(Math.abs(t)/60,2):X(t,e)}function X(t,e=""){const n=t>0?"-":"+",a=Math.abs(t);return n+F(Math.trunc(a/60),2)+e+F(a%60,2)}const $=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},J=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},R={p:J,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],a=n[1],o=n[2];if(!o)return $(t,e);let r;switch(a){case"P":r=e.dateTime({width:"short"});break;case"PP":r=e.dateTime({width:"medium"});break;case"PPP":r=e.dateTime({width:"long"});break;default:r=e.dateTime({width:"full"})}return r.replace("{{date}}",$(a,e)).replace("{{time}}",J(o,e))}},U=/^D+$/,V=/^Y+$/,K=["D","DD","YY","YYYY"];function Z(t){if(!(e=t,e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)||"number"==typeof t))return!1;var e;const n=T(t);return!isNaN(Number(n))}const _=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,tt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,et=/^'([^]*?)'?$/,nt=/''/g,at=/[a-zA-Z]/;function ot(t,e,n){const a=E(),o=n?.locale??a.locale??L,r=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0,s=T(t);if(!Z(s))throw new RangeError("Invalid time value");let c=e.match(tt).map((t=>{const e=t[0];return"p"===e||"P"===e?(0,R[e])(t,o.formatLong):t})).join("").match(_).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const e=t[0];if("'"===e)return{isToken:!1,value:rt(t)};if(z[e])return{isToken:!0,value:t};if(e.match(at))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));o.localize.preprocessor&&(c=o.localize.preprocessor(s,c));const u={firstWeekContainsDate:r,weekStartsOn:i,locale:o};return c.map((a=>{if(!a.isToken)return a.value;const r=a.value;return(!n?.useAdditionalWeekYearTokens&&function(t){return V.test(t)}(r)||!n?.useAdditionalDayOfYearTokens&&function(t){return U.test(t)}(r))&&function(t,e,n){const a=function(t,e,n){const a="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${a} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(a),K.includes(t))throw new RangeError(a)}(r,e,String(t)),(0,z[r[0]])(s,r,o.localize,u)})).join("")}function rt(t){const e=t.match(et);return e?e[1].replace(nt,"'"):t}function it(){""==tags.value&&(tags.value="all"),tags.value in m||(m[tags.value]=p(),i())}function st(){l.includes(tags.value)||(l.push(tags.value),r())}const ct={formStatus:"closed",changeStatus:function(t){this.formStatus=t}};function ut(){const t=document.querySelector(".plus"),e=document.querySelector(".form-todo");t.classList.remove("open"),e.classList.add("closed"),ct.changeStatus("closed"),setTimeout((()=>{e.remove()}),200)}const dt=document.querySelector(".plus"),lt=document.querySelector(".todos"),mt=document.querySelector(".logo");function gt(){const t=document.createElement("div");return t.classList.add("form-todo"),t.innerHTML='<form action="#" method="dialog" class="form-fields" id="form-submit">\n    <div class="form-row todo-title"><label for="title">What?</label><input id="title" name="title" type="text" maxlength="15" placeholder="Title" required autofocus></div>\n    <div class="form-row todo-date"><label for="due-date">When?</label><input type="date" id="date" name="due-date"/></div>\n    <div class="form-row todo-priority"><label for="priority">Priority</label><select id="priority" name="priority"><option value="low">Low</option><option value="med">Med</option><option value="high">High</option></select></div>\n    <div class="form-row area"><label for="description">How?</label>\n    <textarea id="description" name="description" maxlength="200"></textarea></div>\n    <div class="form-row todo-tags"><label for="tags">Tag</label><input id="tags" name="tags" type="text" maxlength="10" placeholder="All" value="all"></div><div class="form-row todo-button"><label for="todoBtn" class="todoLabel">_</label><button id="set-todo" type="submit" class="set-btn" name="todoBtn">\n    <span class="set-btn-txt">SET&nbsp;&nbsp;TODO</span></button></div></form>',t}let ht,ft;function pt(t){const n=document.querySelector(".todos");let a=[];vt.forEach((e=>{e.tag==t&&(a[vt.indexOf(e)]=e)})),e(n),"all"!=t?(kt(a),a=[]):kt(vt)}function yt(t,e){const a=ot(t.dueDate,"MMM d"),r=m[t.tag],s=document.querySelector(".todos"),c=document.createElement("div");c.classList.add("todo-item"),c.setAttribute("data-index",e),c.style.setProperty("background-color",r);const u=document.createElement("div");u.classList.add("title");const l=document.createElement("div");l.classList.add("flag");const g=document.createElement("div");g.classList.add("flag-icon");const y=document.createElement("span");y.textContent=t.title;const b=document.createElement("div");b.classList.add("date");const w=document.createElement("span");w.textContent=a;const v=document.createElement("div");v.classList.add("delete");const S=document.createElement("div");S.classList.add("delete-icon"),S.textContent="+";const M=document.createElement("div");M.classList.add("stroke");const k=document.createElement("div");k.classList.add("edit-btn"),k.textContent="EDIT",l.append(g),u.append(l,y),v.append(S),b.append(w,v),c.append(u,k,b,M),s.appendChild(c),1==t.done&&(M.classList.toggle("visible"),k.classList.toggle("hide"),g.classList.toggle("checked"));const L=document.querySelector(".tags");c.addEventListener("click",(a=>{a.target.matches(".flag-icon")?(t.toggle(),o(),M.classList.toggle("visible"),k.classList.toggle("hide"),g.classList.toggle("checked")):a.target.matches(".delete")?(Mt(c.dataset),c.setAttribute("hide",""),setTimeout((()=>{c.remove(),f()}),350),setTimeout((()=>{n(),pt(d)}),400)):a.target.matches(".edit-btn")&&(function(t){ht=t;const e=vt[t],a=m[e.tag],r=document.querySelector(`.todo-item[data-index = '${t}' ]`),s=document.querySelector(".tags"),c=document.querySelector(".todos"),u=document.querySelector(".add-btn");u.classList.toggle("prevent");const d=gt();d.style.setProperty("background-color",a),"closed"==ct.formStatus?(c.appendChild(d),function(){const t=vt[ht],e=document.getElementById("title"),n=document.getElementById("date"),a=document.getElementById("priority"),o=document.getElementById("description"),r=document.getElementById("tags");e.value=t.title,n.value=t.dueDate,a.value=t.priority,o.value=t.description,r.value=t.tag,ft=r.value}(),document.querySelector(".set-btn-txt").textContent="SAVE",document.querySelector("#set-todo").style.setProperty("background-color",a),document.getElementById("form-submit").addEventListener("submit",(()=>{!function(){const t=document.getElementById("tags");if(t.value!==ft){if(""==t.value&&(t.value="all"),t.value in m)return;m[t.value]=p(),i()}}(),st(),function(t){const e=vt[t],n=document.getElementById("title"),a=document.getElementById("date"),r=document.getElementById("priority"),i=document.getElementById("description"),s=document.getElementById("tags");e.title=n.value,e.dueDate=a.value,e.priority=r.value,e.description=i.value,e.tag=s.value,o()}(t),r.remove(),n(),kt(vt),f(),h(),ut(),s.classList.toggle("block"),u.classList.toggle("prevent")})),setTimeout((()=>{d.classList.add("open"),ct.changeStatus("open")}),100),event.preventDefault()):ut()}(e),L.classList.toggle("block"))}))}function bt(){const t=document.querySelector(".form-guide");t.classList.add("closed"),ct.changeStatus("closed"),setTimeout((()=>{t.remove()}),250)}function wt(){localStorage.clear(),St(),n(),d="all",l=c(),m=u(),f(),h(),g("all")}let vt=s();function St(){vt=s()}function Mt(t){vt.splice(t.index,1),o()}function kt(t){t.forEach((e=>{yt(e,t.indexOf(e))}))}const Lt=document.querySelector(".logo"),xt=document.querySelector(".tags"),Et=document.querySelector(".add-btn");Et.addEventListener("click",(()=>{(function(){const t=document.querySelector(".tags"),e=gt();"closed"==ct.formStatus?(lt.appendChild(e),document.getElementById("form-submit").addEventListener("submit",(()=>{!function(){const t=document.getElementById("title").value;let e=document.getElementById("date").value;const n=document.getElementById("priority").value,r=document.getElementById("description").value,i=document.getElementById("tags").value;""==e&&(e=ot(new Date,"yyyy-MM-dd")),it(),st();let s=new a(t,r,e,n,i);vt.push(s),o(),yt(s,vt.indexOf(s)),s={},h()}(),ut(),t.classList.toggle("block"),mt.classList.toggle("prevent")})),setTimeout((()=>{dt.classList.add("open"),e.classList.add("open"),ct.changeStatus("open")}),100),event.preventDefault()):ut()})(),xt.classList.toggle("block"),Lt.classList.toggle("prevent")})),xt.addEventListener("click",(t=>{const e=t.target.id;var n;""!=e&&(n=e,document.querySelector(`#${d}`).classList.remove("pressed"),d=n,document.querySelector(`#${n}`).classList.add("pressed"),pt(e))})),Lt.addEventListener("click",(()=>{(function(){const t=document.querySelector(".todos"),e=document.querySelector(".add-btn"),n=document.querySelector(".tags"),i=function(){const t=document.createElement("div");return t.classList.add("form-guide"),t.innerHTML='<div class="guide-header">\n    <span class="guide-text">"MINI" TODO APP</span></div>\n    <div class="list-container">\n    <h3>MAIN FEATURES</h3><ul class="features-list">\n    <li>Filter by tag</li><li>Dynamic tag management</li>\n    <li>Dynamic tag colors</li><li>Dynamic todo colors</li>\n    <li>Local storage</li><li>Responsive layout</li></ul></div></div>\n    <div class="button-container"><div class="guide-demo"><div class="demo-btn">DEMO CONTENT</div></div><div class="guide-reset"><div class="reset-btn">RESET STORAGE</div></div></div>\n    <div class="credits">Copyright ©&nbsp;<a class="blu3" href="https://github.com/blu3tan">Blu3</a></div>',t}();i.addEventListener("click",(t=>{if(t.target.matches(".reset-btn"))wt(),kt(vt),setTimeout((()=>{bt(),n.classList.toggle("block"),e.classList.toggle("prevent")}),100);else{if(!t.target.matches(".demo-btn"))return;wt(),l.push("sport","family","relax"),r(),[{title:"Call Andy",description:"need to call Andy for arrangements",dueDate:"",priority:"med",tag:"all",done:!1},{title:"Pay bills",description:"",dueDate:"",priority:"med",tag:"all",done:!1},{title:"Renew gym",description:"membership last till feb 4",dueDate:"",priority:"med",tag:"sport",done:!1},{title:"Pick up package",description:"pick up package for Lance",dueDate:"",priority:"high",tag:"family",done:!1},{title:"Swim session",description:"pool reserved for mar 11",dueDate:"",priority:"low",tag:"sport",done:!1},{title:"Movie tickets",description:"reserve tickets for 2",dueDate:"",priority:"med",tag:"relax",done:!1}].forEach((t=>{let e=new a(t.title,t.description,t.dueDate,t.priority,t.tag);e.dueDate=ot(new Date,"yyyy-MM-dd"),vt.push(e),o(),yt(e,vt.indexOf(e)),e={},h()})),setTimeout((()=>{bt(),n.classList.toggle("block"),e.classList.toggle("prevent")}),100)}})),"closed"==ct.formStatus?(t.appendChild(i),setTimeout((()=>{i.classList.add("open"),ct.changeStatus("open")}),50)):bt()})(),xt.classList.toggle("block"),Et.classList.toggle("prevent")})),f(),h(),g("all"),kt(vt)})();