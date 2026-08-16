(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pr="170",ul=0,Kr=1,fl=2,rc=1,oc=2,Mn=3,On=0,It=1,ln=2,Nn=0,Ei=1,Jr=2,Zr=3,$r=4,pl=5,Zn=100,ml=101,gl=102,xl=103,_l=104,vl=200,Ml=201,wl=202,yl=203,Hs=204,Gs=205,bl=206,Sl=207,El=208,Tl=209,Al=210,Rl=211,Cl=212,Pl=213,Dl=214,Vs=0,Ws=1,Xs=2,Ri=3,qs=4,Ys=5,Ks=6,Js=7,cc=0,Il=1,Ll=2,Fn=0,Ul=1,zl=2,Nl=3,lc=4,Fl=5,Ol=6,Bl=7,dc=300,Ci=301,Pi=302,Zs=303,$s=304,ts=306,js=1e3,jn=1001,Qs=1002,Vt=1003,kl=1004,xa=1005,dn=1006,os=1007,Qn=1008,bn=1009,hc=1010,uc=1011,ia=1012,Dr=1013,ei=1014,hn=1015,sa=1016,Ir=1017,Lr=1018,Di=1020,fc=35902,pc=1021,mc=1022,tn=1023,gc=1024,xc=1025,Ti=1026,Ii=1027,Ur=1028,zr=1029,_c=1030,Nr=1031,Fr=1033,Wa=33776,Xa=33777,qa=33778,Ya=33779,er=35840,tr=35841,nr=35842,ir=35843,ar=36196,sr=37492,rr=37496,or=37808,cr=37809,lr=37810,dr=37811,hr=37812,ur=37813,fr=37814,pr=37815,mr=37816,gr=37817,xr=37818,_r=37819,vr=37820,Mr=37821,Ka=36492,wr=36494,yr=36495,vc=36283,br=36284,Sr=36285,Er=36286,Hl=3200,Gl=3201,Mc=0,Vl=1,zn="",Ft="srgb",Ui="srgb-linear",ns="linear",rt="srgb",oi=7680,jr=519,Wl=512,Xl=513,ql=514,wc=515,Yl=516,Kl=517,Jl=518,Zl=519,Qr=35044,eo="300 es",wn=2e3,$a=2001;class zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const s=a.indexOf(t);s!==-1&&a.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cs=Math.PI/180,Tr=180/Math.PI;function ra(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]).toLowerCase()}function Rt(n,e,t){return Math.max(e,Math.min(t,n))}function $l(n,e){return(n%e+e)%e}function ls(n,e,t){return(1-t)*n+t*e}function Wi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Nt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ce{constructor(e=0,t=0){Ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*i-r*a+e.x,this.y=s*a+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,a,s,r,o,u,l){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,r,o,u,l)}set(e,t,i,a,s,r,o,u,l){const h=this.elements;return h[0]=e,h[1]=a,h[2]=o,h[3]=t,h[4]=s,h[5]=u,h[6]=i,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,s=this.elements,r=i[0],o=i[3],u=i[6],l=i[1],h=i[4],m=i[7],f=i[2],g=i[5],v=i[8],w=a[0],_=a[3],x=a[6],C=a[1],R=a[4],S=a[7],H=a[2],D=a[5],L=a[8];return s[0]=r*w+o*C+u*H,s[3]=r*_+o*R+u*D,s[6]=r*x+o*S+u*L,s[1]=l*w+h*C+m*H,s[4]=l*_+h*R+m*D,s[7]=l*x+h*S+m*L,s[2]=f*w+g*C+v*H,s[5]=f*_+g*R+v*D,s[8]=f*x+g*S+v*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],u=e[6],l=e[7],h=e[8];return t*r*h-t*o*l-i*s*h+i*o*u+a*s*l-a*r*u}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],u=e[6],l=e[7],h=e[8],m=h*r-o*l,f=o*u-h*s,g=l*s-r*u,v=t*m+i*f+a*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/v;return e[0]=m*w,e[1]=(a*l-h*i)*w,e[2]=(o*i-a*r)*w,e[3]=f*w,e[4]=(h*t-a*u)*w,e[5]=(a*s-o*t)*w,e[6]=g*w,e[7]=(i*u-l*t)*w,e[8]=(r*t-i*s)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,s,r,o){const u=Math.cos(s),l=Math.sin(s);return this.set(i*u,i*l,-i*(u*r+l*o)+r+e,-a*l,a*u,-a*(-l*r+u*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ds.makeScale(e,t)),this}rotate(e){return this.premultiply(ds.makeRotation(-e)),this}translate(e,t){return this.premultiply(ds.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ds=new Ge;function yc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ja(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function jl(){const n=ja("canvas");return n.style.display="block",n}const to={};function Qi(n){n in to||(to[n]=!0,console.warn(n))}function Ql(n,e,t){return new Promise(function(i,a){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:a();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function ed(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function td(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Qe={enabled:!0,workingColorSpace:Ui,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===rt&&(n.r=yn(n.r),n.g=yn(n.g),n.b=yn(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===rt&&(n.r=Ai(n.r),n.g=Ai(n.g),n.b=Ai(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===zn?ns:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function yn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ai(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const no=[.64,.33,.3,.6,.15,.06],io=[.2126,.7152,.0722],ao=[.3127,.329],so=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ro=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qe.define({[Ui]:{primaries:no,whitePoint:ao,transfer:ns,toXYZ:so,fromXYZ:ro,luminanceCoefficients:io,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:no,whitePoint:ao,transfer:rt,toXYZ:so,fromXYZ:ro,luminanceCoefficients:io,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}});let ci;class nd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ci===void 0&&(ci=ja("canvas")),ci.width=e.width,ci.height=e.height;const i=ci.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ci}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ja("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=yn(s[r]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(yn(t[i]/255)*255):t[i]=yn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let id=0;class bc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=ra(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(hs(a[r].image)):s.push(hs(a[r]))}else s=hs(a);i.url=s}return t||(e.images[this.uuid]=i),i}}function hs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?nd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ad=0;class Ct extends zi{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,i=jn,a=jn,s=dn,r=Qn,o=tn,u=bn,l=Ct.DEFAULT_ANISOTROPY,h=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=ra(),this.name="",this.source=new bc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=u,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case js:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case Qs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case js:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case Qs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=dc;Ct.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,i=0,a=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*t+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*t+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*t+r[7]*i+r[11]*a+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,s;const u=e.elements,l=u[0],h=u[4],m=u[8],f=u[1],g=u[5],v=u[9],w=u[2],_=u[6],x=u[10];if(Math.abs(h-f)<.01&&Math.abs(m-w)<.01&&Math.abs(v-_)<.01){if(Math.abs(h+f)<.1&&Math.abs(m+w)<.1&&Math.abs(v+_)<.1&&Math.abs(l+g+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(l+1)/2,S=(g+1)/2,H=(x+1)/2,D=(h+f)/4,L=(m+w)/4,z=(v+_)/4;return R>S&&R>H?R<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(R),a=D/i,s=L/i):S>H?S<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(S),i=D/a,s=z/a):H<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(H),i=L/s,a=z/s),this.set(i,a,s,t),this}let C=Math.sqrt((_-v)*(_-v)+(m-w)*(m-w)+(f-h)*(f-h));return Math.abs(C)<.001&&(C=1),this.x=(_-v)/C,this.y=(m-w)/C,this.z=(f-h)/C,this.w=Math.acos((l+g+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sd extends zi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const a={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ct(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,a=e.textures.length;i<a;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new bc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends sd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Sc extends Ct{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rd extends Ct{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oa{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,s,r,o){let u=i[a+0],l=i[a+1],h=i[a+2],m=i[a+3];const f=s[r+0],g=s[r+1],v=s[r+2],w=s[r+3];if(o===0){e[t+0]=u,e[t+1]=l,e[t+2]=h,e[t+3]=m;return}if(o===1){e[t+0]=f,e[t+1]=g,e[t+2]=v,e[t+3]=w;return}if(m!==w||u!==f||l!==g||h!==v){let _=1-o;const x=u*f+l*g+h*v+m*w,C=x>=0?1:-1,R=1-x*x;if(R>Number.EPSILON){const H=Math.sqrt(R),D=Math.atan2(H,x*C);_=Math.sin(_*D)/H,o=Math.sin(o*D)/H}const S=o*C;if(u=u*_+f*S,l=l*_+g*S,h=h*_+v*S,m=m*_+w*S,_===1-o){const H=1/Math.sqrt(u*u+l*l+h*h+m*m);u*=H,l*=H,h*=H,m*=H}}e[t]=u,e[t+1]=l,e[t+2]=h,e[t+3]=m}static multiplyQuaternionsFlat(e,t,i,a,s,r){const o=i[a],u=i[a+1],l=i[a+2],h=i[a+3],m=s[r],f=s[r+1],g=s[r+2],v=s[r+3];return e[t]=o*v+h*m+u*g-l*f,e[t+1]=u*v+h*f+l*m-o*g,e[t+2]=l*v+h*g+o*f-u*m,e[t+3]=h*v-o*m-u*f-l*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,s=e._z,r=e._order,o=Math.cos,u=Math.sin,l=o(i/2),h=o(a/2),m=o(s/2),f=u(i/2),g=u(a/2),v=u(s/2);switch(r){case"XYZ":this._x=f*h*m+l*g*v,this._y=l*g*m-f*h*v,this._z=l*h*v+f*g*m,this._w=l*h*m-f*g*v;break;case"YXZ":this._x=f*h*m+l*g*v,this._y=l*g*m-f*h*v,this._z=l*h*v-f*g*m,this._w=l*h*m+f*g*v;break;case"ZXY":this._x=f*h*m-l*g*v,this._y=l*g*m+f*h*v,this._z=l*h*v+f*g*m,this._w=l*h*m-f*g*v;break;case"ZYX":this._x=f*h*m-l*g*v,this._y=l*g*m+f*h*v,this._z=l*h*v-f*g*m,this._w=l*h*m+f*g*v;break;case"YZX":this._x=f*h*m+l*g*v,this._y=l*g*m+f*h*v,this._z=l*h*v-f*g*m,this._w=l*h*m-f*g*v;break;case"XZY":this._x=f*h*m-l*g*v,this._y=l*g*m-f*h*v,this._z=l*h*v+f*g*m,this._w=l*h*m+f*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],s=t[8],r=t[1],o=t[5],u=t[9],l=t[2],h=t[6],m=t[10],f=i+o+m;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(h-u)*g,this._y=(s-l)*g,this._z=(r-a)*g}else if(i>o&&i>m){const g=2*Math.sqrt(1+i-o-m);this._w=(h-u)/g,this._x=.25*g,this._y=(a+r)/g,this._z=(s+l)/g}else if(o>m){const g=2*Math.sqrt(1+o-i-m);this._w=(s-l)/g,this._x=(a+r)/g,this._y=.25*g,this._z=(u+h)/g}else{const g=2*Math.sqrt(1+m-i-o);this._w=(r-a)/g,this._x=(s+l)/g,this._y=(u+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,s=e._z,r=e._w,o=t._x,u=t._y,l=t._z,h=t._w;return this._x=i*h+r*o+a*l-s*u,this._y=a*h+r*u+s*o-i*l,this._z=s*h+r*l+i*u-a*o,this._w=r*h-i*o-a*u-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,a=this._y,s=this._z,r=this._w;let o=r*e._w+i*e._x+a*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=i,this._y=a,this._z=s,this;const u=1-o*o;if(u<=Number.EPSILON){const g=1-t;return this._w=g*r+t*this._w,this._x=g*i+t*this._x,this._y=g*a+t*this._y,this._z=g*s+t*this._z,this.normalize(),this}const l=Math.sqrt(u),h=Math.atan2(l,o),m=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=r*m+this._w*f,this._x=i*m+this._x*f,this._y=a*m+this._y*f,this._z=s*m+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class M{constructor(e=0,t=0,i=0){M.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(oo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(oo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*a,this.y=s[1]*t+s[4]*i+s[7]*a,this.z=s[2]*t+s[5]*i+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,s=e.elements,r=1/(s[3]*t+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*t+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*t+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,s=e.x,r=e.y,o=e.z,u=e.w,l=2*(r*a-o*i),h=2*(o*t-s*a),m=2*(s*i-r*t);return this.x=t+u*l+r*m-o*h,this.y=i+u*h+o*l-s*m,this.z=a+u*m+s*h-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*a,this.y=s[1]*t+s[5]*i+s[9]*a,this.z=s[2]*t+s[6]*i+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,s=e.z,r=t.x,o=t.y,u=t.z;return this.x=a*u-s*o,this.y=s*r-i*u,this.z=i*o-a*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return us.copy(this).projectOnVector(e),this.sub(us)}reflect(e){return this.sub(us.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const us=new M,oo=new oa;class ni{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Jt):Jt.fromBufferAttribute(s,r),Jt.applyMatrix4(e.matrixWorld),this.expandByPoint(Jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_a.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_a.copy(i.boundingBox)),_a.applyMatrix4(e.matrixWorld),this.union(_a)}const a=e.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xi),va.subVectors(this.max,Xi),li.subVectors(e.a,Xi),di.subVectors(e.b,Xi),hi.subVectors(e.c,Xi),An.subVectors(di,li),Rn.subVectors(hi,di),Hn.subVectors(li,hi);let t=[0,-An.z,An.y,0,-Rn.z,Rn.y,0,-Hn.z,Hn.y,An.z,0,-An.x,Rn.z,0,-Rn.x,Hn.z,0,-Hn.x,-An.y,An.x,0,-Rn.y,Rn.x,0,-Hn.y,Hn.x,0];return!fs(t,li,di,hi,va)||(t=[1,0,0,0,1,0,0,0,1],!fs(t,li,di,hi,va))?!1:(Ma.crossVectors(An,Rn),t=[Ma.x,Ma.y,Ma.z],fs(t,li,di,hi,va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mn=[new M,new M,new M,new M,new M,new M,new M,new M],Jt=new M,_a=new ni,li=new M,di=new M,hi=new M,An=new M,Rn=new M,Hn=new M,Xi=new M,va=new M,Ma=new M,Gn=new M;function fs(n,e,t,i,a){for(let s=0,r=n.length-3;s<=r;s+=3){Gn.fromArray(n,s);const o=a.x*Math.abs(Gn.x)+a.y*Math.abs(Gn.y)+a.z*Math.abs(Gn.z),u=e.dot(Gn),l=t.dot(Gn),h=i.dot(Gn);if(Math.max(-Math.max(u,l,h),Math.min(u,l,h))>o)return!1}return!0}const od=new ni,qi=new M,ps=new M;class Ni{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):od.setFromPoints(e).getCenter(i);let a=0;for(let s=0,r=e.length;s<r;s++)a=Math.max(a,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qi.subVectors(e,this.center);const t=qi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(qi,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ps.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qi.copy(e.center).add(ps)),this.expandByPoint(qi.copy(e.center).sub(ps))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gn=new M,ms=new M,wa=new M,Cn=new M,gs=new M,ya=new M,xs=new M;class Ec{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gn.copy(this.origin).addScaledVector(this.direction,t),gn.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){ms.copy(e).add(t).multiplyScalar(.5),wa.copy(t).sub(e).normalize(),Cn.copy(this.origin).sub(ms);const s=e.distanceTo(t)*.5,r=-this.direction.dot(wa),o=Cn.dot(this.direction),u=-Cn.dot(wa),l=Cn.lengthSq(),h=Math.abs(1-r*r);let m,f,g,v;if(h>0)if(m=r*u-o,f=r*o-u,v=s*h,m>=0)if(f>=-v)if(f<=v){const w=1/h;m*=w,f*=w,g=m*(m+r*f+2*o)+f*(r*m+f+2*u)+l}else f=s,m=Math.max(0,-(r*f+o)),g=-m*m+f*(f+2*u)+l;else f=-s,m=Math.max(0,-(r*f+o)),g=-m*m+f*(f+2*u)+l;else f<=-v?(m=Math.max(0,-(-r*s+o)),f=m>0?-s:Math.min(Math.max(-s,-u),s),g=-m*m+f*(f+2*u)+l):f<=v?(m=0,f=Math.min(Math.max(-s,-u),s),g=f*(f+2*u)+l):(m=Math.max(0,-(r*s+o)),f=m>0?s:Math.min(Math.max(-s,-u),s),g=-m*m+f*(f+2*u)+l);else f=r>0?-s:s,m=Math.max(0,-(r*f+o)),g=-m*m+f*(f+2*u)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,m),a&&a.copy(ms).addScaledVector(wa,f),g}intersectSphere(e,t){gn.subVectors(e.center,this.origin);const i=gn.dot(this.direction),a=gn.dot(gn)-i*i,s=e.radius*e.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=i-r,u=i+r;return u<0?null:o<0?this.at(u,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,s,r,o,u;const l=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,a=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,a=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,r=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,r=(e.min.y-f.y)*h),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),m>=0?(o=(e.min.z-f.z)*m,u=(e.max.z-f.z)*m):(o=(e.max.z-f.z)*m,u=(e.min.z-f.z)*m),i>u||o>a)||((o>i||i!==i)&&(i=o),(u<a||a!==a)&&(a=u),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,gn)!==null}intersectTriangle(e,t,i,a,s){gs.subVectors(t,e),ya.subVectors(i,e),xs.crossVectors(gs,ya);let r=this.direction.dot(xs),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Cn.subVectors(this.origin,e);const u=o*this.direction.dot(ya.crossVectors(Cn,ya));if(u<0)return null;const l=o*this.direction.dot(gs.cross(Cn));if(l<0||u+l>r)return null;const h=-o*Cn.dot(xs);return h<0?null:this.at(h/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,i,a,s,r,o,u,l,h,m,f,g,v,w,_){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,r,o,u,l,h,m,f,g,v,w,_)}set(e,t,i,a,s,r,o,u,l,h,m,f,g,v,w,_){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=a,x[1]=s,x[5]=r,x[9]=o,x[13]=u,x[2]=l,x[6]=h,x[10]=m,x[14]=f,x[3]=g,x[7]=v,x[11]=w,x[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,a=1/ui.setFromMatrixColumn(e,0).length(),s=1/ui.setFromMatrixColumn(e,1).length(),r=1/ui.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,s=e.z,r=Math.cos(i),o=Math.sin(i),u=Math.cos(a),l=Math.sin(a),h=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){const f=r*h,g=r*m,v=o*h,w=o*m;t[0]=u*h,t[4]=-u*m,t[8]=l,t[1]=g+v*l,t[5]=f-w*l,t[9]=-o*u,t[2]=w-f*l,t[6]=v+g*l,t[10]=r*u}else if(e.order==="YXZ"){const f=u*h,g=u*m,v=l*h,w=l*m;t[0]=f+w*o,t[4]=v*o-g,t[8]=r*l,t[1]=r*m,t[5]=r*h,t[9]=-o,t[2]=g*o-v,t[6]=w+f*o,t[10]=r*u}else if(e.order==="ZXY"){const f=u*h,g=u*m,v=l*h,w=l*m;t[0]=f-w*o,t[4]=-r*m,t[8]=v+g*o,t[1]=g+v*o,t[5]=r*h,t[9]=w-f*o,t[2]=-r*l,t[6]=o,t[10]=r*u}else if(e.order==="ZYX"){const f=r*h,g=r*m,v=o*h,w=o*m;t[0]=u*h,t[4]=v*l-g,t[8]=f*l+w,t[1]=u*m,t[5]=w*l+f,t[9]=g*l-v,t[2]=-l,t[6]=o*u,t[10]=r*u}else if(e.order==="YZX"){const f=r*u,g=r*l,v=o*u,w=o*l;t[0]=u*h,t[4]=w-f*m,t[8]=v*m+g,t[1]=m,t[5]=r*h,t[9]=-o*h,t[2]=-l*h,t[6]=g*m+v,t[10]=f-w*m}else if(e.order==="XZY"){const f=r*u,g=r*l,v=o*u,w=o*l;t[0]=u*h,t[4]=-m,t[8]=l*h,t[1]=f*m+w,t[5]=r*h,t[9]=g*m-v,t[2]=v*m-g,t[6]=o*h,t[10]=w*m+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cd,e,ld)}lookAt(e,t,i){const a=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Pn.crossVectors(i,Ht),Pn.lengthSq()===0&&(Math.abs(i.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Pn.crossVectors(i,Ht)),Pn.normalize(),ba.crossVectors(Ht,Pn),a[0]=Pn.x,a[4]=ba.x,a[8]=Ht.x,a[1]=Pn.y,a[5]=ba.y,a[9]=Ht.y,a[2]=Pn.z,a[6]=ba.z,a[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,s=this.elements,r=i[0],o=i[4],u=i[8],l=i[12],h=i[1],m=i[5],f=i[9],g=i[13],v=i[2],w=i[6],_=i[10],x=i[14],C=i[3],R=i[7],S=i[11],H=i[15],D=a[0],L=a[4],z=a[8],A=a[12],E=a[1],U=a[5],Y=a[9],q=a[13],Z=a[2],ne=a[6],$=a[10],oe=a[14],J=a[3],he=a[7],xe=a[11],Re=a[15];return s[0]=r*D+o*E+u*Z+l*J,s[4]=r*L+o*U+u*ne+l*he,s[8]=r*z+o*Y+u*$+l*xe,s[12]=r*A+o*q+u*oe+l*Re,s[1]=h*D+m*E+f*Z+g*J,s[5]=h*L+m*U+f*ne+g*he,s[9]=h*z+m*Y+f*$+g*xe,s[13]=h*A+m*q+f*oe+g*Re,s[2]=v*D+w*E+_*Z+x*J,s[6]=v*L+w*U+_*ne+x*he,s[10]=v*z+w*Y+_*$+x*xe,s[14]=v*A+w*q+_*oe+x*Re,s[3]=C*D+R*E+S*Z+H*J,s[7]=C*L+R*U+S*ne+H*he,s[11]=C*z+R*Y+S*$+H*xe,s[15]=C*A+R*q+S*oe+H*Re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],s=e[12],r=e[1],o=e[5],u=e[9],l=e[13],h=e[2],m=e[6],f=e[10],g=e[14],v=e[3],w=e[7],_=e[11],x=e[15];return v*(+s*u*m-a*l*m-s*o*f+i*l*f+a*o*g-i*u*g)+w*(+t*u*g-t*l*f+s*r*f-a*r*g+a*l*h-s*u*h)+_*(+t*l*m-t*o*g-s*r*m+i*r*g+s*o*h-i*l*h)+x*(-a*o*h-t*u*m+t*o*f+a*r*m-i*r*f+i*u*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],u=e[6],l=e[7],h=e[8],m=e[9],f=e[10],g=e[11],v=e[12],w=e[13],_=e[14],x=e[15],C=m*_*l-w*f*l+w*u*g-o*_*g-m*u*x+o*f*x,R=v*f*l-h*_*l-v*u*g+r*_*g+h*u*x-r*f*x,S=h*w*l-v*m*l+v*o*g-r*w*g-h*o*x+r*m*x,H=v*m*u-h*w*u-v*o*f+r*w*f+h*o*_-r*m*_,D=t*C+i*R+a*S+s*H;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/D;return e[0]=C*L,e[1]=(w*f*s-m*_*s-w*a*g+i*_*g+m*a*x-i*f*x)*L,e[2]=(o*_*s-w*u*s+w*a*l-i*_*l-o*a*x+i*u*x)*L,e[3]=(m*u*s-o*f*s-m*a*l+i*f*l+o*a*g-i*u*g)*L,e[4]=R*L,e[5]=(h*_*s-v*f*s+v*a*g-t*_*g-h*a*x+t*f*x)*L,e[6]=(v*u*s-r*_*s-v*a*l+t*_*l+r*a*x-t*u*x)*L,e[7]=(r*f*s-h*u*s+h*a*l-t*f*l-r*a*g+t*u*g)*L,e[8]=S*L,e[9]=(v*m*s-h*w*s-v*i*g+t*w*g+h*i*x-t*m*x)*L,e[10]=(r*w*s-v*o*s+v*i*l-t*w*l-r*i*x+t*o*x)*L,e[11]=(h*o*s-r*m*s-h*i*l+t*m*l+r*i*g-t*o*g)*L,e[12]=H*L,e[13]=(h*w*a-v*m*a+v*i*f-t*w*f-h*i*_+t*m*_)*L,e[14]=(v*o*a-r*w*a-v*i*u+t*w*u+r*i*_-t*o*_)*L,e[15]=(r*m*a-h*o*a+h*i*u-t*m*u-r*i*f+t*o*f)*L,this}scale(e){const t=this.elements,i=e.x,a=e.y,s=e.z;return t[0]*=i,t[4]*=a,t[8]*=s,t[1]*=i,t[5]*=a,t[9]*=s,t[2]*=i,t[6]*=a,t[10]*=s,t[3]*=i,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),s=1-i,r=e.x,o=e.y,u=e.z,l=s*r,h=s*o;return this.set(l*r+i,l*o-a*u,l*u+a*o,0,l*o+a*u,h*o+i,h*u-a*r,0,l*u-a*o,h*u+a*r,s*u*u+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,s,r){return this.set(1,i,s,0,e,1,r,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,s=t._x,r=t._y,o=t._z,u=t._w,l=s+s,h=r+r,m=o+o,f=s*l,g=s*h,v=s*m,w=r*h,_=r*m,x=o*m,C=u*l,R=u*h,S=u*m,H=i.x,D=i.y,L=i.z;return a[0]=(1-(w+x))*H,a[1]=(g+S)*H,a[2]=(v-R)*H,a[3]=0,a[4]=(g-S)*D,a[5]=(1-(f+x))*D,a[6]=(_+C)*D,a[7]=0,a[8]=(v+R)*L,a[9]=(_-C)*L,a[10]=(1-(f+w))*L,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;let s=ui.set(a[0],a[1],a[2]).length();const r=ui.set(a[4],a[5],a[6]).length(),o=ui.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),e.x=a[12],e.y=a[13],e.z=a[14],Zt.copy(this);const l=1/s,h=1/r,m=1/o;return Zt.elements[0]*=l,Zt.elements[1]*=l,Zt.elements[2]*=l,Zt.elements[4]*=h,Zt.elements[5]*=h,Zt.elements[6]*=h,Zt.elements[8]*=m,Zt.elements[9]*=m,Zt.elements[10]*=m,t.setFromRotationMatrix(Zt),i.x=s,i.y=r,i.z=o,this}makePerspective(e,t,i,a,s,r,o=wn){const u=this.elements,l=2*s/(t-e),h=2*s/(i-a),m=(t+e)/(t-e),f=(i+a)/(i-a);let g,v;if(o===wn)g=-(r+s)/(r-s),v=-2*r*s/(r-s);else if(o===$a)g=-r/(r-s),v=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=l,u[4]=0,u[8]=m,u[12]=0,u[1]=0,u[5]=h,u[9]=f,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=v,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,a,s,r,o=wn){const u=this.elements,l=1/(t-e),h=1/(i-a),m=1/(r-s),f=(t+e)*l,g=(i+a)*h;let v,w;if(o===wn)v=(r+s)*m,w=-2*m;else if(o===$a)v=s*m,w=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=2*l,u[4]=0,u[8]=0,u[12]=-f,u[1]=0,u[5]=2*h,u[9]=0,u[13]=-g,u[2]=0,u[6]=0,u[10]=w,u[14]=-v,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ui=new M,Zt=new ht,cd=new M(0,0,0),ld=new M(1,1,1),Pn=new M,ba=new M,Ht=new M,co=new ht,lo=new oa;class fn{constructor(e=0,t=0,i=0,a=fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,s=a[0],r=a[4],o=a[8],u=a[1],l=a[5],h=a[9],m=a[2],f=a[6],g=a[10];switch(t){case"XYZ":this._y=Math.asin(Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(u,l)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-m,g),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-Rt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Rt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return co.makeRotationFromQuaternion(e),this.setFromRotationMatrix(co,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lo.setFromEuler(this),this.setFromQuaternion(lo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fn.DEFAULT_ORDER="XYZ";class Tc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dd=0;const ho=new M,fi=new oa,xn=new ht,Sa=new M,Yi=new M,hd=new M,ud=new oa,uo=new M(1,0,0),fo=new M(0,1,0),po=new M(0,0,1),mo={type:"added"},fd={type:"removed"},pi={type:"childadded",child:null},_s={type:"childremoved",child:null};class Mt extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=ra(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new M,t=new fn,i=new oa,a=new M(1,1,1);function s(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ge}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fi.setFromAxisAngle(e,t),this.quaternion.multiply(fi),this}rotateOnWorldAxis(e,t){return fi.setFromAxisAngle(e,t),this.quaternion.premultiply(fi),this}rotateX(e){return this.rotateOnAxis(uo,e)}rotateY(e){return this.rotateOnAxis(fo,e)}rotateZ(e){return this.rotateOnAxis(po,e)}translateOnAxis(e,t){return ho.copy(e).applyQuaternion(this.quaternion),this.position.add(ho.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uo,e)}translateY(e){return this.translateOnAxis(fo,e)}translateZ(e){return this.translateOnAxis(po,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Sa.copy(e):Sa.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(Yi,Sa,this.up):xn.lookAt(Sa,Yi,this.up),this.quaternion.setFromRotationMatrix(xn),a&&(xn.extractRotation(a.matrixWorld),fi.setFromRotationMatrix(xn),this.quaternion.premultiply(fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mo),pi.child=e,this.dispatchEvent(pi),pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fd),_s.child=e,this.dispatchEvent(_s),_s.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mo),pi.child=e,this.dispatchEvent(pi),pi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,e,hd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,ud,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function s(o,u){return o[u.uuid]===void 0&&(o[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const u=o.shapes;if(Array.isArray(u))for(let l=0,h=u.length;l<h;l++){const m=u[l];s(e.shapes,m)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let u=0,l=this.material.length;u<l;u++)o.push(s(e.materials,this.material[u]));a.material=o}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const u=this.animations[o];a.animations.push(s(e.animations,u))}}if(t){const o=r(e.geometries),u=r(e.materials),l=r(e.textures),h=r(e.images),m=r(e.shapes),f=r(e.skeletons),g=r(e.animations),v=r(e.nodes);o.length>0&&(i.geometries=o),u.length>0&&(i.materials=u),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),m.length>0&&(i.shapes=m),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),v.length>0&&(i.nodes=v)}return i.object=a,i;function r(o){const u=[];for(const l in o){const h=o[l];delete h.metadata,u.push(h)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}Mt.DEFAULT_UP=new M(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $t=new M,_n=new M,vs=new M,vn=new M,mi=new M,gi=new M,go=new M,Ms=new M,ws=new M,ys=new M,bs=new xt,Ss=new xt,Es=new xt;class en{constructor(e=new M,t=new M,i=new M){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),$t.subVectors(e,t),a.cross($t);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,i,a,s){$t.subVectors(a,t),_n.subVectors(i,t),vs.subVectors(e,t);const r=$t.dot($t),o=$t.dot(_n),u=$t.dot(vs),l=_n.dot(_n),h=_n.dot(vs),m=r*l-o*o;if(m===0)return s.set(0,0,0),null;const f=1/m,g=(l*u-o*h)*f,v=(r*h-o*u)*f;return s.set(1-g-v,v,g)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(e,t,i,a,s,r,o,u){return this.getBarycoord(e,t,i,a,vn)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,vn.x),u.addScaledVector(r,vn.y),u.addScaledVector(o,vn.z),u)}static getInterpolatedAttribute(e,t,i,a,s,r){return bs.setScalar(0),Ss.setScalar(0),Es.setScalar(0),bs.fromBufferAttribute(e,t),Ss.fromBufferAttribute(e,i),Es.fromBufferAttribute(e,a),r.setScalar(0),r.addScaledVector(bs,s.x),r.addScaledVector(Ss,s.y),r.addScaledVector(Es,s.z),r}static isFrontFacing(e,t,i,a){return $t.subVectors(i,t),_n.subVectors(e,t),$t.cross(_n).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),$t.cross(_n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,s){return en.getInterpolation(e,this.a,this.b,this.c,t,i,a,s)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,s=this.c;let r,o;mi.subVectors(a,i),gi.subVectors(s,i),Ms.subVectors(e,i);const u=mi.dot(Ms),l=gi.dot(Ms);if(u<=0&&l<=0)return t.copy(i);ws.subVectors(e,a);const h=mi.dot(ws),m=gi.dot(ws);if(h>=0&&m<=h)return t.copy(a);const f=u*m-h*l;if(f<=0&&u>=0&&h<=0)return r=u/(u-h),t.copy(i).addScaledVector(mi,r);ys.subVectors(e,s);const g=mi.dot(ys),v=gi.dot(ys);if(v>=0&&g<=v)return t.copy(s);const w=g*l-u*v;if(w<=0&&l>=0&&v<=0)return o=l/(l-v),t.copy(i).addScaledVector(gi,o);const _=h*v-g*m;if(_<=0&&m-h>=0&&g-v>=0)return go.subVectors(s,a),o=(m-h)/(m-h+(g-v)),t.copy(a).addScaledVector(go,o);const x=1/(_+w+f);return r=w*x,o=f*x,t.copy(i).addScaledVector(mi,r).addScaledVector(gi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ac={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},Ea={h:0,s:0,l:0};function Ts(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class We{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,a=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.toWorkingColorSpace(this,a),this}setHSL(e,t,i,a=Qe.workingColorSpace){if(e=$l(e,1),t=Rt(t,0,1),i=Rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,r=2*i-s;this.r=Ts(r,s,e+1/3),this.g=Ts(r,s,e),this.b=Ts(r,s,e-1/3)}return Qe.toWorkingColorSpace(this,a),this}setStyle(e,t=Ft){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const i=Ac[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yn(e.r),this.g=yn(e.g),this.b=yn(e.b),this}copyLinearToSRGB(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return Qe.fromWorkingColorSpace(At.copy(this),e),Math.round(Rt(At.r*255,0,255))*65536+Math.round(Rt(At.g*255,0,255))*256+Math.round(Rt(At.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(At.copy(this),t);const i=At.r,a=At.g,s=At.b,r=Math.max(i,a,s),o=Math.min(i,a,s);let u,l;const h=(o+r)/2;if(o===r)u=0,l=0;else{const m=r-o;switch(l=h<=.5?m/(r+o):m/(2-r-o),r){case i:u=(a-s)/m+(a<s?6:0);break;case a:u=(s-i)/m+2;break;case s:u=(i-a)/m+4;break}u/=6}return e.h=u,e.s=l,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=Ft){Qe.fromWorkingColorSpace(At.copy(this),e);const t=At.r,i=At.g,a=At.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(Dn),this.setHSL(Dn.h+e,Dn.s+t,Dn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Dn),e.getHSL(Ea);const i=ls(Dn.h,Ea.h,t),a=ls(Dn.s,Ea.s,t),s=ls(Dn.l,Ea.l,t);return this.setHSL(i,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*a,this.g=s[1]*t+s[4]*i+s[7]*a,this.b=s[2]*t+s[5]*i+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new We;We.NAMES=Ac;let pd=0;class Fi extends zi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=ra(),this.name="",this.blending=Ei,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hs,this.blendDst=Gs,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oi,this.stencilZFail=oi,this.stencilZPass=oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(i.blending=this.blending),this.side!==On&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Hs&&(i.blendSrc=this.blendSrc),this.blendDst!==Gs&&(i.blendDst=this.blendDst),this.blendEquation!==Zn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ri&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jr&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==oi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==oi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const r=[];for(const o in s){const u=s[o];delete u.metadata,r.push(u)}return r}if(t){const s=a(e.textures),r=a(e.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Or extends Fi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new M,Ta=new Ce;class Wt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qr,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ta.fromBufferAttribute(this,t),Ta.applyMatrix3(e),this.setXY(t,Ta.x,Ta.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Wi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),a=Nt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),a=Nt(a,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qr&&(e.usage=this.usage),e}}class Rc extends Wt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Cc extends Wt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ft extends Wt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let md=0;const qt=new ht,As=new Mt,xi=new M,Gt=new ni,Ki=new ni,St=new M;class Lt extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=ra(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yc(e)?Cc:Rc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,i){return qt.makeTranslation(e,t,i),this.applyMatrix4(qt),this}scale(e,t,i){return qt.makeScale(e,t,i),this.applyMatrix4(qt),this}lookAt(e){return As.lookAt(e),As.updateMatrix(),this.applyMatrix4(As.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xi).negate(),this.translate(xi.x,xi.y,xi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,s=e.length;a<s;a++){const r=e[a];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ft(i,3))}else{for(let i=0,a=t.count;i<a;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const s=t[i];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new M,1/0);return}if(e){const i=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];Ki.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(Gt.min,Ki.min),Gt.expandByPoint(St),St.addVectors(Gt.max,Ki.max),Gt.expandByPoint(St)):(Gt.expandByPoint(Ki.min),Gt.expandByPoint(Ki.max))}Gt.getCenter(i);let a=0;for(let s=0,r=e.count;s<r;s++)St.fromBufferAttribute(e,s),a=Math.max(a,i.distanceToSquared(St));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],u=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)St.fromBufferAttribute(o,l),u&&(xi.fromBufferAttribute(e,l),St.add(xi)),a=Math.max(a,i.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),o=[],u=[];for(let z=0;z<i.count;z++)o[z]=new M,u[z]=new M;const l=new M,h=new M,m=new M,f=new Ce,g=new Ce,v=new Ce,w=new M,_=new M;function x(z,A,E){l.fromBufferAttribute(i,z),h.fromBufferAttribute(i,A),m.fromBufferAttribute(i,E),f.fromBufferAttribute(s,z),g.fromBufferAttribute(s,A),v.fromBufferAttribute(s,E),h.sub(l),m.sub(l),g.sub(f),v.sub(f);const U=1/(g.x*v.y-v.x*g.y);isFinite(U)&&(w.copy(h).multiplyScalar(v.y).addScaledVector(m,-g.y).multiplyScalar(U),_.copy(m).multiplyScalar(g.x).addScaledVector(h,-v.x).multiplyScalar(U),o[z].add(w),o[A].add(w),o[E].add(w),u[z].add(_),u[A].add(_),u[E].add(_))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let z=0,A=C.length;z<A;++z){const E=C[z],U=E.start,Y=E.count;for(let q=U,Z=U+Y;q<Z;q+=3)x(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const R=new M,S=new M,H=new M,D=new M;function L(z){H.fromBufferAttribute(a,z),D.copy(H);const A=o[z];R.copy(A),R.sub(H.multiplyScalar(H.dot(A))).normalize(),S.crossVectors(D,A);const U=S.dot(u[z])<0?-1:1;r.setXYZW(z,R.x,R.y,R.z,U)}for(let z=0,A=C.length;z<A;++z){const E=C[z],U=E.start,Y=E.count;for(let q=U,Z=U+Y;q<Z;q+=3)L(e.getX(q+0)),L(e.getX(q+1)),L(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const a=new M,s=new M,r=new M,o=new M,u=new M,l=new M,h=new M,m=new M;if(e)for(let f=0,g=e.count;f<g;f+=3){const v=e.getX(f+0),w=e.getX(f+1),_=e.getX(f+2);a.fromBufferAttribute(t,v),s.fromBufferAttribute(t,w),r.fromBufferAttribute(t,_),h.subVectors(r,s),m.subVectors(a,s),h.cross(m),o.fromBufferAttribute(i,v),u.fromBufferAttribute(i,w),l.fromBufferAttribute(i,_),o.add(h),u.add(h),l.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(w,u.x,u.y,u.z),i.setXYZ(_,l.x,l.y,l.z)}else for(let f=0,g=t.count;f<g;f+=3)a.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),h.subVectors(r,s),m.subVectors(a,s),h.cross(m),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,u){const l=o.array,h=o.itemSize,m=o.normalized,f=new l.constructor(u.length*h);let g=0,v=0;for(let w=0,_=u.length;w<_;w++){o.isInterleavedBufferAttribute?g=u[w]*o.data.stride+o.offset:g=u[w]*h;for(let x=0;x<h;x++)f[v++]=l[g++]}return new Wt(f,h,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,i=this.index.array,a=this.attributes;for(const o in a){const u=a[o],l=e(u,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const u=[],l=s[o];for(let h=0,m=l.length;h<m;h++){const f=l[h],g=e(f,i);u.push(g)}t.morphAttributes[o]=u}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,u=r.length;o<u;o++){const l=r[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const l in u)u[l]!==void 0&&(e[l]=u[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const u in i){const l=i[u];e.data.attributes[u]=l.toJSON(e.data)}const a={};let s=!1;for(const u in this.morphAttributes){const l=this.morphAttributes[u],h=[];for(let m=0,f=l.length;m<f;m++){const g=l[m];h.push(g.toJSON(e.data))}h.length>0&&(a[u]=h,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const a=e.attributes;for(const l in a){const h=a[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],m=s[l];for(let f=0,g=m.length;f<g;f++)h.push(m[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,h=r.length;l<h;l++){const m=r[l];this.addGroup(m.start,m.count,m.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xo=new ht,Vn=new Ec,Aa=new Ni,_o=new M,Ra=new M,Ca=new M,Pa=new M,Rs=new M,Da=new M,vo=new M,Ia=new M;class dt extends Mt{constructor(e=new Lt,t=new Or){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(s&&o){Da.set(0,0,0);for(let u=0,l=s.length;u<l;u++){const h=o[u],m=s[u];h!==0&&(Rs.fromBufferAttribute(m,e),r?Da.addScaledVector(Rs,h):Da.addScaledVector(Rs.sub(t),h))}t.add(Da)}return t}raycast(e,t){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Aa.copy(i.boundingSphere),Aa.applyMatrix4(s),Vn.copy(e.ray).recast(e.near),!(Aa.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(Aa,_o)===null||Vn.origin.distanceToSquared(_o)>(e.far-e.near)**2))&&(xo.copy(s).invert(),Vn.copy(e.ray).applyMatrix4(xo),!(i.boundingBox!==null&&Vn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Vn)))}_computeIntersections(e,t,i){let a;const s=this.geometry,r=this.material,o=s.index,u=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,m=s.attributes.normal,f=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,w=f.length;v<w;v++){const _=f[v],x=r[_.materialIndex],C=Math.max(_.start,g.start),R=Math.min(o.count,Math.min(_.start+_.count,g.start+g.count));for(let S=C,H=R;S<H;S+=3){const D=o.getX(S),L=o.getX(S+1),z=o.getX(S+2);a=La(this,x,e,i,l,h,m,D,L,z),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const v=Math.max(0,g.start),w=Math.min(o.count,g.start+g.count);for(let _=v,x=w;_<x;_+=3){const C=o.getX(_),R=o.getX(_+1),S=o.getX(_+2);a=La(this,r,e,i,l,h,m,C,R,S),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}else if(u!==void 0)if(Array.isArray(r))for(let v=0,w=f.length;v<w;v++){const _=f[v],x=r[_.materialIndex],C=Math.max(_.start,g.start),R=Math.min(u.count,Math.min(_.start+_.count,g.start+g.count));for(let S=C,H=R;S<H;S+=3){const D=S,L=S+1,z=S+2;a=La(this,x,e,i,l,h,m,D,L,z),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const v=Math.max(0,g.start),w=Math.min(u.count,g.start+g.count);for(let _=v,x=w;_<x;_+=3){const C=_,R=_+1,S=_+2;a=La(this,r,e,i,l,h,m,C,R,S),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}}}function gd(n,e,t,i,a,s,r,o){let u;if(e.side===It?u=i.intersectTriangle(r,s,a,!0,o):u=i.intersectTriangle(a,s,r,e.side===On,o),u===null)return null;Ia.copy(o),Ia.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ia);return l<t.near||l>t.far?null:{distance:l,point:Ia.clone(),object:n}}function La(n,e,t,i,a,s,r,o,u,l){n.getVertexPosition(o,Ra),n.getVertexPosition(u,Ca),n.getVertexPosition(l,Pa);const h=gd(n,e,t,i,Ra,Ca,Pa,vo);if(h){const m=new M;en.getBarycoord(vo,Ra,Ca,Pa,m),a&&(h.uv=en.getInterpolatedAttribute(a,o,u,l,m,new Ce)),s&&(h.uv1=en.getInterpolatedAttribute(s,o,u,l,m,new Ce)),r&&(h.normal=en.getInterpolatedAttribute(r,o,u,l,m,new M),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:u,c:l,normal:new M,materialIndex:0};en.getNormal(Ra,Ca,Pa,f.normal),h.face=f,h.barycoord=m}return h}class p extends Lt{constructor(e=1,t=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const u=[],l=[],h=[],m=[];let f=0,g=0;v("z","y","x",-1,-1,i,t,e,r,s,0),v("z","y","x",1,-1,i,t,-e,r,s,1),v("x","z","y",1,1,e,i,t,a,r,2),v("x","z","y",1,-1,e,i,-t,a,r,3),v("x","y","z",1,-1,e,t,i,a,s,4),v("x","y","z",-1,-1,e,t,-i,a,s,5),this.setIndex(u),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(m,2));function v(w,_,x,C,R,S,H,D,L,z,A){const E=S/L,U=H/z,Y=S/2,q=H/2,Z=D/2,ne=L+1,$=z+1;let oe=0,J=0;const he=new M;for(let xe=0;xe<$;xe++){const Re=xe*U-q;for(let Xe=0;Xe<ne;Xe++){const it=Xe*E-Y;he[w]=it*C,he[_]=Re*R,he[x]=Z,l.push(he.x,he.y,he.z),he[w]=0,he[_]=0,he[x]=D>0?1:-1,h.push(he.x,he.y,he.z),m.push(Xe/L),m.push(1-xe/z),oe+=1}}for(let xe=0;xe<z;xe++)for(let Re=0;Re<L;Re++){const Xe=f+Re+ne*xe,it=f+Re+ne*(xe+1),Q=f+(Re+1)+ne*(xe+1),ce=f+(Re+1)+ne*xe;u.push(Xe,it,ce),u.push(it,Q,ce),J+=6}o.addGroup(g,J,A),g+=J,f+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new p(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Li(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const a=n[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function Dt(n){const e={};for(let t=0;t<n.length;t++){const i=Li(n[t]);for(const a in i)e[a]=i[a]}return e}function xd(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Pc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const _d={clone:Li,merge:Dt};var vd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Md=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends Fi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vd,this.fragmentShader=Md,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Li(e.uniforms),this.uniformsGroups=xd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?t.uniforms[a]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[a]={type:"m4",value:r.toArray()}:t.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Dc extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=wn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const In=new M,Mo=new Ce,wo=new Ce;class Qt extends Dc{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Tr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){In.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(In.x,In.y).multiplyScalar(-e/In.z),In.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(In.x,In.y).multiplyScalar(-e/In.z)}getViewSize(e,t){return this.getViewBounds(e,Mo,wo),t.subVectors(wo,Mo)}setViewOffset(e,t,i,a,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cs*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const u=r.fullWidth,l=r.fullHeight;s+=r.offsetX*a/u,t-=r.offsetY*i/l,a*=r.width/u,i*=r.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _i=-90,vi=1;class wd extends Mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Qt(_i,vi,e,t);a.layers=this.layers,this.add(a);const s=new Qt(_i,vi,e,t);s.layers=this.layers,this.add(s);const r=new Qt(_i,vi,e,t);r.layers=this.layers,this.add(r);const o=new Qt(_i,vi,e,t);o.layers=this.layers,this.add(o);const u=new Qt(_i,vi,e,t);u.layers=this.layers,this.add(u);const l=new Qt(_i,vi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,s,r,o,u]=t;for(const l of t)this.remove(l);if(e===wn)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===$a)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,u,l,h]=this.children,m=e.getRenderTarget(),f=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,s),e.setRenderTarget(i,1,a),e.render(t,r),e.setRenderTarget(i,2,a),e.render(t,o),e.setRenderTarget(i,3,a),e.render(t,u),e.setRenderTarget(i,4,a),e.render(t,l),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,a),e.render(t,h),e.setRenderTarget(m,f,g),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Ic extends Ct{constructor(e,t,i,a,s,r,o,u,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Ci,super(e,t,i,a,s,r,o,u,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yd extends ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new Ic(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new p(5,5,5),s=new Sn({name:"CubemapFromEquirect",uniforms:Li(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:It,blending:Nn});s.uniforms.tEquirect.value=t;const r=new dt(a,s),o=t.minFilter;return t.minFilter===Qn&&(t.minFilter=dn),new wd(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,i,a){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,a);e.setRenderTarget(s)}}const Cs=new M,bd=new M,Sd=new Ge;class Yn{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=Cs.subVectors(i,t).cross(bd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Cs),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Sd.getNormalMatrix(e),a=this.coplanarPoint(Cs).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wn=new Ni,Ua=new M;class Br{constructor(e=new Yn,t=new Yn,i=new Yn,a=new Yn,s=new Yn,r=new Yn){this.planes=[e,t,i,a,s,r]}set(e,t,i,a,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=wn){const i=this.planes,a=e.elements,s=a[0],r=a[1],o=a[2],u=a[3],l=a[4],h=a[5],m=a[6],f=a[7],g=a[8],v=a[9],w=a[10],_=a[11],x=a[12],C=a[13],R=a[14],S=a[15];if(i[0].setComponents(u-s,f-l,_-g,S-x).normalize(),i[1].setComponents(u+s,f+l,_+g,S+x).normalize(),i[2].setComponents(u+r,f+h,_+v,S+C).normalize(),i[3].setComponents(u-r,f-h,_-v,S-C).normalize(),i[4].setComponents(u-o,f-m,_-w,S-R).normalize(),t===wn)i[5].setComponents(u+o,f+m,_+w,S+R).normalize();else if(t===$a)i[5].setComponents(o,m,w,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(e){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(Ua.x=a.normal.x>0?e.max.x:e.min.x,Ua.y=a.normal.y>0?e.max.y:e.min.y,Ua.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Ua)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Lc(){let n=null,e=!1,t=null,i=null;function a(s,r){t(s,r),i=n.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(a),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Ed(n){const e=new WeakMap;function t(o,u){const l=o.array,h=o.usage,m=l.byteLength,f=n.createBuffer();n.bindBuffer(u,f),n.bufferData(u,l,h),o.onUploadCallback();let g;if(l instanceof Float32Array)g=n.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=n.SHORT;else if(l instanceof Uint32Array)g=n.UNSIGNED_INT;else if(l instanceof Int32Array)g=n.INT;else if(l instanceof Int8Array)g=n.BYTE;else if(l instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:m}}function i(o,u,l){const h=u.array,m=u.updateRanges;if(n.bindBuffer(l,o),m.length===0)n.bufferSubData(l,0,h);else{m.sort((g,v)=>g.start-v.start);let f=0;for(let g=1;g<m.length;g++){const v=m[f],w=m[g];w.start<=v.start+v.count+1?v.count=Math.max(v.count,w.start+w.count-v.start):(++f,m[f]=w)}m.length=f+1;for(let g=0,v=m.length;g<v;g++){const w=m[g];n.bufferSubData(l,w.start*h.BYTES_PER_ELEMENT,h,w.start,w.count)}u.clearUpdateRanges()}u.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const u=e.get(o);u&&(n.deleteBuffer(u.buffer),e.delete(o))}function r(o,u){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,u));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,u),l.version=o.version}}return{get:a,remove:s,update:r}}class Oi extends Lt{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const s=e/2,r=t/2,o=Math.floor(i),u=Math.floor(a),l=o+1,h=u+1,m=e/o,f=t/u,g=[],v=[],w=[],_=[];for(let x=0;x<h;x++){const C=x*f-r;for(let R=0;R<l;R++){const S=R*m-s;v.push(S,-C,0),w.push(0,0,1),_.push(R/o),_.push(1-x/u)}}for(let x=0;x<u;x++)for(let C=0;C<o;C++){const R=C+l*x,S=C+l*(x+1),H=C+1+l*(x+1),D=C+1+l*x;g.push(R,S,D),g.push(S,H,D)}this.setIndex(g),this.setAttribute("position",new ft(v,3)),this.setAttribute("normal",new ft(w,3)),this.setAttribute("uv",new ft(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Td=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ad=`#ifdef USE_ALPHAHASH
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
#endif`,Rd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Id=`#ifdef USE_AOMAP
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
#endif`,Ld=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ud=`#ifdef USE_BATCHING
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
#endif`,zd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Od=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bd=`#ifdef USE_IRIDESCENCE
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
#endif`,kd=`#ifdef USE_BUMPMAP
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
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Jd=`#define PI 3.141592653589793
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
} // validated`,Zd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$d=`vec3 transformedNormal = objectNormal;
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
#endif`,jd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,th=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nh="gl_FragColor = linearToOutputTexel( gl_FragColor );",ih=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ah=`#ifdef USE_ENVMAP
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
#endif`,sh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rh=`#ifdef USE_ENVMAP
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
#endif`,oh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ch=`#ifdef USE_ENVMAP
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
#endif`,lh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fh=`#ifdef USE_GRADIENTMAP
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
}`,ph=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xh=`uniform bool receiveShadow;
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
#endif`,_h=`#ifdef USE_ENVMAP
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
#endif`,vh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bh=`PhysicalMaterial material;
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
#endif`,Sh=`struct PhysicalMaterial {
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
}`,Eh=`
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
#endif`,Th=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ah=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ch=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ph=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ih=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zh=`#if defined( USE_POINTS_UV )
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
#endif`,Nh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Oh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hh=`#ifdef USE_MORPHTARGETS
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
#endif`,Gh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kh=`#ifdef USE_NORMALMAP
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
#endif`,Jh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$h=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,au=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,su=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ru=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ou=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,du=`float getShadowMask() {
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
}`,hu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uu=`#ifdef USE_SKINNING
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
#endif`,fu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pu=`#ifdef USE_SKINNING
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
#endif`,mu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_u=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vu=`#ifdef USE_TRANSMISSION
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
#endif`,Mu=`#ifdef USE_TRANSMISSION
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
#endif`,wu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Su=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Eu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tu=`uniform sampler2D t2D;
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
}`,Au=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ru=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Du=`#include <common>
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
}`,Iu=`#if DEPTH_PACKING == 3200
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
}`,Lu=`#define DISTANCE
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
}`,Uu=`#define DISTANCE
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
}`,zu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fu=`uniform float scale;
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
}`,Ou=`uniform vec3 diffuse;
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
}`,Bu=`#include <common>
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
}`,ku=`uniform vec3 diffuse;
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
}`,Hu=`#define LAMBERT
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
}`,Gu=`#define LAMBERT
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
}`,Vu=`#define MATCAP
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
}`,Wu=`#define MATCAP
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
}`,Xu=`#define NORMAL
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
}`,qu=`#define NORMAL
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
}`,Yu=`#define PHONG
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
}`,Ku=`#define PHONG
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
}`,Ju=`#define STANDARD
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
}`,Zu=`#define STANDARD
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
}`,$u=`#define TOON
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
}`,ju=`#define TOON
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
}`,Qu=`uniform float size;
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
}`,ef=`uniform vec3 diffuse;
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
}`,tf=`#include <common>
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
}`,nf=`uniform vec3 color;
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
}`,af=`uniform float rotation;
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
}`,sf=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:Td,alphahash_pars_fragment:Ad,alphamap_fragment:Rd,alphamap_pars_fragment:Cd,alphatest_fragment:Pd,alphatest_pars_fragment:Dd,aomap_fragment:Id,aomap_pars_fragment:Ld,batching_pars_vertex:Ud,batching_vertex:zd,begin_vertex:Nd,beginnormal_vertex:Fd,bsdfs:Od,iridescence_fragment:Bd,bumpmap_pars_fragment:kd,clipping_planes_fragment:Hd,clipping_planes_pars_fragment:Gd,clipping_planes_pars_vertex:Vd,clipping_planes_vertex:Wd,color_fragment:Xd,color_pars_fragment:qd,color_pars_vertex:Yd,color_vertex:Kd,common:Jd,cube_uv_reflection_fragment:Zd,defaultnormal_vertex:$d,displacementmap_pars_vertex:jd,displacementmap_vertex:Qd,emissivemap_fragment:eh,emissivemap_pars_fragment:th,colorspace_fragment:nh,colorspace_pars_fragment:ih,envmap_fragment:ah,envmap_common_pars_fragment:sh,envmap_pars_fragment:rh,envmap_pars_vertex:oh,envmap_physical_pars_fragment:_h,envmap_vertex:ch,fog_vertex:lh,fog_pars_vertex:dh,fog_fragment:hh,fog_pars_fragment:uh,gradientmap_pars_fragment:fh,lightmap_pars_fragment:ph,lights_lambert_fragment:mh,lights_lambert_pars_fragment:gh,lights_pars_begin:xh,lights_toon_fragment:vh,lights_toon_pars_fragment:Mh,lights_phong_fragment:wh,lights_phong_pars_fragment:yh,lights_physical_fragment:bh,lights_physical_pars_fragment:Sh,lights_fragment_begin:Eh,lights_fragment_maps:Th,lights_fragment_end:Ah,logdepthbuf_fragment:Rh,logdepthbuf_pars_fragment:Ch,logdepthbuf_pars_vertex:Ph,logdepthbuf_vertex:Dh,map_fragment:Ih,map_pars_fragment:Lh,map_particle_fragment:Uh,map_particle_pars_fragment:zh,metalnessmap_fragment:Nh,metalnessmap_pars_fragment:Fh,morphinstance_vertex:Oh,morphcolor_vertex:Bh,morphnormal_vertex:kh,morphtarget_pars_vertex:Hh,morphtarget_vertex:Gh,normal_fragment_begin:Vh,normal_fragment_maps:Wh,normal_pars_fragment:Xh,normal_pars_vertex:qh,normal_vertex:Yh,normalmap_pars_fragment:Kh,clearcoat_normal_fragment_begin:Jh,clearcoat_normal_fragment_maps:Zh,clearcoat_pars_fragment:$h,iridescence_pars_fragment:jh,opaque_fragment:Qh,packing:eu,premultiplied_alpha_fragment:tu,project_vertex:nu,dithering_fragment:iu,dithering_pars_fragment:au,roughnessmap_fragment:su,roughnessmap_pars_fragment:ru,shadowmap_pars_fragment:ou,shadowmap_pars_vertex:cu,shadowmap_vertex:lu,shadowmask_pars_fragment:du,skinbase_vertex:hu,skinning_pars_vertex:uu,skinning_vertex:fu,skinnormal_vertex:pu,specularmap_fragment:mu,specularmap_pars_fragment:gu,tonemapping_fragment:xu,tonemapping_pars_fragment:_u,transmission_fragment:vu,transmission_pars_fragment:Mu,uv_pars_fragment:wu,uv_pars_vertex:yu,uv_vertex:bu,worldpos_vertex:Su,background_vert:Eu,background_frag:Tu,backgroundCube_vert:Au,backgroundCube_frag:Ru,cube_vert:Cu,cube_frag:Pu,depth_vert:Du,depth_frag:Iu,distanceRGBA_vert:Lu,distanceRGBA_frag:Uu,equirect_vert:zu,equirect_frag:Nu,linedashed_vert:Fu,linedashed_frag:Ou,meshbasic_vert:Bu,meshbasic_frag:ku,meshlambert_vert:Hu,meshlambert_frag:Gu,meshmatcap_vert:Vu,meshmatcap_frag:Wu,meshnormal_vert:Xu,meshnormal_frag:qu,meshphong_vert:Yu,meshphong_frag:Ku,meshphysical_vert:Ju,meshphysical_frag:Zu,meshtoon_vert:$u,meshtoon_frag:ju,points_vert:Qu,points_frag:ef,shadow_vert:tf,shadow_frag:nf,sprite_vert:af,sprite_frag:sf},le={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},cn={basic:{uniforms:Dt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Dt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new We(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Dt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Dt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Dt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new We(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Dt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Dt([le.points,le.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Dt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Dt([le.common,le.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Dt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Dt([le.sprite,le.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Dt([le.common,le.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Dt([le.lights,le.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};cn.physical={uniforms:Dt([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const za={r:0,b:0,g:0},Xn=new fn,rf=new ht;function of(n,e,t,i,a,s,r){const o=new We(0);let u=s===!0?0:1,l,h,m=null,f=0,g=null;function v(C){let R=C.isScene===!0?C.background:null;return R&&R.isTexture&&(R=(C.backgroundBlurriness>0?t:e).get(R)),R}function w(C){let R=!1;const S=v(C);S===null?x(o,u):S&&S.isColor&&(x(S,1),R=!0);const H=n.xr.getEnvironmentBlendMode();H==="additive"?i.buffers.color.setClear(0,0,0,1,r):H==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||R)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(C,R){const S=v(R);S&&(S.isCubeTexture||S.mapping===ts)?(h===void 0&&(h=new dt(new p(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:Li(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(H,D,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),Xn.copy(R.backgroundRotation),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(rf.makeRotationFromEuler(Xn)),h.material.toneMapped=Qe.getTransfer(S.colorSpace)!==rt,(m!==S||f!==S.version||g!==n.toneMapping)&&(h.material.needsUpdate=!0,m=S,f=S.version,g=n.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new dt(new Oi(2,2),new Sn({name:"BackgroundMaterial",uniforms:Li(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(S.colorSpace)!==rt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(m!==S||f!==S.version||g!==n.toneMapping)&&(l.material.needsUpdate=!0,m=S,f=S.version,g=n.toneMapping),l.layers.enableAll(),C.unshift(l,l.geometry,l.material,0,0,null))}function x(C,R){C.getRGB(za,Pc(n)),i.buffers.color.setClear(za.r,za.g,za.b,R,r)}return{getClearColor:function(){return o},setClearColor:function(C,R=1){o.set(C),u=R,x(o,u)},getClearAlpha:function(){return u},setClearAlpha:function(C){u=C,x(o,u)},render:w,addToRenderList:_}}function cf(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},a=f(null);let s=a,r=!1;function o(E,U,Y,q,Z){let ne=!1;const $=m(q,Y,U);s!==$&&(s=$,l(s.object)),ne=g(E,q,Y,Z),ne&&v(E,q,Y,Z),Z!==null&&e.update(Z,n.ELEMENT_ARRAY_BUFFER),(ne||r)&&(r=!1,S(E,U,Y,q),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function u(){return n.createVertexArray()}function l(E){return n.bindVertexArray(E)}function h(E){return n.deleteVertexArray(E)}function m(E,U,Y){const q=Y.wireframe===!0;let Z=i[E.id];Z===void 0&&(Z={},i[E.id]=Z);let ne=Z[U.id];ne===void 0&&(ne={},Z[U.id]=ne);let $=ne[q];return $===void 0&&($=f(u()),ne[q]=$),$}function f(E){const U=[],Y=[],q=[];for(let Z=0;Z<t;Z++)U[Z]=0,Y[Z]=0,q[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:Y,attributeDivisors:q,object:E,attributes:{},index:null}}function g(E,U,Y,q){const Z=s.attributes,ne=U.attributes;let $=0;const oe=Y.getAttributes();for(const J in oe)if(oe[J].location>=0){const xe=Z[J];let Re=ne[J];if(Re===void 0&&(J==="instanceMatrix"&&E.instanceMatrix&&(Re=E.instanceMatrix),J==="instanceColor"&&E.instanceColor&&(Re=E.instanceColor)),xe===void 0||xe.attribute!==Re||Re&&xe.data!==Re.data)return!0;$++}return s.attributesNum!==$||s.index!==q}function v(E,U,Y,q){const Z={},ne=U.attributes;let $=0;const oe=Y.getAttributes();for(const J in oe)if(oe[J].location>=0){let xe=ne[J];xe===void 0&&(J==="instanceMatrix"&&E.instanceMatrix&&(xe=E.instanceMatrix),J==="instanceColor"&&E.instanceColor&&(xe=E.instanceColor));const Re={};Re.attribute=xe,xe&&xe.data&&(Re.data=xe.data),Z[J]=Re,$++}s.attributes=Z,s.attributesNum=$,s.index=q}function w(){const E=s.newAttributes;for(let U=0,Y=E.length;U<Y;U++)E[U]=0}function _(E){x(E,0)}function x(E,U){const Y=s.newAttributes,q=s.enabledAttributes,Z=s.attributeDivisors;Y[E]=1,q[E]===0&&(n.enableVertexAttribArray(E),q[E]=1),Z[E]!==U&&(n.vertexAttribDivisor(E,U),Z[E]=U)}function C(){const E=s.newAttributes,U=s.enabledAttributes;for(let Y=0,q=U.length;Y<q;Y++)U[Y]!==E[Y]&&(n.disableVertexAttribArray(Y),U[Y]=0)}function R(E,U,Y,q,Z,ne,$){$===!0?n.vertexAttribIPointer(E,U,Y,Z,ne):n.vertexAttribPointer(E,U,Y,q,Z,ne)}function S(E,U,Y,q){w();const Z=q.attributes,ne=Y.getAttributes(),$=U.defaultAttributeValues;for(const oe in ne){const J=ne[oe];if(J.location>=0){let he=Z[oe];if(he===void 0&&(oe==="instanceMatrix"&&E.instanceMatrix&&(he=E.instanceMatrix),oe==="instanceColor"&&E.instanceColor&&(he=E.instanceColor)),he!==void 0){const xe=he.normalized,Re=he.itemSize,Xe=e.get(he);if(Xe===void 0)continue;const it=Xe.buffer,Q=Xe.type,ce=Xe.bytesPerElement,Se=Q===n.INT||Q===n.UNSIGNED_INT||he.gpuType===Dr;if(he.isInterleavedBufferAttribute){const ue=he.data,Le=ue.stride,Fe=he.offset;if(ue.isInstancedInterleavedBuffer){for(let qe=0;qe<J.locationSize;qe++)x(J.location+qe,ue.meshPerAttribute);E.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let qe=0;qe<J.locationSize;qe++)_(J.location+qe);n.bindBuffer(n.ARRAY_BUFFER,it);for(let qe=0;qe<J.locationSize;qe++)R(J.location+qe,Re/J.locationSize,Q,xe,Le*ce,(Fe+Re/J.locationSize*qe)*ce,Se)}else{if(he.isInstancedBufferAttribute){for(let ue=0;ue<J.locationSize;ue++)x(J.location+ue,he.meshPerAttribute);E.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ue=0;ue<J.locationSize;ue++)_(J.location+ue);n.bindBuffer(n.ARRAY_BUFFER,it);for(let ue=0;ue<J.locationSize;ue++)R(J.location+ue,Re/J.locationSize,Q,xe,Re*ce,Re/J.locationSize*ue*ce,Se)}}else if($!==void 0){const xe=$[oe];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(J.location,xe);break;case 3:n.vertexAttrib3fv(J.location,xe);break;case 4:n.vertexAttrib4fv(J.location,xe);break;default:n.vertexAttrib1fv(J.location,xe)}}}}C()}function H(){z();for(const E in i){const U=i[E];for(const Y in U){const q=U[Y];for(const Z in q)h(q[Z].object),delete q[Z];delete U[Y]}delete i[E]}}function D(E){if(i[E.id]===void 0)return;const U=i[E.id];for(const Y in U){const q=U[Y];for(const Z in q)h(q[Z].object),delete q[Z];delete U[Y]}delete i[E.id]}function L(E){for(const U in i){const Y=i[U];if(Y[E.id]===void 0)continue;const q=Y[E.id];for(const Z in q)h(q[Z].object),delete q[Z];delete Y[E.id]}}function z(){A(),r=!0,s!==a&&(s=a,l(s.object))}function A(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:z,resetDefaultState:A,dispose:H,releaseStatesOfGeometry:D,releaseStatesOfProgram:L,initAttributes:w,enableAttribute:_,disableUnusedAttributes:C}}function lf(n,e,t){let i;function a(l){i=l}function s(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function r(l,h,m){m!==0&&(n.drawArraysInstanced(i,l,h,m),t.update(h,i,m))}function o(l,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,m);let g=0;for(let v=0;v<m;v++)g+=h[v];t.update(g,i,1)}function u(l,h,m,f){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<l.length;v++)r(l[v],h[v],f[v]);else{g.multiDrawArraysInstancedWEBGL(i,l,0,h,0,f,0,m);let v=0;for(let w=0;w<m;w++)v+=h[w]*f[w];t.update(v,i,1)}}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=u}function df(n,e,t,i){let a;function s(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");a=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(L){return!(L!==tn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const z=L===sa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==bn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==hn&&!z)}function u(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=u(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const m=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),g=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),C=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),H=v>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:m,reverseDepthBuffer:f,maxTextures:g,maxVertexTextures:v,maxTextureSize:w,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:C,maxVaryings:R,maxFragmentUniforms:S,vertexTextures:H,maxSamples:D}}function hf(n){const e=this;let t=null,i=0,a=!1,s=!1;const r=new Yn,o=new Ge,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(m,f){const g=m.length!==0||f||i!==0||a;return a=f,i=m.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,f){t=h(m,f,0)},this.setState=function(m,f,g){const v=m.clippingPlanes,w=m.clipIntersection,_=m.clipShadows,x=n.get(m);if(!a||v===null||v.length===0||s&&!_)s?h(null):l();else{const C=s?0:i,R=C*4;let S=x.clippingState||null;u.value=S,S=h(v,f,R,g);for(let H=0;H!==R;++H)S[H]=t[H];x.clippingState=S,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=C}};function l(){u.value!==t&&(u.value=t,u.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(m,f,g,v){const w=m!==null?m.length:0;let _=null;if(w!==0){if(_=u.value,v!==!0||_===null){const x=g+w*4,C=f.matrixWorldInverse;o.getNormalMatrix(C),(_===null||_.length<x)&&(_=new Float32Array(x));for(let R=0,S=g;R!==w;++R,S+=4)r.copy(m[R]).applyMatrix4(C,o),r.normal.toArray(_,S),_[S+3]=r.constant}u.value=_,u.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,_}}function uf(n){let e=new WeakMap;function t(r,o){return o===Zs?r.mapping=Ci:o===$s&&(r.mapping=Pi),r}function i(r){if(r&&r.isTexture){const o=r.mapping;if(o===Zs||o===$s)if(e.has(r)){const u=e.get(r).texture;return t(u,r.mapping)}else{const u=r.image;if(u&&u.height>0){const l=new yd(u.height);return l.fromEquirectangularTexture(n,r),e.set(r,l),r.addEventListener("dispose",a),t(l.texture,r.mapping)}else return null}}return r}function a(r){const o=r.target;o.removeEventListener("dispose",a);const u=e.get(o);u!==void 0&&(e.delete(o),u.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Uc extends Dc{constructor(e=-1,t=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-e,r=i+e,o=a+t,u=a-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,o-=h*this.view.offsetY,u=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Si=4,yo=[.125,.215,.35,.446,.526,.582],$n=20,Ps=new Uc,bo=new We;let Ds=null,Is=0,Ls=0,Us=!1;const Kn=(1+Math.sqrt(5))/2,Mi=1/Kn,So=[new M(-Kn,Mi,0),new M(Kn,Mi,0),new M(-Mi,0,Kn),new M(Mi,0,Kn),new M(0,Kn,-Mi),new M(0,Kn,Mi),new M(-1,1,-1),new M(1,1,-1),new M(-1,1,1),new M(1,1,1)];class Eo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,a=100){Ds=this._renderer.getRenderTarget(),Is=this._renderer.getActiveCubeFace(),Ls=this._renderer.getActiveMipmapLevel(),Us=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,a,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ro(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ao(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ds,Is,Ls),this._renderer.xr.enabled=Us,e.scissorTest=!1,Na(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ci||e.mapping===Pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ds=this._renderer.getRenderTarget(),Is=this._renderer.getActiveCubeFace(),Ls=this._renderer.getActiveMipmapLevel(),Us=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:sa,format:tn,colorSpace:Ui,depthBuffer:!1},a=To(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=To(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ff(s)),this._blurMaterial=pf(s,e,t)}return a}_compileMaterial(e){const t=new dt(this._lodPlanes[0],e);this._renderer.compile(t,Ps)}_sceneToCubeUV(e,t,i,a){const o=new Qt(90,1,t,i),u=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,m=h.autoClear,f=h.toneMapping;h.getClearColor(bo),h.toneMapping=Fn,h.autoClear=!1;const g=new Or({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),v=new dt(new p,g);let w=!1;const _=e.background;_?_.isColor&&(g.color.copy(_),e.background=null,w=!0):(g.color.copy(bo),w=!0);for(let x=0;x<6;x++){const C=x%3;C===0?(o.up.set(0,u[x],0),o.lookAt(l[x],0,0)):C===1?(o.up.set(0,0,u[x]),o.lookAt(0,l[x],0)):(o.up.set(0,u[x],0),o.lookAt(0,0,l[x]));const R=this._cubeSize;Na(a,C*R,x>2?R:0,R,R),h.setRenderTarget(a),w&&h.render(v,o),h.render(e,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=m,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===Ci||e.mapping===Pi;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ro()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ao());const s=a?this._cubemapMaterial:this._equirectMaterial,r=new dt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const u=this._cubeSize;Na(t,0,0,3*u,2*u),i.setRenderTarget(t),i.render(r,Ps)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let s=1;s<a;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=So[(a-s-1)%So.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,a,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,i,a,"latitudinal",s),this._halfBlur(r,e,i,i,a,"longitudinal",s)}_halfBlur(e,t,i,a,s,r,o){const u=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,m=new dt(this._lodPlanes[a],l),f=l.uniforms,g=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*$n-1),w=s/v,_=isFinite(s)?1+Math.floor(h*w):$n;_>$n&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${$n}`);const x=[];let C=0;for(let L=0;L<$n;++L){const z=L/w,A=Math.exp(-z*z/2);x.push(A),L===0?C+=A:L<_&&(C+=2*A)}for(let L=0;L<x.length;L++)x[L]=x[L]/C;f.envMap.value=e.texture,f.samples.value=_,f.weights.value=x,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:R}=this;f.dTheta.value=v,f.mipInt.value=R-i;const S=this._sizeLods[a],H=3*S*(a>R-Si?a-R+Si:0),D=4*(this._cubeSize-S);Na(t,H,D,3*S,2*S),u.setRenderTarget(t),u.render(m,Ps)}}function ff(n){const e=[],t=[],i=[];let a=n;const s=n-Si+1+yo.length;for(let r=0;r<s;r++){const o=Math.pow(2,a);t.push(o);let u=1/o;r>n-Si?u=yo[r-n+Si-1]:r===0&&(u=0),i.push(u);const l=1/(o-2),h=-l,m=1+l,f=[h,h,m,h,m,m,h,h,m,m,h,m],g=6,v=6,w=3,_=2,x=1,C=new Float32Array(w*v*g),R=new Float32Array(_*v*g),S=new Float32Array(x*v*g);for(let D=0;D<g;D++){const L=D%3*2/3-1,z=D>2?0:-1,A=[L,z,0,L+2/3,z,0,L+2/3,z+1,0,L,z,0,L+2/3,z+1,0,L,z+1,0];C.set(A,w*v*D),R.set(f,_*v*D);const E=[D,D,D,D,D,D];S.set(E,x*v*D)}const H=new Lt;H.setAttribute("position",new Wt(C,w)),H.setAttribute("uv",new Wt(R,_)),H.setAttribute("faceIndex",new Wt(S,x)),e.push(H),a>Si&&a--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function To(n,e,t){const i=new ti(n,e,t);return i.texture.mapping=ts,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Na(n,e,t,i,a){n.viewport.set(e,t,i,a),n.scissor.set(e,t,i,a)}function pf(n,e,t){const i=new Float32Array($n),a=new M(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:kr(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Ao(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kr(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Ro(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function kr(){return`

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
	`}function mf(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const u=o.mapping,l=u===Zs||u===$s,h=u===Ci||u===Pi;if(l||h){let m=e.get(o);const f=m!==void 0?m.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Eo(n)),m=l?t.fromEquirectangular(o,m):t.fromCubemap(o,m),m.texture.pmremVersion=o.pmremVersion,e.set(o,m),m.texture;if(m!==void 0)return m.texture;{const g=o.image;return l&&g&&g.height>0||h&&g&&a(g)?(t===null&&(t=new Eo(n)),m=l?t.fromEquirectangular(o):t.fromCubemap(o),m.texture.pmremVersion=o.pmremVersion,e.set(o,m),o.addEventListener("dispose",s),m.texture):null}}}return o}function a(o){let u=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&u++;return u===l}function s(o){const u=o.target;u.removeEventListener("dispose",s);const l=e.get(u);l!==void 0&&(e.delete(u),l.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:r}}function gf(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=n.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&Qi("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function xf(n,e,t,i){const a={},s=new WeakMap;function r(m){const f=m.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const w=f.morphAttributes[v];for(let _=0,x=w.length;_<x;_++)e.remove(w[_])}f.removeEventListener("dispose",r),delete a[f.id];const g=s.get(f);g&&(e.remove(g),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(m,f){return a[f.id]===!0||(f.addEventListener("dispose",r),a[f.id]=!0,t.memory.geometries++),f}function u(m){const f=m.attributes;for(const v in f)e.update(f[v],n.ARRAY_BUFFER);const g=m.morphAttributes;for(const v in g){const w=g[v];for(let _=0,x=w.length;_<x;_++)e.update(w[_],n.ARRAY_BUFFER)}}function l(m){const f=[],g=m.index,v=m.attributes.position;let w=0;if(g!==null){const C=g.array;w=g.version;for(let R=0,S=C.length;R<S;R+=3){const H=C[R+0],D=C[R+1],L=C[R+2];f.push(H,D,D,L,L,H)}}else if(v!==void 0){const C=v.array;w=v.version;for(let R=0,S=C.length/3-1;R<S;R+=3){const H=R+0,D=R+1,L=R+2;f.push(H,D,D,L,L,H)}}else return;const _=new(yc(f)?Cc:Rc)(f,1);_.version=w;const x=s.get(m);x&&e.remove(x),s.set(m,_)}function h(m){const f=s.get(m);if(f){const g=m.index;g!==null&&f.version<g.version&&l(m)}else l(m);return s.get(m)}return{get:o,update:u,getWireframeAttribute:h}}function _f(n,e,t){let i;function a(f){i=f}let s,r;function o(f){s=f.type,r=f.bytesPerElement}function u(f,g){n.drawElements(i,g,s,f*r),t.update(g,i,1)}function l(f,g,v){v!==0&&(n.drawElementsInstanced(i,g,s,f*r,v),t.update(g,i,v))}function h(f,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,f,0,v);let _=0;for(let x=0;x<v;x++)_+=g[x];t.update(_,i,1)}function m(f,g,v,w){if(v===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let x=0;x<f.length;x++)l(f[x]/r,g[x],w[x]);else{_.multiDrawElementsInstancedWEBGL(i,g,0,s,f,0,w,0,v);let x=0;for(let C=0;C<v;C++)x+=g[C]*w[C];t.update(x,i,1)}}this.setMode=a,this.setIndex=o,this.render=u,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function vf(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(t.calls++,r){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function Mf(n,e,t){const i=new WeakMap,a=new xt;function s(r,o,u){const l=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==m){let A=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,w=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],C=o.morphAttributes.color||[];let R=0;g===!0&&(R=1),v===!0&&(R=2),w===!0&&(R=3);let S=o.attributes.position.count*R,H=1;S>e.maxTextureSize&&(H=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const D=new Float32Array(S*H*4*m),L=new Sc(D,S,H,m);L.type=hn,L.needsUpdate=!0;const z=R*4;for(let E=0;E<m;E++){const U=_[E],Y=x[E],q=C[E],Z=S*H*4*E;for(let ne=0;ne<U.count;ne++){const $=ne*z;g===!0&&(a.fromBufferAttribute(U,ne),D[Z+$+0]=a.x,D[Z+$+1]=a.y,D[Z+$+2]=a.z,D[Z+$+3]=0),v===!0&&(a.fromBufferAttribute(Y,ne),D[Z+$+4]=a.x,D[Z+$+5]=a.y,D[Z+$+6]=a.z,D[Z+$+7]=0),w===!0&&(a.fromBufferAttribute(q,ne),D[Z+$+8]=a.x,D[Z+$+9]=a.y,D[Z+$+10]=a.z,D[Z+$+11]=q.itemSize===4?a.w:1)}}f={count:m,texture:L,size:new Ce(S,H)},i.set(o,f),o.addEventListener("dispose",A)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)u.getUniforms().setValue(n,"morphTexture",r.morphTexture,t);else{let g=0;for(let w=0;w<l.length;w++)g+=l[w];const v=o.morphTargetsRelative?1:1-g;u.getUniforms().setValue(n,"morphTargetBaseInfluence",v),u.getUniforms().setValue(n,"morphTargetInfluences",l)}u.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function wf(n,e,t,i){let a=new WeakMap;function s(u){const l=i.render.frame,h=u.geometry,m=e.get(u,h);if(a.get(m)!==l&&(e.update(m),a.set(m,l)),u.isInstancedMesh&&(u.hasEventListener("dispose",o)===!1&&u.addEventListener("dispose",o),a.get(u)!==l&&(t.update(u.instanceMatrix,n.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,n.ARRAY_BUFFER),a.set(u,l))),u.isSkinnedMesh){const f=u.skeleton;a.get(f)!==l&&(f.update(),a.set(f,l))}return m}function r(){a=new WeakMap}function o(u){const l=u.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:r}}class zc extends Ct{constructor(e,t,i,a,s,r,o,u,l,h=Ti){if(h!==Ti&&h!==Ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ti&&(i=ei),i===void 0&&h===Ii&&(i=Di),super(null,a,s,r,o,u,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Vt,this.minFilter=u!==void 0?u:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Nc=new Ct,Co=new zc(1,1),Fc=new Sc,Oc=new rd,Bc=new Ic,Po=[],Do=[],Io=new Float32Array(16),Lo=new Float32Array(9),Uo=new Float32Array(4);function Bi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const a=e*t;let s=Po[a];if(s===void 0&&(s=new Float32Array(a),Po[a]=s),e!==0){i.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,n[r].toArray(s,o)}return s}function wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function is(n,e){let t=Do[e];t===void 0&&(t=new Int32Array(e),Do[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function yf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function bf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2fv(this.addr,e),yt(t,e)}}function Sf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;n.uniform3fv(this.addr,e),yt(t,e)}}function Ef(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4fv(this.addr,e),yt(t,e)}}function Tf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(wt(t,i))return;Uo.set(i),n.uniformMatrix2fv(this.addr,!1,Uo),yt(t,i)}}function Af(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(wt(t,i))return;Lo.set(i),n.uniformMatrix3fv(this.addr,!1,Lo),yt(t,i)}}function Rf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(wt(t,i))return;Io.set(i),n.uniformMatrix4fv(this.addr,!1,Io),yt(t,i)}}function Cf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Pf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2iv(this.addr,e),yt(t,e)}}function Df(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3iv(this.addr,e),yt(t,e)}}function If(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4iv(this.addr,e),yt(t,e)}}function Lf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Uf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2uiv(this.addr,e),yt(t,e)}}function zf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3uiv(this.addr,e),yt(t,e)}}function Nf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4uiv(this.addr,e),yt(t,e)}}function Ff(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);let s;this.type===n.SAMPLER_2D_SHADOW?(Co.compareFunction=wc,s=Co):s=Nc,t.setTexture2D(e||s,a)}function Of(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||Oc,a)}function Bf(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||Bc,a)}function kf(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||Fc,a)}function Hf(n){switch(n){case 5126:return yf;case 35664:return bf;case 35665:return Sf;case 35666:return Ef;case 35674:return Tf;case 35675:return Af;case 35676:return Rf;case 5124:case 35670:return Cf;case 35667:case 35671:return Pf;case 35668:case 35672:return Df;case 35669:case 35673:return If;case 5125:return Lf;case 36294:return Uf;case 36295:return zf;case 36296:return Nf;case 35678:case 36198:case 36298:case 36306:case 35682:return Ff;case 35679:case 36299:case 36307:return Of;case 35680:case 36300:case 36308:case 36293:return Bf;case 36289:case 36303:case 36311:case 36292:return kf}}function Gf(n,e){n.uniform1fv(this.addr,e)}function Vf(n,e){const t=Bi(e,this.size,2);n.uniform2fv(this.addr,t)}function Wf(n,e){const t=Bi(e,this.size,3);n.uniform3fv(this.addr,t)}function Xf(n,e){const t=Bi(e,this.size,4);n.uniform4fv(this.addr,t)}function qf(n,e){const t=Bi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Yf(n,e){const t=Bi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Kf(n,e){const t=Bi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Jf(n,e){n.uniform1iv(this.addr,e)}function Zf(n,e){n.uniform2iv(this.addr,e)}function $f(n,e){n.uniform3iv(this.addr,e)}function jf(n,e){n.uniform4iv(this.addr,e)}function Qf(n,e){n.uniform1uiv(this.addr,e)}function e0(n,e){n.uniform2uiv(this.addr,e)}function t0(n,e){n.uniform3uiv(this.addr,e)}function n0(n,e){n.uniform4uiv(this.addr,e)}function i0(n,e,t){const i=this.cache,a=e.length,s=is(t,a);wt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let r=0;r!==a;++r)t.setTexture2D(e[r]||Nc,s[r])}function a0(n,e,t){const i=this.cache,a=e.length,s=is(t,a);wt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let r=0;r!==a;++r)t.setTexture3D(e[r]||Oc,s[r])}function s0(n,e,t){const i=this.cache,a=e.length,s=is(t,a);wt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let r=0;r!==a;++r)t.setTextureCube(e[r]||Bc,s[r])}function r0(n,e,t){const i=this.cache,a=e.length,s=is(t,a);wt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let r=0;r!==a;++r)t.setTexture2DArray(e[r]||Fc,s[r])}function o0(n){switch(n){case 5126:return Gf;case 35664:return Vf;case 35665:return Wf;case 35666:return Xf;case 35674:return qf;case 35675:return Yf;case 35676:return Kf;case 5124:case 35670:return Jf;case 35667:case 35671:return Zf;case 35668:case 35672:return $f;case 35669:case 35673:return jf;case 5125:return Qf;case 36294:return e0;case 36295:return t0;case 36296:return n0;case 35678:case 36198:case 36298:case 36306:case 35682:return i0;case 35679:case 36299:case 36307:return a0;case 35680:case 36300:case 36308:case 36293:return s0;case 36289:case 36303:case 36311:case 36292:return r0}}class c0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Hf(t.type)}}class l0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=o0(t.type)}}class d0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(e,t[o.id],i)}}}const zs=/(\w+)(\])?(\[|\.)?/g;function zo(n,e){n.seq.push(e),n.map[e.id]=e}function h0(n,e,t){const i=n.name,a=i.length;for(zs.lastIndex=0;;){const s=zs.exec(i),r=zs.lastIndex;let o=s[1];const u=s[2]==="]",l=s[3];if(u&&(o=o|0),l===void 0||l==="["&&r+2===a){zo(t,l===void 0?new c0(o,n,e):new l0(o,n,e));break}else{let m=t.map[o];m===void 0&&(m=new d0(o),zo(t,m)),t=m}}}class Ja{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const s=e.getActiveUniform(t,a),r=e.getUniformLocation(t,s.name);h0(s,r,this)}}setValue(e,t,i,a){const s=this.map[t];s!==void 0&&s.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let s=0,r=t.length;s!==r;++s){const o=t[s],u=i[o.id];u.needsUpdate!==!1&&o.setValue(e,u.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,s=e.length;a!==s;++a){const r=e[a];r.id in t&&i.push(r)}return i}}function No(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const u0=37297;let f0=0;function p0(n,e){const t=n.split(`
`),i=[],a=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=a;r<s;r++){const o=r+1;i.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return i.join(`
`)}const Fo=new Ge;function m0(n){Qe._getMatrix(Fo,Qe.workingColorSpace,n);const e=`mat3( ${Fo.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(n)){case ns:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Oo(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=n.getShaderInfoLog(e).trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+p0(n.getShaderSource(e),r)}else return a}function g0(n,e){const t=m0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function x0(n,e){let t;switch(e){case Ul:t="Linear";break;case zl:t="Reinhard";break;case Nl:t="Cineon";break;case lc:t="ACESFilmic";break;case Ol:t="AgX";break;case Bl:t="Neutral";break;case Fl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fa=new M;function _0(){Qe.getLuminanceCoefficients(Fa);const n=Fa.x.toFixed(4),e=Fa.y.toFixed(4),t=Fa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function M0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function w0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=n.getActiveAttrib(e,a),r=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[r]={type:s.type,location:n.getAttribLocation(e,r),locationSize:o}}return t}function ea(n){return n!==""}function Bo(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ko(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const y0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ar(n){return n.replace(y0,S0)}const b0=new Map;function S0(n,e){let t=Ve[e];if(t===void 0){const i=b0.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ar(t)}const E0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ho(n){return n.replace(E0,T0)}function T0(n,e,t,i){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function Go(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function A0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===rc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===oc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Mn&&(e="SHADOWMAP_TYPE_VSM"),e}function R0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ci:case Pi:e="ENVMAP_TYPE_CUBE";break;case ts:e="ENVMAP_TYPE_CUBE_UV";break}return e}function C0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Pi:e="ENVMAP_MODE_REFRACTION";break}return e}function P0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case cc:e="ENVMAP_BLENDING_MULTIPLY";break;case Il:e="ENVMAP_BLENDING_MIX";break;case Ll:e="ENVMAP_BLENDING_ADD";break}return e}function D0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function I0(n,e,t,i){const a=n.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const u=A0(t),l=R0(t),h=C0(t),m=P0(t),f=D0(t),g=v0(t),v=M0(s),w=a.createProgram();let _,x,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ea).join(`
`),_.length>0&&(_+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ea).join(`
`),x.length>0&&(x+=`
`)):(_=[Go(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),x=[Go(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fn?"#define TONE_MAPPING":"",t.toneMapping!==Fn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Fn?x0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,g0("linearToOutputTexel",t.outputColorSpace),_0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ea).join(`
`)),r=Ar(r),r=Bo(r,t),r=ko(r,t),o=Ar(o),o=Bo(o,t),o=ko(o,t),r=Ho(r),o=Ho(o),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,_=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,x=["#define varying in",t.glslVersion===eo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const R=C+_+r,S=C+x+o,H=No(a,a.VERTEX_SHADER,R),D=No(a,a.FRAGMENT_SHADER,S);a.attachShader(w,H),a.attachShader(w,D),t.index0AttributeName!==void 0?a.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function L(U){if(n.debug.checkShaderErrors){const Y=a.getProgramInfoLog(w).trim(),q=a.getShaderInfoLog(H).trim(),Z=a.getShaderInfoLog(D).trim();let ne=!0,$=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,w,H,D);else{const oe=Oo(a,H,"vertex"),J=Oo(a,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+Y+`
`+oe+`
`+J)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(q===""||Z==="")&&($=!1);$&&(U.diagnostics={runnable:ne,programLog:Y,vertexShader:{log:q,prefix:_},fragmentShader:{log:Z,prefix:x}})}a.deleteShader(H),a.deleteShader(D),z=new Ja(a,w),A=w0(a,w)}let z;this.getUniforms=function(){return z===void 0&&L(this),z};let A;this.getAttributes=function(){return A===void 0&&L(this),A};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=a.getProgramParameter(w,u0)),E},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=f0++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=H,this.fragmentShader=D,this}let L0=0;class U0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(e);return r.has(a)===!1&&(r.add(a),a.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new z0(e),t.set(e,i)),i}}class z0{constructor(e){this.id=L0++,this.code=e,this.usedTimes=0}}function N0(n,e,t,i,a,s,r){const o=new Tc,u=new U0,l=new Set,h=[],m=a.logarithmicDepthBuffer,f=a.vertexTextures;let g=a.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(A){return l.add(A),A===0?"uv":`uv${A}`}function _(A,E,U,Y,q){const Z=Y.fog,ne=q.geometry,$=A.isMeshStandardMaterial?Y.environment:null,oe=(A.isMeshStandardMaterial?t:e).get(A.envMap||$),J=oe&&oe.mapping===ts?oe.image.height:null,he=v[A.type];A.precision!==null&&(g=a.getMaxPrecision(A.precision),g!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",g,"instead."));const xe=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Re=xe!==void 0?xe.length:0;let Xe=0;ne.morphAttributes.position!==void 0&&(Xe=1),ne.morphAttributes.normal!==void 0&&(Xe=2),ne.morphAttributes.color!==void 0&&(Xe=3);let it,Q,ce,Se;if(he){const nt=cn[he];it=nt.vertexShader,Q=nt.fragmentShader}else it=A.vertexShader,Q=A.fragmentShader,u.update(A),ce=u.getVertexShaderID(A),Se=u.getFragmentShaderID(A);const ue=n.getRenderTarget(),Le=n.state.buffers.depth.getReversed(),Fe=q.isInstancedMesh===!0,qe=q.isBatchedMesh===!0,ut=!!A.map,Ze=!!A.matcap,gt=!!oe,G=!!A.aoMap,Ut=!!A.lightMap,Ye=!!A.bumpMap,Ke=!!A.normalMap,De=!!A.displacementMap,ot=!!A.emissiveMap,Pe=!!A.metalnessMap,P=!!A.roughnessMap,y=A.anisotropy>0,V=A.clearcoat>0,ee=A.dispersion>0,ie=A.iridescence>0,j=A.sheen>0,Te=A.transmission>0,fe=y&&!!A.anisotropyMap,_e=V&&!!A.clearcoatMap,$e=V&&!!A.clearcoatNormalMap,ae=V&&!!A.clearcoatRoughnessMap,ve=ie&&!!A.iridescenceMap,Ie=ie&&!!A.iridescenceThicknessMap,Ue=j&&!!A.sheenColorMap,Me=j&&!!A.sheenRoughnessMap,Je=!!A.specularMap,He=!!A.specularColorMap,at=!!A.specularIntensityMap,F=Te&&!!A.transmissionMap,de=Te&&!!A.thicknessMap,K=!!A.gradientMap,te=!!A.alphaMap,ge=A.alphaTest>0,pe=!!A.alphaHash,Be=!!A.extensions;let pt=Fn;A.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(pt=n.toneMapping);const bt={shaderID:he,shaderType:A.type,shaderName:A.name,vertexShader:it,fragmentShader:Q,defines:A.defines,customVertexShaderID:ce,customFragmentShaderID:Se,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:g,batching:qe,batchingColor:qe&&q._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&q.instanceColor!==null,instancingMorph:Fe&&q.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Ui,alphaToCoverage:!!A.alphaToCoverage,map:ut,matcap:Ze,envMap:gt,envMapMode:gt&&oe.mapping,envMapCubeUVHeight:J,aoMap:G,lightMap:Ut,bumpMap:Ye,normalMap:Ke,displacementMap:f&&De,emissiveMap:ot,normalMapObjectSpace:Ke&&A.normalMapType===Vl,normalMapTangentSpace:Ke&&A.normalMapType===Mc,metalnessMap:Pe,roughnessMap:P,anisotropy:y,anisotropyMap:fe,clearcoat:V,clearcoatMap:_e,clearcoatNormalMap:$e,clearcoatRoughnessMap:ae,dispersion:ee,iridescence:ie,iridescenceMap:ve,iridescenceThicknessMap:Ie,sheen:j,sheenColorMap:Ue,sheenRoughnessMap:Me,specularMap:Je,specularColorMap:He,specularIntensityMap:at,transmission:Te,transmissionMap:F,thicknessMap:de,gradientMap:K,opaque:A.transparent===!1&&A.blending===Ei&&A.alphaToCoverage===!1,alphaMap:te,alphaTest:ge,alphaHash:pe,combine:A.combine,mapUv:ut&&w(A.map.channel),aoMapUv:G&&w(A.aoMap.channel),lightMapUv:Ut&&w(A.lightMap.channel),bumpMapUv:Ye&&w(A.bumpMap.channel),normalMapUv:Ke&&w(A.normalMap.channel),displacementMapUv:De&&w(A.displacementMap.channel),emissiveMapUv:ot&&w(A.emissiveMap.channel),metalnessMapUv:Pe&&w(A.metalnessMap.channel),roughnessMapUv:P&&w(A.roughnessMap.channel),anisotropyMapUv:fe&&w(A.anisotropyMap.channel),clearcoatMapUv:_e&&w(A.clearcoatMap.channel),clearcoatNormalMapUv:$e&&w(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&w(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&w(A.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&w(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&w(A.sheenColorMap.channel),sheenRoughnessMapUv:Me&&w(A.sheenRoughnessMap.channel),specularMapUv:Je&&w(A.specularMap.channel),specularColorMapUv:He&&w(A.specularColorMap.channel),specularIntensityMapUv:at&&w(A.specularIntensityMap.channel),transmissionMapUv:F&&w(A.transmissionMap.channel),thicknessMapUv:de&&w(A.thicknessMap.channel),alphaMapUv:te&&w(A.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(Ke||y),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ne.attributes.uv&&(ut||te),fog:!!Z,useFog:A.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:Le,skinning:q.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Xe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:pt,decodeVideoTexture:ut&&A.map.isVideoTexture===!0&&Qe.getTransfer(A.map.colorSpace)===rt,decodeVideoTextureEmissive:ot&&A.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(A.emissiveMap.colorSpace)===rt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===ln,flipSided:A.side===It,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Be&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&A.extensions.multiDraw===!0||qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt}function x(A){const E=[];if(A.shaderID?E.push(A.shaderID):(E.push(A.customVertexShaderID),E.push(A.customFragmentShaderID)),A.defines!==void 0)for(const U in A.defines)E.push(U),E.push(A.defines[U]);return A.isRawShaderMaterial===!1&&(C(E,A),R(E,A),E.push(n.outputColorSpace)),E.push(A.customProgramCacheKey),E.join()}function C(A,E){A.push(E.precision),A.push(E.outputColorSpace),A.push(E.envMapMode),A.push(E.envMapCubeUVHeight),A.push(E.mapUv),A.push(E.alphaMapUv),A.push(E.lightMapUv),A.push(E.aoMapUv),A.push(E.bumpMapUv),A.push(E.normalMapUv),A.push(E.displacementMapUv),A.push(E.emissiveMapUv),A.push(E.metalnessMapUv),A.push(E.roughnessMapUv),A.push(E.anisotropyMapUv),A.push(E.clearcoatMapUv),A.push(E.clearcoatNormalMapUv),A.push(E.clearcoatRoughnessMapUv),A.push(E.iridescenceMapUv),A.push(E.iridescenceThicknessMapUv),A.push(E.sheenColorMapUv),A.push(E.sheenRoughnessMapUv),A.push(E.specularMapUv),A.push(E.specularColorMapUv),A.push(E.specularIntensityMapUv),A.push(E.transmissionMapUv),A.push(E.thicknessMapUv),A.push(E.combine),A.push(E.fogExp2),A.push(E.sizeAttenuation),A.push(E.morphTargetsCount),A.push(E.morphAttributeCount),A.push(E.numDirLights),A.push(E.numPointLights),A.push(E.numSpotLights),A.push(E.numSpotLightMaps),A.push(E.numHemiLights),A.push(E.numRectAreaLights),A.push(E.numDirLightShadows),A.push(E.numPointLightShadows),A.push(E.numSpotLightShadows),A.push(E.numSpotLightShadowsWithMaps),A.push(E.numLightProbes),A.push(E.shadowMapType),A.push(E.toneMapping),A.push(E.numClippingPlanes),A.push(E.numClipIntersection),A.push(E.depthPacking)}function R(A,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),A.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),A.push(o.mask)}function S(A){const E=v[A.type];let U;if(E){const Y=cn[E];U=_d.clone(Y.uniforms)}else U=A.uniforms;return U}function H(A,E){let U;for(let Y=0,q=h.length;Y<q;Y++){const Z=h[Y];if(Z.cacheKey===E){U=Z,++U.usedTimes;break}}return U===void 0&&(U=new I0(n,E,A,s),h.push(U)),U}function D(A){if(--A.usedTimes===0){const E=h.indexOf(A);h[E]=h[h.length-1],h.pop(),A.destroy()}}function L(A){u.remove(A)}function z(){u.dispose()}return{getParameters:_,getProgramCacheKey:x,getUniforms:S,acquireProgram:H,releaseProgram:D,releaseShaderCache:L,programs:h,dispose:z}}function F0(){let n=new WeakMap;function e(r){return n.has(r)}function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function i(r){n.delete(r)}function a(r,o,u){n.get(r)[o]=u}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:s}}function O0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Vo(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Wo(){const n=[];let e=0;const t=[],i=[],a=[];function s(){e=0,t.length=0,i.length=0,a.length=0}function r(m,f,g,v,w,_){let x=n[e];return x===void 0?(x={id:m.id,object:m,geometry:f,material:g,groupOrder:v,renderOrder:m.renderOrder,z:w,group:_},n[e]=x):(x.id=m.id,x.object=m,x.geometry=f,x.material=g,x.groupOrder=v,x.renderOrder=m.renderOrder,x.z=w,x.group=_),e++,x}function o(m,f,g,v,w,_){const x=r(m,f,g,v,w,_);g.transmission>0?i.push(x):g.transparent===!0?a.push(x):t.push(x)}function u(m,f,g,v,w,_){const x=r(m,f,g,v,w,_);g.transmission>0?i.unshift(x):g.transparent===!0?a.unshift(x):t.unshift(x)}function l(m,f){t.length>1&&t.sort(m||O0),i.length>1&&i.sort(f||Vo),a.length>1&&a.sort(f||Vo)}function h(){for(let m=e,f=n.length;m<f;m++){const g=n[m];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:a,init:s,push:o,unshift:u,finish:h,sort:l}}function B0(){let n=new WeakMap;function e(i,a){const s=n.get(i);let r;return s===void 0?(r=new Wo,n.set(i,[r])):a>=s.length?(r=new Wo,s.push(r)):r=s[a],r}function t(){n=new WeakMap}return{get:e,dispose:t}}function k0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new We};break;case"SpotLight":t={position:new M,direction:new M,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new M,halfWidth:new M,halfHeight:new M};break}return n[e.id]=t,t}}}function H0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let G0=0;function V0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function W0(n){const e=new k0,t=H0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new M);const a=new M,s=new ht,r=new ht;function o(l){let h=0,m=0,f=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let g=0,v=0,w=0,_=0,x=0,C=0,R=0,S=0,H=0,D=0,L=0;l.sort(V0);for(let A=0,E=l.length;A<E;A++){const U=l[A],Y=U.color,q=U.intensity,Z=U.distance,ne=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=Y.r*q,m+=Y.g*q,f+=Y.b*q;else if(U.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(U.sh.coefficients[$],q);L++}else if(U.isDirectionalLight){const $=e.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const oe=U.shadow,J=t.get(U);J.shadowIntensity=oe.intensity,J.shadowBias=oe.bias,J.shadowNormalBias=oe.normalBias,J.shadowRadius=oe.radius,J.shadowMapSize=oe.mapSize,i.directionalShadow[g]=J,i.directionalShadowMap[g]=ne,i.directionalShadowMatrix[g]=U.shadow.matrix,C++}i.directional[g]=$,g++}else if(U.isSpotLight){const $=e.get(U);$.position.setFromMatrixPosition(U.matrixWorld),$.color.copy(Y).multiplyScalar(q),$.distance=Z,$.coneCos=Math.cos(U.angle),$.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),$.decay=U.decay,i.spot[w]=$;const oe=U.shadow;if(U.map&&(i.spotLightMap[H]=U.map,H++,oe.updateMatrices(U),U.castShadow&&D++),i.spotLightMatrix[w]=oe.matrix,U.castShadow){const J=t.get(U);J.shadowIntensity=oe.intensity,J.shadowBias=oe.bias,J.shadowNormalBias=oe.normalBias,J.shadowRadius=oe.radius,J.shadowMapSize=oe.mapSize,i.spotShadow[w]=J,i.spotShadowMap[w]=ne,S++}w++}else if(U.isRectAreaLight){const $=e.get(U);$.color.copy(Y).multiplyScalar(q),$.halfWidth.set(U.width*.5,0,0),$.halfHeight.set(0,U.height*.5,0),i.rectArea[_]=$,_++}else if(U.isPointLight){const $=e.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),$.distance=U.distance,$.decay=U.decay,U.castShadow){const oe=U.shadow,J=t.get(U);J.shadowIntensity=oe.intensity,J.shadowBias=oe.bias,J.shadowNormalBias=oe.normalBias,J.shadowRadius=oe.radius,J.shadowMapSize=oe.mapSize,J.shadowCameraNear=oe.camera.near,J.shadowCameraFar=oe.camera.far,i.pointShadow[v]=J,i.pointShadowMap[v]=ne,i.pointShadowMatrix[v]=U.shadow.matrix,R++}i.point[v]=$,v++}else if(U.isHemisphereLight){const $=e.get(U);$.skyColor.copy(U.color).multiplyScalar(q),$.groundColor.copy(U.groundColor).multiplyScalar(q),i.hemi[x]=$,x++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=f;const z=i.hash;(z.directionalLength!==g||z.pointLength!==v||z.spotLength!==w||z.rectAreaLength!==_||z.hemiLength!==x||z.numDirectionalShadows!==C||z.numPointShadows!==R||z.numSpotShadows!==S||z.numSpotMaps!==H||z.numLightProbes!==L)&&(i.directional.length=g,i.spot.length=w,i.rectArea.length=_,i.point.length=v,i.hemi.length=x,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=C,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=S+H-D,i.spotLightMap.length=H,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=L,z.directionalLength=g,z.pointLength=v,z.spotLength=w,z.rectAreaLength=_,z.hemiLength=x,z.numDirectionalShadows=C,z.numPointShadows=R,z.numSpotShadows=S,z.numSpotMaps=H,z.numLightProbes=L,i.version=G0++)}function u(l,h){let m=0,f=0,g=0,v=0,w=0;const _=h.matrixWorldInverse;for(let x=0,C=l.length;x<C;x++){const R=l[x];if(R.isDirectionalLight){const S=i.directional[m];S.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(_),m++}else if(R.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(R.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(_),g++}else if(R.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(R.matrixWorld),S.position.applyMatrix4(_),r.identity(),s.copy(R.matrixWorld),s.premultiply(_),r.extractRotation(s),S.halfWidth.set(R.width*.5,0,0),S.halfHeight.set(0,R.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),v++}else if(R.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(R.matrixWorld),S.position.applyMatrix4(_),f++}else if(R.isHemisphereLight){const S=i.hemi[w];S.direction.setFromMatrixPosition(R.matrixWorld),S.direction.transformDirection(_),w++}}}return{setup:o,setupView:u,state:i}}function Xo(n){const e=new W0(n),t=[],i=[];function a(h){l.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function r(h){i.push(h)}function o(){e.setup(t)}function u(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:l,setupLights:o,setupLightsView:u,pushLight:s,pushShadow:r}}function X0(n){let e=new WeakMap;function t(a,s=0){const r=e.get(a);let o;return r===void 0?(o=new Xo(n),e.set(a,[o])):s>=r.length?(o=new Xo(n),r.push(o)):o=r[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class q0 extends Fi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Hl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Y0 extends Fi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const K0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J0=`uniform sampler2D shadow_pass;
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
}`;function Z0(n,e,t){let i=new Br;const a=new Ce,s=new Ce,r=new xt,o=new q0({depthPacking:Gl}),u=new Y0,l={},h=t.maxTextureSize,m={[On]:It,[It]:On,[ln]:ln},f=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:K0,fragmentShader:J0}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const v=new Lt;v.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new dt(v,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rc;let x=this.type;this.render=function(D,L,z){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||D.length===0)return;const A=n.getRenderTarget(),E=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(Nn),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const q=x!==Mn&&this.type===Mn,Z=x===Mn&&this.type!==Mn;for(let ne=0,$=D.length;ne<$;ne++){const oe=D[ne],J=oe.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;a.copy(J.mapSize);const he=J.getFrameExtents();if(a.multiply(he),s.copy(J.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(s.x=Math.floor(h/he.x),a.x=s.x*he.x,J.mapSize.x=s.x),a.y>h&&(s.y=Math.floor(h/he.y),a.y=s.y*he.y,J.mapSize.y=s.y)),J.map===null||q===!0||Z===!0){const Re=this.type!==Mn?{minFilter:Vt,magFilter:Vt}:{};J.map!==null&&J.map.dispose(),J.map=new ti(a.x,a.y,Re),J.map.texture.name=oe.name+".shadowMap",J.camera.updateProjectionMatrix()}n.setRenderTarget(J.map),n.clear();const xe=J.getViewportCount();for(let Re=0;Re<xe;Re++){const Xe=J.getViewport(Re);r.set(s.x*Xe.x,s.y*Xe.y,s.x*Xe.z,s.y*Xe.w),Y.viewport(r),J.updateMatrices(oe,Re),i=J.getFrustum(),S(L,z,J.camera,oe,this.type)}J.isPointLightShadow!==!0&&this.type===Mn&&C(J,z),J.needsUpdate=!1}x=this.type,_.needsUpdate=!1,n.setRenderTarget(A,E,U)};function C(D,L){const z=e.update(w);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,g.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new ti(a.x,a.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(L,null,z,f,w,null),g.uniforms.shadow_pass.value=D.mapPass.texture,g.uniforms.resolution.value=D.mapSize,g.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(L,null,z,g,w,null)}function R(D,L,z,A){let E=null;const U=z.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(U!==void 0)E=U;else if(E=z.isPointLight===!0?u:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const Y=E.uuid,q=L.uuid;let Z=l[Y];Z===void 0&&(Z={},l[Y]=Z);let ne=Z[q];ne===void 0&&(ne=E.clone(),Z[q]=ne,L.addEventListener("dispose",H)),E=ne}if(E.visible=L.visible,E.wireframe=L.wireframe,A===Mn?E.side=L.shadowSide!==null?L.shadowSide:L.side:E.side=L.shadowSide!==null?L.shadowSide:m[L.side],E.alphaMap=L.alphaMap,E.alphaTest=L.alphaTest,E.map=L.map,E.clipShadows=L.clipShadows,E.clippingPlanes=L.clippingPlanes,E.clipIntersection=L.clipIntersection,E.displacementMap=L.displacementMap,E.displacementScale=L.displacementScale,E.displacementBias=L.displacementBias,E.wireframeLinewidth=L.wireframeLinewidth,E.linewidth=L.linewidth,z.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const Y=n.properties.get(E);Y.light=z}return E}function S(D,L,z,A,E){if(D.visible===!1)return;if(D.layers.test(L.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&E===Mn)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,D.matrixWorld);const q=e.update(D),Z=D.material;if(Array.isArray(Z)){const ne=q.groups;for(let $=0,oe=ne.length;$<oe;$++){const J=ne[$],he=Z[J.materialIndex];if(he&&he.visible){const xe=R(D,he,A,E);D.onBeforeShadow(n,D,L,z,q,xe,J),n.renderBufferDirect(z,null,q,xe,D,J),D.onAfterShadow(n,D,L,z,q,xe,J)}}}else if(Z.visible){const ne=R(D,Z,A,E);D.onBeforeShadow(n,D,L,z,q,ne,null),n.renderBufferDirect(z,null,q,ne,D,null),D.onAfterShadow(n,D,L,z,q,ne,null)}}const Y=D.children;for(let q=0,Z=Y.length;q<Z;q++)S(Y[q],L,z,A,E)}function H(D){D.target.removeEventListener("dispose",H);for(const z in l){const A=l[z],E=D.target.uuid;E in A&&(A[E].dispose(),delete A[E])}}}const $0={[Vs]:Ws,[Xs]:Ks,[qs]:Js,[Ri]:Ys,[Ws]:Vs,[Ks]:Xs,[Js]:qs,[Ys]:Ri};function j0(n,e){function t(){let F=!1;const de=new xt;let K=null;const te=new xt(0,0,0,0);return{setMask:function(ge){K!==ge&&!F&&(n.colorMask(ge,ge,ge,ge),K=ge)},setLocked:function(ge){F=ge},setClear:function(ge,pe,Be,pt,bt){bt===!0&&(ge*=pt,pe*=pt,Be*=pt),de.set(ge,pe,Be,pt),te.equals(de)===!1&&(n.clearColor(ge,pe,Be,pt),te.copy(de))},reset:function(){F=!1,K=null,te.set(-1,0,0,0)}}}function i(){let F=!1,de=!1,K=null,te=null,ge=null;return{setReversed:function(pe){if(de!==pe){const Be=e.get("EXT_clip_control");de?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT);const pt=ge;ge=null,this.setClear(pt)}de=pe},getReversed:function(){return de},setTest:function(pe){pe?ue(n.DEPTH_TEST):Le(n.DEPTH_TEST)},setMask:function(pe){K!==pe&&!F&&(n.depthMask(pe),K=pe)},setFunc:function(pe){if(de&&(pe=$0[pe]),te!==pe){switch(pe){case Vs:n.depthFunc(n.NEVER);break;case Ws:n.depthFunc(n.ALWAYS);break;case Xs:n.depthFunc(n.LESS);break;case Ri:n.depthFunc(n.LEQUAL);break;case qs:n.depthFunc(n.EQUAL);break;case Ys:n.depthFunc(n.GEQUAL);break;case Ks:n.depthFunc(n.GREATER);break;case Js:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}te=pe}},setLocked:function(pe){F=pe},setClear:function(pe){ge!==pe&&(de&&(pe=1-pe),n.clearDepth(pe),ge=pe)},reset:function(){F=!1,K=null,te=null,ge=null,de=!1}}}function a(){let F=!1,de=null,K=null,te=null,ge=null,pe=null,Be=null,pt=null,bt=null;return{setTest:function(nt){F||(nt?ue(n.STENCIL_TEST):Le(n.STENCIL_TEST))},setMask:function(nt){de!==nt&&!F&&(n.stencilMask(nt),de=nt)},setFunc:function(nt,Bt,Yt){(K!==nt||te!==Bt||ge!==Yt)&&(n.stencilFunc(nt,Bt,Yt),K=nt,te=Bt,ge=Yt)},setOp:function(nt,Bt,Yt){(pe!==nt||Be!==Bt||pt!==Yt)&&(n.stencilOp(nt,Bt,Yt),pe=nt,Be=Bt,pt=Yt)},setLocked:function(nt){F=nt},setClear:function(nt){bt!==nt&&(n.clearStencil(nt),bt=nt)},reset:function(){F=!1,de=null,K=null,te=null,ge=null,pe=null,Be=null,pt=null,bt=null}}}const s=new t,r=new i,o=new a,u=new WeakMap,l=new WeakMap;let h={},m={},f=new WeakMap,g=[],v=null,w=!1,_=null,x=null,C=null,R=null,S=null,H=null,D=null,L=new We(0,0,0),z=0,A=!1,E=null,U=null,Y=null,q=null,Z=null;const ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,oe=0;const J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(J)[1]),$=oe>=1):J.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),$=oe>=2);let he=null,xe={};const Re=n.getParameter(n.SCISSOR_BOX),Xe=n.getParameter(n.VIEWPORT),it=new xt().fromArray(Re),Q=new xt().fromArray(Xe);function ce(F,de,K,te){const ge=new Uint8Array(4),pe=n.createTexture();n.bindTexture(F,pe),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Be=0;Be<K;Be++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(de,0,n.RGBA,1,1,te,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(de+Be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return pe}const Se={};Se[n.TEXTURE_2D]=ce(n.TEXTURE_2D,n.TEXTURE_2D,1),Se[n.TEXTURE_CUBE_MAP]=ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[n.TEXTURE_2D_ARRAY]=ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Se[n.TEXTURE_3D]=ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ue(n.DEPTH_TEST),r.setFunc(Ri),Ye(!1),Ke(Kr),ue(n.CULL_FACE),G(Nn);function ue(F){h[F]!==!0&&(n.enable(F),h[F]=!0)}function Le(F){h[F]!==!1&&(n.disable(F),h[F]=!1)}function Fe(F,de){return m[F]!==de?(n.bindFramebuffer(F,de),m[F]=de,F===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=de),F===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=de),!0):!1}function qe(F,de){let K=g,te=!1;if(F){K=f.get(de),K===void 0&&(K=[],f.set(de,K));const ge=F.textures;if(K.length!==ge.length||K[0]!==n.COLOR_ATTACHMENT0){for(let pe=0,Be=ge.length;pe<Be;pe++)K[pe]=n.COLOR_ATTACHMENT0+pe;K.length=ge.length,te=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,te=!0);te&&n.drawBuffers(K)}function ut(F){return v!==F?(n.useProgram(F),v=F,!0):!1}const Ze={[Zn]:n.FUNC_ADD,[ml]:n.FUNC_SUBTRACT,[gl]:n.FUNC_REVERSE_SUBTRACT};Ze[xl]=n.MIN,Ze[_l]=n.MAX;const gt={[vl]:n.ZERO,[Ml]:n.ONE,[wl]:n.SRC_COLOR,[Hs]:n.SRC_ALPHA,[Al]:n.SRC_ALPHA_SATURATE,[El]:n.DST_COLOR,[bl]:n.DST_ALPHA,[yl]:n.ONE_MINUS_SRC_COLOR,[Gs]:n.ONE_MINUS_SRC_ALPHA,[Tl]:n.ONE_MINUS_DST_COLOR,[Sl]:n.ONE_MINUS_DST_ALPHA,[Rl]:n.CONSTANT_COLOR,[Cl]:n.ONE_MINUS_CONSTANT_COLOR,[Pl]:n.CONSTANT_ALPHA,[Dl]:n.ONE_MINUS_CONSTANT_ALPHA};function G(F,de,K,te,ge,pe,Be,pt,bt,nt){if(F===Nn){w===!0&&(Le(n.BLEND),w=!1);return}if(w===!1&&(ue(n.BLEND),w=!0),F!==pl){if(F!==_||nt!==A){if((x!==Zn||S!==Zn)&&(n.blendEquation(n.FUNC_ADD),x=Zn,S=Zn),nt)switch(F){case Ei:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jr:n.blendFunc(n.ONE,n.ONE);break;case Zr:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $r:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ei:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Zr:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $r:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}C=null,R=null,H=null,D=null,L.set(0,0,0),z=0,_=F,A=nt}return}ge=ge||de,pe=pe||K,Be=Be||te,(de!==x||ge!==S)&&(n.blendEquationSeparate(Ze[de],Ze[ge]),x=de,S=ge),(K!==C||te!==R||pe!==H||Be!==D)&&(n.blendFuncSeparate(gt[K],gt[te],gt[pe],gt[Be]),C=K,R=te,H=pe,D=Be),(pt.equals(L)===!1||bt!==z)&&(n.blendColor(pt.r,pt.g,pt.b,bt),L.copy(pt),z=bt),_=F,A=!1}function Ut(F,de){F.side===ln?Le(n.CULL_FACE):ue(n.CULL_FACE);let K=F.side===It;de&&(K=!K),Ye(K),F.blending===Ei&&F.transparent===!1?G(Nn):G(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),r.setFunc(F.depthFunc),r.setTest(F.depthTest),r.setMask(F.depthWrite),s.setMask(F.colorWrite);const te=F.stencilWrite;o.setTest(te),te&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ot(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):Le(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(F){E!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),E=F)}function Ke(F){F!==ul?(ue(n.CULL_FACE),F!==U&&(F===Kr?n.cullFace(n.BACK):F===fl?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Le(n.CULL_FACE),U=F}function De(F){F!==Y&&($&&n.lineWidth(F),Y=F)}function ot(F,de,K){F?(ue(n.POLYGON_OFFSET_FILL),(q!==de||Z!==K)&&(n.polygonOffset(de,K),q=de,Z=K)):Le(n.POLYGON_OFFSET_FILL)}function Pe(F){F?ue(n.SCISSOR_TEST):Le(n.SCISSOR_TEST)}function P(F){F===void 0&&(F=n.TEXTURE0+ne-1),he!==F&&(n.activeTexture(F),he=F)}function y(F,de,K){K===void 0&&(he===null?K=n.TEXTURE0+ne-1:K=he);let te=xe[K];te===void 0&&(te={type:void 0,texture:void 0},xe[K]=te),(te.type!==F||te.texture!==de)&&(he!==K&&(n.activeTexture(K),he=K),n.bindTexture(F,de||Se[F]),te.type=F,te.texture=de)}function V(){const F=xe[he];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ee(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $e(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ue(F){it.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),it.copy(F))}function Me(F){Q.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Q.copy(F))}function Je(F,de){let K=l.get(de);K===void 0&&(K=new WeakMap,l.set(de,K));let te=K.get(F);te===void 0&&(te=n.getUniformBlockIndex(de,F.name),K.set(F,te))}function He(F,de){const te=l.get(de).get(F);u.get(de)!==te&&(n.uniformBlockBinding(de,te,F.__bindingPointIndex),u.set(de,te))}function at(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},he=null,xe={},m={},f=new WeakMap,g=[],v=null,w=!1,_=null,x=null,C=null,R=null,S=null,H=null,D=null,L=new We(0,0,0),z=0,A=!1,E=null,U=null,Y=null,q=null,Z=null,it.set(0,0,n.canvas.width,n.canvas.height),Q.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ue,disable:Le,bindFramebuffer:Fe,drawBuffers:qe,useProgram:ut,setBlending:G,setMaterial:Ut,setFlipSided:Ye,setCullFace:Ke,setLineWidth:De,setPolygonOffset:ot,setScissorTest:Pe,activeTexture:P,bindTexture:y,unbindTexture:V,compressedTexImage2D:ee,compressedTexImage3D:ie,texImage2D:ve,texImage3D:Ie,updateUBOMapping:Je,uniformBlockBinding:He,texStorage2D:$e,texStorage3D:ae,texSubImage2D:j,texSubImage3D:Te,compressedTexSubImage2D:fe,compressedTexSubImage3D:_e,scissor:Ue,viewport:Me,reset:at}}function qo(n,e,t,i){const a=Q0(i);switch(t){case pc:return n*e;case gc:return n*e;case xc:return n*e*2;case Ur:return n*e/a.components*a.byteLength;case zr:return n*e/a.components*a.byteLength;case _c:return n*e*2/a.components*a.byteLength;case Nr:return n*e*2/a.components*a.byteLength;case mc:return n*e*3/a.components*a.byteLength;case tn:return n*e*4/a.components*a.byteLength;case Fr:return n*e*4/a.components*a.byteLength;case Wa:case Xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case qa:case Ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case tr:case ir:return Math.max(n,16)*Math.max(e,8)/4;case er:case nr:return Math.max(n,8)*Math.max(e,8)/2;case ar:case sr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case rr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case or:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cr:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case lr:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case dr:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case hr:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ur:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case fr:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case pr:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case mr:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case gr:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case xr:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case _r:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case vr:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Mr:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ka:case wr:case yr:return Math.ceil(n/4)*Math.ceil(e/4)*16;case vc:case br:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Sr:case Er:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Q0(n){switch(n){case bn:case hc:return{byteLength:1,components:1};case ia:case uc:case sa:return{byteLength:2,components:1};case Ir:case Lr:return{byteLength:2,components:4};case ei:case Dr:case hn:return{byteLength:4,components:1};case fc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function ep(n,e,t,i,a,s,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ce,h=new WeakMap;let m;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,y){return g?new OffscreenCanvas(P,y):ja("canvas")}function w(P,y,V){let ee=1;const ie=Pe(P);if((ie.width>V||ie.height>V)&&(ee=V/Math.max(ie.width,ie.height)),ee<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const j=Math.floor(ee*ie.width),Te=Math.floor(ee*ie.height);m===void 0&&(m=v(j,Te));const fe=y?v(j,Te):m;return fe.width=j,fe.height=Te,fe.getContext("2d").drawImage(P,0,0,j,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+j+"x"+Te+")."),fe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),P;return P}function _(P){return P.generateMipmaps}function x(P){n.generateMipmap(P)}function C(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function R(P,y,V,ee,ie=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let j=y;if(y===n.RED&&(V===n.FLOAT&&(j=n.R32F),V===n.HALF_FLOAT&&(j=n.R16F),V===n.UNSIGNED_BYTE&&(j=n.R8)),y===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.R8UI),V===n.UNSIGNED_SHORT&&(j=n.R16UI),V===n.UNSIGNED_INT&&(j=n.R32UI),V===n.BYTE&&(j=n.R8I),V===n.SHORT&&(j=n.R16I),V===n.INT&&(j=n.R32I)),y===n.RG&&(V===n.FLOAT&&(j=n.RG32F),V===n.HALF_FLOAT&&(j=n.RG16F),V===n.UNSIGNED_BYTE&&(j=n.RG8)),y===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.RG8UI),V===n.UNSIGNED_SHORT&&(j=n.RG16UI),V===n.UNSIGNED_INT&&(j=n.RG32UI),V===n.BYTE&&(j=n.RG8I),V===n.SHORT&&(j=n.RG16I),V===n.INT&&(j=n.RG32I)),y===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.RGB8UI),V===n.UNSIGNED_SHORT&&(j=n.RGB16UI),V===n.UNSIGNED_INT&&(j=n.RGB32UI),V===n.BYTE&&(j=n.RGB8I),V===n.SHORT&&(j=n.RGB16I),V===n.INT&&(j=n.RGB32I)),y===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),V===n.UNSIGNED_INT&&(j=n.RGBA32UI),V===n.BYTE&&(j=n.RGBA8I),V===n.SHORT&&(j=n.RGBA16I),V===n.INT&&(j=n.RGBA32I)),y===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),y===n.RGBA){const Te=ie?ns:Qe.getTransfer(ee);V===n.FLOAT&&(j=n.RGBA32F),V===n.HALF_FLOAT&&(j=n.RGBA16F),V===n.UNSIGNED_BYTE&&(j=Te===rt?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function S(P,y){let V;return P?y===null||y===ei||y===Di?V=n.DEPTH24_STENCIL8:y===hn?V=n.DEPTH32F_STENCIL8:y===ia&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ei||y===Di?V=n.DEPTH_COMPONENT24:y===hn?V=n.DEPTH_COMPONENT32F:y===ia&&(V=n.DEPTH_COMPONENT16),V}function H(P,y){return _(P)===!0||P.isFramebufferTexture&&P.minFilter!==Vt&&P.minFilter!==dn?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function D(P){const y=P.target;y.removeEventListener("dispose",D),z(y),y.isVideoTexture&&h.delete(y)}function L(P){const y=P.target;y.removeEventListener("dispose",L),E(y)}function z(P){const y=i.get(P);if(y.__webglInit===void 0)return;const V=P.source,ee=f.get(V);if(ee){const ie=ee[y.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&A(P),Object.keys(ee).length===0&&f.delete(V)}i.remove(P)}function A(P){const y=i.get(P);n.deleteTexture(y.__webglTexture);const V=P.source,ee=f.get(V);delete ee[y.__cacheKey],r.memory.textures--}function E(P){const y=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(y.__webglFramebuffer[ee]))for(let ie=0;ie<y.__webglFramebuffer[ee].length;ie++)n.deleteFramebuffer(y.__webglFramebuffer[ee][ie]);else n.deleteFramebuffer(y.__webglFramebuffer[ee]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[ee])}else{if(Array.isArray(y.__webglFramebuffer))for(let ee=0;ee<y.__webglFramebuffer.length;ee++)n.deleteFramebuffer(y.__webglFramebuffer[ee]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ee=0;ee<y.__webglColorRenderbuffer.length;ee++)y.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[ee]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const V=P.textures;for(let ee=0,ie=V.length;ee<ie;ee++){const j=i.get(V[ee]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),r.memory.textures--),i.remove(V[ee])}i.remove(P)}let U=0;function Y(){U=0}function q(){const P=U;return P>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+a.maxTextures),U+=1,P}function Z(P){const y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function ne(P,y){const V=i.get(P);if(P.isVideoTexture&&De(P),P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){const ee=P.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(V,P,y);return}}t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+y)}function $(P,y){const V=i.get(P);if(P.version>0&&V.__version!==P.version){Q(V,P,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+y)}function oe(P,y){const V=i.get(P);if(P.version>0&&V.__version!==P.version){Q(V,P,y);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+y)}function J(P,y){const V=i.get(P);if(P.version>0&&V.__version!==P.version){ce(V,P,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+y)}const he={[js]:n.REPEAT,[jn]:n.CLAMP_TO_EDGE,[Qs]:n.MIRRORED_REPEAT},xe={[Vt]:n.NEAREST,[kl]:n.NEAREST_MIPMAP_NEAREST,[xa]:n.NEAREST_MIPMAP_LINEAR,[dn]:n.LINEAR,[os]:n.LINEAR_MIPMAP_NEAREST,[Qn]:n.LINEAR_MIPMAP_LINEAR},Re={[Wl]:n.NEVER,[Zl]:n.ALWAYS,[Xl]:n.LESS,[wc]:n.LEQUAL,[ql]:n.EQUAL,[Jl]:n.GEQUAL,[Yl]:n.GREATER,[Kl]:n.NOTEQUAL};function Xe(P,y){if(y.type===hn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===dn||y.magFilter===os||y.magFilter===xa||y.magFilter===Qn||y.minFilter===dn||y.minFilter===os||y.minFilter===xa||y.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,he[y.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,he[y.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,he[y.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,xe[y.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,xe[y.minFilter]),y.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Re[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Vt||y.minFilter!==xa&&y.minFilter!==Qn||y.type===hn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,a.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function it(P,y){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",D));const ee=y.source;let ie=f.get(ee);ie===void 0&&(ie={},f.set(ee,ie));const j=Z(y);if(j!==P.__cacheKey){ie[j]===void 0&&(ie[j]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,V=!0),ie[j].usedTimes++;const Te=ie[P.__cacheKey];Te!==void 0&&(ie[P.__cacheKey].usedTimes--,Te.usedTimes===0&&A(y)),P.__cacheKey=j,P.__webglTexture=ie[j].texture}return V}function Q(P,y,V){let ee=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ee=n.TEXTURE_3D);const ie=it(P,y),j=y.source;t.bindTexture(ee,P.__webglTexture,n.TEXTURE0+V);const Te=i.get(j);if(j.version!==Te.__version||ie===!0){t.activeTexture(n.TEXTURE0+V);const fe=Qe.getPrimaries(Qe.workingColorSpace),_e=y.colorSpace===zn?null:Qe.getPrimaries(y.colorSpace),$e=y.colorSpace===zn||fe===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let ae=w(y.image,!1,a.maxTextureSize);ae=ot(y,ae);const ve=s.convert(y.format,y.colorSpace),Ie=s.convert(y.type);let Ue=R(y.internalFormat,ve,Ie,y.colorSpace,y.isVideoTexture);Xe(ee,y);let Me;const Je=y.mipmaps,He=y.isVideoTexture!==!0,at=Te.__version===void 0||ie===!0,F=j.dataReady,de=H(y,ae);if(y.isDepthTexture)Ue=S(y.format===Ii,y.type),at&&(He?t.texStorage2D(n.TEXTURE_2D,1,Ue,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Ue,ae.width,ae.height,0,ve,Ie,null));else if(y.isDataTexture)if(Je.length>0){He&&at&&t.texStorage2D(n.TEXTURE_2D,de,Ue,Je[0].width,Je[0].height);for(let K=0,te=Je.length;K<te;K++)Me=Je[K],He?F&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,Me.width,Me.height,ve,Ie,Me.data):t.texImage2D(n.TEXTURE_2D,K,Ue,Me.width,Me.height,0,ve,Ie,Me.data);y.generateMipmaps=!1}else He?(at&&t.texStorage2D(n.TEXTURE_2D,de,Ue,ae.width,ae.height),F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,ve,Ie,ae.data)):t.texImage2D(n.TEXTURE_2D,0,Ue,ae.width,ae.height,0,ve,Ie,ae.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){He&&at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,Ue,Je[0].width,Je[0].height,ae.depth);for(let K=0,te=Je.length;K<te;K++)if(Me=Je[K],y.format!==tn)if(ve!==null)if(He){if(F)if(y.layerUpdates.size>0){const ge=qo(Me.width,Me.height,y.format,y.type);for(const pe of y.layerUpdates){const Be=Me.data.subarray(pe*ge/Me.data.BYTES_PER_ELEMENT,(pe+1)*ge/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,pe,Me.width,Me.height,1,ve,Be)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Me.width,Me.height,ae.depth,ve,Me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,Ue,Me.width,Me.height,ae.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Me.width,Me.height,ae.depth,ve,Ie,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,Ue,Me.width,Me.height,ae.depth,0,ve,Ie,Me.data)}else{He&&at&&t.texStorage2D(n.TEXTURE_2D,de,Ue,Je[0].width,Je[0].height);for(let K=0,te=Je.length;K<te;K++)Me=Je[K],y.format!==tn?ve!==null?He?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,Me.width,Me.height,ve,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,K,Ue,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?F&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,Me.width,Me.height,ve,Ie,Me.data):t.texImage2D(n.TEXTURE_2D,K,Ue,Me.width,Me.height,0,ve,Ie,Me.data)}else if(y.isDataArrayTexture)if(He){if(at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,Ue,ae.width,ae.height,ae.depth),F)if(y.layerUpdates.size>0){const K=qo(ae.width,ae.height,y.format,y.type);for(const te of y.layerUpdates){const ge=ae.data.subarray(te*K/ae.data.BYTES_PER_ELEMENT,(te+1)*K/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,te,ae.width,ae.height,1,ve,Ie,ge)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,ve,Ie,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,ae.width,ae.height,ae.depth,0,ve,Ie,ae.data);else if(y.isData3DTexture)He?(at&&t.texStorage3D(n.TEXTURE_3D,de,Ue,ae.width,ae.height,ae.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,ve,Ie,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Ue,ae.width,ae.height,ae.depth,0,ve,Ie,ae.data);else if(y.isFramebufferTexture){if(at)if(He)t.texStorage2D(n.TEXTURE_2D,de,Ue,ae.width,ae.height);else{let K=ae.width,te=ae.height;for(let ge=0;ge<de;ge++)t.texImage2D(n.TEXTURE_2D,ge,Ue,K,te,0,ve,Ie,null),K>>=1,te>>=1}}else if(Je.length>0){if(He&&at){const K=Pe(Je[0]);t.texStorage2D(n.TEXTURE_2D,de,Ue,K.width,K.height)}for(let K=0,te=Je.length;K<te;K++)Me=Je[K],He?F&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,ve,Ie,Me):t.texImage2D(n.TEXTURE_2D,K,Ue,ve,Ie,Me);y.generateMipmaps=!1}else if(He){if(at){const K=Pe(ae);t.texStorage2D(n.TEXTURE_2D,de,Ue,K.width,K.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,Ie,ae)}else t.texImage2D(n.TEXTURE_2D,0,Ue,ve,Ie,ae);_(y)&&x(ee),Te.__version=j.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function ce(P,y,V){if(y.image.length!==6)return;const ee=it(P,y),ie=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+V);const j=i.get(ie);if(ie.version!==j.__version||ee===!0){t.activeTexture(n.TEXTURE0+V);const Te=Qe.getPrimaries(Qe.workingColorSpace),fe=y.colorSpace===zn?null:Qe.getPrimaries(y.colorSpace),_e=y.colorSpace===zn||Te===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const $e=y.isCompressedTexture||y.image[0].isCompressedTexture,ae=y.image[0]&&y.image[0].isDataTexture,ve=[];for(let te=0;te<6;te++)!$e&&!ae?ve[te]=w(y.image[te],!0,a.maxCubemapSize):ve[te]=ae?y.image[te].image:y.image[te],ve[te]=ot(y,ve[te]);const Ie=ve[0],Ue=s.convert(y.format,y.colorSpace),Me=s.convert(y.type),Je=R(y.internalFormat,Ue,Me,y.colorSpace),He=y.isVideoTexture!==!0,at=j.__version===void 0||ee===!0,F=ie.dataReady;let de=H(y,Ie);Xe(n.TEXTURE_CUBE_MAP,y);let K;if($e){He&&at&&t.texStorage2D(n.TEXTURE_CUBE_MAP,de,Je,Ie.width,Ie.height);for(let te=0;te<6;te++){K=ve[te].mipmaps;for(let ge=0;ge<K.length;ge++){const pe=K[ge];y.format!==tn?Ue!==null?He?F&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge,0,0,pe.width,pe.height,Ue,pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge,Je,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge,0,0,pe.width,pe.height,Ue,Me,pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge,Je,pe.width,pe.height,0,Ue,Me,pe.data)}}}else{if(K=y.mipmaps,He&&at){K.length>0&&de++;const te=Pe(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,de,Je,te.width,te.height)}for(let te=0;te<6;te++)if(ae){He?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ve[te].width,ve[te].height,Ue,Me,ve[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Je,ve[te].width,ve[te].height,0,Ue,Me,ve[te].data);for(let ge=0;ge<K.length;ge++){const Be=K[ge].image[te].image;He?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge+1,0,0,Be.width,Be.height,Ue,Me,Be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge+1,Je,Be.width,Be.height,0,Ue,Me,Be.data)}}else{He?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ue,Me,ve[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Je,Ue,Me,ve[te]);for(let ge=0;ge<K.length;ge++){const pe=K[ge];He?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge+1,0,0,Ue,Me,pe.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge+1,Je,Ue,Me,pe.image[te])}}}_(y)&&x(n.TEXTURE_CUBE_MAP),j.__version=ie.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function Se(P,y,V,ee,ie,j){const Te=s.convert(V.format,V.colorSpace),fe=s.convert(V.type),_e=R(V.internalFormat,Te,fe,V.colorSpace),$e=i.get(y),ae=i.get(V);if(ae.__renderTarget=y,!$e.__hasExternalTextures){const ve=Math.max(1,y.width>>j),Ie=Math.max(1,y.height>>j);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,j,_e,ve,Ie,y.depth,0,Te,fe,null):t.texImage2D(ie,j,_e,ve,Ie,0,Te,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),Ke(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,ie,ae.__webglTexture,0,Ye(y)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,ie,ae.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(P,y,V){if(n.bindRenderbuffer(n.RENDERBUFFER,P),y.depthBuffer){const ee=y.depthTexture,ie=ee&&ee.isDepthTexture?ee.type:null,j=S(y.stencilBuffer,ie),Te=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=Ye(y);Ke(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,j,y.width,y.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,j,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,j,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,P)}else{const ee=y.textures;for(let ie=0;ie<ee.length;ie++){const j=ee[ie],Te=s.convert(j.format,j.colorSpace),fe=s.convert(j.type),_e=R(j.internalFormat,Te,fe,j.colorSpace),$e=Ye(y);V&&Ke(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,$e,_e,y.width,y.height):Ke(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$e,_e,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,_e,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Le(P,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(y.depthTexture);ee.__renderTarget=y,(!ee.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ne(y.depthTexture,0);const ie=ee.__webglTexture,j=Ye(y);if(y.depthTexture.format===Ti)Ke(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0);else if(y.depthTexture.format===Ii)Ke(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Fe(P){const y=i.get(P),V=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){const ee=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ee){const ie=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ee.removeEventListener("dispose",ie)};ee.addEventListener("dispose",ie),y.__depthDisposeCallback=ie}y.__boundDepthTexture=ee}if(P.depthTexture&&!y.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Le(y.__webglFramebuffer,P)}else if(V){y.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[ee]),y.__webglDepthbuffer[ee]===void 0)y.__webglDepthbuffer[ee]=n.createRenderbuffer(),ue(y.__webglDepthbuffer[ee],P,!1);else{const ie=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,j)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),ue(y.__webglDepthbuffer,P,!1);else{const ee=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,ie)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function qe(P,y,V){const ee=i.get(P);y!==void 0&&Se(ee.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Fe(P)}function ut(P){const y=P.texture,V=i.get(P),ee=i.get(y);P.addEventListener("dispose",L);const ie=P.textures,j=P.isWebGLCubeRenderTarget===!0,Te=ie.length>1;if(Te||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=y.version,r.memory.textures++),j){V.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[fe]=[];for(let _e=0;_e<y.mipmaps.length;_e++)V.__webglFramebuffer[fe][_e]=n.createFramebuffer()}else V.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let fe=0;fe<y.mipmaps.length;fe++)V.__webglFramebuffer[fe]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Te)for(let fe=0,_e=ie.length;fe<_e;fe++){const $e=i.get(ie[fe]);$e.__webglTexture===void 0&&($e.__webglTexture=n.createTexture(),r.memory.textures++)}if(P.samples>0&&Ke(P)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let fe=0;fe<ie.length;fe++){const _e=ie[fe];V.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[fe]);const $e=s.convert(_e.format,_e.colorSpace),ae=s.convert(_e.type),ve=R(_e.internalFormat,$e,ae,_e.colorSpace,P.isXRRenderTarget===!0),Ie=Ye(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,ve,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,V.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),ue(V.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),Xe(n.TEXTURE_CUBE_MAP,y);for(let fe=0;fe<6;fe++)if(y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)Se(V.__webglFramebuffer[fe][_e],P,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,_e);else Se(V.__webglFramebuffer[fe],P,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);_(y)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let fe=0,_e=ie.length;fe<_e;fe++){const $e=ie[fe],ae=i.get($e);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),Xe(n.TEXTURE_2D,$e),Se(V.__webglFramebuffer,P,$e,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),_($e)&&x(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(fe=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,ee.__webglTexture),Xe(fe,y),y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)Se(V.__webglFramebuffer[_e],P,y,n.COLOR_ATTACHMENT0,fe,_e);else Se(V.__webglFramebuffer,P,y,n.COLOR_ATTACHMENT0,fe,0);_(y)&&x(fe),t.unbindTexture()}P.depthBuffer&&Fe(P)}function Ze(P){const y=P.textures;for(let V=0,ee=y.length;V<ee;V++){const ie=y[V];if(_(ie)){const j=C(P),Te=i.get(ie).__webglTexture;t.bindTexture(j,Te),x(j),t.unbindTexture()}}}const gt=[],G=[];function Ut(P){if(P.samples>0){if(Ke(P)===!1){const y=P.textures,V=P.width,ee=P.height;let ie=n.COLOR_BUFFER_BIT;const j=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(P),fe=y.length>1;if(fe)for(let _e=0;_e<y.length;_e++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let _e=0;_e<y.length;_e++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[_e]);const $e=i.get(y[_e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$e,0)}n.blitFramebuffer(0,0,V,ee,0,0,V,ee,ie,n.NEAREST),u===!0&&(gt.length=0,G.length=0,gt.push(n.COLOR_ATTACHMENT0+_e),P.depthBuffer&&P.resolveDepthBuffer===!1&&(gt.push(j),G.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,G)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,gt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let _e=0;_e<y.length;_e++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,Te.__webglColorRenderbuffer[_e]);const $e=i.get(y[_e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,$e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&u){const y=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Ye(P){return Math.min(a.maxSamples,P.samples)}function Ke(P){const y=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function De(P){const y=r.render.frame;h.get(P)!==y&&(h.set(P,y),P.update())}function ot(P,y){const V=P.colorSpace,ee=P.format,ie=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==Ui&&V!==zn&&(Qe.getTransfer(V)===rt?(ee!==tn||ie!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),y}function Pe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=Y,this.setTexture2D=ne,this.setTexture2DArray=$,this.setTexture3D=oe,this.setTextureCube=J,this.rebindTextures=qe,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ke}function tp(n,e){function t(i,a=zn){let s;const r=Qe.getTransfer(a);if(i===bn)return n.UNSIGNED_BYTE;if(i===Ir)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Lr)return n.UNSIGNED_SHORT_5_5_5_1;if(i===fc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===hc)return n.BYTE;if(i===uc)return n.SHORT;if(i===ia)return n.UNSIGNED_SHORT;if(i===Dr)return n.INT;if(i===ei)return n.UNSIGNED_INT;if(i===hn)return n.FLOAT;if(i===sa)return n.HALF_FLOAT;if(i===pc)return n.ALPHA;if(i===mc)return n.RGB;if(i===tn)return n.RGBA;if(i===gc)return n.LUMINANCE;if(i===xc)return n.LUMINANCE_ALPHA;if(i===Ti)return n.DEPTH_COMPONENT;if(i===Ii)return n.DEPTH_STENCIL;if(i===Ur)return n.RED;if(i===zr)return n.RED_INTEGER;if(i===_c)return n.RG;if(i===Nr)return n.RG_INTEGER;if(i===Fr)return n.RGBA_INTEGER;if(i===Wa||i===Xa||i===qa||i===Ya)if(r===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Wa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Wa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ya)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===er||i===tr||i===nr||i===ir)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===er)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===tr)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===nr)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ir)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ar||i===sr||i===rr)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ar||i===sr)return r===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===rr)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===or||i===cr||i===lr||i===dr||i===hr||i===ur||i===fr||i===pr||i===mr||i===gr||i===xr||i===_r||i===vr||i===Mr)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===or)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cr)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===lr)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===dr)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hr)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ur)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fr)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===pr)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===mr)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===gr)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xr)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_r)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vr)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Mr)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ka||i===wr||i===yr)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ka)return r===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wr)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yr)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vc||i===br||i===Sr||i===Er)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ka)return s.COMPRESSED_RED_RGTC1_EXT;if(i===br)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Sr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Er)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Di?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class np extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class O extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ip={type:"move"};class Ns{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new O,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new O,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new O,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,s=null,r=null;const o=this._targetRay,u=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const w of e.hand.values()){const _=t.getJointPose(w,i),x=this._getHandJoint(l,w);_!==null&&(x.matrix.fromArray(_.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=_.radius),x.visible=_!==null}const h=l.joints["index-finger-tip"],m=l.joints["thumb-tip"],f=h.position.distanceTo(m.position),g=.02,v=.005;l.inputState.pinching&&f>g+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=g-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));o!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ip)))}return o!==null&&(o.visible=a!==null),u!==null&&(u.visible=s!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new O;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const ap=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sp=`
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

}`;class rp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const a=new Ct,s=e.properties.get(a);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Sn({vertexShader:ap,fragmentShader:sp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new Oi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class op extends zi{constructor(e,t){super();const i=this;let a=null,s=1,r=null,o="local-floor",u=1,l=null,h=null,m=null,f=null,g=null,v=null;const w=new rp,_=t.getContextAttributes();let x=null,C=null;const R=[],S=[],H=new Ce;let D=null;const L=new Qt;L.viewport=new xt;const z=new Qt;z.viewport=new xt;const A=[L,z],E=new np;let U=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ce=R[Q];return ce===void 0&&(ce=new Ns,R[Q]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(Q){let ce=R[Q];return ce===void 0&&(ce=new Ns,R[Q]=ce),ce.getGripSpace()},this.getHand=function(Q){let ce=R[Q];return ce===void 0&&(ce=new Ns,R[Q]=ce),ce.getHandSpace()};function q(Q){const ce=S.indexOf(Q.inputSource);if(ce===-1)return;const Se=R[ce];Se!==void 0&&(Se.update(Q.inputSource,Q.frame,l||r),Se.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Z(){a.removeEventListener("select",q),a.removeEventListener("selectstart",q),a.removeEventListener("selectend",q),a.removeEventListener("squeeze",q),a.removeEventListener("squeezestart",q),a.removeEventListener("squeezeend",q),a.removeEventListener("end",Z),a.removeEventListener("inputsourceschange",ne);for(let Q=0;Q<R.length;Q++){const ce=S[Q];ce!==null&&(S[Q]=null,R[Q].disconnect(ce))}U=null,Y=null,w.reset(),e.setRenderTarget(x),g=null,f=null,m=null,a=null,C=null,it.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(H.width,H.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return m},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=async function(Q){if(a=Q,a!==null){if(x=e.getRenderTarget(),a.addEventListener("select",q),a.addEventListener("selectstart",q),a.addEventListener("selectend",q),a.addEventListener("squeeze",q),a.addEventListener("squeezestart",q),a.addEventListener("squeezeend",q),a.addEventListener("end",Z),a.addEventListener("inputsourceschange",ne),_.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(H),a.renderState.layers===void 0){const ce={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(a,t,ce),a.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),C=new ti(g.framebufferWidth,g.framebufferHeight,{format:tn,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ce=null,Se=null,ue=null;_.depth&&(ue=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=_.stencil?Ii:Ti,Se=_.stencil?Di:ei);const Le={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};m=new XRWebGLBinding(a,t),f=m.createProjectionLayer(Le),a.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),C=new ti(f.textureWidth,f.textureHeight,{format:tn,type:bn,depthTexture:new zc(f.textureWidth,f.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(u),l=null,r=await a.requestReferenceSpace(o),it.setContext(a),it.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function ne(Q){for(let ce=0;ce<Q.removed.length;ce++){const Se=Q.removed[ce],ue=S.indexOf(Se);ue>=0&&(S[ue]=null,R[ue].disconnect(Se))}for(let ce=0;ce<Q.added.length;ce++){const Se=Q.added[ce];let ue=S.indexOf(Se);if(ue===-1){for(let Fe=0;Fe<R.length;Fe++)if(Fe>=S.length){S.push(Se),ue=Fe;break}else if(S[Fe]===null){S[Fe]=Se,ue=Fe;break}if(ue===-1)break}const Le=R[ue];Le&&Le.connect(Se)}}const $=new M,oe=new M;function J(Q,ce,Se){$.setFromMatrixPosition(ce.matrixWorld),oe.setFromMatrixPosition(Se.matrixWorld);const ue=$.distanceTo(oe),Le=ce.projectionMatrix.elements,Fe=Se.projectionMatrix.elements,qe=Le[14]/(Le[10]-1),ut=Le[14]/(Le[10]+1),Ze=(Le[9]+1)/Le[5],gt=(Le[9]-1)/Le[5],G=(Le[8]-1)/Le[0],Ut=(Fe[8]+1)/Fe[0],Ye=qe*G,Ke=qe*Ut,De=ue/(-G+Ut),ot=De*-G;if(ce.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ot),Q.translateZ(De),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Le[10]===-1)Q.projectionMatrix.copy(ce.projectionMatrix),Q.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const Pe=qe+De,P=ut+De,y=Ye-ot,V=Ke+(ue-ot),ee=Ze*ut/P*Pe,ie=gt*ut/P*Pe;Q.projectionMatrix.makePerspective(y,V,ee,ie,Pe,P),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function he(Q,ce){ce===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ce.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(a===null)return;let ce=Q.near,Se=Q.far;w.texture!==null&&(w.depthNear>0&&(ce=w.depthNear),w.depthFar>0&&(Se=w.depthFar)),E.near=z.near=L.near=ce,E.far=z.far=L.far=Se,(U!==E.near||Y!==E.far)&&(a.updateRenderState({depthNear:E.near,depthFar:E.far}),U=E.near,Y=E.far),L.layers.mask=Q.layers.mask|2,z.layers.mask=Q.layers.mask|4,E.layers.mask=L.layers.mask|z.layers.mask;const ue=Q.parent,Le=E.cameras;he(E,ue);for(let Fe=0;Fe<Le.length;Fe++)he(Le[Fe],ue);Le.length===2?J(E,L,z):E.projectionMatrix.copy(L.projectionMatrix),xe(Q,E,ue)};function xe(Q,ce,Se){Se===null?Q.matrix.copy(ce.matrixWorld):(Q.matrix.copy(Se.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ce.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ce.projectionMatrix),Q.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Tr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&g===null))return u},this.setFoveation=function(Q){u=Q,f!==null&&(f.fixedFoveation=Q),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=Q)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(E)};let Re=null;function Xe(Q,ce){if(h=ce.getViewerPose(l||r),v=ce,h!==null){const Se=h.views;g!==null&&(e.setRenderTargetFramebuffer(C,g.framebuffer),e.setRenderTarget(C));let ue=!1;Se.length!==E.cameras.length&&(E.cameras.length=0,ue=!0);for(let Fe=0;Fe<Se.length;Fe++){const qe=Se[Fe];let ut=null;if(g!==null)ut=g.getViewport(qe);else{const gt=m.getViewSubImage(f,qe);ut=gt.viewport,Fe===0&&(e.setRenderTargetTextures(C,gt.colorTexture,f.ignoreDepthValues?void 0:gt.depthStencilTexture),e.setRenderTarget(C))}let Ze=A[Fe];Ze===void 0&&(Ze=new Qt,Ze.layers.enable(Fe),Ze.viewport=new xt,A[Fe]=Ze),Ze.matrix.fromArray(qe.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(qe.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(ut.x,ut.y,ut.width,ut.height),Fe===0&&(E.matrix.copy(Ze.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ue===!0&&E.cameras.push(Ze)}const Le=a.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const Fe=m.getDepthInformation(Se[0]);Fe&&Fe.isValid&&Fe.texture&&w.init(e,Fe,a.renderState)}}for(let Se=0;Se<R.length;Se++){const ue=S[Se],Le=R[Se];ue!==null&&Le!==void 0&&Le.update(ue,ce,l||r)}Re&&Re(Q,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),v=null}const it=new Lc;it.setAnimationLoop(Xe),this.setAnimationLoop=function(Q){Re=Q},this.dispose=function(){}}}const qn=new fn,cp=new ht;function lp(n,e){function t(_,x){_.matrixAutoUpdate===!0&&_.updateMatrix(),x.value.copy(_.matrix)}function i(_,x){x.color.getRGB(_.fogColor.value,Pc(n)),x.isFog?(_.fogNear.value=x.near,_.fogFar.value=x.far):x.isFogExp2&&(_.fogDensity.value=x.density)}function a(_,x,C,R,S){x.isMeshBasicMaterial||x.isMeshLambertMaterial?s(_,x):x.isMeshToonMaterial?(s(_,x),m(_,x)):x.isMeshPhongMaterial?(s(_,x),h(_,x)):x.isMeshStandardMaterial?(s(_,x),f(_,x),x.isMeshPhysicalMaterial&&g(_,x,S)):x.isMeshMatcapMaterial?(s(_,x),v(_,x)):x.isMeshDepthMaterial?s(_,x):x.isMeshDistanceMaterial?(s(_,x),w(_,x)):x.isMeshNormalMaterial?s(_,x):x.isLineBasicMaterial?(r(_,x),x.isLineDashedMaterial&&o(_,x)):x.isPointsMaterial?u(_,x,C,R):x.isSpriteMaterial?l(_,x):x.isShadowMaterial?(_.color.value.copy(x.color),_.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function s(_,x){_.opacity.value=x.opacity,x.color&&_.diffuse.value.copy(x.color),x.emissive&&_.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(_.map.value=x.map,t(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.bumpMap&&(_.bumpMap.value=x.bumpMap,t(x.bumpMap,_.bumpMapTransform),_.bumpScale.value=x.bumpScale,x.side===It&&(_.bumpScale.value*=-1)),x.normalMap&&(_.normalMap.value=x.normalMap,t(x.normalMap,_.normalMapTransform),_.normalScale.value.copy(x.normalScale),x.side===It&&_.normalScale.value.negate()),x.displacementMap&&(_.displacementMap.value=x.displacementMap,t(x.displacementMap,_.displacementMapTransform),_.displacementScale.value=x.displacementScale,_.displacementBias.value=x.displacementBias),x.emissiveMap&&(_.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,_.emissiveMapTransform)),x.specularMap&&(_.specularMap.value=x.specularMap,t(x.specularMap,_.specularMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest);const C=e.get(x),R=C.envMap,S=C.envMapRotation;R&&(_.envMap.value=R,qn.copy(S),qn.x*=-1,qn.y*=-1,qn.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),_.envMapRotation.value.setFromMatrix4(cp.makeRotationFromEuler(qn)),_.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=x.reflectivity,_.ior.value=x.ior,_.refractionRatio.value=x.refractionRatio),x.lightMap&&(_.lightMap.value=x.lightMap,_.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,_.lightMapTransform)),x.aoMap&&(_.aoMap.value=x.aoMap,_.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,_.aoMapTransform))}function r(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,x.map&&(_.map.value=x.map,t(x.map,_.mapTransform))}function o(_,x){_.dashSize.value=x.dashSize,_.totalSize.value=x.dashSize+x.gapSize,_.scale.value=x.scale}function u(_,x,C,R){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.size.value=x.size*C,_.scale.value=R*.5,x.map&&(_.map.value=x.map,t(x.map,_.uvTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}function l(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.rotation.value=x.rotation,x.map&&(_.map.value=x.map,t(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}function h(_,x){_.specular.value.copy(x.specular),_.shininess.value=Math.max(x.shininess,1e-4)}function m(_,x){x.gradientMap&&(_.gradientMap.value=x.gradientMap)}function f(_,x){_.metalness.value=x.metalness,x.metalnessMap&&(_.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,_.metalnessMapTransform)),_.roughness.value=x.roughness,x.roughnessMap&&(_.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,_.roughnessMapTransform)),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)}function g(_,x,C){_.ior.value=x.ior,x.sheen>0&&(_.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),_.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(_.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,_.sheenColorMapTransform)),x.sheenRoughnessMap&&(_.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,_.sheenRoughnessMapTransform))),x.clearcoat>0&&(_.clearcoat.value=x.clearcoat,_.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(_.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,_.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(_.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===It&&_.clearcoatNormalScale.value.negate())),x.dispersion>0&&(_.dispersion.value=x.dispersion),x.iridescence>0&&(_.iridescence.value=x.iridescence,_.iridescenceIOR.value=x.iridescenceIOR,_.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(_.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,_.iridescenceMapTransform)),x.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),x.transmission>0&&(_.transmission.value=x.transmission,_.transmissionSamplerMap.value=C.texture,_.transmissionSamplerSize.value.set(C.width,C.height),x.transmissionMap&&(_.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,_.transmissionMapTransform)),_.thickness.value=x.thickness,x.thicknessMap&&(_.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=x.attenuationDistance,_.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(_.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(_.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=x.specularIntensity,_.specularColor.value.copy(x.specularColor),x.specularColorMap&&(_.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,_.specularColorMapTransform)),x.specularIntensityMap&&(_.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,x){x.matcap&&(_.matcap.value=x.matcap)}function w(_,x){const C=e.get(x).light;_.referencePosition.value.setFromMatrixPosition(C.matrixWorld),_.nearDistance.value=C.shadow.camera.near,_.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function dp(n,e,t,i){let a={},s={},r=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function u(C,R){const S=R.program;i.uniformBlockBinding(C,S)}function l(C,R){let S=a[C.id];S===void 0&&(v(C),S=h(C),a[C.id]=S,C.addEventListener("dispose",_));const H=R.program;i.updateUBOMapping(C,H);const D=e.render.frame;s[C.id]!==D&&(f(C),s[C.id]=D)}function h(C){const R=m();C.__bindingPointIndex=R;const S=n.createBuffer(),H=C.__size,D=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,H,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,R,S),S}function m(){for(let C=0;C<o;C++)if(r.indexOf(C)===-1)return r.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(C){const R=a[C.id],S=C.uniforms,H=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let D=0,L=S.length;D<L;D++){const z=Array.isArray(S[D])?S[D]:[S[D]];for(let A=0,E=z.length;A<E;A++){const U=z[A];if(g(U,D,A,H)===!0){const Y=U.__offset,q=Array.isArray(U.value)?U.value:[U.value];let Z=0;for(let ne=0;ne<q.length;ne++){const $=q[ne],oe=w($);typeof $=="number"||typeof $=="boolean"?(U.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,Y+Z,U.__data)):$.isMatrix3?(U.__data[0]=$.elements[0],U.__data[1]=$.elements[1],U.__data[2]=$.elements[2],U.__data[3]=0,U.__data[4]=$.elements[3],U.__data[5]=$.elements[4],U.__data[6]=$.elements[5],U.__data[7]=0,U.__data[8]=$.elements[6],U.__data[9]=$.elements[7],U.__data[10]=$.elements[8],U.__data[11]=0):($.toArray(U.__data,Z),Z+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Y,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(C,R,S,H){const D=C.value,L=R+"_"+S;if(H[L]===void 0)return typeof D=="number"||typeof D=="boolean"?H[L]=D:H[L]=D.clone(),!0;{const z=H[L];if(typeof D=="number"||typeof D=="boolean"){if(z!==D)return H[L]=D,!0}else if(z.equals(D)===!1)return z.copy(D),!0}return!1}function v(C){const R=C.uniforms;let S=0;const H=16;for(let L=0,z=R.length;L<z;L++){const A=Array.isArray(R[L])?R[L]:[R[L]];for(let E=0,U=A.length;E<U;E++){const Y=A[E],q=Array.isArray(Y.value)?Y.value:[Y.value];for(let Z=0,ne=q.length;Z<ne;Z++){const $=q[Z],oe=w($),J=S%H,he=J%oe.boundary,xe=J+he;S+=he,xe!==0&&H-xe<oe.storage&&(S+=H-xe),Y.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=S,S+=oe.storage}}}const D=S%H;return D>0&&(S+=H-D),C.__size=S,C.__cache={},this}function w(C){const R={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(R.boundary=4,R.storage=4):C.isVector2?(R.boundary=8,R.storage=8):C.isVector3||C.isColor?(R.boundary=16,R.storage=12):C.isVector4?(R.boundary=16,R.storage=16):C.isMatrix3?(R.boundary=48,R.storage=48):C.isMatrix4?(R.boundary=64,R.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),R}function _(C){const R=C.target;R.removeEventListener("dispose",_);const S=r.indexOf(R.__bindingPointIndex);r.splice(S,1),n.deleteBuffer(a[R.id]),delete a[R.id],delete s[R.id]}function x(){for(const C in a)n.deleteBuffer(a[C]);r=[],a={},s={}}return{bind:u,update:l,dispose:x}}class hp{constructor(e={}){const{canvas:t=jl(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=r;const v=new Uint32Array(4),w=new Int32Array(4);let _=null,x=null;const C=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ft,this.toneMapping=Fn,this.toneMappingExposure=1;const S=this;let H=!1,D=0,L=0,z=null,A=-1,E=null;const U=new xt,Y=new xt;let q=null;const Z=new We(0);let ne=0,$=t.width,oe=t.height,J=1,he=null,xe=null;const Re=new xt(0,0,$,oe),Xe=new xt(0,0,$,oe);let it=!1;const Q=new Br;let ce=!1,Se=!1;const ue=new ht,Le=new ht,Fe=new M,qe=new xt,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function gt(){return z===null?J:1}let G=i;function Ut(T,B){return t.getContext(T,B)}try{const T={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:u,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pr}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",pe,!1),G===null){const B="webgl2";if(G=Ut(B,T),G===null)throw Ut(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ye,Ke,De,ot,Pe,P,y,V,ee,ie,j,Te,fe,_e,$e,ae,ve,Ie,Ue,Me,Je,He,at,F;function de(){Ye=new gf(G),Ye.init(),He=new tp(G,Ye),Ke=new df(G,Ye,e,He),De=new j0(G,Ye),Ke.reverseDepthBuffer&&f&&De.buffers.depth.setReversed(!0),ot=new vf(G),Pe=new F0,P=new ep(G,Ye,De,Pe,Ke,He,ot),y=new uf(S),V=new mf(S),ee=new Ed(G),at=new cf(G,ee),ie=new xf(G,ee,ot,at),j=new wf(G,ie,ee,ot),Ue=new Mf(G,Ke,P),ae=new hf(Pe),Te=new N0(S,y,V,Ye,Ke,at,ae),fe=new lp(S,Pe),_e=new B0,$e=new X0(Ye),Ie=new of(S,y,V,De,j,g,u),ve=new Z0(S,j,Ke),F=new dp(G,ot,Ke,De),Me=new lf(G,Ye,ot),Je=new _f(G,Ye,ot),ot.programs=Te.programs,S.capabilities=Ke,S.extensions=Ye,S.properties=Pe,S.renderLists=_e,S.shadowMap=ve,S.state=De,S.info=ot}de();const K=new op(S,G);this.xr=K,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const T=Ye.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ye.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(T){T!==void 0&&(J=T,this.setSize($,oe,!1))},this.getSize=function(T){return T.set($,oe)},this.setSize=function(T,B,W=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=T,oe=B,t.width=Math.floor(T*J),t.height=Math.floor(B*J),W===!0&&(t.style.width=T+"px",t.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set($*J,oe*J).floor()},this.setDrawingBufferSize=function(T,B,W){$=T,oe=B,J=W,t.width=Math.floor(T*W),t.height=Math.floor(B*W),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(U)},this.getViewport=function(T){return T.copy(Re)},this.setViewport=function(T,B,W,X){T.isVector4?Re.set(T.x,T.y,T.z,T.w):Re.set(T,B,W,X),De.viewport(U.copy(Re).multiplyScalar(J).round())},this.getScissor=function(T){return T.copy(Xe)},this.setScissor=function(T,B,W,X){T.isVector4?Xe.set(T.x,T.y,T.z,T.w):Xe.set(T,B,W,X),De.scissor(Y.copy(Xe).multiplyScalar(J).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(T){De.setScissorTest(it=T)},this.setOpaqueSort=function(T){he=T},this.setTransparentSort=function(T){xe=T},this.getClearColor=function(T){return T.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(T=!0,B=!0,W=!0){let X=0;if(T){let k=!1;if(z!==null){const re=z.texture.format;k=re===Fr||re===Nr||re===zr}if(k){const re=z.texture.type,me=re===bn||re===ei||re===ia||re===Di||re===Ir||re===Lr,we=Ie.getClearColor(),ye=Ie.getClearAlpha(),ze=we.r,ke=we.g,be=we.b;me?(v[0]=ze,v[1]=ke,v[2]=be,v[3]=ye,G.clearBufferuiv(G.COLOR,0,v)):(w[0]=ze,w[1]=ke,w[2]=be,w[3]=ye,G.clearBufferiv(G.COLOR,0,w))}else X|=G.COLOR_BUFFER_BIT}B&&(X|=G.DEPTH_BUFFER_BIT),W&&(X|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),_e.dispose(),$e.dispose(),Pe.dispose(),y.dispose(),V.dispose(),j.dispose(),at.dispose(),F.dispose(),Te.dispose(),K.dispose(),K.removeEventListener("sessionstart",la),K.removeEventListener("sessionend",da),pn.stop()};function te(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const T=ot.autoReset,B=ve.enabled,W=ve.autoUpdate,X=ve.needsUpdate,k=ve.type;de(),ot.autoReset=T,ve.enabled=B,ve.autoUpdate=W,ve.needsUpdate=X,ve.type=k}function pe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Be(T){const B=T.target;B.removeEventListener("dispose",Be),pt(B)}function pt(T){bt(T),Pe.remove(T)}function bt(T){const B=Pe.get(T).programs;B!==void 0&&(B.forEach(function(W){Te.releaseProgram(W)}),T.isShaderMaterial&&Te.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,W,X,k,re){B===null&&(B=ut);const me=k.isMesh&&k.matrixWorld.determinant()<0,we=as(T,B,W,X,k);De.setMaterial(X,me);let ye=W.index,ze=1;if(X.wireframe===!0){if(ye=ie.getWireframeAttribute(W),ye===void 0)return;ze=2}const ke=W.drawRange,be=W.attributes.position;let je=ke.start*ze,st=(ke.start+ke.count)*ze;re!==null&&(je=Math.max(je,re.start*ze),st=Math.min(st,(re.start+re.count)*ze)),ye!==null?(je=Math.max(je,0),st=Math.min(st,ye.count)):be!=null&&(je=Math.max(je,0),st=Math.min(st,be.count));const ct=st-je;if(ct<0||ct===1/0)return;at.setup(k,X,we,W,ye);let Et,et=Me;if(ye!==null&&(Et=ee.get(ye),et=Je,et.setIndex(Et)),k.isMesh)X.wireframe===!0?(De.setLineWidth(X.wireframeLinewidth*gt()),et.setMode(G.LINES)):et.setMode(G.TRIANGLES);else if(k.isLine){let Ae=X.linewidth;Ae===void 0&&(Ae=1),De.setLineWidth(Ae*gt()),k.isLineSegments?et.setMode(G.LINES):k.isLineLoop?et.setMode(G.LINE_LOOP):et.setMode(G.LINE_STRIP)}else k.isPoints?et.setMode(G.POINTS):k.isSprite&&et.setMode(G.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)et.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))et.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ae=k._multiDrawStarts,Kt=k._multiDrawCounts,tt=k._multiDrawCount,kt=ye?ee.get(ye).bytesPerElement:1,Tn=Pe.get(X).currentProgram.getUniforms();for(let Pt=0;Pt<tt;Pt++)Tn.setValue(G,"_gl_DrawID",Pt),et.render(Ae[Pt]/kt,Kt[Pt])}else if(k.isInstancedMesh)et.renderInstances(je,ct,k.count);else if(W.isInstancedBufferGeometry){const Ae=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Kt=Math.min(W.instanceCount,Ae);et.renderInstances(je,ct,Kt)}else et.render(je,ct)};function nt(T,B,W){T.transparent===!0&&T.side===ln&&T.forceSinglePass===!1?(T.side=It,T.needsUpdate=!0,ri(T,B,W),T.side=On,T.needsUpdate=!0,ri(T,B,W),T.side=ln):ri(T,B,W)}this.compile=function(T,B,W=null){W===null&&(W=T),x=$e.get(W),x.init(B),R.push(x),W.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(x.pushLight(k),k.castShadow&&x.pushShadow(k))}),T!==W&&T.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(x.pushLight(k),k.castShadow&&x.pushShadow(k))}),x.setupLights();const X=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const re=k.material;if(re)if(Array.isArray(re))for(let me=0;me<re.length;me++){const we=re[me];nt(we,W,k),X.add(we)}else nt(re,W,k),X.add(re)}),R.pop(),x=null,X},this.compileAsync=function(T,B,W=null){const X=this.compile(T,B,W);return new Promise(k=>{function re(){if(X.forEach(function(me){Pe.get(me).currentProgram.isReady()&&X.delete(me)}),X.size===0){k(T);return}setTimeout(re,10)}Ye.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Bt=null;function Yt(T){Bt&&Bt(T)}function la(){pn.stop()}function da(){pn.start()}const pn=new Lc;pn.setAnimationLoop(Yt),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(T){Bt=T,K.setAnimationLoop(T),T===null?pn.stop():pn.start()},K.addEventListener("sessionstart",la),K.addEventListener("sessionend",da),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(B),B=K.getCamera()),T.isScene===!0&&T.onBeforeRender(S,T,B,z),x=$e.get(T,R.length),x.init(B),R.push(x),Le.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Q.setFromProjectionMatrix(Le),Se=this.localClippingEnabled,ce=ae.init(this.clippingPlanes,Se),_=_e.get(T,C.length),_.init(),C.push(_),K.enabled===!0&&K.isPresenting===!0){const re=S.xr.getDepthSensingMesh();re!==null&&Hi(re,B,-1/0,S.sortObjects)}Hi(T,B,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(he,xe),Ze=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Ze&&Ie.addToRenderList(_,T),this.info.render.frame++,ce===!0&&ae.beginShadows();const W=x.state.shadowsArray;ve.render(W,T,B),ce===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=_.opaque,k=_.transmissive;if(x.setupLights(),B.isArrayCamera){const re=B.cameras;if(k.length>0)for(let me=0,we=re.length;me<we;me++){const ye=re[me];ua(X,k,T,ye)}Ze&&Ie.render(T);for(let me=0,we=re.length;me<we;me++){const ye=re[me];ha(_,T,ye,ye.viewport)}}else k.length>0&&ua(X,k,T,B),Ze&&Ie.render(T),ha(_,T,B);z!==null&&(P.updateMultisampleRenderTarget(z),P.updateRenderTargetMipmap(z)),T.isScene===!0&&T.onAfterRender(S,T,B),at.resetDefaultState(),A=-1,E=null,R.pop(),R.length>0?(x=R[R.length-1],ce===!0&&ae.setGlobalState(S.clippingPlanes,x.state.camera)):x=null,C.pop(),C.length>0?_=C[C.length-1]:_=null};function Hi(T,B,W,X){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)x.pushLight(T),T.castShadow&&x.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Q.intersectsSprite(T)){X&&qe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Le);const me=j.update(T),we=T.material;we.visible&&_.push(T,me,we,W,qe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Q.intersectsObject(T))){const me=j.update(T),we=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),qe.copy(T.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),qe.copy(me.boundingSphere.center)),qe.applyMatrix4(T.matrixWorld).applyMatrix4(Le)),Array.isArray(we)){const ye=me.groups;for(let ze=0,ke=ye.length;ze<ke;ze++){const be=ye[ze],je=we[be.materialIndex];je&&je.visible&&_.push(T,me,je,W,qe.z,be)}}else we.visible&&_.push(T,me,we,W,qe.z,null)}}const re=T.children;for(let me=0,we=re.length;me<we;me++)Hi(re[me],B,W,X)}function ha(T,B,W,X){const k=T.opaque,re=T.transmissive,me=T.transparent;x.setupLightsView(W),ce===!0&&ae.setGlobalState(S.clippingPlanes,W),X&&De.viewport(U.copy(X)),k.length>0&&si(k,B,W),re.length>0&&si(re,B,W),me.length>0&&si(me,B,W),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function ua(T,B,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[X.id]===void 0&&(x.state.transmissionRenderTarget[X.id]=new ti(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?sa:bn,minFilter:Qn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const re=x.state.transmissionRenderTarget[X.id],me=X.viewport||U;re.setSize(me.z,me.w);const we=S.getRenderTarget();S.setRenderTarget(re),S.getClearColor(Z),ne=S.getClearAlpha(),ne<1&&S.setClearColor(16777215,.5),S.clear(),Ze&&Ie.render(W);const ye=S.toneMapping;S.toneMapping=Fn;const ze=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),x.setupLightsView(X),ce===!0&&ae.setGlobalState(S.clippingPlanes,X),si(T,W,X),P.updateMultisampleRenderTarget(re),P.updateRenderTargetMipmap(re),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let be=0,je=B.length;be<je;be++){const st=B[be],ct=st.object,Et=st.geometry,et=st.material,Ae=st.group;if(et.side===ln&&ct.layers.test(X.layers)){const Kt=et.side;et.side=It,et.needsUpdate=!0,fa(ct,W,X,Et,et,Ae),et.side=Kt,et.needsUpdate=!0,ke=!0}}ke===!0&&(P.updateMultisampleRenderTarget(re),P.updateRenderTargetMipmap(re))}S.setRenderTarget(we),S.setClearColor(Z,ne),ze!==void 0&&(X.viewport=ze),S.toneMapping=ye}function si(T,B,W){const X=B.isScene===!0?B.overrideMaterial:null;for(let k=0,re=T.length;k<re;k++){const me=T[k],we=me.object,ye=me.geometry,ze=X===null?me.material:X,ke=me.group;we.layers.test(W.layers)&&fa(we,B,W,ye,ze,ke)}}function fa(T,B,W,X,k,re){T.onBeforeRender(S,B,W,X,k,re),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(S,B,W,X,T,re),k.transparent===!0&&k.side===ln&&k.forceSinglePass===!1?(k.side=It,k.needsUpdate=!0,S.renderBufferDirect(W,B,X,k,T,re),k.side=On,k.needsUpdate=!0,S.renderBufferDirect(W,B,X,k,T,re),k.side=ln):S.renderBufferDirect(W,B,X,k,T,re),T.onAfterRender(S,B,W,X,k,re)}function ri(T,B,W){B.isScene!==!0&&(B=ut);const X=Pe.get(T),k=x.state.lights,re=x.state.shadowsArray,me=k.state.version,we=Te.getParameters(T,k.state,re,B,W),ye=Te.getProgramCacheKey(we);let ze=X.programs;X.environment=T.isMeshStandardMaterial?B.environment:null,X.fog=B.fog,X.envMap=(T.isMeshStandardMaterial?V:y).get(T.envMap||X.environment),X.envMapRotation=X.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,ze===void 0&&(T.addEventListener("dispose",Be),ze=new Map,X.programs=ze);let ke=ze.get(ye);if(ke!==void 0){if(X.currentProgram===ke&&X.lightsStateVersion===me)return ma(T,we),ke}else we.uniforms=Te.getUniforms(T),T.onBeforeCompile(we,S),ke=Te.acquireProgram(we,ye),ze.set(ye,ke),X.uniforms=we.uniforms;const be=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(be.clippingPlanes=ae.uniform),ma(T,we),X.needsLights=rs(T),X.lightsStateVersion=me,X.needsLights&&(be.ambientLightColor.value=k.state.ambient,be.lightProbe.value=k.state.probe,be.directionalLights.value=k.state.directional,be.directionalLightShadows.value=k.state.directionalShadow,be.spotLights.value=k.state.spot,be.spotLightShadows.value=k.state.spotShadow,be.rectAreaLights.value=k.state.rectArea,be.ltc_1.value=k.state.rectAreaLTC1,be.ltc_2.value=k.state.rectAreaLTC2,be.pointLights.value=k.state.point,be.pointLightShadows.value=k.state.pointShadow,be.hemisphereLights.value=k.state.hemi,be.directionalShadowMap.value=k.state.directionalShadowMap,be.directionalShadowMatrix.value=k.state.directionalShadowMatrix,be.spotShadowMap.value=k.state.spotShadowMap,be.spotLightMatrix.value=k.state.spotLightMatrix,be.spotLightMap.value=k.state.spotLightMap,be.pointShadowMap.value=k.state.pointShadowMap,be.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=ke,X.uniformsList=null,ke}function pa(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=Ja.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function ma(T,B){const W=Pe.get(T);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function as(T,B,W,X,k){B.isScene!==!0&&(B=ut),P.resetTextureUnits();const re=B.fog,me=X.isMeshStandardMaterial?B.environment:null,we=z===null?S.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Ui,ye=(X.isMeshStandardMaterial?V:y).get(X.envMap||me),ze=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ke=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),be=!!W.morphAttributes.position,je=!!W.morphAttributes.normal,st=!!W.morphAttributes.color;let ct=Fn;X.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(ct=S.toneMapping);const Et=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,et=Et!==void 0?Et.length:0,Ae=Pe.get(X),Kt=x.state.lights;if(ce===!0&&(Se===!0||T!==E)){const zt=T===E&&X.id===A;ae.setState(X,T,zt)}let tt=!1;X.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Kt.state.version||Ae.outputColorSpace!==we||k.isBatchedMesh&&Ae.batching===!1||!k.isBatchedMesh&&Ae.batching===!0||k.isBatchedMesh&&Ae.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ae.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ae.instancing===!1||!k.isInstancedMesh&&Ae.instancing===!0||k.isSkinnedMesh&&Ae.skinning===!1||!k.isSkinnedMesh&&Ae.skinning===!0||k.isInstancedMesh&&Ae.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ae.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ae.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ae.instancingMorph===!1&&k.morphTexture!==null||Ae.envMap!==ye||X.fog===!0&&Ae.fog!==re||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ae.numPlanes||Ae.numIntersection!==ae.numIntersection)||Ae.vertexAlphas!==ze||Ae.vertexTangents!==ke||Ae.morphTargets!==be||Ae.morphNormals!==je||Ae.morphColors!==st||Ae.toneMapping!==ct||Ae.morphTargetsCount!==et)&&(tt=!0):(tt=!0,Ae.__version=X.version);let kt=Ae.currentProgram;tt===!0&&(kt=ri(X,B,k));let Tn=!1,Pt=!1,Bn=!1;const lt=kt.getUniforms(),Xt=Ae.uniforms;if(De.useProgram(kt.program)&&(Tn=!0,Pt=!0,Bn=!0),X.id!==A&&(A=X.id,Pt=!0),Tn||E!==T){De.buffers.depth.getReversed()?(ue.copy(T.projectionMatrix),ed(ue),td(ue),lt.setValue(G,"projectionMatrix",ue)):lt.setValue(G,"projectionMatrix",T.projectionMatrix),lt.setValue(G,"viewMatrix",T.matrixWorldInverse);const an=lt.map.cameraPosition;an!==void 0&&an.setValue(G,Fe.setFromMatrixPosition(T.matrixWorld)),Ke.logarithmicDepthBuffer&&lt.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&lt.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,Pt=!0,Bn=!0)}if(k.isSkinnedMesh){lt.setOptional(G,k,"bindMatrix"),lt.setOptional(G,k,"bindMatrixInverse");const zt=k.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),lt.setValue(G,"boneTexture",zt.boneTexture,P))}k.isBatchedMesh&&(lt.setOptional(G,k,"batchingTexture"),lt.setValue(G,"batchingTexture",k._matricesTexture,P),lt.setOptional(G,k,"batchingIdTexture"),lt.setValue(G,"batchingIdTexture",k._indirectTexture,P),lt.setOptional(G,k,"batchingColorTexture"),k._colorsTexture!==null&&lt.setValue(G,"batchingColorTexture",k._colorsTexture,P));const kn=W.morphAttributes;if((kn.position!==void 0||kn.normal!==void 0||kn.color!==void 0)&&Ue.update(k,W,kt),(Pt||Ae.receiveShadow!==k.receiveShadow)&&(Ae.receiveShadow=k.receiveShadow,lt.setValue(G,"receiveShadow",k.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Xt.envMap.value=ye,Xt.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&B.environment!==null&&(Xt.envMapIntensity.value=B.environmentIntensity),Pt&&(lt.setValue(G,"toneMappingExposure",S.toneMappingExposure),Ae.needsLights&&ss(Xt,Bn),re&&X.fog===!0&&fe.refreshFogUniforms(Xt,re),fe.refreshMaterialUniforms(Xt,X,J,oe,x.state.transmissionRenderTarget[T.id]),Ja.upload(G,pa(Ae),Xt,P)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ja.upload(G,pa(Ae),Xt,P),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&lt.setValue(G,"center",k.center),lt.setValue(G,"modelViewMatrix",k.modelViewMatrix),lt.setValue(G,"normalMatrix",k.normalMatrix),lt.setValue(G,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const zt=X.uniformsGroups;for(let an=0,sn=zt.length;an<sn;an++){const ga=zt[an];F.update(ga,kt),F.bind(ga,kt)}}return kt}function ss(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function rs(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(T,B,W){Pe.get(T.texture).__webglTexture=B,Pe.get(T.depthTexture).__webglTexture=W;const X=Pe.get(T);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,B){const W=Pe.get(T);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,W=0){z=T,D=B,L=W;let X=!0,k=null,re=!1,me=!1;if(T){const ye=Pe.get(T);if(ye.__useDefaultFramebuffer!==void 0)De.bindFramebuffer(G.FRAMEBUFFER,null),X=!1;else if(ye.__webglFramebuffer===void 0)P.setupRenderTarget(T);else if(ye.__hasExternalTextures)P.rebindTextures(T,Pe.get(T.texture).__webglTexture,Pe.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const be=T.depthTexture;if(ye.__boundDepthTexture!==be){if(be!==null&&Pe.has(be)&&(T.width!==be.image.width||T.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(T)}}const ze=T.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(me=!0);const ke=Pe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ke[B])?k=ke[B][W]:k=ke[B],re=!0):T.samples>0&&P.useMultisampledRTT(T)===!1?k=Pe.get(T).__webglMultisampledFramebuffer:Array.isArray(ke)?k=ke[W]:k=ke,U.copy(T.viewport),Y.copy(T.scissor),q=T.scissorTest}else U.copy(Re).multiplyScalar(J).floor(),Y.copy(Xe).multiplyScalar(J).floor(),q=it;if(De.bindFramebuffer(G.FRAMEBUFFER,k)&&X&&De.drawBuffers(T,k),De.viewport(U),De.scissor(Y),De.setScissorTest(q),re){const ye=Pe.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+B,ye.__webglTexture,W)}else if(me){const ye=Pe.get(T.texture),ze=B||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,ye.__webglTexture,W||0,ze)}A=-1},this.readRenderTargetPixels=function(T,B,W,X,k,re,me){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Pe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&me!==void 0&&(we=we[me]),we){De.bindFramebuffer(G.FRAMEBUFFER,we);try{const ye=T.texture,ze=ye.format,ke=ye.type;if(!Ke.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-X&&W>=0&&W<=T.height-k&&G.readPixels(B,W,X,k,He.convert(ze),He.convert(ke),re)}finally{const ye=z!==null?Pe.get(z).__webglFramebuffer:null;De.bindFramebuffer(G.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(T,B,W,X,k,re,me){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Pe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&me!==void 0&&(we=we[me]),we){const ye=T.texture,ze=ye.format,ke=ye.type;if(!Ke.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=T.width-X&&W>=0&&W<=T.height-k){De.bindFramebuffer(G.FRAMEBUFFER,we);const be=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,be),G.bufferData(G.PIXEL_PACK_BUFFER,re.byteLength,G.STREAM_READ),G.readPixels(B,W,X,k,He.convert(ze),He.convert(ke),0);const je=z!==null?Pe.get(z).__webglFramebuffer:null;De.bindFramebuffer(G.FRAMEBUFFER,je);const st=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Ql(G,st,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,be),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,re),G.deleteBuffer(be),G.deleteSync(st),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,B=null,W=0){T.isTexture!==!0&&(Qi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,T=arguments[1]);const X=Math.pow(2,-W),k=Math.floor(T.image.width*X),re=Math.floor(T.image.height*X),me=B!==null?B.x:0,we=B!==null?B.y:0;P.setTexture2D(T,0),G.copyTexSubImage2D(G.TEXTURE_2D,W,0,0,me,we,k,re),De.unbindTexture()},this.copyTextureToTexture=function(T,B,W=null,X=null,k=0){T.isTexture!==!0&&(Qi("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,T=arguments[1],B=arguments[2],k=arguments[3]||0,W=null);let re,me,we,ye,ze,ke,be,je,st;const ct=T.isCompressedTexture?T.mipmaps[k]:T.image;W!==null?(re=W.max.x-W.min.x,me=W.max.y-W.min.y,we=W.isBox3?W.max.z-W.min.z:1,ye=W.min.x,ze=W.min.y,ke=W.isBox3?W.min.z:0):(re=ct.width,me=ct.height,we=ct.depth||1,ye=0,ze=0,ke=0),X!==null?(be=X.x,je=X.y,st=X.z):(be=0,je=0,st=0);const Et=He.convert(B.format),et=He.convert(B.type);let Ae;B.isData3DTexture?(P.setTexture3D(B,0),Ae=G.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(P.setTexture2DArray(B,0),Ae=G.TEXTURE_2D_ARRAY):(P.setTexture2D(B,0),Ae=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,B.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,B.unpackAlignment);const Kt=G.getParameter(G.UNPACK_ROW_LENGTH),tt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),kt=G.getParameter(G.UNPACK_SKIP_PIXELS),Tn=G.getParameter(G.UNPACK_SKIP_ROWS),Pt=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,ct.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ct.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ye),G.pixelStorei(G.UNPACK_SKIP_ROWS,ze),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ke);const Bn=T.isDataArrayTexture||T.isData3DTexture,lt=B.isDataArrayTexture||B.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const Xt=Pe.get(T),kn=Pe.get(B),zt=Pe.get(Xt.__renderTarget),an=Pe.get(kn.__renderTarget);De.bindFramebuffer(G.READ_FRAMEBUFFER,zt.__webglFramebuffer),De.bindFramebuffer(G.DRAW_FRAMEBUFFER,an.__webglFramebuffer);for(let sn=0;sn<we;sn++)Bn&&G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Pe.get(T).__webglTexture,k,ke+sn),T.isDepthTexture?(lt&&G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Pe.get(B).__webglTexture,k,st+sn),G.blitFramebuffer(ye,ze,re,me,be,je,re,me,G.DEPTH_BUFFER_BIT,G.NEAREST)):lt?G.copyTexSubImage3D(Ae,k,be,je,st+sn,ye,ze,re,me):G.copyTexSubImage2D(Ae,k,be,je,st+sn,ye,ze,re,me);De.bindFramebuffer(G.READ_FRAMEBUFFER,null),De.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else lt?T.isDataTexture||T.isData3DTexture?G.texSubImage3D(Ae,k,be,je,st,re,me,we,Et,et,ct.data):B.isCompressedArrayTexture?G.compressedTexSubImage3D(Ae,k,be,je,st,re,me,we,Et,ct.data):G.texSubImage3D(Ae,k,be,je,st,re,me,we,Et,et,ct):T.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,k,be,je,re,me,Et,et,ct.data):T.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,k,be,je,ct.width,ct.height,Et,ct.data):G.texSubImage2D(G.TEXTURE_2D,k,be,je,re,me,Et,et,ct);G.pixelStorei(G.UNPACK_ROW_LENGTH,Kt),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,tt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,kt),G.pixelStorei(G.UNPACK_SKIP_ROWS,Tn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Pt),k===0&&B.generateMipmaps&&G.generateMipmap(Ae),De.unbindTexture()},this.copyTextureToTexture3D=function(T,B,W=null,X=null,k=0){return T.isTexture!==!0&&(Qi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,T=arguments[2],B=arguments[3],k=arguments[4]||0),Qi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,B,W,X,k)},this.initRenderTarget=function(T){Pe.get(T).__webglFramebuffer===void 0&&P.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?P.setTextureCube(T,0):T.isData3DTexture?P.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?P.setTexture2DArray(T,0):P.setTexture2D(T,0),De.unbindTexture()},this.resetState=function(){D=0,L=0,z=null,De.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}class Hr{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new We(e),this.density=t}clone(){return new Hr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class up extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class fp extends Ct{constructor(e=null,t=1,i=1,a,s,r,o,u,l=Vt,h=Vt,m,f){super(null,r,o,u,l,h,a,s,m,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yo extends Wt{constructor(e,t,i,a=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const wi=new ht,Ko=new ht,Oa=[],Jo=new ni,pp=new ht,Ji=new dt,Zi=new Ni;class mp extends dt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Yo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<i;a++)this.setMatrixAt(a,pp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ni),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,wi),Jo.copy(e.boundingBox).applyMatrix4(wi),this.boundingBox.union(Jo)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ni),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,wi),Zi.copy(e.boundingSphere).applyMatrix4(wi),this.boundingSphere.union(Zi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,a=this.morphTexture.source.data.data,s=i.length+1,r=e*s+1;for(let o=0;o<i.length;o++)i[o]=a[r+o]}raycast(e,t){const i=this.matrixWorld,a=this.count;if(Ji.geometry=this.geometry,Ji.material=this.material,Ji.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zi.copy(this.boundingSphere),Zi.applyMatrix4(i),e.ray.intersectsSphere(Zi)!==!1))for(let s=0;s<a;s++){this.getMatrixAt(s,wi),Ko.multiplyMatrices(i,wi),Ji.matrixWorld=Ko,Ji.raycast(e,Oa);for(let r=0,o=Oa.length;r<o;r++){const u=Oa[r];u.instanceId=s,u.object=this,t.push(u)}Oa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Yo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,a=i.length+1;this.morphTexture===null&&(this.morphTexture=new fp(new Float32Array(a*this.count),a,this.count,Ur,hn));const s=this.morphTexture.source.data.data;let r=0;for(let l=0;l<i.length;l++)r+=i[l];const o=this.geometry.morphTargetsRelative?1:1-r,u=a*e;s[u]=o,s.set(i,u+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class kc extends Fi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Zo=new ht,Rr=new Ec,Ba=new Ni,ka=new M;class gp extends Mt{constructor(e=new Lt,t=new kc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,s=e.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ba.copy(i.boundingSphere),Ba.applyMatrix4(a),Ba.radius+=s,e.ray.intersectsSphere(Ba)===!1)return;Zo.copy(a).invert(),Rr.copy(e.ray).applyMatrix4(Zo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=o*o,l=i.index,m=i.attributes.position;if(l!==null){const f=Math.max(0,r.start),g=Math.min(l.count,r.start+r.count);for(let v=f,w=g;v<w;v++){const _=l.getX(v);ka.fromBufferAttribute(m,_),$o(ka,_,u,a,e,t,this)}}else{const f=Math.max(0,r.start),g=Math.min(m.count,r.start+r.count);for(let v=f,w=g;v<w;v++)ka.fromBufferAttribute(m,v),$o(ka,v,u,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function $o(n,e,t,i,a,s,r){const o=Rr.distanceSqToPoint(n);if(o<t){const u=new M;Rr.closestPointToPoint(n,u),u.applyMatrix4(i);const l=a.ray.origin.distanceTo(u);if(l<a.near||l>a.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:u,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class xp extends Ct{constructor(e,t,i,a,s,r,o,u,l){super(e,t,i,a,s,r,o,u,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class En{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,a=this.getPoint(0),s=0;t.push(0);for(let r=1;r<=e;r++)i=this.getPoint(r/e),s+=i.distanceTo(a),t.push(s),a=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let a=0;const s=i.length;let r;t?r=t:r=e*i[s-1];let o=0,u=s-1,l;for(;o<=u;)if(a=Math.floor(o+(u-o)/2),l=i[a]-r,l<0)o=a+1;else if(l>0)u=a-1;else{u=a;break}if(a=u,i[a]===r)return a/(s-1);const h=i[a],f=i[a+1]-h,g=(r-h)/f;return(a+g)/(s-1)}getTangent(e,t){let a=e-1e-4,s=e+1e-4;a<0&&(a=0),s>1&&(s=1);const r=this.getPoint(a),o=this.getPoint(s),u=t||(r.isVector2?new Ce:new M);return u.copy(o).sub(r).normalize(),u}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new M,a=[],s=[],r=[],o=new M,u=new ht;for(let g=0;g<=e;g++){const v=g/e;a[g]=this.getTangentAt(v,new M)}s[0]=new M,r[0]=new M;let l=Number.MAX_VALUE;const h=Math.abs(a[0].x),m=Math.abs(a[0].y),f=Math.abs(a[0].z);h<=l&&(l=h,i.set(1,0,0)),m<=l&&(l=m,i.set(0,1,0)),f<=l&&i.set(0,0,1),o.crossVectors(a[0],i).normalize(),s[0].crossVectors(a[0],o),r[0].crossVectors(a[0],s[0]);for(let g=1;g<=e;g++){if(s[g]=s[g-1].clone(),r[g]=r[g-1].clone(),o.crossVectors(a[g-1],a[g]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(Rt(a[g-1].dot(a[g]),-1,1));s[g].applyMatrix4(u.makeRotationAxis(o,v))}r[g].crossVectors(a[g],s[g])}if(t===!0){let g=Math.acos(Rt(s[0].dot(s[e]),-1,1));g/=e,a[0].dot(o.crossVectors(s[0],s[e]))>0&&(g=-g);for(let v=1;v<=e;v++)s[v].applyMatrix4(u.makeRotationAxis(a[v],g*v)),r[v].crossVectors(a[v],s[v])}return{tangents:a,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Hc extends En{constructor(e=0,t=0,i=1,a=1,s=0,r=Math.PI*2,o=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=a,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=u}getPoint(e,t=new Ce){const i=t,a=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=a;for(;s>a;)s-=a;s<Number.EPSILON&&(r?s=0:s=a),this.aClockwise===!0&&!r&&(s===a?s=-a:s=s-a);const o=this.aStartAngle+e*s;let u=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),m=Math.sin(this.aRotation),f=u-this.aX,g=l-this.aY;u=f*h-g*m+this.aX,l=f*m+g*h+this.aY}return i.set(u,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class _p extends Hc{constructor(e,t,i,a,s,r){super(e,t,i,i,a,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Gr(){let n=0,e=0,t=0,i=0;function a(s,r,o,u){n=s,e=o,t=-3*s+3*r-2*o-u,i=2*s-2*r+o+u}return{initCatmullRom:function(s,r,o,u,l){a(r,o,l*(o-s),l*(u-r))},initNonuniformCatmullRom:function(s,r,o,u,l,h,m){let f=(r-s)/l-(o-s)/(l+h)+(o-r)/h,g=(o-r)/h-(u-r)/(h+m)+(u-o)/m;f*=h,g*=h,a(r,o,f,g)},calc:function(s){const r=s*s,o=r*s;return n+e*s+t*r+i*o}}}const Ha=new M,Fs=new Gr,Os=new Gr,Bs=new Gr;class ki extends En{constructor(e=[],t=!1,i="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=a}getPoint(e,t=new M){const i=t,a=this.points,s=a.length,r=(s-(this.closed?0:1))*e;let o=Math.floor(r),u=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:u===0&&o===s-1&&(o=s-2,u=1);let l,h;this.closed||o>0?l=a[(o-1)%s]:(Ha.subVectors(a[0],a[1]).add(a[0]),l=Ha);const m=a[o%s],f=a[(o+1)%s];if(this.closed||o+2<s?h=a[(o+2)%s]:(Ha.subVectors(a[s-1],a[s-2]).add(a[s-1]),h=Ha),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let v=Math.pow(l.distanceToSquared(m),g),w=Math.pow(m.distanceToSquared(f),g),_=Math.pow(f.distanceToSquared(h),g);w<1e-4&&(w=1),v<1e-4&&(v=w),_<1e-4&&(_=w),Fs.initNonuniformCatmullRom(l.x,m.x,f.x,h.x,v,w,_),Os.initNonuniformCatmullRom(l.y,m.y,f.y,h.y,v,w,_),Bs.initNonuniformCatmullRom(l.z,m.z,f.z,h.z,v,w,_)}else this.curveType==="catmullrom"&&(Fs.initCatmullRom(l.x,m.x,f.x,h.x,this.tension),Os.initCatmullRom(l.y,m.y,f.y,h.y,this.tension),Bs.initCatmullRom(l.z,m.z,f.z,h.z,this.tension));return i.set(Fs.calc(u),Os.calc(u),Bs.calc(u)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new M().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function jo(n,e,t,i,a){const s=(i-e)*.5,r=(a-t)*.5,o=n*n,u=n*o;return(2*t-2*i+s+r)*u+(-3*t+3*i-2*s-r)*o+s*n+t}function vp(n,e){const t=1-n;return t*t*e}function Mp(n,e){return 2*(1-n)*n*e}function wp(n,e){return n*n*e}function ta(n,e,t,i){return vp(n,e)+Mp(n,t)+wp(n,i)}function yp(n,e){const t=1-n;return t*t*t*e}function bp(n,e){const t=1-n;return 3*t*t*n*e}function Sp(n,e){return 3*(1-n)*n*n*e}function Ep(n,e){return n*n*n*e}function na(n,e,t,i,a){return yp(n,e)+bp(n,t)+Sp(n,i)+Ep(n,a)}class Tp extends En{constructor(e=new Ce,t=new Ce,i=new Ce,a=new Ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new Ce){const i=t,a=this.v0,s=this.v1,r=this.v2,o=this.v3;return i.set(na(e,a.x,s.x,r.x,o.x),na(e,a.y,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ap extends En{constructor(e=new M,t=new M,i=new M,a=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new M){const i=t,a=this.v0,s=this.v1,r=this.v2,o=this.v3;return i.set(na(e,a.x,s.x,r.x,o.x),na(e,a.y,s.y,r.y,o.y),na(e,a.z,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Rp extends En{constructor(e=new Ce,t=new Ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ce){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cp extends En{constructor(e=new M,t=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new M){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new M){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pp extends En{constructor(e=new Ce,t=new Ce,i=new Ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ce){const i=t,a=this.v0,s=this.v1,r=this.v2;return i.set(ta(e,a.x,s.x,r.x),ta(e,a.y,s.y,r.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gc extends En{constructor(e=new M,t=new M,i=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new M){const i=t,a=this.v0,s=this.v1,r=this.v2;return i.set(ta(e,a.x,s.x,r.x),ta(e,a.y,s.y,r.y),ta(e,a.z,s.z,r.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dp extends En{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ce){const i=t,a=this.points,s=(a.length-1)*e,r=Math.floor(s),o=s-r,u=a[r===0?r:r-1],l=a[r],h=a[r>a.length-2?a.length-1:r+1],m=a[r>a.length-3?a.length-1:r+2];return i.set(jo(o,u.x,l.x,h.x,m.x),jo(o,u.y,l.y,h.y,m.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new Ce().fromArray(a))}return this}}var Ip=Object.freeze({__proto__:null,ArcCurve:_p,CatmullRomCurve3:ki,CubicBezierCurve:Tp,CubicBezierCurve3:Ap,EllipseCurve:Hc,LineCurve:Rp,LineCurve3:Cp,QuadraticBezierCurve:Pp,QuadraticBezierCurve3:Gc,SplineCurve:Dp});class N extends Lt{constructor(e=1,t=1,i=1,a=32,s=1,r=!1,o=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:a,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:u};const l=this;a=Math.floor(a),s=Math.floor(s);const h=[],m=[],f=[],g=[];let v=0;const w=[],_=i/2;let x=0;C(),r===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new ft(m,3)),this.setAttribute("normal",new ft(f,3)),this.setAttribute("uv",new ft(g,2));function C(){const S=new M,H=new M;let D=0;const L=(t-e)/i;for(let z=0;z<=s;z++){const A=[],E=z/s,U=E*(t-e)+e;for(let Y=0;Y<=a;Y++){const q=Y/a,Z=q*u+o,ne=Math.sin(Z),$=Math.cos(Z);H.x=U*ne,H.y=-E*i+_,H.z=U*$,m.push(H.x,H.y,H.z),S.set(ne,L,$).normalize(),f.push(S.x,S.y,S.z),g.push(q,1-E),A.push(v++)}w.push(A)}for(let z=0;z<a;z++)for(let A=0;A<s;A++){const E=w[A][z],U=w[A+1][z],Y=w[A+1][z+1],q=w[A][z+1];(e>0||A!==0)&&(h.push(E,U,q),D+=3),(t>0||A!==s-1)&&(h.push(U,Y,q),D+=3)}l.addGroup(x,D,0),x+=D}function R(S){const H=v,D=new Ce,L=new M;let z=0;const A=S===!0?e:t,E=S===!0?1:-1;for(let Y=1;Y<=a;Y++)m.push(0,_*E,0),f.push(0,E,0),g.push(.5,.5),v++;const U=v;for(let Y=0;Y<=a;Y++){const Z=Y/a*u+o,ne=Math.cos(Z),$=Math.sin(Z);L.x=A*$,L.y=_*E,L.z=A*ne,m.push(L.x,L.y,L.z),f.push(0,E,0),D.x=ne*.5+.5,D.y=$*.5*E+.5,g.push(D.x,D.y),v++}for(let Y=0;Y<a;Y++){const q=H+Y,Z=U+Y;S===!0?h.push(Z,Z+1,q):h.push(Z+1,Z,q),z+=3}l.addGroup(x,z,S===!0?1:2),x+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new N(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ii extends N{constructor(e=1,t=1,i=32,a=1,s=!1,r=0,o=Math.PI*2){super(0,e,t,i,a,s,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:a,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(e){return new ii(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ca extends Lt{constructor(e=[],t=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:a};const s=[],r=[];o(a),l(i),h(),this.setAttribute("position",new ft(s,3)),this.setAttribute("normal",new ft(s.slice(),3)),this.setAttribute("uv",new ft(r,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(C){const R=new M,S=new M,H=new M;for(let D=0;D<t.length;D+=3)g(t[D+0],R),g(t[D+1],S),g(t[D+2],H),u(R,S,H,C)}function u(C,R,S,H){const D=H+1,L=[];for(let z=0;z<=D;z++){L[z]=[];const A=C.clone().lerp(S,z/D),E=R.clone().lerp(S,z/D),U=D-z;for(let Y=0;Y<=U;Y++)Y===0&&z===D?L[z][Y]=A:L[z][Y]=A.clone().lerp(E,Y/U)}for(let z=0;z<D;z++)for(let A=0;A<2*(D-z)-1;A++){const E=Math.floor(A/2);A%2===0?(f(L[z][E+1]),f(L[z+1][E]),f(L[z][E])):(f(L[z][E+1]),f(L[z+1][E+1]),f(L[z+1][E]))}}function l(C){const R=new M;for(let S=0;S<s.length;S+=3)R.x=s[S+0],R.y=s[S+1],R.z=s[S+2],R.normalize().multiplyScalar(C),s[S+0]=R.x,s[S+1]=R.y,s[S+2]=R.z}function h(){const C=new M;for(let R=0;R<s.length;R+=3){C.x=s[R+0],C.y=s[R+1],C.z=s[R+2];const S=_(C)/2/Math.PI+.5,H=x(C)/Math.PI+.5;r.push(S,1-H)}v(),m()}function m(){for(let C=0;C<r.length;C+=6){const R=r[C+0],S=r[C+2],H=r[C+4],D=Math.max(R,S,H),L=Math.min(R,S,H);D>.9&&L<.1&&(R<.2&&(r[C+0]+=1),S<.2&&(r[C+2]+=1),H<.2&&(r[C+4]+=1))}}function f(C){s.push(C.x,C.y,C.z)}function g(C,R){const S=C*3;R.x=e[S+0],R.y=e[S+1],R.z=e[S+2]}function v(){const C=new M,R=new M,S=new M,H=new M,D=new Ce,L=new Ce,z=new Ce;for(let A=0,E=0;A<s.length;A+=9,E+=6){C.set(s[A+0],s[A+1],s[A+2]),R.set(s[A+3],s[A+4],s[A+5]),S.set(s[A+6],s[A+7],s[A+8]),D.set(r[E+0],r[E+1]),L.set(r[E+2],r[E+3]),z.set(r[E+4],r[E+5]),H.copy(C).add(R).add(S).divideScalar(3);const U=_(H);w(D,E+0,C,U),w(L,E+2,R,U),w(z,E+4,S,U)}}function w(C,R,S,H){H<0&&C.x===1&&(r[R]=C.x-1),S.x===0&&S.z===0&&(r[R]=H/2/Math.PI+.5)}function _(C){return Math.atan2(C.z,-C.x)}function x(C){return Math.atan2(-C.y,Math.sqrt(C.x*C.x+C.z*C.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ca(e.vertices,e.indices,e.radius,e.details)}}class mt extends ca{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,a=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-i,0,-a,i,0,a,-i,0,a,i,-a,-i,0,-a,i,0,a,-i,0,a,i,0,-i,0,-a,i,0,-a,-i,0,a,i,0,a],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,r,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new mt(e.radius,e.detail)}}class Vr extends ca{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,a=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Vr(e.radius,e.detail)}}class Wr extends ca{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,a,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Wr(e.radius,e.detail)}}class aa extends Lt{constructor(e=.5,t=1,i=32,a=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:a,thetaStart:s,thetaLength:r},i=Math.max(3,i),a=Math.max(1,a);const o=[],u=[],l=[],h=[];let m=e;const f=(t-e)/a,g=new M,v=new Ce;for(let w=0;w<=a;w++){for(let _=0;_<=i;_++){const x=s+_/i*r;g.x=m*Math.cos(x),g.y=m*Math.sin(x),u.push(g.x,g.y,g.z),l.push(0,0,1),v.x=(g.x/t+1)/2,v.y=(g.y/t+1)/2,h.push(v.x,v.y)}m+=f}for(let w=0;w<a;w++){const _=w*(i+1);for(let x=0;x<i;x++){const C=x+_,R=C,S=C+i+1,H=C+i+2,D=C+1;o.push(R,S,D),o.push(S,H,D)}}this.setIndex(o),this.setAttribute("position",new ft(u,3)),this.setAttribute("normal",new ft(l,3)),this.setAttribute("uv",new ft(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new aa(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class vt extends Lt{constructor(e=1,t=32,i=16,a=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const u=Math.min(r+o,Math.PI);let l=0;const h=[],m=new M,f=new M,g=[],v=[],w=[],_=[];for(let x=0;x<=i;x++){const C=[],R=x/i;let S=0;x===0&&r===0?S=.5/t:x===i&&u===Math.PI&&(S=-.5/t);for(let H=0;H<=t;H++){const D=H/t;m.x=-e*Math.cos(a+D*s)*Math.sin(r+R*o),m.y=e*Math.cos(r+R*o),m.z=e*Math.sin(a+D*s)*Math.sin(r+R*o),v.push(m.x,m.y,m.z),f.copy(m).normalize(),w.push(f.x,f.y,f.z),_.push(D+S,1-R),C.push(l++)}h.push(C)}for(let x=0;x<i;x++)for(let C=0;C<t;C++){const R=h[x][C+1],S=h[x][C],H=h[x+1][C],D=h[x+1][C+1];(x!==0||r>0)&&g.push(R,S,D),(x!==i-1||u<Math.PI)&&g.push(S,H,D)}this.setIndex(g),this.setAttribute("position",new ft(v,3)),this.setAttribute("normal",new ft(w,3)),this.setAttribute("uv",new ft(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ne extends Lt{constructor(e=1,t=.4,i=12,a=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:a,arc:s},i=Math.floor(i),a=Math.floor(a);const r=[],o=[],u=[],l=[],h=new M,m=new M,f=new M;for(let g=0;g<=i;g++)for(let v=0;v<=a;v++){const w=v/a*s,_=g/i*Math.PI*2;m.x=(e+t*Math.cos(_))*Math.cos(w),m.y=(e+t*Math.cos(_))*Math.sin(w),m.z=t*Math.sin(_),o.push(m.x,m.y,m.z),h.x=e*Math.cos(w),h.y=e*Math.sin(w),f.subVectors(m,h).normalize(),u.push(f.x,f.y,f.z),l.push(v/a),l.push(g/i)}for(let g=1;g<=i;g++)for(let v=1;v<=a;v++){const w=(a+1)*g+v-1,_=(a+1)*(g-1)+v-1,x=(a+1)*(g-1)+v,C=(a+1)*g+v;r.push(w,_,C),r.push(_,x,C)}this.setIndex(r),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(u,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ne(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ai extends Lt{constructor(e=new Gc(new M(-1,-1,0),new M(-1,1,0),new M(1,1,0)),t=64,i=1,a=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:a,closed:s};const r=e.computeFrenetFrames(t,s);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const o=new M,u=new M,l=new Ce;let h=new M;const m=[],f=[],g=[],v=[];w(),this.setIndex(v),this.setAttribute("position",new ft(m,3)),this.setAttribute("normal",new ft(f,3)),this.setAttribute("uv",new ft(g,2));function w(){for(let R=0;R<t;R++)_(R);_(s===!1?t:0),C(),x()}function _(R){h=e.getPointAt(R/t,h);const S=r.normals[R],H=r.binormals[R];for(let D=0;D<=a;D++){const L=D/a*Math.PI*2,z=Math.sin(L),A=-Math.cos(L);u.x=A*S.x+z*H.x,u.y=A*S.y+z*H.y,u.z=A*S.z+z*H.z,u.normalize(),f.push(u.x,u.y,u.z),o.x=h.x+i*u.x,o.y=h.y+i*u.y,o.z=h.z+i*u.z,m.push(o.x,o.y,o.z)}}function x(){for(let R=1;R<=t;R++)for(let S=1;S<=a;S++){const H=(a+1)*(R-1)+(S-1),D=(a+1)*R+(S-1),L=(a+1)*R+S,z=(a+1)*(R-1)+S;v.push(H,D,z),v.push(D,L,z)}}function C(){for(let R=0;R<=t;R++)for(let S=0;S<=a;S++)l.x=R/t,l.y=S/a,g.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ai(new Ip[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Oe extends Fi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mc,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xr extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Lp extends Xr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ks=new ht,Qo=new M,ec=new M;class Up{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Br,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Qo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qo),ec.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ec),t.updateMatrixWorld(),ks.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ks),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ks)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class zp extends Up{constructor(){super(new Uc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Np extends Xr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new zp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Fp extends Xr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class rg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=tc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=tc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function tc(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pr);function Ga(n,e){const t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function qr(n,e){const t=Math.floor(n),i=Math.floor(e),a=n-t,s=e-i,r=a*a*(3-2*a),o=s*s*(3-2*s),u=Ga(t,i),l=Ga(t+1,i),h=Ga(t,i+1),m=Ga(t+1,i+1);return u+(l-u)*r+(h-u)*o+(u-l-h+m)*r*o}function nc(n,e,t=4){let i=0,a=.5,s=1;for(let r=0;r<t;r++)i+=qr(n*s,e*s)*a,s*=2,a*=.5;return i}function Qa(n,e,t){const i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)}function Op(n,e,t){return n+(e-n)*t}const es=640,ic=180,Bp=[[180,-90,46,8],[-210,150,30,5.5],[95,230,18,3.2],[-70,-250,36,6],[250,80,14,2.4],[-160,-40,12,2]];function kp(n,e,t,i,a,s){const r=n-t,o=e-i,u=Math.sqrt(r*r+o*o);if(u>a)return 0;const l=u/a,h=-s*(1-l*l),m=s*.28*Math.exp(-((l-.86)*(l-.86))/.018);return h+m}const Hp=[[0,0,48,100],[52,24,18,36],[22,82,14,28],[80,-44,40,60],[112,-83,18,30],[-32,-98,16,26],[-88,-188,24,42],[-68,-16,16,28],[22,-112,12,20],[-6,-108,18,32],[36,72,16,32],[-24,44,16,32],[-32,-148,12,22],[-64,-90,10,18],[-50,-100,16,28],[38,-126,12,20],[-60,-148,8,14],[-64,-118,8,14],[-18,-88,10,18],[68,-10,12,20],[-22,-88,8,14],[-48,68,16,32],[78,56,16,32],[-13,-134,16,28],[8,-142,12,20],[135,-40,20,34],[68,6,12,20],[-28,-138,8,14],[-36,-74,14,24],[2,-22,8,14],[-50,-72,10,16],[10,-124,12,20],[20,8,12,20],[-16,136,28,48],[158,-62,22,36],[158,-28,10,16],[-96,-16,16,26],[-78,-172,12,20],[66,-74,14,22],[18,-152,12,18],[-20,-100,10,16],[-8,-162,10,16],[8,-98,10,16],[48,-70,10,16],[-68,12,12,18],[22,-80,10,16],[52,-112,12,18],[-90,-158,10,16],[8,-78,10,16],[-8,-88,10,16],[-96,4,10,16],[142,-62,8,14],[28,-140,10,16],[-90,-148,8,14],[12,18,8,12],[36,8,10,16],[36,-6,10,16],[-50,4,10,16],[-58,-142,10,16],[-32,-22,10,16],[66,-90,10,16],[22,-98,10,16],[172,-48,10,16],[38,-104,10,16],[24,-128,8,14],[-80,20,10,16],[6,148,8,14],[-64,80,10,16],[-80,32,10,16],[100,-22,8,14],[-22,-56,10,16],[-124,-188,12,20],[-38,16,10,16],[70,-112,12,18],[16,48,8,14],[-58,-36,12,16],[50,4,10,18],[-40,-168,12,16],[82,-90,10,14],[4,-148,10,14],[148,-40,10,14],[124,-70,10,14],[96,-44,10,14],[-84,8,10,14],[16,-86,10,14],[135,-22,12,14],[100,-70,12,14],[82,-28,12,14],[-68,2,12,14],[122,-40,8,22],[98,-83,8,22],[70,-44,8,22],[-102,-158,10,14],[-18,-78,12,14],[-64,-184,12,16],[32,-152,10,12],[-96,16,16,10],[82,-74,16,14],[-78,-156,10,12],[-110,8,10,12],[-110,20,10,12],[-110,32,10,12],[-122,8,12,12],[-122,20,10,12],[-8,-98,12,12],[-22,-98,10,12],[8,-88,10,12],[-78,-36,12,12],[96,-90,10,12],[-5,-78,8,10],[16,-148,10,12],[-90,-136,10,12],[16,-74,8,10],[-48,-138,12,14],[52,-126,12,12],[70,-126,10,12],[0,-68,8,10],[48,-70,8,10],[-46,-148,8,10],[-38,16,8,10],[38,-104,8,10],[172,-48,8,10],[-16,36,8,10],[4,-138,8,10],[68,6,8,10],[66,-104,12,10],[80,-104,8,8],[18,136,10,8],[22,-98,8,8],[172,-62,10,10],[-92,-184,10,10],[-32,-88,10,10],[96,-104,10,10],[-28,-8,8,8],[-28,6,8,8],[-46,-88,10,10],[-50,-22,10,10],[-80,20,10,10],[-38,28,10,10],[-46,-132,10,10],[24,-118,10,10],[-110,-136,12,10],[-22,-110,10,10],[158,-48,12,10],[110,-90,10,10],[8,-110,10,10],[-70,-148,10,10],[96,-28,10,8],[124,-83,10,8],[148,-22,10,8],[46,-152,10,10],[32,136,10,10],[-8,-110,10,10],[110,-104,10,10],[70,-28,10,10],[136,-70,10,10]];function I(n,e){let t=0;t+=(nc(n*.0038,e*.0038,5)-.45)*16,t+=(nc(n*.018,e*.018,3)-.5)*2.8,t+=(qr(n*.07,e*.07)-.5)*.45;for(const[i,a,s,r]of Bp)t+=kp(n,e,i,a,s,r);for(const[i,a,s,r]of Hp){const o=Qa(r,s,Math.hypot(n-i,e-a));t=Op(t,.35+t*.12,o)}return t}function Gp(n,e,t,i){const a=new We(9059108),s=new We(12085818),r=new We(12880469),o=new We(4858904),u=Qa(-4,8,t),l=a.clone().lerp(s,u).lerp(r,Qa(6,14,t)*.35);i>.45&&l.lerp(o,Math.min(.55,(i-.45)*1.4));const h=qr(n*.11,e*.11);l.offsetHSL(0,(h-.5)*.08,(h-.5)*.06);const m=Vp(n,e);return m>0&&l.lerp(new We(5911332),m*.85),l}function Vp(n,e){const t=[{ax:0,az:18,bx:0,bz:-124},{ax:0,az:-40,bx:84,bz:-42},{ax:0,az:-40,bx:-68,bz:-16},{ax:0,az:-90,bx:-55,bz:-150},{ax:18,az:-70,bx:52,bz:-88},{ax:12,az:8,bx:50,bz:22},{ax:16,az:28,bx:22,bz:78},{ax:-58,az:-158,bx:-90,bz:-190},{ax:-14,az:-104,bx:-32,bz:-98},{ax:84,az:-42,bx:112,bz:-83},{ax:0,az:-108,bx:22,bz:-112},{ax:22,az:-112,bx:48,bz:-86},{ax:-6,az:-116,bx:-18,bz:-138},{ax:0,az:8,bx:-15,bz:-8},{ax:16,az:28,bx:36,bz:72},{ax:0,az:18,bx:-24,bz:44},{ax:-58,az:-158,bx:-64,bz:-90},{ax:-64,az:-90,bx:-68,bz:-16},{ax:-18,az:-138,bx:-32,bz:-148},{ax:-32,az:-98,bx:-46,bz:-100},{ax:22,az:-112,bx:38,bz:-126},{ax:-58,az:-158,bx:-60,bz:-148},{ax:-64,az:-118,bx:-18,bz:-88},{ax:84,az:-42,bx:68,bz:-10},{ax:-6,az:-108,bx:-18,bz:-88},{ax:0,az:18,bx:-48,bz:68},{ax:16,az:28,bx:78,bz:56},{ax:-6,az:-116,bx:-13,bz:-134},{ax:38,az:-126,bx:8,bz:-142},{ax:-13,az:-134,bx:8,bz:-142},{ax:112,az:-83,bx:135,bz:-40},{ax:68,az:-10,bx:68,bz:6},{ax:-13,az:-134,bx:-28,bz:-138},{ax:-46,az:-108,bx:-20,bz:-132},{ax:-6,az:-108,bx:-6,bz:-132},{ax:-6,az:-96,bx:2,bz:-22},{ax:-32,az:-98,bx:-36,bz:-74},{ax:-40,az:-76,bx:-32,bz:-98},{ax:-40,az:-76,bx:-50,bz:-72},{ax:-6,az:-132,bx:10,bz:-124},{ax:10,az:-124,bx:8,bz:-142},{ax:0,az:8,bx:20,bz:8},{ax:22,az:82,bx:-16,bz:136},{ax:0,az:32,bx:-16,bz:136},{ax:135,az:-40,bx:158,bz:-62},{ax:-68,az:-16,bx:-96,bz:-16},{ax:-58,az:-158,bx:-78,bz:-172},{ax:48,az:-86,bx:66,bz:-74},{ax:8,az:-142,bx:18,bz:-152},{ax:-32,az:-148,bx:-8,bz:-162},{ax:-6,az:-108,bx:8,bz:-98},{ax:22,az:-112,bx:8,bz:-98},{ax:48,az:-86,bx:48,bz:-70},{ax:-68,az:-16,bx:-68,bz:12},{ax:-36,az:-74,bx:22,bz:-80},{ax:48,az:-86,bx:22,bz:-80},{ax:22,az:-112,bx:52,bz:-112},{ax:38,az:-126,bx:52,bz:-112},{ax:-78,az:-172,bx:-90,bz:-158},{ax:8,az:-98,bx:8,bz:-78},{ax:22,az:-80,bx:8,bz:-78},{ax:8,az:-98,bx:-8,bz:-88},{ax:-22,az:-88,bx:-8,bz:-88},{ax:-96,az:-16,bx:-96,bz:4},{ax:158,az:-62,bx:142,bz:-62},{ax:8,az:-142,bx:28,bz:-140},{ax:18,az:-152,bx:28,bz:-140},{ax:-90,az:-158,bx:-90,bz:-148},{ax:5,az:16,bx:12,bz:18},{ax:20,az:8,bx:36,bz:8},{ax:36,az:8,bx:36,bz:-6},{ax:-68,az:4,bx:-50,bz:4},{ax:-58,az:-158,bx:-58,bz:-142},{ax:-15,az:-8,bx:-32,bz:-22},{ax:66,az:-74,bx:66,bz:-90},{ax:8,az:-98,bx:22,bz:-98},{ax:158,az:-62,bx:172,bz:-48},{ax:22,az:-112,bx:38,bz:-104},{ax:10,az:-124,bx:24,bz:-128},{ax:-68,az:12,bx:-80,bz:20},{ax:-16,az:136,bx:6,bz:148},{ax:-48,az:68,bx:-64,bz:80},{ax:-80,az:20,bx:-80,bz:32},{ax:135,az:-40,bx:100,bz:-22},{ax:100,az:-22,bx:68,bz:-10},{ax:-36,az:-74,bx:-22,bz:-56},{ax:-90,az:-158,bx:-124,bz:-188},{ax:-50,az:4,bx:-38,bz:16},{ax:52,az:-112,bx:70,bz:-112},{ax:22,az:82,bx:16,bz:48},{ax:-58,az:-142,bx:-58,bz:-36},{ax:-58,az:-36,bx:-68,bz:-16},{ax:36,az:8,bx:50,bz:4},{ax:-58,az:-158,bx:-40,bz:-168},{ax:66,az:-90,bx:82,bz:-90},{ax:-8,az:-162,bx:4,bz:-148},{ax:135,az:-40,bx:148,bz:-40},{ax:112,az:-83,bx:124,bz:-70},{ax:82,az:-44,bx:96,bz:-44},{ax:-68,az:12,bx:-84,bz:8},{ax:-8,az:-88,bx:16,bz:-86},{ax:135,az:-40,bx:135,bz:-22},{ax:124,az:-70,bx:100,bz:-70},{ax:82,az:-44,bx:82,bz:-28},{ax:-68,az:-16,bx:-68,bz:2},{ax:135,az:-40,bx:122,bz:-40},{ax:112,az:-83,bx:98,bz:-83},{ax:82,az:-44,bx:70,bz:-44},{ax:-90,az:-158,bx:-102,bz:-158},{ax:8,az:-78,bx:-18,bz:-78},{ax:-78,az:-172,bx:-64,bz:-184},{ax:18,az:-152,bx:32,bz:-152},{ax:-96,az:4,bx:-96,bz:16},{ax:66,az:-74,bx:82,bz:-74},{ax:-78,az:-172,bx:-78,bz:-156},{ax:-96,az:4,bx:-110,bz:8},{ax:-110,az:8,bx:-110,bz:20},{ax:-110,az:20,bx:-110,bz:32},{ax:-110,az:8,bx:-122,bz:8},{ax:-122,az:8,bx:-122,bz:20},{ax:8,az:-98,bx:-8,bz:-98},{ax:-8,az:-98,bx:-22,bz:-98},{ax:-8,az:-88,bx:8,bz:-88},{ax:-58,az:-36,bx:-78,bz:-36},{ax:82,az:-90,bx:96,bz:-90},{ax:8,az:-78,bx:-5,bz:-78},{ax:4,az:-148,bx:16,bz:-148},{ax:-90,az:-148,bx:-90,bz:-136},{ax:16,az:-86,bx:16,bz:-74},{ax:-32,az:-148,bx:-48,bz:-138},{ax:52,az:-112,bx:52,bz:-126},{ax:52,az:-126,bx:70,bz:-126},{ax:0,az:-68,bx:0,bz:-118},{ax:48,az:-70,bx:90,bz:-80},{ax:-46,az:-148,bx:-90,bz:-148},{ax:-38,az:16,bx:-68,bz:12},{ax:38,az:-104,bx:52,bz:-112},{ax:172,az:-48,bx:158,bz:-62},{ax:-16,az:36,bx:4,bz:32},{ax:4,az:-138,bx:-18,bz:-138},{ax:68,az:6,bx:50,bz:4},{ax:66,az:-90,bx:66,bz:-104},{ax:66,az:-104,bx:80,bz:-104},{ax:6,az:148,bx:18,bz:136},{ax:8,az:-98,bx:22,bz:-98},{ax:172,az:-48,bx:172,bz:-62},{ax:-64,az:-184,bx:-92,bz:-184},{ax:-18,az:-88,bx:-32,bz:-88},{ax:96,az:-90,bx:96,bz:-104},{ax:-15,az:-8,bx:-28,bz:-8},{ax:-28,az:-8,bx:-28,bz:6},{ax:-32,az:-88,bx:-46,bz:-88},{ax:-50,az:4,bx:-50,bz:-22},{ax:-68,az:12,bx:-80,bz:20},{ax:-38,az:16,bx:-38,bz:28},{ax:-58,az:-142,bx:-46,bz:-132},{ax:38,az:-104,bx:24,bz:-118},{ax:-90,az:-136,bx:-110,bz:-136},{ax:-32,az:-98,bx:-22,bz:-110},{ax:172,az:-62,bx:158,bz:-48},{ax:96,az:-90,bx:110,bz:-90},{ax:8,az:-98,bx:8,bz:-110},{ax:-46,az:-148,bx:-70,bz:-148},{ax:82,az:-28,bx:96,bz:-28},{ax:124,az:-70,bx:124,bz:-83},{ax:148,az:-40,bx:148,bz:-22},{ax:32,az:-152,bx:46,bz:-152},{ax:18,az:136,bx:32,bz:136},{ax:-8,az:-98,bx:-8,bz:-110},{ax:96,az:-104,bx:110,bz:-104},{ax:82,az:-28,bx:70,bz:-28},{ax:124,az:-70,bx:136,bz:-70}];let i=0;for(const a of t){const s=a.bx-a.ax,r=a.bz-a.az,o=s*s+r*r;let u=((n-a.ax)*s+(e-a.az)*r)/o;u=Math.min(1,Math.max(0,u));const l=a.ax+s*u,h=a.az+r*u,m=Math.hypot(n-l,e-h);i=Math.max(i,Qa(5.4,1.6,m))}return i}function Wp(){const n=new Oi(es,es,ic,ic);n.rotateX(-Math.PI/2);const e=n.attributes.position,t=new Float32Array(e.count*3);for(let r=0;r<e.count;r++){const o=e.getX(r),u=e.getZ(r),l=I(o,u);e.setY(r,l)}n.computeVertexNormals();const i=n.attributes.normal;for(let r=0;r<e.count;r++){const o=1-Math.abs(i.getY(r)),u=Gp(e.getX(r),e.getZ(r),e.getY(r),o);t[r*3]=u.r,t[r*3+1]=u.g,t[r*3+2]=u.b}n.setAttribute("color",new Wt(t,3));const a=new Oe({vertexColors:!0,roughness:.94,metalness:.02,flatShading:!1}),s=new dt(n,a);return s.receiveShadow=!0,s.name="terrain",s}function Xp(){const n=new O;n.name="rocks";const e=[new mt(1,0),new Vr(1,0),new Wr(1,0)],t=[new Oe({color:8011048,roughness:.95,flatShading:!0}),new Oe({color:6040604,roughness:.92,flatShading:!0}),new Oe({color:9260592,roughness:.9,flatShading:!0})],i=new Mt,a=[220,160,90];for(let s=0;s<3;s++){const r=new mp(e[s],t[s],a[s]);r.castShadow=!0,r.receiveShadow=!0;let o=0,u=0;for(;o<a[s]&&u<a[s]*8;){u++;const l=(Ln(o,s,1)-.5)*es*.92,h=(Ln(o,s,2)-.5)*es*.92;if(Math.hypot(l,h)<42||Math.hypot(l-52,h-24)<22||Math.hypot(l-22,h-82)<18||Math.hypot(l-80,h+44)<44||Math.hypot(l-112,h+83)<22||Math.hypot(l+32,h+98)<20||Math.hypot(l+88,h+188)<30||Math.hypot(l-22,h+112)<16||Math.hypot(l+68,h+16)<22||Math.hypot(l-36,h-72)<20||Math.hypot(l+24,h-44)<20||Math.hypot(l+32,h+148)<16||Math.hypot(l+64,h+90)<14||Math.hypot(l+50,h+100)<22||Math.hypot(l-38,h+126)<16||Math.hypot(l+18,h+88)<14||Math.hypot(l-68,h+10)<16||Math.hypot(l+60,h+148)<12||Math.hypot(l+64,h+118)<12||Math.hypot(l+48,h-68)<20||Math.hypot(l-78,h-56)<20||Math.hypot(l+13,h+134)<20||Math.hypot(l-8,h+142)<16||Math.hypot(l-135,h+40)<24||Math.hypot(l-68,h-6)<16||Math.hypot(l+28,h+138)<12||Math.hypot(l+36,h+74)<18||Math.hypot(l-2,h+22)<12||Math.hypot(l+50,h+72)<14||Math.hypot(l-10,h+124)<16||Math.hypot(l-20,h-8)<16||Math.hypot(l+16,h-136)<32||Math.hypot(l-158,h+62)<24||Math.hypot(l+96,h+16)<20||Math.hypot(l+78,h+172)<16||Math.hypot(l-66,h+74)<16||Math.hypot(l-18,h+152)<14||Math.hypot(l+20,h+100)<14||Math.hypot(l+8,h+162)<14||Math.hypot(l-8,h+98)<14||Math.hypot(l-48,h+70)<14||Math.hypot(l+68,h-12)<16||Math.hypot(l-22,h+80)<14||Math.hypot(l-52,h+112)<16||Math.hypot(l+90,h+158)<14||Math.hypot(l-8,h+78)<14||Math.hypot(l+8,h+88)<14||Math.hypot(l+96,h-4)<14||Math.hypot(l-142,h+62)<14||Math.hypot(l-28,h+140)<14||Math.hypot(l+90,h+148)<12||Math.hypot(l-12,h-18)<12||Math.hypot(l-36,h-8)<14||Math.hypot(l-36,h+6)<14||Math.hypot(l+50,h-4)<14||Math.hypot(l+58,h+142)<14||Math.hypot(l+32,h+22)<14||Math.hypot(l-66,h+90)<14||Math.hypot(l-22,h+98)<14||Math.hypot(l-172,h+48)<14||Math.hypot(l-38,h+104)<14||Math.hypot(l-24,h+128)<12||Math.hypot(l+80,h-20)<14||Math.hypot(l+110,h+136)<14||Math.hypot(l+22,h+110)<14||Math.hypot(l-158,h+48)<14||Math.hypot(l+38,h-28)<14||Math.hypot(l+46,h+132)<14||Math.hypot(l-24,h+118)<14||Math.hypot(l-6,h-148)<12||Math.hypot(l+64,h-80)<14||Math.hypot(l+80,h-32)<14||Math.hypot(l-100,h+22)<12||Math.hypot(l+22,h+56)<14||Math.hypot(l+124,h+188)<16||Math.hypot(l+38,h-16)<14||Math.hypot(l-70,h+112)<16||Math.hypot(l-16,h-48)<12||Math.hypot(l+58,h+36)<14||Math.hypot(l-50,h-4)<14||Math.hypot(l+40,h+168)<14||Math.hypot(l-82,h+90)<14||Math.hypot(l-4,h+148)<14||Math.hypot(l-148,h+40)<14||Math.hypot(l-124,h+70)<14||Math.hypot(l-96,h+44)<14||Math.hypot(l+84,h-8)<14||Math.hypot(l-16,h+86)<14||Math.hypot(l-135,h+22)<14||Math.hypot(l-100,h+70)<14||Math.hypot(l-82,h+28)<14||Math.hypot(l+68,h-2)<14||Math.hypot(l-122,h+40)<14||Math.hypot(l-98,h+83)<14||Math.hypot(l-70,h+44)<14||Math.hypot(l+102,h+158)<14||Math.hypot(l+18,h+78)<14||Math.hypot(l+64,h+184)<14||Math.hypot(l-32,h+152)<14||Math.hypot(l+96,h-16)<14||Math.hypot(l-82,h+74)<14||Math.hypot(l+78,h+156)<14||Math.hypot(l+110,h-8)<14||Math.hypot(l+110,h-20)<14||Math.hypot(l+110,h-32)<14||Math.hypot(l+122,h-8)<14||Math.hypot(l+122,h-20)<14||Math.hypot(l+8,h+98)<14||Math.hypot(l+22,h+98)<14||Math.hypot(l-8,h+88)<14||Math.hypot(l+78,h+36)<14||Math.hypot(l-96,h+90)<14||Math.hypot(l+5,h+78)<12||Math.hypot(l-16,h+148)<14||Math.hypot(l+90,h+136)<14||Math.hypot(l-16,h+74)<12||Math.hypot(l+48,h+138)<14||Math.hypot(l-52,h+126)<14||Math.hypot(l-70,h+126)<14||Math.hypot(l-0,h+68)<12||Math.hypot(l-48,h+70)<12||Math.hypot(l+46,h+148)<12||Math.hypot(l+38,h-16)<12||Math.hypot(l-38,h+104)<12||Math.hypot(l-172,h+48)<12||Math.hypot(l+16,h-36)<12||Math.hypot(l-4,h+138)<12||Math.hypot(l-68,h-6)<12||Math.hypot(l-66,h+104)<14||Math.hypot(l-80,h+104)<12||Math.hypot(l-18,h-136)<14||Math.hypot(l-22,h+98)<12||Math.hypot(l-172,h+62)<14||Math.hypot(l+92,h+184)<14||Math.hypot(l+32,h+88)<14||Math.hypot(l-96,h+104)<14||Math.hypot(l+28,h+8)<12||Math.hypot(l+28,h-6)<12||Math.hypot(l+46,h+88)<14||Math.hypot(l+50,h+22)<14||Math.hypot(l+80,h-20)<14||Math.hypot(l-110,h+90)<14||Math.hypot(l-8,h+110)<14||Math.hypot(l+70,h+148)<14||Math.hypot(l-96,h+28)<14||Math.hypot(l-124,h+83)<14||Math.hypot(l-148,h+22)<14||Math.hypot(l-46,h+152)<14||Math.hypot(l-32,h-136)<14||Math.hypot(l+8,h+110)<14||Math.hypot(l-110,h+104)<14||Math.hypot(l-70,h+28)<14||Math.hypot(l-136,h+70)<14)continue;const m=I(l,h),f=.35+Ln(o,s,3)*(s===2?2.8:1.4);i.position.set(l,m+f*.25,h),i.rotation.set(Ln(o,s,4)*6,Ln(o,s,5)*6,Ln(o,s,6)*6),i.scale.set(f,f*(.6+Ln(o,s,7)*.7),f*(.7+Ln(o,s,8)*.5)),i.updateMatrix(),r.setMatrixAt(o,i.matrix),o++}r.count=o,n.add(r)}return n}function Ln(n,e,t){const i=Math.sin(n*12.9898+e*78.233+t*45.164)*43758.5453;return i-Math.floor(i)}const qp=`
varying vec3 vWorld;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWorld = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}
`,Yp=`
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
`;function Kp(n){const e=new vt(900,32,20),t=new Sn({vertexShader:qp,fragmentShader:Yp,uniforms:{uSunDir:{value:n.clone().normalize()}},side:It,depthWrite:!1}),i=new dt(e,t);return i.name="sky",i}function Jp(n){const e=new O,t=n.clone().normalize(),i=new Np(16769456,2.15);i.position.copy(t.clone().multiplyScalar(180)),i.castShadow=!0,i.shadow.mapSize.set(1536,1536),i.shadow.camera.near=10,i.shadow.camera.far=420,i.shadow.camera.left=-130,i.shadow.camera.right=130,i.shadow.camera.top=130,i.shadow.camera.bottom=-130,i.shadow.bias=-8e-4,e.add(i);const a=new Lp(14727304,6959128,.55);e.add(a);const s=new Fp(12611648,.16);e.add(s);const r=new dt(new vt(7,16,16),new Or({color:16773572}));return r.position.copy(t.clone().multiplyScalar(420)),e.add(r),e.name="sun",e}function Zp(){const n=new O;n.name="mountains";const e=new Oe({color:7024156,roughness:1,flatShading:!0}),t=[[0,-300,18,70],[80,-310,14,52],[-90,-305,16,60],[220,-280,12,40],[-240,-270,13,48],[300,-40,15,55],[305,80,11,38],[-310,20,16,62],[-300,140,12,44],[40,310,17,58],[-70,300,13,46],[160,290,10,36]];for(const[i,a,s,r]of t){const o=new ii(s,r,6),u=new dt(o,e),l=I(i,a)+r*.35;u.position.set(i,l,a),u.rotation.y=(i+a)*.01,n.add(u)}return n}function $p(){const e=new Float32Array(2100);for(let s=0;s<700;s++)e[s*3]=(Math.random()-.5)*220,e[s*3+1]=1+Math.random()*18,e[s*3+2]=(Math.random()-.5)*220;const t=new Lt;t.setAttribute("position",new Wt(e,3));const i=new kc({color:13934698,size:.18,transparent:!0,opacity:.35,depthWrite:!1}),a=new gp(t,i);return a.name="dust",a}function jp(n){n.fog=new Hr(12880472,.00155),n.background=new We(12880472)}const c={steel:new Oe({color:13225425,metalness:.88,roughness:.28}),steelDark:new Oe({color:9146518,metalness:.82,roughness:.38}),tiles:new Oe({color:1710620,metalness:.15,roughness:.72}),soot:new Oe({color:2763308,metalness:.4,roughness:.55}),pad:new Oe({color:7168600,metalness:.08,roughness:.88}),padRing:new Oe({color:4866876,metalness:.1,roughness:.8}),solar:new Oe({color:727603,metalness:.55,roughness:.22}),solarFrame:new Oe({color:10133670,metalness:.7,roughness:.35}),tankCh4:new Oe({color:12868132,metalness:.35,roughness:.45}),tankO2:new Oe({color:14212579,metalness:.4,roughness:.4}),hab:new Oe({color:13616824,metalness:.15,roughness:.62}),habDark:new Oe({color:6972508,metalness:.2,roughness:.55}),glass:new Oe({color:8963232,metalness:.1,roughness:.18,transparent:!0,opacity:.42,depthWrite:!1}),plant:new Oe({color:4160056,roughness:.85}),rover:new Oe({color:12106944,metalness:.55,roughness:.4}),roverDark:new Oe({color:3356218,metalness:.4,roughness:.5}),crate:new Oe({color:9080724,metalness:.45,roughness:.5}),ice:new Oe({color:14083823,metalness:.05,roughness:.35}),rust:new Oe({color:8011560,roughness:.9}),glowWarm:new Oe({color:16761994,emissive:16751178,emissiveIntensity:.85,roughness:.4}),glowPad:new Oe({color:16765056,emissive:16756800,emissiveIntensity:.7}),concrete:new Oe({color:9076852,roughness:.92}),lattice:new Oe({color:10133668,metalness:.7,roughness:.4}),graded:new Oe({color:6968134,roughness:.94,metalness:.04}),pipe:new Oe({color:8030868,metalness:.55,roughness:.4}),cable:new Oe({color:2762274,metalness:.35,roughness:.55}),robot:new Oe({color:13159632,metalness:.62,roughness:.38}),flagIce:new Oe({color:12966116,roughness:.72,metalness:.04}),flagDeposit:new Oe({color:12081704,roughness:.8,metalness:.06}),track:new Oe({color:4006936,roughness:.97}),roadBed:new Oe({color:6044202,roughness:.97,metalness:.02}),soil:new Oe({color:4861468,roughness:.96}),plantLeaf:new Oe({color:3107378,roughness:.88}),dish:new Oe({color:14210252,metalness:.38,roughness:.42}),suit:new Oe({color:15131352,metalness:.18,roughness:.55}),suitDark:new Oe({color:6052438,metalness:.35,roughness:.5}),visor:new Oe({color:12886090,metalness:.75,roughness:.18,emissive:3811336,emissiveIntensity:.28}),battery:new Oe({color:3817026,metalness:.48,roughness:.48})};function Qp(n,e="#1c120c",t="#f3e2cc"){const i=document.createElement("canvas");i.width=512,i.height=128;const a=i.getContext("2d");a.fillStyle=e,a.fillRect(0,0,512,128),a.strokeStyle=t,a.lineWidth=6,a.strokeRect(10,10,492,108),a.fillStyle=t;const s=n.length>12?36:n.length>8?44:n.length>5?54:64;a.font=`bold ${s}px sans-serif`,a.textAlign="center",a.textBaseline="middle",a.fillText(n,256,68);const r=new xp(i);return r.colorSpace=Ft,r}function d(n,e,t,i,a,s=0,r=0,o=0){const u=new dt(n,e);return u.position.set(t,i,a),u.rotation.set(s,r,o),u.castShadow=!0,u.receiveShadow=!0,u}function Ot(n,e,t=0){return[n,I(n,e)+t,e]}function b(n,e,t,i,a,s,r,o,u=0){const l=new Oe({map:Qp(n,e,t),side:ln,roughness:.55,metalness:.08}),h=new dt(new Oi(i,a),l);return h.position.set(s,r,o),h.rotation.y=u,h.castShadow=!1,h}function Ee(n,e,t,i=0,a=1){const s=I(e,t)+.85*a;n.add(d(new p(1.7*a,1.5*a,1.7*a),c.crate,e,s,t,0,i,0)),n.add(d(new p(1.78*a,.08,1.78*a),c.steelDark,e,s+.78*a,t,0,i,0))}function e1(){const n=new O;n.name="settlement";const e=[],t=[];n.add(Jn(0,0,{finished:!0}));const i=yi(0,0,{name:"starship",crewHab:!0});n.add(i),F1(e),t.push({id:"starship",name:"Crew hab Starship",position:new M(0,18,0)}),t.push({id:"eva",name:"EVA / airlock",position:new M(2,3,12)});const a=um();n.add(a),e.push({type:"box",x:12,z:18,w:6,d:3}),t.push({id:"evarack",name:"EVA suit rack",position:new M(12,3,18)}),n.add(Jn(52,24,{finished:!1}));const s=yi(52,24,{name:"cargo-starship",cargoOpen:!0});n.add(s),e.push({type:"cyl",x:52,z:24,r:7.4}),t.push({id:"cargo",name:"Cargo Starship",position:new M(52,18,24)}),n.add(Jn(36,72,{finished:!1}));const r=yi(36,72,{name:"cargo-3",cargoOpen:!0});n.add(r),e.push({type:"cyl",x:36,z:72,r:7.4}),t.push({id:"cargo3",name:"Cargo Starship 3",position:new M(36,18,72)}),n.add(ac(24,70)),n.add(Jn(-24,44,{finished:!1}));const o=yi(-24,44,{name:"cargo-4"});n.add(o),e.push({type:"cyl",x:-24,z:44,r:7.4}),t.push({id:"cargo4",name:"Cargo Starship 4",position:new M(-24,18,44)}),n.add(Jn(-48,68,{finished:!1}));const u=yi(-48,68,{name:"cargo-5",cargoOpen:!0});n.add(u),e.push({type:"cyl",x:-48,z:68,r:7.4}),t.push({id:"cargo5",name:"Window-2 cargo Starship",position:new M(-48,18,68)}),n.add(ac(-60,66));const l=Em();n.add(l),e.push({type:"box",x:-64,z:80,w:8,d:8}),t.push({id:"crane",name:"Window-2 cargo crane",position:new M(-64,8,80)}),n.add(Jn(78,56,{finished:!1}));const h=yi(78,56,{name:"cargo-6"});n.add(h),e.push({type:"cyl",x:78,z:56,r:7.4}),t.push({id:"cargo6",name:"Window-2 cargo Starship",position:new M(78,18,56)}),n.add(t1()),n.add(n1()),n.add(i1()),n.add(a1()),t.push({id:"prep",name:"Landing prep",position:new M(22,4,82)});const m=Im();n.add(m),e.push({type:"box",x:16,z:48,w:6,d:5});for(const[Gi,Vi]of[[4,68],[4,50],[4,32]])e.push({type:"cyl",x:Gi,z:Vi,r:.45});t.push({id:"aplights",name:"Pad approach lights",position:new M(16,4,48)});const f=T2();n.add(f),e.push({type:"box",x:-16,z:36,w:8,d:6}),t.push({id:"padflood",name:"Pad flood lights",position:new M(-16,4,36)}),n.add(q1()),e.push({type:"box",x:-38,z:148,w:10,d:8}),t.push({id:"pad2",name:"Next-window pad",position:new M(-16,6,136)}),t.push({id:"sinter",name:"Pad sinter rig",position:new M(-38,4,148)});const g=Sm();n.add(g),e.push({type:"box",x:6,z:148,w:6,d:5});for(const[Gi,Vi]of[[2,154],[-34,154],[2,118],[-34,118]])e.push({type:"cyl",x:Gi,z:Vi,r:.55});t.push({id:"beacons",name:"Pad 2 landing beacons",position:new M(6,5,148)});const v=D2();n.add(v),e.push({type:"box",x:18,z:136,w:10,d:6}),t.push({id:"roller",name:"Pad sinter roller",position:new M(18,4,136)});const w=tg();n.add(w),e.push({type:"box",x:32,z:136,w:10,d:8}),t.push({id:"pad2bricks",name:"Pad 2 sinter bricks",position:new M(32,4,136)});const _=s1();n.add(_),t.push({id:"solar",name:"Solar farm",position:new M(82,6,-44)});const x=Jm();n.add(x),e.push({type:"box",x:70,z:-44,w:1.2,d:22}),t.push({id:"fence1",name:"Farm 1 dust fence",position:new M(70,4,-44)});const C=km();n.add(C),e.push({type:"box",x:96,z:-44,w:10,d:8}),t.push({id:"comb1",name:"Farm 1 combiner",position:new M(96,4,-44)});const R=Xm();n.add(R),e.push({type:"box",x:82,z:-28,w:12,d:8}),t.push({id:"night1",name:"Farm 1 night store",position:new M(82,4,-28)});const S=$2();n.add(S),e.push({type:"box",x:96,z:-28,w:8,d:6}),t.push({id:"farm1light",name:"Farm 1 lights",position:new M(96,4,-28)});const H=ag();n.add(H),e.push({type:"box",x:70,z:-28,w:10,d:8}),t.push({id:"inv1",name:"Farm 1 spare inverter",position:new M(70,4,-28)});const D=p1();n.add(D),t.push({id:"solar2",name:"Solar field 2",position:new M(112,5,-83)});const L=Km();n.add(L),e.push({type:"box",x:98,z:-83,w:1.2,d:22}),t.push({id:"fence2",name:"Field 2 dust fence",position:new M(98,4,-83)});const z=Bm();n.add(z),e.push({type:"box",x:124,z:-70,w:10,d:8}),t.push({id:"comb2",name:"Field 2 combiner",position:new M(124,4,-70)});const A=Wm();n.add(A),e.push({type:"box",x:100,z:-70,w:12,d:8}),t.push({id:"night2",name:"Field 2 night store",position:new M(100,4,-70)});const E=j2();n.add(E),e.push({type:"box",x:124,z:-83,w:8,d:6}),t.push({id:"field2light",name:"Field 2 lights",position:new M(124,4,-83)});const U=sg();n.add(U),e.push({type:"box",x:136,z:-70,w:10,d:8}),t.push({id:"inv2",name:"Field 2 spare inverter",position:new M(136,4,-70)});const Y=B1();n.add(Y),t.push({id:"solar3",name:"Solar field 3",position:new M(135,5,-40)});const q=Ym();n.add(q),e.push({type:"box",x:122,z:-40,w:1.2,d:22}),t.push({id:"fence3",name:"Field 3 dust fence",position:new M(122,4,-40)});const Z=Om();n.add(Z),e.push({type:"box",x:148,z:-40,w:10,d:8}),t.push({id:"comb3",name:"Field 3 combiner",position:new M(148,4,-40)});const ne=Vm();n.add(ne),e.push({type:"box",x:135,z:-22,w:12,d:8}),t.push({id:"night3",name:"Field 3 night store",position:new M(135,4,-22)});const $=Q2();n.add($),e.push({type:"box",x:148,z:-22,w:8,d:6}),t.push({id:"field3light",name:"Field 3 lights",position:new M(148,4,-22)});const oe=K1();n.add(oe),e.push({type:"box",x:158,z:-28,w:12,d:8}),t.push({id:"solar4",name:"Solar field 4",position:new M(158,5,-62)});const J=E2();n.add(J),e.push({type:"box",x:172,z:-48,w:8,d:6}),t.push({id:"sol4light",name:"Field 4 lights",position:new M(172,4,-48)});const he=L2();n.add(he),e.push({type:"box",x:172,z:-62,w:10,d:8}),t.push({id:"inv4",name:"Field 4 spare inverter",position:new M(172,4,-62)});const xe=Y2();n.add(xe),e.push({type:"box",x:158,z:-48,w:12,d:8}),t.push({id:"night4",name:"Field 4 night store",position:new M(158,4,-48)});const Re=dm();n.add(Re),e.push({type:"box",x:142,z:-62,w:1.2,d:22}),t.push({id:"dustfence",name:"Solar dust fence",position:new M(142,4,-62)});const Xe=Mm();n.add(Xe),e.push({type:"box",x:172,z:-48,w:10,d:8}),t.push({id:"combiner",name:"Field 4 combiner",position:new M(172,4,-48)});const it=Am();n.add(it),e.push({type:"box",x:100,z:-22,w:8,d:6}),t.push({id:"trench",name:"Field 4 power trench",position:new M(100,3,-22)}),n.add(r1()),n.add(m1());const Q=c1();n.add(Q),e.push({type:"box",x:-68,z:-16,w:30,d:22}),t.push({id:"isru",name:"Sabatier ISRU",position:new M(-68,8,-16)});const ce=k2();n.add(ce),e.push({type:"box",x:-50,z:-22,w:10,d:8}),t.push({id:"catalyst",name:"Spare Sabatier catalyst",position:new M(-50,4,-22)});const Se=qm();n.add(Se),e.push({type:"box",x:-68,z:2,w:12,d:8}),t.push({id:"co2t1",name:"CO2 intake 1",position:new M(-68,5,2)});const ue=H2();n.add(ue),e.push({type:"box",x:-80,z:20,w:10,d:8}),t.push({id:"co2sp",name:"Spare CO2 compressor",position:new M(-80,4,20)});const Le=im();n.add(Le),e.push({type:"box",x:-68,z:12,w:16,d:6}),t.push({id:"radiators",name:"ISRU radiators",position:new M(-68,5,12)});const Fe=Hm();n.add(Fe),e.push({type:"box",x:-84,z:8,w:10,d:8}),t.push({id:"condense",name:"Sabatier condenser",position:new M(-84,5,8)});const qe=J1();n.add(qe),e.push({type:"box",x:-96,z:-16,w:18,d:18}),t.push({id:"isru2",name:"Sabatier train 2",position:new M(-96,8,-16)});const ut=lm();n.add(ut),e.push({type:"box",x:-96,z:4,w:12,d:8}),t.push({id:"co2cap",name:"CO2 intake 2",position:new M(-96,5,4)});const Ze=e2();n.add(Ze),e.push({type:"box",x:-96,z:16,w:16,d:6}),t.push({id:"radiators2",name:"ISRU radiators 2",position:new M(-96,5,16)});const gt=i2();n.add(gt),e.push({type:"box",x:-110,z:8,w:10,d:8}),t.push({id:"condense2",name:"Sabatier condenser 2",position:new M(-110,5,8)});const G=a2();n.add(G),e.push({type:"box",x:-110,z:20,w:10,d:8}),t.push({id:"chiller2",name:"CH4 liquefaction 2",position:new M(-110,5,20)});const Ut=s2();n.add(Ut),e.push({type:"box",x:-110,z:32,w:10,d:8}),t.push({id:"o2chill2",name:"O2 liquefaction 2",position:new M(-110,5,32)});const Ye=r2();n.add(Ye),e.push({type:"box",x:-122,z:8,w:12,d:8}),t.push({id:"electro2",name:"ISRU electrolysis 2",position:new M(-122,5,8)});const Ke=o2();n.add(Ke),e.push({type:"box",x:-122,z:20,w:10,d:8}),t.push({id:"h2tank2",name:"H2 recycle tank 2",position:new M(-122,5,20)});const De=mm();n.add(De),e.push({type:"box",x:-50,z:4,w:12,d:8}),t.push({id:"electro",name:"ISRU electrolysis",position:new M(-50,5,4)});const ot=b2();n.add(ot),e.push({type:"box",x:-38,z:16,w:8,d:6}),t.push({id:"isrulight",name:"ISRU plant lights",position:new M(-38,4,16)});const Pe=Pm();n.add(Pe),e.push({type:"box",x:-38,z:16,w:10,d:8}),t.push({id:"h2tank",name:"H2 recycle tank",position:new M(-38,5,16)});const P=G2();n.add(P),e.push({type:"box",x:-38,z:28,w:10,d:8}),t.push({id:"h2dry",name:"Spare H2 dryer",position:new M(-38,4,28)});const y=Lm();n.add(y),e.push({type:"box",x:-58,z:-36,w:12,d:8}),t.push({id:"pwater",name:"ISRU process water",position:new M(-58,5,-36)});const V=h2();n.add(V),e.push({type:"box",x:-78,z:-36,w:12,d:8}),t.push({id:"pwater2",name:"ISRU process water 2",position:new M(-78,5,-36)});const ee=bm();n.add(ee),e.push({type:"box",x:-80,z:20,w:10,d:8}),t.push({id:"chiller",name:"CH4 liquefaction",position:new M(-80,5,20)});const ie=Tm();n.add(ie),e.push({type:"box",x:-80,z:32,w:10,d:8}),t.push({id:"o2chill",name:"O2 liquefaction",position:new M(-80,5,32)}),n.add(o1());const j=l1();n.add(j),e.push({type:"box",x:-14,z:-104,w:14,d:8}),e.push({type:"box",x:2,z:-104,w:14,d:8}),e.push({type:"box",x:-6,z:-116,w:8,d:14}),t.push({id:"habs",name:"Hab cluster",position:new M(-6,5,-108)});const Te=g1();n.add(Te),e.push({type:"box",x:-32,z:-98,w:16,d:12}),t.push({id:"hab-kit",name:"Hab from cargo",position:new M(-32,5,-98)});const fe=q2();n.add(fe),e.push({type:"box",x:-22,z:-110,w:10,d:8}),t.push({id:"coupler",name:"Spare hab coupler",position:new M(-22,4,-110)});const _e=x1();n.add(_e),e.push({type:"box",x:-46,z:-108,w:14,d:8}),e.push({type:"box",x:-46,z:-94,w:14,d:8}),e.push({type:"box",x:-58,z:-102,w:8,d:14}),t.push({id:"pressure",name:"Pressure habs",position:new M(-50,5,-100)});const $e=N1();n.add($e),e.push({type:"box",x:-20,z:-132,w:14,d:8}),e.push({type:"box",x:-6,z:-132,w:14,d:8}),e.push({type:"box",x:-13,z:-142,w:8,d:14}),t.push({id:"hab3",name:"Hab street",position:new M(-13,5,-134)});const ae=H1();n.add(ae),bi(e,-33,-120,"x",28),bi(e,-6,-120,"z",24),bi(e,-4,-58,"z",70),e.push({type:"cyl",x:2,z:-22,r:1.6}),t.push({id:"corridors",name:"Pressurized neighborhood",position:new M(-20,4,-120)});const ve=G1();n.add(ve),e.push({type:"box",x:-30,z:-69,w:9,d:9}),e.push({type:"box",x:-38,z:-74.2,w:7,d:4.4}),bi(e,-36,-87,"z",24),bi(e,-45,-74,"x",12),t.push({id:"yard",name:"Construction yard",position:new M(-36,5,-74)}),t.push({id:"hab6",name:"Hab 6",position:new M(-40,5,-76)});const Ie=Rm();n.add(Ie),e.push({type:"box",x:-22,z:-56,w:10,d:8}),t.push({id:"regolith",name:"Regolith stockpile",position:new M(-22,4,-56)});const Ue=V1();n.add(Ue),e.push({type:"box",x:-53,z:-72,w:6,d:7}),t.push({id:"med",name:"Crew ops / medical",position:new M(-50,5,-72)});const Me=W1();n.add(Me),e.push({type:"box",x:10,z:-124,w:14,d:10}),bi(e,2,-128,"x",10),t.push({id:"commons",name:"Crew commons / mess",position:new M(10,5,-124)});const Je=d1();n.add(Je),e.push({type:"box",x:22,z:-112,w:16,d:10}),e.push({type:"box",x:32,z:-112,w:8,d:6}),t.push({id:"greenhouse",name:"CO2 life support",position:new M(22,4,-112)});const He=sm();n.add(He),e.push({type:"box",x:52,z:-112,w:14,d:9}),t.push({id:"greenhouse2",name:"Greenhouse 2",position:new M(52,4,-112)});const at=S2();n.add(at),e.push({type:"box",x:38,z:-104,w:8,d:6}),t.push({id:"ghlight",name:"Greenhouse lights",position:new M(38,4,-104)});const F=Dm();n.add(F),e.push({type:"box",x:70,z:-112,w:12,d:8}),t.push({id:"food3",name:"Grow vault 4",position:new M(70,4,-112)});const de=wm();n.add(de),e.push({type:"box",x:38,z:-104,w:10,d:6}),t.push({id:"ghfilter",name:"Grow dust filter",position:new M(38,4,-104)});const K=W2();n.add(K),e.push({type:"box",x:24,z:-118,w:10,d:8}),t.push({id:"ghf2",name:"Spare grow dust filter",position:new M(24,4,-118)});const te=_2();n.add(te),e.push({type:"box",x:52,z:-126,w:12,d:8}),t.push({id:"ghwater",name:"Grow process water",position:new M(52,4,-126)});const ge=v2();n.add(ge),e.push({type:"box",x:70,z:-126,w:10,d:8}),t.push({id:"nutrient",name:"Grow nutrient skid",position:new M(70,4,-126)});const pe=tm();n.add(pe),e.push({type:"box",x:8,z:-98,w:12,d:8}),t.push({id:"eclss",name:"Hab ECLSS / CO2 scrub",position:new M(8,4,-98)});const Be=I2();n.add(Be),e.push({type:"box",x:22,z:-98,w:8,d:6}),t.push({id:"blower",name:"Hab spare blower",position:new M(22,4,-98)});const pt=c2();n.add(pt),e.push({type:"box",x:-8,z:-98,w:12,d:8}),t.push({id:"eclss2",name:"Hab ECLSS 2",position:new M(-8,4,-98)});const bt=J2();n.add(bt),e.push({type:"box",x:8,z:-110,w:10,d:8}),t.push({id:"amine",name:"Hab spare amine bed",position:new M(8,4,-110)});const nt=ng();n.add(nt),e.push({type:"box",x:-8,z:-110,w:10,d:8}),t.push({id:"regulator",name:"Hab spare pressure regulator",position:new M(-8,4,-110)});const Bt=vm();n.add(Bt),e.push({type:"box",x:22,z:-98,w:10,d:8}),t.push({id:"waste",name:"Waste / water recovery",position:new M(22,4,-98)});const Yt=l2();n.add(Yt),e.push({type:"box",x:-22,z:-98,w:10,d:8}),t.push({id:"waste2",name:"Waste recovery 2",position:new M(-22,4,-98)});const la=cm();n.add(la),e.push({type:"box",x:-8,z:-88,w:10,d:8}),t.push({id:"o2buf",name:"Crew O2 buffer",position:new M(-8,4,-88)});const da=d2();n.add(da),e.push({type:"box",x:8,z:-88,w:10,d:8}),t.push({id:"o2buf2",name:"Crew O2 buffer 2",position:new M(8,4,-88)});const pn=z2();n.add(pn),e.push({type:"box",x:-32,z:-88,w:10,d:8}),t.push({id:"n2",name:"Hab spare N2",position:new M(-32,4,-88)});const Hi=B2();n.add(Hi),e.push({type:"box",x:-46,z:-88,w:10,d:8}),t.push({id:"habh2o",name:"Hab spare water",position:new M(-46,4,-88)});const ha=Gm();n.add(ha),e.push({type:"box",x:16,z:-86,w:10,d:8}),t.push({id:"dustlock",name:"Hab-street dust lock",position:new M(16,4,-86)});const ua=g2();n.add(ua),e.push({type:"box",x:16,z:-74,w:8,d:6}),t.push({id:"evalocker",name:"Hab-street EVA locker",position:new M(16,4,-74)});const si=M2();n.add(si),e.push({type:"box",x:0,z:-68,w:8,d:6}),t.push({id:"hablight",name:"Hab-street lights",position:new M(0,4,-68)});const fa=I1();n.add(fa),e.push({type:"box",x:38,z:-126,w:14,d:9}),t.push({id:"food",name:"Food / grow vault",position:new M(38,4,-126)});const ri=O1();n.add(ri),e.push({type:"box",x:8,z:-142,w:14,d:9}),t.push({id:"food2",name:"Hab-street grow vault",position:new M(8,4,-142)});const pa=hm();n.add(pa),e.push({type:"box",x:28,z:-140,w:10,d:8}),t.push({id:"condensate",name:"Condensate return",position:new M(28,4,-140)});const ma=L1();n.add(ma),e.push({type:"box",x:-60,z:-148,w:8,d:6}),e.push({type:"box",x:-64,z:-118,w:8,d:6}),e.push({type:"box",x:-18,z:-88,w:10,d:8}),t.push({id:"water",name:"Water loop",position:new M(-18,4,-88)});const as=j1();n.add(as),e.push({type:"box",x:18,z:-152,w:14,d:10}),t.push({id:"potable",name:"Potable water store",position:new M(18,4,-152)});const ss=Qm();n.add(ss),e.push({type:"box",x:32,z:-152,w:10,d:8}),t.push({id:"potable-uv",name:"Potable UV polish",position:new M(32,4,-152)});const rs=eg();n.add(rs),e.push({type:"box",x:46,z:-152,w:10,d:8}),t.push({id:"potable-uv2",name:"Spare potable UV",position:new M(46,4,-152)});const T=Q1();n.add(T),e.push({type:"box",x:-58,z:-108,w:10,d:3}),e.push({type:"box",x:-20,z:-100,w:18,d:3}),e.push({type:"box",x:22,z:-128,w:3,d:12}),t.push({id:"berms",name:"Hab dust berms",position:new M(-20,4,-100)});const B=U1();n.add(B),e.push({type:"box",x:68,z:-10,w:16,d:8}),e.push({type:"box",x:-22,z:-88,w:8,d:6}),t.push({id:"battery",name:"Night power store",position:new M(68,4,-10)});const W=k1();n.add(W),e.push({type:"box",x:68,z:6,w:16,d:8}),e.push({type:"box",x:-28,z:-138,w:8,d:6}),t.push({id:"battery2",name:"Crew night store",position:new M(68,4,6)});const X=om();n.add(X),e.push({type:"box",x:8,z:-78,w:12,d:7}),t.push({id:"battery3",name:"Hab night store 3",position:new M(8,4,-78)});const k=$m();n.add(k),e.push({type:"box",x:-18,z:-78,w:12,d:7}),t.push({id:"battery4",name:"Hab night store 4",position:new M(-18,4,-78)});const re=f2();n.add(re),e.push({type:"box",x:-5,z:-78,w:8,d:6}),t.push({id:"habtrench",name:"Hab-street power trench",position:new M(-5,4,-78)});const me=b1();n.add(me),e.push({type:"box",x:-15,z:-8,w:10,d:7}),t.push({id:"spaceport",name:"Methalox spaceport",position:new M(-15,4,-8)});const we=F2();n.add(we),e.push({type:"box",x:-28,z:-8,w:8,d:6}),t.push({id:"ch4hose",name:"Spare CH4 load hose",position:new M(-28,4,-8)});const ye=O2();n.add(ye),e.push({type:"box",x:-28,z:6,w:8,d:6}),t.push({id:"o2hose",name:"Spare O2 load hose",position:new M(-28,4,6)});const ze=X1();n.add(ze),e.push({type:"box",x:20,z:8,w:16,d:12}),t.push({id:"stock",name:"Methalox stockpile",position:new M(20,4,8)});const ke=fm();n.add(ke),e.push({type:"box",x:36,z:8,w:10,d:8}),t.push({id:"ch4buf",name:"CH4 return buffer",position:new M(36,4,8)});const be=pm();n.add(be),e.push({type:"box",x:36,z:-6,w:10,d:8}),t.push({id:"o2ret",name:"O2 return buffer",position:new M(36,4,-6)});const je=Um();n.add(je),e.push({type:"box",x:50,z:4,w:8,d:18}),t.push({id:"mxberm",name:"Methalox farm berm",position:new M(50,4,4)});const st=R2();n.add(st),e.push({type:"box",x:68,z:6,w:8,d:6}),t.push({id:"mxlight",name:"Methalox farm lights",position:new M(68,4,6)});const ct=xm();n.add(ct),e.push({type:"box",x:-32,z:-22,w:10,d:8}),t.push({id:"pump",name:"Methalox pump house",position:new M(-32,4,-22)}),n.add(y1()),n.add(S1()),n.add($i(16,14,-.4)),n.add($i(8,-62,1.2)),n.add($i(30,74,-.2)),n.add($i(-94,-182,.7)),n.add(on(-90,-148,.4,{kind:"ice",loaded:!0})),t.push({id:"rover",name:"Haul rover",position:new M(8,2,-62)}),t.push({id:"haul2",name:"Ice haul at crush",position:new M(-90,3,-148)});const Et=D1();n.add(Et),e.push({type:"box",x:-64,z:-90,w:10,d:8}),t.push({id:"haul",name:"Ice haul",position:new M(-64,3,-90)});const et=h1();n.add(et),e.push({type:"box",x:48,z:-86,w:16,d:12}),t.push({id:"workshop",name:"Workshop",position:new M(48,5,-86)});const Ae=w2();n.add(Ae),e.push({type:"box",x:48,z:-70,w:8,d:6}),t.push({id:"shoplight",name:"Workshop lights",position:new M(48,4,-70)});const Kt=am();n.add(Kt),e.push({type:"box",x:22,z:-80,w:12,d:8}),t.push({id:"depot",name:"Spare-parts depot",position:new M(22,4,-80)});const tt=$1();n.add(tt),e.push({type:"box",x:66,z:-74,w:16,d:12}),t.push({id:"workshop2",name:"Workshop bay 2",position:new M(66,5,-74)});const kt=_m();n.add(kt),e.push({type:"box",x:66,z:-90,w:10,d:8}),t.push({id:"press",name:"Sinter press",position:new M(66,4,-90)});const Tn=C2();n.add(Tn),e.push({type:"box",x:66,z:-104,w:12,d:8}),t.push({id:"kiln",name:"Sinter kiln",position:new M(66,4,-104)});const Pt=P2();n.add(Pt),e.push({type:"box",x:80,z:-104,w:8,d:6}),t.push({id:"bricks",name:"Sinter brick pallet",position:new M(80,4,-104)});const Bn=Nm();n.add(Bn),e.push({type:"box",x:82,z:-90,w:10,d:8}),t.push({id:"crib",name:"Workshop tool crib",position:new M(82,4,-90)});const lt=u2();n.add(lt),e.push({type:"box",x:96,z:-90,w:10,d:8}),t.push({id:"rack",name:"Workshop parts rack",position:new M(96,4,-90)});const Xt=N2();n.add(Xt),e.push({type:"box",x:96,z:-104,w:10,d:8}),t.push({id:"welder",name:"Workshop spare welder",position:new M(96,4,-104)});const kn=K2();n.add(kn),e.push({type:"box",x:110,z:-90,w:10,d:8}),t.push({id:"shopair",name:"Workshop spare air compressor",position:new M(110,4,-90)});const zt=ig();n.add(zt),e.push({type:"box",x:110,z:-104,w:10,d:8}),t.push({id:"hoist",name:"Workshop spare hoist",position:new M(110,4,-104)});const an=t2();n.add(an),e.push({type:"box",x:82,z:-74,w:16,d:12}),t.push({id:"workshop3",name:"Workshop bay 3",position:new M(82,5,-74)});const sn=nm();n.add(sn),n.add($i(48,-70,.2)),t.push({id:"shelter",name:"Rover dust shelter",position:new M(48,4,-70)});for(const[Gi,Vi]of[[42.8,-73.4],[53.2,-73.4],[42.8,-66.6],[53.2,-66.6]])e.push({type:"cyl",x:Gi,z:Vi,r:.45});const ga=u1();n.add(ga),e.push({type:"cyl",x:-18,z:-138,r:3}),t.push({id:"comms",name:"Comms tower",position:new M(-18,16,-138)});const Vc=A2();n.add(Vc),e.push({type:"box",x:4,z:-138,w:8,d:6}),t.push({id:"commslight",name:"Comms-yard lights",position:new M(4,4,-138)});const Wc=ym();n.add(Wc),e.push({type:"cyl",x:24,z:-128,r:2.2}),t.push({id:"weather",name:"Weather / dust mast",position:new M(24,12,-128)});const Xc=P1();n.add(Xc),e.push({type:"cyl",x:-32,z:-148,r:8.4}),e.push({type:"box",x:-40,z:-154,w:6,d:5}),t.push({id:"earth",name:"Earth dish · 12 min delay",position:new M(-32,12,-148)});const qc=x2();n.add(qc),e.push({type:"box",x:-48,z:-138,w:10,d:12}),t.push({id:"commsberm",name:"Comms dust berm",position:new M(-48,4,-138)});const Yc=em();n.add(Yc),e.push({type:"cyl",x:-8,z:-162,r:6.2}),t.push({id:"earth2",name:"Backup Earth dish",position:new M(-8,10,-162)});const Kc=Fm();n.add(Kc),e.push({type:"box",x:4,z:-148,w:10,d:8}),t.push({id:"commsbatt",name:"Comms night store",position:new M(4,4,-148)});const Jc=p2();n.add(Jc),e.push({type:"box",x:16,z:-148,w:10,d:8}),t.push({id:"commsinv",name:"Comms spare inverter",position:new M(16,4,-148)});const Zc=f1();n.add(Zc),e.push({type:"cyl",x:-58,z:-158,r:6}),t.push({id:"ice",name:"Ice mining rig",position:new M(-58,8,-158)});const $c=y2();n.add($c),e.push({type:"box",x:-46,z:-148,w:8,d:6}),t.push({id:"icelight",name:"Ice-mine lights",position:new M(-46,4,-148)});const jc=Z2();n.add(jc),e.push({type:"box",x:-70,z:-148,w:10,d:8}),t.push({id:"drill1",name:"Ice mine 1 spare drill",position:new M(-70,4,-148)});const Qc=zm();n.add(Qc),e.push({type:"box",x:-40,z:-168,w:10,d:12}),t.push({id:"ice1berm",name:"Ice mine 1 berm",position:new M(-40,4,-168)});const el=Z1();n.add(el),e.push({type:"cyl",x:-78,z:-172,r:6}),t.push({id:"ice2",name:"Ice mine 2",position:new M(-78,8,-172)});const tl=jm();n.add(tl),e.push({type:"box",x:-64,z:-184,w:10,d:12}),t.push({id:"ice2berm",name:"Ice mine 2 berm",position:new M(-64,4,-184)});const nl=U2();n.add(nl),e.push({type:"box",x:-92,z:-184,w:10,d:8}),t.push({id:"drill2",name:"Ice mine 2 spare drill",position:new M(-92,4,-184)});const il=n2();n.add(il),e.push({type:"box",x:-78,z:-156,w:10,d:8}),t.push({id:"melt2",name:"Ice melt still 2",position:new M(-78,5,-156)});const al=rm();n.add(al),e.push({type:"box",x:-90,z:-158,w:12,d:10}),t.push({id:"ice-depot",name:"Ice crush depot",position:new M(-90,4,-158)});const sl=Zm();n.add(sl),e.push({type:"box",x:-102,z:-158,w:10,d:8}),t.push({id:"crushcover",name:"Ice crush cover",position:new M(-102,4,-158)});const rl=m2();n.add(rl),e.push({type:"box",x:-90,z:-136,w:10,d:8}),t.push({id:"weigh",name:"Ice haul weigh",position:new M(-90,4,-136)});const ol=X2();n.add(ol),e.push({type:"box",x:-110,z:-136,w:12,d:8}),t.push({id:"haul3",name:"Spare ice haul",position:new M(-110,3,-136)});const cl=gm();n.add(cl),e.push({type:"box",x:-58,z:-142,w:10,d:8}),t.push({id:"melt",name:"Ice melt still",position:new M(-58,5,-142)});const ll=V2();n.add(ll),e.push({type:"box",x:-46,z:-132,w:10,d:8}),t.push({id:"melt3",name:"Spare ice-melt still",position:new M(-46,4,-132)});const dl=w1();n.add(dl),e.push({type:"cyl",x:-82,z:-176,r:2.4}),t.push({id:"survey",name:"Resource survey",position:new M(-88,5,-188)});const hl=Cm();return n.add(hl),e.push({type:"cyl",x:-124,z:-188,r:2.4}),t.push({id:"survey2",name:"West ice survey",position:new M(-124,5,-188)}),n.add(jt(42,22,.6)),n.add(jt(39,26,-.4)),n.add(jt(26,78,2.2)),n.add(jt(26,68,.5)),n.add(jt(22,72,-.8)),n.add(jt(-80,-174,.8)),n.add(jt(-34,-92,-1.2)),n.add(jt(-28,-104,.3)),n.add(jt(16,-120,.6)),n.add(jt(70,-70,.4)),n.add(jt(-28,128,1.1)),n.add(M1()),z1(e),n.add(A1()),n.add(R1()),n.add(C1()),{group:n,colliders:e,landmarks:t}}function Jn(n,e,t={}){const i=new O;i.name=t.finished?"pad":"cargo-pad";const a=I(n,e),s=t.finished?20:16,r=t.finished?c.pad:c.graded;if(i.add(d(new N(s,s,.45,48),r,n,a+.15,e)),t.finished){i.add(d(new Ne(s+.4,.55,8,48),c.padRing,n,a+.4,e,Math.PI/2,0,0)),i.add(d(new aa(7.5,8.1,40),c.padRing,n,a+.4,e,-Math.PI/2,0,0)),i.add(d(new aa(13,13.5,40),c.padRing,n,a+.4,e,-Math.PI/2,0,0));for(let l=0;l<12;l++){const h=l/12*Math.PI*2;i.add(d(new p(.35,.55,.35),c.glowPad,n+Math.cos(h)*19.2,a+.55,e+Math.sin(h)*19.2))}}else{i.add(d(new Ne(s+.3,.4,8,36),c.padRing,n,a+.32,e,Math.PI/2,0,0));for(let l=0;l<8;l++){const h=l/8*Math.PI*2;i.add(d(new p(.28,.4,.28),c.glowPad,n+Math.cos(h)*(s-.6),a+.45,e+Math.sin(h)*(s-.6)))}}const o=t.finished?26:21,u=d(new Ne(o,t.finished?2.2:1.8,8,40),c.rust,n,a-.4,e,Math.PI/2,0,0);return u.scale.set(1,.45,1),i.add(u),i}function yi(n=0,e=0,t={}){const i=new O;i.name=t.name||"starship",i.position.set(n,0,e);const a=I(n,e)-3.1,s=36,r=4.4;i.add(d(new N(r,r,s,28),c.steel,0,a+8+s/2,0));const o=d(new vt(r,24,16,0,Math.PI*2,0,Math.PI/2),c.steel,0,a+8+s,0);o.scale.set(1,1.55,1),i.add(o);const u=d(new N(r+.04,r+.04,s*.72,20,1,!0,Math.PI*.55,Math.PI*.9),c.tiles,0,a+8+s*.38,0);i.add(u);const l=d(new N(r+.15,r+.55,3.2,24),c.soot,0,a+6.4,0);i.add(l);for(let f=0;f<3;f++){const g=f/3*Math.PI*2;i.add(d(new N(.55,1.15,2.2,12),c.soot,Math.cos(g)*1.5,a+4.6,Math.sin(g)*1.5))}const h=new p(1.1,7.2,3.6);i.add(d(h,c.steelDark,-r-.2,a+14,0,0,0,.18)),i.add(d(h,c.steelDark,r+.2,a+14,0,0,0,-.18));const m=new p(.45,4.2,2.4);i.add(d(m,c.steelDark,-r+.2,a+40,1.2,.15,0,.4)),i.add(d(m,c.steelDark,r-.2,a+40,1.2,.15,0,-.4));for(let f=0;f<6;f++){const g=f/6*Math.PI*2+.2,v=new O,w=d(new p(.22,8.2,.22),c.steelDark,0,0,0,0,0,.72),_=d(new p(1.3,.18,.9),c.steel,3.4,-3.7,0);v.add(w,_),v.position.set(Math.cos(g)*3.2,a+7.6,Math.sin(g)*3.2),v.rotation.y=-g,i.add(v)}for(let f=0;f<5;f++)i.add(d(new p(.7,.35,.08),c.tiles,0,a+28+f*2.1,r+.05));if(i.add(d(new p(1.6,.12,.12),c.glowWarm,0,a+44.5,0)),t.cargoOpen){i.add(d(new p(2.4,6.2,3.4),c.soot,-r+.4,a+16.4,0)),i.add(d(new p(.12,6.4,3.6),c.steel,-r-2.1,a+16.6,2,0,1.15,0));const f=a+13.2,g=I(n,e)+.22,v=-r-.3,w=-r-12.4,_=Math.hypot(v-w,f-g),x=Math.atan2(f-g,v-w);i.add(d(new p(_,.16,3.1),c.steelDark,(v+w)/2,(f+g)/2,0,0,0,x)),i.add(d(new p(10.5,.18,.18),c.lattice,-7.2,a+22.5,0,0,0,.55)),i.add(d(new N(.05,.05,7.2,6),c.cable,-12.2,a+16.2,0)),i.add(d(new p(1.5,1.3,1.5),c.crate,-12.2,a+12.4,0)),i.add(b("CARGO","#1a100c","#f0c089",3.4,.9,-r-.1,a+24,0,-Math.PI/2))}if(t.crewHab){const f=a+13;i.add(d(new N(1.2,1.2,2.7,14),c.habDark,0,f,r+1.35,Math.PI/2,0,0)),i.add(d(new Ne(1.22,.09,6,16),c.steel,0,f,r+.28)),i.add(d(new Ne(1.22,.09,6,16),c.steel,0,f,r+2.55)),i.add(d(new p(1.05,1.75,.1),c.steelDark,0,f,r+2.72)),i.add(d(new p(3.4,.14,2.6),c.steelDark,0,f-1.28,r+2.9)),i.add(d(new p(.1,1.15,2.5),c.steel,-1.6,f-.65,r+2.9)),i.add(d(new p(.1,1.15,2.5),c.steel,1.6,f-.65,r+2.9));const g=f-1.28,v=I(n,e)+.28,w=r+3.6,_=r+13.2,x=11;for(let D=0;D<x;D++){const L=D/(x-1);i.add(d(new p(2.15,.12,.95),c.steelDark,0,g+(v-g)*L,w+(_-w)*L))}const C=Math.hypot(w-_,g-v),R=Math.atan2(g-v,_-w);i.add(d(new p(2.25,.08,C),c.steel,0,(g+v)/2-.12,(w+_)/2,R,0,0)),i.add(d(new p(.08,.85,C),c.steel,-1.12,(g+v)/2+.35,(w+_)/2,R,0,0)),i.add(d(new p(.08,.85,C),c.steel,1.12,(g+v)/2+.35,(w+_)/2,R,0,0));const S=_+1.55,H=I(n,e)+1.35;i.add(d(new N(1.35,1.35,2.5,12),c.habDark,0,H,S)),i.add(d(new p(1.05,1.7,.1),c.steelDark,0,H+.05,S+1.4)),i.add(d(new Ne(1.38,.07,6,14),c.steel,0,H+1.28,S,Math.PI/2,0,0)),i.add(d(new p(2.2,.12,2.2),c.steelDark,0,I(n,e)+.12,S));for(let D=0;D<5;D++)i.add(d(new p(.85,.48,.08),c.glowWarm,1.55,a+16.5+D*3.4,r+.06)),i.add(d(new p(.08,.48,.85),c.glowWarm,r+.06,a+16.5+D*3.4,-1.35));i.add(d(new N(.55,.55,.2,12),c.steel,2.55,a+14.2,r+.04,Math.PI/2,0,0)),i.add(d(new Ne(.52,.06,6,12),c.steelDark,2.55,a+14.2,r+.14)),i.add(b("CREW HAB","#1a100c","#f0c089",3.4,.85,0,f+2.55,r+2.35)),i.add(b("AIRLOCK","#1a100c","#f0c089",2.3,.55,1.85,f+.15,r+2.05,Math.PI/2))}return i}function t1(){const n=new O;n.name="crates";const e=[[10,8,0],[12.2,8.4,.4],[10.4,10.6,1.6],[13.5,6.2,-.3],[-12,9,.5],[-14,7.2,2.1],[8.5,-11,0],[6.4,-12.5,1.1]];for(const[t,i,a]of e)Ee(n,t,i,a);return n}function n1(){const n=new O;n.name="cargo-offload";const e=[[40,22,.2],[38.2,24.1,-.3],[41.4,26.2,.8],[36.5,21.4,.1],[37.8,27.6,1.4],[34.8,24.8,-.5],[39.2,19.6,.6],[35.4,19.2,.15]];for(const[s,r,o]of e)Ee(n,s,r,o);Ee(n,38.6,22.8,.1,1.15),Ee(n,33.2,20.4,.25,1.2),Ee(n,31.4,22.1,-.2,1.05);const[t,i,a]=Ot(36,23.5,.08);return n.add(d(new p(8.5,.12,4.2),c.steelDark,t,i,a,0,.15,0)),n.add(b("HAB KIT","#1a100c","#f0c089",2.6,.7,33.2,I(33.2,20.4)+2.5,20.4,.35)),n}function i1(){const n=new O;n.name="approach";const e=[{fx:0,fz:118,tx:0,tz:32,n:7},{fx:52,fz:90,tx:52,tz:42,n:5},{fx:36,fz:128,tx:36,tz:90,n:4},{fx:-24,fz:92,tx:-24,tz:60,n:4},{fx:-48,fz:118,tx:-48,tz:86,n:4},{fx:78,fz:104,tx:78,tz:74,n:4},{fx:-16,fz:178,tx:-16,tz:154,n:5}];for(const t of e){const i=Math.atan2(t.tx-t.fx,t.tz-t.fz);for(let a=0;a<t.n;a++){const s=a/(t.n-1),r=t.fx+(t.tx-t.fx)*s,o=t.fz+(t.tz-t.fz)*s,u=I(r,o),l=new O;l.add(d(new p(2.5,.16,.34),c.glowPad,-.75,0,0,0,.5,0)),l.add(d(new p(2.5,.16,.34),c.glowPad,.75,0,0,0,-.5,0)),l.position.set(r,u+.14,o),l.rotation.y=i,n.add(l)}}return n}function a1(){const n=new O;n.name="prep-pad";const e=22,t=82,i=I(e,t);n.add(d(new N(14,14,.28,36),c.graded,e,i+.08,t));const a=d(new Ne(16.2,1.7,8,28,Math.PI*1.35),c.rust,e,i-.15,t,Math.PI/2,.5,0);a.scale.set(1,.42,1),n.add(a);for(let r=0;r<8;r++){const o=r/8*Math.PI*2+.2,u=e+Math.cos(o)*15.2,l=t+Math.sin(o)*15.2,h=I(u,l);n.add(d(new p(.08,1.7,.08),c.steel,u,h+.85,l)),n.add(d(new p(.28,.16,.06),c.glowPad,u,h+1.62,l,0,o,0))}const s=[[12,74],[30,88],[14,90]];for(const[r,o]of s){const u=d(new mt(2.2,0),c.rust,r,I(r,o)+.9,o);u.scale.set(1.2,.65,1.05),n.add(u)}return n.add(b("LANDING PREP","#1a100c","#f0c089",4.4,1,e+10.5,i+2.4,t+2,-.6)),n.add(d(new p(.12,2.4,.12),c.steelDark,e+10.5,i+1.2,t+2)),n}function s1(){const n=new O;n.name="solar";const e=10,t=8;for(let r=0;r<e;r++)for(let o=0;o<t;o++){const u=58+r*5.4,l=-22-o*6.2,h=I(u,l),m=d(new p(.18,1.6,.18),c.solarFrame,u,h+.8,l),f=d(new p(4.6,.08,2.3),c.solar,u,h+1.55,l,-.55,.15,0),g=d(new p(4.75,.05,2.42),c.solarFrame,u,h+1.5,l,-.55,.15,0);n.add(m,f,g)}for(let r=0;r<5;r++){const o=58+r*5.4,u=-22-8*6.2,l=I(o,u);n.add(d(new p(.18,1.6,.18),c.solarFrame,o,l+.8,u)),r<2&&n.add(d(new p(4.6,.08,2.3),c.solar,o+1.1,l+.22,u+1.5,1.2,.25,0))}const[i,a,s]=Ot(54,-18,.7);return n.add(d(new p(2.2,1.4,1.4),c.habDark,i,a,s)),n.add(b("POWER","#111111","#f4e6c8",2,.55,i,a+.2,s+.75)),n}function r1(){const n=new O;n.name="power-run";const e=54,t=-18,i=-54,a=-16,s=[],r=10;for(let o=0;o<=r;o++){const u=o/r,l=e+(i-e)*u,h=t+(a-t)*u,m=I(l,h);n.add(d(new N(.09,.11,4.4,6),c.steelDark,l,m+2.2,h)),n.add(d(new p(1.15,.08,.08),c.steel,l,m+4.35,h)),s.push({x:l,y:m+4.32,z:h})}for(let o=0;o<s.length-1;o++){const u=s[o],l=s[o+1];for(const h of[-.38,.38]){const m=new ki([new M(u.x,u.y,u.z+h),new M((u.x+l.x)/2,(u.y+l.y)/2-.75,(u.z+l.z)/2+h),new M(l.x,l.y,l.z+h)]),f=new dt(new ai(m,6,.035,4,!1),c.cable);f.castShadow=!1,n.add(f)}}return n}function o1(){const n=new O;n.name="water-feed";const e=-58,t=-150,i=-68,a=-26,s=12,r=[];for(let l=0;l<=s;l++){const h=l/s,m=e+(i-e)*h,f=t+(a-t)*h,g=I(m,f)+1.15;r.push(new M(m,g,f)),l%2===0&&n.add(d(new p(.16,1.1,.16),c.steelDark,m,I(m,f)+.55,f))}const o=new ki(r),u=new dt(new ai(o,24,.16,6,!1),c.pipe);return u.castShadow=!1,n.add(u),n}function c1(){const n=new O;n.name="isru";const e=-68,t=-16,i=I(e,t);n.add(d(new p(30,.4,22),c.concrete,e,i+.15,t));const a=d(new N(1.8,2,13,12),c.steelDark,e+4,i+6.8,t);n.add(a),n.add(d(new Ne(2.5,.18,6,16),c.steel,e+4,i+10.2,t,Math.PI/2,0,0)),n.add(d(new Ne(2.5,.18,6,16),c.steel,e+4,i+7.4,t,Math.PI/2,0,0)),n.add(b("SABATIER","#1a100c","#f0c089",5.2,1.15,e+6.1,i+8.2,t,Math.PI/2));const s=d(new N(3,3,13,20),c.tankCh4,e-8,i+7.1,t+5.4,0,0,Math.PI/2),r=d(new N(3,3,13,20),c.tankO2,e-8,i+7.1,t-5.2,0,0,Math.PI/2);n.add(s,r),n.add(b("CH4","#6a2208","#f4e6c8",3.6,1,e-1.2,i+7.1,t+5.4)),n.add(b("O2","#2a3340","#e8eef4",3.6,1,e-1.2,i+7.1,t-5.2)),n.add(d(new N(2.2,2.2,7.2,16),c.pipe,e-4,i+4,t-10.4)),n.add(b("H2O","#1a2830","#d6e6ef",2.6,.75,e-4,i+5.6,t-8.1));const o=d(new mt(2.1,0),c.ice,e+1.5,i+1.1,t-10.2);return o.scale.set(1.15,.6,1),n.add(o),n.add(d(new N(.55,.55,7.5,10),c.steel,e+10.5,i+4.1,t-5.4)),n.add(d(new N(2.3,.7,2.6,14),c.steelDark,e+10.5,i+8.8,t-5.4)),n.add(d(new Ne(2.05,.1,6,16),c.steel,e+10.5,i+10.15,t-5.4,Math.PI/2,0,0)),n.add(b("CO2","#1a100c","#f0c089",2.4,.7,e+10.5,i+5.8,t-3.2)),n.add(d(new p(4.2,3,3.2),c.habDark,e+10,i+1.8,t+4.2)),n.add(b("POWER","#111111","#f4e6c8",2.2,.55,e+10,i+2.6,t+5.9)),n.add(d(new N(.16,.16,10,8),c.pipe,e+7.2,i+3.4,t-2.6,0,0,Math.PI/2)),n.add(d(new N(.16,.16,9,8),c.pipe,e-1.5,i+3.6,t+2.4,0,0,Math.PI/2)),n.add(d(new N(.16,.16,8.5,8),c.steel,e-1.5,i+3.6,t-2.2,0,0,Math.PI/2)),n.add(d(new N(.14,.14,6.4,8),c.cable,e+12.2,i+3.8,t+1.2,0,0,Math.PI/2)),n}function l1(){const n=new O;n.name="habs";const e=[[-14,-104,0],[2,-104,0],[-6,-116,1.57]];for(const[u,l,h]of e){const m=I(u,l),f=d(new N(3.1,3.1,12,18),c.hab,u,m+3.2,l,0,0,Math.PI/2);f.rotation.y=h,n.add(f),n.add(d(new vt(3.1,14,10),c.hab,u+Math.cos(h)*6,m+3.2,l+Math.sin(h)*6)),n.add(d(new vt(3.1,14,10),c.hab,u-Math.cos(h)*6,m+3.2,l-Math.sin(h)*6));for(let g=-2;g<=2;g++){const v=u+Math.cos(h)*g*2,w=l+Math.sin(h)*g*2;n.add(d(new p(.9,.7,.08),c.glowWarm,v,m+3.3,w+(h===0?3.15:0)))}}const[t,i,a]=Ot(-6,-96,1.4);n.add(d(new N(1.5,1.5,2.6,12),c.habDark,t,i,a)),n.add(d(new p(1.1,1.8,.12),c.steelDark,t,i+.1,a+1.5));const[s,r,o]=Ot(-6,-108,6.8);return n.add(d(new vt(4.4,18,12,0,Math.PI*2,0,Math.PI/2),c.hab,s,r,o)),n.add(b("HAB 1","#1a100c","#f0c089",2.6,.7,-6,I(-6,-96)+3.6,-94.4)),n}function d1(){const n=new O;n.name="greenhouse";const e=22,t=-112,i=I(e,t);n.add(d(new p(15.2,.25,8.6),c.concrete,e,i+.1,t));const a=new dt(new N(4.15,4.15,14.2,18,1,!1,0,Math.PI),c.glass);a.rotation.z=Math.PI/2,a.position.set(e,i+4.1,t),a.castShadow=!1,n.add(a),n.add(d(new p(14.2,.1,8.4),c.solarFrame,e,i+4.15,t));for(let u=-2;u<=2;u++)n.add(d(new Ne(4.12,.055,6,16,Math.PI),c.solarFrame,e+u*2.7,i+4.1,t,0,Math.PI/2,0));for(let u=-2;u<=2;u++){n.add(d(new p(2.05,.26,6.6),c.soil,e+u*2.35,i+.36,t));for(let l=-2;l<=2;l++){const h=l%2===0?c.plant:c.plantLeaf;n.add(d(new p(1.45,.52,.82),h,e+u*2.35,i+.72,t+l*1.12)),n.add(d(new p(.55,.42,.4),c.plantLeaf,e+u*2.35+.2,i+1.05,t+l*1.12))}n.add(d(new p(1.7,.05,6.1),c.glowWarm,e+u*2.35,i+3.55,t))}n.add(d(new p(1.2,2,.15),c.habDark,e-7.1,i+1.2,t));const s=e+10.4,r=t,o=I(s,r);return n.add(d(new p(5.4,.2,4.6),c.concrete,s,o+.08,r)),n.add(d(new N(.52,.52,5.4,10),c.steel,s+1.15,o+2.9,r-1.05)),n.add(d(new N(1.75,.55,1.7,14),c.steelDark,s+1.15,o+6.2,r-1.05)),n.add(d(new Ne(1.5,.08,6,14),c.steel,s+1.15,o+7.1,r-1.05,Math.PI/2,0,0)),n.add(b("CO2","#1a100c","#f0c089",1.9,.5,s+1.15,o+3.7,r+.35)),n.add(d(new p(2.5,1.85,1.9),c.habDark,s-.7,o+1.08,r+.95)),n.add(b("COMPRESS","#1a100c","#f0c089",2.35,.55,s-.7,o+1.55,r+1.95)),n.add(d(new N(.14,.14,6.4,8),c.pipe,e+6.6,i+1.55,t,0,0,Math.PI/2)),n.add(d(new N(.68,.68,2.35,12),c.tankO2,e-5.5,i+1.45,t+5.15)),n.add(b("O2","#2a3340","#e8eef4",1.35,.42,e-5.5,i+1.65,t+5.95)),n.add(b("LIFE SUPPORT","#1a100c","#f0c089",3.7,.7,e,i+5.55,t+.15)),n.add(b("COMPRESSED CO2","#1a100c","#d6b48a",3.5,.55,e,i+4.75,t+.15)),n}function $i(n,e,t){const i=new O;i.name="rover";const a=I(n,e);i.position.set(n,a,e),i.rotation.y=t,i.add(d(new p(3.4,1.1,2.1),c.rover,0,1.35,0)),i.add(d(new p(1.4,.7,1.5),c.roverDark,1.2,2.1,0)),i.add(d(new p(2.2,.08,1.6),c.solar,0,2,0)),i.add(d(new N(.07,.07,2.1,6),c.steel,-.4,2.9,0)),i.add(d(new p(.25,.2,.25),c.roverDark,-.4,4,0));const s=new N(.55,.55,.35,12),r=[[-1.2,.55,1.15],[.1,.55,1.15],[1.2,.55,1.15],[-1.2,.55,-1.15],[.1,.55,-1.15],[1.2,.55,-1.15]];for(const[o,u,l]of r)i.add(d(s,c.roverDark,o,u,l,Math.PI/2,0,0));return i}function jt(n,e,t){const i=new O;i.name="optimus";const a=I(n,e);return i.position.set(n,a,e),i.rotation.y=t,i.add(d(new p(.42,.62,.24),c.robot,0,1.28,0)),i.add(d(new N(.14,.15,.22,10),c.robot,0,1.72,0)),i.add(d(new p(.16,.08,.04),c.steelDark,0,1.74,.14)),i.add(d(new p(.12,.48,.12),c.robot,-.28,1.22,0)),i.add(d(new p(.12,.48,.12),c.robot,.28,1.22,0)),i.add(d(new p(.14,.62,.14),c.steelDark,-.1,.62,0)),i.add(d(new p(.14,.62,.14),c.steelDark,.1,.62,0)),i}function h1(){const n=new O;n.name="workshop";const e=48,t=-86,i=I(e,t),a=d(new N(6.2,6.2,16,16,1,!1,0,Math.PI),c.habDark,e,i+3.4,t);return a.rotation.z=Math.PI/2,n.add(a),n.add(d(new p(16,.3,10),c.concrete,e,i+.1,t)),n.add(d(new p(.2,4.2,6.5),c.steelDark,e-7.8,i+2.2,t)),n.add(d(new p(2.4,1.1,1.4),c.crate,e+2,i+.8,t+1.5)),n.add(d(new p(4.6,.16,.16),c.steel,e+1.2,i+.35,t-2.8)),n.add(d(new p(4.6,.16,.16),c.steel,e+1.2,i+.55,t-3.05)),n.add(b("WORKSHOP","#1a100c","#f0c089",3.6,.85,e,i+5.6,t+.2)),n}function u1(){const n=new O;n.name="comms";const e=-18,t=-138,i=I(e,t);for(let s=0;s<8;s++)n.add(d(new p(.18,3.2,.18),c.lattice,e-.7,i+1.6+s*3,t-.7)),n.add(d(new p(.18,3.2,.18),c.lattice,e+.7,i+1.6+s*3,t-.7)),n.add(d(new p(.18,3.2,.18),c.lattice,e-.7,i+1.6+s*3,t+.7)),n.add(d(new p(.18,3.2,.18),c.lattice,e+.7,i+1.6+s*3,t+.7)),n.add(d(new p(1.6,.1,.1),c.lattice,e,i+3+s*3,t-.7)),n.add(d(new p(1.6,.1,.1),c.lattice,e,i+3+s*3,t+.7));const a=d(new vt(3.2,16,10,0,Math.PI*2,0,Math.PI/2.4),c.steel,e,i+26.5,t,-.7,.4,0);return n.add(a),n.add(d(new N(.08,.08,2.2,6),c.steelDark,e+.4,i+27.4,t+1.1,.6,0,0)),n}function f1(){const n=new O;n.name="ice-mine";const e=-58,t=-158,i=I(e,t);n.add(d(new p(8,.3,8),c.concrete,e,i+.1,t)),n.add(d(new p(.28,14,.28),c.lattice,e-2.2,i+7,t-2.2)),n.add(d(new p(.28,14,.28),c.lattice,e+2.2,i+7,t-2.2)),n.add(d(new p(.28,14,.28),c.lattice,e-2.2,i+7,t+2.2)),n.add(d(new p(.28,14,.28),c.lattice,e+2.2,i+7,t+2.2)),n.add(d(new p(5.2,.25,5.2),c.steelDark,e,i+14.2,t)),n.add(d(new N(.35,.55,9,10),c.steel,e,i+5,t)),n.add(d(new ii(.7,1.6,8),c.soot,e,i+.9,t));const a=d(new mt(3.4,0),c.ice,e+7.5,i+1.6,t+1.2);return a.scale.set(1.3,.7,1.1),n.add(a),n.add(d(new p(6,.35,1.1),c.steelDark,e+3.4,i+1.4,t,0,0,-.18)),n.add(b("ICE","#1a2830","#d6e6ef",2.2,.65,e,i+8.4,t+2.6)),n}function Za(n,e,t,i,a){const s=I(e,t);n.add(d(new N(.05,.07,3.2,6),c.steelDark,e,s+1.6,t)),n.add(d(new p(1.15,.7,.04),a,e+.58,s+2.75,t)),n.add(b(i,"#1a100c","#f0c089",1.45,.4,e+.58,s+2.75,t+.05))}function Yr(n,e,t,i){const a=I(e,t);n.add(d(new p(.07,1.55,.07),c.steelDark,e,a+.78,t)),n.add(d(new p(.38,.22,.03),i,e+.2,a+1.42,t))}function Cr(n,e,t,i=0){const a=I(e,t);n.add(d(new p(.85,.55,.65),c.crate,e,a+.32,t,0,i,0)),n.add(d(new p(.88,.06,.68),c.steelDark,e,a+.62,t,0,i,0))}function p1(){const n=new O;n.name="solar-2";const e=6,t=4;for(let r=0;r<e;r++)for(let o=0;o<t;o++){const u=98+r*5.4,l=-74-o*6.2,h=I(u,l),m=d(new p(.18,1.6,.18),c.solarFrame,u,h+.8,l),f=d(new p(4.6,.08,2.3),c.solar,u,h+1.55,l,-.55,.15,0),g=d(new p(4.75,.05,2.42),c.solarFrame,u,h+1.5,l,-.55,.15,0);n.add(m,f,g)}const[i,a,s]=Ot(96,-72,.7);return n.add(d(new p(2.2,1.4,1.4),c.habDark,i,a,s)),n.add(b("POWER","#111111","#f4e6c8",2,.55,i,a+.2,s+.75)),n}function m1(){const n=new O;n.name="solar-tie";const e=90,t=-48,i=112,a=-83,s=[],r=5;for(let o=0;o<=r;o++){const u=o/r,l=e+(i-e)*u,h=t+(a-t)*u,m=I(l,h);n.add(d(new N(.09,.11,4.4,6),c.steelDark,l,m+2.2,h)),n.add(d(new p(1.15,.08,.08),c.steel,l,m+4.35,h)),s.push({x:l,y:m+4.32,z:h})}for(let o=0;o<s.length-1;o++){const u=s[o],l=s[o+1];for(const h of[-.38,.38]){const m=new ki([new M(u.x,u.y,u.z+h),new M((u.x+l.x)/2,(u.y+l.y)/2-.65,(u.z+l.z)/2+h),new M(l.x,l.y,l.z+h)]),f=new dt(new ai(m,6,.035,4,!1),c.cable);f.castShadow=!1,n.add(f)}}return n}function g1(){const n=new O;n.name="hab-assembly";const e=-32,t=-98,i=I(e,t);n.add(d(new p(18,.22,14),c.concrete,e,i+.08,t));const a=[[-5,-2.2],[5,-2.2],[-5,2.2],[5,2.2]];for(const[r,o]of a)n.add(d(new N(.18,.28,1.85,8),c.steelDark,e+r,i+1.02,t+o)),n.add(d(new p(.72,.12,.72),c.steel,e+r,i+.14,t+o)),n.add(d(new p(.55,.1,.55),c.steel,e+r,i+1.96,t+o));const s=i+3.55;n.add(d(new N(3,3,11,16),c.hab,e,s,t,0,0,Math.PI/2)),n.add(d(new vt(3,14,10),c.hab,e-5.5,s,t)),n.add(d(new vt(3,14,10,0,Math.PI*2,0,Math.PI/2),c.hab,e+8.4,i+1.55,t+.45,.22,.35,.12)),n.add(d(new N(1.35,1.35,2.4,12),c.habDark,e,s,t+4.15,Math.PI/2,0,0)),n.add(d(new p(1,1.65,.1),c.steelDark,e,s,t+5.45)),n.add(d(new Ne(1.38,.08,6,14),c.steel,e,s,t+3.05,0,0,0));for(const[r,o]of[[-7.2,4.6],[6.8,4.8],[-6.4,-5.2]])n.add(d(new p(.12,3.6,.12),c.lattice,e+r,i+1.9,t+o)),n.add(d(new p(.12,3.6,.12),c.lattice,e+r+1.4,i+1.9,t+o)),n.add(d(new p(1.6,.08,.08),c.lattice,e+r+.7,i+3.7,t+o));return Ee(n,e-8.2,t+6.2,.2),Ee(n,e-6.3,t+7.4,-.35),Ee(n,e+7.1,t-5.6,.5,1.1),Ee(n,e+5.4,t-6.4,.15),n.add(b("HAB KIT","#1a100c","#f0c089",3,.75,e,i+6.4,t+3.2)),n.add(b("AIRLOCK","#1a100c","#f0c089",2.2,.55,e+2.4,s+.2,t+4.2,Math.PI/2)),n}function un(n,e,t,i,a={}){const s=I(e,t),r=a.r||2.85,o=a.len||10.4,u=a.onStands?s+3.4:s+3.05,l=Math.cos(i),h=Math.sin(i);if(a.onStands)for(const[f,g]of[[-4.1,-2.05],[4.1,-2.05],[-4.1,2.05],[4.1,2.05]]){const v=e+l*f-h*g,w=t+h*f+l*g;n.add(d(new N(.16,.26,1.75,8),c.steelDark,v,s+.98,w)),n.add(d(new p(.7,.12,.7),c.steel,v,s+.14,w)),n.add(d(new p(.52,.1,.52),c.steel,v,s+1.9,w))}else for(const[f,g]of[[-3.6,0],[3.6,0]]){const v=e+l*f-h*g,w=t+h*f+l*g;n.add(d(new p(1.6,.55,1.15),c.steelDark,v,s+.38,w,0,i,0))}const m=d(new N(r,r,o,16),c.hab,e,u,t,0,0,Math.PI/2);if(m.rotation.y=i,n.add(m),!a.partial)n.add(d(new vt(r,14,10),c.hab,e+l*(o/2),u,t+h*(o/2))),n.add(d(new vt(r,14,10),c.hab,e-l*(o/2),u,t-h*(o/2)));else{n.add(d(new vt(r,14,10),c.hab,e-l*(o/2),u,t-h*(o/2)));const f=e+l*(o/2+2.3),g=t+h*(o/2+2.3);n.add(d(new vt(r,14,10,0,Math.PI*2,0,Math.PI/2),c.hab,f,s+1.45,g,.22,.3,.1))}for(let f=-2;f<=2;f++){const g=e+l*f*1.75,v=t+h*f*1.75;n.add(d(new p(.8,.55,.08),c.glowWarm,g-h*r,u+.08,v+l*r))}if(a.airlock){const f=e-h*(r+1.15),g=t+l*(r+1.15);n.add(d(new N(1.15,1.15,2.2,12),c.habDark,f,u,g,Math.PI/2,i,0)),n.add(d(new p(1,1.6,.1),c.steelDark,f-h*1.15,u,g+l*1.15,0,i,0)),n.add(d(new Ne(1.18,.07,6,14),c.steel,f+h*.2,u,g-l*.2,0,i,0)),n.add(b("AIRLOCK","#1a100c","#f0c089",2.15,.5,f-h*.2,u+1.45,g+l*.2,i))}a.label&&n.add(b(a.label,"#1a100c","#f0c089",2.7,.65,e,u+r+.55,t+.15,i))}function x1(){const n=new O;n.name="pressure-habs";const e=I(-46,-101);n.add(d(new p(28,.2,22),c.concrete,-50,e+.06,-101)),un(n,-46,-108,0,{airlock:!0,label:"HAB 2"}),un(n,-46,-94,0,{onStands:!0,airlock:!0,label:"HAB KIT"});const t=I(-46,-101)+3.15;return n.add(d(new N(1.15,1.15,8.2,12),c.habDark,-46,t,-101,Math.PI/2,0,0)),n.add(d(new Ne(1.2,.08,6,14),c.steel,-46,t,-105.1,Math.PI/2,0,0)),n.add(d(new Ne(1.2,.08,6,14),c.steel,-46,t,-96.9,Math.PI/2,0,0)),n.add(b("CONNECT","#1a100c","#f0c089",2.4,.5,-46,t+1.55,-101)),un(n,-58,-102,Math.PI/2,{onStands:!0,partial:!0,label:"MOD"}),Ee(n,-54.5,-110.2,.25),Ee(n,-52.8,-111.4,-.3,1.08),Ee(n,-61.2,-96.4,.4),Ee(n,-40.6,-90.8,.15,1.05),n}function nn(n,e,t){const i=new O;i.name="eva";const a=I(n,e);return i.position.set(n,a,e),i.rotation.y=t,i.add(d(new p(.56,.8,.4),c.suit,0,1.46,0)),i.add(d(new p(.44,.5,.24),c.suitDark,0,1.52,-.3)),i.add(d(new vt(.21,12,10),c.suit,0,2.04,.02)),i.add(d(new vt(.165,10,8,0,Math.PI*2,0,Math.PI*.58),c.visor,0,2.04,.1)),i.add(d(new p(.17,.6,.17),c.suit,-.4,1.36,.04)),i.add(d(new p(.17,.6,.17),c.suit,.4,1.36,.04)),i.add(d(new p(.2,.76,.2),c.suitDark,-.15,.7,0)),i.add(d(new p(.2,.76,.2),c.suitDark,.15,.7,0)),i}function _1(n,e,t,i){const a=I(e,t),s=new O;s.position.set(e,a,t),s.rotation.y=i,s.add(d(new p(1.2,.18,.72),c.steelDark,0,.62,0)),s.add(d(new p(1.15,.28,.68),c.crate,0,.86,0)),s.add(d(new p(.08,.55,.08),c.steel,-.48,.32,.26)),s.add(d(new p(.08,.55,.08),c.steel,.48,.32,.26)),s.add(d(new p(.08,.55,.08),c.steel,-.48,.32,-.26)),s.add(d(new p(.08,.55,.08),c.steel,.48,.32,-.26));const r=new N(.12,.12,.1,10);s.add(d(r,c.roverDark,-.48,.12,.3,Math.PI/2,0,0)),s.add(d(r,c.roverDark,.48,.12,.3,Math.PI/2,0,0)),s.add(d(r,c.roverDark,-.48,.12,-.3,Math.PI/2,0,0)),s.add(d(r,c.roverDark,.48,.12,-.3,Math.PI/2,0,0)),s.add(d(new p(.06,.7,.06),c.steel,-.22,1.3,.08)),s.add(d(new p(.06,.55,.06),c.steel,.18,1.22,-.06)),s.add(d(new p(.22,.12,.12),c.steelDark,-.22,1.68,.08)),n.add(s)}function v1(n,e,t,i){const a=I(e,t),s=new O;s.position.set(e,a,t),s.rotation.y=i,s.add(d(new p(.85,2.45,.32),c.steelDark,0,1.32,0)),s.add(d(new Ne(.42,.07,8,14),c.steel,0,1.58,.22)),s.add(d(new N(.38,.38,.1,12),c.habDark,0,1.58,.18,Math.PI/2,0,0)),s.add(d(new p(.7,.16,.55),c.steel,0,.12,.05)),n.add(s)}function M1(){const n=new O;n.name="eva-presence",n.add(nn(2.4,12.2,rn(2.4,12.2,0,7))),n.add(nn(-2.2,11.5,rn(-2.2,11.5,0,7))),n.add(nn(3.8,15.6,.35)),n.add(nn(.6,18.2,Math.PI)),_1(n,4.3,14.8,.4),v1(n,-3.9,9.1,.2),Ee(n,5.4,13.2,.2,.85);const e=I(5.1,16.4);return n.add(d(new p(.1,2.2,.1),c.steelDark,5.1,e+1.1,16.4)),n.add(b("EVA PREP","#1a100c","#f0c089",2.3,.55,5.1,e+2.45,16.4,-.35)),n}function w1(){const n=new O;n.name="survey";const e=-82,t=-176,i=I(e,t);for(let l=0;l<3;l++){const h=l/3*Math.PI*2+.4,m=Math.cos(h)*.62,f=Math.sin(h)*.62;n.add(d(new p(.08,2.5,.08),c.steelDark,e+m,i+1.15,t+f,.32*Math.cos(h),0,.32*Math.sin(h)))}n.add(d(new p(.58,.32,.48),c.roverDark,e,i+2.28,t)),n.add(d(new N(.04,.04,1.35,6),c.steel,e,i+3.08,t)),n.add(d(new p(.22,.12,.22),c.steelDark,e,i+3.78,t)),n.add(d(new p(.12,2.2,.12),c.steelDark,e+1.15,i+1.1,t+.2)),n.add(b("SURVEY","#1a100c","#f0c089",2.6,.7,e+.2,i+3.55,t+1.15));const a=[[-108,-210],[-98,-210],[-88,-210],[-78,-210],[-68,-210],[-108,-198],[-98,-198],[-88,-198],[-78,-198],[-68,-198],[-108,-186],[-98,-186],[-88,-186],[-78,-186],[-68,-186],[-108,-174],[-98,-174],[-88,-174],[-78,-174],[-68,-174]];for(let l=0;l<a.length;l++){const[h,m]=a[l];Yr(n,h,m,l%3===0?c.flagIce:c.flagDeposit)}Za(n,-96,-198,"ICE",c.flagIce),Za(n,-72,-204,"H2O",c.flagIce),Za(n,-104,-176,"DEPOSIT",c.flagDeposit);const s=[[-90,-184,.2],[-88.4,-182.6,-.4],[-91.2,-181.8,.7],[-86.6,-185.2,.1]];for(const[l,h,m]of s)Cr(n,l,h,m);Ee(n,-84.5,-180.4,.15,.85),n.add(b("SAMPLES","#1a2830","#d6e6ef",2.2,.55,-90,I(-90,-184)+1.55,-184));const r={x:-60,z:-162},o={x:-100,z:-200},u=14;for(let l=0;l<u;l++){const h=l/(u-1),m=r.x+(o.x-r.x)*h,f=r.z+(o.z-r.z)*h,g=I(m,f),v=Math.atan2(o.x-r.x,o.z-r.z);for(const w of[-.55,.55]){const _=Math.cos(v)*w,x=-Math.sin(v)*w,C=d(new p(.42,.05,.85),c.track,m+_,g+.04,f+x,0,v,0);C.castShadow=!1,n.add(C)}}return n}function se(n,e,t,i=.14){const a=[];for(let o=0;o<e.length;o++){const[u,l]=e[o],h=I(u,l)+1.05;a.push(new M(u,h,l)),o%2===0&&n.add(d(new p(.18,1.05,.18),c.steelDark,u,I(u,l)+.5,l))}const s=new ki(a),r=new dt(new ai(s,28,i,6,!1),t);r.castShadow=!1,n.add(r)}function y1(){const n=new O;return n.name="methalox-lines",se(n,[[-76,-10.6],[-52,-18],[-32,-14],[-18,-8.4]],c.tankCh4,.13),se(n,[[-76,-21.2],[-52,-24],[-32,-18],[-18,-9.6]],c.steel,.13),n.add(b("TO PAD","#1a100c","#f0c089",2.2,.5,-50,I(-50,-18)+2.15,-16.4)),n}function b1(){const n=new O;n.name="methalox-stand";const e=-15,t=-8,i=I(e,t);n.add(d(new p(8.6,.16,5.4),c.steelDark,e,i+.42,t)),n.add(d(new N(.88,.88,3.5,14),c.tankCh4,e-2.25,i+2.2,t+.55)),n.add(d(new N(.88,.88,3.5,14),c.tankO2,e-2.25,i+2.2,t-1.25)),n.add(b("CH4","#6a2208","#f4e6c8",1.45,.42,e-1.3,i+2.25,t+.55,Math.PI/2)),n.add(b("O2","#2a3340","#e8eef4",1.45,.42,e-1.3,i+2.25,t-1.25,Math.PI/2));const a=[[1.55,1.65],[1.55,-1.65],[3.45,1.65],[3.45,-1.65]];for(const[s,r]of a)n.add(d(new p(.16,3.15,.16),c.steelDark,e+s,i+1.88,t+r));return n.add(d(new p(2.25,.12,3.5),c.steel,e+2.5,i+3.5,t)),n.add(d(new Ne(.42,.11,8,14),c.tankCh4,e+.15,i+1.45,t+.55,Math.PI/2,0,0)),n.add(d(new Ne(.42,.11,8,14),c.steel,e+.15,i+1.45,t-1.2,Math.PI/2,0,0)),n.add(d(new N(.09,.09,6.4,8),c.tankCh4,e+4.55,i+1.18,t+.55,0,0,Math.PI/2)),n.add(d(new N(.09,.09,6.4,8),c.steel,e+4.55,i+.98,t-1.2,0,0,Math.PI/2)),n.add(d(new p(1.55,1.05,1.15),c.habDark,e+.55,i+.98,t+1.85)),n.add(d(new N(.55,.55,2.8,12),c.tankCh4,e-.4,i+1.15,t+2.55,0,0,Math.PI/2)),n.add(d(new p(1.6,.35,.85),c.steelDark,e-.4,i+.55,t+2.55)),n.add(b("METHALOX","#1a100c","#f0c089",3.15,.68,e+2.5,i+4.12,t)),n.add(b("RETURN PROPELLANT","#1a100c","#f0c089",3.85,.58,e+2.5,i+3.42,t+.02)),n.add(d(new N(.22,.28,3.2,10),c.steelDark,e+5.4,i+2,t+.2)),n.add(d(new p(7.6,.22,.22),c.steel,e+8.8,i+3.55,t+1.4,0,-.45,.18)),n.add(d(new p(6.2,.18,.18),c.tankCh4,e+11.6,i+4.4,t+2.6,0,-.45,.12)),n.add(d(new p(6.2,.18,.18),c.steel,e+11.6,i+4.05,t+2.85,0,-.45,.12)),n.add(d(new N(.28,.22,1.1,10),c.steelDark,e+14.2,i+4.7,t+3.6)),n.add(b("LOAD ARM","#1a100c","#f0c089",2.8,.45,e+8.2,i+4.85,t+1.1,-.45)),n}function S1(){const n=new O;n.name="spaceport-sign";const e=17,t=-17,i=I(e,t);return n.add(d(new p(.12,3.5,.12),c.steelDark,e,i+1.75,t)),n.add(b("SPACEPORT","#1a100c","#f0c089",3.5,.85,e,i+3.45,t,.55)),n.add(b("METHALOX PAD","#1a100c","#d6b48a",3.2,.58,e,i+2.55,t,.55)),n}function E1(n,e,t,i,a,s){const r=i-e,o=a-t,u=Math.hypot(r,o),l=Math.ceil(u/6),h=Math.atan2(r,o);for(let m=0;m<l;m++){const f=(m+.5)/l,g=e+r*f,v=t+o*f,w=I(g,v),_=u/l+.35,x=d(new p(s+1.7,.055,_+.25),c.roadBed,g,w+.03,v,0,h,0);x.castShadow=!1,n.add(x);const C=d(new p(s,.08,_+.15),c.padRing,g,w+.07,v,0,h,0);C.castShadow=!1,n.add(C)}}function T1(n,e,t,i=4.2){const a=I(e,t),s=d(new N(i+.8,i+.8,.06,20),c.roadBed,e,a+.03,t);s.castShadow=!1,n.add(s);const r=d(new N(i,i,.08,20),c.graded,e,a+.07,t);r.castShadow=!1,n.add(r)}function A1(){const n=new O;n.name="roads";const e=[[0,18,0,-124,5.2],[0,-40,84,-42,4.6],[0,-40,-68,-16,4.6],[0,-92,-56,-154,4],[16,-72,48,-86,3.6],[12,8,50,22,4.2],[16,28,22,78,3.5],[-58,-158,-90,-190,3.6],[-14,-104,-32,-98,3.4],[84,-42,112,-83,3.6],[0,-108,22,-112,3.6],[22,-112,48,-86,3.4],[-6,-116,-18,-138,3.2],[0,8,-15,-8,3.4],[16,28,36,72,3.8],[0,18,-24,44,3.8],[-58,-158,-64,-90,4.2],[-64,-90,-68,-16,4.2],[-18,-138,-32,-148,3.2],[-32,-98,-46,-100,3.4],[0,18,-48,68,3.8],[16,28,78,56,3.8],[-6,-116,-13,-134,3.4],[22,-112,38,-126,3.4],[-58,-158,-60,-148,3.2],[-64,-118,-18,-88,3.6],[84,-42,68,-10,3.4],[-6,-108,-18,-88,3.2],[38,-126,8,-142,3.4],[-13,-134,8,-142,3.2],[112,-83,135,-40,3.6],[68,-10,68,6,3.2],[-13,-134,-28,-138,3],[-46,-108,-20,-132,3.2],[-6,-108,-6,-132,3.2],[-6,-96,2,-22,3.4],[-32,-98,-36,-74,3.2],[-40,-76,-32,-98,3.2],[-40,-76,-50,-72,3],[-6,-132,10,-124,3.2],[10,-124,8,-142,3],[0,8,20,8,3.4],[22,82,-16,136,3.6],[0,32,-16,136,3.4],[135,-40,158,-62,3.4],[-68,-16,-96,-16,3.6],[-58,-158,-78,-172,3.4],[48,-86,66,-74,3.4],[8,-142,18,-152,3.2],[-18,-88,18,-152,3.2],[-32,-148,-8,-162,3.2],[-6,-108,8,-98,3.2],[22,-112,8,-98,3.2],[48,-86,48,-70,3.2],[-68,-16,-68,12,3.2],[-36,-74,22,-80,3.2],[48,-86,22,-80,3.2],[22,-112,52,-112,3.2],[38,-126,52,-112,3.2],[-78,-172,-90,-158,3.2],[8,-98,8,-78,3.2],[22,-80,8,-78,3.2],[8,-98,-8,-88,3.2],[-22,-88,-8,-88,3.2],[-96,-16,-96,4,3.2],[158,-62,142,-62,3.2],[8,-142,28,-140,3.2],[18,-152,28,-140,3.2],[-90,-158,-90,-148,3.2],[5,16,12,18,3],[20,8,36,8,3.2],[36,8,36,-6,3.2],[-68,4,-50,4,3.2],[-58,-158,-58,-142,3.2],[-15,-8,-32,-22,3.2],[66,-74,66,-90,3.2],[8,-98,22,-98,3.2],[158,-62,172,-48,3.2],[22,-112,38,-104,3.2],[10,-124,24,-128,3],[-68,12,-80,20,3.2],[-16,136,6,148,3],[-48,68,-64,80,3.2],[-80,20,-80,32,3.2],[135,-40,100,-22,3.2],[100,-22,68,-10,3.2],[-36,-74,-22,-56,3.2],[-90,-158,-124,-188,3.2],[-50,4,-38,16,3.2],[52,-112,70,-112,3.2],[22,82,16,48,3],[-58,-142,-58,-36,3.2],[-58,-36,-68,-16,3.2],[36,8,50,4,3],[-58,-158,-40,-168,3],[66,-90,82,-90,3.2],[-8,-162,4,-148,3],[135,-40,148,-40,3.2],[112,-83,124,-70,3.2],[82,-44,96,-44,3.2],[-68,12,-84,8,3.2],[-8,-88,16,-86,3.2],[135,-40,135,-22,3.2],[124,-70,100,-70,3.2],[82,-44,82,-28,3.2],[-68,-16,-68,2,3.2],[135,-40,122,-40,3],[112,-83,98,-83,3],[82,-44,70,-44,3],[-90,-158,-102,-158,3.2],[8,-78,-18,-78,3.2],[-78,-172,-64,-184,3.2],[18,-152,32,-152,3.2],[-96,4,-96,16,3.2],[66,-74,82,-74,3.2],[-78,-172,-78,-156,3.2],[-96,4,-110,8,3.2],[-110,8,-110,20,3.2],[-110,20,-110,32,3.2],[-110,8,-122,8,3.2],[-122,8,-122,20,3.2],[8,-98,-8,-98,3.2],[-8,-98,-22,-98,3.2],[-8,-88,8,-88,3.2],[-58,-36,-78,-36,3.2],[82,-90,96,-90,3.2],[8,-78,-5,-78,3],[4,-148,16,-148,3.2],[-90,-148,-90,-136,3.2],[16,-86,16,-74,3.2],[-32,-148,-48,-138,3.2],[52,-112,52,-126,3.2],[52,-126,70,-126,3.2],[0,-68,0,-118,3],[48,-70,90,-80,3],[-46,-148,-90,-148,3],[-38,16,-68,12,3],[38,-104,52,-112,3],[172,-48,158,-62,3],[-16,36,4,32,3],[4,-138,-18,-138,3],[68,6,50,4,3],[66,-90,66,-104,3.2],[66,-104,80,-104,3],[6,148,18,136,3],[8,-98,22,-98,3],[172,-48,172,-62,3],[-64,-184,-92,-184,3.2],[-18,-88,-32,-88,3],[96,-90,96,-104,3],[-15,-8,-28,-8,3],[-28,-8,-28,6,3],[-32,-88,-46,-88,3],[-50,4,-50,-22,3],[-68,12,-80,20,3],[-38,16,-38,28,3],[-58,-142,-46,-132,3],[38,-104,24,-118,3],[-90,-136,-110,-136,3.2],[-32,-98,-22,-110,3],[172,-62,158,-48,3],[96,-90,110,-90,3],[8,-98,8,-110,3],[-46,-148,-70,-148,3],[82,-28,96,-28,3],[124,-70,124,-83,3],[148,-40,148,-22,3],[32,-152,46,-152,3],[18,136,32,136,3],[-8,-98,-8,-110,3],[96,-104,110,-104,3],[82,-28,70,-28,3],[124,-70,136,-70,3]];for(const[i,a,s,r,o]of e)E1(n,i,a,s,r,o);for(const[i,a,s]of[[0,-40,5.2],[0,-108,4.4],[84,-42,4],[22,-112,3.8],[0,10,4.6],[-64,-90,4.2],[36,72,3.6],[-46,-100,3.6],[38,-126,3.6],[-18,-88,3.8],[68,-10,3.8],[-48,68,3.6],[78,56,3.6],[-13,-134,3.6],[8,-142,3.6],[135,-40,3.6],[68,6,3.6],[-36,-74,3.6],[2,-22,3.4],[-50,-72,3.4],[10,-124,3.6],[20,8,3.6],[-16,136,4.2],[158,-62,3.6],[-96,-16,3.8],[-78,-172,3.6],[66,-74,3.6],[18,-152,3.4],[-8,-162,3.4],[8,-98,3.4],[48,-70,3.4],[-68,12,3.4],[22,-80,3.4],[52,-112,3.6],[-90,-158,3.4],[8,-78,3.4],[-8,-88,3.4],[-96,4,3.4],[142,-62,3.4],[28,-140,3.4],[-90,-148,3.4],[12,18,3.2],[36,8,3.4],[36,-6,3.4],[-50,4,3.4],[-58,-142,3.4],[-32,-22,3.4],[66,-90,3.4],[22,-98,3.4],[172,-48,3.4],[38,-104,3.4],[24,-128,3.2],[-80,20,3.4],[6,148,3.2],[-64,80,3.4],[-80,32,3.4],[100,-22,3.4],[-22,-56,3.4],[-124,-188,3.4],[-38,16,3.4],[70,-112,3.4],[16,48,3.2],[-58,-36,3.4],[50,4,3.2],[-40,-168,3.2],[82,-90,3.4],[4,-148,3.2],[148,-40,3.4],[124,-70,3.4],[96,-44,3.4],[-84,8,3.4],[16,-86,3.4],[135,-22,3.4],[100,-70,3.4],[82,-28,3.4],[-68,2,3.4],[122,-40,3.2],[98,-83,3.2],[70,-44,3.2],[-102,-158,3.4],[-18,-78,3.4],[-64,-184,3.2],[32,-152,3.4],[-96,16,3.4],[82,-74,3.6],[-78,-156,3.4],[-110,8,3.4],[-110,20,3.4],[-110,32,3.4],[-122,8,3.4],[-122,20,3.4],[-8,-98,3.4],[-22,-98,3.4],[8,-88,3.4],[-78,-36,3.4],[96,-90,3.4],[-5,-78,3.2],[16,-148,3.2],[-90,-136,3.4],[16,-74,3.2],[-48,-138,3.2],[52,-126,3.4],[70,-126,3.4],[0,-68,3.2],[48,-70,3.2],[-46,-148,3.2],[-38,16,3.2],[38,-104,3.2],[172,-48,3.2],[-16,36,3.2],[4,-138,3.2],[68,6,3.2],[66,-104,3.4],[80,-104,3.2],[18,136,3.2],[22,-98,3.2],[172,-62,3.2],[-92,-184,3.2],[-32,-88,3.2],[96,-104,3.2],[-28,-8,3.2],[-28,6,3.2],[-46,-88,3.2],[-50,-22,3.2],[-80,20,3.2],[-38,28,3.2],[-46,-132,3.2],[24,-118,3.2],[-110,-136,3.2],[-22,-110,3.2],[158,-48,3.2],[110,-90,3.2],[8,-110,3.2],[-70,-148,3.2],[96,-28,3.2],[124,-83,3.2],[148,-22,3.2],[46,-152,3.2],[32,136,3.2],[-8,-110,3.2],[110,-104,3.2],[70,-28,3.2],[136,-70,3.2]])T1(n,i,a,s);const t=[[3.2,-20],[-3.2,-20],[3.2,-60],[-3.2,-60],[3.2,-90],[22,-40],[42,-40],[64,-41],[-22,-32],[-44,-24],[8,-110],[16,-111],[-8,-130],[-28,-148],[-70,-172],[96,-58],[104,-72],[28,50],[32,62],[-12,30],[-20,40],[-60,-130],[-66,-70],[-66,-40],[-26,-144],[-40,-100],[-52,-108],[3.4,12],[-3.2,12],[30,-118],[38,-126],[-60,-148],[-64,-118],[-18,-88],[68,-10]];for(const[i,a]of t)Yr(n,i,a,c.flagDeposit);return n}function R1(){const n=new O,e=[[18,-8],[-16,-6],[12,-48],[-10,-70],[6,-100],[30,-100],[-30,-20],[40,-40],[40,18],[58,32],[16,70],[28,88],[-54,-8],[-80,-176],[-96,-196],[-28,-90],[112,-80],[100,-50],[0,-40],[22,-112],[32,-112],[70,-40],[84,-44],[36,60],[-24,32],[-64,-90],[-40,-148],[-32,-156],[4,14],[-46,-108],[-46,-92],[-58,-102],[38,-126],[-18,-88],[68,-10],[-60,-148],[-64,-118],[-22,-88]];for(const[t,i]of e){const a=I(t,i);n.add(d(new N(.1,.12,5.2,6),c.steelDark,t,a+2.6,i)),n.add(d(new p(.7,.15,.35),c.glowWarm,t,a+5.3,i))}return n}function C1(){const n=new O,e=14,t=22,i=I(e,t);n.add(d(new p(.12,3.6,.12),c.steelDark,e,i+1.8,t));const a=b("BASE ALPHA","#1a100c","#f0c089",3.8,1.05,e,i+3.55,t,.4);n.add(a);const s=b("CARGO CAMPAIGN","#1a100c","#f0c089",3.4,.7,e,i+2.55,t,.4);n.add(s);const r=b("ARCADIA PLANITIA","#1a100c","#d6b48a",3.2,.55,18,I(18,26)+2.15,26,.15);n.add(d(new p(.1,2.2,.1),c.steelDark,18,I(18,26)+1.1,26)),n.add(r);const o=20,u=36,l=I(o,u);return n.add(d(new p(.1,2.6,.1),c.steelDark,o,l+1.3,u)),n.add(b("6 SHIPS","#1a100c","#f0c089",2.6,.65,o,l+3.15,u,.25)),n.add(b("TWO WINDOWS","#1a100c","#d6b48a",2.8,.5,o,l+2.45,u,.25)),n}function rn(n,e,t,i){return Math.atan2(-(i-e),t-n)}function ac(n,e){const t=new O;t.name="window-offload";const i=[[n,e,.2],[n-1.8,e+2.1,-.3],[n+1.6,e+2.4,.7],[n-2.4,e-1.2,.15],[n+.8,e-2.2,1.1],[n-3.2,e+.6,-.4]];for(const[o,u,l]of i)Ee(t,o,u,l);Ee(t,n-4.2,e+1.4,.2,1.12),Ee(t,n-5.4,e-.6,-.15,1.05);const[a,s,r]=Ot(n-1.2,e,.08);return t.add(d(new p(7.2,.12,3.8),c.steelDark,a,s,r,0,.12,0)),t.add(b("CARGO","#1a100c","#f0c089",2.4,.65,n-4.2,I(n-4.2,e+1.4)+2.4,e+1.4,.4)),t}function P1(){const n=new O;n.name="earth-dish";const e=-32,t=-148,i=I(e,t);n.add(d(new N(8.6,8.6,.28,32),c.concrete,e,i+.1,t)),n.add(d(new N(1.45,1.85,5.4,14),c.steelDark,e,i+2.8,t)),n.add(d(new N(2.05,2.05,.42,18),c.steel,e,i+5.55,t)),n.add(d(new Ne(2.15,.12,8,20),c.lattice,e,i+5.8,t,Math.PI/2,0,0)),n.add(d(new p(.32,4.4,.32),c.lattice,e-2.55,i+7.6,t)),n.add(d(new p(.32,4.4,.32),c.lattice,e+2.55,i+7.6,t)),n.add(d(new p(5.6,.32,.32),c.lattice,e,i+9.75,t));const a=new O;a.position.set(e,i+9.5,t),a.rotation.set(-.92,.68,0);const s=d(new vt(7.6,28,16,0,Math.PI*2,0,Math.PI/2.28),c.dish,0,0,0);a.add(s);const r=d(new vt(7.72,20,10,0,Math.PI*2,0,Math.PI/2.45),c.steelDark,0,-.12,0);a.add(r);for(let h=0;h<8;h++){const m=h/8*Math.PI*2;a.add(d(new p(.07,.07,7.4),c.steelDark,0,.18,0,.12,m,0))}a.add(d(new N(.07,.07,5.4,6),c.steelDark,0,2.7,0)),a.add(d(new N(.38,.2,.75,10),c.steel,0,5.35,0)),n.add(a);const o=e-8.2,u=t-5.6,l=I(o,u);return n.add(d(new p(4.6,2.5,3.4),c.habDark,o,l+1.35,u)),n.add(d(new p(2.2,.85,1.4),c.steelDark,o+2.8,l+.55,u+.4)),n.add(b("EARTH LINK","#1a100c","#f0c089",3.6,.75,e,i+4.2,t+6.4)),n.add(b("LIGHT TIME 12 MIN","#1a100c","#d6b48a",3.9,.6,e,i+3.4,t+6.4)),n.add(b("NOT REAL-TIME","#1a100c","#d6b48a",3.3,.5,o,l+2.85,u+1.85)),n.add(d(new p(.1,2.8,.1),c.steelDark,e+6.6,i+1.4,t+5.2)),n.add(b("DSN / STARSHIP","#1a100c","#f0c089",3.2,.55,e+6.6,i+3.15,t+5.2,-.5)),n}function on(n,e,t,i={}){const a=new O;a.name=i.kind==="cargo"?"cargo-haul":"ice-haul";const s=I(n,e);a.position.set(n,s,e),a.rotation.y=t,a.add(d(new p(4.2,1.25,2.2),c.rover,.2,1.45,0)),a.add(d(new p(1.55,.85,1.7),c.roverDark,1.55,2.25,0)),a.add(d(new p(2.5,.08,1.7),c.solar,.05,2.16,0)),a.add(d(new N(.06,.06,1.6,6),c.steel,1.2,2.95,0)),a.add(d(new p(1.15,.2,.32),c.steelDark,-2.45,1.02,0));const r=new N(.62,.62,.38,12),o=[[-1.35,.62,1.22],[.25,.62,1.22],[1.55,.62,1.22],[-1.35,.62,-1.22],[.25,.62,-1.22],[1.55,.62,-1.22]];for(const[h,m,f]of o)a.add(d(r,c.roverDark,h,m,f,Math.PI/2,0,0));const u=-5.7;a.add(d(new p(4.5,.22,2.4),c.steelDark,u,1.02,0));const l=[[-4.5,.52,1.22],[-6.7,.52,1.22],[-4.5,.52,-1.22],[-6.7,.52,-1.22]];for(const[h,m,f]of l)a.add(d(new N(.5,.5,.32,12),c.roverDark,h,m,f,Math.PI/2,0,0));if(i.kind==="cargo")a.add(d(new p(1.55,1.2,1.55),c.crate,u-.95,1.78,.12)),a.add(d(new p(1.55,1.2,1.55),c.crate,u+.9,1.78,-.08)),i.loaded!==!1&&a.add(d(new p(1.35,1.05,1.35),c.crate,u,2.9,.05)),a.add(b("CARGO","#1a100c","#f0c089",1.7,.42,u,2.05,1.28));else{if(a.add(d(new p(4.2,1.15,.1),c.steel,u,1.68,1.12)),a.add(d(new p(4.2,1.15,.1),c.steel,u,1.68,-1.12)),a.add(d(new p(.1,1.15,2.25),c.steel,u-2.15,1.68,0)),a.add(d(new p(.1,1.15,2.25),c.steel,u+2.15,1.68,0)),i.loaded!==!1){const h=d(new mt(1.15,0),c.ice,u,1.82,0);h.scale.set(1.65,.68,.95),a.add(h),a.add(d(new mt(.52,0),c.ice,u+.95,1.92,.22)),a.add(d(new mt(.4,0),c.ice,u-.85,1.88,-.18))}a.add(b("ICE","#1a2830","#d6e6ef",1.35,.38,u,2.35,1.24))}return a}function Va(n,e,t,i,a,s=16){const r=Math.atan2(i-e,a-t);for(let o=0;o<s;o++){const u=o/(s-1),l=e+(i-e)*u,h=t+(a-t)*u,m=I(l,h);for(const f of[-.7,.7]){const g=Math.cos(r)*f,v=-Math.sin(r)*f,w=d(new p(.4,.05,.9),c.track,l+g,m+.04,h+v,0,r,0);w.castShadow=!1,n.add(w)}}}function D1(){const n=new O;n.name="haul-loop";const e=-64,t=-90,i=I(e,t);n.add(d(new p(11,.2,8.4),c.concrete,e,i+.08,t)),n.add(d(new p(2.6,3.2,2.6),c.steelDark,e+2.4,i+1.75,t-1.4)),n.add(d(new p(3.4,.18,1.3),c.steel,e+.2,i+2.35,t-1.4,0,0,.18));const a=d(new mt(2.4,0),c.ice,e-2.6,i+1.15,t+1.6);a.scale.set(1.35,.7,1.15),n.add(a),n.add(d(new mt(1.1,0),c.ice,e-1.2,i+.85,t+2.4)),n.add(d(new p(.22,5.6,.22),c.lattice,e+3.6,i+2.9,t+2.2)),n.add(d(new p(.22,4.2,.22),c.lattice,e+3.6,i+4.4,t+.4,.7,0,0)),n.add(d(new p(1.6,.7,.7),c.steelDark,e+3.6,i+5.5,t-.6)),n.add(b("ICE TRANSFER","#1a2830","#d6e6ef",3.5,.7,e,i+3.7,t+3.4)),n.add(b("MINE TO ISRU","#1a100c","#f0c089",3.1,.5,e,i+2.95,t+3.4));const s={x:-58,z:-158},r={x:-68,z:-16},o={x:0,z:0};return n.add(on(-55,-146,rn(-55,-146,r.x,r.z),{kind:"ice",loaded:!0})),n.add(on(-61,-118,rn(-61,-118,r.x,r.z),{kind:"ice",loaded:!0})),n.add(on(-66,-78,rn(-66,-78,r.x,r.z),{kind:"ice",loaded:!0})),n.add(on(-68,-38,rn(-68,-38,r.x,r.z),{kind:"ice",loaded:!0})),n.add(on(-70,-62,rn(-70,-62,s.x,s.z),{kind:"ice",loaded:!1})),n.add(on(-50,-24,rn(-50,-24,o.x,o.z),{kind:"cargo",loaded:!0})),n.add(on(-18,-14,rn(-18,-14,12,8),{kind:"cargo",loaded:!0})),n.add(on(22,12,rn(22,12,50,22),{kind:"cargo",loaded:!0})),Va(n,-58,-156,-64,-92,18),Va(n,-64,-88,-68,-20,16),Va(n,-66,-18,-16,-10,12),Va(n,-14,-8,20,12,10),n}function ji(n,e,t,i,a,s=8,r=1.15,o=.16){const u=[];for(let h=0;h<=s;h++){const m=h/s,f=e+(i-e)*m,g=t+(a-t)*m,v=I(f,g)+r;u.push(new M(f,v,g)),h%2===0&&n.add(d(new p(.16,r,.16),c.steelDark,f,I(f,g)+r*.5,g))}const l=new dt(new ai(new ki(u),s*2,o,6,!1),c.pipe);l.castShadow=!1,n.add(l)}function I1(){const n=new O;n.name="food";const e=38,t=-126,i=I(e,t);n.add(d(new p(13.2,.25,7.6),c.concrete,e,i+.1,t));const a=new dt(new N(3.55,3.55,12.4,18,1,!1,0,Math.PI),c.glass);a.rotation.z=Math.PI/2,a.position.set(e,i+3.55,t),a.castShadow=!1,n.add(a),n.add(d(new p(12.2,.1,7.2),c.solarFrame,e,i+3.6,t));for(let s=-2;s<=2;s++){n.add(d(new p(1.85,.24,5.6),c.soil,e+s*2.1,i+.34,t));for(let r=-2;r<=2;r++){const o=r%2===0?c.plant:c.plantLeaf;n.add(d(new p(1.25,.58,.72),o,e+s*2.1,i+.78,t+r*.95))}n.add(d(new p(1.5,.05,5.2),c.glowWarm,e+s*2.1,i+3.15,t))}return n.add(d(new p(1.1,1.8,.14),c.habDark,e-6.2,i+1.1,t)),n.add(d(new N(.14,.14,12,8),c.pipe,30,I(30,-119)+1.2,-119,0,0,Math.PI/2)),n.add(b("FOOD","#1a100c","#f0c089",2.8,.7,e,i+5.05,t+.15)),n.add(b("GROW FROM CO2","#1a100c","#d6b48a",3.6,.5,e,i+4.35,t+.15)),Ee(n,45,-122,.2,.9),Ee(n,46.2,-124.4,-.3,.85),n}function L1(){const n=new O;n.name="water-loop";const e=-60,t=-148,i=I(e,t);n.add(d(new p(7.2,.22,5.4),c.concrete,e,i+.1,t)),n.add(d(new p(3.4,2.1,2.4),c.habDark,e-1.1,i+1.2,t)),n.add(d(new N(1.15,1.15,2.6,12),c.steel,e+1.8,i+1.5,t+.4)),n.add(d(new p(1.6,.7,1.2),c.ice,e+1.8,i+3.05,t+.4)),n.add(b("MELT","#1a2830","#d6e6ef",2.2,.55,e-1.1,i+1.7,t+1.35)),n.add(b("ICE","#1a2830","#d6e6ef",1.5,.42,e+1.8,i+1.7,t+1.7));const a=-64,s=-118,r=I(a,s);n.add(d(new p(7.4,.22,5.2),c.concrete,a,r+.1,s)),n.add(d(new p(3.6,2.2,2.6),c.steelDark,a,r+1.25,s)),n.add(d(new N(.55,.55,2.8,10),c.pipe,a+2.2,r+1.6,s-.6)),n.add(b("FILTER","#1a2830","#d6e6ef",2.5,.55,a,r+1.85,s+1.45));const o=-18,u=-88,l=I(o,u);return n.add(d(new p(9.2,.22,7.2),c.concrete,o,l+.1,u)),n.add(d(new N(2.15,2.15,5.6,16),c.tankO2,o-1.6,l+3,u)),n.add(d(new N(1.55,1.55,4.2,14),c.pipe,o+2.4,l+2.3,u+1.1)),n.add(b("POTABLE","#1a2830","#d6e6ef",3.2,.7,o-1.6,l+3.2,u+2.35)),n.add(b("H2O","#1a2830","#d6e6ef",1.8,.5,o+2.4,l+2.5,u+2.55)),n.add(b("ICE TO CREW","#1a100c","#f0c089",3.1,.5,o,l+6.15,u)),ji(n,-58,-154,e,t,6,1.2,.15),ji(n,e,t,a,s,8,1.2,.15),ji(n,a,s,-68,-26,10,1.15,.14),ji(n,a,s,o,u,10,1.2,.15),ji(n,o,u,-6,-100,8,1.15,.13),n}function U1(){const n=new O;n.name="batteries";const e=68,t=-10,i=I(e,t);n.add(d(new p(15.2,.22,7.2),c.concrete,e,i+.1,t));for(let o=0;o<6;o++){const u=e-5.5+o*2.2;n.add(d(new p(1.85,2.15,4.4),c.battery,u,i+1.25,t)),n.add(d(new p(1.7,.08,4.2),c.steel,u,i+2.38,t))}n.add(b("BATTERY","#111111","#f4e6c8",3.4,.7,e,i+3.15,t+3.75)),n.add(b("NIGHT STORE","#111111","#d6b48a",3.5,.55,e,i+2.45,t+3.75)),n.add(d(new N(.12,.12,18,8),c.cable,61,I(61,-14)+1.4,-14,0,0,Math.PI/2));const a=-22,s=-88,r=I(a,s);n.add(d(new p(7.2,.2,5.2),c.concrete,a,r+.1,s));for(let o=0;o<3;o++)n.add(d(new p(1.7,1.9,3.6),c.battery,a-2+o*2,r+1.15,s));return n.add(b("NIGHT","#111111","#f4e6c8",2.2,.5,a,r+2.55,s+2.7)),n.add(b("HABS","#111111","#d6b48a",1.8,.42,a,r+2.05,s+2.7)),n}function z1(n){const e=(l,h,m=1)=>n.push({type:"box",x:l,z:h,w:1.9*m,d:1.9*m}),t=(l,h,m)=>n.push({type:"cyl",x:l,z:h,r:m}),i=(l,h,m,f)=>n.push({type:"box",x:l,z:h,w:m,d:f});for(const[l,h]of[[10,8],[12.2,8.4],[10.4,10.6],[13.5,6.2],[-12,9],[-14,7.2],[8.5,-11],[6.4,-12.5]])e(l,h);for(const[l,h]of[[40,22],[38.2,24.1],[41.4,26.2],[36.5,21.4],[37.8,27.6],[34.8,24.8],[39.2,19.6],[35.4,19.2]])e(l,h);e(38.6,22.8,1.15),e(33.2,20.4,1.2),e(31.4,22.1,1.05);const a=24,s=70;for(const[l,h]of[[a,s],[a-1.8,s+2.1],[a+1.6,s+2.4],[a-2.4,s-1.2],[a+.8,s-2.2],[a-3.2,s+.6]])e(l,h);e(a-4.2,s+1.4,1.12),e(a-5.4,s-.6,1.05),e(5.4,13.2,.85);for(const[l,h]of[[18,-78],[20.2,-77.4],[18.4,-81.2],[24.6,-78.6],[26.2,-81.8]])e(l,h);const r=-60,o=66;for(const[l,h]of[[r,o],[r-1.8,o+2.1],[r+1.6,o+2.4],[r-2.4,o-1.2],[r+.8,o-2.2],[r-3.2,o+.6]])e(l,h);e(r-4.2,o+1.4,1.12),e(r-5.4,o-.6,1.05);for(const[l,h]of[[16,14],[8,-62],[30,74],[-94,-182],[48,-70],[-90,-148]])t(l,h,2.4);for(const[l,h]of[[-55,-146],[-61,-118],[-66,-78],[-68,-38],[-70,-62],[-50,-24],[-18,-14],[22,12]])t(l,h,3.4);for(const[l,h]of[[42,22],[39,26],[26,78],[26,68],[22,72],[-80,-174],[-34,-92],[-28,-104],[16,-120],[-28,128]])t(l,h,.55);for(const[l,h]of[[2.4,12.2],[-2.2,11.5],[3.8,15.6],[.6,18.2]])t(l,h,.55);i(4.3,14.8,1.4,1),i(-3.9,9.1,1.1,.8),i(5.1,16.4,1.2,.8);for(let l=0;l<8;l++)i(82.3,-22-l*6.2,50,2.6);i(54,-18,3,2.2);for(let l=0;l<4;l++)i(111.5,-74-l*6.2,30,2.6);i(96,-72,3,2.2);for(let l=0;l<5;l++)i(135.5,-28-l*6.2,30,2.6);i(120,-26,3,2.2);for(let l=0;l<5;l++)i(158.5,-48-l*6.2,30,2.6);i(146,-46,3,2.2),i(14,22,2.4,1.6),i(18,26,1.8,1.3),i(20,36,2,1.3),i(17,-17,2.4,1.6);const u=[[-108,-210],[-98,-210],[-88,-210],[-78,-210],[-68,-210],[-108,-198],[-98,-198],[-88,-198],[-78,-198],[-68,-198],[-108,-186],[-98,-186],[-88,-186],[-78,-186],[-68,-186],[-108,-174],[-98,-174],[-88,-174],[-78,-174],[-68,-174]];for(const[l,h]of u)t(l,h,.4);t(-96,-198,.7),t(-72,-204,.7),t(-104,-176,.7);for(const[l,h]of[[-90,-184],[-88.4,-182.6],[-91.2,-181.8],[-86.6,-185.2]])i(l,h,1.2,1.2);e(-84.5,-180.4,.85),e(-28,-68),e(-27,-71,1.1),e(-44,-80),e(-42.5,-68.5,.95),e(17.2,-119.4),e(18.4,-121.8,1.05),e(3.2,-118.6,.9),e(16.6,-128.8,.95),e(27.2,12.4,.9),e(12.6,13.1,.95),e(-32,124,.9),e(-30.6,126.4,.95)}function N1(){const n=new O;n.name="hab-street";const e=I(-13,-134);n.add(d(new p(30,.2,24),c.concrete,-13,e+.06,-136)),un(n,-20,-132,0,{airlock:!0,label:"HAB 3"}),un(n,-6,-132,0,{airlock:!0,label:"HAB 4"}),un(n,-13,-142,Math.PI/2,{airlock:!0,label:"HAB 5"});const t=I(-13,-132)+3.15;return n.add(d(new N(1.15,1.15,8.2,12),c.habDark,-13,t,-132,0,0,Math.PI/2)),n.add(d(new N(1.15,1.15,6.4,12),c.habDark,-13,t,-137,Math.PI/2,0,0)),n.add(b("HAB STREET","#1a100c","#f0c089",3.4,.65,-13,e+5.4,-126)),Ee(n,-26,-128,.2),Ee(n,1.2,-128.4,-.3,1.05),n}function bi(n,e,t,i,a){i==="x"?(n.push({type:"box",x:e,z:t-1.35,w:a,d:.4}),n.push({type:"box",x:e,z:t+1.35,w:a,d:.4})):(n.push({type:"box",x:e-1.35,z:t,w:.4,d:a}),n.push({type:"box",x:e+1.35,z:t,w:.4,d:a}))}function F1(n){const e=(t,i,a,s)=>n.push({type:"box",x:t,z:i,w:a,d:s});e(-6.2,0,5.2,14.8),e(6.2,0,5.2,14.8),e(0,-6.2,10,5.2),e(-4.35,5.8,6.4,5.2),e(4.35,5.8,6.4,5.2),e(0,7.15,3.8,.8),e(-1.45,7.15,.7,1.2),e(1.45,7.15,.7,1.2),e(-1.28,13,.36,12.4),e(1.28,13,.36,12.4),e(-1.45,19.2,.4,2.8),e(1.45,19.2,.4,2.8)}function O1(){const n=new O;n.name="food-3";const e=8,t=-142,i=I(e,t);n.add(d(new p(13.2,.25,7.6),c.concrete,e,i+.1,t));const a=new dt(new N(3.55,3.55,12.4,18,1,!1,0,Math.PI),c.glass);a.rotation.z=Math.PI/2,a.position.set(e,i+3.55,t),a.castShadow=!1,n.add(a),n.add(d(new p(12.2,.1,7.2),c.solarFrame,e,i+3.6,t));for(let s=-2;s<=2;s++){n.add(d(new p(1.85,.24,5.6),c.soil,e+s*2.1,i+.34,t));for(let r=-2;r<=2;r++){const o=r%2===0?c.plant:c.plantLeaf;n.add(d(new p(1.25,.58,.72),o,e+s*2.1,i+.78,t+r*.95))}n.add(d(new p(1.5,.05,5.2),c.glowWarm,e+s*2.1,i+3.15,t))}return n.add(d(new p(1.1,1.8,.14),c.habDark,e-6.2,i+1.1,t)),n.add(b("FOOD","#1a100c","#f0c089",2.8,.7,e,i+5.05,t+.15)),n.add(b("HAB STREET","#1a100c","#d6b48a",3.4,.5,e,i+4.35,t+.15)),Ee(n,15,-138,.2,.9),n}function B1(){const n=new O;n.name="solar-3";const e=6,t=5;for(let r=0;r<e;r++)for(let o=0;o<t;o++){const u=122+r*5.4,l=-28-o*6.2,h=I(u,l);n.add(d(new p(.18,1.6,.18),c.solarFrame,u,h+.8,l)),n.add(d(new p(4.6,.08,2.3),c.solar,u,h+1.55,l,-.55,.15,0)),n.add(d(new p(4.75,.05,2.42),c.solarFrame,u,h+1.5,l,-.55,.15,0))}const[i,a,s]=Ot(120,-26,.7);return n.add(d(new p(2.2,1.4,1.4),c.habDark,i,a,s)),n.add(b("POWER","#111111","#f4e6c8",2,.55,i,a+.2,s+.75)),n.add(b("FIELD 3","#111111","#d6b48a",2.2,.45,i,a+.85,s+.75)),n}function k1(){const n=new O;n.name="batteries-2";const e=68,t=6,i=I(e,t);n.add(d(new p(15.2,.22,7.2),c.concrete,e,i+.1,t));for(let o=0;o<6;o++){const u=e-5.5+o*2.2;n.add(d(new p(1.85,2.15,4.4),c.battery,u,i+1.25,t)),n.add(d(new p(1.7,.08,4.2),c.steel,u,i+2.38,t))}n.add(b("BATTERY","#111111","#f4e6c8",3.4,.7,e,i+3.15,t+3.75)),n.add(b("CREW STORE","#111111","#d6b48a",3.5,.55,e,i+2.45,t+3.75));const a=-28,s=-138,r=I(a,s);n.add(d(new p(7.2,.2,5.2),c.concrete,a,r+.1,s));for(let o=0;o<3;o++)n.add(d(new p(1.7,1.9,3.6),c.battery,a-2+o*2,r+1.15,s));return n.add(b("NIGHT","#111111","#f4e6c8",2.2,.5,a,r+2.55,s+2.7)),n.add(b("HAB 3-5","#111111","#d6b48a",2.2,.42,a,r+2.05,s+2.7)),n}function Un(n,e,t,i,a){const s=(e+i)*.5,r=(t+a)*.5,o=(I(e,t)+I(i,a))*.5+2.45,u=Math.hypot(i-e,a-t),l=d(new N(1.12,1.12,u,12),c.habDark,s,o,r,Math.PI/2,0,0);l.rotation.y=Math.atan2(i-e,a-t),n.add(l),n.add(d(new Ne(1.18,.07,6,14),c.steel,e,o,t,Math.PI/2,0,0)),n.add(d(new Ne(1.18,.07,6,14),c.steel,i,o,a,Math.PI/2,0,0))}function H1(){const n=new O;n.name="neighborhood",Un(n,-46,-108,-20,-132),Un(n,-6,-108,-6,-132),Un(n,-46,-108,-32,-98),Un(n,-6,-96,2,-22),Un(n,-40,-76,-32,-98),Un(n,-40,-76,-50,-72),Un(n,-6,-132,10,-124),Un(n,10,-124,8,-142);const[e,t,i]=Ot(-33,-120,3.4);n.add(b("PRESSURE","#1a100c","#f0c089",3.2,.55,e,t+1.2,i)),n.add(b("HAB 2-5","#1a100c","#d6b48a",2.8,.45,e,t+.55,i));const a=2,s=-22,r=I(a,s);return n.add(d(new N(1.45,1.45,2.8,12),c.habDark,a,r+1.55,s)),n.add(d(new p(1.1,1.8,.12),c.steelDark,a,r+1.5,s+1.5)),n.add(d(new Ne(1.48,.08,6,14),c.steel,a,r+2.95,s,Math.PI/2,0,0)),n.add(b("CREW ACCESS","#1a100c","#f0c089",3.4,.6,a,r+3.55,s+.2)),n.add(b("TO STARSHIP","#1a100c","#d6b48a",3.1,.45,a,r+2.95,s+.2)),n}function G1(){const n=new O;n.name="yard";const e=-36,t=-74,i=I(e,t);return n.add(d(new p(18,.22,14),c.concrete,e,i+.08,t)),un(n,-40,-76,0,{airlock:!0,label:"HAB 6"}),un(n,-32,-70,-.2,{onStands:!0,label:"NEXT"}),n.add(d(new p(.28,9.2,.28),c.lattice,e+6.2,i+4.7,t-3.4)),n.add(d(new p(8.4,.22,.22),c.lattice,e+2.4,i+9.2,t-3.4)),n.add(d(new N(.05,.05,6.8,6),c.cable,e-1.2,i+6.2,t-2.2)),n.add(d(new p(1.4,1.2,1.4),c.crate,e+1.6,i+8.6,t-3.2)),Ee(n,-28,-68,.2),Ee(n,-27,-71,-.4,1.1),Ee(n,-44,-80,.3),Ee(n,-42.5,-68.5,.1,.95),n.add(b("CONSTRUCTION","#1a100c","#f0c089",4,.7,e,i+4.6,t+6.4)),n.add(b("NEXT KIT","#1a100c","#d6b48a",3.2,.5,e,i+3.9,t+6.4)),n}function V1(){const n=new O;n.name="crew-ops";const e=-50,t=-72,i=I(e,t);return n.add(d(new p(12,.2,10),c.concrete,e,i+.08,t)),un(n,e,t,Math.PI/2,{r:2.2,len:7.6,airlock:!0,label:"MED"}),n.add(b("CREW OPS","#1a100c","#f0c089",3.4,.6,e,i+5.35,t+.2)),n.add(b("MEDICAL","#1a100c","#d6b48a",3,.45,e,i+4.75,t+.2)),Ee(n,-55.2,-76.4,.2,.9),Ee(n,-44.8,-68.6,-.25,.95),n}function W1(){const n=new O;n.name="commons";const e=10,t=-124,i=I(e,t);return n.add(d(new p(16,.22,12),c.concrete,e,i+.08,t)),un(n,e,t,0,{airlock:!0,label:"MESS"}),n.add(b("CREW COMMONS","#1a100c","#f0c089",4.2,.7,e,i+6.15,t+.2)),n.add(b("FROM CARGO","#1a100c","#d6b48a",3.4,.48,e,i+5.5,t+.2)),Ee(n,17.2,-119.4,.2),Ee(n,18.4,-121.8,-.3,1.05),Ee(n,3.2,-118.6,.15,.9),Ee(n,16.6,-128.8,.4,.95),n}function X1(){const n=new O;n.name="methalox-stock";const e=20,t=8,i=I(e,t);n.add(d(new p(16,.22,12),c.concrete,e,i+.08,t));for(let a=0;a<3;a++){const s=t-3.4+a*3.4;n.add(d(new N(1.15,1.15,6.4,16),c.tankCh4,e-3.2,i+1.45,s,0,0,Math.PI/2)),n.add(d(new N(1.15,1.15,6.4,16),c.tankO2,e+3.2,i+1.45,s,0,0,Math.PI/2))}return n.add(b("METHALOX","#1a100c","#f0c089",3.6,.7,e,i+3.55,t+6.2)),n.add(b("RETURN STOCK","#1a100c","#d6b48a",3.8,.5,e,i+2.9,t+6.2)),n.add(b("CH4","#6a2208","#f4e6c8",1.6,.42,e-3.2,i+2.85,t+3.6)),n.add(b("O2","#2a3340","#e8eef4",1.4,.42,e+3.2,i+2.85,t+3.6)),se(n,[[20,2],[8,-2],[-8,-6],[-15,-8]],c.tankCh4,.12),Ee(n,27.2,12.4,.2,.9),Ee(n,12.6,13.1,-.25,.95),n}function q1(){const n=new O;n.name="next-window-pad";const e=-16,t=136;n.add(Jn(e,t,{finished:!0}));const i=I(e,t);return n.add(b("NEXT WINDOW","#1a100c","#f0c089",4.6,.85,e+22,i+3.6,t+4,-.55)),n.add(b("26 MONTHS","#1a100c","#d6b48a",3.6,.55,e+22,i+2.75,t+4,-.55)),n.add(d(new p(.12,3.4,.12),c.steelDark,e+22,i+1.7,t+4)),n.add(b("PAD 2","#1a100c","#f0c089",2.4,.55,e,i+.55,t+22.4)),n.add(d(new N(18.4,18.4,.12,40),c.concrete,e,i+.38,t)),n.add(d(new aa(9.2,17.6,36),c.soot,e,i+.46,t,-Math.PI/2,0,0)),n.add(b("SINTERED","#1a100c","#f0c089",3.6,.55,e+22,i+1.95,t+4,-.55)),n.add(Y1(-38,148)),Ee(n,-32,124,.2,.9),Ee(n,-30.6,126.4,-.25,.95),Ee(n,-40,144,.1,.85),Ee(n,-41.4,146.2,-.3,.8),n}function Y1(n,e){const t=new O;t.name="sinter-rig";const i=I(n,e);t.add(d(new p(8.4,.22,6.2),c.concrete,n,i+.1,e)),t.add(d(new p(5.6,2.4,3.2),c.habDark,n,i+1.4,e)),t.add(d(new p(1.6,3.6,1.6),c.steelDark,n+2.8,i+2,e-.4)),t.add(d(new N(.18,.18,4.8,8),c.steel,n+2.8,i+5.2,e-.4)),t.add(d(new p(2.4,.18,1.1),c.glowWarm,n+2.8,i+7.6,e-.4)),t.add(b("SINTER","#1a100c","#f0c089",3.2,.6,n,i+2.9,e+1.85)),t.add(b("REGOLITH","#1a100c","#d6b48a",3.4,.45,n,i+2.3,e+1.85));for(let a=0;a<4;a++)t.add(d(new p(1.4,.28,.9),c.concrete,n-2.4,i+.35+a*.32,e+2.6));return t}function K1(){const n=new O;n.name="solar-4";const e=6,t=5;for(let l=0;l<e;l++)for(let h=0;h<t;h++){const m=145+l*5.4,f=-48-h*6.2,g=I(m,f);n.add(d(new p(.18,1.6,.18),c.solarFrame,m,g+.8,f)),n.add(d(new p(4.6,.08,2.3),c.solar,m,g+1.55,f,-.55,.15,0)),n.add(d(new p(4.75,.05,2.42),c.solarFrame,m,g+1.5,f,-.55,.15,0))}const[i,a,s]=Ot(146,-46,.7);n.add(d(new p(2.2,1.4,1.4),c.habDark,i,a,s)),n.add(b("POWER","#111111","#f4e6c8",2,.55,i,a+.2,s+.75)),n.add(b("FIELD 4","#111111","#d6b48a",2.2,.45,i,a+.85,s+.75));const r=158,o=-28,u=I(r,o);n.add(d(new p(12,.2,7.2),c.concrete,r,u+.1,o));for(let l=0;l<5;l++)n.add(d(new p(1.7,2,4.2),c.battery,r-4+l*2,u+1.2,o));return n.add(b("NIGHT","#111111","#f4e6c8",2.2,.5,r,u+2.7,o+3.6)),n.add(b("FIELD 4","#111111","#d6b48a",2.4,.42,r,u+2.15,o+3.6)),n}function J1(){const n=new O;n.name="isru-2";const e=-96,t=-16,i=I(e,t);return n.add(d(new p(18,.35,18),c.concrete,e,i+.12,t)),n.add(d(new N(1.55,1.7,11,12),c.steelDark,e+2.2,i+5.8,t)),n.add(d(new Ne(2.15,.16,6,14),c.steel,e+2.2,i+8.8,t,Math.PI/2,0,0)),n.add(b("SABATIER","#1a100c","#f0c089",4.4,.9,e+4.2,i+7.2,t,Math.PI/2)),n.add(b("TRAIN 2","#1a100c","#d6b48a",3.2,.55,e+4.2,i+6.3,t,Math.PI/2)),n.add(d(new N(2.4,2.4,11,18),c.tankCh4,e-5.2,i+6,t+4.6,0,0,Math.PI/2)),n.add(d(new N(2.4,2.4,11,18),c.tankO2,e-5.2,i+6,t-4.4,0,0,Math.PI/2)),n.add(b("CH4","#6a2208","#f4e6c8",2.8,.8,e+.4,i+6,t+4.6)),n.add(b("O2","#2a3340","#e8eef4",2.6,.8,e+.4,i+6,t-4.4)),se(n,[[-88,-16],[-80,-16],[-72,-16]],c.tankCh4,.14),se(n,[[-88,-18],[-80,-20],[-72,-18]],c.steel,.12),n}function Z1(){const n=new O;n.name="ice-mine-2";const e=-78,t=-172,i=I(e,t);n.add(d(new p(8,.3,8),c.concrete,e,i+.1,t)),n.add(d(new p(.28,14,.28),c.lattice,e-2.2,i+7,t-2.2)),n.add(d(new p(.28,14,.28),c.lattice,e+2.2,i+7,t-2.2)),n.add(d(new p(.28,14,.28),c.lattice,e-2.2,i+7,t+2.2)),n.add(d(new p(.28,14,.28),c.lattice,e+2.2,i+7,t+2.2)),n.add(d(new p(5.2,.25,5.2),c.steelDark,e,i+14.2,t)),n.add(d(new N(.35,.55,9,10),c.steel,e,i+5,t)),n.add(d(new ii(.7,1.6,8),c.soot,e,i+.9,t));const a=d(new mt(4,0),c.ice,e+8.2,i+1.8,t+1.4);return a.scale.set(1.45,.75,1.2),n.add(a),n.add(d(new p(6.4,.35,1.1),c.steelDark,e+3.6,i+1.4,t,0,0,-.18)),n.add(b("ICE 2","#1a2830","#d6e6ef",2.6,.65,e,i+8.4,t+2.6)),se(n,[[-74,-168],[-68,-150],[-64,-90],[-68,-26]],c.pipe,.13),n}function $1(){const n=new O;n.name="workshop-2";const e=66,t=-74,i=I(e,t);n.add(d(new p(16,.28,12),c.concrete,e,i+.1,t));const a=d(new N(5.4,5.4,14,16,1,!1,0,Math.PI),c.habDark,e-1.2,i+3.1,t);return a.rotation.z=Math.PI/2,n.add(a),n.add(d(new p(.2,3.8,5.8),c.steelDark,e-8.1,i+2,t)),n.add(d(new p(.28,8.4,.28),c.lattice,e+6.4,i+4.3,t-3.6)),n.add(d(new p(7.2,.2,.2),c.lattice,e+3,i+8.5,t-3.6)),n.add(d(new p(1.5,1.1,1.5),c.crate,e+2.2,i+8,t-3.4)),Ee(n,73.2,-69.4,.2),Ee(n,74.4,-71.6,-.3,1.05),Ee(n,58.6,-68.8,.15,.9),n.add(b("WORKSHOP","#1a100c","#f0c089",3.8,.75,e,i+5.4,t+.2)),n.add(b("BAY 2","#1a100c","#d6b48a",2.6,.5,e,i+4.7,t+.2)),n}function j1(){const n=new O;n.name="potable";const e=18,t=-152,i=I(e,t);n.add(d(new p(14,.22,10),c.concrete,e,i+.1,t));for(let a=0;a<4;a++){const s=e-4.5+a*3;n.add(d(new N(1.15,1.15,6.2,14),c.pipe,s,i+1.5,t,0,0,Math.PI/2))}return n.add(b("POTABLE","#1a2830","#d6e6ef",3.4,.7,e,i+3.35,t+4.6)),n.add(b("HAB STORE","#1a2830","#d6b48a",3.2,.5,e,i+2.7,t+4.6)),se(n,[[18,-148],[8,-142],[-6,-120],[-18,-88]],c.pipe,.12),n}function Q1(){const n=new O;n.name="hab-berms";const e=[[-58,-108,9.5,.2],[-20,-100,12.5,0],[22,-128,8.5,1.2],[-8,-148,7.5,.4]];for(const[s,r,o,u]of e){const l=I(s,r),h=d(new Ne(o,1.55,8,24,Math.PI*1.15),c.rust,s,l-.2,r,Math.PI/2,u,0);h.scale.set(1,.42,1),n.add(h)}for(const[s,r]of[[-62,-102],[-14,-96],[26,-122]]){const o=d(new mt(2.4,0),c.rust,s,I(s,r)+.95,r);o.scale.set(1.25,.6,1.05),n.add(o)}const[t,i,a]=Ot(-20,-100,2.4);return n.add(b("DUST BERM","#1a100c","#f0c089",3.6,.65,t,i+1.1,a)),n.add(b("HAB WIND","#1a100c","#d6b48a",3.2,.48,t,i+.5,a)),n}function em(){const n=new O;n.name="earth-dish-2";const e=-8,t=-162,i=I(e,t);n.add(d(new N(6.2,6.2,.26,28),c.concrete,e,i+.1,t)),n.add(d(new N(1.1,1.4,4.2,12),c.steelDark,e,i+2.2,t));const a=new O;return a.position.set(e,i+6.8,t),a.rotation.set(-.88,.55,0),a.add(d(new vt(5.2,22,14,0,Math.PI*2,0,Math.PI/2.28),c.dish,0,0,0)),a.add(d(new N(.06,.06,3.8,6),c.steelDark,0,1.9,0)),n.add(a),n.add(b("EARTH 2","#1a100c","#f0c089",3.2,.65,e,i+3.6,t+5.2)),n.add(b("BACKUP LINK","#1a100c","#d6b48a",3.4,.5,e,i+2.95,t+5.2)),n}function tm(){const n=new O;n.name="eclss";const e=8,t=-98,i=I(e,t);return n.add(d(new p(11.2,.22,7.2),c.concrete,e,i+.1,t)),n.add(d(new p(4.8,2.6,3.4),c.habDark,e-2.4,i+1.5,t)),n.add(b("ECLSS","#1a100c","#f0c089",3.2,.6,e-2.4,i+3.05,t+1.85)),n.add(b("CO2 SCRUB","#1a100c","#d6b48a",3.4,.45,e-2.4,i+2.45,t+1.85)),n.add(d(new N(.85,.85,3.4,12),c.steelDark,e+1.6,i+1.9,t-1.4)),n.add(d(new N(.85,.85,3.4,12),c.steelDark,e+3.4,i+1.9,t-1.4)),n.add(b("AMINE","#1a100c","#d6b48a",2.2,.4,e+2.5,i+3.8,t-1.4)),n.add(d(new N(.7,.7,2.6,12),c.tankO2,e+1.6,i+1.5,t+1.8)),n.add(d(new N(.7,.7,2.6,12),c.tankO2,e+3.4,i+1.5,t+1.8)),n.add(b("O2","#2a3340","#e8eef4",1.4,.4,e+2.5,i+3.05,t+1.8)),se(n,[[8,-98],[14,-104],[22,-112]],c.pipe,.1),se(n,[[8,-98],[2,-102],[-6,-108]],c.tankO2,.09),n}function nm(){const n=new O;n.name="rover-shelter";const e=48,t=-70,i=I(e,t);n.add(d(new p(12.4,.18,8.6),c.concrete,e,i+.08,t));const a=[[-5.2,-3.4],[5.2,-3.4],[-5.2,3.4],[5.2,3.4]];for(const[s,r]of a)n.add(d(new p(.28,4.6,.28),c.steelDark,e+s,i+2.4,t+r));return n.add(d(new p(12.8,.16,9),c.steel,e,i+4.75,t)),n.add(d(new p(12.8,.06,9),c.solar,e,i+4.88,t)),n.add(b("DUST","#1a100c","#f0c089",2.6,.5,e,i+5.35,t+4.6)),n.add(b("ROVER","#1a100c","#d6b48a",2.8,.42,e,i+4.8,t+4.6)),n}function im(){const n=new O;n.name="isru-radiators";const e=-68,t=12,i=I(e,t);n.add(d(new p(16.4,.18,6.2),c.concrete,e,i+.08,t));for(let a=0;a<5;a++){const s=e-6+a*3;n.add(d(new p(.16,3.6,.16),c.steelDark,s,i+1.9,t-1.8)),n.add(d(new p(.16,3.6,.16),c.steelDark,s,i+1.9,t+1.8)),n.add(d(new p(2.4,3.2,.08),c.solar,s,i+2.4,t,-.15,0,0)),n.add(d(new p(2.5,3.3,.04),c.steel,s,i+2.4,t+.06,-.15,0,0))}return n.add(b("REJECT","#1a100c","#f0c089",2.8,.5,e,i+4.55,t+3.2)),n.add(b("HEAT","#1a100c","#d6b48a",2.4,.42,e,i+4,t+3.2)),se(n,[[-68,-6],[-68,4],[-68,12]],c.pipe,.1),n}function am(){const n=new O;n.name="parts-depot";const e=22,t=-80,i=I(e,t);return n.add(d(new p(12.2,.18,8.2),c.concrete,e,i+.08,t)),n.add(d(new p(.22,3.8,8.2),c.steelDark,e-5.8,i+2,t)),n.add(d(new p(12.2,.14,8.4),c.steel,e,i+3.95,t)),Ee(n,18,-78,.15,1),Ee(n,20.2,-77.4,-.2,.95),Ee(n,18.4,-81.2,.3,1.05),Ee(n,24.6,-78.6,-.1,1),Ee(n,26.2,-81.8,.25,.9),n.add(d(new p(2.4,1.1,1.4),c.steel,e+1.2,i+.75,t+.4)),n.add(b("PARTS","#1a100c","#f0c089",2.8,.55,e,i+4.45,t+4.2)),n.add(b("CARGO","#1a100c","#d6b48a",2.6,.42,e,i+3.9,t+4.2)),n}function sm(){const n=new O;n.name="greenhouse-2";const e=52,t=-112,i=I(e,t);n.add(d(new p(13.6,.22,8.2),c.concrete,e,i+.1,t));const a=new dt(new N(3.7,3.7,12.6,16,1,!1,0,Math.PI),c.glass);a.rotation.z=Math.PI/2,a.position.set(e,i+3.7,t),a.castShadow=!1,n.add(a),n.add(d(new p(12.4,.1,7.6),c.solarFrame,e,i+3.75,t));for(let s=-2;s<=2;s++){n.add(d(new p(1.9,.24,6),c.soil,e+s*2.15,i+.34,t));for(let r=-2;r<=2;r++){const o=r%2===0?c.plant:c.plantLeaf;n.add(d(new p(1.3,.48,.74),o,e+s*2.15,i+.68,t+r*1.05))}n.add(d(new p(1.55,.05,5.6),c.glowWarm,e+s*2.15,i+3.2,t))}return n.add(b("GREENHOUSE 2","#1a100c","#f0c089",4,.65,e,i+5.15,t+.15)),n.add(b("GROW FROM CO2","#1a100c","#d6b48a",3.6,.48,e,i+4.5,t+.15)),se(n,[[32,-112],[42,-112],[52,-112]],c.pipe,.1),n}function rm(){const n=new O;n.name="ice-depot";const e=-90,t=-158,i=I(e,t);n.add(d(new p(12,.22,10),c.concrete,e,i+.1,t)),n.add(d(new p(3.6,2.4,2.8),c.steelDark,e-1.8,i+1.35,t)),n.add(d(new N(.85,1.65,2.1,10),c.steelDark,e-1.8,i+3.35,t)),n.add(d(new p(2.4,.28,1.05),c.steel,e+.7,i+2.1,t,0,0,-.2));const a=d(new mt(2.8,0),c.ice,e+3.6,i+1.25,t+1.5);return a.scale.set(1.35,.7,1.15),n.add(a),n.add(d(new mt(1.15,0),c.ice,e+4.8,i+.85,t+.2)),n.add(b("ICE","#1a2830","#d6e6ef",2.2,.55,e,i+3.85,t+4.4)),n.add(b("CRUSH","#1a2830","#d6e6ef",2.6,.5,e,i+3.2,t+4.4)),se(n,[[-86,-160],[-80,-166],[-74,-168]],c.pipe,.13),n}function om(){const n=new O;n.name="batteries-3";const e=8,t=-78,i=I(e,t);n.add(d(new p(11.6,.2,6.4),c.concrete,e,i+.1,t));for(let a=0;a<5;a++)n.add(d(new p(1.7,1.95,3.8),c.battery,e-4+a*2,i+1.15,t)),n.add(d(new p(1.55,.08,3.6),c.steel,e-4+a*2,i+2.18,t));return n.add(b("NIGHT","#111111","#f4e6c8",2.4,.5,e,i+2.7,t+3.3)),n.add(b("HAB STORE","#111111","#d6b48a",3,.42,e,i+2.15,t+3.3)),n}function cm(){const n=new O;n.name="o2-buffer";const e=-8,t=-88,i=I(e,t);n.add(d(new p(10.2,.2,7.4),c.concrete,e,i+.1,t));for(let a=0;a<4;a++){const s=e-3.3+a*2.2;n.add(d(new N(.85,.85,3.6,12),c.tankO2,s,i+2,t))}return n.add(b("O2","#2a3340","#e8eef4",1.8,.5,e,i+4.15,t+3.7)),n.add(b("CREW","#2a3340","#d6b48a",2.2,.42,e,i+3.6,t+3.7)),se(n,[[-8,-88],[0,-94],[8,-98]],c.tankO2,.1),n}function lm(){const n=new O;n.name="co2-capture";const e=-96,t=4,i=I(e,t);return n.add(d(new p(11.6,.2,7.4),c.concrete,e,i+.1,t)),n.add(d(new N(.55,.55,6.8,10),c.steel,e-2.4,i+3.6,t)),n.add(d(new N(2.1,.65,2.4,14),c.steelDark,e-2.4,i+7.8,t)),n.add(d(new Ne(1.85,.1,6,16),c.steel,e-2.4,i+9.1,t,Math.PI/2,0,0)),n.add(d(new p(3.2,2.2,2.4),c.habDark,e+2.2,i+1.3,t)),n.add(b("CO2","#1a100c","#f0c089",2.2,.55,e-2.4,i+4.8,t+1.4)),n.add(b("INTAKE 2","#1a100c","#d6b48a",3,.45,e+2.2,i+2.7,t+1.35)),se(n,[[-96,4],[-96,-6],[-96,-16]],c.pipe,.12),n}function dm(){const n=new O;n.name="solar-dust-fence";const e=142,t=-62,i=I(e,t);for(let a=0;a<8;a++){const s=t-10.5+a*3;n.add(d(new p(.18,3.4,.18),c.steelDark,e,i+1.8,s)),a<7&&n.add(d(new p(.06,2.6,2.7),c.lattice,e,i+1.7,s+1.5))}return n.add(b("DUST","#1a100c","#f0c089",2.4,.45,e-1.4,i+3.5,t)),n.add(b("FENCE","#1a100c","#d6b48a",2.4,.4,e-1.4,i+3,t)),n}function hm(){const n=new O;n.name="condensate";const e=28,t=-140,i=I(e,t);return n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t)),n.add(d(new N(1.35,1.35,3.8,14),c.pipe,e-1.6,i+2.1,t)),n.add(d(new N(1.35,1.35,3.8,14),c.pipe,e+1.8,i+2.1,t)),n.add(d(new p(2.4,1.6,1.8),c.habDark,e,i+1,t+2.2)),n.add(b("H2O","#1a2830","#d6e6ef",2.2,.5,e,i+4.3,t+3.6)),n.add(b("CONDENSATE","#1a2830","#d6b48a",3.6,.42,e,i+3.75,t+3.6)),se(n,[[28,-140],[18,-146],[18,-152]],c.pipe,.1),se(n,[[28,-140],[16,-142],[8,-142]],c.pipe,.09),n}function um(){const n=new O;n.name="eva-rack";const e=12,t=18,i=I(e,t);return n.add(d(new p(5.8,.16,2.4),c.steelDark,e,i+.08,t)),n.add(d(new p(.16,2.8,.16),c.steel,e-2.4,i+1.5,t-.7)),n.add(d(new p(.16,2.8,.16),c.steel,e+2.4,i+1.5,t-.7)),n.add(d(new p(5,.12,.12),c.steel,e,i+2.9,t-.7)),n.add(nn(e-1.5,t,.2)),n.add(nn(e,t+.15,-.1)),n.add(nn(e+1.5,t,.15)),n.add(b("SUITS","#1a100c","#f0c089",2.4,.45,e,i+3.35,t+1.2)),n.add(b("EVA RACK","#1a100c","#d6b48a",2.8,.4,e,i+2.85,t+1.2)),n}function fm(){const n=new O;n.name="ch4-buffer";const e=36,t=8,i=I(e,t);n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t));for(let a=0;a<3;a++)n.add(d(new N(1.05,1.05,5.6,14),c.tankCh4,e-2.4+a*2.4,i+1.4,t,0,0,Math.PI/2));return n.add(b("CH4","#6a2208","#f4e6c8",2.2,.5,e,i+3.35,t+3.7)),n.add(b("RETURN","#6a2208","#d6b48a",2.6,.42,e,i+2.8,t+3.7)),se(n,[[28,8],[32,8],[36,8]],c.tankCh4,.11),n}function pm(){const n=new O;n.name="o2-return";const e=36,t=-6,i=I(e,t);n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t));for(let a=0;a<3;a++)n.add(d(new N(1.05,1.05,5.6,14),c.tankO2,e-2.4+a*2.4,i+1.4,t,0,0,Math.PI/2));return n.add(b("O2","#2a3340","#e8eef4",1.8,.5,e,i+3.35,t+3.7)),n.add(b("RETURN","#2a3340","#d6b48a",2.6,.42,e,i+2.8,t+3.7)),se(n,[[36,8],[36,1],[36,-6]],c.steel,.11),n}function mm(){const n=new O;n.name="isru-electrolysis";const e=-50,t=4,i=I(e,t);n.add(d(new p(11.6,.2,7.4),c.concrete,e,i+.1,t)),n.add(d(new p(3.4,3.6,2.6),c.habDark,e-2.6,i+2,t)),n.add(d(new p(3.4,3.6,2.6),c.steelDark,e+1.2,i+2,t));for(let a=0;a<4;a++)n.add(d(new p(.18,3.1,2.2),c.steel,e-3.8+a*.7,i+2,t));return n.add(d(new N(1.15,1.15,5.2,14),c.steel,e+4.2,i+2.8,t+1.4)),n.add(d(new N(.95,.95,4.4,14),c.tankO2,e+4.2,i+2.4,t-1.6)),n.add(b("ELECTRO","#1a100c","#f0c089",3.2,.5,e,i+4.55,t+3.7)),n.add(b("H2 RECYCLE","#1a100c","#d6b48a",3.4,.42,e,i+4,t+3.7)),se(n,[[-72,-26],[-50,-16],[-50,4]],c.pipe,.11),se(n,[[-50,4],[-58,4],[-64,-8]],c.steel,.1),n}function gm(){const n=new O;n.name="ice-melt";const e=-58,t=-142,i=I(e,t);n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t)),n.add(d(new p(3.6,2.8,3.2),c.habDark,e-1.8,i+1.6,t)),n.add(d(new N(1.45,1.45,4.2,14),c.pipe,e+2.2,i+2.3,t)),n.add(d(new N(.55,.85,1.6,10),c.steelDark,e+2.2,i+4.9,t));const a=d(new mt(1.8,0),c.ice,e-3.4,i+.9,t+2.1);return a.scale.set(1.15,.55,1),n.add(a),n.add(b("MELT","#1a2830","#d6e6ef",2.4,.5,e,i+4.4,t+3.7)),n.add(b("STILL","#1a2830","#d6b48a",2.2,.42,e,i+3.85,t+3.7)),se(n,[[-58,-158],[-58,-150],[-58,-142]],c.pipe,.11),se(n,[[-58,-142],[-64,-90],[-68,-26]],c.pipe,.1),n}function xm(){const n=new O;n.name="methalox-pump";const e=-32,t=-22,i=I(e,t);return n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t)),n.add(d(new p(5.2,3.2,4.4),c.habDark,e,i+1.8,t)),n.add(d(new p(5.4,.14,4.6),c.steel,e,i+3.5,t)),n.add(d(new N(.55,.55,1.8,10),c.tankCh4,e-1.4,i+1.1,t+2.6,0,0,Math.PI/2)),n.add(d(new N(.55,.55,1.8,10),c.steel,e+1.4,i+1.1,t+2.6,0,0,Math.PI/2)),n.add(b("PUMP","#1a100c","#f0c089",2.4,.5,e,i+4.15,t+3.7)),n.add(b("METHALOX","#1a100c","#d6b48a",3.2,.42,e,i+3.6,t+3.7)),se(n,[[-32,-14],[-32,-18],[-32,-22]],c.tankCh4,.11),se(n,[[-32,-18],[-32,-22],[-18,-10]],c.steel,.1),n}function _m(){const n=new O;n.name="sinter-press";const e=66,t=-90,i=I(e,t);return n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t)),n.add(d(new p(4.6,2.2,3.4),c.steelDark,e,i+1.3,t)),n.add(d(new p(1.4,3.4,1.4),c.steel,e,i+3.2,t)),n.add(d(new p(3.2,.35,2.4),c.steel,e,i+4.9,t)),n.add(d(new p(2.2,.55,1.6),c.habDark,e,i+2.55,t)),Ee(n,62.2,-87.6,.2,.9),Ee(n,70,-92.2,-.15,.85),n.add(b("SINTER","#1a100c","#f0c089",2.8,.5,e,i+5.55,t+3.7)),n.add(b("PRESS","#1a100c","#d6b48a",2.4,.42,e,i+5,t+3.7)),n}function vm(){const n=new O;n.name="waste-recycle";const e=22,t=-98,i=I(e,t);return n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t)),n.add(d(new p(4.4,2.8,3.6),c.habDark,e-1.4,i+1.6,t)),n.add(d(new N(1.15,1.15,3.6,14),c.pipe,e+2.8,i+2,t)),n.add(d(new N(.85,.85,2.8,12),c.steelDark,e+2.8,i+1.6,t+2)),n.add(b("WASTE","#1a100c","#f0c089",2.6,.5,e,i+4.25,t+3.7)),n.add(b("RECOVERY","#1a100c","#d6b48a",3.2,.42,e,i+3.7,t+3.7)),se(n,[[8,-98],[14,-98],[22,-98]],c.pipe,.1),se(n,[[22,-98],[22,-112],[22,-112]],c.pipe,.09),n}function Mm(){const n=new O;n.name="solar-combiner";const e=172,t=-48,i=I(e,t);n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t)),n.add(d(new p(3.6,2.4,2.8),c.habDark,e-2,i+1.4,t)),n.add(d(new p(3.2,2,2.4),c.steelDark,e+2.2,i+1.2,t));for(let a=0;a<3;a++)n.add(d(new p(.7,1.5,1.8),c.battery,e+1.2+a*.85,i+1,t));return n.add(b("COMBINER","#111111","#f4e6c8",3.4,.5,e,i+3.55,t+3.7)),n.add(b("FIELD 4","#111111","#d6b48a",2.6,.42,e,i+3,t+3.7)),se(n,[[158,-62],[166,-54],[172,-48]],c.cable,.1),se(n,[[172,-48],[164,-38],[158,-28]],c.cable,.09),n}function wm(){const n=new O;n.name="gh-dust-filter";const e=38,t=-104,i=I(e,t);return n.add(d(new p(9.2,.18,5.6),c.concrete,e,i+.09,t)),n.add(d(new p(3.8,2.6,2.4),c.habDark,e-1.6,i+1.5,t)),n.add(d(new N(.95,.95,3.2,12),c.steelDark,e+2.4,i+1.8,t)),n.add(d(new p(.12,2.2,2),c.lattice,e+3.5,i+1.4,t)),n.add(b("DUST","#1a100c","#f0c089",2.2,.45,e,i+3.55,t+2.9)),n.add(b("FILTER","#1a100c","#d6b48a",2.6,.4,e,i+3.05,t+2.9)),se(n,[[22,-112],[30,-108],[38,-104]],c.pipe,.1),se(n,[[38,-104],[46,-108],[52,-112]],c.pipe,.09),n}function ym(){const n=new O;n.name="weather-mast";const e=24,t=-128,i=I(e,t);return n.add(d(new p(3.6,.16,3.6),c.concrete,e,i+.08,t)),n.add(d(new N(.16,.22,14.4,8),c.lattice,e,i+7.3,t)),n.add(d(new p(2.8,.08,.08),c.steel,e,i+12.4,t)),n.add(d(new p(.08,.08,2.8),c.steel,e,i+12.4,t)),n.add(d(new p(2.2,.06,.06),c.steelDark,e,i+14.2,t)),n.add(d(new p(1.4,1.1,1.1),c.habDark,e+1.15,i+.75,t+.9)),n.add(b("MET","#1a100c","#f0c089",1.8,.42,e,i+8.6,t+1.6)),n.add(b("DUST","#1a100c","#d6b48a",2,.38,e,i+8.1,t+1.6)),n}function bm(){const n=new O;n.name="ch4-chiller";const e=-80,t=20,i=I(e,t);return n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t)),n.add(d(new p(4.2,2.6,3.2),c.habDark,e-1.6,i+1.5,t)),n.add(d(new N(1.25,1.25,5,14),c.tankCh4,e+2.6,i+2.7,t)),n.add(d(new Ne(1.55,.1,6,14),c.steel,e+2.6,i+4.4,t,Math.PI/2,0,0)),n.add(b("CH4","#6a2208","#f4e6c8",2,.45,e,i+4.15,t+3.7)),n.add(b("CHILLER","#1a100c","#d6b48a",2.8,.4,e,i+3.6,t+3.7)),se(n,[[-76,-10],[-80,6],[-80,20]],c.tankCh4,.11),se(n,[[-68,12],[-74,16],[-80,20]],c.pipe,.09),n}function Sm(){const n=new O;n.name="pad2-beacons";const e=[[2,154],[-34,154],[2,118],[-34,118]];for(const[s,r]of e){const o=I(s,r);n.add(d(new N(.14,.18,5.6,8),c.steelDark,s,o+2.9,r)),n.add(d(new p(.55,.55,.55),c.glowPad,s,o+5.85,r)),n.add(d(new p(.22,.9,.22),c.steel,s,o+6.4,r))}const t=6,i=148,a=I(t,i);return n.add(d(new p(5.4,.16,4.2),c.concrete,t,a+.08,i)),n.add(d(new p(2.6,1.6,1.8),c.habDark,t,a+1,i)),n.add(b("PAD 2","#1a100c","#f0c089",2.2,.42,t,a+2.35,i+2.2)),n.add(b("BEACONS","#1a100c","#d6b48a",2.6,.38,t,a+1.88,i+2.2)),n}function Em(){const n=new O;n.name="cargo-crane";const e=-64,t=80,i=I(e,t);return n.add(d(new p(7.2,.2,7.2),c.concrete,e,i+.1,t)),n.add(d(new p(1.4,10.4,1.4),c.steelDark,e,i+5.3,t)),n.add(d(new p(.28,.28,12.4),c.steel,e+3.6,i+10.5,t-3.2,0,.55,.08)),n.add(d(new p(.18,3.2,.18),c.steelDark,e+7.4,i+8.4,t-6.6)),n.add(d(new p(1.5,1.3,1.5),c.crate,e+7.4,i+6.5,t-6.6)),Ee(n,e-2.4,t+2.2,.2,1),Ee(n,e-2.8,t-1.6,-.15,.9),n.add(b("CRANE","#1a100c","#f0c089",2.6,.5,e,i+6.4,t+3.6)),n.add(b("CARGO","#1a100c","#d6b48a",2.4,.42,e,i+5.85,t+3.6)),n}function Tm(){const n=new O;n.name="o2-chiller";const e=-80,t=32,i=I(e,t);return n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t)),n.add(d(new p(4.2,2.6,3.2),c.habDark,e-1.6,i+1.5,t)),n.add(d(new N(1.25,1.25,5,14),c.tankO2,e+2.6,i+2.7,t)),n.add(d(new Ne(1.55,.1,6,14),c.steel,e+2.6,i+4.4,t,Math.PI/2,0,0)),n.add(b("O2","#2a3340","#e8eef4",1.8,.45,e,i+4.15,t+3.7)),n.add(b("CHILLER","#1a100c","#d6b48a",2.8,.4,e,i+3.6,t+3.7)),se(n,[[-80,20],[-80,26],[-80,32]],c.steel,.11),se(n,[[-72,-21],[-80,8],[-80,32]],c.steel,.09),n}function Am(){const n=new O;n.name="power-trench";const e=100,t=-22,i=I(e,t);n.add(d(new p(7.6,.18,5.4),c.concrete,e,i+.08,t)),n.add(d(new p(3.2,1.8,2.4),c.habDark,e,i+1.1,t)),n.add(d(new p(1.4,.9,1.1),c.steelDark,e+2.4,i+.65,t+1.2)),n.add(b("POWER","#111111","#f4e6c8",2.6,.45,e,i+2.45,t+2.8)),n.add(b("TRENCH","#111111","#d6b48a",2.4,.38,e,i+1.95,t+2.8)),se(n,[[172,-48],[135,-40],[100,-22]],c.cable,.12),se(n,[[100,-22],[84,-16],[68,-10]],c.cable,.12);for(const[a,s]of[[148,-44],[122,-34],[84,-16]]){const r=I(a,s);n.add(d(new p(2.4,.16,1.1),c.steelDark,a,r+.12,s))}return n}function Rm(){const n=new O;n.name="regolith-stock";const e=-22,t=-56,i=I(e,t);n.add(d(new p(9.6,.16,7.2),c.concrete,e,i+.08,t));const a=d(new mt(2.6,0),c.soil,e-1.6,i+1.2,t);a.scale.set(1.35,.7,1.15),n.add(a);const s=d(new mt(2,0),c.soil,e+2.2,i+.95,t+1.1);return s.scale.set(1.2,.6,1.05),n.add(s),n.add(d(new p(2.2,1.2,1.6),c.steelDark,e+2.6,i+.8,t-2)),Ee(n,e-3.4,t-2.2,.2,.85),n.add(b("REGOLITH","#1a100c","#f0c089",3.4,.48,e,i+3.15,t+3.7)),n.add(b("SINTER FEED","#1a100c","#d6b48a",3.4,.4,e,i+2.6,t+3.7)),n}function Cm(){const n=new O;n.name="survey-2";const e=-124,t=-188,i=I(e,t);for(let s=0;s<3;s++){const r=s/3*Math.PI*2+.2,o=Math.cos(r)*.62,u=Math.sin(r)*.62;n.add(d(new p(.08,2.5,.08),c.steelDark,e+o,i+1.15,t+u,.32*Math.cos(r),0,.32*Math.sin(r)))}n.add(d(new p(.58,.32,.48),c.steelDark,e,i+2.28,t)),n.add(b("SURVEY 2","#1a100c","#f0c089",3,.55,e,i+3.4,t+1.2)),n.add(b("ICE WEST","#1a100c","#d6b48a",2.6,.4,e,i+2.85,t+1.2));const a=[[-136,-200],[-124,-200],[-112,-200],[-136,-188],[-124,-188],[-112,-188],[-136,-176],[-124,-176],[-112,-176]];for(let s=0;s<a.length;s++){const[r,o]=a[s];Yr(n,r,o,s%2===0?c.flagIce:c.flagDeposit)}return Za(n,-130,-196,"ICE",c.flagIce),Cr(n,-122,-184,.2),Cr(n,-126.4,-182.6,-.3),n}function Pm(){const n=new O;n.name="h2-recycle";const e=-38,t=16,i=I(e,t);return n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t)),n.add(d(new N(1.55,1.55,6.4,16),c.steel,e-1.8,i+3.4,t)),n.add(d(new N(1.55,1.55,6.4,16),c.steel,e+1.8,i+3.4,t)),n.add(d(new p(2.2,1.4,1.6),c.habDark,e,i+.9,t+2.2)),n.add(b("H2","#1a100c","#f0c089",1.8,.5,e,i+5.15,t+3.7)),n.add(b("RECYCLE","#1a100c","#d6b48a",2.8,.42,e,i+4.55,t+3.7)),se(n,[[-50,4],[-44,10],[-38,16]],c.steel,.11),se(n,[[-38,16],[-52,8],[-64,-8]],c.steel,.1),n}function Dm(){const n=new O;n.name="food-4";const e=70,t=-112,i=I(e,t);n.add(d(new p(11.6,.22,7.2),c.concrete,e,i+.1,t));const a=new dt(new N(3.3,3.3,11.2,16,1,!1,0,Math.PI),c.glass);a.rotation.z=Math.PI/2,a.position.set(e,i+3.3,t),a.castShadow=!1,n.add(a),n.add(d(new p(10.8,.1,6.6),c.solarFrame,e,i+3.35,t));for(let s=-2;s<=2;s++){n.add(d(new p(1.7,.22,5.2),c.soil,e+s*1.95,i+.32,t));for(let r=-2;r<=2;r++){const o=r%2===0?c.plant:c.plantLeaf;n.add(d(new p(1.15,.5,.66),o,e+s*1.95,i+.7,t+r*.9))}}return n.add(b("GROW 4","#1a100c","#f0c089",2.8,.55,e,i+4.75,t+.15)),n.add(b("FROM CO2","#1a100c","#d6b48a",3,.42,e,i+4.15,t+.15)),se(n,[[52,-112],[62,-112],[70,-112]],c.pipe,.1),n}function Im(){const n=new O;n.name="approach-lights";for(const[a,s]of[[4,68],[4,50],[4,32]]){const r=I(a,s);n.add(d(new N(.12,.16,3.6,8),c.steelDark,a,r+1.9,s)),n.add(d(new p(.42,.42,.42),c.glowPad,a,r+3.85,s))}const e=16,t=48,i=I(e,t);return n.add(d(new p(5.2,.16,4),c.concrete,e,i+.08,t)),n.add(d(new p(2.4,1.5,1.6),c.habDark,e,i+.95,t)),n.add(b("APPROACH","#1a100c","#f0c089",3,.42,e,i+2.25,t+2.1)),n.add(b("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function Lm(){const n=new O;n.name="isru-process-water";const e=-58,t=-36,i=I(e,t);return n.add(d(new p(11.2,.2,7.4),c.concrete,e,i+.1,t)),n.add(d(new N(1.7,1.7,8.4,16),c.pipe,e-2.2,i+2,t,0,0,Math.PI/2)),n.add(d(new N(1.7,1.7,8.4,16),c.pipe,e+2,i+2,t,0,0,Math.PI/2)),n.add(d(new p(2.4,1.6,1.8),c.habDark,e,i+1,t+2.4)),n.add(b("PROCESS","#1a2830","#d6e6ef",3.2,.5,e,i+4.55,t+3.8)),n.add(b("H2O","#1a2830","#d6b48a",2,.42,e,i+4,t+3.8)),se(n,[[-58,-142],[-58,-90],[-58,-36]],c.pipe,.11),se(n,[[-58,-36],[-64,-26],[-68,-16]],c.pipe,.1),se(n,[[-58,-36],[-50,-16],[-50,4]],c.pipe,.1),n}function Um(){const n=new O;n.name="methalox-berm";const e=d(new Ne(9.2,1.7,8,24,Math.PI*1.2),c.rust,50,I(50,4)-.15,4,Math.PI/2,1.6,0);e.scale.set(1,.45,1),n.add(e);for(const[s,r]of[[54,12],[56,4],[54,-4]]){const o=d(new mt(2.2,0),c.rust,s,I(s,r)+.9,r);o.scale.set(1.2,.55,1.05),n.add(o)}const[t,i,a]=Ot(50,4,2.2);return n.add(b("FARM BERM","#1a100c","#f0c089",3.4,.55,t,i+1.1,a)),n.add(b("METHALOX","#1a100c","#d6b48a",3.2,.42,t,i+.5,a)),n}function zm(){const n=new O;n.name="ice-mine-berm";const e=d(new Ne(8.4,1.6,8,24,Math.PI*1.15),c.rust,-40,I(-40,-168)-.15,-168,Math.PI/2,.4,0);e.scale.set(1,.44,1),n.add(e);for(const[s,r]of[[-34,-162],[-32,-170],[-38,-176]]){const o=d(new mt(2.1,0),c.rust,s,I(s,r)+.85,r);o.scale.set(1.15,.55,1),n.add(o)}const[t,i,a]=Ot(-40,-168,2.2);return n.add(b("MINE BERM","#1a2830","#d6e6ef",3.4,.55,t,i+1.1,a)),n.add(b("ICE 1","#1a2830","#d6b48a",2.2,.42,t,i+.5,a)),n}function Nm(){const n=new O;n.name="tool-crib";const e=82,t=-90,i=I(e,t);n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t)),n.add(d(new p(7.2,2.6,3.4),c.habDark,e,i+1.5,t)),n.add(d(new p(7.4,.12,3.6),c.steel,e,i+2.85,t));for(let a=-2;a<=2;a++)n.add(d(new p(.9,1.6,.55),c.steelDark,e+a*1.15,i+1.15,t+1.35));return Ee(n,77.8,-87.4,.15,.85),Ee(n,86.2,-92.4,-.1,.8),n.add(b("TOOL","#1a100c","#f0c089",2.2,.5,e,i+3.85,t+3.7)),n.add(b("CRIB","#1a100c","#d6b48a",2,.42,e,i+3.3,t+3.7)),n}function Fm(){const n=new O;n.name="comms-battery";const e=4,t=-148,i=I(e,t);n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t));for(let a=0;a<4;a++)n.add(d(new p(1.7,1.9,3.6),c.battery,e-3.2+a*2.1,i+1.15,t)),n.add(d(new p(1.55,.08,3.4),c.steel,e-3.2+a*2.1,i+2.15,t));return n.add(b("COMMS","#111111","#f4e6c8",2.6,.5,e,i+3.15,t+3.7)),n.add(b("NIGHT","#111111","#d6b48a",2.2,.42,e,i+2.6,t+3.7)),n}function Om(){const n=new O;n.name="solar-combiner-3";const e=148,t=-40,i=I(e,t);n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t)),n.add(d(new p(3.6,2.4,2.8),c.habDark,e-2,i+1.4,t)),n.add(d(new p(3.2,2,2.4),c.steelDark,e+2.2,i+1.2,t));for(let a=0;a<3;a++)n.add(d(new p(.7,1.5,1.8),c.battery,e+1.2+a*.85,i+1,t));return n.add(b("COMBINER","#111111","#f4e6c8",3.4,.5,e,i+3.55,t+3.7)),n.add(b("FIELD 3","#111111","#d6b48a",2.6,.42,e,i+3,t+3.7)),se(n,[[135,-40],[142,-40],[148,-40]],c.cable,.1),se(n,[[148,-40],[124,-30],[100,-22]],c.cable,.09),n}function Bm(){const n=new O;n.name="solar-combiner-2";const e=124,t=-70,i=I(e,t);n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t)),n.add(d(new p(3.6,2.4,2.8),c.habDark,e-2,i+1.4,t)),n.add(d(new p(3.2,2,2.4),c.steelDark,e+2.2,i+1.2,t));for(let a=0;a<3;a++)n.add(d(new p(.7,1.5,1.8),c.battery,e+1.2+a*.85,i+1,t));return n.add(b("COMBINER","#111111","#f4e6c8",3.4,.5,e,i+3.55,t+3.7)),n.add(b("FIELD 2","#111111","#d6b48a",2.6,.42,e,i+3,t+3.7)),se(n,[[112,-83],[118,-76],[124,-70]],c.cable,.1),se(n,[[124,-70],[136,-54],[148,-40]],c.cable,.09),n}function km(){const n=new O;n.name="solar-combiner-1";const e=96,t=-44,i=I(e,t);n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t)),n.add(d(new p(3.6,2.4,2.8),c.habDark,e-2,i+1.4,t)),n.add(d(new p(3.2,2,2.4),c.steelDark,e+2.2,i+1.2,t));for(let a=0;a<3;a++)n.add(d(new p(.7,1.5,1.8),c.battery,e+1.2+a*.85,i+1,t));return n.add(b("COMBINER","#111111","#f4e6c8",3.4,.5,e,i+3.55,t+3.7)),n.add(b("FARM 1","#111111","#d6b48a",2.4,.42,e,i+3,t+3.7)),se(n,[[82,-44],[90,-44],[96,-44]],c.cable,.1),se(n,[[96,-44],[98,-32],[100,-22]],c.cable,.09),n}function Hm(){const n=new O;n.name="sabatier-condenser";const e=-84,t=8,i=I(e,t);return n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t)),n.add(d(new p(3.8,2.4,2.8),c.habDark,e-2,i+1.4,t)),n.add(d(new N(1.35,1.35,4.6,14),c.pipe,e+2.4,i+2.5,t)),n.add(d(new Ne(1.65,.1,6,14),c.steel,e+2.4,i+4.1,t,Math.PI/2,0,0)),n.add(d(new N(.7,.7,2.4,12),c.steelDark,e+2.4,i+1.4,t+2.1)),n.add(b("KNOCKOUT","#1a2830","#d6e6ef",3.4,.45,e,i+4.15,t+3.7)),n.add(b("H2O","#1a2830","#d6b48a",1.8,.4,e,i+3.6,t+3.7)),se(n,[[-68,-16],[-76,-4],[-84,8]],c.pipe,.11),se(n,[[-84,8],[-80,14],[-80,20]],c.tankCh4,.09),n}function Gm(){const n=new O;n.name="hab-dust-lock";const e=16,t=-86,i=I(e,t);return n.add(d(new p(8.4,.2,6.4),c.concrete,e,i+.1,t)),n.add(d(new p(6.2,3.4,4.4),c.habDark,e,i+1.9,t)),n.add(d(new p(6.4,.16,4.6),c.steel,e,i+3.65,t)),n.add(d(new p(1.8,2.4,.22),c.steelDark,e,i+1.5,t+2.3)),n.add(d(new p(1.8,2.4,.22),c.steelDark,e,i+1.5,t-2.3)),n.add(nn(e+2.6,t+.2,.1)),n.add(b("DUST LOCK","#1a100c","#f0c089",3.4,.45,e,i+4.35,t+2.4)),n.add(b("HAB EVA","#1a100c","#d6b48a",2.6,.4,e,i+3.85,t+2.4)),n}function Vm(){const n=new O;n.name="field3-night";const e=135,t=-22,i=I(e,t);n.add(d(new p(12,.2,7.2),c.concrete,e,i+.1,t));for(let a=0;a<5;a++)n.add(d(new p(1.7,2,4.2),c.battery,e-4+a*2,i+1.2,t));return n.add(b("NIGHT","#111111","#f4e6c8",2.2,.5,e,i+2.7,t+3.6)),n.add(b("FIELD 3","#111111","#d6b48a",2.4,.42,e,i+2.15,t+3.6)),se(n,[[148,-40],[142,-30],[135,-22]],c.cable,.1),se(n,[[135,-22],[118,-22],[100,-22]],c.cable,.09),n}function Wm(){const n=new O;n.name="field2-night";const e=100,t=-70,i=I(e,t);n.add(d(new p(12,.2,7.2),c.concrete,e,i+.1,t));for(let a=0;a<5;a++)n.add(d(new p(1.7,2,4.2),c.battery,e-4+a*2,i+1.2,t));return n.add(b("NIGHT","#111111","#f4e6c8",2.2,.5,e,i+2.7,t+3.6)),n.add(b("FIELD 2","#111111","#d6b48a",2.4,.42,e,i+2.15,t+3.6)),se(n,[[124,-70],[112,-70],[100,-70]],c.cable,.1),se(n,[[100,-70],[100,-46],[100,-22]],c.cable,.09),n}function Xm(){const n=new O;n.name="farm1-night";const e=82,t=-28,i=I(e,t);n.add(d(new p(12,.2,7.2),c.concrete,e,i+.1,t));for(let a=0;a<5;a++)n.add(d(new p(1.7,2,4.2),c.battery,e-4+a*2,i+1.2,t));return n.add(b("NIGHT","#111111","#f4e6c8",2.2,.5,e,i+2.7,t+3.6)),n.add(b("FARM 1","#111111","#d6b48a",2.4,.42,e,i+2.15,t+3.6)),se(n,[[82,-44],[82,-36],[82,-28]],c.cable,.1),se(n,[[82,-28],[74,-18],[68,-10]],c.cable,.09),n}function qm(){const n=new O;n.name="co2-capture-1";const e=-68,t=2,i=I(e,t);return n.add(d(new p(11.6,.2,7.4),c.concrete,e,i+.1,t)),n.add(d(new N(.55,.55,6.8,10),c.steel,e-2.4,i+3.6,t)),n.add(d(new N(2.1,.65,2.4,14),c.steelDark,e-2.4,i+7.8,t)),n.add(d(new Ne(1.85,.1,6,16),c.steel,e-2.4,i+9.1,t,Math.PI/2,0,0)),n.add(d(new p(3.2,2.2,2.4),c.habDark,e+2.2,i+1.3,t)),n.add(b("CO2","#1a100c","#f0c089",2.2,.55,e-2.4,i+4.8,t+1.4)),n.add(b("INTAKE 1","#1a100c","#d6b48a",3,.45,e+2.2,i+2.7,t+1.35)),se(n,[[-68,2],[-68,-8],[-68,-16]],c.pipe,.12),n}function Ym(){const n=new O;n.name="field3-dust-fence";const e=122,t=-40,i=I(e,t);for(let a=0;a<8;a++){const s=t-10.5+a*3;n.add(d(new p(.18,3.4,.18),c.steelDark,e,i+1.8,s)),a<7&&n.add(d(new p(.06,2.6,2.7),c.lattice,e,i+1.7,s+1.5))}return n.add(b("DUST","#1a100c","#f0c089",2.4,.45,e-1.4,i+3.5,t)),n.add(b("FIELD 3","#1a100c","#d6b48a",2.6,.4,e-1.4,i+3,t)),n}function Km(){const n=new O;n.name="field2-dust-fence";const e=98,t=-83,i=I(e,t);for(let a=0;a<8;a++){const s=t-10.5+a*3;n.add(d(new p(.18,3.4,.18),c.steelDark,e,i+1.8,s)),a<7&&n.add(d(new p(.06,2.6,2.7),c.lattice,e,i+1.7,s+1.5))}return n.add(b("DUST","#1a100c","#f0c089",2.4,.45,e-1.4,i+3.5,t)),n.add(b("FIELD 2","#1a100c","#d6b48a",2.6,.4,e-1.4,i+3,t)),n}function Jm(){const n=new O;n.name="farm1-dust-fence";const e=70,t=-44,i=I(e,t);for(let a=0;a<8;a++){const s=t-10.5+a*3;n.add(d(new p(.18,3.4,.18),c.steelDark,e,i+1.8,s)),a<7&&n.add(d(new p(.06,2.6,2.7),c.lattice,e,i+1.7,s+1.5))}return n.add(b("DUST","#1a100c","#f0c089",2.4,.45,e-1.4,i+3.5,t)),n.add(b("FARM 1","#1a100c","#d6b48a",2.4,.4,e-1.4,i+3,t)),n}function Zm(){const n=new O;n.name="ice-crush-cover";const e=-102,t=-158,i=I(e,t);n.add(d(new p(10.4,.18,8.2),c.concrete,e,i+.09,t));for(const[s,r]of[[-4.2,-3.2],[4.2,-3.2],[-4.2,3.2],[4.2,3.2]])n.add(d(new N(.16,.2,4.2,8),c.steelDark,e+s,i+2.2,t+r));n.add(d(new p(10.8,.14,8.6),c.steel,e,i+4.4,t)),n.add(d(new p(3.2,1.8,2.4),c.steelDark,e,i+1.1,t));const a=d(new mt(1.6,0),c.ice,e+2.8,i+.85,t+1.6);return a.scale.set(1.2,.55,1.05),n.add(a),n.add(b("CRUSH","#1a2830","#d6e6ef",2.6,.45,e,i+4.95,t+4.3)),n.add(b("COVER","#1a2830","#d6b48a",2.4,.4,e,i+4.45,t+4.3)),n}function $m(){const n=new O;n.name="batteries-4";const e=-18,t=-78,i=I(e,t);n.add(d(new p(11.6,.2,6.4),c.concrete,e,i+.1,t));for(let a=0;a<5;a++)n.add(d(new p(1.7,1.95,3.8),c.battery,e-4+a*2,i+1.15,t)),n.add(d(new p(1.55,.08,3.6),c.steel,e-4+a*2,i+2.18,t));return n.add(b("NIGHT","#111111","#f4e6c8",2.4,.5,e,i+2.7,t+3.3)),n.add(b("HAB 4","#111111","#d6b48a",2.2,.42,e,i+2.15,t+3.3)),n}function jm(){const n=new O;n.name="ice-mine-2-berm";const e=d(new Ne(8.4,1.6,8,24,Math.PI*1.15),c.rust,-64,I(-64,-184)-.15,-184,Math.PI/2,.55,0);e.scale.set(1,.44,1),n.add(e);for(const[s,r]of[[-58,-178],[-56,-186],[-62,-192]]){const o=d(new mt(2.1,0),c.rust,s,I(s,r)+.85,r);o.scale.set(1.15,.55,1),n.add(o)}const[t,i,a]=Ot(-64,-184,2.2);return n.add(b("MINE BERM","#1a2830","#d6e6ef",3.4,.55,t,i+1.1,a)),n.add(b("ICE 2","#1a2830","#d6b48a",2.2,.42,t,i+.5,a)),n}function Qm(){const n=new O;n.name="potable-uv";const e=32,t=-152,i=I(e,t);return n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t)),n.add(d(new p(4.2,2.6,3.4),c.habDark,e-1.6,i+1.5,t)),n.add(d(new N(1.05,1.05,3.4,14),c.pipe,e+2.6,i+1.9,t)),n.add(d(new p(1.6,1.4,1.2),c.steel,e+2.6,i+3.9,t)),n.add(b("UV","#1a2830","#d6e6ef",1.6,.5,e,i+4.15,t+3.7)),n.add(b("POLISH","#1a2830","#d6b48a",2.6,.42,e,i+3.6,t+3.7)),se(n,[[18,-152],[24,-152],[32,-152]],c.pipe,.1),n}function e2(){const n=new O;n.name="isru-radiators-2";const e=-96,t=16,i=I(e,t);n.add(d(new p(16.4,.18,6.2),c.concrete,e,i+.08,t));for(let a=0;a<5;a++){const s=e-6+a*3;n.add(d(new p(.16,3.6,.16),c.steelDark,s,i+1.9,t-1.8)),n.add(d(new p(.16,3.6,.16),c.steelDark,s,i+1.9,t+1.8)),n.add(d(new p(2.4,3.2,.08),c.solar,s,i+2.4,t,-.15,0,0)),n.add(d(new p(2.5,3.3,.04),c.steel,s,i+2.4,t+.06,-.15,0,0))}return n.add(b("REJECT","#1a100c","#f0c089",2.8,.5,e,i+4.55,t+3.2)),n.add(b("TRAIN 2","#1a100c","#d6b48a",2.8,.42,e,i+4,t+3.2)),se(n,[[-96,-6],[-96,4],[-96,16]],c.pipe,.1),n}function t2(){const n=new O;n.name="workshop-3";const e=82,t=-74,i=I(e,t);n.add(d(new p(16,.28,12),c.concrete,e,i+.1,t));const a=d(new N(5.4,5.4,14,16,1,!1,0,Math.PI),c.habDark,e-1.2,i+3.1,t);return a.rotation.z=Math.PI/2,n.add(a),n.add(d(new p(.2,3.8,5.8),c.steelDark,e-8.1,i+2,t)),n.add(d(new p(.28,8.4,.28),c.lattice,e+6.4,i+4.3,t-3.6)),n.add(d(new p(7.2,.2,.2),c.lattice,e+3,i+8.5,t-3.6)),n.add(d(new p(1.5,1.1,1.5),c.crate,e+2.2,i+8,t-3.4)),Ee(n,89.2,-69.4,.2),Ee(n,90.4,-71.6,-.3,1.05),Ee(n,74.6,-68.8,.15,.9),n.add(b("WORKSHOP","#1a100c","#f0c089",3.8,.75,e,i+5.4,t+.2)),n.add(b("BAY 3","#1a100c","#d6b48a",2.6,.5,e,i+4.7,t+.2)),n}function n2(){const n=new O;n.name="ice-melt-2";const e=-78,t=-156,i=I(e,t);n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t)),n.add(d(new p(3.6,2.8,3.2),c.habDark,e-1.8,i+1.6,t)),n.add(d(new N(1.45,1.45,4.2,14),c.pipe,e+2.2,i+2.3,t)),n.add(d(new N(.55,.85,1.6,10),c.steelDark,e+2.2,i+4.9,t));const a=d(new mt(1.8,0),c.ice,e-3.4,i+.9,t+2.1);return a.scale.set(1.15,.55,1),n.add(a),n.add(b("MELT","#1a2830","#d6e6ef",2.4,.5,e,i+4.4,t+3.7)),n.add(b("MINE 2","#1a2830","#d6b48a",2.6,.42,e,i+3.85,t+3.7)),se(n,[[-78,-172],[-78,-164],[-78,-156]],c.pipe,.11),se(n,[[-78,-156],[-90,-90],[-96,-26]],c.pipe,.1),n}function i2(){const n=new O;n.name="sabatier-condenser-2";const e=-110,t=8,i=I(e,t);return n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t)),n.add(d(new p(3.8,2.4,2.8),c.habDark,e-2,i+1.4,t)),n.add(d(new N(1.35,1.35,4.6,14),c.pipe,e+2.4,i+2.5,t)),n.add(d(new Ne(1.65,.1,6,14),c.steel,e+2.4,i+4.1,t,Math.PI/2,0,0)),n.add(d(new N(.7,.7,2.4,12),c.steelDark,e+2.4,i+1.4,t+2.1)),n.add(b("KNOCKOUT","#1a2830","#d6e6ef",3.4,.45,e,i+4.15,t+3.7)),n.add(b("TRAIN 2","#1a2830","#d6b48a",2.8,.4,e,i+3.6,t+3.7)),se(n,[[-96,-16],[-104,-4],[-110,8]],c.pipe,.11),n}function a2(){const n=new O;n.name="ch4-chiller-2";const e=-110,t=20,i=I(e,t);return n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t)),n.add(d(new p(4.2,2.6,3.2),c.habDark,e-1.6,i+1.5,t)),n.add(d(new N(1.25,1.25,5,14),c.tankCh4,e+2.6,i+2.7,t)),n.add(d(new Ne(1.55,.1,6,14),c.steel,e+2.6,i+4.4,t,Math.PI/2,0,0)),n.add(b("CH4","#6a2208","#f4e6c8",2,.45,e,i+4.15,t+3.7)),n.add(b("TRAIN 2","#1a100c","#d6b48a",2.8,.4,e,i+3.6,t+3.7)),se(n,[[-110,8],[-110,14],[-110,20]],c.tankCh4,.11),n}function s2(){const n=new O;n.name="o2-chiller-2";const e=-110,t=32,i=I(e,t);return n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t)),n.add(d(new p(4.2,2.6,3.2),c.habDark,e-1.6,i+1.5,t)),n.add(d(new N(1.25,1.25,5,14),c.tankO2,e+2.6,i+2.7,t)),n.add(d(new Ne(1.55,.1,6,14),c.steel,e+2.6,i+4.4,t,Math.PI/2,0,0)),n.add(b("O2","#2a3340","#e8eef4",1.8,.45,e,i+4.15,t+3.7)),n.add(b("TRAIN 2","#1a100c","#d6b48a",2.8,.4,e,i+3.6,t+3.7)),se(n,[[-110,20],[-110,26],[-110,32]],c.steel,.11),n}function r2(){const n=new O;n.name="isru-electrolysis-2";const e=-122,t=8,i=I(e,t);n.add(d(new p(11.6,.2,7.4),c.concrete,e,i+.1,t)),n.add(d(new p(3.4,3.6,2.6),c.habDark,e-2.6,i+2,t)),n.add(d(new p(3.4,3.6,2.6),c.steelDark,e+1.2,i+2,t));for(let a=0;a<4;a++)n.add(d(new p(.18,3.1,2.2),c.steel,e-3.8+a*.7,i+2,t));return n.add(d(new N(1.15,1.15,5.2,14),c.steel,e+4.2,i+2.8,t+1.4)),n.add(d(new N(.95,.95,4.4,14),c.tankO2,e+4.2,i+2.4,t-1.6)),n.add(b("ELECTRO","#1a100c","#f0c089",3.2,.5,e,i+4.55,t+3.7)),n.add(b("TRAIN 2","#1a100c","#d6b48a",2.8,.42,e,i+4,t+3.7)),se(n,[[-110,8],[-116,8],[-122,8]],c.pipe,.11),n}function o2(){const n=new O;n.name="h2-recycle-2";const e=-122,t=20,i=I(e,t);return n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t)),n.add(d(new N(1.55,1.55,6.4,16),c.steel,e-1.8,i+3.4,t)),n.add(d(new N(1.55,1.55,6.4,16),c.steel,e+1.8,i+3.4,t)),n.add(d(new p(2.2,1.4,1.6),c.habDark,e,i+.9,t+2.2)),n.add(b("H2","#1a100c","#f0c089",1.8,.5,e,i+5.15,t+3.7)),n.add(b("TRAIN 2","#1a100c","#d6b48a",2.8,.42,e,i+4.55,t+3.7)),se(n,[[-122,8],[-122,14],[-122,20]],c.steel,.11),n}function c2(){const n=new O;n.name="eclss-2";const e=-8,t=-98,i=I(e,t);return n.add(d(new p(11.2,.22,7.2),c.concrete,e,i+.1,t)),n.add(d(new p(4.8,2.6,3.4),c.habDark,e-2.4,i+1.5,t)),n.add(b("ECLSS","#1a100c","#f0c089",3.2,.6,e-2.4,i+3.05,t+1.85)),n.add(b("SCRUB 2","#1a100c","#d6b48a",3,.45,e-2.4,i+2.45,t+1.85)),n.add(d(new N(.85,.85,3.4,12),c.steelDark,e+1.6,i+1.9,t-1.4)),n.add(d(new N(.85,.85,3.4,12),c.steelDark,e+3.4,i+1.9,t-1.4)),n.add(b("AMINE","#1a100c","#d6b48a",2.2,.4,e+2.5,i+3.8,t-1.4)),n.add(d(new N(.7,.7,2.6,12),c.tankO2,e+1.6,i+1.5,t+1.8)),n.add(d(new N(.7,.7,2.6,12),c.tankO2,e+3.4,i+1.5,t+1.8)),n.add(b("O2","#2a3340","#e8eef4",1.4,.4,e+2.5,i+3.05,t+1.8)),se(n,[[8,-98],[0,-98],[-8,-98]],c.pipe,.1),n}function l2(){const n=new O;n.name="waste-recycle-2";const e=-22,t=-98,i=I(e,t);return n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t)),n.add(d(new p(4.4,2.8,3.6),c.habDark,e-1.4,i+1.6,t)),n.add(d(new N(1.15,1.15,3.6,14),c.pipe,e+2.8,i+2,t)),n.add(d(new N(.85,.85,2.8,12),c.steelDark,e+2.8,i+1.6,t+2)),n.add(b("WASTE","#1a100c","#f0c089",2.6,.5,e,i+4.25,t+3.7)),n.add(b("RECOVERY 2","#1a100c","#d6b48a",3.6,.42,e,i+3.7,t+3.7)),se(n,[[-8,-98],[-14,-98],[-22,-98]],c.pipe,.1),n}function d2(){const n=new O;n.name="o2-buffer-2";const e=8,t=-88,i=I(e,t);n.add(d(new p(10.2,.2,7.4),c.concrete,e,i+.1,t));for(let a=0;a<4;a++){const s=e-3.3+a*2.2;n.add(d(new N(.85,.85,3.6,12),c.tankO2,s,i+2,t))}return n.add(b("O2","#2a3340","#e8eef4",1.8,.5,e,i+4.15,t+3.7)),n.add(b("CREW 2","#2a3340","#d6b48a",2.6,.42,e,i+3.6,t+3.7)),se(n,[[-8,-88],[0,-88],[8,-88]],c.tankO2,.1),n}function h2(){const n=new O;n.name="isru-process-water-2";const e=-78,t=-36,i=I(e,t);return n.add(d(new p(11.2,.2,7.4),c.concrete,e,i+.1,t)),n.add(d(new N(1.7,1.7,8.4,16),c.pipe,e-2.2,i+2,t,0,0,Math.PI/2)),n.add(d(new N(1.7,1.7,8.4,16),c.pipe,e+2,i+2,t,0,0,Math.PI/2)),n.add(d(new p(2.4,1.6,1.8),c.habDark,e,i+1,t+2.4)),n.add(b("PROCESS","#1a2830","#d6e6ef",3.2,.5,e,i+4.55,t+3.8)),n.add(b("TRAIN 2","#1a2830","#d6b48a",2.8,.42,e,i+4,t+3.8)),se(n,[[-78,-156],[-78,-90],[-78,-36]],c.pipe,.11),se(n,[[-78,-36],[-88,-26],[-96,-16]],c.pipe,.1),n}function u2(){const n=new O;n.name="parts-rack";const e=96,t=-90,i=I(e,t);n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t)),n.add(d(new p(8.4,2.8,.22),c.steelDark,e,i+1.6,t-2.4));for(let a=-3;a<=3;a++)n.add(d(new p(.16,2.6,1.8),c.steel,e+a*1.1,i+1.5,t-1.4));return Ee(n,92.2,-87.6,.15,.85),Ee(n,99.4,-88.2,-.2,1),n.add(b("PARTS","#1a100c","#f0c089",2.6,.5,e,i+3.35,t+3.5)),n.add(b("RACK","#1a100c","#d6b48a",2.2,.42,e,i+2.8,t+3.5)),n}function f2(){const n=new O;n.name="hab-power-trench";const e=-5,t=-78,i=I(e,t);return n.add(d(new p(7.6,.18,5.4),c.concrete,e,i+.08,t)),n.add(d(new p(3.2,1.8,2.4),c.habDark,e,i+1.1,t)),n.add(d(new p(1.4,.9,1.1),c.steelDark,e+2.4,i+.65,t+1.2)),n.add(b("HAB","#111111","#f4e6c8",1.8,.45,e,i+2.45,t+2.8)),n.add(b("TRENCH","#111111","#d6b48a",2.4,.38,e,i+1.95,t+2.8)),se(n,[[8,-78],[-5,-78],[-18,-78]],c.cable,.12),n}function p2(){const n=new O;n.name="comms-inverter";const e=16,t=-148,i=I(e,t);n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t)),n.add(d(new p(3.6,2.4,2.8),c.habDark,e-2,i+1.4,t)),n.add(d(new p(3.2,2,2.4),c.steelDark,e+2.2,i+1.2,t));for(let a=0;a<3;a++)n.add(d(new p(.7,1.5,1.8),c.battery,e+1.2+a*.85,i+1,t));return n.add(b("COMMS","#111111","#f4e6c8",2.6,.5,e,i+3.55,t+3.7)),n.add(b("INVERTER","#111111","#d6b48a",3.2,.42,e,i+3,t+3.7)),se(n,[[4,-148],[10,-148],[16,-148]],c.cable,.1),se(n,[[-8,-162],[4,-154],[16,-148]],c.cable,.09),n}function m2(){const n=new O;n.name="ice-weigh";const e=-90,t=-136,i=I(e,t);return n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t)),n.add(d(new p(6.4,.28,3.6),c.steel,e,i+.28,t)),n.add(d(new p(2.2,2.4,1.8),c.habDark,e+3.2,i+1.4,t+2)),n.add(d(new p(.18,3.2,.18),c.steelDark,e-3.6,i+1.8,t-2.4)),n.add(d(new p(.18,3.2,.18),c.steelDark,e+3.6,i+1.8,t-2.4)),n.add(d(new p(7.4,.12,.12),c.steel,e,i+3.45,t-2.4)),n.add(b("WEIGH","#1a2830","#d6e6ef",2.6,.5,e,i+3.15,t+3.7)),n.add(b("ICE HAUL","#1a2830","#d6b48a",3,.42,e,i+2.6,t+3.7)),n}function g2(){const n=new O;n.name="hab-eva-locker";const e=16,t=-74,i=I(e,t);return n.add(d(new p(7.2,.16,5.4),c.concrete,e,i+.08,t)),n.add(d(new p(5.8,.16,2.4),c.steelDark,e,i+.18,t)),n.add(d(new p(.16,2.8,.16),c.steel,e-2.4,i+1.6,t-.7)),n.add(d(new p(.16,2.8,.16),c.steel,e+2.4,i+1.6,t-.7)),n.add(d(new p(5,.12,.12),c.steel,e,i+3,t-.7)),n.add(nn(e-1.5,t,.2)),n.add(nn(e,t+.15,-.1)),n.add(nn(e+1.5,t,.15)),n.add(b("SUITS","#1a100c","#f0c089",2.4,.45,e,i+3.45,t+2.4)),n.add(b("HAB EVA","#1a100c","#d6b48a",2.8,.4,e,i+2.95,t+2.4)),n}function x2(){const n=new O;n.name="comms-berm";const e=d(new Ne(8.4,1.6,8,24,Math.PI*1.15),c.rust,-48,I(-48,-138)-.15,-138,Math.PI/2,.7,0);e.scale.set(1,.44,1),n.add(e);for(const[s,r]of[[-42,-132],[-40,-140],[-46,-146]]){const o=d(new mt(2.1,0),c.rust,s,I(s,r)+.85,r);o.scale.set(1.15,.55,1),n.add(o)}const[t,i,a]=Ot(-48,-138,2.2);return n.add(b("DUST BERM","#1a2830","#d6e6ef",3.4,.55,t,i+1.1,a)),n.add(b("COMMS","#1a2830","#d6b48a",2.4,.42,t,i+.5,a)),n}function _2(){const n=new O;n.name="grow-water";const e=52,t=-126,i=I(e,t);return n.add(d(new p(11.2,.2,7.4),c.concrete,e,i+.1,t)),n.add(d(new N(1.7,1.7,8.4,16),c.pipe,e-2.2,i+2,t,0,0,Math.PI/2)),n.add(d(new N(1.7,1.7,8.4,16),c.pipe,e+2,i+2,t,0,0,Math.PI/2)),n.add(d(new p(2.4,1.6,1.8),c.habDark,e,i+1,t+2.4)),n.add(b("GROW","#1a2830","#d6e6ef",2.4,.5,e,i+4.55,t+3.8)),n.add(b("H2O","#1a2830","#d6b48a",2,.42,e,i+4,t+3.8)),se(n,[[52,-112],[52,-118],[52,-126]],c.pipe,.11),se(n,[[38,-126],[44,-126],[52,-126]],c.pipe,.1),n}function v2(){const n=new O;n.name="grow-nutrient";const e=70,t=-126,i=I(e,t);return n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t)),n.add(d(new p(4.4,2.8,3.6),c.habDark,e-1.4,i+1.6,t)),n.add(d(new N(1.15,1.15,3.6,14),c.pipe,e+2.8,i+2,t)),n.add(d(new N(.85,.85,2.8,12),c.steelDark,e+2.8,i+1.6,t+2)),n.add(b("NUTRIENT","#1a100c","#f0c089",3.4,.5,e,i+4.25,t+3.7)),n.add(b("GROW","#1a100c","#d6b48a",2.2,.42,e,i+3.7,t+3.7)),se(n,[[52,-126],[60,-126],[70,-126]],c.pipe,.1),se(n,[[70,-112],[70,-118],[70,-126]],c.pipe,.09),n}function M2(){const n=new O;n.name="hab-street-lights";for(const[a,s]of[[0,-78],[0,-98],[0,-118]]){const r=I(a,s);n.add(d(new N(.12,.16,3.6,8),c.steelDark,a,r+1.9,s)),n.add(d(new p(.42,.42,.42),c.glowPad,a,r+3.85,s))}const e=0,t=-68,i=I(e,t);return n.add(d(new p(5.2,.16,4),c.concrete,e,i+.08,t)),n.add(d(new p(2.4,1.5,1.6),c.habDark,e,i+.95,t)),n.add(b("HAB","#1a100c","#f0c089",1.8,.42,e,i+2.25,t+2.1)),n.add(b("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function w2(){const n=new O;n.name="workshop-lights";for(const[a,s]of[[58,-80],[74,-80],[90,-80]]){const r=I(a,s);n.add(d(new N(.12,.16,3.6,8),c.steelDark,a,r+1.9,s)),n.add(d(new p(.42,.42,.42),c.glowPad,a,r+3.85,s))}const e=48,t=-70,i=I(e,t);return n.add(d(new p(5.2,.16,4),c.concrete,e,i+.08,t)),n.add(d(new p(2.4,1.5,1.6),c.habDark,e,i+.95,t)),n.add(b("SHOP","#1a100c","#f0c089",2,.42,e,i+2.25,t+2.1)),n.add(b("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function y2(){const n=new O;n.name="ice-mine-lights";for(const[a,s]of[[-58,-148],[-78,-148],[-90,-148]]){const r=I(a,s);n.add(d(new N(.12,.16,3.6,8),c.steelDark,a,r+1.9,s)),n.add(d(new p(.42,.42,.42),c.glowPad,a,r+3.85,s))}const e=-46,t=-148,i=I(e,t);return n.add(d(new p(5.2,.16,4),c.concrete,e,i+.08,t)),n.add(d(new p(2.4,1.5,1.6),c.habDark,e,i+.95,t)),n.add(b("ICE","#1a100c","#f0c089",1.8,.42,e,i+2.25,t+2.1)),n.add(b("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function b2(){const n=new O;n.name="isru-lights";for(const[a,s]of[[-44,12],[-62,16],[-80,16]]){const r=I(a,s);n.add(d(new N(.12,.16,3.6,8),c.steelDark,a,r+1.9,s)),n.add(d(new p(.42,.42,.42),c.glowPad,a,r+3.85,s))}const e=-38,t=16,i=I(e,t);return n.add(d(new p(5.2,.16,4),c.concrete,e,i+.08,t)),n.add(d(new p(2.4,1.5,1.6),c.habDark,e,i+.95,t)),n.add(b("ISRU","#1a100c","#f0c089",2,.42,e,i+2.25,t+2.1)),n.add(b("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function S2(){const n=new O;n.name="grow-lights";for(const[a,s]of[[22,-104],[38,-118],[52,-104]]){const r=I(a,s);n.add(d(new N(.12,.16,3.6,8),c.steelDark,a,r+1.9,s)),n.add(d(new p(.42,.42,.42),c.glowPad,a,r+3.85,s))}const e=38,t=-104,i=I(e,t);return n.add(d(new p(5.2,.16,4),c.concrete,e,i+.08,t)),n.add(d(new p(2.4,1.5,1.6),c.habDark,e,i+.95,t)),n.add(b("GROW","#1a100c","#f0c089",2,.42,e,i+2.25,t+2.1)),n.add(b("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function E2(){const n=new O;n.name="solar4-lights";for(const[a,s]of[[158,-48],[148,-48],[172,-62]]){const r=I(a,s);n.add(d(new N(.12,.16,3.6,8),c.steelDark,a,r+1.9,s)),n.add(d(new p(.42,.42,.42),c.glowPad,a,r+3.85,s))}const e=172,t=-48,i=I(e,t);return n.add(d(new p(5.2,.16,4),c.concrete,e,i+.08,t)),n.add(d(new p(2.4,1.5,1.6),c.habDark,e,i+.95,t)),n.add(b("FIELD 4","#1a100c","#f0c089",2.6,.42,e,i+2.25,t+2.1)),n.add(b("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function T2(){const n=new O;n.name="pad-floods";for(const[a,s]of[[-8,48],[-8,32],[-8,16]]){const r=I(a,s);n.add(d(new N(.12,.16,3.6,8),c.steelDark,a,r+1.9,s)),n.add(d(new p(.42,.42,.42),c.glowPad,a,r+3.85,s))}const e=-16,t=36,i=I(e,t);return n.add(d(new p(5.2,.16,4),c.concrete,e,i+.08,t)),n.add(d(new p(2.4,1.5,1.6),c.habDark,e,i+.95,t)),n.add(b("PAD","#1a100c","#f0c089",1.8,.42,e,i+2.25,t+2.1)),n.add(b("FLOOD","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function A2(){const n=new O;n.name="comms-lights";for(const[a,s]of[[-8,-138],[4,-148],[16,-138]]){const r=I(a,s);n.add(d(new N(.12,.16,3.6,8),c.steelDark,a,r+1.9,s)),n.add(d(new p(.42,.42,.42),c.glowPad,a,r+3.85,s))}const e=4,t=-138,i=I(e,t);return n.add(d(new p(5.2,.16,4),c.concrete,e,i+.08,t)),n.add(d(new p(2.4,1.5,1.6),c.habDark,e,i+.95,t)),n.add(b("COMMS","#1a100c","#f0c089",2.4,.42,e,i+2.25,t+2.1)),n.add(b("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function R2(){const n=new O;n.name="methalox-lights";for(const[a,s]of[[62,16],[68,-6],[58,16]]){const r=I(a,s);n.add(d(new N(.12,.16,3.6,8),c.steelDark,a,r+1.9,s)),n.add(d(new p(.42,.42,.42),c.glowPad,a,r+3.85,s))}const e=68,t=6,i=I(e,t);return n.add(d(new p(5.2,.16,4),c.concrete,e,i+.08,t)),n.add(d(new p(2.4,1.5,1.6),c.habDark,e,i+.95,t)),n.add(b("MX","#1a100c","#f0c089",1.6,.42,e,i+2.25,t+2.1)),n.add(b("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function C2(){const n=new O;n.name="sinter-kiln";const e=66,t=-104,i=I(e,t);return n.add(d(new p(11.2,.2,7.4),c.concrete,e,i+.1,t)),n.add(d(new N(1.55,1.55,8.6,16),c.steelDark,e,i+2.15,t,0,0,Math.PI/2)),n.add(d(new N(.42,.55,3.2,10),c.steel,e+2.4,i+4.4,t)),n.add(d(new p(2.2,1.8,2),c.habDark,e-4.4,i+1.1,t+1.8)),n.add(d(new p(1.6,1.4,1.6),c.rust,e+4.2,i+.9,t-1.6)),n.add(b("SINTER","#1a100c","#f0c089",2.8,.5,e,i+4.85,t+3.8)),n.add(b("KILN","#1a100c","#d6b48a",2,.42,e,i+4.3,t+3.8)),n}function P2(){const n=new O;n.name="sinter-bricks";const e=80,t=-104,i=I(e,t);n.add(d(new p(7.6,.16,5.4),c.concrete,e,i+.08,t));for(let a=0;a<3;a++)for(let s=0;s<4;s++){const r=e-2.4+s*1.55,o=t-1.2+a*1.2;n.add(d(new p(1.35,.42,.95),c.rust,r,i+.38,o)),n.add(d(new p(1.35,.42,.95),c.habDark,r,i+.82,o))}return n.add(b("SINTER","#1a100c","#f0c089",2.6,.42,e,i+1.85,t+2.8)),n.add(b("BRICK","#1a100c","#d6b48a",2.2,.36,e,i+1.4,t+2.8)),n}function D2(){const n=new O;n.name="sinter-roller";const e=18,t=136,i=I(e,t);return n.add(d(new p(8.8,.16,5.2),c.concrete,e,i+.08,t)),n.add(d(new p(3.6,1.6,2.2),c.habDark,e-.6,i+1.15,t)),n.add(d(new N(1.15,1.15,2.6,14),c.steelDark,e+2.6,i+1.2,t,0,0,Math.PI/2)),n.add(d(new N(.55,.55,2.2,10),c.steel,e-2.6,i+.7,t,0,0,Math.PI/2)),n.add(b("SINTER","#1a100c","#f0c089",2.6,.42,e,i+2.55,t+2.7)),n.add(b("ROLLER","#1a100c","#d6b48a",2.4,.36,e,i+2.1,t+2.7)),n}function I2(){const n=new O;n.name="hab-blower";const e=22,t=-98,i=I(e,t);return n.add(d(new p(7.2,.18,5.2),c.concrete,e,i+.09,t)),n.add(d(new p(2.6,1.7,2),c.habDark,e-1.4,i+1.05,t)),n.add(d(new N(1.05,1.05,2.4,14),c.steelDark,e+1.8,i+1.35,t,0,0,Math.PI/2)),n.add(d(new N(.28,.28,2.8,8),c.pipe,e+1.8,i+2.55,t)),n.add(b("SPARE","#1a100c","#f0c089",2.2,.42,e,i+2.7,t+2.6)),n.add(b("BLOWER","#1a100c","#d6b48a",2.6,.36,e,i+2.25,t+2.6)),n}function L2(){const n=new O;n.name="solar4-inverter";const e=172,t=-62,i=I(e,t);n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t)),n.add(d(new p(3.6,2.4,2.8),c.habDark,e-2,i+1.4,t)),n.add(d(new p(3.2,2,2.4),c.steelDark,e+2.2,i+1.2,t));for(let a=0;a<3;a++)n.add(d(new p(.7,1.5,1.8),c.battery,e+1.2+a*.85,i+1,t));return n.add(b("FIELD 4","#111111","#f4e6c8",2.8,.5,e,i+3.55,t+3.7)),n.add(b("INVERTER","#111111","#d6b48a",3.2,.42,e,i+3,t+3.7)),n}function U2(){const n=new O;n.name="ice-drill-2";const e=-92,t=-184,i=I(e,t);return n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t)),n.add(d(new p(3.4,1.8,2.4),c.habDark,e-2.2,i+1.1,t)),n.add(d(new N(.28,.42,6.4,10),c.steel,e+2.2,i+3.4,t)),n.add(d(new ii(.55,1.4,8),c.soot,e+2.2,i+.85,t)),n.add(d(new p(1.6,1.2,1.4),c.steelDark,e+2.2,i+6.5,t)),n.add(b("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+2.55,t+3.7)),n.add(b("DRILL","#1a2830","#d6b48a",2.2,.36,e,i+2.1,t+3.7)),n}function z2(){const n=new O;n.name="hab-n2";const e=-32,t=-88,i=I(e,t);n.add(d(new p(10.2,.2,7.4),c.concrete,e,i+.1,t));for(let a=0;a<4;a++){const s=e-3.3+a*2.2;n.add(d(new N(.85,.85,3.6,12),c.steel,s,i+2,t))}return n.add(b("N2","#1a2830","#d6e6ef",1.8,.5,e,i+4.15,t+3.7)),n.add(b("SPARE","#1a2830","#d6b48a",2.2,.42,e,i+3.6,t+3.7)),se(n,[[-32,-88],[-18,-88],[-8,-88]],c.pipe,.1),n}function N2(){const n=new O;n.name="workshop-welder";const e=96,t=-104,i=I(e,t);return n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t)),n.add(d(new p(3.4,2.2,2.6),c.habDark,e-2.2,i+1.3,t)),n.add(d(new p(.35,2.8,.35),c.steel,e+2,i+1.6,t)),n.add(d(new p(2.2,.28,.28),c.steel,e+3,i+2.9,t)),n.add(d(new p(1.8,1.2,1.6),c.steelDark,e+2.4,i+.8,t+1.6)),n.add(b("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.15,t+3.7)),n.add(b("WELDER","#1a100c","#d6b48a",2.6,.36,e,i+2.7,t+3.7)),n}function F2(){const n=new O;n.name="ch4-hose";const e=-28,t=-8,i=I(e,t);return n.add(d(new p(7.6,.18,5.4),c.concrete,e,i+.09,t)),n.add(d(new p(2.4,1.6,2),c.habDark,e-1.6,i+1,t)),n.add(d(new Ne(1.05,.22,8,16),c.tankCh4,e+1.8,i+1.35,t,Math.PI/2,0,0)),n.add(d(new Ne(.72,.16,8,14),c.tankCh4,e+1.8,i+1.35,t,Math.PI/2,0,0)),n.add(b("CH4","#6a2208","#f4e6c8",1.8,.42,e,i+2.55,t+2.8)),n.add(b("HOSE","#6a2208","#d6b48a",2,.36,e,i+2.1,t+2.8)),n}function O2(){const n=new O;n.name="o2-hose";const e=-28,t=6,i=I(e,t);return n.add(d(new p(7.6,.18,5.4),c.concrete,e,i+.09,t)),n.add(d(new p(2.4,1.6,2),c.habDark,e-1.6,i+1,t)),n.add(d(new Ne(1.05,.22,8,16),c.tankO2,e+1.8,i+1.35,t,Math.PI/2,0,0)),n.add(d(new Ne(.72,.16,8,14),c.steel,e+1.8,i+1.35,t,Math.PI/2,0,0)),n.add(b("O2","#2a3340","#e8eef4",1.6,.42,e,i+2.55,t+2.8)),n.add(b("HOSE","#2a3340","#d6b48a",2,.36,e,i+2.1,t+2.8)),n}function B2(){const n=new O;n.name="hab-water";const e=-46,t=-88,i=I(e,t);return n.add(d(new p(10.2,.2,7.4),c.concrete,e,i+.1,t)),n.add(d(new N(1.55,1.55,7.6,16),c.pipe,e-1.8,i+1.9,t,0,0,Math.PI/2)),n.add(d(new N(1.55,1.55,7.6,16),c.pipe,e+1.8,i+1.9,t,0,0,Math.PI/2)),n.add(d(new p(2.2,1.4,1.6),c.habDark,e,i+.9,t+2.2)),n.add(b("HAB","#1a2830","#d6e6ef",1.8,.5,e,i+4.35,t+3.8)),n.add(b("H2O","#1a2830","#d6b48a",2,.42,e,i+3.8,t+3.8)),se(n,[[-46,-88],[-32,-88],[-18,-88]],c.pipe,.1),n}function k2(){const n=new O;n.name="sabatier-catalyst";const e=-50,t=-22,i=I(e,t);n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t)),n.add(d(new p(3.4,2,2.6),c.habDark,e-2.2,i+1.2,t));for(let a=0;a<3;a++)n.add(d(new N(.55,.55,2.4,12),c.steelDark,e+1+a*1.35,i+1.4,t));return n.add(b("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.05,t+3.7)),n.add(b("CATALYST","#1a100c","#d6b48a",3.2,.36,e,i+2.6,t+3.7)),n}function H2(){const n=new O;n.name="co2-spare";const e=-80,t=20,i=I(e,t);return n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t)),n.add(d(new p(3.2,2,2.4),c.habDark,e-2,i+1.2,t)),n.add(d(new N(.7,.7,3.2,12),c.steelDark,e+2.2,i+1.8,t)),n.add(d(new N(1.15,.45,1.4,12),c.steel,e+2.2,i+4,t)),n.add(b("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.05,t+3.7)),n.add(b("CO2 COMP","#1a100c","#d6b48a",3.2,.36,e,i+2.6,t+3.7)),n}function G2(){const n=new O;n.name="h2-dryer";const e=-38,t=28,i=I(e,t);return n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t)),n.add(d(new p(3.2,2,2.4),c.habDark,e-2.2,i+1.2,t)),n.add(d(new N(.95,.95,3.4,14),c.steelDark,e+2,i+1.9,t)),n.add(d(new N(.35,.35,2.2,8),c.pipe,e+2,i+4,t)),n.add(b("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.15,t+3.7)),n.add(b("H2 DRYER","#1a100c","#d6b48a",3,.36,e,i+2.7,t+3.7)),n}function V2(){const n=new O;n.name="ice-melt-3";const e=-46,t=-132,i=I(e,t);return n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t)),n.add(d(new p(3.6,2.8,3.2),c.habDark,e-1.8,i+1.6,t)),n.add(d(new N(1.45,1.45,4.2,14),c.pipe,e+2.2,i+2.3,t)),n.add(d(new N(.55,.85,1.6,10),c.steelDark,e+2.2,i+4.9,t)),n.add(b("SPARE","#1a2830","#d6e6ef",2.2,.5,e,i+4.4,t+3.7)),n.add(b("MELT","#1a2830","#d6b48a",2,.42,e,i+3.85,t+3.7)),se(n,[[-46,-132],[-58,-142],[-58,-150]],c.pipe,.1),n}function W2(){const n=new O;n.name="gh-dust-filter-2";const e=24,t=-118,i=I(e,t);return n.add(d(new p(9.2,.18,5.6),c.concrete,e,i+.09,t)),n.add(d(new p(3.8,2.6,2.4),c.habDark,e-1.6,i+1.5,t)),n.add(d(new N(.95,.95,3.2,12),c.steelDark,e+2.4,i+1.8,t)),n.add(d(new p(.12,2.2,2),c.lattice,e+3.5,i+1.4,t)),n.add(b("SPARE","#1a100c","#f0c089",2.2,.45,e,i+3.55,t+2.9)),n.add(b("FILTER","#1a100c","#d6b48a",2.6,.4,e,i+3.05,t+2.9)),se(n,[[24,-118],[30,-112],[38,-104]],c.pipe,.1),n}function X2(){const n=new O;n.name="spare-ice-haul";const e=-110,t=-136,i=I(e,t);return n.add(d(new p(12.4,.16,6.4),c.concrete,e,i+.08,t)),n.add(on(e,t,-.25,{kind:"ice"})),n.add(b("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+3.4,t+3.4)),n.add(b("HAUL","#1a2830","#d6b48a",2,.36,e,i+2.95,t+3.4)),n}function q2(){const n=new O;n.name="hab-coupler";const e=-22,t=-110,i=I(e,t);return n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t)),n.add(d(new N(1.35,1.35,6.4,16),c.habDark,e,i+1.7,t,0,0,Math.PI/2)),n.add(d(new Ne(1.4,.16,8,16),c.steel,e-3.2,i+1.7,t,0,0,Math.PI/2)),n.add(d(new Ne(1.4,.16,8,16),c.steel,e+3.2,i+1.7,t,0,0,Math.PI/2)),n.add(b("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.55,t+3.7)),n.add(b("TUBE","#1a100c","#d6b48a",2,.36,e,i+3.1,t+3.7)),n}function Y2(){const n=new O;n.name="field4-night";const e=158,t=-48,i=I(e,t);n.add(d(new p(12,.2,7.2),c.concrete,e,i+.1,t));for(let a=0;a<5;a++)n.add(d(new p(1.7,2,4.2),c.battery,e-4+a*2,i+1.2,t));return n.add(b("NIGHT","#111111","#f4e6c8",2.2,.5,e,i+2.7,t+3.6)),n.add(b("FIELD 4","#111111","#d6b48a",2.4,.42,e,i+2.15,t+3.6)),se(n,[[172,-62],[166,-54],[158,-48]],c.cable,.1),n}function K2(){const n=new O;n.name="workshop-air";const e=110,t=-90,i=I(e,t);return n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t)),n.add(d(new p(3.2,2.2,2.6),c.habDark,e-2.2,i+1.3,t)),n.add(d(new N(1.15,1.15,3.4,16),c.steelDark,e+2,i+1.9,t)),n.add(d(new p(1.6,1.1,1.4),c.steel,e+2,i+.75,t+2)),n.add(d(new p(.22,1.6,.22),c.steel,e+3.4,i+1,t-1.6)),n.add(b("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.05,t+3.7)),n.add(b("AIR","#1a100c","#d6b48a",1.8,.36,e,i+3.6,t+3.7)),n}function J2(){const n=new O;n.name="hab-amine";const e=8,t=-110,i=I(e,t);return n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t)),n.add(d(new p(3.2,2.2,2.6),c.habDark,e-2.4,i+1.3,t)),n.add(d(new N(.9,.9,3.6,14),c.steelDark,e+1.4,i+2,t)),n.add(d(new N(.9,.9,3.6,14),c.steelDark,e+3.4,i+2,t)),n.add(b("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.15,t+3.7)),n.add(b("AMINE","#1a100c","#d6b48a",2.4,.36,e,i+3.7,t+3.7)),se(n,[[8,-98],[8,-104],[8,-110]],c.pipe,.1),n}function Z2(){const n=new O;n.name="ice-drill-1";const e=-70,t=-148,i=I(e,t);return n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t)),n.add(d(new p(3.4,1.8,2.4),c.habDark,e-2.2,i+1.1,t)),n.add(d(new N(.28,.42,6.4,10),c.steel,e+2.2,i+3.4,t)),n.add(d(new ii(.55,1.4,8),c.soot,e+2.2,i+.85,t)),n.add(d(new p(1.6,1.2,1.4),c.steelDark,e+2.2,i+6.5,t)),n.add(b("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+2.55,t+3.7)),n.add(b("DRILL","#1a2830","#d6b48a",2.2,.36,e,i+2.1,t+3.7)),n}function $2(){const n=new O;n.name="farm1-lights";for(const[a,s]of[[82,-28],[82,-44],[96,-44]]){const r=I(a,s);n.add(d(new N(.12,.16,3.6,8),c.steelDark,a,r+1.9,s)),n.add(d(new p(.42,.42,.42),c.glowPad,a,r+3.85,s))}const e=96,t=-28,i=I(e,t);return n.add(d(new p(5.2,.16,4),c.concrete,e,i+.08,t)),n.add(d(new p(2.4,1.5,1.6),c.habDark,e,i+.95,t)),n.add(b("FARM 1","#1a100c","#f0c089",2.4,.42,e,i+2.25,t+2.1)),n.add(b("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function j2(){const n=new O;n.name="field2-lights";for(const[a,s]of[[100,-70],[112,-83],[124,-70]]){const r=I(a,s);n.add(d(new N(.12,.16,3.6,8),c.steelDark,a,r+1.9,s)),n.add(d(new p(.42,.42,.42),c.glowPad,a,r+3.85,s))}const e=124,t=-83,i=I(e,t);return n.add(d(new p(5.2,.16,4),c.concrete,e,i+.08,t)),n.add(d(new p(2.4,1.5,1.6),c.habDark,e,i+.95,t)),n.add(b("FIELD 2","#1a100c","#f0c089",2.6,.42,e,i+2.25,t+2.1)),n.add(b("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function Q2(){const n=new O;n.name="field3-lights";for(const[a,s]of[[135,-22],[135,-40],[148,-40]]){const r=I(a,s);n.add(d(new N(.12,.16,3.6,8),c.steelDark,a,r+1.9,s)),n.add(d(new p(.42,.42,.42),c.glowPad,a,r+3.85,s))}const e=148,t=-22,i=I(e,t);return n.add(d(new p(5.2,.16,4),c.concrete,e,i+.08,t)),n.add(d(new p(2.4,1.5,1.6),c.habDark,e,i+.95,t)),n.add(b("FIELD 3","#1a100c","#f0c089",2.6,.42,e,i+2.25,t+2.1)),n.add(b("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function eg(){const n=new O;n.name="spare-potable-uv";const e=46,t=-152,i=I(e,t);return n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t)),n.add(d(new p(4.2,2.6,3.4),c.habDark,e-1.6,i+1.5,t)),n.add(d(new N(1.05,1.05,3.4,14),c.pipe,e+2.6,i+1.9,t)),n.add(d(new p(1.6,1.4,1.2),c.steel,e+2.6,i+3.9,t)),n.add(b("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+4.15,t+3.7)),n.add(b("UV","#1a2830","#d6b48a",1.6,.36,e,i+3.7,t+3.7)),se(n,[[32,-152],[38,-152],[46,-152]],c.pipe,.1),n}function tg(){const n=new O;n.name="pad2-bricks";const e=32,t=136,i=I(e,t);n.add(d(new p(7.6,.16,5.4),c.concrete,e,i+.08,t));for(let a=0;a<3;a++)for(let s=0;s<4;s++){const r=e-2.4+s*1.55,o=t-1.2+a*1.2;n.add(d(new p(1.35,.42,.95),c.rust,r,i+.38,o)),n.add(d(new p(1.35,.42,.95),c.habDark,r,i+.82,o))}return n.add(b("PAD 2","#1a100c","#f0c089",2.2,.42,e,i+1.85,t+2.8)),n.add(b("BRICK","#1a100c","#d6b48a",2.2,.36,e,i+1.4,t+2.8)),n}function ng(){const n=new O;n.name="hab-regulator";const e=-8,t=-110,i=I(e,t);return n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t)),n.add(d(new p(3.4,2.2,2.6),c.habDark,e-2.2,i+1.3,t)),n.add(d(new N(.95,.95,2.8,14),c.steelDark,e+2,i+1.6,t)),n.add(d(new N(.55,.55,1.6,12),c.steel,e+3.4,i+1,t+1.4)),n.add(d(new p(1.4,1.1,1.2),c.steel,e+2,i+.75,t+2)),n.add(b("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.35,t+3.7)),n.add(b("REG","#1a100c","#d6b48a",1.8,.36,e,i+2.9,t+3.7)),se(n,[[-8,-98],[-8,-104],[-8,-110]],c.pipe,.1),n}function ig(){const n=new O;n.name="workshop-hoist";const e=110,t=-104,i=I(e,t);return n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t)),n.add(d(new p(2.8,2,2.4),c.habDark,e-2.4,i+1.2,t)),n.add(d(new p(.28,5.2,.28),c.steelDark,e+1.6,i+2.8,t)),n.add(d(new p(4.2,.22,.22),c.steel,e+3.4,i+5.3,t)),n.add(d(new p(.16,1.6,.16),c.steel,e+5.2,i+4.4,t)),n.add(d(new p(.7,.5,.5),c.steelDark,e+5.2,i+3.5,t)),n.add(b("SPARE","#1a100c","#f0c089",2.2,.42,e,i+2.85,t+3.7)),n.add(b("HOIST","#1a100c","#d6b48a",2.2,.36,e,i+2.4,t+3.7)),n}function ag(){const n=new O;n.name="farm1-inverter";const e=70,t=-28,i=I(e,t);n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t)),n.add(d(new p(3.6,2.4,2.8),c.habDark,e-2,i+1.4,t)),n.add(d(new p(3.2,2,2.4),c.steelDark,e+2.2,i+1.2,t));for(let a=0;a<3;a++)n.add(d(new p(.7,1.5,1.8),c.battery,e+1.2+a*.85,i+1,t));return n.add(b("FARM 1","#111111","#f4e6c8",2.6,.5,e,i+3.55,t+3.7)),n.add(b("INVERTER","#111111","#d6b48a",3.2,.42,e,i+3,t+3.7)),se(n,[[82,-28],[76,-28],[70,-28]],c.cable,.1),n}function sg(){const n=new O;n.name="field2-inverter";const e=136,t=-70,i=I(e,t);n.add(d(new p(9.6,.2,7.2),c.concrete,e,i+.1,t)),n.add(d(new p(3.6,2.4,2.8),c.habDark,e-2,i+1.4,t)),n.add(d(new p(3.2,2,2.4),c.steelDark,e+2.2,i+1.2,t));for(let a=0;a<3;a++)n.add(d(new p(.7,1.5,1.8),c.battery,e+1.2+a*.85,i+1,t));return n.add(b("FIELD 2","#111111","#f4e6c8",2.8,.5,e,i+3.55,t+3.7)),n.add(b("INVERTER","#111111","#d6b48a",3.2,.42,e,i+3,t+3.7)),se(n,[[124,-70],[130,-70],[136,-70]],c.cable,.1),n}const sc=new M(.55,.62,.38);function og(){const n=new up;jp(n),n.add(Kp(sc)),n.add(Jp(sc)),n.add(Wp()),n.add(Xp()),n.add(Zp());const e=$p();n.add(e);const t=e1();return n.add(t.group),{scene:n,dust:e,settlement:t,getHeight:I}}function cg(n){const e=new hp({canvas:n,antialias:!0,powerPreference:"high-performance"});return e.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),e.setSize(window.innerWidth,window.innerHeight),e.shadowMap.enabled=!0,e.shadowMap.type=oc,e.outputColorSpace=Ft,e.toneMapping=lc,e.toneMappingExposure=1.05,e}function lg(n,e){window.addEventListener("resize",()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)})}export{ki as C,Qt as P,M as V,cg as a,lg as b,og as c,rg as d};
