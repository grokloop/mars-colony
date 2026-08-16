(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pr="170",Qc=0,Kr=1,el=2,rc=1,oc=2,Mn=3,Fn=0,It=1,ln=2,Nn=0,bi=1,Jr=2,Zr=3,$r=4,tl=5,Zn=100,nl=101,il=102,al=103,sl=104,rl=200,ol=201,cl=202,ll=203,Hs=204,Gs=205,dl=206,hl=207,ul=208,fl=209,pl=210,ml=211,gl=212,xl=213,_l=214,Vs=0,Ws=1,Xs=2,Ai=3,qs=4,Ys=5,Ks=6,Js=7,cc=0,vl=1,Ml=2,On=0,wl=1,yl=2,Sl=3,lc=4,bl=5,El=6,Tl=7,dc=300,Ri=301,Ci=302,Zs=303,$s=304,ts=306,js=1e3,jn=1001,Qs=1002,Vt=1003,Al=1004,xa=1005,dn=1006,os=1007,Qn=1008,Sn=1009,hc=1010,uc=1011,ia=1012,Dr=1013,ei=1014,hn=1015,sa=1016,Ir=1017,Lr=1018,Pi=1020,fc=35902,pc=1021,mc=1022,tn=1023,gc=1024,xc=1025,Ei=1026,Di=1027,Ur=1028,zr=1029,_c=1030,Nr=1031,Or=1033,Wa=33776,Xa=33777,qa=33778,Ya=33779,er=35840,tr=35841,nr=35842,ir=35843,ar=36196,sr=37492,rr=37496,or=37808,cr=37809,lr=37810,dr=37811,hr=37812,ur=37813,fr=37814,pr=37815,mr=37816,gr=37817,xr=37818,_r=37819,vr=37820,Mr=37821,Ka=36492,wr=36494,yr=36495,vc=36283,Sr=36284,br=36285,Er=36286,Rl=3200,Cl=3201,Mc=0,Pl=1,zn="",Ot="srgb",Li="srgb-linear",ns="linear",rt="srgb",ri=7680,jr=519,Dl=512,Il=513,Ll=514,wc=515,Ul=516,zl=517,Nl=518,Ol=519,Qr=35044,eo="300 es",wn=2e3,$a=2001;class Ui{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const s=a.indexOf(t);s!==-1&&a.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cs=Math.PI/180,Tr=180/Math.PI;function ra(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]).toLowerCase()}function Rt(n,e,t){return Math.max(e,Math.min(t,n))}function Fl(n,e){return(n%e+e)%e}function ls(n,e,t){return(1-t)*n+t*e}function Wi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Nt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ce{constructor(e=0,t=0){Ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*i-r*a+e.x,this.y=s*a+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,a,s,r,o,h,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,r,o,h,c)}set(e,t,i,a,s,r,o,h,c){const d=this.elements;return d[0]=e,d[1]=a,d[2]=o,d[3]=t,d[4]=s,d[5]=h,d[6]=i,d[7]=r,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,s=this.elements,r=i[0],o=i[3],h=i[6],c=i[1],d=i[4],p=i[7],f=i[2],m=i[5],v=i[8],M=a[0],_=a[3],g=a[6],C=a[1],R=a[4],S=a[7],k=a[2],D=a[5],L=a[8];return s[0]=r*M+o*C+h*k,s[3]=r*_+o*R+h*D,s[6]=r*g+o*S+h*L,s[1]=c*M+d*C+p*k,s[4]=c*_+d*R+p*D,s[7]=c*g+d*S+p*L,s[2]=f*M+m*C+v*k,s[5]=f*_+m*R+v*D,s[8]=f*g+m*S+v*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],h=e[6],c=e[7],d=e[8];return t*r*d-t*o*c-i*s*d+i*o*h+a*s*c-a*r*h}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],h=e[6],c=e[7],d=e[8],p=d*r-o*c,f=o*h-d*s,m=c*s-r*h,v=t*p+i*f+a*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return e[0]=p*M,e[1]=(a*c-d*i)*M,e[2]=(o*i-a*r)*M,e[3]=f*M,e[4]=(d*t-a*h)*M,e[5]=(a*s-o*t)*M,e[6]=m*M,e[7]=(i*h-c*t)*M,e[8]=(r*t-i*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,s,r,o){const h=Math.cos(s),c=Math.sin(s);return this.set(i*h,i*c,-i*(h*r+c*o)+r+e,-a*c,a*h,-a*(-c*r+h*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ds.makeScale(e,t)),this}rotate(e){return this.premultiply(ds.makeRotation(-e)),this}translate(e,t){return this.premultiply(ds.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ds=new Ge;function yc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ja(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Bl(){const n=ja("canvas");return n.style.display="block",n}const to={};function Qi(n){n in to||(to[n]=!0,console.warn(n))}function kl(n,e,t){return new Promise(function(i,a){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:a();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Hl(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Gl(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Qe={enabled:!0,workingColorSpace:Li,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===rt&&(n.r=yn(n.r),n.g=yn(n.g),n.b=yn(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===rt&&(n.r=Ti(n.r),n.g=Ti(n.g),n.b=Ti(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===zn?ns:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function yn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ti(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const no=[.64,.33,.3,.6,.15,.06],io=[.2126,.7152,.0722],ao=[.3127,.329],so=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ro=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qe.define({[Li]:{primaries:no,whitePoint:ao,transfer:ns,toXYZ:so,fromXYZ:ro,luminanceCoefficients:io,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:no,whitePoint:ao,transfer:rt,toXYZ:so,fromXYZ:ro,luminanceCoefficients:io,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}});let oi;class Vl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{oi===void 0&&(oi=ja("canvas")),oi.width=e.width,oi.height=e.height;const i=oi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=oi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ja("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=yn(s[r]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(yn(t[i]/255)*255):t[i]=yn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wl=0;class Sc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wl++}),this.uuid=ra(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(hs(a[r].image)):s.push(hs(a[r]))}else s=hs(a);i.url=s}return t||(e.images[this.uuid]=i),i}}function hs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Vl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xl=0;class Ct extends Ui{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,i=jn,a=jn,s=dn,r=Qn,o=tn,h=Sn,c=Ct.DEFAULT_ANISOTROPY,d=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xl++}),this.uuid=ra(),this.name="",this.source=new Sc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=h,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case js:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case Qs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case js:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case Qs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=dc;Ct.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,i=0,a=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*t+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*t+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*t+r[7]*i+r[11]*a+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,s;const h=e.elements,c=h[0],d=h[4],p=h[8],f=h[1],m=h[5],v=h[9],M=h[2],_=h[6],g=h[10];if(Math.abs(d-f)<.01&&Math.abs(p-M)<.01&&Math.abs(v-_)<.01){if(Math.abs(d+f)<.1&&Math.abs(p+M)<.1&&Math.abs(v+_)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(c+1)/2,S=(m+1)/2,k=(g+1)/2,D=(d+f)/4,L=(p+M)/4,z=(v+_)/4;return R>S&&R>k?R<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(R),a=D/i,s=L/i):S>k?S<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(S),i=D/a,s=z/a):k<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(k),i=L/s,a=z/s),this.set(i,a,s,t),this}let C=Math.sqrt((_-v)*(_-v)+(p-M)*(p-M)+(f-d)*(f-d));return Math.abs(C)<.001&&(C=1),this.x=(_-v)/C,this.y=(p-M)/C,this.z=(f-d)/C,this.w=Math.acos((c+m+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ql extends Ui{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const a={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ct(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,a=e.textures.length;i<a;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Sc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends ql{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class bc extends Ct{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yl extends Ct{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oa{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,s,r,o){let h=i[a+0],c=i[a+1],d=i[a+2],p=i[a+3];const f=s[r+0],m=s[r+1],v=s[r+2],M=s[r+3];if(o===0){e[t+0]=h,e[t+1]=c,e[t+2]=d,e[t+3]=p;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=v,e[t+3]=M;return}if(p!==M||h!==f||c!==m||d!==v){let _=1-o;const g=h*f+c*m+d*v+p*M,C=g>=0?1:-1,R=1-g*g;if(R>Number.EPSILON){const k=Math.sqrt(R),D=Math.atan2(k,g*C);_=Math.sin(_*D)/k,o=Math.sin(o*D)/k}const S=o*C;if(h=h*_+f*S,c=c*_+m*S,d=d*_+v*S,p=p*_+M*S,_===1-o){const k=1/Math.sqrt(h*h+c*c+d*d+p*p);h*=k,c*=k,d*=k,p*=k}}e[t]=h,e[t+1]=c,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,a,s,r){const o=i[a],h=i[a+1],c=i[a+2],d=i[a+3],p=s[r],f=s[r+1],m=s[r+2],v=s[r+3];return e[t]=o*v+d*p+h*m-c*f,e[t+1]=h*v+d*f+c*p-o*m,e[t+2]=c*v+d*m+o*f-h*p,e[t+3]=d*v-o*p-h*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,s=e._z,r=e._order,o=Math.cos,h=Math.sin,c=o(i/2),d=o(a/2),p=o(s/2),f=h(i/2),m=h(a/2),v=h(s/2);switch(r){case"XYZ":this._x=f*d*p+c*m*v,this._y=c*m*p-f*d*v,this._z=c*d*v+f*m*p,this._w=c*d*p-f*m*v;break;case"YXZ":this._x=f*d*p+c*m*v,this._y=c*m*p-f*d*v,this._z=c*d*v-f*m*p,this._w=c*d*p+f*m*v;break;case"ZXY":this._x=f*d*p-c*m*v,this._y=c*m*p+f*d*v,this._z=c*d*v+f*m*p,this._w=c*d*p-f*m*v;break;case"ZYX":this._x=f*d*p-c*m*v,this._y=c*m*p+f*d*v,this._z=c*d*v-f*m*p,this._w=c*d*p+f*m*v;break;case"YZX":this._x=f*d*p+c*m*v,this._y=c*m*p+f*d*v,this._z=c*d*v-f*m*p,this._w=c*d*p-f*m*v;break;case"XZY":this._x=f*d*p-c*m*v,this._y=c*m*p-f*d*v,this._z=c*d*v+f*m*p,this._w=c*d*p+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],s=t[8],r=t[1],o=t[5],h=t[9],c=t[2],d=t[6],p=t[10],f=i+o+p;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-h)*m,this._y=(s-c)*m,this._z=(r-a)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(d-h)/m,this._x=.25*m,this._y=(a+r)/m,this._z=(s+c)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(s-c)/m,this._x=(a+r)/m,this._y=.25*m,this._z=(h+d)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(r-a)/m,this._x=(s+c)/m,this._y=(h+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,s=e._z,r=e._w,o=t._x,h=t._y,c=t._z,d=t._w;return this._x=i*d+r*o+a*c-s*h,this._y=a*d+r*h+s*o-i*c,this._z=s*d+r*c+i*h-a*o,this._w=r*d-i*o-a*h-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,a=this._y,s=this._z,r=this._w;let o=r*e._w+i*e._x+a*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=i,this._y=a,this._z=s,this;const h=1-o*o;if(h<=Number.EPSILON){const m=1-t;return this._w=m*r+t*this._w,this._x=m*i+t*this._x,this._y=m*a+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(h),d=Math.atan2(c,o),p=Math.sin((1-t)*d)/c,f=Math.sin(t*d)/c;return this._w=r*p+this._w*f,this._x=i*p+this._x*f,this._y=a*p+this._y*f,this._z=s*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class y{constructor(e=0,t=0,i=0){y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(oo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(oo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*a,this.y=s[1]*t+s[4]*i+s[7]*a,this.z=s[2]*t+s[5]*i+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,s=e.elements,r=1/(s[3]*t+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*t+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*t+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,s=e.x,r=e.y,o=e.z,h=e.w,c=2*(r*a-o*i),d=2*(o*t-s*a),p=2*(s*i-r*t);return this.x=t+h*c+r*p-o*d,this.y=i+h*d+o*c-s*p,this.z=a+h*p+s*d-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*a,this.y=s[1]*t+s[5]*i+s[9]*a,this.z=s[2]*t+s[6]*i+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,s=e.z,r=t.x,o=t.y,h=t.z;return this.x=a*h-s*o,this.y=s*r-i*h,this.z=i*o-a*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return us.copy(this).projectOnVector(e),this.sub(us)}reflect(e){return this.sub(us.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const us=new y,oo=new oa;class ni{constructor(e=new y(1/0,1/0,1/0),t=new y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Jt):Jt.fromBufferAttribute(s,r),Jt.applyMatrix4(e.matrixWorld),this.expandByPoint(Jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_a.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_a.copy(i.boundingBox)),_a.applyMatrix4(e.matrixWorld),this.union(_a)}const a=e.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xi),va.subVectors(this.max,Xi),ci.subVectors(e.a,Xi),li.subVectors(e.b,Xi),di.subVectors(e.c,Xi),An.subVectors(li,ci),Rn.subVectors(di,li),Hn.subVectors(ci,di);let t=[0,-An.z,An.y,0,-Rn.z,Rn.y,0,-Hn.z,Hn.y,An.z,0,-An.x,Rn.z,0,-Rn.x,Hn.z,0,-Hn.x,-An.y,An.x,0,-Rn.y,Rn.x,0,-Hn.y,Hn.x,0];return!fs(t,ci,li,di,va)||(t=[1,0,0,0,1,0,0,0,1],!fs(t,ci,li,di,va))?!1:(Ma.crossVectors(An,Rn),t=[Ma.x,Ma.y,Ma.z],fs(t,ci,li,di,va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mn=[new y,new y,new y,new y,new y,new y,new y,new y],Jt=new y,_a=new ni,ci=new y,li=new y,di=new y,An=new y,Rn=new y,Hn=new y,Xi=new y,va=new y,Ma=new y,Gn=new y;function fs(n,e,t,i,a){for(let s=0,r=n.length-3;s<=r;s+=3){Gn.fromArray(n,s);const o=a.x*Math.abs(Gn.x)+a.y*Math.abs(Gn.y)+a.z*Math.abs(Gn.z),h=e.dot(Gn),c=t.dot(Gn),d=i.dot(Gn);if(Math.max(-Math.max(h,c,d),Math.min(h,c,d))>o)return!1}return!0}const Kl=new ni,qi=new y,ps=new y;class zi{constructor(e=new y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Kl.setFromPoints(e).getCenter(i);let a=0;for(let s=0,r=e.length;s<r;s++)a=Math.max(a,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qi.subVectors(e,this.center);const t=qi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(qi,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ps.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qi.copy(e.center).add(ps)),this.expandByPoint(qi.copy(e.center).sub(ps))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gn=new y,ms=new y,wa=new y,Cn=new y,gs=new y,ya=new y,xs=new y;class Ec{constructor(e=new y,t=new y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gn.copy(this.origin).addScaledVector(this.direction,t),gn.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){ms.copy(e).add(t).multiplyScalar(.5),wa.copy(t).sub(e).normalize(),Cn.copy(this.origin).sub(ms);const s=e.distanceTo(t)*.5,r=-this.direction.dot(wa),o=Cn.dot(this.direction),h=-Cn.dot(wa),c=Cn.lengthSq(),d=Math.abs(1-r*r);let p,f,m,v;if(d>0)if(p=r*h-o,f=r*o-h,v=s*d,p>=0)if(f>=-v)if(f<=v){const M=1/d;p*=M,f*=M,m=p*(p+r*f+2*o)+f*(r*p+f+2*h)+c}else f=s,p=Math.max(0,-(r*f+o)),m=-p*p+f*(f+2*h)+c;else f=-s,p=Math.max(0,-(r*f+o)),m=-p*p+f*(f+2*h)+c;else f<=-v?(p=Math.max(0,-(-r*s+o)),f=p>0?-s:Math.min(Math.max(-s,-h),s),m=-p*p+f*(f+2*h)+c):f<=v?(p=0,f=Math.min(Math.max(-s,-h),s),m=f*(f+2*h)+c):(p=Math.max(0,-(r*s+o)),f=p>0?s:Math.min(Math.max(-s,-h),s),m=-p*p+f*(f+2*h)+c);else f=r>0?-s:s,p=Math.max(0,-(r*f+o)),m=-p*p+f*(f+2*h)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),a&&a.copy(ms).addScaledVector(wa,f),m}intersectSphere(e,t){gn.subVectors(e.center,this.origin);const i=gn.dot(this.direction),a=gn.dot(gn)-i*i,s=e.radius*e.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=i-r,h=i+r;return h<0?null:o<0?this.at(h,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,s,r,o,h;const c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,a=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,a=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,r=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,r=(e.min.y-f.y)*d),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),p>=0?(o=(e.min.z-f.z)*p,h=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,h=(e.min.z-f.z)*p),i>h||o>a)||((o>i||i!==i)&&(i=o),(h<a||a!==a)&&(a=h),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,gn)!==null}intersectTriangle(e,t,i,a,s){gs.subVectors(t,e),ya.subVectors(i,e),xs.crossVectors(gs,ya);let r=this.direction.dot(xs),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Cn.subVectors(this.origin,e);const h=o*this.direction.dot(ya.crossVectors(Cn,ya));if(h<0)return null;const c=o*this.direction.dot(gs.cross(Cn));if(c<0||h+c>r)return null;const d=-o*Cn.dot(xs);return d<0?null:this.at(d/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,i,a,s,r,o,h,c,d,p,f,m,v,M,_){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,r,o,h,c,d,p,f,m,v,M,_)}set(e,t,i,a,s,r,o,h,c,d,p,f,m,v,M,_){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=a,g[1]=s,g[5]=r,g[9]=o,g[13]=h,g[2]=c,g[6]=d,g[10]=p,g[14]=f,g[3]=m,g[7]=v,g[11]=M,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,a=1/hi.setFromMatrixColumn(e,0).length(),s=1/hi.setFromMatrixColumn(e,1).length(),r=1/hi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,s=e.z,r=Math.cos(i),o=Math.sin(i),h=Math.cos(a),c=Math.sin(a),d=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const f=r*d,m=r*p,v=o*d,M=o*p;t[0]=h*d,t[4]=-h*p,t[8]=c,t[1]=m+v*c,t[5]=f-M*c,t[9]=-o*h,t[2]=M-f*c,t[6]=v+m*c,t[10]=r*h}else if(e.order==="YXZ"){const f=h*d,m=h*p,v=c*d,M=c*p;t[0]=f+M*o,t[4]=v*o-m,t[8]=r*c,t[1]=r*p,t[5]=r*d,t[9]=-o,t[2]=m*o-v,t[6]=M+f*o,t[10]=r*h}else if(e.order==="ZXY"){const f=h*d,m=h*p,v=c*d,M=c*p;t[0]=f-M*o,t[4]=-r*p,t[8]=v+m*o,t[1]=m+v*o,t[5]=r*d,t[9]=M-f*o,t[2]=-r*c,t[6]=o,t[10]=r*h}else if(e.order==="ZYX"){const f=r*d,m=r*p,v=o*d,M=o*p;t[0]=h*d,t[4]=v*c-m,t[8]=f*c+M,t[1]=h*p,t[5]=M*c+f,t[9]=m*c-v,t[2]=-c,t[6]=o*h,t[10]=r*h}else if(e.order==="YZX"){const f=r*h,m=r*c,v=o*h,M=o*c;t[0]=h*d,t[4]=M-f*p,t[8]=v*p+m,t[1]=p,t[5]=r*d,t[9]=-o*d,t[2]=-c*d,t[6]=m*p+v,t[10]=f-M*p}else if(e.order==="XZY"){const f=r*h,m=r*c,v=o*h,M=o*c;t[0]=h*d,t[4]=-p,t[8]=c*d,t[1]=f*p+M,t[5]=r*d,t[9]=m*p-v,t[2]=v*p-m,t[6]=o*d,t[10]=M*p+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jl,e,Zl)}lookAt(e,t,i){const a=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Pn.crossVectors(i,Ht),Pn.lengthSq()===0&&(Math.abs(i.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Pn.crossVectors(i,Ht)),Pn.normalize(),Sa.crossVectors(Ht,Pn),a[0]=Pn.x,a[4]=Sa.x,a[8]=Ht.x,a[1]=Pn.y,a[5]=Sa.y,a[9]=Ht.y,a[2]=Pn.z,a[6]=Sa.z,a[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,s=this.elements,r=i[0],o=i[4],h=i[8],c=i[12],d=i[1],p=i[5],f=i[9],m=i[13],v=i[2],M=i[6],_=i[10],g=i[14],C=i[3],R=i[7],S=i[11],k=i[15],D=a[0],L=a[4],z=a[8],A=a[12],b=a[1],U=a[5],Y=a[9],q=a[13],Z=a[2],ne=a[6],$=a[10],re=a[14],J=a[3],he=a[7],xe=a[11],Re=a[15];return s[0]=r*D+o*b+h*Z+c*J,s[4]=r*L+o*U+h*ne+c*he,s[8]=r*z+o*Y+h*$+c*xe,s[12]=r*A+o*q+h*re+c*Re,s[1]=d*D+p*b+f*Z+m*J,s[5]=d*L+p*U+f*ne+m*he,s[9]=d*z+p*Y+f*$+m*xe,s[13]=d*A+p*q+f*re+m*Re,s[2]=v*D+M*b+_*Z+g*J,s[6]=v*L+M*U+_*ne+g*he,s[10]=v*z+M*Y+_*$+g*xe,s[14]=v*A+M*q+_*re+g*Re,s[3]=C*D+R*b+S*Z+k*J,s[7]=C*L+R*U+S*ne+k*he,s[11]=C*z+R*Y+S*$+k*xe,s[15]=C*A+R*q+S*re+k*Re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],s=e[12],r=e[1],o=e[5],h=e[9],c=e[13],d=e[2],p=e[6],f=e[10],m=e[14],v=e[3],M=e[7],_=e[11],g=e[15];return v*(+s*h*p-a*c*p-s*o*f+i*c*f+a*o*m-i*h*m)+M*(+t*h*m-t*c*f+s*r*f-a*r*m+a*c*d-s*h*d)+_*(+t*c*p-t*o*m-s*r*p+i*r*m+s*o*d-i*c*d)+g*(-a*o*d-t*h*p+t*o*f+a*r*p-i*r*f+i*h*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],h=e[6],c=e[7],d=e[8],p=e[9],f=e[10],m=e[11],v=e[12],M=e[13],_=e[14],g=e[15],C=p*_*c-M*f*c+M*h*m-o*_*m-p*h*g+o*f*g,R=v*f*c-d*_*c-v*h*m+r*_*m+d*h*g-r*f*g,S=d*M*c-v*p*c+v*o*m-r*M*m-d*o*g+r*p*g,k=v*p*h-d*M*h-v*o*f+r*M*f+d*o*_-r*p*_,D=t*C+i*R+a*S+s*k;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/D;return e[0]=C*L,e[1]=(M*f*s-p*_*s-M*a*m+i*_*m+p*a*g-i*f*g)*L,e[2]=(o*_*s-M*h*s+M*a*c-i*_*c-o*a*g+i*h*g)*L,e[3]=(p*h*s-o*f*s-p*a*c+i*f*c+o*a*m-i*h*m)*L,e[4]=R*L,e[5]=(d*_*s-v*f*s+v*a*m-t*_*m-d*a*g+t*f*g)*L,e[6]=(v*h*s-r*_*s-v*a*c+t*_*c+r*a*g-t*h*g)*L,e[7]=(r*f*s-d*h*s+d*a*c-t*f*c-r*a*m+t*h*m)*L,e[8]=S*L,e[9]=(v*p*s-d*M*s-v*i*m+t*M*m+d*i*g-t*p*g)*L,e[10]=(r*M*s-v*o*s+v*i*c-t*M*c-r*i*g+t*o*g)*L,e[11]=(d*o*s-r*p*s-d*i*c+t*p*c+r*i*m-t*o*m)*L,e[12]=k*L,e[13]=(d*M*a-v*p*a+v*i*f-t*M*f-d*i*_+t*p*_)*L,e[14]=(v*o*a-r*M*a-v*i*h+t*M*h+r*i*_-t*o*_)*L,e[15]=(r*p*a-d*o*a+d*i*h-t*p*h-r*i*f+t*o*f)*L,this}scale(e){const t=this.elements,i=e.x,a=e.y,s=e.z;return t[0]*=i,t[4]*=a,t[8]*=s,t[1]*=i,t[5]*=a,t[9]*=s,t[2]*=i,t[6]*=a,t[10]*=s,t[3]*=i,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),s=1-i,r=e.x,o=e.y,h=e.z,c=s*r,d=s*o;return this.set(c*r+i,c*o-a*h,c*h+a*o,0,c*o+a*h,d*o+i,d*h-a*r,0,c*h-a*o,d*h+a*r,s*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,s,r){return this.set(1,i,s,0,e,1,r,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,s=t._x,r=t._y,o=t._z,h=t._w,c=s+s,d=r+r,p=o+o,f=s*c,m=s*d,v=s*p,M=r*d,_=r*p,g=o*p,C=h*c,R=h*d,S=h*p,k=i.x,D=i.y,L=i.z;return a[0]=(1-(M+g))*k,a[1]=(m+S)*k,a[2]=(v-R)*k,a[3]=0,a[4]=(m-S)*D,a[5]=(1-(f+g))*D,a[6]=(_+C)*D,a[7]=0,a[8]=(v+R)*L,a[9]=(_-C)*L,a[10]=(1-(f+M))*L,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;let s=hi.set(a[0],a[1],a[2]).length();const r=hi.set(a[4],a[5],a[6]).length(),o=hi.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),e.x=a[12],e.y=a[13],e.z=a[14],Zt.copy(this);const c=1/s,d=1/r,p=1/o;return Zt.elements[0]*=c,Zt.elements[1]*=c,Zt.elements[2]*=c,Zt.elements[4]*=d,Zt.elements[5]*=d,Zt.elements[6]*=d,Zt.elements[8]*=p,Zt.elements[9]*=p,Zt.elements[10]*=p,t.setFromRotationMatrix(Zt),i.x=s,i.y=r,i.z=o,this}makePerspective(e,t,i,a,s,r,o=wn){const h=this.elements,c=2*s/(t-e),d=2*s/(i-a),p=(t+e)/(t-e),f=(i+a)/(i-a);let m,v;if(o===wn)m=-(r+s)/(r-s),v=-2*r*s/(r-s);else if(o===$a)m=-r/(r-s),v=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=p,h[12]=0,h[1]=0,h[5]=d,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=m,h[14]=v,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,a,s,r,o=wn){const h=this.elements,c=1/(t-e),d=1/(i-a),p=1/(r-s),f=(t+e)*c,m=(i+a)*d;let v,M;if(o===wn)v=(r+s)*p,M=-2*p;else if(o===$a)v=s*p,M=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=2*c,h[4]=0,h[8]=0,h[12]=-f,h[1]=0,h[5]=2*d,h[9]=0,h[13]=-m,h[2]=0,h[6]=0,h[10]=M,h[14]=-v,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const hi=new y,Zt=new ht,Jl=new y(0,0,0),Zl=new y(1,1,1),Pn=new y,Sa=new y,Ht=new y,co=new ht,lo=new oa;class fn{constructor(e=0,t=0,i=0,a=fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,s=a[0],r=a[4],o=a[8],h=a[1],c=a[5],d=a[9],p=a[2],f=a[6],m=a[10];switch(t){case"XYZ":this._y=Math.asin(Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(h,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(h,s));break;case"ZYX":this._y=Math.asin(-Rt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(h,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Rt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return co.makeRotationFromQuaternion(e),this.setFromRotationMatrix(co,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lo.setFromEuler(this),this.setFromQuaternion(lo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fn.DEFAULT_ORDER="XYZ";class Tc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $l=0;const ho=new y,ui=new oa,xn=new ht,ba=new y,Yi=new y,jl=new y,Ql=new oa,uo=new y(1,0,0),fo=new y(0,1,0),po=new y(0,0,1),mo={type:"added"},ed={type:"removed"},fi={type:"childadded",child:null},_s={type:"childremoved",child:null};class Mt extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$l++}),this.uuid=ra(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new y,t=new fn,i=new oa,a=new y(1,1,1);function s(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ge}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.multiply(ui),this}rotateOnWorldAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.premultiply(ui),this}rotateX(e){return this.rotateOnAxis(uo,e)}rotateY(e){return this.rotateOnAxis(fo,e)}rotateZ(e){return this.rotateOnAxis(po,e)}translateOnAxis(e,t){return ho.copy(e).applyQuaternion(this.quaternion),this.position.add(ho.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uo,e)}translateY(e){return this.translateOnAxis(fo,e)}translateZ(e){return this.translateOnAxis(po,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ba.copy(e):ba.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(Yi,ba,this.up):xn.lookAt(ba,Yi,this.up),this.quaternion.setFromRotationMatrix(xn),a&&(xn.extractRotation(a.matrixWorld),ui.setFromRotationMatrix(xn),this.quaternion.premultiply(ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mo),fi.child=e,this.dispatchEvent(fi),fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ed),_s.child=e,this.dispatchEvent(_s),_s.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mo),fi.child=e,this.dispatchEvent(fi),fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,e,jl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,Ql,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function s(o,h){return o[h.uuid]===void 0&&(o[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const h=o.shapes;if(Array.isArray(h))for(let c=0,d=h.length;c<d;c++){const p=h[c];s(e.shapes,p)}else s(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let h=0,c=this.material.length;h<c;h++)o.push(s(e.materials,this.material[h]));a.material=o}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const h=this.animations[o];a.animations.push(s(e.animations,h))}}if(t){const o=r(e.geometries),h=r(e.materials),c=r(e.textures),d=r(e.images),p=r(e.shapes),f=r(e.skeletons),m=r(e.animations),v=r(e.nodes);o.length>0&&(i.geometries=o),h.length>0&&(i.materials=h),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=a,i;function r(o){const h=[];for(const c in o){const d=o[c];delete d.metadata,h.push(d)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}Mt.DEFAULT_UP=new y(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $t=new y,_n=new y,vs=new y,vn=new y,pi=new y,mi=new y,go=new y,Ms=new y,ws=new y,ys=new y,Ss=new xt,bs=new xt,Es=new xt;class en{constructor(e=new y,t=new y,i=new y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),$t.subVectors(e,t),a.cross($t);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,i,a,s){$t.subVectors(a,t),_n.subVectors(i,t),vs.subVectors(e,t);const r=$t.dot($t),o=$t.dot(_n),h=$t.dot(vs),c=_n.dot(_n),d=_n.dot(vs),p=r*c-o*o;if(p===0)return s.set(0,0,0),null;const f=1/p,m=(c*h-o*d)*f,v=(r*d-o*h)*f;return s.set(1-m-v,v,m)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(e,t,i,a,s,r,o,h){return this.getBarycoord(e,t,i,a,vn)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(s,vn.x),h.addScaledVector(r,vn.y),h.addScaledVector(o,vn.z),h)}static getInterpolatedAttribute(e,t,i,a,s,r){return Ss.setScalar(0),bs.setScalar(0),Es.setScalar(0),Ss.fromBufferAttribute(e,t),bs.fromBufferAttribute(e,i),Es.fromBufferAttribute(e,a),r.setScalar(0),r.addScaledVector(Ss,s.x),r.addScaledVector(bs,s.y),r.addScaledVector(Es,s.z),r}static isFrontFacing(e,t,i,a){return $t.subVectors(i,t),_n.subVectors(e,t),$t.cross(_n).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),$t.cross(_n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,s){return en.getInterpolation(e,this.a,this.b,this.c,t,i,a,s)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,s=this.c;let r,o;pi.subVectors(a,i),mi.subVectors(s,i),Ms.subVectors(e,i);const h=pi.dot(Ms),c=mi.dot(Ms);if(h<=0&&c<=0)return t.copy(i);ws.subVectors(e,a);const d=pi.dot(ws),p=mi.dot(ws);if(d>=0&&p<=d)return t.copy(a);const f=h*p-d*c;if(f<=0&&h>=0&&d<=0)return r=h/(h-d),t.copy(i).addScaledVector(pi,r);ys.subVectors(e,s);const m=pi.dot(ys),v=mi.dot(ys);if(v>=0&&m<=v)return t.copy(s);const M=m*c-h*v;if(M<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(mi,o);const _=d*v-m*p;if(_<=0&&p-d>=0&&m-v>=0)return go.subVectors(s,a),o=(p-d)/(p-d+(m-v)),t.copy(a).addScaledVector(go,o);const g=1/(_+M+f);return r=M*g,o=f*g,t.copy(i).addScaledVector(pi,r).addScaledVector(mi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ac={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},Ea={h:0,s:0,l:0};function Ts(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class We{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,a=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.toWorkingColorSpace(this,a),this}setHSL(e,t,i,a=Qe.workingColorSpace){if(e=Fl(e,1),t=Rt(t,0,1),i=Rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,r=2*i-s;this.r=Ts(r,s,e+1/3),this.g=Ts(r,s,e),this.b=Ts(r,s,e-1/3)}return Qe.toWorkingColorSpace(this,a),this}setStyle(e,t=Ot){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const i=Ac[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yn(e.r),this.g=yn(e.g),this.b=yn(e.b),this}copyLinearToSRGB(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return Qe.fromWorkingColorSpace(At.copy(this),e),Math.round(Rt(At.r*255,0,255))*65536+Math.round(Rt(At.g*255,0,255))*256+Math.round(Rt(At.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(At.copy(this),t);const i=At.r,a=At.g,s=At.b,r=Math.max(i,a,s),o=Math.min(i,a,s);let h,c;const d=(o+r)/2;if(o===r)h=0,c=0;else{const p=r-o;switch(c=d<=.5?p/(r+o):p/(2-r-o),r){case i:h=(a-s)/p+(a<s?6:0);break;case a:h=(s-i)/p+2;break;case s:h=(i-a)/p+4;break}h/=6}return e.h=h,e.s=c,e.l=d,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=Ot){Qe.fromWorkingColorSpace(At.copy(this),e);const t=At.r,i=At.g,a=At.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(Dn),this.setHSL(Dn.h+e,Dn.s+t,Dn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Dn),e.getHSL(Ea);const i=ls(Dn.h,Ea.h,t),a=ls(Dn.s,Ea.s,t),s=ls(Dn.l,Ea.l,t);return this.setHSL(i,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*a,this.g=s[1]*t+s[4]*i+s[7]*a,this.b=s[2]*t+s[5]*i+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new We;We.NAMES=Ac;let td=0;class Ni extends Ui{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=ra(),this.name="",this.blending=bi,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hs,this.blendDst=Gs,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Ai,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ri,this.stencilZFail=ri,this.stencilZPass=ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(i.blending=this.blending),this.side!==Fn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Hs&&(i.blendSrc=this.blendSrc),this.blendDst!==Gs&&(i.blendDst=this.blendDst),this.blendEquation!==Zn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ai&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jr&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ri&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ri&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ri&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const r=[];for(const o in s){const h=s[o];delete h.metadata,r.push(h)}return r}if(t){const s=a(e.textures),r=a(e.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Fr extends Ni{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new y,Ta=new Ce;class Wt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qr,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ta.fromBufferAttribute(this,t),Ta.applyMatrix3(e),this.setXY(t,Ta.x,Ta.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Wi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),a=Nt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),a=Nt(a,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qr&&(e.usage=this.usage),e}}class Rc extends Wt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Cc extends Wt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ft extends Wt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let nd=0;const qt=new ht,As=new Mt,gi=new y,Gt=new ni,Ki=new ni,bt=new y;class Lt extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=ra(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yc(e)?Cc:Rc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,i){return qt.makeTranslation(e,t,i),this.applyMatrix4(qt),this}scale(e,t,i){return qt.makeScale(e,t,i),this.applyMatrix4(qt),this}lookAt(e){return As.lookAt(e),As.updateMatrix(),this.applyMatrix4(As.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,s=e.length;a<s;a++){const r=e[a];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ft(i,3))}else{for(let i=0,a=t.count;i<a;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new y(-1/0,-1/0,-1/0),new y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const s=t[i];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new y,1/0);return}if(e){const i=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];Ki.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(Gt.min,Ki.min),Gt.expandByPoint(bt),bt.addVectors(Gt.max,Ki.max),Gt.expandByPoint(bt)):(Gt.expandByPoint(Ki.min),Gt.expandByPoint(Ki.max))}Gt.getCenter(i);let a=0;for(let s=0,r=e.count;s<r;s++)bt.fromBufferAttribute(e,s),a=Math.max(a,i.distanceToSquared(bt));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],h=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)bt.fromBufferAttribute(o,c),h&&(gi.fromBufferAttribute(e,c),bt.add(gi)),a=Math.max(a,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),o=[],h=[];for(let z=0;z<i.count;z++)o[z]=new y,h[z]=new y;const c=new y,d=new y,p=new y,f=new Ce,m=new Ce,v=new Ce,M=new y,_=new y;function g(z,A,b){c.fromBufferAttribute(i,z),d.fromBufferAttribute(i,A),p.fromBufferAttribute(i,b),f.fromBufferAttribute(s,z),m.fromBufferAttribute(s,A),v.fromBufferAttribute(s,b),d.sub(c),p.sub(c),m.sub(f),v.sub(f);const U=1/(m.x*v.y-v.x*m.y);isFinite(U)&&(M.copy(d).multiplyScalar(v.y).addScaledVector(p,-m.y).multiplyScalar(U),_.copy(p).multiplyScalar(m.x).addScaledVector(d,-v.x).multiplyScalar(U),o[z].add(M),o[A].add(M),o[b].add(M),h[z].add(_),h[A].add(_),h[b].add(_))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let z=0,A=C.length;z<A;++z){const b=C[z],U=b.start,Y=b.count;for(let q=U,Z=U+Y;q<Z;q+=3)g(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const R=new y,S=new y,k=new y,D=new y;function L(z){k.fromBufferAttribute(a,z),D.copy(k);const A=o[z];R.copy(A),R.sub(k.multiplyScalar(k.dot(A))).normalize(),S.crossVectors(D,A);const U=S.dot(h[z])<0?-1:1;r.setXYZW(z,R.x,R.y,R.z,U)}for(let z=0,A=C.length;z<A;++z){const b=C[z],U=b.start,Y=b.count;for(let q=U,Z=U+Y;q<Z;q+=3)L(e.getX(q+0)),L(e.getX(q+1)),L(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const a=new y,s=new y,r=new y,o=new y,h=new y,c=new y,d=new y,p=new y;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),M=e.getX(f+1),_=e.getX(f+2);a.fromBufferAttribute(t,v),s.fromBufferAttribute(t,M),r.fromBufferAttribute(t,_),d.subVectors(r,s),p.subVectors(a,s),d.cross(p),o.fromBufferAttribute(i,v),h.fromBufferAttribute(i,M),c.fromBufferAttribute(i,_),o.add(d),h.add(d),c.add(d),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(M,h.x,h.y,h.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)a.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),d.subVectors(r,s),p.subVectors(a,s),d.cross(p),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(o,h){const c=o.array,d=o.itemSize,p=o.normalized,f=new c.constructor(h.length*d);let m=0,v=0;for(let M=0,_=h.length;M<_;M++){o.isInterleavedBufferAttribute?m=h[M]*o.data.stride+o.offset:m=h[M]*d;for(let g=0;g<d;g++)f[v++]=c[m++]}return new Wt(f,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,i=this.index.array,a=this.attributes;for(const o in a){const h=a[o],c=e(h,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const h=[],c=s[o];for(let d=0,p=c.length;d<p;d++){const f=c[d],m=e(f,i);h.push(m)}t.morphAttributes[o]=h}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,h=r.length;o<h;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const c in h)h[c]!==void 0&&(e[c]=h[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const h in i){const c=i[h];e.data.attributes[h]=c.toJSON(e.data)}const a={};let s=!1;for(const h in this.morphAttributes){const c=this.morphAttributes[h],d=[];for(let p=0,f=c.length;p<f;p++){const m=c[p];d.push(m.toJSON(e.data))}d.length>0&&(a[h]=d,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const a=e.attributes;for(const c in a){const d=a[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],p=s[c];for(let f=0,m=p.length;f<m;f++)d.push(p[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,d=r.length;c<d;c++){const p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xo=new ht,Vn=new Ec,Aa=new zi,_o=new y,Ra=new y,Ca=new y,Pa=new y,Rs=new y,Da=new y,vo=new y,Ia=new y;class dt extends Mt{constructor(e=new Lt,t=new Fr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(s&&o){Da.set(0,0,0);for(let h=0,c=s.length;h<c;h++){const d=o[h],p=s[h];d!==0&&(Rs.fromBufferAttribute(p,e),r?Da.addScaledVector(Rs,d):Da.addScaledVector(Rs.sub(t),d))}t.add(Da)}return t}raycast(e,t){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Aa.copy(i.boundingSphere),Aa.applyMatrix4(s),Vn.copy(e.ray).recast(e.near),!(Aa.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(Aa,_o)===null||Vn.origin.distanceToSquared(_o)>(e.far-e.near)**2))&&(xo.copy(s).invert(),Vn.copy(e.ray).applyMatrix4(xo),!(i.boundingBox!==null&&Vn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Vn)))}_computeIntersections(e,t,i){let a;const s=this.geometry,r=this.material,o=s.index,h=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,M=f.length;v<M;v++){const _=f[v],g=r[_.materialIndex],C=Math.max(_.start,m.start),R=Math.min(o.count,Math.min(_.start+_.count,m.start+m.count));for(let S=C,k=R;S<k;S+=3){const D=o.getX(S),L=o.getX(S+1),z=o.getX(S+2);a=La(this,g,e,i,c,d,p,D,L,z),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const v=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let _=v,g=M;_<g;_+=3){const C=o.getX(_),R=o.getX(_+1),S=o.getX(_+2);a=La(this,r,e,i,c,d,p,C,R,S),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(r))for(let v=0,M=f.length;v<M;v++){const _=f[v],g=r[_.materialIndex],C=Math.max(_.start,m.start),R=Math.min(h.count,Math.min(_.start+_.count,m.start+m.count));for(let S=C,k=R;S<k;S+=3){const D=S,L=S+1,z=S+2;a=La(this,g,e,i,c,d,p,D,L,z),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const v=Math.max(0,m.start),M=Math.min(h.count,m.start+m.count);for(let _=v,g=M;_<g;_+=3){const C=_,R=_+1,S=_+2;a=La(this,r,e,i,c,d,p,C,R,S),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}}}function id(n,e,t,i,a,s,r,o){let h;if(e.side===It?h=i.intersectTriangle(r,s,a,!0,o):h=i.intersectTriangle(a,s,r,e.side===Fn,o),h===null)return null;Ia.copy(o),Ia.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ia);return c<t.near||c>t.far?null:{distance:c,point:Ia.clone(),object:n}}function La(n,e,t,i,a,s,r,o,h,c){n.getVertexPosition(o,Ra),n.getVertexPosition(h,Ca),n.getVertexPosition(c,Pa);const d=id(n,e,t,i,Ra,Ca,Pa,vo);if(d){const p=new y;en.getBarycoord(vo,Ra,Ca,Pa,p),a&&(d.uv=en.getInterpolatedAttribute(a,o,h,c,p,new Ce)),s&&(d.uv1=en.getInterpolatedAttribute(s,o,h,c,p,new Ce)),r&&(d.normal=en.getInterpolatedAttribute(r,o,h,c,p,new y),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:h,c,normal:new y,materialIndex:0};en.getNormal(Ra,Ca,Pa,f.normal),d.face=f,d.barycoord=p}return d}class x extends Lt{constructor(e=1,t=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const h=[],c=[],d=[],p=[];let f=0,m=0;v("z","y","x",-1,-1,i,t,e,r,s,0),v("z","y","x",1,-1,i,t,-e,r,s,1),v("x","z","y",1,1,e,i,t,a,r,2),v("x","z","y",1,-1,e,i,-t,a,r,3),v("x","y","z",1,-1,e,t,i,a,s,4),v("x","y","z",-1,-1,e,t,-i,a,s,5),this.setIndex(h),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(d,3)),this.setAttribute("uv",new ft(p,2));function v(M,_,g,C,R,S,k,D,L,z,A){const b=S/L,U=k/z,Y=S/2,q=k/2,Z=D/2,ne=L+1,$=z+1;let re=0,J=0;const he=new y;for(let xe=0;xe<$;xe++){const Re=xe*U-q;for(let Xe=0;Xe<ne;Xe++){const it=Xe*b-Y;he[M]=it*C,he[_]=Re*R,he[g]=Z,c.push(he.x,he.y,he.z),he[M]=0,he[_]=0,he[g]=D>0?1:-1,d.push(he.x,he.y,he.z),p.push(Xe/L),p.push(1-xe/z),re+=1}}for(let xe=0;xe<z;xe++)for(let Re=0;Re<L;Re++){const Xe=f+Re+ne*xe,it=f+Re+ne*(xe+1),Q=f+(Re+1)+ne*(xe+1),oe=f+(Re+1)+ne*xe;h.push(Xe,it,oe),h.push(it,Q,oe),J+=6}o.addGroup(m,J,A),m+=J,f+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new x(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ii(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const a=n[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function Dt(n){const e={};for(let t=0;t<n.length;t++){const i=Ii(n[t]);for(const a in i)e[a]=i[a]}return e}function ad(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Pc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const sd={clone:Ii,merge:Dt};var rd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,od=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends Ni{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rd,this.fragmentShader=od,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ii(e.uniforms),this.uniformsGroups=ad(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?t.uniforms[a]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[a]={type:"m4",value:r.toArray()}:t.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Dc extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=wn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const In=new y,Mo=new Ce,wo=new Ce;class Qt extends Dc{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Tr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){In.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(In.x,In.y).multiplyScalar(-e/In.z),In.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(In.x,In.y).multiplyScalar(-e/In.z)}getViewSize(e,t){return this.getViewBounds(e,Mo,wo),t.subVectors(wo,Mo)}setViewOffset(e,t,i,a,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cs*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const h=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/h,t-=r.offsetY*i/c,a*=r.width/h,i*=r.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xi=-90,_i=1;class cd extends Mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Qt(xi,_i,e,t);a.layers=this.layers,this.add(a);const s=new Qt(xi,_i,e,t);s.layers=this.layers,this.add(s);const r=new Qt(xi,_i,e,t);r.layers=this.layers,this.add(r);const o=new Qt(xi,_i,e,t);o.layers=this.layers,this.add(o);const h=new Qt(xi,_i,e,t);h.layers=this.layers,this.add(h);const c=new Qt(xi,_i,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,s,r,o,h]=t;for(const c of t)this.remove(c);if(e===wn)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===$a)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,h,c,d]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,s),e.setRenderTarget(i,1,a),e.render(t,r),e.setRenderTarget(i,2,a),e.render(t,o),e.setRenderTarget(i,3,a),e.render(t,h),e.setRenderTarget(i,4,a),e.render(t,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,a),e.render(t,d),e.setRenderTarget(p,f,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Ic extends Ct{constructor(e,t,i,a,s,r,o,h,c,d){e=e!==void 0?e:[],t=t!==void 0?t:Ri,super(e,t,i,a,s,r,o,h,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ld extends ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new Ic(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new x(5,5,5),s=new bn({name:"CubemapFromEquirect",uniforms:Ii(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:It,blending:Nn});s.uniforms.tEquirect.value=t;const r=new dt(a,s),o=t.minFilter;return t.minFilter===Qn&&(t.minFilter=dn),new cd(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,i,a){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,a);e.setRenderTarget(s)}}const Cs=new y,dd=new y,hd=new Ge;class Yn{constructor(e=new y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=Cs.subVectors(i,t).cross(dd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Cs),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||hd.getNormalMatrix(e),a=this.coplanarPoint(Cs).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wn=new zi,Ua=new y;class Br{constructor(e=new Yn,t=new Yn,i=new Yn,a=new Yn,s=new Yn,r=new Yn){this.planes=[e,t,i,a,s,r]}set(e,t,i,a,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=wn){const i=this.planes,a=e.elements,s=a[0],r=a[1],o=a[2],h=a[3],c=a[4],d=a[5],p=a[6],f=a[7],m=a[8],v=a[9],M=a[10],_=a[11],g=a[12],C=a[13],R=a[14],S=a[15];if(i[0].setComponents(h-s,f-c,_-m,S-g).normalize(),i[1].setComponents(h+s,f+c,_+m,S+g).normalize(),i[2].setComponents(h+r,f+d,_+v,S+C).normalize(),i[3].setComponents(h-r,f-d,_-v,S-C).normalize(),i[4].setComponents(h-o,f-p,_-M,S-R).normalize(),t===wn)i[5].setComponents(h+o,f+p,_+M,S+R).normalize();else if(t===$a)i[5].setComponents(o,p,M,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(e){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(Ua.x=a.normal.x>0?e.max.x:e.min.x,Ua.y=a.normal.y>0?e.max.y:e.min.y,Ua.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Ua)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Lc(){let n=null,e=!1,t=null,i=null;function a(s,r){t(s,r),i=n.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(a),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function ud(n){const e=new WeakMap;function t(o,h){const c=o.array,d=o.usage,p=c.byteLength,f=n.createBuffer();n.bindBuffer(h,f),n.bufferData(h,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,h,c){const d=h.array,p=h.updateRanges;if(n.bindBuffer(c,o),p.length===0)n.bufferSubData(c,0,d);else{p.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<p.length;m++){const v=p[f],M=p[m];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++f,p[f]=M)}p.length=f+1;for(let m=0,v=p.length;m<v;m++){const M=p[m];n.bufferSubData(c,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const h=e.get(o);h&&(n.deleteBuffer(h.buffer),e.delete(o))}function r(o,h){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,h));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,h),c.version=o.version}}return{get:a,remove:s,update:r}}class Oi extends Lt{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const s=e/2,r=t/2,o=Math.floor(i),h=Math.floor(a),c=o+1,d=h+1,p=e/o,f=t/h,m=[],v=[],M=[],_=[];for(let g=0;g<d;g++){const C=g*f-r;for(let R=0;R<c;R++){const S=R*p-s;v.push(S,-C,0),M.push(0,0,1),_.push(R/o),_.push(1-g/h)}}for(let g=0;g<h;g++)for(let C=0;C<o;C++){const R=C+c*g,S=C+c*(g+1),k=C+1+c*(g+1),D=C+1+c*g;m.push(R,S,D),m.push(S,k,D)}this.setIndex(m),this.setAttribute("position",new ft(v,3)),this.setAttribute("normal",new ft(M,3)),this.setAttribute("uv",new ft(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oi(e.width,e.height,e.widthSegments,e.heightSegments)}}var fd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pd=`#ifdef USE_ALPHAHASH
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
#endif`,md=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_d=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vd=`#ifdef USE_AOMAP
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
#endif`,Md=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wd=`#ifdef USE_BATCHING
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
#endif`,yd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ed=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Td=`#ifdef USE_IRIDESCENCE
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
#endif`,Ad=`#ifdef USE_BUMPMAP
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
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Nd=`#define PI 3.141592653589793
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
} // validated`,Od=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fd=`vec3 transformedNormal = objectNormal;
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
#endif`,Bd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xd=`#ifdef USE_ENVMAP
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
#endif`,qd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yd=`#ifdef USE_ENVMAP
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
#endif`,Kd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jd=`#ifdef USE_ENVMAP
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
#endif`,Zd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$d=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eh=`#ifdef USE_GRADIENTMAP
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
}`,th=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ih=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ah=`uniform bool receiveShadow;
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
#endif`,sh=`#ifdef USE_ENVMAP
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
#endif`,rh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ch=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dh=`PhysicalMaterial material;
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
#endif`,hh=`struct PhysicalMaterial {
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
}`,uh=`
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
#endif`,fh=`#if defined( RE_IndirectDiffuse )
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
#endif`,ph=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_h=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yh=`#if defined( USE_POINTS_UV )
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
#endif`,Sh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Eh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Th=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ah=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rh=`#ifdef USE_MORPHTARGETS
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
#endif`,Ch=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ph=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ih=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zh=`#ifdef USE_NORMALMAP
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
#endif`,Nh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Oh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$h=`float getShadowMask() {
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
}`,jh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qh=`#ifdef USE_SKINNING
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
#endif`,eu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tu=`#ifdef USE_SKINNING
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
#endif`,nu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,au=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,su=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ru=`#ifdef USE_TRANSMISSION
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
#endif`,ou=`#ifdef USE_TRANSMISSION
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
#endif`,cu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,du=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fu=`uniform sampler2D t2D;
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
}`,pu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_u=`#include <common>
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
}`,vu=`#if DEPTH_PACKING == 3200
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
}`,Mu=`#define DISTANCE
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
}`,wu=`#define DISTANCE
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
}`,yu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Su=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bu=`uniform float scale;
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
}`,Eu=`uniform vec3 diffuse;
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
}`,Tu=`#include <common>
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
}`,Au=`uniform vec3 diffuse;
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
}`,Ru=`#define LAMBERT
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
}`,Cu=`#define LAMBERT
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
}`,Pu=`#define MATCAP
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
}`,Du=`#define MATCAP
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
}`,Iu=`#define NORMAL
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
}`,Lu=`#define NORMAL
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
}`,Uu=`#define PHONG
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
}`,zu=`#define PHONG
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
}`,Nu=`#define STANDARD
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
}`,Ou=`#define STANDARD
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
}`,Fu=`#define TOON
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
}`,Bu=`#define TOON
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
}`,ku=`uniform float size;
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
}`,Hu=`uniform vec3 diffuse;
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
}`,Gu=`#include <common>
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
}`,Vu=`uniform vec3 color;
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
}`,Wu=`uniform float rotation;
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
}`,Xu=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:fd,alphahash_pars_fragment:pd,alphamap_fragment:md,alphamap_pars_fragment:gd,alphatest_fragment:xd,alphatest_pars_fragment:_d,aomap_fragment:vd,aomap_pars_fragment:Md,batching_pars_vertex:wd,batching_vertex:yd,begin_vertex:Sd,beginnormal_vertex:bd,bsdfs:Ed,iridescence_fragment:Td,bumpmap_pars_fragment:Ad,clipping_planes_fragment:Rd,clipping_planes_pars_fragment:Cd,clipping_planes_pars_vertex:Pd,clipping_planes_vertex:Dd,color_fragment:Id,color_pars_fragment:Ld,color_pars_vertex:Ud,color_vertex:zd,common:Nd,cube_uv_reflection_fragment:Od,defaultnormal_vertex:Fd,displacementmap_pars_vertex:Bd,displacementmap_vertex:kd,emissivemap_fragment:Hd,emissivemap_pars_fragment:Gd,colorspace_fragment:Vd,colorspace_pars_fragment:Wd,envmap_fragment:Xd,envmap_common_pars_fragment:qd,envmap_pars_fragment:Yd,envmap_pars_vertex:Kd,envmap_physical_pars_fragment:sh,envmap_vertex:Jd,fog_vertex:Zd,fog_pars_vertex:$d,fog_fragment:jd,fog_pars_fragment:Qd,gradientmap_pars_fragment:eh,lightmap_pars_fragment:th,lights_lambert_fragment:nh,lights_lambert_pars_fragment:ih,lights_pars_begin:ah,lights_toon_fragment:rh,lights_toon_pars_fragment:oh,lights_phong_fragment:ch,lights_phong_pars_fragment:lh,lights_physical_fragment:dh,lights_physical_pars_fragment:hh,lights_fragment_begin:uh,lights_fragment_maps:fh,lights_fragment_end:ph,logdepthbuf_fragment:mh,logdepthbuf_pars_fragment:gh,logdepthbuf_pars_vertex:xh,logdepthbuf_vertex:_h,map_fragment:vh,map_pars_fragment:Mh,map_particle_fragment:wh,map_particle_pars_fragment:yh,metalnessmap_fragment:Sh,metalnessmap_pars_fragment:bh,morphinstance_vertex:Eh,morphcolor_vertex:Th,morphnormal_vertex:Ah,morphtarget_pars_vertex:Rh,morphtarget_vertex:Ch,normal_fragment_begin:Ph,normal_fragment_maps:Dh,normal_pars_fragment:Ih,normal_pars_vertex:Lh,normal_vertex:Uh,normalmap_pars_fragment:zh,clearcoat_normal_fragment_begin:Nh,clearcoat_normal_fragment_maps:Oh,clearcoat_pars_fragment:Fh,iridescence_pars_fragment:Bh,opaque_fragment:kh,packing:Hh,premultiplied_alpha_fragment:Gh,project_vertex:Vh,dithering_fragment:Wh,dithering_pars_fragment:Xh,roughnessmap_fragment:qh,roughnessmap_pars_fragment:Yh,shadowmap_pars_fragment:Kh,shadowmap_pars_vertex:Jh,shadowmap_vertex:Zh,shadowmask_pars_fragment:$h,skinbase_vertex:jh,skinning_pars_vertex:Qh,skinning_vertex:eu,skinnormal_vertex:tu,specularmap_fragment:nu,specularmap_pars_fragment:iu,tonemapping_fragment:au,tonemapping_pars_fragment:su,transmission_fragment:ru,transmission_pars_fragment:ou,uv_pars_fragment:cu,uv_pars_vertex:lu,uv_vertex:du,worldpos_vertex:hu,background_vert:uu,background_frag:fu,backgroundCube_vert:pu,backgroundCube_frag:mu,cube_vert:gu,cube_frag:xu,depth_vert:_u,depth_frag:vu,distanceRGBA_vert:Mu,distanceRGBA_frag:wu,equirect_vert:yu,equirect_frag:Su,linedashed_vert:bu,linedashed_frag:Eu,meshbasic_vert:Tu,meshbasic_frag:Au,meshlambert_vert:Ru,meshlambert_frag:Cu,meshmatcap_vert:Pu,meshmatcap_frag:Du,meshnormal_vert:Iu,meshnormal_frag:Lu,meshphong_vert:Uu,meshphong_frag:zu,meshphysical_vert:Nu,meshphysical_frag:Ou,meshtoon_vert:Fu,meshtoon_frag:Bu,points_vert:ku,points_frag:Hu,shadow_vert:Gu,shadow_frag:Vu,sprite_vert:Wu,sprite_frag:Xu},le={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},cn={basic:{uniforms:Dt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Dt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new We(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Dt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Dt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Dt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new We(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Dt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Dt([le.points,le.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Dt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Dt([le.common,le.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Dt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Dt([le.sprite,le.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Dt([le.common,le.displacementmap,{referencePosition:{value:new y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Dt([le.lights,le.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};cn.physical={uniforms:Dt([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const za={r:0,b:0,g:0},Xn=new fn,qu=new ht;function Yu(n,e,t,i,a,s,r){const o=new We(0);let h=s===!0?0:1,c,d,p=null,f=0,m=null;function v(C){let R=C.isScene===!0?C.background:null;return R&&R.isTexture&&(R=(C.backgroundBlurriness>0?t:e).get(R)),R}function M(C){let R=!1;const S=v(C);S===null?g(o,h):S&&S.isColor&&(g(S,1),R=!0);const k=n.xr.getEnvironmentBlendMode();k==="additive"?i.buffers.color.setClear(0,0,0,1,r):k==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||R)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(C,R){const S=v(R);S&&(S.isCubeTexture||S.mapping===ts)?(d===void 0&&(d=new dt(new x(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:Ii(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(k,D,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(d)),Xn.copy(R.backgroundRotation),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),d.material.uniforms.envMap.value=S,d.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(qu.makeRotationFromEuler(Xn)),d.material.toneMapped=Qe.getTransfer(S.colorSpace)!==rt,(p!==S||f!==S.version||m!==n.toneMapping)&&(d.material.needsUpdate=!0,p=S,f=S.version,m=n.toneMapping),d.layers.enableAll(),C.unshift(d,d.geometry,d.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new dt(new Oi(2,2),new bn({name:"BackgroundMaterial",uniforms:Ii(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(S.colorSpace)!==rt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(p!==S||f!==S.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,p=S,f=S.version,m=n.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null))}function g(C,R){C.getRGB(za,Pc(n)),i.buffers.color.setClear(za.r,za.g,za.b,R,r)}return{getClearColor:function(){return o},setClearColor:function(C,R=1){o.set(C),h=R,g(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(C){h=C,g(o,h)},render:M,addToRenderList:_}}function Ku(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},a=f(null);let s=a,r=!1;function o(b,U,Y,q,Z){let ne=!1;const $=p(q,Y,U);s!==$&&(s=$,c(s.object)),ne=m(b,q,Y,Z),ne&&v(b,q,Y,Z),Z!==null&&e.update(Z,n.ELEMENT_ARRAY_BUFFER),(ne||r)&&(r=!1,S(b,U,Y,q),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function h(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function d(b){return n.deleteVertexArray(b)}function p(b,U,Y){const q=Y.wireframe===!0;let Z=i[b.id];Z===void 0&&(Z={},i[b.id]=Z);let ne=Z[U.id];ne===void 0&&(ne={},Z[U.id]=ne);let $=ne[q];return $===void 0&&($=f(h()),ne[q]=$),$}function f(b){const U=[],Y=[],q=[];for(let Z=0;Z<t;Z++)U[Z]=0,Y[Z]=0,q[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:Y,attributeDivisors:q,object:b,attributes:{},index:null}}function m(b,U,Y,q){const Z=s.attributes,ne=U.attributes;let $=0;const re=Y.getAttributes();for(const J in re)if(re[J].location>=0){const xe=Z[J];let Re=ne[J];if(Re===void 0&&(J==="instanceMatrix"&&b.instanceMatrix&&(Re=b.instanceMatrix),J==="instanceColor"&&b.instanceColor&&(Re=b.instanceColor)),xe===void 0||xe.attribute!==Re||Re&&xe.data!==Re.data)return!0;$++}return s.attributesNum!==$||s.index!==q}function v(b,U,Y,q){const Z={},ne=U.attributes;let $=0;const re=Y.getAttributes();for(const J in re)if(re[J].location>=0){let xe=ne[J];xe===void 0&&(J==="instanceMatrix"&&b.instanceMatrix&&(xe=b.instanceMatrix),J==="instanceColor"&&b.instanceColor&&(xe=b.instanceColor));const Re={};Re.attribute=xe,xe&&xe.data&&(Re.data=xe.data),Z[J]=Re,$++}s.attributes=Z,s.attributesNum=$,s.index=q}function M(){const b=s.newAttributes;for(let U=0,Y=b.length;U<Y;U++)b[U]=0}function _(b){g(b,0)}function g(b,U){const Y=s.newAttributes,q=s.enabledAttributes,Z=s.attributeDivisors;Y[b]=1,q[b]===0&&(n.enableVertexAttribArray(b),q[b]=1),Z[b]!==U&&(n.vertexAttribDivisor(b,U),Z[b]=U)}function C(){const b=s.newAttributes,U=s.enabledAttributes;for(let Y=0,q=U.length;Y<q;Y++)U[Y]!==b[Y]&&(n.disableVertexAttribArray(Y),U[Y]=0)}function R(b,U,Y,q,Z,ne,$){$===!0?n.vertexAttribIPointer(b,U,Y,Z,ne):n.vertexAttribPointer(b,U,Y,q,Z,ne)}function S(b,U,Y,q){M();const Z=q.attributes,ne=Y.getAttributes(),$=U.defaultAttributeValues;for(const re in ne){const J=ne[re];if(J.location>=0){let he=Z[re];if(he===void 0&&(re==="instanceMatrix"&&b.instanceMatrix&&(he=b.instanceMatrix),re==="instanceColor"&&b.instanceColor&&(he=b.instanceColor)),he!==void 0){const xe=he.normalized,Re=he.itemSize,Xe=e.get(he);if(Xe===void 0)continue;const it=Xe.buffer,Q=Xe.type,oe=Xe.bytesPerElement,be=Q===n.INT||Q===n.UNSIGNED_INT||he.gpuType===Dr;if(he.isInterleavedBufferAttribute){const ue=he.data,Le=ue.stride,Oe=he.offset;if(ue.isInstancedInterleavedBuffer){for(let qe=0;qe<J.locationSize;qe++)g(J.location+qe,ue.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let qe=0;qe<J.locationSize;qe++)_(J.location+qe);n.bindBuffer(n.ARRAY_BUFFER,it);for(let qe=0;qe<J.locationSize;qe++)R(J.location+qe,Re/J.locationSize,Q,xe,Le*oe,(Oe+Re/J.locationSize*qe)*oe,be)}else{if(he.isInstancedBufferAttribute){for(let ue=0;ue<J.locationSize;ue++)g(J.location+ue,he.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ue=0;ue<J.locationSize;ue++)_(J.location+ue);n.bindBuffer(n.ARRAY_BUFFER,it);for(let ue=0;ue<J.locationSize;ue++)R(J.location+ue,Re/J.locationSize,Q,xe,Re*oe,Re/J.locationSize*ue*oe,be)}}else if($!==void 0){const xe=$[re];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(J.location,xe);break;case 3:n.vertexAttrib3fv(J.location,xe);break;case 4:n.vertexAttrib4fv(J.location,xe);break;default:n.vertexAttrib1fv(J.location,xe)}}}}C()}function k(){z();for(const b in i){const U=i[b];for(const Y in U){const q=U[Y];for(const Z in q)d(q[Z].object),delete q[Z];delete U[Y]}delete i[b]}}function D(b){if(i[b.id]===void 0)return;const U=i[b.id];for(const Y in U){const q=U[Y];for(const Z in q)d(q[Z].object),delete q[Z];delete U[Y]}delete i[b.id]}function L(b){for(const U in i){const Y=i[U];if(Y[b.id]===void 0)continue;const q=Y[b.id];for(const Z in q)d(q[Z].object),delete q[Z];delete Y[b.id]}}function z(){A(),r=!0,s!==a&&(s=a,c(s.object))}function A(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:z,resetDefaultState:A,dispose:k,releaseStatesOfGeometry:D,releaseStatesOfProgram:L,initAttributes:M,enableAttribute:_,disableUnusedAttributes:C}}function Ju(n,e,t){let i;function a(c){i=c}function s(c,d){n.drawArrays(i,c,d),t.update(d,i,1)}function r(c,d,p){p!==0&&(n.drawArraysInstanced(i,c,d,p),t.update(d,i,p))}function o(c,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,p);let m=0;for(let v=0;v<p;v++)m+=d[v];t.update(m,i,1)}function h(c,d,p,f){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)r(c[v],d[v],f[v]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,d,0,f,0,p);let v=0;for(let M=0;M<p;M++)v+=d[M]*f[M];t.update(v,i,1)}}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=h}function Zu(n,e,t,i){let a;function s(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");a=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(L){return!(L!==tn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const z=L===sa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Sn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==hn&&!z)}function h(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=h(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const p=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),C=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),k=v>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:h,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:C,maxVaryings:R,maxFragmentUniforms:S,vertexTextures:k,maxSamples:D}}function $u(n){const e=this;let t=null,i=0,a=!1,s=!1;const r=new Yn,o=new Ge,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const m=p.length!==0||f||i!==0||a;return a=f,i=p.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){t=d(p,f,0)},this.setState=function(p,f,m){const v=p.clippingPlanes,M=p.clipIntersection,_=p.clipShadows,g=n.get(p);if(!a||v===null||v.length===0||s&&!_)s?d(null):c();else{const C=s?0:i,R=C*4;let S=g.clippingState||null;h.value=S,S=d(v,f,R,m);for(let k=0;k!==R;++k)S[k]=t[k];g.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=C}};function c(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(p,f,m,v){const M=p!==null?p.length:0;let _=null;if(M!==0){if(_=h.value,v!==!0||_===null){const g=m+M*4,C=f.matrixWorldInverse;o.getNormalMatrix(C),(_===null||_.length<g)&&(_=new Float32Array(g));for(let R=0,S=m;R!==M;++R,S+=4)r.copy(p[R]).applyMatrix4(C,o),r.normal.toArray(_,S),_[S+3]=r.constant}h.value=_,h.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,_}}function ju(n){let e=new WeakMap;function t(r,o){return o===Zs?r.mapping=Ri:o===$s&&(r.mapping=Ci),r}function i(r){if(r&&r.isTexture){const o=r.mapping;if(o===Zs||o===$s)if(e.has(r)){const h=e.get(r).texture;return t(h,r.mapping)}else{const h=r.image;if(h&&h.height>0){const c=new ld(h.height);return c.fromEquirectangularTexture(n,r),e.set(r,c),r.addEventListener("dispose",a),t(c.texture,r.mapping)}else return null}}return r}function a(r){const o=r.target;o.removeEventListener("dispose",a);const h=e.get(o);h!==void 0&&(e.delete(o),h.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Uc extends Dc{constructor(e=-1,t=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-e,r=i+e,o=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=d*this.view.offsetY,h=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Si=4,yo=[.125,.215,.35,.446,.526,.582],$n=20,Ps=new Uc,So=new We;let Ds=null,Is=0,Ls=0,Us=!1;const Kn=(1+Math.sqrt(5))/2,vi=1/Kn,bo=[new y(-Kn,vi,0),new y(Kn,vi,0),new y(-vi,0,Kn),new y(vi,0,Kn),new y(0,Kn,-vi),new y(0,Kn,vi),new y(-1,1,-1),new y(1,1,-1),new y(-1,1,1),new y(1,1,1)];class Eo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,a=100){Ds=this._renderer.getRenderTarget(),Is=this._renderer.getActiveCubeFace(),Ls=this._renderer.getActiveMipmapLevel(),Us=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,a,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ro(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ao(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ds,Is,Ls),this._renderer.xr.enabled=Us,e.scissorTest=!1,Na(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ri||e.mapping===Ci?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ds=this._renderer.getRenderTarget(),Is=this._renderer.getActiveCubeFace(),Ls=this._renderer.getActiveMipmapLevel(),Us=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:sa,format:tn,colorSpace:Li,depthBuffer:!1},a=To(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=To(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qu(s)),this._blurMaterial=ef(s,e,t)}return a}_compileMaterial(e){const t=new dt(this._lodPlanes[0],e);this._renderer.compile(t,Ps)}_sceneToCubeUV(e,t,i,a){const o=new Qt(90,1,t,i),h=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,f=d.toneMapping;d.getClearColor(So),d.toneMapping=On,d.autoClear=!1;const m=new Fr({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),v=new dt(new x,m);let M=!1;const _=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,M=!0):(m.color.copy(So),M=!0);for(let g=0;g<6;g++){const C=g%3;C===0?(o.up.set(0,h[g],0),o.lookAt(c[g],0,0)):C===1?(o.up.set(0,0,h[g]),o.lookAt(0,c[g],0)):(o.up.set(0,h[g],0),o.lookAt(0,0,c[g]));const R=this._cubeSize;Na(a,C*R,g>2?R:0,R,R),d.setRenderTarget(a),M&&d.render(v,o),d.render(e,o)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=f,d.autoClear=p,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===Ri||e.mapping===Ci;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ro()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ao());const s=a?this._cubemapMaterial:this._equirectMaterial,r=new dt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const h=this._cubeSize;Na(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(r,Ps)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let s=1;s<a;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=bo[(a-s-1)%bo.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,a,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,i,a,"latitudinal",s),this._halfBlur(r,e,i,i,a,"longitudinal",s)}_halfBlur(e,t,i,a,s,r,o){const h=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new dt(this._lodPlanes[a],c),f=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*$n-1),M=s/v,_=isFinite(s)?1+Math.floor(d*M):$n;_>$n&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${$n}`);const g=[];let C=0;for(let L=0;L<$n;++L){const z=L/M,A=Math.exp(-z*z/2);g.push(A),L===0?C+=A:L<_&&(C+=2*A)}for(let L=0;L<g.length;L++)g[L]=g[L]/C;f.envMap.value=e.texture,f.samples.value=_,f.weights.value=g,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:R}=this;f.dTheta.value=v,f.mipInt.value=R-i;const S=this._sizeLods[a],k=3*S*(a>R-Si?a-R+Si:0),D=4*(this._cubeSize-S);Na(t,k,D,3*S,2*S),h.setRenderTarget(t),h.render(p,Ps)}}function Qu(n){const e=[],t=[],i=[];let a=n;const s=n-Si+1+yo.length;for(let r=0;r<s;r++){const o=Math.pow(2,a);t.push(o);let h=1/o;r>n-Si?h=yo[r-n+Si-1]:r===0&&(h=0),i.push(h);const c=1/(o-2),d=-c,p=1+c,f=[d,d,p,d,p,p,d,d,p,p,d,p],m=6,v=6,M=3,_=2,g=1,C=new Float32Array(M*v*m),R=new Float32Array(_*v*m),S=new Float32Array(g*v*m);for(let D=0;D<m;D++){const L=D%3*2/3-1,z=D>2?0:-1,A=[L,z,0,L+2/3,z,0,L+2/3,z+1,0,L,z,0,L+2/3,z+1,0,L,z+1,0];C.set(A,M*v*D),R.set(f,_*v*D);const b=[D,D,D,D,D,D];S.set(b,g*v*D)}const k=new Lt;k.setAttribute("position",new Wt(C,M)),k.setAttribute("uv",new Wt(R,_)),k.setAttribute("faceIndex",new Wt(S,g)),e.push(k),a>Si&&a--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function To(n,e,t){const i=new ti(n,e,t);return i.texture.mapping=ts,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Na(n,e,t,i,a){n.viewport.set(e,t,i,a),n.scissor.set(e,t,i,a)}function ef(n,e,t){const i=new Float32Array($n),a=new y(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:kr(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Ao(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kr(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Ro(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kr(),fragmentShader:`

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
	`}function tf(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const h=o.mapping,c=h===Zs||h===$s,d=h===Ri||h===Ci;if(c||d){let p=e.get(o);const f=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Eo(n)),p=c?t.fromEquirectangular(o,p):t.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),p.texture;if(p!==void 0)return p.texture;{const m=o.image;return c&&m&&m.height>0||d&&m&&a(m)?(t===null&&(t=new Eo(n)),p=c?t.fromEquirectangular(o):t.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),o.addEventListener("dispose",s),p.texture):null}}}return o}function a(o){let h=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&h++;return h===c}function s(o){const h=o.target;h.removeEventListener("dispose",s);const c=e.get(h);c!==void 0&&(e.delete(h),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:r}}function nf(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=n.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&Qi("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function af(n,e,t,i){const a={},s=new WeakMap;function r(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const M=f.morphAttributes[v];for(let _=0,g=M.length;_<g;_++)e.remove(M[_])}f.removeEventListener("dispose",r),delete a[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(p,f){return a[f.id]===!0||(f.addEventListener("dispose",r),a[f.id]=!0,t.memory.geometries++),f}function h(p){const f=p.attributes;for(const v in f)e.update(f[v],n.ARRAY_BUFFER);const m=p.morphAttributes;for(const v in m){const M=m[v];for(let _=0,g=M.length;_<g;_++)e.update(M[_],n.ARRAY_BUFFER)}}function c(p){const f=[],m=p.index,v=p.attributes.position;let M=0;if(m!==null){const C=m.array;M=m.version;for(let R=0,S=C.length;R<S;R+=3){const k=C[R+0],D=C[R+1],L=C[R+2];f.push(k,D,D,L,L,k)}}else if(v!==void 0){const C=v.array;M=v.version;for(let R=0,S=C.length/3-1;R<S;R+=3){const k=R+0,D=R+1,L=R+2;f.push(k,D,D,L,L,k)}}else return;const _=new(yc(f)?Cc:Rc)(f,1);_.version=M;const g=s.get(p);g&&e.remove(g),s.set(p,_)}function d(p){const f=s.get(p);if(f){const m=p.index;m!==null&&f.version<m.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:h,getWireframeAttribute:d}}function sf(n,e,t){let i;function a(f){i=f}let s,r;function o(f){s=f.type,r=f.bytesPerElement}function h(f,m){n.drawElements(i,m,s,f*r),t.update(m,i,1)}function c(f,m,v){v!==0&&(n.drawElementsInstanced(i,m,s,f*r,v),t.update(m,i,v))}function d(f,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,v);let _=0;for(let g=0;g<v;g++)_+=m[g];t.update(_,i,1)}function p(f,m,v,M){if(v===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<f.length;g++)c(f[g]/r,m[g],M[g]);else{_.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,M,0,v);let g=0;for(let C=0;C<v;C++)g+=m[C]*M[C];t.update(g,i,1)}}this.setMode=a,this.setIndex=o,this.render=h,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function rf(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(t.calls++,r){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function of(n,e,t){const i=new WeakMap,a=new xt;function s(r,o,h){const c=r.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0;let f=i.get(o);if(f===void 0||f.count!==p){let A=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],C=o.morphAttributes.color||[];let R=0;m===!0&&(R=1),v===!0&&(R=2),M===!0&&(R=3);let S=o.attributes.position.count*R,k=1;S>e.maxTextureSize&&(k=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const D=new Float32Array(S*k*4*p),L=new bc(D,S,k,p);L.type=hn,L.needsUpdate=!0;const z=R*4;for(let b=0;b<p;b++){const U=_[b],Y=g[b],q=C[b],Z=S*k*4*b;for(let ne=0;ne<U.count;ne++){const $=ne*z;m===!0&&(a.fromBufferAttribute(U,ne),D[Z+$+0]=a.x,D[Z+$+1]=a.y,D[Z+$+2]=a.z,D[Z+$+3]=0),v===!0&&(a.fromBufferAttribute(Y,ne),D[Z+$+4]=a.x,D[Z+$+5]=a.y,D[Z+$+6]=a.z,D[Z+$+7]=0),M===!0&&(a.fromBufferAttribute(q,ne),D[Z+$+8]=a.x,D[Z+$+9]=a.y,D[Z+$+10]=a.z,D[Z+$+11]=q.itemSize===4?a.w:1)}}f={count:p,texture:L,size:new Ce(S,k)},i.set(o,f),o.addEventListener("dispose",A)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)h.getUniforms().setValue(n,"morphTexture",r.morphTexture,t);else{let m=0;for(let M=0;M<c.length;M++)m+=c[M];const v=o.morphTargetsRelative?1:1-m;h.getUniforms().setValue(n,"morphTargetBaseInfluence",v),h.getUniforms().setValue(n,"morphTargetInfluences",c)}h.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function cf(n,e,t,i){let a=new WeakMap;function s(h){const c=i.render.frame,d=h.geometry,p=e.get(h,d);if(a.get(p)!==c&&(e.update(p),a.set(p,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",o)===!1&&h.addEventListener("dispose",o),a.get(h)!==c&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),a.set(h,c))),h.isSkinnedMesh){const f=h.skeleton;a.get(f)!==c&&(f.update(),a.set(f,c))}return p}function r(){a=new WeakMap}function o(h){const c=h.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:r}}class zc extends Ct{constructor(e,t,i,a,s,r,o,h,c,d=Ei){if(d!==Ei&&d!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Ei&&(i=ei),i===void 0&&d===Di&&(i=Pi),super(null,a,s,r,o,h,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Vt,this.minFilter=h!==void 0?h:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Nc=new Ct,Co=new zc(1,1),Oc=new bc,Fc=new Yl,Bc=new Ic,Po=[],Do=[],Io=new Float32Array(16),Lo=new Float32Array(9),Uo=new Float32Array(4);function Fi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const a=e*t;let s=Po[a];if(s===void 0&&(s=new Float32Array(a),Po[a]=s),e!==0){i.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,n[r].toArray(s,o)}return s}function wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function is(n,e){let t=Do[e];t===void 0&&(t=new Int32Array(e),Do[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function lf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function df(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2fv(this.addr,e),yt(t,e)}}function hf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;n.uniform3fv(this.addr,e),yt(t,e)}}function uf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4fv(this.addr,e),yt(t,e)}}function ff(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(wt(t,i))return;Uo.set(i),n.uniformMatrix2fv(this.addr,!1,Uo),yt(t,i)}}function pf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(wt(t,i))return;Lo.set(i),n.uniformMatrix3fv(this.addr,!1,Lo),yt(t,i)}}function mf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(wt(t,i))return;Io.set(i),n.uniformMatrix4fv(this.addr,!1,Io),yt(t,i)}}function gf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function xf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2iv(this.addr,e),yt(t,e)}}function _f(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3iv(this.addr,e),yt(t,e)}}function vf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4iv(this.addr,e),yt(t,e)}}function Mf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function wf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2uiv(this.addr,e),yt(t,e)}}function yf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3uiv(this.addr,e),yt(t,e)}}function Sf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4uiv(this.addr,e),yt(t,e)}}function bf(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);let s;this.type===n.SAMPLER_2D_SHADOW?(Co.compareFunction=wc,s=Co):s=Nc,t.setTexture2D(e||s,a)}function Ef(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||Fc,a)}function Tf(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||Bc,a)}function Af(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||Oc,a)}function Rf(n){switch(n){case 5126:return lf;case 35664:return df;case 35665:return hf;case 35666:return uf;case 35674:return ff;case 35675:return pf;case 35676:return mf;case 5124:case 35670:return gf;case 35667:case 35671:return xf;case 35668:case 35672:return _f;case 35669:case 35673:return vf;case 5125:return Mf;case 36294:return wf;case 36295:return yf;case 36296:return Sf;case 35678:case 36198:case 36298:case 36306:case 35682:return bf;case 35679:case 36299:case 36307:return Ef;case 35680:case 36300:case 36308:case 36293:return Tf;case 36289:case 36303:case 36311:case 36292:return Af}}function Cf(n,e){n.uniform1fv(this.addr,e)}function Pf(n,e){const t=Fi(e,this.size,2);n.uniform2fv(this.addr,t)}function Df(n,e){const t=Fi(e,this.size,3);n.uniform3fv(this.addr,t)}function If(n,e){const t=Fi(e,this.size,4);n.uniform4fv(this.addr,t)}function Lf(n,e){const t=Fi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Uf(n,e){const t=Fi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function zf(n,e){const t=Fi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Nf(n,e){n.uniform1iv(this.addr,e)}function Of(n,e){n.uniform2iv(this.addr,e)}function Ff(n,e){n.uniform3iv(this.addr,e)}function Bf(n,e){n.uniform4iv(this.addr,e)}function kf(n,e){n.uniform1uiv(this.addr,e)}function Hf(n,e){n.uniform2uiv(this.addr,e)}function Gf(n,e){n.uniform3uiv(this.addr,e)}function Vf(n,e){n.uniform4uiv(this.addr,e)}function Wf(n,e,t){const i=this.cache,a=e.length,s=is(t,a);wt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let r=0;r!==a;++r)t.setTexture2D(e[r]||Nc,s[r])}function Xf(n,e,t){const i=this.cache,a=e.length,s=is(t,a);wt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let r=0;r!==a;++r)t.setTexture3D(e[r]||Fc,s[r])}function qf(n,e,t){const i=this.cache,a=e.length,s=is(t,a);wt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let r=0;r!==a;++r)t.setTextureCube(e[r]||Bc,s[r])}function Yf(n,e,t){const i=this.cache,a=e.length,s=is(t,a);wt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let r=0;r!==a;++r)t.setTexture2DArray(e[r]||Oc,s[r])}function Kf(n){switch(n){case 5126:return Cf;case 35664:return Pf;case 35665:return Df;case 35666:return If;case 35674:return Lf;case 35675:return Uf;case 35676:return zf;case 5124:case 35670:return Nf;case 35667:case 35671:return Of;case 35668:case 35672:return Ff;case 35669:case 35673:return Bf;case 5125:return kf;case 36294:return Hf;case 36295:return Gf;case 36296:return Vf;case 35678:case 36198:case 36298:case 36306:case 35682:return Wf;case 35679:case 36299:case 36307:return Xf;case 35680:case 36300:case 36308:case 36293:return qf;case 36289:case 36303:case 36311:case 36292:return Yf}}class Jf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Rf(t.type)}}class Zf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kf(t.type)}}class $f{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(e,t[o.id],i)}}}const zs=/(\w+)(\])?(\[|\.)?/g;function zo(n,e){n.seq.push(e),n.map[e.id]=e}function jf(n,e,t){const i=n.name,a=i.length;for(zs.lastIndex=0;;){const s=zs.exec(i),r=zs.lastIndex;let o=s[1];const h=s[2]==="]",c=s[3];if(h&&(o=o|0),c===void 0||c==="["&&r+2===a){zo(t,c===void 0?new Jf(o,n,e):new Zf(o,n,e));break}else{let p=t.map[o];p===void 0&&(p=new $f(o),zo(t,p)),t=p}}}class Ja{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const s=e.getActiveUniform(t,a),r=e.getUniformLocation(t,s.name);jf(s,r,this)}}setValue(e,t,i,a){const s=this.map[t];s!==void 0&&s.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let s=0,r=t.length;s!==r;++s){const o=t[s],h=i[o.id];h.needsUpdate!==!1&&o.setValue(e,h.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,s=e.length;a!==s;++a){const r=e[a];r.id in t&&i.push(r)}return i}}function No(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Qf=37297;let e0=0;function t0(n,e){const t=n.split(`
`),i=[],a=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=a;r<s;r++){const o=r+1;i.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return i.join(`
`)}const Oo=new Ge;function n0(n){Qe._getMatrix(Oo,Qe.workingColorSpace,n);const e=`mat3( ${Oo.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(n)){case ns:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Fo(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=n.getShaderInfoLog(e).trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+t0(n.getShaderSource(e),r)}else return a}function i0(n,e){const t=n0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function a0(n,e){let t;switch(e){case wl:t="Linear";break;case yl:t="Reinhard";break;case Sl:t="Cineon";break;case lc:t="ACESFilmic";break;case El:t="AgX";break;case Tl:t="Neutral";break;case bl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Oa=new y;function s0(){Qe.getLuminanceCoefficients(Oa);const n=Oa.x.toFixed(4),e=Oa.y.toFixed(4),t=Oa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function o0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function c0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=n.getActiveAttrib(e,a),r=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[r]={type:s.type,location:n.getAttribLocation(e,r),locationSize:o}}return t}function ea(n){return n!==""}function Bo(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ko(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const l0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ar(n){return n.replace(l0,h0)}const d0=new Map;function h0(n,e){let t=Ve[e];if(t===void 0){const i=d0.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ar(t)}const u0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ho(n){return n.replace(u0,f0)}function f0(n,e,t,i){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function Go(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function p0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===rc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===oc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Mn&&(e="SHADOWMAP_TYPE_VSM"),e}function m0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ri:case Ci:e="ENVMAP_TYPE_CUBE";break;case ts:e="ENVMAP_TYPE_CUBE_UV";break}return e}function g0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ci:e="ENVMAP_MODE_REFRACTION";break}return e}function x0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case cc:e="ENVMAP_BLENDING_MULTIPLY";break;case vl:e="ENVMAP_BLENDING_MIX";break;case Ml:e="ENVMAP_BLENDING_ADD";break}return e}function _0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function v0(n,e,t,i){const a=n.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const h=p0(t),c=m0(t),d=g0(t),p=x0(t),f=_0(t),m=r0(t),v=o0(s),M=a.createProgram();let _,g,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ea).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ea).join(`
`),g.length>0&&(g+=`
`)):(_=[Go(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),g=[Go(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?Ve.tonemapping_pars_fragment:"",t.toneMapping!==On?a0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,i0("linearToOutputTexel",t.outputColorSpace),s0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ea).join(`
`)),r=Ar(r),r=Bo(r,t),r=ko(r,t),o=Ar(o),o=Bo(o,t),o=ko(o,t),r=Ho(r),o=Ho(o),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",t.glslVersion===eo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const R=C+_+r,S=C+g+o,k=No(a,a.VERTEX_SHADER,R),D=No(a,a.FRAGMENT_SHADER,S);a.attachShader(M,k),a.attachShader(M,D),t.index0AttributeName!==void 0?a.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(M,0,"position"),a.linkProgram(M);function L(U){if(n.debug.checkShaderErrors){const Y=a.getProgramInfoLog(M).trim(),q=a.getShaderInfoLog(k).trim(),Z=a.getShaderInfoLog(D).trim();let ne=!0,$=!0;if(a.getProgramParameter(M,a.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,M,k,D);else{const re=Fo(a,k,"vertex"),J=Fo(a,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(M,a.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+Y+`
`+re+`
`+J)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(q===""||Z==="")&&($=!1);$&&(U.diagnostics={runnable:ne,programLog:Y,vertexShader:{log:q,prefix:_},fragmentShader:{log:Z,prefix:g}})}a.deleteShader(k),a.deleteShader(D),z=new Ja(a,M),A=c0(a,M)}let z;this.getUniforms=function(){return z===void 0&&L(this),z};let A;this.getAttributes=function(){return A===void 0&&L(this),A};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=a.getProgramParameter(M,Qf)),b},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=e0++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=k,this.fragmentShader=D,this}let M0=0;class w0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(e);return r.has(a)===!1&&(r.add(a),a.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new y0(e),t.set(e,i)),i}}class y0{constructor(e){this.id=M0++,this.code=e,this.usedTimes=0}}function S0(n,e,t,i,a,s,r){const o=new Tc,h=new w0,c=new Set,d=[],p=a.logarithmicDepthBuffer,f=a.vertexTextures;let m=a.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(A){return c.add(A),A===0?"uv":`uv${A}`}function _(A,b,U,Y,q){const Z=Y.fog,ne=q.geometry,$=A.isMeshStandardMaterial?Y.environment:null,re=(A.isMeshStandardMaterial?t:e).get(A.envMap||$),J=re&&re.mapping===ts?re.image.height:null,he=v[A.type];A.precision!==null&&(m=a.getMaxPrecision(A.precision),m!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",m,"instead."));const xe=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Re=xe!==void 0?xe.length:0;let Xe=0;ne.morphAttributes.position!==void 0&&(Xe=1),ne.morphAttributes.normal!==void 0&&(Xe=2),ne.morphAttributes.color!==void 0&&(Xe=3);let it,Q,oe,be;if(he){const nt=cn[he];it=nt.vertexShader,Q=nt.fragmentShader}else it=A.vertexShader,Q=A.fragmentShader,h.update(A),oe=h.getVertexShaderID(A),be=h.getFragmentShaderID(A);const ue=n.getRenderTarget(),Le=n.state.buffers.depth.getReversed(),Oe=q.isInstancedMesh===!0,qe=q.isBatchedMesh===!0,ut=!!A.map,Ze=!!A.matcap,gt=!!re,H=!!A.aoMap,Ut=!!A.lightMap,Ye=!!A.bumpMap,Ke=!!A.normalMap,De=!!A.displacementMap,ot=!!A.emissiveMap,Pe=!!A.metalnessMap,P=!!A.roughnessMap,w=A.anisotropy>0,V=A.clearcoat>0,ee=A.dispersion>0,ie=A.iridescence>0,j=A.sheen>0,Te=A.transmission>0,fe=w&&!!A.anisotropyMap,_e=V&&!!A.clearcoatMap,$e=V&&!!A.clearcoatNormalMap,ae=V&&!!A.clearcoatRoughnessMap,ve=ie&&!!A.iridescenceMap,Ie=ie&&!!A.iridescenceThicknessMap,Ue=j&&!!A.sheenColorMap,Me=j&&!!A.sheenRoughnessMap,Je=!!A.specularMap,He=!!A.specularColorMap,at=!!A.specularIntensityMap,N=Te&&!!A.transmissionMap,de=Te&&!!A.thicknessMap,K=!!A.gradientMap,te=!!A.alphaMap,ge=A.alphaTest>0,pe=!!A.alphaHash,Be=!!A.extensions;let pt=On;A.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(pt=n.toneMapping);const St={shaderID:he,shaderType:A.type,shaderName:A.name,vertexShader:it,fragmentShader:Q,defines:A.defines,customVertexShaderID:oe,customFragmentShaderID:be,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:m,batching:qe,batchingColor:qe&&q._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&q.instanceColor!==null,instancingMorph:Oe&&q.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Li,alphaToCoverage:!!A.alphaToCoverage,map:ut,matcap:Ze,envMap:gt,envMapMode:gt&&re.mapping,envMapCubeUVHeight:J,aoMap:H,lightMap:Ut,bumpMap:Ye,normalMap:Ke,displacementMap:f&&De,emissiveMap:ot,normalMapObjectSpace:Ke&&A.normalMapType===Pl,normalMapTangentSpace:Ke&&A.normalMapType===Mc,metalnessMap:Pe,roughnessMap:P,anisotropy:w,anisotropyMap:fe,clearcoat:V,clearcoatMap:_e,clearcoatNormalMap:$e,clearcoatRoughnessMap:ae,dispersion:ee,iridescence:ie,iridescenceMap:ve,iridescenceThicknessMap:Ie,sheen:j,sheenColorMap:Ue,sheenRoughnessMap:Me,specularMap:Je,specularColorMap:He,specularIntensityMap:at,transmission:Te,transmissionMap:N,thicknessMap:de,gradientMap:K,opaque:A.transparent===!1&&A.blending===bi&&A.alphaToCoverage===!1,alphaMap:te,alphaTest:ge,alphaHash:pe,combine:A.combine,mapUv:ut&&M(A.map.channel),aoMapUv:H&&M(A.aoMap.channel),lightMapUv:Ut&&M(A.lightMap.channel),bumpMapUv:Ye&&M(A.bumpMap.channel),normalMapUv:Ke&&M(A.normalMap.channel),displacementMapUv:De&&M(A.displacementMap.channel),emissiveMapUv:ot&&M(A.emissiveMap.channel),metalnessMapUv:Pe&&M(A.metalnessMap.channel),roughnessMapUv:P&&M(A.roughnessMap.channel),anisotropyMapUv:fe&&M(A.anisotropyMap.channel),clearcoatMapUv:_e&&M(A.clearcoatMap.channel),clearcoatNormalMapUv:$e&&M(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&M(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&M(A.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&M(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&M(A.sheenColorMap.channel),sheenRoughnessMapUv:Me&&M(A.sheenRoughnessMap.channel),specularMapUv:Je&&M(A.specularMap.channel),specularColorMapUv:He&&M(A.specularColorMap.channel),specularIntensityMapUv:at&&M(A.specularIntensityMap.channel),transmissionMapUv:N&&M(A.transmissionMap.channel),thicknessMapUv:de&&M(A.thicknessMap.channel),alphaMapUv:te&&M(A.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(Ke||w),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ne.attributes.uv&&(ut||te),fog:!!Z,useFog:A.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:Le,skinning:q.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Xe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:pt,decodeVideoTexture:ut&&A.map.isVideoTexture===!0&&Qe.getTransfer(A.map.colorSpace)===rt,decodeVideoTextureEmissive:ot&&A.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(A.emissiveMap.colorSpace)===rt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===ln,flipSided:A.side===It,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Be&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&A.extensions.multiDraw===!0||qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return St.vertexUv1s=c.has(1),St.vertexUv2s=c.has(2),St.vertexUv3s=c.has(3),c.clear(),St}function g(A){const b=[];if(A.shaderID?b.push(A.shaderID):(b.push(A.customVertexShaderID),b.push(A.customFragmentShaderID)),A.defines!==void 0)for(const U in A.defines)b.push(U),b.push(A.defines[U]);return A.isRawShaderMaterial===!1&&(C(b,A),R(b,A),b.push(n.outputColorSpace)),b.push(A.customProgramCacheKey),b.join()}function C(A,b){A.push(b.precision),A.push(b.outputColorSpace),A.push(b.envMapMode),A.push(b.envMapCubeUVHeight),A.push(b.mapUv),A.push(b.alphaMapUv),A.push(b.lightMapUv),A.push(b.aoMapUv),A.push(b.bumpMapUv),A.push(b.normalMapUv),A.push(b.displacementMapUv),A.push(b.emissiveMapUv),A.push(b.metalnessMapUv),A.push(b.roughnessMapUv),A.push(b.anisotropyMapUv),A.push(b.clearcoatMapUv),A.push(b.clearcoatNormalMapUv),A.push(b.clearcoatRoughnessMapUv),A.push(b.iridescenceMapUv),A.push(b.iridescenceThicknessMapUv),A.push(b.sheenColorMapUv),A.push(b.sheenRoughnessMapUv),A.push(b.specularMapUv),A.push(b.specularColorMapUv),A.push(b.specularIntensityMapUv),A.push(b.transmissionMapUv),A.push(b.thicknessMapUv),A.push(b.combine),A.push(b.fogExp2),A.push(b.sizeAttenuation),A.push(b.morphTargetsCount),A.push(b.morphAttributeCount),A.push(b.numDirLights),A.push(b.numPointLights),A.push(b.numSpotLights),A.push(b.numSpotLightMaps),A.push(b.numHemiLights),A.push(b.numRectAreaLights),A.push(b.numDirLightShadows),A.push(b.numPointLightShadows),A.push(b.numSpotLightShadows),A.push(b.numSpotLightShadowsWithMaps),A.push(b.numLightProbes),A.push(b.shadowMapType),A.push(b.toneMapping),A.push(b.numClippingPlanes),A.push(b.numClipIntersection),A.push(b.depthPacking)}function R(A,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),A.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),A.push(o.mask)}function S(A){const b=v[A.type];let U;if(b){const Y=cn[b];U=sd.clone(Y.uniforms)}else U=A.uniforms;return U}function k(A,b){let U;for(let Y=0,q=d.length;Y<q;Y++){const Z=d[Y];if(Z.cacheKey===b){U=Z,++U.usedTimes;break}}return U===void 0&&(U=new v0(n,b,A,s),d.push(U)),U}function D(A){if(--A.usedTimes===0){const b=d.indexOf(A);d[b]=d[d.length-1],d.pop(),A.destroy()}}function L(A){h.remove(A)}function z(){h.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:S,acquireProgram:k,releaseProgram:D,releaseShaderCache:L,programs:d,dispose:z}}function b0(){let n=new WeakMap;function e(r){return n.has(r)}function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function i(r){n.delete(r)}function a(r,o,h){n.get(r)[o]=h}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:s}}function E0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Vo(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Wo(){const n=[];let e=0;const t=[],i=[],a=[];function s(){e=0,t.length=0,i.length=0,a.length=0}function r(p,f,m,v,M,_){let g=n[e];return g===void 0?(g={id:p.id,object:p,geometry:f,material:m,groupOrder:v,renderOrder:p.renderOrder,z:M,group:_},n[e]=g):(g.id=p.id,g.object=p,g.geometry=f,g.material=m,g.groupOrder=v,g.renderOrder=p.renderOrder,g.z=M,g.group=_),e++,g}function o(p,f,m,v,M,_){const g=r(p,f,m,v,M,_);m.transmission>0?i.push(g):m.transparent===!0?a.push(g):t.push(g)}function h(p,f,m,v,M,_){const g=r(p,f,m,v,M,_);m.transmission>0?i.unshift(g):m.transparent===!0?a.unshift(g):t.unshift(g)}function c(p,f){t.length>1&&t.sort(p||E0),i.length>1&&i.sort(f||Vo),a.length>1&&a.sort(f||Vo)}function d(){for(let p=e,f=n.length;p<f;p++){const m=n[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:a,init:s,push:o,unshift:h,finish:d,sort:c}}function T0(){let n=new WeakMap;function e(i,a){const s=n.get(i);let r;return s===void 0?(r=new Wo,n.set(i,[r])):a>=s.length?(r=new Wo,s.push(r)):r=s[a],r}function t(){n=new WeakMap}return{get:e,dispose:t}}function A0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new y,color:new We};break;case"SpotLight":t={position:new y,direction:new y,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new y,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new y,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new y,halfWidth:new y,halfHeight:new y};break}return n[e.id]=t,t}}}function R0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let C0=0;function P0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function D0(n){const e=new A0,t=R0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new y);const a=new y,s=new ht,r=new ht;function o(c){let d=0,p=0,f=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let m=0,v=0,M=0,_=0,g=0,C=0,R=0,S=0,k=0,D=0,L=0;c.sort(P0);for(let A=0,b=c.length;A<b;A++){const U=c[A],Y=U.color,q=U.intensity,Z=U.distance,ne=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=Y.r*q,p+=Y.g*q,f+=Y.b*q;else if(U.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(U.sh.coefficients[$],q);L++}else if(U.isDirectionalLight){const $=e.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const re=U.shadow,J=t.get(U);J.shadowIntensity=re.intensity,J.shadowBias=re.bias,J.shadowNormalBias=re.normalBias,J.shadowRadius=re.radius,J.shadowMapSize=re.mapSize,i.directionalShadow[m]=J,i.directionalShadowMap[m]=ne,i.directionalShadowMatrix[m]=U.shadow.matrix,C++}i.directional[m]=$,m++}else if(U.isSpotLight){const $=e.get(U);$.position.setFromMatrixPosition(U.matrixWorld),$.color.copy(Y).multiplyScalar(q),$.distance=Z,$.coneCos=Math.cos(U.angle),$.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),$.decay=U.decay,i.spot[M]=$;const re=U.shadow;if(U.map&&(i.spotLightMap[k]=U.map,k++,re.updateMatrices(U),U.castShadow&&D++),i.spotLightMatrix[M]=re.matrix,U.castShadow){const J=t.get(U);J.shadowIntensity=re.intensity,J.shadowBias=re.bias,J.shadowNormalBias=re.normalBias,J.shadowRadius=re.radius,J.shadowMapSize=re.mapSize,i.spotShadow[M]=J,i.spotShadowMap[M]=ne,S++}M++}else if(U.isRectAreaLight){const $=e.get(U);$.color.copy(Y).multiplyScalar(q),$.halfWidth.set(U.width*.5,0,0),$.halfHeight.set(0,U.height*.5,0),i.rectArea[_]=$,_++}else if(U.isPointLight){const $=e.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),$.distance=U.distance,$.decay=U.decay,U.castShadow){const re=U.shadow,J=t.get(U);J.shadowIntensity=re.intensity,J.shadowBias=re.bias,J.shadowNormalBias=re.normalBias,J.shadowRadius=re.radius,J.shadowMapSize=re.mapSize,J.shadowCameraNear=re.camera.near,J.shadowCameraFar=re.camera.far,i.pointShadow[v]=J,i.pointShadowMap[v]=ne,i.pointShadowMatrix[v]=U.shadow.matrix,R++}i.point[v]=$,v++}else if(U.isHemisphereLight){const $=e.get(U);$.skyColor.copy(U.color).multiplyScalar(q),$.groundColor.copy(U.groundColor).multiplyScalar(q),i.hemi[g]=$,g++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=f;const z=i.hash;(z.directionalLength!==m||z.pointLength!==v||z.spotLength!==M||z.rectAreaLength!==_||z.hemiLength!==g||z.numDirectionalShadows!==C||z.numPointShadows!==R||z.numSpotShadows!==S||z.numSpotMaps!==k||z.numLightProbes!==L)&&(i.directional.length=m,i.spot.length=M,i.rectArea.length=_,i.point.length=v,i.hemi.length=g,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=C,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=S+k-D,i.spotLightMap.length=k,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=L,z.directionalLength=m,z.pointLength=v,z.spotLength=M,z.rectAreaLength=_,z.hemiLength=g,z.numDirectionalShadows=C,z.numPointShadows=R,z.numSpotShadows=S,z.numSpotMaps=k,z.numLightProbes=L,i.version=C0++)}function h(c,d){let p=0,f=0,m=0,v=0,M=0;const _=d.matrixWorldInverse;for(let g=0,C=c.length;g<C;g++){const R=c[g];if(R.isDirectionalLight){const S=i.directional[p];S.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(_),p++}else if(R.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(R.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(_),m++}else if(R.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(R.matrixWorld),S.position.applyMatrix4(_),r.identity(),s.copy(R.matrixWorld),s.premultiply(_),r.extractRotation(s),S.halfWidth.set(R.width*.5,0,0),S.halfHeight.set(0,R.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),v++}else if(R.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(R.matrixWorld),S.position.applyMatrix4(_),f++}else if(R.isHemisphereLight){const S=i.hemi[M];S.direction.setFromMatrixPosition(R.matrixWorld),S.direction.transformDirection(_),M++}}}return{setup:o,setupView:h,state:i}}function Xo(n){const e=new D0(n),t=[],i=[];function a(d){c.camera=d,t.length=0,i.length=0}function s(d){t.push(d)}function r(d){i.push(d)}function o(){e.setup(t)}function h(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:o,setupLightsView:h,pushLight:s,pushShadow:r}}function I0(n){let e=new WeakMap;function t(a,s=0){const r=e.get(a);let o;return r===void 0?(o=new Xo(n),e.set(a,[o])):s>=r.length?(o=new Xo(n),r.push(o)):o=r[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class L0 extends Ni{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Rl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class U0 extends Ni{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const z0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N0=`uniform sampler2D shadow_pass;
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
}`;function O0(n,e,t){let i=new Br;const a=new Ce,s=new Ce,r=new xt,o=new L0({depthPacking:Cl}),h=new U0,c={},d=t.maxTextureSize,p={[Fn]:It,[It]:Fn,[ln]:ln},f=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:z0,fragmentShader:N0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new Lt;v.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new dt(v,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rc;let g=this.type;this.render=function(D,L,z){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||D.length===0)return;const A=n.getRenderTarget(),b=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(Nn),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const q=g!==Mn&&this.type===Mn,Z=g===Mn&&this.type!==Mn;for(let ne=0,$=D.length;ne<$;ne++){const re=D[ne],J=re.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;a.copy(J.mapSize);const he=J.getFrameExtents();if(a.multiply(he),s.copy(J.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(s.x=Math.floor(d/he.x),a.x=s.x*he.x,J.mapSize.x=s.x),a.y>d&&(s.y=Math.floor(d/he.y),a.y=s.y*he.y,J.mapSize.y=s.y)),J.map===null||q===!0||Z===!0){const Re=this.type!==Mn?{minFilter:Vt,magFilter:Vt}:{};J.map!==null&&J.map.dispose(),J.map=new ti(a.x,a.y,Re),J.map.texture.name=re.name+".shadowMap",J.camera.updateProjectionMatrix()}n.setRenderTarget(J.map),n.clear();const xe=J.getViewportCount();for(let Re=0;Re<xe;Re++){const Xe=J.getViewport(Re);r.set(s.x*Xe.x,s.y*Xe.y,s.x*Xe.z,s.y*Xe.w),Y.viewport(r),J.updateMatrices(re,Re),i=J.getFrustum(),S(L,z,J.camera,re,this.type)}J.isPointLightShadow!==!0&&this.type===Mn&&C(J,z),J.needsUpdate=!1}g=this.type,_.needsUpdate=!1,n.setRenderTarget(A,b,U)};function C(D,L){const z=e.update(M);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,m.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new ti(a.x,a.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(L,null,z,f,M,null),m.uniforms.shadow_pass.value=D.mapPass.texture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(L,null,z,m,M,null)}function R(D,L,z,A){let b=null;const U=z.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(U!==void 0)b=U;else if(b=z.isPointLight===!0?h:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const Y=b.uuid,q=L.uuid;let Z=c[Y];Z===void 0&&(Z={},c[Y]=Z);let ne=Z[q];ne===void 0&&(ne=b.clone(),Z[q]=ne,L.addEventListener("dispose",k)),b=ne}if(b.visible=L.visible,b.wireframe=L.wireframe,A===Mn?b.side=L.shadowSide!==null?L.shadowSide:L.side:b.side=L.shadowSide!==null?L.shadowSide:p[L.side],b.alphaMap=L.alphaMap,b.alphaTest=L.alphaTest,b.map=L.map,b.clipShadows=L.clipShadows,b.clippingPlanes=L.clippingPlanes,b.clipIntersection=L.clipIntersection,b.displacementMap=L.displacementMap,b.displacementScale=L.displacementScale,b.displacementBias=L.displacementBias,b.wireframeLinewidth=L.wireframeLinewidth,b.linewidth=L.linewidth,z.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const Y=n.properties.get(b);Y.light=z}return b}function S(D,L,z,A,b){if(D.visible===!1)return;if(D.layers.test(L.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&b===Mn)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,D.matrixWorld);const q=e.update(D),Z=D.material;if(Array.isArray(Z)){const ne=q.groups;for(let $=0,re=ne.length;$<re;$++){const J=ne[$],he=Z[J.materialIndex];if(he&&he.visible){const xe=R(D,he,A,b);D.onBeforeShadow(n,D,L,z,q,xe,J),n.renderBufferDirect(z,null,q,xe,D,J),D.onAfterShadow(n,D,L,z,q,xe,J)}}}else if(Z.visible){const ne=R(D,Z,A,b);D.onBeforeShadow(n,D,L,z,q,ne,null),n.renderBufferDirect(z,null,q,ne,D,null),D.onAfterShadow(n,D,L,z,q,ne,null)}}const Y=D.children;for(let q=0,Z=Y.length;q<Z;q++)S(Y[q],L,z,A,b)}function k(D){D.target.removeEventListener("dispose",k);for(const z in c){const A=c[z],b=D.target.uuid;b in A&&(A[b].dispose(),delete A[b])}}}const F0={[Vs]:Ws,[Xs]:Ks,[qs]:Js,[Ai]:Ys,[Ws]:Vs,[Ks]:Xs,[Js]:qs,[Ys]:Ai};function B0(n,e){function t(){let N=!1;const de=new xt;let K=null;const te=new xt(0,0,0,0);return{setMask:function(ge){K!==ge&&!N&&(n.colorMask(ge,ge,ge,ge),K=ge)},setLocked:function(ge){N=ge},setClear:function(ge,pe,Be,pt,St){St===!0&&(ge*=pt,pe*=pt,Be*=pt),de.set(ge,pe,Be,pt),te.equals(de)===!1&&(n.clearColor(ge,pe,Be,pt),te.copy(de))},reset:function(){N=!1,K=null,te.set(-1,0,0,0)}}}function i(){let N=!1,de=!1,K=null,te=null,ge=null;return{setReversed:function(pe){if(de!==pe){const Be=e.get("EXT_clip_control");de?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT);const pt=ge;ge=null,this.setClear(pt)}de=pe},getReversed:function(){return de},setTest:function(pe){pe?ue(n.DEPTH_TEST):Le(n.DEPTH_TEST)},setMask:function(pe){K!==pe&&!N&&(n.depthMask(pe),K=pe)},setFunc:function(pe){if(de&&(pe=F0[pe]),te!==pe){switch(pe){case Vs:n.depthFunc(n.NEVER);break;case Ws:n.depthFunc(n.ALWAYS);break;case Xs:n.depthFunc(n.LESS);break;case Ai:n.depthFunc(n.LEQUAL);break;case qs:n.depthFunc(n.EQUAL);break;case Ys:n.depthFunc(n.GEQUAL);break;case Ks:n.depthFunc(n.GREATER);break;case Js:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}te=pe}},setLocked:function(pe){N=pe},setClear:function(pe){ge!==pe&&(de&&(pe=1-pe),n.clearDepth(pe),ge=pe)},reset:function(){N=!1,K=null,te=null,ge=null,de=!1}}}function a(){let N=!1,de=null,K=null,te=null,ge=null,pe=null,Be=null,pt=null,St=null;return{setTest:function(nt){N||(nt?ue(n.STENCIL_TEST):Le(n.STENCIL_TEST))},setMask:function(nt){de!==nt&&!N&&(n.stencilMask(nt),de=nt)},setFunc:function(nt,Bt,Yt){(K!==nt||te!==Bt||ge!==Yt)&&(n.stencilFunc(nt,Bt,Yt),K=nt,te=Bt,ge=Yt)},setOp:function(nt,Bt,Yt){(pe!==nt||Be!==Bt||pt!==Yt)&&(n.stencilOp(nt,Bt,Yt),pe=nt,Be=Bt,pt=Yt)},setLocked:function(nt){N=nt},setClear:function(nt){St!==nt&&(n.clearStencil(nt),St=nt)},reset:function(){N=!1,de=null,K=null,te=null,ge=null,pe=null,Be=null,pt=null,St=null}}}const s=new t,r=new i,o=new a,h=new WeakMap,c=new WeakMap;let d={},p={},f=new WeakMap,m=[],v=null,M=!1,_=null,g=null,C=null,R=null,S=null,k=null,D=null,L=new We(0,0,0),z=0,A=!1,b=null,U=null,Y=null,q=null,Z=null;const ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,re=0;const J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(J)[1]),$=re>=1):J.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),$=re>=2);let he=null,xe={};const Re=n.getParameter(n.SCISSOR_BOX),Xe=n.getParameter(n.VIEWPORT),it=new xt().fromArray(Re),Q=new xt().fromArray(Xe);function oe(N,de,K,te){const ge=new Uint8Array(4),pe=n.createTexture();n.bindTexture(N,pe),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Be=0;Be<K;Be++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(de,0,n.RGBA,1,1,te,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(de+Be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return pe}const be={};be[n.TEXTURE_2D]=oe(n.TEXTURE_2D,n.TEXTURE_2D,1),be[n.TEXTURE_CUBE_MAP]=oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[n.TEXTURE_2D_ARRAY]=oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),be[n.TEXTURE_3D]=oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ue(n.DEPTH_TEST),r.setFunc(Ai),Ye(!1),Ke(Kr),ue(n.CULL_FACE),H(Nn);function ue(N){d[N]!==!0&&(n.enable(N),d[N]=!0)}function Le(N){d[N]!==!1&&(n.disable(N),d[N]=!1)}function Oe(N,de){return p[N]!==de?(n.bindFramebuffer(N,de),p[N]=de,N===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=de),N===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=de),!0):!1}function qe(N,de){let K=m,te=!1;if(N){K=f.get(de),K===void 0&&(K=[],f.set(de,K));const ge=N.textures;if(K.length!==ge.length||K[0]!==n.COLOR_ATTACHMENT0){for(let pe=0,Be=ge.length;pe<Be;pe++)K[pe]=n.COLOR_ATTACHMENT0+pe;K.length=ge.length,te=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,te=!0);te&&n.drawBuffers(K)}function ut(N){return v!==N?(n.useProgram(N),v=N,!0):!1}const Ze={[Zn]:n.FUNC_ADD,[nl]:n.FUNC_SUBTRACT,[il]:n.FUNC_REVERSE_SUBTRACT};Ze[al]=n.MIN,Ze[sl]=n.MAX;const gt={[rl]:n.ZERO,[ol]:n.ONE,[cl]:n.SRC_COLOR,[Hs]:n.SRC_ALPHA,[pl]:n.SRC_ALPHA_SATURATE,[ul]:n.DST_COLOR,[dl]:n.DST_ALPHA,[ll]:n.ONE_MINUS_SRC_COLOR,[Gs]:n.ONE_MINUS_SRC_ALPHA,[fl]:n.ONE_MINUS_DST_COLOR,[hl]:n.ONE_MINUS_DST_ALPHA,[ml]:n.CONSTANT_COLOR,[gl]:n.ONE_MINUS_CONSTANT_COLOR,[xl]:n.CONSTANT_ALPHA,[_l]:n.ONE_MINUS_CONSTANT_ALPHA};function H(N,de,K,te,ge,pe,Be,pt,St,nt){if(N===Nn){M===!0&&(Le(n.BLEND),M=!1);return}if(M===!1&&(ue(n.BLEND),M=!0),N!==tl){if(N!==_||nt!==A){if((g!==Zn||S!==Zn)&&(n.blendEquation(n.FUNC_ADD),g=Zn,S=Zn),nt)switch(N){case bi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jr:n.blendFunc(n.ONE,n.ONE);break;case Zr:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $r:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case bi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Zr:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $r:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}C=null,R=null,k=null,D=null,L.set(0,0,0),z=0,_=N,A=nt}return}ge=ge||de,pe=pe||K,Be=Be||te,(de!==g||ge!==S)&&(n.blendEquationSeparate(Ze[de],Ze[ge]),g=de,S=ge),(K!==C||te!==R||pe!==k||Be!==D)&&(n.blendFuncSeparate(gt[K],gt[te],gt[pe],gt[Be]),C=K,R=te,k=pe,D=Be),(pt.equals(L)===!1||St!==z)&&(n.blendColor(pt.r,pt.g,pt.b,St),L.copy(pt),z=St),_=N,A=!1}function Ut(N,de){N.side===ln?Le(n.CULL_FACE):ue(n.CULL_FACE);let K=N.side===It;de&&(K=!K),Ye(K),N.blending===bi&&N.transparent===!1?H(Nn):H(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),s.setMask(N.colorWrite);const te=N.stencilWrite;o.setTest(te),te&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ot(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):Le(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(N){b!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),b=N)}function Ke(N){N!==Qc?(ue(n.CULL_FACE),N!==U&&(N===Kr?n.cullFace(n.BACK):N===el?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Le(n.CULL_FACE),U=N}function De(N){N!==Y&&($&&n.lineWidth(N),Y=N)}function ot(N,de,K){N?(ue(n.POLYGON_OFFSET_FILL),(q!==de||Z!==K)&&(n.polygonOffset(de,K),q=de,Z=K)):Le(n.POLYGON_OFFSET_FILL)}function Pe(N){N?ue(n.SCISSOR_TEST):Le(n.SCISSOR_TEST)}function P(N){N===void 0&&(N=n.TEXTURE0+ne-1),he!==N&&(n.activeTexture(N),he=N)}function w(N,de,K){K===void 0&&(he===null?K=n.TEXTURE0+ne-1:K=he);let te=xe[K];te===void 0&&(te={type:void 0,texture:void 0},xe[K]=te),(te.type!==N||te.texture!==de)&&(he!==K&&(n.activeTexture(K),he=K),n.bindTexture(N,de||be[N]),te.type=N,te.texture=de)}function V(){const N=xe[he];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ee(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $e(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ae(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ie(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ue(N){it.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),it.copy(N))}function Me(N){Q.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Q.copy(N))}function Je(N,de){let K=c.get(de);K===void 0&&(K=new WeakMap,c.set(de,K));let te=K.get(N);te===void 0&&(te=n.getUniformBlockIndex(de,N.name),K.set(N,te))}function He(N,de){const te=c.get(de).get(N);h.get(de)!==te&&(n.uniformBlockBinding(de,te,N.__bindingPointIndex),h.set(de,te))}function at(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},he=null,xe={},p={},f=new WeakMap,m=[],v=null,M=!1,_=null,g=null,C=null,R=null,S=null,k=null,D=null,L=new We(0,0,0),z=0,A=!1,b=null,U=null,Y=null,q=null,Z=null,it.set(0,0,n.canvas.width,n.canvas.height),Q.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ue,disable:Le,bindFramebuffer:Oe,drawBuffers:qe,useProgram:ut,setBlending:H,setMaterial:Ut,setFlipSided:Ye,setCullFace:Ke,setLineWidth:De,setPolygonOffset:ot,setScissorTest:Pe,activeTexture:P,bindTexture:w,unbindTexture:V,compressedTexImage2D:ee,compressedTexImage3D:ie,texImage2D:ve,texImage3D:Ie,updateUBOMapping:Je,uniformBlockBinding:He,texStorage2D:$e,texStorage3D:ae,texSubImage2D:j,texSubImage3D:Te,compressedTexSubImage2D:fe,compressedTexSubImage3D:_e,scissor:Ue,viewport:Me,reset:at}}function qo(n,e,t,i){const a=k0(i);switch(t){case pc:return n*e;case gc:return n*e;case xc:return n*e*2;case Ur:return n*e/a.components*a.byteLength;case zr:return n*e/a.components*a.byteLength;case _c:return n*e*2/a.components*a.byteLength;case Nr:return n*e*2/a.components*a.byteLength;case mc:return n*e*3/a.components*a.byteLength;case tn:return n*e*4/a.components*a.byteLength;case Or:return n*e*4/a.components*a.byteLength;case Wa:case Xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case qa:case Ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case tr:case ir:return Math.max(n,16)*Math.max(e,8)/4;case er:case nr:return Math.max(n,8)*Math.max(e,8)/2;case ar:case sr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case rr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case or:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cr:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case lr:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case dr:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case hr:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ur:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case fr:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case pr:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case mr:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case gr:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case xr:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case _r:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case vr:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Mr:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ka:case wr:case yr:return Math.ceil(n/4)*Math.ceil(e/4)*16;case vc:case Sr:return Math.ceil(n/4)*Math.ceil(e/4)*8;case br:case Er:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function k0(n){switch(n){case Sn:case hc:return{byteLength:1,components:1};case ia:case uc:case sa:return{byteLength:2,components:1};case Ir:case Lr:return{byteLength:2,components:4};case ei:case Dr:case hn:return{byteLength:4,components:1};case fc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function H0(n,e,t,i,a,s,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,d=new WeakMap;let p;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,w){return m?new OffscreenCanvas(P,w):ja("canvas")}function M(P,w,V){let ee=1;const ie=Pe(P);if((ie.width>V||ie.height>V)&&(ee=V/Math.max(ie.width,ie.height)),ee<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const j=Math.floor(ee*ie.width),Te=Math.floor(ee*ie.height);p===void 0&&(p=v(j,Te));const fe=w?v(j,Te):p;return fe.width=j,fe.height=Te,fe.getContext("2d").drawImage(P,0,0,j,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+j+"x"+Te+")."),fe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),P;return P}function _(P){return P.generateMipmaps}function g(P){n.generateMipmap(P)}function C(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function R(P,w,V,ee,ie=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let j=w;if(w===n.RED&&(V===n.FLOAT&&(j=n.R32F),V===n.HALF_FLOAT&&(j=n.R16F),V===n.UNSIGNED_BYTE&&(j=n.R8)),w===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.R8UI),V===n.UNSIGNED_SHORT&&(j=n.R16UI),V===n.UNSIGNED_INT&&(j=n.R32UI),V===n.BYTE&&(j=n.R8I),V===n.SHORT&&(j=n.R16I),V===n.INT&&(j=n.R32I)),w===n.RG&&(V===n.FLOAT&&(j=n.RG32F),V===n.HALF_FLOAT&&(j=n.RG16F),V===n.UNSIGNED_BYTE&&(j=n.RG8)),w===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.RG8UI),V===n.UNSIGNED_SHORT&&(j=n.RG16UI),V===n.UNSIGNED_INT&&(j=n.RG32UI),V===n.BYTE&&(j=n.RG8I),V===n.SHORT&&(j=n.RG16I),V===n.INT&&(j=n.RG32I)),w===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.RGB8UI),V===n.UNSIGNED_SHORT&&(j=n.RGB16UI),V===n.UNSIGNED_INT&&(j=n.RGB32UI),V===n.BYTE&&(j=n.RGB8I),V===n.SHORT&&(j=n.RGB16I),V===n.INT&&(j=n.RGB32I)),w===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),V===n.UNSIGNED_INT&&(j=n.RGBA32UI),V===n.BYTE&&(j=n.RGBA8I),V===n.SHORT&&(j=n.RGBA16I),V===n.INT&&(j=n.RGBA32I)),w===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),w===n.RGBA){const Te=ie?ns:Qe.getTransfer(ee);V===n.FLOAT&&(j=n.RGBA32F),V===n.HALF_FLOAT&&(j=n.RGBA16F),V===n.UNSIGNED_BYTE&&(j=Te===rt?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function S(P,w){let V;return P?w===null||w===ei||w===Pi?V=n.DEPTH24_STENCIL8:w===hn?V=n.DEPTH32F_STENCIL8:w===ia&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ei||w===Pi?V=n.DEPTH_COMPONENT24:w===hn?V=n.DEPTH_COMPONENT32F:w===ia&&(V=n.DEPTH_COMPONENT16),V}function k(P,w){return _(P)===!0||P.isFramebufferTexture&&P.minFilter!==Vt&&P.minFilter!==dn?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function D(P){const w=P.target;w.removeEventListener("dispose",D),z(w),w.isVideoTexture&&d.delete(w)}function L(P){const w=P.target;w.removeEventListener("dispose",L),b(w)}function z(P){const w=i.get(P);if(w.__webglInit===void 0)return;const V=P.source,ee=f.get(V);if(ee){const ie=ee[w.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&A(P),Object.keys(ee).length===0&&f.delete(V)}i.remove(P)}function A(P){const w=i.get(P);n.deleteTexture(w.__webglTexture);const V=P.source,ee=f.get(V);delete ee[w.__cacheKey],r.memory.textures--}function b(P){const w=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(w.__webglFramebuffer[ee]))for(let ie=0;ie<w.__webglFramebuffer[ee].length;ie++)n.deleteFramebuffer(w.__webglFramebuffer[ee][ie]);else n.deleteFramebuffer(w.__webglFramebuffer[ee]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[ee])}else{if(Array.isArray(w.__webglFramebuffer))for(let ee=0;ee<w.__webglFramebuffer.length;ee++)n.deleteFramebuffer(w.__webglFramebuffer[ee]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ee=0;ee<w.__webglColorRenderbuffer.length;ee++)w.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[ee]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const V=P.textures;for(let ee=0,ie=V.length;ee<ie;ee++){const j=i.get(V[ee]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),r.memory.textures--),i.remove(V[ee])}i.remove(P)}let U=0;function Y(){U=0}function q(){const P=U;return P>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+a.maxTextures),U+=1,P}function Z(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function ne(P,w){const V=i.get(P);if(P.isVideoTexture&&De(P),P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){const ee=P.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(V,P,w);return}}t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+w)}function $(P,w){const V=i.get(P);if(P.version>0&&V.__version!==P.version){Q(V,P,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+w)}function re(P,w){const V=i.get(P);if(P.version>0&&V.__version!==P.version){Q(V,P,w);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+w)}function J(P,w){const V=i.get(P);if(P.version>0&&V.__version!==P.version){oe(V,P,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+w)}const he={[js]:n.REPEAT,[jn]:n.CLAMP_TO_EDGE,[Qs]:n.MIRRORED_REPEAT},xe={[Vt]:n.NEAREST,[Al]:n.NEAREST_MIPMAP_NEAREST,[xa]:n.NEAREST_MIPMAP_LINEAR,[dn]:n.LINEAR,[os]:n.LINEAR_MIPMAP_NEAREST,[Qn]:n.LINEAR_MIPMAP_LINEAR},Re={[Dl]:n.NEVER,[Ol]:n.ALWAYS,[Il]:n.LESS,[wc]:n.LEQUAL,[Ll]:n.EQUAL,[Nl]:n.GEQUAL,[Ul]:n.GREATER,[zl]:n.NOTEQUAL};function Xe(P,w){if(w.type===hn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===dn||w.magFilter===os||w.magFilter===xa||w.magFilter===Qn||w.minFilter===dn||w.minFilter===os||w.minFilter===xa||w.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,he[w.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,he[w.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,he[w.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,xe[w.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,xe[w.minFilter]),w.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Re[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Vt||w.minFilter!==xa&&w.minFilter!==Qn||w.type===hn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function it(P,w){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",D));const ee=w.source;let ie=f.get(ee);ie===void 0&&(ie={},f.set(ee,ie));const j=Z(w);if(j!==P.__cacheKey){ie[j]===void 0&&(ie[j]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,V=!0),ie[j].usedTimes++;const Te=ie[P.__cacheKey];Te!==void 0&&(ie[P.__cacheKey].usedTimes--,Te.usedTimes===0&&A(w)),P.__cacheKey=j,P.__webglTexture=ie[j].texture}return V}function Q(P,w,V){let ee=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ee=n.TEXTURE_3D);const ie=it(P,w),j=w.source;t.bindTexture(ee,P.__webglTexture,n.TEXTURE0+V);const Te=i.get(j);if(j.version!==Te.__version||ie===!0){t.activeTexture(n.TEXTURE0+V);const fe=Qe.getPrimaries(Qe.workingColorSpace),_e=w.colorSpace===zn?null:Qe.getPrimaries(w.colorSpace),$e=w.colorSpace===zn||fe===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let ae=M(w.image,!1,a.maxTextureSize);ae=ot(w,ae);const ve=s.convert(w.format,w.colorSpace),Ie=s.convert(w.type);let Ue=R(w.internalFormat,ve,Ie,w.colorSpace,w.isVideoTexture);Xe(ee,w);let Me;const Je=w.mipmaps,He=w.isVideoTexture!==!0,at=Te.__version===void 0||ie===!0,N=j.dataReady,de=k(w,ae);if(w.isDepthTexture)Ue=S(w.format===Di,w.type),at&&(He?t.texStorage2D(n.TEXTURE_2D,1,Ue,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Ue,ae.width,ae.height,0,ve,Ie,null));else if(w.isDataTexture)if(Je.length>0){He&&at&&t.texStorage2D(n.TEXTURE_2D,de,Ue,Je[0].width,Je[0].height);for(let K=0,te=Je.length;K<te;K++)Me=Je[K],He?N&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,Me.width,Me.height,ve,Ie,Me.data):t.texImage2D(n.TEXTURE_2D,K,Ue,Me.width,Me.height,0,ve,Ie,Me.data);w.generateMipmaps=!1}else He?(at&&t.texStorage2D(n.TEXTURE_2D,de,Ue,ae.width,ae.height),N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,ve,Ie,ae.data)):t.texImage2D(n.TEXTURE_2D,0,Ue,ae.width,ae.height,0,ve,Ie,ae.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){He&&at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,Ue,Je[0].width,Je[0].height,ae.depth);for(let K=0,te=Je.length;K<te;K++)if(Me=Je[K],w.format!==tn)if(ve!==null)if(He){if(N)if(w.layerUpdates.size>0){const ge=qo(Me.width,Me.height,w.format,w.type);for(const pe of w.layerUpdates){const Be=Me.data.subarray(pe*ge/Me.data.BYTES_PER_ELEMENT,(pe+1)*ge/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,pe,Me.width,Me.height,1,ve,Be)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Me.width,Me.height,ae.depth,ve,Me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,Ue,Me.width,Me.height,ae.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Me.width,Me.height,ae.depth,ve,Ie,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,Ue,Me.width,Me.height,ae.depth,0,ve,Ie,Me.data)}else{He&&at&&t.texStorage2D(n.TEXTURE_2D,de,Ue,Je[0].width,Je[0].height);for(let K=0,te=Je.length;K<te;K++)Me=Je[K],w.format!==tn?ve!==null?He?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,Me.width,Me.height,ve,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,K,Ue,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?N&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,Me.width,Me.height,ve,Ie,Me.data):t.texImage2D(n.TEXTURE_2D,K,Ue,Me.width,Me.height,0,ve,Ie,Me.data)}else if(w.isDataArrayTexture)if(He){if(at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,Ue,ae.width,ae.height,ae.depth),N)if(w.layerUpdates.size>0){const K=qo(ae.width,ae.height,w.format,w.type);for(const te of w.layerUpdates){const ge=ae.data.subarray(te*K/ae.data.BYTES_PER_ELEMENT,(te+1)*K/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,te,ae.width,ae.height,1,ve,Ie,ge)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,ve,Ie,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,ae.width,ae.height,ae.depth,0,ve,Ie,ae.data);else if(w.isData3DTexture)He?(at&&t.texStorage3D(n.TEXTURE_3D,de,Ue,ae.width,ae.height,ae.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,ve,Ie,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Ue,ae.width,ae.height,ae.depth,0,ve,Ie,ae.data);else if(w.isFramebufferTexture){if(at)if(He)t.texStorage2D(n.TEXTURE_2D,de,Ue,ae.width,ae.height);else{let K=ae.width,te=ae.height;for(let ge=0;ge<de;ge++)t.texImage2D(n.TEXTURE_2D,ge,Ue,K,te,0,ve,Ie,null),K>>=1,te>>=1}}else if(Je.length>0){if(He&&at){const K=Pe(Je[0]);t.texStorage2D(n.TEXTURE_2D,de,Ue,K.width,K.height)}for(let K=0,te=Je.length;K<te;K++)Me=Je[K],He?N&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,ve,Ie,Me):t.texImage2D(n.TEXTURE_2D,K,Ue,ve,Ie,Me);w.generateMipmaps=!1}else if(He){if(at){const K=Pe(ae);t.texStorage2D(n.TEXTURE_2D,de,Ue,K.width,K.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,Ie,ae)}else t.texImage2D(n.TEXTURE_2D,0,Ue,ve,Ie,ae);_(w)&&g(ee),Te.__version=j.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function oe(P,w,V){if(w.image.length!==6)return;const ee=it(P,w),ie=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+V);const j=i.get(ie);if(ie.version!==j.__version||ee===!0){t.activeTexture(n.TEXTURE0+V);const Te=Qe.getPrimaries(Qe.workingColorSpace),fe=w.colorSpace===zn?null:Qe.getPrimaries(w.colorSpace),_e=w.colorSpace===zn||Te===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const $e=w.isCompressedTexture||w.image[0].isCompressedTexture,ae=w.image[0]&&w.image[0].isDataTexture,ve=[];for(let te=0;te<6;te++)!$e&&!ae?ve[te]=M(w.image[te],!0,a.maxCubemapSize):ve[te]=ae?w.image[te].image:w.image[te],ve[te]=ot(w,ve[te]);const Ie=ve[0],Ue=s.convert(w.format,w.colorSpace),Me=s.convert(w.type),Je=R(w.internalFormat,Ue,Me,w.colorSpace),He=w.isVideoTexture!==!0,at=j.__version===void 0||ee===!0,N=ie.dataReady;let de=k(w,Ie);Xe(n.TEXTURE_CUBE_MAP,w);let K;if($e){He&&at&&t.texStorage2D(n.TEXTURE_CUBE_MAP,de,Je,Ie.width,Ie.height);for(let te=0;te<6;te++){K=ve[te].mipmaps;for(let ge=0;ge<K.length;ge++){const pe=K[ge];w.format!==tn?Ue!==null?He?N&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge,0,0,pe.width,pe.height,Ue,pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge,Je,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge,0,0,pe.width,pe.height,Ue,Me,pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge,Je,pe.width,pe.height,0,Ue,Me,pe.data)}}}else{if(K=w.mipmaps,He&&at){K.length>0&&de++;const te=Pe(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,de,Je,te.width,te.height)}for(let te=0;te<6;te++)if(ae){He?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ve[te].width,ve[te].height,Ue,Me,ve[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Je,ve[te].width,ve[te].height,0,Ue,Me,ve[te].data);for(let ge=0;ge<K.length;ge++){const Be=K[ge].image[te].image;He?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge+1,0,0,Be.width,Be.height,Ue,Me,Be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge+1,Je,Be.width,Be.height,0,Ue,Me,Be.data)}}else{He?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ue,Me,ve[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Je,Ue,Me,ve[te]);for(let ge=0;ge<K.length;ge++){const pe=K[ge];He?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge+1,0,0,Ue,Me,pe.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge+1,Je,Ue,Me,pe.image[te])}}}_(w)&&g(n.TEXTURE_CUBE_MAP),j.__version=ie.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function be(P,w,V,ee,ie,j){const Te=s.convert(V.format,V.colorSpace),fe=s.convert(V.type),_e=R(V.internalFormat,Te,fe,V.colorSpace),$e=i.get(w),ae=i.get(V);if(ae.__renderTarget=w,!$e.__hasExternalTextures){const ve=Math.max(1,w.width>>j),Ie=Math.max(1,w.height>>j);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,j,_e,ve,Ie,w.depth,0,Te,fe,null):t.texImage2D(ie,j,_e,ve,Ie,0,Te,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),Ke(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,ie,ae.__webglTexture,0,Ye(w)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,ie,ae.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(P,w,V){if(n.bindRenderbuffer(n.RENDERBUFFER,P),w.depthBuffer){const ee=w.depthTexture,ie=ee&&ee.isDepthTexture?ee.type:null,j=S(w.stencilBuffer,ie),Te=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=Ye(w);Ke(w)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,j,w.width,w.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,j,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,j,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,P)}else{const ee=w.textures;for(let ie=0;ie<ee.length;ie++){const j=ee[ie],Te=s.convert(j.format,j.colorSpace),fe=s.convert(j.type),_e=R(j.internalFormat,Te,fe,j.colorSpace),$e=Ye(w);V&&Ke(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,$e,_e,w.width,w.height):Ke(w)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$e,_e,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,_e,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Le(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(w.depthTexture);ee.__renderTarget=w,(!ee.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ne(w.depthTexture,0);const ie=ee.__webglTexture,j=Ye(w);if(w.depthTexture.format===Ei)Ke(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0);else if(w.depthTexture.format===Di)Ke(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Oe(P){const w=i.get(P),V=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const ee=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ee){const ie=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ee.removeEventListener("dispose",ie)};ee.addEventListener("dispose",ie),w.__depthDisposeCallback=ie}w.__boundDepthTexture=ee}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Le(w.__webglFramebuffer,P)}else if(V){w.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[ee]),w.__webglDepthbuffer[ee]===void 0)w.__webglDepthbuffer[ee]=n.createRenderbuffer(),ue(w.__webglDepthbuffer[ee],P,!1);else{const ie=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=w.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,j)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),ue(w.__webglDepthbuffer,P,!1);else{const ee=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,ie)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function qe(P,w,V){const ee=i.get(P);w!==void 0&&be(ee.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Oe(P)}function ut(P){const w=P.texture,V=i.get(P),ee=i.get(w);P.addEventListener("dispose",L);const ie=P.textures,j=P.isWebGLCubeRenderTarget===!0,Te=ie.length>1;if(Te||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=w.version,r.memory.textures++),j){V.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer[fe]=[];for(let _e=0;_e<w.mipmaps.length;_e++)V.__webglFramebuffer[fe][_e]=n.createFramebuffer()}else V.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer=[];for(let fe=0;fe<w.mipmaps.length;fe++)V.__webglFramebuffer[fe]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Te)for(let fe=0,_e=ie.length;fe<_e;fe++){const $e=i.get(ie[fe]);$e.__webglTexture===void 0&&($e.__webglTexture=n.createTexture(),r.memory.textures++)}if(P.samples>0&&Ke(P)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let fe=0;fe<ie.length;fe++){const _e=ie[fe];V.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[fe]);const $e=s.convert(_e.format,_e.colorSpace),ae=s.convert(_e.type),ve=R(_e.internalFormat,$e,ae,_e.colorSpace,P.isXRRenderTarget===!0),Ie=Ye(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,ve,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,V.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),ue(V.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),Xe(n.TEXTURE_CUBE_MAP,w);for(let fe=0;fe<6;fe++)if(w.mipmaps&&w.mipmaps.length>0)for(let _e=0;_e<w.mipmaps.length;_e++)be(V.__webglFramebuffer[fe][_e],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,_e);else be(V.__webglFramebuffer[fe],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);_(w)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let fe=0,_e=ie.length;fe<_e;fe++){const $e=ie[fe],ae=i.get($e);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),Xe(n.TEXTURE_2D,$e),be(V.__webglFramebuffer,P,$e,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),_($e)&&g(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(fe=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,ee.__webglTexture),Xe(fe,w),w.mipmaps&&w.mipmaps.length>0)for(let _e=0;_e<w.mipmaps.length;_e++)be(V.__webglFramebuffer[_e],P,w,n.COLOR_ATTACHMENT0,fe,_e);else be(V.__webglFramebuffer,P,w,n.COLOR_ATTACHMENT0,fe,0);_(w)&&g(fe),t.unbindTexture()}P.depthBuffer&&Oe(P)}function Ze(P){const w=P.textures;for(let V=0,ee=w.length;V<ee;V++){const ie=w[V];if(_(ie)){const j=C(P),Te=i.get(ie).__webglTexture;t.bindTexture(j,Te),g(j),t.unbindTexture()}}}const gt=[],H=[];function Ut(P){if(P.samples>0){if(Ke(P)===!1){const w=P.textures,V=P.width,ee=P.height;let ie=n.COLOR_BUFFER_BIT;const j=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(P),fe=w.length>1;if(fe)for(let _e=0;_e<w.length;_e++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let _e=0;_e<w.length;_e++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[_e]);const $e=i.get(w[_e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$e,0)}n.blitFramebuffer(0,0,V,ee,0,0,V,ee,ie,n.NEAREST),h===!0&&(gt.length=0,H.length=0,gt.push(n.COLOR_ATTACHMENT0+_e),P.depthBuffer&&P.resolveDepthBuffer===!1&&(gt.push(j),H.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,H)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,gt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let _e=0;_e<w.length;_e++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,Te.__webglColorRenderbuffer[_e]);const $e=i.get(w[_e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,$e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&h){const w=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Ye(P){return Math.min(a.maxSamples,P.samples)}function Ke(P){const w=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function De(P){const w=r.render.frame;d.get(P)!==w&&(d.set(P,w),P.update())}function ot(P,w){const V=P.colorSpace,ee=P.format,ie=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==Li&&V!==zn&&(Qe.getTransfer(V)===rt?(ee!==tn||ie!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),w}function Pe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=Y,this.setTexture2D=ne,this.setTexture2DArray=$,this.setTexture3D=re,this.setTextureCube=J,this.rebindTextures=qe,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Ke}function G0(n,e){function t(i,a=zn){let s;const r=Qe.getTransfer(a);if(i===Sn)return n.UNSIGNED_BYTE;if(i===Ir)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Lr)return n.UNSIGNED_SHORT_5_5_5_1;if(i===fc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===hc)return n.BYTE;if(i===uc)return n.SHORT;if(i===ia)return n.UNSIGNED_SHORT;if(i===Dr)return n.INT;if(i===ei)return n.UNSIGNED_INT;if(i===hn)return n.FLOAT;if(i===sa)return n.HALF_FLOAT;if(i===pc)return n.ALPHA;if(i===mc)return n.RGB;if(i===tn)return n.RGBA;if(i===gc)return n.LUMINANCE;if(i===xc)return n.LUMINANCE_ALPHA;if(i===Ei)return n.DEPTH_COMPONENT;if(i===Di)return n.DEPTH_STENCIL;if(i===Ur)return n.RED;if(i===zr)return n.RED_INTEGER;if(i===_c)return n.RG;if(i===Nr)return n.RG_INTEGER;if(i===Or)return n.RGBA_INTEGER;if(i===Wa||i===Xa||i===qa||i===Ya)if(r===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Wa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Wa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ya)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===er||i===tr||i===nr||i===ir)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===er)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===tr)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===nr)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ir)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ar||i===sr||i===rr)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ar||i===sr)return r===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===rr)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===or||i===cr||i===lr||i===dr||i===hr||i===ur||i===fr||i===pr||i===mr||i===gr||i===xr||i===_r||i===vr||i===Mr)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===or)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cr)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===lr)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===dr)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hr)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ur)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fr)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===pr)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===mr)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===gr)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xr)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_r)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vr)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Mr)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ka||i===wr||i===yr)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ka)return r===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wr)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yr)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vc||i===Sr||i===br||i===Er)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ka)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Sr)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===br)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Er)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Pi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class V0 extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class G extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const W0={type:"move"};class Ns{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new G,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new G,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new G,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,s=null,r=null;const o=this._targetRay,h=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const M of e.hand.values()){const _=t.getJointPose(M,i),g=this._getHandJoint(c,M);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}const d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],f=d.position.distanceTo(p.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1));o!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(W0)))}return o!==null&&(o.visible=a!==null),h!==null&&(h.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new G;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const X0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,q0=`
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

}`;class Y0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const a=new Ct,s=e.properties.get(a);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new bn({vertexShader:X0,fragmentShader:q0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new Oi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class K0 extends Ui{constructor(e,t){super();const i=this;let a=null,s=1,r=null,o="local-floor",h=1,c=null,d=null,p=null,f=null,m=null,v=null;const M=new Y0,_=t.getContextAttributes();let g=null,C=null;const R=[],S=[],k=new Ce;let D=null;const L=new Qt;L.viewport=new xt;const z=new Qt;z.viewport=new xt;const A=[L,z],b=new V0;let U=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let oe=R[Q];return oe===void 0&&(oe=new Ns,R[Q]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Q){let oe=R[Q];return oe===void 0&&(oe=new Ns,R[Q]=oe),oe.getGripSpace()},this.getHand=function(Q){let oe=R[Q];return oe===void 0&&(oe=new Ns,R[Q]=oe),oe.getHandSpace()};function q(Q){const oe=S.indexOf(Q.inputSource);if(oe===-1)return;const be=R[oe];be!==void 0&&(be.update(Q.inputSource,Q.frame,c||r),be.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Z(){a.removeEventListener("select",q),a.removeEventListener("selectstart",q),a.removeEventListener("selectend",q),a.removeEventListener("squeeze",q),a.removeEventListener("squeezestart",q),a.removeEventListener("squeezeend",q),a.removeEventListener("end",Z),a.removeEventListener("inputsourceschange",ne);for(let Q=0;Q<R.length;Q++){const oe=S[Q];oe!==null&&(S[Q]=null,R[Q].disconnect(oe))}U=null,Y=null,M.reset(),e.setRenderTarget(g),m=null,f=null,p=null,a=null,C=null,it.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(k.width,k.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=async function(Q){if(a=Q,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",q),a.addEventListener("selectstart",q),a.addEventListener("selectend",q),a.addEventListener("squeeze",q),a.addEventListener("squeezestart",q),a.addEventListener("squeezeend",q),a.addEventListener("end",Z),a.addEventListener("inputsourceschange",ne),_.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(k),a.renderState.layers===void 0){const oe={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(a,t,oe),a.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),C=new ti(m.framebufferWidth,m.framebufferHeight,{format:tn,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let oe=null,be=null,ue=null;_.depth&&(ue=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=_.stencil?Di:Ei,be=_.stencil?Pi:ei);const Le={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};p=new XRWebGLBinding(a,t),f=p.createProjectionLayer(Le),a.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),C=new ti(f.textureWidth,f.textureHeight,{format:tn,type:Sn,depthTexture:new zc(f.textureWidth,f.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(h),c=null,r=await a.requestReferenceSpace(o),it.setContext(a),it.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ne(Q){for(let oe=0;oe<Q.removed.length;oe++){const be=Q.removed[oe],ue=S.indexOf(be);ue>=0&&(S[ue]=null,R[ue].disconnect(be))}for(let oe=0;oe<Q.added.length;oe++){const be=Q.added[oe];let ue=S.indexOf(be);if(ue===-1){for(let Oe=0;Oe<R.length;Oe++)if(Oe>=S.length){S.push(be),ue=Oe;break}else if(S[Oe]===null){S[Oe]=be,ue=Oe;break}if(ue===-1)break}const Le=R[ue];Le&&Le.connect(be)}}const $=new y,re=new y;function J(Q,oe,be){$.setFromMatrixPosition(oe.matrixWorld),re.setFromMatrixPosition(be.matrixWorld);const ue=$.distanceTo(re),Le=oe.projectionMatrix.elements,Oe=be.projectionMatrix.elements,qe=Le[14]/(Le[10]-1),ut=Le[14]/(Le[10]+1),Ze=(Le[9]+1)/Le[5],gt=(Le[9]-1)/Le[5],H=(Le[8]-1)/Le[0],Ut=(Oe[8]+1)/Oe[0],Ye=qe*H,Ke=qe*Ut,De=ue/(-H+Ut),ot=De*-H;if(oe.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ot),Q.translateZ(De),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Le[10]===-1)Q.projectionMatrix.copy(oe.projectionMatrix),Q.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Pe=qe+De,P=ut+De,w=Ye-ot,V=Ke+(ue-ot),ee=Ze*ut/P*Pe,ie=gt*ut/P*Pe;Q.projectionMatrix.makePerspective(w,V,ee,ie,Pe,P),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function he(Q,oe){oe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(oe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(a===null)return;let oe=Q.near,be=Q.far;M.texture!==null&&(M.depthNear>0&&(oe=M.depthNear),M.depthFar>0&&(be=M.depthFar)),b.near=z.near=L.near=oe,b.far=z.far=L.far=be,(U!==b.near||Y!==b.far)&&(a.updateRenderState({depthNear:b.near,depthFar:b.far}),U=b.near,Y=b.far),L.layers.mask=Q.layers.mask|2,z.layers.mask=Q.layers.mask|4,b.layers.mask=L.layers.mask|z.layers.mask;const ue=Q.parent,Le=b.cameras;he(b,ue);for(let Oe=0;Oe<Le.length;Oe++)he(Le[Oe],ue);Le.length===2?J(b,L,z):b.projectionMatrix.copy(L.projectionMatrix),xe(Q,b,ue)};function xe(Q,oe,be){be===null?Q.matrix.copy(oe.matrixWorld):(Q.matrix.copy(be.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(oe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(oe.projectionMatrix),Q.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Tr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&m===null))return h},this.setFoveation=function(Q){h=Q,f!==null&&(f.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(b)};let Re=null;function Xe(Q,oe){if(d=oe.getViewerPose(c||r),v=oe,d!==null){const be=d.views;m!==null&&(e.setRenderTargetFramebuffer(C,m.framebuffer),e.setRenderTarget(C));let ue=!1;be.length!==b.cameras.length&&(b.cameras.length=0,ue=!0);for(let Oe=0;Oe<be.length;Oe++){const qe=be[Oe];let ut=null;if(m!==null)ut=m.getViewport(qe);else{const gt=p.getViewSubImage(f,qe);ut=gt.viewport,Oe===0&&(e.setRenderTargetTextures(C,gt.colorTexture,f.ignoreDepthValues?void 0:gt.depthStencilTexture),e.setRenderTarget(C))}let Ze=A[Oe];Ze===void 0&&(Ze=new Qt,Ze.layers.enable(Oe),Ze.viewport=new xt,A[Oe]=Ze),Ze.matrix.fromArray(qe.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(qe.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(ut.x,ut.y,ut.width,ut.height),Oe===0&&(b.matrix.copy(Ze.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ue===!0&&b.cameras.push(Ze)}const Le=a.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const Oe=p.getDepthInformation(be[0]);Oe&&Oe.isValid&&Oe.texture&&M.init(e,Oe,a.renderState)}}for(let be=0;be<R.length;be++){const ue=S[be],Le=R[be];ue!==null&&Le!==void 0&&Le.update(ue,oe,c||r)}Re&&Re(Q,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),v=null}const it=new Lc;it.setAnimationLoop(Xe),this.setAnimationLoop=function(Q){Re=Q},this.dispose=function(){}}}const qn=new fn,J0=new ht;function Z0(n,e){function t(_,g){_.matrixAutoUpdate===!0&&_.updateMatrix(),g.value.copy(_.matrix)}function i(_,g){g.color.getRGB(_.fogColor.value,Pc(n)),g.isFog?(_.fogNear.value=g.near,_.fogFar.value=g.far):g.isFogExp2&&(_.fogDensity.value=g.density)}function a(_,g,C,R,S){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(_,g):g.isMeshToonMaterial?(s(_,g),p(_,g)):g.isMeshPhongMaterial?(s(_,g),d(_,g)):g.isMeshStandardMaterial?(s(_,g),f(_,g),g.isMeshPhysicalMaterial&&m(_,g,S)):g.isMeshMatcapMaterial?(s(_,g),v(_,g)):g.isMeshDepthMaterial?s(_,g):g.isMeshDistanceMaterial?(s(_,g),M(_,g)):g.isMeshNormalMaterial?s(_,g):g.isLineBasicMaterial?(r(_,g),g.isLineDashedMaterial&&o(_,g)):g.isPointsMaterial?h(_,g,C,R):g.isSpriteMaterial?c(_,g):g.isShadowMaterial?(_.color.value.copy(g.color),_.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(_,g){_.opacity.value=g.opacity,g.color&&_.diffuse.value.copy(g.color),g.emissive&&_.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.bumpMap&&(_.bumpMap.value=g.bumpMap,t(g.bumpMap,_.bumpMapTransform),_.bumpScale.value=g.bumpScale,g.side===It&&(_.bumpScale.value*=-1)),g.normalMap&&(_.normalMap.value=g.normalMap,t(g.normalMap,_.normalMapTransform),_.normalScale.value.copy(g.normalScale),g.side===It&&_.normalScale.value.negate()),g.displacementMap&&(_.displacementMap.value=g.displacementMap,t(g.displacementMap,_.displacementMapTransform),_.displacementScale.value=g.displacementScale,_.displacementBias.value=g.displacementBias),g.emissiveMap&&(_.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,_.emissiveMapTransform)),g.specularMap&&(_.specularMap.value=g.specularMap,t(g.specularMap,_.specularMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest);const C=e.get(g),R=C.envMap,S=C.envMapRotation;R&&(_.envMap.value=R,qn.copy(S),qn.x*=-1,qn.y*=-1,qn.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),_.envMapRotation.value.setFromMatrix4(J0.makeRotationFromEuler(qn)),_.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=g.reflectivity,_.ior.value=g.ior,_.refractionRatio.value=g.refractionRatio),g.lightMap&&(_.lightMap.value=g.lightMap,_.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,_.lightMapTransform)),g.aoMap&&(_.aoMap.value=g.aoMap,_.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,_.aoMapTransform))}function r(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform))}function o(_,g){_.dashSize.value=g.dashSize,_.totalSize.value=g.dashSize+g.gapSize,_.scale.value=g.scale}function h(_,g,C,R){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.size.value=g.size*C,_.scale.value=R*.5,g.map&&(_.map.value=g.map,t(g.map,_.uvTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function c(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.rotation.value=g.rotation,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function d(_,g){_.specular.value.copy(g.specular),_.shininess.value=Math.max(g.shininess,1e-4)}function p(_,g){g.gradientMap&&(_.gradientMap.value=g.gradientMap)}function f(_,g){_.metalness.value=g.metalness,g.metalnessMap&&(_.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,_.metalnessMapTransform)),_.roughness.value=g.roughness,g.roughnessMap&&(_.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,_.roughnessMapTransform)),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)}function m(_,g,C){_.ior.value=g.ior,g.sheen>0&&(_.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),_.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(_.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,_.sheenColorMapTransform)),g.sheenRoughnessMap&&(_.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,_.sheenRoughnessMapTransform))),g.clearcoat>0&&(_.clearcoat.value=g.clearcoat,_.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(_.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,_.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(_.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===It&&_.clearcoatNormalScale.value.negate())),g.dispersion>0&&(_.dispersion.value=g.dispersion),g.iridescence>0&&(_.iridescence.value=g.iridescence,_.iridescenceIOR.value=g.iridescenceIOR,_.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(_.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,_.iridescenceMapTransform)),g.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),g.transmission>0&&(_.transmission.value=g.transmission,_.transmissionSamplerMap.value=C.texture,_.transmissionSamplerSize.value.set(C.width,C.height),g.transmissionMap&&(_.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,_.transmissionMapTransform)),_.thickness.value=g.thickness,g.thicknessMap&&(_.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=g.attenuationDistance,_.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(_.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(_.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=g.specularIntensity,_.specularColor.value.copy(g.specularColor),g.specularColorMap&&(_.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,_.specularColorMapTransform)),g.specularIntensityMap&&(_.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,g){g.matcap&&(_.matcap.value=g.matcap)}function M(_,g){const C=e.get(g).light;_.referencePosition.value.setFromMatrixPosition(C.matrixWorld),_.nearDistance.value=C.shadow.camera.near,_.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function $0(n,e,t,i){let a={},s={},r=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function h(C,R){const S=R.program;i.uniformBlockBinding(C,S)}function c(C,R){let S=a[C.id];S===void 0&&(v(C),S=d(C),a[C.id]=S,C.addEventListener("dispose",_));const k=R.program;i.updateUBOMapping(C,k);const D=e.render.frame;s[C.id]!==D&&(f(C),s[C.id]=D)}function d(C){const R=p();C.__bindingPointIndex=R;const S=n.createBuffer(),k=C.__size,D=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,k,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,R,S),S}function p(){for(let C=0;C<o;C++)if(r.indexOf(C)===-1)return r.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(C){const R=a[C.id],S=C.uniforms,k=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let D=0,L=S.length;D<L;D++){const z=Array.isArray(S[D])?S[D]:[S[D]];for(let A=0,b=z.length;A<b;A++){const U=z[A];if(m(U,D,A,k)===!0){const Y=U.__offset,q=Array.isArray(U.value)?U.value:[U.value];let Z=0;for(let ne=0;ne<q.length;ne++){const $=q[ne],re=M($);typeof $=="number"||typeof $=="boolean"?(U.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,Y+Z,U.__data)):$.isMatrix3?(U.__data[0]=$.elements[0],U.__data[1]=$.elements[1],U.__data[2]=$.elements[2],U.__data[3]=0,U.__data[4]=$.elements[3],U.__data[5]=$.elements[4],U.__data[6]=$.elements[5],U.__data[7]=0,U.__data[8]=$.elements[6],U.__data[9]=$.elements[7],U.__data[10]=$.elements[8],U.__data[11]=0):($.toArray(U.__data,Z),Z+=re.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Y,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(C,R,S,k){const D=C.value,L=R+"_"+S;if(k[L]===void 0)return typeof D=="number"||typeof D=="boolean"?k[L]=D:k[L]=D.clone(),!0;{const z=k[L];if(typeof D=="number"||typeof D=="boolean"){if(z!==D)return k[L]=D,!0}else if(z.equals(D)===!1)return z.copy(D),!0}return!1}function v(C){const R=C.uniforms;let S=0;const k=16;for(let L=0,z=R.length;L<z;L++){const A=Array.isArray(R[L])?R[L]:[R[L]];for(let b=0,U=A.length;b<U;b++){const Y=A[b],q=Array.isArray(Y.value)?Y.value:[Y.value];for(let Z=0,ne=q.length;Z<ne;Z++){const $=q[Z],re=M($),J=S%k,he=J%re.boundary,xe=J+he;S+=he,xe!==0&&k-xe<re.storage&&(S+=k-xe),Y.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=S,S+=re.storage}}}const D=S%k;return D>0&&(S+=k-D),C.__size=S,C.__cache={},this}function M(C){const R={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(R.boundary=4,R.storage=4):C.isVector2?(R.boundary=8,R.storage=8):C.isVector3||C.isColor?(R.boundary=16,R.storage=12):C.isVector4?(R.boundary=16,R.storage=16):C.isMatrix3?(R.boundary=48,R.storage=48):C.isMatrix4?(R.boundary=64,R.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),R}function _(C){const R=C.target;R.removeEventListener("dispose",_);const S=r.indexOf(R.__bindingPointIndex);r.splice(S,1),n.deleteBuffer(a[R.id]),delete a[R.id],delete s[R.id]}function g(){for(const C in a)n.deleteBuffer(a[C]);r=[],a={},s={}}return{bind:h,update:c,dispose:g}}class j0{constructor(e={}){const{canvas:t=Bl(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=r;const v=new Uint32Array(4),M=new Int32Array(4);let _=null,g=null;const C=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this.toneMapping=On,this.toneMappingExposure=1;const S=this;let k=!1,D=0,L=0,z=null,A=-1,b=null;const U=new xt,Y=new xt;let q=null;const Z=new We(0);let ne=0,$=t.width,re=t.height,J=1,he=null,xe=null;const Re=new xt(0,0,$,re),Xe=new xt(0,0,$,re);let it=!1;const Q=new Br;let oe=!1,be=!1;const ue=new ht,Le=new ht,Oe=new y,qe=new xt,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function gt(){return z===null?J:1}let H=i;function Ut(E,F){return t.getContext(E,F)}try{const E={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pr}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",pe,!1),H===null){const F="webgl2";if(H=Ut(F,E),H===null)throw Ut(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ye,Ke,De,ot,Pe,P,w,V,ee,ie,j,Te,fe,_e,$e,ae,ve,Ie,Ue,Me,Je,He,at,N;function de(){Ye=new nf(H),Ye.init(),He=new G0(H,Ye),Ke=new Zu(H,Ye,e,He),De=new B0(H,Ye),Ke.reverseDepthBuffer&&f&&De.buffers.depth.setReversed(!0),ot=new rf(H),Pe=new b0,P=new H0(H,Ye,De,Pe,Ke,He,ot),w=new ju(S),V=new tf(S),ee=new ud(H),at=new Ku(H,ee),ie=new af(H,ee,ot,at),j=new cf(H,ie,ee,ot),Ue=new of(H,Ke,P),ae=new $u(Pe),Te=new S0(S,w,V,Ye,Ke,at,ae),fe=new Z0(S,Pe),_e=new T0,$e=new I0(Ye),Ie=new Yu(S,w,V,De,j,m,h),ve=new O0(S,j,Ke),N=new $0(H,ot,Ke,De),Me=new Ju(H,Ye,ot),Je=new sf(H,Ye,ot),ot.programs=Te.programs,S.capabilities=Ke,S.extensions=Ye,S.properties=Pe,S.renderLists=_e,S.shadowMap=ve,S.state=De,S.info=ot}de();const K=new K0(S,H);this.xr=K,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const E=Ye.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ye.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(E){E!==void 0&&(J=E,this.setSize($,re,!1))},this.getSize=function(E){return E.set($,re)},this.setSize=function(E,F,W=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=E,re=F,t.width=Math.floor(E*J),t.height=Math.floor(F*J),W===!0&&(t.style.width=E+"px",t.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set($*J,re*J).floor()},this.setDrawingBufferSize=function(E,F,W){$=E,re=F,J=W,t.width=Math.floor(E*W),t.height=Math.floor(F*W),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(U)},this.getViewport=function(E){return E.copy(Re)},this.setViewport=function(E,F,W,X){E.isVector4?Re.set(E.x,E.y,E.z,E.w):Re.set(E,F,W,X),De.viewport(U.copy(Re).multiplyScalar(J).round())},this.getScissor=function(E){return E.copy(Xe)},this.setScissor=function(E,F,W,X){E.isVector4?Xe.set(E.x,E.y,E.z,E.w):Xe.set(E,F,W,X),De.scissor(Y.copy(Xe).multiplyScalar(J).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(E){De.setScissorTest(it=E)},this.setOpaqueSort=function(E){he=E},this.setTransparentSort=function(E){xe=E},this.getClearColor=function(E){return E.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(E=!0,F=!0,W=!0){let X=0;if(E){let B=!1;if(z!==null){const se=z.texture.format;B=se===Or||se===Nr||se===zr}if(B){const se=z.texture.type,me=se===Sn||se===ei||se===ia||se===Pi||se===Ir||se===Lr,we=Ie.getClearColor(),ye=Ie.getClearAlpha(),ze=we.r,ke=we.g,Se=we.b;me?(v[0]=ze,v[1]=ke,v[2]=Se,v[3]=ye,H.clearBufferuiv(H.COLOR,0,v)):(M[0]=ze,M[1]=ke,M[2]=Se,M[3]=ye,H.clearBufferiv(H.COLOR,0,M))}else X|=H.COLOR_BUFFER_BIT}F&&(X|=H.DEPTH_BUFFER_BIT),W&&(X|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),_e.dispose(),$e.dispose(),Pe.dispose(),w.dispose(),V.dispose(),j.dispose(),at.dispose(),N.dispose(),Te.dispose(),K.dispose(),K.removeEventListener("sessionstart",la),K.removeEventListener("sessionend",da),pn.stop()};function te(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const E=ot.autoReset,F=ve.enabled,W=ve.autoUpdate,X=ve.needsUpdate,B=ve.type;de(),ot.autoReset=E,ve.enabled=F,ve.autoUpdate=W,ve.needsUpdate=X,ve.type=B}function pe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Be(E){const F=E.target;F.removeEventListener("dispose",Be),pt(F)}function pt(E){St(E),Pe.remove(E)}function St(E){const F=Pe.get(E).programs;F!==void 0&&(F.forEach(function(W){Te.releaseProgram(W)}),E.isShaderMaterial&&Te.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,W,X,B,se){F===null&&(F=ut);const me=B.isMesh&&B.matrixWorld.determinant()<0,we=as(E,F,W,X,B);De.setMaterial(X,me);let ye=W.index,ze=1;if(X.wireframe===!0){if(ye=ie.getWireframeAttribute(W),ye===void 0)return;ze=2}const ke=W.drawRange,Se=W.attributes.position;let je=ke.start*ze,st=(ke.start+ke.count)*ze;se!==null&&(je=Math.max(je,se.start*ze),st=Math.min(st,(se.start+se.count)*ze)),ye!==null?(je=Math.max(je,0),st=Math.min(st,ye.count)):Se!=null&&(je=Math.max(je,0),st=Math.min(st,Se.count));const ct=st-je;if(ct<0||ct===1/0)return;at.setup(B,X,we,W,ye);let Et,et=Me;if(ye!==null&&(Et=ee.get(ye),et=Je,et.setIndex(Et)),B.isMesh)X.wireframe===!0?(De.setLineWidth(X.wireframeLinewidth*gt()),et.setMode(H.LINES)):et.setMode(H.TRIANGLES);else if(B.isLine){let Ae=X.linewidth;Ae===void 0&&(Ae=1),De.setLineWidth(Ae*gt()),B.isLineSegments?et.setMode(H.LINES):B.isLineLoop?et.setMode(H.LINE_LOOP):et.setMode(H.LINE_STRIP)}else B.isPoints?et.setMode(H.POINTS):B.isSprite&&et.setMode(H.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)et.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))et.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ae=B._multiDrawStarts,Kt=B._multiDrawCounts,tt=B._multiDrawCount,kt=ye?ee.get(ye).bytesPerElement:1,Tn=Pe.get(X).currentProgram.getUniforms();for(let Pt=0;Pt<tt;Pt++)Tn.setValue(H,"_gl_DrawID",Pt),et.render(Ae[Pt]/kt,Kt[Pt])}else if(B.isInstancedMesh)et.renderInstances(je,ct,B.count);else if(W.isInstancedBufferGeometry){const Ae=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Kt=Math.min(W.instanceCount,Ae);et.renderInstances(je,ct,Kt)}else et.render(je,ct)};function nt(E,F,W){E.transparent===!0&&E.side===ln&&E.forceSinglePass===!1?(E.side=It,E.needsUpdate=!0,si(E,F,W),E.side=Fn,E.needsUpdate=!0,si(E,F,W),E.side=ln):si(E,F,W)}this.compile=function(E,F,W=null){W===null&&(W=E),g=$e.get(W),g.init(F),R.push(g),W.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),E!==W&&E.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),g.setupLights();const X=new Set;return E.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const se=B.material;if(se)if(Array.isArray(se))for(let me=0;me<se.length;me++){const we=se[me];nt(we,W,B),X.add(we)}else nt(se,W,B),X.add(se)}),R.pop(),g=null,X},this.compileAsync=function(E,F,W=null){const X=this.compile(E,F,W);return new Promise(B=>{function se(){if(X.forEach(function(me){Pe.get(me).currentProgram.isReady()&&X.delete(me)}),X.size===0){B(E);return}setTimeout(se,10)}Ye.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Bt=null;function Yt(E){Bt&&Bt(E)}function la(){pn.stop()}function da(){pn.start()}const pn=new Lc;pn.setAnimationLoop(Yt),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(E){Bt=E,K.setAnimationLoop(E),E===null?pn.stop():pn.start()},K.addEventListener("sessionstart",la),K.addEventListener("sessionend",da),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(F),F=K.getCamera()),E.isScene===!0&&E.onBeforeRender(S,E,F,z),g=$e.get(E,R.length),g.init(F),R.push(g),Le.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Q.setFromProjectionMatrix(Le),be=this.localClippingEnabled,oe=ae.init(this.clippingPlanes,be),_=_e.get(E,C.length),_.init(),C.push(_),K.enabled===!0&&K.isPresenting===!0){const se=S.xr.getDepthSensingMesh();se!==null&&Hi(se,F,-1/0,S.sortObjects)}Hi(E,F,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(he,xe),Ze=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Ze&&Ie.addToRenderList(_,E),this.info.render.frame++,oe===!0&&ae.beginShadows();const W=g.state.shadowsArray;ve.render(W,E,F),oe===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=_.opaque,B=_.transmissive;if(g.setupLights(),F.isArrayCamera){const se=F.cameras;if(B.length>0)for(let me=0,we=se.length;me<we;me++){const ye=se[me];ua(X,B,E,ye)}Ze&&Ie.render(E);for(let me=0,we=se.length;me<we;me++){const ye=se[me];ha(_,E,ye,ye.viewport)}}else B.length>0&&ua(X,B,E,F),Ze&&Ie.render(E),ha(_,E,F);z!==null&&(P.updateMultisampleRenderTarget(z),P.updateRenderTargetMipmap(z)),E.isScene===!0&&E.onAfterRender(S,E,F),at.resetDefaultState(),A=-1,b=null,R.pop(),R.length>0?(g=R[R.length-1],oe===!0&&ae.setGlobalState(S.clippingPlanes,g.state.camera)):g=null,C.pop(),C.length>0?_=C[C.length-1]:_=null};function Hi(E,F,W,X){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Q.intersectsSprite(E)){X&&qe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Le);const me=j.update(E),we=E.material;we.visible&&_.push(E,me,we,W,qe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Q.intersectsObject(E))){const me=j.update(E),we=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),qe.copy(E.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),qe.copy(me.boundingSphere.center)),qe.applyMatrix4(E.matrixWorld).applyMatrix4(Le)),Array.isArray(we)){const ye=me.groups;for(let ze=0,ke=ye.length;ze<ke;ze++){const Se=ye[ze],je=we[Se.materialIndex];je&&je.visible&&_.push(E,me,je,W,qe.z,Se)}}else we.visible&&_.push(E,me,we,W,qe.z,null)}}const se=E.children;for(let me=0,we=se.length;me<we;me++)Hi(se[me],F,W,X)}function ha(E,F,W,X){const B=E.opaque,se=E.transmissive,me=E.transparent;g.setupLightsView(W),oe===!0&&ae.setGlobalState(S.clippingPlanes,W),X&&De.viewport(U.copy(X)),B.length>0&&ai(B,F,W),se.length>0&&ai(se,F,W),me.length>0&&ai(me,F,W),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function ua(E,F,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[X.id]===void 0&&(g.state.transmissionRenderTarget[X.id]=new ti(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?sa:Sn,minFilter:Qn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const se=g.state.transmissionRenderTarget[X.id],me=X.viewport||U;se.setSize(me.z,me.w);const we=S.getRenderTarget();S.setRenderTarget(se),S.getClearColor(Z),ne=S.getClearAlpha(),ne<1&&S.setClearColor(16777215,.5),S.clear(),Ze&&Ie.render(W);const ye=S.toneMapping;S.toneMapping=On;const ze=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),g.setupLightsView(X),oe===!0&&ae.setGlobalState(S.clippingPlanes,X),ai(E,W,X),P.updateMultisampleRenderTarget(se),P.updateRenderTargetMipmap(se),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Se=0,je=F.length;Se<je;Se++){const st=F[Se],ct=st.object,Et=st.geometry,et=st.material,Ae=st.group;if(et.side===ln&&ct.layers.test(X.layers)){const Kt=et.side;et.side=It,et.needsUpdate=!0,fa(ct,W,X,Et,et,Ae),et.side=Kt,et.needsUpdate=!0,ke=!0}}ke===!0&&(P.updateMultisampleRenderTarget(se),P.updateRenderTargetMipmap(se))}S.setRenderTarget(we),S.setClearColor(Z,ne),ze!==void 0&&(X.viewport=ze),S.toneMapping=ye}function ai(E,F,W){const X=F.isScene===!0?F.overrideMaterial:null;for(let B=0,se=E.length;B<se;B++){const me=E[B],we=me.object,ye=me.geometry,ze=X===null?me.material:X,ke=me.group;we.layers.test(W.layers)&&fa(we,F,W,ye,ze,ke)}}function fa(E,F,W,X,B,se){E.onBeforeRender(S,F,W,X,B,se),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(S,F,W,X,E,se),B.transparent===!0&&B.side===ln&&B.forceSinglePass===!1?(B.side=It,B.needsUpdate=!0,S.renderBufferDirect(W,F,X,B,E,se),B.side=Fn,B.needsUpdate=!0,S.renderBufferDirect(W,F,X,B,E,se),B.side=ln):S.renderBufferDirect(W,F,X,B,E,se),E.onAfterRender(S,F,W,X,B,se)}function si(E,F,W){F.isScene!==!0&&(F=ut);const X=Pe.get(E),B=g.state.lights,se=g.state.shadowsArray,me=B.state.version,we=Te.getParameters(E,B.state,se,F,W),ye=Te.getProgramCacheKey(we);let ze=X.programs;X.environment=E.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(E.isMeshStandardMaterial?V:w).get(E.envMap||X.environment),X.envMapRotation=X.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,ze===void 0&&(E.addEventListener("dispose",Be),ze=new Map,X.programs=ze);let ke=ze.get(ye);if(ke!==void 0){if(X.currentProgram===ke&&X.lightsStateVersion===me)return ma(E,we),ke}else we.uniforms=Te.getUniforms(E),E.onBeforeCompile(we,S),ke=Te.acquireProgram(we,ye),ze.set(ye,ke),X.uniforms=we.uniforms;const Se=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Se.clippingPlanes=ae.uniform),ma(E,we),X.needsLights=rs(E),X.lightsStateVersion=me,X.needsLights&&(Se.ambientLightColor.value=B.state.ambient,Se.lightProbe.value=B.state.probe,Se.directionalLights.value=B.state.directional,Se.directionalLightShadows.value=B.state.directionalShadow,Se.spotLights.value=B.state.spot,Se.spotLightShadows.value=B.state.spotShadow,Se.rectAreaLights.value=B.state.rectArea,Se.ltc_1.value=B.state.rectAreaLTC1,Se.ltc_2.value=B.state.rectAreaLTC2,Se.pointLights.value=B.state.point,Se.pointLightShadows.value=B.state.pointShadow,Se.hemisphereLights.value=B.state.hemi,Se.directionalShadowMap.value=B.state.directionalShadowMap,Se.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Se.spotShadowMap.value=B.state.spotShadowMap,Se.spotLightMatrix.value=B.state.spotLightMatrix,Se.spotLightMap.value=B.state.spotLightMap,Se.pointShadowMap.value=B.state.pointShadowMap,Se.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=ke,X.uniformsList=null,ke}function pa(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Ja.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function ma(E,F){const W=Pe.get(E);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function as(E,F,W,X,B){F.isScene!==!0&&(F=ut),P.resetTextureUnits();const se=F.fog,me=X.isMeshStandardMaterial?F.environment:null,we=z===null?S.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Li,ye=(X.isMeshStandardMaterial?V:w).get(X.envMap||me),ze=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ke=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Se=!!W.morphAttributes.position,je=!!W.morphAttributes.normal,st=!!W.morphAttributes.color;let ct=On;X.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(ct=S.toneMapping);const Et=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,et=Et!==void 0?Et.length:0,Ae=Pe.get(X),Kt=g.state.lights;if(oe===!0&&(be===!0||E!==b)){const zt=E===b&&X.id===A;ae.setState(X,E,zt)}let tt=!1;X.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Kt.state.version||Ae.outputColorSpace!==we||B.isBatchedMesh&&Ae.batching===!1||!B.isBatchedMesh&&Ae.batching===!0||B.isBatchedMesh&&Ae.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ae.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ae.instancing===!1||!B.isInstancedMesh&&Ae.instancing===!0||B.isSkinnedMesh&&Ae.skinning===!1||!B.isSkinnedMesh&&Ae.skinning===!0||B.isInstancedMesh&&Ae.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ae.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ae.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ae.instancingMorph===!1&&B.morphTexture!==null||Ae.envMap!==ye||X.fog===!0&&Ae.fog!==se||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ae.numPlanes||Ae.numIntersection!==ae.numIntersection)||Ae.vertexAlphas!==ze||Ae.vertexTangents!==ke||Ae.morphTargets!==Se||Ae.morphNormals!==je||Ae.morphColors!==st||Ae.toneMapping!==ct||Ae.morphTargetsCount!==et)&&(tt=!0):(tt=!0,Ae.__version=X.version);let kt=Ae.currentProgram;tt===!0&&(kt=si(X,F,B));let Tn=!1,Pt=!1,Bn=!1;const lt=kt.getUniforms(),Xt=Ae.uniforms;if(De.useProgram(kt.program)&&(Tn=!0,Pt=!0,Bn=!0),X.id!==A&&(A=X.id,Pt=!0),Tn||b!==E){De.buffers.depth.getReversed()?(ue.copy(E.projectionMatrix),Hl(ue),Gl(ue),lt.setValue(H,"projectionMatrix",ue)):lt.setValue(H,"projectionMatrix",E.projectionMatrix),lt.setValue(H,"viewMatrix",E.matrixWorldInverse);const an=lt.map.cameraPosition;an!==void 0&&an.setValue(H,Oe.setFromMatrixPosition(E.matrixWorld)),Ke.logarithmicDepthBuffer&&lt.setValue(H,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&lt.setValue(H,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,Pt=!0,Bn=!0)}if(B.isSkinnedMesh){lt.setOptional(H,B,"bindMatrix"),lt.setOptional(H,B,"bindMatrixInverse");const zt=B.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),lt.setValue(H,"boneTexture",zt.boneTexture,P))}B.isBatchedMesh&&(lt.setOptional(H,B,"batchingTexture"),lt.setValue(H,"batchingTexture",B._matricesTexture,P),lt.setOptional(H,B,"batchingIdTexture"),lt.setValue(H,"batchingIdTexture",B._indirectTexture,P),lt.setOptional(H,B,"batchingColorTexture"),B._colorsTexture!==null&&lt.setValue(H,"batchingColorTexture",B._colorsTexture,P));const kn=W.morphAttributes;if((kn.position!==void 0||kn.normal!==void 0||kn.color!==void 0)&&Ue.update(B,W,kt),(Pt||Ae.receiveShadow!==B.receiveShadow)&&(Ae.receiveShadow=B.receiveShadow,lt.setValue(H,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Xt.envMap.value=ye,Xt.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(Xt.envMapIntensity.value=F.environmentIntensity),Pt&&(lt.setValue(H,"toneMappingExposure",S.toneMappingExposure),Ae.needsLights&&ss(Xt,Bn),se&&X.fog===!0&&fe.refreshFogUniforms(Xt,se),fe.refreshMaterialUniforms(Xt,X,J,re,g.state.transmissionRenderTarget[E.id]),Ja.upload(H,pa(Ae),Xt,P)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ja.upload(H,pa(Ae),Xt,P),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&lt.setValue(H,"center",B.center),lt.setValue(H,"modelViewMatrix",B.modelViewMatrix),lt.setValue(H,"normalMatrix",B.normalMatrix),lt.setValue(H,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const zt=X.uniformsGroups;for(let an=0,sn=zt.length;an<sn;an++){const ga=zt[an];N.update(ga,kt),N.bind(ga,kt)}}return kt}function ss(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function rs(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(E,F,W){Pe.get(E.texture).__webglTexture=F,Pe.get(E.depthTexture).__webglTexture=W;const X=Pe.get(E);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,F){const W=Pe.get(E);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,W=0){z=E,D=F,L=W;let X=!0,B=null,se=!1,me=!1;if(E){const ye=Pe.get(E);if(ye.__useDefaultFramebuffer!==void 0)De.bindFramebuffer(H.FRAMEBUFFER,null),X=!1;else if(ye.__webglFramebuffer===void 0)P.setupRenderTarget(E);else if(ye.__hasExternalTextures)P.rebindTextures(E,Pe.get(E.texture).__webglTexture,Pe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Se=E.depthTexture;if(ye.__boundDepthTexture!==Se){if(Se!==null&&Pe.has(Se)&&(E.width!==Se.image.width||E.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(E)}}const ze=E.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(me=!0);const ke=Pe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ke[F])?B=ke[F][W]:B=ke[F],se=!0):E.samples>0&&P.useMultisampledRTT(E)===!1?B=Pe.get(E).__webglMultisampledFramebuffer:Array.isArray(ke)?B=ke[W]:B=ke,U.copy(E.viewport),Y.copy(E.scissor),q=E.scissorTest}else U.copy(Re).multiplyScalar(J).floor(),Y.copy(Xe).multiplyScalar(J).floor(),q=it;if(De.bindFramebuffer(H.FRAMEBUFFER,B)&&X&&De.drawBuffers(E,B),De.viewport(U),De.scissor(Y),De.setScissorTest(q),se){const ye=Pe.get(E.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+F,ye.__webglTexture,W)}else if(me){const ye=Pe.get(E.texture),ze=F||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,ye.__webglTexture,W||0,ze)}A=-1},this.readRenderTargetPixels=function(E,F,W,X,B,se,me){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(we=we[me]),we){De.bindFramebuffer(H.FRAMEBUFFER,we);try{const ye=E.texture,ze=ye.format,ke=ye.type;if(!Ke.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-X&&W>=0&&W<=E.height-B&&H.readPixels(F,W,X,B,He.convert(ze),He.convert(ke),se)}finally{const ye=z!==null?Pe.get(z).__webglFramebuffer:null;De.bindFramebuffer(H.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(E,F,W,X,B,se,me){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(we=we[me]),we){const ye=E.texture,ze=ye.format,ke=ye.type;if(!Ke.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=E.width-X&&W>=0&&W<=E.height-B){De.bindFramebuffer(H.FRAMEBUFFER,we);const Se=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Se),H.bufferData(H.PIXEL_PACK_BUFFER,se.byteLength,H.STREAM_READ),H.readPixels(F,W,X,B,He.convert(ze),He.convert(ke),0);const je=z!==null?Pe.get(z).__webglFramebuffer:null;De.bindFramebuffer(H.FRAMEBUFFER,je);const st=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await kl(H,st,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Se),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,se),H.deleteBuffer(Se),H.deleteSync(st),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,F=null,W=0){E.isTexture!==!0&&(Qi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1]);const X=Math.pow(2,-W),B=Math.floor(E.image.width*X),se=Math.floor(E.image.height*X),me=F!==null?F.x:0,we=F!==null?F.y:0;P.setTexture2D(E,0),H.copyTexSubImage2D(H.TEXTURE_2D,W,0,0,me,we,B,se),De.unbindTexture()},this.copyTextureToTexture=function(E,F,W=null,X=null,B=0){E.isTexture!==!0&&(Qi("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,E=arguments[1],F=arguments[2],B=arguments[3]||0,W=null);let se,me,we,ye,ze,ke,Se,je,st;const ct=E.isCompressedTexture?E.mipmaps[B]:E.image;W!==null?(se=W.max.x-W.min.x,me=W.max.y-W.min.y,we=W.isBox3?W.max.z-W.min.z:1,ye=W.min.x,ze=W.min.y,ke=W.isBox3?W.min.z:0):(se=ct.width,me=ct.height,we=ct.depth||1,ye=0,ze=0,ke=0),X!==null?(Se=X.x,je=X.y,st=X.z):(Se=0,je=0,st=0);const Et=He.convert(F.format),et=He.convert(F.type);let Ae;F.isData3DTexture?(P.setTexture3D(F,0),Ae=H.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(P.setTexture2DArray(F,0),Ae=H.TEXTURE_2D_ARRAY):(P.setTexture2D(F,0),Ae=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,F.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,F.unpackAlignment);const Kt=H.getParameter(H.UNPACK_ROW_LENGTH),tt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),kt=H.getParameter(H.UNPACK_SKIP_PIXELS),Tn=H.getParameter(H.UNPACK_SKIP_ROWS),Pt=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,ct.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ct.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ye),H.pixelStorei(H.UNPACK_SKIP_ROWS,ze),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ke);const Bn=E.isDataArrayTexture||E.isData3DTexture,lt=F.isDataArrayTexture||F.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Xt=Pe.get(E),kn=Pe.get(F),zt=Pe.get(Xt.__renderTarget),an=Pe.get(kn.__renderTarget);De.bindFramebuffer(H.READ_FRAMEBUFFER,zt.__webglFramebuffer),De.bindFramebuffer(H.DRAW_FRAMEBUFFER,an.__webglFramebuffer);for(let sn=0;sn<we;sn++)Bn&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Pe.get(E).__webglTexture,B,ke+sn),E.isDepthTexture?(lt&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Pe.get(F).__webglTexture,B,st+sn),H.blitFramebuffer(ye,ze,se,me,Se,je,se,me,H.DEPTH_BUFFER_BIT,H.NEAREST)):lt?H.copyTexSubImage3D(Ae,B,Se,je,st+sn,ye,ze,se,me):H.copyTexSubImage2D(Ae,B,Se,je,st+sn,ye,ze,se,me);De.bindFramebuffer(H.READ_FRAMEBUFFER,null),De.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else lt?E.isDataTexture||E.isData3DTexture?H.texSubImage3D(Ae,B,Se,je,st,se,me,we,Et,et,ct.data):F.isCompressedArrayTexture?H.compressedTexSubImage3D(Ae,B,Se,je,st,se,me,we,Et,ct.data):H.texSubImage3D(Ae,B,Se,je,st,se,me,we,Et,et,ct):E.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,B,Se,je,se,me,Et,et,ct.data):E.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,B,Se,je,ct.width,ct.height,Et,ct.data):H.texSubImage2D(H.TEXTURE_2D,B,Se,je,se,me,Et,et,ct);H.pixelStorei(H.UNPACK_ROW_LENGTH,Kt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,tt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,kt),H.pixelStorei(H.UNPACK_SKIP_ROWS,Tn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Pt),B===0&&F.generateMipmaps&&H.generateMipmap(Ae),De.unbindTexture()},this.copyTextureToTexture3D=function(E,F,W=null,X=null,B=0){return E.isTexture!==!0&&(Qi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,E=arguments[2],F=arguments[3],B=arguments[4]||0),Qi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,F,W,X,B)},this.initRenderTarget=function(E){Pe.get(E).__webglFramebuffer===void 0&&P.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?P.setTextureCube(E,0):E.isData3DTexture?P.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?P.setTexture2DArray(E,0):P.setTexture2D(E,0),De.unbindTexture()},this.resetState=function(){D=0,L=0,z=null,De.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}class Hr{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new We(e),this.density=t}clone(){return new Hr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Q0 extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ep extends Ct{constructor(e=null,t=1,i=1,a,s,r,o,h,c=Vt,d=Vt,p,f){super(null,r,o,h,c,d,a,s,p,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yo extends Wt{constructor(e,t,i,a=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Mi=new ht,Ko=new ht,Fa=[],Jo=new ni,tp=new ht,Ji=new dt,Zi=new zi;class np extends dt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Yo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<i;a++)this.setMatrixAt(a,tp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ni),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Mi),Jo.copy(e.boundingBox).applyMatrix4(Mi),this.boundingBox.union(Jo)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Mi),Zi.copy(e.boundingSphere).applyMatrix4(Mi),this.boundingSphere.union(Zi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,a=this.morphTexture.source.data.data,s=i.length+1,r=e*s+1;for(let o=0;o<i.length;o++)i[o]=a[r+o]}raycast(e,t){const i=this.matrixWorld,a=this.count;if(Ji.geometry=this.geometry,Ji.material=this.material,Ji.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zi.copy(this.boundingSphere),Zi.applyMatrix4(i),e.ray.intersectsSphere(Zi)!==!1))for(let s=0;s<a;s++){this.getMatrixAt(s,Mi),Ko.multiplyMatrices(i,Mi),Ji.matrixWorld=Ko,Ji.raycast(e,Fa);for(let r=0,o=Fa.length;r<o;r++){const h=Fa[r];h.instanceId=s,h.object=this,t.push(h)}Fa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Yo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,a=i.length+1;this.morphTexture===null&&(this.morphTexture=new ep(new Float32Array(a*this.count),a,this.count,Ur,hn));const s=this.morphTexture.source.data.data;let r=0;for(let c=0;c<i.length;c++)r+=i[c];const o=this.geometry.morphTargetsRelative?1:1-r,h=a*e;s[h]=o,s.set(i,h+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class kc extends Ni{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Zo=new ht,Rr=new Ec,Ba=new zi,ka=new y;class ip extends Mt{constructor(e=new Lt,t=new kc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,s=e.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ba.copy(i.boundingSphere),Ba.applyMatrix4(a),Ba.radius+=s,e.ray.intersectsSphere(Ba)===!1)return;Zo.copy(a).invert(),Rr.copy(e.ray).applyMatrix4(Zo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=o*o,c=i.index,p=i.attributes.position;if(c!==null){const f=Math.max(0,r.start),m=Math.min(c.count,r.start+r.count);for(let v=f,M=m;v<M;v++){const _=c.getX(v);ka.fromBufferAttribute(p,_),$o(ka,_,h,a,e,t,this)}}else{const f=Math.max(0,r.start),m=Math.min(p.count,r.start+r.count);for(let v=f,M=m;v<M;v++)ka.fromBufferAttribute(p,v),$o(ka,v,h,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function $o(n,e,t,i,a,s,r){const o=Rr.distanceSqToPoint(n);if(o<t){const h=new y;Rr.closestPointToPoint(n,h),h.applyMatrix4(i);const c=a.ray.origin.distanceTo(h);if(c<a.near||c>a.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class ap extends Ct{constructor(e,t,i,a,s,r,o,h,c){super(e,t,i,a,s,r,o,h,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class En{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,a=this.getPoint(0),s=0;t.push(0);for(let r=1;r<=e;r++)i=this.getPoint(r/e),s+=i.distanceTo(a),t.push(s),a=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let a=0;const s=i.length;let r;t?r=t:r=e*i[s-1];let o=0,h=s-1,c;for(;o<=h;)if(a=Math.floor(o+(h-o)/2),c=i[a]-r,c<0)o=a+1;else if(c>0)h=a-1;else{h=a;break}if(a=h,i[a]===r)return a/(s-1);const d=i[a],f=i[a+1]-d,m=(r-d)/f;return(a+m)/(s-1)}getTangent(e,t){let a=e-1e-4,s=e+1e-4;a<0&&(a=0),s>1&&(s=1);const r=this.getPoint(a),o=this.getPoint(s),h=t||(r.isVector2?new Ce:new y);return h.copy(o).sub(r).normalize(),h}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new y,a=[],s=[],r=[],o=new y,h=new ht;for(let m=0;m<=e;m++){const v=m/e;a[m]=this.getTangentAt(v,new y)}s[0]=new y,r[0]=new y;let c=Number.MAX_VALUE;const d=Math.abs(a[0].x),p=Math.abs(a[0].y),f=Math.abs(a[0].z);d<=c&&(c=d,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(a[0],i).normalize(),s[0].crossVectors(a[0],o),r[0].crossVectors(a[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),r[m]=r[m-1].clone(),o.crossVectors(a[m-1],a[m]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(Rt(a[m-1].dot(a[m]),-1,1));s[m].applyMatrix4(h.makeRotationAxis(o,v))}r[m].crossVectors(a[m],s[m])}if(t===!0){let m=Math.acos(Rt(s[0].dot(s[e]),-1,1));m/=e,a[0].dot(o.crossVectors(s[0],s[e]))>0&&(m=-m);for(let v=1;v<=e;v++)s[v].applyMatrix4(h.makeRotationAxis(a[v],m*v)),r[v].crossVectors(a[v],s[v])}return{tangents:a,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Hc extends En{constructor(e=0,t=0,i=1,a=1,s=0,r=Math.PI*2,o=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=a,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=h}getPoint(e,t=new Ce){const i=t,a=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=a;for(;s>a;)s-=a;s<Number.EPSILON&&(r?s=0:s=a),this.aClockwise===!0&&!r&&(s===a?s=-a:s=s-a);const o=this.aStartAngle+e*s;let h=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const d=Math.cos(this.aRotation),p=Math.sin(this.aRotation),f=h-this.aX,m=c-this.aY;h=f*d-m*p+this.aX,c=f*p+m*d+this.aY}return i.set(h,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class sp extends Hc{constructor(e,t,i,a,s,r){super(e,t,i,i,a,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Gr(){let n=0,e=0,t=0,i=0;function a(s,r,o,h){n=s,e=o,t=-3*s+3*r-2*o-h,i=2*s-2*r+o+h}return{initCatmullRom:function(s,r,o,h,c){a(r,o,c*(o-s),c*(h-r))},initNonuniformCatmullRom:function(s,r,o,h,c,d,p){let f=(r-s)/c-(o-s)/(c+d)+(o-r)/d,m=(o-r)/d-(h-r)/(d+p)+(h-o)/p;f*=d,m*=d,a(r,o,f,m)},calc:function(s){const r=s*s,o=r*s;return n+e*s+t*r+i*o}}}const Ha=new y,Os=new Gr,Fs=new Gr,Bs=new Gr;class Bi extends En{constructor(e=[],t=!1,i="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=a}getPoint(e,t=new y){const i=t,a=this.points,s=a.length,r=(s-(this.closed?0:1))*e;let o=Math.floor(r),h=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:h===0&&o===s-1&&(o=s-2,h=1);let c,d;this.closed||o>0?c=a[(o-1)%s]:(Ha.subVectors(a[0],a[1]).add(a[0]),c=Ha);const p=a[o%s],f=a[(o+1)%s];if(this.closed||o+2<s?d=a[(o+2)%s]:(Ha.subVectors(a[s-1],a[s-2]).add(a[s-1]),d=Ha),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(p),m),M=Math.pow(p.distanceToSquared(f),m),_=Math.pow(f.distanceToSquared(d),m);M<1e-4&&(M=1),v<1e-4&&(v=M),_<1e-4&&(_=M),Os.initNonuniformCatmullRom(c.x,p.x,f.x,d.x,v,M,_),Fs.initNonuniformCatmullRom(c.y,p.y,f.y,d.y,v,M,_),Bs.initNonuniformCatmullRom(c.z,p.z,f.z,d.z,v,M,_)}else this.curveType==="catmullrom"&&(Os.initCatmullRom(c.x,p.x,f.x,d.x,this.tension),Fs.initCatmullRom(c.y,p.y,f.y,d.y,this.tension),Bs.initCatmullRom(c.z,p.z,f.z,d.z,this.tension));return i.set(Os.calc(h),Fs.calc(h),Bs.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new y().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function jo(n,e,t,i,a){const s=(i-e)*.5,r=(a-t)*.5,o=n*n,h=n*o;return(2*t-2*i+s+r)*h+(-3*t+3*i-2*s-r)*o+s*n+t}function rp(n,e){const t=1-n;return t*t*e}function op(n,e){return 2*(1-n)*n*e}function cp(n,e){return n*n*e}function ta(n,e,t,i){return rp(n,e)+op(n,t)+cp(n,i)}function lp(n,e){const t=1-n;return t*t*t*e}function dp(n,e){const t=1-n;return 3*t*t*n*e}function hp(n,e){return 3*(1-n)*n*n*e}function up(n,e){return n*n*n*e}function na(n,e,t,i,a){return lp(n,e)+dp(n,t)+hp(n,i)+up(n,a)}class fp extends En{constructor(e=new Ce,t=new Ce,i=new Ce,a=new Ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new Ce){const i=t,a=this.v0,s=this.v1,r=this.v2,o=this.v3;return i.set(na(e,a.x,s.x,r.x,o.x),na(e,a.y,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class pp extends En{constructor(e=new y,t=new y,i=new y,a=new y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new y){const i=t,a=this.v0,s=this.v1,r=this.v2,o=this.v3;return i.set(na(e,a.x,s.x,r.x,o.x),na(e,a.y,s.y,r.y,o.y),na(e,a.z,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class mp extends En{constructor(e=new Ce,t=new Ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ce){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gp extends En{constructor(e=new y,t=new y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new y){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xp extends En{constructor(e=new Ce,t=new Ce,i=new Ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ce){const i=t,a=this.v0,s=this.v1,r=this.v2;return i.set(ta(e,a.x,s.x,r.x),ta(e,a.y,s.y,r.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gc extends En{constructor(e=new y,t=new y,i=new y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new y){const i=t,a=this.v0,s=this.v1,r=this.v2;return i.set(ta(e,a.x,s.x,r.x),ta(e,a.y,s.y,r.y),ta(e,a.z,s.z,r.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _p extends En{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ce){const i=t,a=this.points,s=(a.length-1)*e,r=Math.floor(s),o=s-r,h=a[r===0?r:r-1],c=a[r],d=a[r>a.length-2?a.length-1:r+1],p=a[r>a.length-3?a.length-1:r+2];return i.set(jo(o,h.x,c.x,d.x,p.x),jo(o,h.y,c.y,d.y,p.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new Ce().fromArray(a))}return this}}var vp=Object.freeze({__proto__:null,ArcCurve:sp,CatmullRomCurve3:Bi,CubicBezierCurve:fp,CubicBezierCurve3:pp,EllipseCurve:Hc,LineCurve:mp,LineCurve3:gp,QuadraticBezierCurve:xp,QuadraticBezierCurve3:Gc,SplineCurve:_p});class O extends Lt{constructor(e=1,t=1,i=1,a=32,s=1,r=!1,o=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:a,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:h};const c=this;a=Math.floor(a),s=Math.floor(s);const d=[],p=[],f=[],m=[];let v=0;const M=[],_=i/2;let g=0;C(),r===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(d),this.setAttribute("position",new ft(p,3)),this.setAttribute("normal",new ft(f,3)),this.setAttribute("uv",new ft(m,2));function C(){const S=new y,k=new y;let D=0;const L=(t-e)/i;for(let z=0;z<=s;z++){const A=[],b=z/s,U=b*(t-e)+e;for(let Y=0;Y<=a;Y++){const q=Y/a,Z=q*h+o,ne=Math.sin(Z),$=Math.cos(Z);k.x=U*ne,k.y=-b*i+_,k.z=U*$,p.push(k.x,k.y,k.z),S.set(ne,L,$).normalize(),f.push(S.x,S.y,S.z),m.push(q,1-b),A.push(v++)}M.push(A)}for(let z=0;z<a;z++)for(let A=0;A<s;A++){const b=M[A][z],U=M[A+1][z],Y=M[A+1][z+1],q=M[A][z+1];(e>0||A!==0)&&(d.push(b,U,q),D+=3),(t>0||A!==s-1)&&(d.push(U,Y,q),D+=3)}c.addGroup(g,D,0),g+=D}function R(S){const k=v,D=new Ce,L=new y;let z=0;const A=S===!0?e:t,b=S===!0?1:-1;for(let Y=1;Y<=a;Y++)p.push(0,_*b,0),f.push(0,b,0),m.push(.5,.5),v++;const U=v;for(let Y=0;Y<=a;Y++){const Z=Y/a*h+o,ne=Math.cos(Z),$=Math.sin(Z);L.x=A*$,L.y=_*b,L.z=A*ne,p.push(L.x,L.y,L.z),f.push(0,b,0),D.x=ne*.5+.5,D.y=$*.5*b+.5,m.push(D.x,D.y),v++}for(let Y=0;Y<a;Y++){const q=k+Y,Z=U+Y;S===!0?d.push(Z,Z+1,q):d.push(Z+1,Z,q),z+=3}c.addGroup(g,z,S===!0?1:2),g+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new O(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ki extends O{constructor(e=1,t=1,i=32,a=1,s=!1,r=0,o=Math.PI*2){super(0,e,t,i,a,s,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:a,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(e){return new ki(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ca extends Lt{constructor(e=[],t=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:a};const s=[],r=[];o(a),c(i),d(),this.setAttribute("position",new ft(s,3)),this.setAttribute("normal",new ft(s.slice(),3)),this.setAttribute("uv",new ft(r,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(C){const R=new y,S=new y,k=new y;for(let D=0;D<t.length;D+=3)m(t[D+0],R),m(t[D+1],S),m(t[D+2],k),h(R,S,k,C)}function h(C,R,S,k){const D=k+1,L=[];for(let z=0;z<=D;z++){L[z]=[];const A=C.clone().lerp(S,z/D),b=R.clone().lerp(S,z/D),U=D-z;for(let Y=0;Y<=U;Y++)Y===0&&z===D?L[z][Y]=A:L[z][Y]=A.clone().lerp(b,Y/U)}for(let z=0;z<D;z++)for(let A=0;A<2*(D-z)-1;A++){const b=Math.floor(A/2);A%2===0?(f(L[z][b+1]),f(L[z+1][b]),f(L[z][b])):(f(L[z][b+1]),f(L[z+1][b+1]),f(L[z+1][b]))}}function c(C){const R=new y;for(let S=0;S<s.length;S+=3)R.x=s[S+0],R.y=s[S+1],R.z=s[S+2],R.normalize().multiplyScalar(C),s[S+0]=R.x,s[S+1]=R.y,s[S+2]=R.z}function d(){const C=new y;for(let R=0;R<s.length;R+=3){C.x=s[R+0],C.y=s[R+1],C.z=s[R+2];const S=_(C)/2/Math.PI+.5,k=g(C)/Math.PI+.5;r.push(S,1-k)}v(),p()}function p(){for(let C=0;C<r.length;C+=6){const R=r[C+0],S=r[C+2],k=r[C+4],D=Math.max(R,S,k),L=Math.min(R,S,k);D>.9&&L<.1&&(R<.2&&(r[C+0]+=1),S<.2&&(r[C+2]+=1),k<.2&&(r[C+4]+=1))}}function f(C){s.push(C.x,C.y,C.z)}function m(C,R){const S=C*3;R.x=e[S+0],R.y=e[S+1],R.z=e[S+2]}function v(){const C=new y,R=new y,S=new y,k=new y,D=new Ce,L=new Ce,z=new Ce;for(let A=0,b=0;A<s.length;A+=9,b+=6){C.set(s[A+0],s[A+1],s[A+2]),R.set(s[A+3],s[A+4],s[A+5]),S.set(s[A+6],s[A+7],s[A+8]),D.set(r[b+0],r[b+1]),L.set(r[b+2],r[b+3]),z.set(r[b+4],r[b+5]),k.copy(C).add(R).add(S).divideScalar(3);const U=_(k);M(D,b+0,C,U),M(L,b+2,R,U),M(z,b+4,S,U)}}function M(C,R,S,k){k<0&&C.x===1&&(r[R]=C.x-1),S.x===0&&S.z===0&&(r[R]=k/2/Math.PI+.5)}function _(C){return Math.atan2(C.z,-C.x)}function g(C){return Math.atan2(-C.y,Math.sqrt(C.x*C.x+C.z*C.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ca(e.vertices,e.indices,e.radius,e.details)}}class mt extends ca{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,a=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-i,0,-a,i,0,a,-i,0,a,i,-a,-i,0,-a,i,0,a,-i,0,a,i,0,-i,0,-a,i,0,-a,-i,0,a,i,0,a],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,r,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new mt(e.radius,e.detail)}}class Vr extends ca{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,a=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Vr(e.radius,e.detail)}}class Wr extends ca{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,a,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Wr(e.radius,e.detail)}}class aa extends Lt{constructor(e=.5,t=1,i=32,a=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:a,thetaStart:s,thetaLength:r},i=Math.max(3,i),a=Math.max(1,a);const o=[],h=[],c=[],d=[];let p=e;const f=(t-e)/a,m=new y,v=new Ce;for(let M=0;M<=a;M++){for(let _=0;_<=i;_++){const g=s+_/i*r;m.x=p*Math.cos(g),m.y=p*Math.sin(g),h.push(m.x,m.y,m.z),c.push(0,0,1),v.x=(m.x/t+1)/2,v.y=(m.y/t+1)/2,d.push(v.x,v.y)}p+=f}for(let M=0;M<a;M++){const _=M*(i+1);for(let g=0;g<i;g++){const C=g+_,R=C,S=C+i+1,k=C+i+2,D=C+1;o.push(R,S,D),o.push(S,k,D)}}this.setIndex(o),this.setAttribute("position",new ft(h,3)),this.setAttribute("normal",new ft(c,3)),this.setAttribute("uv",new ft(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new aa(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class vt extends Lt{constructor(e=1,t=32,i=16,a=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const h=Math.min(r+o,Math.PI);let c=0;const d=[],p=new y,f=new y,m=[],v=[],M=[],_=[];for(let g=0;g<=i;g++){const C=[],R=g/i;let S=0;g===0&&r===0?S=.5/t:g===i&&h===Math.PI&&(S=-.5/t);for(let k=0;k<=t;k++){const D=k/t;p.x=-e*Math.cos(a+D*s)*Math.sin(r+R*o),p.y=e*Math.cos(r+R*o),p.z=e*Math.sin(a+D*s)*Math.sin(r+R*o),v.push(p.x,p.y,p.z),f.copy(p).normalize(),M.push(f.x,f.y,f.z),_.push(D+S,1-R),C.push(c++)}d.push(C)}for(let g=0;g<i;g++)for(let C=0;C<t;C++){const R=d[g][C+1],S=d[g][C],k=d[g+1][C],D=d[g+1][C+1];(g!==0||r>0)&&m.push(R,S,D),(g!==i-1||h<Math.PI)&&m.push(S,k,D)}this.setIndex(m),this.setAttribute("position",new ft(v,3)),this.setAttribute("normal",new ft(M,3)),this.setAttribute("uv",new ft(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ne extends Lt{constructor(e=1,t=.4,i=12,a=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:a,arc:s},i=Math.floor(i),a=Math.floor(a);const r=[],o=[],h=[],c=[],d=new y,p=new y,f=new y;for(let m=0;m<=i;m++)for(let v=0;v<=a;v++){const M=v/a*s,_=m/i*Math.PI*2;p.x=(e+t*Math.cos(_))*Math.cos(M),p.y=(e+t*Math.cos(_))*Math.sin(M),p.z=t*Math.sin(_),o.push(p.x,p.y,p.z),d.x=e*Math.cos(M),d.y=e*Math.sin(M),f.subVectors(p,d).normalize(),h.push(f.x,f.y,f.z),c.push(v/a),c.push(m/i)}for(let m=1;m<=i;m++)for(let v=1;v<=a;v++){const M=(a+1)*m+v-1,_=(a+1)*(m-1)+v-1,g=(a+1)*(m-1)+v,C=(a+1)*m+v;r.push(M,_,C),r.push(_,g,C)}this.setIndex(r),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ne(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ii extends Lt{constructor(e=new Gc(new y(-1,-1,0),new y(-1,1,0),new y(1,1,0)),t=64,i=1,a=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:a,closed:s};const r=e.computeFrenetFrames(t,s);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const o=new y,h=new y,c=new Ce;let d=new y;const p=[],f=[],m=[],v=[];M(),this.setIndex(v),this.setAttribute("position",new ft(p,3)),this.setAttribute("normal",new ft(f,3)),this.setAttribute("uv",new ft(m,2));function M(){for(let R=0;R<t;R++)_(R);_(s===!1?t:0),C(),g()}function _(R){d=e.getPointAt(R/t,d);const S=r.normals[R],k=r.binormals[R];for(let D=0;D<=a;D++){const L=D/a*Math.PI*2,z=Math.sin(L),A=-Math.cos(L);h.x=A*S.x+z*k.x,h.y=A*S.y+z*k.y,h.z=A*S.z+z*k.z,h.normalize(),f.push(h.x,h.y,h.z),o.x=d.x+i*h.x,o.y=d.y+i*h.y,o.z=d.z+i*h.z,p.push(o.x,o.y,o.z)}}function g(){for(let R=1;R<=t;R++)for(let S=1;S<=a;S++){const k=(a+1)*(R-1)+(S-1),D=(a+1)*R+(S-1),L=(a+1)*R+S,z=(a+1)*(R-1)+S;v.push(k,D,z),v.push(D,L,z)}}function C(){for(let R=0;R<=t;R++)for(let S=0;S<=a;S++)c.x=R/t,c.y=S/a,m.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ii(new vp[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Fe extends Ni{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mc,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xr extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Mp extends Xr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ks=new ht,Qo=new y,ec=new y;class wp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Br,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Qo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qo),ec.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ec),t.updateMatrixWorld(),ks.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ks),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ks)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class yp extends wp{constructor(){super(new Uc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sp extends Xr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new yp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class bp extends Xr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class U2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=tc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=tc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function tc(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pr);function Ga(n,e){const t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function qr(n,e){const t=Math.floor(n),i=Math.floor(e),a=n-t,s=e-i,r=a*a*(3-2*a),o=s*s*(3-2*s),h=Ga(t,i),c=Ga(t+1,i),d=Ga(t,i+1),p=Ga(t+1,i+1);return h+(c-h)*r+(d-h)*o+(h-c-d+p)*r*o}function nc(n,e,t=4){let i=0,a=.5,s=1;for(let r=0;r<t;r++)i+=qr(n*s,e*s)*a,s*=2,a*=.5;return i}function Qa(n,e,t){const i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)}function Ep(n,e,t){return n+(e-n)*t}const es=640,ic=180,Tp=[[180,-90,46,8],[-210,150,30,5.5],[95,230,18,3.2],[-70,-250,36,6],[250,80,14,2.4],[-160,-40,12,2]];function Ap(n,e,t,i,a,s){const r=n-t,o=e-i,h=Math.sqrt(r*r+o*o);if(h>a)return 0;const c=h/a,d=-s*(1-c*c),p=s*.28*Math.exp(-((c-.86)*(c-.86))/.018);return d+p}const Rp=[[0,0,48,100],[52,24,18,36],[22,82,14,28],[80,-44,40,60],[112,-83,18,30],[-32,-98,16,26],[-88,-188,24,42],[-68,-16,16,28],[22,-112,12,20],[-6,-108,18,32],[36,72,16,32],[-24,44,16,32],[-32,-148,12,22],[-64,-90,10,18],[-50,-100,16,28],[38,-126,12,20],[-60,-148,8,14],[-64,-118,8,14],[-18,-88,10,18],[68,-10,12,20],[-22,-88,8,14],[-48,68,16,32],[78,56,16,32],[-13,-134,16,28],[8,-142,12,20],[135,-40,20,34],[68,6,12,20],[-28,-138,8,14],[-36,-74,14,24],[2,-22,8,14],[-50,-72,10,16],[10,-124,12,20],[20,8,12,20],[-16,136,28,48],[158,-62,22,36],[158,-28,10,16],[-96,-16,16,26],[-78,-172,12,20],[66,-74,14,22],[18,-152,12,18],[-20,-100,10,16],[-8,-162,10,16],[8,-98,10,16],[48,-70,10,16],[-68,12,12,18],[22,-80,10,16],[52,-112,12,18],[-90,-158,10,16],[8,-78,10,16],[-8,-88,10,16],[-96,4,10,16],[142,-62,8,14],[28,-140,10,16],[-90,-148,8,14],[12,18,8,12],[36,8,10,16],[36,-6,10,16],[-50,4,10,16],[-58,-142,10,16],[-32,-22,10,16],[66,-90,10,16],[22,-98,10,16],[172,-48,10,16],[38,-104,10,16],[24,-128,8,14],[-80,20,10,16],[6,148,8,14],[-64,80,10,16],[-80,32,10,16],[100,-22,8,14],[-22,-56,10,16],[-124,-188,12,20],[-38,16,10,16],[70,-112,12,18],[16,48,8,14],[-58,-36,12,16],[50,4,10,18],[-40,-168,12,16],[82,-90,10,14],[4,-148,10,14],[148,-40,10,14],[124,-70,10,14],[96,-44,10,14],[-84,8,10,14],[16,-86,10,14],[135,-22,12,14],[100,-70,12,14],[82,-28,12,14],[-68,2,12,14],[122,-40,8,22],[98,-83,8,22],[70,-44,8,22],[-102,-158,10,14],[-18,-78,12,14],[-64,-184,12,16],[32,-152,10,12],[-96,16,16,10],[82,-74,16,14],[-78,-156,10,12],[-110,8,10,12],[-110,20,10,12],[-110,32,10,12],[-122,8,12,12],[-122,20,10,12],[-8,-98,12,12],[-22,-98,10,12],[8,-88,10,12],[-78,-36,12,12],[96,-90,10,12],[-5,-78,8,10],[16,-148,10,12],[-90,-136,10,12],[16,-74,8,10],[-48,-138,12,14],[52,-126,12,12],[70,-126,10,12],[0,-68,8,10],[48,-70,8,10],[-46,-148,8,10],[-38,16,8,10],[38,-104,8,10],[172,-48,8,10],[-16,36,8,10],[4,-138,8,10],[68,6,8,10],[66,-104,12,10],[80,-104,8,8],[18,136,10,8],[22,-98,8,8],[172,-62,10,10],[-92,-184,10,10],[-32,-88,10,10],[96,-104,10,10],[-28,-8,8,8],[-28,6,8,8],[-46,-88,10,10],[-50,-22,10,10],[-80,20,10,10],[-38,28,10,10],[-46,-132,10,10],[24,-118,10,10],[-110,-136,12,10],[-22,-110,10,10]];function I(n,e){let t=0;t+=(nc(n*.0038,e*.0038,5)-.45)*16,t+=(nc(n*.018,e*.018,3)-.5)*2.8,t+=(qr(n*.07,e*.07)-.5)*.45;for(const[i,a,s,r]of Tp)t+=Ap(n,e,i,a,s,r);for(const[i,a,s,r]of Rp){const o=Qa(r,s,Math.hypot(n-i,e-a));t=Ep(t,.35+t*.12,o)}return t}function Cp(n,e,t,i){const a=new We(9059108),s=new We(12085818),r=new We(12880469),o=new We(4858904),h=Qa(-4,8,t),c=a.clone().lerp(s,h).lerp(r,Qa(6,14,t)*.35);i>.45&&c.lerp(o,Math.min(.55,(i-.45)*1.4));const d=qr(n*.11,e*.11);c.offsetHSL(0,(d-.5)*.08,(d-.5)*.06);const p=Pp(n,e);return p>0&&c.lerp(new We(5911332),p*.85),c}function Pp(n,e){const t=[{ax:0,az:18,bx:0,bz:-124},{ax:0,az:-40,bx:84,bz:-42},{ax:0,az:-40,bx:-68,bz:-16},{ax:0,az:-90,bx:-55,bz:-150},{ax:18,az:-70,bx:52,bz:-88},{ax:12,az:8,bx:50,bz:22},{ax:16,az:28,bx:22,bz:78},{ax:-58,az:-158,bx:-90,bz:-190},{ax:-14,az:-104,bx:-32,bz:-98},{ax:84,az:-42,bx:112,bz:-83},{ax:0,az:-108,bx:22,bz:-112},{ax:22,az:-112,bx:48,bz:-86},{ax:-6,az:-116,bx:-18,bz:-138},{ax:0,az:8,bx:-15,bz:-8},{ax:16,az:28,bx:36,bz:72},{ax:0,az:18,bx:-24,bz:44},{ax:-58,az:-158,bx:-64,bz:-90},{ax:-64,az:-90,bx:-68,bz:-16},{ax:-18,az:-138,bx:-32,bz:-148},{ax:-32,az:-98,bx:-46,bz:-100},{ax:22,az:-112,bx:38,bz:-126},{ax:-58,az:-158,bx:-60,bz:-148},{ax:-64,az:-118,bx:-18,bz:-88},{ax:84,az:-42,bx:68,bz:-10},{ax:-6,az:-108,bx:-18,bz:-88},{ax:0,az:18,bx:-48,bz:68},{ax:16,az:28,bx:78,bz:56},{ax:-6,az:-116,bx:-13,bz:-134},{ax:38,az:-126,bx:8,bz:-142},{ax:-13,az:-134,bx:8,bz:-142},{ax:112,az:-83,bx:135,bz:-40},{ax:68,az:-10,bx:68,bz:6},{ax:-13,az:-134,bx:-28,bz:-138},{ax:-46,az:-108,bx:-20,bz:-132},{ax:-6,az:-108,bx:-6,bz:-132},{ax:-6,az:-96,bx:2,bz:-22},{ax:-32,az:-98,bx:-36,bz:-74},{ax:-40,az:-76,bx:-32,bz:-98},{ax:-40,az:-76,bx:-50,bz:-72},{ax:-6,az:-132,bx:10,bz:-124},{ax:10,az:-124,bx:8,bz:-142},{ax:0,az:8,bx:20,bz:8},{ax:22,az:82,bx:-16,bz:136},{ax:0,az:32,bx:-16,bz:136},{ax:135,az:-40,bx:158,bz:-62},{ax:-68,az:-16,bx:-96,bz:-16},{ax:-58,az:-158,bx:-78,bz:-172},{ax:48,az:-86,bx:66,bz:-74},{ax:8,az:-142,bx:18,bz:-152},{ax:-32,az:-148,bx:-8,bz:-162},{ax:-6,az:-108,bx:8,bz:-98},{ax:22,az:-112,bx:8,bz:-98},{ax:48,az:-86,bx:48,bz:-70},{ax:-68,az:-16,bx:-68,bz:12},{ax:-36,az:-74,bx:22,bz:-80},{ax:48,az:-86,bx:22,bz:-80},{ax:22,az:-112,bx:52,bz:-112},{ax:38,az:-126,bx:52,bz:-112},{ax:-78,az:-172,bx:-90,bz:-158},{ax:8,az:-98,bx:8,bz:-78},{ax:22,az:-80,bx:8,bz:-78},{ax:8,az:-98,bx:-8,bz:-88},{ax:-22,az:-88,bx:-8,bz:-88},{ax:-96,az:-16,bx:-96,bz:4},{ax:158,az:-62,bx:142,bz:-62},{ax:8,az:-142,bx:28,bz:-140},{ax:18,az:-152,bx:28,bz:-140},{ax:-90,az:-158,bx:-90,bz:-148},{ax:5,az:16,bx:12,bz:18},{ax:20,az:8,bx:36,bz:8},{ax:36,az:8,bx:36,bz:-6},{ax:-68,az:4,bx:-50,bz:4},{ax:-58,az:-158,bx:-58,bz:-142},{ax:-15,az:-8,bx:-32,bz:-22},{ax:66,az:-74,bx:66,bz:-90},{ax:8,az:-98,bx:22,bz:-98},{ax:158,az:-62,bx:172,bz:-48},{ax:22,az:-112,bx:38,bz:-104},{ax:10,az:-124,bx:24,bz:-128},{ax:-68,az:12,bx:-80,bz:20},{ax:-16,az:136,bx:6,bz:148},{ax:-48,az:68,bx:-64,bz:80},{ax:-80,az:20,bx:-80,bz:32},{ax:135,az:-40,bx:100,bz:-22},{ax:100,az:-22,bx:68,bz:-10},{ax:-36,az:-74,bx:-22,bz:-56},{ax:-90,az:-158,bx:-124,bz:-188},{ax:-50,az:4,bx:-38,bz:16},{ax:52,az:-112,bx:70,bz:-112},{ax:22,az:82,bx:16,bz:48},{ax:-58,az:-142,bx:-58,bz:-36},{ax:-58,az:-36,bx:-68,bz:-16},{ax:36,az:8,bx:50,bz:4},{ax:-58,az:-158,bx:-40,bz:-168},{ax:66,az:-90,bx:82,bz:-90},{ax:-8,az:-162,bx:4,bz:-148},{ax:135,az:-40,bx:148,bz:-40},{ax:112,az:-83,bx:124,bz:-70},{ax:82,az:-44,bx:96,bz:-44},{ax:-68,az:12,bx:-84,bz:8},{ax:-8,az:-88,bx:16,bz:-86},{ax:135,az:-40,bx:135,bz:-22},{ax:124,az:-70,bx:100,bz:-70},{ax:82,az:-44,bx:82,bz:-28},{ax:-68,az:-16,bx:-68,bz:2},{ax:135,az:-40,bx:122,bz:-40},{ax:112,az:-83,bx:98,bz:-83},{ax:82,az:-44,bx:70,bz:-44},{ax:-90,az:-158,bx:-102,bz:-158},{ax:8,az:-78,bx:-18,bz:-78},{ax:-78,az:-172,bx:-64,bz:-184},{ax:18,az:-152,bx:32,bz:-152},{ax:-96,az:4,bx:-96,bz:16},{ax:66,az:-74,bx:82,bz:-74},{ax:-78,az:-172,bx:-78,bz:-156},{ax:-96,az:4,bx:-110,bz:8},{ax:-110,az:8,bx:-110,bz:20},{ax:-110,az:20,bx:-110,bz:32},{ax:-110,az:8,bx:-122,bz:8},{ax:-122,az:8,bx:-122,bz:20},{ax:8,az:-98,bx:-8,bz:-98},{ax:-8,az:-98,bx:-22,bz:-98},{ax:-8,az:-88,bx:8,bz:-88},{ax:-58,az:-36,bx:-78,bz:-36},{ax:82,az:-90,bx:96,bz:-90},{ax:8,az:-78,bx:-5,bz:-78},{ax:4,az:-148,bx:16,bz:-148},{ax:-90,az:-148,bx:-90,bz:-136},{ax:16,az:-86,bx:16,bz:-74},{ax:-32,az:-148,bx:-48,bz:-138},{ax:52,az:-112,bx:52,bz:-126},{ax:52,az:-126,bx:70,bz:-126},{ax:0,az:-68,bx:0,bz:-118},{ax:48,az:-70,bx:90,bz:-80},{ax:-46,az:-148,bx:-90,bz:-148},{ax:-38,az:16,bx:-68,bz:12},{ax:38,az:-104,bx:52,bz:-112},{ax:172,az:-48,bx:158,bz:-62},{ax:-16,az:36,bx:4,bz:32},{ax:4,az:-138,bx:-18,bz:-138},{ax:68,az:6,bx:50,bz:4},{ax:66,az:-90,bx:66,bz:-104},{ax:66,az:-104,bx:80,bz:-104},{ax:6,az:148,bx:18,bz:136},{ax:8,az:-98,bx:22,bz:-98},{ax:172,az:-48,bx:172,bz:-62},{ax:-64,az:-184,bx:-92,bz:-184},{ax:-18,az:-88,bx:-32,bz:-88},{ax:96,az:-90,bx:96,bz:-104},{ax:-15,az:-8,bx:-28,bz:-8},{ax:-28,az:-8,bx:-28,bz:6},{ax:-32,az:-88,bx:-46,bz:-88},{ax:-50,az:4,bx:-50,bz:-22},{ax:-68,az:12,bx:-80,bz:20},{ax:-38,az:16,bx:-38,bz:28},{ax:-58,az:-142,bx:-46,bz:-132},{ax:38,az:-104,bx:24,bz:-118},{ax:-90,az:-136,bx:-110,bz:-136},{ax:-32,az:-98,bx:-22,bz:-110}];let i=0;for(const a of t){const s=a.bx-a.ax,r=a.bz-a.az,o=s*s+r*r;let h=((n-a.ax)*s+(e-a.az)*r)/o;h=Math.min(1,Math.max(0,h));const c=a.ax+s*h,d=a.az+r*h,p=Math.hypot(n-c,e-d);i=Math.max(i,Qa(5.4,1.6,p))}return i}function Dp(){const n=new Oi(es,es,ic,ic);n.rotateX(-Math.PI/2);const e=n.attributes.position,t=new Float32Array(e.count*3);for(let r=0;r<e.count;r++){const o=e.getX(r),h=e.getZ(r),c=I(o,h);e.setY(r,c)}n.computeVertexNormals();const i=n.attributes.normal;for(let r=0;r<e.count;r++){const o=1-Math.abs(i.getY(r)),h=Cp(e.getX(r),e.getZ(r),e.getY(r),o);t[r*3]=h.r,t[r*3+1]=h.g,t[r*3+2]=h.b}n.setAttribute("color",new Wt(t,3));const a=new Fe({vertexColors:!0,roughness:.94,metalness:.02,flatShading:!1}),s=new dt(n,a);return s.receiveShadow=!0,s.name="terrain",s}function Ip(){const n=new G;n.name="rocks";const e=[new mt(1,0),new Vr(1,0),new Wr(1,0)],t=[new Fe({color:8011048,roughness:.95,flatShading:!0}),new Fe({color:6040604,roughness:.92,flatShading:!0}),new Fe({color:9260592,roughness:.9,flatShading:!0})],i=new Mt,a=[220,160,90];for(let s=0;s<3;s++){const r=new np(e[s],t[s],a[s]);r.castShadow=!0,r.receiveShadow=!0;let o=0,h=0;for(;o<a[s]&&h<a[s]*8;){h++;const c=(Ln(o,s,1)-.5)*es*.92,d=(Ln(o,s,2)-.5)*es*.92;if(Math.hypot(c,d)<42||Math.hypot(c-52,d-24)<22||Math.hypot(c-22,d-82)<18||Math.hypot(c-80,d+44)<44||Math.hypot(c-112,d+83)<22||Math.hypot(c+32,d+98)<20||Math.hypot(c+88,d+188)<30||Math.hypot(c-22,d+112)<16||Math.hypot(c+68,d+16)<22||Math.hypot(c-36,d-72)<20||Math.hypot(c+24,d-44)<20||Math.hypot(c+32,d+148)<16||Math.hypot(c+64,d+90)<14||Math.hypot(c+50,d+100)<22||Math.hypot(c-38,d+126)<16||Math.hypot(c+18,d+88)<14||Math.hypot(c-68,d+10)<16||Math.hypot(c+60,d+148)<12||Math.hypot(c+64,d+118)<12||Math.hypot(c+48,d-68)<20||Math.hypot(c-78,d-56)<20||Math.hypot(c+13,d+134)<20||Math.hypot(c-8,d+142)<16||Math.hypot(c-135,d+40)<24||Math.hypot(c-68,d-6)<16||Math.hypot(c+28,d+138)<12||Math.hypot(c+36,d+74)<18||Math.hypot(c-2,d+22)<12||Math.hypot(c+50,d+72)<14||Math.hypot(c-10,d+124)<16||Math.hypot(c-20,d-8)<16||Math.hypot(c+16,d-136)<32||Math.hypot(c-158,d+62)<24||Math.hypot(c+96,d+16)<20||Math.hypot(c+78,d+172)<16||Math.hypot(c-66,d+74)<16||Math.hypot(c-18,d+152)<14||Math.hypot(c+20,d+100)<14||Math.hypot(c+8,d+162)<14||Math.hypot(c-8,d+98)<14||Math.hypot(c-48,d+70)<14||Math.hypot(c+68,d-12)<16||Math.hypot(c-22,d+80)<14||Math.hypot(c-52,d+112)<16||Math.hypot(c+90,d+158)<14||Math.hypot(c-8,d+78)<14||Math.hypot(c+8,d+88)<14||Math.hypot(c+96,d-4)<14||Math.hypot(c-142,d+62)<14||Math.hypot(c-28,d+140)<14||Math.hypot(c+90,d+148)<12||Math.hypot(c-12,d-18)<12||Math.hypot(c-36,d-8)<14||Math.hypot(c-36,d+6)<14||Math.hypot(c+50,d-4)<14||Math.hypot(c+58,d+142)<14||Math.hypot(c+32,d+22)<14||Math.hypot(c-66,d+90)<14||Math.hypot(c-22,d+98)<14||Math.hypot(c-172,d+48)<14||Math.hypot(c-38,d+104)<14||Math.hypot(c-24,d+128)<12||Math.hypot(c+80,d-20)<14||Math.hypot(c+110,d+136)<14||Math.hypot(c+22,d+110)<14||Math.hypot(c+38,d-28)<14||Math.hypot(c+46,d+132)<14||Math.hypot(c-24,d+118)<14||Math.hypot(c-6,d-148)<12||Math.hypot(c+64,d-80)<14||Math.hypot(c+80,d-32)<14||Math.hypot(c-100,d+22)<12||Math.hypot(c+22,d+56)<14||Math.hypot(c+124,d+188)<16||Math.hypot(c+38,d-16)<14||Math.hypot(c-70,d+112)<16||Math.hypot(c-16,d-48)<12||Math.hypot(c+58,d+36)<14||Math.hypot(c-50,d-4)<14||Math.hypot(c+40,d+168)<14||Math.hypot(c-82,d+90)<14||Math.hypot(c-4,d+148)<14||Math.hypot(c-148,d+40)<14||Math.hypot(c-124,d+70)<14||Math.hypot(c-96,d+44)<14||Math.hypot(c+84,d-8)<14||Math.hypot(c-16,d+86)<14||Math.hypot(c-135,d+22)<14||Math.hypot(c-100,d+70)<14||Math.hypot(c-82,d+28)<14||Math.hypot(c+68,d-2)<14||Math.hypot(c-122,d+40)<14||Math.hypot(c-98,d+83)<14||Math.hypot(c-70,d+44)<14||Math.hypot(c+102,d+158)<14||Math.hypot(c+18,d+78)<14||Math.hypot(c+64,d+184)<14||Math.hypot(c-32,d+152)<14||Math.hypot(c+96,d-16)<14||Math.hypot(c-82,d+74)<14||Math.hypot(c+78,d+156)<14||Math.hypot(c+110,d-8)<14||Math.hypot(c+110,d-20)<14||Math.hypot(c+110,d-32)<14||Math.hypot(c+122,d-8)<14||Math.hypot(c+122,d-20)<14||Math.hypot(c+8,d+98)<14||Math.hypot(c+22,d+98)<14||Math.hypot(c-8,d+88)<14||Math.hypot(c+78,d+36)<14||Math.hypot(c-96,d+90)<14||Math.hypot(c+5,d+78)<12||Math.hypot(c-16,d+148)<14||Math.hypot(c+90,d+136)<14||Math.hypot(c-16,d+74)<12||Math.hypot(c+48,d+138)<14||Math.hypot(c-52,d+126)<14||Math.hypot(c-70,d+126)<14||Math.hypot(c-0,d+68)<12||Math.hypot(c-48,d+70)<12||Math.hypot(c+46,d+148)<12||Math.hypot(c+38,d-16)<12||Math.hypot(c-38,d+104)<12||Math.hypot(c-172,d+48)<12||Math.hypot(c+16,d-36)<12||Math.hypot(c-4,d+138)<12||Math.hypot(c-68,d-6)<12||Math.hypot(c-66,d+104)<14||Math.hypot(c-80,d+104)<12||Math.hypot(c-18,d-136)<14||Math.hypot(c-22,d+98)<12||Math.hypot(c-172,d+62)<14||Math.hypot(c+92,d+184)<14||Math.hypot(c+32,d+88)<14||Math.hypot(c-96,d+104)<14||Math.hypot(c+28,d+8)<12||Math.hypot(c+28,d-6)<12||Math.hypot(c+46,d+88)<14||Math.hypot(c+50,d+22)<14||Math.hypot(c+80,d-20)<14)continue;const p=I(c,d),f=.35+Ln(o,s,3)*(s===2?2.8:1.4);i.position.set(c,p+f*.25,d),i.rotation.set(Ln(o,s,4)*6,Ln(o,s,5)*6,Ln(o,s,6)*6),i.scale.set(f,f*(.6+Ln(o,s,7)*.7),f*(.7+Ln(o,s,8)*.5)),i.updateMatrix(),r.setMatrixAt(o,i.matrix),o++}r.count=o,n.add(r)}return n}function Ln(n,e,t){const i=Math.sin(n*12.9898+e*78.233+t*45.164)*43758.5453;return i-Math.floor(i)}const Lp=`
varying vec3 vWorld;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWorld = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}
`,Up=`
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
`;function zp(n){const e=new vt(900,32,20),t=new bn({vertexShader:Lp,fragmentShader:Up,uniforms:{uSunDir:{value:n.clone().normalize()}},side:It,depthWrite:!1}),i=new dt(e,t);return i.name="sky",i}function Np(n){const e=new G,t=n.clone().normalize(),i=new Sp(16769456,2.15);i.position.copy(t.clone().multiplyScalar(180)),i.castShadow=!0,i.shadow.mapSize.set(1536,1536),i.shadow.camera.near=10,i.shadow.camera.far=420,i.shadow.camera.left=-130,i.shadow.camera.right=130,i.shadow.camera.top=130,i.shadow.camera.bottom=-130,i.shadow.bias=-8e-4,e.add(i);const a=new Mp(14727304,6959128,.55);e.add(a);const s=new bp(12611648,.16);e.add(s);const r=new dt(new vt(7,16,16),new Fr({color:16773572}));return r.position.copy(t.clone().multiplyScalar(420)),e.add(r),e.name="sun",e}function Op(){const n=new G;n.name="mountains";const e=new Fe({color:7024156,roughness:1,flatShading:!0}),t=[[0,-300,18,70],[80,-310,14,52],[-90,-305,16,60],[220,-280,12,40],[-240,-270,13,48],[300,-40,15,55],[305,80,11,38],[-310,20,16,62],[-300,140,12,44],[40,310,17,58],[-70,300,13,46],[160,290,10,36]];for(const[i,a,s,r]of t){const o=new ki(s,r,6),h=new dt(o,e),c=I(i,a)+r*.35;h.position.set(i,c,a),h.rotation.y=(i+a)*.01,n.add(h)}return n}function Fp(){const e=new Float32Array(2100);for(let s=0;s<700;s++)e[s*3]=(Math.random()-.5)*220,e[s*3+1]=1+Math.random()*18,e[s*3+2]=(Math.random()-.5)*220;const t=new Lt;t.setAttribute("position",new Wt(e,3));const i=new kc({color:13934698,size:.18,transparent:!0,opacity:.35,depthWrite:!1}),a=new ip(t,i);return a.name="dust",a}function Bp(n){n.fog=new Hr(12880472,.00155),n.background=new We(12880472)}const l={steel:new Fe({color:13225425,metalness:.88,roughness:.28}),steelDark:new Fe({color:9146518,metalness:.82,roughness:.38}),tiles:new Fe({color:1710620,metalness:.15,roughness:.72}),soot:new Fe({color:2763308,metalness:.4,roughness:.55}),pad:new Fe({color:7168600,metalness:.08,roughness:.88}),padRing:new Fe({color:4866876,metalness:.1,roughness:.8}),solar:new Fe({color:727603,metalness:.55,roughness:.22}),solarFrame:new Fe({color:10133670,metalness:.7,roughness:.35}),tankCh4:new Fe({color:12868132,metalness:.35,roughness:.45}),tankO2:new Fe({color:14212579,metalness:.4,roughness:.4}),hab:new Fe({color:13616824,metalness:.15,roughness:.62}),habDark:new Fe({color:6972508,metalness:.2,roughness:.55}),glass:new Fe({color:8963232,metalness:.1,roughness:.18,transparent:!0,opacity:.42,depthWrite:!1}),plant:new Fe({color:4160056,roughness:.85}),rover:new Fe({color:12106944,metalness:.55,roughness:.4}),roverDark:new Fe({color:3356218,metalness:.4,roughness:.5}),crate:new Fe({color:9080724,metalness:.45,roughness:.5}),ice:new Fe({color:14083823,metalness:.05,roughness:.35}),rust:new Fe({color:8011560,roughness:.9}),glowWarm:new Fe({color:16761994,emissive:16751178,emissiveIntensity:.85,roughness:.4}),glowPad:new Fe({color:16765056,emissive:16756800,emissiveIntensity:.7}),concrete:new Fe({color:9076852,roughness:.92}),lattice:new Fe({color:10133668,metalness:.7,roughness:.4}),graded:new Fe({color:6968134,roughness:.94,metalness:.04}),pipe:new Fe({color:8030868,metalness:.55,roughness:.4}),cable:new Fe({color:2762274,metalness:.35,roughness:.55}),robot:new Fe({color:13159632,metalness:.62,roughness:.38}),flagIce:new Fe({color:12966116,roughness:.72,metalness:.04}),flagDeposit:new Fe({color:12081704,roughness:.8,metalness:.06}),track:new Fe({color:4006936,roughness:.97}),roadBed:new Fe({color:6044202,roughness:.97,metalness:.02}),soil:new Fe({color:4861468,roughness:.96}),plantLeaf:new Fe({color:3107378,roughness:.88}),dish:new Fe({color:14210252,metalness:.38,roughness:.42}),suit:new Fe({color:15131352,metalness:.18,roughness:.55}),suitDark:new Fe({color:6052438,metalness:.35,roughness:.5}),visor:new Fe({color:12886090,metalness:.75,roughness:.18,emissive:3811336,emissiveIntensity:.28}),battery:new Fe({color:3817026,metalness:.48,roughness:.48})};function kp(n,e="#1c120c",t="#f3e2cc"){const i=document.createElement("canvas");i.width=512,i.height=128;const a=i.getContext("2d");a.fillStyle=e,a.fillRect(0,0,512,128),a.strokeStyle=t,a.lineWidth=6,a.strokeRect(10,10,492,108),a.fillStyle=t;const s=n.length>12?36:n.length>8?44:n.length>5?54:64;a.font=`bold ${s}px sans-serif`,a.textAlign="center",a.textBaseline="middle",a.fillText(n,256,68);const r=new ap(i);return r.colorSpace=Ot,r}function u(n,e,t,i,a,s=0,r=0,o=0){const h=new dt(n,e);return h.position.set(t,i,a),h.rotation.set(s,r,o),h.castShadow=!0,h.receiveShadow=!0,h}function Ft(n,e,t=0){return[n,I(n,e)+t,e]}function T(n,e,t,i,a,s,r,o,h=0){const c=new Fe({map:kp(n,e,t),side:ln,roughness:.55,metalness:.08}),d=new dt(new Oi(i,a),c);return d.position.set(s,r,o),d.rotation.y=h,d.castShadow=!1,d}function Ee(n,e,t,i=0,a=1){const s=I(e,t)+.85*a;n.add(u(new x(1.7*a,1.5*a,1.7*a),l.crate,e,s,t,0,i,0)),n.add(u(new x(1.78*a,.08,1.78*a),l.steelDark,e,s+.78*a,t,0,i,0))}function Hp(){const n=new G;n.name="settlement";const e=[],t=[];n.add(Jn(0,0,{finished:!0}));const i=wi(0,0,{name:"starship",crewHab:!0});n.add(i),b1(e),t.push({id:"starship",name:"Crew hab Starship",position:new y(0,18,0)}),t.push({id:"eva",name:"EVA / airlock",position:new y(2,3,12)});const a=Q1();n.add(a),e.push({type:"box",x:12,z:18,w:6,d:3}),t.push({id:"evarack",name:"EVA suit rack",position:new y(12,3,18)}),n.add(Jn(52,24,{finished:!1}));const s=wi(52,24,{name:"cargo-starship",cargoOpen:!0});n.add(s),e.push({type:"cyl",x:52,z:24,r:7.4}),t.push({id:"cargo",name:"Cargo Starship",position:new y(52,18,24)}),n.add(Jn(36,72,{finished:!1}));const r=wi(36,72,{name:"cargo-3",cargoOpen:!0});n.add(r),e.push({type:"cyl",x:36,z:72,r:7.4}),t.push({id:"cargo3",name:"Cargo Starship 3",position:new y(36,18,72)}),n.add(ac(24,70)),n.add(Jn(-24,44,{finished:!1}));const o=wi(-24,44,{name:"cargo-4"});n.add(o),e.push({type:"cyl",x:-24,z:44,r:7.4}),t.push({id:"cargo4",name:"Cargo Starship 4",position:new y(-24,18,44)}),n.add(Jn(-48,68,{finished:!1}));const h=wi(-48,68,{name:"cargo-5",cargoOpen:!0});n.add(h),e.push({type:"cyl",x:-48,z:68,r:7.4}),t.push({id:"cargo5",name:"Window-2 cargo Starship",position:new y(-48,18,68)}),n.add(ac(-60,66));const c=um();n.add(c),e.push({type:"box",x:-64,z:80,w:8,d:8}),t.push({id:"crane",name:"Window-2 cargo crane",position:new y(-64,8,80)}),n.add(Jn(78,56,{finished:!1}));const d=wi(78,56,{name:"cargo-6"});n.add(d),e.push({type:"cyl",x:78,z:56,r:7.4}),t.push({id:"cargo6",name:"Window-2 cargo Starship",position:new y(78,18,56)}),n.add(Gp()),n.add(Vp()),n.add(Wp()),n.add(Xp()),t.push({id:"prep",name:"Landing prep",position:new y(22,4,82)});const p=vm();n.add(p),e.push({type:"box",x:16,z:48,w:6,d:5});for(const[Gi,Vi]of[[4,68],[4,50],[4,32]])e.push({type:"cyl",x:Gi,z:Vi,r:.45});t.push({id:"aplights",name:"Pad approach lights",position:new y(16,4,48)});const f=f2();n.add(f),e.push({type:"box",x:-16,z:36,w:8,d:6}),t.push({id:"padflood",name:"Pad flood lights",position:new y(-16,4,36)}),n.add(L1()),e.push({type:"box",x:-38,z:148,w:10,d:8}),t.push({id:"pad2",name:"Next-window pad",position:new y(-16,6,136)}),t.push({id:"sinter",name:"Pad sinter rig",position:new y(-38,4,148)});const m=hm();n.add(m),e.push({type:"box",x:6,z:148,w:6,d:5});for(const[Gi,Vi]of[[2,154],[-34,154],[2,118],[-34,118]])e.push({type:"cyl",x:Gi,z:Vi,r:.55});t.push({id:"beacons",name:"Pad 2 landing beacons",position:new y(6,5,148)});const v=_2();n.add(v),e.push({type:"box",x:18,z:136,w:10,d:6}),t.push({id:"roller",name:"Pad sinter roller",position:new y(18,4,136)});const M=qp();n.add(M),t.push({id:"solar",name:"Solar farm",position:new y(82,6,-44)});const _=Nm();n.add(_),e.push({type:"box",x:70,z:-44,w:1.2,d:22}),t.push({id:"fence1",name:"Farm 1 dust fence",position:new y(70,4,-44)});const g=Am();n.add(g),e.push({type:"box",x:96,z:-44,w:10,d:8}),t.push({id:"comb1",name:"Farm 1 combiner",position:new y(96,4,-44)});const C=Im();n.add(C),e.push({type:"box",x:82,z:-28,w:12,d:8}),t.push({id:"night1",name:"Farm 1 night store",position:new y(82,4,-28)});const R=t1();n.add(R),t.push({id:"solar2",name:"Solar field 2",position:new y(112,5,-83)});const S=zm();n.add(S),e.push({type:"box",x:98,z:-83,w:1.2,d:22}),t.push({id:"fence2",name:"Field 2 dust fence",position:new y(98,4,-83)});const k=Tm();n.add(k),e.push({type:"box",x:124,z:-70,w:10,d:8}),t.push({id:"comb2",name:"Field 2 combiner",position:new y(124,4,-70)});const D=Dm();n.add(D),e.push({type:"box",x:100,z:-70,w:12,d:8}),t.push({id:"night2",name:"Field 2 night store",position:new y(100,4,-70)});const L=T1();n.add(L),t.push({id:"solar3",name:"Solar field 3",position:new y(135,5,-40)});const z=Um();n.add(z),e.push({type:"box",x:122,z:-40,w:1.2,d:22}),t.push({id:"fence3",name:"Field 3 dust fence",position:new y(122,4,-40)});const A=Em();n.add(A),e.push({type:"box",x:148,z:-40,w:10,d:8}),t.push({id:"comb3",name:"Field 3 combiner",position:new y(148,4,-40)});const b=Pm();n.add(b),e.push({type:"box",x:135,z:-22,w:12,d:8}),t.push({id:"night3",name:"Field 3 night store",position:new y(135,4,-22)});const U=z1();n.add(U),e.push({type:"box",x:158,z:-28,w:12,d:8}),t.push({id:"solar4",name:"Solar field 4",position:new y(158,5,-62)});const Y=u2();n.add(Y),e.push({type:"box",x:172,z:-48,w:8,d:6}),t.push({id:"sol4light",name:"Field 4 lights",position:new y(172,4,-48)});const q=M2();n.add(q),e.push({type:"box",x:172,z:-62,w:10,d:8}),t.push({id:"inv4",name:"Field 4 spare inverter",position:new y(172,4,-62)});const Z=$1();n.add(Z),e.push({type:"box",x:142,z:-62,w:1.2,d:22}),t.push({id:"dustfence",name:"Solar dust fence",position:new y(142,4,-62)});const ne=om();n.add(ne),e.push({type:"box",x:172,z:-48,w:10,d:8}),t.push({id:"combiner",name:"Field 4 combiner",position:new y(172,4,-48)});const $=pm();n.add($),e.push({type:"box",x:100,z:-22,w:8,d:6}),t.push({id:"trench",name:"Field 4 power trench",position:new y(100,3,-22)}),n.add(Yp()),n.add(n1());const re=Jp();n.add(re),e.push({type:"box",x:-68,z:-16,w:30,d:22}),t.push({id:"isru",name:"Sabatier ISRU",position:new y(-68,8,-16)});const J=A2();n.add(J),e.push({type:"box",x:-50,z:-22,w:10,d:8}),t.push({id:"catalyst",name:"Spare Sabatier catalyst",position:new y(-50,4,-22)});const he=Lm();n.add(he),e.push({type:"box",x:-68,z:2,w:12,d:8}),t.push({id:"co2t1",name:"CO2 intake 1",position:new y(-68,5,2)});const xe=R2();n.add(xe),e.push({type:"box",x:-80,z:20,w:10,d:8}),t.push({id:"co2sp",name:"Spare CO2 compressor",position:new y(-80,4,20)});const Re=W1();n.add(Re),e.push({type:"box",x:-68,z:12,w:16,d:6}),t.push({id:"radiators",name:"ISRU radiators",position:new y(-68,5,12)});const Xe=Rm();n.add(Xe),e.push({type:"box",x:-84,z:8,w:10,d:8}),t.push({id:"condense",name:"Sabatier condenser",position:new y(-84,5,8)});const it=N1();n.add(it),e.push({type:"box",x:-96,z:-16,w:18,d:18}),t.push({id:"isru2",name:"Sabatier train 2",position:new y(-96,8,-16)});const Q=Z1();n.add(Q),e.push({type:"box",x:-96,z:4,w:12,d:8}),t.push({id:"co2cap",name:"CO2 intake 2",position:new y(-96,5,4)});const oe=Hm();n.add(oe),e.push({type:"box",x:-96,z:16,w:16,d:6}),t.push({id:"radiators2",name:"ISRU radiators 2",position:new y(-96,5,16)});const be=Wm();n.add(be),e.push({type:"box",x:-110,z:8,w:10,d:8}),t.push({id:"condense2",name:"Sabatier condenser 2",position:new y(-110,5,8)});const ue=Xm();n.add(ue),e.push({type:"box",x:-110,z:20,w:10,d:8}),t.push({id:"chiller2",name:"CH4 liquefaction 2",position:new y(-110,5,20)});const Le=qm();n.add(Le),e.push({type:"box",x:-110,z:32,w:10,d:8}),t.push({id:"o2chill2",name:"O2 liquefaction 2",position:new y(-110,5,32)});const Oe=Ym();n.add(Oe),e.push({type:"box",x:-122,z:8,w:12,d:8}),t.push({id:"electro2",name:"ISRU electrolysis 2",position:new y(-122,5,8)});const qe=Km();n.add(qe),e.push({type:"box",x:-122,z:20,w:10,d:8}),t.push({id:"h2tank2",name:"H2 recycle tank 2",position:new y(-122,5,20)});const ut=nm();n.add(ut),e.push({type:"box",x:-50,z:4,w:12,d:8}),t.push({id:"electro",name:"ISRU electrolysis",position:new y(-50,5,4)});const Ze=d2();n.add(Ze),e.push({type:"box",x:-38,z:16,w:8,d:6}),t.push({id:"isrulight",name:"ISRU plant lights",position:new y(-38,4,16)});const gt=xm();n.add(gt),e.push({type:"box",x:-38,z:16,w:10,d:8}),t.push({id:"h2tank",name:"H2 recycle tank",position:new y(-38,5,16)});const H=C2();n.add(H),e.push({type:"box",x:-38,z:28,w:10,d:8}),t.push({id:"h2dry",name:"Spare H2 dryer",position:new y(-38,4,28)});const Ut=Mm();n.add(Ut),e.push({type:"box",x:-58,z:-36,w:12,d:8}),t.push({id:"pwater",name:"ISRU process water",position:new y(-58,5,-36)});const Ye=jm();n.add(Ye),e.push({type:"box",x:-78,z:-36,w:12,d:8}),t.push({id:"pwater2",name:"ISRU process water 2",position:new y(-78,5,-36)});const Ke=dm();n.add(Ke),e.push({type:"box",x:-80,z:20,w:10,d:8}),t.push({id:"chiller",name:"CH4 liquefaction",position:new y(-80,5,20)});const De=fm();n.add(De),e.push({type:"box",x:-80,z:32,w:10,d:8}),t.push({id:"o2chill",name:"O2 liquefaction",position:new y(-80,5,32)}),n.add(Kp());const ot=Zp();n.add(ot),e.push({type:"box",x:-14,z:-104,w:14,d:8}),e.push({type:"box",x:2,z:-104,w:14,d:8}),e.push({type:"box",x:-6,z:-116,w:8,d:14}),t.push({id:"habs",name:"Hab cluster",position:new y(-6,5,-108)});const Pe=i1();n.add(Pe),e.push({type:"box",x:-32,z:-98,w:16,d:12}),t.push({id:"hab-kit",name:"Hab from cargo",position:new y(-32,5,-98)});const P=L2();n.add(P),e.push({type:"box",x:-22,z:-110,w:10,d:8}),t.push({id:"coupler",name:"Spare hab coupler",position:new y(-22,4,-110)});const w=a1();n.add(w),e.push({type:"box",x:-46,z:-108,w:14,d:8}),e.push({type:"box",x:-46,z:-94,w:14,d:8}),e.push({type:"box",x:-58,z:-102,w:8,d:14}),t.push({id:"pressure",name:"Pressure habs",position:new y(-50,5,-100)});const V=S1();n.add(V),e.push({type:"box",x:-20,z:-132,w:14,d:8}),e.push({type:"box",x:-6,z:-132,w:14,d:8}),e.push({type:"box",x:-13,z:-142,w:8,d:14}),t.push({id:"hab3",name:"Hab street",position:new y(-13,5,-134)});const ee=R1();n.add(ee),yi(e,-33,-120,"x",28),yi(e,-6,-120,"z",24),yi(e,-4,-58,"z",70),e.push({type:"cyl",x:2,z:-22,r:1.6}),t.push({id:"corridors",name:"Pressurized neighborhood",position:new y(-20,4,-120)});const ie=C1();n.add(ie),e.push({type:"box",x:-30,z:-69,w:9,d:9}),e.push({type:"box",x:-38,z:-74.2,w:7,d:4.4}),yi(e,-36,-87,"z",24),yi(e,-45,-74,"x",12),t.push({id:"yard",name:"Construction yard",position:new y(-36,5,-74)}),t.push({id:"hab6",name:"Hab 6",position:new y(-40,5,-76)});const j=mm();n.add(j),e.push({type:"box",x:-22,z:-56,w:10,d:8}),t.push({id:"regolith",name:"Regolith stockpile",position:new y(-22,4,-56)});const Te=P1();n.add(Te),e.push({type:"box",x:-53,z:-72,w:6,d:7}),t.push({id:"med",name:"Crew ops / medical",position:new y(-50,5,-72)});const fe=D1();n.add(fe),e.push({type:"box",x:10,z:-124,w:14,d:10}),yi(e,2,-128,"x",10),t.push({id:"commons",name:"Crew commons / mess",position:new y(10,5,-124)});const _e=$p();n.add(_e),e.push({type:"box",x:22,z:-112,w:16,d:10}),e.push({type:"box",x:32,z:-112,w:8,d:6}),t.push({id:"greenhouse",name:"CO2 life support",position:new y(22,4,-112)});const $e=q1();n.add($e),e.push({type:"box",x:52,z:-112,w:14,d:9}),t.push({id:"greenhouse2",name:"Greenhouse 2",position:new y(52,4,-112)});const ae=h2();n.add(ae),e.push({type:"box",x:38,z:-104,w:8,d:6}),t.push({id:"ghlight",name:"Greenhouse lights",position:new y(38,4,-104)});const ve=_m();n.add(ve),e.push({type:"box",x:70,z:-112,w:12,d:8}),t.push({id:"food3",name:"Grow vault 4",position:new y(70,4,-112)});const Ie=cm();n.add(Ie),e.push({type:"box",x:38,z:-104,w:10,d:6}),t.push({id:"ghfilter",name:"Grow dust filter",position:new y(38,4,-104)});const Ue=D2();n.add(Ue),e.push({type:"box",x:24,z:-118,w:10,d:8}),t.push({id:"ghf2",name:"Spare grow dust filter",position:new y(24,4,-118)});const Me=s2();n.add(Me),e.push({type:"box",x:52,z:-126,w:12,d:8}),t.push({id:"ghwater",name:"Grow process water",position:new y(52,4,-126)});const Je=r2();n.add(Je),e.push({type:"box",x:70,z:-126,w:10,d:8}),t.push({id:"nutrient",name:"Grow nutrient skid",position:new y(70,4,-126)});const He=G1();n.add(He),e.push({type:"box",x:8,z:-98,w:12,d:8}),t.push({id:"eclss",name:"Hab ECLSS / CO2 scrub",position:new y(8,4,-98)});const at=v2();n.add(at),e.push({type:"box",x:22,z:-98,w:8,d:6}),t.push({id:"blower",name:"Hab spare blower",position:new y(22,4,-98)});const N=Jm();n.add(N),e.push({type:"box",x:-8,z:-98,w:12,d:8}),t.push({id:"eclss2",name:"Hab ECLSS 2",position:new y(-8,4,-98)});const de=rm();n.add(de),e.push({type:"box",x:22,z:-98,w:10,d:8}),t.push({id:"waste",name:"Waste / water recovery",position:new y(22,4,-98)});const K=Zm();n.add(K),e.push({type:"box",x:-22,z:-98,w:10,d:8}),t.push({id:"waste2",name:"Waste recovery 2",position:new y(-22,4,-98)});const te=J1();n.add(te),e.push({type:"box",x:-8,z:-88,w:10,d:8}),t.push({id:"o2buf",name:"Crew O2 buffer",position:new y(-8,4,-88)});const ge=$m();n.add(ge),e.push({type:"box",x:8,z:-88,w:10,d:8}),t.push({id:"o2buf2",name:"Crew O2 buffer 2",position:new y(8,4,-88)});const pe=y2();n.add(pe),e.push({type:"box",x:-32,z:-88,w:10,d:8}),t.push({id:"n2",name:"Hab spare N2",position:new y(-32,4,-88)});const Be=T2();n.add(Be),e.push({type:"box",x:-46,z:-88,w:10,d:8}),t.push({id:"habh2o",name:"Hab spare water",position:new y(-46,4,-88)});const pt=Cm();n.add(pt),e.push({type:"box",x:16,z:-86,w:10,d:8}),t.push({id:"dustlock",name:"Hab-street dust lock",position:new y(16,4,-86)});const St=i2();n.add(St),e.push({type:"box",x:16,z:-74,w:8,d:6}),t.push({id:"evalocker",name:"Hab-street EVA locker",position:new y(16,4,-74)});const nt=o2();n.add(nt),e.push({type:"box",x:0,z:-68,w:8,d:6}),t.push({id:"hablight",name:"Hab-street lights",position:new y(0,4,-68)});const Bt=v1();n.add(Bt),e.push({type:"box",x:38,z:-126,w:14,d:9}),t.push({id:"food",name:"Food / grow vault",position:new y(38,4,-126)});const Yt=E1();n.add(Yt),e.push({type:"box",x:8,z:-142,w:14,d:9}),t.push({id:"food2",name:"Hab-street grow vault",position:new y(8,4,-142)});const la=j1();n.add(la),e.push({type:"box",x:28,z:-140,w:10,d:8}),t.push({id:"condensate",name:"Condensate return",position:new y(28,4,-140)});const da=M1();n.add(da),e.push({type:"box",x:-60,z:-148,w:8,d:6}),e.push({type:"box",x:-64,z:-118,w:8,d:6}),e.push({type:"box",x:-18,z:-88,w:10,d:8}),t.push({id:"water",name:"Water loop",position:new y(-18,4,-88)});const pn=B1();n.add(pn),e.push({type:"box",x:18,z:-152,w:14,d:10}),t.push({id:"potable",name:"Potable water store",position:new y(18,4,-152)});const Hi=km();n.add(Hi),e.push({type:"box",x:32,z:-152,w:10,d:8}),t.push({id:"potable-uv",name:"Potable UV polish",position:new y(32,4,-152)});const ha=k1();n.add(ha),e.push({type:"box",x:-58,z:-108,w:10,d:3}),e.push({type:"box",x:-20,z:-100,w:18,d:3}),e.push({type:"box",x:22,z:-128,w:3,d:12}),t.push({id:"berms",name:"Hab dust berms",position:new y(-20,4,-100)});const ua=w1();n.add(ua),e.push({type:"box",x:68,z:-10,w:16,d:8}),e.push({type:"box",x:-22,z:-88,w:8,d:6}),t.push({id:"battery",name:"Night power store",position:new y(68,4,-10)});const ai=A1();n.add(ai),e.push({type:"box",x:68,z:6,w:16,d:8}),e.push({type:"box",x:-28,z:-138,w:8,d:6}),t.push({id:"battery2",name:"Crew night store",position:new y(68,4,6)});const fa=K1();n.add(fa),e.push({type:"box",x:8,z:-78,w:12,d:7}),t.push({id:"battery3",name:"Hab night store 3",position:new y(8,4,-78)});const si=Fm();n.add(si),e.push({type:"box",x:-18,z:-78,w:12,d:7}),t.push({id:"battery4",name:"Hab night store 4",position:new y(-18,4,-78)});const pa=e2();n.add(pa),e.push({type:"box",x:-5,z:-78,w:8,d:6}),t.push({id:"habtrench",name:"Hab-street power trench",position:new y(-5,4,-78)});const ma=d1();n.add(ma),e.push({type:"box",x:-15,z:-8,w:10,d:7}),t.push({id:"spaceport",name:"Methalox spaceport",position:new y(-15,4,-8)});const as=b2();n.add(as),e.push({type:"box",x:-28,z:-8,w:8,d:6}),t.push({id:"ch4hose",name:"Spare CH4 load hose",position:new y(-28,4,-8)});const ss=E2();n.add(ss),e.push({type:"box",x:-28,z:6,w:8,d:6}),t.push({id:"o2hose",name:"Spare O2 load hose",position:new y(-28,4,6)});const rs=I1();n.add(rs),e.push({type:"box",x:20,z:8,w:16,d:12}),t.push({id:"stock",name:"Methalox stockpile",position:new y(20,4,8)});const E=em();n.add(E),e.push({type:"box",x:36,z:8,w:10,d:8}),t.push({id:"ch4buf",name:"CH4 return buffer",position:new y(36,4,8)});const F=tm();n.add(F),e.push({type:"box",x:36,z:-6,w:10,d:8}),t.push({id:"o2ret",name:"O2 return buffer",position:new y(36,4,-6)});const W=wm();n.add(W),e.push({type:"box",x:50,z:4,w:8,d:18}),t.push({id:"mxberm",name:"Methalox farm berm",position:new y(50,4,4)});const X=m2();n.add(X),e.push({type:"box",x:68,z:6,w:8,d:6}),t.push({id:"mxlight",name:"Methalox farm lights",position:new y(68,4,6)});const B=am();n.add(B),e.push({type:"box",x:-32,z:-22,w:10,d:8}),t.push({id:"pump",name:"Methalox pump house",position:new y(-32,4,-22)}),n.add(l1()),n.add(h1()),n.add($i(16,14,-.4)),n.add($i(8,-62,1.2)),n.add($i(30,74,-.2)),n.add($i(-94,-182,.7)),n.add(on(-90,-148,.4,{kind:"ice",loaded:!0})),t.push({id:"rover",name:"Haul rover",position:new y(8,2,-62)}),t.push({id:"haul2",name:"Ice haul at crush",position:new y(-90,3,-148)});const se=_1();n.add(se),e.push({type:"box",x:-64,z:-90,w:10,d:8}),t.push({id:"haul",name:"Ice haul",position:new y(-64,3,-90)});const me=jp();n.add(me),e.push({type:"box",x:48,z:-86,w:16,d:12}),t.push({id:"workshop",name:"Workshop",position:new y(48,5,-86)});const we=c2();n.add(we),e.push({type:"box",x:48,z:-70,w:8,d:6}),t.push({id:"shoplight",name:"Workshop lights",position:new y(48,4,-70)});const ye=X1();n.add(ye),e.push({type:"box",x:22,z:-80,w:12,d:8}),t.push({id:"depot",name:"Spare-parts depot",position:new y(22,4,-80)});const ze=F1();n.add(ze),e.push({type:"box",x:66,z:-74,w:16,d:12}),t.push({id:"workshop2",name:"Workshop bay 2",position:new y(66,5,-74)});const ke=sm();n.add(ke),e.push({type:"box",x:66,z:-90,w:10,d:8}),t.push({id:"press",name:"Sinter press",position:new y(66,4,-90)});const Se=g2();n.add(Se),e.push({type:"box",x:66,z:-104,w:12,d:8}),t.push({id:"kiln",name:"Sinter kiln",position:new y(66,4,-104)});const je=x2();n.add(je),e.push({type:"box",x:80,z:-104,w:8,d:6}),t.push({id:"bricks",name:"Sinter brick pallet",position:new y(80,4,-104)});const st=Sm();n.add(st),e.push({type:"box",x:82,z:-90,w:10,d:8}),t.push({id:"crib",name:"Workshop tool crib",position:new y(82,4,-90)});const ct=Qm();n.add(ct),e.push({type:"box",x:96,z:-90,w:10,d:8}),t.push({id:"rack",name:"Workshop parts rack",position:new y(96,4,-90)});const Et=S2();n.add(Et),e.push({type:"box",x:96,z:-104,w:10,d:8}),t.push({id:"welder",name:"Workshop spare welder",position:new y(96,4,-104)});const et=Gm();n.add(et),e.push({type:"box",x:82,z:-74,w:16,d:12}),t.push({id:"workshop3",name:"Workshop bay 3",position:new y(82,5,-74)});const Ae=V1();n.add(Ae),n.add($i(48,-70,.2)),t.push({id:"shelter",name:"Rover dust shelter",position:new y(48,4,-70)});for(const[Gi,Vi]of[[42.8,-73.4],[53.2,-73.4],[42.8,-66.6],[53.2,-66.6]])e.push({type:"cyl",x:Gi,z:Vi,r:.45});const Kt=Qp();n.add(Kt),e.push({type:"cyl",x:-18,z:-138,r:3}),t.push({id:"comms",name:"Comms tower",position:new y(-18,16,-138)});const tt=p2();n.add(tt),e.push({type:"box",x:4,z:-138,w:8,d:6}),t.push({id:"commslight",name:"Comms-yard lights",position:new y(4,4,-138)});const kt=lm();n.add(kt),e.push({type:"cyl",x:24,z:-128,r:2.2}),t.push({id:"weather",name:"Weather / dust mast",position:new y(24,12,-128)});const Tn=x1();n.add(Tn),e.push({type:"cyl",x:-32,z:-148,r:8.4}),e.push({type:"box",x:-40,z:-154,w:6,d:5}),t.push({id:"earth",name:"Earth dish · 12 min delay",position:new y(-32,12,-148)});const Pt=a2();n.add(Pt),e.push({type:"box",x:-48,z:-138,w:10,d:12}),t.push({id:"commsberm",name:"Comms dust berm",position:new y(-48,4,-138)});const Bn=H1();n.add(Bn),e.push({type:"cyl",x:-8,z:-162,r:6.2}),t.push({id:"earth2",name:"Backup Earth dish",position:new y(-8,10,-162)});const lt=bm();n.add(lt),e.push({type:"box",x:4,z:-148,w:10,d:8}),t.push({id:"commsbatt",name:"Comms night store",position:new y(4,4,-148)});const Xt=t2();n.add(Xt),e.push({type:"box",x:16,z:-148,w:10,d:8}),t.push({id:"commsinv",name:"Comms spare inverter",position:new y(16,4,-148)});const kn=e1();n.add(kn),e.push({type:"cyl",x:-58,z:-158,r:6}),t.push({id:"ice",name:"Ice mining rig",position:new y(-58,8,-158)});const zt=l2();n.add(zt),e.push({type:"box",x:-46,z:-148,w:8,d:6}),t.push({id:"icelight",name:"Ice-mine lights",position:new y(-46,4,-148)});const an=ym();n.add(an),e.push({type:"box",x:-40,z:-168,w:10,d:12}),t.push({id:"ice1berm",name:"Ice mine 1 berm",position:new y(-40,4,-168)});const sn=O1();n.add(sn),e.push({type:"cyl",x:-78,z:-172,r:6}),t.push({id:"ice2",name:"Ice mine 2",position:new y(-78,8,-172)});const ga=Bm();n.add(ga),e.push({type:"box",x:-64,z:-184,w:10,d:12}),t.push({id:"ice2berm",name:"Ice mine 2 berm",position:new y(-64,4,-184)});const Vc=w2();n.add(Vc),e.push({type:"box",x:-92,z:-184,w:10,d:8}),t.push({id:"drill2",name:"Ice mine 2 spare drill",position:new y(-92,4,-184)});const Wc=Vm();n.add(Wc),e.push({type:"box",x:-78,z:-156,w:10,d:8}),t.push({id:"melt2",name:"Ice melt still 2",position:new y(-78,5,-156)});const Xc=Y1();n.add(Xc),e.push({type:"box",x:-90,z:-158,w:12,d:10}),t.push({id:"ice-depot",name:"Ice crush depot",position:new y(-90,4,-158)});const qc=Om();n.add(qc),e.push({type:"box",x:-102,z:-158,w:10,d:8}),t.push({id:"crushcover",name:"Ice crush cover",position:new y(-102,4,-158)});const Yc=n2();n.add(Yc),e.push({type:"box",x:-90,z:-136,w:10,d:8}),t.push({id:"weigh",name:"Ice haul weigh",position:new y(-90,4,-136)});const Kc=I2();n.add(Kc),e.push({type:"box",x:-110,z:-136,w:12,d:8}),t.push({id:"haul3",name:"Spare ice haul",position:new y(-110,3,-136)});const Jc=im();n.add(Jc),e.push({type:"box",x:-58,z:-142,w:10,d:8}),t.push({id:"melt",name:"Ice melt still",position:new y(-58,5,-142)});const Zc=P2();n.add(Zc),e.push({type:"box",x:-46,z:-132,w:10,d:8}),t.push({id:"melt3",name:"Spare ice-melt still",position:new y(-46,4,-132)});const $c=c1();n.add($c),e.push({type:"cyl",x:-82,z:-176,r:2.4}),t.push({id:"survey",name:"Resource survey",position:new y(-88,5,-188)});const jc=gm();return n.add(jc),e.push({type:"cyl",x:-124,z:-188,r:2.4}),t.push({id:"survey2",name:"West ice survey",position:new y(-124,5,-188)}),n.add(jt(42,22,.6)),n.add(jt(39,26,-.4)),n.add(jt(26,78,2.2)),n.add(jt(26,68,.5)),n.add(jt(22,72,-.8)),n.add(jt(-80,-174,.8)),n.add(jt(-34,-92,-1.2)),n.add(jt(-28,-104,.3)),n.add(jt(16,-120,.6)),n.add(jt(70,-70,.4)),n.add(jt(-28,128,1.1)),n.add(o1()),y1(e),n.add(p1()),n.add(m1()),n.add(g1()),{group:n,colliders:e,landmarks:t}}function Jn(n,e,t={}){const i=new G;i.name=t.finished?"pad":"cargo-pad";const a=I(n,e),s=t.finished?20:16,r=t.finished?l.pad:l.graded;if(i.add(u(new O(s,s,.45,48),r,n,a+.15,e)),t.finished){i.add(u(new Ne(s+.4,.55,8,48),l.padRing,n,a+.4,e,Math.PI/2,0,0)),i.add(u(new aa(7.5,8.1,40),l.padRing,n,a+.4,e,-Math.PI/2,0,0)),i.add(u(new aa(13,13.5,40),l.padRing,n,a+.4,e,-Math.PI/2,0,0));for(let c=0;c<12;c++){const d=c/12*Math.PI*2;i.add(u(new x(.35,.55,.35),l.glowPad,n+Math.cos(d)*19.2,a+.55,e+Math.sin(d)*19.2))}}else{i.add(u(new Ne(s+.3,.4,8,36),l.padRing,n,a+.32,e,Math.PI/2,0,0));for(let c=0;c<8;c++){const d=c/8*Math.PI*2;i.add(u(new x(.28,.4,.28),l.glowPad,n+Math.cos(d)*(s-.6),a+.45,e+Math.sin(d)*(s-.6)))}}const o=t.finished?26:21,h=u(new Ne(o,t.finished?2.2:1.8,8,40),l.rust,n,a-.4,e,Math.PI/2,0,0);return h.scale.set(1,.45,1),i.add(h),i}function wi(n=0,e=0,t={}){const i=new G;i.name=t.name||"starship",i.position.set(n,0,e);const a=I(n,e)-3.1,s=36,r=4.4;i.add(u(new O(r,r,s,28),l.steel,0,a+8+s/2,0));const o=u(new vt(r,24,16,0,Math.PI*2,0,Math.PI/2),l.steel,0,a+8+s,0);o.scale.set(1,1.55,1),i.add(o);const h=u(new O(r+.04,r+.04,s*.72,20,1,!0,Math.PI*.55,Math.PI*.9),l.tiles,0,a+8+s*.38,0);i.add(h);const c=u(new O(r+.15,r+.55,3.2,24),l.soot,0,a+6.4,0);i.add(c);for(let f=0;f<3;f++){const m=f/3*Math.PI*2;i.add(u(new O(.55,1.15,2.2,12),l.soot,Math.cos(m)*1.5,a+4.6,Math.sin(m)*1.5))}const d=new x(1.1,7.2,3.6);i.add(u(d,l.steelDark,-r-.2,a+14,0,0,0,.18)),i.add(u(d,l.steelDark,r+.2,a+14,0,0,0,-.18));const p=new x(.45,4.2,2.4);i.add(u(p,l.steelDark,-r+.2,a+40,1.2,.15,0,.4)),i.add(u(p,l.steelDark,r-.2,a+40,1.2,.15,0,-.4));for(let f=0;f<6;f++){const m=f/6*Math.PI*2+.2,v=new G,M=u(new x(.22,8.2,.22),l.steelDark,0,0,0,0,0,.72),_=u(new x(1.3,.18,.9),l.steel,3.4,-3.7,0);v.add(M,_),v.position.set(Math.cos(m)*3.2,a+7.6,Math.sin(m)*3.2),v.rotation.y=-m,i.add(v)}for(let f=0;f<5;f++)i.add(u(new x(.7,.35,.08),l.tiles,0,a+28+f*2.1,r+.05));if(i.add(u(new x(1.6,.12,.12),l.glowWarm,0,a+44.5,0)),t.cargoOpen){i.add(u(new x(2.4,6.2,3.4),l.soot,-r+.4,a+16.4,0)),i.add(u(new x(.12,6.4,3.6),l.steel,-r-2.1,a+16.6,2,0,1.15,0));const f=a+13.2,m=I(n,e)+.22,v=-r-.3,M=-r-12.4,_=Math.hypot(v-M,f-m),g=Math.atan2(f-m,v-M);i.add(u(new x(_,.16,3.1),l.steelDark,(v+M)/2,(f+m)/2,0,0,0,g)),i.add(u(new x(10.5,.18,.18),l.lattice,-7.2,a+22.5,0,0,0,.55)),i.add(u(new O(.05,.05,7.2,6),l.cable,-12.2,a+16.2,0)),i.add(u(new x(1.5,1.3,1.5),l.crate,-12.2,a+12.4,0)),i.add(T("CARGO","#1a100c","#f0c089",3.4,.9,-r-.1,a+24,0,-Math.PI/2))}if(t.crewHab){const f=a+13;i.add(u(new O(1.2,1.2,2.7,14),l.habDark,0,f,r+1.35,Math.PI/2,0,0)),i.add(u(new Ne(1.22,.09,6,16),l.steel,0,f,r+.28)),i.add(u(new Ne(1.22,.09,6,16),l.steel,0,f,r+2.55)),i.add(u(new x(1.05,1.75,.1),l.steelDark,0,f,r+2.72)),i.add(u(new x(3.4,.14,2.6),l.steelDark,0,f-1.28,r+2.9)),i.add(u(new x(.1,1.15,2.5),l.steel,-1.6,f-.65,r+2.9)),i.add(u(new x(.1,1.15,2.5),l.steel,1.6,f-.65,r+2.9));const m=f-1.28,v=I(n,e)+.28,M=r+3.6,_=r+13.2,g=11;for(let D=0;D<g;D++){const L=D/(g-1);i.add(u(new x(2.15,.12,.95),l.steelDark,0,m+(v-m)*L,M+(_-M)*L))}const C=Math.hypot(M-_,m-v),R=Math.atan2(m-v,_-M);i.add(u(new x(2.25,.08,C),l.steel,0,(m+v)/2-.12,(M+_)/2,R,0,0)),i.add(u(new x(.08,.85,C),l.steel,-1.12,(m+v)/2+.35,(M+_)/2,R,0,0)),i.add(u(new x(.08,.85,C),l.steel,1.12,(m+v)/2+.35,(M+_)/2,R,0,0));const S=_+1.55,k=I(n,e)+1.35;i.add(u(new O(1.35,1.35,2.5,12),l.habDark,0,k,S)),i.add(u(new x(1.05,1.7,.1),l.steelDark,0,k+.05,S+1.4)),i.add(u(new Ne(1.38,.07,6,14),l.steel,0,k+1.28,S,Math.PI/2,0,0)),i.add(u(new x(2.2,.12,2.2),l.steelDark,0,I(n,e)+.12,S));for(let D=0;D<5;D++)i.add(u(new x(.85,.48,.08),l.glowWarm,1.55,a+16.5+D*3.4,r+.06)),i.add(u(new x(.08,.48,.85),l.glowWarm,r+.06,a+16.5+D*3.4,-1.35));i.add(u(new O(.55,.55,.2,12),l.steel,2.55,a+14.2,r+.04,Math.PI/2,0,0)),i.add(u(new Ne(.52,.06,6,12),l.steelDark,2.55,a+14.2,r+.14)),i.add(T("CREW HAB","#1a100c","#f0c089",3.4,.85,0,f+2.55,r+2.35)),i.add(T("AIRLOCK","#1a100c","#f0c089",2.3,.55,1.85,f+.15,r+2.05,Math.PI/2))}return i}function Gp(){const n=new G;n.name="crates";const e=[[10,8,0],[12.2,8.4,.4],[10.4,10.6,1.6],[13.5,6.2,-.3],[-12,9,.5],[-14,7.2,2.1],[8.5,-11,0],[6.4,-12.5,1.1]];for(const[t,i,a]of e)Ee(n,t,i,a);return n}function Vp(){const n=new G;n.name="cargo-offload";const e=[[40,22,.2],[38.2,24.1,-.3],[41.4,26.2,.8],[36.5,21.4,.1],[37.8,27.6,1.4],[34.8,24.8,-.5],[39.2,19.6,.6],[35.4,19.2,.15]];for(const[s,r,o]of e)Ee(n,s,r,o);Ee(n,38.6,22.8,.1,1.15),Ee(n,33.2,20.4,.25,1.2),Ee(n,31.4,22.1,-.2,1.05);const[t,i,a]=Ft(36,23.5,.08);return n.add(u(new x(8.5,.12,4.2),l.steelDark,t,i,a,0,.15,0)),n.add(T("HAB KIT","#1a100c","#f0c089",2.6,.7,33.2,I(33.2,20.4)+2.5,20.4,.35)),n}function Wp(){const n=new G;n.name="approach";const e=[{fx:0,fz:118,tx:0,tz:32,n:7},{fx:52,fz:90,tx:52,tz:42,n:5},{fx:36,fz:128,tx:36,tz:90,n:4},{fx:-24,fz:92,tx:-24,tz:60,n:4},{fx:-48,fz:118,tx:-48,tz:86,n:4},{fx:78,fz:104,tx:78,tz:74,n:4},{fx:-16,fz:178,tx:-16,tz:154,n:5}];for(const t of e){const i=Math.atan2(t.tx-t.fx,t.tz-t.fz);for(let a=0;a<t.n;a++){const s=a/(t.n-1),r=t.fx+(t.tx-t.fx)*s,o=t.fz+(t.tz-t.fz)*s,h=I(r,o),c=new G;c.add(u(new x(2.5,.16,.34),l.glowPad,-.75,0,0,0,.5,0)),c.add(u(new x(2.5,.16,.34),l.glowPad,.75,0,0,0,-.5,0)),c.position.set(r,h+.14,o),c.rotation.y=i,n.add(c)}}return n}function Xp(){const n=new G;n.name="prep-pad";const e=22,t=82,i=I(e,t);n.add(u(new O(14,14,.28,36),l.graded,e,i+.08,t));const a=u(new Ne(16.2,1.7,8,28,Math.PI*1.35),l.rust,e,i-.15,t,Math.PI/2,.5,0);a.scale.set(1,.42,1),n.add(a);for(let r=0;r<8;r++){const o=r/8*Math.PI*2+.2,h=e+Math.cos(o)*15.2,c=t+Math.sin(o)*15.2,d=I(h,c);n.add(u(new x(.08,1.7,.08),l.steel,h,d+.85,c)),n.add(u(new x(.28,.16,.06),l.glowPad,h,d+1.62,c,0,o,0))}const s=[[12,74],[30,88],[14,90]];for(const[r,o]of s){const h=u(new mt(2.2,0),l.rust,r,I(r,o)+.9,o);h.scale.set(1.2,.65,1.05),n.add(h)}return n.add(T("LANDING PREP","#1a100c","#f0c089",4.4,1,e+10.5,i+2.4,t+2,-.6)),n.add(u(new x(.12,2.4,.12),l.steelDark,e+10.5,i+1.2,t+2)),n}function qp(){const n=new G;n.name="solar";const e=10,t=8;for(let r=0;r<e;r++)for(let o=0;o<t;o++){const h=58+r*5.4,c=-22-o*6.2,d=I(h,c),p=u(new x(.18,1.6,.18),l.solarFrame,h,d+.8,c),f=u(new x(4.6,.08,2.3),l.solar,h,d+1.55,c,-.55,.15,0),m=u(new x(4.75,.05,2.42),l.solarFrame,h,d+1.5,c,-.55,.15,0);n.add(p,f,m)}for(let r=0;r<5;r++){const o=58+r*5.4,h=-22-8*6.2,c=I(o,h);n.add(u(new x(.18,1.6,.18),l.solarFrame,o,c+.8,h)),r<2&&n.add(u(new x(4.6,.08,2.3),l.solar,o+1.1,c+.22,h+1.5,1.2,.25,0))}const[i,a,s]=Ft(54,-18,.7);return n.add(u(new x(2.2,1.4,1.4),l.habDark,i,a,s)),n.add(T("POWER","#111111","#f4e6c8",2,.55,i,a+.2,s+.75)),n}function Yp(){const n=new G;n.name="power-run";const e=54,t=-18,i=-54,a=-16,s=[],r=10;for(let o=0;o<=r;o++){const h=o/r,c=e+(i-e)*h,d=t+(a-t)*h,p=I(c,d);n.add(u(new O(.09,.11,4.4,6),l.steelDark,c,p+2.2,d)),n.add(u(new x(1.15,.08,.08),l.steel,c,p+4.35,d)),s.push({x:c,y:p+4.32,z:d})}for(let o=0;o<s.length-1;o++){const h=s[o],c=s[o+1];for(const d of[-.38,.38]){const p=new Bi([new y(h.x,h.y,h.z+d),new y((h.x+c.x)/2,(h.y+c.y)/2-.75,(h.z+c.z)/2+d),new y(c.x,c.y,c.z+d)]),f=new dt(new ii(p,6,.035,4,!1),l.cable);f.castShadow=!1,n.add(f)}}return n}function Kp(){const n=new G;n.name="water-feed";const e=-58,t=-150,i=-68,a=-26,s=12,r=[];for(let c=0;c<=s;c++){const d=c/s,p=e+(i-e)*d,f=t+(a-t)*d,m=I(p,f)+1.15;r.push(new y(p,m,f)),c%2===0&&n.add(u(new x(.16,1.1,.16),l.steelDark,p,I(p,f)+.55,f))}const o=new Bi(r),h=new dt(new ii(o,24,.16,6,!1),l.pipe);return h.castShadow=!1,n.add(h),n}function Jp(){const n=new G;n.name="isru";const e=-68,t=-16,i=I(e,t);n.add(u(new x(30,.4,22),l.concrete,e,i+.15,t));const a=u(new O(1.8,2,13,12),l.steelDark,e+4,i+6.8,t);n.add(a),n.add(u(new Ne(2.5,.18,6,16),l.steel,e+4,i+10.2,t,Math.PI/2,0,0)),n.add(u(new Ne(2.5,.18,6,16),l.steel,e+4,i+7.4,t,Math.PI/2,0,0)),n.add(T("SABATIER","#1a100c","#f0c089",5.2,1.15,e+6.1,i+8.2,t,Math.PI/2));const s=u(new O(3,3,13,20),l.tankCh4,e-8,i+7.1,t+5.4,0,0,Math.PI/2),r=u(new O(3,3,13,20),l.tankO2,e-8,i+7.1,t-5.2,0,0,Math.PI/2);n.add(s,r),n.add(T("CH4","#6a2208","#f4e6c8",3.6,1,e-1.2,i+7.1,t+5.4)),n.add(T("O2","#2a3340","#e8eef4",3.6,1,e-1.2,i+7.1,t-5.2)),n.add(u(new O(2.2,2.2,7.2,16),l.pipe,e-4,i+4,t-10.4)),n.add(T("H2O","#1a2830","#d6e6ef",2.6,.75,e-4,i+5.6,t-8.1));const o=u(new mt(2.1,0),l.ice,e+1.5,i+1.1,t-10.2);return o.scale.set(1.15,.6,1),n.add(o),n.add(u(new O(.55,.55,7.5,10),l.steel,e+10.5,i+4.1,t-5.4)),n.add(u(new O(2.3,.7,2.6,14),l.steelDark,e+10.5,i+8.8,t-5.4)),n.add(u(new Ne(2.05,.1,6,16),l.steel,e+10.5,i+10.15,t-5.4,Math.PI/2,0,0)),n.add(T("CO2","#1a100c","#f0c089",2.4,.7,e+10.5,i+5.8,t-3.2)),n.add(u(new x(4.2,3,3.2),l.habDark,e+10,i+1.8,t+4.2)),n.add(T("POWER","#111111","#f4e6c8",2.2,.55,e+10,i+2.6,t+5.9)),n.add(u(new O(.16,.16,10,8),l.pipe,e+7.2,i+3.4,t-2.6,0,0,Math.PI/2)),n.add(u(new O(.16,.16,9,8),l.pipe,e-1.5,i+3.6,t+2.4,0,0,Math.PI/2)),n.add(u(new O(.16,.16,8.5,8),l.steel,e-1.5,i+3.6,t-2.2,0,0,Math.PI/2)),n.add(u(new O(.14,.14,6.4,8),l.cable,e+12.2,i+3.8,t+1.2,0,0,Math.PI/2)),n}function Zp(){const n=new G;n.name="habs";const e=[[-14,-104,0],[2,-104,0],[-6,-116,1.57]];for(const[h,c,d]of e){const p=I(h,c),f=u(new O(3.1,3.1,12,18),l.hab,h,p+3.2,c,0,0,Math.PI/2);f.rotation.y=d,n.add(f),n.add(u(new vt(3.1,14,10),l.hab,h+Math.cos(d)*6,p+3.2,c+Math.sin(d)*6)),n.add(u(new vt(3.1,14,10),l.hab,h-Math.cos(d)*6,p+3.2,c-Math.sin(d)*6));for(let m=-2;m<=2;m++){const v=h+Math.cos(d)*m*2,M=c+Math.sin(d)*m*2;n.add(u(new x(.9,.7,.08),l.glowWarm,v,p+3.3,M+(d===0?3.15:0)))}}const[t,i,a]=Ft(-6,-96,1.4);n.add(u(new O(1.5,1.5,2.6,12),l.habDark,t,i,a)),n.add(u(new x(1.1,1.8,.12),l.steelDark,t,i+.1,a+1.5));const[s,r,o]=Ft(-6,-108,6.8);return n.add(u(new vt(4.4,18,12,0,Math.PI*2,0,Math.PI/2),l.hab,s,r,o)),n.add(T("HAB 1","#1a100c","#f0c089",2.6,.7,-6,I(-6,-96)+3.6,-94.4)),n}function $p(){const n=new G;n.name="greenhouse";const e=22,t=-112,i=I(e,t);n.add(u(new x(15.2,.25,8.6),l.concrete,e,i+.1,t));const a=new dt(new O(4.15,4.15,14.2,18,1,!1,0,Math.PI),l.glass);a.rotation.z=Math.PI/2,a.position.set(e,i+4.1,t),a.castShadow=!1,n.add(a),n.add(u(new x(14.2,.1,8.4),l.solarFrame,e,i+4.15,t));for(let h=-2;h<=2;h++)n.add(u(new Ne(4.12,.055,6,16,Math.PI),l.solarFrame,e+h*2.7,i+4.1,t,0,Math.PI/2,0));for(let h=-2;h<=2;h++){n.add(u(new x(2.05,.26,6.6),l.soil,e+h*2.35,i+.36,t));for(let c=-2;c<=2;c++){const d=c%2===0?l.plant:l.plantLeaf;n.add(u(new x(1.45,.52,.82),d,e+h*2.35,i+.72,t+c*1.12)),n.add(u(new x(.55,.42,.4),l.plantLeaf,e+h*2.35+.2,i+1.05,t+c*1.12))}n.add(u(new x(1.7,.05,6.1),l.glowWarm,e+h*2.35,i+3.55,t))}n.add(u(new x(1.2,2,.15),l.habDark,e-7.1,i+1.2,t));const s=e+10.4,r=t,o=I(s,r);return n.add(u(new x(5.4,.2,4.6),l.concrete,s,o+.08,r)),n.add(u(new O(.52,.52,5.4,10),l.steel,s+1.15,o+2.9,r-1.05)),n.add(u(new O(1.75,.55,1.7,14),l.steelDark,s+1.15,o+6.2,r-1.05)),n.add(u(new Ne(1.5,.08,6,14),l.steel,s+1.15,o+7.1,r-1.05,Math.PI/2,0,0)),n.add(T("CO2","#1a100c","#f0c089",1.9,.5,s+1.15,o+3.7,r+.35)),n.add(u(new x(2.5,1.85,1.9),l.habDark,s-.7,o+1.08,r+.95)),n.add(T("COMPRESS","#1a100c","#f0c089",2.35,.55,s-.7,o+1.55,r+1.95)),n.add(u(new O(.14,.14,6.4,8),l.pipe,e+6.6,i+1.55,t,0,0,Math.PI/2)),n.add(u(new O(.68,.68,2.35,12),l.tankO2,e-5.5,i+1.45,t+5.15)),n.add(T("O2","#2a3340","#e8eef4",1.35,.42,e-5.5,i+1.65,t+5.95)),n.add(T("LIFE SUPPORT","#1a100c","#f0c089",3.7,.7,e,i+5.55,t+.15)),n.add(T("COMPRESSED CO2","#1a100c","#d6b48a",3.5,.55,e,i+4.75,t+.15)),n}function $i(n,e,t){const i=new G;i.name="rover";const a=I(n,e);i.position.set(n,a,e),i.rotation.y=t,i.add(u(new x(3.4,1.1,2.1),l.rover,0,1.35,0)),i.add(u(new x(1.4,.7,1.5),l.roverDark,1.2,2.1,0)),i.add(u(new x(2.2,.08,1.6),l.solar,0,2,0)),i.add(u(new O(.07,.07,2.1,6),l.steel,-.4,2.9,0)),i.add(u(new x(.25,.2,.25),l.roverDark,-.4,4,0));const s=new O(.55,.55,.35,12),r=[[-1.2,.55,1.15],[.1,.55,1.15],[1.2,.55,1.15],[-1.2,.55,-1.15],[.1,.55,-1.15],[1.2,.55,-1.15]];for(const[o,h,c]of r)i.add(u(s,l.roverDark,o,h,c,Math.PI/2,0,0));return i}function jt(n,e,t){const i=new G;i.name="optimus";const a=I(n,e);return i.position.set(n,a,e),i.rotation.y=t,i.add(u(new x(.42,.62,.24),l.robot,0,1.28,0)),i.add(u(new O(.14,.15,.22,10),l.robot,0,1.72,0)),i.add(u(new x(.16,.08,.04),l.steelDark,0,1.74,.14)),i.add(u(new x(.12,.48,.12),l.robot,-.28,1.22,0)),i.add(u(new x(.12,.48,.12),l.robot,.28,1.22,0)),i.add(u(new x(.14,.62,.14),l.steelDark,-.1,.62,0)),i.add(u(new x(.14,.62,.14),l.steelDark,.1,.62,0)),i}function jp(){const n=new G;n.name="workshop";const e=48,t=-86,i=I(e,t),a=u(new O(6.2,6.2,16,16,1,!1,0,Math.PI),l.habDark,e,i+3.4,t);return a.rotation.z=Math.PI/2,n.add(a),n.add(u(new x(16,.3,10),l.concrete,e,i+.1,t)),n.add(u(new x(.2,4.2,6.5),l.steelDark,e-7.8,i+2.2,t)),n.add(u(new x(2.4,1.1,1.4),l.crate,e+2,i+.8,t+1.5)),n.add(u(new x(4.6,.16,.16),l.steel,e+1.2,i+.35,t-2.8)),n.add(u(new x(4.6,.16,.16),l.steel,e+1.2,i+.55,t-3.05)),n.add(T("WORKSHOP","#1a100c","#f0c089",3.6,.85,e,i+5.6,t+.2)),n}function Qp(){const n=new G;n.name="comms";const e=-18,t=-138,i=I(e,t);for(let s=0;s<8;s++)n.add(u(new x(.18,3.2,.18),l.lattice,e-.7,i+1.6+s*3,t-.7)),n.add(u(new x(.18,3.2,.18),l.lattice,e+.7,i+1.6+s*3,t-.7)),n.add(u(new x(.18,3.2,.18),l.lattice,e-.7,i+1.6+s*3,t+.7)),n.add(u(new x(.18,3.2,.18),l.lattice,e+.7,i+1.6+s*3,t+.7)),n.add(u(new x(1.6,.1,.1),l.lattice,e,i+3+s*3,t-.7)),n.add(u(new x(1.6,.1,.1),l.lattice,e,i+3+s*3,t+.7));const a=u(new vt(3.2,16,10,0,Math.PI*2,0,Math.PI/2.4),l.steel,e,i+26.5,t,-.7,.4,0);return n.add(a),n.add(u(new O(.08,.08,2.2,6),l.steelDark,e+.4,i+27.4,t+1.1,.6,0,0)),n}function e1(){const n=new G;n.name="ice-mine";const e=-58,t=-158,i=I(e,t);n.add(u(new x(8,.3,8),l.concrete,e,i+.1,t)),n.add(u(new x(.28,14,.28),l.lattice,e-2.2,i+7,t-2.2)),n.add(u(new x(.28,14,.28),l.lattice,e+2.2,i+7,t-2.2)),n.add(u(new x(.28,14,.28),l.lattice,e-2.2,i+7,t+2.2)),n.add(u(new x(.28,14,.28),l.lattice,e+2.2,i+7,t+2.2)),n.add(u(new x(5.2,.25,5.2),l.steelDark,e,i+14.2,t)),n.add(u(new O(.35,.55,9,10),l.steel,e,i+5,t)),n.add(u(new ki(.7,1.6,8),l.soot,e,i+.9,t));const a=u(new mt(3.4,0),l.ice,e+7.5,i+1.6,t+1.2);return a.scale.set(1.3,.7,1.1),n.add(a),n.add(u(new x(6,.35,1.1),l.steelDark,e+3.4,i+1.4,t,0,0,-.18)),n.add(T("ICE","#1a2830","#d6e6ef",2.2,.65,e,i+8.4,t+2.6)),n}function Za(n,e,t,i,a){const s=I(e,t);n.add(u(new O(.05,.07,3.2,6),l.steelDark,e,s+1.6,t)),n.add(u(new x(1.15,.7,.04),a,e+.58,s+2.75,t)),n.add(T(i,"#1a100c","#f0c089",1.45,.4,e+.58,s+2.75,t+.05))}function Yr(n,e,t,i){const a=I(e,t);n.add(u(new x(.07,1.55,.07),l.steelDark,e,a+.78,t)),n.add(u(new x(.38,.22,.03),i,e+.2,a+1.42,t))}function Cr(n,e,t,i=0){const a=I(e,t);n.add(u(new x(.85,.55,.65),l.crate,e,a+.32,t,0,i,0)),n.add(u(new x(.88,.06,.68),l.steelDark,e,a+.62,t,0,i,0))}function t1(){const n=new G;n.name="solar-2";const e=6,t=4;for(let r=0;r<e;r++)for(let o=0;o<t;o++){const h=98+r*5.4,c=-74-o*6.2,d=I(h,c),p=u(new x(.18,1.6,.18),l.solarFrame,h,d+.8,c),f=u(new x(4.6,.08,2.3),l.solar,h,d+1.55,c,-.55,.15,0),m=u(new x(4.75,.05,2.42),l.solarFrame,h,d+1.5,c,-.55,.15,0);n.add(p,f,m)}const[i,a,s]=Ft(96,-72,.7);return n.add(u(new x(2.2,1.4,1.4),l.habDark,i,a,s)),n.add(T("POWER","#111111","#f4e6c8",2,.55,i,a+.2,s+.75)),n}function n1(){const n=new G;n.name="solar-tie";const e=90,t=-48,i=112,a=-83,s=[],r=5;for(let o=0;o<=r;o++){const h=o/r,c=e+(i-e)*h,d=t+(a-t)*h,p=I(c,d);n.add(u(new O(.09,.11,4.4,6),l.steelDark,c,p+2.2,d)),n.add(u(new x(1.15,.08,.08),l.steel,c,p+4.35,d)),s.push({x:c,y:p+4.32,z:d})}for(let o=0;o<s.length-1;o++){const h=s[o],c=s[o+1];for(const d of[-.38,.38]){const p=new Bi([new y(h.x,h.y,h.z+d),new y((h.x+c.x)/2,(h.y+c.y)/2-.65,(h.z+c.z)/2+d),new y(c.x,c.y,c.z+d)]),f=new dt(new ii(p,6,.035,4,!1),l.cable);f.castShadow=!1,n.add(f)}}return n}function i1(){const n=new G;n.name="hab-assembly";const e=-32,t=-98,i=I(e,t);n.add(u(new x(18,.22,14),l.concrete,e,i+.08,t));const a=[[-5,-2.2],[5,-2.2],[-5,2.2],[5,2.2]];for(const[r,o]of a)n.add(u(new O(.18,.28,1.85,8),l.steelDark,e+r,i+1.02,t+o)),n.add(u(new x(.72,.12,.72),l.steel,e+r,i+.14,t+o)),n.add(u(new x(.55,.1,.55),l.steel,e+r,i+1.96,t+o));const s=i+3.55;n.add(u(new O(3,3,11,16),l.hab,e,s,t,0,0,Math.PI/2)),n.add(u(new vt(3,14,10),l.hab,e-5.5,s,t)),n.add(u(new vt(3,14,10,0,Math.PI*2,0,Math.PI/2),l.hab,e+8.4,i+1.55,t+.45,.22,.35,.12)),n.add(u(new O(1.35,1.35,2.4,12),l.habDark,e,s,t+4.15,Math.PI/2,0,0)),n.add(u(new x(1,1.65,.1),l.steelDark,e,s,t+5.45)),n.add(u(new Ne(1.38,.08,6,14),l.steel,e,s,t+3.05,0,0,0));for(const[r,o]of[[-7.2,4.6],[6.8,4.8],[-6.4,-5.2]])n.add(u(new x(.12,3.6,.12),l.lattice,e+r,i+1.9,t+o)),n.add(u(new x(.12,3.6,.12),l.lattice,e+r+1.4,i+1.9,t+o)),n.add(u(new x(1.6,.08,.08),l.lattice,e+r+.7,i+3.7,t+o));return Ee(n,e-8.2,t+6.2,.2),Ee(n,e-6.3,t+7.4,-.35),Ee(n,e+7.1,t-5.6,.5,1.1),Ee(n,e+5.4,t-6.4,.15),n.add(T("HAB KIT","#1a100c","#f0c089",3,.75,e,i+6.4,t+3.2)),n.add(T("AIRLOCK","#1a100c","#f0c089",2.2,.55,e+2.4,s+.2,t+4.2,Math.PI/2)),n}function un(n,e,t,i,a={}){const s=I(e,t),r=a.r||2.85,o=a.len||10.4,h=a.onStands?s+3.4:s+3.05,c=Math.cos(i),d=Math.sin(i);if(a.onStands)for(const[f,m]of[[-4.1,-2.05],[4.1,-2.05],[-4.1,2.05],[4.1,2.05]]){const v=e+c*f-d*m,M=t+d*f+c*m;n.add(u(new O(.16,.26,1.75,8),l.steelDark,v,s+.98,M)),n.add(u(new x(.7,.12,.7),l.steel,v,s+.14,M)),n.add(u(new x(.52,.1,.52),l.steel,v,s+1.9,M))}else for(const[f,m]of[[-3.6,0],[3.6,0]]){const v=e+c*f-d*m,M=t+d*f+c*m;n.add(u(new x(1.6,.55,1.15),l.steelDark,v,s+.38,M,0,i,0))}const p=u(new O(r,r,o,16),l.hab,e,h,t,0,0,Math.PI/2);if(p.rotation.y=i,n.add(p),!a.partial)n.add(u(new vt(r,14,10),l.hab,e+c*(o/2),h,t+d*(o/2))),n.add(u(new vt(r,14,10),l.hab,e-c*(o/2),h,t-d*(o/2)));else{n.add(u(new vt(r,14,10),l.hab,e-c*(o/2),h,t-d*(o/2)));const f=e+c*(o/2+2.3),m=t+d*(o/2+2.3);n.add(u(new vt(r,14,10,0,Math.PI*2,0,Math.PI/2),l.hab,f,s+1.45,m,.22,.3,.1))}for(let f=-2;f<=2;f++){const m=e+c*f*1.75,v=t+d*f*1.75;n.add(u(new x(.8,.55,.08),l.glowWarm,m-d*r,h+.08,v+c*r))}if(a.airlock){const f=e-d*(r+1.15),m=t+c*(r+1.15);n.add(u(new O(1.15,1.15,2.2,12),l.habDark,f,h,m,Math.PI/2,i,0)),n.add(u(new x(1,1.6,.1),l.steelDark,f-d*1.15,h,m+c*1.15,0,i,0)),n.add(u(new Ne(1.18,.07,6,14),l.steel,f+d*.2,h,m-c*.2,0,i,0)),n.add(T("AIRLOCK","#1a100c","#f0c089",2.15,.5,f-d*.2,h+1.45,m+c*.2,i))}a.label&&n.add(T(a.label,"#1a100c","#f0c089",2.7,.65,e,h+r+.55,t+.15,i))}function a1(){const n=new G;n.name="pressure-habs";const e=I(-46,-101);n.add(u(new x(28,.2,22),l.concrete,-50,e+.06,-101)),un(n,-46,-108,0,{airlock:!0,label:"HAB 2"}),un(n,-46,-94,0,{onStands:!0,airlock:!0,label:"HAB KIT"});const t=I(-46,-101)+3.15;return n.add(u(new O(1.15,1.15,8.2,12),l.habDark,-46,t,-101,Math.PI/2,0,0)),n.add(u(new Ne(1.2,.08,6,14),l.steel,-46,t,-105.1,Math.PI/2,0,0)),n.add(u(new Ne(1.2,.08,6,14),l.steel,-46,t,-96.9,Math.PI/2,0,0)),n.add(T("CONNECT","#1a100c","#f0c089",2.4,.5,-46,t+1.55,-101)),un(n,-58,-102,Math.PI/2,{onStands:!0,partial:!0,label:"MOD"}),Ee(n,-54.5,-110.2,.25),Ee(n,-52.8,-111.4,-.3,1.08),Ee(n,-61.2,-96.4,.4),Ee(n,-40.6,-90.8,.15,1.05),n}function nn(n,e,t){const i=new G;i.name="eva";const a=I(n,e);return i.position.set(n,a,e),i.rotation.y=t,i.add(u(new x(.56,.8,.4),l.suit,0,1.46,0)),i.add(u(new x(.44,.5,.24),l.suitDark,0,1.52,-.3)),i.add(u(new vt(.21,12,10),l.suit,0,2.04,.02)),i.add(u(new vt(.165,10,8,0,Math.PI*2,0,Math.PI*.58),l.visor,0,2.04,.1)),i.add(u(new x(.17,.6,.17),l.suit,-.4,1.36,.04)),i.add(u(new x(.17,.6,.17),l.suit,.4,1.36,.04)),i.add(u(new x(.2,.76,.2),l.suitDark,-.15,.7,0)),i.add(u(new x(.2,.76,.2),l.suitDark,.15,.7,0)),i}function s1(n,e,t,i){const a=I(e,t),s=new G;s.position.set(e,a,t),s.rotation.y=i,s.add(u(new x(1.2,.18,.72),l.steelDark,0,.62,0)),s.add(u(new x(1.15,.28,.68),l.crate,0,.86,0)),s.add(u(new x(.08,.55,.08),l.steel,-.48,.32,.26)),s.add(u(new x(.08,.55,.08),l.steel,.48,.32,.26)),s.add(u(new x(.08,.55,.08),l.steel,-.48,.32,-.26)),s.add(u(new x(.08,.55,.08),l.steel,.48,.32,-.26));const r=new O(.12,.12,.1,10);s.add(u(r,l.roverDark,-.48,.12,.3,Math.PI/2,0,0)),s.add(u(r,l.roverDark,.48,.12,.3,Math.PI/2,0,0)),s.add(u(r,l.roverDark,-.48,.12,-.3,Math.PI/2,0,0)),s.add(u(r,l.roverDark,.48,.12,-.3,Math.PI/2,0,0)),s.add(u(new x(.06,.7,.06),l.steel,-.22,1.3,.08)),s.add(u(new x(.06,.55,.06),l.steel,.18,1.22,-.06)),s.add(u(new x(.22,.12,.12),l.steelDark,-.22,1.68,.08)),n.add(s)}function r1(n,e,t,i){const a=I(e,t),s=new G;s.position.set(e,a,t),s.rotation.y=i,s.add(u(new x(.85,2.45,.32),l.steelDark,0,1.32,0)),s.add(u(new Ne(.42,.07,8,14),l.steel,0,1.58,.22)),s.add(u(new O(.38,.38,.1,12),l.habDark,0,1.58,.18,Math.PI/2,0,0)),s.add(u(new x(.7,.16,.55),l.steel,0,.12,.05)),n.add(s)}function o1(){const n=new G;n.name="eva-presence",n.add(nn(2.4,12.2,rn(2.4,12.2,0,7))),n.add(nn(-2.2,11.5,rn(-2.2,11.5,0,7))),n.add(nn(3.8,15.6,.35)),n.add(nn(.6,18.2,Math.PI)),s1(n,4.3,14.8,.4),r1(n,-3.9,9.1,.2),Ee(n,5.4,13.2,.2,.85);const e=I(5.1,16.4);return n.add(u(new x(.1,2.2,.1),l.steelDark,5.1,e+1.1,16.4)),n.add(T("EVA PREP","#1a100c","#f0c089",2.3,.55,5.1,e+2.45,16.4,-.35)),n}function c1(){const n=new G;n.name="survey";const e=-82,t=-176,i=I(e,t);for(let c=0;c<3;c++){const d=c/3*Math.PI*2+.4,p=Math.cos(d)*.62,f=Math.sin(d)*.62;n.add(u(new x(.08,2.5,.08),l.steelDark,e+p,i+1.15,t+f,.32*Math.cos(d),0,.32*Math.sin(d)))}n.add(u(new x(.58,.32,.48),l.roverDark,e,i+2.28,t)),n.add(u(new O(.04,.04,1.35,6),l.steel,e,i+3.08,t)),n.add(u(new x(.22,.12,.22),l.steelDark,e,i+3.78,t)),n.add(u(new x(.12,2.2,.12),l.steelDark,e+1.15,i+1.1,t+.2)),n.add(T("SURVEY","#1a100c","#f0c089",2.6,.7,e+.2,i+3.55,t+1.15));const a=[[-108,-210],[-98,-210],[-88,-210],[-78,-210],[-68,-210],[-108,-198],[-98,-198],[-88,-198],[-78,-198],[-68,-198],[-108,-186],[-98,-186],[-88,-186],[-78,-186],[-68,-186],[-108,-174],[-98,-174],[-88,-174],[-78,-174],[-68,-174]];for(let c=0;c<a.length;c++){const[d,p]=a[c];Yr(n,d,p,c%3===0?l.flagIce:l.flagDeposit)}Za(n,-96,-198,"ICE",l.flagIce),Za(n,-72,-204,"H2O",l.flagIce),Za(n,-104,-176,"DEPOSIT",l.flagDeposit);const s=[[-90,-184,.2],[-88.4,-182.6,-.4],[-91.2,-181.8,.7],[-86.6,-185.2,.1]];for(const[c,d,p]of s)Cr(n,c,d,p);Ee(n,-84.5,-180.4,.15,.85),n.add(T("SAMPLES","#1a2830","#d6e6ef",2.2,.55,-90,I(-90,-184)+1.55,-184));const r={x:-60,z:-162},o={x:-100,z:-200},h=14;for(let c=0;c<h;c++){const d=c/(h-1),p=r.x+(o.x-r.x)*d,f=r.z+(o.z-r.z)*d,m=I(p,f),v=Math.atan2(o.x-r.x,o.z-r.z);for(const M of[-.55,.55]){const _=Math.cos(v)*M,g=-Math.sin(v)*M,C=u(new x(.42,.05,.85),l.track,p+_,m+.04,f+g,0,v,0);C.castShadow=!1,n.add(C)}}return n}function ce(n,e,t,i=.14){const a=[];for(let o=0;o<e.length;o++){const[h,c]=e[o],d=I(h,c)+1.05;a.push(new y(h,d,c)),o%2===0&&n.add(u(new x(.18,1.05,.18),l.steelDark,h,I(h,c)+.5,c))}const s=new Bi(a),r=new dt(new ii(s,28,i,6,!1),t);r.castShadow=!1,n.add(r)}function l1(){const n=new G;return n.name="methalox-lines",ce(n,[[-76,-10.6],[-52,-18],[-32,-14],[-18,-8.4]],l.tankCh4,.13),ce(n,[[-76,-21.2],[-52,-24],[-32,-18],[-18,-9.6]],l.steel,.13),n.add(T("TO PAD","#1a100c","#f0c089",2.2,.5,-50,I(-50,-18)+2.15,-16.4)),n}function d1(){const n=new G;n.name="methalox-stand";const e=-15,t=-8,i=I(e,t);n.add(u(new x(8.6,.16,5.4),l.steelDark,e,i+.42,t)),n.add(u(new O(.88,.88,3.5,14),l.tankCh4,e-2.25,i+2.2,t+.55)),n.add(u(new O(.88,.88,3.5,14),l.tankO2,e-2.25,i+2.2,t-1.25)),n.add(T("CH4","#6a2208","#f4e6c8",1.45,.42,e-1.3,i+2.25,t+.55,Math.PI/2)),n.add(T("O2","#2a3340","#e8eef4",1.45,.42,e-1.3,i+2.25,t-1.25,Math.PI/2));const a=[[1.55,1.65],[1.55,-1.65],[3.45,1.65],[3.45,-1.65]];for(const[s,r]of a)n.add(u(new x(.16,3.15,.16),l.steelDark,e+s,i+1.88,t+r));return n.add(u(new x(2.25,.12,3.5),l.steel,e+2.5,i+3.5,t)),n.add(u(new Ne(.42,.11,8,14),l.tankCh4,e+.15,i+1.45,t+.55,Math.PI/2,0,0)),n.add(u(new Ne(.42,.11,8,14),l.steel,e+.15,i+1.45,t-1.2,Math.PI/2,0,0)),n.add(u(new O(.09,.09,6.4,8),l.tankCh4,e+4.55,i+1.18,t+.55,0,0,Math.PI/2)),n.add(u(new O(.09,.09,6.4,8),l.steel,e+4.55,i+.98,t-1.2,0,0,Math.PI/2)),n.add(u(new x(1.55,1.05,1.15),l.habDark,e+.55,i+.98,t+1.85)),n.add(u(new O(.55,.55,2.8,12),l.tankCh4,e-.4,i+1.15,t+2.55,0,0,Math.PI/2)),n.add(u(new x(1.6,.35,.85),l.steelDark,e-.4,i+.55,t+2.55)),n.add(T("METHALOX","#1a100c","#f0c089",3.15,.68,e+2.5,i+4.12,t)),n.add(T("RETURN PROPELLANT","#1a100c","#f0c089",3.85,.58,e+2.5,i+3.42,t+.02)),n.add(u(new O(.22,.28,3.2,10),l.steelDark,e+5.4,i+2,t+.2)),n.add(u(new x(7.6,.22,.22),l.steel,e+8.8,i+3.55,t+1.4,0,-.45,.18)),n.add(u(new x(6.2,.18,.18),l.tankCh4,e+11.6,i+4.4,t+2.6,0,-.45,.12)),n.add(u(new x(6.2,.18,.18),l.steel,e+11.6,i+4.05,t+2.85,0,-.45,.12)),n.add(u(new O(.28,.22,1.1,10),l.steelDark,e+14.2,i+4.7,t+3.6)),n.add(T("LOAD ARM","#1a100c","#f0c089",2.8,.45,e+8.2,i+4.85,t+1.1,-.45)),n}function h1(){const n=new G;n.name="spaceport-sign";const e=17,t=-17,i=I(e,t);return n.add(u(new x(.12,3.5,.12),l.steelDark,e,i+1.75,t)),n.add(T("SPACEPORT","#1a100c","#f0c089",3.5,.85,e,i+3.45,t,.55)),n.add(T("METHALOX PAD","#1a100c","#d6b48a",3.2,.58,e,i+2.55,t,.55)),n}function u1(n,e,t,i,a,s){const r=i-e,o=a-t,h=Math.hypot(r,o),c=Math.ceil(h/6),d=Math.atan2(r,o);for(let p=0;p<c;p++){const f=(p+.5)/c,m=e+r*f,v=t+o*f,M=I(m,v),_=h/c+.35,g=u(new x(s+1.7,.055,_+.25),l.roadBed,m,M+.03,v,0,d,0);g.castShadow=!1,n.add(g);const C=u(new x(s,.08,_+.15),l.padRing,m,M+.07,v,0,d,0);C.castShadow=!1,n.add(C)}}function f1(n,e,t,i=4.2){const a=I(e,t),s=u(new O(i+.8,i+.8,.06,20),l.roadBed,e,a+.03,t);s.castShadow=!1,n.add(s);const r=u(new O(i,i,.08,20),l.graded,e,a+.07,t);r.castShadow=!1,n.add(r)}function p1(){const n=new G;n.name="roads";const e=[[0,18,0,-124,5.2],[0,-40,84,-42,4.6],[0,-40,-68,-16,4.6],[0,-92,-56,-154,4],[16,-72,48,-86,3.6],[12,8,50,22,4.2],[16,28,22,78,3.5],[-58,-158,-90,-190,3.6],[-14,-104,-32,-98,3.4],[84,-42,112,-83,3.6],[0,-108,22,-112,3.6],[22,-112,48,-86,3.4],[-6,-116,-18,-138,3.2],[0,8,-15,-8,3.4],[16,28,36,72,3.8],[0,18,-24,44,3.8],[-58,-158,-64,-90,4.2],[-64,-90,-68,-16,4.2],[-18,-138,-32,-148,3.2],[-32,-98,-46,-100,3.4],[0,18,-48,68,3.8],[16,28,78,56,3.8],[-6,-116,-13,-134,3.4],[22,-112,38,-126,3.4],[-58,-158,-60,-148,3.2],[-64,-118,-18,-88,3.6],[84,-42,68,-10,3.4],[-6,-108,-18,-88,3.2],[38,-126,8,-142,3.4],[-13,-134,8,-142,3.2],[112,-83,135,-40,3.6],[68,-10,68,6,3.2],[-13,-134,-28,-138,3],[-46,-108,-20,-132,3.2],[-6,-108,-6,-132,3.2],[-6,-96,2,-22,3.4],[-32,-98,-36,-74,3.2],[-40,-76,-32,-98,3.2],[-40,-76,-50,-72,3],[-6,-132,10,-124,3.2],[10,-124,8,-142,3],[0,8,20,8,3.4],[22,82,-16,136,3.6],[0,32,-16,136,3.4],[135,-40,158,-62,3.4],[-68,-16,-96,-16,3.6],[-58,-158,-78,-172,3.4],[48,-86,66,-74,3.4],[8,-142,18,-152,3.2],[-18,-88,18,-152,3.2],[-32,-148,-8,-162,3.2],[-6,-108,8,-98,3.2],[22,-112,8,-98,3.2],[48,-86,48,-70,3.2],[-68,-16,-68,12,3.2],[-36,-74,22,-80,3.2],[48,-86,22,-80,3.2],[22,-112,52,-112,3.2],[38,-126,52,-112,3.2],[-78,-172,-90,-158,3.2],[8,-98,8,-78,3.2],[22,-80,8,-78,3.2],[8,-98,-8,-88,3.2],[-22,-88,-8,-88,3.2],[-96,-16,-96,4,3.2],[158,-62,142,-62,3.2],[8,-142,28,-140,3.2],[18,-152,28,-140,3.2],[-90,-158,-90,-148,3.2],[5,16,12,18,3],[20,8,36,8,3.2],[36,8,36,-6,3.2],[-68,4,-50,4,3.2],[-58,-158,-58,-142,3.2],[-15,-8,-32,-22,3.2],[66,-74,66,-90,3.2],[8,-98,22,-98,3.2],[158,-62,172,-48,3.2],[22,-112,38,-104,3.2],[10,-124,24,-128,3],[-68,12,-80,20,3.2],[-16,136,6,148,3],[-48,68,-64,80,3.2],[-80,20,-80,32,3.2],[135,-40,100,-22,3.2],[100,-22,68,-10,3.2],[-36,-74,-22,-56,3.2],[-90,-158,-124,-188,3.2],[-50,4,-38,16,3.2],[52,-112,70,-112,3.2],[22,82,16,48,3],[-58,-142,-58,-36,3.2],[-58,-36,-68,-16,3.2],[36,8,50,4,3],[-58,-158,-40,-168,3],[66,-90,82,-90,3.2],[-8,-162,4,-148,3],[135,-40,148,-40,3.2],[112,-83,124,-70,3.2],[82,-44,96,-44,3.2],[-68,12,-84,8,3.2],[-8,-88,16,-86,3.2],[135,-40,135,-22,3.2],[124,-70,100,-70,3.2],[82,-44,82,-28,3.2],[-68,-16,-68,2,3.2],[135,-40,122,-40,3],[112,-83,98,-83,3],[82,-44,70,-44,3],[-90,-158,-102,-158,3.2],[8,-78,-18,-78,3.2],[-78,-172,-64,-184,3.2],[18,-152,32,-152,3.2],[-96,4,-96,16,3.2],[66,-74,82,-74,3.2],[-78,-172,-78,-156,3.2],[-96,4,-110,8,3.2],[-110,8,-110,20,3.2],[-110,20,-110,32,3.2],[-110,8,-122,8,3.2],[-122,8,-122,20,3.2],[8,-98,-8,-98,3.2],[-8,-98,-22,-98,3.2],[-8,-88,8,-88,3.2],[-58,-36,-78,-36,3.2],[82,-90,96,-90,3.2],[8,-78,-5,-78,3],[4,-148,16,-148,3.2],[-90,-148,-90,-136,3.2],[16,-86,16,-74,3.2],[-32,-148,-48,-138,3.2],[52,-112,52,-126,3.2],[52,-126,70,-126,3.2],[0,-68,0,-118,3],[48,-70,90,-80,3],[-46,-148,-90,-148,3],[-38,16,-68,12,3],[38,-104,52,-112,3],[172,-48,158,-62,3],[-16,36,4,32,3],[4,-138,-18,-138,3],[68,6,50,4,3],[66,-90,66,-104,3.2],[66,-104,80,-104,3],[6,148,18,136,3],[8,-98,22,-98,3],[172,-48,172,-62,3],[-64,-184,-92,-184,3.2],[-18,-88,-32,-88,3],[96,-90,96,-104,3],[-15,-8,-28,-8,3],[-28,-8,-28,6,3],[-32,-88,-46,-88,3],[-50,4,-50,-22,3],[-68,12,-80,20,3],[-38,16,-38,28,3],[-58,-142,-46,-132,3],[38,-104,24,-118,3],[-90,-136,-110,-136,3.2],[-32,-98,-22,-110,3]];for(const[i,a,s,r,o]of e)u1(n,i,a,s,r,o);for(const[i,a,s]of[[0,-40,5.2],[0,-108,4.4],[84,-42,4],[22,-112,3.8],[0,10,4.6],[-64,-90,4.2],[36,72,3.6],[-46,-100,3.6],[38,-126,3.6],[-18,-88,3.8],[68,-10,3.8],[-48,68,3.6],[78,56,3.6],[-13,-134,3.6],[8,-142,3.6],[135,-40,3.6],[68,6,3.6],[-36,-74,3.6],[2,-22,3.4],[-50,-72,3.4],[10,-124,3.6],[20,8,3.6],[-16,136,4.2],[158,-62,3.6],[-96,-16,3.8],[-78,-172,3.6],[66,-74,3.6],[18,-152,3.4],[-8,-162,3.4],[8,-98,3.4],[48,-70,3.4],[-68,12,3.4],[22,-80,3.4],[52,-112,3.6],[-90,-158,3.4],[8,-78,3.4],[-8,-88,3.4],[-96,4,3.4],[142,-62,3.4],[28,-140,3.4],[-90,-148,3.4],[12,18,3.2],[36,8,3.4],[36,-6,3.4],[-50,4,3.4],[-58,-142,3.4],[-32,-22,3.4],[66,-90,3.4],[22,-98,3.4],[172,-48,3.4],[38,-104,3.4],[24,-128,3.2],[-80,20,3.4],[6,148,3.2],[-64,80,3.4],[-80,32,3.4],[100,-22,3.4],[-22,-56,3.4],[-124,-188,3.4],[-38,16,3.4],[70,-112,3.4],[16,48,3.2],[-58,-36,3.4],[50,4,3.2],[-40,-168,3.2],[82,-90,3.4],[4,-148,3.2],[148,-40,3.4],[124,-70,3.4],[96,-44,3.4],[-84,8,3.4],[16,-86,3.4],[135,-22,3.4],[100,-70,3.4],[82,-28,3.4],[-68,2,3.4],[122,-40,3.2],[98,-83,3.2],[70,-44,3.2],[-102,-158,3.4],[-18,-78,3.4],[-64,-184,3.2],[32,-152,3.4],[-96,16,3.4],[82,-74,3.6],[-78,-156,3.4],[-110,8,3.4],[-110,20,3.4],[-110,32,3.4],[-122,8,3.4],[-122,20,3.4],[-8,-98,3.4],[-22,-98,3.4],[8,-88,3.4],[-78,-36,3.4],[96,-90,3.4],[-5,-78,3.2],[16,-148,3.2],[-90,-136,3.4],[16,-74,3.2],[-48,-138,3.2],[52,-126,3.4],[70,-126,3.4],[0,-68,3.2],[48,-70,3.2],[-46,-148,3.2],[-38,16,3.2],[38,-104,3.2],[172,-48,3.2],[-16,36,3.2],[4,-138,3.2],[68,6,3.2],[66,-104,3.4],[80,-104,3.2],[18,136,3.2],[22,-98,3.2],[172,-62,3.2],[-92,-184,3.2],[-32,-88,3.2],[96,-104,3.2],[-28,-8,3.2],[-28,6,3.2],[-46,-88,3.2],[-50,-22,3.2],[-80,20,3.2],[-38,28,3.2],[-46,-132,3.2],[24,-118,3.2],[-110,-136,3.2],[-22,-110,3.2]])f1(n,i,a,s);const t=[[3.2,-20],[-3.2,-20],[3.2,-60],[-3.2,-60],[3.2,-90],[22,-40],[42,-40],[64,-41],[-22,-32],[-44,-24],[8,-110],[16,-111],[-8,-130],[-28,-148],[-70,-172],[96,-58],[104,-72],[28,50],[32,62],[-12,30],[-20,40],[-60,-130],[-66,-70],[-66,-40],[-26,-144],[-40,-100],[-52,-108],[3.4,12],[-3.2,12],[30,-118],[38,-126],[-60,-148],[-64,-118],[-18,-88],[68,-10]];for(const[i,a]of t)Yr(n,i,a,l.flagDeposit);return n}function m1(){const n=new G,e=[[18,-8],[-16,-6],[12,-48],[-10,-70],[6,-100],[30,-100],[-30,-20],[40,-40],[40,18],[58,32],[16,70],[28,88],[-54,-8],[-80,-176],[-96,-196],[-28,-90],[112,-80],[100,-50],[0,-40],[22,-112],[32,-112],[70,-40],[84,-44],[36,60],[-24,32],[-64,-90],[-40,-148],[-32,-156],[4,14],[-46,-108],[-46,-92],[-58,-102],[38,-126],[-18,-88],[68,-10],[-60,-148],[-64,-118],[-22,-88]];for(const[t,i]of e){const a=I(t,i);n.add(u(new O(.1,.12,5.2,6),l.steelDark,t,a+2.6,i)),n.add(u(new x(.7,.15,.35),l.glowWarm,t,a+5.3,i))}return n}function g1(){const n=new G,e=14,t=22,i=I(e,t);n.add(u(new x(.12,3.6,.12),l.steelDark,e,i+1.8,t));const a=T("BASE ALPHA","#1a100c","#f0c089",3.8,1.05,e,i+3.55,t,.4);n.add(a);const s=T("CARGO CAMPAIGN","#1a100c","#f0c089",3.4,.7,e,i+2.55,t,.4);n.add(s);const r=T("ARCADIA PLANITIA","#1a100c","#d6b48a",3.2,.55,18,I(18,26)+2.15,26,.15);n.add(u(new x(.1,2.2,.1),l.steelDark,18,I(18,26)+1.1,26)),n.add(r);const o=20,h=36,c=I(o,h);return n.add(u(new x(.1,2.6,.1),l.steelDark,o,c+1.3,h)),n.add(T("6 SHIPS","#1a100c","#f0c089",2.6,.65,o,c+3.15,h,.25)),n.add(T("TWO WINDOWS","#1a100c","#d6b48a",2.8,.5,o,c+2.45,h,.25)),n}function rn(n,e,t,i){return Math.atan2(-(i-e),t-n)}function ac(n,e){const t=new G;t.name="window-offload";const i=[[n,e,.2],[n-1.8,e+2.1,-.3],[n+1.6,e+2.4,.7],[n-2.4,e-1.2,.15],[n+.8,e-2.2,1.1],[n-3.2,e+.6,-.4]];for(const[o,h,c]of i)Ee(t,o,h,c);Ee(t,n-4.2,e+1.4,.2,1.12),Ee(t,n-5.4,e-.6,-.15,1.05);const[a,s,r]=Ft(n-1.2,e,.08);return t.add(u(new x(7.2,.12,3.8),l.steelDark,a,s,r,0,.12,0)),t.add(T("CARGO","#1a100c","#f0c089",2.4,.65,n-4.2,I(n-4.2,e+1.4)+2.4,e+1.4,.4)),t}function x1(){const n=new G;n.name="earth-dish";const e=-32,t=-148,i=I(e,t);n.add(u(new O(8.6,8.6,.28,32),l.concrete,e,i+.1,t)),n.add(u(new O(1.45,1.85,5.4,14),l.steelDark,e,i+2.8,t)),n.add(u(new O(2.05,2.05,.42,18),l.steel,e,i+5.55,t)),n.add(u(new Ne(2.15,.12,8,20),l.lattice,e,i+5.8,t,Math.PI/2,0,0)),n.add(u(new x(.32,4.4,.32),l.lattice,e-2.55,i+7.6,t)),n.add(u(new x(.32,4.4,.32),l.lattice,e+2.55,i+7.6,t)),n.add(u(new x(5.6,.32,.32),l.lattice,e,i+9.75,t));const a=new G;a.position.set(e,i+9.5,t),a.rotation.set(-.92,.68,0);const s=u(new vt(7.6,28,16,0,Math.PI*2,0,Math.PI/2.28),l.dish,0,0,0);a.add(s);const r=u(new vt(7.72,20,10,0,Math.PI*2,0,Math.PI/2.45),l.steelDark,0,-.12,0);a.add(r);for(let d=0;d<8;d++){const p=d/8*Math.PI*2;a.add(u(new x(.07,.07,7.4),l.steelDark,0,.18,0,.12,p,0))}a.add(u(new O(.07,.07,5.4,6),l.steelDark,0,2.7,0)),a.add(u(new O(.38,.2,.75,10),l.steel,0,5.35,0)),n.add(a);const o=e-8.2,h=t-5.6,c=I(o,h);return n.add(u(new x(4.6,2.5,3.4),l.habDark,o,c+1.35,h)),n.add(u(new x(2.2,.85,1.4),l.steelDark,o+2.8,c+.55,h+.4)),n.add(T("EARTH LINK","#1a100c","#f0c089",3.6,.75,e,i+4.2,t+6.4)),n.add(T("LIGHT TIME 12 MIN","#1a100c","#d6b48a",3.9,.6,e,i+3.4,t+6.4)),n.add(T("NOT REAL-TIME","#1a100c","#d6b48a",3.3,.5,o,c+2.85,h+1.85)),n.add(u(new x(.1,2.8,.1),l.steelDark,e+6.6,i+1.4,t+5.2)),n.add(T("DSN / STARSHIP","#1a100c","#f0c089",3.2,.55,e+6.6,i+3.15,t+5.2,-.5)),n}function on(n,e,t,i={}){const a=new G;a.name=i.kind==="cargo"?"cargo-haul":"ice-haul";const s=I(n,e);a.position.set(n,s,e),a.rotation.y=t,a.add(u(new x(4.2,1.25,2.2),l.rover,.2,1.45,0)),a.add(u(new x(1.55,.85,1.7),l.roverDark,1.55,2.25,0)),a.add(u(new x(2.5,.08,1.7),l.solar,.05,2.16,0)),a.add(u(new O(.06,.06,1.6,6),l.steel,1.2,2.95,0)),a.add(u(new x(1.15,.2,.32),l.steelDark,-2.45,1.02,0));const r=new O(.62,.62,.38,12),o=[[-1.35,.62,1.22],[.25,.62,1.22],[1.55,.62,1.22],[-1.35,.62,-1.22],[.25,.62,-1.22],[1.55,.62,-1.22]];for(const[d,p,f]of o)a.add(u(r,l.roverDark,d,p,f,Math.PI/2,0,0));const h=-5.7;a.add(u(new x(4.5,.22,2.4),l.steelDark,h,1.02,0));const c=[[-4.5,.52,1.22],[-6.7,.52,1.22],[-4.5,.52,-1.22],[-6.7,.52,-1.22]];for(const[d,p,f]of c)a.add(u(new O(.5,.5,.32,12),l.roverDark,d,p,f,Math.PI/2,0,0));if(i.kind==="cargo")a.add(u(new x(1.55,1.2,1.55),l.crate,h-.95,1.78,.12)),a.add(u(new x(1.55,1.2,1.55),l.crate,h+.9,1.78,-.08)),i.loaded!==!1&&a.add(u(new x(1.35,1.05,1.35),l.crate,h,2.9,.05)),a.add(T("CARGO","#1a100c","#f0c089",1.7,.42,h,2.05,1.28));else{if(a.add(u(new x(4.2,1.15,.1),l.steel,h,1.68,1.12)),a.add(u(new x(4.2,1.15,.1),l.steel,h,1.68,-1.12)),a.add(u(new x(.1,1.15,2.25),l.steel,h-2.15,1.68,0)),a.add(u(new x(.1,1.15,2.25),l.steel,h+2.15,1.68,0)),i.loaded!==!1){const d=u(new mt(1.15,0),l.ice,h,1.82,0);d.scale.set(1.65,.68,.95),a.add(d),a.add(u(new mt(.52,0),l.ice,h+.95,1.92,.22)),a.add(u(new mt(.4,0),l.ice,h-.85,1.88,-.18))}a.add(T("ICE","#1a2830","#d6e6ef",1.35,.38,h,2.35,1.24))}return a}function Va(n,e,t,i,a,s=16){const r=Math.atan2(i-e,a-t);for(let o=0;o<s;o++){const h=o/(s-1),c=e+(i-e)*h,d=t+(a-t)*h,p=I(c,d);for(const f of[-.7,.7]){const m=Math.cos(r)*f,v=-Math.sin(r)*f,M=u(new x(.4,.05,.9),l.track,c+m,p+.04,d+v,0,r,0);M.castShadow=!1,n.add(M)}}}function _1(){const n=new G;n.name="haul-loop";const e=-64,t=-90,i=I(e,t);n.add(u(new x(11,.2,8.4),l.concrete,e,i+.08,t)),n.add(u(new x(2.6,3.2,2.6),l.steelDark,e+2.4,i+1.75,t-1.4)),n.add(u(new x(3.4,.18,1.3),l.steel,e+.2,i+2.35,t-1.4,0,0,.18));const a=u(new mt(2.4,0),l.ice,e-2.6,i+1.15,t+1.6);a.scale.set(1.35,.7,1.15),n.add(a),n.add(u(new mt(1.1,0),l.ice,e-1.2,i+.85,t+2.4)),n.add(u(new x(.22,5.6,.22),l.lattice,e+3.6,i+2.9,t+2.2)),n.add(u(new x(.22,4.2,.22),l.lattice,e+3.6,i+4.4,t+.4,.7,0,0)),n.add(u(new x(1.6,.7,.7),l.steelDark,e+3.6,i+5.5,t-.6)),n.add(T("ICE TRANSFER","#1a2830","#d6e6ef",3.5,.7,e,i+3.7,t+3.4)),n.add(T("MINE TO ISRU","#1a100c","#f0c089",3.1,.5,e,i+2.95,t+3.4));const s={x:-58,z:-158},r={x:-68,z:-16},o={x:0,z:0};return n.add(on(-55,-146,rn(-55,-146,r.x,r.z),{kind:"ice",loaded:!0})),n.add(on(-61,-118,rn(-61,-118,r.x,r.z),{kind:"ice",loaded:!0})),n.add(on(-66,-78,rn(-66,-78,r.x,r.z),{kind:"ice",loaded:!0})),n.add(on(-68,-38,rn(-68,-38,r.x,r.z),{kind:"ice",loaded:!0})),n.add(on(-70,-62,rn(-70,-62,s.x,s.z),{kind:"ice",loaded:!1})),n.add(on(-50,-24,rn(-50,-24,o.x,o.z),{kind:"cargo",loaded:!0})),n.add(on(-18,-14,rn(-18,-14,12,8),{kind:"cargo",loaded:!0})),n.add(on(22,12,rn(22,12,50,22),{kind:"cargo",loaded:!0})),Va(n,-58,-156,-64,-92,18),Va(n,-64,-88,-68,-20,16),Va(n,-66,-18,-16,-10,12),Va(n,-14,-8,20,12,10),n}function ji(n,e,t,i,a,s=8,r=1.15,o=.16){const h=[];for(let d=0;d<=s;d++){const p=d/s,f=e+(i-e)*p,m=t+(a-t)*p,v=I(f,m)+r;h.push(new y(f,v,m)),d%2===0&&n.add(u(new x(.16,r,.16),l.steelDark,f,I(f,m)+r*.5,m))}const c=new dt(new ii(new Bi(h),s*2,o,6,!1),l.pipe);c.castShadow=!1,n.add(c)}function v1(){const n=new G;n.name="food";const e=38,t=-126,i=I(e,t);n.add(u(new x(13.2,.25,7.6),l.concrete,e,i+.1,t));const a=new dt(new O(3.55,3.55,12.4,18,1,!1,0,Math.PI),l.glass);a.rotation.z=Math.PI/2,a.position.set(e,i+3.55,t),a.castShadow=!1,n.add(a),n.add(u(new x(12.2,.1,7.2),l.solarFrame,e,i+3.6,t));for(let s=-2;s<=2;s++){n.add(u(new x(1.85,.24,5.6),l.soil,e+s*2.1,i+.34,t));for(let r=-2;r<=2;r++){const o=r%2===0?l.plant:l.plantLeaf;n.add(u(new x(1.25,.58,.72),o,e+s*2.1,i+.78,t+r*.95))}n.add(u(new x(1.5,.05,5.2),l.glowWarm,e+s*2.1,i+3.15,t))}return n.add(u(new x(1.1,1.8,.14),l.habDark,e-6.2,i+1.1,t)),n.add(u(new O(.14,.14,12,8),l.pipe,30,I(30,-119)+1.2,-119,0,0,Math.PI/2)),n.add(T("FOOD","#1a100c","#f0c089",2.8,.7,e,i+5.05,t+.15)),n.add(T("GROW FROM CO2","#1a100c","#d6b48a",3.6,.5,e,i+4.35,t+.15)),Ee(n,45,-122,.2,.9),Ee(n,46.2,-124.4,-.3,.85),n}function M1(){const n=new G;n.name="water-loop";const e=-60,t=-148,i=I(e,t);n.add(u(new x(7.2,.22,5.4),l.concrete,e,i+.1,t)),n.add(u(new x(3.4,2.1,2.4),l.habDark,e-1.1,i+1.2,t)),n.add(u(new O(1.15,1.15,2.6,12),l.steel,e+1.8,i+1.5,t+.4)),n.add(u(new x(1.6,.7,1.2),l.ice,e+1.8,i+3.05,t+.4)),n.add(T("MELT","#1a2830","#d6e6ef",2.2,.55,e-1.1,i+1.7,t+1.35)),n.add(T("ICE","#1a2830","#d6e6ef",1.5,.42,e+1.8,i+1.7,t+1.7));const a=-64,s=-118,r=I(a,s);n.add(u(new x(7.4,.22,5.2),l.concrete,a,r+.1,s)),n.add(u(new x(3.6,2.2,2.6),l.steelDark,a,r+1.25,s)),n.add(u(new O(.55,.55,2.8,10),l.pipe,a+2.2,r+1.6,s-.6)),n.add(T("FILTER","#1a2830","#d6e6ef",2.5,.55,a,r+1.85,s+1.45));const o=-18,h=-88,c=I(o,h);return n.add(u(new x(9.2,.22,7.2),l.concrete,o,c+.1,h)),n.add(u(new O(2.15,2.15,5.6,16),l.tankO2,o-1.6,c+3,h)),n.add(u(new O(1.55,1.55,4.2,14),l.pipe,o+2.4,c+2.3,h+1.1)),n.add(T("POTABLE","#1a2830","#d6e6ef",3.2,.7,o-1.6,c+3.2,h+2.35)),n.add(T("H2O","#1a2830","#d6e6ef",1.8,.5,o+2.4,c+2.5,h+2.55)),n.add(T("ICE TO CREW","#1a100c","#f0c089",3.1,.5,o,c+6.15,h)),ji(n,-58,-154,e,t,6,1.2,.15),ji(n,e,t,a,s,8,1.2,.15),ji(n,a,s,-68,-26,10,1.15,.14),ji(n,a,s,o,h,10,1.2,.15),ji(n,o,h,-6,-100,8,1.15,.13),n}function w1(){const n=new G;n.name="batteries";const e=68,t=-10,i=I(e,t);n.add(u(new x(15.2,.22,7.2),l.concrete,e,i+.1,t));for(let o=0;o<6;o++){const h=e-5.5+o*2.2;n.add(u(new x(1.85,2.15,4.4),l.battery,h,i+1.25,t)),n.add(u(new x(1.7,.08,4.2),l.steel,h,i+2.38,t))}n.add(T("BATTERY","#111111","#f4e6c8",3.4,.7,e,i+3.15,t+3.75)),n.add(T("NIGHT STORE","#111111","#d6b48a",3.5,.55,e,i+2.45,t+3.75)),n.add(u(new O(.12,.12,18,8),l.cable,61,I(61,-14)+1.4,-14,0,0,Math.PI/2));const a=-22,s=-88,r=I(a,s);n.add(u(new x(7.2,.2,5.2),l.concrete,a,r+.1,s));for(let o=0;o<3;o++)n.add(u(new x(1.7,1.9,3.6),l.battery,a-2+o*2,r+1.15,s));return n.add(T("NIGHT","#111111","#f4e6c8",2.2,.5,a,r+2.55,s+2.7)),n.add(T("HABS","#111111","#d6b48a",1.8,.42,a,r+2.05,s+2.7)),n}function y1(n){const e=(c,d,p=1)=>n.push({type:"box",x:c,z:d,w:1.9*p,d:1.9*p}),t=(c,d,p)=>n.push({type:"cyl",x:c,z:d,r:p}),i=(c,d,p,f)=>n.push({type:"box",x:c,z:d,w:p,d:f});for(const[c,d]of[[10,8],[12.2,8.4],[10.4,10.6],[13.5,6.2],[-12,9],[-14,7.2],[8.5,-11],[6.4,-12.5]])e(c,d);for(const[c,d]of[[40,22],[38.2,24.1],[41.4,26.2],[36.5,21.4],[37.8,27.6],[34.8,24.8],[39.2,19.6],[35.4,19.2]])e(c,d);e(38.6,22.8,1.15),e(33.2,20.4,1.2),e(31.4,22.1,1.05);const a=24,s=70;for(const[c,d]of[[a,s],[a-1.8,s+2.1],[a+1.6,s+2.4],[a-2.4,s-1.2],[a+.8,s-2.2],[a-3.2,s+.6]])e(c,d);e(a-4.2,s+1.4,1.12),e(a-5.4,s-.6,1.05),e(5.4,13.2,.85);for(const[c,d]of[[18,-78],[20.2,-77.4],[18.4,-81.2],[24.6,-78.6],[26.2,-81.8]])e(c,d);const r=-60,o=66;for(const[c,d]of[[r,o],[r-1.8,o+2.1],[r+1.6,o+2.4],[r-2.4,o-1.2],[r+.8,o-2.2],[r-3.2,o+.6]])e(c,d);e(r-4.2,o+1.4,1.12),e(r-5.4,o-.6,1.05);for(const[c,d]of[[16,14],[8,-62],[30,74],[-94,-182],[48,-70],[-90,-148]])t(c,d,2.4);for(const[c,d]of[[-55,-146],[-61,-118],[-66,-78],[-68,-38],[-70,-62],[-50,-24],[-18,-14],[22,12]])t(c,d,3.4);for(const[c,d]of[[42,22],[39,26],[26,78],[26,68],[22,72],[-80,-174],[-34,-92],[-28,-104],[16,-120],[-28,128]])t(c,d,.55);for(const[c,d]of[[2.4,12.2],[-2.2,11.5],[3.8,15.6],[.6,18.2]])t(c,d,.55);i(4.3,14.8,1.4,1),i(-3.9,9.1,1.1,.8),i(5.1,16.4,1.2,.8);for(let c=0;c<8;c++)i(82.3,-22-c*6.2,50,2.6);i(54,-18,3,2.2);for(let c=0;c<4;c++)i(111.5,-74-c*6.2,30,2.6);i(96,-72,3,2.2);for(let c=0;c<5;c++)i(135.5,-28-c*6.2,30,2.6);i(120,-26,3,2.2);for(let c=0;c<5;c++)i(158.5,-48-c*6.2,30,2.6);i(146,-46,3,2.2),i(14,22,2.4,1.6),i(18,26,1.8,1.3),i(20,36,2,1.3),i(17,-17,2.4,1.6);const h=[[-108,-210],[-98,-210],[-88,-210],[-78,-210],[-68,-210],[-108,-198],[-98,-198],[-88,-198],[-78,-198],[-68,-198],[-108,-186],[-98,-186],[-88,-186],[-78,-186],[-68,-186],[-108,-174],[-98,-174],[-88,-174],[-78,-174],[-68,-174]];for(const[c,d]of h)t(c,d,.4);t(-96,-198,.7),t(-72,-204,.7),t(-104,-176,.7);for(const[c,d]of[[-90,-184],[-88.4,-182.6],[-91.2,-181.8],[-86.6,-185.2]])i(c,d,1.2,1.2);e(-84.5,-180.4,.85),e(-28,-68),e(-27,-71,1.1),e(-44,-80),e(-42.5,-68.5,.95),e(17.2,-119.4),e(18.4,-121.8,1.05),e(3.2,-118.6,.9),e(16.6,-128.8,.95),e(27.2,12.4,.9),e(12.6,13.1,.95),e(-32,124,.9),e(-30.6,126.4,.95)}function S1(){const n=new G;n.name="hab-street";const e=I(-13,-134);n.add(u(new x(30,.2,24),l.concrete,-13,e+.06,-136)),un(n,-20,-132,0,{airlock:!0,label:"HAB 3"}),un(n,-6,-132,0,{airlock:!0,label:"HAB 4"}),un(n,-13,-142,Math.PI/2,{airlock:!0,label:"HAB 5"});const t=I(-13,-132)+3.15;return n.add(u(new O(1.15,1.15,8.2,12),l.habDark,-13,t,-132,0,0,Math.PI/2)),n.add(u(new O(1.15,1.15,6.4,12),l.habDark,-13,t,-137,Math.PI/2,0,0)),n.add(T("HAB STREET","#1a100c","#f0c089",3.4,.65,-13,e+5.4,-126)),Ee(n,-26,-128,.2),Ee(n,1.2,-128.4,-.3,1.05),n}function yi(n,e,t,i,a){i==="x"?(n.push({type:"box",x:e,z:t-1.35,w:a,d:.4}),n.push({type:"box",x:e,z:t+1.35,w:a,d:.4})):(n.push({type:"box",x:e-1.35,z:t,w:.4,d:a}),n.push({type:"box",x:e+1.35,z:t,w:.4,d:a}))}function b1(n){const e=(t,i,a,s)=>n.push({type:"box",x:t,z:i,w:a,d:s});e(-6.2,0,5.2,14.8),e(6.2,0,5.2,14.8),e(0,-6.2,10,5.2),e(-4.35,5.8,6.4,5.2),e(4.35,5.8,6.4,5.2),e(0,7.15,3.8,.8),e(-1.45,7.15,.7,1.2),e(1.45,7.15,.7,1.2),e(-1.28,13,.36,12.4),e(1.28,13,.36,12.4),e(-1.45,19.2,.4,2.8),e(1.45,19.2,.4,2.8)}function E1(){const n=new G;n.name="food-3";const e=8,t=-142,i=I(e,t);n.add(u(new x(13.2,.25,7.6),l.concrete,e,i+.1,t));const a=new dt(new O(3.55,3.55,12.4,18,1,!1,0,Math.PI),l.glass);a.rotation.z=Math.PI/2,a.position.set(e,i+3.55,t),a.castShadow=!1,n.add(a),n.add(u(new x(12.2,.1,7.2),l.solarFrame,e,i+3.6,t));for(let s=-2;s<=2;s++){n.add(u(new x(1.85,.24,5.6),l.soil,e+s*2.1,i+.34,t));for(let r=-2;r<=2;r++){const o=r%2===0?l.plant:l.plantLeaf;n.add(u(new x(1.25,.58,.72),o,e+s*2.1,i+.78,t+r*.95))}n.add(u(new x(1.5,.05,5.2),l.glowWarm,e+s*2.1,i+3.15,t))}return n.add(u(new x(1.1,1.8,.14),l.habDark,e-6.2,i+1.1,t)),n.add(T("FOOD","#1a100c","#f0c089",2.8,.7,e,i+5.05,t+.15)),n.add(T("HAB STREET","#1a100c","#d6b48a",3.4,.5,e,i+4.35,t+.15)),Ee(n,15,-138,.2,.9),n}function T1(){const n=new G;n.name="solar-3";const e=6,t=5;for(let r=0;r<e;r++)for(let o=0;o<t;o++){const h=122+r*5.4,c=-28-o*6.2,d=I(h,c);n.add(u(new x(.18,1.6,.18),l.solarFrame,h,d+.8,c)),n.add(u(new x(4.6,.08,2.3),l.solar,h,d+1.55,c,-.55,.15,0)),n.add(u(new x(4.75,.05,2.42),l.solarFrame,h,d+1.5,c,-.55,.15,0))}const[i,a,s]=Ft(120,-26,.7);return n.add(u(new x(2.2,1.4,1.4),l.habDark,i,a,s)),n.add(T("POWER","#111111","#f4e6c8",2,.55,i,a+.2,s+.75)),n.add(T("FIELD 3","#111111","#d6b48a",2.2,.45,i,a+.85,s+.75)),n}function A1(){const n=new G;n.name="batteries-2";const e=68,t=6,i=I(e,t);n.add(u(new x(15.2,.22,7.2),l.concrete,e,i+.1,t));for(let o=0;o<6;o++){const h=e-5.5+o*2.2;n.add(u(new x(1.85,2.15,4.4),l.battery,h,i+1.25,t)),n.add(u(new x(1.7,.08,4.2),l.steel,h,i+2.38,t))}n.add(T("BATTERY","#111111","#f4e6c8",3.4,.7,e,i+3.15,t+3.75)),n.add(T("CREW STORE","#111111","#d6b48a",3.5,.55,e,i+2.45,t+3.75));const a=-28,s=-138,r=I(a,s);n.add(u(new x(7.2,.2,5.2),l.concrete,a,r+.1,s));for(let o=0;o<3;o++)n.add(u(new x(1.7,1.9,3.6),l.battery,a-2+o*2,r+1.15,s));return n.add(T("NIGHT","#111111","#f4e6c8",2.2,.5,a,r+2.55,s+2.7)),n.add(T("HAB 3-5","#111111","#d6b48a",2.2,.42,a,r+2.05,s+2.7)),n}function Un(n,e,t,i,a){const s=(e+i)*.5,r=(t+a)*.5,o=(I(e,t)+I(i,a))*.5+2.45,h=Math.hypot(i-e,a-t),c=u(new O(1.12,1.12,h,12),l.habDark,s,o,r,Math.PI/2,0,0);c.rotation.y=Math.atan2(i-e,a-t),n.add(c),n.add(u(new Ne(1.18,.07,6,14),l.steel,e,o,t,Math.PI/2,0,0)),n.add(u(new Ne(1.18,.07,6,14),l.steel,i,o,a,Math.PI/2,0,0))}function R1(){const n=new G;n.name="neighborhood",Un(n,-46,-108,-20,-132),Un(n,-6,-108,-6,-132),Un(n,-46,-108,-32,-98),Un(n,-6,-96,2,-22),Un(n,-40,-76,-32,-98),Un(n,-40,-76,-50,-72),Un(n,-6,-132,10,-124),Un(n,10,-124,8,-142);const[e,t,i]=Ft(-33,-120,3.4);n.add(T("PRESSURE","#1a100c","#f0c089",3.2,.55,e,t+1.2,i)),n.add(T("HAB 2-5","#1a100c","#d6b48a",2.8,.45,e,t+.55,i));const a=2,s=-22,r=I(a,s);return n.add(u(new O(1.45,1.45,2.8,12),l.habDark,a,r+1.55,s)),n.add(u(new x(1.1,1.8,.12),l.steelDark,a,r+1.5,s+1.5)),n.add(u(new Ne(1.48,.08,6,14),l.steel,a,r+2.95,s,Math.PI/2,0,0)),n.add(T("CREW ACCESS","#1a100c","#f0c089",3.4,.6,a,r+3.55,s+.2)),n.add(T("TO STARSHIP","#1a100c","#d6b48a",3.1,.45,a,r+2.95,s+.2)),n}function C1(){const n=new G;n.name="yard";const e=-36,t=-74,i=I(e,t);return n.add(u(new x(18,.22,14),l.concrete,e,i+.08,t)),un(n,-40,-76,0,{airlock:!0,label:"HAB 6"}),un(n,-32,-70,-.2,{onStands:!0,label:"NEXT"}),n.add(u(new x(.28,9.2,.28),l.lattice,e+6.2,i+4.7,t-3.4)),n.add(u(new x(8.4,.22,.22),l.lattice,e+2.4,i+9.2,t-3.4)),n.add(u(new O(.05,.05,6.8,6),l.cable,e-1.2,i+6.2,t-2.2)),n.add(u(new x(1.4,1.2,1.4),l.crate,e+1.6,i+8.6,t-3.2)),Ee(n,-28,-68,.2),Ee(n,-27,-71,-.4,1.1),Ee(n,-44,-80,.3),Ee(n,-42.5,-68.5,.1,.95),n.add(T("CONSTRUCTION","#1a100c","#f0c089",4,.7,e,i+4.6,t+6.4)),n.add(T("NEXT KIT","#1a100c","#d6b48a",3.2,.5,e,i+3.9,t+6.4)),n}function P1(){const n=new G;n.name="crew-ops";const e=-50,t=-72,i=I(e,t);return n.add(u(new x(12,.2,10),l.concrete,e,i+.08,t)),un(n,e,t,Math.PI/2,{r:2.2,len:7.6,airlock:!0,label:"MED"}),n.add(T("CREW OPS","#1a100c","#f0c089",3.4,.6,e,i+5.35,t+.2)),n.add(T("MEDICAL","#1a100c","#d6b48a",3,.45,e,i+4.75,t+.2)),Ee(n,-55.2,-76.4,.2,.9),Ee(n,-44.8,-68.6,-.25,.95),n}function D1(){const n=new G;n.name="commons";const e=10,t=-124,i=I(e,t);return n.add(u(new x(16,.22,12),l.concrete,e,i+.08,t)),un(n,e,t,0,{airlock:!0,label:"MESS"}),n.add(T("CREW COMMONS","#1a100c","#f0c089",4.2,.7,e,i+6.15,t+.2)),n.add(T("FROM CARGO","#1a100c","#d6b48a",3.4,.48,e,i+5.5,t+.2)),Ee(n,17.2,-119.4,.2),Ee(n,18.4,-121.8,-.3,1.05),Ee(n,3.2,-118.6,.15,.9),Ee(n,16.6,-128.8,.4,.95),n}function I1(){const n=new G;n.name="methalox-stock";const e=20,t=8,i=I(e,t);n.add(u(new x(16,.22,12),l.concrete,e,i+.08,t));for(let a=0;a<3;a++){const s=t-3.4+a*3.4;n.add(u(new O(1.15,1.15,6.4,16),l.tankCh4,e-3.2,i+1.45,s,0,0,Math.PI/2)),n.add(u(new O(1.15,1.15,6.4,16),l.tankO2,e+3.2,i+1.45,s,0,0,Math.PI/2))}return n.add(T("METHALOX","#1a100c","#f0c089",3.6,.7,e,i+3.55,t+6.2)),n.add(T("RETURN STOCK","#1a100c","#d6b48a",3.8,.5,e,i+2.9,t+6.2)),n.add(T("CH4","#6a2208","#f4e6c8",1.6,.42,e-3.2,i+2.85,t+3.6)),n.add(T("O2","#2a3340","#e8eef4",1.4,.42,e+3.2,i+2.85,t+3.6)),ce(n,[[20,2],[8,-2],[-8,-6],[-15,-8]],l.tankCh4,.12),Ee(n,27.2,12.4,.2,.9),Ee(n,12.6,13.1,-.25,.95),n}function L1(){const n=new G;n.name="next-window-pad";const e=-16,t=136;n.add(Jn(e,t,{finished:!0}));const i=I(e,t);return n.add(T("NEXT WINDOW","#1a100c","#f0c089",4.6,.85,e+22,i+3.6,t+4,-.55)),n.add(T("26 MONTHS","#1a100c","#d6b48a",3.6,.55,e+22,i+2.75,t+4,-.55)),n.add(u(new x(.12,3.4,.12),l.steelDark,e+22,i+1.7,t+4)),n.add(T("PAD 2","#1a100c","#f0c089",2.4,.55,e,i+.55,t+22.4)),n.add(u(new O(18.4,18.4,.12,40),l.concrete,e,i+.38,t)),n.add(u(new aa(9.2,17.6,36),l.soot,e,i+.46,t,-Math.PI/2,0,0)),n.add(T("SINTERED","#1a100c","#f0c089",3.6,.55,e+22,i+1.95,t+4,-.55)),n.add(U1(-38,148)),Ee(n,-32,124,.2,.9),Ee(n,-30.6,126.4,-.25,.95),Ee(n,-40,144,.1,.85),Ee(n,-41.4,146.2,-.3,.8),n}function U1(n,e){const t=new G;t.name="sinter-rig";const i=I(n,e);t.add(u(new x(8.4,.22,6.2),l.concrete,n,i+.1,e)),t.add(u(new x(5.6,2.4,3.2),l.habDark,n,i+1.4,e)),t.add(u(new x(1.6,3.6,1.6),l.steelDark,n+2.8,i+2,e-.4)),t.add(u(new O(.18,.18,4.8,8),l.steel,n+2.8,i+5.2,e-.4)),t.add(u(new x(2.4,.18,1.1),l.glowWarm,n+2.8,i+7.6,e-.4)),t.add(T("SINTER","#1a100c","#f0c089",3.2,.6,n,i+2.9,e+1.85)),t.add(T("REGOLITH","#1a100c","#d6b48a",3.4,.45,n,i+2.3,e+1.85));for(let a=0;a<4;a++)t.add(u(new x(1.4,.28,.9),l.concrete,n-2.4,i+.35+a*.32,e+2.6));return t}function z1(){const n=new G;n.name="solar-4";const e=6,t=5;for(let c=0;c<e;c++)for(let d=0;d<t;d++){const p=145+c*5.4,f=-48-d*6.2,m=I(p,f);n.add(u(new x(.18,1.6,.18),l.solarFrame,p,m+.8,f)),n.add(u(new x(4.6,.08,2.3),l.solar,p,m+1.55,f,-.55,.15,0)),n.add(u(new x(4.75,.05,2.42),l.solarFrame,p,m+1.5,f,-.55,.15,0))}const[i,a,s]=Ft(146,-46,.7);n.add(u(new x(2.2,1.4,1.4),l.habDark,i,a,s)),n.add(T("POWER","#111111","#f4e6c8",2,.55,i,a+.2,s+.75)),n.add(T("FIELD 4","#111111","#d6b48a",2.2,.45,i,a+.85,s+.75));const r=158,o=-28,h=I(r,o);n.add(u(new x(12,.2,7.2),l.concrete,r,h+.1,o));for(let c=0;c<5;c++)n.add(u(new x(1.7,2,4.2),l.battery,r-4+c*2,h+1.2,o));return n.add(T("NIGHT","#111111","#f4e6c8",2.2,.5,r,h+2.7,o+3.6)),n.add(T("FIELD 4","#111111","#d6b48a",2.4,.42,r,h+2.15,o+3.6)),n}function N1(){const n=new G;n.name="isru-2";const e=-96,t=-16,i=I(e,t);return n.add(u(new x(18,.35,18),l.concrete,e,i+.12,t)),n.add(u(new O(1.55,1.7,11,12),l.steelDark,e+2.2,i+5.8,t)),n.add(u(new Ne(2.15,.16,6,14),l.steel,e+2.2,i+8.8,t,Math.PI/2,0,0)),n.add(T("SABATIER","#1a100c","#f0c089",4.4,.9,e+4.2,i+7.2,t,Math.PI/2)),n.add(T("TRAIN 2","#1a100c","#d6b48a",3.2,.55,e+4.2,i+6.3,t,Math.PI/2)),n.add(u(new O(2.4,2.4,11,18),l.tankCh4,e-5.2,i+6,t+4.6,0,0,Math.PI/2)),n.add(u(new O(2.4,2.4,11,18),l.tankO2,e-5.2,i+6,t-4.4,0,0,Math.PI/2)),n.add(T("CH4","#6a2208","#f4e6c8",2.8,.8,e+.4,i+6,t+4.6)),n.add(T("O2","#2a3340","#e8eef4",2.6,.8,e+.4,i+6,t-4.4)),ce(n,[[-88,-16],[-80,-16],[-72,-16]],l.tankCh4,.14),ce(n,[[-88,-18],[-80,-20],[-72,-18]],l.steel,.12),n}function O1(){const n=new G;n.name="ice-mine-2";const e=-78,t=-172,i=I(e,t);n.add(u(new x(8,.3,8),l.concrete,e,i+.1,t)),n.add(u(new x(.28,14,.28),l.lattice,e-2.2,i+7,t-2.2)),n.add(u(new x(.28,14,.28),l.lattice,e+2.2,i+7,t-2.2)),n.add(u(new x(.28,14,.28),l.lattice,e-2.2,i+7,t+2.2)),n.add(u(new x(.28,14,.28),l.lattice,e+2.2,i+7,t+2.2)),n.add(u(new x(5.2,.25,5.2),l.steelDark,e,i+14.2,t)),n.add(u(new O(.35,.55,9,10),l.steel,e,i+5,t)),n.add(u(new ki(.7,1.6,8),l.soot,e,i+.9,t));const a=u(new mt(4,0),l.ice,e+8.2,i+1.8,t+1.4);return a.scale.set(1.45,.75,1.2),n.add(a),n.add(u(new x(6.4,.35,1.1),l.steelDark,e+3.6,i+1.4,t,0,0,-.18)),n.add(T("ICE 2","#1a2830","#d6e6ef",2.6,.65,e,i+8.4,t+2.6)),ce(n,[[-74,-168],[-68,-150],[-64,-90],[-68,-26]],l.pipe,.13),n}function F1(){const n=new G;n.name="workshop-2";const e=66,t=-74,i=I(e,t);n.add(u(new x(16,.28,12),l.concrete,e,i+.1,t));const a=u(new O(5.4,5.4,14,16,1,!1,0,Math.PI),l.habDark,e-1.2,i+3.1,t);return a.rotation.z=Math.PI/2,n.add(a),n.add(u(new x(.2,3.8,5.8),l.steelDark,e-8.1,i+2,t)),n.add(u(new x(.28,8.4,.28),l.lattice,e+6.4,i+4.3,t-3.6)),n.add(u(new x(7.2,.2,.2),l.lattice,e+3,i+8.5,t-3.6)),n.add(u(new x(1.5,1.1,1.5),l.crate,e+2.2,i+8,t-3.4)),Ee(n,73.2,-69.4,.2),Ee(n,74.4,-71.6,-.3,1.05),Ee(n,58.6,-68.8,.15,.9),n.add(T("WORKSHOP","#1a100c","#f0c089",3.8,.75,e,i+5.4,t+.2)),n.add(T("BAY 2","#1a100c","#d6b48a",2.6,.5,e,i+4.7,t+.2)),n}function B1(){const n=new G;n.name="potable";const e=18,t=-152,i=I(e,t);n.add(u(new x(14,.22,10),l.concrete,e,i+.1,t));for(let a=0;a<4;a++){const s=e-4.5+a*3;n.add(u(new O(1.15,1.15,6.2,14),l.pipe,s,i+1.5,t,0,0,Math.PI/2))}return n.add(T("POTABLE","#1a2830","#d6e6ef",3.4,.7,e,i+3.35,t+4.6)),n.add(T("HAB STORE","#1a2830","#d6b48a",3.2,.5,e,i+2.7,t+4.6)),ce(n,[[18,-148],[8,-142],[-6,-120],[-18,-88]],l.pipe,.12),n}function k1(){const n=new G;n.name="hab-berms";const e=[[-58,-108,9.5,.2],[-20,-100,12.5,0],[22,-128,8.5,1.2],[-8,-148,7.5,.4]];for(const[s,r,o,h]of e){const c=I(s,r),d=u(new Ne(o,1.55,8,24,Math.PI*1.15),l.rust,s,c-.2,r,Math.PI/2,h,0);d.scale.set(1,.42,1),n.add(d)}for(const[s,r]of[[-62,-102],[-14,-96],[26,-122]]){const o=u(new mt(2.4,0),l.rust,s,I(s,r)+.95,r);o.scale.set(1.25,.6,1.05),n.add(o)}const[t,i,a]=Ft(-20,-100,2.4);return n.add(T("DUST BERM","#1a100c","#f0c089",3.6,.65,t,i+1.1,a)),n.add(T("HAB WIND","#1a100c","#d6b48a",3.2,.48,t,i+.5,a)),n}function H1(){const n=new G;n.name="earth-dish-2";const e=-8,t=-162,i=I(e,t);n.add(u(new O(6.2,6.2,.26,28),l.concrete,e,i+.1,t)),n.add(u(new O(1.1,1.4,4.2,12),l.steelDark,e,i+2.2,t));const a=new G;return a.position.set(e,i+6.8,t),a.rotation.set(-.88,.55,0),a.add(u(new vt(5.2,22,14,0,Math.PI*2,0,Math.PI/2.28),l.dish,0,0,0)),a.add(u(new O(.06,.06,3.8,6),l.steelDark,0,1.9,0)),n.add(a),n.add(T("EARTH 2","#1a100c","#f0c089",3.2,.65,e,i+3.6,t+5.2)),n.add(T("BACKUP LINK","#1a100c","#d6b48a",3.4,.5,e,i+2.95,t+5.2)),n}function G1(){const n=new G;n.name="eclss";const e=8,t=-98,i=I(e,t);return n.add(u(new x(11.2,.22,7.2),l.concrete,e,i+.1,t)),n.add(u(new x(4.8,2.6,3.4),l.habDark,e-2.4,i+1.5,t)),n.add(T("ECLSS","#1a100c","#f0c089",3.2,.6,e-2.4,i+3.05,t+1.85)),n.add(T("CO2 SCRUB","#1a100c","#d6b48a",3.4,.45,e-2.4,i+2.45,t+1.85)),n.add(u(new O(.85,.85,3.4,12),l.steelDark,e+1.6,i+1.9,t-1.4)),n.add(u(new O(.85,.85,3.4,12),l.steelDark,e+3.4,i+1.9,t-1.4)),n.add(T("AMINE","#1a100c","#d6b48a",2.2,.4,e+2.5,i+3.8,t-1.4)),n.add(u(new O(.7,.7,2.6,12),l.tankO2,e+1.6,i+1.5,t+1.8)),n.add(u(new O(.7,.7,2.6,12),l.tankO2,e+3.4,i+1.5,t+1.8)),n.add(T("O2","#2a3340","#e8eef4",1.4,.4,e+2.5,i+3.05,t+1.8)),ce(n,[[8,-98],[14,-104],[22,-112]],l.pipe,.1),ce(n,[[8,-98],[2,-102],[-6,-108]],l.tankO2,.09),n}function V1(){const n=new G;n.name="rover-shelter";const e=48,t=-70,i=I(e,t);n.add(u(new x(12.4,.18,8.6),l.concrete,e,i+.08,t));const a=[[-5.2,-3.4],[5.2,-3.4],[-5.2,3.4],[5.2,3.4]];for(const[s,r]of a)n.add(u(new x(.28,4.6,.28),l.steelDark,e+s,i+2.4,t+r));return n.add(u(new x(12.8,.16,9),l.steel,e,i+4.75,t)),n.add(u(new x(12.8,.06,9),l.solar,e,i+4.88,t)),n.add(T("DUST","#1a100c","#f0c089",2.6,.5,e,i+5.35,t+4.6)),n.add(T("ROVER","#1a100c","#d6b48a",2.8,.42,e,i+4.8,t+4.6)),n}function W1(){const n=new G;n.name="isru-radiators";const e=-68,t=12,i=I(e,t);n.add(u(new x(16.4,.18,6.2),l.concrete,e,i+.08,t));for(let a=0;a<5;a++){const s=e-6+a*3;n.add(u(new x(.16,3.6,.16),l.steelDark,s,i+1.9,t-1.8)),n.add(u(new x(.16,3.6,.16),l.steelDark,s,i+1.9,t+1.8)),n.add(u(new x(2.4,3.2,.08),l.solar,s,i+2.4,t,-.15,0,0)),n.add(u(new x(2.5,3.3,.04),l.steel,s,i+2.4,t+.06,-.15,0,0))}return n.add(T("REJECT","#1a100c","#f0c089",2.8,.5,e,i+4.55,t+3.2)),n.add(T("HEAT","#1a100c","#d6b48a",2.4,.42,e,i+4,t+3.2)),ce(n,[[-68,-6],[-68,4],[-68,12]],l.pipe,.1),n}function X1(){const n=new G;n.name="parts-depot";const e=22,t=-80,i=I(e,t);return n.add(u(new x(12.2,.18,8.2),l.concrete,e,i+.08,t)),n.add(u(new x(.22,3.8,8.2),l.steelDark,e-5.8,i+2,t)),n.add(u(new x(12.2,.14,8.4),l.steel,e,i+3.95,t)),Ee(n,18,-78,.15,1),Ee(n,20.2,-77.4,-.2,.95),Ee(n,18.4,-81.2,.3,1.05),Ee(n,24.6,-78.6,-.1,1),Ee(n,26.2,-81.8,.25,.9),n.add(u(new x(2.4,1.1,1.4),l.steel,e+1.2,i+.75,t+.4)),n.add(T("PARTS","#1a100c","#f0c089",2.8,.55,e,i+4.45,t+4.2)),n.add(T("CARGO","#1a100c","#d6b48a",2.6,.42,e,i+3.9,t+4.2)),n}function q1(){const n=new G;n.name="greenhouse-2";const e=52,t=-112,i=I(e,t);n.add(u(new x(13.6,.22,8.2),l.concrete,e,i+.1,t));const a=new dt(new O(3.7,3.7,12.6,16,1,!1,0,Math.PI),l.glass);a.rotation.z=Math.PI/2,a.position.set(e,i+3.7,t),a.castShadow=!1,n.add(a),n.add(u(new x(12.4,.1,7.6),l.solarFrame,e,i+3.75,t));for(let s=-2;s<=2;s++){n.add(u(new x(1.9,.24,6),l.soil,e+s*2.15,i+.34,t));for(let r=-2;r<=2;r++){const o=r%2===0?l.plant:l.plantLeaf;n.add(u(new x(1.3,.48,.74),o,e+s*2.15,i+.68,t+r*1.05))}n.add(u(new x(1.55,.05,5.6),l.glowWarm,e+s*2.15,i+3.2,t))}return n.add(T("GREENHOUSE 2","#1a100c","#f0c089",4,.65,e,i+5.15,t+.15)),n.add(T("GROW FROM CO2","#1a100c","#d6b48a",3.6,.48,e,i+4.5,t+.15)),ce(n,[[32,-112],[42,-112],[52,-112]],l.pipe,.1),n}function Y1(){const n=new G;n.name="ice-depot";const e=-90,t=-158,i=I(e,t);n.add(u(new x(12,.22,10),l.concrete,e,i+.1,t)),n.add(u(new x(3.6,2.4,2.8),l.steelDark,e-1.8,i+1.35,t)),n.add(u(new O(.85,1.65,2.1,10),l.steelDark,e-1.8,i+3.35,t)),n.add(u(new x(2.4,.28,1.05),l.steel,e+.7,i+2.1,t,0,0,-.2));const a=u(new mt(2.8,0),l.ice,e+3.6,i+1.25,t+1.5);return a.scale.set(1.35,.7,1.15),n.add(a),n.add(u(new mt(1.15,0),l.ice,e+4.8,i+.85,t+.2)),n.add(T("ICE","#1a2830","#d6e6ef",2.2,.55,e,i+3.85,t+4.4)),n.add(T("CRUSH","#1a2830","#d6e6ef",2.6,.5,e,i+3.2,t+4.4)),ce(n,[[-86,-160],[-80,-166],[-74,-168]],l.pipe,.13),n}function K1(){const n=new G;n.name="batteries-3";const e=8,t=-78,i=I(e,t);n.add(u(new x(11.6,.2,6.4),l.concrete,e,i+.1,t));for(let a=0;a<5;a++)n.add(u(new x(1.7,1.95,3.8),l.battery,e-4+a*2,i+1.15,t)),n.add(u(new x(1.55,.08,3.6),l.steel,e-4+a*2,i+2.18,t));return n.add(T("NIGHT","#111111","#f4e6c8",2.4,.5,e,i+2.7,t+3.3)),n.add(T("HAB STORE","#111111","#d6b48a",3,.42,e,i+2.15,t+3.3)),n}function J1(){const n=new G;n.name="o2-buffer";const e=-8,t=-88,i=I(e,t);n.add(u(new x(10.2,.2,7.4),l.concrete,e,i+.1,t));for(let a=0;a<4;a++){const s=e-3.3+a*2.2;n.add(u(new O(.85,.85,3.6,12),l.tankO2,s,i+2,t))}return n.add(T("O2","#2a3340","#e8eef4",1.8,.5,e,i+4.15,t+3.7)),n.add(T("CREW","#2a3340","#d6b48a",2.2,.42,e,i+3.6,t+3.7)),ce(n,[[-8,-88],[0,-94],[8,-98]],l.tankO2,.1),n}function Z1(){const n=new G;n.name="co2-capture";const e=-96,t=4,i=I(e,t);return n.add(u(new x(11.6,.2,7.4),l.concrete,e,i+.1,t)),n.add(u(new O(.55,.55,6.8,10),l.steel,e-2.4,i+3.6,t)),n.add(u(new O(2.1,.65,2.4,14),l.steelDark,e-2.4,i+7.8,t)),n.add(u(new Ne(1.85,.1,6,16),l.steel,e-2.4,i+9.1,t,Math.PI/2,0,0)),n.add(u(new x(3.2,2.2,2.4),l.habDark,e+2.2,i+1.3,t)),n.add(T("CO2","#1a100c","#f0c089",2.2,.55,e-2.4,i+4.8,t+1.4)),n.add(T("INTAKE 2","#1a100c","#d6b48a",3,.45,e+2.2,i+2.7,t+1.35)),ce(n,[[-96,4],[-96,-6],[-96,-16]],l.pipe,.12),n}function $1(){const n=new G;n.name="solar-dust-fence";const e=142,t=-62,i=I(e,t);for(let a=0;a<8;a++){const s=t-10.5+a*3;n.add(u(new x(.18,3.4,.18),l.steelDark,e,i+1.8,s)),a<7&&n.add(u(new x(.06,2.6,2.7),l.lattice,e,i+1.7,s+1.5))}return n.add(T("DUST","#1a100c","#f0c089",2.4,.45,e-1.4,i+3.5,t)),n.add(T("FENCE","#1a100c","#d6b48a",2.4,.4,e-1.4,i+3,t)),n}function j1(){const n=new G;n.name="condensate";const e=28,t=-140,i=I(e,t);return n.add(u(new x(9.6,.2,7.2),l.concrete,e,i+.1,t)),n.add(u(new O(1.35,1.35,3.8,14),l.pipe,e-1.6,i+2.1,t)),n.add(u(new O(1.35,1.35,3.8,14),l.pipe,e+1.8,i+2.1,t)),n.add(u(new x(2.4,1.6,1.8),l.habDark,e,i+1,t+2.2)),n.add(T("H2O","#1a2830","#d6e6ef",2.2,.5,e,i+4.3,t+3.6)),n.add(T("CONDENSATE","#1a2830","#d6b48a",3.6,.42,e,i+3.75,t+3.6)),ce(n,[[28,-140],[18,-146],[18,-152]],l.pipe,.1),ce(n,[[28,-140],[16,-142],[8,-142]],l.pipe,.09),n}function Q1(){const n=new G;n.name="eva-rack";const e=12,t=18,i=I(e,t);return n.add(u(new x(5.8,.16,2.4),l.steelDark,e,i+.08,t)),n.add(u(new x(.16,2.8,.16),l.steel,e-2.4,i+1.5,t-.7)),n.add(u(new x(.16,2.8,.16),l.steel,e+2.4,i+1.5,t-.7)),n.add(u(new x(5,.12,.12),l.steel,e,i+2.9,t-.7)),n.add(nn(e-1.5,t,.2)),n.add(nn(e,t+.15,-.1)),n.add(nn(e+1.5,t,.15)),n.add(T("SUITS","#1a100c","#f0c089",2.4,.45,e,i+3.35,t+1.2)),n.add(T("EVA RACK","#1a100c","#d6b48a",2.8,.4,e,i+2.85,t+1.2)),n}function em(){const n=new G;n.name="ch4-buffer";const e=36,t=8,i=I(e,t);n.add(u(new x(9.6,.2,7.2),l.concrete,e,i+.1,t));for(let a=0;a<3;a++)n.add(u(new O(1.05,1.05,5.6,14),l.tankCh4,e-2.4+a*2.4,i+1.4,t,0,0,Math.PI/2));return n.add(T("CH4","#6a2208","#f4e6c8",2.2,.5,e,i+3.35,t+3.7)),n.add(T("RETURN","#6a2208","#d6b48a",2.6,.42,e,i+2.8,t+3.7)),ce(n,[[28,8],[32,8],[36,8]],l.tankCh4,.11),n}function tm(){const n=new G;n.name="o2-return";const e=36,t=-6,i=I(e,t);n.add(u(new x(9.6,.2,7.2),l.concrete,e,i+.1,t));for(let a=0;a<3;a++)n.add(u(new O(1.05,1.05,5.6,14),l.tankO2,e-2.4+a*2.4,i+1.4,t,0,0,Math.PI/2));return n.add(T("O2","#2a3340","#e8eef4",1.8,.5,e,i+3.35,t+3.7)),n.add(T("RETURN","#2a3340","#d6b48a",2.6,.42,e,i+2.8,t+3.7)),ce(n,[[36,8],[36,1],[36,-6]],l.steel,.11),n}function nm(){const n=new G;n.name="isru-electrolysis";const e=-50,t=4,i=I(e,t);n.add(u(new x(11.6,.2,7.4),l.concrete,e,i+.1,t)),n.add(u(new x(3.4,3.6,2.6),l.habDark,e-2.6,i+2,t)),n.add(u(new x(3.4,3.6,2.6),l.steelDark,e+1.2,i+2,t));for(let a=0;a<4;a++)n.add(u(new x(.18,3.1,2.2),l.steel,e-3.8+a*.7,i+2,t));return n.add(u(new O(1.15,1.15,5.2,14),l.steel,e+4.2,i+2.8,t+1.4)),n.add(u(new O(.95,.95,4.4,14),l.tankO2,e+4.2,i+2.4,t-1.6)),n.add(T("ELECTRO","#1a100c","#f0c089",3.2,.5,e,i+4.55,t+3.7)),n.add(T("H2 RECYCLE","#1a100c","#d6b48a",3.4,.42,e,i+4,t+3.7)),ce(n,[[-72,-26],[-50,-16],[-50,4]],l.pipe,.11),ce(n,[[-50,4],[-58,4],[-64,-8]],l.steel,.1),n}function im(){const n=new G;n.name="ice-melt";const e=-58,t=-142,i=I(e,t);n.add(u(new x(9.6,.2,7.2),l.concrete,e,i+.1,t)),n.add(u(new x(3.6,2.8,3.2),l.habDark,e-1.8,i+1.6,t)),n.add(u(new O(1.45,1.45,4.2,14),l.pipe,e+2.2,i+2.3,t)),n.add(u(new O(.55,.85,1.6,10),l.steelDark,e+2.2,i+4.9,t));const a=u(new mt(1.8,0),l.ice,e-3.4,i+.9,t+2.1);return a.scale.set(1.15,.55,1),n.add(a),n.add(T("MELT","#1a2830","#d6e6ef",2.4,.5,e,i+4.4,t+3.7)),n.add(T("STILL","#1a2830","#d6b48a",2.2,.42,e,i+3.85,t+3.7)),ce(n,[[-58,-158],[-58,-150],[-58,-142]],l.pipe,.11),ce(n,[[-58,-142],[-64,-90],[-68,-26]],l.pipe,.1),n}function am(){const n=new G;n.name="methalox-pump";const e=-32,t=-22,i=I(e,t);return n.add(u(new x(9.6,.2,7.2),l.concrete,e,i+.1,t)),n.add(u(new x(5.2,3.2,4.4),l.habDark,e,i+1.8,t)),n.add(u(new x(5.4,.14,4.6),l.steel,e,i+3.5,t)),n.add(u(new O(.55,.55,1.8,10),l.tankCh4,e-1.4,i+1.1,t+2.6,0,0,Math.PI/2)),n.add(u(new O(.55,.55,1.8,10),l.steel,e+1.4,i+1.1,t+2.6,0,0,Math.PI/2)),n.add(T("PUMP","#1a100c","#f0c089",2.4,.5,e,i+4.15,t+3.7)),n.add(T("METHALOX","#1a100c","#d6b48a",3.2,.42,e,i+3.6,t+3.7)),ce(n,[[-32,-14],[-32,-18],[-32,-22]],l.tankCh4,.11),ce(n,[[-32,-18],[-32,-22],[-18,-10]],l.steel,.1),n}function sm(){const n=new G;n.name="sinter-press";const e=66,t=-90,i=I(e,t);return n.add(u(new x(9.6,.2,7.2),l.concrete,e,i+.1,t)),n.add(u(new x(4.6,2.2,3.4),l.steelDark,e,i+1.3,t)),n.add(u(new x(1.4,3.4,1.4),l.steel,e,i+3.2,t)),n.add(u(new x(3.2,.35,2.4),l.steel,e,i+4.9,t)),n.add(u(new x(2.2,.55,1.6),l.habDark,e,i+2.55,t)),Ee(n,62.2,-87.6,.2,.9),Ee(n,70,-92.2,-.15,.85),n.add(T("SINTER","#1a100c","#f0c089",2.8,.5,e,i+5.55,t+3.7)),n.add(T("PRESS","#1a100c","#d6b48a",2.4,.42,e,i+5,t+3.7)),n}function rm(){const n=new G;n.name="waste-recycle";const e=22,t=-98,i=I(e,t);return n.add(u(new x(9.6,.2,7.2),l.concrete,e,i+.1,t)),n.add(u(new x(4.4,2.8,3.6),l.habDark,e-1.4,i+1.6,t)),n.add(u(new O(1.15,1.15,3.6,14),l.pipe,e+2.8,i+2,t)),n.add(u(new O(.85,.85,2.8,12),l.steelDark,e+2.8,i+1.6,t+2)),n.add(T("WASTE","#1a100c","#f0c089",2.6,.5,e,i+4.25,t+3.7)),n.add(T("RECOVERY","#1a100c","#d6b48a",3.2,.42,e,i+3.7,t+3.7)),ce(n,[[8,-98],[14,-98],[22,-98]],l.pipe,.1),ce(n,[[22,-98],[22,-112],[22,-112]],l.pipe,.09),n}function om(){const n=new G;n.name="solar-combiner";const e=172,t=-48,i=I(e,t);n.add(u(new x(9.6,.2,7.2),l.concrete,e,i+.1,t)),n.add(u(new x(3.6,2.4,2.8),l.habDark,e-2,i+1.4,t)),n.add(u(new x(3.2,2,2.4),l.steelDark,e+2.2,i+1.2,t));for(let a=0;a<3;a++)n.add(u(new x(.7,1.5,1.8),l.battery,e+1.2+a*.85,i+1,t));return n.add(T("COMBINER","#111111","#f4e6c8",3.4,.5,e,i+3.55,t+3.7)),n.add(T("FIELD 4","#111111","#d6b48a",2.6,.42,e,i+3,t+3.7)),ce(n,[[158,-62],[166,-54],[172,-48]],l.cable,.1),ce(n,[[172,-48],[164,-38],[158,-28]],l.cable,.09),n}function cm(){const n=new G;n.name="gh-dust-filter";const e=38,t=-104,i=I(e,t);return n.add(u(new x(9.2,.18,5.6),l.concrete,e,i+.09,t)),n.add(u(new x(3.8,2.6,2.4),l.habDark,e-1.6,i+1.5,t)),n.add(u(new O(.95,.95,3.2,12),l.steelDark,e+2.4,i+1.8,t)),n.add(u(new x(.12,2.2,2),l.lattice,e+3.5,i+1.4,t)),n.add(T("DUST","#1a100c","#f0c089",2.2,.45,e,i+3.55,t+2.9)),n.add(T("FILTER","#1a100c","#d6b48a",2.6,.4,e,i+3.05,t+2.9)),ce(n,[[22,-112],[30,-108],[38,-104]],l.pipe,.1),ce(n,[[38,-104],[46,-108],[52,-112]],l.pipe,.09),n}function lm(){const n=new G;n.name="weather-mast";const e=24,t=-128,i=I(e,t);return n.add(u(new x(3.6,.16,3.6),l.concrete,e,i+.08,t)),n.add(u(new O(.16,.22,14.4,8),l.lattice,e,i+7.3,t)),n.add(u(new x(2.8,.08,.08),l.steel,e,i+12.4,t)),n.add(u(new x(.08,.08,2.8),l.steel,e,i+12.4,t)),n.add(u(new x(2.2,.06,.06),l.steelDark,e,i+14.2,t)),n.add(u(new x(1.4,1.1,1.1),l.habDark,e+1.15,i+.75,t+.9)),n.add(T("MET","#1a100c","#f0c089",1.8,.42,e,i+8.6,t+1.6)),n.add(T("DUST","#1a100c","#d6b48a",2,.38,e,i+8.1,t+1.6)),n}function dm(){const n=new G;n.name="ch4-chiller";const e=-80,t=20,i=I(e,t);return n.add(u(new x(9.6,.2,7.2),l.concrete,e,i+.1,t)),n.add(u(new x(4.2,2.6,3.2),l.habDark,e-1.6,i+1.5,t)),n.add(u(new O(1.25,1.25,5,14),l.tankCh4,e+2.6,i+2.7,t)),n.add(u(new Ne(1.55,.1,6,14),l.steel,e+2.6,i+4.4,t,Math.PI/2,0,0)),n.add(T("CH4","#6a2208","#f4e6c8",2,.45,e,i+4.15,t+3.7)),n.add(T("CHILLER","#1a100c","#d6b48a",2.8,.4,e,i+3.6,t+3.7)),ce(n,[[-76,-10],[-80,6],[-80,20]],l.tankCh4,.11),ce(n,[[-68,12],[-74,16],[-80,20]],l.pipe,.09),n}function hm(){const n=new G;n.name="pad2-beacons";const e=[[2,154],[-34,154],[2,118],[-34,118]];for(const[s,r]of e){const o=I(s,r);n.add(u(new O(.14,.18,5.6,8),l.steelDark,s,o+2.9,r)),n.add(u(new x(.55,.55,.55),l.glowPad,s,o+5.85,r)),n.add(u(new x(.22,.9,.22),l.steel,s,o+6.4,r))}const t=6,i=148,a=I(t,i);return n.add(u(new x(5.4,.16,4.2),l.concrete,t,a+.08,i)),n.add(u(new x(2.6,1.6,1.8),l.habDark,t,a+1,i)),n.add(T("PAD 2","#1a100c","#f0c089",2.2,.42,t,a+2.35,i+2.2)),n.add(T("BEACONS","#1a100c","#d6b48a",2.6,.38,t,a+1.88,i+2.2)),n}function um(){const n=new G;n.name="cargo-crane";const e=-64,t=80,i=I(e,t);return n.add(u(new x(7.2,.2,7.2),l.concrete,e,i+.1,t)),n.add(u(new x(1.4,10.4,1.4),l.steelDark,e,i+5.3,t)),n.add(u(new x(.28,.28,12.4),l.steel,e+3.6,i+10.5,t-3.2,0,.55,.08)),n.add(u(new x(.18,3.2,.18),l.steelDark,e+7.4,i+8.4,t-6.6)),n.add(u(new x(1.5,1.3,1.5),l.crate,e+7.4,i+6.5,t-6.6)),Ee(n,e-2.4,t+2.2,.2,1),Ee(n,e-2.8,t-1.6,-.15,.9),n.add(T("CRANE","#1a100c","#f0c089",2.6,.5,e,i+6.4,t+3.6)),n.add(T("CARGO","#1a100c","#d6b48a",2.4,.42,e,i+5.85,t+3.6)),n}function fm(){const n=new G;n.name="o2-chiller";const e=-80,t=32,i=I(e,t);return n.add(u(new x(9.6,.2,7.2),l.concrete,e,i+.1,t)),n.add(u(new x(4.2,2.6,3.2),l.habDark,e-1.6,i+1.5,t)),n.add(u(new O(1.25,1.25,5,14),l.tankO2,e+2.6,i+2.7,t)),n.add(u(new Ne(1.55,.1,6,14),l.steel,e+2.6,i+4.4,t,Math.PI/2,0,0)),n.add(T("O2","#2a3340","#e8eef4",1.8,.45,e,i+4.15,t+3.7)),n.add(T("CHILLER","#1a100c","#d6b48a",2.8,.4,e,i+3.6,t+3.7)),ce(n,[[-80,20],[-80,26],[-80,32]],l.steel,.11),ce(n,[[-72,-21],[-80,8],[-80,32]],l.steel,.09),n}function pm(){const n=new G;n.name="power-trench";const e=100,t=-22,i=I(e,t);n.add(u(new x(7.6,.18,5.4),l.concrete,e,i+.08,t)),n.add(u(new x(3.2,1.8,2.4),l.habDark,e,i+1.1,t)),n.add(u(new x(1.4,.9,1.1),l.steelDark,e+2.4,i+.65,t+1.2)),n.add(T("POWER","#111111","#f4e6c8",2.6,.45,e,i+2.45,t+2.8)),n.add(T("TRENCH","#111111","#d6b48a",2.4,.38,e,i+1.95,t+2.8)),ce(n,[[172,-48],[135,-40],[100,-22]],l.cable,.12),ce(n,[[100,-22],[84,-16],[68,-10]],l.cable,.12);for(const[a,s]of[[148,-44],[122,-34],[84,-16]]){const r=I(a,s);n.add(u(new x(2.4,.16,1.1),l.steelDark,a,r+.12,s))}return n}function mm(){const n=new G;n.name="regolith-stock";const e=-22,t=-56,i=I(e,t);n.add(u(new x(9.6,.16,7.2),l.concrete,e,i+.08,t));const a=u(new mt(2.6,0),l.soil,e-1.6,i+1.2,t);a.scale.set(1.35,.7,1.15),n.add(a);const s=u(new mt(2,0),l.soil,e+2.2,i+.95,t+1.1);return s.scale.set(1.2,.6,1.05),n.add(s),n.add(u(new x(2.2,1.2,1.6),l.steelDark,e+2.6,i+.8,t-2)),Ee(n,e-3.4,t-2.2,.2,.85),n.add(T("REGOLITH","#1a100c","#f0c089",3.4,.48,e,i+3.15,t+3.7)),n.add(T("SINTER FEED","#1a100c","#d6b48a",3.4,.4,e,i+2.6,t+3.7)),n}function gm(){const n=new G;n.name="survey-2";const e=-124,t=-188,i=I(e,t);for(let s=0;s<3;s++){const r=s/3*Math.PI*2+.2,o=Math.cos(r)*.62,h=Math.sin(r)*.62;n.add(u(new x(.08,2.5,.08),l.steelDark,e+o,i+1.15,t+h,.32*Math.cos(r),0,.32*Math.sin(r)))}n.add(u(new x(.58,.32,.48),l.steelDark,e,i+2.28,t)),n.add(T("SURVEY 2","#1a100c","#f0c089",3,.55,e,i+3.4,t+1.2)),n.add(T("ICE WEST","#1a100c","#d6b48a",2.6,.4,e,i+2.85,t+1.2));const a=[[-136,-200],[-124,-200],[-112,-200],[-136,-188],[-124,-188],[-112,-188],[-136,-176],[-124,-176],[-112,-176]];for(let s=0;s<a.length;s++){const[r,o]=a[s];Yr(n,r,o,s%2===0?l.flagIce:l.flagDeposit)}return Za(n,-130,-196,"ICE",l.flagIce),Cr(n,-122,-184,.2),Cr(n,-126.4,-182.6,-.3),n}function xm(){const n=new G;n.name="h2-recycle";const e=-38,t=16,i=I(e,t);return n.add(u(new x(9.6,.2,7.2),l.concrete,e,i+.1,t)),n.add(u(new O(1.55,1.55,6.4,16),l.steel,e-1.8,i+3.4,t)),n.add(u(new O(1.55,1.55,6.4,16),l.steel,e+1.8,i+3.4,t)),n.add(u(new x(2.2,1.4,1.6),l.habDark,e,i+.9,t+2.2)),n.add(T("H2","#1a100c","#f0c089",1.8,.5,e,i+5.15,t+3.7)),n.add(T("RECYCLE","#1a100c","#d6b48a",2.8,.42,e,i+4.55,t+3.7)),ce(n,[[-50,4],[-44,10],[-38,16]],l.steel,.11),ce(n,[[-38,16],[-52,8],[-64,-8]],l.steel,.1),n}function _m(){const n=new G;n.name="food-4";const e=70,t=-112,i=I(e,t);n.add(u(new x(11.6,.22,7.2),l.concrete,e,i+.1,t));const a=new dt(new O(3.3,3.3,11.2,16,1,!1,0,Math.PI),l.glass);a.rotation.z=Math.PI/2,a.position.set(e,i+3.3,t),a.castShadow=!1,n.add(a),n.add(u(new x(10.8,.1,6.6),l.solarFrame,e,i+3.35,t));for(let s=-2;s<=2;s++){n.add(u(new x(1.7,.22,5.2),l.soil,e+s*1.95,i+.32,t));for(let r=-2;r<=2;r++){const o=r%2===0?l.plant:l.plantLeaf;n.add(u(new x(1.15,.5,.66),o,e+s*1.95,i+.7,t+r*.9))}}return n.add(T("GROW 4","#1a100c","#f0c089",2.8,.55,e,i+4.75,t+.15)),n.add(T("FROM CO2","#1a100c","#d6b48a",3,.42,e,i+4.15,t+.15)),ce(n,[[52,-112],[62,-112],[70,-112]],l.pipe,.1),n}function vm(){const n=new G;n.name="approach-lights";for(const[a,s]of[[4,68],[4,50],[4,32]]){const r=I(a,s);n.add(u(new O(.12,.16,3.6,8),l.steelDark,a,r+1.9,s)),n.add(u(new x(.42,.42,.42),l.glowPad,a,r+3.85,s))}const e=16,t=48,i=I(e,t);return n.add(u(new x(5.2,.16,4),l.concrete,e,i+.08,t)),n.add(u(new x(2.4,1.5,1.6),l.habDark,e,i+.95,t)),n.add(T("APPROACH","#1a100c","#f0c089",3,.42,e,i+2.25,t+2.1)),n.add(T("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function Mm(){const n=new G;n.name="isru-process-water";const e=-58,t=-36,i=I(e,t);return n.add(u(new x(11.2,.2,7.4),l.concrete,e,i+.1,t)),n.add(u(new O(1.7,1.7,8.4,16),l.pipe,e-2.2,i+2,t,0,0,Math.PI/2)),n.add(u(new O(1.7,1.7,8.4,16),l.pipe,e+2,i+2,t,0,0,Math.PI/2)),n.add(u(new x(2.4,1.6,1.8),l.habDark,e,i+1,t+2.4)),n.add(T("PROCESS","#1a2830","#d6e6ef",3.2,.5,e,i+4.55,t+3.8)),n.add(T("H2O","#1a2830","#d6b48a",2,.42,e,i+4,t+3.8)),ce(n,[[-58,-142],[-58,-90],[-58,-36]],l.pipe,.11),ce(n,[[-58,-36],[-64,-26],[-68,-16]],l.pipe,.1),ce(n,[[-58,-36],[-50,-16],[-50,4]],l.pipe,.1),n}function wm(){const n=new G;n.name="methalox-berm";const e=u(new Ne(9.2,1.7,8,24,Math.PI*1.2),l.rust,50,I(50,4)-.15,4,Math.PI/2,1.6,0);e.scale.set(1,.45,1),n.add(e);for(const[s,r]of[[54,12],[56,4],[54,-4]]){const o=u(new mt(2.2,0),l.rust,s,I(s,r)+.9,r);o.scale.set(1.2,.55,1.05),n.add(o)}const[t,i,a]=Ft(50,4,2.2);return n.add(T("FARM BERM","#1a100c","#f0c089",3.4,.55,t,i+1.1,a)),n.add(T("METHALOX","#1a100c","#d6b48a",3.2,.42,t,i+.5,a)),n}function ym(){const n=new G;n.name="ice-mine-berm";const e=u(new Ne(8.4,1.6,8,24,Math.PI*1.15),l.rust,-40,I(-40,-168)-.15,-168,Math.PI/2,.4,0);e.scale.set(1,.44,1),n.add(e);for(const[s,r]of[[-34,-162],[-32,-170],[-38,-176]]){const o=u(new mt(2.1,0),l.rust,s,I(s,r)+.85,r);o.scale.set(1.15,.55,1),n.add(o)}const[t,i,a]=Ft(-40,-168,2.2);return n.add(T("MINE BERM","#1a2830","#d6e6ef",3.4,.55,t,i+1.1,a)),n.add(T("ICE 1","#1a2830","#d6b48a",2.2,.42,t,i+.5,a)),n}function Sm(){const n=new G;n.name="tool-crib";const e=82,t=-90,i=I(e,t);n.add(u(new x(9.6,.2,7.2),l.concrete,e,i+.1,t)),n.add(u(new x(7.2,2.6,3.4),l.habDark,e,i+1.5,t)),n.add(u(new x(7.4,.12,3.6),l.steel,e,i+2.85,t));for(let a=-2;a<=2;a++)n.add(u(new x(.9,1.6,.55),l.steelDark,e+a*1.15,i+1.15,t+1.35));return Ee(n,77.8,-87.4,.15,.85),Ee(n,86.2,-92.4,-.1,.8),n.add(T("TOOL","#1a100c","#f0c089",2.2,.5,e,i+3.85,t+3.7)),n.add(T("CRIB","#1a100c","#d6b48a",2,.42,e,i+3.3,t+3.7)),n}function bm(){const n=new G;n.name="comms-battery";const e=4,t=-148,i=I(e,t);n.add(u(new x(9.6,.2,7.2),l.concrete,e,i+.1,t));for(let a=0;a<4;a++)n.add(u(new x(1.7,1.9,3.6),l.battery,e-3.2+a*2.1,i+1.15,t)),n.add(u(new x(1.55,.08,3.4),l.steel,e-3.2+a*2.1,i+2.15,t));return n.add(T("COMMS","#111111","#f4e6c8",2.6,.5,e,i+3.15,t+3.7)),n.add(T("NIGHT","#111111","#d6b48a",2.2,.42,e,i+2.6,t+3.7)),n}function Em(){const n=new G;n.name="solar-combiner-3";const e=148,t=-40,i=I(e,t);n.add(u(new x(9.6,.2,7.2),l.concrete,e,i+.1,t)),n.add(u(new x(3.6,2.4,2.8),l.habDark,e-2,i+1.4,t)),n.add(u(new x(3.2,2,2.4),l.steelDark,e+2.2,i+1.2,t));for(let a=0;a<3;a++)n.add(u(new x(.7,1.5,1.8),l.battery,e+1.2+a*.85,i+1,t));return n.add(T("COMBINER","#111111","#f4e6c8",3.4,.5,e,i+3.55,t+3.7)),n.add(T("FIELD 3","#111111","#d6b48a",2.6,.42,e,i+3,t+3.7)),ce(n,[[135,-40],[142,-40],[148,-40]],l.cable,.1),ce(n,[[148,-40],[124,-30],[100,-22]],l.cable,.09),n}function Tm(){const n=new G;n.name="solar-combiner-2";const e=124,t=-70,i=I(e,t);n.add(u(new x(9.6,.2,7.2),l.concrete,e,i+.1,t)),n.add(u(new x(3.6,2.4,2.8),l.habDark,e-2,i+1.4,t)),n.add(u(new x(3.2,2,2.4),l.steelDark,e+2.2,i+1.2,t));for(let a=0;a<3;a++)n.add(u(new x(.7,1.5,1.8),l.battery,e+1.2+a*.85,i+1,t));return n.add(T("COMBINER","#111111","#f4e6c8",3.4,.5,e,i+3.55,t+3.7)),n.add(T("FIELD 2","#111111","#d6b48a",2.6,.42,e,i+3,t+3.7)),ce(n,[[112,-83],[118,-76],[124,-70]],l.cable,.1),ce(n,[[124,-70],[136,-54],[148,-40]],l.cable,.09),n}function Am(){const n=new G;n.name="solar-combiner-1";const e=96,t=-44,i=I(e,t);n.add(u(new x(9.6,.2,7.2),l.concrete,e,i+.1,t)),n.add(u(new x(3.6,2.4,2.8),l.habDark,e-2,i+1.4,t)),n.add(u(new x(3.2,2,2.4),l.steelDark,e+2.2,i+1.2,t));for(let a=0;a<3;a++)n.add(u(new x(.7,1.5,1.8),l.battery,e+1.2+a*.85,i+1,t));return n.add(T("COMBINER","#111111","#f4e6c8",3.4,.5,e,i+3.55,t+3.7)),n.add(T("FARM 1","#111111","#d6b48a",2.4,.42,e,i+3,t+3.7)),ce(n,[[82,-44],[90,-44],[96,-44]],l.cable,.1),ce(n,[[96,-44],[98,-32],[100,-22]],l.cable,.09),n}function Rm(){const n=new G;n.name="sabatier-condenser";const e=-84,t=8,i=I(e,t);return n.add(u(new x(9.6,.2,7.2),l.concrete,e,i+.1,t)),n.add(u(new x(3.8,2.4,2.8),l.habDark,e-2,i+1.4,t)),n.add(u(new O(1.35,1.35,4.6,14),l.pipe,e+2.4,i+2.5,t)),n.add(u(new Ne(1.65,.1,6,14),l.steel,e+2.4,i+4.1,t,Math.PI/2,0,0)),n.add(u(new O(.7,.7,2.4,12),l.steelDark,e+2.4,i+1.4,t+2.1)),n.add(T("KNOCKOUT","#1a2830","#d6e6ef",3.4,.45,e,i+4.15,t+3.7)),n.add(T("H2O","#1a2830","#d6b48a",1.8,.4,e,i+3.6,t+3.7)),ce(n,[[-68,-16],[-76,-4],[-84,8]],l.pipe,.11),ce(n,[[-84,8],[-80,14],[-80,20]],l.tankCh4,.09),n}function Cm(){const n=new G;n.name="hab-dust-lock";const e=16,t=-86,i=I(e,t);return n.add(u(new x(8.4,.2,6.4),l.concrete,e,i+.1,t)),n.add(u(new x(6.2,3.4,4.4),l.habDark,e,i+1.9,t)),n.add(u(new x(6.4,.16,4.6),l.steel,e,i+3.65,t)),n.add(u(new x(1.8,2.4,.22),l.steelDark,e,i+1.5,t+2.3)),n.add(u(new x(1.8,2.4,.22),l.steelDark,e,i+1.5,t-2.3)),n.add(nn(e+2.6,t+.2,.1)),n.add(T("DUST LOCK","#1a100c","#f0c089",3.4,.45,e,i+4.35,t+2.4)),n.add(T("HAB EVA","#1a100c","#d6b48a",2.6,.4,e,i+3.85,t+2.4)),n}function Pm(){const n=new G;n.name="field3-night";const e=135,t=-22,i=I(e,t);n.add(u(new x(12,.2,7.2),l.concrete,e,i+.1,t));for(let a=0;a<5;a++)n.add(u(new x(1.7,2,4.2),l.battery,e-4+a*2,i+1.2,t));return n.add(T("NIGHT","#111111","#f4e6c8",2.2,.5,e,i+2.7,t+3.6)),n.add(T("FIELD 3","#111111","#d6b48a",2.4,.42,e,i+2.15,t+3.6)),ce(n,[[148,-40],[142,-30],[135,-22]],l.cable,.1),ce(n,[[135,-22],[118,-22],[100,-22]],l.cable,.09),n}function Dm(){const n=new G;n.name="field2-night";const e=100,t=-70,i=I(e,t);n.add(u(new x(12,.2,7.2),l.concrete,e,i+.1,t));for(let a=0;a<5;a++)n.add(u(new x(1.7,2,4.2),l.battery,e-4+a*2,i+1.2,t));return n.add(T("NIGHT","#111111","#f4e6c8",2.2,.5,e,i+2.7,t+3.6)),n.add(T("FIELD 2","#111111","#d6b48a",2.4,.42,e,i+2.15,t+3.6)),ce(n,[[124,-70],[112,-70],[100,-70]],l.cable,.1),ce(n,[[100,-70],[100,-46],[100,-22]],l.cable,.09),n}function Im(){const n=new G;n.name="farm1-night";const e=82,t=-28,i=I(e,t);n.add(u(new x(12,.2,7.2),l.concrete,e,i+.1,t));for(let a=0;a<5;a++)n.add(u(new x(1.7,2,4.2),l.battery,e-4+a*2,i+1.2,t));return n.add(T("NIGHT","#111111","#f4e6c8",2.2,.5,e,i+2.7,t+3.6)),n.add(T("FARM 1","#111111","#d6b48a",2.4,.42,e,i+2.15,t+3.6)),ce(n,[[82,-44],[82,-36],[82,-28]],l.cable,.1),ce(n,[[82,-28],[74,-18],[68,-10]],l.cable,.09),n}function Lm(){const n=new G;n.name="co2-capture-1";const e=-68,t=2,i=I(e,t);return n.add(u(new x(11.6,.2,7.4),l.concrete,e,i+.1,t)),n.add(u(new O(.55,.55,6.8,10),l.steel,e-2.4,i+3.6,t)),n.add(u(new O(2.1,.65,2.4,14),l.steelDark,e-2.4,i+7.8,t)),n.add(u(new Ne(1.85,.1,6,16),l.steel,e-2.4,i+9.1,t,Math.PI/2,0,0)),n.add(u(new x(3.2,2.2,2.4),l.habDark,e+2.2,i+1.3,t)),n.add(T("CO2","#1a100c","#f0c089",2.2,.55,e-2.4,i+4.8,t+1.4)),n.add(T("INTAKE 1","#1a100c","#d6b48a",3,.45,e+2.2,i+2.7,t+1.35)),ce(n,[[-68,2],[-68,-8],[-68,-16]],l.pipe,.12),n}function Um(){const n=new G;n.name="field3-dust-fence";const e=122,t=-40,i=I(e,t);for(let a=0;a<8;a++){const s=t-10.5+a*3;n.add(u(new x(.18,3.4,.18),l.steelDark,e,i+1.8,s)),a<7&&n.add(u(new x(.06,2.6,2.7),l.lattice,e,i+1.7,s+1.5))}return n.add(T("DUST","#1a100c","#f0c089",2.4,.45,e-1.4,i+3.5,t)),n.add(T("FIELD 3","#1a100c","#d6b48a",2.6,.4,e-1.4,i+3,t)),n}function zm(){const n=new G;n.name="field2-dust-fence";const e=98,t=-83,i=I(e,t);for(let a=0;a<8;a++){const s=t-10.5+a*3;n.add(u(new x(.18,3.4,.18),l.steelDark,e,i+1.8,s)),a<7&&n.add(u(new x(.06,2.6,2.7),l.lattice,e,i+1.7,s+1.5))}return n.add(T("DUST","#1a100c","#f0c089",2.4,.45,e-1.4,i+3.5,t)),n.add(T("FIELD 2","#1a100c","#d6b48a",2.6,.4,e-1.4,i+3,t)),n}function Nm(){const n=new G;n.name="farm1-dust-fence";const e=70,t=-44,i=I(e,t);for(let a=0;a<8;a++){const s=t-10.5+a*3;n.add(u(new x(.18,3.4,.18),l.steelDark,e,i+1.8,s)),a<7&&n.add(u(new x(.06,2.6,2.7),l.lattice,e,i+1.7,s+1.5))}return n.add(T("DUST","#1a100c","#f0c089",2.4,.45,e-1.4,i+3.5,t)),n.add(T("FARM 1","#1a100c","#d6b48a",2.4,.4,e-1.4,i+3,t)),n}function Om(){const n=new G;n.name="ice-crush-cover";const e=-102,t=-158,i=I(e,t);n.add(u(new x(10.4,.18,8.2),l.concrete,e,i+.09,t));for(const[s,r]of[[-4.2,-3.2],[4.2,-3.2],[-4.2,3.2],[4.2,3.2]])n.add(u(new O(.16,.2,4.2,8),l.steelDark,e+s,i+2.2,t+r));n.add(u(new x(10.8,.14,8.6),l.steel,e,i+4.4,t)),n.add(u(new x(3.2,1.8,2.4),l.steelDark,e,i+1.1,t));const a=u(new mt(1.6,0),l.ice,e+2.8,i+.85,t+1.6);return a.scale.set(1.2,.55,1.05),n.add(a),n.add(T("CRUSH","#1a2830","#d6e6ef",2.6,.45,e,i+4.95,t+4.3)),n.add(T("COVER","#1a2830","#d6b48a",2.4,.4,e,i+4.45,t+4.3)),n}function Fm(){const n=new G;n.name="batteries-4";const e=-18,t=-78,i=I(e,t);n.add(u(new x(11.6,.2,6.4),l.concrete,e,i+.1,t));for(let a=0;a<5;a++)n.add(u(new x(1.7,1.95,3.8),l.battery,e-4+a*2,i+1.15,t)),n.add(u(new x(1.55,.08,3.6),l.steel,e-4+a*2,i+2.18,t));return n.add(T("NIGHT","#111111","#f4e6c8",2.4,.5,e,i+2.7,t+3.3)),n.add(T("HAB 4","#111111","#d6b48a",2.2,.42,e,i+2.15,t+3.3)),n}function Bm(){const n=new G;n.name="ice-mine-2-berm";const e=u(new Ne(8.4,1.6,8,24,Math.PI*1.15),l.rust,-64,I(-64,-184)-.15,-184,Math.PI/2,.55,0);e.scale.set(1,.44,1),n.add(e);for(const[s,r]of[[-58,-178],[-56,-186],[-62,-192]]){const o=u(new mt(2.1,0),l.rust,s,I(s,r)+.85,r);o.scale.set(1.15,.55,1),n.add(o)}const[t,i,a]=Ft(-64,-184,2.2);return n.add(T("MINE BERM","#1a2830","#d6e6ef",3.4,.55,t,i+1.1,a)),n.add(T("ICE 2","#1a2830","#d6b48a",2.2,.42,t,i+.5,a)),n}function km(){const n=new G;n.name="potable-uv";const e=32,t=-152,i=I(e,t);return n.add(u(new x(9.6,.2,7.2),l.concrete,e,i+.1,t)),n.add(u(new x(4.2,2.6,3.4),l.habDark,e-1.6,i+1.5,t)),n.add(u(new O(1.05,1.05,3.4,14),l.pipe,e+2.6,i+1.9,t)),n.add(u(new x(1.6,1.4,1.2),l.steel,e+2.6,i+3.9,t)),n.add(T("UV","#1a2830","#d6e6ef",1.6,.5,e,i+4.15,t+3.7)),n.add(T("POLISH","#1a2830","#d6b48a",2.6,.42,e,i+3.6,t+3.7)),ce(n,[[18,-152],[24,-152],[32,-152]],l.pipe,.1),n}function Hm(){const n=new G;n.name="isru-radiators-2";const e=-96,t=16,i=I(e,t);n.add(u(new x(16.4,.18,6.2),l.concrete,e,i+.08,t));for(let a=0;a<5;a++){const s=e-6+a*3;n.add(u(new x(.16,3.6,.16),l.steelDark,s,i+1.9,t-1.8)),n.add(u(new x(.16,3.6,.16),l.steelDark,s,i+1.9,t+1.8)),n.add(u(new x(2.4,3.2,.08),l.solar,s,i+2.4,t,-.15,0,0)),n.add(u(new x(2.5,3.3,.04),l.steel,s,i+2.4,t+.06,-.15,0,0))}return n.add(T("REJECT","#1a100c","#f0c089",2.8,.5,e,i+4.55,t+3.2)),n.add(T("TRAIN 2","#1a100c","#d6b48a",2.8,.42,e,i+4,t+3.2)),ce(n,[[-96,-6],[-96,4],[-96,16]],l.pipe,.1),n}function Gm(){const n=new G;n.name="workshop-3";const e=82,t=-74,i=I(e,t);n.add(u(new x(16,.28,12),l.concrete,e,i+.1,t));const a=u(new O(5.4,5.4,14,16,1,!1,0,Math.PI),l.habDark,e-1.2,i+3.1,t);return a.rotation.z=Math.PI/2,n.add(a),n.add(u(new x(.2,3.8,5.8),l.steelDark,e-8.1,i+2,t)),n.add(u(new x(.28,8.4,.28),l.lattice,e+6.4,i+4.3,t-3.6)),n.add(u(new x(7.2,.2,.2),l.lattice,e+3,i+8.5,t-3.6)),n.add(u(new x(1.5,1.1,1.5),l.crate,e+2.2,i+8,t-3.4)),Ee(n,89.2,-69.4,.2),Ee(n,90.4,-71.6,-.3,1.05),Ee(n,74.6,-68.8,.15,.9),n.add(T("WORKSHOP","#1a100c","#f0c089",3.8,.75,e,i+5.4,t+.2)),n.add(T("BAY 3","#1a100c","#d6b48a",2.6,.5,e,i+4.7,t+.2)),n}function Vm(){const n=new G;n.name="ice-melt-2";const e=-78,t=-156,i=I(e,t);n.add(u(new x(9.6,.2,7.2),l.concrete,e,i+.1,t)),n.add(u(new x(3.6,2.8,3.2),l.habDark,e-1.8,i+1.6,t)),n.add(u(new O(1.45,1.45,4.2,14),l.pipe,e+2.2,i+2.3,t)),n.add(u(new O(.55,.85,1.6,10),l.steelDark,e+2.2,i+4.9,t));const a=u(new mt(1.8,0),l.ice,e-3.4,i+.9,t+2.1);return a.scale.set(1.15,.55,1),n.add(a),n.add(T("MELT","#1a2830","#d6e6ef",2.4,.5,e,i+4.4,t+3.7)),n.add(T("MINE 2","#1a2830","#d6b48a",2.6,.42,e,i+3.85,t+3.7)),ce(n,[[-78,-172],[-78,-164],[-78,-156]],l.pipe,.11),ce(n,[[-78,-156],[-90,-90],[-96,-26]],l.pipe,.1),n}function Wm(){const n=new G;n.name="sabatier-condenser-2";const e=-110,t=8,i=I(e,t);return n.add(u(new x(9.6,.2,7.2),l.concrete,e,i+.1,t)),n.add(u(new x(3.8,2.4,2.8),l.habDark,e-2,i+1.4,t)),n.add(u(new O(1.35,1.35,4.6,14),l.pipe,e+2.4,i+2.5,t)),n.add(u(new Ne(1.65,.1,6,14),l.steel,e+2.4,i+4.1,t,Math.PI/2,0,0)),n.add(u(new O(.7,.7,2.4,12),l.steelDark,e+2.4,i+1.4,t+2.1)),n.add(T("KNOCKOUT","#1a2830","#d6e6ef",3.4,.45,e,i+4.15,t+3.7)),n.add(T("TRAIN 2","#1a2830","#d6b48a",2.8,.4,e,i+3.6,t+3.7)),ce(n,[[-96,-16],[-104,-4],[-110,8]],l.pipe,.11),n}function Xm(){const n=new G;n.name="ch4-chiller-2";const e=-110,t=20,i=I(e,t);return n.add(u(new x(9.6,.2,7.2),l.concrete,e,i+.1,t)),n.add(u(new x(4.2,2.6,3.2),l.habDark,e-1.6,i+1.5,t)),n.add(u(new O(1.25,1.25,5,14),l.tankCh4,e+2.6,i+2.7,t)),n.add(u(new Ne(1.55,.1,6,14),l.steel,e+2.6,i+4.4,t,Math.PI/2,0,0)),n.add(T("CH4","#6a2208","#f4e6c8",2,.45,e,i+4.15,t+3.7)),n.add(T("TRAIN 2","#1a100c","#d6b48a",2.8,.4,e,i+3.6,t+3.7)),ce(n,[[-110,8],[-110,14],[-110,20]],l.tankCh4,.11),n}function qm(){const n=new G;n.name="o2-chiller-2";const e=-110,t=32,i=I(e,t);return n.add(u(new x(9.6,.2,7.2),l.concrete,e,i+.1,t)),n.add(u(new x(4.2,2.6,3.2),l.habDark,e-1.6,i+1.5,t)),n.add(u(new O(1.25,1.25,5,14),l.tankO2,e+2.6,i+2.7,t)),n.add(u(new Ne(1.55,.1,6,14),l.steel,e+2.6,i+4.4,t,Math.PI/2,0,0)),n.add(T("O2","#2a3340","#e8eef4",1.8,.45,e,i+4.15,t+3.7)),n.add(T("TRAIN 2","#1a100c","#d6b48a",2.8,.4,e,i+3.6,t+3.7)),ce(n,[[-110,20],[-110,26],[-110,32]],l.steel,.11),n}function Ym(){const n=new G;n.name="isru-electrolysis-2";const e=-122,t=8,i=I(e,t);n.add(u(new x(11.6,.2,7.4),l.concrete,e,i+.1,t)),n.add(u(new x(3.4,3.6,2.6),l.habDark,e-2.6,i+2,t)),n.add(u(new x(3.4,3.6,2.6),l.steelDark,e+1.2,i+2,t));for(let a=0;a<4;a++)n.add(u(new x(.18,3.1,2.2),l.steel,e-3.8+a*.7,i+2,t));return n.add(u(new O(1.15,1.15,5.2,14),l.steel,e+4.2,i+2.8,t+1.4)),n.add(u(new O(.95,.95,4.4,14),l.tankO2,e+4.2,i+2.4,t-1.6)),n.add(T("ELECTRO","#1a100c","#f0c089",3.2,.5,e,i+4.55,t+3.7)),n.add(T("TRAIN 2","#1a100c","#d6b48a",2.8,.42,e,i+4,t+3.7)),ce(n,[[-110,8],[-116,8],[-122,8]],l.pipe,.11),n}function Km(){const n=new G;n.name="h2-recycle-2";const e=-122,t=20,i=I(e,t);return n.add(u(new x(9.6,.2,7.2),l.concrete,e,i+.1,t)),n.add(u(new O(1.55,1.55,6.4,16),l.steel,e-1.8,i+3.4,t)),n.add(u(new O(1.55,1.55,6.4,16),l.steel,e+1.8,i+3.4,t)),n.add(u(new x(2.2,1.4,1.6),l.habDark,e,i+.9,t+2.2)),n.add(T("H2","#1a100c","#f0c089",1.8,.5,e,i+5.15,t+3.7)),n.add(T("TRAIN 2","#1a100c","#d6b48a",2.8,.42,e,i+4.55,t+3.7)),ce(n,[[-122,8],[-122,14],[-122,20]],l.steel,.11),n}function Jm(){const n=new G;n.name="eclss-2";const e=-8,t=-98,i=I(e,t);return n.add(u(new x(11.2,.22,7.2),l.concrete,e,i+.1,t)),n.add(u(new x(4.8,2.6,3.4),l.habDark,e-2.4,i+1.5,t)),n.add(T("ECLSS","#1a100c","#f0c089",3.2,.6,e-2.4,i+3.05,t+1.85)),n.add(T("SCRUB 2","#1a100c","#d6b48a",3,.45,e-2.4,i+2.45,t+1.85)),n.add(u(new O(.85,.85,3.4,12),l.steelDark,e+1.6,i+1.9,t-1.4)),n.add(u(new O(.85,.85,3.4,12),l.steelDark,e+3.4,i+1.9,t-1.4)),n.add(T("AMINE","#1a100c","#d6b48a",2.2,.4,e+2.5,i+3.8,t-1.4)),n.add(u(new O(.7,.7,2.6,12),l.tankO2,e+1.6,i+1.5,t+1.8)),n.add(u(new O(.7,.7,2.6,12),l.tankO2,e+3.4,i+1.5,t+1.8)),n.add(T("O2","#2a3340","#e8eef4",1.4,.4,e+2.5,i+3.05,t+1.8)),ce(n,[[8,-98],[0,-98],[-8,-98]],l.pipe,.1),n}function Zm(){const n=new G;n.name="waste-recycle-2";const e=-22,t=-98,i=I(e,t);return n.add(u(new x(9.6,.2,7.2),l.concrete,e,i+.1,t)),n.add(u(new x(4.4,2.8,3.6),l.habDark,e-1.4,i+1.6,t)),n.add(u(new O(1.15,1.15,3.6,14),l.pipe,e+2.8,i+2,t)),n.add(u(new O(.85,.85,2.8,12),l.steelDark,e+2.8,i+1.6,t+2)),n.add(T("WASTE","#1a100c","#f0c089",2.6,.5,e,i+4.25,t+3.7)),n.add(T("RECOVERY 2","#1a100c","#d6b48a",3.6,.42,e,i+3.7,t+3.7)),ce(n,[[-8,-98],[-14,-98],[-22,-98]],l.pipe,.1),n}function $m(){const n=new G;n.name="o2-buffer-2";const e=8,t=-88,i=I(e,t);n.add(u(new x(10.2,.2,7.4),l.concrete,e,i+.1,t));for(let a=0;a<4;a++){const s=e-3.3+a*2.2;n.add(u(new O(.85,.85,3.6,12),l.tankO2,s,i+2,t))}return n.add(T("O2","#2a3340","#e8eef4",1.8,.5,e,i+4.15,t+3.7)),n.add(T("CREW 2","#2a3340","#d6b48a",2.6,.42,e,i+3.6,t+3.7)),ce(n,[[-8,-88],[0,-88],[8,-88]],l.tankO2,.1),n}function jm(){const n=new G;n.name="isru-process-water-2";const e=-78,t=-36,i=I(e,t);return n.add(u(new x(11.2,.2,7.4),l.concrete,e,i+.1,t)),n.add(u(new O(1.7,1.7,8.4,16),l.pipe,e-2.2,i+2,t,0,0,Math.PI/2)),n.add(u(new O(1.7,1.7,8.4,16),l.pipe,e+2,i+2,t,0,0,Math.PI/2)),n.add(u(new x(2.4,1.6,1.8),l.habDark,e,i+1,t+2.4)),n.add(T("PROCESS","#1a2830","#d6e6ef",3.2,.5,e,i+4.55,t+3.8)),n.add(T("TRAIN 2","#1a2830","#d6b48a",2.8,.42,e,i+4,t+3.8)),ce(n,[[-78,-156],[-78,-90],[-78,-36]],l.pipe,.11),ce(n,[[-78,-36],[-88,-26],[-96,-16]],l.pipe,.1),n}function Qm(){const n=new G;n.name="parts-rack";const e=96,t=-90,i=I(e,t);n.add(u(new x(9.6,.2,7.2),l.concrete,e,i+.1,t)),n.add(u(new x(8.4,2.8,.22),l.steelDark,e,i+1.6,t-2.4));for(let a=-3;a<=3;a++)n.add(u(new x(.16,2.6,1.8),l.steel,e+a*1.1,i+1.5,t-1.4));return Ee(n,92.2,-87.6,.15,.85),Ee(n,99.4,-88.2,-.2,1),n.add(T("PARTS","#1a100c","#f0c089",2.6,.5,e,i+3.35,t+3.5)),n.add(T("RACK","#1a100c","#d6b48a",2.2,.42,e,i+2.8,t+3.5)),n}function e2(){const n=new G;n.name="hab-power-trench";const e=-5,t=-78,i=I(e,t);return n.add(u(new x(7.6,.18,5.4),l.concrete,e,i+.08,t)),n.add(u(new x(3.2,1.8,2.4),l.habDark,e,i+1.1,t)),n.add(u(new x(1.4,.9,1.1),l.steelDark,e+2.4,i+.65,t+1.2)),n.add(T("HAB","#111111","#f4e6c8",1.8,.45,e,i+2.45,t+2.8)),n.add(T("TRENCH","#111111","#d6b48a",2.4,.38,e,i+1.95,t+2.8)),ce(n,[[8,-78],[-5,-78],[-18,-78]],l.cable,.12),n}function t2(){const n=new G;n.name="comms-inverter";const e=16,t=-148,i=I(e,t);n.add(u(new x(9.6,.2,7.2),l.concrete,e,i+.1,t)),n.add(u(new x(3.6,2.4,2.8),l.habDark,e-2,i+1.4,t)),n.add(u(new x(3.2,2,2.4),l.steelDark,e+2.2,i+1.2,t));for(let a=0;a<3;a++)n.add(u(new x(.7,1.5,1.8),l.battery,e+1.2+a*.85,i+1,t));return n.add(T("COMMS","#111111","#f4e6c8",2.6,.5,e,i+3.55,t+3.7)),n.add(T("INVERTER","#111111","#d6b48a",3.2,.42,e,i+3,t+3.7)),ce(n,[[4,-148],[10,-148],[16,-148]],l.cable,.1),ce(n,[[-8,-162],[4,-154],[16,-148]],l.cable,.09),n}function n2(){const n=new G;n.name="ice-weigh";const e=-90,t=-136,i=I(e,t);return n.add(u(new x(9.6,.2,7.2),l.concrete,e,i+.1,t)),n.add(u(new x(6.4,.28,3.6),l.steel,e,i+.28,t)),n.add(u(new x(2.2,2.4,1.8),l.habDark,e+3.2,i+1.4,t+2)),n.add(u(new x(.18,3.2,.18),l.steelDark,e-3.6,i+1.8,t-2.4)),n.add(u(new x(.18,3.2,.18),l.steelDark,e+3.6,i+1.8,t-2.4)),n.add(u(new x(7.4,.12,.12),l.steel,e,i+3.45,t-2.4)),n.add(T("WEIGH","#1a2830","#d6e6ef",2.6,.5,e,i+3.15,t+3.7)),n.add(T("ICE HAUL","#1a2830","#d6b48a",3,.42,e,i+2.6,t+3.7)),n}function i2(){const n=new G;n.name="hab-eva-locker";const e=16,t=-74,i=I(e,t);return n.add(u(new x(7.2,.16,5.4),l.concrete,e,i+.08,t)),n.add(u(new x(5.8,.16,2.4),l.steelDark,e,i+.18,t)),n.add(u(new x(.16,2.8,.16),l.steel,e-2.4,i+1.6,t-.7)),n.add(u(new x(.16,2.8,.16),l.steel,e+2.4,i+1.6,t-.7)),n.add(u(new x(5,.12,.12),l.steel,e,i+3,t-.7)),n.add(nn(e-1.5,t,.2)),n.add(nn(e,t+.15,-.1)),n.add(nn(e+1.5,t,.15)),n.add(T("SUITS","#1a100c","#f0c089",2.4,.45,e,i+3.45,t+2.4)),n.add(T("HAB EVA","#1a100c","#d6b48a",2.8,.4,e,i+2.95,t+2.4)),n}function a2(){const n=new G;n.name="comms-berm";const e=u(new Ne(8.4,1.6,8,24,Math.PI*1.15),l.rust,-48,I(-48,-138)-.15,-138,Math.PI/2,.7,0);e.scale.set(1,.44,1),n.add(e);for(const[s,r]of[[-42,-132],[-40,-140],[-46,-146]]){const o=u(new mt(2.1,0),l.rust,s,I(s,r)+.85,r);o.scale.set(1.15,.55,1),n.add(o)}const[t,i,a]=Ft(-48,-138,2.2);return n.add(T("DUST BERM","#1a2830","#d6e6ef",3.4,.55,t,i+1.1,a)),n.add(T("COMMS","#1a2830","#d6b48a",2.4,.42,t,i+.5,a)),n}function s2(){const n=new G;n.name="grow-water";const e=52,t=-126,i=I(e,t);return n.add(u(new x(11.2,.2,7.4),l.concrete,e,i+.1,t)),n.add(u(new O(1.7,1.7,8.4,16),l.pipe,e-2.2,i+2,t,0,0,Math.PI/2)),n.add(u(new O(1.7,1.7,8.4,16),l.pipe,e+2,i+2,t,0,0,Math.PI/2)),n.add(u(new x(2.4,1.6,1.8),l.habDark,e,i+1,t+2.4)),n.add(T("GROW","#1a2830","#d6e6ef",2.4,.5,e,i+4.55,t+3.8)),n.add(T("H2O","#1a2830","#d6b48a",2,.42,e,i+4,t+3.8)),ce(n,[[52,-112],[52,-118],[52,-126]],l.pipe,.11),ce(n,[[38,-126],[44,-126],[52,-126]],l.pipe,.1),n}function r2(){const n=new G;n.name="grow-nutrient";const e=70,t=-126,i=I(e,t);return n.add(u(new x(9.6,.2,7.2),l.concrete,e,i+.1,t)),n.add(u(new x(4.4,2.8,3.6),l.habDark,e-1.4,i+1.6,t)),n.add(u(new O(1.15,1.15,3.6,14),l.pipe,e+2.8,i+2,t)),n.add(u(new O(.85,.85,2.8,12),l.steelDark,e+2.8,i+1.6,t+2)),n.add(T("NUTRIENT","#1a100c","#f0c089",3.4,.5,e,i+4.25,t+3.7)),n.add(T("GROW","#1a100c","#d6b48a",2.2,.42,e,i+3.7,t+3.7)),ce(n,[[52,-126],[60,-126],[70,-126]],l.pipe,.1),ce(n,[[70,-112],[70,-118],[70,-126]],l.pipe,.09),n}function o2(){const n=new G;n.name="hab-street-lights";for(const[a,s]of[[0,-78],[0,-98],[0,-118]]){const r=I(a,s);n.add(u(new O(.12,.16,3.6,8),l.steelDark,a,r+1.9,s)),n.add(u(new x(.42,.42,.42),l.glowPad,a,r+3.85,s))}const e=0,t=-68,i=I(e,t);return n.add(u(new x(5.2,.16,4),l.concrete,e,i+.08,t)),n.add(u(new x(2.4,1.5,1.6),l.habDark,e,i+.95,t)),n.add(T("HAB","#1a100c","#f0c089",1.8,.42,e,i+2.25,t+2.1)),n.add(T("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function c2(){const n=new G;n.name="workshop-lights";for(const[a,s]of[[58,-80],[74,-80],[90,-80]]){const r=I(a,s);n.add(u(new O(.12,.16,3.6,8),l.steelDark,a,r+1.9,s)),n.add(u(new x(.42,.42,.42),l.glowPad,a,r+3.85,s))}const e=48,t=-70,i=I(e,t);return n.add(u(new x(5.2,.16,4),l.concrete,e,i+.08,t)),n.add(u(new x(2.4,1.5,1.6),l.habDark,e,i+.95,t)),n.add(T("SHOP","#1a100c","#f0c089",2,.42,e,i+2.25,t+2.1)),n.add(T("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function l2(){const n=new G;n.name="ice-mine-lights";for(const[a,s]of[[-58,-148],[-78,-148],[-90,-148]]){const r=I(a,s);n.add(u(new O(.12,.16,3.6,8),l.steelDark,a,r+1.9,s)),n.add(u(new x(.42,.42,.42),l.glowPad,a,r+3.85,s))}const e=-46,t=-148,i=I(e,t);return n.add(u(new x(5.2,.16,4),l.concrete,e,i+.08,t)),n.add(u(new x(2.4,1.5,1.6),l.habDark,e,i+.95,t)),n.add(T("ICE","#1a100c","#f0c089",1.8,.42,e,i+2.25,t+2.1)),n.add(T("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function d2(){const n=new G;n.name="isru-lights";for(const[a,s]of[[-44,12],[-62,16],[-80,16]]){const r=I(a,s);n.add(u(new O(.12,.16,3.6,8),l.steelDark,a,r+1.9,s)),n.add(u(new x(.42,.42,.42),l.glowPad,a,r+3.85,s))}const e=-38,t=16,i=I(e,t);return n.add(u(new x(5.2,.16,4),l.concrete,e,i+.08,t)),n.add(u(new x(2.4,1.5,1.6),l.habDark,e,i+.95,t)),n.add(T("ISRU","#1a100c","#f0c089",2,.42,e,i+2.25,t+2.1)),n.add(T("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function h2(){const n=new G;n.name="grow-lights";for(const[a,s]of[[22,-104],[38,-118],[52,-104]]){const r=I(a,s);n.add(u(new O(.12,.16,3.6,8),l.steelDark,a,r+1.9,s)),n.add(u(new x(.42,.42,.42),l.glowPad,a,r+3.85,s))}const e=38,t=-104,i=I(e,t);return n.add(u(new x(5.2,.16,4),l.concrete,e,i+.08,t)),n.add(u(new x(2.4,1.5,1.6),l.habDark,e,i+.95,t)),n.add(T("GROW","#1a100c","#f0c089",2,.42,e,i+2.25,t+2.1)),n.add(T("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function u2(){const n=new G;n.name="solar4-lights";for(const[a,s]of[[158,-48],[148,-48],[172,-62]]){const r=I(a,s);n.add(u(new O(.12,.16,3.6,8),l.steelDark,a,r+1.9,s)),n.add(u(new x(.42,.42,.42),l.glowPad,a,r+3.85,s))}const e=172,t=-48,i=I(e,t);return n.add(u(new x(5.2,.16,4),l.concrete,e,i+.08,t)),n.add(u(new x(2.4,1.5,1.6),l.habDark,e,i+.95,t)),n.add(T("FIELD 4","#1a100c","#f0c089",2.6,.42,e,i+2.25,t+2.1)),n.add(T("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function f2(){const n=new G;n.name="pad-floods";for(const[a,s]of[[-8,48],[-8,32],[-8,16]]){const r=I(a,s);n.add(u(new O(.12,.16,3.6,8),l.steelDark,a,r+1.9,s)),n.add(u(new x(.42,.42,.42),l.glowPad,a,r+3.85,s))}const e=-16,t=36,i=I(e,t);return n.add(u(new x(5.2,.16,4),l.concrete,e,i+.08,t)),n.add(u(new x(2.4,1.5,1.6),l.habDark,e,i+.95,t)),n.add(T("PAD","#1a100c","#f0c089",1.8,.42,e,i+2.25,t+2.1)),n.add(T("FLOOD","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function p2(){const n=new G;n.name="comms-lights";for(const[a,s]of[[-8,-138],[4,-148],[16,-138]]){const r=I(a,s);n.add(u(new O(.12,.16,3.6,8),l.steelDark,a,r+1.9,s)),n.add(u(new x(.42,.42,.42),l.glowPad,a,r+3.85,s))}const e=4,t=-138,i=I(e,t);return n.add(u(new x(5.2,.16,4),l.concrete,e,i+.08,t)),n.add(u(new x(2.4,1.5,1.6),l.habDark,e,i+.95,t)),n.add(T("COMMS","#1a100c","#f0c089",2.4,.42,e,i+2.25,t+2.1)),n.add(T("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function m2(){const n=new G;n.name="methalox-lights";for(const[a,s]of[[62,16],[68,-6],[58,16]]){const r=I(a,s);n.add(u(new O(.12,.16,3.6,8),l.steelDark,a,r+1.9,s)),n.add(u(new x(.42,.42,.42),l.glowPad,a,r+3.85,s))}const e=68,t=6,i=I(e,t);return n.add(u(new x(5.2,.16,4),l.concrete,e,i+.08,t)),n.add(u(new x(2.4,1.5,1.6),l.habDark,e,i+.95,t)),n.add(T("MX","#1a100c","#f0c089",1.6,.42,e,i+2.25,t+2.1)),n.add(T("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function g2(){const n=new G;n.name="sinter-kiln";const e=66,t=-104,i=I(e,t);return n.add(u(new x(11.2,.2,7.4),l.concrete,e,i+.1,t)),n.add(u(new O(1.55,1.55,8.6,16),l.steelDark,e,i+2.15,t,0,0,Math.PI/2)),n.add(u(new O(.42,.55,3.2,10),l.steel,e+2.4,i+4.4,t)),n.add(u(new x(2.2,1.8,2),l.habDark,e-4.4,i+1.1,t+1.8)),n.add(u(new x(1.6,1.4,1.6),l.rust,e+4.2,i+.9,t-1.6)),n.add(T("SINTER","#1a100c","#f0c089",2.8,.5,e,i+4.85,t+3.8)),n.add(T("KILN","#1a100c","#d6b48a",2,.42,e,i+4.3,t+3.8)),n}function x2(){const n=new G;n.name="sinter-bricks";const e=80,t=-104,i=I(e,t);n.add(u(new x(7.6,.16,5.4),l.concrete,e,i+.08,t));for(let a=0;a<3;a++)for(let s=0;s<4;s++){const r=e-2.4+s*1.55,o=t-1.2+a*1.2;n.add(u(new x(1.35,.42,.95),l.rust,r,i+.38,o)),n.add(u(new x(1.35,.42,.95),l.habDark,r,i+.82,o))}return n.add(T("SINTER","#1a100c","#f0c089",2.6,.42,e,i+1.85,t+2.8)),n.add(T("BRICK","#1a100c","#d6b48a",2.2,.36,e,i+1.4,t+2.8)),n}function _2(){const n=new G;n.name="sinter-roller";const e=18,t=136,i=I(e,t);return n.add(u(new x(8.8,.16,5.2),l.concrete,e,i+.08,t)),n.add(u(new x(3.6,1.6,2.2),l.habDark,e-.6,i+1.15,t)),n.add(u(new O(1.15,1.15,2.6,14),l.steelDark,e+2.6,i+1.2,t,0,0,Math.PI/2)),n.add(u(new O(.55,.55,2.2,10),l.steel,e-2.6,i+.7,t,0,0,Math.PI/2)),n.add(T("SINTER","#1a100c","#f0c089",2.6,.42,e,i+2.55,t+2.7)),n.add(T("ROLLER","#1a100c","#d6b48a",2.4,.36,e,i+2.1,t+2.7)),n}function v2(){const n=new G;n.name="hab-blower";const e=22,t=-98,i=I(e,t);return n.add(u(new x(7.2,.18,5.2),l.concrete,e,i+.09,t)),n.add(u(new x(2.6,1.7,2),l.habDark,e-1.4,i+1.05,t)),n.add(u(new O(1.05,1.05,2.4,14),l.steelDark,e+1.8,i+1.35,t,0,0,Math.PI/2)),n.add(u(new O(.28,.28,2.8,8),l.pipe,e+1.8,i+2.55,t)),n.add(T("SPARE","#1a100c","#f0c089",2.2,.42,e,i+2.7,t+2.6)),n.add(T("BLOWER","#1a100c","#d6b48a",2.6,.36,e,i+2.25,t+2.6)),n}function M2(){const n=new G;n.name="solar4-inverter";const e=172,t=-62,i=I(e,t);n.add(u(new x(9.6,.2,7.2),l.concrete,e,i+.1,t)),n.add(u(new x(3.6,2.4,2.8),l.habDark,e-2,i+1.4,t)),n.add(u(new x(3.2,2,2.4),l.steelDark,e+2.2,i+1.2,t));for(let a=0;a<3;a++)n.add(u(new x(.7,1.5,1.8),l.battery,e+1.2+a*.85,i+1,t));return n.add(T("FIELD 4","#111111","#f4e6c8",2.8,.5,e,i+3.55,t+3.7)),n.add(T("INVERTER","#111111","#d6b48a",3.2,.42,e,i+3,t+3.7)),n}function w2(){const n=new G;n.name="ice-drill-2";const e=-92,t=-184,i=I(e,t);return n.add(u(new x(9.6,.2,7.2),l.concrete,e,i+.1,t)),n.add(u(new x(3.4,1.8,2.4),l.habDark,e-2.2,i+1.1,t)),n.add(u(new O(.28,.42,6.4,10),l.steel,e+2.2,i+3.4,t)),n.add(u(new ki(.55,1.4,8),l.soot,e+2.2,i+.85,t)),n.add(u(new x(1.6,1.2,1.4),l.steelDark,e+2.2,i+6.5,t)),n.add(T("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+2.55,t+3.7)),n.add(T("DRILL","#1a2830","#d6b48a",2.2,.36,e,i+2.1,t+3.7)),n}function y2(){const n=new G;n.name="hab-n2";const e=-32,t=-88,i=I(e,t);n.add(u(new x(10.2,.2,7.4),l.concrete,e,i+.1,t));for(let a=0;a<4;a++){const s=e-3.3+a*2.2;n.add(u(new O(.85,.85,3.6,12),l.steel,s,i+2,t))}return n.add(T("N2","#1a2830","#d6e6ef",1.8,.5,e,i+4.15,t+3.7)),n.add(T("SPARE","#1a2830","#d6b48a",2.2,.42,e,i+3.6,t+3.7)),ce(n,[[-32,-88],[-18,-88],[-8,-88]],l.pipe,.1),n}function S2(){const n=new G;n.name="workshop-welder";const e=96,t=-104,i=I(e,t);return n.add(u(new x(9.6,.2,7.2),l.concrete,e,i+.1,t)),n.add(u(new x(3.4,2.2,2.6),l.habDark,e-2.2,i+1.3,t)),n.add(u(new x(.35,2.8,.35),l.steel,e+2,i+1.6,t)),n.add(u(new x(2.2,.28,.28),l.steel,e+3,i+2.9,t)),n.add(u(new x(1.8,1.2,1.6),l.steelDark,e+2.4,i+.8,t+1.6)),n.add(T("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.15,t+3.7)),n.add(T("WELDER","#1a100c","#d6b48a",2.6,.36,e,i+2.7,t+3.7)),n}function b2(){const n=new G;n.name="ch4-hose";const e=-28,t=-8,i=I(e,t);return n.add(u(new x(7.6,.18,5.4),l.concrete,e,i+.09,t)),n.add(u(new x(2.4,1.6,2),l.habDark,e-1.6,i+1,t)),n.add(u(new Ne(1.05,.22,8,16),l.tankCh4,e+1.8,i+1.35,t,Math.PI/2,0,0)),n.add(u(new Ne(.72,.16,8,14),l.tankCh4,e+1.8,i+1.35,t,Math.PI/2,0,0)),n.add(T("CH4","#6a2208","#f4e6c8",1.8,.42,e,i+2.55,t+2.8)),n.add(T("HOSE","#6a2208","#d6b48a",2,.36,e,i+2.1,t+2.8)),n}function E2(){const n=new G;n.name="o2-hose";const e=-28,t=6,i=I(e,t);return n.add(u(new x(7.6,.18,5.4),l.concrete,e,i+.09,t)),n.add(u(new x(2.4,1.6,2),l.habDark,e-1.6,i+1,t)),n.add(u(new Ne(1.05,.22,8,16),l.tankO2,e+1.8,i+1.35,t,Math.PI/2,0,0)),n.add(u(new Ne(.72,.16,8,14),l.steel,e+1.8,i+1.35,t,Math.PI/2,0,0)),n.add(T("O2","#2a3340","#e8eef4",1.6,.42,e,i+2.55,t+2.8)),n.add(T("HOSE","#2a3340","#d6b48a",2,.36,e,i+2.1,t+2.8)),n}function T2(){const n=new G;n.name="hab-water";const e=-46,t=-88,i=I(e,t);return n.add(u(new x(10.2,.2,7.4),l.concrete,e,i+.1,t)),n.add(u(new O(1.55,1.55,7.6,16),l.pipe,e-1.8,i+1.9,t,0,0,Math.PI/2)),n.add(u(new O(1.55,1.55,7.6,16),l.pipe,e+1.8,i+1.9,t,0,0,Math.PI/2)),n.add(u(new x(2.2,1.4,1.6),l.habDark,e,i+.9,t+2.2)),n.add(T("HAB","#1a2830","#d6e6ef",1.8,.5,e,i+4.35,t+3.8)),n.add(T("H2O","#1a2830","#d6b48a",2,.42,e,i+3.8,t+3.8)),ce(n,[[-46,-88],[-32,-88],[-18,-88]],l.pipe,.1),n}function A2(){const n=new G;n.name="sabatier-catalyst";const e=-50,t=-22,i=I(e,t);n.add(u(new x(9.6,.2,7.2),l.concrete,e,i+.1,t)),n.add(u(new x(3.4,2,2.6),l.habDark,e-2.2,i+1.2,t));for(let a=0;a<3;a++)n.add(u(new O(.55,.55,2.4,12),l.steelDark,e+1+a*1.35,i+1.4,t));return n.add(T("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.05,t+3.7)),n.add(T("CATALYST","#1a100c","#d6b48a",3.2,.36,e,i+2.6,t+3.7)),n}function R2(){const n=new G;n.name="co2-spare";const e=-80,t=20,i=I(e,t);return n.add(u(new x(9.6,.2,7.2),l.concrete,e,i+.1,t)),n.add(u(new x(3.2,2,2.4),l.habDark,e-2,i+1.2,t)),n.add(u(new O(.7,.7,3.2,12),l.steelDark,e+2.2,i+1.8,t)),n.add(u(new O(1.15,.45,1.4,12),l.steel,e+2.2,i+4,t)),n.add(T("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.05,t+3.7)),n.add(T("CO2 COMP","#1a100c","#d6b48a",3.2,.36,e,i+2.6,t+3.7)),n}function C2(){const n=new G;n.name="h2-dryer";const e=-38,t=28,i=I(e,t);return n.add(u(new x(9.6,.2,7.2),l.concrete,e,i+.1,t)),n.add(u(new x(3.2,2,2.4),l.habDark,e-2.2,i+1.2,t)),n.add(u(new O(.95,.95,3.4,14),l.steelDark,e+2,i+1.9,t)),n.add(u(new O(.35,.35,2.2,8),l.pipe,e+2,i+4,t)),n.add(T("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.15,t+3.7)),n.add(T("H2 DRYER","#1a100c","#d6b48a",3,.36,e,i+2.7,t+3.7)),n}function P2(){const n=new G;n.name="ice-melt-3";const e=-46,t=-132,i=I(e,t);return n.add(u(new x(9.6,.2,7.2),l.concrete,e,i+.1,t)),n.add(u(new x(3.6,2.8,3.2),l.habDark,e-1.8,i+1.6,t)),n.add(u(new O(1.45,1.45,4.2,14),l.pipe,e+2.2,i+2.3,t)),n.add(u(new O(.55,.85,1.6,10),l.steelDark,e+2.2,i+4.9,t)),n.add(T("SPARE","#1a2830","#d6e6ef",2.2,.5,e,i+4.4,t+3.7)),n.add(T("MELT","#1a2830","#d6b48a",2,.42,e,i+3.85,t+3.7)),ce(n,[[-46,-132],[-58,-142],[-58,-150]],l.pipe,.1),n}function D2(){const n=new G;n.name="gh-dust-filter-2";const e=24,t=-118,i=I(e,t);return n.add(u(new x(9.2,.18,5.6),l.concrete,e,i+.09,t)),n.add(u(new x(3.8,2.6,2.4),l.habDark,e-1.6,i+1.5,t)),n.add(u(new O(.95,.95,3.2,12),l.steelDark,e+2.4,i+1.8,t)),n.add(u(new x(.12,2.2,2),l.lattice,e+3.5,i+1.4,t)),n.add(T("SPARE","#1a100c","#f0c089",2.2,.45,e,i+3.55,t+2.9)),n.add(T("FILTER","#1a100c","#d6b48a",2.6,.4,e,i+3.05,t+2.9)),ce(n,[[24,-118],[30,-112],[38,-104]],l.pipe,.1),n}function I2(){const n=new G;n.name="spare-ice-haul";const e=-110,t=-136,i=I(e,t);return n.add(u(new x(12.4,.16,6.4),l.concrete,e,i+.08,t)),n.add(on(e,t,-.25,{kind:"ice"})),n.add(T("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+3.4,t+3.4)),n.add(T("HAUL","#1a2830","#d6b48a",2,.36,e,i+2.95,t+3.4)),n}function L2(){const n=new G;n.name="hab-coupler";const e=-22,t=-110,i=I(e,t);return n.add(u(new x(9.6,.2,7.2),l.concrete,e,i+.1,t)),n.add(u(new O(1.35,1.35,6.4,16),l.habDark,e,i+1.7,t,0,0,Math.PI/2)),n.add(u(new Ne(1.4,.16,8,16),l.steel,e-3.2,i+1.7,t,0,0,Math.PI/2)),n.add(u(new Ne(1.4,.16,8,16),l.steel,e+3.2,i+1.7,t,0,0,Math.PI/2)),n.add(T("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.55,t+3.7)),n.add(T("TUBE","#1a100c","#d6b48a",2,.36,e,i+3.1,t+3.7)),n}const sc=new y(.55,.62,.38);function z2(){const n=new Q0;Bp(n),n.add(zp(sc)),n.add(Np(sc)),n.add(Dp()),n.add(Ip()),n.add(Op());const e=Fp();n.add(e);const t=Hp();return n.add(t.group),{scene:n,dust:e,settlement:t,getHeight:I}}function N2(n){const e=new j0({canvas:n,antialias:!0,powerPreference:"high-performance"});return e.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),e.setSize(window.innerWidth,window.innerHeight),e.shadowMap.enabled=!0,e.shadowMap.type=oc,e.outputColorSpace=Ot,e.toneMapping=lc,e.toneMappingExposure=1.05,e}function O2(n,e){window.addEventListener("resize",()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)})}export{Bi as C,Qt as P,y as V,N2 as a,O2 as b,z2 as c,U2 as d};
