(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Xc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ut={},js=[],ri=()=>{},Bf=()=>!1,va=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),qc=n=>n.startsWith("onUpdate:"),dn=Object.assign,jc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Np=Object.prototype.hasOwnProperty,Pt=(n,e)=>Np.call(n,e),ut=Array.isArray,Ys=n=>Ma(n)==="[object Map]",kf=n=>Ma(n)==="[object Set]",ct=n=>typeof n=="function",Xt=n=>typeof n=="string",Zi=n=>typeof n=="symbol",Vt=n=>n!==null&&typeof n=="object",Vf=n=>(Vt(n)||ct(n))&&ct(n.then)&&ct(n.catch),zf=Object.prototype.toString,Ma=n=>zf.call(n),Ip=n=>Ma(n).slice(8,-1),Hf=n=>Ma(n)==="[object Object]",Yc=n=>Xt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ir=Xc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ya=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Up=/-\w/g,zn=ya(n=>n.replace(Up,e=>e.slice(1).toUpperCase())),Fp=/\B([A-Z])/g,Ji=ya(n=>n.replace(Fp,"-$1").toLowerCase()),Sa=ya(n=>n.charAt(0).toUpperCase()+n.slice(1)),qa=ya(n=>n?`on${Sa(n)}`:""),Yi=(n,e)=>!Object.is(n,e),Yo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Gf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Kc=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Uu;const ba=()=>Uu||(Uu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function $c(n){if(ut(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Xt(i)?Vp(i):$c(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Xt(n)||Vt(n))return n}const Op=/;(?![^(]*\))/g,Bp=/:([^]+)/,kp=/\/\*[^]*?\*\//g;function Vp(n){const e={};return n.replace(kp,"").split(Op).forEach(t=>{if(t){const i=t.split(Bp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ea(n){let e="";if(Xt(n))e=n;else if(ut(n))for(let t=0;t<n.length;t++){const i=Ea(n[t]);i&&(e+=i+" ")}else if(Vt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const zp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Hp=Xc(zp);function Wf(n){return!!n||n===""}const Xf=n=>!!(n&&n.__v_isRef===!0),Ks=n=>Xt(n)?n:n==null?"":ut(n)||Vt(n)&&(n.toString===zf||!ct(n.toString))?Xf(n)?Ks(n.value):JSON.stringify(n,qf,2):String(n),qf=(n,e)=>Xf(e)?qf(n,e.value):Ys(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[ja(i,r)+" =>"]=s,t),{})}:kf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>ja(t))}:Zi(e)?ja(e):Vt(e)&&!ut(e)&&!Hf(e)?String(e):e,ja=(n,e="")=>{var t;return Zi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let bn;class Gp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=bn,!e&&bn&&(this.index=(bn.scopes||(bn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=bn;try{return bn=this,e()}finally{bn=t}}}on(){++this._on===1&&(this.prevScope=bn,bn=this)}off(){this._on>0&&--this._on===0&&(bn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Wp(){return bn}let Ft;const Ya=new WeakSet;class jf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,bn&&bn.active&&bn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ya.has(this)&&(Ya.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Kf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Fu(this),$f(this);const e=Ft,t=jn;Ft=this,jn=!0;try{return this.fn()}finally{Zf(this),Ft=e,jn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Qc(e);this.deps=this.depsTail=void 0,Fu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ya.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Vl(this)&&this.run()}get dirty(){return Vl(this)}}let Yf=0,Ur,Fr;function Kf(n,e=!1){if(n.flags|=8,e){n.next=Fr,Fr=n;return}n.next=Ur,Ur=n}function Zc(){Yf++}function Jc(){if(--Yf>0)return;if(Fr){let e=Fr;for(Fr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ur;){let e=Ur;for(Ur=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function $f(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Zf(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Qc(i),Xp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Vl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Jf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Jf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Gr)||(n.globalVersion=Gr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Vl(n))))return;n.flags|=2;const e=n.dep,t=Ft,i=jn;Ft=n,jn=!0;try{$f(n);const s=n.fn(n._value);(e.version===0||Yi(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ft=t,jn=i,Zf(n),n.flags&=-3}}function Qc(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Qc(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Xp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let jn=!0;const Qf=[];function wi(){Qf.push(jn),jn=!1}function Ri(){const n=Qf.pop();jn=n===void 0?!0:n}function Fu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Ft;Ft=void 0;try{e()}finally{Ft=t}}}let Gr=0;class qp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class eu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ft||!jn||Ft===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ft)t=this.activeLink=new qp(Ft,this),Ft.deps?(t.prevDep=Ft.depsTail,Ft.depsTail.nextDep=t,Ft.depsTail=t):Ft.deps=Ft.depsTail=t,ed(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Ft.depsTail,t.nextDep=void 0,Ft.depsTail.nextDep=t,Ft.depsTail=t,Ft.deps===t&&(Ft.deps=i)}return t}trigger(e){this.version++,Gr++,this.notify(e)}notify(e){Zc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Jc()}}}function ed(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)ed(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const zl=new WeakMap,ps=Symbol(""),Hl=Symbol(""),Wr=Symbol("");function ln(n,e,t){if(jn&&Ft){let i=zl.get(n);i||zl.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new eu),s.map=i,s.key=t),s.track()}}function Si(n,e,t,i,s,r){const o=zl.get(n);if(!o){Gr++;return}const a=l=>{l&&l.trigger()};if(Zc(),e==="clear")o.forEach(a);else{const l=ut(n),c=l&&Yc(t);if(l&&t==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===Wr||!Zi(f)&&f>=u)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Wr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(ps)),Ys(n)&&a(o.get(Hl)));break;case"delete":l||(a(o.get(ps)),Ys(n)&&a(o.get(Hl)));break;case"set":Ys(n)&&a(o.get(ps));break}}Jc()}function Es(n){const e=Ct(n);return e===n?e:(ln(e,"iterate",Wr),kn(n)?e:e.map(Yn))}function Ta(n){return ln(n=Ct(n),"iterate",Wr),n}function Hi(n,e){return Ci(n)?ms(n)?ir(Yn(e)):ir(e):Yn(e)}const jp={__proto__:null,[Symbol.iterator](){return Ka(this,Symbol.iterator,n=>Hi(this,n))},concat(...n){return Es(this).concat(...n.map(e=>ut(e)?Es(e):e))},entries(){return Ka(this,"entries",n=>(n[1]=Hi(this,n[1]),n))},every(n,e){return pi(this,"every",n,e,void 0,arguments)},filter(n,e){return pi(this,"filter",n,e,t=>t.map(i=>Hi(this,i)),arguments)},find(n,e){return pi(this,"find",n,e,t=>Hi(this,t),arguments)},findIndex(n,e){return pi(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return pi(this,"findLast",n,e,t=>Hi(this,t),arguments)},findLastIndex(n,e){return pi(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return pi(this,"forEach",n,e,void 0,arguments)},includes(...n){return $a(this,"includes",n)},indexOf(...n){return $a(this,"indexOf",n)},join(n){return Es(this).join(n)},lastIndexOf(...n){return $a(this,"lastIndexOf",n)},map(n,e){return pi(this,"map",n,e,void 0,arguments)},pop(){return Sr(this,"pop")},push(...n){return Sr(this,"push",n)},reduce(n,...e){return Ou(this,"reduce",n,e)},reduceRight(n,...e){return Ou(this,"reduceRight",n,e)},shift(){return Sr(this,"shift")},some(n,e){return pi(this,"some",n,e,void 0,arguments)},splice(...n){return Sr(this,"splice",n)},toReversed(){return Es(this).toReversed()},toSorted(n){return Es(this).toSorted(n)},toSpliced(...n){return Es(this).toSpliced(...n)},unshift(...n){return Sr(this,"unshift",n)},values(){return Ka(this,"values",n=>Hi(this,n))}};function Ka(n,e,t){const i=Ta(n),s=i[e]();return i!==n&&!kn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const Yp=Array.prototype;function pi(n,e,t,i,s,r){const o=Ta(n),a=o!==n&&!kn(n),l=o[e];if(l!==Yp[e]){const h=l.apply(n,r);return a?Yn(h):h}let c=t;o!==n&&(a?c=function(h,f){return t.call(this,Hi(n,h),f,n)}:t.length>2&&(c=function(h,f){return t.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Ou(n,e,t,i){const s=Ta(n);let r=t;return s!==n&&(kn(n)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,n)}):r=function(o,a,l){return t.call(this,o,Hi(n,a),l,n)}),s[e](r,...i)}function $a(n,e,t){const i=Ct(n);ln(i,"iterate",Wr);const s=i[e](...t);return(s===-1||s===!1)&&su(t[0])?(t[0]=Ct(t[0]),i[e](...t)):s}function Sr(n,e,t=[]){wi(),Zc();const i=Ct(n)[e].apply(n,t);return Jc(),Ri(),i}const Kp=Xc("__proto__,__v_isRef,__isVue"),td=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Zi));function $p(n){Zi(n)||(n=String(n));const e=Ct(this);return ln(e,"has",n),e.hasOwnProperty(n)}class nd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?om:od:r?rd:sd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ut(e);if(!s){let l;if(o&&(l=jp[t]))return l;if(t==="hasOwnProperty")return $p}const a=Reflect.get(e,t,hn(e)?e:i);if((Zi(t)?td.has(t):Kp(t))||(s||ln(e,"get",t),r))return a;if(hn(a)){const l=o&&Yc(t)?a:a.value;return s&&Vt(l)?Wl(l):l}return Vt(a)?s?Wl(a):nu(a):a}}class id extends nd{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=ut(e)&&Yc(t);if(!this._isShallow){const c=Ci(r);if(!kn(i)&&!Ci(i)&&(r=Ct(r),i=Ct(i)),!o&&hn(r)&&!hn(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:Pt(e,t),l=Reflect.set(e,t,i,hn(e)?e:s);return e===Ct(s)&&(a?Yi(i,r)&&Si(e,"set",t,i):Si(e,"add",t,i)),l}deleteProperty(e,t){const i=Pt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Si(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Zi(t)||!td.has(t))&&ln(e,"has",t),i}ownKeys(e){return ln(e,"iterate",ut(e)?"length":ps),Reflect.ownKeys(e)}}class Zp extends nd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Jp=new id,Qp=new Zp,em=new id(!0);const Gl=n=>n,fo=n=>Reflect.getPrototypeOf(n);function tm(n,e,t){return function(...i){const s=this.__v_raw,r=Ct(s),o=Ys(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?Gl:e?ir:Yn;return!e&&ln(r,"iterate",l?Hl:ps),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function po(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function nm(n,e){const t={get(s){const r=this.__v_raw,o=Ct(r),a=Ct(s);n||(Yi(s,a)&&ln(o,"get",s),ln(o,"get",a));const{has:l}=fo(o),c=e?Gl:n?ir:Yn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&ln(Ct(s),"iterate",ps),s.size},has(s){const r=this.__v_raw,o=Ct(r),a=Ct(s);return n||(Yi(s,a)&&ln(o,"has",s),ln(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=Ct(a),c=e?Gl:n?ir:Yn;return!n&&ln(l,"iterate",ps),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return dn(t,n?{add:po("add"),set:po("set"),delete:po("delete"),clear:po("clear")}:{add(s){!e&&!kn(s)&&!Ci(s)&&(s=Ct(s));const r=Ct(this);return fo(r).has.call(r,s)||(r.add(s),Si(r,"add",s,s)),this},set(s,r){!e&&!kn(r)&&!Ci(r)&&(r=Ct(r));const o=Ct(this),{has:a,get:l}=fo(o);let c=a.call(o,s);c||(s=Ct(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Yi(r,u)&&Si(o,"set",s,r):Si(o,"add",s,r),this},delete(s){const r=Ct(this),{has:o,get:a}=fo(r);let l=o.call(r,s);l||(s=Ct(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Si(r,"delete",s,void 0),c},clear(){const s=Ct(this),r=s.size!==0,o=s.clear();return r&&Si(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=tm(s,n,e)}),t}function tu(n,e){const t=nm(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(Pt(t,s)&&s in i?t:i,s,r)}const im={get:tu(!1,!1)},sm={get:tu(!1,!0)},rm={get:tu(!0,!1)};const sd=new WeakMap,rd=new WeakMap,od=new WeakMap,om=new WeakMap;function am(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lm(n){return n.__v_skip||!Object.isExtensible(n)?0:am(Ip(n))}function nu(n){return Ci(n)?n:iu(n,!1,Jp,im,sd)}function cm(n){return iu(n,!1,em,sm,rd)}function Wl(n){return iu(n,!0,Qp,rm,od)}function iu(n,e,t,i,s){if(!Vt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=lm(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function ms(n){return Ci(n)?ms(n.__v_raw):!!(n&&n.__v_isReactive)}function Ci(n){return!!(n&&n.__v_isReadonly)}function kn(n){return!!(n&&n.__v_isShallow)}function su(n){return n?!!n.__v_raw:!1}function Ct(n){const e=n&&n.__v_raw;return e?Ct(e):n}function um(n){return!Pt(n,"__v_skip")&&Object.isExtensible(n)&&Gf(n,"__v_skip",!0),n}const Yn=n=>Vt(n)?nu(n):n,ir=n=>Vt(n)?Wl(n):n;function hn(n){return n?n.__v_isRef===!0:!1}function ls(n){return hm(n,!1)}function hm(n,e){return hn(n)?n:new fm(n,e)}class fm{constructor(e,t){this.dep=new eu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ct(e),this._value=t?e:Yn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||kn(e)||Ci(e);e=i?e:Ct(e),Yi(e,t)&&(this._rawValue=e,this._value=i?e:Yn(e),this.dep.trigger())}}function dm(n){return hn(n)?n.value:n}const pm={get:(n,e,t)=>e==="__v_raw"?n:dm(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return hn(s)&&!hn(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function ad(n){return ms(n)?n:new Proxy(n,pm)}class mm{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new eu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Gr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ft!==this)return Kf(this,!0),!0}get value(){const e=this.dep.track();return Jf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function gm(n,e,t=!1){let i,s;return ct(n)?i=n:(i=n.get,s=n.set),new mm(i,s,t)}const mo={},ra=new WeakMap;let cs;function _m(n,e=!1,t=cs){if(t){let i=ra.get(t);i||ra.set(t,i=[]),i.push(n)}}function xm(n,e,t=Ut){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=E=>s?E:kn(E)||s===!1||s===0?bi(E,1):bi(E);let u,h,f,p,_=!1,y=!1;if(hn(n)?(h=()=>n.value,_=kn(n)):ms(n)?(h=()=>c(n),_=!0):ut(n)?(y=!0,_=n.some(E=>ms(E)||kn(E)),h=()=>n.map(E=>{if(hn(E))return E.value;if(ms(E))return c(E);if(ct(E))return l?l(E,2):E()})):ct(n)?e?h=l?()=>l(n,2):n:h=()=>{if(f){wi();try{f()}finally{Ri()}}const E=cs;cs=u;try{return l?l(n,3,[p]):n(p)}finally{cs=E}}:h=ri,e&&s){const E=h,b=s===!0?1/0:s;h=()=>bi(E(),b)}const m=Wp(),d=()=>{u.stop(),m&&m.active&&jc(m.effects,u)};if(r&&e){const E=e;e=(...b)=>{E(...b),d()}}let R=y?new Array(n.length).fill(mo):mo;const D=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(e){const b=u.run();if(s||_||(y?b.some((L,I)=>Yi(L,R[I])):Yi(b,R))){f&&f();const L=cs;cs=u;try{const I=[b,R===mo?void 0:y&&R[0]===mo?[]:R,p];R=b,l?l(e,3,I):e(...I)}finally{cs=L}}}else u.run()};return a&&a(D),u=new jf(h),u.scheduler=o?()=>o(D,!1):D,p=E=>_m(E,!1,u),f=u.onStop=()=>{const E=ra.get(u);if(E){if(l)l(E,4);else for(const b of E)b();ra.delete(u)}},e?i?D(!0):R=u.run():o?o(D.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function bi(n,e=1/0,t){if(e<=0||!Vt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,hn(n))bi(n.value,e,t);else if(ut(n))for(let i=0;i<n.length;i++)bi(n[i],e,t);else if(kf(n)||Ys(n))n.forEach(i=>{bi(i,e,t)});else if(Hf(n)){for(const i in n)bi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&bi(n[i],e,t)}return n}function Qr(n,e,t,i){try{return i?n(...i):n()}catch(s){Aa(s,e,t)}}function li(n,e,t,i){if(ct(n)){const s=Qr(n,e,t,i);return s&&Vf(s)&&s.catch(r=>{Aa(r,e,t)}),s}if(ut(n)){const s=[];for(let r=0;r<n.length;r++)s.push(li(n[r],e,t,i));return s}}function Aa(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ut;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){wi(),Qr(r,null,10,[n,l,c]),Ri();return}}vm(n,t,s,i,o)}function vm(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const xn=[];let ei=-1;const $s=[];let Gi=null,zs=0;const ld=Promise.resolve();let oa=null;function Mm(n){const e=oa||ld;return n?e.then(this?n.bind(this):n):e}function ym(n){let e=ei+1,t=xn.length;for(;e<t;){const i=e+t>>>1,s=xn[i],r=Xr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function ru(n){if(!(n.flags&1)){const e=Xr(n),t=xn[xn.length-1];!t||!(n.flags&2)&&e>=Xr(t)?xn.push(n):xn.splice(ym(e),0,n),n.flags|=1,cd()}}function cd(){oa||(oa=ld.then(hd))}function Sm(n){ut(n)?$s.push(...n):Gi&&n.id===-1?Gi.splice(zs+1,0,n):n.flags&1||($s.push(n),n.flags|=1),cd()}function Bu(n,e,t=ei+1){for(;t<xn.length;t++){const i=xn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;xn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function ud(n){if($s.length){const e=[...new Set($s)].sort((t,i)=>Xr(t)-Xr(i));if($s.length=0,Gi){Gi.push(...e);return}for(Gi=e,zs=0;zs<Gi.length;zs++){const t=Gi[zs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Gi=null,zs=0}}const Xr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function hd(n){try{for(ei=0;ei<xn.length;ei++){const e=xn[ei];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Qr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ei<xn.length;ei++){const e=xn[ei];e&&(e.flags&=-2)}ei=-1,xn.length=0,ud(),oa=null,(xn.length||$s.length)&&hd()}}let Pn=null,fd=null;function aa(n){const e=Pn;return Pn=n,fd=n&&n.type.__scopeId||null,e}function bm(n,e=Pn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Ku(-1);const r=aa(e);let o;try{o=n(...s)}finally{aa(r),i._d&&Ku(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Em(n,e){if(Pn===null)return n;const t=Pa(Pn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=Ut]=e[s];r&&(ct(r)&&(r={mounted:r,updated:r}),r.deep&&bi(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function es(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(wi(),li(l,t,8,[n.el,a,n,e]),Ri())}}function Tm(n,e){if(un){let t=un.provides;const i=un.parent&&un.parent.provides;i===t&&(t=un.provides=Object.create(i)),t[n]=e}}function Ko(n,e,t=!1){const i=Tg();if(i||Zs){let s=Zs?Zs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ct(e)?e.call(i&&i.proxy):e}}const Am=Symbol.for("v-scx"),wm=()=>Ko(Am);function $o(n,e,t){return dd(n,e,t)}function dd(n,e,t=Ut){const{immediate:i,deep:s,flush:r,once:o}=t,a=dn({},t),l=e&&i||!e&&r!=="post";let c;if(jr){if(r==="sync"){const p=wm();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=ri,p.resume=ri,p.pause=ri,p}}const u=un;a.call=(p,_,y)=>li(p,u,_,y);let h=!1;r==="post"?a.scheduler=p=>{Rn(p,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(p,_)=>{_?p():ru(p)}),a.augmentJob=p=>{e&&(p.flags|=4),h&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const f=xm(n,e,a);return jr&&(c?c.push(f):l&&f()),f}function Rm(n,e,t){const i=this.proxy,s=Xt(n)?n.includes(".")?pd(i,n):()=>i[n]:n.bind(i,i);let r;ct(e)?r=e:(r=e.handler,t=e);const o=to(this),a=dd(s,r.bind(i),t);return o(),a}function pd(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Cm=Symbol("_vte"),Pm=n=>n.__isTeleport,Dm=Symbol("_leaveCb");function ou(n,e){n.shapeFlag&6&&n.component?(n.transition=e,ou(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function eo(n,e){return ct(n)?dn({name:n.name},e,{setup:n}):n}function md(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const la=new WeakMap;function Or(n,e,t,i,s=!1){if(ut(n)){n.forEach((_,y)=>Or(_,e&&(ut(e)?e[y]:e),t,i,s));return}if(Br(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Or(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Pa(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Ut?a.refs={}:a.refs,h=a.setupState,f=Ct(h),p=h===Ut?Bf:_=>Pt(f,_);if(c!=null&&c!==l){if(ku(e),Xt(c))u[c]=null,p(c)&&(h[c]=null);else if(hn(c)){c.value=null;const _=e;_.k&&(u[_.k]=null)}}if(ct(l))Qr(l,a,12,[o,u]);else{const _=Xt(l),y=hn(l);if(_||y){const m=()=>{if(n.f){const d=_?p(l)?h[l]:u[l]:l.value;if(s)ut(d)&&jc(d,r);else if(ut(d))d.includes(r)||d.push(r);else if(_)u[l]=[r],p(l)&&(h[l]=u[l]);else{const R=[r];l.value=R,n.k&&(u[n.k]=R)}}else _?(u[l]=o,p(l)&&(h[l]=o)):y&&(l.value=o,n.k&&(u[n.k]=o))};if(o){const d=()=>{m(),la.delete(n)};d.id=-1,la.set(n,d),Rn(d,t)}else ku(n),m()}}}function ku(n){const e=la.get(n);e&&(e.flags|=8,la.delete(n))}ba().requestIdleCallback;ba().cancelIdleCallback;const Br=n=>!!n.type.__asyncLoader,gd=n=>n.type.__isKeepAlive;function Lm(n,e){_d(n,"a",e)}function Nm(n,e){_d(n,"da",e)}function _d(n,e,t=un){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(wa(e,i,t),t){let s=t.parent;for(;s&&s.parent;)gd(s.parent.vnode)&&Im(i,e,t,s),s=s.parent}}function Im(n,e,t,i){const s=wa(e,n,i,!0);xd(()=>{jc(i[e],s)},t)}function wa(n,e,t=un,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{wi();const a=to(t),l=li(e,t,n,o);return a(),Ri(),l});return i?s.unshift(r):s.push(r),r}}const Ni=n=>(e,t=un)=>{(!jr||n==="sp")&&wa(n,(...i)=>e(...i),t)},Um=Ni("bm"),au=Ni("m"),Fm=Ni("bu"),Om=Ni("u"),lu=Ni("bum"),xd=Ni("um"),Bm=Ni("sp"),km=Ni("rtg"),Vm=Ni("rtc");function zm(n,e=un){wa("ec",n,e)}const Hm="components";function Gm(n,e){return Xm(Hm,n,!0,e)||n}const Wm=Symbol.for("v-ndc");function Xm(n,e,t=!0,i=!1){const s=Pn||un;if(s){const r=s.type;{const a=Pg(r,!1);if(a&&(a===e||a===zn(e)||a===Sa(zn(e))))return r}const o=Vu(s[n]||r[n],e)||Vu(s.appContext[n],e);return!o&&i?r:o}}function Vu(n,e){return n&&(n[e]||n[zn(e)]||n[Sa(zn(e))])}function vd(n,e,t,i){let s;const r=t,o=ut(n);if(o||Xt(n)){const a=o&&ms(n);let l=!1,c=!1;a&&(l=!kn(n),c=Ci(n),n=Ta(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=e(l?c?ir(Yn(n[u])):Yn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(Vt(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const Xl=n=>n?Vd(n)?Pa(n):Xl(n.parent):null,kr=dn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Xl(n.parent),$root:n=>Xl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>yd(n),$forceUpdate:n=>n.f||(n.f=()=>{ru(n.update)}),$nextTick:n=>n.n||(n.n=Mm.bind(n.proxy)),$watch:n=>Rm.bind(n)}),Za=(n,e)=>n!==Ut&&!n.__isScriptSetup&&Pt(n,e),qm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Za(i,e))return o[e]=1,i[e];if(s!==Ut&&Pt(s,e))return o[e]=2,s[e];if(Pt(r,e))return o[e]=3,r[e];if(t!==Ut&&Pt(t,e))return o[e]=4,t[e];ql&&(o[e]=0)}}const c=kr[e];let u,h;if(c)return e==="$attrs"&&ln(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==Ut&&Pt(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Pt(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Za(s,e)?(s[e]=t,!0):i!==Ut&&Pt(i,e)?(i[e]=t,!0):Pt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==Ut&&a[0]!=="$"&&Pt(n,a)||Za(e,a)||Pt(r,a)||Pt(i,a)||Pt(kr,a)||Pt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Pt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function zu(n){return ut(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ql=!0;function jm(n){const e=yd(n),t=n.proxy,i=n.ctx;ql=!1,e.beforeCreate&&Hu(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:_,activated:y,deactivated:m,beforeDestroy:d,beforeUnmount:R,destroyed:D,unmounted:E,render:b,renderTracked:L,renderTriggered:I,errorCaptured:F,serverPrefetch:x,expose:S,inheritAttrs:N,components:B,directives:H,filters:te}=e;if(c&&Ym(c,i,null),o)for(const W in o){const Y=o[W];ct(Y)&&(i[W]=Y.bind(t))}if(s){const W=s.call(t,t);Vt(W)&&(n.data=nu(W))}if(ql=!0,r)for(const W in r){const Y=r[W],pe=ct(Y)?Y.bind(t,t):ct(Y.get)?Y.get.bind(t,t):ri,ge=!ct(Y)&&ct(Y.set)?Y.set.bind(t):ri,me=rr({get:pe,set:ge});Object.defineProperty(i,W,{enumerable:!0,configurable:!0,get:()=>me.value,set:Le=>me.value=Le})}if(a)for(const W in a)Md(a[W],i,t,W);if(l){const W=ct(l)?l.call(t):l;Reflect.ownKeys(W).forEach(Y=>{Tm(Y,W[Y])})}u&&Hu(u,n,"c");function V(W,Y){ut(Y)?Y.forEach(pe=>W(pe.bind(t))):Y&&W(Y.bind(t))}if(V(Um,h),V(au,f),V(Fm,p),V(Om,_),V(Lm,y),V(Nm,m),V(zm,F),V(Vm,L),V(km,I),V(lu,R),V(xd,E),V(Bm,x),ut(S))if(S.length){const W=n.exposed||(n.exposed={});S.forEach(Y=>{Object.defineProperty(W,Y,{get:()=>t[Y],set:pe=>t[Y]=pe,enumerable:!0})})}else n.exposed||(n.exposed={});b&&n.render===ri&&(n.render=b),N!=null&&(n.inheritAttrs=N),B&&(n.components=B),H&&(n.directives=H),x&&md(n)}function Ym(n,e,t=ri){ut(n)&&(n=jl(n));for(const i in n){const s=n[i];let r;Vt(s)?"default"in s?r=Ko(s.from||i,s.default,!0):r=Ko(s.from||i):r=Ko(s),hn(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Hu(n,e,t){li(ut(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Md(n,e,t,i){let s=i.includes(".")?pd(t,i):()=>t[i];if(Xt(n)){const r=e[n];ct(r)&&$o(s,r)}else if(ct(n))$o(s,n.bind(t));else if(Vt(n))if(ut(n))n.forEach(r=>Md(r,e,t,i));else{const r=ct(n.handler)?n.handler.bind(t):e[n.handler];ct(r)&&$o(s,r,n)}}function yd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>ca(l,c,o,!0)),ca(l,e,o)),Vt(e)&&r.set(e,l),l}function ca(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&ca(n,r,t,!0),s&&s.forEach(o=>ca(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Km[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Km={data:Gu,props:Wu,emits:Wu,methods:Dr,computed:Dr,beforeCreate:mn,created:mn,beforeMount:mn,mounted:mn,beforeUpdate:mn,updated:mn,beforeDestroy:mn,beforeUnmount:mn,destroyed:mn,unmounted:mn,activated:mn,deactivated:mn,errorCaptured:mn,serverPrefetch:mn,components:Dr,directives:Dr,watch:Zm,provide:Gu,inject:$m};function Gu(n,e){return e?n?function(){return dn(ct(n)?n.call(this,this):n,ct(e)?e.call(this,this):e)}:e:n}function $m(n,e){return Dr(jl(n),jl(e))}function jl(n){if(ut(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function mn(n,e){return n?[...new Set([].concat(n,e))]:e}function Dr(n,e){return n?dn(Object.create(null),n,e):e}function Wu(n,e){return n?ut(n)&&ut(e)?[...new Set([...n,...e])]:dn(Object.create(null),zu(n),zu(e??{})):e}function Zm(n,e){if(!n)return e;if(!e)return n;const t=dn(Object.create(null),n);for(const i in e)t[i]=mn(n[i],e[i]);return t}function Sd(){return{app:null,config:{isNativeTag:Bf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jm=0;function Qm(n,e){return function(i,s=null){ct(i)||(i=dn({},i)),s!=null&&!Vt(s)&&(s=null);const r=Sd(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Jm++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Lg,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&ct(u.install)?(o.add(u),u.install(c,...h)):ct(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const p=c._ceVNode||Vn(i,s);return p.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(p,u,f),l=!0,c._container=u,u.__vue_app__=c,Pa(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(li(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Zs;Zs=c;try{return u()}finally{Zs=h}}};return c}}let Zs=null;const eg=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${zn(e)}Modifiers`]||n[`${Ji(e)}Modifiers`];function tg(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Ut;let s=t;const r=e.startsWith("update:"),o=r&&eg(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Xt(u)?u.trim():u)),o.number&&(s=t.map(Kc)));let a,l=i[a=qa(e)]||i[a=qa(zn(e))];!l&&r&&(l=i[a=qa(Ji(e))]),l&&li(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,li(c,n,6,s)}}const ng=new WeakMap;function bd(n,e,t=!1){const i=t?ng:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!ct(n)){const l=c=>{const u=bd(c,e,!0);u&&(a=!0,dn(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(Vt(n)&&i.set(n,null),null):(ut(r)?r.forEach(l=>o[l]=null):dn(o,r),Vt(n)&&i.set(n,o),o)}function Ra(n,e){return!n||!va(e)?!1:(e=e.slice(2).replace(/Once$/,""),Pt(n,e[0].toLowerCase()+e.slice(1))||Pt(n,Ji(e))||Pt(n,e))}function Xu(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:p,ctx:_,inheritAttrs:y}=n,m=aa(n);let d,R;try{if(t.shapeFlag&4){const E=s||i,b=E;d=ti(c.call(b,E,u,h,p,f,_)),R=a}else{const E=e;d=ti(E.length>1?E(h,{attrs:a,slots:o,emit:l}):E(h,null)),R=e.props?a:ig(a)}}catch(E){Vr.length=0,Aa(E,n,1),d=Vn(Ki)}let D=d;if(R&&y!==!1){const E=Object.keys(R),{shapeFlag:b}=D;E.length&&b&7&&(r&&E.some(qc)&&(R=sg(R,r)),D=sr(D,R,!1,!0))}return t.dirs&&(D=sr(D,null,!1,!0),D.dirs=D.dirs?D.dirs.concat(t.dirs):t.dirs),t.transition&&ou(D,t.transition),d=D,aa(m),d}const ig=n=>{let e;for(const t in n)(t==="class"||t==="style"||va(t))&&((e||(e={}))[t]=n[t]);return e},sg=(n,e)=>{const t={};for(const i in n)(!qc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function rg(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?qu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!Ra(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?qu(i,o,c):!0:!!o;return!1}function qu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!Ra(t,r))return!0}return!1}function og({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Ed={},Td=()=>Object.create(Ed),Ad=n=>Object.getPrototypeOf(n)===Ed;function ag(n,e,t,i=!1){const s={},r=Td();n.propsDefaults=Object.create(null),wd(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:cm(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function lg(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=Ct(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Ra(n.emitsOptions,f))continue;const p=e[f];if(l)if(Pt(r,f))p!==r[f]&&(r[f]=p,c=!0);else{const _=zn(f);s[_]=Yl(l,a,_,p,n,!1)}else p!==r[f]&&(r[f]=p,c=!0)}}}else{wd(n,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!Pt(e,h)&&((u=Ji(h))===h||!Pt(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=Yl(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!Pt(e,h))&&(delete r[h],c=!0)}c&&Si(n.attrs,"set","")}function wd(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ir(l))continue;const c=e[l];let u;s&&Pt(s,u=zn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:Ra(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Ct(t),c=a||Ut;for(let u=0;u<r.length;u++){const h=r[u];t[h]=Yl(s,l,h,c[h],n,!Pt(c,h))}}return o}function Yl(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=Pt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ct(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=to(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ji(t))&&(i=!0))}return i}const cg=new WeakMap;function Rd(n,e,t=!1){const i=t?cg:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!ct(n)){const u=h=>{l=!0;const[f,p]=Rd(h,e,!0);dn(o,f),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return Vt(n)&&i.set(n,js),js;if(ut(r))for(let u=0;u<r.length;u++){const h=zn(r[u]);ju(h)&&(o[h]=Ut)}else if(r)for(const u in r){const h=zn(u);if(ju(h)){const f=r[u],p=o[h]=ut(f)||ct(f)?{type:f}:dn({},f),_=p.type;let y=!1,m=!0;if(ut(_))for(let d=0;d<_.length;++d){const R=_[d],D=ct(R)&&R.name;if(D==="Boolean"){y=!0;break}else D==="String"&&(m=!1)}else y=ct(_)&&_.name==="Boolean";p[0]=y,p[1]=m,(y||Pt(p,"default"))&&a.push(h)}}const c=[o,a];return Vt(n)&&i.set(n,c),c}function ju(n){return n[0]!=="$"&&!Ir(n)}const cu=n=>n==="_"||n==="_ctx"||n==="$stable",uu=n=>ut(n)?n.map(ti):[ti(n)],ug=(n,e,t)=>{if(e._n)return e;const i=bm((...s)=>uu(e(...s)),t);return i._c=!1,i},Cd=(n,e,t)=>{const i=n._ctx;for(const s in n){if(cu(s))continue;const r=n[s];if(ct(r))e[s]=ug(s,r,i);else if(r!=null){const o=uu(r);e[s]=()=>o}}},Pd=(n,e)=>{const t=uu(e);n.slots.default=()=>t},Dd=(n,e,t)=>{for(const i in e)(t||!cu(i))&&(n[i]=e[i])},hg=(n,e,t)=>{const i=n.slots=Td();if(n.vnode.shapeFlag&32){const s=e._;s?(Dd(i,e,t),t&&Gf(i,"_",s,!0)):Cd(e,i)}else e&&Pd(n,e)},fg=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=Ut;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Dd(s,e,t):(r=!e.$stable,Cd(e,s)),o=e}else e&&(Pd(n,e),o={default:1});if(r)for(const a in s)!cu(a)&&o[a]==null&&delete s[a]},Rn=_g;function dg(n){return pg(n)}function pg(n,e){const t=ba();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=ri,insertStaticContent:_}=n,y=(O,z,Z,le=null,se=null,ce=null,U=void 0,_e=null,he=!!z.dynamicChildren)=>{if(O===z)return;O&&!br(O,z)&&(le=Q(O),Le(O,se,ce,!0),O=null),z.patchFlag===-2&&(he=!1,z.dynamicChildren=null);const{type:ae,ref:fe,shapeFlag:A}=z;switch(ae){case Ca:m(O,z,Z,le);break;case Ki:d(O,z,Z,le);break;case Qa:O==null&&R(z,Z,le,U);break;case Fn:B(O,z,Z,le,se,ce,U,_e,he);break;default:A&1?b(O,z,Z,le,se,ce,U,_e,he):A&6?H(O,z,Z,le,se,ce,U,_e,he):(A&64||A&128)&&ae.process(O,z,Z,le,se,ce,U,_e,he,Oe)}fe!=null&&se?Or(fe,O&&O.ref,ce,z||O,!z):fe==null&&O&&O.ref!=null&&Or(O.ref,null,ce,O,!0)},m=(O,z,Z,le)=>{if(O==null)i(z.el=a(z.children),Z,le);else{const se=z.el=O.el;z.children!==O.children&&c(se,z.children)}},d=(O,z,Z,le)=>{O==null?i(z.el=l(z.children||""),Z,le):z.el=O.el},R=(O,z,Z,le)=>{[O.el,O.anchor]=_(O.children,z,Z,le,O.el,O.anchor)},D=({el:O,anchor:z},Z,le)=>{let se;for(;O&&O!==z;)se=f(O),i(O,Z,le),O=se;i(z,Z,le)},E=({el:O,anchor:z})=>{let Z;for(;O&&O!==z;)Z=f(O),s(O),O=Z;s(z)},b=(O,z,Z,le,se,ce,U,_e,he)=>{if(z.type==="svg"?U="svg":z.type==="math"&&(U="mathml"),O==null)L(z,Z,le,se,ce,U,_e,he);else{const ae=O.el&&O.el._isVueCE?O.el:null;try{ae&&ae._beginPatch(),x(O,z,se,ce,U,_e,he)}finally{ae&&ae._endPatch()}}},L=(O,z,Z,le,se,ce,U,_e)=>{let he,ae;const{props:fe,shapeFlag:A,transition:g,dirs:k}=O;if(he=O.el=o(O.type,ce,fe&&fe.is,fe),A&8?u(he,O.children):A&16&&F(O.children,he,null,le,se,Ja(O,ce),U,_e),k&&es(O,null,le,"created"),I(he,O,O.scopeId,U,le),fe){for(const oe in fe)oe!=="value"&&!Ir(oe)&&r(he,oe,null,fe[oe],ce,le);"value"in fe&&r(he,"value",null,fe.value,ce),(ae=fe.onVnodeBeforeMount)&&Jn(ae,le,O)}k&&es(O,null,le,"beforeMount");const J=mg(se,g);J&&g.beforeEnter(he),i(he,z,Z),((ae=fe&&fe.onVnodeMounted)||J||k)&&Rn(()=>{ae&&Jn(ae,le,O),J&&g.enter(he),k&&es(O,null,le,"mounted")},se)},I=(O,z,Z,le,se)=>{if(Z&&p(O,Z),le)for(let ce=0;ce<le.length;ce++)p(O,le[ce]);if(se){let ce=se.subTree;if(z===ce||Ud(ce.type)&&(ce.ssContent===z||ce.ssFallback===z)){const U=se.vnode;I(O,U,U.scopeId,U.slotScopeIds,se.parent)}}},F=(O,z,Z,le,se,ce,U,_e,he=0)=>{for(let ae=he;ae<O.length;ae++){const fe=O[ae]=_e?Wi(O[ae]):ti(O[ae]);y(null,fe,z,Z,le,se,ce,U,_e)}},x=(O,z,Z,le,se,ce,U)=>{const _e=z.el=O.el;let{patchFlag:he,dynamicChildren:ae,dirs:fe}=z;he|=O.patchFlag&16;const A=O.props||Ut,g=z.props||Ut;let k;if(Z&&ts(Z,!1),(k=g.onVnodeBeforeUpdate)&&Jn(k,Z,z,O),fe&&es(z,O,Z,"beforeUpdate"),Z&&ts(Z,!0),(A.innerHTML&&g.innerHTML==null||A.textContent&&g.textContent==null)&&u(_e,""),ae?S(O.dynamicChildren,ae,_e,Z,le,Ja(z,se),ce):U||Y(O,z,_e,null,Z,le,Ja(z,se),ce,!1),he>0){if(he&16)N(_e,A,g,Z,se);else if(he&2&&A.class!==g.class&&r(_e,"class",null,g.class,se),he&4&&r(_e,"style",A.style,g.style,se),he&8){const J=z.dynamicProps;for(let oe=0;oe<J.length;oe++){const $=J[oe],Ie=A[$],Me=g[$];(Me!==Ie||$==="value")&&r(_e,$,Ie,Me,se,Z)}}he&1&&O.children!==z.children&&u(_e,z.children)}else!U&&ae==null&&N(_e,A,g,Z,se);((k=g.onVnodeUpdated)||fe)&&Rn(()=>{k&&Jn(k,Z,z,O),fe&&es(z,O,Z,"updated")},le)},S=(O,z,Z,le,se,ce,U)=>{for(let _e=0;_e<z.length;_e++){const he=O[_e],ae=z[_e],fe=he.el&&(he.type===Fn||!br(he,ae)||he.shapeFlag&198)?h(he.el):Z;y(he,ae,fe,null,le,se,ce,U,!0)}},N=(O,z,Z,le,se)=>{if(z!==Z){if(z!==Ut)for(const ce in z)!Ir(ce)&&!(ce in Z)&&r(O,ce,z[ce],null,se,le);for(const ce in Z){if(Ir(ce))continue;const U=Z[ce],_e=z[ce];U!==_e&&ce!=="value"&&r(O,ce,_e,U,se,le)}"value"in Z&&r(O,"value",z.value,Z.value,se)}},B=(O,z,Z,le,se,ce,U,_e,he)=>{const ae=z.el=O?O.el:a(""),fe=z.anchor=O?O.anchor:a("");let{patchFlag:A,dynamicChildren:g,slotScopeIds:k}=z;k&&(_e=_e?_e.concat(k):k),O==null?(i(ae,Z,le),i(fe,Z,le),F(z.children||[],Z,fe,se,ce,U,_e,he)):A>0&&A&64&&g&&O.dynamicChildren&&O.dynamicChildren.length===g.length?(S(O.dynamicChildren,g,Z,se,ce,U,_e),(z.key!=null||se&&z===se.subTree)&&Ld(O,z,!0)):Y(O,z,Z,fe,se,ce,U,_e,he)},H=(O,z,Z,le,se,ce,U,_e,he)=>{z.slotScopeIds=_e,O==null?z.shapeFlag&512?se.ctx.activate(z,Z,le,U,he):te(z,Z,le,se,ce,U,he):ee(O,z,he)},te=(O,z,Z,le,se,ce,U)=>{const _e=O.component=Eg(O,le,se);if(gd(O)&&(_e.ctx.renderer=Oe),Ag(_e,!1,U),_e.asyncDep){if(se&&se.registerDep(_e,V,U),!O.el){const he=_e.subTree=Vn(Ki);d(null,he,z,Z),O.placeholder=he.el}}else V(_e,O,z,Z,se,ce,U)},ee=(O,z,Z)=>{const le=z.component=O.component;if(rg(O,z,Z))if(le.asyncDep&&!le.asyncResolved){W(le,z,Z);return}else le.next=z,le.update();else z.el=O.el,le.vnode=z},V=(O,z,Z,le,se,ce,U)=>{const _e=()=>{if(O.isMounted){let{next:A,bu:g,u:k,parent:J,vnode:oe}=O;{const Ke=Nd(O);if(Ke){A&&(A.el=oe.el,W(O,A,U)),Ke.asyncDep.then(()=>{O.isUnmounted||_e()});return}}let $=A,Ie;ts(O,!1),A?(A.el=oe.el,W(O,A,U)):A=oe,g&&Yo(g),(Ie=A.props&&A.props.onVnodeBeforeUpdate)&&Jn(Ie,J,A,oe),ts(O,!0);const Me=Xu(O),Be=O.subTree;O.subTree=Me,y(Be,Me,h(Be.el),Q(Be),O,se,ce),A.el=Me.el,$===null&&og(O,Me.el),k&&Rn(k,se),(Ie=A.props&&A.props.onVnodeUpdated)&&Rn(()=>Jn(Ie,J,A,oe),se)}else{let A;const{el:g,props:k}=z,{bm:J,m:oe,parent:$,root:Ie,type:Me}=O,Be=Br(z);ts(O,!1),J&&Yo(J),!Be&&(A=k&&k.onVnodeBeforeMount)&&Jn(A,$,z),ts(O,!0);{Ie.ce&&Ie.ce._def.shadowRoot!==!1&&Ie.ce._injectChildStyle(Me);const Ke=O.subTree=Xu(O);y(null,Ke,Z,le,O,se,ce),z.el=Ke.el}if(oe&&Rn(oe,se),!Be&&(A=k&&k.onVnodeMounted)){const Ke=z;Rn(()=>Jn(A,$,Ke),se)}(z.shapeFlag&256||$&&Br($.vnode)&&$.vnode.shapeFlag&256)&&O.a&&Rn(O.a,se),O.isMounted=!0,z=Z=le=null}};O.scope.on();const he=O.effect=new jf(_e);O.scope.off();const ae=O.update=he.run.bind(he),fe=O.job=he.runIfDirty.bind(he);fe.i=O,fe.id=O.uid,he.scheduler=()=>ru(fe),ts(O,!0),ae()},W=(O,z,Z)=>{z.component=O;const le=O.vnode.props;O.vnode=z,O.next=null,lg(O,z.props,le,Z),fg(O,z.children,Z),wi(),Bu(O),Ri()},Y=(O,z,Z,le,se,ce,U,_e,he=!1)=>{const ae=O&&O.children,fe=O?O.shapeFlag:0,A=z.children,{patchFlag:g,shapeFlag:k}=z;if(g>0){if(g&128){ge(ae,A,Z,le,se,ce,U,_e,he);return}else if(g&256){pe(ae,A,Z,le,se,ce,U,_e,he);return}}k&8?(fe&16&&q(ae,se,ce),A!==ae&&u(Z,A)):fe&16?k&16?ge(ae,A,Z,le,se,ce,U,_e,he):q(ae,se,ce,!0):(fe&8&&u(Z,""),k&16&&F(A,Z,le,se,ce,U,_e,he))},pe=(O,z,Z,le,se,ce,U,_e,he)=>{O=O||js,z=z||js;const ae=O.length,fe=z.length,A=Math.min(ae,fe);let g;for(g=0;g<A;g++){const k=z[g]=he?Wi(z[g]):ti(z[g]);y(O[g],k,Z,null,se,ce,U,_e,he)}ae>fe?q(O,se,ce,!0,!1,A):F(z,Z,le,se,ce,U,_e,he,A)},ge=(O,z,Z,le,se,ce,U,_e,he)=>{let ae=0;const fe=z.length;let A=O.length-1,g=fe-1;for(;ae<=A&&ae<=g;){const k=O[ae],J=z[ae]=he?Wi(z[ae]):ti(z[ae]);if(br(k,J))y(k,J,Z,null,se,ce,U,_e,he);else break;ae++}for(;ae<=A&&ae<=g;){const k=O[A],J=z[g]=he?Wi(z[g]):ti(z[g]);if(br(k,J))y(k,J,Z,null,se,ce,U,_e,he);else break;A--,g--}if(ae>A){if(ae<=g){const k=g+1,J=k<fe?z[k].el:le;for(;ae<=g;)y(null,z[ae]=he?Wi(z[ae]):ti(z[ae]),Z,J,se,ce,U,_e,he),ae++}}else if(ae>g)for(;ae<=A;)Le(O[ae],se,ce,!0),ae++;else{const k=ae,J=ae,oe=new Map;for(ae=J;ae<=g;ae++){const Pe=z[ae]=he?Wi(z[ae]):ti(z[ae]);Pe.key!=null&&oe.set(Pe.key,ae)}let $,Ie=0;const Me=g-J+1;let Be=!1,Ke=0;const xe=new Array(Me);for(ae=0;ae<Me;ae++)xe[ae]=0;for(ae=k;ae<=A;ae++){const Pe=O[ae];if(Ie>=Me){Le(Pe,se,ce,!0);continue}let Ve;if(Pe.key!=null)Ve=oe.get(Pe.key);else for($=J;$<=g;$++)if(xe[$-J]===0&&br(Pe,z[$])){Ve=$;break}Ve===void 0?Le(Pe,se,ce,!0):(xe[Ve-J]=ae+1,Ve>=Ke?Ke=Ve:Be=!0,y(Pe,z[Ve],Z,null,se,ce,U,_e,he),Ie++)}const Ae=Be?gg(xe):js;for($=Ae.length-1,ae=Me-1;ae>=0;ae--){const Pe=J+ae,Ve=z[Pe],Te=z[Pe+1],at=Pe+1<fe?Te.el||Id(Te):le;xe[ae]===0?y(null,Ve,Z,at,se,ce,U,_e,he):Be&&($<0||ae!==Ae[$]?me(Ve,Z,at,2):$--)}}},me=(O,z,Z,le,se=null)=>{const{el:ce,type:U,transition:_e,children:he,shapeFlag:ae}=O;if(ae&6){me(O.component.subTree,z,Z,le);return}if(ae&128){O.suspense.move(z,Z,le);return}if(ae&64){U.move(O,z,Z,Oe);return}if(U===Fn){i(ce,z,Z);for(let A=0;A<he.length;A++)me(he[A],z,Z,le);i(O.anchor,z,Z);return}if(U===Qa){D(O,z,Z);return}if(le!==2&&ae&1&&_e)if(le===0)_e.beforeEnter(ce),i(ce,z,Z),Rn(()=>_e.enter(ce),se);else{const{leave:A,delayLeave:g,afterLeave:k}=_e,J=()=>{O.ctx.isUnmounted?s(ce):i(ce,z,Z)},oe=()=>{ce._isLeaving&&ce[Dm](!0),A(ce,()=>{J(),k&&k()})};g?g(ce,J,oe):oe()}else i(ce,z,Z)},Le=(O,z,Z,le=!1,se=!1)=>{const{type:ce,props:U,ref:_e,children:he,dynamicChildren:ae,shapeFlag:fe,patchFlag:A,dirs:g,cacheIndex:k}=O;if(A===-2&&(se=!1),_e!=null&&(wi(),Or(_e,null,Z,O,!0),Ri()),k!=null&&(z.renderCache[k]=void 0),fe&256){z.ctx.deactivate(O);return}const J=fe&1&&g,oe=!Br(O);let $;if(oe&&($=U&&U.onVnodeBeforeUnmount)&&Jn($,z,O),fe&6)Ce(O.component,Z,le);else{if(fe&128){O.suspense.unmount(Z,le);return}J&&es(O,null,z,"beforeUnmount"),fe&64?O.type.remove(O,z,Z,Oe,le):ae&&!ae.hasOnce&&(ce!==Fn||A>0&&A&64)?q(ae,z,Z,!1,!0):(ce===Fn&&A&384||!se&&fe&16)&&q(he,z,Z),le&&Ee(O)}(oe&&($=U&&U.onVnodeUnmounted)||J)&&Rn(()=>{$&&Jn($,z,O),J&&es(O,null,z,"unmounted")},Z)},Ee=O=>{const{type:z,el:Z,anchor:le,transition:se}=O;if(z===Fn){ke(Z,le);return}if(z===Qa){E(O);return}const ce=()=>{s(Z),se&&!se.persisted&&se.afterLeave&&se.afterLeave()};if(O.shapeFlag&1&&se&&!se.persisted){const{leave:U,delayLeave:_e}=se,he=()=>U(Z,ce);_e?_e(O.el,ce,he):he()}else ce()},ke=(O,z)=>{let Z;for(;O!==z;)Z=f(O),s(O),O=Z;s(z)},Ce=(O,z,Z)=>{const{bum:le,scope:se,job:ce,subTree:U,um:_e,m:he,a:ae}=O;Yu(he),Yu(ae),le&&Yo(le),se.stop(),ce&&(ce.flags|=8,Le(U,O,z,Z)),_e&&Rn(_e,z),Rn(()=>{O.isUnmounted=!0},z)},q=(O,z,Z,le=!1,se=!1,ce=0)=>{for(let U=ce;U<O.length;U++)Le(O[U],z,Z,le,se)},Q=O=>{if(O.shapeFlag&6)return Q(O.component.subTree);if(O.shapeFlag&128)return O.suspense.next();const z=f(O.anchor||O.el),Z=z&&z[Cm];return Z?f(Z):z};let Se=!1;const Qe=(O,z,Z)=>{let le;O==null?z._vnode&&(Le(z._vnode,null,null,!0),le=z._vnode.component):y(z._vnode||null,O,z,null,null,null,Z),z._vnode=O,Se||(Se=!0,Bu(le),ud(),Se=!1)},Oe={p:y,um:Le,m:me,r:Ee,mt:te,mc:F,pc:Y,pbc:S,n:Q,o:n};return{render:Qe,hydrate:void 0,createApp:Qm(Qe)}}function Ja({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ts({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function mg(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Ld(n,e,t=!1){const i=n.children,s=e.children;if(ut(i)&&ut(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Wi(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Ld(o,a)),a.type===Ca&&(a.patchFlag!==-1?a.el=o.el:a.__elIndex=r+(n.type===Fn?1:0)),a.type===Ki&&!a.el&&(a.el=o.el)}}function gg(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Nd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Nd(e)}function Yu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Id(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Id(e.subTree):null}const Ud=n=>n.__isSuspense;function _g(n,e){e&&e.pendingBranch?ut(n)?e.effects.push(...n):e.effects.push(n):Sm(n)}const Fn=Symbol.for("v-fgt"),Ca=Symbol.for("v-txt"),Ki=Symbol.for("v-cmt"),Qa=Symbol.for("v-stc"),Vr=[];let Dn=null;function Jt(n=!1){Vr.push(Dn=n?null:[])}function xg(){Vr.pop(),Dn=Vr[Vr.length-1]||null}let qr=1;function Ku(n,e=!1){qr+=n,n<0&&Dn&&e&&(Dn.hasOnce=!0)}function Fd(n){return n.dynamicChildren=qr>0?Dn||js:null,xg(),qr>0&&Dn&&Dn.push(n),n}function vn(n,e,t,i,s,r){return Fd(Mt(n,e,t,i,s,r,!0))}function hu(n,e,t,i,s){return Fd(Vn(n,e,t,i,s,!0))}function Od(n){return n?n.__v_isVNode===!0:!1}function br(n,e){return n.type===e.type&&n.key===e.key}const Bd=({key:n})=>n??null,Zo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Xt(n)||hn(n)||ct(n)?{i:Pn,r:n,k:e,f:!!t}:n:null);function Mt(n,e=null,t=null,i=0,s=null,r=n===Fn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Bd(e),ref:e&&Zo(e),scopeId:fd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Pn};return a?(fu(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Xt(t)?8:16),qr>0&&!o&&Dn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Dn.push(l),l}const Vn=vg;function vg(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Wm)&&(n=Ki),Od(n)){const a=sr(n,e,!0);return t&&fu(a,t),qr>0&&!r&&Dn&&(a.shapeFlag&6?Dn[Dn.indexOf(n)]=a:Dn.push(a)),a.patchFlag=-2,a}if(Dg(n)&&(n=n.__vccOpts),e){e=Mg(e);let{class:a,style:l}=e;a&&!Xt(a)&&(e.class=Ea(a)),Vt(l)&&(su(l)&&!ut(l)&&(l=dn({},l)),e.style=$c(l))}const o=Xt(n)?1:Ud(n)?128:Pm(n)?64:Vt(n)?4:ct(n)?2:0;return Mt(n,e,t,i,s,o,r,!0)}function Mg(n){return n?su(n)||Ad(n)?dn({},n):n:null}function sr(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?yg(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Bd(c),ref:e&&e.ref?t&&r?ut(r)?r.concat(Zo(e)):[r,Zo(e)]:Zo(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Fn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&sr(n.ssContent),ssFallback:n.ssFallback&&sr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&ou(u,l.clone(u)),u}function kd(n=" ",e=0){return Vn(Ca,null,n,e)}function ua(n="",e=!1){return e?(Jt(),hu(Ki,null,n)):Vn(Ki,null,n)}function ti(n){return n==null||typeof n=="boolean"?Vn(Ki):ut(n)?Vn(Fn,null,n.slice()):Od(n)?Wi(n):Vn(Ca,null,String(n))}function Wi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:sr(n)}function fu(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ut(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),fu(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Ad(e)?e._ctx=Pn:s===3&&Pn&&(Pn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ct(e)?(e={default:e,_ctx:Pn},t=32):(e=String(e),i&64?(t=16,e=[kd(e)]):t=8);n.children=e,n.shapeFlag|=t}function yg(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Ea([e.class,i.class]));else if(s==="style")e.style=$c([e.style,i.style]);else if(va(s)){const r=e[s],o=i[s];o&&r!==o&&!(ut(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Jn(n,e,t,i=null){li(n,e,7,[t,i])}const Sg=Sd();let bg=0;function Eg(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Sg,r={uid:bg++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Gp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rd(i,s),emitsOptions:bd(i,s),emit:null,emitted:null,propsDefaults:Ut,inheritAttrs:i.inheritAttrs,ctx:Ut,data:Ut,props:Ut,attrs:Ut,slots:Ut,refs:Ut,setupState:Ut,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=tg.bind(null,r),n.ce&&n.ce(r),r}let un=null;const Tg=()=>un||Pn;let ha,Kl;{const n=ba(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};ha=e("__VUE_INSTANCE_SETTERS__",t=>un=t),Kl=e("__VUE_SSR_SETTERS__",t=>jr=t)}const to=n=>{const e=un;return ha(n),n.scope.on(),()=>{n.scope.off(),ha(e)}},$u=()=>{un&&un.scope.off(),ha(null)};function Vd(n){return n.vnode.shapeFlag&4}let jr=!1;function Ag(n,e=!1,t=!1){e&&Kl(e);const{props:i,children:s}=n.vnode,r=Vd(n);ag(n,i,r,e),hg(n,s,t||e);const o=r?wg(n,e):void 0;return e&&Kl(!1),o}function wg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,qm);const{setup:i}=t;if(i){wi();const s=n.setupContext=i.length>1?Cg(n):null,r=to(n),o=Qr(i,n,0,[n.props,s]),a=Vf(o);if(Ri(),r(),(a||n.sp)&&!Br(n)&&md(n),a){if(o.then($u,$u),e)return o.then(l=>{Zu(n,l)}).catch(l=>{Aa(l,n,0)});n.asyncDep=o}else Zu(n,o)}else zd(n)}function Zu(n,e,t){ct(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Vt(e)&&(n.setupState=ad(e)),zd(n)}function zd(n,e,t){const i=n.type;n.render||(n.render=i.render||ri);{const s=to(n);wi();try{jm(n)}finally{Ri(),s()}}}const Rg={get(n,e){return ln(n,"get",""),n[e]}};function Cg(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Rg),slots:n.slots,emit:n.emit,expose:e}}function Pa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(ad(um(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in kr)return kr[t](n)},has(e,t){return t in e||t in kr}})):n.proxy}function Pg(n,e=!0){return ct(n)?n.displayName||n.name:n.name||e&&n.__name}function Dg(n){return ct(n)&&"__vccOpts"in n}const rr=(n,e)=>gm(n,e,jr),Lg="3.5.26";let $l;const Ju=typeof window<"u"&&window.trustedTypes;if(Ju)try{$l=Ju.createPolicy("vue",{createHTML:n=>n})}catch{}const Hd=$l?n=>$l.createHTML(n):n=>n,Ng="http://www.w3.org/2000/svg",Ig="http://www.w3.org/1998/Math/MathML",yi=typeof document<"u"?document:null,Qu=yi&&yi.createElement("template"),Ug={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?yi.createElementNS(Ng,n):e==="mathml"?yi.createElementNS(Ig,n):t?yi.createElement(n,{is:t}):yi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>yi.createTextNode(n),createComment:n=>yi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>yi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Qu.innerHTML=Hd(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Qu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Fg=Symbol("_vtc");function Og(n,e,t){const i=n[Fg];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const eh=Symbol("_vod"),Bg=Symbol("_vsh"),kg=Symbol(""),Vg=/(?:^|;)\s*display\s*:/;function zg(n,e,t){const i=n.style,s=Xt(t);let r=!1;if(t&&!s){if(e)if(Xt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Jo(i,a,"")}else for(const o in e)t[o]==null&&Jo(i,o,"");for(const o in t)o==="display"&&(r=!0),Jo(i,o,t[o])}else if(s){if(e!==t){const o=i[kg];o&&(t+=";"+o),i.cssText=t,r=Vg.test(t)}}else e&&n.removeAttribute("style");eh in n&&(n[eh]=r?i.display:"",n[Bg]&&(i.display="none"))}const th=/\s*!important$/;function Jo(n,e,t){if(ut(t))t.forEach(i=>Jo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Hg(n,e);th.test(t)?n.setProperty(Ji(i),t.replace(th,""),"important"):n[i]=t}}const nh=["Webkit","Moz","ms"],el={};function Hg(n,e){const t=el[e];if(t)return t;let i=zn(e);if(i!=="filter"&&i in n)return el[e]=i;i=Sa(i);for(let s=0;s<nh.length;s++){const r=nh[s]+i;if(r in n)return el[e]=r}return e}const ih="http://www.w3.org/1999/xlink";function sh(n,e,t,i,s,r=Hp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(ih,e.slice(6,e.length)):n.setAttributeNS(ih,e,t):t==null||r&&!Wf(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Zi(t)?String(t):t)}function rh(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Hd(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Wf(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Hs(n,e,t,i){n.addEventListener(e,t,i)}function Gg(n,e,t,i){n.removeEventListener(e,t,i)}const oh=Symbol("_vei");function Wg(n,e,t,i,s=null){const r=n[oh]||(n[oh]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=Xg(e);if(i){const c=r[e]=Yg(i,s);Hs(n,a,c,l)}else o&&(Gg(n,a,o,l),r[e]=void 0)}}const ah=/(?:Once|Passive|Capture)$/;function Xg(n){let e;if(ah.test(n)){e={};let i;for(;i=n.match(ah);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ji(n.slice(2)),e]}let tl=0;const qg=Promise.resolve(),jg=()=>tl||(qg.then(()=>tl=0),tl=Date.now());function Yg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;li(Kg(i,t.value),e,5,[i])};return t.value=n,t.attached=jg(),t}function Kg(n,e){if(ut(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const lh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,$g=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?Og(n,i,o):e==="style"?zg(n,t,i):va(e)?qc(e)||Wg(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Zg(n,e,i,o))?(rh(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&sh(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Xt(i))?rh(n,zn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),sh(n,e,i,o))};function Zg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&lh(e)&&ct(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return lh(e)&&Xt(t)?!1:e in n}const ch=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ut(e)?t=>Yo(e,t):e};function Jg(n){n.target.composing=!0}function uh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const nl=Symbol("_assign");function hh(n,e,t){return e&&(n=n.trim()),t&&(n=Kc(n)),n}const Qg={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[nl]=ch(s);const r=i||s.props&&s.props.type==="number";Hs(n,e?"change":"input",o=>{o.target.composing||n[nl](hh(n.value,t,r))}),(t||r)&&Hs(n,"change",()=>{n.value=hh(n.value,t,r)}),e||(Hs(n,"compositionstart",Jg),Hs(n,"compositionend",uh),Hs(n,"change",uh))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[nl]=ch(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Kc(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l))}},e_=["ctrl","shift","alt","meta"],t_={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>e_.some(t=>n[`${t}Key`]&&!e.includes(t))},n_=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((s,...r)=>{for(let o=0;o<e.length;o++){const a=t_[e[o]];if(a&&a(s,e))return}return n(s,...r)}))},i_={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},s_=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=(s=>{if(!("key"in s))return;const r=Ji(s.key);if(e.some(o=>o===r||i_[o]===r))return n(s)}))},r_=dn({patchProp:$g},Ug);let fh;function o_(){return fh||(fh=dg(r_))}const a_=((...n)=>{const e=o_().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=c_(i);if(!s)return;const r=e._component;!ct(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,l_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function l_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function c_(n){return Xt(n)?document.querySelector(n):n}const u_={class:"tree-node"},h_={class:"node-icon"},f_={class:"node-name"},d_={class:"node-type"},p_={key:0,class:"node-children"},m_=eo({__name:"TreeNode",props:{node:{},selected:{}},emits:["select"],setup(n,{emit:e}){const t=n,i=e,s=rr(()=>t.selected===t.node),r=()=>{i("select",t.node)},o=rr(()=>{switch(t.node.type){case"robot":return"🤖";case"link":return"🔗";case"joint":return"⚙️";default:return"📦"}});return(a,l)=>{const c=Gm("TreeNode",!0);return Jt(),vn("div",u_,[Mt("div",{class:Ea(["node-label",{selected:s.value}]),onClick:r},[Mt("span",h_,Ks(o.value),1),Mt("span",f_,Ks(n.node.name),1),Mt("span",d_,"["+Ks(n.node.type)+"]",1)],2),n.node.children&&n.node.children.length>0?(Jt(),vn("div",p_,[(Jt(!0),vn(Fn,null,vd(n.node.children,(u,h)=>(Jt(),hu(c,{key:h,node:u,selected:n.selected,onSelect:l[0]||(l[0]=f=>a.$emit("select",f))},null,8,["node","selected"]))),128))])):ua("",!0)])}}}),no=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},g_=no(m_,[["__scopeId","data-v-237333de"]]),__={class:"hierarchy-panel"},x_={class:"panel-content"},v_={key:0,class:"empty-state"},M_={key:1,class:"tree"},y_=eo({__name:"HierarchyPanel",props:{root:{},selected:{}},emits:["select"],setup(n,{emit:e}){const t=n,i=e,s=rr(()=>t.root!==null),r=o=>{i("select",o)};return(o,a)=>(Jt(),vn("aside",__,[a[1]||(a[1]=Mt("div",{class:"panel-header"},[Mt("h2",null,"Hierarchy")],-1)),Mt("div",x_,[s.value?(Jt(),vn("div",M_,[n.root?(Jt(),hu(g_,{key:0,node:n.root,selected:n.selected,onSelect:r},null,8,["node","selected"])):ua("",!0)])):(Jt(),vn("div",v_,[...a[0]||(a[0]=[Mt("p",null,"No model loaded",-1),Mt("p",{class:"hint"},"Upload a URDF file to get started",-1)])]))])]))}}),S_=no(y_,[["__scopeId","data-v-e70c2b26"]]);const du="182",Js={ROTATE:0,DOLLY:1,PAN:2},Xs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},b_=0,dh=1,E_=2,Qo=1,T_=2,Lr=3,Pi=0,En=1,ii=2,Ti=0,Qs=1,ph=2,mh=3,gh=4,A_=5,us=100,w_=101,R_=102,C_=103,P_=104,D_=200,L_=201,N_=202,I_=203,Zl=204,Jl=205,U_=206,F_=207,O_=208,B_=209,k_=210,V_=211,z_=212,H_=213,G_=214,Ql=0,ec=1,tc=2,or=3,nc=4,ic=5,sc=6,rc=7,Da=0,W_=1,X_=2,oi=0,Gd=1,Wd=2,Xd=3,qd=4,jd=5,Yd=6,Kd=7,_h="attached",q_="detached",$d=300,gs=301,ar=302,oc=303,ac=304,La=306,fs=1e3,Ln=1001,lc=1002,sn=1003,j_=1004,go=1005,Yt=1006,il=1007,Ei=1008,Cn=1009,Zd=1010,Jd=1011,Yr=1012,pu=1013,ci=1014,qn=1015,Di=1016,mu=1017,gu=1018,Kr=1020,Qd=35902,ep=35899,tp=1021,np=1022,Bn=1023,Li=1026,ds=1027,ip=1028,_u=1029,lr=1030,xu=1031,vu=1033,ea=33776,ta=33777,na=33778,ia=33779,cc=35840,uc=35841,hc=35842,fc=35843,dc=36196,pc=37492,mc=37496,gc=37488,_c=37489,xc=37490,vc=37491,Mc=37808,yc=37809,Sc=37810,bc=37811,Ec=37812,Tc=37813,Ac=37814,wc=37815,Rc=37816,Cc=37817,Pc=37818,Dc=37819,Lc=37820,Nc=37821,Ic=36492,Uc=36494,Fc=36495,Oc=36283,Bc=36284,kc=36285,Vc=36286,fa=2300,zc=2301,sl=2302,xh=2400,vh=2401,Mh=2402,Y_=2500,K_=3200,Mu=0,$_=1,qi="",Ht="srgb",cr="srgb-linear",da="linear",Lt="srgb",Ts=7680,yh=519,Z_=512,J_=513,Q_=514,yu=515,e0=516,t0=517,Su=518,n0=519,Sh=35044,bh="300 es",si=2e3,pa=2001;function sp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function i0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function $r(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function s0(){const n=$r("canvas");return n.style.display="block",n}const Eh={};function Th(...n){const e="THREE."+n.shift();console.log(e,...n)}function nt(...n){const e="THREE."+n.shift();console.warn(e,...n)}function gt(...n){const e="THREE."+n.shift();console.error(e,...n)}function Zr(...n){const e=n.join(" ");e in Eh||(Eh[e]=!0,nt(...n))}function r0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}class _s{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ah=1234567;const er=Math.PI/180,ur=180/Math.PI;function Qi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function _t(n,e,t){return Math.max(e,Math.min(t,n))}function bu(n,e){return(n%e+e)%e}function o0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function a0(n,e,t){return n!==e?(t-n)/(e-n):0}function zr(n,e,t){return(1-t)*n+t*e}function l0(n,e,t,i){return zr(n,e,1-Math.exp(-t*i))}function c0(n,e=1){return e-Math.abs(bu(n,e*2)-e)}function u0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function h0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function f0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function d0(n,e){return n+Math.random()*(e-n)}function p0(n){return n*(.5-Math.random())}function m0(n){n!==void 0&&(Ah=n);let e=Ah+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function g0(n){return n*er}function _0(n){return n*ur}function x0(n){return(n&n-1)===0&&n!==0}function v0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function M0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function y0(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),p=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*_,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*_,a*c);break;case"ZYZ":n.set(l*_,l*p,a*u,a*c);break;default:nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Gs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function gn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ws={DEG2RAD:er,RAD2DEG:ur,generateUUID:Qi,clamp:_t,euclideanModulo:bu,mapLinear:o0,inverseLerp:a0,lerp:zr,damp:l0,pingpong:c0,smoothstep:u0,smootherstep:h0,randInt:f0,randFloat:d0,randFloatSpread:p0,seededRandom:m0,degToRad:g0,radToDeg:_0,isPowerOfTwo:x0,ceilPowerOfTwo:v0,floorPowerOfTwo:M0,setQuaternionFromProperEuler:y0,normalize:gn,denormalize:Gs};class ot{constructor(e=0,t=0){ot.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_t(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(_t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[o+0],p=r[o+1],_=r[o+2],y=r[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a>=1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=y;return}if(h!==y||l!==f||c!==p||u!==_){let m=l*f+c*p+u*_+h*y;m<0&&(f=-f,p=-p,_=-_,y=-y,m=-m);let d=1-a;if(m<.9995){const R=Math.acos(m),D=Math.sin(R);d=Math.sin(d*R)/D,a=Math.sin(a*R)/D,l=l*d+f*a,c=c*d+p*a,u=u*d+_*a,h=h*d+y*a}else{l=l*d+f*a,c=c*d+p*a,u=u*d+_*a,h=h*d+y*a;const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],p=r[o+2],_=r[o+3];return e[t]=a*_+u*h+l*p-c*f,e[t+1]=l*_+u*f+c*h-a*p,e[t+2]=c*_+u*p+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h-f*p*_;break;case"YXZ":this._x=f*u*h+c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h+f*p*_;break;case"ZXY":this._x=f*u*h-c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h-f*p*_;break;case"ZYX":this._x=f*u*h-c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h+f*p*_;break;case"YZX":this._x=f*u*h+c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h-f*p*_;break;case"XZY":this._x=f*u*h-c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h+f*p*_;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_t(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return rl.copy(this).projectOnVector(e),this.sub(rl)}reflect(e){return this.sub(rl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(_t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rl=new X,wh=new Kn;class pt{constructor(e,t,i,s,r,o,a,l,c){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],_=i[8],y=s[0],m=s[3],d=s[6],R=s[1],D=s[4],E=s[7],b=s[2],L=s[5],I=s[8];return r[0]=o*y+a*R+l*b,r[3]=o*m+a*D+l*L,r[6]=o*d+a*E+l*I,r[1]=c*y+u*R+h*b,r[4]=c*m+u*D+h*L,r[7]=c*d+u*E+h*I,r[2]=f*y+p*R+_*b,r[5]=f*m+p*D+_*L,r[8]=f*d+p*E+_*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,p=c*r-o*l,_=t*h+i*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=h*y,e[1]=(s*c-u*i)*y,e[2]=(a*i-s*o)*y,e[3]=f*y,e[4]=(u*t-s*l)*y,e[5]=(s*r-a*t)*y,e[6]=p*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ol.makeScale(e,t)),this}rotate(e){return this.premultiply(ol.makeRotation(-e)),this}translate(e,t){return this.premultiply(ol.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ol=new pt,Rh=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ch=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function S0(){const n={enabled:!0,workingColorSpace:cr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Lt&&(s.r=Ai(s.r),s.g=Ai(s.g),s.b=Ai(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Lt&&(s.r=tr(s.r),s.g=tr(s.g),s.b=tr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qi?da:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Zr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Zr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[cr]:{primaries:e,whitePoint:i,transfer:da,toXYZ:Rh,fromXYZ:Ch,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:i,transfer:Lt,toXYZ:Rh,fromXYZ:Ch,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),n}const xt=S0();function Ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function tr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let As;class b0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{As===void 0&&(As=$r("canvas")),As.width=e.width,As.height=e.height;const s=As.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=As}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$r("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ai(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ai(t[i]/255)*255):t[i]=Ai(t[i]);return{data:t,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let E0=0;class Eu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=Qi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(al(s[o].image)):r.push(al(s[o]))}else r=al(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function al(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?b0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}let T0=0;const ll=new X;class fn extends _s{constructor(e=fn.DEFAULT_IMAGE,t=fn.DEFAULT_MAPPING,i=Ln,s=Ln,r=Yt,o=Ei,a=Bn,l=Cn,c=fn.DEFAULT_ANISOTROPY,u=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=Qi(),this.name="",this.source=new Eu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ll).x}get height(){return this.source.getSize(ll).y}get depth(){return this.source.getSize(ll).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){nt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){nt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$d)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fs:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case lc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fs:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case lc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=$d;fn.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,t=0,i=0,s=1){Ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],_=l[9],y=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(c+1)/2,E=(p+1)/2,b=(d+1)/2,L=(u+f)/4,I=(h+y)/4,F=(_+m)/4;return D>E&&D>b?D<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(D),s=L/i,r=I/i):E>b?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=L/s,r=F/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=I/r,s=F/r),this.set(i,s,r,t),this}let R=Math.sqrt((m-_)*(m-_)+(h-y)*(h-y)+(f-u)*(f-u));return Math.abs(R)<.001&&(R=1),this.x=(m-_)/R,this.y=(h-y)/R,this.z=(f-u)/R,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_t(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class A0 extends _s{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new fn(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Eu(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends A0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class rp extends fn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class w0 extends fn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pr{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gn):Gn.fromBufferAttribute(r,o),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_o.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_o.copy(i.boundingBox)),_o.applyMatrix4(e.matrixWorld),this.union(_o)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Er),xo.subVectors(this.max,Er),ws.subVectors(e.a,Er),Rs.subVectors(e.b,Er),Cs.subVectors(e.c,Er),Ui.subVectors(Rs,ws),Fi.subVectors(Cs,Rs),ns.subVectors(ws,Cs);let t=[0,-Ui.z,Ui.y,0,-Fi.z,Fi.y,0,-ns.z,ns.y,Ui.z,0,-Ui.x,Fi.z,0,-Fi.x,ns.z,0,-ns.x,-Ui.y,Ui.x,0,-Fi.y,Fi.x,0,-ns.y,ns.x,0];return!cl(t,ws,Rs,Cs,xo)||(t=[1,0,0,0,1,0,0,0,1],!cl(t,ws,Rs,Cs,xo))?!1:(vo.crossVectors(Ui,Fi),t=[vo.x,vo.y,vo.z],cl(t,ws,Rs,Cs,xo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const mi=[new X,new X,new X,new X,new X,new X,new X,new X],Gn=new X,_o=new pr,ws=new X,Rs=new X,Cs=new X,Ui=new X,Fi=new X,ns=new X,Er=new X,xo=new X,vo=new X,is=new X;function cl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){is.fromArray(n,r);const a=s.x*Math.abs(is.x)+s.y*Math.abs(is.y)+s.z*Math.abs(is.z),l=e.dot(is),c=t.dot(is),u=i.dot(is);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const R0=new pr,Tr=new X,ul=new X;class mr{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):R0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Tr.subVectors(e,this.center);const t=Tr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Tr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ul.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Tr.copy(e.center).add(ul)),this.expandByPoint(Tr.copy(e.center).sub(ul))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const gi=new X,hl=new X,Mo=new X,Oi=new X,fl=new X,yo=new X,dl=new X;class io{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){hl.copy(e).add(t).multiplyScalar(.5),Mo.copy(t).sub(e).normalize(),Oi.copy(this.origin).sub(hl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Mo),a=Oi.dot(this.direction),l=-Oi.dot(Mo),c=Oi.lengthSq(),u=Math.abs(1-o*o);let h,f,p,_;if(u>0)if(h=o*l-a,f=o*a-l,_=r*u,h>=0)if(f>=-_)if(f<=_){const y=1/u;h*=y,f*=y,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(hl).addScaledVector(Mo,f),p}intersectSphere(e,t){gi.subVectors(e.center,this.origin);const i=gi.dot(this.direction),s=gi.dot(gi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,i,s,r){fl.subVectors(t,e),yo.subVectors(i,e),dl.crossVectors(fl,yo);let o=this.direction.dot(dl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,e);const l=a*this.direction.dot(yo.crossVectors(Oi,yo));if(l<0)return null;const c=a*this.direction.dot(fl.cross(Oi));if(c<0||l+c>o)return null;const u=-a*Oi.dot(dl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,i,s,r,o,a,l,c,u,h,f,p,_,y,m){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,f,p,_,y,m)}set(e,t,i,s,r,o,a,l,c,u,h,f,p,_,y,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=_,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Ps.setFromMatrixColumn(e,0).length(),r=1/Ps.setFromMatrixColumn(e,1).length(),o=1/Ps.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,p=o*h,_=a*u,y=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+_*c,t[5]=f-y*c,t[9]=-a*l,t[2]=y-f*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,_=c*u,y=c*h;t[0]=f+y*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=y+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,_=c*u,y=c*h;t[0]=f-y*a,t[4]=-o*h,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=y-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,_=a*u,y=a*h;t[0]=l*u,t[4]=_*c-p,t[8]=f*c+y,t[1]=l*h,t[5]=y*c+f,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,_=a*l,y=a*c;t[0]=l*u,t[4]=y-f*h,t[8]=_*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+_,t[10]=f-y*h}else if(e.order==="XZY"){const f=o*l,p=o*c,_=a*l,y=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+y,t[5]=o*u,t[9]=p*h-_,t[2]=_*h-p,t[6]=a*u,t[10]=y*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(C0,e,P0)}lookAt(e,t,i){const s=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),Bi.crossVectors(i,An),Bi.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Bi.crossVectors(i,An)),Bi.normalize(),So.crossVectors(An,Bi),s[0]=Bi.x,s[4]=So.x,s[8]=An.x,s[1]=Bi.y,s[5]=So.y,s[9]=An.y,s[2]=Bi.z,s[6]=So.z,s[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],_=i[2],y=i[6],m=i[10],d=i[14],R=i[3],D=i[7],E=i[11],b=i[15],L=s[0],I=s[4],F=s[8],x=s[12],S=s[1],N=s[5],B=s[9],H=s[13],te=s[2],ee=s[6],V=s[10],W=s[14],Y=s[3],pe=s[7],ge=s[11],me=s[15];return r[0]=o*L+a*S+l*te+c*Y,r[4]=o*I+a*N+l*ee+c*pe,r[8]=o*F+a*B+l*V+c*ge,r[12]=o*x+a*H+l*W+c*me,r[1]=u*L+h*S+f*te+p*Y,r[5]=u*I+h*N+f*ee+p*pe,r[9]=u*F+h*B+f*V+p*ge,r[13]=u*x+h*H+f*W+p*me,r[2]=_*L+y*S+m*te+d*Y,r[6]=_*I+y*N+m*ee+d*pe,r[10]=_*F+y*B+m*V+d*ge,r[14]=_*x+y*H+m*W+d*me,r[3]=R*L+D*S+E*te+b*Y,r[7]=R*I+D*N+E*ee+b*pe,r[11]=R*F+D*B+E*V+b*ge,r[15]=R*x+D*H+E*W+b*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],_=e[3],y=e[7],m=e[11],d=e[15],R=l*p-c*f,D=a*p-c*h,E=a*f-l*h,b=o*p-c*u,L=o*f-l*u,I=o*h-a*u;return t*(y*R-m*D+d*E)-i*(_*R-m*b+d*L)+s*(_*D-y*b+d*I)-r*(_*E-y*L+m*I)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],_=e[12],y=e[13],m=e[14],d=e[15],R=h*m*c-y*f*c+y*l*p-a*m*p-h*l*d+a*f*d,D=_*f*c-u*m*c-_*l*p+o*m*p+u*l*d-o*f*d,E=u*y*c-_*h*c+_*a*p-o*y*p-u*a*d+o*h*d,b=_*h*l-u*y*l-_*a*f+o*y*f+u*a*m-o*h*m,L=t*R+i*D+s*E+r*b;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/L;return e[0]=R*I,e[1]=(y*f*r-h*m*r-y*s*p+i*m*p+h*s*d-i*f*d)*I,e[2]=(a*m*r-y*l*r+y*s*c-i*m*c-a*s*d+i*l*d)*I,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*p-i*l*p)*I,e[4]=D*I,e[5]=(u*m*r-_*f*r+_*s*p-t*m*p-u*s*d+t*f*d)*I,e[6]=(_*l*r-o*m*r-_*s*c+t*m*c+o*s*d-t*l*d)*I,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*p+t*l*p)*I,e[8]=E*I,e[9]=(_*h*r-u*y*r-_*i*p+t*y*p+u*i*d-t*h*d)*I,e[10]=(o*y*r-_*a*r+_*i*c-t*y*c-o*i*d+t*a*d)*I,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*p-t*a*p)*I,e[12]=b*I,e[13]=(u*y*s-_*h*s+_*i*f-t*y*f-u*i*m+t*h*m)*I,e[14]=(_*a*s-o*y*s-_*i*l+t*y*l+o*i*m-t*a*m)*I,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*f+t*a*f)*I,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,p=r*u,_=r*h,y=o*u,m=o*h,d=a*h,R=l*c,D=l*u,E=l*h,b=i.x,L=i.y,I=i.z;return s[0]=(1-(y+d))*b,s[1]=(p+E)*b,s[2]=(_-D)*b,s[3]=0,s[4]=(p-E)*L,s[5]=(1-(f+d))*L,s[6]=(m+R)*L,s[7]=0,s[8]=(_+D)*I,s[9]=(m-R)*I,s[10]=(1-(f+y))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let r=Ps.set(s[0],s[1],s[2]).length();const o=Ps.set(s[4],s[5],s[6]).length(),a=Ps.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),Wn.copy(this);const c=1/r,u=1/o,h=1/a;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=h,Wn.elements[9]*=h,Wn.elements[10]*=h,t.setFromRotationMatrix(Wn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=si,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),p=(i+s)/(i-s);let _,y;if(l)_=r/(o-r),y=o*r/(o-r);else if(a===si)_=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===pa)_=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=si,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-s),f=-(t+e)/(t-e),p=-(i+s)/(i-s);let _,y;if(l)_=1/(o-r),y=o/(o-r);else if(a===si)_=-2/(o-r),y=-(o+r)/(o-r);else if(a===pa)_=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ps=new X,Wn=new lt,C0=new X(0,0,0),P0=new X(1,1,1),Bi=new X,So=new X,An=new X,Ph=new lt,Dh=new Kn;class In{constructor(e=0,t=0,i=0,s=In.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(_t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ph.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ph,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dh.setFromEuler(this),this.setFromQuaternion(Dh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}In.DEFAULT_ORDER="XYZ";class Tu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let D0=0;const Lh=new X,Ds=new Kn,_i=new lt,bo=new X,Ar=new X,L0=new X,N0=new Kn,Nh=new X(1,0,0),Ih=new X(0,1,0),Uh=new X(0,0,1),Fh={type:"added"},I0={type:"removed"},Ls={type:"childadded",child:null},pl={type:"childremoved",child:null};class Gt extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new X,t=new In,i=new Kn,s=new X(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new pt}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(Nh,e)}rotateY(e){return this.rotateOnAxis(Ih,e)}rotateZ(e){return this.rotateOnAxis(Uh,e)}translateOnAxis(e,t){return Lh.copy(e).applyQuaternion(this.quaternion),this.position.add(Lh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nh,e)}translateY(e){return this.translateOnAxis(Ih,e)}translateZ(e){return this.translateOnAxis(Uh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?bo.copy(e):bo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Ar,bo,this.up):_i.lookAt(bo,Ar,this.up),this.quaternion.setFromRotationMatrix(_i),s&&(_i.extractRotation(s.matrixWorld),Ds.setFromRotationMatrix(_i),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(gt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fh),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null):gt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(I0),pl.child=e,this.dispatchEvent(pl),pl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fh),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,e,L0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,N0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Gt.DEFAULT_UP=new X(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new X,xi=new X,ml=new X,vi=new X,Ns=new X,Is=new X,Oh=new X,gl=new X,_l=new X,xl=new X,vl=new Ot,Ml=new Ot,yl=new Ot;class On{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Xn.subVectors(e,t),s.cross(Xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Xn.subVectors(s,t),xi.subVectors(i,t),ml.subVectors(e,t);const o=Xn.dot(Xn),a=Xn.dot(xi),l=Xn.dot(ml),c=xi.dot(xi),u=xi.dot(ml),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(c*l-a*u)*f,_=(o*u-a*l)*f;return r.set(1-p-_,_,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vi.x),l.addScaledVector(o,vi.y),l.addScaledVector(a,vi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return vl.setScalar(0),Ml.setScalar(0),yl.setScalar(0),vl.fromBufferAttribute(e,t),Ml.fromBufferAttribute(e,i),yl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(vl,r.x),o.addScaledVector(Ml,r.y),o.addScaledVector(yl,r.z),o}static isFrontFacing(e,t,i,s){return Xn.subVectors(i,t),xi.subVectors(e,t),Xn.cross(xi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Xn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return On.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return On.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Ns.subVectors(s,i),Is.subVectors(r,i),gl.subVectors(e,i);const l=Ns.dot(gl),c=Is.dot(gl);if(l<=0&&c<=0)return t.copy(i);_l.subVectors(e,s);const u=Ns.dot(_l),h=Is.dot(_l);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ns,o);xl.subVectors(e,r);const p=Ns.dot(xl),_=Is.dot(xl);if(_>=0&&p<=_)return t.copy(r);const y=p*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(Is,a);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return Oh.subVectors(r,s),a=(h-u)/(h-u+(p-_)),t.copy(s).addScaledVector(Oh,a);const d=1/(m+y+f);return o=y*d,a=f*d,t.copy(i).addScaledVector(Ns,o).addScaledVector(Is,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const op={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},Eo={h:0,s:0,l:0};function Sl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ht{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,xt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=xt.workingColorSpace){if(e=bu(e,1),t=_t(t,0,1),i=_t(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Sl(o,r,e+1/3),this.g=Sl(o,r,e),this.b=Sl(o,r,e-1/3)}return xt.colorSpaceToWorking(this,s),this}setStyle(e,t=Ht){function i(r){r!==void 0&&parseFloat(r)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:nt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){const i=op[e.toLowerCase()];return i!==void 0?this.setHex(i,t):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return xt.workingToColorSpace(an.copy(this),e),Math.round(_t(an.r*255,0,255))*65536+Math.round(_t(an.g*255,0,255))*256+Math.round(_t(an.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(an.copy(this),t);const i=an.r,s=an.g,r=an.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=Ht){xt.workingToColorSpace(an.copy(this),e);const t=an.r,i=an.g,s=an.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+t,ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ki),e.getHSL(Eo);const i=zr(ki.h,Eo.h,t),s=zr(ki.s,Eo.s,t),r=zr(ki.l,Eo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new ht;ht.NAMES=op;let U0=0;class xs extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=Qi(),this.name="",this.type="Material",this.blending=Qs,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zl,this.blendDst=Jl,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){nt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){nt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(i.blending=this.blending),this.side!==Pi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Zl&&(i.blendSrc=this.blendSrc),this.blendDst!==Jl&&(i.blendDst=this.blendDst),this.blendEquation!==us&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==or&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ma extends xs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=Da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new X,To=new ot;let F0=0;class Nn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:F0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Sh,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)To.fromBufferAttribute(this,t),To.applyMatrix3(e),this.setXY(t,To.x,To.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Gs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gs(t,this.array)),t}setX(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gs(t,this.array)),t}setY(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gs(t,this.array)),t}setW(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),i=gn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),i=gn(i,this.array),s=gn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),i=gn(i,this.array),s=gn(s,this.array),r=gn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sh&&(e.usage=this.usage),e}}class ap extends Nn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class lp extends Nn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class At extends Nn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let O0=0;const Un=new lt,bl=new Gt,Us=new X,wn=new pr,wr=new pr,Zt=new X;class Qt extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sp(e)?lp:ap)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new pt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,i){return Un.makeTranslation(e,t,i),this.applyMatrix4(Un),this}scale(e,t,i){return Un.makeScale(e,t,i),this.applyMatrix4(Un),this}lookAt(e){return bl.lookAt(e),bl.updateMatrix(),this.applyMatrix4(bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new At(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];wr.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(wn.min,wr.min),wn.expandByPoint(Zt),Zt.addVectors(wn.max,wr.max),wn.expandByPoint(Zt)):(wn.expandByPoint(wr.min),wn.expandByPoint(wr.max))}wn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Zt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Zt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Zt.fromBufferAttribute(a,c),l&&(Us.fromBufferAttribute(e,c),Zt.add(Us)),s=Math.max(s,i.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new X,l[F]=new X;const c=new X,u=new X,h=new X,f=new ot,p=new ot,_=new ot,y=new X,m=new X;function d(F,x,S){c.fromBufferAttribute(i,F),u.fromBufferAttribute(i,x),h.fromBufferAttribute(i,S),f.fromBufferAttribute(r,F),p.fromBufferAttribute(r,x),_.fromBufferAttribute(r,S),u.sub(c),h.sub(c),p.sub(f),_.sub(f);const N=1/(p.x*_.y-_.x*p.y);isFinite(N)&&(y.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(N),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(N),a[F].add(y),a[x].add(y),a[S].add(y),l[F].add(m),l[x].add(m),l[S].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let F=0,x=R.length;F<x;++F){const S=R[F],N=S.start,B=S.count;for(let H=N,te=N+B;H<te;H+=3)d(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const D=new X,E=new X,b=new X,L=new X;function I(F){b.fromBufferAttribute(s,F),L.copy(b);const x=a[F];D.copy(x),D.sub(b.multiplyScalar(b.dot(x))).normalize(),E.crossVectors(L,x);const N=E.dot(l[F])<0?-1:1;o.setXYZW(F,D.x,D.y,D.z,N)}for(let F=0,x=R.length;F<x;++F){const S=R[F],N=S.start,B=S.count;for(let H=N,te=N+B;H<te;H+=3)I(e.getX(H+0)),I(e.getX(H+1)),I(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new X,r=new X,o=new X,a=new X,l=new X,c=new X,u=new X,h=new X;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,_=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let d=0;d<u;d++)f[_++]=c[p++]}return new Nn(f,u,h)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bh=new lt,ss=new io,Ao=new mr,kh=new X,wo=new X,Ro=new X,Co=new X,El=new X,Po=new X,Vh=new X,Do=new X;class nn extends Gt{constructor(e=new Qt,t=new ma){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Po.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(El.fromBufferAttribute(h,e),o?Po.addScaledVector(El,u):Po.addScaledVector(El.sub(t),u))}t.add(Po)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ao.copy(i.boundingSphere),Ao.applyMatrix4(r),ss.copy(e.ray).recast(e.near),!(Ao.containsPoint(ss.origin)===!1&&(ss.intersectSphere(Ao,kh)===null||ss.origin.distanceToSquared(kh)>(e.far-e.near)**2))&&(Bh.copy(r).invert(),ss.copy(e.ray).applyMatrix4(Bh),!(i.boundingBox!==null&&ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ss)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){const m=f[_],d=o[m.materialIndex],R=Math.max(m.start,p.start),D=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let E=R,b=D;E<b;E+=3){const L=a.getX(E),I=a.getX(E+1),F=a.getX(E+2);s=Lo(this,d,e,i,c,u,h,L,I,F),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=_,d=y;m<d;m+=3){const R=a.getX(m),D=a.getX(m+1),E=a.getX(m+2);s=Lo(this,o,e,i,c,u,h,R,D,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){const m=f[_],d=o[m.materialIndex],R=Math.max(m.start,p.start),D=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=R,b=D;E<b;E+=3){const L=E,I=E+1,F=E+2;s=Lo(this,d,e,i,c,u,h,L,I,F),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=_,d=y;m<d;m+=3){const R=m,D=m+1,E=m+2;s=Lo(this,o,e,i,c,u,h,R,D,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function B0(n,e,t,i,s,r,o,a){let l;if(e.side===En?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Pi,a),l===null)return null;Do.copy(a),Do.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Do);return c<t.near||c>t.far?null:{distance:c,point:Do.clone(),object:n}}function Lo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,wo),n.getVertexPosition(l,Ro),n.getVertexPosition(c,Co);const u=B0(n,e,t,i,wo,Ro,Co,Vh);if(u){const h=new X;On.getBarycoord(Vh,wo,Ro,Co,h),s&&(u.uv=On.getInterpolatedAttribute(s,a,l,c,h,new ot)),r&&(u.uv1=On.getInterpolatedAttribute(r,a,l,c,h,new ot)),o&&(u.normal=On.getInterpolatedAttribute(o,a,l,c,h,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new X,materialIndex:0};On.getNormal(wo,Ro,Co,f.normal),u.face=f,u.barycoord=h}return u}class vs extends Qt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(u,3)),this.setAttribute("uv",new At(h,2));function _(y,m,d,R,D,E,b,L,I,F,x){const S=E/I,N=b/F,B=E/2,H=b/2,te=L/2,ee=I+1,V=F+1;let W=0,Y=0;const pe=new X;for(let ge=0;ge<V;ge++){const me=ge*N-H;for(let Le=0;Le<ee;Le++){const Ee=Le*S-B;pe[y]=Ee*R,pe[m]=me*D,pe[d]=te,c.push(pe.x,pe.y,pe.z),pe[y]=0,pe[m]=0,pe[d]=L>0?1:-1,u.push(pe.x,pe.y,pe.z),h.push(Le/I),h.push(1-ge/F),W+=1}}for(let ge=0;ge<F;ge++)for(let me=0;me<I;me++){const Le=f+me+ee*ge,Ee=f+me+ee*(ge+1),ke=f+(me+1)+ee*(ge+1),Ce=f+(me+1)+ee*ge;l.push(Le,Ee,Ce),l.push(Ee,ke,Ce),Y+=6}a.addGroup(p,Y,x),p+=Y,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function _n(n){const e={};for(let t=0;t<n.length;t++){const i=hr(n[t]);for(const s in i)e[s]=i[s]}return e}function k0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function cp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const V0={clone:hr,merge:_n};var z0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,H0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ui extends xs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=z0,this.fragmentShader=H0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hr(e.uniforms),this.uniformsGroups=k0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class up extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vi=new X,zh=new ot,Hh=new ot;class cn extends up{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ur*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ur*2*Math.atan(Math.tan(er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z)}getViewSize(e,t){return this.getViewBounds(e,zh,Hh),t.subVectors(Hh,zh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(er*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fs=-90,Os=1;class G0 extends Gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new cn(Fs,Os,e,t);s.layers=this.layers,this.add(s);const r=new cn(Fs,Os,e,t);r.layers=this.layers,this.add(r);const o=new cn(Fs,Os,e,t);o.layers=this.layers,this.add(o);const a=new cn(Fs,Os,e,t);a.layers=this.layers,this.add(a);const l=new cn(Fs,Os,e,t);l.layers=this.layers,this.add(l);const c=new cn(Fs,Os,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===si)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===pa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class hp extends fn{constructor(e=[],t=gs,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fp extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new hp(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vs(5,5,5),r=new ui({name:"CubemapFromEquirect",uniforms:hr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:Ti});r.uniforms.tEquirect.value=t;const o=new nn(s,r),a=t.minFilter;return t.minFilter===Ei&&(t.minFilter=Yt),new G0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class qs extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const W0={type:"move"};class Tl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,i),d=this._getHandJoint(c,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(W0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new qs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class dp extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Gh=new X,Wh=new Ot,Xh=new Ot,X0=new X,qh=new lt,No=new X,Al=new mr,jh=new lt,wl=new io;class q0 extends nn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=_h,this.bindMatrix=new lt,this.bindMatrixInverse=new lt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new pr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,No),this.boundingBox.expandByPoint(No)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new mr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,No),this.boundingSphere.expandByPoint(No)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Al.copy(this.boundingSphere),Al.applyMatrix4(s),e.ray.intersectsSphere(Al)!==!1&&(jh.copy(s).invert(),wl.copy(e.ray).applyMatrix4(jh),!(this.boundingBox!==null&&wl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,wl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ot,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===_h?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===q_?this.bindMatrixInverse.copy(this.bindMatrix).invert():nt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Wh.fromBufferAttribute(s.attributes.skinIndex,e),Xh.fromBufferAttribute(s.attributes.skinWeight,e),Gh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Xh.getComponent(r);if(o!==0){const a=Wh.getComponent(r);qh.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(X0.copy(Gh).applyMatrix4(qh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class pp extends Gt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Au extends fn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=sn,u=sn,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yh=new lt,j0=new lt;class wu{constructor(e=[],t=[]){this.uuid=Qi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){nt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new lt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new lt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:j0;Yh.multiplyMatrices(a,t[r]),Yh.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new wu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Au(t,e,e,Bn,qn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(nt("Skeleton: No bone found with UUID:",r),o=new pp),this.bones.push(o),this.boneInverses.push(new lt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}const Rl=new X,Y0=new X,K0=new pt;class Xi{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Rl.subVectors(i,t).cross(Y0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Rl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||K0.getNormalMatrix(e),s=this.coplanarPoint(Rl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new mr,$0=new ot(.5,.5),Io=new X;class Ru{constructor(e=new Xi,t=new Xi,i=new Xi,s=new Xi,r=new Xi,o=new Xi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=si,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],p=r[7],_=r[8],y=r[9],m=r[10],d=r[11],R=r[12],D=r[13],E=r[14],b=r[15];if(s[0].setComponents(c-o,p-u,d-_,b-R).normalize(),s[1].setComponents(c+o,p+u,d+_,b+R).normalize(),s[2].setComponents(c+a,p+h,d+y,b+D).normalize(),s[3].setComponents(c-a,p-h,d-y,b-D).normalize(),i)s[4].setComponents(l,f,m,E).normalize(),s[5].setComponents(c-l,p-f,d-m,b-E).normalize();else if(s[4].setComponents(c-l,p-f,d-m,b-E).normalize(),t===si)s[5].setComponents(c+l,p+f,d+m,b+E).normalize();else if(t===pa)s[5].setComponents(l,f,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(e){rs.center.set(0,0,0);const t=$0.distanceTo(e.center);return rs.radius=.7071067811865476+t,rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Io.x=s.normal.x>0?e.max.x:e.min.x,Io.y=s.normal.y>0?e.max.y:e.min.y,Io.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Io)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fr extends xs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ga=new X,_a=new X,Kh=new lt,Rr=new io,Uo=new mr,Cl=new X,$h=new X;class mp extends Gt{constructor(e=new Qt,t=new fr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)ga.fromBufferAttribute(t,s-1),_a.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=ga.distanceTo(_a);e.setAttribute("lineDistance",new At(i,1))}else nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Uo.copy(i.boundingSphere),Uo.applyMatrix4(s),Uo.radius+=r,e.ray.intersectsSphere(Uo)===!1)return;Kh.copy(s).invert(),Rr.copy(e.ray).applyMatrix4(Kh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let y=p,m=_-1;y<m;y+=c){const d=u.getX(y),R=u.getX(y+1),D=Fo(this,e,Rr,l,d,R,y);D&&t.push(D)}if(this.isLineLoop){const y=u.getX(_-1),m=u.getX(p),d=Fo(this,e,Rr,l,y,m,_-1);d&&t.push(d)}}else{const p=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let y=p,m=_-1;y<m;y+=c){const d=Fo(this,e,Rr,l,y,y+1,y);d&&t.push(d)}if(this.isLineLoop){const y=Fo(this,e,Rr,l,_-1,p,_-1);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Fo(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(ga.fromBufferAttribute(a,s),_a.fromBufferAttribute(a,r),t.distanceSqToSegment(ga,_a,Cl,$h)>i)return;Cl.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Cl);if(!(c<e.near||c>e.far))return{distance:c,point:$h.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Zh=new X,Jh=new X;class Na extends mp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Zh.fromBufferAttribute(t,s),Jh.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Zh.distanceTo(Jh);e.setAttribute("lineDistance",new At(i,1))}else nt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jr extends fn{constructor(e,t,i=ci,s,r,o,a=sn,l=sn,c,u=Li,h=1){if(u!==Li&&u!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Eu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Z0 extends Jr{constructor(e,t=ci,i=gs,s,r,o=sn,a=sn,l,c=Li){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class gp extends fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Cu extends Qt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],p=[];let _=0;const y=[],m=i/2;let d=0;R(),o===!1&&(e>0&&D(!0),t>0&&D(!1)),this.setIndex(u),this.setAttribute("position",new At(h,3)),this.setAttribute("normal",new At(f,3)),this.setAttribute("uv",new At(p,2));function R(){const E=new X,b=new X;let L=0;const I=(t-e)/i;for(let F=0;F<=r;F++){const x=[],S=F/r,N=S*(t-e)+e;for(let B=0;B<=s;B++){const H=B/s,te=H*l+a,ee=Math.sin(te),V=Math.cos(te);b.x=N*ee,b.y=-S*i+m,b.z=N*V,h.push(b.x,b.y,b.z),E.set(ee,I,V).normalize(),f.push(E.x,E.y,E.z),p.push(H,1-S),x.push(_++)}y.push(x)}for(let F=0;F<s;F++)for(let x=0;x<r;x++){const S=y[x][F],N=y[x+1][F],B=y[x+1][F+1],H=y[x][F+1];(e>0||x!==0)&&(u.push(S,N,H),L+=3),(t>0||x!==r-1)&&(u.push(N,B,H),L+=3)}c.addGroup(d,L,0),d+=L}function D(E){const b=_,L=new ot,I=new X;let F=0;const x=E===!0?e:t,S=E===!0?1:-1;for(let B=1;B<=s;B++)h.push(0,m*S,0),f.push(0,S,0),p.push(.5,.5),_++;const N=_;for(let B=0;B<=s;B++){const te=B/s*l+a,ee=Math.cos(te),V=Math.sin(te);I.x=x*V,I.y=m*S,I.z=x*ee,h.push(I.x,I.y,I.z),f.push(0,S,0),L.x=ee*.5+.5,L.y=V*.5*S+.5,p.push(L.x,L.y),_++}for(let B=0;B<s;B++){const H=b+B,te=N+B;E===!0?u.push(te,te+1,H):u.push(te+1,te,H),F+=3}c.addGroup(d,F,E===!0?1:2),d+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Oo=new X,Bo=new X,Pl=new X,ko=new On;class J0 extends Qt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(er*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},p=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:y,b:m,c:d}=ko;if(y.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),d.fromBufferAttribute(a,c[2]),ko.getNormal(Pl),h[0]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let R=0;R<3;R++){const D=(R+1)%3,E=h[R],b=h[D],L=ko[u[R]],I=ko[u[D]],F=`${E}_${b}`,x=`${b}_${E}`;x in f&&f[x]?(Pl.dot(f[x].normal)<=r&&(p.push(L.x,L.y,L.z),p.push(I.x,I.y,I.z)),f[x]=null):F in f||(f[F]={index0:c[R],index1:c[D],normal:Pl.clone()})}}for(const _ in f)if(f[_]){const{index0:y,index1:m}=f[_];Oo.fromBufferAttribute(a,y),Bo.fromBufferAttribute(a,m),p.push(Oo.x,Oo.y,Oo.z),p.push(Bo.x,Bo.y,Bo.z)}this.setAttribute("position",new At(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ia extends Qt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,p=[],_=[],y=[],m=[];for(let d=0;d<u;d++){const R=d*f-o;for(let D=0;D<c;D++){const E=D*h-r;_.push(E,-R,0),y.push(0,0,1),m.push(D/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let R=0;R<a;R++){const D=R+c*d,E=R+c*(d+1),b=R+1+c*(d+1),L=R+1+c*d;p.push(D,E,L),p.push(E,b,L)}this.setIndex(p),this.setAttribute("position",new At(_,3)),this.setAttribute("normal",new At(y,3)),this.setAttribute("uv",new At(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ia(e.width,e.height,e.widthSegments,e.heightSegments)}}class Pu extends Qt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new X,f=new X,p=[],_=[],y=[],m=[];for(let d=0;d<=i;d++){const R=[],D=d/i;let E=0;d===0&&o===0?E=.5/t:d===i&&l===Math.PI&&(E=-.5/t);for(let b=0;b<=t;b++){const L=b/t;h.x=-e*Math.cos(s+L*r)*Math.sin(o+D*a),h.y=e*Math.cos(o+D*a),h.z=e*Math.sin(s+L*r)*Math.sin(o+D*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),y.push(f.x,f.y,f.z),m.push(L+E,1-D),R.push(c++)}u.push(R)}for(let d=0;d<i;d++)for(let R=0;R<t;R++){const D=u[d][R+1],E=u[d][R],b=u[d+1][R],L=u[d+1][R+1];(d!==0||o>0)&&p.push(D,E,L),(d!==i-1||l<Math.PI)&&p.push(E,b,L)}this.setIndex(p),this.setAttribute("position",new At(_,3)),this.setAttribute("normal",new At(y,3)),this.setAttribute("uv",new At(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Q0 extends ui{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class nr extends xs{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ht(16777215),this.specular=new ht(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mu,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=Da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ex extends xs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mu,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=Da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tx extends xs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=K_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nx extends xs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Vo(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function ix(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Qh(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function _p(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push(...o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class Ua{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class sx extends Ua{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xh,endingEnd:xh}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case vh:r=e,a=2*t-i;break;case Mh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case vh:o=e,l=2*i-t;break;case Mh:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(i-t)/(s-t),y=_*_,m=y*_,d=-f*m+2*f*y-f*_,R=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*_+1,D=(-1-p)*m+(1.5+p)*y+.5*_,E=p*m-p*y;for(let b=0;b!==a;++b)r[b]=d*o[u+b]+R*o[c+b]+D*o[l+b]+E*o[h+b];return r}}class rx extends Ua{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class ox extends Ua{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class $n{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Vo(t,this.TimeBufferType),this.values=Vo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Vo(e.times,Array),values:Vo(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ox(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new rx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case fa:t=this.InterpolantFactoryMethodDiscrete;break;case zc:t=this.InterpolantFactoryMethodLinear;break;case sl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return nt("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fa;case this.InterpolantFactoryMethodLinear:return zc;case this.InterpolantFactoryMethodSmooth:return sl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(gt("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(gt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){gt("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){gt("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&i0(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){gt("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===sl,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*i,f=h-i,p=h+i;for(let _=0;_!==i;++_){const y=t[h+_];if(y!==t[f+_]||y!==t[p+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*i,f=o*i;for(let p=0;p!==i;++p)t[f+p]=t[h+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}$n.prototype.ValueTypeName="";$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=zc;class gr extends $n{constructor(e,t,i){super(e,t,i)}}gr.prototype.ValueTypeName="bool";gr.prototype.ValueBufferType=Array;gr.prototype.DefaultInterpolation=fa;gr.prototype.InterpolantFactoryMethodLinear=void 0;gr.prototype.InterpolantFactoryMethodSmooth=void 0;class xp extends $n{constructor(e,t,i,s){super(e,t,i,s)}}xp.prototype.ValueTypeName="color";class xa extends $n{constructor(e,t,i,s){super(e,t,i,s)}}xa.prototype.ValueTypeName="number";class ax extends Ua{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Kn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class so extends $n{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new ax(this.times,this.values,this.getValueSize(),e)}}so.prototype.ValueTypeName="quaternion";so.prototype.InterpolantFactoryMethodSmooth=void 0;class _r extends $n{constructor(e,t,i){super(e,t,i)}}_r.prototype.ValueTypeName="string";_r.prototype.ValueBufferType=Array;_r.prototype.DefaultInterpolation=fa;_r.prototype.InterpolantFactoryMethodLinear=void 0;_r.prototype.InterpolantFactoryMethodSmooth=void 0;class dr extends $n{constructor(e,t,i,s){super(e,t,i,s)}}dr.prototype.ValueTypeName="vector";class ef{constructor(e="",t=-1,i=[],s=Y_){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Qi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(cx(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=i.length;r!==o;++r)t.push($n.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=ix(l);l=Qh(l,1,u),c=Qh(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new xa(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(nt("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return gt("AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,p,_,y){if(p.length!==0){const m=[],d=[];_p(p,m,d,_),m.length!==0&&y.push(new h(f,m,d))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let y=0;y<f[_].morphTargets.length;y++)p[f[_].morphTargets[y]]=-1;for(const y in p){const m=[],d=[];for(let R=0;R!==f[_].morphTargets.length;++R){const D=f[_];m.push(D.time),d.push(D.morphTarget===y?1:0)}s.push(new xa(".morphTargetInfluence["+y+"]",m,d))}l=p.length*o}else{const p=".bones["+t[h].name+"]";i(dr,p+".position",f,"pos",s),i(so,p+".quaternion",f,"rot",s),i(dr,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function lx(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xa;case"vector":case"vector2":case"vector3":case"vector4":return dr;case"color":return xp;case"quaternion":return so;case"bool":case"boolean":return gr;case"string":return _r}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function cx(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=lx(n.type);if(n.times===void 0){const t=[],i=[];_p(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Hr={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class ux{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],_=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const vp=new ux;class $i{constructor(e){this.manager=e!==void 0?e:vp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}$i.DEFAULT_MATERIAL_NAME="__DEFAULT";const Mi={};class hx extends Error{constructor(e,t){super(e),this.response=t}}class Du extends $i{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Hr.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Mi[e]!==void 0){Mi[e].push({onLoad:t,onProgress:i,onError:s});return}Mi[e]=[],Mi[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&nt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Mi[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,_=p!==0;let y=0;const m=new ReadableStream({start(d){R();function R(){h.read().then(({done:D,value:E})=>{if(D)d.close();else{y+=E.byteLength;const b=new ProgressEvent("progress",{lengthComputable:_,loaded:y,total:p});for(let L=0,I=u.length;L<I;L++){const F=u[L];F.onProgress&&F.onProgress(b)}d.enqueue(E),R()}},D=>{d.error(D)})}}});return new Response(m)}else throw new hx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{Hr.add(`file:${e}`,c);const u=Mi[e];delete Mi[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Mi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Mi[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Bs=new WeakMap;class fx extends $i{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Hr.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=Bs.get(o);h===void 0&&(h=[],Bs.set(o,h)),h.push({onLoad:t,onError:s})}return o}const a=$r("img");function l(){u(),t&&t(this);const h=Bs.get(this)||[];for(let f=0;f<h.length;f++){const p=h[f];p.onLoad&&p.onLoad(this)}Bs.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),Hr.remove(`image:${e}`);const f=Bs.get(this)||[];for(let p=0;p<f.length;p++){const _=f[p];_.onError&&_.onError(h)}Bs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Hr.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class dx extends $i{constructor(e){super(e)}load(e,t,i,s){const r=this,o=new Au,a=new Du(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(u){if(s!==void 0)s(u);else{u(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Ln,o.wrapT=c.wrapT!==void 0?c.wrapT:Ln,o.magFilter=c.magFilter!==void 0?c.magFilter:Yt,o.minFilter=c.minFilter!==void 0?c.minFilter:Yt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Ei),c.mipmapCount===1&&(o.minFilter=Yt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},i,s),o}}class Mp extends $i{constructor(e){super(e)}load(e,t,i,s){const r=new fn,o=new fx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Fa extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Dl=new lt,tf=new X,nf=new X;class Lu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ru,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;tf.setFromMatrixPosition(e.matrixWorld),t.position.copy(tf),nf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nf),t.updateMatrixWorld(),Dl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Dl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class px extends Lu{constructor(){super(new cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=ur*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class mx extends Fa{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new px}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class gx extends Lu{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0}}class _x extends Fa{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new gx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Oa extends up{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class xx extends Lu{constructor(){super(new Oa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yp extends Fa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new xx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Sp extends Fa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class bp{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class vx extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const sf=new lt;class Mx{constructor(e,t,i=0,s=1/0){this.ray=new io(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Tu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):gt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return sf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sf),this}intersectObject(e,t=!0,i=[]){return Hc(e,this,i,t),i.sort(rf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Hc(e[s],this,i,t);return i.sort(rf),i}}function rf(n,e){return n.distance-e.distance}function Hc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Hc(r[o],e,t,!0)}}class of{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=_t(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(_t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class yx extends Na{constructor(e=10,t=10,i=4473924,s=8947848){i=new ht(i),s=new ht(s);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,p=0,_=-a;f<=t;f++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const y=f===r?i:s;y.toArray(c,p),p+=3,y.toArray(c,p),p+=3,y.toArray(c,p),p+=3,y.toArray(c,p),p+=3}const u=new Qt;u.setAttribute("position",new At(l,3)),u.setAttribute("color",new At(c,3));const h=new fr({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Sx extends Na{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new Qt;s.setAttribute("position",new At(t,3)),s.setAttribute("color",new At(i,3));const r=new fr({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,i){const s=new ht,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(i),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class bx extends _s{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){nt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function af(n,e,t,i){const s=Ex(i);switch(t){case tp:return n*e;case ip:return n*e/s.components*s.byteLength;case _u:return n*e/s.components*s.byteLength;case lr:return n*e*2/s.components*s.byteLength;case xu:return n*e*2/s.components*s.byteLength;case np:return n*e*3/s.components*s.byteLength;case Bn:return n*e*4/s.components*s.byteLength;case vu:return n*e*4/s.components*s.byteLength;case ea:case ta:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case na:case ia:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case uc:case fc:return Math.max(n,16)*Math.max(e,8)/4;case cc:case hc:return Math.max(n,8)*Math.max(e,8)/2;case dc:case pc:case gc:case _c:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case mc:case xc:case vc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Mc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Sc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case bc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case wc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Rc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Pc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Dc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Lc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Nc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ic:case Uc:case Fc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Oc:case Bc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case kc:case Vc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ex(n){switch(n){case Cn:case Zd:return{byteLength:1,components:1};case Yr:case Jd:case Di:return{byteLength:2,components:1};case mu:case gu:return{byteLength:2,components:4};case ci:case pu:case qn:return{byteLength:4,components:1};case Qd:case ep:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:du}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=du);function Ep(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Tx(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<h.length;p++){const _=h[f],y=h[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++f,h[f]=y)}h.length=f+1;for(let p=0,_=h.length;p<_;p++){const y=h[p];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Ax=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wx=`#ifdef USE_ALPHAHASH
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
#endif`,Rx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Px=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lx=`#ifdef USE_AOMAP
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
#endif`,Nx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ix=`#ifdef USE_BATCHING
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
#endif`,Ux=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ox=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kx=`#ifdef USE_IRIDESCENCE
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
#endif`,Vx=`#ifdef USE_BUMPMAP
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
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Kx=`#define PI 3.141592653589793
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
} // validated`,$x=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zx=`vec3 transformedNormal = objectNormal;
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
#endif`,Jx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ev=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nv="gl_FragColor = linearToOutputTexel( gl_FragColor );",iv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sv=`#ifdef USE_ENVMAP
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
#endif`,rv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ov=`#ifdef USE_ENVMAP
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
#endif`,av=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lv=`#ifdef USE_ENVMAP
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
#endif`,cv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dv=`#ifdef USE_GRADIENTMAP
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
}`,pv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_v=`uniform bool receiveShadow;
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
#endif`,xv=`#ifdef USE_ENVMAP
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
#endif`,vv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bv=`PhysicalMaterial material;
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
#endif`,Ev=`uniform sampler2D dfgLUT;
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
}`,Tv=`
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
#endif`,Av=`#if defined( RE_IndirectDiffuse )
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
#endif`,wv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Iv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Uv=`#if defined( USE_POINTS_UV )
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
#endif`,Fv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ov=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zv=`#ifdef USE_MORPHTARGETS
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
#endif`,Hv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yv=`#ifdef USE_NORMALMAP
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
#endif`,Kv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$v=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,uM=`float getShadowMask() {
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
}`,hM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fM=`#ifdef USE_SKINNING
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
#endif`,dM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pM=`#ifdef USE_SKINNING
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
#endif`,mM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_M=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vM=`#ifdef USE_TRANSMISSION
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
#endif`,MM=`#ifdef USE_TRANSMISSION
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
#endif`,yM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,EM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const TM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,AM=`uniform sampler2D t2D;
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
}`,wM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,CM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DM=`#include <common>
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
}`,LM=`#if DEPTH_PACKING == 3200
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
}`,NM=`#define DISTANCE
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
}`,IM=`#define DISTANCE
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
}`,UM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,FM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OM=`uniform float scale;
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
}`,BM=`uniform vec3 diffuse;
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
}`,kM=`#include <common>
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
}`,VM=`uniform vec3 diffuse;
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
}`,zM=`#define LAMBERT
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
}`,HM=`#define LAMBERT
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
}`,GM=`#define MATCAP
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
}`,WM=`#define MATCAP
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
}`,XM=`#define NORMAL
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
}`,qM=`#define NORMAL
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
}`,jM=`#define PHONG
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
}`,YM=`#define PHONG
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
}`,KM=`#define STANDARD
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
}`,$M=`#define STANDARD
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
}`,ZM=`#define TOON
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
}`,JM=`#define TOON
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
}`,QM=`uniform float size;
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
}`,ey=`uniform vec3 diffuse;
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
}`,ty=`#include <common>
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
}`,ny=`uniform vec3 color;
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
}`,iy=`uniform float rotation;
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
}`,sy=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:Ax,alphahash_pars_fragment:wx,alphamap_fragment:Rx,alphamap_pars_fragment:Cx,alphatest_fragment:Px,alphatest_pars_fragment:Dx,aomap_fragment:Lx,aomap_pars_fragment:Nx,batching_pars_vertex:Ix,batching_vertex:Ux,begin_vertex:Fx,beginnormal_vertex:Ox,bsdfs:Bx,iridescence_fragment:kx,bumpmap_pars_fragment:Vx,clipping_planes_fragment:zx,clipping_planes_pars_fragment:Hx,clipping_planes_pars_vertex:Gx,clipping_planes_vertex:Wx,color_fragment:Xx,color_pars_fragment:qx,color_pars_vertex:jx,color_vertex:Yx,common:Kx,cube_uv_reflection_fragment:$x,defaultnormal_vertex:Zx,displacementmap_pars_vertex:Jx,displacementmap_vertex:Qx,emissivemap_fragment:ev,emissivemap_pars_fragment:tv,colorspace_fragment:nv,colorspace_pars_fragment:iv,envmap_fragment:sv,envmap_common_pars_fragment:rv,envmap_pars_fragment:ov,envmap_pars_vertex:av,envmap_physical_pars_fragment:xv,envmap_vertex:lv,fog_vertex:cv,fog_pars_vertex:uv,fog_fragment:hv,fog_pars_fragment:fv,gradientmap_pars_fragment:dv,lightmap_pars_fragment:pv,lights_lambert_fragment:mv,lights_lambert_pars_fragment:gv,lights_pars_begin:_v,lights_toon_fragment:vv,lights_toon_pars_fragment:Mv,lights_phong_fragment:yv,lights_phong_pars_fragment:Sv,lights_physical_fragment:bv,lights_physical_pars_fragment:Ev,lights_fragment_begin:Tv,lights_fragment_maps:Av,lights_fragment_end:wv,logdepthbuf_fragment:Rv,logdepthbuf_pars_fragment:Cv,logdepthbuf_pars_vertex:Pv,logdepthbuf_vertex:Dv,map_fragment:Lv,map_pars_fragment:Nv,map_particle_fragment:Iv,map_particle_pars_fragment:Uv,metalnessmap_fragment:Fv,metalnessmap_pars_fragment:Ov,morphinstance_vertex:Bv,morphcolor_vertex:kv,morphnormal_vertex:Vv,morphtarget_pars_vertex:zv,morphtarget_vertex:Hv,normal_fragment_begin:Gv,normal_fragment_maps:Wv,normal_pars_fragment:Xv,normal_pars_vertex:qv,normal_vertex:jv,normalmap_pars_fragment:Yv,clearcoat_normal_fragment_begin:Kv,clearcoat_normal_fragment_maps:$v,clearcoat_pars_fragment:Zv,iridescence_pars_fragment:Jv,opaque_fragment:Qv,packing:eM,premultiplied_alpha_fragment:tM,project_vertex:nM,dithering_fragment:iM,dithering_pars_fragment:sM,roughnessmap_fragment:rM,roughnessmap_pars_fragment:oM,shadowmap_pars_fragment:aM,shadowmap_pars_vertex:lM,shadowmap_vertex:cM,shadowmask_pars_fragment:uM,skinbase_vertex:hM,skinning_pars_vertex:fM,skinning_vertex:dM,skinnormal_vertex:pM,specularmap_fragment:mM,specularmap_pars_fragment:gM,tonemapping_fragment:_M,tonemapping_pars_fragment:xM,transmission_fragment:vM,transmission_pars_fragment:MM,uv_pars_fragment:yM,uv_pars_vertex:SM,uv_vertex:bM,worldpos_vertex:EM,background_vert:TM,background_frag:AM,backgroundCube_vert:wM,backgroundCube_frag:RM,cube_vert:CM,cube_frag:PM,depth_vert:DM,depth_frag:LM,distance_vert:NM,distance_frag:IM,equirect_vert:UM,equirect_frag:FM,linedashed_vert:OM,linedashed_frag:BM,meshbasic_vert:kM,meshbasic_frag:VM,meshlambert_vert:zM,meshlambert_frag:HM,meshmatcap_vert:GM,meshmatcap_frag:WM,meshnormal_vert:XM,meshnormal_frag:qM,meshphong_vert:jM,meshphong_frag:YM,meshphysical_vert:KM,meshphysical_frag:$M,meshtoon_vert:ZM,meshtoon_frag:JM,points_vert:QM,points_frag:ey,shadow_vert:ty,shadow_frag:ny,sprite_vert:iy,sprite_frag:sy},Ue={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},ni={basic:{uniforms:_n([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:_n([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new ht(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:_n([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:_n([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:_n([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new ht(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:_n([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:_n([Ue.points,Ue.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:_n([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:_n([Ue.common,Ue.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:_n([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:_n([Ue.sprite,Ue.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:_n([Ue.common,Ue.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:_n([Ue.lights,Ue.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};ni.physical={uniforms:_n([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const zo={r:0,b:0,g:0},os=new In,ry=new lt;function oy(n,e,t,i,s,r,o){const a=new ht(0);let l=r===!0?0:1,c,u,h=null,f=0,p=null;function _(D){let E=D.isScene===!0?D.background:null;return E&&E.isTexture&&(E=(D.backgroundBlurriness>0?t:e).get(E)),E}function y(D){let E=!1;const b=_(D);b===null?d(a,l):b&&b.isColor&&(d(b,1),E=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(D,E){const b=_(E);b&&(b.isCubeTexture||b.mapping===La)?(u===void 0&&(u=new nn(new vs(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:hr(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,I,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),os.copy(E.backgroundRotation),os.x*=-1,os.y*=-1,os.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ry.makeRotationFromEuler(os)),u.material.toneMapped=xt.getTransfer(b.colorSpace)!==Lt,(h!==b||f!==b.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=b,f=b.version,p=n.toneMapping),u.layers.enableAll(),D.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new nn(new Ia(2,2),new ui({name:"BackgroundMaterial",uniforms:hr(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=xt.getTransfer(b.colorSpace)!==Lt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,p=n.toneMapping),c.layers.enableAll(),D.unshift(c,c.geometry,c.material,0,0,null))}function d(D,E){D.getRGB(zo,cp(n)),i.buffers.color.setClear(zo.r,zo.g,zo.b,E,o)}function R(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(D,E=1){a.set(D),l=E,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(D){l=D,d(a,l)},render:y,addToRenderList:m,dispose:R}}function ay(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(S,N,B,H,te){let ee=!1;const V=h(H,B,N);r!==V&&(r=V,c(r.object)),ee=p(S,H,B,te),ee&&_(S,H,B,te),te!==null&&e.update(te,n.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,E(S,N,B,H),te!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,N,B){const H=B.wireframe===!0;let te=i[S.id];te===void 0&&(te={},i[S.id]=te);let ee=te[N.id];ee===void 0&&(ee={},te[N.id]=ee);let V=ee[H];return V===void 0&&(V=f(l()),ee[H]=V),V}function f(S){const N=[],B=[],H=[];for(let te=0;te<t;te++)N[te]=0,B[te]=0,H[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:H,object:S,attributes:{},index:null}}function p(S,N,B,H){const te=r.attributes,ee=N.attributes;let V=0;const W=B.getAttributes();for(const Y in W)if(W[Y].location>=0){const ge=te[Y];let me=ee[Y];if(me===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(me=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(me=S.instanceColor)),ge===void 0||ge.attribute!==me||me&&ge.data!==me.data)return!0;V++}return r.attributesNum!==V||r.index!==H}function _(S,N,B,H){const te={},ee=N.attributes;let V=0;const W=B.getAttributes();for(const Y in W)if(W[Y].location>=0){let ge=ee[Y];ge===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(ge=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(ge=S.instanceColor));const me={};me.attribute=ge,ge&&ge.data&&(me.data=ge.data),te[Y]=me,V++}r.attributes=te,r.attributesNum=V,r.index=H}function y(){const S=r.newAttributes;for(let N=0,B=S.length;N<B;N++)S[N]=0}function m(S){d(S,0)}function d(S,N){const B=r.newAttributes,H=r.enabledAttributes,te=r.attributeDivisors;B[S]=1,H[S]===0&&(n.enableVertexAttribArray(S),H[S]=1),te[S]!==N&&(n.vertexAttribDivisor(S,N),te[S]=N)}function R(){const S=r.newAttributes,N=r.enabledAttributes;for(let B=0,H=N.length;B<H;B++)N[B]!==S[B]&&(n.disableVertexAttribArray(B),N[B]=0)}function D(S,N,B,H,te,ee,V){V===!0?n.vertexAttribIPointer(S,N,B,te,ee):n.vertexAttribPointer(S,N,B,H,te,ee)}function E(S,N,B,H){y();const te=H.attributes,ee=B.getAttributes(),V=N.defaultAttributeValues;for(const W in ee){const Y=ee[W];if(Y.location>=0){let pe=te[W];if(pe===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(pe=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(pe=S.instanceColor)),pe!==void 0){const ge=pe.normalized,me=pe.itemSize,Le=e.get(pe);if(Le===void 0)continue;const Ee=Le.buffer,ke=Le.type,Ce=Le.bytesPerElement,q=ke===n.INT||ke===n.UNSIGNED_INT||pe.gpuType===pu;if(pe.isInterleavedBufferAttribute){const Q=pe.data,Se=Q.stride,Qe=pe.offset;if(Q.isInstancedInterleavedBuffer){for(let Oe=0;Oe<Y.locationSize;Oe++)d(Y.location+Oe,Q.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Oe=0;Oe<Y.locationSize;Oe++)m(Y.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let Oe=0;Oe<Y.locationSize;Oe++)D(Y.location+Oe,me/Y.locationSize,ke,ge,Se*Ce,(Qe+me/Y.locationSize*Oe)*Ce,q)}else{if(pe.isInstancedBufferAttribute){for(let Q=0;Q<Y.locationSize;Q++)d(Y.location+Q,pe.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Q=0;Q<Y.locationSize;Q++)m(Y.location+Q);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let Q=0;Q<Y.locationSize;Q++)D(Y.location+Q,me/Y.locationSize,ke,ge,me*Ce,me/Y.locationSize*Q*Ce,q)}}else if(V!==void 0){const ge=V[W];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(Y.location,ge);break;case 3:n.vertexAttrib3fv(Y.location,ge);break;case 4:n.vertexAttrib4fv(Y.location,ge);break;default:n.vertexAttrib1fv(Y.location,ge)}}}}R()}function b(){F();for(const S in i){const N=i[S];for(const B in N){const H=N[B];for(const te in H)u(H[te].object),delete H[te];delete N[B]}delete i[S]}}function L(S){if(i[S.id]===void 0)return;const N=i[S.id];for(const B in N){const H=N[B];for(const te in H)u(H[te].object),delete H[te];delete N[B]}delete i[S.id]}function I(S){for(const N in i){const B=i[N];if(B[S.id]===void 0)continue;const H=B[S.id];for(const te in H)u(H[te].object),delete H[te];delete B[S.id]}}function F(){x(),o=!0,r!==s&&(r=s,c(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:x,dispose:b,releaseStatesOfGeometry:L,releaseStatesOfProgram:I,initAttributes:y,enableAttribute:m,disableUnusedAttributes:R}}function ly(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];t.update(p,i,1)}function l(c,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let _=0;for(let y=0;y<h;y++)_+=u[y]*f[y];t.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function cy(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==Bn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const F=I===Di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Cn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==qn&&!F)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(nt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),D=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),L=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:R,maxVaryings:D,maxFragmentUniforms:E,maxSamples:b,samples:L}}function uy(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Xi,a=new pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||s;return s=f,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const _=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const R=r?0:i,D=R*4;let E=d.clippingState||null;l.value=E,E=u(_,f,D,p);for(let b=0;b!==D;++b)E[b]=t[b];d.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,_){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const d=p+y*4,R=f.matrixWorldInverse;a.getNormalMatrix(R),(m===null||m.length<d)&&(m=new Float32Array(d));for(let D=0,E=p;D!==y;++D,E+=4)o.copy(h[D]).applyMatrix4(R,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function hy(n){let e=new WeakMap;function t(o,a){return a===oc?o.mapping=gs:a===ac&&(o.mapping=ar),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===oc||a===ac)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new fp(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const ji=4,lf=[.125,.215,.35,.446,.526,.582],hs=20,fy=256,Cr=new Oa,cf=new ht;let Ll=null,Nl=0,Il=0,Ul=!1;const dy=new X;class uf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=dy}=r;Ll=this._renderer.getRenderTarget(),Nl=this._renderer.getActiveCubeFace(),Il=this._renderer.getActiveMipmapLevel(),Ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=df(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ff(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ll,Nl,Il),this._renderer.xr.enabled=Ul,e.scissorTest=!1,ks(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gs||e.mapping===ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ll=this._renderer.getRenderTarget(),Nl=this._renderer.getActiveCubeFace(),Il=this._renderer.getActiveMipmapLevel(),Ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:Di,format:Bn,colorSpace:cr,depthBuffer:!1},s=hf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hf(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=py(r)),this._blurMaterial=gy(r,e,t),this._ggxMaterial=my(r,e,t)}return s}_compileMaterial(e){const t=new nn(new Qt,e);this._renderer.compile(t,Cr)}_sceneToCubeUV(e,t,i,s,r){const l=new cn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(cf),h.toneMapping=oi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new nn(new vs,new ma({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let d=!1;const R=e.background;R?R.isColor&&(m.color.copy(R),e.background=null,d=!0):(m.color.copy(cf),d=!0);for(let D=0;D<6;D++){const E=D%3;E===0?(l.up.set(0,c[D],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[D],r.y,r.z)):E===1?(l.up.set(0,0,c[D]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[D],r.z)):(l.up.set(0,c[D],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[D]));const b=this._cubeSize;ks(s,E*b,D>2?b:0,b,b),h.setRenderTarget(s),d&&h.render(y,l),h.render(e,l)}h.toneMapping=p,h.autoClear=f,e.background=R}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===gs||e.mapping===ar;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=df()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ff());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ks(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Cr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,p=h*f,{_lodMax:_}=this,y=this._sizeLods[i],m=3*y*(i>_-ji?i-_+ji:0),d=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-t,ks(r,m,d,3*y,2*y),s.setRenderTarget(r),s.render(a,Cr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,ks(e,m,d,3*y,2*y),s.setRenderTarget(e),s.render(a,Cr)}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&gt("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[s];h.material=c;const f=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*hs-1),y=r/_,m=isFinite(r)?1+Math.floor(u*y):hs;m>hs&&nt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hs}`);const d=[];let R=0;for(let I=0;I<hs;++I){const F=I/y,x=Math.exp(-F*F/2);d.push(x),I===0?R+=x:I<m&&(R+=2*x)}for(let I=0;I<d.length;I++)d[I]=d[I]/R;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:D}=this;f.dTheta.value=_,f.mipInt.value=D-i;const E=this._sizeLods[s],b=3*E*(s>D-ji?s-D+ji:0),L=4*(this._cubeSize-E);ks(t,b,L,3*E,2*E),l.setRenderTarget(t),l.render(h,Cr)}}function py(n){const e=[],t=[],i=[];let s=n;const r=n-ji+1+lf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-ji?l=lf[o-n+ji-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,y=3,m=2,d=1,R=new Float32Array(y*_*p),D=new Float32Array(m*_*p),E=new Float32Array(d*_*p);for(let L=0;L<p;L++){const I=L%3*2/3-1,F=L>2?0:-1,x=[I,F,0,I+2/3,F,0,I+2/3,F+1,0,I,F,0,I+2/3,F+1,0,I,F+1,0];R.set(x,y*_*L),D.set(f,m*_*L);const S=[L,L,L,L,L,L];E.set(S,d*_*L)}const b=new Qt;b.setAttribute("position",new Nn(R,y)),b.setAttribute("uv",new Nn(D,m)),b.setAttribute("faceIndex",new Nn(E,d)),i.push(new nn(b,null)),s>ji&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function hf(n,e,t){const i=new ai(n,e,t);return i.texture.mapping=La,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ks(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function my(n,e,t){return new ui({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:fy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ba(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function gy(n,e,t){const i=new Float32Array(hs),s=new X(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ba(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function ff(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ba(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function df(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ba(),fragmentShader:`

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
	`}function _y(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===oc||l===ac,u=l===gs||l===ar;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new uf(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new uf(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function xy(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Zr("WebGLRenderer: "+i+" extension not supported."),s}}}function vy(n,e,t,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,_=h.attributes.position;let y=0;if(p!==null){const R=p.array;y=p.version;for(let D=0,E=R.length;D<E;D+=3){const b=R[D+0],L=R[D+1],I=R[D+2];f.push(b,L,L,I,I,b)}}else if(_!==void 0){const R=_.array;y=_.version;for(let D=0,E=R.length/3-1;D<E;D+=3){const b=D+0,L=D+1,I=D+2;f.push(b,L,L,I,I,b)}}else return;const m=new(sp(f)?lp:ap)(f,1);m.version=y;const d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function My(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*o),t.update(p,i,1)}function c(f,p,_){_!==0&&(n.drawElementsInstanced(i,p,r,f*o,_),t.update(p,i,_))}function u(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];t.update(m,i,1)}function h(f,p,_,y){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],y[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,y,0,_);let d=0;for(let R=0;R<_;R++)d+=p[R]*y[R];t.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function yy(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:gt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Sy(n,e,t){const i=new WeakMap,s=new Ot;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let S=function(){F.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],R=a.morphAttributes.normal||[],D=a.morphAttributes.color||[];let E=0;_===!0&&(E=1),y===!0&&(E=2),m===!0&&(E=3);let b=a.attributes.position.count*E,L=1;b>e.maxTextureSize&&(L=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const I=new Float32Array(b*L*4*h),F=new rp(I,b,L,h);F.type=qn,F.needsUpdate=!0;const x=E*4;for(let N=0;N<h;N++){const B=d[N],H=R[N],te=D[N],ee=b*L*4*N;for(let V=0;V<B.count;V++){const W=V*x;_===!0&&(s.fromBufferAttribute(B,V),I[ee+W+0]=s.x,I[ee+W+1]=s.y,I[ee+W+2]=s.z,I[ee+W+3]=0),y===!0&&(s.fromBufferAttribute(H,V),I[ee+W+4]=s.x,I[ee+W+5]=s.y,I[ee+W+6]=s.z,I[ee+W+7]=0),m===!0&&(s.fromBufferAttribute(te,V),I[ee+W+8]=s.x,I[ee+W+9]=s.y,I[ee+W+10]=s.z,I[ee+W+11]=te.itemSize===4?s.w:1)}}f={count:h,texture:F,size:new ot(b,L)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const y=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",y),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function by(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Ey={[Gd]:"LINEAR_TONE_MAPPING",[Wd]:"REINHARD_TONE_MAPPING",[Xd]:"CINEON_TONE_MAPPING",[qd]:"ACES_FILMIC_TONE_MAPPING",[Yd]:"AGX_TONE_MAPPING",[Kd]:"NEUTRAL_TONE_MAPPING",[jd]:"CUSTOM_TONE_MAPPING"};function Ty(n,e,t,i,s){const r=new ai(e,t,{type:n,depthBuffer:i,stencilBuffer:s}),o=new ai(e,t,{type:Di,depthBuffer:!1,stencilBuffer:!1}),a=new Qt;a.setAttribute("position",new At([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new At([0,2,0,0,2,0],2));const l=new Q0({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new nn(a,l),u=new Oa(-1,1,1,-1,0,1);let h=null,f=null,p=!1,_,y=null,m=[],d=!1;this.setSize=function(R,D){r.setSize(R,D),o.setSize(R,D);for(let E=0;E<m.length;E++){const b=m[E];b.setSize&&b.setSize(R,D)}},this.setEffects=function(R){m=R,d=m.length>0&&m[0].isRenderPass===!0;const D=r.width,E=r.height;for(let b=0;b<m.length;b++){const L=m[b];L.setSize&&L.setSize(D,E)}},this.begin=function(R,D){if(p||R.toneMapping===oi&&m.length===0)return!1;if(y=D,D!==null){const E=D.width,b=D.height;(r.width!==E||r.height!==b)&&this.setSize(E,b)}return d===!1&&R.setRenderTarget(r),_=R.toneMapping,R.toneMapping=oi,!0},this.hasRenderPass=function(){return d},this.end=function(R,D){R.toneMapping=_,p=!0;let E=r,b=o;for(let L=0;L<m.length;L++){const I=m[L];if(I.enabled!==!1&&(I.render(R,b,E,D),I.needsSwap!==!1)){const F=E;E=b,b=F}}if(h!==R.outputColorSpace||f!==R.toneMapping){h=R.outputColorSpace,f=R.toneMapping,l.defines={},xt.getTransfer(h)===Lt&&(l.defines.SRGB_TRANSFER="");const L=Ey[f];L&&(l.defines[L]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,R.setRenderTarget(y),R.render(c,u),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Tp=new fn,Gc=new Jr(1,1),Ap=new rp,wp=new w0,Rp=new hp,pf=[],mf=[],gf=new Float32Array(16),_f=new Float32Array(9),xf=new Float32Array(4);function xr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=pf[s];if(r===void 0&&(r=new Float32Array(s),pf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function $t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ka(n,e){let t=mf[e];t===void 0&&(t=new Int32Array(e),mf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ay(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function wy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2fv(this.addr,e),$t(t,e)}}function Ry(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;n.uniform3fv(this.addr,e),$t(t,e)}}function Cy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4fv(this.addr,e),$t(t,e)}}function Py(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Kt(t,i))return;xf.set(i),n.uniformMatrix2fv(this.addr,!1,xf),$t(t,i)}}function Dy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Kt(t,i))return;_f.set(i),n.uniformMatrix3fv(this.addr,!1,_f),$t(t,i)}}function Ly(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Kt(t,i))return;gf.set(i),n.uniformMatrix4fv(this.addr,!1,gf),$t(t,i)}}function Ny(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Iy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2iv(this.addr,e),$t(t,e)}}function Uy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;n.uniform3iv(this.addr,e),$t(t,e)}}function Fy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4iv(this.addr,e),$t(t,e)}}function Oy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function By(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2uiv(this.addr,e),$t(t,e)}}function ky(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;n.uniform3uiv(this.addr,e),$t(t,e)}}function Vy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4uiv(this.addr,e),$t(t,e)}}function zy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Gc.compareFunction=t.isReversedDepthBuffer()?Su:yu,r=Gc):r=Tp,t.setTexture2D(e||r,s)}function Hy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||wp,s)}function Gy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Rp,s)}function Wy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Ap,s)}function Xy(n){switch(n){case 5126:return Ay;case 35664:return wy;case 35665:return Ry;case 35666:return Cy;case 35674:return Py;case 35675:return Dy;case 35676:return Ly;case 5124:case 35670:return Ny;case 35667:case 35671:return Iy;case 35668:case 35672:return Uy;case 35669:case 35673:return Fy;case 5125:return Oy;case 36294:return By;case 36295:return ky;case 36296:return Vy;case 35678:case 36198:case 36298:case 36306:case 35682:return zy;case 35679:case 36299:case 36307:return Hy;case 35680:case 36300:case 36308:case 36293:return Gy;case 36289:case 36303:case 36311:case 36292:return Wy}}function qy(n,e){n.uniform1fv(this.addr,e)}function jy(n,e){const t=xr(e,this.size,2);n.uniform2fv(this.addr,t)}function Yy(n,e){const t=xr(e,this.size,3);n.uniform3fv(this.addr,t)}function Ky(n,e){const t=xr(e,this.size,4);n.uniform4fv(this.addr,t)}function $y(n,e){const t=xr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Zy(n,e){const t=xr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Jy(n,e){const t=xr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Qy(n,e){n.uniform1iv(this.addr,e)}function eS(n,e){n.uniform2iv(this.addr,e)}function tS(n,e){n.uniform3iv(this.addr,e)}function nS(n,e){n.uniform4iv(this.addr,e)}function iS(n,e){n.uniform1uiv(this.addr,e)}function sS(n,e){n.uniform2uiv(this.addr,e)}function rS(n,e){n.uniform3uiv(this.addr,e)}function oS(n,e){n.uniform4uiv(this.addr,e)}function aS(n,e,t){const i=this.cache,s=e.length,r=ka(t,s);Kt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Gc:o=Tp;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function lS(n,e,t){const i=this.cache,s=e.length,r=ka(t,s);Kt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||wp,r[o])}function cS(n,e,t){const i=this.cache,s=e.length,r=ka(t,s);Kt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Rp,r[o])}function uS(n,e,t){const i=this.cache,s=e.length,r=ka(t,s);Kt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Ap,r[o])}function hS(n){switch(n){case 5126:return qy;case 35664:return jy;case 35665:return Yy;case 35666:return Ky;case 35674:return $y;case 35675:return Zy;case 35676:return Jy;case 5124:case 35670:return Qy;case 35667:case 35671:return eS;case 35668:case 35672:return tS;case 35669:case 35673:return nS;case 5125:return iS;case 36294:return sS;case 36295:return rS;case 36296:return oS;case 35678:case 36198:case 36298:case 36306:case 35682:return aS;case 35679:case 36299:case 36307:return lS;case 35680:case 36300:case 36308:case 36293:return cS;case 36289:case 36303:case 36311:case 36292:return uS}}class fS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Xy(t.type)}}class dS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hS(t.type)}}class pS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Fl=/(\w+)(\])?(\[|\.)?/g;function vf(n,e){n.seq.push(e),n.map[e.id]=e}function mS(n,e,t){const i=n.name,s=i.length;for(Fl.lastIndex=0;;){const r=Fl.exec(i),o=Fl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){vf(t,c===void 0?new fS(a,n,e):new dS(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new pS(a),vf(t,h)),t=h}}}class sa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);mS(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Mf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const gS=37297;let _S=0;function xS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const yf=new pt;function vS(n){xt._getMatrix(yf,xt.workingColorSpace,n);const e=`mat3( ${yf.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(n)){case da:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Sf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+xS(n.getShaderSource(e),a)}else return r}function MS(n,e){const t=vS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const yS={[Gd]:"Linear",[Wd]:"Reinhard",[Xd]:"Cineon",[qd]:"ACESFilmic",[Yd]:"AgX",[Kd]:"Neutral",[jd]:"Custom"};function SS(n,e){const t=yS[e];return t===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ho=new X;function bS(){xt.getLuminanceCoefficients(Ho);const n=Ho.x.toFixed(4),e=Ho.y.toFixed(4),t=Ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ES(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nr).join(`
`)}function TS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function AS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Nr(n){return n!==""}function bf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ef(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wc(n){return n.replace(wS,CS)}const RS=new Map;function CS(n,e){let t=mt[e];if(t===void 0){const i=RS.get(e);if(i!==void 0)t=mt[i],nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wc(t)}const PS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tf(n){return n.replace(PS,DS)}function DS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Af(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const LS={[Qo]:"SHADOWMAP_TYPE_PCF",[Lr]:"SHADOWMAP_TYPE_VSM"};function NS(n){return LS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const IS={[gs]:"ENVMAP_TYPE_CUBE",[ar]:"ENVMAP_TYPE_CUBE",[La]:"ENVMAP_TYPE_CUBE_UV"};function US(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":IS[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const FS={[ar]:"ENVMAP_MODE_REFRACTION"};function OS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":FS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const BS={[Da]:"ENVMAP_BLENDING_MULTIPLY",[W_]:"ENVMAP_BLENDING_MIX",[X_]:"ENVMAP_BLENDING_ADD"};function kS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":BS[n.combine]||"ENVMAP_BLENDING_NONE"}function VS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function zS(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=NS(t),c=US(t),u=OS(t),h=kS(t),f=VS(t),p=ES(t),_=TS(r),y=s.createProgram();let m,d,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Nr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Nr).join(`
`),d.length>0&&(d+=`
`)):(m=[Af(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nr).join(`
`),d=[Af(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?mt.tonemapping_pars_fragment:"",t.toneMapping!==oi?SS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,MS("linearToOutputTexel",t.outputColorSpace),bS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Nr).join(`
`)),o=Wc(o),o=bf(o,t),o=Ef(o,t),a=Wc(a),a=bf(a,t),a=Ef(a,t),o=Tf(o),a=Tf(a),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const D=R+m+o,E=R+d+a,b=Mf(s,s.VERTEX_SHADER,D),L=Mf(s,s.FRAGMENT_SHADER,E);s.attachShader(y,b),s.attachShader(y,L),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function I(N){if(n.debug.checkShaderErrors){const B=s.getProgramInfoLog(y)||"",H=s.getShaderInfoLog(b)||"",te=s.getShaderInfoLog(L)||"",ee=B.trim(),V=H.trim(),W=te.trim();let Y=!0,pe=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,b,L);else{const ge=Sf(s,b,"vertex"),me=Sf(s,L,"fragment");gt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+ee+`
`+ge+`
`+me)}else ee!==""?nt("WebGLProgram: Program Info Log:",ee):(V===""||W==="")&&(pe=!1);pe&&(N.diagnostics={runnable:Y,programLog:ee,vertexShader:{log:V,prefix:m},fragmentShader:{log:W,prefix:d}})}s.deleteShader(b),s.deleteShader(L),F=new sa(s,y),x=AS(s,y)}let F;this.getUniforms=function(){return F===void 0&&I(this),F};let x;this.getAttributes=function(){return x===void 0&&I(this),x};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(y,gS)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_S++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=L,this}let HS=0;class GS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new WS(e),t.set(e,i)),i}}class WS{constructor(e){this.id=HS++,this.code=e,this.usedTimes=0}}function XS(n,e,t,i,s,r,o){const a=new Tu,l=new GS,c=new Set,u=[],h=new Map,f=s.logarithmicDepthBuffer;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,S,N,B,H){const te=B.fog,ee=H.geometry,V=x.isMeshStandardMaterial?B.environment:null,W=(x.isMeshStandardMaterial?t:e).get(x.envMap||V),Y=W&&W.mapping===La?W.image.height:null,pe=_[x.type];x.precision!==null&&(p=s.getMaxPrecision(x.precision),p!==x.precision&&nt("WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const ge=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,me=ge!==void 0?ge.length:0;let Le=0;ee.morphAttributes.position!==void 0&&(Le=1),ee.morphAttributes.normal!==void 0&&(Le=2),ee.morphAttributes.color!==void 0&&(Le=3);let Ee,ke,Ce,q;if(pe){const ft=ni[pe];Ee=ft.vertexShader,ke=ft.fragmentShader}else Ee=x.vertexShader,ke=x.fragmentShader,l.update(x),Ce=l.getVertexShaderID(x),q=l.getFragmentShaderID(x);const Q=n.getRenderTarget(),Se=n.state.buffers.depth.getReversed(),Qe=H.isInstancedMesh===!0,Oe=H.isBatchedMesh===!0,vt=!!x.map,O=!!x.matcap,z=!!W,Z=!!x.aoMap,le=!!x.lightMap,se=!!x.bumpMap,ce=!!x.normalMap,U=!!x.displacementMap,_e=!!x.emissiveMap,he=!!x.metalnessMap,ae=!!x.roughnessMap,fe=x.anisotropy>0,A=x.clearcoat>0,g=x.dispersion>0,k=x.iridescence>0,J=x.sheen>0,oe=x.transmission>0,$=fe&&!!x.anisotropyMap,Ie=A&&!!x.clearcoatMap,Me=A&&!!x.clearcoatNormalMap,Be=A&&!!x.clearcoatRoughnessMap,Ke=k&&!!x.iridescenceMap,xe=k&&!!x.iridescenceThicknessMap,Ae=J&&!!x.sheenColorMap,Pe=J&&!!x.sheenRoughnessMap,Ve=!!x.specularMap,Te=!!x.specularColorMap,at=!!x.specularIntensityMap,G=oe&&!!x.transmissionMap,Fe=oe&&!!x.thicknessMap,be=!!x.gradientMap,Ge=!!x.alphaMap,ye=x.alphaTest>0,de=!!x.alphaHash,we=!!x.extensions;let rt=oi;x.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(rt=n.toneMapping);const Nt={shaderID:pe,shaderType:x.type,shaderName:x.name,vertexShader:Ee,fragmentShader:ke,defines:x.defines,customVertexShaderID:Ce,customFragmentShaderID:q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:Oe,batchingColor:Oe&&H._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&H.instanceColor!==null,instancingMorph:Qe&&H.morphTexture!==null,outputColorSpace:Q===null?n.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:cr,alphaToCoverage:!!x.alphaToCoverage,map:vt,matcap:O,envMap:z,envMapMode:z&&W.mapping,envMapCubeUVHeight:Y,aoMap:Z,lightMap:le,bumpMap:se,normalMap:ce,displacementMap:U,emissiveMap:_e,normalMapObjectSpace:ce&&x.normalMapType===$_,normalMapTangentSpace:ce&&x.normalMapType===Mu,metalnessMap:he,roughnessMap:ae,anisotropy:fe,anisotropyMap:$,clearcoat:A,clearcoatMap:Ie,clearcoatNormalMap:Me,clearcoatRoughnessMap:Be,dispersion:g,iridescence:k,iridescenceMap:Ke,iridescenceThicknessMap:xe,sheen:J,sheenColorMap:Ae,sheenRoughnessMap:Pe,specularMap:Ve,specularColorMap:Te,specularIntensityMap:at,transmission:oe,transmissionMap:G,thicknessMap:Fe,gradientMap:be,opaque:x.transparent===!1&&x.blending===Qs&&x.alphaToCoverage===!1,alphaMap:Ge,alphaTest:ye,alphaHash:de,combine:x.combine,mapUv:vt&&y(x.map.channel),aoMapUv:Z&&y(x.aoMap.channel),lightMapUv:le&&y(x.lightMap.channel),bumpMapUv:se&&y(x.bumpMap.channel),normalMapUv:ce&&y(x.normalMap.channel),displacementMapUv:U&&y(x.displacementMap.channel),emissiveMapUv:_e&&y(x.emissiveMap.channel),metalnessMapUv:he&&y(x.metalnessMap.channel),roughnessMapUv:ae&&y(x.roughnessMap.channel),anisotropyMapUv:$&&y(x.anisotropyMap.channel),clearcoatMapUv:Ie&&y(x.clearcoatMap.channel),clearcoatNormalMapUv:Me&&y(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&y(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ke&&y(x.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&y(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&y(x.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&y(x.sheenRoughnessMap.channel),specularMapUv:Ve&&y(x.specularMap.channel),specularColorMapUv:Te&&y(x.specularColorMap.channel),specularIntensityMapUv:at&&y(x.specularIntensityMap.channel),transmissionMapUv:G&&y(x.transmissionMap.channel),thicknessMapUv:Fe&&y(x.thicknessMap.channel),alphaMapUv:Ge&&y(x.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(ce||fe),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!ee.attributes.uv&&(vt||Ge),fog:!!te,useFog:x.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Se,skinning:H.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Le,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:rt,decodeVideoTexture:vt&&x.map.isVideoTexture===!0&&xt.getTransfer(x.map.colorSpace)===Lt,decodeVideoTextureEmissive:_e&&x.emissiveMap.isVideoTexture===!0&&xt.getTransfer(x.emissiveMap.colorSpace)===Lt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ii,flipSided:x.side===En,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:we&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&x.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Nt.vertexUv1s=c.has(1),Nt.vertexUv2s=c.has(2),Nt.vertexUv3s=c.has(3),c.clear(),Nt}function d(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const N in x.defines)S.push(N),S.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(R(S,x),D(S,x),S.push(n.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function R(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function D(x,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),x.push(a.mask)}function E(x){const S=_[x.type];let N;if(S){const B=ni[S];N=V0.clone(B.uniforms)}else N=x.uniforms;return N}function b(x,S){let N=h.get(S);return N!==void 0?++N.usedTimes:(N=new zS(n,S,x,r),u.push(N),h.set(S,N)),N}function L(x){if(--x.usedTimes===0){const S=u.indexOf(x);u[S]=u[u.length-1],u.pop(),h.delete(x.cacheKey),x.destroy()}}function I(x){l.remove(x)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:E,acquireProgram:b,releaseProgram:L,releaseShaderCache:I,programs:u,dispose:F}}function qS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function jS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function wf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Rf(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,p,_,y,m){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:_,renderOrder:h.renderOrder,z:y,group:m},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=y,d.group=m),e++,d}function a(h,f,p,_,y,m){const d=o(h,f,p,_,y,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(h,f,p,_,y,m){const d=o(h,f,p,_,y,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||jS),i.length>1&&i.sort(f||wf),s.length>1&&s.sort(f||wf)}function u(){for(let h=e,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function YS(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Rf,n.set(i,[o])):s>=r.length?(o=new Rf,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function KS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new ht};break;case"SpotLight":t={position:new X,direction:new X,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function $S(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ZS=0;function JS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function QS(n){const e=new KS,t=$S(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);const s=new X,r=new lt,o=new lt;function a(c){let u=0,h=0,f=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let p=0,_=0,y=0,m=0,d=0,R=0,D=0,E=0,b=0,L=0,I=0;c.sort(JS);for(let x=0,S=c.length;x<S;x++){const N=c[x],B=N.color,H=N.intensity,te=N.distance;let ee=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===lr?ee=N.shadow.map.texture:ee=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=B.r*H,h+=B.g*H,f+=B.b*H;else if(N.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(N.sh.coefficients[V],H);I++}else if(N.isDirectionalLight){const V=e.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const W=N.shadow,Y=t.get(N);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,i.directionalShadow[p]=Y,i.directionalShadowMap[p]=ee,i.directionalShadowMatrix[p]=N.shadow.matrix,R++}i.directional[p]=V,p++}else if(N.isSpotLight){const V=e.get(N);V.position.setFromMatrixPosition(N.matrixWorld),V.color.copy(B).multiplyScalar(H),V.distance=te,V.coneCos=Math.cos(N.angle),V.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),V.decay=N.decay,i.spot[y]=V;const W=N.shadow;if(N.map&&(i.spotLightMap[b]=N.map,b++,W.updateMatrices(N),N.castShadow&&L++),i.spotLightMatrix[y]=W.matrix,N.castShadow){const Y=t.get(N);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,i.spotShadow[y]=Y,i.spotShadowMap[y]=ee,E++}y++}else if(N.isRectAreaLight){const V=e.get(N);V.color.copy(B).multiplyScalar(H),V.halfWidth.set(N.width*.5,0,0),V.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=V,m++}else if(N.isPointLight){const V=e.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),V.distance=N.distance,V.decay=N.decay,N.castShadow){const W=N.shadow,Y=t.get(N);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,Y.shadowCameraNear=W.camera.near,Y.shadowCameraFar=W.camera.far,i.pointShadow[_]=Y,i.pointShadowMap[_]=ee,i.pointShadowMatrix[_]=N.shadow.matrix,D++}i.point[_]=V,_++}else if(N.isHemisphereLight){const V=e.get(N);V.skyColor.copy(N.color).multiplyScalar(H),V.groundColor.copy(N.groundColor).multiplyScalar(H),i.hemi[d]=V,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ue.LTC_FLOAT_1,i.rectAreaLTC2=Ue.LTC_FLOAT_2):(i.rectAreaLTC1=Ue.LTC_HALF_1,i.rectAreaLTC2=Ue.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const F=i.hash;(F.directionalLength!==p||F.pointLength!==_||F.spotLength!==y||F.rectAreaLength!==m||F.hemiLength!==d||F.numDirectionalShadows!==R||F.numPointShadows!==D||F.numSpotShadows!==E||F.numSpotMaps!==b||F.numLightProbes!==I)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=D,i.pointShadowMap.length=D,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=D,i.spotLightMatrix.length=E+b-L,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=I,F.directionalLength=p,F.pointLength=_,F.spotLength=y,F.rectAreaLength=m,F.hemiLength=d,F.numDirectionalShadows=R,F.numPointShadows=D,F.numSpotShadows=E,F.numSpotMaps=b,F.numLightProbes=I,i.version=ZS++)}function l(c,u){let h=0,f=0,p=0,_=0,y=0;const m=u.matrixWorldInverse;for(let d=0,R=c.length;d<R;d++){const D=c[d];if(D.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),h++}else if(D.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(D.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),p++}else if(D.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(D.matrixWorld),E.position.applyMatrix4(m),o.identity(),r.copy(D.matrixWorld),r.premultiply(m),o.extractRotation(r),E.halfWidth.set(D.width*.5,0,0),E.halfHeight.set(0,D.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(D.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(D.matrixWorld),E.position.applyMatrix4(m),f++}else if(D.isHemisphereLight){const E=i.hemi[y];E.direction.setFromMatrixPosition(D.matrixWorld),E.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function Cf(n){const e=new QS(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function eb(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Cf(n),e.set(s,[a])):r>=o.length?(a=new Cf(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const tb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nb=`uniform sampler2D shadow_pass;
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
}`,ib=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],sb=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Pf=new lt,Pr=new X,Ol=new X;function rb(n,e,t){let i=new Ru;const s=new ot,r=new ot,o=new Ot,a=new tx,l=new nx,c={},u=t.maxTextureSize,h={[Pi]:En,[En]:Pi,[ii]:ii},f=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:tb,fragmentShader:nb}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Qt;_.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new nn(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qo;let d=this.type;this.render=function(L,I,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;L.type===T_&&(nt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),L.type=Qo);const x=n.getRenderTarget(),S=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Ti),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const H=d!==this.type;H&&I.traverse(function(te){te.material&&(Array.isArray(te.material)?te.material.forEach(ee=>ee.needsUpdate=!0):te.material.needsUpdate=!0)});for(let te=0,ee=L.length;te<ee;te++){const V=L[te],W=V.shadow;if(W===void 0){nt("WebGLShadowMap:",V,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const Y=W.getFrameExtents();if(s.multiply(Y),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,W.mapSize.y=r.y)),W.map===null||H===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Lr){if(V.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new ai(s.x,s.y,{format:lr,type:Di,minFilter:Yt,magFilter:Yt,generateMipmaps:!1}),W.map.texture.name=V.name+".shadowMap",W.map.depthTexture=new Jr(s.x,s.y,qn),W.map.depthTexture.name=V.name+".shadowMapDepth",W.map.depthTexture.format=Li,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=sn,W.map.depthTexture.magFilter=sn}else{V.isPointLight?(W.map=new fp(s.x),W.map.depthTexture=new Z0(s.x,ci)):(W.map=new ai(s.x,s.y),W.map.depthTexture=new Jr(s.x,s.y,ci)),W.map.depthTexture.name=V.name+".shadowMap",W.map.depthTexture.format=Li;const ge=n.state.buffers.depth.getReversed();this.type===Qo?(W.map.depthTexture.compareFunction=ge?Su:yu,W.map.depthTexture.minFilter=Yt,W.map.depthTexture.magFilter=Yt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=sn,W.map.depthTexture.magFilter=sn)}W.camera.updateProjectionMatrix()}const pe=W.map.isWebGLCubeRenderTarget?6:1;for(let ge=0;ge<pe;ge++){if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,ge),n.clear();else{ge===0&&(n.setRenderTarget(W.map),n.clear());const me=W.getViewport(ge);o.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),B.viewport(o)}if(V.isPointLight){const me=W.camera,Le=W.matrix,Ee=V.distance||me.far;Ee!==me.far&&(me.far=Ee,me.updateProjectionMatrix()),Pr.setFromMatrixPosition(V.matrixWorld),me.position.copy(Pr),Ol.copy(me.position),Ol.add(ib[ge]),me.up.copy(sb[ge]),me.lookAt(Ol),me.updateMatrixWorld(),Le.makeTranslation(-Pr.x,-Pr.y,-Pr.z),Pf.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Pf,me.coordinateSystem,me.reversedDepth)}else W.updateMatrices(V);i=W.getFrustum(),E(I,F,W.camera,V,this.type)}W.isPointLightShadow!==!0&&this.type===Lr&&R(W,F),W.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(x,S,N)};function R(L,I){const F=e.update(y);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new ai(s.x,s.y,{format:lr,type:Di})),f.uniforms.shadow_pass.value=L.map.depthTexture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(I,null,F,f,y,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(I,null,F,p,y,null)}function D(L,I,F,x){let S=null;const N=F.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(N!==void 0)S=N;else if(S=F.isPointLight===!0?l:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const B=S.uuid,H=I.uuid;let te=c[B];te===void 0&&(te={},c[B]=te);let ee=te[H];ee===void 0&&(ee=S.clone(),te[H]=ee,I.addEventListener("dispose",b)),S=ee}if(S.visible=I.visible,S.wireframe=I.wireframe,x===Lr?S.side=I.shadowSide!==null?I.shadowSide:I.side:S.side=I.shadowSide!==null?I.shadowSide:h[I.side],S.alphaMap=I.alphaMap,S.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,S.map=I.map,S.clipShadows=I.clipShadows,S.clippingPlanes=I.clippingPlanes,S.clipIntersection=I.clipIntersection,S.displacementMap=I.displacementMap,S.displacementScale=I.displacementScale,S.displacementBias=I.displacementBias,S.wireframeLinewidth=I.wireframeLinewidth,S.linewidth=I.linewidth,F.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=n.properties.get(S);B.light=F}return S}function E(L,I,F,x,S){if(L.visible===!1)return;if(L.layers.test(I.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&S===Lr)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,L.matrixWorld);const H=e.update(L),te=L.material;if(Array.isArray(te)){const ee=H.groups;for(let V=0,W=ee.length;V<W;V++){const Y=ee[V],pe=te[Y.materialIndex];if(pe&&pe.visible){const ge=D(L,pe,x,S);L.onBeforeShadow(n,L,I,F,H,ge,Y),n.renderBufferDirect(F,null,H,ge,L,Y),L.onAfterShadow(n,L,I,F,H,ge,Y)}}}else if(te.visible){const ee=D(L,te,x,S);L.onBeforeShadow(n,L,I,F,H,ee,null),n.renderBufferDirect(F,null,H,ee,L,null),L.onAfterShadow(n,L,I,F,H,ee,null)}}const B=L.children;for(let H=0,te=B.length;H<te;H++)E(B[H],I,F,x,S)}function b(L){L.target.removeEventListener("dispose",b);for(const F in c){const x=c[F],S=L.target.uuid;S in x&&(x[S].dispose(),delete x[S])}}}const ob={[Ql]:ec,[tc]:sc,[nc]:rc,[or]:ic,[ec]:Ql,[sc]:tc,[rc]:nc,[ic]:or};function ab(n,e){function t(){let G=!1;const Fe=new Ot;let be=null;const Ge=new Ot(0,0,0,0);return{setMask:function(ye){be!==ye&&!G&&(n.colorMask(ye,ye,ye,ye),be=ye)},setLocked:function(ye){G=ye},setClear:function(ye,de,we,rt,Nt){Nt===!0&&(ye*=rt,de*=rt,we*=rt),Fe.set(ye,de,we,rt),Ge.equals(Fe)===!1&&(n.clearColor(ye,de,we,rt),Ge.copy(Fe))},reset:function(){G=!1,be=null,Ge.set(-1,0,0,0)}}}function i(){let G=!1,Fe=!1,be=null,Ge=null,ye=null;return{setReversed:function(de){if(Fe!==de){const we=e.get("EXT_clip_control");de?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),Fe=de;const rt=ye;ye=null,this.setClear(rt)}},getReversed:function(){return Fe},setTest:function(de){de?Q(n.DEPTH_TEST):Se(n.DEPTH_TEST)},setMask:function(de){be!==de&&!G&&(n.depthMask(de),be=de)},setFunc:function(de){if(Fe&&(de=ob[de]),Ge!==de){switch(de){case Ql:n.depthFunc(n.NEVER);break;case ec:n.depthFunc(n.ALWAYS);break;case tc:n.depthFunc(n.LESS);break;case or:n.depthFunc(n.LEQUAL);break;case nc:n.depthFunc(n.EQUAL);break;case ic:n.depthFunc(n.GEQUAL);break;case sc:n.depthFunc(n.GREATER);break;case rc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ge=de}},setLocked:function(de){G=de},setClear:function(de){ye!==de&&(Fe&&(de=1-de),n.clearDepth(de),ye=de)},reset:function(){G=!1,be=null,Ge=null,ye=null,Fe=!1}}}function s(){let G=!1,Fe=null,be=null,Ge=null,ye=null,de=null,we=null,rt=null,Nt=null;return{setTest:function(ft){G||(ft?Q(n.STENCIL_TEST):Se(n.STENCIL_TEST))},setMask:function(ft){Fe!==ft&&!G&&(n.stencilMask(ft),Fe=ft)},setFunc:function(ft,Tn,Hn){(be!==ft||Ge!==Tn||ye!==Hn)&&(n.stencilFunc(ft,Tn,Hn),be=ft,Ge=Tn,ye=Hn)},setOp:function(ft,Tn,Hn){(de!==ft||we!==Tn||rt!==Hn)&&(n.stencilOp(ft,Tn,Hn),de=ft,we=Tn,rt=Hn)},setLocked:function(ft){G=ft},setClear:function(ft){Nt!==ft&&(n.clearStencil(ft),Nt=ft)},reset:function(){G=!1,Fe=null,be=null,Ge=null,ye=null,de=null,we=null,rt=null,Nt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],_=null,y=!1,m=null,d=null,R=null,D=null,E=null,b=null,L=null,I=new ht(0,0,0),F=0,x=!1,S=null,N=null,B=null,H=null,te=null;const ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,W=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Y)[1]),V=W>=1):Y.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),V=W>=2);let pe=null,ge={};const me=n.getParameter(n.SCISSOR_BOX),Le=n.getParameter(n.VIEWPORT),Ee=new Ot().fromArray(me),ke=new Ot().fromArray(Le);function Ce(G,Fe,be,Ge){const ye=new Uint8Array(4),de=n.createTexture();n.bindTexture(G,de),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let we=0;we<be;we++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(Fe,0,n.RGBA,1,1,Ge,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(Fe+we,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return de}const q={};q[n.TEXTURE_2D]=Ce(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=Ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=Ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=Ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(n.DEPTH_TEST),o.setFunc(or),se(!1),ce(dh),Q(n.CULL_FACE),Z(Ti);function Q(G){u[G]!==!0&&(n.enable(G),u[G]=!0)}function Se(G){u[G]!==!1&&(n.disable(G),u[G]=!1)}function Qe(G,Fe){return h[G]!==Fe?(n.bindFramebuffer(G,Fe),h[G]=Fe,G===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Fe),G===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Fe),!0):!1}function Oe(G,Fe){let be=p,Ge=!1;if(G){be=f.get(Fe),be===void 0&&(be=[],f.set(Fe,be));const ye=G.textures;if(be.length!==ye.length||be[0]!==n.COLOR_ATTACHMENT0){for(let de=0,we=ye.length;de<we;de++)be[de]=n.COLOR_ATTACHMENT0+de;be.length=ye.length,Ge=!0}}else be[0]!==n.BACK&&(be[0]=n.BACK,Ge=!0);Ge&&n.drawBuffers(be)}function vt(G){return _!==G?(n.useProgram(G),_=G,!0):!1}const O={[us]:n.FUNC_ADD,[w_]:n.FUNC_SUBTRACT,[R_]:n.FUNC_REVERSE_SUBTRACT};O[C_]=n.MIN,O[P_]=n.MAX;const z={[D_]:n.ZERO,[L_]:n.ONE,[N_]:n.SRC_COLOR,[Zl]:n.SRC_ALPHA,[k_]:n.SRC_ALPHA_SATURATE,[O_]:n.DST_COLOR,[U_]:n.DST_ALPHA,[I_]:n.ONE_MINUS_SRC_COLOR,[Jl]:n.ONE_MINUS_SRC_ALPHA,[B_]:n.ONE_MINUS_DST_COLOR,[F_]:n.ONE_MINUS_DST_ALPHA,[V_]:n.CONSTANT_COLOR,[z_]:n.ONE_MINUS_CONSTANT_COLOR,[H_]:n.CONSTANT_ALPHA,[G_]:n.ONE_MINUS_CONSTANT_ALPHA};function Z(G,Fe,be,Ge,ye,de,we,rt,Nt,ft){if(G===Ti){y===!0&&(Se(n.BLEND),y=!1);return}if(y===!1&&(Q(n.BLEND),y=!0),G!==A_){if(G!==m||ft!==x){if((d!==us||E!==us)&&(n.blendEquation(n.FUNC_ADD),d=us,E=us),ft)switch(G){case Qs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ph:n.blendFunc(n.ONE,n.ONE);break;case mh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:gt("WebGLState: Invalid blending: ",G);break}else switch(G){case Qs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ph:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case mh:gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gh:gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:gt("WebGLState: Invalid blending: ",G);break}R=null,D=null,b=null,L=null,I.set(0,0,0),F=0,m=G,x=ft}return}ye=ye||Fe,de=de||be,we=we||Ge,(Fe!==d||ye!==E)&&(n.blendEquationSeparate(O[Fe],O[ye]),d=Fe,E=ye),(be!==R||Ge!==D||de!==b||we!==L)&&(n.blendFuncSeparate(z[be],z[Ge],z[de],z[we]),R=be,D=Ge,b=de,L=we),(rt.equals(I)===!1||Nt!==F)&&(n.blendColor(rt.r,rt.g,rt.b,Nt),I.copy(rt),F=Nt),m=G,x=!1}function le(G,Fe){G.side===ii?Se(n.CULL_FACE):Q(n.CULL_FACE);let be=G.side===En;Fe&&(be=!be),se(be),G.blending===Qs&&G.transparent===!1?Z(Ti):Z(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);const Ge=G.stencilWrite;a.setTest(Ge),Ge&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),_e(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Q(n.SAMPLE_ALPHA_TO_COVERAGE):Se(n.SAMPLE_ALPHA_TO_COVERAGE)}function se(G){S!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),S=G)}function ce(G){G!==b_?(Q(n.CULL_FACE),G!==N&&(G===dh?n.cullFace(n.BACK):G===E_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Se(n.CULL_FACE),N=G}function U(G){G!==B&&(V&&n.lineWidth(G),B=G)}function _e(G,Fe,be){G?(Q(n.POLYGON_OFFSET_FILL),(H!==Fe||te!==be)&&(n.polygonOffset(Fe,be),H=Fe,te=be)):Se(n.POLYGON_OFFSET_FILL)}function he(G){G?Q(n.SCISSOR_TEST):Se(n.SCISSOR_TEST)}function ae(G){G===void 0&&(G=n.TEXTURE0+ee-1),pe!==G&&(n.activeTexture(G),pe=G)}function fe(G,Fe,be){be===void 0&&(pe===null?be=n.TEXTURE0+ee-1:be=pe);let Ge=ge[be];Ge===void 0&&(Ge={type:void 0,texture:void 0},ge[be]=Ge),(Ge.type!==G||Ge.texture!==Fe)&&(pe!==be&&(n.activeTexture(be),pe=be),n.bindTexture(G,Fe||q[G]),Ge.type=G,Ge.texture=Fe)}function A(){const G=ge[pe];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(G){gt("WebGLState:",G)}}function k(){try{n.compressedTexImage3D(...arguments)}catch(G){gt("WebGLState:",G)}}function J(){try{n.texSubImage2D(...arguments)}catch(G){gt("WebGLState:",G)}}function oe(){try{n.texSubImage3D(...arguments)}catch(G){gt("WebGLState:",G)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(G){gt("WebGLState:",G)}}function Ie(){try{n.compressedTexSubImage3D(...arguments)}catch(G){gt("WebGLState:",G)}}function Me(){try{n.texStorage2D(...arguments)}catch(G){gt("WebGLState:",G)}}function Be(){try{n.texStorage3D(...arguments)}catch(G){gt("WebGLState:",G)}}function Ke(){try{n.texImage2D(...arguments)}catch(G){gt("WebGLState:",G)}}function xe(){try{n.texImage3D(...arguments)}catch(G){gt("WebGLState:",G)}}function Ae(G){Ee.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),Ee.copy(G))}function Pe(G){ke.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),ke.copy(G))}function Ve(G,Fe){let be=c.get(Fe);be===void 0&&(be=new WeakMap,c.set(Fe,be));let Ge=be.get(G);Ge===void 0&&(Ge=n.getUniformBlockIndex(Fe,G.name),be.set(G,Ge))}function Te(G,Fe){const Ge=c.get(Fe).get(G);l.get(Fe)!==Ge&&(n.uniformBlockBinding(Fe,Ge,G.__bindingPointIndex),l.set(Fe,Ge))}function at(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},pe=null,ge={},h={},f=new WeakMap,p=[],_=null,y=!1,m=null,d=null,R=null,D=null,E=null,b=null,L=null,I=new ht(0,0,0),F=0,x=!1,S=null,N=null,B=null,H=null,te=null,Ee.set(0,0,n.canvas.width,n.canvas.height),ke.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:Se,bindFramebuffer:Qe,drawBuffers:Oe,useProgram:vt,setBlending:Z,setMaterial:le,setFlipSided:se,setCullFace:ce,setLineWidth:U,setPolygonOffset:_e,setScissorTest:he,activeTexture:ae,bindTexture:fe,unbindTexture:A,compressedTexImage2D:g,compressedTexImage3D:k,texImage2D:Ke,texImage3D:xe,updateUBOMapping:Ve,uniformBlockBinding:Te,texStorage2D:Me,texStorage3D:Be,texSubImage2D:J,texSubImage3D:oe,compressedTexSubImage2D:$,compressedTexSubImage3D:Ie,scissor:Ae,viewport:Pe,reset:at}}function lb(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,g){return p?new OffscreenCanvas(A,g):$r("canvas")}function y(A,g,k){let J=1;const oe=fe(A);if((oe.width>k||oe.height>k)&&(J=k/Math.max(oe.width,oe.height)),J<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const $=Math.floor(J*oe.width),Ie=Math.floor(J*oe.height);h===void 0&&(h=_($,Ie));const Me=g?_($,Ie):h;return Me.width=$,Me.height=Ie,Me.getContext("2d").drawImage(A,0,0,$,Ie),nt("WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+$+"x"+Ie+")."),Me}else return"data"in A&&nt("WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),A;return A}function m(A){return A.generateMipmaps}function d(A){n.generateMipmap(A)}function R(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function D(A,g,k,J,oe=!1){if(A!==null){if(n[A]!==void 0)return n[A];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=g;if(g===n.RED&&(k===n.FLOAT&&($=n.R32F),k===n.HALF_FLOAT&&($=n.R16F),k===n.UNSIGNED_BYTE&&($=n.R8)),g===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&($=n.R8UI),k===n.UNSIGNED_SHORT&&($=n.R16UI),k===n.UNSIGNED_INT&&($=n.R32UI),k===n.BYTE&&($=n.R8I),k===n.SHORT&&($=n.R16I),k===n.INT&&($=n.R32I)),g===n.RG&&(k===n.FLOAT&&($=n.RG32F),k===n.HALF_FLOAT&&($=n.RG16F),k===n.UNSIGNED_BYTE&&($=n.RG8)),g===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&($=n.RG8UI),k===n.UNSIGNED_SHORT&&($=n.RG16UI),k===n.UNSIGNED_INT&&($=n.RG32UI),k===n.BYTE&&($=n.RG8I),k===n.SHORT&&($=n.RG16I),k===n.INT&&($=n.RG32I)),g===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&($=n.RGB8UI),k===n.UNSIGNED_SHORT&&($=n.RGB16UI),k===n.UNSIGNED_INT&&($=n.RGB32UI),k===n.BYTE&&($=n.RGB8I),k===n.SHORT&&($=n.RGB16I),k===n.INT&&($=n.RGB32I)),g===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&($=n.RGBA8UI),k===n.UNSIGNED_SHORT&&($=n.RGBA16UI),k===n.UNSIGNED_INT&&($=n.RGBA32UI),k===n.BYTE&&($=n.RGBA8I),k===n.SHORT&&($=n.RGBA16I),k===n.INT&&($=n.RGBA32I)),g===n.RGB&&(k===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&($=n.R11F_G11F_B10F)),g===n.RGBA){const Ie=oe?da:xt.getTransfer(J);k===n.FLOAT&&($=n.RGBA32F),k===n.HALF_FLOAT&&($=n.RGBA16F),k===n.UNSIGNED_BYTE&&($=Ie===Lt?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function E(A,g){let k;return A?g===null||g===ci||g===Kr?k=n.DEPTH24_STENCIL8:g===qn?k=n.DEPTH32F_STENCIL8:g===Yr&&(k=n.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===ci||g===Kr?k=n.DEPTH_COMPONENT24:g===qn?k=n.DEPTH_COMPONENT32F:g===Yr&&(k=n.DEPTH_COMPONENT16),k}function b(A,g){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==sn&&A.minFilter!==Yt?Math.log2(Math.max(g.width,g.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?g.mipmaps.length:1}function L(A){const g=A.target;g.removeEventListener("dispose",L),F(g),g.isVideoTexture&&u.delete(g)}function I(A){const g=A.target;g.removeEventListener("dispose",I),S(g)}function F(A){const g=i.get(A);if(g.__webglInit===void 0)return;const k=A.source,J=f.get(k);if(J){const oe=J[g.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&x(A),Object.keys(J).length===0&&f.delete(k)}i.remove(A)}function x(A){const g=i.get(A);n.deleteTexture(g.__webglTexture);const k=A.source,J=f.get(k);delete J[g.__cacheKey],o.memory.textures--}function S(A){const g=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(g.__webglFramebuffer[J]))for(let oe=0;oe<g.__webglFramebuffer[J].length;oe++)n.deleteFramebuffer(g.__webglFramebuffer[J][oe]);else n.deleteFramebuffer(g.__webglFramebuffer[J]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[J])}else{if(Array.isArray(g.__webglFramebuffer))for(let J=0;J<g.__webglFramebuffer.length;J++)n.deleteFramebuffer(g.__webglFramebuffer[J]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let J=0;J<g.__webglColorRenderbuffer.length;J++)g.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[J]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const k=A.textures;for(let J=0,oe=k.length;J<oe;J++){const $=i.get(k[J]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(k[J])}i.remove(A)}let N=0;function B(){N=0}function H(){const A=N;return A>=s.maxTextures&&nt("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),N+=1,A}function te(A){const g=[];return g.push(A.wrapS),g.push(A.wrapT),g.push(A.wrapR||0),g.push(A.magFilter),g.push(A.minFilter),g.push(A.anisotropy),g.push(A.internalFormat),g.push(A.format),g.push(A.type),g.push(A.generateMipmaps),g.push(A.premultiplyAlpha),g.push(A.flipY),g.push(A.unpackAlignment),g.push(A.colorSpace),g.join()}function ee(A,g){const k=i.get(A);if(A.isVideoTexture&&he(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){const J=A.image;if(J===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{q(k,A,g);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+g)}function V(A,g){const k=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){q(k,A,g);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+g)}function W(A,g){const k=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){q(k,A,g);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+g)}function Y(A,g){const k=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&k.__version!==A.version){Q(k,A,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+g)}const pe={[fs]:n.REPEAT,[Ln]:n.CLAMP_TO_EDGE,[lc]:n.MIRRORED_REPEAT},ge={[sn]:n.NEAREST,[j_]:n.NEAREST_MIPMAP_NEAREST,[go]:n.NEAREST_MIPMAP_LINEAR,[Yt]:n.LINEAR,[il]:n.LINEAR_MIPMAP_NEAREST,[Ei]:n.LINEAR_MIPMAP_LINEAR},me={[Z_]:n.NEVER,[n0]:n.ALWAYS,[J_]:n.LESS,[yu]:n.LEQUAL,[Q_]:n.EQUAL,[Su]:n.GEQUAL,[e0]:n.GREATER,[t0]:n.NOTEQUAL};function Le(A,g){if(g.type===qn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Yt||g.magFilter===il||g.magFilter===go||g.magFilter===Ei||g.minFilter===Yt||g.minFilter===il||g.minFilter===go||g.minFilter===Ei)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,pe[g.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,pe[g.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,pe[g.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,ge[g.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,ge[g.minFilter]),g.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,me[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===sn||g.minFilter!==go&&g.minFilter!==Ei||g.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Ee(A,g){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,g.addEventListener("dispose",L));const J=g.source;let oe=f.get(J);oe===void 0&&(oe={},f.set(J,oe));const $=te(g);if($!==A.__cacheKey){oe[$]===void 0&&(oe[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),oe[$].usedTimes++;const Ie=oe[A.__cacheKey];Ie!==void 0&&(oe[A.__cacheKey].usedTimes--,Ie.usedTimes===0&&x(g)),A.__cacheKey=$,A.__webglTexture=oe[$].texture}return k}function ke(A,g,k){return Math.floor(Math.floor(A/k)/g)}function Ce(A,g,k,J){const $=A.updateRanges;if($.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,k,J,g.data);else{$.sort((xe,Ae)=>xe.start-Ae.start);let Ie=0;for(let xe=1;xe<$.length;xe++){const Ae=$[Ie],Pe=$[xe],Ve=Ae.start+Ae.count,Te=ke(Pe.start,g.width,4),at=ke(Ae.start,g.width,4);Pe.start<=Ve+1&&Te===at&&ke(Pe.start+Pe.count-1,g.width,4)===Te?Ae.count=Math.max(Ae.count,Pe.start+Pe.count-Ae.start):(++Ie,$[Ie]=Pe)}$.length=Ie+1;const Me=n.getParameter(n.UNPACK_ROW_LENGTH),Be=n.getParameter(n.UNPACK_SKIP_PIXELS),Ke=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let xe=0,Ae=$.length;xe<Ae;xe++){const Pe=$[xe],Ve=Math.floor(Pe.start/4),Te=Math.ceil(Pe.count/4),at=Ve%g.width,G=Math.floor(Ve/g.width),Fe=Te,be=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,at),n.pixelStorei(n.UNPACK_SKIP_ROWS,G),t.texSubImage2D(n.TEXTURE_2D,0,at,G,Fe,be,k,J,g.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Me),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Be),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ke)}}function q(A,g,k){let J=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(J=n.TEXTURE_3D);const oe=Ee(A,g),$=g.source;t.bindTexture(J,A.__webglTexture,n.TEXTURE0+k);const Ie=i.get($);if($.version!==Ie.__version||oe===!0){t.activeTexture(n.TEXTURE0+k);const Me=xt.getPrimaries(xt.workingColorSpace),Be=g.colorSpace===qi?null:xt.getPrimaries(g.colorSpace),Ke=g.colorSpace===qi||Me===Be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let xe=y(g.image,!1,s.maxTextureSize);xe=ae(g,xe);const Ae=r.convert(g.format,g.colorSpace),Pe=r.convert(g.type);let Ve=D(g.internalFormat,Ae,Pe,g.colorSpace,g.isVideoTexture);Le(J,g);let Te;const at=g.mipmaps,G=g.isVideoTexture!==!0,Fe=Ie.__version===void 0||oe===!0,be=$.dataReady,Ge=b(g,xe);if(g.isDepthTexture)Ve=E(g.format===ds,g.type),Fe&&(G?t.texStorage2D(n.TEXTURE_2D,1,Ve,xe.width,xe.height):t.texImage2D(n.TEXTURE_2D,0,Ve,xe.width,xe.height,0,Ae,Pe,null));else if(g.isDataTexture)if(at.length>0){G&&Fe&&t.texStorage2D(n.TEXTURE_2D,Ge,Ve,at[0].width,at[0].height);for(let ye=0,de=at.length;ye<de;ye++)Te=at[ye],G?be&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,Te.width,Te.height,Ae,Pe,Te.data):t.texImage2D(n.TEXTURE_2D,ye,Ve,Te.width,Te.height,0,Ae,Pe,Te.data);g.generateMipmaps=!1}else G?(Fe&&t.texStorage2D(n.TEXTURE_2D,Ge,Ve,xe.width,xe.height),be&&Ce(g,xe,Ae,Pe)):t.texImage2D(n.TEXTURE_2D,0,Ve,xe.width,xe.height,0,Ae,Pe,xe.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){G&&Fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ge,Ve,at[0].width,at[0].height,xe.depth);for(let ye=0,de=at.length;ye<de;ye++)if(Te=at[ye],g.format!==Bn)if(Ae!==null)if(G){if(be)if(g.layerUpdates.size>0){const we=af(Te.width,Te.height,g.format,g.type);for(const rt of g.layerUpdates){const Nt=Te.data.subarray(rt*we/Te.data.BYTES_PER_ELEMENT,(rt+1)*we/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,rt,Te.width,Te.height,1,Ae,Nt)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,Te.width,Te.height,xe.depth,Ae,Te.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ye,Ve,Te.width,Te.height,xe.depth,0,Te.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?be&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,Te.width,Te.height,xe.depth,Ae,Pe,Te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ye,Ve,Te.width,Te.height,xe.depth,0,Ae,Pe,Te.data)}else{G&&Fe&&t.texStorage2D(n.TEXTURE_2D,Ge,Ve,at[0].width,at[0].height);for(let ye=0,de=at.length;ye<de;ye++)Te=at[ye],g.format!==Bn?Ae!==null?G?be&&t.compressedTexSubImage2D(n.TEXTURE_2D,ye,0,0,Te.width,Te.height,Ae,Te.data):t.compressedTexImage2D(n.TEXTURE_2D,ye,Ve,Te.width,Te.height,0,Te.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?be&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,Te.width,Te.height,Ae,Pe,Te.data):t.texImage2D(n.TEXTURE_2D,ye,Ve,Te.width,Te.height,0,Ae,Pe,Te.data)}else if(g.isDataArrayTexture)if(G){if(Fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ge,Ve,xe.width,xe.height,xe.depth),be)if(g.layerUpdates.size>0){const ye=af(xe.width,xe.height,g.format,g.type);for(const de of g.layerUpdates){const we=xe.data.subarray(de*ye/xe.data.BYTES_PER_ELEMENT,(de+1)*ye/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,de,xe.width,xe.height,1,Ae,Pe,we)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Ae,Pe,xe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ve,xe.width,xe.height,xe.depth,0,Ae,Pe,xe.data);else if(g.isData3DTexture)G?(Fe&&t.texStorage3D(n.TEXTURE_3D,Ge,Ve,xe.width,xe.height,xe.depth),be&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Ae,Pe,xe.data)):t.texImage3D(n.TEXTURE_3D,0,Ve,xe.width,xe.height,xe.depth,0,Ae,Pe,xe.data);else if(g.isFramebufferTexture){if(Fe)if(G)t.texStorage2D(n.TEXTURE_2D,Ge,Ve,xe.width,xe.height);else{let ye=xe.width,de=xe.height;for(let we=0;we<Ge;we++)t.texImage2D(n.TEXTURE_2D,we,Ve,ye,de,0,Ae,Pe,null),ye>>=1,de>>=1}}else if(at.length>0){if(G&&Fe){const ye=fe(at[0]);t.texStorage2D(n.TEXTURE_2D,Ge,Ve,ye.width,ye.height)}for(let ye=0,de=at.length;ye<de;ye++)Te=at[ye],G?be&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,Ae,Pe,Te):t.texImage2D(n.TEXTURE_2D,ye,Ve,Ae,Pe,Te);g.generateMipmaps=!1}else if(G){if(Fe){const ye=fe(xe);t.texStorage2D(n.TEXTURE_2D,Ge,Ve,ye.width,ye.height)}be&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae,Pe,xe)}else t.texImage2D(n.TEXTURE_2D,0,Ve,Ae,Pe,xe);m(g)&&d(J),Ie.__version=$.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function Q(A,g,k){if(g.image.length!==6)return;const J=Ee(A,g),oe=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+k);const $=i.get(oe);if(oe.version!==$.__version||J===!0){t.activeTexture(n.TEXTURE0+k);const Ie=xt.getPrimaries(xt.workingColorSpace),Me=g.colorSpace===qi?null:xt.getPrimaries(g.colorSpace),Be=g.colorSpace===qi||Ie===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const Ke=g.isCompressedTexture||g.image[0].isCompressedTexture,xe=g.image[0]&&g.image[0].isDataTexture,Ae=[];for(let de=0;de<6;de++)!Ke&&!xe?Ae[de]=y(g.image[de],!0,s.maxCubemapSize):Ae[de]=xe?g.image[de].image:g.image[de],Ae[de]=ae(g,Ae[de]);const Pe=Ae[0],Ve=r.convert(g.format,g.colorSpace),Te=r.convert(g.type),at=D(g.internalFormat,Ve,Te,g.colorSpace),G=g.isVideoTexture!==!0,Fe=$.__version===void 0||J===!0,be=oe.dataReady;let Ge=b(g,Pe);Le(n.TEXTURE_CUBE_MAP,g);let ye;if(Ke){G&&Fe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ge,at,Pe.width,Pe.height);for(let de=0;de<6;de++){ye=Ae[de].mipmaps;for(let we=0;we<ye.length;we++){const rt=ye[we];g.format!==Bn?Ve!==null?G?be&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,we,0,0,rt.width,rt.height,Ve,rt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,we,at,rt.width,rt.height,0,rt.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,we,0,0,rt.width,rt.height,Ve,Te,rt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,we,at,rt.width,rt.height,0,Ve,Te,rt.data)}}}else{if(ye=g.mipmaps,G&&Fe){ye.length>0&&Ge++;const de=fe(Ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ge,at,de.width,de.height)}for(let de=0;de<6;de++)if(xe){G?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ae[de].width,Ae[de].height,Ve,Te,Ae[de].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,at,Ae[de].width,Ae[de].height,0,Ve,Te,Ae[de].data);for(let we=0;we<ye.length;we++){const Nt=ye[we].image[de].image;G?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,we+1,0,0,Nt.width,Nt.height,Ve,Te,Nt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,we+1,at,Nt.width,Nt.height,0,Ve,Te,Nt.data)}}else{G?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ve,Te,Ae[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,at,Ve,Te,Ae[de]);for(let we=0;we<ye.length;we++){const rt=ye[we];G?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,we+1,0,0,Ve,Te,rt.image[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,we+1,at,Ve,Te,rt.image[de])}}}m(g)&&d(n.TEXTURE_CUBE_MAP),$.__version=oe.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function Se(A,g,k,J,oe,$){const Ie=r.convert(k.format,k.colorSpace),Me=r.convert(k.type),Be=D(k.internalFormat,Ie,Me,k.colorSpace),Ke=i.get(g),xe=i.get(k);if(xe.__renderTarget=g,!Ke.__hasExternalTextures){const Ae=Math.max(1,g.width>>$),Pe=Math.max(1,g.height>>$);oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,$,Be,Ae,Pe,g.depth,0,Ie,Me,null):t.texImage2D(oe,$,Be,Ae,Pe,0,Ie,Me,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),_e(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,oe,xe.__webglTexture,0,U(g)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,oe,xe.__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Qe(A,g,k){if(n.bindRenderbuffer(n.RENDERBUFFER,A),g.depthBuffer){const J=g.depthTexture,oe=J&&J.isDepthTexture?J.type:null,$=E(g.stencilBuffer,oe),Ie=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;_e(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,U(g),$,g.width,g.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,U(g),$,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,$,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ie,n.RENDERBUFFER,A)}else{const J=g.textures;for(let oe=0;oe<J.length;oe++){const $=J[oe],Ie=r.convert($.format,$.colorSpace),Me=r.convert($.type),Be=D($.internalFormat,Ie,Me,$.colorSpace);_e(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,U(g),Be,g.width,g.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,U(g),Be,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Be,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Oe(A,g,k){const J=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const oe=i.get(g.depthTexture);if(oe.__renderTarget=g,(!oe.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),J){if(oe.__webglInit===void 0&&(oe.__webglInit=!0,g.depthTexture.addEventListener("dispose",L)),oe.__webglTexture===void 0){oe.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture),Le(n.TEXTURE_CUBE_MAP,g.depthTexture);const Ke=r.convert(g.depthTexture.format),xe=r.convert(g.depthTexture.type);let Ae;g.depthTexture.format===Li?Ae=n.DEPTH_COMPONENT24:g.depthTexture.format===ds&&(Ae=n.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ae,g.width,g.height,0,Ke,xe,null)}}else ee(g.depthTexture,0);const $=oe.__webglTexture,Ie=U(g),Me=J?n.TEXTURE_CUBE_MAP_POSITIVE_X+k:n.TEXTURE_2D,Be=g.depthTexture.format===ds?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===Li)_e(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Be,Me,$,0,Ie):n.framebufferTexture2D(n.FRAMEBUFFER,Be,Me,$,0);else if(g.depthTexture.format===ds)_e(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Be,Me,$,0,Ie):n.framebufferTexture2D(n.FRAMEBUFFER,Be,Me,$,0);else throw new Error("Unknown depthTexture format")}function vt(A){const g=i.get(A),k=A.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==A.depthTexture){const J=A.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),J){const oe=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,J.removeEventListener("dispose",oe)};J.addEventListener("dispose",oe),g.__depthDisposeCallback=oe}g.__boundDepthTexture=J}if(A.depthTexture&&!g.__autoAllocateDepthBuffer)if(k)for(let J=0;J<6;J++)Oe(g.__webglFramebuffer[J],A,J);else{const J=A.texture.mipmaps;J&&J.length>0?Oe(g.__webglFramebuffer[0],A,0):Oe(g.__webglFramebuffer,A,0)}else if(k){g.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[J]),g.__webglDepthbuffer[J]===void 0)g.__webglDepthbuffer[J]=n.createRenderbuffer(),Qe(g.__webglDepthbuffer[J],A,!1);else{const oe=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=g.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,$)}}else{const J=A.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Qe(g.__webglDepthbuffer,A,!1);else{const oe=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,$)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function O(A,g,k){const J=i.get(A);g!==void 0&&Se(J.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&vt(A)}function z(A){const g=A.texture,k=i.get(A),J=i.get(g);A.addEventListener("dispose",I);const oe=A.textures,$=A.isWebGLCubeRenderTarget===!0,Ie=oe.length>1;if(Ie||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=g.version,o.memory.textures++),$){k.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(g.mipmaps&&g.mipmaps.length>0){k.__webglFramebuffer[Me]=[];for(let Be=0;Be<g.mipmaps.length;Be++)k.__webglFramebuffer[Me][Be]=n.createFramebuffer()}else k.__webglFramebuffer[Me]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){k.__webglFramebuffer=[];for(let Me=0;Me<g.mipmaps.length;Me++)k.__webglFramebuffer[Me]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(Ie)for(let Me=0,Be=oe.length;Me<Be;Me++){const Ke=i.get(oe[Me]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&_e(A)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Me=0;Me<oe.length;Me++){const Be=oe[Me];k.__webglColorRenderbuffer[Me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[Me]);const Ke=r.convert(Be.format,Be.colorSpace),xe=r.convert(Be.type),Ae=D(Be.internalFormat,Ke,xe,Be.colorSpace,A.isXRRenderTarget===!0),Pe=U(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,Ae,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,k.__webglColorRenderbuffer[Me])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),Qe(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),Le(n.TEXTURE_CUBE_MAP,g);for(let Me=0;Me<6;Me++)if(g.mipmaps&&g.mipmaps.length>0)for(let Be=0;Be<g.mipmaps.length;Be++)Se(k.__webglFramebuffer[Me][Be],A,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Be);else Se(k.__webglFramebuffer[Me],A,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);m(g)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let Me=0,Be=oe.length;Me<Be;Me++){const Ke=oe[Me],xe=i.get(Ke);let Ae=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Ae=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ae,xe.__webglTexture),Le(Ae,Ke),Se(k.__webglFramebuffer,A,Ke,n.COLOR_ATTACHMENT0+Me,Ae,0),m(Ke)&&d(Ae)}t.unbindTexture()}else{let Me=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Me=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Me,J.__webglTexture),Le(Me,g),g.mipmaps&&g.mipmaps.length>0)for(let Be=0;Be<g.mipmaps.length;Be++)Se(k.__webglFramebuffer[Be],A,g,n.COLOR_ATTACHMENT0,Me,Be);else Se(k.__webglFramebuffer,A,g,n.COLOR_ATTACHMENT0,Me,0);m(g)&&d(Me),t.unbindTexture()}A.depthBuffer&&vt(A)}function Z(A){const g=A.textures;for(let k=0,J=g.length;k<J;k++){const oe=g[k];if(m(oe)){const $=R(A),Ie=i.get(oe).__webglTexture;t.bindTexture($,Ie),d($),t.unbindTexture()}}}const le=[],se=[];function ce(A){if(A.samples>0){if(_e(A)===!1){const g=A.textures,k=A.width,J=A.height;let oe=n.COLOR_BUFFER_BIT;const $=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ie=i.get(A),Me=g.length>1;if(Me)for(let Ke=0;Ke<g.length;Ke++)t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ke,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ke,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const Be=A.texture.mipmaps;Be&&Be.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ke=0;Ke<g.length;Ke++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),Me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ke]);const xe=i.get(g[Ke]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,xe,0)}n.blitFramebuffer(0,0,k,J,0,0,k,J,oe,n.NEAREST),l===!0&&(le.length=0,se.length=0,le.push(n.COLOR_ATTACHMENT0+Ke),A.depthBuffer&&A.resolveDepthBuffer===!1&&(le.push($),se.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,se)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,le))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Me)for(let Ke=0;Ke<g.length;Ke++){t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ke,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ke]);const xe=i.get(g[Ke]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ke,n.TEXTURE_2D,xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const g=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function U(A){return Math.min(s.maxSamples,A.samples)}function _e(A){const g=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function he(A){const g=o.render.frame;u.get(A)!==g&&(u.set(A,g),A.update())}function ae(A,g){const k=A.colorSpace,J=A.format,oe=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==cr&&k!==qi&&(xt.getTransfer(k)===Lt?(J!==Bn||oe!==Cn)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):gt("WebGLTextures: Unsupported texture color space:",k)),g}function fe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=B,this.setTexture2D=ee,this.setTexture2DArray=V,this.setTexture3D=W,this.setTextureCube=Y,this.rebindTextures=O,this.setupRenderTarget=z,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=_e,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function cb(n,e){function t(i,s=qi){let r;const o=xt.getTransfer(s);if(i===Cn)return n.UNSIGNED_BYTE;if(i===mu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===gu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Qd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ep)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Zd)return n.BYTE;if(i===Jd)return n.SHORT;if(i===Yr)return n.UNSIGNED_SHORT;if(i===pu)return n.INT;if(i===ci)return n.UNSIGNED_INT;if(i===qn)return n.FLOAT;if(i===Di)return n.HALF_FLOAT;if(i===tp)return n.ALPHA;if(i===np)return n.RGB;if(i===Bn)return n.RGBA;if(i===Li)return n.DEPTH_COMPONENT;if(i===ds)return n.DEPTH_STENCIL;if(i===ip)return n.RED;if(i===_u)return n.RED_INTEGER;if(i===lr)return n.RG;if(i===xu)return n.RG_INTEGER;if(i===vu)return n.RGBA_INTEGER;if(i===ea||i===ta||i===na||i===ia)if(o===Lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===na)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ia)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===cc||i===uc||i===hc||i===fc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===cc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===uc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===hc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===dc||i===pc||i===mc||i===gc||i===_c||i===xc||i===vc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===dc||i===pc)return o===Lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===mc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===gc)return r.COMPRESSED_R11_EAC;if(i===_c)return r.COMPRESSED_SIGNED_R11_EAC;if(i===xc)return r.COMPRESSED_RG11_EAC;if(i===vc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Mc||i===yc||i===Sc||i===bc||i===Ec||i===Tc||i===Ac||i===wc||i===Rc||i===Cc||i===Pc||i===Dc||i===Lc||i===Nc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Mc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ec)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Tc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ac)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Dc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Lc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Nc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ic||i===Uc||i===Fc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ic)return o===Lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Uc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Oc||i===Bc||i===kc||i===Vc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Oc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Bc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Kr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const ub=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hb=`
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

}`;class fb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new gp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ui({vertexShader:ub,fragmentShader:hb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nn(new Ia(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class db extends _s{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,_=null;const y=typeof XRWebGLBinding<"u",m=new fb,d={},R=t.getContextAttributes();let D=null,E=null;const b=[],L=[],I=new ot;let F=null;const x=new cn;x.viewport=new Ot;const S=new cn;S.viewport=new Ot;const N=[x,S],B=new vx;let H=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=b[q];return Q===void 0&&(Q=new Tl,b[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=b[q];return Q===void 0&&(Q=new Tl,b[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=b[q];return Q===void 0&&(Q=new Tl,b[q]=Q),Q.getHandSpace()};function ee(q){const Q=L.indexOf(q.inputSource);if(Q===-1)return;const Se=b[Q];Se!==void 0&&(Se.update(q.inputSource,q.frame,c||o),Se.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){s.removeEventListener("select",ee),s.removeEventListener("selectstart",ee),s.removeEventListener("selectend",ee),s.removeEventListener("squeeze",ee),s.removeEventListener("squeezestart",ee),s.removeEventListener("squeezeend",ee),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",W);for(let q=0;q<b.length;q++){const Q=L[q];Q!==null&&(L[q]=null,b[q].disconnect(Q))}H=null,te=null,m.reset();for(const q in d)delete d[q];e.setRenderTarget(D),p=null,f=null,h=null,s=null,E=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(F),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(D=e.getRenderTarget(),s.addEventListener("select",ee),s.addEventListener("selectstart",ee),s.addEventListener("selectend",ee),s.addEventListener("squeeze",ee),s.addEventListener("squeezestart",ee),s.addEventListener("squeezeend",ee),s.addEventListener("end",V),s.addEventListener("inputsourceschange",W),R.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(I),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Qe=null,Oe=null;R.depth&&(Oe=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=R.stencil?ds:Li,Qe=R.stencil?Kr:ci);const vt={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(vt),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new ai(f.textureWidth,f.textureHeight,{format:Bn,type:Cn,depthTexture:new Jr(f.textureWidth,f.textureHeight,Qe,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Se={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Se),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new ai(p.framebufferWidth,p.framebufferHeight,{format:Bn,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ce.setContext(s),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(q){for(let Q=0;Q<q.removed.length;Q++){const Se=q.removed[Q],Qe=L.indexOf(Se);Qe>=0&&(L[Qe]=null,b[Qe].disconnect(Se))}for(let Q=0;Q<q.added.length;Q++){const Se=q.added[Q];let Qe=L.indexOf(Se);if(Qe===-1){for(let vt=0;vt<b.length;vt++)if(vt>=L.length){L.push(Se),Qe=vt;break}else if(L[vt]===null){L[vt]=Se,Qe=vt;break}if(Qe===-1)break}const Oe=b[Qe];Oe&&Oe.connect(Se)}}const Y=new X,pe=new X;function ge(q,Q,Se){Y.setFromMatrixPosition(Q.matrixWorld),pe.setFromMatrixPosition(Se.matrixWorld);const Qe=Y.distanceTo(pe),Oe=Q.projectionMatrix.elements,vt=Se.projectionMatrix.elements,O=Oe[14]/(Oe[10]-1),z=Oe[14]/(Oe[10]+1),Z=(Oe[9]+1)/Oe[5],le=(Oe[9]-1)/Oe[5],se=(Oe[8]-1)/Oe[0],ce=(vt[8]+1)/vt[0],U=O*se,_e=O*ce,he=Qe/(-se+ce),ae=he*-se;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ae),q.translateZ(he),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Oe[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const fe=O+he,A=z+he,g=U-ae,k=_e+(Qe-ae),J=Z*z/A*fe,oe=le*z/A*fe;q.projectionMatrix.makePerspective(g,k,J,oe,fe,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function me(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let Q=q.near,Se=q.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(Se=m.depthFar)),B.near=S.near=x.near=Q,B.far=S.far=x.far=Se,(H!==B.near||te!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),H=B.near,te=B.far),B.layers.mask=q.layers.mask|6,x.layers.mask=B.layers.mask&3,S.layers.mask=B.layers.mask&5;const Qe=q.parent,Oe=B.cameras;me(B,Qe);for(let vt=0;vt<Oe.length;vt++)me(Oe[vt],Qe);Oe.length===2?ge(B,x,S):B.projectionMatrix.copy(x.projectionMatrix),Le(q,B,Qe)};function Le(q,Q,Se){Se===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(Se.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ur*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(q){return d[q]};let Ee=null;function ke(q,Q){if(u=Q.getViewerPose(c||o),_=Q,u!==null){const Se=u.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let Qe=!1;Se.length!==B.cameras.length&&(B.cameras.length=0,Qe=!0);for(let z=0;z<Se.length;z++){const Z=Se[z];let le=null;if(p!==null)le=p.getViewport(Z);else{const ce=h.getViewSubImage(f,Z);le=ce.viewport,z===0&&(e.setRenderTargetTextures(E,ce.colorTexture,ce.depthStencilTexture),e.setRenderTarget(E))}let se=N[z];se===void 0&&(se=new cn,se.layers.enable(z),se.viewport=new Ot,N[z]=se),se.matrix.fromArray(Z.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(Z.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(le.x,le.y,le.width,le.height),z===0&&(B.matrix.copy(se.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Qe===!0&&B.cameras.push(se)}const Oe=s.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){h=i.getBinding();const z=h.getDepthInformation(Se[0]);z&&z.isValid&&z.texture&&m.init(z,s.renderState)}if(Oe&&Oe.includes("camera-access")&&y){e.state.unbindTexture(),h=i.getBinding();for(let z=0;z<Se.length;z++){const Z=Se[z].camera;if(Z){let le=d[Z];le||(le=new gp,d[Z]=le);const se=h.getCameraImage(Z);le.sourceTexture=se}}}}for(let Se=0;Se<b.length;Se++){const Qe=L[Se],Oe=b[Se];Qe!==null&&Oe!==void 0&&Oe.update(Qe,Q,c||o)}Ee&&Ee(q,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),_=null}const Ce=new Ep;Ce.setAnimationLoop(ke),this.setAnimationLoop=function(q){Ee=q},this.dispose=function(){}}}const as=new In,pb=new lt;function mb(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,cp(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,R,D,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,E)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),y(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,R,D):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===En&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===En&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const R=e.get(d),D=R.envMap,E=R.envMapRotation;D&&(m.envMap.value=D,as.copy(E),as.x*=-1,as.y*=-1,as.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),m.envMapRotation.value.setFromMatrix4(pb.makeRotationFromEuler(as)),m.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,R,D){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*R,m.scale.value=D*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,R){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===En&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){const R=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function gb(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,D){const E=D.program;i.uniformBlockBinding(R,E)}function c(R,D){let E=s[R.id];E===void 0&&(_(R),E=u(R),s[R.id]=E,R.addEventListener("dispose",m));const b=D.program;i.updateUBOMapping(R,b);const L=e.render.frame;r[R.id]!==L&&(f(R),r[R.id]=L)}function u(R){const D=h();R.__bindingPointIndex=D;const E=n.createBuffer(),b=R.__size,L=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,b,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,D,E),E}function h(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(R){const D=s[R.id],E=R.uniforms,b=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,D);for(let L=0,I=E.length;L<I;L++){const F=Array.isArray(E[L])?E[L]:[E[L]];for(let x=0,S=F.length;x<S;x++){const N=F[x];if(p(N,L,x,b)===!0){const B=N.__offset,H=Array.isArray(N.value)?N.value:[N.value];let te=0;for(let ee=0;ee<H.length;ee++){const V=H[ee],W=y(V);typeof V=="number"||typeof V=="boolean"?(N.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,B+te,N.__data)):V.isMatrix3?(N.__data[0]=V.elements[0],N.__data[1]=V.elements[1],N.__data[2]=V.elements[2],N.__data[3]=0,N.__data[4]=V.elements[3],N.__data[5]=V.elements[4],N.__data[6]=V.elements[5],N.__data[7]=0,N.__data[8]=V.elements[6],N.__data[9]=V.elements[7],N.__data[10]=V.elements[8],N.__data[11]=0):(V.toArray(N.__data,te),te+=W.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(R,D,E,b){const L=R.value,I=D+"_"+E;if(b[I]===void 0)return typeof L=="number"||typeof L=="boolean"?b[I]=L:b[I]=L.clone(),!0;{const F=b[I];if(typeof L=="number"||typeof L=="boolean"){if(F!==L)return b[I]=L,!0}else if(F.equals(L)===!1)return F.copy(L),!0}return!1}function _(R){const D=R.uniforms;let E=0;const b=16;for(let I=0,F=D.length;I<F;I++){const x=Array.isArray(D[I])?D[I]:[D[I]];for(let S=0,N=x.length;S<N;S++){const B=x[S],H=Array.isArray(B.value)?B.value:[B.value];for(let te=0,ee=H.length;te<ee;te++){const V=H[te],W=y(V),Y=E%b,pe=Y%W.boundary,ge=Y+pe;E+=pe,ge!==0&&b-ge<W.storage&&(E+=b-ge),B.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=E,E+=W.storage}}}const L=E%b;return L>0&&(E+=b-L),R.__size=E,R.__cache={},this}function y(R){const D={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(D.boundary=4,D.storage=4):R.isVector2?(D.boundary=8,D.storage=8):R.isVector3||R.isColor?(D.boundary=16,D.storage=12):R.isVector4?(D.boundary=16,D.storage=16):R.isMatrix3?(D.boundary=48,D.storage=48):R.isMatrix4?(D.boundary=64,D.storage=64):R.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):nt("WebGLRenderer: Unsupported uniform value type.",R),D}function m(R){const D=R.target;D.removeEventListener("dispose",m);const E=o.indexOf(D.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[D.id]),delete s[D.id],delete r[D.id]}function d(){for(const R in s)n.deleteBuffer(s[R]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}const _b=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Qn=null;function xb(){return Qn===null&&(Qn=new Au(_b,16,16,lr,Di),Qn.name="DFG_LUT",Qn.minFilter=Yt,Qn.magFilter=Yt,Qn.wrapS=Ln,Qn.wrapT=Ln,Qn.generateMipmaps=!1,Qn.needsUpdate=!0),Qn}class vb{constructor(e={}){const{canvas:t=s0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Cn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;const y=p,m=new Set([vu,xu,_u]),d=new Set([Cn,ci,Yr,Kr,mu,gu]),R=new Uint32Array(4),D=new Int32Array(4);let E=null,b=null;const L=[],I=[];let F=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let S=!1;this._outputColorSpace=Ht;let N=0,B=0,H=null,te=-1,ee=null;const V=new Ot,W=new Ot;let Y=null;const pe=new ht(0);let ge=0,me=t.width,Le=t.height,Ee=1,ke=null,Ce=null;const q=new Ot(0,0,me,Le),Q=new Ot(0,0,me,Le);let Se=!1;const Qe=new Ru;let Oe=!1,vt=!1;const O=new lt,z=new X,Z=new Ot,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function ce(){return H===null?Ee:1}let U=i;function _e(w,j){return t.getContext(w,j)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${du}`),t.addEventListener("webglcontextlost",rt,!1),t.addEventListener("webglcontextrestored",Nt,!1),t.addEventListener("webglcontextcreationerror",ft,!1),U===null){const j="webgl2";if(U=_e(j,w),U===null)throw _e(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw gt("WebGLRenderer: "+w.message),w}let he,ae,fe,A,g,k,J,oe,$,Ie,Me,Be,Ke,xe,Ae,Pe,Ve,Te,at,G,Fe,be,Ge,ye;function de(){he=new xy(U),he.init(),be=new cb(U,he),ae=new cy(U,he,e,be),fe=new ab(U,he),ae.reversedDepthBuffer&&f&&fe.buffers.depth.setReversed(!0),A=new yy(U),g=new qS,k=new lb(U,he,fe,g,ae,be,A),J=new hy(x),oe=new _y(x),$=new Tx(U),Ge=new ay(U,$),Ie=new vy(U,$,A,Ge),Me=new by(U,Ie,$,A),at=new Sy(U,ae,k),Pe=new uy(g),Be=new XS(x,J,oe,he,ae,Ge,Pe),Ke=new mb(x,g),xe=new YS,Ae=new eb(he),Te=new oy(x,J,oe,fe,Me,_,l),Ve=new rb(x,Me,ae),ye=new gb(U,A,ae,fe),G=new ly(U,he,A),Fe=new My(U,he,A),A.programs=Be.programs,x.capabilities=ae,x.extensions=he,x.properties=g,x.renderLists=xe,x.shadowMap=Ve,x.state=fe,x.info=A}de(),y!==Cn&&(F=new Ty(y,t.width,t.height,s,r));const we=new db(x,U);this.xr=we,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const w=he.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=he.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(w){w!==void 0&&(Ee=w,this.setSize(me,Le,!1))},this.getSize=function(w){return w.set(me,Le)},this.setSize=function(w,j,ie=!0){if(we.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}me=w,Le=j,t.width=Math.floor(w*Ee),t.height=Math.floor(j*Ee),ie===!0&&(t.style.width=w+"px",t.style.height=j+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,w,j)},this.getDrawingBufferSize=function(w){return w.set(me*Ee,Le*Ee).floor()},this.setDrawingBufferSize=function(w,j,ie){me=w,Le=j,Ee=ie,t.width=Math.floor(w*ie),t.height=Math.floor(j*ie),this.setViewport(0,0,w,j)},this.setEffects=function(w){if(y===Cn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let j=0;j<w.length;j++)if(w[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(V)},this.getViewport=function(w){return w.copy(q)},this.setViewport=function(w,j,ie,ne){w.isVector4?q.set(w.x,w.y,w.z,w.w):q.set(w,j,ie,ne),fe.viewport(V.copy(q).multiplyScalar(Ee).round())},this.getScissor=function(w){return w.copy(Q)},this.setScissor=function(w,j,ie,ne){w.isVector4?Q.set(w.x,w.y,w.z,w.w):Q.set(w,j,ie,ne),fe.scissor(W.copy(Q).multiplyScalar(Ee).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(w){fe.setScissorTest(Se=w)},this.setOpaqueSort=function(w){ke=w},this.setTransparentSort=function(w){Ce=w},this.getClearColor=function(w){return w.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(w=!0,j=!0,ie=!0){let ne=0;if(w){let K=!1;if(H!==null){const De=H.texture.format;K=m.has(De)}if(K){const De=H.texture.type,Xe=d.has(De),Ne=Te.getClearColor(),We=Te.getClearAlpha(),$e=Ne.r,st=Ne.g,tt=Ne.b;Xe?(R[0]=$e,R[1]=st,R[2]=tt,R[3]=We,U.clearBufferuiv(U.COLOR,0,R)):(D[0]=$e,D[1]=st,D[2]=tt,D[3]=We,U.clearBufferiv(U.COLOR,0,D))}else ne|=U.COLOR_BUFFER_BIT}j&&(ne|=U.DEPTH_BUFFER_BIT),ie&&(ne|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",rt,!1),t.removeEventListener("webglcontextrestored",Nt,!1),t.removeEventListener("webglcontextcreationerror",ft,!1),Te.dispose(),xe.dispose(),Ae.dispose(),g.dispose(),J.dispose(),oe.dispose(),Me.dispose(),Ge.dispose(),ye.dispose(),Be.dispose(),we.dispose(),we.removeEventListener("sessionstart",oo),we.removeEventListener("sessionend",Mr),hi.stop()};function rt(w){w.preventDefault(),Th("WebGLRenderer: Context Lost."),S=!0}function Nt(){Th("WebGLRenderer: Context Restored."),S=!1;const w=A.autoReset,j=Ve.enabled,ie=Ve.autoUpdate,ne=Ve.needsUpdate,K=Ve.type;de(),A.autoReset=w,Ve.enabled=j,Ve.autoUpdate=ie,Ve.needsUpdate=ne,Ve.type=K}function ft(w){gt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Tn(w){const j=w.target;j.removeEventListener("dispose",Tn),Hn(j)}function Hn(w){za(w),g.remove(w)}function za(w){const j=g.get(w).programs;j!==void 0&&(j.forEach(function(ie){Be.releaseProgram(ie)}),w.isShaderMaterial&&Be.releaseShaderCache(w))}this.renderBufferDirect=function(w,j,ie,ne,K,De){j===null&&(j=le);const Xe=K.isMesh&&K.matrixWorld.determinant()<0,Ne=Ga(w,j,ie,ne,K);fe.setMaterial(ne,Xe);let We=ie.index,$e=1;if(ne.wireframe===!0){if(We=Ie.getWireframeAttribute(ie),We===void 0)return;$e=2}const st=ie.drawRange,tt=ie.attributes.position;let dt=st.start*$e,wt=(st.start+st.count)*$e;De!==null&&(dt=Math.max(dt,De.start*$e),wt=Math.min(wt,(De.start+De.count)*$e)),We!==null?(dt=Math.max(dt,0),wt=Math.min(wt,We.count)):tt!=null&&(dt=Math.max(dt,0),wt=Math.min(wt,tt.count));const Bt=wt-dt;if(Bt<0||Bt===1/0)return;Ge.setup(K,ne,Ne,ie,We);let kt,Rt=G;if(We!==null&&(kt=$.get(We),Rt=Fe,Rt.setIndex(kt)),K.isMesh)ne.wireframe===!0?(fe.setLineWidth(ne.wireframeLinewidth*ce()),Rt.setMode(U.LINES)):Rt.setMode(U.TRIANGLES);else if(K.isLine){let ze=ne.linewidth;ze===void 0&&(ze=1),fe.setLineWidth(ze*ce()),K.isLineSegments?Rt.setMode(U.LINES):K.isLineLoop?Rt.setMode(U.LINE_LOOP):Rt.setMode(U.LINE_STRIP)}else K.isPoints?Rt.setMode(U.POINTS):K.isSprite&&Rt.setMode(U.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Zr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Rt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))Rt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const ze=K._multiDrawStarts,St=K._multiDrawCounts,yt=K._multiDrawCount,rn=We?$.get(We).bytesPerElement:1,fi=g.get(ne).currentProgram.getUniforms();for(let en=0;en<yt;en++)fi.setValue(U,"_gl_DrawID",en),Rt.render(ze[en]/rn,St[en])}else if(K.isInstancedMesh)Rt.renderInstances(dt,Bt,K.count);else if(ie.isInstancedBufferGeometry){const ze=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,St=Math.min(ie.instanceCount,ze);Rt.renderInstances(dt,Bt,St)}else Rt.render(dt,Bt)};function ro(w,j,ie){w.transparent===!0&&w.side===ii&&w.forceSinglePass===!1?(w.side=En,w.needsUpdate=!0,Ss(w,j,ie),w.side=Pi,w.needsUpdate=!0,Ss(w,j,ie),w.side=ii):Ss(w,j,ie)}this.compile=function(w,j,ie=null){ie===null&&(ie=w),b=Ae.get(ie),b.init(j),I.push(b),ie.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(b.pushLight(K),K.castShadow&&b.pushShadow(K))}),w!==ie&&w.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(b.pushLight(K),K.castShadow&&b.pushShadow(K))}),b.setupLights();const ne=new Set;return w.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const De=K.material;if(De)if(Array.isArray(De))for(let Xe=0;Xe<De.length;Xe++){const Ne=De[Xe];ro(Ne,ie,K),ne.add(Ne)}else ro(De,ie,K),ne.add(De)}),b=I.pop(),ne},this.compileAsync=function(w,j,ie=null){const ne=this.compile(w,j,ie);return new Promise(K=>{function De(){if(ne.forEach(function(Xe){g.get(Xe).currentProgram.isReady()&&ne.delete(Xe)}),ne.size===0){K(w);return}setTimeout(De,10)}he.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let vr=null;function Ha(w){vr&&vr(w)}function oo(){hi.stop()}function Mr(){hi.start()}const hi=new Ep;hi.setAnimationLoop(Ha),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(w){vr=w,we.setAnimationLoop(w),w===null?hi.stop():hi.start()},we.addEventListener("sessionstart",oo),we.addEventListener("sessionend",Mr),this.render=function(w,j){if(j!==void 0&&j.isCamera!==!0){gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;const ie=we.enabled===!0&&we.isPresenting===!0,ne=F!==null&&(H===null||ie)&&F.begin(x,H);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(j),j=we.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,j,H),b=Ae.get(w,I.length),b.init(j),I.push(b),O.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Qe.setFromProjectionMatrix(O,si,j.reversedDepth),vt=this.localClippingEnabled,Oe=Pe.init(this.clippingPlanes,vt),E=xe.get(w,L.length),E.init(),L.push(E),we.enabled===!0&&we.isPresenting===!0){const Xe=x.xr.getDepthSensingMesh();Xe!==null&&Ms(Xe,j,-1/0,x.sortObjects)}Ms(w,j,0,x.sortObjects),E.finish(),x.sortObjects===!0&&E.sort(ke,Ce),se=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,se&&Te.addToRenderList(E,w),this.info.render.frame++,Oe===!0&&Pe.beginShadows();const K=b.state.shadowsArray;if(Ve.render(K,w,j),Oe===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&F.hasRenderPass())===!1){const Xe=E.opaque,Ne=E.transmissive;if(b.setupLights(),j.isArrayCamera){const We=j.cameras;if(Ne.length>0)for(let $e=0,st=We.length;$e<st;$e++){const tt=We[$e];lo(Xe,Ne,w,tt)}se&&Te.render(w);for(let $e=0,st=We.length;$e<st;$e++){const tt=We[$e];ao(E,w,tt,tt.viewport)}}else Ne.length>0&&lo(Xe,Ne,w,j),se&&Te.render(w),ao(E,w,j)}H!==null&&B===0&&(k.updateMultisampleRenderTarget(H),k.updateRenderTargetMipmap(H)),ne&&F.end(x),w.isScene===!0&&w.onAfterRender(x,w,j),Ge.resetDefaultState(),te=-1,ee=null,I.pop(),I.length>0?(b=I[I.length-1],Oe===!0&&Pe.setGlobalState(x.clippingPlanes,b.state.camera)):b=null,L.pop(),L.length>0?E=L[L.length-1]:E=null};function Ms(w,j,ie,ne){if(w.visible===!1)return;if(w.layers.test(j.layers)){if(w.isGroup)ie=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(j);else if(w.isLight)b.pushLight(w),w.castShadow&&b.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Qe.intersectsSprite(w)){ne&&Z.setFromMatrixPosition(w.matrixWorld).applyMatrix4(O);const Xe=Me.update(w),Ne=w.material;Ne.visible&&E.push(w,Xe,Ne,ie,Z.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Qe.intersectsObject(w))){const Xe=Me.update(w),Ne=w.material;if(ne&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Z.copy(w.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),Z.copy(Xe.boundingSphere.center)),Z.applyMatrix4(w.matrixWorld).applyMatrix4(O)),Array.isArray(Ne)){const We=Xe.groups;for(let $e=0,st=We.length;$e<st;$e++){const tt=We[$e],dt=Ne[tt.materialIndex];dt&&dt.visible&&E.push(w,Xe,dt,ie,Z.z,tt)}}else Ne.visible&&E.push(w,Xe,Ne,ie,Z.z,null)}}const De=w.children;for(let Xe=0,Ne=De.length;Xe<Ne;Xe++)Ms(De[Xe],j,ie,ne)}function ao(w,j,ie,ne){const{opaque:K,transmissive:De,transparent:Xe}=w;b.setupLightsView(ie),Oe===!0&&Pe.setGlobalState(x.clippingPlanes,ie),ne&&fe.viewport(V.copy(ne)),K.length>0&&ys(K,j,ie),De.length>0&&ys(De,j,ie),Xe.length>0&&ys(Xe,j,ie),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function lo(w,j,ie,ne){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[ne.id]===void 0){const dt=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[ne.id]=new ai(1,1,{generateMipmaps:!0,type:dt?Di:Cn,minFilter:Ei,samples:ae.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace})}const De=b.state.transmissionRenderTarget[ne.id],Xe=ne.viewport||V;De.setSize(Xe.z*x.transmissionResolutionScale,Xe.w*x.transmissionResolutionScale);const Ne=x.getRenderTarget(),We=x.getActiveCubeFace(),$e=x.getActiveMipmapLevel();x.setRenderTarget(De),x.getClearColor(pe),ge=x.getClearAlpha(),ge<1&&x.setClearColor(16777215,.5),x.clear(),se&&Te.render(ie);const st=x.toneMapping;x.toneMapping=oi;const tt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),b.setupLightsView(ne),Oe===!0&&Pe.setGlobalState(x.clippingPlanes,ne),ys(w,ie,ne),k.updateMultisampleRenderTarget(De),k.updateRenderTargetMipmap(De),he.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let wt=0,Bt=j.length;wt<Bt;wt++){const kt=j[wt],{object:Rt,geometry:ze,material:St,group:yt}=kt;if(St.side===ii&&Rt.layers.test(ne.layers)){const rn=St.side;St.side=En,St.needsUpdate=!0,co(Rt,ie,ne,ze,St,yt),St.side=rn,St.needsUpdate=!0,dt=!0}}dt===!0&&(k.updateMultisampleRenderTarget(De),k.updateRenderTargetMipmap(De))}x.setRenderTarget(Ne,We,$e),x.setClearColor(pe,ge),tt!==void 0&&(ne.viewport=tt),x.toneMapping=st}function ys(w,j,ie){const ne=j.isScene===!0?j.overrideMaterial:null;for(let K=0,De=w.length;K<De;K++){const Xe=w[K],{object:Ne,geometry:We,group:$e}=Xe;let st=Xe.material;st.allowOverride===!0&&ne!==null&&(st=ne),Ne.layers.test(ie.layers)&&co(Ne,j,ie,We,st,$e)}}function co(w,j,ie,ne,K,De){w.onBeforeRender(x,j,ie,ne,K,De),w.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(x,j,ie,ne,w,De),K.transparent===!0&&K.side===ii&&K.forceSinglePass===!1?(K.side=En,K.needsUpdate=!0,x.renderBufferDirect(ie,j,ne,K,w,De),K.side=Pi,K.needsUpdate=!0,x.renderBufferDirect(ie,j,ne,K,w,De),K.side=ii):x.renderBufferDirect(ie,j,ne,K,w,De),w.onAfterRender(x,j,ie,ne,K,De)}function Ss(w,j,ie){j.isScene!==!0&&(j=le);const ne=g.get(w),K=b.state.lights,De=b.state.shadowsArray,Xe=K.state.version,Ne=Be.getParameters(w,K.state,De,j,ie),We=Be.getProgramCacheKey(Ne);let $e=ne.programs;ne.environment=w.isMeshStandardMaterial?j.environment:null,ne.fog=j.fog,ne.envMap=(w.isMeshStandardMaterial?oe:J).get(w.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&w.envMap===null?j.environmentRotation:w.envMapRotation,$e===void 0&&(w.addEventListener("dispose",Tn),$e=new Map,ne.programs=$e);let st=$e.get(We);if(st!==void 0){if(ne.currentProgram===st&&ne.lightsStateVersion===Xe)return ho(w,Ne),st}else Ne.uniforms=Be.getUniforms(w),w.onBeforeCompile(Ne,x),st=Be.acquireProgram(Ne,We),$e.set(We,st),ne.uniforms=Ne.uniforms;const tt=ne.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(tt.clippingPlanes=Pe.uniform),ho(w,Ne),ne.needsLights=Xa(w),ne.lightsStateVersion=Xe,ne.needsLights&&(tt.ambientLightColor.value=K.state.ambient,tt.lightProbe.value=K.state.probe,tt.directionalLights.value=K.state.directional,tt.directionalLightShadows.value=K.state.directionalShadow,tt.spotLights.value=K.state.spot,tt.spotLightShadows.value=K.state.spotShadow,tt.rectAreaLights.value=K.state.rectArea,tt.ltc_1.value=K.state.rectAreaLTC1,tt.ltc_2.value=K.state.rectAreaLTC2,tt.pointLights.value=K.state.point,tt.pointLightShadows.value=K.state.pointShadow,tt.hemisphereLights.value=K.state.hemi,tt.directionalShadowMap.value=K.state.directionalShadowMap,tt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,tt.spotShadowMap.value=K.state.spotShadowMap,tt.spotLightMatrix.value=K.state.spotLightMatrix,tt.spotLightMap.value=K.state.spotLightMap,tt.pointShadowMap.value=K.state.pointShadowMap,tt.pointShadowMatrix.value=K.state.pointShadowMatrix),ne.currentProgram=st,ne.uniformsList=null,st}function uo(w){if(w.uniformsList===null){const j=w.currentProgram.getUniforms();w.uniformsList=sa.seqWithValue(j.seq,w.uniforms)}return w.uniformsList}function ho(w,j){const ie=g.get(w);ie.outputColorSpace=j.outputColorSpace,ie.batching=j.batching,ie.batchingColor=j.batchingColor,ie.instancing=j.instancing,ie.instancingColor=j.instancingColor,ie.instancingMorph=j.instancingMorph,ie.skinning=j.skinning,ie.morphTargets=j.morphTargets,ie.morphNormals=j.morphNormals,ie.morphColors=j.morphColors,ie.morphTargetsCount=j.morphTargetsCount,ie.numClippingPlanes=j.numClippingPlanes,ie.numIntersection=j.numClipIntersection,ie.vertexAlphas=j.vertexAlphas,ie.vertexTangents=j.vertexTangents,ie.toneMapping=j.toneMapping}function Ga(w,j,ie,ne,K){j.isScene!==!0&&(j=le),k.resetTextureUnits();const De=j.fog,Xe=ne.isMeshStandardMaterial?j.environment:null,Ne=H===null?x.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:cr,We=(ne.isMeshStandardMaterial?oe:J).get(ne.envMap||Xe),$e=ne.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,st=!!ie.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),tt=!!ie.morphAttributes.position,dt=!!ie.morphAttributes.normal,wt=!!ie.morphAttributes.color;let Bt=oi;ne.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Bt=x.toneMapping);const kt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Rt=kt!==void 0?kt.length:0,ze=g.get(ne),St=b.state.lights;if(Oe===!0&&(vt===!0||w!==ee)){const je=w===ee&&ne.id===te;Pe.setState(ne,w,je)}let yt=!1;ne.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==St.state.version||ze.outputColorSpace!==Ne||K.isBatchedMesh&&ze.batching===!1||!K.isBatchedMesh&&ze.batching===!0||K.isBatchedMesh&&ze.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&ze.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&ze.instancing===!1||!K.isInstancedMesh&&ze.instancing===!0||K.isSkinnedMesh&&ze.skinning===!1||!K.isSkinnedMesh&&ze.skinning===!0||K.isInstancedMesh&&ze.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&ze.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&ze.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&ze.instancingMorph===!1&&K.morphTexture!==null||ze.envMap!==We||ne.fog===!0&&ze.fog!==De||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Pe.numPlanes||ze.numIntersection!==Pe.numIntersection)||ze.vertexAlphas!==$e||ze.vertexTangents!==st||ze.morphTargets!==tt||ze.morphNormals!==dt||ze.morphColors!==wt||ze.toneMapping!==Bt||ze.morphTargetsCount!==Rt)&&(yt=!0):(yt=!0,ze.__version=ne.version);let rn=ze.currentProgram;yt===!0&&(rn=Ss(ne,j,K));let fi=!1,en=!1,Zn=!1;const Tt=rn.getUniforms(),tn=ze.uniforms;if(fe.useProgram(rn.program)&&(fi=!0,en=!0,Zn=!0),ne.id!==te&&(te=ne.id,en=!0),fi||ee!==w){fe.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Tt.setValue(U,"projectionMatrix",w.projectionMatrix),Tt.setValue(U,"viewMatrix",w.matrixWorldInverse);const qt=Tt.map.cameraPosition;qt!==void 0&&qt.setValue(U,z.setFromMatrixPosition(w.matrixWorld)),ae.logarithmicDepthBuffer&&Tt.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Tt.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),ee!==w&&(ee=w,en=!0,Zn=!0)}if(ze.needsLights&&(St.state.directionalShadowMap.length>0&&Tt.setValue(U,"directionalShadowMap",St.state.directionalShadowMap,k),St.state.spotShadowMap.length>0&&Tt.setValue(U,"spotShadowMap",St.state.spotShadowMap,k),St.state.pointShadowMap.length>0&&Tt.setValue(U,"pointShadowMap",St.state.pointShadowMap,k)),K.isSkinnedMesh){Tt.setOptional(U,K,"bindMatrix"),Tt.setOptional(U,K,"bindMatrixInverse");const je=K.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),Tt.setValue(U,"boneTexture",je.boneTexture,k))}K.isBatchedMesh&&(Tt.setOptional(U,K,"batchingTexture"),Tt.setValue(U,"batchingTexture",K._matricesTexture,k),Tt.setOptional(U,K,"batchingIdTexture"),Tt.setValue(U,"batchingIdTexture",K._indirectTexture,k),Tt.setOptional(U,K,"batchingColorTexture"),K._colorsTexture!==null&&Tt.setValue(U,"batchingColorTexture",K._colorsTexture,k));const Mn=ie.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&at.update(K,ie,rn),(en||ze.receiveShadow!==K.receiveShadow)&&(ze.receiveShadow=K.receiveShadow,Tt.setValue(U,"receiveShadow",K.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(tn.envMap.value=We,tn.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&j.environment!==null&&(tn.envMapIntensity.value=j.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=xb()),en&&(Tt.setValue(U,"toneMappingExposure",x.toneMappingExposure),ze.needsLights&&Wa(tn,Zn),De&&ne.fog===!0&&Ke.refreshFogUniforms(tn,De),Ke.refreshMaterialUniforms(tn,ne,Ee,Le,b.state.transmissionRenderTarget[w.id]),sa.upload(U,uo(ze),tn,k)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(sa.upload(U,uo(ze),tn,k),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Tt.setValue(U,"center",K.center),Tt.setValue(U,"modelViewMatrix",K.modelViewMatrix),Tt.setValue(U,"normalMatrix",K.normalMatrix),Tt.setValue(U,"modelMatrix",K.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const je=ne.uniformsGroups;for(let qt=0,M=je.length;qt<M;qt++){const v=je[qt];ye.update(v,rn),ye.bind(v,rn)}}return rn}function Wa(w,j){w.ambientLightColor.needsUpdate=j,w.lightProbe.needsUpdate=j,w.directionalLights.needsUpdate=j,w.directionalLightShadows.needsUpdate=j,w.pointLights.needsUpdate=j,w.pointLightShadows.needsUpdate=j,w.spotLights.needsUpdate=j,w.spotLightShadows.needsUpdate=j,w.rectAreaLights.needsUpdate=j,w.hemisphereLights.needsUpdate=j}function Xa(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(w,j,ie){const ne=g.get(w);ne.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),g.get(w.texture).__webglTexture=j,g.get(w.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ie,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,j){const ie=g.get(w);ie.__webglFramebuffer=j,ie.__useDefaultFramebuffer=j===void 0};const pn=U.createFramebuffer();this.setRenderTarget=function(w,j=0,ie=0){H=w,N=j,B=ie;let ne=null,K=!1,De=!1;if(w){const Ne=g.get(w);if(Ne.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(U.FRAMEBUFFER,Ne.__webglFramebuffer),V.copy(w.viewport),W.copy(w.scissor),Y=w.scissorTest,fe.viewport(V),fe.scissor(W),fe.setScissorTest(Y),te=-1;return}else if(Ne.__webglFramebuffer===void 0)k.setupRenderTarget(w);else if(Ne.__hasExternalTextures)k.rebindTextures(w,g.get(w.texture).__webglTexture,g.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const st=w.depthTexture;if(Ne.__boundDepthTexture!==st){if(st!==null&&g.has(st)&&(w.width!==st.image.width||w.height!==st.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(w)}}const We=w.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(De=!0);const $e=g.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray($e[j])?ne=$e[j][ie]:ne=$e[j],K=!0):w.samples>0&&k.useMultisampledRTT(w)===!1?ne=g.get(w).__webglMultisampledFramebuffer:Array.isArray($e)?ne=$e[ie]:ne=$e,V.copy(w.viewport),W.copy(w.scissor),Y=w.scissorTest}else V.copy(q).multiplyScalar(Ee).floor(),W.copy(Q).multiplyScalar(Ee).floor(),Y=Se;if(ie!==0&&(ne=pn),fe.bindFramebuffer(U.FRAMEBUFFER,ne)&&fe.drawBuffers(w,ne),fe.viewport(V),fe.scissor(W),fe.setScissorTest(Y),K){const Ne=g.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ne.__webglTexture,ie)}else if(De){const Ne=j;for(let We=0;We<w.textures.length;We++){const $e=g.get(w.textures[We]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+We,$e.__webglTexture,ie,Ne)}}else if(w!==null&&ie!==0){const Ne=g.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ne.__webglTexture,ie)}te=-1},this.readRenderTargetPixels=function(w,j,ie,ne,K,De,Xe,Ne=0){if(!(w&&w.isWebGLRenderTarget)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=g.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Xe!==void 0&&(We=We[Xe]),We){fe.bindFramebuffer(U.FRAMEBUFFER,We);try{const $e=w.textures[Ne],st=$e.format,tt=$e.type;if(!ae.textureFormatReadable(st)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ae.textureTypeReadable(tt)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=w.width-ne&&ie>=0&&ie<=w.height-K&&(w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ne),U.readPixels(j,ie,ne,K,be.convert(st),be.convert(tt),De))}finally{const $e=H!==null?g.get(H).__webglFramebuffer:null;fe.bindFramebuffer(U.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(w,j,ie,ne,K,De,Xe,Ne=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=g.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Xe!==void 0&&(We=We[Xe]),We)if(j>=0&&j<=w.width-ne&&ie>=0&&ie<=w.height-K){fe.bindFramebuffer(U.FRAMEBUFFER,We);const $e=w.textures[Ne],st=$e.format,tt=$e.type;if(!ae.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ae.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const dt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,dt),U.bufferData(U.PIXEL_PACK_BUFFER,De.byteLength,U.STREAM_READ),w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ne),U.readPixels(j,ie,ne,K,be.convert(st),be.convert(tt),0);const wt=H!==null?g.get(H).__webglFramebuffer:null;fe.bindFramebuffer(U.FRAMEBUFFER,wt);const Bt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await r0(U,Bt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,dt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,De),U.deleteBuffer(dt),U.deleteSync(Bt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,j=null,ie=0){const ne=Math.pow(2,-ie),K=Math.floor(w.image.width*ne),De=Math.floor(w.image.height*ne),Xe=j!==null?j.x:0,Ne=j!==null?j.y:0;k.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,ie,0,0,Xe,Ne,K,De),fe.unbindTexture()};const Ii=U.createFramebuffer(),yr=U.createFramebuffer();this.copyTextureToTexture=function(w,j,ie=null,ne=null,K=0,De=null){De===null&&(K!==0?(Zr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),De=K,K=0):De=0);let Xe,Ne,We,$e,st,tt,dt,wt,Bt;const kt=w.isCompressedTexture?w.mipmaps[De]:w.image;if(ie!==null)Xe=ie.max.x-ie.min.x,Ne=ie.max.y-ie.min.y,We=ie.isBox3?ie.max.z-ie.min.z:1,$e=ie.min.x,st=ie.min.y,tt=ie.isBox3?ie.min.z:0;else{const Mn=Math.pow(2,-K);Xe=Math.floor(kt.width*Mn),Ne=Math.floor(kt.height*Mn),w.isDataArrayTexture?We=kt.depth:w.isData3DTexture?We=Math.floor(kt.depth*Mn):We=1,$e=0,st=0,tt=0}ne!==null?(dt=ne.x,wt=ne.y,Bt=ne.z):(dt=0,wt=0,Bt=0);const Rt=be.convert(j.format),ze=be.convert(j.type);let St;j.isData3DTexture?(k.setTexture3D(j,0),St=U.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(k.setTexture2DArray(j,0),St=U.TEXTURE_2D_ARRAY):(k.setTexture2D(j,0),St=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,j.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,j.unpackAlignment);const yt=U.getParameter(U.UNPACK_ROW_LENGTH),rn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),fi=U.getParameter(U.UNPACK_SKIP_PIXELS),en=U.getParameter(U.UNPACK_SKIP_ROWS),Zn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,kt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,kt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,$e),U.pixelStorei(U.UNPACK_SKIP_ROWS,st),U.pixelStorei(U.UNPACK_SKIP_IMAGES,tt);const Tt=w.isDataArrayTexture||w.isData3DTexture,tn=j.isDataArrayTexture||j.isData3DTexture;if(w.isDepthTexture){const Mn=g.get(w),je=g.get(j),qt=g.get(Mn.__renderTarget),M=g.get(je.__renderTarget);fe.bindFramebuffer(U.READ_FRAMEBUFFER,qt.__webglFramebuffer),fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,M.__webglFramebuffer);for(let v=0;v<We;v++)Tt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,g.get(w).__webglTexture,K,tt+v),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,g.get(j).__webglTexture,De,Bt+v)),U.blitFramebuffer($e,st,Xe,Ne,dt,wt,Xe,Ne,U.DEPTH_BUFFER_BIT,U.NEAREST);fe.bindFramebuffer(U.READ_FRAMEBUFFER,null),fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(K!==0||w.isRenderTargetTexture||g.has(w)){const Mn=g.get(w),je=g.get(j);fe.bindFramebuffer(U.READ_FRAMEBUFFER,Ii),fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,yr);for(let qt=0;qt<We;qt++)Tt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Mn.__webglTexture,K,tt+qt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Mn.__webglTexture,K),tn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,je.__webglTexture,De,Bt+qt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,je.__webglTexture,De),K!==0?U.blitFramebuffer($e,st,Xe,Ne,dt,wt,Xe,Ne,U.COLOR_BUFFER_BIT,U.NEAREST):tn?U.copyTexSubImage3D(St,De,dt,wt,Bt+qt,$e,st,Xe,Ne):U.copyTexSubImage2D(St,De,dt,wt,$e,st,Xe,Ne);fe.bindFramebuffer(U.READ_FRAMEBUFFER,null),fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else tn?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(St,De,dt,wt,Bt,Xe,Ne,We,Rt,ze,kt.data):j.isCompressedArrayTexture?U.compressedTexSubImage3D(St,De,dt,wt,Bt,Xe,Ne,We,Rt,kt.data):U.texSubImage3D(St,De,dt,wt,Bt,Xe,Ne,We,Rt,ze,kt):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,De,dt,wt,Xe,Ne,Rt,ze,kt.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,De,dt,wt,kt.width,kt.height,Rt,kt.data):U.texSubImage2D(U.TEXTURE_2D,De,dt,wt,Xe,Ne,Rt,ze,kt);U.pixelStorei(U.UNPACK_ROW_LENGTH,yt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,rn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,fi),U.pixelStorei(U.UNPACK_SKIP_ROWS,en),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Zn),De===0&&j.generateMipmaps&&U.generateMipmap(St),fe.unbindTexture()},this.initRenderTarget=function(w){g.get(w).__webglFramebuffer===void 0&&k.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?k.setTextureCube(w,0):w.isData3DTexture?k.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?k.setTexture2DArray(w,0):k.setTexture2D(w,0),fe.unbindTexture()},this.resetState=function(){N=0,B=0,H=null,fe.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}}const Df={type:"change"},Nu={type:"start"},Cp={type:"end"},Go=new io,Lf=new Xi,Mb=Math.cos(70*Ws.DEG2RAD),jt=new X,Sn=2*Math.PI,It={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Bl=1e-6;class yb extends bx{constructor(e,t=null){super(e,t),this.state=It.NONE,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Js.ROTATE,MIDDLE:Js.DOLLY,RIGHT:Js.PAN},this.touches={ONE:Xs.ROTATE,TWO:Xs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new Kn,this._lastTargetPosition=new X,this._quat=new Kn().setFromUnitVectors(e.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new of,this._sphericalDelta=new of,this._scale=1,this._panOffset=new X,this._rotateStart=new ot,this._rotateEnd=new ot,this._rotateDelta=new ot,this._panStart=new ot,this._panEnd=new ot,this._panDelta=new ot,this._dollyStart=new ot,this._dollyEnd=new ot,this._dollyDelta=new ot,this._dollyDirection=new X,this._mouse=new ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=bb.bind(this),this._onPointerDown=Sb.bind(this),this._onPointerUp=Eb.bind(this),this._onContextMenu=Db.bind(this),this._onMouseWheel=wb.bind(this),this._onKeyDown=Rb.bind(this),this._onTouchStart=Cb.bind(this),this._onTouchMove=Pb.bind(this),this._onMouseDown=Tb.bind(this),this._onMouseMove=Ab.bind(this),this._interceptControlDown=Lb.bind(this),this._interceptControlUp=Nb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Df),this.update(),this.state=It.NONE}update(e=null){const t=this.object.position;jt.copy(t).sub(this.target),jt.applyQuaternion(this._quat),this._spherical.setFromVector3(jt),this.autoRotate&&this.state===It.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Sn:i>Math.PI&&(i-=Sn),s<-Math.PI?s+=Sn:s>Math.PI&&(s-=Sn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(jt.setFromSpherical(this._spherical),jt.applyQuaternion(this._quatInverse),t.copy(this.target).add(jt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=jt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new X(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new X(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=jt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Go.origin.copy(this.object.position),Go.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Go.direction))<Mb?this.object.lookAt(this.target):(Lf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Go.intersectPlane(Lf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Bl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Bl||this._lastTargetPosition.distanceToSquared(this.target)>Bl?(this.dispatchEvent(Df),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Sn/60*this.autoRotateSpeed*e:Sn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){jt.setFromMatrixColumn(t,0),jt.multiplyScalar(-e),this._panOffset.add(jt)}_panUp(e,t){this.screenSpacePanning===!0?jt.setFromMatrixColumn(t,1):(jt.setFromMatrixColumn(t,0),jt.crossVectors(this.object.up,jt)),jt.multiplyScalar(e),this._panOffset.add(jt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;jt.copy(s).sub(this.target);let r=jt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ot,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Sb(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function bb(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Eb(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Cp),this.state=It.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Tb(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Js.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=It.DOLLY;break;case Js.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=It.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=It.ROTATE}break;case Js.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=It.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=It.PAN}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(Nu)}function Ab(n){switch(this.state){case It.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case It.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case It.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function wb(n){this.enabled===!1||this.enableZoom===!1||this.state!==It.NONE||(n.preventDefault(),this.dispatchEvent(Nu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Cp))}function Rb(n){this.enabled!==!1&&this._handleKeyDown(n)}function Cb(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Xs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=It.TOUCH_ROTATE;break;case Xs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=It.TOUCH_PAN;break;default:this.state=It.NONE}break;case 2:switch(this.touches.TWO){case Xs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=It.TOUCH_DOLLY_PAN;break;case Xs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=It.TOUCH_DOLLY_ROTATE;break;default:this.state=It.NONE}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(Nu)}function Pb(n){switch(this._trackPointer(n),this.state){case It.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case It.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case It.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case It.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=It.NONE}}function Db(n){this.enabled!==!1&&n.preventDefault()}function Lb(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Nb(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Ib extends $i{constructor(e){super(e)}load(e,t,i,s){const r=this,o=new Du(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},i,s)}parse(e){function t(c){const u=new DataView(c),h=32/8*3+32/8*3*3+16/8,f=u.getUint32(80,!0);if(80+32/8+f*h===u.byteLength)return!0;const _=[115,111,108,105,100];for(let y=0;y<5;y++)if(i(_,u,y))return!1;return!0}function i(c,u,h){for(let f=0,p=c.length;f<p;f++)if(c[f]!==u.getUint8(h+f))return!1;return!0}function s(c){const u=new DataView(c),h=u.getUint32(80,!0);let f,p,_,y=!1,m,d,R,D,E;for(let N=0;N<70;N++)u.getUint32(N,!1)==1129270351&&u.getUint8(N+4)==82&&u.getUint8(N+5)==61&&(y=!0,m=new Float32Array(h*3*3),d=u.getUint8(N+6)/255,R=u.getUint8(N+7)/255,D=u.getUint8(N+8)/255,E=u.getUint8(N+9)/255);const b=84,L=50,I=new Qt,F=new Float32Array(h*3*3),x=new Float32Array(h*3*3),S=new ht;for(let N=0;N<h;N++){const B=b+N*L,H=u.getFloat32(B,!0),te=u.getFloat32(B+4,!0),ee=u.getFloat32(B+8,!0);if(y){const V=u.getUint16(B+48,!0);(V&32768)===0?(f=(V&31)/31,p=(V>>5&31)/31,_=(V>>10&31)/31):(f=d,p=R,_=D)}for(let V=1;V<=3;V++){const W=B+V*12,Y=N*3*3+(V-1)*3;F[Y]=u.getFloat32(W,!0),F[Y+1]=u.getFloat32(W+4,!0),F[Y+2]=u.getFloat32(W+8,!0),x[Y]=H,x[Y+1]=te,x[Y+2]=ee,y&&(S.setRGB(f,p,_,Ht),m[Y]=S.r,m[Y+1]=S.g,m[Y+2]=S.b)}}return I.setAttribute("position",new Nn(F,3)),I.setAttribute("normal",new Nn(x,3)),y&&(I.setAttribute("color",new Nn(m,3)),I.hasColors=!0,I.alpha=E),I}function r(c){const u=new Qt,h=/solid([\s\S]*?)endsolid/g,f=/facet([\s\S]*?)endfacet/g,p=/solid\s(.+)/;let _=0;const y=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+y+y+y,"g"),d=new RegExp("normal"+y+y+y,"g"),R=[],D=[],E=[],b=new X;let L,I=0,F=0,x=0;for(;(L=h.exec(c))!==null;){F=x;const S=L[0],N=(L=p.exec(S))!==null?L[1]:"";for(E.push(N);(L=f.exec(S))!==null;){let te=0,ee=0;const V=L[0];for(;(L=d.exec(V))!==null;)b.x=parseFloat(L[1]),b.y=parseFloat(L[2]),b.z=parseFloat(L[3]),ee++;for(;(L=m.exec(V))!==null;)R.push(parseFloat(L[1]),parseFloat(L[2]),parseFloat(L[3])),D.push(b.x,b.y,b.z),te++,x++;ee!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+_),te!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+_),_++}const B=F,H=x-F;u.userData.groupNames=E,u.addGroup(B,H,I),I++}return u.setAttribute("position",new At(R,3)),u.setAttribute("normal",new At(D,3)),u}function o(c){return typeof c!="string"?new TextDecoder().decode(c):c}function a(c){if(typeof c=="string"){const u=new Uint8Array(c.length);for(let h=0;h<c.length;h++)u[h]=c.charCodeAt(h)&255;return u.buffer||u}else return c}const l=a(e);return t(l)?s(l):r(o(e))}}class Nf extends dx{constructor(e){super(e)}parse(e){function t(V){switch(V.image_type){case f:case y:if(V.colormap_length>256||V.colormap_size!==24||V.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case p:case _:case m:case d:if(V.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case h:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+V.image_type)}if(V.width<=0||V.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(V.pixel_size!==8&&V.pixel_size!==16&&V.pixel_size!==24&&V.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+V.pixel_size)}function i(V,W,Y,pe,ge){let me,Le;const Ee=Y.pixel_size>>3,ke=Y.width*Y.height*Ee;if(W&&(Le=ge.subarray(pe,pe+=Y.colormap_length*(Y.colormap_size>>3))),V){me=new Uint8Array(ke);let Ce,q,Q,Se=0;const Qe=new Uint8Array(Ee);for(;Se<ke;)if(Ce=ge[pe++],q=(Ce&127)+1,Ce&128){for(Q=0;Q<Ee;++Q)Qe[Q]=ge[pe++];for(Q=0;Q<q;++Q)me.set(Qe,Se+Q*Ee);Se+=Ee*q}else{for(q*=Ee,Q=0;Q<q;++Q)me[Se+Q]=ge[pe++];Se+=q}}else me=ge.subarray(pe,pe+=W?Y.width*Y.height:ke);return{pixel_data:me,palettes:Le}}function s(V,W,Y,pe,ge,me,Le,Ee,ke){const Ce=ke;let q,Q=0,Se,Qe;const Oe=S.width;for(Qe=W;Qe!==pe;Qe+=Y)for(Se=ge;Se!==Le;Se+=me,Q++)q=Ee[Q],V[(Se+Oe*Qe)*4+3]=255,V[(Se+Oe*Qe)*4+2]=Ce[q*3+0],V[(Se+Oe*Qe)*4+1]=Ce[q*3+1],V[(Se+Oe*Qe)*4+0]=Ce[q*3+2];return V}function r(V,W,Y,pe,ge,me,Le,Ee){let ke,Ce=0,q,Q;const Se=S.width;for(Q=W;Q!==pe;Q+=Y)for(q=ge;q!==Le;q+=me,Ce+=2)ke=Ee[Ce+0]+(Ee[Ce+1]<<8),V[(q+Se*Q)*4+0]=(ke&31744)>>7,V[(q+Se*Q)*4+1]=(ke&992)>>2,V[(q+Se*Q)*4+2]=(ke&31)<<3,V[(q+Se*Q)*4+3]=ke&32768?0:255;return V}function o(V,W,Y,pe,ge,me,Le,Ee){let ke=0,Ce,q;const Q=S.width;for(q=W;q!==pe;q+=Y)for(Ce=ge;Ce!==Le;Ce+=me,ke+=3)V[(Ce+Q*q)*4+3]=255,V[(Ce+Q*q)*4+2]=Ee[ke+0],V[(Ce+Q*q)*4+1]=Ee[ke+1],V[(Ce+Q*q)*4+0]=Ee[ke+2];return V}function a(V,W,Y,pe,ge,me,Le,Ee){let ke=0,Ce,q;const Q=S.width;for(q=W;q!==pe;q+=Y)for(Ce=ge;Ce!==Le;Ce+=me,ke+=4)V[(Ce+Q*q)*4+2]=Ee[ke+0],V[(Ce+Q*q)*4+1]=Ee[ke+1],V[(Ce+Q*q)*4+0]=Ee[ke+2],V[(Ce+Q*q)*4+3]=Ee[ke+3];return V}function l(V,W,Y,pe,ge,me,Le,Ee){let ke,Ce=0,q,Q;const Se=S.width;for(Q=W;Q!==pe;Q+=Y)for(q=ge;q!==Le;q+=me,Ce++)ke=Ee[Ce],V[(q+Se*Q)*4+0]=ke,V[(q+Se*Q)*4+1]=ke,V[(q+Se*Q)*4+2]=ke,V[(q+Se*Q)*4+3]=255;return V}function c(V,W,Y,pe,ge,me,Le,Ee){let ke=0,Ce,q;const Q=S.width;for(q=W;q!==pe;q+=Y)for(Ce=ge;Ce!==Le;Ce+=me,ke+=2)V[(Ce+Q*q)*4+0]=Ee[ke+0],V[(Ce+Q*q)*4+1]=Ee[ke+0],V[(Ce+Q*q)*4+2]=Ee[ke+0],V[(Ce+Q*q)*4+3]=Ee[ke+1];return V}function u(V,W,Y,pe,ge){let me,Le,Ee,ke,Ce,q;switch((S.flags&R)>>D){default:case L:me=0,Ee=1,Ce=W,Le=0,ke=1,q=Y;break;case E:me=0,Ee=1,Ce=W,Le=Y-1,ke=-1,q=-1;break;case I:me=W-1,Ee=-1,Ce=-1,Le=0,ke=1,q=Y;break;case b:me=W-1,Ee=-1,Ce=-1,Le=Y-1,ke=-1,q=-1;break}if(H)switch(S.pixel_size){case 8:l(V,Le,ke,q,me,Ee,Ce,pe);break;case 16:c(V,Le,ke,q,me,Ee,Ce,pe);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(S.pixel_size){case 8:s(V,Le,ke,q,me,Ee,Ce,pe,ge);break;case 16:r(V,Le,ke,q,me,Ee,Ce,pe);break;case 24:o(V,Le,ke,q,me,Ee,Ce,pe);break;case 32:a(V,Le,ke,q,me,Ee,Ce,pe);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return V}const h=0,f=1,p=2,_=3,y=9,m=10,d=11,R=48,D=4,E=0,b=1,L=2,I=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let F=0;const x=new Uint8Array(e),S={id_length:x[F++],colormap_type:x[F++],image_type:x[F++],colormap_index:x[F++]|x[F++]<<8,colormap_length:x[F++]|x[F++]<<8,colormap_size:x[F++],origin:[x[F++]|x[F++]<<8,x[F++]|x[F++]<<8],width:x[F++]|x[F++]<<8,height:x[F++]|x[F++]<<8,pixel_size:x[F++],flags:x[F++]};if(t(S),S.id_length+F>e.length)throw new Error("THREE.TGALoader: No data.");F+=S.id_length;let N=!1,B=!1,H=!1;switch(S.image_type){case y:N=!0,B=!0;break;case f:B=!0;break;case m:N=!0;break;case p:break;case d:N=!0,H=!0;break;case _:H=!0;break}const te=new Uint8Array(S.width*S.height*4),ee=i(N,B,S,F,x);return u(te,S.width,S.height,ee.pixel_data,ee.palettes),{data:te,width:S.width,height:S.height,flipY:!0,generateMipmaps:!0,minFilter:Ei}}}class Ub extends $i{load(e,t,i,s){const r=this,o=r.path===""?bp.extractUrlBase(e):r.path,a=new Du(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){try{t(r.parse(l,o))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},i,s)}parse(e,t){function i(M,v){const C=[],T=M.childNodes;for(let P=0,re=T.length;P<re;P++){const ue=T[P];ue.nodeName===v&&C.push(ue)}return C}function s(M){if(M.length===0)return[];const v=M.trim().split(/\s+/),C=new Array(v.length);for(let T=0,P=v.length;T<P;T++)C[T]=v[T];return C}function r(M){if(M.length===0)return[];const v=M.trim().split(/\s+/),C=new Array(v.length);for(let T=0,P=v.length;T<P;T++)C[T]=parseFloat(v[T]);return C}function o(M){if(M.length===0)return[];const v=M.trim().split(/\s+/),C=new Array(v.length);for(let T=0,P=v.length;T<P;T++)C[T]=parseInt(v[T]);return C}function a(M){return M.substring(1)}function l(){return"three_default_"+Mn++}function c(M){return Object.keys(M).length===0}function u(M){return{unit:h(i(M,"unit")[0]),upAxis:f(i(M,"up_axis")[0])}}function h(M){return M!==void 0&&M.hasAttribute("meter")===!0?parseFloat(M.getAttribute("meter")):1}function f(M){return M!==void 0?M.textContent:"Y_UP"}function p(M,v,C,T){const P=i(M,v)[0];if(P!==void 0){const re=i(P,C);for(let ue=0;ue<re.length;ue++)T(re[ue])}}function _(M,v){for(const C in M){const T=M[C];T.build=v(M[C])}}function y(M,v){return M.build!==void 0||(M.build=v(M)),M.build}function m(M){const v={sources:{},samplers:{},channels:{}};let C=!1;for(let T=0,P=M.childNodes.length;T<P;T++){const re=M.childNodes[T];if(re.nodeType!==1)continue;let ue;switch(re.nodeName){case"source":ue=re.getAttribute("id"),v.sources[ue]=be(re);break;case"sampler":ue=re.getAttribute("id"),v.samplers[ue]=d(re);break;case"channel":ue=re.getAttribute("target"),v.channels[ue]=R(re);break;case"animation":m(re),C=!0;break;default:console.log(re)}}C===!1&&(je.animations[M.getAttribute("id")||Ws.generateUUID()]=v)}function d(M){const v={inputs:{}};for(let C=0,T=M.childNodes.length;C<T;C++){const P=M.childNodes[C];if(P.nodeType===1&&P.nodeName==="input"){const re=a(P.getAttribute("source")),ue=P.getAttribute("semantic");v.inputs[ue]=re}}return v}function R(M){const v={};let T=M.getAttribute("target").split("/");const P=T.shift();let re=T.shift();const ue=re.indexOf("(")!==-1,qe=re.indexOf(".")!==-1;if(qe)T=re.split("."),re=T.shift(),v.member=T.shift();else if(ue){const Re=re.split("(");re=Re.shift();for(let He=0;He<Re.length;He++)Re[He]=parseInt(Re[He].replace(/\)/,""));v.indices=Re}return v.id=P,v.sid=re,v.arraySyntax=ue,v.memberSyntax=qe,v.sampler=a(M.getAttribute("source")),v}function D(M){const v=[],C=M.channels,T=M.samplers,P=M.sources;for(const re in C)if(C.hasOwnProperty(re)){const ue=C[re],qe=T[ue.sampler],Re=qe.inputs.INPUT,He=qe.inputs.OUTPUT,Je=P[Re],ve=P[He],Ze=b(ue,Je,ve);S(Ze,v)}return v}function E(M){return y(je.animations[M],D)}function b(M,v,C){const T=je.nodes[M.id],P=We(T.id),re=T.transforms[M.sid],ue=T.matrix.clone().transpose();let qe,Re,He,Je,ve,Ze;const Ye={};switch(re){case"matrix":for(He=0,Je=v.array.length;He<Je;He++)if(qe=v.array[He],Re=He*C.stride,Ye[qe]===void 0&&(Ye[qe]={}),M.arraySyntax===!0){const zt=C.array[Re],Dt=M.indices[0]+4*M.indices[1];Ye[qe][Dt]=zt}else for(ve=0,Ze=C.stride;ve<Ze;ve++)Ye[qe][ve]=C.array[Re+ve];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',re);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',re);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',re);break}const it=L(Ye,ue);return{name:P.uuid,keyframes:it}}function L(M,v){const C=[];for(const P in M)C.push({time:parseFloat(P),value:M[P]});C.sort(T);for(let P=0;P<16;P++)N(C,P,v.elements[P]);return C;function T(P,re){return P.time-re.time}}const I=new X,F=new X,x=new Kn;function S(M,v){const C=M.keyframes,T=M.name,P=[],re=[],ue=[],qe=[];for(let Re=0,He=C.length;Re<He;Re++){const Je=C[Re],ve=Je.time,Ze=Je.value;pn.fromArray(Ze).transpose(),pn.decompose(I,x,F),P.push(ve),re.push(I.x,I.y,I.z),ue.push(x.x,x.y,x.z,x.w),qe.push(F.x,F.y,F.z)}return re.length>0&&v.push(new dr(T+".position",P,re)),ue.length>0&&v.push(new so(T+".quaternion",P,ue)),qe.length>0&&v.push(new dr(T+".scale",P,qe)),v}function N(M,v,C){let T,P=!0,re,ue;for(re=0,ue=M.length;re<ue;re++)T=M[re],T.value[v]===void 0?T.value[v]=null:P=!1;if(P===!0)for(re=0,ue=M.length;re<ue;re++)T=M[re],T.value[v]=C;else B(M,v)}function B(M,v){let C,T;for(let P=0,re=M.length;P<re;P++){const ue=M[P];if(ue.value[v]===null){if(C=H(M,P,v),T=te(M,P,v),C===null){ue.value[v]=T.value[v];continue}if(T===null){ue.value[v]=C.value[v];continue}ee(ue,C,T,v)}}}function H(M,v,C){for(;v>=0;){const T=M[v];if(T.value[C]!==null)return T;v--}return null}function te(M,v,C){for(;v<M.length;){const T=M[v];if(T.value[C]!==null)return T;v++}return null}function ee(M,v,C,T){if(C.time-v.time===0){M.value[T]=v.value[T];return}M.value[T]=(M.time-v.time)*(C.value[T]-v.value[T])/(C.time-v.time)+v.value[T]}function V(M){const v={name:M.getAttribute("id")||"default",start:parseFloat(M.getAttribute("start")||0),end:parseFloat(M.getAttribute("end")||0),animations:[]};for(let C=0,T=M.childNodes.length;C<T;C++){const P=M.childNodes[C];P.nodeType===1&&P.nodeName==="instance_animation"&&v.animations.push(a(P.getAttribute("url")))}je.clips[M.getAttribute("id")]=v}function W(M){const v=[],C=M.name,T=M.end-M.start||-1,P=M.animations;for(let re=0,ue=P.length;re<ue;re++){const qe=E(P[re]);for(let Re=0,He=qe.length;Re<He;Re++)v.push(qe[Re])}return new ef(C,T,v)}function Y(M){return y(je.clips[M],W)}function pe(M){const v={};for(let C=0,T=M.childNodes.length;C<T;C++){const P=M.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"skin":v.id=a(P.getAttribute("source")),v.skin=ge(P);break;case"morph":v.id=a(P.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}je.controllers[M.getAttribute("id")]=v}function ge(M){const v={sources:{}};for(let C=0,T=M.childNodes.length;C<T;C++){const P=M.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"bind_shape_matrix":v.bindShapeMatrix=r(P.textContent);break;case"source":const re=P.getAttribute("id");v.sources[re]=be(P);break;case"joints":v.joints=me(P);break;case"vertex_weights":v.vertexWeights=Le(P);break}}return v}function me(M){const v={inputs:{}};for(let C=0,T=M.childNodes.length;C<T;C++){const P=M.childNodes[C];if(P.nodeType===1&&P.nodeName==="input"){const re=P.getAttribute("semantic"),ue=a(P.getAttribute("source"));v.inputs[re]=ue}}return v}function Le(M){const v={inputs:{}};for(let C=0,T=M.childNodes.length;C<T;C++){const P=M.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"input":const re=P.getAttribute("semantic"),ue=a(P.getAttribute("source")),qe=parseInt(P.getAttribute("offset"));v.inputs[re]={id:ue,offset:qe};break;case"vcount":v.vcount=o(P.textContent);break;case"v":v.v=o(P.textContent);break}}return v}function Ee(M){const v={id:M.id},C=je.geometries[v.id];return M.skin!==void 0&&(v.skin=ke(M.skin),C.sources.skinIndices=v.skin.indices,C.sources.skinWeights=v.skin.weights),v}function ke(M){const C={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},T=M.sources,P=M.vertexWeights,re=P.vcount,ue=P.v,qe=P.inputs.JOINT.offset,Re=P.inputs.WEIGHT.offset,He=M.sources[M.joints.inputs.JOINT],Je=M.sources[M.joints.inputs.INV_BIND_MATRIX],ve=T[P.inputs.WEIGHT.id].array;let Ze=0,Ye,it,et;for(Ye=0,et=re.length;Ye<et;Ye++){const Dt=re[Ye],bt=[];for(it=0;it<Dt;it++){const Et=ue[Ze+qe],di=ue[Ze+Re],yn=ve[di];bt.push({index:Et,weight:yn}),Ze+=2}for(bt.sort(zt),it=0;it<4;it++){const Et=bt[it];Et!==void 0?(C.indices.array.push(Et.index),C.weights.array.push(Et.weight)):(C.indices.array.push(0),C.weights.array.push(0))}}for(M.bindShapeMatrix?C.bindMatrix=new lt().fromArray(M.bindShapeMatrix).transpose():C.bindMatrix=new lt().identity(),Ye=0,et=He.array.length;Ye<et;Ye++){const Dt=He.array[Ye],bt=new lt().fromArray(Je.array,Ye*Je.stride).transpose();C.joints.push({name:Dt,boneInverse:bt})}return C;function zt(Dt,bt){return bt.weight-Dt.weight}}function Ce(M){return y(je.controllers[M],Ee)}function q(M){const v={init_from:i(M,"init_from")[0].textContent};je.images[M.getAttribute("id")]=v}function Q(M){return M.build!==void 0?M.build:M.init_from}function Se(M){const v=je.images[M];return v!==void 0?y(v,Q):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",M),null)}function Qe(M){const v={};for(let C=0,T=M.childNodes.length;C<T;C++){const P=M.childNodes[C];P.nodeType===1&&P.nodeName==="profile_COMMON"&&(v.profile=Oe(P))}je.effects[M.getAttribute("id")]=v}function Oe(M){const v={surfaces:{},samplers:{}};for(let C=0,T=M.childNodes.length;C<T;C++){const P=M.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"newparam":vt(P,v);break;case"technique":v.technique=Z(P);break;case"extra":v.extra=he(P);break}}return v}function vt(M,v){const C=M.getAttribute("sid");for(let T=0,P=M.childNodes.length;T<P;T++){const re=M.childNodes[T];if(re.nodeType===1)switch(re.nodeName){case"surface":v.surfaces[C]=O(re);break;case"sampler2D":v.samplers[C]=z(re);break}}}function O(M){const v={};for(let C=0,T=M.childNodes.length;C<T;C++){const P=M.childNodes[C];P.nodeType===1&&P.nodeName==="init_from"&&(v.init_from=P.textContent)}return v}function z(M){const v={};for(let C=0,T=M.childNodes.length;C<T;C++){const P=M.childNodes[C];P.nodeType===1&&P.nodeName==="source"&&(v.source=P.textContent)}return v}function Z(M){const v={};for(let C=0,T=M.childNodes.length;C<T;C++){const P=M.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"constant":case"lambert":case"blinn":case"phong":v.type=P.nodeName,v.parameters=le(P);break;case"extra":v.extra=he(P);break}}return v}function le(M){const v={};for(let C=0,T=M.childNodes.length;C<T;C++){const P=M.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":v[P.nodeName]=se(P);break;case"transparent":v[P.nodeName]={opaque:P.hasAttribute("opaque")?P.getAttribute("opaque"):"A_ONE",data:se(P)};break}}return v}function se(M){const v={};for(let C=0,T=M.childNodes.length;C<T;C++){const P=M.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"color":v[P.nodeName]=r(P.textContent);break;case"float":v[P.nodeName]=parseFloat(P.textContent);break;case"texture":v[P.nodeName]={id:P.getAttribute("texture"),extra:ce(P)};break}}return v}function ce(M){const v={technique:{}};for(let C=0,T=M.childNodes.length;C<T;C++){const P=M.childNodes[C];P.nodeType===1&&P.nodeName==="extra"&&U(P,v)}return v}function U(M,v){for(let C=0,T=M.childNodes.length;C<T;C++){const P=M.childNodes[C];P.nodeType===1&&P.nodeName==="technique"&&_e(P,v)}}function _e(M,v){for(let C=0,T=M.childNodes.length;C<T;C++){const P=M.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":v.technique[P.nodeName]=parseFloat(P.textContent);break;case"wrapU":case"wrapV":P.textContent.toUpperCase()==="TRUE"?v.technique[P.nodeName]=1:P.textContent.toUpperCase()==="FALSE"?v.technique[P.nodeName]=0:v.technique[P.nodeName]=parseInt(P.textContent);break;case"bump":v[P.nodeName]=fe(P);break}}}function he(M){const v={};for(let C=0,T=M.childNodes.length;C<T;C++){const P=M.childNodes[C];P.nodeType===1&&P.nodeName==="technique"&&(v.technique=ae(P))}return v}function ae(M){const v={};for(let C=0,T=M.childNodes.length;C<T;C++){const P=M.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"double_sided":v[P.nodeName]=parseInt(P.textContent);break;case"bump":v[P.nodeName]=fe(P);break}}return v}function fe(M){const v={};for(let C=0,T=M.childNodes.length;C<T;C++){const P=M.childNodes[C];P.nodeType===1&&P.nodeName==="texture"&&(v[P.nodeName]={id:P.getAttribute("texture"),texcoord:P.getAttribute("texcoord"),extra:ce(P)})}return v}function A(M){return M}function g(M){return y(je.effects[M],A)}function k(M){const v={name:M.getAttribute("name")};for(let C=0,T=M.childNodes.length;C<T;C++){const P=M.childNodes[C];P.nodeType===1&&P.nodeName==="instance_effect"&&(v.url=a(P.getAttribute("url")))}je.materials[M.getAttribute("id")]=v}function J(M){let v,C=M.slice((M.lastIndexOf(".")-1>>>0)+2);return C=C.toLowerCase(),C==="tga"?v=en:v=fi,v}function oe(M){const v=g(M.url),C=v.profile.technique;let T;switch(C.type){case"phong":case"blinn":T=new nr;break;case"lambert":T=new ex;break;default:T=new ma;break}T.name=M.name||"";function P(Re,He=null){const Je=v.profile.samplers[Re.id];let ve=null;if(Je!==void 0){const Ze=v.profile.surfaces[Je.source];ve=Se(Ze.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),ve=Se(Re.id);if(ve!==null){const Ze=J(ve);if(Ze!==void 0){const Ye=Ze.load(ve),it=Re.extra;if(it!==void 0&&it.technique!==void 0&&c(it.technique)===!1){const et=it.technique;Ye.wrapS=et.wrapU?fs:Ln,Ye.wrapT=et.wrapV?fs:Ln,Ye.offset.set(et.offsetU||0,et.offsetV||0),Ye.repeat.set(et.repeatU||1,et.repeatV||1)}else Ye.wrapS=fs,Ye.wrapT=fs;return He!==null&&(Ye.colorSpace=He),Ye}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",ve),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",Re.id),null}const re=C.parameters;for(const Re in re){const He=re[Re];switch(Re){case"diffuse":He.color&&T.color.fromArray(He.color),He.texture&&(T.map=P(He.texture,Ht));break;case"specular":He.color&&T.specular&&T.specular.fromArray(He.color),He.texture&&(T.specularMap=P(He.texture));break;case"bump":He.texture&&(T.normalMap=P(He.texture));break;case"ambient":He.texture&&(T.lightMap=P(He.texture,Ht));break;case"shininess":He.float&&T.shininess&&(T.shininess=He.float);break;case"emission":He.color&&T.emissive&&T.emissive.fromArray(He.color),He.texture&&(T.emissiveMap=P(He.texture,Ht));break}}xt.colorSpaceToWorking(T.color,Ht),T.specular&&xt.colorSpaceToWorking(T.specular,Ht),T.emissive&&xt.colorSpaceToWorking(T.emissive,Ht);let ue=re.transparent,qe=re.transparency;if(qe===void 0&&ue&&(qe={float:1}),ue===void 0&&qe&&(ue={opaque:"A_ONE",data:{color:[1,1,1,1]}}),ue&&qe)if(ue.data.texture)T.transparent=!0;else{const Re=ue.data.color;switch(ue.opaque){case"A_ONE":T.opacity=Re[3]*qe.float;break;case"RGB_ZERO":T.opacity=1-Re[0]*qe.float;break;case"A_ZERO":T.opacity=1-Re[3]*qe.float;break;case"RGB_ONE":T.opacity=Re[0]*qe.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',ue.opaque)}T.opacity<1&&(T.transparent=!0)}if(C.extra!==void 0&&C.extra.technique!==void 0){const Re=C.extra.technique;for(const He in Re){const Je=Re[He];switch(He){case"double_sided":T.side=Je===1?ii:Pi;break;case"bump":T.normalMap=P(Je.texture),T.normalScale=new ot(1,1);break}}}return T}function $(M){return y(je.materials[M],oe)}function Ie(M){const v={name:M.getAttribute("name")};for(let C=0,T=M.childNodes.length;C<T;C++){const P=M.childNodes[C];P.nodeType===1&&P.nodeName==="optics"&&(v.optics=Me(P))}je.cameras[M.getAttribute("id")]=v}function Me(M){for(let v=0;v<M.childNodes.length;v++){const C=M.childNodes[v];if(C.nodeName==="technique_common")return Be(C)}return{}}function Be(M){const v={};for(let C=0;C<M.childNodes.length;C++){const T=M.childNodes[C];switch(T.nodeName){case"perspective":case"orthographic":v.technique=T.nodeName,v.parameters=Ke(T);break}}return v}function Ke(M){const v={};for(let C=0;C<M.childNodes.length;C++){const T=M.childNodes[C];switch(T.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":v[T.nodeName]=parseFloat(T.textContent);break}}return v}function xe(M){let v;switch(M.optics.technique){case"perspective":v=new cn(M.optics.parameters.yfov,M.optics.parameters.aspect_ratio,M.optics.parameters.znear,M.optics.parameters.zfar);break;case"orthographic":let C=M.optics.parameters.ymag,T=M.optics.parameters.xmag;const P=M.optics.parameters.aspect_ratio;T=T===void 0?C*P:T,C=C===void 0?T/P:C,T*=.5,C*=.5,v=new Oa(-T,T,C,-C,M.optics.parameters.znear,M.optics.parameters.zfar);break;default:v=new cn;break}return v.name=M.name||"",v}function Ae(M){const v=je.cameras[M];return v!==void 0?y(v,xe):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",M),null)}function Pe(M){let v={};for(let C=0,T=M.childNodes.length;C<T;C++){const P=M.childNodes[C];P.nodeType===1&&P.nodeName==="technique_common"&&(v=Ve(P))}je.lights[M.getAttribute("id")]=v}function Ve(M){const v={};for(let C=0,T=M.childNodes.length;C<T;C++){const P=M.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"directional":case"point":case"spot":case"ambient":v.technique=P.nodeName,v.parameters=Te(P)}}return v}function Te(M){const v={};for(let C=0,T=M.childNodes.length;C<T;C++){const P=M.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"color":const re=r(P.textContent);v.color=new ht().fromArray(re),xt.colorSpaceToWorking(v.color,Ht);break;case"falloff_angle":v.falloffAngle=parseFloat(P.textContent);break;case"quadratic_attenuation":const ue=parseFloat(P.textContent);v.distance=ue?Math.sqrt(1/ue):0;break}}return v}function at(M){let v;switch(M.technique){case"directional":v=new yp;break;case"point":v=new _x;break;case"spot":v=new mx;break;case"ambient":v=new Sp;break}return M.parameters.color&&v.color.copy(M.parameters.color),M.parameters.distance&&(v.distance=M.parameters.distance),v}function G(M){const v=je.lights[M];return v!==void 0?y(v,at):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",M),null)}function Fe(M){const v={name:M.getAttribute("name"),sources:{},vertices:{},primitives:[]},C=i(M,"mesh")[0];if(C!==void 0){for(let T=0;T<C.childNodes.length;T++){const P=C.childNodes[T];if(P.nodeType!==1)continue;const re=P.getAttribute("id");switch(P.nodeName){case"source":v.sources[re]=be(P);break;case"vertices":v.vertices=Ge(P);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",P.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":v.primitives.push(ye(P));break;default:console.log(P)}}je.geometries[M.getAttribute("id")]=v}}function be(M){const v={array:[],stride:3};for(let C=0;C<M.childNodes.length;C++){const T=M.childNodes[C];if(T.nodeType===1)switch(T.nodeName){case"float_array":v.array=r(T.textContent);break;case"Name_array":v.array=s(T.textContent);break;case"technique_common":const P=i(T,"accessor")[0];P!==void 0&&(v.stride=parseInt(P.getAttribute("stride")));break}}return v}function Ge(M){const v={};for(let C=0;C<M.childNodes.length;C++){const T=M.childNodes[C];T.nodeType===1&&(v[T.getAttribute("semantic")]=a(T.getAttribute("source")))}return v}function ye(M){const v={type:M.nodeName,material:M.getAttribute("material"),count:parseInt(M.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let C=0,T=M.childNodes.length;C<T;C++){const P=M.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"input":const re=a(P.getAttribute("source")),ue=P.getAttribute("semantic"),qe=parseInt(P.getAttribute("offset")),Re=parseInt(P.getAttribute("set")),He=Re>0?ue+Re:ue;v.inputs[He]={id:re,offset:qe},v.stride=Math.max(v.stride,qe+1),ue==="TEXCOORD"&&(v.hasUV=!0);break;case"vcount":v.vcount=o(P.textContent);break;case"p":v.p=o(P.textContent);break}}return v}function de(M){const v={};for(let C=0;C<M.length;C++){const T=M[C];v[T.type]===void 0&&(v[T.type]=[]),v[T.type].push(T)}return v}function we(M){let v=0;for(let C=0,T=M.length;C<T;C++)M[C].hasUV===!0&&v++;v>0&&v<M.length&&(M.uvsNeedsFix=!0)}function rt(M){const v={},C=M.sources,T=M.vertices,P=M.primitives;if(P.length===0)return{};const re=de(P);for(const ue in re){const qe=re[ue];we(qe),v[ue]=Nt(qe,C,T)}return v}function Nt(M,v,C){const T={},P={array:[],stride:0},re={array:[],stride:0},ue={array:[],stride:0},qe={array:[],stride:0},Re={array:[],stride:0},He={array:[],stride:4},Je={array:[],stride:4},ve=new Qt,Ze=[];let Ye=0;for(let it=0;it<M.length;it++){const et=M[it],zt=et.inputs;let Dt=0;switch(et.type){case"lines":case"linestrips":Dt=et.count*2;break;case"triangles":Dt=et.count*3;break;case"polylist":for(let bt=0;bt<et.count;bt++){const Et=et.vcount[bt];switch(Et){case 3:Dt+=3;break;case 4:Dt+=6;break;default:Dt+=(Et-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknown primitive type:",et.type)}ve.addGroup(Ye,Dt,it),Ye+=Dt,et.material&&Ze.push(et.material);for(const bt in zt){const Et=zt[bt];switch(bt){case"VERTEX":for(const di in C){const yn=C[di];switch(di){case"POSITION":const bs=P.array.length;if(ft(et,v[yn],Et.offset,P.array),P.stride=v[yn].stride,v.skinWeights&&v.skinIndices&&(ft(et,v.skinIndices,Et.offset,He.array),ft(et,v.skinWeights,Et.offset,Je.array)),et.hasUV===!1&&M.uvsNeedsFix===!0){const Lp=(P.array.length-bs)/P.stride;for(let Iu=0;Iu<Lp;Iu++)ue.array.push(0,0)}break;case"NORMAL":ft(et,v[yn],Et.offset,re.array),re.stride=v[yn].stride;break;case"COLOR":ft(et,v[yn],Et.offset,Re.array),Re.stride=v[yn].stride;break;case"TEXCOORD":ft(et,v[yn],Et.offset,ue.array),ue.stride=v[yn].stride;break;case"TEXCOORD1":ft(et,v[yn],Et.offset,qe.array),ue.stride=v[yn].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',di)}}break;case"NORMAL":ft(et,v[Et.id],Et.offset,re.array),re.stride=v[Et.id].stride;break;case"COLOR":ft(et,v[Et.id],Et.offset,Re.array,!0),Re.stride=v[Et.id].stride;break;case"TEXCOORD":ft(et,v[Et.id],Et.offset,ue.array),ue.stride=v[Et.id].stride;break;case"TEXCOORD1":ft(et,v[Et.id],Et.offset,qe.array),qe.stride=v[Et.id].stride;break}}}return P.array.length>0&&ve.setAttribute("position",new At(P.array,P.stride)),re.array.length>0&&ve.setAttribute("normal",new At(re.array,re.stride)),Re.array.length>0&&ve.setAttribute("color",new At(Re.array,Re.stride)),ue.array.length>0&&ve.setAttribute("uv",new At(ue.array,ue.stride)),qe.array.length>0&&ve.setAttribute("uv1",new At(qe.array,qe.stride)),He.array.length>0&&ve.setAttribute("skinIndex",new At(He.array,He.stride)),Je.array.length>0&&ve.setAttribute("skinWeight",new At(Je.array,Je.stride)),T.data=ve,T.type=M[0].type,T.materialKeys=Ze,T}function ft(M,v,C,T,P=!1){const re=M.p,ue=M.stride,qe=M.vcount;function Re(ve){let Ze=re[ve+C]*Je;const Ye=Ze+Je;for(;Ze<Ye;Ze++)T.push(He[Ze]);if(P){const it=T.length-Je-1;Zn.setRGB(T[it+0],T[it+1],T[it+2],Ht),T[it+0]=Zn.r,T[it+1]=Zn.g,T[it+2]=Zn.b}}const He=v.array,Je=v.stride;if(M.vcount!==void 0){let ve=0;for(let Ze=0,Ye=qe.length;Ze<Ye;Ze++){const it=qe[Ze];if(it===4){const et=ve+ue*0,zt=ve+ue*1,Dt=ve+ue*2,bt=ve+ue*3;Re(et),Re(zt),Re(bt),Re(zt),Re(Dt),Re(bt)}else if(it===3){const et=ve+ue*0,zt=ve+ue*1,Dt=ve+ue*2;Re(et),Re(zt),Re(Dt)}else if(it>4)for(let et=1,zt=it-2;et<=zt;et++){const Dt=ve+ue*0,bt=ve+ue*et,Et=ve+ue*(et+1);Re(Dt),Re(bt),Re(Et)}ve+=ue*it}}else for(let ve=0,Ze=re.length;ve<Ze;ve+=ue)Re(ve)}function Tn(M){return y(je.geometries[M],rt)}function Hn(M){const v={name:M.getAttribute("name")||"",joints:{},links:[]};for(let C=0;C<M.childNodes.length;C++){const T=M.childNodes[C];T.nodeType===1&&T.nodeName==="technique_common"&&vr(T,v)}je.kinematicsModels[M.getAttribute("id")]=v}function za(M){return M.build!==void 0?M.build:M}function ro(M){return y(je.kinematicsModels[M],za)}function vr(M,v){for(let C=0;C<M.childNodes.length;C++){const T=M.childNodes[C];if(T.nodeType===1)switch(T.nodeName){case"joint":v.joints[T.getAttribute("sid")]=Ha(T);break;case"link":v.links.push(Mr(T));break}}}function Ha(M){let v;for(let C=0;C<M.childNodes.length;C++){const T=M.childNodes[C];if(T.nodeType===1)switch(T.nodeName){case"prismatic":case"revolute":v=oo(T);break}}return v}function oo(M){const v={sid:M.getAttribute("sid"),name:M.getAttribute("name")||"",axis:new X,limits:{min:0,max:0},type:M.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let C=0;C<M.childNodes.length;C++){const T=M.childNodes[C];if(T.nodeType===1)switch(T.nodeName){case"axis":const P=r(T.textContent);v.axis.fromArray(P);break;case"limits":const re=T.getElementsByTagName("max")[0],ue=T.getElementsByTagName("min")[0];v.limits.max=parseFloat(re.textContent),v.limits.min=parseFloat(ue.textContent);break}}return v.limits.min>=v.limits.max&&(v.static=!0),v.middlePosition=(v.limits.min+v.limits.max)/2,v}function Mr(M){const v={sid:M.getAttribute("sid"),name:M.getAttribute("name")||"",attachments:[],transforms:[]};for(let C=0;C<M.childNodes.length;C++){const T=M.childNodes[C];if(T.nodeType===1)switch(T.nodeName){case"attachment_full":v.attachments.push(hi(T));break;case"matrix":case"translate":case"rotate":v.transforms.push(Ms(T));break}}return v}function hi(M){const v={joint:M.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let C=0;C<M.childNodes.length;C++){const T=M.childNodes[C];if(T.nodeType===1)switch(T.nodeName){case"link":v.links.push(Mr(T));break;case"matrix":case"translate":case"rotate":v.transforms.push(Ms(T));break}}return v}function Ms(M){const v={type:M.nodeName},C=r(M.textContent);switch(v.type){case"matrix":v.obj=new lt,v.obj.fromArray(C).transpose();break;case"translate":v.obj=new X,v.obj.fromArray(C);break;case"rotate":v.obj=new X,v.obj.fromArray(C),v.angle=Ws.degToRad(C[3]);break}return v}function ao(M){const v={name:M.getAttribute("name")||"",rigidBodies:{}};for(let C=0;C<M.childNodes.length;C++){const T=M.childNodes[C];T.nodeType===1&&T.nodeName==="rigid_body"&&(v.rigidBodies[T.getAttribute("name")]={},lo(T,v.rigidBodies[T.getAttribute("name")]))}je.physicsModels[M.getAttribute("id")]=v}function lo(M,v){for(let C=0;C<M.childNodes.length;C++){const T=M.childNodes[C];T.nodeType===1&&T.nodeName==="technique_common"&&ys(T,v)}}function ys(M,v){for(let C=0;C<M.childNodes.length;C++){const T=M.childNodes[C];if(T.nodeType===1)switch(T.nodeName){case"inertia":v.inertia=r(T.textContent);break;case"mass":v.mass=r(T.textContent)[0];break}}}function co(M){const v={bindJointAxis:[]};for(let C=0;C<M.childNodes.length;C++){const T=M.childNodes[C];T.nodeType===1&&T.nodeName==="bind_joint_axis"&&v.bindJointAxis.push(Ss(T))}je.kinematicsScenes[a(M.getAttribute("url"))]=v}function Ss(M){const v={target:M.getAttribute("target").split("/").pop()};for(let C=0;C<M.childNodes.length;C++){const T=M.childNodes[C];if(T.nodeType===1&&T.nodeName==="axis"){const P=T.getElementsByTagName("param")[0];v.axis=P.textContent;const re=v.axis.split("inst_").pop().split("axis")[0];v.jointIndex=re.substring(0,re.length-1)}}return v}function uo(M){return M.build!==void 0?M.build:M}function ho(M){return y(je.kinematicsScenes[M],uo)}function Ga(){const M=Object.keys(je.kinematicsModels)[0],v=Object.keys(je.kinematicsScenes)[0],C=Object.keys(je.visualScenes)[0];if(M===void 0||v===void 0)return;const T=ro(M),P=ho(v),re=dt(C),ue=P.bindJointAxis,qe={};for(let Je=0,ve=ue.length;Je<ve;Je++){const Ze=ue[Je],Ye=ze.querySelector('[sid="'+Ze.target+'"]');if(Ye){const it=Ye.parentElement;Re(Ze.jointIndex,it)}}function Re(Je,ve){const Ze=ve.getAttribute("name"),Ye=T.joints[Je];re.traverse(function(it){it.name===Ze&&(qe[Je]={object:it,transforms:Wa(ve),joint:Ye,position:Ye.zeroPosition})})}const He=new lt;tn={joints:T&&T.joints,getJointValue:function(Je){const ve=qe[Je];if(ve)return ve.position;console.warn("THREE.ColladaLoader: Joint "+Je+" doesn't exist.")},setJointValue:function(Je,ve){const Ze=qe[Je];if(Ze){const Ye=Ze.joint;if(ve>Ye.limits.max||ve<Ye.limits.min)console.warn("THREE.ColladaLoader: Joint "+Je+" value "+ve+" outside of limits (min: "+Ye.limits.min+", max: "+Ye.limits.max+").");else if(Ye.static)console.warn("THREE.ColladaLoader: Joint "+Je+" is static.");else{const it=Ze.object,et=Ye.axis,zt=Ze.transforms;pn.identity();for(let Dt=0;Dt<zt.length;Dt++){const bt=zt[Dt];if(bt.sid&&bt.sid.indexOf(Je)!==-1)switch(Ye.type){case"revolute":pn.multiply(He.makeRotationAxis(et,Ws.degToRad(ve)));break;case"prismatic":pn.multiply(He.makeTranslation(et.x*ve,et.y*ve,et.z*ve));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Ye.type);break}else switch(bt.type){case"matrix":pn.multiply(bt.obj);break;case"translate":pn.multiply(He.makeTranslation(bt.obj.x,bt.obj.y,bt.obj.z));break;case"scale":pn.scale(bt.obj);break;case"rotate":pn.multiply(He.makeRotationAxis(bt.obj,bt.angle));break}}it.matrix.copy(pn),it.matrix.decompose(it.position,it.quaternion,it.scale),qe[Je].position=ve}}else console.log("THREE.ColladaLoader: "+Je+" does not exist.")}}}function Wa(M){const v=[],C=ze.querySelector('[id="'+M.id+'"]');for(let T=0;T<C.childNodes.length;T++){const P=C.childNodes[T];if(P.nodeType!==1)continue;let re,ue;switch(P.nodeName){case"matrix":re=r(P.textContent);const qe=new lt().fromArray(re).transpose();v.push({sid:P.getAttribute("sid"),type:P.nodeName,obj:qe});break;case"translate":case"scale":re=r(P.textContent),ue=new X().fromArray(re),v.push({sid:P.getAttribute("sid"),type:P.nodeName,obj:ue});break;case"rotate":re=r(P.textContent),ue=new X().fromArray(re);const Re=Ws.degToRad(re[3]);v.push({sid:P.getAttribute("sid"),type:P.nodeName,obj:ue,angle:Re});break}}return v}function Xa(M){const v=M.getElementsByTagName("node");for(let C=0;C<v.length;C++){const T=v[C];T.hasAttribute("id")===!1&&T.setAttribute("id",l())}}const pn=new lt,Ii=new X;function yr(M){const v={name:M.getAttribute("name")||"",type:M.getAttribute("type"),id:M.getAttribute("id"),sid:M.getAttribute("sid"),matrix:new lt,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let C=0;C<M.childNodes.length;C++){const T=M.childNodes[C];if(T.nodeType!==1)continue;let P;switch(T.nodeName){case"node":v.nodes.push(T.getAttribute("id")),yr(T);break;case"instance_camera":v.instanceCameras.push(a(T.getAttribute("url")));break;case"instance_controller":v.instanceControllers.push(w(T));break;case"instance_light":v.instanceLights.push(a(T.getAttribute("url")));break;case"instance_geometry":v.instanceGeometries.push(w(T));break;case"instance_node":v.instanceNodes.push(a(T.getAttribute("url")));break;case"matrix":P=r(T.textContent),v.matrix.multiply(pn.fromArray(P).transpose()),v.transforms[T.getAttribute("sid")]=T.nodeName;break;case"translate":P=r(T.textContent),Ii.fromArray(P),v.matrix.multiply(pn.makeTranslation(Ii.x,Ii.y,Ii.z)),v.transforms[T.getAttribute("sid")]=T.nodeName;break;case"rotate":P=r(T.textContent);const re=Ws.degToRad(P[3]);v.matrix.multiply(pn.makeRotationAxis(Ii.fromArray(P),re)),v.transforms[T.getAttribute("sid")]=T.nodeName;break;case"scale":P=r(T.textContent),v.matrix.scale(Ii.fromArray(P)),v.transforms[T.getAttribute("sid")]=T.nodeName;break;case"extra":break;default:console.log(T)}}return Ne(v.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",v.id):je.nodes[v.id]=v,v}function w(M){const v={id:a(M.getAttribute("url")),materials:{},skeletons:[]};for(let C=0;C<M.childNodes.length;C++){const T=M.childNodes[C];switch(T.nodeName){case"bind_material":const P=T.getElementsByTagName("instance_material");for(let re=0;re<P.length;re++){const ue=P[re],qe=ue.getAttribute("symbol"),Re=ue.getAttribute("target");v.materials[qe]=a(Re)}break;case"skeleton":v.skeletons.push(a(T.textContent));break}}return v}function j(M,v){const C=[],T=[];let P,re,ue;for(P=0;P<M.length;P++){const He=M[P];let Je;if(Ne(He))Je=We(He),ie(Je,v,C);else if(tt(He)){const Ze=je.visualScenes[He].children;for(let Ye=0;Ye<Ze.length;Ye++){const it=Ze[Ye];if(it.type==="JOINT"){const et=We(it.id);ie(et,v,C)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",He)}for(P=0;P<v.length;P++)for(re=0;re<C.length;re++)if(ue=C[re],ue.bone.name===v[P].name){T[P]=ue,ue.processed=!0;break}for(P=0;P<C.length;P++)ue=C[P],ue.processed===!1&&(T.push(ue),ue.processed=!0);const qe=[],Re=[];for(P=0;P<T.length;P++)ue=T[P],qe.push(ue.bone),Re.push(ue.boneInverse);return new wu(qe,Re)}function ie(M,v,C){M.traverse(function(T){if(T.isBone===!0){let P;for(let re=0;re<v.length;re++){const ue=v[re];if(ue.name===T.name){P=ue.boneInverse;break}}P===void 0&&(P=new lt),C.push({bone:T,boneInverse:P,processed:!1})}})}function ne(M){const v=[],C=M.matrix,T=M.nodes,P=M.type,re=M.instanceCameras,ue=M.instanceControllers,qe=M.instanceLights,Re=M.instanceGeometries,He=M.instanceNodes;for(let ve=0,Ze=T.length;ve<Ze;ve++)v.push(We(T[ve]));for(let ve=0,Ze=re.length;ve<Ze;ve++){const Ye=Ae(re[ve]);Ye!==null&&v.push(Ye.clone())}for(let ve=0,Ze=ue.length;ve<Ze;ve++){const Ye=ue[ve],it=Ce(Ye.id),et=Tn(it.id),zt=Xe(et,Ye.materials),Dt=Ye.skeletons,bt=it.skin.joints,Et=j(Dt,bt);for(let di=0,yn=zt.length;di<yn;di++){const bs=zt[di];bs.isSkinnedMesh&&(bs.bind(Et,it.skin.bindMatrix),bs.normalizeSkinWeights()),v.push(bs)}}for(let ve=0,Ze=qe.length;ve<Ze;ve++){const Ye=G(qe[ve]);Ye!==null&&v.push(Ye.clone())}for(let ve=0,Ze=Re.length;ve<Ze;ve++){const Ye=Re[ve],it=Tn(Ye.id),et=Xe(it,Ye.materials);for(let zt=0,Dt=et.length;zt<Dt;zt++)v.push(et[zt])}for(let ve=0,Ze=He.length;ve<Ze;ve++)v.push(We(He[ve]).clone());let Je;if(T.length===0&&v.length===1)Je=v[0];else{Je=P==="JOINT"?new pp:new qs;for(let ve=0;ve<v.length;ve++)Je.add(v[ve])}return Je.name=P==="JOINT"?M.sid:M.name,Je.matrix.copy(C),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je}const K=new ma({name:$i.DEFAULT_MATERIAL_NAME,color:16711935});function De(M,v){const C=[];for(let T=0,P=M.length;T<P;T++){const re=v[M[T]];re===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",M[T]),C.push(K)):C.push($(re))}return C}function Xe(M,v){const C=[];for(const T in M){const P=M[T],re=De(P.materialKeys,v);if(re.length===0&&(T==="lines"||T==="linestrips"?re.push(new fr):re.push(new nr)),T==="lines"||T==="linestrips")for(let He=0,Je=re.length;He<Je;He++){const ve=re[He];if(ve.isMeshPhongMaterial===!0||ve.isMeshLambertMaterial===!0){const Ze=new fr;Ze.color.copy(ve.color),Ze.opacity=ve.opacity,Ze.transparent=ve.transparent,re[He]=Ze}}const ue=P.data.attributes.skinIndex!==void 0,qe=re.length===1?re[0]:re;let Re;switch(T){case"lines":Re=new Na(P.data,qe);break;case"linestrips":Re=new mp(P.data,qe);break;case"triangles":case"polylist":ue?Re=new q0(P.data,qe):Re=new nn(P.data,qe);break}C.push(Re)}return C}function Ne(M){return je.nodes[M]!==void 0}function We(M){return y(je.nodes[M],ne)}function $e(M){const v={name:M.getAttribute("name"),children:[]};Xa(M);const C=i(M,"node");for(let T=0;T<C.length;T++)v.children.push(yr(C[T]));je.visualScenes[M.getAttribute("id")]=v}function st(M){const v=new qs;v.name=M.name;const C=M.children;for(let T=0;T<C.length;T++){const P=C[T];v.add(We(P.id))}return v}function tt(M){return je.visualScenes[M]!==void 0}function dt(M){return y(je.visualScenes[M],st)}function wt(M){const v=i(M,"instance_visual_scene")[0];return dt(a(v.getAttribute("url")))}function Bt(){const M=je.clips;if(c(M)===!0){if(c(je.animations)===!1){const v=[];for(const C in je.animations){const T=E(C);for(let P=0,re=T.length;P<re;P++)v.push(T[P])}Tt.push(new ef("default",-1,v))}}else for(const v in M)Tt.push(Y(v))}function kt(M){let v="";const C=[M];for(;C.length;){const T=C.shift();T.nodeType===Node.TEXT_NODE?v+=T.textContent:(v+=`
`,C.push(...T.childNodes))}return v.trim()}if(e.length===0)return{scene:new dp};const Rt=new DOMParser().parseFromString(e,"application/xml"),ze=i(Rt,"COLLADA")[0],St=Rt.getElementsByTagName("parsererror")[0];if(St!==void 0){const M=i(St,"div")[0];let v;return M?v=M.textContent:v=kt(St),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,v),null}const yt=ze.getAttribute("version");console.debug("THREE.ColladaLoader: File version",yt);const rn=u(i(ze,"asset")[0]),fi=new Mp(this.manager);fi.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let en;Nf&&(en=new Nf(this.manager),en.setPath(this.resourcePath||t));const Zn=new ht,Tt=[];let tn={},Mn=0;const je={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};p(ze,"library_animations","animation",m),p(ze,"library_animation_clips","animation_clip",V),p(ze,"library_controllers","controller",pe),p(ze,"library_images","image",q),p(ze,"library_effects","effect",Qe),p(ze,"library_materials","material",k),p(ze,"library_cameras","camera",Ie),p(ze,"library_lights","light",Pe),p(ze,"library_geometries","geometry",Fe),p(ze,"library_nodes","node",yr),p(ze,"library_visual_scenes","visual_scene",$e),p(ze,"library_kinematics_models","kinematics_model",Hn),p(ze,"library_physics_models","physics_model",ao),p(ze,"scene","instance_kinematics_scene",co),_(je.animations,D),_(je.clips,W),_(je.controllers,Ee),_(je.images,Q),_(je.effects,A),_(je.materials,oe),_(je.cameras,xe),_(je.lights,at),_(je.geometries,rt),_(je.visualScenes,st),Bt(),Ga();const qt=wt(i(ze,"scene")[0]);return qt.animations=Tt,rn.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),qt.rotation.set(-Math.PI/2,0,0)),qt.scale.multiplyScalar(rn.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),Tt},kinematics:tn,library:je,scene:qt}}}const If=new X,Fb=new In,Wo=new lt,zi=new lt,Xo=new Kn,qo=new X(1,1,1),jo=new X;class Va extends Gt{constructor(...e){super(...e),this.urdfNode=null,this.urdfName=""}copy(e,t){return super.copy(e,t),this.urdfNode=e.urdfNode,this.urdfName=e.urdfName,this}}class Ob extends Va{constructor(...e){super(...e),this.isURDFCollider=!0,this.type="URDFCollider"}}class Bb extends Va{constructor(...e){super(...e),this.isURDFVisual=!0,this.type="URDFVisual"}}class Pp extends Va{constructor(...e){super(...e),this.isURDFLink=!0,this.type="URDFLink"}}class Dp extends Va{get jointType(){return this._jointType}set jointType(e){if(this.jointType!==e)switch(this._jointType=e,this.matrixWorldNeedsUpdate=!0,e){case"fixed":this.jointValue=[];break;case"continuous":case"revolute":case"prismatic":this.jointValue=new Array(1).fill(0);break;case"planar":this.jointValue=new Array(3).fill(0),this.axis=new X(0,0,1);break;case"floating":this.jointValue=new Array(6).fill(0);break}}get angle(){return this.jointValue[0]}constructor(...e){super(...e),this.isURDFJoint=!0,this.type="URDFJoint",this.jointValue=null,this.jointType="fixed",this.axis=new X(1,0,0),this.limit={lower:0,upper:0},this.ignoreLimits=!1,this.origPosition=null,this.origQuaternion=null,this.mimicJoints=[]}copy(e,t){return super.copy(e,t),this.jointType=e.jointType,this.axis=e.axis.clone(),this.limit.lower=e.limit.lower,this.limit.upper=e.limit.upper,this.ignoreLimits=!1,this.jointValue=[...e.jointValue],this.origPosition=e.origPosition?e.origPosition.clone():null,this.origQuaternion=e.origQuaternion?e.origQuaternion.clone():null,this.mimicJoints=[...e.mimicJoints],this}setJointValue(...e){e=e.map(i=>i===null?null:parseFloat(i)),(!this.origPosition||!this.origQuaternion)&&(this.origPosition=this.position.clone(),this.origQuaternion=this.quaternion.clone());let t=!1;switch(this.mimicJoints.forEach(i=>{t=i.updateFromMimickedJoint(...e)||t}),this.jointType){case"fixed":return t;case"continuous":case"revolute":{let i=e[0];return i==null||i===this.jointValue[0]?t:(!this.ignoreLimits&&this.jointType==="revolute"&&(i=Math.min(this.limit.upper,i),i=Math.max(this.limit.lower,i)),this.quaternion.setFromAxisAngle(this.axis,i).premultiply(this.origQuaternion),this.jointValue[0]!==i?(this.jointValue[0]=i,this.matrixWorldNeedsUpdate=!0,!0):t)}case"prismatic":{let i=e[0];return i==null||i===this.jointValue[0]?t:(this.ignoreLimits||(i=Math.min(this.limit.upper,i),i=Math.max(this.limit.lower,i)),this.position.copy(this.origPosition),If.copy(this.axis).applyEuler(this.rotation),this.position.addScaledVector(If,i),this.jointValue[0]!==i?(this.jointValue[0]=i,this.matrixWorldNeedsUpdate=!0,!0):t)}case"floating":return this.jointValue.every((i,s)=>e[s]===i||e[s]===null)?t:(this.jointValue[0]=e[0]!==null?e[0]:this.jointValue[0],this.jointValue[1]=e[1]!==null?e[1]:this.jointValue[1],this.jointValue[2]=e[2]!==null?e[2]:this.jointValue[2],this.jointValue[3]=e[3]!==null?e[3]:this.jointValue[3],this.jointValue[4]=e[4]!==null?e[4]:this.jointValue[4],this.jointValue[5]=e[5]!==null?e[5]:this.jointValue[5],zi.compose(this.origPosition,this.origQuaternion,qo),Xo.setFromEuler(Fb.set(this.jointValue[3],this.jointValue[4],this.jointValue[5],"XYZ")),jo.set(this.jointValue[0],this.jointValue[1],this.jointValue[2]),Wo.compose(jo,Xo,qo),zi.premultiply(Wo),this.position.setFromMatrixPosition(zi),this.rotation.setFromRotationMatrix(zi),this.matrixWorldNeedsUpdate=!0,!0);case"planar":return this.jointValue.every((i,s)=>e[s]===i||e[s]===null)?t:(this.jointValue[0]=e[0]!==null?e[0]:this.jointValue[0],this.jointValue[1]=e[1]!==null?e[1]:this.jointValue[1],this.jointValue[2]=e[2]!==null?e[2]:this.jointValue[2],zi.compose(this.origPosition,this.origQuaternion,qo),Xo.setFromAxisAngle(this.axis,this.jointValue[2]),jo.set(this.jointValue[0],this.jointValue[1],0),Wo.compose(jo,Xo,qo),zi.premultiply(Wo),this.position.setFromMatrixPosition(zi),this.rotation.setFromRotationMatrix(zi),this.matrixWorldNeedsUpdate=!0,!0)}return t}}class Uf extends Dp{constructor(...e){super(...e),this.type="URDFMimicJoint",this.mimicJoint=null,this.offset=0,this.multiplier=1}updateFromMimickedJoint(...e){const t=e.map(i=>i*this.multiplier+this.offset);return super.setJointValue(...t)}copy(e,t){return super.copy(e,t),this.mimicJoint=e.mimicJoint,this.offset=e.offset,this.multiplier=e.multiplier,this}}class kb extends Pp{constructor(...e){super(...e),this.isURDFRobot=!0,this.urdfNode=null,this.urdfRobotNode=null,this.robotName=null,this.links=null,this.joints=null,this.colliders=null,this.visual=null,this.frames=null}copy(e,t){super.copy(e,t),this.urdfRobotNode=e.urdfRobotNode,this.robotName=e.robotName,this.links={},this.joints={},this.colliders={},this.visual={},this.traverse(i=>{i.isURDFJoint&&i.urdfName in e.joints&&(this.joints[i.urdfName]=i),i.isURDFLink&&i.urdfName in e.links&&(this.links[i.urdfName]=i),i.isURDFCollider&&i.urdfName in e.colliders&&(this.colliders[i.urdfName]=i),i.isURDFVisual&&i.urdfName in e.visual&&(this.visual[i.urdfName]=i)});for(const i in this.joints)this.joints[i].mimicJoints=this.joints[i].mimicJoints.map(s=>this.joints[s.name]);return this.frames={...this.colliders,...this.visual,...this.links,...this.joints},this}getFrame(e){return this.frames[e]}setJointValue(e,...t){const i=this.joints[e];return i?i.setJointValue(...t):!1}setJointValues(e){let t=!1;for(const i in e){const s=e[i];Array.isArray(s)?t=this.setJointValue(i,...s)||t:t=this.setJointValue(i,s)||t}return t}}const kl=new Kn,Ff=new In;function Vs(n){return n?n.trim().split(/\s+/g).map(e=>parseFloat(e)):[0,0,0]}function Of(n,e,t=!1){t||n.rotation.set(0,0,0),Ff.set(e[0],e[1],e[2],"ZYX"),kl.setFromEuler(Ff),kl.multiply(n.quaternion),n.quaternion.copy(kl)}class Vb{constructor(e){this.manager=e||vp,this.loadMeshCb=this.defaultMeshLoader.bind(this),this.parseVisual=!0,this.parseCollision=!1,this.packages="",this.workingPath="",this.fetchOptions={}}loadAsync(e){return new Promise((t,i)=>{this.load(e,t,null,i)})}load(e,t,i,s){const r=this.manager,o=bp.extractUrlBase(e),a=this.manager.resolveURL(e);r.itemStart(a),fetch(a,this.fetchOptions).then(l=>{if(l.ok)return i&&i(null),l.text();throw new Error(`URDFLoader: Failed to load url '${a}' with error code ${l.status} : ${l.statusText}.`)}).then(l=>{const c=this.parse(l,this.workingPath||o);t(c),r.itemEnd(a)}).catch(l=>{s?s(l):console.error("URDFLoader: Error loading file.",l),r.itemError(a),r.itemEnd(a)})}parse(e,t=this.workingPath){const i=this.packages,s=this.loadMeshCb,r=this.parseVisual,o=this.parseCollision,a=this.manager,l={},c={},u={};function h(R){if(!/^package:\/\//.test(R))return t?t+R:R;const[D,E]=R.replace(/^package:\/\//,"").split(/\/(.+)/);if(typeof i=="string")return i.endsWith(D)?i+"/"+E:i+"/"+D+"/"+E;if(i instanceof Function)return i(D)+"/"+E;if(typeof i=="object")return D in i?i[D]+"/"+E:(console.error(`URDFLoader : ${D} not found in provided package list.`),null)}function f(R){let D;R instanceof Document?D=[...R.children]:R instanceof Element?D=[R]:D=[...new DOMParser().parseFromString(R,"text/xml").children];const E=D.filter(b=>b.nodeName==="robot").pop();return p(E)}function p(R){const D=[...R.children],E=D.filter(N=>N.nodeName.toLowerCase()==="link"),b=D.filter(N=>N.nodeName.toLowerCase()==="joint"),L=D.filter(N=>N.nodeName.toLowerCase()==="material"),I=new kb;I.robotName=R.getAttribute("name"),I.urdfRobotNode=R,L.forEach(N=>{const B=N.getAttribute("name");u[B]=m(N)});const F={},x={};E.forEach(N=>{const B=N.getAttribute("name"),H=R.querySelector(`child[link="${B}"]`)===null;l[B]=y(N,F,x,H?I:null)}),b.forEach(N=>{const B=N.getAttribute("name");c[B]=_(N)}),I.joints=c,I.links=l,I.colliders=x,I.visual=F;const S=Object.values(c);return S.forEach(N=>{N instanceof Uf&&c[N.mimicJoint].mimicJoints.push(N)}),S.forEach(N=>{const B=new Set,H=te=>{if(B.has(te))throw new Error("URDFLoader: Detected an infinite loop of mimic joints.");B.add(te),te.mimicJoints.forEach(ee=>{H(ee)})};H(N)}),I.frames={...x,...F,...l,...c},I}function _(R){const D=[...R.children],E=R.getAttribute("type");let b;const L=D.find(B=>B.nodeName.toLowerCase()==="mimic");L?(b=new Uf,b.mimicJoint=L.getAttribute("joint"),b.multiplier=parseFloat(L.getAttribute("multiplier")||1),b.offset=parseFloat(L.getAttribute("offset")||0)):b=new Dp,b.urdfNode=R,b.name=R.getAttribute("name"),b.urdfName=b.name,b.jointType=E;let I=null,F=null,x=[0,0,0],S=[0,0,0];D.forEach(B=>{const H=B.nodeName.toLowerCase();H==="origin"?(x=Vs(B.getAttribute("xyz")),S=Vs(B.getAttribute("rpy"))):H==="child"?F=l[B.getAttribute("link")]:H==="parent"?I=l[B.getAttribute("link")]:H==="limit"&&(b.limit.lower=parseFloat(B.getAttribute("lower")||b.limit.lower),b.limit.upper=parseFloat(B.getAttribute("upper")||b.limit.upper))}),I.add(b),b.add(F),Of(b,S),b.position.set(x[0],x[1],x[2]);const N=D.filter(B=>B.nodeName.toLowerCase()==="axis")[0];if(N){const B=N.getAttribute("xyz").split(/\s+/g).map(H=>parseFloat(H));b.axis=new X(B[0],B[1],B[2]),b.axis.normalize()}return b}function y(R,D,E,b=null){b===null&&(b=new Pp);const L=[...R.children];return b.name=R.getAttribute("name"),b.urdfName=b.name,b.urdfNode=R,r&&L.filter(F=>F.nodeName.toLowerCase()==="visual").forEach(F=>{const x=d(F,u);if(b.add(x),F.hasAttribute("name")){const S=F.getAttribute("name");x.name=S,x.urdfName=S,D[S]=x}}),o&&L.filter(F=>F.nodeName.toLowerCase()==="collision").forEach(F=>{const x=d(F);if(b.add(x),F.hasAttribute("name")){const S=F.getAttribute("name");x.name=S,x.urdfName=S,E[S]=x}}),b}function m(R){const D=[...R.children],E=new nr;return E.name=R.getAttribute("name")||"",D.forEach(b=>{const L=b.nodeName.toLowerCase();if(L==="color"){const I=b.getAttribute("rgba").split(/\s/g).map(F=>parseFloat(F));E.color.setRGB(I[0],I[1],I[2]),E.opacity=I[3],E.transparent=I[3]<1,E.depthWrite=!E.transparent}else if(L==="texture"){const I=b.getAttribute("filename");if(I){const F=new Mp(a),x=h(I);E.map=F.load(x),E.map.colorSpace=Ht}}}),E}function d(R,D={}){const E=R.nodeName.toLowerCase()==="collision",b=[...R.children];let L=null;const I=b.filter(x=>x.nodeName.toLowerCase()==="material")[0];if(I){const x=I.getAttribute("name");x&&x in D?L=D[x]:L=m(I)}else L=new nr;const F=E?new Ob:new Bb;return F.urdfNode=R,b.forEach(x=>{const S=x.nodeName.toLowerCase();if(S==="geometry"){const N=x.children[0].nodeName.toLowerCase();if(N==="mesh"){const B=x.children[0].getAttribute("filename"),H=h(B);if(H!==null){const te=x.children[0].getAttribute("scale");if(te){const ee=Vs(te);F.scale.set(ee[0],ee[1],ee[2])}s(H,a,(ee,V)=>{V?console.error("URDFLoader: Error loading mesh.",V):ee&&(ee instanceof nn&&(ee.material=L),ee.position.set(0,0,0),ee.quaternion.identity(),F.add(ee))})}}else if(N==="box"){const B=new nn;B.geometry=new vs(1,1,1),B.material=L;const H=Vs(x.children[0].getAttribute("size"));B.scale.set(H[0],H[1],H[2]),F.add(B)}else if(N==="sphere"){const B=new nn;B.geometry=new Pu(1,30,30),B.material=L;const H=parseFloat(x.children[0].getAttribute("radius"))||0;B.scale.set(H,H,H),F.add(B)}else if(N==="cylinder"){const B=new nn;B.geometry=new Cu(1,1,1,30),B.material=L;const H=parseFloat(x.children[0].getAttribute("radius"))||0,te=parseFloat(x.children[0].getAttribute("length"))||0;B.scale.set(H,te,H),B.rotation.set(Math.PI/2,0,0),F.add(B)}}else if(S==="origin"){const N=Vs(x.getAttribute("xyz")),B=Vs(x.getAttribute("rpy"));F.position.set(N[0],N[1],N[2]),F.rotation.set(0,0,0),Of(F,B)}}),F}return f(e)}defaultMeshLoader(e,t,i){/\.stl$/i.test(e)?new Ib(t).load(e,r=>{const o=new nn(r,new nr);i(o)}):/\.dae$/i.test(e)?new Ub(t).load(e,r=>i(r.scene)):console.warn(`URDFLoader: Could not load model at ${e}.
No loader available`)}}const zb=eo({__name:"ThreeViewer",props:{selectedNode:{}},emits:["urdf-loaded","node-selected"],setup(n,{expose:e,emit:t}){const i=n,s=t,r=ls(null);let o,a,l,c,u,h=null,f,p,_=[];const y=()=>{if(!r.value)return;o=new dp,o.background=new ht(2503224),a=new cn(75,r.value.clientWidth/r.value.clientHeight,.1,1e3),a.position.set(3,-3,3),a.up.set(0,0,1),a.lookAt(0,0,0),l=new vb({antialias:!0}),l.setSize(r.value.clientWidth,r.value.clientHeight),l.setPixelRatio(window.devicePixelRatio),r.value.appendChild(l.domElement),c=new yb(a,l.domElement),c.enableDamping=!0,c.dampingFactor=.05;const x=new Sp(16777215,.5);o.add(x);const S=new yp(16777215,.8);S.position.set(5,-5,10),o.add(S);const N=new yx(10,10);N.rotation.x=Math.PI/2,o.add(N);const B=new Sx(2);o.add(B),f=new Mx,p=new ot,window.addEventListener("resize",m),l.domElement.addEventListener("click",R),d()},m=()=>{r.value&&(a.aspect=r.value.clientWidth/r.value.clientHeight,a.updateProjectionMatrix(),l.setSize(r.value.clientWidth,r.value.clientHeight))},d=()=>{u=requestAnimationFrame(d),c.update(),l.render(o,a)},R=x=>{if(!r.value||!h)return;const S=r.value.getBoundingClientRect();p.x=(x.clientX-S.left)/S.width*2-1,p.y=-((x.clientY-S.top)/S.height)*2+1,f.setFromCamera(p,a);const N=f.intersectObject(h,!0);if(N.length>0){const B=N[0];if(B&&B.object){const H=B.object,te=D(H);if(te){s("node-selected",te);return}}}s("node-selected",null)},D=x=>{let S=x;for(;S;){if(S.userData.urdfNode)return S.userData.urdfNode;S=S.parent}return null},E=()=>{_.forEach(x=>{o.remove(x)}),_=[]},b=x=>{E(),!(!x||!x.object3D)&&x.object3D.traverse(S=>{if(S.isMesh&&S.geometry){const N=new J0(S.geometry),B=new fr({color:65280,linewidth:2}),H=new Na(N,B);S.getWorldPosition(H.position),S.getWorldQuaternion(H.quaternion),S.getWorldScale(H.scale),o.add(H),_.push(H)}})};$o(()=>i.selectedNode,x=>{b(x??null)});const L=x=>{const S=N=>{const B={name:N.name||"unnamed",type:N.isURDFRobot?"robot":N.isURDFLink?"link":N.isURDFJoint?"joint":"link",children:[],properties:{},object3D:N};return N.userData=N.userData||{},N.userData.urdfNode=B,N.isURDFJoint&&N.jointType&&(B.properties.type=N.jointType,N.axis&&(B.properties.axis=[N.axis.x,N.axis.y,N.axis.z])),N.position&&(B.properties.position=[N.position.x,N.position.y,N.position.z]),N.rotation&&(B.properties.rotation=[N.rotation.x,N.rotation.y,N.rotation.z]),N.children&&N.children.forEach(H=>{(H.isURDFLink||H.isURDFJoint)&&B.children.push(S(H))}),B};return S(x)};e({loadURDFContent:(x,S)=>{h&&(o.remove(h),h=null);const N=new Vb;N.loadMeshCb=(H,te,ee)=>{const V=new vs(.1,.1,.1),W=new nr({color:13421772}),Y=new nn(V,W);ee(Y)},h=N.parse(x),o.add(h);const B=L(h);s("urdf-loaded",B)}});const F=()=>{u&&cancelAnimationFrame(u),window.removeEventListener("resize",m),l&&l.domElement&&l.domElement.removeEventListener("click",R),E(),l&&l.dispose(),r.value&&l&&r.value.removeChild(l.domElement)};return au(()=>{y()}),lu(()=>{F()}),(x,S)=>(Jt(),vn("div",{ref_key:"canvasContainer",ref:r,class:"three-viewer"},null,512))}}),Hb=no(zb,[["__scopeId","data-v-8759f415"]]),Gb={class:"properties-panel"},Wb={class:"panel-content"},Xb={key:0,class:"empty-state"},qb={key:1,class:"properties-list"},jb={class:"property-key"},Yb={class:"property-value"},Kb=eo({__name:"PropertiesPanel",props:{node:{}},setup(n){const e=n,t=rr(()=>e.node!==null),i=rr(()=>{if(!e.node)return[];const s=[];if(s.push({key:"Name",value:e.node.name}),s.push({key:"Type",value:e.node.type}),e.node.properties)for(const[r,o]of Object.entries(e.node.properties))s.push({key:r.charAt(0).toUpperCase()+r.slice(1),value:typeof o=="object"?JSON.stringify(o,null,2):String(o)});return s});return(s,r)=>(Jt(),vn("aside",Gb,[r[1]||(r[1]=Mt("div",{class:"panel-header"},[Mt("h2",null,"Properties")],-1)),Mt("div",Wb,[t.value?(Jt(),vn("div",qb,[(Jt(!0),vn(Fn,null,vd(i.value,o=>(Jt(),vn("div",{key:o.key,class:"property-item"},[Mt("div",jb,Ks(o.key),1),Mt("div",Yb,Ks(o.value),1)]))),128))])):(Jt(),vn("div",Xb,[...r[0]||(r[0]=[Mt("p",null,"No component selected",-1),Mt("p",{class:"hint"},"Select a component from the hierarchy to view its properties",-1)])]))])]))}}),$b=no(Kb,[["__scopeId","data-v-83e95173"]]),Zb={class:"urdf-editor"},Jb={class:"toolbar"},Qb={class:"toolbar-actions"},eE={class:"upload-dropdown"},tE={key:0,class:"dropdown-menu"},nE={class:"editor-container"},iE=eo({__name:"App",setup(n){const e=ls(null),t=ls(null),i=ls(!1),s=ls(!1),r=ls(""),o=ls(null),a=b=>{e.value===b?e.value=null:e.value=b},l=b=>{e.value=b},c=b=>{t.value=b,e.value=null},u=()=>{i.value=!i.value},h=()=>{i.value=!1},f=b=>{b.target.closest(".upload-dropdown")||h()};au(()=>{document.addEventListener("click",f)}),lu(()=>{document.removeEventListener("click",f)});const p=()=>{h(),document.getElementById("file-upload")?.click()},_=()=>{h(),s.value=!0},y=()=>{s.value=!1,r.value=""},m=async()=>{if(r.value.trim())try{const b=await fetch(r.value);if(!b.ok)throw new Error(`HTTP error! status: ${b.status}`);const L=await b.text(),I=r.value.split("/"),F=I[I.length-1]||"loaded_from_url.urdf";o.value&&o.value.loadURDFContent(L,F),s.value=!1,r.value=""}catch(b){console.error("Error loading URDF from URL:",b),alert(`Failed to load URDF from URL: ${b}`),s.value=!1,r.value=""}},d=b=>{const L=b.target;if(L.files&&L.files[0]){const I=L.files[0],F=new FileReader;F.onload=x=>{const S=x.target?.result;if(o.value)try{o.value.loadURDFContent(S,I.name)}catch(N){console.error("Error loading URDF:",N),alert(`Failed to load URDF: ${N}`)}},F.readAsText(I)}},R=()=>{if(!t.value)return;const b=D(t.value),L=new Blob([b],{type:"application/xml"}),I=URL.createObjectURL(L),F=document.createElement("a");F.href=I,F.download=`${t.value.name}.urdf`;try{document.body?(F.style&&(F.style.display="none"),document.body.appendChild(F),F.click(),setTimeout(()=>{try{document.body&&document.body.contains(F)&&document.body.removeChild(F)}catch{}URL.revokeObjectURL(I)},100)):(F.click(),setTimeout(()=>{URL.revokeObjectURL(I)},100))}catch{F.click(),setTimeout(()=>{URL.revokeObjectURL(I)},100)}},D=b=>{let L=`<?xml version="1.0"?>
`;return L+=E(b,0),L},E=(b,L)=>{const I="  ".repeat(L);let F="";if(b.type==="robot"){F+=`${I}<robot name="${b.name}">
`;for(const x of b.children)F+=E(x,L+1);F+=`${I}</robot>
`}else if(b.type==="link"){F+=`${I}<link name="${b.name}">
`;for(const x of b.children)F+=E(x,L+1);F+=`${I}</link>
`}else if(b.type==="joint"){F+=`${I}<joint name="${b.name}" type="${b.properties?.type||"fixed"}">
`;for(const x of b.children)F+=E(x,L+1);F+=`${I}</joint>
`}return F};return(b,L)=>(Jt(),vn("div",Zb,[Mt("header",Jb,[L[3]||(L[3]=Mt("h1",null,"URDF Editor",-1)),Mt("div",Qb,[Mt("div",eE,[Mt("button",{class:"btn upload-btn",onClick:u},[...L[2]||(L[2]=[kd(" Upload URDF ",-1),Mt("span",{class:"dropdown-arrow"},"▼",-1)])]),i.value?(Jt(),vn("div",tE,[Mt("button",{onClick:p,class:"dropdown-item"}," 📁 From Local File "),Mt("button",{onClick:_,class:"dropdown-item"}," 🌐 From URL ")])):ua("",!0)]),Mt("input",{id:"file-upload",type:"file",accept:".urdf,.xml,application/xml,text/xml",onChange:d,style:{display:"none"}},null,32),Mt("button",{class:"btn",disabled:!0,onClick:R},"Download URDF")])]),Mt("div",nE,[Vn(S_,{root:t.value,selected:e.value,onSelect:a},null,8,["root","selected"]),Vn(Hb,{ref_key:"threeViewerRef",ref:o,class:"main-viewer","selected-node":e.value,onUrdfLoaded:c,onNodeSelected:l},null,8,["selected-node"]),Vn($b,{node:e.value},null,8,["node"])]),s.value?(Jt(),vn("div",{key:0,class:"modal-overlay",onClick:y},[Mt("div",{class:"modal-dialog",onClick:L[1]||(L[1]=n_(()=>{},["stop"]))},[L[4]||(L[4]=Mt("h3",null,"Load URDF from URL",-1)),Em(Mt("input",{"onUpdate:modelValue":L[0]||(L[0]=I=>r.value=I),type:"text",placeholder:"Enter URDF file URL",class:"url-input",onKeyup:s_(m,["enter"])},null,544),[[Qg,r.value]]),Mt("div",{class:"modal-actions"},[Mt("button",{class:"btn btn-secondary",onClick:y},"Cancel"),Mt("button",{class:"btn",onClick:m},"Load")])])])):ua("",!0)]))}}),sE=no(iE,[["__scopeId","data-v-38c40e81"]]),rE=a_(sE);rE.mount("#app");
