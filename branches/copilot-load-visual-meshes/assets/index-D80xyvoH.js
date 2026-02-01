(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Yc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ut={},Zs=[],ai=()=>{},Xf=()=>!1,ya=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),$c=n=>n.startsWith("onUpdate:"),mn=Object.assign,Kc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},kp=Object.prototype.hasOwnProperty,Pt=(n,e)=>kp.call(n,e),ht=Array.isArray,Js=n=>Sa(n)==="[object Map]",qf=n=>Sa(n)==="[object Set]",ut=n=>typeof n=="function",jt=n=>typeof n=="string",Qi=n=>typeof n=="symbol",zt=n=>n!==null&&typeof n=="object",jf=n=>(zt(n)||ut(n))&&ut(n.then)&&ut(n.catch),Yf=Object.prototype.toString,Sa=n=>Yf.call(n),Vp=n=>Sa(n).slice(8,-1),$f=n=>Sa(n)==="[object Object]",Zc=n=>jt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Br=Yc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ba=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},zp=/-\w/g,Gn=ba(n=>n.replace(zp,e=>e.slice(1).toUpperCase())),Hp=/\B([A-Z])/g,es=ba(n=>n.replace(Hp,"-$1").toLowerCase()),Ea=ba(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ya=ba(n=>n?`on${Ea(n)}`:""),Ki=(n,e)=>!Object.is(n,e),Jo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Kf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Jc=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Bu;const Ta=()=>Bu||(Bu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qc(n){if(ht(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=jt(i)?qp(i):Qc(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(jt(n)||zt(n))return n}const Gp=/;(?![^(]*\))/g,Wp=/:([^]+)/,Xp=/\/\*[^]*?\*\//g;function qp(n){const e={};return n.replace(Xp,"").split(Gp).forEach(t=>{if(t){const i=t.split(Wp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ms(n){let e="";if(jt(n))e=n;else if(ht(n))for(let t=0;t<n.length;t++){const i=ms(n[t]);i&&(e+=i+" ")}else if(zt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const jp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Yp=Yc(jp);function Zf(n){return!!n||n===""}const Jf=n=>!!(n&&n.__v_isRef===!0),Dn=n=>jt(n)?n:n==null?"":ht(n)||zt(n)&&(n.toString===Yf||!ut(n.toString))?Jf(n)?Dn(n.value):JSON.stringify(n,Qf,2):String(n),Qf=(n,e)=>Jf(e)?Qf(n,e.value):Js(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[$a(i,r)+" =>"]=s,t),{})}:qf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>$a(t))}:Qi(e)?$a(e):zt(e)&&!ht(e)&&!$f(e)?String(e):e,$a=(n,e="")=>{var t;return Qi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let En;class $p{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=En,!e&&En&&(this.index=(En.scopes||(En.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=En;try{return En=this,e()}finally{En=t}}}on(){++this._on===1&&(this.prevScope=En,En=this)}off(){this._on>0&&--this._on===0&&(En=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Kp(){return En}let Ft;const Ka=new WeakSet;class ed{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,En&&En.active&&En.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ka.has(this)&&(Ka.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||nd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ku(this),id(this);const e=Ft,t=Kn;Ft=this,Kn=!0;try{return this.fn()}finally{sd(this),Ft=e,Kn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)nu(e);this.deps=this.depsTail=void 0,ku(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ka.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Hl(this)&&this.run()}get dirty(){return Hl(this)}}let td=0,kr,Vr;function nd(n,e=!1){if(n.flags|=8,e){n.next=Vr,Vr=n;return}n.next=kr,kr=n}function eu(){td++}function tu(){if(--td>0)return;if(Vr){let e=Vr;for(Vr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;kr;){let e=kr;for(kr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function id(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function sd(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),nu(i),Zp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Hl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(rd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function rd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Yr)||(n.globalVersion=Yr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Hl(n))))return;n.flags|=2;const e=n.dep,t=Ft,i=Kn;Ft=n,Kn=!0;try{id(n);const s=n.fn(n._value);(e.version===0||Ki(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ft=t,Kn=i,sd(n),n.flags&=-3}}function nu(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)nu(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Zp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Kn=!0;const od=[];function Ci(){od.push(Kn),Kn=!1}function Pi(){const n=od.pop();Kn=n===void 0?!0:n}function ku(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Ft;Ft=void 0;try{e()}finally{Ft=t}}}let Yr=0;class Jp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class iu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ft||!Kn||Ft===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ft)t=this.activeLink=new Jp(Ft,this),Ft.deps?(t.prevDep=Ft.depsTail,Ft.depsTail.nextDep=t,Ft.depsTail=t):Ft.deps=Ft.depsTail=t,ad(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Ft.depsTail,t.nextDep=void 0,Ft.depsTail.nextDep=t,Ft.depsTail=t,Ft.deps===t&&(Ft.deps=i)}return t}trigger(e){this.version++,Yr++,this.notify(e)}notify(e){eu();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{tu()}}}function ad(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)ad(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Gl=new WeakMap,gs=Symbol(""),Wl=Symbol(""),$r=Symbol("");function cn(n,e,t){if(Kn&&Ft){let i=Gl.get(n);i||Gl.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new iu),s.map=i,s.key=t),s.track()}}function Ei(n,e,t,i,s,r){const o=Gl.get(n);if(!o){Yr++;return}const a=l=>{l&&l.trigger()};if(eu(),e==="clear")o.forEach(a);else{const l=ht(n),c=l&&Zc(t);if(l&&t==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===$r||!Qi(f)&&f>=u)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get($r)),e){case"add":l?c&&a(o.get("length")):(a(o.get(gs)),Js(n)&&a(o.get(Wl)));break;case"delete":l||(a(o.get(gs)),Js(n)&&a(o.get(Wl)));break;case"set":Js(n)&&a(o.get(gs));break}}tu()}function Rs(n){const e=Ct(n);return e===n?e:(cn(e,"iterate",$r),Hn(n)?e:e.map(Zn))}function Aa(n){return cn(n=Ct(n),"iterate",$r),n}function Wi(n,e){return Di(n)?_s(n)?rr(Zn(e)):rr(e):Zn(e)}const Qp={__proto__:null,[Symbol.iterator](){return Za(this,Symbol.iterator,n=>Wi(this,n))},concat(...n){return Rs(this).concat(...n.map(e=>ht(e)?Rs(e):e))},entries(){return Za(this,"entries",n=>(n[1]=Wi(this,n[1]),n))},every(n,e){return gi(this,"every",n,e,void 0,arguments)},filter(n,e){return gi(this,"filter",n,e,t=>t.map(i=>Wi(this,i)),arguments)},find(n,e){return gi(this,"find",n,e,t=>Wi(this,t),arguments)},findIndex(n,e){return gi(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return gi(this,"findLast",n,e,t=>Wi(this,t),arguments)},findLastIndex(n,e){return gi(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return gi(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ja(this,"includes",n)},indexOf(...n){return Ja(this,"indexOf",n)},join(n){return Rs(this).join(n)},lastIndexOf(...n){return Ja(this,"lastIndexOf",n)},map(n,e){return gi(this,"map",n,e,void 0,arguments)},pop(){return Ar(this,"pop")},push(...n){return Ar(this,"push",n)},reduce(n,...e){return Vu(this,"reduce",n,e)},reduceRight(n,...e){return Vu(this,"reduceRight",n,e)},shift(){return Ar(this,"shift")},some(n,e){return gi(this,"some",n,e,void 0,arguments)},splice(...n){return Ar(this,"splice",n)},toReversed(){return Rs(this).toReversed()},toSorted(n){return Rs(this).toSorted(n)},toSpliced(...n){return Rs(this).toSpliced(...n)},unshift(...n){return Ar(this,"unshift",n)},values(){return Za(this,"values",n=>Wi(this,n))}};function Za(n,e,t){const i=Aa(n),s=i[e]();return i!==n&&!Hn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const em=Array.prototype;function gi(n,e,t,i,s,r){const o=Aa(n),a=o!==n&&!Hn(n),l=o[e];if(l!==em[e]){const h=l.apply(n,r);return a?Zn(h):h}let c=t;o!==n&&(a?c=function(h,f){return t.call(this,Wi(n,h),f,n)}:t.length>2&&(c=function(h,f){return t.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Vu(n,e,t,i){const s=Aa(n);let r=t;return s!==n&&(Hn(n)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,n)}):r=function(o,a,l){return t.call(this,o,Wi(n,a),l,n)}),s[e](r,...i)}function Ja(n,e,t){const i=Ct(n);cn(i,"iterate",$r);const s=i[e](...t);return(s===-1||s===!1)&&au(t[0])?(t[0]=Ct(t[0]),i[e](...t)):s}function Ar(n,e,t=[]){Ci(),eu();const i=Ct(n)[e].apply(n,t);return tu(),Pi(),i}const tm=Yc("__proto__,__v_isRef,__isVue"),ld=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Qi));function nm(n){Qi(n)||(n=String(n));const e=Ct(this);return cn(e,"has",n),e.hasOwnProperty(n)}class cd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?fm:dd:r?fd:hd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ht(e);if(!s){let l;if(o&&(l=Qp[t]))return l;if(t==="hasOwnProperty")return nm}const a=Reflect.get(e,t,dn(e)?e:i);if((Qi(t)?ld.has(t):tm(t))||(s||cn(e,"get",t),r))return a;if(dn(a)){const l=o&&Zc(t)?a:a.value;return s&&zt(l)?ql(l):l}return zt(a)?s?ql(a):ru(a):a}}class ud extends cd{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=ht(e)&&Zc(t);if(!this._isShallow){const c=Di(r);if(!Hn(i)&&!Di(i)&&(r=Ct(r),i=Ct(i)),!o&&dn(r)&&!dn(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:Pt(e,t),l=Reflect.set(e,t,i,dn(e)?e:s);return e===Ct(s)&&(a?Ki(i,r)&&Ei(e,"set",t,i):Ei(e,"add",t,i)),l}deleteProperty(e,t){const i=Pt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Ei(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Qi(t)||!ld.has(t))&&cn(e,"has",t),i}ownKeys(e){return cn(e,"iterate",ht(e)?"length":gs),Reflect.ownKeys(e)}}class im extends cd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const sm=new ud,rm=new im,om=new ud(!0);const Xl=n=>n,_o=n=>Reflect.getPrototypeOf(n);function am(n,e,t){return function(...i){const s=this.__v_raw,r=Ct(s),o=Js(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?Xl:e?rr:Zn;return!e&&cn(r,"iterate",l?Wl:gs),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function xo(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function lm(n,e){const t={get(s){const r=this.__v_raw,o=Ct(r),a=Ct(s);n||(Ki(s,a)&&cn(o,"get",s),cn(o,"get",a));const{has:l}=_o(o),c=e?Xl:n?rr:Zn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&cn(Ct(s),"iterate",gs),s.size},has(s){const r=this.__v_raw,o=Ct(r),a=Ct(s);return n||(Ki(s,a)&&cn(o,"has",s),cn(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=Ct(a),c=e?Xl:n?rr:Zn;return!n&&cn(l,"iterate",gs),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return mn(t,n?{add:xo("add"),set:xo("set"),delete:xo("delete"),clear:xo("clear")}:{add(s){!e&&!Hn(s)&&!Di(s)&&(s=Ct(s));const r=Ct(this);return _o(r).has.call(r,s)||(r.add(s),Ei(r,"add",s,s)),this},set(s,r){!e&&!Hn(r)&&!Di(r)&&(r=Ct(r));const o=Ct(this),{has:a,get:l}=_o(o);let c=a.call(o,s);c||(s=Ct(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Ki(r,u)&&Ei(o,"set",s,r):Ei(o,"add",s,r),this},delete(s){const r=Ct(this),{has:o,get:a}=_o(r);let l=o.call(r,s);l||(s=Ct(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Ei(r,"delete",s,void 0),c},clear(){const s=Ct(this),r=s.size!==0,o=s.clear();return r&&Ei(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=am(s,n,e)}),t}function su(n,e){const t=lm(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(Pt(t,s)&&s in i?t:i,s,r)}const cm={get:su(!1,!1)},um={get:su(!1,!0)},hm={get:su(!0,!1)};const hd=new WeakMap,fd=new WeakMap,dd=new WeakMap,fm=new WeakMap;function dm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pm(n){return n.__v_skip||!Object.isExtensible(n)?0:dm(Vp(n))}function ru(n){return Di(n)?n:ou(n,!1,sm,cm,hd)}function mm(n){return ou(n,!1,om,um,fd)}function ql(n){return ou(n,!0,rm,hm,dd)}function ou(n,e,t,i,s){if(!zt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=pm(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function _s(n){return Di(n)?_s(n.__v_raw):!!(n&&n.__v_isReactive)}function Di(n){return!!(n&&n.__v_isReadonly)}function Hn(n){return!!(n&&n.__v_isShallow)}function au(n){return n?!!n.__v_raw:!1}function Ct(n){const e=n&&n.__v_raw;return e?Ct(e):n}function gm(n){return!Pt(n,"__v_skip")&&Object.isExtensible(n)&&Kf(n,"__v_skip",!0),n}const Zn=n=>zt(n)?ru(n):n,rr=n=>zt(n)?ql(n):n;function dn(n){return n?n.__v_isRef===!0:!1}function ln(n){return _m(n,!1)}function _m(n,e){return dn(n)?n:new xm(n,e)}class xm{constructor(e,t){this.dep=new iu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ct(e),this._value=t?e:Zn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Hn(e)||Di(e);e=i?e:Ct(e),Ki(e,t)&&(this._rawValue=e,this._value=i?e:Zn(e),this.dep.trigger())}}function vm(n){return dn(n)?n.value:n}const Mm={get:(n,e,t)=>e==="__v_raw"?n:vm(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return dn(s)&&!dn(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function pd(n){return _s(n)?n:new Proxy(n,Mm)}class ym{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new iu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Yr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ft!==this)return nd(this,!0),!0}get value(){const e=this.dep.track();return rd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Sm(n,e,t=!1){let i,s;return ut(n)?i=n:(i=n.get,s=n.set),new ym(i,s,t)}const vo={},la=new WeakMap;let us;function bm(n,e=!1,t=us){if(t){let i=la.get(t);i||la.set(t,i=[]),i.push(n)}}function Em(n,e,t=Ut){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=E=>s?E:Hn(E)||s===!1||s===0?Ti(E,1):Ti(E);let u,h,f,p,_=!1,x=!1;if(dn(n)?(h=()=>n.value,_=Hn(n)):_s(n)?(h=()=>c(n),_=!0):ht(n)?(x=!0,_=n.some(E=>_s(E)||Hn(E)),h=()=>n.map(E=>{if(dn(E))return E.value;if(_s(E))return c(E);if(ut(E))return l?l(E,2):E()})):ut(n)?e?h=l?()=>l(n,2):n:h=()=>{if(f){Ci();try{f()}finally{Pi()}}const E=us;us=u;try{return l?l(n,3,[p]):n(p)}finally{us=E}}:h=ai,e&&s){const E=h,R=s===!0?1/0:s;h=()=>Ti(E(),R)}const m=Kp(),d=()=>{u.stop(),m&&m.active&&Kc(m.effects,u)};if(r&&e){const E=e;e=(...R)=>{E(...R),d()}}let A=x?new Array(n.length).fill(vo):vo;const D=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(e){const R=u.run();if(s||_||(x?R.some((I,L)=>Ki(I,A[L])):Ki(R,A))){f&&f();const I=us;us=u;try{const L=[R,A===vo?void 0:x&&A[0]===vo?[]:A,p];A=R,l?l(e,3,L):e(...L)}finally{us=I}}}else u.run()};return a&&a(D),u=new ed(h),u.scheduler=o?()=>o(D,!1):D,p=E=>bm(E,!1,u),f=u.onStop=()=>{const E=la.get(u);if(E){if(l)l(E,4);else for(const R of E)R();la.delete(u)}},e?i?D(!0):A=u.run():o?o(D.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function Ti(n,e=1/0,t){if(e<=0||!zt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,dn(n))Ti(n.value,e,t);else if(ht(n))for(let i=0;i<n.length;i++)Ti(n[i],e,t);else if(qf(n)||Js(n))n.forEach(i=>{Ti(i,e,t)});else if($f(n)){for(const i in n)Ti(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Ti(n[i],e,t)}return n}function so(n,e,t,i){try{return i?n(...i):n()}catch(s){wa(s,e,t)}}function ui(n,e,t,i){if(ut(n)){const s=so(n,e,t,i);return s&&jf(s)&&s.catch(r=>{wa(r,e,t)}),s}if(ht(n)){const s=[];for(let r=0;r<n.length;r++)s.push(ui(n[r],e,t,i));return s}}function wa(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ut;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){Ci(),so(r,null,10,[n,l,c]),Pi();return}}Tm(n,t,s,i,o)}function Tm(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const Mn=[];let ni=-1;const Qs=[];let Xi=null,Xs=0;const md=Promise.resolve();let ca=null;function jl(n){const e=ca||md;return n?e.then(this?n.bind(this):n):e}function Am(n){let e=ni+1,t=Mn.length;for(;e<t;){const i=e+t>>>1,s=Mn[i],r=Kr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function lu(n){if(!(n.flags&1)){const e=Kr(n),t=Mn[Mn.length-1];!t||!(n.flags&2)&&e>=Kr(t)?Mn.push(n):Mn.splice(Am(e),0,n),n.flags|=1,gd()}}function gd(){ca||(ca=md.then(xd))}function wm(n){ht(n)?Qs.push(...n):Xi&&n.id===-1?Xi.splice(Xs+1,0,n):n.flags&1||(Qs.push(n),n.flags|=1),gd()}function zu(n,e,t=ni+1){for(;t<Mn.length;t++){const i=Mn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Mn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function _d(n){if(Qs.length){const e=[...new Set(Qs)].sort((t,i)=>Kr(t)-Kr(i));if(Qs.length=0,Xi){Xi.push(...e);return}for(Xi=e,Xs=0;Xs<Xi.length;Xs++){const t=Xi[Xs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Xi=null,Xs=0}}const Kr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function xd(n){try{for(ni=0;ni<Mn.length;ni++){const e=Mn[ni];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),so(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ni<Mn.length;ni++){const e=Mn[ni];e&&(e.flags&=-2)}ni=-1,Mn.length=0,_d(),ca=null,(Mn.length||Qs.length)&&xd()}}let In=null,vd=null;function ua(n){const e=In;return In=n,vd=n&&n.type.__scopeId||null,e}function Rm(n,e=In,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Qu(-1);const r=ua(e);let o;try{o=n(...s)}finally{ua(r),i._d&&Qu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Hu(n,e){if(In===null)return n;const t=La(In),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=Ut]=e[s];r&&(ut(r)&&(r={mounted:r,updated:r}),r.deep&&Ti(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function ns(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Ci(),ui(l,t,8,[n.el,a,n,e]),Pi())}}function Cm(n,e){if(hn){let t=hn.provides;const i=hn.parent&&hn.parent.provides;i===t&&(t=hn.provides=Object.create(i)),t[n]=e}}function Qo(n,e,t=!1){const i=Cg();if(i||er){let s=er?er._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ut(e)?e.call(i&&i.proxy):e}}const Pm=Symbol.for("v-scx"),Dm=()=>Qo(Pm);function xs(n,e,t){return Md(n,e,t)}function Md(n,e,t=Ut){const{immediate:i,deep:s,flush:r,once:o}=t,a=mn({},t),l=e&&i||!e&&r!=="post";let c;if(Jr){if(r==="sync"){const p=Dm();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=ai,p.resume=ai,p.pause=ai,p}}const u=hn;a.call=(p,_,x)=>ui(p,u,_,x);let h=!1;r==="post"?a.scheduler=p=>{Pn(p,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(p,_)=>{_?p():lu(p)}),a.augmentJob=p=>{e&&(p.flags|=4),h&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const f=Em(n,e,a);return Jr&&(c?c.push(f):l&&f()),f}function Lm(n,e,t){const i=this.proxy,s=jt(n)?n.includes(".")?yd(i,n):()=>i[n]:n.bind(i,i);let r;ut(e)?r=e:(r=e.handler,t=e);const o=oo(this),a=Md(s,r.bind(i),t);return o(),a}function yd(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Nm=Symbol("_vte"),Im=n=>n.__isTeleport,Um=Symbol("_leaveCb");function cu(n,e){n.shapeFlag&6&&n.component?(n.transition=e,cu(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function mr(n,e){return ut(n)?mn({name:n.name},e,{setup:n}):n}function Sd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const ha=new WeakMap;function zr(n,e,t,i,s=!1){if(ht(n)){n.forEach((_,x)=>zr(_,e&&(ht(e)?e[x]:e),t,i,s));return}if(Hr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&zr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?La(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Ut?a.refs={}:a.refs,h=a.setupState,f=Ct(h),p=h===Ut?Xf:_=>Pt(f,_);if(c!=null&&c!==l){if(Gu(e),jt(c))u[c]=null,p(c)&&(h[c]=null);else if(dn(c)){c.value=null;const _=e;_.k&&(u[_.k]=null)}}if(ut(l))so(l,a,12,[o,u]);else{const _=jt(l),x=dn(l);if(_||x){const m=()=>{if(n.f){const d=_?p(l)?h[l]:u[l]:l.value;if(s)ht(d)&&Kc(d,r);else if(ht(d))d.includes(r)||d.push(r);else if(_)u[l]=[r],p(l)&&(h[l]=u[l]);else{const A=[r];l.value=A,n.k&&(u[n.k]=A)}}else _?(u[l]=o,p(l)&&(h[l]=o)):x&&(l.value=o,n.k&&(u[n.k]=o))};if(o){const d=()=>{m(),ha.delete(n)};d.id=-1,ha.set(n,d),Pn(d,t)}else Gu(n),m()}}}function Gu(n){const e=ha.get(n);e&&(e.flags|=8,ha.delete(n))}Ta().requestIdleCallback;Ta().cancelIdleCallback;const Hr=n=>!!n.type.__asyncLoader,bd=n=>n.type.__isKeepAlive;function Fm(n,e){Ed(n,"a",e)}function Om(n,e){Ed(n,"da",e)}function Ed(n,e,t=hn){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ra(e,i,t),t){let s=t.parent;for(;s&&s.parent;)bd(s.parent.vnode)&&Bm(i,e,t,s),s=s.parent}}function Bm(n,e,t,i){const s=Ra(e,n,i,!0);Td(()=>{Kc(i[e],s)},t)}function Ra(n,e,t=hn,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Ci();const a=oo(t),l=ui(e,t,n,o);return a(),Pi(),l});return i?s.unshift(r):s.push(r),r}}const Ui=n=>(e,t=hn)=>{(!Jr||n==="sp")&&Ra(n,(...i)=>e(...i),t)},km=Ui("bm"),ro=Ui("m"),Vm=Ui("bu"),zm=Ui("u"),Ca=Ui("bum"),Td=Ui("um"),Hm=Ui("sp"),Gm=Ui("rtg"),Wm=Ui("rtc");function Xm(n,e=hn){Ra("ec",n,e)}const qm="components";function jm(n,e){return $m(qm,n,!0,e)||n}const Ym=Symbol.for("v-ndc");function $m(n,e,t=!0,i=!1){const s=In||hn;if(s){const r=s.type;{const a=Ig(r,!1);if(a&&(a===e||a===Gn(e)||a===Ea(Gn(e))))return r}const o=Wu(s[n]||r[n],e)||Wu(s.appContext[n],e);return!o&&i?r:o}}function Wu(n,e){return n&&(n[e]||n[Gn(e)]||n[Ea(Gn(e))])}function uu(n,e,t,i){let s;const r=t,o=ht(n);if(o||jt(n)){const a=o&&_s(n);let l=!1,c=!1;a&&(l=!Hn(n),c=Di(n),n=Aa(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=e(l?c?rr(Zn(n[u])):Zn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(zt(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const Yl=n=>n?Xd(n)?La(n):Yl(n.parent):null,Gr=mn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Yl(n.parent),$root:n=>Yl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>wd(n),$forceUpdate:n=>n.f||(n.f=()=>{lu(n.update)}),$nextTick:n=>n.n||(n.n=jl.bind(n.proxy)),$watch:n=>Lm.bind(n)}),Qa=(n,e)=>n!==Ut&&!n.__isScriptSetup&&Pt(n,e),Km={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Qa(i,e))return o[e]=1,i[e];if(s!==Ut&&Pt(s,e))return o[e]=2,s[e];if(Pt(r,e))return o[e]=3,r[e];if(t!==Ut&&Pt(t,e))return o[e]=4,t[e];$l&&(o[e]=0)}}const c=Gr[e];let u,h;if(c)return e==="$attrs"&&cn(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==Ut&&Pt(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Pt(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Qa(s,e)?(s[e]=t,!0):i!==Ut&&Pt(i,e)?(i[e]=t,!0):Pt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==Ut&&a[0]!=="$"&&Pt(n,a)||Qa(e,a)||Pt(r,a)||Pt(i,a)||Pt(Gr,a)||Pt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Pt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Xu(n){return ht(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let $l=!0;function Zm(n){const e=wd(n),t=n.proxy,i=n.ctx;$l=!1,e.beforeCreate&&qu(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:_,activated:x,deactivated:m,beforeDestroy:d,beforeUnmount:A,destroyed:D,unmounted:E,render:R,renderTracked:I,renderTriggered:L,errorCaptured:F,serverPrefetch:v,expose:S,inheritAttrs:N,components:k,directives:z,filters:K}=e;if(c&&Jm(c,i,null),o)for(const G in o){const $=o[G];ut($)&&(i[G]=$.bind(t))}if(s){const G=s.call(t,t);zt(G)&&(n.data=ru(G))}if($l=!0,r)for(const G in r){const $=r[G],pe=ut($)?$.bind(t,t):ut($.get)?$.get.bind(t,t):ai,ge=!ut($)&&ut($.set)?$.set.bind(t):ai,me=vs({get:pe,set:ge});Object.defineProperty(i,G,{enumerable:!0,configurable:!0,get:()=>me.value,set:Le=>me.value=Le})}if(a)for(const G in a)Ad(a[G],i,t,G);if(l){const G=ut(l)?l.call(t):l;Reflect.ownKeys(G).forEach($=>{Cm($,G[$])})}u&&qu(u,n,"c");function B(G,$){ht($)?$.forEach(pe=>G(pe.bind(t))):$&&G($.bind(t))}if(B(km,h),B(ro,f),B(Vm,p),B(zm,_),B(Fm,x),B(Om,m),B(Xm,F),B(Wm,I),B(Gm,L),B(Ca,A),B(Td,E),B(Hm,v),ht(S))if(S.length){const G=n.exposed||(n.exposed={});S.forEach($=>{Object.defineProperty(G,$,{get:()=>t[$],set:pe=>t[$]=pe,enumerable:!0})})}else n.exposed||(n.exposed={});R&&n.render===ai&&(n.render=R),N!=null&&(n.inheritAttrs=N),k&&(n.components=k),z&&(n.directives=z),v&&Sd(n)}function Jm(n,e,t=ai){ht(n)&&(n=Kl(n));for(const i in n){const s=n[i];let r;zt(s)?"default"in s?r=Qo(s.from||i,s.default,!0):r=Qo(s.from||i):r=Qo(s),dn(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function qu(n,e,t){ui(ht(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Ad(n,e,t,i){let s=i.includes(".")?yd(t,i):()=>t[i];if(jt(n)){const r=e[n];ut(r)&&xs(s,r)}else if(ut(n))xs(s,n.bind(t));else if(zt(n))if(ht(n))n.forEach(r=>Ad(r,e,t,i));else{const r=ut(n.handler)?n.handler.bind(t):e[n.handler];ut(r)&&xs(s,r,n)}}function wd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>fa(l,c,o,!0)),fa(l,e,o)),zt(e)&&r.set(e,l),l}function fa(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&fa(n,r,t,!0),s&&s.forEach(o=>fa(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Qm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Qm={data:ju,props:Yu,emits:Yu,methods:Ur,computed:Ur,beforeCreate:_n,created:_n,beforeMount:_n,mounted:_n,beforeUpdate:_n,updated:_n,beforeDestroy:_n,beforeUnmount:_n,destroyed:_n,unmounted:_n,activated:_n,deactivated:_n,errorCaptured:_n,serverPrefetch:_n,components:Ur,directives:Ur,watch:tg,provide:ju,inject:eg};function ju(n,e){return e?n?function(){return mn(ut(n)?n.call(this,this):n,ut(e)?e.call(this,this):e)}:e:n}function eg(n,e){return Ur(Kl(n),Kl(e))}function Kl(n){if(ht(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function _n(n,e){return n?[...new Set([].concat(n,e))]:e}function Ur(n,e){return n?mn(Object.create(null),n,e):e}function Yu(n,e){return n?ht(n)&&ht(e)?[...new Set([...n,...e])]:mn(Object.create(null),Xu(n),Xu(e??{})):e}function tg(n,e){if(!n)return e;if(!e)return n;const t=mn(Object.create(null),n);for(const i in e)t[i]=_n(n[i],e[i]);return t}function Rd(){return{app:null,config:{isNativeTag:Xf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ng=0;function ig(n,e){return function(i,s=null){ut(i)||(i=mn({},i)),s!=null&&!zt(s)&&(s=null);const r=Rd(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:ng++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Fg,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&ut(u.install)?(o.add(u),u.install(c,...h)):ut(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const p=c._ceVNode||Fn(i,s);return p.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(p,u,f),l=!0,c._container=u,u.__vue_app__=c,La(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ui(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=er;er=c;try{return u()}finally{er=h}}};return c}}let er=null;const sg=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Gn(e)}Modifiers`]||n[`${es(e)}Modifiers`];function rg(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Ut;let s=t;const r=e.startsWith("update:"),o=r&&sg(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>jt(u)?u.trim():u)),o.number&&(s=t.map(Jc)));let a,l=i[a=Ya(e)]||i[a=Ya(Gn(e))];!l&&r&&(l=i[a=Ya(es(e))]),l&&ui(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,ui(c,n,6,s)}}const og=new WeakMap;function Cd(n,e,t=!1){const i=t?og:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!ut(n)){const l=c=>{const u=Cd(c,e,!0);u&&(a=!0,mn(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(zt(n)&&i.set(n,null),null):(ht(r)?r.forEach(l=>o[l]=null):mn(o,r),zt(n)&&i.set(n,o),o)}function Pa(n,e){return!n||!ya(e)?!1:(e=e.slice(2).replace(/Once$/,""),Pt(n,e[0].toLowerCase()+e.slice(1))||Pt(n,es(e))||Pt(n,e))}function $u(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:p,ctx:_,inheritAttrs:x}=n,m=ua(n);let d,A;try{if(t.shapeFlag&4){const E=s||i,R=E;d=ii(c.call(R,E,u,h,p,f,_)),A=a}else{const E=e;d=ii(E.length>1?E(h,{attrs:a,slots:o,emit:l}):E(h,null)),A=e.props?a:ag(a)}}catch(E){Wr.length=0,wa(E,n,1),d=Fn(Zi)}let D=d;if(A&&x!==!1){const E=Object.keys(A),{shapeFlag:R}=D;E.length&&R&7&&(r&&E.some($c)&&(A=lg(A,r)),D=or(D,A,!1,!0))}return t.dirs&&(D=or(D,null,!1,!0),D.dirs=D.dirs?D.dirs.concat(t.dirs):t.dirs),t.transition&&cu(D,t.transition),d=D,ua(m),d}const ag=n=>{let e;for(const t in n)(t==="class"||t==="style"||ya(t))&&((e||(e={}))[t]=n[t]);return e},lg=(n,e)=>{const t={};for(const i in n)(!$c(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function cg(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Ku(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!Pa(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Ku(i,o,c):!0:!!o;return!1}function Ku(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!Pa(t,r))return!0}return!1}function ug({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Pd={},Dd=()=>Object.create(Pd),Ld=n=>Object.getPrototypeOf(n)===Pd;function hg(n,e,t,i=!1){const s={},r=Dd();n.propsDefaults=Object.create(null),Nd(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:mm(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function fg(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=Ct(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Pa(n.emitsOptions,f))continue;const p=e[f];if(l)if(Pt(r,f))p!==r[f]&&(r[f]=p,c=!0);else{const _=Gn(f);s[_]=Zl(l,a,_,p,n,!1)}else p!==r[f]&&(r[f]=p,c=!0)}}}else{Nd(n,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!Pt(e,h)&&((u=es(h))===h||!Pt(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=Zl(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!Pt(e,h))&&(delete r[h],c=!0)}c&&Ei(n.attrs,"set","")}function Nd(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Br(l))continue;const c=e[l];let u;s&&Pt(s,u=Gn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:Pa(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Ct(t),c=a||Ut;for(let u=0;u<r.length;u++){const h=r[u];t[h]=Zl(s,l,h,c[h],n,!Pt(c,h))}}return o}function Zl(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=Pt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ut(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=oo(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===es(t))&&(i=!0))}return i}const dg=new WeakMap;function Id(n,e,t=!1){const i=t?dg:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!ut(n)){const u=h=>{l=!0;const[f,p]=Id(h,e,!0);mn(o,f),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return zt(n)&&i.set(n,Zs),Zs;if(ht(r))for(let u=0;u<r.length;u++){const h=Gn(r[u]);Zu(h)&&(o[h]=Ut)}else if(r)for(const u in r){const h=Gn(u);if(Zu(h)){const f=r[u],p=o[h]=ht(f)||ut(f)?{type:f}:mn({},f),_=p.type;let x=!1,m=!0;if(ht(_))for(let d=0;d<_.length;++d){const A=_[d],D=ut(A)&&A.name;if(D==="Boolean"){x=!0;break}else D==="String"&&(m=!1)}else x=ut(_)&&_.name==="Boolean";p[0]=x,p[1]=m,(x||Pt(p,"default"))&&a.push(h)}}const c=[o,a];return zt(n)&&i.set(n,c),c}function Zu(n){return n[0]!=="$"&&!Br(n)}const hu=n=>n==="_"||n==="_ctx"||n==="$stable",fu=n=>ht(n)?n.map(ii):[ii(n)],pg=(n,e,t)=>{if(e._n)return e;const i=Rm((...s)=>fu(e(...s)),t);return i._c=!1,i},Ud=(n,e,t)=>{const i=n._ctx;for(const s in n){if(hu(s))continue;const r=n[s];if(ut(r))e[s]=pg(s,r,i);else if(r!=null){const o=fu(r);e[s]=()=>o}}},Fd=(n,e)=>{const t=fu(e);n.slots.default=()=>t},Od=(n,e,t)=>{for(const i in e)(t||!hu(i))&&(n[i]=e[i])},mg=(n,e,t)=>{const i=n.slots=Dd();if(n.vnode.shapeFlag&32){const s=e._;s?(Od(i,e,t),t&&Kf(i,"_",s,!0)):Ud(e,i)}else e&&Fd(n,e)},gg=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=Ut;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Od(s,e,t):(r=!e.$stable,Ud(e,s)),o=e}else e&&(Fd(n,e),o={default:1});if(r)for(const a in s)!hu(a)&&o[a]==null&&delete s[a]},Pn=yg;function _g(n){return xg(n)}function xg(n,e){const t=Ta();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=ai,insertStaticContent:_}=n,x=(O,H,Q,le=null,se=null,ce=null,U=void 0,_e=null,he=!!H.dynamicChildren)=>{if(O===H)return;O&&!wr(O,H)&&(le=te(O),Le(O,se,ce,!0),O=null),H.patchFlag===-2&&(he=!1,H.dynamicChildren=null);const{type:ae,ref:fe,shapeFlag:T}=H;switch(ae){case Da:m(O,H,Q,le);break;case Zi:d(O,H,Q,le);break;case tl:O==null&&A(H,Q,le,U);break;case Ln:k(O,H,Q,le,se,ce,U,_e,he);break;default:T&1?R(O,H,Q,le,se,ce,U,_e,he):T&6?z(O,H,Q,le,se,ce,U,_e,he):(T&64||T&128)&&ae.process(O,H,Q,le,se,ce,U,_e,he,Oe)}fe!=null&&se?zr(fe,O&&O.ref,ce,H||O,!H):fe==null&&O&&O.ref!=null&&zr(O.ref,null,ce,O,!0)},m=(O,H,Q,le)=>{if(O==null)i(H.el=a(H.children),Q,le);else{const se=H.el=O.el;H.children!==O.children&&c(se,H.children)}},d=(O,H,Q,le)=>{O==null?i(H.el=l(H.children||""),Q,le):H.el=O.el},A=(O,H,Q,le)=>{[O.el,O.anchor]=_(O.children,H,Q,le,O.el,O.anchor)},D=({el:O,anchor:H},Q,le)=>{let se;for(;O&&O!==H;)se=f(O),i(O,Q,le),O=se;i(H,Q,le)},E=({el:O,anchor:H})=>{let Q;for(;O&&O!==H;)Q=f(O),s(O),O=Q;s(H)},R=(O,H,Q,le,se,ce,U,_e,he)=>{if(H.type==="svg"?U="svg":H.type==="math"&&(U="mathml"),O==null)I(H,Q,le,se,ce,U,_e,he);else{const ae=O.el&&O.el._isVueCE?O.el:null;try{ae&&ae._beginPatch(),v(O,H,se,ce,U,_e,he)}finally{ae&&ae._endPatch()}}},I=(O,H,Q,le,se,ce,U,_e)=>{let he,ae;const{props:fe,shapeFlag:T,transition:g,dirs:V}=O;if(he=O.el=o(O.type,ce,fe&&fe.is,fe),T&8?u(he,O.children):T&16&&F(O.children,he,null,le,se,el(O,ce),U,_e),V&&ns(O,null,le,"created"),L(he,O,O.scopeId,U,le),fe){for(const oe in fe)oe!=="value"&&!Br(oe)&&r(he,oe,null,fe[oe],ce,le);"value"in fe&&r(he,"value",null,fe.value,ce),(ae=fe.onVnodeBeforeMount)&&ei(ae,le,O)}V&&ns(O,null,le,"beforeMount");const ee=vg(se,g);ee&&g.beforeEnter(he),i(he,H,Q),((ae=fe&&fe.onVnodeMounted)||ee||V)&&Pn(()=>{ae&&ei(ae,le,O),ee&&g.enter(he),V&&ns(O,null,le,"mounted")},se)},L=(O,H,Q,le,se)=>{if(Q&&p(O,Q),le)for(let ce=0;ce<le.length;ce++)p(O,le[ce]);if(se){let ce=se.subTree;if(H===ce||zd(ce.type)&&(ce.ssContent===H||ce.ssFallback===H)){const U=se.vnode;L(O,U,U.scopeId,U.slotScopeIds,se.parent)}}},F=(O,H,Q,le,se,ce,U,_e,he=0)=>{for(let ae=he;ae<O.length;ae++){const fe=O[ae]=_e?qi(O[ae]):ii(O[ae]);x(null,fe,H,Q,le,se,ce,U,_e)}},v=(O,H,Q,le,se,ce,U)=>{const _e=H.el=O.el;let{patchFlag:he,dynamicChildren:ae,dirs:fe}=H;he|=O.patchFlag&16;const T=O.props||Ut,g=H.props||Ut;let V;if(Q&&is(Q,!1),(V=g.onVnodeBeforeUpdate)&&ei(V,Q,H,O),fe&&ns(H,O,Q,"beforeUpdate"),Q&&is(Q,!0),(T.innerHTML&&g.innerHTML==null||T.textContent&&g.textContent==null)&&u(_e,""),ae?S(O.dynamicChildren,ae,_e,Q,le,el(H,se),ce):U||$(O,H,_e,null,Q,le,el(H,se),ce,!1),he>0){if(he&16)N(_e,T,g,Q,se);else if(he&2&&T.class!==g.class&&r(_e,"class",null,g.class,se),he&4&&r(_e,"style",T.style,g.style,se),he&8){const ee=H.dynamicProps;for(let oe=0;oe<ee.length;oe++){const J=ee[oe],Ie=T[J],Me=g[J];(Me!==Ie||J==="value")&&r(_e,J,Ie,Me,se,Q)}}he&1&&O.children!==H.children&&u(_e,H.children)}else!U&&ae==null&&N(_e,T,g,Q,se);((V=g.onVnodeUpdated)||fe)&&Pn(()=>{V&&ei(V,Q,H,O),fe&&ns(H,O,Q,"updated")},le)},S=(O,H,Q,le,se,ce,U)=>{for(let _e=0;_e<H.length;_e++){const he=O[_e],ae=H[_e],fe=he.el&&(he.type===Ln||!wr(he,ae)||he.shapeFlag&198)?h(he.el):Q;x(he,ae,fe,null,le,se,ce,U,!0)}},N=(O,H,Q,le,se)=>{if(H!==Q){if(H!==Ut)for(const ce in H)!Br(ce)&&!(ce in Q)&&r(O,ce,H[ce],null,se,le);for(const ce in Q){if(Br(ce))continue;const U=Q[ce],_e=H[ce];U!==_e&&ce!=="value"&&r(O,ce,_e,U,se,le)}"value"in Q&&r(O,"value",H.value,Q.value,se)}},k=(O,H,Q,le,se,ce,U,_e,he)=>{const ae=H.el=O?O.el:a(""),fe=H.anchor=O?O.anchor:a("");let{patchFlag:T,dynamicChildren:g,slotScopeIds:V}=H;V&&(_e=_e?_e.concat(V):V),O==null?(i(ae,Q,le),i(fe,Q,le),F(H.children||[],Q,fe,se,ce,U,_e,he)):T>0&&T&64&&g&&O.dynamicChildren&&O.dynamicChildren.length===g.length?(S(O.dynamicChildren,g,Q,se,ce,U,_e),(H.key!=null||se&&H===se.subTree)&&Bd(O,H,!0)):$(O,H,Q,fe,se,ce,U,_e,he)},z=(O,H,Q,le,se,ce,U,_e,he)=>{H.slotScopeIds=_e,O==null?H.shapeFlag&512?se.ctx.activate(H,Q,le,U,he):K(H,Q,le,se,ce,U,he):Y(O,H,he)},K=(O,H,Q,le,se,ce,U)=>{const _e=O.component=Rg(O,le,se);if(bd(O)&&(_e.ctx.renderer=Oe),Pg(_e,!1,U),_e.asyncDep){if(se&&se.registerDep(_e,B,U),!O.el){const he=_e.subTree=Fn(Zi);d(null,he,H,Q),O.placeholder=he.el}}else B(_e,O,H,Q,se,ce,U)},Y=(O,H,Q)=>{const le=H.component=O.component;if(cg(O,H,Q))if(le.asyncDep&&!le.asyncResolved){G(le,H,Q);return}else le.next=H,le.update();else H.el=O.el,le.vnode=H},B=(O,H,Q,le,se,ce,U)=>{const _e=()=>{if(O.isMounted){let{next:T,bu:g,u:V,parent:ee,vnode:oe}=O;{const $e=kd(O);if($e){T&&(T.el=oe.el,G(O,T,U)),$e.asyncDep.then(()=>{O.isUnmounted||_e()});return}}let J=T,Ie;is(O,!1),T?(T.el=oe.el,G(O,T,U)):T=oe,g&&Jo(g),(Ie=T.props&&T.props.onVnodeBeforeUpdate)&&ei(Ie,ee,T,oe),is(O,!0);const Me=$u(O),Be=O.subTree;O.subTree=Me,x(Be,Me,h(Be.el),te(Be),O,se,ce),T.el=Me.el,J===null&&ug(O,Me.el),V&&Pn(V,se),(Ie=T.props&&T.props.onVnodeUpdated)&&Pn(()=>ei(Ie,ee,T,oe),se)}else{let T;const{el:g,props:V}=H,{bm:ee,m:oe,parent:J,root:Ie,type:Me}=O,Be=Hr(H);is(O,!1),ee&&Jo(ee),!Be&&(T=V&&V.onVnodeBeforeMount)&&ei(T,J,H),is(O,!0);{Ie.ce&&Ie.ce._def.shadowRoot!==!1&&Ie.ce._injectChildStyle(Me);const $e=O.subTree=$u(O);x(null,$e,Q,le,O,se,ce),H.el=$e.el}if(oe&&Pn(oe,se),!Be&&(T=V&&V.onVnodeMounted)){const $e=H;Pn(()=>ei(T,J,$e),se)}(H.shapeFlag&256||J&&Hr(J.vnode)&&J.vnode.shapeFlag&256)&&O.a&&Pn(O.a,se),O.isMounted=!0,H=Q=le=null}};O.scope.on();const he=O.effect=new ed(_e);O.scope.off();const ae=O.update=he.run.bind(he),fe=O.job=he.runIfDirty.bind(he);fe.i=O,fe.id=O.uid,he.scheduler=()=>lu(fe),is(O,!0),ae()},G=(O,H,Q)=>{H.component=O;const le=O.vnode.props;O.vnode=H,O.next=null,fg(O,H.props,le,Q),gg(O,H.children,Q),Ci(),zu(O),Pi()},$=(O,H,Q,le,se,ce,U,_e,he=!1)=>{const ae=O&&O.children,fe=O?O.shapeFlag:0,T=H.children,{patchFlag:g,shapeFlag:V}=H;if(g>0){if(g&128){ge(ae,T,Q,le,se,ce,U,_e,he);return}else if(g&256){pe(ae,T,Q,le,se,ce,U,_e,he);return}}V&8?(fe&16&&q(ae,se,ce),T!==ae&&u(Q,T)):fe&16?V&16?ge(ae,T,Q,le,se,ce,U,_e,he):q(ae,se,ce,!0):(fe&8&&u(Q,""),V&16&&F(T,Q,le,se,ce,U,_e,he))},pe=(O,H,Q,le,se,ce,U,_e,he)=>{O=O||Zs,H=H||Zs;const ae=O.length,fe=H.length,T=Math.min(ae,fe);let g;for(g=0;g<T;g++){const V=H[g]=he?qi(H[g]):ii(H[g]);x(O[g],V,Q,null,se,ce,U,_e,he)}ae>fe?q(O,se,ce,!0,!1,T):F(H,Q,le,se,ce,U,_e,he,T)},ge=(O,H,Q,le,se,ce,U,_e,he)=>{let ae=0;const fe=H.length;let T=O.length-1,g=fe-1;for(;ae<=T&&ae<=g;){const V=O[ae],ee=H[ae]=he?qi(H[ae]):ii(H[ae]);if(wr(V,ee))x(V,ee,Q,null,se,ce,U,_e,he);else break;ae++}for(;ae<=T&&ae<=g;){const V=O[T],ee=H[g]=he?qi(H[g]):ii(H[g]);if(wr(V,ee))x(V,ee,Q,null,se,ce,U,_e,he);else break;T--,g--}if(ae>T){if(ae<=g){const V=g+1,ee=V<fe?H[V].el:le;for(;ae<=g;)x(null,H[ae]=he?qi(H[ae]):ii(H[ae]),Q,ee,se,ce,U,_e,he),ae++}}else if(ae>g)for(;ae<=T;)Le(O[ae],se,ce,!0),ae++;else{const V=ae,ee=ae,oe=new Map;for(ae=ee;ae<=g;ae++){const Pe=H[ae]=he?qi(H[ae]):ii(H[ae]);Pe.key!=null&&oe.set(Pe.key,ae)}let J,Ie=0;const Me=g-ee+1;let Be=!1,$e=0;const xe=new Array(Me);for(ae=0;ae<Me;ae++)xe[ae]=0;for(ae=V;ae<=T;ae++){const Pe=O[ae];if(Ie>=Me){Le(Pe,se,ce,!0);continue}let Ve;if(Pe.key!=null)Ve=oe.get(Pe.key);else for(J=ee;J<=g;J++)if(xe[J-ee]===0&&wr(Pe,H[J])){Ve=J;break}Ve===void 0?Le(Pe,se,ce,!0):(xe[Ve-ee]=ae+1,Ve>=$e?$e=Ve:Be=!0,x(Pe,H[Ve],Q,null,se,ce,U,_e,he),Ie++)}const Ae=Be?Mg(xe):Zs;for(J=Ae.length-1,ae=Me-1;ae>=0;ae--){const Pe=ee+ae,Ve=H[Pe],Te=H[Pe+1],lt=Pe+1<fe?Te.el||Vd(Te):le;xe[ae]===0?x(null,Ve,Q,lt,se,ce,U,_e,he):Be&&(J<0||ae!==Ae[J]?me(Ve,Q,lt,2):J--)}}},me=(O,H,Q,le,se=null)=>{const{el:ce,type:U,transition:_e,children:he,shapeFlag:ae}=O;if(ae&6){me(O.component.subTree,H,Q,le);return}if(ae&128){O.suspense.move(H,Q,le);return}if(ae&64){U.move(O,H,Q,Oe);return}if(U===Ln){i(ce,H,Q);for(let T=0;T<he.length;T++)me(he[T],H,Q,le);i(O.anchor,H,Q);return}if(U===tl){D(O,H,Q);return}if(le!==2&&ae&1&&_e)if(le===0)_e.beforeEnter(ce),i(ce,H,Q),Pn(()=>_e.enter(ce),se);else{const{leave:T,delayLeave:g,afterLeave:V}=_e,ee=()=>{O.ctx.isUnmounted?s(ce):i(ce,H,Q)},oe=()=>{ce._isLeaving&&ce[Um](!0),T(ce,()=>{ee(),V&&V()})};g?g(ce,ee,oe):oe()}else i(ce,H,Q)},Le=(O,H,Q,le=!1,se=!1)=>{const{type:ce,props:U,ref:_e,children:he,dynamicChildren:ae,shapeFlag:fe,patchFlag:T,dirs:g,cacheIndex:V}=O;if(T===-2&&(se=!1),_e!=null&&(Ci(),zr(_e,null,Q,O,!0),Pi()),V!=null&&(H.renderCache[V]=void 0),fe&256){H.ctx.deactivate(O);return}const ee=fe&1&&g,oe=!Hr(O);let J;if(oe&&(J=U&&U.onVnodeBeforeUnmount)&&ei(J,H,O),fe&6)Ce(O.component,Q,le);else{if(fe&128){O.suspense.unmount(Q,le);return}ee&&ns(O,null,H,"beforeUnmount"),fe&64?O.type.remove(O,H,Q,Oe,le):ae&&!ae.hasOnce&&(ce!==Ln||T>0&&T&64)?q(ae,H,Q,!1,!0):(ce===Ln&&T&384||!se&&fe&16)&&q(he,H,Q),le&&Ee(O)}(oe&&(J=U&&U.onVnodeUnmounted)||ee)&&Pn(()=>{J&&ei(J,H,O),ee&&ns(O,null,H,"unmounted")},Q)},Ee=O=>{const{type:H,el:Q,anchor:le,transition:se}=O;if(H===Ln){ke(Q,le);return}if(H===tl){E(O);return}const ce=()=>{s(Q),se&&!se.persisted&&se.afterLeave&&se.afterLeave()};if(O.shapeFlag&1&&se&&!se.persisted){const{leave:U,delayLeave:_e}=se,he=()=>U(Q,ce);_e?_e(O.el,ce,he):he()}else ce()},ke=(O,H)=>{let Q;for(;O!==H;)Q=f(O),s(O),O=Q;s(H)},Ce=(O,H,Q)=>{const{bum:le,scope:se,job:ce,subTree:U,um:_e,m:he,a:ae}=O;Ju(he),Ju(ae),le&&Jo(le),se.stop(),ce&&(ce.flags|=8,Le(U,O,H,Q)),_e&&Pn(_e,H),Pn(()=>{O.isUnmounted=!0},H)},q=(O,H,Q,le=!1,se=!1,ce=0)=>{for(let U=ce;U<O.length;U++)Le(O[U],H,Q,le,se)},te=O=>{if(O.shapeFlag&6)return te(O.component.subTree);if(O.shapeFlag&128)return O.suspense.next();const H=f(O.anchor||O.el),Q=H&&H[Nm];return Q?f(Q):H};let Se=!1;const Qe=(O,H,Q)=>{let le;O==null?H._vnode&&(Le(H._vnode,null,null,!0),le=H._vnode.component):x(H._vnode||null,O,H,null,null,null,Q),H._vnode=O,Se||(Se=!0,zu(le),_d(),Se=!1)},Oe={p:x,um:Le,m:me,r:Ee,mt:K,mc:F,pc:$,pbc:S,n:te,o:n};return{render:Qe,hydrate:void 0,createApp:ig(Qe)}}function el({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function is({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function vg(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Bd(n,e,t=!1){const i=n.children,s=e.children;if(ht(i)&&ht(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=qi(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Bd(o,a)),a.type===Da&&(a.patchFlag!==-1?a.el=o.el:a.__elIndex=r+(n.type===Ln?1:0)),a.type===Zi&&!a.el&&(a.el=o.el)}}function Mg(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function kd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:kd(e)}function Ju(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Vd(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Vd(e.subTree):null}const zd=n=>n.__isSuspense;function yg(n,e){e&&e.pendingBranch?ht(n)?e.effects.push(...n):e.effects.push(n):wm(n)}const Ln=Symbol.for("v-fgt"),Da=Symbol.for("v-txt"),Zi=Symbol.for("v-cmt"),tl=Symbol.for("v-stc"),Wr=[];let Un=null;function Ot(n=!1){Wr.push(Un=n?null:[])}function Sg(){Wr.pop(),Un=Wr[Wr.length-1]||null}let Zr=1;function Qu(n,e=!1){Zr+=n,n<0&&Un&&e&&(Un.hasOnce=!0)}function Hd(n){return n.dynamicChildren=Zr>0?Un||Zs:null,Sg(),Zr>0&&Un&&Un.push(n),n}function Gt(n,e,t,i,s,r){return Hd(rt(n,e,t,i,s,r,!0))}function du(n,e,t,i,s){return Hd(Fn(n,e,t,i,s,!0))}function Gd(n){return n?n.__v_isVNode===!0:!1}function wr(n,e){return n.type===e.type&&n.key===e.key}const Wd=({key:n})=>n??null,ea=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?jt(n)||dn(n)||ut(n)?{i:In,r:n,k:e,f:!!t}:n:null);function rt(n,e=null,t=null,i=0,s=null,r=n===Ln?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Wd(e),ref:e&&ea(e),scopeId:vd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:In};return a?(mu(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=jt(t)?8:16),Zr>0&&!o&&Un&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Un.push(l),l}const Fn=bg;function bg(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Ym)&&(n=Zi),Gd(n)){const a=or(n,e,!0);return t&&mu(a,t),Zr>0&&!r&&Un&&(a.shapeFlag&6?Un[Un.indexOf(n)]=a:Un.push(a)),a.patchFlag=-2,a}if(Ug(n)&&(n=n.__vccOpts),e){e=Eg(e);let{class:a,style:l}=e;a&&!jt(a)&&(e.class=ms(a)),zt(l)&&(au(l)&&!ht(l)&&(l=mn({},l)),e.style=Qc(l))}const o=jt(n)?1:zd(n)?128:Im(n)?64:zt(n)?4:ut(n)?2:0;return rt(n,e,t,i,s,o,r,!0)}function Eg(n){return n?au(n)||Ld(n)?mn({},n):n:null}function or(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?Tg(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Wd(c),ref:e&&e.ref?t&&r?ht(r)?r.concat(ea(e)):[r,ea(e)]:ea(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ln?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&or(n.ssContent),ssFallback:n.ssFallback&&or(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&cu(u,l.clone(u)),u}function pu(n=" ",e=0){return Fn(Da,null,n,e)}function Ms(n="",e=!1){return e?(Ot(),du(Zi,null,n)):Fn(Zi,null,n)}function ii(n){return n==null||typeof n=="boolean"?Fn(Zi):ht(n)?Fn(Ln,null,n.slice()):Gd(n)?qi(n):Fn(Da,null,String(n))}function qi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:or(n)}function mu(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ht(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),mu(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Ld(e)?e._ctx=In:s===3&&In&&(In.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ut(e)?(e={default:e,_ctx:In},t=32):(e=String(e),i&64?(t=16,e=[pu(e)]):t=8);n.children=e,n.shapeFlag|=t}function Tg(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=ms([e.class,i.class]));else if(s==="style")e.style=Qc([e.style,i.style]);else if(ya(s)){const r=e[s],o=i[s];o&&r!==o&&!(ht(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function ei(n,e,t,i=null){ui(n,e,7,[t,i])}const Ag=Rd();let wg=0;function Rg(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Ag,r={uid:wg++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new $p(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Id(i,s),emitsOptions:Cd(i,s),emit:null,emitted:null,propsDefaults:Ut,inheritAttrs:i.inheritAttrs,ctx:Ut,data:Ut,props:Ut,attrs:Ut,slots:Ut,refs:Ut,setupState:Ut,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=rg.bind(null,r),n.ce&&n.ce(r),r}let hn=null;const Cg=()=>hn||In;let da,Jl;{const n=Ta(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};da=e("__VUE_INSTANCE_SETTERS__",t=>hn=t),Jl=e("__VUE_SSR_SETTERS__",t=>Jr=t)}const oo=n=>{const e=hn;return da(n),n.scope.on(),()=>{n.scope.off(),da(e)}},eh=()=>{hn&&hn.scope.off(),da(null)};function Xd(n){return n.vnode.shapeFlag&4}let Jr=!1;function Pg(n,e=!1,t=!1){e&&Jl(e);const{props:i,children:s}=n.vnode,r=Xd(n);hg(n,i,r,e),mg(n,s,t||e);const o=r?Dg(n,e):void 0;return e&&Jl(!1),o}function Dg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Km);const{setup:i}=t;if(i){Ci();const s=n.setupContext=i.length>1?Ng(n):null,r=oo(n),o=so(i,n,0,[n.props,s]),a=jf(o);if(Pi(),r(),(a||n.sp)&&!Hr(n)&&Sd(n),a){if(o.then(eh,eh),e)return o.then(l=>{th(n,l)}).catch(l=>{wa(l,n,0)});n.asyncDep=o}else th(n,o)}else qd(n)}function th(n,e,t){ut(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:zt(e)&&(n.setupState=pd(e)),qd(n)}function qd(n,e,t){const i=n.type;n.render||(n.render=i.render||ai);{const s=oo(n);Ci();try{Zm(n)}finally{Pi(),s()}}}const Lg={get(n,e){return cn(n,"get",""),n[e]}};function Ng(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Lg),slots:n.slots,emit:n.emit,expose:e}}function La(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(pd(gm(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Gr)return Gr[t](n)},has(e,t){return t in e||t in Gr}})):n.proxy}function Ig(n,e=!0){return ut(n)?n.displayName||n.name:n.name||e&&n.__name}function Ug(n){return ut(n)&&"__vccOpts"in n}const vs=(n,e)=>Sm(n,e,Jr),Fg="3.5.26";let Ql;const nh=typeof window<"u"&&window.trustedTypes;if(nh)try{Ql=nh.createPolicy("vue",{createHTML:n=>n})}catch{}const jd=Ql?n=>Ql.createHTML(n):n=>n,Og="http://www.w3.org/2000/svg",Bg="http://www.w3.org/1998/Math/MathML",bi=typeof document<"u"?document:null,ih=bi&&bi.createElement("template"),kg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?bi.createElementNS(Og,n):e==="mathml"?bi.createElementNS(Bg,n):t?bi.createElement(n,{is:t}):bi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>bi.createTextNode(n),createComment:n=>bi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>bi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{ih.innerHTML=jd(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=ih.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Vg=Symbol("_vtc");function zg(n,e,t){const i=n[Vg];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const sh=Symbol("_vod"),Hg=Symbol("_vsh"),Gg=Symbol(""),Wg=/(?:^|;)\s*display\s*:/;function Xg(n,e,t){const i=n.style,s=jt(t);let r=!1;if(t&&!s){if(e)if(jt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&ta(i,a,"")}else for(const o in e)t[o]==null&&ta(i,o,"");for(const o in t)o==="display"&&(r=!0),ta(i,o,t[o])}else if(s){if(e!==t){const o=i[Gg];o&&(t+=";"+o),i.cssText=t,r=Wg.test(t)}}else e&&n.removeAttribute("style");sh in n&&(n[sh]=r?i.display:"",n[Hg]&&(i.display="none"))}const rh=/\s*!important$/;function ta(n,e,t){if(ht(t))t.forEach(i=>ta(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=qg(n,e);rh.test(t)?n.setProperty(es(i),t.replace(rh,""),"important"):n[i]=t}}const oh=["Webkit","Moz","ms"],nl={};function qg(n,e){const t=nl[e];if(t)return t;let i=Gn(e);if(i!=="filter"&&i in n)return nl[e]=i;i=Ea(i);for(let s=0;s<oh.length;s++){const r=oh[s]+i;if(r in n)return nl[e]=r}return e}const ah="http://www.w3.org/1999/xlink";function lh(n,e,t,i,s,r=Yp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(ah,e.slice(6,e.length)):n.setAttributeNS(ah,e,t):t==null||r&&!Zf(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Qi(t)?String(t):t)}function ch(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?jd(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Zf(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function qs(n,e,t,i){n.addEventListener(e,t,i)}function jg(n,e,t,i){n.removeEventListener(e,t,i)}const uh=Symbol("_vei");function Yg(n,e,t,i,s=null){const r=n[uh]||(n[uh]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=$g(e);if(i){const c=r[e]=Jg(i,s);qs(n,a,c,l)}else o&&(jg(n,a,o,l),r[e]=void 0)}}const hh=/(?:Once|Passive|Capture)$/;function $g(n){let e;if(hh.test(n)){e={};let i;for(;i=n.match(hh);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):es(n.slice(2)),e]}let il=0;const Kg=Promise.resolve(),Zg=()=>il||(Kg.then(()=>il=0),il=Date.now());function Jg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;ui(Qg(i,t.value),e,5,[i])};return t.value=n,t.attached=Zg(),t}function Qg(n,e){if(ht(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const fh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,e_=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?zg(n,i,o):e==="style"?Xg(n,t,i):ya(e)?$c(e)||Yg(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):t_(n,e,i,o))?(ch(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&lh(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!jt(i))?ch(n,Gn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),lh(n,e,i,o))};function t_(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&fh(e)&&ut(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return fh(e)&&jt(t)?!1:e in n}const dh=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ht(e)?t=>Jo(e,t):e};function n_(n){n.target.composing=!0}function ph(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const sl=Symbol("_assign");function mh(n,e,t){return e&&(n=n.trim()),t&&(n=Jc(n)),n}const gh={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[sl]=dh(s);const r=i||s.props&&s.props.type==="number";qs(n,e?"change":"input",o=>{o.target.composing||n[sl](mh(n.value,t,r))}),(t||r)&&qs(n,"change",()=>{n.value=mh(n.value,t,r)}),e||(qs(n,"compositionstart",n_),qs(n,"compositionend",ph),qs(n,"change",ph))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[sl]=dh(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Jc(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l))}},i_=["ctrl","shift","alt","meta"],s_={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>i_.some(t=>n[`${t}Key`]&&!e.includes(t))},Yd=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((s,...r)=>{for(let o=0;o<e.length;o++){const a=s_[e[o]];if(a&&a(s,e))return}return n(s,...r)}))},r_={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},_h=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=(s=>{if(!("key"in s))return;const r=es(s.key);if(e.some(o=>o===r||r_[o]===r))return n(s)}))},o_=mn({patchProp:e_},kg);let xh;function a_(){return xh||(xh=_g(o_))}const l_=((...n)=>{const e=a_().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=u_(i);if(!s)return;const r=e._component;!ut(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,c_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function c_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function u_(n){return jt(n)?document.querySelector(n):n}const h_={class:"tree-node"},f_=["aria-label"],d_={key:1,class:"node-spacer"},p_={class:"node-icon"},m_={class:"node-name"},g_={class:"node-type"},__={key:0,class:"node-children"},x_=mr({__name:"TreeNode",props:{node:{},selected:{},expandAll:{},collapseAll:{},isRoot:{type:Boolean},forceCollapsed:{type:Boolean}},emits:["select"],setup(n,{emit:e}){const t=n,i=e,s=ln(!0),r=ln(!1);ro(()=>{t.forceCollapsed&&(s.value=!1)}),xs(()=>t.expandAll,h=>{h!==void 0&&h>0&&(s.value=!0,r.value=!1)}),xs(()=>t.collapseAll,h=>{h!==void 0&&h>0&&(t.isRoot?(s.value=!0,r.value=!0):(s.value=!1,r.value=!1))}),xs(()=>t.forceCollapsed,h=>{h&&(s.value=!1)});const o=vs(()=>t.selected===t.node),a=vs(()=>t.node.children&&t.node.children.length>0),l=()=>{i("select",t.node)},c=h=>{h.stopPropagation();const f=!s.value;s.value=!s.value,f&&s.value&&a.value?r.value=!0:s.value||(r.value=!1)},u=vs(()=>{switch(t.node.type){case"robot":return"🤖";case"link":return"🔗";case"joint":return"⚙️";default:return"📦"}});return(h,f)=>{const p=jm("TreeNode",!0);return Ot(),Gt("div",h_,[rt("div",{class:ms(["node-label",{selected:o.value}]),onClick:l},[a.value?(Ot(),Gt("button",{key:0,class:"expand-button",onClick:c,"aria-label":s.value?"Collapse":"Expand"},Dn(s.value?"▼":"▶"),9,f_)):(Ot(),Gt("span",d_)),rt("span",p_,Dn(u.value),1),rt("span",m_,Dn(n.node.name),1),rt("span",g_,"["+Dn(n.node.type)+"]",1)],2),a.value&&s.value?(Ot(),Gt("div",__,[(Ot(!0),Gt(Ln,null,uu(n.node.children,(_,x)=>(Ot(),du(p,{key:x,node:_,selected:n.selected,"expand-all":n.expandAll,"collapse-all":n.collapseAll,"is-root":!1,"force-collapsed":r.value,onSelect:f[0]||(f[0]=m=>h.$emit("select",m))},null,8,["node","selected","expand-all","collapse-all","force-collapsed"]))),128))])):Ms("",!0)])}}}),gr=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},v_=gr(x_,[["__scopeId","data-v-2bf18102"]]),M_={class:"hierarchy-panel"},y_={class:"panel-header"},S_={key:0,class:"header-actions"},b_={class:"panel-content"},E_={key:0,class:"empty-state"},T_={key:1,class:"tree"},A_=mr({__name:"HierarchyPanel",props:{root:{},selected:{}},emits:["select"],setup(n,{emit:e}){const t=n,i=e,s=vs(()=>t.root!==null),r=ln(0),o=ln(0),a=u=>{i("select",u)},l=()=>{r.value++},c=()=>{o.value++};return(u,h)=>(Ot(),Gt("aside",M_,[rt("div",y_,[h[0]||(h[0]=rt("h2",null,"Hierarchy",-1)),s.value?(Ot(),Gt("div",S_,[rt("button",{class:"action-button",onClick:l,title:"Expand all nodes"}," ⊞ "),rt("button",{class:"action-button",onClick:c,title:"Collapse all nodes"}," ⊟ ")])):Ms("",!0)]),rt("div",b_,[s.value?(Ot(),Gt("div",T_,[n.root?(Ot(),du(v_,{key:0,node:n.root,selected:n.selected,"expand-all":r.value,"collapse-all":o.value,"is-root":!0,onSelect:a},null,8,["node","selected","expand-all","collapse-all"])):Ms("",!0)])):(Ot(),Gt("div",E_,[...h[1]||(h[1]=[rt("p",null,"No model loaded",-1),rt("p",{class:"hint"},"Upload a URDF file to get started",-1)])]))])]))}}),w_=gr(A_,[["__scopeId","data-v-36f6e9c1"]]);const gu="182",tr={ROTATE:0,DOLLY:1,PAN:2},$s={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},R_=0,vh=1,C_=2,na=1,P_=2,Fr=3,Li=0,Tn=1,ri=2,wi=0,nr=1,Mh=2,yh=3,Sh=4,D_=5,hs=100,L_=101,N_=102,I_=103,U_=104,F_=200,O_=201,B_=202,k_=203,ec=204,tc=205,V_=206,z_=207,H_=208,G_=209,W_=210,X_=211,q_=212,j_=213,Y_=214,nc=0,ic=1,sc=2,ar=3,rc=4,oc=5,ac=6,lc=7,Na=0,$_=1,K_=2,li=0,$d=1,Kd=2,Zd=3,Jd=4,Qd=5,ep=6,tp=7,bh="attached",Z_="detached",np=300,ys=301,lr=302,cc=303,uc=304,Ia=306,ds=1e3,On=1001,hc=1002,sn=1003,J_=1004,Mo=1005,Kt=1006,rl=1007,Ai=1008,Nn=1009,ip=1010,sp=1011,Qr=1012,_u=1013,hi=1014,$n=1015,Ni=1016,xu=1017,vu=1018,eo=1020,rp=35902,op=35899,ap=1021,lp=1022,zn=1023,Ii=1026,ps=1027,cp=1028,Mu=1029,cr=1030,yu=1031,Su=1033,ia=33776,sa=33777,ra=33778,oa=33779,fc=35840,dc=35841,pc=35842,mc=35843,gc=36196,_c=37492,xc=37496,vc=37488,Mc=37489,yc=37490,Sc=37491,bc=37808,Ec=37809,Tc=37810,Ac=37811,wc=37812,Rc=37813,Cc=37814,Pc=37815,Dc=37816,Lc=37817,Nc=37818,Ic=37819,Uc=37820,Fc=37821,Oc=36492,Bc=36494,kc=36495,Vc=36283,zc=36284,Hc=36285,Gc=36286,pa=2300,Wc=2301,ol=2302,Eh=2400,Th=2401,Ah=2402,Q_=2500,e0=3200,bu=0,t0=1,Yi="",Wt="srgb",ur="srgb-linear",ma="linear",Lt="srgb",Cs=7680,wh=519,n0=512,i0=513,s0=514,Eu=515,r0=516,o0=517,Tu=518,a0=519,Rh=35044,Ch="300 es",oi=2e3,ga=2001;function up(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function l0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function to(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function c0(){const n=to("canvas");return n.style.display="block",n}const Ph={};function Dh(...n){const e="THREE."+n.shift();console.log(e,...n)}function nt(...n){const e="THREE."+n.shift();console.warn(e,...n)}function _t(...n){const e="THREE."+n.shift();console.error(e,...n)}function no(...n){const e=n.join(" ");e in Ph||(Ph[e]=!0,nt(...n))}function u0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}class Ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lh=1234567;const ir=Math.PI/180,hr=180/Math.PI;function ts(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function xt(n,e,t){return Math.max(e,Math.min(t,n))}function Au(n,e){return(n%e+e)%e}function h0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function f0(n,e,t){return n!==e?(t-n)/(e-n):0}function Xr(n,e,t){return(1-t)*n+t*e}function d0(n,e,t,i){return Xr(n,e,1-Math.exp(-t*i))}function p0(n,e=1){return e-Math.abs(Au(n,e*2)-e)}function m0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function g0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function _0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function x0(n,e){return n+Math.random()*(e-n)}function v0(n){return n*(.5-Math.random())}function M0(n){n!==void 0&&(Lh=n);let e=Lh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function y0(n){return n*ir}function S0(n){return n*hr}function b0(n){return(n&n-1)===0&&n!==0}function E0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function T0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function A0(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),p=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*_,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*_,a*c);break;case"ZYZ":n.set(l*_,l*p,a*u,a*c);break;default:nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function js(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function xn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ys={DEG2RAD:ir,RAD2DEG:hr,generateUUID:ts,clamp:xt,euclideanModulo:Au,mapLinear:h0,inverseLerp:f0,lerp:Xr,damp:d0,pingpong:p0,smoothstep:m0,smootherstep:g0,randInt:_0,randFloat:x0,randFloatSpread:v0,seededRandom:M0,degToRad:y0,radToDeg:S0,isPowerOfTwo:b0,ceilPowerOfTwo:E0,floorPowerOfTwo:T0,setQuaternionFromProperEuler:A0,normalize:xn,denormalize:js};class at{constructor(e=0,t=0){at.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[o+0],p=r[o+1],_=r[o+2],x=r[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a>=1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=x;return}if(h!==x||l!==f||c!==p||u!==_){let m=l*f+c*p+u*_+h*x;m<0&&(f=-f,p=-p,_=-_,x=-x,m=-m);let d=1-a;if(m<.9995){const A=Math.acos(m),D=Math.sin(A);d=Math.sin(d*A)/D,a=Math.sin(a*A)/D,l=l*d+f*a,c=c*d+p*a,u=u*d+_*a,h=h*d+x*a}else{l=l*d+f*a,c=c*d+p*a,u=u*d+_*a,h=h*d+x*a;const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],p=r[o+2],_=r[o+3];return e[t]=a*_+u*h+l*p-c*f,e[t+1]=l*_+u*f+c*h-a*p,e[t+2]=c*_+u*p+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h-f*p*_;break;case"YXZ":this._x=f*u*h+c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h+f*p*_;break;case"ZXY":this._x=f*u*h-c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h-f*p*_;break;case"ZYX":this._x=f*u*h-c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h+f*p*_;break;case"YZX":this._x=f*u*h+c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h-f*p*_;break;case"XZY":this._x=f*u*h-c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h+f*p*_;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return al.copy(this).projectOnVector(e),this.sub(al)}reflect(e){return this.sub(al.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const al=new X,Nh=new Wn;class mt{constructor(e,t,i,s,r,o,a,l,c){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],_=i[8],x=s[0],m=s[3],d=s[6],A=s[1],D=s[4],E=s[7],R=s[2],I=s[5],L=s[8];return r[0]=o*x+a*A+l*R,r[3]=o*m+a*D+l*I,r[6]=o*d+a*E+l*L,r[1]=c*x+u*A+h*R,r[4]=c*m+u*D+h*I,r[7]=c*d+u*E+h*L,r[2]=f*x+p*A+_*R,r[5]=f*m+p*D+_*I,r[8]=f*d+p*E+_*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,p=c*r-o*l,_=t*h+i*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ll.makeScale(e,t)),this}rotate(e){return this.premultiply(ll.makeRotation(-e)),this}translate(e,t){return this.premultiply(ll.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ll=new mt,Ih=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uh=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function w0(){const n={enabled:!0,workingColorSpace:ur,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Lt&&(s.r=Ri(s.r),s.g=Ri(s.g),s.b=Ri(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Lt&&(s.r=sr(s.r),s.g=sr(s.g),s.b=sr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Yi?ma:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return no("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return no("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ur]:{primaries:e,whitePoint:i,transfer:ma,toXYZ:Ih,fromXYZ:Uh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:i,transfer:Lt,toXYZ:Ih,fromXYZ:Uh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),n}const vt=w0();function Ri(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function sr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ps;class R0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ps===void 0&&(Ps=to("canvas")),Ps.width=e.width,Ps.height=e.height;const s=Ps.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ps}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=to("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ri(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ri(t[i]/255)*255):t[i]=Ri(t[i]);return{data:t,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let C0=0;class wu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=ts(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(cl(s[o].image)):r.push(cl(s[o]))}else r=cl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function cl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?R0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}let P0=0;const ul=new X;class pn extends Ss{constructor(e=pn.DEFAULT_IMAGE,t=pn.DEFAULT_MAPPING,i=On,s=On,r=Kt,o=Ai,a=zn,l=Nn,c=pn.DEFAULT_ANISOTROPY,u=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=ts(),this.name="",this.source=new wu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ul).x}get height(){return this.source.getSize(ul).y}get depth(){return this.source.getSize(ul).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){nt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){nt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==np)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ds:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case hc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ds:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case hc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=np;pn.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,t=0,i=0,s=1){Bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],_=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(c+1)/2,E=(p+1)/2,R=(d+1)/2,I=(u+f)/4,L=(h+x)/4,F=(_+m)/4;return D>E&&D>R?D<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(D),s=I/i,r=L/i):E>R?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=I/s,r=F/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=L/r,s=F/r),this.set(i,s,r,t),this}let A=Math.sqrt((m-_)*(m-_)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(m-_)/A,this.y=(h-x)/A,this.z=(f-u)/A,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this.w=xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this.w=xt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class D0 extends Ss{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new pn(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new wu(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends D0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class hp extends pn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class L0 extends pn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _r{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qn):qn.fromBufferAttribute(r,o),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yo.copy(i.boundingBox)),yo.applyMatrix4(e.matrixWorld),this.union(yo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rr),So.subVectors(this.max,Rr),Ds.subVectors(e.a,Rr),Ls.subVectors(e.b,Rr),Ns.subVectors(e.c,Rr),Oi.subVectors(Ls,Ds),Bi.subVectors(Ns,Ls),ss.subVectors(Ds,Ns);let t=[0,-Oi.z,Oi.y,0,-Bi.z,Bi.y,0,-ss.z,ss.y,Oi.z,0,-Oi.x,Bi.z,0,-Bi.x,ss.z,0,-ss.x,-Oi.y,Oi.x,0,-Bi.y,Bi.x,0,-ss.y,ss.x,0];return!hl(t,Ds,Ls,Ns,So)||(t=[1,0,0,0,1,0,0,0,1],!hl(t,Ds,Ls,Ns,So))?!1:(bo.crossVectors(Oi,Bi),t=[bo.x,bo.y,bo.z],hl(t,Ds,Ls,Ns,So))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _i=[new X,new X,new X,new X,new X,new X,new X,new X],qn=new X,yo=new _r,Ds=new X,Ls=new X,Ns=new X,Oi=new X,Bi=new X,ss=new X,Rr=new X,So=new X,bo=new X,rs=new X;function hl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){rs.fromArray(n,r);const a=s.x*Math.abs(rs.x)+s.y*Math.abs(rs.y)+s.z*Math.abs(rs.z),l=e.dot(rs),c=t.dot(rs),u=i.dot(rs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const N0=new _r,Cr=new X,fl=new X;class xr{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):N0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cr.subVectors(e,this.center);const t=Cr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Cr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cr.copy(e.center).add(fl)),this.expandByPoint(Cr.copy(e.center).sub(fl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const xi=new X,dl=new X,Eo=new X,ki=new X,pl=new X,To=new X,ml=new X;class ao{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){dl.copy(e).add(t).multiplyScalar(.5),Eo.copy(t).sub(e).normalize(),ki.copy(this.origin).sub(dl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Eo),a=ki.dot(this.direction),l=-ki.dot(Eo),c=ki.lengthSq(),u=Math.abs(1-o*o);let h,f,p,_;if(u>0)if(h=o*l-a,f=o*a-l,_=r*u,h>=0)if(f>=-_)if(f<=_){const x=1/u;h*=x,f*=x,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(dl).addScaledVector(Eo,f),p}intersectSphere(e,t){xi.subVectors(e.center,this.origin);const i=xi.dot(this.direction),s=xi.dot(xi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,i,s,r){pl.subVectors(t,e),To.subVectors(i,e),ml.crossVectors(pl,To);let o=this.direction.dot(ml),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ki.subVectors(this.origin,e);const l=a*this.direction.dot(To.crossVectors(ki,To));if(l<0)return null;const c=a*this.direction.dot(pl.cross(ki));if(c<0||l+c>o)return null;const u=-a*ki.dot(ml);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,i,s,r,o,a,l,c,u,h,f,p,_,x,m){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,f,p,_,x,m)}set(e,t,i,s,r,o,a,l,c,u,h,f,p,_,x,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=_,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Is.setFromMatrixColumn(e,0).length(),r=1/Is.setFromMatrixColumn(e,1).length(),o=1/Is.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,p=o*h,_=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+_*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,_=c*u,x=c*h;t[0]=f+x*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,_=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,_=a*u,x=a*h;t[0]=l*u,t[4]=_*c-p,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=_*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+_,t[10]=f-x*h}else if(e.order==="XZY"){const f=o*l,p=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=p*h-_,t[2]=_*h-p,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(I0,e,U0)}lookAt(e,t,i){const s=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Vi.crossVectors(i,Rn),Vi.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Vi.crossVectors(i,Rn)),Vi.normalize(),Ao.crossVectors(Rn,Vi),s[0]=Vi.x,s[4]=Ao.x,s[8]=Rn.x,s[1]=Vi.y,s[5]=Ao.y,s[9]=Rn.y,s[2]=Vi.z,s[6]=Ao.z,s[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],_=i[2],x=i[6],m=i[10],d=i[14],A=i[3],D=i[7],E=i[11],R=i[15],I=s[0],L=s[4],F=s[8],v=s[12],S=s[1],N=s[5],k=s[9],z=s[13],K=s[2],Y=s[6],B=s[10],G=s[14],$=s[3],pe=s[7],ge=s[11],me=s[15];return r[0]=o*I+a*S+l*K+c*$,r[4]=o*L+a*N+l*Y+c*pe,r[8]=o*F+a*k+l*B+c*ge,r[12]=o*v+a*z+l*G+c*me,r[1]=u*I+h*S+f*K+p*$,r[5]=u*L+h*N+f*Y+p*pe,r[9]=u*F+h*k+f*B+p*ge,r[13]=u*v+h*z+f*G+p*me,r[2]=_*I+x*S+m*K+d*$,r[6]=_*L+x*N+m*Y+d*pe,r[10]=_*F+x*k+m*B+d*ge,r[14]=_*v+x*z+m*G+d*me,r[3]=A*I+D*S+E*K+R*$,r[7]=A*L+D*N+E*Y+R*pe,r[11]=A*F+D*k+E*B+R*ge,r[15]=A*v+D*z+E*G+R*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],_=e[3],x=e[7],m=e[11],d=e[15],A=l*p-c*f,D=a*p-c*h,E=a*f-l*h,R=o*p-c*u,I=o*f-l*u,L=o*h-a*u;return t*(x*A-m*D+d*E)-i*(_*A-m*R+d*I)+s*(_*D-x*R+d*L)-r*(_*E-x*I+m*L)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],_=e[12],x=e[13],m=e[14],d=e[15],A=h*m*c-x*f*c+x*l*p-a*m*p-h*l*d+a*f*d,D=_*f*c-u*m*c-_*l*p+o*m*p+u*l*d-o*f*d,E=u*x*c-_*h*c+_*a*p-o*x*p-u*a*d+o*h*d,R=_*h*l-u*x*l-_*a*f+o*x*f+u*a*m-o*h*m,I=t*A+i*D+s*E+r*R;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/I;return e[0]=A*L,e[1]=(x*f*r-h*m*r-x*s*p+i*m*p+h*s*d-i*f*d)*L,e[2]=(a*m*r-x*l*r+x*s*c-i*m*c-a*s*d+i*l*d)*L,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*p-i*l*p)*L,e[4]=D*L,e[5]=(u*m*r-_*f*r+_*s*p-t*m*p-u*s*d+t*f*d)*L,e[6]=(_*l*r-o*m*r-_*s*c+t*m*c+o*s*d-t*l*d)*L,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*p+t*l*p)*L,e[8]=E*L,e[9]=(_*h*r-u*x*r-_*i*p+t*x*p+u*i*d-t*h*d)*L,e[10]=(o*x*r-_*a*r+_*i*c-t*x*c-o*i*d+t*a*d)*L,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*p-t*a*p)*L,e[12]=R*L,e[13]=(u*x*s-_*h*s+_*i*f-t*x*f-u*i*m+t*h*m)*L,e[14]=(_*a*s-o*x*s-_*i*l+t*x*l+o*i*m-t*a*m)*L,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*f+t*a*f)*L,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,p=r*u,_=r*h,x=o*u,m=o*h,d=a*h,A=l*c,D=l*u,E=l*h,R=i.x,I=i.y,L=i.z;return s[0]=(1-(x+d))*R,s[1]=(p+E)*R,s[2]=(_-D)*R,s[3]=0,s[4]=(p-E)*I,s[5]=(1-(f+d))*I,s[6]=(m+A)*I,s[7]=0,s[8]=(_+D)*L,s[9]=(m-A)*L,s[10]=(1-(f+x))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let r=Is.set(s[0],s[1],s[2]).length();const o=Is.set(s[4],s[5],s[6]).length(),a=Is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),jn.copy(this);const c=1/r,u=1/o,h=1/a;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=u,jn.elements[5]*=u,jn.elements[6]*=u,jn.elements[8]*=h,jn.elements[9]*=h,jn.elements[10]*=h,t.setFromRotationMatrix(jn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=oi,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),p=(i+s)/(i-s);let _,x;if(l)_=r/(o-r),x=o*r/(o-r);else if(a===oi)_=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===ga)_=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=oi,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-s),f=-(t+e)/(t-e),p=-(i+s)/(i-s);let _,x;if(l)_=1/(o-r),x=o/(o-r);else if(a===oi)_=-2/(o-r),x=-(o+r)/(o-r);else if(a===ga)_=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Is=new X,jn=new ct,I0=new X(0,0,0),U0=new X(1,1,1),Vi=new X,Ao=new X,Rn=new X,Fh=new ct,Oh=new Wn;class An{constructor(e=0,t=0,i=0,s=An.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Fh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Oh.setFromEuler(this),this.setFromQuaternion(Oh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class Ru{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let F0=0;const Bh=new X,Us=new Wn,vi=new ct,wo=new X,Pr=new X,O0=new X,B0=new Wn,kh=new X(1,0,0),Vh=new X(0,1,0),zh=new X(0,0,1),Hh={type:"added"},k0={type:"removed"},Fs={type:"childadded",child:null},gl={type:"childremoved",child:null};class Xt extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new X,t=new An,i=new Wn,s=new X(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new mt}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ru,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(kh,e)}rotateY(e){return this.rotateOnAxis(Vh,e)}rotateZ(e){return this.rotateOnAxis(zh,e)}translateOnAxis(e,t){return Bh.copy(e).applyQuaternion(this.quaternion),this.position.add(Bh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kh,e)}translateY(e){return this.translateOnAxis(Vh,e)}translateZ(e){return this.translateOnAxis(zh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?wo.copy(e):wo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Pr,wo,this.up):vi.lookAt(wo,Pr,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),Us.setFromRotationMatrix(vi),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(_t("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hh),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):_t("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(k0),gl.child=e,this.dispatchEvent(gl),gl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hh),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,e,O0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,B0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Xt.DEFAULT_UP=new X(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yn=new X,Mi=new X,_l=new X,yi=new X,Os=new X,Bs=new X,Gh=new X,xl=new X,vl=new X,Ml=new X,yl=new Bt,Sl=new Bt,bl=new Bt;class Vn{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Yn.subVectors(e,t),s.cross(Yn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Yn.subVectors(s,t),Mi.subVectors(i,t),_l.subVectors(e,t);const o=Yn.dot(Yn),a=Yn.dot(Mi),l=Yn.dot(_l),c=Mi.dot(Mi),u=Mi.dot(_l),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(c*l-a*u)*f,_=(o*u-a*l)*f;return r.set(1-p-_,_,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,yi.x),l.addScaledVector(o,yi.y),l.addScaledVector(a,yi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return yl.setScalar(0),Sl.setScalar(0),bl.setScalar(0),yl.fromBufferAttribute(e,t),Sl.fromBufferAttribute(e,i),bl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(yl,r.x),o.addScaledVector(Sl,r.y),o.addScaledVector(bl,r.z),o}static isFrontFacing(e,t,i,s){return Yn.subVectors(i,t),Mi.subVectors(e,t),Yn.cross(Mi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Yn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Vn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Os.subVectors(s,i),Bs.subVectors(r,i),xl.subVectors(e,i);const l=Os.dot(xl),c=Bs.dot(xl);if(l<=0&&c<=0)return t.copy(i);vl.subVectors(e,s);const u=Os.dot(vl),h=Bs.dot(vl);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Os,o);Ml.subVectors(e,r);const p=Os.dot(Ml),_=Bs.dot(Ml);if(_>=0&&p<=_)return t.copy(r);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(Bs,a);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return Gh.subVectors(r,s),a=(h-u)/(h-u+(p-_)),t.copy(s).addScaledVector(Gh,a);const d=1/(m+x+f);return o=x*d,a=f*d,t.copy(i).addScaledVector(Os,o).addScaledVector(Bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function El(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ft{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=vt.workingColorSpace){return this.r=e,this.g=t,this.b=i,vt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=vt.workingColorSpace){if(e=Au(e,1),t=xt(t,0,1),i=xt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=El(o,r,e+1/3),this.g=El(o,r,e),this.b=El(o,r,e-1/3)}return vt.colorSpaceToWorking(this,s),this}setStyle(e,t=Wt){function i(r){r!==void 0&&parseFloat(r)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:nt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const i=fp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return vt.workingToColorSpace(an.copy(this),e),Math.round(xt(an.r*255,0,255))*65536+Math.round(xt(an.g*255,0,255))*256+Math.round(xt(an.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.workingToColorSpace(an.copy(this),t);const i=an.r,s=an.g,r=an.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=vt.workingColorSpace){return vt.workingToColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=Wt){vt.workingToColorSpace(an.copy(this),e);const t=an.r,i=an.g,s=an.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(Ro);const i=Xr(zi.h,Ro.h,t),s=Xr(zi.s,Ro.s,t),r=Xr(zi.l,Ro.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new ft;ft.NAMES=fp;let V0=0;class bs extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=ts(),this.name="",this.type="Material",this.blending=nr,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ec,this.blendDst=tc,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){nt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){nt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(i.blending=this.blending),this.side!==Li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ec&&(i.blendSrc=this.blendSrc),this.blendDst!==tc&&(i.blendDst=this.blendDst),this.blendEquation!==hs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ar&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _a extends bs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new X,Co=new at;let z0=0;class Bn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:z0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Rh,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Co.fromBufferAttribute(this,t),Co.applyMatrix3(e),this.setXY(t,Co.x,Co.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=js(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=xn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=js(t,this.array)),t}setX(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=js(t,this.array)),t}setY(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=js(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=js(t,this.array)),t}setW(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),i=xn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),i=xn(i,this.array),s=xn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),i=xn(i,this.array),s=xn(s,this.array),r=xn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rh&&(e.usage=this.usage),e}}class dp extends Bn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class pp extends Bn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class At extends Bn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let H0=0;const kn=new ct,Tl=new Xt,ks=new X,Cn=new _r,Dr=new _r,Qt=new X;class en extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(up(e)?pp:dp)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new mt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,i){return kn.makeTranslation(e,t,i),this.applyMatrix4(kn),this}scale(e,t,i){return kn.makeScale(e,t,i),this.applyMatrix4(kn),this}lookAt(e){return Tl.lookAt(e),Tl.updateMatrix(),this.applyMatrix4(Tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new At(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _r);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&_t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Dr.setFromBufferAttribute(a),this.morphTargetsRelative?(Qt.addVectors(Cn.min,Dr.min),Cn.expandByPoint(Qt),Qt.addVectors(Cn.max,Dr.max),Cn.expandByPoint(Qt)):(Cn.expandByPoint(Dr.min),Cn.expandByPoint(Dr.max))}Cn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Qt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Qt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Qt.fromBufferAttribute(a,c),l&&(ks.fromBufferAttribute(e,c),Qt.add(ks)),s=Math.max(s,i.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&_t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){_t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new X,l[F]=new X;const c=new X,u=new X,h=new X,f=new at,p=new at,_=new at,x=new X,m=new X;function d(F,v,S){c.fromBufferAttribute(i,F),u.fromBufferAttribute(i,v),h.fromBufferAttribute(i,S),f.fromBufferAttribute(r,F),p.fromBufferAttribute(r,v),_.fromBufferAttribute(r,S),u.sub(c),h.sub(c),p.sub(f),_.sub(f);const N=1/(p.x*_.y-_.x*p.y);isFinite(N)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(N),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(N),a[F].add(x),a[v].add(x),a[S].add(x),l[F].add(m),l[v].add(m),l[S].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let F=0,v=A.length;F<v;++F){const S=A[F],N=S.start,k=S.count;for(let z=N,K=N+k;z<K;z+=3)d(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const D=new X,E=new X,R=new X,I=new X;function L(F){R.fromBufferAttribute(s,F),I.copy(R);const v=a[F];D.copy(v),D.sub(R.multiplyScalar(R.dot(v))).normalize(),E.crossVectors(I,v);const N=E.dot(l[F])<0?-1:1;o.setXYZW(F,D.x,D.y,D.z,N)}for(let F=0,v=A.length;F<v;++F){const S=A[F],N=S.start,k=S.count;for(let z=N,K=N+k;z<K;z+=3)L(e.getX(z+0)),L(e.getX(z+1)),L(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new X,r=new X,o=new X,a=new X,l=new X,c=new X,u=new X,h=new X;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let d=0;d<u;d++)f[_++]=c[p++]}return new Bn(f,u,h)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new en,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wh=new ct,os=new ao,Po=new xr,Xh=new X,Do=new X,Lo=new X,No=new X,Al=new X,Io=new X,qh=new X,Uo=new X;class fn extends Xt{constructor(e=new en,t=new _a){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Io.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Al.fromBufferAttribute(h,e),o?Io.addScaledVector(Al,u):Io.addScaledVector(Al.sub(t),u))}t.add(Io)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Po.copy(i.boundingSphere),Po.applyMatrix4(r),os.copy(e.ray).recast(e.near),!(Po.containsPoint(os.origin)===!1&&(os.intersectSphere(Po,Xh)===null||os.origin.distanceToSquared(Xh)>(e.far-e.near)**2))&&(Wh.copy(r).invert(),os.copy(e.ray).applyMatrix4(Wh),!(i.boundingBox!==null&&os.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,os)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const m=f[_],d=o[m.materialIndex],A=Math.max(m.start,p.start),D=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let E=A,R=D;E<R;E+=3){const I=a.getX(E),L=a.getX(E+1),F=a.getX(E+2);s=Fo(this,d,e,i,c,u,h,I,L,F),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const A=a.getX(m),D=a.getX(m+1),E=a.getX(m+2);s=Fo(this,o,e,i,c,u,h,A,D,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const m=f[_],d=o[m.materialIndex],A=Math.max(m.start,p.start),D=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=A,R=D;E<R;E+=3){const I=E,L=E+1,F=E+2;s=Fo(this,d,e,i,c,u,h,I,L,F),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const A=m,D=m+1,E=m+2;s=Fo(this,o,e,i,c,u,h,A,D,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function G0(n,e,t,i,s,r,o,a){let l;if(e.side===Tn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Li,a),l===null)return null;Uo.copy(a),Uo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Uo);return c<t.near||c>t.far?null:{distance:c,point:Uo.clone(),object:n}}function Fo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Do),n.getVertexPosition(l,Lo),n.getVertexPosition(c,No);const u=G0(n,e,t,i,Do,Lo,No,qh);if(u){const h=new X;Vn.getBarycoord(qh,Do,Lo,No,h),s&&(u.uv=Vn.getInterpolatedAttribute(s,a,l,c,h,new at)),r&&(u.uv1=Vn.getInterpolatedAttribute(r,a,l,c,h,new at)),o&&(u.normal=Vn.getInterpolatedAttribute(o,a,l,c,h,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new X,materialIndex:0};Vn.getNormal(Do,Lo,No,f.normal),u.face=f,u.barycoord=h}return u}class vr extends en{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(u,3)),this.setAttribute("uv",new At(h,2));function _(x,m,d,A,D,E,R,I,L,F,v){const S=E/L,N=R/F,k=E/2,z=R/2,K=I/2,Y=L+1,B=F+1;let G=0,$=0;const pe=new X;for(let ge=0;ge<B;ge++){const me=ge*N-z;for(let Le=0;Le<Y;Le++){const Ee=Le*S-k;pe[x]=Ee*A,pe[m]=me*D,pe[d]=K,c.push(pe.x,pe.y,pe.z),pe[x]=0,pe[m]=0,pe[d]=I>0?1:-1,u.push(pe.x,pe.y,pe.z),h.push(Le/L),h.push(1-ge/F),G+=1}}for(let ge=0;ge<F;ge++)for(let me=0;me<L;me++){const Le=f+me+Y*ge,Ee=f+me+Y*(ge+1),ke=f+(me+1)+Y*(ge+1),Ce=f+(me+1)+Y*ge;l.push(Le,Ee,Ce),l.push(Ee,ke,Ce),$+=6}a.addGroup(p,$,v),p+=$,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function vn(n){const e={};for(let t=0;t<n.length;t++){const i=fr(n[t]);for(const s in i)e[s]=i[s]}return e}function W0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function mp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const X0={clone:fr,merge:vn};var q0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,j0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fi extends bs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=q0,this.fragmentShader=j0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fr(e.uniforms),this.uniformsGroups=W0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class gp extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new X,jh=new at,Yh=new at;class un extends gp{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hr*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,t){return this.getViewBounds(e,jh,Yh),t.subVectors(Yh,jh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ir*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vs=-90,zs=1;class Y0 extends Xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new un(Vs,zs,e,t);s.layers=this.layers,this.add(s);const r=new un(Vs,zs,e,t);r.layers=this.layers,this.add(r);const o=new un(Vs,zs,e,t);o.layers=this.layers,this.add(o);const a=new un(Vs,zs,e,t);a.layers=this.layers,this.add(a);const l=new un(Vs,zs,e,t);l.layers=this.layers,this.add(l);const c=new un(Vs,zs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ga)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class _p extends pn{constructor(e=[],t=ys,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xp extends ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new _p(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new vr(5,5,5),r=new fi({name:"CubemapFromEquirect",uniforms:fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:wi});r.uniforms.tEquirect.value=t;const o=new fn(s,r),a=t.minFilter;return t.minFilter===Ai&&(t.minFilter=Kt),new Y0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class Ks extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $0={type:"move"};class wl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ks,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ks,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ks,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ks;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class vp extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const $h=new X,Kh=new Bt,Zh=new Bt,K0=new X,Jh=new ct,Oo=new X,Rl=new xr,Qh=new ct,Cl=new ao;class Z0 extends fn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=bh,this.bindMatrix=new ct,this.bindMatrixInverse=new ct,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new _r),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Oo),this.boundingBox.expandByPoint(Oo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new xr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Oo),this.boundingSphere.expandByPoint(Oo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rl.copy(this.boundingSphere),Rl.applyMatrix4(s),e.ray.intersectsSphere(Rl)!==!1&&(Qh.copy(s).invert(),Cl.copy(e.ray).applyMatrix4(Qh),!(this.boundingBox!==null&&Cl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Cl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Bt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===bh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Z_?this.bindMatrixInverse.copy(this.bindMatrix).invert():nt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Kh.fromBufferAttribute(s.attributes.skinIndex,e),Zh.fromBufferAttribute(s.attributes.skinWeight,e),$h.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Zh.getComponent(r);if(o!==0){const a=Kh.getComponent(r);Jh.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(K0.copy($h).applyMatrix4(Jh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Mp extends Xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Cu extends pn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=sn,u=sn,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ef=new ct,J0=new ct;class Pu{constructor(e=[],t=[]){this.uuid=ts(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){nt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new ct)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new ct;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:J0;ef.multiplyMatrices(a,t[r]),ef.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Pu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Cu(t,e,e,zn,$n);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(nt("Skeleton: No bone found with UUID:",r),o=new Mp),this.bones.push(o),this.boneInverses.push(new ct().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}const Pl=new X,Q0=new X,ex=new mt;class ji{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Pl.subVectors(i,t).cross(Q0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Pl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ex.getNormalMatrix(e),s=this.coplanarPoint(Pl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const as=new xr,tx=new at(.5,.5),Bo=new X;class Du{constructor(e=new ji,t=new ji,i=new ji,s=new ji,r=new ji,o=new ji){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=oi,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],p=r[7],_=r[8],x=r[9],m=r[10],d=r[11],A=r[12],D=r[13],E=r[14],R=r[15];if(s[0].setComponents(c-o,p-u,d-_,R-A).normalize(),s[1].setComponents(c+o,p+u,d+_,R+A).normalize(),s[2].setComponents(c+a,p+h,d+x,R+D).normalize(),s[3].setComponents(c-a,p-h,d-x,R-D).normalize(),i)s[4].setComponents(l,f,m,E).normalize(),s[5].setComponents(c-l,p-f,d-m,R-E).normalize();else if(s[4].setComponents(c-l,p-f,d-m,R-E).normalize(),t===oi)s[5].setComponents(c+l,p+f,d+m,R+E).normalize();else if(t===ga)s[5].setComponents(l,f,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){as.center.set(0,0,0);const t=tx.distanceTo(e.center);return as.radius=.7071067811865476+t,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Bo.x=s.normal.x>0?e.max.x:e.min.x,Bo.y=s.normal.y>0?e.max.y:e.min.y,Bo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Bo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dr extends bs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xa=new X,va=new X,tf=new ct,Lr=new ao,ko=new xr,Dl=new X,nf=new X;class yp extends Xt{constructor(e=new en,t=new dr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)xa.fromBufferAttribute(t,s-1),va.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=xa.distanceTo(va);e.setAttribute("lineDistance",new At(i,1))}else nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ko.copy(i.boundingSphere),ko.applyMatrix4(s),ko.radius+=r,e.ray.intersectsSphere(ko)===!1)return;tf.copy(s).invert(),Lr.copy(e.ray).applyMatrix4(tf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let x=p,m=_-1;x<m;x+=c){const d=u.getX(x),A=u.getX(x+1),D=Vo(this,e,Lr,l,d,A,x);D&&t.push(D)}if(this.isLineLoop){const x=u.getX(_-1),m=u.getX(p),d=Vo(this,e,Lr,l,x,m,_-1);d&&t.push(d)}}else{const p=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let x=p,m=_-1;x<m;x+=c){const d=Vo(this,e,Lr,l,x,x+1,x);d&&t.push(d)}if(this.isLineLoop){const x=Vo(this,e,Lr,l,_-1,p,_-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Vo(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(xa.fromBufferAttribute(a,s),va.fromBufferAttribute(a,r),t.distanceSqToSegment(xa,va,Dl,nf)>i)return;Dl.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Dl);if(!(c<e.near||c>e.far))return{distance:c,point:nf.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const sf=new X,rf=new X;class Ua extends yp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)sf.fromBufferAttribute(t,s),rf.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+sf.distanceTo(rf);e.setAttribute("lineDistance",new At(i,1))}else nt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class io extends pn{constructor(e,t,i=hi,s,r,o,a=sn,l=sn,c,u=Ii,h=1){if(u!==Ii&&u!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class nx extends io{constructor(e,t=hi,i=ys,s,r,o=sn,a=sn,l,c=Ii){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Sp extends pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Lu extends en{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],p=[];let _=0;const x=[],m=i/2;let d=0;A(),o===!1&&(e>0&&D(!0),t>0&&D(!1)),this.setIndex(u),this.setAttribute("position",new At(h,3)),this.setAttribute("normal",new At(f,3)),this.setAttribute("uv",new At(p,2));function A(){const E=new X,R=new X;let I=0;const L=(t-e)/i;for(let F=0;F<=r;F++){const v=[],S=F/r,N=S*(t-e)+e;for(let k=0;k<=s;k++){const z=k/s,K=z*l+a,Y=Math.sin(K),B=Math.cos(K);R.x=N*Y,R.y=-S*i+m,R.z=N*B,h.push(R.x,R.y,R.z),E.set(Y,L,B).normalize(),f.push(E.x,E.y,E.z),p.push(z,1-S),v.push(_++)}x.push(v)}for(let F=0;F<s;F++)for(let v=0;v<r;v++){const S=x[v][F],N=x[v+1][F],k=x[v+1][F+1],z=x[v][F+1];(e>0||v!==0)&&(u.push(S,N,z),I+=3),(t>0||v!==r-1)&&(u.push(N,k,z),I+=3)}c.addGroup(d,I,0),d+=I}function D(E){const R=_,I=new at,L=new X;let F=0;const v=E===!0?e:t,S=E===!0?1:-1;for(let k=1;k<=s;k++)h.push(0,m*S,0),f.push(0,S,0),p.push(.5,.5),_++;const N=_;for(let k=0;k<=s;k++){const K=k/s*l+a,Y=Math.cos(K),B=Math.sin(K);L.x=v*B,L.y=m*S,L.z=v*Y,h.push(L.x,L.y,L.z),f.push(0,S,0),I.x=Y*.5+.5,I.y=B*.5*S+.5,p.push(I.x,I.y),_++}for(let k=0;k<s;k++){const z=R+k,K=N+k;E===!0?u.push(K,K+1,z):u.push(K+1,K,z),F+=3}c.addGroup(d,F,E===!0?1:2),d+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const zo=new X,Ho=new X,Ll=new X,Go=new Vn;class ix extends en{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(ir*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},p=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:x,b:m,c:d}=Go;if(x.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),d.fromBufferAttribute(a,c[2]),Go.getNormal(Ll),h[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let A=0;A<3;A++){const D=(A+1)%3,E=h[A],R=h[D],I=Go[u[A]],L=Go[u[D]],F=`${E}_${R}`,v=`${R}_${E}`;v in f&&f[v]?(Ll.dot(f[v].normal)<=r&&(p.push(I.x,I.y,I.z),p.push(L.x,L.y,L.z)),f[v]=null):F in f||(f[F]={index0:c[A],index1:c[D],normal:Ll.clone()})}}for(const _ in f)if(f[_]){const{index0:x,index1:m}=f[_];zo.fromBufferAttribute(a,x),Ho.fromBufferAttribute(a,m),p.push(zo.x,zo.y,zo.z),p.push(Ho.x,Ho.y,Ho.z)}this.setAttribute("position",new At(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Fa extends en{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,p=[],_=[],x=[],m=[];for(let d=0;d<u;d++){const A=d*f-o;for(let D=0;D<c;D++){const E=D*h-r;_.push(E,-A,0),x.push(0,0,1),m.push(D/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<a;A++){const D=A+c*d,E=A+c*(d+1),R=A+1+c*(d+1),I=A+1+c*d;p.push(D,E,I),p.push(E,R,I)}this.setIndex(p),this.setAttribute("position",new At(_,3)),this.setAttribute("normal",new At(x,3)),this.setAttribute("uv",new At(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fa(e.width,e.height,e.widthSegments,e.heightSegments)}}class Nu extends en{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new X,f=new X,p=[],_=[],x=[],m=[];for(let d=0;d<=i;d++){const A=[],D=d/i;let E=0;d===0&&o===0?E=.5/t:d===i&&l===Math.PI&&(E=-.5/t);for(let R=0;R<=t;R++){const I=R/t;h.x=-e*Math.cos(s+I*r)*Math.sin(o+D*a),h.y=e*Math.cos(o+D*a),h.z=e*Math.sin(s+I*r)*Math.sin(o+D*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(I+E,1-D),A.push(c++)}u.push(A)}for(let d=0;d<i;d++)for(let A=0;A<t;A++){const D=u[d][A+1],E=u[d][A],R=u[d+1][A],I=u[d+1][A+1];(d!==0||o>0)&&p.push(D,E,I),(d!==i-1||l<Math.PI)&&p.push(E,R,I)}this.setIndex(p),this.setAttribute("position",new At(_,3)),this.setAttribute("normal",new At(x,3)),this.setAttribute("uv",new At(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class sx extends fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qr extends bs{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ft(16777215),this.specular=new ft(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bu,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rx extends bs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bu,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ox extends bs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=e0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ax extends bs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Wo(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function lx(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function of(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function bp(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push(...o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class Oa{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class cx extends Oa{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Eh,endingEnd:Eh}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Th:r=e,a=2*t-i;break;case Ah:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Th:o=e,l=2*i-t;break;case Ah:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(i-t)/(s-t),x=_*_,m=x*_,d=-f*m+2*f*x-f*_,A=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*_+1,D=(-1-p)*m+(1.5+p)*x+.5*_,E=p*m-p*x;for(let R=0;R!==a;++R)r[R]=d*o[u+R]+A*o[c+R]+D*o[l+R]+E*o[h+R];return r}}class ux extends Oa{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class hx extends Oa{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Jn{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Wo(t,this.TimeBufferType),this.values=Wo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Wo(e.times,Array),values:Wo(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new hx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ux(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new cx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case pa:t=this.InterpolantFactoryMethodDiscrete;break;case Wc:t=this.InterpolantFactoryMethodLinear;break;case ol:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return nt("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pa;case this.InterpolantFactoryMethodLinear:return Wc;case this.InterpolantFactoryMethodSmooth:return ol}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(_t("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(_t("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){_t("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){_t("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&l0(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){_t("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ol,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*i,f=h-i,p=h+i;for(let _=0;_!==i;++_){const x=t[h+_];if(x!==t[f+_]||x!==t[p+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*i,f=o*i;for(let p=0;p!==i;++p)t[f+p]=t[h+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Jn.prototype.ValueTypeName="";Jn.prototype.TimeBufferType=Float32Array;Jn.prototype.ValueBufferType=Float32Array;Jn.prototype.DefaultInterpolation=Wc;class Mr extends Jn{constructor(e,t,i){super(e,t,i)}}Mr.prototype.ValueTypeName="bool";Mr.prototype.ValueBufferType=Array;Mr.prototype.DefaultInterpolation=pa;Mr.prototype.InterpolantFactoryMethodLinear=void 0;Mr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ep extends Jn{constructor(e,t,i,s){super(e,t,i,s)}}Ep.prototype.ValueTypeName="color";class Ma extends Jn{constructor(e,t,i,s){super(e,t,i,s)}}Ma.prototype.ValueTypeName="number";class fx extends Oa{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Wn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class lo extends Jn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new fx(this.times,this.values,this.getValueSize(),e)}}lo.prototype.ValueTypeName="quaternion";lo.prototype.InterpolantFactoryMethodSmooth=void 0;class yr extends Jn{constructor(e,t,i){super(e,t,i)}}yr.prototype.ValueTypeName="string";yr.prototype.ValueBufferType=Array;yr.prototype.DefaultInterpolation=pa;yr.prototype.InterpolantFactoryMethodLinear=void 0;yr.prototype.InterpolantFactoryMethodSmooth=void 0;class pr extends Jn{constructor(e,t,i,s){super(e,t,i,s)}}pr.prototype.ValueTypeName="vector";class af{constructor(e="",t=-1,i=[],s=Q_){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=ts(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(px(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=i.length;r!==o;++r)t.push(Jn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=lx(l);l=of(l,1,u),c=of(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ma(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(nt("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return _t("AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,p,_,x){if(p.length!==0){const m=[],d=[];bp(p,m,d,_),m.length!==0&&x.push(new h(f,m,d))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let x=0;x<f[_].morphTargets.length;x++)p[f[_].morphTargets[x]]=-1;for(const x in p){const m=[],d=[];for(let A=0;A!==f[_].morphTargets.length;++A){const D=f[_];m.push(D.time),d.push(D.morphTarget===x?1:0)}s.push(new Ma(".morphTargetInfluence["+x+"]",m,d))}l=p.length*o}else{const p=".bones["+t[h].name+"]";i(pr,p+".position",f,"pos",s),i(lo,p+".quaternion",f,"rot",s),i(pr,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function dx(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ma;case"vector":case"vector2":case"vector3":case"vector4":return pr;case"color":return Ep;case"quaternion":return lo;case"bool":case"boolean":return Mr;case"string":return yr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function px(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=dx(n.type);if(n.times===void 0){const t=[],i=[];bp(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const jr={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class mx{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],_=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Tp=new mx;class Ji{constructor(e){this.manager=e!==void 0?e:Tp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ji.DEFAULT_MATERIAL_NAME="__DEFAULT";const Si={};class gx extends Error{constructor(e,t){super(e),this.response=t}}class Iu extends Ji{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=jr.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Si[e]!==void 0){Si[e].push({onLoad:t,onProgress:i,onError:s});return}Si[e]=[],Si[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&nt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Si[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,_=p!==0;let x=0;const m=new ReadableStream({start(d){A();function A(){h.read().then(({done:D,value:E})=>{if(D)d.close();else{x+=E.byteLength;const R=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:p});for(let I=0,L=u.length;I<L;I++){const F=u[I];F.onProgress&&F.onProgress(R)}d.enqueue(E),A()}},D=>{d.error(D)})}}});return new Response(m)}else throw new gx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{jr.add(`file:${e}`,c);const u=Si[e];delete Si[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Si[e];if(u===void 0)throw this.manager.itemError(e),c;delete Si[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Hs=new WeakMap;class _x extends Ji{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=jr.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=Hs.get(o);h===void 0&&(h=[],Hs.set(o,h)),h.push({onLoad:t,onError:s})}return o}const a=to("img");function l(){u(),t&&t(this);const h=Hs.get(this)||[];for(let f=0;f<h.length;f++){const p=h[f];p.onLoad&&p.onLoad(this)}Hs.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),jr.remove(`image:${e}`);const f=Hs.get(this)||[];for(let p=0;p<f.length;p++){const _=f[p];_.onError&&_.onError(h)}Hs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),jr.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class xx extends Ji{constructor(e){super(e)}load(e,t,i,s){const r=this,o=new Cu,a=new Iu(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(u){if(s!==void 0)s(u);else{u(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:On,o.wrapT=c.wrapT!==void 0?c.wrapT:On,o.magFilter=c.magFilter!==void 0?c.magFilter:Kt,o.minFilter=c.minFilter!==void 0?c.minFilter:Kt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Ai),c.mipmapCount===1&&(o.minFilter=Kt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},i,s),o}}class Ap extends Ji{constructor(e){super(e)}load(e,t,i,s){const r=new pn,o=new _x(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Ba extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Nl=new ct,lf=new X,cf=new X;class Uu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Du,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;lf.setFromMatrixPosition(e.matrixWorld),t.position.copy(lf),cf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cf),t.updateMatrixWorld(),Nl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Nl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class vx extends Uu{constructor(){super(new un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=hr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Mx extends Ba{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new vx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class yx extends Uu{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0}}class Sx extends Ba{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new yx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ka extends gp{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class bx extends Uu{constructor(){super(new ka(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wp extends Ba{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new bx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Rp extends Ba{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Cp{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Ex extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const uf=new ct;class Tx{constructor(e,t,i=0,s=1/0){this.ray=new ao(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Ru,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):_t("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return uf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(uf),this}intersectObject(e,t=!0,i=[]){return Xc(e,this,i,t),i.sort(hf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Xc(e[s],this,i,t);return i.sort(hf),i}}function hf(n,e){return n.distance-e.distance}function Xc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Xc(r[o],e,t,!0)}}class ff{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=xt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(xt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ax extends Ua{constructor(e=10,t=10,i=4473924,s=8947848){i=new ft(i),s=new ft(s);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,p=0,_=-a;f<=t;f++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const x=f===r?i:s;x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3}const u=new en;u.setAttribute("position",new At(l,3)),u.setAttribute("color",new At(c,3));const h=new dr({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class wx extends Ua{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new en;s.setAttribute("position",new At(t,3)),s.setAttribute("color",new At(i,3));const r=new dr({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,i){const s=new ft,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(i),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Rx extends Ss{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){nt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function df(n,e,t,i){const s=Cx(i);switch(t){case ap:return n*e;case cp:return n*e/s.components*s.byteLength;case Mu:return n*e/s.components*s.byteLength;case cr:return n*e*2/s.components*s.byteLength;case yu:return n*e*2/s.components*s.byteLength;case lp:return n*e*3/s.components*s.byteLength;case zn:return n*e*4/s.components*s.byteLength;case Su:return n*e*4/s.components*s.byteLength;case ia:case sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ra:case oa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case dc:case mc:return Math.max(n,16)*Math.max(e,8)/4;case fc:case pc:return Math.max(n,8)*Math.max(e,8)/2;case gc:case _c:case vc:case Mc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case xc:case yc:case Sc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ec:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case wc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Rc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Pc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Dc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Lc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Nc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ic:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Uc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Fc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Oc:case Bc:case kc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Vc:case zc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Hc:case Gc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Cx(n){switch(n){case Nn:case ip:return{byteLength:1,components:1};case Qr:case sp:case Ni:return{byteLength:2,components:1};case xu:case vu:return{byteLength:2,components:4};case hi:case _u:case $n:return{byteLength:4,components:1};case rp:case op:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gu}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gu);function Pp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Px(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<h.length;p++){const _=h[f],x=h[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,_=h.length;p<_;p++){const x=h[p];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Dx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Nx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ix=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ux=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ox=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Vx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Wx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Xx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$x=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ev=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,iv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ov=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,av="gl_FragColor = linearToOutputTexel( gl_FragColor );",lv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,uv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,hv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_v=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ev=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Av=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Cv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Pv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Dv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Lv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Iv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ov=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$v=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Kv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,eM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,oM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,dM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_M=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,MM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,EM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,TM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,AM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,CM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,OM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,BM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,VM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,WM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,XM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$M=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ZM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,JM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ey=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ty=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ny=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ry=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ay=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ly=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gt={alphahash_fragment:Dx,alphahash_pars_fragment:Lx,alphamap_fragment:Nx,alphamap_pars_fragment:Ix,alphatest_fragment:Ux,alphatest_pars_fragment:Fx,aomap_fragment:Ox,aomap_pars_fragment:Bx,batching_pars_vertex:kx,batching_vertex:Vx,begin_vertex:zx,beginnormal_vertex:Hx,bsdfs:Gx,iridescence_fragment:Wx,bumpmap_pars_fragment:Xx,clipping_planes_fragment:qx,clipping_planes_pars_fragment:jx,clipping_planes_pars_vertex:Yx,clipping_planes_vertex:$x,color_fragment:Kx,color_pars_fragment:Zx,color_pars_vertex:Jx,color_vertex:Qx,common:ev,cube_uv_reflection_fragment:tv,defaultnormal_vertex:nv,displacementmap_pars_vertex:iv,displacementmap_vertex:sv,emissivemap_fragment:rv,emissivemap_pars_fragment:ov,colorspace_fragment:av,colorspace_pars_fragment:lv,envmap_fragment:cv,envmap_common_pars_fragment:uv,envmap_pars_fragment:hv,envmap_pars_vertex:fv,envmap_physical_pars_fragment:bv,envmap_vertex:dv,fog_vertex:pv,fog_pars_vertex:mv,fog_fragment:gv,fog_pars_fragment:_v,gradientmap_pars_fragment:xv,lightmap_pars_fragment:vv,lights_lambert_fragment:Mv,lights_lambert_pars_fragment:yv,lights_pars_begin:Sv,lights_toon_fragment:Ev,lights_toon_pars_fragment:Tv,lights_phong_fragment:Av,lights_phong_pars_fragment:wv,lights_physical_fragment:Rv,lights_physical_pars_fragment:Cv,lights_fragment_begin:Pv,lights_fragment_maps:Dv,lights_fragment_end:Lv,logdepthbuf_fragment:Nv,logdepthbuf_pars_fragment:Iv,logdepthbuf_pars_vertex:Uv,logdepthbuf_vertex:Fv,map_fragment:Ov,map_pars_fragment:Bv,map_particle_fragment:kv,map_particle_pars_fragment:Vv,metalnessmap_fragment:zv,metalnessmap_pars_fragment:Hv,morphinstance_vertex:Gv,morphcolor_vertex:Wv,morphnormal_vertex:Xv,morphtarget_pars_vertex:qv,morphtarget_vertex:jv,normal_fragment_begin:Yv,normal_fragment_maps:$v,normal_pars_fragment:Kv,normal_pars_vertex:Zv,normal_vertex:Jv,normalmap_pars_fragment:Qv,clearcoat_normal_fragment_begin:eM,clearcoat_normal_fragment_maps:tM,clearcoat_pars_fragment:nM,iridescence_pars_fragment:iM,opaque_fragment:sM,packing:rM,premultiplied_alpha_fragment:oM,project_vertex:aM,dithering_fragment:lM,dithering_pars_fragment:cM,roughnessmap_fragment:uM,roughnessmap_pars_fragment:hM,shadowmap_pars_fragment:fM,shadowmap_pars_vertex:dM,shadowmap_vertex:pM,shadowmask_pars_fragment:mM,skinbase_vertex:gM,skinning_pars_vertex:_M,skinning_vertex:xM,skinnormal_vertex:vM,specularmap_fragment:MM,specularmap_pars_fragment:yM,tonemapping_fragment:SM,tonemapping_pars_fragment:bM,transmission_fragment:EM,transmission_pars_fragment:TM,uv_pars_fragment:AM,uv_pars_vertex:wM,uv_vertex:RM,worldpos_vertex:CM,background_vert:PM,background_frag:DM,backgroundCube_vert:LM,backgroundCube_frag:NM,cube_vert:IM,cube_frag:UM,depth_vert:FM,depth_frag:OM,distance_vert:BM,distance_frag:kM,equirect_vert:VM,equirect_frag:zM,linedashed_vert:HM,linedashed_frag:GM,meshbasic_vert:WM,meshbasic_frag:XM,meshlambert_vert:qM,meshlambert_frag:jM,meshmatcap_vert:YM,meshmatcap_frag:$M,meshnormal_vert:KM,meshnormal_frag:ZM,meshphong_vert:JM,meshphong_frag:QM,meshphysical_vert:ey,meshphysical_frag:ty,meshtoon_vert:ny,meshtoon_frag:iy,points_vert:sy,points_frag:ry,shadow_vert:oy,shadow_frag:ay,sprite_vert:ly,sprite_frag:cy},Ue={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},si={basic:{uniforms:vn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:vn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new ft(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:vn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:vn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:vn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new ft(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:vn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:vn([Ue.points,Ue.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:vn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:vn([Ue.common,Ue.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:vn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:vn([Ue.sprite,Ue.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:vn([Ue.common,Ue.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:vn([Ue.lights,Ue.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};si.physical={uniforms:vn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Xo={r:0,b:0,g:0},ls=new An,uy=new ct;function hy(n,e,t,i,s,r,o){const a=new ft(0);let l=r===!0?0:1,c,u,h=null,f=0,p=null;function _(D){let E=D.isScene===!0?D.background:null;return E&&E.isTexture&&(E=(D.backgroundBlurriness>0?t:e).get(E)),E}function x(D){let E=!1;const R=_(D);R===null?d(a,l):R&&R.isColor&&(d(R,1),E=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(D,E){const R=_(E);R&&(R.isCubeTexture||R.mapping===Ia)?(u===void 0&&(u=new fn(new vr(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:fr(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,L,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ls.copy(E.backgroundRotation),ls.x*=-1,ls.y*=-1,ls.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(uy.makeRotationFromEuler(ls)),u.material.toneMapped=vt.getTransfer(R.colorSpace)!==Lt,(h!==R||f!==R.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=R,f=R.version,p=n.toneMapping),u.layers.enableAll(),D.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new fn(new Fa(2,2),new fi({name:"BackgroundMaterial",uniforms:fr(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=vt.getTransfer(R.colorSpace)!==Lt,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(h!==R||f!==R.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=R,f=R.version,p=n.toneMapping),c.layers.enableAll(),D.unshift(c,c.geometry,c.material,0,0,null))}function d(D,E){D.getRGB(Xo,mp(n)),i.buffers.color.setClear(Xo.r,Xo.g,Xo.b,E,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(D,E=1){a.set(D),l=E,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(D){l=D,d(a,l)},render:x,addToRenderList:m,dispose:A}}function fy(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(S,N,k,z,K){let Y=!1;const B=h(z,k,N);r!==B&&(r=B,c(r.object)),Y=p(S,z,k,K),Y&&_(S,z,k,K),K!==null&&e.update(K,n.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,E(S,N,k,z),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,N,k){const z=k.wireframe===!0;let K=i[S.id];K===void 0&&(K={},i[S.id]=K);let Y=K[N.id];Y===void 0&&(Y={},K[N.id]=Y);let B=Y[z];return B===void 0&&(B=f(l()),Y[z]=B),B}function f(S){const N=[],k=[],z=[];for(let K=0;K<t;K++)N[K]=0,k[K]=0,z[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:k,attributeDivisors:z,object:S,attributes:{},index:null}}function p(S,N,k,z){const K=r.attributes,Y=N.attributes;let B=0;const G=k.getAttributes();for(const $ in G)if(G[$].location>=0){const ge=K[$];let me=Y[$];if(me===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(me=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(me=S.instanceColor)),ge===void 0||ge.attribute!==me||me&&ge.data!==me.data)return!0;B++}return r.attributesNum!==B||r.index!==z}function _(S,N,k,z){const K={},Y=N.attributes;let B=0;const G=k.getAttributes();for(const $ in G)if(G[$].location>=0){let ge=Y[$];ge===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(ge=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(ge=S.instanceColor));const me={};me.attribute=ge,ge&&ge.data&&(me.data=ge.data),K[$]=me,B++}r.attributes=K,r.attributesNum=B,r.index=z}function x(){const S=r.newAttributes;for(let N=0,k=S.length;N<k;N++)S[N]=0}function m(S){d(S,0)}function d(S,N){const k=r.newAttributes,z=r.enabledAttributes,K=r.attributeDivisors;k[S]=1,z[S]===0&&(n.enableVertexAttribArray(S),z[S]=1),K[S]!==N&&(n.vertexAttribDivisor(S,N),K[S]=N)}function A(){const S=r.newAttributes,N=r.enabledAttributes;for(let k=0,z=N.length;k<z;k++)N[k]!==S[k]&&(n.disableVertexAttribArray(k),N[k]=0)}function D(S,N,k,z,K,Y,B){B===!0?n.vertexAttribIPointer(S,N,k,K,Y):n.vertexAttribPointer(S,N,k,z,K,Y)}function E(S,N,k,z){x();const K=z.attributes,Y=k.getAttributes(),B=N.defaultAttributeValues;for(const G in Y){const $=Y[G];if($.location>=0){let pe=K[G];if(pe===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(pe=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(pe=S.instanceColor)),pe!==void 0){const ge=pe.normalized,me=pe.itemSize,Le=e.get(pe);if(Le===void 0)continue;const Ee=Le.buffer,ke=Le.type,Ce=Le.bytesPerElement,q=ke===n.INT||ke===n.UNSIGNED_INT||pe.gpuType===_u;if(pe.isInterleavedBufferAttribute){const te=pe.data,Se=te.stride,Qe=pe.offset;if(te.isInstancedInterleavedBuffer){for(let Oe=0;Oe<$.locationSize;Oe++)d($.location+Oe,te.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Oe=0;Oe<$.locationSize;Oe++)m($.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let Oe=0;Oe<$.locationSize;Oe++)D($.location+Oe,me/$.locationSize,ke,ge,Se*Ce,(Qe+me/$.locationSize*Oe)*Ce,q)}else{if(pe.isInstancedBufferAttribute){for(let te=0;te<$.locationSize;te++)d($.location+te,pe.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let te=0;te<$.locationSize;te++)m($.location+te);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let te=0;te<$.locationSize;te++)D($.location+te,me/$.locationSize,ke,ge,me*Ce,me/$.locationSize*te*Ce,q)}}else if(B!==void 0){const ge=B[G];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv($.location,ge);break;case 3:n.vertexAttrib3fv($.location,ge);break;case 4:n.vertexAttrib4fv($.location,ge);break;default:n.vertexAttrib1fv($.location,ge)}}}}A()}function R(){F();for(const S in i){const N=i[S];for(const k in N){const z=N[k];for(const K in z)u(z[K].object),delete z[K];delete N[k]}delete i[S]}}function I(S){if(i[S.id]===void 0)return;const N=i[S.id];for(const k in N){const z=N[k];for(const K in z)u(z[K].object),delete z[K];delete N[k]}delete i[S.id]}function L(S){for(const N in i){const k=i[N];if(k[S.id]===void 0)continue;const z=k[S.id];for(const K in z)u(z[K].object),delete z[K];delete k[S.id]}}function F(){v(),o=!0,r!==s&&(r=s,c(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:v,dispose:R,releaseStatesOfGeometry:I,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:m,disableUnusedAttributes:A}}function dy(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];t.update(p,i,1)}function l(c,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let _=0;for(let x=0;x<h;x++)_+=u[x]*f[x];t.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function py(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==zn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const F=L===Ni&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Nn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==$n&&!F)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(nt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),D=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),I=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:A,maxVaryings:D,maxFragmentUniforms:E,maxSamples:R,samples:I}}function my(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new ji,a=new mt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||s;return s=f,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const _=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const A=r?0:i,D=A*4;let E=d.clippingState||null;l.value=E,E=u(_,f,D,p);for(let R=0;R!==D;++R)E[R]=t[R];d.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,_){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const d=p+x*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<d)&&(m=new Float32Array(d));for(let D=0,E=p;D!==x;++D,E+=4)o.copy(h[D]).applyMatrix4(A,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function gy(n){let e=new WeakMap;function t(o,a){return a===cc?o.mapping=ys:a===uc&&(o.mapping=lr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===cc||a===uc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new xp(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const $i=4,pf=[.125,.215,.35,.446,.526,.582],fs=20,_y=256,Nr=new ka,mf=new ft;let Il=null,Ul=0,Fl=0,Ol=!1;const xy=new X;class gf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=xy}=r;Il=this._renderer.getRenderTarget(),Ul=this._renderer.getActiveCubeFace(),Fl=this._renderer.getActiveMipmapLevel(),Ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Il,Ul,Fl),this._renderer.xr.enabled=Ol,e.scissorTest=!1,Gs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ys||e.mapping===lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Il=this._renderer.getRenderTarget(),Ul=this._renderer.getActiveCubeFace(),Fl=this._renderer.getActiveMipmapLevel(),Ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:Ni,format:zn,colorSpace:ur,depthBuffer:!1},s=_f(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_f(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=vy(r)),this._blurMaterial=yy(r,e,t),this._ggxMaterial=My(r,e,t)}return s}_compileMaterial(e){const t=new fn(new en,e);this._renderer.compile(t,Nr)}_sceneToCubeUV(e,t,i,s,r){const l=new un(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(mf),h.toneMapping=li,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new fn(new vr,new _a({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let d=!1;const A=e.background;A?A.isColor&&(m.color.copy(A),e.background=null,d=!0):(m.color.copy(mf),d=!0);for(let D=0;D<6;D++){const E=D%3;E===0?(l.up.set(0,c[D],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[D],r.y,r.z)):E===1?(l.up.set(0,0,c[D]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[D],r.z)):(l.up.set(0,c[D],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[D]));const R=this._cubeSize;Gs(s,E*R,D>2?R:0,R,R),h.setRenderTarget(s),d&&h.render(x,l),h.render(e,l)}h.toneMapping=p,h.autoClear=f,e.background=A}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ys||e.mapping===lr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Gs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Nr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,p=h*f,{_lodMax:_}=this,x=this._sizeLods[i],m=3*x*(i>_-$i?i-_+$i:0),d=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-t,Gs(r,m,d,3*x,2*x),s.setRenderTarget(r),s.render(a,Nr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,Gs(e,m,d,3*x,2*x),s.setRenderTarget(e),s.render(a,Nr)}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&_t("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[s];h.material=c;const f=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*fs-1),x=r/_,m=isFinite(r)?1+Math.floor(u*x):fs;m>fs&&nt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fs}`);const d=[];let A=0;for(let L=0;L<fs;++L){const F=L/x,v=Math.exp(-F*F/2);d.push(v),L===0?A+=v:L<m&&(A+=2*v)}for(let L=0;L<d.length;L++)d[L]=d[L]/A;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:D}=this;f.dTheta.value=_,f.mipInt.value=D-i;const E=this._sizeLods[s],R=3*E*(s>D-$i?s-D+$i:0),I=4*(this._cubeSize-E);Gs(t,R,I,3*E,2*E),l.setRenderTarget(t),l.render(h,Nr)}}function vy(n){const e=[],t=[],i=[];let s=n;const r=n-$i+1+pf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-$i?l=pf[o-n+$i-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,x=3,m=2,d=1,A=new Float32Array(x*_*p),D=new Float32Array(m*_*p),E=new Float32Array(d*_*p);for(let I=0;I<p;I++){const L=I%3*2/3-1,F=I>2?0:-1,v=[L,F,0,L+2/3,F,0,L+2/3,F+1,0,L,F,0,L+2/3,F+1,0,L,F+1,0];A.set(v,x*_*I),D.set(f,m*_*I);const S=[I,I,I,I,I,I];E.set(S,d*_*I)}const R=new en;R.setAttribute("position",new Bn(A,x)),R.setAttribute("uv",new Bn(D,m)),R.setAttribute("faceIndex",new Bn(E,d)),i.push(new fn(R,null)),s>$i&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function _f(n,e,t){const i=new ci(n,e,t);return i.texture.mapping=Ia,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gs(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function My(n,e,t){return new fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_y,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Va(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function yy(n,e,t){const i=new Float32Array(fs),s=new X(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function xf(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function vf(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Va(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Sy(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===cc||l===uc,u=l===ys||l===lr;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new gf(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new gf(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function by(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&no("WebGLRenderer: "+i+" extension not supported."),s}}}function Ey(n,e,t,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,_=h.attributes.position;let x=0;if(p!==null){const A=p.array;x=p.version;for(let D=0,E=A.length;D<E;D+=3){const R=A[D+0],I=A[D+1],L=A[D+2];f.push(R,I,I,L,L,R)}}else if(_!==void 0){const A=_.array;x=_.version;for(let D=0,E=A.length/3-1;D<E;D+=3){const R=D+0,I=D+1,L=D+2;f.push(R,I,I,L,L,R)}}else return;const m=new(up(f)?pp:dp)(f,1);m.version=x;const d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Ty(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*o),t.update(p,i,1)}function c(f,p,_){_!==0&&(n.drawElementsInstanced(i,p,r,f*o,_),t.update(p,i,_))}function u(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];t.update(m,i,1)}function h(f,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,x,0,_);let d=0;for(let A=0;A<_;A++)d+=p[A]*x[A];t.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Ay(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:_t("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function wy(n,e,t){const i=new WeakMap,s=new Bt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let S=function(){F.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],D=a.morphAttributes.color||[];let E=0;_===!0&&(E=1),x===!0&&(E=2),m===!0&&(E=3);let R=a.attributes.position.count*E,I=1;R>e.maxTextureSize&&(I=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const L=new Float32Array(R*I*4*h),F=new hp(L,R,I,h);F.type=$n,F.needsUpdate=!0;const v=E*4;for(let N=0;N<h;N++){const k=d[N],z=A[N],K=D[N],Y=R*I*4*N;for(let B=0;B<k.count;B++){const G=B*v;_===!0&&(s.fromBufferAttribute(k,B),L[Y+G+0]=s.x,L[Y+G+1]=s.y,L[Y+G+2]=s.z,L[Y+G+3]=0),x===!0&&(s.fromBufferAttribute(z,B),L[Y+G+4]=s.x,L[Y+G+5]=s.y,L[Y+G+6]=s.z,L[Y+G+7]=0),m===!0&&(s.fromBufferAttribute(K,B),L[Y+G+8]=s.x,L[Y+G+9]=s.y,L[Y+G+10]=s.z,L[Y+G+11]=K.itemSize===4?s.w:1)}}f={count:h,texture:F,size:new at(R,I)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Ry(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Cy={[$d]:"LINEAR_TONE_MAPPING",[Kd]:"REINHARD_TONE_MAPPING",[Zd]:"CINEON_TONE_MAPPING",[Jd]:"ACES_FILMIC_TONE_MAPPING",[ep]:"AGX_TONE_MAPPING",[tp]:"NEUTRAL_TONE_MAPPING",[Qd]:"CUSTOM_TONE_MAPPING"};function Py(n,e,t,i,s){const r=new ci(e,t,{type:n,depthBuffer:i,stencilBuffer:s}),o=new ci(e,t,{type:Ni,depthBuffer:!1,stencilBuffer:!1}),a=new en;a.setAttribute("position",new At([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new At([0,2,0,0,2,0],2));const l=new sx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new fn(a,l),u=new ka(-1,1,1,-1,0,1);let h=null,f=null,p=!1,_,x=null,m=[],d=!1;this.setSize=function(A,D){r.setSize(A,D),o.setSize(A,D);for(let E=0;E<m.length;E++){const R=m[E];R.setSize&&R.setSize(A,D)}},this.setEffects=function(A){m=A,d=m.length>0&&m[0].isRenderPass===!0;const D=r.width,E=r.height;for(let R=0;R<m.length;R++){const I=m[R];I.setSize&&I.setSize(D,E)}},this.begin=function(A,D){if(p||A.toneMapping===li&&m.length===0)return!1;if(x=D,D!==null){const E=D.width,R=D.height;(r.width!==E||r.height!==R)&&this.setSize(E,R)}return d===!1&&A.setRenderTarget(r),_=A.toneMapping,A.toneMapping=li,!0},this.hasRenderPass=function(){return d},this.end=function(A,D){A.toneMapping=_,p=!0;let E=r,R=o;for(let I=0;I<m.length;I++){const L=m[I];if(L.enabled!==!1&&(L.render(A,R,E,D),L.needsSwap!==!1)){const F=E;E=R,R=F}}if(h!==A.outputColorSpace||f!==A.toneMapping){h=A.outputColorSpace,f=A.toneMapping,l.defines={},vt.getTransfer(h)===Lt&&(l.defines.SRGB_TRANSFER="");const I=Cy[f];I&&(l.defines[I]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,A.setRenderTarget(x),A.render(c,u),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Dp=new pn,qc=new io(1,1),Lp=new hp,Np=new L0,Ip=new _p,Mf=[],yf=[],Sf=new Float32Array(16),bf=new Float32Array(9),Ef=new Float32Array(4);function Sr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Mf[s];if(r===void 0&&(r=new Float32Array(s),Mf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Jt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function za(n,e){let t=yf[e];t===void 0&&(t=new Int32Array(e),yf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Dy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ly(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2fv(this.addr,e),Jt(t,e)}}function Ny(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;n.uniform3fv(this.addr,e),Jt(t,e)}}function Iy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4fv(this.addr,e),Jt(t,e)}}function Uy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,i))return;Ef.set(i),n.uniformMatrix2fv(this.addr,!1,Ef),Jt(t,i)}}function Fy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,i))return;bf.set(i),n.uniformMatrix3fv(this.addr,!1,bf),Jt(t,i)}}function Oy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,i))return;Sf.set(i),n.uniformMatrix4fv(this.addr,!1,Sf),Jt(t,i)}}function By(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ky(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2iv(this.addr,e),Jt(t,e)}}function Vy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3iv(this.addr,e),Jt(t,e)}}function zy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4iv(this.addr,e),Jt(t,e)}}function Hy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Gy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2uiv(this.addr,e),Jt(t,e)}}function Wy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3uiv(this.addr,e),Jt(t,e)}}function Xy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4uiv(this.addr,e),Jt(t,e)}}function qy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(qc.compareFunction=t.isReversedDepthBuffer()?Tu:Eu,r=qc):r=Dp,t.setTexture2D(e||r,s)}function jy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Np,s)}function Yy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Ip,s)}function $y(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Lp,s)}function Ky(n){switch(n){case 5126:return Dy;case 35664:return Ly;case 35665:return Ny;case 35666:return Iy;case 35674:return Uy;case 35675:return Fy;case 35676:return Oy;case 5124:case 35670:return By;case 35667:case 35671:return ky;case 35668:case 35672:return Vy;case 35669:case 35673:return zy;case 5125:return Hy;case 36294:return Gy;case 36295:return Wy;case 36296:return Xy;case 35678:case 36198:case 36298:case 36306:case 35682:return qy;case 35679:case 36299:case 36307:return jy;case 35680:case 36300:case 36308:case 36293:return Yy;case 36289:case 36303:case 36311:case 36292:return $y}}function Zy(n,e){n.uniform1fv(this.addr,e)}function Jy(n,e){const t=Sr(e,this.size,2);n.uniform2fv(this.addr,t)}function Qy(n,e){const t=Sr(e,this.size,3);n.uniform3fv(this.addr,t)}function eS(n,e){const t=Sr(e,this.size,4);n.uniform4fv(this.addr,t)}function tS(n,e){const t=Sr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function nS(n,e){const t=Sr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function iS(n,e){const t=Sr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function sS(n,e){n.uniform1iv(this.addr,e)}function rS(n,e){n.uniform2iv(this.addr,e)}function oS(n,e){n.uniform3iv(this.addr,e)}function aS(n,e){n.uniform4iv(this.addr,e)}function lS(n,e){n.uniform1uiv(this.addr,e)}function cS(n,e){n.uniform2uiv(this.addr,e)}function uS(n,e){n.uniform3uiv(this.addr,e)}function hS(n,e){n.uniform4uiv(this.addr,e)}function fS(n,e,t){const i=this.cache,s=e.length,r=za(t,s);Zt(i,r)||(n.uniform1iv(this.addr,r),Jt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=qc:o=Dp;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function dS(n,e,t){const i=this.cache,s=e.length,r=za(t,s);Zt(i,r)||(n.uniform1iv(this.addr,r),Jt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Np,r[o])}function pS(n,e,t){const i=this.cache,s=e.length,r=za(t,s);Zt(i,r)||(n.uniform1iv(this.addr,r),Jt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ip,r[o])}function mS(n,e,t){const i=this.cache,s=e.length,r=za(t,s);Zt(i,r)||(n.uniform1iv(this.addr,r),Jt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Lp,r[o])}function gS(n){switch(n){case 5126:return Zy;case 35664:return Jy;case 35665:return Qy;case 35666:return eS;case 35674:return tS;case 35675:return nS;case 35676:return iS;case 5124:case 35670:return sS;case 35667:case 35671:return rS;case 35668:case 35672:return oS;case 35669:case 35673:return aS;case 5125:return lS;case 36294:return cS;case 36295:return uS;case 36296:return hS;case 35678:case 36198:case 36298:case 36306:case 35682:return fS;case 35679:case 36299:case 36307:return dS;case 35680:case 36300:case 36308:case 36293:return pS;case 36289:case 36303:case 36311:case 36292:return mS}}class _S{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ky(t.type)}}class xS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gS(t.type)}}class vS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Bl=/(\w+)(\])?(\[|\.)?/g;function Tf(n,e){n.seq.push(e),n.map[e.id]=e}function MS(n,e,t){const i=n.name,s=i.length;for(Bl.lastIndex=0;;){const r=Bl.exec(i),o=Bl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Tf(t,c===void 0?new _S(a,n,e):new xS(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new vS(a),Tf(t,h)),t=h}}}class aa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);MS(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Af(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const yS=37297;let SS=0;function bS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const wf=new mt;function ES(n){vt._getMatrix(wf,vt.workingColorSpace,n);const e=`mat3( ${wf.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(n)){case ma:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Rf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+bS(n.getShaderSource(e),a)}else return r}function TS(n,e){const t=ES(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const AS={[$d]:"Linear",[Kd]:"Reinhard",[Zd]:"Cineon",[Jd]:"ACESFilmic",[ep]:"AgX",[tp]:"Neutral",[Qd]:"Custom"};function wS(n,e){const t=AS[e];return t===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const qo=new X;function RS(){vt.getLuminanceCoefficients(qo);const n=qo.x.toFixed(4),e=qo.y.toFixed(4),t=qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Or).join(`
`)}function PS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function DS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Or(n){return n!==""}function Cf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const LS=/^[ \t]*#include +<([\w\d./]+)>/gm;function jc(n){return n.replace(LS,IS)}const NS=new Map;function IS(n,e){let t=gt[e];if(t===void 0){const i=NS.get(e);if(i!==void 0)t=gt[i],nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return jc(t)}const US=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Df(n){return n.replace(US,FS)}function FS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Lf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const OS={[na]:"SHADOWMAP_TYPE_PCF",[Fr]:"SHADOWMAP_TYPE_VSM"};function BS(n){return OS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const kS={[ys]:"ENVMAP_TYPE_CUBE",[lr]:"ENVMAP_TYPE_CUBE",[Ia]:"ENVMAP_TYPE_CUBE_UV"};function VS(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":kS[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const zS={[lr]:"ENVMAP_MODE_REFRACTION"};function HS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":zS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const GS={[Na]:"ENVMAP_BLENDING_MULTIPLY",[$_]:"ENVMAP_BLENDING_MIX",[K_]:"ENVMAP_BLENDING_ADD"};function WS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":GS[n.combine]||"ENVMAP_BLENDING_NONE"}function XS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function qS(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=BS(t),c=VS(t),u=HS(t),h=WS(t),f=XS(t),p=CS(t),_=PS(r),x=s.createProgram();let m,d,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Or).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Or).join(`
`),d.length>0&&(d+=`
`)):(m=[Lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),d=[Lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==li?"#define TONE_MAPPING":"",t.toneMapping!==li?gt.tonemapping_pars_fragment:"",t.toneMapping!==li?wS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,TS("linearToOutputTexel",t.outputColorSpace),RS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Or).join(`
`)),o=jc(o),o=Cf(o,t),o=Pf(o,t),a=jc(a),a=Cf(a,t),a=Pf(a,t),o=Df(o),a=Df(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const D=A+m+o,E=A+d+a,R=Af(s,s.VERTEX_SHADER,D),I=Af(s,s.FRAGMENT_SHADER,E);s.attachShader(x,R),s.attachShader(x,I),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function L(N){if(n.debug.checkShaderErrors){const k=s.getProgramInfoLog(x)||"",z=s.getShaderInfoLog(R)||"",K=s.getShaderInfoLog(I)||"",Y=k.trim(),B=z.trim(),G=K.trim();let $=!0,pe=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,R,I);else{const ge=Rf(s,R,"vertex"),me=Rf(s,I,"fragment");_t("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+Y+`
`+ge+`
`+me)}else Y!==""?nt("WebGLProgram: Program Info Log:",Y):(B===""||G==="")&&(pe=!1);pe&&(N.diagnostics={runnable:$,programLog:Y,vertexShader:{log:B,prefix:m},fragmentShader:{log:G,prefix:d}})}s.deleteShader(R),s.deleteShader(I),F=new aa(s,x),v=DS(s,x)}let F;this.getUniforms=function(){return F===void 0&&L(this),F};let v;this.getAttributes=function(){return v===void 0&&L(this),v};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,yS)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=SS++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=I,this}let jS=0;class YS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new $S(e),t.set(e,i)),i}}class $S{constructor(e){this.id=jS++,this.code=e,this.usedTimes=0}}function KS(n,e,t,i,s,r,o){const a=new Ru,l=new YS,c=new Set,u=[],h=new Map,f=s.logarithmicDepthBuffer;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,S,N,k,z){const K=k.fog,Y=z.geometry,B=v.isMeshStandardMaterial?k.environment:null,G=(v.isMeshStandardMaterial?t:e).get(v.envMap||B),$=G&&G.mapping===Ia?G.image.height:null,pe=_[v.type];v.precision!==null&&(p=s.getMaxPrecision(v.precision),p!==v.precision&&nt("WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const ge=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,me=ge!==void 0?ge.length:0;let Le=0;Y.morphAttributes.position!==void 0&&(Le=1),Y.morphAttributes.normal!==void 0&&(Le=2),Y.morphAttributes.color!==void 0&&(Le=3);let Ee,ke,Ce,q;if(pe){const dt=si[pe];Ee=dt.vertexShader,ke=dt.fragmentShader}else Ee=v.vertexShader,ke=v.fragmentShader,l.update(v),Ce=l.getVertexShaderID(v),q=l.getFragmentShaderID(v);const te=n.getRenderTarget(),Se=n.state.buffers.depth.getReversed(),Qe=z.isInstancedMesh===!0,Oe=z.isBatchedMesh===!0,Mt=!!v.map,O=!!v.matcap,H=!!G,Q=!!v.aoMap,le=!!v.lightMap,se=!!v.bumpMap,ce=!!v.normalMap,U=!!v.displacementMap,_e=!!v.emissiveMap,he=!!v.metalnessMap,ae=!!v.roughnessMap,fe=v.anisotropy>0,T=v.clearcoat>0,g=v.dispersion>0,V=v.iridescence>0,ee=v.sheen>0,oe=v.transmission>0,J=fe&&!!v.anisotropyMap,Ie=T&&!!v.clearcoatMap,Me=T&&!!v.clearcoatNormalMap,Be=T&&!!v.clearcoatRoughnessMap,$e=V&&!!v.iridescenceMap,xe=V&&!!v.iridescenceThicknessMap,Ae=ee&&!!v.sheenColorMap,Pe=ee&&!!v.sheenRoughnessMap,Ve=!!v.specularMap,Te=!!v.specularColorMap,lt=!!v.specularIntensityMap,W=oe&&!!v.transmissionMap,Fe=oe&&!!v.thicknessMap,be=!!v.gradientMap,Ge=!!v.alphaMap,ye=v.alphaTest>0,de=!!v.alphaHash,we=!!v.extensions;let ot=li;v.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ot=n.toneMapping);const Nt={shaderID:pe,shaderType:v.type,shaderName:v.name,vertexShader:Ee,fragmentShader:ke,defines:v.defines,customVertexShaderID:Ce,customFragmentShaderID:q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Oe,batchingColor:Oe&&z._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&z.instanceColor!==null,instancingMorph:Qe&&z.morphTexture!==null,outputColorSpace:te===null?n.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:ur,alphaToCoverage:!!v.alphaToCoverage,map:Mt,matcap:O,envMap:H,envMapMode:H&&G.mapping,envMapCubeUVHeight:$,aoMap:Q,lightMap:le,bumpMap:se,normalMap:ce,displacementMap:U,emissiveMap:_e,normalMapObjectSpace:ce&&v.normalMapType===t0,normalMapTangentSpace:ce&&v.normalMapType===bu,metalnessMap:he,roughnessMap:ae,anisotropy:fe,anisotropyMap:J,clearcoat:T,clearcoatMap:Ie,clearcoatNormalMap:Me,clearcoatRoughnessMap:Be,dispersion:g,iridescence:V,iridescenceMap:$e,iridescenceThicknessMap:xe,sheen:ee,sheenColorMap:Ae,sheenRoughnessMap:Pe,specularMap:Ve,specularColorMap:Te,specularIntensityMap:lt,transmission:oe,transmissionMap:W,thicknessMap:Fe,gradientMap:be,opaque:v.transparent===!1&&v.blending===nr&&v.alphaToCoverage===!1,alphaMap:Ge,alphaTest:ye,alphaHash:de,combine:v.combine,mapUv:Mt&&x(v.map.channel),aoMapUv:Q&&x(v.aoMap.channel),lightMapUv:le&&x(v.lightMap.channel),bumpMapUv:se&&x(v.bumpMap.channel),normalMapUv:ce&&x(v.normalMap.channel),displacementMapUv:U&&x(v.displacementMap.channel),emissiveMapUv:_e&&x(v.emissiveMap.channel),metalnessMapUv:he&&x(v.metalnessMap.channel),roughnessMapUv:ae&&x(v.roughnessMap.channel),anisotropyMapUv:J&&x(v.anisotropyMap.channel),clearcoatMapUv:Ie&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:Me&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:$e&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&x(v.sheenRoughnessMap.channel),specularMapUv:Ve&&x(v.specularMap.channel),specularColorMapUv:Te&&x(v.specularColorMap.channel),specularIntensityMapUv:lt&&x(v.specularIntensityMap.channel),transmissionMapUv:W&&x(v.transmissionMap.channel),thicknessMapUv:Fe&&x(v.thicknessMap.channel),alphaMapUv:Ge&&x(v.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(ce||fe),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Y.attributes.uv&&(Mt||Ge),fog:!!K,useFog:v.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Se,skinning:z.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Le,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:ot,decodeVideoTexture:Mt&&v.map.isVideoTexture===!0&&vt.getTransfer(v.map.colorSpace)===Lt,decodeVideoTextureEmissive:_e&&v.emissiveMap.isVideoTexture===!0&&vt.getTransfer(v.emissiveMap.colorSpace)===Lt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ri,flipSided:v.side===Tn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:we&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&v.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Nt.vertexUv1s=c.has(1),Nt.vertexUv2s=c.has(2),Nt.vertexUv3s=c.has(3),c.clear(),Nt}function d(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)S.push(N),S.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(A(S,v),D(S,v),S.push(n.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function A(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function D(v,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),v.push(a.mask)}function E(v){const S=_[v.type];let N;if(S){const k=si[S];N=X0.clone(k.uniforms)}else N=v.uniforms;return N}function R(v,S){let N=h.get(S);return N!==void 0?++N.usedTimes:(N=new qS(n,S,v,r),u.push(N),h.set(S,N)),N}function I(v){if(--v.usedTimes===0){const S=u.indexOf(v);u[S]=u[u.length-1],u.pop(),h.delete(v.cacheKey),v.destroy()}}function L(v){l.remove(v)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:E,acquireProgram:R,releaseProgram:I,releaseShaderCache:L,programs:u,dispose:F}}function ZS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function JS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Nf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function If(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,p,_,x,m){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:_,renderOrder:h.renderOrder,z:x,group:m},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=x,d.group=m),e++,d}function a(h,f,p,_,x,m){const d=o(h,f,p,_,x,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(h,f,p,_,x,m){const d=o(h,f,p,_,x,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||JS),i.length>1&&i.sort(f||Nf),s.length>1&&s.sort(f||Nf)}function u(){for(let h=e,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function QS(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new If,n.set(i,[o])):s>=r.length?(o=new If,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function eb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new ft};break;case"SpotLight":t={position:new X,direction:new X,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new ft,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":t={color:new ft,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function tb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let nb=0;function ib(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function sb(n){const e=new eb,t=tb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);const s=new X,r=new ct,o=new ct;function a(c){let u=0,h=0,f=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let p=0,_=0,x=0,m=0,d=0,A=0,D=0,E=0,R=0,I=0,L=0;c.sort(ib);for(let v=0,S=c.length;v<S;v++){const N=c[v],k=N.color,z=N.intensity,K=N.distance;let Y=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===cr?Y=N.shadow.map.texture:Y=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=k.r*z,h+=k.g*z,f+=k.b*z;else if(N.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(N.sh.coefficients[B],z);L++}else if(N.isDirectionalLight){const B=e.get(N);if(B.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const G=N.shadow,$=t.get(N);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,i.directionalShadow[p]=$,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=N.shadow.matrix,A++}i.directional[p]=B,p++}else if(N.isSpotLight){const B=e.get(N);B.position.setFromMatrixPosition(N.matrixWorld),B.color.copy(k).multiplyScalar(z),B.distance=K,B.coneCos=Math.cos(N.angle),B.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),B.decay=N.decay,i.spot[x]=B;const G=N.shadow;if(N.map&&(i.spotLightMap[R]=N.map,R++,G.updateMatrices(N),N.castShadow&&I++),i.spotLightMatrix[x]=G.matrix,N.castShadow){const $=t.get(N);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,i.spotShadow[x]=$,i.spotShadowMap[x]=Y,E++}x++}else if(N.isRectAreaLight){const B=e.get(N);B.color.copy(k).multiplyScalar(z),B.halfWidth.set(N.width*.5,0,0),B.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=B,m++}else if(N.isPointLight){const B=e.get(N);if(B.color.copy(N.color).multiplyScalar(N.intensity),B.distance=N.distance,B.decay=N.decay,N.castShadow){const G=N.shadow,$=t.get(N);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,$.shadowCameraNear=G.camera.near,$.shadowCameraFar=G.camera.far,i.pointShadow[_]=$,i.pointShadowMap[_]=Y,i.pointShadowMatrix[_]=N.shadow.matrix,D++}i.point[_]=B,_++}else if(N.isHemisphereLight){const B=e.get(N);B.skyColor.copy(N.color).multiplyScalar(z),B.groundColor.copy(N.groundColor).multiplyScalar(z),i.hemi[d]=B,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ue.LTC_FLOAT_1,i.rectAreaLTC2=Ue.LTC_FLOAT_2):(i.rectAreaLTC1=Ue.LTC_HALF_1,i.rectAreaLTC2=Ue.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const F=i.hash;(F.directionalLength!==p||F.pointLength!==_||F.spotLength!==x||F.rectAreaLength!==m||F.hemiLength!==d||F.numDirectionalShadows!==A||F.numPointShadows!==D||F.numSpotShadows!==E||F.numSpotMaps!==R||F.numLightProbes!==L)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=D,i.pointShadowMap.length=D,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=D,i.spotLightMatrix.length=E+R-I,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=L,F.directionalLength=p,F.pointLength=_,F.spotLength=x,F.rectAreaLength=m,F.hemiLength=d,F.numDirectionalShadows=A,F.numPointShadows=D,F.numSpotShadows=E,F.numSpotMaps=R,F.numLightProbes=L,i.version=nb++)}function l(c,u){let h=0,f=0,p=0,_=0,x=0;const m=u.matrixWorldInverse;for(let d=0,A=c.length;d<A;d++){const D=c[d];if(D.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),h++}else if(D.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(D.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),p++}else if(D.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(D.matrixWorld),E.position.applyMatrix4(m),o.identity(),r.copy(D.matrixWorld),r.premultiply(m),o.extractRotation(r),E.halfWidth.set(D.width*.5,0,0),E.halfHeight.set(0,D.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(D.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(D.matrixWorld),E.position.applyMatrix4(m),f++}else if(D.isHemisphereLight){const E=i.hemi[x];E.direction.setFromMatrixPosition(D.matrixWorld),E.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Uf(n){const e=new sb(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function rb(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Uf(n),e.set(s,[a])):r>=o.length?(a=new Uf(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const ob=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ab=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,lb=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],cb=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Ff=new ct,Ir=new X,kl=new X;function ub(n,e,t){let i=new Du;const s=new at,r=new at,o=new Bt,a=new ox,l=new ax,c={},u=t.maxTextureSize,h={[Li]:Tn,[Tn]:Li,[ri]:ri},f=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:ob,fragmentShader:ab}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new en;_.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new fn(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=na;let d=this.type;this.render=function(I,L,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;I.type===P_&&(nt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),I.type=na);const v=n.getRenderTarget(),S=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),k=n.state;k.setBlending(wi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const z=d!==this.type;z&&L.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(Y=>Y.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,Y=I.length;K<Y;K++){const B=I[K],G=B.shadow;if(G===void 0){nt("WebGLShadowMap:",B,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const $=G.getFrameExtents();if(s.multiply($),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/$.x),s.x=r.x*$.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/$.y),s.y=r.y*$.y,G.mapSize.y=r.y)),G.map===null||z===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Fr){if(B.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ci(s.x,s.y,{format:cr,type:Ni,minFilter:Kt,magFilter:Kt,generateMipmaps:!1}),G.map.texture.name=B.name+".shadowMap",G.map.depthTexture=new io(s.x,s.y,$n),G.map.depthTexture.name=B.name+".shadowMapDepth",G.map.depthTexture.format=Ii,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=sn,G.map.depthTexture.magFilter=sn}else{B.isPointLight?(G.map=new xp(s.x),G.map.depthTexture=new nx(s.x,hi)):(G.map=new ci(s.x,s.y),G.map.depthTexture=new io(s.x,s.y,hi)),G.map.depthTexture.name=B.name+".shadowMap",G.map.depthTexture.format=Ii;const ge=n.state.buffers.depth.getReversed();this.type===na?(G.map.depthTexture.compareFunction=ge?Tu:Eu,G.map.depthTexture.minFilter=Kt,G.map.depthTexture.magFilter=Kt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=sn,G.map.depthTexture.magFilter=sn)}G.camera.updateProjectionMatrix()}const pe=G.map.isWebGLCubeRenderTarget?6:1;for(let ge=0;ge<pe;ge++){if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,ge),n.clear();else{ge===0&&(n.setRenderTarget(G.map),n.clear());const me=G.getViewport(ge);o.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),k.viewport(o)}if(B.isPointLight){const me=G.camera,Le=G.matrix,Ee=B.distance||me.far;Ee!==me.far&&(me.far=Ee,me.updateProjectionMatrix()),Ir.setFromMatrixPosition(B.matrixWorld),me.position.copy(Ir),kl.copy(me.position),kl.add(lb[ge]),me.up.copy(cb[ge]),me.lookAt(kl),me.updateMatrixWorld(),Le.makeTranslation(-Ir.x,-Ir.y,-Ir.z),Ff.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Ff,me.coordinateSystem,me.reversedDepth)}else G.updateMatrices(B);i=G.getFrustum(),E(L,F,G.camera,B,this.type)}G.isPointLightShadow!==!0&&this.type===Fr&&A(G,F),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(v,S,N)};function A(I,L){const F=e.update(x);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new ci(s.x,s.y,{format:cr,type:Ni})),f.uniforms.shadow_pass.value=I.map.depthTexture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(L,null,F,f,x,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(L,null,F,p,x,null)}function D(I,L,F,v){let S=null;const N=F.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(N!==void 0)S=N;else if(S=F.isPointLight===!0?l:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const k=S.uuid,z=L.uuid;let K=c[k];K===void 0&&(K={},c[k]=K);let Y=K[z];Y===void 0&&(Y=S.clone(),K[z]=Y,L.addEventListener("dispose",R)),S=Y}if(S.visible=L.visible,S.wireframe=L.wireframe,v===Fr?S.side=L.shadowSide!==null?L.shadowSide:L.side:S.side=L.shadowSide!==null?L.shadowSide:h[L.side],S.alphaMap=L.alphaMap,S.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,S.map=L.map,S.clipShadows=L.clipShadows,S.clippingPlanes=L.clippingPlanes,S.clipIntersection=L.clipIntersection,S.displacementMap=L.displacementMap,S.displacementScale=L.displacementScale,S.displacementBias=L.displacementBias,S.wireframeLinewidth=L.wireframeLinewidth,S.linewidth=L.linewidth,F.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const k=n.properties.get(S);k.light=F}return S}function E(I,L,F,v,S){if(I.visible===!1)return;if(I.layers.test(L.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&S===Fr)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,I.matrixWorld);const z=e.update(I),K=I.material;if(Array.isArray(K)){const Y=z.groups;for(let B=0,G=Y.length;B<G;B++){const $=Y[B],pe=K[$.materialIndex];if(pe&&pe.visible){const ge=D(I,pe,v,S);I.onBeforeShadow(n,I,L,F,z,ge,$),n.renderBufferDirect(F,null,z,ge,I,$),I.onAfterShadow(n,I,L,F,z,ge,$)}}}else if(K.visible){const Y=D(I,K,v,S);I.onBeforeShadow(n,I,L,F,z,Y,null),n.renderBufferDirect(F,null,z,Y,I,null),I.onAfterShadow(n,I,L,F,z,Y,null)}}const k=I.children;for(let z=0,K=k.length;z<K;z++)E(k[z],L,F,v,S)}function R(I){I.target.removeEventListener("dispose",R);for(const F in c){const v=c[F],S=I.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}const hb={[nc]:ic,[sc]:ac,[rc]:lc,[ar]:oc,[ic]:nc,[ac]:sc,[lc]:rc,[oc]:ar};function fb(n,e){function t(){let W=!1;const Fe=new Bt;let be=null;const Ge=new Bt(0,0,0,0);return{setMask:function(ye){be!==ye&&!W&&(n.colorMask(ye,ye,ye,ye),be=ye)},setLocked:function(ye){W=ye},setClear:function(ye,de,we,ot,Nt){Nt===!0&&(ye*=ot,de*=ot,we*=ot),Fe.set(ye,de,we,ot),Ge.equals(Fe)===!1&&(n.clearColor(ye,de,we,ot),Ge.copy(Fe))},reset:function(){W=!1,be=null,Ge.set(-1,0,0,0)}}}function i(){let W=!1,Fe=!1,be=null,Ge=null,ye=null;return{setReversed:function(de){if(Fe!==de){const we=e.get("EXT_clip_control");de?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),Fe=de;const ot=ye;ye=null,this.setClear(ot)}},getReversed:function(){return Fe},setTest:function(de){de?te(n.DEPTH_TEST):Se(n.DEPTH_TEST)},setMask:function(de){be!==de&&!W&&(n.depthMask(de),be=de)},setFunc:function(de){if(Fe&&(de=hb[de]),Ge!==de){switch(de){case nc:n.depthFunc(n.NEVER);break;case ic:n.depthFunc(n.ALWAYS);break;case sc:n.depthFunc(n.LESS);break;case ar:n.depthFunc(n.LEQUAL);break;case rc:n.depthFunc(n.EQUAL);break;case oc:n.depthFunc(n.GEQUAL);break;case ac:n.depthFunc(n.GREATER);break;case lc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ge=de}},setLocked:function(de){W=de},setClear:function(de){ye!==de&&(Fe&&(de=1-de),n.clearDepth(de),ye=de)},reset:function(){W=!1,be=null,Ge=null,ye=null,Fe=!1}}}function s(){let W=!1,Fe=null,be=null,Ge=null,ye=null,de=null,we=null,ot=null,Nt=null;return{setTest:function(dt){W||(dt?te(n.STENCIL_TEST):Se(n.STENCIL_TEST))},setMask:function(dt){Fe!==dt&&!W&&(n.stencilMask(dt),Fe=dt)},setFunc:function(dt,wn,Xn){(be!==dt||Ge!==wn||ye!==Xn)&&(n.stencilFunc(dt,wn,Xn),be=dt,Ge=wn,ye=Xn)},setOp:function(dt,wn,Xn){(de!==dt||we!==wn||ot!==Xn)&&(n.stencilOp(dt,wn,Xn),de=dt,we=wn,ot=Xn)},setLocked:function(dt){W=dt},setClear:function(dt){Nt!==dt&&(n.clearStencil(dt),Nt=dt)},reset:function(){W=!1,Fe=null,be=null,Ge=null,ye=null,de=null,we=null,ot=null,Nt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],_=null,x=!1,m=null,d=null,A=null,D=null,E=null,R=null,I=null,L=new ft(0,0,0),F=0,v=!1,S=null,N=null,k=null,z=null,K=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,G=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec($)[1]),B=G>=1):$.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),B=G>=2);let pe=null,ge={};const me=n.getParameter(n.SCISSOR_BOX),Le=n.getParameter(n.VIEWPORT),Ee=new Bt().fromArray(me),ke=new Bt().fromArray(Le);function Ce(W,Fe,be,Ge){const ye=new Uint8Array(4),de=n.createTexture();n.bindTexture(W,de),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let we=0;we<be;we++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(Fe,0,n.RGBA,1,1,Ge,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(Fe+we,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return de}const q={};q[n.TEXTURE_2D]=Ce(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=Ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=Ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=Ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(n.DEPTH_TEST),o.setFunc(ar),se(!1),ce(vh),te(n.CULL_FACE),Q(wi);function te(W){u[W]!==!0&&(n.enable(W),u[W]=!0)}function Se(W){u[W]!==!1&&(n.disable(W),u[W]=!1)}function Qe(W,Fe){return h[W]!==Fe?(n.bindFramebuffer(W,Fe),h[W]=Fe,W===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Fe),W===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Fe),!0):!1}function Oe(W,Fe){let be=p,Ge=!1;if(W){be=f.get(Fe),be===void 0&&(be=[],f.set(Fe,be));const ye=W.textures;if(be.length!==ye.length||be[0]!==n.COLOR_ATTACHMENT0){for(let de=0,we=ye.length;de<we;de++)be[de]=n.COLOR_ATTACHMENT0+de;be.length=ye.length,Ge=!0}}else be[0]!==n.BACK&&(be[0]=n.BACK,Ge=!0);Ge&&n.drawBuffers(be)}function Mt(W){return _!==W?(n.useProgram(W),_=W,!0):!1}const O={[hs]:n.FUNC_ADD,[L_]:n.FUNC_SUBTRACT,[N_]:n.FUNC_REVERSE_SUBTRACT};O[I_]=n.MIN,O[U_]=n.MAX;const H={[F_]:n.ZERO,[O_]:n.ONE,[B_]:n.SRC_COLOR,[ec]:n.SRC_ALPHA,[W_]:n.SRC_ALPHA_SATURATE,[H_]:n.DST_COLOR,[V_]:n.DST_ALPHA,[k_]:n.ONE_MINUS_SRC_COLOR,[tc]:n.ONE_MINUS_SRC_ALPHA,[G_]:n.ONE_MINUS_DST_COLOR,[z_]:n.ONE_MINUS_DST_ALPHA,[X_]:n.CONSTANT_COLOR,[q_]:n.ONE_MINUS_CONSTANT_COLOR,[j_]:n.CONSTANT_ALPHA,[Y_]:n.ONE_MINUS_CONSTANT_ALPHA};function Q(W,Fe,be,Ge,ye,de,we,ot,Nt,dt){if(W===wi){x===!0&&(Se(n.BLEND),x=!1);return}if(x===!1&&(te(n.BLEND),x=!0),W!==D_){if(W!==m||dt!==v){if((d!==hs||E!==hs)&&(n.blendEquation(n.FUNC_ADD),d=hs,E=hs),dt)switch(W){case nr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mh:n.blendFunc(n.ONE,n.ONE);break;case yh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:_t("WebGLState: Invalid blending: ",W);break}else switch(W){case nr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case yh:_t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sh:_t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:_t("WebGLState: Invalid blending: ",W);break}A=null,D=null,R=null,I=null,L.set(0,0,0),F=0,m=W,v=dt}return}ye=ye||Fe,de=de||be,we=we||Ge,(Fe!==d||ye!==E)&&(n.blendEquationSeparate(O[Fe],O[ye]),d=Fe,E=ye),(be!==A||Ge!==D||de!==R||we!==I)&&(n.blendFuncSeparate(H[be],H[Ge],H[de],H[we]),A=be,D=Ge,R=de,I=we),(ot.equals(L)===!1||Nt!==F)&&(n.blendColor(ot.r,ot.g,ot.b,Nt),L.copy(ot),F=Nt),m=W,v=!1}function le(W,Fe){W.side===ri?Se(n.CULL_FACE):te(n.CULL_FACE);let be=W.side===Tn;Fe&&(be=!be),se(be),W.blending===nr&&W.transparent===!1?Q(wi):Q(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);const Ge=W.stencilWrite;a.setTest(Ge),Ge&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),_e(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):Se(n.SAMPLE_ALPHA_TO_COVERAGE)}function se(W){S!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),S=W)}function ce(W){W!==R_?(te(n.CULL_FACE),W!==N&&(W===vh?n.cullFace(n.BACK):W===C_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Se(n.CULL_FACE),N=W}function U(W){W!==k&&(B&&n.lineWidth(W),k=W)}function _e(W,Fe,be){W?(te(n.POLYGON_OFFSET_FILL),(z!==Fe||K!==be)&&(n.polygonOffset(Fe,be),z=Fe,K=be)):Se(n.POLYGON_OFFSET_FILL)}function he(W){W?te(n.SCISSOR_TEST):Se(n.SCISSOR_TEST)}function ae(W){W===void 0&&(W=n.TEXTURE0+Y-1),pe!==W&&(n.activeTexture(W),pe=W)}function fe(W,Fe,be){be===void 0&&(pe===null?be=n.TEXTURE0+Y-1:be=pe);let Ge=ge[be];Ge===void 0&&(Ge={type:void 0,texture:void 0},ge[be]=Ge),(Ge.type!==W||Ge.texture!==Fe)&&(pe!==be&&(n.activeTexture(be),pe=be),n.bindTexture(W,Fe||q[W]),Ge.type=W,Ge.texture=Fe)}function T(){const W=ge[pe];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(W){_t("WebGLState:",W)}}function V(){try{n.compressedTexImage3D(...arguments)}catch(W){_t("WebGLState:",W)}}function ee(){try{n.texSubImage2D(...arguments)}catch(W){_t("WebGLState:",W)}}function oe(){try{n.texSubImage3D(...arguments)}catch(W){_t("WebGLState:",W)}}function J(){try{n.compressedTexSubImage2D(...arguments)}catch(W){_t("WebGLState:",W)}}function Ie(){try{n.compressedTexSubImage3D(...arguments)}catch(W){_t("WebGLState:",W)}}function Me(){try{n.texStorage2D(...arguments)}catch(W){_t("WebGLState:",W)}}function Be(){try{n.texStorage3D(...arguments)}catch(W){_t("WebGLState:",W)}}function $e(){try{n.texImage2D(...arguments)}catch(W){_t("WebGLState:",W)}}function xe(){try{n.texImage3D(...arguments)}catch(W){_t("WebGLState:",W)}}function Ae(W){Ee.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),Ee.copy(W))}function Pe(W){ke.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),ke.copy(W))}function Ve(W,Fe){let be=c.get(Fe);be===void 0&&(be=new WeakMap,c.set(Fe,be));let Ge=be.get(W);Ge===void 0&&(Ge=n.getUniformBlockIndex(Fe,W.name),be.set(W,Ge))}function Te(W,Fe){const Ge=c.get(Fe).get(W);l.get(Fe)!==Ge&&(n.uniformBlockBinding(Fe,Ge,W.__bindingPointIndex),l.set(Fe,Ge))}function lt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},pe=null,ge={},h={},f=new WeakMap,p=[],_=null,x=!1,m=null,d=null,A=null,D=null,E=null,R=null,I=null,L=new ft(0,0,0),F=0,v=!1,S=null,N=null,k=null,z=null,K=null,Ee.set(0,0,n.canvas.width,n.canvas.height),ke.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:te,disable:Se,bindFramebuffer:Qe,drawBuffers:Oe,useProgram:Mt,setBlending:Q,setMaterial:le,setFlipSided:se,setCullFace:ce,setLineWidth:U,setPolygonOffset:_e,setScissorTest:he,activeTexture:ae,bindTexture:fe,unbindTexture:T,compressedTexImage2D:g,compressedTexImage3D:V,texImage2D:$e,texImage3D:xe,updateUBOMapping:Ve,uniformBlockBinding:Te,texStorage2D:Me,texStorage3D:Be,texSubImage2D:ee,texSubImage3D:oe,compressedTexSubImage2D:J,compressedTexSubImage3D:Ie,scissor:Ae,viewport:Pe,reset:lt}}function db(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,g){return p?new OffscreenCanvas(T,g):to("canvas")}function x(T,g,V){let ee=1;const oe=fe(T);if((oe.width>V||oe.height>V)&&(ee=V/Math.max(oe.width,oe.height)),ee<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const J=Math.floor(ee*oe.width),Ie=Math.floor(ee*oe.height);h===void 0&&(h=_(J,Ie));const Me=g?_(J,Ie):h;return Me.width=J,Me.height=Ie,Me.getContext("2d").drawImage(T,0,0,J,Ie),nt("WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+J+"x"+Ie+")."),Me}else return"data"in T&&nt("WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),T;return T}function m(T){return T.generateMipmaps}function d(T){n.generateMipmap(T)}function A(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function D(T,g,V,ee,oe=!1){if(T!==null){if(n[T]!==void 0)return n[T];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let J=g;if(g===n.RED&&(V===n.FLOAT&&(J=n.R32F),V===n.HALF_FLOAT&&(J=n.R16F),V===n.UNSIGNED_BYTE&&(J=n.R8)),g===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.R8UI),V===n.UNSIGNED_SHORT&&(J=n.R16UI),V===n.UNSIGNED_INT&&(J=n.R32UI),V===n.BYTE&&(J=n.R8I),V===n.SHORT&&(J=n.R16I),V===n.INT&&(J=n.R32I)),g===n.RG&&(V===n.FLOAT&&(J=n.RG32F),V===n.HALF_FLOAT&&(J=n.RG16F),V===n.UNSIGNED_BYTE&&(J=n.RG8)),g===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RG8UI),V===n.UNSIGNED_SHORT&&(J=n.RG16UI),V===n.UNSIGNED_INT&&(J=n.RG32UI),V===n.BYTE&&(J=n.RG8I),V===n.SHORT&&(J=n.RG16I),V===n.INT&&(J=n.RG32I)),g===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RGB8UI),V===n.UNSIGNED_SHORT&&(J=n.RGB16UI),V===n.UNSIGNED_INT&&(J=n.RGB32UI),V===n.BYTE&&(J=n.RGB8I),V===n.SHORT&&(J=n.RGB16I),V===n.INT&&(J=n.RGB32I)),g===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),V===n.UNSIGNED_INT&&(J=n.RGBA32UI),V===n.BYTE&&(J=n.RGBA8I),V===n.SHORT&&(J=n.RGBA16I),V===n.INT&&(J=n.RGBA32I)),g===n.RGB&&(V===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),V===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),g===n.RGBA){const Ie=oe?ma:vt.getTransfer(ee);V===n.FLOAT&&(J=n.RGBA32F),V===n.HALF_FLOAT&&(J=n.RGBA16F),V===n.UNSIGNED_BYTE&&(J=Ie===Lt?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function E(T,g){let V;return T?g===null||g===hi||g===eo?V=n.DEPTH24_STENCIL8:g===$n?V=n.DEPTH32F_STENCIL8:g===Qr&&(V=n.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===hi||g===eo?V=n.DEPTH_COMPONENT24:g===$n?V=n.DEPTH_COMPONENT32F:g===Qr&&(V=n.DEPTH_COMPONENT16),V}function R(T,g){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==sn&&T.minFilter!==Kt?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function I(T){const g=T.target;g.removeEventListener("dispose",I),F(g),g.isVideoTexture&&u.delete(g)}function L(T){const g=T.target;g.removeEventListener("dispose",L),S(g)}function F(T){const g=i.get(T);if(g.__webglInit===void 0)return;const V=T.source,ee=f.get(V);if(ee){const oe=ee[g.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&v(T),Object.keys(ee).length===0&&f.delete(V)}i.remove(T)}function v(T){const g=i.get(T);n.deleteTexture(g.__webglTexture);const V=T.source,ee=f.get(V);delete ee[g.__cacheKey],o.memory.textures--}function S(T){const g=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(g.__webglFramebuffer[ee]))for(let oe=0;oe<g.__webglFramebuffer[ee].length;oe++)n.deleteFramebuffer(g.__webglFramebuffer[ee][oe]);else n.deleteFramebuffer(g.__webglFramebuffer[ee]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[ee])}else{if(Array.isArray(g.__webglFramebuffer))for(let ee=0;ee<g.__webglFramebuffer.length;ee++)n.deleteFramebuffer(g.__webglFramebuffer[ee]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let ee=0;ee<g.__webglColorRenderbuffer.length;ee++)g.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[ee]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const V=T.textures;for(let ee=0,oe=V.length;ee<oe;ee++){const J=i.get(V[ee]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(V[ee])}i.remove(T)}let N=0;function k(){N=0}function z(){const T=N;return T>=s.maxTextures&&nt("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),N+=1,T}function K(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function Y(T,g){const V=i.get(T);if(T.isVideoTexture&&he(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&V.__version!==T.version){const ee=T.image;if(ee===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{q(V,T,g);return}}else T.isExternalTexture&&(V.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+g)}function B(T,g){const V=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){q(V,T,g);return}else T.isExternalTexture&&(V.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+g)}function G(T,g){const V=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){q(V,T,g);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+g)}function $(T,g){const V=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&V.__version!==T.version){te(V,T,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+g)}const pe={[ds]:n.REPEAT,[On]:n.CLAMP_TO_EDGE,[hc]:n.MIRRORED_REPEAT},ge={[sn]:n.NEAREST,[J_]:n.NEAREST_MIPMAP_NEAREST,[Mo]:n.NEAREST_MIPMAP_LINEAR,[Kt]:n.LINEAR,[rl]:n.LINEAR_MIPMAP_NEAREST,[Ai]:n.LINEAR_MIPMAP_LINEAR},me={[n0]:n.NEVER,[a0]:n.ALWAYS,[i0]:n.LESS,[Eu]:n.LEQUAL,[s0]:n.EQUAL,[Tu]:n.GEQUAL,[r0]:n.GREATER,[o0]:n.NOTEQUAL};function Le(T,g){if(g.type===$n&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Kt||g.magFilter===rl||g.magFilter===Mo||g.magFilter===Ai||g.minFilter===Kt||g.minFilter===rl||g.minFilter===Mo||g.minFilter===Ai)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,pe[g.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,pe[g.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,pe[g.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,ge[g.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,ge[g.minFilter]),g.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,me[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===sn||g.minFilter!==Mo&&g.minFilter!==Ai||g.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Ee(T,g){let V=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",I));const ee=g.source;let oe=f.get(ee);oe===void 0&&(oe={},f.set(ee,oe));const J=K(g);if(J!==T.__cacheKey){oe[J]===void 0&&(oe[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),oe[J].usedTimes++;const Ie=oe[T.__cacheKey];Ie!==void 0&&(oe[T.__cacheKey].usedTimes--,Ie.usedTimes===0&&v(g)),T.__cacheKey=J,T.__webglTexture=oe[J].texture}return V}function ke(T,g,V){return Math.floor(Math.floor(T/V)/g)}function Ce(T,g,V,ee){const J=T.updateRanges;if(J.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,V,ee,g.data);else{J.sort((xe,Ae)=>xe.start-Ae.start);let Ie=0;for(let xe=1;xe<J.length;xe++){const Ae=J[Ie],Pe=J[xe],Ve=Ae.start+Ae.count,Te=ke(Pe.start,g.width,4),lt=ke(Ae.start,g.width,4);Pe.start<=Ve+1&&Te===lt&&ke(Pe.start+Pe.count-1,g.width,4)===Te?Ae.count=Math.max(Ae.count,Pe.start+Pe.count-Ae.start):(++Ie,J[Ie]=Pe)}J.length=Ie+1;const Me=n.getParameter(n.UNPACK_ROW_LENGTH),Be=n.getParameter(n.UNPACK_SKIP_PIXELS),$e=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let xe=0,Ae=J.length;xe<Ae;xe++){const Pe=J[xe],Ve=Math.floor(Pe.start/4),Te=Math.ceil(Pe.count/4),lt=Ve%g.width,W=Math.floor(Ve/g.width),Fe=Te,be=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,lt),n.pixelStorei(n.UNPACK_SKIP_ROWS,W),t.texSubImage2D(n.TEXTURE_2D,0,lt,W,Fe,be,V,ee,g.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Me),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Be),n.pixelStorei(n.UNPACK_SKIP_ROWS,$e)}}function q(T,g,V){let ee=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(ee=n.TEXTURE_3D);const oe=Ee(T,g),J=g.source;t.bindTexture(ee,T.__webglTexture,n.TEXTURE0+V);const Ie=i.get(J);if(J.version!==Ie.__version||oe===!0){t.activeTexture(n.TEXTURE0+V);const Me=vt.getPrimaries(vt.workingColorSpace),Be=g.colorSpace===Yi?null:vt.getPrimaries(g.colorSpace),$e=g.colorSpace===Yi||Me===Be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let xe=x(g.image,!1,s.maxTextureSize);xe=ae(g,xe);const Ae=r.convert(g.format,g.colorSpace),Pe=r.convert(g.type);let Ve=D(g.internalFormat,Ae,Pe,g.colorSpace,g.isVideoTexture);Le(ee,g);let Te;const lt=g.mipmaps,W=g.isVideoTexture!==!0,Fe=Ie.__version===void 0||oe===!0,be=J.dataReady,Ge=R(g,xe);if(g.isDepthTexture)Ve=E(g.format===ps,g.type),Fe&&(W?t.texStorage2D(n.TEXTURE_2D,1,Ve,xe.width,xe.height):t.texImage2D(n.TEXTURE_2D,0,Ve,xe.width,xe.height,0,Ae,Pe,null));else if(g.isDataTexture)if(lt.length>0){W&&Fe&&t.texStorage2D(n.TEXTURE_2D,Ge,Ve,lt[0].width,lt[0].height);for(let ye=0,de=lt.length;ye<de;ye++)Te=lt[ye],W?be&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,Te.width,Te.height,Ae,Pe,Te.data):t.texImage2D(n.TEXTURE_2D,ye,Ve,Te.width,Te.height,0,Ae,Pe,Te.data);g.generateMipmaps=!1}else W?(Fe&&t.texStorage2D(n.TEXTURE_2D,Ge,Ve,xe.width,xe.height),be&&Ce(g,xe,Ae,Pe)):t.texImage2D(n.TEXTURE_2D,0,Ve,xe.width,xe.height,0,Ae,Pe,xe.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){W&&Fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ge,Ve,lt[0].width,lt[0].height,xe.depth);for(let ye=0,de=lt.length;ye<de;ye++)if(Te=lt[ye],g.format!==zn)if(Ae!==null)if(W){if(be)if(g.layerUpdates.size>0){const we=df(Te.width,Te.height,g.format,g.type);for(const ot of g.layerUpdates){const Nt=Te.data.subarray(ot*we/Te.data.BYTES_PER_ELEMENT,(ot+1)*we/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,ot,Te.width,Te.height,1,Ae,Nt)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,Te.width,Te.height,xe.depth,Ae,Te.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ye,Ve,Te.width,Te.height,xe.depth,0,Te.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?be&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,Te.width,Te.height,xe.depth,Ae,Pe,Te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ye,Ve,Te.width,Te.height,xe.depth,0,Ae,Pe,Te.data)}else{W&&Fe&&t.texStorage2D(n.TEXTURE_2D,Ge,Ve,lt[0].width,lt[0].height);for(let ye=0,de=lt.length;ye<de;ye++)Te=lt[ye],g.format!==zn?Ae!==null?W?be&&t.compressedTexSubImage2D(n.TEXTURE_2D,ye,0,0,Te.width,Te.height,Ae,Te.data):t.compressedTexImage2D(n.TEXTURE_2D,ye,Ve,Te.width,Te.height,0,Te.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?be&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,Te.width,Te.height,Ae,Pe,Te.data):t.texImage2D(n.TEXTURE_2D,ye,Ve,Te.width,Te.height,0,Ae,Pe,Te.data)}else if(g.isDataArrayTexture)if(W){if(Fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ge,Ve,xe.width,xe.height,xe.depth),be)if(g.layerUpdates.size>0){const ye=df(xe.width,xe.height,g.format,g.type);for(const de of g.layerUpdates){const we=xe.data.subarray(de*ye/xe.data.BYTES_PER_ELEMENT,(de+1)*ye/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,de,xe.width,xe.height,1,Ae,Pe,we)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Ae,Pe,xe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ve,xe.width,xe.height,xe.depth,0,Ae,Pe,xe.data);else if(g.isData3DTexture)W?(Fe&&t.texStorage3D(n.TEXTURE_3D,Ge,Ve,xe.width,xe.height,xe.depth),be&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Ae,Pe,xe.data)):t.texImage3D(n.TEXTURE_3D,0,Ve,xe.width,xe.height,xe.depth,0,Ae,Pe,xe.data);else if(g.isFramebufferTexture){if(Fe)if(W)t.texStorage2D(n.TEXTURE_2D,Ge,Ve,xe.width,xe.height);else{let ye=xe.width,de=xe.height;for(let we=0;we<Ge;we++)t.texImage2D(n.TEXTURE_2D,we,Ve,ye,de,0,Ae,Pe,null),ye>>=1,de>>=1}}else if(lt.length>0){if(W&&Fe){const ye=fe(lt[0]);t.texStorage2D(n.TEXTURE_2D,Ge,Ve,ye.width,ye.height)}for(let ye=0,de=lt.length;ye<de;ye++)Te=lt[ye],W?be&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,Ae,Pe,Te):t.texImage2D(n.TEXTURE_2D,ye,Ve,Ae,Pe,Te);g.generateMipmaps=!1}else if(W){if(Fe){const ye=fe(xe);t.texStorage2D(n.TEXTURE_2D,Ge,Ve,ye.width,ye.height)}be&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae,Pe,xe)}else t.texImage2D(n.TEXTURE_2D,0,Ve,Ae,Pe,xe);m(g)&&d(ee),Ie.__version=J.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function te(T,g,V){if(g.image.length!==6)return;const ee=Ee(T,g),oe=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+V);const J=i.get(oe);if(oe.version!==J.__version||ee===!0){t.activeTexture(n.TEXTURE0+V);const Ie=vt.getPrimaries(vt.workingColorSpace),Me=g.colorSpace===Yi?null:vt.getPrimaries(g.colorSpace),Be=g.colorSpace===Yi||Ie===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const $e=g.isCompressedTexture||g.image[0].isCompressedTexture,xe=g.image[0]&&g.image[0].isDataTexture,Ae=[];for(let de=0;de<6;de++)!$e&&!xe?Ae[de]=x(g.image[de],!0,s.maxCubemapSize):Ae[de]=xe?g.image[de].image:g.image[de],Ae[de]=ae(g,Ae[de]);const Pe=Ae[0],Ve=r.convert(g.format,g.colorSpace),Te=r.convert(g.type),lt=D(g.internalFormat,Ve,Te,g.colorSpace),W=g.isVideoTexture!==!0,Fe=J.__version===void 0||ee===!0,be=oe.dataReady;let Ge=R(g,Pe);Le(n.TEXTURE_CUBE_MAP,g);let ye;if($e){W&&Fe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ge,lt,Pe.width,Pe.height);for(let de=0;de<6;de++){ye=Ae[de].mipmaps;for(let we=0;we<ye.length;we++){const ot=ye[we];g.format!==zn?Ve!==null?W?be&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,we,0,0,ot.width,ot.height,Ve,ot.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,we,lt,ot.width,ot.height,0,ot.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,we,0,0,ot.width,ot.height,Ve,Te,ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,we,lt,ot.width,ot.height,0,Ve,Te,ot.data)}}}else{if(ye=g.mipmaps,W&&Fe){ye.length>0&&Ge++;const de=fe(Ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ge,lt,de.width,de.height)}for(let de=0;de<6;de++)if(xe){W?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ae[de].width,Ae[de].height,Ve,Te,Ae[de].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,lt,Ae[de].width,Ae[de].height,0,Ve,Te,Ae[de].data);for(let we=0;we<ye.length;we++){const Nt=ye[we].image[de].image;W?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,we+1,0,0,Nt.width,Nt.height,Ve,Te,Nt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,we+1,lt,Nt.width,Nt.height,0,Ve,Te,Nt.data)}}else{W?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ve,Te,Ae[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,lt,Ve,Te,Ae[de]);for(let we=0;we<ye.length;we++){const ot=ye[we];W?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,we+1,0,0,Ve,Te,ot.image[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,we+1,lt,Ve,Te,ot.image[de])}}}m(g)&&d(n.TEXTURE_CUBE_MAP),J.__version=oe.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Se(T,g,V,ee,oe,J){const Ie=r.convert(V.format,V.colorSpace),Me=r.convert(V.type),Be=D(V.internalFormat,Ie,Me,V.colorSpace),$e=i.get(g),xe=i.get(V);if(xe.__renderTarget=g,!$e.__hasExternalTextures){const Ae=Math.max(1,g.width>>J),Pe=Math.max(1,g.height>>J);oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,J,Be,Ae,Pe,g.depth,0,Ie,Me,null):t.texImage2D(oe,J,Be,Ae,Pe,0,Ie,Me,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),_e(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,oe,xe.__webglTexture,0,U(g)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,oe,xe.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Qe(T,g,V){if(n.bindRenderbuffer(n.RENDERBUFFER,T),g.depthBuffer){const ee=g.depthTexture,oe=ee&&ee.isDepthTexture?ee.type:null,J=E(g.stencilBuffer,oe),Ie=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;_e(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,U(g),J,g.width,g.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,U(g),J,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,J,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ie,n.RENDERBUFFER,T)}else{const ee=g.textures;for(let oe=0;oe<ee.length;oe++){const J=ee[oe],Ie=r.convert(J.format,J.colorSpace),Me=r.convert(J.type),Be=D(J.internalFormat,Ie,Me,J.colorSpace);_e(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,U(g),Be,g.width,g.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,U(g),Be,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Be,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Oe(T,g,V){const ee=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const oe=i.get(g.depthTexture);if(oe.__renderTarget=g,(!oe.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),ee){if(oe.__webglInit===void 0&&(oe.__webglInit=!0,g.depthTexture.addEventListener("dispose",I)),oe.__webglTexture===void 0){oe.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture),Le(n.TEXTURE_CUBE_MAP,g.depthTexture);const $e=r.convert(g.depthTexture.format),xe=r.convert(g.depthTexture.type);let Ae;g.depthTexture.format===Ii?Ae=n.DEPTH_COMPONENT24:g.depthTexture.format===ps&&(Ae=n.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ae,g.width,g.height,0,$e,xe,null)}}else Y(g.depthTexture,0);const J=oe.__webglTexture,Ie=U(g),Me=ee?n.TEXTURE_CUBE_MAP_POSITIVE_X+V:n.TEXTURE_2D,Be=g.depthTexture.format===ps?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===Ii)_e(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Be,Me,J,0,Ie):n.framebufferTexture2D(n.FRAMEBUFFER,Be,Me,J,0);else if(g.depthTexture.format===ps)_e(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Be,Me,J,0,Ie):n.framebufferTexture2D(n.FRAMEBUFFER,Be,Me,J,0);else throw new Error("Unknown depthTexture format")}function Mt(T){const g=i.get(T),V=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const ee=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),ee){const oe=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,ee.removeEventListener("dispose",oe)};ee.addEventListener("dispose",oe),g.__depthDisposeCallback=oe}g.__boundDepthTexture=ee}if(T.depthTexture&&!g.__autoAllocateDepthBuffer)if(V)for(let ee=0;ee<6;ee++)Oe(g.__webglFramebuffer[ee],T,ee);else{const ee=T.texture.mipmaps;ee&&ee.length>0?Oe(g.__webglFramebuffer[0],T,0):Oe(g.__webglFramebuffer,T,0)}else if(V){g.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[ee]),g.__webglDepthbuffer[ee]===void 0)g.__webglDepthbuffer[ee]=n.createRenderbuffer(),Qe(g.__webglDepthbuffer[ee],T,!1);else{const oe=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=g.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,J)}}else{const ee=T.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Qe(g.__webglDepthbuffer,T,!1);else{const oe=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,J)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function O(T,g,V){const ee=i.get(T);g!==void 0&&Se(ee.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Mt(T)}function H(T){const g=T.texture,V=i.get(T),ee=i.get(g);T.addEventListener("dispose",L);const oe=T.textures,J=T.isWebGLCubeRenderTarget===!0,Ie=oe.length>1;if(Ie||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=g.version,o.memory.textures++),J){V.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(g.mipmaps&&g.mipmaps.length>0){V.__webglFramebuffer[Me]=[];for(let Be=0;Be<g.mipmaps.length;Be++)V.__webglFramebuffer[Me][Be]=n.createFramebuffer()}else V.__webglFramebuffer[Me]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){V.__webglFramebuffer=[];for(let Me=0;Me<g.mipmaps.length;Me++)V.__webglFramebuffer[Me]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Ie)for(let Me=0,Be=oe.length;Me<Be;Me++){const $e=i.get(oe[Me]);$e.__webglTexture===void 0&&($e.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&_e(T)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Me=0;Me<oe.length;Me++){const Be=oe[Me];V.__webglColorRenderbuffer[Me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[Me]);const $e=r.convert(Be.format,Be.colorSpace),xe=r.convert(Be.type),Ae=D(Be.internalFormat,$e,xe,Be.colorSpace,T.isXRRenderTarget===!0),Pe=U(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,Ae,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,V.__webglColorRenderbuffer[Me])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),Qe(V.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),Le(n.TEXTURE_CUBE_MAP,g);for(let Me=0;Me<6;Me++)if(g.mipmaps&&g.mipmaps.length>0)for(let Be=0;Be<g.mipmaps.length;Be++)Se(V.__webglFramebuffer[Me][Be],T,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Be);else Se(V.__webglFramebuffer[Me],T,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);m(g)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let Me=0,Be=oe.length;Me<Be;Me++){const $e=oe[Me],xe=i.get($e);let Ae=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Ae=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ae,xe.__webglTexture),Le(Ae,$e),Se(V.__webglFramebuffer,T,$e,n.COLOR_ATTACHMENT0+Me,Ae,0),m($e)&&d(Ae)}t.unbindTexture()}else{let Me=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Me=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Me,ee.__webglTexture),Le(Me,g),g.mipmaps&&g.mipmaps.length>0)for(let Be=0;Be<g.mipmaps.length;Be++)Se(V.__webglFramebuffer[Be],T,g,n.COLOR_ATTACHMENT0,Me,Be);else Se(V.__webglFramebuffer,T,g,n.COLOR_ATTACHMENT0,Me,0);m(g)&&d(Me),t.unbindTexture()}T.depthBuffer&&Mt(T)}function Q(T){const g=T.textures;for(let V=0,ee=g.length;V<ee;V++){const oe=g[V];if(m(oe)){const J=A(T),Ie=i.get(oe).__webglTexture;t.bindTexture(J,Ie),d(J),t.unbindTexture()}}}const le=[],se=[];function ce(T){if(T.samples>0){if(_e(T)===!1){const g=T.textures,V=T.width,ee=T.height;let oe=n.COLOR_BUFFER_BIT;const J=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ie=i.get(T),Me=g.length>1;if(Me)for(let $e=0;$e<g.length;$e++)t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+$e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const Be=T.texture.mipmaps;Be&&Be.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let $e=0;$e<g.length;$e++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),Me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[$e]);const xe=i.get(g[$e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,xe,0)}n.blitFramebuffer(0,0,V,ee,0,0,V,ee,oe,n.NEAREST),l===!0&&(le.length=0,se.length=0,le.push(n.COLOR_ATTACHMENT0+$e),T.depthBuffer&&T.resolveDepthBuffer===!1&&(le.push(J),se.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,se)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,le))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Me)for(let $e=0;$e<g.length;$e++){t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$e,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[$e]);const xe=i.get(g[$e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+$e,n.TEXTURE_2D,xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const g=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function U(T){return Math.min(s.maxSamples,T.samples)}function _e(T){const g=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function he(T){const g=o.render.frame;u.get(T)!==g&&(u.set(T,g),T.update())}function ae(T,g){const V=T.colorSpace,ee=T.format,oe=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||V!==ur&&V!==Yi&&(vt.getTransfer(V)===Lt?(ee!==zn||oe!==Nn)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):_t("WebGLTextures: Unsupported texture color space:",V)),g}function fe(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=k,this.setTexture2D=Y,this.setTexture2DArray=B,this.setTexture3D=G,this.setTextureCube=$,this.rebindTextures=O,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=_e,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function pb(n,e){function t(i,s=Yi){let r;const o=vt.getTransfer(s);if(i===Nn)return n.UNSIGNED_BYTE;if(i===xu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===vu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===rp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===op)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ip)return n.BYTE;if(i===sp)return n.SHORT;if(i===Qr)return n.UNSIGNED_SHORT;if(i===_u)return n.INT;if(i===hi)return n.UNSIGNED_INT;if(i===$n)return n.FLOAT;if(i===Ni)return n.HALF_FLOAT;if(i===ap)return n.ALPHA;if(i===lp)return n.RGB;if(i===zn)return n.RGBA;if(i===Ii)return n.DEPTH_COMPONENT;if(i===ps)return n.DEPTH_STENCIL;if(i===cp)return n.RED;if(i===Mu)return n.RED_INTEGER;if(i===cr)return n.RG;if(i===yu)return n.RG_INTEGER;if(i===Su)return n.RGBA_INTEGER;if(i===ia||i===sa||i===ra||i===oa)if(o===Lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ra)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===oa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fc||i===dc||i===pc||i===mc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===fc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===dc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===mc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gc||i===_c||i===xc||i===vc||i===Mc||i===yc||i===Sc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===gc||i===_c)return o===Lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===xc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===vc)return r.COMPRESSED_R11_EAC;if(i===Mc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===yc)return r.COMPRESSED_RG11_EAC;if(i===Sc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===bc||i===Ec||i===Tc||i===Ac||i===wc||i===Rc||i===Cc||i===Pc||i===Dc||i===Lc||i===Nc||i===Ic||i===Uc||i===Fc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===bc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ec)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Tc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ac)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Rc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Dc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Lc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Nc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ic)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Uc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Oc||i===Bc||i===kc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Oc)return o===Lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===kc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Vc||i===zc||i===Hc||i===Gc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Vc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===zc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Hc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Gc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===eo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const mb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _b{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Sp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new fi({vertexShader:mb,fragmentShader:gb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new fn(new Fa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xb extends Ss{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,_=null;const x=typeof XRWebGLBinding<"u",m=new _b,d={},A=t.getContextAttributes();let D=null,E=null;const R=[],I=[],L=new at;let F=null;const v=new un;v.viewport=new Bt;const S=new un;S.viewport=new Bt;const N=[v,S],k=new Ex;let z=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let te=R[q];return te===void 0&&(te=new wl,R[q]=te),te.getTargetRaySpace()},this.getControllerGrip=function(q){let te=R[q];return te===void 0&&(te=new wl,R[q]=te),te.getGripSpace()},this.getHand=function(q){let te=R[q];return te===void 0&&(te=new wl,R[q]=te),te.getHandSpace()};function Y(q){const te=I.indexOf(q.inputSource);if(te===-1)return;const Se=R[te];Se!==void 0&&(Se.update(q.inputSource,q.frame,c||o),Se.dispatchEvent({type:q.type,data:q.inputSource}))}function B(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",G);for(let q=0;q<R.length;q++){const te=I[q];te!==null&&(I[q]=null,R[q].disconnect(te))}z=null,K=null,m.reset();for(const q in d)delete d[q];e.setRenderTarget(D),p=null,f=null,h=null,s=null,E=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(F),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(D=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",B),s.addEventListener("inputsourceschange",G),A.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(L),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Qe=null,Oe=null;A.depth&&(Oe=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=A.stencil?ps:Ii,Qe=A.stencil?eo:hi);const Mt={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Mt),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new ci(f.textureWidth,f.textureHeight,{format:zn,type:Nn,depthTexture:new io(f.textureWidth,f.textureHeight,Qe,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Se={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Se),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new ci(p.framebufferWidth,p.framebufferHeight,{format:zn,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ce.setContext(s),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(q){for(let te=0;te<q.removed.length;te++){const Se=q.removed[te],Qe=I.indexOf(Se);Qe>=0&&(I[Qe]=null,R[Qe].disconnect(Se))}for(let te=0;te<q.added.length;te++){const Se=q.added[te];let Qe=I.indexOf(Se);if(Qe===-1){for(let Mt=0;Mt<R.length;Mt++)if(Mt>=I.length){I.push(Se),Qe=Mt;break}else if(I[Mt]===null){I[Mt]=Se,Qe=Mt;break}if(Qe===-1)break}const Oe=R[Qe];Oe&&Oe.connect(Se)}}const $=new X,pe=new X;function ge(q,te,Se){$.setFromMatrixPosition(te.matrixWorld),pe.setFromMatrixPosition(Se.matrixWorld);const Qe=$.distanceTo(pe),Oe=te.projectionMatrix.elements,Mt=Se.projectionMatrix.elements,O=Oe[14]/(Oe[10]-1),H=Oe[14]/(Oe[10]+1),Q=(Oe[9]+1)/Oe[5],le=(Oe[9]-1)/Oe[5],se=(Oe[8]-1)/Oe[0],ce=(Mt[8]+1)/Mt[0],U=O*se,_e=O*ce,he=Qe/(-se+ce),ae=he*-se;if(te.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ae),q.translateZ(he),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Oe[10]===-1)q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const fe=O+he,T=H+he,g=U-ae,V=_e+(Qe-ae),ee=Q*H/T*fe,oe=le*H/T*fe;q.projectionMatrix.makePerspective(g,V,ee,oe,fe,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function me(q,te){te===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(te.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let te=q.near,Se=q.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(Se=m.depthFar)),k.near=S.near=v.near=te,k.far=S.far=v.far=Se,(z!==k.near||K!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),z=k.near,K=k.far),k.layers.mask=q.layers.mask|6,v.layers.mask=k.layers.mask&3,S.layers.mask=k.layers.mask&5;const Qe=q.parent,Oe=k.cameras;me(k,Qe);for(let Mt=0;Mt<Oe.length;Mt++)me(Oe[Mt],Qe);Oe.length===2?ge(k,v,S):k.projectionMatrix.copy(v.projectionMatrix),Le(q,k,Qe)};function Le(q,te,Se){Se===null?q.matrix.copy(te.matrixWorld):(q.matrix.copy(Se.matrixWorld),q.matrix.invert(),q.matrix.multiply(te.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=hr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(q){return d[q]};let Ee=null;function ke(q,te){if(u=te.getViewerPose(c||o),_=te,u!==null){const Se=u.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let Qe=!1;Se.length!==k.cameras.length&&(k.cameras.length=0,Qe=!0);for(let H=0;H<Se.length;H++){const Q=Se[H];let le=null;if(p!==null)le=p.getViewport(Q);else{const ce=h.getViewSubImage(f,Q);le=ce.viewport,H===0&&(e.setRenderTargetTextures(E,ce.colorTexture,ce.depthStencilTexture),e.setRenderTarget(E))}let se=N[H];se===void 0&&(se=new un,se.layers.enable(H),se.viewport=new Bt,N[H]=se),se.matrix.fromArray(Q.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(Q.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(le.x,le.y,le.width,le.height),H===0&&(k.matrix.copy(se.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Qe===!0&&k.cameras.push(se)}const Oe=s.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=i.getBinding();const H=h.getDepthInformation(Se[0]);H&&H.isValid&&H.texture&&m.init(H,s.renderState)}if(Oe&&Oe.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let H=0;H<Se.length;H++){const Q=Se[H].camera;if(Q){let le=d[Q];le||(le=new Sp,d[Q]=le);const se=h.getCameraImage(Q);le.sourceTexture=se}}}}for(let Se=0;Se<R.length;Se++){const Qe=I[Se],Oe=R[Se];Qe!==null&&Oe!==void 0&&Oe.update(Qe,te,c||o)}Ee&&Ee(q,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),_=null}const Ce=new Pp;Ce.setAnimationLoop(ke),this.setAnimationLoop=function(q){Ee=q},this.dispose=function(){}}}const cs=new An,vb=new ct;function Mb(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,mp(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,A,D,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,E)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,A,D):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Tn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Tn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const A=e.get(d),D=A.envMap,E=A.envMapRotation;D&&(m.envMap.value=D,cs.copy(E),cs.x*=-1,cs.y*=-1,cs.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),m.envMapRotation.value.setFromMatrix4(vb.makeRotationFromEuler(cs)),m.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,A,D){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*A,m.scale.value=D*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,A){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Tn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const A=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function yb(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,D){const E=D.program;i.uniformBlockBinding(A,E)}function c(A,D){let E=s[A.id];E===void 0&&(_(A),E=u(A),s[A.id]=E,A.addEventListener("dispose",m));const R=D.program;i.updateUBOMapping(A,R);const I=e.render.frame;r[A.id]!==I&&(f(A),r[A.id]=I)}function u(A){const D=h();A.__bindingPointIndex=D;const E=n.createBuffer(),R=A.__size,I=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,R,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,D,E),E}function h(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return _t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const D=s[A.id],E=A.uniforms,R=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,D);for(let I=0,L=E.length;I<L;I++){const F=Array.isArray(E[I])?E[I]:[E[I]];for(let v=0,S=F.length;v<S;v++){const N=F[v];if(p(N,I,v,R)===!0){const k=N.__offset,z=Array.isArray(N.value)?N.value:[N.value];let K=0;for(let Y=0;Y<z.length;Y++){const B=z[Y],G=x(B);typeof B=="number"||typeof B=="boolean"?(N.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,k+K,N.__data)):B.isMatrix3?(N.__data[0]=B.elements[0],N.__data[1]=B.elements[1],N.__data[2]=B.elements[2],N.__data[3]=0,N.__data[4]=B.elements[3],N.__data[5]=B.elements[4],N.__data[6]=B.elements[5],N.__data[7]=0,N.__data[8]=B.elements[6],N.__data[9]=B.elements[7],N.__data[10]=B.elements[8],N.__data[11]=0):(B.toArray(N.__data,K),K+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(A,D,E,R){const I=A.value,L=D+"_"+E;if(R[L]===void 0)return typeof I=="number"||typeof I=="boolean"?R[L]=I:R[L]=I.clone(),!0;{const F=R[L];if(typeof I=="number"||typeof I=="boolean"){if(F!==I)return R[L]=I,!0}else if(F.equals(I)===!1)return F.copy(I),!0}return!1}function _(A){const D=A.uniforms;let E=0;const R=16;for(let L=0,F=D.length;L<F;L++){const v=Array.isArray(D[L])?D[L]:[D[L]];for(let S=0,N=v.length;S<N;S++){const k=v[S],z=Array.isArray(k.value)?k.value:[k.value];for(let K=0,Y=z.length;K<Y;K++){const B=z[K],G=x(B),$=E%R,pe=$%G.boundary,ge=$+pe;E+=pe,ge!==0&&R-ge<G.storage&&(E+=R-ge),k.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=E,E+=G.storage}}}const I=E%R;return I>0&&(E+=R-I),A.__size=E,A.__cache={},this}function x(A){const D={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(D.boundary=4,D.storage=4):A.isVector2?(D.boundary=8,D.storage=8):A.isVector3||A.isColor?(D.boundary=16,D.storage=12):A.isVector4?(D.boundary=16,D.storage=16):A.isMatrix3?(D.boundary=48,D.storage=48):A.isMatrix4?(D.boundary=64,D.storage=64):A.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):nt("WebGLRenderer: Unsupported uniform value type.",A),D}function m(A){const D=A.target;D.removeEventListener("dispose",m);const E=o.indexOf(D.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[D.id]),delete s[D.id],delete r[D.id]}function d(){for(const A in s)n.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}const Sb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ti=null;function bb(){return ti===null&&(ti=new Cu(Sb,16,16,cr,Ni),ti.name="DFG_LUT",ti.minFilter=Kt,ti.magFilter=Kt,ti.wrapS=On,ti.wrapT=On,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}class Eb{constructor(e={}){const{canvas:t=c0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Nn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;const x=p,m=new Set([Su,yu,Mu]),d=new Set([Nn,hi,Qr,eo,xu,vu]),A=new Uint32Array(4),D=new Int32Array(4);let E=null,R=null;const I=[],L=[];let F=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let S=!1;this._outputColorSpace=Wt;let N=0,k=0,z=null,K=-1,Y=null;const B=new Bt,G=new Bt;let $=null;const pe=new ft(0);let ge=0,me=t.width,Le=t.height,Ee=1,ke=null,Ce=null;const q=new Bt(0,0,me,Le),te=new Bt(0,0,me,Le);let Se=!1;const Qe=new Du;let Oe=!1,Mt=!1;const O=new ct,H=new X,Q=new Bt,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function ce(){return z===null?Ee:1}let U=i;function _e(w,j){return t.getContext(w,j)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gu}`),t.addEventListener("webglcontextlost",ot,!1),t.addEventListener("webglcontextrestored",Nt,!1),t.addEventListener("webglcontextcreationerror",dt,!1),U===null){const j="webgl2";if(U=_e(j,w),U===null)throw _e(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw _t("WebGLRenderer: "+w.message),w}let he,ae,fe,T,g,V,ee,oe,J,Ie,Me,Be,$e,xe,Ae,Pe,Ve,Te,lt,W,Fe,be,Ge,ye;function de(){he=new by(U),he.init(),be=new pb(U,he),ae=new py(U,he,e,be),fe=new fb(U,he),ae.reversedDepthBuffer&&f&&fe.buffers.depth.setReversed(!0),T=new Ay(U),g=new ZS,V=new db(U,he,fe,g,ae,be,T),ee=new gy(v),oe=new Sy(v),J=new Px(U),Ge=new fy(U,J),Ie=new Ey(U,J,T,Ge),Me=new Ry(U,Ie,J,T),lt=new wy(U,ae,V),Pe=new my(g),Be=new KS(v,ee,oe,he,ae,Ge,Pe),$e=new Mb(v,g),xe=new QS,Ae=new rb(he),Te=new hy(v,ee,oe,fe,Me,_,l),Ve=new ub(v,Me,ae),ye=new yb(U,T,ae,fe),W=new dy(U,he,T),Fe=new Ty(U,he,T),T.programs=Be.programs,v.capabilities=ae,v.extensions=he,v.properties=g,v.renderLists=xe,v.shadowMap=Ve,v.state=fe,v.info=T}de(),x!==Nn&&(F=new Py(x,t.width,t.height,s,r));const we=new xb(v,U);this.xr=we,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const w=he.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=he.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(w){w!==void 0&&(Ee=w,this.setSize(me,Le,!1))},this.getSize=function(w){return w.set(me,Le)},this.setSize=function(w,j,ie=!0){if(we.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}me=w,Le=j,t.width=Math.floor(w*Ee),t.height=Math.floor(j*Ee),ie===!0&&(t.style.width=w+"px",t.style.height=j+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,w,j)},this.getDrawingBufferSize=function(w){return w.set(me*Ee,Le*Ee).floor()},this.setDrawingBufferSize=function(w,j,ie){me=w,Le=j,Ee=ie,t.width=Math.floor(w*ie),t.height=Math.floor(j*ie),this.setViewport(0,0,w,j)},this.setEffects=function(w){if(x===Nn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let j=0;j<w.length;j++)if(w[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(B)},this.getViewport=function(w){return w.copy(q)},this.setViewport=function(w,j,ie,ne){w.isVector4?q.set(w.x,w.y,w.z,w.w):q.set(w,j,ie,ne),fe.viewport(B.copy(q).multiplyScalar(Ee).round())},this.getScissor=function(w){return w.copy(te)},this.setScissor=function(w,j,ie,ne){w.isVector4?te.set(w.x,w.y,w.z,w.w):te.set(w,j,ie,ne),fe.scissor(G.copy(te).multiplyScalar(Ee).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(w){fe.setScissorTest(Se=w)},this.setOpaqueSort=function(w){ke=w},this.setTransparentSort=function(w){Ce=w},this.getClearColor=function(w){return w.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(w=!0,j=!0,ie=!0){let ne=0;if(w){let Z=!1;if(z!==null){const De=z.texture.format;Z=m.has(De)}if(Z){const De=z.texture.type,Xe=d.has(De),Ne=Te.getClearColor(),We=Te.getClearAlpha(),Ke=Ne.r,st=Ne.g,tt=Ne.b;Xe?(A[0]=Ke,A[1]=st,A[2]=tt,A[3]=We,U.clearBufferuiv(U.COLOR,0,A)):(D[0]=Ke,D[1]=st,D[2]=tt,D[3]=We,U.clearBufferiv(U.COLOR,0,D))}else ne|=U.COLOR_BUFFER_BIT}j&&(ne|=U.DEPTH_BUFFER_BIT),ie&&(ne|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ot,!1),t.removeEventListener("webglcontextrestored",Nt,!1),t.removeEventListener("webglcontextcreationerror",dt,!1),Te.dispose(),xe.dispose(),Ae.dispose(),g.dispose(),ee.dispose(),oe.dispose(),Me.dispose(),Ge.dispose(),ye.dispose(),Be.dispose(),we.dispose(),we.removeEventListener("sessionstart",uo),we.removeEventListener("sessionend",Er),di.stop()};function ot(w){w.preventDefault(),Dh("WebGLRenderer: Context Lost."),S=!0}function Nt(){Dh("WebGLRenderer: Context Restored."),S=!1;const w=T.autoReset,j=Ve.enabled,ie=Ve.autoUpdate,ne=Ve.needsUpdate,Z=Ve.type;de(),T.autoReset=w,Ve.enabled=j,Ve.autoUpdate=ie,Ve.needsUpdate=ne,Ve.type=Z}function dt(w){_t("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function wn(w){const j=w.target;j.removeEventListener("dispose",wn),Xn(j)}function Xn(w){Ga(w),g.remove(w)}function Ga(w){const j=g.get(w).programs;j!==void 0&&(j.forEach(function(ie){Be.releaseProgram(ie)}),w.isShaderMaterial&&Be.releaseShaderCache(w))}this.renderBufferDirect=function(w,j,ie,ne,Z,De){j===null&&(j=le);const Xe=Z.isMesh&&Z.matrixWorld.determinant()<0,Ne=Xa(w,j,ie,ne,Z);fe.setMaterial(ne,Xe);let We=ie.index,Ke=1;if(ne.wireframe===!0){if(We=Ie.getWireframeAttribute(ie),We===void 0)return;Ke=2}const st=ie.drawRange,tt=ie.attributes.position;let pt=st.start*Ke,wt=(st.start+st.count)*Ke;De!==null&&(pt=Math.max(pt,De.start*Ke),wt=Math.min(wt,(De.start+De.count)*Ke)),We!==null?(pt=Math.max(pt,0),wt=Math.min(wt,We.count)):tt!=null&&(pt=Math.max(pt,0),wt=Math.min(wt,tt.count));const kt=wt-pt;if(kt<0||kt===1/0)return;Ge.setup(Z,ne,Ne,ie,We);let Vt,Rt=W;if(We!==null&&(Vt=J.get(We),Rt=Fe,Rt.setIndex(Vt)),Z.isMesh)ne.wireframe===!0?(fe.setLineWidth(ne.wireframeLinewidth*ce()),Rt.setMode(U.LINES)):Rt.setMode(U.TRIANGLES);else if(Z.isLine){let ze=ne.linewidth;ze===void 0&&(ze=1),fe.setLineWidth(ze*ce()),Z.isLineSegments?Rt.setMode(U.LINES):Z.isLineLoop?Rt.setMode(U.LINE_LOOP):Rt.setMode(U.LINE_STRIP)}else Z.isPoints?Rt.setMode(U.POINTS):Z.isSprite&&Rt.setMode(U.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)no("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Rt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))Rt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const ze=Z._multiDrawStarts,St=Z._multiDrawCounts,yt=Z._multiDrawCount,rn=We?J.get(We).bytesPerElement:1,pi=g.get(ne).currentProgram.getUniforms();for(let tn=0;tn<yt;tn++)pi.setValue(U,"_gl_DrawID",tn),Rt.render(ze[tn]/rn,St[tn])}else if(Z.isInstancedMesh)Rt.renderInstances(pt,kt,Z.count);else if(ie.isInstancedBufferGeometry){const ze=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,St=Math.min(ie.instanceCount,ze);Rt.renderInstances(pt,kt,St)}else Rt.render(pt,kt)};function co(w,j,ie){w.transparent===!0&&w.side===ri&&w.forceSinglePass===!1?(w.side=Tn,w.needsUpdate=!0,As(w,j,ie),w.side=Li,w.needsUpdate=!0,As(w,j,ie),w.side=ri):As(w,j,ie)}this.compile=function(w,j,ie=null){ie===null&&(ie=w),R=Ae.get(ie),R.init(j),L.push(R),ie.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(R.pushLight(Z),Z.castShadow&&R.pushShadow(Z))}),w!==ie&&w.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(R.pushLight(Z),Z.castShadow&&R.pushShadow(Z))}),R.setupLights();const ne=new Set;return w.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const De=Z.material;if(De)if(Array.isArray(De))for(let Xe=0;Xe<De.length;Xe++){const Ne=De[Xe];co(Ne,ie,Z),ne.add(Ne)}else co(De,ie,Z),ne.add(De)}),R=L.pop(),ne},this.compileAsync=function(w,j,ie=null){const ne=this.compile(w,j,ie);return new Promise(Z=>{function De(){if(ne.forEach(function(Xe){g.get(Xe).currentProgram.isReady()&&ne.delete(Xe)}),ne.size===0){Z(w);return}setTimeout(De,10)}he.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let br=null;function Wa(w){br&&br(w)}function uo(){di.stop()}function Er(){di.start()}const di=new Pp;di.setAnimationLoop(Wa),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(w){br=w,we.setAnimationLoop(w),w===null?di.stop():di.start()},we.addEventListener("sessionstart",uo),we.addEventListener("sessionend",Er),this.render=function(w,j){if(j!==void 0&&j.isCamera!==!0){_t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;const ie=we.enabled===!0&&we.isPresenting===!0,ne=F!==null&&(z===null||ie)&&F.begin(v,z);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(j),j=we.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,j,z),R=Ae.get(w,L.length),R.init(j),L.push(R),O.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Qe.setFromProjectionMatrix(O,oi,j.reversedDepth),Mt=this.localClippingEnabled,Oe=Pe.init(this.clippingPlanes,Mt),E=xe.get(w,I.length),E.init(),I.push(E),we.enabled===!0&&we.isPresenting===!0){const Xe=v.xr.getDepthSensingMesh();Xe!==null&&Es(Xe,j,-1/0,v.sortObjects)}Es(w,j,0,v.sortObjects),E.finish(),v.sortObjects===!0&&E.sort(ke,Ce),se=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,se&&Te.addToRenderList(E,w),this.info.render.frame++,Oe===!0&&Pe.beginShadows();const Z=R.state.shadowsArray;if(Ve.render(Z,w,j),Oe===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&F.hasRenderPass())===!1){const Xe=E.opaque,Ne=E.transmissive;if(R.setupLights(),j.isArrayCamera){const We=j.cameras;if(Ne.length>0)for(let Ke=0,st=We.length;Ke<st;Ke++){const tt=We[Ke];fo(Xe,Ne,w,tt)}se&&Te.render(w);for(let Ke=0,st=We.length;Ke<st;Ke++){const tt=We[Ke];ho(E,w,tt,tt.viewport)}}else Ne.length>0&&fo(Xe,Ne,w,j),se&&Te.render(w),ho(E,w,j)}z!==null&&k===0&&(V.updateMultisampleRenderTarget(z),V.updateRenderTargetMipmap(z)),ne&&F.end(v),w.isScene===!0&&w.onAfterRender(v,w,j),Ge.resetDefaultState(),K=-1,Y=null,L.pop(),L.length>0?(R=L[L.length-1],Oe===!0&&Pe.setGlobalState(v.clippingPlanes,R.state.camera)):R=null,I.pop(),I.length>0?E=I[I.length-1]:E=null};function Es(w,j,ie,ne){if(w.visible===!1)return;if(w.layers.test(j.layers)){if(w.isGroup)ie=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(j);else if(w.isLight)R.pushLight(w),w.castShadow&&R.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Qe.intersectsSprite(w)){ne&&Q.setFromMatrixPosition(w.matrixWorld).applyMatrix4(O);const Xe=Me.update(w),Ne=w.material;Ne.visible&&E.push(w,Xe,Ne,ie,Q.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Qe.intersectsObject(w))){const Xe=Me.update(w),Ne=w.material;if(ne&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Q.copy(w.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),Q.copy(Xe.boundingSphere.center)),Q.applyMatrix4(w.matrixWorld).applyMatrix4(O)),Array.isArray(Ne)){const We=Xe.groups;for(let Ke=0,st=We.length;Ke<st;Ke++){const tt=We[Ke],pt=Ne[tt.materialIndex];pt&&pt.visible&&E.push(w,Xe,pt,ie,Q.z,tt)}}else Ne.visible&&E.push(w,Xe,Ne,ie,Q.z,null)}}const De=w.children;for(let Xe=0,Ne=De.length;Xe<Ne;Xe++)Es(De[Xe],j,ie,ne)}function ho(w,j,ie,ne){const{opaque:Z,transmissive:De,transparent:Xe}=w;R.setupLightsView(ie),Oe===!0&&Pe.setGlobalState(v.clippingPlanes,ie),ne&&fe.viewport(B.copy(ne)),Z.length>0&&Ts(Z,j,ie),De.length>0&&Ts(De,j,ie),Xe.length>0&&Ts(Xe,j,ie),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function fo(w,j,ie,ne){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[ne.id]===void 0){const pt=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[ne.id]=new ci(1,1,{generateMipmaps:!0,type:pt?Ni:Nn,minFilter:Ai,samples:ae.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace})}const De=R.state.transmissionRenderTarget[ne.id],Xe=ne.viewport||B;De.setSize(Xe.z*v.transmissionResolutionScale,Xe.w*v.transmissionResolutionScale);const Ne=v.getRenderTarget(),We=v.getActiveCubeFace(),Ke=v.getActiveMipmapLevel();v.setRenderTarget(De),v.getClearColor(pe),ge=v.getClearAlpha(),ge<1&&v.setClearColor(16777215,.5),v.clear(),se&&Te.render(ie);const st=v.toneMapping;v.toneMapping=li;const tt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),R.setupLightsView(ne),Oe===!0&&Pe.setGlobalState(v.clippingPlanes,ne),Ts(w,ie,ne),V.updateMultisampleRenderTarget(De),V.updateRenderTargetMipmap(De),he.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let wt=0,kt=j.length;wt<kt;wt++){const Vt=j[wt],{object:Rt,geometry:ze,material:St,group:yt}=Vt;if(St.side===ri&&Rt.layers.test(ne.layers)){const rn=St.side;St.side=Tn,St.needsUpdate=!0,po(Rt,ie,ne,ze,St,yt),St.side=rn,St.needsUpdate=!0,pt=!0}}pt===!0&&(V.updateMultisampleRenderTarget(De),V.updateRenderTargetMipmap(De))}v.setRenderTarget(Ne,We,Ke),v.setClearColor(pe,ge),tt!==void 0&&(ne.viewport=tt),v.toneMapping=st}function Ts(w,j,ie){const ne=j.isScene===!0?j.overrideMaterial:null;for(let Z=0,De=w.length;Z<De;Z++){const Xe=w[Z],{object:Ne,geometry:We,group:Ke}=Xe;let st=Xe.material;st.allowOverride===!0&&ne!==null&&(st=ne),Ne.layers.test(ie.layers)&&po(Ne,j,ie,We,st,Ke)}}function po(w,j,ie,ne,Z,De){w.onBeforeRender(v,j,ie,ne,Z,De),w.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Z.onBeforeRender(v,j,ie,ne,w,De),Z.transparent===!0&&Z.side===ri&&Z.forceSinglePass===!1?(Z.side=Tn,Z.needsUpdate=!0,v.renderBufferDirect(ie,j,ne,Z,w,De),Z.side=Li,Z.needsUpdate=!0,v.renderBufferDirect(ie,j,ne,Z,w,De),Z.side=ri):v.renderBufferDirect(ie,j,ne,Z,w,De),w.onAfterRender(v,j,ie,ne,Z,De)}function As(w,j,ie){j.isScene!==!0&&(j=le);const ne=g.get(w),Z=R.state.lights,De=R.state.shadowsArray,Xe=Z.state.version,Ne=Be.getParameters(w,Z.state,De,j,ie),We=Be.getProgramCacheKey(Ne);let Ke=ne.programs;ne.environment=w.isMeshStandardMaterial?j.environment:null,ne.fog=j.fog,ne.envMap=(w.isMeshStandardMaterial?oe:ee).get(w.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&w.envMap===null?j.environmentRotation:w.envMapRotation,Ke===void 0&&(w.addEventListener("dispose",wn),Ke=new Map,ne.programs=Ke);let st=Ke.get(We);if(st!==void 0){if(ne.currentProgram===st&&ne.lightsStateVersion===Xe)return go(w,Ne),st}else Ne.uniforms=Be.getUniforms(w),w.onBeforeCompile(Ne,v),st=Be.acquireProgram(Ne,We),Ke.set(We,st),ne.uniforms=Ne.uniforms;const tt=ne.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(tt.clippingPlanes=Pe.uniform),go(w,Ne),ne.needsLights=ja(w),ne.lightsStateVersion=Xe,ne.needsLights&&(tt.ambientLightColor.value=Z.state.ambient,tt.lightProbe.value=Z.state.probe,tt.directionalLights.value=Z.state.directional,tt.directionalLightShadows.value=Z.state.directionalShadow,tt.spotLights.value=Z.state.spot,tt.spotLightShadows.value=Z.state.spotShadow,tt.rectAreaLights.value=Z.state.rectArea,tt.ltc_1.value=Z.state.rectAreaLTC1,tt.ltc_2.value=Z.state.rectAreaLTC2,tt.pointLights.value=Z.state.point,tt.pointLightShadows.value=Z.state.pointShadow,tt.hemisphereLights.value=Z.state.hemi,tt.directionalShadowMap.value=Z.state.directionalShadowMap,tt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,tt.spotShadowMap.value=Z.state.spotShadowMap,tt.spotLightMatrix.value=Z.state.spotLightMatrix,tt.spotLightMap.value=Z.state.spotLightMap,tt.pointShadowMap.value=Z.state.pointShadowMap,tt.pointShadowMatrix.value=Z.state.pointShadowMatrix),ne.currentProgram=st,ne.uniformsList=null,st}function mo(w){if(w.uniformsList===null){const j=w.currentProgram.getUniforms();w.uniformsList=aa.seqWithValue(j.seq,w.uniforms)}return w.uniformsList}function go(w,j){const ie=g.get(w);ie.outputColorSpace=j.outputColorSpace,ie.batching=j.batching,ie.batchingColor=j.batchingColor,ie.instancing=j.instancing,ie.instancingColor=j.instancingColor,ie.instancingMorph=j.instancingMorph,ie.skinning=j.skinning,ie.morphTargets=j.morphTargets,ie.morphNormals=j.morphNormals,ie.morphColors=j.morphColors,ie.morphTargetsCount=j.morphTargetsCount,ie.numClippingPlanes=j.numClippingPlanes,ie.numIntersection=j.numClipIntersection,ie.vertexAlphas=j.vertexAlphas,ie.vertexTangents=j.vertexTangents,ie.toneMapping=j.toneMapping}function Xa(w,j,ie,ne,Z){j.isScene!==!0&&(j=le),V.resetTextureUnits();const De=j.fog,Xe=ne.isMeshStandardMaterial?j.environment:null,Ne=z===null?v.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:ur,We=(ne.isMeshStandardMaterial?oe:ee).get(ne.envMap||Xe),Ke=ne.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,st=!!ie.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),tt=!!ie.morphAttributes.position,pt=!!ie.morphAttributes.normal,wt=!!ie.morphAttributes.color;let kt=li;ne.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(kt=v.toneMapping);const Vt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Rt=Vt!==void 0?Vt.length:0,ze=g.get(ne),St=R.state.lights;if(Oe===!0&&(Mt===!0||w!==Y)){const je=w===Y&&ne.id===K;Pe.setState(ne,w,je)}let yt=!1;ne.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==St.state.version||ze.outputColorSpace!==Ne||Z.isBatchedMesh&&ze.batching===!1||!Z.isBatchedMesh&&ze.batching===!0||Z.isBatchedMesh&&ze.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&ze.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&ze.instancing===!1||!Z.isInstancedMesh&&ze.instancing===!0||Z.isSkinnedMesh&&ze.skinning===!1||!Z.isSkinnedMesh&&ze.skinning===!0||Z.isInstancedMesh&&ze.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&ze.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&ze.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&ze.instancingMorph===!1&&Z.morphTexture!==null||ze.envMap!==We||ne.fog===!0&&ze.fog!==De||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Pe.numPlanes||ze.numIntersection!==Pe.numIntersection)||ze.vertexAlphas!==Ke||ze.vertexTangents!==st||ze.morphTargets!==tt||ze.morphNormals!==pt||ze.morphColors!==wt||ze.toneMapping!==kt||ze.morphTargetsCount!==Rt)&&(yt=!0):(yt=!0,ze.__version=ne.version);let rn=ze.currentProgram;yt===!0&&(rn=As(ne,j,Z));let pi=!1,tn=!1,Qn=!1;const Tt=rn.getUniforms(),nn=ze.uniforms;if(fe.useProgram(rn.program)&&(pi=!0,tn=!0,Qn=!0),ne.id!==K&&(K=ne.id,tn=!0),pi||Y!==w){fe.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Tt.setValue(U,"projectionMatrix",w.projectionMatrix),Tt.setValue(U,"viewMatrix",w.matrixWorldInverse);const Yt=Tt.map.cameraPosition;Yt!==void 0&&Yt.setValue(U,H.setFromMatrixPosition(w.matrixWorld)),ae.logarithmicDepthBuffer&&Tt.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Tt.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),Y!==w&&(Y=w,tn=!0,Qn=!0)}if(ze.needsLights&&(St.state.directionalShadowMap.length>0&&Tt.setValue(U,"directionalShadowMap",St.state.directionalShadowMap,V),St.state.spotShadowMap.length>0&&Tt.setValue(U,"spotShadowMap",St.state.spotShadowMap,V),St.state.pointShadowMap.length>0&&Tt.setValue(U,"pointShadowMap",St.state.pointShadowMap,V)),Z.isSkinnedMesh){Tt.setOptional(U,Z,"bindMatrix"),Tt.setOptional(U,Z,"bindMatrixInverse");const je=Z.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),Tt.setValue(U,"boneTexture",je.boneTexture,V))}Z.isBatchedMesh&&(Tt.setOptional(U,Z,"batchingTexture"),Tt.setValue(U,"batchingTexture",Z._matricesTexture,V),Tt.setOptional(U,Z,"batchingIdTexture"),Tt.setValue(U,"batchingIdTexture",Z._indirectTexture,V),Tt.setOptional(U,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Tt.setValue(U,"batchingColorTexture",Z._colorsTexture,V));const yn=ie.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&lt.update(Z,ie,rn),(tn||ze.receiveShadow!==Z.receiveShadow)&&(ze.receiveShadow=Z.receiveShadow,Tt.setValue(U,"receiveShadow",Z.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(nn.envMap.value=We,nn.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&j.environment!==null&&(nn.envMapIntensity.value=j.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=bb()),tn&&(Tt.setValue(U,"toneMappingExposure",v.toneMappingExposure),ze.needsLights&&qa(nn,Qn),De&&ne.fog===!0&&$e.refreshFogUniforms(nn,De),$e.refreshMaterialUniforms(nn,ne,Ee,Le,R.state.transmissionRenderTarget[w.id]),aa.upload(U,mo(ze),nn,V)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(aa.upload(U,mo(ze),nn,V),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Tt.setValue(U,"center",Z.center),Tt.setValue(U,"modelViewMatrix",Z.modelViewMatrix),Tt.setValue(U,"normalMatrix",Z.normalMatrix),Tt.setValue(U,"modelMatrix",Z.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const je=ne.uniformsGroups;for(let Yt=0,y=je.length;Yt<y;Yt++){const M=je[Yt];ye.update(M,rn),ye.bind(M,rn)}}return rn}function qa(w,j){w.ambientLightColor.needsUpdate=j,w.lightProbe.needsUpdate=j,w.directionalLights.needsUpdate=j,w.directionalLightShadows.needsUpdate=j,w.pointLights.needsUpdate=j,w.pointLightShadows.needsUpdate=j,w.spotLights.needsUpdate=j,w.spotLightShadows.needsUpdate=j,w.rectAreaLights.needsUpdate=j,w.hemisphereLights.needsUpdate=j}function ja(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(w,j,ie){const ne=g.get(w);ne.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),g.get(w.texture).__webglTexture=j,g.get(w.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ie,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,j){const ie=g.get(w);ie.__webglFramebuffer=j,ie.__useDefaultFramebuffer=j===void 0};const gn=U.createFramebuffer();this.setRenderTarget=function(w,j=0,ie=0){z=w,N=j,k=ie;let ne=null,Z=!1,De=!1;if(w){const Ne=g.get(w);if(Ne.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(U.FRAMEBUFFER,Ne.__webglFramebuffer),B.copy(w.viewport),G.copy(w.scissor),$=w.scissorTest,fe.viewport(B),fe.scissor(G),fe.setScissorTest($),K=-1;return}else if(Ne.__webglFramebuffer===void 0)V.setupRenderTarget(w);else if(Ne.__hasExternalTextures)V.rebindTextures(w,g.get(w.texture).__webglTexture,g.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const st=w.depthTexture;if(Ne.__boundDepthTexture!==st){if(st!==null&&g.has(st)&&(w.width!==st.image.width||w.height!==st.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");V.setupDepthRenderbuffer(w)}}const We=w.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(De=!0);const Ke=g.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ke[j])?ne=Ke[j][ie]:ne=Ke[j],Z=!0):w.samples>0&&V.useMultisampledRTT(w)===!1?ne=g.get(w).__webglMultisampledFramebuffer:Array.isArray(Ke)?ne=Ke[ie]:ne=Ke,B.copy(w.viewport),G.copy(w.scissor),$=w.scissorTest}else B.copy(q).multiplyScalar(Ee).floor(),G.copy(te).multiplyScalar(Ee).floor(),$=Se;if(ie!==0&&(ne=gn),fe.bindFramebuffer(U.FRAMEBUFFER,ne)&&fe.drawBuffers(w,ne),fe.viewport(B),fe.scissor(G),fe.setScissorTest($),Z){const Ne=g.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ne.__webglTexture,ie)}else if(De){const Ne=j;for(let We=0;We<w.textures.length;We++){const Ke=g.get(w.textures[We]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+We,Ke.__webglTexture,ie,Ne)}}else if(w!==null&&ie!==0){const Ne=g.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ne.__webglTexture,ie)}K=-1},this.readRenderTargetPixels=function(w,j,ie,ne,Z,De,Xe,Ne=0){if(!(w&&w.isWebGLRenderTarget)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=g.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Xe!==void 0&&(We=We[Xe]),We){fe.bindFramebuffer(U.FRAMEBUFFER,We);try{const Ke=w.textures[Ne],st=Ke.format,tt=Ke.type;if(!ae.textureFormatReadable(st)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ae.textureTypeReadable(tt)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=w.width-ne&&ie>=0&&ie<=w.height-Z&&(w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ne),U.readPixels(j,ie,ne,Z,be.convert(st),be.convert(tt),De))}finally{const Ke=z!==null?g.get(z).__webglFramebuffer:null;fe.bindFramebuffer(U.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(w,j,ie,ne,Z,De,Xe,Ne=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=g.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Xe!==void 0&&(We=We[Xe]),We)if(j>=0&&j<=w.width-ne&&ie>=0&&ie<=w.height-Z){fe.bindFramebuffer(U.FRAMEBUFFER,We);const Ke=w.textures[Ne],st=Ke.format,tt=Ke.type;if(!ae.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ae.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,pt),U.bufferData(U.PIXEL_PACK_BUFFER,De.byteLength,U.STREAM_READ),w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ne),U.readPixels(j,ie,ne,Z,be.convert(st),be.convert(tt),0);const wt=z!==null?g.get(z).__webglFramebuffer:null;fe.bindFramebuffer(U.FRAMEBUFFER,wt);const kt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await u0(U,kt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,pt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,De),U.deleteBuffer(pt),U.deleteSync(kt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,j=null,ie=0){const ne=Math.pow(2,-ie),Z=Math.floor(w.image.width*ne),De=Math.floor(w.image.height*ne),Xe=j!==null?j.x:0,Ne=j!==null?j.y:0;V.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,ie,0,0,Xe,Ne,Z,De),fe.unbindTexture()};const Fi=U.createFramebuffer(),Tr=U.createFramebuffer();this.copyTextureToTexture=function(w,j,ie=null,ne=null,Z=0,De=null){De===null&&(Z!==0?(no("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),De=Z,Z=0):De=0);let Xe,Ne,We,Ke,st,tt,pt,wt,kt;const Vt=w.isCompressedTexture?w.mipmaps[De]:w.image;if(ie!==null)Xe=ie.max.x-ie.min.x,Ne=ie.max.y-ie.min.y,We=ie.isBox3?ie.max.z-ie.min.z:1,Ke=ie.min.x,st=ie.min.y,tt=ie.isBox3?ie.min.z:0;else{const yn=Math.pow(2,-Z);Xe=Math.floor(Vt.width*yn),Ne=Math.floor(Vt.height*yn),w.isDataArrayTexture?We=Vt.depth:w.isData3DTexture?We=Math.floor(Vt.depth*yn):We=1,Ke=0,st=0,tt=0}ne!==null?(pt=ne.x,wt=ne.y,kt=ne.z):(pt=0,wt=0,kt=0);const Rt=be.convert(j.format),ze=be.convert(j.type);let St;j.isData3DTexture?(V.setTexture3D(j,0),St=U.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(V.setTexture2DArray(j,0),St=U.TEXTURE_2D_ARRAY):(V.setTexture2D(j,0),St=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,j.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,j.unpackAlignment);const yt=U.getParameter(U.UNPACK_ROW_LENGTH),rn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),pi=U.getParameter(U.UNPACK_SKIP_PIXELS),tn=U.getParameter(U.UNPACK_SKIP_ROWS),Qn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Vt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Vt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ke),U.pixelStorei(U.UNPACK_SKIP_ROWS,st),U.pixelStorei(U.UNPACK_SKIP_IMAGES,tt);const Tt=w.isDataArrayTexture||w.isData3DTexture,nn=j.isDataArrayTexture||j.isData3DTexture;if(w.isDepthTexture){const yn=g.get(w),je=g.get(j),Yt=g.get(yn.__renderTarget),y=g.get(je.__renderTarget);fe.bindFramebuffer(U.READ_FRAMEBUFFER,Yt.__webglFramebuffer),fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,y.__webglFramebuffer);for(let M=0;M<We;M++)Tt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,g.get(w).__webglTexture,Z,tt+M),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,g.get(j).__webglTexture,De,kt+M)),U.blitFramebuffer(Ke,st,Xe,Ne,pt,wt,Xe,Ne,U.DEPTH_BUFFER_BIT,U.NEAREST);fe.bindFramebuffer(U.READ_FRAMEBUFFER,null),fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(Z!==0||w.isRenderTargetTexture||g.has(w)){const yn=g.get(w),je=g.get(j);fe.bindFramebuffer(U.READ_FRAMEBUFFER,Fi),fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,Tr);for(let Yt=0;Yt<We;Yt++)Tt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,yn.__webglTexture,Z,tt+Yt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,yn.__webglTexture,Z),nn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,je.__webglTexture,De,kt+Yt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,je.__webglTexture,De),Z!==0?U.blitFramebuffer(Ke,st,Xe,Ne,pt,wt,Xe,Ne,U.COLOR_BUFFER_BIT,U.NEAREST):nn?U.copyTexSubImage3D(St,De,pt,wt,kt+Yt,Ke,st,Xe,Ne):U.copyTexSubImage2D(St,De,pt,wt,Ke,st,Xe,Ne);fe.bindFramebuffer(U.READ_FRAMEBUFFER,null),fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else nn?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(St,De,pt,wt,kt,Xe,Ne,We,Rt,ze,Vt.data):j.isCompressedArrayTexture?U.compressedTexSubImage3D(St,De,pt,wt,kt,Xe,Ne,We,Rt,Vt.data):U.texSubImage3D(St,De,pt,wt,kt,Xe,Ne,We,Rt,ze,Vt):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,De,pt,wt,Xe,Ne,Rt,ze,Vt.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,De,pt,wt,Vt.width,Vt.height,Rt,Vt.data):U.texSubImage2D(U.TEXTURE_2D,De,pt,wt,Xe,Ne,Rt,ze,Vt);U.pixelStorei(U.UNPACK_ROW_LENGTH,yt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,rn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,pi),U.pixelStorei(U.UNPACK_SKIP_ROWS,tn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Qn),De===0&&j.generateMipmaps&&U.generateMipmap(St),fe.unbindTexture()},this.initRenderTarget=function(w){g.get(w).__webglFramebuffer===void 0&&V.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?V.setTextureCube(w,0):w.isData3DTexture?V.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?V.setTexture2DArray(w,0):V.setTexture2D(w,0),fe.unbindTexture()},this.resetState=function(){N=0,k=0,z=null,fe.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}}const Of={type:"change"},Fu={type:"start"},Up={type:"end"},jo=new ao,Bf=new ji,Tb=Math.cos(70*Ys.DEG2RAD),$t=new X,bn=2*Math.PI,It={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Vl=1e-6;class Ab extends Rx{constructor(e,t=null){super(e,t),this.state=It.NONE,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:tr.ROTATE,MIDDLE:tr.DOLLY,RIGHT:tr.PAN},this.touches={ONE:$s.ROTATE,TWO:$s.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new Wn,this._lastTargetPosition=new X,this._quat=new Wn().setFromUnitVectors(e.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ff,this._sphericalDelta=new ff,this._scale=1,this._panOffset=new X,this._rotateStart=new at,this._rotateEnd=new at,this._rotateDelta=new at,this._panStart=new at,this._panEnd=new at,this._panDelta=new at,this._dollyStart=new at,this._dollyEnd=new at,this._dollyDelta=new at,this._dollyDirection=new X,this._mouse=new at,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Rb.bind(this),this._onPointerDown=wb.bind(this),this._onPointerUp=Cb.bind(this),this._onContextMenu=Fb.bind(this),this._onMouseWheel=Lb.bind(this),this._onKeyDown=Nb.bind(this),this._onTouchStart=Ib.bind(this),this._onTouchMove=Ub.bind(this),this._onMouseDown=Pb.bind(this),this._onMouseMove=Db.bind(this),this._interceptControlDown=Ob.bind(this),this._interceptControlUp=Bb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Of),this.update(),this.state=It.NONE}update(e=null){const t=this.object.position;$t.copy(t).sub(this.target),$t.applyQuaternion(this._quat),this._spherical.setFromVector3($t),this.autoRotate&&this.state===It.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=bn:i>Math.PI&&(i-=bn),s<-Math.PI?s+=bn:s>Math.PI&&(s-=bn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if($t.setFromSpherical(this._spherical),$t.applyQuaternion(this._quatInverse),t.copy(this.target).add($t),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=$t.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new X(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new X(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=$t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(jo.origin.copy(this.object.position),jo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(jo.direction))<Tb?this.object.lookAt(this.target):(Bf.setFromNormalAndCoplanarPoint(this.object.up,this.target),jo.intersectPlane(Bf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Vl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Vl||this._lastTargetPosition.distanceToSquared(this.target)>Vl?(this.dispatchEvent(Of),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?bn/60*this.autoRotateSpeed*e:bn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){$t.setFromMatrixColumn(t,0),$t.multiplyScalar(-e),this._panOffset.add($t)}_panUp(e,t){this.screenSpacePanning===!0?$t.setFromMatrixColumn(t,1):($t.setFromMatrixColumn(t,0),$t.crossVectors(this.object.up,$t)),$t.multiplyScalar(e),this._panOffset.add($t)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;$t.copy(s).sub(this.target);let r=$t.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new at,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function wb(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Rb(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Cb(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Up),this.state=It.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Pb(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case tr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=It.DOLLY;break;case tr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=It.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=It.ROTATE}break;case tr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=It.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=It.PAN}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(Fu)}function Db(n){switch(this.state){case It.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case It.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case It.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Lb(n){this.enabled===!1||this.enableZoom===!1||this.state!==It.NONE||(n.preventDefault(),this.dispatchEvent(Fu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Up))}function Nb(n){this.enabled!==!1&&this._handleKeyDown(n)}function Ib(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case $s.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=It.TOUCH_ROTATE;break;case $s.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=It.TOUCH_PAN;break;default:this.state=It.NONE}break;case 2:switch(this.touches.TWO){case $s.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=It.TOUCH_DOLLY_PAN;break;case $s.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=It.TOUCH_DOLLY_ROTATE;break;default:this.state=It.NONE}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(Fu)}function Ub(n){switch(this._trackPointer(n),this.state){case It.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case It.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case It.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case It.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=It.NONE}}function Fb(n){this.enabled!==!1&&n.preventDefault()}function Ob(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Bb(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class kb extends Ji{constructor(e){super(e)}load(e,t,i,s){const r=this,o=new Iu(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},i,s)}parse(e){function t(c){const u=new DataView(c),h=32/8*3+32/8*3*3+16/8,f=u.getUint32(80,!0);if(80+32/8+f*h===u.byteLength)return!0;const _=[115,111,108,105,100];for(let x=0;x<5;x++)if(i(_,u,x))return!1;return!0}function i(c,u,h){for(let f=0,p=c.length;f<p;f++)if(c[f]!==u.getUint8(h+f))return!1;return!0}function s(c){const u=new DataView(c),h=u.getUint32(80,!0);let f,p,_,x=!1,m,d,A,D,E;for(let N=0;N<70;N++)u.getUint32(N,!1)==1129270351&&u.getUint8(N+4)==82&&u.getUint8(N+5)==61&&(x=!0,m=new Float32Array(h*3*3),d=u.getUint8(N+6)/255,A=u.getUint8(N+7)/255,D=u.getUint8(N+8)/255,E=u.getUint8(N+9)/255);const R=84,I=50,L=new en,F=new Float32Array(h*3*3),v=new Float32Array(h*3*3),S=new ft;for(let N=0;N<h;N++){const k=R+N*I,z=u.getFloat32(k,!0),K=u.getFloat32(k+4,!0),Y=u.getFloat32(k+8,!0);if(x){const B=u.getUint16(k+48,!0);(B&32768)===0?(f=(B&31)/31,p=(B>>5&31)/31,_=(B>>10&31)/31):(f=d,p=A,_=D)}for(let B=1;B<=3;B++){const G=k+B*12,$=N*3*3+(B-1)*3;F[$]=u.getFloat32(G,!0),F[$+1]=u.getFloat32(G+4,!0),F[$+2]=u.getFloat32(G+8,!0),v[$]=z,v[$+1]=K,v[$+2]=Y,x&&(S.setRGB(f,p,_,Wt),m[$]=S.r,m[$+1]=S.g,m[$+2]=S.b)}}return L.setAttribute("position",new Bn(F,3)),L.setAttribute("normal",new Bn(v,3)),x&&(L.setAttribute("color",new Bn(m,3)),L.hasColors=!0,L.alpha=E),L}function r(c){const u=new en,h=/solid([\s\S]*?)endsolid/g,f=/facet([\s\S]*?)endfacet/g,p=/solid\s(.+)/;let _=0;const x=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+x+x+x,"g"),d=new RegExp("normal"+x+x+x,"g"),A=[],D=[],E=[],R=new X;let I,L=0,F=0,v=0;for(;(I=h.exec(c))!==null;){F=v;const S=I[0],N=(I=p.exec(S))!==null?I[1]:"";for(E.push(N);(I=f.exec(S))!==null;){let K=0,Y=0;const B=I[0];for(;(I=d.exec(B))!==null;)R.x=parseFloat(I[1]),R.y=parseFloat(I[2]),R.z=parseFloat(I[3]),Y++;for(;(I=m.exec(B))!==null;)A.push(parseFloat(I[1]),parseFloat(I[2]),parseFloat(I[3])),D.push(R.x,R.y,R.z),K++,v++;Y!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+_),K!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+_),_++}const k=F,z=v-F;u.userData.groupNames=E,u.addGroup(k,z,L),L++}return u.setAttribute("position",new At(A,3)),u.setAttribute("normal",new At(D,3)),u}function o(c){return typeof c!="string"?new TextDecoder().decode(c):c}function a(c){if(typeof c=="string"){const u=new Uint8Array(c.length);for(let h=0;h<c.length;h++)u[h]=c.charCodeAt(h)&255;return u.buffer||u}else return c}const l=a(e);return t(l)?s(l):r(o(e))}}class kf extends xx{constructor(e){super(e)}parse(e){function t(B){switch(B.image_type){case f:case x:if(B.colormap_length>256||B.colormap_size!==24||B.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case p:case _:case m:case d:if(B.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case h:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+B.image_type)}if(B.width<=0||B.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(B.pixel_size!==8&&B.pixel_size!==16&&B.pixel_size!==24&&B.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+B.pixel_size)}function i(B,G,$,pe,ge){let me,Le;const Ee=$.pixel_size>>3,ke=$.width*$.height*Ee;if(G&&(Le=ge.subarray(pe,pe+=$.colormap_length*($.colormap_size>>3))),B){me=new Uint8Array(ke);let Ce,q,te,Se=0;const Qe=new Uint8Array(Ee);for(;Se<ke;)if(Ce=ge[pe++],q=(Ce&127)+1,Ce&128){for(te=0;te<Ee;++te)Qe[te]=ge[pe++];for(te=0;te<q;++te)me.set(Qe,Se+te*Ee);Se+=Ee*q}else{for(q*=Ee,te=0;te<q;++te)me[Se+te]=ge[pe++];Se+=q}}else me=ge.subarray(pe,pe+=G?$.width*$.height:ke);return{pixel_data:me,palettes:Le}}function s(B,G,$,pe,ge,me,Le,Ee,ke){const Ce=ke;let q,te=0,Se,Qe;const Oe=S.width;for(Qe=G;Qe!==pe;Qe+=$)for(Se=ge;Se!==Le;Se+=me,te++)q=Ee[te],B[(Se+Oe*Qe)*4+3]=255,B[(Se+Oe*Qe)*4+2]=Ce[q*3+0],B[(Se+Oe*Qe)*4+1]=Ce[q*3+1],B[(Se+Oe*Qe)*4+0]=Ce[q*3+2];return B}function r(B,G,$,pe,ge,me,Le,Ee){let ke,Ce=0,q,te;const Se=S.width;for(te=G;te!==pe;te+=$)for(q=ge;q!==Le;q+=me,Ce+=2)ke=Ee[Ce+0]+(Ee[Ce+1]<<8),B[(q+Se*te)*4+0]=(ke&31744)>>7,B[(q+Se*te)*4+1]=(ke&992)>>2,B[(q+Se*te)*4+2]=(ke&31)<<3,B[(q+Se*te)*4+3]=ke&32768?0:255;return B}function o(B,G,$,pe,ge,me,Le,Ee){let ke=0,Ce,q;const te=S.width;for(q=G;q!==pe;q+=$)for(Ce=ge;Ce!==Le;Ce+=me,ke+=3)B[(Ce+te*q)*4+3]=255,B[(Ce+te*q)*4+2]=Ee[ke+0],B[(Ce+te*q)*4+1]=Ee[ke+1],B[(Ce+te*q)*4+0]=Ee[ke+2];return B}function a(B,G,$,pe,ge,me,Le,Ee){let ke=0,Ce,q;const te=S.width;for(q=G;q!==pe;q+=$)for(Ce=ge;Ce!==Le;Ce+=me,ke+=4)B[(Ce+te*q)*4+2]=Ee[ke+0],B[(Ce+te*q)*4+1]=Ee[ke+1],B[(Ce+te*q)*4+0]=Ee[ke+2],B[(Ce+te*q)*4+3]=Ee[ke+3];return B}function l(B,G,$,pe,ge,me,Le,Ee){let ke,Ce=0,q,te;const Se=S.width;for(te=G;te!==pe;te+=$)for(q=ge;q!==Le;q+=me,Ce++)ke=Ee[Ce],B[(q+Se*te)*4+0]=ke,B[(q+Se*te)*4+1]=ke,B[(q+Se*te)*4+2]=ke,B[(q+Se*te)*4+3]=255;return B}function c(B,G,$,pe,ge,me,Le,Ee){let ke=0,Ce,q;const te=S.width;for(q=G;q!==pe;q+=$)for(Ce=ge;Ce!==Le;Ce+=me,ke+=2)B[(Ce+te*q)*4+0]=Ee[ke+0],B[(Ce+te*q)*4+1]=Ee[ke+0],B[(Ce+te*q)*4+2]=Ee[ke+0],B[(Ce+te*q)*4+3]=Ee[ke+1];return B}function u(B,G,$,pe,ge){let me,Le,Ee,ke,Ce,q;switch((S.flags&A)>>D){default:case I:me=0,Ee=1,Ce=G,Le=0,ke=1,q=$;break;case E:me=0,Ee=1,Ce=G,Le=$-1,ke=-1,q=-1;break;case L:me=G-1,Ee=-1,Ce=-1,Le=0,ke=1,q=$;break;case R:me=G-1,Ee=-1,Ce=-1,Le=$-1,ke=-1,q=-1;break}if(z)switch(S.pixel_size){case 8:l(B,Le,ke,q,me,Ee,Ce,pe);break;case 16:c(B,Le,ke,q,me,Ee,Ce,pe);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(S.pixel_size){case 8:s(B,Le,ke,q,me,Ee,Ce,pe,ge);break;case 16:r(B,Le,ke,q,me,Ee,Ce,pe);break;case 24:o(B,Le,ke,q,me,Ee,Ce,pe);break;case 32:a(B,Le,ke,q,me,Ee,Ce,pe);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return B}const h=0,f=1,p=2,_=3,x=9,m=10,d=11,A=48,D=4,E=0,R=1,I=2,L=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let F=0;const v=new Uint8Array(e),S={id_length:v[F++],colormap_type:v[F++],image_type:v[F++],colormap_index:v[F++]|v[F++]<<8,colormap_length:v[F++]|v[F++]<<8,colormap_size:v[F++],origin:[v[F++]|v[F++]<<8,v[F++]|v[F++]<<8],width:v[F++]|v[F++]<<8,height:v[F++]|v[F++]<<8,pixel_size:v[F++],flags:v[F++]};if(t(S),S.id_length+F>e.length)throw new Error("THREE.TGALoader: No data.");F+=S.id_length;let N=!1,k=!1,z=!1;switch(S.image_type){case x:N=!0,k=!0;break;case f:k=!0;break;case m:N=!0;break;case p:break;case d:N=!0,z=!0;break;case _:z=!0;break}const K=new Uint8Array(S.width*S.height*4),Y=i(N,k,S,F,v);return u(K,S.width,S.height,Y.pixel_data,Y.palettes),{data:K,width:S.width,height:S.height,flipY:!0,generateMipmaps:!0,minFilter:Ai}}}class Vb extends Ji{load(e,t,i,s){const r=this,o=r.path===""?Cp.extractUrlBase(e):r.path,a=new Iu(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){try{t(r.parse(l,o))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},i,s)}parse(e,t){function i(y,M){const C=[],b=y.childNodes;for(let P=0,re=b.length;P<re;P++){const ue=b[P];ue.nodeName===M&&C.push(ue)}return C}function s(y){if(y.length===0)return[];const M=y.trim().split(/\s+/),C=new Array(M.length);for(let b=0,P=M.length;b<P;b++)C[b]=M[b];return C}function r(y){if(y.length===0)return[];const M=y.trim().split(/\s+/),C=new Array(M.length);for(let b=0,P=M.length;b<P;b++)C[b]=parseFloat(M[b]);return C}function o(y){if(y.length===0)return[];const M=y.trim().split(/\s+/),C=new Array(M.length);for(let b=0,P=M.length;b<P;b++)C[b]=parseInt(M[b]);return C}function a(y){return y.substring(1)}function l(){return"three_default_"+yn++}function c(y){return Object.keys(y).length===0}function u(y){return{unit:h(i(y,"unit")[0]),upAxis:f(i(y,"up_axis")[0])}}function h(y){return y!==void 0&&y.hasAttribute("meter")===!0?parseFloat(y.getAttribute("meter")):1}function f(y){return y!==void 0?y.textContent:"Y_UP"}function p(y,M,C,b){const P=i(y,M)[0];if(P!==void 0){const re=i(P,C);for(let ue=0;ue<re.length;ue++)b(re[ue])}}function _(y,M){for(const C in y){const b=y[C];b.build=M(y[C])}}function x(y,M){return y.build!==void 0||(y.build=M(y)),y.build}function m(y){const M={sources:{},samplers:{},channels:{}};let C=!1;for(let b=0,P=y.childNodes.length;b<P;b++){const re=y.childNodes[b];if(re.nodeType!==1)continue;let ue;switch(re.nodeName){case"source":ue=re.getAttribute("id"),M.sources[ue]=be(re);break;case"sampler":ue=re.getAttribute("id"),M.samplers[ue]=d(re);break;case"channel":ue=re.getAttribute("target"),M.channels[ue]=A(re);break;case"animation":m(re),C=!0;break;default:console.log(re)}}C===!1&&(je.animations[y.getAttribute("id")||Ys.generateUUID()]=M)}function d(y){const M={inputs:{}};for(let C=0,b=y.childNodes.length;C<b;C++){const P=y.childNodes[C];if(P.nodeType===1&&P.nodeName==="input"){const re=a(P.getAttribute("source")),ue=P.getAttribute("semantic");M.inputs[ue]=re}}return M}function A(y){const M={};let b=y.getAttribute("target").split("/");const P=b.shift();let re=b.shift();const ue=re.indexOf("(")!==-1,qe=re.indexOf(".")!==-1;if(qe)b=re.split("."),re=b.shift(),M.member=b.shift();else if(ue){const Re=re.split("(");re=Re.shift();for(let He=0;He<Re.length;He++)Re[He]=parseInt(Re[He].replace(/\)/,""));M.indices=Re}return M.id=P,M.sid=re,M.arraySyntax=ue,M.memberSyntax=qe,M.sampler=a(y.getAttribute("source")),M}function D(y){const M=[],C=y.channels,b=y.samplers,P=y.sources;for(const re in C)if(C.hasOwnProperty(re)){const ue=C[re],qe=b[ue.sampler],Re=qe.inputs.INPUT,He=qe.inputs.OUTPUT,Je=P[Re],ve=P[He],Ze=R(ue,Je,ve);S(Ze,M)}return M}function E(y){return x(je.animations[y],D)}function R(y,M,C){const b=je.nodes[y.id],P=We(b.id),re=b.transforms[y.sid],ue=b.matrix.clone().transpose();let qe,Re,He,Je,ve,Ze;const Ye={};switch(re){case"matrix":for(He=0,Je=M.array.length;He<Je;He++)if(qe=M.array[He],Re=He*C.stride,Ye[qe]===void 0&&(Ye[qe]={}),y.arraySyntax===!0){const Ht=C.array[Re],Dt=y.indices[0]+4*y.indices[1];Ye[qe][Dt]=Ht}else for(ve=0,Ze=C.stride;ve<Ze;ve++)Ye[qe][ve]=C.array[Re+ve];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',re);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',re);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',re);break}const it=I(Ye,ue);return{name:P.uuid,keyframes:it}}function I(y,M){const C=[];for(const P in y)C.push({time:parseFloat(P),value:y[P]});C.sort(b);for(let P=0;P<16;P++)N(C,P,M.elements[P]);return C;function b(P,re){return P.time-re.time}}const L=new X,F=new X,v=new Wn;function S(y,M){const C=y.keyframes,b=y.name,P=[],re=[],ue=[],qe=[];for(let Re=0,He=C.length;Re<He;Re++){const Je=C[Re],ve=Je.time,Ze=Je.value;gn.fromArray(Ze).transpose(),gn.decompose(L,v,F),P.push(ve),re.push(L.x,L.y,L.z),ue.push(v.x,v.y,v.z,v.w),qe.push(F.x,F.y,F.z)}return re.length>0&&M.push(new pr(b+".position",P,re)),ue.length>0&&M.push(new lo(b+".quaternion",P,ue)),qe.length>0&&M.push(new pr(b+".scale",P,qe)),M}function N(y,M,C){let b,P=!0,re,ue;for(re=0,ue=y.length;re<ue;re++)b=y[re],b.value[M]===void 0?b.value[M]=null:P=!1;if(P===!0)for(re=0,ue=y.length;re<ue;re++)b=y[re],b.value[M]=C;else k(y,M)}function k(y,M){let C,b;for(let P=0,re=y.length;P<re;P++){const ue=y[P];if(ue.value[M]===null){if(C=z(y,P,M),b=K(y,P,M),C===null){ue.value[M]=b.value[M];continue}if(b===null){ue.value[M]=C.value[M];continue}Y(ue,C,b,M)}}}function z(y,M,C){for(;M>=0;){const b=y[M];if(b.value[C]!==null)return b;M--}return null}function K(y,M,C){for(;M<y.length;){const b=y[M];if(b.value[C]!==null)return b;M++}return null}function Y(y,M,C,b){if(C.time-M.time===0){y.value[b]=M.value[b];return}y.value[b]=(y.time-M.time)*(C.value[b]-M.value[b])/(C.time-M.time)+M.value[b]}function B(y){const M={name:y.getAttribute("id")||"default",start:parseFloat(y.getAttribute("start")||0),end:parseFloat(y.getAttribute("end")||0),animations:[]};for(let C=0,b=y.childNodes.length;C<b;C++){const P=y.childNodes[C];P.nodeType===1&&P.nodeName==="instance_animation"&&M.animations.push(a(P.getAttribute("url")))}je.clips[y.getAttribute("id")]=M}function G(y){const M=[],C=y.name,b=y.end-y.start||-1,P=y.animations;for(let re=0,ue=P.length;re<ue;re++){const qe=E(P[re]);for(let Re=0,He=qe.length;Re<He;Re++)M.push(qe[Re])}return new af(C,b,M)}function $(y){return x(je.clips[y],G)}function pe(y){const M={};for(let C=0,b=y.childNodes.length;C<b;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"skin":M.id=a(P.getAttribute("source")),M.skin=ge(P);break;case"morph":M.id=a(P.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}je.controllers[y.getAttribute("id")]=M}function ge(y){const M={sources:{}};for(let C=0,b=y.childNodes.length;C<b;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"bind_shape_matrix":M.bindShapeMatrix=r(P.textContent);break;case"source":const re=P.getAttribute("id");M.sources[re]=be(P);break;case"joints":M.joints=me(P);break;case"vertex_weights":M.vertexWeights=Le(P);break}}return M}function me(y){const M={inputs:{}};for(let C=0,b=y.childNodes.length;C<b;C++){const P=y.childNodes[C];if(P.nodeType===1&&P.nodeName==="input"){const re=P.getAttribute("semantic"),ue=a(P.getAttribute("source"));M.inputs[re]=ue}}return M}function Le(y){const M={inputs:{}};for(let C=0,b=y.childNodes.length;C<b;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"input":const re=P.getAttribute("semantic"),ue=a(P.getAttribute("source")),qe=parseInt(P.getAttribute("offset"));M.inputs[re]={id:ue,offset:qe};break;case"vcount":M.vcount=o(P.textContent);break;case"v":M.v=o(P.textContent);break}}return M}function Ee(y){const M={id:y.id},C=je.geometries[M.id];return y.skin!==void 0&&(M.skin=ke(y.skin),C.sources.skinIndices=M.skin.indices,C.sources.skinWeights=M.skin.weights),M}function ke(y){const C={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},b=y.sources,P=y.vertexWeights,re=P.vcount,ue=P.v,qe=P.inputs.JOINT.offset,Re=P.inputs.WEIGHT.offset,He=y.sources[y.joints.inputs.JOINT],Je=y.sources[y.joints.inputs.INV_BIND_MATRIX],ve=b[P.inputs.WEIGHT.id].array;let Ze=0,Ye,it,et;for(Ye=0,et=re.length;Ye<et;Ye++){const Dt=re[Ye],bt=[];for(it=0;it<Dt;it++){const Et=ue[Ze+qe],mi=ue[Ze+Re],Sn=ve[mi];bt.push({index:Et,weight:Sn}),Ze+=2}for(bt.sort(Ht),it=0;it<4;it++){const Et=bt[it];Et!==void 0?(C.indices.array.push(Et.index),C.weights.array.push(Et.weight)):(C.indices.array.push(0),C.weights.array.push(0))}}for(y.bindShapeMatrix?C.bindMatrix=new ct().fromArray(y.bindShapeMatrix).transpose():C.bindMatrix=new ct().identity(),Ye=0,et=He.array.length;Ye<et;Ye++){const Dt=He.array[Ye],bt=new ct().fromArray(Je.array,Ye*Je.stride).transpose();C.joints.push({name:Dt,boneInverse:bt})}return C;function Ht(Dt,bt){return bt.weight-Dt.weight}}function Ce(y){return x(je.controllers[y],Ee)}function q(y){const M={init_from:i(y,"init_from")[0].textContent};je.images[y.getAttribute("id")]=M}function te(y){return y.build!==void 0?y.build:y.init_from}function Se(y){const M=je.images[y];return M!==void 0?x(M,te):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",y),null)}function Qe(y){const M={};for(let C=0,b=y.childNodes.length;C<b;C++){const P=y.childNodes[C];P.nodeType===1&&P.nodeName==="profile_COMMON"&&(M.profile=Oe(P))}je.effects[y.getAttribute("id")]=M}function Oe(y){const M={surfaces:{},samplers:{}};for(let C=0,b=y.childNodes.length;C<b;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"newparam":Mt(P,M);break;case"technique":M.technique=Q(P);break;case"extra":M.extra=he(P);break}}return M}function Mt(y,M){const C=y.getAttribute("sid");for(let b=0,P=y.childNodes.length;b<P;b++){const re=y.childNodes[b];if(re.nodeType===1)switch(re.nodeName){case"surface":M.surfaces[C]=O(re);break;case"sampler2D":M.samplers[C]=H(re);break}}}function O(y){const M={};for(let C=0,b=y.childNodes.length;C<b;C++){const P=y.childNodes[C];P.nodeType===1&&P.nodeName==="init_from"&&(M.init_from=P.textContent)}return M}function H(y){const M={};for(let C=0,b=y.childNodes.length;C<b;C++){const P=y.childNodes[C];P.nodeType===1&&P.nodeName==="source"&&(M.source=P.textContent)}return M}function Q(y){const M={};for(let C=0,b=y.childNodes.length;C<b;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"constant":case"lambert":case"blinn":case"phong":M.type=P.nodeName,M.parameters=le(P);break;case"extra":M.extra=he(P);break}}return M}function le(y){const M={};for(let C=0,b=y.childNodes.length;C<b;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":M[P.nodeName]=se(P);break;case"transparent":M[P.nodeName]={opaque:P.hasAttribute("opaque")?P.getAttribute("opaque"):"A_ONE",data:se(P)};break}}return M}function se(y){const M={};for(let C=0,b=y.childNodes.length;C<b;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"color":M[P.nodeName]=r(P.textContent);break;case"float":M[P.nodeName]=parseFloat(P.textContent);break;case"texture":M[P.nodeName]={id:P.getAttribute("texture"),extra:ce(P)};break}}return M}function ce(y){const M={technique:{}};for(let C=0,b=y.childNodes.length;C<b;C++){const P=y.childNodes[C];P.nodeType===1&&P.nodeName==="extra"&&U(P,M)}return M}function U(y,M){for(let C=0,b=y.childNodes.length;C<b;C++){const P=y.childNodes[C];P.nodeType===1&&P.nodeName==="technique"&&_e(P,M)}}function _e(y,M){for(let C=0,b=y.childNodes.length;C<b;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":M.technique[P.nodeName]=parseFloat(P.textContent);break;case"wrapU":case"wrapV":P.textContent.toUpperCase()==="TRUE"?M.technique[P.nodeName]=1:P.textContent.toUpperCase()==="FALSE"?M.technique[P.nodeName]=0:M.technique[P.nodeName]=parseInt(P.textContent);break;case"bump":M[P.nodeName]=fe(P);break}}}function he(y){const M={};for(let C=0,b=y.childNodes.length;C<b;C++){const P=y.childNodes[C];P.nodeType===1&&P.nodeName==="technique"&&(M.technique=ae(P))}return M}function ae(y){const M={};for(let C=0,b=y.childNodes.length;C<b;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"double_sided":M[P.nodeName]=parseInt(P.textContent);break;case"bump":M[P.nodeName]=fe(P);break}}return M}function fe(y){const M={};for(let C=0,b=y.childNodes.length;C<b;C++){const P=y.childNodes[C];P.nodeType===1&&P.nodeName==="texture"&&(M[P.nodeName]={id:P.getAttribute("texture"),texcoord:P.getAttribute("texcoord"),extra:ce(P)})}return M}function T(y){return y}function g(y){return x(je.effects[y],T)}function V(y){const M={name:y.getAttribute("name")};for(let C=0,b=y.childNodes.length;C<b;C++){const P=y.childNodes[C];P.nodeType===1&&P.nodeName==="instance_effect"&&(M.url=a(P.getAttribute("url")))}je.materials[y.getAttribute("id")]=M}function ee(y){let M,C=y.slice((y.lastIndexOf(".")-1>>>0)+2);return C=C.toLowerCase(),C==="tga"?M=tn:M=pi,M}function oe(y){const M=g(y.url),C=M.profile.technique;let b;switch(C.type){case"phong":case"blinn":b=new qr;break;case"lambert":b=new rx;break;default:b=new _a;break}b.name=y.name||"";function P(Re,He=null){const Je=M.profile.samplers[Re.id];let ve=null;if(Je!==void 0){const Ze=M.profile.surfaces[Je.source];ve=Se(Ze.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),ve=Se(Re.id);if(ve!==null){const Ze=ee(ve);if(Ze!==void 0){const Ye=Ze.load(ve),it=Re.extra;if(it!==void 0&&it.technique!==void 0&&c(it.technique)===!1){const et=it.technique;Ye.wrapS=et.wrapU?ds:On,Ye.wrapT=et.wrapV?ds:On,Ye.offset.set(et.offsetU||0,et.offsetV||0),Ye.repeat.set(et.repeatU||1,et.repeatV||1)}else Ye.wrapS=ds,Ye.wrapT=ds;return He!==null&&(Ye.colorSpace=He),Ye}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",ve),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",Re.id),null}const re=C.parameters;for(const Re in re){const He=re[Re];switch(Re){case"diffuse":He.color&&b.color.fromArray(He.color),He.texture&&(b.map=P(He.texture,Wt));break;case"specular":He.color&&b.specular&&b.specular.fromArray(He.color),He.texture&&(b.specularMap=P(He.texture));break;case"bump":He.texture&&(b.normalMap=P(He.texture));break;case"ambient":He.texture&&(b.lightMap=P(He.texture,Wt));break;case"shininess":He.float&&b.shininess&&(b.shininess=He.float);break;case"emission":He.color&&b.emissive&&b.emissive.fromArray(He.color),He.texture&&(b.emissiveMap=P(He.texture,Wt));break}}vt.colorSpaceToWorking(b.color,Wt),b.specular&&vt.colorSpaceToWorking(b.specular,Wt),b.emissive&&vt.colorSpaceToWorking(b.emissive,Wt);let ue=re.transparent,qe=re.transparency;if(qe===void 0&&ue&&(qe={float:1}),ue===void 0&&qe&&(ue={opaque:"A_ONE",data:{color:[1,1,1,1]}}),ue&&qe)if(ue.data.texture)b.transparent=!0;else{const Re=ue.data.color;switch(ue.opaque){case"A_ONE":b.opacity=Re[3]*qe.float;break;case"RGB_ZERO":b.opacity=1-Re[0]*qe.float;break;case"A_ZERO":b.opacity=1-Re[3]*qe.float;break;case"RGB_ONE":b.opacity=Re[0]*qe.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',ue.opaque)}b.opacity<1&&(b.transparent=!0)}if(C.extra!==void 0&&C.extra.technique!==void 0){const Re=C.extra.technique;for(const He in Re){const Je=Re[He];switch(He){case"double_sided":b.side=Je===1?ri:Li;break;case"bump":b.normalMap=P(Je.texture),b.normalScale=new at(1,1);break}}}return b}function J(y){return x(je.materials[y],oe)}function Ie(y){const M={name:y.getAttribute("name")};for(let C=0,b=y.childNodes.length;C<b;C++){const P=y.childNodes[C];P.nodeType===1&&P.nodeName==="optics"&&(M.optics=Me(P))}je.cameras[y.getAttribute("id")]=M}function Me(y){for(let M=0;M<y.childNodes.length;M++){const C=y.childNodes[M];if(C.nodeName==="technique_common")return Be(C)}return{}}function Be(y){const M={};for(let C=0;C<y.childNodes.length;C++){const b=y.childNodes[C];switch(b.nodeName){case"perspective":case"orthographic":M.technique=b.nodeName,M.parameters=$e(b);break}}return M}function $e(y){const M={};for(let C=0;C<y.childNodes.length;C++){const b=y.childNodes[C];switch(b.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":M[b.nodeName]=parseFloat(b.textContent);break}}return M}function xe(y){let M;switch(y.optics.technique){case"perspective":M=new un(y.optics.parameters.yfov,y.optics.parameters.aspect_ratio,y.optics.parameters.znear,y.optics.parameters.zfar);break;case"orthographic":let C=y.optics.parameters.ymag,b=y.optics.parameters.xmag;const P=y.optics.parameters.aspect_ratio;b=b===void 0?C*P:b,C=C===void 0?b/P:C,b*=.5,C*=.5,M=new ka(-b,b,C,-C,y.optics.parameters.znear,y.optics.parameters.zfar);break;default:M=new un;break}return M.name=y.name||"",M}function Ae(y){const M=je.cameras[y];return M!==void 0?x(M,xe):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",y),null)}function Pe(y){let M={};for(let C=0,b=y.childNodes.length;C<b;C++){const P=y.childNodes[C];P.nodeType===1&&P.nodeName==="technique_common"&&(M=Ve(P))}je.lights[y.getAttribute("id")]=M}function Ve(y){const M={};for(let C=0,b=y.childNodes.length;C<b;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"directional":case"point":case"spot":case"ambient":M.technique=P.nodeName,M.parameters=Te(P)}}return M}function Te(y){const M={};for(let C=0,b=y.childNodes.length;C<b;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"color":const re=r(P.textContent);M.color=new ft().fromArray(re),vt.colorSpaceToWorking(M.color,Wt);break;case"falloff_angle":M.falloffAngle=parseFloat(P.textContent);break;case"quadratic_attenuation":const ue=parseFloat(P.textContent);M.distance=ue?Math.sqrt(1/ue):0;break}}return M}function lt(y){let M;switch(y.technique){case"directional":M=new wp;break;case"point":M=new Sx;break;case"spot":M=new Mx;break;case"ambient":M=new Rp;break}return y.parameters.color&&M.color.copy(y.parameters.color),y.parameters.distance&&(M.distance=y.parameters.distance),M}function W(y){const M=je.lights[y];return M!==void 0?x(M,lt):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",y),null)}function Fe(y){const M={name:y.getAttribute("name"),sources:{},vertices:{},primitives:[]},C=i(y,"mesh")[0];if(C!==void 0){for(let b=0;b<C.childNodes.length;b++){const P=C.childNodes[b];if(P.nodeType!==1)continue;const re=P.getAttribute("id");switch(P.nodeName){case"source":M.sources[re]=be(P);break;case"vertices":M.vertices=Ge(P);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",P.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":M.primitives.push(ye(P));break;default:console.log(P)}}je.geometries[y.getAttribute("id")]=M}}function be(y){const M={array:[],stride:3};for(let C=0;C<y.childNodes.length;C++){const b=y.childNodes[C];if(b.nodeType===1)switch(b.nodeName){case"float_array":M.array=r(b.textContent);break;case"Name_array":M.array=s(b.textContent);break;case"technique_common":const P=i(b,"accessor")[0];P!==void 0&&(M.stride=parseInt(P.getAttribute("stride")));break}}return M}function Ge(y){const M={};for(let C=0;C<y.childNodes.length;C++){const b=y.childNodes[C];b.nodeType===1&&(M[b.getAttribute("semantic")]=a(b.getAttribute("source")))}return M}function ye(y){const M={type:y.nodeName,material:y.getAttribute("material"),count:parseInt(y.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let C=0,b=y.childNodes.length;C<b;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"input":const re=a(P.getAttribute("source")),ue=P.getAttribute("semantic"),qe=parseInt(P.getAttribute("offset")),Re=parseInt(P.getAttribute("set")),He=Re>0?ue+Re:ue;M.inputs[He]={id:re,offset:qe},M.stride=Math.max(M.stride,qe+1),ue==="TEXCOORD"&&(M.hasUV=!0);break;case"vcount":M.vcount=o(P.textContent);break;case"p":M.p=o(P.textContent);break}}return M}function de(y){const M={};for(let C=0;C<y.length;C++){const b=y[C];M[b.type]===void 0&&(M[b.type]=[]),M[b.type].push(b)}return M}function we(y){let M=0;for(let C=0,b=y.length;C<b;C++)y[C].hasUV===!0&&M++;M>0&&M<y.length&&(y.uvsNeedsFix=!0)}function ot(y){const M={},C=y.sources,b=y.vertices,P=y.primitives;if(P.length===0)return{};const re=de(P);for(const ue in re){const qe=re[ue];we(qe),M[ue]=Nt(qe,C,b)}return M}function Nt(y,M,C){const b={},P={array:[],stride:0},re={array:[],stride:0},ue={array:[],stride:0},qe={array:[],stride:0},Re={array:[],stride:0},He={array:[],stride:4},Je={array:[],stride:4},ve=new en,Ze=[];let Ye=0;for(let it=0;it<y.length;it++){const et=y[it],Ht=et.inputs;let Dt=0;switch(et.type){case"lines":case"linestrips":Dt=et.count*2;break;case"triangles":Dt=et.count*3;break;case"polylist":for(let bt=0;bt<et.count;bt++){const Et=et.vcount[bt];switch(Et){case 3:Dt+=3;break;case 4:Dt+=6;break;default:Dt+=(Et-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknown primitive type:",et.type)}ve.addGroup(Ye,Dt,it),Ye+=Dt,et.material&&Ze.push(et.material);for(const bt in Ht){const Et=Ht[bt];switch(bt){case"VERTEX":for(const mi in C){const Sn=C[mi];switch(mi){case"POSITION":const ws=P.array.length;if(dt(et,M[Sn],Et.offset,P.array),P.stride=M[Sn].stride,M.skinWeights&&M.skinIndices&&(dt(et,M.skinIndices,Et.offset,He.array),dt(et,M.skinWeights,Et.offset,Je.array)),et.hasUV===!1&&y.uvsNeedsFix===!0){const Bp=(P.array.length-ws)/P.stride;for(let Ou=0;Ou<Bp;Ou++)ue.array.push(0,0)}break;case"NORMAL":dt(et,M[Sn],Et.offset,re.array),re.stride=M[Sn].stride;break;case"COLOR":dt(et,M[Sn],Et.offset,Re.array),Re.stride=M[Sn].stride;break;case"TEXCOORD":dt(et,M[Sn],Et.offset,ue.array),ue.stride=M[Sn].stride;break;case"TEXCOORD1":dt(et,M[Sn],Et.offset,qe.array),ue.stride=M[Sn].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',mi)}}break;case"NORMAL":dt(et,M[Et.id],Et.offset,re.array),re.stride=M[Et.id].stride;break;case"COLOR":dt(et,M[Et.id],Et.offset,Re.array,!0),Re.stride=M[Et.id].stride;break;case"TEXCOORD":dt(et,M[Et.id],Et.offset,ue.array),ue.stride=M[Et.id].stride;break;case"TEXCOORD1":dt(et,M[Et.id],Et.offset,qe.array),qe.stride=M[Et.id].stride;break}}}return P.array.length>0&&ve.setAttribute("position",new At(P.array,P.stride)),re.array.length>0&&ve.setAttribute("normal",new At(re.array,re.stride)),Re.array.length>0&&ve.setAttribute("color",new At(Re.array,Re.stride)),ue.array.length>0&&ve.setAttribute("uv",new At(ue.array,ue.stride)),qe.array.length>0&&ve.setAttribute("uv1",new At(qe.array,qe.stride)),He.array.length>0&&ve.setAttribute("skinIndex",new At(He.array,He.stride)),Je.array.length>0&&ve.setAttribute("skinWeight",new At(Je.array,Je.stride)),b.data=ve,b.type=y[0].type,b.materialKeys=Ze,b}function dt(y,M,C,b,P=!1){const re=y.p,ue=y.stride,qe=y.vcount;function Re(ve){let Ze=re[ve+C]*Je;const Ye=Ze+Je;for(;Ze<Ye;Ze++)b.push(He[Ze]);if(P){const it=b.length-Je-1;Qn.setRGB(b[it+0],b[it+1],b[it+2],Wt),b[it+0]=Qn.r,b[it+1]=Qn.g,b[it+2]=Qn.b}}const He=M.array,Je=M.stride;if(y.vcount!==void 0){let ve=0;for(let Ze=0,Ye=qe.length;Ze<Ye;Ze++){const it=qe[Ze];if(it===4){const et=ve+ue*0,Ht=ve+ue*1,Dt=ve+ue*2,bt=ve+ue*3;Re(et),Re(Ht),Re(bt),Re(Ht),Re(Dt),Re(bt)}else if(it===3){const et=ve+ue*0,Ht=ve+ue*1,Dt=ve+ue*2;Re(et),Re(Ht),Re(Dt)}else if(it>4)for(let et=1,Ht=it-2;et<=Ht;et++){const Dt=ve+ue*0,bt=ve+ue*et,Et=ve+ue*(et+1);Re(Dt),Re(bt),Re(Et)}ve+=ue*it}}else for(let ve=0,Ze=re.length;ve<Ze;ve+=ue)Re(ve)}function wn(y){return x(je.geometries[y],ot)}function Xn(y){const M={name:y.getAttribute("name")||"",joints:{},links:[]};for(let C=0;C<y.childNodes.length;C++){const b=y.childNodes[C];b.nodeType===1&&b.nodeName==="technique_common"&&br(b,M)}je.kinematicsModels[y.getAttribute("id")]=M}function Ga(y){return y.build!==void 0?y.build:y}function co(y){return x(je.kinematicsModels[y],Ga)}function br(y,M){for(let C=0;C<y.childNodes.length;C++){const b=y.childNodes[C];if(b.nodeType===1)switch(b.nodeName){case"joint":M.joints[b.getAttribute("sid")]=Wa(b);break;case"link":M.links.push(Er(b));break}}}function Wa(y){let M;for(let C=0;C<y.childNodes.length;C++){const b=y.childNodes[C];if(b.nodeType===1)switch(b.nodeName){case"prismatic":case"revolute":M=uo(b);break}}return M}function uo(y){const M={sid:y.getAttribute("sid"),name:y.getAttribute("name")||"",axis:new X,limits:{min:0,max:0},type:y.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let C=0;C<y.childNodes.length;C++){const b=y.childNodes[C];if(b.nodeType===1)switch(b.nodeName){case"axis":const P=r(b.textContent);M.axis.fromArray(P);break;case"limits":const re=b.getElementsByTagName("max")[0],ue=b.getElementsByTagName("min")[0];M.limits.max=parseFloat(re.textContent),M.limits.min=parseFloat(ue.textContent);break}}return M.limits.min>=M.limits.max&&(M.static=!0),M.middlePosition=(M.limits.min+M.limits.max)/2,M}function Er(y){const M={sid:y.getAttribute("sid"),name:y.getAttribute("name")||"",attachments:[],transforms:[]};for(let C=0;C<y.childNodes.length;C++){const b=y.childNodes[C];if(b.nodeType===1)switch(b.nodeName){case"attachment_full":M.attachments.push(di(b));break;case"matrix":case"translate":case"rotate":M.transforms.push(Es(b));break}}return M}function di(y){const M={joint:y.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let C=0;C<y.childNodes.length;C++){const b=y.childNodes[C];if(b.nodeType===1)switch(b.nodeName){case"link":M.links.push(Er(b));break;case"matrix":case"translate":case"rotate":M.transforms.push(Es(b));break}}return M}function Es(y){const M={type:y.nodeName},C=r(y.textContent);switch(M.type){case"matrix":M.obj=new ct,M.obj.fromArray(C).transpose();break;case"translate":M.obj=new X,M.obj.fromArray(C);break;case"rotate":M.obj=new X,M.obj.fromArray(C),M.angle=Ys.degToRad(C[3]);break}return M}function ho(y){const M={name:y.getAttribute("name")||"",rigidBodies:{}};for(let C=0;C<y.childNodes.length;C++){const b=y.childNodes[C];b.nodeType===1&&b.nodeName==="rigid_body"&&(M.rigidBodies[b.getAttribute("name")]={},fo(b,M.rigidBodies[b.getAttribute("name")]))}je.physicsModels[y.getAttribute("id")]=M}function fo(y,M){for(let C=0;C<y.childNodes.length;C++){const b=y.childNodes[C];b.nodeType===1&&b.nodeName==="technique_common"&&Ts(b,M)}}function Ts(y,M){for(let C=0;C<y.childNodes.length;C++){const b=y.childNodes[C];if(b.nodeType===1)switch(b.nodeName){case"inertia":M.inertia=r(b.textContent);break;case"mass":M.mass=r(b.textContent)[0];break}}}function po(y){const M={bindJointAxis:[]};for(let C=0;C<y.childNodes.length;C++){const b=y.childNodes[C];b.nodeType===1&&b.nodeName==="bind_joint_axis"&&M.bindJointAxis.push(As(b))}je.kinematicsScenes[a(y.getAttribute("url"))]=M}function As(y){const M={target:y.getAttribute("target").split("/").pop()};for(let C=0;C<y.childNodes.length;C++){const b=y.childNodes[C];if(b.nodeType===1&&b.nodeName==="axis"){const P=b.getElementsByTagName("param")[0];M.axis=P.textContent;const re=M.axis.split("inst_").pop().split("axis")[0];M.jointIndex=re.substring(0,re.length-1)}}return M}function mo(y){return y.build!==void 0?y.build:y}function go(y){return x(je.kinematicsScenes[y],mo)}function Xa(){const y=Object.keys(je.kinematicsModels)[0],M=Object.keys(je.kinematicsScenes)[0],C=Object.keys(je.visualScenes)[0];if(y===void 0||M===void 0)return;const b=co(y),P=go(M),re=pt(C),ue=P.bindJointAxis,qe={};for(let Je=0,ve=ue.length;Je<ve;Je++){const Ze=ue[Je],Ye=ze.querySelector('[sid="'+Ze.target+'"]');if(Ye){const it=Ye.parentElement;Re(Ze.jointIndex,it)}}function Re(Je,ve){const Ze=ve.getAttribute("name"),Ye=b.joints[Je];re.traverse(function(it){it.name===Ze&&(qe[Je]={object:it,transforms:qa(ve),joint:Ye,position:Ye.zeroPosition})})}const He=new ct;nn={joints:b&&b.joints,getJointValue:function(Je){const ve=qe[Je];if(ve)return ve.position;console.warn("THREE.ColladaLoader: Joint "+Je+" doesn't exist.")},setJointValue:function(Je,ve){const Ze=qe[Je];if(Ze){const Ye=Ze.joint;if(ve>Ye.limits.max||ve<Ye.limits.min)console.warn("THREE.ColladaLoader: Joint "+Je+" value "+ve+" outside of limits (min: "+Ye.limits.min+", max: "+Ye.limits.max+").");else if(Ye.static)console.warn("THREE.ColladaLoader: Joint "+Je+" is static.");else{const it=Ze.object,et=Ye.axis,Ht=Ze.transforms;gn.identity();for(let Dt=0;Dt<Ht.length;Dt++){const bt=Ht[Dt];if(bt.sid&&bt.sid.indexOf(Je)!==-1)switch(Ye.type){case"revolute":gn.multiply(He.makeRotationAxis(et,Ys.degToRad(ve)));break;case"prismatic":gn.multiply(He.makeTranslation(et.x*ve,et.y*ve,et.z*ve));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Ye.type);break}else switch(bt.type){case"matrix":gn.multiply(bt.obj);break;case"translate":gn.multiply(He.makeTranslation(bt.obj.x,bt.obj.y,bt.obj.z));break;case"scale":gn.scale(bt.obj);break;case"rotate":gn.multiply(He.makeRotationAxis(bt.obj,bt.angle));break}}it.matrix.copy(gn),it.matrix.decompose(it.position,it.quaternion,it.scale),qe[Je].position=ve}}else console.log("THREE.ColladaLoader: "+Je+" does not exist.")}}}function qa(y){const M=[],C=ze.querySelector('[id="'+y.id+'"]');for(let b=0;b<C.childNodes.length;b++){const P=C.childNodes[b];if(P.nodeType!==1)continue;let re,ue;switch(P.nodeName){case"matrix":re=r(P.textContent);const qe=new ct().fromArray(re).transpose();M.push({sid:P.getAttribute("sid"),type:P.nodeName,obj:qe});break;case"translate":case"scale":re=r(P.textContent),ue=new X().fromArray(re),M.push({sid:P.getAttribute("sid"),type:P.nodeName,obj:ue});break;case"rotate":re=r(P.textContent),ue=new X().fromArray(re);const Re=Ys.degToRad(re[3]);M.push({sid:P.getAttribute("sid"),type:P.nodeName,obj:ue,angle:Re});break}}return M}function ja(y){const M=y.getElementsByTagName("node");for(let C=0;C<M.length;C++){const b=M[C];b.hasAttribute("id")===!1&&b.setAttribute("id",l())}}const gn=new ct,Fi=new X;function Tr(y){const M={name:y.getAttribute("name")||"",type:y.getAttribute("type"),id:y.getAttribute("id"),sid:y.getAttribute("sid"),matrix:new ct,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let C=0;C<y.childNodes.length;C++){const b=y.childNodes[C];if(b.nodeType!==1)continue;let P;switch(b.nodeName){case"node":M.nodes.push(b.getAttribute("id")),Tr(b);break;case"instance_camera":M.instanceCameras.push(a(b.getAttribute("url")));break;case"instance_controller":M.instanceControllers.push(w(b));break;case"instance_light":M.instanceLights.push(a(b.getAttribute("url")));break;case"instance_geometry":M.instanceGeometries.push(w(b));break;case"instance_node":M.instanceNodes.push(a(b.getAttribute("url")));break;case"matrix":P=r(b.textContent),M.matrix.multiply(gn.fromArray(P).transpose()),M.transforms[b.getAttribute("sid")]=b.nodeName;break;case"translate":P=r(b.textContent),Fi.fromArray(P),M.matrix.multiply(gn.makeTranslation(Fi.x,Fi.y,Fi.z)),M.transforms[b.getAttribute("sid")]=b.nodeName;break;case"rotate":P=r(b.textContent);const re=Ys.degToRad(P[3]);M.matrix.multiply(gn.makeRotationAxis(Fi.fromArray(P),re)),M.transforms[b.getAttribute("sid")]=b.nodeName;break;case"scale":P=r(b.textContent),M.matrix.scale(Fi.fromArray(P)),M.transforms[b.getAttribute("sid")]=b.nodeName;break;case"extra":break;default:console.log(b)}}return Ne(M.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",M.id):je.nodes[M.id]=M,M}function w(y){const M={id:a(y.getAttribute("url")),materials:{},skeletons:[]};for(let C=0;C<y.childNodes.length;C++){const b=y.childNodes[C];switch(b.nodeName){case"bind_material":const P=b.getElementsByTagName("instance_material");for(let re=0;re<P.length;re++){const ue=P[re],qe=ue.getAttribute("symbol"),Re=ue.getAttribute("target");M.materials[qe]=a(Re)}break;case"skeleton":M.skeletons.push(a(b.textContent));break}}return M}function j(y,M){const C=[],b=[];let P,re,ue;for(P=0;P<y.length;P++){const He=y[P];let Je;if(Ne(He))Je=We(He),ie(Je,M,C);else if(tt(He)){const Ze=je.visualScenes[He].children;for(let Ye=0;Ye<Ze.length;Ye++){const it=Ze[Ye];if(it.type==="JOINT"){const et=We(it.id);ie(et,M,C)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",He)}for(P=0;P<M.length;P++)for(re=0;re<C.length;re++)if(ue=C[re],ue.bone.name===M[P].name){b[P]=ue,ue.processed=!0;break}for(P=0;P<C.length;P++)ue=C[P],ue.processed===!1&&(b.push(ue),ue.processed=!0);const qe=[],Re=[];for(P=0;P<b.length;P++)ue=b[P],qe.push(ue.bone),Re.push(ue.boneInverse);return new Pu(qe,Re)}function ie(y,M,C){y.traverse(function(b){if(b.isBone===!0){let P;for(let re=0;re<M.length;re++){const ue=M[re];if(ue.name===b.name){P=ue.boneInverse;break}}P===void 0&&(P=new ct),C.push({bone:b,boneInverse:P,processed:!1})}})}function ne(y){const M=[],C=y.matrix,b=y.nodes,P=y.type,re=y.instanceCameras,ue=y.instanceControllers,qe=y.instanceLights,Re=y.instanceGeometries,He=y.instanceNodes;for(let ve=0,Ze=b.length;ve<Ze;ve++)M.push(We(b[ve]));for(let ve=0,Ze=re.length;ve<Ze;ve++){const Ye=Ae(re[ve]);Ye!==null&&M.push(Ye.clone())}for(let ve=0,Ze=ue.length;ve<Ze;ve++){const Ye=ue[ve],it=Ce(Ye.id),et=wn(it.id),Ht=Xe(et,Ye.materials),Dt=Ye.skeletons,bt=it.skin.joints,Et=j(Dt,bt);for(let mi=0,Sn=Ht.length;mi<Sn;mi++){const ws=Ht[mi];ws.isSkinnedMesh&&(ws.bind(Et,it.skin.bindMatrix),ws.normalizeSkinWeights()),M.push(ws)}}for(let ve=0,Ze=qe.length;ve<Ze;ve++){const Ye=W(qe[ve]);Ye!==null&&M.push(Ye.clone())}for(let ve=0,Ze=Re.length;ve<Ze;ve++){const Ye=Re[ve],it=wn(Ye.id),et=Xe(it,Ye.materials);for(let Ht=0,Dt=et.length;Ht<Dt;Ht++)M.push(et[Ht])}for(let ve=0,Ze=He.length;ve<Ze;ve++)M.push(We(He[ve]).clone());let Je;if(b.length===0&&M.length===1)Je=M[0];else{Je=P==="JOINT"?new Mp:new Ks;for(let ve=0;ve<M.length;ve++)Je.add(M[ve])}return Je.name=P==="JOINT"?y.sid:y.name,Je.matrix.copy(C),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je}const Z=new _a({name:Ji.DEFAULT_MATERIAL_NAME,color:16711935});function De(y,M){const C=[];for(let b=0,P=y.length;b<P;b++){const re=M[y[b]];re===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",y[b]),C.push(Z)):C.push(J(re))}return C}function Xe(y,M){const C=[];for(const b in y){const P=y[b],re=De(P.materialKeys,M);if(re.length===0&&(b==="lines"||b==="linestrips"?re.push(new dr):re.push(new qr)),b==="lines"||b==="linestrips")for(let He=0,Je=re.length;He<Je;He++){const ve=re[He];if(ve.isMeshPhongMaterial===!0||ve.isMeshLambertMaterial===!0){const Ze=new dr;Ze.color.copy(ve.color),Ze.opacity=ve.opacity,Ze.transparent=ve.transparent,re[He]=Ze}}const ue=P.data.attributes.skinIndex!==void 0,qe=re.length===1?re[0]:re;let Re;switch(b){case"lines":Re=new Ua(P.data,qe);break;case"linestrips":Re=new yp(P.data,qe);break;case"triangles":case"polylist":ue?Re=new Z0(P.data,qe):Re=new fn(P.data,qe);break}C.push(Re)}return C}function Ne(y){return je.nodes[y]!==void 0}function We(y){return x(je.nodes[y],ne)}function Ke(y){const M={name:y.getAttribute("name"),children:[]};ja(y);const C=i(y,"node");for(let b=0;b<C.length;b++)M.children.push(Tr(C[b]));je.visualScenes[y.getAttribute("id")]=M}function st(y){const M=new Ks;M.name=y.name;const C=y.children;for(let b=0;b<C.length;b++){const P=C[b];M.add(We(P.id))}return M}function tt(y){return je.visualScenes[y]!==void 0}function pt(y){return x(je.visualScenes[y],st)}function wt(y){const M=i(y,"instance_visual_scene")[0];return pt(a(M.getAttribute("url")))}function kt(){const y=je.clips;if(c(y)===!0){if(c(je.animations)===!1){const M=[];for(const C in je.animations){const b=E(C);for(let P=0,re=b.length;P<re;P++)M.push(b[P])}Tt.push(new af("default",-1,M))}}else for(const M in y)Tt.push($(M))}function Vt(y){let M="";const C=[y];for(;C.length;){const b=C.shift();b.nodeType===Node.TEXT_NODE?M+=b.textContent:(M+=`
`,C.push(...b.childNodes))}return M.trim()}if(e.length===0)return{scene:new vp};const Rt=new DOMParser().parseFromString(e,"application/xml"),ze=i(Rt,"COLLADA")[0],St=Rt.getElementsByTagName("parsererror")[0];if(St!==void 0){const y=i(St,"div")[0];let M;return y?M=y.textContent:M=Vt(St),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,M),null}const yt=ze.getAttribute("version");console.debug("THREE.ColladaLoader: File version",yt);const rn=u(i(ze,"asset")[0]),pi=new Ap(this.manager);pi.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let tn;kf&&(tn=new kf(this.manager),tn.setPath(this.resourcePath||t));const Qn=new ft,Tt=[];let nn={},yn=0;const je={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};p(ze,"library_animations","animation",m),p(ze,"library_animation_clips","animation_clip",B),p(ze,"library_controllers","controller",pe),p(ze,"library_images","image",q),p(ze,"library_effects","effect",Qe),p(ze,"library_materials","material",V),p(ze,"library_cameras","camera",Ie),p(ze,"library_lights","light",Pe),p(ze,"library_geometries","geometry",Fe),p(ze,"library_nodes","node",Tr),p(ze,"library_visual_scenes","visual_scene",Ke),p(ze,"library_kinematics_models","kinematics_model",Xn),p(ze,"library_physics_models","physics_model",ho),p(ze,"scene","instance_kinematics_scene",po),_(je.animations,D),_(je.clips,G),_(je.controllers,Ee),_(je.images,te),_(je.effects,T),_(je.materials,oe),_(je.cameras,xe),_(je.lights,lt),_(je.geometries,ot),_(je.visualScenes,st),kt(),Xa();const Yt=wt(i(ze,"scene")[0]);return Yt.animations=Tt,rn.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),Yt.rotation.set(-Math.PI/2,0,0)),Yt.scale.multiplyScalar(rn.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),Tt},kinematics:nn,library:je,scene:Yt}}}const Vf=new X,zb=new An,Yo=new ct,Gi=new ct,$o=new Wn,Ko=new X(1,1,1),Zo=new X;class Ha extends Xt{constructor(...e){super(...e),this.urdfNode=null,this.urdfName=""}copy(e,t){return super.copy(e,t),this.urdfNode=e.urdfNode,this.urdfName=e.urdfName,this}}class Hb extends Ha{constructor(...e){super(...e),this.isURDFCollider=!0,this.type="URDFCollider"}}class Gb extends Ha{constructor(...e){super(...e),this.isURDFVisual=!0,this.type="URDFVisual"}}class Fp extends Ha{constructor(...e){super(...e),this.isURDFLink=!0,this.type="URDFLink"}}class Op extends Ha{get jointType(){return this._jointType}set jointType(e){if(this.jointType!==e)switch(this._jointType=e,this.matrixWorldNeedsUpdate=!0,e){case"fixed":this.jointValue=[];break;case"continuous":case"revolute":case"prismatic":this.jointValue=new Array(1).fill(0);break;case"planar":this.jointValue=new Array(3).fill(0),this.axis=new X(0,0,1);break;case"floating":this.jointValue=new Array(6).fill(0);break}}get angle(){return this.jointValue[0]}constructor(...e){super(...e),this.isURDFJoint=!0,this.type="URDFJoint",this.jointValue=null,this.jointType="fixed",this.axis=new X(1,0,0),this.limit={lower:0,upper:0},this.ignoreLimits=!1,this.origPosition=null,this.origQuaternion=null,this.mimicJoints=[]}copy(e,t){return super.copy(e,t),this.jointType=e.jointType,this.axis=e.axis.clone(),this.limit.lower=e.limit.lower,this.limit.upper=e.limit.upper,this.ignoreLimits=!1,this.jointValue=[...e.jointValue],this.origPosition=e.origPosition?e.origPosition.clone():null,this.origQuaternion=e.origQuaternion?e.origQuaternion.clone():null,this.mimicJoints=[...e.mimicJoints],this}setJointValue(...e){e=e.map(i=>i===null?null:parseFloat(i)),(!this.origPosition||!this.origQuaternion)&&(this.origPosition=this.position.clone(),this.origQuaternion=this.quaternion.clone());let t=!1;switch(this.mimicJoints.forEach(i=>{t=i.updateFromMimickedJoint(...e)||t}),this.jointType){case"fixed":return t;case"continuous":case"revolute":{let i=e[0];return i==null||i===this.jointValue[0]?t:(!this.ignoreLimits&&this.jointType==="revolute"&&(i=Math.min(this.limit.upper,i),i=Math.max(this.limit.lower,i)),this.quaternion.setFromAxisAngle(this.axis,i).premultiply(this.origQuaternion),this.jointValue[0]!==i?(this.jointValue[0]=i,this.matrixWorldNeedsUpdate=!0,!0):t)}case"prismatic":{let i=e[0];return i==null||i===this.jointValue[0]?t:(this.ignoreLimits||(i=Math.min(this.limit.upper,i),i=Math.max(this.limit.lower,i)),this.position.copy(this.origPosition),Vf.copy(this.axis).applyEuler(this.rotation),this.position.addScaledVector(Vf,i),this.jointValue[0]!==i?(this.jointValue[0]=i,this.matrixWorldNeedsUpdate=!0,!0):t)}case"floating":return this.jointValue.every((i,s)=>e[s]===i||e[s]===null)?t:(this.jointValue[0]=e[0]!==null?e[0]:this.jointValue[0],this.jointValue[1]=e[1]!==null?e[1]:this.jointValue[1],this.jointValue[2]=e[2]!==null?e[2]:this.jointValue[2],this.jointValue[3]=e[3]!==null?e[3]:this.jointValue[3],this.jointValue[4]=e[4]!==null?e[4]:this.jointValue[4],this.jointValue[5]=e[5]!==null?e[5]:this.jointValue[5],Gi.compose(this.origPosition,this.origQuaternion,Ko),$o.setFromEuler(zb.set(this.jointValue[3],this.jointValue[4],this.jointValue[5],"XYZ")),Zo.set(this.jointValue[0],this.jointValue[1],this.jointValue[2]),Yo.compose(Zo,$o,Ko),Gi.premultiply(Yo),this.position.setFromMatrixPosition(Gi),this.rotation.setFromRotationMatrix(Gi),this.matrixWorldNeedsUpdate=!0,!0);case"planar":return this.jointValue.every((i,s)=>e[s]===i||e[s]===null)?t:(this.jointValue[0]=e[0]!==null?e[0]:this.jointValue[0],this.jointValue[1]=e[1]!==null?e[1]:this.jointValue[1],this.jointValue[2]=e[2]!==null?e[2]:this.jointValue[2],Gi.compose(this.origPosition,this.origQuaternion,Ko),$o.setFromAxisAngle(this.axis,this.jointValue[2]),Zo.set(this.jointValue[0],this.jointValue[1],0),Yo.compose(Zo,$o,Ko),Gi.premultiply(Yo),this.position.setFromMatrixPosition(Gi),this.rotation.setFromRotationMatrix(Gi),this.matrixWorldNeedsUpdate=!0,!0)}return t}}class zf extends Op{constructor(...e){super(...e),this.type="URDFMimicJoint",this.mimicJoint=null,this.offset=0,this.multiplier=1}updateFromMimickedJoint(...e){const t=e.map(i=>i*this.multiplier+this.offset);return super.setJointValue(...t)}copy(e,t){return super.copy(e,t),this.mimicJoint=e.mimicJoint,this.offset=e.offset,this.multiplier=e.multiplier,this}}class Wb extends Fp{constructor(...e){super(...e),this.isURDFRobot=!0,this.urdfNode=null,this.urdfRobotNode=null,this.robotName=null,this.links=null,this.joints=null,this.colliders=null,this.visual=null,this.frames=null}copy(e,t){super.copy(e,t),this.urdfRobotNode=e.urdfRobotNode,this.robotName=e.robotName,this.links={},this.joints={},this.colliders={},this.visual={},this.traverse(i=>{i.isURDFJoint&&i.urdfName in e.joints&&(this.joints[i.urdfName]=i),i.isURDFLink&&i.urdfName in e.links&&(this.links[i.urdfName]=i),i.isURDFCollider&&i.urdfName in e.colliders&&(this.colliders[i.urdfName]=i),i.isURDFVisual&&i.urdfName in e.visual&&(this.visual[i.urdfName]=i)});for(const i in this.joints)this.joints[i].mimicJoints=this.joints[i].mimicJoints.map(s=>this.joints[s.name]);return this.frames={...this.colliders,...this.visual,...this.links,...this.joints},this}getFrame(e){return this.frames[e]}setJointValue(e,...t){const i=this.joints[e];return i?i.setJointValue(...t):!1}setJointValues(e){let t=!1;for(const i in e){const s=e[i];Array.isArray(s)?t=this.setJointValue(i,...s)||t:t=this.setJointValue(i,s)||t}return t}}const zl=new Wn,Hf=new An;function Ws(n){return n?n.trim().split(/\s+/g).map(e=>parseFloat(e)):[0,0,0]}function Gf(n,e,t=!1){t||n.rotation.set(0,0,0),Hf.set(e[0],e[1],e[2],"ZYX"),zl.setFromEuler(Hf),zl.multiply(n.quaternion),n.quaternion.copy(zl)}class Xb{constructor(e){this.manager=e||Tp,this.loadMeshCb=this.defaultMeshLoader.bind(this),this.parseVisual=!0,this.parseCollision=!1,this.packages="",this.workingPath="",this.fetchOptions={}}loadAsync(e){return new Promise((t,i)=>{this.load(e,t,null,i)})}load(e,t,i,s){const r=this.manager,o=Cp.extractUrlBase(e),a=this.manager.resolveURL(e);r.itemStart(a),fetch(a,this.fetchOptions).then(l=>{if(l.ok)return i&&i(null),l.text();throw new Error(`URDFLoader: Failed to load url '${a}' with error code ${l.status} : ${l.statusText}.`)}).then(l=>{const c=this.parse(l,this.workingPath||o);t(c),r.itemEnd(a)}).catch(l=>{s?s(l):console.error("URDFLoader: Error loading file.",l),r.itemError(a),r.itemEnd(a)})}parse(e,t=this.workingPath){const i=this.packages,s=this.loadMeshCb,r=this.parseVisual,o=this.parseCollision,a=this.manager,l={},c={},u={};function h(A){if(!/^package:\/\//.test(A))return t?t+A:A;const[D,E]=A.replace(/^package:\/\//,"").split(/\/(.+)/);if(typeof i=="string")return i.endsWith(D)?i+"/"+E:i+"/"+D+"/"+E;if(i instanceof Function)return i(D)+"/"+E;if(typeof i=="object")return D in i?i[D]+"/"+E:(console.error(`URDFLoader : ${D} not found in provided package list.`),null)}function f(A){let D;A instanceof Document?D=[...A.children]:A instanceof Element?D=[A]:D=[...new DOMParser().parseFromString(A,"text/xml").children];const E=D.filter(R=>R.nodeName==="robot").pop();return p(E)}function p(A){const D=[...A.children],E=D.filter(N=>N.nodeName.toLowerCase()==="link"),R=D.filter(N=>N.nodeName.toLowerCase()==="joint"),I=D.filter(N=>N.nodeName.toLowerCase()==="material"),L=new Wb;L.robotName=A.getAttribute("name"),L.urdfRobotNode=A,I.forEach(N=>{const k=N.getAttribute("name");u[k]=m(N)});const F={},v={};E.forEach(N=>{const k=N.getAttribute("name"),z=A.querySelector(`child[link="${k}"]`)===null;l[k]=x(N,F,v,z?L:null)}),R.forEach(N=>{const k=N.getAttribute("name");c[k]=_(N)}),L.joints=c,L.links=l,L.colliders=v,L.visual=F;const S=Object.values(c);return S.forEach(N=>{N instanceof zf&&c[N.mimicJoint].mimicJoints.push(N)}),S.forEach(N=>{const k=new Set,z=K=>{if(k.has(K))throw new Error("URDFLoader: Detected an infinite loop of mimic joints.");k.add(K),K.mimicJoints.forEach(Y=>{z(Y)})};z(N)}),L.frames={...v,...F,...l,...c},L}function _(A){const D=[...A.children],E=A.getAttribute("type");let R;const I=D.find(k=>k.nodeName.toLowerCase()==="mimic");I?(R=new zf,R.mimicJoint=I.getAttribute("joint"),R.multiplier=parseFloat(I.getAttribute("multiplier")||1),R.offset=parseFloat(I.getAttribute("offset")||0)):R=new Op,R.urdfNode=A,R.name=A.getAttribute("name"),R.urdfName=R.name,R.jointType=E;let L=null,F=null,v=[0,0,0],S=[0,0,0];D.forEach(k=>{const z=k.nodeName.toLowerCase();z==="origin"?(v=Ws(k.getAttribute("xyz")),S=Ws(k.getAttribute("rpy"))):z==="child"?F=l[k.getAttribute("link")]:z==="parent"?L=l[k.getAttribute("link")]:z==="limit"&&(R.limit.lower=parseFloat(k.getAttribute("lower")||R.limit.lower),R.limit.upper=parseFloat(k.getAttribute("upper")||R.limit.upper))}),L.add(R),R.add(F),Gf(R,S),R.position.set(v[0],v[1],v[2]);const N=D.filter(k=>k.nodeName.toLowerCase()==="axis")[0];if(N){const k=N.getAttribute("xyz").split(/\s+/g).map(z=>parseFloat(z));R.axis=new X(k[0],k[1],k[2]),R.axis.normalize()}return R}function x(A,D,E,R=null){R===null&&(R=new Fp);const I=[...A.children];return R.name=A.getAttribute("name"),R.urdfName=R.name,R.urdfNode=A,r&&I.filter(F=>F.nodeName.toLowerCase()==="visual").forEach(F=>{const v=d(F,u);if(R.add(v),F.hasAttribute("name")){const S=F.getAttribute("name");v.name=S,v.urdfName=S,D[S]=v}}),o&&I.filter(F=>F.nodeName.toLowerCase()==="collision").forEach(F=>{const v=d(F);if(R.add(v),F.hasAttribute("name")){const S=F.getAttribute("name");v.name=S,v.urdfName=S,E[S]=v}}),R}function m(A){const D=[...A.children],E=new qr;return E.name=A.getAttribute("name")||"",D.forEach(R=>{const I=R.nodeName.toLowerCase();if(I==="color"){const L=R.getAttribute("rgba").split(/\s/g).map(F=>parseFloat(F));E.color.setRGB(L[0],L[1],L[2]),E.opacity=L[3],E.transparent=L[3]<1,E.depthWrite=!E.transparent}else if(I==="texture"){const L=R.getAttribute("filename");if(L){const F=new Ap(a),v=h(L);E.map=F.load(v),E.map.colorSpace=Wt}}}),E}function d(A,D={}){const E=A.nodeName.toLowerCase()==="collision",R=[...A.children];let I=null;const L=R.filter(v=>v.nodeName.toLowerCase()==="material")[0];if(L){const v=L.getAttribute("name");v&&v in D?I=D[v]:I=m(L)}else I=new qr;const F=E?new Hb:new Gb;return F.urdfNode=A,R.forEach(v=>{const S=v.nodeName.toLowerCase();if(S==="geometry"){const N=v.children[0].nodeName.toLowerCase();if(N==="mesh"){const k=v.children[0].getAttribute("filename"),z=h(k);if(z!==null){const K=v.children[0].getAttribute("scale");if(K){const Y=Ws(K);F.scale.set(Y[0],Y[1],Y[2])}s(z,a,(Y,B)=>{B?console.error("URDFLoader: Error loading mesh.",B):Y&&(Y instanceof fn&&(Y.material=I),Y.position.set(0,0,0),Y.quaternion.identity(),F.add(Y))})}}else if(N==="box"){const k=new fn;k.geometry=new vr(1,1,1),k.material=I;const z=Ws(v.children[0].getAttribute("size"));k.scale.set(z[0],z[1],z[2]),F.add(k)}else if(N==="sphere"){const k=new fn;k.geometry=new Nu(1,30,30),k.material=I;const z=parseFloat(v.children[0].getAttribute("radius"))||0;k.scale.set(z,z,z),F.add(k)}else if(N==="cylinder"){const k=new fn;k.geometry=new Lu(1,1,1,30),k.material=I;const z=parseFloat(v.children[0].getAttribute("radius"))||0,K=parseFloat(v.children[0].getAttribute("length"))||0;k.scale.set(z,K,z),k.rotation.set(Math.PI/2,0,0),F.add(k)}}else if(S==="origin"){const N=Ws(v.getAttribute("xyz")),k=Ws(v.getAttribute("rpy"));F.position.set(N[0],N[1],N[2]),F.rotation.set(0,0,0),Gf(F,k)}}),F}return f(e)}defaultMeshLoader(e,t,i){/\.stl$/i.test(e)?new kb(t).load(e,r=>{const o=new fn(r,new qr);i(o)}):/\.dae$/i.test(e)?new Vb(t).load(e,r=>i(r.scene)):console.warn(`URDFLoader: Could not load model at ${e}.
No loader available`)}}const Wf=5,qb=mr({__name:"ThreeViewer",props:{selectedNode:{}},emits:["urdf-loaded","node-selected"],setup(n,{expose:e,emit:t}){const i=n,s=t,r=ln(null);let o,a,l,c,u,h=null,f=new Tx,p=new at,_=[],x=null;const m=()=>{if(!r.value)return;o=new vp,o.background=new ft(2503224),a=new un(75,r.value.clientWidth/r.value.clientHeight,.1,1e3),a.position.set(3,-3,3),a.up.set(0,0,1),a.lookAt(0,0,0),l=new Eb({antialias:!0}),l.setSize(r.value.clientWidth,r.value.clientHeight),l.setPixelRatio(window.devicePixelRatio),r.value.appendChild(l.domElement),c=new Ab(a,l.domElement),c.enableDamping=!0,c.dampingFactor=.05;const N=new Rp(16777215,.5);o.add(N);const k=new wp(16777215,.8);k.position.set(5,-5,10),o.add(k);const z=new Ax(10,10);z.rotation.x=Math.PI/2,o.add(z);const K=new wx(2);o.add(K),window.addEventListener("resize",d),l.domElement.addEventListener("mousedown",D),l.domElement.addEventListener("click",E),A()},d=()=>{r.value&&(a.aspect=r.value.clientWidth/r.value.clientHeight,a.updateProjectionMatrix(),l.setSize(r.value.clientWidth,r.value.clientHeight))},A=()=>{u=requestAnimationFrame(A),c.update(),l.render(o,a)},D=N=>{x={x:N.clientX,y:N.clientY}},E=N=>{if(!r.value||!h)return;if(x){const K=Math.abs(N.clientX-x.x),Y=Math.abs(N.clientY-x.y);if(K>Wf||Y>Wf){x=null;return}}x=null;const k=r.value.getBoundingClientRect();p.x=(N.clientX-k.left)/k.width*2-1,p.y=-((N.clientY-k.top)/k.height)*2+1,f.setFromCamera(p,a);const z=f.intersectObject(h,!0);if(z.length>0){const K=z[0];if(K&&K.object){const Y=K.object,B=R(Y);if(B){s("node-selected",B);return}}}s("node-selected",null)},R=N=>{let k=N;for(;k;){if(k.userData.urdfNode)return k.userData.urdfNode;k=k.parent}return null},I=()=>{_.forEach(N=>{o.remove(N)}),_=[]},L=N=>{if(I(),!N||!N.object3D)return;const k=N.object3D,z=(Y,B=[])=>(Y!==k&&(Y.isURDFLink||Y.isURDFJoint)||(Y.isMesh&&Y.geometry&&B.push(Y),Y.children&&Y.children.forEach(G=>{z(G,B)})),B);z(k).forEach(Y=>{const B=new ix(Y.geometry),G=new dr({color:65280}),$=new Ua(B,G);Y.getWorldPosition($.position),Y.getWorldQuaternion($.quaternion),Y.getWorldScale($.scale),o.add($),_.push($)})};xs(()=>i.selectedNode,N=>{L(N??null)});const F=N=>{const k=z=>{const K={name:z.name||"unnamed",type:z.isURDFRobot?"robot":z.isURDFLink?"link":z.isURDFJoint?"joint":"link",children:[],properties:{},object3D:z};return z.userData=z.userData||{},z.userData.urdfNode=K,z.isURDFJoint&&z.jointType&&(K.properties.type=z.jointType,z.axis&&(K.properties.axis=[z.axis.x,z.axis.y,z.axis.z])),z.position&&(K.properties.position=[z.position.x,z.position.y,z.position.z]),z.rotation&&(K.properties.rotation=[z.rotation.x,z.rotation.y,z.rotation.z]),z.children&&z.children.forEach(Y=>{(Y.isURDFLink||Y.isURDFJoint)&&K.children.push(k(Y))}),K};return k(N)};e({loadURDFContent:(N,k,z="")=>{h&&(o.remove(h),h=null);const K=new Xb;if(z&&(K.packages=B=>z),N.startsWith("http://")||N.startsWith("https://"))K.load(N,B=>{h=B,o.add(h);const G=F(h);s("urdf-loaded",G)},void 0,B=>{console.error("Error loading URDF:",B),alert(`Failed to load URDF: ${B}`)});else{h=K.parse(N),o.add(h);const B=F(h);s("urdf-loaded",B)}}});const S=()=>{u&&cancelAnimationFrame(u),window.removeEventListener("resize",d),l&&l.domElement&&(l.domElement.removeEventListener("mousedown",D),l.domElement.removeEventListener("click",E)),I(),l&&l.dispose(),r.value&&l&&r.value.removeChild(l.domElement)};return ro(()=>{m()}),Ca(()=>{S()}),(N,k)=>(Ot(),Gt("div",{ref_key:"canvasContainer",ref:r,class:"three-viewer"},null,512))}}),jb=gr(qb,[["__scopeId","data-v-8df76bbf"]]),Yb={class:"properties-panel"},$b={class:"panel-content"},Kb={key:0,class:"empty-state"},Zb={key:1,class:"properties-list"},Jb={class:"property-key"},Qb={class:"property-value"},eE=mr({__name:"PropertiesPanel",props:{node:{}},setup(n){const e=n,t=vs(()=>e.node!==null),i=vs(()=>{if(!e.node)return[];const s=[];if(s.push({key:"Name",value:e.node.name}),s.push({key:"Type",value:e.node.type}),e.node.object3D){const r=e.node.object3D,o=new X,a=new Wn,l=new An;r.getWorldPosition(o),r.getWorldQuaternion(a),l.setFromQuaternion(a),s.push({key:"Position",value:`[${o.x.toFixed(3)}, ${o.y.toFixed(3)}, ${o.z.toFixed(3)}]`}),s.push({key:"Rotation",value:`[${l.x.toFixed(3)}, ${l.y.toFixed(3)}, ${l.z.toFixed(3)}]`})}else e.node.properties&&(e.node.properties.position&&s.push({key:"Position",value:JSON.stringify(e.node.properties.position)}),e.node.properties.rotation&&s.push({key:"Rotation",value:JSON.stringify(e.node.properties.rotation)}));if(e.node.properties)for(const[r,o]of Object.entries(e.node.properties))r!=="position"&&r!=="rotation"&&s.push({key:r.charAt(0).toUpperCase()+r.slice(1),value:typeof o=="object"?JSON.stringify(o,null,2):String(o)});return s});return(s,r)=>(Ot(),Gt("aside",Yb,[r[1]||(r[1]=rt("div",{class:"panel-header"},[rt("h2",null,"Properties")],-1)),rt("div",$b,[t.value?(Ot(),Gt("div",Zb,[(Ot(!0),Gt(Ln,null,uu(i.value,o=>(Ot(),Gt("div",{key:o.key,class:"property-item"},[rt("div",Jb,Dn(o.key),1),rt("div",Qb,Dn(o.value),1)]))),128))])):(Ot(),Gt("div",Kb,[...r[0]||(r[0]=[rt("p",null,"No component selected",-1),rt("p",{class:"hint"},"Select a component from the hierarchy to view its properties",-1)])]))])]))}}),tE=gr(eE,[["__scopeId","data-v-e0232d0b"]]),nE={class:"console-title"},iE={class:"collapse-icon"},sE=["title"],rE={key:0,class:"no-logs"},oE={class:"log-time"},aE={class:"log-type"},lE={class:"log-message"},cE=mr({__name:"ConsolePanel",setup(n){const e=ln([]),t=ln(!0),i=ln(!0),s=ln(null);let r=0;const o={log:console.log,warn:console.warn,error:console.error,info:console.info},a=(x,m)=>{const d=m.map(A=>{if(typeof A=="object")try{return JSON.stringify(A,null,2)}catch{return String(A)}return String(A)}).join(" ");e.value.push({id:r++,timestamp:new Date,type:x,message:d}),i.value&&!t.value&&jl(()=>{s.value&&(s.value.scrollTop=s.value.scrollHeight)})},l=()=>{console.log=(...x)=>{o.log(...x),a("log",x)},console.warn=(...x)=>{o.warn(...x),a("warn",x)},console.error=(...x)=>{o.error(...x),a("error",x)},console.info=(...x)=>{o.info(...x),a("info",x)}},c=()=>{console.log=o.log,console.warn=o.warn,console.error=o.error,console.info=o.info},u=()=>{t.value=!t.value,!t.value&&i.value&&jl(()=>{s.value&&(s.value.scrollTop=s.value.scrollHeight)})},h=()=>{i.value=!i.value,i.value&&s.value&&(s.value.scrollTop=s.value.scrollHeight)},f=()=>{e.value=[]},p=x=>{const m=x.toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"}),d=x.getMilliseconds().toString().padStart(3,"0");return`${m}.${d}`},_=x=>`log-entry log-${x}`;return ro(()=>{l()}),Ca(()=>{c()}),(x,m)=>(Ot(),Gt("div",{class:ms(["console-panel",{collapsed:t.value}])},[rt("div",{class:"console-header",onClick:u},[rt("span",nE,[rt("span",iE,Dn(t.value?"▲":"▼"),1),pu(" Console Logs ("+Dn(e.value.length)+") ",1)]),rt("div",{class:"console-actions",onClick:m[0]||(m[0]=Yd(()=>{},["stop"]))},[rt("button",{class:ms(["console-btn",{active:i.value}]),onClick:h,title:i.value?"Disable auto-scroll":"Enable auto-scroll"},Dn(i.value?"📌":"📍")+" Auto-scroll ",11,sE),rt("button",{class:"console-btn",onClick:f,title:"Clear logs"}," 🗑️ Clear ")])]),t.value?Ms("",!0):(Ot(),Gt("div",{key:0,class:"console-content",ref_key:"logsContainer",ref:s},[e.value.length===0?(Ot(),Gt("div",rE," No console logs yet ")):Ms("",!0),(Ot(!0),Gt(Ln,null,uu(e.value,d=>(Ot(),Gt("div",{key:d.id,class:ms(_(d.type))},[rt("span",oE,Dn(p(d.timestamp)),1),rt("span",aE,Dn(d.type.toUpperCase()),1),rt("span",lE,Dn(d.message),1)],2))),128))],512))],2))}}),uE=gr(cE,[["__scopeId","data-v-64a5f72d"]]),hE={class:"urdf-editor"},fE={class:"toolbar"},dE={class:"toolbar-actions"},pE={class:"upload-dropdown"},mE={key:0,class:"dropdown-menu"},gE={class:"editor-container"},_E=mr({__name:"App",setup(n){const e=ln(null),t=ln(null),i=ln(!1),s=ln(!1),r=ln(""),o=ln(""),a=ln(null),l=L=>{e.value===L?e.value=null:e.value=L},c=L=>{e.value=L},u=L=>{t.value=L,e.value=null},h=()=>{i.value=!i.value},f=()=>{i.value=!1},p=L=>{L.target.closest(".upload-dropdown")||f()};ro(()=>{document.addEventListener("click",p)}),Ca(()=>{document.removeEventListener("click",p)});const _=()=>{f(),document.getElementById("file-upload")?.click()},x=()=>{f(),s.value=!0},m=()=>{s.value=!1,d()},d=()=>{r.value="",o.value=""},A=async()=>{if(r.value.trim())try{let L=o.value.trim();L||(L=r.value.substring(0,r.value.lastIndexOf("/")+1));const F=r.value.split("/"),v=F[F.length-1]||"loaded_from_url.urdf";a.value&&a.value.loadURDFContent(r.value,v,L),s.value=!1,d()}catch(L){console.error("Error loading URDF from URL:",L),alert(`Failed to load URDF from URL: ${L}`),s.value=!1,d()}},D=L=>{const F=L.target;if(F.files&&F.files[0]){const v=F.files[0],S=new FileReader;S.onload=N=>{const k=N.target?.result;if(a.value)try{a.value.loadURDFContent(k,v.name,"")}catch(z){console.error("Error loading URDF:",z),alert(`Failed to load URDF: ${z}`)}},S.readAsText(v)}},E=()=>{if(!t.value)return;const L=R(t.value),F=new Blob([L],{type:"application/xml"}),v=URL.createObjectURL(F),S=document.createElement("a");S.href=v,S.download=`${t.value.name}.urdf`;try{document.body?(S.style&&(S.style.display="none"),document.body.appendChild(S),S.click(),setTimeout(()=>{try{document.body&&document.body.contains(S)&&document.body.removeChild(S)}catch{}URL.revokeObjectURL(v)},100)):(S.click(),setTimeout(()=>{URL.revokeObjectURL(v)},100))}catch{S.click(),setTimeout(()=>{URL.revokeObjectURL(v)},100)}},R=L=>{let F=`<?xml version="1.0"?>
`;return F+=I(L,0),F},I=(L,F)=>{const v="  ".repeat(F);let S="";if(L.type==="robot"){S+=`${v}<robot name="${L.name}">
`;for(const N of L.children)S+=I(N,F+1);S+=`${v}</robot>
`}else if(L.type==="link"){S+=`${v}<link name="${L.name}">
`;for(const N of L.children)S+=I(N,F+1);S+=`${v}</link>
`}else if(L.type==="joint"){S+=`${v}<joint name="${L.name}" type="${L.properties?.type||"fixed"}">
`;for(const N of L.children)S+=I(N,F+1);S+=`${v}</joint>
`}return S};return(L,F)=>(Ot(),Gt("div",hE,[rt("header",fE,[F[4]||(F[4]=rt("h1",null,"URDF Editor",-1)),rt("div",dE,[rt("div",pE,[rt("button",{class:"btn upload-btn",onClick:h},[...F[3]||(F[3]=[pu(" Upload URDF ",-1),rt("span",{class:"dropdown-arrow"},"▼",-1)])]),i.value?(Ot(),Gt("div",mE,[rt("button",{onClick:_,class:"dropdown-item"}," 📁 From Local File "),rt("button",{onClick:x,class:"dropdown-item"}," 🌐 From URL ")])):Ms("",!0)]),rt("input",{id:"file-upload",type:"file",accept:".urdf,.xml,application/xml,text/xml",onChange:D,style:{display:"none"}},null,32),rt("button",{class:"btn",disabled:!0,onClick:E},"Download URDF")])]),rt("div",gE,[Fn(w_,{root:t.value,selected:e.value,onSelect:l},null,8,["root","selected"]),Fn(jb,{ref_key:"threeViewerRef",ref:a,class:"main-viewer","selected-node":e.value,onUrdfLoaded:u,onNodeSelected:c},null,8,["selected-node"]),Fn(tE,{node:e.value},null,8,["node"])]),s.value?(Ot(),Gt("div",{key:0,class:"modal-overlay",onClick:m},[rt("div",{class:"modal-dialog",onClick:F[2]||(F[2]=Yd(()=>{},["stop"]))},[F[5]||(F[5]=rt("h3",null,"Load URDF from URL",-1)),Hu(rt("input",{"onUpdate:modelValue":F[0]||(F[0]=v=>r.value=v),type:"text",placeholder:"Enter URDF file URL",class:"url-input",onKeyup:_h(A,["enter"])},null,544),[[gh,r.value]]),Hu(rt("input",{"onUpdate:modelValue":F[1]||(F[1]=v=>o.value=v),type:"text",placeholder:"Package path URL (optional - defaults to URDF folder)",class:"url-input",onKeyup:_h(A,["enter"])},null,544),[[gh,o.value]]),F[6]||(F[6]=rt("div",{class:"modal-help-text"}," Package path is used to resolve package:// mesh references. Leave empty to use the URDF's folder as the default. ",-1)),rt("div",{class:"modal-actions"},[rt("button",{class:"btn btn-secondary",onClick:m},"Cancel"),rt("button",{class:"btn",onClick:A},"Load")])])])):Ms("",!0),Fn(uE)]))}}),xE=gr(_E,[["__scopeId","data-v-0494bf33"]]),vE=l_(xE);vE.mount("#app");
