(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Kc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ot={},Js=[],ci=()=>{},Xf=()=>!1,ba=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Jc=n=>n.startsWith("onUpdate:"),_n=Object.assign,Zc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Vp=Object.prototype.hasOwnProperty,Dt=(n,e)=>Vp.call(n,e),ht=Array.isArray,Zs=n=>Sa(n)==="[object Map]",qf=n=>Sa(n)==="[object Set]",ut=n=>typeof n=="function",jt=n=>typeof n=="string",is=n=>typeof n=="symbol",Ht=n=>n!==null&&typeof n=="object",jf=n=>(Ht(n)||ut(n))&&ut(n.then)&&ut(n.catch),Yf=Object.prototype.toString,Sa=n=>Yf.call(n),zp=n=>Sa(n).slice(8,-1),$f=n=>Sa(n)==="[object Object]",Qc=n=>jt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Br=Kc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ea=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Hp=/-\w/g,Wn=Ea(n=>n.replace(Hp,e=>e.slice(1).toUpperCase())),Gp=/\B([A-Z])/g,ss=Ea(n=>n.replace(Gp,"-$1").toLowerCase()),Ta=Ea(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ka=Ea(n=>n?`on${Ta(n)}`:""),es=(n,e)=>!Object.is(n,e),Qo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Kf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},eu=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Bu;const Aa=()=>Bu||(Bu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function tu(n){if(ht(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=jt(i)?jp(i):tu(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(jt(n)||Ht(n))return n}const Wp=/;(?![^(]*\))/g,Xp=/:([^]+)/,qp=/\/\*[^]*?\*\//g;function jp(n){const e={};return n.replace(qp,"").split(Wp).forEach(t=>{if(t){const i=t.split(Xp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function cn(n){let e="";if(jt(n))e=n;else if(ht(n))for(let t=0;t<n.length;t++){const i=cn(n[t]);i&&(e+=i+" ")}else if(Ht(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Yp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$p=Kc(Yp);function Jf(n){return!!n||n===""}const Zf=n=>!!(n&&n.__v_isRef===!0),un=n=>jt(n)?n:n==null?"":ht(n)||Ht(n)&&(n.toString===Yf||!ut(n.toString))?Zf(n)?un(n.value):JSON.stringify(n,Qf,2):String(n),Qf=(n,e)=>Zf(e)?Qf(n,e.value):Zs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Ja(i,r)+" =>"]=s,t),{})}:qf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ja(t))}:is(e)?Ja(e):Ht(e)&&!ht(e)&&!$f(e)?String(e):e,Ja=(n,e="")=>{var t;return is(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let An;class Kp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=An,!e&&An&&(this.index=(An.scopes||(An.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=An;try{return An=this,e()}finally{An=t}}}on(){++this._on===1&&(this.prevScope=An,An=this)}off(){this._on>0&&--this._on===0&&(An=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Jp(){return An}let Bt;const Za=new WeakSet;class ed{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,An&&An.active&&An.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Za.has(this)&&(Za.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||nd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ku(this),id(this);const e=Bt,t=Jn;Bt=this,Jn=!0;try{return this.fn()}finally{sd(this),Bt=e,Jn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)su(e);this.deps=this.depsTail=void 0,ku(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Za.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Wl(this)&&this.run()}get dirty(){return Wl(this)}}let td=0,kr,Vr;function nd(n,e=!1){if(n.flags|=8,e){n.next=Vr,Vr=n;return}n.next=kr,kr=n}function nu(){td++}function iu(){if(--td>0)return;if(Vr){let e=Vr;for(Vr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;kr;){let e=kr;for(kr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function id(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function sd(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),su(i),Zp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Wl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(rd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function rd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Yr)||(n.globalVersion=Yr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Wl(n))))return;n.flags|=2;const e=n.dep,t=Bt,i=Jn;Bt=n,Jn=!0;try{id(n);const s=n.fn(n._value);(e.version===0||es(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Bt=t,Jn=i,sd(n),n.flags&=-3}}function su(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)su(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Zp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Jn=!0;const od=[];function Li(){od.push(Jn),Jn=!1}function Ni(){const n=od.pop();Jn=n===void 0?!0:n}function ku(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Bt;Bt=void 0;try{e()}finally{Bt=t}}}let Yr=0;class Qp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ru{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Bt||!Jn||Bt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Bt)t=this.activeLink=new Qp(Bt,this),Bt.deps?(t.prevDep=Bt.depsTail,Bt.depsTail.nextDep=t,Bt.depsTail=t):Bt.deps=Bt.depsTail=t,ad(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Bt.depsTail,t.nextDep=void 0,Bt.depsTail.nextDep=t,Bt.depsTail=t,Bt.deps===t&&(Bt.deps=i)}return t}trigger(e){this.version++,Yr++,this.notify(e)}notify(e){nu();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{iu()}}}function ad(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)ad(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Xl=new WeakMap,vs=Symbol(""),ql=Symbol(""),$r=Symbol("");function hn(n,e,t){if(Jn&&Bt){let i=Xl.get(n);i||Xl.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new ru),s.map=i,s.key=t),s.track()}}function Ai(n,e,t,i,s,r){const o=Xl.get(n);if(!o){Yr++;return}const a=l=>{l&&l.trigger()};if(nu(),e==="clear")o.forEach(a);else{const l=ht(n),c=l&&Qc(t);if(l&&t==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===$r||!is(f)&&f>=u)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get($r)),e){case"add":l?c&&a(o.get("length")):(a(o.get(vs)),Zs(n)&&a(o.get(ql)));break;case"delete":l||(a(o.get(vs)),Zs(n)&&a(o.get(ql)));break;case"set":Zs(n)&&a(o.get(vs));break}}iu()}function Rs(n){const e=Pt(n);return e===n?e:(hn(e,"iterate",$r),Gn(n)?e:e.map(Zn))}function wa(n){return hn(n=Pt(n),"iterate",$r),n}function Yi(n,e){return Ii(n)?Ms(n)?rr(Zn(e)):rr(e):Zn(e)}const em={__proto__:null,[Symbol.iterator](){return Qa(this,Symbol.iterator,n=>Yi(this,n))},concat(...n){return Rs(this).concat(...n.map(e=>ht(e)?Rs(e):e))},entries(){return Qa(this,"entries",n=>(n[1]=Yi(this,n[1]),n))},every(n,e){return xi(this,"every",n,e,void 0,arguments)},filter(n,e){return xi(this,"filter",n,e,t=>t.map(i=>Yi(this,i)),arguments)},find(n,e){return xi(this,"find",n,e,t=>Yi(this,t),arguments)},findIndex(n,e){return xi(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return xi(this,"findLast",n,e,t=>Yi(this,t),arguments)},findLastIndex(n,e){return xi(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return xi(this,"forEach",n,e,void 0,arguments)},includes(...n){return el(this,"includes",n)},indexOf(...n){return el(this,"indexOf",n)},join(n){return Rs(this).join(n)},lastIndexOf(...n){return el(this,"lastIndexOf",n)},map(n,e){return xi(this,"map",n,e,void 0,arguments)},pop(){return Ar(this,"pop")},push(...n){return Ar(this,"push",n)},reduce(n,...e){return Vu(this,"reduce",n,e)},reduceRight(n,...e){return Vu(this,"reduceRight",n,e)},shift(){return Ar(this,"shift")},some(n,e){return xi(this,"some",n,e,void 0,arguments)},splice(...n){return Ar(this,"splice",n)},toReversed(){return Rs(this).toReversed()},toSorted(n){return Rs(this).toSorted(n)},toSpliced(...n){return Rs(this).toSpliced(...n)},unshift(...n){return Ar(this,"unshift",n)},values(){return Qa(this,"values",n=>Yi(this,n))}};function Qa(n,e,t){const i=wa(n),s=i[e]();return i!==n&&!Gn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const tm=Array.prototype;function xi(n,e,t,i,s,r){const o=wa(n),a=o!==n&&!Gn(n),l=o[e];if(l!==tm[e]){const h=l.apply(n,r);return a?Zn(h):h}let c=t;o!==n&&(a?c=function(h,f){return t.call(this,Yi(n,h),f,n)}:t.length>2&&(c=function(h,f){return t.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Vu(n,e,t,i){const s=wa(n);let r=t;return s!==n&&(Gn(n)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,n)}):r=function(o,a,l){return t.call(this,o,Yi(n,a),l,n)}),s[e](r,...i)}function el(n,e,t){const i=Pt(n);hn(i,"iterate",$r);const s=i[e](...t);return(s===-1||s===!1)&&lu(t[0])?(t[0]=Pt(t[0]),i[e](...t)):s}function Ar(n,e,t=[]){Li(),nu();const i=Pt(n)[e].apply(n,t);return iu(),Ni(),i}const nm=Kc("__proto__,__v_isRef,__isVue"),ld=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(is));function im(n){is(n)||(n=String(n));const e=Pt(this);return hn(e,"has",n),e.hasOwnProperty(n)}class cd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?dm:dd:r?fd:hd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ht(e);if(!s){let l;if(o&&(l=em[t]))return l;if(t==="hasOwnProperty")return im}const a=Reflect.get(e,t,mn(e)?e:i);if((is(t)?ld.has(t):nm(t))||(s||hn(e,"get",t),r))return a;if(mn(a)){const l=o&&Qc(t)?a:a.value;return s&&Ht(l)?Yl(l):l}return Ht(a)?s?Yl(a):Ra(a):a}}class ud extends cd{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=ht(e)&&Qc(t);if(!this._isShallow){const c=Ii(r);if(!Gn(i)&&!Ii(i)&&(r=Pt(r),i=Pt(i)),!o&&mn(r)&&!mn(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:Dt(e,t),l=Reflect.set(e,t,i,mn(e)?e:s);return e===Pt(s)&&(a?es(i,r)&&Ai(e,"set",t,i):Ai(e,"add",t,i)),l}deleteProperty(e,t){const i=Dt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Ai(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!is(t)||!ld.has(t))&&hn(e,"has",t),i}ownKeys(e){return hn(e,"iterate",ht(e)?"length":vs),Reflect.ownKeys(e)}}class sm extends cd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const rm=new ud,om=new sm,am=new ud(!0);const jl=n=>n,xo=n=>Reflect.getPrototypeOf(n);function lm(n,e,t){return function(...i){const s=this.__v_raw,r=Pt(s),o=Zs(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?jl:e?rr:Zn;return!e&&hn(r,"iterate",l?ql:vs),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function vo(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function cm(n,e){const t={get(s){const r=this.__v_raw,o=Pt(r),a=Pt(s);n||(es(s,a)&&hn(o,"get",s),hn(o,"get",a));const{has:l}=xo(o),c=e?jl:n?rr:Zn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&hn(Pt(s),"iterate",vs),s.size},has(s){const r=this.__v_raw,o=Pt(r),a=Pt(s);return n||(es(s,a)&&hn(o,"has",s),hn(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=Pt(a),c=e?jl:n?rr:Zn;return!n&&hn(l,"iterate",vs),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return _n(t,n?{add:vo("add"),set:vo("set"),delete:vo("delete"),clear:vo("clear")}:{add(s){!e&&!Gn(s)&&!Ii(s)&&(s=Pt(s));const r=Pt(this);return xo(r).has.call(r,s)||(r.add(s),Ai(r,"add",s,s)),this},set(s,r){!e&&!Gn(r)&&!Ii(r)&&(r=Pt(r));const o=Pt(this),{has:a,get:l}=xo(o);let c=a.call(o,s);c||(s=Pt(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?es(r,u)&&Ai(o,"set",s,r):Ai(o,"add",s,r),this},delete(s){const r=Pt(this),{has:o,get:a}=xo(r);let l=o.call(r,s);l||(s=Pt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Ai(r,"delete",s,void 0),c},clear(){const s=Pt(this),r=s.size!==0,o=s.clear();return r&&Ai(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=lm(s,n,e)}),t}function ou(n,e){const t=cm(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(Dt(t,s)&&s in i?t:i,s,r)}const um={get:ou(!1,!1)},hm={get:ou(!1,!0)},fm={get:ou(!0,!1)};const hd=new WeakMap,fd=new WeakMap,dd=new WeakMap,dm=new WeakMap;function pm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function mm(n){return n.__v_skip||!Object.isExtensible(n)?0:pm(zp(n))}function Ra(n){return Ii(n)?n:au(n,!1,rm,um,hd)}function gm(n){return au(n,!1,am,hm,fd)}function Yl(n){return au(n,!0,om,fm,dd)}function au(n,e,t,i,s){if(!Ht(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=mm(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function Ms(n){return Ii(n)?Ms(n.__v_raw):!!(n&&n.__v_isReactive)}function Ii(n){return!!(n&&n.__v_isReadonly)}function Gn(n){return!!(n&&n.__v_isShallow)}function lu(n){return n?!!n.__v_raw:!1}function Pt(n){const e=n&&n.__v_raw;return e?Pt(e):n}function _m(n){return!Dt(n,"__v_skip")&&Object.isExtensible(n)&&Kf(n,"__v_skip",!0),n}const Zn=n=>Ht(n)?Ra(n):n,rr=n=>Ht(n)?Yl(n):n;function mn(n){return n?n.__v_isRef===!0:!1}function sn(n){return xm(n,!1)}function xm(n,e){return mn(n)?n:new vm(n,e)}class vm{constructor(e,t){this.dep=new ru,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Pt(e),this._value=t?e:Zn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Gn(e)||Ii(e);e=i?e:Pt(e),es(e,t)&&(this._rawValue=e,this._value=i?e:Zn(e),this.dep.trigger())}}function Mm(n){return mn(n)?n.value:n}const ym={get:(n,e,t)=>e==="__v_raw"?n:Mm(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return mn(s)&&!mn(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function pd(n){return Ms(n)?n:new Proxy(n,ym)}class bm{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new ru(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Yr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Bt!==this)return nd(this,!0),!0}get value(){const e=this.dep.track();return rd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Sm(n,e,t=!1){let i,s;return ut(n)?i=n:(i=n.get,s=n.set),new bm(i,s,t)}const Mo={},ca=new WeakMap;let ps;function Em(n,e=!1,t=ps){if(t){let i=ca.get(t);i||ca.set(t,i=[]),i.push(n)}}function Tm(n,e,t=Ot){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=T=>s?T:Gn(T)||s===!1||s===0?wi(T,1):wi(T);let u,h,f,d,_=!1,x=!1;if(mn(n)?(h=()=>n.value,_=Gn(n)):Ms(n)?(h=()=>c(n),_=!0):ht(n)?(x=!0,_=n.some(T=>Ms(T)||Gn(T)),h=()=>n.map(T=>{if(mn(T))return T.value;if(Ms(T))return c(T);if(ut(T))return l?l(T,2):T()})):ut(n)?e?h=l?()=>l(n,2):n:h=()=>{if(f){Li();try{f()}finally{Ni()}}const T=ps;ps=u;try{return l?l(n,3,[d]):n(d)}finally{ps=T}}:h=ci,e&&s){const T=h,R=s===!0?1/0:s;h=()=>wi(T(),R)}const m=Jp(),p=()=>{u.stop(),m&&m.active&&Zc(m.effects,u)};if(r&&e){const T=e;e=(...R)=>{T(...R),p()}}let A=x?new Array(n.length).fill(Mo):Mo;const D=T=>{if(!(!(u.flags&1)||!u.dirty&&!T))if(e){const R=u.run();if(s||_||(x?R.some((N,L)=>es(N,A[L])):es(R,A))){f&&f();const N=ps;ps=u;try{const L=[R,A===Mo?void 0:x&&A[0]===Mo?[]:A,d];A=R,l?l(e,3,L):e(...L)}finally{ps=N}}}else u.run()};return a&&a(D),u=new ed(h),u.scheduler=o?()=>o(D,!1):D,d=T=>Em(T,!1,u),f=u.onStop=()=>{const T=ca.get(u);if(T){if(l)l(T,4);else for(const R of T)R();ca.delete(u)}},e?i?D(!0):A=u.run():o?o(D.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function wi(n,e=1/0,t){if(e<=0||!Ht(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,mn(n))wi(n.value,e,t);else if(ht(n))for(let i=0;i<n.length;i++)wi(n[i],e,t);else if(qf(n)||Zs(n))n.forEach(i=>{wi(i,e,t)});else if($f(n)){for(const i in n)wi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&wi(n[i],e,t)}return n}function ro(n,e,t,i){try{return i?n(...i):n()}catch(s){Ca(s,e,t)}}function fi(n,e,t,i){if(ut(n)){const s=ro(n,e,t,i);return s&&jf(s)&&s.catch(r=>{Ca(r,e,t)}),s}if(ht(n)){const s=[];for(let r=0;r<n.length;r++)s.push(fi(n[r],e,t,i));return s}}function Ca(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ot;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){Li(),ro(r,null,10,[n,l,c]),Ni();return}}Am(n,t,s,i,o)}function Am(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const bn=[];let ii=-1;const Qs=[];let $i=null,Xs=0;const md=Promise.resolve();let ua=null;function $l(n){const e=ua||md;return n?e.then(this?n.bind(this):n):e}function wm(n){let e=ii+1,t=bn.length;for(;e<t;){const i=e+t>>>1,s=bn[i],r=Kr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function cu(n){if(!(n.flags&1)){const e=Kr(n),t=bn[bn.length-1];!t||!(n.flags&2)&&e>=Kr(t)?bn.push(n):bn.splice(wm(e),0,n),n.flags|=1,gd()}}function gd(){ua||(ua=md.then(xd))}function Rm(n){ht(n)?Qs.push(...n):$i&&n.id===-1?$i.splice(Xs+1,0,n):n.flags&1||(Qs.push(n),n.flags|=1),gd()}function zu(n,e,t=ii+1){for(;t<bn.length;t++){const i=bn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;bn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function _d(n){if(Qs.length){const e=[...new Set(Qs)].sort((t,i)=>Kr(t)-Kr(i));if(Qs.length=0,$i){$i.push(...e);return}for($i=e,Xs=0;Xs<$i.length;Xs++){const t=$i[Xs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}$i=null,Xs=0}}const Kr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function xd(n){try{for(ii=0;ii<bn.length;ii++){const e=bn[ii];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ro(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ii<bn.length;ii++){const e=bn[ii];e&&(e.flags&=-2)}ii=-1,bn.length=0,_d(),ua=null,(bn.length||Qs.length)&&xd()}}let Un=null,vd=null;function ha(n){const e=Un;return Un=n,vd=n&&n.type.__scopeId||null,e}function Cm(n,e=Un,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Qu(-1);const r=ha(e);let o;try{o=n(...s)}finally{ha(r),i._d&&Qu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Hu(n,e){if(Un===null)return n;const t=Ia(Un),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=Ot]=e[s];r&&(ut(r)&&(r={mounted:r,updated:r}),r.deep&&wi(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function os(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Li(),fi(l,t,8,[n.el,a,n,e]),Ni())}}function Pm(n,e){if(dn){let t=dn.provides;const i=dn.parent&&dn.parent.provides;i===t&&(t=dn.provides=Object.create(i)),t[n]=e}}function ea(n,e,t=!1){const i=Pg();if(i||er){let s=er?er._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ut(e)?e.call(i&&i.proxy):e}}const Dm=Symbol.for("v-scx"),Lm=()=>ea(Dm);function Ci(n,e,t){return Md(n,e,t)}function Md(n,e,t=Ot){const{immediate:i,deep:s,flush:r,once:o}=t,a=_n({},t),l=e&&i||!e&&r!=="post";let c;if(Zr){if(r==="sync"){const d=Lm();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=ci,d.resume=ci,d.pause=ci,d}}const u=dn;a.call=(d,_,x)=>fi(d,u,_,x);let h=!1;r==="post"?a.scheduler=d=>{Nn(d,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(d,_)=>{_?d():cu(d)}),a.augmentJob=d=>{e&&(d.flags|=4),h&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const f=Tm(n,e,a);return Zr&&(c?c.push(f):l&&f()),f}function Nm(n,e,t){const i=this.proxy,s=jt(n)?n.includes(".")?yd(i,n):()=>i[n]:n.bind(i,i);let r;ut(e)?r=e:(r=e.handler,t=e);const o=ao(this),a=Md(s,r.bind(i),t);return o(),a}function yd(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Im=Symbol("_vte"),Um=n=>n.__isTeleport,Fm=Symbol("_leaveCb");function uu(n,e){n.shapeFlag&6&&n.component?(n.transition=e,uu(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function mr(n,e){return ut(n)?_n({name:n.name},e,{setup:n}):n}function bd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const fa=new WeakMap;function zr(n,e,t,i,s=!1){if(ht(n)){n.forEach((_,x)=>zr(_,e&&(ht(e)?e[x]:e),t,i,s));return}if(Hr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&zr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Ia(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Ot?a.refs={}:a.refs,h=a.setupState,f=Pt(h),d=h===Ot?Xf:_=>Dt(f,_);if(c!=null&&c!==l){if(Gu(e),jt(c))u[c]=null,d(c)&&(h[c]=null);else if(mn(c)){c.value=null;const _=e;_.k&&(u[_.k]=null)}}if(ut(l))ro(l,a,12,[o,u]);else{const _=jt(l),x=mn(l);if(_||x){const m=()=>{if(n.f){const p=_?d(l)?h[l]:u[l]:l.value;if(s)ht(p)&&Zc(p,r);else if(ht(p))p.includes(r)||p.push(r);else if(_)u[l]=[r],d(l)&&(h[l]=u[l]);else{const A=[r];l.value=A,n.k&&(u[n.k]=A)}}else _?(u[l]=o,d(l)&&(h[l]=o)):x&&(l.value=o,n.k&&(u[n.k]=o))};if(o){const p=()=>{m(),fa.delete(n)};p.id=-1,fa.set(n,p),Nn(p,t)}else Gu(n),m()}}}function Gu(n){const e=fa.get(n);e&&(e.flags|=8,fa.delete(n))}Aa().requestIdleCallback;Aa().cancelIdleCallback;const Hr=n=>!!n.type.__asyncLoader,Sd=n=>n.type.__isKeepAlive;function Om(n,e){Ed(n,"a",e)}function Bm(n,e){Ed(n,"da",e)}function Ed(n,e,t=dn){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Pa(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Sd(s.parent.vnode)&&km(i,e,t,s),s=s.parent}}function km(n,e,t,i){const s=Pa(e,n,i,!0);Td(()=>{Zc(i[e],s)},t)}function Pa(n,e,t=dn,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Li();const a=ao(t),l=fi(e,t,n,o);return a(),Ni(),l});return i?s.unshift(r):s.push(r),r}}const ki=n=>(e,t=dn)=>{(!Zr||n==="sp")&&Pa(n,(...i)=>e(...i),t)},Vm=ki("bm"),oo=ki("m"),zm=ki("bu"),Hm=ki("u"),Da=ki("bum"),Td=ki("um"),Gm=ki("sp"),Wm=ki("rtg"),Xm=ki("rtc");function qm(n,e=dn){Pa("ec",n,e)}const jm="components";function Ym(n,e){return Km(jm,n,!0,e)||n}const $m=Symbol.for("v-ndc");function Km(n,e,t=!0,i=!1){const s=Un||dn;if(s){const r=s.type;{const a=Ug(r,!1);if(a&&(a===e||a===Wn(e)||a===Ta(Wn(e))))return r}const o=Wu(s[n]||r[n],e)||Wu(s.appContext[n],e);return!o&&i?r:o}}function Wu(n,e){return n&&(n[e]||n[Wn(e)]||n[Ta(Wn(e))])}function da(n,e,t,i){let s;const r=t,o=ht(n);if(o||jt(n)){const a=o&&Ms(n);let l=!1,c=!1;a&&(l=!Gn(n),c=Ii(n),n=wa(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=e(l?c?rr(Zn(n[u])):Zn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(Ht(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const Kl=n=>n?Xd(n)?Ia(n):Kl(n.parent):null,Gr=_n(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Kl(n.parent),$root:n=>Kl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>wd(n),$forceUpdate:n=>n.f||(n.f=()=>{cu(n.update)}),$nextTick:n=>n.n||(n.n=$l.bind(n.proxy)),$watch:n=>Nm.bind(n)}),tl=(n,e)=>n!==Ot&&!n.__isScriptSetup&&Dt(n,e),Jm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(tl(i,e))return o[e]=1,i[e];if(s!==Ot&&Dt(s,e))return o[e]=2,s[e];if(Dt(r,e))return o[e]=3,r[e];if(t!==Ot&&Dt(t,e))return o[e]=4,t[e];Jl&&(o[e]=0)}}const c=Gr[e];let u,h;if(c)return e==="$attrs"&&hn(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==Ot&&Dt(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Dt(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return tl(s,e)?(s[e]=t,!0):i!==Ot&&Dt(i,e)?(i[e]=t,!0):Dt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==Ot&&a[0]!=="$"&&Dt(n,a)||tl(e,a)||Dt(r,a)||Dt(i,a)||Dt(Gr,a)||Dt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Dt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Xu(n){return ht(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Jl=!0;function Zm(n){const e=wd(n),t=n.proxy,i=n.ctx;Jl=!1,e.beforeCreate&&qu(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:_,activated:x,deactivated:m,beforeDestroy:p,beforeUnmount:A,destroyed:D,unmounted:T,render:R,renderTracked:N,renderTriggered:L,errorCaptured:I,serverPrefetch:v,expose:b,inheritAttrs:F,components:z,directives:G,filters:se}=e;if(c&&Qm(c,i,null),o)for(const W in o){const Y=o[W];ut(Y)&&(i[W]=Y.bind(t))}if(s){const W=s.call(t,t);Ht(W)&&(n.data=Ra(W))}if(Jl=!0,r)for(const W in r){const Y=r[W],xe=ut(Y)?Y.bind(t,t):ut(Y.get)?Y.get.bind(t,t):ci,ye=!ut(Y)&&ut(Y.set)?Y.set.bind(t):ci,ie=ai({get:xe,set:ye});Object.defineProperty(i,W,{enumerable:!0,configurable:!0,get:()=>ie.value,set:te=>ie.value=te})}if(a)for(const W in a)Ad(a[W],i,t,W);if(l){const W=ut(l)?l.call(t):l;Reflect.ownKeys(W).forEach(Y=>{Pm(Y,W[Y])})}u&&qu(u,n,"c");function k(W,Y){ht(Y)?Y.forEach(xe=>W(xe.bind(t))):Y&&W(Y.bind(t))}if(k(Vm,h),k(oo,f),k(zm,d),k(Hm,_),k(Om,x),k(Bm,m),k(qm,I),k(Xm,N),k(Wm,L),k(Da,A),k(Td,T),k(Gm,v),ht(b))if(b.length){const W=n.exposed||(n.exposed={});b.forEach(Y=>{Object.defineProperty(W,Y,{get:()=>t[Y],set:xe=>t[Y]=xe,enumerable:!0})})}else n.exposed||(n.exposed={});R&&n.render===ci&&(n.render=R),F!=null&&(n.inheritAttrs=F),z&&(n.components=z),G&&(n.directives=G),v&&bd(n)}function Qm(n,e,t=ci){ht(n)&&(n=Zl(n));for(const i in n){const s=n[i];let r;Ht(s)?"default"in s?r=ea(s.from||i,s.default,!0):r=ea(s.from||i):r=ea(s),mn(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function qu(n,e,t){fi(ht(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Ad(n,e,t,i){let s=i.includes(".")?yd(t,i):()=>t[i];if(jt(n)){const r=e[n];ut(r)&&Ci(s,r)}else if(ut(n))Ci(s,n.bind(t));else if(Ht(n))if(ht(n))n.forEach(r=>Ad(r,e,t,i));else{const r=ut(n.handler)?n.handler.bind(t):e[n.handler];ut(r)&&Ci(s,r,n)}}function wd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>pa(l,c,o,!0)),pa(l,e,o)),Ht(e)&&r.set(e,l),l}function pa(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&pa(n,r,t,!0),s&&s.forEach(o=>pa(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=eg[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const eg={data:ju,props:Yu,emits:Yu,methods:Ur,computed:Ur,beforeCreate:vn,created:vn,beforeMount:vn,mounted:vn,beforeUpdate:vn,updated:vn,beforeDestroy:vn,beforeUnmount:vn,destroyed:vn,unmounted:vn,activated:vn,deactivated:vn,errorCaptured:vn,serverPrefetch:vn,components:Ur,directives:Ur,watch:ng,provide:ju,inject:tg};function ju(n,e){return e?n?function(){return _n(ut(n)?n.call(this,this):n,ut(e)?e.call(this,this):e)}:e:n}function tg(n,e){return Ur(Zl(n),Zl(e))}function Zl(n){if(ht(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function vn(n,e){return n?[...new Set([].concat(n,e))]:e}function Ur(n,e){return n?_n(Object.create(null),n,e):e}function Yu(n,e){return n?ht(n)&&ht(e)?[...new Set([...n,...e])]:_n(Object.create(null),Xu(n),Xu(e??{})):e}function ng(n,e){if(!n)return e;if(!e)return n;const t=_n(Object.create(null),n);for(const i in e)t[i]=vn(n[i],e[i]);return t}function Rd(){return{app:null,config:{isNativeTag:Xf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ig=0;function sg(n,e){return function(i,s=null){ut(i)||(i=_n({},i)),s!=null&&!Ht(s)&&(s=null);const r=Rd(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:ig++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Og,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&ut(u.install)?(o.add(u),u.install(c,...h)):ut(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const d=c._ceVNode||On(i,s);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(d,u,f),l=!0,c._container=u,u.__vue_app__=c,Ia(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(fi(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=er;er=c;try{return u()}finally{er=h}}};return c}}let er=null;const rg=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Wn(e)}Modifiers`]||n[`${ss(e)}Modifiers`];function og(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Ot;let s=t;const r=e.startsWith("update:"),o=r&&rg(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>jt(u)?u.trim():u)),o.number&&(s=t.map(eu)));let a,l=i[a=Ka(e)]||i[a=Ka(Wn(e))];!l&&r&&(l=i[a=Ka(ss(e))]),l&&fi(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,fi(c,n,6,s)}}const ag=new WeakMap;function Cd(n,e,t=!1){const i=t?ag:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!ut(n)){const l=c=>{const u=Cd(c,e,!0);u&&(a=!0,_n(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(Ht(n)&&i.set(n,null),null):(ht(r)?r.forEach(l=>o[l]=null):_n(o,r),Ht(n)&&i.set(n,o),o)}function La(n,e){return!n||!ba(e)?!1:(e=e.slice(2).replace(/Once$/,""),Dt(n,e[0].toLowerCase()+e.slice(1))||Dt(n,ss(e))||Dt(n,e))}function $u(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:_,inheritAttrs:x}=n,m=ha(n);let p,A;try{if(t.shapeFlag&4){const T=s||i,R=T;p=si(c.call(R,T,u,h,d,f,_)),A=a}else{const T=e;p=si(T.length>1?T(h,{attrs:a,slots:o,emit:l}):T(h,null)),A=e.props?a:lg(a)}}catch(T){Wr.length=0,Ca(T,n,1),p=On(ts)}let D=p;if(A&&x!==!1){const T=Object.keys(A),{shapeFlag:R}=D;T.length&&R&7&&(r&&T.some(Jc)&&(A=cg(A,r)),D=or(D,A,!1,!0))}return t.dirs&&(D=or(D,null,!1,!0),D.dirs=D.dirs?D.dirs.concat(t.dirs):t.dirs),t.transition&&uu(D,t.transition),p=D,ha(m),p}const lg=n=>{let e;for(const t in n)(t==="class"||t==="style"||ba(t))&&((e||(e={}))[t]=n[t]);return e},cg=(n,e)=>{const t={};for(const i in n)(!Jc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function ug(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Ku(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!La(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Ku(i,o,c):!0:!!o;return!1}function Ku(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!La(t,r))return!0}return!1}function hg({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Pd={},Dd=()=>Object.create(Pd),Ld=n=>Object.getPrototypeOf(n)===Pd;function fg(n,e,t,i=!1){const s={},r=Dd();n.propsDefaults=Object.create(null),Nd(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:gm(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function dg(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=Pt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(La(n.emitsOptions,f))continue;const d=e[f];if(l)if(Dt(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const _=Wn(f);s[_]=Ql(l,a,_,d,n,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{Nd(n,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!Dt(e,h)&&((u=ss(h))===h||!Dt(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=Ql(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!Dt(e,h))&&(delete r[h],c=!0)}c&&Ai(n.attrs,"set","")}function Nd(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Br(l))continue;const c=e[l];let u;s&&Dt(s,u=Wn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:La(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Pt(t),c=a||Ot;for(let u=0;u<r.length;u++){const h=r[u];t[h]=Ql(s,l,h,c[h],n,!Dt(c,h))}}return o}function Ql(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=Dt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ut(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=ao(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ss(t))&&(i=!0))}return i}const pg=new WeakMap;function Id(n,e,t=!1){const i=t?pg:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!ut(n)){const u=h=>{l=!0;const[f,d]=Id(h,e,!0);_n(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return Ht(n)&&i.set(n,Js),Js;if(ht(r))for(let u=0;u<r.length;u++){const h=Wn(r[u]);Ju(h)&&(o[h]=Ot)}else if(r)for(const u in r){const h=Wn(u);if(Ju(h)){const f=r[u],d=o[h]=ht(f)||ut(f)?{type:f}:_n({},f),_=d.type;let x=!1,m=!0;if(ht(_))for(let p=0;p<_.length;++p){const A=_[p],D=ut(A)&&A.name;if(D==="Boolean"){x=!0;break}else D==="String"&&(m=!1)}else x=ut(_)&&_.name==="Boolean";d[0]=x,d[1]=m,(x||Dt(d,"default"))&&a.push(h)}}const c=[o,a];return Ht(n)&&i.set(n,c),c}function Ju(n){return n[0]!=="$"&&!Br(n)}const hu=n=>n==="_"||n==="_ctx"||n==="$stable",fu=n=>ht(n)?n.map(si):[si(n)],mg=(n,e,t)=>{if(e._n)return e;const i=Cm((...s)=>fu(e(...s)),t);return i._c=!1,i},Ud=(n,e,t)=>{const i=n._ctx;for(const s in n){if(hu(s))continue;const r=n[s];if(ut(r))e[s]=mg(s,r,i);else if(r!=null){const o=fu(r);e[s]=()=>o}}},Fd=(n,e)=>{const t=fu(e);n.slots.default=()=>t},Od=(n,e,t)=>{for(const i in e)(t||!hu(i))&&(n[i]=e[i])},gg=(n,e,t)=>{const i=n.slots=Dd();if(n.vnode.shapeFlag&32){const s=e._;s?(Od(i,e,t),t&&Kf(i,"_",s,!0)):Ud(e,i)}else e&&Fd(n,e)},_g=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=Ot;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Od(s,e,t):(r=!e.$stable,Ud(e,s)),o=e}else e&&(Fd(n,e),o={default:1});if(r)for(const a in s)!hu(a)&&o[a]==null&&delete s[a]},Nn=bg;function xg(n){return vg(n)}function vg(n,e){const t=Aa();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=ci,insertStaticContent:_}=n,x=(O,V,Q,he=null,ae=null,fe=null,U=void 0,be=null,me=!!V.dynamicChildren)=>{if(O===V)return;O&&!wr(O,V)&&(he=K(O),te(O,ae,fe,!0),O=null),V.patchFlag===-2&&(me=!1,V.dynamicChildren=null);const{type:ue,ref:ge,shapeFlag:E}=V;switch(ue){case Na:m(O,V,Q,he);break;case ts:p(O,V,Q,he);break;case il:O==null&&A(V,Q,he,U);break;case wn:z(O,V,Q,he,ae,fe,U,be,me);break;default:E&1?R(O,V,Q,he,ae,fe,U,be,me):E&6?G(O,V,Q,he,ae,fe,U,be,me):(E&64||E&128)&&ue.process(O,V,Q,he,ae,fe,U,be,me,Ue)}ge!=null&&ae?zr(ge,O&&O.ref,fe,V||O,!V):ge==null&&O&&O.ref!=null&&zr(O.ref,null,fe,O,!0)},m=(O,V,Q,he)=>{if(O==null)i(V.el=a(V.children),Q,he);else{const ae=V.el=O.el;V.children!==O.children&&c(ae,V.children)}},p=(O,V,Q,he)=>{O==null?i(V.el=l(V.children||""),Q,he):V.el=O.el},A=(O,V,Q,he)=>{[O.el,O.anchor]=_(O.children,V,Q,he,O.el,O.anchor)},D=({el:O,anchor:V},Q,he)=>{let ae;for(;O&&O!==V;)ae=f(O),i(O,Q,he),O=ae;i(V,Q,he)},T=({el:O,anchor:V})=>{let Q;for(;O&&O!==V;)Q=f(O),s(O),O=Q;s(V)},R=(O,V,Q,he,ae,fe,U,be,me)=>{if(V.type==="svg"?U="svg":V.type==="math"&&(U="mathml"),O==null)N(V,Q,he,ae,fe,U,be,me);else{const ue=O.el&&O.el._isVueCE?O.el:null;try{ue&&ue._beginPatch(),v(O,V,ae,fe,U,be,me)}finally{ue&&ue._endPatch()}}},N=(O,V,Q,he,ae,fe,U,be)=>{let me,ue;const{props:ge,shapeFlag:E,transition:g,dirs:B}=O;if(me=O.el=o(O.type,fe,ge&&ge.is,ge),E&8?u(me,O.children):E&16&&I(O.children,me,null,he,ae,nl(O,fe),U,be),B&&os(O,null,he,"created"),L(me,O,O.scopeId,U,he),ge){for(const ce in ge)ce!=="value"&&!Br(ce)&&r(me,ce,null,ge[ce],fe,he);"value"in ge&&r(me,"value",null,ge.value,fe),(ue=ge.onVnodeBeforeMount)&&ti(ue,he,O)}B&&os(O,null,he,"beforeMount");const ee=Mg(ae,g);ee&&g.beforeEnter(me),i(me,V,Q),((ue=ge&&ge.onVnodeMounted)||ee||B)&&Nn(()=>{ue&&ti(ue,he,O),ee&&g.enter(me),B&&os(O,null,he,"mounted")},ae)},L=(O,V,Q,he,ae)=>{if(Q&&d(O,Q),he)for(let fe=0;fe<he.length;fe++)d(O,he[fe]);if(ae){let fe=ae.subTree;if(V===fe||zd(fe.type)&&(fe.ssContent===V||fe.ssFallback===V)){const U=ae.vnode;L(O,U,U.scopeId,U.slotScopeIds,ae.parent)}}},I=(O,V,Q,he,ae,fe,U,be,me=0)=>{for(let ue=me;ue<O.length;ue++){const ge=O[ue]=be?Ki(O[ue]):si(O[ue]);x(null,ge,V,Q,he,ae,fe,U,be)}},v=(O,V,Q,he,ae,fe,U)=>{const be=V.el=O.el;let{patchFlag:me,dynamicChildren:ue,dirs:ge}=V;me|=O.patchFlag&16;const E=O.props||Ot,g=V.props||Ot;let B;if(Q&&as(Q,!1),(B=g.onVnodeBeforeUpdate)&&ti(B,Q,V,O),ge&&os(V,O,Q,"beforeUpdate"),Q&&as(Q,!0),(E.innerHTML&&g.innerHTML==null||E.textContent&&g.textContent==null)&&u(be,""),ue?b(O.dynamicChildren,ue,be,Q,he,nl(V,ae),fe):U||Y(O,V,be,null,Q,he,nl(V,ae),fe,!1),me>0){if(me&16)F(be,E,g,Q,ae);else if(me&2&&E.class!==g.class&&r(be,"class",null,g.class,ae),me&4&&r(be,"style",E.style,g.style,ae),me&8){const ee=V.dynamicProps;for(let ce=0;ce<ee.length;ce++){const Z=ee[ce],Fe=E[Z],Te=g[Z];(Te!==Fe||Z==="value")&&r(be,Z,Fe,Te,ae,Q)}}me&1&&O.children!==V.children&&u(be,V.children)}else!U&&ue==null&&F(be,E,g,Q,ae);((B=g.onVnodeUpdated)||ge)&&Nn(()=>{B&&ti(B,Q,V,O),ge&&os(V,O,Q,"updated")},he)},b=(O,V,Q,he,ae,fe,U)=>{for(let be=0;be<V.length;be++){const me=O[be],ue=V[be],ge=me.el&&(me.type===wn||!wr(me,ue)||me.shapeFlag&198)?h(me.el):Q;x(me,ue,ge,null,he,ae,fe,U,!0)}},F=(O,V,Q,he,ae)=>{if(V!==Q){if(V!==Ot)for(const fe in V)!Br(fe)&&!(fe in Q)&&r(O,fe,V[fe],null,ae,he);for(const fe in Q){if(Br(fe))continue;const U=Q[fe],be=V[fe];U!==be&&fe!=="value"&&r(O,fe,be,U,ae,he)}"value"in Q&&r(O,"value",V.value,Q.value,ae)}},z=(O,V,Q,he,ae,fe,U,be,me)=>{const ue=V.el=O?O.el:a(""),ge=V.anchor=O?O.anchor:a("");let{patchFlag:E,dynamicChildren:g,slotScopeIds:B}=V;B&&(be=be?be.concat(B):B),O==null?(i(ue,Q,he),i(ge,Q,he),I(V.children||[],Q,ge,ae,fe,U,be,me)):E>0&&E&64&&g&&O.dynamicChildren&&O.dynamicChildren.length===g.length?(b(O.dynamicChildren,g,Q,ae,fe,U,be),(V.key!=null||ae&&V===ae.subTree)&&Bd(O,V,!0)):Y(O,V,Q,ge,ae,fe,U,be,me)},G=(O,V,Q,he,ae,fe,U,be,me)=>{V.slotScopeIds=be,O==null?V.shapeFlag&512?ae.ctx.activate(V,Q,he,U,me):se(V,Q,he,ae,fe,U,me):ne(O,V,me)},se=(O,V,Q,he,ae,fe,U)=>{const be=O.component=Cg(O,he,ae);if(Sd(O)&&(be.ctx.renderer=Ue),Dg(be,!1,U),be.asyncDep){if(ae&&ae.registerDep(be,k,U),!O.el){const me=be.subTree=On(ts);p(null,me,V,Q),O.placeholder=me.el}}else k(be,O,V,Q,ae,fe,U)},ne=(O,V,Q)=>{const he=V.component=O.component;if(ug(O,V,Q))if(he.asyncDep&&!he.asyncResolved){W(he,V,Q);return}else he.next=V,he.update();else V.el=O.el,he.vnode=V},k=(O,V,Q,he,ae,fe,U)=>{const be=()=>{if(O.isMounted){let{next:E,bu:g,u:B,parent:ee,vnode:ce}=O;{const Je=kd(O);if(Je){E&&(E.el=ce.el,W(O,E,U)),Je.asyncDep.then(()=>{O.isUnmounted||be()});return}}let Z=E,Fe;as(O,!1),E?(E.el=ce.el,W(O,E,U)):E=ce,g&&Qo(g),(Fe=E.props&&E.props.onVnodeBeforeUpdate)&&ti(Fe,ee,E,ce),as(O,!0);const Te=$u(O),ke=O.subTree;O.subTree=Te,x(ke,Te,h(ke.el),K(ke),O,ae,fe),E.el=Te.el,Z===null&&hg(O,Te.el),B&&Nn(B,ae),(Fe=E.props&&E.props.onVnodeUpdated)&&Nn(()=>ti(Fe,ee,E,ce),ae)}else{let E;const{el:g,props:B}=V,{bm:ee,m:ce,parent:Z,root:Fe,type:Te}=O,ke=Hr(V);as(O,!1),ee&&Qo(ee),!ke&&(E=B&&B.onVnodeBeforeMount)&&ti(E,Z,V),as(O,!0);{Fe.ce&&Fe.ce._def.shadowRoot!==!1&&Fe.ce._injectChildStyle(Te);const Je=O.subTree=$u(O);x(null,Je,Q,he,O,ae,fe),V.el=Je.el}if(ce&&Nn(ce,ae),!ke&&(E=B&&B.onVnodeMounted)){const Je=V;Nn(()=>ti(E,Z,Je),ae)}(V.shapeFlag&256||Z&&Hr(Z.vnode)&&Z.vnode.shapeFlag&256)&&O.a&&Nn(O.a,ae),O.isMounted=!0,V=Q=he=null}};O.scope.on();const me=O.effect=new ed(be);O.scope.off();const ue=O.update=me.run.bind(me),ge=O.job=me.runIfDirty.bind(me);ge.i=O,ge.id=O.uid,me.scheduler=()=>cu(ge),as(O,!0),ue()},W=(O,V,Q)=>{V.component=O;const he=O.vnode.props;O.vnode=V,O.next=null,dg(O,V.props,he,Q),_g(O,V.children,Q),Li(),zu(O),Ni()},Y=(O,V,Q,he,ae,fe,U,be,me=!1)=>{const ue=O&&O.children,ge=O?O.shapeFlag:0,E=V.children,{patchFlag:g,shapeFlag:B}=V;if(g>0){if(g&128){ye(ue,E,Q,he,ae,fe,U,be,me);return}else if(g&256){xe(ue,E,Q,he,ae,fe,U,be,me);return}}B&8?(ge&16&&H(ue,ae,fe),E!==ue&&u(Q,E)):ge&16?B&16?ye(ue,E,Q,he,ae,fe,U,be,me):H(ue,ae,fe,!0):(ge&8&&u(Q,""),B&16&&I(E,Q,he,ae,fe,U,be,me))},xe=(O,V,Q,he,ae,fe,U,be,me)=>{O=O||Js,V=V||Js;const ue=O.length,ge=V.length,E=Math.min(ue,ge);let g;for(g=0;g<E;g++){const B=V[g]=me?Ki(V[g]):si(V[g]);x(O[g],B,Q,null,ae,fe,U,be,me)}ue>ge?H(O,ae,fe,!0,!1,E):I(V,Q,he,ae,fe,U,be,me,E)},ye=(O,V,Q,he,ae,fe,U,be,me)=>{let ue=0;const ge=V.length;let E=O.length-1,g=ge-1;for(;ue<=E&&ue<=g;){const B=O[ue],ee=V[ue]=me?Ki(V[ue]):si(V[ue]);if(wr(B,ee))x(B,ee,Q,null,ae,fe,U,be,me);else break;ue++}for(;ue<=E&&ue<=g;){const B=O[E],ee=V[g]=me?Ki(V[g]):si(V[g]);if(wr(B,ee))x(B,ee,Q,null,ae,fe,U,be,me);else break;E--,g--}if(ue>E){if(ue<=g){const B=g+1,ee=B<ge?V[B].el:he;for(;ue<=g;)x(null,V[ue]=me?Ki(V[ue]):si(V[ue]),Q,ee,ae,fe,U,be,me),ue++}}else if(ue>g)for(;ue<=E;)te(O[ue],ae,fe,!0),ue++;else{const B=ue,ee=ue,ce=new Map;for(ue=ee;ue<=g;ue++){const Le=V[ue]=me?Ki(V[ue]):si(V[ue]);Le.key!=null&&ce.set(Le.key,ue)}let Z,Fe=0;const Te=g-ee+1;let ke=!1,Je=0;const Se=new Array(Te);for(ue=0;ue<Te;ue++)Se[ue]=0;for(ue=B;ue<=E;ue++){const Le=O[ue];if(Fe>=Te){te(Le,ae,fe,!0);continue}let Ve;if(Le.key!=null)Ve=ce.get(Le.key);else for(Z=ee;Z<=g;Z++)if(Se[Z-ee]===0&&wr(Le,V[Z])){Ve=Z;break}Ve===void 0?te(Le,ae,fe,!0):(Se[Ve-ee]=ue+1,Ve>=Je?Je=Ve:ke=!0,x(Le,V[Ve],Q,null,ae,fe,U,be,me),Fe++)}const Ce=ke?yg(Se):Js;for(Z=Ce.length-1,ue=Te-1;ue>=0;ue--){const Le=ee+ue,Ve=V[Le],Re=V[Le+1],lt=Le+1<ge?Re.el||Vd(Re):he;Se[ue]===0?x(null,Ve,Q,lt,ae,fe,U,be,me):ke&&(Z<0||ue!==Ce[Z]?ie(Ve,Q,lt,2):Z--)}}},ie=(O,V,Q,he,ae=null)=>{const{el:fe,type:U,transition:be,children:me,shapeFlag:ue}=O;if(ue&6){ie(O.component.subTree,V,Q,he);return}if(ue&128){O.suspense.move(V,Q,he);return}if(ue&64){U.move(O,V,Q,Ue);return}if(U===wn){i(fe,V,Q);for(let E=0;E<me.length;E++)ie(me[E],V,Q,he);i(O.anchor,V,Q);return}if(U===il){D(O,V,Q);return}if(he!==2&&ue&1&&be)if(he===0)be.beforeEnter(fe),i(fe,V,Q),Nn(()=>be.enter(fe),ae);else{const{leave:E,delayLeave:g,afterLeave:B}=be,ee=()=>{O.ctx.isUnmounted?s(fe):i(fe,V,Q)},ce=()=>{fe._isLeaving&&fe[Fm](!0),E(fe,()=>{ee(),B&&B()})};g?g(fe,ee,ce):ce()}else i(fe,V,Q)},te=(O,V,Q,he=!1,ae=!1)=>{const{type:fe,props:U,ref:be,children:me,dynamicChildren:ue,shapeFlag:ge,patchFlag:E,dirs:g,cacheIndex:B}=O;if(E===-2&&(ae=!1),be!=null&&(Li(),zr(be,null,Q,O,!0),Ni()),B!=null&&(V.renderCache[B]=void 0),ge&256){V.ctx.deactivate(O);return}const ee=ge&1&&g,ce=!Hr(O);let Z;if(ce&&(Z=U&&U.onVnodeBeforeUnmount)&&ti(Z,V,O),ge&6)pe(O.component,Q,he);else{if(ge&128){O.suspense.unmount(Q,he);return}ee&&os(O,null,V,"beforeUnmount"),ge&64?O.type.remove(O,V,Q,Ue,he):ue&&!ue.hasOnce&&(fe!==wn||E>0&&E&64)?H(ue,V,Q,!1,!0):(fe===wn&&E&384||!ae&&ge&16)&&H(me,V,Q),he&&J(O)}(ce&&(Z=U&&U.onVnodeUnmounted)||ee)&&Nn(()=>{Z&&ti(Z,V,O),ee&&os(O,null,V,"unmounted")},Q)},J=O=>{const{type:V,el:Q,anchor:he,transition:ae}=O;if(V===wn){Me(Q,he);return}if(V===il){T(O);return}const fe=()=>{s(Q),ae&&!ae.persisted&&ae.afterLeave&&ae.afterLeave()};if(O.shapeFlag&1&&ae&&!ae.persisted){const{leave:U,delayLeave:be}=ae,me=()=>U(Q,fe);be?be(O.el,fe,me):me()}else fe()},Me=(O,V)=>{let Q;for(;O!==V;)Q=f(O),s(O),O=Q;s(V)},pe=(O,V,Q)=>{const{bum:he,scope:ae,job:fe,subTree:U,um:be,m:me,a:ue}=O;Zu(me),Zu(ue),he&&Qo(he),ae.stop(),fe&&(fe.flags|=8,te(U,O,V,Q)),be&&Nn(be,V),Nn(()=>{O.isUnmounted=!0},V)},H=(O,V,Q,he=!1,ae=!1,fe=0)=>{for(let U=fe;U<O.length;U++)te(O[U],V,Q,he,ae)},K=O=>{if(O.shapeFlag&6)return K(O.component.subTree);if(O.shapeFlag&128)return O.suspense.next();const V=f(O.anchor||O.el),Q=V&&V[Im];return Q?f(Q):V};let ve=!1;const je=(O,V,Q)=>{let he;O==null?V._vnode&&(te(V._vnode,null,null,!0),he=V._vnode.component):x(V._vnode||null,O,V,null,null,null,Q),V._vnode=O,ve||(ve=!0,zu(he),_d(),ve=!1)},Ue={p:x,um:te,m:ie,r:J,mt:se,mc:I,pc:Y,pbc:b,n:K,o:n};return{render:je,hydrate:void 0,createApp:sg(je)}}function nl({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function as({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Mg(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Bd(n,e,t=!1){const i=n.children,s=e.children;if(ht(i)&&ht(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ki(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Bd(o,a)),a.type===Na&&(a.patchFlag!==-1?a.el=o.el:a.__elIndex=r+(n.type===wn?1:0)),a.type===ts&&!a.el&&(a.el=o.el)}}function yg(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function kd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:kd(e)}function Zu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Vd(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Vd(e.subTree):null}const zd=n=>n.__isSuspense;function bg(n,e){e&&e.pendingBranch?ht(n)?e.effects.push(...n):e.effects.push(n):Rm(n)}const wn=Symbol.for("v-fgt"),Na=Symbol.for("v-txt"),ts=Symbol.for("v-cmt"),il=Symbol.for("v-stc"),Wr=[];let Fn=null;function St(n=!1){Wr.push(Fn=n?null:[])}function Sg(){Wr.pop(),Fn=Wr[Wr.length-1]||null}let Jr=1;function Qu(n,e=!1){Jr+=n,n<0&&Fn&&e&&(Fn.hasOnce=!0)}function Hd(n){return n.dynamicChildren=Jr>0?Fn||Js:null,Sg(),Jr>0&&Fn&&Fn.push(n),n}function Lt(n,e,t,i,s,r){return Hd(Xe(n,e,t,i,s,r,!0))}function du(n,e,t,i,s){return Hd(On(n,e,t,i,s,!0))}function Gd(n){return n?n.__v_isVNode===!0:!1}function wr(n,e){return n.type===e.type&&n.key===e.key}const Wd=({key:n})=>n??null,ta=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?jt(n)||mn(n)||ut(n)?{i:Un,r:n,k:e,f:!!t}:n:null);function Xe(n,e=null,t=null,i=0,s=null,r=n===wn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Wd(e),ref:e&&ta(e),scopeId:vd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Un};return a?(mu(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=jt(t)?8:16),Jr>0&&!o&&Fn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Fn.push(l),l}const On=Eg;function Eg(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===$m)&&(n=ts),Gd(n)){const a=or(n,e,!0);return t&&mu(a,t),Jr>0&&!r&&Fn&&(a.shapeFlag&6?Fn[Fn.indexOf(n)]=a:Fn.push(a)),a.patchFlag=-2,a}if(Fg(n)&&(n=n.__vccOpts),e){e=Tg(e);let{class:a,style:l}=e;a&&!jt(a)&&(e.class=cn(a)),Ht(l)&&(lu(l)&&!ht(l)&&(l=_n({},l)),e.style=tu(l))}const o=jt(n)?1:zd(n)?128:Um(n)?64:Ht(n)?4:ut(n)?2:0;return Xe(n,e,t,i,s,o,r,!0)}function Tg(n){return n?lu(n)||Ld(n)?_n({},n):n:null}function or(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?Ag(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Wd(c),ref:e&&e.ref?t&&r?ht(r)?r.concat(ta(e)):[r,ta(e)]:ta(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==wn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&or(n.ssContent),ssFallback:n.ssFallback&&or(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&uu(u,l.clone(u)),u}function pu(n=" ",e=0){return On(Na,null,n,e)}function Ui(n="",e=!1){return e?(St(),du(ts,null,n)):On(ts,null,n)}function si(n){return n==null||typeof n=="boolean"?On(ts):ht(n)?On(wn,null,n.slice()):Gd(n)?Ki(n):On(Na,null,String(n))}function Ki(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:or(n)}function mu(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ht(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),mu(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Ld(e)?e._ctx=Un:s===3&&Un&&(Un.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ut(e)?(e={default:e,_ctx:Un},t=32):(e=String(e),i&64?(t=16,e=[pu(e)]):t=8);n.children=e,n.shapeFlag|=t}function Ag(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=cn([e.class,i.class]));else if(s==="style")e.style=tu([e.style,i.style]);else if(ba(s)){const r=e[s],o=i[s];o&&r!==o&&!(ht(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function ti(n,e,t,i=null){fi(n,e,7,[t,i])}const wg=Rd();let Rg=0;function Cg(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||wg,r={uid:Rg++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Kp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Id(i,s),emitsOptions:Cd(i,s),emit:null,emitted:null,propsDefaults:Ot,inheritAttrs:i.inheritAttrs,ctx:Ot,data:Ot,props:Ot,attrs:Ot,slots:Ot,refs:Ot,setupState:Ot,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=og.bind(null,r),n.ce&&n.ce(r),r}let dn=null;const Pg=()=>dn||Un;let ma,ec;{const n=Aa(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};ma=e("__VUE_INSTANCE_SETTERS__",t=>dn=t),ec=e("__VUE_SSR_SETTERS__",t=>Zr=t)}const ao=n=>{const e=dn;return ma(n),n.scope.on(),()=>{n.scope.off(),ma(e)}},eh=()=>{dn&&dn.scope.off(),ma(null)};function Xd(n){return n.vnode.shapeFlag&4}let Zr=!1;function Dg(n,e=!1,t=!1){e&&ec(e);const{props:i,children:s}=n.vnode,r=Xd(n);fg(n,i,r,e),gg(n,s,t||e);const o=r?Lg(n,e):void 0;return e&&ec(!1),o}function Lg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Jm);const{setup:i}=t;if(i){Li();const s=n.setupContext=i.length>1?Ig(n):null,r=ao(n),o=ro(i,n,0,[n.props,s]),a=jf(o);if(Ni(),r(),(a||n.sp)&&!Hr(n)&&bd(n),a){if(o.then(eh,eh),e)return o.then(l=>{th(n,l)}).catch(l=>{Ca(l,n,0)});n.asyncDep=o}else th(n,o)}else qd(n)}function th(n,e,t){ut(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Ht(e)&&(n.setupState=pd(e)),qd(n)}function qd(n,e,t){const i=n.type;n.render||(n.render=i.render||ci);{const s=ao(n);Li();try{Zm(n)}finally{Ni(),s()}}}const Ng={get(n,e){return hn(n,"get",""),n[e]}};function Ig(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Ng),slots:n.slots,emit:n.emit,expose:e}}function Ia(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(pd(_m(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Gr)return Gr[t](n)},has(e,t){return t in e||t in Gr}})):n.proxy}function Ug(n,e=!0){return ut(n)?n.displayName||n.name:n.name||e&&n.__name}function Fg(n){return ut(n)&&"__vccOpts"in n}const ai=(n,e)=>Sm(n,e,Zr),Og="3.5.26";let tc;const nh=typeof window<"u"&&window.trustedTypes;if(nh)try{tc=nh.createPolicy("vue",{createHTML:n=>n})}catch{}const jd=tc?n=>tc.createHTML(n):n=>n,Bg="http://www.w3.org/2000/svg",kg="http://www.w3.org/1998/Math/MathML",Ti=typeof document<"u"?document:null,ih=Ti&&Ti.createElement("template"),Vg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Ti.createElementNS(Bg,n):e==="mathml"?Ti.createElementNS(kg,n):t?Ti.createElement(n,{is:t}):Ti.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Ti.createTextNode(n),createComment:n=>Ti.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ti.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{ih.innerHTML=jd(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=ih.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},zg=Symbol("_vtc");function Hg(n,e,t){const i=n[zg];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const sh=Symbol("_vod"),Gg=Symbol("_vsh"),Wg=Symbol(""),Xg=/(?:^|;)\s*display\s*:/;function qg(n,e,t){const i=n.style,s=jt(t);let r=!1;if(t&&!s){if(e)if(jt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&na(i,a,"")}else for(const o in e)t[o]==null&&na(i,o,"");for(const o in t)o==="display"&&(r=!0),na(i,o,t[o])}else if(s){if(e!==t){const o=i[Wg];o&&(t+=";"+o),i.cssText=t,r=Xg.test(t)}}else e&&n.removeAttribute("style");sh in n&&(n[sh]=r?i.display:"",n[Gg]&&(i.display="none"))}const rh=/\s*!important$/;function na(n,e,t){if(ht(t))t.forEach(i=>na(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=jg(n,e);rh.test(t)?n.setProperty(ss(i),t.replace(rh,""),"important"):n[i]=t}}const oh=["Webkit","Moz","ms"],sl={};function jg(n,e){const t=sl[e];if(t)return t;let i=Wn(e);if(i!=="filter"&&i in n)return sl[e]=i;i=Ta(i);for(let s=0;s<oh.length;s++){const r=oh[s]+i;if(r in n)return sl[e]=r}return e}const ah="http://www.w3.org/1999/xlink";function lh(n,e,t,i,s,r=$p(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(ah,e.slice(6,e.length)):n.setAttributeNS(ah,e,t):t==null||r&&!Jf(t)?n.removeAttribute(e):n.setAttribute(e,r?"":is(t)?String(t):t)}function ch(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?jd(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Jf(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function qs(n,e,t,i){n.addEventListener(e,t,i)}function Yg(n,e,t,i){n.removeEventListener(e,t,i)}const uh=Symbol("_vei");function $g(n,e,t,i,s=null){const r=n[uh]||(n[uh]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=Kg(e);if(i){const c=r[e]=Qg(i,s);qs(n,a,c,l)}else o&&(Yg(n,a,o,l),r[e]=void 0)}}const hh=/(?:Once|Passive|Capture)$/;function Kg(n){let e;if(hh.test(n)){e={};let i;for(;i=n.match(hh);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ss(n.slice(2)),e]}let rl=0;const Jg=Promise.resolve(),Zg=()=>rl||(Jg.then(()=>rl=0),rl=Date.now());function Qg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;fi(e_(i,t.value),e,5,[i])};return t.value=n,t.attached=Zg(),t}function e_(n,e){if(ht(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const fh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,t_=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?Hg(n,i,o):e==="style"?qg(n,t,i):ba(e)?Jc(e)||$g(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):n_(n,e,i,o))?(ch(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&lh(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!jt(i))?ch(n,Wn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),lh(n,e,i,o))};function n_(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&fh(e)&&ut(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return fh(e)&&jt(t)?!1:e in n}const dh=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ht(e)?t=>Qo(e,t):e};function i_(n){n.target.composing=!0}function ph(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ol=Symbol("_assign");function mh(n,e,t){return e&&(n=n.trim()),t&&(n=eu(n)),n}const gh={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[ol]=dh(s);const r=i||s.props&&s.props.type==="number";qs(n,e?"change":"input",o=>{o.target.composing||n[ol](mh(n.value,t,r))}),(t||r)&&qs(n,"change",()=>{n.value=mh(n.value,t,r)}),e||(qs(n,"compositionstart",i_),qs(n,"compositionend",ph),qs(n,"change",ph))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[ol]=dh(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?eu(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l))}},s_=["ctrl","shift","alt","meta"],r_={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>s_.some(t=>n[`${t}Key`]&&!e.includes(t))},Yd=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((s,...r)=>{for(let o=0;o<e.length;o++){const a=r_[e[o]];if(a&&a(s,e))return}return n(s,...r)}))},o_={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},_h=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=(s=>{if(!("key"in s))return;const r=ss(s.key);if(e.some(o=>o===r||o_[o]===r))return n(s)}))},a_=_n({patchProp:t_},Vg);let xh;function l_(){return xh||(xh=xg(a_))}const c_=((...n)=>{const e=l_().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=h_(i);if(!s)return;const r=e._component;!ut(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,u_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function u_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function h_(n){return jt(n)?document.querySelector(n):n}const f_={class:"tree-node"},d_=["aria-label"],p_={key:1,class:"node-spacer"},m_={class:"node-icon"},g_={class:"node-name"},__={class:"node-type"},x_={key:0,class:"node-children"},v_=mr({__name:"TreeNode",props:{node:{},selected:{},expandAll:{},collapseAll:{},isRoot:{type:Boolean},forceCollapsed:{type:Boolean}},emits:["select"],setup(n,{emit:e}){const t=n,i=e,s=sn(!0),r=sn(!1);oo(()=>{t.forceCollapsed&&(s.value=!1)}),Ci(()=>t.expandAll,h=>{h!==void 0&&h>0&&(s.value=!0,r.value=!1)}),Ci(()=>t.collapseAll,h=>{h!==void 0&&h>0&&(t.isRoot?(s.value=!0,r.value=!0):(s.value=!1,r.value=!1))}),Ci(()=>t.forceCollapsed,h=>{h&&(s.value=!1)});const o=ai(()=>t.selected===t.node),a=ai(()=>t.node.children&&t.node.children.length>0),l=()=>{i("select",t.node)},c=h=>{h.stopPropagation();const f=!s.value;s.value=!s.value,f&&s.value&&a.value?r.value=!0:s.value||(r.value=!1)},u=ai(()=>{switch(t.node.type){case"robot":return"🤖";case"link":return"🔗";case"joint":return"⚙️";default:return"📦"}});return(h,f)=>{const d=Ym("TreeNode",!0);return St(),Lt("div",f_,[Xe("div",{class:cn(["node-label",{selected:o.value}]),onClick:l},[a.value?(St(),Lt("button",{key:0,class:"expand-button",onClick:c,"aria-label":s.value?"Collapse":"Expand"},un(s.value?"▼":"▶"),9,d_)):(St(),Lt("span",p_)),Xe("span",m_,un(u.value),1),Xe("span",g_,un(n.node.name),1),Xe("span",__,"["+un(n.node.type)+"]",1)],2),a.value&&s.value?(St(),Lt("div",x_,[(St(!0),Lt(wn,null,da(n.node.children,(_,x)=>(St(),du(d,{key:x,node:_,selected:n.selected,"expand-all":n.expandAll,"collapse-all":n.collapseAll,"is-root":!1,"force-collapsed":r.value,onSelect:f[0]||(f[0]=m=>h.$emit("select",m))},null,8,["node","selected","expand-all","collapse-all","force-collapsed"]))),128))])):Ui("",!0)])}}}),gr=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},M_=gr(v_,[["__scopeId","data-v-2bf18102"]]),y_={class:"hierarchy-panel"},b_={class:"panel-header"},S_={key:0,class:"header-actions"},E_={class:"panel-content"},T_={key:0,class:"empty-state"},A_={key:1,class:"tree"},w_=mr({__name:"HierarchyPanel",props:{root:{},selected:{}},emits:["select"],setup(n,{emit:e}){const t=n,i=e,s=ai(()=>t.root!==null),r=sn(0),o=sn(0),a=u=>{i("select",u)},l=()=>{r.value++},c=()=>{o.value++};return(u,h)=>(St(),Lt("aside",y_,[Xe("div",b_,[h[0]||(h[0]=Xe("h2",null,"Hierarchy",-1)),s.value?(St(),Lt("div",S_,[Xe("button",{class:"action-button",onClick:l,title:"Expand all nodes"}," ⊞ "),Xe("button",{class:"action-button",onClick:c,title:"Collapse all nodes"}," ⊟ ")])):Ui("",!0)]),Xe("div",E_,[s.value?(St(),Lt("div",A_,[n.root?(St(),du(M_,{key:0,node:n.root,selected:n.selected,"expand-all":r.value,"collapse-all":o.value,"is-root":!0,onSelect:a},null,8,["node","selected","expand-all","collapse-all"])):Ui("",!0)])):(St(),Lt("div",T_,[...h[1]||(h[1]=[Xe("p",null,"No model loaded",-1),Xe("p",{class:"hint"},"Upload a URDF file to get started",-1)])]))])]))}}),R_=gr(w_,[["__scopeId","data-v-36f6e9c1"]]);const gu="182",tr={ROTATE:0,DOLLY:1,PAN:2},$s={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},C_=0,vh=1,P_=2,ia=1,D_=2,Fr=3,Fi=0,Rn=1,oi=2,Pi=0,nr=1,Mh=2,yh=3,bh=4,L_=5,ms=100,N_=101,I_=102,U_=103,F_=104,O_=200,B_=201,k_=202,V_=203,nc=204,ic=205,z_=206,H_=207,G_=208,W_=209,X_=210,q_=211,j_=212,Y_=213,$_=214,sc=0,rc=1,oc=2,ar=3,ac=4,lc=5,cc=6,uc=7,Ua=0,K_=1,J_=2,ui=0,$d=1,Kd=2,Jd=3,Zd=4,Qd=5,ep=6,tp=7,Sh="attached",Z_="detached",np=300,ys=301,lr=302,hc=303,fc=304,Fa=306,_s=1e3,Bn=1001,dc=1002,rn=1003,Q_=1004,yo=1005,Kt=1006,al=1007,Ri=1008,In=1009,ip=1010,sp=1011,Qr=1012,_u=1013,di=1014,Kn=1015,Oi=1016,xu=1017,vu=1018,eo=1020,rp=35902,op=35899,ap=1021,lp=1022,Hn=1023,Bi=1026,xs=1027,cp=1028,Mu=1029,cr=1030,yu=1031,bu=1033,sa=33776,ra=33777,oa=33778,aa=33779,pc=35840,mc=35841,gc=35842,_c=35843,xc=36196,vc=37492,Mc=37496,yc=37488,bc=37489,Sc=37490,Ec=37491,Tc=37808,Ac=37809,wc=37810,Rc=37811,Cc=37812,Pc=37813,Dc=37814,Lc=37815,Nc=37816,Ic=37817,Uc=37818,Fc=37819,Oc=37820,Bc=37821,kc=36492,Vc=36494,zc=36495,Hc=36283,Gc=36284,Wc=36285,Xc=36286,ga=2300,qc=2301,ll=2302,Eh=2400,Th=2401,Ah=2402,e0=2500,t0=3200,Su=0,n0=1,Zi="",Wt="srgb",ur="srgb-linear",_a="linear",It="srgb",Cs=7680,wh=519,i0=512,s0=513,r0=514,Eu=515,o0=516,a0=517,Tu=518,l0=519,Rh=35044,Ch="300 es",li=2e3,xa=2001;function up(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function c0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function to(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function u0(){const n=to("canvas");return n.style.display="block",n}const Ph={};function Dh(...n){const e="THREE."+n.shift();console.log(e,...n)}function it(...n){const e="THREE."+n.shift();console.warn(e,...n)}function _t(...n){const e="THREE."+n.shift();console.error(e,...n)}function no(...n){const e=n.join(" ");e in Ph||(Ph[e]=!0,it(...n))}function h0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}class bs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lh=1234567;const ir=Math.PI/180,hr=180/Math.PI;function rs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function vt(n,e,t){return Math.max(e,Math.min(t,n))}function Au(n,e){return(n%e+e)%e}function f0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function d0(n,e,t){return n!==e?(t-n)/(e-n):0}function Xr(n,e,t){return(1-t)*n+t*e}function p0(n,e,t,i){return Xr(n,e,1-Math.exp(-t*i))}function m0(n,e=1){return e-Math.abs(Au(n,e*2)-e)}function g0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function _0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function x0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function v0(n,e){return n+Math.random()*(e-n)}function M0(n){return n*(.5-Math.random())}function y0(n){n!==void 0&&(Lh=n);let e=Lh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function b0(n){return n*ir}function S0(n){return n*hr}function E0(n){return(n&n-1)===0&&n!==0}function T0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function A0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function w0(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*_,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*_,a*c);break;case"ZYZ":n.set(l*_,l*d,a*u,a*c);break;default:it("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function js(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Mn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ys={DEG2RAD:ir,RAD2DEG:hr,generateUUID:rs,clamp:vt,euclideanModulo:Au,mapLinear:f0,inverseLerp:d0,lerp:Xr,damp:p0,pingpong:m0,smoothstep:g0,smootherstep:_0,randInt:x0,randFloat:v0,randFloatSpread:M0,seededRandom:y0,degToRad:b0,radToDeg:S0,isPowerOfTwo:E0,ceilPowerOfTwo:T0,floorPowerOfTwo:A0,setQuaternionFromProperEuler:w0,normalize:Mn,denormalize:js};class at{constructor(e=0,t=0){at.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[o+0],d=r[o+1],_=r[o+2],x=r[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a>=1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=x;return}if(h!==x||l!==f||c!==d||u!==_){let m=l*f+c*d+u*_+h*x;m<0&&(f=-f,d=-d,_=-_,x=-x,m=-m);let p=1-a;if(m<.9995){const A=Math.acos(m),D=Math.sin(A);p=Math.sin(p*A)/D,a=Math.sin(a*A)/D,l=l*p+f*a,c=c*p+d*a,u=u*p+_*a,h=h*p+x*a}else{l=l*p+f*a,c=c*p+d*a,u=u*p+_*a,h=h*p+x*a;const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],_=r[o+3];return e[t]=a*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-a*d,e[t+2]=c*_+u*d+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,i=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return cl.copy(this).projectOnVector(e),this.sub(cl)}reflect(e){return this.sub(cl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cl=new q,Nh=new Xn;class mt{constructor(e,t,i,s,r,o,a,l,c){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],_=i[8],x=s[0],m=s[3],p=s[6],A=s[1],D=s[4],T=s[7],R=s[2],N=s[5],L=s[8];return r[0]=o*x+a*A+l*R,r[3]=o*m+a*D+l*N,r[6]=o*p+a*T+l*L,r[1]=c*x+u*A+h*R,r[4]=c*m+u*D+h*N,r[7]=c*p+u*T+h*L,r[2]=f*x+d*A+_*R,r[5]=f*m+d*D+_*N,r[8]=f*p+d*T+_*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,_=t*h+i*f+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ul.makeScale(e,t)),this}rotate(e){return this.premultiply(ul.makeRotation(-e)),this}translate(e,t){return this.premultiply(ul.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ul=new mt,Ih=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uh=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function R0(){const n={enabled:!0,workingColorSpace:ur,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===It&&(s.r=Di(s.r),s.g=Di(s.g),s.b=Di(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===It&&(s.r=sr(s.r),s.g=sr(s.g),s.b=sr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Zi?_a:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return no("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return no("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ur]:{primaries:e,whitePoint:i,transfer:_a,toXYZ:Ih,fromXYZ:Uh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:i,transfer:It,toXYZ:Ih,fromXYZ:Uh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),n}const Mt=R0();function Di(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function sr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ps;class C0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ps===void 0&&(Ps=to("canvas")),Ps.width=e.width,Ps.height=e.height;const s=Ps.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ps}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=to("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Di(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Di(t[i]/255)*255):t[i]=Di(t[i]);return{data:t,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let P0=0;class wu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=rs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(hl(s[o].image)):r.push(hl(s[o]))}else r=hl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function hl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?C0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}let D0=0;const fl=new q;class gn extends bs{constructor(e=gn.DEFAULT_IMAGE,t=gn.DEFAULT_MAPPING,i=Bn,s=Bn,r=Kt,o=Ri,a=Hn,l=In,c=gn.DEFAULT_ANISOTROPY,u=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=rs(),this.name="",this.source=new wu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(fl).x}get height(){return this.source.getSize(fl).y}get depth(){return this.source.getSize(fl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){it(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){it(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==np)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _s:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case dc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _s:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case dc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=np;gn.DEFAULT_ANISOTROPY=1;class kt{constructor(e=0,t=0,i=0,s=1){kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(c+1)/2,T=(d+1)/2,R=(p+1)/2,N=(u+f)/4,L=(h+x)/4,I=(_+m)/4;return D>T&&D>R?D<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(D),s=N/i,r=L/i):T>R?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=N/s,r=I/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=L/r,s=I/r),this.set(i,s,r,t),this}let A=Math.sqrt((m-_)*(m-_)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(m-_)/A,this.y=(h-x)/A,this.z=(f-u)/A,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class L0 extends bs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new gn(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new wu(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hi extends L0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class hp extends gn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class N0 extends gn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _r{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,jn):jn.fromBufferAttribute(r,o),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),bo.copy(i.boundingBox)),bo.applyMatrix4(e.matrixWorld),this.union(bo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rr),So.subVectors(this.max,Rr),Ds.subVectors(e.a,Rr),Ls.subVectors(e.b,Rr),Ns.subVectors(e.c,Rr),zi.subVectors(Ls,Ds),Hi.subVectors(Ns,Ls),ls.subVectors(Ds,Ns);let t=[0,-zi.z,zi.y,0,-Hi.z,Hi.y,0,-ls.z,ls.y,zi.z,0,-zi.x,Hi.z,0,-Hi.x,ls.z,0,-ls.x,-zi.y,zi.x,0,-Hi.y,Hi.x,0,-ls.y,ls.x,0];return!dl(t,Ds,Ls,Ns,So)||(t=[1,0,0,0,1,0,0,0,1],!dl(t,Ds,Ls,Ns,So))?!1:(Eo.crossVectors(zi,Hi),t=[Eo.x,Eo.y,Eo.z],dl(t,Ds,Ls,Ns,So))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const vi=[new q,new q,new q,new q,new q,new q,new q,new q],jn=new q,bo=new _r,Ds=new q,Ls=new q,Ns=new q,zi=new q,Hi=new q,ls=new q,Rr=new q,So=new q,Eo=new q,cs=new q;function dl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){cs.fromArray(n,r);const a=s.x*Math.abs(cs.x)+s.y*Math.abs(cs.y)+s.z*Math.abs(cs.z),l=e.dot(cs),c=t.dot(cs),u=i.dot(cs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const I0=new _r,Cr=new q,pl=new q;class xr{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):I0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cr.subVectors(e,this.center);const t=Cr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Cr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cr.copy(e.center).add(pl)),this.expandByPoint(Cr.copy(e.center).sub(pl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Mi=new q,ml=new q,To=new q,Gi=new q,gl=new q,Ao=new q,_l=new q;class lo{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,t),Mi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ml.copy(e).add(t).multiplyScalar(.5),To.copy(t).sub(e).normalize(),Gi.copy(this.origin).sub(ml);const r=e.distanceTo(t)*.5,o=-this.direction.dot(To),a=Gi.dot(this.direction),l=-Gi.dot(To),c=Gi.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*l-a,f=o*a-l,_=r*u,h>=0)if(f>=-_)if(f<=_){const x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ml).addScaledVector(To,f),d}intersectSphere(e,t){Mi.subVectors(e.center,this.origin);const i=Mi.dot(this.direction),s=Mi.dot(Mi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,t,i,s,r){gl.subVectors(t,e),Ao.subVectors(i,e),_l.crossVectors(gl,Ao);let o=this.direction.dot(_l),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gi.subVectors(this.origin,e);const l=a*this.direction.dot(Ao.crossVectors(Gi,Ao));if(l<0)return null;const c=a*this.direction.dot(gl.cross(Gi));if(c<0||l+c>o)return null;const u=-a*Gi.dot(_l);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,i,s,r,o,a,l,c,u,h,f,d,_,x,m){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,f,d,_,x,m)}set(e,t,i,s,r,o,a,l,c,u,h,f,d,_,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Is.setFromMatrixColumn(e,0).length(),r=1/Is.setFromMatrixColumn(e,1).length(),o=1/Is.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,_=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,x=c*h;t[0]=f+x*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,_=a*u,x=a*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=_*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-x*h}else if(e.order==="XZY"){const f=o*l,d=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(U0,e,F0)}lookAt(e,t,i){const s=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Wi.crossVectors(i,Dn),Wi.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Wi.crossVectors(i,Dn)),Wi.normalize(),wo.crossVectors(Dn,Wi),s[0]=Wi.x,s[4]=wo.x,s[8]=Dn.x,s[1]=Wi.y,s[5]=wo.y,s[9]=Dn.y,s[2]=Wi.z,s[6]=wo.z,s[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],_=i[2],x=i[6],m=i[10],p=i[14],A=i[3],D=i[7],T=i[11],R=i[15],N=s[0],L=s[4],I=s[8],v=s[12],b=s[1],F=s[5],z=s[9],G=s[13],se=s[2],ne=s[6],k=s[10],W=s[14],Y=s[3],xe=s[7],ye=s[11],ie=s[15];return r[0]=o*N+a*b+l*se+c*Y,r[4]=o*L+a*F+l*ne+c*xe,r[8]=o*I+a*z+l*k+c*ye,r[12]=o*v+a*G+l*W+c*ie,r[1]=u*N+h*b+f*se+d*Y,r[5]=u*L+h*F+f*ne+d*xe,r[9]=u*I+h*z+f*k+d*ye,r[13]=u*v+h*G+f*W+d*ie,r[2]=_*N+x*b+m*se+p*Y,r[6]=_*L+x*F+m*ne+p*xe,r[10]=_*I+x*z+m*k+p*ye,r[14]=_*v+x*G+m*W+p*ie,r[3]=A*N+D*b+T*se+R*Y,r[7]=A*L+D*F+T*ne+R*xe,r[11]=A*I+D*z+T*k+R*ye,r[15]=A*v+D*G+T*W+R*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],x=e[7],m=e[11],p=e[15],A=l*d-c*f,D=a*d-c*h,T=a*f-l*h,R=o*d-c*u,N=o*f-l*u,L=o*h-a*u;return t*(x*A-m*D+p*T)-i*(_*A-m*R+p*N)+s*(_*D-x*R+p*L)-r*(_*T-x*N+m*L)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],x=e[13],m=e[14],p=e[15],A=h*m*c-x*f*c+x*l*d-a*m*d-h*l*p+a*f*p,D=_*f*c-u*m*c-_*l*d+o*m*d+u*l*p-o*f*p,T=u*x*c-_*h*c+_*a*d-o*x*d-u*a*p+o*h*p,R=_*h*l-u*x*l-_*a*f+o*x*f+u*a*m-o*h*m,N=t*A+i*D+s*T+r*R;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/N;return e[0]=A*L,e[1]=(x*f*r-h*m*r-x*s*d+i*m*d+h*s*p-i*f*p)*L,e[2]=(a*m*r-x*l*r+x*s*c-i*m*c-a*s*p+i*l*p)*L,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*d-i*l*d)*L,e[4]=D*L,e[5]=(u*m*r-_*f*r+_*s*d-t*m*d-u*s*p+t*f*p)*L,e[6]=(_*l*r-o*m*r-_*s*c+t*m*c+o*s*p-t*l*p)*L,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*d+t*l*d)*L,e[8]=T*L,e[9]=(_*h*r-u*x*r-_*i*d+t*x*d+u*i*p-t*h*p)*L,e[10]=(o*x*r-_*a*r+_*i*c-t*x*c-o*i*p+t*a*p)*L,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*d-t*a*d)*L,e[12]=R*L,e[13]=(u*x*s-_*h*s+_*i*f-t*x*f-u*i*m+t*h*m)*L,e[14]=(_*a*s-o*x*s-_*i*l+t*x*l+o*i*m-t*a*m)*L,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*f+t*a*f)*L,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,_=r*h,x=o*u,m=o*h,p=a*h,A=l*c,D=l*u,T=l*h,R=i.x,N=i.y,L=i.z;return s[0]=(1-(x+p))*R,s[1]=(d+T)*R,s[2]=(_-D)*R,s[3]=0,s[4]=(d-T)*N,s[5]=(1-(f+p))*N,s[6]=(m+A)*N,s[7]=0,s[8]=(_+D)*L,s[9]=(m-A)*L,s[10]=(1-(f+x))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let r=Is.set(s[0],s[1],s[2]).length();const o=Is.set(s[4],s[5],s[6]).length(),a=Is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),Yn.copy(this);const c=1/r,u=1/o,h=1/a;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=u,Yn.elements[5]*=u,Yn.elements[6]*=u,Yn.elements[8]*=h,Yn.elements[9]*=h,Yn.elements[10]*=h,t.setFromRotationMatrix(Yn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=li,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s);let _,x;if(l)_=r/(o-r),x=o*r/(o-r);else if(a===li)_=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===xa)_=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=li,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-s),f=-(t+e)/(t-e),d=-(i+s)/(i-s);let _,x;if(l)_=1/(o-r),x=o/(o-r);else if(a===li)_=-2/(o-r),x=-(o+r)/(o-r);else if(a===xa)_=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Is=new q,Yn=new ct,U0=new q(0,0,0),F0=new q(1,1,1),Wi=new q,wo=new q,Dn=new q,Fh=new ct,Oh=new Xn;class Cn{constructor(e=0,t=0,i=0,s=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Fh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Oh.setFromEuler(this),this.setFromQuaternion(Oh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class Ru{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let O0=0;const Bh=new q,Us=new Xn,yi=new ct,Ro=new q,Pr=new q,B0=new q,k0=new Xn,kh=new q(1,0,0),Vh=new q(0,1,0),zh=new q(0,0,1),Hh={type:"added"},V0={type:"removed"},Fs={type:"childadded",child:null},xl={type:"childremoved",child:null};class Xt extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new q,t=new Cn,i=new Xn,s=new q(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new mt}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ru,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(kh,e)}rotateY(e){return this.rotateOnAxis(Vh,e)}rotateZ(e){return this.rotateOnAxis(zh,e)}translateOnAxis(e,t){return Bh.copy(e).applyQuaternion(this.quaternion),this.position.add(Bh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kh,e)}translateY(e){return this.translateOnAxis(Vh,e)}translateZ(e){return this.translateOnAxis(zh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ro.copy(e):Ro.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(Pr,Ro,this.up):yi.lookAt(Ro,Pr,this.up),this.quaternion.setFromRotationMatrix(yi),s&&(yi.extractRotation(s.matrixWorld),Us.setFromRotationMatrix(yi),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(_t("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hh),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):_t("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(V0),xl.child=e,this.dispatchEvent(xl),xl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hh),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,e,B0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,k0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Xt.DEFAULT_UP=new q(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $n=new q,bi=new q,vl=new q,Si=new q,Os=new q,Bs=new q,Gh=new q,Ml=new q,yl=new q,bl=new q,Sl=new kt,El=new kt,Tl=new kt;class zn{constructor(e=new q,t=new q,i=new q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),$n.subVectors(e,t),s.cross($n);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){$n.subVectors(s,t),bi.subVectors(i,t),vl.subVectors(e,t);const o=$n.dot($n),a=$n.dot(bi),l=$n.dot(vl),c=bi.dot(bi),u=bi.dot(vl),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,_=(o*u-a*l)*f;return r.set(1-d-_,_,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Si.x),l.addScaledVector(o,Si.y),l.addScaledVector(a,Si.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Sl.setScalar(0),El.setScalar(0),Tl.setScalar(0),Sl.fromBufferAttribute(e,t),El.fromBufferAttribute(e,i),Tl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Sl,r.x),o.addScaledVector(El,r.y),o.addScaledVector(Tl,r.z),o}static isFrontFacing(e,t,i,s){return $n.subVectors(i,t),bi.subVectors(e,t),$n.cross(bi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),$n.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return zn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Os.subVectors(s,i),Bs.subVectors(r,i),Ml.subVectors(e,i);const l=Os.dot(Ml),c=Bs.dot(Ml);if(l<=0&&c<=0)return t.copy(i);yl.subVectors(e,s);const u=Os.dot(yl),h=Bs.dot(yl);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Os,o);bl.subVectors(e,r);const d=Os.dot(bl),_=Bs.dot(bl);if(_>=0&&d<=_)return t.copy(r);const x=d*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(Bs,a);const m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return Gh.subVectors(r,s),a=(h-u)/(h-u+(d-_)),t.copy(s).addScaledVector(Gh,a);const p=1/(m+x+f);return o=x*p,a=f*p,t.copy(i).addScaledVector(Os,o).addScaledVector(Bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},Co={h:0,s:0,l:0};function Al(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ft{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Mt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Mt.workingColorSpace){if(e=Au(e,1),t=vt(t,0,1),i=vt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Al(o,r,e+1/3),this.g=Al(o,r,e),this.b=Al(o,r,e-1/3)}return Mt.colorSpaceToWorking(this,s),this}setStyle(e,t=Wt){function i(r){r!==void 0&&parseFloat(r)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:it("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const i=fp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return Mt.workingToColorSpace(ln.copy(this),e),Math.round(vt(ln.r*255,0,255))*65536+Math.round(vt(ln.g*255,0,255))*256+Math.round(vt(ln.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.workingToColorSpace(ln.copy(this),t);const i=ln.r,s=ln.g,r=ln.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Mt.workingColorSpace){return Mt.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=Wt){Mt.workingToColorSpace(ln.copy(this),e);const t=ln.r,i=ln.g,s=ln.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+t,Xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xi),e.getHSL(Co);const i=Xr(Xi.h,Co.h,t),s=Xr(Xi.s,Co.s,t),r=Xr(Xi.l,Co.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new ft;ft.NAMES=fp;let z0=0;class Ss extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=rs(),this.name="",this.type="Material",this.blending=nr,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nc,this.blendDst=ic,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){it(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){it(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(i.blending=this.blending),this.side!==Fi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==nc&&(i.blendSrc=this.blendSrc),this.blendDst!==ic&&(i.blendDst=this.blendDst),this.blendEquation!==ms&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ar&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class io extends Ss{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Ua,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new q,Po=new at;let H0=0;class kn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:H0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Rh,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Po.fromBufferAttribute(this,t),Po.applyMatrix3(e),this.setXY(t,Po.x,Po.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=js(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Mn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=js(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=js(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=js(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=js(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),i=Mn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),i=Mn(i,this.array),s=Mn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),i=Mn(i,this.array),s=Mn(s,this.array),r=Mn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rh&&(e.usage=this.usage),e}}class dp extends kn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class pp extends kn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class wt extends kn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let G0=0;const Vn=new ct,wl=new Xt,ks=new q,Ln=new _r,Dr=new _r,Qt=new q;class en extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(up(e)?pp:dp)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new mt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,i){return Vn.makeTranslation(e,t,i),this.applyMatrix4(Vn),this}scale(e,t,i){return Vn.makeScale(e,t,i),this.applyMatrix4(Vn),this}lookAt(e){return wl.lookAt(e),wl.updateMatrix(),this.applyMatrix4(wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new wt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _r);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&_t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Dr.setFromBufferAttribute(a),this.morphTargetsRelative?(Qt.addVectors(Ln.min,Dr.min),Ln.expandByPoint(Qt),Qt.addVectors(Ln.max,Dr.max),Ln.expandByPoint(Qt)):(Ln.expandByPoint(Dr.min),Ln.expandByPoint(Dr.max))}Ln.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Qt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Qt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Qt.fromBufferAttribute(a,c),l&&(ks.fromBufferAttribute(e,c),Qt.add(ks)),s=Math.max(s,i.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&_t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){_t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new q,l[I]=new q;const c=new q,u=new q,h=new q,f=new at,d=new at,_=new at,x=new q,m=new q;function p(I,v,b){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,v),h.fromBufferAttribute(i,b),f.fromBufferAttribute(r,I),d.fromBufferAttribute(r,v),_.fromBufferAttribute(r,b),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const F=1/(d.x*_.y-_.x*d.y);isFinite(F)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(F),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(F),a[I].add(x),a[v].add(x),a[b].add(x),l[I].add(m),l[v].add(m),l[b].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let I=0,v=A.length;I<v;++I){const b=A[I],F=b.start,z=b.count;for(let G=F,se=F+z;G<se;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const D=new q,T=new q,R=new q,N=new q;function L(I){R.fromBufferAttribute(s,I),N.copy(R);const v=a[I];D.copy(v),D.sub(R.multiplyScalar(R.dot(v))).normalize(),T.crossVectors(N,v);const F=T.dot(l[I])<0?-1:1;o.setXYZW(I,D.x,D.y,D.z,F)}for(let I=0,v=A.length;I<v;++I){const b=A[I],F=b.start,z=b.count;for(let G=F,se=F+z;G<se;G+=3)L(e.getX(G+0)),L(e.getX(G+1)),L(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new kn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new q,r=new q,o=new q,a=new q,l=new q,c=new q,u=new q,h=new q;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let p=0;p<u;p++)f[_++]=c[d++]}return new kn(f,u,h)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new en,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wh=new ct,us=new lo,Do=new xr,Xh=new q,Lo=new q,No=new q,Io=new q,Rl=new q,Uo=new q,qh=new q,Fo=new q;class pn extends Xt{constructor(e=new en,t=new io){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Uo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Rl.fromBufferAttribute(h,e),o?Uo.addScaledVector(Rl,u):Uo.addScaledVector(Rl.sub(t),u))}t.add(Uo)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Do.copy(i.boundingSphere),Do.applyMatrix4(r),us.copy(e.ray).recast(e.near),!(Do.containsPoint(us.origin)===!1&&(us.intersectSphere(Do,Xh)===null||us.origin.distanceToSquared(Xh)>(e.far-e.near)**2))&&(Wh.copy(r).invert(),us.copy(e.ray).applyMatrix4(Wh),!(i.boundingBox!==null&&us.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,us)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const m=f[_],p=o[m.materialIndex],A=Math.max(m.start,d.start),D=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let T=A,R=D;T<R;T+=3){const N=a.getX(T),L=a.getX(T+1),I=a.getX(T+2);s=Oo(this,p,e,i,c,u,h,N,L,I),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=_,p=x;m<p;m+=3){const A=a.getX(m),D=a.getX(m+1),T=a.getX(m+2);s=Oo(this,o,e,i,c,u,h,A,D,T),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const m=f[_],p=o[m.materialIndex],A=Math.max(m.start,d.start),D=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let T=A,R=D;T<R;T+=3){const N=T,L=T+1,I=T+2;s=Oo(this,p,e,i,c,u,h,N,L,I),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=_,p=x;m<p;m+=3){const A=m,D=m+1,T=m+2;s=Oo(this,o,e,i,c,u,h,A,D,T),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function W0(n,e,t,i,s,r,o,a){let l;if(e.side===Rn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Fi,a),l===null)return null;Fo.copy(a),Fo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Fo);return c<t.near||c>t.far?null:{distance:c,point:Fo.clone(),object:n}}function Oo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Lo),n.getVertexPosition(l,No),n.getVertexPosition(c,Io);const u=W0(n,e,t,i,Lo,No,Io,qh);if(u){const h=new q;zn.getBarycoord(qh,Lo,No,Io,h),s&&(u.uv=zn.getInterpolatedAttribute(s,a,l,c,h,new at)),r&&(u.uv1=zn.getInterpolatedAttribute(r,a,l,c,h,new at)),o&&(u.normal=zn.getInterpolatedAttribute(o,a,l,c,h,new q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new q,materialIndex:0};zn.getNormal(Lo,No,Io,f.normal),u.face=f,u.barycoord=h}return u}class vr extends en{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new wt(c,3)),this.setAttribute("normal",new wt(u,3)),this.setAttribute("uv",new wt(h,2));function _(x,m,p,A,D,T,R,N,L,I,v){const b=T/L,F=R/I,z=T/2,G=R/2,se=N/2,ne=L+1,k=I+1;let W=0,Y=0;const xe=new q;for(let ye=0;ye<k;ye++){const ie=ye*F-G;for(let te=0;te<ne;te++){const J=te*b-z;xe[x]=J*A,xe[m]=ie*D,xe[p]=se,c.push(xe.x,xe.y,xe.z),xe[x]=0,xe[m]=0,xe[p]=N>0?1:-1,u.push(xe.x,xe.y,xe.z),h.push(te/L),h.push(1-ye/I),W+=1}}for(let ye=0;ye<I;ye++)for(let ie=0;ie<L;ie++){const te=f+ie+ne*ye,J=f+ie+ne*(ye+1),Me=f+(ie+1)+ne*(ye+1),pe=f+(ie+1)+ne*ye;l.push(te,J,pe),l.push(J,Me,pe),Y+=6}a.addGroup(d,Y,v),d+=Y,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function yn(n){const e={};for(let t=0;t<n.length;t++){const i=fr(n[t]);for(const s in i)e[s]=i[s]}return e}function X0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function mp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const q0={clone:fr,merge:yn};var j0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Y0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends Ss{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=j0,this.fragmentShader=Y0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fr(e.uniforms),this.uniformsGroups=X0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class gp extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qi=new q,jh=new at,Yh=new at;class fn extends gp{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hr*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,t){return this.getViewBounds(e,jh,Yh),t.subVectors(Yh,jh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ir*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vs=-90,zs=1;class $0 extends Xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new fn(Vs,zs,e,t);s.layers=this.layers,this.add(s);const r=new fn(Vs,zs,e,t);r.layers=this.layers,this.add(r);const o=new fn(Vs,zs,e,t);o.layers=this.layers,this.add(o);const a=new fn(Vs,zs,e,t);a.layers=this.layers,this.add(a);const l=new fn(Vs,zs,e,t);l.layers=this.layers,this.add(l);const c=new fn(Vs,zs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===li)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class _p extends gn{constructor(e=[],t=ys,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xp extends hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new _p(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vr(5,5,5),r=new pi({name:"CubemapFromEquirect",uniforms:fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rn,blending:Pi});r.uniforms.tEquirect.value=t;const o=new pn(s,r),a=t.minFilter;return t.minFilter===Ri&&(t.minFilter=Kt),new $0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class Ks extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const K0={type:"move"};class Cl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ks,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ks,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ks,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(K0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ks;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class vp extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const $h=new q,Kh=new kt,Jh=new kt,J0=new q,Zh=new ct,Bo=new q,Pl=new xr,Qh=new ct,Dl=new lo;class Z0 extends pn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Sh,this.bindMatrix=new ct,this.bindMatrixInverse=new ct,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new _r),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Bo),this.boundingBox.expandByPoint(Bo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new xr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Bo),this.boundingSphere.expandByPoint(Bo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pl.copy(this.boundingSphere),Pl.applyMatrix4(s),e.ray.intersectsSphere(Pl)!==!1&&(Qh.copy(s).invert(),Dl.copy(e.ray).applyMatrix4(Qh),!(this.boundingBox!==null&&Dl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Dl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new kt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Sh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Z_?this.bindMatrixInverse.copy(this.bindMatrix).invert():it("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Kh.fromBufferAttribute(s.attributes.skinIndex,e),Jh.fromBufferAttribute(s.attributes.skinWeight,e),$h.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Jh.getComponent(r);if(o!==0){const a=Kh.getComponent(r);Zh.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(J0.copy($h).applyMatrix4(Zh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Mp extends Xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Cu extends gn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=rn,u=rn,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ef=new ct,Q0=new ct;class Pu{constructor(e=[],t=[]){this.uuid=rs(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){it("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new ct)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new ct;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Q0;ef.multiplyMatrices(a,t[r]),ef.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Pu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Cu(t,e,e,Hn,Kn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(it("Skeleton: No bone found with UUID:",r),o=new Mp),this.bones.push(o),this.boneInverses.push(new ct().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}const Ll=new q,ex=new q,tx=new mt;class Ji{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ll.subVectors(i,t).cross(ex.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ll),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||tx.getNormalMatrix(e),s=this.coplanarPoint(Ll).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hs=new xr,nx=new at(.5,.5),ko=new q;class Du{constructor(e=new Ji,t=new Ji,i=new Ji,s=new Ji,r=new Ji,o=new Ji){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=li,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],_=r[8],x=r[9],m=r[10],p=r[11],A=r[12],D=r[13],T=r[14],R=r[15];if(s[0].setComponents(c-o,d-u,p-_,R-A).normalize(),s[1].setComponents(c+o,d+u,p+_,R+A).normalize(),s[2].setComponents(c+a,d+h,p+x,R+D).normalize(),s[3].setComponents(c-a,d-h,p-x,R-D).normalize(),i)s[4].setComponents(l,f,m,T).normalize(),s[5].setComponents(c-l,d-f,p-m,R-T).normalize();else if(s[4].setComponents(c-l,d-f,p-m,R-T).normalize(),t===li)s[5].setComponents(c+l,d+f,p+m,R+T).normalize();else if(t===xa)s[5].setComponents(l,f,m,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){hs.center.set(0,0,0);const t=nx.distanceTo(e.center);return hs.radius=.7071067811865476+t,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ko.x=s.normal.x>0?e.max.x:e.min.x,ko.y=s.normal.y>0?e.max.y:e.min.y,ko.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ko)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dr extends Ss{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const va=new q,Ma=new q,tf=new ct,Lr=new lo,Vo=new xr,Nl=new q,nf=new q;class yp extends Xt{constructor(e=new en,t=new dr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)va.fromBufferAttribute(t,s-1),Ma.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=va.distanceTo(Ma);e.setAttribute("lineDistance",new wt(i,1))}else it("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vo.copy(i.boundingSphere),Vo.applyMatrix4(s),Vo.radius+=r,e.ray.intersectsSphere(Vo)===!1)return;tf.copy(s).invert(),Lr.copy(e.ray).applyMatrix4(tf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let x=d,m=_-1;x<m;x+=c){const p=u.getX(x),A=u.getX(x+1),D=zo(this,e,Lr,l,p,A,x);D&&t.push(D)}if(this.isLineLoop){const x=u.getX(_-1),m=u.getX(d),p=zo(this,e,Lr,l,x,m,_-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let x=d,m=_-1;x<m;x+=c){const p=zo(this,e,Lr,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){const x=zo(this,e,Lr,l,_-1,d,_-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function zo(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(va.fromBufferAttribute(a,s),Ma.fromBufferAttribute(a,r),t.distanceSqToSegment(va,Ma,Nl,nf)>i)return;Nl.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Nl);if(!(c<e.near||c>e.far))return{distance:c,point:nf.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const sf=new q,rf=new q;class Oa extends yp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)sf.fromBufferAttribute(t,s),rf.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+sf.distanceTo(rf);e.setAttribute("lineDistance",new wt(i,1))}else it("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class so extends gn{constructor(e,t,i=di,s,r,o,a=rn,l=rn,c,u=Bi,h=1){if(u!==Bi&&u!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ix extends so{constructor(e,t=di,i=ys,s,r,o=rn,a=rn,l,c=Bi){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class bp extends gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Lu extends en{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let _=0;const x=[],m=i/2;let p=0;A(),o===!1&&(e>0&&D(!0),t>0&&D(!1)),this.setIndex(u),this.setAttribute("position",new wt(h,3)),this.setAttribute("normal",new wt(f,3)),this.setAttribute("uv",new wt(d,2));function A(){const T=new q,R=new q;let N=0;const L=(t-e)/i;for(let I=0;I<=r;I++){const v=[],b=I/r,F=b*(t-e)+e;for(let z=0;z<=s;z++){const G=z/s,se=G*l+a,ne=Math.sin(se),k=Math.cos(se);R.x=F*ne,R.y=-b*i+m,R.z=F*k,h.push(R.x,R.y,R.z),T.set(ne,L,k).normalize(),f.push(T.x,T.y,T.z),d.push(G,1-b),v.push(_++)}x.push(v)}for(let I=0;I<s;I++)for(let v=0;v<r;v++){const b=x[v][I],F=x[v+1][I],z=x[v+1][I+1],G=x[v][I+1];(e>0||v!==0)&&(u.push(b,F,G),N+=3),(t>0||v!==r-1)&&(u.push(F,z,G),N+=3)}c.addGroup(p,N,0),p+=N}function D(T){const R=_,N=new at,L=new q;let I=0;const v=T===!0?e:t,b=T===!0?1:-1;for(let z=1;z<=s;z++)h.push(0,m*b,0),f.push(0,b,0),d.push(.5,.5),_++;const F=_;for(let z=0;z<=s;z++){const se=z/s*l+a,ne=Math.cos(se),k=Math.sin(se);L.x=v*k,L.y=m*b,L.z=v*ne,h.push(L.x,L.y,L.z),f.push(0,b,0),N.x=ne*.5+.5,N.y=k*.5*b+.5,d.push(N.x,N.y),_++}for(let z=0;z<s;z++){const G=R+z,se=F+z;T===!0?u.push(se,se+1,G):u.push(se+1,se,G),I+=3}c.addGroup(p,I,T===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Ho=new q,Go=new q,Il=new q,Wo=new zn;class sx extends en{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(ir*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:x,b:m,c:p}=Wo;if(x.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),Wo.getNormal(Il),h[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let A=0;A<3;A++){const D=(A+1)%3,T=h[A],R=h[D],N=Wo[u[A]],L=Wo[u[D]],I=`${T}_${R}`,v=`${R}_${T}`;v in f&&f[v]?(Il.dot(f[v].normal)<=r&&(d.push(N.x,N.y,N.z),d.push(L.x,L.y,L.z)),f[v]=null):I in f||(f[I]={index0:c[A],index1:c[D],normal:Il.clone()})}}for(const _ in f)if(f[_]){const{index0:x,index1:m}=f[_];Ho.fromBufferAttribute(a,x),Go.fromBufferAttribute(a,m),d.push(Ho.x,Ho.y,Ho.z),d.push(Go.x,Go.y,Go.z)}this.setAttribute("position",new wt(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ba extends en{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,d=[],_=[],x=[],m=[];for(let p=0;p<u;p++){const A=p*f-o;for(let D=0;D<c;D++){const T=D*h-r;_.push(T,-A,0),x.push(0,0,1),m.push(D/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<a;A++){const D=A+c*p,T=A+c*(p+1),R=A+1+c*(p+1),N=A+1+c*p;d.push(D,T,N),d.push(T,R,N)}this.setIndex(d),this.setAttribute("position",new wt(_,3)),this.setAttribute("normal",new wt(x,3)),this.setAttribute("uv",new wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ba(e.width,e.height,e.widthSegments,e.heightSegments)}}class Nu extends en{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new q,f=new q,d=[],_=[],x=[],m=[];for(let p=0;p<=i;p++){const A=[],D=p/i;let T=0;p===0&&o===0?T=.5/t:p===i&&l===Math.PI&&(T=-.5/t);for(let R=0;R<=t;R++){const N=R/t;h.x=-e*Math.cos(s+N*r)*Math.sin(o+D*a),h.y=e*Math.cos(o+D*a),h.z=e*Math.sin(s+N*r)*Math.sin(o+D*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(N+T,1-D),A.push(c++)}u.push(A)}for(let p=0;p<i;p++)for(let A=0;A<t;A++){const D=u[p][A+1],T=u[p][A],R=u[p+1][A],N=u[p+1][A+1];(p!==0||o>0)&&d.push(D,T,N),(p!==i-1||l<Math.PI)&&d.push(T,R,N)}this.setIndex(d),this.setAttribute("position",new wt(_,3)),this.setAttribute("normal",new wt(x,3)),this.setAttribute("uv",new wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class rx extends pi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qr extends Ss{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ft(16777215),this.specular=new ft(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Su,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Ua,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ox extends Ss{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Su,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Ua,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ax extends Ss{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=t0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lx extends Ss{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Xo(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function cx(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function of(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function Sp(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push(...o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class ka{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ux extends ka{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Eh,endingEnd:Eh}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Th:r=e,a=2*t-i;break;case Ah:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Th:o=e,l=2*i-t;break;case Ah:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(i-t)/(s-t),x=_*_,m=x*_,p=-f*m+2*f*x-f*_,A=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*_+1,D=(-1-d)*m+(1.5+d)*x+.5*_,T=d*m-d*x;for(let R=0;R!==a;++R)r[R]=p*o[u+R]+A*o[c+R]+D*o[l+R]+T*o[h+R];return r}}class hx extends ka{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class fx extends ka{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Qn{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xo(t,this.TimeBufferType),this.values=Xo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Xo(e.times,Array),values:Xo(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new fx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ux(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ga:t=this.InterpolantFactoryMethodDiscrete;break;case qc:t=this.InterpolantFactoryMethodLinear;break;case ll:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return it("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ga;case this.InterpolantFactoryMethodLinear:return qc;case this.InterpolantFactoryMethodSmooth:return ll}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(_t("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(_t("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){_t("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){_t("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&c0(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){_t("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ll,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*i,f=h-i,d=h+i;for(let _=0;_!==i;++_){const x=t[h+_];if(x!==t[f+_]||x!==t[d+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Qn.prototype.ValueTypeName="";Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=qc;class Mr extends Qn{constructor(e,t,i){super(e,t,i)}}Mr.prototype.ValueTypeName="bool";Mr.prototype.ValueBufferType=Array;Mr.prototype.DefaultInterpolation=ga;Mr.prototype.InterpolantFactoryMethodLinear=void 0;Mr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ep extends Qn{constructor(e,t,i,s){super(e,t,i,s)}}Ep.prototype.ValueTypeName="color";class ya extends Qn{constructor(e,t,i,s){super(e,t,i,s)}}ya.prototype.ValueTypeName="number";class dx extends ka{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Xn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class co extends Qn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new dx(this.times,this.values,this.getValueSize(),e)}}co.prototype.ValueTypeName="quaternion";co.prototype.InterpolantFactoryMethodSmooth=void 0;class yr extends Qn{constructor(e,t,i){super(e,t,i)}}yr.prototype.ValueTypeName="string";yr.prototype.ValueBufferType=Array;yr.prototype.DefaultInterpolation=ga;yr.prototype.InterpolantFactoryMethodLinear=void 0;yr.prototype.InterpolantFactoryMethodSmooth=void 0;class pr extends Qn{constructor(e,t,i,s){super(e,t,i,s)}}pr.prototype.ValueTypeName="vector";class af{constructor(e="",t=-1,i=[],s=e0){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=rs(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(mx(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=i.length;r!==o;++r)t.push(Qn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=cx(l);l=of(l,1,u),c=of(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new ya(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(it("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return _t("AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,d,_,x){if(d.length!==0){const m=[],p=[];Sp(d,m,p,_),m.length!==0&&x.push(new h(f,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let x=0;x<f[_].morphTargets.length;x++)d[f[_].morphTargets[x]]=-1;for(const x in d){const m=[],p=[];for(let A=0;A!==f[_].morphTargets.length;++A){const D=f[_];m.push(D.time),p.push(D.morphTarget===x?1:0)}s.push(new ya(".morphTargetInfluence["+x+"]",m,p))}l=d.length*o}else{const d=".bones["+t[h].name+"]";i(pr,d+".position",f,"pos",s),i(co,d+".quaternion",f,"rot",s),i(pr,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function px(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ya;case"vector":case"vector2":case"vector3":case"vector4":return pr;case"color":return Ep;case"quaternion":return co;case"bool":case"boolean":return Mr;case"string":return yr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function mx(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=px(n.type);if(n.times===void 0){const t=[],i=[];Sp(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const jr={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Tp{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],_=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Ap=new Tp;class ns{constructor(e){this.manager=e!==void 0?e:Ap,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ns.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ei={};class gx extends Error{constructor(e,t){super(e),this.response=t}}class Iu extends ns{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=jr.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ei[e]!==void 0){Ei[e].push({onLoad:t,onProgress:i,onError:s});return}Ei[e]=[],Ei[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&it("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ei[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,_=d!==0;let x=0;const m=new ReadableStream({start(p){A();function A(){h.read().then(({done:D,value:T})=>{if(D)p.close();else{x+=T.byteLength;const R=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:d});for(let N=0,L=u.length;N<L;N++){const I=u[N];I.onProgress&&I.onProgress(R)}p.enqueue(T),A()}},D=>{p.error(D)})}}});return new Response(m)}else throw new gx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{jr.add(`file:${e}`,c);const u=Ei[e];delete Ei[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Ei[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ei[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Hs=new WeakMap;class _x extends ns{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=jr.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=Hs.get(o);h===void 0&&(h=[],Hs.set(o,h)),h.push({onLoad:t,onError:s})}return o}const a=to("img");function l(){u(),t&&t(this);const h=Hs.get(this)||[];for(let f=0;f<h.length;f++){const d=h[f];d.onLoad&&d.onLoad(this)}Hs.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),jr.remove(`image:${e}`);const f=Hs.get(this)||[];for(let d=0;d<f.length;d++){const _=f[d];_.onError&&_.onError(h)}Hs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),jr.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class xx extends ns{constructor(e){super(e)}load(e,t,i,s){const r=this,o=new Cu,a=new Iu(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(u){if(s!==void 0)s(u);else{u(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Bn,o.wrapT=c.wrapT!==void 0?c.wrapT:Bn,o.magFilter=c.magFilter!==void 0?c.magFilter:Kt,o.minFilter=c.minFilter!==void 0?c.minFilter:Kt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Ri),c.mipmapCount===1&&(o.minFilter=Kt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},i,s),o}}class wp extends ns{constructor(e){super(e)}load(e,t,i,s){const r=new gn,o=new _x(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Va extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Ul=new ct,lf=new q,cf=new q;class Uu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Du,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;lf.setFromMatrixPosition(e.matrixWorld),t.position.copy(lf),cf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cf),t.updateMatrixWorld(),Ul.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ul,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ul)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class vx extends Uu{constructor(){super(new fn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=hr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Mx extends Va{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new vx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class yx extends Uu{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0}}class bx extends Va{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new yx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class za extends gp{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Sx extends Uu{constructor(){super(new za(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rp extends Va{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new Sx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Cp extends Va{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Pp{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Ex extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const uf=new ct;class Tx{constructor(e,t,i=0,s=1/0){this.ray=new lo(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Ru,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):_t("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return uf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(uf),this}intersectObject(e,t=!0,i=[]){return jc(e,this,i,t),i.sort(hf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)jc(e[s],this,i,t);return i.sort(hf),i}}function hf(n,e){return n.distance-e.distance}function jc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)jc(r[o],e,t,!0)}}class ff{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=vt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ax extends Oa{constructor(e=10,t=10,i=4473924,s=8947848){i=new ft(i),s=new ft(s);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,d=0,_=-a;f<=t;f++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const x=f===r?i:s;x.toArray(c,d),d+=3,x.toArray(c,d),d+=3,x.toArray(c,d),d+=3,x.toArray(c,d),d+=3}const u=new en;u.setAttribute("position",new wt(l,3)),u.setAttribute("color",new wt(c,3));const h=new dr({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class wx extends Oa{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new en;s.setAttribute("position",new wt(t,3)),s.setAttribute("color",new wt(i,3));const r=new dr({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,i){const s=new ft,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(i),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Rx extends bs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){it("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function df(n,e,t,i){const s=Cx(i);switch(t){case ap:return n*e;case cp:return n*e/s.components*s.byteLength;case Mu:return n*e/s.components*s.byteLength;case cr:return n*e*2/s.components*s.byteLength;case yu:return n*e*2/s.components*s.byteLength;case lp:return n*e*3/s.components*s.byteLength;case Hn:return n*e*4/s.components*s.byteLength;case bu:return n*e*4/s.components*s.byteLength;case sa:case ra:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case oa:case aa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case mc:case _c:return Math.max(n,16)*Math.max(e,8)/4;case pc:case gc:return Math.max(n,8)*Math.max(e,8)/2;case xc:case vc:case yc:case bc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Mc:case Sc:case Ec:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ac:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case wc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Pc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Lc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Nc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Uc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Fc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Oc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Bc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case kc:case Vc:case zc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Hc:case Gc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Wc:case Xc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Cx(n){switch(n){case In:case ip:return{byteLength:1,components:1};case Qr:case sp:case Oi:return{byteLength:2,components:1};case xu:case vu:return{byteLength:2,components:4};case di:case _u:case Kn:return{byteLength:4,components:1};case rp:case op:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gu}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gu);function Dp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Px(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){const _=h[f],x=h[d];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){const x=h[d];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Dx=`#ifdef USE_ALPHAHASH
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
#endif`,Jx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zx=`#if defined( USE_COLOR_ALPHA )
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bv=`uniform bool receiveShadow;
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
#endif`,Sv=`#ifdef USE_ENVMAP
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
#endif`,Jv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zv=`#ifndef FLAT_SHADED
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
#endif`,bM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,SM=`#ifndef saturate
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
}`,JM=`#define NORMAL
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
}`,ZM=`#define PHONG
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
}`,gt={alphahash_fragment:Dx,alphahash_pars_fragment:Lx,alphamap_fragment:Nx,alphamap_pars_fragment:Ix,alphatest_fragment:Ux,alphatest_pars_fragment:Fx,aomap_fragment:Ox,aomap_pars_fragment:Bx,batching_pars_vertex:kx,batching_vertex:Vx,begin_vertex:zx,beginnormal_vertex:Hx,bsdfs:Gx,iridescence_fragment:Wx,bumpmap_pars_fragment:Xx,clipping_planes_fragment:qx,clipping_planes_pars_fragment:jx,clipping_planes_pars_vertex:Yx,clipping_planes_vertex:$x,color_fragment:Kx,color_pars_fragment:Jx,color_pars_vertex:Zx,color_vertex:Qx,common:ev,cube_uv_reflection_fragment:tv,defaultnormal_vertex:nv,displacementmap_pars_vertex:iv,displacementmap_vertex:sv,emissivemap_fragment:rv,emissivemap_pars_fragment:ov,colorspace_fragment:av,colorspace_pars_fragment:lv,envmap_fragment:cv,envmap_common_pars_fragment:uv,envmap_pars_fragment:hv,envmap_pars_vertex:fv,envmap_physical_pars_fragment:Sv,envmap_vertex:dv,fog_vertex:pv,fog_pars_vertex:mv,fog_fragment:gv,fog_pars_fragment:_v,gradientmap_pars_fragment:xv,lightmap_pars_fragment:vv,lights_lambert_fragment:Mv,lights_lambert_pars_fragment:yv,lights_pars_begin:bv,lights_toon_fragment:Ev,lights_toon_pars_fragment:Tv,lights_phong_fragment:Av,lights_phong_pars_fragment:wv,lights_physical_fragment:Rv,lights_physical_pars_fragment:Cv,lights_fragment_begin:Pv,lights_fragment_maps:Dv,lights_fragment_end:Lv,logdepthbuf_fragment:Nv,logdepthbuf_pars_fragment:Iv,logdepthbuf_pars_vertex:Uv,logdepthbuf_vertex:Fv,map_fragment:Ov,map_pars_fragment:Bv,map_particle_fragment:kv,map_particle_pars_fragment:Vv,metalnessmap_fragment:zv,metalnessmap_pars_fragment:Hv,morphinstance_vertex:Gv,morphcolor_vertex:Wv,morphnormal_vertex:Xv,morphtarget_pars_vertex:qv,morphtarget_vertex:jv,normal_fragment_begin:Yv,normal_fragment_maps:$v,normal_pars_fragment:Kv,normal_pars_vertex:Jv,normal_vertex:Zv,normalmap_pars_fragment:Qv,clearcoat_normal_fragment_begin:eM,clearcoat_normal_fragment_maps:tM,clearcoat_pars_fragment:nM,iridescence_pars_fragment:iM,opaque_fragment:sM,packing:rM,premultiplied_alpha_fragment:oM,project_vertex:aM,dithering_fragment:lM,dithering_pars_fragment:cM,roughnessmap_fragment:uM,roughnessmap_pars_fragment:hM,shadowmap_pars_fragment:fM,shadowmap_pars_vertex:dM,shadowmap_vertex:pM,shadowmask_pars_fragment:mM,skinbase_vertex:gM,skinning_pars_vertex:_M,skinning_vertex:xM,skinnormal_vertex:vM,specularmap_fragment:MM,specularmap_pars_fragment:yM,tonemapping_fragment:bM,tonemapping_pars_fragment:SM,transmission_fragment:EM,transmission_pars_fragment:TM,uv_pars_fragment:AM,uv_pars_vertex:wM,uv_vertex:RM,worldpos_vertex:CM,background_vert:PM,background_frag:DM,backgroundCube_vert:LM,backgroundCube_frag:NM,cube_vert:IM,cube_frag:UM,depth_vert:FM,depth_frag:OM,distance_vert:BM,distance_frag:kM,equirect_vert:VM,equirect_frag:zM,linedashed_vert:HM,linedashed_frag:GM,meshbasic_vert:WM,meshbasic_frag:XM,meshlambert_vert:qM,meshlambert_frag:jM,meshmatcap_vert:YM,meshmatcap_frag:$M,meshnormal_vert:KM,meshnormal_frag:JM,meshphong_vert:ZM,meshphong_frag:QM,meshphysical_vert:ey,meshphysical_frag:ty,meshtoon_vert:ny,meshtoon_frag:iy,points_vert:sy,points_frag:ry,shadow_vert:oy,shadow_frag:ay,sprite_vert:ly,sprite_frag:cy},Oe={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},ri={basic:{uniforms:yn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:yn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new ft(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:yn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:yn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:yn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new ft(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:yn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:yn([Oe.points,Oe.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:yn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:yn([Oe.common,Oe.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:yn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:yn([Oe.sprite,Oe.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:yn([Oe.common,Oe.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:yn([Oe.lights,Oe.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};ri.physical={uniforms:yn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const qo={r:0,b:0,g:0},fs=new Cn,uy=new ct;function hy(n,e,t,i,s,r,o){const a=new ft(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function _(D){let T=D.isScene===!0?D.background:null;return T&&T.isTexture&&(T=(D.backgroundBlurriness>0?t:e).get(T)),T}function x(D){let T=!1;const R=_(D);R===null?p(a,l):R&&R.isColor&&(p(R,1),T=!0);const N=n.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(D,T){const R=_(T);R&&(R.isCubeTexture||R.mapping===Fa)?(u===void 0&&(u=new pn(new vr(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:fr(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,L,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),fs.copy(T.backgroundRotation),fs.x*=-1,fs.y*=-1,fs.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(uy.makeRotationFromEuler(fs)),u.material.toneMapped=Mt.getTransfer(R.colorSpace)!==It,(h!==R||f!==R.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=R,f=R.version,d=n.toneMapping),u.layers.enableAll(),D.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new pn(new Ba(2,2),new pi({name:"BackgroundMaterial",uniforms:fr(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Mt.getTransfer(R.colorSpace)!==It,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(h!==R||f!==R.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=R,f=R.version,d=n.toneMapping),c.layers.enableAll(),D.unshift(c,c.geometry,c.material,0,0,null))}function p(D,T){D.getRGB(qo,mp(n)),i.buffers.color.setClear(qo.r,qo.g,qo.b,T,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(D,T=1){a.set(D),l=T,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(D){l=D,p(a,l)},render:x,addToRenderList:m,dispose:A}}function fy(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(b,F,z,G,se){let ne=!1;const k=h(G,z,F);r!==k&&(r=k,c(r.object)),ne=d(b,G,z,se),ne&&_(b,G,z,se),se!==null&&e.update(se,n.ELEMENT_ARRAY_BUFFER),(ne||o)&&(o=!1,T(b,F,z,G),se!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function h(b,F,z){const G=z.wireframe===!0;let se=i[b.id];se===void 0&&(se={},i[b.id]=se);let ne=se[F.id];ne===void 0&&(ne={},se[F.id]=ne);let k=ne[G];return k===void 0&&(k=f(l()),ne[G]=k),k}function f(b){const F=[],z=[],G=[];for(let se=0;se<t;se++)F[se]=0,z[se]=0,G[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:G,object:b,attributes:{},index:null}}function d(b,F,z,G){const se=r.attributes,ne=F.attributes;let k=0;const W=z.getAttributes();for(const Y in W)if(W[Y].location>=0){const ye=se[Y];let ie=ne[Y];if(ie===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(ie=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(ie=b.instanceColor)),ye===void 0||ye.attribute!==ie||ie&&ye.data!==ie.data)return!0;k++}return r.attributesNum!==k||r.index!==G}function _(b,F,z,G){const se={},ne=F.attributes;let k=0;const W=z.getAttributes();for(const Y in W)if(W[Y].location>=0){let ye=ne[Y];ye===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(ye=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(ye=b.instanceColor));const ie={};ie.attribute=ye,ye&&ye.data&&(ie.data=ye.data),se[Y]=ie,k++}r.attributes=se,r.attributesNum=k,r.index=G}function x(){const b=r.newAttributes;for(let F=0,z=b.length;F<z;F++)b[F]=0}function m(b){p(b,0)}function p(b,F){const z=r.newAttributes,G=r.enabledAttributes,se=r.attributeDivisors;z[b]=1,G[b]===0&&(n.enableVertexAttribArray(b),G[b]=1),se[b]!==F&&(n.vertexAttribDivisor(b,F),se[b]=F)}function A(){const b=r.newAttributes,F=r.enabledAttributes;for(let z=0,G=F.length;z<G;z++)F[z]!==b[z]&&(n.disableVertexAttribArray(z),F[z]=0)}function D(b,F,z,G,se,ne,k){k===!0?n.vertexAttribIPointer(b,F,z,se,ne):n.vertexAttribPointer(b,F,z,G,se,ne)}function T(b,F,z,G){x();const se=G.attributes,ne=z.getAttributes(),k=F.defaultAttributeValues;for(const W in ne){const Y=ne[W];if(Y.location>=0){let xe=se[W];if(xe===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(xe=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(xe=b.instanceColor)),xe!==void 0){const ye=xe.normalized,ie=xe.itemSize,te=e.get(xe);if(te===void 0)continue;const J=te.buffer,Me=te.type,pe=te.bytesPerElement,H=Me===n.INT||Me===n.UNSIGNED_INT||xe.gpuType===_u;if(xe.isInterleavedBufferAttribute){const K=xe.data,ve=K.stride,je=xe.offset;if(K.isInstancedInterleavedBuffer){for(let Ue=0;Ue<Y.locationSize;Ue++)p(Y.location+Ue,K.meshPerAttribute);b.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Ue=0;Ue<Y.locationSize;Ue++)m(Y.location+Ue);n.bindBuffer(n.ARRAY_BUFFER,J);for(let Ue=0;Ue<Y.locationSize;Ue++)D(Y.location+Ue,ie/Y.locationSize,Me,ye,ve*pe,(je+ie/Y.locationSize*Ue)*pe,H)}else{if(xe.isInstancedBufferAttribute){for(let K=0;K<Y.locationSize;K++)p(Y.location+K,xe.meshPerAttribute);b.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let K=0;K<Y.locationSize;K++)m(Y.location+K);n.bindBuffer(n.ARRAY_BUFFER,J);for(let K=0;K<Y.locationSize;K++)D(Y.location+K,ie/Y.locationSize,Me,ye,ie*pe,ie/Y.locationSize*K*pe,H)}}else if(k!==void 0){const ye=k[W];if(ye!==void 0)switch(ye.length){case 2:n.vertexAttrib2fv(Y.location,ye);break;case 3:n.vertexAttrib3fv(Y.location,ye);break;case 4:n.vertexAttrib4fv(Y.location,ye);break;default:n.vertexAttrib1fv(Y.location,ye)}}}}A()}function R(){I();for(const b in i){const F=i[b];for(const z in F){const G=F[z];for(const se in G)u(G[se].object),delete G[se];delete F[z]}delete i[b]}}function N(b){if(i[b.id]===void 0)return;const F=i[b.id];for(const z in F){const G=F[z];for(const se in G)u(G[se].object),delete G[se];delete F[z]}delete i[b.id]}function L(b){for(const F in i){const z=i[F];if(z[b.id]===void 0)continue;const G=z[b.id];for(const se in G)u(G[se].object),delete G[se];delete z[b.id]}}function I(){v(),o=!0,r!==s&&(r=s,c(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:v,dispose:R,releaseStatesOfGeometry:N,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:m,disableUnusedAttributes:A}}function dy(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];t.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let _=0;for(let x=0;x<h;x++)_+=u[x]*f[x];t.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function py(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==Hn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const I=L===Oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==In&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Kn&&!I)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(it("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),D=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),N=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:D,maxFragmentUniforms:T,maxSamples:R,samples:N}}function my(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Ji,a=new mt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const A=r?0:i,D=A*4;let T=p.clippingState||null;l.value=T,T=u(_,f,D,d);for(let R=0;R!==D;++R)T[R]=t[R];p.clippingState=T,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,_){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const p=d+x*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let D=0,T=d;D!==x;++D,T+=4)o.copy(h[D]).applyMatrix4(A,a),o.normal.toArray(m,T),m[T+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function gy(n){let e=new WeakMap;function t(o,a){return a===hc?o.mapping=ys:a===fc&&(o.mapping=lr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===hc||a===fc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new xp(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Qi=4,pf=[.125,.215,.35,.446,.526,.582],gs=20,_y=256,Nr=new za,mf=new ft;let Fl=null,Ol=0,Bl=0,kl=!1;const xy=new q;class gf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=xy}=r;Fl=this._renderer.getRenderTarget(),Ol=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Fl,Ol,Bl),this._renderer.xr.enabled=kl,e.scissorTest=!1,Gs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ys||e.mapping===lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fl=this._renderer.getRenderTarget(),Ol=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:Oi,format:Hn,colorSpace:ur,depthBuffer:!1},s=_f(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_f(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=vy(r)),this._blurMaterial=yy(r,e,t),this._ggxMaterial=My(r,e,t)}return s}_compileMaterial(e){const t=new pn(new en,e);this._renderer.compile(t,Nr)}_sceneToCubeUV(e,t,i,s,r){const l=new fn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(mf),h.toneMapping=ui,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pn(new vr,new io({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let p=!1;const A=e.background;A?A.isColor&&(m.color.copy(A),e.background=null,p=!0):(m.color.copy(mf),p=!0);for(let D=0;D<6;D++){const T=D%3;T===0?(l.up.set(0,c[D],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[D],r.y,r.z)):T===1?(l.up.set(0,0,c[D]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[D],r.z)):(l.up.set(0,c[D],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[D]));const R=this._cubeSize;Gs(s,T*R,D>2?R:0,R,R),h.setRenderTarget(s),p&&h.render(x,l),h.render(e,l)}h.toneMapping=d,h.autoClear=f,e.background=A}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ys||e.mapping===lr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Gs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Nr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,d=h*f,{_lodMax:_}=this,x=this._sizeLods[i],m=3*x*(i>_-Qi?i-_+Qi:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=_-t,Gs(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(a,Nr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,Gs(e,m,p,3*x,2*x),s.setRenderTarget(e),s.render(a,Nr)}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&_t("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[s];h.material=c;const f=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*gs-1),x=r/_,m=isFinite(r)?1+Math.floor(u*x):gs;m>gs&&it(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gs}`);const p=[];let A=0;for(let L=0;L<gs;++L){const I=L/x,v=Math.exp(-I*I/2);p.push(v),L===0?A+=v:L<m&&(A+=2*v)}for(let L=0;L<p.length;L++)p[L]=p[L]/A;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:D}=this;f.dTheta.value=_,f.mipInt.value=D-i;const T=this._sizeLods[s],R=3*T*(s>D-Qi?s-D+Qi:0),N=4*(this._cubeSize-T);Gs(t,R,N,3*T,2*T),l.setRenderTarget(t),l.render(h,Nr)}}function vy(n){const e=[],t=[],i=[];let s=n;const r=n-Qi+1+pf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Qi?l=pf[o-n+Qi-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,x=3,m=2,p=1,A=new Float32Array(x*_*d),D=new Float32Array(m*_*d),T=new Float32Array(p*_*d);for(let N=0;N<d;N++){const L=N%3*2/3-1,I=N>2?0:-1,v=[L,I,0,L+2/3,I,0,L+2/3,I+1,0,L,I,0,L+2/3,I+1,0,L,I+1,0];A.set(v,x*_*N),D.set(f,m*_*N);const b=[N,N,N,N,N,N];T.set(b,p*_*N)}const R=new en;R.setAttribute("position",new kn(A,x)),R.setAttribute("uv",new kn(D,m)),R.setAttribute("faceIndex",new kn(T,p)),i.push(new pn(R,null)),s>Qi&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function _f(n,e,t){const i=new hi(n,e,t);return i.texture.mapping=Fa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gs(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function My(n,e,t){return new pi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_y,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ha(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function yy(n,e,t){const i=new Float32Array(gs),s=new q(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ha(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function xf(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ha(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function vf(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Ha(){return`

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
	`}function by(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===hc||l===fc,u=l===ys||l===lr;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new gf(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new gf(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Sy(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&no("WebGLRenderer: "+i+" extension not supported."),s}}}function Ey(n,e,t,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],n.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,_=h.attributes.position;let x=0;if(d!==null){const A=d.array;x=d.version;for(let D=0,T=A.length;D<T;D+=3){const R=A[D+0],N=A[D+1],L=A[D+2];f.push(R,N,N,L,L,R)}}else if(_!==void 0){const A=_.array;x=_.version;for(let D=0,T=A.length/3-1;D<T;D+=3){const R=D+0,N=D+1,L=D+2;f.push(R,N,N,L,L,R)}}else return;const m=new(up(f)?pp:dp)(f,1);m.version=x;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Ty(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),t.update(d,i,1)}function c(f,d,_){_!==0&&(n.drawElementsInstanced(i,d,r,f*o,_),t.update(d,i,_))}function u(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];t.update(m,i,1)}function h(f,d,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,x,0,_);let p=0;for(let A=0;A<_;A++)p+=d[A]*x[A];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Ay(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:_t("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function wy(n,e,t){const i=new WeakMap,s=new kt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let b=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var d=b;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],D=a.morphAttributes.color||[];let T=0;_===!0&&(T=1),x===!0&&(T=2),m===!0&&(T=3);let R=a.attributes.position.count*T,N=1;R>e.maxTextureSize&&(N=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const L=new Float32Array(R*N*4*h),I=new hp(L,R,N,h);I.type=Kn,I.needsUpdate=!0;const v=T*4;for(let F=0;F<h;F++){const z=p[F],G=A[F],se=D[F],ne=R*N*4*F;for(let k=0;k<z.count;k++){const W=k*v;_===!0&&(s.fromBufferAttribute(z,k),L[ne+W+0]=s.x,L[ne+W+1]=s.y,L[ne+W+2]=s.z,L[ne+W+3]=0),x===!0&&(s.fromBufferAttribute(G,k),L[ne+W+4]=s.x,L[ne+W+5]=s.y,L[ne+W+6]=s.z,L[ne+W+7]=0),m===!0&&(s.fromBufferAttribute(se,k),L[ne+W+8]=s.x,L[ne+W+9]=s.y,L[ne+W+10]=s.z,L[ne+W+11]=se.itemSize===4?s.w:1)}}f={count:h,texture:I,size:new at(R,N)},i.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Ry(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Cy={[$d]:"LINEAR_TONE_MAPPING",[Kd]:"REINHARD_TONE_MAPPING",[Jd]:"CINEON_TONE_MAPPING",[Zd]:"ACES_FILMIC_TONE_MAPPING",[ep]:"AGX_TONE_MAPPING",[tp]:"NEUTRAL_TONE_MAPPING",[Qd]:"CUSTOM_TONE_MAPPING"};function Py(n,e,t,i,s){const r=new hi(e,t,{type:n,depthBuffer:i,stencilBuffer:s}),o=new hi(e,t,{type:Oi,depthBuffer:!1,stencilBuffer:!1}),a=new en;a.setAttribute("position",new wt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new wt([0,2,0,0,2,0],2));const l=new rx({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new pn(a,l),u=new za(-1,1,1,-1,0,1);let h=null,f=null,d=!1,_,x=null,m=[],p=!1;this.setSize=function(A,D){r.setSize(A,D),o.setSize(A,D);for(let T=0;T<m.length;T++){const R=m[T];R.setSize&&R.setSize(A,D)}},this.setEffects=function(A){m=A,p=m.length>0&&m[0].isRenderPass===!0;const D=r.width,T=r.height;for(let R=0;R<m.length;R++){const N=m[R];N.setSize&&N.setSize(D,T)}},this.begin=function(A,D){if(d||A.toneMapping===ui&&m.length===0)return!1;if(x=D,D!==null){const T=D.width,R=D.height;(r.width!==T||r.height!==R)&&this.setSize(T,R)}return p===!1&&A.setRenderTarget(r),_=A.toneMapping,A.toneMapping=ui,!0},this.hasRenderPass=function(){return p},this.end=function(A,D){A.toneMapping=_,d=!0;let T=r,R=o;for(let N=0;N<m.length;N++){const L=m[N];if(L.enabled!==!1&&(L.render(A,R,T,D),L.needsSwap!==!1)){const I=T;T=R,R=I}}if(h!==A.outputColorSpace||f!==A.toneMapping){h=A.outputColorSpace,f=A.toneMapping,l.defines={},Mt.getTransfer(h)===It&&(l.defines.SRGB_TRANSFER="");const N=Cy[f];N&&(l.defines[N]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=T.texture,A.setRenderTarget(x),A.render(c,u),x=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Lp=new gn,Yc=new so(1,1),Np=new hp,Ip=new N0,Up=new _p,Mf=[],yf=[],bf=new Float32Array(16),Sf=new Float32Array(9),Ef=new Float32Array(4);function br(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Mf[s];if(r===void 0&&(r=new Float32Array(s),Mf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ga(n,e){let t=yf[e];t===void 0&&(t=new Int32Array(e),yf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Dy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ly(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2fv(this.addr,e),Zt(t,e)}}function Ny(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;n.uniform3fv(this.addr,e),Zt(t,e)}}function Iy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4fv(this.addr,e),Zt(t,e)}}function Uy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Jt(t,i))return;Ef.set(i),n.uniformMatrix2fv(this.addr,!1,Ef),Zt(t,i)}}function Fy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Jt(t,i))return;Sf.set(i),n.uniformMatrix3fv(this.addr,!1,Sf),Zt(t,i)}}function Oy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Jt(t,i))return;bf.set(i),n.uniformMatrix4fv(this.addr,!1,bf),Zt(t,i)}}function By(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ky(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2iv(this.addr,e),Zt(t,e)}}function Vy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;n.uniform3iv(this.addr,e),Zt(t,e)}}function zy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4iv(this.addr,e),Zt(t,e)}}function Hy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Gy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2uiv(this.addr,e),Zt(t,e)}}function Wy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;n.uniform3uiv(this.addr,e),Zt(t,e)}}function Xy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4uiv(this.addr,e),Zt(t,e)}}function qy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Yc.compareFunction=t.isReversedDepthBuffer()?Tu:Eu,r=Yc):r=Lp,t.setTexture2D(e||r,s)}function jy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Ip,s)}function Yy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Up,s)}function $y(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Np,s)}function Ky(n){switch(n){case 5126:return Dy;case 35664:return Ly;case 35665:return Ny;case 35666:return Iy;case 35674:return Uy;case 35675:return Fy;case 35676:return Oy;case 5124:case 35670:return By;case 35667:case 35671:return ky;case 35668:case 35672:return Vy;case 35669:case 35673:return zy;case 5125:return Hy;case 36294:return Gy;case 36295:return Wy;case 36296:return Xy;case 35678:case 36198:case 36298:case 36306:case 35682:return qy;case 35679:case 36299:case 36307:return jy;case 35680:case 36300:case 36308:case 36293:return Yy;case 36289:case 36303:case 36311:case 36292:return $y}}function Jy(n,e){n.uniform1fv(this.addr,e)}function Zy(n,e){const t=br(e,this.size,2);n.uniform2fv(this.addr,t)}function Qy(n,e){const t=br(e,this.size,3);n.uniform3fv(this.addr,t)}function eb(n,e){const t=br(e,this.size,4);n.uniform4fv(this.addr,t)}function tb(n,e){const t=br(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function nb(n,e){const t=br(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ib(n,e){const t=br(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function sb(n,e){n.uniform1iv(this.addr,e)}function rb(n,e){n.uniform2iv(this.addr,e)}function ob(n,e){n.uniform3iv(this.addr,e)}function ab(n,e){n.uniform4iv(this.addr,e)}function lb(n,e){n.uniform1uiv(this.addr,e)}function cb(n,e){n.uniform2uiv(this.addr,e)}function ub(n,e){n.uniform3uiv(this.addr,e)}function hb(n,e){n.uniform4uiv(this.addr,e)}function fb(n,e,t){const i=this.cache,s=e.length,r=Ga(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Yc:o=Lp;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function db(n,e,t){const i=this.cache,s=e.length,r=Ga(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Ip,r[o])}function pb(n,e,t){const i=this.cache,s=e.length,r=Ga(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Up,r[o])}function mb(n,e,t){const i=this.cache,s=e.length,r=Ga(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Np,r[o])}function gb(n){switch(n){case 5126:return Jy;case 35664:return Zy;case 35665:return Qy;case 35666:return eb;case 35674:return tb;case 35675:return nb;case 35676:return ib;case 5124:case 35670:return sb;case 35667:case 35671:return rb;case 35668:case 35672:return ob;case 35669:case 35673:return ab;case 5125:return lb;case 36294:return cb;case 36295:return ub;case 36296:return hb;case 35678:case 36198:case 36298:case 36306:case 35682:return fb;case 35679:case 36299:case 36307:return db;case 35680:case 36300:case 36308:case 36293:return pb;case 36289:case 36303:case 36311:case 36292:return mb}}class _b{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ky(t.type)}}class xb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gb(t.type)}}class vb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Vl=/(\w+)(\])?(\[|\.)?/g;function Tf(n,e){n.seq.push(e),n.map[e.id]=e}function Mb(n,e,t){const i=n.name,s=i.length;for(Vl.lastIndex=0;;){const r=Vl.exec(i),o=Vl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Tf(t,c===void 0?new _b(a,n,e):new xb(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new vb(a),Tf(t,h)),t=h}}}class la{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Mb(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Af(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const yb=37297;let bb=0;function Sb(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const wf=new mt;function Eb(n){Mt._getMatrix(wf,Mt.workingColorSpace,n);const e=`mat3( ${wf.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(n)){case _a:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Rf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Sb(n.getShaderSource(e),a)}else return r}function Tb(n,e){const t=Eb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Ab={[$d]:"Linear",[Kd]:"Reinhard",[Jd]:"Cineon",[Zd]:"ACESFilmic",[ep]:"AgX",[tp]:"Neutral",[Qd]:"Custom"};function wb(n,e){const t=Ab[e];return t===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const jo=new q;function Rb(){Mt.getLuminanceCoefficients(jo);const n=jo.x.toFixed(4),e=jo.y.toFixed(4),t=jo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Or).join(`
`)}function Pb(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Db(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Or(n){return n!==""}function Cf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Lb=/^[ \t]*#include +<([\w\d./]+)>/gm;function $c(n){return n.replace(Lb,Ib)}const Nb=new Map;function Ib(n,e){let t=gt[e];if(t===void 0){const i=Nb.get(e);if(i!==void 0)t=gt[i],it('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return $c(t)}const Ub=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Df(n){return n.replace(Ub,Fb)}function Fb(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Lf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const Ob={[ia]:"SHADOWMAP_TYPE_PCF",[Fr]:"SHADOWMAP_TYPE_VSM"};function Bb(n){return Ob[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const kb={[ys]:"ENVMAP_TYPE_CUBE",[lr]:"ENVMAP_TYPE_CUBE",[Fa]:"ENVMAP_TYPE_CUBE_UV"};function Vb(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":kb[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const zb={[lr]:"ENVMAP_MODE_REFRACTION"};function Hb(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":zb[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Gb={[Ua]:"ENVMAP_BLENDING_MULTIPLY",[K_]:"ENVMAP_BLENDING_MIX",[J_]:"ENVMAP_BLENDING_ADD"};function Wb(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Gb[n.combine]||"ENVMAP_BLENDING_NONE"}function Xb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function qb(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Bb(t),c=Vb(t),u=Hb(t),h=Wb(t),f=Xb(t),d=Cb(t),_=Pb(r),x=s.createProgram();let m,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Or).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Or).join(`
`),p.length>0&&(p+=`
`)):(m=[Lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),p=[Lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ui?"#define TONE_MAPPING":"",t.toneMapping!==ui?gt.tonemapping_pars_fragment:"",t.toneMapping!==ui?wb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,Tb("linearToOutputTexel",t.outputColorSpace),Rb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Or).join(`
`)),o=$c(o),o=Cf(o,t),o=Pf(o,t),a=$c(a),a=Cf(a,t),a=Pf(a,t),o=Df(o),a=Df(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const D=A+m+o,T=A+p+a,R=Af(s,s.VERTEX_SHADER,D),N=Af(s,s.FRAGMENT_SHADER,T);s.attachShader(x,R),s.attachShader(x,N),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function L(F){if(n.debug.checkShaderErrors){const z=s.getProgramInfoLog(x)||"",G=s.getShaderInfoLog(R)||"",se=s.getShaderInfoLog(N)||"",ne=z.trim(),k=G.trim(),W=se.trim();let Y=!0,xe=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,R,N);else{const ye=Rf(s,R,"vertex"),ie=Rf(s,N,"fragment");_t("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ne+`
`+ye+`
`+ie)}else ne!==""?it("WebGLProgram: Program Info Log:",ne):(k===""||W==="")&&(xe=!1);xe&&(F.diagnostics={runnable:Y,programLog:ne,vertexShader:{log:k,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(R),s.deleteShader(N),I=new la(s,x),v=Db(s,x)}let I;this.getUniforms=function(){return I===void 0&&L(this),I};let v;this.getAttributes=function(){return v===void 0&&L(this),v};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,yb)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bb++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=N,this}let jb=0;class Yb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new $b(e),t.set(e,i)),i}}class $b{constructor(e){this.id=jb++,this.code=e,this.usedTimes=0}}function Kb(n,e,t,i,s,r,o){const a=new Ru,l=new Yb,c=new Set,u=[],h=new Map,f=s.logarithmicDepthBuffer;let d=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,b,F,z,G){const se=z.fog,ne=G.geometry,k=v.isMeshStandardMaterial?z.environment:null,W=(v.isMeshStandardMaterial?t:e).get(v.envMap||k),Y=W&&W.mapping===Fa?W.image.height:null,xe=_[v.type];v.precision!==null&&(d=s.getMaxPrecision(v.precision),d!==v.precision&&it("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const ye=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,ie=ye!==void 0?ye.length:0;let te=0;ne.morphAttributes.position!==void 0&&(te=1),ne.morphAttributes.normal!==void 0&&(te=2),ne.morphAttributes.color!==void 0&&(te=3);let J,Me,pe,H;if(xe){const dt=ri[xe];J=dt.vertexShader,Me=dt.fragmentShader}else J=v.vertexShader,Me=v.fragmentShader,l.update(v),pe=l.getVertexShaderID(v),H=l.getFragmentShaderID(v);const K=n.getRenderTarget(),ve=n.state.buffers.depth.getReversed(),je=G.isInstancedMesh===!0,Ue=G.isBatchedMesh===!0,xt=!!v.map,O=!!v.matcap,V=!!W,Q=!!v.aoMap,he=!!v.lightMap,ae=!!v.bumpMap,fe=!!v.normalMap,U=!!v.displacementMap,be=!!v.emissiveMap,me=!!v.metalnessMap,ue=!!v.roughnessMap,ge=v.anisotropy>0,E=v.clearcoat>0,g=v.dispersion>0,B=v.iridescence>0,ee=v.sheen>0,ce=v.transmission>0,Z=ge&&!!v.anisotropyMap,Fe=E&&!!v.clearcoatMap,Te=E&&!!v.clearcoatNormalMap,ke=E&&!!v.clearcoatRoughnessMap,Je=B&&!!v.iridescenceMap,Se=B&&!!v.iridescenceThicknessMap,Ce=ee&&!!v.sheenColorMap,Le=ee&&!!v.sheenRoughnessMap,Ve=!!v.specularMap,Re=!!v.specularColorMap,lt=!!v.specularIntensityMap,X=ce&&!!v.transmissionMap,Be=ce&&!!v.thicknessMap,we=!!v.gradientMap,Ge=!!v.alphaMap,Ae=v.alphaTest>0,_e=!!v.alphaHash,Pe=!!v.extensions;let ot=ui;v.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(ot=n.toneMapping);const Ut={shaderID:xe,shaderType:v.type,shaderName:v.name,vertexShader:J,fragmentShader:Me,defines:v.defines,customVertexShaderID:pe,customFragmentShaderID:H,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Ue,batchingColor:Ue&&G._colorsTexture!==null,instancing:je,instancingColor:je&&G.instanceColor!==null,instancingMorph:je&&G.morphTexture!==null,outputColorSpace:K===null?n.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ur,alphaToCoverage:!!v.alphaToCoverage,map:xt,matcap:O,envMap:V,envMapMode:V&&W.mapping,envMapCubeUVHeight:Y,aoMap:Q,lightMap:he,bumpMap:ae,normalMap:fe,displacementMap:U,emissiveMap:be,normalMapObjectSpace:fe&&v.normalMapType===n0,normalMapTangentSpace:fe&&v.normalMapType===Su,metalnessMap:me,roughnessMap:ue,anisotropy:ge,anisotropyMap:Z,clearcoat:E,clearcoatMap:Fe,clearcoatNormalMap:Te,clearcoatRoughnessMap:ke,dispersion:g,iridescence:B,iridescenceMap:Je,iridescenceThicknessMap:Se,sheen:ee,sheenColorMap:Ce,sheenRoughnessMap:Le,specularMap:Ve,specularColorMap:Re,specularIntensityMap:lt,transmission:ce,transmissionMap:X,thicknessMap:Be,gradientMap:we,opaque:v.transparent===!1&&v.blending===nr&&v.alphaToCoverage===!1,alphaMap:Ge,alphaTest:Ae,alphaHash:_e,combine:v.combine,mapUv:xt&&x(v.map.channel),aoMapUv:Q&&x(v.aoMap.channel),lightMapUv:he&&x(v.lightMap.channel),bumpMapUv:ae&&x(v.bumpMap.channel),normalMapUv:fe&&x(v.normalMap.channel),displacementMapUv:U&&x(v.displacementMap.channel),emissiveMapUv:be&&x(v.emissiveMap.channel),metalnessMapUv:me&&x(v.metalnessMap.channel),roughnessMapUv:ue&&x(v.roughnessMap.channel),anisotropyMapUv:Z&&x(v.anisotropyMap.channel),clearcoatMapUv:Fe&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:Te&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Je&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:Le&&x(v.sheenRoughnessMap.channel),specularMapUv:Ve&&x(v.specularMap.channel),specularColorMapUv:Re&&x(v.specularColorMap.channel),specularIntensityMapUv:lt&&x(v.specularIntensityMap.channel),transmissionMapUv:X&&x(v.transmissionMap.channel),thicknessMapUv:Be&&x(v.thicknessMap.channel),alphaMapUv:Ge&&x(v.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(fe||ge),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!ne.attributes.uv&&(xt||Ge),fog:!!se,useFog:v.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ve,skinning:G.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:te,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:ot,decodeVideoTexture:xt&&v.map.isVideoTexture===!0&&Mt.getTransfer(v.map.colorSpace)===It,decodeVideoTextureEmissive:be&&v.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(v.emissiveMap.colorSpace)===It,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===oi,flipSided:v.side===Rn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Pe&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&v.extensions.multiDraw===!0||Ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ut.vertexUv1s=c.has(1),Ut.vertexUv2s=c.has(2),Ut.vertexUv3s=c.has(3),c.clear(),Ut}function p(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const F in v.defines)b.push(F),b.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(A(b,v),D(b,v),b.push(n.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function A(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function D(v,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),v.push(a.mask)}function T(v){const b=_[v.type];let F;if(b){const z=ri[b];F=q0.clone(z.uniforms)}else F=v.uniforms;return F}function R(v,b){let F=h.get(b);return F!==void 0?++F.usedTimes:(F=new qb(n,b,v,r),u.push(F),h.set(b,F)),F}function N(v){if(--v.usedTimes===0){const b=u.indexOf(v);u[b]=u[u.length-1],u.pop(),h.delete(v.cacheKey),v.destroy()}}function L(v){l.remove(v)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:T,acquireProgram:R,releaseProgram:N,releaseShaderCache:L,programs:u,dispose:I}}function Jb(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Zb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Nf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function If(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,d,_,x,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:x,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function a(h,f,d,_,x,m){const p=o(h,f,d,_,x,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(h,f,d,_,x,m){const p=o(h,f,d,_,x,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||Zb),i.length>1&&i.sort(f||Nf),s.length>1&&s.sort(f||Nf)}function u(){for(let h=e,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Qb(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new If,n.set(i,[o])):s>=r.length?(o=new If,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function eS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new ft};break;case"SpotLight":t={position:new q,direction:new q,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new ft,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":t={color:new ft,position:new q,halfWidth:new q,halfHeight:new q};break}return n[e.id]=t,t}}}function tS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let nS=0;function iS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function sS(n){const e=new eS,t=tS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new q);const s=new q,r=new ct,o=new ct;function a(c){let u=0,h=0,f=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let d=0,_=0,x=0,m=0,p=0,A=0,D=0,T=0,R=0,N=0,L=0;c.sort(iS);for(let v=0,b=c.length;v<b;v++){const F=c[v],z=F.color,G=F.intensity,se=F.distance;let ne=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===cr?ne=F.shadow.map.texture:ne=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)u+=z.r*G,h+=z.g*G,f+=z.b*G;else if(F.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(F.sh.coefficients[k],G);L++}else if(F.isDirectionalLight){const k=e.get(F);if(k.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const W=F.shadow,Y=t.get(F);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,i.directionalShadow[d]=Y,i.directionalShadowMap[d]=ne,i.directionalShadowMatrix[d]=F.shadow.matrix,A++}i.directional[d]=k,d++}else if(F.isSpotLight){const k=e.get(F);k.position.setFromMatrixPosition(F.matrixWorld),k.color.copy(z).multiplyScalar(G),k.distance=se,k.coneCos=Math.cos(F.angle),k.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),k.decay=F.decay,i.spot[x]=k;const W=F.shadow;if(F.map&&(i.spotLightMap[R]=F.map,R++,W.updateMatrices(F),F.castShadow&&N++),i.spotLightMatrix[x]=W.matrix,F.castShadow){const Y=t.get(F);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,i.spotShadow[x]=Y,i.spotShadowMap[x]=ne,T++}x++}else if(F.isRectAreaLight){const k=e.get(F);k.color.copy(z).multiplyScalar(G),k.halfWidth.set(F.width*.5,0,0),k.halfHeight.set(0,F.height*.5,0),i.rectArea[m]=k,m++}else if(F.isPointLight){const k=e.get(F);if(k.color.copy(F.color).multiplyScalar(F.intensity),k.distance=F.distance,k.decay=F.decay,F.castShadow){const W=F.shadow,Y=t.get(F);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,Y.shadowCameraNear=W.camera.near,Y.shadowCameraFar=W.camera.far,i.pointShadow[_]=Y,i.pointShadowMap[_]=ne,i.pointShadowMatrix[_]=F.shadow.matrix,D++}i.point[_]=k,_++}else if(F.isHemisphereLight){const k=e.get(F);k.skyColor.copy(F.color).multiplyScalar(G),k.groundColor.copy(F.groundColor).multiplyScalar(G),i.hemi[p]=k,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Oe.LTC_FLOAT_1,i.rectAreaLTC2=Oe.LTC_FLOAT_2):(i.rectAreaLTC1=Oe.LTC_HALF_1,i.rectAreaLTC2=Oe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const I=i.hash;(I.directionalLength!==d||I.pointLength!==_||I.spotLength!==x||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==A||I.numPointShadows!==D||I.numSpotShadows!==T||I.numSpotMaps!==R||I.numLightProbes!==L)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=D,i.pointShadowMap.length=D,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=D,i.spotLightMatrix.length=T+R-N,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=L,I.directionalLength=d,I.pointLength=_,I.spotLength=x,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=A,I.numPointShadows=D,I.numSpotShadows=T,I.numSpotMaps=R,I.numLightProbes=L,i.version=nS++)}function l(c,u){let h=0,f=0,d=0,_=0,x=0;const m=u.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const D=c[p];if(D.isDirectionalLight){const T=i.directional[h];T.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),h++}else if(D.isSpotLight){const T=i.spot[d];T.position.setFromMatrixPosition(D.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),d++}else if(D.isRectAreaLight){const T=i.rectArea[_];T.position.setFromMatrixPosition(D.matrixWorld),T.position.applyMatrix4(m),o.identity(),r.copy(D.matrixWorld),r.premultiply(m),o.extractRotation(r),T.halfWidth.set(D.width*.5,0,0),T.halfHeight.set(0,D.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),_++}else if(D.isPointLight){const T=i.point[f];T.position.setFromMatrixPosition(D.matrixWorld),T.position.applyMatrix4(m),f++}else if(D.isHemisphereLight){const T=i.hemi[x];T.direction.setFromMatrixPosition(D.matrixWorld),T.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Uf(n){const e=new sS(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function rS(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Uf(n),e.set(s,[a])):r>=o.length?(a=new Uf(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const oS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aS=`uniform sampler2D shadow_pass;
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
}`,lS=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],cS=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],Ff=new ct,Ir=new q,zl=new q;function uS(n,e,t){let i=new Du;const s=new at,r=new at,o=new kt,a=new ax,l=new lx,c={},u=t.maxTextureSize,h={[Fi]:Rn,[Rn]:Fi,[oi]:oi},f=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:oS,fragmentShader:aS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new en;_.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new pn(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ia;let p=this.type;this.render=function(N,L,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||N.length===0)return;N.type===D_&&(it("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),N.type=ia);const v=n.getRenderTarget(),b=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Pi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const G=p!==this.type;G&&L.traverse(function(se){se.material&&(Array.isArray(se.material)?se.material.forEach(ne=>ne.needsUpdate=!0):se.material.needsUpdate=!0)});for(let se=0,ne=N.length;se<ne;se++){const k=N[se],W=k.shadow;if(W===void 0){it("WebGLShadowMap:",k,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const Y=W.getFrameExtents();if(s.multiply(Y),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,W.mapSize.y=r.y)),W.map===null||G===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Fr){if(k.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new hi(s.x,s.y,{format:cr,type:Oi,minFilter:Kt,magFilter:Kt,generateMipmaps:!1}),W.map.texture.name=k.name+".shadowMap",W.map.depthTexture=new so(s.x,s.y,Kn),W.map.depthTexture.name=k.name+".shadowMapDepth",W.map.depthTexture.format=Bi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=rn,W.map.depthTexture.magFilter=rn}else{k.isPointLight?(W.map=new xp(s.x),W.map.depthTexture=new ix(s.x,di)):(W.map=new hi(s.x,s.y),W.map.depthTexture=new so(s.x,s.y,di)),W.map.depthTexture.name=k.name+".shadowMap",W.map.depthTexture.format=Bi;const ye=n.state.buffers.depth.getReversed();this.type===ia?(W.map.depthTexture.compareFunction=ye?Tu:Eu,W.map.depthTexture.minFilter=Kt,W.map.depthTexture.magFilter=Kt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=rn,W.map.depthTexture.magFilter=rn)}W.camera.updateProjectionMatrix()}const xe=W.map.isWebGLCubeRenderTarget?6:1;for(let ye=0;ye<xe;ye++){if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,ye),n.clear();else{ye===0&&(n.setRenderTarget(W.map),n.clear());const ie=W.getViewport(ye);o.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),z.viewport(o)}if(k.isPointLight){const ie=W.camera,te=W.matrix,J=k.distance||ie.far;J!==ie.far&&(ie.far=J,ie.updateProjectionMatrix()),Ir.setFromMatrixPosition(k.matrixWorld),ie.position.copy(Ir),zl.copy(ie.position),zl.add(lS[ye]),ie.up.copy(cS[ye]),ie.lookAt(zl),ie.updateMatrixWorld(),te.makeTranslation(-Ir.x,-Ir.y,-Ir.z),Ff.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Ff,ie.coordinateSystem,ie.reversedDepth)}else W.updateMatrices(k);i=W.getFrustum(),T(L,I,W.camera,k,this.type)}W.isPointLightShadow!==!0&&this.type===Fr&&A(W,I),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(v,b,F)};function A(N,L){const I=e.update(x);f.defines.VSM_SAMPLES!==N.blurSamples&&(f.defines.VSM_SAMPLES=N.blurSamples,d.defines.VSM_SAMPLES=N.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new hi(s.x,s.y,{format:cr,type:Oi})),f.uniforms.shadow_pass.value=N.map.depthTexture,f.uniforms.resolution.value=N.mapSize,f.uniforms.radius.value=N.radius,n.setRenderTarget(N.mapPass),n.clear(),n.renderBufferDirect(L,null,I,f,x,null),d.uniforms.shadow_pass.value=N.mapPass.texture,d.uniforms.resolution.value=N.mapSize,d.uniforms.radius.value=N.radius,n.setRenderTarget(N.map),n.clear(),n.renderBufferDirect(L,null,I,d,x,null)}function D(N,L,I,v){let b=null;const F=I.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(F!==void 0)b=F;else if(b=I.isPointLight===!0?l:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const z=b.uuid,G=L.uuid;let se=c[z];se===void 0&&(se={},c[z]=se);let ne=se[G];ne===void 0&&(ne=b.clone(),se[G]=ne,L.addEventListener("dispose",R)),b=ne}if(b.visible=L.visible,b.wireframe=L.wireframe,v===Fr?b.side=L.shadowSide!==null?L.shadowSide:L.side:b.side=L.shadowSide!==null?L.shadowSide:h[L.side],b.alphaMap=L.alphaMap,b.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,b.map=L.map,b.clipShadows=L.clipShadows,b.clippingPlanes=L.clippingPlanes,b.clipIntersection=L.clipIntersection,b.displacementMap=L.displacementMap,b.displacementScale=L.displacementScale,b.displacementBias=L.displacementBias,b.wireframeLinewidth=L.wireframeLinewidth,b.linewidth=L.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const z=n.properties.get(b);z.light=I}return b}function T(N,L,I,v,b){if(N.visible===!1)return;if(N.layers.test(L.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&b===Fr)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,N.matrixWorld);const G=e.update(N),se=N.material;if(Array.isArray(se)){const ne=G.groups;for(let k=0,W=ne.length;k<W;k++){const Y=ne[k],xe=se[Y.materialIndex];if(xe&&xe.visible){const ye=D(N,xe,v,b);N.onBeforeShadow(n,N,L,I,G,ye,Y),n.renderBufferDirect(I,null,G,ye,N,Y),N.onAfterShadow(n,N,L,I,G,ye,Y)}}}else if(se.visible){const ne=D(N,se,v,b);N.onBeforeShadow(n,N,L,I,G,ne,null),n.renderBufferDirect(I,null,G,ne,N,null),N.onAfterShadow(n,N,L,I,G,ne,null)}}const z=N.children;for(let G=0,se=z.length;G<se;G++)T(z[G],L,I,v,b)}function R(N){N.target.removeEventListener("dispose",R);for(const I in c){const v=c[I],b=N.target.uuid;b in v&&(v[b].dispose(),delete v[b])}}}const hS={[sc]:rc,[oc]:cc,[ac]:uc,[ar]:lc,[rc]:sc,[cc]:oc,[uc]:ac,[lc]:ar};function fS(n,e){function t(){let X=!1;const Be=new kt;let we=null;const Ge=new kt(0,0,0,0);return{setMask:function(Ae){we!==Ae&&!X&&(n.colorMask(Ae,Ae,Ae,Ae),we=Ae)},setLocked:function(Ae){X=Ae},setClear:function(Ae,_e,Pe,ot,Ut){Ut===!0&&(Ae*=ot,_e*=ot,Pe*=ot),Be.set(Ae,_e,Pe,ot),Ge.equals(Be)===!1&&(n.clearColor(Ae,_e,Pe,ot),Ge.copy(Be))},reset:function(){X=!1,we=null,Ge.set(-1,0,0,0)}}}function i(){let X=!1,Be=!1,we=null,Ge=null,Ae=null;return{setReversed:function(_e){if(Be!==_e){const Pe=e.get("EXT_clip_control");_e?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),Be=_e;const ot=Ae;Ae=null,this.setClear(ot)}},getReversed:function(){return Be},setTest:function(_e){_e?K(n.DEPTH_TEST):ve(n.DEPTH_TEST)},setMask:function(_e){we!==_e&&!X&&(n.depthMask(_e),we=_e)},setFunc:function(_e){if(Be&&(_e=hS[_e]),Ge!==_e){switch(_e){case sc:n.depthFunc(n.NEVER);break;case rc:n.depthFunc(n.ALWAYS);break;case oc:n.depthFunc(n.LESS);break;case ar:n.depthFunc(n.LEQUAL);break;case ac:n.depthFunc(n.EQUAL);break;case lc:n.depthFunc(n.GEQUAL);break;case cc:n.depthFunc(n.GREATER);break;case uc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ge=_e}},setLocked:function(_e){X=_e},setClear:function(_e){Ae!==_e&&(Be&&(_e=1-_e),n.clearDepth(_e),Ae=_e)},reset:function(){X=!1,we=null,Ge=null,Ae=null,Be=!1}}}function s(){let X=!1,Be=null,we=null,Ge=null,Ae=null,_e=null,Pe=null,ot=null,Ut=null;return{setTest:function(dt){X||(dt?K(n.STENCIL_TEST):ve(n.STENCIL_TEST))},setMask:function(dt){Be!==dt&&!X&&(n.stencilMask(dt),Be=dt)},setFunc:function(dt,Pn,qn){(we!==dt||Ge!==Pn||Ae!==qn)&&(n.stencilFunc(dt,Pn,qn),we=dt,Ge=Pn,Ae=qn)},setOp:function(dt,Pn,qn){(_e!==dt||Pe!==Pn||ot!==qn)&&(n.stencilOp(dt,Pn,qn),_e=dt,Pe=Pn,ot=qn)},setLocked:function(dt){X=dt},setClear:function(dt){Ut!==dt&&(n.clearStencil(dt),Ut=dt)},reset:function(){X=!1,Be=null,we=null,Ge=null,Ae=null,_e=null,Pe=null,ot=null,Ut=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],_=null,x=!1,m=null,p=null,A=null,D=null,T=null,R=null,N=null,L=new ft(0,0,0),I=0,v=!1,b=null,F=null,z=null,G=null,se=null;const ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,W=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Y)[1]),k=W>=1):Y.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),k=W>=2);let xe=null,ye={};const ie=n.getParameter(n.SCISSOR_BOX),te=n.getParameter(n.VIEWPORT),J=new kt().fromArray(ie),Me=new kt().fromArray(te);function pe(X,Be,we,Ge){const Ae=new Uint8Array(4),_e=n.createTexture();n.bindTexture(X,_e),n.texParameteri(X,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(X,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Pe=0;Pe<we;Pe++)X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?n.texImage3D(Be,0,n.RGBA,1,1,Ge,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(Be+Pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return _e}const H={};H[n.TEXTURE_2D]=pe(n.TEXTURE_2D,n.TEXTURE_2D,1),H[n.TEXTURE_CUBE_MAP]=pe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[n.TEXTURE_2D_ARRAY]=pe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),H[n.TEXTURE_3D]=pe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(n.DEPTH_TEST),o.setFunc(ar),ae(!1),fe(vh),K(n.CULL_FACE),Q(Pi);function K(X){u[X]!==!0&&(n.enable(X),u[X]=!0)}function ve(X){u[X]!==!1&&(n.disable(X),u[X]=!1)}function je(X,Be){return h[X]!==Be?(n.bindFramebuffer(X,Be),h[X]=Be,X===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Be),X===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Be),!0):!1}function Ue(X,Be){let we=d,Ge=!1;if(X){we=f.get(Be),we===void 0&&(we=[],f.set(Be,we));const Ae=X.textures;if(we.length!==Ae.length||we[0]!==n.COLOR_ATTACHMENT0){for(let _e=0,Pe=Ae.length;_e<Pe;_e++)we[_e]=n.COLOR_ATTACHMENT0+_e;we.length=Ae.length,Ge=!0}}else we[0]!==n.BACK&&(we[0]=n.BACK,Ge=!0);Ge&&n.drawBuffers(we)}function xt(X){return _!==X?(n.useProgram(X),_=X,!0):!1}const O={[ms]:n.FUNC_ADD,[N_]:n.FUNC_SUBTRACT,[I_]:n.FUNC_REVERSE_SUBTRACT};O[U_]=n.MIN,O[F_]=n.MAX;const V={[O_]:n.ZERO,[B_]:n.ONE,[k_]:n.SRC_COLOR,[nc]:n.SRC_ALPHA,[X_]:n.SRC_ALPHA_SATURATE,[G_]:n.DST_COLOR,[z_]:n.DST_ALPHA,[V_]:n.ONE_MINUS_SRC_COLOR,[ic]:n.ONE_MINUS_SRC_ALPHA,[W_]:n.ONE_MINUS_DST_COLOR,[H_]:n.ONE_MINUS_DST_ALPHA,[q_]:n.CONSTANT_COLOR,[j_]:n.ONE_MINUS_CONSTANT_COLOR,[Y_]:n.CONSTANT_ALPHA,[$_]:n.ONE_MINUS_CONSTANT_ALPHA};function Q(X,Be,we,Ge,Ae,_e,Pe,ot,Ut,dt){if(X===Pi){x===!0&&(ve(n.BLEND),x=!1);return}if(x===!1&&(K(n.BLEND),x=!0),X!==L_){if(X!==m||dt!==v){if((p!==ms||T!==ms)&&(n.blendEquation(n.FUNC_ADD),p=ms,T=ms),dt)switch(X){case nr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mh:n.blendFunc(n.ONE,n.ONE);break;case yh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:_t("WebGLState: Invalid blending: ",X);break}else switch(X){case nr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case yh:_t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bh:_t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:_t("WebGLState: Invalid blending: ",X);break}A=null,D=null,R=null,N=null,L.set(0,0,0),I=0,m=X,v=dt}return}Ae=Ae||Be,_e=_e||we,Pe=Pe||Ge,(Be!==p||Ae!==T)&&(n.blendEquationSeparate(O[Be],O[Ae]),p=Be,T=Ae),(we!==A||Ge!==D||_e!==R||Pe!==N)&&(n.blendFuncSeparate(V[we],V[Ge],V[_e],V[Pe]),A=we,D=Ge,R=_e,N=Pe),(ot.equals(L)===!1||Ut!==I)&&(n.blendColor(ot.r,ot.g,ot.b,Ut),L.copy(ot),I=Ut),m=X,v=!1}function he(X,Be){X.side===oi?ve(n.CULL_FACE):K(n.CULL_FACE);let we=X.side===Rn;Be&&(we=!we),ae(we),X.blending===nr&&X.transparent===!1?Q(Pi):Q(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),r.setMask(X.colorWrite);const Ge=X.stencilWrite;a.setTest(Ge),Ge&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),be(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?K(n.SAMPLE_ALPHA_TO_COVERAGE):ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function ae(X){b!==X&&(X?n.frontFace(n.CW):n.frontFace(n.CCW),b=X)}function fe(X){X!==C_?(K(n.CULL_FACE),X!==F&&(X===vh?n.cullFace(n.BACK):X===P_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ve(n.CULL_FACE),F=X}function U(X){X!==z&&(k&&n.lineWidth(X),z=X)}function be(X,Be,we){X?(K(n.POLYGON_OFFSET_FILL),(G!==Be||se!==we)&&(n.polygonOffset(Be,we),G=Be,se=we)):ve(n.POLYGON_OFFSET_FILL)}function me(X){X?K(n.SCISSOR_TEST):ve(n.SCISSOR_TEST)}function ue(X){X===void 0&&(X=n.TEXTURE0+ne-1),xe!==X&&(n.activeTexture(X),xe=X)}function ge(X,Be,we){we===void 0&&(xe===null?we=n.TEXTURE0+ne-1:we=xe);let Ge=ye[we];Ge===void 0&&(Ge={type:void 0,texture:void 0},ye[we]=Ge),(Ge.type!==X||Ge.texture!==Be)&&(xe!==we&&(n.activeTexture(we),xe=we),n.bindTexture(X,Be||H[X]),Ge.type=X,Ge.texture=Be)}function E(){const X=ye[xe];X!==void 0&&X.type!==void 0&&(n.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(X){_t("WebGLState:",X)}}function B(){try{n.compressedTexImage3D(...arguments)}catch(X){_t("WebGLState:",X)}}function ee(){try{n.texSubImage2D(...arguments)}catch(X){_t("WebGLState:",X)}}function ce(){try{n.texSubImage3D(...arguments)}catch(X){_t("WebGLState:",X)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(X){_t("WebGLState:",X)}}function Fe(){try{n.compressedTexSubImage3D(...arguments)}catch(X){_t("WebGLState:",X)}}function Te(){try{n.texStorage2D(...arguments)}catch(X){_t("WebGLState:",X)}}function ke(){try{n.texStorage3D(...arguments)}catch(X){_t("WebGLState:",X)}}function Je(){try{n.texImage2D(...arguments)}catch(X){_t("WebGLState:",X)}}function Se(){try{n.texImage3D(...arguments)}catch(X){_t("WebGLState:",X)}}function Ce(X){J.equals(X)===!1&&(n.scissor(X.x,X.y,X.z,X.w),J.copy(X))}function Le(X){Me.equals(X)===!1&&(n.viewport(X.x,X.y,X.z,X.w),Me.copy(X))}function Ve(X,Be){let we=c.get(Be);we===void 0&&(we=new WeakMap,c.set(Be,we));let Ge=we.get(X);Ge===void 0&&(Ge=n.getUniformBlockIndex(Be,X.name),we.set(X,Ge))}function Re(X,Be){const Ge=c.get(Be).get(X);l.get(Be)!==Ge&&(n.uniformBlockBinding(Be,Ge,X.__bindingPointIndex),l.set(Be,Ge))}function lt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},xe=null,ye={},h={},f=new WeakMap,d=[],_=null,x=!1,m=null,p=null,A=null,D=null,T=null,R=null,N=null,L=new ft(0,0,0),I=0,v=!1,b=null,F=null,z=null,G=null,se=null,J.set(0,0,n.canvas.width,n.canvas.height),Me.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:ve,bindFramebuffer:je,drawBuffers:Ue,useProgram:xt,setBlending:Q,setMaterial:he,setFlipSided:ae,setCullFace:fe,setLineWidth:U,setPolygonOffset:be,setScissorTest:me,activeTexture:ue,bindTexture:ge,unbindTexture:E,compressedTexImage2D:g,compressedTexImage3D:B,texImage2D:Je,texImage3D:Se,updateUBOMapping:Ve,uniformBlockBinding:Re,texStorage2D:Te,texStorage3D:ke,texSubImage2D:ee,texSubImage3D:ce,compressedTexSubImage2D:Z,compressedTexSubImage3D:Fe,scissor:Ce,viewport:Le,reset:lt}}function dS(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,g){return d?new OffscreenCanvas(E,g):to("canvas")}function x(E,g,B){let ee=1;const ce=ge(E);if((ce.width>B||ce.height>B)&&(ee=B/Math.max(ce.width,ce.height)),ee<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const Z=Math.floor(ee*ce.width),Fe=Math.floor(ee*ce.height);h===void 0&&(h=_(Z,Fe));const Te=g?_(Z,Fe):h;return Te.width=Z,Te.height=Fe,Te.getContext("2d").drawImage(E,0,0,Z,Fe),it("WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+Z+"x"+Fe+")."),Te}else return"data"in E&&it("WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){n.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function D(E,g,B,ee,ce=!1){if(E!==null){if(n[E]!==void 0)return n[E];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Z=g;if(g===n.RED&&(B===n.FLOAT&&(Z=n.R32F),B===n.HALF_FLOAT&&(Z=n.R16F),B===n.UNSIGNED_BYTE&&(Z=n.R8)),g===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.R8UI),B===n.UNSIGNED_SHORT&&(Z=n.R16UI),B===n.UNSIGNED_INT&&(Z=n.R32UI),B===n.BYTE&&(Z=n.R8I),B===n.SHORT&&(Z=n.R16I),B===n.INT&&(Z=n.R32I)),g===n.RG&&(B===n.FLOAT&&(Z=n.RG32F),B===n.HALF_FLOAT&&(Z=n.RG16F),B===n.UNSIGNED_BYTE&&(Z=n.RG8)),g===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RG8UI),B===n.UNSIGNED_SHORT&&(Z=n.RG16UI),B===n.UNSIGNED_INT&&(Z=n.RG32UI),B===n.BYTE&&(Z=n.RG8I),B===n.SHORT&&(Z=n.RG16I),B===n.INT&&(Z=n.RG32I)),g===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),B===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),B===n.UNSIGNED_INT&&(Z=n.RGB32UI),B===n.BYTE&&(Z=n.RGB8I),B===n.SHORT&&(Z=n.RGB16I),B===n.INT&&(Z=n.RGB32I)),g===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),B===n.UNSIGNED_INT&&(Z=n.RGBA32UI),B===n.BYTE&&(Z=n.RGBA8I),B===n.SHORT&&(Z=n.RGBA16I),B===n.INT&&(Z=n.RGBA32I)),g===n.RGB&&(B===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),g===n.RGBA){const Fe=ce?_a:Mt.getTransfer(ee);B===n.FLOAT&&(Z=n.RGBA32F),B===n.HALF_FLOAT&&(Z=n.RGBA16F),B===n.UNSIGNED_BYTE&&(Z=Fe===It?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function T(E,g){let B;return E?g===null||g===di||g===eo?B=n.DEPTH24_STENCIL8:g===Kn?B=n.DEPTH32F_STENCIL8:g===Qr&&(B=n.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===di||g===eo?B=n.DEPTH_COMPONENT24:g===Kn?B=n.DEPTH_COMPONENT32F:g===Qr&&(B=n.DEPTH_COMPONENT16),B}function R(E,g){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==rn&&E.minFilter!==Kt?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function N(E){const g=E.target;g.removeEventListener("dispose",N),I(g),g.isVideoTexture&&u.delete(g)}function L(E){const g=E.target;g.removeEventListener("dispose",L),b(g)}function I(E){const g=i.get(E);if(g.__webglInit===void 0)return;const B=E.source,ee=f.get(B);if(ee){const ce=ee[g.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&v(E),Object.keys(ee).length===0&&f.delete(B)}i.remove(E)}function v(E){const g=i.get(E);n.deleteTexture(g.__webglTexture);const B=E.source,ee=f.get(B);delete ee[g.__cacheKey],o.memory.textures--}function b(E){const g=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(g.__webglFramebuffer[ee]))for(let ce=0;ce<g.__webglFramebuffer[ee].length;ce++)n.deleteFramebuffer(g.__webglFramebuffer[ee][ce]);else n.deleteFramebuffer(g.__webglFramebuffer[ee]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[ee])}else{if(Array.isArray(g.__webglFramebuffer))for(let ee=0;ee<g.__webglFramebuffer.length;ee++)n.deleteFramebuffer(g.__webglFramebuffer[ee]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let ee=0;ee<g.__webglColorRenderbuffer.length;ee++)g.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[ee]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const B=E.textures;for(let ee=0,ce=B.length;ee<ce;ee++){const Z=i.get(B[ee]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(B[ee])}i.remove(E)}let F=0;function z(){F=0}function G(){const E=F;return E>=s.maxTextures&&it("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),F+=1,E}function se(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function ne(E,g){const B=i.get(E);if(E.isVideoTexture&&me(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&B.__version!==E.version){const ee=E.image;if(ee===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{H(B,E,g);return}}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+g)}function k(E,g){const B=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){H(B,E,g);return}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+g)}function W(E,g){const B=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){H(B,E,g);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+g)}function Y(E,g){const B=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&B.__version!==E.version){K(B,E,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+g)}const xe={[_s]:n.REPEAT,[Bn]:n.CLAMP_TO_EDGE,[dc]:n.MIRRORED_REPEAT},ye={[rn]:n.NEAREST,[Q_]:n.NEAREST_MIPMAP_NEAREST,[yo]:n.NEAREST_MIPMAP_LINEAR,[Kt]:n.LINEAR,[al]:n.LINEAR_MIPMAP_NEAREST,[Ri]:n.LINEAR_MIPMAP_LINEAR},ie={[i0]:n.NEVER,[l0]:n.ALWAYS,[s0]:n.LESS,[Eu]:n.LEQUAL,[r0]:n.EQUAL,[Tu]:n.GEQUAL,[o0]:n.GREATER,[a0]:n.NOTEQUAL};function te(E,g){if(g.type===Kn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Kt||g.magFilter===al||g.magFilter===yo||g.magFilter===Ri||g.minFilter===Kt||g.minFilter===al||g.minFilter===yo||g.minFilter===Ri)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,xe[g.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,xe[g.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,xe[g.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ye[g.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ye[g.minFilter]),g.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,ie[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===rn||g.minFilter!==yo&&g.minFilter!==Ri||g.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function J(E,g){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",N));const ee=g.source;let ce=f.get(ee);ce===void 0&&(ce={},f.set(ee,ce));const Z=se(g);if(Z!==E.__cacheKey){ce[Z]===void 0&&(ce[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ce[Z].usedTimes++;const Fe=ce[E.__cacheKey];Fe!==void 0&&(ce[E.__cacheKey].usedTimes--,Fe.usedTimes===0&&v(g)),E.__cacheKey=Z,E.__webglTexture=ce[Z].texture}return B}function Me(E,g,B){return Math.floor(Math.floor(E/B)/g)}function pe(E,g,B,ee){const Z=E.updateRanges;if(Z.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,B,ee,g.data);else{Z.sort((Se,Ce)=>Se.start-Ce.start);let Fe=0;for(let Se=1;Se<Z.length;Se++){const Ce=Z[Fe],Le=Z[Se],Ve=Ce.start+Ce.count,Re=Me(Le.start,g.width,4),lt=Me(Ce.start,g.width,4);Le.start<=Ve+1&&Re===lt&&Me(Le.start+Le.count-1,g.width,4)===Re?Ce.count=Math.max(Ce.count,Le.start+Le.count-Ce.start):(++Fe,Z[Fe]=Le)}Z.length=Fe+1;const Te=n.getParameter(n.UNPACK_ROW_LENGTH),ke=n.getParameter(n.UNPACK_SKIP_PIXELS),Je=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let Se=0,Ce=Z.length;Se<Ce;Se++){const Le=Z[Se],Ve=Math.floor(Le.start/4),Re=Math.ceil(Le.count/4),lt=Ve%g.width,X=Math.floor(Ve/g.width),Be=Re,we=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,lt),n.pixelStorei(n.UNPACK_SKIP_ROWS,X),t.texSubImage2D(n.TEXTURE_2D,0,lt,X,Be,we,B,ee,g.data)}E.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Te),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,Je)}}function H(E,g,B){let ee=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(ee=n.TEXTURE_3D);const ce=J(E,g),Z=g.source;t.bindTexture(ee,E.__webglTexture,n.TEXTURE0+B);const Fe=i.get(Z);if(Z.version!==Fe.__version||ce===!0){t.activeTexture(n.TEXTURE0+B);const Te=Mt.getPrimaries(Mt.workingColorSpace),ke=g.colorSpace===Zi?null:Mt.getPrimaries(g.colorSpace),Je=g.colorSpace===Zi||Te===ke?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let Se=x(g.image,!1,s.maxTextureSize);Se=ue(g,Se);const Ce=r.convert(g.format,g.colorSpace),Le=r.convert(g.type);let Ve=D(g.internalFormat,Ce,Le,g.colorSpace,g.isVideoTexture);te(ee,g);let Re;const lt=g.mipmaps,X=g.isVideoTexture!==!0,Be=Fe.__version===void 0||ce===!0,we=Z.dataReady,Ge=R(g,Se);if(g.isDepthTexture)Ve=T(g.format===xs,g.type),Be&&(X?t.texStorage2D(n.TEXTURE_2D,1,Ve,Se.width,Se.height):t.texImage2D(n.TEXTURE_2D,0,Ve,Se.width,Se.height,0,Ce,Le,null));else if(g.isDataTexture)if(lt.length>0){X&&Be&&t.texStorage2D(n.TEXTURE_2D,Ge,Ve,lt[0].width,lt[0].height);for(let Ae=0,_e=lt.length;Ae<_e;Ae++)Re=lt[Ae],X?we&&t.texSubImage2D(n.TEXTURE_2D,Ae,0,0,Re.width,Re.height,Ce,Le,Re.data):t.texImage2D(n.TEXTURE_2D,Ae,Ve,Re.width,Re.height,0,Ce,Le,Re.data);g.generateMipmaps=!1}else X?(Be&&t.texStorage2D(n.TEXTURE_2D,Ge,Ve,Se.width,Se.height),we&&pe(g,Se,Ce,Le)):t.texImage2D(n.TEXTURE_2D,0,Ve,Se.width,Se.height,0,Ce,Le,Se.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){X&&Be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ge,Ve,lt[0].width,lt[0].height,Se.depth);for(let Ae=0,_e=lt.length;Ae<_e;Ae++)if(Re=lt[Ae],g.format!==Hn)if(Ce!==null)if(X){if(we)if(g.layerUpdates.size>0){const Pe=df(Re.width,Re.height,g.format,g.type);for(const ot of g.layerUpdates){const Ut=Re.data.subarray(ot*Pe/Re.data.BYTES_PER_ELEMENT,(ot+1)*Pe/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ae,0,0,ot,Re.width,Re.height,1,Ce,Ut)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ae,0,0,0,Re.width,Re.height,Se.depth,Ce,Re.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Ae,Ve,Re.width,Re.height,Se.depth,0,Re.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?we&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Ae,0,0,0,Re.width,Re.height,Se.depth,Ce,Le,Re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Ae,Ve,Re.width,Re.height,Se.depth,0,Ce,Le,Re.data)}else{X&&Be&&t.texStorage2D(n.TEXTURE_2D,Ge,Ve,lt[0].width,lt[0].height);for(let Ae=0,_e=lt.length;Ae<_e;Ae++)Re=lt[Ae],g.format!==Hn?Ce!==null?X?we&&t.compressedTexSubImage2D(n.TEXTURE_2D,Ae,0,0,Re.width,Re.height,Ce,Re.data):t.compressedTexImage2D(n.TEXTURE_2D,Ae,Ve,Re.width,Re.height,0,Re.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?we&&t.texSubImage2D(n.TEXTURE_2D,Ae,0,0,Re.width,Re.height,Ce,Le,Re.data):t.texImage2D(n.TEXTURE_2D,Ae,Ve,Re.width,Re.height,0,Ce,Le,Re.data)}else if(g.isDataArrayTexture)if(X){if(Be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ge,Ve,Se.width,Se.height,Se.depth),we)if(g.layerUpdates.size>0){const Ae=df(Se.width,Se.height,g.format,g.type);for(const _e of g.layerUpdates){const Pe=Se.data.subarray(_e*Ae/Se.data.BYTES_PER_ELEMENT,(_e+1)*Ae/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,_e,Se.width,Se.height,1,Ce,Le,Pe)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Ce,Le,Se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ve,Se.width,Se.height,Se.depth,0,Ce,Le,Se.data);else if(g.isData3DTexture)X?(Be&&t.texStorage3D(n.TEXTURE_3D,Ge,Ve,Se.width,Se.height,Se.depth),we&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Ce,Le,Se.data)):t.texImage3D(n.TEXTURE_3D,0,Ve,Se.width,Se.height,Se.depth,0,Ce,Le,Se.data);else if(g.isFramebufferTexture){if(Be)if(X)t.texStorage2D(n.TEXTURE_2D,Ge,Ve,Se.width,Se.height);else{let Ae=Se.width,_e=Se.height;for(let Pe=0;Pe<Ge;Pe++)t.texImage2D(n.TEXTURE_2D,Pe,Ve,Ae,_e,0,Ce,Le,null),Ae>>=1,_e>>=1}}else if(lt.length>0){if(X&&Be){const Ae=ge(lt[0]);t.texStorage2D(n.TEXTURE_2D,Ge,Ve,Ae.width,Ae.height)}for(let Ae=0,_e=lt.length;Ae<_e;Ae++)Re=lt[Ae],X?we&&t.texSubImage2D(n.TEXTURE_2D,Ae,0,0,Ce,Le,Re):t.texImage2D(n.TEXTURE_2D,Ae,Ve,Ce,Le,Re);g.generateMipmaps=!1}else if(X){if(Be){const Ae=ge(Se);t.texStorage2D(n.TEXTURE_2D,Ge,Ve,Ae.width,Ae.height)}we&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ce,Le,Se)}else t.texImage2D(n.TEXTURE_2D,0,Ve,Ce,Le,Se);m(g)&&p(ee),Fe.__version=Z.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function K(E,g,B){if(g.image.length!==6)return;const ee=J(E,g),ce=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+B);const Z=i.get(ce);if(ce.version!==Z.__version||ee===!0){t.activeTexture(n.TEXTURE0+B);const Fe=Mt.getPrimaries(Mt.workingColorSpace),Te=g.colorSpace===Zi?null:Mt.getPrimaries(g.colorSpace),ke=g.colorSpace===Zi||Fe===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const Je=g.isCompressedTexture||g.image[0].isCompressedTexture,Se=g.image[0]&&g.image[0].isDataTexture,Ce=[];for(let _e=0;_e<6;_e++)!Je&&!Se?Ce[_e]=x(g.image[_e],!0,s.maxCubemapSize):Ce[_e]=Se?g.image[_e].image:g.image[_e],Ce[_e]=ue(g,Ce[_e]);const Le=Ce[0],Ve=r.convert(g.format,g.colorSpace),Re=r.convert(g.type),lt=D(g.internalFormat,Ve,Re,g.colorSpace),X=g.isVideoTexture!==!0,Be=Z.__version===void 0||ee===!0,we=ce.dataReady;let Ge=R(g,Le);te(n.TEXTURE_CUBE_MAP,g);let Ae;if(Je){X&&Be&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ge,lt,Le.width,Le.height);for(let _e=0;_e<6;_e++){Ae=Ce[_e].mipmaps;for(let Pe=0;Pe<Ae.length;Pe++){const ot=Ae[Pe];g.format!==Hn?Ve!==null?X?we&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Pe,0,0,ot.width,ot.height,Ve,ot.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Pe,lt,ot.width,ot.height,0,ot.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Pe,0,0,ot.width,ot.height,Ve,Re,ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Pe,lt,ot.width,ot.height,0,Ve,Re,ot.data)}}}else{if(Ae=g.mipmaps,X&&Be){Ae.length>0&&Ge++;const _e=ge(Ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ge,lt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Se){X?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ce[_e].width,Ce[_e].height,Ve,Re,Ce[_e].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,lt,Ce[_e].width,Ce[_e].height,0,Ve,Re,Ce[_e].data);for(let Pe=0;Pe<Ae.length;Pe++){const Ut=Ae[Pe].image[_e].image;X?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Pe+1,0,0,Ut.width,Ut.height,Ve,Re,Ut.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Pe+1,lt,Ut.width,Ut.height,0,Ve,Re,Ut.data)}}else{X?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ve,Re,Ce[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,lt,Ve,Re,Ce[_e]);for(let Pe=0;Pe<Ae.length;Pe++){const ot=Ae[Pe];X?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Pe+1,0,0,Ve,Re,ot.image[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Pe+1,lt,Ve,Re,ot.image[_e])}}}m(g)&&p(n.TEXTURE_CUBE_MAP),Z.__version=ce.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function ve(E,g,B,ee,ce,Z){const Fe=r.convert(B.format,B.colorSpace),Te=r.convert(B.type),ke=D(B.internalFormat,Fe,Te,B.colorSpace),Je=i.get(g),Se=i.get(B);if(Se.__renderTarget=g,!Je.__hasExternalTextures){const Ce=Math.max(1,g.width>>Z),Le=Math.max(1,g.height>>Z);ce===n.TEXTURE_3D||ce===n.TEXTURE_2D_ARRAY?t.texImage3D(ce,Z,ke,Ce,Le,g.depth,0,Fe,Te,null):t.texImage2D(ce,Z,ke,Ce,Le,0,Fe,Te,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),be(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,ce,Se.__webglTexture,0,U(g)):(ce===n.TEXTURE_2D||ce>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,ce,Se.__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function je(E,g,B){if(n.bindRenderbuffer(n.RENDERBUFFER,E),g.depthBuffer){const ee=g.depthTexture,ce=ee&&ee.isDepthTexture?ee.type:null,Z=T(g.stencilBuffer,ce),Fe=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;be(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,U(g),Z,g.width,g.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,U(g),Z,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Z,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Fe,n.RENDERBUFFER,E)}else{const ee=g.textures;for(let ce=0;ce<ee.length;ce++){const Z=ee[ce],Fe=r.convert(Z.format,Z.colorSpace),Te=r.convert(Z.type),ke=D(Z.internalFormat,Fe,Te,Z.colorSpace);be(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,U(g),ke,g.width,g.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,U(g),ke,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ke,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ue(E,g,B){const ee=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ce=i.get(g.depthTexture);if(ce.__renderTarget=g,(!ce.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),ee){if(ce.__webglInit===void 0&&(ce.__webglInit=!0,g.depthTexture.addEventListener("dispose",N)),ce.__webglTexture===void 0){ce.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ce.__webglTexture),te(n.TEXTURE_CUBE_MAP,g.depthTexture);const Je=r.convert(g.depthTexture.format),Se=r.convert(g.depthTexture.type);let Ce;g.depthTexture.format===Bi?Ce=n.DEPTH_COMPONENT24:g.depthTexture.format===xs&&(Ce=n.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Ce,g.width,g.height,0,Je,Se,null)}}else ne(g.depthTexture,0);const Z=ce.__webglTexture,Fe=U(g),Te=ee?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,ke=g.depthTexture.format===xs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===Bi)be(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ke,Te,Z,0,Fe):n.framebufferTexture2D(n.FRAMEBUFFER,ke,Te,Z,0);else if(g.depthTexture.format===xs)be(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ke,Te,Z,0,Fe):n.framebufferTexture2D(n.FRAMEBUFFER,ke,Te,Z,0);else throw new Error("Unknown depthTexture format")}function xt(E){const g=i.get(E),B=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){const ee=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),ee){const ce=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,ee.removeEventListener("dispose",ce)};ee.addEventListener("dispose",ce),g.__depthDisposeCallback=ce}g.__boundDepthTexture=ee}if(E.depthTexture&&!g.__autoAllocateDepthBuffer)if(B)for(let ee=0;ee<6;ee++)Ue(g.__webglFramebuffer[ee],E,ee);else{const ee=E.texture.mipmaps;ee&&ee.length>0?Ue(g.__webglFramebuffer[0],E,0):Ue(g.__webglFramebuffer,E,0)}else if(B){g.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[ee]),g.__webglDepthbuffer[ee]===void 0)g.__webglDepthbuffer[ee]=n.createRenderbuffer(),je(g.__webglDepthbuffer[ee],E,!1);else{const ce=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=g.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,Z)}}else{const ee=E.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),je(g.__webglDepthbuffer,E,!1);else{const ce=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,Z)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function O(E,g,B){const ee=i.get(E);g!==void 0&&ve(ee.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&xt(E)}function V(E){const g=E.texture,B=i.get(E),ee=i.get(g);E.addEventListener("dispose",L);const ce=E.textures,Z=E.isWebGLCubeRenderTarget===!0,Fe=ce.length>1;if(Fe||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=g.version,o.memory.textures++),Z){B.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer[Te]=[];for(let ke=0;ke<g.mipmaps.length;ke++)B.__webglFramebuffer[Te][ke]=n.createFramebuffer()}else B.__webglFramebuffer[Te]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer=[];for(let Te=0;Te<g.mipmaps.length;Te++)B.__webglFramebuffer[Te]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Fe)for(let Te=0,ke=ce.length;Te<ke;Te++){const Je=i.get(ce[Te]);Je.__webglTexture===void 0&&(Je.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&be(E)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Te=0;Te<ce.length;Te++){const ke=ce[Te];B.__webglColorRenderbuffer[Te]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[Te]);const Je=r.convert(ke.format,ke.colorSpace),Se=r.convert(ke.type),Ce=D(ke.internalFormat,Je,Se,ke.colorSpace,E.isXRRenderTarget===!0),Le=U(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,Ce,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,B.__webglColorRenderbuffer[Te])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),je(B.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),te(n.TEXTURE_CUBE_MAP,g);for(let Te=0;Te<6;Te++)if(g.mipmaps&&g.mipmaps.length>0)for(let ke=0;ke<g.mipmaps.length;ke++)ve(B.__webglFramebuffer[Te][ke],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ke);else ve(B.__webglFramebuffer[Te],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);m(g)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let Te=0,ke=ce.length;Te<ke;Te++){const Je=ce[Te],Se=i.get(Je);let Ce=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Ce=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ce,Se.__webglTexture),te(Ce,Je),ve(B.__webglFramebuffer,E,Je,n.COLOR_ATTACHMENT0+Te,Ce,0),m(Je)&&p(Ce)}t.unbindTexture()}else{let Te=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Te=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Te,ee.__webglTexture),te(Te,g),g.mipmaps&&g.mipmaps.length>0)for(let ke=0;ke<g.mipmaps.length;ke++)ve(B.__webglFramebuffer[ke],E,g,n.COLOR_ATTACHMENT0,Te,ke);else ve(B.__webglFramebuffer,E,g,n.COLOR_ATTACHMENT0,Te,0);m(g)&&p(Te),t.unbindTexture()}E.depthBuffer&&xt(E)}function Q(E){const g=E.textures;for(let B=0,ee=g.length;B<ee;B++){const ce=g[B];if(m(ce)){const Z=A(E),Fe=i.get(ce).__webglTexture;t.bindTexture(Z,Fe),p(Z),t.unbindTexture()}}}const he=[],ae=[];function fe(E){if(E.samples>0){if(be(E)===!1){const g=E.textures,B=E.width,ee=E.height;let ce=n.COLOR_BUFFER_BIT;const Z=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Fe=i.get(E),Te=g.length>1;if(Te)for(let Je=0;Je<g.length;Je++)t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Je,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Je,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer);const ke=E.texture.mipmaps;ke&&ke.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Je=0;Je<g.length;Je++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ce|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ce|=n.STENCIL_BUFFER_BIT)),Te){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Fe.__webglColorRenderbuffer[Je]);const Se=i.get(g[Je]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Se,0)}n.blitFramebuffer(0,0,B,ee,0,0,B,ee,ce,n.NEAREST),l===!0&&(he.length=0,ae.length=0,he.push(n.COLOR_ATTACHMENT0+Je),E.depthBuffer&&E.resolveDepthBuffer===!1&&(he.push(Z),ae.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ae)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Te)for(let Je=0;Je<g.length;Je++){t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Je,n.RENDERBUFFER,Fe.__webglColorRenderbuffer[Je]);const Se=i.get(g[Je]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Je,n.TEXTURE_2D,Se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const g=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function U(E){return Math.min(s.maxSamples,E.samples)}function be(E){const g=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function me(E){const g=o.render.frame;u.get(E)!==g&&(u.set(E,g),E.update())}function ue(E,g){const B=E.colorSpace,ee=E.format,ce=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==ur&&B!==Zi&&(Mt.getTransfer(B)===It?(ee!==Hn||ce!==In)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):_t("WebGLTextures: Unsupported texture color space:",B)),g}function ge(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=z,this.setTexture2D=ne,this.setTexture2DArray=k,this.setTexture3D=W,this.setTextureCube=Y,this.rebindTextures=O,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=be,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function pS(n,e){function t(i,s=Zi){let r;const o=Mt.getTransfer(s);if(i===In)return n.UNSIGNED_BYTE;if(i===xu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===vu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===rp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===op)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ip)return n.BYTE;if(i===sp)return n.SHORT;if(i===Qr)return n.UNSIGNED_SHORT;if(i===_u)return n.INT;if(i===di)return n.UNSIGNED_INT;if(i===Kn)return n.FLOAT;if(i===Oi)return n.HALF_FLOAT;if(i===ap)return n.ALPHA;if(i===lp)return n.RGB;if(i===Hn)return n.RGBA;if(i===Bi)return n.DEPTH_COMPONENT;if(i===xs)return n.DEPTH_STENCIL;if(i===cp)return n.RED;if(i===Mu)return n.RED_INTEGER;if(i===cr)return n.RG;if(i===yu)return n.RG_INTEGER;if(i===bu)return n.RGBA_INTEGER;if(i===sa||i===ra||i===oa||i===aa)if(o===It)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ra)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===oa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===pc||i===mc||i===gc||i===_c)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===pc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===mc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===gc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_c)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xc||i===vc||i===Mc||i===yc||i===bc||i===Sc||i===Ec)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===xc||i===vc)return o===It?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Mc)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===yc)return r.COMPRESSED_R11_EAC;if(i===bc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Sc)return r.COMPRESSED_RG11_EAC;if(i===Ec)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Tc||i===Ac||i===wc||i===Rc||i===Cc||i===Pc||i===Dc||i===Lc||i===Nc||i===Ic||i===Uc||i===Fc||i===Oc||i===Bc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Tc)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ac)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wc)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rc)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Cc)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pc)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Dc)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Lc)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nc)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ic)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Uc)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fc)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Oc)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bc)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===kc||i===Vc||i===zc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===kc)return o===It?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hc||i===Gc||i===Wc||i===Xc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Hc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Gc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===eo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const mS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gS=`
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

}`;class _S{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new bp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new pi({vertexShader:mS,fragmentShader:gS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pn(new Ba(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xS extends bs{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const x=typeof XRWebGLBinding<"u",m=new _S,p={},A=t.getContextAttributes();let D=null,T=null;const R=[],N=[],L=new at;let I=null;const v=new fn;v.viewport=new kt;const b=new fn;b.viewport=new kt;const F=[v,b],z=new Ex;let G=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let K=R[H];return K===void 0&&(K=new Cl,R[H]=K),K.getTargetRaySpace()},this.getControllerGrip=function(H){let K=R[H];return K===void 0&&(K=new Cl,R[H]=K),K.getGripSpace()},this.getHand=function(H){let K=R[H];return K===void 0&&(K=new Cl,R[H]=K),K.getHandSpace()};function ne(H){const K=N.indexOf(H.inputSource);if(K===-1)return;const ve=R[K];ve!==void 0&&(ve.update(H.inputSource,H.frame,c||o),ve.dispatchEvent({type:H.type,data:H.inputSource}))}function k(){s.removeEventListener("select",ne),s.removeEventListener("selectstart",ne),s.removeEventListener("selectend",ne),s.removeEventListener("squeeze",ne),s.removeEventListener("squeezestart",ne),s.removeEventListener("squeezeend",ne),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",W);for(let H=0;H<R.length;H++){const K=N[H];K!==null&&(N[H]=null,R[H].disconnect(K))}G=null,se=null,m.reset();for(const H in p)delete p[H];e.setRenderTarget(D),d=null,f=null,h=null,s=null,T=null,pe.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,i.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(D=e.getRenderTarget(),s.addEventListener("select",ne),s.addEventListener("selectstart",ne),s.addEventListener("selectend",ne),s.addEventListener("squeeze",ne),s.addEventListener("squeezestart",ne),s.addEventListener("squeezeend",ne),s.addEventListener("end",k),s.addEventListener("inputsourceschange",W),A.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(L),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,je=null,Ue=null;A.depth&&(Ue=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=A.stencil?xs:Bi,je=A.stencil?eo:di);const xt={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(xt),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new hi(f.textureWidth,f.textureHeight,{format:Hn,type:In,depthTexture:new so(f.textureWidth,f.textureHeight,je,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ve={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new hi(d.framebufferWidth,d.framebufferHeight,{format:Hn,type:In,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),pe.setContext(s),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(H){for(let K=0;K<H.removed.length;K++){const ve=H.removed[K],je=N.indexOf(ve);je>=0&&(N[je]=null,R[je].disconnect(ve))}for(let K=0;K<H.added.length;K++){const ve=H.added[K];let je=N.indexOf(ve);if(je===-1){for(let xt=0;xt<R.length;xt++)if(xt>=N.length){N.push(ve),je=xt;break}else if(N[xt]===null){N[xt]=ve,je=xt;break}if(je===-1)break}const Ue=R[je];Ue&&Ue.connect(ve)}}const Y=new q,xe=new q;function ye(H,K,ve){Y.setFromMatrixPosition(K.matrixWorld),xe.setFromMatrixPosition(ve.matrixWorld);const je=Y.distanceTo(xe),Ue=K.projectionMatrix.elements,xt=ve.projectionMatrix.elements,O=Ue[14]/(Ue[10]-1),V=Ue[14]/(Ue[10]+1),Q=(Ue[9]+1)/Ue[5],he=(Ue[9]-1)/Ue[5],ae=(Ue[8]-1)/Ue[0],fe=(xt[8]+1)/xt[0],U=O*ae,be=O*fe,me=je/(-ae+fe),ue=me*-ae;if(K.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(ue),H.translateZ(me),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),Ue[10]===-1)H.projectionMatrix.copy(K.projectionMatrix),H.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const ge=O+me,E=V+me,g=U-ue,B=be+(je-ue),ee=Q*V/E*ge,ce=he*V/E*ge;H.projectionMatrix.makePerspective(g,B,ee,ce,ge,E),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function ie(H,K){K===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(K.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let K=H.near,ve=H.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),z.near=b.near=v.near=K,z.far=b.far=v.far=ve,(G!==z.near||se!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),G=z.near,se=z.far),z.layers.mask=H.layers.mask|6,v.layers.mask=z.layers.mask&3,b.layers.mask=z.layers.mask&5;const je=H.parent,Ue=z.cameras;ie(z,je);for(let xt=0;xt<Ue.length;xt++)ie(Ue[xt],je);Ue.length===2?ye(z,v,b):z.projectionMatrix.copy(v.projectionMatrix),te(H,z,je)};function te(H,K,ve){ve===null?H.matrix.copy(K.matrixWorld):(H.matrix.copy(ve.matrixWorld),H.matrix.invert(),H.matrix.multiply(K.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(K.projectionMatrix),H.projectionMatrixInverse.copy(K.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=hr*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(H){return p[H]};let J=null;function Me(H,K){if(u=K.getViewerPose(c||o),_=K,u!==null){const ve=u.views;d!==null&&(e.setRenderTargetFramebuffer(T,d.framebuffer),e.setRenderTarget(T));let je=!1;ve.length!==z.cameras.length&&(z.cameras.length=0,je=!0);for(let V=0;V<ve.length;V++){const Q=ve[V];let he=null;if(d!==null)he=d.getViewport(Q);else{const fe=h.getViewSubImage(f,Q);he=fe.viewport,V===0&&(e.setRenderTargetTextures(T,fe.colorTexture,fe.depthStencilTexture),e.setRenderTarget(T))}let ae=F[V];ae===void 0&&(ae=new fn,ae.layers.enable(V),ae.viewport=new kt,F[V]=ae),ae.matrix.fromArray(Q.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Q.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(he.x,he.y,he.width,he.height),V===0&&(z.matrix.copy(ae.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),je===!0&&z.cameras.push(ae)}const Ue=s.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=i.getBinding();const V=h.getDepthInformation(ve[0]);V&&V.isValid&&V.texture&&m.init(V,s.renderState)}if(Ue&&Ue.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let V=0;V<ve.length;V++){const Q=ve[V].camera;if(Q){let he=p[Q];he||(he=new bp,p[Q]=he);const ae=h.getCameraImage(Q);he.sourceTexture=ae}}}}for(let ve=0;ve<R.length;ve++){const je=N[ve],Ue=R[ve];je!==null&&Ue!==void 0&&Ue.update(je,K,c||o)}J&&J(H,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),_=null}const pe=new Dp;pe.setAnimationLoop(Me),this.setAnimationLoop=function(H){J=H},this.dispose=function(){}}}const ds=new Cn,vS=new ct;function MS(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,mp(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,A,D,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,T)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,A,D):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p),D=A.envMap,T=A.envMapRotation;D&&(m.envMap.value=D,ds.copy(T),ds.x*=-1,ds.y*=-1,ds.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),m.envMapRotation.value.setFromMatrix4(vS.makeRotationFromEuler(ds)),m.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,D){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=D*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function yS(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,D){const T=D.program;i.uniformBlockBinding(A,T)}function c(A,D){let T=s[A.id];T===void 0&&(_(A),T=u(A),s[A.id]=T,A.addEventListener("dispose",m));const R=D.program;i.updateUBOMapping(A,R);const N=e.render.frame;r[A.id]!==N&&(f(A),r[A.id]=N)}function u(A){const D=h();A.__bindingPointIndex=D;const T=n.createBuffer(),R=A.__size,N=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,R,N),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,D,T),T}function h(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return _t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const D=s[A.id],T=A.uniforms,R=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,D);for(let N=0,L=T.length;N<L;N++){const I=Array.isArray(T[N])?T[N]:[T[N]];for(let v=0,b=I.length;v<b;v++){const F=I[v];if(d(F,N,v,R)===!0){const z=F.__offset,G=Array.isArray(F.value)?F.value:[F.value];let se=0;for(let ne=0;ne<G.length;ne++){const k=G[ne],W=x(k);typeof k=="number"||typeof k=="boolean"?(F.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,z+se,F.__data)):k.isMatrix3?(F.__data[0]=k.elements[0],F.__data[1]=k.elements[1],F.__data[2]=k.elements[2],F.__data[3]=0,F.__data[4]=k.elements[3],F.__data[5]=k.elements[4],F.__data[6]=k.elements[5],F.__data[7]=0,F.__data[8]=k.elements[6],F.__data[9]=k.elements[7],F.__data[10]=k.elements[8],F.__data[11]=0):(k.toArray(F.__data,se),se+=W.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(A,D,T,R){const N=A.value,L=D+"_"+T;if(R[L]===void 0)return typeof N=="number"||typeof N=="boolean"?R[L]=N:R[L]=N.clone(),!0;{const I=R[L];if(typeof N=="number"||typeof N=="boolean"){if(I!==N)return R[L]=N,!0}else if(I.equals(N)===!1)return I.copy(N),!0}return!1}function _(A){const D=A.uniforms;let T=0;const R=16;for(let L=0,I=D.length;L<I;L++){const v=Array.isArray(D[L])?D[L]:[D[L]];for(let b=0,F=v.length;b<F;b++){const z=v[b],G=Array.isArray(z.value)?z.value:[z.value];for(let se=0,ne=G.length;se<ne;se++){const k=G[se],W=x(k),Y=T%R,xe=Y%W.boundary,ye=Y+xe;T+=xe,ye!==0&&R-ye<W.storage&&(T+=R-ye),z.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=T,T+=W.storage}}}const N=T%R;return N>0&&(T+=R-N),A.__size=T,A.__cache={},this}function x(A){const D={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(D.boundary=4,D.storage=4):A.isVector2?(D.boundary=8,D.storage=8):A.isVector3||A.isColor?(D.boundary=16,D.storage=12):A.isVector4?(D.boundary=16,D.storage=16):A.isMatrix3?(D.boundary=48,D.storage=48):A.isMatrix4?(D.boundary=64,D.storage=64):A.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):it("WebGLRenderer: Unsupported uniform value type.",A),D}function m(A){const D=A.target;D.removeEventListener("dispose",m);const T=o.indexOf(D.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(s[D.id]),delete s[D.id],delete r[D.id]}function p(){for(const A in s)n.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}const bS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ni=null;function SS(){return ni===null&&(ni=new Cu(bS,16,16,cr,Oi),ni.name="DFG_LUT",ni.minFilter=Kt,ni.magFilter=Kt,ni.wrapS=Bn,ni.wrapT=Bn,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}class ES{constructor(e={}){const{canvas:t=u0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=In}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;const x=d,m=new Set([bu,yu,Mu]),p=new Set([In,di,Qr,eo,xu,vu]),A=new Uint32Array(4),D=new Int32Array(4);let T=null,R=null;const N=[],L=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let b=!1;this._outputColorSpace=Wt;let F=0,z=0,G=null,se=-1,ne=null;const k=new kt,W=new kt;let Y=null;const xe=new ft(0);let ye=0,ie=t.width,te=t.height,J=1,Me=null,pe=null;const H=new kt(0,0,ie,te),K=new kt(0,0,ie,te);let ve=!1;const je=new Du;let Ue=!1,xt=!1;const O=new ct,V=new q,Q=new kt,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function fe(){return G===null?J:1}let U=i;function be(w,j){return t.getContext(w,j)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gu}`),t.addEventListener("webglcontextlost",ot,!1),t.addEventListener("webglcontextrestored",Ut,!1),t.addEventListener("webglcontextcreationerror",dt,!1),U===null){const j="webgl2";if(U=be(j,w),U===null)throw be(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw _t("WebGLRenderer: "+w.message),w}let me,ue,ge,E,g,B,ee,ce,Z,Fe,Te,ke,Je,Se,Ce,Le,Ve,Re,lt,X,Be,we,Ge,Ae;function _e(){me=new Sy(U),me.init(),we=new pS(U,me),ue=new py(U,me,e,we),ge=new fS(U,me),ue.reversedDepthBuffer&&f&&ge.buffers.depth.setReversed(!0),E=new Ay(U),g=new Jb,B=new dS(U,me,ge,g,ue,we,E),ee=new gy(v),ce=new by(v),Z=new Px(U),Ge=new fy(U,Z),Fe=new Ey(U,Z,E,Ge),Te=new Ry(U,Fe,Z,E),lt=new wy(U,ue,B),Le=new my(g),ke=new Kb(v,ee,ce,me,ue,Ge,Le),Je=new MS(v,g),Se=new Qb,Ce=new rS(me),Re=new hy(v,ee,ce,ge,Te,_,l),Ve=new uS(v,Te,ue),Ae=new yS(U,E,ue,ge),X=new dy(U,me,E),Be=new Ty(U,me,E),E.programs=ke.programs,v.capabilities=ue,v.extensions=me,v.properties=g,v.renderLists=Se,v.shadowMap=Ve,v.state=ge,v.info=E}_e(),x!==In&&(I=new Py(x,t.width,t.height,s,r));const Pe=new xS(v,U);this.xr=Pe,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const w=me.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=me.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(w){w!==void 0&&(J=w,this.setSize(ie,te,!1))},this.getSize=function(w){return w.set(ie,te)},this.setSize=function(w,j,oe=!0){if(Pe.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=w,te=j,t.width=Math.floor(w*J),t.height=Math.floor(j*J),oe===!0&&(t.style.width=w+"px",t.style.height=j+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,w,j)},this.getDrawingBufferSize=function(w){return w.set(ie*J,te*J).floor()},this.setDrawingBufferSize=function(w,j,oe){ie=w,te=j,J=oe,t.width=Math.floor(w*oe),t.height=Math.floor(j*oe),this.setViewport(0,0,w,j)},this.setEffects=function(w){if(x===In){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let j=0;j<w.length;j++)if(w[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(k)},this.getViewport=function(w){return w.copy(H)},this.setViewport=function(w,j,oe,re){w.isVector4?H.set(w.x,w.y,w.z,w.w):H.set(w,j,oe,re),ge.viewport(k.copy(H).multiplyScalar(J).round())},this.getScissor=function(w){return w.copy(K)},this.setScissor=function(w,j,oe,re){w.isVector4?K.set(w.x,w.y,w.z,w.w):K.set(w,j,oe,re),ge.scissor(W.copy(K).multiplyScalar(J).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(w){ge.setScissorTest(ve=w)},this.setOpaqueSort=function(w){Me=w},this.setTransparentSort=function(w){pe=w},this.getClearColor=function(w){return w.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(w=!0,j=!0,oe=!0){let re=0;if(w){let $=!1;if(G!==null){const Ne=G.texture.format;$=m.has(Ne)}if($){const Ne=G.texture.type,qe=p.has(Ne),Ie=Re.getClearColor(),We=Re.getClearAlpha(),Ze=Ie.r,rt=Ie.g,nt=Ie.b;qe?(A[0]=Ze,A[1]=rt,A[2]=nt,A[3]=We,U.clearBufferuiv(U.COLOR,0,A)):(D[0]=Ze,D[1]=rt,D[2]=nt,D[3]=We,U.clearBufferiv(U.COLOR,0,D))}else re|=U.COLOR_BUFFER_BIT}j&&(re|=U.DEPTH_BUFFER_BIT),oe&&(re|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ot,!1),t.removeEventListener("webglcontextrestored",Ut,!1),t.removeEventListener("webglcontextcreationerror",dt,!1),Re.dispose(),Se.dispose(),Ce.dispose(),g.dispose(),ee.dispose(),ce.dispose(),Te.dispose(),Ge.dispose(),Ae.dispose(),ke.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",ho),Pe.removeEventListener("sessionend",Er),mi.stop()};function ot(w){w.preventDefault(),Dh("WebGLRenderer: Context Lost."),b=!0}function Ut(){Dh("WebGLRenderer: Context Restored."),b=!1;const w=E.autoReset,j=Ve.enabled,oe=Ve.autoUpdate,re=Ve.needsUpdate,$=Ve.type;_e(),E.autoReset=w,Ve.enabled=j,Ve.autoUpdate=oe,Ve.needsUpdate=re,Ve.type=$}function dt(w){_t("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Pn(w){const j=w.target;j.removeEventListener("dispose",Pn),qn(j)}function qn(w){Xa(w),g.remove(w)}function Xa(w){const j=g.get(w).programs;j!==void 0&&(j.forEach(function(oe){ke.releaseProgram(oe)}),w.isShaderMaterial&&ke.releaseShaderCache(w))}this.renderBufferDirect=function(w,j,oe,re,$,Ne){j===null&&(j=he);const qe=$.isMesh&&$.matrixWorld.determinant()<0,Ie=ja(w,j,oe,re,$);ge.setMaterial(re,qe);let We=oe.index,Ze=1;if(re.wireframe===!0){if(We=Fe.getWireframeAttribute(oe),We===void 0)return;Ze=2}const rt=oe.drawRange,nt=oe.attributes.position;let pt=rt.start*Ze,Rt=(rt.start+rt.count)*Ze;Ne!==null&&(pt=Math.max(pt,Ne.start*Ze),Rt=Math.min(Rt,(Ne.start+Ne.count)*Ze)),We!==null?(pt=Math.max(pt,0),Rt=Math.min(Rt,We.count)):nt!=null&&(pt=Math.max(pt,0),Rt=Math.min(Rt,nt.count));const Vt=Rt-pt;if(Vt<0||Vt===1/0)return;Ge.setup($,re,Ie,oe,We);let zt,Ct=X;if(We!==null&&(zt=Z.get(We),Ct=Be,Ct.setIndex(zt)),$.isMesh)re.wireframe===!0?(ge.setLineWidth(re.wireframeLinewidth*fe()),Ct.setMode(U.LINES)):Ct.setMode(U.TRIANGLES);else if($.isLine){let ze=re.linewidth;ze===void 0&&(ze=1),ge.setLineWidth(ze*fe()),$.isLineSegments?Ct.setMode(U.LINES):$.isLineLoop?Ct.setMode(U.LINE_LOOP):Ct.setMode(U.LINE_STRIP)}else $.isPoints?Ct.setMode(U.POINTS):$.isSprite&&Ct.setMode(U.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)no("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ct.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(me.get("WEBGL_multi_draw"))Ct.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const ze=$._multiDrawStarts,bt=$._multiDrawCounts,yt=$._multiDrawCount,on=We?Z.get(We).bytesPerElement:1,gi=g.get(re).currentProgram.getUniforms();for(let tn=0;tn<yt;tn++)gi.setValue(U,"_gl_DrawID",tn),Ct.render(ze[tn]/on,bt[tn])}else if($.isInstancedMesh)Ct.renderInstances(pt,Vt,$.count);else if(oe.isInstancedBufferGeometry){const ze=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,bt=Math.min(oe.instanceCount,ze);Ct.renderInstances(pt,Vt,bt)}else Ct.render(pt,Vt)};function uo(w,j,oe){w.transparent===!0&&w.side===oi&&w.forceSinglePass===!1?(w.side=Rn,w.needsUpdate=!0,As(w,j,oe),w.side=Fi,w.needsUpdate=!0,As(w,j,oe),w.side=oi):As(w,j,oe)}this.compile=function(w,j,oe=null){oe===null&&(oe=w),R=Ce.get(oe),R.init(j),L.push(R),oe.traverseVisible(function($){$.isLight&&$.layers.test(j.layers)&&(R.pushLight($),$.castShadow&&R.pushShadow($))}),w!==oe&&w.traverseVisible(function($){$.isLight&&$.layers.test(j.layers)&&(R.pushLight($),$.castShadow&&R.pushShadow($))}),R.setupLights();const re=new Set;return w.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ne=$.material;if(Ne)if(Array.isArray(Ne))for(let qe=0;qe<Ne.length;qe++){const Ie=Ne[qe];uo(Ie,oe,$),re.add(Ie)}else uo(Ne,oe,$),re.add(Ne)}),R=L.pop(),re},this.compileAsync=function(w,j,oe=null){const re=this.compile(w,j,oe);return new Promise($=>{function Ne(){if(re.forEach(function(qe){g.get(qe).currentProgram.isReady()&&re.delete(qe)}),re.size===0){$(w);return}setTimeout(Ne,10)}me.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Sr=null;function qa(w){Sr&&Sr(w)}function ho(){mi.stop()}function Er(){mi.start()}const mi=new Dp;mi.setAnimationLoop(qa),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(w){Sr=w,Pe.setAnimationLoop(w),w===null?mi.stop():mi.start()},Pe.addEventListener("sessionstart",ho),Pe.addEventListener("sessionend",Er),this.render=function(w,j){if(j!==void 0&&j.isCamera!==!0){_t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;const oe=Pe.enabled===!0&&Pe.isPresenting===!0,re=I!==null&&(G===null||oe)&&I.begin(v,G);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(j),j=Pe.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,j,G),R=Ce.get(w,L.length),R.init(j),L.push(R),O.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),je.setFromProjectionMatrix(O,li,j.reversedDepth),xt=this.localClippingEnabled,Ue=Le.init(this.clippingPlanes,xt),T=Se.get(w,N.length),T.init(),N.push(T),Pe.enabled===!0&&Pe.isPresenting===!0){const qe=v.xr.getDepthSensingMesh();qe!==null&&Es(qe,j,-1/0,v.sortObjects)}Es(w,j,0,v.sortObjects),T.finish(),v.sortObjects===!0&&T.sort(Me,pe),ae=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1,ae&&Re.addToRenderList(T,w),this.info.render.frame++,Ue===!0&&Le.beginShadows();const $=R.state.shadowsArray;if(Ve.render($,w,j),Ue===!0&&Le.endShadows(),this.info.autoReset===!0&&this.info.reset(),(re&&I.hasRenderPass())===!1){const qe=T.opaque,Ie=T.transmissive;if(R.setupLights(),j.isArrayCamera){const We=j.cameras;if(Ie.length>0)for(let Ze=0,rt=We.length;Ze<rt;Ze++){const nt=We[Ze];po(qe,Ie,w,nt)}ae&&Re.render(w);for(let Ze=0,rt=We.length;Ze<rt;Ze++){const nt=We[Ze];fo(T,w,nt,nt.viewport)}}else Ie.length>0&&po(qe,Ie,w,j),ae&&Re.render(w),fo(T,w,j)}G!==null&&z===0&&(B.updateMultisampleRenderTarget(G),B.updateRenderTargetMipmap(G)),re&&I.end(v),w.isScene===!0&&w.onAfterRender(v,w,j),Ge.resetDefaultState(),se=-1,ne=null,L.pop(),L.length>0?(R=L[L.length-1],Ue===!0&&Le.setGlobalState(v.clippingPlanes,R.state.camera)):R=null,N.pop(),N.length>0?T=N[N.length-1]:T=null};function Es(w,j,oe,re){if(w.visible===!1)return;if(w.layers.test(j.layers)){if(w.isGroup)oe=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(j);else if(w.isLight)R.pushLight(w),w.castShadow&&R.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||je.intersectsSprite(w)){re&&Q.setFromMatrixPosition(w.matrixWorld).applyMatrix4(O);const qe=Te.update(w),Ie=w.material;Ie.visible&&T.push(w,qe,Ie,oe,Q.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||je.intersectsObject(w))){const qe=Te.update(w),Ie=w.material;if(re&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Q.copy(w.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),Q.copy(qe.boundingSphere.center)),Q.applyMatrix4(w.matrixWorld).applyMatrix4(O)),Array.isArray(Ie)){const We=qe.groups;for(let Ze=0,rt=We.length;Ze<rt;Ze++){const nt=We[Ze],pt=Ie[nt.materialIndex];pt&&pt.visible&&T.push(w,qe,pt,oe,Q.z,nt)}}else Ie.visible&&T.push(w,qe,Ie,oe,Q.z,null)}}const Ne=w.children;for(let qe=0,Ie=Ne.length;qe<Ie;qe++)Es(Ne[qe],j,oe,re)}function fo(w,j,oe,re){const{opaque:$,transmissive:Ne,transparent:qe}=w;R.setupLightsView(oe),Ue===!0&&Le.setGlobalState(v.clippingPlanes,oe),re&&ge.viewport(k.copy(re)),$.length>0&&Ts($,j,oe),Ne.length>0&&Ts(Ne,j,oe),qe.length>0&&Ts(qe,j,oe),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function po(w,j,oe,re){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[re.id]===void 0){const pt=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[re.id]=new hi(1,1,{generateMipmaps:!0,type:pt?Oi:In,minFilter:Ri,samples:ue.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace})}const Ne=R.state.transmissionRenderTarget[re.id],qe=re.viewport||k;Ne.setSize(qe.z*v.transmissionResolutionScale,qe.w*v.transmissionResolutionScale);const Ie=v.getRenderTarget(),We=v.getActiveCubeFace(),Ze=v.getActiveMipmapLevel();v.setRenderTarget(Ne),v.getClearColor(xe),ye=v.getClearAlpha(),ye<1&&v.setClearColor(16777215,.5),v.clear(),ae&&Re.render(oe);const rt=v.toneMapping;v.toneMapping=ui;const nt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),R.setupLightsView(re),Ue===!0&&Le.setGlobalState(v.clippingPlanes,re),Ts(w,oe,re),B.updateMultisampleRenderTarget(Ne),B.updateRenderTargetMipmap(Ne),me.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let Rt=0,Vt=j.length;Rt<Vt;Rt++){const zt=j[Rt],{object:Ct,geometry:ze,material:bt,group:yt}=zt;if(bt.side===oi&&Ct.layers.test(re.layers)){const on=bt.side;bt.side=Rn,bt.needsUpdate=!0,mo(Ct,oe,re,ze,bt,yt),bt.side=on,bt.needsUpdate=!0,pt=!0}}pt===!0&&(B.updateMultisampleRenderTarget(Ne),B.updateRenderTargetMipmap(Ne))}v.setRenderTarget(Ie,We,Ze),v.setClearColor(xe,ye),nt!==void 0&&(re.viewport=nt),v.toneMapping=rt}function Ts(w,j,oe){const re=j.isScene===!0?j.overrideMaterial:null;for(let $=0,Ne=w.length;$<Ne;$++){const qe=w[$],{object:Ie,geometry:We,group:Ze}=qe;let rt=qe.material;rt.allowOverride===!0&&re!==null&&(rt=re),Ie.layers.test(oe.layers)&&mo(Ie,j,oe,We,rt,Ze)}}function mo(w,j,oe,re,$,Ne){w.onBeforeRender(v,j,oe,re,$,Ne),w.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),$.onBeforeRender(v,j,oe,re,w,Ne),$.transparent===!0&&$.side===oi&&$.forceSinglePass===!1?($.side=Rn,$.needsUpdate=!0,v.renderBufferDirect(oe,j,re,$,w,Ne),$.side=Fi,$.needsUpdate=!0,v.renderBufferDirect(oe,j,re,$,w,Ne),$.side=oi):v.renderBufferDirect(oe,j,re,$,w,Ne),w.onAfterRender(v,j,oe,re,$,Ne)}function As(w,j,oe){j.isScene!==!0&&(j=he);const re=g.get(w),$=R.state.lights,Ne=R.state.shadowsArray,qe=$.state.version,Ie=ke.getParameters(w,$.state,Ne,j,oe),We=ke.getProgramCacheKey(Ie);let Ze=re.programs;re.environment=w.isMeshStandardMaterial?j.environment:null,re.fog=j.fog,re.envMap=(w.isMeshStandardMaterial?ce:ee).get(w.envMap||re.environment),re.envMapRotation=re.environment!==null&&w.envMap===null?j.environmentRotation:w.envMapRotation,Ze===void 0&&(w.addEventListener("dispose",Pn),Ze=new Map,re.programs=Ze);let rt=Ze.get(We);if(rt!==void 0){if(re.currentProgram===rt&&re.lightsStateVersion===qe)return _o(w,Ie),rt}else Ie.uniforms=ke.getUniforms(w),w.onBeforeCompile(Ie,v),rt=ke.acquireProgram(Ie,We),Ze.set(We,rt),re.uniforms=Ie.uniforms;const nt=re.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(nt.clippingPlanes=Le.uniform),_o(w,Ie),re.needsLights=$a(w),re.lightsStateVersion=qe,re.needsLights&&(nt.ambientLightColor.value=$.state.ambient,nt.lightProbe.value=$.state.probe,nt.directionalLights.value=$.state.directional,nt.directionalLightShadows.value=$.state.directionalShadow,nt.spotLights.value=$.state.spot,nt.spotLightShadows.value=$.state.spotShadow,nt.rectAreaLights.value=$.state.rectArea,nt.ltc_1.value=$.state.rectAreaLTC1,nt.ltc_2.value=$.state.rectAreaLTC2,nt.pointLights.value=$.state.point,nt.pointLightShadows.value=$.state.pointShadow,nt.hemisphereLights.value=$.state.hemi,nt.directionalShadowMap.value=$.state.directionalShadowMap,nt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,nt.spotShadowMap.value=$.state.spotShadowMap,nt.spotLightMatrix.value=$.state.spotLightMatrix,nt.spotLightMap.value=$.state.spotLightMap,nt.pointShadowMap.value=$.state.pointShadowMap,nt.pointShadowMatrix.value=$.state.pointShadowMatrix),re.currentProgram=rt,re.uniformsList=null,rt}function go(w){if(w.uniformsList===null){const j=w.currentProgram.getUniforms();w.uniformsList=la.seqWithValue(j.seq,w.uniforms)}return w.uniformsList}function _o(w,j){const oe=g.get(w);oe.outputColorSpace=j.outputColorSpace,oe.batching=j.batching,oe.batchingColor=j.batchingColor,oe.instancing=j.instancing,oe.instancingColor=j.instancingColor,oe.instancingMorph=j.instancingMorph,oe.skinning=j.skinning,oe.morphTargets=j.morphTargets,oe.morphNormals=j.morphNormals,oe.morphColors=j.morphColors,oe.morphTargetsCount=j.morphTargetsCount,oe.numClippingPlanes=j.numClippingPlanes,oe.numIntersection=j.numClipIntersection,oe.vertexAlphas=j.vertexAlphas,oe.vertexTangents=j.vertexTangents,oe.toneMapping=j.toneMapping}function ja(w,j,oe,re,$){j.isScene!==!0&&(j=he),B.resetTextureUnits();const Ne=j.fog,qe=re.isMeshStandardMaterial?j.environment:null,Ie=G===null?v.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:ur,We=(re.isMeshStandardMaterial?ce:ee).get(re.envMap||qe),Ze=re.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,rt=!!oe.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),nt=!!oe.morphAttributes.position,pt=!!oe.morphAttributes.normal,Rt=!!oe.morphAttributes.color;let Vt=ui;re.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Vt=v.toneMapping);const zt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Ct=zt!==void 0?zt.length:0,ze=g.get(re),bt=R.state.lights;if(Ue===!0&&(xt===!0||w!==ne)){const $e=w===ne&&re.id===se;Le.setState(re,w,$e)}let yt=!1;re.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==bt.state.version||ze.outputColorSpace!==Ie||$.isBatchedMesh&&ze.batching===!1||!$.isBatchedMesh&&ze.batching===!0||$.isBatchedMesh&&ze.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&ze.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&ze.instancing===!1||!$.isInstancedMesh&&ze.instancing===!0||$.isSkinnedMesh&&ze.skinning===!1||!$.isSkinnedMesh&&ze.skinning===!0||$.isInstancedMesh&&ze.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&ze.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&ze.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&ze.instancingMorph===!1&&$.morphTexture!==null||ze.envMap!==We||re.fog===!0&&ze.fog!==Ne||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Le.numPlanes||ze.numIntersection!==Le.numIntersection)||ze.vertexAlphas!==Ze||ze.vertexTangents!==rt||ze.morphTargets!==nt||ze.morphNormals!==pt||ze.morphColors!==Rt||ze.toneMapping!==Vt||ze.morphTargetsCount!==Ct)&&(yt=!0):(yt=!0,ze.__version=re.version);let on=ze.currentProgram;yt===!0&&(on=As(re,j,$));let gi=!1,tn=!1,ei=!1;const At=on.getUniforms(),nn=ze.uniforms;if(ge.useProgram(on.program)&&(gi=!0,tn=!0,ei=!0),re.id!==se&&(se=re.id,tn=!0),gi||ne!==w){ge.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),At.setValue(U,"projectionMatrix",w.projectionMatrix),At.setValue(U,"viewMatrix",w.matrixWorldInverse);const Yt=At.map.cameraPosition;Yt!==void 0&&Yt.setValue(U,V.setFromMatrixPosition(w.matrixWorld)),ue.logarithmicDepthBuffer&&At.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&At.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),ne!==w&&(ne=w,tn=!0,ei=!0)}if(ze.needsLights&&(bt.state.directionalShadowMap.length>0&&At.setValue(U,"directionalShadowMap",bt.state.directionalShadowMap,B),bt.state.spotShadowMap.length>0&&At.setValue(U,"spotShadowMap",bt.state.spotShadowMap,B),bt.state.pointShadowMap.length>0&&At.setValue(U,"pointShadowMap",bt.state.pointShadowMap,B)),$.isSkinnedMesh){At.setOptional(U,$,"bindMatrix"),At.setOptional(U,$,"bindMatrixInverse");const $e=$.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),At.setValue(U,"boneTexture",$e.boneTexture,B))}$.isBatchedMesh&&(At.setOptional(U,$,"batchingTexture"),At.setValue(U,"batchingTexture",$._matricesTexture,B),At.setOptional(U,$,"batchingIdTexture"),At.setValue(U,"batchingIdTexture",$._indirectTexture,B),At.setOptional(U,$,"batchingColorTexture"),$._colorsTexture!==null&&At.setValue(U,"batchingColorTexture",$._colorsTexture,B));const Sn=oe.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&lt.update($,oe,on),(tn||ze.receiveShadow!==$.receiveShadow)&&(ze.receiveShadow=$.receiveShadow,At.setValue(U,"receiveShadow",$.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(nn.envMap.value=We,nn.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&j.environment!==null&&(nn.envMapIntensity.value=j.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=SS()),tn&&(At.setValue(U,"toneMappingExposure",v.toneMappingExposure),ze.needsLights&&Ya(nn,ei),Ne&&re.fog===!0&&Je.refreshFogUniforms(nn,Ne),Je.refreshMaterialUniforms(nn,re,J,te,R.state.transmissionRenderTarget[w.id]),la.upload(U,go(ze),nn,B)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(la.upload(U,go(ze),nn,B),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&At.setValue(U,"center",$.center),At.setValue(U,"modelViewMatrix",$.modelViewMatrix),At.setValue(U,"normalMatrix",$.normalMatrix),At.setValue(U,"modelMatrix",$.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const $e=re.uniformsGroups;for(let Yt=0,y=$e.length;Yt<y;Yt++){const M=$e[Yt];Ae.update(M,on),Ae.bind(M,on)}}return on}function Ya(w,j){w.ambientLightColor.needsUpdate=j,w.lightProbe.needsUpdate=j,w.directionalLights.needsUpdate=j,w.directionalLightShadows.needsUpdate=j,w.pointLights.needsUpdate=j,w.pointLightShadows.needsUpdate=j,w.spotLights.needsUpdate=j,w.spotLightShadows.needsUpdate=j,w.rectAreaLights.needsUpdate=j,w.hemisphereLights.needsUpdate=j}function $a(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(w,j,oe){const re=g.get(w);re.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),g.get(w.texture).__webglTexture=j,g.get(w.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:oe,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,j){const oe=g.get(w);oe.__webglFramebuffer=j,oe.__useDefaultFramebuffer=j===void 0};const xn=U.createFramebuffer();this.setRenderTarget=function(w,j=0,oe=0){G=w,F=j,z=oe;let re=null,$=!1,Ne=!1;if(w){const Ie=g.get(w);if(Ie.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(U.FRAMEBUFFER,Ie.__webglFramebuffer),k.copy(w.viewport),W.copy(w.scissor),Y=w.scissorTest,ge.viewport(k),ge.scissor(W),ge.setScissorTest(Y),se=-1;return}else if(Ie.__webglFramebuffer===void 0)B.setupRenderTarget(w);else if(Ie.__hasExternalTextures)B.rebindTextures(w,g.get(w.texture).__webglTexture,g.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const rt=w.depthTexture;if(Ie.__boundDepthTexture!==rt){if(rt!==null&&g.has(rt)&&(w.width!==rt.image.width||w.height!==rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(w)}}const We=w.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ne=!0);const Ze=g.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ze[j])?re=Ze[j][oe]:re=Ze[j],$=!0):w.samples>0&&B.useMultisampledRTT(w)===!1?re=g.get(w).__webglMultisampledFramebuffer:Array.isArray(Ze)?re=Ze[oe]:re=Ze,k.copy(w.viewport),W.copy(w.scissor),Y=w.scissorTest}else k.copy(H).multiplyScalar(J).floor(),W.copy(K).multiplyScalar(J).floor(),Y=ve;if(oe!==0&&(re=xn),ge.bindFramebuffer(U.FRAMEBUFFER,re)&&ge.drawBuffers(w,re),ge.viewport(k),ge.scissor(W),ge.setScissorTest(Y),$){const Ie=g.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ie.__webglTexture,oe)}else if(Ne){const Ie=j;for(let We=0;We<w.textures.length;We++){const Ze=g.get(w.textures[We]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+We,Ze.__webglTexture,oe,Ie)}}else if(w!==null&&oe!==0){const Ie=g.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ie.__webglTexture,oe)}se=-1},this.readRenderTargetPixels=function(w,j,oe,re,$,Ne,qe,Ie=0){if(!(w&&w.isWebGLRenderTarget)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=g.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&qe!==void 0&&(We=We[qe]),We){ge.bindFramebuffer(U.FRAMEBUFFER,We);try{const Ze=w.textures[Ie],rt=Ze.format,nt=Ze.type;if(!ue.textureFormatReadable(rt)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(nt)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=w.width-re&&oe>=0&&oe<=w.height-$&&(w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ie),U.readPixels(j,oe,re,$,we.convert(rt),we.convert(nt),Ne))}finally{const Ze=G!==null?g.get(G).__webglFramebuffer:null;ge.bindFramebuffer(U.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(w,j,oe,re,$,Ne,qe,Ie=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=g.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&qe!==void 0&&(We=We[qe]),We)if(j>=0&&j<=w.width-re&&oe>=0&&oe<=w.height-$){ge.bindFramebuffer(U.FRAMEBUFFER,We);const Ze=w.textures[Ie],rt=Ze.format,nt=Ze.type;if(!ue.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,pt),U.bufferData(U.PIXEL_PACK_BUFFER,Ne.byteLength,U.STREAM_READ),w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ie),U.readPixels(j,oe,re,$,we.convert(rt),we.convert(nt),0);const Rt=G!==null?g.get(G).__webglFramebuffer:null;ge.bindFramebuffer(U.FRAMEBUFFER,Rt);const Vt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await h0(U,Vt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,pt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Ne),U.deleteBuffer(pt),U.deleteSync(Vt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,j=null,oe=0){const re=Math.pow(2,-oe),$=Math.floor(w.image.width*re),Ne=Math.floor(w.image.height*re),qe=j!==null?j.x:0,Ie=j!==null?j.y:0;B.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,oe,0,0,qe,Ie,$,Ne),ge.unbindTexture()};const Vi=U.createFramebuffer(),Tr=U.createFramebuffer();this.copyTextureToTexture=function(w,j,oe=null,re=null,$=0,Ne=null){Ne===null&&($!==0?(no("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ne=$,$=0):Ne=0);let qe,Ie,We,Ze,rt,nt,pt,Rt,Vt;const zt=w.isCompressedTexture?w.mipmaps[Ne]:w.image;if(oe!==null)qe=oe.max.x-oe.min.x,Ie=oe.max.y-oe.min.y,We=oe.isBox3?oe.max.z-oe.min.z:1,Ze=oe.min.x,rt=oe.min.y,nt=oe.isBox3?oe.min.z:0;else{const Sn=Math.pow(2,-$);qe=Math.floor(zt.width*Sn),Ie=Math.floor(zt.height*Sn),w.isDataArrayTexture?We=zt.depth:w.isData3DTexture?We=Math.floor(zt.depth*Sn):We=1,Ze=0,rt=0,nt=0}re!==null?(pt=re.x,Rt=re.y,Vt=re.z):(pt=0,Rt=0,Vt=0);const Ct=we.convert(j.format),ze=we.convert(j.type);let bt;j.isData3DTexture?(B.setTexture3D(j,0),bt=U.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(B.setTexture2DArray(j,0),bt=U.TEXTURE_2D_ARRAY):(B.setTexture2D(j,0),bt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,j.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,j.unpackAlignment);const yt=U.getParameter(U.UNPACK_ROW_LENGTH),on=U.getParameter(U.UNPACK_IMAGE_HEIGHT),gi=U.getParameter(U.UNPACK_SKIP_PIXELS),tn=U.getParameter(U.UNPACK_SKIP_ROWS),ei=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,zt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,zt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ze),U.pixelStorei(U.UNPACK_SKIP_ROWS,rt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,nt);const At=w.isDataArrayTexture||w.isData3DTexture,nn=j.isDataArrayTexture||j.isData3DTexture;if(w.isDepthTexture){const Sn=g.get(w),$e=g.get(j),Yt=g.get(Sn.__renderTarget),y=g.get($e.__renderTarget);ge.bindFramebuffer(U.READ_FRAMEBUFFER,Yt.__webglFramebuffer),ge.bindFramebuffer(U.DRAW_FRAMEBUFFER,y.__webglFramebuffer);for(let M=0;M<We;M++)At&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,g.get(w).__webglTexture,$,nt+M),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,g.get(j).__webglTexture,Ne,Vt+M)),U.blitFramebuffer(Ze,rt,qe,Ie,pt,Rt,qe,Ie,U.DEPTH_BUFFER_BIT,U.NEAREST);ge.bindFramebuffer(U.READ_FRAMEBUFFER,null),ge.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if($!==0||w.isRenderTargetTexture||g.has(w)){const Sn=g.get(w),$e=g.get(j);ge.bindFramebuffer(U.READ_FRAMEBUFFER,Vi),ge.bindFramebuffer(U.DRAW_FRAMEBUFFER,Tr);for(let Yt=0;Yt<We;Yt++)At?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Sn.__webglTexture,$,nt+Yt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Sn.__webglTexture,$),nn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,$e.__webglTexture,Ne,Vt+Yt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,$e.__webglTexture,Ne),$!==0?U.blitFramebuffer(Ze,rt,qe,Ie,pt,Rt,qe,Ie,U.COLOR_BUFFER_BIT,U.NEAREST):nn?U.copyTexSubImage3D(bt,Ne,pt,Rt,Vt+Yt,Ze,rt,qe,Ie):U.copyTexSubImage2D(bt,Ne,pt,Rt,Ze,rt,qe,Ie);ge.bindFramebuffer(U.READ_FRAMEBUFFER,null),ge.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else nn?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(bt,Ne,pt,Rt,Vt,qe,Ie,We,Ct,ze,zt.data):j.isCompressedArrayTexture?U.compressedTexSubImage3D(bt,Ne,pt,Rt,Vt,qe,Ie,We,Ct,zt.data):U.texSubImage3D(bt,Ne,pt,Rt,Vt,qe,Ie,We,Ct,ze,zt):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Ne,pt,Rt,qe,Ie,Ct,ze,zt.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Ne,pt,Rt,zt.width,zt.height,Ct,zt.data):U.texSubImage2D(U.TEXTURE_2D,Ne,pt,Rt,qe,Ie,Ct,ze,zt);U.pixelStorei(U.UNPACK_ROW_LENGTH,yt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,on),U.pixelStorei(U.UNPACK_SKIP_PIXELS,gi),U.pixelStorei(U.UNPACK_SKIP_ROWS,tn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ei),Ne===0&&j.generateMipmaps&&U.generateMipmap(bt),ge.unbindTexture()},this.initRenderTarget=function(w){g.get(w).__webglFramebuffer===void 0&&B.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?B.setTextureCube(w,0):w.isData3DTexture?B.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?B.setTexture2DArray(w,0):B.setTexture2D(w,0),ge.unbindTexture()},this.resetState=function(){F=0,z=0,G=null,ge.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}const Of={type:"change"},Fu={type:"start"},Fp={type:"end"},Yo=new lo,Bf=new Ji,TS=Math.cos(70*Ys.DEG2RAD),$t=new q,Tn=2*Math.PI,Ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Hl=1e-6;class AS extends Rx{constructor(e,t=null){super(e,t),this.state=Ft.NONE,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:tr.ROTATE,MIDDLE:tr.DOLLY,RIGHT:tr.PAN},this.touches={ONE:$s.ROTATE,TWO:$s.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new Xn,this._lastTargetPosition=new q,this._quat=new Xn().setFromUnitVectors(e.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ff,this._sphericalDelta=new ff,this._scale=1,this._panOffset=new q,this._rotateStart=new at,this._rotateEnd=new at,this._rotateDelta=new at,this._panStart=new at,this._panEnd=new at,this._panDelta=new at,this._dollyStart=new at,this._dollyEnd=new at,this._dollyDelta=new at,this._dollyDirection=new q,this._mouse=new at,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=RS.bind(this),this._onPointerDown=wS.bind(this),this._onPointerUp=CS.bind(this),this._onContextMenu=FS.bind(this),this._onMouseWheel=LS.bind(this),this._onKeyDown=NS.bind(this),this._onTouchStart=IS.bind(this),this._onTouchMove=US.bind(this),this._onMouseDown=PS.bind(this),this._onMouseMove=DS.bind(this),this._interceptControlDown=OS.bind(this),this._interceptControlUp=BS.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Of),this.update(),this.state=Ft.NONE}update(e=null){const t=this.object.position;$t.copy(t).sub(this.target),$t.applyQuaternion(this._quat),this._spherical.setFromVector3($t),this.autoRotate&&this.state===Ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Tn:i>Math.PI&&(i-=Tn),s<-Math.PI?s+=Tn:s>Math.PI&&(s-=Tn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if($t.setFromSpherical(this._spherical),$t.applyQuaternion(this._quatInverse),t.copy(this.target).add($t),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=$t.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new q(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new q(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=$t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Yo.origin.copy(this.object.position),Yo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Yo.direction))<TS?this.object.lookAt(this.target):(Bf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Yo.intersectPlane(Bf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Hl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Hl||this._lastTargetPosition.distanceToSquared(this.target)>Hl?(this.dispatchEvent(Of),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Tn/60*this.autoRotateSpeed*e:Tn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){$t.setFromMatrixColumn(t,0),$t.multiplyScalar(-e),this._panOffset.add($t)}_panUp(e,t){this.screenSpacePanning===!0?$t.setFromMatrixColumn(t,1):($t.setFromMatrixColumn(t,0),$t.crossVectors(this.object.up,$t)),$t.multiplyScalar(e),this._panOffset.add($t)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;$t.copy(s).sub(this.target);let r=$t.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Tn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Tn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Tn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Tn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new at,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function wS(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function RS(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function CS(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Fp),this.state=Ft.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function PS(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case tr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Ft.DOLLY;break;case tr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ft.ROTATE}break;case tr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ft.PAN}break;default:this.state=Ft.NONE}this.state!==Ft.NONE&&this.dispatchEvent(Fu)}function DS(n){switch(this.state){case Ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function LS(n){this.enabled===!1||this.enableZoom===!1||this.state!==Ft.NONE||(n.preventDefault(),this.dispatchEvent(Fu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Fp))}function NS(n){this.enabled!==!1&&this._handleKeyDown(n)}function IS(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case $s.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Ft.TOUCH_ROTATE;break;case $s.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Ft.TOUCH_PAN;break;default:this.state=Ft.NONE}break;case 2:switch(this.touches.TWO){case $s.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Ft.TOUCH_DOLLY_PAN;break;case $s.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Ft.TOUCH_DOLLY_ROTATE;break;default:this.state=Ft.NONE}break;default:this.state=Ft.NONE}this.state!==Ft.NONE&&this.dispatchEvent(Fu)}function US(n){switch(this._trackPointer(n),this.state){case Ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Ft.NONE}}function FS(n){this.enabled!==!1&&n.preventDefault()}function OS(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function BS(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class kS extends ns{constructor(e){super(e)}load(e,t,i,s){const r=this,o=new Iu(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},i,s)}parse(e){function t(c){const u=new DataView(c),h=32/8*3+32/8*3*3+16/8,f=u.getUint32(80,!0);if(80+32/8+f*h===u.byteLength)return!0;const _=[115,111,108,105,100];for(let x=0;x<5;x++)if(i(_,u,x))return!1;return!0}function i(c,u,h){for(let f=0,d=c.length;f<d;f++)if(c[f]!==u.getUint8(h+f))return!1;return!0}function s(c){const u=new DataView(c),h=u.getUint32(80,!0);let f,d,_,x=!1,m,p,A,D,T;for(let F=0;F<70;F++)u.getUint32(F,!1)==1129270351&&u.getUint8(F+4)==82&&u.getUint8(F+5)==61&&(x=!0,m=new Float32Array(h*3*3),p=u.getUint8(F+6)/255,A=u.getUint8(F+7)/255,D=u.getUint8(F+8)/255,T=u.getUint8(F+9)/255);const R=84,N=50,L=new en,I=new Float32Array(h*3*3),v=new Float32Array(h*3*3),b=new ft;for(let F=0;F<h;F++){const z=R+F*N,G=u.getFloat32(z,!0),se=u.getFloat32(z+4,!0),ne=u.getFloat32(z+8,!0);if(x){const k=u.getUint16(z+48,!0);(k&32768)===0?(f=(k&31)/31,d=(k>>5&31)/31,_=(k>>10&31)/31):(f=p,d=A,_=D)}for(let k=1;k<=3;k++){const W=z+k*12,Y=F*3*3+(k-1)*3;I[Y]=u.getFloat32(W,!0),I[Y+1]=u.getFloat32(W+4,!0),I[Y+2]=u.getFloat32(W+8,!0),v[Y]=G,v[Y+1]=se,v[Y+2]=ne,x&&(b.setRGB(f,d,_,Wt),m[Y]=b.r,m[Y+1]=b.g,m[Y+2]=b.b)}}return L.setAttribute("position",new kn(I,3)),L.setAttribute("normal",new kn(v,3)),x&&(L.setAttribute("color",new kn(m,3)),L.hasColors=!0,L.alpha=T),L}function r(c){const u=new en,h=/solid([\s\S]*?)endsolid/g,f=/facet([\s\S]*?)endfacet/g,d=/solid\s(.+)/;let _=0;const x=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+x+x+x,"g"),p=new RegExp("normal"+x+x+x,"g"),A=[],D=[],T=[],R=new q;let N,L=0,I=0,v=0;for(;(N=h.exec(c))!==null;){I=v;const b=N[0],F=(N=d.exec(b))!==null?N[1]:"";for(T.push(F);(N=f.exec(b))!==null;){let se=0,ne=0;const k=N[0];for(;(N=p.exec(k))!==null;)R.x=parseFloat(N[1]),R.y=parseFloat(N[2]),R.z=parseFloat(N[3]),ne++;for(;(N=m.exec(k))!==null;)A.push(parseFloat(N[1]),parseFloat(N[2]),parseFloat(N[3])),D.push(R.x,R.y,R.z),se++,v++;ne!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+_),se!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+_),_++}const z=I,G=v-I;u.userData.groupNames=T,u.addGroup(z,G,L),L++}return u.setAttribute("position",new wt(A,3)),u.setAttribute("normal",new wt(D,3)),u}function o(c){return typeof c!="string"?new TextDecoder().decode(c):c}function a(c){if(typeof c=="string"){const u=new Uint8Array(c.length);for(let h=0;h<c.length;h++)u[h]=c.charCodeAt(h)&255;return u.buffer||u}else return c}const l=a(e);return t(l)?s(l):r(o(e))}}class kf extends xx{constructor(e){super(e)}parse(e){function t(k){switch(k.image_type){case f:case x:if(k.colormap_length>256||k.colormap_size!==24||k.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case d:case _:case m:case p:if(k.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case h:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+k.image_type)}if(k.width<=0||k.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(k.pixel_size!==8&&k.pixel_size!==16&&k.pixel_size!==24&&k.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+k.pixel_size)}function i(k,W,Y,xe,ye){let ie,te;const J=Y.pixel_size>>3,Me=Y.width*Y.height*J;if(W&&(te=ye.subarray(xe,xe+=Y.colormap_length*(Y.colormap_size>>3))),k){ie=new Uint8Array(Me);let pe,H,K,ve=0;const je=new Uint8Array(J);for(;ve<Me;)if(pe=ye[xe++],H=(pe&127)+1,pe&128){for(K=0;K<J;++K)je[K]=ye[xe++];for(K=0;K<H;++K)ie.set(je,ve+K*J);ve+=J*H}else{for(H*=J,K=0;K<H;++K)ie[ve+K]=ye[xe++];ve+=H}}else ie=ye.subarray(xe,xe+=W?Y.width*Y.height:Me);return{pixel_data:ie,palettes:te}}function s(k,W,Y,xe,ye,ie,te,J,Me){const pe=Me;let H,K=0,ve,je;const Ue=b.width;for(je=W;je!==xe;je+=Y)for(ve=ye;ve!==te;ve+=ie,K++)H=J[K],k[(ve+Ue*je)*4+3]=255,k[(ve+Ue*je)*4+2]=pe[H*3+0],k[(ve+Ue*je)*4+1]=pe[H*3+1],k[(ve+Ue*je)*4+0]=pe[H*3+2];return k}function r(k,W,Y,xe,ye,ie,te,J){let Me,pe=0,H,K;const ve=b.width;for(K=W;K!==xe;K+=Y)for(H=ye;H!==te;H+=ie,pe+=2)Me=J[pe+0]+(J[pe+1]<<8),k[(H+ve*K)*4+0]=(Me&31744)>>7,k[(H+ve*K)*4+1]=(Me&992)>>2,k[(H+ve*K)*4+2]=(Me&31)<<3,k[(H+ve*K)*4+3]=Me&32768?0:255;return k}function o(k,W,Y,xe,ye,ie,te,J){let Me=0,pe,H;const K=b.width;for(H=W;H!==xe;H+=Y)for(pe=ye;pe!==te;pe+=ie,Me+=3)k[(pe+K*H)*4+3]=255,k[(pe+K*H)*4+2]=J[Me+0],k[(pe+K*H)*4+1]=J[Me+1],k[(pe+K*H)*4+0]=J[Me+2];return k}function a(k,W,Y,xe,ye,ie,te,J){let Me=0,pe,H;const K=b.width;for(H=W;H!==xe;H+=Y)for(pe=ye;pe!==te;pe+=ie,Me+=4)k[(pe+K*H)*4+2]=J[Me+0],k[(pe+K*H)*4+1]=J[Me+1],k[(pe+K*H)*4+0]=J[Me+2],k[(pe+K*H)*4+3]=J[Me+3];return k}function l(k,W,Y,xe,ye,ie,te,J){let Me,pe=0,H,K;const ve=b.width;for(K=W;K!==xe;K+=Y)for(H=ye;H!==te;H+=ie,pe++)Me=J[pe],k[(H+ve*K)*4+0]=Me,k[(H+ve*K)*4+1]=Me,k[(H+ve*K)*4+2]=Me,k[(H+ve*K)*4+3]=255;return k}function c(k,W,Y,xe,ye,ie,te,J){let Me=0,pe,H;const K=b.width;for(H=W;H!==xe;H+=Y)for(pe=ye;pe!==te;pe+=ie,Me+=2)k[(pe+K*H)*4+0]=J[Me+0],k[(pe+K*H)*4+1]=J[Me+0],k[(pe+K*H)*4+2]=J[Me+0],k[(pe+K*H)*4+3]=J[Me+1];return k}function u(k,W,Y,xe,ye){let ie,te,J,Me,pe,H;switch((b.flags&A)>>D){default:case N:ie=0,J=1,pe=W,te=0,Me=1,H=Y;break;case T:ie=0,J=1,pe=W,te=Y-1,Me=-1,H=-1;break;case L:ie=W-1,J=-1,pe=-1,te=0,Me=1,H=Y;break;case R:ie=W-1,J=-1,pe=-1,te=Y-1,Me=-1,H=-1;break}if(G)switch(b.pixel_size){case 8:l(k,te,Me,H,ie,J,pe,xe);break;case 16:c(k,te,Me,H,ie,J,pe,xe);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(b.pixel_size){case 8:s(k,te,Me,H,ie,J,pe,xe,ye);break;case 16:r(k,te,Me,H,ie,J,pe,xe);break;case 24:o(k,te,Me,H,ie,J,pe,xe);break;case 32:a(k,te,Me,H,ie,J,pe,xe);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return k}const h=0,f=1,d=2,_=3,x=9,m=10,p=11,A=48,D=4,T=0,R=1,N=2,L=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let I=0;const v=new Uint8Array(e),b={id_length:v[I++],colormap_type:v[I++],image_type:v[I++],colormap_index:v[I++]|v[I++]<<8,colormap_length:v[I++]|v[I++]<<8,colormap_size:v[I++],origin:[v[I++]|v[I++]<<8,v[I++]|v[I++]<<8],width:v[I++]|v[I++]<<8,height:v[I++]|v[I++]<<8,pixel_size:v[I++],flags:v[I++]};if(t(b),b.id_length+I>e.length)throw new Error("THREE.TGALoader: No data.");I+=b.id_length;let F=!1,z=!1,G=!1;switch(b.image_type){case x:F=!0,z=!0;break;case f:z=!0;break;case m:F=!0;break;case d:break;case p:F=!0,G=!0;break;case _:G=!0;break}const se=new Uint8Array(b.width*b.height*4),ne=i(F,z,b,I,v);return u(se,b.width,b.height,ne.pixel_data,ne.palettes),{data:se,width:b.width,height:b.height,flipY:!0,generateMipmaps:!0,minFilter:Ri}}}class VS extends ns{load(e,t,i,s){const r=this,o=r.path===""?Pp.extractUrlBase(e):r.path,a=new Iu(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){try{t(r.parse(l,o))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},i,s)}parse(e,t){function i(y,M){const C=[],S=y.childNodes;for(let P=0,le=S.length;P<le;P++){const de=S[P];de.nodeName===M&&C.push(de)}return C}function s(y){if(y.length===0)return[];const M=y.trim().split(/\s+/),C=new Array(M.length);for(let S=0,P=M.length;S<P;S++)C[S]=M[S];return C}function r(y){if(y.length===0)return[];const M=y.trim().split(/\s+/),C=new Array(M.length);for(let S=0,P=M.length;S<P;S++)C[S]=parseFloat(M[S]);return C}function o(y){if(y.length===0)return[];const M=y.trim().split(/\s+/),C=new Array(M.length);for(let S=0,P=M.length;S<P;S++)C[S]=parseInt(M[S]);return C}function a(y){return y.substring(1)}function l(){return"three_default_"+Sn++}function c(y){return Object.keys(y).length===0}function u(y){return{unit:h(i(y,"unit")[0]),upAxis:f(i(y,"up_axis")[0])}}function h(y){return y!==void 0&&y.hasAttribute("meter")===!0?parseFloat(y.getAttribute("meter")):1}function f(y){return y!==void 0?y.textContent:"Y_UP"}function d(y,M,C,S){const P=i(y,M)[0];if(P!==void 0){const le=i(P,C);for(let de=0;de<le.length;de++)S(le[de])}}function _(y,M){for(const C in y){const S=y[C];S.build=M(y[C])}}function x(y,M){return y.build!==void 0||(y.build=M(y)),y.build}function m(y){const M={sources:{},samplers:{},channels:{}};let C=!1;for(let S=0,P=y.childNodes.length;S<P;S++){const le=y.childNodes[S];if(le.nodeType!==1)continue;let de;switch(le.nodeName){case"source":de=le.getAttribute("id"),M.sources[de]=we(le);break;case"sampler":de=le.getAttribute("id"),M.samplers[de]=p(le);break;case"channel":de=le.getAttribute("target"),M.channels[de]=A(le);break;case"animation":m(le),C=!0;break;default:console.log(le)}}C===!1&&($e.animations[y.getAttribute("id")||Ys.generateUUID()]=M)}function p(y){const M={inputs:{}};for(let C=0,S=y.childNodes.length;C<S;C++){const P=y.childNodes[C];if(P.nodeType===1&&P.nodeName==="input"){const le=a(P.getAttribute("source")),de=P.getAttribute("semantic");M.inputs[de]=le}}return M}function A(y){const M={};let S=y.getAttribute("target").split("/");const P=S.shift();let le=S.shift();const de=le.indexOf("(")!==-1,Ye=le.indexOf(".")!==-1;if(Ye)S=le.split("."),le=S.shift(),M.member=S.shift();else if(de){const De=le.split("(");le=De.shift();for(let He=0;He<De.length;He++)De[He]=parseInt(De[He].replace(/\)/,""));M.indices=De}return M.id=P,M.sid=le,M.arraySyntax=de,M.memberSyntax=Ye,M.sampler=a(y.getAttribute("source")),M}function D(y){const M=[],C=y.channels,S=y.samplers,P=y.sources;for(const le in C)if(C.hasOwnProperty(le)){const de=C[le],Ye=S[de.sampler],De=Ye.inputs.INPUT,He=Ye.inputs.OUTPUT,et=P[De],Ee=P[He],Qe=R(de,et,Ee);b(Qe,M)}return M}function T(y){return x($e.animations[y],D)}function R(y,M,C){const S=$e.nodes[y.id],P=We(S.id),le=S.transforms[y.sid],de=S.matrix.clone().transpose();let Ye,De,He,et,Ee,Qe;const Ke={};switch(le){case"matrix":for(He=0,et=M.array.length;He<et;He++)if(Ye=M.array[He],De=He*C.stride,Ke[Ye]===void 0&&(Ke[Ye]={}),y.arraySyntax===!0){const Gt=C.array[De],Nt=y.indices[0]+4*y.indices[1];Ke[Ye][Nt]=Gt}else for(Ee=0,Qe=C.stride;Ee<Qe;Ee++)Ke[Ye][Ee]=C.array[De+Ee];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',le);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',le);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',le);break}const st=N(Ke,de);return{name:P.uuid,keyframes:st}}function N(y,M){const C=[];for(const P in y)C.push({time:parseFloat(P),value:y[P]});C.sort(S);for(let P=0;P<16;P++)F(C,P,M.elements[P]);return C;function S(P,le){return P.time-le.time}}const L=new q,I=new q,v=new Xn;function b(y,M){const C=y.keyframes,S=y.name,P=[],le=[],de=[],Ye=[];for(let De=0,He=C.length;De<He;De++){const et=C[De],Ee=et.time,Qe=et.value;xn.fromArray(Qe).transpose(),xn.decompose(L,v,I),P.push(Ee),le.push(L.x,L.y,L.z),de.push(v.x,v.y,v.z,v.w),Ye.push(I.x,I.y,I.z)}return le.length>0&&M.push(new pr(S+".position",P,le)),de.length>0&&M.push(new co(S+".quaternion",P,de)),Ye.length>0&&M.push(new pr(S+".scale",P,Ye)),M}function F(y,M,C){let S,P=!0,le,de;for(le=0,de=y.length;le<de;le++)S=y[le],S.value[M]===void 0?S.value[M]=null:P=!1;if(P===!0)for(le=0,de=y.length;le<de;le++)S=y[le],S.value[M]=C;else z(y,M)}function z(y,M){let C,S;for(let P=0,le=y.length;P<le;P++){const de=y[P];if(de.value[M]===null){if(C=G(y,P,M),S=se(y,P,M),C===null){de.value[M]=S.value[M];continue}if(S===null){de.value[M]=C.value[M];continue}ne(de,C,S,M)}}}function G(y,M,C){for(;M>=0;){const S=y[M];if(S.value[C]!==null)return S;M--}return null}function se(y,M,C){for(;M<y.length;){const S=y[M];if(S.value[C]!==null)return S;M++}return null}function ne(y,M,C,S){if(C.time-M.time===0){y.value[S]=M.value[S];return}y.value[S]=(y.time-M.time)*(C.value[S]-M.value[S])/(C.time-M.time)+M.value[S]}function k(y){const M={name:y.getAttribute("id")||"default",start:parseFloat(y.getAttribute("start")||0),end:parseFloat(y.getAttribute("end")||0),animations:[]};for(let C=0,S=y.childNodes.length;C<S;C++){const P=y.childNodes[C];P.nodeType===1&&P.nodeName==="instance_animation"&&M.animations.push(a(P.getAttribute("url")))}$e.clips[y.getAttribute("id")]=M}function W(y){const M=[],C=y.name,S=y.end-y.start||-1,P=y.animations;for(let le=0,de=P.length;le<de;le++){const Ye=T(P[le]);for(let De=0,He=Ye.length;De<He;De++)M.push(Ye[De])}return new af(C,S,M)}function Y(y){return x($e.clips[y],W)}function xe(y){const M={};for(let C=0,S=y.childNodes.length;C<S;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"skin":M.id=a(P.getAttribute("source")),M.skin=ye(P);break;case"morph":M.id=a(P.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}$e.controllers[y.getAttribute("id")]=M}function ye(y){const M={sources:{}};for(let C=0,S=y.childNodes.length;C<S;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"bind_shape_matrix":M.bindShapeMatrix=r(P.textContent);break;case"source":const le=P.getAttribute("id");M.sources[le]=we(P);break;case"joints":M.joints=ie(P);break;case"vertex_weights":M.vertexWeights=te(P);break}}return M}function ie(y){const M={inputs:{}};for(let C=0,S=y.childNodes.length;C<S;C++){const P=y.childNodes[C];if(P.nodeType===1&&P.nodeName==="input"){const le=P.getAttribute("semantic"),de=a(P.getAttribute("source"));M.inputs[le]=de}}return M}function te(y){const M={inputs:{}};for(let C=0,S=y.childNodes.length;C<S;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"input":const le=P.getAttribute("semantic"),de=a(P.getAttribute("source")),Ye=parseInt(P.getAttribute("offset"));M.inputs[le]={id:de,offset:Ye};break;case"vcount":M.vcount=o(P.textContent);break;case"v":M.v=o(P.textContent);break}}return M}function J(y){const M={id:y.id},C=$e.geometries[M.id];return y.skin!==void 0&&(M.skin=Me(y.skin),C.sources.skinIndices=M.skin.indices,C.sources.skinWeights=M.skin.weights),M}function Me(y){const C={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},S=y.sources,P=y.vertexWeights,le=P.vcount,de=P.v,Ye=P.inputs.JOINT.offset,De=P.inputs.WEIGHT.offset,He=y.sources[y.joints.inputs.JOINT],et=y.sources[y.joints.inputs.INV_BIND_MATRIX],Ee=S[P.inputs.WEIGHT.id].array;let Qe=0,Ke,st,tt;for(Ke=0,tt=le.length;Ke<tt;Ke++){const Nt=le[Ke],Et=[];for(st=0;st<Nt;st++){const Tt=de[Qe+Ye],_i=de[Qe+De],En=Ee[_i];Et.push({index:Tt,weight:En}),Qe+=2}for(Et.sort(Gt),st=0;st<4;st++){const Tt=Et[st];Tt!==void 0?(C.indices.array.push(Tt.index),C.weights.array.push(Tt.weight)):(C.indices.array.push(0),C.weights.array.push(0))}}for(y.bindShapeMatrix?C.bindMatrix=new ct().fromArray(y.bindShapeMatrix).transpose():C.bindMatrix=new ct().identity(),Ke=0,tt=He.array.length;Ke<tt;Ke++){const Nt=He.array[Ke],Et=new ct().fromArray(et.array,Ke*et.stride).transpose();C.joints.push({name:Nt,boneInverse:Et})}return C;function Gt(Nt,Et){return Et.weight-Nt.weight}}function pe(y){return x($e.controllers[y],J)}function H(y){const M={init_from:i(y,"init_from")[0].textContent};$e.images[y.getAttribute("id")]=M}function K(y){return y.build!==void 0?y.build:y.init_from}function ve(y){const M=$e.images[y];return M!==void 0?x(M,K):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",y),null)}function je(y){const M={};for(let C=0,S=y.childNodes.length;C<S;C++){const P=y.childNodes[C];P.nodeType===1&&P.nodeName==="profile_COMMON"&&(M.profile=Ue(P))}$e.effects[y.getAttribute("id")]=M}function Ue(y){const M={surfaces:{},samplers:{}};for(let C=0,S=y.childNodes.length;C<S;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"newparam":xt(P,M);break;case"technique":M.technique=Q(P);break;case"extra":M.extra=me(P);break}}return M}function xt(y,M){const C=y.getAttribute("sid");for(let S=0,P=y.childNodes.length;S<P;S++){const le=y.childNodes[S];if(le.nodeType===1)switch(le.nodeName){case"surface":M.surfaces[C]=O(le);break;case"sampler2D":M.samplers[C]=V(le);break}}}function O(y){const M={};for(let C=0,S=y.childNodes.length;C<S;C++){const P=y.childNodes[C];P.nodeType===1&&P.nodeName==="init_from"&&(M.init_from=P.textContent)}return M}function V(y){const M={};for(let C=0,S=y.childNodes.length;C<S;C++){const P=y.childNodes[C];P.nodeType===1&&P.nodeName==="source"&&(M.source=P.textContent)}return M}function Q(y){const M={};for(let C=0,S=y.childNodes.length;C<S;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"constant":case"lambert":case"blinn":case"phong":M.type=P.nodeName,M.parameters=he(P);break;case"extra":M.extra=me(P);break}}return M}function he(y){const M={};for(let C=0,S=y.childNodes.length;C<S;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":M[P.nodeName]=ae(P);break;case"transparent":M[P.nodeName]={opaque:P.hasAttribute("opaque")?P.getAttribute("opaque"):"A_ONE",data:ae(P)};break}}return M}function ae(y){const M={};for(let C=0,S=y.childNodes.length;C<S;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"color":M[P.nodeName]=r(P.textContent);break;case"float":M[P.nodeName]=parseFloat(P.textContent);break;case"texture":M[P.nodeName]={id:P.getAttribute("texture"),extra:fe(P)};break}}return M}function fe(y){const M={technique:{}};for(let C=0,S=y.childNodes.length;C<S;C++){const P=y.childNodes[C];P.nodeType===1&&P.nodeName==="extra"&&U(P,M)}return M}function U(y,M){for(let C=0,S=y.childNodes.length;C<S;C++){const P=y.childNodes[C];P.nodeType===1&&P.nodeName==="technique"&&be(P,M)}}function be(y,M){for(let C=0,S=y.childNodes.length;C<S;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":M.technique[P.nodeName]=parseFloat(P.textContent);break;case"wrapU":case"wrapV":P.textContent.toUpperCase()==="TRUE"?M.technique[P.nodeName]=1:P.textContent.toUpperCase()==="FALSE"?M.technique[P.nodeName]=0:M.technique[P.nodeName]=parseInt(P.textContent);break;case"bump":M[P.nodeName]=ge(P);break}}}function me(y){const M={};for(let C=0,S=y.childNodes.length;C<S;C++){const P=y.childNodes[C];P.nodeType===1&&P.nodeName==="technique"&&(M.technique=ue(P))}return M}function ue(y){const M={};for(let C=0,S=y.childNodes.length;C<S;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"double_sided":M[P.nodeName]=parseInt(P.textContent);break;case"bump":M[P.nodeName]=ge(P);break}}return M}function ge(y){const M={};for(let C=0,S=y.childNodes.length;C<S;C++){const P=y.childNodes[C];P.nodeType===1&&P.nodeName==="texture"&&(M[P.nodeName]={id:P.getAttribute("texture"),texcoord:P.getAttribute("texcoord"),extra:fe(P)})}return M}function E(y){return y}function g(y){return x($e.effects[y],E)}function B(y){const M={name:y.getAttribute("name")};for(let C=0,S=y.childNodes.length;C<S;C++){const P=y.childNodes[C];P.nodeType===1&&P.nodeName==="instance_effect"&&(M.url=a(P.getAttribute("url")))}$e.materials[y.getAttribute("id")]=M}function ee(y){let M,C=y.slice((y.lastIndexOf(".")-1>>>0)+2);return C=C.toLowerCase(),C==="tga"?M=tn:M=gi,M}function ce(y){const M=g(y.url),C=M.profile.technique;let S;switch(C.type){case"phong":case"blinn":S=new qr;break;case"lambert":S=new ox;break;default:S=new io;break}S.name=y.name||"";function P(De,He=null){const et=M.profile.samplers[De.id];let Ee=null;if(et!==void 0){const Qe=M.profile.surfaces[et.source];Ee=ve(Qe.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),Ee=ve(De.id);if(Ee!==null){const Qe=ee(Ee);if(Qe!==void 0){const Ke=Qe.load(Ee),st=De.extra;if(st!==void 0&&st.technique!==void 0&&c(st.technique)===!1){const tt=st.technique;Ke.wrapS=tt.wrapU?_s:Bn,Ke.wrapT=tt.wrapV?_s:Bn,Ke.offset.set(tt.offsetU||0,tt.offsetV||0),Ke.repeat.set(tt.repeatU||1,tt.repeatV||1)}else Ke.wrapS=_s,Ke.wrapT=_s;return He!==null&&(Ke.colorSpace=He),Ke}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",Ee),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",De.id),null}const le=C.parameters;for(const De in le){const He=le[De];switch(De){case"diffuse":He.color&&S.color.fromArray(He.color),He.texture&&(S.map=P(He.texture,Wt));break;case"specular":He.color&&S.specular&&S.specular.fromArray(He.color),He.texture&&(S.specularMap=P(He.texture));break;case"bump":He.texture&&(S.normalMap=P(He.texture));break;case"ambient":He.texture&&(S.lightMap=P(He.texture,Wt));break;case"shininess":He.float&&S.shininess&&(S.shininess=He.float);break;case"emission":He.color&&S.emissive&&S.emissive.fromArray(He.color),He.texture&&(S.emissiveMap=P(He.texture,Wt));break}}Mt.colorSpaceToWorking(S.color,Wt),S.specular&&Mt.colorSpaceToWorking(S.specular,Wt),S.emissive&&Mt.colorSpaceToWorking(S.emissive,Wt);let de=le.transparent,Ye=le.transparency;if(Ye===void 0&&de&&(Ye={float:1}),de===void 0&&Ye&&(de={opaque:"A_ONE",data:{color:[1,1,1,1]}}),de&&Ye)if(de.data.texture)S.transparent=!0;else{const De=de.data.color;switch(de.opaque){case"A_ONE":S.opacity=De[3]*Ye.float;break;case"RGB_ZERO":S.opacity=1-De[0]*Ye.float;break;case"A_ZERO":S.opacity=1-De[3]*Ye.float;break;case"RGB_ONE":S.opacity=De[0]*Ye.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',de.opaque)}S.opacity<1&&(S.transparent=!0)}if(C.extra!==void 0&&C.extra.technique!==void 0){const De=C.extra.technique;for(const He in De){const et=De[He];switch(He){case"double_sided":S.side=et===1?oi:Fi;break;case"bump":S.normalMap=P(et.texture),S.normalScale=new at(1,1);break}}}return S}function Z(y){return x($e.materials[y],ce)}function Fe(y){const M={name:y.getAttribute("name")};for(let C=0,S=y.childNodes.length;C<S;C++){const P=y.childNodes[C];P.nodeType===1&&P.nodeName==="optics"&&(M.optics=Te(P))}$e.cameras[y.getAttribute("id")]=M}function Te(y){for(let M=0;M<y.childNodes.length;M++){const C=y.childNodes[M];if(C.nodeName==="technique_common")return ke(C)}return{}}function ke(y){const M={};for(let C=0;C<y.childNodes.length;C++){const S=y.childNodes[C];switch(S.nodeName){case"perspective":case"orthographic":M.technique=S.nodeName,M.parameters=Je(S);break}}return M}function Je(y){const M={};for(let C=0;C<y.childNodes.length;C++){const S=y.childNodes[C];switch(S.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":M[S.nodeName]=parseFloat(S.textContent);break}}return M}function Se(y){let M;switch(y.optics.technique){case"perspective":M=new fn(y.optics.parameters.yfov,y.optics.parameters.aspect_ratio,y.optics.parameters.znear,y.optics.parameters.zfar);break;case"orthographic":let C=y.optics.parameters.ymag,S=y.optics.parameters.xmag;const P=y.optics.parameters.aspect_ratio;S=S===void 0?C*P:S,C=C===void 0?S/P:C,S*=.5,C*=.5,M=new za(-S,S,C,-C,y.optics.parameters.znear,y.optics.parameters.zfar);break;default:M=new fn;break}return M.name=y.name||"",M}function Ce(y){const M=$e.cameras[y];return M!==void 0?x(M,Se):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",y),null)}function Le(y){let M={};for(let C=0,S=y.childNodes.length;C<S;C++){const P=y.childNodes[C];P.nodeType===1&&P.nodeName==="technique_common"&&(M=Ve(P))}$e.lights[y.getAttribute("id")]=M}function Ve(y){const M={};for(let C=0,S=y.childNodes.length;C<S;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"directional":case"point":case"spot":case"ambient":M.technique=P.nodeName,M.parameters=Re(P)}}return M}function Re(y){const M={};for(let C=0,S=y.childNodes.length;C<S;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"color":const le=r(P.textContent);M.color=new ft().fromArray(le),Mt.colorSpaceToWorking(M.color,Wt);break;case"falloff_angle":M.falloffAngle=parseFloat(P.textContent);break;case"quadratic_attenuation":const de=parseFloat(P.textContent);M.distance=de?Math.sqrt(1/de):0;break}}return M}function lt(y){let M;switch(y.technique){case"directional":M=new Rp;break;case"point":M=new bx;break;case"spot":M=new Mx;break;case"ambient":M=new Cp;break}return y.parameters.color&&M.color.copy(y.parameters.color),y.parameters.distance&&(M.distance=y.parameters.distance),M}function X(y){const M=$e.lights[y];return M!==void 0?x(M,lt):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",y),null)}function Be(y){const M={name:y.getAttribute("name"),sources:{},vertices:{},primitives:[]},C=i(y,"mesh")[0];if(C!==void 0){for(let S=0;S<C.childNodes.length;S++){const P=C.childNodes[S];if(P.nodeType!==1)continue;const le=P.getAttribute("id");switch(P.nodeName){case"source":M.sources[le]=we(P);break;case"vertices":M.vertices=Ge(P);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",P.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":M.primitives.push(Ae(P));break;default:console.log(P)}}$e.geometries[y.getAttribute("id")]=M}}function we(y){const M={array:[],stride:3};for(let C=0;C<y.childNodes.length;C++){const S=y.childNodes[C];if(S.nodeType===1)switch(S.nodeName){case"float_array":M.array=r(S.textContent);break;case"Name_array":M.array=s(S.textContent);break;case"technique_common":const P=i(S,"accessor")[0];P!==void 0&&(M.stride=parseInt(P.getAttribute("stride")));break}}return M}function Ge(y){const M={};for(let C=0;C<y.childNodes.length;C++){const S=y.childNodes[C];S.nodeType===1&&(M[S.getAttribute("semantic")]=a(S.getAttribute("source")))}return M}function Ae(y){const M={type:y.nodeName,material:y.getAttribute("material"),count:parseInt(y.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let C=0,S=y.childNodes.length;C<S;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"input":const le=a(P.getAttribute("source")),de=P.getAttribute("semantic"),Ye=parseInt(P.getAttribute("offset")),De=parseInt(P.getAttribute("set")),He=De>0?de+De:de;M.inputs[He]={id:le,offset:Ye},M.stride=Math.max(M.stride,Ye+1),de==="TEXCOORD"&&(M.hasUV=!0);break;case"vcount":M.vcount=o(P.textContent);break;case"p":M.p=o(P.textContent);break}}return M}function _e(y){const M={};for(let C=0;C<y.length;C++){const S=y[C];M[S.type]===void 0&&(M[S.type]=[]),M[S.type].push(S)}return M}function Pe(y){let M=0;for(let C=0,S=y.length;C<S;C++)y[C].hasUV===!0&&M++;M>0&&M<y.length&&(y.uvsNeedsFix=!0)}function ot(y){const M={},C=y.sources,S=y.vertices,P=y.primitives;if(P.length===0)return{};const le=_e(P);for(const de in le){const Ye=le[de];Pe(Ye),M[de]=Ut(Ye,C,S)}return M}function Ut(y,M,C){const S={},P={array:[],stride:0},le={array:[],stride:0},de={array:[],stride:0},Ye={array:[],stride:0},De={array:[],stride:0},He={array:[],stride:4},et={array:[],stride:4},Ee=new en,Qe=[];let Ke=0;for(let st=0;st<y.length;st++){const tt=y[st],Gt=tt.inputs;let Nt=0;switch(tt.type){case"lines":case"linestrips":Nt=tt.count*2;break;case"triangles":Nt=tt.count*3;break;case"polylist":for(let Et=0;Et<tt.count;Et++){const Tt=tt.vcount[Et];switch(Tt){case 3:Nt+=3;break;case 4:Nt+=6;break;default:Nt+=(Tt-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknown primitive type:",tt.type)}Ee.addGroup(Ke,Nt,st),Ke+=Nt,tt.material&&Qe.push(tt.material);for(const Et in Gt){const Tt=Gt[Et];switch(Et){case"VERTEX":for(const _i in C){const En=C[_i];switch(_i){case"POSITION":const ws=P.array.length;if(dt(tt,M[En],Tt.offset,P.array),P.stride=M[En].stride,M.skinWeights&&M.skinIndices&&(dt(tt,M.skinIndices,Tt.offset,He.array),dt(tt,M.skinWeights,Tt.offset,et.array)),tt.hasUV===!1&&y.uvsNeedsFix===!0){const kp=(P.array.length-ws)/P.stride;for(let Ou=0;Ou<kp;Ou++)de.array.push(0,0)}break;case"NORMAL":dt(tt,M[En],Tt.offset,le.array),le.stride=M[En].stride;break;case"COLOR":dt(tt,M[En],Tt.offset,De.array),De.stride=M[En].stride;break;case"TEXCOORD":dt(tt,M[En],Tt.offset,de.array),de.stride=M[En].stride;break;case"TEXCOORD1":dt(tt,M[En],Tt.offset,Ye.array),de.stride=M[En].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',_i)}}break;case"NORMAL":dt(tt,M[Tt.id],Tt.offset,le.array),le.stride=M[Tt.id].stride;break;case"COLOR":dt(tt,M[Tt.id],Tt.offset,De.array,!0),De.stride=M[Tt.id].stride;break;case"TEXCOORD":dt(tt,M[Tt.id],Tt.offset,de.array),de.stride=M[Tt.id].stride;break;case"TEXCOORD1":dt(tt,M[Tt.id],Tt.offset,Ye.array),Ye.stride=M[Tt.id].stride;break}}}return P.array.length>0&&Ee.setAttribute("position",new wt(P.array,P.stride)),le.array.length>0&&Ee.setAttribute("normal",new wt(le.array,le.stride)),De.array.length>0&&Ee.setAttribute("color",new wt(De.array,De.stride)),de.array.length>0&&Ee.setAttribute("uv",new wt(de.array,de.stride)),Ye.array.length>0&&Ee.setAttribute("uv1",new wt(Ye.array,Ye.stride)),He.array.length>0&&Ee.setAttribute("skinIndex",new wt(He.array,He.stride)),et.array.length>0&&Ee.setAttribute("skinWeight",new wt(et.array,et.stride)),S.data=Ee,S.type=y[0].type,S.materialKeys=Qe,S}function dt(y,M,C,S,P=!1){const le=y.p,de=y.stride,Ye=y.vcount;function De(Ee){let Qe=le[Ee+C]*et;const Ke=Qe+et;for(;Qe<Ke;Qe++)S.push(He[Qe]);if(P){const st=S.length-et-1;ei.setRGB(S[st+0],S[st+1],S[st+2],Wt),S[st+0]=ei.r,S[st+1]=ei.g,S[st+2]=ei.b}}const He=M.array,et=M.stride;if(y.vcount!==void 0){let Ee=0;for(let Qe=0,Ke=Ye.length;Qe<Ke;Qe++){const st=Ye[Qe];if(st===4){const tt=Ee+de*0,Gt=Ee+de*1,Nt=Ee+de*2,Et=Ee+de*3;De(tt),De(Gt),De(Et),De(Gt),De(Nt),De(Et)}else if(st===3){const tt=Ee+de*0,Gt=Ee+de*1,Nt=Ee+de*2;De(tt),De(Gt),De(Nt)}else if(st>4)for(let tt=1,Gt=st-2;tt<=Gt;tt++){const Nt=Ee+de*0,Et=Ee+de*tt,Tt=Ee+de*(tt+1);De(Nt),De(Et),De(Tt)}Ee+=de*st}}else for(let Ee=0,Qe=le.length;Ee<Qe;Ee+=de)De(Ee)}function Pn(y){return x($e.geometries[y],ot)}function qn(y){const M={name:y.getAttribute("name")||"",joints:{},links:[]};for(let C=0;C<y.childNodes.length;C++){const S=y.childNodes[C];S.nodeType===1&&S.nodeName==="technique_common"&&Sr(S,M)}$e.kinematicsModels[y.getAttribute("id")]=M}function Xa(y){return y.build!==void 0?y.build:y}function uo(y){return x($e.kinematicsModels[y],Xa)}function Sr(y,M){for(let C=0;C<y.childNodes.length;C++){const S=y.childNodes[C];if(S.nodeType===1)switch(S.nodeName){case"joint":M.joints[S.getAttribute("sid")]=qa(S);break;case"link":M.links.push(Er(S));break}}}function qa(y){let M;for(let C=0;C<y.childNodes.length;C++){const S=y.childNodes[C];if(S.nodeType===1)switch(S.nodeName){case"prismatic":case"revolute":M=ho(S);break}}return M}function ho(y){const M={sid:y.getAttribute("sid"),name:y.getAttribute("name")||"",axis:new q,limits:{min:0,max:0},type:y.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let C=0;C<y.childNodes.length;C++){const S=y.childNodes[C];if(S.nodeType===1)switch(S.nodeName){case"axis":const P=r(S.textContent);M.axis.fromArray(P);break;case"limits":const le=S.getElementsByTagName("max")[0],de=S.getElementsByTagName("min")[0];M.limits.max=parseFloat(le.textContent),M.limits.min=parseFloat(de.textContent);break}}return M.limits.min>=M.limits.max&&(M.static=!0),M.middlePosition=(M.limits.min+M.limits.max)/2,M}function Er(y){const M={sid:y.getAttribute("sid"),name:y.getAttribute("name")||"",attachments:[],transforms:[]};for(let C=0;C<y.childNodes.length;C++){const S=y.childNodes[C];if(S.nodeType===1)switch(S.nodeName){case"attachment_full":M.attachments.push(mi(S));break;case"matrix":case"translate":case"rotate":M.transforms.push(Es(S));break}}return M}function mi(y){const M={joint:y.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let C=0;C<y.childNodes.length;C++){const S=y.childNodes[C];if(S.nodeType===1)switch(S.nodeName){case"link":M.links.push(Er(S));break;case"matrix":case"translate":case"rotate":M.transforms.push(Es(S));break}}return M}function Es(y){const M={type:y.nodeName},C=r(y.textContent);switch(M.type){case"matrix":M.obj=new ct,M.obj.fromArray(C).transpose();break;case"translate":M.obj=new q,M.obj.fromArray(C);break;case"rotate":M.obj=new q,M.obj.fromArray(C),M.angle=Ys.degToRad(C[3]);break}return M}function fo(y){const M={name:y.getAttribute("name")||"",rigidBodies:{}};for(let C=0;C<y.childNodes.length;C++){const S=y.childNodes[C];S.nodeType===1&&S.nodeName==="rigid_body"&&(M.rigidBodies[S.getAttribute("name")]={},po(S,M.rigidBodies[S.getAttribute("name")]))}$e.physicsModels[y.getAttribute("id")]=M}function po(y,M){for(let C=0;C<y.childNodes.length;C++){const S=y.childNodes[C];S.nodeType===1&&S.nodeName==="technique_common"&&Ts(S,M)}}function Ts(y,M){for(let C=0;C<y.childNodes.length;C++){const S=y.childNodes[C];if(S.nodeType===1)switch(S.nodeName){case"inertia":M.inertia=r(S.textContent);break;case"mass":M.mass=r(S.textContent)[0];break}}}function mo(y){const M={bindJointAxis:[]};for(let C=0;C<y.childNodes.length;C++){const S=y.childNodes[C];S.nodeType===1&&S.nodeName==="bind_joint_axis"&&M.bindJointAxis.push(As(S))}$e.kinematicsScenes[a(y.getAttribute("url"))]=M}function As(y){const M={target:y.getAttribute("target").split("/").pop()};for(let C=0;C<y.childNodes.length;C++){const S=y.childNodes[C];if(S.nodeType===1&&S.nodeName==="axis"){const P=S.getElementsByTagName("param")[0];M.axis=P.textContent;const le=M.axis.split("inst_").pop().split("axis")[0];M.jointIndex=le.substring(0,le.length-1)}}return M}function go(y){return y.build!==void 0?y.build:y}function _o(y){return x($e.kinematicsScenes[y],go)}function ja(){const y=Object.keys($e.kinematicsModels)[0],M=Object.keys($e.kinematicsScenes)[0],C=Object.keys($e.visualScenes)[0];if(y===void 0||M===void 0)return;const S=uo(y),P=_o(M),le=pt(C),de=P.bindJointAxis,Ye={};for(let et=0,Ee=de.length;et<Ee;et++){const Qe=de[et],Ke=ze.querySelector('[sid="'+Qe.target+'"]');if(Ke){const st=Ke.parentElement;De(Qe.jointIndex,st)}}function De(et,Ee){const Qe=Ee.getAttribute("name"),Ke=S.joints[et];le.traverse(function(st){st.name===Qe&&(Ye[et]={object:st,transforms:Ya(Ee),joint:Ke,position:Ke.zeroPosition})})}const He=new ct;nn={joints:S&&S.joints,getJointValue:function(et){const Ee=Ye[et];if(Ee)return Ee.position;console.warn("THREE.ColladaLoader: Joint "+et+" doesn't exist.")},setJointValue:function(et,Ee){const Qe=Ye[et];if(Qe){const Ke=Qe.joint;if(Ee>Ke.limits.max||Ee<Ke.limits.min)console.warn("THREE.ColladaLoader: Joint "+et+" value "+Ee+" outside of limits (min: "+Ke.limits.min+", max: "+Ke.limits.max+").");else if(Ke.static)console.warn("THREE.ColladaLoader: Joint "+et+" is static.");else{const st=Qe.object,tt=Ke.axis,Gt=Qe.transforms;xn.identity();for(let Nt=0;Nt<Gt.length;Nt++){const Et=Gt[Nt];if(Et.sid&&Et.sid.indexOf(et)!==-1)switch(Ke.type){case"revolute":xn.multiply(He.makeRotationAxis(tt,Ys.degToRad(Ee)));break;case"prismatic":xn.multiply(He.makeTranslation(tt.x*Ee,tt.y*Ee,tt.z*Ee));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Ke.type);break}else switch(Et.type){case"matrix":xn.multiply(Et.obj);break;case"translate":xn.multiply(He.makeTranslation(Et.obj.x,Et.obj.y,Et.obj.z));break;case"scale":xn.scale(Et.obj);break;case"rotate":xn.multiply(He.makeRotationAxis(Et.obj,Et.angle));break}}st.matrix.copy(xn),st.matrix.decompose(st.position,st.quaternion,st.scale),Ye[et].position=Ee}}else console.log("THREE.ColladaLoader: "+et+" does not exist.")}}}function Ya(y){const M=[],C=ze.querySelector('[id="'+y.id+'"]');for(let S=0;S<C.childNodes.length;S++){const P=C.childNodes[S];if(P.nodeType!==1)continue;let le,de;switch(P.nodeName){case"matrix":le=r(P.textContent);const Ye=new ct().fromArray(le).transpose();M.push({sid:P.getAttribute("sid"),type:P.nodeName,obj:Ye});break;case"translate":case"scale":le=r(P.textContent),de=new q().fromArray(le),M.push({sid:P.getAttribute("sid"),type:P.nodeName,obj:de});break;case"rotate":le=r(P.textContent),de=new q().fromArray(le);const De=Ys.degToRad(le[3]);M.push({sid:P.getAttribute("sid"),type:P.nodeName,obj:de,angle:De});break}}return M}function $a(y){const M=y.getElementsByTagName("node");for(let C=0;C<M.length;C++){const S=M[C];S.hasAttribute("id")===!1&&S.setAttribute("id",l())}}const xn=new ct,Vi=new q;function Tr(y){const M={name:y.getAttribute("name")||"",type:y.getAttribute("type"),id:y.getAttribute("id"),sid:y.getAttribute("sid"),matrix:new ct,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let C=0;C<y.childNodes.length;C++){const S=y.childNodes[C];if(S.nodeType!==1)continue;let P;switch(S.nodeName){case"node":M.nodes.push(S.getAttribute("id")),Tr(S);break;case"instance_camera":M.instanceCameras.push(a(S.getAttribute("url")));break;case"instance_controller":M.instanceControllers.push(w(S));break;case"instance_light":M.instanceLights.push(a(S.getAttribute("url")));break;case"instance_geometry":M.instanceGeometries.push(w(S));break;case"instance_node":M.instanceNodes.push(a(S.getAttribute("url")));break;case"matrix":P=r(S.textContent),M.matrix.multiply(xn.fromArray(P).transpose()),M.transforms[S.getAttribute("sid")]=S.nodeName;break;case"translate":P=r(S.textContent),Vi.fromArray(P),M.matrix.multiply(xn.makeTranslation(Vi.x,Vi.y,Vi.z)),M.transforms[S.getAttribute("sid")]=S.nodeName;break;case"rotate":P=r(S.textContent);const le=Ys.degToRad(P[3]);M.matrix.multiply(xn.makeRotationAxis(Vi.fromArray(P),le)),M.transforms[S.getAttribute("sid")]=S.nodeName;break;case"scale":P=r(S.textContent),M.matrix.scale(Vi.fromArray(P)),M.transforms[S.getAttribute("sid")]=S.nodeName;break;case"extra":break;default:console.log(S)}}return Ie(M.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",M.id):$e.nodes[M.id]=M,M}function w(y){const M={id:a(y.getAttribute("url")),materials:{},skeletons:[]};for(let C=0;C<y.childNodes.length;C++){const S=y.childNodes[C];switch(S.nodeName){case"bind_material":const P=S.getElementsByTagName("instance_material");for(let le=0;le<P.length;le++){const de=P[le],Ye=de.getAttribute("symbol"),De=de.getAttribute("target");M.materials[Ye]=a(De)}break;case"skeleton":M.skeletons.push(a(S.textContent));break}}return M}function j(y,M){const C=[],S=[];let P,le,de;for(P=0;P<y.length;P++){const He=y[P];let et;if(Ie(He))et=We(He),oe(et,M,C);else if(nt(He)){const Qe=$e.visualScenes[He].children;for(let Ke=0;Ke<Qe.length;Ke++){const st=Qe[Ke];if(st.type==="JOINT"){const tt=We(st.id);oe(tt,M,C)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",He)}for(P=0;P<M.length;P++)for(le=0;le<C.length;le++)if(de=C[le],de.bone.name===M[P].name){S[P]=de,de.processed=!0;break}for(P=0;P<C.length;P++)de=C[P],de.processed===!1&&(S.push(de),de.processed=!0);const Ye=[],De=[];for(P=0;P<S.length;P++)de=S[P],Ye.push(de.bone),De.push(de.boneInverse);return new Pu(Ye,De)}function oe(y,M,C){y.traverse(function(S){if(S.isBone===!0){let P;for(let le=0;le<M.length;le++){const de=M[le];if(de.name===S.name){P=de.boneInverse;break}}P===void 0&&(P=new ct),C.push({bone:S,boneInverse:P,processed:!1})}})}function re(y){const M=[],C=y.matrix,S=y.nodes,P=y.type,le=y.instanceCameras,de=y.instanceControllers,Ye=y.instanceLights,De=y.instanceGeometries,He=y.instanceNodes;for(let Ee=0,Qe=S.length;Ee<Qe;Ee++)M.push(We(S[Ee]));for(let Ee=0,Qe=le.length;Ee<Qe;Ee++){const Ke=Ce(le[Ee]);Ke!==null&&M.push(Ke.clone())}for(let Ee=0,Qe=de.length;Ee<Qe;Ee++){const Ke=de[Ee],st=pe(Ke.id),tt=Pn(st.id),Gt=qe(tt,Ke.materials),Nt=Ke.skeletons,Et=st.skin.joints,Tt=j(Nt,Et);for(let _i=0,En=Gt.length;_i<En;_i++){const ws=Gt[_i];ws.isSkinnedMesh&&(ws.bind(Tt,st.skin.bindMatrix),ws.normalizeSkinWeights()),M.push(ws)}}for(let Ee=0,Qe=Ye.length;Ee<Qe;Ee++){const Ke=X(Ye[Ee]);Ke!==null&&M.push(Ke.clone())}for(let Ee=0,Qe=De.length;Ee<Qe;Ee++){const Ke=De[Ee],st=Pn(Ke.id),tt=qe(st,Ke.materials);for(let Gt=0,Nt=tt.length;Gt<Nt;Gt++)M.push(tt[Gt])}for(let Ee=0,Qe=He.length;Ee<Qe;Ee++)M.push(We(He[Ee]).clone());let et;if(S.length===0&&M.length===1)et=M[0];else{et=P==="JOINT"?new Mp:new Ks;for(let Ee=0;Ee<M.length;Ee++)et.add(M[Ee])}return et.name=P==="JOINT"?y.sid:y.name,et.matrix.copy(C),et.matrix.decompose(et.position,et.quaternion,et.scale),et}const $=new io({name:ns.DEFAULT_MATERIAL_NAME,color:16711935});function Ne(y,M){const C=[];for(let S=0,P=y.length;S<P;S++){const le=M[y[S]];le===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",y[S]),C.push($)):C.push(Z(le))}return C}function qe(y,M){const C=[];for(const S in y){const P=y[S],le=Ne(P.materialKeys,M);if(le.length===0&&(S==="lines"||S==="linestrips"?le.push(new dr):le.push(new qr)),S==="lines"||S==="linestrips")for(let He=0,et=le.length;He<et;He++){const Ee=le[He];if(Ee.isMeshPhongMaterial===!0||Ee.isMeshLambertMaterial===!0){const Qe=new dr;Qe.color.copy(Ee.color),Qe.opacity=Ee.opacity,Qe.transparent=Ee.transparent,le[He]=Qe}}const de=P.data.attributes.skinIndex!==void 0,Ye=le.length===1?le[0]:le;let De;switch(S){case"lines":De=new Oa(P.data,Ye);break;case"linestrips":De=new yp(P.data,Ye);break;case"triangles":case"polylist":de?De=new Z0(P.data,Ye):De=new pn(P.data,Ye);break}C.push(De)}return C}function Ie(y){return $e.nodes[y]!==void 0}function We(y){return x($e.nodes[y],re)}function Ze(y){const M={name:y.getAttribute("name"),children:[]};$a(y);const C=i(y,"node");for(let S=0;S<C.length;S++)M.children.push(Tr(C[S]));$e.visualScenes[y.getAttribute("id")]=M}function rt(y){const M=new Ks;M.name=y.name;const C=y.children;for(let S=0;S<C.length;S++){const P=C[S];M.add(We(P.id))}return M}function nt(y){return $e.visualScenes[y]!==void 0}function pt(y){return x($e.visualScenes[y],rt)}function Rt(y){const M=i(y,"instance_visual_scene")[0];return pt(a(M.getAttribute("url")))}function Vt(){const y=$e.clips;if(c(y)===!0){if(c($e.animations)===!1){const M=[];for(const C in $e.animations){const S=T(C);for(let P=0,le=S.length;P<le;P++)M.push(S[P])}At.push(new af("default",-1,M))}}else for(const M in y)At.push(Y(M))}function zt(y){let M="";const C=[y];for(;C.length;){const S=C.shift();S.nodeType===Node.TEXT_NODE?M+=S.textContent:(M+=`
`,C.push(...S.childNodes))}return M.trim()}if(e.length===0)return{scene:new vp};const Ct=new DOMParser().parseFromString(e,"application/xml"),ze=i(Ct,"COLLADA")[0],bt=Ct.getElementsByTagName("parsererror")[0];if(bt!==void 0){const y=i(bt,"div")[0];let M;return y?M=y.textContent:M=zt(bt),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,M),null}const yt=ze.getAttribute("version");console.debug("THREE.ColladaLoader: File version",yt);const on=u(i(ze,"asset")[0]),gi=new wp(this.manager);gi.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let tn;kf&&(tn=new kf(this.manager),tn.setPath(this.resourcePath||t));const ei=new ft,At=[];let nn={},Sn=0;const $e={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};d(ze,"library_animations","animation",m),d(ze,"library_animation_clips","animation_clip",k),d(ze,"library_controllers","controller",xe),d(ze,"library_images","image",H),d(ze,"library_effects","effect",je),d(ze,"library_materials","material",B),d(ze,"library_cameras","camera",Fe),d(ze,"library_lights","light",Le),d(ze,"library_geometries","geometry",Be),d(ze,"library_nodes","node",Tr),d(ze,"library_visual_scenes","visual_scene",Ze),d(ze,"library_kinematics_models","kinematics_model",qn),d(ze,"library_physics_models","physics_model",fo),d(ze,"scene","instance_kinematics_scene",mo),_($e.animations,D),_($e.clips,W),_($e.controllers,J),_($e.images,K),_($e.effects,E),_($e.materials,ce),_($e.cameras,Se),_($e.lights,lt),_($e.geometries,ot),_($e.visualScenes,rt),Vt(),ja();const Yt=Rt(i(ze,"scene")[0]);return Yt.animations=At,on.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),Yt.rotation.set(-Math.PI/2,0,0)),Yt.scale.multiplyScalar(on.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),At},kinematics:nn,library:$e,scene:Yt}}}const Vf=new q,zS=new Cn,$o=new ct,ji=new ct,Ko=new Xn,Jo=new q(1,1,1),Zo=new q;class Wa extends Xt{constructor(...e){super(...e),this.urdfNode=null,this.urdfName=""}copy(e,t){return super.copy(e,t),this.urdfNode=e.urdfNode,this.urdfName=e.urdfName,this}}class HS extends Wa{constructor(...e){super(...e),this.isURDFCollider=!0,this.type="URDFCollider"}}class GS extends Wa{constructor(...e){super(...e),this.isURDFVisual=!0,this.type="URDFVisual"}}class Op extends Wa{constructor(...e){super(...e),this.isURDFLink=!0,this.type="URDFLink"}}class Bp extends Wa{get jointType(){return this._jointType}set jointType(e){if(this.jointType!==e)switch(this._jointType=e,this.matrixWorldNeedsUpdate=!0,e){case"fixed":this.jointValue=[];break;case"continuous":case"revolute":case"prismatic":this.jointValue=new Array(1).fill(0);break;case"planar":this.jointValue=new Array(3).fill(0),this.axis=new q(0,0,1);break;case"floating":this.jointValue=new Array(6).fill(0);break}}get angle(){return this.jointValue[0]}constructor(...e){super(...e),this.isURDFJoint=!0,this.type="URDFJoint",this.jointValue=null,this.jointType="fixed",this.axis=new q(1,0,0),this.limit={lower:0,upper:0},this.ignoreLimits=!1,this.origPosition=null,this.origQuaternion=null,this.mimicJoints=[]}copy(e,t){return super.copy(e,t),this.jointType=e.jointType,this.axis=e.axis.clone(),this.limit.lower=e.limit.lower,this.limit.upper=e.limit.upper,this.ignoreLimits=!1,this.jointValue=[...e.jointValue],this.origPosition=e.origPosition?e.origPosition.clone():null,this.origQuaternion=e.origQuaternion?e.origQuaternion.clone():null,this.mimicJoints=[...e.mimicJoints],this}setJointValue(...e){e=e.map(i=>i===null?null:parseFloat(i)),(!this.origPosition||!this.origQuaternion)&&(this.origPosition=this.position.clone(),this.origQuaternion=this.quaternion.clone());let t=!1;switch(this.mimicJoints.forEach(i=>{t=i.updateFromMimickedJoint(...e)||t}),this.jointType){case"fixed":return t;case"continuous":case"revolute":{let i=e[0];return i==null||i===this.jointValue[0]?t:(!this.ignoreLimits&&this.jointType==="revolute"&&(i=Math.min(this.limit.upper,i),i=Math.max(this.limit.lower,i)),this.quaternion.setFromAxisAngle(this.axis,i).premultiply(this.origQuaternion),this.jointValue[0]!==i?(this.jointValue[0]=i,this.matrixWorldNeedsUpdate=!0,!0):t)}case"prismatic":{let i=e[0];return i==null||i===this.jointValue[0]?t:(this.ignoreLimits||(i=Math.min(this.limit.upper,i),i=Math.max(this.limit.lower,i)),this.position.copy(this.origPosition),Vf.copy(this.axis).applyEuler(this.rotation),this.position.addScaledVector(Vf,i),this.jointValue[0]!==i?(this.jointValue[0]=i,this.matrixWorldNeedsUpdate=!0,!0):t)}case"floating":return this.jointValue.every((i,s)=>e[s]===i||e[s]===null)?t:(this.jointValue[0]=e[0]!==null?e[0]:this.jointValue[0],this.jointValue[1]=e[1]!==null?e[1]:this.jointValue[1],this.jointValue[2]=e[2]!==null?e[2]:this.jointValue[2],this.jointValue[3]=e[3]!==null?e[3]:this.jointValue[3],this.jointValue[4]=e[4]!==null?e[4]:this.jointValue[4],this.jointValue[5]=e[5]!==null?e[5]:this.jointValue[5],ji.compose(this.origPosition,this.origQuaternion,Jo),Ko.setFromEuler(zS.set(this.jointValue[3],this.jointValue[4],this.jointValue[5],"XYZ")),Zo.set(this.jointValue[0],this.jointValue[1],this.jointValue[2]),$o.compose(Zo,Ko,Jo),ji.premultiply($o),this.position.setFromMatrixPosition(ji),this.rotation.setFromRotationMatrix(ji),this.matrixWorldNeedsUpdate=!0,!0);case"planar":return this.jointValue.every((i,s)=>e[s]===i||e[s]===null)?t:(this.jointValue[0]=e[0]!==null?e[0]:this.jointValue[0],this.jointValue[1]=e[1]!==null?e[1]:this.jointValue[1],this.jointValue[2]=e[2]!==null?e[2]:this.jointValue[2],ji.compose(this.origPosition,this.origQuaternion,Jo),Ko.setFromAxisAngle(this.axis,this.jointValue[2]),Zo.set(this.jointValue[0],this.jointValue[1],0),$o.compose(Zo,Ko,Jo),ji.premultiply($o),this.position.setFromMatrixPosition(ji),this.rotation.setFromRotationMatrix(ji),this.matrixWorldNeedsUpdate=!0,!0)}return t}}class zf extends Bp{constructor(...e){super(...e),this.type="URDFMimicJoint",this.mimicJoint=null,this.offset=0,this.multiplier=1}updateFromMimickedJoint(...e){const t=e.map(i=>i*this.multiplier+this.offset);return super.setJointValue(...t)}copy(e,t){return super.copy(e,t),this.mimicJoint=e.mimicJoint,this.offset=e.offset,this.multiplier=e.multiplier,this}}class WS extends Op{constructor(...e){super(...e),this.isURDFRobot=!0,this.urdfNode=null,this.urdfRobotNode=null,this.robotName=null,this.links=null,this.joints=null,this.colliders=null,this.visual=null,this.frames=null}copy(e,t){super.copy(e,t),this.urdfRobotNode=e.urdfRobotNode,this.robotName=e.robotName,this.links={},this.joints={},this.colliders={},this.visual={},this.traverse(i=>{i.isURDFJoint&&i.urdfName in e.joints&&(this.joints[i.urdfName]=i),i.isURDFLink&&i.urdfName in e.links&&(this.links[i.urdfName]=i),i.isURDFCollider&&i.urdfName in e.colliders&&(this.colliders[i.urdfName]=i),i.isURDFVisual&&i.urdfName in e.visual&&(this.visual[i.urdfName]=i)});for(const i in this.joints)this.joints[i].mimicJoints=this.joints[i].mimicJoints.map(s=>this.joints[s.name]);return this.frames={...this.colliders,...this.visual,...this.links,...this.joints},this}getFrame(e){return this.frames[e]}setJointValue(e,...t){const i=this.joints[e];return i?i.setJointValue(...t):!1}setJointValues(e){let t=!1;for(const i in e){const s=e[i];Array.isArray(s)?t=this.setJointValue(i,...s)||t:t=this.setJointValue(i,s)||t}return t}}const Gl=new Xn,Hf=new Cn;function Ws(n){return n?n.trim().split(/\s+/g).map(e=>parseFloat(e)):[0,0,0]}function Gf(n,e,t=!1){t||n.rotation.set(0,0,0),Hf.set(e[0],e[1],e[2],"ZYX"),Gl.setFromEuler(Hf),Gl.multiply(n.quaternion),n.quaternion.copy(Gl)}class XS{constructor(e){this.manager=e||Ap,this.loadMeshCb=this.defaultMeshLoader.bind(this),this.parseVisual=!0,this.parseCollision=!1,this.packages="",this.workingPath="",this.fetchOptions={}}loadAsync(e){return new Promise((t,i)=>{this.load(e,t,null,i)})}load(e,t,i,s){const r=this.manager,o=Pp.extractUrlBase(e),a=this.manager.resolveURL(e);r.itemStart(a),fetch(a,this.fetchOptions).then(l=>{if(l.ok)return i&&i(null),l.text();throw new Error(`URDFLoader: Failed to load url '${a}' with error code ${l.status} : ${l.statusText}.`)}).then(l=>{const c=this.parse(l,this.workingPath||o);t(c),r.itemEnd(a)}).catch(l=>{s?s(l):console.error("URDFLoader: Error loading file.",l),r.itemError(a),r.itemEnd(a)})}parse(e,t=this.workingPath){const i=this.packages,s=this.loadMeshCb,r=this.parseVisual,o=this.parseCollision,a=this.manager,l={},c={},u={};function h(A){if(!/^package:\/\//.test(A))return t?t+A:A;const[D,T]=A.replace(/^package:\/\//,"").split(/\/(.+)/);if(typeof i=="string")return i.endsWith(D)?i+"/"+T:i+"/"+D+"/"+T;if(i instanceof Function)return i(D)+"/"+T;if(typeof i=="object")return D in i?i[D]+"/"+T:(console.error(`URDFLoader : ${D} not found in provided package list.`),null)}function f(A){let D;A instanceof Document?D=[...A.children]:A instanceof Element?D=[A]:D=[...new DOMParser().parseFromString(A,"text/xml").children];const T=D.filter(R=>R.nodeName==="robot").pop();return d(T)}function d(A){const D=[...A.children],T=D.filter(F=>F.nodeName.toLowerCase()==="link"),R=D.filter(F=>F.nodeName.toLowerCase()==="joint"),N=D.filter(F=>F.nodeName.toLowerCase()==="material"),L=new WS;L.robotName=A.getAttribute("name"),L.urdfRobotNode=A,N.forEach(F=>{const z=F.getAttribute("name");u[z]=m(F)});const I={},v={};T.forEach(F=>{const z=F.getAttribute("name"),G=A.querySelector(`child[link="${z}"]`)===null;l[z]=x(F,I,v,G?L:null)}),R.forEach(F=>{const z=F.getAttribute("name");c[z]=_(F)}),L.joints=c,L.links=l,L.colliders=v,L.visual=I;const b=Object.values(c);return b.forEach(F=>{F instanceof zf&&c[F.mimicJoint].mimicJoints.push(F)}),b.forEach(F=>{const z=new Set,G=se=>{if(z.has(se))throw new Error("URDFLoader: Detected an infinite loop of mimic joints.");z.add(se),se.mimicJoints.forEach(ne=>{G(ne)})};G(F)}),L.frames={...v,...I,...l,...c},L}function _(A){const D=[...A.children],T=A.getAttribute("type");let R;const N=D.find(z=>z.nodeName.toLowerCase()==="mimic");N?(R=new zf,R.mimicJoint=N.getAttribute("joint"),R.multiplier=parseFloat(N.getAttribute("multiplier")||1),R.offset=parseFloat(N.getAttribute("offset")||0)):R=new Bp,R.urdfNode=A,R.name=A.getAttribute("name"),R.urdfName=R.name,R.jointType=T;let L=null,I=null,v=[0,0,0],b=[0,0,0];D.forEach(z=>{const G=z.nodeName.toLowerCase();G==="origin"?(v=Ws(z.getAttribute("xyz")),b=Ws(z.getAttribute("rpy"))):G==="child"?I=l[z.getAttribute("link")]:G==="parent"?L=l[z.getAttribute("link")]:G==="limit"&&(R.limit.lower=parseFloat(z.getAttribute("lower")||R.limit.lower),R.limit.upper=parseFloat(z.getAttribute("upper")||R.limit.upper))}),L.add(R),R.add(I),Gf(R,b),R.position.set(v[0],v[1],v[2]);const F=D.filter(z=>z.nodeName.toLowerCase()==="axis")[0];if(F){const z=F.getAttribute("xyz").split(/\s+/g).map(G=>parseFloat(G));R.axis=new q(z[0],z[1],z[2]),R.axis.normalize()}return R}function x(A,D,T,R=null){R===null&&(R=new Op);const N=[...A.children];return R.name=A.getAttribute("name"),R.urdfName=R.name,R.urdfNode=A,r&&N.filter(I=>I.nodeName.toLowerCase()==="visual").forEach(I=>{const v=p(I,u);if(R.add(v),I.hasAttribute("name")){const b=I.getAttribute("name");v.name=b,v.urdfName=b,D[b]=v}}),o&&N.filter(I=>I.nodeName.toLowerCase()==="collision").forEach(I=>{const v=p(I);if(R.add(v),I.hasAttribute("name")){const b=I.getAttribute("name");v.name=b,v.urdfName=b,T[b]=v}}),R}function m(A){const D=[...A.children],T=new qr;return T.name=A.getAttribute("name")||"",D.forEach(R=>{const N=R.nodeName.toLowerCase();if(N==="color"){const L=R.getAttribute("rgba").split(/\s/g).map(I=>parseFloat(I));T.color.setRGB(L[0],L[1],L[2]),T.opacity=L[3],T.transparent=L[3]<1,T.depthWrite=!T.transparent}else if(N==="texture"){const L=R.getAttribute("filename");if(L){const I=new wp(a),v=h(L);T.map=I.load(v),T.map.colorSpace=Wt}}}),T}function p(A,D={}){const T=A.nodeName.toLowerCase()==="collision",R=[...A.children];let N=null;const L=R.filter(v=>v.nodeName.toLowerCase()==="material")[0];if(L){const v=L.getAttribute("name");v&&v in D?N=D[v]:N=m(L)}else N=new qr;const I=T?new HS:new GS;return I.urdfNode=A,R.forEach(v=>{const b=v.nodeName.toLowerCase();if(b==="geometry"){const F=v.children[0].nodeName.toLowerCase();if(F==="mesh"){const z=v.children[0].getAttribute("filename"),G=h(z);if(G!==null){const se=v.children[0].getAttribute("scale");if(se){const ne=Ws(se);I.scale.set(ne[0],ne[1],ne[2])}s(G,a,(ne,k)=>{k?console.error("URDFLoader: Error loading mesh.",k):ne&&(ne instanceof pn&&(ne.material=N),ne.position.set(0,0,0),ne.quaternion.identity(),I.add(ne))})}}else if(F==="box"){const z=new pn;z.geometry=new vr(1,1,1),z.material=N;const G=Ws(v.children[0].getAttribute("size"));z.scale.set(G[0],G[1],G[2]),I.add(z)}else if(F==="sphere"){const z=new pn;z.geometry=new Nu(1,30,30),z.material=N;const G=parseFloat(v.children[0].getAttribute("radius"))||0;z.scale.set(G,G,G),I.add(z)}else if(F==="cylinder"){const z=new pn;z.geometry=new Lu(1,1,1,30),z.material=N;const G=parseFloat(v.children[0].getAttribute("radius"))||0,se=parseFloat(v.children[0].getAttribute("length"))||0;z.scale.set(G,se,G),z.rotation.set(Math.PI/2,0,0),I.add(z)}}else if(b==="origin"){const F=Ws(v.getAttribute("xyz")),z=Ws(v.getAttribute("rpy"));I.position.set(F[0],F[1],F[2]),I.rotation.set(0,0,0),Gf(I,z)}}),I}return f(e)}defaultMeshLoader(e,t,i){/\.stl$/i.test(e)?new kS(t).load(e,r=>{const o=new pn(r,new qr);i(o)}):/\.dae$/i.test(e)?new VS(t).load(e,r=>i(r.scene)):console.warn(`URDFLoader: Could not load model at ${e}.
No loader available`)}}const qS={class:"three-viewer"},jS={class:"visibility-controls"},YS={key:0},$S={key:1},KS={key:2},Wf=5,JS=mr({__name:"ThreeViewer",props:{selectedNode:{}},emits:["urdf-loaded","node-selected"],setup(n,{expose:e,emit:t}){const i=n,s=t,r=sn(null),o=Ra({links:!0,joints:!0,collisions:!0,sensors:!0}),a=ai(()=>{const ie=Object.values(o).filter(Boolean).length,te=Object.keys(o).length;return ie===0?"none":ie===te?"all":"mixed"});let l,c,u,h,f,d=null,_=new Tx,x=new at,m=[],p=null;const A=new io({color:16760376,transparent:!0,opacity:.35,depthWrite:!1}),D=["sensor","camera","lidar","imu"],T=()=>{if(!r.value)return;l=new vp,l.background=new ft(2503224),c=new fn(75,r.value.clientWidth/r.value.clientHeight,.1,1e3),c.position.set(3,-3,3),c.up.set(0,0,1),c.lookAt(0,0,0),u=new ES({antialias:!0}),u.setSize(r.value.clientWidth,r.value.clientHeight),u.setPixelRatio(window.devicePixelRatio),r.value.appendChild(u.domElement),h=new AS(c,u.domElement),h.enableDamping=!0,h.dampingFactor=.05;const ie=new Cp(16777215,.5);l.add(ie);const te=new Rp(16777215,.8);te.position.set(5,-5,10),l.add(te);const J=new Ax(10,10);J.rotation.x=Math.PI/2,l.add(J);const Me=new wx(2);l.add(Me),window.addEventListener("resize",R),u.domElement.addEventListener("mousedown",L),u.domElement.addEventListener("click",I),N()},R=()=>{r.value&&(c.aspect=r.value.clientWidth/r.value.clientHeight,c.updateProjectionMatrix(),u.setSize(r.value.clientWidth,r.value.clientHeight))},N=()=>{f=requestAnimationFrame(N),h.update(),u.render(l,c)},L=ie=>{p={x:ie.clientX,y:ie.clientY}},I=ie=>{if(!r.value||!d)return;if(p){const Me=Math.abs(ie.clientX-p.x),pe=Math.abs(ie.clientY-p.y);if(Me>Wf||pe>Wf){p=null;return}}p=null;const te=r.value.getBoundingClientRect();x.x=(ie.clientX-te.left)/te.width*2-1,x.y=-((ie.clientY-te.top)/te.height)*2+1,_.setFromCamera(x,c);const J=_.intersectObject(d,!0);if(J.length>0){const Me=J[0];if(Me&&Me.object){const pe=Me.object,H=v(pe);if(H){s("node-selected",H);return}}}s("node-selected",null)},v=ie=>{let te=ie;for(;te;){if(te.userData.urdfNode)return te.userData.urdfNode;te=te.parent}return null},b=()=>{m.forEach(ie=>{l.remove(ie)}),m=[]},F=ie=>{const te=[];ie.traverse(J=>{J.isMesh&&J.userData?.isCollisionMesh&&te.push(J),J.isURDFCollider&&(J.visible=!0,J.isMesh&&te.push(J))}),te.forEach((J,Me)=>{J.material&&J.material!==A&&J.material!==J.userData.originalMaterial&&J.material.dispose&&J.material.dispose(),J.material=A,J.visible=!0})},z=ie=>{if(b(),!ie||!ie.object3D)return;const te=ie.object3D,J=(pe,H=[])=>(pe!==te&&(pe.isURDFLink||pe.isURDFJoint)||(pe.isMesh&&pe.geometry&&H.push(pe),pe.children&&pe.children.forEach(K=>{J(K,H)})),H);J(te).forEach(pe=>{let H=!1;if(pe.userData?.isCollisionMesh?H=o.collisions:pe.userData?.isSensor?H=o.sensors:pe.userData?.isJointMesh?H=o.joints:pe.userData?.isLinkMesh&&(H=o.links),!H)return;const K=new sx(pe.geometry),ve=new dr({color:65280}),je=new Oa(K,ve);pe.getWorldPosition(je.position),pe.getWorldQuaternion(je.quaternion),pe.getWorldScale(je.scale),l.add(je),m.push(je)})};Ci(()=>i.selectedNode,ie=>{z(ie??null)}),Ci(()=>({...o}),()=>{z(i.selectedNode??null)},{deep:!0});const G=(ie,te)=>{o[ie]=te,d&&se(d)},se=ie=>{ie.traverse(te=>{if(te.isURDFCollider)te.visible=o.collisions,te.traverse(J=>{J.isMesh&&(J.visible=o.collisions)});else if(te.isMesh){if(te.userData?.isCollisionMesh)return;te.userData?.isLinkMesh?te.visible=o.links:te.userData?.isJointMesh&&(te.visible=o.joints)}te.userData?.isSensor&&(te.visible=o.sensors,te.traverse(J=>{J.isMesh&&(J.visible=o.sensors)}))})},ne=ie=>{G(ie,!o[ie])},k=()=>{const ie=a.value,te=ie==="none"||ie==="mixed";Object.keys(o).forEach(J=>{o[J]=te}),d&&se(d)},W=ie=>{ie.traverse(te=>{te.userData=te.userData||{};let J=!1,Me=te;for(;Me&&!J;)Me.isURDFCollider&&(J=!0),Me=Me.parent;if(te.userData.isCollisionMesh=J,!J&&te.isMesh){let H=!1,K=!1;for(Me=te.parent;Me;){if(Me.isURDFJoint){K=!0;break}else if(Me.isURDFLink){H=!0;break}Me=Me.parent}te.userData.isLinkMesh=H,te.userData.isJointMesh=K}else te.userData.isLinkMesh=!1,te.userData.isJointMesh=!1;const pe=te.userData?.isSensor||te.userData?.type==="sensor"||D.some(H=>te.name?.toLowerCase().includes(H));te.userData.isSensor=pe})},Y=ie=>{const te=J=>{const Me={name:J.name||"unnamed",type:J.isURDFRobot?"robot":J.isURDFLink?"link":J.isURDFJoint?"joint":"link",children:[],properties:{},object3D:J};if(J.userData=J.userData||{},J.userData.urdfNode=Me,J.isURDFJoint&&J.jointType&&(Me.properties.type=J.jointType,J.axis&&(Me.properties.axis=[J.axis.x,J.axis.y,J.axis.z])),J.isURDFLink||J.isURDFRobot){const pe=[];J.children&&J.children.forEach(H=>{H.isURDFCollider&&pe.push({name:H.urdfName||H.name||"unnamed_collision",visible:H.visible})}),pe.length>0&&(Me.properties.collisionGeometry=pe)}return J.position&&(Me.properties.position=[J.position.x,J.position.y,J.position.z]),J.rotation&&(Me.properties.rotation=[J.rotation.x,J.rotation.y,J.rotation.z]),J.children&&J.children.forEach(pe=>{(pe.isURDFLink||pe.isURDFJoint)&&Me.children.push(te(pe))}),Me};return te(ie)};e({loadURDFContent:(ie,te,J="")=>{d&&(l.remove(d),d=null);const Me=new Tp;Me.onLoad=()=>{d&&(W(d),F(d),se(d))};const pe=new XS(Me);pe.parseCollision=!0,J&&(pe.packages=ve=>J);const H=pe.loadMeshCb;if(H?pe.loadMeshCb=(ve,je,Ue)=>{H.call(pe,ve,je,xt=>{xt||console.warn(`[Mesh Loader] Failed to load mesh: ${ve}`),Ue(xt)})}:console.warn("[Mesh Loader] No default mesh loader found - mesh loading may not work correctly"),ie.startsWith("http://")||ie.startsWith("https://"))pe.load(ie,ve=>{d=ve,l.add(d);const je=Y(d);s("urdf-loaded",je)},void 0,ve=>{console.error("Error loading URDF:",ve),alert(`Failed to load URDF: ${ve}`)});else{d=pe.parse(ie),l.add(d),W(d),F(d),se(d);const ve=Y(d);s("urdf-loaded",ve)}}});const ye=()=>{f&&cancelAnimationFrame(f),window.removeEventListener("resize",R),u&&u.domElement&&(u.domElement.removeEventListener("mousedown",L),u.domElement.removeEventListener("click",I)),b(),u&&u.dispose(),r.value&&u&&r.value.removeChild(u.domElement)};return oo(()=>{T()}),Da(()=>{ye()}),(ie,te)=>(St(),Lt("div",qS,[Xe("div",jS,[Xe("button",{class:cn(["visibility-btn all-btn",{"all-visible":a.value==="all","all-hidden":a.value==="none","mixed-state":a.value==="mixed"}]),onClick:k,title:"Show/Hide All Components"},[a.value==="all"?(St(),Lt("span",YS,"👁️ All")):a.value==="none"?(St(),Lt("span",$S,"👁️ None")):(St(),Lt("span",KS,"👁️ Mixed"))],2),te[8]||(te[8]=Xe("div",{class:"divider"},null,-1)),Xe("button",{class:cn(["visibility-btn",{active:o.links}]),onClick:te[0]||(te[0]=J=>ne("links")),title:"Toggle Links Visibility"},[te[4]||(te[4]=Xe("span",{class:"icon"},"🔗",-1)),Xe("span",{class:cn({strikethrough:!o.links})},"Links",2)],2),Xe("button",{class:cn(["visibility-btn",{active:o.joints}]),onClick:te[1]||(te[1]=J=>ne("joints")),title:"Toggle Joints Visibility"},[te[5]||(te[5]=Xe("span",{class:"icon"},"🔧",-1)),Xe("span",{class:cn({strikethrough:!o.joints})},"Joints",2)],2),Xe("button",{class:cn(["visibility-btn",{active:o.collisions}]),onClick:te[2]||(te[2]=J=>ne("collisions")),title:"Toggle Collision Geometry Visibility"},[te[6]||(te[6]=Xe("span",{class:"icon"},"💥",-1)),Xe("span",{class:cn({strikethrough:!o.collisions})},"Collisions",2)],2),Xe("button",{class:cn(["visibility-btn",{active:o.sensors}]),onClick:te[3]||(te[3]=J=>ne("sensors")),title:"Toggle Sensors Visibility"},[te[7]||(te[7]=Xe("span",{class:"icon"},"📡",-1)),Xe("span",{class:cn({strikethrough:!o.sensors})},"Sensors",2)],2)]),Xe("div",{ref_key:"canvasContainer",ref:r,class:"canvas-container"},null,512)]))}}),ZS=gr(JS,[["__scopeId","data-v-e0d1912f"]]),QS={class:"properties-panel"},eE={class:"panel-content"},tE={key:0,class:"empty-state"},nE={key:1,class:"properties-container"},iE={class:"properties-list"},sE={class:"property-key"},rE={class:"property-value"},oE={key:0,class:"collision-section"},aE={class:"collapse-icon"},lE={class:"collision-count"},cE={key:0,class:"collision-list"},uE={class:"collision-name"},hE=mr({__name:"PropertiesPanel",props:{node:{}},setup(n){const e=n,t=ai(()=>e.node!==null),i=sn(!0),s=ai(()=>{if(!e.node)return[];const a=[];if(a.push({key:"Name",value:e.node.name}),a.push({key:"Type",value:e.node.type}),e.node.object3D){const l=e.node.object3D,c=new q,u=new Xn,h=new Cn;l.getWorldPosition(c),l.getWorldQuaternion(u),h.setFromQuaternion(u),a.push({key:"Position",value:`[${c.x.toFixed(3)}, ${c.y.toFixed(3)}, ${c.z.toFixed(3)}]`}),a.push({key:"Rotation",value:`[${h.x.toFixed(3)}, ${h.y.toFixed(3)}, ${h.z.toFixed(3)}]`})}else e.node.properties&&(e.node.properties.position&&a.push({key:"Position",value:JSON.stringify(e.node.properties.position)}),e.node.properties.rotation&&a.push({key:"Rotation",value:JSON.stringify(e.node.properties.rotation)}));if(e.node.properties)for(const[l,c]of Object.entries(e.node.properties))l!=="position"&&l!=="rotation"&&l!=="collisionGeometry"&&a.push({key:l.charAt(0).toUpperCase()+l.slice(1),value:typeof c=="object"?JSON.stringify(c,null,2):String(c)});return a}),r=ai(()=>!e.node||!e.node.properties?[]:e.node.properties.collisionGeometry||[]),o=ai(()=>r.value.length>0);return(a,l)=>(St(),Lt("aside",QS,[l[3]||(l[3]=Xe("div",{class:"panel-header"},[Xe("h2",null,"Properties")],-1)),Xe("div",eE,[t.value?(St(),Lt("div",nE,[Xe("div",iE,[(St(!0),Lt(wn,null,da(s.value,c=>(St(),Lt("div",{key:c.key,class:"property-item"},[Xe("div",sE,un(c.key),1),Xe("div",rE,un(c.value),1)]))),128))]),o.value?(St(),Lt("div",oE,[Xe("div",{class:"collision-header",onClick:l[0]||(l[0]=c=>i.value=!i.value)},[Xe("span",aE,un(i.value?"▼":"▶"),1),l[2]||(l[2]=Xe("h3",null,"Collision Geometry",-1)),Xe("span",lE,"("+un(r.value.length)+")",1)]),i.value?(St(),Lt("div",cE,[(St(!0),Lt(wn,null,da(r.value,(c,u)=>(St(),Lt("div",{key:u,class:"collision-item"},[Xe("div",uE,un(c.name),1)]))),128))])):Ui("",!0)])):Ui("",!0)])):(St(),Lt("div",tE,[...l[1]||(l[1]=[Xe("p",null,"No component selected",-1),Xe("p",{class:"hint"},"Select a component from the hierarchy to view its properties",-1)])]))])]))}}),fE=gr(hE,[["__scopeId","data-v-9645ac98"]]),dE={class:"console-title"},pE={class:"collapse-icon"},mE=["title"],gE={key:0,class:"no-logs"},_E={class:"log-time"},xE={class:"log-type"},vE={class:"log-message"},ME=mr({__name:"ConsolePanel",setup(n){const e=sn([]),t=sn(!0),i=sn(!0),s=sn(null);let r=0;const o={log:console.log,warn:console.warn,error:console.error,info:console.info},a=(x,m)=>{const p=m.map(A=>{if(typeof A=="object")try{return JSON.stringify(A,null,2)}catch{return String(A)}return String(A)}).join(" ");e.value.push({id:r++,timestamp:new Date,type:x,message:p}),i.value&&!t.value&&$l(()=>{s.value&&(s.value.scrollTop=s.value.scrollHeight)})},l=()=>{console.log=(...x)=>{o.log(...x),a("log",x)},console.warn=(...x)=>{o.warn(...x),a("warn",x)},console.error=(...x)=>{o.error(...x),a("error",x)},console.info=(...x)=>{o.info(...x),a("info",x)}},c=()=>{console.log=o.log,console.warn=o.warn,console.error=o.error,console.info=o.info},u=()=>{t.value=!t.value,!t.value&&i.value&&$l(()=>{s.value&&(s.value.scrollTop=s.value.scrollHeight)})},h=()=>{i.value=!i.value,i.value&&s.value&&(s.value.scrollTop=s.value.scrollHeight)},f=()=>{e.value=[]},d=x=>{const m=x.toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"}),p=x.getMilliseconds().toString().padStart(3,"0");return`${m}.${p}`},_=x=>`log-entry log-${x}`;return oo(()=>{l()}),Da(()=>{c()}),(x,m)=>(St(),Lt("div",{class:cn(["console-panel",{collapsed:t.value}])},[Xe("div",{class:"console-header",onClick:u},[Xe("span",dE,[Xe("span",pE,un(t.value?"▲":"▼"),1),pu(" Console Logs ("+un(e.value.length)+") ",1)]),Xe("div",{class:"console-actions",onClick:m[0]||(m[0]=Yd(()=>{},["stop"]))},[Xe("button",{class:cn(["console-btn",{active:i.value}]),onClick:h,title:i.value?"Disable auto-scroll":"Enable auto-scroll"},un(i.value?"📌":"📍")+" Auto-scroll ",11,mE),Xe("button",{class:"console-btn",onClick:f,title:"Clear logs"}," 🗑️ Clear ")])]),t.value?Ui("",!0):(St(),Lt("div",{key:0,class:"console-content",ref_key:"logsContainer",ref:s},[e.value.length===0?(St(),Lt("div",gE," No console logs yet ")):Ui("",!0),(St(!0),Lt(wn,null,da(e.value,p=>(St(),Lt("div",{key:p.id,class:cn(_(p.type))},[Xe("span",_E,un(d(p.timestamp)),1),Xe("span",xE,un(p.type.toUpperCase()),1),Xe("span",vE,un(p.message),1)],2))),128))],512))],2))}}),yE=gr(ME,[["__scopeId","data-v-64a5f72d"]]),bE={class:"urdf-editor"},SE={class:"toolbar"},EE={class:"toolbar-actions"},TE={class:"upload-dropdown"},AE={key:0,class:"dropdown-menu"},wE={class:"editor-container"},RE=mr({__name:"App",setup(n){const e=sn(null),t=sn(null),i=sn(!1),s=sn(!1),r=sn(""),o=sn(""),a=sn(null);Ci(r,L=>{if(L&&!o.value){const I=L.lastIndexOf("/");I!==-1&&(o.value=L.substring(0,I+1))}});const l=L=>{e.value===L?e.value=null:e.value=L},c=L=>{e.value=L},u=L=>{t.value=L,e.value=null},h=()=>{i.value=!i.value},f=()=>{i.value=!1},d=L=>{L.target.closest(".upload-dropdown")||f()};oo(()=>{document.addEventListener("click",d)}),Da(()=>{document.removeEventListener("click",d)});const _=()=>{f(),document.getElementById("file-upload")?.click()},x=()=>{f(),s.value=!0},m=()=>{s.value=!1,p()},p=()=>{r.value="",o.value=""},A=async()=>{if(r.value.trim())try{let L=o.value.trim();L||(L=r.value.substring(0,r.value.lastIndexOf("/")+1));const I=r.value.split("/"),v=I[I.length-1]||"loaded_from_url.urdf";a.value&&a.value.loadURDFContent(r.value,v,L),s.value=!1,p()}catch(L){console.error("Error loading URDF from URL:",L),alert(`Failed to load URDF from URL: ${L}`),s.value=!1,p()}},D=L=>{const I=L.target;if(I.files&&I.files[0]){const v=I.files[0],b=new FileReader;b.onload=F=>{const z=F.target?.result;if(a.value)try{a.value.loadURDFContent(z,v.name,"")}catch(G){console.error("Error loading URDF:",G),alert(`Failed to load URDF: ${G}`)}},b.readAsText(v)}},T=()=>{if(!t.value)return;const L=R(t.value),I=new Blob([L],{type:"application/xml"}),v=URL.createObjectURL(I),b=document.createElement("a");b.href=v,b.download=`${t.value.name}.urdf`;try{document.body?(b.style&&(b.style.display="none"),document.body.appendChild(b),b.click(),setTimeout(()=>{try{document.body&&document.body.contains(b)&&document.body.removeChild(b)}catch{}URL.revokeObjectURL(v)},100)):(b.click(),setTimeout(()=>{URL.revokeObjectURL(v)},100))}catch{b.click(),setTimeout(()=>{URL.revokeObjectURL(v)},100)}},R=L=>{let I=`<?xml version="1.0"?>
`;return I+=N(L,0),I},N=(L,I)=>{const v="  ".repeat(I);let b="";if(L.type==="robot"){b+=`${v}<robot name="${L.name}">
`;for(const F of L.children)b+=N(F,I+1);b+=`${v}</robot>
`}else if(L.type==="link"){b+=`${v}<link name="${L.name}">
`;for(const F of L.children)b+=N(F,I+1);b+=`${v}</link>
`}else if(L.type==="joint"){b+=`${v}<joint name="${L.name}" type="${L.properties?.type||"fixed"}">
`;for(const F of L.children)b+=N(F,I+1);b+=`${v}</joint>
`}return b};return(L,I)=>(St(),Lt("div",bE,[Xe("header",SE,[I[4]||(I[4]=Xe("h1",null,"URDF Editor",-1)),Xe("div",EE,[Xe("div",TE,[Xe("button",{class:"btn upload-btn",onClick:h},[...I[3]||(I[3]=[pu(" Upload URDF ",-1),Xe("span",{class:"dropdown-arrow"},"▼",-1)])]),i.value?(St(),Lt("div",AE,[Xe("button",{onClick:_,class:"dropdown-item"}," 📁 From Local File "),Xe("button",{onClick:x,class:"dropdown-item"}," 🌐 From URL ")])):Ui("",!0)]),Xe("input",{id:"file-upload",type:"file",accept:".urdf,.xml,application/xml,text/xml",onChange:D,style:{display:"none"}},null,32),Xe("button",{class:"btn",disabled:!0,onClick:T},"Download URDF")])]),Xe("div",wE,[On(R_,{root:t.value,selected:e.value,onSelect:l},null,8,["root","selected"]),On(ZS,{ref_key:"threeViewerRef",ref:a,class:"main-viewer","selected-node":e.value,onUrdfLoaded:u,onNodeSelected:c},null,8,["selected-node"]),On(fE,{node:e.value},null,8,["node"])]),s.value?(St(),Lt("div",{key:0,class:"modal-overlay",onClick:m},[Xe("div",{class:"modal-dialog",onClick:I[2]||(I[2]=Yd(()=>{},["stop"]))},[I[5]||(I[5]=Xe("h3",null,"Load URDF from URL",-1)),Hu(Xe("input",{"onUpdate:modelValue":I[0]||(I[0]=v=>r.value=v),type:"text",placeholder:"Enter URDF file URL",class:"url-input",onKeyup:_h(A,["enter"])},null,544),[[gh,r.value]]),Hu(Xe("input",{"onUpdate:modelValue":I[1]||(I[1]=v=>o.value=v),type:"text",placeholder:"Package path URL (optional - defaults to URDF folder)",class:"url-input",onKeyup:_h(A,["enter"])},null,544),[[gh,o.value]]),I[6]||(I[6]=Xe("div",{class:"modal-help-text"}," Package path is used to resolve package:// mesh references. Leave empty to use the URDF's folder as the default. ",-1)),Xe("div",{class:"modal-actions"},[Xe("button",{class:"btn btn-secondary",onClick:m},"Cancel"),Xe("button",{class:"btn",onClick:A},"Load")])])])):Ui("",!0),On(yE)]))}}),CE=gr(RE,[["__scopeId","data-v-c623ff2e"]]),PE=c_(CE);PE.mount("#app");
