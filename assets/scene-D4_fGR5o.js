(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pr="170",Rl=0,Kr=1,Cl=2,rc=1,oc=2,vn=3,Fn=0,Lt=1,dn=2,Nn=0,Ei=1,Jr=2,Zr=3,$r=4,Pl=5,Zn=100,Dl=101,Il=102,zl=103,Ll=104,Ul=200,Nl=201,Ol=202,Fl=203,Hs=204,Gs=205,kl=206,Bl=207,Hl=208,Gl=209,Vl=210,Wl=211,Xl=212,ql=213,Yl=214,Vs=0,Ws=1,Xs=2,Ri=3,qs=4,Ys=5,Ks=6,Js=7,cc=0,Kl=1,Jl=2,On=0,Zl=1,$l=2,jl=3,dc=4,Ql=5,eh=6,th=7,lc=300,Ci=301,Pi=302,Zs=303,$s=304,ts=306,js=1e3,jn=1001,Qs=1002,Wt=1003,nh=1004,xa=1005,ln=1006,os=1007,Qn=1008,yn=1009,hc=1010,uc=1011,ia=1012,Dr=1013,ei=1014,hn=1015,sa=1016,Ir=1017,zr=1018,Di=1020,fc=35902,pc=1021,mc=1022,nn=1023,gc=1024,xc=1025,Ti=1026,Ii=1027,Lr=1028,Ur=1029,_c=1030,Nr=1031,Or=1033,Wa=33776,Xa=33777,qa=33778,Ya=33779,er=35840,tr=35841,nr=35842,ir=35843,ar=36196,sr=37492,rr=37496,or=37808,cr=37809,dr=37810,lr=37811,hr=37812,ur=37813,fr=37814,pr=37815,mr=37816,gr=37817,xr=37818,_r=37819,wr=37820,vr=37821,Ka=36492,Mr=36494,br=36495,wc=36283,yr=36284,Sr=36285,Er=36286,ih=3200,ah=3201,vc=0,sh=1,Un="",kt="srgb",Li="srgb-linear",ns="linear",rt="srgb",oi=7680,jr=519,rh=512,oh=513,ch=514,Mc=515,dh=516,lh=517,hh=518,uh=519,Qr=35044,eo="300 es",Mn=2e3,$a=2001;class Ui{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const s=a.indexOf(t);s!==-1&&a.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let s=0,o=a.length;s<o;s++)a[s].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cs=Math.PI/180,Tr=180/Math.PI;function ra(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]).toLowerCase()}function Rt(n,e,t){return Math.max(e,Math.min(t,n))}function fh(n,e){return(n%e+e)%e}function ds(n,e,t){return(1-t)*n+t*e}function Wi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Pe{constructor(e=0,t=0){Pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*a+e.x,this.y=s*a+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,a,s,o,d,u,l){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,o,d,u,l)}set(e,t,i,a,s,o,d,u,l){const h=this.elements;return h[0]=e,h[1]=a,h[2]=d,h[3]=t,h[4]=s,h[5]=u,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,s=this.elements,o=i[0],d=i[3],u=i[6],l=i[1],h=i[4],m=i[7],p=i[2],g=i[5],M=i[8],b=a[0],w=a[3],x=a[6],P=a[1],C=a[4],S=a[7],H=a[2],L=a[5],U=a[8];return s[0]=o*b+d*P+u*H,s[3]=o*w+d*C+u*L,s[6]=o*x+d*S+u*U,s[1]=l*b+h*P+m*H,s[4]=l*w+h*C+m*L,s[7]=l*x+h*S+m*U,s[2]=p*b+g*P+M*H,s[5]=p*w+g*C+M*L,s[8]=p*x+g*S+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],o=e[4],d=e[5],u=e[6],l=e[7],h=e[8];return t*o*h-t*d*l-i*s*h+i*d*u+a*s*l-a*o*u}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],o=e[4],d=e[5],u=e[6],l=e[7],h=e[8],m=h*o-d*l,p=d*u-h*s,g=l*s-o*u,M=t*m+i*p+a*g;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/M;return e[0]=m*b,e[1]=(a*l-h*i)*b,e[2]=(d*i-a*o)*b,e[3]=p*b,e[4]=(h*t-a*u)*b,e[5]=(a*s-d*t)*b,e[6]=g*b,e[7]=(i*u-l*t)*b,e[8]=(o*t-i*s)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,s,o,d){const u=Math.cos(s),l=Math.sin(s);return this.set(i*u,i*l,-i*(u*o+l*d)+o+e,-a*l,a*u,-a*(-l*o+u*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(ls.makeScale(e,t)),this}rotate(e){return this.premultiply(ls.makeRotation(-e)),this}translate(e,t){return this.premultiply(ls.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ls=new Ge;function bc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ja(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ph(){const n=ja("canvas");return n.style.display="block",n}const to={};function Qi(n){n in to||(to[n]=!0,console.warn(n))}function mh(n,e,t){return new Promise(function(i,a){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:a();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function gh(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function xh(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Qe={enabled:!0,workingColorSpace:Li,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===rt&&(n.r=bn(n.r),n.g=bn(n.g),n.b=bn(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===rt&&(n.r=Ai(n.r),n.g=Ai(n.g),n.b=Ai(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Un?ns:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function bn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ai(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const no=[.64,.33,.3,.6,.15,.06],io=[.2126,.7152,.0722],ao=[.3127,.329],so=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ro=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qe.define({[Li]:{primaries:no,whitePoint:ao,transfer:ns,toXYZ:so,fromXYZ:ro,luminanceCoefficients:io,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:no,whitePoint:ao,transfer:rt,toXYZ:so,fromXYZ:ro,luminanceCoefficients:io,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}});let ci;class _h{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ci===void 0&&(ci=ja("canvas")),ci.width=e.width,ci.height=e.height;const i=ci.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ci}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ja("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),s=a.data;for(let o=0;o<s.length;o++)s[o]=bn(s[o]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(bn(t[i]/255)*255):t[i]=bn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wh=0;class yc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=ra(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let o=0,d=a.length;o<d;o++)a[o].isDataTexture?s.push(hs(a[o].image)):s.push(hs(a[o]))}else s=hs(a);i.url=s}return t||(e.images[this.uuid]=i),i}}function hs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?_h.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vh=0;class Ct extends Ui{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,i=jn,a=jn,s=ln,o=Qn,d=nn,u=yn,l=Ct.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=ra(),this.name="",this.source=new yc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=d,this.internalFormat=null,this.type=u,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case js:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case Qs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case js:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case Qs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=lc;Ct.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,i=0,a=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*a+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*a+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*a+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*a+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,s;const u=e.elements,l=u[0],h=u[4],m=u[8],p=u[1],g=u[5],M=u[9],b=u[2],w=u[6],x=u[10];if(Math.abs(h-p)<.01&&Math.abs(m-b)<.01&&Math.abs(M-w)<.01){if(Math.abs(h+p)<.1&&Math.abs(m+b)<.1&&Math.abs(M+w)<.1&&Math.abs(l+g+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(l+1)/2,S=(g+1)/2,H=(x+1)/2,L=(h+p)/4,U=(m+b)/4,O=(M+w)/4;return C>S&&C>H?C<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(C),a=L/i,s=U/i):S>H?S<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(S),i=L/a,s=O/a):H<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(H),i=U/s,a=O/s),this.set(i,a,s,t),this}let P=Math.sqrt((w-M)*(w-M)+(m-b)*(m-b)+(p-h)*(p-h));return Math.abs(P)<.001&&(P=1),this.x=(w-M)/P,this.y=(m-b)/P,this.z=(p-h)/P,this.w=Math.acos((l+g+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mh extends Ui{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const a={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ct(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let d=0;d<o;d++)this.textures[d]=s.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,a=e.textures.length;i<a;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new yc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends Mh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Sc extends Ct{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bh extends Ct{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oa{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,s,o,d){let u=i[a+0],l=i[a+1],h=i[a+2],m=i[a+3];const p=s[o+0],g=s[o+1],M=s[o+2],b=s[o+3];if(d===0){e[t+0]=u,e[t+1]=l,e[t+2]=h,e[t+3]=m;return}if(d===1){e[t+0]=p,e[t+1]=g,e[t+2]=M,e[t+3]=b;return}if(m!==b||u!==p||l!==g||h!==M){let w=1-d;const x=u*p+l*g+h*M+m*b,P=x>=0?1:-1,C=1-x*x;if(C>Number.EPSILON){const H=Math.sqrt(C),L=Math.atan2(H,x*P);w=Math.sin(w*L)/H,d=Math.sin(d*L)/H}const S=d*P;if(u=u*w+p*S,l=l*w+g*S,h=h*w+M*S,m=m*w+b*S,w===1-d){const H=1/Math.sqrt(u*u+l*l+h*h+m*m);u*=H,l*=H,h*=H,m*=H}}e[t]=u,e[t+1]=l,e[t+2]=h,e[t+3]=m}static multiplyQuaternionsFlat(e,t,i,a,s,o){const d=i[a],u=i[a+1],l=i[a+2],h=i[a+3],m=s[o],p=s[o+1],g=s[o+2],M=s[o+3];return e[t]=d*M+h*m+u*g-l*p,e[t+1]=u*M+h*p+l*m-d*g,e[t+2]=l*M+h*g+d*p-u*m,e[t+3]=h*M-d*m-u*p-l*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,s=e._z,o=e._order,d=Math.cos,u=Math.sin,l=d(i/2),h=d(a/2),m=d(s/2),p=u(i/2),g=u(a/2),M=u(s/2);switch(o){case"XYZ":this._x=p*h*m+l*g*M,this._y=l*g*m-p*h*M,this._z=l*h*M+p*g*m,this._w=l*h*m-p*g*M;break;case"YXZ":this._x=p*h*m+l*g*M,this._y=l*g*m-p*h*M,this._z=l*h*M-p*g*m,this._w=l*h*m+p*g*M;break;case"ZXY":this._x=p*h*m-l*g*M,this._y=l*g*m+p*h*M,this._z=l*h*M+p*g*m,this._w=l*h*m-p*g*M;break;case"ZYX":this._x=p*h*m-l*g*M,this._y=l*g*m+p*h*M,this._z=l*h*M-p*g*m,this._w=l*h*m+p*g*M;break;case"YZX":this._x=p*h*m+l*g*M,this._y=l*g*m+p*h*M,this._z=l*h*M-p*g*m,this._w=l*h*m-p*g*M;break;case"XZY":this._x=p*h*m-l*g*M,this._y=l*g*m-p*h*M,this._z=l*h*M+p*g*m,this._w=l*h*m+p*g*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],s=t[8],o=t[1],d=t[5],u=t[9],l=t[2],h=t[6],m=t[10],p=i+d+m;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(h-u)*g,this._y=(s-l)*g,this._z=(o-a)*g}else if(i>d&&i>m){const g=2*Math.sqrt(1+i-d-m);this._w=(h-u)/g,this._x=.25*g,this._y=(a+o)/g,this._z=(s+l)/g}else if(d>m){const g=2*Math.sqrt(1+d-i-m);this._w=(s-l)/g,this._x=(a+o)/g,this._y=.25*g,this._z=(u+h)/g}else{const g=2*Math.sqrt(1+m-i-d);this._w=(o-a)/g,this._x=(s+l)/g,this._y=(u+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,s=e._z,o=e._w,d=t._x,u=t._y,l=t._z,h=t._w;return this._x=i*h+o*d+a*l-s*u,this._y=a*h+o*u+s*d-i*l,this._z=s*h+o*l+i*u-a*d,this._w=o*h-i*d-a*u-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,a=this._y,s=this._z,o=this._w;let d=o*e._w+i*e._x+a*e._y+s*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=o,this._x=i,this._y=a,this._z=s,this;const u=1-d*d;if(u<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*i+t*this._x,this._y=g*a+t*this._y,this._z=g*s+t*this._z,this.normalize(),this}const l=Math.sqrt(u),h=Math.atan2(l,d),m=Math.sin((1-t)*h)/l,p=Math.sin(t*h)/l;return this._w=o*m+this._w*p,this._x=i*m+this._x*p,this._y=a*m+this._y*p,this._z=s*m+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class v{constructor(e=0,t=0,i=0){v.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(oo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(oo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*a,this.y=s[1]*t+s[4]*i+s[7]*a,this.z=s[2]*t+s[5]*i+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*a+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*a+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*a+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,s=e.x,o=e.y,d=e.z,u=e.w,l=2*(o*a-d*i),h=2*(d*t-s*a),m=2*(s*i-o*t);return this.x=t+u*l+o*m-d*h,this.y=i+u*h+d*l-s*m,this.z=a+u*m+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*a,this.y=s[1]*t+s[5]*i+s[9]*a,this.z=s[2]*t+s[6]*i+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,s=e.z,o=t.x,d=t.y,u=t.z;return this.x=a*u-s*d,this.y=s*o-i*u,this.z=i*d-a*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return us.copy(this).projectOnVector(e),this.sub(us)}reflect(e){return this.sub(us.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const us=new v,oo=new oa;class ni{constructor(e=new v(1/0,1/0,1/0),t=new v(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,d=s.count;o<d;o++)e.isMesh===!0?e.getVertexPosition(o,Zt):Zt.fromBufferAttribute(s,o),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_a.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_a.copy(i.boundingBox)),_a.applyMatrix4(e.matrixWorld),this.union(_a)}const a=e.children;for(let s=0,o=a.length;s<o;s++)this.expandByObject(a[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xi),wa.subVectors(this.max,Xi),di.subVectors(e.a,Xi),li.subVectors(e.b,Xi),hi.subVectors(e.c,Xi),An.subVectors(li,di),Rn.subVectors(hi,li),Hn.subVectors(di,hi);let t=[0,-An.z,An.y,0,-Rn.z,Rn.y,0,-Hn.z,Hn.y,An.z,0,-An.x,Rn.z,0,-Rn.x,Hn.z,0,-Hn.x,-An.y,An.x,0,-Rn.y,Rn.x,0,-Hn.y,Hn.x,0];return!fs(t,di,li,hi,wa)||(t=[1,0,0,0,1,0,0,0,1],!fs(t,di,li,hi,wa))?!1:(va.crossVectors(An,Rn),t=[va.x,va.y,va.z],fs(t,di,li,hi,wa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mn=[new v,new v,new v,new v,new v,new v,new v,new v],Zt=new v,_a=new ni,di=new v,li=new v,hi=new v,An=new v,Rn=new v,Hn=new v,Xi=new v,wa=new v,va=new v,Gn=new v;function fs(n,e,t,i,a){for(let s=0,o=n.length-3;s<=o;s+=3){Gn.fromArray(n,s);const d=a.x*Math.abs(Gn.x)+a.y*Math.abs(Gn.y)+a.z*Math.abs(Gn.z),u=e.dot(Gn),l=t.dot(Gn),h=i.dot(Gn);if(Math.max(-Math.max(u,l,h),Math.min(u,l,h))>d)return!1}return!0}const yh=new ni,qi=new v,ps=new v;class Ni{constructor(e=new v,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):yh.setFromPoints(e).getCenter(i);let a=0;for(let s=0,o=e.length;s<o;s++)a=Math.max(a,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qi.subVectors(e,this.center);const t=qi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(qi,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ps.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qi.copy(e.center).add(ps)),this.expandByPoint(qi.copy(e.center).sub(ps))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gn=new v,ms=new v,Ma=new v,Cn=new v,gs=new v,ba=new v,xs=new v;class Ec{constructor(e=new v,t=new v(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gn.copy(this.origin).addScaledVector(this.direction,t),gn.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){ms.copy(e).add(t).multiplyScalar(.5),Ma.copy(t).sub(e).normalize(),Cn.copy(this.origin).sub(ms);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ma),d=Cn.dot(this.direction),u=-Cn.dot(Ma),l=Cn.lengthSq(),h=Math.abs(1-o*o);let m,p,g,M;if(h>0)if(m=o*u-d,p=o*d-u,M=s*h,m>=0)if(p>=-M)if(p<=M){const b=1/h;m*=b,p*=b,g=m*(m+o*p+2*d)+p*(o*m+p+2*u)+l}else p=s,m=Math.max(0,-(o*p+d)),g=-m*m+p*(p+2*u)+l;else p=-s,m=Math.max(0,-(o*p+d)),g=-m*m+p*(p+2*u)+l;else p<=-M?(m=Math.max(0,-(-o*s+d)),p=m>0?-s:Math.min(Math.max(-s,-u),s),g=-m*m+p*(p+2*u)+l):p<=M?(m=0,p=Math.min(Math.max(-s,-u),s),g=p*(p+2*u)+l):(m=Math.max(0,-(o*s+d)),p=m>0?s:Math.min(Math.max(-s,-u),s),g=-m*m+p*(p+2*u)+l);else p=o>0?-s:s,m=Math.max(0,-(o*p+d)),g=-m*m+p*(p+2*u)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,m),a&&a.copy(ms).addScaledVector(Ma,p),g}intersectSphere(e,t){gn.subVectors(e.center,this.origin);const i=gn.dot(this.direction),a=gn.dot(gn)-i*i,s=e.radius*e.radius;if(a>s)return null;const o=Math.sqrt(s-a),d=i-o,u=i+o;return u<0?null:d<0?this.at(u,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,s,o,d,u;const l=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,p=this.origin;return l>=0?(i=(e.min.x-p.x)*l,a=(e.max.x-p.x)*l):(i=(e.max.x-p.x)*l,a=(e.min.x-p.x)*l),h>=0?(s=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(s=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),i>o||s>a||((s>i||isNaN(i))&&(i=s),(o<a||isNaN(a))&&(a=o),m>=0?(d=(e.min.z-p.z)*m,u=(e.max.z-p.z)*m):(d=(e.max.z-p.z)*m,u=(e.min.z-p.z)*m),i>u||d>a)||((d>i||i!==i)&&(i=d),(u<a||a!==a)&&(a=u),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,gn)!==null}intersectTriangle(e,t,i,a,s){gs.subVectors(t,e),ba.subVectors(i,e),xs.crossVectors(gs,ba);let o=this.direction.dot(xs),d;if(o>0){if(a)return null;d=1}else if(o<0)d=-1,o=-o;else return null;Cn.subVectors(this.origin,e);const u=d*this.direction.dot(ba.crossVectors(Cn,ba));if(u<0)return null;const l=d*this.direction.dot(gs.cross(Cn));if(l<0||u+l>o)return null;const h=-d*Cn.dot(xs);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,i,a,s,o,d,u,l,h,m,p,g,M,b,w){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,o,d,u,l,h,m,p,g,M,b,w)}set(e,t,i,a,s,o,d,u,l,h,m,p,g,M,b,w){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=a,x[1]=s,x[5]=o,x[9]=d,x[13]=u,x[2]=l,x[6]=h,x[10]=m,x[14]=p,x[3]=g,x[7]=M,x[11]=b,x[15]=w,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,a=1/ui.setFromMatrixColumn(e,0).length(),s=1/ui.setFromMatrixColumn(e,1).length(),o=1/ui.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,s=e.z,o=Math.cos(i),d=Math.sin(i),u=Math.cos(a),l=Math.sin(a),h=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){const p=o*h,g=o*m,M=d*h,b=d*m;t[0]=u*h,t[4]=-u*m,t[8]=l,t[1]=g+M*l,t[5]=p-b*l,t[9]=-d*u,t[2]=b-p*l,t[6]=M+g*l,t[10]=o*u}else if(e.order==="YXZ"){const p=u*h,g=u*m,M=l*h,b=l*m;t[0]=p+b*d,t[4]=M*d-g,t[8]=o*l,t[1]=o*m,t[5]=o*h,t[9]=-d,t[2]=g*d-M,t[6]=b+p*d,t[10]=o*u}else if(e.order==="ZXY"){const p=u*h,g=u*m,M=l*h,b=l*m;t[0]=p-b*d,t[4]=-o*m,t[8]=M+g*d,t[1]=g+M*d,t[5]=o*h,t[9]=b-p*d,t[2]=-o*l,t[6]=d,t[10]=o*u}else if(e.order==="ZYX"){const p=o*h,g=o*m,M=d*h,b=d*m;t[0]=u*h,t[4]=M*l-g,t[8]=p*l+b,t[1]=u*m,t[5]=b*l+p,t[9]=g*l-M,t[2]=-l,t[6]=d*u,t[10]=o*u}else if(e.order==="YZX"){const p=o*u,g=o*l,M=d*u,b=d*l;t[0]=u*h,t[4]=b-p*m,t[8]=M*m+g,t[1]=m,t[5]=o*h,t[9]=-d*h,t[2]=-l*h,t[6]=g*m+M,t[10]=p-b*m}else if(e.order==="XZY"){const p=o*u,g=o*l,M=d*u,b=d*l;t[0]=u*h,t[4]=-m,t[8]=l*h,t[1]=p*m+b,t[5]=o*h,t[9]=g*m-M,t[2]=M*m-g,t[6]=d*h,t[10]=b*m+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sh,e,Eh)}lookAt(e,t,i){const a=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Pn.crossVectors(i,Gt),Pn.lengthSq()===0&&(Math.abs(i.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Pn.crossVectors(i,Gt)),Pn.normalize(),ya.crossVectors(Gt,Pn),a[0]=Pn.x,a[4]=ya.x,a[8]=Gt.x,a[1]=Pn.y,a[5]=ya.y,a[9]=Gt.y,a[2]=Pn.z,a[6]=ya.z,a[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,s=this.elements,o=i[0],d=i[4],u=i[8],l=i[12],h=i[1],m=i[5],p=i[9],g=i[13],M=i[2],b=i[6],w=i[10],x=i[14],P=i[3],C=i[7],S=i[11],H=i[15],L=a[0],U=a[4],O=a[8],R=a[12],E=a[1],N=a[5],Y=a[9],q=a[13],$=a[2],ie=a[6],j=a[10],ce=a[14],J=a[3],ue=a[7],_e=a[11],Re=a[15];return s[0]=o*L+d*E+u*$+l*J,s[4]=o*U+d*N+u*ie+l*ue,s[8]=o*O+d*Y+u*j+l*_e,s[12]=o*R+d*q+u*ce+l*Re,s[1]=h*L+m*E+p*$+g*J,s[5]=h*U+m*N+p*ie+g*ue,s[9]=h*O+m*Y+p*j+g*_e,s[13]=h*R+m*q+p*ce+g*Re,s[2]=M*L+b*E+w*$+x*J,s[6]=M*U+b*N+w*ie+x*ue,s[10]=M*O+b*Y+w*j+x*_e,s[14]=M*R+b*q+w*ce+x*Re,s[3]=P*L+C*E+S*$+H*J,s[7]=P*U+C*N+S*ie+H*ue,s[11]=P*O+C*Y+S*j+H*_e,s[15]=P*R+C*q+S*ce+H*Re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],s=e[12],o=e[1],d=e[5],u=e[9],l=e[13],h=e[2],m=e[6],p=e[10],g=e[14],M=e[3],b=e[7],w=e[11],x=e[15];return M*(+s*u*m-a*l*m-s*d*p+i*l*p+a*d*g-i*u*g)+b*(+t*u*g-t*l*p+s*o*p-a*o*g+a*l*h-s*u*h)+w*(+t*l*m-t*d*g-s*o*m+i*o*g+s*d*h-i*l*h)+x*(-a*d*h-t*u*m+t*d*p+a*o*m-i*o*p+i*u*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],o=e[4],d=e[5],u=e[6],l=e[7],h=e[8],m=e[9],p=e[10],g=e[11],M=e[12],b=e[13],w=e[14],x=e[15],P=m*w*l-b*p*l+b*u*g-d*w*g-m*u*x+d*p*x,C=M*p*l-h*w*l-M*u*g+o*w*g+h*u*x-o*p*x,S=h*b*l-M*m*l+M*d*g-o*b*g-h*d*x+o*m*x,H=M*m*u-h*b*u-M*d*p+o*b*p+h*d*w-o*m*w,L=t*P+i*C+a*S+s*H;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/L;return e[0]=P*U,e[1]=(b*p*s-m*w*s-b*a*g+i*w*g+m*a*x-i*p*x)*U,e[2]=(d*w*s-b*u*s+b*a*l-i*w*l-d*a*x+i*u*x)*U,e[3]=(m*u*s-d*p*s-m*a*l+i*p*l+d*a*g-i*u*g)*U,e[4]=C*U,e[5]=(h*w*s-M*p*s+M*a*g-t*w*g-h*a*x+t*p*x)*U,e[6]=(M*u*s-o*w*s-M*a*l+t*w*l+o*a*x-t*u*x)*U,e[7]=(o*p*s-h*u*s+h*a*l-t*p*l-o*a*g+t*u*g)*U,e[8]=S*U,e[9]=(M*m*s-h*b*s-M*i*g+t*b*g+h*i*x-t*m*x)*U,e[10]=(o*b*s-M*d*s+M*i*l-t*b*l-o*i*x+t*d*x)*U,e[11]=(h*d*s-o*m*s-h*i*l+t*m*l+o*i*g-t*d*g)*U,e[12]=H*U,e[13]=(h*b*a-M*m*a+M*i*p-t*b*p-h*i*w+t*m*w)*U,e[14]=(M*d*a-o*b*a-M*i*u+t*b*u+o*i*w-t*d*w)*U,e[15]=(o*m*a-h*d*a+h*i*u-t*m*u-o*i*p+t*d*p)*U,this}scale(e){const t=this.elements,i=e.x,a=e.y,s=e.z;return t[0]*=i,t[4]*=a,t[8]*=s,t[1]*=i,t[5]*=a,t[9]*=s,t[2]*=i,t[6]*=a,t[10]*=s,t[3]*=i,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),s=1-i,o=e.x,d=e.y,u=e.z,l=s*o,h=s*d;return this.set(l*o+i,l*d-a*u,l*u+a*d,0,l*d+a*u,h*d+i,h*u-a*o,0,l*u-a*d,h*u+a*o,s*u*u+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,s,o){return this.set(1,i,s,0,e,1,o,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,s=t._x,o=t._y,d=t._z,u=t._w,l=s+s,h=o+o,m=d+d,p=s*l,g=s*h,M=s*m,b=o*h,w=o*m,x=d*m,P=u*l,C=u*h,S=u*m,H=i.x,L=i.y,U=i.z;return a[0]=(1-(b+x))*H,a[1]=(g+S)*H,a[2]=(M-C)*H,a[3]=0,a[4]=(g-S)*L,a[5]=(1-(p+x))*L,a[6]=(w+P)*L,a[7]=0,a[8]=(M+C)*U,a[9]=(w-P)*U,a[10]=(1-(p+b))*U,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;let s=ui.set(a[0],a[1],a[2]).length();const o=ui.set(a[4],a[5],a[6]).length(),d=ui.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),e.x=a[12],e.y=a[13],e.z=a[14],$t.copy(this);const l=1/s,h=1/o,m=1/d;return $t.elements[0]*=l,$t.elements[1]*=l,$t.elements[2]*=l,$t.elements[4]*=h,$t.elements[5]*=h,$t.elements[6]*=h,$t.elements[8]*=m,$t.elements[9]*=m,$t.elements[10]*=m,t.setFromRotationMatrix($t),i.x=s,i.y=o,i.z=d,this}makePerspective(e,t,i,a,s,o,d=Mn){const u=this.elements,l=2*s/(t-e),h=2*s/(i-a),m=(t+e)/(t-e),p=(i+a)/(i-a);let g,M;if(d===Mn)g=-(o+s)/(o-s),M=-2*o*s/(o-s);else if(d===$a)g=-o/(o-s),M=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return u[0]=l,u[4]=0,u[8]=m,u[12]=0,u[1]=0,u[5]=h,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=M,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,a,s,o,d=Mn){const u=this.elements,l=1/(t-e),h=1/(i-a),m=1/(o-s),p=(t+e)*l,g=(i+a)*h;let M,b;if(d===Mn)M=(o+s)*m,b=-2*m;else if(d===$a)M=s*m,b=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return u[0]=2*l,u[4]=0,u[8]=0,u[12]=-p,u[1]=0,u[5]=2*h,u[9]=0,u[13]=-g,u[2]=0,u[6]=0,u[10]=b,u[14]=-M,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ui=new v,$t=new ht,Sh=new v(0,0,0),Eh=new v(1,1,1),Pn=new v,ya=new v,Gt=new v,co=new ht,lo=new oa;class fn{constructor(e=0,t=0,i=0,a=fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,s=a[0],o=a[4],d=a[8],u=a[1],l=a[5],h=a[9],m=a[2],p=a[6],g=a[10];switch(t){case"XYZ":this._y=Math.asin(Rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(d,g),this._z=Math.atan2(u,l)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-m,g),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-Rt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(d,g));break;case"XZY":this._z=Math.asin(-Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(d,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return co.makeRotationFromQuaternion(e),this.setFromRotationMatrix(co,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lo.setFromEuler(this),this.setFromQuaternion(lo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fn.DEFAULT_ORDER="XYZ";class Tc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Th=0;const ho=new v,fi=new oa,xn=new ht,Sa=new v,Yi=new v,Ah=new v,Rh=new oa,uo=new v(1,0,0),fo=new v(0,1,0),po=new v(0,0,1),mo={type:"added"},Ch={type:"removed"},pi={type:"childadded",child:null},_s={type:"childremoved",child:null};class vt extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=ra(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new v,t=new fn,i=new oa,a=new v(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ge}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fi.setFromAxisAngle(e,t),this.quaternion.multiply(fi),this}rotateOnWorldAxis(e,t){return fi.setFromAxisAngle(e,t),this.quaternion.premultiply(fi),this}rotateX(e){return this.rotateOnAxis(uo,e)}rotateY(e){return this.rotateOnAxis(fo,e)}rotateZ(e){return this.rotateOnAxis(po,e)}translateOnAxis(e,t){return ho.copy(e).applyQuaternion(this.quaternion),this.position.add(ho.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uo,e)}translateY(e){return this.translateOnAxis(fo,e)}translateZ(e){return this.translateOnAxis(po,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Sa.copy(e):Sa.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(Yi,Sa,this.up):xn.lookAt(Sa,Yi,this.up),this.quaternion.setFromRotationMatrix(xn),a&&(xn.extractRotation(a.matrixWorld),fi.setFromRotationMatrix(xn),this.quaternion.premultiply(fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mo),pi.child=e,this.dispatchEvent(pi),pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ch),_s.child=e,this.dispatchEvent(_s),_s.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mo),pi.child=e,this.dispatchEvent(pi),pi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let s=0,o=a.length;s<o;s++)a[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,e,Ah),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,Rh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let s=0,o=a.length;s<o;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function s(d,u){return d[u.uuid]===void 0&&(d[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const u=d.shapes;if(Array.isArray(u))for(let l=0,h=u.length;l<h;l++){const m=u[l];s(e.shapes,m)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let u=0,l=this.material.length;u<l;u++)d.push(s(e.materials,this.material[u]));a.material=d}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const u=this.animations[d];a.animations.push(s(e.animations,u))}}if(t){const d=o(e.geometries),u=o(e.materials),l=o(e.textures),h=o(e.images),m=o(e.shapes),p=o(e.skeletons),g=o(e.animations),M=o(e.nodes);d.length>0&&(i.geometries=d),u.length>0&&(i.materials=u),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),m.length>0&&(i.shapes=m),p.length>0&&(i.skeletons=p),g.length>0&&(i.animations=g),M.length>0&&(i.nodes=M)}return i.object=a,i;function o(d){const u=[];for(const l in d){const h=d[l];delete h.metadata,u.push(h)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}vt.DEFAULT_UP=new v(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jt=new v,_n=new v,ws=new v,wn=new v,mi=new v,gi=new v,go=new v,vs=new v,Ms=new v,bs=new v,ys=new xt,Ss=new xt,Es=new xt;class tn{constructor(e=new v,t=new v,i=new v){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),jt.subVectors(e,t),a.cross(jt);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,i,a,s){jt.subVectors(a,t),_n.subVectors(i,t),ws.subVectors(e,t);const o=jt.dot(jt),d=jt.dot(_n),u=jt.dot(ws),l=_n.dot(_n),h=_n.dot(ws),m=o*l-d*d;if(m===0)return s.set(0,0,0),null;const p=1/m,g=(l*u-d*h)*p,M=(o*h-d*u)*p;return s.set(1-g-M,M,g)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(e,t,i,a,s,o,d,u){return this.getBarycoord(e,t,i,a,wn)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,wn.x),u.addScaledVector(o,wn.y),u.addScaledVector(d,wn.z),u)}static getInterpolatedAttribute(e,t,i,a,s,o){return ys.setScalar(0),Ss.setScalar(0),Es.setScalar(0),ys.fromBufferAttribute(e,t),Ss.fromBufferAttribute(e,i),Es.fromBufferAttribute(e,a),o.setScalar(0),o.addScaledVector(ys,s.x),o.addScaledVector(Ss,s.y),o.addScaledVector(Es,s.z),o}static isFrontFacing(e,t,i,a){return jt.subVectors(i,t),_n.subVectors(e,t),jt.cross(_n).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),jt.cross(_n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,s){return tn.getInterpolation(e,this.a,this.b,this.c,t,i,a,s)}containsPoint(e){return tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,s=this.c;let o,d;mi.subVectors(a,i),gi.subVectors(s,i),vs.subVectors(e,i);const u=mi.dot(vs),l=gi.dot(vs);if(u<=0&&l<=0)return t.copy(i);Ms.subVectors(e,a);const h=mi.dot(Ms),m=gi.dot(Ms);if(h>=0&&m<=h)return t.copy(a);const p=u*m-h*l;if(p<=0&&u>=0&&h<=0)return o=u/(u-h),t.copy(i).addScaledVector(mi,o);bs.subVectors(e,s);const g=mi.dot(bs),M=gi.dot(bs);if(M>=0&&g<=M)return t.copy(s);const b=g*l-u*M;if(b<=0&&l>=0&&M<=0)return d=l/(l-M),t.copy(i).addScaledVector(gi,d);const w=h*M-g*m;if(w<=0&&m-h>=0&&g-M>=0)return go.subVectors(s,a),d=(m-h)/(m-h+(g-M)),t.copy(a).addScaledVector(go,d);const x=1/(w+b+p);return o=b*x,d=p*x,t.copy(i).addScaledVector(mi,o).addScaledVector(gi,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ac={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},Ea={h:0,s:0,l:0};function Ts(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class We{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,a=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.toWorkingColorSpace(this,a),this}setHSL(e,t,i,a=Qe.workingColorSpace){if(e=fh(e,1),t=Rt(t,0,1),i=Rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ts(o,s,e+1/3),this.g=Ts(o,s,e),this.b=Ts(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,a),this}setStyle(e,t=kt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=a[1],d=a[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){const i=Ac[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bn(e.r),this.g=bn(e.g),this.b=bn(e.b),this}copyLinearToSRGB(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return Qe.fromWorkingColorSpace(At.copy(this),e),Math.round(Rt(At.r*255,0,255))*65536+Math.round(Rt(At.g*255,0,255))*256+Math.round(Rt(At.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(At.copy(this),t);const i=At.r,a=At.g,s=At.b,o=Math.max(i,a,s),d=Math.min(i,a,s);let u,l;const h=(d+o)/2;if(d===o)u=0,l=0;else{const m=o-d;switch(l=h<=.5?m/(o+d):m/(2-o-d),o){case i:u=(a-s)/m+(a<s?6:0);break;case a:u=(s-i)/m+2;break;case s:u=(i-a)/m+4;break}u/=6}return e.h=u,e.s=l,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=kt){Qe.fromWorkingColorSpace(At.copy(this),e);const t=At.r,i=At.g,a=At.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(Dn),this.setHSL(Dn.h+e,Dn.s+t,Dn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Dn),e.getHSL(Ea);const i=ds(Dn.h,Ea.h,t),a=ds(Dn.s,Ea.s,t),s=ds(Dn.l,Ea.l,t);return this.setHSL(i,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*a,this.g=s[1]*t+s[4]*i+s[7]*a,this.b=s[2]*t+s[5]*i+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new We;We.NAMES=Ac;let Ph=0;class Oi extends Ui{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=ra(),this.name="",this.blending=Ei,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hs,this.blendDst=Gs,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oi,this.stencilZFail=oi,this.stencilZPass=oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(i.blending=this.blending),this.side!==Fn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Hs&&(i.blendSrc=this.blendSrc),this.blendDst!==Gs&&(i.blendDst=this.blendDst),this.blendEquation!==Zn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ri&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jr&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==oi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==oi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const o=[];for(const d in s){const u=s[d];delete u.metadata,o.push(u)}return o}if(t){const s=a(e.textures),o=a(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Fr extends Oi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new v,Ta=new Pe;class Xt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qr,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ta.fromBufferAttribute(this,t),Ta.applyMatrix3(e),this.setXY(t,Ta.x,Ta.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Wi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),a=Ft(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),a=Ft(a,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qr&&(e.usage=this.usage),e}}class Rc extends Xt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Cc extends Xt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class pt extends Xt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Dh=0;const Yt=new ht,As=new vt,xi=new v,Vt=new ni,Ki=new ni,St=new v;class Ut extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=ra(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bc(e)?Cc:Rc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,i){return Yt.makeTranslation(e,t,i),this.applyMatrix4(Yt),this}scale(e,t,i){return Yt.makeScale(e,t,i),this.applyMatrix4(Yt),this}lookAt(e){return As.lookAt(e),As.updateMatrix(),this.applyMatrix4(As.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xi).negate(),this.translate(xi.x,xi.y,xi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,s=e.length;a<s;a++){const o=e[a];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pt(i,3))}else{for(let i=0,a=t.count;i<a;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new v(-1/0,-1/0,-1/0),new v(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const s=t[i];Vt.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new v,1/0);return}if(e){const i=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const d=t[s];Ki.setFromBufferAttribute(d),this.morphTargetsRelative?(St.addVectors(Vt.min,Ki.min),Vt.expandByPoint(St),St.addVectors(Vt.max,Ki.max),Vt.expandByPoint(St)):(Vt.expandByPoint(Ki.min),Vt.expandByPoint(Ki.max))}Vt.getCenter(i);let a=0;for(let s=0,o=e.count;s<o;s++)St.fromBufferAttribute(e,s),a=Math.max(a,i.distanceToSquared(St));if(t)for(let s=0,o=t.length;s<o;s++){const d=t[s],u=this.morphTargetsRelative;for(let l=0,h=d.count;l<h;l++)St.fromBufferAttribute(d,l),u&&(xi.fromBufferAttribute(e,l),St.add(xi)),a=Math.max(a,i.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),d=[],u=[];for(let O=0;O<i.count;O++)d[O]=new v,u[O]=new v;const l=new v,h=new v,m=new v,p=new Pe,g=new Pe,M=new Pe,b=new v,w=new v;function x(O,R,E){l.fromBufferAttribute(i,O),h.fromBufferAttribute(i,R),m.fromBufferAttribute(i,E),p.fromBufferAttribute(s,O),g.fromBufferAttribute(s,R),M.fromBufferAttribute(s,E),h.sub(l),m.sub(l),g.sub(p),M.sub(p);const N=1/(g.x*M.y-M.x*g.y);isFinite(N)&&(b.copy(h).multiplyScalar(M.y).addScaledVector(m,-g.y).multiplyScalar(N),w.copy(m).multiplyScalar(g.x).addScaledVector(h,-M.x).multiplyScalar(N),d[O].add(b),d[R].add(b),d[E].add(b),u[O].add(w),u[R].add(w),u[E].add(w))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let O=0,R=P.length;O<R;++O){const E=P[O],N=E.start,Y=E.count;for(let q=N,$=N+Y;q<$;q+=3)x(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const C=new v,S=new v,H=new v,L=new v;function U(O){H.fromBufferAttribute(a,O),L.copy(H);const R=d[O];C.copy(R),C.sub(H.multiplyScalar(H.dot(R))).normalize(),S.crossVectors(L,R);const N=S.dot(u[O])<0?-1:1;o.setXYZW(O,C.x,C.y,C.z,N)}for(let O=0,R=P.length;O<R;++O){const E=P[O],N=E.start,Y=E.count;for(let q=N,$=N+Y;q<$;q+=3)U(e.getX(q+0)),U(e.getX(q+1)),U(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,g=i.count;p<g;p++)i.setXYZ(p,0,0,0);const a=new v,s=new v,o=new v,d=new v,u=new v,l=new v,h=new v,m=new v;if(e)for(let p=0,g=e.count;p<g;p+=3){const M=e.getX(p+0),b=e.getX(p+1),w=e.getX(p+2);a.fromBufferAttribute(t,M),s.fromBufferAttribute(t,b),o.fromBufferAttribute(t,w),h.subVectors(o,s),m.subVectors(a,s),h.cross(m),d.fromBufferAttribute(i,M),u.fromBufferAttribute(i,b),l.fromBufferAttribute(i,w),d.add(h),u.add(h),l.add(h),i.setXYZ(M,d.x,d.y,d.z),i.setXYZ(b,u.x,u.y,u.z),i.setXYZ(w,l.x,l.y,l.z)}else for(let p=0,g=t.count;p<g;p+=3)a.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,s),m.subVectors(a,s),h.cross(m),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(d,u){const l=d.array,h=d.itemSize,m=d.normalized,p=new l.constructor(u.length*h);let g=0,M=0;for(let b=0,w=u.length;b<w;b++){d.isInterleavedBufferAttribute?g=u[b]*d.data.stride+d.offset:g=u[b]*h;for(let x=0;x<h;x++)p[M++]=l[g++]}return new Xt(p,h,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ut,i=this.index.array,a=this.attributes;for(const d in a){const u=a[d],l=e(u,i);t.setAttribute(d,l)}const s=this.morphAttributes;for(const d in s){const u=[],l=s[d];for(let h=0,m=l.length;h<m;h++){const p=l[h],g=e(p,i);u.push(g)}t.morphAttributes[d]=u}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let d=0,u=o.length;d<u;d++){const l=o[d];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const l in u)u[l]!==void 0&&(e[l]=u[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const u in i){const l=i[u];e.data.attributes[u]=l.toJSON(e.data)}const a={};let s=!1;for(const u in this.morphAttributes){const l=this.morphAttributes[u],h=[];for(let m=0,p=l.length;m<p;m++){const g=l[m];h.push(g.toJSON(e.data))}h.length>0&&(a[u]=h,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const a=e.attributes;for(const l in a){const h=a[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],m=s[l];for(let p=0,g=m.length;p<g;p++)h.push(m[p].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const m=o[l];this.addGroup(m.start,m.count,m.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xo=new ht,Vn=new Ec,Aa=new Ni,_o=new v,Ra=new v,Ca=new v,Pa=new v,Rs=new v,Da=new v,wo=new v,Ia=new v;class ot extends vt{constructor(e=new Ut,t=new Fr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=a.length;s<o;s++){const d=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=s}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(s&&d){Da.set(0,0,0);for(let u=0,l=s.length;u<l;u++){const h=d[u],m=s[u];h!==0&&(Rs.fromBufferAttribute(m,e),o?Da.addScaledVector(Rs,h):Da.addScaledVector(Rs.sub(t),h))}t.add(Da)}return t}raycast(e,t){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Aa.copy(i.boundingSphere),Aa.applyMatrix4(s),Vn.copy(e.ray).recast(e.near),!(Aa.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(Aa,_o)===null||Vn.origin.distanceToSquared(_o)>(e.far-e.near)**2))&&(xo.copy(s).invert(),Vn.copy(e.ray).applyMatrix4(xo),!(i.boundingBox!==null&&Vn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Vn)))}_computeIntersections(e,t,i){let a;const s=this.geometry,o=this.material,d=s.index,u=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,m=s.attributes.normal,p=s.groups,g=s.drawRange;if(d!==null)if(Array.isArray(o))for(let M=0,b=p.length;M<b;M++){const w=p[M],x=o[w.materialIndex],P=Math.max(w.start,g.start),C=Math.min(d.count,Math.min(w.start+w.count,g.start+g.count));for(let S=P,H=C;S<H;S+=3){const L=d.getX(S),U=d.getX(S+1),O=d.getX(S+2);a=za(this,x,e,i,l,h,m,L,U,O),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=w.materialIndex,t.push(a))}}else{const M=Math.max(0,g.start),b=Math.min(d.count,g.start+g.count);for(let w=M,x=b;w<x;w+=3){const P=d.getX(w),C=d.getX(w+1),S=d.getX(w+2);a=za(this,o,e,i,l,h,m,P,C,S),a&&(a.faceIndex=Math.floor(w/3),t.push(a))}}else if(u!==void 0)if(Array.isArray(o))for(let M=0,b=p.length;M<b;M++){const w=p[M],x=o[w.materialIndex],P=Math.max(w.start,g.start),C=Math.min(u.count,Math.min(w.start+w.count,g.start+g.count));for(let S=P,H=C;S<H;S+=3){const L=S,U=S+1,O=S+2;a=za(this,x,e,i,l,h,m,L,U,O),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=w.materialIndex,t.push(a))}}else{const M=Math.max(0,g.start),b=Math.min(u.count,g.start+g.count);for(let w=M,x=b;w<x;w+=3){const P=w,C=w+1,S=w+2;a=za(this,o,e,i,l,h,m,P,C,S),a&&(a.faceIndex=Math.floor(w/3),t.push(a))}}}}function Ih(n,e,t,i,a,s,o,d){let u;if(e.side===Lt?u=i.intersectTriangle(o,s,a,!0,d):u=i.intersectTriangle(a,s,o,e.side===Fn,d),u===null)return null;Ia.copy(d),Ia.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ia);return l<t.near||l>t.far?null:{distance:l,point:Ia.clone(),object:n}}function za(n,e,t,i,a,s,o,d,u,l){n.getVertexPosition(d,Ra),n.getVertexPosition(u,Ca),n.getVertexPosition(l,Pa);const h=Ih(n,e,t,i,Ra,Ca,Pa,wo);if(h){const m=new v;tn.getBarycoord(wo,Ra,Ca,Pa,m),a&&(h.uv=tn.getInterpolatedAttribute(a,d,u,l,m,new Pe)),s&&(h.uv1=tn.getInterpolatedAttribute(s,d,u,l,m,new Pe)),o&&(h.normal=tn.getInterpolatedAttribute(o,d,u,l,m,new v),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a:d,b:u,c:l,normal:new v,materialIndex:0};tn.getNormal(Ra,Ca,Pa,p.normal),h.face=p,h.barycoord=m}return h}class f extends Ut{constructor(e=1,t=1,i=1,a=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:s,depthSegments:o};const d=this;a=Math.floor(a),s=Math.floor(s),o=Math.floor(o);const u=[],l=[],h=[],m=[];let p=0,g=0;M("z","y","x",-1,-1,i,t,e,o,s,0),M("z","y","x",1,-1,i,t,-e,o,s,1),M("x","z","y",1,1,e,i,t,a,o,2),M("x","z","y",1,-1,e,i,-t,a,o,3),M("x","y","z",1,-1,e,t,i,a,s,4),M("x","y","z",-1,-1,e,t,-i,a,s,5),this.setIndex(u),this.setAttribute("position",new pt(l,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(m,2));function M(b,w,x,P,C,S,H,L,U,O,R){const E=S/U,N=H/O,Y=S/2,q=H/2,$=L/2,ie=U+1,j=O+1;let ce=0,J=0;const ue=new v;for(let _e=0;_e<j;_e++){const Re=_e*N-q;for(let Xe=0;Xe<ie;Xe++){const it=Xe*E-Y;ue[b]=it*P,ue[w]=Re*C,ue[x]=$,l.push(ue.x,ue.y,ue.z),ue[b]=0,ue[w]=0,ue[x]=L>0?1:-1,h.push(ue.x,ue.y,ue.z),m.push(Xe/U),m.push(1-_e/O),ce+=1}}for(let _e=0;_e<O;_e++)for(let Re=0;Re<U;Re++){const Xe=p+Re+ie*_e,it=p+Re+ie*(_e+1),ee=p+(Re+1)+ie*(_e+1),de=p+(Re+1)+ie*_e;u.push(Xe,it,de),u.push(it,ee,de),J+=6}d.addGroup(g,J,R),g+=J,p+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new f(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const a=n[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function It(n){const e={};for(let t=0;t<n.length;t++){const i=zi(n[t]);for(const a in i)e[a]=i[a]}return e}function zh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Pc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const Lh={clone:zi,merge:It};var Uh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends Oi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uh,this.fragmentShader=Nh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zi(e.uniforms),this.uniformsGroups=zh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const o=this.uniforms[a].value;o&&o.isTexture?t.uniforms[a]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[a]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[a]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[a]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[a]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[a]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[a]={type:"m4",value:o.toArray()}:t.uniforms[a]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Dc extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Mn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const In=new v,vo=new Pe,Mo=new Pe;class en extends Dc{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Tr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){In.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(In.x,In.y).multiplyScalar(-e/In.z),In.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(In.x,In.y).multiplyScalar(-e/In.z)}getViewSize(e,t){return this.getViewBounds(e,vo,Mo),t.subVectors(Mo,vo)}setViewOffset(e,t,i,a,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cs*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,s=-.5*a;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,l=o.fullHeight;s+=o.offsetX*a/u,t-=o.offsetY*i/l,a*=o.width/u,i*=o.height/l}const d=this.filmOffset;d!==0&&(s+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _i=-90,wi=1;class Oh extends vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new en(_i,wi,e,t);a.layers=this.layers,this.add(a);const s=new en(_i,wi,e,t);s.layers=this.layers,this.add(s);const o=new en(_i,wi,e,t);o.layers=this.layers,this.add(o);const d=new en(_i,wi,e,t);d.layers=this.layers,this.add(d);const u=new en(_i,wi,e,t);u.layers=this.layers,this.add(u);const l=new en(_i,wi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,s,o,d,u]=t;for(const l of t)this.remove(l);if(e===Mn)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===$a)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,d,u,l,h]=this.children,m=e.getRenderTarget(),p=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,s),e.setRenderTarget(i,1,a),e.render(t,o),e.setRenderTarget(i,2,a),e.render(t,d),e.setRenderTarget(i,3,a),e.render(t,u),e.setRenderTarget(i,4,a),e.render(t,l),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,a),e.render(t,h),e.setRenderTarget(m,p,g),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class Ic extends Ct{constructor(e,t,i,a,s,o,d,u,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Ci,super(e,t,i,a,s,o,d,u,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fh extends ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new Ic(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new f(5,5,5),s=new Sn({name:"CubemapFromEquirect",uniforms:zi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Lt,blending:Nn});s.uniforms.tEquirect.value=t;const o=new ot(a,s),d=t.minFilter;return t.minFilter===Qn&&(t.minFilter=ln),new Oh(1,10,this).update(e,o),t.minFilter=d,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,a){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,a);e.setRenderTarget(s)}}const Cs=new v,kh=new v,Bh=new Ge;class Yn{constructor(e=new v(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=Cs.subVectors(i,t).cross(kh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Cs),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Bh.getNormalMatrix(e),a=this.coplanarPoint(Cs).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wn=new Ni,La=new v;class kr{constructor(e=new Yn,t=new Yn,i=new Yn,a=new Yn,s=new Yn,o=new Yn){this.planes=[e,t,i,a,s,o]}set(e,t,i,a,s,o){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(i),d[3].copy(a),d[4].copy(s),d[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Mn){const i=this.planes,a=e.elements,s=a[0],o=a[1],d=a[2],u=a[3],l=a[4],h=a[5],m=a[6],p=a[7],g=a[8],M=a[9],b=a[10],w=a[11],x=a[12],P=a[13],C=a[14],S=a[15];if(i[0].setComponents(u-s,p-l,w-g,S-x).normalize(),i[1].setComponents(u+s,p+l,w+g,S+x).normalize(),i[2].setComponents(u+o,p+h,w+M,S+P).normalize(),i[3].setComponents(u-o,p-h,w-M,S-P).normalize(),i[4].setComponents(u-d,p-m,w-b,S-C).normalize(),t===Mn)i[5].setComponents(u+d,p+m,w+b,S+C).normalize();else if(t===$a)i[5].setComponents(d,m,b,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(e){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(La.x=a.normal.x>0?e.max.x:e.min.x,La.y=a.normal.y>0?e.max.y:e.min.y,La.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(La)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zc(){let n=null,e=!1,t=null,i=null;function a(s,o){t(s,o),i=n.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(a),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Hh(n){const e=new WeakMap;function t(d,u){const l=d.array,h=d.usage,m=l.byteLength,p=n.createBuffer();n.bindBuffer(u,p),n.bufferData(u,l,h),d.onUploadCallback();let g;if(l instanceof Float32Array)g=n.FLOAT;else if(l instanceof Uint16Array)d.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=n.SHORT;else if(l instanceof Uint32Array)g=n.UNSIGNED_INT;else if(l instanceof Int32Array)g=n.INT;else if(l instanceof Int8Array)g=n.BYTE;else if(l instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:d.version,size:m}}function i(d,u,l){const h=u.array,m=u.updateRanges;if(n.bindBuffer(l,d),m.length===0)n.bufferSubData(l,0,h);else{m.sort((g,M)=>g.start-M.start);let p=0;for(let g=1;g<m.length;g++){const M=m[p],b=m[g];b.start<=M.start+M.count+1?M.count=Math.max(M.count,b.start+b.count-M.start):(++p,m[p]=b)}m.length=p+1;for(let g=0,M=m.length;g<M;g++){const b=m[g];n.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}u.clearUpdateRanges()}u.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function s(d){d.isInterleavedBufferAttribute&&(d=d.data);const u=e.get(d);u&&(n.deleteBuffer(u.buffer),e.delete(d))}function o(d,u){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const h=e.get(d);(!h||h.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const l=e.get(d);if(l===void 0)e.set(d,t(d,u));else if(l.version<d.version){if(l.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,d,u),l.version=d.version}}return{get:a,remove:s,update:o}}class Fi extends Ut{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const s=e/2,o=t/2,d=Math.floor(i),u=Math.floor(a),l=d+1,h=u+1,m=e/d,p=t/u,g=[],M=[],b=[],w=[];for(let x=0;x<h;x++){const P=x*p-o;for(let C=0;C<l;C++){const S=C*m-s;M.push(S,-P,0),b.push(0,0,1),w.push(C/d),w.push(1-x/u)}}for(let x=0;x<u;x++)for(let P=0;P<d;P++){const C=P+l*x,S=P+l*(x+1),H=P+1+l*(x+1),L=P+1+l*x;g.push(C,S,L),g.push(S,H,L)}this.setIndex(g),this.setAttribute("position",new pt(M,3)),this.setAttribute("normal",new pt(b,3)),this.setAttribute("uv",new pt(w,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Gh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vh=`#ifdef USE_ALPHAHASH
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
#endif`,Wh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kh=`#ifdef USE_AOMAP
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
#endif`,Jh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zh=`#ifdef USE_BATCHING
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
#endif`,$h=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tu=`#ifdef USE_IRIDESCENCE
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
#endif`,nu=`#ifdef USE_BUMPMAP
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
#endif`,iu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,au=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,su=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ru=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ou=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,hu=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,uu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fu=`vec3 transformedNormal = objectNormal;
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
#endif`,pu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_u="gl_FragColor = linearToOutputTexel( gl_FragColor );",wu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vu=`#ifdef USE_ENVMAP
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
#endif`,Mu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bu=`#ifdef USE_ENVMAP
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
#endif`,yu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Su=`#ifdef USE_ENVMAP
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
#endif`,Eu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Au=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ru=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cu=`#ifdef USE_GRADIENTMAP
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
}`,Pu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Du=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Iu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zu=`uniform bool receiveShadow;
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
#endif`,Lu=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,Uu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ou=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ku=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Bu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hu=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif`,Gu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ku=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ju=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$u=`#if defined( USE_POINTS_UV )
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
#endif`,ju=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,e0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,t0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,n0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i0=`#ifdef USE_MORPHTARGETS
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
#endif`,a0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,r0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,o0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,l0=`#ifdef USE_NORMALMAP
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
#endif`,h0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,u0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,p0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,m0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,g0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,x0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,w0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,M0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,b0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,y0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,S0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,T0=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,A0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,R0=`#ifdef USE_SKINNING
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
#endif`,C0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,P0=`#ifdef USE_SKINNING
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
#endif`,D0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,I0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,z0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,L0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,U0=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,N0=`#ifdef USE_TRANSMISSION
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
#endif`,O0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const H0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,G0=`uniform sampler2D t2D;
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
}`,V0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y0=`#include <common>
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
}`,K0=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,J0=`#define DISTANCE
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
}`,Z0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,$0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q0=`uniform float scale;
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
}`,ef=`uniform vec3 diffuse;
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
}`,tf=`#include <common>
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
}`,nf=`uniform vec3 diffuse;
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
}`,af=`#define LAMBERT
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
}`,sf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,rf=`#define MATCAP
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
}`,of=`#define MATCAP
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
}`,cf=`#define NORMAL
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
}`,df=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lf=`#define PHONG
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
}`,hf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,uf=`#define STANDARD
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
}`,ff=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,pf=`#define TOON
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
}`,mf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,gf=`uniform float size;
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
}`,xf=`uniform vec3 diffuse;
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
}`,_f=`#include <common>
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
}`,wf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,vf=`uniform float rotation;
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
}`,Mf=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:Gh,alphahash_pars_fragment:Vh,alphamap_fragment:Wh,alphamap_pars_fragment:Xh,alphatest_fragment:qh,alphatest_pars_fragment:Yh,aomap_fragment:Kh,aomap_pars_fragment:Jh,batching_pars_vertex:Zh,batching_vertex:$h,begin_vertex:jh,beginnormal_vertex:Qh,bsdfs:eu,iridescence_fragment:tu,bumpmap_pars_fragment:nu,clipping_planes_fragment:iu,clipping_planes_pars_fragment:au,clipping_planes_pars_vertex:su,clipping_planes_vertex:ru,color_fragment:ou,color_pars_fragment:cu,color_pars_vertex:du,color_vertex:lu,common:hu,cube_uv_reflection_fragment:uu,defaultnormal_vertex:fu,displacementmap_pars_vertex:pu,displacementmap_vertex:mu,emissivemap_fragment:gu,emissivemap_pars_fragment:xu,colorspace_fragment:_u,colorspace_pars_fragment:wu,envmap_fragment:vu,envmap_common_pars_fragment:Mu,envmap_pars_fragment:bu,envmap_pars_vertex:yu,envmap_physical_pars_fragment:Lu,envmap_vertex:Su,fog_vertex:Eu,fog_pars_vertex:Tu,fog_fragment:Au,fog_pars_fragment:Ru,gradientmap_pars_fragment:Cu,lightmap_pars_fragment:Pu,lights_lambert_fragment:Du,lights_lambert_pars_fragment:Iu,lights_pars_begin:zu,lights_toon_fragment:Uu,lights_toon_pars_fragment:Nu,lights_phong_fragment:Ou,lights_phong_pars_fragment:Fu,lights_physical_fragment:ku,lights_physical_pars_fragment:Bu,lights_fragment_begin:Hu,lights_fragment_maps:Gu,lights_fragment_end:Vu,logdepthbuf_fragment:Wu,logdepthbuf_pars_fragment:Xu,logdepthbuf_pars_vertex:qu,logdepthbuf_vertex:Yu,map_fragment:Ku,map_pars_fragment:Ju,map_particle_fragment:Zu,map_particle_pars_fragment:$u,metalnessmap_fragment:ju,metalnessmap_pars_fragment:Qu,morphinstance_vertex:e0,morphcolor_vertex:t0,morphnormal_vertex:n0,morphtarget_pars_vertex:i0,morphtarget_vertex:a0,normal_fragment_begin:s0,normal_fragment_maps:r0,normal_pars_fragment:o0,normal_pars_vertex:c0,normal_vertex:d0,normalmap_pars_fragment:l0,clearcoat_normal_fragment_begin:h0,clearcoat_normal_fragment_maps:u0,clearcoat_pars_fragment:f0,iridescence_pars_fragment:p0,opaque_fragment:m0,packing:g0,premultiplied_alpha_fragment:x0,project_vertex:_0,dithering_fragment:w0,dithering_pars_fragment:v0,roughnessmap_fragment:M0,roughnessmap_pars_fragment:b0,shadowmap_pars_fragment:y0,shadowmap_pars_vertex:S0,shadowmap_vertex:E0,shadowmask_pars_fragment:T0,skinbase_vertex:A0,skinning_pars_vertex:R0,skinning_vertex:C0,skinnormal_vertex:P0,specularmap_fragment:D0,specularmap_pars_fragment:I0,tonemapping_fragment:z0,tonemapping_pars_fragment:L0,transmission_fragment:U0,transmission_pars_fragment:N0,uv_pars_fragment:O0,uv_pars_vertex:F0,uv_vertex:k0,worldpos_vertex:B0,background_vert:H0,background_frag:G0,backgroundCube_vert:V0,backgroundCube_frag:W0,cube_vert:X0,cube_frag:q0,depth_vert:Y0,depth_frag:K0,distanceRGBA_vert:J0,distanceRGBA_frag:Z0,equirect_vert:$0,equirect_frag:j0,linedashed_vert:Q0,linedashed_frag:ef,meshbasic_vert:tf,meshbasic_frag:nf,meshlambert_vert:af,meshlambert_frag:sf,meshmatcap_vert:rf,meshmatcap_frag:of,meshnormal_vert:cf,meshnormal_frag:df,meshphong_vert:lf,meshphong_frag:hf,meshphysical_vert:uf,meshphysical_frag:ff,meshtoon_vert:pf,meshtoon_frag:mf,points_vert:gf,points_frag:xf,shadow_vert:_f,shadow_frag:wf,sprite_vert:vf,sprite_frag:Mf},le={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},cn={basic:{uniforms:It([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:It([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new We(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:It([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:It([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:It([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new We(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:It([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:It([le.points,le.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:It([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:It([le.common,le.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:It([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:It([le.sprite,le.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:It([le.common,le.displacementmap,{referencePosition:{value:new v},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:It([le.lights,le.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};cn.physical={uniforms:It([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Ua={r:0,b:0,g:0},Xn=new fn,bf=new ht;function yf(n,e,t,i,a,s,o){const d=new We(0);let u=s===!0?0:1,l,h,m=null,p=0,g=null;function M(P){let C=P.isScene===!0?P.background:null;return C&&C.isTexture&&(C=(P.backgroundBlurriness>0?t:e).get(C)),C}function b(P){let C=!1;const S=M(P);S===null?x(d,u):S&&S.isColor&&(x(S,1),C=!0);const H=n.xr.getEnvironmentBlendMode();H==="additive"?i.buffers.color.setClear(0,0,0,1,o):H==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||C)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function w(P,C){const S=M(C);S&&(S.isCubeTexture||S.mapping===ts)?(h===void 0&&(h=new ot(new f(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:zi(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(H,L,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),Xn.copy(C.backgroundRotation),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(bf.makeRotationFromEuler(Xn)),h.material.toneMapped=Qe.getTransfer(S.colorSpace)!==rt,(m!==S||p!==S.version||g!==n.toneMapping)&&(h.material.needsUpdate=!0,m=S,p=S.version,g=n.toneMapping),h.layers.enableAll(),P.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new ot(new Fi(2,2),new Sn({name:"BackgroundMaterial",uniforms:zi(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(S.colorSpace)!==rt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(m!==S||p!==S.version||g!==n.toneMapping)&&(l.material.needsUpdate=!0,m=S,p=S.version,g=n.toneMapping),l.layers.enableAll(),P.unshift(l,l.geometry,l.material,0,0,null))}function x(P,C){P.getRGB(Ua,Pc(n)),i.buffers.color.setClear(Ua.r,Ua.g,Ua.b,C,o)}return{getClearColor:function(){return d},setClearColor:function(P,C=1){d.set(P),u=C,x(d,u)},getClearAlpha:function(){return u},setClearAlpha:function(P){u=P,x(d,u)},render:b,addToRenderList:w}}function Sf(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},a=p(null);let s=a,o=!1;function d(E,N,Y,q,$){let ie=!1;const j=m(q,Y,N);s!==j&&(s=j,l(s.object)),ie=g(E,q,Y,$),ie&&M(E,q,Y,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(ie||o)&&(o=!1,S(E,N,Y,q),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function u(){return n.createVertexArray()}function l(E){return n.bindVertexArray(E)}function h(E){return n.deleteVertexArray(E)}function m(E,N,Y){const q=Y.wireframe===!0;let $=i[E.id];$===void 0&&($={},i[E.id]=$);let ie=$[N.id];ie===void 0&&(ie={},$[N.id]=ie);let j=ie[q];return j===void 0&&(j=p(u()),ie[q]=j),j}function p(E){const N=[],Y=[],q=[];for(let $=0;$<t;$++)N[$]=0,Y[$]=0,q[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:Y,attributeDivisors:q,object:E,attributes:{},index:null}}function g(E,N,Y,q){const $=s.attributes,ie=N.attributes;let j=0;const ce=Y.getAttributes();for(const J in ce)if(ce[J].location>=0){const _e=$[J];let Re=ie[J];if(Re===void 0&&(J==="instanceMatrix"&&E.instanceMatrix&&(Re=E.instanceMatrix),J==="instanceColor"&&E.instanceColor&&(Re=E.instanceColor)),_e===void 0||_e.attribute!==Re||Re&&_e.data!==Re.data)return!0;j++}return s.attributesNum!==j||s.index!==q}function M(E,N,Y,q){const $={},ie=N.attributes;let j=0;const ce=Y.getAttributes();for(const J in ce)if(ce[J].location>=0){let _e=ie[J];_e===void 0&&(J==="instanceMatrix"&&E.instanceMatrix&&(_e=E.instanceMatrix),J==="instanceColor"&&E.instanceColor&&(_e=E.instanceColor));const Re={};Re.attribute=_e,_e&&_e.data&&(Re.data=_e.data),$[J]=Re,j++}s.attributes=$,s.attributesNum=j,s.index=q}function b(){const E=s.newAttributes;for(let N=0,Y=E.length;N<Y;N++)E[N]=0}function w(E){x(E,0)}function x(E,N){const Y=s.newAttributes,q=s.enabledAttributes,$=s.attributeDivisors;Y[E]=1,q[E]===0&&(n.enableVertexAttribArray(E),q[E]=1),$[E]!==N&&(n.vertexAttribDivisor(E,N),$[E]=N)}function P(){const E=s.newAttributes,N=s.enabledAttributes;for(let Y=0,q=N.length;Y<q;Y++)N[Y]!==E[Y]&&(n.disableVertexAttribArray(Y),N[Y]=0)}function C(E,N,Y,q,$,ie,j){j===!0?n.vertexAttribIPointer(E,N,Y,$,ie):n.vertexAttribPointer(E,N,Y,q,$,ie)}function S(E,N,Y,q){b();const $=q.attributes,ie=Y.getAttributes(),j=N.defaultAttributeValues;for(const ce in ie){const J=ie[ce];if(J.location>=0){let ue=$[ce];if(ue===void 0&&(ce==="instanceMatrix"&&E.instanceMatrix&&(ue=E.instanceMatrix),ce==="instanceColor"&&E.instanceColor&&(ue=E.instanceColor)),ue!==void 0){const _e=ue.normalized,Re=ue.itemSize,Xe=e.get(ue);if(Xe===void 0)continue;const it=Xe.buffer,ee=Xe.type,de=Xe.bytesPerElement,Ee=ee===n.INT||ee===n.UNSIGNED_INT||ue.gpuType===Dr;if(ue.isInterleavedBufferAttribute){const fe=ue.data,Le=fe.stride,Oe=ue.offset;if(fe.isInstancedInterleavedBuffer){for(let qe=0;qe<J.locationSize;qe++)x(J.location+qe,fe.meshPerAttribute);E.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let qe=0;qe<J.locationSize;qe++)w(J.location+qe);n.bindBuffer(n.ARRAY_BUFFER,it);for(let qe=0;qe<J.locationSize;qe++)C(J.location+qe,Re/J.locationSize,ee,_e,Le*de,(Oe+Re/J.locationSize*qe)*de,Ee)}else{if(ue.isInstancedBufferAttribute){for(let fe=0;fe<J.locationSize;fe++)x(J.location+fe,ue.meshPerAttribute);E.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let fe=0;fe<J.locationSize;fe++)w(J.location+fe);n.bindBuffer(n.ARRAY_BUFFER,it);for(let fe=0;fe<J.locationSize;fe++)C(J.location+fe,Re/J.locationSize,ee,_e,Re*de,Re/J.locationSize*fe*de,Ee)}}else if(j!==void 0){const _e=j[ce];if(_e!==void 0)switch(_e.length){case 2:n.vertexAttrib2fv(J.location,_e);break;case 3:n.vertexAttrib3fv(J.location,_e);break;case 4:n.vertexAttrib4fv(J.location,_e);break;default:n.vertexAttrib1fv(J.location,_e)}}}}P()}function H(){O();for(const E in i){const N=i[E];for(const Y in N){const q=N[Y];for(const $ in q)h(q[$].object),delete q[$];delete N[Y]}delete i[E]}}function L(E){if(i[E.id]===void 0)return;const N=i[E.id];for(const Y in N){const q=N[Y];for(const $ in q)h(q[$].object),delete q[$];delete N[Y]}delete i[E.id]}function U(E){for(const N in i){const Y=i[N];if(Y[E.id]===void 0)continue;const q=Y[E.id];for(const $ in q)h(q[$].object),delete q[$];delete Y[E.id]}}function O(){R(),o=!0,s!==a&&(s=a,l(s.object))}function R(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:O,resetDefaultState:R,dispose:H,releaseStatesOfGeometry:L,releaseStatesOfProgram:U,initAttributes:b,enableAttribute:w,disableUnusedAttributes:P}}function Ef(n,e,t){let i;function a(l){i=l}function s(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function o(l,h,m){m!==0&&(n.drawArraysInstanced(i,l,h,m),t.update(h,i,m))}function d(l,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,m);let g=0;for(let M=0;M<m;M++)g+=h[M];t.update(g,i,1)}function u(l,h,m,p){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let M=0;M<l.length;M++)o(l[M],h[M],p[M]);else{g.multiDrawArraysInstancedWEBGL(i,l,0,h,0,p,0,m);let M=0;for(let b=0;b<m;b++)M+=h[b]*p[b];t.update(M,i,1)}}this.setMode=a,this.render=s,this.renderInstances=o,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function Tf(n,e,t,i){let a;function s(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");a=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function o(U){return!(U!==nn&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(U){const O=U===sa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==yn&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==hn&&!O)}function u(U){if(U==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=u(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const m=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),g=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),w=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),P=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),H=M>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:o,textureTypeReadable:d,precision:l,logarithmicDepthBuffer:m,reverseDepthBuffer:p,maxTextures:g,maxVertexTextures:M,maxTextureSize:b,maxCubemapSize:w,maxAttributes:x,maxVertexUniforms:P,maxVaryings:C,maxFragmentUniforms:S,vertexTextures:H,maxSamples:L}}function Af(n){const e=this;let t=null,i=0,a=!1,s=!1;const o=new Yn,d=new Ge,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(m,p){const g=m.length!==0||p||i!==0||a;return a=p,i=m.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,p){t=h(m,p,0)},this.setState=function(m,p,g){const M=m.clippingPlanes,b=m.clipIntersection,w=m.clipShadows,x=n.get(m);if(!a||M===null||M.length===0||s&&!w)s?h(null):l();else{const P=s?0:i,C=P*4;let S=x.clippingState||null;u.value=S,S=h(M,p,C,g);for(let H=0;H!==C;++H)S[H]=t[H];x.clippingState=S,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=P}};function l(){u.value!==t&&(u.value=t,u.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(m,p,g,M){const b=m!==null?m.length:0;let w=null;if(b!==0){if(w=u.value,M!==!0||w===null){const x=g+b*4,P=p.matrixWorldInverse;d.getNormalMatrix(P),(w===null||w.length<x)&&(w=new Float32Array(x));for(let C=0,S=g;C!==b;++C,S+=4)o.copy(m[C]).applyMatrix4(P,d),o.normal.toArray(w,S),w[S+3]=o.constant}u.value=w,u.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,w}}function Rf(n){let e=new WeakMap;function t(o,d){return d===Zs?o.mapping=Ci:d===$s&&(o.mapping=Pi),o}function i(o){if(o&&o.isTexture){const d=o.mapping;if(d===Zs||d===$s)if(e.has(o)){const u=e.get(o).texture;return t(u,o.mapping)}else{const u=o.image;if(u&&u.height>0){const l=new Fh(u.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",a),t(l.texture,o.mapping)}else return null}}return o}function a(o){const d=o.target;d.removeEventListener("dispose",a);const u=e.get(d);u!==void 0&&(e.delete(d),u.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Lc extends Dc{constructor(e=-1,t=1,i=1,a=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-e,o=i+e,d=a+t,u=a-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,d-=h*this.view.offsetY,u=d-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,d,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Si=4,bo=[.125,.215,.35,.446,.526,.582],$n=20,Ps=new Lc,yo=new We;let Ds=null,Is=0,zs=0,Ls=!1;const Kn=(1+Math.sqrt(5))/2,vi=1/Kn,So=[new v(-Kn,vi,0),new v(Kn,vi,0),new v(-vi,0,Kn),new v(vi,0,Kn),new v(0,Kn,-vi),new v(0,Kn,vi),new v(-1,1,-1),new v(1,1,-1),new v(-1,1,1),new v(1,1,1)];class Eo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,a=100){Ds=this._renderer.getRenderTarget(),Is=this._renderer.getActiveCubeFace(),zs=this._renderer.getActiveMipmapLevel(),Ls=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,a,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ro(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ao(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ds,Is,zs),this._renderer.xr.enabled=Ls,e.scissorTest=!1,Na(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ci||e.mapping===Pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ds=this._renderer.getRenderTarget(),Is=this._renderer.getActiveCubeFace(),zs=this._renderer.getActiveMipmapLevel(),Ls=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:sa,format:nn,colorSpace:Li,depthBuffer:!1},a=To(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=To(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cf(s)),this._blurMaterial=Pf(s,e,t)}return a}_compileMaterial(e){const t=new ot(this._lodPlanes[0],e);this._renderer.compile(t,Ps)}_sceneToCubeUV(e,t,i,a){const d=new en(90,1,t,i),u=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,m=h.autoClear,p=h.toneMapping;h.getClearColor(yo),h.toneMapping=On,h.autoClear=!1;const g=new Fr({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),M=new ot(new f,g);let b=!1;const w=e.background;w?w.isColor&&(g.color.copy(w),e.background=null,b=!0):(g.color.copy(yo),b=!0);for(let x=0;x<6;x++){const P=x%3;P===0?(d.up.set(0,u[x],0),d.lookAt(l[x],0,0)):P===1?(d.up.set(0,0,u[x]),d.lookAt(0,l[x],0)):(d.up.set(0,u[x],0),d.lookAt(0,0,l[x]));const C=this._cubeSize;Na(a,P*C,x>2?C:0,C,C),h.setRenderTarget(a),b&&h.render(M,d),h.render(e,d)}M.geometry.dispose(),M.material.dispose(),h.toneMapping=p,h.autoClear=m,e.background=w}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===Ci||e.mapping===Pi;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ro()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ao());const s=a?this._cubemapMaterial:this._equirectMaterial,o=new ot(this._lodPlanes[0],s),d=s.uniforms;d.envMap.value=e;const u=this._cubeSize;Na(t,0,0,3*u,2*u),i.setRenderTarget(t),i.render(o,Ps)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let s=1;s<a;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),d=So[(a-s-1)%So.length];this._blur(e,s-1,s,o,d)}t.autoClear=i}_blur(e,t,i,a,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,a,"latitudinal",s),this._halfBlur(o,e,i,i,a,"longitudinal",s)}_halfBlur(e,t,i,a,s,o,d){const u=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,m=new ot(this._lodPlanes[a],l),p=l.uniforms,g=this._sizeLods[i]-1,M=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*$n-1),b=s/M,w=isFinite(s)?1+Math.floor(h*b):$n;w>$n&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${w} samples when the maximum is set to ${$n}`);const x=[];let P=0;for(let U=0;U<$n;++U){const O=U/b,R=Math.exp(-O*O/2);x.push(R),U===0?P+=R:U<w&&(P+=2*R)}for(let U=0;U<x.length;U++)x[U]=x[U]/P;p.envMap.value=e.texture,p.samples.value=w,p.weights.value=x,p.latitudinal.value=o==="latitudinal",d&&(p.poleAxis.value=d);const{_lodMax:C}=this;p.dTheta.value=M,p.mipInt.value=C-i;const S=this._sizeLods[a],H=3*S*(a>C-Si?a-C+Si:0),L=4*(this._cubeSize-S);Na(t,H,L,3*S,2*S),u.setRenderTarget(t),u.render(m,Ps)}}function Cf(n){const e=[],t=[],i=[];let a=n;const s=n-Si+1+bo.length;for(let o=0;o<s;o++){const d=Math.pow(2,a);t.push(d);let u=1/d;o>n-Si?u=bo[o-n+Si-1]:o===0&&(u=0),i.push(u);const l=1/(d-2),h=-l,m=1+l,p=[h,h,m,h,m,m,h,h,m,m,h,m],g=6,M=6,b=3,w=2,x=1,P=new Float32Array(b*M*g),C=new Float32Array(w*M*g),S=new Float32Array(x*M*g);for(let L=0;L<g;L++){const U=L%3*2/3-1,O=L>2?0:-1,R=[U,O,0,U+2/3,O,0,U+2/3,O+1,0,U,O,0,U+2/3,O+1,0,U,O+1,0];P.set(R,b*M*L),C.set(p,w*M*L);const E=[L,L,L,L,L,L];S.set(E,x*M*L)}const H=new Ut;H.setAttribute("position",new Xt(P,b)),H.setAttribute("uv",new Xt(C,w)),H.setAttribute("faceIndex",new Xt(S,x)),e.push(H),a>Si&&a--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function To(n,e,t){const i=new ti(n,e,t);return i.texture.mapping=ts,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Na(n,e,t,i,a){n.viewport.set(e,t,i,a),n.scissor.set(e,t,i,a)}function Pf(n,e,t){const i=new Float32Array($n),a=new v(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Br(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Ao(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Br(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Ro(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Br(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Br(){return`

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
	`}function Df(n){let e=new WeakMap,t=null;function i(d){if(d&&d.isTexture){const u=d.mapping,l=u===Zs||u===$s,h=u===Ci||u===Pi;if(l||h){let m=e.get(d);const p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return t===null&&(t=new Eo(n)),m=l?t.fromEquirectangular(d,m):t.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{const g=d.image;return l&&g&&g.height>0||h&&g&&a(g)?(t===null&&(t=new Eo(n)),m=l?t.fromEquirectangular(d):t.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",s),m.texture):null}}}return d}function a(d){let u=0;const l=6;for(let h=0;h<l;h++)d[h]!==void 0&&u++;return u===l}function s(d){const u=d.target;u.removeEventListener("dispose",s);const l=e.get(u);l!==void 0&&(e.delete(u),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function If(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=n.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&Qi("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function zf(n,e,t,i){const a={},s=new WeakMap;function o(m){const p=m.target;p.index!==null&&e.remove(p.index);for(const M in p.attributes)e.remove(p.attributes[M]);for(const M in p.morphAttributes){const b=p.morphAttributes[M];for(let w=0,x=b.length;w<x;w++)e.remove(b[w])}p.removeEventListener("dispose",o),delete a[p.id];const g=s.get(p);g&&(e.remove(g),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function d(m,p){return a[p.id]===!0||(p.addEventListener("dispose",o),a[p.id]=!0,t.memory.geometries++),p}function u(m){const p=m.attributes;for(const M in p)e.update(p[M],n.ARRAY_BUFFER);const g=m.morphAttributes;for(const M in g){const b=g[M];for(let w=0,x=b.length;w<x;w++)e.update(b[w],n.ARRAY_BUFFER)}}function l(m){const p=[],g=m.index,M=m.attributes.position;let b=0;if(g!==null){const P=g.array;b=g.version;for(let C=0,S=P.length;C<S;C+=3){const H=P[C+0],L=P[C+1],U=P[C+2];p.push(H,L,L,U,U,H)}}else if(M!==void 0){const P=M.array;b=M.version;for(let C=0,S=P.length/3-1;C<S;C+=3){const H=C+0,L=C+1,U=C+2;p.push(H,L,L,U,U,H)}}else return;const w=new(bc(p)?Cc:Rc)(p,1);w.version=b;const x=s.get(m);x&&e.remove(x),s.set(m,w)}function h(m){const p=s.get(m);if(p){const g=m.index;g!==null&&p.version<g.version&&l(m)}else l(m);return s.get(m)}return{get:d,update:u,getWireframeAttribute:h}}function Lf(n,e,t){let i;function a(p){i=p}let s,o;function d(p){s=p.type,o=p.bytesPerElement}function u(p,g){n.drawElements(i,g,s,p*o),t.update(g,i,1)}function l(p,g,M){M!==0&&(n.drawElementsInstanced(i,g,s,p*o,M),t.update(g,i,M))}function h(p,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,p,0,M);let w=0;for(let x=0;x<M;x++)w+=g[x];t.update(w,i,1)}function m(p,g,M,b){if(M===0)return;const w=e.get("WEBGL_multi_draw");if(w===null)for(let x=0;x<p.length;x++)l(p[x]/o,g[x],b[x]);else{w.multiDrawElementsInstancedWEBGL(i,g,0,s,p,0,b,0,M);let x=0;for(let P=0;P<M;P++)x+=g[P]*b[P];t.update(x,i,1)}}this.setMode=a,this.setIndex=d,this.render=u,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function Uf(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,d){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=d*(s/3);break;case n.LINES:t.lines+=d*(s/2);break;case n.LINE_STRIP:t.lines+=d*(s-1);break;case n.LINE_LOOP:t.lines+=d*s;break;case n.POINTS:t.points+=d*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function Nf(n,e,t){const i=new WeakMap,a=new xt;function s(o,d,u){const l=o.morphTargetInfluences,h=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,m=h!==void 0?h.length:0;let p=i.get(d);if(p===void 0||p.count!==m){let R=function(){U.dispose(),i.delete(d),d.removeEventListener("dispose",R)};p!==void 0&&p.texture.dispose();const g=d.morphAttributes.position!==void 0,M=d.morphAttributes.normal!==void 0,b=d.morphAttributes.color!==void 0,w=d.morphAttributes.position||[],x=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let C=0;g===!0&&(C=1),M===!0&&(C=2),b===!0&&(C=3);let S=d.attributes.position.count*C,H=1;S>e.maxTextureSize&&(H=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const L=new Float32Array(S*H*4*m),U=new Sc(L,S,H,m);U.type=hn,U.needsUpdate=!0;const O=C*4;for(let E=0;E<m;E++){const N=w[E],Y=x[E],q=P[E],$=S*H*4*E;for(let ie=0;ie<N.count;ie++){const j=ie*O;g===!0&&(a.fromBufferAttribute(N,ie),L[$+j+0]=a.x,L[$+j+1]=a.y,L[$+j+2]=a.z,L[$+j+3]=0),M===!0&&(a.fromBufferAttribute(Y,ie),L[$+j+4]=a.x,L[$+j+5]=a.y,L[$+j+6]=a.z,L[$+j+7]=0),b===!0&&(a.fromBufferAttribute(q,ie),L[$+j+8]=a.x,L[$+j+9]=a.y,L[$+j+10]=a.z,L[$+j+11]=q.itemSize===4?a.w:1)}}p={count:m,texture:U,size:new Pe(S,H)},i.set(d,p),d.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)u.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let b=0;b<l.length;b++)g+=l[b];const M=d.morphTargetsRelative?1:1-g;u.getUniforms().setValue(n,"morphTargetBaseInfluence",M),u.getUniforms().setValue(n,"morphTargetInfluences",l)}u.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:s}}function Of(n,e,t,i){let a=new WeakMap;function s(u){const l=i.render.frame,h=u.geometry,m=e.get(u,h);if(a.get(m)!==l&&(e.update(m),a.set(m,l)),u.isInstancedMesh&&(u.hasEventListener("dispose",d)===!1&&u.addEventListener("dispose",d),a.get(u)!==l&&(t.update(u.instanceMatrix,n.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,n.ARRAY_BUFFER),a.set(u,l))),u.isSkinnedMesh){const p=u.skeleton;a.get(p)!==l&&(p.update(),a.set(p,l))}return m}function o(){a=new WeakMap}function d(u){const l=u.target;l.removeEventListener("dispose",d),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}class Uc extends Ct{constructor(e,t,i,a,s,o,d,u,l,h=Ti){if(h!==Ti&&h!==Ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ti&&(i=ei),i===void 0&&h===Ii&&(i=Di),super(null,a,s,o,d,u,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=d!==void 0?d:Wt,this.minFilter=u!==void 0?u:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Nc=new Ct,Co=new Uc(1,1),Oc=new Sc,Fc=new bh,kc=new Ic,Po=[],Do=[],Io=new Float32Array(16),zo=new Float32Array(9),Lo=new Float32Array(4);function ki(n,e,t){const i=n[0];if(i<=0||i>0)return n;const a=e*t;let s=Po[a];if(s===void 0&&(s=new Float32Array(a),Po[a]=s),e!==0){i.toArray(s,0);for(let o=1,d=0;o!==e;++o)d+=t,n[o].toArray(s,d)}return s}function Mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function is(n,e){let t=Do[e];t===void 0&&(t=new Int32Array(e),Do[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ff(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function kf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2fv(this.addr,e),bt(t,e)}}function Bf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;n.uniform3fv(this.addr,e),bt(t,e)}}function Hf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4fv(this.addr,e),bt(t,e)}}function Gf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,i))return;Lo.set(i),n.uniformMatrix2fv(this.addr,!1,Lo),bt(t,i)}}function Vf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,i))return;zo.set(i),n.uniformMatrix3fv(this.addr,!1,zo),bt(t,i)}}function Wf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,i))return;Io.set(i),n.uniformMatrix4fv(this.addr,!1,Io),bt(t,i)}}function Xf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function qf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2iv(this.addr,e),bt(t,e)}}function Yf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3iv(this.addr,e),bt(t,e)}}function Kf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4iv(this.addr,e),bt(t,e)}}function Jf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Zf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2uiv(this.addr,e),bt(t,e)}}function $f(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3uiv(this.addr,e),bt(t,e)}}function jf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4uiv(this.addr,e),bt(t,e)}}function Qf(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);let s;this.type===n.SAMPLER_2D_SHADOW?(Co.compareFunction=Mc,s=Co):s=Nc,t.setTexture2D(e||s,a)}function e1(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||Fc,a)}function t1(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||kc,a)}function n1(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||Oc,a)}function i1(n){switch(n){case 5126:return Ff;case 35664:return kf;case 35665:return Bf;case 35666:return Hf;case 35674:return Gf;case 35675:return Vf;case 35676:return Wf;case 5124:case 35670:return Xf;case 35667:case 35671:return qf;case 35668:case 35672:return Yf;case 35669:case 35673:return Kf;case 5125:return Jf;case 36294:return Zf;case 36295:return $f;case 36296:return jf;case 35678:case 36198:case 36298:case 36306:case 35682:return Qf;case 35679:case 36299:case 36307:return e1;case 35680:case 36300:case 36308:case 36293:return t1;case 36289:case 36303:case 36311:case 36292:return n1}}function a1(n,e){n.uniform1fv(this.addr,e)}function s1(n,e){const t=ki(e,this.size,2);n.uniform2fv(this.addr,t)}function r1(n,e){const t=ki(e,this.size,3);n.uniform3fv(this.addr,t)}function o1(n,e){const t=ki(e,this.size,4);n.uniform4fv(this.addr,t)}function c1(n,e){const t=ki(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function d1(n,e){const t=ki(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function l1(n,e){const t=ki(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function h1(n,e){n.uniform1iv(this.addr,e)}function u1(n,e){n.uniform2iv(this.addr,e)}function f1(n,e){n.uniform3iv(this.addr,e)}function p1(n,e){n.uniform4iv(this.addr,e)}function m1(n,e){n.uniform1uiv(this.addr,e)}function g1(n,e){n.uniform2uiv(this.addr,e)}function x1(n,e){n.uniform3uiv(this.addr,e)}function _1(n,e){n.uniform4uiv(this.addr,e)}function w1(n,e,t){const i=this.cache,a=e.length,s=is(t,a);Mt(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==a;++o)t.setTexture2D(e[o]||Nc,s[o])}function v1(n,e,t){const i=this.cache,a=e.length,s=is(t,a);Mt(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==a;++o)t.setTexture3D(e[o]||Fc,s[o])}function M1(n,e,t){const i=this.cache,a=e.length,s=is(t,a);Mt(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==a;++o)t.setTextureCube(e[o]||kc,s[o])}function b1(n,e,t){const i=this.cache,a=e.length,s=is(t,a);Mt(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==a;++o)t.setTexture2DArray(e[o]||Oc,s[o])}function y1(n){switch(n){case 5126:return a1;case 35664:return s1;case 35665:return r1;case 35666:return o1;case 35674:return c1;case 35675:return d1;case 35676:return l1;case 5124:case 35670:return h1;case 35667:case 35671:return u1;case 35668:case 35672:return f1;case 35669:case 35673:return p1;case 5125:return m1;case 36294:return g1;case 36295:return x1;case 36296:return _1;case 35678:case 36198:case 36298:case 36306:case 35682:return w1;case 35679:case 36299:case 36307:return v1;case 35680:case 36300:case 36308:case 36293:return M1;case 36289:case 36303:case 36311:case 36292:return b1}}class S1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=i1(t.type)}}class E1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=y1(t.type)}}class T1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let s=0,o=a.length;s!==o;++s){const d=a[s];d.setValue(e,t[d.id],i)}}}const Us=/(\w+)(\])?(\[|\.)?/g;function Uo(n,e){n.seq.push(e),n.map[e.id]=e}function A1(n,e,t){const i=n.name,a=i.length;for(Us.lastIndex=0;;){const s=Us.exec(i),o=Us.lastIndex;let d=s[1];const u=s[2]==="]",l=s[3];if(u&&(d=d|0),l===void 0||l==="["&&o+2===a){Uo(t,l===void 0?new S1(d,n,e):new E1(d,n,e));break}else{let m=t.map[d];m===void 0&&(m=new T1(d),Uo(t,m)),t=m}}}class Ja{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const s=e.getActiveUniform(t,a),o=e.getUniformLocation(t,s.name);A1(s,o,this)}}setValue(e,t,i,a){const s=this.map[t];s!==void 0&&s.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let s=0,o=t.length;s!==o;++s){const d=t[s],u=i[d.id];u.needsUpdate!==!1&&d.setValue(e,u.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,s=e.length;a!==s;++a){const o=e[a];o.id in t&&i.push(o)}return i}}function No(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const R1=37297;let C1=0;function P1(n,e){const t=n.split(`
`),i=[],a=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=a;o<s;o++){const d=o+1;i.push(`${d===e?">":" "} ${d}: ${t[o]}`)}return i.join(`
`)}const Oo=new Ge;function D1(n){Qe._getMatrix(Oo,Qe.workingColorSpace,n);const e=`mat3( ${Oo.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(n)){case ns:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Fo(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=n.getShaderInfoLog(e).trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+P1(n.getShaderSource(e),o)}else return a}function I1(n,e){const t=D1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function z1(n,e){let t;switch(e){case Zl:t="Linear";break;case $l:t="Reinhard";break;case jl:t="Cineon";break;case dc:t="ACESFilmic";break;case eh:t="AgX";break;case th:t="Neutral";break;case Ql:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Oa=new v;function L1(){Qe.getLuminanceCoefficients(Oa);const n=Oa.x.toFixed(4),e=Oa.y.toFixed(4),t=Oa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function U1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function N1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function O1(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=n.getActiveAttrib(e,a),o=s.name;let d=1;s.type===n.FLOAT_MAT2&&(d=2),s.type===n.FLOAT_MAT3&&(d=3),s.type===n.FLOAT_MAT4&&(d=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:d}}return t}function ea(n){return n!==""}function ko(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bo(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const F1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ar(n){return n.replace(F1,B1)}const k1=new Map;function B1(n,e){let t=Ve[e];if(t===void 0){const i=k1.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ar(t)}const H1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ho(n){return n.replace(H1,G1)}function G1(n,e,t,i){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function Go(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function V1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===rc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===oc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===vn&&(e="SHADOWMAP_TYPE_VSM"),e}function W1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ci:case Pi:e="ENVMAP_TYPE_CUBE";break;case ts:e="ENVMAP_TYPE_CUBE_UV";break}return e}function X1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Pi:e="ENVMAP_MODE_REFRACTION";break}return e}function q1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case cc:e="ENVMAP_BLENDING_MULTIPLY";break;case Kl:e="ENVMAP_BLENDING_MIX";break;case Jl:e="ENVMAP_BLENDING_ADD";break}return e}function Y1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function K1(n,e,t,i){const a=n.getContext(),s=t.defines;let o=t.vertexShader,d=t.fragmentShader;const u=V1(t),l=W1(t),h=X1(t),m=q1(t),p=Y1(t),g=U1(t),M=N1(s),b=a.createProgram();let w,x,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(w=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ea).join(`
`),w.length>0&&(w+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ea).join(`
`),x.length>0&&(x+=`
`)):(w=[Go(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),x=[Go(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?Ve.tonemapping_pars_fragment:"",t.toneMapping!==On?z1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,I1("linearToOutputTexel",t.outputColorSpace),L1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ea).join(`
`)),o=Ar(o),o=ko(o,t),o=Bo(o,t),d=Ar(d),d=ko(d,t),d=Bo(d,t),o=Ho(o),d=Ho(d),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,w=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+w,x=["#define varying in",t.glslVersion===eo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const C=P+w+o,S=P+x+d,H=No(a,a.VERTEX_SHADER,C),L=No(a,a.FRAGMENT_SHADER,S);a.attachShader(b,H),a.attachShader(b,L),t.index0AttributeName!==void 0?a.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(b,0,"position"),a.linkProgram(b);function U(N){if(n.debug.checkShaderErrors){const Y=a.getProgramInfoLog(b).trim(),q=a.getShaderInfoLog(H).trim(),$=a.getShaderInfoLog(L).trim();let ie=!0,j=!0;if(a.getProgramParameter(b,a.LINK_STATUS)===!1)if(ie=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,b,H,L);else{const ce=Fo(a,H,"vertex"),J=Fo(a,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(b,a.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+Y+`
`+ce+`
`+J)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(q===""||$==="")&&(j=!1);j&&(N.diagnostics={runnable:ie,programLog:Y,vertexShader:{log:q,prefix:w},fragmentShader:{log:$,prefix:x}})}a.deleteShader(H),a.deleteShader(L),O=new Ja(a,b),R=O1(a,b)}let O;this.getUniforms=function(){return O===void 0&&U(this),O};let R;this.getAttributes=function(){return R===void 0&&U(this),R};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=a.getProgramParameter(b,R1)),E},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=C1++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=H,this.fragmentShader=L,this}let J1=0;class Z1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(a)===!1&&(o.add(a),a.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new $1(e),t.set(e,i)),i}}class $1{constructor(e){this.id=J1++,this.code=e,this.usedTimes=0}}function j1(n,e,t,i,a,s,o){const d=new Tc,u=new Z1,l=new Set,h=[],m=a.logarithmicDepthBuffer,p=a.vertexTextures;let g=a.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(R){return l.add(R),R===0?"uv":`uv${R}`}function w(R,E,N,Y,q){const $=Y.fog,ie=q.geometry,j=R.isMeshStandardMaterial?Y.environment:null,ce=(R.isMeshStandardMaterial?t:e).get(R.envMap||j),J=ce&&ce.mapping===ts?ce.image.height:null,ue=M[R.type];R.precision!==null&&(g=a.getMaxPrecision(R.precision),g!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",g,"instead."));const _e=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Re=_e!==void 0?_e.length:0;let Xe=0;ie.morphAttributes.position!==void 0&&(Xe=1),ie.morphAttributes.normal!==void 0&&(Xe=2),ie.morphAttributes.color!==void 0&&(Xe=3);let it,ee,de,Ee;if(ue){const nt=cn[ue];it=nt.vertexShader,ee=nt.fragmentShader}else it=R.vertexShader,ee=R.fragmentShader,u.update(R),de=u.getVertexShaderID(R),Ee=u.getFragmentShaderID(R);const fe=n.getRenderTarget(),Le=n.state.buffers.depth.getReversed(),Oe=q.isInstancedMesh===!0,qe=q.isBatchedMesh===!0,ft=!!R.map,Ze=!!R.matcap,gt=!!ce,G=!!R.aoMap,Nt=!!R.lightMap,Ye=!!R.bumpMap,Ke=!!R.normalMap,Ie=!!R.displacementMap,ct=!!R.emissiveMap,De=!!R.metalnessMap,D=!!R.roughnessMap,y=R.anisotropy>0,V=R.clearcoat>0,te=R.dispersion>0,ae=R.iridescence>0,Q=R.sheen>0,Te=R.transmission>0,pe=y&&!!R.anisotropyMap,we=V&&!!R.clearcoatMap,$e=V&&!!R.clearcoatNormalMap,se=V&&!!R.clearcoatRoughnessMap,ve=ae&&!!R.iridescenceMap,ze=ae&&!!R.iridescenceThicknessMap,Ue=Q&&!!R.sheenColorMap,Me=Q&&!!R.sheenRoughnessMap,Je=!!R.specularMap,He=!!R.specularColorMap,at=!!R.specularIntensityMap,F=Te&&!!R.transmissionMap,he=Te&&!!R.thicknessMap,K=!!R.gradientMap,ne=!!R.alphaMap,xe=R.alphaTest>0,me=!!R.alphaHash,ke=!!R.extensions;let mt=On;R.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(mt=n.toneMapping);const yt={shaderID:ue,shaderType:R.type,shaderName:R.name,vertexShader:it,fragmentShader:ee,defines:R.defines,customVertexShaderID:de,customFragmentShaderID:Ee,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:g,batching:qe,batchingColor:qe&&q._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&q.instanceColor!==null,instancingMorph:Oe&&q.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Li,alphaToCoverage:!!R.alphaToCoverage,map:ft,matcap:Ze,envMap:gt,envMapMode:gt&&ce.mapping,envMapCubeUVHeight:J,aoMap:G,lightMap:Nt,bumpMap:Ye,normalMap:Ke,displacementMap:p&&Ie,emissiveMap:ct,normalMapObjectSpace:Ke&&R.normalMapType===sh,normalMapTangentSpace:Ke&&R.normalMapType===vc,metalnessMap:De,roughnessMap:D,anisotropy:y,anisotropyMap:pe,clearcoat:V,clearcoatMap:we,clearcoatNormalMap:$e,clearcoatRoughnessMap:se,dispersion:te,iridescence:ae,iridescenceMap:ve,iridescenceThicknessMap:ze,sheen:Q,sheenColorMap:Ue,sheenRoughnessMap:Me,specularMap:Je,specularColorMap:He,specularIntensityMap:at,transmission:Te,transmissionMap:F,thicknessMap:he,gradientMap:K,opaque:R.transparent===!1&&R.blending===Ei&&R.alphaToCoverage===!1,alphaMap:ne,alphaTest:xe,alphaHash:me,combine:R.combine,mapUv:ft&&b(R.map.channel),aoMapUv:G&&b(R.aoMap.channel),lightMapUv:Nt&&b(R.lightMap.channel),bumpMapUv:Ye&&b(R.bumpMap.channel),normalMapUv:Ke&&b(R.normalMap.channel),displacementMapUv:Ie&&b(R.displacementMap.channel),emissiveMapUv:ct&&b(R.emissiveMap.channel),metalnessMapUv:De&&b(R.metalnessMap.channel),roughnessMapUv:D&&b(R.roughnessMap.channel),anisotropyMapUv:pe&&b(R.anisotropyMap.channel),clearcoatMapUv:we&&b(R.clearcoatMap.channel),clearcoatNormalMapUv:$e&&b(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&b(R.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&b(R.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&b(R.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&b(R.sheenColorMap.channel),sheenRoughnessMapUv:Me&&b(R.sheenRoughnessMap.channel),specularMapUv:Je&&b(R.specularMap.channel),specularColorMapUv:He&&b(R.specularColorMap.channel),specularIntensityMapUv:at&&b(R.specularIntensityMap.channel),transmissionMapUv:F&&b(R.transmissionMap.channel),thicknessMapUv:he&&b(R.thicknessMap.channel),alphaMapUv:ne&&b(R.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(Ke||y),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ie.attributes.uv&&(ft||ne),fog:!!$,useFog:R.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:Le,skinning:q.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Xe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:R.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:mt,decodeVideoTexture:ft&&R.map.isVideoTexture===!0&&Qe.getTransfer(R.map.colorSpace)===rt,decodeVideoTextureEmissive:ct&&R.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(R.emissiveMap.colorSpace)===rt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===dn,flipSided:R.side===Lt,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:ke&&R.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&R.extensions.multiDraw===!0||qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return yt.vertexUv1s=l.has(1),yt.vertexUv2s=l.has(2),yt.vertexUv3s=l.has(3),l.clear(),yt}function x(R){const E=[];if(R.shaderID?E.push(R.shaderID):(E.push(R.customVertexShaderID),E.push(R.customFragmentShaderID)),R.defines!==void 0)for(const N in R.defines)E.push(N),E.push(R.defines[N]);return R.isRawShaderMaterial===!1&&(P(E,R),C(E,R),E.push(n.outputColorSpace)),E.push(R.customProgramCacheKey),E.join()}function P(R,E){R.push(E.precision),R.push(E.outputColorSpace),R.push(E.envMapMode),R.push(E.envMapCubeUVHeight),R.push(E.mapUv),R.push(E.alphaMapUv),R.push(E.lightMapUv),R.push(E.aoMapUv),R.push(E.bumpMapUv),R.push(E.normalMapUv),R.push(E.displacementMapUv),R.push(E.emissiveMapUv),R.push(E.metalnessMapUv),R.push(E.roughnessMapUv),R.push(E.anisotropyMapUv),R.push(E.clearcoatMapUv),R.push(E.clearcoatNormalMapUv),R.push(E.clearcoatRoughnessMapUv),R.push(E.iridescenceMapUv),R.push(E.iridescenceThicknessMapUv),R.push(E.sheenColorMapUv),R.push(E.sheenRoughnessMapUv),R.push(E.specularMapUv),R.push(E.specularColorMapUv),R.push(E.specularIntensityMapUv),R.push(E.transmissionMapUv),R.push(E.thicknessMapUv),R.push(E.combine),R.push(E.fogExp2),R.push(E.sizeAttenuation),R.push(E.morphTargetsCount),R.push(E.morphAttributeCount),R.push(E.numDirLights),R.push(E.numPointLights),R.push(E.numSpotLights),R.push(E.numSpotLightMaps),R.push(E.numHemiLights),R.push(E.numRectAreaLights),R.push(E.numDirLightShadows),R.push(E.numPointLightShadows),R.push(E.numSpotLightShadows),R.push(E.numSpotLightShadowsWithMaps),R.push(E.numLightProbes),R.push(E.shadowMapType),R.push(E.toneMapping),R.push(E.numClippingPlanes),R.push(E.numClipIntersection),R.push(E.depthPacking)}function C(R,E){d.disableAll(),E.supportsVertexTextures&&d.enable(0),E.instancing&&d.enable(1),E.instancingColor&&d.enable(2),E.instancingMorph&&d.enable(3),E.matcap&&d.enable(4),E.envMap&&d.enable(5),E.normalMapObjectSpace&&d.enable(6),E.normalMapTangentSpace&&d.enable(7),E.clearcoat&&d.enable(8),E.iridescence&&d.enable(9),E.alphaTest&&d.enable(10),E.vertexColors&&d.enable(11),E.vertexAlphas&&d.enable(12),E.vertexUv1s&&d.enable(13),E.vertexUv2s&&d.enable(14),E.vertexUv3s&&d.enable(15),E.vertexTangents&&d.enable(16),E.anisotropy&&d.enable(17),E.alphaHash&&d.enable(18),E.batching&&d.enable(19),E.dispersion&&d.enable(20),E.batchingColor&&d.enable(21),R.push(d.mask),d.disableAll(),E.fog&&d.enable(0),E.useFog&&d.enable(1),E.flatShading&&d.enable(2),E.logarithmicDepthBuffer&&d.enable(3),E.reverseDepthBuffer&&d.enable(4),E.skinning&&d.enable(5),E.morphTargets&&d.enable(6),E.morphNormals&&d.enable(7),E.morphColors&&d.enable(8),E.premultipliedAlpha&&d.enable(9),E.shadowMapEnabled&&d.enable(10),E.doubleSided&&d.enable(11),E.flipSided&&d.enable(12),E.useDepthPacking&&d.enable(13),E.dithering&&d.enable(14),E.transmission&&d.enable(15),E.sheen&&d.enable(16),E.opaque&&d.enable(17),E.pointsUvs&&d.enable(18),E.decodeVideoTexture&&d.enable(19),E.decodeVideoTextureEmissive&&d.enable(20),E.alphaToCoverage&&d.enable(21),R.push(d.mask)}function S(R){const E=M[R.type];let N;if(E){const Y=cn[E];N=Lh.clone(Y.uniforms)}else N=R.uniforms;return N}function H(R,E){let N;for(let Y=0,q=h.length;Y<q;Y++){const $=h[Y];if($.cacheKey===E){N=$,++N.usedTimes;break}}return N===void 0&&(N=new K1(n,E,R,s),h.push(N)),N}function L(R){if(--R.usedTimes===0){const E=h.indexOf(R);h[E]=h[h.length-1],h.pop(),R.destroy()}}function U(R){u.remove(R)}function O(){u.dispose()}return{getParameters:w,getProgramCacheKey:x,getUniforms:S,acquireProgram:H,releaseProgram:L,releaseShaderCache:U,programs:h,dispose:O}}function Q1(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let d=n.get(o);return d===void 0&&(d={},n.set(o,d)),d}function i(o){n.delete(o)}function a(o,d,u){n.get(o)[d]=u}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:s}}function ep(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Vo(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Wo(){const n=[];let e=0;const t=[],i=[],a=[];function s(){e=0,t.length=0,i.length=0,a.length=0}function o(m,p,g,M,b,w){let x=n[e];return x===void 0?(x={id:m.id,object:m,geometry:p,material:g,groupOrder:M,renderOrder:m.renderOrder,z:b,group:w},n[e]=x):(x.id=m.id,x.object=m,x.geometry=p,x.material=g,x.groupOrder=M,x.renderOrder=m.renderOrder,x.z=b,x.group=w),e++,x}function d(m,p,g,M,b,w){const x=o(m,p,g,M,b,w);g.transmission>0?i.push(x):g.transparent===!0?a.push(x):t.push(x)}function u(m,p,g,M,b,w){const x=o(m,p,g,M,b,w);g.transmission>0?i.unshift(x):g.transparent===!0?a.unshift(x):t.unshift(x)}function l(m,p){t.length>1&&t.sort(m||ep),i.length>1&&i.sort(p||Vo),a.length>1&&a.sort(p||Vo)}function h(){for(let m=e,p=n.length;m<p;m++){const g=n[m];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:a,init:s,push:d,unshift:u,finish:h,sort:l}}function tp(){let n=new WeakMap;function e(i,a){const s=n.get(i);let o;return s===void 0?(o=new Wo,n.set(i,[o])):a>=s.length?(o=new Wo,s.push(o)):o=s[a],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function np(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new v,color:new We};break;case"SpotLight":t={position:new v,direction:new v,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new v,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new v,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new v,halfWidth:new v,halfHeight:new v};break}return n[e.id]=t,t}}}function ip(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ap=0;function sp(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function rp(n){const e=new np,t=ip(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new v);const a=new v,s=new ht,o=new ht;function d(l){let h=0,m=0,p=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let g=0,M=0,b=0,w=0,x=0,P=0,C=0,S=0,H=0,L=0,U=0;l.sort(sp);for(let R=0,E=l.length;R<E;R++){const N=l[R],Y=N.color,q=N.intensity,$=N.distance,ie=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=Y.r*q,m+=Y.g*q,p+=Y.b*q;else if(N.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(N.sh.coefficients[j],q);U++}else if(N.isDirectionalLight){const j=e.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const ce=N.shadow,J=t.get(N);J.shadowIntensity=ce.intensity,J.shadowBias=ce.bias,J.shadowNormalBias=ce.normalBias,J.shadowRadius=ce.radius,J.shadowMapSize=ce.mapSize,i.directionalShadow[g]=J,i.directionalShadowMap[g]=ie,i.directionalShadowMatrix[g]=N.shadow.matrix,P++}i.directional[g]=j,g++}else if(N.isSpotLight){const j=e.get(N);j.position.setFromMatrixPosition(N.matrixWorld),j.color.copy(Y).multiplyScalar(q),j.distance=$,j.coneCos=Math.cos(N.angle),j.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),j.decay=N.decay,i.spot[b]=j;const ce=N.shadow;if(N.map&&(i.spotLightMap[H]=N.map,H++,ce.updateMatrices(N),N.castShadow&&L++),i.spotLightMatrix[b]=ce.matrix,N.castShadow){const J=t.get(N);J.shadowIntensity=ce.intensity,J.shadowBias=ce.bias,J.shadowNormalBias=ce.normalBias,J.shadowRadius=ce.radius,J.shadowMapSize=ce.mapSize,i.spotShadow[b]=J,i.spotShadowMap[b]=ie,S++}b++}else if(N.isRectAreaLight){const j=e.get(N);j.color.copy(Y).multiplyScalar(q),j.halfWidth.set(N.width*.5,0,0),j.halfHeight.set(0,N.height*.5,0),i.rectArea[w]=j,w++}else if(N.isPointLight){const j=e.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),j.distance=N.distance,j.decay=N.decay,N.castShadow){const ce=N.shadow,J=t.get(N);J.shadowIntensity=ce.intensity,J.shadowBias=ce.bias,J.shadowNormalBias=ce.normalBias,J.shadowRadius=ce.radius,J.shadowMapSize=ce.mapSize,J.shadowCameraNear=ce.camera.near,J.shadowCameraFar=ce.camera.far,i.pointShadow[M]=J,i.pointShadowMap[M]=ie,i.pointShadowMatrix[M]=N.shadow.matrix,C++}i.point[M]=j,M++}else if(N.isHemisphereLight){const j=e.get(N);j.skyColor.copy(N.color).multiplyScalar(q),j.groundColor.copy(N.groundColor).multiplyScalar(q),i.hemi[x]=j,x++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=p;const O=i.hash;(O.directionalLength!==g||O.pointLength!==M||O.spotLength!==b||O.rectAreaLength!==w||O.hemiLength!==x||O.numDirectionalShadows!==P||O.numPointShadows!==C||O.numSpotShadows!==S||O.numSpotMaps!==H||O.numLightProbes!==U)&&(i.directional.length=g,i.spot.length=b,i.rectArea.length=w,i.point.length=M,i.hemi.length=x,i.directionalShadow.length=P,i.directionalShadowMap.length=P,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=P,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=S+H-L,i.spotLightMap.length=H,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=U,O.directionalLength=g,O.pointLength=M,O.spotLength=b,O.rectAreaLength=w,O.hemiLength=x,O.numDirectionalShadows=P,O.numPointShadows=C,O.numSpotShadows=S,O.numSpotMaps=H,O.numLightProbes=U,i.version=ap++)}function u(l,h){let m=0,p=0,g=0,M=0,b=0;const w=h.matrixWorldInverse;for(let x=0,P=l.length;x<P;x++){const C=l[x];if(C.isDirectionalLight){const S=i.directional[m];S.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(w),m++}else if(C.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(C.matrixWorld),S.position.applyMatrix4(w),S.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(w),g++}else if(C.isRectAreaLight){const S=i.rectArea[M];S.position.setFromMatrixPosition(C.matrixWorld),S.position.applyMatrix4(w),o.identity(),s.copy(C.matrixWorld),s.premultiply(w),o.extractRotation(s),S.halfWidth.set(C.width*.5,0,0),S.halfHeight.set(0,C.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),M++}else if(C.isPointLight){const S=i.point[p];S.position.setFromMatrixPosition(C.matrixWorld),S.position.applyMatrix4(w),p++}else if(C.isHemisphereLight){const S=i.hemi[b];S.direction.setFromMatrixPosition(C.matrixWorld),S.direction.transformDirection(w),b++}}}return{setup:d,setupView:u,state:i}}function Xo(n){const e=new rp(n),t=[],i=[];function a(h){l.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function o(h){i.push(h)}function d(){e.setup(t)}function u(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:l,setupLights:d,setupLightsView:u,pushLight:s,pushShadow:o}}function op(n){let e=new WeakMap;function t(a,s=0){const o=e.get(a);let d;return o===void 0?(d=new Xo(n),e.set(a,[d])):s>=o.length?(d=new Xo(n),o.push(d)):d=o[s],d}function i(){e=new WeakMap}return{get:t,dispose:i}}class cp extends Oi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ih,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dp extends Oi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function up(n,e,t){let i=new kr;const a=new Pe,s=new Pe,o=new xt,d=new cp({depthPacking:ah}),u=new dp,l={},h=t.maxTextureSize,m={[Fn]:Lt,[Lt]:Fn,[dn]:dn},p=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:lp,fragmentShader:hp}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const M=new Ut;M.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new ot(M,p),w=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rc;let x=this.type;this.render=function(L,U,O){if(w.enabled===!1||w.autoUpdate===!1&&w.needsUpdate===!1||L.length===0)return;const R=n.getRenderTarget(),E=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(Nn),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const q=x!==vn&&this.type===vn,$=x===vn&&this.type!==vn;for(let ie=0,j=L.length;ie<j;ie++){const ce=L[ie],J=ce.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;a.copy(J.mapSize);const ue=J.getFrameExtents();if(a.multiply(ue),s.copy(J.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(s.x=Math.floor(h/ue.x),a.x=s.x*ue.x,J.mapSize.x=s.x),a.y>h&&(s.y=Math.floor(h/ue.y),a.y=s.y*ue.y,J.mapSize.y=s.y)),J.map===null||q===!0||$===!0){const Re=this.type!==vn?{minFilter:Wt,magFilter:Wt}:{};J.map!==null&&J.map.dispose(),J.map=new ti(a.x,a.y,Re),J.map.texture.name=ce.name+".shadowMap",J.camera.updateProjectionMatrix()}n.setRenderTarget(J.map),n.clear();const _e=J.getViewportCount();for(let Re=0;Re<_e;Re++){const Xe=J.getViewport(Re);o.set(s.x*Xe.x,s.y*Xe.y,s.x*Xe.z,s.y*Xe.w),Y.viewport(o),J.updateMatrices(ce,Re),i=J.getFrustum(),S(U,O,J.camera,ce,this.type)}J.isPointLightShadow!==!0&&this.type===vn&&P(J,O),J.needsUpdate=!1}x=this.type,w.needsUpdate=!1,n.setRenderTarget(R,E,N)};function P(L,U){const O=e.update(b);p.defines.VSM_SAMPLES!==L.blurSamples&&(p.defines.VSM_SAMPLES=L.blurSamples,g.defines.VSM_SAMPLES=L.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new ti(a.x,a.y)),p.uniforms.shadow_pass.value=L.map.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(U,null,O,p,b,null),g.uniforms.shadow_pass.value=L.mapPass.texture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(U,null,O,g,b,null)}function C(L,U,O,R){let E=null;const N=O.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(N!==void 0)E=N;else if(E=O.isPointLight===!0?u:d,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const Y=E.uuid,q=U.uuid;let $=l[Y];$===void 0&&($={},l[Y]=$);let ie=$[q];ie===void 0&&(ie=E.clone(),$[q]=ie,U.addEventListener("dispose",H)),E=ie}if(E.visible=U.visible,E.wireframe=U.wireframe,R===vn?E.side=U.shadowSide!==null?U.shadowSide:U.side:E.side=U.shadowSide!==null?U.shadowSide:m[U.side],E.alphaMap=U.alphaMap,E.alphaTest=U.alphaTest,E.map=U.map,E.clipShadows=U.clipShadows,E.clippingPlanes=U.clippingPlanes,E.clipIntersection=U.clipIntersection,E.displacementMap=U.displacementMap,E.displacementScale=U.displacementScale,E.displacementBias=U.displacementBias,E.wireframeLinewidth=U.wireframeLinewidth,E.linewidth=U.linewidth,O.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const Y=n.properties.get(E);Y.light=O}return E}function S(L,U,O,R,E){if(L.visible===!1)return;if(L.layers.test(U.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&E===vn)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,L.matrixWorld);const q=e.update(L),$=L.material;if(Array.isArray($)){const ie=q.groups;for(let j=0,ce=ie.length;j<ce;j++){const J=ie[j],ue=$[J.materialIndex];if(ue&&ue.visible){const _e=C(L,ue,R,E);L.onBeforeShadow(n,L,U,O,q,_e,J),n.renderBufferDirect(O,null,q,_e,L,J),L.onAfterShadow(n,L,U,O,q,_e,J)}}}else if($.visible){const ie=C(L,$,R,E);L.onBeforeShadow(n,L,U,O,q,ie,null),n.renderBufferDirect(O,null,q,ie,L,null),L.onAfterShadow(n,L,U,O,q,ie,null)}}const Y=L.children;for(let q=0,$=Y.length;q<$;q++)S(Y[q],U,O,R,E)}function H(L){L.target.removeEventListener("dispose",H);for(const O in l){const R=l[O],E=L.target.uuid;E in R&&(R[E].dispose(),delete R[E])}}}const fp={[Vs]:Ws,[Xs]:Ks,[qs]:Js,[Ri]:Ys,[Ws]:Vs,[Ks]:Xs,[Js]:qs,[Ys]:Ri};function pp(n,e){function t(){let F=!1;const he=new xt;let K=null;const ne=new xt(0,0,0,0);return{setMask:function(xe){K!==xe&&!F&&(n.colorMask(xe,xe,xe,xe),K=xe)},setLocked:function(xe){F=xe},setClear:function(xe,me,ke,mt,yt){yt===!0&&(xe*=mt,me*=mt,ke*=mt),he.set(xe,me,ke,mt),ne.equals(he)===!1&&(n.clearColor(xe,me,ke,mt),ne.copy(he))},reset:function(){F=!1,K=null,ne.set(-1,0,0,0)}}}function i(){let F=!1,he=!1,K=null,ne=null,xe=null;return{setReversed:function(me){if(he!==me){const ke=e.get("EXT_clip_control");he?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT);const mt=xe;xe=null,this.setClear(mt)}he=me},getReversed:function(){return he},setTest:function(me){me?fe(n.DEPTH_TEST):Le(n.DEPTH_TEST)},setMask:function(me){K!==me&&!F&&(n.depthMask(me),K=me)},setFunc:function(me){if(he&&(me=fp[me]),ne!==me){switch(me){case Vs:n.depthFunc(n.NEVER);break;case Ws:n.depthFunc(n.ALWAYS);break;case Xs:n.depthFunc(n.LESS);break;case Ri:n.depthFunc(n.LEQUAL);break;case qs:n.depthFunc(n.EQUAL);break;case Ys:n.depthFunc(n.GEQUAL);break;case Ks:n.depthFunc(n.GREATER);break;case Js:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ne=me}},setLocked:function(me){F=me},setClear:function(me){xe!==me&&(he&&(me=1-me),n.clearDepth(me),xe=me)},reset:function(){F=!1,K=null,ne=null,xe=null,he=!1}}}function a(){let F=!1,he=null,K=null,ne=null,xe=null,me=null,ke=null,mt=null,yt=null;return{setTest:function(nt){F||(nt?fe(n.STENCIL_TEST):Le(n.STENCIL_TEST))},setMask:function(nt){he!==nt&&!F&&(n.stencilMask(nt),he=nt)},setFunc:function(nt,Bt,Kt){(K!==nt||ne!==Bt||xe!==Kt)&&(n.stencilFunc(nt,Bt,Kt),K=nt,ne=Bt,xe=Kt)},setOp:function(nt,Bt,Kt){(me!==nt||ke!==Bt||mt!==Kt)&&(n.stencilOp(nt,Bt,Kt),me=nt,ke=Bt,mt=Kt)},setLocked:function(nt){F=nt},setClear:function(nt){yt!==nt&&(n.clearStencil(nt),yt=nt)},reset:function(){F=!1,he=null,K=null,ne=null,xe=null,me=null,ke=null,mt=null,yt=null}}}const s=new t,o=new i,d=new a,u=new WeakMap,l=new WeakMap;let h={},m={},p=new WeakMap,g=[],M=null,b=!1,w=null,x=null,P=null,C=null,S=null,H=null,L=null,U=new We(0,0,0),O=0,R=!1,E=null,N=null,Y=null,q=null,$=null;const ie=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,ce=0;const J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(J)[1]),j=ce>=1):J.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),j=ce>=2);let ue=null,_e={};const Re=n.getParameter(n.SCISSOR_BOX),Xe=n.getParameter(n.VIEWPORT),it=new xt().fromArray(Re),ee=new xt().fromArray(Xe);function de(F,he,K,ne){const xe=new Uint8Array(4),me=n.createTexture();n.bindTexture(F,me),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ke=0;ke<K;ke++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(he,0,n.RGBA,1,1,ne,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(he+ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return me}const Ee={};Ee[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),Ee[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ee[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),d.setClear(0),fe(n.DEPTH_TEST),o.setFunc(Ri),Ye(!1),Ke(Kr),fe(n.CULL_FACE),G(Nn);function fe(F){h[F]!==!0&&(n.enable(F),h[F]=!0)}function Le(F){h[F]!==!1&&(n.disable(F),h[F]=!1)}function Oe(F,he){return m[F]!==he?(n.bindFramebuffer(F,he),m[F]=he,F===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=he),F===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=he),!0):!1}function qe(F,he){let K=g,ne=!1;if(F){K=p.get(he),K===void 0&&(K=[],p.set(he,K));const xe=F.textures;if(K.length!==xe.length||K[0]!==n.COLOR_ATTACHMENT0){for(let me=0,ke=xe.length;me<ke;me++)K[me]=n.COLOR_ATTACHMENT0+me;K.length=xe.length,ne=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,ne=!0);ne&&n.drawBuffers(K)}function ft(F){return M!==F?(n.useProgram(F),M=F,!0):!1}const Ze={[Zn]:n.FUNC_ADD,[Dl]:n.FUNC_SUBTRACT,[Il]:n.FUNC_REVERSE_SUBTRACT};Ze[zl]=n.MIN,Ze[Ll]=n.MAX;const gt={[Ul]:n.ZERO,[Nl]:n.ONE,[Ol]:n.SRC_COLOR,[Hs]:n.SRC_ALPHA,[Vl]:n.SRC_ALPHA_SATURATE,[Hl]:n.DST_COLOR,[kl]:n.DST_ALPHA,[Fl]:n.ONE_MINUS_SRC_COLOR,[Gs]:n.ONE_MINUS_SRC_ALPHA,[Gl]:n.ONE_MINUS_DST_COLOR,[Bl]:n.ONE_MINUS_DST_ALPHA,[Wl]:n.CONSTANT_COLOR,[Xl]:n.ONE_MINUS_CONSTANT_COLOR,[ql]:n.CONSTANT_ALPHA,[Yl]:n.ONE_MINUS_CONSTANT_ALPHA};function G(F,he,K,ne,xe,me,ke,mt,yt,nt){if(F===Nn){b===!0&&(Le(n.BLEND),b=!1);return}if(b===!1&&(fe(n.BLEND),b=!0),F!==Pl){if(F!==w||nt!==R){if((x!==Zn||S!==Zn)&&(n.blendEquation(n.FUNC_ADD),x=Zn,S=Zn),nt)switch(F){case Ei:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jr:n.blendFunc(n.ONE,n.ONE);break;case Zr:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $r:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ei:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Zr:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $r:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}P=null,C=null,H=null,L=null,U.set(0,0,0),O=0,w=F,R=nt}return}xe=xe||he,me=me||K,ke=ke||ne,(he!==x||xe!==S)&&(n.blendEquationSeparate(Ze[he],Ze[xe]),x=he,S=xe),(K!==P||ne!==C||me!==H||ke!==L)&&(n.blendFuncSeparate(gt[K],gt[ne],gt[me],gt[ke]),P=K,C=ne,H=me,L=ke),(mt.equals(U)===!1||yt!==O)&&(n.blendColor(mt.r,mt.g,mt.b,yt),U.copy(mt),O=yt),w=F,R=!1}function Nt(F,he){F.side===dn?Le(n.CULL_FACE):fe(n.CULL_FACE);let K=F.side===Lt;he&&(K=!K),Ye(K),F.blending===Ei&&F.transparent===!1?G(Nn):G(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const ne=F.stencilWrite;d.setTest(ne),ne&&(d.setMask(F.stencilWriteMask),d.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),d.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ct(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):Le(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(F){E!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),E=F)}function Ke(F){F!==Rl?(fe(n.CULL_FACE),F!==N&&(F===Kr?n.cullFace(n.BACK):F===Cl?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Le(n.CULL_FACE),N=F}function Ie(F){F!==Y&&(j&&n.lineWidth(F),Y=F)}function ct(F,he,K){F?(fe(n.POLYGON_OFFSET_FILL),(q!==he||$!==K)&&(n.polygonOffset(he,K),q=he,$=K)):Le(n.POLYGON_OFFSET_FILL)}function De(F){F?fe(n.SCISSOR_TEST):Le(n.SCISSOR_TEST)}function D(F){F===void 0&&(F=n.TEXTURE0+ie-1),ue!==F&&(n.activeTexture(F),ue=F)}function y(F,he,K){K===void 0&&(ue===null?K=n.TEXTURE0+ie-1:K=ue);let ne=_e[K];ne===void 0&&(ne={type:void 0,texture:void 0},_e[K]=ne),(ne.type!==F||ne.texture!==he)&&(ue!==K&&(n.activeTexture(K),ue=K),n.bindTexture(F,he||Ee[F]),ne.type=F,ne.texture=he)}function V(){const F=_e[ue];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function te(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function we(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $e(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ze(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ue(F){it.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),it.copy(F))}function Me(F){ee.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),ee.copy(F))}function Je(F,he){let K=l.get(he);K===void 0&&(K=new WeakMap,l.set(he,K));let ne=K.get(F);ne===void 0&&(ne=n.getUniformBlockIndex(he,F.name),K.set(F,ne))}function He(F,he){const ne=l.get(he).get(F);u.get(he)!==ne&&(n.uniformBlockBinding(he,ne,F.__bindingPointIndex),u.set(he,ne))}function at(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ue=null,_e={},m={},p=new WeakMap,g=[],M=null,b=!1,w=null,x=null,P=null,C=null,S=null,H=null,L=null,U=new We(0,0,0),O=0,R=!1,E=null,N=null,Y=null,q=null,$=null,it.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),d.reset()}return{buffers:{color:s,depth:o,stencil:d},enable:fe,disable:Le,bindFramebuffer:Oe,drawBuffers:qe,useProgram:ft,setBlending:G,setMaterial:Nt,setFlipSided:Ye,setCullFace:Ke,setLineWidth:Ie,setPolygonOffset:ct,setScissorTest:De,activeTexture:D,bindTexture:y,unbindTexture:V,compressedTexImage2D:te,compressedTexImage3D:ae,texImage2D:ve,texImage3D:ze,updateUBOMapping:Je,uniformBlockBinding:He,texStorage2D:$e,texStorage3D:se,texSubImage2D:Q,texSubImage3D:Te,compressedTexSubImage2D:pe,compressedTexSubImage3D:we,scissor:Ue,viewport:Me,reset:at}}function qo(n,e,t,i){const a=mp(i);switch(t){case pc:return n*e;case gc:return n*e;case xc:return n*e*2;case Lr:return n*e/a.components*a.byteLength;case Ur:return n*e/a.components*a.byteLength;case _c:return n*e*2/a.components*a.byteLength;case Nr:return n*e*2/a.components*a.byteLength;case mc:return n*e*3/a.components*a.byteLength;case nn:return n*e*4/a.components*a.byteLength;case Or:return n*e*4/a.components*a.byteLength;case Wa:case Xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case qa:case Ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case tr:case ir:return Math.max(n,16)*Math.max(e,8)/4;case er:case nr:return Math.max(n,8)*Math.max(e,8)/2;case ar:case sr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case rr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case or:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cr:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case dr:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case lr:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case hr:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ur:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case fr:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case pr:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case mr:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case gr:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case xr:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case _r:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case wr:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case vr:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ka:case Mr:case br:return Math.ceil(n/4)*Math.ceil(e/4)*16;case wc:case yr:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Sr:case Er:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mp(n){switch(n){case yn:case hc:return{byteLength:1,components:1};case ia:case uc:case sa:return{byteLength:2,components:1};case Ir:case zr:return{byteLength:2,components:4};case ei:case Dr:case hn:return{byteLength:4,components:1};case fc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function gp(n,e,t,i,a,s,o){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Pe,h=new WeakMap;let m;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(D,y){return g?new OffscreenCanvas(D,y):ja("canvas")}function b(D,y,V){let te=1;const ae=De(D);if((ae.width>V||ae.height>V)&&(te=V/Math.max(ae.width,ae.height)),te<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Q=Math.floor(te*ae.width),Te=Math.floor(te*ae.height);m===void 0&&(m=M(Q,Te));const pe=y?M(Q,Te):m;return pe.width=Q,pe.height=Te,pe.getContext("2d").drawImage(D,0,0,Q,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+Q+"x"+Te+")."),pe}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),D;return D}function w(D){return D.generateMipmaps}function x(D){n.generateMipmap(D)}function P(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function C(D,y,V,te,ae=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Q=y;if(y===n.RED&&(V===n.FLOAT&&(Q=n.R32F),V===n.HALF_FLOAT&&(Q=n.R16F),V===n.UNSIGNED_BYTE&&(Q=n.R8)),y===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(Q=n.R8UI),V===n.UNSIGNED_SHORT&&(Q=n.R16UI),V===n.UNSIGNED_INT&&(Q=n.R32UI),V===n.BYTE&&(Q=n.R8I),V===n.SHORT&&(Q=n.R16I),V===n.INT&&(Q=n.R32I)),y===n.RG&&(V===n.FLOAT&&(Q=n.RG32F),V===n.HALF_FLOAT&&(Q=n.RG16F),V===n.UNSIGNED_BYTE&&(Q=n.RG8)),y===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(Q=n.RG8UI),V===n.UNSIGNED_SHORT&&(Q=n.RG16UI),V===n.UNSIGNED_INT&&(Q=n.RG32UI),V===n.BYTE&&(Q=n.RG8I),V===n.SHORT&&(Q=n.RG16I),V===n.INT&&(Q=n.RG32I)),y===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),V===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),V===n.UNSIGNED_INT&&(Q=n.RGB32UI),V===n.BYTE&&(Q=n.RGB8I),V===n.SHORT&&(Q=n.RGB16I),V===n.INT&&(Q=n.RGB32I)),y===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),V===n.UNSIGNED_INT&&(Q=n.RGBA32UI),V===n.BYTE&&(Q=n.RGBA8I),V===n.SHORT&&(Q=n.RGBA16I),V===n.INT&&(Q=n.RGBA32I)),y===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),y===n.RGBA){const Te=ae?ns:Qe.getTransfer(te);V===n.FLOAT&&(Q=n.RGBA32F),V===n.HALF_FLOAT&&(Q=n.RGBA16F),V===n.UNSIGNED_BYTE&&(Q=Te===rt?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function S(D,y){let V;return D?y===null||y===ei||y===Di?V=n.DEPTH24_STENCIL8:y===hn?V=n.DEPTH32F_STENCIL8:y===ia&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ei||y===Di?V=n.DEPTH_COMPONENT24:y===hn?V=n.DEPTH_COMPONENT32F:y===ia&&(V=n.DEPTH_COMPONENT16),V}function H(D,y){return w(D)===!0||D.isFramebufferTexture&&D.minFilter!==Wt&&D.minFilter!==ln?Math.log2(Math.max(y.width,y.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?y.mipmaps.length:1}function L(D){const y=D.target;y.removeEventListener("dispose",L),O(y),y.isVideoTexture&&h.delete(y)}function U(D){const y=D.target;y.removeEventListener("dispose",U),E(y)}function O(D){const y=i.get(D);if(y.__webglInit===void 0)return;const V=D.source,te=p.get(V);if(te){const ae=te[y.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&R(D),Object.keys(te).length===0&&p.delete(V)}i.remove(D)}function R(D){const y=i.get(D);n.deleteTexture(y.__webglTexture);const V=D.source,te=p.get(V);delete te[y.__cacheKey],o.memory.textures--}function E(D){const y=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(y.__webglFramebuffer[te]))for(let ae=0;ae<y.__webglFramebuffer[te].length;ae++)n.deleteFramebuffer(y.__webglFramebuffer[te][ae]);else n.deleteFramebuffer(y.__webglFramebuffer[te]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[te])}else{if(Array.isArray(y.__webglFramebuffer))for(let te=0;te<y.__webglFramebuffer.length;te++)n.deleteFramebuffer(y.__webglFramebuffer[te]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let te=0;te<y.__webglColorRenderbuffer.length;te++)y.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[te]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const V=D.textures;for(let te=0,ae=V.length;te<ae;te++){const Q=i.get(V[te]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(V[te])}i.remove(D)}let N=0;function Y(){N=0}function q(){const D=N;return D>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+a.maxTextures),N+=1,D}function $(D){const y=[];return y.push(D.wrapS),y.push(D.wrapT),y.push(D.wrapR||0),y.push(D.magFilter),y.push(D.minFilter),y.push(D.anisotropy),y.push(D.internalFormat),y.push(D.format),y.push(D.type),y.push(D.generateMipmaps),y.push(D.premultiplyAlpha),y.push(D.flipY),y.push(D.unpackAlignment),y.push(D.colorSpace),y.join()}function ie(D,y){const V=i.get(D);if(D.isVideoTexture&&Ie(D),D.isRenderTargetTexture===!1&&D.version>0&&V.__version!==D.version){const te=D.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(V,D,y);return}}t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+y)}function j(D,y){const V=i.get(D);if(D.version>0&&V.__version!==D.version){ee(V,D,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+y)}function ce(D,y){const V=i.get(D);if(D.version>0&&V.__version!==D.version){ee(V,D,y);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+y)}function J(D,y){const V=i.get(D);if(D.version>0&&V.__version!==D.version){de(V,D,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+y)}const ue={[js]:n.REPEAT,[jn]:n.CLAMP_TO_EDGE,[Qs]:n.MIRRORED_REPEAT},_e={[Wt]:n.NEAREST,[nh]:n.NEAREST_MIPMAP_NEAREST,[xa]:n.NEAREST_MIPMAP_LINEAR,[ln]:n.LINEAR,[os]:n.LINEAR_MIPMAP_NEAREST,[Qn]:n.LINEAR_MIPMAP_LINEAR},Re={[rh]:n.NEVER,[uh]:n.ALWAYS,[oh]:n.LESS,[Mc]:n.LEQUAL,[ch]:n.EQUAL,[hh]:n.GEQUAL,[dh]:n.GREATER,[lh]:n.NOTEQUAL};function Xe(D,y){if(y.type===hn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===ln||y.magFilter===os||y.magFilter===xa||y.magFilter===Qn||y.minFilter===ln||y.minFilter===os||y.minFilter===xa||y.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,ue[y.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,ue[y.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,ue[y.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,_e[y.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,_e[y.minFilter]),y.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,Re[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Wt||y.minFilter!==xa&&y.minFilter!==Qn||y.type===hn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,a.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function it(D,y){let V=!1;D.__webglInit===void 0&&(D.__webglInit=!0,y.addEventListener("dispose",L));const te=y.source;let ae=p.get(te);ae===void 0&&(ae={},p.set(te,ae));const Q=$(y);if(Q!==D.__cacheKey){ae[Q]===void 0&&(ae[Q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ae[Q].usedTimes++;const Te=ae[D.__cacheKey];Te!==void 0&&(ae[D.__cacheKey].usedTimes--,Te.usedTimes===0&&R(y)),D.__cacheKey=Q,D.__webglTexture=ae[Q].texture}return V}function ee(D,y,V){let te=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(te=n.TEXTURE_3D);const ae=it(D,y),Q=y.source;t.bindTexture(te,D.__webglTexture,n.TEXTURE0+V);const Te=i.get(Q);if(Q.version!==Te.__version||ae===!0){t.activeTexture(n.TEXTURE0+V);const pe=Qe.getPrimaries(Qe.workingColorSpace),we=y.colorSpace===Un?null:Qe.getPrimaries(y.colorSpace),$e=y.colorSpace===Un||pe===we?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let se=b(y.image,!1,a.maxTextureSize);se=ct(y,se);const ve=s.convert(y.format,y.colorSpace),ze=s.convert(y.type);let Ue=C(y.internalFormat,ve,ze,y.colorSpace,y.isVideoTexture);Xe(te,y);let Me;const Je=y.mipmaps,He=y.isVideoTexture!==!0,at=Te.__version===void 0||ae===!0,F=Q.dataReady,he=H(y,se);if(y.isDepthTexture)Ue=S(y.format===Ii,y.type),at&&(He?t.texStorage2D(n.TEXTURE_2D,1,Ue,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,Ue,se.width,se.height,0,ve,ze,null));else if(y.isDataTexture)if(Je.length>0){He&&at&&t.texStorage2D(n.TEXTURE_2D,he,Ue,Je[0].width,Je[0].height);for(let K=0,ne=Je.length;K<ne;K++)Me=Je[K],He?F&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,Me.width,Me.height,ve,ze,Me.data):t.texImage2D(n.TEXTURE_2D,K,Ue,Me.width,Me.height,0,ve,ze,Me.data);y.generateMipmaps=!1}else He?(at&&t.texStorage2D(n.TEXTURE_2D,he,Ue,se.width,se.height),F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se.width,se.height,ve,ze,se.data)):t.texImage2D(n.TEXTURE_2D,0,Ue,se.width,se.height,0,ve,ze,se.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){He&&at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Ue,Je[0].width,Je[0].height,se.depth);for(let K=0,ne=Je.length;K<ne;K++)if(Me=Je[K],y.format!==nn)if(ve!==null)if(He){if(F)if(y.layerUpdates.size>0){const xe=qo(Me.width,Me.height,y.format,y.type);for(const me of y.layerUpdates){const ke=Me.data.subarray(me*xe/Me.data.BYTES_PER_ELEMENT,(me+1)*xe/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,me,Me.width,Me.height,1,ve,ke)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Me.width,Me.height,se.depth,ve,Me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,Ue,Me.width,Me.height,se.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Me.width,Me.height,se.depth,ve,ze,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,Ue,Me.width,Me.height,se.depth,0,ve,ze,Me.data)}else{He&&at&&t.texStorage2D(n.TEXTURE_2D,he,Ue,Je[0].width,Je[0].height);for(let K=0,ne=Je.length;K<ne;K++)Me=Je[K],y.format!==nn?ve!==null?He?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,Me.width,Me.height,ve,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,K,Ue,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?F&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,Me.width,Me.height,ve,ze,Me.data):t.texImage2D(n.TEXTURE_2D,K,Ue,Me.width,Me.height,0,ve,ze,Me.data)}else if(y.isDataArrayTexture)if(He){if(at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Ue,se.width,se.height,se.depth),F)if(y.layerUpdates.size>0){const K=qo(se.width,se.height,y.format,y.type);for(const ne of y.layerUpdates){const xe=se.data.subarray(ne*K/se.data.BYTES_PER_ELEMENT,(ne+1)*K/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ne,se.width,se.height,1,ve,ze,xe)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ve,ze,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,se.width,se.height,se.depth,0,ve,ze,se.data);else if(y.isData3DTexture)He?(at&&t.texStorage3D(n.TEXTURE_3D,he,Ue,se.width,se.height,se.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ve,ze,se.data)):t.texImage3D(n.TEXTURE_3D,0,Ue,se.width,se.height,se.depth,0,ve,ze,se.data);else if(y.isFramebufferTexture){if(at)if(He)t.texStorage2D(n.TEXTURE_2D,he,Ue,se.width,se.height);else{let K=se.width,ne=se.height;for(let xe=0;xe<he;xe++)t.texImage2D(n.TEXTURE_2D,xe,Ue,K,ne,0,ve,ze,null),K>>=1,ne>>=1}}else if(Je.length>0){if(He&&at){const K=De(Je[0]);t.texStorage2D(n.TEXTURE_2D,he,Ue,K.width,K.height)}for(let K=0,ne=Je.length;K<ne;K++)Me=Je[K],He?F&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,ve,ze,Me):t.texImage2D(n.TEXTURE_2D,K,Ue,ve,ze,Me);y.generateMipmaps=!1}else if(He){if(at){const K=De(se);t.texStorage2D(n.TEXTURE_2D,he,Ue,K.width,K.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,ze,se)}else t.texImage2D(n.TEXTURE_2D,0,Ue,ve,ze,se);w(y)&&x(te),Te.__version=Q.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function de(D,y,V){if(y.image.length!==6)return;const te=it(D,y),ae=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+V);const Q=i.get(ae);if(ae.version!==Q.__version||te===!0){t.activeTexture(n.TEXTURE0+V);const Te=Qe.getPrimaries(Qe.workingColorSpace),pe=y.colorSpace===Un?null:Qe.getPrimaries(y.colorSpace),we=y.colorSpace===Un||Te===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const $e=y.isCompressedTexture||y.image[0].isCompressedTexture,se=y.image[0]&&y.image[0].isDataTexture,ve=[];for(let ne=0;ne<6;ne++)!$e&&!se?ve[ne]=b(y.image[ne],!0,a.maxCubemapSize):ve[ne]=se?y.image[ne].image:y.image[ne],ve[ne]=ct(y,ve[ne]);const ze=ve[0],Ue=s.convert(y.format,y.colorSpace),Me=s.convert(y.type),Je=C(y.internalFormat,Ue,Me,y.colorSpace),He=y.isVideoTexture!==!0,at=Q.__version===void 0||te===!0,F=ae.dataReady;let he=H(y,ze);Xe(n.TEXTURE_CUBE_MAP,y);let K;if($e){He&&at&&t.texStorage2D(n.TEXTURE_CUBE_MAP,he,Je,ze.width,ze.height);for(let ne=0;ne<6;ne++){K=ve[ne].mipmaps;for(let xe=0;xe<K.length;xe++){const me=K[xe];y.format!==nn?Ue!==null?He?F&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,0,0,me.width,me.height,Ue,me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,Je,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,0,0,me.width,me.height,Ue,Me,me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,Je,me.width,me.height,0,Ue,Me,me.data)}}}else{if(K=y.mipmaps,He&&at){K.length>0&&he++;const ne=De(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,he,Je,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(se){He?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ve[ne].width,ve[ne].height,Ue,Me,ve[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Je,ve[ne].width,ve[ne].height,0,Ue,Me,ve[ne].data);for(let xe=0;xe<K.length;xe++){const ke=K[xe].image[ne].image;He?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,0,0,ke.width,ke.height,Ue,Me,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,Je,ke.width,ke.height,0,Ue,Me,ke.data)}}else{He?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ue,Me,ve[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Je,Ue,Me,ve[ne]);for(let xe=0;xe<K.length;xe++){const me=K[xe];He?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,0,0,Ue,Me,me.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,Je,Ue,Me,me.image[ne])}}}w(y)&&x(n.TEXTURE_CUBE_MAP),Q.__version=ae.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function Ee(D,y,V,te,ae,Q){const Te=s.convert(V.format,V.colorSpace),pe=s.convert(V.type),we=C(V.internalFormat,Te,pe,V.colorSpace),$e=i.get(y),se=i.get(V);if(se.__renderTarget=y,!$e.__hasExternalTextures){const ve=Math.max(1,y.width>>Q),ze=Math.max(1,y.height>>Q);ae===n.TEXTURE_3D||ae===n.TEXTURE_2D_ARRAY?t.texImage3D(ae,Q,we,ve,ze,y.depth,0,Te,pe,null):t.texImage2D(ae,Q,we,ve,ze,0,Te,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),Ke(y)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,ae,se.__webglTexture,0,Ye(y)):(ae===n.TEXTURE_2D||ae>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,ae,se.__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function fe(D,y,V){if(n.bindRenderbuffer(n.RENDERBUFFER,D),y.depthBuffer){const te=y.depthTexture,ae=te&&te.isDepthTexture?te.type:null,Q=S(y.stencilBuffer,ae),Te=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=Ye(y);Ke(y)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,Q,y.width,y.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,Q,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Q,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,D)}else{const te=y.textures;for(let ae=0;ae<te.length;ae++){const Q=te[ae],Te=s.convert(Q.format,Q.colorSpace),pe=s.convert(Q.type),we=C(Q.internalFormat,Te,pe,Q.colorSpace),$e=Ye(y);V&&Ke(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,$e,we,y.width,y.height):Ke(y)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$e,we,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,we,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Le(D,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(y.depthTexture);te.__renderTarget=y,(!te.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ie(y.depthTexture,0);const ae=te.__webglTexture,Q=Ye(y);if(y.depthTexture.format===Ti)Ke(y)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0);else if(y.depthTexture.format===Ii)Ke(y)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Oe(D){const y=i.get(D),V=D.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==D.depthTexture){const te=D.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),te){const ae=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,te.removeEventListener("dispose",ae)};te.addEventListener("dispose",ae),y.__depthDisposeCallback=ae}y.__boundDepthTexture=te}if(D.depthTexture&&!y.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Le(y.__webglFramebuffer,D)}else if(V){y.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[te]),y.__webglDepthbuffer[te]===void 0)y.__webglDepthbuffer[te]=n.createRenderbuffer(),fe(y.__webglDepthbuffer[te],D,!1);else{const ae=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer[te];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),fe(y.__webglDepthbuffer,D,!1);else{const te=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,ae)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function qe(D,y,V){const te=i.get(D);y!==void 0&&Ee(te.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Oe(D)}function ft(D){const y=D.texture,V=i.get(D),te=i.get(y);D.addEventListener("dispose",U);const ae=D.textures,Q=D.isWebGLCubeRenderTarget===!0,Te=ae.length>1;if(Te||(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=y.version,o.memory.textures++),Q){V.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[pe]=[];for(let we=0;we<y.mipmaps.length;we++)V.__webglFramebuffer[pe][we]=n.createFramebuffer()}else V.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let pe=0;pe<y.mipmaps.length;pe++)V.__webglFramebuffer[pe]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Te)for(let pe=0,we=ae.length;pe<we;pe++){const $e=i.get(ae[pe]);$e.__webglTexture===void 0&&($e.__webglTexture=n.createTexture(),o.memory.textures++)}if(D.samples>0&&Ke(D)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let pe=0;pe<ae.length;pe++){const we=ae[pe];V.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[pe]);const $e=s.convert(we.format,we.colorSpace),se=s.convert(we.type),ve=C(we.internalFormat,$e,se,we.colorSpace,D.isXRRenderTarget===!0),ze=Ye(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,ve,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,V.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),fe(V.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),Xe(n.TEXTURE_CUBE_MAP,y);for(let pe=0;pe<6;pe++)if(y.mipmaps&&y.mipmaps.length>0)for(let we=0;we<y.mipmaps.length;we++)Ee(V.__webglFramebuffer[pe][we],D,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,we);else Ee(V.__webglFramebuffer[pe],D,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);w(y)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let pe=0,we=ae.length;pe<we;pe++){const $e=ae[pe],se=i.get($e);t.bindTexture(n.TEXTURE_2D,se.__webglTexture),Xe(n.TEXTURE_2D,$e),Ee(V.__webglFramebuffer,D,$e,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,0),w($e)&&x(n.TEXTURE_2D)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(pe=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,te.__webglTexture),Xe(pe,y),y.mipmaps&&y.mipmaps.length>0)for(let we=0;we<y.mipmaps.length;we++)Ee(V.__webglFramebuffer[we],D,y,n.COLOR_ATTACHMENT0,pe,we);else Ee(V.__webglFramebuffer,D,y,n.COLOR_ATTACHMENT0,pe,0);w(y)&&x(pe),t.unbindTexture()}D.depthBuffer&&Oe(D)}function Ze(D){const y=D.textures;for(let V=0,te=y.length;V<te;V++){const ae=y[V];if(w(ae)){const Q=P(D),Te=i.get(ae).__webglTexture;t.bindTexture(Q,Te),x(Q),t.unbindTexture()}}}const gt=[],G=[];function Nt(D){if(D.samples>0){if(Ke(D)===!1){const y=D.textures,V=D.width,te=D.height;let ae=n.COLOR_BUFFER_BIT;const Q=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(D),pe=y.length>1;if(pe)for(let we=0;we<y.length;we++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let we=0;we<y.length;we++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ae|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ae|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[we]);const $e=i.get(y[we]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$e,0)}n.blitFramebuffer(0,0,V,te,0,0,V,te,ae,n.NEAREST),u===!0&&(gt.length=0,G.length=0,gt.push(n.COLOR_ATTACHMENT0+we),D.depthBuffer&&D.resolveDepthBuffer===!1&&(gt.push(Q),G.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,G)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,gt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let we=0;we<y.length;we++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,Te.__webglColorRenderbuffer[we]);const $e=i.get(y[we]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,$e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&u){const y=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Ye(D){return Math.min(a.maxSamples,D.samples)}function Ke(D){const y=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ie(D){const y=o.render.frame;h.get(D)!==y&&(h.set(D,y),D.update())}function ct(D,y){const V=D.colorSpace,te=D.format,ae=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||V!==Li&&V!==Un&&(Qe.getTransfer(V)===rt?(te!==nn||ae!==yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),y}function De(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=Y,this.setTexture2D=ie,this.setTexture2DArray=j,this.setTexture3D=ce,this.setTextureCube=J,this.rebindTextures=qe,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Ke}function xp(n,e){function t(i,a=Un){let s;const o=Qe.getTransfer(a);if(i===yn)return n.UNSIGNED_BYTE;if(i===Ir)return n.UNSIGNED_SHORT_4_4_4_4;if(i===zr)return n.UNSIGNED_SHORT_5_5_5_1;if(i===fc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===hc)return n.BYTE;if(i===uc)return n.SHORT;if(i===ia)return n.UNSIGNED_SHORT;if(i===Dr)return n.INT;if(i===ei)return n.UNSIGNED_INT;if(i===hn)return n.FLOAT;if(i===sa)return n.HALF_FLOAT;if(i===pc)return n.ALPHA;if(i===mc)return n.RGB;if(i===nn)return n.RGBA;if(i===gc)return n.LUMINANCE;if(i===xc)return n.LUMINANCE_ALPHA;if(i===Ti)return n.DEPTH_COMPONENT;if(i===Ii)return n.DEPTH_STENCIL;if(i===Lr)return n.RED;if(i===Ur)return n.RED_INTEGER;if(i===_c)return n.RG;if(i===Nr)return n.RG_INTEGER;if(i===Or)return n.RGBA_INTEGER;if(i===Wa||i===Xa||i===qa||i===Ya)if(o===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Wa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Wa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ya)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===er||i===tr||i===nr||i===ir)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===er)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===tr)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===nr)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ir)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ar||i===sr||i===rr)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ar||i===sr)return o===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===rr)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===or||i===cr||i===dr||i===lr||i===hr||i===ur||i===fr||i===pr||i===mr||i===gr||i===xr||i===_r||i===wr||i===vr)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===or)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cr)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===dr)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===lr)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hr)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ur)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fr)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===pr)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===mr)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===gr)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xr)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_r)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wr)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vr)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ka||i===Mr||i===br)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ka)return o===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Mr)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===br)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===wc||i===yr||i===Sr||i===Er)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ka)return s.COMPRESSED_RED_RGTC1_EXT;if(i===yr)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Sr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Er)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Di?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class _p extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class I extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wp={type:"move"};class Ns{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new I,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new I,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new v,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new v),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new I,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new v,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new v),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,s=null,o=null;const d=this._targetRay,u=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const b of e.hand.values()){const w=t.getJointPose(b,i),x=this._getHandJoint(l,b);w!==null&&(x.matrix.fromArray(w.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=w.radius),x.visible=w!==null}const h=l.joints["index-finger-tip"],m=l.joints["thumb-tip"],p=h.position.distanceTo(m.position),g=.02,M=.005;l.inputState.pinching&&p>g+M?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=g-M&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));d!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(wp)))}return d!==null&&(d.visible=a!==null),u!==null&&(u.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new I;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const vp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mp=`
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

}`;class bp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const a=new Ct,s=e.properties.get(a);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Sn({vertexShader:vp,fragmentShader:Mp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ot(new Fi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yp extends Ui{constructor(e,t){super();const i=this;let a=null,s=1,o=null,d="local-floor",u=1,l=null,h=null,m=null,p=null,g=null,M=null;const b=new bp,w=t.getContextAttributes();let x=null,P=null;const C=[],S=[],H=new Pe;let L=null;const U=new en;U.viewport=new xt;const O=new en;O.viewport=new xt;const R=[U,O],E=new _p;let N=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let de=C[ee];return de===void 0&&(de=new Ns,C[ee]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ee){let de=C[ee];return de===void 0&&(de=new Ns,C[ee]=de),de.getGripSpace()},this.getHand=function(ee){let de=C[ee];return de===void 0&&(de=new Ns,C[ee]=de),de.getHandSpace()};function q(ee){const de=S.indexOf(ee.inputSource);if(de===-1)return;const Ee=C[de];Ee!==void 0&&(Ee.update(ee.inputSource,ee.frame,l||o),Ee.dispatchEvent({type:ee.type,data:ee.inputSource}))}function $(){a.removeEventListener("select",q),a.removeEventListener("selectstart",q),a.removeEventListener("selectend",q),a.removeEventListener("squeeze",q),a.removeEventListener("squeezestart",q),a.removeEventListener("squeezeend",q),a.removeEventListener("end",$),a.removeEventListener("inputsourceschange",ie);for(let ee=0;ee<C.length;ee++){const de=S[ee];de!==null&&(S[ee]=null,C[ee].disconnect(de))}N=null,Y=null,b.reset(),e.setRenderTarget(x),g=null,p=null,m=null,a=null,P=null,it.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(H.width,H.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){d=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ee){l=ee},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return m},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(ee){if(a=ee,a!==null){if(x=e.getRenderTarget(),a.addEventListener("select",q),a.addEventListener("selectstart",q),a.addEventListener("selectend",q),a.addEventListener("squeeze",q),a.addEventListener("squeezestart",q),a.addEventListener("squeezeend",q),a.addEventListener("end",$),a.addEventListener("inputsourceschange",ie),w.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(H),a.renderState.layers===void 0){const de={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(a,t,de),a.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),P=new ti(g.framebufferWidth,g.framebufferHeight,{format:nn,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil})}else{let de=null,Ee=null,fe=null;w.depth&&(fe=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=w.stencil?Ii:Ti,Ee=w.stencil?Di:ei);const Le={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:s};m=new XRWebGLBinding(a,t),p=m.createProjectionLayer(Le),a.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),P=new ti(p.textureWidth,p.textureHeight,{format:nn,type:yn,depthTexture:new Uc(p.textureWidth,p.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(u),l=null,o=await a.requestReferenceSpace(d),it.setContext(a),it.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function ie(ee){for(let de=0;de<ee.removed.length;de++){const Ee=ee.removed[de],fe=S.indexOf(Ee);fe>=0&&(S[fe]=null,C[fe].disconnect(Ee))}for(let de=0;de<ee.added.length;de++){const Ee=ee.added[de];let fe=S.indexOf(Ee);if(fe===-1){for(let Oe=0;Oe<C.length;Oe++)if(Oe>=S.length){S.push(Ee),fe=Oe;break}else if(S[Oe]===null){S[Oe]=Ee,fe=Oe;break}if(fe===-1)break}const Le=C[fe];Le&&Le.connect(Ee)}}const j=new v,ce=new v;function J(ee,de,Ee){j.setFromMatrixPosition(de.matrixWorld),ce.setFromMatrixPosition(Ee.matrixWorld);const fe=j.distanceTo(ce),Le=de.projectionMatrix.elements,Oe=Ee.projectionMatrix.elements,qe=Le[14]/(Le[10]-1),ft=Le[14]/(Le[10]+1),Ze=(Le[9]+1)/Le[5],gt=(Le[9]-1)/Le[5],G=(Le[8]-1)/Le[0],Nt=(Oe[8]+1)/Oe[0],Ye=qe*G,Ke=qe*Nt,Ie=fe/(-G+Nt),ct=Ie*-G;if(de.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(ct),ee.translateZ(Ie),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Le[10]===-1)ee.projectionMatrix.copy(de.projectionMatrix),ee.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const De=qe+Ie,D=ft+Ie,y=Ye-ct,V=Ke+(fe-ct),te=Ze*ft/D*De,ae=gt*ft/D*De;ee.projectionMatrix.makePerspective(y,V,te,ae,De,D),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ue(ee,de){de===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(de.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(a===null)return;let de=ee.near,Ee=ee.far;b.texture!==null&&(b.depthNear>0&&(de=b.depthNear),b.depthFar>0&&(Ee=b.depthFar)),E.near=O.near=U.near=de,E.far=O.far=U.far=Ee,(N!==E.near||Y!==E.far)&&(a.updateRenderState({depthNear:E.near,depthFar:E.far}),N=E.near,Y=E.far),U.layers.mask=ee.layers.mask|2,O.layers.mask=ee.layers.mask|4,E.layers.mask=U.layers.mask|O.layers.mask;const fe=ee.parent,Le=E.cameras;ue(E,fe);for(let Oe=0;Oe<Le.length;Oe++)ue(Le[Oe],fe);Le.length===2?J(E,U,O):E.projectionMatrix.copy(U.projectionMatrix),_e(ee,E,fe)};function _e(ee,de,Ee){Ee===null?ee.matrix.copy(de.matrixWorld):(ee.matrix.copy(Ee.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(de.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(de.projectionMatrix),ee.projectionMatrixInverse.copy(de.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Tr*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(p===null&&g===null))return u},this.setFoveation=function(ee){u=ee,p!==null&&(p.fixedFoveation=ee),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=ee)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(E)};let Re=null;function Xe(ee,de){if(h=de.getViewerPose(l||o),M=de,h!==null){const Ee=h.views;g!==null&&(e.setRenderTargetFramebuffer(P,g.framebuffer),e.setRenderTarget(P));let fe=!1;Ee.length!==E.cameras.length&&(E.cameras.length=0,fe=!0);for(let Oe=0;Oe<Ee.length;Oe++){const qe=Ee[Oe];let ft=null;if(g!==null)ft=g.getViewport(qe);else{const gt=m.getViewSubImage(p,qe);ft=gt.viewport,Oe===0&&(e.setRenderTargetTextures(P,gt.colorTexture,p.ignoreDepthValues?void 0:gt.depthStencilTexture),e.setRenderTarget(P))}let Ze=R[Oe];Ze===void 0&&(Ze=new en,Ze.layers.enable(Oe),Ze.viewport=new xt,R[Oe]=Ze),Ze.matrix.fromArray(qe.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(qe.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(ft.x,ft.y,ft.width,ft.height),Oe===0&&(E.matrix.copy(Ze.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),fe===!0&&E.cameras.push(Ze)}const Le=a.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const Oe=m.getDepthInformation(Ee[0]);Oe&&Oe.isValid&&Oe.texture&&b.init(e,Oe,a.renderState)}}for(let Ee=0;Ee<C.length;Ee++){const fe=S[Ee],Le=C[Ee];fe!==null&&Le!==void 0&&Le.update(fe,de,l||o)}Re&&Re(ee,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),M=null}const it=new zc;it.setAnimationLoop(Xe),this.setAnimationLoop=function(ee){Re=ee},this.dispose=function(){}}}const qn=new fn,Sp=new ht;function Ep(n,e){function t(w,x){w.matrixAutoUpdate===!0&&w.updateMatrix(),x.value.copy(w.matrix)}function i(w,x){x.color.getRGB(w.fogColor.value,Pc(n)),x.isFog?(w.fogNear.value=x.near,w.fogFar.value=x.far):x.isFogExp2&&(w.fogDensity.value=x.density)}function a(w,x,P,C,S){x.isMeshBasicMaterial||x.isMeshLambertMaterial?s(w,x):x.isMeshToonMaterial?(s(w,x),m(w,x)):x.isMeshPhongMaterial?(s(w,x),h(w,x)):x.isMeshStandardMaterial?(s(w,x),p(w,x),x.isMeshPhysicalMaterial&&g(w,x,S)):x.isMeshMatcapMaterial?(s(w,x),M(w,x)):x.isMeshDepthMaterial?s(w,x):x.isMeshDistanceMaterial?(s(w,x),b(w,x)):x.isMeshNormalMaterial?s(w,x):x.isLineBasicMaterial?(o(w,x),x.isLineDashedMaterial&&d(w,x)):x.isPointsMaterial?u(w,x,P,C):x.isSpriteMaterial?l(w,x):x.isShadowMaterial?(w.color.value.copy(x.color),w.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function s(w,x){w.opacity.value=x.opacity,x.color&&w.diffuse.value.copy(x.color),x.emissive&&w.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(w.map.value=x.map,t(x.map,w.mapTransform)),x.alphaMap&&(w.alphaMap.value=x.alphaMap,t(x.alphaMap,w.alphaMapTransform)),x.bumpMap&&(w.bumpMap.value=x.bumpMap,t(x.bumpMap,w.bumpMapTransform),w.bumpScale.value=x.bumpScale,x.side===Lt&&(w.bumpScale.value*=-1)),x.normalMap&&(w.normalMap.value=x.normalMap,t(x.normalMap,w.normalMapTransform),w.normalScale.value.copy(x.normalScale),x.side===Lt&&w.normalScale.value.negate()),x.displacementMap&&(w.displacementMap.value=x.displacementMap,t(x.displacementMap,w.displacementMapTransform),w.displacementScale.value=x.displacementScale,w.displacementBias.value=x.displacementBias),x.emissiveMap&&(w.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,w.emissiveMapTransform)),x.specularMap&&(w.specularMap.value=x.specularMap,t(x.specularMap,w.specularMapTransform)),x.alphaTest>0&&(w.alphaTest.value=x.alphaTest);const P=e.get(x),C=P.envMap,S=P.envMapRotation;C&&(w.envMap.value=C,qn.copy(S),qn.x*=-1,qn.y*=-1,qn.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),w.envMapRotation.value.setFromMatrix4(Sp.makeRotationFromEuler(qn)),w.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,w.reflectivity.value=x.reflectivity,w.ior.value=x.ior,w.refractionRatio.value=x.refractionRatio),x.lightMap&&(w.lightMap.value=x.lightMap,w.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,w.lightMapTransform)),x.aoMap&&(w.aoMap.value=x.aoMap,w.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,w.aoMapTransform))}function o(w,x){w.diffuse.value.copy(x.color),w.opacity.value=x.opacity,x.map&&(w.map.value=x.map,t(x.map,w.mapTransform))}function d(w,x){w.dashSize.value=x.dashSize,w.totalSize.value=x.dashSize+x.gapSize,w.scale.value=x.scale}function u(w,x,P,C){w.diffuse.value.copy(x.color),w.opacity.value=x.opacity,w.size.value=x.size*P,w.scale.value=C*.5,x.map&&(w.map.value=x.map,t(x.map,w.uvTransform)),x.alphaMap&&(w.alphaMap.value=x.alphaMap,t(x.alphaMap,w.alphaMapTransform)),x.alphaTest>0&&(w.alphaTest.value=x.alphaTest)}function l(w,x){w.diffuse.value.copy(x.color),w.opacity.value=x.opacity,w.rotation.value=x.rotation,x.map&&(w.map.value=x.map,t(x.map,w.mapTransform)),x.alphaMap&&(w.alphaMap.value=x.alphaMap,t(x.alphaMap,w.alphaMapTransform)),x.alphaTest>0&&(w.alphaTest.value=x.alphaTest)}function h(w,x){w.specular.value.copy(x.specular),w.shininess.value=Math.max(x.shininess,1e-4)}function m(w,x){x.gradientMap&&(w.gradientMap.value=x.gradientMap)}function p(w,x){w.metalness.value=x.metalness,x.metalnessMap&&(w.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,w.metalnessMapTransform)),w.roughness.value=x.roughness,x.roughnessMap&&(w.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,w.roughnessMapTransform)),x.envMap&&(w.envMapIntensity.value=x.envMapIntensity)}function g(w,x,P){w.ior.value=x.ior,x.sheen>0&&(w.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),w.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(w.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,w.sheenColorMapTransform)),x.sheenRoughnessMap&&(w.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,w.sheenRoughnessMapTransform))),x.clearcoat>0&&(w.clearcoat.value=x.clearcoat,w.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(w.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,w.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(w.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,w.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(w.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,w.clearcoatNormalMapTransform),w.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Lt&&w.clearcoatNormalScale.value.negate())),x.dispersion>0&&(w.dispersion.value=x.dispersion),x.iridescence>0&&(w.iridescence.value=x.iridescence,w.iridescenceIOR.value=x.iridescenceIOR,w.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],w.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(w.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,w.iridescenceMapTransform)),x.iridescenceThicknessMap&&(w.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,w.iridescenceThicknessMapTransform))),x.transmission>0&&(w.transmission.value=x.transmission,w.transmissionSamplerMap.value=P.texture,w.transmissionSamplerSize.value.set(P.width,P.height),x.transmissionMap&&(w.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,w.transmissionMapTransform)),w.thickness.value=x.thickness,x.thicknessMap&&(w.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,w.thicknessMapTransform)),w.attenuationDistance.value=x.attenuationDistance,w.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(w.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(w.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,w.anisotropyMapTransform))),w.specularIntensity.value=x.specularIntensity,w.specularColor.value.copy(x.specularColor),x.specularColorMap&&(w.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,w.specularColorMapTransform)),x.specularIntensityMap&&(w.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,w.specularIntensityMapTransform))}function M(w,x){x.matcap&&(w.matcap.value=x.matcap)}function b(w,x){const P=e.get(x).light;w.referencePosition.value.setFromMatrixPosition(P.matrixWorld),w.nearDistance.value=P.shadow.camera.near,w.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function Tp(n,e,t,i){let a={},s={},o=[];const d=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function u(P,C){const S=C.program;i.uniformBlockBinding(P,S)}function l(P,C){let S=a[P.id];S===void 0&&(M(P),S=h(P),a[P.id]=S,P.addEventListener("dispose",w));const H=C.program;i.updateUBOMapping(P,H);const L=e.render.frame;s[P.id]!==L&&(p(P),s[P.id]=L)}function h(P){const C=m();P.__bindingPointIndex=C;const S=n.createBuffer(),H=P.__size,L=P.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,H,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,C,S),S}function m(){for(let P=0;P<d;P++)if(o.indexOf(P)===-1)return o.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(P){const C=a[P.id],S=P.uniforms,H=P.__cache;n.bindBuffer(n.UNIFORM_BUFFER,C);for(let L=0,U=S.length;L<U;L++){const O=Array.isArray(S[L])?S[L]:[S[L]];for(let R=0,E=O.length;R<E;R++){const N=O[R];if(g(N,L,R,H)===!0){const Y=N.__offset,q=Array.isArray(N.value)?N.value:[N.value];let $=0;for(let ie=0;ie<q.length;ie++){const j=q[ie],ce=b(j);typeof j=="number"||typeof j=="boolean"?(N.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,Y+$,N.__data)):j.isMatrix3?(N.__data[0]=j.elements[0],N.__data[1]=j.elements[1],N.__data[2]=j.elements[2],N.__data[3]=0,N.__data[4]=j.elements[3],N.__data[5]=j.elements[4],N.__data[6]=j.elements[5],N.__data[7]=0,N.__data[8]=j.elements[6],N.__data[9]=j.elements[7],N.__data[10]=j.elements[8],N.__data[11]=0):(j.toArray(N.__data,$),$+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Y,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(P,C,S,H){const L=P.value,U=C+"_"+S;if(H[U]===void 0)return typeof L=="number"||typeof L=="boolean"?H[U]=L:H[U]=L.clone(),!0;{const O=H[U];if(typeof L=="number"||typeof L=="boolean"){if(O!==L)return H[U]=L,!0}else if(O.equals(L)===!1)return O.copy(L),!0}return!1}function M(P){const C=P.uniforms;let S=0;const H=16;for(let U=0,O=C.length;U<O;U++){const R=Array.isArray(C[U])?C[U]:[C[U]];for(let E=0,N=R.length;E<N;E++){const Y=R[E],q=Array.isArray(Y.value)?Y.value:[Y.value];for(let $=0,ie=q.length;$<ie;$++){const j=q[$],ce=b(j),J=S%H,ue=J%ce.boundary,_e=J+ue;S+=ue,_e!==0&&H-_e<ce.storage&&(S+=H-_e),Y.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=S,S+=ce.storage}}}const L=S%H;return L>0&&(S+=H-L),P.__size=S,P.__cache={},this}function b(P){const C={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(C.boundary=4,C.storage=4):P.isVector2?(C.boundary=8,C.storage=8):P.isVector3||P.isColor?(C.boundary=16,C.storage=12):P.isVector4?(C.boundary=16,C.storage=16):P.isMatrix3?(C.boundary=48,C.storage=48):P.isMatrix4?(C.boundary=64,C.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),C}function w(P){const C=P.target;C.removeEventListener("dispose",w);const S=o.indexOf(C.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(a[C.id]),delete a[C.id],delete s[C.id]}function x(){for(const P in a)n.deleteBuffer(a[P]);o=[],a={},s={}}return{bind:u,update:l,dispose:x}}class Ap{constructor(e={}){const{canvas:t=ph(),context:i=null,depth:a=!0,stencil:s=!1,alpha:o=!1,antialias:d=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const M=new Uint32Array(4),b=new Int32Array(4);let w=null,x=null;const P=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kt,this.toneMapping=On,this.toneMappingExposure=1;const S=this;let H=!1,L=0,U=0,O=null,R=-1,E=null;const N=new xt,Y=new xt;let q=null;const $=new We(0);let ie=0,j=t.width,ce=t.height,J=1,ue=null,_e=null;const Re=new xt(0,0,j,ce),Xe=new xt(0,0,j,ce);let it=!1;const ee=new kr;let de=!1,Ee=!1;const fe=new ht,Le=new ht,Oe=new v,qe=new xt,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function gt(){return O===null?J:1}let G=i;function Nt(T,k){return t.getContext(T,k)}try{const T={alpha:!0,depth:a,stencil:s,antialias:d,premultipliedAlpha:u,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pr}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",me,!1),G===null){const k="webgl2";if(G=Nt(k,T),G===null)throw Nt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ye,Ke,Ie,ct,De,D,y,V,te,ae,Q,Te,pe,we,$e,se,ve,ze,Ue,Me,Je,He,at,F;function he(){Ye=new If(G),Ye.init(),He=new xp(G,Ye),Ke=new Tf(G,Ye,e,He),Ie=new pp(G,Ye),Ke.reverseDepthBuffer&&p&&Ie.buffers.depth.setReversed(!0),ct=new Uf(G),De=new Q1,D=new gp(G,Ye,Ie,De,Ke,He,ct),y=new Rf(S),V=new Df(S),te=new Hh(G),at=new Sf(G,te),ae=new zf(G,te,ct,at),Q=new Of(G,ae,te,ct),Ue=new Nf(G,Ke,D),se=new Af(De),Te=new j1(S,y,V,Ye,Ke,at,se),pe=new Ep(S,De),we=new tp,$e=new op(Ye),ze=new yf(S,y,V,Ie,Q,g,u),ve=new up(S,Q,Ke),F=new Tp(G,ct,Ke,Ie),Me=new Ef(G,Ye,ct),Je=new Lf(G,Ye,ct),ct.programs=Te.programs,S.capabilities=Ke,S.extensions=Ye,S.properties=De,S.renderLists=we,S.shadowMap=ve,S.state=Ie,S.info=ct}he();const K=new yp(S,G);this.xr=K,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const T=Ye.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ye.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(T){T!==void 0&&(J=T,this.setSize(j,ce,!1))},this.getSize=function(T){return T.set(j,ce)},this.setSize=function(T,k,W=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=T,ce=k,t.width=Math.floor(T*J),t.height=Math.floor(k*J),W===!0&&(t.style.width=T+"px",t.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(j*J,ce*J).floor()},this.setDrawingBufferSize=function(T,k,W){j=T,ce=k,J=W,t.width=Math.floor(T*W),t.height=Math.floor(k*W),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(N)},this.getViewport=function(T){return T.copy(Re)},this.setViewport=function(T,k,W,X){T.isVector4?Re.set(T.x,T.y,T.z,T.w):Re.set(T,k,W,X),Ie.viewport(N.copy(Re).multiplyScalar(J).round())},this.getScissor=function(T){return T.copy(Xe)},this.setScissor=function(T,k,W,X){T.isVector4?Xe.set(T.x,T.y,T.z,T.w):Xe.set(T,k,W,X),Ie.scissor(Y.copy(Xe).multiplyScalar(J).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(T){Ie.setScissorTest(it=T)},this.setOpaqueSort=function(T){ue=T},this.setTransparentSort=function(T){_e=T},this.getClearColor=function(T){return T.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(T=!0,k=!0,W=!0){let X=0;if(T){let B=!1;if(O!==null){const re=O.texture.format;B=re===Or||re===Nr||re===Ur}if(B){const re=O.texture.type,ge=re===yn||re===ei||re===ia||re===Di||re===Ir||re===zr,be=ze.getClearColor(),ye=ze.getClearAlpha(),Ne=be.r,Be=be.g,Se=be.b;ge?(M[0]=Ne,M[1]=Be,M[2]=Se,M[3]=ye,G.clearBufferuiv(G.COLOR,0,M)):(b[0]=Ne,b[1]=Be,b[2]=Se,b[3]=ye,G.clearBufferiv(G.COLOR,0,b))}else X|=G.COLOR_BUFFER_BIT}k&&(X|=G.DEPTH_BUFFER_BIT),W&&(X|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",me,!1),we.dispose(),$e.dispose(),De.dispose(),y.dispose(),V.dispose(),Q.dispose(),at.dispose(),F.dispose(),Te.dispose(),K.dispose(),K.removeEventListener("sessionstart",da),K.removeEventListener("sessionend",la),pn.stop()};function ne(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const T=ct.autoReset,k=ve.enabled,W=ve.autoUpdate,X=ve.needsUpdate,B=ve.type;he(),ct.autoReset=T,ve.enabled=k,ve.autoUpdate=W,ve.needsUpdate=X,ve.type=B}function me(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ke(T){const k=T.target;k.removeEventListener("dispose",ke),mt(k)}function mt(T){yt(T),De.remove(T)}function yt(T){const k=De.get(T).programs;k!==void 0&&(k.forEach(function(W){Te.releaseProgram(W)}),T.isShaderMaterial&&Te.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,W,X,B,re){k===null&&(k=ft);const ge=B.isMesh&&B.matrixWorld.determinant()<0,be=as(T,k,W,X,B);Ie.setMaterial(X,ge);let ye=W.index,Ne=1;if(X.wireframe===!0){if(ye=ae.getWireframeAttribute(W),ye===void 0)return;Ne=2}const Be=W.drawRange,Se=W.attributes.position;let je=Be.start*Ne,st=(Be.start+Be.count)*Ne;re!==null&&(je=Math.max(je,re.start*Ne),st=Math.min(st,(re.start+re.count)*Ne)),ye!==null?(je=Math.max(je,0),st=Math.min(st,ye.count)):Se!=null&&(je=Math.max(je,0),st=Math.min(st,Se.count));const dt=st-je;if(dt<0||dt===1/0)return;at.setup(B,X,be,W,ye);let Et,et=Me;if(ye!==null&&(Et=te.get(ye),et=Je,et.setIndex(Et)),B.isMesh)X.wireframe===!0?(Ie.setLineWidth(X.wireframeLinewidth*gt()),et.setMode(G.LINES)):et.setMode(G.TRIANGLES);else if(B.isLine){let Ae=X.linewidth;Ae===void 0&&(Ae=1),Ie.setLineWidth(Ae*gt()),B.isLineSegments?et.setMode(G.LINES):B.isLineLoop?et.setMode(G.LINE_LOOP):et.setMode(G.LINE_STRIP)}else B.isPoints?et.setMode(G.POINTS):B.isSprite&&et.setMode(G.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)et.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))et.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ae=B._multiDrawStarts,Jt=B._multiDrawCounts,tt=B._multiDrawCount,Ht=ye?te.get(ye).bytesPerElement:1,Tn=De.get(X).currentProgram.getUniforms();for(let Dt=0;Dt<tt;Dt++)Tn.setValue(G,"_gl_DrawID",Dt),et.render(Ae[Dt]/Ht,Jt[Dt])}else if(B.isInstancedMesh)et.renderInstances(je,dt,B.count);else if(W.isInstancedBufferGeometry){const Ae=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Jt=Math.min(W.instanceCount,Ae);et.renderInstances(je,dt,Jt)}else et.render(je,dt)};function nt(T,k,W){T.transparent===!0&&T.side===dn&&T.forceSinglePass===!1?(T.side=Lt,T.needsUpdate=!0,ri(T,k,W),T.side=Fn,T.needsUpdate=!0,ri(T,k,W),T.side=dn):ri(T,k,W)}this.compile=function(T,k,W=null){W===null&&(W=T),x=$e.get(W),x.init(k),C.push(x),W.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(x.pushLight(B),B.castShadow&&x.pushShadow(B))}),T!==W&&T.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(x.pushLight(B),B.castShadow&&x.pushShadow(B))}),x.setupLights();const X=new Set;return T.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const re=B.material;if(re)if(Array.isArray(re))for(let ge=0;ge<re.length;ge++){const be=re[ge];nt(be,W,B),X.add(be)}else nt(re,W,B),X.add(re)}),C.pop(),x=null,X},this.compileAsync=function(T,k,W=null){const X=this.compile(T,k,W);return new Promise(B=>{function re(){if(X.forEach(function(ge){De.get(ge).currentProgram.isReady()&&X.delete(ge)}),X.size===0){B(T);return}setTimeout(re,10)}Ye.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Bt=null;function Kt(T){Bt&&Bt(T)}function da(){pn.stop()}function la(){pn.start()}const pn=new zc;pn.setAnimationLoop(Kt),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(T){Bt=T,K.setAnimationLoop(T),T===null?pn.stop():pn.start()},K.addEventListener("sessionstart",da),K.addEventListener("sessionend",la),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(k),k=K.getCamera()),T.isScene===!0&&T.onBeforeRender(S,T,k,O),x=$e.get(T,C.length),x.init(k),C.push(x),Le.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ee.setFromProjectionMatrix(Le),Ee=this.localClippingEnabled,de=se.init(this.clippingPlanes,Ee),w=we.get(T,P.length),w.init(),P.push(w),K.enabled===!0&&K.isPresenting===!0){const re=S.xr.getDepthSensingMesh();re!==null&&Hi(re,k,-1/0,S.sortObjects)}Hi(T,k,0,S.sortObjects),w.finish(),S.sortObjects===!0&&w.sort(ue,_e),Ze=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Ze&&ze.addToRenderList(w,T),this.info.render.frame++,de===!0&&se.beginShadows();const W=x.state.shadowsArray;ve.render(W,T,k),de===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=w.opaque,B=w.transmissive;if(x.setupLights(),k.isArrayCamera){const re=k.cameras;if(B.length>0)for(let ge=0,be=re.length;ge<be;ge++){const ye=re[ge];ua(X,B,T,ye)}Ze&&ze.render(T);for(let ge=0,be=re.length;ge<be;ge++){const ye=re[ge];ha(w,T,ye,ye.viewport)}}else B.length>0&&ua(X,B,T,k),Ze&&ze.render(T),ha(w,T,k);O!==null&&(D.updateMultisampleRenderTarget(O),D.updateRenderTargetMipmap(O)),T.isScene===!0&&T.onAfterRender(S,T,k),at.resetDefaultState(),R=-1,E=null,C.pop(),C.length>0?(x=C[C.length-1],de===!0&&se.setGlobalState(S.clippingPlanes,x.state.camera)):x=null,P.pop(),P.length>0?w=P[P.length-1]:w=null};function Hi(T,k,W,X){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)x.pushLight(T),T.castShadow&&x.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ee.intersectsSprite(T)){X&&qe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Le);const ge=Q.update(T),be=T.material;be.visible&&w.push(T,ge,be,W,qe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ee.intersectsObject(T))){const ge=Q.update(T),be=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),qe.copy(T.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),qe.copy(ge.boundingSphere.center)),qe.applyMatrix4(T.matrixWorld).applyMatrix4(Le)),Array.isArray(be)){const ye=ge.groups;for(let Ne=0,Be=ye.length;Ne<Be;Ne++){const Se=ye[Ne],je=be[Se.materialIndex];je&&je.visible&&w.push(T,ge,je,W,qe.z,Se)}}else be.visible&&w.push(T,ge,be,W,qe.z,null)}}const re=T.children;for(let ge=0,be=re.length;ge<be;ge++)Hi(re[ge],k,W,X)}function ha(T,k,W,X){const B=T.opaque,re=T.transmissive,ge=T.transparent;x.setupLightsView(W),de===!0&&se.setGlobalState(S.clippingPlanes,W),X&&Ie.viewport(N.copy(X)),B.length>0&&si(B,k,W),re.length>0&&si(re,k,W),ge.length>0&&si(ge,k,W),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function ua(T,k,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[X.id]===void 0&&(x.state.transmissionRenderTarget[X.id]=new ti(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?sa:yn,minFilter:Qn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const re=x.state.transmissionRenderTarget[X.id],ge=X.viewport||N;re.setSize(ge.z,ge.w);const be=S.getRenderTarget();S.setRenderTarget(re),S.getClearColor($),ie=S.getClearAlpha(),ie<1&&S.setClearColor(16777215,.5),S.clear(),Ze&&ze.render(W);const ye=S.toneMapping;S.toneMapping=On;const Ne=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),x.setupLightsView(X),de===!0&&se.setGlobalState(S.clippingPlanes,X),si(T,W,X),D.updateMultisampleRenderTarget(re),D.updateRenderTargetMipmap(re),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Se=0,je=k.length;Se<je;Se++){const st=k[Se],dt=st.object,Et=st.geometry,et=st.material,Ae=st.group;if(et.side===dn&&dt.layers.test(X.layers)){const Jt=et.side;et.side=Lt,et.needsUpdate=!0,fa(dt,W,X,Et,et,Ae),et.side=Jt,et.needsUpdate=!0,Be=!0}}Be===!0&&(D.updateMultisampleRenderTarget(re),D.updateRenderTargetMipmap(re))}S.setRenderTarget(be),S.setClearColor($,ie),Ne!==void 0&&(X.viewport=Ne),S.toneMapping=ye}function si(T,k,W){const X=k.isScene===!0?k.overrideMaterial:null;for(let B=0,re=T.length;B<re;B++){const ge=T[B],be=ge.object,ye=ge.geometry,Ne=X===null?ge.material:X,Be=ge.group;be.layers.test(W.layers)&&fa(be,k,W,ye,Ne,Be)}}function fa(T,k,W,X,B,re){T.onBeforeRender(S,k,W,X,B,re),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(S,k,W,X,T,re),B.transparent===!0&&B.side===dn&&B.forceSinglePass===!1?(B.side=Lt,B.needsUpdate=!0,S.renderBufferDirect(W,k,X,B,T,re),B.side=Fn,B.needsUpdate=!0,S.renderBufferDirect(W,k,X,B,T,re),B.side=dn):S.renderBufferDirect(W,k,X,B,T,re),T.onAfterRender(S,k,W,X,B,re)}function ri(T,k,W){k.isScene!==!0&&(k=ft);const X=De.get(T),B=x.state.lights,re=x.state.shadowsArray,ge=B.state.version,be=Te.getParameters(T,B.state,re,k,W),ye=Te.getProgramCacheKey(be);let Ne=X.programs;X.environment=T.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(T.isMeshStandardMaterial?V:y).get(T.envMap||X.environment),X.envMapRotation=X.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,Ne===void 0&&(T.addEventListener("dispose",ke),Ne=new Map,X.programs=Ne);let Be=Ne.get(ye);if(Be!==void 0){if(X.currentProgram===Be&&X.lightsStateVersion===ge)return ma(T,be),Be}else be.uniforms=Te.getUniforms(T),T.onBeforeCompile(be,S),Be=Te.acquireProgram(be,ye),Ne.set(ye,Be),X.uniforms=be.uniforms;const Se=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Se.clippingPlanes=se.uniform),ma(T,be),X.needsLights=rs(T),X.lightsStateVersion=ge,X.needsLights&&(Se.ambientLightColor.value=B.state.ambient,Se.lightProbe.value=B.state.probe,Se.directionalLights.value=B.state.directional,Se.directionalLightShadows.value=B.state.directionalShadow,Se.spotLights.value=B.state.spot,Se.spotLightShadows.value=B.state.spotShadow,Se.rectAreaLights.value=B.state.rectArea,Se.ltc_1.value=B.state.rectAreaLTC1,Se.ltc_2.value=B.state.rectAreaLTC2,Se.pointLights.value=B.state.point,Se.pointLightShadows.value=B.state.pointShadow,Se.hemisphereLights.value=B.state.hemi,Se.directionalShadowMap.value=B.state.directionalShadowMap,Se.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Se.spotShadowMap.value=B.state.spotShadowMap,Se.spotLightMatrix.value=B.state.spotLightMatrix,Se.spotLightMap.value=B.state.spotLightMap,Se.pointShadowMap.value=B.state.pointShadowMap,Se.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=Be,X.uniformsList=null,Be}function pa(T){if(T.uniformsList===null){const k=T.currentProgram.getUniforms();T.uniformsList=Ja.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function ma(T,k){const W=De.get(T);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.batchingColor=k.batchingColor,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.instancingMorph=k.instancingMorph,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function as(T,k,W,X,B){k.isScene!==!0&&(k=ft),D.resetTextureUnits();const re=k.fog,ge=X.isMeshStandardMaterial?k.environment:null,be=O===null?S.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Li,ye=(X.isMeshStandardMaterial?V:y).get(X.envMap||ge),Ne=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Be=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Se=!!W.morphAttributes.position,je=!!W.morphAttributes.normal,st=!!W.morphAttributes.color;let dt=On;X.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(dt=S.toneMapping);const Et=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,et=Et!==void 0?Et.length:0,Ae=De.get(X),Jt=x.state.lights;if(de===!0&&(Ee===!0||T!==E)){const Ot=T===E&&X.id===R;se.setState(X,T,Ot)}let tt=!1;X.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Jt.state.version||Ae.outputColorSpace!==be||B.isBatchedMesh&&Ae.batching===!1||!B.isBatchedMesh&&Ae.batching===!0||B.isBatchedMesh&&Ae.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ae.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ae.instancing===!1||!B.isInstancedMesh&&Ae.instancing===!0||B.isSkinnedMesh&&Ae.skinning===!1||!B.isSkinnedMesh&&Ae.skinning===!0||B.isInstancedMesh&&Ae.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ae.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ae.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ae.instancingMorph===!1&&B.morphTexture!==null||Ae.envMap!==ye||X.fog===!0&&Ae.fog!==re||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==se.numPlanes||Ae.numIntersection!==se.numIntersection)||Ae.vertexAlphas!==Ne||Ae.vertexTangents!==Be||Ae.morphTargets!==Se||Ae.morphNormals!==je||Ae.morphColors!==st||Ae.toneMapping!==dt||Ae.morphTargetsCount!==et)&&(tt=!0):(tt=!0,Ae.__version=X.version);let Ht=Ae.currentProgram;tt===!0&&(Ht=ri(X,k,B));let Tn=!1,Dt=!1,kn=!1;const lt=Ht.getUniforms(),qt=Ae.uniforms;if(Ie.useProgram(Ht.program)&&(Tn=!0,Dt=!0,kn=!0),X.id!==R&&(R=X.id,Dt=!0),Tn||E!==T){Ie.buffers.depth.getReversed()?(fe.copy(T.projectionMatrix),gh(fe),xh(fe),lt.setValue(G,"projectionMatrix",fe)):lt.setValue(G,"projectionMatrix",T.projectionMatrix),lt.setValue(G,"viewMatrix",T.matrixWorldInverse);const an=lt.map.cameraPosition;an!==void 0&&an.setValue(G,Oe.setFromMatrixPosition(T.matrixWorld)),Ke.logarithmicDepthBuffer&&lt.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&lt.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,Dt=!0,kn=!0)}if(B.isSkinnedMesh){lt.setOptional(G,B,"bindMatrix"),lt.setOptional(G,B,"bindMatrixInverse");const Ot=B.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),lt.setValue(G,"boneTexture",Ot.boneTexture,D))}B.isBatchedMesh&&(lt.setOptional(G,B,"batchingTexture"),lt.setValue(G,"batchingTexture",B._matricesTexture,D),lt.setOptional(G,B,"batchingIdTexture"),lt.setValue(G,"batchingIdTexture",B._indirectTexture,D),lt.setOptional(G,B,"batchingColorTexture"),B._colorsTexture!==null&&lt.setValue(G,"batchingColorTexture",B._colorsTexture,D));const Bn=W.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&Ue.update(B,W,Ht),(Dt||Ae.receiveShadow!==B.receiveShadow)&&(Ae.receiveShadow=B.receiveShadow,lt.setValue(G,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(qt.envMap.value=ye,qt.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&k.environment!==null&&(qt.envMapIntensity.value=k.environmentIntensity),Dt&&(lt.setValue(G,"toneMappingExposure",S.toneMappingExposure),Ae.needsLights&&ss(qt,kn),re&&X.fog===!0&&pe.refreshFogUniforms(qt,re),pe.refreshMaterialUniforms(qt,X,J,ce,x.state.transmissionRenderTarget[T.id]),Ja.upload(G,pa(Ae),qt,D)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ja.upload(G,pa(Ae),qt,D),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&lt.setValue(G,"center",B.center),lt.setValue(G,"modelViewMatrix",B.modelViewMatrix),lt.setValue(G,"normalMatrix",B.normalMatrix),lt.setValue(G,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Ot=X.uniformsGroups;for(let an=0,sn=Ot.length;an<sn;an++){const ga=Ot[an];F.update(ga,Ht),F.bind(ga,Ht)}}return Ht}function ss(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function rs(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(T,k,W){De.get(T.texture).__webglTexture=k,De.get(T.depthTexture).__webglTexture=W;const X=De.get(T);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,k){const W=De.get(T);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,W=0){O=T,L=k,U=W;let X=!0,B=null,re=!1,ge=!1;if(T){const ye=De.get(T);if(ye.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(G.FRAMEBUFFER,null),X=!1;else if(ye.__webglFramebuffer===void 0)D.setupRenderTarget(T);else if(ye.__hasExternalTextures)D.rebindTextures(T,De.get(T.texture).__webglTexture,De.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Se=T.depthTexture;if(ye.__boundDepthTexture!==Se){if(Se!==null&&De.has(Se)&&(T.width!==Se.image.width||T.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(T)}}const Ne=T.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(ge=!0);const Be=De.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Be[k])?B=Be[k][W]:B=Be[k],re=!0):T.samples>0&&D.useMultisampledRTT(T)===!1?B=De.get(T).__webglMultisampledFramebuffer:Array.isArray(Be)?B=Be[W]:B=Be,N.copy(T.viewport),Y.copy(T.scissor),q=T.scissorTest}else N.copy(Re).multiplyScalar(J).floor(),Y.copy(Xe).multiplyScalar(J).floor(),q=it;if(Ie.bindFramebuffer(G.FRAMEBUFFER,B)&&X&&Ie.drawBuffers(T,B),Ie.viewport(N),Ie.scissor(Y),Ie.setScissorTest(q),re){const ye=De.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+k,ye.__webglTexture,W)}else if(ge){const ye=De.get(T.texture),Ne=k||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,ye.__webglTexture,W||0,Ne)}R=-1},this.readRenderTargetPixels=function(T,k,W,X,B,re,ge){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=De.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ge!==void 0&&(be=be[ge]),be){Ie.bindFramebuffer(G.FRAMEBUFFER,be);try{const ye=T.texture,Ne=ye.format,Be=ye.type;if(!Ke.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-X&&W>=0&&W<=T.height-B&&G.readPixels(k,W,X,B,He.convert(Ne),He.convert(Be),re)}finally{const ye=O!==null?De.get(O).__webglFramebuffer:null;Ie.bindFramebuffer(G.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(T,k,W,X,B,re,ge){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=De.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ge!==void 0&&(be=be[ge]),be){const ye=T.texture,Ne=ye.format,Be=ye.type;if(!Ke.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=T.width-X&&W>=0&&W<=T.height-B){Ie.bindFramebuffer(G.FRAMEBUFFER,be);const Se=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Se),G.bufferData(G.PIXEL_PACK_BUFFER,re.byteLength,G.STREAM_READ),G.readPixels(k,W,X,B,He.convert(Ne),He.convert(Be),0);const je=O!==null?De.get(O).__webglFramebuffer:null;Ie.bindFramebuffer(G.FRAMEBUFFER,je);const st=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await mh(G,st,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Se),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,re),G.deleteBuffer(Se),G.deleteSync(st),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,k=null,W=0){T.isTexture!==!0&&(Qi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,T=arguments[1]);const X=Math.pow(2,-W),B=Math.floor(T.image.width*X),re=Math.floor(T.image.height*X),ge=k!==null?k.x:0,be=k!==null?k.y:0;D.setTexture2D(T,0),G.copyTexSubImage2D(G.TEXTURE_2D,W,0,0,ge,be,B,re),Ie.unbindTexture()},this.copyTextureToTexture=function(T,k,W=null,X=null,B=0){T.isTexture!==!0&&(Qi("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,T=arguments[1],k=arguments[2],B=arguments[3]||0,W=null);let re,ge,be,ye,Ne,Be,Se,je,st;const dt=T.isCompressedTexture?T.mipmaps[B]:T.image;W!==null?(re=W.max.x-W.min.x,ge=W.max.y-W.min.y,be=W.isBox3?W.max.z-W.min.z:1,ye=W.min.x,Ne=W.min.y,Be=W.isBox3?W.min.z:0):(re=dt.width,ge=dt.height,be=dt.depth||1,ye=0,Ne=0,Be=0),X!==null?(Se=X.x,je=X.y,st=X.z):(Se=0,je=0,st=0);const Et=He.convert(k.format),et=He.convert(k.type);let Ae;k.isData3DTexture?(D.setTexture3D(k,0),Ae=G.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(D.setTexture2DArray(k,0),Ae=G.TEXTURE_2D_ARRAY):(D.setTexture2D(k,0),Ae=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,k.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,k.unpackAlignment);const Jt=G.getParameter(G.UNPACK_ROW_LENGTH),tt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Ht=G.getParameter(G.UNPACK_SKIP_PIXELS),Tn=G.getParameter(G.UNPACK_SKIP_ROWS),Dt=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,dt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,dt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ye),G.pixelStorei(G.UNPACK_SKIP_ROWS,Ne),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Be);const kn=T.isDataArrayTexture||T.isData3DTexture,lt=k.isDataArrayTexture||k.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const qt=De.get(T),Bn=De.get(k),Ot=De.get(qt.__renderTarget),an=De.get(Bn.__renderTarget);Ie.bindFramebuffer(G.READ_FRAMEBUFFER,Ot.__webglFramebuffer),Ie.bindFramebuffer(G.DRAW_FRAMEBUFFER,an.__webglFramebuffer);for(let sn=0;sn<be;sn++)kn&&G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,De.get(T).__webglTexture,B,Be+sn),T.isDepthTexture?(lt&&G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,De.get(k).__webglTexture,B,st+sn),G.blitFramebuffer(ye,Ne,re,ge,Se,je,re,ge,G.DEPTH_BUFFER_BIT,G.NEAREST)):lt?G.copyTexSubImage3D(Ae,B,Se,je,st+sn,ye,Ne,re,ge):G.copyTexSubImage2D(Ae,B,Se,je,st+sn,ye,Ne,re,ge);Ie.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else lt?T.isDataTexture||T.isData3DTexture?G.texSubImage3D(Ae,B,Se,je,st,re,ge,be,Et,et,dt.data):k.isCompressedArrayTexture?G.compressedTexSubImage3D(Ae,B,Se,je,st,re,ge,be,Et,dt.data):G.texSubImage3D(Ae,B,Se,je,st,re,ge,be,Et,et,dt):T.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,B,Se,je,re,ge,Et,et,dt.data):T.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,B,Se,je,dt.width,dt.height,Et,dt.data):G.texSubImage2D(G.TEXTURE_2D,B,Se,je,re,ge,Et,et,dt);G.pixelStorei(G.UNPACK_ROW_LENGTH,Jt),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,tt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ht),G.pixelStorei(G.UNPACK_SKIP_ROWS,Tn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Dt),B===0&&k.generateMipmaps&&G.generateMipmap(Ae),Ie.unbindTexture()},this.copyTextureToTexture3D=function(T,k,W=null,X=null,B=0){return T.isTexture!==!0&&(Qi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,T=arguments[2],k=arguments[3],B=arguments[4]||0),Qi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,k,W,X,B)},this.initRenderTarget=function(T){De.get(T).__webglFramebuffer===void 0&&D.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?D.setTextureCube(T,0):T.isData3DTexture?D.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?D.setTexture2DArray(T,0):D.setTexture2D(T,0),Ie.unbindTexture()},this.resetState=function(){L=0,U=0,O=null,Ie.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}class Hr{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new We(e),this.density=t}clone(){return new Hr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Rp extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Cp extends Ct{constructor(e=null,t=1,i=1,a,s,o,d,u,l=Wt,h=Wt,m,p){super(null,o,d,u,l,h,a,s,m,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yo extends Xt{constructor(e,t,i,a=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Mi=new ht,Ko=new ht,Fa=[],Jo=new ni,Pp=new ht,Ji=new ot,Zi=new Ni;class Dp extends ot{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Yo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<i;a++)this.setMatrixAt(a,Pp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ni),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Mi),Jo.copy(e.boundingBox).applyMatrix4(Mi),this.boundingBox.union(Jo)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ni),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Mi),Zi.copy(e.boundingSphere).applyMatrix4(Mi),this.boundingSphere.union(Zi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,a=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let d=0;d<i.length;d++)i[d]=a[o+d]}raycast(e,t){const i=this.matrixWorld,a=this.count;if(Ji.geometry=this.geometry,Ji.material=this.material,Ji.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zi.copy(this.boundingSphere),Zi.applyMatrix4(i),e.ray.intersectsSphere(Zi)!==!1))for(let s=0;s<a;s++){this.getMatrixAt(s,Mi),Ko.multiplyMatrices(i,Mi),Ji.matrixWorld=Ko,Ji.raycast(e,Fa);for(let o=0,d=Fa.length;o<d;o++){const u=Fa[o];u.instanceId=s,u.object=this,t.push(u)}Fa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Yo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,a=i.length+1;this.morphTexture===null&&(this.morphTexture=new Cp(new Float32Array(a*this.count),a,this.count,Lr,hn));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const d=this.geometry.morphTargetsRelative?1:1-o,u=a*e;s[u]=d,s.set(i,u+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Bc extends Oi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Zo=new ht,Rr=new Ec,ka=new Ni,Ba=new v;class Ip extends vt{constructor(e=new Ut,t=new Bc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ka.copy(i.boundingSphere),ka.applyMatrix4(a),ka.radius+=s,e.ray.intersectsSphere(ka)===!1)return;Zo.copy(a).invert(),Rr.copy(e.ray).applyMatrix4(Zo);const d=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=d*d,l=i.index,m=i.attributes.position;if(l!==null){const p=Math.max(0,o.start),g=Math.min(l.count,o.start+o.count);for(let M=p,b=g;M<b;M++){const w=l.getX(M);Ba.fromBufferAttribute(m,w),$o(Ba,w,u,a,e,t,this)}}else{const p=Math.max(0,o.start),g=Math.min(m.count,o.start+o.count);for(let M=p,b=g;M<b;M++)Ba.fromBufferAttribute(m,M),$o(Ba,M,u,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=a.length;s<o;s++){const d=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=s}}}}}function $o(n,e,t,i,a,s,o){const d=Rr.distanceSqToPoint(n);if(d<t){const u=new v;Rr.closestPointToPoint(n,u),u.applyMatrix4(i);const l=a.ray.origin.distanceTo(u);if(l<a.near||l>a.far)return;s.push({distance:l,distanceToRay:Math.sqrt(d),point:u,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class zp extends Ct{constructor(e,t,i,a,s,o,d,u,l){super(e,t,i,a,s,o,d,u,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class En{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,a=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(a),t.push(s),a=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let a=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let d=0,u=s-1,l;for(;d<=u;)if(a=Math.floor(d+(u-d)/2),l=i[a]-o,l<0)d=a+1;else if(l>0)u=a-1;else{u=a;break}if(a=u,i[a]===o)return a/(s-1);const h=i[a],p=i[a+1]-h,g=(o-h)/p;return(a+g)/(s-1)}getTangent(e,t){let a=e-1e-4,s=e+1e-4;a<0&&(a=0),s>1&&(s=1);const o=this.getPoint(a),d=this.getPoint(s),u=t||(o.isVector2?new Pe:new v);return u.copy(d).sub(o).normalize(),u}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new v,a=[],s=[],o=[],d=new v,u=new ht;for(let g=0;g<=e;g++){const M=g/e;a[g]=this.getTangentAt(M,new v)}s[0]=new v,o[0]=new v;let l=Number.MAX_VALUE;const h=Math.abs(a[0].x),m=Math.abs(a[0].y),p=Math.abs(a[0].z);h<=l&&(l=h,i.set(1,0,0)),m<=l&&(l=m,i.set(0,1,0)),p<=l&&i.set(0,0,1),d.crossVectors(a[0],i).normalize(),s[0].crossVectors(a[0],d),o[0].crossVectors(a[0],s[0]);for(let g=1;g<=e;g++){if(s[g]=s[g-1].clone(),o[g]=o[g-1].clone(),d.crossVectors(a[g-1],a[g]),d.length()>Number.EPSILON){d.normalize();const M=Math.acos(Rt(a[g-1].dot(a[g]),-1,1));s[g].applyMatrix4(u.makeRotationAxis(d,M))}o[g].crossVectors(a[g],s[g])}if(t===!0){let g=Math.acos(Rt(s[0].dot(s[e]),-1,1));g/=e,a[0].dot(d.crossVectors(s[0],s[e]))>0&&(g=-g);for(let M=1;M<=e;M++)s[M].applyMatrix4(u.makeRotationAxis(a[M],g*M)),o[M].crossVectors(a[M],s[M])}return{tangents:a,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Hc extends En{constructor(e=0,t=0,i=1,a=1,s=0,o=Math.PI*2,d=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=a,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=d,this.aRotation=u}getPoint(e,t=new Pe){const i=t,a=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=a;for(;s>a;)s-=a;s<Number.EPSILON&&(o?s=0:s=a),this.aClockwise===!0&&!o&&(s===a?s=-a:s=s-a);const d=this.aStartAngle+e*s;let u=this.aX+this.xRadius*Math.cos(d),l=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const h=Math.cos(this.aRotation),m=Math.sin(this.aRotation),p=u-this.aX,g=l-this.aY;u=p*h-g*m+this.aX,l=p*m+g*h+this.aY}return i.set(u,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Lp extends Hc{constructor(e,t,i,a,s,o){super(e,t,i,i,a,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Gr(){let n=0,e=0,t=0,i=0;function a(s,o,d,u){n=s,e=d,t=-3*s+3*o-2*d-u,i=2*s-2*o+d+u}return{initCatmullRom:function(s,o,d,u,l){a(o,d,l*(d-s),l*(u-o))},initNonuniformCatmullRom:function(s,o,d,u,l,h,m){let p=(o-s)/l-(d-s)/(l+h)+(d-o)/h,g=(d-o)/h-(u-o)/(h+m)+(u-d)/m;p*=h,g*=h,a(o,d,p,g)},calc:function(s){const o=s*s,d=o*s;return n+e*s+t*o+i*d}}}const Ha=new v,Os=new Gr,Fs=new Gr,ks=new Gr;class Bi extends En{constructor(e=[],t=!1,i="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=a}getPoint(e,t=new v){const i=t,a=this.points,s=a.length,o=(s-(this.closed?0:1))*e;let d=Math.floor(o),u=o-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/s)+1)*s:u===0&&d===s-1&&(d=s-2,u=1);let l,h;this.closed||d>0?l=a[(d-1)%s]:(Ha.subVectors(a[0],a[1]).add(a[0]),l=Ha);const m=a[d%s],p=a[(d+1)%s];if(this.closed||d+2<s?h=a[(d+2)%s]:(Ha.subVectors(a[s-1],a[s-2]).add(a[s-1]),h=Ha),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let M=Math.pow(l.distanceToSquared(m),g),b=Math.pow(m.distanceToSquared(p),g),w=Math.pow(p.distanceToSquared(h),g);b<1e-4&&(b=1),M<1e-4&&(M=b),w<1e-4&&(w=b),Os.initNonuniformCatmullRom(l.x,m.x,p.x,h.x,M,b,w),Fs.initNonuniformCatmullRom(l.y,m.y,p.y,h.y,M,b,w),ks.initNonuniformCatmullRom(l.z,m.z,p.z,h.z,M,b,w)}else this.curveType==="catmullrom"&&(Os.initCatmullRom(l.x,m.x,p.x,h.x,this.tension),Fs.initCatmullRom(l.y,m.y,p.y,h.y,this.tension),ks.initCatmullRom(l.z,m.z,p.z,h.z,this.tension));return i.set(Os.calc(u),Fs.calc(u),ks.calc(u)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new v().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function jo(n,e,t,i,a){const s=(i-e)*.5,o=(a-t)*.5,d=n*n,u=n*d;return(2*t-2*i+s+o)*u+(-3*t+3*i-2*s-o)*d+s*n+t}function Up(n,e){const t=1-n;return t*t*e}function Np(n,e){return 2*(1-n)*n*e}function Op(n,e){return n*n*e}function ta(n,e,t,i){return Up(n,e)+Np(n,t)+Op(n,i)}function Fp(n,e){const t=1-n;return t*t*t*e}function kp(n,e){const t=1-n;return 3*t*t*n*e}function Bp(n,e){return 3*(1-n)*n*n*e}function Hp(n,e){return n*n*n*e}function na(n,e,t,i,a){return Fp(n,e)+kp(n,t)+Bp(n,i)+Hp(n,a)}class Gp extends En{constructor(e=new Pe,t=new Pe,i=new Pe,a=new Pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new Pe){const i=t,a=this.v0,s=this.v1,o=this.v2,d=this.v3;return i.set(na(e,a.x,s.x,o.x,d.x),na(e,a.y,s.y,o.y,d.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Vp extends En{constructor(e=new v,t=new v,i=new v,a=new v){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new v){const i=t,a=this.v0,s=this.v1,o=this.v2,d=this.v3;return i.set(na(e,a.x,s.x,o.x,d.x),na(e,a.y,s.y,o.y,d.y),na(e,a.z,s.z,o.z,d.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Wp extends En{constructor(e=new Pe,t=new Pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Pe){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xp extends En{constructor(e=new v,t=new v){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new v){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new v){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qp extends En{constructor(e=new Pe,t=new Pe,i=new Pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Pe){const i=t,a=this.v0,s=this.v1,o=this.v2;return i.set(ta(e,a.x,s.x,o.x),ta(e,a.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gc extends En{constructor(e=new v,t=new v,i=new v){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new v){const i=t,a=this.v0,s=this.v1,o=this.v2;return i.set(ta(e,a.x,s.x,o.x),ta(e,a.y,s.y,o.y),ta(e,a.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yp extends En{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Pe){const i=t,a=this.points,s=(a.length-1)*e,o=Math.floor(s),d=s-o,u=a[o===0?o:o-1],l=a[o],h=a[o>a.length-2?a.length-1:o+1],m=a[o>a.length-3?a.length-1:o+2];return i.set(jo(d,u.x,l.x,h.x,m.x),jo(d,u.y,l.y,h.y,m.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new Pe().fromArray(a))}return this}}var Kp=Object.freeze({__proto__:null,ArcCurve:Lp,CatmullRomCurve3:Bi,CubicBezierCurve:Gp,CubicBezierCurve3:Vp,EllipseCurve:Hc,LineCurve:Wp,LineCurve3:Xp,QuadraticBezierCurve:qp,QuadraticBezierCurve3:Gc,SplineCurve:Yp});class z extends Ut{constructor(e=1,t=1,i=1,a=32,s=1,o=!1,d=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:a,heightSegments:s,openEnded:o,thetaStart:d,thetaLength:u};const l=this;a=Math.floor(a),s=Math.floor(s);const h=[],m=[],p=[],g=[];let M=0;const b=[],w=i/2;let x=0;P(),o===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(h),this.setAttribute("position",new pt(m,3)),this.setAttribute("normal",new pt(p,3)),this.setAttribute("uv",new pt(g,2));function P(){const S=new v,H=new v;let L=0;const U=(t-e)/i;for(let O=0;O<=s;O++){const R=[],E=O/s,N=E*(t-e)+e;for(let Y=0;Y<=a;Y++){const q=Y/a,$=q*u+d,ie=Math.sin($),j=Math.cos($);H.x=N*ie,H.y=-E*i+w,H.z=N*j,m.push(H.x,H.y,H.z),S.set(ie,U,j).normalize(),p.push(S.x,S.y,S.z),g.push(q,1-E),R.push(M++)}b.push(R)}for(let O=0;O<a;O++)for(let R=0;R<s;R++){const E=b[R][O],N=b[R+1][O],Y=b[R+1][O+1],q=b[R][O+1];(e>0||R!==0)&&(h.push(E,N,q),L+=3),(t>0||R!==s-1)&&(h.push(N,Y,q),L+=3)}l.addGroup(x,L,0),x+=L}function C(S){const H=M,L=new Pe,U=new v;let O=0;const R=S===!0?e:t,E=S===!0?1:-1;for(let Y=1;Y<=a;Y++)m.push(0,w*E,0),p.push(0,E,0),g.push(.5,.5),M++;const N=M;for(let Y=0;Y<=a;Y++){const $=Y/a*u+d,ie=Math.cos($),j=Math.sin($);U.x=R*j,U.y=w*E,U.z=R*ie,m.push(U.x,U.y,U.z),p.push(0,E,0),L.x=ie*.5+.5,L.y=j*.5*E+.5,g.push(L.x,L.y),M++}for(let Y=0;Y<a;Y++){const q=H+Y,$=N+Y;S===!0?h.push($,$+1,q):h.push($+1,$,q),O+=3}l.addGroup(x,O,S===!0?1:2),x+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new z(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ii extends z{constructor(e=1,t=1,i=32,a=1,s=!1,o=0,d=Math.PI*2){super(0,e,t,i,a,s,o,d),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:d}}static fromJSON(e){return new ii(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ca extends Ut{constructor(e=[],t=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:a};const s=[],o=[];d(a),l(i),h(),this.setAttribute("position",new pt(s,3)),this.setAttribute("normal",new pt(s.slice(),3)),this.setAttribute("uv",new pt(o,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function d(P){const C=new v,S=new v,H=new v;for(let L=0;L<t.length;L+=3)g(t[L+0],C),g(t[L+1],S),g(t[L+2],H),u(C,S,H,P)}function u(P,C,S,H){const L=H+1,U=[];for(let O=0;O<=L;O++){U[O]=[];const R=P.clone().lerp(S,O/L),E=C.clone().lerp(S,O/L),N=L-O;for(let Y=0;Y<=N;Y++)Y===0&&O===L?U[O][Y]=R:U[O][Y]=R.clone().lerp(E,Y/N)}for(let O=0;O<L;O++)for(let R=0;R<2*(L-O)-1;R++){const E=Math.floor(R/2);R%2===0?(p(U[O][E+1]),p(U[O+1][E]),p(U[O][E])):(p(U[O][E+1]),p(U[O+1][E+1]),p(U[O+1][E]))}}function l(P){const C=new v;for(let S=0;S<s.length;S+=3)C.x=s[S+0],C.y=s[S+1],C.z=s[S+2],C.normalize().multiplyScalar(P),s[S+0]=C.x,s[S+1]=C.y,s[S+2]=C.z}function h(){const P=new v;for(let C=0;C<s.length;C+=3){P.x=s[C+0],P.y=s[C+1],P.z=s[C+2];const S=w(P)/2/Math.PI+.5,H=x(P)/Math.PI+.5;o.push(S,1-H)}M(),m()}function m(){for(let P=0;P<o.length;P+=6){const C=o[P+0],S=o[P+2],H=o[P+4],L=Math.max(C,S,H),U=Math.min(C,S,H);L>.9&&U<.1&&(C<.2&&(o[P+0]+=1),S<.2&&(o[P+2]+=1),H<.2&&(o[P+4]+=1))}}function p(P){s.push(P.x,P.y,P.z)}function g(P,C){const S=P*3;C.x=e[S+0],C.y=e[S+1],C.z=e[S+2]}function M(){const P=new v,C=new v,S=new v,H=new v,L=new Pe,U=new Pe,O=new Pe;for(let R=0,E=0;R<s.length;R+=9,E+=6){P.set(s[R+0],s[R+1],s[R+2]),C.set(s[R+3],s[R+4],s[R+5]),S.set(s[R+6],s[R+7],s[R+8]),L.set(o[E+0],o[E+1]),U.set(o[E+2],o[E+3]),O.set(o[E+4],o[E+5]),H.copy(P).add(C).add(S).divideScalar(3);const N=w(H);b(L,E+0,P,N),b(U,E+2,C,N),b(O,E+4,S,N)}}function b(P,C,S,H){H<0&&P.x===1&&(o[C]=P.x-1),S.x===0&&S.z===0&&(o[C]=H/2/Math.PI+.5)}function w(P){return Math.atan2(P.z,-P.x)}function x(P){return Math.atan2(-P.y,Math.sqrt(P.x*P.x+P.z*P.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ca(e.vertices,e.indices,e.radius,e.details)}}class ut extends ca{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,a=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-i,0,-a,i,0,a,-i,0,a,i,-a,-i,0,-a,i,0,a,-i,0,a,i,0,-i,0,-a,i,0,-a,-i,0,a,i,0,a],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ut(e.radius,e.detail)}}class Vr extends ca{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,a=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Vr(e.radius,e.detail)}}class Wr extends ca{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,a,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Wr(e.radius,e.detail)}}class aa extends Ut{constructor(e=.5,t=1,i=32,a=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:a,thetaStart:s,thetaLength:o},i=Math.max(3,i),a=Math.max(1,a);const d=[],u=[],l=[],h=[];let m=e;const p=(t-e)/a,g=new v,M=new Pe;for(let b=0;b<=a;b++){for(let w=0;w<=i;w++){const x=s+w/i*o;g.x=m*Math.cos(x),g.y=m*Math.sin(x),u.push(g.x,g.y,g.z),l.push(0,0,1),M.x=(g.x/t+1)/2,M.y=(g.y/t+1)/2,h.push(M.x,M.y)}m+=p}for(let b=0;b<a;b++){const w=b*(i+1);for(let x=0;x<i;x++){const P=x+w,C=P,S=P+i+1,H=P+i+2,L=P+1;d.push(C,S,L),d.push(S,H,L)}}this.setIndex(d),this.setAttribute("position",new pt(u,3)),this.setAttribute("normal",new pt(l,3)),this.setAttribute("uv",new pt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new aa(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class wt extends Ut{constructor(e=1,t=32,i=16,a=0,s=Math.PI*2,o=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:s,thetaStart:o,thetaLength:d},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const u=Math.min(o+d,Math.PI);let l=0;const h=[],m=new v,p=new v,g=[],M=[],b=[],w=[];for(let x=0;x<=i;x++){const P=[],C=x/i;let S=0;x===0&&o===0?S=.5/t:x===i&&u===Math.PI&&(S=-.5/t);for(let H=0;H<=t;H++){const L=H/t;m.x=-e*Math.cos(a+L*s)*Math.sin(o+C*d),m.y=e*Math.cos(o+C*d),m.z=e*Math.sin(a+L*s)*Math.sin(o+C*d),M.push(m.x,m.y,m.z),p.copy(m).normalize(),b.push(p.x,p.y,p.z),w.push(L+S,1-C),P.push(l++)}h.push(P)}for(let x=0;x<i;x++)for(let P=0;P<t;P++){const C=h[x][P+1],S=h[x][P],H=h[x+1][P],L=h[x+1][P+1];(x!==0||o>0)&&g.push(C,S,L),(x!==i-1||u<Math.PI)&&g.push(S,H,L)}this.setIndex(g),this.setAttribute("position",new pt(M,3)),this.setAttribute("normal",new pt(b,3)),this.setAttribute("uv",new pt(w,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ce extends Ut{constructor(e=1,t=.4,i=12,a=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:a,arc:s},i=Math.floor(i),a=Math.floor(a);const o=[],d=[],u=[],l=[],h=new v,m=new v,p=new v;for(let g=0;g<=i;g++)for(let M=0;M<=a;M++){const b=M/a*s,w=g/i*Math.PI*2;m.x=(e+t*Math.cos(w))*Math.cos(b),m.y=(e+t*Math.cos(w))*Math.sin(b),m.z=t*Math.sin(w),d.push(m.x,m.y,m.z),h.x=e*Math.cos(b),h.y=e*Math.sin(b),p.subVectors(m,h).normalize(),u.push(p.x,p.y,p.z),l.push(M/a),l.push(g/i)}for(let g=1;g<=i;g++)for(let M=1;M<=a;M++){const b=(a+1)*g+M-1,w=(a+1)*(g-1)+M-1,x=(a+1)*(g-1)+M,P=(a+1)*g+M;o.push(b,w,P),o.push(w,x,P)}this.setIndex(o),this.setAttribute("position",new pt(d,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ce(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ai extends Ut{constructor(e=new Gc(new v(-1,-1,0),new v(-1,1,0),new v(1,1,0)),t=64,i=1,a=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:a,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const d=new v,u=new v,l=new Pe;let h=new v;const m=[],p=[],g=[],M=[];b(),this.setIndex(M),this.setAttribute("position",new pt(m,3)),this.setAttribute("normal",new pt(p,3)),this.setAttribute("uv",new pt(g,2));function b(){for(let C=0;C<t;C++)w(C);w(s===!1?t:0),P(),x()}function w(C){h=e.getPointAt(C/t,h);const S=o.normals[C],H=o.binormals[C];for(let L=0;L<=a;L++){const U=L/a*Math.PI*2,O=Math.sin(U),R=-Math.cos(U);u.x=R*S.x+O*H.x,u.y=R*S.y+O*H.y,u.z=R*S.z+O*H.z,u.normalize(),p.push(u.x,u.y,u.z),d.x=h.x+i*u.x,d.y=h.y+i*u.y,d.z=h.z+i*u.z,m.push(d.x,d.y,d.z)}}function x(){for(let C=1;C<=t;C++)for(let S=1;S<=a;S++){const H=(a+1)*(C-1)+(S-1),L=(a+1)*C+(S-1),U=(a+1)*C+S,O=(a+1)*(C-1)+S;M.push(H,L,O),M.push(L,U,O)}}function P(){for(let C=0;C<=t;C++)for(let S=0;S<=a;S++)l.x=C/t,l.y=S/a,g.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ai(new Kp[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Fe extends Oi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vc,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xr extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Jp extends Xr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Bs=new ht,Qo=new v,ec=new v;class Zp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kr,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Qo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qo),ec.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ec),t.updateMatrixWorld(),Bs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bs),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Bs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class $p extends Zp{constructor(){super(new Lc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jp extends Xr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new $p}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Qp extends Xr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class F4{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=tc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=tc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function tc(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pr);function Ga(n,e){const t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function qr(n,e){const t=Math.floor(n),i=Math.floor(e),a=n-t,s=e-i,o=a*a*(3-2*a),d=s*s*(3-2*s),u=Ga(t,i),l=Ga(t+1,i),h=Ga(t,i+1),m=Ga(t+1,i+1);return u+(l-u)*o+(h-u)*d+(u-l-h+m)*o*d}function nc(n,e,t=4){let i=0,a=.5,s=1;for(let o=0;o<t;o++)i+=qr(n*s,e*s)*a,s*=2,a*=.5;return i}function Qa(n,e,t){const i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)}function e2(n,e,t){return n+(e-n)*t}const es=640,ic=180,t2=[[180,-90,46,8],[-210,150,30,5.5],[95,230,18,3.2],[-70,-250,36,6],[250,80,14,2.4],[-160,-40,12,2]];function n2(n,e,t,i,a,s){const o=n-t,d=e-i,u=Math.sqrt(o*o+d*d);if(u>a)return 0;const l=u/a,h=-s*(1-l*l),m=s*.28*Math.exp(-((l-.86)*(l-.86))/.018);return h+m}const i2=[[0,0,48,100],[52,24,18,36],[22,82,14,28],[80,-44,40,60],[112,-83,18,30],[-32,-98,16,26],[-88,-188,24,42],[-68,-16,16,28],[22,-112,12,20],[-6,-108,18,32],[36,72,16,32],[-24,44,16,32],[-32,-148,12,22],[-64,-90,10,18],[-50,-100,16,28],[38,-126,12,20],[-60,-148,8,14],[-64,-118,8,14],[-18,-88,10,18],[68,-10,12,20],[-22,-88,8,14],[-48,68,16,32],[78,56,16,32],[-13,-134,16,28],[8,-142,12,20],[135,-40,20,34],[68,6,12,20],[-28,-138,8,14],[-36,-74,14,24],[2,-22,8,14],[-50,-72,10,16],[10,-124,12,20],[20,8,12,20],[-16,136,28,48],[158,-62,22,36],[158,-28,10,16],[-96,-16,16,26],[-78,-172,12,20],[66,-74,14,22],[18,-152,12,18],[-20,-100,10,16],[-8,-162,10,16],[8,-98,10,16],[48,-70,10,16],[-68,12,12,18],[22,-80,10,16],[52,-112,12,18],[-90,-158,10,16],[8,-78,10,16],[-8,-88,10,16],[-96,4,10,16],[142,-62,8,14],[28,-140,10,16],[-90,-148,8,14],[12,18,8,12],[36,8,10,16],[36,-6,10,16],[-50,4,10,16],[-58,-142,10,16],[-32,-22,10,16],[66,-90,10,16],[22,-98,10,16],[172,-48,10,16],[38,-104,10,16],[24,-128,8,14],[-80,20,10,16],[6,148,8,14],[-64,80,10,16],[-80,32,10,16],[100,-22,8,14],[-22,-56,10,16],[-124,-188,12,20],[-38,16,10,16],[70,-112,12,18],[16,48,8,14],[-58,-36,12,16],[50,4,10,18],[-40,-168,12,16],[82,-90,10,14],[4,-148,10,14],[148,-40,10,14],[124,-70,10,14],[96,-44,10,14],[-84,8,10,14],[16,-86,10,14],[135,-22,12,14],[100,-70,12,14],[82,-28,12,14],[-68,2,12,14],[122,-40,8,22],[98,-83,8,22],[70,-44,8,22],[-102,-158,10,14],[-18,-78,12,14],[-64,-184,12,16],[32,-152,10,12],[-96,16,16,10],[82,-74,16,14],[-78,-156,10,12],[-110,8,10,12],[-110,20,10,12],[-110,32,10,12],[-122,8,12,12],[-122,20,10,12],[-8,-98,12,12],[-22,-98,10,12],[8,-88,10,12],[-78,-36,12,12],[96,-90,10,12],[-5,-78,8,10],[16,-148,10,12],[-90,-136,10,12],[16,-74,8,10],[-48,-138,12,14],[52,-126,12,12],[70,-126,10,12],[0,-68,8,10],[48,-70,8,10],[-46,-148,8,10],[-38,16,8,10],[38,-104,8,10],[172,-48,8,10],[-16,36,8,10],[4,-138,8,10],[68,6,8,10],[66,-104,12,10],[80,-104,8,8],[18,136,10,8],[22,-98,8,8],[172,-62,10,10],[-92,-184,10,10],[-32,-88,10,10],[96,-104,10,10],[-28,-8,8,8],[-28,6,8,8],[-46,-88,10,10],[-50,-22,10,10],[-80,20,10,10],[-38,28,10,10],[-46,-132,10,10],[24,-118,10,10],[-110,-136,12,10],[-22,-110,10,10],[158,-48,12,10],[110,-90,10,10],[8,-110,10,10],[-70,-148,10,10],[96,-28,10,8],[124,-83,10,8],[148,-22,10,8],[46,-152,10,10],[32,136,10,10],[-8,-110,10,10],[110,-104,10,10],[70,-28,10,10],[136,-70,10,10],[122,-22,10,10],[-114,-158,10,10],[-32,-36,10,10],[-42,6,10,10],[28,-74,10,10],[80,-118,10,10],[38,-132,10,10],[46,136,10,10],[40,-140,10,10],[52,-90,10,10],[-124,-136,10,10],[28,-162,10,10],[46,148,10,10],[96,-118,10,10],[-102,-148,10,10],[110,-118,10,10],[-18,-36,10,10],[-42,-8,10,10],[8,-68,10,10],[8,-162,10,10],[40,-74,10,10],[-70,-136,10,10],[124,-90,10,10],[52,-140,10,10],[16,-136,10,10],[124,-104,10,10],[-92,-172,10,10],[36,-128,10,10],[-58,-88,10,10],[36,36,10,10],[22,-110,10,10],[108,-44,10,10],[-64,-172,10,10],[124,-118,10,10],[136,-83,10,10],[160,-40,10,10],[184,-62,10,10],[36,48,10,10],[-36,-110,10,10],[22,36,10,10],[-8,-76,10,10],[70,-140,14,10],[8,36,10,8],[28,-148,10,10],[-58,-76,10,10],[-114,-148,10,10],[68,18,16,10],[-122,-4,12,10],[-84,-4,10,10],[-80,44,10,10],[-80,56,10,10],[-28,-180,10,12],[-52,-196,10,12],[138,-118,10,10],[8,-56,10,10],[-68,-10,12,10],[-54,24,16,8],[-58,-48,12,10],[-38,40,10,10],[138,-132,10,10],[52,-74,10,8],[28,-86,10,8],[138,-146,10,10],[-70,-76,10,10],[-46,-100,10,10],[138,-160,10,10],[-8,-98,10,10],[-90,-124,10,10],[70,-152,10,10],[138,-174,10,10]];function A(n,e){let t=0;t+=(nc(n*.0038,e*.0038,5)-.45)*16,t+=(nc(n*.018,e*.018,3)-.5)*2.8,t+=(qr(n*.07,e*.07)-.5)*.45;for(const[i,a,s,o]of t2)t+=n2(n,e,i,a,s,o);for(const[i,a,s,o]of i2){const d=Qa(o,s,Math.hypot(n-i,e-a));t=e2(t,.35+t*.12,d)}return t}function a2(n,e,t,i){const a=new We(9059108),s=new We(12085818),o=new We(12880469),d=new We(4858904),u=Qa(-4,8,t),l=a.clone().lerp(s,u).lerp(o,Qa(6,14,t)*.35);i>.45&&l.lerp(d,Math.min(.55,(i-.45)*1.4));const h=qr(n*.11,e*.11);l.offsetHSL(0,(h-.5)*.08,(h-.5)*.06);const m=s2(n,e);return m>0&&l.lerp(new We(5911332),m*.85),l}function s2(n,e){const t=[{ax:0,az:18,bx:0,bz:-124},{ax:0,az:-40,bx:84,bz:-42},{ax:0,az:-40,bx:-68,bz:-16},{ax:0,az:-90,bx:-55,bz:-150},{ax:18,az:-70,bx:52,bz:-88},{ax:12,az:8,bx:50,bz:22},{ax:16,az:28,bx:22,bz:78},{ax:-58,az:-158,bx:-90,bz:-190},{ax:-14,az:-104,bx:-32,bz:-98},{ax:84,az:-42,bx:112,bz:-83},{ax:0,az:-108,bx:22,bz:-112},{ax:22,az:-112,bx:48,bz:-86},{ax:-6,az:-116,bx:-18,bz:-138},{ax:0,az:8,bx:-15,bz:-8},{ax:16,az:28,bx:36,bz:72},{ax:0,az:18,bx:-24,bz:44},{ax:-58,az:-158,bx:-64,bz:-90},{ax:-64,az:-90,bx:-68,bz:-16},{ax:-18,az:-138,bx:-32,bz:-148},{ax:-32,az:-98,bx:-46,bz:-100},{ax:22,az:-112,bx:38,bz:-126},{ax:-58,az:-158,bx:-60,bz:-148},{ax:-64,az:-118,bx:-18,bz:-88},{ax:84,az:-42,bx:68,bz:-10},{ax:-6,az:-108,bx:-18,bz:-88},{ax:0,az:18,bx:-48,bz:68},{ax:16,az:28,bx:78,bz:56},{ax:-6,az:-116,bx:-13,bz:-134},{ax:38,az:-126,bx:8,bz:-142},{ax:-13,az:-134,bx:8,bz:-142},{ax:112,az:-83,bx:135,bz:-40},{ax:68,az:-10,bx:68,bz:6},{ax:-13,az:-134,bx:-28,bz:-138},{ax:-46,az:-108,bx:-20,bz:-132},{ax:-6,az:-108,bx:-6,bz:-132},{ax:-6,az:-96,bx:2,bz:-22},{ax:-32,az:-98,bx:-36,bz:-74},{ax:-40,az:-76,bx:-32,bz:-98},{ax:-40,az:-76,bx:-50,bz:-72},{ax:-6,az:-132,bx:10,bz:-124},{ax:10,az:-124,bx:8,bz:-142},{ax:0,az:8,bx:20,bz:8},{ax:22,az:82,bx:-16,bz:136},{ax:0,az:32,bx:-16,bz:136},{ax:135,az:-40,bx:158,bz:-62},{ax:-68,az:-16,bx:-96,bz:-16},{ax:-58,az:-158,bx:-78,bz:-172},{ax:48,az:-86,bx:66,bz:-74},{ax:8,az:-142,bx:18,bz:-152},{ax:-32,az:-148,bx:-8,bz:-162},{ax:-6,az:-108,bx:8,bz:-98},{ax:22,az:-112,bx:8,bz:-98},{ax:48,az:-86,bx:48,bz:-70},{ax:-68,az:-16,bx:-68,bz:12},{ax:-36,az:-74,bx:22,bz:-80},{ax:48,az:-86,bx:22,bz:-80},{ax:22,az:-112,bx:52,bz:-112},{ax:38,az:-126,bx:52,bz:-112},{ax:-78,az:-172,bx:-90,bz:-158},{ax:8,az:-98,bx:8,bz:-78},{ax:22,az:-80,bx:8,bz:-78},{ax:8,az:-98,bx:-8,bz:-88},{ax:-22,az:-88,bx:-8,bz:-88},{ax:-96,az:-16,bx:-96,bz:4},{ax:158,az:-62,bx:142,bz:-62},{ax:8,az:-142,bx:28,bz:-140},{ax:18,az:-152,bx:28,bz:-140},{ax:-90,az:-158,bx:-90,bz:-148},{ax:5,az:16,bx:12,bz:18},{ax:20,az:8,bx:36,bz:8},{ax:36,az:8,bx:36,bz:-6},{ax:-68,az:4,bx:-50,bz:4},{ax:-58,az:-158,bx:-58,bz:-142},{ax:-15,az:-8,bx:-32,bz:-22},{ax:66,az:-74,bx:66,bz:-90},{ax:8,az:-98,bx:22,bz:-98},{ax:158,az:-62,bx:172,bz:-48},{ax:22,az:-112,bx:38,bz:-104},{ax:10,az:-124,bx:24,bz:-128},{ax:-68,az:12,bx:-80,bz:20},{ax:-16,az:136,bx:6,bz:148},{ax:-48,az:68,bx:-64,bz:80},{ax:-80,az:20,bx:-80,bz:32},{ax:135,az:-40,bx:100,bz:-22},{ax:100,az:-22,bx:68,bz:-10},{ax:-36,az:-74,bx:-22,bz:-56},{ax:-90,az:-158,bx:-124,bz:-188},{ax:-50,az:4,bx:-38,bz:16},{ax:52,az:-112,bx:70,bz:-112},{ax:22,az:82,bx:16,bz:48},{ax:-58,az:-142,bx:-58,bz:-36},{ax:-58,az:-36,bx:-68,bz:-16},{ax:36,az:8,bx:50,bz:4},{ax:-58,az:-158,bx:-40,bz:-168},{ax:66,az:-90,bx:82,bz:-90},{ax:-8,az:-162,bx:4,bz:-148},{ax:135,az:-40,bx:148,bz:-40},{ax:112,az:-83,bx:124,bz:-70},{ax:82,az:-44,bx:96,bz:-44},{ax:-68,az:12,bx:-84,bz:8},{ax:-8,az:-88,bx:16,bz:-86},{ax:135,az:-40,bx:135,bz:-22},{ax:124,az:-70,bx:100,bz:-70},{ax:82,az:-44,bx:82,bz:-28},{ax:-68,az:-16,bx:-68,bz:2},{ax:135,az:-40,bx:122,bz:-40},{ax:112,az:-83,bx:98,bz:-83},{ax:82,az:-44,bx:70,bz:-44},{ax:-90,az:-158,bx:-102,bz:-158},{ax:8,az:-78,bx:-18,bz:-78},{ax:-78,az:-172,bx:-64,bz:-184},{ax:18,az:-152,bx:32,bz:-152},{ax:-96,az:4,bx:-96,bz:16},{ax:66,az:-74,bx:82,bz:-74},{ax:-78,az:-172,bx:-78,bz:-156},{ax:-96,az:4,bx:-110,bz:8},{ax:-110,az:8,bx:-110,bz:20},{ax:-110,az:20,bx:-110,bz:32},{ax:-110,az:8,bx:-122,bz:8},{ax:-122,az:8,bx:-122,bz:20},{ax:8,az:-98,bx:-8,bz:-98},{ax:-8,az:-98,bx:-22,bz:-98},{ax:-8,az:-88,bx:8,bz:-88},{ax:-58,az:-36,bx:-78,bz:-36},{ax:82,az:-90,bx:96,bz:-90},{ax:8,az:-78,bx:-5,bz:-78},{ax:4,az:-148,bx:16,bz:-148},{ax:-90,az:-148,bx:-90,bz:-136},{ax:16,az:-86,bx:16,bz:-74},{ax:-32,az:-148,bx:-48,bz:-138},{ax:52,az:-112,bx:52,bz:-126},{ax:52,az:-126,bx:70,bz:-126},{ax:0,az:-68,bx:0,bz:-118},{ax:48,az:-70,bx:90,bz:-80},{ax:-46,az:-148,bx:-90,bz:-148},{ax:-38,az:16,bx:-68,bz:12},{ax:38,az:-104,bx:52,bz:-112},{ax:172,az:-48,bx:158,bz:-62},{ax:-16,az:36,bx:4,bz:32},{ax:4,az:-138,bx:-18,bz:-138},{ax:68,az:6,bx:50,bz:4},{ax:66,az:-90,bx:66,bz:-104},{ax:66,az:-104,bx:80,bz:-104},{ax:6,az:148,bx:18,bz:136},{ax:8,az:-98,bx:22,bz:-98},{ax:172,az:-48,bx:172,bz:-62},{ax:-64,az:-184,bx:-92,bz:-184},{ax:-18,az:-88,bx:-32,bz:-88},{ax:96,az:-90,bx:96,bz:-104},{ax:-15,az:-8,bx:-28,bz:-8},{ax:-28,az:-8,bx:-28,bz:6},{ax:-32,az:-88,bx:-46,bz:-88},{ax:-50,az:4,bx:-50,bz:-22},{ax:-68,az:12,bx:-80,bz:20},{ax:-38,az:16,bx:-38,bz:28},{ax:-58,az:-142,bx:-46,bz:-132},{ax:38,az:-104,bx:24,bz:-118},{ax:-90,az:-136,bx:-110,bz:-136},{ax:-32,az:-98,bx:-22,bz:-110},{ax:172,az:-62,bx:158,bz:-48},{ax:96,az:-90,bx:110,bz:-90},{ax:8,az:-98,bx:8,bz:-110},{ax:-46,az:-148,bx:-70,bz:-148},{ax:82,az:-28,bx:96,bz:-28},{ax:124,az:-70,bx:124,bz:-83},{ax:148,az:-40,bx:148,bz:-22},{ax:32,az:-152,bx:46,bz:-152},{ax:18,az:136,bx:32,bz:136},{ax:-8,az:-98,bx:-8,bz:-110},{ax:96,az:-104,bx:110,bz:-104},{ax:82,az:-28,bx:70,bz:-28},{ax:124,az:-70,bx:136,bz:-70},{ax:135,az:-22,bx:122,bz:-22},{ax:-102,az:-158,bx:-114,bz:-158},{ax:-32,az:-22,bx:-32,bz:-36},{ax:-28,az:6,bx:-42,bz:6},{ax:16,az:-74,bx:28,bz:-74},{ax:80,az:-104,bx:80,bz:-118},{ax:52,az:-126,bx:38,bz:-132},{ax:32,az:136,bx:46,bz:136},{ax:28,az:-140,bx:40,bz:-140},{ax:66,az:-90,bx:52,bz:-90},{ax:-110,az:-136,bx:-124,bz:-136},{ax:16,az:-148,bx:28,bz:-162},{ax:46,az:136,bx:46,bz:148},{ax:96,az:-104,bx:96,bz:-118},{ax:-102,az:-158,bx:-102,bz:-148},{ax:110,az:-104,bx:110,bz:-118},{ax:-32,az:-36,bx:-18,bz:-36},{ax:-42,az:6,bx:-42,bz:-8},{ax:0,az:-68,bx:8,bz:-68},{ax:18,az:-152,bx:8,bz:-162},{ax:28,az:-74,bx:40,bz:-74},{ax:-58,az:-142,bx:-70,bz:-136},{ax:110,az:-90,bx:124,bz:-90},{ax:52,az:-126,bx:52,bz:-140},{ax:16,az:-148,bx:16,bz:-136},{ax:110,az:-104,bx:124,bz:-104},{ax:-78,az:-156,bx:-92,bz:-172},{ax:24,az:-128,bx:36,bz:-128},{ax:-46,az:-88,bx:-58,bz:-88},{ax:36,az:23.5,bx:36,bz:36},{ax:22,az:-98,bx:22,bz:-110},{ax:96,az:-44,bx:108,bz:-44},{ax:-78,az:-172,bx:-64,bz:-172},{ax:110,az:-118,bx:124,bz:-118},{ax:124,az:-83,bx:136,bz:-83},{ax:148,az:-40,bx:160,bz:-40},{ax:172,az:-62,bx:184,bz:-62},{ax:36,az:36,bx:36,bz:48},{ax:-22,az:-110,bx:-36,bz:-110},{ax:36,az:36,bx:22,bz:36},{ax:-8,az:-88,bx:-8,bz:-76},{ax:70,az:-126,bx:70,bz:-140},{ax:22,az:36,bx:8,bz:36},{ax:16,az:-148,bx:28,bz:-148},{ax:-58,az:-88,bx:-58,bz:-76},{ax:-114,az:-158,bx:-114,bz:-148},{ax:68,az:6,bx:68,bz:18},{ax:-122,az:8,bx:-122,bz:-4},{ax:-84,az:8,bx:-84,bz:-4},{ax:-80,az:32,bx:-80,bz:44},{ax:-80,az:44,bx:-80,bz:56},{ax:-40,az:-168,bx:-28,bz:-180},{ax:-64,az:-184,bx:-52,bz:-196},{ax:124,az:-118,bx:138,bz:-118},{ax:8,az:-68,bx:8,bz:-56},{ax:-68,az:2,bx:-68,bz:-10},{ax:-68,az:12,bx:-54,bz:24},{ax:-58,az:-36,bx:-58,bz:-48},{ax:-38,az:28,bx:-38,bz:40},{ax:138,az:-118,bx:138,bz:-132},{ax:40,az:-74,bx:52,bz:-74},{ax:16,az:-86,bx:28,bz:-86},{ax:138,az:-132,bx:138,bz:-146},{ax:-58,az:-76,bx:-70,bz:-76},{ax:-46,az:-88,bx:-46,bz:-100},{ax:138,az:-146,bx:138,bz:-160},{ax:-22,az:-110,bx:-8,bz:-98},{ax:-90,az:-136,bx:-90,bz:-124},{ax:70,az:-140,bx:70,bz:-152},{ax:138,az:-160,bx:138,bz:-174}];let i=0;for(const a of t){const s=a.bx-a.ax,o=a.bz-a.az,d=s*s+o*o;let u=((n-a.ax)*s+(e-a.az)*o)/d;u=Math.min(1,Math.max(0,u));const l=a.ax+s*u,h=a.az+o*u,m=Math.hypot(n-l,e-h);i=Math.max(i,Qa(5.4,1.6,m))}return i}function r2(){const n=new Fi(es,es,ic,ic);n.rotateX(-Math.PI/2);const e=n.attributes.position,t=new Float32Array(e.count*3);for(let o=0;o<e.count;o++){const d=e.getX(o),u=e.getZ(o),l=A(d,u);e.setY(o,l)}n.computeVertexNormals();const i=n.attributes.normal;for(let o=0;o<e.count;o++){const d=1-Math.abs(i.getY(o)),u=a2(e.getX(o),e.getZ(o),e.getY(o),d);t[o*3]=u.r,t[o*3+1]=u.g,t[o*3+2]=u.b}n.setAttribute("color",new Xt(t,3));const a=new Fe({vertexColors:!0,roughness:.94,metalness:.02,flatShading:!1}),s=new ot(n,a);return s.receiveShadow=!0,s.name="terrain",s}function o2(){const n=new I;n.name="rocks";const e=[new ut(1,0),new Vr(1,0),new Wr(1,0)],t=[new Fe({color:8011048,roughness:.95,flatShading:!0}),new Fe({color:6040604,roughness:.92,flatShading:!0}),new Fe({color:9260592,roughness:.9,flatShading:!0})],i=new vt,a=[220,160,90];for(let s=0;s<3;s++){const o=new Dp(e[s],t[s],a[s]);o.castShadow=!0,o.receiveShadow=!0;let d=0,u=0;for(;d<a[s]&&u<a[s]*8;){u++;const l=(zn(d,s,1)-.5)*es*.92,h=(zn(d,s,2)-.5)*es*.92;if(Math.hypot(l,h)<42||Math.hypot(l-52,h-24)<22||Math.hypot(l-22,h-82)<18||Math.hypot(l-80,h+44)<44||Math.hypot(l-112,h+83)<22||Math.hypot(l+32,h+98)<20||Math.hypot(l+88,h+188)<30||Math.hypot(l-22,h+112)<16||Math.hypot(l+68,h+16)<22||Math.hypot(l-36,h-72)<20||Math.hypot(l+24,h-44)<20||Math.hypot(l+32,h+148)<16||Math.hypot(l+64,h+90)<14||Math.hypot(l+50,h+100)<22||Math.hypot(l-38,h+126)<16||Math.hypot(l+18,h+88)<14||Math.hypot(l-68,h+10)<16||Math.hypot(l+60,h+148)<12||Math.hypot(l+64,h+118)<12||Math.hypot(l+48,h-68)<20||Math.hypot(l-78,h-56)<20||Math.hypot(l+13,h+134)<20||Math.hypot(l-8,h+142)<16||Math.hypot(l-135,h+40)<24||Math.hypot(l-68,h-6)<16||Math.hypot(l+28,h+138)<12||Math.hypot(l+36,h+74)<18||Math.hypot(l-2,h+22)<12||Math.hypot(l+50,h+72)<14||Math.hypot(l-10,h+124)<16||Math.hypot(l-20,h-8)<16||Math.hypot(l+16,h-136)<32||Math.hypot(l-158,h+62)<24||Math.hypot(l+96,h+16)<20||Math.hypot(l+78,h+172)<16||Math.hypot(l-66,h+74)<16||Math.hypot(l-18,h+152)<14||Math.hypot(l+20,h+100)<14||Math.hypot(l+8,h+162)<14||Math.hypot(l-8,h+98)<14||Math.hypot(l-48,h+70)<14||Math.hypot(l+68,h-12)<16||Math.hypot(l-22,h+80)<14||Math.hypot(l-52,h+112)<16||Math.hypot(l+90,h+158)<14||Math.hypot(l-8,h+78)<14||Math.hypot(l+8,h+88)<14||Math.hypot(l+96,h-4)<14||Math.hypot(l-142,h+62)<14||Math.hypot(l-28,h+140)<14||Math.hypot(l+90,h+148)<12||Math.hypot(l-12,h-18)<12||Math.hypot(l-36,h-8)<14||Math.hypot(l-36,h+6)<14||Math.hypot(l+50,h-4)<14||Math.hypot(l+58,h+142)<14||Math.hypot(l+32,h+22)<14||Math.hypot(l-66,h+90)<14||Math.hypot(l-22,h+98)<14||Math.hypot(l-172,h+48)<14||Math.hypot(l-38,h+104)<14||Math.hypot(l-24,h+128)<12||Math.hypot(l+80,h-20)<14||Math.hypot(l+110,h+136)<14||Math.hypot(l+22,h+110)<14||Math.hypot(l-158,h+48)<14||Math.hypot(l+38,h-28)<14||Math.hypot(l+46,h+132)<14||Math.hypot(l-24,h+118)<14||Math.hypot(l-6,h-148)<12||Math.hypot(l+64,h-80)<14||Math.hypot(l+80,h-32)<14||Math.hypot(l-100,h+22)<12||Math.hypot(l+22,h+56)<14||Math.hypot(l+124,h+188)<16||Math.hypot(l+38,h-16)<14||Math.hypot(l-70,h+112)<16||Math.hypot(l-16,h-48)<12||Math.hypot(l+58,h+36)<14||Math.hypot(l-50,h-4)<14||Math.hypot(l+40,h+168)<14||Math.hypot(l-82,h+90)<14||Math.hypot(l-4,h+148)<14||Math.hypot(l-148,h+40)<14||Math.hypot(l-124,h+70)<14||Math.hypot(l-96,h+44)<14||Math.hypot(l+84,h-8)<14||Math.hypot(l-16,h+86)<14||Math.hypot(l-135,h+22)<14||Math.hypot(l-100,h+70)<14||Math.hypot(l-82,h+28)<14||Math.hypot(l+68,h-2)<14||Math.hypot(l-122,h+40)<14||Math.hypot(l-98,h+83)<14||Math.hypot(l-70,h+44)<14||Math.hypot(l+102,h+158)<14||Math.hypot(l+18,h+78)<14||Math.hypot(l+64,h+184)<14||Math.hypot(l-32,h+152)<14||Math.hypot(l+96,h-16)<14||Math.hypot(l-82,h+74)<14||Math.hypot(l+78,h+156)<14||Math.hypot(l+110,h-8)<14||Math.hypot(l+110,h-20)<14||Math.hypot(l+110,h-32)<14||Math.hypot(l+122,h-8)<14||Math.hypot(l+122,h-20)<14||Math.hypot(l+8,h+98)<14||Math.hypot(l+22,h+98)<14||Math.hypot(l-8,h+88)<14||Math.hypot(l+78,h+36)<14||Math.hypot(l-96,h+90)<14||Math.hypot(l+5,h+78)<12||Math.hypot(l-16,h+148)<14||Math.hypot(l+90,h+136)<14||Math.hypot(l-16,h+74)<12||Math.hypot(l+48,h+138)<14||Math.hypot(l-52,h+126)<14||Math.hypot(l-70,h+126)<14||Math.hypot(l-0,h+68)<12||Math.hypot(l-48,h+70)<12||Math.hypot(l+46,h+148)<12||Math.hypot(l+38,h-16)<12||Math.hypot(l-38,h+104)<12||Math.hypot(l-172,h+48)<12||Math.hypot(l+16,h-36)<12||Math.hypot(l-4,h+138)<12||Math.hypot(l-68,h-6)<12||Math.hypot(l-66,h+104)<14||Math.hypot(l-80,h+104)<12||Math.hypot(l-18,h-136)<14||Math.hypot(l-22,h+98)<12||Math.hypot(l-172,h+62)<14||Math.hypot(l+92,h+184)<14||Math.hypot(l+32,h+88)<14||Math.hypot(l-96,h+104)<14||Math.hypot(l+28,h+8)<12||Math.hypot(l+28,h-6)<12||Math.hypot(l+46,h+88)<14||Math.hypot(l+50,h+22)<14||Math.hypot(l+80,h-20)<14||Math.hypot(l-110,h+90)<14||Math.hypot(l-8,h+110)<14||Math.hypot(l+70,h+148)<14||Math.hypot(l-96,h+28)<14||Math.hypot(l-124,h+83)<14||Math.hypot(l-148,h+22)<14||Math.hypot(l-46,h+152)<14||Math.hypot(l-32,h-136)<14||Math.hypot(l+8,h+110)<14||Math.hypot(l-110,h+104)<14||Math.hypot(l-70,h+28)<14||Math.hypot(l-136,h+70)<14||Math.hypot(l-122,h+22)<14||Math.hypot(l+114,h+158)<14||Math.hypot(l+32,h+36)<14||Math.hypot(l+42,h-6)<14||Math.hypot(l-28,h+74)<14||Math.hypot(l-80,h+118)<14||Math.hypot(l-38,h+132)<14||Math.hypot(l-46,h-136)<14||Math.hypot(l-40,h+140)<14||Math.hypot(l-52,h+90)<14||Math.hypot(l+124,h+136)<14||Math.hypot(l-28,h+162)<14||Math.hypot(l-46,h-148)<14||Math.hypot(l-96,h+118)<14||Math.hypot(l+102,h+148)<14||Math.hypot(l-110,h+118)<14||Math.hypot(l+18,h+36)<14||Math.hypot(l+42,h+8)<14||Math.hypot(l-8,h+68)<14||Math.hypot(l-8,h+162)<14||Math.hypot(l-40,h+74)<14||Math.hypot(l+70,h+136)<14||Math.hypot(l-124,h+90)<14||Math.hypot(l-52,h+140)<14||Math.hypot(l-16,h+136)<14||Math.hypot(l-124,h+104)<14||Math.hypot(l+92,h+172)<14||Math.hypot(l-36,h+128)<14||Math.hypot(l+58,h+88)<14||Math.hypot(l-36,h-36)<14||Math.hypot(l-22,h+110)<14||Math.hypot(l-108,h+44)<14||Math.hypot(l+64,h+172)<14||Math.hypot(l-124,h+118)<14||Math.hypot(l-136,h+83)<14||Math.hypot(l-160,h+40)<14||Math.hypot(l-184,h+62)<14||Math.hypot(l-36,h-48)<14||Math.hypot(l+36,h+110)<14||Math.hypot(l-22,h-36)<14||Math.hypot(l+8,h+76)<14||Math.hypot(l-70,h+140)<16||Math.hypot(l-8,h-36)<14||Math.hypot(l-28,h+148)<14||Math.hypot(l+58,h+76)<14||Math.hypot(l+114,h+148)<14||Math.hypot(l-68,h-18)<16||Math.hypot(l+122,h+4)<16||Math.hypot(l+84,h+4)<14||Math.hypot(l+80,h-44)<14||Math.hypot(l+80,h-56)<14||Math.hypot(l+28,h+180)<14||Math.hypot(l+52,h+196)<14||Math.hypot(l-138,h+118)<14||Math.hypot(l-8,h+56)<14||Math.hypot(l+68,h+10)<14||Math.hypot(l+54,h-24)<16||Math.hypot(l+58,h+48)<14||Math.hypot(l+38,h-40)<14||Math.hypot(l-138,h+132)<14||Math.hypot(l-52,h+74)<14||Math.hypot(l-28,h+86)<14||Math.hypot(l-138,h+146)<14||Math.hypot(l+70,h+76)<14||Math.hypot(l+46,h+100)<14||Math.hypot(l-138,h+160)<14||Math.hypot(l+8,h+98)<14||Math.hypot(l+90,h+124)<14||Math.hypot(l-70,h+152)<14||Math.hypot(l-138,h+174)<14)continue;const m=A(l,h),p=.35+zn(d,s,3)*(s===2?2.8:1.4);i.position.set(l,m+p*.25,h),i.rotation.set(zn(d,s,4)*6,zn(d,s,5)*6,zn(d,s,6)*6),i.scale.set(p,p*(.6+zn(d,s,7)*.7),p*(.7+zn(d,s,8)*.5)),i.updateMatrix(),o.setMatrixAt(d,i.matrix),d++}o.count=d,n.add(o)}return n}function zn(n,e,t){const i=Math.sin(n*12.9898+e*78.233+t*45.164)*43758.5453;return i-Math.floor(i)}const c2=`
varying vec3 vWorld;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWorld = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}
`,d2=`
varying vec3 vWorld;
uniform vec3 uSunDir;
void main() {
  vec3 dir = normalize(vWorld);
  float h = dir.y;
  vec3 zenith = vec3(0.72, 0.58, 0.48);
  vec3 mid = vec3(0.86, 0.62, 0.40);
  vec3 horizon = vec3(0.93, 0.72, 0.48);
  vec3 col = mix(horizon, mid, smoothstep(-0.05, 0.25, h));
  col = mix(col, zenith, smoothstep(0.2, 0.85, h));
  float sun = pow(max(dot(dir, normalize(uSunDir)), 0.0), 180.0);
  float glow = pow(max(dot(dir, normalize(uSunDir)), 0.0), 8.0);
  col += vec3(1.0, 0.92, 0.7) * sun * 1.4;
  col += vec3(1.0, 0.7, 0.35) * glow * 0.28;
  if (h < 0.0) col = mix(vec3(0.45, 0.22, 0.12), col, 0.15);
  gl_FragColor = vec4(col, 1.0);
}
`;function l2(n){const e=new wt(900,32,20),t=new Sn({vertexShader:c2,fragmentShader:d2,uniforms:{uSunDir:{value:n.clone().normalize()}},side:Lt,depthWrite:!1}),i=new ot(e,t);return i.name="sky",i}function h2(n){const e=new I,t=n.clone().normalize(),i=new jp(16769456,2.15);i.position.copy(t.clone().multiplyScalar(180)),i.castShadow=!0,i.shadow.mapSize.set(1536,1536),i.shadow.camera.near=10,i.shadow.camera.far=420,i.shadow.camera.left=-130,i.shadow.camera.right=130,i.shadow.camera.top=130,i.shadow.camera.bottom=-130,i.shadow.bias=-8e-4,e.add(i);const a=new Jp(14727304,6959128,.55);e.add(a);const s=new Qp(12611648,.16);e.add(s);const o=new ot(new wt(7,16,16),new Fr({color:16773572}));return o.position.copy(t.clone().multiplyScalar(420)),e.add(o),e.name="sun",e}function u2(){const n=new I;n.name="mountains";const e=new Fe({color:7024156,roughness:1,flatShading:!0}),t=[[0,-300,18,70],[80,-310,14,52],[-90,-305,16,60],[220,-280,12,40],[-240,-270,13,48],[300,-40,15,55],[305,80,11,38],[-310,20,16,62],[-300,140,12,44],[40,310,17,58],[-70,300,13,46],[160,290,10,36]];for(const[i,a,s,o]of t){const d=new ii(s,o,6),u=new ot(d,e),l=A(i,a)+o*.35;u.position.set(i,l,a),u.rotation.y=(i+a)*.01,n.add(u)}return n}function f2(){const e=new Float32Array(2100);for(let s=0;s<700;s++)e[s*3]=(Math.random()-.5)*220,e[s*3+1]=1+Math.random()*18,e[s*3+2]=(Math.random()-.5)*220;const t=new Ut;t.setAttribute("position",new Xt(e,3));const i=new Bc({color:13934698,size:.18,transparent:!0,opacity:.35,depthWrite:!1}),a=new Ip(t,i);return a.name="dust",a}function p2(n){n.fog=new Hr(12880472,.00155),n.background=new We(12880472)}const r={steel:new Fe({color:13225425,metalness:.88,roughness:.28}),steelDark:new Fe({color:9146518,metalness:.82,roughness:.38}),tiles:new Fe({color:1710620,metalness:.15,roughness:.72}),soot:new Fe({color:2763308,metalness:.4,roughness:.55}),pad:new Fe({color:7168600,metalness:.08,roughness:.88}),padRing:new Fe({color:4866876,metalness:.1,roughness:.8}),solar:new Fe({color:727603,metalness:.55,roughness:.22}),solarFrame:new Fe({color:10133670,metalness:.7,roughness:.35}),tankCh4:new Fe({color:12868132,metalness:.35,roughness:.45}),tankO2:new Fe({color:14212579,metalness:.4,roughness:.4}),hab:new Fe({color:13616824,metalness:.15,roughness:.62}),habDark:new Fe({color:6972508,metalness:.2,roughness:.55}),glass:new Fe({color:8963232,metalness:.1,roughness:.18,transparent:!0,opacity:.42,depthWrite:!1}),plant:new Fe({color:4160056,roughness:.85}),rover:new Fe({color:12106944,metalness:.55,roughness:.4}),roverDark:new Fe({color:3356218,metalness:.4,roughness:.5}),crate:new Fe({color:9080724,metalness:.45,roughness:.5}),ice:new Fe({color:14083823,metalness:.05,roughness:.35}),rust:new Fe({color:8011560,roughness:.9}),glowWarm:new Fe({color:16761994,emissive:16751178,emissiveIntensity:.85,roughness:.4}),glowPad:new Fe({color:16765056,emissive:16756800,emissiveIntensity:.7}),concrete:new Fe({color:9076852,roughness:.92}),lattice:new Fe({color:10133668,metalness:.7,roughness:.4}),graded:new Fe({color:6968134,roughness:.94,metalness:.04}),pipe:new Fe({color:8030868,metalness:.55,roughness:.4}),cable:new Fe({color:2762274,metalness:.35,roughness:.55}),robot:new Fe({color:13159632,metalness:.62,roughness:.38}),flagIce:new Fe({color:12966116,roughness:.72,metalness:.04}),flagDeposit:new Fe({color:12081704,roughness:.8,metalness:.06}),track:new Fe({color:4006936,roughness:.97}),roadBed:new Fe({color:6044202,roughness:.97,metalness:.02}),soil:new Fe({color:4861468,roughness:.96}),plantLeaf:new Fe({color:3107378,roughness:.88}),dish:new Fe({color:14210252,metalness:.38,roughness:.42}),suit:new Fe({color:15131352,metalness:.18,roughness:.55}),suitDark:new Fe({color:6052438,metalness:.35,roughness:.5}),visor:new Fe({color:12886090,metalness:.75,roughness:.18,emissive:3811336,emissiveIntensity:.28}),battery:new Fe({color:3817026,metalness:.48,roughness:.48})};function m2(n,e="#1c120c",t="#f3e2cc"){const i=document.createElement("canvas");i.width=512,i.height=128;const a=i.getContext("2d");a.fillStyle=e,a.fillRect(0,0,512,128),a.strokeStyle=t,a.lineWidth=6,a.strokeRect(10,10,492,108),a.fillStyle=t;const s=n.length>12?36:n.length>8?44:n.length>5?54:64;a.font=`bold ${s}px sans-serif`,a.textAlign="center",a.textBaseline="middle",a.fillText(n,256,68);const o=new zp(i);return o.colorSpace=kt,o}function c(n,e,t,i,a,s=0,o=0,d=0){const u=new ot(n,e);return u.position.set(t,i,a),u.rotation.set(s,o,d),u.castShadow=!0,u.receiveShadow=!0,u}function Pt(n,e,t=0){return[n,A(n,e)+t,e]}function _(n,e,t,i,a,s,o,d,u=0){const l=new Fe({map:m2(n,e,t),side:dn,roughness:.55,metalness:.08}),h=new ot(new Fi(i,a),l);return h.position.set(s,o,d),h.rotation.y=u,h.castShadow=!1,h}function oe(n,e,t,i=0,a=1){const s=A(e,t)+.85*a;n.add(c(new f(1.7*a,1.5*a,1.7*a),r.crate,e,s,t,0,i,0)),n.add(c(new f(1.78*a,.08,1.78*a),r.steelDark,e,s+.78*a,t,0,i,0))}function g2(){const n=new I;n.name="settlement";const e=[],t=[];n.add(Jn(0,0,{finished:!0}));const i=bi(0,0,{name:"starship",crewHab:!0});n.add(i),Q2(e),t.push({id:"starship",name:"Crew hab Starship",position:new v(0,18,0)}),t.push({id:"eva",name:"EVA / airlock",position:new v(2,3,12)});const a=Rm();n.add(a),e.push({type:"box",x:12,z:18,w:6,d:3}),t.push({id:"evarack",name:"EVA suit rack",position:new v(12,3,18)}),n.add(Jn(52,24,{finished:!1}));const s=bi(52,24,{name:"cargo-starship",cargoOpen:!0});n.add(s),e.push({type:"cyl",x:52,z:24,r:7.4}),t.push({id:"cargo",name:"Cargo Starship",position:new v(52,18,24)}),n.add(Jn(36,72,{finished:!1}));const o=bi(36,72,{name:"cargo-3",cargoOpen:!0});n.add(o),e.push({type:"cyl",x:36,z:72,r:7.4}),t.push({id:"cargo3",name:"Cargo Starship 3",position:new v(36,18,72)}),n.add(ac(24,70)),n.add(Jn(-24,44,{finished:!1}));const d=bi(-24,44,{name:"cargo-4"});n.add(d),e.push({type:"cyl",x:-24,z:44,r:7.4}),t.push({id:"cargo4",name:"Cargo Starship 4",position:new v(-24,18,44)}),n.add(Jn(-48,68,{finished:!1}));const u=bi(-48,68,{name:"cargo-5",cargoOpen:!0});n.add(u),e.push({type:"cyl",x:-48,z:68,r:7.4}),t.push({id:"cargo5",name:"Window-2 cargo Starship",position:new v(-48,18,68)}),n.add(ac(-60,66));const l=Hm();n.add(l),e.push({type:"box",x:-64,z:80,w:8,d:8}),t.push({id:"crane",name:"Window-2 cargo crane",position:new v(-64,8,80)}),n.add(Jn(78,56,{finished:!1}));const h=bi(78,56,{name:"cargo-6"});n.add(h),e.push({type:"cyl",x:78,z:56,r:7.4}),t.push({id:"cargo6",name:"Window-2 cargo Starship",position:new v(78,18,56)}),n.add(x2()),n.add(_2()),n.add(w2()),n.add(v2()),t.push({id:"prep",name:"Landing prep",position:new v(22,4,82)});const m=Km();n.add(m),e.push({type:"box",x:16,z:48,w:6,d:5});for(const[Gi,Vi]of[[4,68],[4,50],[4,32]])e.push({type:"cyl",x:Gi,z:Vi,r:.45});t.push({id:"aplights",name:"Pad approach lights",position:new v(16,4,48)});const p=Gg();n.add(p),e.push({type:"box",x:-16,z:36,w:8,d:6}),t.push({id:"padflood",name:"Pad flood lights",position:new v(-16,4,36)}),n.add(cm()),e.push({type:"box",x:-38,z:148,w:10,d:8}),t.push({id:"pad2",name:"Next-window pad",position:new v(-16,6,136)}),t.push({id:"sinter",name:"Pad sinter rig",position:new v(-38,4,148)});const g=Bm();n.add(g),e.push({type:"box",x:6,z:148,w:6,d:5});for(const[Gi,Vi]of[[2,154],[-34,154],[2,118],[-34,118]])e.push({type:"cyl",x:Gi,z:Vi,r:.55});t.push({id:"beacons",name:"Pad 2 landing beacons",position:new v(6,5,148)});const M=Yg();n.add(M),e.push({type:"box",x:18,z:136,w:10,d:6}),t.push({id:"roller",name:"Pad sinter roller",position:new v(18,4,136)});const b=xx();n.add(b),e.push({type:"box",x:32,z:136,w:10,d:8}),t.push({id:"pad2bricks",name:"Pad 2 sinter bricks",position:new v(32,4,136)});const w=Cx();n.add(w),e.push({type:"box",x:46,z:136,w:10,d:8}),t.push({id:"pad2cargo",name:"Pad 2 spare cargo",position:new v(46,4,136)});const x=Lx();n.add(x),e.push({type:"box",x:46,z:148,w:10,d:8}),t.push({id:"pad2unload",name:"Pad 2 spare unloader",position:new v(46,4,148)});const P=$x();n.add(P),e.push({type:"box",x:36,z:36,w:10,d:8}),t.push({id:"pad1cargo",name:"Pad 1 spare cargo",position:new v(36,4,36)});const C=jx();n.add(C),e.push({type:"box",x:22,z:-110,w:10,d:8}),t.push({id:"dscrub",name:"Spare hab dust scrub",position:new v(22,4,-110)});const S=Qx();n.add(S),e.push({type:"box",x:108,z:-44,w:10,d:8}),t.push({id:"f1str",name:"Farm 1 spare string",position:new v(108,4,-44)});const H=e4();n.add(H),e.push({type:"box",x:-64,z:-172,w:8,d:6}),t.push({id:"mine2light",name:"Ice mine 2 lights",position:new v(-64,4,-172)});const L=t4();n.add(L),e.push({type:"box",x:124,z:-118,w:10,d:8}),t.push({id:"shopcrate",name:"Spare shop parts crate",position:new v(124,4,-118)});const U=M4();n.add(U),e.push({type:"box",x:138,z:-118,w:10,d:8}),t.push({id:"shopdrill",name:"Spare workshop drill press",position:new v(138,4,-118)});const O=A4();n.add(O),e.push({type:"box",x:138,z:-132,w:10,d:8}),t.push({id:"shopsaw",name:"Spare workshop bandsaw",position:new v(138,4,-132)});const R=P4();n.add(R),e.push({type:"box",x:138,z:-146,w:10,d:8}),t.push({id:"shopshear",name:"Spare workshop shear",position:new v(138,4,-146)});const E=z4();n.add(E),e.push({type:"box",x:138,z:-160,w:10,d:8}),t.push({id:"shoppress",name:"Spare workshop press",position:new v(138,4,-160)});const N=O4();n.add(N),e.push({type:"box",x:138,z:-174,w:10,d:8}),t.push({id:"shopweld2",name:"Spare workshop welder 2",position:new v(138,4,-174)});const Y=n4();n.add(Y),e.push({type:"box",x:136,z:-83,w:10,d:8}),t.push({id:"f2str",name:"Field 2 spare string",position:new v(136,4,-83)});const q=i4();n.add(q),e.push({type:"box",x:160,z:-40,w:10,d:8}),t.push({id:"f3str",name:"Field 3 spare string",position:new v(160,4,-40)});const $=a4();n.add($),e.push({type:"box",x:184,z:-62,w:10,d:8}),t.push({id:"f4str",name:"Field 4 spare string",position:new v(184,4,-62)});const ie=s4();n.add(ie),e.push({type:"box",x:36,z:48,w:10,d:8}),t.push({id:"pad1unload",name:"Pad 1 spare unloader",position:new v(36,4,48)});const j=r4();n.add(j),e.push({type:"box",x:-36,z:-110,w:10,d:8}),t.push({id:"wastesp",name:"Spare waste recovery",position:new v(-36,4,-110)});const ce=o4();n.add(ce),e.push({type:"box",x:22,z:36,w:10,d:8}),t.push({id:"pad1bricks",name:"Pad 1 sinter bricks",position:new v(22,4,36)});const J=c4();n.add(J),e.push({type:"box",x:-8,z:-76,w:10,d:8}),t.push({id:"o2buf3",name:"Spare crew O2 buffer",position:new v(-8,4,-76)});const ue=d4();n.add(ue),e.push({type:"box",x:70,z:-140,w:14,d:9}),t.push({id:"food5",name:"Spare grow vault",position:new v(70,4,-140)});const _e=l4();n.add(_e),e.push({type:"box",x:8,z:36,w:10,d:6}),t.push({id:"pad1roller",name:"Pad 1 sinter roller",position:new v(8,4,36)});const Re=h4();n.add(Re),e.push({type:"box",x:28,z:-148,w:10,d:8}),t.push({id:"commshpa",name:"Spare Earth-link HPA",position:new v(28,4,-148)});const Xe=u4();n.add(Xe),e.push({type:"box",x:-58,z:-76,w:10,d:8}),t.push({id:"n2b",name:"Spare hab N2 2",position:new v(-58,4,-76)});const it=D4();n.add(it),e.push({type:"box",x:-70,z:-76,w:10,d:8}),t.push({id:"n2c",name:"Spare hab N2 3",position:new v(-70,4,-76)});const ee=f4();n.add(ee),e.push({type:"box",x:-114,z:-148,w:10,d:8}),t.push({id:"crushscreen",name:"Spare ice crush screen",position:new v(-114,4,-148)});const de=p4();n.add(de),e.push({type:"box",x:68,z:18,w:16,d:8}),t.push({id:"padnight",name:"Spare pad night store",position:new v(68,4,18)});const Ee=m4();n.add(Ee),e.push({type:"box",x:-122,z:-4,w:12,d:8}),t.push({id:"electrosp",name:"Spare ISRU electrolysis",position:new v(-122,5,-4)});const fe=g4();n.add(fe),e.push({type:"box",x:-84,z:-4,w:10,d:8}),t.push({id:"knocksp",name:"Spare Sabatier knockout",position:new v(-84,5,-4)});const Le=x4();n.add(Le),e.push({type:"box",x:-80,z:44,w:10,d:8}),t.push({id:"chillsp",name:"Spare CH4 chiller",position:new v(-80,5,44)});const Oe=_4();n.add(Oe),e.push({type:"box",x:-80,z:56,w:10,d:8}),t.push({id:"o2chillsp",name:"Spare O2 chiller",position:new v(-80,5,56)});const qe=M2();n.add(qe),t.push({id:"solar",name:"Solar farm",position:new v(82,6,-44)});const ft=hg();n.add(ft),e.push({type:"box",x:70,z:-44,w:1.2,d:22}),t.push({id:"fence1",name:"Farm 1 dust fence",position:new v(70,4,-44)});const Ze=ng();n.add(Ze),e.push({type:"box",x:96,z:-44,w:10,d:8}),t.push({id:"comb1",name:"Farm 1 combiner",position:new v(96,4,-44)});const gt=og();n.add(gt),e.push({type:"box",x:82,z:-28,w:12,d:8}),t.push({id:"night1",name:"Farm 1 night store",position:new v(82,4,-28)});const G=fx();n.add(G),e.push({type:"box",x:96,z:-28,w:8,d:6}),t.push({id:"farm1light",name:"Farm 1 lights",position:new v(96,4,-28)});const Nt=vx();n.add(Nt),e.push({type:"box",x:70,z:-28,w:10,d:8}),t.push({id:"inv1",name:"Farm 1 spare inverter",position:new v(70,4,-28)});const Ye=P2();n.add(Ye),t.push({id:"solar2",name:"Solar field 2",position:new v(112,5,-83)});const Ke=lg();n.add(Ke),e.push({type:"box",x:98,z:-83,w:1.2,d:22}),t.push({id:"fence2",name:"Field 2 dust fence",position:new v(98,4,-83)});const Ie=tg();n.add(Ie),e.push({type:"box",x:124,z:-70,w:10,d:8}),t.push({id:"comb2",name:"Field 2 combiner",position:new v(124,4,-70)});const ct=rg();n.add(ct),e.push({type:"box",x:100,z:-70,w:12,d:8}),t.push({id:"night2",name:"Field 2 night store",position:new v(100,4,-70)});const De=px();n.add(De),e.push({type:"box",x:124,z:-83,w:8,d:6}),t.push({id:"field2light",name:"Field 2 lights",position:new v(124,4,-83)});const D=Mx();n.add(D),e.push({type:"box",x:136,z:-70,w:10,d:8}),t.push({id:"inv2",name:"Field 2 spare inverter",position:new v(136,4,-70)});const y=tm();n.add(y),t.push({id:"solar3",name:"Solar field 3",position:new v(135,5,-40)});const V=dg();n.add(V),e.push({type:"box",x:122,z:-40,w:1.2,d:22}),t.push({id:"fence3",name:"Field 3 dust fence",position:new v(122,4,-40)});const te=eg();n.add(te),e.push({type:"box",x:148,z:-40,w:10,d:8}),t.push({id:"comb3",name:"Field 3 combiner",position:new v(148,4,-40)});const ae=sg();n.add(ae),e.push({type:"box",x:135,z:-22,w:12,d:8}),t.push({id:"night3",name:"Field 3 night store",position:new v(135,4,-22)});const Q=mx();n.add(Q),e.push({type:"box",x:148,z:-22,w:8,d:6}),t.push({id:"field3light",name:"Field 3 lights",position:new v(148,4,-22)});const Te=bx();n.add(Te),e.push({type:"box",x:122,z:-22,w:10,d:8}),t.push({id:"inv3",name:"Field 3 spare inverter",position:new v(122,4,-22)});const pe=lm();n.add(pe),e.push({type:"box",x:158,z:-28,w:12,d:8}),t.push({id:"solar4",name:"Solar field 4",position:new v(158,5,-62)});const we=Hg();n.add(we),e.push({type:"box",x:172,z:-48,w:8,d:6}),t.push({id:"sol4light",name:"Field 4 lights",position:new v(172,4,-48)});const $e=Jg();n.add($e),e.push({type:"box",x:172,z:-62,w:10,d:8}),t.push({id:"inv4",name:"Field 4 spare inverter",position:new v(172,4,-62)});const se=dx();n.add(se),e.push({type:"box",x:158,z:-48,w:12,d:8}),t.push({id:"night4",name:"Field 4 night store",position:new v(158,4,-48)});const ve=Tm();n.add(ve),e.push({type:"box",x:142,z:-62,w:1.2,d:22}),t.push({id:"dustfence",name:"Solar dust fence",position:new v(142,4,-62)});const ze=Nm();n.add(ze),e.push({type:"box",x:172,z:-48,w:10,d:8}),t.push({id:"combiner",name:"Field 4 combiner",position:new v(172,4,-48)});const Ue=Vm();n.add(Ue),e.push({type:"box",x:100,z:-22,w:8,d:6}),t.push({id:"trench",name:"Field 4 power trench",position:new v(100,3,-22)}),n.add(b2()),n.add(D2());const Me=S2();n.add(Me),e.push({type:"box",x:-68,z:-16,w:30,d:22}),t.push({id:"isru",name:"Sabatier ISRU",position:new v(-68,8,-16)});const Je=nx();n.add(Je),e.push({type:"box",x:-50,z:-22,w:10,d:8}),t.push({id:"catalyst",name:"Spare Sabatier catalyst",position:new v(-50,4,-22)});const He=cg();n.add(He),e.push({type:"box",x:-68,z:2,w:12,d:8}),t.push({id:"co2t1",name:"CO2 intake 1",position:new v(-68,5,2)});const at=y4();n.add(at),e.push({type:"box",x:-68,z:-10,w:12,d:8}),t.push({id:"co2insp",name:"Spare CO2 intake",position:new v(-68,5,-10)});const F=ix();n.add(F),e.push({type:"box",x:-80,z:20,w:10,d:8}),t.push({id:"co2sp",name:"Spare CO2 compressor",position:new v(-80,4,20)});const he=wm();n.add(he),e.push({type:"box",x:-68,z:12,w:16,d:6}),t.push({id:"radiators",name:"ISRU radiators",position:new v(-68,5,12)});const K=S4();n.add(K),e.push({type:"box",x:-54,z:24,w:16,d:6}),t.push({id:"radssp",name:"Spare ISRU radiators",position:new v(-54,5,24)});const ne=ig();n.add(ne),e.push({type:"box",x:-84,z:8,w:10,d:8}),t.push({id:"condense",name:"Sabatier condenser",position:new v(-84,5,8)});const xe=hm();n.add(xe),e.push({type:"box",x:-96,z:-16,w:18,d:18}),t.push({id:"isru2",name:"Sabatier train 2",position:new v(-96,8,-16)});const me=Em();n.add(me),e.push({type:"box",x:-96,z:4,w:12,d:8}),t.push({id:"co2cap",name:"CO2 intake 2",position:new v(-96,5,4)});const ke=gg();n.add(ke),e.push({type:"box",x:-96,z:16,w:16,d:6}),t.push({id:"radiators2",name:"ISRU radiators 2",position:new v(-96,5,16)});const mt=wg();n.add(mt),e.push({type:"box",x:-110,z:8,w:10,d:8}),t.push({id:"condense2",name:"Sabatier condenser 2",position:new v(-110,5,8)});const yt=vg();n.add(yt),e.push({type:"box",x:-110,z:20,w:10,d:8}),t.push({id:"chiller2",name:"CH4 liquefaction 2",position:new v(-110,5,20)});const nt=Mg();n.add(nt),e.push({type:"box",x:-110,z:32,w:10,d:8}),t.push({id:"o2chill2",name:"O2 liquefaction 2",position:new v(-110,5,32)});const Bt=bg();n.add(Bt),e.push({type:"box",x:-122,z:8,w:12,d:8}),t.push({id:"electro2",name:"ISRU electrolysis 2",position:new v(-122,5,8)});const Kt=yg();n.add(Kt),e.push({type:"box",x:-122,z:20,w:10,d:8}),t.push({id:"h2tank2",name:"H2 recycle tank 2",position:new v(-122,5,20)});const da=Dm();n.add(da),e.push({type:"box",x:-50,z:4,w:12,d:8}),t.push({id:"electro",name:"ISRU electrolysis",position:new v(-50,5,4)});const la=kg();n.add(la),e.push({type:"box",x:-38,z:16,w:8,d:6}),t.push({id:"isrulight",name:"ISRU plant lights",position:new v(-38,4,16)});const pn=qm();n.add(pn),e.push({type:"box",x:-38,z:16,w:10,d:8}),t.push({id:"h2tank",name:"H2 recycle tank",position:new v(-38,5,16)});const Hi=ax();n.add(Hi),e.push({type:"box",x:-38,z:28,w:10,d:8}),t.push({id:"h2dry",name:"Spare H2 dryer",position:new v(-38,4,28)});const ha=T4();n.add(ha),e.push({type:"box",x:-38,z:40,w:10,d:8}),t.push({id:"h2sp",name:"Spare H2 recycle",position:new v(-38,5,40)});const ua=Jm();n.add(ua),e.push({type:"box",x:-58,z:-36,w:12,d:8}),t.push({id:"pwater",name:"ISRU process water",position:new v(-58,5,-36)});const si=E4();n.add(si),e.push({type:"box",x:-58,z:-48,w:12,d:8}),t.push({id:"pwatersp",name:"Spare process water",position:new v(-58,5,-48)});const fa=Ag();n.add(fa),e.push({type:"box",x:-78,z:-36,w:12,d:8}),t.push({id:"pwater2",name:"ISRU process water 2",position:new v(-78,5,-36)});const ri=km();n.add(ri),e.push({type:"box",x:-80,z:20,w:10,d:8}),t.push({id:"chiller",name:"CH4 liquefaction",position:new v(-80,5,20)});const pa=Gm();n.add(pa),e.push({type:"box",x:-80,z:32,w:10,d:8}),t.push({id:"o2chill",name:"O2 liquefaction",position:new v(-80,5,32)}),n.add(y2());const ma=E2();n.add(ma),e.push({type:"box",x:-14,z:-104,w:14,d:8}),e.push({type:"box",x:2,z:-104,w:14,d:8}),e.push({type:"box",x:-6,z:-116,w:8,d:14}),t.push({id:"habs",name:"Hab cluster",position:new v(-6,5,-108)});const as=I2();n.add(as),e.push({type:"box",x:-32,z:-98,w:16,d:12}),t.push({id:"hab-kit",name:"Hab from cargo",position:new v(-32,5,-98)});const ss=cx();n.add(ss),e.push({type:"box",x:-22,z:-110,w:10,d:8}),t.push({id:"coupler",name:"Spare hab coupler",position:new v(-22,4,-110)});const rs=L4();n.add(rs),e.push({type:"box",x:-8,z:-98,w:10,d:8}),t.push({id:"couplersp",name:"Spare hab coupler 2",position:new v(-8,4,-98)});const T=z2();n.add(T),e.push({type:"box",x:-46,z:-108,w:14,d:8}),e.push({type:"box",x:-46,z:-94,w:14,d:8}),e.push({type:"box",x:-58,z:-102,w:8,d:14}),t.push({id:"pressure",name:"Pressure habs",position:new v(-50,5,-100)});const k=j2();n.add(k),e.push({type:"box",x:-20,z:-132,w:14,d:8}),e.push({type:"box",x:-6,z:-132,w:14,d:8}),e.push({type:"box",x:-13,z:-142,w:8,d:14}),t.push({id:"hab3",name:"Hab street",position:new v(-13,5,-134)});const W=im();n.add(W),yi(e,-33,-120,"x",28),yi(e,-6,-120,"z",24),yi(e,-4,-58,"z",70),e.push({type:"cyl",x:2,z:-22,r:1.6}),t.push({id:"corridors",name:"Pressurized neighborhood",position:new v(-20,4,-120)});const X=am();n.add(X),e.push({type:"box",x:-30,z:-69,w:9,d:9}),e.push({type:"box",x:-38,z:-74.2,w:7,d:4.4}),yi(e,-36,-87,"z",24),yi(e,-45,-74,"x",12),t.push({id:"yard",name:"Construction yard",position:new v(-36,5,-74)}),t.push({id:"hab6",name:"Hab 6",position:new v(-40,5,-76)});const B=Wm();n.add(B),e.push({type:"box",x:-22,z:-56,w:10,d:8}),t.push({id:"regolith",name:"Regolith stockpile",position:new v(-22,4,-56)});const re=sm();n.add(re),e.push({type:"box",x:-53,z:-72,w:6,d:7}),t.push({id:"med",name:"Crew ops / medical",position:new v(-50,5,-72)});const ge=rm();n.add(ge),e.push({type:"box",x:10,z:-124,w:14,d:10}),yi(e,2,-128,"x",10),t.push({id:"commons",name:"Crew commons / mess",position:new v(10,5,-124)});const be=T2();n.add(be),e.push({type:"box",x:22,z:-112,w:16,d:10}),e.push({type:"box",x:32,z:-112,w:8,d:6}),t.push({id:"greenhouse",name:"CO2 life support",position:new v(22,4,-112)});const ye=Mm();n.add(ye),e.push({type:"box",x:52,z:-112,w:14,d:9}),t.push({id:"greenhouse2",name:"Greenhouse 2",position:new v(52,4,-112)});const Ne=Bg();n.add(Ne),e.push({type:"box",x:38,z:-104,w:8,d:6}),t.push({id:"ghlight",name:"Greenhouse lights",position:new v(38,4,-104)});const Be=Ym();n.add(Be),e.push({type:"box",x:70,z:-112,w:12,d:8}),t.push({id:"food3",name:"Grow vault 4",position:new v(70,4,-112)});const Se=Om();n.add(Se),e.push({type:"box",x:38,z:-104,w:10,d:6}),t.push({id:"ghfilter",name:"Grow dust filter",position:new v(38,4,-104)});const je=rx();n.add(je),e.push({type:"box",x:24,z:-118,w:10,d:8}),t.push({id:"ghf2",name:"Spare grow dust filter",position:new v(24,4,-118)});const st=Lg();n.add(st),e.push({type:"box",x:52,z:-126,w:12,d:8}),t.push({id:"ghwater",name:"Grow process water",position:new v(52,4,-126)});const dt=Xx();n.add(dt),e.push({type:"box",x:52,z:-140,w:10,d:8}),t.push({id:"ghpump",name:"Spare grow-water pump",position:new v(52,4,-140)});const Et=Rx();n.add(Et),e.push({type:"box",x:38,z:-132,w:10,d:8}),t.push({id:"growco2",name:"Spare grow CO2 tank",position:new v(38,4,-132)});const et=Ug();n.add(et),e.push({type:"box",x:70,z:-126,w:10,d:8}),t.push({id:"nutrient",name:"Grow nutrient skid",position:new v(70,4,-126)});const Ae=N4();n.add(Ae),e.push({type:"box",x:70,z:-152,w:10,d:8}),t.push({id:"nutrientsp",name:"Spare grow nutrient",position:new v(70,4,-152)});const Jt=xm();n.add(Jt),e.push({type:"box",x:8,z:-98,w:12,d:8}),t.push({id:"eclss",name:"Hab ECLSS / CO2 scrub",position:new v(8,4,-98)});const tt=Kg();n.add(tt),e.push({type:"box",x:22,z:-98,w:8,d:6}),t.push({id:"blower",name:"Hab spare blower",position:new v(22,4,-98)});const Ht=Sg();n.add(Ht),e.push({type:"box",x:-8,z:-98,w:12,d:8}),t.push({id:"eclss2",name:"Hab ECLSS 2",position:new v(-8,4,-98)});const Tn=hx();n.add(Tn),e.push({type:"box",x:8,z:-110,w:10,d:8}),t.push({id:"amine",name:"Hab spare amine bed",position:new v(8,4,-110)});const Dt=_x();n.add(Dt),e.push({type:"box",x:-8,z:-110,w:10,d:8}),t.push({id:"regulator",name:"Hab spare pressure regulator",position:new v(-8,4,-110)});const kn=Um();n.add(kn),e.push({type:"box",x:22,z:-98,w:10,d:8}),t.push({id:"waste",name:"Waste / water recovery",position:new v(22,4,-98)});const lt=Eg();n.add(lt),e.push({type:"box",x:-22,z:-98,w:10,d:8}),t.push({id:"waste2",name:"Waste recovery 2",position:new v(-22,4,-98)});const qt=Sm();n.add(qt),e.push({type:"box",x:-8,z:-88,w:10,d:8}),t.push({id:"o2buf",name:"Crew O2 buffer",position:new v(-8,4,-88)});const Bn=Tg();n.add(Bn),e.push({type:"box",x:8,z:-88,w:10,d:8}),t.push({id:"o2buf2",name:"Crew O2 buffer 2",position:new v(8,4,-88)});const Ot=$g();n.add(Ot),e.push({type:"box",x:-32,z:-88,w:10,d:8}),t.push({id:"n2",name:"Hab spare N2",position:new v(-32,4,-88)});const an=tx();n.add(an),e.push({type:"box",x:-46,z:-88,w:10,d:8}),t.push({id:"habh2o",name:"Hab spare water",position:new v(-46,4,-88)});const sn=I4();n.add(sn),e.push({type:"box",x:-46,z:-100,w:10,d:8}),t.push({id:"habh2osp",name:"Spare hab water 2",position:new v(-46,4,-100)});const ga=Zx();n.add(ga),e.push({type:"box",x:-58,z:-88,w:10,d:8}),t.push({id:"wpump",name:"Spare water-loop pump",position:new v(-58,4,-88)});const Vc=ag();n.add(Vc),e.push({type:"box",x:16,z:-86,w:10,d:8}),t.push({id:"dustlock",name:"Hab-street dust lock",position:new v(16,4,-86)});const Wc=C4();n.add(Wc),e.push({type:"box",x:28,z:-86,w:10,d:8}),t.push({id:"dustlocksp",name:"Spare hab-street dust lock",position:new v(28,4,-86)});const Xc=Ig();n.add(Xc),e.push({type:"box",x:16,z:-74,w:8,d:6}),t.push({id:"evalocker",name:"Hab-street EVA locker",position:new v(16,4,-74)});const qc=R4();n.add(qc),e.push({type:"box",x:52,z:-74,w:8,d:6}),t.push({id:"evalockersp",name:"Spare hab-street EVA locker",position:new v(52,4,-74)});const Yc=Tx();n.add(Yc),e.push({type:"box",x:28,z:-74,w:10,d:8}),t.push({id:"evabatt",name:"Spare EVA battery cart",position:new v(28,4,-74)});const Kc=Gx();n.add(Kc),e.push({type:"box",x:40,z:-74,w:10,d:8}),t.push({id:"rcharge",name:"Spare rover charge post",position:new v(40,4,-74)});const Jc=Ng();n.add(Jc),e.push({type:"box",x:0,z:-68,w:8,d:6}),t.push({id:"hablight",name:"Hab-street lights",position:new v(0,4,-68)});const Zc=Bx();n.add(Zc),e.push({type:"box",x:8,z:-68,w:10,d:8}),t.push({id:"habinv",name:"Hab-street spare inverter",position:new v(8,4,-68)});const $c=b4();n.add($c),e.push({type:"box",x:8,z:-56,w:10,d:8}),t.push({id:"habbatt",name:"Hab-street spare battery",position:new v(8,4,-56)});const jc=K2();n.add(jc),e.push({type:"box",x:38,z:-126,w:14,d:9}),t.push({id:"food",name:"Food / grow vault",position:new v(38,4,-126)});const Qc=em();n.add(Qc),e.push({type:"box",x:8,z:-142,w:14,d:9}),t.push({id:"food2",name:"Hab-street grow vault",position:new v(8,4,-142)});const ed=Am();n.add(ed),e.push({type:"box",x:28,z:-140,w:10,d:8}),t.push({id:"condensate",name:"Condensate return",position:new v(28,4,-140)});const td=Px();n.add(td),e.push({type:"box",x:40,z:-140,w:10,d:8}),t.push({id:"condensate2",name:"Spare hab condensate",position:new v(40,4,-140)});const nd=J2();n.add(nd),e.push({type:"box",x:-60,z:-148,w:8,d:6}),e.push({type:"box",x:-64,z:-118,w:8,d:6}),e.push({type:"box",x:-18,z:-88,w:10,d:8}),t.push({id:"water",name:"Water loop",position:new v(-18,4,-88)});const id=pm();n.add(id),e.push({type:"box",x:18,z:-152,w:14,d:10}),t.push({id:"potable",name:"Potable water store",position:new v(18,4,-152)});const ad=mg();n.add(ad),e.push({type:"box",x:32,z:-152,w:10,d:8}),t.push({id:"potable-uv",name:"Potable UV polish",position:new v(32,4,-152)});const sd=gx();n.add(sd),e.push({type:"box",x:46,z:-152,w:10,d:8}),t.push({id:"potable-uv2",name:"Spare potable UV",position:new v(46,4,-152)});const rd=Hx();n.add(rd),e.push({type:"box",x:8,z:-162,w:10,d:8}),t.push({id:"potpump",name:"Spare potable pump",position:new v(8,4,-162)});const od=mm();n.add(od),e.push({type:"box",x:-58,z:-108,w:10,d:3}),e.push({type:"box",x:-20,z:-100,w:18,d:3}),e.push({type:"box",x:22,z:-128,w:3,d:12}),t.push({id:"berms",name:"Hab dust berms",position:new v(-20,4,-100)});const cd=Z2();n.add(cd),e.push({type:"box",x:68,z:-10,w:16,d:8}),e.push({type:"box",x:-22,z:-88,w:8,d:6}),t.push({id:"battery",name:"Night power store",position:new v(68,4,-10)});const dd=nm();n.add(dd),e.push({type:"box",x:68,z:6,w:16,d:8}),e.push({type:"box",x:-28,z:-138,w:8,d:6}),t.push({id:"battery2",name:"Crew night store",position:new v(68,4,6)});const ld=ym();n.add(ld),e.push({type:"box",x:8,z:-78,w:12,d:7}),t.push({id:"battery3",name:"Hab night store 3",position:new v(8,4,-78)});const hd=fg();n.add(hd),e.push({type:"box",x:-18,z:-78,w:12,d:7}),t.push({id:"battery4",name:"Hab night store 4",position:new v(-18,4,-78)});const ud=Cg();n.add(ud),e.push({type:"box",x:-5,z:-78,w:8,d:6}),t.push({id:"habtrench",name:"Hab-street power trench",position:new v(-5,4,-78)});const fd=k2();n.add(fd),e.push({type:"box",x:-15,z:-8,w:10,d:7}),t.push({id:"spaceport",name:"Methalox spaceport",position:new v(-15,4,-8)});const pd=Qg();n.add(pd),e.push({type:"box",x:-28,z:-8,w:8,d:6}),t.push({id:"ch4hose",name:"Spare CH4 load hose",position:new v(-28,4,-8)});const md=ex();n.add(md),e.push({type:"box",x:-28,z:6,w:8,d:6}),t.push({id:"o2hose",name:"Spare O2 load hose",position:new v(-28,4,6)});const gd=Ex();n.add(gd),e.push({type:"box",x:-42,z:6,w:10,d:8}),t.push({id:"o2pump",name:"Spare O2 transfer pump",position:new v(-42,4,6)});const xd=kx();n.add(xd),e.push({type:"box",x:-42,z:-8,w:10,d:8}),t.push({id:"o2tank",name:"Spare O2 buffer tank",position:new v(-42,4,-8)});const _d=om();n.add(_d),e.push({type:"box",x:20,z:8,w:16,d:12}),t.push({id:"stock",name:"Methalox stockpile",position:new v(20,4,8)});const wd=Cm();n.add(wd),e.push({type:"box",x:36,z:8,w:10,d:8}),t.push({id:"ch4buf",name:"CH4 return buffer",position:new v(36,4,8)});const vd=Pm();n.add(vd),e.push({type:"box",x:36,z:-6,w:10,d:8}),t.push({id:"o2ret",name:"O2 return buffer",position:new v(36,4,-6)});const Md=Zm();n.add(Md),e.push({type:"box",x:50,z:4,w:8,d:18}),t.push({id:"mxberm",name:"Methalox farm berm",position:new v(50,4,4)});const bd=Wg();n.add(bd),e.push({type:"box",x:68,z:6,w:8,d:6}),t.push({id:"mxlight",name:"Methalox farm lights",position:new v(68,4,6)});const yd=zm();n.add(yd),e.push({type:"box",x:-32,z:-22,w:10,d:8}),t.push({id:"pump",name:"Methalox pump house",position:new v(-32,4,-22)});const Sd=Sx();n.add(Sd),e.push({type:"box",x:-32,z:-36,w:10,d:8}),t.push({id:"ch4pump",name:"Spare CH4 transfer pump",position:new v(-32,4,-36)});const Ed=Fx();n.add(Ed),e.push({type:"box",x:-18,z:-36,w:10,d:8}),t.push({id:"ch4tank",name:"Spare CH4 buffer tank",position:new v(-18,4,-36)}),n.add(F2()),n.add(B2()),n.add($i(16,14,-.4)),n.add($i(8,-62,1.2)),n.add($i(30,74,-.2)),n.add($i(-94,-182,.7)),n.add(on(-90,-148,.4,{kind:"ice",loaded:!0})),t.push({id:"rover",name:"Haul rover",position:new v(8,2,-62)}),t.push({id:"haul2",name:"Ice haul at crush",position:new v(-90,3,-148)});const Td=Y2();n.add(Td),e.push({type:"box",x:-64,z:-90,w:10,d:8}),t.push({id:"haul",name:"Ice haul",position:new v(-64,3,-90)});const Ad=A2();n.add(Ad),e.push({type:"box",x:48,z:-86,w:16,d:12}),t.push({id:"workshop",name:"Workshop",position:new v(48,5,-86)});const Rd=Og();n.add(Rd),e.push({type:"box",x:48,z:-70,w:8,d:6}),t.push({id:"shoplight",name:"Workshop lights",position:new v(48,4,-70)});const Cd=vm();n.add(Cd),e.push({type:"box",x:22,z:-80,w:12,d:8}),t.push({id:"depot",name:"Spare-parts depot",position:new v(22,4,-80)});const Pd=fm();n.add(Pd),e.push({type:"box",x:66,z:-74,w:16,d:12}),t.push({id:"workshop2",name:"Workshop bay 2",position:new v(66,5,-74)});const Dd=Lm();n.add(Dd),e.push({type:"box",x:66,z:-90,w:10,d:8}),t.push({id:"press",name:"Sinter press",position:new v(66,4,-90)});const Id=Dx();n.add(Id),e.push({type:"box",x:52,z:-90,w:10,d:8}),t.push({id:"pressdie",name:"Spare sinter press die",position:new v(52,4,-90)});const zd=Xg();n.add(zd),e.push({type:"box",x:66,z:-104,w:12,d:8}),t.push({id:"kiln",name:"Sinter kiln",position:new v(66,4,-104)});const Ld=qg();n.add(Ld),e.push({type:"box",x:80,z:-104,w:8,d:6}),t.push({id:"bricks",name:"Sinter brick pallet",position:new v(80,4,-104)});const Ud=Ax();n.add(Ud),e.push({type:"box",x:80,z:-118,w:10,d:8}),t.push({id:"kilnfeed",name:"Spare kiln-feed hopper",position:new v(80,4,-118)});const Nd=jm();n.add(Nd),e.push({type:"box",x:82,z:-90,w:10,d:8}),t.push({id:"crib",name:"Workshop tool crib",position:new v(82,4,-90)});const Od=Rg();n.add(Od),e.push({type:"box",x:96,z:-90,w:10,d:8}),t.push({id:"rack",name:"Workshop parts rack",position:new v(96,4,-90)});const Fd=jg();n.add(Fd),e.push({type:"box",x:96,z:-104,w:10,d:8}),t.push({id:"welder",name:"Workshop spare welder",position:new v(96,4,-104)});const kd=Ux();n.add(kd),e.push({type:"box",x:96,z:-118,w:10,d:8}),t.push({id:"mill",name:"Workshop spare mill",position:new v(96,4,-118)});const Bd=lx();n.add(Bd),e.push({type:"box",x:110,z:-90,w:10,d:8}),t.push({id:"shopair",name:"Workshop spare air compressor",position:new v(110,4,-90)});const Hd=Wx();n.add(Hd),e.push({type:"box",x:124,z:-90,w:10,d:8}),t.push({id:"grinder",name:"Workshop spare grinder",position:new v(124,4,-90)});const Gd=wx();n.add(Gd),e.push({type:"box",x:110,z:-104,w:10,d:8}),t.push({id:"hoist",name:"Workshop spare hoist",position:new v(110,4,-104)});const Vd=Yx();n.add(Vd),e.push({type:"box",x:124,z:-104,w:10,d:8}),t.push({id:"lathe",name:"Workshop spare lathe",position:new v(124,4,-104)});const Wd=Ox();n.add(Wd),e.push({type:"box",x:110,z:-118,w:10,d:8}),t.push({id:"vise",name:"Workshop spare vise",position:new v(110,4,-118)});const Xd=xg();n.add(Xd),e.push({type:"box",x:82,z:-74,w:16,d:12}),t.push({id:"workshop3",name:"Workshop bay 3",position:new v(82,5,-74)});const qd=_m();n.add(qd),n.add($i(48,-70,.2)),t.push({id:"shelter",name:"Rover dust shelter",position:new v(48,4,-70)});for(const[Gi,Vi]of[[42.8,-73.4],[53.2,-73.4],[42.8,-66.6],[53.2,-66.6]])e.push({type:"cyl",x:Gi,z:Vi,r:.45});const Yd=R2();n.add(Yd),e.push({type:"cyl",x:-18,z:-138,r:3}),t.push({id:"comms",name:"Comms tower",position:new v(-18,16,-138)});const Kd=Vg();n.add(Kd),e.push({type:"box",x:4,z:-138,w:8,d:6}),t.push({id:"commslight",name:"Comms-yard lights",position:new v(4,4,-138)});const Jd=Fm();n.add(Jd),e.push({type:"cyl",x:24,z:-128,r:2.2}),t.push({id:"weather",name:"Weather / dust mast",position:new v(24,12,-128)});const Zd=Jx();n.add(Zd),e.push({type:"box",x:36,z:-128,w:10,d:8}),t.push({id:"wxpack",name:"Spare weather sensor pack",position:new v(36,4,-128)});const $d=q2();n.add($d),e.push({type:"cyl",x:-32,z:-148,r:8.4}),e.push({type:"box",x:-40,z:-154,w:6,d:5}),t.push({id:"earth",name:"Earth dish · 12 min delay",position:new v(-32,12,-148)});const jd=zg();n.add(jd),e.push({type:"box",x:-48,z:-138,w:10,d:12}),t.push({id:"commsberm",name:"Comms dust berm",position:new v(-48,4,-138)});const Qd=gm();n.add(Qd),e.push({type:"cyl",x:-8,z:-162,r:6.2}),t.push({id:"earth2",name:"Backup Earth dish",position:new v(-8,10,-162)});const el=Qm();n.add(el),e.push({type:"box",x:4,z:-148,w:10,d:8}),t.push({id:"commsbatt",name:"Comms night store",position:new v(4,4,-148)});const tl=Pg();n.add(tl),e.push({type:"box",x:16,z:-148,w:10,d:8}),t.push({id:"commsinv",name:"Comms spare inverter",position:new v(16,4,-148)});const nl=qx();n.add(nl),e.push({type:"box",x:16,z:-136,w:10,d:8}),t.push({id:"commslna",name:"Spare Earth-link LNA",position:new v(16,4,-136)});const il=zx();n.add(il),e.push({type:"box",x:28,z:-162,w:10,d:8}),t.push({id:"earthbatt",name:"Spare Earth-link battery",position:new v(28,4,-162)});const al=C2();n.add(al),e.push({type:"cyl",x:-58,z:-158,r:6}),t.push({id:"ice",name:"Ice mining rig",position:new v(-58,8,-158)});const sl=Fg();n.add(sl),e.push({type:"box",x:-46,z:-148,w:8,d:6}),t.push({id:"icelight",name:"Ice-mine lights",position:new v(-46,4,-148)});const rl=ux();n.add(rl),e.push({type:"box",x:-70,z:-148,w:10,d:8}),t.push({id:"drill1",name:"Ice mine 1 spare drill",position:new v(-70,4,-148)});const ol=$m();n.add(ol),e.push({type:"box",x:-40,z:-168,w:10,d:12}),t.push({id:"ice1berm",name:"Ice mine 1 berm",position:new v(-40,4,-168)});const cl=w4();n.add(cl),e.push({type:"box",x:-28,z:-180,w:10,d:12}),t.push({id:"ice1bermsp",name:"Spare ice mine 1 berm",position:new v(-28,4,-180)});const dl=um();n.add(dl),e.push({type:"cyl",x:-78,z:-172,r:6}),t.push({id:"ice2",name:"Ice mine 2",position:new v(-78,8,-172)});const ll=pg();n.add(ll),e.push({type:"box",x:-64,z:-184,w:10,d:12}),t.push({id:"ice2berm",name:"Ice mine 2 berm",position:new v(-64,4,-184)});const hl=v4();n.add(hl),e.push({type:"box",x:-52,z:-196,w:10,d:12}),t.push({id:"ice2bermsp",name:"Spare ice mine 2 berm",position:new v(-52,4,-196)});const ul=Zg();n.add(ul),e.push({type:"box",x:-92,z:-184,w:10,d:8}),t.push({id:"drill2",name:"Ice mine 2 spare drill",position:new v(-92,4,-184)});const fl=_g();n.add(fl),e.push({type:"box",x:-78,z:-156,w:10,d:8}),t.push({id:"melt2",name:"Ice melt still 2",position:new v(-78,5,-156)});const pl=Kx();n.add(pl),e.push({type:"box",x:-92,z:-172,w:10,d:8}),t.push({id:"melt2pump",name:"Spare ice-melt pump 2",position:new v(-92,4,-172)});const ml=bm();n.add(ml),e.push({type:"box",x:-90,z:-158,w:12,d:10}),t.push({id:"ice-depot",name:"Ice crush depot",position:new v(-90,4,-158)});const gl=ug();n.add(gl),e.push({type:"box",x:-102,z:-158,w:10,d:8}),t.push({id:"crushcover",name:"Ice crush cover",position:new v(-102,4,-158)});const xl=Nx();n.add(xl),e.push({type:"box",x:-102,z:-148,w:10,d:8}),t.push({id:"conveyor",name:"Spare ice conveyor",position:new v(-102,4,-148)});const _l=yx();n.add(_l),e.push({type:"box",x:-114,z:-158,w:10,d:8}),t.push({id:"hopper",name:"Spare ice crush hopper",position:new v(-114,4,-158)});const wl=Dg();n.add(wl),e.push({type:"box",x:-90,z:-136,w:10,d:8}),t.push({id:"weigh",name:"Ice haul weigh",position:new v(-90,4,-136)});const vl=U4();n.add(vl),e.push({type:"box",x:-90,z:-124,w:10,d:8}),t.push({id:"weighsp",name:"Spare ice haul weigh",position:new v(-90,4,-124)});const Ml=ox();n.add(Ml),e.push({type:"box",x:-110,z:-136,w:12,d:8}),t.push({id:"haul3",name:"Spare ice haul",position:new v(-110,3,-136)});const bl=Ix();n.add(bl),e.push({type:"box",x:-124,z:-136,w:10,d:8}),t.push({id:"trailer",name:"Spare ice-haul trailer",position:new v(-124,3,-136)});const yl=Im();n.add(yl),e.push({type:"box",x:-58,z:-142,w:10,d:8}),t.push({id:"melt",name:"Ice melt still",position:new v(-58,5,-142)});const Sl=Vx();n.add(Sl),e.push({type:"box",x:-70,z:-136,w:10,d:8}),t.push({id:"meltpump",name:"Spare ice-melt pump",position:new v(-70,4,-136)});const El=sx();n.add(El),e.push({type:"box",x:-46,z:-132,w:10,d:8}),t.push({id:"melt3",name:"Spare ice-melt still",position:new v(-46,4,-132)});const Tl=O2();n.add(Tl),e.push({type:"cyl",x:-82,z:-176,r:2.4}),t.push({id:"survey",name:"Resource survey",position:new v(-88,5,-188)});const Al=Xm();return n.add(Al),e.push({type:"cyl",x:-124,z:-188,r:2.4}),t.push({id:"survey2",name:"West ice survey",position:new v(-124,5,-188)}),n.add(Qt(42,22,.6)),n.add(Qt(39,26,-.4)),n.add(Qt(26,78,2.2)),n.add(Qt(26,68,.5)),n.add(Qt(22,72,-.8)),n.add(Qt(-80,-174,.8)),n.add(Qt(-34,-92,-1.2)),n.add(Qt(-28,-104,.3)),n.add(Qt(16,-120,.6)),n.add(Qt(70,-70,.4)),n.add(Qt(-28,128,1.1)),n.add(N2()),$2(e),n.add(V2()),n.add(W2()),n.add(X2()),{group:n,colliders:e,landmarks:t}}function Jn(n,e,t={}){const i=new I;i.name=t.finished?"pad":"cargo-pad";const a=A(n,e),s=t.finished?20:16,o=t.finished?r.pad:r.graded;if(i.add(c(new z(s,s,.45,48),o,n,a+.15,e)),t.finished){i.add(c(new Ce(s+.4,.55,8,48),r.padRing,n,a+.4,e,Math.PI/2,0,0)),i.add(c(new aa(7.5,8.1,40),r.padRing,n,a+.4,e,-Math.PI/2,0,0)),i.add(c(new aa(13,13.5,40),r.padRing,n,a+.4,e,-Math.PI/2,0,0));for(let l=0;l<12;l++){const h=l/12*Math.PI*2;i.add(c(new f(.35,.55,.35),r.glowPad,n+Math.cos(h)*19.2,a+.55,e+Math.sin(h)*19.2))}}else{i.add(c(new Ce(s+.3,.4,8,36),r.padRing,n,a+.32,e,Math.PI/2,0,0));for(let l=0;l<8;l++){const h=l/8*Math.PI*2;i.add(c(new f(.28,.4,.28),r.glowPad,n+Math.cos(h)*(s-.6),a+.45,e+Math.sin(h)*(s-.6)))}}const d=t.finished?26:21,u=c(new Ce(d,t.finished?2.2:1.8,8,40),r.rust,n,a-.4,e,Math.PI/2,0,0);return u.scale.set(1,.45,1),i.add(u),i}function bi(n=0,e=0,t={}){const i=new I;i.name=t.name||"starship",i.position.set(n,0,e);const a=A(n,e)-3.1,s=36,o=4.4;i.add(c(new z(o,o,s,28),r.steel,0,a+8+s/2,0));const d=c(new wt(o,24,16,0,Math.PI*2,0,Math.PI/2),r.steel,0,a+8+s,0);d.scale.set(1,1.55,1),i.add(d);const u=c(new z(o+.04,o+.04,s*.72,20,1,!0,Math.PI*.55,Math.PI*.9),r.tiles,0,a+8+s*.38,0);i.add(u);const l=c(new z(o+.15,o+.55,3.2,24),r.soot,0,a+6.4,0);i.add(l);for(let p=0;p<3;p++){const g=p/3*Math.PI*2;i.add(c(new z(.55,1.15,2.2,12),r.soot,Math.cos(g)*1.5,a+4.6,Math.sin(g)*1.5))}const h=new f(1.1,7.2,3.6);i.add(c(h,r.steelDark,-o-.2,a+14,0,0,0,.18)),i.add(c(h,r.steelDark,o+.2,a+14,0,0,0,-.18));const m=new f(.45,4.2,2.4);i.add(c(m,r.steelDark,-o+.2,a+40,1.2,.15,0,.4)),i.add(c(m,r.steelDark,o-.2,a+40,1.2,.15,0,-.4));for(let p=0;p<6;p++){const g=p/6*Math.PI*2+.2,M=new I,b=c(new f(.22,8.2,.22),r.steelDark,0,0,0,0,0,.72),w=c(new f(1.3,.18,.9),r.steel,3.4,-3.7,0);M.add(b,w),M.position.set(Math.cos(g)*3.2,a+7.6,Math.sin(g)*3.2),M.rotation.y=-g,i.add(M)}for(let p=0;p<5;p++)i.add(c(new f(.7,.35,.08),r.tiles,0,a+28+p*2.1,o+.05));if(i.add(c(new f(1.6,.12,.12),r.glowWarm,0,a+44.5,0)),t.cargoOpen){i.add(c(new f(2.4,6.2,3.4),r.soot,-o+.4,a+16.4,0)),i.add(c(new f(.12,6.4,3.6),r.steel,-o-2.1,a+16.6,2,0,1.15,0));const p=a+13.2,g=A(n,e)+.22,M=-o-.3,b=-o-12.4,w=Math.hypot(M-b,p-g),x=Math.atan2(p-g,M-b);i.add(c(new f(w,.16,3.1),r.steelDark,(M+b)/2,(p+g)/2,0,0,0,x)),i.add(c(new f(10.5,.18,.18),r.lattice,-7.2,a+22.5,0,0,0,.55)),i.add(c(new z(.05,.05,7.2,6),r.cable,-12.2,a+16.2,0)),i.add(c(new f(1.5,1.3,1.5),r.crate,-12.2,a+12.4,0)),i.add(_("CARGO","#1a100c","#f0c089",3.4,.9,-o-.1,a+24,0,-Math.PI/2))}if(t.crewHab){const p=a+13;i.add(c(new z(1.2,1.2,2.7,14),r.habDark,0,p,o+1.35,Math.PI/2,0,0)),i.add(c(new Ce(1.22,.09,6,16),r.steel,0,p,o+.28)),i.add(c(new Ce(1.22,.09,6,16),r.steel,0,p,o+2.55)),i.add(c(new f(1.05,1.75,.1),r.steelDark,0,p,o+2.72)),i.add(c(new f(3.4,.14,2.6),r.steelDark,0,p-1.28,o+2.9)),i.add(c(new f(.1,1.15,2.5),r.steel,-1.6,p-.65,o+2.9)),i.add(c(new f(.1,1.15,2.5),r.steel,1.6,p-.65,o+2.9));const g=p-1.28,M=A(n,e)+.28,b=o+3.6,w=o+13.2,x=11;for(let L=0;L<x;L++){const U=L/(x-1);i.add(c(new f(2.15,.12,.95),r.steelDark,0,g+(M-g)*U,b+(w-b)*U))}const P=Math.hypot(b-w,g-M),C=Math.atan2(g-M,w-b);i.add(c(new f(2.25,.08,P),r.steel,0,(g+M)/2-.12,(b+w)/2,C,0,0)),i.add(c(new f(.08,.85,P),r.steel,-1.12,(g+M)/2+.35,(b+w)/2,C,0,0)),i.add(c(new f(.08,.85,P),r.steel,1.12,(g+M)/2+.35,(b+w)/2,C,0,0));const S=w+1.55,H=A(n,e)+1.35;i.add(c(new z(1.35,1.35,2.5,12),r.habDark,0,H,S)),i.add(c(new f(1.05,1.7,.1),r.steelDark,0,H+.05,S+1.4)),i.add(c(new Ce(1.38,.07,6,14),r.steel,0,H+1.28,S,Math.PI/2,0,0)),i.add(c(new f(2.2,.12,2.2),r.steelDark,0,A(n,e)+.12,S));for(let L=0;L<5;L++)i.add(c(new f(.85,.48,.08),r.glowWarm,1.55,a+16.5+L*3.4,o+.06)),i.add(c(new f(.08,.48,.85),r.glowWarm,o+.06,a+16.5+L*3.4,-1.35));i.add(c(new z(.55,.55,.2,12),r.steel,2.55,a+14.2,o+.04,Math.PI/2,0,0)),i.add(c(new Ce(.52,.06,6,12),r.steelDark,2.55,a+14.2,o+.14)),i.add(_("CREW HAB","#1a100c","#f0c089",3.4,.85,0,p+2.55,o+2.35)),i.add(_("AIRLOCK","#1a100c","#f0c089",2.3,.55,1.85,p+.15,o+2.05,Math.PI/2))}return i}function x2(){const n=new I;n.name="crates";const e=[[10,8,0],[12.2,8.4,.4],[10.4,10.6,1.6],[13.5,6.2,-.3],[-12,9,.5],[-14,7.2,2.1],[8.5,-11,0],[6.4,-12.5,1.1]];for(const[t,i,a]of e)oe(n,t,i,a);return n}function _2(){const n=new I;n.name="cargo-offload";const e=[[40,22,.2],[38.2,24.1,-.3],[41.4,26.2,.8],[36.5,21.4,.1],[37.8,27.6,1.4],[34.8,24.8,-.5],[39.2,19.6,.6],[35.4,19.2,.15]];for(const[s,o,d]of e)oe(n,s,o,d);oe(n,38.6,22.8,.1,1.15),oe(n,33.2,20.4,.25,1.2),oe(n,31.4,22.1,-.2,1.05);const[t,i,a]=Pt(36,23.5,.08);return n.add(c(new f(8.5,.12,4.2),r.steelDark,t,i,a,0,.15,0)),n.add(_("HAB KIT","#1a100c","#f0c089",2.6,.7,33.2,A(33.2,20.4)+2.5,20.4,.35)),n}function w2(){const n=new I;n.name="approach";const e=[{fx:0,fz:118,tx:0,tz:32,n:7},{fx:52,fz:90,tx:52,tz:42,n:5},{fx:36,fz:128,tx:36,tz:90,n:4},{fx:-24,fz:92,tx:-24,tz:60,n:4},{fx:-48,fz:118,tx:-48,tz:86,n:4},{fx:78,fz:104,tx:78,tz:74,n:4},{fx:-16,fz:178,tx:-16,tz:154,n:5}];for(const t of e){const i=Math.atan2(t.tx-t.fx,t.tz-t.fz);for(let a=0;a<t.n;a++){const s=a/(t.n-1),o=t.fx+(t.tx-t.fx)*s,d=t.fz+(t.tz-t.fz)*s,u=A(o,d),l=new I;l.add(c(new f(2.5,.16,.34),r.glowPad,-.75,0,0,0,.5,0)),l.add(c(new f(2.5,.16,.34),r.glowPad,.75,0,0,0,-.5,0)),l.position.set(o,u+.14,d),l.rotation.y=i,n.add(l)}}return n}function v2(){const n=new I;n.name="prep-pad";const e=22,t=82,i=A(e,t);n.add(c(new z(14,14,.28,36),r.graded,e,i+.08,t));const a=c(new Ce(16.2,1.7,8,28,Math.PI*1.35),r.rust,e,i-.15,t,Math.PI/2,.5,0);a.scale.set(1,.42,1),n.add(a);for(let o=0;o<8;o++){const d=o/8*Math.PI*2+.2,u=e+Math.cos(d)*15.2,l=t+Math.sin(d)*15.2,h=A(u,l);n.add(c(new f(.08,1.7,.08),r.steel,u,h+.85,l)),n.add(c(new f(.28,.16,.06),r.glowPad,u,h+1.62,l,0,d,0))}const s=[[12,74],[30,88],[14,90]];for(const[o,d]of s){const u=c(new ut(2.2,0),r.rust,o,A(o,d)+.9,d);u.scale.set(1.2,.65,1.05),n.add(u)}return n.add(_("LANDING PREP","#1a100c","#f0c089",4.4,1,e+10.5,i+2.4,t+2,-.6)),n.add(c(new f(.12,2.4,.12),r.steelDark,e+10.5,i+1.2,t+2)),n}function M2(){const n=new I;n.name="solar";const e=10,t=8;for(let o=0;o<e;o++)for(let d=0;d<t;d++){const u=58+o*5.4,l=-22-d*6.2,h=A(u,l),m=c(new f(.18,1.6,.18),r.solarFrame,u,h+.8,l),p=c(new f(4.6,.08,2.3),r.solar,u,h+1.55,l,-.55,.15,0),g=c(new f(4.75,.05,2.42),r.solarFrame,u,h+1.5,l,-.55,.15,0);n.add(m,p,g)}for(let o=0;o<5;o++){const d=58+o*5.4,u=-22-8*6.2,l=A(d,u);n.add(c(new f(.18,1.6,.18),r.solarFrame,d,l+.8,u)),o<2&&n.add(c(new f(4.6,.08,2.3),r.solar,d+1.1,l+.22,u+1.5,1.2,.25,0))}const[i,a,s]=Pt(54,-18,.7);return n.add(c(new f(2.2,1.4,1.4),r.habDark,i,a,s)),n.add(_("POWER","#111111","#f4e6c8",2,.55,i,a+.2,s+.75)),n}function b2(){const n=new I;n.name="power-run";const e=54,t=-18,i=-54,a=-16,s=[],o=10;for(let d=0;d<=o;d++){const u=d/o,l=e+(i-e)*u,h=t+(a-t)*u,m=A(l,h);n.add(c(new z(.09,.11,4.4,6),r.steelDark,l,m+2.2,h)),n.add(c(new f(1.15,.08,.08),r.steel,l,m+4.35,h)),s.push({x:l,y:m+4.32,z:h})}for(let d=0;d<s.length-1;d++){const u=s[d],l=s[d+1];for(const h of[-.38,.38]){const m=new Bi([new v(u.x,u.y,u.z+h),new v((u.x+l.x)/2,(u.y+l.y)/2-.75,(u.z+l.z)/2+h),new v(l.x,l.y,l.z+h)]),p=new ot(new ai(m,6,.035,4,!1),r.cable);p.castShadow=!1,n.add(p)}}return n}function y2(){const n=new I;n.name="water-feed";const e=-58,t=-150,i=-68,a=-26,s=12,o=[];for(let l=0;l<=s;l++){const h=l/s,m=e+(i-e)*h,p=t+(a-t)*h,g=A(m,p)+1.15;o.push(new v(m,g,p)),l%2===0&&n.add(c(new f(.16,1.1,.16),r.steelDark,m,A(m,p)+.55,p))}const d=new Bi(o),u=new ot(new ai(d,24,.16,6,!1),r.pipe);return u.castShadow=!1,n.add(u),n}function S2(){const n=new I;n.name="isru";const e=-68,t=-16,i=A(e,t);n.add(c(new f(30,.4,22),r.concrete,e,i+.15,t));const a=c(new z(1.8,2,13,12),r.steelDark,e+4,i+6.8,t);n.add(a),n.add(c(new Ce(2.5,.18,6,16),r.steel,e+4,i+10.2,t,Math.PI/2,0,0)),n.add(c(new Ce(2.5,.18,6,16),r.steel,e+4,i+7.4,t,Math.PI/2,0,0)),n.add(_("SABATIER","#1a100c","#f0c089",5.2,1.15,e+6.1,i+8.2,t,Math.PI/2));const s=c(new z(3,3,13,20),r.tankCh4,e-8,i+7.1,t+5.4,0,0,Math.PI/2),o=c(new z(3,3,13,20),r.tankO2,e-8,i+7.1,t-5.2,0,0,Math.PI/2);n.add(s,o),n.add(_("CH4","#6a2208","#f4e6c8",3.6,1,e-1.2,i+7.1,t+5.4)),n.add(_("O2","#2a3340","#e8eef4",3.6,1,e-1.2,i+7.1,t-5.2)),n.add(c(new z(2.2,2.2,7.2,16),r.pipe,e-4,i+4,t-10.4)),n.add(_("H2O","#1a2830","#d6e6ef",2.6,.75,e-4,i+5.6,t-8.1));const d=c(new ut(2.1,0),r.ice,e+1.5,i+1.1,t-10.2);return d.scale.set(1.15,.6,1),n.add(d),n.add(c(new z(.55,.55,7.5,10),r.steel,e+10.5,i+4.1,t-5.4)),n.add(c(new z(2.3,.7,2.6,14),r.steelDark,e+10.5,i+8.8,t-5.4)),n.add(c(new Ce(2.05,.1,6,16),r.steel,e+10.5,i+10.15,t-5.4,Math.PI/2,0,0)),n.add(_("CO2","#1a100c","#f0c089",2.4,.7,e+10.5,i+5.8,t-3.2)),n.add(c(new f(4.2,3,3.2),r.habDark,e+10,i+1.8,t+4.2)),n.add(_("POWER","#111111","#f4e6c8",2.2,.55,e+10,i+2.6,t+5.9)),n.add(c(new z(.16,.16,10,8),r.pipe,e+7.2,i+3.4,t-2.6,0,0,Math.PI/2)),n.add(c(new z(.16,.16,9,8),r.pipe,e-1.5,i+3.6,t+2.4,0,0,Math.PI/2)),n.add(c(new z(.16,.16,8.5,8),r.steel,e-1.5,i+3.6,t-2.2,0,0,Math.PI/2)),n.add(c(new z(.14,.14,6.4,8),r.cable,e+12.2,i+3.8,t+1.2,0,0,Math.PI/2)),n}function E2(){const n=new I;n.name="habs";const e=[[-14,-104,0],[2,-104,0],[-6,-116,1.57]];for(const[u,l,h]of e){const m=A(u,l),p=c(new z(3.1,3.1,12,18),r.hab,u,m+3.2,l,0,0,Math.PI/2);p.rotation.y=h,n.add(p),n.add(c(new wt(3.1,14,10),r.hab,u+Math.cos(h)*6,m+3.2,l+Math.sin(h)*6)),n.add(c(new wt(3.1,14,10),r.hab,u-Math.cos(h)*6,m+3.2,l-Math.sin(h)*6));for(let g=-2;g<=2;g++){const M=u+Math.cos(h)*g*2,b=l+Math.sin(h)*g*2;n.add(c(new f(.9,.7,.08),r.glowWarm,M,m+3.3,b+(h===0?3.15:0)))}}const[t,i,a]=Pt(-6,-96,1.4);n.add(c(new z(1.5,1.5,2.6,12),r.habDark,t,i,a)),n.add(c(new f(1.1,1.8,.12),r.steelDark,t,i+.1,a+1.5));const[s,o,d]=Pt(-6,-108,6.8);return n.add(c(new wt(4.4,18,12,0,Math.PI*2,0,Math.PI/2),r.hab,s,o,d)),n.add(_("HAB 1","#1a100c","#f0c089",2.6,.7,-6,A(-6,-96)+3.6,-94.4)),n}function T2(){const n=new I;n.name="greenhouse";const e=22,t=-112,i=A(e,t);n.add(c(new f(15.2,.25,8.6),r.concrete,e,i+.1,t));const a=new ot(new z(4.15,4.15,14.2,18,1,!1,0,Math.PI),r.glass);a.rotation.z=Math.PI/2,a.position.set(e,i+4.1,t),a.castShadow=!1,n.add(a),n.add(c(new f(14.2,.1,8.4),r.solarFrame,e,i+4.15,t));for(let u=-2;u<=2;u++)n.add(c(new Ce(4.12,.055,6,16,Math.PI),r.solarFrame,e+u*2.7,i+4.1,t,0,Math.PI/2,0));for(let u=-2;u<=2;u++){n.add(c(new f(2.05,.26,6.6),r.soil,e+u*2.35,i+.36,t));for(let l=-2;l<=2;l++){const h=l%2===0?r.plant:r.plantLeaf;n.add(c(new f(1.45,.52,.82),h,e+u*2.35,i+.72,t+l*1.12)),n.add(c(new f(.55,.42,.4),r.plantLeaf,e+u*2.35+.2,i+1.05,t+l*1.12))}n.add(c(new f(1.7,.05,6.1),r.glowWarm,e+u*2.35,i+3.55,t))}n.add(c(new f(1.2,2,.15),r.habDark,e-7.1,i+1.2,t));const s=e+10.4,o=t,d=A(s,o);return n.add(c(new f(5.4,.2,4.6),r.concrete,s,d+.08,o)),n.add(c(new z(.52,.52,5.4,10),r.steel,s+1.15,d+2.9,o-1.05)),n.add(c(new z(1.75,.55,1.7,14),r.steelDark,s+1.15,d+6.2,o-1.05)),n.add(c(new Ce(1.5,.08,6,14),r.steel,s+1.15,d+7.1,o-1.05,Math.PI/2,0,0)),n.add(_("CO2","#1a100c","#f0c089",1.9,.5,s+1.15,d+3.7,o+.35)),n.add(c(new f(2.5,1.85,1.9),r.habDark,s-.7,d+1.08,o+.95)),n.add(_("COMPRESS","#1a100c","#f0c089",2.35,.55,s-.7,d+1.55,o+1.95)),n.add(c(new z(.14,.14,6.4,8),r.pipe,e+6.6,i+1.55,t,0,0,Math.PI/2)),n.add(c(new z(.68,.68,2.35,12),r.tankO2,e-5.5,i+1.45,t+5.15)),n.add(_("O2","#2a3340","#e8eef4",1.35,.42,e-5.5,i+1.65,t+5.95)),n.add(_("LIFE SUPPORT","#1a100c","#f0c089",3.7,.7,e,i+5.55,t+.15)),n.add(_("COMPRESSED CO2","#1a100c","#d6b48a",3.5,.55,e,i+4.75,t+.15)),n}function $i(n,e,t){const i=new I;i.name="rover";const a=A(n,e);i.position.set(n,a,e),i.rotation.y=t,i.add(c(new f(3.4,1.1,2.1),r.rover,0,1.35,0)),i.add(c(new f(1.4,.7,1.5),r.roverDark,1.2,2.1,0)),i.add(c(new f(2.2,.08,1.6),r.solar,0,2,0)),i.add(c(new z(.07,.07,2.1,6),r.steel,-.4,2.9,0)),i.add(c(new f(.25,.2,.25),r.roverDark,-.4,4,0));const s=new z(.55,.55,.35,12),o=[[-1.2,.55,1.15],[.1,.55,1.15],[1.2,.55,1.15],[-1.2,.55,-1.15],[.1,.55,-1.15],[1.2,.55,-1.15]];for(const[d,u,l]of o)i.add(c(s,r.roverDark,d,u,l,Math.PI/2,0,0));return i}function Qt(n,e,t){const i=new I;i.name="optimus";const a=A(n,e);return i.position.set(n,a,e),i.rotation.y=t,i.add(c(new f(.42,.62,.24),r.robot,0,1.28,0)),i.add(c(new z(.14,.15,.22,10),r.robot,0,1.72,0)),i.add(c(new f(.16,.08,.04),r.steelDark,0,1.74,.14)),i.add(c(new f(.12,.48,.12),r.robot,-.28,1.22,0)),i.add(c(new f(.12,.48,.12),r.robot,.28,1.22,0)),i.add(c(new f(.14,.62,.14),r.steelDark,-.1,.62,0)),i.add(c(new f(.14,.62,.14),r.steelDark,.1,.62,0)),i}function A2(){const n=new I;n.name="workshop";const e=48,t=-86,i=A(e,t),a=c(new z(6.2,6.2,16,16,1,!1,0,Math.PI),r.habDark,e,i+3.4,t);return a.rotation.z=Math.PI/2,n.add(a),n.add(c(new f(16,.3,10),r.concrete,e,i+.1,t)),n.add(c(new f(.2,4.2,6.5),r.steelDark,e-7.8,i+2.2,t)),n.add(c(new f(2.4,1.1,1.4),r.crate,e+2,i+.8,t+1.5)),n.add(c(new f(4.6,.16,.16),r.steel,e+1.2,i+.35,t-2.8)),n.add(c(new f(4.6,.16,.16),r.steel,e+1.2,i+.55,t-3.05)),n.add(_("WORKSHOP","#1a100c","#f0c089",3.6,.85,e,i+5.6,t+.2)),n}function R2(){const n=new I;n.name="comms";const e=-18,t=-138,i=A(e,t);for(let s=0;s<8;s++)n.add(c(new f(.18,3.2,.18),r.lattice,e-.7,i+1.6+s*3,t-.7)),n.add(c(new f(.18,3.2,.18),r.lattice,e+.7,i+1.6+s*3,t-.7)),n.add(c(new f(.18,3.2,.18),r.lattice,e-.7,i+1.6+s*3,t+.7)),n.add(c(new f(.18,3.2,.18),r.lattice,e+.7,i+1.6+s*3,t+.7)),n.add(c(new f(1.6,.1,.1),r.lattice,e,i+3+s*3,t-.7)),n.add(c(new f(1.6,.1,.1),r.lattice,e,i+3+s*3,t+.7));const a=c(new wt(3.2,16,10,0,Math.PI*2,0,Math.PI/2.4),r.steel,e,i+26.5,t,-.7,.4,0);return n.add(a),n.add(c(new z(.08,.08,2.2,6),r.steelDark,e+.4,i+27.4,t+1.1,.6,0,0)),n}function C2(){const n=new I;n.name="ice-mine";const e=-58,t=-158,i=A(e,t);n.add(c(new f(8,.3,8),r.concrete,e,i+.1,t)),n.add(c(new f(.28,14,.28),r.lattice,e-2.2,i+7,t-2.2)),n.add(c(new f(.28,14,.28),r.lattice,e+2.2,i+7,t-2.2)),n.add(c(new f(.28,14,.28),r.lattice,e-2.2,i+7,t+2.2)),n.add(c(new f(.28,14,.28),r.lattice,e+2.2,i+7,t+2.2)),n.add(c(new f(5.2,.25,5.2),r.steelDark,e,i+14.2,t)),n.add(c(new z(.35,.55,9,10),r.steel,e,i+5,t)),n.add(c(new ii(.7,1.6,8),r.soot,e,i+.9,t));const a=c(new ut(3.4,0),r.ice,e+7.5,i+1.6,t+1.2);return a.scale.set(1.3,.7,1.1),n.add(a),n.add(c(new f(6,.35,1.1),r.steelDark,e+3.4,i+1.4,t,0,0,-.18)),n.add(_("ICE","#1a2830","#d6e6ef",2.2,.65,e,i+8.4,t+2.6)),n}function Za(n,e,t,i,a){const s=A(e,t);n.add(c(new z(.05,.07,3.2,6),r.steelDark,e,s+1.6,t)),n.add(c(new f(1.15,.7,.04),a,e+.58,s+2.75,t)),n.add(_(i,"#1a100c","#f0c089",1.45,.4,e+.58,s+2.75,t+.05))}function Yr(n,e,t,i){const a=A(e,t);n.add(c(new f(.07,1.55,.07),r.steelDark,e,a+.78,t)),n.add(c(new f(.38,.22,.03),i,e+.2,a+1.42,t))}function Cr(n,e,t,i=0){const a=A(e,t);n.add(c(new f(.85,.55,.65),r.crate,e,a+.32,t,0,i,0)),n.add(c(new f(.88,.06,.68),r.steelDark,e,a+.62,t,0,i,0))}function P2(){const n=new I;n.name="solar-2";const e=6,t=4;for(let o=0;o<e;o++)for(let d=0;d<t;d++){const u=98+o*5.4,l=-74-d*6.2,h=A(u,l),m=c(new f(.18,1.6,.18),r.solarFrame,u,h+.8,l),p=c(new f(4.6,.08,2.3),r.solar,u,h+1.55,l,-.55,.15,0),g=c(new f(4.75,.05,2.42),r.solarFrame,u,h+1.5,l,-.55,.15,0);n.add(m,p,g)}const[i,a,s]=Pt(96,-72,.7);return n.add(c(new f(2.2,1.4,1.4),r.habDark,i,a,s)),n.add(_("POWER","#111111","#f4e6c8",2,.55,i,a+.2,s+.75)),n}function D2(){const n=new I;n.name="solar-tie";const e=90,t=-48,i=112,a=-83,s=[],o=5;for(let d=0;d<=o;d++){const u=d/o,l=e+(i-e)*u,h=t+(a-t)*u,m=A(l,h);n.add(c(new z(.09,.11,4.4,6),r.steelDark,l,m+2.2,h)),n.add(c(new f(1.15,.08,.08),r.steel,l,m+4.35,h)),s.push({x:l,y:m+4.32,z:h})}for(let d=0;d<s.length-1;d++){const u=s[d],l=s[d+1];for(const h of[-.38,.38]){const m=new Bi([new v(u.x,u.y,u.z+h),new v((u.x+l.x)/2,(u.y+l.y)/2-.65,(u.z+l.z)/2+h),new v(l.x,l.y,l.z+h)]),p=new ot(new ai(m,6,.035,4,!1),r.cable);p.castShadow=!1,n.add(p)}}return n}function I2(){const n=new I;n.name="hab-assembly";const e=-32,t=-98,i=A(e,t);n.add(c(new f(18,.22,14),r.concrete,e,i+.08,t));const a=[[-5,-2.2],[5,-2.2],[-5,2.2],[5,2.2]];for(const[o,d]of a)n.add(c(new z(.18,.28,1.85,8),r.steelDark,e+o,i+1.02,t+d)),n.add(c(new f(.72,.12,.72),r.steel,e+o,i+.14,t+d)),n.add(c(new f(.55,.1,.55),r.steel,e+o,i+1.96,t+d));const s=i+3.55;n.add(c(new z(3,3,11,16),r.hab,e,s,t,0,0,Math.PI/2)),n.add(c(new wt(3,14,10),r.hab,e-5.5,s,t)),n.add(c(new wt(3,14,10,0,Math.PI*2,0,Math.PI/2),r.hab,e+8.4,i+1.55,t+.45,.22,.35,.12)),n.add(c(new z(1.35,1.35,2.4,12),r.habDark,e,s,t+4.15,Math.PI/2,0,0)),n.add(c(new f(1,1.65,.1),r.steelDark,e,s,t+5.45)),n.add(c(new Ce(1.38,.08,6,14),r.steel,e,s,t+3.05,0,0,0));for(const[o,d]of[[-7.2,4.6],[6.8,4.8],[-6.4,-5.2]])n.add(c(new f(.12,3.6,.12),r.lattice,e+o,i+1.9,t+d)),n.add(c(new f(.12,3.6,.12),r.lattice,e+o+1.4,i+1.9,t+d)),n.add(c(new f(1.6,.08,.08),r.lattice,e+o+.7,i+3.7,t+d));return oe(n,e-8.2,t+6.2,.2),oe(n,e-6.3,t+7.4,-.35),oe(n,e+7.1,t-5.6,.5,1.1),oe(n,e+5.4,t-6.4,.15),n.add(_("HAB KIT","#1a100c","#f0c089",3,.75,e,i+6.4,t+3.2)),n.add(_("AIRLOCK","#1a100c","#f0c089",2.2,.55,e+2.4,s+.2,t+4.2,Math.PI/2)),n}function un(n,e,t,i,a={}){const s=A(e,t),o=a.r||2.85,d=a.len||10.4,u=a.onStands?s+3.4:s+3.05,l=Math.cos(i),h=Math.sin(i);if(a.onStands)for(const[p,g]of[[-4.1,-2.05],[4.1,-2.05],[-4.1,2.05],[4.1,2.05]]){const M=e+l*p-h*g,b=t+h*p+l*g;n.add(c(new z(.16,.26,1.75,8),r.steelDark,M,s+.98,b)),n.add(c(new f(.7,.12,.7),r.steel,M,s+.14,b)),n.add(c(new f(.52,.1,.52),r.steel,M,s+1.9,b))}else for(const[p,g]of[[-3.6,0],[3.6,0]]){const M=e+l*p-h*g,b=t+h*p+l*g;n.add(c(new f(1.6,.55,1.15),r.steelDark,M,s+.38,b,0,i,0))}const m=c(new z(o,o,d,16),r.hab,e,u,t,0,0,Math.PI/2);if(m.rotation.y=i,n.add(m),!a.partial)n.add(c(new wt(o,14,10),r.hab,e+l*(d/2),u,t+h*(d/2))),n.add(c(new wt(o,14,10),r.hab,e-l*(d/2),u,t-h*(d/2)));else{n.add(c(new wt(o,14,10),r.hab,e-l*(d/2),u,t-h*(d/2)));const p=e+l*(d/2+2.3),g=t+h*(d/2+2.3);n.add(c(new wt(o,14,10,0,Math.PI*2,0,Math.PI/2),r.hab,p,s+1.45,g,.22,.3,.1))}for(let p=-2;p<=2;p++){const g=e+l*p*1.75,M=t+h*p*1.75;n.add(c(new f(.8,.55,.08),r.glowWarm,g-h*o,u+.08,M+l*o))}if(a.airlock){const p=e-h*(o+1.15),g=t+l*(o+1.15);n.add(c(new z(1.15,1.15,2.2,12),r.habDark,p,u,g,Math.PI/2,i,0)),n.add(c(new f(1,1.6,.1),r.steelDark,p-h*1.15,u,g+l*1.15,0,i,0)),n.add(c(new Ce(1.18,.07,6,14),r.steel,p+h*.2,u,g-l*.2,0,i,0)),n.add(_("AIRLOCK","#1a100c","#f0c089",2.15,.5,p-h*.2,u+1.45,g+l*.2,i))}a.label&&n.add(_(a.label,"#1a100c","#f0c089",2.7,.65,e,u+o+.55,t+.15,i))}function z2(){const n=new I;n.name="pressure-habs";const e=A(-46,-101);n.add(c(new f(28,.2,22),r.concrete,-50,e+.06,-101)),un(n,-46,-108,0,{airlock:!0,label:"HAB 2"}),un(n,-46,-94,0,{onStands:!0,airlock:!0,label:"HAB KIT"});const t=A(-46,-101)+3.15;return n.add(c(new z(1.15,1.15,8.2,12),r.habDark,-46,t,-101,Math.PI/2,0,0)),n.add(c(new Ce(1.2,.08,6,14),r.steel,-46,t,-105.1,Math.PI/2,0,0)),n.add(c(new Ce(1.2,.08,6,14),r.steel,-46,t,-96.9,Math.PI/2,0,0)),n.add(_("CONNECT","#1a100c","#f0c089",2.4,.5,-46,t+1.55,-101)),un(n,-58,-102,Math.PI/2,{onStands:!0,partial:!0,label:"MOD"}),oe(n,-54.5,-110.2,.25),oe(n,-52.8,-111.4,-.3,1.08),oe(n,-61.2,-96.4,.4),oe(n,-40.6,-90.8,.15,1.05),n}function zt(n,e,t){const i=new I;i.name="eva";const a=A(n,e);return i.position.set(n,a,e),i.rotation.y=t,i.add(c(new f(.56,.8,.4),r.suit,0,1.46,0)),i.add(c(new f(.44,.5,.24),r.suitDark,0,1.52,-.3)),i.add(c(new wt(.21,12,10),r.suit,0,2.04,.02)),i.add(c(new wt(.165,10,8,0,Math.PI*2,0,Math.PI*.58),r.visor,0,2.04,.1)),i.add(c(new f(.17,.6,.17),r.suit,-.4,1.36,.04)),i.add(c(new f(.17,.6,.17),r.suit,.4,1.36,.04)),i.add(c(new f(.2,.76,.2),r.suitDark,-.15,.7,0)),i.add(c(new f(.2,.76,.2),r.suitDark,.15,.7,0)),i}function L2(n,e,t,i){const a=A(e,t),s=new I;s.position.set(e,a,t),s.rotation.y=i,s.add(c(new f(1.2,.18,.72),r.steelDark,0,.62,0)),s.add(c(new f(1.15,.28,.68),r.crate,0,.86,0)),s.add(c(new f(.08,.55,.08),r.steel,-.48,.32,.26)),s.add(c(new f(.08,.55,.08),r.steel,.48,.32,.26)),s.add(c(new f(.08,.55,.08),r.steel,-.48,.32,-.26)),s.add(c(new f(.08,.55,.08),r.steel,.48,.32,-.26));const o=new z(.12,.12,.1,10);s.add(c(o,r.roverDark,-.48,.12,.3,Math.PI/2,0,0)),s.add(c(o,r.roverDark,.48,.12,.3,Math.PI/2,0,0)),s.add(c(o,r.roverDark,-.48,.12,-.3,Math.PI/2,0,0)),s.add(c(o,r.roverDark,.48,.12,-.3,Math.PI/2,0,0)),s.add(c(new f(.06,.7,.06),r.steel,-.22,1.3,.08)),s.add(c(new f(.06,.55,.06),r.steel,.18,1.22,-.06)),s.add(c(new f(.22,.12,.12),r.steelDark,-.22,1.68,.08)),n.add(s)}function U2(n,e,t,i){const a=A(e,t),s=new I;s.position.set(e,a,t),s.rotation.y=i,s.add(c(new f(.85,2.45,.32),r.steelDark,0,1.32,0)),s.add(c(new Ce(.42,.07,8,14),r.steel,0,1.58,.22)),s.add(c(new z(.38,.38,.1,12),r.habDark,0,1.58,.18,Math.PI/2,0,0)),s.add(c(new f(.7,.16,.55),r.steel,0,.12,.05)),n.add(s)}function N2(){const n=new I;n.name="eva-presence",n.add(zt(2.4,12.2,rn(2.4,12.2,0,7))),n.add(zt(-2.2,11.5,rn(-2.2,11.5,0,7))),n.add(zt(3.8,15.6,.35)),n.add(zt(.6,18.2,Math.PI)),L2(n,4.3,14.8,.4),U2(n,-3.9,9.1,.2),oe(n,5.4,13.2,.2,.85);const e=A(5.1,16.4);return n.add(c(new f(.1,2.2,.1),r.steelDark,5.1,e+1.1,16.4)),n.add(_("EVA PREP","#1a100c","#f0c089",2.3,.55,5.1,e+2.45,16.4,-.35)),n}function O2(){const n=new I;n.name="survey";const e=-82,t=-176,i=A(e,t);for(let l=0;l<3;l++){const h=l/3*Math.PI*2+.4,m=Math.cos(h)*.62,p=Math.sin(h)*.62;n.add(c(new f(.08,2.5,.08),r.steelDark,e+m,i+1.15,t+p,.32*Math.cos(h),0,.32*Math.sin(h)))}n.add(c(new f(.58,.32,.48),r.roverDark,e,i+2.28,t)),n.add(c(new z(.04,.04,1.35,6),r.steel,e,i+3.08,t)),n.add(c(new f(.22,.12,.22),r.steelDark,e,i+3.78,t)),n.add(c(new f(.12,2.2,.12),r.steelDark,e+1.15,i+1.1,t+.2)),n.add(_("SURVEY","#1a100c","#f0c089",2.6,.7,e+.2,i+3.55,t+1.15));const a=[[-108,-210],[-98,-210],[-88,-210],[-78,-210],[-68,-210],[-108,-198],[-98,-198],[-88,-198],[-78,-198],[-68,-198],[-108,-186],[-98,-186],[-88,-186],[-78,-186],[-68,-186],[-108,-174],[-98,-174],[-88,-174],[-78,-174],[-68,-174]];for(let l=0;l<a.length;l++){const[h,m]=a[l];Yr(n,h,m,l%3===0?r.flagIce:r.flagDeposit)}Za(n,-96,-198,"ICE",r.flagIce),Za(n,-72,-204,"H2O",r.flagIce),Za(n,-104,-176,"DEPOSIT",r.flagDeposit);const s=[[-90,-184,.2],[-88.4,-182.6,-.4],[-91.2,-181.8,.7],[-86.6,-185.2,.1]];for(const[l,h,m]of s)Cr(n,l,h,m);oe(n,-84.5,-180.4,.15,.85),n.add(_("SAMPLES","#1a2830","#d6e6ef",2.2,.55,-90,A(-90,-184)+1.55,-184));const o={x:-60,z:-162},d={x:-100,z:-200},u=14;for(let l=0;l<u;l++){const h=l/(u-1),m=o.x+(d.x-o.x)*h,p=o.z+(d.z-o.z)*h,g=A(m,p),M=Math.atan2(d.x-o.x,d.z-o.z);for(const b of[-.55,.55]){const w=Math.cos(M)*b,x=-Math.sin(M)*b,P=c(new f(.42,.05,.85),r.track,m+w,g+.04,p+x,0,M,0);P.castShadow=!1,n.add(P)}}return n}function Z(n,e,t,i=.14){const a=[];for(let d=0;d<e.length;d++){const[u,l]=e[d],h=A(u,l)+1.05;a.push(new v(u,h,l)),d%2===0&&n.add(c(new f(.18,1.05,.18),r.steelDark,u,A(u,l)+.5,l))}const s=new Bi(a),o=new ot(new ai(s,28,i,6,!1),t);o.castShadow=!1,n.add(o)}function F2(){const n=new I;return n.name="methalox-lines",Z(n,[[-76,-10.6],[-52,-18],[-32,-14],[-18,-8.4]],r.tankCh4,.13),Z(n,[[-76,-21.2],[-52,-24],[-32,-18],[-18,-9.6]],r.steel,.13),n.add(_("TO PAD","#1a100c","#f0c089",2.2,.5,-50,A(-50,-18)+2.15,-16.4)),n}function k2(){const n=new I;n.name="methalox-stand";const e=-15,t=-8,i=A(e,t);n.add(c(new f(8.6,.16,5.4),r.steelDark,e,i+.42,t)),n.add(c(new z(.88,.88,3.5,14),r.tankCh4,e-2.25,i+2.2,t+.55)),n.add(c(new z(.88,.88,3.5,14),r.tankO2,e-2.25,i+2.2,t-1.25)),n.add(_("CH4","#6a2208","#f4e6c8",1.45,.42,e-1.3,i+2.25,t+.55,Math.PI/2)),n.add(_("O2","#2a3340","#e8eef4",1.45,.42,e-1.3,i+2.25,t-1.25,Math.PI/2));const a=[[1.55,1.65],[1.55,-1.65],[3.45,1.65],[3.45,-1.65]];for(const[s,o]of a)n.add(c(new f(.16,3.15,.16),r.steelDark,e+s,i+1.88,t+o));return n.add(c(new f(2.25,.12,3.5),r.steel,e+2.5,i+3.5,t)),n.add(c(new Ce(.42,.11,8,14),r.tankCh4,e+.15,i+1.45,t+.55,Math.PI/2,0,0)),n.add(c(new Ce(.42,.11,8,14),r.steel,e+.15,i+1.45,t-1.2,Math.PI/2,0,0)),n.add(c(new z(.09,.09,6.4,8),r.tankCh4,e+4.55,i+1.18,t+.55,0,0,Math.PI/2)),n.add(c(new z(.09,.09,6.4,8),r.steel,e+4.55,i+.98,t-1.2,0,0,Math.PI/2)),n.add(c(new f(1.55,1.05,1.15),r.habDark,e+.55,i+.98,t+1.85)),n.add(c(new z(.55,.55,2.8,12),r.tankCh4,e-.4,i+1.15,t+2.55,0,0,Math.PI/2)),n.add(c(new f(1.6,.35,.85),r.steelDark,e-.4,i+.55,t+2.55)),n.add(_("METHALOX","#1a100c","#f0c089",3.15,.68,e+2.5,i+4.12,t)),n.add(_("RETURN PROPELLANT","#1a100c","#f0c089",3.85,.58,e+2.5,i+3.42,t+.02)),n.add(c(new z(.22,.28,3.2,10),r.steelDark,e+5.4,i+2,t+.2)),n.add(c(new f(7.6,.22,.22),r.steel,e+8.8,i+3.55,t+1.4,0,-.45,.18)),n.add(c(new f(6.2,.18,.18),r.tankCh4,e+11.6,i+4.4,t+2.6,0,-.45,.12)),n.add(c(new f(6.2,.18,.18),r.steel,e+11.6,i+4.05,t+2.85,0,-.45,.12)),n.add(c(new z(.28,.22,1.1,10),r.steelDark,e+14.2,i+4.7,t+3.6)),n.add(_("LOAD ARM","#1a100c","#f0c089",2.8,.45,e+8.2,i+4.85,t+1.1,-.45)),n}function B2(){const n=new I;n.name="spaceport-sign";const e=17,t=-17,i=A(e,t);return n.add(c(new f(.12,3.5,.12),r.steelDark,e,i+1.75,t)),n.add(_("SPACEPORT","#1a100c","#f0c089",3.5,.85,e,i+3.45,t,.55)),n.add(_("METHALOX PAD","#1a100c","#d6b48a",3.2,.58,e,i+2.55,t,.55)),n}function H2(n,e,t,i,a,s){const o=i-e,d=a-t,u=Math.hypot(o,d),l=Math.ceil(u/6),h=Math.atan2(o,d);for(let m=0;m<l;m++){const p=(m+.5)/l,g=e+o*p,M=t+d*p,b=A(g,M),w=u/l+.35,x=c(new f(s+1.7,.055,w+.25),r.roadBed,g,b+.03,M,0,h,0);x.castShadow=!1,n.add(x);const P=c(new f(s,.08,w+.15),r.padRing,g,b+.07,M,0,h,0);P.castShadow=!1,n.add(P)}}function G2(n,e,t,i=4.2){const a=A(e,t),s=c(new z(i+.8,i+.8,.06,20),r.roadBed,e,a+.03,t);s.castShadow=!1,n.add(s);const o=c(new z(i,i,.08,20),r.graded,e,a+.07,t);o.castShadow=!1,n.add(o)}function V2(){const n=new I;n.name="roads";const e=[[0,18,0,-124,5.2],[0,-40,84,-42,4.6],[0,-40,-68,-16,4.6],[0,-92,-56,-154,4],[16,-72,48,-86,3.6],[12,8,50,22,4.2],[16,28,22,78,3.5],[-58,-158,-90,-190,3.6],[-14,-104,-32,-98,3.4],[84,-42,112,-83,3.6],[0,-108,22,-112,3.6],[22,-112,48,-86,3.4],[-6,-116,-18,-138,3.2],[0,8,-15,-8,3.4],[16,28,36,72,3.8],[0,18,-24,44,3.8],[-58,-158,-64,-90,4.2],[-64,-90,-68,-16,4.2],[-18,-138,-32,-148,3.2],[-32,-98,-46,-100,3.4],[0,18,-48,68,3.8],[16,28,78,56,3.8],[-6,-116,-13,-134,3.4],[22,-112,38,-126,3.4],[-58,-158,-60,-148,3.2],[-64,-118,-18,-88,3.6],[84,-42,68,-10,3.4],[-6,-108,-18,-88,3.2],[38,-126,8,-142,3.4],[-13,-134,8,-142,3.2],[112,-83,135,-40,3.6],[68,-10,68,6,3.2],[-13,-134,-28,-138,3],[-46,-108,-20,-132,3.2],[-6,-108,-6,-132,3.2],[-6,-96,2,-22,3.4],[-32,-98,-36,-74,3.2],[-40,-76,-32,-98,3.2],[-40,-76,-50,-72,3],[-6,-132,10,-124,3.2],[10,-124,8,-142,3],[0,8,20,8,3.4],[22,82,-16,136,3.6],[0,32,-16,136,3.4],[135,-40,158,-62,3.4],[-68,-16,-96,-16,3.6],[-58,-158,-78,-172,3.4],[48,-86,66,-74,3.4],[8,-142,18,-152,3.2],[-18,-88,18,-152,3.2],[-32,-148,-8,-162,3.2],[-6,-108,8,-98,3.2],[22,-112,8,-98,3.2],[48,-86,48,-70,3.2],[-68,-16,-68,12,3.2],[-36,-74,22,-80,3.2],[48,-86,22,-80,3.2],[22,-112,52,-112,3.2],[38,-126,52,-112,3.2],[-78,-172,-90,-158,3.2],[8,-98,8,-78,3.2],[22,-80,8,-78,3.2],[8,-98,-8,-88,3.2],[-22,-88,-8,-88,3.2],[-96,-16,-96,4,3.2],[158,-62,142,-62,3.2],[8,-142,28,-140,3.2],[18,-152,28,-140,3.2],[-90,-158,-90,-148,3.2],[5,16,12,18,3],[20,8,36,8,3.2],[36,8,36,-6,3.2],[-68,4,-50,4,3.2],[-58,-158,-58,-142,3.2],[-15,-8,-32,-22,3.2],[66,-74,66,-90,3.2],[8,-98,22,-98,3.2],[158,-62,172,-48,3.2],[22,-112,38,-104,3.2],[10,-124,24,-128,3],[-68,12,-80,20,3.2],[-16,136,6,148,3],[-48,68,-64,80,3.2],[-80,20,-80,32,3.2],[135,-40,100,-22,3.2],[100,-22,68,-10,3.2],[-36,-74,-22,-56,3.2],[-90,-158,-124,-188,3.2],[-50,4,-38,16,3.2],[52,-112,70,-112,3.2],[22,82,16,48,3],[-58,-142,-58,-36,3.2],[-58,-36,-68,-16,3.2],[36,8,50,4,3],[-58,-158,-40,-168,3],[66,-90,82,-90,3.2],[-8,-162,4,-148,3],[135,-40,148,-40,3.2],[112,-83,124,-70,3.2],[82,-44,96,-44,3.2],[-68,12,-84,8,3.2],[-8,-88,16,-86,3.2],[135,-40,135,-22,3.2],[124,-70,100,-70,3.2],[82,-44,82,-28,3.2],[-68,-16,-68,2,3.2],[135,-40,122,-40,3],[112,-83,98,-83,3],[82,-44,70,-44,3],[-90,-158,-102,-158,3.2],[8,-78,-18,-78,3.2],[-78,-172,-64,-184,3.2],[18,-152,32,-152,3.2],[-96,4,-96,16,3.2],[66,-74,82,-74,3.2],[-78,-172,-78,-156,3.2],[-96,4,-110,8,3.2],[-110,8,-110,20,3.2],[-110,20,-110,32,3.2],[-110,8,-122,8,3.2],[-122,8,-122,20,3.2],[8,-98,-8,-98,3.2],[-8,-98,-22,-98,3.2],[-8,-88,8,-88,3.2],[-58,-36,-78,-36,3.2],[82,-90,96,-90,3.2],[8,-78,-5,-78,3],[4,-148,16,-148,3.2],[-90,-148,-90,-136,3.2],[16,-86,16,-74,3.2],[-32,-148,-48,-138,3.2],[52,-112,52,-126,3.2],[52,-126,70,-126,3.2],[0,-68,0,-118,3],[48,-70,90,-80,3],[-46,-148,-90,-148,3],[-38,16,-68,12,3],[38,-104,52,-112,3],[172,-48,158,-62,3],[-16,36,4,32,3],[4,-138,-18,-138,3],[68,6,50,4,3],[66,-90,66,-104,3.2],[66,-104,80,-104,3],[6,148,18,136,3],[8,-98,22,-98,3],[172,-48,172,-62,3],[-64,-184,-92,-184,3.2],[-18,-88,-32,-88,3],[96,-90,96,-104,3],[-15,-8,-28,-8,3],[-28,-8,-28,6,3],[-32,-88,-46,-88,3],[-50,4,-50,-22,3],[-68,12,-80,20,3],[-38,16,-38,28,3],[-58,-142,-46,-132,3],[38,-104,24,-118,3],[-90,-136,-110,-136,3.2],[-32,-98,-22,-110,3],[172,-62,158,-48,3],[96,-90,110,-90,3],[8,-98,8,-110,3],[-46,-148,-70,-148,3],[82,-28,96,-28,3],[124,-70,124,-83,3],[148,-40,148,-22,3],[32,-152,46,-152,3],[18,136,32,136,3],[-8,-98,-8,-110,3],[96,-104,110,-104,3],[82,-28,70,-28,3],[124,-70,136,-70,3],[135,-22,122,-22,3],[-102,-158,-114,-158,3],[-32,-22,-32,-36,3],[-28,6,-42,6,3],[16,-74,28,-74,3],[80,-104,80,-118,3],[52,-126,38,-132,3],[32,136,46,136,3],[28,-140,40,-140,3],[66,-90,52,-90,3],[-110,-136,-124,-136,3],[16,-148,28,-162,3],[46,136,46,148,3],[96,-104,96,-118,3],[-102,-158,-102,-148,3],[110,-104,110,-118,3],[-32,-36,-18,-36,3],[-42,6,-42,-8,3],[0,-68,8,-68,3],[18,-152,8,-162,3],[28,-74,40,-74,3],[-58,-142,-70,-136,3],[110,-90,124,-90,3],[52,-126,52,-140,3],[16,-148,16,-136,3],[110,-104,124,-104,3],[-78,-156,-92,-172,3],[24,-128,36,-128,3],[-46,-88,-58,-88,3],[36,23.5,36,36,3],[22,-98,22,-110,3],[96,-44,108,-44,3],[-78,-172,-64,-172,3],[110,-118,124,-118,3],[124,-83,136,-83,3],[148,-40,160,-40,3],[172,-62,184,-62,3],[36,36,36,48,3],[-22,-110,-36,-110,3],[36,36,22,36,3],[-8,-88,-8,-76,3],[70,-126,70,-140,3],[22,36,8,36,3],[16,-148,28,-148,3],[-58,-88,-58,-76,3],[-114,-158,-114,-148,3],[68,6,68,18,3],[-122,8,-122,-4,3],[-84,8,-84,-4,3],[-80,32,-80,44,3],[-80,44,-80,56,3],[-40,-168,-28,-180,3],[-64,-184,-52,-196,3],[124,-118,138,-118,3],[8,-68,8,-56,3],[-68,2,-68,-10,3],[-68,12,-54,24,3],[-58,-36,-58,-48,3],[-38,28,-38,40,3],[138,-118,138,-132,3],[40,-74,52,-74,3],[16,-86,28,-86,3],[138,-132,138,-146,3],[-58,-76,-70,-76,3],[-46,-88,-46,-100,3],[138,-146,138,-160,3],[-22,-110,-8,-98,3],[-90,-136,-90,-124,3],[70,-140,70,-152,3],[138,-160,138,-174,3]];for(const[i,a,s,o,d]of e)H2(n,i,a,s,o,d);for(const[i,a,s]of[[0,-40,5.2],[0,-108,4.4],[84,-42,4],[22,-112,3.8],[0,10,4.6],[-64,-90,4.2],[36,72,3.6],[-46,-100,3.6],[38,-126,3.6],[-18,-88,3.8],[68,-10,3.8],[-48,68,3.6],[78,56,3.6],[-13,-134,3.6],[8,-142,3.6],[135,-40,3.6],[68,6,3.6],[-36,-74,3.6],[2,-22,3.4],[-50,-72,3.4],[10,-124,3.6],[20,8,3.6],[-16,136,4.2],[158,-62,3.6],[-96,-16,3.8],[-78,-172,3.6],[66,-74,3.6],[18,-152,3.4],[-8,-162,3.4],[8,-98,3.4],[48,-70,3.4],[-68,12,3.4],[22,-80,3.4],[52,-112,3.6],[-90,-158,3.4],[8,-78,3.4],[-8,-88,3.4],[-96,4,3.4],[142,-62,3.4],[28,-140,3.4],[-90,-148,3.4],[12,18,3.2],[36,8,3.4],[36,-6,3.4],[-50,4,3.4],[-58,-142,3.4],[-32,-22,3.4],[66,-90,3.4],[22,-98,3.4],[172,-48,3.4],[38,-104,3.4],[24,-128,3.2],[-80,20,3.4],[6,148,3.2],[-64,80,3.4],[-80,32,3.4],[100,-22,3.4],[-22,-56,3.4],[-124,-188,3.4],[-38,16,3.4],[70,-112,3.4],[16,48,3.2],[-58,-36,3.4],[50,4,3.2],[-40,-168,3.2],[82,-90,3.4],[4,-148,3.2],[148,-40,3.4],[124,-70,3.4],[96,-44,3.4],[-84,8,3.4],[16,-86,3.4],[135,-22,3.4],[100,-70,3.4],[82,-28,3.4],[-68,2,3.4],[122,-40,3.2],[98,-83,3.2],[70,-44,3.2],[-102,-158,3.4],[-18,-78,3.4],[-64,-184,3.2],[32,-152,3.4],[-96,16,3.4],[82,-74,3.6],[-78,-156,3.4],[-110,8,3.4],[-110,20,3.4],[-110,32,3.4],[-122,8,3.4],[-122,20,3.4],[-8,-98,3.4],[-22,-98,3.4],[8,-88,3.4],[-78,-36,3.4],[96,-90,3.4],[-5,-78,3.2],[16,-148,3.2],[-90,-136,3.4],[16,-74,3.2],[-48,-138,3.2],[52,-126,3.4],[70,-126,3.4],[0,-68,3.2],[48,-70,3.2],[-46,-148,3.2],[-38,16,3.2],[38,-104,3.2],[172,-48,3.2],[-16,36,3.2],[4,-138,3.2],[68,6,3.2],[66,-104,3.4],[80,-104,3.2],[18,136,3.2],[22,-98,3.2],[172,-62,3.2],[-92,-184,3.2],[-32,-88,3.2],[96,-104,3.2],[-28,-8,3.2],[-28,6,3.2],[-46,-88,3.2],[-50,-22,3.2],[-80,20,3.2],[-38,28,3.2],[-46,-132,3.2],[24,-118,3.2],[-110,-136,3.2],[-22,-110,3.2],[158,-48,3.2],[110,-90,3.2],[8,-110,3.2],[-70,-148,3.2],[96,-28,3.2],[124,-83,3.2],[148,-22,3.2],[46,-152,3.2],[32,136,3.2],[-8,-110,3.2],[110,-104,3.2],[70,-28,3.2],[136,-70,3.2],[122,-22,3.2],[-114,-158,3.2],[-32,-36,3.2],[-42,6,3.2],[28,-74,3.2],[80,-118,3.2],[38,-132,3.2],[46,136,3.2],[40,-140,3.2],[52,-90,3.2],[-124,-136,3.2],[28,-162,3.2],[46,148,3.2],[96,-118,3.2],[-102,-148,3.2],[110,-118,3.2],[-18,-36,3.2],[-42,-8,3.2],[8,-68,3.2],[8,-162,3.2],[40,-74,3.2],[-70,-136,3.2],[124,-90,3.2],[52,-140,3.2],[16,-136,3.2],[124,-104,3.2],[-92,-172,3.2],[36,-128,3.2],[-58,-88,3.2],[36,36,3.2],[22,-110,3.2],[108,-44,3.2],[-64,-172,3.2],[124,-118,3.2],[136,-83,3.2],[160,-40,3.2],[184,-62,3.2],[36,48,3.2],[-36,-110,3.2],[22,36,3.2],[-8,-76,3.2],[70,-140,3.2],[8,36,3.2],[28,-148,3.2],[-58,-76,3.2],[-114,-148,3.2],[68,18,3.2],[-122,-4,3.2],[-84,-4,3.2],[-80,44,3.2],[-80,56,3.2],[-28,-180,3.2],[-52,-196,3.2],[138,-118,3.2],[8,-56,3.2],[-68,-10,3.2],[-54,24,3.2],[-58,-48,3.2],[-38,40,3.2],[138,-132,3.2],[52,-74,3.2],[28,-86,3.2],[138,-146,3.2],[-70,-76,3.2],[-46,-100,3.2],[138,-160,3.2],[-8,-98,3.2],[-90,-124,3.2],[70,-152,3.2],[138,-174,3.2]])G2(n,i,a,s);const t=[[3.2,-20],[-3.2,-20],[3.2,-60],[-3.2,-60],[3.2,-90],[22,-40],[42,-40],[64,-41],[-22,-32],[-44,-24],[8,-110],[16,-111],[-8,-130],[-28,-148],[-70,-172],[96,-58],[104,-72],[28,50],[32,62],[-12,30],[-20,40],[-60,-130],[-66,-70],[-66,-40],[-26,-144],[-40,-100],[-52,-108],[3.4,12],[-3.2,12],[30,-118],[38,-126],[-60,-148],[-64,-118],[-18,-88],[68,-10]];for(const[i,a]of t)Yr(n,i,a,r.flagDeposit);return n}function W2(){const n=new I,e=[[18,-8],[-16,-6],[12,-48],[-10,-70],[6,-100],[30,-100],[-30,-20],[40,-40],[40,18],[58,32],[16,70],[28,88],[-54,-8],[-80,-176],[-96,-196],[-28,-90],[112,-80],[100,-50],[0,-40],[22,-112],[32,-112],[70,-40],[84,-44],[36,60],[-24,32],[-64,-90],[-40,-148],[-32,-156],[4,14],[-46,-108],[-46,-92],[-58,-102],[38,-126],[-18,-88],[68,-10],[-60,-148],[-64,-118],[-22,-88]];for(const[t,i]of e){const a=A(t,i);n.add(c(new z(.1,.12,5.2,6),r.steelDark,t,a+2.6,i)),n.add(c(new f(.7,.15,.35),r.glowWarm,t,a+5.3,i))}return n}function X2(){const n=new I,e=14,t=22,i=A(e,t);n.add(c(new f(.12,3.6,.12),r.steelDark,e,i+1.8,t));const a=_("BASE ALPHA","#1a100c","#f0c089",3.8,1.05,e,i+3.55,t,.4);n.add(a);const s=_("CARGO CAMPAIGN","#1a100c","#f0c089",3.4,.7,e,i+2.55,t,.4);n.add(s);const o=_("ARCADIA PLANITIA","#1a100c","#d6b48a",3.2,.55,18,A(18,26)+2.15,26,.15);n.add(c(new f(.1,2.2,.1),r.steelDark,18,A(18,26)+1.1,26)),n.add(o);const d=20,u=36,l=A(d,u);return n.add(c(new f(.1,2.6,.1),r.steelDark,d,l+1.3,u)),n.add(_("6 SHIPS","#1a100c","#f0c089",2.6,.65,d,l+3.15,u,.25)),n.add(_("TWO WINDOWS","#1a100c","#d6b48a",2.8,.5,d,l+2.45,u,.25)),n}function rn(n,e,t,i){return Math.atan2(-(i-e),t-n)}function ac(n,e){const t=new I;t.name="window-offload";const i=[[n,e,.2],[n-1.8,e+2.1,-.3],[n+1.6,e+2.4,.7],[n-2.4,e-1.2,.15],[n+.8,e-2.2,1.1],[n-3.2,e+.6,-.4]];for(const[d,u,l]of i)oe(t,d,u,l);oe(t,n-4.2,e+1.4,.2,1.12),oe(t,n-5.4,e-.6,-.15,1.05);const[a,s,o]=Pt(n-1.2,e,.08);return t.add(c(new f(7.2,.12,3.8),r.steelDark,a,s,o,0,.12,0)),t.add(_("CARGO","#1a100c","#f0c089",2.4,.65,n-4.2,A(n-4.2,e+1.4)+2.4,e+1.4,.4)),t}function q2(){const n=new I;n.name="earth-dish";const e=-32,t=-148,i=A(e,t);n.add(c(new z(8.6,8.6,.28,32),r.concrete,e,i+.1,t)),n.add(c(new z(1.45,1.85,5.4,14),r.steelDark,e,i+2.8,t)),n.add(c(new z(2.05,2.05,.42,18),r.steel,e,i+5.55,t)),n.add(c(new Ce(2.15,.12,8,20),r.lattice,e,i+5.8,t,Math.PI/2,0,0)),n.add(c(new f(.32,4.4,.32),r.lattice,e-2.55,i+7.6,t)),n.add(c(new f(.32,4.4,.32),r.lattice,e+2.55,i+7.6,t)),n.add(c(new f(5.6,.32,.32),r.lattice,e,i+9.75,t));const a=new I;a.position.set(e,i+9.5,t),a.rotation.set(-.92,.68,0);const s=c(new wt(7.6,28,16,0,Math.PI*2,0,Math.PI/2.28),r.dish,0,0,0);a.add(s);const o=c(new wt(7.72,20,10,0,Math.PI*2,0,Math.PI/2.45),r.steelDark,0,-.12,0);a.add(o);for(let h=0;h<8;h++){const m=h/8*Math.PI*2;a.add(c(new f(.07,.07,7.4),r.steelDark,0,.18,0,.12,m,0))}a.add(c(new z(.07,.07,5.4,6),r.steelDark,0,2.7,0)),a.add(c(new z(.38,.2,.75,10),r.steel,0,5.35,0)),n.add(a);const d=e-8.2,u=t-5.6,l=A(d,u);return n.add(c(new f(4.6,2.5,3.4),r.habDark,d,l+1.35,u)),n.add(c(new f(2.2,.85,1.4),r.steelDark,d+2.8,l+.55,u+.4)),n.add(_("EARTH LINK","#1a100c","#f0c089",3.6,.75,e,i+4.2,t+6.4)),n.add(_("LIGHT TIME 12 MIN","#1a100c","#d6b48a",3.9,.6,e,i+3.4,t+6.4)),n.add(_("NOT REAL-TIME","#1a100c","#d6b48a",3.3,.5,d,l+2.85,u+1.85)),n.add(c(new f(.1,2.8,.1),r.steelDark,e+6.6,i+1.4,t+5.2)),n.add(_("DSN / STARSHIP","#1a100c","#f0c089",3.2,.55,e+6.6,i+3.15,t+5.2,-.5)),n}function on(n,e,t,i={}){const a=new I;a.name=i.kind==="cargo"?"cargo-haul":"ice-haul";const s=A(n,e);a.position.set(n,s,e),a.rotation.y=t,a.add(c(new f(4.2,1.25,2.2),r.rover,.2,1.45,0)),a.add(c(new f(1.55,.85,1.7),r.roverDark,1.55,2.25,0)),a.add(c(new f(2.5,.08,1.7),r.solar,.05,2.16,0)),a.add(c(new z(.06,.06,1.6,6),r.steel,1.2,2.95,0)),a.add(c(new f(1.15,.2,.32),r.steelDark,-2.45,1.02,0));const o=new z(.62,.62,.38,12),d=[[-1.35,.62,1.22],[.25,.62,1.22],[1.55,.62,1.22],[-1.35,.62,-1.22],[.25,.62,-1.22],[1.55,.62,-1.22]];for(const[h,m,p]of d)a.add(c(o,r.roverDark,h,m,p,Math.PI/2,0,0));const u=-5.7;a.add(c(new f(4.5,.22,2.4),r.steelDark,u,1.02,0));const l=[[-4.5,.52,1.22],[-6.7,.52,1.22],[-4.5,.52,-1.22],[-6.7,.52,-1.22]];for(const[h,m,p]of l)a.add(c(new z(.5,.5,.32,12),r.roverDark,h,m,p,Math.PI/2,0,0));if(i.kind==="cargo")a.add(c(new f(1.55,1.2,1.55),r.crate,u-.95,1.78,.12)),a.add(c(new f(1.55,1.2,1.55),r.crate,u+.9,1.78,-.08)),i.loaded!==!1&&a.add(c(new f(1.35,1.05,1.35),r.crate,u,2.9,.05)),a.add(_("CARGO","#1a100c","#f0c089",1.7,.42,u,2.05,1.28));else{if(a.add(c(new f(4.2,1.15,.1),r.steel,u,1.68,1.12)),a.add(c(new f(4.2,1.15,.1),r.steel,u,1.68,-1.12)),a.add(c(new f(.1,1.15,2.25),r.steel,u-2.15,1.68,0)),a.add(c(new f(.1,1.15,2.25),r.steel,u+2.15,1.68,0)),i.loaded!==!1){const h=c(new ut(1.15,0),r.ice,u,1.82,0);h.scale.set(1.65,.68,.95),a.add(h),a.add(c(new ut(.52,0),r.ice,u+.95,1.92,.22)),a.add(c(new ut(.4,0),r.ice,u-.85,1.88,-.18))}a.add(_("ICE","#1a2830","#d6e6ef",1.35,.38,u,2.35,1.24))}return a}function Va(n,e,t,i,a,s=16){const o=Math.atan2(i-e,a-t);for(let d=0;d<s;d++){const u=d/(s-1),l=e+(i-e)*u,h=t+(a-t)*u,m=A(l,h);for(const p of[-.7,.7]){const g=Math.cos(o)*p,M=-Math.sin(o)*p,b=c(new f(.4,.05,.9),r.track,l+g,m+.04,h+M,0,o,0);b.castShadow=!1,n.add(b)}}}function Y2(){const n=new I;n.name="haul-loop";const e=-64,t=-90,i=A(e,t);n.add(c(new f(11,.2,8.4),r.concrete,e,i+.08,t)),n.add(c(new f(2.6,3.2,2.6),r.steelDark,e+2.4,i+1.75,t-1.4)),n.add(c(new f(3.4,.18,1.3),r.steel,e+.2,i+2.35,t-1.4,0,0,.18));const a=c(new ut(2.4,0),r.ice,e-2.6,i+1.15,t+1.6);a.scale.set(1.35,.7,1.15),n.add(a),n.add(c(new ut(1.1,0),r.ice,e-1.2,i+.85,t+2.4)),n.add(c(new f(.22,5.6,.22),r.lattice,e+3.6,i+2.9,t+2.2)),n.add(c(new f(.22,4.2,.22),r.lattice,e+3.6,i+4.4,t+.4,.7,0,0)),n.add(c(new f(1.6,.7,.7),r.steelDark,e+3.6,i+5.5,t-.6)),n.add(_("ICE TRANSFER","#1a2830","#d6e6ef",3.5,.7,e,i+3.7,t+3.4)),n.add(_("MINE TO ISRU","#1a100c","#f0c089",3.1,.5,e,i+2.95,t+3.4));const s={x:-58,z:-158},o={x:-68,z:-16},d={x:0,z:0};return n.add(on(-55,-146,rn(-55,-146,o.x,o.z),{kind:"ice",loaded:!0})),n.add(on(-61,-118,rn(-61,-118,o.x,o.z),{kind:"ice",loaded:!0})),n.add(on(-66,-78,rn(-66,-78,o.x,o.z),{kind:"ice",loaded:!0})),n.add(on(-68,-38,rn(-68,-38,o.x,o.z),{kind:"ice",loaded:!0})),n.add(on(-70,-62,rn(-70,-62,s.x,s.z),{kind:"ice",loaded:!1})),n.add(on(-50,-24,rn(-50,-24,d.x,d.z),{kind:"cargo",loaded:!0})),n.add(on(-18,-14,rn(-18,-14,12,8),{kind:"cargo",loaded:!0})),n.add(on(22,12,rn(22,12,50,22),{kind:"cargo",loaded:!0})),Va(n,-58,-156,-64,-92,18),Va(n,-64,-88,-68,-20,16),Va(n,-66,-18,-16,-10,12),Va(n,-14,-8,20,12,10),n}function ji(n,e,t,i,a,s=8,o=1.15,d=.16){const u=[];for(let h=0;h<=s;h++){const m=h/s,p=e+(i-e)*m,g=t+(a-t)*m,M=A(p,g)+o;u.push(new v(p,M,g)),h%2===0&&n.add(c(new f(.16,o,.16),r.steelDark,p,A(p,g)+o*.5,g))}const l=new ot(new ai(new Bi(u),s*2,d,6,!1),r.pipe);l.castShadow=!1,n.add(l)}function K2(){const n=new I;n.name="food";const e=38,t=-126,i=A(e,t);n.add(c(new f(13.2,.25,7.6),r.concrete,e,i+.1,t));const a=new ot(new z(3.55,3.55,12.4,18,1,!1,0,Math.PI),r.glass);a.rotation.z=Math.PI/2,a.position.set(e,i+3.55,t),a.castShadow=!1,n.add(a),n.add(c(new f(12.2,.1,7.2),r.solarFrame,e,i+3.6,t));for(let s=-2;s<=2;s++){n.add(c(new f(1.85,.24,5.6),r.soil,e+s*2.1,i+.34,t));for(let o=-2;o<=2;o++){const d=o%2===0?r.plant:r.plantLeaf;n.add(c(new f(1.25,.58,.72),d,e+s*2.1,i+.78,t+o*.95))}n.add(c(new f(1.5,.05,5.2),r.glowWarm,e+s*2.1,i+3.15,t))}return n.add(c(new f(1.1,1.8,.14),r.habDark,e-6.2,i+1.1,t)),n.add(c(new z(.14,.14,12,8),r.pipe,30,A(30,-119)+1.2,-119,0,0,Math.PI/2)),n.add(_("FOOD","#1a100c","#f0c089",2.8,.7,e,i+5.05,t+.15)),n.add(_("GROW FROM CO2","#1a100c","#d6b48a",3.6,.5,e,i+4.35,t+.15)),oe(n,45,-122,.2,.9),oe(n,46.2,-124.4,-.3,.85),n}function J2(){const n=new I;n.name="water-loop";const e=-60,t=-148,i=A(e,t);n.add(c(new f(7.2,.22,5.4),r.concrete,e,i+.1,t)),n.add(c(new f(3.4,2.1,2.4),r.habDark,e-1.1,i+1.2,t)),n.add(c(new z(1.15,1.15,2.6,12),r.steel,e+1.8,i+1.5,t+.4)),n.add(c(new f(1.6,.7,1.2),r.ice,e+1.8,i+3.05,t+.4)),n.add(_("MELT","#1a2830","#d6e6ef",2.2,.55,e-1.1,i+1.7,t+1.35)),n.add(_("ICE","#1a2830","#d6e6ef",1.5,.42,e+1.8,i+1.7,t+1.7));const a=-64,s=-118,o=A(a,s);n.add(c(new f(7.4,.22,5.2),r.concrete,a,o+.1,s)),n.add(c(new f(3.6,2.2,2.6),r.steelDark,a,o+1.25,s)),n.add(c(new z(.55,.55,2.8,10),r.pipe,a+2.2,o+1.6,s-.6)),n.add(_("FILTER","#1a2830","#d6e6ef",2.5,.55,a,o+1.85,s+1.45));const d=-18,u=-88,l=A(d,u);return n.add(c(new f(9.2,.22,7.2),r.concrete,d,l+.1,u)),n.add(c(new z(2.15,2.15,5.6,16),r.tankO2,d-1.6,l+3,u)),n.add(c(new z(1.55,1.55,4.2,14),r.pipe,d+2.4,l+2.3,u+1.1)),n.add(_("POTABLE","#1a2830","#d6e6ef",3.2,.7,d-1.6,l+3.2,u+2.35)),n.add(_("H2O","#1a2830","#d6e6ef",1.8,.5,d+2.4,l+2.5,u+2.55)),n.add(_("ICE TO CREW","#1a100c","#f0c089",3.1,.5,d,l+6.15,u)),ji(n,-58,-154,e,t,6,1.2,.15),ji(n,e,t,a,s,8,1.2,.15),ji(n,a,s,-68,-26,10,1.15,.14),ji(n,a,s,d,u,10,1.2,.15),ji(n,d,u,-6,-100,8,1.15,.13),n}function Z2(){const n=new I;n.name="batteries";const e=68,t=-10,i=A(e,t);n.add(c(new f(15.2,.22,7.2),r.concrete,e,i+.1,t));for(let d=0;d<6;d++){const u=e-5.5+d*2.2;n.add(c(new f(1.85,2.15,4.4),r.battery,u,i+1.25,t)),n.add(c(new f(1.7,.08,4.2),r.steel,u,i+2.38,t))}n.add(_("BATTERY","#111111","#f4e6c8",3.4,.7,e,i+3.15,t+3.75)),n.add(_("NIGHT STORE","#111111","#d6b48a",3.5,.55,e,i+2.45,t+3.75)),n.add(c(new z(.12,.12,18,8),r.cable,61,A(61,-14)+1.4,-14,0,0,Math.PI/2));const a=-22,s=-88,o=A(a,s);n.add(c(new f(7.2,.2,5.2),r.concrete,a,o+.1,s));for(let d=0;d<3;d++)n.add(c(new f(1.7,1.9,3.6),r.battery,a-2+d*2,o+1.15,s));return n.add(_("NIGHT","#111111","#f4e6c8",2.2,.5,a,o+2.55,s+2.7)),n.add(_("HABS","#111111","#d6b48a",1.8,.42,a,o+2.05,s+2.7)),n}function $2(n){const e=(l,h,m=1)=>n.push({type:"box",x:l,z:h,w:1.9*m,d:1.9*m}),t=(l,h,m)=>n.push({type:"cyl",x:l,z:h,r:m}),i=(l,h,m,p)=>n.push({type:"box",x:l,z:h,w:m,d:p});for(const[l,h]of[[10,8],[12.2,8.4],[10.4,10.6],[13.5,6.2],[-12,9],[-14,7.2],[8.5,-11],[6.4,-12.5]])e(l,h);for(const[l,h]of[[40,22],[38.2,24.1],[41.4,26.2],[36.5,21.4],[37.8,27.6],[34.8,24.8],[39.2,19.6],[35.4,19.2]])e(l,h);e(38.6,22.8,1.15),e(33.2,20.4,1.2),e(31.4,22.1,1.05);const a=24,s=70;for(const[l,h]of[[a,s],[a-1.8,s+2.1],[a+1.6,s+2.4],[a-2.4,s-1.2],[a+.8,s-2.2],[a-3.2,s+.6]])e(l,h);e(a-4.2,s+1.4,1.12),e(a-5.4,s-.6,1.05),e(5.4,13.2,.85);for(const[l,h]of[[18,-78],[20.2,-77.4],[18.4,-81.2],[24.6,-78.6],[26.2,-81.8]])e(l,h);const o=-60,d=66;for(const[l,h]of[[o,d],[o-1.8,d+2.1],[o+1.6,d+2.4],[o-2.4,d-1.2],[o+.8,d-2.2],[o-3.2,d+.6]])e(l,h);e(o-4.2,d+1.4,1.12),e(o-5.4,d-.6,1.05);for(const[l,h]of[[16,14],[8,-62],[30,74],[-94,-182],[48,-70],[-90,-148]])t(l,h,2.4);for(const[l,h]of[[-55,-146],[-61,-118],[-66,-78],[-68,-38],[-70,-62],[-50,-24],[-18,-14],[22,12]])t(l,h,3.4);for(const[l,h]of[[42,22],[39,26],[26,78],[26,68],[22,72],[-80,-174],[-34,-92],[-28,-104],[16,-120],[-28,128]])t(l,h,.55);for(const[l,h]of[[2.4,12.2],[-2.2,11.5],[3.8,15.6],[.6,18.2]])t(l,h,.55);i(4.3,14.8,1.4,1),i(-3.9,9.1,1.1,.8),i(5.1,16.4,1.2,.8);for(let l=0;l<8;l++)i(82.3,-22-l*6.2,50,2.6);i(54,-18,3,2.2);for(let l=0;l<4;l++)i(111.5,-74-l*6.2,30,2.6);i(96,-72,3,2.2);for(let l=0;l<5;l++)i(135.5,-28-l*6.2,30,2.6);i(120,-26,3,2.2);for(let l=0;l<5;l++)i(158.5,-48-l*6.2,30,2.6);i(146,-46,3,2.2),i(14,22,2.4,1.6),i(18,26,1.8,1.3),i(20,36,2,1.3),i(17,-17,2.4,1.6);const u=[[-108,-210],[-98,-210],[-88,-210],[-78,-210],[-68,-210],[-108,-198],[-98,-198],[-88,-198],[-78,-198],[-68,-198],[-108,-186],[-98,-186],[-88,-186],[-78,-186],[-68,-186],[-108,-174],[-98,-174],[-88,-174],[-78,-174],[-68,-174]];for(const[l,h]of u)t(l,h,.4);t(-96,-198,.7),t(-72,-204,.7),t(-104,-176,.7);for(const[l,h]of[[-90,-184],[-88.4,-182.6],[-91.2,-181.8],[-86.6,-185.2]])i(l,h,1.2,1.2);e(-84.5,-180.4,.85),e(-28,-68),e(-27,-71,1.1),e(-44,-80),e(-42.5,-68.5,.95),e(17.2,-119.4),e(18.4,-121.8,1.05),e(3.2,-118.6,.9),e(16.6,-128.8,.95),e(27.2,12.4,.9),e(12.6,13.1,.95),e(-32,124,.9),e(-30.6,126.4,.95)}function j2(){const n=new I;n.name="hab-street";const e=A(-13,-134);n.add(c(new f(30,.2,24),r.concrete,-13,e+.06,-136)),un(n,-20,-132,0,{airlock:!0,label:"HAB 3"}),un(n,-6,-132,0,{airlock:!0,label:"HAB 4"}),un(n,-13,-142,Math.PI/2,{airlock:!0,label:"HAB 5"});const t=A(-13,-132)+3.15;return n.add(c(new z(1.15,1.15,8.2,12),r.habDark,-13,t,-132,0,0,Math.PI/2)),n.add(c(new z(1.15,1.15,6.4,12),r.habDark,-13,t,-137,Math.PI/2,0,0)),n.add(_("HAB STREET","#1a100c","#f0c089",3.4,.65,-13,e+5.4,-126)),oe(n,-26,-128,.2),oe(n,1.2,-128.4,-.3,1.05),n}function yi(n,e,t,i,a){i==="x"?(n.push({type:"box",x:e,z:t-1.35,w:a,d:.4}),n.push({type:"box",x:e,z:t+1.35,w:a,d:.4})):(n.push({type:"box",x:e-1.35,z:t,w:.4,d:a}),n.push({type:"box",x:e+1.35,z:t,w:.4,d:a}))}function Q2(n){const e=(t,i,a,s)=>n.push({type:"box",x:t,z:i,w:a,d:s});e(-6.2,0,5.2,14.8),e(6.2,0,5.2,14.8),e(0,-6.2,10,5.2),e(-4.35,5.8,6.4,5.2),e(4.35,5.8,6.4,5.2),e(0,7.15,3.8,.8),e(-1.45,7.15,.7,1.2),e(1.45,7.15,.7,1.2),e(-1.28,13,.36,12.4),e(1.28,13,.36,12.4),e(-1.45,19.2,.4,2.8),e(1.45,19.2,.4,2.8)}function em(){const n=new I;n.name="food-3";const e=8,t=-142,i=A(e,t);n.add(c(new f(13.2,.25,7.6),r.concrete,e,i+.1,t));const a=new ot(new z(3.55,3.55,12.4,18,1,!1,0,Math.PI),r.glass);a.rotation.z=Math.PI/2,a.position.set(e,i+3.55,t),a.castShadow=!1,n.add(a),n.add(c(new f(12.2,.1,7.2),r.solarFrame,e,i+3.6,t));for(let s=-2;s<=2;s++){n.add(c(new f(1.85,.24,5.6),r.soil,e+s*2.1,i+.34,t));for(let o=-2;o<=2;o++){const d=o%2===0?r.plant:r.plantLeaf;n.add(c(new f(1.25,.58,.72),d,e+s*2.1,i+.78,t+o*.95))}n.add(c(new f(1.5,.05,5.2),r.glowWarm,e+s*2.1,i+3.15,t))}return n.add(c(new f(1.1,1.8,.14),r.habDark,e-6.2,i+1.1,t)),n.add(_("FOOD","#1a100c","#f0c089",2.8,.7,e,i+5.05,t+.15)),n.add(_("HAB STREET","#1a100c","#d6b48a",3.4,.5,e,i+4.35,t+.15)),oe(n,15,-138,.2,.9),n}function tm(){const n=new I;n.name="solar-3";const e=6,t=5;for(let o=0;o<e;o++)for(let d=0;d<t;d++){const u=122+o*5.4,l=-28-d*6.2,h=A(u,l);n.add(c(new f(.18,1.6,.18),r.solarFrame,u,h+.8,l)),n.add(c(new f(4.6,.08,2.3),r.solar,u,h+1.55,l,-.55,.15,0)),n.add(c(new f(4.75,.05,2.42),r.solarFrame,u,h+1.5,l,-.55,.15,0))}const[i,a,s]=Pt(120,-26,.7);return n.add(c(new f(2.2,1.4,1.4),r.habDark,i,a,s)),n.add(_("POWER","#111111","#f4e6c8",2,.55,i,a+.2,s+.75)),n.add(_("FIELD 3","#111111","#d6b48a",2.2,.45,i,a+.85,s+.75)),n}function nm(){const n=new I;n.name="batteries-2";const e=68,t=6,i=A(e,t);n.add(c(new f(15.2,.22,7.2),r.concrete,e,i+.1,t));for(let d=0;d<6;d++){const u=e-5.5+d*2.2;n.add(c(new f(1.85,2.15,4.4),r.battery,u,i+1.25,t)),n.add(c(new f(1.7,.08,4.2),r.steel,u,i+2.38,t))}n.add(_("BATTERY","#111111","#f4e6c8",3.4,.7,e,i+3.15,t+3.75)),n.add(_("CREW STORE","#111111","#d6b48a",3.5,.55,e,i+2.45,t+3.75));const a=-28,s=-138,o=A(a,s);n.add(c(new f(7.2,.2,5.2),r.concrete,a,o+.1,s));for(let d=0;d<3;d++)n.add(c(new f(1.7,1.9,3.6),r.battery,a-2+d*2,o+1.15,s));return n.add(_("NIGHT","#111111","#f4e6c8",2.2,.5,a,o+2.55,s+2.7)),n.add(_("HAB 3-5","#111111","#d6b48a",2.2,.42,a,o+2.05,s+2.7)),n}function Ln(n,e,t,i,a){const s=(e+i)*.5,o=(t+a)*.5,d=(A(e,t)+A(i,a))*.5+2.45,u=Math.hypot(i-e,a-t),l=c(new z(1.12,1.12,u,12),r.habDark,s,d,o,Math.PI/2,0,0);l.rotation.y=Math.atan2(i-e,a-t),n.add(l),n.add(c(new Ce(1.18,.07,6,14),r.steel,e,d,t,Math.PI/2,0,0)),n.add(c(new Ce(1.18,.07,6,14),r.steel,i,d,a,Math.PI/2,0,0))}function im(){const n=new I;n.name="neighborhood",Ln(n,-46,-108,-20,-132),Ln(n,-6,-108,-6,-132),Ln(n,-46,-108,-32,-98),Ln(n,-6,-96,2,-22),Ln(n,-40,-76,-32,-98),Ln(n,-40,-76,-50,-72),Ln(n,-6,-132,10,-124),Ln(n,10,-124,8,-142);const[e,t,i]=Pt(-33,-120,3.4);n.add(_("PRESSURE","#1a100c","#f0c089",3.2,.55,e,t+1.2,i)),n.add(_("HAB 2-5","#1a100c","#d6b48a",2.8,.45,e,t+.55,i));const a=2,s=-22,o=A(a,s);return n.add(c(new z(1.45,1.45,2.8,12),r.habDark,a,o+1.55,s)),n.add(c(new f(1.1,1.8,.12),r.steelDark,a,o+1.5,s+1.5)),n.add(c(new Ce(1.48,.08,6,14),r.steel,a,o+2.95,s,Math.PI/2,0,0)),n.add(_("CREW ACCESS","#1a100c","#f0c089",3.4,.6,a,o+3.55,s+.2)),n.add(_("TO STARSHIP","#1a100c","#d6b48a",3.1,.45,a,o+2.95,s+.2)),n}function am(){const n=new I;n.name="yard";const e=-36,t=-74,i=A(e,t);return n.add(c(new f(18,.22,14),r.concrete,e,i+.08,t)),un(n,-40,-76,0,{airlock:!0,label:"HAB 6"}),un(n,-32,-70,-.2,{onStands:!0,label:"NEXT"}),n.add(c(new f(.28,9.2,.28),r.lattice,e+6.2,i+4.7,t-3.4)),n.add(c(new f(8.4,.22,.22),r.lattice,e+2.4,i+9.2,t-3.4)),n.add(c(new z(.05,.05,6.8,6),r.cable,e-1.2,i+6.2,t-2.2)),n.add(c(new f(1.4,1.2,1.4),r.crate,e+1.6,i+8.6,t-3.2)),oe(n,-28,-68,.2),oe(n,-27,-71,-.4,1.1),oe(n,-44,-80,.3),oe(n,-42.5,-68.5,.1,.95),n.add(_("CONSTRUCTION","#1a100c","#f0c089",4,.7,e,i+4.6,t+6.4)),n.add(_("NEXT KIT","#1a100c","#d6b48a",3.2,.5,e,i+3.9,t+6.4)),n}function sm(){const n=new I;n.name="crew-ops";const e=-50,t=-72,i=A(e,t);return n.add(c(new f(12,.2,10),r.concrete,e,i+.08,t)),un(n,e,t,Math.PI/2,{r:2.2,len:7.6,airlock:!0,label:"MED"}),n.add(_("CREW OPS","#1a100c","#f0c089",3.4,.6,e,i+5.35,t+.2)),n.add(_("MEDICAL","#1a100c","#d6b48a",3,.45,e,i+4.75,t+.2)),oe(n,-55.2,-76.4,.2,.9),oe(n,-44.8,-68.6,-.25,.95),n}function rm(){const n=new I;n.name="commons";const e=10,t=-124,i=A(e,t);return n.add(c(new f(16,.22,12),r.concrete,e,i+.08,t)),un(n,e,t,0,{airlock:!0,label:"MESS"}),n.add(_("CREW COMMONS","#1a100c","#f0c089",4.2,.7,e,i+6.15,t+.2)),n.add(_("FROM CARGO","#1a100c","#d6b48a",3.4,.48,e,i+5.5,t+.2)),oe(n,17.2,-119.4,.2),oe(n,18.4,-121.8,-.3,1.05),oe(n,3.2,-118.6,.15,.9),oe(n,16.6,-128.8,.4,.95),n}function om(){const n=new I;n.name="methalox-stock";const e=20,t=8,i=A(e,t);n.add(c(new f(16,.22,12),r.concrete,e,i+.08,t));for(let a=0;a<3;a++){const s=t-3.4+a*3.4;n.add(c(new z(1.15,1.15,6.4,16),r.tankCh4,e-3.2,i+1.45,s,0,0,Math.PI/2)),n.add(c(new z(1.15,1.15,6.4,16),r.tankO2,e+3.2,i+1.45,s,0,0,Math.PI/2))}return n.add(_("METHALOX","#1a100c","#f0c089",3.6,.7,e,i+3.55,t+6.2)),n.add(_("RETURN STOCK","#1a100c","#d6b48a",3.8,.5,e,i+2.9,t+6.2)),n.add(_("CH4","#6a2208","#f4e6c8",1.6,.42,e-3.2,i+2.85,t+3.6)),n.add(_("O2","#2a3340","#e8eef4",1.4,.42,e+3.2,i+2.85,t+3.6)),Z(n,[[20,2],[8,-2],[-8,-6],[-15,-8]],r.tankCh4,.12),oe(n,27.2,12.4,.2,.9),oe(n,12.6,13.1,-.25,.95),n}function cm(){const n=new I;n.name="next-window-pad";const e=-16,t=136;n.add(Jn(e,t,{finished:!0}));const i=A(e,t);return n.add(_("NEXT WINDOW","#1a100c","#f0c089",4.6,.85,e+22,i+3.6,t+4,-.55)),n.add(_("26 MONTHS","#1a100c","#d6b48a",3.6,.55,e+22,i+2.75,t+4,-.55)),n.add(c(new f(.12,3.4,.12),r.steelDark,e+22,i+1.7,t+4)),n.add(_("PAD 2","#1a100c","#f0c089",2.4,.55,e,i+.55,t+22.4)),n.add(c(new z(18.4,18.4,.12,40),r.concrete,e,i+.38,t)),n.add(c(new aa(9.2,17.6,36),r.soot,e,i+.46,t,-Math.PI/2,0,0)),n.add(_("SINTERED","#1a100c","#f0c089",3.6,.55,e+22,i+1.95,t+4,-.55)),n.add(dm(-38,148)),oe(n,-32,124,.2,.9),oe(n,-30.6,126.4,-.25,.95),oe(n,-40,144,.1,.85),oe(n,-41.4,146.2,-.3,.8),n}function dm(n,e){const t=new I;t.name="sinter-rig";const i=A(n,e);t.add(c(new f(8.4,.22,6.2),r.concrete,n,i+.1,e)),t.add(c(new f(5.6,2.4,3.2),r.habDark,n,i+1.4,e)),t.add(c(new f(1.6,3.6,1.6),r.steelDark,n+2.8,i+2,e-.4)),t.add(c(new z(.18,.18,4.8,8),r.steel,n+2.8,i+5.2,e-.4)),t.add(c(new f(2.4,.18,1.1),r.glowWarm,n+2.8,i+7.6,e-.4)),t.add(_("SINTER","#1a100c","#f0c089",3.2,.6,n,i+2.9,e+1.85)),t.add(_("REGOLITH","#1a100c","#d6b48a",3.4,.45,n,i+2.3,e+1.85));for(let a=0;a<4;a++)t.add(c(new f(1.4,.28,.9),r.concrete,n-2.4,i+.35+a*.32,e+2.6));return t}function lm(){const n=new I;n.name="solar-4";const e=6,t=5;for(let l=0;l<e;l++)for(let h=0;h<t;h++){const m=145+l*5.4,p=-48-h*6.2,g=A(m,p);n.add(c(new f(.18,1.6,.18),r.solarFrame,m,g+.8,p)),n.add(c(new f(4.6,.08,2.3),r.solar,m,g+1.55,p,-.55,.15,0)),n.add(c(new f(4.75,.05,2.42),r.solarFrame,m,g+1.5,p,-.55,.15,0))}const[i,a,s]=Pt(146,-46,.7);n.add(c(new f(2.2,1.4,1.4),r.habDark,i,a,s)),n.add(_("POWER","#111111","#f4e6c8",2,.55,i,a+.2,s+.75)),n.add(_("FIELD 4","#111111","#d6b48a",2.2,.45,i,a+.85,s+.75));const o=158,d=-28,u=A(o,d);n.add(c(new f(12,.2,7.2),r.concrete,o,u+.1,d));for(let l=0;l<5;l++)n.add(c(new f(1.7,2,4.2),r.battery,o-4+l*2,u+1.2,d));return n.add(_("NIGHT","#111111","#f4e6c8",2.2,.5,o,u+2.7,d+3.6)),n.add(_("FIELD 4","#111111","#d6b48a",2.4,.42,o,u+2.15,d+3.6)),n}function hm(){const n=new I;n.name="isru-2";const e=-96,t=-16,i=A(e,t);return n.add(c(new f(18,.35,18),r.concrete,e,i+.12,t)),n.add(c(new z(1.55,1.7,11,12),r.steelDark,e+2.2,i+5.8,t)),n.add(c(new Ce(2.15,.16,6,14),r.steel,e+2.2,i+8.8,t,Math.PI/2,0,0)),n.add(_("SABATIER","#1a100c","#f0c089",4.4,.9,e+4.2,i+7.2,t,Math.PI/2)),n.add(_("TRAIN 2","#1a100c","#d6b48a",3.2,.55,e+4.2,i+6.3,t,Math.PI/2)),n.add(c(new z(2.4,2.4,11,18),r.tankCh4,e-5.2,i+6,t+4.6,0,0,Math.PI/2)),n.add(c(new z(2.4,2.4,11,18),r.tankO2,e-5.2,i+6,t-4.4,0,0,Math.PI/2)),n.add(_("CH4","#6a2208","#f4e6c8",2.8,.8,e+.4,i+6,t+4.6)),n.add(_("O2","#2a3340","#e8eef4",2.6,.8,e+.4,i+6,t-4.4)),Z(n,[[-88,-16],[-80,-16],[-72,-16]],r.tankCh4,.14),Z(n,[[-88,-18],[-80,-20],[-72,-18]],r.steel,.12),n}function um(){const n=new I;n.name="ice-mine-2";const e=-78,t=-172,i=A(e,t);n.add(c(new f(8,.3,8),r.concrete,e,i+.1,t)),n.add(c(new f(.28,14,.28),r.lattice,e-2.2,i+7,t-2.2)),n.add(c(new f(.28,14,.28),r.lattice,e+2.2,i+7,t-2.2)),n.add(c(new f(.28,14,.28),r.lattice,e-2.2,i+7,t+2.2)),n.add(c(new f(.28,14,.28),r.lattice,e+2.2,i+7,t+2.2)),n.add(c(new f(5.2,.25,5.2),r.steelDark,e,i+14.2,t)),n.add(c(new z(.35,.55,9,10),r.steel,e,i+5,t)),n.add(c(new ii(.7,1.6,8),r.soot,e,i+.9,t));const a=c(new ut(4,0),r.ice,e+8.2,i+1.8,t+1.4);return a.scale.set(1.45,.75,1.2),n.add(a),n.add(c(new f(6.4,.35,1.1),r.steelDark,e+3.6,i+1.4,t,0,0,-.18)),n.add(_("ICE 2","#1a2830","#d6e6ef",2.6,.65,e,i+8.4,t+2.6)),Z(n,[[-74,-168],[-68,-150],[-64,-90],[-68,-26]],r.pipe,.13),n}function fm(){const n=new I;n.name="workshop-2";const e=66,t=-74,i=A(e,t);n.add(c(new f(16,.28,12),r.concrete,e,i+.1,t));const a=c(new z(5.4,5.4,14,16,1,!1,0,Math.PI),r.habDark,e-1.2,i+3.1,t);return a.rotation.z=Math.PI/2,n.add(a),n.add(c(new f(.2,3.8,5.8),r.steelDark,e-8.1,i+2,t)),n.add(c(new f(.28,8.4,.28),r.lattice,e+6.4,i+4.3,t-3.6)),n.add(c(new f(7.2,.2,.2),r.lattice,e+3,i+8.5,t-3.6)),n.add(c(new f(1.5,1.1,1.5),r.crate,e+2.2,i+8,t-3.4)),oe(n,73.2,-69.4,.2),oe(n,74.4,-71.6,-.3,1.05),oe(n,58.6,-68.8,.15,.9),n.add(_("WORKSHOP","#1a100c","#f0c089",3.8,.75,e,i+5.4,t+.2)),n.add(_("BAY 2","#1a100c","#d6b48a",2.6,.5,e,i+4.7,t+.2)),n}function pm(){const n=new I;n.name="potable";const e=18,t=-152,i=A(e,t);n.add(c(new f(14,.22,10),r.concrete,e,i+.1,t));for(let a=0;a<4;a++){const s=e-4.5+a*3;n.add(c(new z(1.15,1.15,6.2,14),r.pipe,s,i+1.5,t,0,0,Math.PI/2))}return n.add(_("POTABLE","#1a2830","#d6e6ef",3.4,.7,e,i+3.35,t+4.6)),n.add(_("HAB STORE","#1a2830","#d6b48a",3.2,.5,e,i+2.7,t+4.6)),Z(n,[[18,-148],[8,-142],[-6,-120],[-18,-88]],r.pipe,.12),n}function mm(){const n=new I;n.name="hab-berms";const e=[[-58,-108,9.5,.2],[-20,-100,12.5,0],[22,-128,8.5,1.2],[-8,-148,7.5,.4]];for(const[s,o,d,u]of e){const l=A(s,o),h=c(new Ce(d,1.55,8,24,Math.PI*1.15),r.rust,s,l-.2,o,Math.PI/2,u,0);h.scale.set(1,.42,1),n.add(h)}for(const[s,o]of[[-62,-102],[-14,-96],[26,-122]]){const d=c(new ut(2.4,0),r.rust,s,A(s,o)+.95,o);d.scale.set(1.25,.6,1.05),n.add(d)}const[t,i,a]=Pt(-20,-100,2.4);return n.add(_("DUST BERM","#1a100c","#f0c089",3.6,.65,t,i+1.1,a)),n.add(_("HAB WIND","#1a100c","#d6b48a",3.2,.48,t,i+.5,a)),n}function gm(){const n=new I;n.name="earth-dish-2";const e=-8,t=-162,i=A(e,t);n.add(c(new z(6.2,6.2,.26,28),r.concrete,e,i+.1,t)),n.add(c(new z(1.1,1.4,4.2,12),r.steelDark,e,i+2.2,t));const a=new I;return a.position.set(e,i+6.8,t),a.rotation.set(-.88,.55,0),a.add(c(new wt(5.2,22,14,0,Math.PI*2,0,Math.PI/2.28),r.dish,0,0,0)),a.add(c(new z(.06,.06,3.8,6),r.steelDark,0,1.9,0)),n.add(a),n.add(_("EARTH 2","#1a100c","#f0c089",3.2,.65,e,i+3.6,t+5.2)),n.add(_("BACKUP LINK","#1a100c","#d6b48a",3.4,.5,e,i+2.95,t+5.2)),n}function xm(){const n=new I;n.name="eclss";const e=8,t=-98,i=A(e,t);return n.add(c(new f(11.2,.22,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(4.8,2.6,3.4),r.habDark,e-2.4,i+1.5,t)),n.add(_("ECLSS","#1a100c","#f0c089",3.2,.6,e-2.4,i+3.05,t+1.85)),n.add(_("CO2 SCRUB","#1a100c","#d6b48a",3.4,.45,e-2.4,i+2.45,t+1.85)),n.add(c(new z(.85,.85,3.4,12),r.steelDark,e+1.6,i+1.9,t-1.4)),n.add(c(new z(.85,.85,3.4,12),r.steelDark,e+3.4,i+1.9,t-1.4)),n.add(_("AMINE","#1a100c","#d6b48a",2.2,.4,e+2.5,i+3.8,t-1.4)),n.add(c(new z(.7,.7,2.6,12),r.tankO2,e+1.6,i+1.5,t+1.8)),n.add(c(new z(.7,.7,2.6,12),r.tankO2,e+3.4,i+1.5,t+1.8)),n.add(_("O2","#2a3340","#e8eef4",1.4,.4,e+2.5,i+3.05,t+1.8)),Z(n,[[8,-98],[14,-104],[22,-112]],r.pipe,.1),Z(n,[[8,-98],[2,-102],[-6,-108]],r.tankO2,.09),n}function _m(){const n=new I;n.name="rover-shelter";const e=48,t=-70,i=A(e,t);n.add(c(new f(12.4,.18,8.6),r.concrete,e,i+.08,t));const a=[[-5.2,-3.4],[5.2,-3.4],[-5.2,3.4],[5.2,3.4]];for(const[s,o]of a)n.add(c(new f(.28,4.6,.28),r.steelDark,e+s,i+2.4,t+o));return n.add(c(new f(12.8,.16,9),r.steel,e,i+4.75,t)),n.add(c(new f(12.8,.06,9),r.solar,e,i+4.88,t)),n.add(_("DUST","#1a100c","#f0c089",2.6,.5,e,i+5.35,t+4.6)),n.add(_("ROVER","#1a100c","#d6b48a",2.8,.42,e,i+4.8,t+4.6)),n}function wm(){const n=new I;n.name="isru-radiators";const e=-68,t=12,i=A(e,t);n.add(c(new f(16.4,.18,6.2),r.concrete,e,i+.08,t));for(let a=0;a<5;a++){const s=e-6+a*3;n.add(c(new f(.16,3.6,.16),r.steelDark,s,i+1.9,t-1.8)),n.add(c(new f(.16,3.6,.16),r.steelDark,s,i+1.9,t+1.8)),n.add(c(new f(2.4,3.2,.08),r.solar,s,i+2.4,t,-.15,0,0)),n.add(c(new f(2.5,3.3,.04),r.steel,s,i+2.4,t+.06,-.15,0,0))}return n.add(_("REJECT","#1a100c","#f0c089",2.8,.5,e,i+4.55,t+3.2)),n.add(_("HEAT","#1a100c","#d6b48a",2.4,.42,e,i+4,t+3.2)),Z(n,[[-68,-6],[-68,4],[-68,12]],r.pipe,.1),n}function vm(){const n=new I;n.name="parts-depot";const e=22,t=-80,i=A(e,t);return n.add(c(new f(12.2,.18,8.2),r.concrete,e,i+.08,t)),n.add(c(new f(.22,3.8,8.2),r.steelDark,e-5.8,i+2,t)),n.add(c(new f(12.2,.14,8.4),r.steel,e,i+3.95,t)),oe(n,18,-78,.15,1),oe(n,20.2,-77.4,-.2,.95),oe(n,18.4,-81.2,.3,1.05),oe(n,24.6,-78.6,-.1,1),oe(n,26.2,-81.8,.25,.9),n.add(c(new f(2.4,1.1,1.4),r.steel,e+1.2,i+.75,t+.4)),n.add(_("PARTS","#1a100c","#f0c089",2.8,.55,e,i+4.45,t+4.2)),n.add(_("CARGO","#1a100c","#d6b48a",2.6,.42,e,i+3.9,t+4.2)),n}function Mm(){const n=new I;n.name="greenhouse-2";const e=52,t=-112,i=A(e,t);n.add(c(new f(13.6,.22,8.2),r.concrete,e,i+.1,t));const a=new ot(new z(3.7,3.7,12.6,16,1,!1,0,Math.PI),r.glass);a.rotation.z=Math.PI/2,a.position.set(e,i+3.7,t),a.castShadow=!1,n.add(a),n.add(c(new f(12.4,.1,7.6),r.solarFrame,e,i+3.75,t));for(let s=-2;s<=2;s++){n.add(c(new f(1.9,.24,6),r.soil,e+s*2.15,i+.34,t));for(let o=-2;o<=2;o++){const d=o%2===0?r.plant:r.plantLeaf;n.add(c(new f(1.3,.48,.74),d,e+s*2.15,i+.68,t+o*1.05))}n.add(c(new f(1.55,.05,5.6),r.glowWarm,e+s*2.15,i+3.2,t))}return n.add(_("GREENHOUSE 2","#1a100c","#f0c089",4,.65,e,i+5.15,t+.15)),n.add(_("GROW FROM CO2","#1a100c","#d6b48a",3.6,.48,e,i+4.5,t+.15)),Z(n,[[32,-112],[42,-112],[52,-112]],r.pipe,.1),n}function bm(){const n=new I;n.name="ice-depot";const e=-90,t=-158,i=A(e,t);n.add(c(new f(12,.22,10),r.concrete,e,i+.1,t)),n.add(c(new f(3.6,2.4,2.8),r.steelDark,e-1.8,i+1.35,t)),n.add(c(new z(.85,1.65,2.1,10),r.steelDark,e-1.8,i+3.35,t)),n.add(c(new f(2.4,.28,1.05),r.steel,e+.7,i+2.1,t,0,0,-.2));const a=c(new ut(2.8,0),r.ice,e+3.6,i+1.25,t+1.5);return a.scale.set(1.35,.7,1.15),n.add(a),n.add(c(new ut(1.15,0),r.ice,e+4.8,i+.85,t+.2)),n.add(_("ICE","#1a2830","#d6e6ef",2.2,.55,e,i+3.85,t+4.4)),n.add(_("CRUSH","#1a2830","#d6e6ef",2.6,.5,e,i+3.2,t+4.4)),Z(n,[[-86,-160],[-80,-166],[-74,-168]],r.pipe,.13),n}function ym(){const n=new I;n.name="batteries-3";const e=8,t=-78,i=A(e,t);n.add(c(new f(11.6,.2,6.4),r.concrete,e,i+.1,t));for(let a=0;a<5;a++)n.add(c(new f(1.7,1.95,3.8),r.battery,e-4+a*2,i+1.15,t)),n.add(c(new f(1.55,.08,3.6),r.steel,e-4+a*2,i+2.18,t));return n.add(_("NIGHT","#111111","#f4e6c8",2.4,.5,e,i+2.7,t+3.3)),n.add(_("HAB STORE","#111111","#d6b48a",3,.42,e,i+2.15,t+3.3)),n}function Sm(){const n=new I;n.name="o2-buffer";const e=-8,t=-88,i=A(e,t);n.add(c(new f(10.2,.2,7.4),r.concrete,e,i+.1,t));for(let a=0;a<4;a++){const s=e-3.3+a*2.2;n.add(c(new z(.85,.85,3.6,12),r.tankO2,s,i+2,t))}return n.add(_("O2","#2a3340","#e8eef4",1.8,.5,e,i+4.15,t+3.7)),n.add(_("CREW","#2a3340","#d6b48a",2.2,.42,e,i+3.6,t+3.7)),Z(n,[[-8,-88],[0,-94],[8,-98]],r.tankO2,.1),n}function Em(){const n=new I;n.name="co2-capture";const e=-96,t=4,i=A(e,t);return n.add(c(new f(11.6,.2,7.4),r.concrete,e,i+.1,t)),n.add(c(new z(.55,.55,6.8,10),r.steel,e-2.4,i+3.6,t)),n.add(c(new z(2.1,.65,2.4,14),r.steelDark,e-2.4,i+7.8,t)),n.add(c(new Ce(1.85,.1,6,16),r.steel,e-2.4,i+9.1,t,Math.PI/2,0,0)),n.add(c(new f(3.2,2.2,2.4),r.habDark,e+2.2,i+1.3,t)),n.add(_("CO2","#1a100c","#f0c089",2.2,.55,e-2.4,i+4.8,t+1.4)),n.add(_("INTAKE 2","#1a100c","#d6b48a",3,.45,e+2.2,i+2.7,t+1.35)),Z(n,[[-96,4],[-96,-6],[-96,-16]],r.pipe,.12),n}function Tm(){const n=new I;n.name="solar-dust-fence";const e=142,t=-62,i=A(e,t);for(let a=0;a<8;a++){const s=t-10.5+a*3;n.add(c(new f(.18,3.4,.18),r.steelDark,e,i+1.8,s)),a<7&&n.add(c(new f(.06,2.6,2.7),r.lattice,e,i+1.7,s+1.5))}return n.add(_("DUST","#1a100c","#f0c089",2.4,.45,e-1.4,i+3.5,t)),n.add(_("FENCE","#1a100c","#d6b48a",2.4,.4,e-1.4,i+3,t)),n}function Am(){const n=new I;n.name="condensate";const e=28,t=-140,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new z(1.35,1.35,3.8,14),r.pipe,e-1.6,i+2.1,t)),n.add(c(new z(1.35,1.35,3.8,14),r.pipe,e+1.8,i+2.1,t)),n.add(c(new f(2.4,1.6,1.8),r.habDark,e,i+1,t+2.2)),n.add(_("H2O","#1a2830","#d6e6ef",2.2,.5,e,i+4.3,t+3.6)),n.add(_("CONDENSATE","#1a2830","#d6b48a",3.6,.42,e,i+3.75,t+3.6)),Z(n,[[28,-140],[18,-146],[18,-152]],r.pipe,.1),Z(n,[[28,-140],[16,-142],[8,-142]],r.pipe,.09),n}function Rm(){const n=new I;n.name="eva-rack";const e=12,t=18,i=A(e,t);return n.add(c(new f(5.8,.16,2.4),r.steelDark,e,i+.08,t)),n.add(c(new f(.16,2.8,.16),r.steel,e-2.4,i+1.5,t-.7)),n.add(c(new f(.16,2.8,.16),r.steel,e+2.4,i+1.5,t-.7)),n.add(c(new f(5,.12,.12),r.steel,e,i+2.9,t-.7)),n.add(zt(e-1.5,t,.2)),n.add(zt(e,t+.15,-.1)),n.add(zt(e+1.5,t,.15)),n.add(_("SUITS","#1a100c","#f0c089",2.4,.45,e,i+3.35,t+1.2)),n.add(_("EVA RACK","#1a100c","#d6b48a",2.8,.4,e,i+2.85,t+1.2)),n}function Cm(){const n=new I;n.name="ch4-buffer";const e=36,t=8,i=A(e,t);n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t));for(let a=0;a<3;a++)n.add(c(new z(1.05,1.05,5.6,14),r.tankCh4,e-2.4+a*2.4,i+1.4,t,0,0,Math.PI/2));return n.add(_("CH4","#6a2208","#f4e6c8",2.2,.5,e,i+3.35,t+3.7)),n.add(_("RETURN","#6a2208","#d6b48a",2.6,.42,e,i+2.8,t+3.7)),Z(n,[[28,8],[32,8],[36,8]],r.tankCh4,.11),n}function Pm(){const n=new I;n.name="o2-return";const e=36,t=-6,i=A(e,t);n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t));for(let a=0;a<3;a++)n.add(c(new z(1.05,1.05,5.6,14),r.tankO2,e-2.4+a*2.4,i+1.4,t,0,0,Math.PI/2));return n.add(_("O2","#2a3340","#e8eef4",1.8,.5,e,i+3.35,t+3.7)),n.add(_("RETURN","#2a3340","#d6b48a",2.6,.42,e,i+2.8,t+3.7)),Z(n,[[36,8],[36,1],[36,-6]],r.steel,.11),n}function Dm(){const n=new I;n.name="isru-electrolysis";const e=-50,t=4,i=A(e,t);n.add(c(new f(11.6,.2,7.4),r.concrete,e,i+.1,t)),n.add(c(new f(3.4,3.6,2.6),r.habDark,e-2.6,i+2,t)),n.add(c(new f(3.4,3.6,2.6),r.steelDark,e+1.2,i+2,t));for(let a=0;a<4;a++)n.add(c(new f(.18,3.1,2.2),r.steel,e-3.8+a*.7,i+2,t));return n.add(c(new z(1.15,1.15,5.2,14),r.steel,e+4.2,i+2.8,t+1.4)),n.add(c(new z(.95,.95,4.4,14),r.tankO2,e+4.2,i+2.4,t-1.6)),n.add(_("ELECTRO","#1a100c","#f0c089",3.2,.5,e,i+4.55,t+3.7)),n.add(_("H2 RECYCLE","#1a100c","#d6b48a",3.4,.42,e,i+4,t+3.7)),Z(n,[[-72,-26],[-50,-16],[-50,4]],r.pipe,.11),Z(n,[[-50,4],[-58,4],[-64,-8]],r.steel,.1),n}function Im(){const n=new I;n.name="ice-melt";const e=-58,t=-142,i=A(e,t);n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.6,2.8,3.2),r.habDark,e-1.8,i+1.6,t)),n.add(c(new z(1.45,1.45,4.2,14),r.pipe,e+2.2,i+2.3,t)),n.add(c(new z(.55,.85,1.6,10),r.steelDark,e+2.2,i+4.9,t));const a=c(new ut(1.8,0),r.ice,e-3.4,i+.9,t+2.1);return a.scale.set(1.15,.55,1),n.add(a),n.add(_("MELT","#1a2830","#d6e6ef",2.4,.5,e,i+4.4,t+3.7)),n.add(_("STILL","#1a2830","#d6b48a",2.2,.42,e,i+3.85,t+3.7)),Z(n,[[-58,-158],[-58,-150],[-58,-142]],r.pipe,.11),Z(n,[[-58,-142],[-64,-90],[-68,-26]],r.pipe,.1),n}function zm(){const n=new I;n.name="methalox-pump";const e=-32,t=-22,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(5.2,3.2,4.4),r.habDark,e,i+1.8,t)),n.add(c(new f(5.4,.14,4.6),r.steel,e,i+3.5,t)),n.add(c(new z(.55,.55,1.8,10),r.tankCh4,e-1.4,i+1.1,t+2.6,0,0,Math.PI/2)),n.add(c(new z(.55,.55,1.8,10),r.steel,e+1.4,i+1.1,t+2.6,0,0,Math.PI/2)),n.add(_("PUMP","#1a100c","#f0c089",2.4,.5,e,i+4.15,t+3.7)),n.add(_("METHALOX","#1a100c","#d6b48a",3.2,.42,e,i+3.6,t+3.7)),Z(n,[[-32,-14],[-32,-18],[-32,-22]],r.tankCh4,.11),Z(n,[[-32,-18],[-32,-22],[-18,-10]],r.steel,.1),n}function Lm(){const n=new I;n.name="sinter-press";const e=66,t=-90,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(4.6,2.2,3.4),r.steelDark,e,i+1.3,t)),n.add(c(new f(1.4,3.4,1.4),r.steel,e,i+3.2,t)),n.add(c(new f(3.2,.35,2.4),r.steel,e,i+4.9,t)),n.add(c(new f(2.2,.55,1.6),r.habDark,e,i+2.55,t)),oe(n,62.2,-87.6,.2,.9),oe(n,70,-92.2,-.15,.85),n.add(_("SINTER","#1a100c","#f0c089",2.8,.5,e,i+5.55,t+3.7)),n.add(_("PRESS","#1a100c","#d6b48a",2.4,.42,e,i+5,t+3.7)),n}function Um(){const n=new I;n.name="waste-recycle";const e=22,t=-98,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(4.4,2.8,3.6),r.habDark,e-1.4,i+1.6,t)),n.add(c(new z(1.15,1.15,3.6,14),r.pipe,e+2.8,i+2,t)),n.add(c(new z(.85,.85,2.8,12),r.steelDark,e+2.8,i+1.6,t+2)),n.add(_("WASTE","#1a100c","#f0c089",2.6,.5,e,i+4.25,t+3.7)),n.add(_("RECOVERY","#1a100c","#d6b48a",3.2,.42,e,i+3.7,t+3.7)),Z(n,[[8,-98],[14,-98],[22,-98]],r.pipe,.1),Z(n,[[22,-98],[22,-112],[22,-112]],r.pipe,.09),n}function Nm(){const n=new I;n.name="solar-combiner";const e=172,t=-48,i=A(e,t);n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.6,2.4,2.8),r.habDark,e-2,i+1.4,t)),n.add(c(new f(3.2,2,2.4),r.steelDark,e+2.2,i+1.2,t));for(let a=0;a<3;a++)n.add(c(new f(.7,1.5,1.8),r.battery,e+1.2+a*.85,i+1,t));return n.add(_("COMBINER","#111111","#f4e6c8",3.4,.5,e,i+3.55,t+3.7)),n.add(_("FIELD 4","#111111","#d6b48a",2.6,.42,e,i+3,t+3.7)),Z(n,[[158,-62],[166,-54],[172,-48]],r.cable,.1),Z(n,[[172,-48],[164,-38],[158,-28]],r.cable,.09),n}function Om(){const n=new I;n.name="gh-dust-filter";const e=38,t=-104,i=A(e,t);return n.add(c(new f(9.2,.18,5.6),r.concrete,e,i+.09,t)),n.add(c(new f(3.8,2.6,2.4),r.habDark,e-1.6,i+1.5,t)),n.add(c(new z(.95,.95,3.2,12),r.steelDark,e+2.4,i+1.8,t)),n.add(c(new f(.12,2.2,2),r.lattice,e+3.5,i+1.4,t)),n.add(_("DUST","#1a100c","#f0c089",2.2,.45,e,i+3.55,t+2.9)),n.add(_("FILTER","#1a100c","#d6b48a",2.6,.4,e,i+3.05,t+2.9)),Z(n,[[22,-112],[30,-108],[38,-104]],r.pipe,.1),Z(n,[[38,-104],[46,-108],[52,-112]],r.pipe,.09),n}function Fm(){const n=new I;n.name="weather-mast";const e=24,t=-128,i=A(e,t);return n.add(c(new f(3.6,.16,3.6),r.concrete,e,i+.08,t)),n.add(c(new z(.16,.22,14.4,8),r.lattice,e,i+7.3,t)),n.add(c(new f(2.8,.08,.08),r.steel,e,i+12.4,t)),n.add(c(new f(.08,.08,2.8),r.steel,e,i+12.4,t)),n.add(c(new f(2.2,.06,.06),r.steelDark,e,i+14.2,t)),n.add(c(new f(1.4,1.1,1.1),r.habDark,e+1.15,i+.75,t+.9)),n.add(_("MET","#1a100c","#f0c089",1.8,.42,e,i+8.6,t+1.6)),n.add(_("DUST","#1a100c","#d6b48a",2,.38,e,i+8.1,t+1.6)),n}function km(){const n=new I;n.name="ch4-chiller";const e=-80,t=20,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(4.2,2.6,3.2),r.habDark,e-1.6,i+1.5,t)),n.add(c(new z(1.25,1.25,5,14),r.tankCh4,e+2.6,i+2.7,t)),n.add(c(new Ce(1.55,.1,6,14),r.steel,e+2.6,i+4.4,t,Math.PI/2,0,0)),n.add(_("CH4","#6a2208","#f4e6c8",2,.45,e,i+4.15,t+3.7)),n.add(_("CHILLER","#1a100c","#d6b48a",2.8,.4,e,i+3.6,t+3.7)),Z(n,[[-76,-10],[-80,6],[-80,20]],r.tankCh4,.11),Z(n,[[-68,12],[-74,16],[-80,20]],r.pipe,.09),n}function Bm(){const n=new I;n.name="pad2-beacons";const e=[[2,154],[-34,154],[2,118],[-34,118]];for(const[s,o]of e){const d=A(s,o);n.add(c(new z(.14,.18,5.6,8),r.steelDark,s,d+2.9,o)),n.add(c(new f(.55,.55,.55),r.glowPad,s,d+5.85,o)),n.add(c(new f(.22,.9,.22),r.steel,s,d+6.4,o))}const t=6,i=148,a=A(t,i);return n.add(c(new f(5.4,.16,4.2),r.concrete,t,a+.08,i)),n.add(c(new f(2.6,1.6,1.8),r.habDark,t,a+1,i)),n.add(_("PAD 2","#1a100c","#f0c089",2.2,.42,t,a+2.35,i+2.2)),n.add(_("BEACONS","#1a100c","#d6b48a",2.6,.38,t,a+1.88,i+2.2)),n}function Hm(){const n=new I;n.name="cargo-crane";const e=-64,t=80,i=A(e,t);return n.add(c(new f(7.2,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(1.4,10.4,1.4),r.steelDark,e,i+5.3,t)),n.add(c(new f(.28,.28,12.4),r.steel,e+3.6,i+10.5,t-3.2,0,.55,.08)),n.add(c(new f(.18,3.2,.18),r.steelDark,e+7.4,i+8.4,t-6.6)),n.add(c(new f(1.5,1.3,1.5),r.crate,e+7.4,i+6.5,t-6.6)),oe(n,e-2.4,t+2.2,.2,1),oe(n,e-2.8,t-1.6,-.15,.9),n.add(_("CRANE","#1a100c","#f0c089",2.6,.5,e,i+6.4,t+3.6)),n.add(_("CARGO","#1a100c","#d6b48a",2.4,.42,e,i+5.85,t+3.6)),n}function Gm(){const n=new I;n.name="o2-chiller";const e=-80,t=32,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(4.2,2.6,3.2),r.habDark,e-1.6,i+1.5,t)),n.add(c(new z(1.25,1.25,5,14),r.tankO2,e+2.6,i+2.7,t)),n.add(c(new Ce(1.55,.1,6,14),r.steel,e+2.6,i+4.4,t,Math.PI/2,0,0)),n.add(_("O2","#2a3340","#e8eef4",1.8,.45,e,i+4.15,t+3.7)),n.add(_("CHILLER","#1a100c","#d6b48a",2.8,.4,e,i+3.6,t+3.7)),Z(n,[[-80,20],[-80,26],[-80,32]],r.steel,.11),Z(n,[[-72,-21],[-80,8],[-80,32]],r.steel,.09),n}function Vm(){const n=new I;n.name="power-trench";const e=100,t=-22,i=A(e,t);n.add(c(new f(7.6,.18,5.4),r.concrete,e,i+.08,t)),n.add(c(new f(3.2,1.8,2.4),r.habDark,e,i+1.1,t)),n.add(c(new f(1.4,.9,1.1),r.steelDark,e+2.4,i+.65,t+1.2)),n.add(_("POWER","#111111","#f4e6c8",2.6,.45,e,i+2.45,t+2.8)),n.add(_("TRENCH","#111111","#d6b48a",2.4,.38,e,i+1.95,t+2.8)),Z(n,[[172,-48],[135,-40],[100,-22]],r.cable,.12),Z(n,[[100,-22],[84,-16],[68,-10]],r.cable,.12);for(const[a,s]of[[148,-44],[122,-34],[84,-16]]){const o=A(a,s);n.add(c(new f(2.4,.16,1.1),r.steelDark,a,o+.12,s))}return n}function Wm(){const n=new I;n.name="regolith-stock";const e=-22,t=-56,i=A(e,t);n.add(c(new f(9.6,.16,7.2),r.concrete,e,i+.08,t));const a=c(new ut(2.6,0),r.soil,e-1.6,i+1.2,t);a.scale.set(1.35,.7,1.15),n.add(a);const s=c(new ut(2,0),r.soil,e+2.2,i+.95,t+1.1);return s.scale.set(1.2,.6,1.05),n.add(s),n.add(c(new f(2.2,1.2,1.6),r.steelDark,e+2.6,i+.8,t-2)),oe(n,e-3.4,t-2.2,.2,.85),n.add(_("REGOLITH","#1a100c","#f0c089",3.4,.48,e,i+3.15,t+3.7)),n.add(_("SINTER FEED","#1a100c","#d6b48a",3.4,.4,e,i+2.6,t+3.7)),n}function Xm(){const n=new I;n.name="survey-2";const e=-124,t=-188,i=A(e,t);for(let s=0;s<3;s++){const o=s/3*Math.PI*2+.2,d=Math.cos(o)*.62,u=Math.sin(o)*.62;n.add(c(new f(.08,2.5,.08),r.steelDark,e+d,i+1.15,t+u,.32*Math.cos(o),0,.32*Math.sin(o)))}n.add(c(new f(.58,.32,.48),r.steelDark,e,i+2.28,t)),n.add(_("SURVEY 2","#1a100c","#f0c089",3,.55,e,i+3.4,t+1.2)),n.add(_("ICE WEST","#1a100c","#d6b48a",2.6,.4,e,i+2.85,t+1.2));const a=[[-136,-200],[-124,-200],[-112,-200],[-136,-188],[-124,-188],[-112,-188],[-136,-176],[-124,-176],[-112,-176]];for(let s=0;s<a.length;s++){const[o,d]=a[s];Yr(n,o,d,s%2===0?r.flagIce:r.flagDeposit)}return Za(n,-130,-196,"ICE",r.flagIce),Cr(n,-122,-184,.2),Cr(n,-126.4,-182.6,-.3),n}function qm(){const n=new I;n.name="h2-recycle";const e=-38,t=16,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new z(1.55,1.55,6.4,16),r.steel,e-1.8,i+3.4,t)),n.add(c(new z(1.55,1.55,6.4,16),r.steel,e+1.8,i+3.4,t)),n.add(c(new f(2.2,1.4,1.6),r.habDark,e,i+.9,t+2.2)),n.add(_("H2","#1a100c","#f0c089",1.8,.5,e,i+5.15,t+3.7)),n.add(_("RECYCLE","#1a100c","#d6b48a",2.8,.42,e,i+4.55,t+3.7)),Z(n,[[-50,4],[-44,10],[-38,16]],r.steel,.11),Z(n,[[-38,16],[-52,8],[-64,-8]],r.steel,.1),n}function Ym(){const n=new I;n.name="food-4";const e=70,t=-112,i=A(e,t);n.add(c(new f(11.6,.22,7.2),r.concrete,e,i+.1,t));const a=new ot(new z(3.3,3.3,11.2,16,1,!1,0,Math.PI),r.glass);a.rotation.z=Math.PI/2,a.position.set(e,i+3.3,t),a.castShadow=!1,n.add(a),n.add(c(new f(10.8,.1,6.6),r.solarFrame,e,i+3.35,t));for(let s=-2;s<=2;s++){n.add(c(new f(1.7,.22,5.2),r.soil,e+s*1.95,i+.32,t));for(let o=-2;o<=2;o++){const d=o%2===0?r.plant:r.plantLeaf;n.add(c(new f(1.15,.5,.66),d,e+s*1.95,i+.7,t+o*.9))}}return n.add(_("GROW 4","#1a100c","#f0c089",2.8,.55,e,i+4.75,t+.15)),n.add(_("FROM CO2","#1a100c","#d6b48a",3,.42,e,i+4.15,t+.15)),Z(n,[[52,-112],[62,-112],[70,-112]],r.pipe,.1),n}function Km(){const n=new I;n.name="approach-lights";for(const[a,s]of[[4,68],[4,50],[4,32]]){const o=A(a,s);n.add(c(new z(.12,.16,3.6,8),r.steelDark,a,o+1.9,s)),n.add(c(new f(.42,.42,.42),r.glowPad,a,o+3.85,s))}const e=16,t=48,i=A(e,t);return n.add(c(new f(5.2,.16,4),r.concrete,e,i+.08,t)),n.add(c(new f(2.4,1.5,1.6),r.habDark,e,i+.95,t)),n.add(_("APPROACH","#1a100c","#f0c089",3,.42,e,i+2.25,t+2.1)),n.add(_("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function Jm(){const n=new I;n.name="isru-process-water";const e=-58,t=-36,i=A(e,t);return n.add(c(new f(11.2,.2,7.4),r.concrete,e,i+.1,t)),n.add(c(new z(1.7,1.7,8.4,16),r.pipe,e-2.2,i+2,t,0,0,Math.PI/2)),n.add(c(new z(1.7,1.7,8.4,16),r.pipe,e+2,i+2,t,0,0,Math.PI/2)),n.add(c(new f(2.4,1.6,1.8),r.habDark,e,i+1,t+2.4)),n.add(_("PROCESS","#1a2830","#d6e6ef",3.2,.5,e,i+4.55,t+3.8)),n.add(_("H2O","#1a2830","#d6b48a",2,.42,e,i+4,t+3.8)),Z(n,[[-58,-142],[-58,-90],[-58,-36]],r.pipe,.11),Z(n,[[-58,-36],[-64,-26],[-68,-16]],r.pipe,.1),Z(n,[[-58,-36],[-50,-16],[-50,4]],r.pipe,.1),n}function Zm(){const n=new I;n.name="methalox-berm";const e=c(new Ce(9.2,1.7,8,24,Math.PI*1.2),r.rust,50,A(50,4)-.15,4,Math.PI/2,1.6,0);e.scale.set(1,.45,1),n.add(e);for(const[s,o]of[[54,12],[56,4],[54,-4]]){const d=c(new ut(2.2,0),r.rust,s,A(s,o)+.9,o);d.scale.set(1.2,.55,1.05),n.add(d)}const[t,i,a]=Pt(50,4,2.2);return n.add(_("FARM BERM","#1a100c","#f0c089",3.4,.55,t,i+1.1,a)),n.add(_("METHALOX","#1a100c","#d6b48a",3.2,.42,t,i+.5,a)),n}function $m(){const n=new I;n.name="ice-mine-berm";const e=c(new Ce(8.4,1.6,8,24,Math.PI*1.15),r.rust,-40,A(-40,-168)-.15,-168,Math.PI/2,.4,0);e.scale.set(1,.44,1),n.add(e);for(const[s,o]of[[-34,-162],[-32,-170],[-38,-176]]){const d=c(new ut(2.1,0),r.rust,s,A(s,o)+.85,o);d.scale.set(1.15,.55,1),n.add(d)}const[t,i,a]=Pt(-40,-168,2.2);return n.add(_("MINE BERM","#1a2830","#d6e6ef",3.4,.55,t,i+1.1,a)),n.add(_("ICE 1","#1a2830","#d6b48a",2.2,.42,t,i+.5,a)),n}function jm(){const n=new I;n.name="tool-crib";const e=82,t=-90,i=A(e,t);n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(7.2,2.6,3.4),r.habDark,e,i+1.5,t)),n.add(c(new f(7.4,.12,3.6),r.steel,e,i+2.85,t));for(let a=-2;a<=2;a++)n.add(c(new f(.9,1.6,.55),r.steelDark,e+a*1.15,i+1.15,t+1.35));return oe(n,77.8,-87.4,.15,.85),oe(n,86.2,-92.4,-.1,.8),n.add(_("TOOL","#1a100c","#f0c089",2.2,.5,e,i+3.85,t+3.7)),n.add(_("CRIB","#1a100c","#d6b48a",2,.42,e,i+3.3,t+3.7)),n}function Qm(){const n=new I;n.name="comms-battery";const e=4,t=-148,i=A(e,t);n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t));for(let a=0;a<4;a++)n.add(c(new f(1.7,1.9,3.6),r.battery,e-3.2+a*2.1,i+1.15,t)),n.add(c(new f(1.55,.08,3.4),r.steel,e-3.2+a*2.1,i+2.15,t));return n.add(_("COMMS","#111111","#f4e6c8",2.6,.5,e,i+3.15,t+3.7)),n.add(_("NIGHT","#111111","#d6b48a",2.2,.42,e,i+2.6,t+3.7)),n}function eg(){const n=new I;n.name="solar-combiner-3";const e=148,t=-40,i=A(e,t);n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.6,2.4,2.8),r.habDark,e-2,i+1.4,t)),n.add(c(new f(3.2,2,2.4),r.steelDark,e+2.2,i+1.2,t));for(let a=0;a<3;a++)n.add(c(new f(.7,1.5,1.8),r.battery,e+1.2+a*.85,i+1,t));return n.add(_("COMBINER","#111111","#f4e6c8",3.4,.5,e,i+3.55,t+3.7)),n.add(_("FIELD 3","#111111","#d6b48a",2.6,.42,e,i+3,t+3.7)),Z(n,[[135,-40],[142,-40],[148,-40]],r.cable,.1),Z(n,[[148,-40],[124,-30],[100,-22]],r.cable,.09),n}function tg(){const n=new I;n.name="solar-combiner-2";const e=124,t=-70,i=A(e,t);n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.6,2.4,2.8),r.habDark,e-2,i+1.4,t)),n.add(c(new f(3.2,2,2.4),r.steelDark,e+2.2,i+1.2,t));for(let a=0;a<3;a++)n.add(c(new f(.7,1.5,1.8),r.battery,e+1.2+a*.85,i+1,t));return n.add(_("COMBINER","#111111","#f4e6c8",3.4,.5,e,i+3.55,t+3.7)),n.add(_("FIELD 2","#111111","#d6b48a",2.6,.42,e,i+3,t+3.7)),Z(n,[[112,-83],[118,-76],[124,-70]],r.cable,.1),Z(n,[[124,-70],[136,-54],[148,-40]],r.cable,.09),n}function ng(){const n=new I;n.name="solar-combiner-1";const e=96,t=-44,i=A(e,t);n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.6,2.4,2.8),r.habDark,e-2,i+1.4,t)),n.add(c(new f(3.2,2,2.4),r.steelDark,e+2.2,i+1.2,t));for(let a=0;a<3;a++)n.add(c(new f(.7,1.5,1.8),r.battery,e+1.2+a*.85,i+1,t));return n.add(_("COMBINER","#111111","#f4e6c8",3.4,.5,e,i+3.55,t+3.7)),n.add(_("FARM 1","#111111","#d6b48a",2.4,.42,e,i+3,t+3.7)),Z(n,[[82,-44],[90,-44],[96,-44]],r.cable,.1),Z(n,[[96,-44],[98,-32],[100,-22]],r.cable,.09),n}function ig(){const n=new I;n.name="sabatier-condenser";const e=-84,t=8,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.8,2.4,2.8),r.habDark,e-2,i+1.4,t)),n.add(c(new z(1.35,1.35,4.6,14),r.pipe,e+2.4,i+2.5,t)),n.add(c(new Ce(1.65,.1,6,14),r.steel,e+2.4,i+4.1,t,Math.PI/2,0,0)),n.add(c(new z(.7,.7,2.4,12),r.steelDark,e+2.4,i+1.4,t+2.1)),n.add(_("KNOCKOUT","#1a2830","#d6e6ef",3.4,.45,e,i+4.15,t+3.7)),n.add(_("H2O","#1a2830","#d6b48a",1.8,.4,e,i+3.6,t+3.7)),Z(n,[[-68,-16],[-76,-4],[-84,8]],r.pipe,.11),Z(n,[[-84,8],[-80,14],[-80,20]],r.tankCh4,.09),n}function ag(){const n=new I;n.name="hab-dust-lock";const e=16,t=-86,i=A(e,t);return n.add(c(new f(8.4,.2,6.4),r.concrete,e,i+.1,t)),n.add(c(new f(6.2,3.4,4.4),r.habDark,e,i+1.9,t)),n.add(c(new f(6.4,.16,4.6),r.steel,e,i+3.65,t)),n.add(c(new f(1.8,2.4,.22),r.steelDark,e,i+1.5,t+2.3)),n.add(c(new f(1.8,2.4,.22),r.steelDark,e,i+1.5,t-2.3)),n.add(zt(e+2.6,t+.2,.1)),n.add(_("DUST LOCK","#1a100c","#f0c089",3.4,.45,e,i+4.35,t+2.4)),n.add(_("HAB EVA","#1a100c","#d6b48a",2.6,.4,e,i+3.85,t+2.4)),n}function sg(){const n=new I;n.name="field3-night";const e=135,t=-22,i=A(e,t);n.add(c(new f(12,.2,7.2),r.concrete,e,i+.1,t));for(let a=0;a<5;a++)n.add(c(new f(1.7,2,4.2),r.battery,e-4+a*2,i+1.2,t));return n.add(_("NIGHT","#111111","#f4e6c8",2.2,.5,e,i+2.7,t+3.6)),n.add(_("FIELD 3","#111111","#d6b48a",2.4,.42,e,i+2.15,t+3.6)),Z(n,[[148,-40],[142,-30],[135,-22]],r.cable,.1),Z(n,[[135,-22],[118,-22],[100,-22]],r.cable,.09),n}function rg(){const n=new I;n.name="field2-night";const e=100,t=-70,i=A(e,t);n.add(c(new f(12,.2,7.2),r.concrete,e,i+.1,t));for(let a=0;a<5;a++)n.add(c(new f(1.7,2,4.2),r.battery,e-4+a*2,i+1.2,t));return n.add(_("NIGHT","#111111","#f4e6c8",2.2,.5,e,i+2.7,t+3.6)),n.add(_("FIELD 2","#111111","#d6b48a",2.4,.42,e,i+2.15,t+3.6)),Z(n,[[124,-70],[112,-70],[100,-70]],r.cable,.1),Z(n,[[100,-70],[100,-46],[100,-22]],r.cable,.09),n}function og(){const n=new I;n.name="farm1-night";const e=82,t=-28,i=A(e,t);n.add(c(new f(12,.2,7.2),r.concrete,e,i+.1,t));for(let a=0;a<5;a++)n.add(c(new f(1.7,2,4.2),r.battery,e-4+a*2,i+1.2,t));return n.add(_("NIGHT","#111111","#f4e6c8",2.2,.5,e,i+2.7,t+3.6)),n.add(_("FARM 1","#111111","#d6b48a",2.4,.42,e,i+2.15,t+3.6)),Z(n,[[82,-44],[82,-36],[82,-28]],r.cable,.1),Z(n,[[82,-28],[74,-18],[68,-10]],r.cable,.09),n}function cg(){const n=new I;n.name="co2-capture-1";const e=-68,t=2,i=A(e,t);return n.add(c(new f(11.6,.2,7.4),r.concrete,e,i+.1,t)),n.add(c(new z(.55,.55,6.8,10),r.steel,e-2.4,i+3.6,t)),n.add(c(new z(2.1,.65,2.4,14),r.steelDark,e-2.4,i+7.8,t)),n.add(c(new Ce(1.85,.1,6,16),r.steel,e-2.4,i+9.1,t,Math.PI/2,0,0)),n.add(c(new f(3.2,2.2,2.4),r.habDark,e+2.2,i+1.3,t)),n.add(_("CO2","#1a100c","#f0c089",2.2,.55,e-2.4,i+4.8,t+1.4)),n.add(_("INTAKE 1","#1a100c","#d6b48a",3,.45,e+2.2,i+2.7,t+1.35)),Z(n,[[-68,2],[-68,-8],[-68,-16]],r.pipe,.12),n}function dg(){const n=new I;n.name="field3-dust-fence";const e=122,t=-40,i=A(e,t);for(let a=0;a<8;a++){const s=t-10.5+a*3;n.add(c(new f(.18,3.4,.18),r.steelDark,e,i+1.8,s)),a<7&&n.add(c(new f(.06,2.6,2.7),r.lattice,e,i+1.7,s+1.5))}return n.add(_("DUST","#1a100c","#f0c089",2.4,.45,e-1.4,i+3.5,t)),n.add(_("FIELD 3","#1a100c","#d6b48a",2.6,.4,e-1.4,i+3,t)),n}function lg(){const n=new I;n.name="field2-dust-fence";const e=98,t=-83,i=A(e,t);for(let a=0;a<8;a++){const s=t-10.5+a*3;n.add(c(new f(.18,3.4,.18),r.steelDark,e,i+1.8,s)),a<7&&n.add(c(new f(.06,2.6,2.7),r.lattice,e,i+1.7,s+1.5))}return n.add(_("DUST","#1a100c","#f0c089",2.4,.45,e-1.4,i+3.5,t)),n.add(_("FIELD 2","#1a100c","#d6b48a",2.6,.4,e-1.4,i+3,t)),n}function hg(){const n=new I;n.name="farm1-dust-fence";const e=70,t=-44,i=A(e,t);for(let a=0;a<8;a++){const s=t-10.5+a*3;n.add(c(new f(.18,3.4,.18),r.steelDark,e,i+1.8,s)),a<7&&n.add(c(new f(.06,2.6,2.7),r.lattice,e,i+1.7,s+1.5))}return n.add(_("DUST","#1a100c","#f0c089",2.4,.45,e-1.4,i+3.5,t)),n.add(_("FARM 1","#1a100c","#d6b48a",2.4,.4,e-1.4,i+3,t)),n}function ug(){const n=new I;n.name="ice-crush-cover";const e=-102,t=-158,i=A(e,t);n.add(c(new f(10.4,.18,8.2),r.concrete,e,i+.09,t));for(const[s,o]of[[-4.2,-3.2],[4.2,-3.2],[-4.2,3.2],[4.2,3.2]])n.add(c(new z(.16,.2,4.2,8),r.steelDark,e+s,i+2.2,t+o));n.add(c(new f(10.8,.14,8.6),r.steel,e,i+4.4,t)),n.add(c(new f(3.2,1.8,2.4),r.steelDark,e,i+1.1,t));const a=c(new ut(1.6,0),r.ice,e+2.8,i+.85,t+1.6);return a.scale.set(1.2,.55,1.05),n.add(a),n.add(_("CRUSH","#1a2830","#d6e6ef",2.6,.45,e,i+4.95,t+4.3)),n.add(_("COVER","#1a2830","#d6b48a",2.4,.4,e,i+4.45,t+4.3)),n}function fg(){const n=new I;n.name="batteries-4";const e=-18,t=-78,i=A(e,t);n.add(c(new f(11.6,.2,6.4),r.concrete,e,i+.1,t));for(let a=0;a<5;a++)n.add(c(new f(1.7,1.95,3.8),r.battery,e-4+a*2,i+1.15,t)),n.add(c(new f(1.55,.08,3.6),r.steel,e-4+a*2,i+2.18,t));return n.add(_("NIGHT","#111111","#f4e6c8",2.4,.5,e,i+2.7,t+3.3)),n.add(_("HAB 4","#111111","#d6b48a",2.2,.42,e,i+2.15,t+3.3)),n}function pg(){const n=new I;n.name="ice-mine-2-berm";const e=c(new Ce(8.4,1.6,8,24,Math.PI*1.15),r.rust,-64,A(-64,-184)-.15,-184,Math.PI/2,.55,0);e.scale.set(1,.44,1),n.add(e);for(const[s,o]of[[-58,-178],[-56,-186],[-62,-192]]){const d=c(new ut(2.1,0),r.rust,s,A(s,o)+.85,o);d.scale.set(1.15,.55,1),n.add(d)}const[t,i,a]=Pt(-64,-184,2.2);return n.add(_("MINE BERM","#1a2830","#d6e6ef",3.4,.55,t,i+1.1,a)),n.add(_("ICE 2","#1a2830","#d6b48a",2.2,.42,t,i+.5,a)),n}function mg(){const n=new I;n.name="potable-uv";const e=32,t=-152,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(4.2,2.6,3.4),r.habDark,e-1.6,i+1.5,t)),n.add(c(new z(1.05,1.05,3.4,14),r.pipe,e+2.6,i+1.9,t)),n.add(c(new f(1.6,1.4,1.2),r.steel,e+2.6,i+3.9,t)),n.add(_("UV","#1a2830","#d6e6ef",1.6,.5,e,i+4.15,t+3.7)),n.add(_("POLISH","#1a2830","#d6b48a",2.6,.42,e,i+3.6,t+3.7)),Z(n,[[18,-152],[24,-152],[32,-152]],r.pipe,.1),n}function gg(){const n=new I;n.name="isru-radiators-2";const e=-96,t=16,i=A(e,t);n.add(c(new f(16.4,.18,6.2),r.concrete,e,i+.08,t));for(let a=0;a<5;a++){const s=e-6+a*3;n.add(c(new f(.16,3.6,.16),r.steelDark,s,i+1.9,t-1.8)),n.add(c(new f(.16,3.6,.16),r.steelDark,s,i+1.9,t+1.8)),n.add(c(new f(2.4,3.2,.08),r.solar,s,i+2.4,t,-.15,0,0)),n.add(c(new f(2.5,3.3,.04),r.steel,s,i+2.4,t+.06,-.15,0,0))}return n.add(_("REJECT","#1a100c","#f0c089",2.8,.5,e,i+4.55,t+3.2)),n.add(_("TRAIN 2","#1a100c","#d6b48a",2.8,.42,e,i+4,t+3.2)),Z(n,[[-96,-6],[-96,4],[-96,16]],r.pipe,.1),n}function xg(){const n=new I;n.name="workshop-3";const e=82,t=-74,i=A(e,t);n.add(c(new f(16,.28,12),r.concrete,e,i+.1,t));const a=c(new z(5.4,5.4,14,16,1,!1,0,Math.PI),r.habDark,e-1.2,i+3.1,t);return a.rotation.z=Math.PI/2,n.add(a),n.add(c(new f(.2,3.8,5.8),r.steelDark,e-8.1,i+2,t)),n.add(c(new f(.28,8.4,.28),r.lattice,e+6.4,i+4.3,t-3.6)),n.add(c(new f(7.2,.2,.2),r.lattice,e+3,i+8.5,t-3.6)),n.add(c(new f(1.5,1.1,1.5),r.crate,e+2.2,i+8,t-3.4)),oe(n,89.2,-69.4,.2),oe(n,90.4,-71.6,-.3,1.05),oe(n,74.6,-68.8,.15,.9),n.add(_("WORKSHOP","#1a100c","#f0c089",3.8,.75,e,i+5.4,t+.2)),n.add(_("BAY 3","#1a100c","#d6b48a",2.6,.5,e,i+4.7,t+.2)),n}function _g(){const n=new I;n.name="ice-melt-2";const e=-78,t=-156,i=A(e,t);n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.6,2.8,3.2),r.habDark,e-1.8,i+1.6,t)),n.add(c(new z(1.45,1.45,4.2,14),r.pipe,e+2.2,i+2.3,t)),n.add(c(new z(.55,.85,1.6,10),r.steelDark,e+2.2,i+4.9,t));const a=c(new ut(1.8,0),r.ice,e-3.4,i+.9,t+2.1);return a.scale.set(1.15,.55,1),n.add(a),n.add(_("MELT","#1a2830","#d6e6ef",2.4,.5,e,i+4.4,t+3.7)),n.add(_("MINE 2","#1a2830","#d6b48a",2.6,.42,e,i+3.85,t+3.7)),Z(n,[[-78,-172],[-78,-164],[-78,-156]],r.pipe,.11),Z(n,[[-78,-156],[-90,-90],[-96,-26]],r.pipe,.1),n}function wg(){const n=new I;n.name="sabatier-condenser-2";const e=-110,t=8,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.8,2.4,2.8),r.habDark,e-2,i+1.4,t)),n.add(c(new z(1.35,1.35,4.6,14),r.pipe,e+2.4,i+2.5,t)),n.add(c(new Ce(1.65,.1,6,14),r.steel,e+2.4,i+4.1,t,Math.PI/2,0,0)),n.add(c(new z(.7,.7,2.4,12),r.steelDark,e+2.4,i+1.4,t+2.1)),n.add(_("KNOCKOUT","#1a2830","#d6e6ef",3.4,.45,e,i+4.15,t+3.7)),n.add(_("TRAIN 2","#1a2830","#d6b48a",2.8,.4,e,i+3.6,t+3.7)),Z(n,[[-96,-16],[-104,-4],[-110,8]],r.pipe,.11),n}function vg(){const n=new I;n.name="ch4-chiller-2";const e=-110,t=20,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(4.2,2.6,3.2),r.habDark,e-1.6,i+1.5,t)),n.add(c(new z(1.25,1.25,5,14),r.tankCh4,e+2.6,i+2.7,t)),n.add(c(new Ce(1.55,.1,6,14),r.steel,e+2.6,i+4.4,t,Math.PI/2,0,0)),n.add(_("CH4","#6a2208","#f4e6c8",2,.45,e,i+4.15,t+3.7)),n.add(_("TRAIN 2","#1a100c","#d6b48a",2.8,.4,e,i+3.6,t+3.7)),Z(n,[[-110,8],[-110,14],[-110,20]],r.tankCh4,.11),n}function Mg(){const n=new I;n.name="o2-chiller-2";const e=-110,t=32,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(4.2,2.6,3.2),r.habDark,e-1.6,i+1.5,t)),n.add(c(new z(1.25,1.25,5,14),r.tankO2,e+2.6,i+2.7,t)),n.add(c(new Ce(1.55,.1,6,14),r.steel,e+2.6,i+4.4,t,Math.PI/2,0,0)),n.add(_("O2","#2a3340","#e8eef4",1.8,.45,e,i+4.15,t+3.7)),n.add(_("TRAIN 2","#1a100c","#d6b48a",2.8,.4,e,i+3.6,t+3.7)),Z(n,[[-110,20],[-110,26],[-110,32]],r.steel,.11),n}function bg(){const n=new I;n.name="isru-electrolysis-2";const e=-122,t=8,i=A(e,t);n.add(c(new f(11.6,.2,7.4),r.concrete,e,i+.1,t)),n.add(c(new f(3.4,3.6,2.6),r.habDark,e-2.6,i+2,t)),n.add(c(new f(3.4,3.6,2.6),r.steelDark,e+1.2,i+2,t));for(let a=0;a<4;a++)n.add(c(new f(.18,3.1,2.2),r.steel,e-3.8+a*.7,i+2,t));return n.add(c(new z(1.15,1.15,5.2,14),r.steel,e+4.2,i+2.8,t+1.4)),n.add(c(new z(.95,.95,4.4,14),r.tankO2,e+4.2,i+2.4,t-1.6)),n.add(_("ELECTRO","#1a100c","#f0c089",3.2,.5,e,i+4.55,t+3.7)),n.add(_("TRAIN 2","#1a100c","#d6b48a",2.8,.42,e,i+4,t+3.7)),Z(n,[[-110,8],[-116,8],[-122,8]],r.pipe,.11),n}function yg(){const n=new I;n.name="h2-recycle-2";const e=-122,t=20,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new z(1.55,1.55,6.4,16),r.steel,e-1.8,i+3.4,t)),n.add(c(new z(1.55,1.55,6.4,16),r.steel,e+1.8,i+3.4,t)),n.add(c(new f(2.2,1.4,1.6),r.habDark,e,i+.9,t+2.2)),n.add(_("H2","#1a100c","#f0c089",1.8,.5,e,i+5.15,t+3.7)),n.add(_("TRAIN 2","#1a100c","#d6b48a",2.8,.42,e,i+4.55,t+3.7)),Z(n,[[-122,8],[-122,14],[-122,20]],r.steel,.11),n}function Sg(){const n=new I;n.name="eclss-2";const e=-8,t=-98,i=A(e,t);return n.add(c(new f(11.2,.22,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(4.8,2.6,3.4),r.habDark,e-2.4,i+1.5,t)),n.add(_("ECLSS","#1a100c","#f0c089",3.2,.6,e-2.4,i+3.05,t+1.85)),n.add(_("SCRUB 2","#1a100c","#d6b48a",3,.45,e-2.4,i+2.45,t+1.85)),n.add(c(new z(.85,.85,3.4,12),r.steelDark,e+1.6,i+1.9,t-1.4)),n.add(c(new z(.85,.85,3.4,12),r.steelDark,e+3.4,i+1.9,t-1.4)),n.add(_("AMINE","#1a100c","#d6b48a",2.2,.4,e+2.5,i+3.8,t-1.4)),n.add(c(new z(.7,.7,2.6,12),r.tankO2,e+1.6,i+1.5,t+1.8)),n.add(c(new z(.7,.7,2.6,12),r.tankO2,e+3.4,i+1.5,t+1.8)),n.add(_("O2","#2a3340","#e8eef4",1.4,.4,e+2.5,i+3.05,t+1.8)),Z(n,[[8,-98],[0,-98],[-8,-98]],r.pipe,.1),n}function Eg(){const n=new I;n.name="waste-recycle-2";const e=-22,t=-98,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(4.4,2.8,3.6),r.habDark,e-1.4,i+1.6,t)),n.add(c(new z(1.15,1.15,3.6,14),r.pipe,e+2.8,i+2,t)),n.add(c(new z(.85,.85,2.8,12),r.steelDark,e+2.8,i+1.6,t+2)),n.add(_("WASTE","#1a100c","#f0c089",2.6,.5,e,i+4.25,t+3.7)),n.add(_("RECOVERY 2","#1a100c","#d6b48a",3.6,.42,e,i+3.7,t+3.7)),Z(n,[[-8,-98],[-14,-98],[-22,-98]],r.pipe,.1),n}function Tg(){const n=new I;n.name="o2-buffer-2";const e=8,t=-88,i=A(e,t);n.add(c(new f(10.2,.2,7.4),r.concrete,e,i+.1,t));for(let a=0;a<4;a++){const s=e-3.3+a*2.2;n.add(c(new z(.85,.85,3.6,12),r.tankO2,s,i+2,t))}return n.add(_("O2","#2a3340","#e8eef4",1.8,.5,e,i+4.15,t+3.7)),n.add(_("CREW 2","#2a3340","#d6b48a",2.6,.42,e,i+3.6,t+3.7)),Z(n,[[-8,-88],[0,-88],[8,-88]],r.tankO2,.1),n}function Ag(){const n=new I;n.name="isru-process-water-2";const e=-78,t=-36,i=A(e,t);return n.add(c(new f(11.2,.2,7.4),r.concrete,e,i+.1,t)),n.add(c(new z(1.7,1.7,8.4,16),r.pipe,e-2.2,i+2,t,0,0,Math.PI/2)),n.add(c(new z(1.7,1.7,8.4,16),r.pipe,e+2,i+2,t,0,0,Math.PI/2)),n.add(c(new f(2.4,1.6,1.8),r.habDark,e,i+1,t+2.4)),n.add(_("PROCESS","#1a2830","#d6e6ef",3.2,.5,e,i+4.55,t+3.8)),n.add(_("TRAIN 2","#1a2830","#d6b48a",2.8,.42,e,i+4,t+3.8)),Z(n,[[-78,-156],[-78,-90],[-78,-36]],r.pipe,.11),Z(n,[[-78,-36],[-88,-26],[-96,-16]],r.pipe,.1),n}function Rg(){const n=new I;n.name="parts-rack";const e=96,t=-90,i=A(e,t);n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(8.4,2.8,.22),r.steelDark,e,i+1.6,t-2.4));for(let a=-3;a<=3;a++)n.add(c(new f(.16,2.6,1.8),r.steel,e+a*1.1,i+1.5,t-1.4));return oe(n,92.2,-87.6,.15,.85),oe(n,99.4,-88.2,-.2,1),n.add(_("PARTS","#1a100c","#f0c089",2.6,.5,e,i+3.35,t+3.5)),n.add(_("RACK","#1a100c","#d6b48a",2.2,.42,e,i+2.8,t+3.5)),n}function Cg(){const n=new I;n.name="hab-power-trench";const e=-5,t=-78,i=A(e,t);return n.add(c(new f(7.6,.18,5.4),r.concrete,e,i+.08,t)),n.add(c(new f(3.2,1.8,2.4),r.habDark,e,i+1.1,t)),n.add(c(new f(1.4,.9,1.1),r.steelDark,e+2.4,i+.65,t+1.2)),n.add(_("HAB","#111111","#f4e6c8",1.8,.45,e,i+2.45,t+2.8)),n.add(_("TRENCH","#111111","#d6b48a",2.4,.38,e,i+1.95,t+2.8)),Z(n,[[8,-78],[-5,-78],[-18,-78]],r.cable,.12),n}function Pg(){const n=new I;n.name="comms-inverter";const e=16,t=-148,i=A(e,t);n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.6,2.4,2.8),r.habDark,e-2,i+1.4,t)),n.add(c(new f(3.2,2,2.4),r.steelDark,e+2.2,i+1.2,t));for(let a=0;a<3;a++)n.add(c(new f(.7,1.5,1.8),r.battery,e+1.2+a*.85,i+1,t));return n.add(_("COMMS","#111111","#f4e6c8",2.6,.5,e,i+3.55,t+3.7)),n.add(_("INVERTER","#111111","#d6b48a",3.2,.42,e,i+3,t+3.7)),Z(n,[[4,-148],[10,-148],[16,-148]],r.cable,.1),Z(n,[[-8,-162],[4,-154],[16,-148]],r.cable,.09),n}function Dg(){const n=new I;n.name="ice-weigh";const e=-90,t=-136,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(6.4,.28,3.6),r.steel,e,i+.28,t)),n.add(c(new f(2.2,2.4,1.8),r.habDark,e+3.2,i+1.4,t+2)),n.add(c(new f(.18,3.2,.18),r.steelDark,e-3.6,i+1.8,t-2.4)),n.add(c(new f(.18,3.2,.18),r.steelDark,e+3.6,i+1.8,t-2.4)),n.add(c(new f(7.4,.12,.12),r.steel,e,i+3.45,t-2.4)),n.add(_("WEIGH","#1a2830","#d6e6ef",2.6,.5,e,i+3.15,t+3.7)),n.add(_("ICE HAUL","#1a2830","#d6b48a",3,.42,e,i+2.6,t+3.7)),n}function Ig(){const n=new I;n.name="hab-eva-locker";const e=16,t=-74,i=A(e,t);return n.add(c(new f(7.2,.16,5.4),r.concrete,e,i+.08,t)),n.add(c(new f(5.8,.16,2.4),r.steelDark,e,i+.18,t)),n.add(c(new f(.16,2.8,.16),r.steel,e-2.4,i+1.6,t-.7)),n.add(c(new f(.16,2.8,.16),r.steel,e+2.4,i+1.6,t-.7)),n.add(c(new f(5,.12,.12),r.steel,e,i+3,t-.7)),n.add(zt(e-1.5,t,.2)),n.add(zt(e,t+.15,-.1)),n.add(zt(e+1.5,t,.15)),n.add(_("SUITS","#1a100c","#f0c089",2.4,.45,e,i+3.45,t+2.4)),n.add(_("HAB EVA","#1a100c","#d6b48a",2.8,.4,e,i+2.95,t+2.4)),n}function zg(){const n=new I;n.name="comms-berm";const e=c(new Ce(8.4,1.6,8,24,Math.PI*1.15),r.rust,-48,A(-48,-138)-.15,-138,Math.PI/2,.7,0);e.scale.set(1,.44,1),n.add(e);for(const[s,o]of[[-42,-132],[-40,-140],[-46,-146]]){const d=c(new ut(2.1,0),r.rust,s,A(s,o)+.85,o);d.scale.set(1.15,.55,1),n.add(d)}const[t,i,a]=Pt(-48,-138,2.2);return n.add(_("DUST BERM","#1a2830","#d6e6ef",3.4,.55,t,i+1.1,a)),n.add(_("COMMS","#1a2830","#d6b48a",2.4,.42,t,i+.5,a)),n}function Lg(){const n=new I;n.name="grow-water";const e=52,t=-126,i=A(e,t);return n.add(c(new f(11.2,.2,7.4),r.concrete,e,i+.1,t)),n.add(c(new z(1.7,1.7,8.4,16),r.pipe,e-2.2,i+2,t,0,0,Math.PI/2)),n.add(c(new z(1.7,1.7,8.4,16),r.pipe,e+2,i+2,t,0,0,Math.PI/2)),n.add(c(new f(2.4,1.6,1.8),r.habDark,e,i+1,t+2.4)),n.add(_("GROW","#1a2830","#d6e6ef",2.4,.5,e,i+4.55,t+3.8)),n.add(_("H2O","#1a2830","#d6b48a",2,.42,e,i+4,t+3.8)),Z(n,[[52,-112],[52,-118],[52,-126]],r.pipe,.11),Z(n,[[38,-126],[44,-126],[52,-126]],r.pipe,.1),n}function Ug(){const n=new I;n.name="grow-nutrient";const e=70,t=-126,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(4.4,2.8,3.6),r.habDark,e-1.4,i+1.6,t)),n.add(c(new z(1.15,1.15,3.6,14),r.pipe,e+2.8,i+2,t)),n.add(c(new z(.85,.85,2.8,12),r.steelDark,e+2.8,i+1.6,t+2)),n.add(_("NUTRIENT","#1a100c","#f0c089",3.4,.5,e,i+4.25,t+3.7)),n.add(_("GROW","#1a100c","#d6b48a",2.2,.42,e,i+3.7,t+3.7)),Z(n,[[52,-126],[60,-126],[70,-126]],r.pipe,.1),Z(n,[[70,-112],[70,-118],[70,-126]],r.pipe,.09),n}function Ng(){const n=new I;n.name="hab-street-lights";for(const[a,s]of[[0,-78],[0,-98],[0,-118]]){const o=A(a,s);n.add(c(new z(.12,.16,3.6,8),r.steelDark,a,o+1.9,s)),n.add(c(new f(.42,.42,.42),r.glowPad,a,o+3.85,s))}const e=0,t=-68,i=A(e,t);return n.add(c(new f(5.2,.16,4),r.concrete,e,i+.08,t)),n.add(c(new f(2.4,1.5,1.6),r.habDark,e,i+.95,t)),n.add(_("HAB","#1a100c","#f0c089",1.8,.42,e,i+2.25,t+2.1)),n.add(_("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function Og(){const n=new I;n.name="workshop-lights";for(const[a,s]of[[58,-80],[74,-80],[90,-80]]){const o=A(a,s);n.add(c(new z(.12,.16,3.6,8),r.steelDark,a,o+1.9,s)),n.add(c(new f(.42,.42,.42),r.glowPad,a,o+3.85,s))}const e=48,t=-70,i=A(e,t);return n.add(c(new f(5.2,.16,4),r.concrete,e,i+.08,t)),n.add(c(new f(2.4,1.5,1.6),r.habDark,e,i+.95,t)),n.add(_("SHOP","#1a100c","#f0c089",2,.42,e,i+2.25,t+2.1)),n.add(_("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function Fg(){const n=new I;n.name="ice-mine-lights";for(const[a,s]of[[-58,-148],[-78,-148],[-90,-148]]){const o=A(a,s);n.add(c(new z(.12,.16,3.6,8),r.steelDark,a,o+1.9,s)),n.add(c(new f(.42,.42,.42),r.glowPad,a,o+3.85,s))}const e=-46,t=-148,i=A(e,t);return n.add(c(new f(5.2,.16,4),r.concrete,e,i+.08,t)),n.add(c(new f(2.4,1.5,1.6),r.habDark,e,i+.95,t)),n.add(_("ICE","#1a100c","#f0c089",1.8,.42,e,i+2.25,t+2.1)),n.add(_("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function kg(){const n=new I;n.name="isru-lights";for(const[a,s]of[[-44,12],[-62,16],[-80,16]]){const o=A(a,s);n.add(c(new z(.12,.16,3.6,8),r.steelDark,a,o+1.9,s)),n.add(c(new f(.42,.42,.42),r.glowPad,a,o+3.85,s))}const e=-38,t=16,i=A(e,t);return n.add(c(new f(5.2,.16,4),r.concrete,e,i+.08,t)),n.add(c(new f(2.4,1.5,1.6),r.habDark,e,i+.95,t)),n.add(_("ISRU","#1a100c","#f0c089",2,.42,e,i+2.25,t+2.1)),n.add(_("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function Bg(){const n=new I;n.name="grow-lights";for(const[a,s]of[[22,-104],[38,-118],[52,-104]]){const o=A(a,s);n.add(c(new z(.12,.16,3.6,8),r.steelDark,a,o+1.9,s)),n.add(c(new f(.42,.42,.42),r.glowPad,a,o+3.85,s))}const e=38,t=-104,i=A(e,t);return n.add(c(new f(5.2,.16,4),r.concrete,e,i+.08,t)),n.add(c(new f(2.4,1.5,1.6),r.habDark,e,i+.95,t)),n.add(_("GROW","#1a100c","#f0c089",2,.42,e,i+2.25,t+2.1)),n.add(_("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function Hg(){const n=new I;n.name="solar4-lights";for(const[a,s]of[[158,-48],[148,-48],[172,-62]]){const o=A(a,s);n.add(c(new z(.12,.16,3.6,8),r.steelDark,a,o+1.9,s)),n.add(c(new f(.42,.42,.42),r.glowPad,a,o+3.85,s))}const e=172,t=-48,i=A(e,t);return n.add(c(new f(5.2,.16,4),r.concrete,e,i+.08,t)),n.add(c(new f(2.4,1.5,1.6),r.habDark,e,i+.95,t)),n.add(_("FIELD 4","#1a100c","#f0c089",2.6,.42,e,i+2.25,t+2.1)),n.add(_("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function Gg(){const n=new I;n.name="pad-floods";for(const[a,s]of[[-8,48],[-8,32],[-8,16]]){const o=A(a,s);n.add(c(new z(.12,.16,3.6,8),r.steelDark,a,o+1.9,s)),n.add(c(new f(.42,.42,.42),r.glowPad,a,o+3.85,s))}const e=-16,t=36,i=A(e,t);return n.add(c(new f(5.2,.16,4),r.concrete,e,i+.08,t)),n.add(c(new f(2.4,1.5,1.6),r.habDark,e,i+.95,t)),n.add(_("PAD","#1a100c","#f0c089",1.8,.42,e,i+2.25,t+2.1)),n.add(_("FLOOD","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function Vg(){const n=new I;n.name="comms-lights";for(const[a,s]of[[-8,-138],[4,-148],[16,-138]]){const o=A(a,s);n.add(c(new z(.12,.16,3.6,8),r.steelDark,a,o+1.9,s)),n.add(c(new f(.42,.42,.42),r.glowPad,a,o+3.85,s))}const e=4,t=-138,i=A(e,t);return n.add(c(new f(5.2,.16,4),r.concrete,e,i+.08,t)),n.add(c(new f(2.4,1.5,1.6),r.habDark,e,i+.95,t)),n.add(_("COMMS","#1a100c","#f0c089",2.4,.42,e,i+2.25,t+2.1)),n.add(_("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function Wg(){const n=new I;n.name="methalox-lights";for(const[a,s]of[[62,16],[68,-6],[58,16]]){const o=A(a,s);n.add(c(new z(.12,.16,3.6,8),r.steelDark,a,o+1.9,s)),n.add(c(new f(.42,.42,.42),r.glowPad,a,o+3.85,s))}const e=68,t=6,i=A(e,t);return n.add(c(new f(5.2,.16,4),r.concrete,e,i+.08,t)),n.add(c(new f(2.4,1.5,1.6),r.habDark,e,i+.95,t)),n.add(_("MX","#1a100c","#f0c089",1.6,.42,e,i+2.25,t+2.1)),n.add(_("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function Xg(){const n=new I;n.name="sinter-kiln";const e=66,t=-104,i=A(e,t);return n.add(c(new f(11.2,.2,7.4),r.concrete,e,i+.1,t)),n.add(c(new z(1.55,1.55,8.6,16),r.steelDark,e,i+2.15,t,0,0,Math.PI/2)),n.add(c(new z(.42,.55,3.2,10),r.steel,e+2.4,i+4.4,t)),n.add(c(new f(2.2,1.8,2),r.habDark,e-4.4,i+1.1,t+1.8)),n.add(c(new f(1.6,1.4,1.6),r.rust,e+4.2,i+.9,t-1.6)),n.add(_("SINTER","#1a100c","#f0c089",2.8,.5,e,i+4.85,t+3.8)),n.add(_("KILN","#1a100c","#d6b48a",2,.42,e,i+4.3,t+3.8)),n}function qg(){const n=new I;n.name="sinter-bricks";const e=80,t=-104,i=A(e,t);n.add(c(new f(7.6,.16,5.4),r.concrete,e,i+.08,t));for(let a=0;a<3;a++)for(let s=0;s<4;s++){const o=e-2.4+s*1.55,d=t-1.2+a*1.2;n.add(c(new f(1.35,.42,.95),r.rust,o,i+.38,d)),n.add(c(new f(1.35,.42,.95),r.habDark,o,i+.82,d))}return n.add(_("SINTER","#1a100c","#f0c089",2.6,.42,e,i+1.85,t+2.8)),n.add(_("BRICK","#1a100c","#d6b48a",2.2,.36,e,i+1.4,t+2.8)),n}function Yg(){const n=new I;n.name="sinter-roller";const e=18,t=136,i=A(e,t);return n.add(c(new f(8.8,.16,5.2),r.concrete,e,i+.08,t)),n.add(c(new f(3.6,1.6,2.2),r.habDark,e-.6,i+1.15,t)),n.add(c(new z(1.15,1.15,2.6,14),r.steelDark,e+2.6,i+1.2,t,0,0,Math.PI/2)),n.add(c(new z(.55,.55,2.2,10),r.steel,e-2.6,i+.7,t,0,0,Math.PI/2)),n.add(_("SINTER","#1a100c","#f0c089",2.6,.42,e,i+2.55,t+2.7)),n.add(_("ROLLER","#1a100c","#d6b48a",2.4,.36,e,i+2.1,t+2.7)),n}function Kg(){const n=new I;n.name="hab-blower";const e=22,t=-98,i=A(e,t);return n.add(c(new f(7.2,.18,5.2),r.concrete,e,i+.09,t)),n.add(c(new f(2.6,1.7,2),r.habDark,e-1.4,i+1.05,t)),n.add(c(new z(1.05,1.05,2.4,14),r.steelDark,e+1.8,i+1.35,t,0,0,Math.PI/2)),n.add(c(new z(.28,.28,2.8,8),r.pipe,e+1.8,i+2.55,t)),n.add(_("SPARE","#1a100c","#f0c089",2.2,.42,e,i+2.7,t+2.6)),n.add(_("BLOWER","#1a100c","#d6b48a",2.6,.36,e,i+2.25,t+2.6)),n}function Jg(){const n=new I;n.name="solar4-inverter";const e=172,t=-62,i=A(e,t);n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.6,2.4,2.8),r.habDark,e-2,i+1.4,t)),n.add(c(new f(3.2,2,2.4),r.steelDark,e+2.2,i+1.2,t));for(let a=0;a<3;a++)n.add(c(new f(.7,1.5,1.8),r.battery,e+1.2+a*.85,i+1,t));return n.add(_("FIELD 4","#111111","#f4e6c8",2.8,.5,e,i+3.55,t+3.7)),n.add(_("INVERTER","#111111","#d6b48a",3.2,.42,e,i+3,t+3.7)),n}function Zg(){const n=new I;n.name="ice-drill-2";const e=-92,t=-184,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.4,1.8,2.4),r.habDark,e-2.2,i+1.1,t)),n.add(c(new z(.28,.42,6.4,10),r.steel,e+2.2,i+3.4,t)),n.add(c(new ii(.55,1.4,8),r.soot,e+2.2,i+.85,t)),n.add(c(new f(1.6,1.2,1.4),r.steelDark,e+2.2,i+6.5,t)),n.add(_("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+2.55,t+3.7)),n.add(_("DRILL","#1a2830","#d6b48a",2.2,.36,e,i+2.1,t+3.7)),n}function $g(){const n=new I;n.name="hab-n2";const e=-32,t=-88,i=A(e,t);n.add(c(new f(10.2,.2,7.4),r.concrete,e,i+.1,t));for(let a=0;a<4;a++){const s=e-3.3+a*2.2;n.add(c(new z(.85,.85,3.6,12),r.steel,s,i+2,t))}return n.add(_("N2","#1a2830","#d6e6ef",1.8,.5,e,i+4.15,t+3.7)),n.add(_("SPARE","#1a2830","#d6b48a",2.2,.42,e,i+3.6,t+3.7)),Z(n,[[-32,-88],[-18,-88],[-8,-88]],r.pipe,.1),n}function jg(){const n=new I;n.name="workshop-welder";const e=96,t=-104,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.4,2.2,2.6),r.habDark,e-2.2,i+1.3,t)),n.add(c(new f(.35,2.8,.35),r.steel,e+2,i+1.6,t)),n.add(c(new f(2.2,.28,.28),r.steel,e+3,i+2.9,t)),n.add(c(new f(1.8,1.2,1.6),r.steelDark,e+2.4,i+.8,t+1.6)),n.add(_("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.15,t+3.7)),n.add(_("WELDER","#1a100c","#d6b48a",2.6,.36,e,i+2.7,t+3.7)),n}function Qg(){const n=new I;n.name="ch4-hose";const e=-28,t=-8,i=A(e,t);return n.add(c(new f(7.6,.18,5.4),r.concrete,e,i+.09,t)),n.add(c(new f(2.4,1.6,2),r.habDark,e-1.6,i+1,t)),n.add(c(new Ce(1.05,.22,8,16),r.tankCh4,e+1.8,i+1.35,t,Math.PI/2,0,0)),n.add(c(new Ce(.72,.16,8,14),r.tankCh4,e+1.8,i+1.35,t,Math.PI/2,0,0)),n.add(_("CH4","#6a2208","#f4e6c8",1.8,.42,e,i+2.55,t+2.8)),n.add(_("HOSE","#6a2208","#d6b48a",2,.36,e,i+2.1,t+2.8)),n}function ex(){const n=new I;n.name="o2-hose";const e=-28,t=6,i=A(e,t);return n.add(c(new f(7.6,.18,5.4),r.concrete,e,i+.09,t)),n.add(c(new f(2.4,1.6,2),r.habDark,e-1.6,i+1,t)),n.add(c(new Ce(1.05,.22,8,16),r.tankO2,e+1.8,i+1.35,t,Math.PI/2,0,0)),n.add(c(new Ce(.72,.16,8,14),r.steel,e+1.8,i+1.35,t,Math.PI/2,0,0)),n.add(_("O2","#2a3340","#e8eef4",1.6,.42,e,i+2.55,t+2.8)),n.add(_("HOSE","#2a3340","#d6b48a",2,.36,e,i+2.1,t+2.8)),n}function tx(){const n=new I;n.name="hab-water";const e=-46,t=-88,i=A(e,t);return n.add(c(new f(10.2,.2,7.4),r.concrete,e,i+.1,t)),n.add(c(new z(1.55,1.55,7.6,16),r.pipe,e-1.8,i+1.9,t,0,0,Math.PI/2)),n.add(c(new z(1.55,1.55,7.6,16),r.pipe,e+1.8,i+1.9,t,0,0,Math.PI/2)),n.add(c(new f(2.2,1.4,1.6),r.habDark,e,i+.9,t+2.2)),n.add(_("HAB","#1a2830","#d6e6ef",1.8,.5,e,i+4.35,t+3.8)),n.add(_("H2O","#1a2830","#d6b48a",2,.42,e,i+3.8,t+3.8)),Z(n,[[-46,-88],[-32,-88],[-18,-88]],r.pipe,.1),n}function nx(){const n=new I;n.name="sabatier-catalyst";const e=-50,t=-22,i=A(e,t);n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.4,2,2.6),r.habDark,e-2.2,i+1.2,t));for(let a=0;a<3;a++)n.add(c(new z(.55,.55,2.4,12),r.steelDark,e+1+a*1.35,i+1.4,t));return n.add(_("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.05,t+3.7)),n.add(_("CATALYST","#1a100c","#d6b48a",3.2,.36,e,i+2.6,t+3.7)),n}function ix(){const n=new I;n.name="co2-spare";const e=-80,t=20,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.2,2,2.4),r.habDark,e-2,i+1.2,t)),n.add(c(new z(.7,.7,3.2,12),r.steelDark,e+2.2,i+1.8,t)),n.add(c(new z(1.15,.45,1.4,12),r.steel,e+2.2,i+4,t)),n.add(_("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.05,t+3.7)),n.add(_("CO2 COMP","#1a100c","#d6b48a",3.2,.36,e,i+2.6,t+3.7)),n}function ax(){const n=new I;n.name="h2-dryer";const e=-38,t=28,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.2,2,2.4),r.habDark,e-2.2,i+1.2,t)),n.add(c(new z(.95,.95,3.4,14),r.steelDark,e+2,i+1.9,t)),n.add(c(new z(.35,.35,2.2,8),r.pipe,e+2,i+4,t)),n.add(_("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.15,t+3.7)),n.add(_("H2 DRYER","#1a100c","#d6b48a",3,.36,e,i+2.7,t+3.7)),n}function sx(){const n=new I;n.name="ice-melt-3";const e=-46,t=-132,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.6,2.8,3.2),r.habDark,e-1.8,i+1.6,t)),n.add(c(new z(1.45,1.45,4.2,14),r.pipe,e+2.2,i+2.3,t)),n.add(c(new z(.55,.85,1.6,10),r.steelDark,e+2.2,i+4.9,t)),n.add(_("SPARE","#1a2830","#d6e6ef",2.2,.5,e,i+4.4,t+3.7)),n.add(_("MELT","#1a2830","#d6b48a",2,.42,e,i+3.85,t+3.7)),Z(n,[[-46,-132],[-58,-142],[-58,-150]],r.pipe,.1),n}function rx(){const n=new I;n.name="gh-dust-filter-2";const e=24,t=-118,i=A(e,t);return n.add(c(new f(9.2,.18,5.6),r.concrete,e,i+.09,t)),n.add(c(new f(3.8,2.6,2.4),r.habDark,e-1.6,i+1.5,t)),n.add(c(new z(.95,.95,3.2,12),r.steelDark,e+2.4,i+1.8,t)),n.add(c(new f(.12,2.2,2),r.lattice,e+3.5,i+1.4,t)),n.add(_("SPARE","#1a100c","#f0c089",2.2,.45,e,i+3.55,t+2.9)),n.add(_("FILTER","#1a100c","#d6b48a",2.6,.4,e,i+3.05,t+2.9)),Z(n,[[24,-118],[30,-112],[38,-104]],r.pipe,.1),n}function ox(){const n=new I;n.name="spare-ice-haul";const e=-110,t=-136,i=A(e,t);return n.add(c(new f(12.4,.16,6.4),r.concrete,e,i+.08,t)),n.add(on(e,t,-.25,{kind:"ice"})),n.add(_("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+3.4,t+3.4)),n.add(_("HAUL","#1a2830","#d6b48a",2,.36,e,i+2.95,t+3.4)),n}function cx(){const n=new I;n.name="hab-coupler";const e=-22,t=-110,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new z(1.35,1.35,6.4,16),r.habDark,e,i+1.7,t,0,0,Math.PI/2)),n.add(c(new Ce(1.4,.16,8,16),r.steel,e-3.2,i+1.7,t,0,0,Math.PI/2)),n.add(c(new Ce(1.4,.16,8,16),r.steel,e+3.2,i+1.7,t,0,0,Math.PI/2)),n.add(_("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.55,t+3.7)),n.add(_("TUBE","#1a100c","#d6b48a",2,.36,e,i+3.1,t+3.7)),n}function dx(){const n=new I;n.name="field4-night";const e=158,t=-48,i=A(e,t);n.add(c(new f(12,.2,7.2),r.concrete,e,i+.1,t));for(let a=0;a<5;a++)n.add(c(new f(1.7,2,4.2),r.battery,e-4+a*2,i+1.2,t));return n.add(_("NIGHT","#111111","#f4e6c8",2.2,.5,e,i+2.7,t+3.6)),n.add(_("FIELD 4","#111111","#d6b48a",2.4,.42,e,i+2.15,t+3.6)),Z(n,[[172,-62],[166,-54],[158,-48]],r.cable,.1),n}function lx(){const n=new I;n.name="workshop-air";const e=110,t=-90,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.2,2.2,2.6),r.habDark,e-2.2,i+1.3,t)),n.add(c(new z(1.15,1.15,3.4,16),r.steelDark,e+2,i+1.9,t)),n.add(c(new f(1.6,1.1,1.4),r.steel,e+2,i+.75,t+2)),n.add(c(new f(.22,1.6,.22),r.steel,e+3.4,i+1,t-1.6)),n.add(_("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.05,t+3.7)),n.add(_("AIR","#1a100c","#d6b48a",1.8,.36,e,i+3.6,t+3.7)),n}function hx(){const n=new I;n.name="hab-amine";const e=8,t=-110,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.2,2.2,2.6),r.habDark,e-2.4,i+1.3,t)),n.add(c(new z(.9,.9,3.6,14),r.steelDark,e+1.4,i+2,t)),n.add(c(new z(.9,.9,3.6,14),r.steelDark,e+3.4,i+2,t)),n.add(_("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.15,t+3.7)),n.add(_("AMINE","#1a100c","#d6b48a",2.4,.36,e,i+3.7,t+3.7)),Z(n,[[8,-98],[8,-104],[8,-110]],r.pipe,.1),n}function ux(){const n=new I;n.name="ice-drill-1";const e=-70,t=-148,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.4,1.8,2.4),r.habDark,e-2.2,i+1.1,t)),n.add(c(new z(.28,.42,6.4,10),r.steel,e+2.2,i+3.4,t)),n.add(c(new ii(.55,1.4,8),r.soot,e+2.2,i+.85,t)),n.add(c(new f(1.6,1.2,1.4),r.steelDark,e+2.2,i+6.5,t)),n.add(_("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+2.55,t+3.7)),n.add(_("DRILL","#1a2830","#d6b48a",2.2,.36,e,i+2.1,t+3.7)),n}function fx(){const n=new I;n.name="farm1-lights";for(const[a,s]of[[82,-28],[82,-44],[96,-44]]){const o=A(a,s);n.add(c(new z(.12,.16,3.6,8),r.steelDark,a,o+1.9,s)),n.add(c(new f(.42,.42,.42),r.glowPad,a,o+3.85,s))}const e=96,t=-28,i=A(e,t);return n.add(c(new f(5.2,.16,4),r.concrete,e,i+.08,t)),n.add(c(new f(2.4,1.5,1.6),r.habDark,e,i+.95,t)),n.add(_("FARM 1","#1a100c","#f0c089",2.4,.42,e,i+2.25,t+2.1)),n.add(_("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function px(){const n=new I;n.name="field2-lights";for(const[a,s]of[[100,-70],[112,-83],[124,-70]]){const o=A(a,s);n.add(c(new z(.12,.16,3.6,8),r.steelDark,a,o+1.9,s)),n.add(c(new f(.42,.42,.42),r.glowPad,a,o+3.85,s))}const e=124,t=-83,i=A(e,t);return n.add(c(new f(5.2,.16,4),r.concrete,e,i+.08,t)),n.add(c(new f(2.4,1.5,1.6),r.habDark,e,i+.95,t)),n.add(_("FIELD 2","#1a100c","#f0c089",2.6,.42,e,i+2.25,t+2.1)),n.add(_("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function mx(){const n=new I;n.name="field3-lights";for(const[a,s]of[[135,-22],[135,-40],[148,-40]]){const o=A(a,s);n.add(c(new z(.12,.16,3.6,8),r.steelDark,a,o+1.9,s)),n.add(c(new f(.42,.42,.42),r.glowPad,a,o+3.85,s))}const e=148,t=-22,i=A(e,t);return n.add(c(new f(5.2,.16,4),r.concrete,e,i+.08,t)),n.add(c(new f(2.4,1.5,1.6),r.habDark,e,i+.95,t)),n.add(_("FIELD 3","#1a100c","#f0c089",2.6,.42,e,i+2.25,t+2.1)),n.add(_("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function gx(){const n=new I;n.name="spare-potable-uv";const e=46,t=-152,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(4.2,2.6,3.4),r.habDark,e-1.6,i+1.5,t)),n.add(c(new z(1.05,1.05,3.4,14),r.pipe,e+2.6,i+1.9,t)),n.add(c(new f(1.6,1.4,1.2),r.steel,e+2.6,i+3.9,t)),n.add(_("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+4.15,t+3.7)),n.add(_("UV","#1a2830","#d6b48a",1.6,.36,e,i+3.7,t+3.7)),Z(n,[[32,-152],[38,-152],[46,-152]],r.pipe,.1),n}function xx(){const n=new I;n.name="pad2-bricks";const e=32,t=136,i=A(e,t);n.add(c(new f(7.6,.16,5.4),r.concrete,e,i+.08,t));for(let a=0;a<3;a++)for(let s=0;s<4;s++){const o=e-2.4+s*1.55,d=t-1.2+a*1.2;n.add(c(new f(1.35,.42,.95),r.rust,o,i+.38,d)),n.add(c(new f(1.35,.42,.95),r.habDark,o,i+.82,d))}return n.add(_("PAD 2","#1a100c","#f0c089",2.2,.42,e,i+1.85,t+2.8)),n.add(_("BRICK","#1a100c","#d6b48a",2.2,.36,e,i+1.4,t+2.8)),n}function _x(){const n=new I;n.name="hab-regulator";const e=-8,t=-110,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.4,2.2,2.6),r.habDark,e-2.2,i+1.3,t)),n.add(c(new z(.95,.95,2.8,14),r.steelDark,e+2,i+1.6,t)),n.add(c(new z(.55,.55,1.6,12),r.steel,e+3.4,i+1,t+1.4)),n.add(c(new f(1.4,1.1,1.2),r.steel,e+2,i+.75,t+2)),n.add(_("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.35,t+3.7)),n.add(_("REG","#1a100c","#d6b48a",1.8,.36,e,i+2.9,t+3.7)),Z(n,[[-8,-98],[-8,-104],[-8,-110]],r.pipe,.1),n}function wx(){const n=new I;n.name="workshop-hoist";const e=110,t=-104,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(2.8,2,2.4),r.habDark,e-2.4,i+1.2,t)),n.add(c(new f(.28,5.2,.28),r.steelDark,e+1.6,i+2.8,t)),n.add(c(new f(4.2,.22,.22),r.steel,e+3.4,i+5.3,t)),n.add(c(new f(.16,1.6,.16),r.steel,e+5.2,i+4.4,t)),n.add(c(new f(.7,.5,.5),r.steelDark,e+5.2,i+3.5,t)),n.add(_("SPARE","#1a100c","#f0c089",2.2,.42,e,i+2.85,t+3.7)),n.add(_("HOIST","#1a100c","#d6b48a",2.2,.36,e,i+2.4,t+3.7)),n}function vx(){const n=new I;n.name="farm1-inverter";const e=70,t=-28,i=A(e,t);n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.6,2.4,2.8),r.habDark,e-2,i+1.4,t)),n.add(c(new f(3.2,2,2.4),r.steelDark,e+2.2,i+1.2,t));for(let a=0;a<3;a++)n.add(c(new f(.7,1.5,1.8),r.battery,e+1.2+a*.85,i+1,t));return n.add(_("FARM 1","#111111","#f4e6c8",2.6,.5,e,i+3.55,t+3.7)),n.add(_("INVERTER","#111111","#d6b48a",3.2,.42,e,i+3,t+3.7)),Z(n,[[82,-28],[76,-28],[70,-28]],r.cable,.1),n}function Mx(){const n=new I;n.name="field2-inverter";const e=136,t=-70,i=A(e,t);n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.6,2.4,2.8),r.habDark,e-2,i+1.4,t)),n.add(c(new f(3.2,2,2.4),r.steelDark,e+2.2,i+1.2,t));for(let a=0;a<3;a++)n.add(c(new f(.7,1.5,1.8),r.battery,e+1.2+a*.85,i+1,t));return n.add(_("FIELD 2","#111111","#f4e6c8",2.8,.5,e,i+3.55,t+3.7)),n.add(_("INVERTER","#111111","#d6b48a",3.2,.42,e,i+3,t+3.7)),Z(n,[[124,-70],[130,-70],[136,-70]],r.cable,.1),n}function bx(){const n=new I;n.name="field3-inverter";const e=122,t=-22,i=A(e,t);n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.6,2.4,2.8),r.habDark,e-2,i+1.4,t)),n.add(c(new f(3.2,2,2.4),r.steelDark,e+2.2,i+1.2,t));for(let a=0;a<3;a++)n.add(c(new f(.7,1.5,1.8),r.battery,e+1.2+a*.85,i+1,t));return n.add(_("FIELD 3","#111111","#f4e6c8",2.8,.5,e,i+3.55,t+3.7)),n.add(_("INVERTER","#111111","#d6b48a",3.2,.42,e,i+3,t+3.7)),Z(n,[[135,-22],[128,-22],[122,-22]],r.cable,.1),n}function yx(){const n=new I;n.name="crush-hopper";const e=-114,t=-158,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.2,1.8,2.6),r.habDark,e-2.4,i+1.1,t)),n.add(c(new z(.35,1.55,3.2,12),r.steelDark,e+2,i+2,t)),n.add(c(new f(1.6,.7,1.4),r.steel,e+2,i+.55,t+2)),n.add(_("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+4.05,t+3.7)),n.add(_("HOPPER","#1a2830","#d6b48a",2.6,.36,e,i+3.6,t+3.7)),n}function Sx(){const n=new I;n.name="spare-ch4-pump";const e=-32,t=-36,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.6,2.2,2.8),r.habDark,e-2,i+1.3,t)),n.add(c(new z(.7,.7,2.2,12),r.tankCh4,e+2,i+1.3,t,0,0,Math.PI/2)),n.add(c(new f(1.8,1.4,1.6),r.steelDark,e+2,i+.9,t+1.8)),n.add(_("SPARE","#6a2208","#f4e6c8",2.2,.42,e,i+3.15,t+3.7)),n.add(_("CH4 PUMP","#6a2208","#d6b48a",3,.36,e,i+2.7,t+3.7)),Z(n,[[-32,-22],[-32,-28],[-32,-36]],r.tankCh4,.11),n}function Ex(){const n=new I;n.name="spare-o2-pump";const e=-42,t=6,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.6,2.2,2.8),r.habDark,e-2,i+1.3,t)),n.add(c(new z(.7,.7,2.2,12),r.tankO2,e+2,i+1.3,t,0,0,Math.PI/2)),n.add(c(new f(1.8,1.4,1.6),r.steelDark,e+2,i+.9,t+1.8)),n.add(_("SPARE","#2a3340","#e8eef4",2.2,.42,e,i+3.15,t+3.7)),n.add(_("O2 PUMP","#2a3340","#d6b48a",2.8,.36,e,i+2.7,t+3.7)),Z(n,[[-28,6],[-34,6],[-42,6]],r.tankO2,.11),n}function Tx(){const n=new I;n.name="eva-battery";const e=28,t=-74,i=A(e,t);n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.2,1.6,2.2),r.habDark,e-2.2,i+1,t));for(let a=0;a<4;a++)n.add(c(new f(1.1,1.4,1.8),r.battery,e+.6+a*1.25,i+.9,t));return n.add(_("SPARE","#111111","#f4e6c8",2.2,.42,e,i+2.55,t+3.7)),n.add(_("EVA BATT","#111111","#d6b48a",3,.36,e,i+2.1,t+3.7)),n}function Ax(){const n=new I;n.name="kiln-feed";const e=80,t=-118,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.2,1.8,2.6),r.habDark,e-2.4,i+1.1,t)),n.add(c(new z(.35,1.55,3.2,12),r.rust,e+2,i+2,t)),n.add(c(new f(1.6,.7,1.4),r.steelDark,e+2,i+.55,t+2)),n.add(_("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.05,t+3.7)),n.add(_("FEED","#1a100c","#d6b48a",2,.36,e,i+3.6,t+3.7)),n}function Rx(){const n=new I;n.name="grow-co2";const e=38,t=-132,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3,1.8,2.4),r.habDark,e-2.6,i+1.1,t)),n.add(c(new z(1.15,1.15,3.6,14),r.steelDark,e+1.4,i+2,t)),n.add(c(new z(1.15,1.15,3.6,14),r.steelDark,e+3.6,i+2,t)),n.add(_("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.15,t+3.7)),n.add(_("CO2","#1a100c","#d6b48a",1.8,.36,e,i+3.7,t+3.7)),Z(n,[[52,-126],[44,-128],[38,-132]],r.pipe,.1),n}function Cx(){const n=new I;n.name="pad2-cargo";const e=46,t=136,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),oe(n,42.4,134.2,.1,1),oe(n,45.2,133.8,-.15,.9),oe(n,48.6,134.6,.2,1.05),oe(n,43,137.6,-.1,.85),oe(n,47.4,137.8,.05,.95),n.add(_("SPARE","#1a100c","#f0c089",2.2,.42,e,i+2.35,t+3.7)),n.add(_("CARGO","#1a100c","#d6b48a",2.4,.36,e,i+1.9,t+3.7)),n}function Px(){const n=new I;n.name="spare-condensate";const e=40,t=-140,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new z(1.25,1.25,3.6,14),r.pipe,e-1.8,i+2,t)),n.add(c(new z(1.25,1.25,3.6,14),r.pipe,e+1.6,i+2,t)),n.add(c(new f(2.2,1.5,1.7),r.habDark,e,i+.95,t+2.1)),n.add(_("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+4.15,t+3.6)),n.add(_("COND","#1a2830","#d6b48a",2,.36,e,i+3.7,t+3.6)),Z(n,[[28,-140],[34,-140],[40,-140]],r.pipe,.1),n}function Dx(){const n=new I;n.name="press-die";const e=52,t=-90,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.6,.55,2.6),r.steelDark,e,i+.48,t)),n.add(c(new f(3.2,.45,2.2),r.habDark,e,i+.98,t)),n.add(c(new f(2.8,.4,1.8),r.rust,e,i+1.4,t)),n.add(c(new f(1.2,1.6,1.2),r.steel,e+2.8,i+1,t+1.6)),n.add(c(new f(2,1.2,1.4),r.habDark,e-2.6,i+.8,t+1.8)),n.add(_("SPARE","#1a100c","#f0c089",2.2,.42,e,i+2.35,t+3.7)),n.add(_("DIE","#1a100c","#d6b48a",1.6,.36,e,i+1.9,t+3.7)),n}function Ix(){const n=new I;n.name="ice-trailer";const e=-124,t=-136,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(7.2,.45,3.2),r.steelDark,e,i+.85,t)),n.add(c(new f(1.4,.55,.7),r.steel,e+4.2,i+.85,t)),n.add(c(new z(.55,.55,.4,12),r.steelDark,e-2.2,i+.55,t+1.7,0,0,Math.PI/2)),n.add(c(new z(.55,.55,.4,12),r.steelDark,e-2.2,i+.55,t-1.7,0,0,Math.PI/2)),n.add(c(new z(.55,.55,.4,12),r.steelDark,e+2,i+.55,t+1.7,0,0,Math.PI/2)),n.add(c(new z(.55,.55,.4,12),r.steelDark,e+2,i+.55,t-1.7,0,0,Math.PI/2)),n.add(c(new f(1.6,1.1,1.4),r.habDark,e-2,i+1.6,t)),n.add(c(new f(1.6,1.1,1.4),r.habDark,e+.2,i+1.6,t)),n.add(c(new f(1.6,1.1,1.4),r.pipe,e+2.2,i+1.6,t)),n.add(_("SPARE","#1a100c","#f0c089",2.2,.42,e,i+2.55,t+3.7)),n.add(_("TRAIL","#1a100c","#d6b48a",2.2,.36,e,i+2.1,t+3.7)),n}function zx(){const n=new I;n.name="earth-battery";const e=28,t=-162,i=A(e,t);n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t));for(let a=0;a<4;a++)n.add(c(new f(1.7,1.9,3.6),r.battery,e-3.2+a*2.1,i+1.15,t)),n.add(c(new f(1.55,.08,3.4),r.steel,e-3.2+a*2.1,i+2.15,t));return n.add(_("SPARE","#111111","#f4e6c8",2.2,.42,e,i+3.15,t+3.7)),n.add(_("LINK","#111111","#d6b48a",1.8,.36,e,i+2.6,t+3.7)),n}function Lx(){const n=new I;n.name="pad2-unloader";const e=46,t=148,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(1.2,8.4,1.2),r.steelDark,e-2.4,i+4.3,t)),n.add(c(new f(1.2,8.4,1.2),r.steelDark,e+2.4,i+4.3,t)),n.add(c(new f(7.2,.35,1.2),r.steel,e,i+8.6,t)),n.add(c(new f(.16,2.8,.16),r.steelDark,e,i+7,t+1.6)),n.add(c(new f(1.4,1.2,1.4),r.crate,e,i+5.4,t+1.6)),oe(n,42.6,146.2,.15,.9),oe(n,49.2,149.4,-.1,.85),n.add(_("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.55,t+3.7)),n.add(_("UNLOAD","#1a100c","#d6b48a",2.6,.36,e,i+4.1,t+3.7)),n}function Ux(){const n=new I;n.name="workshop-mill";const e=96,t=-118,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(4.6,1.6,3.2),r.habDark,e,i+1,t)),n.add(c(new f(1.4,2.4,1.4),r.steelDark,e+1.2,i+2.4,t)),n.add(c(new f(2.6,.35,1.8),r.steel,e+1.2,i+3.7,t)),n.add(c(new z(.18,.18,1.2,10),r.steel,e+1.2,i+2.9,t+.9)),n.add(c(new f(2.2,1.1,1.6),r.steelDark,e-2.4,i+.75,t+1.8)),oe(n,91.8,-115.6,.12,.85),n.add(_("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.25,t+3.7)),n.add(_("MILL","#1a100c","#d6b48a",1.8,.36,e,i+3.8,t+3.7)),n}function Nx(){const n=new I;n.name="ice-conveyor";const e=-102,t=-148,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(7.6,.35,1.6),r.steelDark,e,i+1.15,t)),n.add(c(new f(7.2,.12,1.2),r.steel,e,i+1.4,t)),n.add(c(new f(.35,1.4,.35),r.steelDark,e-3.4,i+.8,t+1.1)),n.add(c(new f(.35,1.4,.35),r.steelDark,e+3.4,i+.8,t+1.1)),n.add(c(new f(.35,1.4,.35),r.steelDark,e-3.4,i+.8,t-1.1)),n.add(c(new f(.35,1.4,.35),r.steelDark,e+3.4,i+.8,t-1.1)),n.add(c(new f(1.8,1.2,1.5),r.habDark,e-2.6,i+2,t)),n.add(c(new z(.45,.45,1.4,10),r.steel,e+3.2,i+1.5,t,0,0,Math.PI/2)),n.add(_("SPARE","#1a100c","#f0c089",2.2,.42,e,i+2.85,t+3.7)),n.add(_("BELT","#1a100c","#d6b48a",1.8,.36,e,i+2.4,t+3.7)),n}function Ox(){const n=new I;n.name="workshop-vise";const e=110,t=-118,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(5.2,1.15,2.6),r.habDark,e,i+.75,t)),n.add(c(new f(1.4,.85,1.1),r.steelDark,e+1.4,i+1.75,t)),n.add(c(new f(.35,.7,.9),r.steel,e+2.15,i+1.7,t)),n.add(c(new f(.35,.7,.9),r.steel,e+.65,i+1.7,t)),n.add(c(new f(2,1.3,1.5),r.steelDark,e-2.4,i+.85,t+1.8)),oe(n,105.8,-115.4,.1,.8),n.add(_("SPARE","#1a100c","#f0c089",2.2,.42,e,i+2.55,t+3.7)),n.add(_("VISE","#1a100c","#d6b48a",1.8,.36,e,i+2.1,t+3.7)),n}function Fx(){const n=new I;n.name="spare-ch4-tank";const e=-18,t=-36,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new z(1.25,1.25,3.8,14),r.tankCh4,e-1.8,i+2.1,t)),n.add(c(new z(1.25,1.25,3.8,14),r.tankCh4,e+1.6,i+2.1,t)),n.add(c(new f(2.2,1.4,1.6),r.habDark,e,i+.9,t+2.1)),n.add(_("SPARE","#6a2208","#f4e6c8",2.2,.42,e,i+4.35,t+3.7)),n.add(_("CH4","#6a2208","#d6b48a",1.8,.36,e,i+3.9,t+3.7)),Z(n,[[-32,-36],[-26,-36],[-18,-36]],r.tankCh4,.11),n}function kx(){const n=new I;n.name="spare-o2-tank";const e=-42,t=-8,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new z(1.25,1.25,3.8,14),r.tankO2,e-1.8,i+2.1,t)),n.add(c(new z(1.25,1.25,3.8,14),r.tankO2,e+1.6,i+2.1,t)),n.add(c(new f(2.2,1.4,1.6),r.habDark,e,i+.9,t+2.1)),n.add(_("SPARE","#2a3340","#e8eef4",2.2,.42,e,i+4.35,t+3.7)),n.add(_("O2","#2a3340","#d6b48a",1.6,.36,e,i+3.9,t+3.7)),Z(n,[[-42,6],[-42,-2],[-42,-8]],r.tankO2,.11),n}function Bx(){const n=new I;n.name="hab-inverter";const e=8,t=-68,i=A(e,t);n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.6,2.4,2.8),r.habDark,e-2,i+1.4,t)),n.add(c(new f(3.2,2,2.4),r.steelDark,e+2.2,i+1.2,t));for(let a=0;a<3;a++)n.add(c(new f(.7,1.5,1.8),r.battery,e+1.2+a*.85,i+1,t));return n.add(_("SPARE","#111111","#f4e6c8",2.2,.42,e,i+3.55,t+3.7)),n.add(_("INVERTER","#111111","#d6b48a",3.2,.36,e,i+3.1,t+3.7)),Z(n,[[8,-78],[8,-74],[8,-68]],r.cable,.1),n}function Hx(){const n=new I;n.name="potable-pump";const e=8,t=-162,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.4,2,2.6),r.habDark,e-2,i+1.2,t)),n.add(c(new z(.7,.7,2.2,12),r.pipe,e+2,i+1.3,t,0,0,Math.PI/2)),n.add(c(new f(1.8,1.3,1.5),r.steelDark,e+2,i+.85,t+1.8)),n.add(_("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+3.15,t+3.7)),n.add(_("H2O PUMP","#1a2830","#d6b48a",3,.36,e,i+2.7,t+3.7)),Z(n,[[18,-152],[12,-156],[8,-162]],r.pipe,.1),n}function Gx(){const n=new I;n.name="rover-charge";const e=40,t=-74,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(1.4,3.2,1.4),r.steelDark,e-2.2,i+1.8,t)),n.add(c(new f(2.6,1.6,2),r.habDark,e+1.8,i+1,t)),n.add(c(new f(1.7,1.4,1.4),r.battery,e+1.8,i+1,t+.1)),n.add(c(new f(.18,.18,2.8),r.cable,e-.2,i+2.6,t)),n.add(_("SPARE","#111111","#f4e6c8",2.2,.42,e,i+3.75,t+3.7)),n.add(_("CHARGE","#111111","#d6b48a",2.6,.36,e,i+3.3,t+3.7)),Z(n,[[28,-74],[34,-74],[40,-74]],r.cable,.1),n}function Vx(){const n=new I;n.name="melt-pump";const e=-70,t=-136,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.4,2,2.6),r.habDark,e-2,i+1.2,t)),n.add(c(new z(.75,.75,2.4,12),r.pipe,e+2,i+1.4,t,0,0,Math.PI/2)),n.add(c(new f(1.8,1.3,1.5),r.steelDark,e+2,i+.85,t+1.8)),n.add(_("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+3.15,t+3.7)),n.add(_("MELT","#1a2830","#d6b48a",2,.36,e,i+2.7,t+3.7)),Z(n,[[-58,-142],[-64,-140],[-70,-136]],r.pipe,.1),n}function Wx(){const n=new I;n.name="workshop-grinder";const e=124,t=-90,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(4.2,1.5,2.8),r.habDark,e,i+.95,t)),n.add(c(new z(.85,.85,.35,14),r.steelDark,e+1.6,i+1.9,t,0,0,Math.PI/2)),n.add(c(new f(1.6,1.4,1.4),r.steelDark,e-2.2,i+1.8,t)),oe(n,119.6,-87.4,.1,.8),n.add(_("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.15,t+3.7)),n.add(_("GRIND","#1a100c","#d6b48a",2.2,.36,e,i+2.7,t+3.7)),n}function Xx(){const n=new I;n.name="grow-pump";const e=52,t=-140,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.4,2,2.6),r.habDark,e-2,i+1.2,t)),n.add(c(new z(.7,.7,2.2,12),r.pipe,e+2,i+1.3,t,0,0,Math.PI/2)),n.add(c(new f(1.8,1.3,1.5),r.steelDark,e+2,i+.85,t+1.8)),n.add(_("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+3.15,t+3.7)),n.add(_("GROW","#1a2830","#d6b48a",2,.36,e,i+2.7,t+3.7)),Z(n,[[52,-126],[52,-132],[52,-140]],r.pipe,.1),n}function qx(){const n=new I;n.name="comms-lna";const e=16,t=-136,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.4,2,2.6),r.habDark,e-1.8,i+1.2,t)),n.add(c(new z(.85,1.15,1.6,12),r.steel,e+2.2,i+2,t)),n.add(c(new f(1.6,1.2,1.4),r.steelDark,e+2.2,i+.8,t+1.8)),n.add(_("SPARE","#111111","#f4e6c8",2.2,.42,e,i+3.35,t+3.7)),n.add(_("LNA","#111111","#d6b48a",1.8,.36,e,i+2.9,t+3.7)),Z(n,[[16,-148],[16,-142],[16,-136]],r.cable,.1),n}function Yx(){const n=new I;n.name="workshop-lathe";const e=124,t=-104,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(5.4,1.4,2.4),r.habDark,e,i+.9,t)),n.add(c(new z(.45,.45,3.2,12),r.steel,e,i+1.85,t,0,0,Math.PI/2)),n.add(c(new f(1.5,1.6,1.6),r.steelDark,e-2.4,i+1.9,t)),n.add(c(new f(1.2,1.1,1.4),r.steelDark,e+2.6,i+1.65,t)),oe(n,119.8,-101.6,.12,.8),n.add(_("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.15,t+3.7)),n.add(_("LATHE","#1a100c","#d6b48a",2.2,.36,e,i+2.7,t+3.7)),n}function Kx(){const n=new I;n.name="melt2-pump";const e=-92,t=-172,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.4,2,2.6),r.habDark,e-2,i+1.2,t)),n.add(c(new z(.75,.75,2.4,12),r.pipe,e+2,i+1.4,t,0,0,Math.PI/2)),n.add(c(new f(1.8,1.3,1.5),r.steelDark,e+2,i+.85,t+1.8)),n.add(_("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+3.15,t+3.7)),n.add(_("MELT 2","#1a2830","#d6b48a",2.4,.36,e,i+2.7,t+3.7)),Z(n,[[-78,-156],[-86,-164],[-92,-172]],r.pipe,.1),n}function Jx(){const n=new I;n.name="weather-pack";const e=36,t=-128,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.2,1.8,2.4),r.habDark,e-1.6,i+1.1,t)),n.add(c(new f(1.2,2.6,1.2),r.steelDark,e+2.2,i+1.5,t)),n.add(c(new f(.35,.9,.35),r.steel,e+2.2,i+3.1,t)),n.add(c(new f(1.6,1.1,1.4),r.steel,e+2.2,i+.75,t+1.8)),n.add(_("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+3.55,t+3.7)),n.add(_("WX","#1a2830","#d6b48a",1.6,.36,e,i+3.1,t+3.7)),n}function Zx(){const n=new I;n.name="water-pump";const e=-58,t=-88,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.4,2,2.6),r.habDark,e-2,i+1.2,t)),n.add(c(new z(.7,.7,2.2,12),r.pipe,e+2,i+1.3,t,0,0,Math.PI/2)),n.add(c(new f(1.8,1.3,1.5),r.steelDark,e+2,i+.85,t+1.8)),n.add(_("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+3.15,t+3.7)),n.add(_("H2O","#1a2830","#d6b48a",1.8,.36,e,i+2.7,t+3.7)),Z(n,[[-46,-88],[-52,-88],[-58,-88]],r.pipe,.1),n}function $x(){const n=new I;n.name="pad1-cargo";const e=36,t=36,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),oe(n,32.4,34.2,.1,1),oe(n,35.2,33.8,-.15,.9),oe(n,38.6,34.6,.2,1.05),oe(n,33,37.6,-.1,.85),oe(n,37.4,37.8,.05,.95),n.add(_("SPARE","#1a100c","#f0c089",2.2,.42,e,i+2.35,t+3.7)),n.add(_("CARGO","#1a100c","#d6b48a",2.4,.36,e,i+1.9,t+3.7)),n}function jx(){const n=new I;n.name="dust-scrub";const e=22,t=-110,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.2,2,2.4),r.habDark,e-2,i+1.2,t)),n.add(c(new z(1.05,1.05,2.6,14),r.steelDark,e+2,i+1.5,t,0,0,Math.PI/2)),n.add(c(new f(1.6,1.2,1.4),r.steelDark,e+2,i+.8,t+1.8)),n.add(_("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.15,t+3.7)),n.add(_("SCRUB","#1a100c","#d6b48a",2.2,.36,e,i+2.7,t+3.7)),Z(n,[[22,-98],[22,-104],[22,-110]],r.pipe,.1),n}function Qx(){const n=new I;n.name="farm1-string";const e=108,t=-44,i=A(e,t);n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.4,2,2.6),r.habDark,e-2,i+1.2,t)),n.add(c(new f(2.8,1.6,2.2),r.steelDark,e+2.2,i+1,t));for(let a=0;a<3;a++)n.add(c(new f(.6,1.3,1.6),r.battery,e+1.3+a*.75,i+.85,t));return n.add(_("SPARE","#111111","#f4e6c8",2.2,.42,e,i+3.15,t+3.7)),n.add(_("STRING","#111111","#d6b48a",2.6,.36,e,i+2.7,t+3.7)),Z(n,[[96,-44],[102,-44],[108,-44]],r.cable,.1),n}function e4(){const n=new I;n.name="mine2-lights";for(const[a,s]of[[-78,-172],[-78,-156],[-64,-184]]){const o=A(a,s);n.add(c(new z(.12,.16,3.6,8),r.steelDark,a,o+1.9,s)),n.add(c(new f(.42,.42,.42),r.glowPad,a,o+3.85,s))}const e=-64,t=-172,i=A(e,t);return n.add(c(new f(5.2,.16,4),r.concrete,e,i+.08,t)),n.add(c(new f(2.4,1.5,1.6),r.habDark,e,i+.95,t)),n.add(_("MINE 2","#1a100c","#f0c089",2.4,.42,e,i+2.25,t+2.1)),n.add(_("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function t4(){const n=new I;n.name="shop-crate";const e=124,t=-118,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),oe(n,120.4,-119.8,.1,1),oe(n,123.2,-120.2,-.15,.9),oe(n,126.6,-119.4,.2,1.05),oe(n,121,-116.4,-.1,.85),oe(n,125.4,-116.2,.05,.95),n.add(_("SPARE","#1a100c","#f0c089",2.2,.42,e,i+2.35,t+3.7)),n.add(_("PARTS","#1a100c","#d6b48a",2.4,.36,e,i+1.9,t+3.7)),n}function n4(){const n=new I;n.name="field2-string";const e=136,t=-83,i=A(e,t);n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.4,2,2.6),r.habDark,e-2,i+1.2,t)),n.add(c(new f(2.8,1.6,2.2),r.steelDark,e+2.2,i+1,t));for(let a=0;a<3;a++)n.add(c(new f(.6,1.3,1.6),r.battery,e+1.3+a*.75,i+.85,t));return n.add(_("SPARE","#111111","#f4e6c8",2.2,.42,e,i+3.15,t+3.7)),n.add(_("STRING","#111111","#d6b48a",2.6,.36,e,i+2.7,t+3.7)),Z(n,[[124,-83],[130,-83],[136,-83]],r.cable,.1),n}function i4(){const n=new I;n.name="field3-string";const e=160,t=-40,i=A(e,t);n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.4,2,2.6),r.habDark,e-2,i+1.2,t)),n.add(c(new f(2.8,1.6,2.2),r.steelDark,e+2.2,i+1,t));for(let a=0;a<3;a++)n.add(c(new f(.6,1.3,1.6),r.battery,e+1.3+a*.75,i+.85,t));return n.add(_("SPARE","#111111","#f4e6c8",2.2,.42,e,i+3.15,t+3.7)),n.add(_("STRING","#111111","#d6b48a",2.6,.36,e,i+2.7,t+3.7)),Z(n,[[148,-40],[154,-40],[160,-40]],r.cable,.1),n}function a4(){const n=new I;n.name="field4-string";const e=184,t=-62,i=A(e,t);n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.4,2,2.6),r.habDark,e-2,i+1.2,t)),n.add(c(new f(2.8,1.6,2.2),r.steelDark,e+2.2,i+1,t));for(let a=0;a<3;a++)n.add(c(new f(.6,1.3,1.6),r.battery,e+1.3+a*.75,i+.85,t));return n.add(_("SPARE","#111111","#f4e6c8",2.2,.42,e,i+3.15,t+3.7)),n.add(_("STRING","#111111","#d6b48a",2.6,.36,e,i+2.7,t+3.7)),Z(n,[[172,-62],[178,-62],[184,-62]],r.cable,.1),n}function s4(){const n=new I;n.name="pad1-unloader";const e=36,t=48,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(1.2,8.4,1.2),r.steelDark,e-2.4,i+4.3,t)),n.add(c(new f(1.2,8.4,1.2),r.steelDark,e+2.4,i+4.3,t)),n.add(c(new f(7.2,.35,1.2),r.steel,e,i+8.6,t)),n.add(c(new f(.16,2.8,.16),r.steelDark,e,i+7,t+1.6)),n.add(c(new f(1.4,1.2,1.4),r.crate,e,i+5.4,t+1.6)),oe(n,32.6,46.2,.15,.9),oe(n,39.2,49.4,-.1,.85),n.add(_("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.55,t+3.7)),n.add(_("UNLOAD","#1a100c","#d6b48a",2.6,.36,e,i+4.1,t+3.7)),n}function r4(){const n=new I;n.name="waste-spare";const e=-36,t=-110,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(4.4,2.8,3.6),r.habDark,e-1.4,i+1.6,t)),n.add(c(new z(1.15,1.15,3.6,14),r.pipe,e+2.8,i+2,t)),n.add(c(new z(.85,.85,2.8,12),r.steelDark,e+2.8,i+1.6,t+2)),n.add(_("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.25,t+3.7)),n.add(_("WASTE","#1a100c","#d6b48a",2.4,.36,e,i+3.7,t+3.7)),Z(n,[[-22,-110],[-29,-110],[-36,-110]],r.pipe,.1),n}function o4(){const n=new I;n.name="pad1-bricks";const e=22,t=36,i=A(e,t);n.add(c(new f(7.6,.16,5.4),r.concrete,e,i+.08,t));for(let a=0;a<3;a++)for(let s=0;s<4;s++){const o=e-2.4+s*1.55,d=t-1.2+a*1.2;n.add(c(new f(1.35,.42,.95),r.rust,o,i+.38,d)),n.add(c(new f(1.35,.42,.95),r.habDark,o,i+.82,d))}return n.add(_("PAD 1","#1a100c","#f0c089",2.2,.42,e,i+1.85,t+2.8)),n.add(_("BRICK","#1a100c","#d6b48a",2.2,.36,e,i+1.4,t+2.8)),n}function c4(){const n=new I;n.name="o2-buffer-3";const e=-8,t=-76,i=A(e,t);n.add(c(new f(10.2,.2,7.4),r.concrete,e,i+.1,t));for(let a=0;a<4;a++){const s=e-3.3+a*2.2;n.add(c(new z(.85,.85,3.6,12),r.tankO2,s,i+2,t))}return n.add(_("SPARE","#2a3340","#e8eef4",2.2,.42,e,i+4.15,t+3.7)),n.add(_("O2","#2a3340","#d6b48a",1.8,.36,e,i+3.6,t+3.7)),Z(n,[[-8,-88],[-8,-82],[-8,-76]],r.tankO2,.1),n}function d4(){const n=new I;n.name="food-5";const e=70,t=-140,i=A(e,t);n.add(c(new f(11.6,.22,7.2),r.concrete,e,i+.1,t));const a=new ot(new z(3.3,3.3,11.2,16,1,!1,0,Math.PI),r.glass);a.rotation.z=Math.PI/2,a.position.set(e,i+3.3,t),a.castShadow=!1,n.add(a),n.add(c(new f(10.8,.1,6.6),r.solarFrame,e,i+3.35,t));for(let s=-2;s<=2;s++){n.add(c(new f(1.7,.22,5.2),r.soil,e+s*1.95,i+.32,t));for(let o=-2;o<=2;o++){const d=o%2===0?r.plant:r.plantLeaf;n.add(c(new f(1.15,.5,.66),d,e+s*1.95,i+.7,t+o*.9))}}return n.add(_("SPARE","#1a100c","#f0c089",2.4,.42,e,i+4.75,t+.15)),n.add(_("GROW","#1a100c","#d6b48a",2.2,.36,e,i+4.15,t+.15)),Z(n,[[70,-126],[70,-133],[70,-140]],r.pipe,.1),n}function l4(){const n=new I;n.name="pad1-roller";const e=8,t=36,i=A(e,t);return n.add(c(new f(8.8,.16,5.2),r.concrete,e,i+.08,t)),n.add(c(new f(3.6,1.6,2.2),r.habDark,e-.6,i+1.15,t)),n.add(c(new z(1.15,1.15,2.6,14),r.steelDark,e+2.6,i+1.2,t,0,0,Math.PI/2)),n.add(c(new z(.55,.55,2.2,10),r.steel,e-2.6,i+.7,t,0,0,Math.PI/2)),n.add(_("PAD 1","#1a100c","#f0c089",2.2,.42,e,i+2.55,t+2.7)),n.add(_("ROLLER","#1a100c","#d6b48a",2.4,.36,e,i+2.1,t+2.7)),n}function h4(){const n=new I;n.name="comms-hpa";const e=28,t=-148,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.4,2.2,2.6),r.habDark,e-2,i+1.3,t)),n.add(c(new f(2.8,1.6,2.2),r.steelDark,e+2.2,i+1,t)),n.add(c(new z(.45,.45,2.4,10),r.steel,e+2.2,i+2.4,t)),n.add(_("SPARE","#111111","#f4e6c8",2.2,.42,e,i+3.35,t+3.7)),n.add(_("HPA","#111111","#d6b48a",1.8,.36,e,i+2.9,t+3.7)),Z(n,[[16,-148],[22,-148],[28,-148]],r.cable,.1),n}function u4(){const n=new I;n.name="hab-n2-2";const e=-58,t=-76,i=A(e,t);n.add(c(new f(10.2,.2,7.4),r.concrete,e,i+.1,t));for(let a=0;a<4;a++){const s=e-3.3+a*2.2;n.add(c(new z(.85,.85,3.6,12),r.steel,s,i+2,t))}return n.add(_("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+4.15,t+3.7)),n.add(_("N2","#1a2830","#d6b48a",1.8,.36,e,i+3.6,t+3.7)),Z(n,[[-58,-88],[-58,-82],[-58,-76]],r.pipe,.1),n}function f4(){const n=new I;n.name="ice-crush-screen";const e=-114,t=-148,i=A(e,t);n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(6.4,.16,3.2),r.steelDark,e,i+2.4,t,.35,0,0)),n.add(c(new f(2.8,1.8,2.2),r.habDark,e-2.4,i+1.1,t)),n.add(c(new f(.22,2.2,3.4),r.steel,e+2.6,i+1.3,t));const a=c(new ut(1.2,0),r.ice,e+1.6,i+.7,t+1.8);return a.scale.set(1.1,.5,1),n.add(a),n.add(_("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+3.35,t+3.7)),n.add(_("SCREEN","#1a2830","#d6b48a",2.6,.36,e,i+2.9,t+3.7)),n}function p4(){const n=new I;n.name="pad-night";const e=68,t=18,i=A(e,t);n.add(c(new f(15.2,.22,7.2),r.concrete,e,i+.1,t));for(let a=0;a<6;a++){const s=e-5.5+a*2.2;n.add(c(new f(1.85,2.15,4.4),r.battery,s,i+1.25,t)),n.add(c(new f(1.7,.08,4.2),r.steel,s,i+2.38,t))}return n.add(_("SPARE","#111111","#f4e6c8",2.4,.42,e,i+3.15,t+3.75)),n.add(_("PAD STORE","#111111","#d6b48a",3.4,.36,e,i+2.7,t+3.75)),n}function m4(){const n=new I;n.name="isru-electro-spare";const e=-122,t=-4,i=A(e,t);n.add(c(new f(11.6,.2,7.4),r.concrete,e,i+.1,t)),n.add(c(new f(3.4,3.6,2.6),r.habDark,e-2.6,i+2,t)),n.add(c(new f(3.4,3.6,2.6),r.steelDark,e+1.2,i+2,t));for(let a=0;a<4;a++)n.add(c(new f(.18,3.1,2.2),r.steel,e-3.8+a*.7,i+2,t));return n.add(c(new z(1.15,1.15,5.2,14),r.steel,e+4.2,i+2.8,t+1.4)),n.add(c(new z(.95,.95,4.4,14),r.tankO2,e+4.2,i+2.4,t-1.6)),n.add(_("SPARE","#1a100c","#f0c089",2.4,.42,e,i+4.55,t+3.7)),n.add(_("ELECTRO","#1a100c","#d6b48a",3.2,.36,e,i+4.1,t+3.7)),Z(n,[[-122,8],[-122,2],[-122,-4]],r.pipe,.1),n}function g4(){const n=new I;n.name="sabatier-knockout-spare";const e=-84,t=-4,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.8,2.4,2.8),r.habDark,e-2,i+1.4,t)),n.add(c(new z(1.35,1.35,4.6,14),r.pipe,e+2.4,i+2.5,t)),n.add(c(new Ce(1.65,.1,6,14),r.steel,e+2.4,i+4.1,t,Math.PI/2,0,0)),n.add(c(new z(.7,.7,2.4,12),r.steelDark,e+2.4,i+1.4,t+2.1)),n.add(_("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+4.15,t+3.7)),n.add(_("KNOCKOUT","#1a2830","#d6b48a",3.4,.36,e,i+3.7,t+3.7)),Z(n,[[-84,8],[-84,2],[-84,-4]],r.pipe,.1),n}function x4(){const n=new I;n.name="ch4-chiller-spare";const e=-80,t=44,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(4.2,2.6,3.2),r.habDark,e-1.6,i+1.5,t)),n.add(c(new z(1.25,1.25,5,14),r.tankCh4,e+2.6,i+2.7,t)),n.add(c(new Ce(1.55,.1,6,14),r.steel,e+2.6,i+4.4,t,Math.PI/2,0,0)),n.add(_("SPARE","#6a2208","#f4e6c8",2.2,.42,e,i+4.15,t+3.7)),n.add(_("CH4 CHILL","#1a100c","#d6b48a",3.2,.36,e,i+3.7,t+3.7)),Z(n,[[-80,32],[-80,38],[-80,44]],r.tankCh4,.1),n}function _4(){const n=new I;n.name="o2-chiller-spare";const e=-80,t=56,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(4.2,2.6,3.2),r.habDark,e-1.6,i+1.5,t)),n.add(c(new z(1.25,1.25,5,14),r.tankO2,e+2.6,i+2.7,t)),n.add(c(new Ce(1.55,.1,6,14),r.steel,e+2.6,i+4.4,t,Math.PI/2,0,0)),n.add(_("SPARE","#2a3340","#e8eef4",2.2,.42,e,i+4.15,t+3.7)),n.add(_("O2 CHILL","#1a100c","#d6b48a",3,.36,e,i+3.7,t+3.7)),Z(n,[[-80,44],[-80,50],[-80,56]],r.steel,.1),n}function w4(){const n=new I;n.name="ice-mine-1-berm-spare";const e=c(new Ce(8.4,1.6,8,24,Math.PI*1.15),r.rust,-28,A(-28,-180)-.15,-180,Math.PI/2,.4,0);e.scale.set(1,.44,1),n.add(e);for(const[s,o]of[[-22,-174],[-20,-182],[-26,-188]]){const d=c(new ut(2.1,0),r.rust,s,A(s,o)+.85,o);d.scale.set(1.15,.55,1),n.add(d)}const[t,i,a]=Pt(-28,-180,2.2);return n.add(_("SPARE","#1a2830","#d6e6ef",2.2,.42,t,i+1.1,a)),n.add(_("MINE BERM","#1a2830","#d6b48a",3.4,.55,t,i+.5,a)),n}function v4(){const n=new I;n.name="ice-mine-2-berm-spare";const e=c(new Ce(8.4,1.6,8,24,Math.PI*1.15),r.rust,-52,A(-52,-196)-.15,-196,Math.PI/2,.55,0);e.scale.set(1,.44,1),n.add(e);for(const[s,o]of[[-46,-190],[-44,-198],[-50,-204]]){const d=c(new ut(2.1,0),r.rust,s,A(s,o)+.85,o);d.scale.set(1.15,.55,1),n.add(d)}const[t,i,a]=Pt(-52,-196,2.2);return n.add(_("SPARE","#1a2830","#d6e6ef",2.2,.42,t,i+1.1,a)),n.add(_("MINE BERM","#1a2830","#d6b48a",3.4,.55,t,i+.5,a)),n}function M4(){const n=new I;n.name="shop-drill";const e=138,t=-118,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.2,1.2,2.4),r.habDark,e,i+.8,t)),n.add(c(new f(1.1,3.4,1.1),r.steelDark,e-1.4,i+2.3,t)),n.add(c(new f(2.4,.22,1.8),r.steel,e+.3,i+1.55,t)),n.add(c(new z(.12,.12,1.1,10),r.steel,e+.3,i+2.2,t)),oe(n,133.8,-115.6,.1,.8),n.add(_("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.15,t+3.7)),n.add(_("DRILL","#1a100c","#d6b48a",2.2,.36,e,i+3.7,t+3.7)),n}function b4(){const n=new I;n.name="hab-street-battery";const e=8,t=-56,i=A(e,t);n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t));for(let a=0;a<4;a++)n.add(c(new f(1.7,1.95,3.8),r.battery,e-3+a*2,i+1.15,t)),n.add(c(new f(1.55,.08,3.6),r.steel,e-3+a*2,i+2.18,t));return n.add(_("SPARE","#111111","#f4e6c8",2.2,.42,e,i+3.15,t+3.7)),n.add(_("HAB BATT","#111111","#d6b48a",3,.36,e,i+2.7,t+3.7)),Z(n,[[8,-68],[8,-62],[8,-56]],r.cable,.1),n}function y4(){const n=new I;n.name="co2-intake-spare";const e=-68,t=-10,i=A(e,t);return n.add(c(new f(11.6,.2,7.4),r.concrete,e,i+.1,t)),n.add(c(new z(.55,.55,6.8,10),r.steel,e-2.4,i+3.6,t)),n.add(c(new z(2.1,.65,2.4,14),r.steelDark,e-2.4,i+7.8,t)),n.add(c(new Ce(1.85,.1,6,16),r.steel,e-2.4,i+9.1,t,Math.PI/2,0,0)),n.add(c(new f(3.2,2.2,2.4),r.habDark,e+2.2,i+1.3,t)),n.add(_("SPARE","#1a100c","#f0c089",2.2,.42,e-2.4,i+4.8,t+1.4)),n.add(_("CO2 INTAKE","#1a100c","#d6b48a",3.4,.36,e+2.2,i+2.7,t+1.35)),Z(n,[[-68,2],[-68,-4],[-68,-10]],r.pipe,.12),n}function S4(){const n=new I;n.name="isru-radiators-spare";const e=-54,t=24,i=A(e,t);n.add(c(new f(16.4,.18,6.2),r.concrete,e,i+.08,t));for(let a=0;a<5;a++){const s=e-6+a*3;n.add(c(new f(.16,3.6,.16),r.steelDark,s,i+1.9,t-1.8)),n.add(c(new f(.16,3.6,.16),r.steelDark,s,i+1.9,t+1.8)),n.add(c(new f(2.4,3.2,.08),r.solar,s,i+2.4,t,-.15,0,0)),n.add(c(new f(2.5,3.3,.04),r.steel,s,i+2.4,t+.06,-.15,0,0))}return n.add(_("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.55,t+3.2)),n.add(_("REJECT","#1a100c","#d6b48a",2.8,.36,e,i+4,t+3.2)),Z(n,[[-68,12],[-62,18],[-54,24]],r.pipe,.1),n}function E4(){const n=new I;n.name="isru-process-water-spare";const e=-58,t=-48,i=A(e,t);return n.add(c(new f(11.2,.2,7.4),r.concrete,e,i+.1,t)),n.add(c(new z(1.7,1.7,8.4,16),r.pipe,e-2.2,i+2,t,0,0,Math.PI/2)),n.add(c(new z(1.7,1.7,8.4,16),r.pipe,e+2,i+2,t,0,0,Math.PI/2)),n.add(c(new f(2.4,1.6,1.8),r.habDark,e,i+1,t+2.4)),n.add(_("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+4.55,t+3.8)),n.add(_("PROCESS H2O","#1a2830","#d6b48a",3.6,.36,e,i+4,t+3.8)),Z(n,[[-58,-36],[-58,-42],[-58,-48]],r.pipe,.11),n}function T4(){const n=new I;n.name="h2-recycle-spare";const e=-38,t=40,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new z(1.55,1.55,6.4,16),r.steel,e-1.8,i+3.4,t)),n.add(c(new z(1.55,1.55,6.4,16),r.steel,e+1.8,i+3.4,t)),n.add(c(new f(2.2,1.4,1.6),r.habDark,e,i+.9,t+2.2)),n.add(_("SPARE","#1a100c","#f0c089",2.2,.42,e,i+5.15,t+3.7)),n.add(_("H2 RECYCLE","#1a100c","#d6b48a",3.4,.36,e,i+4.55,t+3.7)),Z(n,[[-38,28],[-38,34],[-38,40]],r.steel,.11),n}function A4(){const n=new I;n.name="shop-bandsaw";const e=138,t=-132,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.6,1.4,2.2),r.habDark,e,i+.9,t)),n.add(c(new f(.22,2.8,1.6),r.steelDark,e-1.1,i+2.5,t)),n.add(c(new f(.22,2.8,1.6),r.steelDark,e+1.1,i+2.5,t)),n.add(c(new f(2.4,.12,.12),r.steel,e,i+3.7,t)),oe(n,133.8,-129.6,.1,.8),n.add(_("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.15,t+3.7)),n.add(_("BANDSAW","#1a100c","#d6b48a",2.8,.36,e,i+3.7,t+3.7)),n}function R4(){const n=new I;n.name="hab-eva-locker-spare";const e=52,t=-74,i=A(e,t);return n.add(c(new f(7.2,.16,5.4),r.concrete,e,i+.08,t)),n.add(c(new f(5.8,.16,2.4),r.steelDark,e,i+.18,t)),n.add(c(new f(.16,2.8,.16),r.steel,e-2.4,i+1.6,t-.7)),n.add(c(new f(.16,2.8,.16),r.steel,e+2.4,i+1.6,t-.7)),n.add(c(new f(5,.12,.12),r.steel,e,i+3,t-.7)),n.add(zt(e-1.5,t,.2)),n.add(zt(e,t+.15,-.1)),n.add(zt(e+1.5,t,.15)),n.add(_("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.45,t+2.4)),n.add(_("HAB EVA","#1a100c","#d6b48a",2.8,.36,e,i+2.95,t+2.4)),n}function C4(){const n=new I;n.name="hab-dust-lock-spare";const e=28,t=-86,i=A(e,t);return n.add(c(new f(8.4,.2,6.4),r.concrete,e,i+.1,t)),n.add(c(new f(6.2,3.4,4.4),r.habDark,e,i+1.9,t)),n.add(c(new f(6.4,.16,4.6),r.steel,e,i+3.65,t)),n.add(c(new f(1.8,2.4,.22),r.steelDark,e,i+1.5,t+2.3)),n.add(c(new f(1.8,2.4,.22),r.steelDark,e,i+1.5,t-2.3)),n.add(zt(e+2.6,t+.2,.1)),n.add(_("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.35,t+2.4)),n.add(_("DUST LOCK","#1a100c","#d6b48a",3.4,.36,e,i+3.85,t+2.4)),n}function P4(){const n=new I;n.name="shop-shear";const e=138,t=-146,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(5.2,1.5,2.4),r.habDark,e,i+.95,t)),n.add(c(new f(4.6,.18,.7),r.steel,e,i+1.85,t+.4)),n.add(c(new f(1.4,1.8,1.2),r.steelDark,e-2.4,i+1.9,t)),oe(n,133.8,-143.6,.1,.8),n.add(_("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.35,t+3.7)),n.add(_("SHEAR","#1a100c","#d6b48a",2.4,.36,e,i+2.9,t+3.7)),n}function D4(){const n=new I;n.name="hab-n2-3";const e=-70,t=-76,i=A(e,t);n.add(c(new f(10.2,.2,7.4),r.concrete,e,i+.1,t));for(let a=0;a<4;a++){const s=e-3.3+a*2.2;n.add(c(new z(.85,.85,3.6,12),r.steel,s,i+2,t))}return n.add(_("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+4.15,t+3.7)),n.add(_("N2","#1a2830","#d6b48a",1.8,.36,e,i+3.6,t+3.7)),Z(n,[[-58,-76],[-64,-76],[-70,-76]],r.pipe,.1),n}function I4(){const n=new I;n.name="hab-water-spare";const e=-46,t=-100,i=A(e,t);return n.add(c(new f(10.2,.2,7.4),r.concrete,e,i+.1,t)),n.add(c(new z(1.55,1.55,7.6,16),r.pipe,e-1.8,i+1.9,t,0,0,Math.PI/2)),n.add(c(new z(1.55,1.55,7.6,16),r.pipe,e+1.8,i+1.9,t,0,0,Math.PI/2)),n.add(c(new f(2.2,1.4,1.6),r.habDark,e,i+.9,t+2.2)),n.add(_("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+4.35,t+3.8)),n.add(_("HAB H2O","#1a2830","#d6b48a",2.8,.36,e,i+3.8,t+3.8)),Z(n,[[-46,-88],[-46,-94],[-46,-100]],r.pipe,.1),n}function z4(){const n=new I;n.name="shop-press";const e=138,t=-160,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.6,1.2,2.6),r.habDark,e,i+.8,t)),n.add(c(new f(1.1,3.2,1.1),r.steelDark,e-1.5,i+2.2,t)),n.add(c(new f(1.1,3.2,1.1),r.steelDark,e+1.5,i+2.2,t)),n.add(c(new f(4.2,.28,2),r.steel,e,i+3.75,t)),n.add(c(new z(.35,.35,1.2,12),r.steel,e,i+2.4,t)),oe(n,133.8,-157.6,.1,.8),n.add(_("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.35,t+3.7)),n.add(_("PRESS","#1a100c","#d6b48a",2.4,.36,e,i+3.9,t+3.7)),n}function L4(){const n=new I;n.name="hab-coupler-spare";const e=-8,t=-98,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new z(1.35,1.35,6.4,16),r.habDark,e,i+1.7,t,0,0,Math.PI/2)),n.add(c(new Ce(1.4,.16,8,16),r.steel,e-3.2,i+1.7,t,0,0,Math.PI/2)),n.add(c(new Ce(1.4,.16,8,16),r.steel,e+3.2,i+1.7,t,0,0,Math.PI/2)),n.add(_("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.55,t+3.7)),n.add(_("TUBE","#1a100c","#d6b48a",2,.36,e,i+3.1,t+3.7)),n}function U4(){const n=new I;n.name="ice-weigh-spare";const e=-90,t=-124,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(6.4,.28,3.6),r.steel,e,i+.28,t)),n.add(c(new f(2.2,2.4,1.8),r.habDark,e+3.2,i+1.4,t+2)),n.add(c(new f(.18,3.2,.18),r.steelDark,e-3.6,i+1.8,t-2.4)),n.add(c(new f(.18,3.2,.18),r.steelDark,e+3.6,i+1.8,t-2.4)),n.add(c(new f(7.4,.12,.12),r.steel,e,i+3.45,t-2.4)),n.add(_("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+3.15,t+3.7)),n.add(_("WEIGH","#1a2830","#d6b48a",2.6,.36,e,i+2.6,t+3.7)),n}function N4(){const n=new I;n.name="grow-nutrient-spare";const e=70,t=-152,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(4.4,2.8,3.6),r.habDark,e-1.4,i+1.6,t)),n.add(c(new z(1.15,1.15,3.6,14),r.pipe,e+2.8,i+2,t)),n.add(c(new z(.85,.85,2.8,12),r.steelDark,e+2.8,i+1.6,t+2)),n.add(_("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.25,t+3.7)),n.add(_("NUTRIENT","#1a100c","#d6b48a",3.4,.36,e,i+3.7,t+3.7)),Z(n,[[70,-140],[70,-146],[70,-152]],r.pipe,.1),n}function O4(){const n=new I;n.name="shop-welder-2";const e=138,t=-174,i=A(e,t);return n.add(c(new f(9.6,.2,7.2),r.concrete,e,i+.1,t)),n.add(c(new f(3.4,2.2,2.6),r.habDark,e-2.2,i+1.3,t)),n.add(c(new f(.35,2.8,.35),r.steel,e+2,i+1.6,t)),n.add(c(new f(2.2,.28,.28),r.steel,e+3,i+2.9,t)),n.add(c(new f(1.8,1.2,1.6),r.steelDark,e+2.4,i+.8,t+1.6)),n.add(_("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.15,t+3.7)),n.add(_("WELDER","#1a100c","#d6b48a",2.6,.36,e,i+2.7,t+3.7)),n}const sc=new v(.55,.62,.38);function k4(){const n=new Rp;p2(n),n.add(l2(sc)),n.add(h2(sc)),n.add(r2()),n.add(o2()),n.add(u2());const e=f2();n.add(e);const t=g2();return n.add(t.group),{scene:n,dust:e,settlement:t,getHeight:A}}function B4(n){const e=new Ap({canvas:n,antialias:!0,powerPreference:"high-performance"});return e.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),e.setSize(window.innerWidth,window.innerHeight),e.shadowMap.enabled=!0,e.shadowMap.type=oc,e.outputColorSpace=kt,e.toneMapping=dc,e.toneMappingExposure=1.05,e}function H4(n,e){window.addEventListener("resize",()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)})}export{Bi as C,en as P,v as V,B4 as a,H4 as b,k4 as c,F4 as d};
