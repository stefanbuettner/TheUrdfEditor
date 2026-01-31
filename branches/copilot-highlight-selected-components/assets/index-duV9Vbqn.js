(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Xc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ut={},Ys=[],ri=()=>{},Vf=()=>!1,Ma=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),qc=n=>n.startsWith("onUpdate:"),dn=Object.assign,jc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Up=Object.prototype.hasOwnProperty,Pt=(n,e)=>Up.call(n,e),ut=Array.isArray,Ks=n=>ya(n)==="[object Map]",zf=n=>ya(n)==="[object Set]",ct=n=>typeof n=="function",Xt=n=>typeof n=="string",Zi=n=>typeof n=="symbol",Vt=n=>n!==null&&typeof n=="object",Hf=n=>(Vt(n)||ct(n))&&ct(n.then)&&ct(n.catch),Gf=Object.prototype.toString,ya=n=>Gf.call(n),Fp=n=>ya(n).slice(8,-1),Wf=n=>ya(n)==="[object Object]",Yc=n=>Xt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ir=Xc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Sa=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Op=/-\w/g,zn=Sa(n=>n.replace(Op,e=>e.slice(1).toUpperCase())),Bp=/\B([A-Z])/g,Ji=Sa(n=>n.replace(Bp,"-$1").toLowerCase()),ba=Sa(n=>n.charAt(0).toUpperCase()+n.slice(1)),qa=Sa(n=>n?`on${ba(n)}`:""),Yi=(n,e)=>!Object.is(n,e),Ko=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Xf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Kc=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Uu;const Ea=()=>Uu||(Uu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function $c(n){if(ut(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Xt(i)?Hp(i):$c(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Xt(n)||Vt(n))return n}const kp=/;(?![^(]*\))/g,Vp=/:([^]+)/,zp=/\/\*[^]*?\*\//g;function Hp(n){const e={};return n.replace(zp,"").split(kp).forEach(t=>{if(t){const i=t.split(Vp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ta(n){let e="";if(Xt(n))e=n;else if(ut(n))for(let t=0;t<n.length;t++){const i=Ta(n[t]);i&&(e+=i+" ")}else if(Vt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Gp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Wp=Xc(Gp);function qf(n){return!!n||n===""}const jf=n=>!!(n&&n.__v_isRef===!0),$s=n=>Xt(n)?n:n==null?"":ut(n)||Vt(n)&&(n.toString===Gf||!ct(n.toString))?jf(n)?$s(n.value):JSON.stringify(n,Yf,2):String(n),Yf=(n,e)=>jf(e)?Yf(n,e.value):Ks(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[ja(i,r)+" =>"]=s,t),{})}:zf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>ja(t))}:Zi(e)?ja(e):Vt(e)&&!ut(e)&&!Wf(e)?String(e):e,ja=(n,e="")=>{var t;return Zi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let bn;class Xp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=bn,!e&&bn&&(this.index=(bn.scopes||(bn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=bn;try{return bn=this,e()}finally{bn=t}}}on(){++this._on===1&&(this.prevScope=bn,bn=this)}off(){this._on>0&&--this._on===0&&(bn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function qp(){return bn}let Ft;const Ya=new WeakSet;class Kf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,bn&&bn.active&&bn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ya.has(this)&&(Ya.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Zf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Fu(this),Jf(this);const e=Ft,t=Yn;Ft=this,Yn=!0;try{return this.fn()}finally{Qf(this),Ft=e,Yn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Qc(e);this.deps=this.depsTail=void 0,Fu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ya.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Vl(this)&&this.run()}get dirty(){return Vl(this)}}let $f=0,Ur,Fr;function Zf(n,e=!1){if(n.flags|=8,e){n.next=Fr,Fr=n;return}n.next=Ur,Ur=n}function Zc(){$f++}function Jc(){if(--$f>0)return;if(Fr){let e=Fr;for(Fr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ur;){let e=Ur;for(Ur=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Jf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Qf(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Qc(i),jp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Vl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ed(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function ed(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Gr)||(n.globalVersion=Gr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Vl(n))))return;n.flags|=2;const e=n.dep,t=Ft,i=Yn;Ft=n,Yn=!0;try{Jf(n);const s=n.fn(n._value);(e.version===0||Yi(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ft=t,Yn=i,Qf(n),n.flags&=-3}}function Qc(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Qc(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function jp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Yn=!0;const td=[];function wi(){td.push(Yn),Yn=!1}function Ri(){const n=td.pop();Yn=n===void 0?!0:n}function Fu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Ft;Ft=void 0;try{e()}finally{Ft=t}}}let Gr=0;class Yp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class eu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ft||!Yn||Ft===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ft)t=this.activeLink=new Yp(Ft,this),Ft.deps?(t.prevDep=Ft.depsTail,Ft.depsTail.nextDep=t,Ft.depsTail=t):Ft.deps=Ft.depsTail=t,nd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Ft.depsTail,t.nextDep=void 0,Ft.depsTail.nextDep=t,Ft.depsTail=t,Ft.deps===t&&(Ft.deps=i)}return t}trigger(e){this.version++,Gr++,this.notify(e)}notify(e){Zc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Jc()}}}function nd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)nd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const zl=new WeakMap,ps=Symbol(""),Hl=Symbol(""),Wr=Symbol("");function ln(n,e,t){if(Yn&&Ft){let i=zl.get(n);i||zl.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new eu),s.map=i,s.key=t),s.track()}}function Si(n,e,t,i,s,r){const o=zl.get(n);if(!o){Gr++;return}const a=l=>{l&&l.trigger()};if(Zc(),e==="clear")o.forEach(a);else{const l=ut(n),c=l&&Yc(t);if(l&&t==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===Wr||!Zi(f)&&f>=u)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Wr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(ps)),Ks(n)&&a(o.get(Hl)));break;case"delete":l||(a(o.get(ps)),Ks(n)&&a(o.get(Hl)));break;case"set":Ks(n)&&a(o.get(ps));break}}Jc()}function Ts(n){const e=Ct(n);return e===n?e:(ln(e,"iterate",Wr),kn(n)?e:e.map(Kn))}function Aa(n){return ln(n=Ct(n),"iterate",Wr),n}function Hi(n,e){return Ci(n)?ms(n)?sr(Kn(e)):sr(e):Kn(e)}const Kp={__proto__:null,[Symbol.iterator](){return Ka(this,Symbol.iterator,n=>Hi(this,n))},concat(...n){return Ts(this).concat(...n.map(e=>ut(e)?Ts(e):e))},entries(){return Ka(this,"entries",n=>(n[1]=Hi(this,n[1]),n))},every(n,e){return pi(this,"every",n,e,void 0,arguments)},filter(n,e){return pi(this,"filter",n,e,t=>t.map(i=>Hi(this,i)),arguments)},find(n,e){return pi(this,"find",n,e,t=>Hi(this,t),arguments)},findIndex(n,e){return pi(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return pi(this,"findLast",n,e,t=>Hi(this,t),arguments)},findLastIndex(n,e){return pi(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return pi(this,"forEach",n,e,void 0,arguments)},includes(...n){return $a(this,"includes",n)},indexOf(...n){return $a(this,"indexOf",n)},join(n){return Ts(this).join(n)},lastIndexOf(...n){return $a(this,"lastIndexOf",n)},map(n,e){return pi(this,"map",n,e,void 0,arguments)},pop(){return Sr(this,"pop")},push(...n){return Sr(this,"push",n)},reduce(n,...e){return Ou(this,"reduce",n,e)},reduceRight(n,...e){return Ou(this,"reduceRight",n,e)},shift(){return Sr(this,"shift")},some(n,e){return pi(this,"some",n,e,void 0,arguments)},splice(...n){return Sr(this,"splice",n)},toReversed(){return Ts(this).toReversed()},toSorted(n){return Ts(this).toSorted(n)},toSpliced(...n){return Ts(this).toSpliced(...n)},unshift(...n){return Sr(this,"unshift",n)},values(){return Ka(this,"values",n=>Hi(this,n))}};function Ka(n,e,t){const i=Aa(n),s=i[e]();return i!==n&&!kn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const $p=Array.prototype;function pi(n,e,t,i,s,r){const o=Aa(n),a=o!==n&&!kn(n),l=o[e];if(l!==$p[e]){const h=l.apply(n,r);return a?Kn(h):h}let c=t;o!==n&&(a?c=function(h,f){return t.call(this,Hi(n,h),f,n)}:t.length>2&&(c=function(h,f){return t.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Ou(n,e,t,i){const s=Aa(n);let r=t;return s!==n&&(kn(n)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,n)}):r=function(o,a,l){return t.call(this,o,Hi(n,a),l,n)}),s[e](r,...i)}function $a(n,e,t){const i=Ct(n);ln(i,"iterate",Wr);const s=i[e](...t);return(s===-1||s===!1)&&su(t[0])?(t[0]=Ct(t[0]),i[e](...t)):s}function Sr(n,e,t=[]){wi(),Zc();const i=Ct(n)[e].apply(n,t);return Jc(),Ri(),i}const Zp=Xc("__proto__,__v_isRef,__isVue"),id=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Zi));function Jp(n){Zi(n)||(n=String(n));const e=Ct(this);return ln(e,"has",n),e.hasOwnProperty(n)}class sd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?lm:ld:r?ad:od).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ut(e);if(!s){let l;if(o&&(l=Kp[t]))return l;if(t==="hasOwnProperty")return Jp}const a=Reflect.get(e,t,hn(e)?e:i);if((Zi(t)?id.has(t):Zp(t))||(s||ln(e,"get",t),r))return a;if(hn(a)){const l=o&&Yc(t)?a:a.value;return s&&Vt(l)?Wl(l):l}return Vt(a)?s?Wl(a):nu(a):a}}class rd extends sd{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=ut(e)&&Yc(t);if(!this._isShallow){const c=Ci(r);if(!kn(i)&&!Ci(i)&&(r=Ct(r),i=Ct(i)),!o&&hn(r)&&!hn(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:Pt(e,t),l=Reflect.set(e,t,i,hn(e)?e:s);return e===Ct(s)&&(a?Yi(i,r)&&Si(e,"set",t,i):Si(e,"add",t,i)),l}deleteProperty(e,t){const i=Pt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Si(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Zi(t)||!id.has(t))&&ln(e,"has",t),i}ownKeys(e){return ln(e,"iterate",ut(e)?"length":ps),Reflect.ownKeys(e)}}class Qp extends sd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const em=new rd,tm=new Qp,nm=new rd(!0);const Gl=n=>n,po=n=>Reflect.getPrototypeOf(n);function im(n,e,t){return function(...i){const s=this.__v_raw,r=Ct(s),o=Ks(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?Gl:e?sr:Kn;return!e&&ln(r,"iterate",l?Hl:ps),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function mo(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function sm(n,e){const t={get(s){const r=this.__v_raw,o=Ct(r),a=Ct(s);n||(Yi(s,a)&&ln(o,"get",s),ln(o,"get",a));const{has:l}=po(o),c=e?Gl:n?sr:Kn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&ln(Ct(s),"iterate",ps),s.size},has(s){const r=this.__v_raw,o=Ct(r),a=Ct(s);return n||(Yi(s,a)&&ln(o,"has",s),ln(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=Ct(a),c=e?Gl:n?sr:Kn;return!n&&ln(l,"iterate",ps),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return dn(t,n?{add:mo("add"),set:mo("set"),delete:mo("delete"),clear:mo("clear")}:{add(s){!e&&!kn(s)&&!Ci(s)&&(s=Ct(s));const r=Ct(this);return po(r).has.call(r,s)||(r.add(s),Si(r,"add",s,s)),this},set(s,r){!e&&!kn(r)&&!Ci(r)&&(r=Ct(r));const o=Ct(this),{has:a,get:l}=po(o);let c=a.call(o,s);c||(s=Ct(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Yi(r,u)&&Si(o,"set",s,r):Si(o,"add",s,r),this},delete(s){const r=Ct(this),{has:o,get:a}=po(r);let l=o.call(r,s);l||(s=Ct(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Si(r,"delete",s,void 0),c},clear(){const s=Ct(this),r=s.size!==0,o=s.clear();return r&&Si(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=im(s,n,e)}),t}function tu(n,e){const t=sm(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(Pt(t,s)&&s in i?t:i,s,r)}const rm={get:tu(!1,!1)},om={get:tu(!1,!0)},am={get:tu(!0,!1)};const od=new WeakMap,ad=new WeakMap,ld=new WeakMap,lm=new WeakMap;function cm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function um(n){return n.__v_skip||!Object.isExtensible(n)?0:cm(Fp(n))}function nu(n){return Ci(n)?n:iu(n,!1,em,rm,od)}function hm(n){return iu(n,!1,nm,om,ad)}function Wl(n){return iu(n,!0,tm,am,ld)}function iu(n,e,t,i,s){if(!Vt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=um(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function ms(n){return Ci(n)?ms(n.__v_raw):!!(n&&n.__v_isReactive)}function Ci(n){return!!(n&&n.__v_isReadonly)}function kn(n){return!!(n&&n.__v_isShallow)}function su(n){return n?!!n.__v_raw:!1}function Ct(n){const e=n&&n.__v_raw;return e?Ct(e):n}function fm(n){return!Pt(n,"__v_skip")&&Object.isExtensible(n)&&Xf(n,"__v_skip",!0),n}const Kn=n=>Vt(n)?nu(n):n,sr=n=>Vt(n)?Wl(n):n;function hn(n){return n?n.__v_isRef===!0:!1}function ls(n){return dm(n,!1)}function dm(n,e){return hn(n)?n:new pm(n,e)}class pm{constructor(e,t){this.dep=new eu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ct(e),this._value=t?e:Kn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||kn(e)||Ci(e);e=i?e:Ct(e),Yi(e,t)&&(this._rawValue=e,this._value=i?e:Kn(e),this.dep.trigger())}}function mm(n){return hn(n)?n.value:n}const gm={get:(n,e,t)=>e==="__v_raw"?n:mm(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return hn(s)&&!hn(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function cd(n){return ms(n)?n:new Proxy(n,gm)}class _m{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new eu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Gr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ft!==this)return Zf(this,!0),!0}get value(){const e=this.dep.track();return ed(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function xm(n,e,t=!1){let i,s;return ct(n)?i=n:(i=n.get,s=n.set),new _m(i,s,t)}const go={},oa=new WeakMap;let cs;function vm(n,e=!1,t=cs){if(t){let i=oa.get(t);i||oa.set(t,i=[]),i.push(n)}}function Mm(n,e,t=Ut){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=E=>s?E:kn(E)||s===!1||s===0?bi(E,1):bi(E);let u,h,f,p,_=!1,M=!1;if(hn(n)?(h=()=>n.value,_=kn(n)):ms(n)?(h=()=>c(n),_=!0):ut(n)?(M=!0,_=n.some(E=>ms(E)||kn(E)),h=()=>n.map(E=>{if(hn(E))return E.value;if(ms(E))return c(E);if(ct(E))return l?l(E,2):E()})):ct(n)?e?h=l?()=>l(n,2):n:h=()=>{if(f){wi();try{f()}finally{Ri()}}const E=cs;cs=u;try{return l?l(n,3,[p]):n(p)}finally{cs=E}}:h=ri,e&&s){const E=h,S=s===!0?1/0:s;h=()=>bi(E(),S)}const m=qp(),d=()=>{u.stop(),m&&m.active&&jc(m.effects,u)};if(r&&e){const E=e;e=(...S)=>{E(...S),d()}}let R=M?new Array(n.length).fill(go):go;const D=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(e){const S=u.run();if(s||_||(M?S.some((L,N)=>Yi(L,R[N])):Yi(S,R))){f&&f();const L=cs;cs=u;try{const N=[S,R===go?void 0:M&&R[0]===go?[]:R,p];R=S,l?l(e,3,N):e(...N)}finally{cs=L}}}else u.run()};return a&&a(D),u=new Kf(h),u.scheduler=o?()=>o(D,!1):D,p=E=>vm(E,!1,u),f=u.onStop=()=>{const E=oa.get(u);if(E){if(l)l(E,4);else for(const S of E)S();oa.delete(u)}},e?i?D(!0):R=u.run():o?o(D.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function bi(n,e=1/0,t){if(e<=0||!Vt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,hn(n))bi(n.value,e,t);else if(ut(n))for(let i=0;i<n.length;i++)bi(n[i],e,t);else if(zf(n)||Ks(n))n.forEach(i=>{bi(i,e,t)});else if(Wf(n)){for(const i in n)bi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&bi(n[i],e,t)}return n}function eo(n,e,t,i){try{return i?n(...i):n()}catch(s){wa(s,e,t)}}function li(n,e,t,i){if(ct(n)){const s=eo(n,e,t,i);return s&&Hf(s)&&s.catch(r=>{wa(r,e,t)}),s}if(ut(n)){const s=[];for(let r=0;r<n.length;r++)s.push(li(n[r],e,t,i));return s}}function wa(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ut;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){wi(),eo(r,null,10,[n,l,c]),Ri();return}}ym(n,t,s,i,o)}function ym(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const xn=[];let ei=-1;const Zs=[];let Gi=null,Hs=0;const ud=Promise.resolve();let aa=null;function Sm(n){const e=aa||ud;return n?e.then(this?n.bind(this):n):e}function bm(n){let e=ei+1,t=xn.length;for(;e<t;){const i=e+t>>>1,s=xn[i],r=Xr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function ru(n){if(!(n.flags&1)){const e=Xr(n),t=xn[xn.length-1];!t||!(n.flags&2)&&e>=Xr(t)?xn.push(n):xn.splice(bm(e),0,n),n.flags|=1,hd()}}function hd(){aa||(aa=ud.then(dd))}function Em(n){ut(n)?Zs.push(...n):Gi&&n.id===-1?Gi.splice(Hs+1,0,n):n.flags&1||(Zs.push(n),n.flags|=1),hd()}function Bu(n,e,t=ei+1){for(;t<xn.length;t++){const i=xn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;xn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function fd(n){if(Zs.length){const e=[...new Set(Zs)].sort((t,i)=>Xr(t)-Xr(i));if(Zs.length=0,Gi){Gi.push(...e);return}for(Gi=e,Hs=0;Hs<Gi.length;Hs++){const t=Gi[Hs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Gi=null,Hs=0}}const Xr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function dd(n){try{for(ei=0;ei<xn.length;ei++){const e=xn[ei];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),eo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ei<xn.length;ei++){const e=xn[ei];e&&(e.flags&=-2)}ei=-1,xn.length=0,fd(),aa=null,(xn.length||Zs.length)&&dd()}}let Dn=null,pd=null;function la(n){const e=Dn;return Dn=n,pd=n&&n.type.__scopeId||null,e}function Tm(n,e=Dn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Ku(-1);const r=la(e);let o;try{o=n(...s)}finally{la(r),i._d&&Ku(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Am(n,e){if(Dn===null)return n;const t=Da(Dn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=Ut]=e[s];r&&(ct(r)&&(r={mounted:r,updated:r}),r.deep&&bi(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function es(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(wi(),li(l,t,8,[n.el,a,n,e]),Ri())}}function wm(n,e){if(un){let t=un.provides;const i=un.parent&&un.parent.provides;i===t&&(t=un.provides=Object.create(i)),t[n]=e}}function $o(n,e,t=!1){const i=wg();if(i||Js){let s=Js?Js._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ct(e)?e.call(i&&i.proxy):e}}const Rm=Symbol.for("v-scx"),Cm=()=>$o(Rm);function Zo(n,e,t){return md(n,e,t)}function md(n,e,t=Ut){const{immediate:i,deep:s,flush:r,once:o}=t,a=dn({},t),l=e&&i||!e&&r!=="post";let c;if(jr){if(r==="sync"){const p=Cm();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=ri,p.resume=ri,p.pause=ri,p}}const u=un;a.call=(p,_,M)=>li(p,u,_,M);let h=!1;r==="post"?a.scheduler=p=>{Cn(p,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(p,_)=>{_?p():ru(p)}),a.augmentJob=p=>{e&&(p.flags|=4),h&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const f=Mm(n,e,a);return jr&&(c?c.push(f):l&&f()),f}function Pm(n,e,t){const i=this.proxy,s=Xt(n)?n.includes(".")?gd(i,n):()=>i[n]:n.bind(i,i);let r;ct(e)?r=e:(r=e.handler,t=e);const o=no(this),a=md(s,r.bind(i),t);return o(),a}function gd(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Dm=Symbol("_vte"),Lm=n=>n.__isTeleport,Nm=Symbol("_leaveCb");function ou(n,e){n.shapeFlag&6&&n.component?(n.transition=e,ou(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function to(n,e){return ct(n)?dn({name:n.name},e,{setup:n}):n}function _d(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const ca=new WeakMap;function Or(n,e,t,i,s=!1){if(ut(n)){n.forEach((_,M)=>Or(_,e&&(ut(e)?e[M]:e),t,i,s));return}if(Br(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Or(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Da(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Ut?a.refs={}:a.refs,h=a.setupState,f=Ct(h),p=h===Ut?Vf:_=>Pt(f,_);if(c!=null&&c!==l){if(ku(e),Xt(c))u[c]=null,p(c)&&(h[c]=null);else if(hn(c)){c.value=null;const _=e;_.k&&(u[_.k]=null)}}if(ct(l))eo(l,a,12,[o,u]);else{const _=Xt(l),M=hn(l);if(_||M){const m=()=>{if(n.f){const d=_?p(l)?h[l]:u[l]:l.value;if(s)ut(d)&&jc(d,r);else if(ut(d))d.includes(r)||d.push(r);else if(_)u[l]=[r],p(l)&&(h[l]=u[l]);else{const R=[r];l.value=R,n.k&&(u[n.k]=R)}}else _?(u[l]=o,p(l)&&(h[l]=o)):M&&(l.value=o,n.k&&(u[n.k]=o))};if(o){const d=()=>{m(),ca.delete(n)};d.id=-1,ca.set(n,d),Cn(d,t)}else ku(n),m()}}}function ku(n){const e=ca.get(n);e&&(e.flags|=8,ca.delete(n))}Ea().requestIdleCallback;Ea().cancelIdleCallback;const Br=n=>!!n.type.__asyncLoader,xd=n=>n.type.__isKeepAlive;function Im(n,e){vd(n,"a",e)}function Um(n,e){vd(n,"da",e)}function vd(n,e,t=un){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ra(e,i,t),t){let s=t.parent;for(;s&&s.parent;)xd(s.parent.vnode)&&Fm(i,e,t,s),s=s.parent}}function Fm(n,e,t,i){const s=Ra(e,n,i,!0);Md(()=>{jc(i[e],s)},t)}function Ra(n,e,t=un,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{wi();const a=no(t),l=li(e,t,n,o);return a(),Ri(),l});return i?s.unshift(r):s.push(r),r}}const Ni=n=>(e,t=un)=>{(!jr||n==="sp")&&Ra(n,(...i)=>e(...i),t)},Om=Ni("bm"),au=Ni("m"),Bm=Ni("bu"),km=Ni("u"),lu=Ni("bum"),Md=Ni("um"),Vm=Ni("sp"),zm=Ni("rtg"),Hm=Ni("rtc");function Gm(n,e=un){Ra("ec",n,e)}const Wm="components";function Xm(n,e){return jm(Wm,n,!0,e)||n}const qm=Symbol.for("v-ndc");function jm(n,e,t=!0,i=!1){const s=Dn||un;if(s){const r=s.type;{const a=Lg(r,!1);if(a&&(a===e||a===zn(e)||a===ba(zn(e))))return r}const o=Vu(s[n]||r[n],e)||Vu(s.appContext[n],e);return!o&&i?r:o}}function Vu(n,e){return n&&(n[e]||n[zn(e)]||n[ba(zn(e))])}function yd(n,e,t,i){let s;const r=t,o=ut(n);if(o||Xt(n)){const a=o&&ms(n);let l=!1,c=!1;a&&(l=!kn(n),c=Ci(n),n=Aa(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=e(l?c?sr(Kn(n[u])):Kn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(Vt(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const Xl=n=>n?Hd(n)?Da(n):Xl(n.parent):null,kr=dn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Xl(n.parent),$root:n=>Xl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>bd(n),$forceUpdate:n=>n.f||(n.f=()=>{ru(n.update)}),$nextTick:n=>n.n||(n.n=Sm.bind(n.proxy)),$watch:n=>Pm.bind(n)}),Za=(n,e)=>n!==Ut&&!n.__isScriptSetup&&Pt(n,e),Ym={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Za(i,e))return o[e]=1,i[e];if(s!==Ut&&Pt(s,e))return o[e]=2,s[e];if(Pt(r,e))return o[e]=3,r[e];if(t!==Ut&&Pt(t,e))return o[e]=4,t[e];ql&&(o[e]=0)}}const c=kr[e];let u,h;if(c)return e==="$attrs"&&ln(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==Ut&&Pt(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Pt(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Za(s,e)?(s[e]=t,!0):i!==Ut&&Pt(i,e)?(i[e]=t,!0):Pt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==Ut&&a[0]!=="$"&&Pt(n,a)||Za(e,a)||Pt(r,a)||Pt(i,a)||Pt(kr,a)||Pt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Pt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function zu(n){return ut(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ql=!0;function Km(n){const e=bd(n),t=n.proxy,i=n.ctx;ql=!1,e.beforeCreate&&Hu(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:_,activated:M,deactivated:m,beforeDestroy:d,beforeUnmount:R,destroyed:D,unmounted:E,render:S,renderTracked:L,renderTriggered:N,errorCaptured:F,serverPrefetch:v,expose:b,inheritAttrs:I,components:B,directives:k,filters:K}=e;if(c&&$m(c,i,null),o)for(const W in o){const Y=o[W];ct(Y)&&(i[W]=Y.bind(t))}if(s){const W=s.call(t,t);Vt(W)&&(n.data=nu(W))}if(ql=!0,r)for(const W in r){const Y=r[W],pe=ct(Y)?Y.bind(t,t):ct(Y.get)?Y.get.bind(t,t):ri,ge=!ct(Y)&&ct(Y.set)?Y.set.bind(t):ri,me=or({get:pe,set:ge});Object.defineProperty(i,W,{enumerable:!0,configurable:!0,get:()=>me.value,set:Le=>me.value=Le})}if(a)for(const W in a)Sd(a[W],i,t,W);if(l){const W=ct(l)?l.call(t):l;Reflect.ownKeys(W).forEach(Y=>{wm(Y,W[Y])})}u&&Hu(u,n,"c");function V(W,Y){ut(Y)?Y.forEach(pe=>W(pe.bind(t))):Y&&W(Y.bind(t))}if(V(Om,h),V(au,f),V(Bm,p),V(km,_),V(Im,M),V(Um,m),V(Gm,F),V(Hm,L),V(zm,N),V(lu,R),V(Md,E),V(Vm,v),ut(b))if(b.length){const W=n.exposed||(n.exposed={});b.forEach(Y=>{Object.defineProperty(W,Y,{get:()=>t[Y],set:pe=>t[Y]=pe,enumerable:!0})})}else n.exposed||(n.exposed={});S&&n.render===ri&&(n.render=S),I!=null&&(n.inheritAttrs=I),B&&(n.components=B),k&&(n.directives=k),v&&_d(n)}function $m(n,e,t=ri){ut(n)&&(n=jl(n));for(const i in n){const s=n[i];let r;Vt(s)?"default"in s?r=$o(s.from||i,s.default,!0):r=$o(s.from||i):r=$o(s),hn(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Hu(n,e,t){li(ut(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Sd(n,e,t,i){let s=i.includes(".")?gd(t,i):()=>t[i];if(Xt(n)){const r=e[n];ct(r)&&Zo(s,r)}else if(ct(n))Zo(s,n.bind(t));else if(Vt(n))if(ut(n))n.forEach(r=>Sd(r,e,t,i));else{const r=ct(n.handler)?n.handler.bind(t):e[n.handler];ct(r)&&Zo(s,r,n)}}function bd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>ua(l,c,o,!0)),ua(l,e,o)),Vt(e)&&r.set(e,l),l}function ua(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&ua(n,r,t,!0),s&&s.forEach(o=>ua(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Zm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Zm={data:Gu,props:Wu,emits:Wu,methods:Dr,computed:Dr,beforeCreate:mn,created:mn,beforeMount:mn,mounted:mn,beforeUpdate:mn,updated:mn,beforeDestroy:mn,beforeUnmount:mn,destroyed:mn,unmounted:mn,activated:mn,deactivated:mn,errorCaptured:mn,serverPrefetch:mn,components:Dr,directives:Dr,watch:Qm,provide:Gu,inject:Jm};function Gu(n,e){return e?n?function(){return dn(ct(n)?n.call(this,this):n,ct(e)?e.call(this,this):e)}:e:n}function Jm(n,e){return Dr(jl(n),jl(e))}function jl(n){if(ut(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function mn(n,e){return n?[...new Set([].concat(n,e))]:e}function Dr(n,e){return n?dn(Object.create(null),n,e):e}function Wu(n,e){return n?ut(n)&&ut(e)?[...new Set([...n,...e])]:dn(Object.create(null),zu(n),zu(e??{})):e}function Qm(n,e){if(!n)return e;if(!e)return n;const t=dn(Object.create(null),n);for(const i in e)t[i]=mn(n[i],e[i]);return t}function Ed(){return{app:null,config:{isNativeTag:Vf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let eg=0;function tg(n,e){return function(i,s=null){ct(i)||(i=dn({},i)),s!=null&&!Vt(s)&&(s=null);const r=Ed(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:eg++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Ig,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&ct(u.install)?(o.add(u),u.install(c,...h)):ct(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const p=c._ceVNode||Vn(i,s);return p.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(p,u,f),l=!0,c._container=u,u.__vue_app__=c,Da(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(li(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Js;Js=c;try{return u()}finally{Js=h}}};return c}}let Js=null;const ng=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${zn(e)}Modifiers`]||n[`${Ji(e)}Modifiers`];function ig(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Ut;let s=t;const r=e.startsWith("update:"),o=r&&ng(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Xt(u)?u.trim():u)),o.number&&(s=t.map(Kc)));let a,l=i[a=qa(e)]||i[a=qa(zn(e))];!l&&r&&(l=i[a=qa(Ji(e))]),l&&li(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,li(c,n,6,s)}}const sg=new WeakMap;function Td(n,e,t=!1){const i=t?sg:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!ct(n)){const l=c=>{const u=Td(c,e,!0);u&&(a=!0,dn(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(Vt(n)&&i.set(n,null),null):(ut(r)?r.forEach(l=>o[l]=null):dn(o,r),Vt(n)&&i.set(n,o),o)}function Ca(n,e){return!n||!Ma(e)?!1:(e=e.slice(2).replace(/Once$/,""),Pt(n,e[0].toLowerCase()+e.slice(1))||Pt(n,Ji(e))||Pt(n,e))}function Xu(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:p,ctx:_,inheritAttrs:M}=n,m=la(n);let d,R;try{if(t.shapeFlag&4){const E=s||i,S=E;d=ti(c.call(S,E,u,h,p,f,_)),R=a}else{const E=e;d=ti(E.length>1?E(h,{attrs:a,slots:o,emit:l}):E(h,null)),R=e.props?a:rg(a)}}catch(E){Vr.length=0,wa(E,n,1),d=Vn(Ki)}let D=d;if(R&&M!==!1){const E=Object.keys(R),{shapeFlag:S}=D;E.length&&S&7&&(r&&E.some(qc)&&(R=og(R,r)),D=rr(D,R,!1,!0))}return t.dirs&&(D=rr(D,null,!1,!0),D.dirs=D.dirs?D.dirs.concat(t.dirs):t.dirs),t.transition&&ou(D,t.transition),d=D,la(m),d}const rg=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ma(t))&&((e||(e={}))[t]=n[t]);return e},og=(n,e)=>{const t={};for(const i in n)(!qc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function ag(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?qu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!Ca(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?qu(i,o,c):!0:!!o;return!1}function qu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!Ca(t,r))return!0}return!1}function lg({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Ad={},wd=()=>Object.create(Ad),Rd=n=>Object.getPrototypeOf(n)===Ad;function cg(n,e,t,i=!1){const s={},r=wd();n.propsDefaults=Object.create(null),Cd(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:hm(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function ug(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=Ct(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Ca(n.emitsOptions,f))continue;const p=e[f];if(l)if(Pt(r,f))p!==r[f]&&(r[f]=p,c=!0);else{const _=zn(f);s[_]=Yl(l,a,_,p,n,!1)}else p!==r[f]&&(r[f]=p,c=!0)}}}else{Cd(n,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!Pt(e,h)&&((u=Ji(h))===h||!Pt(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=Yl(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!Pt(e,h))&&(delete r[h],c=!0)}c&&Si(n.attrs,"set","")}function Cd(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ir(l))continue;const c=e[l];let u;s&&Pt(s,u=zn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:Ca(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Ct(t),c=a||Ut;for(let u=0;u<r.length;u++){const h=r[u];t[h]=Yl(s,l,h,c[h],n,!Pt(c,h))}}return o}function Yl(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=Pt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ct(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=no(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ji(t))&&(i=!0))}return i}const hg=new WeakMap;function Pd(n,e,t=!1){const i=t?hg:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!ct(n)){const u=h=>{l=!0;const[f,p]=Pd(h,e,!0);dn(o,f),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return Vt(n)&&i.set(n,Ys),Ys;if(ut(r))for(let u=0;u<r.length;u++){const h=zn(r[u]);ju(h)&&(o[h]=Ut)}else if(r)for(const u in r){const h=zn(u);if(ju(h)){const f=r[u],p=o[h]=ut(f)||ct(f)?{type:f}:dn({},f),_=p.type;let M=!1,m=!0;if(ut(_))for(let d=0;d<_.length;++d){const R=_[d],D=ct(R)&&R.name;if(D==="Boolean"){M=!0;break}else D==="String"&&(m=!1)}else M=ct(_)&&_.name==="Boolean";p[0]=M,p[1]=m,(M||Pt(p,"default"))&&a.push(h)}}const c=[o,a];return Vt(n)&&i.set(n,c),c}function ju(n){return n[0]!=="$"&&!Ir(n)}const cu=n=>n==="_"||n==="_ctx"||n==="$stable",uu=n=>ut(n)?n.map(ti):[ti(n)],fg=(n,e,t)=>{if(e._n)return e;const i=Tm((...s)=>uu(e(...s)),t);return i._c=!1,i},Dd=(n,e,t)=>{const i=n._ctx;for(const s in n){if(cu(s))continue;const r=n[s];if(ct(r))e[s]=fg(s,r,i);else if(r!=null){const o=uu(r);e[s]=()=>o}}},Ld=(n,e)=>{const t=uu(e);n.slots.default=()=>t},Nd=(n,e,t)=>{for(const i in e)(t||!cu(i))&&(n[i]=e[i])},dg=(n,e,t)=>{const i=n.slots=wd();if(n.vnode.shapeFlag&32){const s=e._;s?(Nd(i,e,t),t&&Xf(i,"_",s,!0)):Dd(e,i)}else e&&Ld(n,e)},pg=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=Ut;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Nd(s,e,t):(r=!e.$stable,Dd(e,s)),o=e}else e&&(Ld(n,e),o={default:1});if(r)for(const a in s)!cu(a)&&o[a]==null&&delete s[a]},Cn=vg;function mg(n){return gg(n)}function gg(n,e){const t=Ea();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=ri,insertStaticContent:_}=n,M=(O,H,Q,le=null,se=null,ce=null,U=void 0,_e=null,he=!!H.dynamicChildren)=>{if(O===H)return;O&&!br(O,H)&&(le=te(O),Le(O,se,ce,!0),O=null),H.patchFlag===-2&&(he=!1,H.dynamicChildren=null);const{type:ae,ref:fe,shapeFlag:A}=H;switch(ae){case Pa:m(O,H,Q,le);break;case Ki:d(O,H,Q,le);break;case Qa:O==null&&R(H,Q,le,U);break;case Fn:B(O,H,Q,le,se,ce,U,_e,he);break;default:A&1?S(O,H,Q,le,se,ce,U,_e,he):A&6?k(O,H,Q,le,se,ce,U,_e,he):(A&64||A&128)&&ae.process(O,H,Q,le,se,ce,U,_e,he,Oe)}fe!=null&&se?Or(fe,O&&O.ref,ce,H||O,!H):fe==null&&O&&O.ref!=null&&Or(O.ref,null,ce,O,!0)},m=(O,H,Q,le)=>{if(O==null)i(H.el=a(H.children),Q,le);else{const se=H.el=O.el;H.children!==O.children&&c(se,H.children)}},d=(O,H,Q,le)=>{O==null?i(H.el=l(H.children||""),Q,le):H.el=O.el},R=(O,H,Q,le)=>{[O.el,O.anchor]=_(O.children,H,Q,le,O.el,O.anchor)},D=({el:O,anchor:H},Q,le)=>{let se;for(;O&&O!==H;)se=f(O),i(O,Q,le),O=se;i(H,Q,le)},E=({el:O,anchor:H})=>{let Q;for(;O&&O!==H;)Q=f(O),s(O),O=Q;s(H)},S=(O,H,Q,le,se,ce,U,_e,he)=>{if(H.type==="svg"?U="svg":H.type==="math"&&(U="mathml"),O==null)L(H,Q,le,se,ce,U,_e,he);else{const ae=O.el&&O.el._isVueCE?O.el:null;try{ae&&ae._beginPatch(),v(O,H,se,ce,U,_e,he)}finally{ae&&ae._endPatch()}}},L=(O,H,Q,le,se,ce,U,_e)=>{let he,ae;const{props:fe,shapeFlag:A,transition:g,dirs:z}=O;if(he=O.el=o(O.type,ce,fe&&fe.is,fe),A&8?u(he,O.children):A&16&&F(O.children,he,null,le,se,Ja(O,ce),U,_e),z&&es(O,null,le,"created"),N(he,O,O.scopeId,U,le),fe){for(const oe in fe)oe!=="value"&&!Ir(oe)&&r(he,oe,null,fe[oe],ce,le);"value"in fe&&r(he,"value",null,fe.value,ce),(ae=fe.onVnodeBeforeMount)&&Jn(ae,le,O)}z&&es(O,null,le,"beforeMount");const ee=_g(se,g);ee&&g.beforeEnter(he),i(he,H,Q),((ae=fe&&fe.onVnodeMounted)||ee||z)&&Cn(()=>{ae&&Jn(ae,le,O),ee&&g.enter(he),z&&es(O,null,le,"mounted")},se)},N=(O,H,Q,le,se)=>{if(Q&&p(O,Q),le)for(let ce=0;ce<le.length;ce++)p(O,le[ce]);if(se){let ce=se.subTree;if(H===ce||Od(ce.type)&&(ce.ssContent===H||ce.ssFallback===H)){const U=se.vnode;N(O,U,U.scopeId,U.slotScopeIds,se.parent)}}},F=(O,H,Q,le,se,ce,U,_e,he=0)=>{for(let ae=he;ae<O.length;ae++){const fe=O[ae]=_e?Wi(O[ae]):ti(O[ae]);M(null,fe,H,Q,le,se,ce,U,_e)}},v=(O,H,Q,le,se,ce,U)=>{const _e=H.el=O.el;let{patchFlag:he,dynamicChildren:ae,dirs:fe}=H;he|=O.patchFlag&16;const A=O.props||Ut,g=H.props||Ut;let z;if(Q&&ts(Q,!1),(z=g.onVnodeBeforeUpdate)&&Jn(z,Q,H,O),fe&&es(H,O,Q,"beforeUpdate"),Q&&ts(Q,!0),(A.innerHTML&&g.innerHTML==null||A.textContent&&g.textContent==null)&&u(_e,""),ae?b(O.dynamicChildren,ae,_e,Q,le,Ja(H,se),ce):U||Y(O,H,_e,null,Q,le,Ja(H,se),ce,!1),he>0){if(he&16)I(_e,A,g,Q,se);else if(he&2&&A.class!==g.class&&r(_e,"class",null,g.class,se),he&4&&r(_e,"style",A.style,g.style,se),he&8){const ee=H.dynamicProps;for(let oe=0;oe<ee.length;oe++){const J=ee[oe],Ie=A[J],Me=g[J];(Me!==Ie||J==="value")&&r(_e,J,Ie,Me,se,Q)}}he&1&&O.children!==H.children&&u(_e,H.children)}else!U&&ae==null&&I(_e,A,g,Q,se);((z=g.onVnodeUpdated)||fe)&&Cn(()=>{z&&Jn(z,Q,H,O),fe&&es(H,O,Q,"updated")},le)},b=(O,H,Q,le,se,ce,U)=>{for(let _e=0;_e<H.length;_e++){const he=O[_e],ae=H[_e],fe=he.el&&(he.type===Fn||!br(he,ae)||he.shapeFlag&198)?h(he.el):Q;M(he,ae,fe,null,le,se,ce,U,!0)}},I=(O,H,Q,le,se)=>{if(H!==Q){if(H!==Ut)for(const ce in H)!Ir(ce)&&!(ce in Q)&&r(O,ce,H[ce],null,se,le);for(const ce in Q){if(Ir(ce))continue;const U=Q[ce],_e=H[ce];U!==_e&&ce!=="value"&&r(O,ce,_e,U,se,le)}"value"in Q&&r(O,"value",H.value,Q.value,se)}},B=(O,H,Q,le,se,ce,U,_e,he)=>{const ae=H.el=O?O.el:a(""),fe=H.anchor=O?O.anchor:a("");let{patchFlag:A,dynamicChildren:g,slotScopeIds:z}=H;z&&(_e=_e?_e.concat(z):z),O==null?(i(ae,Q,le),i(fe,Q,le),F(H.children||[],Q,fe,se,ce,U,_e,he)):A>0&&A&64&&g&&O.dynamicChildren&&O.dynamicChildren.length===g.length?(b(O.dynamicChildren,g,Q,se,ce,U,_e),(H.key!=null||se&&H===se.subTree)&&Id(O,H,!0)):Y(O,H,Q,fe,se,ce,U,_e,he)},k=(O,H,Q,le,se,ce,U,_e,he)=>{H.slotScopeIds=_e,O==null?H.shapeFlag&512?se.ctx.activate(H,Q,le,U,he):K(H,Q,le,se,ce,U,he):$(O,H,he)},K=(O,H,Q,le,se,ce,U)=>{const _e=O.component=Ag(O,le,se);if(xd(O)&&(_e.ctx.renderer=Oe),Rg(_e,!1,U),_e.asyncDep){if(se&&se.registerDep(_e,V,U),!O.el){const he=_e.subTree=Vn(Ki);d(null,he,H,Q),O.placeholder=he.el}}else V(_e,O,H,Q,se,ce,U)},$=(O,H,Q)=>{const le=H.component=O.component;if(ag(O,H,Q))if(le.asyncDep&&!le.asyncResolved){W(le,H,Q);return}else le.next=H,le.update();else H.el=O.el,le.vnode=H},V=(O,H,Q,le,se,ce,U)=>{const _e=()=>{if(O.isMounted){let{next:A,bu:g,u:z,parent:ee,vnode:oe}=O;{const Ke=Ud(O);if(Ke){A&&(A.el=oe.el,W(O,A,U)),Ke.asyncDep.then(()=>{O.isUnmounted||_e()});return}}let J=A,Ie;ts(O,!1),A?(A.el=oe.el,W(O,A,U)):A=oe,g&&Ko(g),(Ie=A.props&&A.props.onVnodeBeforeUpdate)&&Jn(Ie,ee,A,oe),ts(O,!0);const Me=Xu(O),Be=O.subTree;O.subTree=Me,M(Be,Me,h(Be.el),te(Be),O,se,ce),A.el=Me.el,J===null&&lg(O,Me.el),z&&Cn(z,se),(Ie=A.props&&A.props.onVnodeUpdated)&&Cn(()=>Jn(Ie,ee,A,oe),se)}else{let A;const{el:g,props:z}=H,{bm:ee,m:oe,parent:J,root:Ie,type:Me}=O,Be=Br(H);ts(O,!1),ee&&Ko(ee),!Be&&(A=z&&z.onVnodeBeforeMount)&&Jn(A,J,H),ts(O,!0);{Ie.ce&&Ie.ce._def.shadowRoot!==!1&&Ie.ce._injectChildStyle(Me);const Ke=O.subTree=Xu(O);M(null,Ke,Q,le,O,se,ce),H.el=Ke.el}if(oe&&Cn(oe,se),!Be&&(A=z&&z.onVnodeMounted)){const Ke=H;Cn(()=>Jn(A,J,Ke),se)}(H.shapeFlag&256||J&&Br(J.vnode)&&J.vnode.shapeFlag&256)&&O.a&&Cn(O.a,se),O.isMounted=!0,H=Q=le=null}};O.scope.on();const he=O.effect=new Kf(_e);O.scope.off();const ae=O.update=he.run.bind(he),fe=O.job=he.runIfDirty.bind(he);fe.i=O,fe.id=O.uid,he.scheduler=()=>ru(fe),ts(O,!0),ae()},W=(O,H,Q)=>{H.component=O;const le=O.vnode.props;O.vnode=H,O.next=null,ug(O,H.props,le,Q),pg(O,H.children,Q),wi(),Bu(O),Ri()},Y=(O,H,Q,le,se,ce,U,_e,he=!1)=>{const ae=O&&O.children,fe=O?O.shapeFlag:0,A=H.children,{patchFlag:g,shapeFlag:z}=H;if(g>0){if(g&128){ge(ae,A,Q,le,se,ce,U,_e,he);return}else if(g&256){pe(ae,A,Q,le,se,ce,U,_e,he);return}}z&8?(fe&16&&q(ae,se,ce),A!==ae&&u(Q,A)):fe&16?z&16?ge(ae,A,Q,le,se,ce,U,_e,he):q(ae,se,ce,!0):(fe&8&&u(Q,""),z&16&&F(A,Q,le,se,ce,U,_e,he))},pe=(O,H,Q,le,se,ce,U,_e,he)=>{O=O||Ys,H=H||Ys;const ae=O.length,fe=H.length,A=Math.min(ae,fe);let g;for(g=0;g<A;g++){const z=H[g]=he?Wi(H[g]):ti(H[g]);M(O[g],z,Q,null,se,ce,U,_e,he)}ae>fe?q(O,se,ce,!0,!1,A):F(H,Q,le,se,ce,U,_e,he,A)},ge=(O,H,Q,le,se,ce,U,_e,he)=>{let ae=0;const fe=H.length;let A=O.length-1,g=fe-1;for(;ae<=A&&ae<=g;){const z=O[ae],ee=H[ae]=he?Wi(H[ae]):ti(H[ae]);if(br(z,ee))M(z,ee,Q,null,se,ce,U,_e,he);else break;ae++}for(;ae<=A&&ae<=g;){const z=O[A],ee=H[g]=he?Wi(H[g]):ti(H[g]);if(br(z,ee))M(z,ee,Q,null,se,ce,U,_e,he);else break;A--,g--}if(ae>A){if(ae<=g){const z=g+1,ee=z<fe?H[z].el:le;for(;ae<=g;)M(null,H[ae]=he?Wi(H[ae]):ti(H[ae]),Q,ee,se,ce,U,_e,he),ae++}}else if(ae>g)for(;ae<=A;)Le(O[ae],se,ce,!0),ae++;else{const z=ae,ee=ae,oe=new Map;for(ae=ee;ae<=g;ae++){const Pe=H[ae]=he?Wi(H[ae]):ti(H[ae]);Pe.key!=null&&oe.set(Pe.key,ae)}let J,Ie=0;const Me=g-ee+1;let Be=!1,Ke=0;const xe=new Array(Me);for(ae=0;ae<Me;ae++)xe[ae]=0;for(ae=z;ae<=A;ae++){const Pe=O[ae];if(Ie>=Me){Le(Pe,se,ce,!0);continue}let Ve;if(Pe.key!=null)Ve=oe.get(Pe.key);else for(J=ee;J<=g;J++)if(xe[J-ee]===0&&br(Pe,H[J])){Ve=J;break}Ve===void 0?Le(Pe,se,ce,!0):(xe[Ve-ee]=ae+1,Ve>=Ke?Ke=Ve:Be=!0,M(Pe,H[Ve],Q,null,se,ce,U,_e,he),Ie++)}const Ae=Be?xg(xe):Ys;for(J=Ae.length-1,ae=Me-1;ae>=0;ae--){const Pe=ee+ae,Ve=H[Pe],Te=H[Pe+1],at=Pe+1<fe?Te.el||Fd(Te):le;xe[ae]===0?M(null,Ve,Q,at,se,ce,U,_e,he):Be&&(J<0||ae!==Ae[J]?me(Ve,Q,at,2):J--)}}},me=(O,H,Q,le,se=null)=>{const{el:ce,type:U,transition:_e,children:he,shapeFlag:ae}=O;if(ae&6){me(O.component.subTree,H,Q,le);return}if(ae&128){O.suspense.move(H,Q,le);return}if(ae&64){U.move(O,H,Q,Oe);return}if(U===Fn){i(ce,H,Q);for(let A=0;A<he.length;A++)me(he[A],H,Q,le);i(O.anchor,H,Q);return}if(U===Qa){D(O,H,Q);return}if(le!==2&&ae&1&&_e)if(le===0)_e.beforeEnter(ce),i(ce,H,Q),Cn(()=>_e.enter(ce),se);else{const{leave:A,delayLeave:g,afterLeave:z}=_e,ee=()=>{O.ctx.isUnmounted?s(ce):i(ce,H,Q)},oe=()=>{ce._isLeaving&&ce[Nm](!0),A(ce,()=>{ee(),z&&z()})};g?g(ce,ee,oe):oe()}else i(ce,H,Q)},Le=(O,H,Q,le=!1,se=!1)=>{const{type:ce,props:U,ref:_e,children:he,dynamicChildren:ae,shapeFlag:fe,patchFlag:A,dirs:g,cacheIndex:z}=O;if(A===-2&&(se=!1),_e!=null&&(wi(),Or(_e,null,Q,O,!0),Ri()),z!=null&&(H.renderCache[z]=void 0),fe&256){H.ctx.deactivate(O);return}const ee=fe&1&&g,oe=!Br(O);let J;if(oe&&(J=U&&U.onVnodeBeforeUnmount)&&Jn(J,H,O),fe&6)Ce(O.component,Q,le);else{if(fe&128){O.suspense.unmount(Q,le);return}ee&&es(O,null,H,"beforeUnmount"),fe&64?O.type.remove(O,H,Q,Oe,le):ae&&!ae.hasOnce&&(ce!==Fn||A>0&&A&64)?q(ae,H,Q,!1,!0):(ce===Fn&&A&384||!se&&fe&16)&&q(he,H,Q),le&&Ee(O)}(oe&&(J=U&&U.onVnodeUnmounted)||ee)&&Cn(()=>{J&&Jn(J,H,O),ee&&es(O,null,H,"unmounted")},Q)},Ee=O=>{const{type:H,el:Q,anchor:le,transition:se}=O;if(H===Fn){ke(Q,le);return}if(H===Qa){E(O);return}const ce=()=>{s(Q),se&&!se.persisted&&se.afterLeave&&se.afterLeave()};if(O.shapeFlag&1&&se&&!se.persisted){const{leave:U,delayLeave:_e}=se,he=()=>U(Q,ce);_e?_e(O.el,ce,he):he()}else ce()},ke=(O,H)=>{let Q;for(;O!==H;)Q=f(O),s(O),O=Q;s(H)},Ce=(O,H,Q)=>{const{bum:le,scope:se,job:ce,subTree:U,um:_e,m:he,a:ae}=O;Yu(he),Yu(ae),le&&Ko(le),se.stop(),ce&&(ce.flags|=8,Le(U,O,H,Q)),_e&&Cn(_e,H),Cn(()=>{O.isUnmounted=!0},H)},q=(O,H,Q,le=!1,se=!1,ce=0)=>{for(let U=ce;U<O.length;U++)Le(O[U],H,Q,le,se)},te=O=>{if(O.shapeFlag&6)return te(O.component.subTree);if(O.shapeFlag&128)return O.suspense.next();const H=f(O.anchor||O.el),Q=H&&H[Dm];return Q?f(Q):H};let Se=!1;const Qe=(O,H,Q)=>{let le;O==null?H._vnode&&(Le(H._vnode,null,null,!0),le=H._vnode.component):M(H._vnode||null,O,H,null,null,null,Q),H._vnode=O,Se||(Se=!0,Bu(le),fd(),Se=!1)},Oe={p:M,um:Le,m:me,r:Ee,mt:K,mc:F,pc:Y,pbc:b,n:te,o:n};return{render:Qe,hydrate:void 0,createApp:tg(Qe)}}function Ja({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ts({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function _g(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Id(n,e,t=!1){const i=n.children,s=e.children;if(ut(i)&&ut(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Wi(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Id(o,a)),a.type===Pa&&(a.patchFlag!==-1?a.el=o.el:a.__elIndex=r+(n.type===Fn?1:0)),a.type===Ki&&!a.el&&(a.el=o.el)}}function xg(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Ud(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ud(e)}function Yu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Fd(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Fd(e.subTree):null}const Od=n=>n.__isSuspense;function vg(n,e){e&&e.pendingBranch?ut(n)?e.effects.push(...n):e.effects.push(n):Em(n)}const Fn=Symbol.for("v-fgt"),Pa=Symbol.for("v-txt"),Ki=Symbol.for("v-cmt"),Qa=Symbol.for("v-stc"),Vr=[];let Ln=null;function Jt(n=!1){Vr.push(Ln=n?null:[])}function Mg(){Vr.pop(),Ln=Vr[Vr.length-1]||null}let qr=1;function Ku(n,e=!1){qr+=n,n<0&&Ln&&e&&(Ln.hasOnce=!0)}function Bd(n){return n.dynamicChildren=qr>0?Ln||Ys:null,Mg(),qr>0&&Ln&&Ln.push(n),n}function vn(n,e,t,i,s,r){return Bd(Mt(n,e,t,i,s,r,!0))}function hu(n,e,t,i,s){return Bd(Vn(n,e,t,i,s,!0))}function kd(n){return n?n.__v_isVNode===!0:!1}function br(n,e){return n.type===e.type&&n.key===e.key}const Vd=({key:n})=>n??null,Jo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Xt(n)||hn(n)||ct(n)?{i:Dn,r:n,k:e,f:!!t}:n:null);function Mt(n,e=null,t=null,i=0,s=null,r=n===Fn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Vd(e),ref:e&&Jo(e),scopeId:pd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Dn};return a?(fu(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Xt(t)?8:16),qr>0&&!o&&Ln&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Ln.push(l),l}const Vn=yg;function yg(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===qm)&&(n=Ki),kd(n)){const a=rr(n,e,!0);return t&&fu(a,t),qr>0&&!r&&Ln&&(a.shapeFlag&6?Ln[Ln.indexOf(n)]=a:Ln.push(a)),a.patchFlag=-2,a}if(Ng(n)&&(n=n.__vccOpts),e){e=Sg(e);let{class:a,style:l}=e;a&&!Xt(a)&&(e.class=Ta(a)),Vt(l)&&(su(l)&&!ut(l)&&(l=dn({},l)),e.style=$c(l))}const o=Xt(n)?1:Od(n)?128:Lm(n)?64:Vt(n)?4:ct(n)?2:0;return Mt(n,e,t,i,s,o,r,!0)}function Sg(n){return n?su(n)||Rd(n)?dn({},n):n:null}function rr(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?bg(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Vd(c),ref:e&&e.ref?t&&r?ut(r)?r.concat(Jo(e)):[r,Jo(e)]:Jo(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Fn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&rr(n.ssContent),ssFallback:n.ssFallback&&rr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&ou(u,l.clone(u)),u}function zd(n=" ",e=0){return Vn(Pa,null,n,e)}function ha(n="",e=!1){return e?(Jt(),hu(Ki,null,n)):Vn(Ki,null,n)}function ti(n){return n==null||typeof n=="boolean"?Vn(Ki):ut(n)?Vn(Fn,null,n.slice()):kd(n)?Wi(n):Vn(Pa,null,String(n))}function Wi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:rr(n)}function fu(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ut(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),fu(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Rd(e)?e._ctx=Dn:s===3&&Dn&&(Dn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ct(e)?(e={default:e,_ctx:Dn},t=32):(e=String(e),i&64?(t=16,e=[zd(e)]):t=8);n.children=e,n.shapeFlag|=t}function bg(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Ta([e.class,i.class]));else if(s==="style")e.style=$c([e.style,i.style]);else if(Ma(s)){const r=e[s],o=i[s];o&&r!==o&&!(ut(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Jn(n,e,t,i=null){li(n,e,7,[t,i])}const Eg=Ed();let Tg=0;function Ag(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Eg,r={uid:Tg++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Xp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pd(i,s),emitsOptions:Td(i,s),emit:null,emitted:null,propsDefaults:Ut,inheritAttrs:i.inheritAttrs,ctx:Ut,data:Ut,props:Ut,attrs:Ut,slots:Ut,refs:Ut,setupState:Ut,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=ig.bind(null,r),n.ce&&n.ce(r),r}let un=null;const wg=()=>un||Dn;let fa,Kl;{const n=Ea(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};fa=e("__VUE_INSTANCE_SETTERS__",t=>un=t),Kl=e("__VUE_SSR_SETTERS__",t=>jr=t)}const no=n=>{const e=un;return fa(n),n.scope.on(),()=>{n.scope.off(),fa(e)}},$u=()=>{un&&un.scope.off(),fa(null)};function Hd(n){return n.vnode.shapeFlag&4}let jr=!1;function Rg(n,e=!1,t=!1){e&&Kl(e);const{props:i,children:s}=n.vnode,r=Hd(n);cg(n,i,r,e),dg(n,s,t||e);const o=r?Cg(n,e):void 0;return e&&Kl(!1),o}function Cg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Ym);const{setup:i}=t;if(i){wi();const s=n.setupContext=i.length>1?Dg(n):null,r=no(n),o=eo(i,n,0,[n.props,s]),a=Hf(o);if(Ri(),r(),(a||n.sp)&&!Br(n)&&_d(n),a){if(o.then($u,$u),e)return o.then(l=>{Zu(n,l)}).catch(l=>{wa(l,n,0)});n.asyncDep=o}else Zu(n,o)}else Gd(n)}function Zu(n,e,t){ct(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Vt(e)&&(n.setupState=cd(e)),Gd(n)}function Gd(n,e,t){const i=n.type;n.render||(n.render=i.render||ri);{const s=no(n);wi();try{Km(n)}finally{Ri(),s()}}}const Pg={get(n,e){return ln(n,"get",""),n[e]}};function Dg(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Pg),slots:n.slots,emit:n.emit,expose:e}}function Da(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(cd(fm(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in kr)return kr[t](n)},has(e,t){return t in e||t in kr}})):n.proxy}function Lg(n,e=!0){return ct(n)?n.displayName||n.name:n.name||e&&n.__name}function Ng(n){return ct(n)&&"__vccOpts"in n}const or=(n,e)=>xm(n,e,jr),Ig="3.5.26";let $l;const Ju=typeof window<"u"&&window.trustedTypes;if(Ju)try{$l=Ju.createPolicy("vue",{createHTML:n=>n})}catch{}const Wd=$l?n=>$l.createHTML(n):n=>n,Ug="http://www.w3.org/2000/svg",Fg="http://www.w3.org/1998/Math/MathML",yi=typeof document<"u"?document:null,Qu=yi&&yi.createElement("template"),Og={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?yi.createElementNS(Ug,n):e==="mathml"?yi.createElementNS(Fg,n):t?yi.createElement(n,{is:t}):yi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>yi.createTextNode(n),createComment:n=>yi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>yi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Qu.innerHTML=Wd(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Qu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Bg=Symbol("_vtc");function kg(n,e,t){const i=n[Bg];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const eh=Symbol("_vod"),Vg=Symbol("_vsh"),zg=Symbol(""),Hg=/(?:^|;)\s*display\s*:/;function Gg(n,e,t){const i=n.style,s=Xt(t);let r=!1;if(t&&!s){if(e)if(Xt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Qo(i,a,"")}else for(const o in e)t[o]==null&&Qo(i,o,"");for(const o in t)o==="display"&&(r=!0),Qo(i,o,t[o])}else if(s){if(e!==t){const o=i[zg];o&&(t+=";"+o),i.cssText=t,r=Hg.test(t)}}else e&&n.removeAttribute("style");eh in n&&(n[eh]=r?i.display:"",n[Vg]&&(i.display="none"))}const th=/\s*!important$/;function Qo(n,e,t){if(ut(t))t.forEach(i=>Qo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Wg(n,e);th.test(t)?n.setProperty(Ji(i),t.replace(th,""),"important"):n[i]=t}}const nh=["Webkit","Moz","ms"],el={};function Wg(n,e){const t=el[e];if(t)return t;let i=zn(e);if(i!=="filter"&&i in n)return el[e]=i;i=ba(i);for(let s=0;s<nh.length;s++){const r=nh[s]+i;if(r in n)return el[e]=r}return e}const ih="http://www.w3.org/1999/xlink";function sh(n,e,t,i,s,r=Wp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(ih,e.slice(6,e.length)):n.setAttributeNS(ih,e,t):t==null||r&&!qf(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Zi(t)?String(t):t)}function rh(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Wd(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=qf(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Gs(n,e,t,i){n.addEventListener(e,t,i)}function Xg(n,e,t,i){n.removeEventListener(e,t,i)}const oh=Symbol("_vei");function qg(n,e,t,i,s=null){const r=n[oh]||(n[oh]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=jg(e);if(i){const c=r[e]=$g(i,s);Gs(n,a,c,l)}else o&&(Xg(n,a,o,l),r[e]=void 0)}}const ah=/(?:Once|Passive|Capture)$/;function jg(n){let e;if(ah.test(n)){e={};let i;for(;i=n.match(ah);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ji(n.slice(2)),e]}let tl=0;const Yg=Promise.resolve(),Kg=()=>tl||(Yg.then(()=>tl=0),tl=Date.now());function $g(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;li(Zg(i,t.value),e,5,[i])};return t.value=n,t.attached=Kg(),t}function Zg(n,e){if(ut(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const lh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Jg=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?kg(n,i,o):e==="style"?Gg(n,t,i):Ma(e)?qc(e)||qg(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Qg(n,e,i,o))?(rh(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&sh(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Xt(i))?rh(n,zn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),sh(n,e,i,o))};function Qg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&lh(e)&&ct(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return lh(e)&&Xt(t)?!1:e in n}const ch=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ut(e)?t=>Ko(e,t):e};function e_(n){n.target.composing=!0}function uh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const nl=Symbol("_assign");function hh(n,e,t){return e&&(n=n.trim()),t&&(n=Kc(n)),n}const t_={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[nl]=ch(s);const r=i||s.props&&s.props.type==="number";Gs(n,e?"change":"input",o=>{o.target.composing||n[nl](hh(n.value,t,r))}),(t||r)&&Gs(n,"change",()=>{n.value=hh(n.value,t,r)}),e||(Gs(n,"compositionstart",e_),Gs(n,"compositionend",uh),Gs(n,"change",uh))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[nl]=ch(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Kc(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l))}},n_=["ctrl","shift","alt","meta"],i_={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>n_.some(t=>n[`${t}Key`]&&!e.includes(t))},s_=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((s,...r)=>{for(let o=0;o<e.length;o++){const a=i_[e[o]];if(a&&a(s,e))return}return n(s,...r)}))},r_={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},o_=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=(s=>{if(!("key"in s))return;const r=Ji(s.key);if(e.some(o=>o===r||r_[o]===r))return n(s)}))},a_=dn({patchProp:Jg},Og);let fh;function l_(){return fh||(fh=mg(a_))}const c_=((...n)=>{const e=l_().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=h_(i);if(!s)return;const r=e._component;!ct(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,u_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function u_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function h_(n){return Xt(n)?document.querySelector(n):n}const f_={class:"tree-node"},d_={class:"node-icon"},p_={class:"node-name"},m_={class:"node-type"},g_={key:0,class:"node-children"},__=to({__name:"TreeNode",props:{node:{},selected:{}},emits:["select"],setup(n,{emit:e}){const t=n,i=e,s=or(()=>t.selected===t.node),r=()=>{i("select",t.node)},o=or(()=>{switch(t.node.type){case"robot":return"🤖";case"link":return"🔗";case"joint":return"⚙️";default:return"📦"}});return(a,l)=>{const c=Xm("TreeNode",!0);return Jt(),vn("div",f_,[Mt("div",{class:Ta(["node-label",{selected:s.value}]),onClick:r},[Mt("span",d_,$s(o.value),1),Mt("span",p_,$s(n.node.name),1),Mt("span",m_,"["+$s(n.node.type)+"]",1)],2),n.node.children&&n.node.children.length>0?(Jt(),vn("div",g_,[(Jt(!0),vn(Fn,null,yd(n.node.children,(u,h)=>(Jt(),hu(c,{key:h,node:u,selected:n.selected,onSelect:l[0]||(l[0]=f=>a.$emit("select",f))},null,8,["node","selected"]))),128))])):ha("",!0)])}}}),io=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},x_=io(__,[["__scopeId","data-v-237333de"]]),v_={class:"hierarchy-panel"},M_={class:"panel-content"},y_={key:0,class:"empty-state"},S_={key:1,class:"tree"},b_=to({__name:"HierarchyPanel",props:{root:{},selected:{}},emits:["select"],setup(n,{emit:e}){const t=n,i=e,s=or(()=>t.root!==null),r=o=>{i("select",o)};return(o,a)=>(Jt(),vn("aside",v_,[a[1]||(a[1]=Mt("div",{class:"panel-header"},[Mt("h2",null,"Hierarchy")],-1)),Mt("div",M_,[s.value?(Jt(),vn("div",S_,[n.root?(Jt(),hu(x_,{key:0,node:n.root,selected:n.selected,onSelect:r},null,8,["node","selected"])):ha("",!0)])):(Jt(),vn("div",y_,[...a[0]||(a[0]=[Mt("p",null,"No model loaded",-1),Mt("p",{class:"hint"},"Upload a URDF file to get started",-1)])]))])]))}}),E_=io(b_,[["__scopeId","data-v-e70c2b26"]]);const du="182",Qs={ROTATE:0,DOLLY:1,PAN:2},qs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},T_=0,dh=1,A_=2,ea=1,w_=2,Lr=3,Pi=0,En=1,ii=2,Ti=0,er=1,ph=2,mh=3,gh=4,R_=5,us=100,C_=101,P_=102,D_=103,L_=104,N_=200,I_=201,U_=202,F_=203,Zl=204,Jl=205,O_=206,B_=207,k_=208,V_=209,z_=210,H_=211,G_=212,W_=213,X_=214,Ql=0,ec=1,tc=2,ar=3,nc=4,ic=5,sc=6,rc=7,La=0,q_=1,j_=2,oi=0,Xd=1,qd=2,jd=3,Yd=4,Kd=5,$d=6,Zd=7,_h="attached",Y_="detached",Jd=300,gs=301,lr=302,oc=303,ac=304,Na=306,fs=1e3,Nn=1001,lc=1002,sn=1003,K_=1004,_o=1005,Yt=1006,il=1007,Ei=1008,Pn=1009,Qd=1010,ep=1011,Yr=1012,pu=1013,ci=1014,jn=1015,Di=1016,mu=1017,gu=1018,Kr=1020,tp=35902,np=35899,ip=1021,sp=1022,Bn=1023,Li=1026,ds=1027,rp=1028,_u=1029,cr=1030,xu=1031,vu=1033,ta=33776,na=33777,ia=33778,sa=33779,cc=35840,uc=35841,hc=35842,fc=35843,dc=36196,pc=37492,mc=37496,gc=37488,_c=37489,xc=37490,vc=37491,Mc=37808,yc=37809,Sc=37810,bc=37811,Ec=37812,Tc=37813,Ac=37814,wc=37815,Rc=37816,Cc=37817,Pc=37818,Dc=37819,Lc=37820,Nc=37821,Ic=36492,Uc=36494,Fc=36495,Oc=36283,Bc=36284,kc=36285,Vc=36286,da=2300,zc=2301,sl=2302,xh=2400,vh=2401,Mh=2402,$_=2500,Z_=3200,Mu=0,J_=1,qi="",Ht="srgb",ur="srgb-linear",pa="linear",Lt="srgb",As=7680,yh=519,Q_=512,e0=513,t0=514,yu=515,n0=516,i0=517,Su=518,s0=519,Sh=35044,bh="300 es",si=2e3,ma=2001;function op(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function r0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function $r(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function o0(){const n=$r("canvas");return n.style.display="block",n}const Eh={};function Th(...n){const e="THREE."+n.shift();console.log(e,...n)}function nt(...n){const e="THREE."+n.shift();console.warn(e,...n)}function gt(...n){const e="THREE."+n.shift();console.error(e,...n)}function Zr(...n){const e=n.join(" ");e in Eh||(Eh[e]=!0,nt(...n))}function a0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}class xs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ah=1234567;const tr=Math.PI/180,hr=180/Math.PI;function Qi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function _t(n,e,t){return Math.max(e,Math.min(t,n))}function bu(n,e){return(n%e+e)%e}function l0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function c0(n,e,t){return n!==e?(t-n)/(e-n):0}function zr(n,e,t){return(1-t)*n+t*e}function u0(n,e,t,i){return zr(n,e,1-Math.exp(-t*i))}function h0(n,e=1){return e-Math.abs(bu(n,e*2)-e)}function f0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function d0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function p0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function m0(n,e){return n+Math.random()*(e-n)}function g0(n){return n*(.5-Math.random())}function _0(n){n!==void 0&&(Ah=n);let e=Ah+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function x0(n){return n*tr}function v0(n){return n*hr}function M0(n){return(n&n-1)===0&&n!==0}function y0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function S0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function b0(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),p=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*_,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*_,a*c);break;case"ZYZ":n.set(l*_,l*p,a*u,a*c);break;default:nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ws(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function gn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Xs={DEG2RAD:tr,RAD2DEG:hr,generateUUID:Qi,clamp:_t,euclideanModulo:bu,mapLinear:l0,inverseLerp:c0,lerp:zr,damp:u0,pingpong:h0,smoothstep:f0,smootherstep:d0,randInt:p0,randFloat:m0,randFloatSpread:g0,seededRandom:_0,degToRad:x0,radToDeg:v0,isPowerOfTwo:M0,ceilPowerOfTwo:y0,floorPowerOfTwo:S0,setQuaternionFromProperEuler:b0,normalize:gn,denormalize:Ws};class ot{constructor(e=0,t=0){ot.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_t(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(_t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Hn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[o+0],p=r[o+1],_=r[o+2],M=r[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a>=1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=M;return}if(h!==M||l!==f||c!==p||u!==_){let m=l*f+c*p+u*_+h*M;m<0&&(f=-f,p=-p,_=-_,M=-M,m=-m);let d=1-a;if(m<.9995){const R=Math.acos(m),D=Math.sin(R);d=Math.sin(d*R)/D,a=Math.sin(a*R)/D,l=l*d+f*a,c=c*d+p*a,u=u*d+_*a,h=h*d+M*a}else{l=l*d+f*a,c=c*d+p*a,u=u*d+_*a,h=h*d+M*a;const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],p=r[o+2],_=r[o+3];return e[t]=a*_+u*h+l*p-c*f,e[t+1]=l*_+u*f+c*h-a*p,e[t+2]=c*_+u*p+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h-f*p*_;break;case"YXZ":this._x=f*u*h+c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h+f*p*_;break;case"ZXY":this._x=f*u*h-c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h-f*p*_;break;case"ZYX":this._x=f*u*h-c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h+f*p*_;break;case"YZX":this._x=f*u*h+c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h-f*p*_;break;case"XZY":this._x=f*u*h-c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h+f*p*_;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_t(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return rl.copy(this).projectOnVector(e),this.sub(rl)}reflect(e){return this.sub(rl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(_t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rl=new X,wh=new Hn;class pt{constructor(e,t,i,s,r,o,a,l,c){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],_=i[8],M=s[0],m=s[3],d=s[6],R=s[1],D=s[4],E=s[7],S=s[2],L=s[5],N=s[8];return r[0]=o*M+a*R+l*S,r[3]=o*m+a*D+l*L,r[6]=o*d+a*E+l*N,r[1]=c*M+u*R+h*S,r[4]=c*m+u*D+h*L,r[7]=c*d+u*E+h*N,r[2]=f*M+p*R+_*S,r[5]=f*m+p*D+_*L,r[8]=f*d+p*E+_*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,p=c*r-o*l,_=t*h+i*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=h*M,e[1]=(s*c-u*i)*M,e[2]=(a*i-s*o)*M,e[3]=f*M,e[4]=(u*t-s*l)*M,e[5]=(s*r-a*t)*M,e[6]=p*M,e[7]=(i*l-c*t)*M,e[8]=(o*t-i*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ol.makeScale(e,t)),this}rotate(e){return this.premultiply(ol.makeRotation(-e)),this}translate(e,t){return this.premultiply(ol.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ol=new pt,Rh=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ch=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function E0(){const n={enabled:!0,workingColorSpace:ur,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Lt&&(s.r=Ai(s.r),s.g=Ai(s.g),s.b=Ai(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Lt&&(s.r=nr(s.r),s.g=nr(s.g),s.b=nr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qi?pa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Zr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Zr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ur]:{primaries:e,whitePoint:i,transfer:pa,toXYZ:Rh,fromXYZ:Ch,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:i,transfer:Lt,toXYZ:Rh,fromXYZ:Ch,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),n}const xt=E0();function Ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function nr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ws;class T0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ws===void 0&&(ws=$r("canvas")),ws.width=e.width,ws.height=e.height;const s=ws.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ws}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$r("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ai(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ai(t[i]/255)*255):t[i]=Ai(t[i]);return{data:t,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let A0=0;class Eu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=Qi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(al(s[o].image)):r.push(al(s[o]))}else r=al(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function al(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?T0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}let w0=0;const ll=new X;class fn extends xs{constructor(e=fn.DEFAULT_IMAGE,t=fn.DEFAULT_MAPPING,i=Nn,s=Nn,r=Yt,o=Ei,a=Bn,l=Pn,c=fn.DEFAULT_ANISOTROPY,u=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=Qi(),this.name="",this.source=new Eu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ll).x}get height(){return this.source.getSize(ll).y}get depth(){return this.source.getSize(ll).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){nt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){nt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fs:e.x=e.x-Math.floor(e.x);break;case Nn:e.x=e.x<0?0:1;break;case lc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fs:e.y=e.y-Math.floor(e.y);break;case Nn:e.y=e.y<0?0:1;break;case lc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Jd;fn.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,t=0,i=0,s=1){Ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],_=l[9],M=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-M)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+M)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(c+1)/2,E=(p+1)/2,S=(d+1)/2,L=(u+f)/4,N=(h+M)/4,F=(_+m)/4;return D>E&&D>S?D<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(D),s=L/i,r=N/i):E>S?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=L/s,r=F/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=N/r,s=F/r),this.set(i,s,r,t),this}let R=Math.sqrt((m-_)*(m-_)+(h-M)*(h-M)+(f-u)*(f-u));return Math.abs(R)<.001&&(R=1),this.x=(m-_)/R,this.y=(h-M)/R,this.z=(f-u)/R,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_t(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class R0 extends xs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new fn(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Eu(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends R0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ap extends fn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class C0 extends fn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pr{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wn):Wn.fromBufferAttribute(r,o),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xo.copy(i.boundingBox)),xo.applyMatrix4(e.matrixWorld),this.union(xo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Er),vo.subVectors(this.max,Er),Rs.subVectors(e.a,Er),Cs.subVectors(e.b,Er),Ps.subVectors(e.c,Er),Ui.subVectors(Cs,Rs),Fi.subVectors(Ps,Cs),ns.subVectors(Rs,Ps);let t=[0,-Ui.z,Ui.y,0,-Fi.z,Fi.y,0,-ns.z,ns.y,Ui.z,0,-Ui.x,Fi.z,0,-Fi.x,ns.z,0,-ns.x,-Ui.y,Ui.x,0,-Fi.y,Fi.x,0,-ns.y,ns.x,0];return!cl(t,Rs,Cs,Ps,vo)||(t=[1,0,0,0,1,0,0,0,1],!cl(t,Rs,Cs,Ps,vo))?!1:(Mo.crossVectors(Ui,Fi),t=[Mo.x,Mo.y,Mo.z],cl(t,Rs,Cs,Ps,vo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const mi=[new X,new X,new X,new X,new X,new X,new X,new X],Wn=new X,xo=new pr,Rs=new X,Cs=new X,Ps=new X,Ui=new X,Fi=new X,ns=new X,Er=new X,vo=new X,Mo=new X,is=new X;function cl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){is.fromArray(n,r);const a=s.x*Math.abs(is.x)+s.y*Math.abs(is.y)+s.z*Math.abs(is.z),l=e.dot(is),c=t.dot(is),u=i.dot(is);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const P0=new pr,Tr=new X,ul=new X;class mr{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):P0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Tr.subVectors(e,this.center);const t=Tr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Tr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ul.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Tr.copy(e.center).add(ul)),this.expandByPoint(Tr.copy(e.center).sub(ul))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const gi=new X,hl=new X,yo=new X,Oi=new X,fl=new X,So=new X,dl=new X;class so{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){hl.copy(e).add(t).multiplyScalar(.5),yo.copy(t).sub(e).normalize(),Oi.copy(this.origin).sub(hl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(yo),a=Oi.dot(this.direction),l=-Oi.dot(yo),c=Oi.lengthSq(),u=Math.abs(1-o*o);let h,f,p,_;if(u>0)if(h=o*l-a,f=o*a-l,_=r*u,h>=0)if(f>=-_)if(f<=_){const M=1/u;h*=M,f*=M,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(hl).addScaledVector(yo,f),p}intersectSphere(e,t){gi.subVectors(e.center,this.origin);const i=gi.dot(this.direction),s=gi.dot(gi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,i,s,r){fl.subVectors(t,e),So.subVectors(i,e),dl.crossVectors(fl,So);let o=this.direction.dot(dl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,e);const l=a*this.direction.dot(So.crossVectors(Oi,So));if(l<0)return null;const c=a*this.direction.dot(fl.cross(Oi));if(c<0||l+c>o)return null;const u=-a*Oi.dot(dl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,i,s,r,o,a,l,c,u,h,f,p,_,M,m){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,f,p,_,M,m)}set(e,t,i,s,r,o,a,l,c,u,h,f,p,_,M,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=_,d[11]=M,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Ds.setFromMatrixColumn(e,0).length(),r=1/Ds.setFromMatrixColumn(e,1).length(),o=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,p=o*h,_=a*u,M=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+_*c,t[5]=f-M*c,t[9]=-a*l,t[2]=M-f*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,_=c*u,M=c*h;t[0]=f+M*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=M+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,_=c*u,M=c*h;t[0]=f-M*a,t[4]=-o*h,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=M-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,_=a*u,M=a*h;t[0]=l*u,t[4]=_*c-p,t[8]=f*c+M,t[1]=l*h,t[5]=M*c+f,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,_=a*l,M=a*c;t[0]=l*u,t[4]=M-f*h,t[8]=_*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+_,t[10]=f-M*h}else if(e.order==="XZY"){const f=o*l,p=o*c,_=a*l,M=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+M,t[5]=o*u,t[9]=p*h-_,t[2]=_*h-p,t[6]=a*u,t[10]=M*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(D0,e,L0)}lookAt(e,t,i){const s=this.elements;return wn.subVectors(e,t),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Bi.crossVectors(i,wn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Bi.crossVectors(i,wn)),Bi.normalize(),bo.crossVectors(wn,Bi),s[0]=Bi.x,s[4]=bo.x,s[8]=wn.x,s[1]=Bi.y,s[5]=bo.y,s[9]=wn.y,s[2]=Bi.z,s[6]=bo.z,s[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],_=i[2],M=i[6],m=i[10],d=i[14],R=i[3],D=i[7],E=i[11],S=i[15],L=s[0],N=s[4],F=s[8],v=s[12],b=s[1],I=s[5],B=s[9],k=s[13],K=s[2],$=s[6],V=s[10],W=s[14],Y=s[3],pe=s[7],ge=s[11],me=s[15];return r[0]=o*L+a*b+l*K+c*Y,r[4]=o*N+a*I+l*$+c*pe,r[8]=o*F+a*B+l*V+c*ge,r[12]=o*v+a*k+l*W+c*me,r[1]=u*L+h*b+f*K+p*Y,r[5]=u*N+h*I+f*$+p*pe,r[9]=u*F+h*B+f*V+p*ge,r[13]=u*v+h*k+f*W+p*me,r[2]=_*L+M*b+m*K+d*Y,r[6]=_*N+M*I+m*$+d*pe,r[10]=_*F+M*B+m*V+d*ge,r[14]=_*v+M*k+m*W+d*me,r[3]=R*L+D*b+E*K+S*Y,r[7]=R*N+D*I+E*$+S*pe,r[11]=R*F+D*B+E*V+S*ge,r[15]=R*v+D*k+E*W+S*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],_=e[3],M=e[7],m=e[11],d=e[15],R=l*p-c*f,D=a*p-c*h,E=a*f-l*h,S=o*p-c*u,L=o*f-l*u,N=o*h-a*u;return t*(M*R-m*D+d*E)-i*(_*R-m*S+d*L)+s*(_*D-M*S+d*N)-r*(_*E-M*L+m*N)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],_=e[12],M=e[13],m=e[14],d=e[15],R=h*m*c-M*f*c+M*l*p-a*m*p-h*l*d+a*f*d,D=_*f*c-u*m*c-_*l*p+o*m*p+u*l*d-o*f*d,E=u*M*c-_*h*c+_*a*p-o*M*p-u*a*d+o*h*d,S=_*h*l-u*M*l-_*a*f+o*M*f+u*a*m-o*h*m,L=t*R+i*D+s*E+r*S;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/L;return e[0]=R*N,e[1]=(M*f*r-h*m*r-M*s*p+i*m*p+h*s*d-i*f*d)*N,e[2]=(a*m*r-M*l*r+M*s*c-i*m*c-a*s*d+i*l*d)*N,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*p-i*l*p)*N,e[4]=D*N,e[5]=(u*m*r-_*f*r+_*s*p-t*m*p-u*s*d+t*f*d)*N,e[6]=(_*l*r-o*m*r-_*s*c+t*m*c+o*s*d-t*l*d)*N,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*p+t*l*p)*N,e[8]=E*N,e[9]=(_*h*r-u*M*r-_*i*p+t*M*p+u*i*d-t*h*d)*N,e[10]=(o*M*r-_*a*r+_*i*c-t*M*c-o*i*d+t*a*d)*N,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*p-t*a*p)*N,e[12]=S*N,e[13]=(u*M*s-_*h*s+_*i*f-t*M*f-u*i*m+t*h*m)*N,e[14]=(_*a*s-o*M*s-_*i*l+t*M*l+o*i*m-t*a*m)*N,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*f+t*a*f)*N,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,p=r*u,_=r*h,M=o*u,m=o*h,d=a*h,R=l*c,D=l*u,E=l*h,S=i.x,L=i.y,N=i.z;return s[0]=(1-(M+d))*S,s[1]=(p+E)*S,s[2]=(_-D)*S,s[3]=0,s[4]=(p-E)*L,s[5]=(1-(f+d))*L,s[6]=(m+R)*L,s[7]=0,s[8]=(_+D)*N,s[9]=(m-R)*N,s[10]=(1-(f+M))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let r=Ds.set(s[0],s[1],s[2]).length();const o=Ds.set(s[4],s[5],s[6]).length(),a=Ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),Xn.copy(this);const c=1/r,u=1/o,h=1/a;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=u,Xn.elements[5]*=u,Xn.elements[6]*=u,Xn.elements[8]*=h,Xn.elements[9]*=h,Xn.elements[10]*=h,t.setFromRotationMatrix(Xn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=si,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),p=(i+s)/(i-s);let _,M;if(l)_=r/(o-r),M=o*r/(o-r);else if(a===si)_=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===ma)_=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=si,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-s),f=-(t+e)/(t-e),p=-(i+s)/(i-s);let _,M;if(l)_=1/(o-r),M=o/(o-r);else if(a===si)_=-2/(o-r),M=-(o+r)/(o-r);else if(a===ma)_=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ds=new X,Xn=new lt,D0=new X(0,0,0),L0=new X(1,1,1),Bi=new X,bo=new X,wn=new X,Ph=new lt,Dh=new Hn;class Tn{constructor(e=0,t=0,i=0,s=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(_t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ph.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ph,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dh.setFromEuler(this),this.setFromQuaternion(Dh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class Tu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let N0=0;const Lh=new X,Ls=new Hn,_i=new lt,Eo=new X,Ar=new X,I0=new X,U0=new Hn,Nh=new X(1,0,0),Ih=new X(0,1,0),Uh=new X(0,0,1),Fh={type:"added"},F0={type:"removed"},Ns={type:"childadded",child:null},pl={type:"childremoved",child:null};class Gt extends xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new X,t=new Tn,i=new Hn,s=new X(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new pt}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(Nh,e)}rotateY(e){return this.rotateOnAxis(Ih,e)}rotateZ(e){return this.rotateOnAxis(Uh,e)}translateOnAxis(e,t){return Lh.copy(e).applyQuaternion(this.quaternion),this.position.add(Lh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nh,e)}translateY(e){return this.translateOnAxis(Ih,e)}translateZ(e){return this.translateOnAxis(Uh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Eo.copy(e):Eo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Ar,Eo,this.up):_i.lookAt(Eo,Ar,this.up),this.quaternion.setFromRotationMatrix(_i),s&&(_i.extractRotation(s.matrixWorld),Ls.setFromRotationMatrix(_i),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(gt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fh),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):gt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(F0),pl.child=e,this.dispatchEvent(pl),pl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fh),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,e,I0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,U0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Gt.DEFAULT_UP=new X(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qn=new X,xi=new X,ml=new X,vi=new X,Is=new X,Us=new X,Oh=new X,gl=new X,_l=new X,xl=new X,vl=new Ot,Ml=new Ot,yl=new Ot;class On{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),qn.subVectors(e,t),s.cross(qn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){qn.subVectors(s,t),xi.subVectors(i,t),ml.subVectors(e,t);const o=qn.dot(qn),a=qn.dot(xi),l=qn.dot(ml),c=xi.dot(xi),u=xi.dot(ml),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(c*l-a*u)*f,_=(o*u-a*l)*f;return r.set(1-p-_,_,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vi.x),l.addScaledVector(o,vi.y),l.addScaledVector(a,vi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return vl.setScalar(0),Ml.setScalar(0),yl.setScalar(0),vl.fromBufferAttribute(e,t),Ml.fromBufferAttribute(e,i),yl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(vl,r.x),o.addScaledVector(Ml,r.y),o.addScaledVector(yl,r.z),o}static isFrontFacing(e,t,i,s){return qn.subVectors(i,t),xi.subVectors(e,t),qn.cross(xi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),qn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return On.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return On.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Is.subVectors(s,i),Us.subVectors(r,i),gl.subVectors(e,i);const l=Is.dot(gl),c=Us.dot(gl);if(l<=0&&c<=0)return t.copy(i);_l.subVectors(e,s);const u=Is.dot(_l),h=Us.dot(_l);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Is,o);xl.subVectors(e,r);const p=Is.dot(xl),_=Us.dot(xl);if(_>=0&&p<=_)return t.copy(r);const M=p*c-l*_;if(M<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(Us,a);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return Oh.subVectors(r,s),a=(h-u)/(h-u+(p-_)),t.copy(s).addScaledVector(Oh,a);const d=1/(m+M+f);return o=M*d,a=f*d,t.copy(i).addScaledVector(Is,o).addScaledVector(Us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},To={h:0,s:0,l:0};function Sl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ht{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,xt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=xt.workingColorSpace){if(e=bu(e,1),t=_t(t,0,1),i=_t(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Sl(o,r,e+1/3),this.g=Sl(o,r,e),this.b=Sl(o,r,e-1/3)}return xt.colorSpaceToWorking(this,s),this}setStyle(e,t=Ht){function i(r){r!==void 0&&parseFloat(r)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:nt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){const i=lp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return xt.workingToColorSpace(an.copy(this),e),Math.round(_t(an.r*255,0,255))*65536+Math.round(_t(an.g*255,0,255))*256+Math.round(_t(an.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(an.copy(this),t);const i=an.r,s=an.g,r=an.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=Ht){xt.workingToColorSpace(an.copy(this),e);const t=an.r,i=an.g,s=an.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+t,ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ki),e.getHSL(To);const i=zr(ki.h,To.h,t),s=zr(ki.s,To.s,t),r=zr(ki.l,To.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new ht;ht.NAMES=lp;let O0=0;class vs extends xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=Qi(),this.name="",this.type="Material",this.blending=er,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zl,this.blendDst=Jl,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){nt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){nt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==er&&(i.blending=this.blending),this.side!==Pi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Zl&&(i.blendSrc=this.blendSrc),this.blendDst!==Jl&&(i.blendDst=this.blendDst),this.blendEquation!==us&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ar&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(i.stencilFail=this.stencilFail),this.stencilZFail!==As&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ga extends vs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=La,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new X,Ao=new ot;let B0=0;class In{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:B0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Sh,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ao.fromBufferAttribute(this,t),Ao.applyMatrix3(e),this.setXY(t,Ao.x,Ao.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ws(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ws(t,this.array)),t}setX(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ws(t,this.array)),t}setY(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ws(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ws(t,this.array)),t}setW(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),i=gn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),i=gn(i,this.array),s=gn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),i=gn(i,this.array),s=gn(s,this.array),r=gn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sh&&(e.usage=this.usage),e}}class cp extends In{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class up extends In{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class At extends In{constructor(e,t,i){super(new Float32Array(e),t,i)}}let k0=0;const Un=new lt,bl=new Gt,Fs=new X,Rn=new pr,wr=new pr,Zt=new X;class Qt extends xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(op(e)?up:cp)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new pt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,i){return Un.makeTranslation(e,t,i),this.applyMatrix4(Un),this}scale(e,t,i){return Un.makeScale(e,t,i),this.applyMatrix4(Un),this}lookAt(e){return bl.lookAt(e),bl.updateMatrix(),this.applyMatrix4(bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new At(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];wr.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(Rn.min,wr.min),Rn.expandByPoint(Zt),Zt.addVectors(Rn.max,wr.max),Rn.expandByPoint(Zt)):(Rn.expandByPoint(wr.min),Rn.expandByPoint(wr.max))}Rn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Zt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Zt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Zt.fromBufferAttribute(a,c),l&&(Fs.fromBufferAttribute(e,c),Zt.add(Fs)),s=Math.max(s,i.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new In(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new X,l[F]=new X;const c=new X,u=new X,h=new X,f=new ot,p=new ot,_=new ot,M=new X,m=new X;function d(F,v,b){c.fromBufferAttribute(i,F),u.fromBufferAttribute(i,v),h.fromBufferAttribute(i,b),f.fromBufferAttribute(r,F),p.fromBufferAttribute(r,v),_.fromBufferAttribute(r,b),u.sub(c),h.sub(c),p.sub(f),_.sub(f);const I=1/(p.x*_.y-_.x*p.y);isFinite(I)&&(M.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(I),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(I),a[F].add(M),a[v].add(M),a[b].add(M),l[F].add(m),l[v].add(m),l[b].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let F=0,v=R.length;F<v;++F){const b=R[F],I=b.start,B=b.count;for(let k=I,K=I+B;k<K;k+=3)d(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const D=new X,E=new X,S=new X,L=new X;function N(F){S.fromBufferAttribute(s,F),L.copy(S);const v=a[F];D.copy(v),D.sub(S.multiplyScalar(S.dot(v))).normalize(),E.crossVectors(L,v);const I=E.dot(l[F])<0?-1:1;o.setXYZW(F,D.x,D.y,D.z,I)}for(let F=0,v=R.length;F<v;++F){const b=R[F],I=b.start,B=b.count;for(let k=I,K=I+B;k<K;k+=3)N(e.getX(k+0)),N(e.getX(k+1)),N(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new In(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new X,r=new X,o=new X,a=new X,l=new X,c=new X,u=new X,h=new X;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),M=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,_=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?p=l[M]*a.data.stride+a.offset:p=l[M]*u;for(let d=0;d<u;d++)f[_++]=c[p++]}return new In(f,u,h)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bh=new lt,ss=new so,wo=new mr,kh=new X,Ro=new X,Co=new X,Po=new X,El=new X,Do=new X,Vh=new X,Lo=new X;class nn extends Gt{constructor(e=new Qt,t=new ga){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Do.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(El.fromBufferAttribute(h,e),o?Do.addScaledVector(El,u):Do.addScaledVector(El.sub(t),u))}t.add(Do)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wo.copy(i.boundingSphere),wo.applyMatrix4(r),ss.copy(e.ray).recast(e.near),!(wo.containsPoint(ss.origin)===!1&&(ss.intersectSphere(wo,kh)===null||ss.origin.distanceToSquared(kh)>(e.far-e.near)**2))&&(Bh.copy(r).invert(),ss.copy(e.ray).applyMatrix4(Bh),!(i.boundingBox!==null&&ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ss)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,M=f.length;_<M;_++){const m=f[_],d=o[m.materialIndex],R=Math.max(m.start,p.start),D=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let E=R,S=D;E<S;E+=3){const L=a.getX(E),N=a.getX(E+1),F=a.getX(E+2);s=No(this,d,e,i,c,u,h,L,N,F),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),M=Math.min(a.count,p.start+p.count);for(let m=_,d=M;m<d;m+=3){const R=a.getX(m),D=a.getX(m+1),E=a.getX(m+2);s=No(this,o,e,i,c,u,h,R,D,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,M=f.length;_<M;_++){const m=f[_],d=o[m.materialIndex],R=Math.max(m.start,p.start),D=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=R,S=D;E<S;E+=3){const L=E,N=E+1,F=E+2;s=No(this,d,e,i,c,u,h,L,N,F),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=_,d=M;m<d;m+=3){const R=m,D=m+1,E=m+2;s=No(this,o,e,i,c,u,h,R,D,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function V0(n,e,t,i,s,r,o,a){let l;if(e.side===En?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Pi,a),l===null)return null;Lo.copy(a),Lo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Lo);return c<t.near||c>t.far?null:{distance:c,point:Lo.clone(),object:n}}function No(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Ro),n.getVertexPosition(l,Co),n.getVertexPosition(c,Po);const u=V0(n,e,t,i,Ro,Co,Po,Vh);if(u){const h=new X;On.getBarycoord(Vh,Ro,Co,Po,h),s&&(u.uv=On.getInterpolatedAttribute(s,a,l,c,h,new ot)),r&&(u.uv1=On.getInterpolatedAttribute(r,a,l,c,h,new ot)),o&&(u.normal=On.getInterpolatedAttribute(o,a,l,c,h,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new X,materialIndex:0};On.getNormal(Ro,Co,Po,f.normal),u.face=f,u.barycoord=h}return u}class Ms extends Qt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(u,3)),this.setAttribute("uv",new At(h,2));function _(M,m,d,R,D,E,S,L,N,F,v){const b=E/N,I=S/F,B=E/2,k=S/2,K=L/2,$=N+1,V=F+1;let W=0,Y=0;const pe=new X;for(let ge=0;ge<V;ge++){const me=ge*I-k;for(let Le=0;Le<$;Le++){const Ee=Le*b-B;pe[M]=Ee*R,pe[m]=me*D,pe[d]=K,c.push(pe.x,pe.y,pe.z),pe[M]=0,pe[m]=0,pe[d]=L>0?1:-1,u.push(pe.x,pe.y,pe.z),h.push(Le/N),h.push(1-ge/F),W+=1}}for(let ge=0;ge<F;ge++)for(let me=0;me<N;me++){const Le=f+me+$*ge,Ee=f+me+$*(ge+1),ke=f+(me+1)+$*(ge+1),Ce=f+(me+1)+$*ge;l.push(Le,Ee,Ce),l.push(Ee,ke,Ce),Y+=6}a.addGroup(p,Y,v),p+=Y,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ms(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function _n(n){const e={};for(let t=0;t<n.length;t++){const i=fr(n[t]);for(const s in i)e[s]=i[s]}return e}function z0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function hp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const H0={clone:fr,merge:_n};var G0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,W0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ui extends vs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=G0,this.fragmentShader=W0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fr(e.uniforms),this.uniformsGroups=z0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class fp extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vi=new X,zh=new ot,Hh=new ot;class cn extends fp{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hr*2*Math.atan(Math.tan(tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z)}getViewSize(e,t){return this.getViewBounds(e,zh,Hh),t.subVectors(Hh,zh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(tr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Os=-90,Bs=1;class X0 extends Gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new cn(Os,Bs,e,t);s.layers=this.layers,this.add(s);const r=new cn(Os,Bs,e,t);r.layers=this.layers,this.add(r);const o=new cn(Os,Bs,e,t);o.layers=this.layers,this.add(o);const a=new cn(Os,Bs,e,t);a.layers=this.layers,this.add(a);const l=new cn(Os,Bs,e,t);l.layers=this.layers,this.add(l);const c=new cn(Os,Bs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===si)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ma)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class dp extends fn{constructor(e=[],t=gs,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pp extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new dp(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ms(5,5,5),r=new ui({name:"CubemapFromEquirect",uniforms:fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:Ti});r.uniforms.tEquirect.value=t;const o=new nn(s,r),a=t.minFilter;return t.minFilter===Ei&&(t.minFilter=Yt),new X0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class js extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const q0={type:"move"};class Tl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new js,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new js,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new js,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const m=t.getJointPose(M,i),d=this._getHandJoint(c,M);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(q0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new js;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class mp extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Gh=new X,Wh=new Ot,Xh=new Ot,j0=new X,qh=new lt,Io=new X,Al=new mr,jh=new lt,wl=new so;class Y0 extends nn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=_h,this.bindMatrix=new lt,this.bindMatrixInverse=new lt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new pr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Io),this.boundingBox.expandByPoint(Io)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new mr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Io),this.boundingSphere.expandByPoint(Io)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Al.copy(this.boundingSphere),Al.applyMatrix4(s),e.ray.intersectsSphere(Al)!==!1&&(jh.copy(s).invert(),wl.copy(e.ray).applyMatrix4(jh),!(this.boundingBox!==null&&wl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,wl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ot,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===_h?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Y_?this.bindMatrixInverse.copy(this.bindMatrix).invert():nt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Wh.fromBufferAttribute(s.attributes.skinIndex,e),Xh.fromBufferAttribute(s.attributes.skinWeight,e),Gh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Xh.getComponent(r);if(o!==0){const a=Wh.getComponent(r);qh.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(j0.copy(Gh).applyMatrix4(qh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class gp extends Gt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Au extends fn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=sn,u=sn,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yh=new lt,K0=new lt;class wu{constructor(e=[],t=[]){this.uuid=Qi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){nt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new lt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new lt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:K0;Yh.multiplyMatrices(a,t[r]),Yh.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new wu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Au(t,e,e,Bn,jn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(nt("Skeleton: No bone found with UUID:",r),o=new gp),this.bones.push(o),this.boneInverses.push(new lt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}const Rl=new X,$0=new X,Z0=new pt;class Xi{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Rl.subVectors(i,t).cross($0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Rl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Z0.getNormalMatrix(e),s=this.coplanarPoint(Rl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new mr,J0=new ot(.5,.5),Uo=new X;class Ru{constructor(e=new Xi,t=new Xi,i=new Xi,s=new Xi,r=new Xi,o=new Xi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=si,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],p=r[7],_=r[8],M=r[9],m=r[10],d=r[11],R=r[12],D=r[13],E=r[14],S=r[15];if(s[0].setComponents(c-o,p-u,d-_,S-R).normalize(),s[1].setComponents(c+o,p+u,d+_,S+R).normalize(),s[2].setComponents(c+a,p+h,d+M,S+D).normalize(),s[3].setComponents(c-a,p-h,d-M,S-D).normalize(),i)s[4].setComponents(l,f,m,E).normalize(),s[5].setComponents(c-l,p-f,d-m,S-E).normalize();else if(s[4].setComponents(c-l,p-f,d-m,S-E).normalize(),t===si)s[5].setComponents(c+l,p+f,d+m,S+E).normalize();else if(t===ma)s[5].setComponents(l,f,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(e){rs.center.set(0,0,0);const t=J0.distanceTo(e.center);return rs.radius=.7071067811865476+t,rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Uo.x=s.normal.x>0?e.max.x:e.min.x,Uo.y=s.normal.y>0?e.max.y:e.min.y,Uo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Uo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _s extends vs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _a=new X,xa=new X,Kh=new lt,Rr=new so,Fo=new mr,Cl=new X,$h=new X;class _p extends Gt{constructor(e=new Qt,t=new _s){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)_a.fromBufferAttribute(t,s-1),xa.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=_a.distanceTo(xa);e.setAttribute("lineDistance",new At(i,1))}else nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fo.copy(i.boundingSphere),Fo.applyMatrix4(s),Fo.radius+=r,e.ray.intersectsSphere(Fo)===!1)return;Kh.copy(s).invert(),Rr.copy(e.ray).applyMatrix4(Kh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let M=p,m=_-1;M<m;M+=c){const d=u.getX(M),R=u.getX(M+1),D=Oo(this,e,Rr,l,d,R,M);D&&t.push(D)}if(this.isLineLoop){const M=u.getX(_-1),m=u.getX(p),d=Oo(this,e,Rr,l,M,m,_-1);d&&t.push(d)}}else{const p=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let M=p,m=_-1;M<m;M+=c){const d=Oo(this,e,Rr,l,M,M+1,M);d&&t.push(d)}if(this.isLineLoop){const M=Oo(this,e,Rr,l,_-1,p,_-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Oo(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(_a.fromBufferAttribute(a,s),xa.fromBufferAttribute(a,r),t.distanceSqToSegment(_a,xa,Cl,$h)>i)return;Cl.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Cl);if(!(c<e.near||c>e.far))return{distance:c,point:$h.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Zh=new X,Jh=new X;class Jr extends _p{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Zh.fromBufferAttribute(t,s),Jh.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Zh.distanceTo(Jh);e.setAttribute("lineDistance",new At(i,1))}else nt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Qr extends fn{constructor(e,t,i=ci,s,r,o,a=sn,l=sn,c,u=Li,h=1){if(u!==Li&&u!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Eu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Q0 extends Qr{constructor(e,t=ci,i=gs,s,r,o=sn,a=sn,l,c=Li){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class xp extends fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Cu extends Qt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],p=[];let _=0;const M=[],m=i/2;let d=0;R(),o===!1&&(e>0&&D(!0),t>0&&D(!1)),this.setIndex(u),this.setAttribute("position",new At(h,3)),this.setAttribute("normal",new At(f,3)),this.setAttribute("uv",new At(p,2));function R(){const E=new X,S=new X;let L=0;const N=(t-e)/i;for(let F=0;F<=r;F++){const v=[],b=F/r,I=b*(t-e)+e;for(let B=0;B<=s;B++){const k=B/s,K=k*l+a,$=Math.sin(K),V=Math.cos(K);S.x=I*$,S.y=-b*i+m,S.z=I*V,h.push(S.x,S.y,S.z),E.set($,N,V).normalize(),f.push(E.x,E.y,E.z),p.push(k,1-b),v.push(_++)}M.push(v)}for(let F=0;F<s;F++)for(let v=0;v<r;v++){const b=M[v][F],I=M[v+1][F],B=M[v+1][F+1],k=M[v][F+1];(e>0||v!==0)&&(u.push(b,I,k),L+=3),(t>0||v!==r-1)&&(u.push(I,B,k),L+=3)}c.addGroup(d,L,0),d+=L}function D(E){const S=_,L=new ot,N=new X;let F=0;const v=E===!0?e:t,b=E===!0?1:-1;for(let B=1;B<=s;B++)h.push(0,m*b,0),f.push(0,b,0),p.push(.5,.5),_++;const I=_;for(let B=0;B<=s;B++){const K=B/s*l+a,$=Math.cos(K),V=Math.sin(K);N.x=v*V,N.y=m*b,N.z=v*$,h.push(N.x,N.y,N.z),f.push(0,b,0),L.x=$*.5+.5,L.y=V*.5*b+.5,p.push(L.x,L.y),_++}for(let B=0;B<s;B++){const k=S+B,K=I+B;E===!0?u.push(K,K+1,k):u.push(K+1,K,k),F+=3}c.addGroup(d,F,E===!0?1:2),d+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Bo=new X,ko=new X,Pl=new X,Vo=new On;class Qh extends Qt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(tr*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},p=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:M,b:m,c:d}=Vo;if(M.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),d.fromBufferAttribute(a,c[2]),Vo.getNormal(Pl),h[0]=`${Math.round(M.x*s)},${Math.round(M.y*s)},${Math.round(M.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let R=0;R<3;R++){const D=(R+1)%3,E=h[R],S=h[D],L=Vo[u[R]],N=Vo[u[D]],F=`${E}_${S}`,v=`${S}_${E}`;v in f&&f[v]?(Pl.dot(f[v].normal)<=r&&(p.push(L.x,L.y,L.z),p.push(N.x,N.y,N.z)),f[v]=null):F in f||(f[F]={index0:c[R],index1:c[D],normal:Pl.clone()})}}for(const _ in f)if(f[_]){const{index0:M,index1:m}=f[_];Bo.fromBufferAttribute(a,M),ko.fromBufferAttribute(a,m),p.push(Bo.x,Bo.y,Bo.z),p.push(ko.x,ko.y,ko.z)}this.setAttribute("position",new At(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ia extends Qt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,p=[],_=[],M=[],m=[];for(let d=0;d<u;d++){const R=d*f-o;for(let D=0;D<c;D++){const E=D*h-r;_.push(E,-R,0),M.push(0,0,1),m.push(D/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let R=0;R<a;R++){const D=R+c*d,E=R+c*(d+1),S=R+1+c*(d+1),L=R+1+c*d;p.push(D,E,L),p.push(E,S,L)}this.setIndex(p),this.setAttribute("position",new At(_,3)),this.setAttribute("normal",new At(M,3)),this.setAttribute("uv",new At(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ia(e.width,e.height,e.widthSegments,e.heightSegments)}}class Pu extends Qt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new X,f=new X,p=[],_=[],M=[],m=[];for(let d=0;d<=i;d++){const R=[],D=d/i;let E=0;d===0&&o===0?E=.5/t:d===i&&l===Math.PI&&(E=-.5/t);for(let S=0;S<=t;S++){const L=S/t;h.x=-e*Math.cos(s+L*r)*Math.sin(o+D*a),h.y=e*Math.cos(o+D*a),h.z=e*Math.sin(s+L*r)*Math.sin(o+D*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),M.push(f.x,f.y,f.z),m.push(L+E,1-D),R.push(c++)}u.push(R)}for(let d=0;d<i;d++)for(let R=0;R<t;R++){const D=u[d][R+1],E=u[d][R],S=u[d+1][R],L=u[d+1][R+1];(d!==0||o>0)&&p.push(D,E,L),(d!==i-1||l<Math.PI)&&p.push(E,S,L)}this.setIndex(p),this.setAttribute("position",new At(_,3)),this.setAttribute("normal",new At(M,3)),this.setAttribute("uv",new At(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ex extends ui{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ir extends vs{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ht(16777215),this.specular=new ht(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mu,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=La,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tx extends vs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mu,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=La,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nx extends vs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Z_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ix extends vs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function zo(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function sx(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function ef(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function vp(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push(...o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class Ua{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class rx extends Ua{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xh,endingEnd:xh}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case vh:r=e,a=2*t-i;break;case Mh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case vh:o=e,l=2*i-t;break;case Mh:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(i-t)/(s-t),M=_*_,m=M*_,d=-f*m+2*f*M-f*_,R=(1+f)*m+(-1.5-2*f)*M+(-.5+f)*_+1,D=(-1-p)*m+(1.5+p)*M+.5*_,E=p*m-p*M;for(let S=0;S!==a;++S)r[S]=d*o[u+S]+R*o[c+S]+D*o[l+S]+E*o[h+S];return r}}class ox extends Ua{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class ax extends Ua{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class $n{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=zo(t,this.TimeBufferType),this.values=zo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:zo(e.times,Array),values:zo(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ax(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ox(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new rx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case da:t=this.InterpolantFactoryMethodDiscrete;break;case zc:t=this.InterpolantFactoryMethodLinear;break;case sl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return nt("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return da;case this.InterpolantFactoryMethodLinear:return zc;case this.InterpolantFactoryMethodSmooth:return sl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(gt("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(gt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){gt("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){gt("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&r0(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){gt("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===sl,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*i,f=h-i,p=h+i;for(let _=0;_!==i;++_){const M=t[h+_];if(M!==t[f+_]||M!==t[p+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*i,f=o*i;for(let p=0;p!==i;++p)t[f+p]=t[h+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}$n.prototype.ValueTypeName="";$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=zc;class gr extends $n{constructor(e,t,i){super(e,t,i)}}gr.prototype.ValueTypeName="bool";gr.prototype.ValueBufferType=Array;gr.prototype.DefaultInterpolation=da;gr.prototype.InterpolantFactoryMethodLinear=void 0;gr.prototype.InterpolantFactoryMethodSmooth=void 0;class Mp extends $n{constructor(e,t,i,s){super(e,t,i,s)}}Mp.prototype.ValueTypeName="color";class va extends $n{constructor(e,t,i,s){super(e,t,i,s)}}va.prototype.ValueTypeName="number";class lx extends Ua{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Hn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class ro extends $n{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new lx(this.times,this.values,this.getValueSize(),e)}}ro.prototype.ValueTypeName="quaternion";ro.prototype.InterpolantFactoryMethodSmooth=void 0;class _r extends $n{constructor(e,t,i){super(e,t,i)}}_r.prototype.ValueTypeName="string";_r.prototype.ValueBufferType=Array;_r.prototype.DefaultInterpolation=da;_r.prototype.InterpolantFactoryMethodLinear=void 0;_r.prototype.InterpolantFactoryMethodSmooth=void 0;class dr extends $n{constructor(e,t,i,s){super(e,t,i,s)}}dr.prototype.ValueTypeName="vector";class tf{constructor(e="",t=-1,i=[],s=$_){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Qi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(ux(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=i.length;r!==o;++r)t.push($n.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=sx(l);l=ef(l,1,u),c=ef(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new va(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(nt("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return gt("AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,p,_,M){if(p.length!==0){const m=[],d=[];vp(p,m,d,_),m.length!==0&&M.push(new h(f,m,d))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let M=0;M<f[_].morphTargets.length;M++)p[f[_].morphTargets[M]]=-1;for(const M in p){const m=[],d=[];for(let R=0;R!==f[_].morphTargets.length;++R){const D=f[_];m.push(D.time),d.push(D.morphTarget===M?1:0)}s.push(new va(".morphTargetInfluence["+M+"]",m,d))}l=p.length*o}else{const p=".bones["+t[h].name+"]";i(dr,p+".position",f,"pos",s),i(ro,p+".quaternion",f,"rot",s),i(dr,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function cx(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return va;case"vector":case"vector2":case"vector3":case"vector4":return dr;case"color":return Mp;case"quaternion":return ro;case"bool":case"boolean":return gr;case"string":return _r}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function ux(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=cx(n.type);if(n.times===void 0){const t=[],i=[];vp(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Hr={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class hx{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],_=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const yp=new hx;class $i{constructor(e){this.manager=e!==void 0?e:yp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}$i.DEFAULT_MATERIAL_NAME="__DEFAULT";const Mi={};class fx extends Error{constructor(e,t){super(e),this.response=t}}class Du extends $i{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Hr.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Mi[e]!==void 0){Mi[e].push({onLoad:t,onProgress:i,onError:s});return}Mi[e]=[],Mi[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&nt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Mi[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,_=p!==0;let M=0;const m=new ReadableStream({start(d){R();function R(){h.read().then(({done:D,value:E})=>{if(D)d.close();else{M+=E.byteLength;const S=new ProgressEvent("progress",{lengthComputable:_,loaded:M,total:p});for(let L=0,N=u.length;L<N;L++){const F=u[L];F.onProgress&&F.onProgress(S)}d.enqueue(E),R()}},D=>{d.error(D)})}}});return new Response(m)}else throw new fx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{Hr.add(`file:${e}`,c);const u=Mi[e];delete Mi[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Mi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Mi[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ks=new WeakMap;class dx extends $i{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Hr.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=ks.get(o);h===void 0&&(h=[],ks.set(o,h)),h.push({onLoad:t,onError:s})}return o}const a=$r("img");function l(){u(),t&&t(this);const h=ks.get(this)||[];for(let f=0;f<h.length;f++){const p=h[f];p.onLoad&&p.onLoad(this)}ks.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),Hr.remove(`image:${e}`);const f=ks.get(this)||[];for(let p=0;p<f.length;p++){const _=f[p];_.onError&&_.onError(h)}ks.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Hr.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class px extends $i{constructor(e){super(e)}load(e,t,i,s){const r=this,o=new Au,a=new Du(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(u){if(s!==void 0)s(u);else{u(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Nn,o.wrapT=c.wrapT!==void 0?c.wrapT:Nn,o.magFilter=c.magFilter!==void 0?c.magFilter:Yt,o.minFilter=c.minFilter!==void 0?c.minFilter:Yt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Ei),c.mipmapCount===1&&(o.minFilter=Yt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},i,s),o}}class Sp extends $i{constructor(e){super(e)}load(e,t,i,s){const r=new fn,o=new dx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Fa extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Dl=new lt,nf=new X,sf=new X;class Lu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ru,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;nf.setFromMatrixPosition(e.matrixWorld),t.position.copy(nf),sf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sf),t.updateMatrixWorld(),Dl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Dl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class mx extends Lu{constructor(){super(new cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=hr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class gx extends Fa{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new mx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class _x extends Lu{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0}}class xx extends Fa{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new _x}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Oa extends fp{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class vx extends Lu{constructor(){super(new Oa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bp extends Fa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new vx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Ep extends Fa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Tp{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Mx extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const rf=new lt;class yx{constructor(e,t,i=0,s=1/0){this.ray=new so(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Tu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):gt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return rf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rf),this}intersectObject(e,t=!0,i=[]){return Hc(e,this,i,t),i.sort(of),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Hc(e[s],this,i,t);return i.sort(of),i}}function of(n,e){return n.distance-e.distance}function Hc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Hc(r[o],e,t,!0)}}class af{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=_t(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(_t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Sx extends Jr{constructor(e=10,t=10,i=4473924,s=8947848){i=new ht(i),s=new ht(s);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,p=0,_=-a;f<=t;f++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const M=f===r?i:s;M.toArray(c,p),p+=3,M.toArray(c,p),p+=3,M.toArray(c,p),p+=3,M.toArray(c,p),p+=3}const u=new Qt;u.setAttribute("position",new At(l,3)),u.setAttribute("color",new At(c,3));const h=new _s({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class bx extends Jr{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new Qt;s.setAttribute("position",new At(t,3)),s.setAttribute("color",new At(i,3));const r=new _s({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,i){const s=new ht,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(i),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ex extends xs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){nt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function lf(n,e,t,i){const s=Tx(i);switch(t){case ip:return n*e;case rp:return n*e/s.components*s.byteLength;case _u:return n*e/s.components*s.byteLength;case cr:return n*e*2/s.components*s.byteLength;case xu:return n*e*2/s.components*s.byteLength;case sp:return n*e*3/s.components*s.byteLength;case Bn:return n*e*4/s.components*s.byteLength;case vu:return n*e*4/s.components*s.byteLength;case ta:case na:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ia:case sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case uc:case fc:return Math.max(n,16)*Math.max(e,8)/4;case cc:case hc:return Math.max(n,8)*Math.max(e,8)/2;case dc:case pc:case gc:case _c:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case mc:case xc:case vc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Mc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Sc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case bc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case wc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Rc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Pc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Dc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Lc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Nc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ic:case Uc:case Fc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Oc:case Bc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case kc:case Vc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tx(n){switch(n){case Pn:case Qd:return{byteLength:1,components:1};case Yr:case ep:case Di:return{byteLength:2,components:1};case mu:case gu:return{byteLength:2,components:4};case ci:case pu:case jn:return{byteLength:4,components:1};case tp:case np:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:du}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=du);function Ap(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Ax(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<h.length;p++){const _=h[f],M=h[p];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++f,h[f]=M)}h.length=f+1;for(let p=0,_=h.length;p<_;p++){const M=h[p];n.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var wx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rx=`#ifdef USE_ALPHAHASH
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
#endif`,Cx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Px=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nx=`#ifdef USE_AOMAP
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
#endif`,Ix=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ux=`#ifdef USE_BATCHING
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
#endif`,Fx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ox=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vx=`#ifdef USE_IRIDESCENCE
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
#endif`,zx=`#ifdef USE_BUMPMAP
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
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$x=`#define PI 3.141592653589793
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
} // validated`,Zx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jx=`vec3 transformedNormal = objectNormal;
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
#endif`,Qx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ev=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iv="gl_FragColor = linearToOutputTexel( gl_FragColor );",sv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rv=`#ifdef USE_ENVMAP
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
#endif`,ov=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,av=`#ifdef USE_ENVMAP
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
#endif`,lv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cv=`#ifdef USE_ENVMAP
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
#endif`,uv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pv=`#ifdef USE_GRADIENTMAP
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
}`,mv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_v=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xv=`uniform bool receiveShadow;
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
#endif`,vv=`#ifdef USE_ENVMAP
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
#endif`,Mv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ev=`PhysicalMaterial material;
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
#endif`,Tv=`uniform sampler2D dfgLUT;
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
}`,Av=`
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
#endif`,wv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Iv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fv=`#if defined( USE_POINTS_UV )
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
#endif`,Ov=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hv=`#ifdef USE_MORPHTARGETS
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
#endif`,Gv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kv=`#ifdef USE_NORMALMAP
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
#endif`,$v=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hM=`float getShadowMask() {
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
}`,fM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dM=`#ifdef USE_SKINNING
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
#endif`,pM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mM=`#ifdef USE_SKINNING
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
#endif`,gM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_M=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,MM=`#ifdef USE_TRANSMISSION
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
#endif`,yM=`#ifdef USE_TRANSMISSION
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
#endif`,SM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,EM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const AM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wM=`uniform sampler2D t2D;
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
}`,RM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,PM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LM=`#include <common>
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
}`,NM=`#if DEPTH_PACKING == 3200
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
}`,IM=`#define DISTANCE
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
}`,UM=`#define DISTANCE
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
}`,FM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BM=`uniform float scale;
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
}`,kM=`uniform vec3 diffuse;
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
}`,VM=`#include <common>
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
}`,zM=`uniform vec3 diffuse;
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
}`,HM=`#define LAMBERT
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
}`,GM=`#define LAMBERT
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
}`,WM=`#define MATCAP
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
}`,XM=`#define MATCAP
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
}`,qM=`#define NORMAL
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
}`,jM=`#define NORMAL
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
}`,YM=`#define PHONG
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
}`,KM=`#define PHONG
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
}`,$M=`#define STANDARD
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
}`,ZM=`#define STANDARD
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
}`,JM=`#define TOON
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
}`,QM=`#define TOON
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
}`,ey=`uniform float size;
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
}`,ty=`uniform vec3 diffuse;
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
}`,ny=`#include <common>
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
}`,iy=`uniform vec3 color;
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
}`,sy=`uniform float rotation;
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
}`,ry=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:wx,alphahash_pars_fragment:Rx,alphamap_fragment:Cx,alphamap_pars_fragment:Px,alphatest_fragment:Dx,alphatest_pars_fragment:Lx,aomap_fragment:Nx,aomap_pars_fragment:Ix,batching_pars_vertex:Ux,batching_vertex:Fx,begin_vertex:Ox,beginnormal_vertex:Bx,bsdfs:kx,iridescence_fragment:Vx,bumpmap_pars_fragment:zx,clipping_planes_fragment:Hx,clipping_planes_pars_fragment:Gx,clipping_planes_pars_vertex:Wx,clipping_planes_vertex:Xx,color_fragment:qx,color_pars_fragment:jx,color_pars_vertex:Yx,color_vertex:Kx,common:$x,cube_uv_reflection_fragment:Zx,defaultnormal_vertex:Jx,displacementmap_pars_vertex:Qx,displacementmap_vertex:ev,emissivemap_fragment:tv,emissivemap_pars_fragment:nv,colorspace_fragment:iv,colorspace_pars_fragment:sv,envmap_fragment:rv,envmap_common_pars_fragment:ov,envmap_pars_fragment:av,envmap_pars_vertex:lv,envmap_physical_pars_fragment:vv,envmap_vertex:cv,fog_vertex:uv,fog_pars_vertex:hv,fog_fragment:fv,fog_pars_fragment:dv,gradientmap_pars_fragment:pv,lightmap_pars_fragment:mv,lights_lambert_fragment:gv,lights_lambert_pars_fragment:_v,lights_pars_begin:xv,lights_toon_fragment:Mv,lights_toon_pars_fragment:yv,lights_phong_fragment:Sv,lights_phong_pars_fragment:bv,lights_physical_fragment:Ev,lights_physical_pars_fragment:Tv,lights_fragment_begin:Av,lights_fragment_maps:wv,lights_fragment_end:Rv,logdepthbuf_fragment:Cv,logdepthbuf_pars_fragment:Pv,logdepthbuf_pars_vertex:Dv,logdepthbuf_vertex:Lv,map_fragment:Nv,map_pars_fragment:Iv,map_particle_fragment:Uv,map_particle_pars_fragment:Fv,metalnessmap_fragment:Ov,metalnessmap_pars_fragment:Bv,morphinstance_vertex:kv,morphcolor_vertex:Vv,morphnormal_vertex:zv,morphtarget_pars_vertex:Hv,morphtarget_vertex:Gv,normal_fragment_begin:Wv,normal_fragment_maps:Xv,normal_pars_fragment:qv,normal_pars_vertex:jv,normal_vertex:Yv,normalmap_pars_fragment:Kv,clearcoat_normal_fragment_begin:$v,clearcoat_normal_fragment_maps:Zv,clearcoat_pars_fragment:Jv,iridescence_pars_fragment:Qv,opaque_fragment:eM,packing:tM,premultiplied_alpha_fragment:nM,project_vertex:iM,dithering_fragment:sM,dithering_pars_fragment:rM,roughnessmap_fragment:oM,roughnessmap_pars_fragment:aM,shadowmap_pars_fragment:lM,shadowmap_pars_vertex:cM,shadowmap_vertex:uM,shadowmask_pars_fragment:hM,skinbase_vertex:fM,skinning_pars_vertex:dM,skinning_vertex:pM,skinnormal_vertex:mM,specularmap_fragment:gM,specularmap_pars_fragment:_M,tonemapping_fragment:xM,tonemapping_pars_fragment:vM,transmission_fragment:MM,transmission_pars_fragment:yM,uv_pars_fragment:SM,uv_pars_vertex:bM,uv_vertex:EM,worldpos_vertex:TM,background_vert:AM,background_frag:wM,backgroundCube_vert:RM,backgroundCube_frag:CM,cube_vert:PM,cube_frag:DM,depth_vert:LM,depth_frag:NM,distance_vert:IM,distance_frag:UM,equirect_vert:FM,equirect_frag:OM,linedashed_vert:BM,linedashed_frag:kM,meshbasic_vert:VM,meshbasic_frag:zM,meshlambert_vert:HM,meshlambert_frag:GM,meshmatcap_vert:WM,meshmatcap_frag:XM,meshnormal_vert:qM,meshnormal_frag:jM,meshphong_vert:YM,meshphong_frag:KM,meshphysical_vert:$M,meshphysical_frag:ZM,meshtoon_vert:JM,meshtoon_frag:QM,points_vert:ey,points_frag:ty,shadow_vert:ny,shadow_frag:iy,sprite_vert:sy,sprite_frag:ry},Ue={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},ni={basic:{uniforms:_n([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:_n([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new ht(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:_n([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:_n([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:_n([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new ht(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:_n([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:_n([Ue.points,Ue.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:_n([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:_n([Ue.common,Ue.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:_n([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:_n([Ue.sprite,Ue.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:_n([Ue.common,Ue.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:_n([Ue.lights,Ue.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};ni.physical={uniforms:_n([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Ho={r:0,b:0,g:0},os=new Tn,oy=new lt;function ay(n,e,t,i,s,r,o){const a=new ht(0);let l=r===!0?0:1,c,u,h=null,f=0,p=null;function _(D){let E=D.isScene===!0?D.background:null;return E&&E.isTexture&&(E=(D.backgroundBlurriness>0?t:e).get(E)),E}function M(D){let E=!1;const S=_(D);S===null?d(a,l):S&&S.isColor&&(d(S,1),E=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(D,E){const S=_(E);S&&(S.isCubeTexture||S.mapping===Na)?(u===void 0&&(u=new nn(new Ms(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:fr(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,N,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),os.copy(E.backgroundRotation),os.x*=-1,os.y*=-1,os.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(oy.makeRotationFromEuler(os)),u.material.toneMapped=xt.getTransfer(S.colorSpace)!==Lt,(h!==S||f!==S.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,p=n.toneMapping),u.layers.enableAll(),D.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new nn(new Ia(2,2),new ui({name:"BackgroundMaterial",uniforms:fr(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=xt.getTransfer(S.colorSpace)!==Lt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,p=n.toneMapping),c.layers.enableAll(),D.unshift(c,c.geometry,c.material,0,0,null))}function d(D,E){D.getRGB(Ho,hp(n)),i.buffers.color.setClear(Ho.r,Ho.g,Ho.b,E,o)}function R(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(D,E=1){a.set(D),l=E,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(D){l=D,d(a,l)},render:M,addToRenderList:m,dispose:R}}function ly(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(b,I,B,k,K){let $=!1;const V=h(k,B,I);r!==V&&(r=V,c(r.object)),$=p(b,k,B,K),$&&_(b,k,B,K),K!==null&&e.update(K,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,E(b,I,B,k),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function h(b,I,B){const k=B.wireframe===!0;let K=i[b.id];K===void 0&&(K={},i[b.id]=K);let $=K[I.id];$===void 0&&($={},K[I.id]=$);let V=$[k];return V===void 0&&(V=f(l()),$[k]=V),V}function f(b){const I=[],B=[],k=[];for(let K=0;K<t;K++)I[K]=0,B[K]=0,k[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:k,object:b,attributes:{},index:null}}function p(b,I,B,k){const K=r.attributes,$=I.attributes;let V=0;const W=B.getAttributes();for(const Y in W)if(W[Y].location>=0){const ge=K[Y];let me=$[Y];if(me===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(me=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(me=b.instanceColor)),ge===void 0||ge.attribute!==me||me&&ge.data!==me.data)return!0;V++}return r.attributesNum!==V||r.index!==k}function _(b,I,B,k){const K={},$=I.attributes;let V=0;const W=B.getAttributes();for(const Y in W)if(W[Y].location>=0){let ge=$[Y];ge===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(ge=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(ge=b.instanceColor));const me={};me.attribute=ge,ge&&ge.data&&(me.data=ge.data),K[Y]=me,V++}r.attributes=K,r.attributesNum=V,r.index=k}function M(){const b=r.newAttributes;for(let I=0,B=b.length;I<B;I++)b[I]=0}function m(b){d(b,0)}function d(b,I){const B=r.newAttributes,k=r.enabledAttributes,K=r.attributeDivisors;B[b]=1,k[b]===0&&(n.enableVertexAttribArray(b),k[b]=1),K[b]!==I&&(n.vertexAttribDivisor(b,I),K[b]=I)}function R(){const b=r.newAttributes,I=r.enabledAttributes;for(let B=0,k=I.length;B<k;B++)I[B]!==b[B]&&(n.disableVertexAttribArray(B),I[B]=0)}function D(b,I,B,k,K,$,V){V===!0?n.vertexAttribIPointer(b,I,B,K,$):n.vertexAttribPointer(b,I,B,k,K,$)}function E(b,I,B,k){M();const K=k.attributes,$=B.getAttributes(),V=I.defaultAttributeValues;for(const W in $){const Y=$[W];if(Y.location>=0){let pe=K[W];if(pe===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(pe=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(pe=b.instanceColor)),pe!==void 0){const ge=pe.normalized,me=pe.itemSize,Le=e.get(pe);if(Le===void 0)continue;const Ee=Le.buffer,ke=Le.type,Ce=Le.bytesPerElement,q=ke===n.INT||ke===n.UNSIGNED_INT||pe.gpuType===pu;if(pe.isInterleavedBufferAttribute){const te=pe.data,Se=te.stride,Qe=pe.offset;if(te.isInstancedInterleavedBuffer){for(let Oe=0;Oe<Y.locationSize;Oe++)d(Y.location+Oe,te.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Oe=0;Oe<Y.locationSize;Oe++)m(Y.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let Oe=0;Oe<Y.locationSize;Oe++)D(Y.location+Oe,me/Y.locationSize,ke,ge,Se*Ce,(Qe+me/Y.locationSize*Oe)*Ce,q)}else{if(pe.isInstancedBufferAttribute){for(let te=0;te<Y.locationSize;te++)d(Y.location+te,pe.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let te=0;te<Y.locationSize;te++)m(Y.location+te);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let te=0;te<Y.locationSize;te++)D(Y.location+te,me/Y.locationSize,ke,ge,me*Ce,me/Y.locationSize*te*Ce,q)}}else if(V!==void 0){const ge=V[W];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(Y.location,ge);break;case 3:n.vertexAttrib3fv(Y.location,ge);break;case 4:n.vertexAttrib4fv(Y.location,ge);break;default:n.vertexAttrib1fv(Y.location,ge)}}}}R()}function S(){F();for(const b in i){const I=i[b];for(const B in I){const k=I[B];for(const K in k)u(k[K].object),delete k[K];delete I[B]}delete i[b]}}function L(b){if(i[b.id]===void 0)return;const I=i[b.id];for(const B in I){const k=I[B];for(const K in k)u(k[K].object),delete k[K];delete I[B]}delete i[b.id]}function N(b){for(const I in i){const B=i[I];if(B[b.id]===void 0)continue;const k=B[b.id];for(const K in k)u(k[K].object),delete k[K];delete B[b.id]}}function F(){v(),o=!0,r!==s&&(r=s,c(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:v,dispose:S,releaseStatesOfGeometry:L,releaseStatesOfProgram:N,initAttributes:M,enableAttribute:m,disableUnusedAttributes:R}}function cy(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];t.update(p,i,1)}function l(c,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let _=0;for(let M=0;M<h;M++)_+=u[M]*f[M];t.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function uy(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(N){return!(N!==Bn&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){const F=N===Di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Pn&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==jn&&!F)}function l(N){if(N==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(nt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),D=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),L=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:R,maxVaryings:D,maxFragmentUniforms:E,maxSamples:S,samples:L}}function hy(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Xi,a=new pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||s;return s=f,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const _=h.clippingPlanes,M=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const R=r?0:i,D=R*4;let E=d.clippingState||null;l.value=E,E=u(_,f,D,p);for(let S=0;S!==D;++S)E[S]=t[S];d.clippingState=E,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,_){const M=h!==null?h.length:0;let m=null;if(M!==0){if(m=l.value,_!==!0||m===null){const d=p+M*4,R=f.matrixWorldInverse;a.getNormalMatrix(R),(m===null||m.length<d)&&(m=new Float32Array(d));for(let D=0,E=p;D!==M;++D,E+=4)o.copy(h[D]).applyMatrix4(R,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}function fy(n){let e=new WeakMap;function t(o,a){return a===oc?o.mapping=gs:a===ac&&(o.mapping=lr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===oc||a===ac)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new pp(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const ji=4,cf=[.125,.215,.35,.446,.526,.582],hs=20,dy=256,Cr=new Oa,uf=new ht;let Ll=null,Nl=0,Il=0,Ul=!1;const py=new X;class hf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=py}=r;Ll=this._renderer.getRenderTarget(),Nl=this._renderer.getActiveCubeFace(),Il=this._renderer.getActiveMipmapLevel(),Ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=df(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ll,Nl,Il),this._renderer.xr.enabled=Ul,e.scissorTest=!1,Vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gs||e.mapping===lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ll=this._renderer.getRenderTarget(),Nl=this._renderer.getActiveCubeFace(),Il=this._renderer.getActiveMipmapLevel(),Ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:Di,format:Bn,colorSpace:ur,depthBuffer:!1},s=ff(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ff(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=my(r)),this._blurMaterial=_y(r,e,t),this._ggxMaterial=gy(r,e,t)}return s}_compileMaterial(e){const t=new nn(new Qt,e);this._renderer.compile(t,Cr)}_sceneToCubeUV(e,t,i,s,r){const l=new cn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(uf),h.toneMapping=oi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new nn(new Ms,new ga({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,m=M.material;let d=!1;const R=e.background;R?R.isColor&&(m.color.copy(R),e.background=null,d=!0):(m.color.copy(uf),d=!0);for(let D=0;D<6;D++){const E=D%3;E===0?(l.up.set(0,c[D],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[D],r.y,r.z)):E===1?(l.up.set(0,0,c[D]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[D],r.z)):(l.up.set(0,c[D],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[D]));const S=this._cubeSize;Vs(s,E*S,D>2?S:0,S,S),h.setRenderTarget(s),d&&h.render(M,l),h.render(e,l)}h.toneMapping=p,h.autoClear=f,e.background=R}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===gs||e.mapping===lr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=df());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Vs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Cr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,p=h*f,{_lodMax:_}=this,M=this._sizeLods[i],m=3*M*(i>_-ji?i-_+ji:0),d=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-t,Vs(r,m,d,3*M,2*M),s.setRenderTarget(r),s.render(a,Cr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,Vs(e,m,d,3*M,2*M),s.setRenderTarget(e),s.render(a,Cr)}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&gt("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[s];h.material=c;const f=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*hs-1),M=r/_,m=isFinite(r)?1+Math.floor(u*M):hs;m>hs&&nt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hs}`);const d=[];let R=0;for(let N=0;N<hs;++N){const F=N/M,v=Math.exp(-F*F/2);d.push(v),N===0?R+=v:N<m&&(R+=2*v)}for(let N=0;N<d.length;N++)d[N]=d[N]/R;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:D}=this;f.dTheta.value=_,f.mipInt.value=D-i;const E=this._sizeLods[s],S=3*E*(s>D-ji?s-D+ji:0),L=4*(this._cubeSize-E);Vs(t,S,L,3*E,2*E),l.setRenderTarget(t),l.render(h,Cr)}}function my(n){const e=[],t=[],i=[];let s=n;const r=n-ji+1+cf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-ji?l=cf[o-n+ji-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,M=3,m=2,d=1,R=new Float32Array(M*_*p),D=new Float32Array(m*_*p),E=new Float32Array(d*_*p);for(let L=0;L<p;L++){const N=L%3*2/3-1,F=L>2?0:-1,v=[N,F,0,N+2/3,F,0,N+2/3,F+1,0,N,F,0,N+2/3,F+1,0,N,F+1,0];R.set(v,M*_*L),D.set(f,m*_*L);const b=[L,L,L,L,L,L];E.set(b,d*_*L)}const S=new Qt;S.setAttribute("position",new In(R,M)),S.setAttribute("uv",new In(D,m)),S.setAttribute("faceIndex",new In(E,d)),i.push(new nn(S,null)),s>ji&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function ff(n,e,t){const i=new ai(n,e,t);return i.texture.mapping=Na,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vs(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function gy(n,e,t){return new ui({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:dy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ba(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function _y(n,e,t){const i=new Float32Array(hs),s=new X(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ba(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function df(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ba(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function pf(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Ba(){return`

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
	`}function xy(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===oc||l===ac,u=l===gs||l===lr;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new hf(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new hf(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function vy(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Zr("WebGLRenderer: "+i+" extension not supported."),s}}}function My(n,e,t,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,_=h.attributes.position;let M=0;if(p!==null){const R=p.array;M=p.version;for(let D=0,E=R.length;D<E;D+=3){const S=R[D+0],L=R[D+1],N=R[D+2];f.push(S,L,L,N,N,S)}}else if(_!==void 0){const R=_.array;M=_.version;for(let D=0,E=R.length/3-1;D<E;D+=3){const S=D+0,L=D+1,N=D+2;f.push(S,L,L,N,N,S)}}else return;const m=new(op(f)?up:cp)(f,1);m.version=M;const d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function yy(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*o),t.update(p,i,1)}function c(f,p,_){_!==0&&(n.drawElementsInstanced(i,p,r,f*o,_),t.update(p,i,_))}function u(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];t.update(m,i,1)}function h(f,p,_,M){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],M[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,M,0,_);let d=0;for(let R=0;R<_;R++)d+=p[R]*M[R];t.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Sy(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:gt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function by(n,e,t){const i=new WeakMap,s=new Ot;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let b=function(){F.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var p=b;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],R=a.morphAttributes.normal||[],D=a.morphAttributes.color||[];let E=0;_===!0&&(E=1),M===!0&&(E=2),m===!0&&(E=3);let S=a.attributes.position.count*E,L=1;S>e.maxTextureSize&&(L=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const N=new Float32Array(S*L*4*h),F=new ap(N,S,L,h);F.type=jn,F.needsUpdate=!0;const v=E*4;for(let I=0;I<h;I++){const B=d[I],k=R[I],K=D[I],$=S*L*4*I;for(let V=0;V<B.count;V++){const W=V*v;_===!0&&(s.fromBufferAttribute(B,V),N[$+W+0]=s.x,N[$+W+1]=s.y,N[$+W+2]=s.z,N[$+W+3]=0),M===!0&&(s.fromBufferAttribute(k,V),N[$+W+4]=s.x,N[$+W+5]=s.y,N[$+W+6]=s.z,N[$+W+7]=0),m===!0&&(s.fromBufferAttribute(K,V),N[$+W+8]=s.x,N[$+W+9]=s.y,N[$+W+10]=s.z,N[$+W+11]=K.itemSize===4?s.w:1)}}f={count:h,texture:F,size:new ot(S,L)},i.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const M=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",M),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Ey(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Ty={[Xd]:"LINEAR_TONE_MAPPING",[qd]:"REINHARD_TONE_MAPPING",[jd]:"CINEON_TONE_MAPPING",[Yd]:"ACES_FILMIC_TONE_MAPPING",[$d]:"AGX_TONE_MAPPING",[Zd]:"NEUTRAL_TONE_MAPPING",[Kd]:"CUSTOM_TONE_MAPPING"};function Ay(n,e,t,i,s){const r=new ai(e,t,{type:n,depthBuffer:i,stencilBuffer:s}),o=new ai(e,t,{type:Di,depthBuffer:!1,stencilBuffer:!1}),a=new Qt;a.setAttribute("position",new At([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new At([0,2,0,0,2,0],2));const l=new ex({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new nn(a,l),u=new Oa(-1,1,1,-1,0,1);let h=null,f=null,p=!1,_,M=null,m=[],d=!1;this.setSize=function(R,D){r.setSize(R,D),o.setSize(R,D);for(let E=0;E<m.length;E++){const S=m[E];S.setSize&&S.setSize(R,D)}},this.setEffects=function(R){m=R,d=m.length>0&&m[0].isRenderPass===!0;const D=r.width,E=r.height;for(let S=0;S<m.length;S++){const L=m[S];L.setSize&&L.setSize(D,E)}},this.begin=function(R,D){if(p||R.toneMapping===oi&&m.length===0)return!1;if(M=D,D!==null){const E=D.width,S=D.height;(r.width!==E||r.height!==S)&&this.setSize(E,S)}return d===!1&&R.setRenderTarget(r),_=R.toneMapping,R.toneMapping=oi,!0},this.hasRenderPass=function(){return d},this.end=function(R,D){R.toneMapping=_,p=!0;let E=r,S=o;for(let L=0;L<m.length;L++){const N=m[L];if(N.enabled!==!1&&(N.render(R,S,E,D),N.needsSwap!==!1)){const F=E;E=S,S=F}}if(h!==R.outputColorSpace||f!==R.toneMapping){h=R.outputColorSpace,f=R.toneMapping,l.defines={},xt.getTransfer(h)===Lt&&(l.defines.SRGB_TRANSFER="");const L=Ty[f];L&&(l.defines[L]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,R.setRenderTarget(M),R.render(c,u),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const wp=new fn,Gc=new Qr(1,1),Rp=new ap,Cp=new C0,Pp=new dp,mf=[],gf=[],_f=new Float32Array(16),xf=new Float32Array(9),vf=new Float32Array(4);function xr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=mf[s];if(r===void 0&&(r=new Float32Array(s),mf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function $t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ka(n,e){let t=gf[e];t===void 0&&(t=new Int32Array(e),gf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function wy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ry(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2fv(this.addr,e),$t(t,e)}}function Cy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;n.uniform3fv(this.addr,e),$t(t,e)}}function Py(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4fv(this.addr,e),$t(t,e)}}function Dy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Kt(t,i))return;vf.set(i),n.uniformMatrix2fv(this.addr,!1,vf),$t(t,i)}}function Ly(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Kt(t,i))return;xf.set(i),n.uniformMatrix3fv(this.addr,!1,xf),$t(t,i)}}function Ny(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Kt(t,i))return;_f.set(i),n.uniformMatrix4fv(this.addr,!1,_f),$t(t,i)}}function Iy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Uy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2iv(this.addr,e),$t(t,e)}}function Fy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;n.uniform3iv(this.addr,e),$t(t,e)}}function Oy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4iv(this.addr,e),$t(t,e)}}function By(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ky(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2uiv(this.addr,e),$t(t,e)}}function Vy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;n.uniform3uiv(this.addr,e),$t(t,e)}}function zy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4uiv(this.addr,e),$t(t,e)}}function Hy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Gc.compareFunction=t.isReversedDepthBuffer()?Su:yu,r=Gc):r=wp,t.setTexture2D(e||r,s)}function Gy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Cp,s)}function Wy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Pp,s)}function Xy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Rp,s)}function qy(n){switch(n){case 5126:return wy;case 35664:return Ry;case 35665:return Cy;case 35666:return Py;case 35674:return Dy;case 35675:return Ly;case 35676:return Ny;case 5124:case 35670:return Iy;case 35667:case 35671:return Uy;case 35668:case 35672:return Fy;case 35669:case 35673:return Oy;case 5125:return By;case 36294:return ky;case 36295:return Vy;case 36296:return zy;case 35678:case 36198:case 36298:case 36306:case 35682:return Hy;case 35679:case 36299:case 36307:return Gy;case 35680:case 36300:case 36308:case 36293:return Wy;case 36289:case 36303:case 36311:case 36292:return Xy}}function jy(n,e){n.uniform1fv(this.addr,e)}function Yy(n,e){const t=xr(e,this.size,2);n.uniform2fv(this.addr,t)}function Ky(n,e){const t=xr(e,this.size,3);n.uniform3fv(this.addr,t)}function $y(n,e){const t=xr(e,this.size,4);n.uniform4fv(this.addr,t)}function Zy(n,e){const t=xr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Jy(n,e){const t=xr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Qy(n,e){const t=xr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function eS(n,e){n.uniform1iv(this.addr,e)}function tS(n,e){n.uniform2iv(this.addr,e)}function nS(n,e){n.uniform3iv(this.addr,e)}function iS(n,e){n.uniform4iv(this.addr,e)}function sS(n,e){n.uniform1uiv(this.addr,e)}function rS(n,e){n.uniform2uiv(this.addr,e)}function oS(n,e){n.uniform3uiv(this.addr,e)}function aS(n,e){n.uniform4uiv(this.addr,e)}function lS(n,e,t){const i=this.cache,s=e.length,r=ka(t,s);Kt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Gc:o=wp;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function cS(n,e,t){const i=this.cache,s=e.length,r=ka(t,s);Kt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Cp,r[o])}function uS(n,e,t){const i=this.cache,s=e.length,r=ka(t,s);Kt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Pp,r[o])}function hS(n,e,t){const i=this.cache,s=e.length,r=ka(t,s);Kt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Rp,r[o])}function fS(n){switch(n){case 5126:return jy;case 35664:return Yy;case 35665:return Ky;case 35666:return $y;case 35674:return Zy;case 35675:return Jy;case 35676:return Qy;case 5124:case 35670:return eS;case 35667:case 35671:return tS;case 35668:case 35672:return nS;case 35669:case 35673:return iS;case 5125:return sS;case 36294:return rS;case 36295:return oS;case 36296:return aS;case 35678:case 36198:case 36298:case 36306:case 35682:return lS;case 35679:case 36299:case 36307:return cS;case 35680:case 36300:case 36308:case 36293:return uS;case 36289:case 36303:case 36311:case 36292:return hS}}class dS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=qy(t.type)}}class pS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fS(t.type)}}class mS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Fl=/(\w+)(\])?(\[|\.)?/g;function Mf(n,e){n.seq.push(e),n.map[e.id]=e}function gS(n,e,t){const i=n.name,s=i.length;for(Fl.lastIndex=0;;){const r=Fl.exec(i),o=Fl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Mf(t,c===void 0?new dS(a,n,e):new pS(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new mS(a),Mf(t,h)),t=h}}}class ra{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);gS(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function yf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const _S=37297;let xS=0;function vS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Sf=new pt;function MS(n){xt._getMatrix(Sf,xt.workingColorSpace,n);const e=`mat3( ${Sf.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(n)){case pa:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function bf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+vS(n.getShaderSource(e),a)}else return r}function yS(n,e){const t=MS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const SS={[Xd]:"Linear",[qd]:"Reinhard",[jd]:"Cineon",[Yd]:"ACESFilmic",[$d]:"AgX",[Zd]:"Neutral",[Kd]:"Custom"};function bS(n,e){const t=SS[e];return t===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Go=new X;function ES(){xt.getLuminanceCoefficients(Go);const n=Go.x.toFixed(4),e=Go.y.toFixed(4),t=Go.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nr).join(`
`)}function AS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function wS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Nr(n){return n!==""}function Ef(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const RS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wc(n){return n.replace(RS,PS)}const CS=new Map;function PS(n,e){let t=mt[e];if(t===void 0){const i=CS.get(e);if(i!==void 0)t=mt[i],nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wc(t)}const DS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Af(n){return n.replace(DS,LS)}function LS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const NS={[ea]:"SHADOWMAP_TYPE_PCF",[Lr]:"SHADOWMAP_TYPE_VSM"};function IS(n){return NS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const US={[gs]:"ENVMAP_TYPE_CUBE",[lr]:"ENVMAP_TYPE_CUBE",[Na]:"ENVMAP_TYPE_CUBE_UV"};function FS(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":US[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const OS={[lr]:"ENVMAP_MODE_REFRACTION"};function BS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":OS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const kS={[La]:"ENVMAP_BLENDING_MULTIPLY",[q_]:"ENVMAP_BLENDING_MIX",[j_]:"ENVMAP_BLENDING_ADD"};function VS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":kS[n.combine]||"ENVMAP_BLENDING_NONE"}function zS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function HS(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=IS(t),c=FS(t),u=BS(t),h=VS(t),f=zS(t),p=TS(t),_=AS(r),M=s.createProgram();let m,d,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Nr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Nr).join(`
`),d.length>0&&(d+=`
`)):(m=[wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nr).join(`
`),d=[wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?mt.tonemapping_pars_fragment:"",t.toneMapping!==oi?bS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,yS("linearToOutputTexel",t.outputColorSpace),ES(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Nr).join(`
`)),o=Wc(o),o=Ef(o,t),o=Tf(o,t),a=Wc(a),a=Ef(a,t),a=Tf(a,t),o=Af(o),a=Af(a),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const D=R+m+o,E=R+d+a,S=yf(s,s.VERTEX_SHADER,D),L=yf(s,s.FRAGMENT_SHADER,E);s.attachShader(M,S),s.attachShader(M,L),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function N(I){if(n.debug.checkShaderErrors){const B=s.getProgramInfoLog(M)||"",k=s.getShaderInfoLog(S)||"",K=s.getShaderInfoLog(L)||"",$=B.trim(),V=k.trim(),W=K.trim();let Y=!0,pe=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,S,L);else{const ge=bf(s,S,"vertex"),me=bf(s,L,"fragment");gt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+$+`
`+ge+`
`+me)}else $!==""?nt("WebGLProgram: Program Info Log:",$):(V===""||W==="")&&(pe=!1);pe&&(I.diagnostics={runnable:Y,programLog:$,vertexShader:{log:V,prefix:m},fragmentShader:{log:W,prefix:d}})}s.deleteShader(S),s.deleteShader(L),F=new ra(s,M),v=wS(s,M)}let F;this.getUniforms=function(){return F===void 0&&N(this),F};let v;this.getAttributes=function(){return v===void 0&&N(this),v};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(M,_S)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xS++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=S,this.fragmentShader=L,this}let GS=0;class WS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new XS(e),t.set(e,i)),i}}class XS{constructor(e){this.id=GS++,this.code=e,this.usedTimes=0}}function qS(n,e,t,i,s,r,o){const a=new Tu,l=new WS,c=new Set,u=[],h=new Map,f=s.logarithmicDepthBuffer;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,b,I,B,k){const K=B.fog,$=k.geometry,V=v.isMeshStandardMaterial?B.environment:null,W=(v.isMeshStandardMaterial?t:e).get(v.envMap||V),Y=W&&W.mapping===Na?W.image.height:null,pe=_[v.type];v.precision!==null&&(p=s.getMaxPrecision(v.precision),p!==v.precision&&nt("WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const ge=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,me=ge!==void 0?ge.length:0;let Le=0;$.morphAttributes.position!==void 0&&(Le=1),$.morphAttributes.normal!==void 0&&(Le=2),$.morphAttributes.color!==void 0&&(Le=3);let Ee,ke,Ce,q;if(pe){const ft=ni[pe];Ee=ft.vertexShader,ke=ft.fragmentShader}else Ee=v.vertexShader,ke=v.fragmentShader,l.update(v),Ce=l.getVertexShaderID(v),q=l.getFragmentShaderID(v);const te=n.getRenderTarget(),Se=n.state.buffers.depth.getReversed(),Qe=k.isInstancedMesh===!0,Oe=k.isBatchedMesh===!0,vt=!!v.map,O=!!v.matcap,H=!!W,Q=!!v.aoMap,le=!!v.lightMap,se=!!v.bumpMap,ce=!!v.normalMap,U=!!v.displacementMap,_e=!!v.emissiveMap,he=!!v.metalnessMap,ae=!!v.roughnessMap,fe=v.anisotropy>0,A=v.clearcoat>0,g=v.dispersion>0,z=v.iridescence>0,ee=v.sheen>0,oe=v.transmission>0,J=fe&&!!v.anisotropyMap,Ie=A&&!!v.clearcoatMap,Me=A&&!!v.clearcoatNormalMap,Be=A&&!!v.clearcoatRoughnessMap,Ke=z&&!!v.iridescenceMap,xe=z&&!!v.iridescenceThicknessMap,Ae=ee&&!!v.sheenColorMap,Pe=ee&&!!v.sheenRoughnessMap,Ve=!!v.specularMap,Te=!!v.specularColorMap,at=!!v.specularIntensityMap,G=oe&&!!v.transmissionMap,Fe=oe&&!!v.thicknessMap,be=!!v.gradientMap,Ge=!!v.alphaMap,ye=v.alphaTest>0,de=!!v.alphaHash,we=!!v.extensions;let rt=oi;v.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(rt=n.toneMapping);const Nt={shaderID:pe,shaderType:v.type,shaderName:v.name,vertexShader:Ee,fragmentShader:ke,defines:v.defines,customVertexShaderID:Ce,customFragmentShaderID:q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Oe,batchingColor:Oe&&k._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&k.instanceColor!==null,instancingMorph:Qe&&k.morphTexture!==null,outputColorSpace:te===null?n.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:ur,alphaToCoverage:!!v.alphaToCoverage,map:vt,matcap:O,envMap:H,envMapMode:H&&W.mapping,envMapCubeUVHeight:Y,aoMap:Q,lightMap:le,bumpMap:se,normalMap:ce,displacementMap:U,emissiveMap:_e,normalMapObjectSpace:ce&&v.normalMapType===J_,normalMapTangentSpace:ce&&v.normalMapType===Mu,metalnessMap:he,roughnessMap:ae,anisotropy:fe,anisotropyMap:J,clearcoat:A,clearcoatMap:Ie,clearcoatNormalMap:Me,clearcoatRoughnessMap:Be,dispersion:g,iridescence:z,iridescenceMap:Ke,iridescenceThicknessMap:xe,sheen:ee,sheenColorMap:Ae,sheenRoughnessMap:Pe,specularMap:Ve,specularColorMap:Te,specularIntensityMap:at,transmission:oe,transmissionMap:G,thicknessMap:Fe,gradientMap:be,opaque:v.transparent===!1&&v.blending===er&&v.alphaToCoverage===!1,alphaMap:Ge,alphaTest:ye,alphaHash:de,combine:v.combine,mapUv:vt&&M(v.map.channel),aoMapUv:Q&&M(v.aoMap.channel),lightMapUv:le&&M(v.lightMap.channel),bumpMapUv:se&&M(v.bumpMap.channel),normalMapUv:ce&&M(v.normalMap.channel),displacementMapUv:U&&M(v.displacementMap.channel),emissiveMapUv:_e&&M(v.emissiveMap.channel),metalnessMapUv:he&&M(v.metalnessMap.channel),roughnessMapUv:ae&&M(v.roughnessMap.channel),anisotropyMapUv:J&&M(v.anisotropyMap.channel),clearcoatMapUv:Ie&&M(v.clearcoatMap.channel),clearcoatNormalMapUv:Me&&M(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&M(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ke&&M(v.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&M(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&M(v.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&M(v.sheenRoughnessMap.channel),specularMapUv:Ve&&M(v.specularMap.channel),specularColorMapUv:Te&&M(v.specularColorMap.channel),specularIntensityMapUv:at&&M(v.specularIntensityMap.channel),transmissionMapUv:G&&M(v.transmissionMap.channel),thicknessMapUv:Fe&&M(v.thicknessMap.channel),alphaMapUv:Ge&&M(v.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(ce||fe),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!$.attributes.uv&&(vt||Ge),fog:!!K,useFog:v.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Se,skinning:k.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Le,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:rt,decodeVideoTexture:vt&&v.map.isVideoTexture===!0&&xt.getTransfer(v.map.colorSpace)===Lt,decodeVideoTextureEmissive:_e&&v.emissiveMap.isVideoTexture===!0&&xt.getTransfer(v.emissiveMap.colorSpace)===Lt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ii,flipSided:v.side===En,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:we&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&v.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Nt.vertexUv1s=c.has(1),Nt.vertexUv2s=c.has(2),Nt.vertexUv3s=c.has(3),c.clear(),Nt}function d(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)b.push(I),b.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(R(b,v),D(b,v),b.push(n.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function R(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function D(v,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),v.push(a.mask)}function E(v){const b=_[v.type];let I;if(b){const B=ni[b];I=H0.clone(B.uniforms)}else I=v.uniforms;return I}function S(v,b){let I=h.get(b);return I!==void 0?++I.usedTimes:(I=new HS(n,b,v,r),u.push(I),h.set(b,I)),I}function L(v){if(--v.usedTimes===0){const b=u.indexOf(v);u[b]=u[u.length-1],u.pop(),h.delete(v.cacheKey),v.destroy()}}function N(v){l.remove(v)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:E,acquireProgram:S,releaseProgram:L,releaseShaderCache:N,programs:u,dispose:F}}function jS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function YS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Rf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Cf(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,p,_,M,m){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:_,renderOrder:h.renderOrder,z:M,group:m},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=M,d.group=m),e++,d}function a(h,f,p,_,M,m){const d=o(h,f,p,_,M,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(h,f,p,_,M,m){const d=o(h,f,p,_,M,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||YS),i.length>1&&i.sort(f||Rf),s.length>1&&s.sort(f||Rf)}function u(){for(let h=e,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function KS(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Cf,n.set(i,[o])):s>=r.length?(o=new Cf,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function $S(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new ht};break;case"SpotLight":t={position:new X,direction:new X,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function ZS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let JS=0;function QS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function eb(n){const e=new $S,t=ZS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);const s=new X,r=new lt,o=new lt;function a(c){let u=0,h=0,f=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let p=0,_=0,M=0,m=0,d=0,R=0,D=0,E=0,S=0,L=0,N=0;c.sort(QS);for(let v=0,b=c.length;v<b;v++){const I=c[v],B=I.color,k=I.intensity,K=I.distance;let $=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===cr?$=I.shadow.map.texture:$=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=B.r*k,h+=B.g*k,f+=B.b*k;else if(I.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(I.sh.coefficients[V],k);N++}else if(I.isDirectionalLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const W=I.shadow,Y=t.get(I);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,i.directionalShadow[p]=Y,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=I.shadow.matrix,R++}i.directional[p]=V,p++}else if(I.isSpotLight){const V=e.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(B).multiplyScalar(k),V.distance=K,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,i.spot[M]=V;const W=I.shadow;if(I.map&&(i.spotLightMap[S]=I.map,S++,W.updateMatrices(I),I.castShadow&&L++),i.spotLightMatrix[M]=W.matrix,I.castShadow){const Y=t.get(I);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,i.spotShadow[M]=Y,i.spotShadowMap[M]=$,E++}M++}else if(I.isRectAreaLight){const V=e.get(I);V.color.copy(B).multiplyScalar(k),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=V,m++}else if(I.isPointLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){const W=I.shadow,Y=t.get(I);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,Y.shadowCameraNear=W.camera.near,Y.shadowCameraFar=W.camera.far,i.pointShadow[_]=Y,i.pointShadowMap[_]=$,i.pointShadowMatrix[_]=I.shadow.matrix,D++}i.point[_]=V,_++}else if(I.isHemisphereLight){const V=e.get(I);V.skyColor.copy(I.color).multiplyScalar(k),V.groundColor.copy(I.groundColor).multiplyScalar(k),i.hemi[d]=V,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ue.LTC_FLOAT_1,i.rectAreaLTC2=Ue.LTC_FLOAT_2):(i.rectAreaLTC1=Ue.LTC_HALF_1,i.rectAreaLTC2=Ue.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const F=i.hash;(F.directionalLength!==p||F.pointLength!==_||F.spotLength!==M||F.rectAreaLength!==m||F.hemiLength!==d||F.numDirectionalShadows!==R||F.numPointShadows!==D||F.numSpotShadows!==E||F.numSpotMaps!==S||F.numLightProbes!==N)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=m,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=D,i.pointShadowMap.length=D,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=D,i.spotLightMatrix.length=E+S-L,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=N,F.directionalLength=p,F.pointLength=_,F.spotLength=M,F.rectAreaLength=m,F.hemiLength=d,F.numDirectionalShadows=R,F.numPointShadows=D,F.numSpotShadows=E,F.numSpotMaps=S,F.numLightProbes=N,i.version=JS++)}function l(c,u){let h=0,f=0,p=0,_=0,M=0;const m=u.matrixWorldInverse;for(let d=0,R=c.length;d<R;d++){const D=c[d];if(D.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),h++}else if(D.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(D.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),p++}else if(D.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(D.matrixWorld),E.position.applyMatrix4(m),o.identity(),r.copy(D.matrixWorld),r.premultiply(m),o.extractRotation(r),E.halfWidth.set(D.width*.5,0,0),E.halfHeight.set(0,D.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(D.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(D.matrixWorld),E.position.applyMatrix4(m),f++}else if(D.isHemisphereLight){const E=i.hemi[M];E.direction.setFromMatrixPosition(D.matrixWorld),E.direction.transformDirection(m),M++}}}return{setup:a,setupView:l,state:i}}function Pf(n){const e=new eb(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function tb(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Pf(n),e.set(s,[a])):r>=o.length?(a=new Pf(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const nb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ib=`uniform sampler2D shadow_pass;
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
}`,sb=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],rb=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Df=new lt,Pr=new X,Ol=new X;function ob(n,e,t){let i=new Ru;const s=new ot,r=new ot,o=new Ot,a=new nx,l=new ix,c={},u=t.maxTextureSize,h={[Pi]:En,[En]:Pi,[ii]:ii},f=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:nb,fragmentShader:ib}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Qt;_.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new nn(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ea;let d=this.type;this.render=function(L,N,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;L.type===w_&&(nt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),L.type=ea);const v=n.getRenderTarget(),b=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Ti),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const k=d!==this.type;k&&N.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach($=>$.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,$=L.length;K<$;K++){const V=L[K],W=V.shadow;if(W===void 0){nt("WebGLShadowMap:",V,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const Y=W.getFrameExtents();if(s.multiply(Y),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,W.mapSize.y=r.y)),W.map===null||k===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Lr){if(V.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new ai(s.x,s.y,{format:cr,type:Di,minFilter:Yt,magFilter:Yt,generateMipmaps:!1}),W.map.texture.name=V.name+".shadowMap",W.map.depthTexture=new Qr(s.x,s.y,jn),W.map.depthTexture.name=V.name+".shadowMapDepth",W.map.depthTexture.format=Li,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=sn,W.map.depthTexture.magFilter=sn}else{V.isPointLight?(W.map=new pp(s.x),W.map.depthTexture=new Q0(s.x,ci)):(W.map=new ai(s.x,s.y),W.map.depthTexture=new Qr(s.x,s.y,ci)),W.map.depthTexture.name=V.name+".shadowMap",W.map.depthTexture.format=Li;const ge=n.state.buffers.depth.getReversed();this.type===ea?(W.map.depthTexture.compareFunction=ge?Su:yu,W.map.depthTexture.minFilter=Yt,W.map.depthTexture.magFilter=Yt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=sn,W.map.depthTexture.magFilter=sn)}W.camera.updateProjectionMatrix()}const pe=W.map.isWebGLCubeRenderTarget?6:1;for(let ge=0;ge<pe;ge++){if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,ge),n.clear();else{ge===0&&(n.setRenderTarget(W.map),n.clear());const me=W.getViewport(ge);o.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),B.viewport(o)}if(V.isPointLight){const me=W.camera,Le=W.matrix,Ee=V.distance||me.far;Ee!==me.far&&(me.far=Ee,me.updateProjectionMatrix()),Pr.setFromMatrixPosition(V.matrixWorld),me.position.copy(Pr),Ol.copy(me.position),Ol.add(sb[ge]),me.up.copy(rb[ge]),me.lookAt(Ol),me.updateMatrixWorld(),Le.makeTranslation(-Pr.x,-Pr.y,-Pr.z),Df.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Df,me.coordinateSystem,me.reversedDepth)}else W.updateMatrices(V);i=W.getFrustum(),E(N,F,W.camera,V,this.type)}W.isPointLightShadow!==!0&&this.type===Lr&&R(W,F),W.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(v,b,I)};function R(L,N){const F=e.update(M);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new ai(s.x,s.y,{format:cr,type:Di})),f.uniforms.shadow_pass.value=L.map.depthTexture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(N,null,F,f,M,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(N,null,F,p,M,null)}function D(L,N,F,v){let b=null;const I=F.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(I!==void 0)b=I;else if(b=F.isPointLight===!0?l:a,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const B=b.uuid,k=N.uuid;let K=c[B];K===void 0&&(K={},c[B]=K);let $=K[k];$===void 0&&($=b.clone(),K[k]=$,N.addEventListener("dispose",S)),b=$}if(b.visible=N.visible,b.wireframe=N.wireframe,v===Lr?b.side=N.shadowSide!==null?N.shadowSide:N.side:b.side=N.shadowSide!==null?N.shadowSide:h[N.side],b.alphaMap=N.alphaMap,b.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,b.map=N.map,b.clipShadows=N.clipShadows,b.clippingPlanes=N.clippingPlanes,b.clipIntersection=N.clipIntersection,b.displacementMap=N.displacementMap,b.displacementScale=N.displacementScale,b.displacementBias=N.displacementBias,b.wireframeLinewidth=N.wireframeLinewidth,b.linewidth=N.linewidth,F.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const B=n.properties.get(b);B.light=F}return b}function E(L,N,F,v,b){if(L.visible===!1)return;if(L.layers.test(N.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&b===Lr)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,L.matrixWorld);const k=e.update(L),K=L.material;if(Array.isArray(K)){const $=k.groups;for(let V=0,W=$.length;V<W;V++){const Y=$[V],pe=K[Y.materialIndex];if(pe&&pe.visible){const ge=D(L,pe,v,b);L.onBeforeShadow(n,L,N,F,k,ge,Y),n.renderBufferDirect(F,null,k,ge,L,Y),L.onAfterShadow(n,L,N,F,k,ge,Y)}}}else if(K.visible){const $=D(L,K,v,b);L.onBeforeShadow(n,L,N,F,k,$,null),n.renderBufferDirect(F,null,k,$,L,null),L.onAfterShadow(n,L,N,F,k,$,null)}}const B=L.children;for(let k=0,K=B.length;k<K;k++)E(B[k],N,F,v,b)}function S(L){L.target.removeEventListener("dispose",S);for(const F in c){const v=c[F],b=L.target.uuid;b in v&&(v[b].dispose(),delete v[b])}}}const ab={[Ql]:ec,[tc]:sc,[nc]:rc,[ar]:ic,[ec]:Ql,[sc]:tc,[rc]:nc,[ic]:ar};function lb(n,e){function t(){let G=!1;const Fe=new Ot;let be=null;const Ge=new Ot(0,0,0,0);return{setMask:function(ye){be!==ye&&!G&&(n.colorMask(ye,ye,ye,ye),be=ye)},setLocked:function(ye){G=ye},setClear:function(ye,de,we,rt,Nt){Nt===!0&&(ye*=rt,de*=rt,we*=rt),Fe.set(ye,de,we,rt),Ge.equals(Fe)===!1&&(n.clearColor(ye,de,we,rt),Ge.copy(Fe))},reset:function(){G=!1,be=null,Ge.set(-1,0,0,0)}}}function i(){let G=!1,Fe=!1,be=null,Ge=null,ye=null;return{setReversed:function(de){if(Fe!==de){const we=e.get("EXT_clip_control");de?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),Fe=de;const rt=ye;ye=null,this.setClear(rt)}},getReversed:function(){return Fe},setTest:function(de){de?te(n.DEPTH_TEST):Se(n.DEPTH_TEST)},setMask:function(de){be!==de&&!G&&(n.depthMask(de),be=de)},setFunc:function(de){if(Fe&&(de=ab[de]),Ge!==de){switch(de){case Ql:n.depthFunc(n.NEVER);break;case ec:n.depthFunc(n.ALWAYS);break;case tc:n.depthFunc(n.LESS);break;case ar:n.depthFunc(n.LEQUAL);break;case nc:n.depthFunc(n.EQUAL);break;case ic:n.depthFunc(n.GEQUAL);break;case sc:n.depthFunc(n.GREATER);break;case rc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ge=de}},setLocked:function(de){G=de},setClear:function(de){ye!==de&&(Fe&&(de=1-de),n.clearDepth(de),ye=de)},reset:function(){G=!1,be=null,Ge=null,ye=null,Fe=!1}}}function s(){let G=!1,Fe=null,be=null,Ge=null,ye=null,de=null,we=null,rt=null,Nt=null;return{setTest:function(ft){G||(ft?te(n.STENCIL_TEST):Se(n.STENCIL_TEST))},setMask:function(ft){Fe!==ft&&!G&&(n.stencilMask(ft),Fe=ft)},setFunc:function(ft,An,Gn){(be!==ft||Ge!==An||ye!==Gn)&&(n.stencilFunc(ft,An,Gn),be=ft,Ge=An,ye=Gn)},setOp:function(ft,An,Gn){(de!==ft||we!==An||rt!==Gn)&&(n.stencilOp(ft,An,Gn),de=ft,we=An,rt=Gn)},setLocked:function(ft){G=ft},setClear:function(ft){Nt!==ft&&(n.clearStencil(ft),Nt=ft)},reset:function(){G=!1,Fe=null,be=null,Ge=null,ye=null,de=null,we=null,rt=null,Nt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],_=null,M=!1,m=null,d=null,R=null,D=null,E=null,S=null,L=null,N=new ht(0,0,0),F=0,v=!1,b=null,I=null,B=null,k=null,K=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,W=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Y)[1]),V=W>=1):Y.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),V=W>=2);let pe=null,ge={};const me=n.getParameter(n.SCISSOR_BOX),Le=n.getParameter(n.VIEWPORT),Ee=new Ot().fromArray(me),ke=new Ot().fromArray(Le);function Ce(G,Fe,be,Ge){const ye=new Uint8Array(4),de=n.createTexture();n.bindTexture(G,de),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let we=0;we<be;we++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(Fe,0,n.RGBA,1,1,Ge,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(Fe+we,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return de}const q={};q[n.TEXTURE_2D]=Ce(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=Ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=Ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=Ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(n.DEPTH_TEST),o.setFunc(ar),se(!1),ce(dh),te(n.CULL_FACE),Q(Ti);function te(G){u[G]!==!0&&(n.enable(G),u[G]=!0)}function Se(G){u[G]!==!1&&(n.disable(G),u[G]=!1)}function Qe(G,Fe){return h[G]!==Fe?(n.bindFramebuffer(G,Fe),h[G]=Fe,G===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Fe),G===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Fe),!0):!1}function Oe(G,Fe){let be=p,Ge=!1;if(G){be=f.get(Fe),be===void 0&&(be=[],f.set(Fe,be));const ye=G.textures;if(be.length!==ye.length||be[0]!==n.COLOR_ATTACHMENT0){for(let de=0,we=ye.length;de<we;de++)be[de]=n.COLOR_ATTACHMENT0+de;be.length=ye.length,Ge=!0}}else be[0]!==n.BACK&&(be[0]=n.BACK,Ge=!0);Ge&&n.drawBuffers(be)}function vt(G){return _!==G?(n.useProgram(G),_=G,!0):!1}const O={[us]:n.FUNC_ADD,[C_]:n.FUNC_SUBTRACT,[P_]:n.FUNC_REVERSE_SUBTRACT};O[D_]=n.MIN,O[L_]=n.MAX;const H={[N_]:n.ZERO,[I_]:n.ONE,[U_]:n.SRC_COLOR,[Zl]:n.SRC_ALPHA,[z_]:n.SRC_ALPHA_SATURATE,[k_]:n.DST_COLOR,[O_]:n.DST_ALPHA,[F_]:n.ONE_MINUS_SRC_COLOR,[Jl]:n.ONE_MINUS_SRC_ALPHA,[V_]:n.ONE_MINUS_DST_COLOR,[B_]:n.ONE_MINUS_DST_ALPHA,[H_]:n.CONSTANT_COLOR,[G_]:n.ONE_MINUS_CONSTANT_COLOR,[W_]:n.CONSTANT_ALPHA,[X_]:n.ONE_MINUS_CONSTANT_ALPHA};function Q(G,Fe,be,Ge,ye,de,we,rt,Nt,ft){if(G===Ti){M===!0&&(Se(n.BLEND),M=!1);return}if(M===!1&&(te(n.BLEND),M=!0),G!==R_){if(G!==m||ft!==v){if((d!==us||E!==us)&&(n.blendEquation(n.FUNC_ADD),d=us,E=us),ft)switch(G){case er:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ph:n.blendFunc(n.ONE,n.ONE);break;case mh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:gt("WebGLState: Invalid blending: ",G);break}else switch(G){case er:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ph:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case mh:gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gh:gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:gt("WebGLState: Invalid blending: ",G);break}R=null,D=null,S=null,L=null,N.set(0,0,0),F=0,m=G,v=ft}return}ye=ye||Fe,de=de||be,we=we||Ge,(Fe!==d||ye!==E)&&(n.blendEquationSeparate(O[Fe],O[ye]),d=Fe,E=ye),(be!==R||Ge!==D||de!==S||we!==L)&&(n.blendFuncSeparate(H[be],H[Ge],H[de],H[we]),R=be,D=Ge,S=de,L=we),(rt.equals(N)===!1||Nt!==F)&&(n.blendColor(rt.r,rt.g,rt.b,Nt),N.copy(rt),F=Nt),m=G,v=!1}function le(G,Fe){G.side===ii?Se(n.CULL_FACE):te(n.CULL_FACE);let be=G.side===En;Fe&&(be=!be),se(be),G.blending===er&&G.transparent===!1?Q(Ti):Q(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);const Ge=G.stencilWrite;a.setTest(Ge),Ge&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),_e(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):Se(n.SAMPLE_ALPHA_TO_COVERAGE)}function se(G){b!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),b=G)}function ce(G){G!==T_?(te(n.CULL_FACE),G!==I&&(G===dh?n.cullFace(n.BACK):G===A_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Se(n.CULL_FACE),I=G}function U(G){G!==B&&(V&&n.lineWidth(G),B=G)}function _e(G,Fe,be){G?(te(n.POLYGON_OFFSET_FILL),(k!==Fe||K!==be)&&(n.polygonOffset(Fe,be),k=Fe,K=be)):Se(n.POLYGON_OFFSET_FILL)}function he(G){G?te(n.SCISSOR_TEST):Se(n.SCISSOR_TEST)}function ae(G){G===void 0&&(G=n.TEXTURE0+$-1),pe!==G&&(n.activeTexture(G),pe=G)}function fe(G,Fe,be){be===void 0&&(pe===null?be=n.TEXTURE0+$-1:be=pe);let Ge=ge[be];Ge===void 0&&(Ge={type:void 0,texture:void 0},ge[be]=Ge),(Ge.type!==G||Ge.texture!==Fe)&&(pe!==be&&(n.activeTexture(be),pe=be),n.bindTexture(G,Fe||q[G]),Ge.type=G,Ge.texture=Fe)}function A(){const G=ge[pe];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(G){gt("WebGLState:",G)}}function z(){try{n.compressedTexImage3D(...arguments)}catch(G){gt("WebGLState:",G)}}function ee(){try{n.texSubImage2D(...arguments)}catch(G){gt("WebGLState:",G)}}function oe(){try{n.texSubImage3D(...arguments)}catch(G){gt("WebGLState:",G)}}function J(){try{n.compressedTexSubImage2D(...arguments)}catch(G){gt("WebGLState:",G)}}function Ie(){try{n.compressedTexSubImage3D(...arguments)}catch(G){gt("WebGLState:",G)}}function Me(){try{n.texStorage2D(...arguments)}catch(G){gt("WebGLState:",G)}}function Be(){try{n.texStorage3D(...arguments)}catch(G){gt("WebGLState:",G)}}function Ke(){try{n.texImage2D(...arguments)}catch(G){gt("WebGLState:",G)}}function xe(){try{n.texImage3D(...arguments)}catch(G){gt("WebGLState:",G)}}function Ae(G){Ee.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),Ee.copy(G))}function Pe(G){ke.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),ke.copy(G))}function Ve(G,Fe){let be=c.get(Fe);be===void 0&&(be=new WeakMap,c.set(Fe,be));let Ge=be.get(G);Ge===void 0&&(Ge=n.getUniformBlockIndex(Fe,G.name),be.set(G,Ge))}function Te(G,Fe){const Ge=c.get(Fe).get(G);l.get(Fe)!==Ge&&(n.uniformBlockBinding(Fe,Ge,G.__bindingPointIndex),l.set(Fe,Ge))}function at(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},pe=null,ge={},h={},f=new WeakMap,p=[],_=null,M=!1,m=null,d=null,R=null,D=null,E=null,S=null,L=null,N=new ht(0,0,0),F=0,v=!1,b=null,I=null,B=null,k=null,K=null,Ee.set(0,0,n.canvas.width,n.canvas.height),ke.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:te,disable:Se,bindFramebuffer:Qe,drawBuffers:Oe,useProgram:vt,setBlending:Q,setMaterial:le,setFlipSided:se,setCullFace:ce,setLineWidth:U,setPolygonOffset:_e,setScissorTest:he,activeTexture:ae,bindTexture:fe,unbindTexture:A,compressedTexImage2D:g,compressedTexImage3D:z,texImage2D:Ke,texImage3D:xe,updateUBOMapping:Ve,uniformBlockBinding:Te,texStorage2D:Me,texStorage3D:Be,texSubImage2D:ee,texSubImage3D:oe,compressedTexSubImage2D:J,compressedTexSubImage3D:Ie,scissor:Ae,viewport:Pe,reset:at}}function cb(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,g){return p?new OffscreenCanvas(A,g):$r("canvas")}function M(A,g,z){let ee=1;const oe=fe(A);if((oe.width>z||oe.height>z)&&(ee=z/Math.max(oe.width,oe.height)),ee<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const J=Math.floor(ee*oe.width),Ie=Math.floor(ee*oe.height);h===void 0&&(h=_(J,Ie));const Me=g?_(J,Ie):h;return Me.width=J,Me.height=Ie,Me.getContext("2d").drawImage(A,0,0,J,Ie),nt("WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+J+"x"+Ie+")."),Me}else return"data"in A&&nt("WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),A;return A}function m(A){return A.generateMipmaps}function d(A){n.generateMipmap(A)}function R(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function D(A,g,z,ee,oe=!1){if(A!==null){if(n[A]!==void 0)return n[A];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=g;if(g===n.RED&&(z===n.FLOAT&&(J=n.R32F),z===n.HALF_FLOAT&&(J=n.R16F),z===n.UNSIGNED_BYTE&&(J=n.R8)),g===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.R8UI),z===n.UNSIGNED_SHORT&&(J=n.R16UI),z===n.UNSIGNED_INT&&(J=n.R32UI),z===n.BYTE&&(J=n.R8I),z===n.SHORT&&(J=n.R16I),z===n.INT&&(J=n.R32I)),g===n.RG&&(z===n.FLOAT&&(J=n.RG32F),z===n.HALF_FLOAT&&(J=n.RG16F),z===n.UNSIGNED_BYTE&&(J=n.RG8)),g===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RG8UI),z===n.UNSIGNED_SHORT&&(J=n.RG16UI),z===n.UNSIGNED_INT&&(J=n.RG32UI),z===n.BYTE&&(J=n.RG8I),z===n.SHORT&&(J=n.RG16I),z===n.INT&&(J=n.RG32I)),g===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RGB8UI),z===n.UNSIGNED_SHORT&&(J=n.RGB16UI),z===n.UNSIGNED_INT&&(J=n.RGB32UI),z===n.BYTE&&(J=n.RGB8I),z===n.SHORT&&(J=n.RGB16I),z===n.INT&&(J=n.RGB32I)),g===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),z===n.UNSIGNED_INT&&(J=n.RGBA32UI),z===n.BYTE&&(J=n.RGBA8I),z===n.SHORT&&(J=n.RGBA16I),z===n.INT&&(J=n.RGBA32I)),g===n.RGB&&(z===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),g===n.RGBA){const Ie=oe?pa:xt.getTransfer(ee);z===n.FLOAT&&(J=n.RGBA32F),z===n.HALF_FLOAT&&(J=n.RGBA16F),z===n.UNSIGNED_BYTE&&(J=Ie===Lt?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function E(A,g){let z;return A?g===null||g===ci||g===Kr?z=n.DEPTH24_STENCIL8:g===jn?z=n.DEPTH32F_STENCIL8:g===Yr&&(z=n.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===ci||g===Kr?z=n.DEPTH_COMPONENT24:g===jn?z=n.DEPTH_COMPONENT32F:g===Yr&&(z=n.DEPTH_COMPONENT16),z}function S(A,g){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==sn&&A.minFilter!==Yt?Math.log2(Math.max(g.width,g.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?g.mipmaps.length:1}function L(A){const g=A.target;g.removeEventListener("dispose",L),F(g),g.isVideoTexture&&u.delete(g)}function N(A){const g=A.target;g.removeEventListener("dispose",N),b(g)}function F(A){const g=i.get(A);if(g.__webglInit===void 0)return;const z=A.source,ee=f.get(z);if(ee){const oe=ee[g.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&v(A),Object.keys(ee).length===0&&f.delete(z)}i.remove(A)}function v(A){const g=i.get(A);n.deleteTexture(g.__webglTexture);const z=A.source,ee=f.get(z);delete ee[g.__cacheKey],o.memory.textures--}function b(A){const g=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(g.__webglFramebuffer[ee]))for(let oe=0;oe<g.__webglFramebuffer[ee].length;oe++)n.deleteFramebuffer(g.__webglFramebuffer[ee][oe]);else n.deleteFramebuffer(g.__webglFramebuffer[ee]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[ee])}else{if(Array.isArray(g.__webglFramebuffer))for(let ee=0;ee<g.__webglFramebuffer.length;ee++)n.deleteFramebuffer(g.__webglFramebuffer[ee]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let ee=0;ee<g.__webglColorRenderbuffer.length;ee++)g.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[ee]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const z=A.textures;for(let ee=0,oe=z.length;ee<oe;ee++){const J=i.get(z[ee]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(z[ee])}i.remove(A)}let I=0;function B(){I=0}function k(){const A=I;return A>=s.maxTextures&&nt("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),I+=1,A}function K(A){const g=[];return g.push(A.wrapS),g.push(A.wrapT),g.push(A.wrapR||0),g.push(A.magFilter),g.push(A.minFilter),g.push(A.anisotropy),g.push(A.internalFormat),g.push(A.format),g.push(A.type),g.push(A.generateMipmaps),g.push(A.premultiplyAlpha),g.push(A.flipY),g.push(A.unpackAlignment),g.push(A.colorSpace),g.join()}function $(A,g){const z=i.get(A);if(A.isVideoTexture&&he(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){const ee=A.image;if(ee===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{q(z,A,g);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+g)}function V(A,g){const z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){q(z,A,g);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+g)}function W(A,g){const z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){q(z,A,g);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+g)}function Y(A,g){const z=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&z.__version!==A.version){te(z,A,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+g)}const pe={[fs]:n.REPEAT,[Nn]:n.CLAMP_TO_EDGE,[lc]:n.MIRRORED_REPEAT},ge={[sn]:n.NEAREST,[K_]:n.NEAREST_MIPMAP_NEAREST,[_o]:n.NEAREST_MIPMAP_LINEAR,[Yt]:n.LINEAR,[il]:n.LINEAR_MIPMAP_NEAREST,[Ei]:n.LINEAR_MIPMAP_LINEAR},me={[Q_]:n.NEVER,[s0]:n.ALWAYS,[e0]:n.LESS,[yu]:n.LEQUAL,[t0]:n.EQUAL,[Su]:n.GEQUAL,[n0]:n.GREATER,[i0]:n.NOTEQUAL};function Le(A,g){if(g.type===jn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Yt||g.magFilter===il||g.magFilter===_o||g.magFilter===Ei||g.minFilter===Yt||g.minFilter===il||g.minFilter===_o||g.minFilter===Ei)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,pe[g.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,pe[g.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,pe[g.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,ge[g.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,ge[g.minFilter]),g.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,me[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===sn||g.minFilter!==_o&&g.minFilter!==Ei||g.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Ee(A,g){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,g.addEventListener("dispose",L));const ee=g.source;let oe=f.get(ee);oe===void 0&&(oe={},f.set(ee,oe));const J=K(g);if(J!==A.__cacheKey){oe[J]===void 0&&(oe[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),oe[J].usedTimes++;const Ie=oe[A.__cacheKey];Ie!==void 0&&(oe[A.__cacheKey].usedTimes--,Ie.usedTimes===0&&v(g)),A.__cacheKey=J,A.__webglTexture=oe[J].texture}return z}function ke(A,g,z){return Math.floor(Math.floor(A/z)/g)}function Ce(A,g,z,ee){const J=A.updateRanges;if(J.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,z,ee,g.data);else{J.sort((xe,Ae)=>xe.start-Ae.start);let Ie=0;for(let xe=1;xe<J.length;xe++){const Ae=J[Ie],Pe=J[xe],Ve=Ae.start+Ae.count,Te=ke(Pe.start,g.width,4),at=ke(Ae.start,g.width,4);Pe.start<=Ve+1&&Te===at&&ke(Pe.start+Pe.count-1,g.width,4)===Te?Ae.count=Math.max(Ae.count,Pe.start+Pe.count-Ae.start):(++Ie,J[Ie]=Pe)}J.length=Ie+1;const Me=n.getParameter(n.UNPACK_ROW_LENGTH),Be=n.getParameter(n.UNPACK_SKIP_PIXELS),Ke=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let xe=0,Ae=J.length;xe<Ae;xe++){const Pe=J[xe],Ve=Math.floor(Pe.start/4),Te=Math.ceil(Pe.count/4),at=Ve%g.width,G=Math.floor(Ve/g.width),Fe=Te,be=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,at),n.pixelStorei(n.UNPACK_SKIP_ROWS,G),t.texSubImage2D(n.TEXTURE_2D,0,at,G,Fe,be,z,ee,g.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Me),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Be),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ke)}}function q(A,g,z){let ee=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(ee=n.TEXTURE_3D);const oe=Ee(A,g),J=g.source;t.bindTexture(ee,A.__webglTexture,n.TEXTURE0+z);const Ie=i.get(J);if(J.version!==Ie.__version||oe===!0){t.activeTexture(n.TEXTURE0+z);const Me=xt.getPrimaries(xt.workingColorSpace),Be=g.colorSpace===qi?null:xt.getPrimaries(g.colorSpace),Ke=g.colorSpace===qi||Me===Be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let xe=M(g.image,!1,s.maxTextureSize);xe=ae(g,xe);const Ae=r.convert(g.format,g.colorSpace),Pe=r.convert(g.type);let Ve=D(g.internalFormat,Ae,Pe,g.colorSpace,g.isVideoTexture);Le(ee,g);let Te;const at=g.mipmaps,G=g.isVideoTexture!==!0,Fe=Ie.__version===void 0||oe===!0,be=J.dataReady,Ge=S(g,xe);if(g.isDepthTexture)Ve=E(g.format===ds,g.type),Fe&&(G?t.texStorage2D(n.TEXTURE_2D,1,Ve,xe.width,xe.height):t.texImage2D(n.TEXTURE_2D,0,Ve,xe.width,xe.height,0,Ae,Pe,null));else if(g.isDataTexture)if(at.length>0){G&&Fe&&t.texStorage2D(n.TEXTURE_2D,Ge,Ve,at[0].width,at[0].height);for(let ye=0,de=at.length;ye<de;ye++)Te=at[ye],G?be&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,Te.width,Te.height,Ae,Pe,Te.data):t.texImage2D(n.TEXTURE_2D,ye,Ve,Te.width,Te.height,0,Ae,Pe,Te.data);g.generateMipmaps=!1}else G?(Fe&&t.texStorage2D(n.TEXTURE_2D,Ge,Ve,xe.width,xe.height),be&&Ce(g,xe,Ae,Pe)):t.texImage2D(n.TEXTURE_2D,0,Ve,xe.width,xe.height,0,Ae,Pe,xe.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){G&&Fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ge,Ve,at[0].width,at[0].height,xe.depth);for(let ye=0,de=at.length;ye<de;ye++)if(Te=at[ye],g.format!==Bn)if(Ae!==null)if(G){if(be)if(g.layerUpdates.size>0){const we=lf(Te.width,Te.height,g.format,g.type);for(const rt of g.layerUpdates){const Nt=Te.data.subarray(rt*we/Te.data.BYTES_PER_ELEMENT,(rt+1)*we/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,rt,Te.width,Te.height,1,Ae,Nt)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,Te.width,Te.height,xe.depth,Ae,Te.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ye,Ve,Te.width,Te.height,xe.depth,0,Te.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?be&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,Te.width,Te.height,xe.depth,Ae,Pe,Te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ye,Ve,Te.width,Te.height,xe.depth,0,Ae,Pe,Te.data)}else{G&&Fe&&t.texStorage2D(n.TEXTURE_2D,Ge,Ve,at[0].width,at[0].height);for(let ye=0,de=at.length;ye<de;ye++)Te=at[ye],g.format!==Bn?Ae!==null?G?be&&t.compressedTexSubImage2D(n.TEXTURE_2D,ye,0,0,Te.width,Te.height,Ae,Te.data):t.compressedTexImage2D(n.TEXTURE_2D,ye,Ve,Te.width,Te.height,0,Te.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?be&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,Te.width,Te.height,Ae,Pe,Te.data):t.texImage2D(n.TEXTURE_2D,ye,Ve,Te.width,Te.height,0,Ae,Pe,Te.data)}else if(g.isDataArrayTexture)if(G){if(Fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ge,Ve,xe.width,xe.height,xe.depth),be)if(g.layerUpdates.size>0){const ye=lf(xe.width,xe.height,g.format,g.type);for(const de of g.layerUpdates){const we=xe.data.subarray(de*ye/xe.data.BYTES_PER_ELEMENT,(de+1)*ye/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,de,xe.width,xe.height,1,Ae,Pe,we)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Ae,Pe,xe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ve,xe.width,xe.height,xe.depth,0,Ae,Pe,xe.data);else if(g.isData3DTexture)G?(Fe&&t.texStorage3D(n.TEXTURE_3D,Ge,Ve,xe.width,xe.height,xe.depth),be&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Ae,Pe,xe.data)):t.texImage3D(n.TEXTURE_3D,0,Ve,xe.width,xe.height,xe.depth,0,Ae,Pe,xe.data);else if(g.isFramebufferTexture){if(Fe)if(G)t.texStorage2D(n.TEXTURE_2D,Ge,Ve,xe.width,xe.height);else{let ye=xe.width,de=xe.height;for(let we=0;we<Ge;we++)t.texImage2D(n.TEXTURE_2D,we,Ve,ye,de,0,Ae,Pe,null),ye>>=1,de>>=1}}else if(at.length>0){if(G&&Fe){const ye=fe(at[0]);t.texStorage2D(n.TEXTURE_2D,Ge,Ve,ye.width,ye.height)}for(let ye=0,de=at.length;ye<de;ye++)Te=at[ye],G?be&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,Ae,Pe,Te):t.texImage2D(n.TEXTURE_2D,ye,Ve,Ae,Pe,Te);g.generateMipmaps=!1}else if(G){if(Fe){const ye=fe(xe);t.texStorage2D(n.TEXTURE_2D,Ge,Ve,ye.width,ye.height)}be&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae,Pe,xe)}else t.texImage2D(n.TEXTURE_2D,0,Ve,Ae,Pe,xe);m(g)&&d(ee),Ie.__version=J.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function te(A,g,z){if(g.image.length!==6)return;const ee=Ee(A,g),oe=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+z);const J=i.get(oe);if(oe.version!==J.__version||ee===!0){t.activeTexture(n.TEXTURE0+z);const Ie=xt.getPrimaries(xt.workingColorSpace),Me=g.colorSpace===qi?null:xt.getPrimaries(g.colorSpace),Be=g.colorSpace===qi||Ie===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const Ke=g.isCompressedTexture||g.image[0].isCompressedTexture,xe=g.image[0]&&g.image[0].isDataTexture,Ae=[];for(let de=0;de<6;de++)!Ke&&!xe?Ae[de]=M(g.image[de],!0,s.maxCubemapSize):Ae[de]=xe?g.image[de].image:g.image[de],Ae[de]=ae(g,Ae[de]);const Pe=Ae[0],Ve=r.convert(g.format,g.colorSpace),Te=r.convert(g.type),at=D(g.internalFormat,Ve,Te,g.colorSpace),G=g.isVideoTexture!==!0,Fe=J.__version===void 0||ee===!0,be=oe.dataReady;let Ge=S(g,Pe);Le(n.TEXTURE_CUBE_MAP,g);let ye;if(Ke){G&&Fe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ge,at,Pe.width,Pe.height);for(let de=0;de<6;de++){ye=Ae[de].mipmaps;for(let we=0;we<ye.length;we++){const rt=ye[we];g.format!==Bn?Ve!==null?G?be&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,we,0,0,rt.width,rt.height,Ve,rt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,we,at,rt.width,rt.height,0,rt.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,we,0,0,rt.width,rt.height,Ve,Te,rt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,we,at,rt.width,rt.height,0,Ve,Te,rt.data)}}}else{if(ye=g.mipmaps,G&&Fe){ye.length>0&&Ge++;const de=fe(Ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ge,at,de.width,de.height)}for(let de=0;de<6;de++)if(xe){G?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ae[de].width,Ae[de].height,Ve,Te,Ae[de].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,at,Ae[de].width,Ae[de].height,0,Ve,Te,Ae[de].data);for(let we=0;we<ye.length;we++){const Nt=ye[we].image[de].image;G?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,we+1,0,0,Nt.width,Nt.height,Ve,Te,Nt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,we+1,at,Nt.width,Nt.height,0,Ve,Te,Nt.data)}}else{G?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ve,Te,Ae[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,at,Ve,Te,Ae[de]);for(let we=0;we<ye.length;we++){const rt=ye[we];G?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,we+1,0,0,Ve,Te,rt.image[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,we+1,at,Ve,Te,rt.image[de])}}}m(g)&&d(n.TEXTURE_CUBE_MAP),J.__version=oe.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function Se(A,g,z,ee,oe,J){const Ie=r.convert(z.format,z.colorSpace),Me=r.convert(z.type),Be=D(z.internalFormat,Ie,Me,z.colorSpace),Ke=i.get(g),xe=i.get(z);if(xe.__renderTarget=g,!Ke.__hasExternalTextures){const Ae=Math.max(1,g.width>>J),Pe=Math.max(1,g.height>>J);oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,J,Be,Ae,Pe,g.depth,0,Ie,Me,null):t.texImage2D(oe,J,Be,Ae,Pe,0,Ie,Me,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),_e(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,oe,xe.__webglTexture,0,U(g)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,oe,xe.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Qe(A,g,z){if(n.bindRenderbuffer(n.RENDERBUFFER,A),g.depthBuffer){const ee=g.depthTexture,oe=ee&&ee.isDepthTexture?ee.type:null,J=E(g.stencilBuffer,oe),Ie=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;_e(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,U(g),J,g.width,g.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,U(g),J,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,J,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ie,n.RENDERBUFFER,A)}else{const ee=g.textures;for(let oe=0;oe<ee.length;oe++){const J=ee[oe],Ie=r.convert(J.format,J.colorSpace),Me=r.convert(J.type),Be=D(J.internalFormat,Ie,Me,J.colorSpace);_e(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,U(g),Be,g.width,g.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,U(g),Be,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Be,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Oe(A,g,z){const ee=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const oe=i.get(g.depthTexture);if(oe.__renderTarget=g,(!oe.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),ee){if(oe.__webglInit===void 0&&(oe.__webglInit=!0,g.depthTexture.addEventListener("dispose",L)),oe.__webglTexture===void 0){oe.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture),Le(n.TEXTURE_CUBE_MAP,g.depthTexture);const Ke=r.convert(g.depthTexture.format),xe=r.convert(g.depthTexture.type);let Ae;g.depthTexture.format===Li?Ae=n.DEPTH_COMPONENT24:g.depthTexture.format===ds&&(Ae=n.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ae,g.width,g.height,0,Ke,xe,null)}}else $(g.depthTexture,0);const J=oe.__webglTexture,Ie=U(g),Me=ee?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,Be=g.depthTexture.format===ds?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===Li)_e(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Be,Me,J,0,Ie):n.framebufferTexture2D(n.FRAMEBUFFER,Be,Me,J,0);else if(g.depthTexture.format===ds)_e(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Be,Me,J,0,Ie):n.framebufferTexture2D(n.FRAMEBUFFER,Be,Me,J,0);else throw new Error("Unknown depthTexture format")}function vt(A){const g=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==A.depthTexture){const ee=A.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),ee){const oe=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,ee.removeEventListener("dispose",oe)};ee.addEventListener("dispose",oe),g.__depthDisposeCallback=oe}g.__boundDepthTexture=ee}if(A.depthTexture&&!g.__autoAllocateDepthBuffer)if(z)for(let ee=0;ee<6;ee++)Oe(g.__webglFramebuffer[ee],A,ee);else{const ee=A.texture.mipmaps;ee&&ee.length>0?Oe(g.__webglFramebuffer[0],A,0):Oe(g.__webglFramebuffer,A,0)}else if(z){g.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[ee]),g.__webglDepthbuffer[ee]===void 0)g.__webglDepthbuffer[ee]=n.createRenderbuffer(),Qe(g.__webglDepthbuffer[ee],A,!1);else{const oe=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=g.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,J)}}else{const ee=A.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Qe(g.__webglDepthbuffer,A,!1);else{const oe=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,J)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function O(A,g,z){const ee=i.get(A);g!==void 0&&Se(ee.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&vt(A)}function H(A){const g=A.texture,z=i.get(A),ee=i.get(g);A.addEventListener("dispose",N);const oe=A.textures,J=A.isWebGLCubeRenderTarget===!0,Ie=oe.length>1;if(Ie||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=g.version,o.memory.textures++),J){z.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(g.mipmaps&&g.mipmaps.length>0){z.__webglFramebuffer[Me]=[];for(let Be=0;Be<g.mipmaps.length;Be++)z.__webglFramebuffer[Me][Be]=n.createFramebuffer()}else z.__webglFramebuffer[Me]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){z.__webglFramebuffer=[];for(let Me=0;Me<g.mipmaps.length;Me++)z.__webglFramebuffer[Me]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(Ie)for(let Me=0,Be=oe.length;Me<Be;Me++){const Ke=i.get(oe[Me]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&_e(A)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Me=0;Me<oe.length;Me++){const Be=oe[Me];z.__webglColorRenderbuffer[Me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[Me]);const Ke=r.convert(Be.format,Be.colorSpace),xe=r.convert(Be.type),Ae=D(Be.internalFormat,Ke,xe,Be.colorSpace,A.isXRRenderTarget===!0),Pe=U(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,Ae,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,z.__webglColorRenderbuffer[Me])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Qe(z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),Le(n.TEXTURE_CUBE_MAP,g);for(let Me=0;Me<6;Me++)if(g.mipmaps&&g.mipmaps.length>0)for(let Be=0;Be<g.mipmaps.length;Be++)Se(z.__webglFramebuffer[Me][Be],A,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Be);else Se(z.__webglFramebuffer[Me],A,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);m(g)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let Me=0,Be=oe.length;Me<Be;Me++){const Ke=oe[Me],xe=i.get(Ke);let Ae=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Ae=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ae,xe.__webglTexture),Le(Ae,Ke),Se(z.__webglFramebuffer,A,Ke,n.COLOR_ATTACHMENT0+Me,Ae,0),m(Ke)&&d(Ae)}t.unbindTexture()}else{let Me=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Me=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Me,ee.__webglTexture),Le(Me,g),g.mipmaps&&g.mipmaps.length>0)for(let Be=0;Be<g.mipmaps.length;Be++)Se(z.__webglFramebuffer[Be],A,g,n.COLOR_ATTACHMENT0,Me,Be);else Se(z.__webglFramebuffer,A,g,n.COLOR_ATTACHMENT0,Me,0);m(g)&&d(Me),t.unbindTexture()}A.depthBuffer&&vt(A)}function Q(A){const g=A.textures;for(let z=0,ee=g.length;z<ee;z++){const oe=g[z];if(m(oe)){const J=R(A),Ie=i.get(oe).__webglTexture;t.bindTexture(J,Ie),d(J),t.unbindTexture()}}}const le=[],se=[];function ce(A){if(A.samples>0){if(_e(A)===!1){const g=A.textures,z=A.width,ee=A.height;let oe=n.COLOR_BUFFER_BIT;const J=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ie=i.get(A),Me=g.length>1;if(Me)for(let Ke=0;Ke<g.length;Ke++)t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ke,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ke,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const Be=A.texture.mipmaps;Be&&Be.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ke=0;Ke<g.length;Ke++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),Me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ke]);const xe=i.get(g[Ke]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,xe,0)}n.blitFramebuffer(0,0,z,ee,0,0,z,ee,oe,n.NEAREST),l===!0&&(le.length=0,se.length=0,le.push(n.COLOR_ATTACHMENT0+Ke),A.depthBuffer&&A.resolveDepthBuffer===!1&&(le.push(J),se.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,se)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,le))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Me)for(let Ke=0;Ke<g.length;Ke++){t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ke,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ke]);const xe=i.get(g[Ke]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ke,n.TEXTURE_2D,xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const g=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function U(A){return Math.min(s.maxSamples,A.samples)}function _e(A){const g=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function he(A){const g=o.render.frame;u.get(A)!==g&&(u.set(A,g),A.update())}function ae(A,g){const z=A.colorSpace,ee=A.format,oe=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==ur&&z!==qi&&(xt.getTransfer(z)===Lt?(ee!==Bn||oe!==Pn)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):gt("WebGLTextures: Unsupported texture color space:",z)),g}function fe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=B,this.setTexture2D=$,this.setTexture2DArray=V,this.setTexture3D=W,this.setTextureCube=Y,this.rebindTextures=O,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=_e,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ub(n,e){function t(i,s=qi){let r;const o=xt.getTransfer(s);if(i===Pn)return n.UNSIGNED_BYTE;if(i===mu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===gu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===tp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===np)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Qd)return n.BYTE;if(i===ep)return n.SHORT;if(i===Yr)return n.UNSIGNED_SHORT;if(i===pu)return n.INT;if(i===ci)return n.UNSIGNED_INT;if(i===jn)return n.FLOAT;if(i===Di)return n.HALF_FLOAT;if(i===ip)return n.ALPHA;if(i===sp)return n.RGB;if(i===Bn)return n.RGBA;if(i===Li)return n.DEPTH_COMPONENT;if(i===ds)return n.DEPTH_STENCIL;if(i===rp)return n.RED;if(i===_u)return n.RED_INTEGER;if(i===cr)return n.RG;if(i===xu)return n.RG_INTEGER;if(i===vu)return n.RGBA_INTEGER;if(i===ta||i===na||i===ia||i===sa)if(o===Lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ta)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ta)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===cc||i===uc||i===hc||i===fc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===cc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===uc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===hc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===dc||i===pc||i===mc||i===gc||i===_c||i===xc||i===vc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===dc||i===pc)return o===Lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===mc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===gc)return r.COMPRESSED_R11_EAC;if(i===_c)return r.COMPRESSED_SIGNED_R11_EAC;if(i===xc)return r.COMPRESSED_RG11_EAC;if(i===vc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Mc||i===yc||i===Sc||i===bc||i===Ec||i===Tc||i===Ac||i===wc||i===Rc||i===Cc||i===Pc||i===Dc||i===Lc||i===Nc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Mc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ec)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Tc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ac)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Dc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Lc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Nc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ic||i===Uc||i===Fc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ic)return o===Lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Uc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Oc||i===Bc||i===kc||i===Vc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Oc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Bc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Kr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const hb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fb=`
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

}`;class db{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new xp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ui({vertexShader:hb,fragmentShader:fb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nn(new Ia(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pb extends xs{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,_=null;const M=typeof XRWebGLBinding<"u",m=new db,d={},R=t.getContextAttributes();let D=null,E=null;const S=[],L=[],N=new ot;let F=null;const v=new cn;v.viewport=new Ot;const b=new cn;b.viewport=new Ot;const I=[v,b],B=new Mx;let k=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let te=S[q];return te===void 0&&(te=new Tl,S[q]=te),te.getTargetRaySpace()},this.getControllerGrip=function(q){let te=S[q];return te===void 0&&(te=new Tl,S[q]=te),te.getGripSpace()},this.getHand=function(q){let te=S[q];return te===void 0&&(te=new Tl,S[q]=te),te.getHandSpace()};function $(q){const te=L.indexOf(q.inputSource);if(te===-1)return;const Se=S[te];Se!==void 0&&(Se.update(q.inputSource,q.frame,c||o),Se.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",W);for(let q=0;q<S.length;q++){const te=L[q];te!==null&&(L[q]=null,S[q].disconnect(te))}k=null,K=null,m.reset();for(const q in d)delete d[q];e.setRenderTarget(D),p=null,f=null,h=null,s=null,E=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(F),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&M&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(D=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",V),s.addEventListener("inputsourceschange",W),R.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(N),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Qe=null,Oe=null;R.depth&&(Oe=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=R.stencil?ds:Li,Qe=R.stencil?Kr:ci);const vt={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(vt),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new ai(f.textureWidth,f.textureHeight,{format:Bn,type:Pn,depthTexture:new Qr(f.textureWidth,f.textureHeight,Qe,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Se={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Se),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new ai(p.framebufferWidth,p.framebufferHeight,{format:Bn,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ce.setContext(s),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(q){for(let te=0;te<q.removed.length;te++){const Se=q.removed[te],Qe=L.indexOf(Se);Qe>=0&&(L[Qe]=null,S[Qe].disconnect(Se))}for(let te=0;te<q.added.length;te++){const Se=q.added[te];let Qe=L.indexOf(Se);if(Qe===-1){for(let vt=0;vt<S.length;vt++)if(vt>=L.length){L.push(Se),Qe=vt;break}else if(L[vt]===null){L[vt]=Se,Qe=vt;break}if(Qe===-1)break}const Oe=S[Qe];Oe&&Oe.connect(Se)}}const Y=new X,pe=new X;function ge(q,te,Se){Y.setFromMatrixPosition(te.matrixWorld),pe.setFromMatrixPosition(Se.matrixWorld);const Qe=Y.distanceTo(pe),Oe=te.projectionMatrix.elements,vt=Se.projectionMatrix.elements,O=Oe[14]/(Oe[10]-1),H=Oe[14]/(Oe[10]+1),Q=(Oe[9]+1)/Oe[5],le=(Oe[9]-1)/Oe[5],se=(Oe[8]-1)/Oe[0],ce=(vt[8]+1)/vt[0],U=O*se,_e=O*ce,he=Qe/(-se+ce),ae=he*-se;if(te.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ae),q.translateZ(he),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Oe[10]===-1)q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const fe=O+he,A=H+he,g=U-ae,z=_e+(Qe-ae),ee=Q*H/A*fe,oe=le*H/A*fe;q.projectionMatrix.makePerspective(g,z,ee,oe,fe,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function me(q,te){te===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(te.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let te=q.near,Se=q.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(Se=m.depthFar)),B.near=b.near=v.near=te,B.far=b.far=v.far=Se,(k!==B.near||K!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),k=B.near,K=B.far),B.layers.mask=q.layers.mask|6,v.layers.mask=B.layers.mask&3,b.layers.mask=B.layers.mask&5;const Qe=q.parent,Oe=B.cameras;me(B,Qe);for(let vt=0;vt<Oe.length;vt++)me(Oe[vt],Qe);Oe.length===2?ge(B,v,b):B.projectionMatrix.copy(v.projectionMatrix),Le(q,B,Qe)};function Le(q,te,Se){Se===null?q.matrix.copy(te.matrixWorld):(q.matrix.copy(Se.matrixWorld),q.matrix.invert(),q.matrix.multiply(te.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=hr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(q){return d[q]};let Ee=null;function ke(q,te){if(u=te.getViewerPose(c||o),_=te,u!==null){const Se=u.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let Qe=!1;Se.length!==B.cameras.length&&(B.cameras.length=0,Qe=!0);for(let H=0;H<Se.length;H++){const Q=Se[H];let le=null;if(p!==null)le=p.getViewport(Q);else{const ce=h.getViewSubImage(f,Q);le=ce.viewport,H===0&&(e.setRenderTargetTextures(E,ce.colorTexture,ce.depthStencilTexture),e.setRenderTarget(E))}let se=I[H];se===void 0&&(se=new cn,se.layers.enable(H),se.viewport=new Ot,I[H]=se),se.matrix.fromArray(Q.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(Q.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(le.x,le.y,le.width,le.height),H===0&&(B.matrix.copy(se.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Qe===!0&&B.cameras.push(se)}const Oe=s.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){h=i.getBinding();const H=h.getDepthInformation(Se[0]);H&&H.isValid&&H.texture&&m.init(H,s.renderState)}if(Oe&&Oe.includes("camera-access")&&M){e.state.unbindTexture(),h=i.getBinding();for(let H=0;H<Se.length;H++){const Q=Se[H].camera;if(Q){let le=d[Q];le||(le=new xp,d[Q]=le);const se=h.getCameraImage(Q);le.sourceTexture=se}}}}for(let Se=0;Se<S.length;Se++){const Qe=L[Se],Oe=S[Se];Qe!==null&&Oe!==void 0&&Oe.update(Qe,te,c||o)}Ee&&Ee(q,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),_=null}const Ce=new Ap;Ce.setAnimationLoop(ke),this.setAnimationLoop=function(q){Ee=q},this.dispose=function(){}}}const as=new Tn,mb=new lt;function gb(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,hp(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,R,D,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,E)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),M(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,R,D):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===En&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===En&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const R=e.get(d),D=R.envMap,E=R.envMapRotation;D&&(m.envMap.value=D,as.copy(E),as.x*=-1,as.y*=-1,as.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),m.envMapRotation.value.setFromMatrix4(mb.makeRotationFromEuler(as)),m.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,R,D){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*R,m.scale.value=D*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,R){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===En&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function M(m,d){const R=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function _b(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,D){const E=D.program;i.uniformBlockBinding(R,E)}function c(R,D){let E=s[R.id];E===void 0&&(_(R),E=u(R),s[R.id]=E,R.addEventListener("dispose",m));const S=D.program;i.updateUBOMapping(R,S);const L=e.render.frame;r[R.id]!==L&&(f(R),r[R.id]=L)}function u(R){const D=h();R.__bindingPointIndex=D;const E=n.createBuffer(),S=R.__size,L=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,S,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,D,E),E}function h(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(R){const D=s[R.id],E=R.uniforms,S=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,D);for(let L=0,N=E.length;L<N;L++){const F=Array.isArray(E[L])?E[L]:[E[L]];for(let v=0,b=F.length;v<b;v++){const I=F[v];if(p(I,L,v,S)===!0){const B=I.__offset,k=Array.isArray(I.value)?I.value:[I.value];let K=0;for(let $=0;$<k.length;$++){const V=k[$],W=M(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,B+K,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,K),K+=W.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(R,D,E,S){const L=R.value,N=D+"_"+E;if(S[N]===void 0)return typeof L=="number"||typeof L=="boolean"?S[N]=L:S[N]=L.clone(),!0;{const F=S[N];if(typeof L=="number"||typeof L=="boolean"){if(F!==L)return S[N]=L,!0}else if(F.equals(L)===!1)return F.copy(L),!0}return!1}function _(R){const D=R.uniforms;let E=0;const S=16;for(let N=0,F=D.length;N<F;N++){const v=Array.isArray(D[N])?D[N]:[D[N]];for(let b=0,I=v.length;b<I;b++){const B=v[b],k=Array.isArray(B.value)?B.value:[B.value];for(let K=0,$=k.length;K<$;K++){const V=k[K],W=M(V),Y=E%S,pe=Y%W.boundary,ge=Y+pe;E+=pe,ge!==0&&S-ge<W.storage&&(E+=S-ge),B.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=E,E+=W.storage}}}const L=E%S;return L>0&&(E+=S-L),R.__size=E,R.__cache={},this}function M(R){const D={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(D.boundary=4,D.storage=4):R.isVector2?(D.boundary=8,D.storage=8):R.isVector3||R.isColor?(D.boundary=16,D.storage=12):R.isVector4?(D.boundary=16,D.storage=16):R.isMatrix3?(D.boundary=48,D.storage=48):R.isMatrix4?(D.boundary=64,D.storage=64):R.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):nt("WebGLRenderer: Unsupported uniform value type.",R),D}function m(R){const D=R.target;D.removeEventListener("dispose",m);const E=o.indexOf(D.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[D.id]),delete s[D.id],delete r[D.id]}function d(){for(const R in s)n.deleteBuffer(s[R]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}const xb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Qn=null;function vb(){return Qn===null&&(Qn=new Au(xb,16,16,cr,Di),Qn.name="DFG_LUT",Qn.minFilter=Yt,Qn.magFilter=Yt,Qn.wrapS=Nn,Qn.wrapT=Nn,Qn.generateMipmaps=!1,Qn.needsUpdate=!0),Qn}class Mb{constructor(e={}){const{canvas:t=o0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Pn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;const M=p,m=new Set([vu,xu,_u]),d=new Set([Pn,ci,Yr,Kr,mu,gu]),R=new Uint32Array(4),D=new Int32Array(4);let E=null,S=null;const L=[],N=[];let F=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let b=!1;this._outputColorSpace=Ht;let I=0,B=0,k=null,K=-1,$=null;const V=new Ot,W=new Ot;let Y=null;const pe=new ht(0);let ge=0,me=t.width,Le=t.height,Ee=1,ke=null,Ce=null;const q=new Ot(0,0,me,Le),te=new Ot(0,0,me,Le);let Se=!1;const Qe=new Ru;let Oe=!1,vt=!1;const O=new lt,H=new X,Q=new Ot,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function ce(){return k===null?Ee:1}let U=i;function _e(w,j){return t.getContext(w,j)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${du}`),t.addEventListener("webglcontextlost",rt,!1),t.addEventListener("webglcontextrestored",Nt,!1),t.addEventListener("webglcontextcreationerror",ft,!1),U===null){const j="webgl2";if(U=_e(j,w),U===null)throw _e(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw gt("WebGLRenderer: "+w.message),w}let he,ae,fe,A,g,z,ee,oe,J,Ie,Me,Be,Ke,xe,Ae,Pe,Ve,Te,at,G,Fe,be,Ge,ye;function de(){he=new vy(U),he.init(),be=new ub(U,he),ae=new uy(U,he,e,be),fe=new lb(U,he),ae.reversedDepthBuffer&&f&&fe.buffers.depth.setReversed(!0),A=new Sy(U),g=new jS,z=new cb(U,he,fe,g,ae,be,A),ee=new fy(v),oe=new xy(v),J=new Ax(U),Ge=new ly(U,J),Ie=new My(U,J,A,Ge),Me=new Ey(U,Ie,J,A),at=new by(U,ae,z),Pe=new hy(g),Be=new qS(v,ee,oe,he,ae,Ge,Pe),Ke=new gb(v,g),xe=new KS,Ae=new tb(he),Te=new ay(v,ee,oe,fe,Me,_,l),Ve=new ob(v,Me,ae),ye=new _b(U,A,ae,fe),G=new cy(U,he,A),Fe=new yy(U,he,A),A.programs=Be.programs,v.capabilities=ae,v.extensions=he,v.properties=g,v.renderLists=xe,v.shadowMap=Ve,v.state=fe,v.info=A}de(),M!==Pn&&(F=new Ay(M,t.width,t.height,s,r));const we=new pb(v,U);this.xr=we,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const w=he.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=he.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(w){w!==void 0&&(Ee=w,this.setSize(me,Le,!1))},this.getSize=function(w){return w.set(me,Le)},this.setSize=function(w,j,ie=!0){if(we.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}me=w,Le=j,t.width=Math.floor(w*Ee),t.height=Math.floor(j*Ee),ie===!0&&(t.style.width=w+"px",t.style.height=j+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,w,j)},this.getDrawingBufferSize=function(w){return w.set(me*Ee,Le*Ee).floor()},this.setDrawingBufferSize=function(w,j,ie){me=w,Le=j,Ee=ie,t.width=Math.floor(w*ie),t.height=Math.floor(j*ie),this.setViewport(0,0,w,j)},this.setEffects=function(w){if(M===Pn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let j=0;j<w.length;j++)if(w[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(V)},this.getViewport=function(w){return w.copy(q)},this.setViewport=function(w,j,ie,ne){w.isVector4?q.set(w.x,w.y,w.z,w.w):q.set(w,j,ie,ne),fe.viewport(V.copy(q).multiplyScalar(Ee).round())},this.getScissor=function(w){return w.copy(te)},this.setScissor=function(w,j,ie,ne){w.isVector4?te.set(w.x,w.y,w.z,w.w):te.set(w,j,ie,ne),fe.scissor(W.copy(te).multiplyScalar(Ee).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(w){fe.setScissorTest(Se=w)},this.setOpaqueSort=function(w){ke=w},this.setTransparentSort=function(w){Ce=w},this.getClearColor=function(w){return w.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(w=!0,j=!0,ie=!0){let ne=0;if(w){let Z=!1;if(k!==null){const De=k.texture.format;Z=m.has(De)}if(Z){const De=k.texture.type,Xe=d.has(De),Ne=Te.getClearColor(),We=Te.getClearAlpha(),$e=Ne.r,st=Ne.g,tt=Ne.b;Xe?(R[0]=$e,R[1]=st,R[2]=tt,R[3]=We,U.clearBufferuiv(U.COLOR,0,R)):(D[0]=$e,D[1]=st,D[2]=tt,D[3]=We,U.clearBufferiv(U.COLOR,0,D))}else ne|=U.COLOR_BUFFER_BIT}j&&(ne|=U.DEPTH_BUFFER_BIT),ie&&(ne|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",rt,!1),t.removeEventListener("webglcontextrestored",Nt,!1),t.removeEventListener("webglcontextcreationerror",ft,!1),Te.dispose(),xe.dispose(),Ae.dispose(),g.dispose(),ee.dispose(),oe.dispose(),Me.dispose(),Ge.dispose(),ye.dispose(),Be.dispose(),we.dispose(),we.removeEventListener("sessionstart",ao),we.removeEventListener("sessionend",Mr),hi.stop()};function rt(w){w.preventDefault(),Th("WebGLRenderer: Context Lost."),b=!0}function Nt(){Th("WebGLRenderer: Context Restored."),b=!1;const w=A.autoReset,j=Ve.enabled,ie=Ve.autoUpdate,ne=Ve.needsUpdate,Z=Ve.type;de(),A.autoReset=w,Ve.enabled=j,Ve.autoUpdate=ie,Ve.needsUpdate=ne,Ve.type=Z}function ft(w){gt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function An(w){const j=w.target;j.removeEventListener("dispose",An),Gn(j)}function Gn(w){za(w),g.remove(w)}function za(w){const j=g.get(w).programs;j!==void 0&&(j.forEach(function(ie){Be.releaseProgram(ie)}),w.isShaderMaterial&&Be.releaseShaderCache(w))}this.renderBufferDirect=function(w,j,ie,ne,Z,De){j===null&&(j=le);const Xe=Z.isMesh&&Z.matrixWorld.determinant()<0,Ne=Ga(w,j,ie,ne,Z);fe.setMaterial(ne,Xe);let We=ie.index,$e=1;if(ne.wireframe===!0){if(We=Ie.getWireframeAttribute(ie),We===void 0)return;$e=2}const st=ie.drawRange,tt=ie.attributes.position;let dt=st.start*$e,wt=(st.start+st.count)*$e;De!==null&&(dt=Math.max(dt,De.start*$e),wt=Math.min(wt,(De.start+De.count)*$e)),We!==null?(dt=Math.max(dt,0),wt=Math.min(wt,We.count)):tt!=null&&(dt=Math.max(dt,0),wt=Math.min(wt,tt.count));const Bt=wt-dt;if(Bt<0||Bt===1/0)return;Ge.setup(Z,ne,Ne,ie,We);let kt,Rt=G;if(We!==null&&(kt=J.get(We),Rt=Fe,Rt.setIndex(kt)),Z.isMesh)ne.wireframe===!0?(fe.setLineWidth(ne.wireframeLinewidth*ce()),Rt.setMode(U.LINES)):Rt.setMode(U.TRIANGLES);else if(Z.isLine){let ze=ne.linewidth;ze===void 0&&(ze=1),fe.setLineWidth(ze*ce()),Z.isLineSegments?Rt.setMode(U.LINES):Z.isLineLoop?Rt.setMode(U.LINE_LOOP):Rt.setMode(U.LINE_STRIP)}else Z.isPoints?Rt.setMode(U.POINTS):Z.isSprite&&Rt.setMode(U.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Zr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Rt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))Rt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const ze=Z._multiDrawStarts,St=Z._multiDrawCounts,yt=Z._multiDrawCount,rn=We?J.get(We).bytesPerElement:1,fi=g.get(ne).currentProgram.getUniforms();for(let en=0;en<yt;en++)fi.setValue(U,"_gl_DrawID",en),Rt.render(ze[en]/rn,St[en])}else if(Z.isInstancedMesh)Rt.renderInstances(dt,Bt,Z.count);else if(ie.isInstancedBufferGeometry){const ze=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,St=Math.min(ie.instanceCount,ze);Rt.renderInstances(dt,Bt,St)}else Rt.render(dt,Bt)};function oo(w,j,ie){w.transparent===!0&&w.side===ii&&w.forceSinglePass===!1?(w.side=En,w.needsUpdate=!0,bs(w,j,ie),w.side=Pi,w.needsUpdate=!0,bs(w,j,ie),w.side=ii):bs(w,j,ie)}this.compile=function(w,j,ie=null){ie===null&&(ie=w),S=Ae.get(ie),S.init(j),N.push(S),ie.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(S.pushLight(Z),Z.castShadow&&S.pushShadow(Z))}),w!==ie&&w.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(S.pushLight(Z),Z.castShadow&&S.pushShadow(Z))}),S.setupLights();const ne=new Set;return w.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const De=Z.material;if(De)if(Array.isArray(De))for(let Xe=0;Xe<De.length;Xe++){const Ne=De[Xe];oo(Ne,ie,Z),ne.add(Ne)}else oo(De,ie,Z),ne.add(De)}),S=N.pop(),ne},this.compileAsync=function(w,j,ie=null){const ne=this.compile(w,j,ie);return new Promise(Z=>{function De(){if(ne.forEach(function(Xe){g.get(Xe).currentProgram.isReady()&&ne.delete(Xe)}),ne.size===0){Z(w);return}setTimeout(De,10)}he.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let vr=null;function Ha(w){vr&&vr(w)}function ao(){hi.stop()}function Mr(){hi.start()}const hi=new Ap;hi.setAnimationLoop(Ha),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(w){vr=w,we.setAnimationLoop(w),w===null?hi.stop():hi.start()},we.addEventListener("sessionstart",ao),we.addEventListener("sessionend",Mr),this.render=function(w,j){if(j!==void 0&&j.isCamera!==!0){gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;const ie=we.enabled===!0&&we.isPresenting===!0,ne=F!==null&&(k===null||ie)&&F.begin(v,k);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(j),j=we.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,j,k),S=Ae.get(w,N.length),S.init(j),N.push(S),O.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Qe.setFromProjectionMatrix(O,si,j.reversedDepth),vt=this.localClippingEnabled,Oe=Pe.init(this.clippingPlanes,vt),E=xe.get(w,L.length),E.init(),L.push(E),we.enabled===!0&&we.isPresenting===!0){const Xe=v.xr.getDepthSensingMesh();Xe!==null&&ys(Xe,j,-1/0,v.sortObjects)}ys(w,j,0,v.sortObjects),E.finish(),v.sortObjects===!0&&E.sort(ke,Ce),se=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,se&&Te.addToRenderList(E,w),this.info.render.frame++,Oe===!0&&Pe.beginShadows();const Z=S.state.shadowsArray;if(Ve.render(Z,w,j),Oe===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&F.hasRenderPass())===!1){const Xe=E.opaque,Ne=E.transmissive;if(S.setupLights(),j.isArrayCamera){const We=j.cameras;if(Ne.length>0)for(let $e=0,st=We.length;$e<st;$e++){const tt=We[$e];co(Xe,Ne,w,tt)}se&&Te.render(w);for(let $e=0,st=We.length;$e<st;$e++){const tt=We[$e];lo(E,w,tt,tt.viewport)}}else Ne.length>0&&co(Xe,Ne,w,j),se&&Te.render(w),lo(E,w,j)}k!==null&&B===0&&(z.updateMultisampleRenderTarget(k),z.updateRenderTargetMipmap(k)),ne&&F.end(v),w.isScene===!0&&w.onAfterRender(v,w,j),Ge.resetDefaultState(),K=-1,$=null,N.pop(),N.length>0?(S=N[N.length-1],Oe===!0&&Pe.setGlobalState(v.clippingPlanes,S.state.camera)):S=null,L.pop(),L.length>0?E=L[L.length-1]:E=null};function ys(w,j,ie,ne){if(w.visible===!1)return;if(w.layers.test(j.layers)){if(w.isGroup)ie=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(j);else if(w.isLight)S.pushLight(w),w.castShadow&&S.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Qe.intersectsSprite(w)){ne&&Q.setFromMatrixPosition(w.matrixWorld).applyMatrix4(O);const Xe=Me.update(w),Ne=w.material;Ne.visible&&E.push(w,Xe,Ne,ie,Q.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Qe.intersectsObject(w))){const Xe=Me.update(w),Ne=w.material;if(ne&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Q.copy(w.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),Q.copy(Xe.boundingSphere.center)),Q.applyMatrix4(w.matrixWorld).applyMatrix4(O)),Array.isArray(Ne)){const We=Xe.groups;for(let $e=0,st=We.length;$e<st;$e++){const tt=We[$e],dt=Ne[tt.materialIndex];dt&&dt.visible&&E.push(w,Xe,dt,ie,Q.z,tt)}}else Ne.visible&&E.push(w,Xe,Ne,ie,Q.z,null)}}const De=w.children;for(let Xe=0,Ne=De.length;Xe<Ne;Xe++)ys(De[Xe],j,ie,ne)}function lo(w,j,ie,ne){const{opaque:Z,transmissive:De,transparent:Xe}=w;S.setupLightsView(ie),Oe===!0&&Pe.setGlobalState(v.clippingPlanes,ie),ne&&fe.viewport(V.copy(ne)),Z.length>0&&Ss(Z,j,ie),De.length>0&&Ss(De,j,ie),Xe.length>0&&Ss(Xe,j,ie),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function co(w,j,ie,ne){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[ne.id]===void 0){const dt=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[ne.id]=new ai(1,1,{generateMipmaps:!0,type:dt?Di:Pn,minFilter:Ei,samples:ae.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace})}const De=S.state.transmissionRenderTarget[ne.id],Xe=ne.viewport||V;De.setSize(Xe.z*v.transmissionResolutionScale,Xe.w*v.transmissionResolutionScale);const Ne=v.getRenderTarget(),We=v.getActiveCubeFace(),$e=v.getActiveMipmapLevel();v.setRenderTarget(De),v.getClearColor(pe),ge=v.getClearAlpha(),ge<1&&v.setClearColor(16777215,.5),v.clear(),se&&Te.render(ie);const st=v.toneMapping;v.toneMapping=oi;const tt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),S.setupLightsView(ne),Oe===!0&&Pe.setGlobalState(v.clippingPlanes,ne),Ss(w,ie,ne),z.updateMultisampleRenderTarget(De),z.updateRenderTargetMipmap(De),he.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let wt=0,Bt=j.length;wt<Bt;wt++){const kt=j[wt],{object:Rt,geometry:ze,material:St,group:yt}=kt;if(St.side===ii&&Rt.layers.test(ne.layers)){const rn=St.side;St.side=En,St.needsUpdate=!0,uo(Rt,ie,ne,ze,St,yt),St.side=rn,St.needsUpdate=!0,dt=!0}}dt===!0&&(z.updateMultisampleRenderTarget(De),z.updateRenderTargetMipmap(De))}v.setRenderTarget(Ne,We,$e),v.setClearColor(pe,ge),tt!==void 0&&(ne.viewport=tt),v.toneMapping=st}function Ss(w,j,ie){const ne=j.isScene===!0?j.overrideMaterial:null;for(let Z=0,De=w.length;Z<De;Z++){const Xe=w[Z],{object:Ne,geometry:We,group:$e}=Xe;let st=Xe.material;st.allowOverride===!0&&ne!==null&&(st=ne),Ne.layers.test(ie.layers)&&uo(Ne,j,ie,We,st,$e)}}function uo(w,j,ie,ne,Z,De){w.onBeforeRender(v,j,ie,ne,Z,De),w.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Z.onBeforeRender(v,j,ie,ne,w,De),Z.transparent===!0&&Z.side===ii&&Z.forceSinglePass===!1?(Z.side=En,Z.needsUpdate=!0,v.renderBufferDirect(ie,j,ne,Z,w,De),Z.side=Pi,Z.needsUpdate=!0,v.renderBufferDirect(ie,j,ne,Z,w,De),Z.side=ii):v.renderBufferDirect(ie,j,ne,Z,w,De),w.onAfterRender(v,j,ie,ne,Z,De)}function bs(w,j,ie){j.isScene!==!0&&(j=le);const ne=g.get(w),Z=S.state.lights,De=S.state.shadowsArray,Xe=Z.state.version,Ne=Be.getParameters(w,Z.state,De,j,ie),We=Be.getProgramCacheKey(Ne);let $e=ne.programs;ne.environment=w.isMeshStandardMaterial?j.environment:null,ne.fog=j.fog,ne.envMap=(w.isMeshStandardMaterial?oe:ee).get(w.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&w.envMap===null?j.environmentRotation:w.envMapRotation,$e===void 0&&(w.addEventListener("dispose",An),$e=new Map,ne.programs=$e);let st=$e.get(We);if(st!==void 0){if(ne.currentProgram===st&&ne.lightsStateVersion===Xe)return fo(w,Ne),st}else Ne.uniforms=Be.getUniforms(w),w.onBeforeCompile(Ne,v),st=Be.acquireProgram(Ne,We),$e.set(We,st),ne.uniforms=Ne.uniforms;const tt=ne.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(tt.clippingPlanes=Pe.uniform),fo(w,Ne),ne.needsLights=Xa(w),ne.lightsStateVersion=Xe,ne.needsLights&&(tt.ambientLightColor.value=Z.state.ambient,tt.lightProbe.value=Z.state.probe,tt.directionalLights.value=Z.state.directional,tt.directionalLightShadows.value=Z.state.directionalShadow,tt.spotLights.value=Z.state.spot,tt.spotLightShadows.value=Z.state.spotShadow,tt.rectAreaLights.value=Z.state.rectArea,tt.ltc_1.value=Z.state.rectAreaLTC1,tt.ltc_2.value=Z.state.rectAreaLTC2,tt.pointLights.value=Z.state.point,tt.pointLightShadows.value=Z.state.pointShadow,tt.hemisphereLights.value=Z.state.hemi,tt.directionalShadowMap.value=Z.state.directionalShadowMap,tt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,tt.spotShadowMap.value=Z.state.spotShadowMap,tt.spotLightMatrix.value=Z.state.spotLightMatrix,tt.spotLightMap.value=Z.state.spotLightMap,tt.pointShadowMap.value=Z.state.pointShadowMap,tt.pointShadowMatrix.value=Z.state.pointShadowMatrix),ne.currentProgram=st,ne.uniformsList=null,st}function ho(w){if(w.uniformsList===null){const j=w.currentProgram.getUniforms();w.uniformsList=ra.seqWithValue(j.seq,w.uniforms)}return w.uniformsList}function fo(w,j){const ie=g.get(w);ie.outputColorSpace=j.outputColorSpace,ie.batching=j.batching,ie.batchingColor=j.batchingColor,ie.instancing=j.instancing,ie.instancingColor=j.instancingColor,ie.instancingMorph=j.instancingMorph,ie.skinning=j.skinning,ie.morphTargets=j.morphTargets,ie.morphNormals=j.morphNormals,ie.morphColors=j.morphColors,ie.morphTargetsCount=j.morphTargetsCount,ie.numClippingPlanes=j.numClippingPlanes,ie.numIntersection=j.numClipIntersection,ie.vertexAlphas=j.vertexAlphas,ie.vertexTangents=j.vertexTangents,ie.toneMapping=j.toneMapping}function Ga(w,j,ie,ne,Z){j.isScene!==!0&&(j=le),z.resetTextureUnits();const De=j.fog,Xe=ne.isMeshStandardMaterial?j.environment:null,Ne=k===null?v.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:ur,We=(ne.isMeshStandardMaterial?oe:ee).get(ne.envMap||Xe),$e=ne.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,st=!!ie.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),tt=!!ie.morphAttributes.position,dt=!!ie.morphAttributes.normal,wt=!!ie.morphAttributes.color;let Bt=oi;ne.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Bt=v.toneMapping);const kt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Rt=kt!==void 0?kt.length:0,ze=g.get(ne),St=S.state.lights;if(Oe===!0&&(vt===!0||w!==$)){const je=w===$&&ne.id===K;Pe.setState(ne,w,je)}let yt=!1;ne.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==St.state.version||ze.outputColorSpace!==Ne||Z.isBatchedMesh&&ze.batching===!1||!Z.isBatchedMesh&&ze.batching===!0||Z.isBatchedMesh&&ze.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&ze.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&ze.instancing===!1||!Z.isInstancedMesh&&ze.instancing===!0||Z.isSkinnedMesh&&ze.skinning===!1||!Z.isSkinnedMesh&&ze.skinning===!0||Z.isInstancedMesh&&ze.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&ze.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&ze.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&ze.instancingMorph===!1&&Z.morphTexture!==null||ze.envMap!==We||ne.fog===!0&&ze.fog!==De||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Pe.numPlanes||ze.numIntersection!==Pe.numIntersection)||ze.vertexAlphas!==$e||ze.vertexTangents!==st||ze.morphTargets!==tt||ze.morphNormals!==dt||ze.morphColors!==wt||ze.toneMapping!==Bt||ze.morphTargetsCount!==Rt)&&(yt=!0):(yt=!0,ze.__version=ne.version);let rn=ze.currentProgram;yt===!0&&(rn=bs(ne,j,Z));let fi=!1,en=!1,Zn=!1;const Tt=rn.getUniforms(),tn=ze.uniforms;if(fe.useProgram(rn.program)&&(fi=!0,en=!0,Zn=!0),ne.id!==K&&(K=ne.id,en=!0),fi||$!==w){fe.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Tt.setValue(U,"projectionMatrix",w.projectionMatrix),Tt.setValue(U,"viewMatrix",w.matrixWorldInverse);const qt=Tt.map.cameraPosition;qt!==void 0&&qt.setValue(U,H.setFromMatrixPosition(w.matrixWorld)),ae.logarithmicDepthBuffer&&Tt.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Tt.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),$!==w&&($=w,en=!0,Zn=!0)}if(ze.needsLights&&(St.state.directionalShadowMap.length>0&&Tt.setValue(U,"directionalShadowMap",St.state.directionalShadowMap,z),St.state.spotShadowMap.length>0&&Tt.setValue(U,"spotShadowMap",St.state.spotShadowMap,z),St.state.pointShadowMap.length>0&&Tt.setValue(U,"pointShadowMap",St.state.pointShadowMap,z)),Z.isSkinnedMesh){Tt.setOptional(U,Z,"bindMatrix"),Tt.setOptional(U,Z,"bindMatrixInverse");const je=Z.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),Tt.setValue(U,"boneTexture",je.boneTexture,z))}Z.isBatchedMesh&&(Tt.setOptional(U,Z,"batchingTexture"),Tt.setValue(U,"batchingTexture",Z._matricesTexture,z),Tt.setOptional(U,Z,"batchingIdTexture"),Tt.setValue(U,"batchingIdTexture",Z._indirectTexture,z),Tt.setOptional(U,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Tt.setValue(U,"batchingColorTexture",Z._colorsTexture,z));const Mn=ie.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&at.update(Z,ie,rn),(en||ze.receiveShadow!==Z.receiveShadow)&&(ze.receiveShadow=Z.receiveShadow,Tt.setValue(U,"receiveShadow",Z.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(tn.envMap.value=We,tn.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&j.environment!==null&&(tn.envMapIntensity.value=j.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=vb()),en&&(Tt.setValue(U,"toneMappingExposure",v.toneMappingExposure),ze.needsLights&&Wa(tn,Zn),De&&ne.fog===!0&&Ke.refreshFogUniforms(tn,De),Ke.refreshMaterialUniforms(tn,ne,Ee,Le,S.state.transmissionRenderTarget[w.id]),ra.upload(U,ho(ze),tn,z)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(ra.upload(U,ho(ze),tn,z),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Tt.setValue(U,"center",Z.center),Tt.setValue(U,"modelViewMatrix",Z.modelViewMatrix),Tt.setValue(U,"normalMatrix",Z.normalMatrix),Tt.setValue(U,"modelMatrix",Z.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const je=ne.uniformsGroups;for(let qt=0,y=je.length;qt<y;qt++){const x=je[qt];ye.update(x,rn),ye.bind(x,rn)}}return rn}function Wa(w,j){w.ambientLightColor.needsUpdate=j,w.lightProbe.needsUpdate=j,w.directionalLights.needsUpdate=j,w.directionalLightShadows.needsUpdate=j,w.pointLights.needsUpdate=j,w.pointLightShadows.needsUpdate=j,w.spotLights.needsUpdate=j,w.spotLightShadows.needsUpdate=j,w.rectAreaLights.needsUpdate=j,w.hemisphereLights.needsUpdate=j}function Xa(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(w,j,ie){const ne=g.get(w);ne.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),g.get(w.texture).__webglTexture=j,g.get(w.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ie,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,j){const ie=g.get(w);ie.__webglFramebuffer=j,ie.__useDefaultFramebuffer=j===void 0};const pn=U.createFramebuffer();this.setRenderTarget=function(w,j=0,ie=0){k=w,I=j,B=ie;let ne=null,Z=!1,De=!1;if(w){const Ne=g.get(w);if(Ne.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(U.FRAMEBUFFER,Ne.__webglFramebuffer),V.copy(w.viewport),W.copy(w.scissor),Y=w.scissorTest,fe.viewport(V),fe.scissor(W),fe.setScissorTest(Y),K=-1;return}else if(Ne.__webglFramebuffer===void 0)z.setupRenderTarget(w);else if(Ne.__hasExternalTextures)z.rebindTextures(w,g.get(w.texture).__webglTexture,g.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const st=w.depthTexture;if(Ne.__boundDepthTexture!==st){if(st!==null&&g.has(st)&&(w.width!==st.image.width||w.height!==st.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(w)}}const We=w.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(De=!0);const $e=g.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray($e[j])?ne=$e[j][ie]:ne=$e[j],Z=!0):w.samples>0&&z.useMultisampledRTT(w)===!1?ne=g.get(w).__webglMultisampledFramebuffer:Array.isArray($e)?ne=$e[ie]:ne=$e,V.copy(w.viewport),W.copy(w.scissor),Y=w.scissorTest}else V.copy(q).multiplyScalar(Ee).floor(),W.copy(te).multiplyScalar(Ee).floor(),Y=Se;if(ie!==0&&(ne=pn),fe.bindFramebuffer(U.FRAMEBUFFER,ne)&&fe.drawBuffers(w,ne),fe.viewport(V),fe.scissor(W),fe.setScissorTest(Y),Z){const Ne=g.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ne.__webglTexture,ie)}else if(De){const Ne=j;for(let We=0;We<w.textures.length;We++){const $e=g.get(w.textures[We]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+We,$e.__webglTexture,ie,Ne)}}else if(w!==null&&ie!==0){const Ne=g.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ne.__webglTexture,ie)}K=-1},this.readRenderTargetPixels=function(w,j,ie,ne,Z,De,Xe,Ne=0){if(!(w&&w.isWebGLRenderTarget)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=g.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Xe!==void 0&&(We=We[Xe]),We){fe.bindFramebuffer(U.FRAMEBUFFER,We);try{const $e=w.textures[Ne],st=$e.format,tt=$e.type;if(!ae.textureFormatReadable(st)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ae.textureTypeReadable(tt)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=w.width-ne&&ie>=0&&ie<=w.height-Z&&(w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ne),U.readPixels(j,ie,ne,Z,be.convert(st),be.convert(tt),De))}finally{const $e=k!==null?g.get(k).__webglFramebuffer:null;fe.bindFramebuffer(U.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(w,j,ie,ne,Z,De,Xe,Ne=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=g.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Xe!==void 0&&(We=We[Xe]),We)if(j>=0&&j<=w.width-ne&&ie>=0&&ie<=w.height-Z){fe.bindFramebuffer(U.FRAMEBUFFER,We);const $e=w.textures[Ne],st=$e.format,tt=$e.type;if(!ae.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ae.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const dt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,dt),U.bufferData(U.PIXEL_PACK_BUFFER,De.byteLength,U.STREAM_READ),w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ne),U.readPixels(j,ie,ne,Z,be.convert(st),be.convert(tt),0);const wt=k!==null?g.get(k).__webglFramebuffer:null;fe.bindFramebuffer(U.FRAMEBUFFER,wt);const Bt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await a0(U,Bt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,dt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,De),U.deleteBuffer(dt),U.deleteSync(Bt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,j=null,ie=0){const ne=Math.pow(2,-ie),Z=Math.floor(w.image.width*ne),De=Math.floor(w.image.height*ne),Xe=j!==null?j.x:0,Ne=j!==null?j.y:0;z.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,ie,0,0,Xe,Ne,Z,De),fe.unbindTexture()};const Ii=U.createFramebuffer(),yr=U.createFramebuffer();this.copyTextureToTexture=function(w,j,ie=null,ne=null,Z=0,De=null){De===null&&(Z!==0?(Zr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),De=Z,Z=0):De=0);let Xe,Ne,We,$e,st,tt,dt,wt,Bt;const kt=w.isCompressedTexture?w.mipmaps[De]:w.image;if(ie!==null)Xe=ie.max.x-ie.min.x,Ne=ie.max.y-ie.min.y,We=ie.isBox3?ie.max.z-ie.min.z:1,$e=ie.min.x,st=ie.min.y,tt=ie.isBox3?ie.min.z:0;else{const Mn=Math.pow(2,-Z);Xe=Math.floor(kt.width*Mn),Ne=Math.floor(kt.height*Mn),w.isDataArrayTexture?We=kt.depth:w.isData3DTexture?We=Math.floor(kt.depth*Mn):We=1,$e=0,st=0,tt=0}ne!==null?(dt=ne.x,wt=ne.y,Bt=ne.z):(dt=0,wt=0,Bt=0);const Rt=be.convert(j.format),ze=be.convert(j.type);let St;j.isData3DTexture?(z.setTexture3D(j,0),St=U.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(z.setTexture2DArray(j,0),St=U.TEXTURE_2D_ARRAY):(z.setTexture2D(j,0),St=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,j.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,j.unpackAlignment);const yt=U.getParameter(U.UNPACK_ROW_LENGTH),rn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),fi=U.getParameter(U.UNPACK_SKIP_PIXELS),en=U.getParameter(U.UNPACK_SKIP_ROWS),Zn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,kt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,kt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,$e),U.pixelStorei(U.UNPACK_SKIP_ROWS,st),U.pixelStorei(U.UNPACK_SKIP_IMAGES,tt);const Tt=w.isDataArrayTexture||w.isData3DTexture,tn=j.isDataArrayTexture||j.isData3DTexture;if(w.isDepthTexture){const Mn=g.get(w),je=g.get(j),qt=g.get(Mn.__renderTarget),y=g.get(je.__renderTarget);fe.bindFramebuffer(U.READ_FRAMEBUFFER,qt.__webglFramebuffer),fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,y.__webglFramebuffer);for(let x=0;x<We;x++)Tt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,g.get(w).__webglTexture,Z,tt+x),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,g.get(j).__webglTexture,De,Bt+x)),U.blitFramebuffer($e,st,Xe,Ne,dt,wt,Xe,Ne,U.DEPTH_BUFFER_BIT,U.NEAREST);fe.bindFramebuffer(U.READ_FRAMEBUFFER,null),fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(Z!==0||w.isRenderTargetTexture||g.has(w)){const Mn=g.get(w),je=g.get(j);fe.bindFramebuffer(U.READ_FRAMEBUFFER,Ii),fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,yr);for(let qt=0;qt<We;qt++)Tt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Mn.__webglTexture,Z,tt+qt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Mn.__webglTexture,Z),tn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,je.__webglTexture,De,Bt+qt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,je.__webglTexture,De),Z!==0?U.blitFramebuffer($e,st,Xe,Ne,dt,wt,Xe,Ne,U.COLOR_BUFFER_BIT,U.NEAREST):tn?U.copyTexSubImage3D(St,De,dt,wt,Bt+qt,$e,st,Xe,Ne):U.copyTexSubImage2D(St,De,dt,wt,$e,st,Xe,Ne);fe.bindFramebuffer(U.READ_FRAMEBUFFER,null),fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else tn?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(St,De,dt,wt,Bt,Xe,Ne,We,Rt,ze,kt.data):j.isCompressedArrayTexture?U.compressedTexSubImage3D(St,De,dt,wt,Bt,Xe,Ne,We,Rt,kt.data):U.texSubImage3D(St,De,dt,wt,Bt,Xe,Ne,We,Rt,ze,kt):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,De,dt,wt,Xe,Ne,Rt,ze,kt.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,De,dt,wt,kt.width,kt.height,Rt,kt.data):U.texSubImage2D(U.TEXTURE_2D,De,dt,wt,Xe,Ne,Rt,ze,kt);U.pixelStorei(U.UNPACK_ROW_LENGTH,yt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,rn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,fi),U.pixelStorei(U.UNPACK_SKIP_ROWS,en),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Zn),De===0&&j.generateMipmaps&&U.generateMipmap(St),fe.unbindTexture()},this.initRenderTarget=function(w){g.get(w).__webglFramebuffer===void 0&&z.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?z.setTextureCube(w,0):w.isData3DTexture?z.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?z.setTexture2DArray(w,0):z.setTexture2D(w,0),fe.unbindTexture()},this.resetState=function(){I=0,B=0,k=null,fe.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}}const Lf={type:"change"},Nu={type:"start"},Dp={type:"end"},Wo=new so,Nf=new Xi,yb=Math.cos(70*Xs.DEG2RAD),jt=new X,Sn=2*Math.PI,It={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Bl=1e-6;class Sb extends Ex{constructor(e,t=null){super(e,t),this.state=It.NONE,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qs.ROTATE,MIDDLE:Qs.DOLLY,RIGHT:Qs.PAN},this.touches={ONE:qs.ROTATE,TWO:qs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new Hn,this._lastTargetPosition=new X,this._quat=new Hn().setFromUnitVectors(e.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new af,this._sphericalDelta=new af,this._scale=1,this._panOffset=new X,this._rotateStart=new ot,this._rotateEnd=new ot,this._rotateDelta=new ot,this._panStart=new ot,this._panEnd=new ot,this._panDelta=new ot,this._dollyStart=new ot,this._dollyEnd=new ot,this._dollyDelta=new ot,this._dollyDirection=new X,this._mouse=new ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Eb.bind(this),this._onPointerDown=bb.bind(this),this._onPointerUp=Tb.bind(this),this._onContextMenu=Lb.bind(this),this._onMouseWheel=Rb.bind(this),this._onKeyDown=Cb.bind(this),this._onTouchStart=Pb.bind(this),this._onTouchMove=Db.bind(this),this._onMouseDown=Ab.bind(this),this._onMouseMove=wb.bind(this),this._interceptControlDown=Nb.bind(this),this._interceptControlUp=Ib.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Lf),this.update(),this.state=It.NONE}update(e=null){const t=this.object.position;jt.copy(t).sub(this.target),jt.applyQuaternion(this._quat),this._spherical.setFromVector3(jt),this.autoRotate&&this.state===It.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Sn:i>Math.PI&&(i-=Sn),s<-Math.PI?s+=Sn:s>Math.PI&&(s-=Sn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(jt.setFromSpherical(this._spherical),jt.applyQuaternion(this._quatInverse),t.copy(this.target).add(jt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=jt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new X(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new X(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=jt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Wo.origin.copy(this.object.position),Wo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wo.direction))<yb?this.object.lookAt(this.target):(Nf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wo.intersectPlane(Nf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Bl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Bl||this._lastTargetPosition.distanceToSquared(this.target)>Bl?(this.dispatchEvent(Lf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Sn/60*this.autoRotateSpeed*e:Sn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){jt.setFromMatrixColumn(t,0),jt.multiplyScalar(-e),this._panOffset.add(jt)}_panUp(e,t){this.screenSpacePanning===!0?jt.setFromMatrixColumn(t,1):(jt.setFromMatrixColumn(t,0),jt.crossVectors(this.object.up,jt)),jt.multiplyScalar(e),this._panOffset.add(jt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;jt.copy(s).sub(this.target);let r=jt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ot,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function bb(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Eb(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Tb(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Dp),this.state=It.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Ab(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Qs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=It.DOLLY;break;case Qs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=It.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=It.ROTATE}break;case Qs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=It.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=It.PAN}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(Nu)}function wb(n){switch(this.state){case It.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case It.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case It.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Rb(n){this.enabled===!1||this.enableZoom===!1||this.state!==It.NONE||(n.preventDefault(),this.dispatchEvent(Nu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Dp))}function Cb(n){this.enabled!==!1&&this._handleKeyDown(n)}function Pb(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case qs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=It.TOUCH_ROTATE;break;case qs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=It.TOUCH_PAN;break;default:this.state=It.NONE}break;case 2:switch(this.touches.TWO){case qs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=It.TOUCH_DOLLY_PAN;break;case qs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=It.TOUCH_DOLLY_ROTATE;break;default:this.state=It.NONE}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(Nu)}function Db(n){switch(this._trackPointer(n),this.state){case It.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case It.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case It.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case It.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=It.NONE}}function Lb(n){this.enabled!==!1&&n.preventDefault()}function Nb(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ib(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Ub extends $i{constructor(e){super(e)}load(e,t,i,s){const r=this,o=new Du(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},i,s)}parse(e){function t(c){const u=new DataView(c),h=32/8*3+32/8*3*3+16/8,f=u.getUint32(80,!0);if(80+32/8+f*h===u.byteLength)return!0;const _=[115,111,108,105,100];for(let M=0;M<5;M++)if(i(_,u,M))return!1;return!0}function i(c,u,h){for(let f=0,p=c.length;f<p;f++)if(c[f]!==u.getUint8(h+f))return!1;return!0}function s(c){const u=new DataView(c),h=u.getUint32(80,!0);let f,p,_,M=!1,m,d,R,D,E;for(let I=0;I<70;I++)u.getUint32(I,!1)==1129270351&&u.getUint8(I+4)==82&&u.getUint8(I+5)==61&&(M=!0,m=new Float32Array(h*3*3),d=u.getUint8(I+6)/255,R=u.getUint8(I+7)/255,D=u.getUint8(I+8)/255,E=u.getUint8(I+9)/255);const S=84,L=50,N=new Qt,F=new Float32Array(h*3*3),v=new Float32Array(h*3*3),b=new ht;for(let I=0;I<h;I++){const B=S+I*L,k=u.getFloat32(B,!0),K=u.getFloat32(B+4,!0),$=u.getFloat32(B+8,!0);if(M){const V=u.getUint16(B+48,!0);(V&32768)===0?(f=(V&31)/31,p=(V>>5&31)/31,_=(V>>10&31)/31):(f=d,p=R,_=D)}for(let V=1;V<=3;V++){const W=B+V*12,Y=I*3*3+(V-1)*3;F[Y]=u.getFloat32(W,!0),F[Y+1]=u.getFloat32(W+4,!0),F[Y+2]=u.getFloat32(W+8,!0),v[Y]=k,v[Y+1]=K,v[Y+2]=$,M&&(b.setRGB(f,p,_,Ht),m[Y]=b.r,m[Y+1]=b.g,m[Y+2]=b.b)}}return N.setAttribute("position",new In(F,3)),N.setAttribute("normal",new In(v,3)),M&&(N.setAttribute("color",new In(m,3)),N.hasColors=!0,N.alpha=E),N}function r(c){const u=new Qt,h=/solid([\s\S]*?)endsolid/g,f=/facet([\s\S]*?)endfacet/g,p=/solid\s(.+)/;let _=0;const M=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+M+M+M,"g"),d=new RegExp("normal"+M+M+M,"g"),R=[],D=[],E=[],S=new X;let L,N=0,F=0,v=0;for(;(L=h.exec(c))!==null;){F=v;const b=L[0],I=(L=p.exec(b))!==null?L[1]:"";for(E.push(I);(L=f.exec(b))!==null;){let K=0,$=0;const V=L[0];for(;(L=d.exec(V))!==null;)S.x=parseFloat(L[1]),S.y=parseFloat(L[2]),S.z=parseFloat(L[3]),$++;for(;(L=m.exec(V))!==null;)R.push(parseFloat(L[1]),parseFloat(L[2]),parseFloat(L[3])),D.push(S.x,S.y,S.z),K++,v++;$!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+_),K!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+_),_++}const B=F,k=v-F;u.userData.groupNames=E,u.addGroup(B,k,N),N++}return u.setAttribute("position",new At(R,3)),u.setAttribute("normal",new At(D,3)),u}function o(c){return typeof c!="string"?new TextDecoder().decode(c):c}function a(c){if(typeof c=="string"){const u=new Uint8Array(c.length);for(let h=0;h<c.length;h++)u[h]=c.charCodeAt(h)&255;return u.buffer||u}else return c}const l=a(e);return t(l)?s(l):r(o(e))}}class If extends px{constructor(e){super(e)}parse(e){function t(V){switch(V.image_type){case f:case M:if(V.colormap_length>256||V.colormap_size!==24||V.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case p:case _:case m:case d:if(V.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case h:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+V.image_type)}if(V.width<=0||V.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(V.pixel_size!==8&&V.pixel_size!==16&&V.pixel_size!==24&&V.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+V.pixel_size)}function i(V,W,Y,pe,ge){let me,Le;const Ee=Y.pixel_size>>3,ke=Y.width*Y.height*Ee;if(W&&(Le=ge.subarray(pe,pe+=Y.colormap_length*(Y.colormap_size>>3))),V){me=new Uint8Array(ke);let Ce,q,te,Se=0;const Qe=new Uint8Array(Ee);for(;Se<ke;)if(Ce=ge[pe++],q=(Ce&127)+1,Ce&128){for(te=0;te<Ee;++te)Qe[te]=ge[pe++];for(te=0;te<q;++te)me.set(Qe,Se+te*Ee);Se+=Ee*q}else{for(q*=Ee,te=0;te<q;++te)me[Se+te]=ge[pe++];Se+=q}}else me=ge.subarray(pe,pe+=W?Y.width*Y.height:ke);return{pixel_data:me,palettes:Le}}function s(V,W,Y,pe,ge,me,Le,Ee,ke){const Ce=ke;let q,te=0,Se,Qe;const Oe=b.width;for(Qe=W;Qe!==pe;Qe+=Y)for(Se=ge;Se!==Le;Se+=me,te++)q=Ee[te],V[(Se+Oe*Qe)*4+3]=255,V[(Se+Oe*Qe)*4+2]=Ce[q*3+0],V[(Se+Oe*Qe)*4+1]=Ce[q*3+1],V[(Se+Oe*Qe)*4+0]=Ce[q*3+2];return V}function r(V,W,Y,pe,ge,me,Le,Ee){let ke,Ce=0,q,te;const Se=b.width;for(te=W;te!==pe;te+=Y)for(q=ge;q!==Le;q+=me,Ce+=2)ke=Ee[Ce+0]+(Ee[Ce+1]<<8),V[(q+Se*te)*4+0]=(ke&31744)>>7,V[(q+Se*te)*4+1]=(ke&992)>>2,V[(q+Se*te)*4+2]=(ke&31)<<3,V[(q+Se*te)*4+3]=ke&32768?0:255;return V}function o(V,W,Y,pe,ge,me,Le,Ee){let ke=0,Ce,q;const te=b.width;for(q=W;q!==pe;q+=Y)for(Ce=ge;Ce!==Le;Ce+=me,ke+=3)V[(Ce+te*q)*4+3]=255,V[(Ce+te*q)*4+2]=Ee[ke+0],V[(Ce+te*q)*4+1]=Ee[ke+1],V[(Ce+te*q)*4+0]=Ee[ke+2];return V}function a(V,W,Y,pe,ge,me,Le,Ee){let ke=0,Ce,q;const te=b.width;for(q=W;q!==pe;q+=Y)for(Ce=ge;Ce!==Le;Ce+=me,ke+=4)V[(Ce+te*q)*4+2]=Ee[ke+0],V[(Ce+te*q)*4+1]=Ee[ke+1],V[(Ce+te*q)*4+0]=Ee[ke+2],V[(Ce+te*q)*4+3]=Ee[ke+3];return V}function l(V,W,Y,pe,ge,me,Le,Ee){let ke,Ce=0,q,te;const Se=b.width;for(te=W;te!==pe;te+=Y)for(q=ge;q!==Le;q+=me,Ce++)ke=Ee[Ce],V[(q+Se*te)*4+0]=ke,V[(q+Se*te)*4+1]=ke,V[(q+Se*te)*4+2]=ke,V[(q+Se*te)*4+3]=255;return V}function c(V,W,Y,pe,ge,me,Le,Ee){let ke=0,Ce,q;const te=b.width;for(q=W;q!==pe;q+=Y)for(Ce=ge;Ce!==Le;Ce+=me,ke+=2)V[(Ce+te*q)*4+0]=Ee[ke+0],V[(Ce+te*q)*4+1]=Ee[ke+0],V[(Ce+te*q)*4+2]=Ee[ke+0],V[(Ce+te*q)*4+3]=Ee[ke+1];return V}function u(V,W,Y,pe,ge){let me,Le,Ee,ke,Ce,q;switch((b.flags&R)>>D){default:case L:me=0,Ee=1,Ce=W,Le=0,ke=1,q=Y;break;case E:me=0,Ee=1,Ce=W,Le=Y-1,ke=-1,q=-1;break;case N:me=W-1,Ee=-1,Ce=-1,Le=0,ke=1,q=Y;break;case S:me=W-1,Ee=-1,Ce=-1,Le=Y-1,ke=-1,q=-1;break}if(k)switch(b.pixel_size){case 8:l(V,Le,ke,q,me,Ee,Ce,pe);break;case 16:c(V,Le,ke,q,me,Ee,Ce,pe);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(b.pixel_size){case 8:s(V,Le,ke,q,me,Ee,Ce,pe,ge);break;case 16:r(V,Le,ke,q,me,Ee,Ce,pe);break;case 24:o(V,Le,ke,q,me,Ee,Ce,pe);break;case 32:a(V,Le,ke,q,me,Ee,Ce,pe);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return V}const h=0,f=1,p=2,_=3,M=9,m=10,d=11,R=48,D=4,E=0,S=1,L=2,N=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let F=0;const v=new Uint8Array(e),b={id_length:v[F++],colormap_type:v[F++],image_type:v[F++],colormap_index:v[F++]|v[F++]<<8,colormap_length:v[F++]|v[F++]<<8,colormap_size:v[F++],origin:[v[F++]|v[F++]<<8,v[F++]|v[F++]<<8],width:v[F++]|v[F++]<<8,height:v[F++]|v[F++]<<8,pixel_size:v[F++],flags:v[F++]};if(t(b),b.id_length+F>e.length)throw new Error("THREE.TGALoader: No data.");F+=b.id_length;let I=!1,B=!1,k=!1;switch(b.image_type){case M:I=!0,B=!0;break;case f:B=!0;break;case m:I=!0;break;case p:break;case d:I=!0,k=!0;break;case _:k=!0;break}const K=new Uint8Array(b.width*b.height*4),$=i(I,B,b,F,v);return u(K,b.width,b.height,$.pixel_data,$.palettes),{data:K,width:b.width,height:b.height,flipY:!0,generateMipmaps:!0,minFilter:Ei}}}class Fb extends $i{load(e,t,i,s){const r=this,o=r.path===""?Tp.extractUrlBase(e):r.path,a=new Du(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){try{t(r.parse(l,o))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},i,s)}parse(e,t){function i(y,x){const C=[],T=y.childNodes;for(let P=0,re=T.length;P<re;P++){const ue=T[P];ue.nodeName===x&&C.push(ue)}return C}function s(y){if(y.length===0)return[];const x=y.trim().split(/\s+/),C=new Array(x.length);for(let T=0,P=x.length;T<P;T++)C[T]=x[T];return C}function r(y){if(y.length===0)return[];const x=y.trim().split(/\s+/),C=new Array(x.length);for(let T=0,P=x.length;T<P;T++)C[T]=parseFloat(x[T]);return C}function o(y){if(y.length===0)return[];const x=y.trim().split(/\s+/),C=new Array(x.length);for(let T=0,P=x.length;T<P;T++)C[T]=parseInt(x[T]);return C}function a(y){return y.substring(1)}function l(){return"three_default_"+Mn++}function c(y){return Object.keys(y).length===0}function u(y){return{unit:h(i(y,"unit")[0]),upAxis:f(i(y,"up_axis")[0])}}function h(y){return y!==void 0&&y.hasAttribute("meter")===!0?parseFloat(y.getAttribute("meter")):1}function f(y){return y!==void 0?y.textContent:"Y_UP"}function p(y,x,C,T){const P=i(y,x)[0];if(P!==void 0){const re=i(P,C);for(let ue=0;ue<re.length;ue++)T(re[ue])}}function _(y,x){for(const C in y){const T=y[C];T.build=x(y[C])}}function M(y,x){return y.build!==void 0||(y.build=x(y)),y.build}function m(y){const x={sources:{},samplers:{},channels:{}};let C=!1;for(let T=0,P=y.childNodes.length;T<P;T++){const re=y.childNodes[T];if(re.nodeType!==1)continue;let ue;switch(re.nodeName){case"source":ue=re.getAttribute("id"),x.sources[ue]=be(re);break;case"sampler":ue=re.getAttribute("id"),x.samplers[ue]=d(re);break;case"channel":ue=re.getAttribute("target"),x.channels[ue]=R(re);break;case"animation":m(re),C=!0;break;default:console.log(re)}}C===!1&&(je.animations[y.getAttribute("id")||Xs.generateUUID()]=x)}function d(y){const x={inputs:{}};for(let C=0,T=y.childNodes.length;C<T;C++){const P=y.childNodes[C];if(P.nodeType===1&&P.nodeName==="input"){const re=a(P.getAttribute("source")),ue=P.getAttribute("semantic");x.inputs[ue]=re}}return x}function R(y){const x={};let T=y.getAttribute("target").split("/");const P=T.shift();let re=T.shift();const ue=re.indexOf("(")!==-1,qe=re.indexOf(".")!==-1;if(qe)T=re.split("."),re=T.shift(),x.member=T.shift();else if(ue){const Re=re.split("(");re=Re.shift();for(let He=0;He<Re.length;He++)Re[He]=parseInt(Re[He].replace(/\)/,""));x.indices=Re}return x.id=P,x.sid=re,x.arraySyntax=ue,x.memberSyntax=qe,x.sampler=a(y.getAttribute("source")),x}function D(y){const x=[],C=y.channels,T=y.samplers,P=y.sources;for(const re in C)if(C.hasOwnProperty(re)){const ue=C[re],qe=T[ue.sampler],Re=qe.inputs.INPUT,He=qe.inputs.OUTPUT,Je=P[Re],ve=P[He],Ze=S(ue,Je,ve);b(Ze,x)}return x}function E(y){return M(je.animations[y],D)}function S(y,x,C){const T=je.nodes[y.id],P=We(T.id),re=T.transforms[y.sid],ue=T.matrix.clone().transpose();let qe,Re,He,Je,ve,Ze;const Ye={};switch(re){case"matrix":for(He=0,Je=x.array.length;He<Je;He++)if(qe=x.array[He],Re=He*C.stride,Ye[qe]===void 0&&(Ye[qe]={}),y.arraySyntax===!0){const zt=C.array[Re],Dt=y.indices[0]+4*y.indices[1];Ye[qe][Dt]=zt}else for(ve=0,Ze=C.stride;ve<Ze;ve++)Ye[qe][ve]=C.array[Re+ve];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',re);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',re);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',re);break}const it=L(Ye,ue);return{name:P.uuid,keyframes:it}}function L(y,x){const C=[];for(const P in y)C.push({time:parseFloat(P),value:y[P]});C.sort(T);for(let P=0;P<16;P++)I(C,P,x.elements[P]);return C;function T(P,re){return P.time-re.time}}const N=new X,F=new X,v=new Hn;function b(y,x){const C=y.keyframes,T=y.name,P=[],re=[],ue=[],qe=[];for(let Re=0,He=C.length;Re<He;Re++){const Je=C[Re],ve=Je.time,Ze=Je.value;pn.fromArray(Ze).transpose(),pn.decompose(N,v,F),P.push(ve),re.push(N.x,N.y,N.z),ue.push(v.x,v.y,v.z,v.w),qe.push(F.x,F.y,F.z)}return re.length>0&&x.push(new dr(T+".position",P,re)),ue.length>0&&x.push(new ro(T+".quaternion",P,ue)),qe.length>0&&x.push(new dr(T+".scale",P,qe)),x}function I(y,x,C){let T,P=!0,re,ue;for(re=0,ue=y.length;re<ue;re++)T=y[re],T.value[x]===void 0?T.value[x]=null:P=!1;if(P===!0)for(re=0,ue=y.length;re<ue;re++)T=y[re],T.value[x]=C;else B(y,x)}function B(y,x){let C,T;for(let P=0,re=y.length;P<re;P++){const ue=y[P];if(ue.value[x]===null){if(C=k(y,P,x),T=K(y,P,x),C===null){ue.value[x]=T.value[x];continue}if(T===null){ue.value[x]=C.value[x];continue}$(ue,C,T,x)}}}function k(y,x,C){for(;x>=0;){const T=y[x];if(T.value[C]!==null)return T;x--}return null}function K(y,x,C){for(;x<y.length;){const T=y[x];if(T.value[C]!==null)return T;x++}return null}function $(y,x,C,T){if(C.time-x.time===0){y.value[T]=x.value[T];return}y.value[T]=(y.time-x.time)*(C.value[T]-x.value[T])/(C.time-x.time)+x.value[T]}function V(y){const x={name:y.getAttribute("id")||"default",start:parseFloat(y.getAttribute("start")||0),end:parseFloat(y.getAttribute("end")||0),animations:[]};for(let C=0,T=y.childNodes.length;C<T;C++){const P=y.childNodes[C];P.nodeType===1&&P.nodeName==="instance_animation"&&x.animations.push(a(P.getAttribute("url")))}je.clips[y.getAttribute("id")]=x}function W(y){const x=[],C=y.name,T=y.end-y.start||-1,P=y.animations;for(let re=0,ue=P.length;re<ue;re++){const qe=E(P[re]);for(let Re=0,He=qe.length;Re<He;Re++)x.push(qe[Re])}return new tf(C,T,x)}function Y(y){return M(je.clips[y],W)}function pe(y){const x={};for(let C=0,T=y.childNodes.length;C<T;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"skin":x.id=a(P.getAttribute("source")),x.skin=ge(P);break;case"morph":x.id=a(P.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}je.controllers[y.getAttribute("id")]=x}function ge(y){const x={sources:{}};for(let C=0,T=y.childNodes.length;C<T;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"bind_shape_matrix":x.bindShapeMatrix=r(P.textContent);break;case"source":const re=P.getAttribute("id");x.sources[re]=be(P);break;case"joints":x.joints=me(P);break;case"vertex_weights":x.vertexWeights=Le(P);break}}return x}function me(y){const x={inputs:{}};for(let C=0,T=y.childNodes.length;C<T;C++){const P=y.childNodes[C];if(P.nodeType===1&&P.nodeName==="input"){const re=P.getAttribute("semantic"),ue=a(P.getAttribute("source"));x.inputs[re]=ue}}return x}function Le(y){const x={inputs:{}};for(let C=0,T=y.childNodes.length;C<T;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"input":const re=P.getAttribute("semantic"),ue=a(P.getAttribute("source")),qe=parseInt(P.getAttribute("offset"));x.inputs[re]={id:ue,offset:qe};break;case"vcount":x.vcount=o(P.textContent);break;case"v":x.v=o(P.textContent);break}}return x}function Ee(y){const x={id:y.id},C=je.geometries[x.id];return y.skin!==void 0&&(x.skin=ke(y.skin),C.sources.skinIndices=x.skin.indices,C.sources.skinWeights=x.skin.weights),x}function ke(y){const C={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},T=y.sources,P=y.vertexWeights,re=P.vcount,ue=P.v,qe=P.inputs.JOINT.offset,Re=P.inputs.WEIGHT.offset,He=y.sources[y.joints.inputs.JOINT],Je=y.sources[y.joints.inputs.INV_BIND_MATRIX],ve=T[P.inputs.WEIGHT.id].array;let Ze=0,Ye,it,et;for(Ye=0,et=re.length;Ye<et;Ye++){const Dt=re[Ye],bt=[];for(it=0;it<Dt;it++){const Et=ue[Ze+qe],di=ue[Ze+Re],yn=ve[di];bt.push({index:Et,weight:yn}),Ze+=2}for(bt.sort(zt),it=0;it<4;it++){const Et=bt[it];Et!==void 0?(C.indices.array.push(Et.index),C.weights.array.push(Et.weight)):(C.indices.array.push(0),C.weights.array.push(0))}}for(y.bindShapeMatrix?C.bindMatrix=new lt().fromArray(y.bindShapeMatrix).transpose():C.bindMatrix=new lt().identity(),Ye=0,et=He.array.length;Ye<et;Ye++){const Dt=He.array[Ye],bt=new lt().fromArray(Je.array,Ye*Je.stride).transpose();C.joints.push({name:Dt,boneInverse:bt})}return C;function zt(Dt,bt){return bt.weight-Dt.weight}}function Ce(y){return M(je.controllers[y],Ee)}function q(y){const x={init_from:i(y,"init_from")[0].textContent};je.images[y.getAttribute("id")]=x}function te(y){return y.build!==void 0?y.build:y.init_from}function Se(y){const x=je.images[y];return x!==void 0?M(x,te):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",y),null)}function Qe(y){const x={};for(let C=0,T=y.childNodes.length;C<T;C++){const P=y.childNodes[C];P.nodeType===1&&P.nodeName==="profile_COMMON"&&(x.profile=Oe(P))}je.effects[y.getAttribute("id")]=x}function Oe(y){const x={surfaces:{},samplers:{}};for(let C=0,T=y.childNodes.length;C<T;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"newparam":vt(P,x);break;case"technique":x.technique=Q(P);break;case"extra":x.extra=he(P);break}}return x}function vt(y,x){const C=y.getAttribute("sid");for(let T=0,P=y.childNodes.length;T<P;T++){const re=y.childNodes[T];if(re.nodeType===1)switch(re.nodeName){case"surface":x.surfaces[C]=O(re);break;case"sampler2D":x.samplers[C]=H(re);break}}}function O(y){const x={};for(let C=0,T=y.childNodes.length;C<T;C++){const P=y.childNodes[C];P.nodeType===1&&P.nodeName==="init_from"&&(x.init_from=P.textContent)}return x}function H(y){const x={};for(let C=0,T=y.childNodes.length;C<T;C++){const P=y.childNodes[C];P.nodeType===1&&P.nodeName==="source"&&(x.source=P.textContent)}return x}function Q(y){const x={};for(let C=0,T=y.childNodes.length;C<T;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"constant":case"lambert":case"blinn":case"phong":x.type=P.nodeName,x.parameters=le(P);break;case"extra":x.extra=he(P);break}}return x}function le(y){const x={};for(let C=0,T=y.childNodes.length;C<T;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":x[P.nodeName]=se(P);break;case"transparent":x[P.nodeName]={opaque:P.hasAttribute("opaque")?P.getAttribute("opaque"):"A_ONE",data:se(P)};break}}return x}function se(y){const x={};for(let C=0,T=y.childNodes.length;C<T;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"color":x[P.nodeName]=r(P.textContent);break;case"float":x[P.nodeName]=parseFloat(P.textContent);break;case"texture":x[P.nodeName]={id:P.getAttribute("texture"),extra:ce(P)};break}}return x}function ce(y){const x={technique:{}};for(let C=0,T=y.childNodes.length;C<T;C++){const P=y.childNodes[C];P.nodeType===1&&P.nodeName==="extra"&&U(P,x)}return x}function U(y,x){for(let C=0,T=y.childNodes.length;C<T;C++){const P=y.childNodes[C];P.nodeType===1&&P.nodeName==="technique"&&_e(P,x)}}function _e(y,x){for(let C=0,T=y.childNodes.length;C<T;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":x.technique[P.nodeName]=parseFloat(P.textContent);break;case"wrapU":case"wrapV":P.textContent.toUpperCase()==="TRUE"?x.technique[P.nodeName]=1:P.textContent.toUpperCase()==="FALSE"?x.technique[P.nodeName]=0:x.technique[P.nodeName]=parseInt(P.textContent);break;case"bump":x[P.nodeName]=fe(P);break}}}function he(y){const x={};for(let C=0,T=y.childNodes.length;C<T;C++){const P=y.childNodes[C];P.nodeType===1&&P.nodeName==="technique"&&(x.technique=ae(P))}return x}function ae(y){const x={};for(let C=0,T=y.childNodes.length;C<T;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"double_sided":x[P.nodeName]=parseInt(P.textContent);break;case"bump":x[P.nodeName]=fe(P);break}}return x}function fe(y){const x={};for(let C=0,T=y.childNodes.length;C<T;C++){const P=y.childNodes[C];P.nodeType===1&&P.nodeName==="texture"&&(x[P.nodeName]={id:P.getAttribute("texture"),texcoord:P.getAttribute("texcoord"),extra:ce(P)})}return x}function A(y){return y}function g(y){return M(je.effects[y],A)}function z(y){const x={name:y.getAttribute("name")};for(let C=0,T=y.childNodes.length;C<T;C++){const P=y.childNodes[C];P.nodeType===1&&P.nodeName==="instance_effect"&&(x.url=a(P.getAttribute("url")))}je.materials[y.getAttribute("id")]=x}function ee(y){let x,C=y.slice((y.lastIndexOf(".")-1>>>0)+2);return C=C.toLowerCase(),C==="tga"?x=en:x=fi,x}function oe(y){const x=g(y.url),C=x.profile.technique;let T;switch(C.type){case"phong":case"blinn":T=new ir;break;case"lambert":T=new tx;break;default:T=new ga;break}T.name=y.name||"";function P(Re,He=null){const Je=x.profile.samplers[Re.id];let ve=null;if(Je!==void 0){const Ze=x.profile.surfaces[Je.source];ve=Se(Ze.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),ve=Se(Re.id);if(ve!==null){const Ze=ee(ve);if(Ze!==void 0){const Ye=Ze.load(ve),it=Re.extra;if(it!==void 0&&it.technique!==void 0&&c(it.technique)===!1){const et=it.technique;Ye.wrapS=et.wrapU?fs:Nn,Ye.wrapT=et.wrapV?fs:Nn,Ye.offset.set(et.offsetU||0,et.offsetV||0),Ye.repeat.set(et.repeatU||1,et.repeatV||1)}else Ye.wrapS=fs,Ye.wrapT=fs;return He!==null&&(Ye.colorSpace=He),Ye}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",ve),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",Re.id),null}const re=C.parameters;for(const Re in re){const He=re[Re];switch(Re){case"diffuse":He.color&&T.color.fromArray(He.color),He.texture&&(T.map=P(He.texture,Ht));break;case"specular":He.color&&T.specular&&T.specular.fromArray(He.color),He.texture&&(T.specularMap=P(He.texture));break;case"bump":He.texture&&(T.normalMap=P(He.texture));break;case"ambient":He.texture&&(T.lightMap=P(He.texture,Ht));break;case"shininess":He.float&&T.shininess&&(T.shininess=He.float);break;case"emission":He.color&&T.emissive&&T.emissive.fromArray(He.color),He.texture&&(T.emissiveMap=P(He.texture,Ht));break}}xt.colorSpaceToWorking(T.color,Ht),T.specular&&xt.colorSpaceToWorking(T.specular,Ht),T.emissive&&xt.colorSpaceToWorking(T.emissive,Ht);let ue=re.transparent,qe=re.transparency;if(qe===void 0&&ue&&(qe={float:1}),ue===void 0&&qe&&(ue={opaque:"A_ONE",data:{color:[1,1,1,1]}}),ue&&qe)if(ue.data.texture)T.transparent=!0;else{const Re=ue.data.color;switch(ue.opaque){case"A_ONE":T.opacity=Re[3]*qe.float;break;case"RGB_ZERO":T.opacity=1-Re[0]*qe.float;break;case"A_ZERO":T.opacity=1-Re[3]*qe.float;break;case"RGB_ONE":T.opacity=Re[0]*qe.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',ue.opaque)}T.opacity<1&&(T.transparent=!0)}if(C.extra!==void 0&&C.extra.technique!==void 0){const Re=C.extra.technique;for(const He in Re){const Je=Re[He];switch(He){case"double_sided":T.side=Je===1?ii:Pi;break;case"bump":T.normalMap=P(Je.texture),T.normalScale=new ot(1,1);break}}}return T}function J(y){return M(je.materials[y],oe)}function Ie(y){const x={name:y.getAttribute("name")};for(let C=0,T=y.childNodes.length;C<T;C++){const P=y.childNodes[C];P.nodeType===1&&P.nodeName==="optics"&&(x.optics=Me(P))}je.cameras[y.getAttribute("id")]=x}function Me(y){for(let x=0;x<y.childNodes.length;x++){const C=y.childNodes[x];if(C.nodeName==="technique_common")return Be(C)}return{}}function Be(y){const x={};for(let C=0;C<y.childNodes.length;C++){const T=y.childNodes[C];switch(T.nodeName){case"perspective":case"orthographic":x.technique=T.nodeName,x.parameters=Ke(T);break}}return x}function Ke(y){const x={};for(let C=0;C<y.childNodes.length;C++){const T=y.childNodes[C];switch(T.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":x[T.nodeName]=parseFloat(T.textContent);break}}return x}function xe(y){let x;switch(y.optics.technique){case"perspective":x=new cn(y.optics.parameters.yfov,y.optics.parameters.aspect_ratio,y.optics.parameters.znear,y.optics.parameters.zfar);break;case"orthographic":let C=y.optics.parameters.ymag,T=y.optics.parameters.xmag;const P=y.optics.parameters.aspect_ratio;T=T===void 0?C*P:T,C=C===void 0?T/P:C,T*=.5,C*=.5,x=new Oa(-T,T,C,-C,y.optics.parameters.znear,y.optics.parameters.zfar);break;default:x=new cn;break}return x.name=y.name||"",x}function Ae(y){const x=je.cameras[y];return x!==void 0?M(x,xe):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",y),null)}function Pe(y){let x={};for(let C=0,T=y.childNodes.length;C<T;C++){const P=y.childNodes[C];P.nodeType===1&&P.nodeName==="technique_common"&&(x=Ve(P))}je.lights[y.getAttribute("id")]=x}function Ve(y){const x={};for(let C=0,T=y.childNodes.length;C<T;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"directional":case"point":case"spot":case"ambient":x.technique=P.nodeName,x.parameters=Te(P)}}return x}function Te(y){const x={};for(let C=0,T=y.childNodes.length;C<T;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"color":const re=r(P.textContent);x.color=new ht().fromArray(re),xt.colorSpaceToWorking(x.color,Ht);break;case"falloff_angle":x.falloffAngle=parseFloat(P.textContent);break;case"quadratic_attenuation":const ue=parseFloat(P.textContent);x.distance=ue?Math.sqrt(1/ue):0;break}}return x}function at(y){let x;switch(y.technique){case"directional":x=new bp;break;case"point":x=new xx;break;case"spot":x=new gx;break;case"ambient":x=new Ep;break}return y.parameters.color&&x.color.copy(y.parameters.color),y.parameters.distance&&(x.distance=y.parameters.distance),x}function G(y){const x=je.lights[y];return x!==void 0?M(x,at):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",y),null)}function Fe(y){const x={name:y.getAttribute("name"),sources:{},vertices:{},primitives:[]},C=i(y,"mesh")[0];if(C!==void 0){for(let T=0;T<C.childNodes.length;T++){const P=C.childNodes[T];if(P.nodeType!==1)continue;const re=P.getAttribute("id");switch(P.nodeName){case"source":x.sources[re]=be(P);break;case"vertices":x.vertices=Ge(P);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",P.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":x.primitives.push(ye(P));break;default:console.log(P)}}je.geometries[y.getAttribute("id")]=x}}function be(y){const x={array:[],stride:3};for(let C=0;C<y.childNodes.length;C++){const T=y.childNodes[C];if(T.nodeType===1)switch(T.nodeName){case"float_array":x.array=r(T.textContent);break;case"Name_array":x.array=s(T.textContent);break;case"technique_common":const P=i(T,"accessor")[0];P!==void 0&&(x.stride=parseInt(P.getAttribute("stride")));break}}return x}function Ge(y){const x={};for(let C=0;C<y.childNodes.length;C++){const T=y.childNodes[C];T.nodeType===1&&(x[T.getAttribute("semantic")]=a(T.getAttribute("source")))}return x}function ye(y){const x={type:y.nodeName,material:y.getAttribute("material"),count:parseInt(y.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let C=0,T=y.childNodes.length;C<T;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"input":const re=a(P.getAttribute("source")),ue=P.getAttribute("semantic"),qe=parseInt(P.getAttribute("offset")),Re=parseInt(P.getAttribute("set")),He=Re>0?ue+Re:ue;x.inputs[He]={id:re,offset:qe},x.stride=Math.max(x.stride,qe+1),ue==="TEXCOORD"&&(x.hasUV=!0);break;case"vcount":x.vcount=o(P.textContent);break;case"p":x.p=o(P.textContent);break}}return x}function de(y){const x={};for(let C=0;C<y.length;C++){const T=y[C];x[T.type]===void 0&&(x[T.type]=[]),x[T.type].push(T)}return x}function we(y){let x=0;for(let C=0,T=y.length;C<T;C++)y[C].hasUV===!0&&x++;x>0&&x<y.length&&(y.uvsNeedsFix=!0)}function rt(y){const x={},C=y.sources,T=y.vertices,P=y.primitives;if(P.length===0)return{};const re=de(P);for(const ue in re){const qe=re[ue];we(qe),x[ue]=Nt(qe,C,T)}return x}function Nt(y,x,C){const T={},P={array:[],stride:0},re={array:[],stride:0},ue={array:[],stride:0},qe={array:[],stride:0},Re={array:[],stride:0},He={array:[],stride:4},Je={array:[],stride:4},ve=new Qt,Ze=[];let Ye=0;for(let it=0;it<y.length;it++){const et=y[it],zt=et.inputs;let Dt=0;switch(et.type){case"lines":case"linestrips":Dt=et.count*2;break;case"triangles":Dt=et.count*3;break;case"polylist":for(let bt=0;bt<et.count;bt++){const Et=et.vcount[bt];switch(Et){case 3:Dt+=3;break;case 4:Dt+=6;break;default:Dt+=(Et-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknown primitive type:",et.type)}ve.addGroup(Ye,Dt,it),Ye+=Dt,et.material&&Ze.push(et.material);for(const bt in zt){const Et=zt[bt];switch(bt){case"VERTEX":for(const di in C){const yn=C[di];switch(di){case"POSITION":const Es=P.array.length;if(ft(et,x[yn],Et.offset,P.array),P.stride=x[yn].stride,x.skinWeights&&x.skinIndices&&(ft(et,x.skinIndices,Et.offset,He.array),ft(et,x.skinWeights,Et.offset,Je.array)),et.hasUV===!1&&y.uvsNeedsFix===!0){const Ip=(P.array.length-Es)/P.stride;for(let Iu=0;Iu<Ip;Iu++)ue.array.push(0,0)}break;case"NORMAL":ft(et,x[yn],Et.offset,re.array),re.stride=x[yn].stride;break;case"COLOR":ft(et,x[yn],Et.offset,Re.array),Re.stride=x[yn].stride;break;case"TEXCOORD":ft(et,x[yn],Et.offset,ue.array),ue.stride=x[yn].stride;break;case"TEXCOORD1":ft(et,x[yn],Et.offset,qe.array),ue.stride=x[yn].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',di)}}break;case"NORMAL":ft(et,x[Et.id],Et.offset,re.array),re.stride=x[Et.id].stride;break;case"COLOR":ft(et,x[Et.id],Et.offset,Re.array,!0),Re.stride=x[Et.id].stride;break;case"TEXCOORD":ft(et,x[Et.id],Et.offset,ue.array),ue.stride=x[Et.id].stride;break;case"TEXCOORD1":ft(et,x[Et.id],Et.offset,qe.array),qe.stride=x[Et.id].stride;break}}}return P.array.length>0&&ve.setAttribute("position",new At(P.array,P.stride)),re.array.length>0&&ve.setAttribute("normal",new At(re.array,re.stride)),Re.array.length>0&&ve.setAttribute("color",new At(Re.array,Re.stride)),ue.array.length>0&&ve.setAttribute("uv",new At(ue.array,ue.stride)),qe.array.length>0&&ve.setAttribute("uv1",new At(qe.array,qe.stride)),He.array.length>0&&ve.setAttribute("skinIndex",new At(He.array,He.stride)),Je.array.length>0&&ve.setAttribute("skinWeight",new At(Je.array,Je.stride)),T.data=ve,T.type=y[0].type,T.materialKeys=Ze,T}function ft(y,x,C,T,P=!1){const re=y.p,ue=y.stride,qe=y.vcount;function Re(ve){let Ze=re[ve+C]*Je;const Ye=Ze+Je;for(;Ze<Ye;Ze++)T.push(He[Ze]);if(P){const it=T.length-Je-1;Zn.setRGB(T[it+0],T[it+1],T[it+2],Ht),T[it+0]=Zn.r,T[it+1]=Zn.g,T[it+2]=Zn.b}}const He=x.array,Je=x.stride;if(y.vcount!==void 0){let ve=0;for(let Ze=0,Ye=qe.length;Ze<Ye;Ze++){const it=qe[Ze];if(it===4){const et=ve+ue*0,zt=ve+ue*1,Dt=ve+ue*2,bt=ve+ue*3;Re(et),Re(zt),Re(bt),Re(zt),Re(Dt),Re(bt)}else if(it===3){const et=ve+ue*0,zt=ve+ue*1,Dt=ve+ue*2;Re(et),Re(zt),Re(Dt)}else if(it>4)for(let et=1,zt=it-2;et<=zt;et++){const Dt=ve+ue*0,bt=ve+ue*et,Et=ve+ue*(et+1);Re(Dt),Re(bt),Re(Et)}ve+=ue*it}}else for(let ve=0,Ze=re.length;ve<Ze;ve+=ue)Re(ve)}function An(y){return M(je.geometries[y],rt)}function Gn(y){const x={name:y.getAttribute("name")||"",joints:{},links:[]};for(let C=0;C<y.childNodes.length;C++){const T=y.childNodes[C];T.nodeType===1&&T.nodeName==="technique_common"&&vr(T,x)}je.kinematicsModels[y.getAttribute("id")]=x}function za(y){return y.build!==void 0?y.build:y}function oo(y){return M(je.kinematicsModels[y],za)}function vr(y,x){for(let C=0;C<y.childNodes.length;C++){const T=y.childNodes[C];if(T.nodeType===1)switch(T.nodeName){case"joint":x.joints[T.getAttribute("sid")]=Ha(T);break;case"link":x.links.push(Mr(T));break}}}function Ha(y){let x;for(let C=0;C<y.childNodes.length;C++){const T=y.childNodes[C];if(T.nodeType===1)switch(T.nodeName){case"prismatic":case"revolute":x=ao(T);break}}return x}function ao(y){const x={sid:y.getAttribute("sid"),name:y.getAttribute("name")||"",axis:new X,limits:{min:0,max:0},type:y.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let C=0;C<y.childNodes.length;C++){const T=y.childNodes[C];if(T.nodeType===1)switch(T.nodeName){case"axis":const P=r(T.textContent);x.axis.fromArray(P);break;case"limits":const re=T.getElementsByTagName("max")[0],ue=T.getElementsByTagName("min")[0];x.limits.max=parseFloat(re.textContent),x.limits.min=parseFloat(ue.textContent);break}}return x.limits.min>=x.limits.max&&(x.static=!0),x.middlePosition=(x.limits.min+x.limits.max)/2,x}function Mr(y){const x={sid:y.getAttribute("sid"),name:y.getAttribute("name")||"",attachments:[],transforms:[]};for(let C=0;C<y.childNodes.length;C++){const T=y.childNodes[C];if(T.nodeType===1)switch(T.nodeName){case"attachment_full":x.attachments.push(hi(T));break;case"matrix":case"translate":case"rotate":x.transforms.push(ys(T));break}}return x}function hi(y){const x={joint:y.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let C=0;C<y.childNodes.length;C++){const T=y.childNodes[C];if(T.nodeType===1)switch(T.nodeName){case"link":x.links.push(Mr(T));break;case"matrix":case"translate":case"rotate":x.transforms.push(ys(T));break}}return x}function ys(y){const x={type:y.nodeName},C=r(y.textContent);switch(x.type){case"matrix":x.obj=new lt,x.obj.fromArray(C).transpose();break;case"translate":x.obj=new X,x.obj.fromArray(C);break;case"rotate":x.obj=new X,x.obj.fromArray(C),x.angle=Xs.degToRad(C[3]);break}return x}function lo(y){const x={name:y.getAttribute("name")||"",rigidBodies:{}};for(let C=0;C<y.childNodes.length;C++){const T=y.childNodes[C];T.nodeType===1&&T.nodeName==="rigid_body"&&(x.rigidBodies[T.getAttribute("name")]={},co(T,x.rigidBodies[T.getAttribute("name")]))}je.physicsModels[y.getAttribute("id")]=x}function co(y,x){for(let C=0;C<y.childNodes.length;C++){const T=y.childNodes[C];T.nodeType===1&&T.nodeName==="technique_common"&&Ss(T,x)}}function Ss(y,x){for(let C=0;C<y.childNodes.length;C++){const T=y.childNodes[C];if(T.nodeType===1)switch(T.nodeName){case"inertia":x.inertia=r(T.textContent);break;case"mass":x.mass=r(T.textContent)[0];break}}}function uo(y){const x={bindJointAxis:[]};for(let C=0;C<y.childNodes.length;C++){const T=y.childNodes[C];T.nodeType===1&&T.nodeName==="bind_joint_axis"&&x.bindJointAxis.push(bs(T))}je.kinematicsScenes[a(y.getAttribute("url"))]=x}function bs(y){const x={target:y.getAttribute("target").split("/").pop()};for(let C=0;C<y.childNodes.length;C++){const T=y.childNodes[C];if(T.nodeType===1&&T.nodeName==="axis"){const P=T.getElementsByTagName("param")[0];x.axis=P.textContent;const re=x.axis.split("inst_").pop().split("axis")[0];x.jointIndex=re.substring(0,re.length-1)}}return x}function ho(y){return y.build!==void 0?y.build:y}function fo(y){return M(je.kinematicsScenes[y],ho)}function Ga(){const y=Object.keys(je.kinematicsModels)[0],x=Object.keys(je.kinematicsScenes)[0],C=Object.keys(je.visualScenes)[0];if(y===void 0||x===void 0)return;const T=oo(y),P=fo(x),re=dt(C),ue=P.bindJointAxis,qe={};for(let Je=0,ve=ue.length;Je<ve;Je++){const Ze=ue[Je],Ye=ze.querySelector('[sid="'+Ze.target+'"]');if(Ye){const it=Ye.parentElement;Re(Ze.jointIndex,it)}}function Re(Je,ve){const Ze=ve.getAttribute("name"),Ye=T.joints[Je];re.traverse(function(it){it.name===Ze&&(qe[Je]={object:it,transforms:Wa(ve),joint:Ye,position:Ye.zeroPosition})})}const He=new lt;tn={joints:T&&T.joints,getJointValue:function(Je){const ve=qe[Je];if(ve)return ve.position;console.warn("THREE.ColladaLoader: Joint "+Je+" doesn't exist.")},setJointValue:function(Je,ve){const Ze=qe[Je];if(Ze){const Ye=Ze.joint;if(ve>Ye.limits.max||ve<Ye.limits.min)console.warn("THREE.ColladaLoader: Joint "+Je+" value "+ve+" outside of limits (min: "+Ye.limits.min+", max: "+Ye.limits.max+").");else if(Ye.static)console.warn("THREE.ColladaLoader: Joint "+Je+" is static.");else{const it=Ze.object,et=Ye.axis,zt=Ze.transforms;pn.identity();for(let Dt=0;Dt<zt.length;Dt++){const bt=zt[Dt];if(bt.sid&&bt.sid.indexOf(Je)!==-1)switch(Ye.type){case"revolute":pn.multiply(He.makeRotationAxis(et,Xs.degToRad(ve)));break;case"prismatic":pn.multiply(He.makeTranslation(et.x*ve,et.y*ve,et.z*ve));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Ye.type);break}else switch(bt.type){case"matrix":pn.multiply(bt.obj);break;case"translate":pn.multiply(He.makeTranslation(bt.obj.x,bt.obj.y,bt.obj.z));break;case"scale":pn.scale(bt.obj);break;case"rotate":pn.multiply(He.makeRotationAxis(bt.obj,bt.angle));break}}it.matrix.copy(pn),it.matrix.decompose(it.position,it.quaternion,it.scale),qe[Je].position=ve}}else console.log("THREE.ColladaLoader: "+Je+" does not exist.")}}}function Wa(y){const x=[],C=ze.querySelector('[id="'+y.id+'"]');for(let T=0;T<C.childNodes.length;T++){const P=C.childNodes[T];if(P.nodeType!==1)continue;let re,ue;switch(P.nodeName){case"matrix":re=r(P.textContent);const qe=new lt().fromArray(re).transpose();x.push({sid:P.getAttribute("sid"),type:P.nodeName,obj:qe});break;case"translate":case"scale":re=r(P.textContent),ue=new X().fromArray(re),x.push({sid:P.getAttribute("sid"),type:P.nodeName,obj:ue});break;case"rotate":re=r(P.textContent),ue=new X().fromArray(re);const Re=Xs.degToRad(re[3]);x.push({sid:P.getAttribute("sid"),type:P.nodeName,obj:ue,angle:Re});break}}return x}function Xa(y){const x=y.getElementsByTagName("node");for(let C=0;C<x.length;C++){const T=x[C];T.hasAttribute("id")===!1&&T.setAttribute("id",l())}}const pn=new lt,Ii=new X;function yr(y){const x={name:y.getAttribute("name")||"",type:y.getAttribute("type"),id:y.getAttribute("id"),sid:y.getAttribute("sid"),matrix:new lt,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let C=0;C<y.childNodes.length;C++){const T=y.childNodes[C];if(T.nodeType!==1)continue;let P;switch(T.nodeName){case"node":x.nodes.push(T.getAttribute("id")),yr(T);break;case"instance_camera":x.instanceCameras.push(a(T.getAttribute("url")));break;case"instance_controller":x.instanceControllers.push(w(T));break;case"instance_light":x.instanceLights.push(a(T.getAttribute("url")));break;case"instance_geometry":x.instanceGeometries.push(w(T));break;case"instance_node":x.instanceNodes.push(a(T.getAttribute("url")));break;case"matrix":P=r(T.textContent),x.matrix.multiply(pn.fromArray(P).transpose()),x.transforms[T.getAttribute("sid")]=T.nodeName;break;case"translate":P=r(T.textContent),Ii.fromArray(P),x.matrix.multiply(pn.makeTranslation(Ii.x,Ii.y,Ii.z)),x.transforms[T.getAttribute("sid")]=T.nodeName;break;case"rotate":P=r(T.textContent);const re=Xs.degToRad(P[3]);x.matrix.multiply(pn.makeRotationAxis(Ii.fromArray(P),re)),x.transforms[T.getAttribute("sid")]=T.nodeName;break;case"scale":P=r(T.textContent),x.matrix.scale(Ii.fromArray(P)),x.transforms[T.getAttribute("sid")]=T.nodeName;break;case"extra":break;default:console.log(T)}}return Ne(x.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",x.id):je.nodes[x.id]=x,x}function w(y){const x={id:a(y.getAttribute("url")),materials:{},skeletons:[]};for(let C=0;C<y.childNodes.length;C++){const T=y.childNodes[C];switch(T.nodeName){case"bind_material":const P=T.getElementsByTagName("instance_material");for(let re=0;re<P.length;re++){const ue=P[re],qe=ue.getAttribute("symbol"),Re=ue.getAttribute("target");x.materials[qe]=a(Re)}break;case"skeleton":x.skeletons.push(a(T.textContent));break}}return x}function j(y,x){const C=[],T=[];let P,re,ue;for(P=0;P<y.length;P++){const He=y[P];let Je;if(Ne(He))Je=We(He),ie(Je,x,C);else if(tt(He)){const Ze=je.visualScenes[He].children;for(let Ye=0;Ye<Ze.length;Ye++){const it=Ze[Ye];if(it.type==="JOINT"){const et=We(it.id);ie(et,x,C)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",He)}for(P=0;P<x.length;P++)for(re=0;re<C.length;re++)if(ue=C[re],ue.bone.name===x[P].name){T[P]=ue,ue.processed=!0;break}for(P=0;P<C.length;P++)ue=C[P],ue.processed===!1&&(T.push(ue),ue.processed=!0);const qe=[],Re=[];for(P=0;P<T.length;P++)ue=T[P],qe.push(ue.bone),Re.push(ue.boneInverse);return new wu(qe,Re)}function ie(y,x,C){y.traverse(function(T){if(T.isBone===!0){let P;for(let re=0;re<x.length;re++){const ue=x[re];if(ue.name===T.name){P=ue.boneInverse;break}}P===void 0&&(P=new lt),C.push({bone:T,boneInverse:P,processed:!1})}})}function ne(y){const x=[],C=y.matrix,T=y.nodes,P=y.type,re=y.instanceCameras,ue=y.instanceControllers,qe=y.instanceLights,Re=y.instanceGeometries,He=y.instanceNodes;for(let ve=0,Ze=T.length;ve<Ze;ve++)x.push(We(T[ve]));for(let ve=0,Ze=re.length;ve<Ze;ve++){const Ye=Ae(re[ve]);Ye!==null&&x.push(Ye.clone())}for(let ve=0,Ze=ue.length;ve<Ze;ve++){const Ye=ue[ve],it=Ce(Ye.id),et=An(it.id),zt=Xe(et,Ye.materials),Dt=Ye.skeletons,bt=it.skin.joints,Et=j(Dt,bt);for(let di=0,yn=zt.length;di<yn;di++){const Es=zt[di];Es.isSkinnedMesh&&(Es.bind(Et,it.skin.bindMatrix),Es.normalizeSkinWeights()),x.push(Es)}}for(let ve=0,Ze=qe.length;ve<Ze;ve++){const Ye=G(qe[ve]);Ye!==null&&x.push(Ye.clone())}for(let ve=0,Ze=Re.length;ve<Ze;ve++){const Ye=Re[ve],it=An(Ye.id),et=Xe(it,Ye.materials);for(let zt=0,Dt=et.length;zt<Dt;zt++)x.push(et[zt])}for(let ve=0,Ze=He.length;ve<Ze;ve++)x.push(We(He[ve]).clone());let Je;if(T.length===0&&x.length===1)Je=x[0];else{Je=P==="JOINT"?new gp:new js;for(let ve=0;ve<x.length;ve++)Je.add(x[ve])}return Je.name=P==="JOINT"?y.sid:y.name,Je.matrix.copy(C),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je}const Z=new ga({name:$i.DEFAULT_MATERIAL_NAME,color:16711935});function De(y,x){const C=[];for(let T=0,P=y.length;T<P;T++){const re=x[y[T]];re===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",y[T]),C.push(Z)):C.push(J(re))}return C}function Xe(y,x){const C=[];for(const T in y){const P=y[T],re=De(P.materialKeys,x);if(re.length===0&&(T==="lines"||T==="linestrips"?re.push(new _s):re.push(new ir)),T==="lines"||T==="linestrips")for(let He=0,Je=re.length;He<Je;He++){const ve=re[He];if(ve.isMeshPhongMaterial===!0||ve.isMeshLambertMaterial===!0){const Ze=new _s;Ze.color.copy(ve.color),Ze.opacity=ve.opacity,Ze.transparent=ve.transparent,re[He]=Ze}}const ue=P.data.attributes.skinIndex!==void 0,qe=re.length===1?re[0]:re;let Re;switch(T){case"lines":Re=new Jr(P.data,qe);break;case"linestrips":Re=new _p(P.data,qe);break;case"triangles":case"polylist":ue?Re=new Y0(P.data,qe):Re=new nn(P.data,qe);break}C.push(Re)}return C}function Ne(y){return je.nodes[y]!==void 0}function We(y){return M(je.nodes[y],ne)}function $e(y){const x={name:y.getAttribute("name"),children:[]};Xa(y);const C=i(y,"node");for(let T=0;T<C.length;T++)x.children.push(yr(C[T]));je.visualScenes[y.getAttribute("id")]=x}function st(y){const x=new js;x.name=y.name;const C=y.children;for(let T=0;T<C.length;T++){const P=C[T];x.add(We(P.id))}return x}function tt(y){return je.visualScenes[y]!==void 0}function dt(y){return M(je.visualScenes[y],st)}function wt(y){const x=i(y,"instance_visual_scene")[0];return dt(a(x.getAttribute("url")))}function Bt(){const y=je.clips;if(c(y)===!0){if(c(je.animations)===!1){const x=[];for(const C in je.animations){const T=E(C);for(let P=0,re=T.length;P<re;P++)x.push(T[P])}Tt.push(new tf("default",-1,x))}}else for(const x in y)Tt.push(Y(x))}function kt(y){let x="";const C=[y];for(;C.length;){const T=C.shift();T.nodeType===Node.TEXT_NODE?x+=T.textContent:(x+=`
`,C.push(...T.childNodes))}return x.trim()}if(e.length===0)return{scene:new mp};const Rt=new DOMParser().parseFromString(e,"application/xml"),ze=i(Rt,"COLLADA")[0],St=Rt.getElementsByTagName("parsererror")[0];if(St!==void 0){const y=i(St,"div")[0];let x;return y?x=y.textContent:x=kt(St),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,x),null}const yt=ze.getAttribute("version");console.debug("THREE.ColladaLoader: File version",yt);const rn=u(i(ze,"asset")[0]),fi=new Sp(this.manager);fi.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let en;If&&(en=new If(this.manager),en.setPath(this.resourcePath||t));const Zn=new ht,Tt=[];let tn={},Mn=0;const je={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};p(ze,"library_animations","animation",m),p(ze,"library_animation_clips","animation_clip",V),p(ze,"library_controllers","controller",pe),p(ze,"library_images","image",q),p(ze,"library_effects","effect",Qe),p(ze,"library_materials","material",z),p(ze,"library_cameras","camera",Ie),p(ze,"library_lights","light",Pe),p(ze,"library_geometries","geometry",Fe),p(ze,"library_nodes","node",yr),p(ze,"library_visual_scenes","visual_scene",$e),p(ze,"library_kinematics_models","kinematics_model",Gn),p(ze,"library_physics_models","physics_model",lo),p(ze,"scene","instance_kinematics_scene",uo),_(je.animations,D),_(je.clips,W),_(je.controllers,Ee),_(je.images,te),_(je.effects,A),_(je.materials,oe),_(je.cameras,xe),_(je.lights,at),_(je.geometries,rt),_(je.visualScenes,st),Bt(),Ga();const qt=wt(i(ze,"scene")[0]);return qt.animations=Tt,rn.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),qt.rotation.set(-Math.PI/2,0,0)),qt.scale.multiplyScalar(rn.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),Tt},kinematics:tn,library:je,scene:qt}}}const Uf=new X,Ob=new Tn,Xo=new lt,zi=new lt,qo=new Hn,jo=new X(1,1,1),Yo=new X;class Va extends Gt{constructor(...e){super(...e),this.urdfNode=null,this.urdfName=""}copy(e,t){return super.copy(e,t),this.urdfNode=e.urdfNode,this.urdfName=e.urdfName,this}}class Bb extends Va{constructor(...e){super(...e),this.isURDFCollider=!0,this.type="URDFCollider"}}class kb extends Va{constructor(...e){super(...e),this.isURDFVisual=!0,this.type="URDFVisual"}}class Lp extends Va{constructor(...e){super(...e),this.isURDFLink=!0,this.type="URDFLink"}}class Np extends Va{get jointType(){return this._jointType}set jointType(e){if(this.jointType!==e)switch(this._jointType=e,this.matrixWorldNeedsUpdate=!0,e){case"fixed":this.jointValue=[];break;case"continuous":case"revolute":case"prismatic":this.jointValue=new Array(1).fill(0);break;case"planar":this.jointValue=new Array(3).fill(0),this.axis=new X(0,0,1);break;case"floating":this.jointValue=new Array(6).fill(0);break}}get angle(){return this.jointValue[0]}constructor(...e){super(...e),this.isURDFJoint=!0,this.type="URDFJoint",this.jointValue=null,this.jointType="fixed",this.axis=new X(1,0,0),this.limit={lower:0,upper:0},this.ignoreLimits=!1,this.origPosition=null,this.origQuaternion=null,this.mimicJoints=[]}copy(e,t){return super.copy(e,t),this.jointType=e.jointType,this.axis=e.axis.clone(),this.limit.lower=e.limit.lower,this.limit.upper=e.limit.upper,this.ignoreLimits=!1,this.jointValue=[...e.jointValue],this.origPosition=e.origPosition?e.origPosition.clone():null,this.origQuaternion=e.origQuaternion?e.origQuaternion.clone():null,this.mimicJoints=[...e.mimicJoints],this}setJointValue(...e){e=e.map(i=>i===null?null:parseFloat(i)),(!this.origPosition||!this.origQuaternion)&&(this.origPosition=this.position.clone(),this.origQuaternion=this.quaternion.clone());let t=!1;switch(this.mimicJoints.forEach(i=>{t=i.updateFromMimickedJoint(...e)||t}),this.jointType){case"fixed":return t;case"continuous":case"revolute":{let i=e[0];return i==null||i===this.jointValue[0]?t:(!this.ignoreLimits&&this.jointType==="revolute"&&(i=Math.min(this.limit.upper,i),i=Math.max(this.limit.lower,i)),this.quaternion.setFromAxisAngle(this.axis,i).premultiply(this.origQuaternion),this.jointValue[0]!==i?(this.jointValue[0]=i,this.matrixWorldNeedsUpdate=!0,!0):t)}case"prismatic":{let i=e[0];return i==null||i===this.jointValue[0]?t:(this.ignoreLimits||(i=Math.min(this.limit.upper,i),i=Math.max(this.limit.lower,i)),this.position.copy(this.origPosition),Uf.copy(this.axis).applyEuler(this.rotation),this.position.addScaledVector(Uf,i),this.jointValue[0]!==i?(this.jointValue[0]=i,this.matrixWorldNeedsUpdate=!0,!0):t)}case"floating":return this.jointValue.every((i,s)=>e[s]===i||e[s]===null)?t:(this.jointValue[0]=e[0]!==null?e[0]:this.jointValue[0],this.jointValue[1]=e[1]!==null?e[1]:this.jointValue[1],this.jointValue[2]=e[2]!==null?e[2]:this.jointValue[2],this.jointValue[3]=e[3]!==null?e[3]:this.jointValue[3],this.jointValue[4]=e[4]!==null?e[4]:this.jointValue[4],this.jointValue[5]=e[5]!==null?e[5]:this.jointValue[5],zi.compose(this.origPosition,this.origQuaternion,jo),qo.setFromEuler(Ob.set(this.jointValue[3],this.jointValue[4],this.jointValue[5],"XYZ")),Yo.set(this.jointValue[0],this.jointValue[1],this.jointValue[2]),Xo.compose(Yo,qo,jo),zi.premultiply(Xo),this.position.setFromMatrixPosition(zi),this.rotation.setFromRotationMatrix(zi),this.matrixWorldNeedsUpdate=!0,!0);case"planar":return this.jointValue.every((i,s)=>e[s]===i||e[s]===null)?t:(this.jointValue[0]=e[0]!==null?e[0]:this.jointValue[0],this.jointValue[1]=e[1]!==null?e[1]:this.jointValue[1],this.jointValue[2]=e[2]!==null?e[2]:this.jointValue[2],zi.compose(this.origPosition,this.origQuaternion,jo),qo.setFromAxisAngle(this.axis,this.jointValue[2]),Yo.set(this.jointValue[0],this.jointValue[1],0),Xo.compose(Yo,qo,jo),zi.premultiply(Xo),this.position.setFromMatrixPosition(zi),this.rotation.setFromRotationMatrix(zi),this.matrixWorldNeedsUpdate=!0,!0)}return t}}class Ff extends Np{constructor(...e){super(...e),this.type="URDFMimicJoint",this.mimicJoint=null,this.offset=0,this.multiplier=1}updateFromMimickedJoint(...e){const t=e.map(i=>i*this.multiplier+this.offset);return super.setJointValue(...t)}copy(e,t){return super.copy(e,t),this.mimicJoint=e.mimicJoint,this.offset=e.offset,this.multiplier=e.multiplier,this}}class Vb extends Lp{constructor(...e){super(...e),this.isURDFRobot=!0,this.urdfNode=null,this.urdfRobotNode=null,this.robotName=null,this.links=null,this.joints=null,this.colliders=null,this.visual=null,this.frames=null}copy(e,t){super.copy(e,t),this.urdfRobotNode=e.urdfRobotNode,this.robotName=e.robotName,this.links={},this.joints={},this.colliders={},this.visual={},this.traverse(i=>{i.isURDFJoint&&i.urdfName in e.joints&&(this.joints[i.urdfName]=i),i.isURDFLink&&i.urdfName in e.links&&(this.links[i.urdfName]=i),i.isURDFCollider&&i.urdfName in e.colliders&&(this.colliders[i.urdfName]=i),i.isURDFVisual&&i.urdfName in e.visual&&(this.visual[i.urdfName]=i)});for(const i in this.joints)this.joints[i].mimicJoints=this.joints[i].mimicJoints.map(s=>this.joints[s.name]);return this.frames={...this.colliders,...this.visual,...this.links,...this.joints},this}getFrame(e){return this.frames[e]}setJointValue(e,...t){const i=this.joints[e];return i?i.setJointValue(...t):!1}setJointValues(e){let t=!1;for(const i in e){const s=e[i];Array.isArray(s)?t=this.setJointValue(i,...s)||t:t=this.setJointValue(i,s)||t}return t}}const kl=new Hn,Of=new Tn;function zs(n){return n?n.trim().split(/\s+/g).map(e=>parseFloat(e)):[0,0,0]}function Bf(n,e,t=!1){t||n.rotation.set(0,0,0),Of.set(e[0],e[1],e[2],"ZYX"),kl.setFromEuler(Of),kl.multiply(n.quaternion),n.quaternion.copy(kl)}class zb{constructor(e){this.manager=e||yp,this.loadMeshCb=this.defaultMeshLoader.bind(this),this.parseVisual=!0,this.parseCollision=!1,this.packages="",this.workingPath="",this.fetchOptions={}}loadAsync(e){return new Promise((t,i)=>{this.load(e,t,null,i)})}load(e,t,i,s){const r=this.manager,o=Tp.extractUrlBase(e),a=this.manager.resolveURL(e);r.itemStart(a),fetch(a,this.fetchOptions).then(l=>{if(l.ok)return i&&i(null),l.text();throw new Error(`URDFLoader: Failed to load url '${a}' with error code ${l.status} : ${l.statusText}.`)}).then(l=>{const c=this.parse(l,this.workingPath||o);t(c),r.itemEnd(a)}).catch(l=>{s?s(l):console.error("URDFLoader: Error loading file.",l),r.itemError(a),r.itemEnd(a)})}parse(e,t=this.workingPath){const i=this.packages,s=this.loadMeshCb,r=this.parseVisual,o=this.parseCollision,a=this.manager,l={},c={},u={};function h(R){if(!/^package:\/\//.test(R))return t?t+R:R;const[D,E]=R.replace(/^package:\/\//,"").split(/\/(.+)/);if(typeof i=="string")return i.endsWith(D)?i+"/"+E:i+"/"+D+"/"+E;if(i instanceof Function)return i(D)+"/"+E;if(typeof i=="object")return D in i?i[D]+"/"+E:(console.error(`URDFLoader : ${D} not found in provided package list.`),null)}function f(R){let D;R instanceof Document?D=[...R.children]:R instanceof Element?D=[R]:D=[...new DOMParser().parseFromString(R,"text/xml").children];const E=D.filter(S=>S.nodeName==="robot").pop();return p(E)}function p(R){const D=[...R.children],E=D.filter(I=>I.nodeName.toLowerCase()==="link"),S=D.filter(I=>I.nodeName.toLowerCase()==="joint"),L=D.filter(I=>I.nodeName.toLowerCase()==="material"),N=new Vb;N.robotName=R.getAttribute("name"),N.urdfRobotNode=R,L.forEach(I=>{const B=I.getAttribute("name");u[B]=m(I)});const F={},v={};E.forEach(I=>{const B=I.getAttribute("name"),k=R.querySelector(`child[link="${B}"]`)===null;l[B]=M(I,F,v,k?N:null)}),S.forEach(I=>{const B=I.getAttribute("name");c[B]=_(I)}),N.joints=c,N.links=l,N.colliders=v,N.visual=F;const b=Object.values(c);return b.forEach(I=>{I instanceof Ff&&c[I.mimicJoint].mimicJoints.push(I)}),b.forEach(I=>{const B=new Set,k=K=>{if(B.has(K))throw new Error("URDFLoader: Detected an infinite loop of mimic joints.");B.add(K),K.mimicJoints.forEach($=>{k($)})};k(I)}),N.frames={...v,...F,...l,...c},N}function _(R){const D=[...R.children],E=R.getAttribute("type");let S;const L=D.find(B=>B.nodeName.toLowerCase()==="mimic");L?(S=new Ff,S.mimicJoint=L.getAttribute("joint"),S.multiplier=parseFloat(L.getAttribute("multiplier")||1),S.offset=parseFloat(L.getAttribute("offset")||0)):S=new Np,S.urdfNode=R,S.name=R.getAttribute("name"),S.urdfName=S.name,S.jointType=E;let N=null,F=null,v=[0,0,0],b=[0,0,0];D.forEach(B=>{const k=B.nodeName.toLowerCase();k==="origin"?(v=zs(B.getAttribute("xyz")),b=zs(B.getAttribute("rpy"))):k==="child"?F=l[B.getAttribute("link")]:k==="parent"?N=l[B.getAttribute("link")]:k==="limit"&&(S.limit.lower=parseFloat(B.getAttribute("lower")||S.limit.lower),S.limit.upper=parseFloat(B.getAttribute("upper")||S.limit.upper))}),N.add(S),S.add(F),Bf(S,b),S.position.set(v[0],v[1],v[2]);const I=D.filter(B=>B.nodeName.toLowerCase()==="axis")[0];if(I){const B=I.getAttribute("xyz").split(/\s+/g).map(k=>parseFloat(k));S.axis=new X(B[0],B[1],B[2]),S.axis.normalize()}return S}function M(R,D,E,S=null){S===null&&(S=new Lp);const L=[...R.children];return S.name=R.getAttribute("name"),S.urdfName=S.name,S.urdfNode=R,r&&L.filter(F=>F.nodeName.toLowerCase()==="visual").forEach(F=>{const v=d(F,u);if(S.add(v),F.hasAttribute("name")){const b=F.getAttribute("name");v.name=b,v.urdfName=b,D[b]=v}}),o&&L.filter(F=>F.nodeName.toLowerCase()==="collision").forEach(F=>{const v=d(F);if(S.add(v),F.hasAttribute("name")){const b=F.getAttribute("name");v.name=b,v.urdfName=b,E[b]=v}}),S}function m(R){const D=[...R.children],E=new ir;return E.name=R.getAttribute("name")||"",D.forEach(S=>{const L=S.nodeName.toLowerCase();if(L==="color"){const N=S.getAttribute("rgba").split(/\s/g).map(F=>parseFloat(F));E.color.setRGB(N[0],N[1],N[2]),E.opacity=N[3],E.transparent=N[3]<1,E.depthWrite=!E.transparent}else if(L==="texture"){const N=S.getAttribute("filename");if(N){const F=new Sp(a),v=h(N);E.map=F.load(v),E.map.colorSpace=Ht}}}),E}function d(R,D={}){const E=R.nodeName.toLowerCase()==="collision",S=[...R.children];let L=null;const N=S.filter(v=>v.nodeName.toLowerCase()==="material")[0];if(N){const v=N.getAttribute("name");v&&v in D?L=D[v]:L=m(N)}else L=new ir;const F=E?new Bb:new kb;return F.urdfNode=R,S.forEach(v=>{const b=v.nodeName.toLowerCase();if(b==="geometry"){const I=v.children[0].nodeName.toLowerCase();if(I==="mesh"){const B=v.children[0].getAttribute("filename"),k=h(B);if(k!==null){const K=v.children[0].getAttribute("scale");if(K){const $=zs(K);F.scale.set($[0],$[1],$[2])}s(k,a,($,V)=>{V?console.error("URDFLoader: Error loading mesh.",V):$&&($ instanceof nn&&($.material=L),$.position.set(0,0,0),$.quaternion.identity(),F.add($))})}}else if(I==="box"){const B=new nn;B.geometry=new Ms(1,1,1),B.material=L;const k=zs(v.children[0].getAttribute("size"));B.scale.set(k[0],k[1],k[2]),F.add(B)}else if(I==="sphere"){const B=new nn;B.geometry=new Pu(1,30,30),B.material=L;const k=parseFloat(v.children[0].getAttribute("radius"))||0;B.scale.set(k,k,k),F.add(B)}else if(I==="cylinder"){const B=new nn;B.geometry=new Cu(1,1,1,30),B.material=L;const k=parseFloat(v.children[0].getAttribute("radius"))||0,K=parseFloat(v.children[0].getAttribute("length"))||0;B.scale.set(k,K,k),B.rotation.set(Math.PI/2,0,0),F.add(B)}}else if(b==="origin"){const I=zs(v.getAttribute("xyz")),B=zs(v.getAttribute("rpy"));F.position.set(I[0],I[1],I[2]),F.rotation.set(0,0,0),Bf(F,B)}}),F}return f(e)}defaultMeshLoader(e,t,i){/\.stl$/i.test(e)?new Ub(t).load(e,r=>{const o=new nn(r,new ir);i(o)}):/\.dae$/i.test(e)?new Fb(t).load(e,r=>i(r.scene)):console.warn(`URDFLoader: Could not load model at ${e}.
No loader available`)}}const kf=5,Hb=to({__name:"ThreeViewer",props:{selectedNode:{}},emits:["urdf-loaded","node-selected"],setup(n,{expose:e,emit:t}){const i=n,s=t,r=ls(null);let o,a,l,c,u,h=null,f=new yx,p=new ot,_=[],M=null;const m=()=>{if(!r.value)return;o=new mp,o.background=new ht(2503224),a=new cn(75,r.value.clientWidth/r.value.clientHeight,.1,1e3),a.position.set(3,-3,3),a.up.set(0,0,1),a.lookAt(0,0,0),l=new Mb({antialias:!0}),l.setSize(r.value.clientWidth,r.value.clientHeight),l.setPixelRatio(window.devicePixelRatio),r.value.appendChild(l.domElement),c=new Sb(a,l.domElement),c.enableDamping=!0,c.dampingFactor=.05;const I=new Ep(16777215,.5);o.add(I);const B=new bp(16777215,.8);B.position.set(5,-5,10),o.add(B);const k=new Sx(10,10);k.rotation.x=Math.PI/2,o.add(k);const K=new bx(2);o.add(K),window.addEventListener("resize",d),l.domElement.addEventListener("mousedown",D),l.domElement.addEventListener("click",E),R()},d=()=>{r.value&&(a.aspect=r.value.clientWidth/r.value.clientHeight,a.updateProjectionMatrix(),l.setSize(r.value.clientWidth,r.value.clientHeight))},R=()=>{u=requestAnimationFrame(R),c.update(),l.render(o,a)},D=I=>{M={x:I.clientX,y:I.clientY}},E=I=>{if(!r.value||!h)return;if(M){const K=Math.abs(I.clientX-M.x),$=Math.abs(I.clientY-M.y);if(K>kf||$>kf){M=null;return}}M=null;const B=r.value.getBoundingClientRect();p.x=(I.clientX-B.left)/B.width*2-1,p.y=-((I.clientY-B.top)/B.height)*2+1,f.setFromCamera(p,a);const k=f.intersectObject(h,!0);if(k.length>0){const K=k[0];if(K&&K.object){const $=K.object,V=S($);if(V){s("node-selected",V);return}}}s("node-selected",null)},S=I=>{let B=I;for(;B;){if(B.userData.urdfNode)return B.userData.urdfNode;B=B.parent}return null},L=()=>{_.forEach(I=>{o.remove(I)}),_=[]},N=I=>{if(L(),!I||!I.object3D)return;const B=I.object3D;if(B.isMesh&&B.geometry){const k=new Qh(B.geometry),K=new _s({color:65280}),$=new Jr(k,K);B.getWorldPosition($.position),B.getWorldQuaternion($.quaternion),B.getWorldScale($.scale),o.add($),_.push($)}else B.children.forEach(k=>{if(k.isMesh&&k.geometry){const K=new Qh(k.geometry),$=new _s({color:65280}),V=new Jr(K,$);k.getWorldPosition(V.position),k.getWorldQuaternion(V.quaternion),k.getWorldScale(V.scale),o.add(V),_.push(V)}})};Zo(()=>i.selectedNode,I=>{N(I??null)});const F=I=>{const B=k=>{const K={name:k.name||"unnamed",type:k.isURDFRobot?"robot":k.isURDFLink?"link":k.isURDFJoint?"joint":"link",children:[],properties:{},object3D:k};return k.userData=k.userData||{},k.userData.urdfNode=K,k.isURDFJoint&&k.jointType&&(K.properties.type=k.jointType,k.axis&&(K.properties.axis=[k.axis.x,k.axis.y,k.axis.z])),k.position&&(K.properties.position=[k.position.x,k.position.y,k.position.z]),k.rotation&&(K.properties.rotation=[k.rotation.x,k.rotation.y,k.rotation.z]),k.children&&k.children.forEach($=>{($.isURDFLink||$.isURDFJoint)&&K.children.push(B($))}),K};return B(I)};e({loadURDFContent:(I,B)=>{h&&(o.remove(h),h=null);const k=new zb;k.loadMeshCb=($,V,W)=>{const Y=new Ms(.1,.1,.1),pe=new ir({color:13421772}),ge=new nn(Y,pe);W(ge)},h=k.parse(I),o.add(h);const K=F(h);s("urdf-loaded",K)}});const b=()=>{u&&cancelAnimationFrame(u),window.removeEventListener("resize",d),l&&l.domElement&&(l.domElement.removeEventListener("mousedown",D),l.domElement.removeEventListener("click",E)),L(),l&&l.dispose(),r.value&&l&&r.value.removeChild(l.domElement)};return au(()=>{m()}),lu(()=>{b()}),(I,B)=>(Jt(),vn("div",{ref_key:"canvasContainer",ref:r,class:"three-viewer"},null,512))}}),Gb=io(Hb,[["__scopeId","data-v-0f2f2554"]]),Wb={class:"properties-panel"},Xb={class:"panel-content"},qb={key:0,class:"empty-state"},jb={key:1,class:"properties-list"},Yb={class:"property-key"},Kb={class:"property-value"},$b=to({__name:"PropertiesPanel",props:{node:{}},setup(n){const e=n,t=or(()=>e.node!==null),i=or(()=>{if(!e.node)return[];const s=[];if(s.push({key:"Name",value:e.node.name}),s.push({key:"Type",value:e.node.type}),e.node.object3D){const r=e.node.object3D,o=new X,a=new Hn,l=new Tn;r.getWorldPosition(o),r.getWorldQuaternion(a),l.setFromQuaternion(a),s.push({key:"Position",value:`[${o.x.toFixed(3)}, ${o.y.toFixed(3)}, ${o.z.toFixed(3)}]`}),s.push({key:"Rotation",value:`[${l.x.toFixed(3)}, ${l.y.toFixed(3)}, ${l.z.toFixed(3)}]`})}else e.node.properties&&(e.node.properties.position&&s.push({key:"Position",value:JSON.stringify(e.node.properties.position)}),e.node.properties.rotation&&s.push({key:"Rotation",value:JSON.stringify(e.node.properties.rotation)}));if(e.node.properties)for(const[r,o]of Object.entries(e.node.properties))r!=="position"&&r!=="rotation"&&s.push({key:r.charAt(0).toUpperCase()+r.slice(1),value:typeof o=="object"?JSON.stringify(o,null,2):String(o)});return s});return(s,r)=>(Jt(),vn("aside",Wb,[r[1]||(r[1]=Mt("div",{class:"panel-header"},[Mt("h2",null,"Properties")],-1)),Mt("div",Xb,[t.value?(Jt(),vn("div",jb,[(Jt(!0),vn(Fn,null,yd(i.value,o=>(Jt(),vn("div",{key:o.key,class:"property-item"},[Mt("div",Yb,$s(o.key),1),Mt("div",Kb,$s(o.value),1)]))),128))])):(Jt(),vn("div",qb,[...r[0]||(r[0]=[Mt("p",null,"No component selected",-1),Mt("p",{class:"hint"},"Select a component from the hierarchy to view its properties",-1)])]))])]))}}),Zb=io($b,[["__scopeId","data-v-e0232d0b"]]),Jb={class:"urdf-editor"},Qb={class:"toolbar"},eE={class:"toolbar-actions"},tE={class:"upload-dropdown"},nE={key:0,class:"dropdown-menu"},iE={class:"editor-container"},sE=to({__name:"App",setup(n){const e=ls(null),t=ls(null),i=ls(!1),s=ls(!1),r=ls(""),o=ls(null),a=S=>{e.value===S?e.value=null:e.value=S},l=S=>{e.value=S},c=S=>{t.value=S,e.value=null},u=()=>{i.value=!i.value},h=()=>{i.value=!1},f=S=>{S.target.closest(".upload-dropdown")||h()};au(()=>{document.addEventListener("click",f)}),lu(()=>{document.removeEventListener("click",f)});const p=()=>{h(),document.getElementById("file-upload")?.click()},_=()=>{h(),s.value=!0},M=()=>{s.value=!1,r.value=""},m=async()=>{if(r.value.trim())try{const S=await fetch(r.value);if(!S.ok)throw new Error(`HTTP error! status: ${S.status}`);const L=await S.text(),N=r.value.split("/"),F=N[N.length-1]||"loaded_from_url.urdf";o.value&&o.value.loadURDFContent(L,F),s.value=!1,r.value=""}catch(S){console.error("Error loading URDF from URL:",S),alert(`Failed to load URDF from URL: ${S}`),s.value=!1,r.value=""}},d=S=>{const L=S.target;if(L.files&&L.files[0]){const N=L.files[0],F=new FileReader;F.onload=v=>{const b=v.target?.result;if(o.value)try{o.value.loadURDFContent(b,N.name)}catch(I){console.error("Error loading URDF:",I),alert(`Failed to load URDF: ${I}`)}},F.readAsText(N)}},R=()=>{if(!t.value)return;const S=D(t.value),L=new Blob([S],{type:"application/xml"}),N=URL.createObjectURL(L),F=document.createElement("a");F.href=N,F.download=`${t.value.name}.urdf`;try{document.body?(F.style&&(F.style.display="none"),document.body.appendChild(F),F.click(),setTimeout(()=>{try{document.body&&document.body.contains(F)&&document.body.removeChild(F)}catch{}URL.revokeObjectURL(N)},100)):(F.click(),setTimeout(()=>{URL.revokeObjectURL(N)},100))}catch{F.click(),setTimeout(()=>{URL.revokeObjectURL(N)},100)}},D=S=>{let L=`<?xml version="1.0"?>
`;return L+=E(S,0),L},E=(S,L)=>{const N="  ".repeat(L);let F="";if(S.type==="robot"){F+=`${N}<robot name="${S.name}">
`;for(const v of S.children)F+=E(v,L+1);F+=`${N}</robot>
`}else if(S.type==="link"){F+=`${N}<link name="${S.name}">
`;for(const v of S.children)F+=E(v,L+1);F+=`${N}</link>
`}else if(S.type==="joint"){F+=`${N}<joint name="${S.name}" type="${S.properties?.type||"fixed"}">
`;for(const v of S.children)F+=E(v,L+1);F+=`${N}</joint>
`}return F};return(S,L)=>(Jt(),vn("div",Jb,[Mt("header",Qb,[L[3]||(L[3]=Mt("h1",null,"URDF Editor",-1)),Mt("div",eE,[Mt("div",tE,[Mt("button",{class:"btn upload-btn",onClick:u},[...L[2]||(L[2]=[zd(" Upload URDF ",-1),Mt("span",{class:"dropdown-arrow"},"▼",-1)])]),i.value?(Jt(),vn("div",nE,[Mt("button",{onClick:p,class:"dropdown-item"}," 📁 From Local File "),Mt("button",{onClick:_,class:"dropdown-item"}," 🌐 From URL ")])):ha("",!0)]),Mt("input",{id:"file-upload",type:"file",accept:".urdf,.xml,application/xml,text/xml",onChange:d,style:{display:"none"}},null,32),Mt("button",{class:"btn",disabled:!0,onClick:R},"Download URDF")])]),Mt("div",iE,[Vn(E_,{root:t.value,selected:e.value,onSelect:a},null,8,["root","selected"]),Vn(Gb,{ref_key:"threeViewerRef",ref:o,class:"main-viewer","selected-node":e.value,onUrdfLoaded:c,onNodeSelected:l},null,8,["selected-node"]),Vn(Zb,{node:e.value},null,8,["node"])]),s.value?(Jt(),vn("div",{key:0,class:"modal-overlay",onClick:M},[Mt("div",{class:"modal-dialog",onClick:L[1]||(L[1]=s_(()=>{},["stop"]))},[L[4]||(L[4]=Mt("h3",null,"Load URDF from URL",-1)),Am(Mt("input",{"onUpdate:modelValue":L[0]||(L[0]=N=>r.value=N),type:"text",placeholder:"Enter URDF file URL",class:"url-input",onKeyup:o_(m,["enter"])},null,544),[[t_,r.value]]),Mt("div",{class:"modal-actions"},[Mt("button",{class:"btn btn-secondary",onClick:M},"Cancel"),Mt("button",{class:"btn",onClick:m},"Load")])])])):ha("",!0)]))}}),rE=io(sE,[["__scopeId","data-v-38c40e81"]]),oE=c_(rE);oE.mount("#app");
