(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=e(a);fetch(a.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rr="170",Hc=0,qr=1,Gc=2,ac=1,sc=2,vn=3,Bn=0,Ie=1,cn=2,Fn=0,Ei=1,Yr=2,Kr=3,Jr=4,Vc=5,$n=100,Wc=101,Xc=102,qc=103,Yc=104,Kc=200,Jc=201,Zc=202,$c=203,Bs=204,ks=205,jc=206,Qc=207,tl=208,el=209,nl=210,il=211,al=212,sl=213,rl=214,Hs=0,Gs=1,Vs=2,Ri=3,Ws=4,Xs=5,qs=6,Ys=7,rc=0,ol=1,cl=2,On=0,ll=1,dl=2,hl=3,oc=4,ul=5,fl=6,pl=7,cc=300,Ci=301,Pi=302,Ks=303,Js=304,Qa=306,Zs=1e3,Qn=1001,$s=1002,We=1003,ml=1004,ma=1005,ln=1006,ss=1007,ti=1008,Sn=1009,lc=1010,dc=1011,na=1012,Cr=1013,ei=1014,dn=1015,aa=1016,Pr=1017,Dr=1018,Di=1020,hc=35902,uc=1021,fc=1022,nn=1023,pc=1024,mc=1025,Ti=1026,Ii=1027,Ir=1028,Lr=1029,gc=1030,Ur=1031,Nr=1033,Ga=33776,Va=33777,Wa=33778,Xa=33779,js=35840,Qs=35841,tr=35842,er=35843,nr=36196,ir=37492,ar=37496,sr=37808,rr=37809,or=37810,cr=37811,lr=37812,dr=37813,hr=37814,ur=37815,fr=37816,pr=37817,mr=37818,gr=37819,_r=37820,xr=37821,qa=36492,vr=36494,Mr=36495,_c=36283,wr=36284,yr=36285,Sr=36286,gl=3200,_l=3201,xc=0,xl=1,zn="",Oe="srgb",Ui="srgb-linear",ts="linear",re="srgb",oi=7680,Zr=519,vl=512,Ml=513,wl=514,vc=515,yl=516,Sl=517,bl=518,El=519,$r=35044,jr="300 es",wn=2e3,Ja=2001;class Ni{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const a=this._listeners[t];if(a!==void 0){const s=a.indexOf(e);s!==-1&&a.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rs=Math.PI/180,br=180/Math.PI;function sa(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]).toLowerCase()}function Re(n,t,e){return Math.max(t,Math.min(e,n))}function Tl(n,t){return(n%t+t)%t}function os(n,t,e){return(1-e)*n+e*t}function Vi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Fe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ct{constructor(t=0,e=0){Ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6],this.y=a[1]*e+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),a=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*a+t.x,this.y=s*a+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,i,a,s,r,o,d,c){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,a,s,r,o,d,c)}set(t,e,i,a,s,r,o,d,c){const h=this.elements;return h[0]=t,h[1]=a,h[2]=o,h[3]=e,h[4]=s,h[5]=d,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,a=e.elements,s=this.elements,r=i[0],o=i[3],d=i[6],c=i[1],h=i[4],p=i[7],f=i[2],m=i[5],v=i[8],M=a[0],x=a[3],g=a[6],C=a[1],A=a[4],y=a[7],B=a[2],D=a[5],I=a[8];return s[0]=r*M+o*C+d*B,s[3]=r*x+o*A+d*D,s[6]=r*g+o*y+d*I,s[1]=c*M+h*C+p*B,s[4]=c*x+h*A+p*D,s[7]=c*g+h*y+p*I,s[2]=f*M+m*C+v*B,s[5]=f*x+m*A+v*D,s[8]=f*g+m*y+v*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],d=t[6],c=t[7],h=t[8];return e*r*h-e*o*c-i*s*h+i*o*d+a*s*c-a*r*d}invert(){const t=this.elements,e=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],d=t[6],c=t[7],h=t[8],p=h*r-o*c,f=o*d-h*s,m=c*s-r*d,v=e*p+i*f+a*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return t[0]=p*M,t[1]=(a*c-h*i)*M,t[2]=(o*i-a*r)*M,t[3]=f*M,t[4]=(h*e-a*d)*M,t[5]=(a*s-o*e)*M,t[6]=m*M,t[7]=(i*d-c*e)*M,t[8]=(r*e-i*s)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,a,s,r,o){const d=Math.cos(s),c=Math.sin(s);return this.set(i*d,i*c,-i*(d*r+c*o)+r+t,-a*c,a*d,-a*(-c*r+d*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(cs.makeScale(t,e)),this}rotate(t){return this.premultiply(cs.makeRotation(-t)),this}translate(t,e){return this.premultiply(cs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let a=0;a<9;a++)if(e[a]!==i[a])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const cs=new Ht;function Mc(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Za(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Al(){const n=Za("canvas");return n.style.display="block",n}const Qr={};function ji(n){n in Qr||(Qr[n]=!0,console.warn(n))}function Rl(n,t,e){return new Promise(function(i,a){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:a();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function Cl(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Pl(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Qt={enabled:!0,workingColorSpace:Ui,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===re&&(n.r=yn(n.r),n.g=yn(n.g),n.b=yn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===re&&(n.r=Ai(n.r),n.g=Ai(n.g),n.b=Ai(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===zn?ts:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function yn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ai(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const to=[.64,.33,.3,.6,.15,.06],eo=[.2126,.7152,.0722],no=[.3127,.329],io=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ao=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qt.define({[Ui]:{primaries:to,whitePoint:no,transfer:ts,toXYZ:io,fromXYZ:ao,luminanceCoefficients:eo,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:to,whitePoint:no,transfer:re,toXYZ:io,fromXYZ:ao,luminanceCoefficients:eo,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}});let ci;class Dl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ci===void 0&&(ci=Za("canvas")),ci.width=t.width,ci.height=t.height;const i=ci.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ci}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Za("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=yn(s[r]/255)*255;return i.putImageData(a,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(yn(e[i]/255)*255):e[i]=yn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Il=0;class wc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Il++}),this.uuid=sa(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(ls(a[r].image)):s.push(ls(a[r]))}else s=ls(a);i.url=s}return e||(t.images[this.uuid]=i),i}}function ls(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Dl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ll=0;class Ce extends Ni{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,i=Qn,a=Qn,s=ln,r=ti,o=nn,d=Sn,c=Ce.DEFAULT_ANISOTROPY,h=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ll++}),this.uuid=sa(),this.name="",this.source=new wc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=d,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zs:t.x=t.x-Math.floor(t.x);break;case Qn:t.x=t.x<0?0:1;break;case $s:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zs:t.y=t.y-Math.floor(t.y);break;case Qn:t.y=t.y<0?0:1;break;case $s:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=cc;Ce.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,i=0,a=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,a){return this.x=t,this.y=e,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,a=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*e+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*e+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*e+r[7]*i+r[11]*a+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,a,s;const d=t.elements,c=d[0],h=d[4],p=d[8],f=d[1],m=d[5],v=d[9],M=d[2],x=d[6],g=d[10];if(Math.abs(h-f)<.01&&Math.abs(p-M)<.01&&Math.abs(v-x)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+M)<.1&&Math.abs(v+x)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(c+1)/2,y=(m+1)/2,B=(g+1)/2,D=(h+f)/4,I=(p+M)/4,N=(v+x)/4;return A>y&&A>B?A<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(A),a=D/i,s=I/i):y>B?y<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(y),i=D/a,s=N/a):B<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(B),i=I/s,a=N/s),this.set(i,a,s,e),this}let C=Math.sqrt((x-v)*(x-v)+(p-M)*(p-M)+(f-h)*(f-h));return Math.abs(C)<.001&&(C=1),this.x=(x-v)/C,this.y=(p-M)/C,this.z=(f-h)/C,this.w=Math.acos((c+m+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ul extends Ni{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);const a={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ce(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=t,this.textures[a].image.height=e,this.textures[a].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,a=t.textures.length;i<a;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new wc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends Ul{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class yc extends Ce{constructor(t=null,e=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:a},this.magFilter=We,this.minFilter=We,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nl extends Ce{constructor(t=null,e=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:a},this.magFilter=We,this.minFilter=We,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ra{constructor(t=0,e=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=a}static slerpFlat(t,e,i,a,s,r,o){let d=i[a+0],c=i[a+1],h=i[a+2],p=i[a+3];const f=s[r+0],m=s[r+1],v=s[r+2],M=s[r+3];if(o===0){t[e+0]=d,t[e+1]=c,t[e+2]=h,t[e+3]=p;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=v,t[e+3]=M;return}if(p!==M||d!==f||c!==m||h!==v){let x=1-o;const g=d*f+c*m+h*v+p*M,C=g>=0?1:-1,A=1-g*g;if(A>Number.EPSILON){const B=Math.sqrt(A),D=Math.atan2(B,g*C);x=Math.sin(x*D)/B,o=Math.sin(o*D)/B}const y=o*C;if(d=d*x+f*y,c=c*x+m*y,h=h*x+v*y,p=p*x+M*y,x===1-o){const B=1/Math.sqrt(d*d+c*c+h*h+p*p);d*=B,c*=B,h*=B,p*=B}}t[e]=d,t[e+1]=c,t[e+2]=h,t[e+3]=p}static multiplyQuaternionsFlat(t,e,i,a,s,r){const o=i[a],d=i[a+1],c=i[a+2],h=i[a+3],p=s[r],f=s[r+1],m=s[r+2],v=s[r+3];return t[e]=o*v+h*p+d*m-c*f,t[e+1]=d*v+h*f+c*p-o*m,t[e+2]=c*v+h*m+o*f-d*p,t[e+3]=h*v-o*p-d*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,a){return this._x=t,this._y=e,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,a=t._y,s=t._z,r=t._order,o=Math.cos,d=Math.sin,c=o(i/2),h=o(a/2),p=o(s/2),f=d(i/2),m=d(a/2),v=d(s/2);switch(r){case"XYZ":this._x=f*h*p+c*m*v,this._y=c*m*p-f*h*v,this._z=c*h*v+f*m*p,this._w=c*h*p-f*m*v;break;case"YXZ":this._x=f*h*p+c*m*v,this._y=c*m*p-f*h*v,this._z=c*h*v-f*m*p,this._w=c*h*p+f*m*v;break;case"ZXY":this._x=f*h*p-c*m*v,this._y=c*m*p+f*h*v,this._z=c*h*v+f*m*p,this._w=c*h*p-f*m*v;break;case"ZYX":this._x=f*h*p-c*m*v,this._y=c*m*p+f*h*v,this._z=c*h*v-f*m*p,this._w=c*h*p+f*m*v;break;case"YZX":this._x=f*h*p+c*m*v,this._y=c*m*p+f*h*v,this._z=c*h*v-f*m*p,this._w=c*h*p-f*m*v;break;case"XZY":this._x=f*h*p-c*m*v,this._y=c*m*p-f*h*v,this._z=c*h*v+f*m*p,this._w=c*h*p+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],a=e[4],s=e[8],r=e[1],o=e[5],d=e[9],c=e[2],h=e[6],p=e[10],f=i+o+p;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-d)*m,this._y=(s-c)*m,this._z=(r-a)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(h-d)/m,this._x=.25*m,this._y=(a+r)/m,this._z=(s+c)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(s-c)/m,this._x=(a+r)/m,this._y=.25*m,this._z=(d+h)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(r-a)/m,this._x=(s+c)/m,this._y=(d+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,e/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,a=t._y,s=t._z,r=t._w,o=e._x,d=e._y,c=e._z,h=e._w;return this._x=i*h+r*o+a*c-s*d,this._y=a*h+r*d+s*o-i*c,this._z=s*h+r*c+i*d-a*o,this._w=r*h-i*o-a*d-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,a=this._y,s=this._z,r=this._w;let o=r*t._w+i*t._x+a*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=a,this._z=s,this;const d=1-o*o;if(d<=Number.EPSILON){const m=1-e;return this._w=m*r+e*this._w,this._x=m*i+e*this._x,this._y=m*a+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(d),h=Math.atan2(c,o),p=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=r*p+this._w*f,this._x=i*p+this._x*f,this._y=a*p+this._y*f,this._z=s*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class S{constructor(t=0,e=0,i=0){S.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(so.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(so.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*a,this.y=s[1]*e+s[4]*i+s[7]*a,this.z=s[2]*e+s[5]*i+s[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,a=this.z,s=t.elements,r=1/(s[3]*e+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*e+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*e+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,a=this.z,s=t.x,r=t.y,o=t.z,d=t.w,c=2*(r*a-o*i),h=2*(o*e-s*a),p=2*(s*i-r*e);return this.x=e+d*c+r*p-o*h,this.y=i+d*h+o*c-s*p,this.z=a+d*p+s*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*a,this.y=s[1]*e+s[5]*i+s[9]*a,this.z=s[2]*e+s[6]*i+s[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,a=t.y,s=t.z,r=e.x,o=e.y,d=e.z;return this.x=a*d-s*o,this.y=s*r-i*d,this.z=i*o-a*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ds.copy(this).projectOnVector(t),this.sub(ds)}reflect(t){return this.sub(ds.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return e*e+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const a=Math.sin(e)*t;return this.x=a*Math.sin(i),this.y=Math.cos(e)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=a,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ds=new S,so=new ra;class ii{constructor(t=new S(1/0,1/0,1/0),e=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ze.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ze.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ze.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Ze):Ze.fromBufferAttribute(s,r),Ze.applyMatrix4(t.matrixWorld),this.expandByPoint(Ze);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ga.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ga.copy(i.boundingBox)),ga.applyMatrix4(t.matrixWorld),this.union(ga)}const a=t.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ze),Ze.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wi),_a.subVectors(this.max,Wi),li.subVectors(t.a,Wi),di.subVectors(t.b,Wi),hi.subVectors(t.c,Wi),Rn.subVectors(di,li),Cn.subVectors(hi,di),Gn.subVectors(li,hi);let e=[0,-Rn.z,Rn.y,0,-Cn.z,Cn.y,0,-Gn.z,Gn.y,Rn.z,0,-Rn.x,Cn.z,0,-Cn.x,Gn.z,0,-Gn.x,-Rn.y,Rn.x,0,-Cn.y,Cn.x,0,-Gn.y,Gn.x,0];return!hs(e,li,di,hi,_a)||(e=[1,0,0,0,1,0,0,0,1],!hs(e,li,di,hi,_a))?!1:(xa.crossVectors(Rn,Cn),e=[xa.x,xa.y,xa.z],hs(e,li,di,hi,_a))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ze).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ze).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const pn=[new S,new S,new S,new S,new S,new S,new S,new S],Ze=new S,ga=new ii,li=new S,di=new S,hi=new S,Rn=new S,Cn=new S,Gn=new S,Wi=new S,_a=new S,xa=new S,Vn=new S;function hs(n,t,e,i,a){for(let s=0,r=n.length-3;s<=r;s+=3){Vn.fromArray(n,s);const o=a.x*Math.abs(Vn.x)+a.y*Math.abs(Vn.y)+a.z*Math.abs(Vn.z),d=t.dot(Vn),c=e.dot(Vn),h=i.dot(Vn);if(Math.max(-Math.max(d,c,h),Math.min(d,c,h))>o)return!1}return!0}const zl=new ii,Xi=new S,us=new S;class zi{constructor(t=new S,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):zl.setFromPoints(t).getCenter(i);let a=0;for(let s=0,r=t.length;s<r;s++)a=Math.max(a,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xi.subVectors(t,this.center);const e=Xi.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),a=(i-this.radius)*.5;this.center.addScaledVector(Xi,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(us.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xi.copy(t.center).add(us)),this.expandByPoint(Xi.copy(t.center).sub(us))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new S,fs=new S,va=new S,Pn=new S,ps=new S,Ma=new S,ms=new S;class Sc{constructor(t=new S,e=new S(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,i,a){fs.copy(t).add(e).multiplyScalar(.5),va.copy(e).sub(t).normalize(),Pn.copy(this.origin).sub(fs);const s=t.distanceTo(e)*.5,r=-this.direction.dot(va),o=Pn.dot(this.direction),d=-Pn.dot(va),c=Pn.lengthSq(),h=Math.abs(1-r*r);let p,f,m,v;if(h>0)if(p=r*d-o,f=r*o-d,v=s*h,p>=0)if(f>=-v)if(f<=v){const M=1/h;p*=M,f*=M,m=p*(p+r*f+2*o)+f*(r*p+f+2*d)+c}else f=s,p=Math.max(0,-(r*f+o)),m=-p*p+f*(f+2*d)+c;else f=-s,p=Math.max(0,-(r*f+o)),m=-p*p+f*(f+2*d)+c;else f<=-v?(p=Math.max(0,-(-r*s+o)),f=p>0?-s:Math.min(Math.max(-s,-d),s),m=-p*p+f*(f+2*d)+c):f<=v?(p=0,f=Math.min(Math.max(-s,-d),s),m=f*(f+2*d)+c):(p=Math.max(0,-(r*s+o)),f=p>0?s:Math.min(Math.max(-s,-d),s),m=-p*p+f*(f+2*d)+c);else f=r>0?-s:s,p=Math.max(0,-(r*f+o)),m=-p*p+f*(f+2*d)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),a&&a.copy(fs).addScaledVector(va,f),m}intersectSphere(t,e){mn.subVectors(t.center,this.origin);const i=mn.dot(this.direction),a=mn.dot(mn)-i*i,s=t.radius*t.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=i-r,d=i+r;return d<0?null:o<0?this.at(d,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,a,s,r,o,d;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,a=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,a=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,r=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,r=(t.min.y-f.y)*h),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),p>=0?(o=(t.min.z-f.z)*p,d=(t.max.z-f.z)*p):(o=(t.max.z-f.z)*p,d=(t.min.z-f.z)*p),i>d||o>a)||((o>i||i!==i)&&(i=o),(d<a||a!==a)&&(a=d),a<0)?null:this.at(i>=0?i:a,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,i,a,s){ps.subVectors(e,t),Ma.subVectors(i,t),ms.crossVectors(ps,Ma);let r=this.direction.dot(ms),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Pn.subVectors(this.origin,t);const d=o*this.direction.dot(Ma.crossVectors(Pn,Ma));if(d<0)return null;const c=o*this.direction.dot(ps.cross(Pn));if(c<0||d+c>r)return null;const h=-o*Pn.dot(ms);return h<0?null:this.at(h/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,i,a,s,r,o,d,c,h,p,f,m,v,M,x){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,a,s,r,o,d,c,h,p,f,m,v,M,x)}set(t,e,i,a,s,r,o,d,c,h,p,f,m,v,M,x){const g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=a,g[1]=s,g[5]=r,g[9]=o,g[13]=d,g[2]=c,g[6]=h,g[10]=p,g[14]=f,g[3]=m,g[7]=v,g[11]=M,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,a=1/ui.setFromMatrixColumn(t,0).length(),s=1/ui.setFromMatrixColumn(t,1).length(),r=1/ui.setFromMatrixColumn(t,2).length();return e[0]=i[0]*a,e[1]=i[1]*a,e[2]=i[2]*a,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,a=t.y,s=t.z,r=Math.cos(i),o=Math.sin(i),d=Math.cos(a),c=Math.sin(a),h=Math.cos(s),p=Math.sin(s);if(t.order==="XYZ"){const f=r*h,m=r*p,v=o*h,M=o*p;e[0]=d*h,e[4]=-d*p,e[8]=c,e[1]=m+v*c,e[5]=f-M*c,e[9]=-o*d,e[2]=M-f*c,e[6]=v+m*c,e[10]=r*d}else if(t.order==="YXZ"){const f=d*h,m=d*p,v=c*h,M=c*p;e[0]=f+M*o,e[4]=v*o-m,e[8]=r*c,e[1]=r*p,e[5]=r*h,e[9]=-o,e[2]=m*o-v,e[6]=M+f*o,e[10]=r*d}else if(t.order==="ZXY"){const f=d*h,m=d*p,v=c*h,M=c*p;e[0]=f-M*o,e[4]=-r*p,e[8]=v+m*o,e[1]=m+v*o,e[5]=r*h,e[9]=M-f*o,e[2]=-r*c,e[6]=o,e[10]=r*d}else if(t.order==="ZYX"){const f=r*h,m=r*p,v=o*h,M=o*p;e[0]=d*h,e[4]=v*c-m,e[8]=f*c+M,e[1]=d*p,e[5]=M*c+f,e[9]=m*c-v,e[2]=-c,e[6]=o*d,e[10]=r*d}else if(t.order==="YZX"){const f=r*d,m=r*c,v=o*d,M=o*c;e[0]=d*h,e[4]=M-f*p,e[8]=v*p+m,e[1]=p,e[5]=r*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*p+v,e[10]=f-M*p}else if(t.order==="XZY"){const f=r*d,m=r*c,v=o*d,M=o*c;e[0]=d*h,e[4]=-p,e[8]=c*h,e[1]=f*p+M,e[5]=r*h,e[9]=m*p-v,e[2]=v*p-m,e[6]=o*h,e[10]=M*p+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fl,t,Ol)}lookAt(t,e,i){const a=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),Dn.crossVectors(i,Ge),Dn.lengthSq()===0&&(Math.abs(i.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),Dn.crossVectors(i,Ge)),Dn.normalize(),wa.crossVectors(Ge,Dn),a[0]=Dn.x,a[4]=wa.x,a[8]=Ge.x,a[1]=Dn.y,a[5]=wa.y,a[9]=Ge.y,a[2]=Dn.z,a[6]=wa.z,a[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,a=e.elements,s=this.elements,r=i[0],o=i[4],d=i[8],c=i[12],h=i[1],p=i[5],f=i[9],m=i[13],v=i[2],M=i[6],x=i[10],g=i[14],C=i[3],A=i[7],y=i[11],B=i[15],D=a[0],I=a[4],N=a[8],T=a[12],b=a[1],U=a[5],Y=a[9],q=a[13],Z=a[2],nt=a[6],$=a[10],rt=a[14],J=a[3],ht=a[7],_t=a[11],Rt=a[15];return s[0]=r*D+o*b+d*Z+c*J,s[4]=r*I+o*U+d*nt+c*ht,s[8]=r*N+o*Y+d*$+c*_t,s[12]=r*T+o*q+d*rt+c*Rt,s[1]=h*D+p*b+f*Z+m*J,s[5]=h*I+p*U+f*nt+m*ht,s[9]=h*N+p*Y+f*$+m*_t,s[13]=h*T+p*q+f*rt+m*Rt,s[2]=v*D+M*b+x*Z+g*J,s[6]=v*I+M*U+x*nt+g*ht,s[10]=v*N+M*Y+x*$+g*_t,s[14]=v*T+M*q+x*rt+g*Rt,s[3]=C*D+A*b+y*Z+B*J,s[7]=C*I+A*U+y*nt+B*ht,s[11]=C*N+A*Y+y*$+B*_t,s[15]=C*T+A*q+y*rt+B*Rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],a=t[8],s=t[12],r=t[1],o=t[5],d=t[9],c=t[13],h=t[2],p=t[6],f=t[10],m=t[14],v=t[3],M=t[7],x=t[11],g=t[15];return v*(+s*d*p-a*c*p-s*o*f+i*c*f+a*o*m-i*d*m)+M*(+e*d*m-e*c*f+s*r*f-a*r*m+a*c*h-s*d*h)+x*(+e*c*p-e*o*m-s*r*p+i*r*m+s*o*h-i*c*h)+g*(-a*o*h-e*d*p+e*o*f+a*r*p-i*r*f+i*d*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=e,a[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],d=t[6],c=t[7],h=t[8],p=t[9],f=t[10],m=t[11],v=t[12],M=t[13],x=t[14],g=t[15],C=p*x*c-M*f*c+M*d*m-o*x*m-p*d*g+o*f*g,A=v*f*c-h*x*c-v*d*m+r*x*m+h*d*g-r*f*g,y=h*M*c-v*p*c+v*o*m-r*M*m-h*o*g+r*p*g,B=v*p*d-h*M*d-v*o*f+r*M*f+h*o*x-r*p*x,D=e*C+i*A+a*y+s*B;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/D;return t[0]=C*I,t[1]=(M*f*s-p*x*s-M*a*m+i*x*m+p*a*g-i*f*g)*I,t[2]=(o*x*s-M*d*s+M*a*c-i*x*c-o*a*g+i*d*g)*I,t[3]=(p*d*s-o*f*s-p*a*c+i*f*c+o*a*m-i*d*m)*I,t[4]=A*I,t[5]=(h*x*s-v*f*s+v*a*m-e*x*m-h*a*g+e*f*g)*I,t[6]=(v*d*s-r*x*s-v*a*c+e*x*c+r*a*g-e*d*g)*I,t[7]=(r*f*s-h*d*s+h*a*c-e*f*c-r*a*m+e*d*m)*I,t[8]=y*I,t[9]=(v*p*s-h*M*s-v*i*m+e*M*m+h*i*g-e*p*g)*I,t[10]=(r*M*s-v*o*s+v*i*c-e*M*c-r*i*g+e*o*g)*I,t[11]=(h*o*s-r*p*s-h*i*c+e*p*c+r*i*m-e*o*m)*I,t[12]=B*I,t[13]=(h*M*a-v*p*a+v*i*f-e*M*f-h*i*x+e*p*x)*I,t[14]=(v*o*a-r*M*a-v*i*d+e*M*d+r*i*x-e*o*x)*I,t[15]=(r*p*a-h*o*a+h*i*d-e*p*d-r*i*f+e*o*f)*I,this}scale(t){const e=this.elements,i=t.x,a=t.y,s=t.z;return e[0]*=i,e[4]*=a,e[8]*=s,e[1]*=i,e[5]*=a,e[9]*=s,e[2]*=i,e[6]*=a,e[10]*=s,e[3]*=i,e[7]*=a,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,a))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),a=Math.sin(e),s=1-i,r=t.x,o=t.y,d=t.z,c=s*r,h=s*o;return this.set(c*r+i,c*o-a*d,c*d+a*o,0,c*o+a*d,h*o+i,h*d-a*r,0,c*d-a*o,h*d+a*r,s*d*d+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,a,s,r){return this.set(1,i,s,0,t,1,r,0,e,a,1,0,0,0,0,1),this}compose(t,e,i){const a=this.elements,s=e._x,r=e._y,o=e._z,d=e._w,c=s+s,h=r+r,p=o+o,f=s*c,m=s*h,v=s*p,M=r*h,x=r*p,g=o*p,C=d*c,A=d*h,y=d*p,B=i.x,D=i.y,I=i.z;return a[0]=(1-(M+g))*B,a[1]=(m+y)*B,a[2]=(v-A)*B,a[3]=0,a[4]=(m-y)*D,a[5]=(1-(f+g))*D,a[6]=(x+C)*D,a[7]=0,a[8]=(v+A)*I,a[9]=(x-C)*I,a[10]=(1-(f+M))*I,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,e,i){const a=this.elements;let s=ui.set(a[0],a[1],a[2]).length();const r=ui.set(a[4],a[5],a[6]).length(),o=ui.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),t.x=a[12],t.y=a[13],t.z=a[14],$e.copy(this);const c=1/s,h=1/r,p=1/o;return $e.elements[0]*=c,$e.elements[1]*=c,$e.elements[2]*=c,$e.elements[4]*=h,$e.elements[5]*=h,$e.elements[6]*=h,$e.elements[8]*=p,$e.elements[9]*=p,$e.elements[10]*=p,e.setFromRotationMatrix($e),i.x=s,i.y=r,i.z=o,this}makePerspective(t,e,i,a,s,r,o=wn){const d=this.elements,c=2*s/(e-t),h=2*s/(i-a),p=(e+t)/(e-t),f=(i+a)/(i-a);let m,v;if(o===wn)m=-(r+s)/(r-s),v=-2*r*s/(r-s);else if(o===Ja)m=-r/(r-s),v=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return d[0]=c,d[4]=0,d[8]=p,d[12]=0,d[1]=0,d[5]=h,d[9]=f,d[13]=0,d[2]=0,d[6]=0,d[10]=m,d[14]=v,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,i,a,s,r,o=wn){const d=this.elements,c=1/(e-t),h=1/(i-a),p=1/(r-s),f=(e+t)*c,m=(i+a)*h;let v,M;if(o===wn)v=(r+s)*p,M=-2*p;else if(o===Ja)v=s*p,M=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return d[0]=2*c,d[4]=0,d[8]=0,d[12]=-f,d[1]=0,d[5]=2*h,d[9]=0,d[13]=-m,d[2]=0,d[6]=0,d[10]=M,d[14]=-v,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let a=0;a<16;a++)if(e[a]!==i[a])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ui=new S,$e=new he,Fl=new S(0,0,0),Ol=new S(1,1,1),Dn=new S,wa=new S,Ge=new S,ro=new he,oo=new ra;class un{constructor(t=0,e=0,i=0,a=un.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,a=this._order){return this._x=t,this._y=e,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const a=t.elements,s=a[0],r=a[4],o=a[8],d=a[1],c=a[5],h=a[9],p=a[2],f=a[6],m=a[10];switch(e){case"XYZ":this._y=Math.asin(Re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(d,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Re(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(d,s));break;case"ZYX":this._y=Math.asin(-Re(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(d,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Re(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Re(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ro.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ro,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return oo.setFromEuler(this),this.setFromQuaternion(oo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}un.DEFAULT_ORDER="XYZ";class bc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Bl=0;const co=new S,fi=new ra,gn=new he,ya=new S,qi=new S,kl=new S,Hl=new ra,lo=new S(1,0,0),ho=new S(0,1,0),uo=new S(0,0,1),fo={type:"added"},Gl={type:"removed"},pi={type:"childadded",child:null},gs={type:"childremoved",child:null};class Me extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bl++}),this.uuid=sa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new S,e=new un,i=new ra,a=new S(1,1,1);function s(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new he},normalMatrix:{value:new Ht}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fi.setFromAxisAngle(t,e),this.quaternion.multiply(fi),this}rotateOnWorldAxis(t,e){return fi.setFromAxisAngle(t,e),this.quaternion.premultiply(fi),this}rotateX(t){return this.rotateOnAxis(lo,t)}rotateY(t){return this.rotateOnAxis(ho,t)}rotateZ(t){return this.rotateOnAxis(uo,t)}translateOnAxis(t,e){return co.copy(t).applyQuaternion(this.quaternion),this.position.add(co.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(lo,t)}translateY(t){return this.translateOnAxis(ho,t)}translateZ(t){return this.translateOnAxis(uo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ya.copy(t):ya.set(t,e,i);const a=this.parent;this.updateWorldMatrix(!0,!1),qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(qi,ya,this.up):gn.lookAt(ya,qi,this.up),this.quaternion.setFromRotationMatrix(gn),a&&(gn.extractRotation(a.matrixWorld),fi.setFromRotationMatrix(gn),this.quaternion.premultiply(fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fo),pi.child=t,this.dispatchEvent(pi),pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gl),gs.child=t,this.dispatchEvent(gs),gs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fo),pi.child=t,this.dispatchEvent(pi),pi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,a=this.children.length;i<a;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,t,kl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,Hl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,a=e.length;i<a;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,a=e.length;i<a;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,a=e.length;i<a;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function s(o,d){return o[d.uuid]===void 0&&(o[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const d=o.shapes;if(Array.isArray(d))for(let c=0,h=d.length;c<h;c++){const p=d[c];s(t.shapes,p)}else s(t.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let d=0,c=this.material.length;d<c;d++)o.push(s(t.materials,this.material[d]));a.material=o}else a.material=s(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const d=this.animations[o];a.animations.push(s(t.animations,d))}}if(e){const o=r(t.geometries),d=r(t.materials),c=r(t.textures),h=r(t.images),p=r(t.shapes),f=r(t.skeletons),m=r(t.animations),v=r(t.nodes);o.length>0&&(i.geometries=o),d.length>0&&(i.materials=d),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=a,i;function r(o){const d=[];for(const c in o){const h=o[c];delete h.metadata,d.push(h)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}Me.DEFAULT_UP=new S(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const je=new S,_n=new S,_s=new S,xn=new S,mi=new S,gi=new S,po=new S,xs=new S,vs=new S,Ms=new S,ws=new _e,ys=new _e,Ss=new _e;class en{constructor(t=new S,e=new S,i=new S){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,a){a.subVectors(i,e),je.subVectors(t,e),a.cross(je);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(t,e,i,a,s){je.subVectors(a,e),_n.subVectors(i,e),_s.subVectors(t,e);const r=je.dot(je),o=je.dot(_n),d=je.dot(_s),c=_n.dot(_n),h=_n.dot(_s),p=r*c-o*o;if(p===0)return s.set(0,0,0),null;const f=1/p,m=(c*d-o*h)*f,v=(r*h-o*d)*f;return s.set(1-m-v,v,m)}static containsPoint(t,e,i,a){return this.getBarycoord(t,e,i,a,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(t,e,i,a,s,r,o,d){return this.getBarycoord(t,e,i,a,xn)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(s,xn.x),d.addScaledVector(r,xn.y),d.addScaledVector(o,xn.z),d)}static getInterpolatedAttribute(t,e,i,a,s,r){return ws.setScalar(0),ys.setScalar(0),Ss.setScalar(0),ws.fromBufferAttribute(t,e),ys.fromBufferAttribute(t,i),Ss.fromBufferAttribute(t,a),r.setScalar(0),r.addScaledVector(ws,s.x),r.addScaledVector(ys,s.y),r.addScaledVector(Ss,s.z),r}static isFrontFacing(t,e,i,a){return je.subVectors(i,e),_n.subVectors(t,e),je.cross(_n).dot(a)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,a){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,e,i,a){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return je.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),je.cross(_n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return en.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return en.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,a,s){return en.getInterpolation(t,this.a,this.b,this.c,e,i,a,s)}containsPoint(t){return en.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return en.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,a=this.b,s=this.c;let r,o;mi.subVectors(a,i),gi.subVectors(s,i),xs.subVectors(t,i);const d=mi.dot(xs),c=gi.dot(xs);if(d<=0&&c<=0)return e.copy(i);vs.subVectors(t,a);const h=mi.dot(vs),p=gi.dot(vs);if(h>=0&&p<=h)return e.copy(a);const f=d*p-h*c;if(f<=0&&d>=0&&h<=0)return r=d/(d-h),e.copy(i).addScaledVector(mi,r);Ms.subVectors(t,s);const m=mi.dot(Ms),v=gi.dot(Ms);if(v>=0&&m<=v)return e.copy(s);const M=m*c-d*v;if(M<=0&&c>=0&&v<=0)return o=c/(c-v),e.copy(i).addScaledVector(gi,o);const x=h*v-m*p;if(x<=0&&p-h>=0&&m-v>=0)return po.subVectors(s,a),o=(p-h)/(p-h+(m-v)),e.copy(a).addScaledVector(po,o);const g=1/(x+M+f);return r=M*g,o=f*g,e.copy(i).addScaledVector(mi,r).addScaledVector(gi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ec={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},Sa={h:0,s:0,l:0};function bs(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Vt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,a=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.toWorkingColorSpace(this,a),this}setHSL(t,e,i,a=Qt.workingColorSpace){if(t=Tl(t,1),e=Re(e,0,1),i=Re(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,r=2*i-s;this.r=bs(r,s,t+1/3),this.g=bs(r,s,t),this.b=bs(r,s,t-1/3)}return Qt.toWorkingColorSpace(this,a),this}setStyle(t,e=Oe){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){const i=Ec[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yn(t.r),this.g=yn(t.g),this.b=yn(t.b),this}copyLinearToSRGB(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return Qt.fromWorkingColorSpace(Ae.copy(this),t),Math.round(Re(Ae.r*255,0,255))*65536+Math.round(Re(Ae.g*255,0,255))*256+Math.round(Re(Ae.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Ae.copy(this),e);const i=Ae.r,a=Ae.g,s=Ae.b,r=Math.max(i,a,s),o=Math.min(i,a,s);let d,c;const h=(o+r)/2;if(o===r)d=0,c=0;else{const p=r-o;switch(c=h<=.5?p/(r+o):p/(2-r-o),r){case i:d=(a-s)/p+(a<s?6:0);break;case a:d=(s-i)/p+2;break;case s:d=(i-a)/p+4;break}d/=6}return t.h=d,t.s=c,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=Oe){Qt.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,i=Ae.g,a=Ae.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,e,i){return this.getHSL(In),this.setHSL(In.h+t,In.s+e,In.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(In),t.getHSL(Sa);const i=os(In.h,Sa.h,e),a=os(In.s,Sa.s,e),s=os(In.l,Sa.l,e);return this.setHSL(i,a,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,a=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*a,this.g=s[1]*e+s[4]*i+s[7]*a,this.b=s[2]*e+s[5]*i+s[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new Vt;Vt.NAMES=Ec;let Vl=0;class Fi extends Ni{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vl++}),this.uuid=sa(),this.name="",this.blending=Ei,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bs,this.blendDst=ks,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oi,this.stencilZFail=oi,this.stencilZPass=oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const a=this[e];if(a===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(i.blending=this.blending),this.side!==Bn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bs&&(i.blendSrc=this.blendSrc),this.blendDst!==ks&&(i.blendDst=this.blendDst),this.blendEquation!==$n&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ri&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zr&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==oi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==oi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const r=[];for(const o in s){const d=s[o];delete d.metadata,r.push(d)}return r}if(e){const s=a(t.textures),r=a(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const a=e.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class zr extends Fi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new S,ba=new Ct;class Xe{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=$r,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[t+a]=e.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ba.fromBufferAttribute(this,e),ba.applyMatrix3(t),this.setXY(e,ba.x,ba.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Vi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Fe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),i=Fe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,a){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),i=Fe(i,this.array),a=Fe(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,e,i,a,s){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),i=Fe(i,this.array),a=Fe(a,this.array),s=Fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$r&&(t.usage=this.usage),t}}class Tc extends Xe{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ac extends Xe{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class fe extends Xe{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Wl=0;const Ye=new he,Es=new Me,_i=new S,Ve=new ii,Yi=new ii,be=new S;class Le extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wl++}),this.uuid=sa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mc(t)?Ac:Tc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ht().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ye.makeRotationFromQuaternion(t),this.applyMatrix4(Ye),this}rotateX(t){return Ye.makeRotationX(t),this.applyMatrix4(Ye),this}rotateY(t){return Ye.makeRotationY(t),this.applyMatrix4(Ye),this}rotateZ(t){return Ye.makeRotationZ(t),this.applyMatrix4(Ye),this}translate(t,e,i){return Ye.makeTranslation(t,e,i),this.applyMatrix4(Ye),this}scale(t,e,i){return Ye.makeScale(t,e,i),this.applyMatrix4(Ye),this}lookAt(t){return Es.lookAt(t),Es.updateMatrix(),this.applyMatrix4(Es.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let a=0,s=t.length;a<s;a++){const r=t[a];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new fe(i,3))}else{for(let i=0,a=e.count;i<a;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,a=e.length;i<a;i++){const s=e[i];Ve.setFromBufferAttribute(s),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(t){const i=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const o=e[s];Yi.setFromBufferAttribute(o),this.morphTargetsRelative?(be.addVectors(Ve.min,Yi.min),Ve.expandByPoint(be),be.addVectors(Ve.max,Yi.max),Ve.expandByPoint(be)):(Ve.expandByPoint(Yi.min),Ve.expandByPoint(Yi.max))}Ve.getCenter(i);let a=0;for(let s=0,r=t.count;s<r;s++)be.fromBufferAttribute(t,s),a=Math.max(a,i.distanceToSquared(be));if(e)for(let s=0,r=e.length;s<r;s++){const o=e[s],d=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)be.fromBufferAttribute(o,c),d&&(_i.fromBufferAttribute(t,c),be.add(_i)),a=Math.max(a,i.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,a=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),o=[],d=[];for(let N=0;N<i.count;N++)o[N]=new S,d[N]=new S;const c=new S,h=new S,p=new S,f=new Ct,m=new Ct,v=new Ct,M=new S,x=new S;function g(N,T,b){c.fromBufferAttribute(i,N),h.fromBufferAttribute(i,T),p.fromBufferAttribute(i,b),f.fromBufferAttribute(s,N),m.fromBufferAttribute(s,T),v.fromBufferAttribute(s,b),h.sub(c),p.sub(c),m.sub(f),v.sub(f);const U=1/(m.x*v.y-v.x*m.y);isFinite(U)&&(M.copy(h).multiplyScalar(v.y).addScaledVector(p,-m.y).multiplyScalar(U),x.copy(p).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(U),o[N].add(M),o[T].add(M),o[b].add(M),d[N].add(x),d[T].add(x),d[b].add(x))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let N=0,T=C.length;N<T;++N){const b=C[N],U=b.start,Y=b.count;for(let q=U,Z=U+Y;q<Z;q+=3)g(t.getX(q+0),t.getX(q+1),t.getX(q+2))}const A=new S,y=new S,B=new S,D=new S;function I(N){B.fromBufferAttribute(a,N),D.copy(B);const T=o[N];A.copy(T),A.sub(B.multiplyScalar(B.dot(T))).normalize(),y.crossVectors(D,T);const U=y.dot(d[N])<0?-1:1;r.setXYZW(N,A.x,A.y,A.z,U)}for(let N=0,T=C.length;N<T;++N){const b=C[N],U=b.start,Y=b.count;for(let q=U,Z=U+Y;q<Z;q+=3)I(t.getX(q+0)),I(t.getX(q+1)),I(t.getX(q+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const a=new S,s=new S,r=new S,o=new S,d=new S,c=new S,h=new S,p=new S;if(t)for(let f=0,m=t.count;f<m;f+=3){const v=t.getX(f+0),M=t.getX(f+1),x=t.getX(f+2);a.fromBufferAttribute(e,v),s.fromBufferAttribute(e,M),r.fromBufferAttribute(e,x),h.subVectors(r,s),p.subVectors(a,s),h.cross(p),o.fromBufferAttribute(i,v),d.fromBufferAttribute(i,M),c.fromBufferAttribute(i,x),o.add(h),d.add(h),c.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(M,d.x,d.y,d.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)a.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),h.subVectors(r,s),p.subVectors(a,s),h.cross(p),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(o,d){const c=o.array,h=o.itemSize,p=o.normalized,f=new c.constructor(d.length*h);let m=0,v=0;for(let M=0,x=d.length;M<x;M++){o.isInterleavedBufferAttribute?m=d[M]*o.data.stride+o.offset:m=d[M]*h;for(let g=0;g<h;g++)f[v++]=c[m++]}return new Xe(f,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Le,i=this.index.array,a=this.attributes;for(const o in a){const d=a[o],c=t(d,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const d=[],c=s[o];for(let h=0,p=c.length;h<p;h++){const f=c[h],m=t(f,i);d.push(m)}e.morphAttributes[o]=d}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,d=r.length;o<d;o++){const c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const c in d)d[c]!==void 0&&(t[c]=d[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const d in i){const c=i[d];t.data.attributes[d]=c.toJSON(t.data)}const a={};let s=!1;for(const d in this.morphAttributes){const c=this.morphAttributes[d],h=[];for(let p=0,f=c.length;p<f;p++){const m=c[p];h.push(m.toJSON(t.data))}h.length>0&&(a[d]=h,s=!0)}s&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const a=t.attributes;for(const c in a){const h=a[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],p=s[c];for(let f=0,m=p.length;f<m;f++)h.push(p[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mo=new he,Wn=new Sc,Ea=new zi,go=new S,Ta=new S,Aa=new S,Ra=new S,Ts=new S,Ca=new S,_o=new S,Pa=new S;class de extends Me{constructor(t=new Le,e=new zr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const a=e[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(s&&o){Ca.set(0,0,0);for(let d=0,c=s.length;d<c;d++){const h=o[d],p=s[d];h!==0&&(Ts.fromBufferAttribute(p,t),r?Ca.addScaledVector(Ts,h):Ca.addScaledVector(Ts.sub(e),h))}e.add(Ca)}return e}raycast(t,e){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ea.copy(i.boundingSphere),Ea.applyMatrix4(s),Wn.copy(t.ray).recast(t.near),!(Ea.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(Ea,go)===null||Wn.origin.distanceToSquared(go)>(t.far-t.near)**2))&&(mo.copy(s).invert(),Wn.copy(t.ray).applyMatrix4(mo),!(i.boundingBox!==null&&Wn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Wn)))}_computeIntersections(t,e,i){let a;const s=this.geometry,r=this.material,o=s.index,d=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,M=f.length;v<M;v++){const x=f[v],g=r[x.materialIndex],C=Math.max(x.start,m.start),A=Math.min(o.count,Math.min(x.start+x.count,m.start+m.count));for(let y=C,B=A;y<B;y+=3){const D=o.getX(y),I=o.getX(y+1),N=o.getX(y+2);a=Da(this,g,t,i,c,h,p,D,I,N),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=x.materialIndex,e.push(a))}}else{const v=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let x=v,g=M;x<g;x+=3){const C=o.getX(x),A=o.getX(x+1),y=o.getX(x+2);a=Da(this,r,t,i,c,h,p,C,A,y),a&&(a.faceIndex=Math.floor(x/3),e.push(a))}}else if(d!==void 0)if(Array.isArray(r))for(let v=0,M=f.length;v<M;v++){const x=f[v],g=r[x.materialIndex],C=Math.max(x.start,m.start),A=Math.min(d.count,Math.min(x.start+x.count,m.start+m.count));for(let y=C,B=A;y<B;y+=3){const D=y,I=y+1,N=y+2;a=Da(this,g,t,i,c,h,p,D,I,N),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=x.materialIndex,e.push(a))}}else{const v=Math.max(0,m.start),M=Math.min(d.count,m.start+m.count);for(let x=v,g=M;x<g;x+=3){const C=x,A=x+1,y=x+2;a=Da(this,r,t,i,c,h,p,C,A,y),a&&(a.faceIndex=Math.floor(x/3),e.push(a))}}}}function Xl(n,t,e,i,a,s,r,o){let d;if(t.side===Ie?d=i.intersectTriangle(r,s,a,!0,o):d=i.intersectTriangle(a,s,r,t.side===Bn,o),d===null)return null;Pa.copy(o),Pa.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Pa);return c<e.near||c>e.far?null:{distance:c,point:Pa.clone(),object:n}}function Da(n,t,e,i,a,s,r,o,d,c){n.getVertexPosition(o,Ta),n.getVertexPosition(d,Aa),n.getVertexPosition(c,Ra);const h=Xl(n,t,e,i,Ta,Aa,Ra,_o);if(h){const p=new S;en.getBarycoord(_o,Ta,Aa,Ra,p),a&&(h.uv=en.getInterpolatedAttribute(a,o,d,c,p,new Ct)),s&&(h.uv1=en.getInterpolatedAttribute(s,o,d,c,p,new Ct)),r&&(h.normal=en.getInterpolatedAttribute(r,o,d,c,p,new S),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:d,c,normal:new S,materialIndex:0};en.getNormal(Ta,Aa,Ra,f.normal),h.face=f,h.barycoord=p}return h}class _ extends Le{constructor(t=1,e=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const d=[],c=[],h=[],p=[];let f=0,m=0;v("z","y","x",-1,-1,i,e,t,r,s,0),v("z","y","x",1,-1,i,e,-t,r,s,1),v("x","z","y",1,1,t,i,e,a,r,2),v("x","z","y",1,-1,t,i,-e,a,r,3),v("x","y","z",1,-1,t,e,i,a,s,4),v("x","y","z",-1,-1,t,e,-i,a,s,5),this.setIndex(d),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(p,2));function v(M,x,g,C,A,y,B,D,I,N,T){const b=y/I,U=B/N,Y=y/2,q=B/2,Z=D/2,nt=I+1,$=N+1;let rt=0,J=0;const ht=new S;for(let _t=0;_t<$;_t++){const Rt=_t*U-q;for(let Xt=0;Xt<nt;Xt++){const ie=Xt*b-Y;ht[M]=ie*C,ht[x]=Rt*A,ht[g]=Z,c.push(ht.x,ht.y,ht.z),ht[M]=0,ht[x]=0,ht[g]=D>0?1:-1,h.push(ht.x,ht.y,ht.z),p.push(Xt/I),p.push(1-_t/N),rt+=1}}for(let _t=0;_t<N;_t++)for(let Rt=0;Rt<I;Rt++){const Xt=f+Rt+nt*_t,ie=f+Rt+nt*(_t+1),Q=f+(Rt+1)+nt*(_t+1),ot=f+(Rt+1)+nt*_t;d.push(Xt,ie,ot),d.push(ie,Q,ot),J+=6}o.addGroup(m,J,T),m+=J,f+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Li(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const a=n[e][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=a.clone():Array.isArray(a)?t[e][i]=a.slice():t[e][i]=a}}return t}function De(n){const t={};for(let e=0;e<n.length;e++){const i=Li(n[e]);for(const a in i)t[a]=i[a]}return t}function ql(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Rc(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const Yl={clone:Li,merge:De};var Kl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends Fi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kl,this.fragmentShader=Jl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Li(t.uniforms),this.uniformsGroups=ql(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?e.uniforms[a]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[a]={type:"m4",value:r.toArray()}:e.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Cc extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ln=new S,xo=new Ct,vo=new Ct;class tn extends Cc{constructor(t=50,e=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=br*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(rs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return br*2*Math.atan(Math.tan(rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ln.x,Ln.y).multiplyScalar(-t/Ln.z),Ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ln.x,Ln.y).multiplyScalar(-t/Ln.z)}getViewSize(t,e){return this.getViewBounds(t,xo,vo),e.subVectors(vo,xo)}setViewOffset(t,e,i,a,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(rs*.5*this.fov)/this.zoom,i=2*e,a=this.aspect*i,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const d=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/d,e-=r.offsetY*i/c,a*=r.width/d,i*=r.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const xi=-90,vi=1;class Zl extends Me{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new tn(xi,vi,t,e);a.layers=this.layers,this.add(a);const s=new tn(xi,vi,t,e);s.layers=this.layers,this.add(s);const r=new tn(xi,vi,t,e);r.layers=this.layers,this.add(r);const o=new tn(xi,vi,t,e);o.layers=this.layers,this.add(o);const d=new tn(xi,vi,t,e);d.layers=this.layers,this.add(d);const c=new tn(xi,vi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,a,s,r,o,d]=e;for(const c of e)this.remove(c);if(t===wn)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===Ja)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,d,c,h]=this.children,p=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,a),t.render(e,s),t.setRenderTarget(i,1,a),t.render(e,r),t.setRenderTarget(i,2,a),t.render(e,o),t.setRenderTarget(i,3,a),t.render(e,d),t.setRenderTarget(i,4,a),t.render(e,c),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,a),t.render(e,h),t.setRenderTarget(p,f,m),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Pc extends Ce{constructor(t,e,i,a,s,r,o,d,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ci,super(t,e,i,a,s,r,o,d,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class $l extends ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new Pc(a,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new _(5,5,5),s=new bn({name:"CubemapFromEquirect",uniforms:Li(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ie,blending:Fn});s.uniforms.tEquirect.value=e;const r=new de(a,s),o=e.minFilter;return e.minFilter===ti&&(e.minFilter=ln),new Zl(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,a){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,a);t.setRenderTarget(s)}}const As=new S,jl=new S,Ql=new Ht;class Kn{constructor(t=new S(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,a){return this.normal.set(t,e,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const a=As.subVectors(i,e).cross(jl.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(As),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Ql.getNormalMatrix(t),a=this.coplanarPoint(As).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xn=new zi,Ia=new S;class Fr{constructor(t=new Kn,e=new Kn,i=new Kn,a=new Kn,s=new Kn,r=new Kn){this.planes=[t,e,i,a,s,r]}set(t,e,i,a,s,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=wn){const i=this.planes,a=t.elements,s=a[0],r=a[1],o=a[2],d=a[3],c=a[4],h=a[5],p=a[6],f=a[7],m=a[8],v=a[9],M=a[10],x=a[11],g=a[12],C=a[13],A=a[14],y=a[15];if(i[0].setComponents(d-s,f-c,x-m,y-g).normalize(),i[1].setComponents(d+s,f+c,x+m,y+g).normalize(),i[2].setComponents(d+r,f+h,x+v,y+C).normalize(),i[3].setComponents(d-r,f-h,x-v,y-C).normalize(),i[4].setComponents(d-o,f-p,x-M,y-A).normalize(),e===wn)i[5].setComponents(d+o,f+p,x+M,y+A).normalize();else if(e===Ja)i[5].setComponents(o,p,M,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(t){return Xn.center.set(0,0,0),Xn.radius=.7071067811865476,Xn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(t){const e=this.planes,i=t.center,a=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const a=e[i];if(Ia.x=a.normal.x>0?t.max.x:t.min.x,Ia.y=a.normal.y>0?t.max.y:t.min.y,Ia.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Ia)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Dc(){let n=null,t=!1,e=null,i=null;function a(s,r){e(s,r),i=n.requestAnimationFrame(a)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(a),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function td(n){const t=new WeakMap;function e(o,d){const c=o.array,h=o.usage,p=c.byteLength,f=n.createBuffer();n.bindBuffer(d,f),n.bufferData(d,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,d,c){const h=d.array,p=d.updateRanges;if(n.bindBuffer(c,o),p.length===0)n.bufferSubData(c,0,h);else{p.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<p.length;m++){const v=p[f],M=p[m];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++f,p[f]=M)}p.length=f+1;for(let m=0,v=p.length;m<v;m++){const M=p[m];n.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}d.clearUpdateRanges()}d.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const d=t.get(o);d&&(n.deleteBuffer(d.buffer),t.delete(o))}function r(o,d){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,d));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,d),c.version=o.version}}return{get:a,remove:s,update:r}}class Oi extends Le{constructor(t=1,e=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:a};const s=t/2,r=e/2,o=Math.floor(i),d=Math.floor(a),c=o+1,h=d+1,p=t/o,f=e/d,m=[],v=[],M=[],x=[];for(let g=0;g<h;g++){const C=g*f-r;for(let A=0;A<c;A++){const y=A*p-s;v.push(y,-C,0),M.push(0,0,1),x.push(A/o),x.push(1-g/d)}}for(let g=0;g<d;g++)for(let C=0;C<o;C++){const A=C+c*g,y=C+c*(g+1),B=C+1+c*(g+1),D=C+1+c*g;m.push(A,y,D),m.push(y,B,D)}this.setIndex(m),this.setAttribute("position",new fe(v,3)),this.setAttribute("normal",new fe(M,3)),this.setAttribute("uv",new fe(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oi(t.width,t.height,t.widthSegments,t.heightSegments)}}var ed=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nd=`#ifdef USE_ALPHAHASH
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
#endif`,id=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ad=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,od=`#ifdef USE_AOMAP
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
#endif`,cd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ld=`#ifdef USE_BATCHING
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
#endif`,dd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ud=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pd=`#ifdef USE_IRIDESCENCE
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
#endif`,md=`#ifdef USE_BUMPMAP
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
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Md=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,bd=`#define PI 3.141592653589793
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
} // validated`,Ed=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Td=`vec3 transformedNormal = objectNormal;
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
#endif`,Ad=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Id=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ld=`#ifdef USE_ENVMAP
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
#endif`,Ud=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nd=`#ifdef USE_ENVMAP
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
#endif`,zd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fd=`#ifdef USE_ENVMAP
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
#endif`,Od=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gd=`#ifdef USE_GRADIENTMAP
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
}`,Vd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qd=`uniform bool receiveShadow;
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
#endif`,Yd=`#ifdef USE_ENVMAP
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
#endif`,Kd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$d=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jd=`PhysicalMaterial material;
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
#endif`,Qd=`struct PhysicalMaterial {
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
}`,th=`
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
#endif`,eh=`#if defined( RE_IndirectDiffuse )
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
#endif`,nh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ih=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ah=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ch=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dh=`#if defined( USE_POINTS_UV )
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
#endif`,hh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ph=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gh=`#ifdef USE_MORPHTARGETS
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
#endif`,_h=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sh=`#ifdef USE_NORMALMAP
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
#endif`,bh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Eh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Th=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ah=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ch=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ph=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ih=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Uh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Oh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bh=`float getShadowMask() {
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
}`,kh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hh=`#ifdef USE_SKINNING
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
#endif`,Gh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vh=`#ifdef USE_SKINNING
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
#endif`,Wh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kh=`#ifdef USE_TRANSMISSION
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
#endif`,Jh=`#ifdef USE_TRANSMISSION
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
#endif`,Zh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$h=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eu=`uniform sampler2D t2D;
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
}`,nu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,au=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,su=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ru=`#include <common>
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
}`,ou=`#if DEPTH_PACKING == 3200
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
}`,cu=`#define DISTANCE
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
}`,lu=`#define DISTANCE
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
}`,du=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uu=`uniform float scale;
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
}`,fu=`uniform vec3 diffuse;
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
}`,pu=`#include <common>
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
}`,mu=`uniform vec3 diffuse;
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
}`,gu=`#define LAMBERT
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
}`,_u=`#define LAMBERT
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
}`,xu=`#define MATCAP
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
}`,vu=`#define MATCAP
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
}`,Mu=`#define NORMAL
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
}`,wu=`#define NORMAL
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
}`,yu=`#define PHONG
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
}`,Su=`#define PHONG
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
}`,bu=`#define STANDARD
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
}`,Eu=`#define STANDARD
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
}`,Tu=`#define TOON
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
}`,Au=`#define TOON
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
}`,Ru=`uniform float size;
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
}`,Cu=`uniform vec3 diffuse;
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
}`,Pu=`#include <common>
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
}`,Du=`uniform vec3 color;
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
}`,Iu=`uniform float rotation;
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
}`,Lu=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:ed,alphahash_pars_fragment:nd,alphamap_fragment:id,alphamap_pars_fragment:ad,alphatest_fragment:sd,alphatest_pars_fragment:rd,aomap_fragment:od,aomap_pars_fragment:cd,batching_pars_vertex:ld,batching_vertex:dd,begin_vertex:hd,beginnormal_vertex:ud,bsdfs:fd,iridescence_fragment:pd,bumpmap_pars_fragment:md,clipping_planes_fragment:gd,clipping_planes_pars_fragment:_d,clipping_planes_pars_vertex:xd,clipping_planes_vertex:vd,color_fragment:Md,color_pars_fragment:wd,color_pars_vertex:yd,color_vertex:Sd,common:bd,cube_uv_reflection_fragment:Ed,defaultnormal_vertex:Td,displacementmap_pars_vertex:Ad,displacementmap_vertex:Rd,emissivemap_fragment:Cd,emissivemap_pars_fragment:Pd,colorspace_fragment:Dd,colorspace_pars_fragment:Id,envmap_fragment:Ld,envmap_common_pars_fragment:Ud,envmap_pars_fragment:Nd,envmap_pars_vertex:zd,envmap_physical_pars_fragment:Yd,envmap_vertex:Fd,fog_vertex:Od,fog_pars_vertex:Bd,fog_fragment:kd,fog_pars_fragment:Hd,gradientmap_pars_fragment:Gd,lightmap_pars_fragment:Vd,lights_lambert_fragment:Wd,lights_lambert_pars_fragment:Xd,lights_pars_begin:qd,lights_toon_fragment:Kd,lights_toon_pars_fragment:Jd,lights_phong_fragment:Zd,lights_phong_pars_fragment:$d,lights_physical_fragment:jd,lights_physical_pars_fragment:Qd,lights_fragment_begin:th,lights_fragment_maps:eh,lights_fragment_end:nh,logdepthbuf_fragment:ih,logdepthbuf_pars_fragment:ah,logdepthbuf_pars_vertex:sh,logdepthbuf_vertex:rh,map_fragment:oh,map_pars_fragment:ch,map_particle_fragment:lh,map_particle_pars_fragment:dh,metalnessmap_fragment:hh,metalnessmap_pars_fragment:uh,morphinstance_vertex:fh,morphcolor_vertex:ph,morphnormal_vertex:mh,morphtarget_pars_vertex:gh,morphtarget_vertex:_h,normal_fragment_begin:xh,normal_fragment_maps:vh,normal_pars_fragment:Mh,normal_pars_vertex:wh,normal_vertex:yh,normalmap_pars_fragment:Sh,clearcoat_normal_fragment_begin:bh,clearcoat_normal_fragment_maps:Eh,clearcoat_pars_fragment:Th,iridescence_pars_fragment:Ah,opaque_fragment:Rh,packing:Ch,premultiplied_alpha_fragment:Ph,project_vertex:Dh,dithering_fragment:Ih,dithering_pars_fragment:Lh,roughnessmap_fragment:Uh,roughnessmap_pars_fragment:Nh,shadowmap_pars_fragment:zh,shadowmap_pars_vertex:Fh,shadowmap_vertex:Oh,shadowmask_pars_fragment:Bh,skinbase_vertex:kh,skinning_pars_vertex:Hh,skinning_vertex:Gh,skinnormal_vertex:Vh,specularmap_fragment:Wh,specularmap_pars_fragment:Xh,tonemapping_fragment:qh,tonemapping_pars_fragment:Yh,transmission_fragment:Kh,transmission_pars_fragment:Jh,uv_pars_fragment:Zh,uv_pars_vertex:$h,uv_vertex:jh,worldpos_vertex:Qh,background_vert:tu,background_frag:eu,backgroundCube_vert:nu,backgroundCube_frag:iu,cube_vert:au,cube_frag:su,depth_vert:ru,depth_frag:ou,distanceRGBA_vert:cu,distanceRGBA_frag:lu,equirect_vert:du,equirect_frag:hu,linedashed_vert:uu,linedashed_frag:fu,meshbasic_vert:pu,meshbasic_frag:mu,meshlambert_vert:gu,meshlambert_frag:_u,meshmatcap_vert:xu,meshmatcap_frag:vu,meshnormal_vert:Mu,meshnormal_frag:wu,meshphong_vert:yu,meshphong_frag:Su,meshphysical_vert:bu,meshphysical_frag:Eu,meshtoon_vert:Tu,meshtoon_frag:Au,points_vert:Ru,points_frag:Cu,shadow_vert:Pu,shadow_frag:Du,sprite_vert:Iu,sprite_frag:Lu},lt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},on={basic:{uniforms:De([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:De([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:De([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:De([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:De([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:De([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:De([lt.points,lt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:De([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:De([lt.common,lt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:De([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:De([lt.sprite,lt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:De([lt.common,lt.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:De([lt.lights,lt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};on.physical={uniforms:De([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const La={r:0,b:0,g:0},qn=new un,Uu=new he;function Nu(n,t,e,i,a,s,r){const o=new Vt(0);let d=s===!0?0:1,c,h,p=null,f=0,m=null;function v(C){let A=C.isScene===!0?C.background:null;return A&&A.isTexture&&(A=(C.backgroundBlurriness>0?e:t).get(A)),A}function M(C){let A=!1;const y=v(C);y===null?g(o,d):y&&y.isColor&&(g(y,1),A=!0);const B=n.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,r):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(C,A){const y=v(A);y&&(y.isCubeTexture||y.mapping===Qa)?(h===void 0&&(h=new de(new _(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:Li(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,D,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),qn.copy(A.backgroundRotation),qn.x*=-1,qn.y*=-1,qn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Uu.makeRotationFromEuler(qn)),h.material.toneMapped=Qt.getTransfer(y.colorSpace)!==re,(p!==y||f!==y.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,p=y,f=y.version,m=n.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new de(new Oi(2,2),new bn({name:"BackgroundMaterial",uniforms:Li(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(y.colorSpace)!==re,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(p!==y||f!==y.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,p=y,f=y.version,m=n.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null))}function g(C,A){C.getRGB(La,Rc(n)),i.buffers.color.setClear(La.r,La.g,La.b,A,r)}return{getClearColor:function(){return o},setClearColor:function(C,A=1){o.set(C),d=A,g(o,d)},getClearAlpha:function(){return d},setClearAlpha:function(C){d=C,g(o,d)},render:M,addToRenderList:x}}function zu(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},a=f(null);let s=a,r=!1;function o(b,U,Y,q,Z){let nt=!1;const $=p(q,Y,U);s!==$&&(s=$,c(s.object)),nt=m(b,q,Y,Z),nt&&v(b,q,Y,Z),Z!==null&&t.update(Z,n.ELEMENT_ARRAY_BUFFER),(nt||r)&&(r=!1,y(b,U,Y,q),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function d(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function h(b){return n.deleteVertexArray(b)}function p(b,U,Y){const q=Y.wireframe===!0;let Z=i[b.id];Z===void 0&&(Z={},i[b.id]=Z);let nt=Z[U.id];nt===void 0&&(nt={},Z[U.id]=nt);let $=nt[q];return $===void 0&&($=f(d()),nt[q]=$),$}function f(b){const U=[],Y=[],q=[];for(let Z=0;Z<e;Z++)U[Z]=0,Y[Z]=0,q[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:Y,attributeDivisors:q,object:b,attributes:{},index:null}}function m(b,U,Y,q){const Z=s.attributes,nt=U.attributes;let $=0;const rt=Y.getAttributes();for(const J in rt)if(rt[J].location>=0){const _t=Z[J];let Rt=nt[J];if(Rt===void 0&&(J==="instanceMatrix"&&b.instanceMatrix&&(Rt=b.instanceMatrix),J==="instanceColor"&&b.instanceColor&&(Rt=b.instanceColor)),_t===void 0||_t.attribute!==Rt||Rt&&_t.data!==Rt.data)return!0;$++}return s.attributesNum!==$||s.index!==q}function v(b,U,Y,q){const Z={},nt=U.attributes;let $=0;const rt=Y.getAttributes();for(const J in rt)if(rt[J].location>=0){let _t=nt[J];_t===void 0&&(J==="instanceMatrix"&&b.instanceMatrix&&(_t=b.instanceMatrix),J==="instanceColor"&&b.instanceColor&&(_t=b.instanceColor));const Rt={};Rt.attribute=_t,_t&&_t.data&&(Rt.data=_t.data),Z[J]=Rt,$++}s.attributes=Z,s.attributesNum=$,s.index=q}function M(){const b=s.newAttributes;for(let U=0,Y=b.length;U<Y;U++)b[U]=0}function x(b){g(b,0)}function g(b,U){const Y=s.newAttributes,q=s.enabledAttributes,Z=s.attributeDivisors;Y[b]=1,q[b]===0&&(n.enableVertexAttribArray(b),q[b]=1),Z[b]!==U&&(n.vertexAttribDivisor(b,U),Z[b]=U)}function C(){const b=s.newAttributes,U=s.enabledAttributes;for(let Y=0,q=U.length;Y<q;Y++)U[Y]!==b[Y]&&(n.disableVertexAttribArray(Y),U[Y]=0)}function A(b,U,Y,q,Z,nt,$){$===!0?n.vertexAttribIPointer(b,U,Y,Z,nt):n.vertexAttribPointer(b,U,Y,q,Z,nt)}function y(b,U,Y,q){M();const Z=q.attributes,nt=Y.getAttributes(),$=U.defaultAttributeValues;for(const rt in nt){const J=nt[rt];if(J.location>=0){let ht=Z[rt];if(ht===void 0&&(rt==="instanceMatrix"&&b.instanceMatrix&&(ht=b.instanceMatrix),rt==="instanceColor"&&b.instanceColor&&(ht=b.instanceColor)),ht!==void 0){const _t=ht.normalized,Rt=ht.itemSize,Xt=t.get(ht);if(Xt===void 0)continue;const ie=Xt.buffer,Q=Xt.type,ot=Xt.bytesPerElement,bt=Q===n.INT||Q===n.UNSIGNED_INT||ht.gpuType===Cr;if(ht.isInterleavedBufferAttribute){const ut=ht.data,Lt=ut.stride,zt=ht.offset;if(ut.isInstancedInterleavedBuffer){for(let qt=0;qt<J.locationSize;qt++)g(J.location+qt,ut.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let qt=0;qt<J.locationSize;qt++)x(J.location+qt);n.bindBuffer(n.ARRAY_BUFFER,ie);for(let qt=0;qt<J.locationSize;qt++)A(J.location+qt,Rt/J.locationSize,Q,_t,Lt*ot,(zt+Rt/J.locationSize*qt)*ot,bt)}else{if(ht.isInstancedBufferAttribute){for(let ut=0;ut<J.locationSize;ut++)g(J.location+ut,ht.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let ut=0;ut<J.locationSize;ut++)x(J.location+ut);n.bindBuffer(n.ARRAY_BUFFER,ie);for(let ut=0;ut<J.locationSize;ut++)A(J.location+ut,Rt/J.locationSize,Q,_t,Rt*ot,Rt/J.locationSize*ut*ot,bt)}}else if($!==void 0){const _t=$[rt];if(_t!==void 0)switch(_t.length){case 2:n.vertexAttrib2fv(J.location,_t);break;case 3:n.vertexAttrib3fv(J.location,_t);break;case 4:n.vertexAttrib4fv(J.location,_t);break;default:n.vertexAttrib1fv(J.location,_t)}}}}C()}function B(){N();for(const b in i){const U=i[b];for(const Y in U){const q=U[Y];for(const Z in q)h(q[Z].object),delete q[Z];delete U[Y]}delete i[b]}}function D(b){if(i[b.id]===void 0)return;const U=i[b.id];for(const Y in U){const q=U[Y];for(const Z in q)h(q[Z].object),delete q[Z];delete U[Y]}delete i[b.id]}function I(b){for(const U in i){const Y=i[U];if(Y[b.id]===void 0)continue;const q=Y[b.id];for(const Z in q)h(q[Z].object),delete q[Z];delete Y[b.id]}}function N(){T(),r=!0,s!==a&&(s=a,c(s.object))}function T(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:N,resetDefaultState:T,dispose:B,releaseStatesOfGeometry:D,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:x,disableUnusedAttributes:C}}function Fu(n,t,e){let i;function a(c){i=c}function s(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function r(c,h,p){p!==0&&(n.drawArraysInstanced(i,c,h,p),e.update(h,i,p))}function o(c,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,p);let m=0;for(let v=0;v<p;v++)m+=h[v];e.update(m,i,1)}function d(c,h,p,f){if(p===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)r(c[v],h[v],f[v]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,p);let v=0;for(let M=0;M<p;M++)v+=h[M]*f[M];e.update(v,i,1)}}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=d}function Ou(n,t,e,i){let a;function s(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");a=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(I){return!(I!==nn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const N=I===aa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Sn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==dn&&!N)}function d(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=d(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),C=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),B=v>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:d,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:C,maxVaryings:A,maxFragmentUniforms:y,vertexTextures:B,maxSamples:D}}function Bu(n){const t=this;let e=null,i=0,a=!1,s=!1;const r=new Kn,o=new Ht,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const m=p.length!==0||f||i!==0||a;return a=f,i=p.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){e=h(p,f,0)},this.setState=function(p,f,m){const v=p.clippingPlanes,M=p.clipIntersection,x=p.clipShadows,g=n.get(p);if(!a||v===null||v.length===0||s&&!x)s?h(null):c();else{const C=s?0:i,A=C*4;let y=g.clippingState||null;d.value=y,y=h(v,f,A,m);for(let B=0;B!==A;++B)y[B]=e[B];g.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=C}};function c(){d.value!==e&&(d.value=e,d.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(p,f,m,v){const M=p!==null?p.length:0;let x=null;if(M!==0){if(x=d.value,v!==!0||x===null){const g=m+M*4,C=f.matrixWorldInverse;o.getNormalMatrix(C),(x===null||x.length<g)&&(x=new Float32Array(g));for(let A=0,y=m;A!==M;++A,y+=4)r.copy(p[A]).applyMatrix4(C,o),r.normal.toArray(x,y),x[y+3]=r.constant}d.value=x,d.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,x}}function ku(n){let t=new WeakMap;function e(r,o){return o===Ks?r.mapping=Ci:o===Js&&(r.mapping=Pi),r}function i(r){if(r&&r.isTexture){const o=r.mapping;if(o===Ks||o===Js)if(t.has(r)){const d=t.get(r).texture;return e(d,r.mapping)}else{const d=r.image;if(d&&d.height>0){const c=new $l(d.height);return c.fromEquirectangularTexture(n,r),t.set(r,c),r.addEventListener("dispose",a),e(c.texture,r.mapping)}else return null}}return r}function a(r){const o=r.target;o.removeEventListener("dispose",a);const d=t.get(o);d!==void 0&&(t.delete(o),d.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class Ic extends Cc{constructor(t=-1,e=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-t,r=i+t,o=a+e,d=a-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=h*this.view.offsetY,d=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const bi=4,Mo=[.125,.215,.35,.446,.526,.582],jn=20,Rs=new Ic,wo=new Vt;let Cs=null,Ps=0,Ds=0,Is=!1;const Jn=(1+Math.sqrt(5))/2,Mi=1/Jn,yo=[new S(-Jn,Mi,0),new S(Jn,Mi,0),new S(-Mi,0,Jn),new S(Mi,0,Jn),new S(0,Jn,-Mi),new S(0,Jn,Mi),new S(-1,1,-1),new S(1,1,-1),new S(-1,1,1),new S(1,1,1)];class So{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,a=100){Cs=this._renderer.getRenderTarget(),Ps=this._renderer.getActiveCubeFace(),Ds=this._renderer.getActiveMipmapLevel(),Is=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,a,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=To(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Cs,Ps,Ds),this._renderer.xr.enabled=Is,t.scissorTest=!1,Ua(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ci||t.mapping===Pi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Cs=this._renderer.getRenderTarget(),Ps=this._renderer.getActiveCubeFace(),Ds=this._renderer.getActiveMipmapLevel(),Is=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:aa,format:nn,colorSpace:Ui,depthBuffer:!1},a=bo(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bo(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hu(s)),this._blurMaterial=Gu(s,t,e)}return a}_compileMaterial(t){const e=new de(this._lodPlanes[0],t);this._renderer.compile(e,Rs)}_sceneToCubeUV(t,e,i,a){const o=new tn(90,1,e,i),d=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,f=h.toneMapping;h.getClearColor(wo),h.toneMapping=On,h.autoClear=!1;const m=new zr({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),v=new de(new _,m);let M=!1;const x=t.background;x?x.isColor&&(m.color.copy(x),t.background=null,M=!0):(m.color.copy(wo),M=!0);for(let g=0;g<6;g++){const C=g%3;C===0?(o.up.set(0,d[g],0),o.lookAt(c[g],0,0)):C===1?(o.up.set(0,0,d[g]),o.lookAt(0,c[g],0)):(o.up.set(0,d[g],0),o.lookAt(0,0,c[g]));const A=this._cubeSize;Ua(a,C*A,g>2?A:0,A,A),h.setRenderTarget(a),M&&h.render(v,o),h.render(t,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=p,t.background=x}_textureToCubeUV(t,e){const i=this._renderer,a=t.mapping===Ci||t.mapping===Pi;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=To()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eo());const s=a?this._cubemapMaterial:this._equirectMaterial,r=new de(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const d=this._cubeSize;Ua(e,0,0,3*d,2*d),i.setRenderTarget(e),i.render(r,Rs)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const a=this._lodPlanes.length;for(let s=1;s<a;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=yo[(a-s-1)%yo.length];this._blur(t,s-1,s,r,o)}e.autoClear=i}_blur(t,e,i,a,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,a,"latitudinal",s),this._halfBlur(r,t,i,i,a,"longitudinal",s)}_halfBlur(t,e,i,a,s,r,o){const d=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new de(this._lodPlanes[a],c),f=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*jn-1),M=s/v,x=isFinite(s)?1+Math.floor(h*M):jn;x>jn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${jn}`);const g=[];let C=0;for(let I=0;I<jn;++I){const N=I/M,T=Math.exp(-N*N/2);g.push(T),I===0?C+=T:I<x&&(C+=2*T)}for(let I=0;I<g.length;I++)g[I]=g[I]/C;f.envMap.value=t.texture,f.samples.value=x,f.weights.value=g,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:A}=this;f.dTheta.value=v,f.mipInt.value=A-i;const y=this._sizeLods[a],B=3*y*(a>A-bi?a-A+bi:0),D=4*(this._cubeSize-y);Ua(e,B,D,3*y,2*y),d.setRenderTarget(e),d.render(p,Rs)}}function Hu(n){const t=[],e=[],i=[];let a=n;const s=n-bi+1+Mo.length;for(let r=0;r<s;r++){const o=Math.pow(2,a);e.push(o);let d=1/o;r>n-bi?d=Mo[r-n+bi-1]:r===0&&(d=0),i.push(d);const c=1/(o-2),h=-c,p=1+c,f=[h,h,p,h,p,p,h,h,p,p,h,p],m=6,v=6,M=3,x=2,g=1,C=new Float32Array(M*v*m),A=new Float32Array(x*v*m),y=new Float32Array(g*v*m);for(let D=0;D<m;D++){const I=D%3*2/3-1,N=D>2?0:-1,T=[I,N,0,I+2/3,N,0,I+2/3,N+1,0,I,N,0,I+2/3,N+1,0,I,N+1,0];C.set(T,M*v*D),A.set(f,x*v*D);const b=[D,D,D,D,D,D];y.set(b,g*v*D)}const B=new Le;B.setAttribute("position",new Xe(C,M)),B.setAttribute("uv",new Xe(A,x)),B.setAttribute("faceIndex",new Xe(y,g)),t.push(B),a>bi&&a--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function bo(n,t,e){const i=new ni(n,t,e);return i.texture.mapping=Qa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ua(n,t,e,i,a){n.viewport.set(t,e,i,a),n.scissor.set(t,e,i,a)}function Gu(n,t,e){const i=new Float32Array(jn),a=new S(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Or(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Eo(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Or(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function To(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Or(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Or(){return`

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
	`}function Vu(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const d=o.mapping,c=d===Ks||d===Js,h=d===Ci||d===Pi;if(c||h){let p=t.get(o);const f=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new So(n)),p=c?e.fromEquirectangular(o,p):e.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,t.set(o,p),p.texture;if(p!==void 0)return p.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&a(m)?(e===null&&(e=new So(n)),p=c?e.fromEquirectangular(o):e.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,t.set(o,p),o.addEventListener("dispose",s),p.texture):null}}}return o}function a(o){let d=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&d++;return d===c}function s(o){const d=o.target;d.removeEventListener("dispose",s);const c=t.get(d);c!==void 0&&(t.delete(d),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function Wu(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let a;switch(i){case"WEBGL_depth_texture":a=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=n.getExtension(i)}return t[i]=a,a}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const a=e(i);return a===null&&ji("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function Xu(n,t,e,i){const a={},s=new WeakMap;function r(p){const f=p.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);for(const v in f.morphAttributes){const M=f.morphAttributes[v];for(let x=0,g=M.length;x<g;x++)t.remove(M[x])}f.removeEventListener("dispose",r),delete a[f.id];const m=s.get(f);m&&(t.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(p,f){return a[f.id]===!0||(f.addEventListener("dispose",r),a[f.id]=!0,e.memory.geometries++),f}function d(p){const f=p.attributes;for(const v in f)t.update(f[v],n.ARRAY_BUFFER);const m=p.morphAttributes;for(const v in m){const M=m[v];for(let x=0,g=M.length;x<g;x++)t.update(M[x],n.ARRAY_BUFFER)}}function c(p){const f=[],m=p.index,v=p.attributes.position;let M=0;if(m!==null){const C=m.array;M=m.version;for(let A=0,y=C.length;A<y;A+=3){const B=C[A+0],D=C[A+1],I=C[A+2];f.push(B,D,D,I,I,B)}}else if(v!==void 0){const C=v.array;M=v.version;for(let A=0,y=C.length/3-1;A<y;A+=3){const B=A+0,D=A+1,I=A+2;f.push(B,D,D,I,I,B)}}else return;const x=new(Mc(f)?Ac:Tc)(f,1);x.version=M;const g=s.get(p);g&&t.remove(g),s.set(p,x)}function h(p){const f=s.get(p);if(f){const m=p.index;m!==null&&f.version<m.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:d,getWireframeAttribute:h}}function qu(n,t,e){let i;function a(f){i=f}let s,r;function o(f){s=f.type,r=f.bytesPerElement}function d(f,m){n.drawElements(i,m,s,f*r),e.update(m,i,1)}function c(f,m,v){v!==0&&(n.drawElementsInstanced(i,m,s,f*r,v),e.update(m,i,v))}function h(f,m,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,v);let x=0;for(let g=0;g<v;g++)x+=m[g];e.update(x,i,1)}function p(f,m,v,M){if(v===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let g=0;g<f.length;g++)c(f[g]/r,m[g],M[g]);else{x.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,M,0,v);let g=0;for(let C=0;C<v;C++)g+=m[C]*M[C];e.update(g,i,1)}}this.setMode=a,this.setIndex=o,this.render=d,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function Yu(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function a(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:a,update:i}}function Ku(n,t,e){const i=new WeakMap,a=new _e;function s(r,o,d){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==p){let T=function(){I.dispose(),i.delete(o),o.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],C=o.morphAttributes.color||[];let A=0;m===!0&&(A=1),v===!0&&(A=2),M===!0&&(A=3);let y=o.attributes.position.count*A,B=1;y>t.maxTextureSize&&(B=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const D=new Float32Array(y*B*4*p),I=new yc(D,y,B,p);I.type=dn,I.needsUpdate=!0;const N=A*4;for(let b=0;b<p;b++){const U=x[b],Y=g[b],q=C[b],Z=y*B*4*b;for(let nt=0;nt<U.count;nt++){const $=nt*N;m===!0&&(a.fromBufferAttribute(U,nt),D[Z+$+0]=a.x,D[Z+$+1]=a.y,D[Z+$+2]=a.z,D[Z+$+3]=0),v===!0&&(a.fromBufferAttribute(Y,nt),D[Z+$+4]=a.x,D[Z+$+5]=a.y,D[Z+$+6]=a.z,D[Z+$+7]=0),M===!0&&(a.fromBufferAttribute(q,nt),D[Z+$+8]=a.x,D[Z+$+9]=a.y,D[Z+$+10]=a.z,D[Z+$+11]=q.itemSize===4?a.w:1)}}f={count:p,texture:I,size:new Ct(y,B)},i.set(o,f),o.addEventListener("dispose",T)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let m=0;for(let M=0;M<c.length;M++)m+=c[M];const v=o.morphTargetsRelative?1:1-m;d.getUniforms().setValue(n,"morphTargetBaseInfluence",v),d.getUniforms().setValue(n,"morphTargetInfluences",c)}d.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),d.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function Ju(n,t,e,i){let a=new WeakMap;function s(d){const c=i.render.frame,h=d.geometry,p=t.get(d,h);if(a.get(p)!==c&&(t.update(p),a.set(p,c)),d.isInstancedMesh&&(d.hasEventListener("dispose",o)===!1&&d.addEventListener("dispose",o),a.get(d)!==c&&(e.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&e.update(d.instanceColor,n.ARRAY_BUFFER),a.set(d,c))),d.isSkinnedMesh){const f=d.skeleton;a.get(f)!==c&&(f.update(),a.set(f,c))}return p}function r(){a=new WeakMap}function o(d){const c=d.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:r}}class Lc extends Ce{constructor(t,e,i,a,s,r,o,d,c,h=Ti){if(h!==Ti&&h!==Ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ti&&(i=ei),i===void 0&&h===Ii&&(i=Di),super(null,a,s,r,o,d,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:We,this.minFilter=d!==void 0?d:We,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Uc=new Ce,Ao=new Lc(1,1),Nc=new yc,zc=new Nl,Fc=new Pc,Ro=[],Co=[],Po=new Float32Array(16),Do=new Float32Array(9),Io=new Float32Array(4);function Bi(n,t,e){const i=n[0];if(i<=0||i>0)return n;const a=t*e;let s=Ro[a];if(s===void 0&&(s=new Float32Array(a),Ro[a]=s),t!==0){i.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=e,n[r].toArray(s,o)}return s}function we(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ye(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function es(n,t){let e=Co[t];e===void 0&&(e=new Int32Array(t),Co[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Zu(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function $u(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;n.uniform2fv(this.addr,t),ye(e,t)}}function ju(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;n.uniform3fv(this.addr,t),ye(e,t)}}function Qu(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;n.uniform4fv(this.addr,t),ye(e,t)}}function tf(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(we(e,i))return;Io.set(i),n.uniformMatrix2fv(this.addr,!1,Io),ye(e,i)}}function ef(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(we(e,i))return;Do.set(i),n.uniformMatrix3fv(this.addr,!1,Do),ye(e,i)}}function nf(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(we(e,i))return;Po.set(i),n.uniformMatrix4fv(this.addr,!1,Po),ye(e,i)}}function af(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function sf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;n.uniform2iv(this.addr,t),ye(e,t)}}function rf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;n.uniform3iv(this.addr,t),ye(e,t)}}function of(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;n.uniform4iv(this.addr,t),ye(e,t)}}function cf(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function lf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;n.uniform2uiv(this.addr,t),ye(e,t)}}function df(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;n.uniform3uiv(this.addr,t),ye(e,t)}}function hf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;n.uniform4uiv(this.addr,t),ye(e,t)}}function uf(n,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);let s;this.type===n.SAMPLER_2D_SHADOW?(Ao.compareFunction=vc,s=Ao):s=Uc,e.setTexture2D(t||s,a)}function ff(n,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),e.setTexture3D(t||zc,a)}function pf(n,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),e.setTextureCube(t||Fc,a)}function mf(n,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),e.setTexture2DArray(t||Nc,a)}function gf(n){switch(n){case 5126:return Zu;case 35664:return $u;case 35665:return ju;case 35666:return Qu;case 35674:return tf;case 35675:return ef;case 35676:return nf;case 5124:case 35670:return af;case 35667:case 35671:return sf;case 35668:case 35672:return rf;case 35669:case 35673:return of;case 5125:return cf;case 36294:return lf;case 36295:return df;case 36296:return hf;case 35678:case 36198:case 36298:case 36306:case 35682:return uf;case 35679:case 36299:case 36307:return ff;case 35680:case 36300:case 36308:case 36293:return pf;case 36289:case 36303:case 36311:case 36292:return mf}}function _f(n,t){n.uniform1fv(this.addr,t)}function xf(n,t){const e=Bi(t,this.size,2);n.uniform2fv(this.addr,e)}function vf(n,t){const e=Bi(t,this.size,3);n.uniform3fv(this.addr,e)}function Mf(n,t){const e=Bi(t,this.size,4);n.uniform4fv(this.addr,e)}function wf(n,t){const e=Bi(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function yf(n,t){const e=Bi(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Sf(n,t){const e=Bi(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function bf(n,t){n.uniform1iv(this.addr,t)}function Ef(n,t){n.uniform2iv(this.addr,t)}function Tf(n,t){n.uniform3iv(this.addr,t)}function Af(n,t){n.uniform4iv(this.addr,t)}function Rf(n,t){n.uniform1uiv(this.addr,t)}function Cf(n,t){n.uniform2uiv(this.addr,t)}function Pf(n,t){n.uniform3uiv(this.addr,t)}function Df(n,t){n.uniform4uiv(this.addr,t)}function If(n,t,e){const i=this.cache,a=t.length,s=es(e,a);we(i,s)||(n.uniform1iv(this.addr,s),ye(i,s));for(let r=0;r!==a;++r)e.setTexture2D(t[r]||Uc,s[r])}function Lf(n,t,e){const i=this.cache,a=t.length,s=es(e,a);we(i,s)||(n.uniform1iv(this.addr,s),ye(i,s));for(let r=0;r!==a;++r)e.setTexture3D(t[r]||zc,s[r])}function Uf(n,t,e){const i=this.cache,a=t.length,s=es(e,a);we(i,s)||(n.uniform1iv(this.addr,s),ye(i,s));for(let r=0;r!==a;++r)e.setTextureCube(t[r]||Fc,s[r])}function Nf(n,t,e){const i=this.cache,a=t.length,s=es(e,a);we(i,s)||(n.uniform1iv(this.addr,s),ye(i,s));for(let r=0;r!==a;++r)e.setTexture2DArray(t[r]||Nc,s[r])}function zf(n){switch(n){case 5126:return _f;case 35664:return xf;case 35665:return vf;case 35666:return Mf;case 35674:return wf;case 35675:return yf;case 35676:return Sf;case 5124:case 35670:return bf;case 35667:case 35671:return Ef;case 35668:case 35672:return Tf;case 35669:case 35673:return Af;case 5125:return Rf;case 36294:return Cf;case 36295:return Pf;case 36296:return Df;case 35678:case 36198:case 36298:case 36306:case 35682:return If;case 35679:case 36299:case 36307:return Lf;case 35680:case 36300:case 36308:case 36293:return Uf;case 36289:case 36303:case 36311:case 36292:return Nf}}class Ff{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=gf(e.type)}}class Of{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=zf(e.type)}}class Bf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(t,e[o.id],i)}}}const Ls=/(\w+)(\])?(\[|\.)?/g;function Lo(n,t){n.seq.push(t),n.map[t.id]=t}function kf(n,t,e){const i=n.name,a=i.length;for(Ls.lastIndex=0;;){const s=Ls.exec(i),r=Ls.lastIndex;let o=s[1];const d=s[2]==="]",c=s[3];if(d&&(o=o|0),c===void 0||c==="["&&r+2===a){Lo(e,c===void 0?new Ff(o,n,t):new Of(o,n,t));break}else{let p=e.map[o];p===void 0&&(p=new Bf(o),Lo(e,p)),e=p}}}class Ya{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const s=t.getActiveUniform(e,a),r=t.getUniformLocation(e,s.name);kf(s,r,this)}}setValue(t,e,i,a){const s=this.map[e];s!==void 0&&s.setValue(t,i,a)}setOptional(t,e,i){const a=e[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,e,i,a){for(let s=0,r=e.length;s!==r;++s){const o=e[s],d=i[o.id];d.needsUpdate!==!1&&o.setValue(t,d.value,a)}}static seqWithValue(t,e){const i=[];for(let a=0,s=t.length;a!==s;++a){const r=t[a];r.id in e&&i.push(r)}return i}}function Uo(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Hf=37297;let Gf=0;function Vf(n,t){const e=n.split(`
`),i=[],a=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=a;r<s;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return i.join(`
`)}const No=new Ht;function Wf(n){Qt._getMatrix(No,Qt.workingColorSpace,n);const t=`mat3( ${No.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(n)){case ts:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function zo(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),a=n.getShaderInfoLog(t).trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const r=parseInt(s[1]);return e.toUpperCase()+`

`+a+`

`+Vf(n.getShaderSource(t),r)}else return a}function Xf(n,t){const e=Wf(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function qf(n,t){let e;switch(t){case ll:e="Linear";break;case dl:e="Reinhard";break;case hl:e="Cineon";break;case oc:e="ACESFilmic";break;case fl:e="AgX";break;case pl:e="Neutral";break;case ul:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Na=new S;function Yf(){Qt.getLuminanceCoefficients(Na);const n=Na.x.toFixed(4),t=Na.y.toFixed(4),e=Na.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kf(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qi).join(`
`)}function Jf(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Zf(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=n.getActiveAttrib(t,a),r=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[r]={type:s.type,location:n.getAttribLocation(t,r),locationSize:o}}return e}function Qi(n){return n!==""}function Fo(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Oo(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const $f=/^[ \t]*#include +<([\w\d./]+)>/gm;function Er(n){return n.replace($f,Qf)}const jf=new Map;function Qf(n,t){let e=Gt[t];if(e===void 0){const i=jf.get(t);if(i!==void 0)e=Gt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Er(e)}const tp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bo(n){return n.replace(tp,ep)}function ep(n,t,e,i){let a="";for(let s=parseInt(t);s<parseInt(e);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function ko(n){let t=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function np(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ac?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===sc?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===vn&&(t="SHADOWMAP_TYPE_VSM"),t}function ip(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ci:case Pi:t="ENVMAP_TYPE_CUBE";break;case Qa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ap(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Pi:t="ENVMAP_MODE_REFRACTION";break}return t}function sp(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case rc:t="ENVMAP_BLENDING_MULTIPLY";break;case ol:t="ENVMAP_BLENDING_MIX";break;case cl:t="ENVMAP_BLENDING_ADD";break}return t}function rp(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function op(n,t,e,i){const a=n.getContext(),s=e.defines;let r=e.vertexShader,o=e.fragmentShader;const d=np(e),c=ip(e),h=ap(e),p=sp(e),f=rp(e),m=Kf(e),v=Jf(s),M=a.createProgram();let x,g,C=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Qi).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Qi).join(`
`),g.length>0&&(g+=`
`)):(x=[ko(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qi).join(`
`),g=[ko(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==On?"#define TONE_MAPPING":"",e.toneMapping!==On?Gt.tonemapping_pars_fragment:"",e.toneMapping!==On?qf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,Xf("linearToOutputTexel",e.outputColorSpace),Yf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qi).join(`
`)),r=Er(r),r=Fo(r,e),r=Oo(r,e),o=Er(o),o=Fo(o,e),o=Oo(o,e),r=Bo(r),o=Bo(o),e.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,x=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",e.glslVersion===jr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const A=C+x+r,y=C+g+o,B=Uo(a,a.VERTEX_SHADER,A),D=Uo(a,a.FRAGMENT_SHADER,y);a.attachShader(M,B),a.attachShader(M,D),e.index0AttributeName!==void 0?a.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&a.bindAttribLocation(M,0,"position"),a.linkProgram(M);function I(U){if(n.debug.checkShaderErrors){const Y=a.getProgramInfoLog(M).trim(),q=a.getShaderInfoLog(B).trim(),Z=a.getShaderInfoLog(D).trim();let nt=!0,$=!0;if(a.getProgramParameter(M,a.LINK_STATUS)===!1)if(nt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,M,B,D);else{const rt=zo(a,B,"vertex"),J=zo(a,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(M,a.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+Y+`
`+rt+`
`+J)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(q===""||Z==="")&&($=!1);$&&(U.diagnostics={runnable:nt,programLog:Y,vertexShader:{log:q,prefix:x},fragmentShader:{log:Z,prefix:g}})}a.deleteShader(B),a.deleteShader(D),N=new Ya(a,M),T=Zf(a,M)}let N;this.getUniforms=function(){return N===void 0&&I(this),N};let T;this.getAttributes=function(){return T===void 0&&I(this),T};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=a.getProgramParameter(M,Hf)),b},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gf++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=B,this.fragmentShader=D,this}let cp=0;class lp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(e),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(a)===!1&&(r.add(a),a.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new dp(t),e.set(t,i)),i}}class dp{constructor(t){this.id=cp++,this.code=t,this.usedTimes=0}}function hp(n,t,e,i,a,s,r){const o=new bc,d=new lp,c=new Set,h=[],p=a.logarithmicDepthBuffer,f=a.vertexTextures;let m=a.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return c.add(T),T===0?"uv":`uv${T}`}function x(T,b,U,Y,q){const Z=Y.fog,nt=q.geometry,$=T.isMeshStandardMaterial?Y.environment:null,rt=(T.isMeshStandardMaterial?e:t).get(T.envMap||$),J=rt&&rt.mapping===Qa?rt.image.height:null,ht=v[T.type];T.precision!==null&&(m=a.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const _t=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,Rt=_t!==void 0?_t.length:0;let Xt=0;nt.morphAttributes.position!==void 0&&(Xt=1),nt.morphAttributes.normal!==void 0&&(Xt=2),nt.morphAttributes.color!==void 0&&(Xt=3);let ie,Q,ot,bt;if(ht){const ne=on[ht];ie=ne.vertexShader,Q=ne.fragmentShader}else ie=T.vertexShader,Q=T.fragmentShader,d.update(T),ot=d.getVertexShaderID(T),bt=d.getFragmentShaderID(T);const ut=n.getRenderTarget(),Lt=n.state.buffers.depth.getReversed(),zt=q.isInstancedMesh===!0,qt=q.isBatchedMesh===!0,ue=!!T.map,Zt=!!T.matcap,ge=!!rt,k=!!T.aoMap,Ue=!!T.lightMap,Yt=!!T.bumpMap,Kt=!!T.normalMap,Dt=!!T.displacementMap,oe=!!T.emissiveMap,Pt=!!T.metalnessMap,P=!!T.roughnessMap,w=T.anisotropy>0,V=T.clearcoat>0,tt=T.dispersion>0,it=T.iridescence>0,j=T.sheen>0,Tt=T.transmission>0,ft=w&&!!T.anisotropyMap,xt=V&&!!T.clearcoatMap,$t=V&&!!T.clearcoatNormalMap,at=V&&!!T.clearcoatRoughnessMap,vt=it&&!!T.iridescenceMap,It=it&&!!T.iridescenceThicknessMap,Ut=j&&!!T.sheenColorMap,Mt=j&&!!T.sheenRoughnessMap,Jt=!!T.specularMap,kt=!!T.specularColorMap,ae=!!T.specularIntensityMap,z=Tt&&!!T.transmissionMap,dt=Tt&&!!T.thicknessMap,K=!!T.gradientMap,et=!!T.alphaMap,gt=T.alphaTest>0,pt=!!T.alphaHash,Ot=!!T.extensions;let pe=On;T.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(pe=n.toneMapping);const Se={shaderID:ht,shaderType:T.type,shaderName:T.name,vertexShader:ie,fragmentShader:Q,defines:T.defines,customVertexShaderID:ot,customFragmentShaderID:bt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:qt,batchingColor:qt&&q._colorsTexture!==null,instancing:zt,instancingColor:zt&&q.instanceColor!==null,instancingMorph:zt&&q.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ut===null?n.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Ui,alphaToCoverage:!!T.alphaToCoverage,map:ue,matcap:Zt,envMap:ge,envMapMode:ge&&rt.mapping,envMapCubeUVHeight:J,aoMap:k,lightMap:Ue,bumpMap:Yt,normalMap:Kt,displacementMap:f&&Dt,emissiveMap:oe,normalMapObjectSpace:Kt&&T.normalMapType===xl,normalMapTangentSpace:Kt&&T.normalMapType===xc,metalnessMap:Pt,roughnessMap:P,anisotropy:w,anisotropyMap:ft,clearcoat:V,clearcoatMap:xt,clearcoatNormalMap:$t,clearcoatRoughnessMap:at,dispersion:tt,iridescence:it,iridescenceMap:vt,iridescenceThicknessMap:It,sheen:j,sheenColorMap:Ut,sheenRoughnessMap:Mt,specularMap:Jt,specularColorMap:kt,specularIntensityMap:ae,transmission:Tt,transmissionMap:z,thicknessMap:dt,gradientMap:K,opaque:T.transparent===!1&&T.blending===Ei&&T.alphaToCoverage===!1,alphaMap:et,alphaTest:gt,alphaHash:pt,combine:T.combine,mapUv:ue&&M(T.map.channel),aoMapUv:k&&M(T.aoMap.channel),lightMapUv:Ue&&M(T.lightMap.channel),bumpMapUv:Yt&&M(T.bumpMap.channel),normalMapUv:Kt&&M(T.normalMap.channel),displacementMapUv:Dt&&M(T.displacementMap.channel),emissiveMapUv:oe&&M(T.emissiveMap.channel),metalnessMapUv:Pt&&M(T.metalnessMap.channel),roughnessMapUv:P&&M(T.roughnessMap.channel),anisotropyMapUv:ft&&M(T.anisotropyMap.channel),clearcoatMapUv:xt&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:$t&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:It&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&M(T.sheenRoughnessMap.channel),specularMapUv:Jt&&M(T.specularMap.channel),specularColorMapUv:kt&&M(T.specularColorMap.channel),specularIntensityMapUv:ae&&M(T.specularIntensityMap.channel),transmissionMapUv:z&&M(T.transmissionMap.channel),thicknessMapUv:dt&&M(T.thicknessMap.channel),alphaMapUv:et&&M(T.alphaMap.channel),vertexTangents:!!nt.attributes.tangent&&(Kt||w),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!nt.attributes.uv&&(ue||et),fog:!!Z,useFog:T.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:Lt,skinning:q.isSkinnedMesh===!0,morphTargets:nt.morphAttributes.position!==void 0,morphNormals:nt.morphAttributes.normal!==void 0,morphColors:nt.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:Xt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:pe,decodeVideoTexture:ue&&T.map.isVideoTexture===!0&&Qt.getTransfer(T.map.colorSpace)===re,decodeVideoTextureEmissive:oe&&T.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(T.emissiveMap.colorSpace)===re,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===cn,flipSided:T.side===Ie,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ot&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&T.extensions.multiDraw===!0||qt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Se.vertexUv1s=c.has(1),Se.vertexUv2s=c.has(2),Se.vertexUv3s=c.has(3),c.clear(),Se}function g(T){const b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(const U in T.defines)b.push(U),b.push(T.defines[U]);return T.isRawShaderMaterial===!1&&(C(b,T),A(b,T),b.push(n.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function C(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function A(T,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),T.push(o.mask)}function y(T){const b=v[T.type];let U;if(b){const Y=on[b];U=Yl.clone(Y.uniforms)}else U=T.uniforms;return U}function B(T,b){let U;for(let Y=0,q=h.length;Y<q;Y++){const Z=h[Y];if(Z.cacheKey===b){U=Z,++U.usedTimes;break}}return U===void 0&&(U=new op(n,b,T,s),h.push(U)),U}function D(T){if(--T.usedTimes===0){const b=h.indexOf(T);h[b]=h[h.length-1],h.pop(),T.destroy()}}function I(T){d.remove(T)}function N(){d.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:y,acquireProgram:B,releaseProgram:D,releaseShaderCache:I,programs:h,dispose:N}}function up(){let n=new WeakMap;function t(r){return n.has(r)}function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function i(r){n.delete(r)}function a(r,o,d){n.get(r)[o]=d}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:a,dispose:s}}function fp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Ho(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Go(){const n=[];let t=0;const e=[],i=[],a=[];function s(){t=0,e.length=0,i.length=0,a.length=0}function r(p,f,m,v,M,x){let g=n[t];return g===void 0?(g={id:p.id,object:p,geometry:f,material:m,groupOrder:v,renderOrder:p.renderOrder,z:M,group:x},n[t]=g):(g.id=p.id,g.object=p,g.geometry=f,g.material=m,g.groupOrder=v,g.renderOrder=p.renderOrder,g.z=M,g.group=x),t++,g}function o(p,f,m,v,M,x){const g=r(p,f,m,v,M,x);m.transmission>0?i.push(g):m.transparent===!0?a.push(g):e.push(g)}function d(p,f,m,v,M,x){const g=r(p,f,m,v,M,x);m.transmission>0?i.unshift(g):m.transparent===!0?a.unshift(g):e.unshift(g)}function c(p,f){e.length>1&&e.sort(p||fp),i.length>1&&i.sort(f||Ho),a.length>1&&a.sort(f||Ho)}function h(){for(let p=t,f=n.length;p<f;p++){const m=n[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:a,init:s,push:o,unshift:d,finish:h,sort:c}}function pp(){let n=new WeakMap;function t(i,a){const s=n.get(i);let r;return s===void 0?(r=new Go,n.set(i,[r])):a>=s.length?(r=new Go,s.push(r)):r=s[a],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function mp(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new S,color:new Vt};break;case"SpotLight":e={position:new S,direction:new S,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new S,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new S,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new S,halfWidth:new S,halfHeight:new S};break}return n[t.id]=e,e}}}function gp(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let _p=0;function xp(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function vp(n){const t=new mp,e=gp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new S);const a=new S,s=new he,r=new he;function o(c){let h=0,p=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let m=0,v=0,M=0,x=0,g=0,C=0,A=0,y=0,B=0,D=0,I=0;c.sort(xp);for(let T=0,b=c.length;T<b;T++){const U=c[T],Y=U.color,q=U.intensity,Z=U.distance,nt=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=Y.r*q,p+=Y.g*q,f+=Y.b*q;else if(U.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(U.sh.coefficients[$],q);I++}else if(U.isDirectionalLight){const $=t.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const rt=U.shadow,J=e.get(U);J.shadowIntensity=rt.intensity,J.shadowBias=rt.bias,J.shadowNormalBias=rt.normalBias,J.shadowRadius=rt.radius,J.shadowMapSize=rt.mapSize,i.directionalShadow[m]=J,i.directionalShadowMap[m]=nt,i.directionalShadowMatrix[m]=U.shadow.matrix,C++}i.directional[m]=$,m++}else if(U.isSpotLight){const $=t.get(U);$.position.setFromMatrixPosition(U.matrixWorld),$.color.copy(Y).multiplyScalar(q),$.distance=Z,$.coneCos=Math.cos(U.angle),$.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),$.decay=U.decay,i.spot[M]=$;const rt=U.shadow;if(U.map&&(i.spotLightMap[B]=U.map,B++,rt.updateMatrices(U),U.castShadow&&D++),i.spotLightMatrix[M]=rt.matrix,U.castShadow){const J=e.get(U);J.shadowIntensity=rt.intensity,J.shadowBias=rt.bias,J.shadowNormalBias=rt.normalBias,J.shadowRadius=rt.radius,J.shadowMapSize=rt.mapSize,i.spotShadow[M]=J,i.spotShadowMap[M]=nt,y++}M++}else if(U.isRectAreaLight){const $=t.get(U);$.color.copy(Y).multiplyScalar(q),$.halfWidth.set(U.width*.5,0,0),$.halfHeight.set(0,U.height*.5,0),i.rectArea[x]=$,x++}else if(U.isPointLight){const $=t.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),$.distance=U.distance,$.decay=U.decay,U.castShadow){const rt=U.shadow,J=e.get(U);J.shadowIntensity=rt.intensity,J.shadowBias=rt.bias,J.shadowNormalBias=rt.normalBias,J.shadowRadius=rt.radius,J.shadowMapSize=rt.mapSize,J.shadowCameraNear=rt.camera.near,J.shadowCameraFar=rt.camera.far,i.pointShadow[v]=J,i.pointShadowMap[v]=nt,i.pointShadowMatrix[v]=U.shadow.matrix,A++}i.point[v]=$,v++}else if(U.isHemisphereLight){const $=t.get(U);$.skyColor.copy(U.color).multiplyScalar(q),$.groundColor.copy(U.groundColor).multiplyScalar(q),i.hemi[g]=$,g++}}x>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=f;const N=i.hash;(N.directionalLength!==m||N.pointLength!==v||N.spotLength!==M||N.rectAreaLength!==x||N.hemiLength!==g||N.numDirectionalShadows!==C||N.numPointShadows!==A||N.numSpotShadows!==y||N.numSpotMaps!==B||N.numLightProbes!==I)&&(i.directional.length=m,i.spot.length=M,i.rectArea.length=x,i.point.length=v,i.hemi.length=g,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=C,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=y+B-D,i.spotLightMap.length=B,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=I,N.directionalLength=m,N.pointLength=v,N.spotLength=M,N.rectAreaLength=x,N.hemiLength=g,N.numDirectionalShadows=C,N.numPointShadows=A,N.numSpotShadows=y,N.numSpotMaps=B,N.numLightProbes=I,i.version=_p++)}function d(c,h){let p=0,f=0,m=0,v=0,M=0;const x=h.matrixWorldInverse;for(let g=0,C=c.length;g<C;g++){const A=c[g];if(A.isDirectionalLight){const y=i.directional[p];y.direction.setFromMatrixPosition(A.matrixWorld),a.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(x),p++}else if(A.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(x),y.direction.setFromMatrixPosition(A.matrixWorld),a.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(x),m++}else if(A.isRectAreaLight){const y=i.rectArea[v];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(x),r.identity(),s.copy(A.matrixWorld),s.premultiply(x),r.extractRotation(s),y.halfWidth.set(A.width*.5,0,0),y.halfHeight.set(0,A.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),v++}else if(A.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(x),f++}else if(A.isHemisphereLight){const y=i.hemi[M];y.direction.setFromMatrixPosition(A.matrixWorld),y.direction.transformDirection(x),M++}}}return{setup:o,setupView:d,state:i}}function Vo(n){const t=new vp(n),e=[],i=[];function a(h){c.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function r(h){i.push(h)}function o(){t.setup(e)}function d(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:o,setupLightsView:d,pushLight:s,pushShadow:r}}function Mp(n){let t=new WeakMap;function e(a,s=0){const r=t.get(a);let o;return r===void 0?(o=new Vo(n),t.set(a,[o])):s>=r.length?(o=new Vo(n),r.push(o)):o=r[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class wp extends Fi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=gl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class yp extends Fi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Sp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bp=`uniform sampler2D shadow_pass;
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
}`;function Ep(n,t,e){let i=new Fr;const a=new Ct,s=new Ct,r=new _e,o=new wp({depthPacking:_l}),d=new yp,c={},h=e.maxTextureSize,p={[Bn]:Ie,[Ie]:Bn,[cn]:cn},f=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:Sp,fragmentShader:bp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new Le;v.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new de(v,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ac;let g=this.type;this.render=function(D,I,N){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||D.length===0)return;const T=n.getRenderTarget(),b=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(Fn),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const q=g!==vn&&this.type===vn,Z=g===vn&&this.type!==vn;for(let nt=0,$=D.length;nt<$;nt++){const rt=D[nt],J=rt.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;a.copy(J.mapSize);const ht=J.getFrameExtents();if(a.multiply(ht),s.copy(J.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(s.x=Math.floor(h/ht.x),a.x=s.x*ht.x,J.mapSize.x=s.x),a.y>h&&(s.y=Math.floor(h/ht.y),a.y=s.y*ht.y,J.mapSize.y=s.y)),J.map===null||q===!0||Z===!0){const Rt=this.type!==vn?{minFilter:We,magFilter:We}:{};J.map!==null&&J.map.dispose(),J.map=new ni(a.x,a.y,Rt),J.map.texture.name=rt.name+".shadowMap",J.camera.updateProjectionMatrix()}n.setRenderTarget(J.map),n.clear();const _t=J.getViewportCount();for(let Rt=0;Rt<_t;Rt++){const Xt=J.getViewport(Rt);r.set(s.x*Xt.x,s.y*Xt.y,s.x*Xt.z,s.y*Xt.w),Y.viewport(r),J.updateMatrices(rt,Rt),i=J.getFrustum(),y(I,N,J.camera,rt,this.type)}J.isPointLightShadow!==!0&&this.type===vn&&C(J,N),J.needsUpdate=!1}g=this.type,x.needsUpdate=!1,n.setRenderTarget(T,b,U)};function C(D,I){const N=t.update(M);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,m.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new ni(a.x,a.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(I,null,N,f,M,null),m.uniforms.shadow_pass.value=D.mapPass.texture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(I,null,N,m,M,null)}function A(D,I,N,T){let b=null;const U=N.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(U!==void 0)b=U;else if(b=N.isPointLight===!0?d:o,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const Y=b.uuid,q=I.uuid;let Z=c[Y];Z===void 0&&(Z={},c[Y]=Z);let nt=Z[q];nt===void 0&&(nt=b.clone(),Z[q]=nt,I.addEventListener("dispose",B)),b=nt}if(b.visible=I.visible,b.wireframe=I.wireframe,T===vn?b.side=I.shadowSide!==null?I.shadowSide:I.side:b.side=I.shadowSide!==null?I.shadowSide:p[I.side],b.alphaMap=I.alphaMap,b.alphaTest=I.alphaTest,b.map=I.map,b.clipShadows=I.clipShadows,b.clippingPlanes=I.clippingPlanes,b.clipIntersection=I.clipIntersection,b.displacementMap=I.displacementMap,b.displacementScale=I.displacementScale,b.displacementBias=I.displacementBias,b.wireframeLinewidth=I.wireframeLinewidth,b.linewidth=I.linewidth,N.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const Y=n.properties.get(b);Y.light=N}return b}function y(D,I,N,T,b){if(D.visible===!1)return;if(D.layers.test(I.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&b===vn)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,D.matrixWorld);const q=t.update(D),Z=D.material;if(Array.isArray(Z)){const nt=q.groups;for(let $=0,rt=nt.length;$<rt;$++){const J=nt[$],ht=Z[J.materialIndex];if(ht&&ht.visible){const _t=A(D,ht,T,b);D.onBeforeShadow(n,D,I,N,q,_t,J),n.renderBufferDirect(N,null,q,_t,D,J),D.onAfterShadow(n,D,I,N,q,_t,J)}}}else if(Z.visible){const nt=A(D,Z,T,b);D.onBeforeShadow(n,D,I,N,q,nt,null),n.renderBufferDirect(N,null,q,nt,D,null),D.onAfterShadow(n,D,I,N,q,nt,null)}}const Y=D.children;for(let q=0,Z=Y.length;q<Z;q++)y(Y[q],I,N,T,b)}function B(D){D.target.removeEventListener("dispose",B);for(const N in c){const T=c[N],b=D.target.uuid;b in T&&(T[b].dispose(),delete T[b])}}}const Tp={[Hs]:Gs,[Vs]:qs,[Ws]:Ys,[Ri]:Xs,[Gs]:Hs,[qs]:Vs,[Ys]:Ws,[Xs]:Ri};function Ap(n,t){function e(){let z=!1;const dt=new _e;let K=null;const et=new _e(0,0,0,0);return{setMask:function(gt){K!==gt&&!z&&(n.colorMask(gt,gt,gt,gt),K=gt)},setLocked:function(gt){z=gt},setClear:function(gt,pt,Ot,pe,Se){Se===!0&&(gt*=pe,pt*=pe,Ot*=pe),dt.set(gt,pt,Ot,pe),et.equals(dt)===!1&&(n.clearColor(gt,pt,Ot,pe),et.copy(dt))},reset:function(){z=!1,K=null,et.set(-1,0,0,0)}}}function i(){let z=!1,dt=!1,K=null,et=null,gt=null;return{setReversed:function(pt){if(dt!==pt){const Ot=t.get("EXT_clip_control");dt?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT);const pe=gt;gt=null,this.setClear(pe)}dt=pt},getReversed:function(){return dt},setTest:function(pt){pt?ut(n.DEPTH_TEST):Lt(n.DEPTH_TEST)},setMask:function(pt){K!==pt&&!z&&(n.depthMask(pt),K=pt)},setFunc:function(pt){if(dt&&(pt=Tp[pt]),et!==pt){switch(pt){case Hs:n.depthFunc(n.NEVER);break;case Gs:n.depthFunc(n.ALWAYS);break;case Vs:n.depthFunc(n.LESS);break;case Ri:n.depthFunc(n.LEQUAL);break;case Ws:n.depthFunc(n.EQUAL);break;case Xs:n.depthFunc(n.GEQUAL);break;case qs:n.depthFunc(n.GREATER);break;case Ys:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}et=pt}},setLocked:function(pt){z=pt},setClear:function(pt){gt!==pt&&(dt&&(pt=1-pt),n.clearDepth(pt),gt=pt)},reset:function(){z=!1,K=null,et=null,gt=null,dt=!1}}}function a(){let z=!1,dt=null,K=null,et=null,gt=null,pt=null,Ot=null,pe=null,Se=null;return{setTest:function(ne){z||(ne?ut(n.STENCIL_TEST):Lt(n.STENCIL_TEST))},setMask:function(ne){dt!==ne&&!z&&(n.stencilMask(ne),dt=ne)},setFunc:function(ne,ke,Ke){(K!==ne||et!==ke||gt!==Ke)&&(n.stencilFunc(ne,ke,Ke),K=ne,et=ke,gt=Ke)},setOp:function(ne,ke,Ke){(pt!==ne||Ot!==ke||pe!==Ke)&&(n.stencilOp(ne,ke,Ke),pt=ne,Ot=ke,pe=Ke)},setLocked:function(ne){z=ne},setClear:function(ne){Se!==ne&&(n.clearStencil(ne),Se=ne)},reset:function(){z=!1,dt=null,K=null,et=null,gt=null,pt=null,Ot=null,pe=null,Se=null}}}const s=new e,r=new i,o=new a,d=new WeakMap,c=new WeakMap;let h={},p={},f=new WeakMap,m=[],v=null,M=!1,x=null,g=null,C=null,A=null,y=null,B=null,D=null,I=new Vt(0,0,0),N=0,T=!1,b=null,U=null,Y=null,q=null,Z=null;const nt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,rt=0;const J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(J)[1]),$=rt>=1):J.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),$=rt>=2);let ht=null,_t={};const Rt=n.getParameter(n.SCISSOR_BOX),Xt=n.getParameter(n.VIEWPORT),ie=new _e().fromArray(Rt),Q=new _e().fromArray(Xt);function ot(z,dt,K,et){const gt=new Uint8Array(4),pt=n.createTexture();n.bindTexture(z,pt),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ot=0;Ot<K;Ot++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(dt,0,n.RGBA,1,1,et,0,n.RGBA,n.UNSIGNED_BYTE,gt):n.texImage2D(dt+Ot,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,gt);return pt}const bt={};bt[n.TEXTURE_2D]=ot(n.TEXTURE_2D,n.TEXTURE_2D,1),bt[n.TEXTURE_CUBE_MAP]=ot(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[n.TEXTURE_2D_ARRAY]=ot(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),bt[n.TEXTURE_3D]=ot(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ut(n.DEPTH_TEST),r.setFunc(Ri),Yt(!1),Kt(qr),ut(n.CULL_FACE),k(Fn);function ut(z){h[z]!==!0&&(n.enable(z),h[z]=!0)}function Lt(z){h[z]!==!1&&(n.disable(z),h[z]=!1)}function zt(z,dt){return p[z]!==dt?(n.bindFramebuffer(z,dt),p[z]=dt,z===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=dt),z===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=dt),!0):!1}function qt(z,dt){let K=m,et=!1;if(z){K=f.get(dt),K===void 0&&(K=[],f.set(dt,K));const gt=z.textures;if(K.length!==gt.length||K[0]!==n.COLOR_ATTACHMENT0){for(let pt=0,Ot=gt.length;pt<Ot;pt++)K[pt]=n.COLOR_ATTACHMENT0+pt;K.length=gt.length,et=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,et=!0);et&&n.drawBuffers(K)}function ue(z){return v!==z?(n.useProgram(z),v=z,!0):!1}const Zt={[$n]:n.FUNC_ADD,[Wc]:n.FUNC_SUBTRACT,[Xc]:n.FUNC_REVERSE_SUBTRACT};Zt[qc]=n.MIN,Zt[Yc]=n.MAX;const ge={[Kc]:n.ZERO,[Jc]:n.ONE,[Zc]:n.SRC_COLOR,[Bs]:n.SRC_ALPHA,[nl]:n.SRC_ALPHA_SATURATE,[tl]:n.DST_COLOR,[jc]:n.DST_ALPHA,[$c]:n.ONE_MINUS_SRC_COLOR,[ks]:n.ONE_MINUS_SRC_ALPHA,[el]:n.ONE_MINUS_DST_COLOR,[Qc]:n.ONE_MINUS_DST_ALPHA,[il]:n.CONSTANT_COLOR,[al]:n.ONE_MINUS_CONSTANT_COLOR,[sl]:n.CONSTANT_ALPHA,[rl]:n.ONE_MINUS_CONSTANT_ALPHA};function k(z,dt,K,et,gt,pt,Ot,pe,Se,ne){if(z===Fn){M===!0&&(Lt(n.BLEND),M=!1);return}if(M===!1&&(ut(n.BLEND),M=!0),z!==Vc){if(z!==x||ne!==T){if((g!==$n||y!==$n)&&(n.blendEquation(n.FUNC_ADD),g=$n,y=$n),ne)switch(z){case Ei:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yr:n.blendFunc(n.ONE,n.ONE);break;case Kr:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jr:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Ei:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Kr:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jr:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}C=null,A=null,B=null,D=null,I.set(0,0,0),N=0,x=z,T=ne}return}gt=gt||dt,pt=pt||K,Ot=Ot||et,(dt!==g||gt!==y)&&(n.blendEquationSeparate(Zt[dt],Zt[gt]),g=dt,y=gt),(K!==C||et!==A||pt!==B||Ot!==D)&&(n.blendFuncSeparate(ge[K],ge[et],ge[pt],ge[Ot]),C=K,A=et,B=pt,D=Ot),(pe.equals(I)===!1||Se!==N)&&(n.blendColor(pe.r,pe.g,pe.b,Se),I.copy(pe),N=Se),x=z,T=!1}function Ue(z,dt){z.side===cn?Lt(n.CULL_FACE):ut(n.CULL_FACE);let K=z.side===Ie;dt&&(K=!K),Yt(K),z.blending===Ei&&z.transparent===!1?k(Fn):k(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),r.setFunc(z.depthFunc),r.setTest(z.depthTest),r.setMask(z.depthWrite),s.setMask(z.colorWrite);const et=z.stencilWrite;o.setTest(et),et&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),oe(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ut(n.SAMPLE_ALPHA_TO_COVERAGE):Lt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(z){b!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),b=z)}function Kt(z){z!==Hc?(ut(n.CULL_FACE),z!==U&&(z===qr?n.cullFace(n.BACK):z===Gc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Lt(n.CULL_FACE),U=z}function Dt(z){z!==Y&&($&&n.lineWidth(z),Y=z)}function oe(z,dt,K){z?(ut(n.POLYGON_OFFSET_FILL),(q!==dt||Z!==K)&&(n.polygonOffset(dt,K),q=dt,Z=K)):Lt(n.POLYGON_OFFSET_FILL)}function Pt(z){z?ut(n.SCISSOR_TEST):Lt(n.SCISSOR_TEST)}function P(z){z===void 0&&(z=n.TEXTURE0+nt-1),ht!==z&&(n.activeTexture(z),ht=z)}function w(z,dt,K){K===void 0&&(ht===null?K=n.TEXTURE0+nt-1:K=ht);let et=_t[K];et===void 0&&(et={type:void 0,texture:void 0},_t[K]=et),(et.type!==z||et.texture!==dt)&&(ht!==K&&(n.activeTexture(K),ht=K),n.bindTexture(z,dt||bt[z]),et.type=z,et.texture=dt)}function V(){const z=_t[ht];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function tt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function it(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function j(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Tt(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ft(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function $t(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function at(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function vt(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function It(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ut(z){ie.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),ie.copy(z))}function Mt(z){Q.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),Q.copy(z))}function Jt(z,dt){let K=c.get(dt);K===void 0&&(K=new WeakMap,c.set(dt,K));let et=K.get(z);et===void 0&&(et=n.getUniformBlockIndex(dt,z.name),K.set(z,et))}function kt(z,dt){const et=c.get(dt).get(z);d.get(dt)!==et&&(n.uniformBlockBinding(dt,et,z.__bindingPointIndex),d.set(dt,et))}function ae(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ht=null,_t={},p={},f=new WeakMap,m=[],v=null,M=!1,x=null,g=null,C=null,A=null,y=null,B=null,D=null,I=new Vt(0,0,0),N=0,T=!1,b=null,U=null,Y=null,q=null,Z=null,ie.set(0,0,n.canvas.width,n.canvas.height),Q.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ut,disable:Lt,bindFramebuffer:zt,drawBuffers:qt,useProgram:ue,setBlending:k,setMaterial:Ue,setFlipSided:Yt,setCullFace:Kt,setLineWidth:Dt,setPolygonOffset:oe,setScissorTest:Pt,activeTexture:P,bindTexture:w,unbindTexture:V,compressedTexImage2D:tt,compressedTexImage3D:it,texImage2D:vt,texImage3D:It,updateUBOMapping:Jt,uniformBlockBinding:kt,texStorage2D:$t,texStorage3D:at,texSubImage2D:j,texSubImage3D:Tt,compressedTexSubImage2D:ft,compressedTexSubImage3D:xt,scissor:Ut,viewport:Mt,reset:ae}}function Wo(n,t,e,i){const a=Rp(i);switch(e){case uc:return n*t;case pc:return n*t;case mc:return n*t*2;case Ir:return n*t/a.components*a.byteLength;case Lr:return n*t/a.components*a.byteLength;case gc:return n*t*2/a.components*a.byteLength;case Ur:return n*t*2/a.components*a.byteLength;case fc:return n*t*3/a.components*a.byteLength;case nn:return n*t*4/a.components*a.byteLength;case Nr:return n*t*4/a.components*a.byteLength;case Ga:case Va:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Wa:case Xa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Qs:case er:return Math.max(n,16)*Math.max(t,8)/4;case js:case tr:return Math.max(n,8)*Math.max(t,8)/2;case nr:case ir:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ar:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case sr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case rr:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case or:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case cr:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case lr:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case dr:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case hr:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ur:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case fr:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case pr:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case mr:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case gr:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case _r:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case xr:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case qa:case vr:case Mr:return Math.ceil(n/4)*Math.ceil(t/4)*16;case _c:case wr:return Math.ceil(n/4)*Math.ceil(t/4)*8;case yr:case Sr:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Rp(n){switch(n){case Sn:case lc:return{byteLength:1,components:1};case na:case dc:case aa:return{byteLength:2,components:1};case Pr:case Dr:return{byteLength:2,components:4};case ei:case Cr:case dn:return{byteLength:4,components:1};case hc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Cp(n,t,e,i,a,s,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ct,h=new WeakMap;let p;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,w){return m?new OffscreenCanvas(P,w):Za("canvas")}function M(P,w,V){let tt=1;const it=Pt(P);if((it.width>V||it.height>V)&&(tt=V/Math.max(it.width,it.height)),tt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const j=Math.floor(tt*it.width),Tt=Math.floor(tt*it.height);p===void 0&&(p=v(j,Tt));const ft=w?v(j,Tt):p;return ft.width=j,ft.height=Tt,ft.getContext("2d").drawImage(P,0,0,j,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+j+"x"+Tt+")."),ft}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),P;return P}function x(P){return P.generateMipmaps}function g(P){n.generateMipmap(P)}function C(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(P,w,V,tt,it=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let j=w;if(w===n.RED&&(V===n.FLOAT&&(j=n.R32F),V===n.HALF_FLOAT&&(j=n.R16F),V===n.UNSIGNED_BYTE&&(j=n.R8)),w===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.R8UI),V===n.UNSIGNED_SHORT&&(j=n.R16UI),V===n.UNSIGNED_INT&&(j=n.R32UI),V===n.BYTE&&(j=n.R8I),V===n.SHORT&&(j=n.R16I),V===n.INT&&(j=n.R32I)),w===n.RG&&(V===n.FLOAT&&(j=n.RG32F),V===n.HALF_FLOAT&&(j=n.RG16F),V===n.UNSIGNED_BYTE&&(j=n.RG8)),w===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.RG8UI),V===n.UNSIGNED_SHORT&&(j=n.RG16UI),V===n.UNSIGNED_INT&&(j=n.RG32UI),V===n.BYTE&&(j=n.RG8I),V===n.SHORT&&(j=n.RG16I),V===n.INT&&(j=n.RG32I)),w===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.RGB8UI),V===n.UNSIGNED_SHORT&&(j=n.RGB16UI),V===n.UNSIGNED_INT&&(j=n.RGB32UI),V===n.BYTE&&(j=n.RGB8I),V===n.SHORT&&(j=n.RGB16I),V===n.INT&&(j=n.RGB32I)),w===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),V===n.UNSIGNED_INT&&(j=n.RGBA32UI),V===n.BYTE&&(j=n.RGBA8I),V===n.SHORT&&(j=n.RGBA16I),V===n.INT&&(j=n.RGBA32I)),w===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),w===n.RGBA){const Tt=it?ts:Qt.getTransfer(tt);V===n.FLOAT&&(j=n.RGBA32F),V===n.HALF_FLOAT&&(j=n.RGBA16F),V===n.UNSIGNED_BYTE&&(j=Tt===re?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function y(P,w){let V;return P?w===null||w===ei||w===Di?V=n.DEPTH24_STENCIL8:w===dn?V=n.DEPTH32F_STENCIL8:w===na&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ei||w===Di?V=n.DEPTH_COMPONENT24:w===dn?V=n.DEPTH_COMPONENT32F:w===na&&(V=n.DEPTH_COMPONENT16),V}function B(P,w){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==We&&P.minFilter!==ln?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function D(P){const w=P.target;w.removeEventListener("dispose",D),N(w),w.isVideoTexture&&h.delete(w)}function I(P){const w=P.target;w.removeEventListener("dispose",I),b(w)}function N(P){const w=i.get(P);if(w.__webglInit===void 0)return;const V=P.source,tt=f.get(V);if(tt){const it=tt[w.__cacheKey];it.usedTimes--,it.usedTimes===0&&T(P),Object.keys(tt).length===0&&f.delete(V)}i.remove(P)}function T(P){const w=i.get(P);n.deleteTexture(w.__webglTexture);const V=P.source,tt=f.get(V);delete tt[w.__cacheKey],r.memory.textures--}function b(P){const w=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(w.__webglFramebuffer[tt]))for(let it=0;it<w.__webglFramebuffer[tt].length;it++)n.deleteFramebuffer(w.__webglFramebuffer[tt][it]);else n.deleteFramebuffer(w.__webglFramebuffer[tt]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[tt])}else{if(Array.isArray(w.__webglFramebuffer))for(let tt=0;tt<w.__webglFramebuffer.length;tt++)n.deleteFramebuffer(w.__webglFramebuffer[tt]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let tt=0;tt<w.__webglColorRenderbuffer.length;tt++)w.__webglColorRenderbuffer[tt]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[tt]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const V=P.textures;for(let tt=0,it=V.length;tt<it;tt++){const j=i.get(V[tt]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),r.memory.textures--),i.remove(V[tt])}i.remove(P)}let U=0;function Y(){U=0}function q(){const P=U;return P>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+a.maxTextures),U+=1,P}function Z(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function nt(P,w){const V=i.get(P);if(P.isVideoTexture&&Dt(P),P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){const tt=P.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(V,P,w);return}}e.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+w)}function $(P,w){const V=i.get(P);if(P.version>0&&V.__version!==P.version){Q(V,P,w);return}e.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+w)}function rt(P,w){const V=i.get(P);if(P.version>0&&V.__version!==P.version){Q(V,P,w);return}e.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+w)}function J(P,w){const V=i.get(P);if(P.version>0&&V.__version!==P.version){ot(V,P,w);return}e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+w)}const ht={[Zs]:n.REPEAT,[Qn]:n.CLAMP_TO_EDGE,[$s]:n.MIRRORED_REPEAT},_t={[We]:n.NEAREST,[ml]:n.NEAREST_MIPMAP_NEAREST,[ma]:n.NEAREST_MIPMAP_LINEAR,[ln]:n.LINEAR,[ss]:n.LINEAR_MIPMAP_NEAREST,[ti]:n.LINEAR_MIPMAP_LINEAR},Rt={[vl]:n.NEVER,[El]:n.ALWAYS,[Ml]:n.LESS,[vc]:n.LEQUAL,[wl]:n.EQUAL,[bl]:n.GEQUAL,[yl]:n.GREATER,[Sl]:n.NOTEQUAL};function Xt(P,w){if(w.type===dn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===ln||w.magFilter===ss||w.magFilter===ma||w.magFilter===ti||w.minFilter===ln||w.minFilter===ss||w.minFilter===ma||w.minFilter===ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,ht[w.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,ht[w.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,ht[w.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,_t[w.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,_t[w.minFilter]),w.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Rt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===We||w.minFilter!==ma&&w.minFilter!==ti||w.type===dn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");n.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function ie(P,w){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",D));const tt=w.source;let it=f.get(tt);it===void 0&&(it={},f.set(tt,it));const j=Z(w);if(j!==P.__cacheKey){it[j]===void 0&&(it[j]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,V=!0),it[j].usedTimes++;const Tt=it[P.__cacheKey];Tt!==void 0&&(it[P.__cacheKey].usedTimes--,Tt.usedTimes===0&&T(w)),P.__cacheKey=j,P.__webglTexture=it[j].texture}return V}function Q(P,w,V){let tt=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(tt=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(tt=n.TEXTURE_3D);const it=ie(P,w),j=w.source;e.bindTexture(tt,P.__webglTexture,n.TEXTURE0+V);const Tt=i.get(j);if(j.version!==Tt.__version||it===!0){e.activeTexture(n.TEXTURE0+V);const ft=Qt.getPrimaries(Qt.workingColorSpace),xt=w.colorSpace===zn?null:Qt.getPrimaries(w.colorSpace),$t=w.colorSpace===zn||ft===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let at=M(w.image,!1,a.maxTextureSize);at=oe(w,at);const vt=s.convert(w.format,w.colorSpace),It=s.convert(w.type);let Ut=A(w.internalFormat,vt,It,w.colorSpace,w.isVideoTexture);Xt(tt,w);let Mt;const Jt=w.mipmaps,kt=w.isVideoTexture!==!0,ae=Tt.__version===void 0||it===!0,z=j.dataReady,dt=B(w,at);if(w.isDepthTexture)Ut=y(w.format===Ii,w.type),ae&&(kt?e.texStorage2D(n.TEXTURE_2D,1,Ut,at.width,at.height):e.texImage2D(n.TEXTURE_2D,0,Ut,at.width,at.height,0,vt,It,null));else if(w.isDataTexture)if(Jt.length>0){kt&&ae&&e.texStorage2D(n.TEXTURE_2D,dt,Ut,Jt[0].width,Jt[0].height);for(let K=0,et=Jt.length;K<et;K++)Mt=Jt[K],kt?z&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,Mt.width,Mt.height,vt,It,Mt.data):e.texImage2D(n.TEXTURE_2D,K,Ut,Mt.width,Mt.height,0,vt,It,Mt.data);w.generateMipmaps=!1}else kt?(ae&&e.texStorage2D(n.TEXTURE_2D,dt,Ut,at.width,at.height),z&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,at.width,at.height,vt,It,at.data)):e.texImage2D(n.TEXTURE_2D,0,Ut,at.width,at.height,0,vt,It,at.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){kt&&ae&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,Ut,Jt[0].width,Jt[0].height,at.depth);for(let K=0,et=Jt.length;K<et;K++)if(Mt=Jt[K],w.format!==nn)if(vt!==null)if(kt){if(z)if(w.layerUpdates.size>0){const gt=Wo(Mt.width,Mt.height,w.format,w.type);for(const pt of w.layerUpdates){const Ot=Mt.data.subarray(pt*gt/Mt.data.BYTES_PER_ELEMENT,(pt+1)*gt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,pt,Mt.width,Mt.height,1,vt,Ot)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Mt.width,Mt.height,at.depth,vt,Mt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,Ut,Mt.width,Mt.height,at.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?z&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Mt.width,Mt.height,at.depth,vt,It,Mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,K,Ut,Mt.width,Mt.height,at.depth,0,vt,It,Mt.data)}else{kt&&ae&&e.texStorage2D(n.TEXTURE_2D,dt,Ut,Jt[0].width,Jt[0].height);for(let K=0,et=Jt.length;K<et;K++)Mt=Jt[K],w.format!==nn?vt!==null?kt?z&&e.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,Mt.width,Mt.height,vt,Mt.data):e.compressedTexImage2D(n.TEXTURE_2D,K,Ut,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?z&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,Mt.width,Mt.height,vt,It,Mt.data):e.texImage2D(n.TEXTURE_2D,K,Ut,Mt.width,Mt.height,0,vt,It,Mt.data)}else if(w.isDataArrayTexture)if(kt){if(ae&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,Ut,at.width,at.height,at.depth),z)if(w.layerUpdates.size>0){const K=Wo(at.width,at.height,w.format,w.type);for(const et of w.layerUpdates){const gt=at.data.subarray(et*K/at.data.BYTES_PER_ELEMENT,(et+1)*K/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,et,at.width,at.height,1,vt,It,gt)}w.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,vt,It,at.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ut,at.width,at.height,at.depth,0,vt,It,at.data);else if(w.isData3DTexture)kt?(ae&&e.texStorage3D(n.TEXTURE_3D,dt,Ut,at.width,at.height,at.depth),z&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,vt,It,at.data)):e.texImage3D(n.TEXTURE_3D,0,Ut,at.width,at.height,at.depth,0,vt,It,at.data);else if(w.isFramebufferTexture){if(ae)if(kt)e.texStorage2D(n.TEXTURE_2D,dt,Ut,at.width,at.height);else{let K=at.width,et=at.height;for(let gt=0;gt<dt;gt++)e.texImage2D(n.TEXTURE_2D,gt,Ut,K,et,0,vt,It,null),K>>=1,et>>=1}}else if(Jt.length>0){if(kt&&ae){const K=Pt(Jt[0]);e.texStorage2D(n.TEXTURE_2D,dt,Ut,K.width,K.height)}for(let K=0,et=Jt.length;K<et;K++)Mt=Jt[K],kt?z&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,vt,It,Mt):e.texImage2D(n.TEXTURE_2D,K,Ut,vt,It,Mt);w.generateMipmaps=!1}else if(kt){if(ae){const K=Pt(at);e.texStorage2D(n.TEXTURE_2D,dt,Ut,K.width,K.height)}z&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,vt,It,at)}else e.texImage2D(n.TEXTURE_2D,0,Ut,vt,It,at);x(w)&&g(tt),Tt.__version=j.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function ot(P,w,V){if(w.image.length!==6)return;const tt=ie(P,w),it=w.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+V);const j=i.get(it);if(it.version!==j.__version||tt===!0){e.activeTexture(n.TEXTURE0+V);const Tt=Qt.getPrimaries(Qt.workingColorSpace),ft=w.colorSpace===zn?null:Qt.getPrimaries(w.colorSpace),xt=w.colorSpace===zn||Tt===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const $t=w.isCompressedTexture||w.image[0].isCompressedTexture,at=w.image[0]&&w.image[0].isDataTexture,vt=[];for(let et=0;et<6;et++)!$t&&!at?vt[et]=M(w.image[et],!0,a.maxCubemapSize):vt[et]=at?w.image[et].image:w.image[et],vt[et]=oe(w,vt[et]);const It=vt[0],Ut=s.convert(w.format,w.colorSpace),Mt=s.convert(w.type),Jt=A(w.internalFormat,Ut,Mt,w.colorSpace),kt=w.isVideoTexture!==!0,ae=j.__version===void 0||tt===!0,z=it.dataReady;let dt=B(w,It);Xt(n.TEXTURE_CUBE_MAP,w);let K;if($t){kt&&ae&&e.texStorage2D(n.TEXTURE_CUBE_MAP,dt,Jt,It.width,It.height);for(let et=0;et<6;et++){K=vt[et].mipmaps;for(let gt=0;gt<K.length;gt++){const pt=K[gt];w.format!==nn?Ut!==null?kt?z&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt,0,0,pt.width,pt.height,Ut,pt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt,Jt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt,0,0,pt.width,pt.height,Ut,Mt,pt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt,Jt,pt.width,pt.height,0,Ut,Mt,pt.data)}}}else{if(K=w.mipmaps,kt&&ae){K.length>0&&dt++;const et=Pt(vt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,dt,Jt,et.width,et.height)}for(let et=0;et<6;et++)if(at){kt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,vt[et].width,vt[et].height,Ut,Mt,vt[et].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Jt,vt[et].width,vt[et].height,0,Ut,Mt,vt[et].data);for(let gt=0;gt<K.length;gt++){const Ot=K[gt].image[et].image;kt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt+1,0,0,Ot.width,Ot.height,Ut,Mt,Ot.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt+1,Jt,Ot.width,Ot.height,0,Ut,Mt,Ot.data)}}else{kt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Ut,Mt,vt[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Jt,Ut,Mt,vt[et]);for(let gt=0;gt<K.length;gt++){const pt=K[gt];kt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt+1,0,0,Ut,Mt,pt.image[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt+1,Jt,Ut,Mt,pt.image[et])}}}x(w)&&g(n.TEXTURE_CUBE_MAP),j.__version=it.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function bt(P,w,V,tt,it,j){const Tt=s.convert(V.format,V.colorSpace),ft=s.convert(V.type),xt=A(V.internalFormat,Tt,ft,V.colorSpace),$t=i.get(w),at=i.get(V);if(at.__renderTarget=w,!$t.__hasExternalTextures){const vt=Math.max(1,w.width>>j),It=Math.max(1,w.height>>j);it===n.TEXTURE_3D||it===n.TEXTURE_2D_ARRAY?e.texImage3D(it,j,xt,vt,It,w.depth,0,Tt,ft,null):e.texImage2D(it,j,xt,vt,It,0,Tt,ft,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),Kt(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,it,at.__webglTexture,0,Yt(w)):(it===n.TEXTURE_2D||it>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,tt,it,at.__webglTexture,j),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(P,w,V){if(n.bindRenderbuffer(n.RENDERBUFFER,P),w.depthBuffer){const tt=w.depthTexture,it=tt&&tt.isDepthTexture?tt.type:null,j=y(w.stencilBuffer,it),Tt=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=Yt(w);Kt(w)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ft,j,w.width,w.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,ft,j,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,j,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Tt,n.RENDERBUFFER,P)}else{const tt=w.textures;for(let it=0;it<tt.length;it++){const j=tt[it],Tt=s.convert(j.format,j.colorSpace),ft=s.convert(j.type),xt=A(j.internalFormat,Tt,ft,j.colorSpace),$t=Yt(w);V&&Kt(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,$t,xt,w.width,w.height):Kt(w)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$t,xt,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,xt,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Lt(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=i.get(w.depthTexture);tt.__renderTarget=w,(!tt.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),nt(w.depthTexture,0);const it=tt.__webglTexture,j=Yt(w);if(w.depthTexture.format===Ti)Kt(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,it,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,it,0);else if(w.depthTexture.format===Ii)Kt(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,it,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function zt(P){const w=i.get(P),V=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const tt=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),tt){const it=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,tt.removeEventListener("dispose",it)};tt.addEventListener("dispose",it),w.__depthDisposeCallback=it}w.__boundDepthTexture=tt}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Lt(w.__webglFramebuffer,P)}else if(V){w.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[tt]),w.__webglDepthbuffer[tt]===void 0)w.__webglDepthbuffer[tt]=n.createRenderbuffer(),ut(w.__webglDepthbuffer[tt],P,!1);else{const it=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=w.__webglDepthbuffer[tt];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,it,n.RENDERBUFFER,j)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),ut(w.__webglDepthbuffer,P,!1);else{const tt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,it=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,it),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,it)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function qt(P,w,V){const tt=i.get(P);w!==void 0&&bt(tt.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&zt(P)}function ue(P){const w=P.texture,V=i.get(P),tt=i.get(w);P.addEventListener("dispose",I);const it=P.textures,j=P.isWebGLCubeRenderTarget===!0,Tt=it.length>1;if(Tt||(tt.__webglTexture===void 0&&(tt.__webglTexture=n.createTexture()),tt.__version=w.version,r.memory.textures++),j){V.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer[ft]=[];for(let xt=0;xt<w.mipmaps.length;xt++)V.__webglFramebuffer[ft][xt]=n.createFramebuffer()}else V.__webglFramebuffer[ft]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer=[];for(let ft=0;ft<w.mipmaps.length;ft++)V.__webglFramebuffer[ft]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Tt)for(let ft=0,xt=it.length;ft<xt;ft++){const $t=i.get(it[ft]);$t.__webglTexture===void 0&&($t.__webglTexture=n.createTexture(),r.memory.textures++)}if(P.samples>0&&Kt(P)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ft=0;ft<it.length;ft++){const xt=it[ft];V.__webglColorRenderbuffer[ft]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[ft]);const $t=s.convert(xt.format,xt.colorSpace),at=s.convert(xt.type),vt=A(xt.internalFormat,$t,at,xt.colorSpace,P.isXRRenderTarget===!0),It=Yt(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,It,vt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,V.__webglColorRenderbuffer[ft])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),ut(V.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture),Xt(n.TEXTURE_CUBE_MAP,w);for(let ft=0;ft<6;ft++)if(w.mipmaps&&w.mipmaps.length>0)for(let xt=0;xt<w.mipmaps.length;xt++)bt(V.__webglFramebuffer[ft][xt],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,xt);else bt(V.__webglFramebuffer[ft],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);x(w)&&g(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let ft=0,xt=it.length;ft<xt;ft++){const $t=it[ft],at=i.get($t);e.bindTexture(n.TEXTURE_2D,at.__webglTexture),Xt(n.TEXTURE_2D,$t),bt(V.__webglFramebuffer,P,$t,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,0),x($t)&&g(n.TEXTURE_2D)}e.unbindTexture()}else{let ft=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ft=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ft,tt.__webglTexture),Xt(ft,w),w.mipmaps&&w.mipmaps.length>0)for(let xt=0;xt<w.mipmaps.length;xt++)bt(V.__webglFramebuffer[xt],P,w,n.COLOR_ATTACHMENT0,ft,xt);else bt(V.__webglFramebuffer,P,w,n.COLOR_ATTACHMENT0,ft,0);x(w)&&g(ft),e.unbindTexture()}P.depthBuffer&&zt(P)}function Zt(P){const w=P.textures;for(let V=0,tt=w.length;V<tt;V++){const it=w[V];if(x(it)){const j=C(P),Tt=i.get(it).__webglTexture;e.bindTexture(j,Tt),g(j),e.unbindTexture()}}}const ge=[],k=[];function Ue(P){if(P.samples>0){if(Kt(P)===!1){const w=P.textures,V=P.width,tt=P.height;let it=n.COLOR_BUFFER_BIT;const j=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Tt=i.get(P),ft=w.length>1;if(ft)for(let xt=0;xt<w.length;xt++)e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let xt=0;xt<w.length;xt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(it|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(it|=n.STENCIL_BUFFER_BIT)),ft){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[xt]);const $t=i.get(w[xt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$t,0)}n.blitFramebuffer(0,0,V,tt,0,0,V,tt,it,n.NEAREST),d===!0&&(ge.length=0,k.length=0,ge.push(n.COLOR_ATTACHMENT0+xt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ge.push(j),k.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,k)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ge))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ft)for(let xt=0;xt<w.length;xt++){e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[xt]);const $t=i.get(w[xt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,$t,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&d){const w=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Yt(P){return Math.min(a.maxSamples,P.samples)}function Kt(P){const w=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Dt(P){const w=r.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function oe(P,w){const V=P.colorSpace,tt=P.format,it=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==Ui&&V!==zn&&(Qt.getTransfer(V)===re?(tt!==nn||it!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),w}function Pt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=Y,this.setTexture2D=nt,this.setTexture2DArray=$,this.setTexture3D=rt,this.setTextureCube=J,this.rebindTextures=qt,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=Kt}function Pp(n,t){function e(i,a=zn){let s;const r=Qt.getTransfer(a);if(i===Sn)return n.UNSIGNED_BYTE;if(i===Pr)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Dr)return n.UNSIGNED_SHORT_5_5_5_1;if(i===hc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===lc)return n.BYTE;if(i===dc)return n.SHORT;if(i===na)return n.UNSIGNED_SHORT;if(i===Cr)return n.INT;if(i===ei)return n.UNSIGNED_INT;if(i===dn)return n.FLOAT;if(i===aa)return n.HALF_FLOAT;if(i===uc)return n.ALPHA;if(i===fc)return n.RGB;if(i===nn)return n.RGBA;if(i===pc)return n.LUMINANCE;if(i===mc)return n.LUMINANCE_ALPHA;if(i===Ti)return n.DEPTH_COMPONENT;if(i===Ii)return n.DEPTH_STENCIL;if(i===Ir)return n.RED;if(i===Lr)return n.RED_INTEGER;if(i===gc)return n.RG;if(i===Ur)return n.RG_INTEGER;if(i===Nr)return n.RGBA_INTEGER;if(i===Ga||i===Va||i===Wa||i===Xa)if(r===re)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ga)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ga)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Va)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===js||i===Qs||i===tr||i===er)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===js)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===tr)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===er)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===nr||i===ir||i===ar)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===nr||i===ir)return r===re?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ar)return r===re?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===sr||i===rr||i===or||i===cr||i===lr||i===dr||i===hr||i===ur||i===fr||i===pr||i===mr||i===gr||i===_r||i===xr)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===sr)return r===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rr)return r===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===or)return r===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===cr)return r===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lr)return r===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===dr)return r===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===hr)return r===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ur)return r===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fr)return r===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===pr)return r===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===mr)return r===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gr)return r===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_r)return r===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xr)return r===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===qa||i===vr||i===Mr)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===qa)return r===re?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vr)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Mr)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_c||i===wr||i===yr||i===Sr)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===qa)return s.COMPRESSED_RED_RGTC1_EXT;if(i===wr)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Sr)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Di?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Dp extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class G extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ip={type:"move"};class Us{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new G,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new G,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new G,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let a=null,s=null,r=null;const o=this._targetRay,d=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const M of t.hand.values()){const x=e.getJointPose(M,i),g=this._getHandJoint(c,M);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],f=h.position.distanceTo(p.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(d.matrix.fromArray(s.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,s.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(s.linearVelocity)):d.hasLinearVelocity=!1,s.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(s.angularVelocity)):d.hasAngularVelocity=!1));o!==null&&(a=e.getPose(t.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ip)))}return o!==null&&(o.visible=a!==null),d!==null&&(d.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new G;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Lp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Up=`
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

}`;class Np{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const a=new Ce,s=t.properties.get(a);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new bn({vertexShader:Lp,fragmentShader:Up,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new de(new Oi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zp extends Ni{constructor(t,e){super();const i=this;let a=null,s=1,r=null,o="local-floor",d=1,c=null,h=null,p=null,f=null,m=null,v=null;const M=new Np,x=e.getContextAttributes();let g=null,C=null;const A=[],y=[],B=new Ct;let D=null;const I=new tn;I.viewport=new _e;const N=new tn;N.viewport=new _e;const T=[I,N],b=new Dp;let U=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ot=A[Q];return ot===void 0&&(ot=new Us,A[Q]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(Q){let ot=A[Q];return ot===void 0&&(ot=new Us,A[Q]=ot),ot.getGripSpace()},this.getHand=function(Q){let ot=A[Q];return ot===void 0&&(ot=new Us,A[Q]=ot),ot.getHandSpace()};function q(Q){const ot=y.indexOf(Q.inputSource);if(ot===-1)return;const bt=A[ot];bt!==void 0&&(bt.update(Q.inputSource,Q.frame,c||r),bt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Z(){a.removeEventListener("select",q),a.removeEventListener("selectstart",q),a.removeEventListener("selectend",q),a.removeEventListener("squeeze",q),a.removeEventListener("squeezestart",q),a.removeEventListener("squeezeend",q),a.removeEventListener("end",Z),a.removeEventListener("inputsourceschange",nt);for(let Q=0;Q<A.length;Q++){const ot=y[Q];ot!==null&&(y[Q]=null,A[Q].disconnect(ot))}U=null,Y=null,M.reset(),t.setRenderTarget(g),m=null,f=null,p=null,a=null,C=null,ie.stop(),i.isPresenting=!1,t.setPixelRatio(D),t.setSize(B.width,B.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=async function(Q){if(a=Q,a!==null){if(g=t.getRenderTarget(),a.addEventListener("select",q),a.addEventListener("selectstart",q),a.addEventListener("selectend",q),a.addEventListener("squeeze",q),a.addEventListener("squeezestart",q),a.addEventListener("squeezeend",q),a.addEventListener("end",Z),a.addEventListener("inputsourceschange",nt),x.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(B),a.renderState.layers===void 0){const ot={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(a,e,ot),a.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),C=new ni(m.framebufferWidth,m.framebufferHeight,{format:nn,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let ot=null,bt=null,ut=null;x.depth&&(ut=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=x.stencil?Ii:Ti,bt=x.stencil?Di:ei);const Lt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:s};p=new XRWebGLBinding(a,e),f=p.createProjectionLayer(Lt),a.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),C=new ni(f.textureWidth,f.textureHeight,{format:nn,type:Sn,depthTexture:new Lc(f.textureWidth,f.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(d),c=null,r=await a.requestReferenceSpace(o),ie.setContext(a),ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function nt(Q){for(let ot=0;ot<Q.removed.length;ot++){const bt=Q.removed[ot],ut=y.indexOf(bt);ut>=0&&(y[ut]=null,A[ut].disconnect(bt))}for(let ot=0;ot<Q.added.length;ot++){const bt=Q.added[ot];let ut=y.indexOf(bt);if(ut===-1){for(let zt=0;zt<A.length;zt++)if(zt>=y.length){y.push(bt),ut=zt;break}else if(y[zt]===null){y[zt]=bt,ut=zt;break}if(ut===-1)break}const Lt=A[ut];Lt&&Lt.connect(bt)}}const $=new S,rt=new S;function J(Q,ot,bt){$.setFromMatrixPosition(ot.matrixWorld),rt.setFromMatrixPosition(bt.matrixWorld);const ut=$.distanceTo(rt),Lt=ot.projectionMatrix.elements,zt=bt.projectionMatrix.elements,qt=Lt[14]/(Lt[10]-1),ue=Lt[14]/(Lt[10]+1),Zt=(Lt[9]+1)/Lt[5],ge=(Lt[9]-1)/Lt[5],k=(Lt[8]-1)/Lt[0],Ue=(zt[8]+1)/zt[0],Yt=qt*k,Kt=qt*Ue,Dt=ut/(-k+Ue),oe=Dt*-k;if(ot.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(oe),Q.translateZ(Dt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Lt[10]===-1)Q.projectionMatrix.copy(ot.projectionMatrix),Q.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const Pt=qt+Dt,P=ue+Dt,w=Yt-oe,V=Kt+(ut-oe),tt=Zt*ue/P*Pt,it=ge*ue/P*Pt;Q.projectionMatrix.makePerspective(w,V,tt,it,Pt,P),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ht(Q,ot){ot===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ot.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(a===null)return;let ot=Q.near,bt=Q.far;M.texture!==null&&(M.depthNear>0&&(ot=M.depthNear),M.depthFar>0&&(bt=M.depthFar)),b.near=N.near=I.near=ot,b.far=N.far=I.far=bt,(U!==b.near||Y!==b.far)&&(a.updateRenderState({depthNear:b.near,depthFar:b.far}),U=b.near,Y=b.far),I.layers.mask=Q.layers.mask|2,N.layers.mask=Q.layers.mask|4,b.layers.mask=I.layers.mask|N.layers.mask;const ut=Q.parent,Lt=b.cameras;ht(b,ut);for(let zt=0;zt<Lt.length;zt++)ht(Lt[zt],ut);Lt.length===2?J(b,I,N):b.projectionMatrix.copy(I.projectionMatrix),_t(Q,b,ut)};function _t(Q,ot,bt){bt===null?Q.matrix.copy(ot.matrixWorld):(Q.matrix.copy(bt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ot.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ot.projectionMatrix),Q.projectionMatrixInverse.copy(ot.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=br*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&m===null))return d},this.setFoveation=function(Q){d=Q,f!==null&&(f.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(b)};let Rt=null;function Xt(Q,ot){if(h=ot.getViewerPose(c||r),v=ot,h!==null){const bt=h.views;m!==null&&(t.setRenderTargetFramebuffer(C,m.framebuffer),t.setRenderTarget(C));let ut=!1;bt.length!==b.cameras.length&&(b.cameras.length=0,ut=!0);for(let zt=0;zt<bt.length;zt++){const qt=bt[zt];let ue=null;if(m!==null)ue=m.getViewport(qt);else{const ge=p.getViewSubImage(f,qt);ue=ge.viewport,zt===0&&(t.setRenderTargetTextures(C,ge.colorTexture,f.ignoreDepthValues?void 0:ge.depthStencilTexture),t.setRenderTarget(C))}let Zt=T[zt];Zt===void 0&&(Zt=new tn,Zt.layers.enable(zt),Zt.viewport=new _e,T[zt]=Zt),Zt.matrix.fromArray(qt.transform.matrix),Zt.matrix.decompose(Zt.position,Zt.quaternion,Zt.scale),Zt.projectionMatrix.fromArray(qt.projectionMatrix),Zt.projectionMatrixInverse.copy(Zt.projectionMatrix).invert(),Zt.viewport.set(ue.x,ue.y,ue.width,ue.height),zt===0&&(b.matrix.copy(Zt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ut===!0&&b.cameras.push(Zt)}const Lt=a.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){const zt=p.getDepthInformation(bt[0]);zt&&zt.isValid&&zt.texture&&M.init(t,zt,a.renderState)}}for(let bt=0;bt<A.length;bt++){const ut=y[bt],Lt=A[bt];ut!==null&&Lt!==void 0&&Lt.update(ut,ot,c||r)}Rt&&Rt(Q,ot),ot.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ot}),v=null}const ie=new Dc;ie.setAnimationLoop(Xt),this.setAnimationLoop=function(Q){Rt=Q},this.dispose=function(){}}}const Yn=new un,Fp=new he;function Op(n,t){function e(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function i(x,g){g.color.getRGB(x.fogColor.value,Rc(n)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function a(x,g,C,A,y){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(x,g):g.isMeshToonMaterial?(s(x,g),p(x,g)):g.isMeshPhongMaterial?(s(x,g),h(x,g)):g.isMeshStandardMaterial?(s(x,g),f(x,g),g.isMeshPhysicalMaterial&&m(x,g,y)):g.isMeshMatcapMaterial?(s(x,g),v(x,g)):g.isMeshDepthMaterial?s(x,g):g.isMeshDistanceMaterial?(s(x,g),M(x,g)):g.isMeshNormalMaterial?s(x,g):g.isLineBasicMaterial?(r(x,g),g.isLineDashedMaterial&&o(x,g)):g.isPointsMaterial?d(x,g,C,A):g.isSpriteMaterial?c(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,e(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,e(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===Ie&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,e(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===Ie&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,e(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,e(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);const C=t.get(g),A=C.envMap,y=C.envMapRotation;A&&(x.envMap.value=A,Yn.copy(y),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),x.envMapRotation.value.setFromMatrix4(Fp.makeRotationFromEuler(Yn)),x.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,x.aoMapTransform))}function r(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,e(g.map,x.mapTransform))}function o(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function d(x,g,C,A){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*C,x.scale.value=A*.5,g.map&&(x.map.value=g.map,e(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function c(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,e(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function h(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function p(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function f(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function m(x,g,C){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ie&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=C.texture,x.transmissionSamplerSize.value.set(C.width,C.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,x.specularIntensityMapTransform))}function v(x,g){g.matcap&&(x.matcap.value=g.matcap)}function M(x,g){const C=t.get(g).light;x.referencePosition.value.setFromMatrixPosition(C.matrixWorld),x.nearDistance.value=C.shadow.camera.near,x.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function Bp(n,t,e,i){let a={},s={},r=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(C,A){const y=A.program;i.uniformBlockBinding(C,y)}function c(C,A){let y=a[C.id];y===void 0&&(v(C),y=h(C),a[C.id]=y,C.addEventListener("dispose",x));const B=A.program;i.updateUBOMapping(C,B);const D=t.render.frame;s[C.id]!==D&&(f(C),s[C.id]=D)}function h(C){const A=p();C.__bindingPointIndex=A;const y=n.createBuffer(),B=C.__size,D=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,B,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,y),y}function p(){for(let C=0;C<o;C++)if(r.indexOf(C)===-1)return r.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(C){const A=a[C.id],y=C.uniforms,B=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let D=0,I=y.length;D<I;D++){const N=Array.isArray(y[D])?y[D]:[y[D]];for(let T=0,b=N.length;T<b;T++){const U=N[T];if(m(U,D,T,B)===!0){const Y=U.__offset,q=Array.isArray(U.value)?U.value:[U.value];let Z=0;for(let nt=0;nt<q.length;nt++){const $=q[nt],rt=M($);typeof $=="number"||typeof $=="boolean"?(U.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,Y+Z,U.__data)):$.isMatrix3?(U.__data[0]=$.elements[0],U.__data[1]=$.elements[1],U.__data[2]=$.elements[2],U.__data[3]=0,U.__data[4]=$.elements[3],U.__data[5]=$.elements[4],U.__data[6]=$.elements[5],U.__data[7]=0,U.__data[8]=$.elements[6],U.__data[9]=$.elements[7],U.__data[10]=$.elements[8],U.__data[11]=0):($.toArray(U.__data,Z),Z+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Y,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(C,A,y,B){const D=C.value,I=A+"_"+y;if(B[I]===void 0)return typeof D=="number"||typeof D=="boolean"?B[I]=D:B[I]=D.clone(),!0;{const N=B[I];if(typeof D=="number"||typeof D=="boolean"){if(N!==D)return B[I]=D,!0}else if(N.equals(D)===!1)return N.copy(D),!0}return!1}function v(C){const A=C.uniforms;let y=0;const B=16;for(let I=0,N=A.length;I<N;I++){const T=Array.isArray(A[I])?A[I]:[A[I]];for(let b=0,U=T.length;b<U;b++){const Y=T[b],q=Array.isArray(Y.value)?Y.value:[Y.value];for(let Z=0,nt=q.length;Z<nt;Z++){const $=q[Z],rt=M($),J=y%B,ht=J%rt.boundary,_t=J+ht;y+=ht,_t!==0&&B-_t<rt.storage&&(y+=B-_t),Y.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=y,y+=rt.storage}}}const D=y%B;return D>0&&(y+=B-D),C.__size=y,C.__cache={},this}function M(C){const A={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(A.boundary=4,A.storage=4):C.isVector2?(A.boundary=8,A.storage=8):C.isVector3||C.isColor?(A.boundary=16,A.storage=12):C.isVector4?(A.boundary=16,A.storage=16):C.isMatrix3?(A.boundary=48,A.storage=48):C.isMatrix4?(A.boundary=64,A.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),A}function x(C){const A=C.target;A.removeEventListener("dispose",x);const y=r.indexOf(A.__bindingPointIndex);r.splice(y,1),n.deleteBuffer(a[A.id]),delete a[A.id],delete s[A.id]}function g(){for(const C in a)n.deleteBuffer(a[C]);r=[],a={},s={}}return{bind:d,update:c,dispose:g}}class kp{constructor(t={}){const{canvas:e=Al(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=r;const v=new Uint32Array(4),M=new Int32Array(4);let x=null,g=null;const C=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Oe,this.toneMapping=On,this.toneMappingExposure=1;const y=this;let B=!1,D=0,I=0,N=null,T=-1,b=null;const U=new _e,Y=new _e;let q=null;const Z=new Vt(0);let nt=0,$=e.width,rt=e.height,J=1,ht=null,_t=null;const Rt=new _e(0,0,$,rt),Xt=new _e(0,0,$,rt);let ie=!1;const Q=new Fr;let ot=!1,bt=!1;const ut=new he,Lt=new he,zt=new S,qt=new _e,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Zt=!1;function ge(){return N===null?J:1}let k=i;function Ue(E,F){return e.getContext(E,F)}try{const E={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:d,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Rr}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),k===null){const F="webgl2";if(k=Ue(F,E),k===null)throw Ue(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Yt,Kt,Dt,oe,Pt,P,w,V,tt,it,j,Tt,ft,xt,$t,at,vt,It,Ut,Mt,Jt,kt,ae,z;function dt(){Yt=new Wu(k),Yt.init(),kt=new Pp(k,Yt),Kt=new Ou(k,Yt,t,kt),Dt=new Ap(k,Yt),Kt.reverseDepthBuffer&&f&&Dt.buffers.depth.setReversed(!0),oe=new Yu(k),Pt=new up,P=new Cp(k,Yt,Dt,Pt,Kt,kt,oe),w=new ku(y),V=new Vu(y),tt=new td(k),ae=new zu(k,tt),it=new Xu(k,tt,oe,ae),j=new Ju(k,it,tt,oe),Ut=new Ku(k,Kt,P),at=new Bu(Pt),Tt=new hp(y,w,V,Yt,Kt,ae,at),ft=new Op(y,Pt),xt=new pp,$t=new Mp(Yt),It=new Nu(y,w,V,Dt,j,m,d),vt=new Ep(y,j,Kt),z=new Bp(k,oe,Kt,Dt),Mt=new Fu(k,Yt,oe),Jt=new qu(k,Yt,oe),oe.programs=Tt.programs,y.capabilities=Kt,y.extensions=Yt,y.properties=Pt,y.renderLists=xt,y.shadowMap=vt,y.state=Dt,y.info=oe}dt();const K=new zp(y,k);this.xr=K,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const E=Yt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Yt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(E){E!==void 0&&(J=E,this.setSize($,rt,!1))},this.getSize=function(E){return E.set($,rt)},this.setSize=function(E,F,W=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=E,rt=F,e.width=Math.floor(E*J),e.height=Math.floor(F*J),W===!0&&(e.style.width=E+"px",e.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set($*J,rt*J).floor()},this.setDrawingBufferSize=function(E,F,W){$=E,rt=F,J=W,e.width=Math.floor(E*W),e.height=Math.floor(F*W),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(U)},this.getViewport=function(E){return E.copy(Rt)},this.setViewport=function(E,F,W,X){E.isVector4?Rt.set(E.x,E.y,E.z,E.w):Rt.set(E,F,W,X),Dt.viewport(U.copy(Rt).multiplyScalar(J).round())},this.getScissor=function(E){return E.copy(Xt)},this.setScissor=function(E,F,W,X){E.isVector4?Xt.set(E.x,E.y,E.z,E.w):Xt.set(E,F,W,X),Dt.scissor(Y.copy(Xt).multiplyScalar(J).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(E){Dt.setScissorTest(ie=E)},this.setOpaqueSort=function(E){ht=E},this.setTransparentSort=function(E){_t=E},this.getClearColor=function(E){return E.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(E=!0,F=!0,W=!0){let X=0;if(E){let O=!1;if(N!==null){const st=N.texture.format;O=st===Nr||st===Ur||st===Lr}if(O){const st=N.texture.type,mt=st===Sn||st===ei||st===na||st===Di||st===Pr||st===Dr,wt=It.getClearColor(),yt=It.getClearAlpha(),Nt=wt.r,Bt=wt.g,St=wt.b;mt?(v[0]=Nt,v[1]=Bt,v[2]=St,v[3]=yt,k.clearBufferuiv(k.COLOR,0,v)):(M[0]=Nt,M[1]=Bt,M[2]=St,M[3]=yt,k.clearBufferiv(k.COLOR,0,M))}else X|=k.COLOR_BUFFER_BIT}F&&(X|=k.DEPTH_BUFFER_BIT),W&&(X|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),xt.dispose(),$t.dispose(),Pt.dispose(),w.dispose(),V.dispose(),j.dispose(),ae.dispose(),z.dispose(),Tt.dispose(),K.dispose(),K.removeEventListener("sessionstart",ca),K.removeEventListener("sessionend",la),fn.stop()};function et(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const E=oe.autoReset,F=vt.enabled,W=vt.autoUpdate,X=vt.needsUpdate,O=vt.type;dt(),oe.autoReset=E,vt.enabled=F,vt.autoUpdate=W,vt.needsUpdate=X,vt.type=O}function pt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ot(E){const F=E.target;F.removeEventListener("dispose",Ot),pe(F)}function pe(E){Se(E),Pt.remove(E)}function Se(E){const F=Pt.get(E).programs;F!==void 0&&(F.forEach(function(W){Tt.releaseProgram(W)}),E.isShaderMaterial&&Tt.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,W,X,O,st){F===null&&(F=ue);const mt=O.isMesh&&O.matrixWorld.determinant()<0,wt=ns(E,F,W,X,O);Dt.setMaterial(X,mt);let yt=W.index,Nt=1;if(X.wireframe===!0){if(yt=it.getWireframeAttribute(W),yt===void 0)return;Nt=2}const Bt=W.drawRange,St=W.attributes.position;let jt=Bt.start*Nt,se=(Bt.start+Bt.count)*Nt;st!==null&&(jt=Math.max(jt,st.start*Nt),se=Math.min(se,(st.start+st.count)*Nt)),yt!==null?(jt=Math.max(jt,0),se=Math.min(se,yt.count)):St!=null&&(jt=Math.max(jt,0),se=Math.min(se,St.count));const ce=se-jt;if(ce<0||ce===1/0)return;ae.setup(O,X,wt,W,yt);let Ee,te=Mt;if(yt!==null&&(Ee=tt.get(yt),te=Jt,te.setIndex(Ee)),O.isMesh)X.wireframe===!0?(Dt.setLineWidth(X.wireframeLinewidth*ge()),te.setMode(k.LINES)):te.setMode(k.TRIANGLES);else if(O.isLine){let At=X.linewidth;At===void 0&&(At=1),Dt.setLineWidth(At*ge()),O.isLineSegments?te.setMode(k.LINES):O.isLineLoop?te.setMode(k.LINE_LOOP):te.setMode(k.LINE_STRIP)}else O.isPoints?te.setMode(k.POINTS):O.isSprite&&te.setMode(k.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)te.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Yt.get("WEBGL_multi_draw"))te.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const At=O._multiDrawStarts,Je=O._multiDrawCounts,ee=O._multiDrawCount,He=yt?tt.get(yt).bytesPerElement:1,Tn=Pt.get(X).currentProgram.getUniforms();for(let Pe=0;Pe<ee;Pe++)Tn.setValue(k,"_gl_DrawID",Pe),te.render(At[Pe]/He,Je[Pe])}else if(O.isInstancedMesh)te.renderInstances(jt,ce,O.count);else if(W.isInstancedBufferGeometry){const At=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Je=Math.min(W.instanceCount,At);te.renderInstances(jt,ce,Je)}else te.render(jt,ce)};function ne(E,F,W){E.transparent===!0&&E.side===cn&&E.forceSinglePass===!1?(E.side=Ie,E.needsUpdate=!0,ri(E,F,W),E.side=Bn,E.needsUpdate=!0,ri(E,F,W),E.side=cn):ri(E,F,W)}this.compile=function(E,F,W=null){W===null&&(W=E),g=$t.get(W),g.init(F),A.push(g),W.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(g.pushLight(O),O.castShadow&&g.pushShadow(O))}),E!==W&&E.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(g.pushLight(O),O.castShadow&&g.pushShadow(O))}),g.setupLights();const X=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const st=O.material;if(st)if(Array.isArray(st))for(let mt=0;mt<st.length;mt++){const wt=st[mt];ne(wt,W,O),X.add(wt)}else ne(st,W,O),X.add(st)}),A.pop(),g=null,X},this.compileAsync=function(E,F,W=null){const X=this.compile(E,F,W);return new Promise(O=>{function st(){if(X.forEach(function(mt){Pt.get(mt).currentProgram.isReady()&&X.delete(mt)}),X.size===0){O(E);return}setTimeout(st,10)}Yt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let ke=null;function Ke(E){ke&&ke(E)}function ca(){fn.stop()}function la(){fn.start()}const fn=new Dc;fn.setAnimationLoop(Ke),typeof self<"u"&&fn.setContext(self),this.setAnimationLoop=function(E){ke=E,K.setAnimationLoop(E),E===null?fn.stop():fn.start()},K.addEventListener("sessionstart",ca),K.addEventListener("sessionend",la),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(F),F=K.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,F,N),g=$t.get(E,A.length),g.init(F),A.push(g),Lt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Q.setFromProjectionMatrix(Lt),bt=this.localClippingEnabled,ot=at.init(this.clippingPlanes,bt),x=xt.get(E,C.length),x.init(),C.push(x),K.enabled===!0&&K.isPresenting===!0){const st=y.xr.getDepthSensingMesh();st!==null&&Gi(st,F,-1/0,y.sortObjects)}Gi(E,F,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(ht,_t),Zt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Zt&&It.addToRenderList(x,E),this.info.render.frame++,ot===!0&&at.beginShadows();const W=g.state.shadowsArray;vt.render(W,E,F),ot===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=x.opaque,O=x.transmissive;if(g.setupLights(),F.isArrayCamera){const st=F.cameras;if(O.length>0)for(let mt=0,wt=st.length;mt<wt;mt++){const yt=st[mt];ha(X,O,E,yt)}Zt&&It.render(E);for(let mt=0,wt=st.length;mt<wt;mt++){const yt=st[mt];da(x,E,yt,yt.viewport)}}else O.length>0&&ha(X,O,E,F),Zt&&It.render(E),da(x,E,F);N!==null&&(P.updateMultisampleRenderTarget(N),P.updateRenderTargetMipmap(N)),E.isScene===!0&&E.onAfterRender(y,E,F),ae.resetDefaultState(),T=-1,b=null,A.pop(),A.length>0?(g=A[A.length-1],ot===!0&&at.setGlobalState(y.clippingPlanes,g.state.camera)):g=null,C.pop(),C.length>0?x=C[C.length-1]:x=null};function Gi(E,F,W,X){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Q.intersectsSprite(E)){X&&qt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Lt);const mt=j.update(E),wt=E.material;wt.visible&&x.push(E,mt,wt,W,qt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Q.intersectsObject(E))){const mt=j.update(E),wt=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),qt.copy(E.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),qt.copy(mt.boundingSphere.center)),qt.applyMatrix4(E.matrixWorld).applyMatrix4(Lt)),Array.isArray(wt)){const yt=mt.groups;for(let Nt=0,Bt=yt.length;Nt<Bt;Nt++){const St=yt[Nt],jt=wt[St.materialIndex];jt&&jt.visible&&x.push(E,mt,jt,W,qt.z,St)}}else wt.visible&&x.push(E,mt,wt,W,qt.z,null)}}const st=E.children;for(let mt=0,wt=st.length;mt<wt;mt++)Gi(st[mt],F,W,X)}function da(E,F,W,X){const O=E.opaque,st=E.transmissive,mt=E.transparent;g.setupLightsView(W),ot===!0&&at.setGlobalState(y.clippingPlanes,W),X&&Dt.viewport(U.copy(X)),O.length>0&&si(O,F,W),st.length>0&&si(st,F,W),mt.length>0&&si(mt,F,W),Dt.buffers.depth.setTest(!0),Dt.buffers.depth.setMask(!0),Dt.buffers.color.setMask(!0),Dt.setPolygonOffset(!1)}function ha(E,F,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[X.id]===void 0&&(g.state.transmissionRenderTarget[X.id]=new ni(1,1,{generateMipmaps:!0,type:Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float")?aa:Sn,minFilter:ti,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const st=g.state.transmissionRenderTarget[X.id],mt=X.viewport||U;st.setSize(mt.z,mt.w);const wt=y.getRenderTarget();y.setRenderTarget(st),y.getClearColor(Z),nt=y.getClearAlpha(),nt<1&&y.setClearColor(16777215,.5),y.clear(),Zt&&It.render(W);const yt=y.toneMapping;y.toneMapping=On;const Nt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),g.setupLightsView(X),ot===!0&&at.setGlobalState(y.clippingPlanes,X),si(E,W,X),P.updateMultisampleRenderTarget(st),P.updateRenderTargetMipmap(st),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let St=0,jt=F.length;St<jt;St++){const se=F[St],ce=se.object,Ee=se.geometry,te=se.material,At=se.group;if(te.side===cn&&ce.layers.test(X.layers)){const Je=te.side;te.side=Ie,te.needsUpdate=!0,ua(ce,W,X,Ee,te,At),te.side=Je,te.needsUpdate=!0,Bt=!0}}Bt===!0&&(P.updateMultisampleRenderTarget(st),P.updateRenderTargetMipmap(st))}y.setRenderTarget(wt),y.setClearColor(Z,nt),Nt!==void 0&&(X.viewport=Nt),y.toneMapping=yt}function si(E,F,W){const X=F.isScene===!0?F.overrideMaterial:null;for(let O=0,st=E.length;O<st;O++){const mt=E[O],wt=mt.object,yt=mt.geometry,Nt=X===null?mt.material:X,Bt=mt.group;wt.layers.test(W.layers)&&ua(wt,F,W,yt,Nt,Bt)}}function ua(E,F,W,X,O,st){E.onBeforeRender(y,F,W,X,O,st),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(y,F,W,X,E,st),O.transparent===!0&&O.side===cn&&O.forceSinglePass===!1?(O.side=Ie,O.needsUpdate=!0,y.renderBufferDirect(W,F,X,O,E,st),O.side=Bn,O.needsUpdate=!0,y.renderBufferDirect(W,F,X,O,E,st),O.side=cn):y.renderBufferDirect(W,F,X,O,E,st),E.onAfterRender(y,F,W,X,O,st)}function ri(E,F,W){F.isScene!==!0&&(F=ue);const X=Pt.get(E),O=g.state.lights,st=g.state.shadowsArray,mt=O.state.version,wt=Tt.getParameters(E,O.state,st,F,W),yt=Tt.getProgramCacheKey(wt);let Nt=X.programs;X.environment=E.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(E.isMeshStandardMaterial?V:w).get(E.envMap||X.environment),X.envMapRotation=X.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Nt===void 0&&(E.addEventListener("dispose",Ot),Nt=new Map,X.programs=Nt);let Bt=Nt.get(yt);if(Bt!==void 0){if(X.currentProgram===Bt&&X.lightsStateVersion===mt)return pa(E,wt),Bt}else wt.uniforms=Tt.getUniforms(E),E.onBeforeCompile(wt,y),Bt=Tt.acquireProgram(wt,yt),Nt.set(yt,Bt),X.uniforms=wt.uniforms;const St=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(St.clippingPlanes=at.uniform),pa(E,wt),X.needsLights=as(E),X.lightsStateVersion=mt,X.needsLights&&(St.ambientLightColor.value=O.state.ambient,St.lightProbe.value=O.state.probe,St.directionalLights.value=O.state.directional,St.directionalLightShadows.value=O.state.directionalShadow,St.spotLights.value=O.state.spot,St.spotLightShadows.value=O.state.spotShadow,St.rectAreaLights.value=O.state.rectArea,St.ltc_1.value=O.state.rectAreaLTC1,St.ltc_2.value=O.state.rectAreaLTC2,St.pointLights.value=O.state.point,St.pointLightShadows.value=O.state.pointShadow,St.hemisphereLights.value=O.state.hemi,St.directionalShadowMap.value=O.state.directionalShadowMap,St.directionalShadowMatrix.value=O.state.directionalShadowMatrix,St.spotShadowMap.value=O.state.spotShadowMap,St.spotLightMatrix.value=O.state.spotLightMatrix,St.spotLightMap.value=O.state.spotLightMap,St.pointShadowMap.value=O.state.pointShadowMap,St.pointShadowMatrix.value=O.state.pointShadowMatrix),X.currentProgram=Bt,X.uniformsList=null,Bt}function fa(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Ya.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function pa(E,F){const W=Pt.get(E);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function ns(E,F,W,X,O){F.isScene!==!0&&(F=ue),P.resetTextureUnits();const st=F.fog,mt=X.isMeshStandardMaterial?F.environment:null,wt=N===null?y.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Ui,yt=(X.isMeshStandardMaterial?V:w).get(X.envMap||mt),Nt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Bt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),St=!!W.morphAttributes.position,jt=!!W.morphAttributes.normal,se=!!W.morphAttributes.color;let ce=On;X.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(ce=y.toneMapping);const Ee=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,te=Ee!==void 0?Ee.length:0,At=Pt.get(X),Je=g.state.lights;if(ot===!0&&(bt===!0||E!==b)){const Ne=E===b&&X.id===T;at.setState(X,E,Ne)}let ee=!1;X.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Je.state.version||At.outputColorSpace!==wt||O.isBatchedMesh&&At.batching===!1||!O.isBatchedMesh&&At.batching===!0||O.isBatchedMesh&&At.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&At.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&At.instancing===!1||!O.isInstancedMesh&&At.instancing===!0||O.isSkinnedMesh&&At.skinning===!1||!O.isSkinnedMesh&&At.skinning===!0||O.isInstancedMesh&&At.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&At.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&At.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&At.instancingMorph===!1&&O.morphTexture!==null||At.envMap!==yt||X.fog===!0&&At.fog!==st||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==at.numPlanes||At.numIntersection!==at.numIntersection)||At.vertexAlphas!==Nt||At.vertexTangents!==Bt||At.morphTargets!==St||At.morphNormals!==jt||At.morphColors!==se||At.toneMapping!==ce||At.morphTargetsCount!==te)&&(ee=!0):(ee=!0,At.__version=X.version);let He=At.currentProgram;ee===!0&&(He=ri(X,F,O));let Tn=!1,Pe=!1,kn=!1;const le=He.getUniforms(),qe=At.uniforms;if(Dt.useProgram(He.program)&&(Tn=!0,Pe=!0,kn=!0),X.id!==T&&(T=X.id,Pe=!0),Tn||b!==E){Dt.buffers.depth.getReversed()?(ut.copy(E.projectionMatrix),Cl(ut),Pl(ut),le.setValue(k,"projectionMatrix",ut)):le.setValue(k,"projectionMatrix",E.projectionMatrix),le.setValue(k,"viewMatrix",E.matrixWorldInverse);const sn=le.map.cameraPosition;sn!==void 0&&sn.setValue(k,zt.setFromMatrixPosition(E.matrixWorld)),Kt.logarithmicDepthBuffer&&le.setValue(k,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&le.setValue(k,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,Pe=!0,kn=!0)}if(O.isSkinnedMesh){le.setOptional(k,O,"bindMatrix"),le.setOptional(k,O,"bindMatrixInverse");const Ne=O.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),le.setValue(k,"boneTexture",Ne.boneTexture,P))}O.isBatchedMesh&&(le.setOptional(k,O,"batchingTexture"),le.setValue(k,"batchingTexture",O._matricesTexture,P),le.setOptional(k,O,"batchingIdTexture"),le.setValue(k,"batchingIdTexture",O._indirectTexture,P),le.setOptional(k,O,"batchingColorTexture"),O._colorsTexture!==null&&le.setValue(k,"batchingColorTexture",O._colorsTexture,P));const Hn=W.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&Ut.update(O,W,He),(Pe||At.receiveShadow!==O.receiveShadow)&&(At.receiveShadow=O.receiveShadow,le.setValue(k,"receiveShadow",O.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(qe.envMap.value=yt,qe.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(qe.envMapIntensity.value=F.environmentIntensity),Pe&&(le.setValue(k,"toneMappingExposure",y.toneMappingExposure),At.needsLights&&is(qe,kn),st&&X.fog===!0&&ft.refreshFogUniforms(qe,st),ft.refreshMaterialUniforms(qe,X,J,rt,g.state.transmissionRenderTarget[E.id]),Ya.upload(k,fa(At),qe,P)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ya.upload(k,fa(At),qe,P),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&le.setValue(k,"center",O.center),le.setValue(k,"modelViewMatrix",O.modelViewMatrix),le.setValue(k,"normalMatrix",O.normalMatrix),le.setValue(k,"modelMatrix",O.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Ne=X.uniformsGroups;for(let sn=0,ze=Ne.length;sn<ze;sn++){const An=Ne[sn];z.update(An,He),z.bind(An,He)}}return He}function is(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function as(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(E,F,W){Pt.get(E.texture).__webglTexture=F,Pt.get(E.depthTexture).__webglTexture=W;const X=Pt.get(E);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,F){const W=Pt.get(E);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,W=0){N=E,D=F,I=W;let X=!0,O=null,st=!1,mt=!1;if(E){const yt=Pt.get(E);if(yt.__useDefaultFramebuffer!==void 0)Dt.bindFramebuffer(k.FRAMEBUFFER,null),X=!1;else if(yt.__webglFramebuffer===void 0)P.setupRenderTarget(E);else if(yt.__hasExternalTextures)P.rebindTextures(E,Pt.get(E.texture).__webglTexture,Pt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const St=E.depthTexture;if(yt.__boundDepthTexture!==St){if(St!==null&&Pt.has(St)&&(E.width!==St.image.width||E.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(E)}}const Nt=E.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(mt=!0);const Bt=Pt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Bt[F])?O=Bt[F][W]:O=Bt[F],st=!0):E.samples>0&&P.useMultisampledRTT(E)===!1?O=Pt.get(E).__webglMultisampledFramebuffer:Array.isArray(Bt)?O=Bt[W]:O=Bt,U.copy(E.viewport),Y.copy(E.scissor),q=E.scissorTest}else U.copy(Rt).multiplyScalar(J).floor(),Y.copy(Xt).multiplyScalar(J).floor(),q=ie;if(Dt.bindFramebuffer(k.FRAMEBUFFER,O)&&X&&Dt.drawBuffers(E,O),Dt.viewport(U),Dt.scissor(Y),Dt.setScissorTest(q),st){const yt=Pt.get(E.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+F,yt.__webglTexture,W)}else if(mt){const yt=Pt.get(E.texture),Nt=F||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,yt.__webglTexture,W||0,Nt)}T=-1},this.readRenderTargetPixels=function(E,F,W,X,O,st,mt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Pt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&mt!==void 0&&(wt=wt[mt]),wt){Dt.bindFramebuffer(k.FRAMEBUFFER,wt);try{const yt=E.texture,Nt=yt.format,Bt=yt.type;if(!Kt.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-X&&W>=0&&W<=E.height-O&&k.readPixels(F,W,X,O,kt.convert(Nt),kt.convert(Bt),st)}finally{const yt=N!==null?Pt.get(N).__webglFramebuffer:null;Dt.bindFramebuffer(k.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(E,F,W,X,O,st,mt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Pt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&mt!==void 0&&(wt=wt[mt]),wt){const yt=E.texture,Nt=yt.format,Bt=yt.type;if(!Kt.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=E.width-X&&W>=0&&W<=E.height-O){Dt.bindFramebuffer(k.FRAMEBUFFER,wt);const St=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,St),k.bufferData(k.PIXEL_PACK_BUFFER,st.byteLength,k.STREAM_READ),k.readPixels(F,W,X,O,kt.convert(Nt),kt.convert(Bt),0);const jt=N!==null?Pt.get(N).__webglFramebuffer:null;Dt.bindFramebuffer(k.FRAMEBUFFER,jt);const se=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Rl(k,se,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,St),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,st),k.deleteBuffer(St),k.deleteSync(se),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,F=null,W=0){E.isTexture!==!0&&(ji("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1]);const X=Math.pow(2,-W),O=Math.floor(E.image.width*X),st=Math.floor(E.image.height*X),mt=F!==null?F.x:0,wt=F!==null?F.y:0;P.setTexture2D(E,0),k.copyTexSubImage2D(k.TEXTURE_2D,W,0,0,mt,wt,O,st),Dt.unbindTexture()},this.copyTextureToTexture=function(E,F,W=null,X=null,O=0){E.isTexture!==!0&&(ji("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,E=arguments[1],F=arguments[2],O=arguments[3]||0,W=null);let st,mt,wt,yt,Nt,Bt,St,jt,se;const ce=E.isCompressedTexture?E.mipmaps[O]:E.image;W!==null?(st=W.max.x-W.min.x,mt=W.max.y-W.min.y,wt=W.isBox3?W.max.z-W.min.z:1,yt=W.min.x,Nt=W.min.y,Bt=W.isBox3?W.min.z:0):(st=ce.width,mt=ce.height,wt=ce.depth||1,yt=0,Nt=0,Bt=0),X!==null?(St=X.x,jt=X.y,se=X.z):(St=0,jt=0,se=0);const Ee=kt.convert(F.format),te=kt.convert(F.type);let At;F.isData3DTexture?(P.setTexture3D(F,0),At=k.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(P.setTexture2DArray(F,0),At=k.TEXTURE_2D_ARRAY):(P.setTexture2D(F,0),At=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,F.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,F.unpackAlignment);const Je=k.getParameter(k.UNPACK_ROW_LENGTH),ee=k.getParameter(k.UNPACK_IMAGE_HEIGHT),He=k.getParameter(k.UNPACK_SKIP_PIXELS),Tn=k.getParameter(k.UNPACK_SKIP_ROWS),Pe=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,ce.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ce.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,yt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Nt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Bt);const kn=E.isDataArrayTexture||E.isData3DTexture,le=F.isDataArrayTexture||F.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const qe=Pt.get(E),Hn=Pt.get(F),Ne=Pt.get(qe.__renderTarget),sn=Pt.get(Hn.__renderTarget);Dt.bindFramebuffer(k.READ_FRAMEBUFFER,Ne.__webglFramebuffer),Dt.bindFramebuffer(k.DRAW_FRAMEBUFFER,sn.__webglFramebuffer);for(let ze=0;ze<wt;ze++)kn&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Pt.get(E).__webglTexture,O,Bt+ze),E.isDepthTexture?(le&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Pt.get(F).__webglTexture,O,se+ze),k.blitFramebuffer(yt,Nt,st,mt,St,jt,st,mt,k.DEPTH_BUFFER_BIT,k.NEAREST)):le?k.copyTexSubImage3D(At,O,St,jt,se+ze,yt,Nt,st,mt):k.copyTexSubImage2D(At,O,St,jt,se+ze,yt,Nt,st,mt);Dt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else le?E.isDataTexture||E.isData3DTexture?k.texSubImage3D(At,O,St,jt,se,st,mt,wt,Ee,te,ce.data):F.isCompressedArrayTexture?k.compressedTexSubImage3D(At,O,St,jt,se,st,mt,wt,Ee,ce.data):k.texSubImage3D(At,O,St,jt,se,st,mt,wt,Ee,te,ce):E.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,O,St,jt,st,mt,Ee,te,ce.data):E.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,O,St,jt,ce.width,ce.height,Ee,ce.data):k.texSubImage2D(k.TEXTURE_2D,O,St,jt,st,mt,Ee,te,ce);k.pixelStorei(k.UNPACK_ROW_LENGTH,Je),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ee),k.pixelStorei(k.UNPACK_SKIP_PIXELS,He),k.pixelStorei(k.UNPACK_SKIP_ROWS,Tn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Pe),O===0&&F.generateMipmaps&&k.generateMipmap(At),Dt.unbindTexture()},this.copyTextureToTexture3D=function(E,F,W=null,X=null,O=0){return E.isTexture!==!0&&(ji("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,E=arguments[2],F=arguments[3],O=arguments[4]||0),ji('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,F,W,X,O)},this.initRenderTarget=function(E){Pt.get(E).__webglFramebuffer===void 0&&P.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?P.setTextureCube(E,0):E.isData3DTexture?P.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?P.setTexture2DArray(E,0):P.setTexture2D(E,0),Dt.unbindTexture()},this.resetState=function(){D=0,I=0,N=null,Dt.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}class Br{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Vt(t),this.density=e}clone(){return new Br(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Hp extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Gp extends Ce{constructor(t=null,e=1,i=1,a,s,r,o,d,c=We,h=We,p,f){super(null,r,o,d,c,h,a,s,p,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xo extends Xe{constructor(t,e,i,a=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const wi=new he,qo=new he,za=[],Yo=new ii,Vp=new he,Ki=new de,Ji=new zi;class Wp extends de{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Xo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<i;a++)this.setMatrixAt(a,Vp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,wi),Yo.copy(t.boundingBox).applyMatrix4(wi),this.boundingBox.union(Yo)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new zi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,wi),Ji.copy(t.boundingSphere).applyMatrix4(wi),this.boundingSphere.union(Ji)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,a=this.morphTexture.source.data.data,s=i.length+1,r=t*s+1;for(let o=0;o<i.length;o++)i[o]=a[r+o]}raycast(t,e){const i=this.matrixWorld,a=this.count;if(Ki.geometry=this.geometry,Ki.material=this.material,Ki.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ji.copy(this.boundingSphere),Ji.applyMatrix4(i),t.ray.intersectsSphere(Ji)!==!1))for(let s=0;s<a;s++){this.getMatrixAt(s,wi),qo.multiplyMatrices(i,wi),Ki.matrixWorld=qo,Ki.raycast(t,za);for(let r=0,o=za.length;r<o;r++){const d=za[r];d.instanceId=s,d.object=this,e.push(d)}za.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Xo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,a=i.length+1;this.morphTexture===null&&(this.morphTexture=new Gp(new Float32Array(a*this.count),a,this.count,Ir,dn));const s=this.morphTexture.source.data.data;let r=0;for(let c=0;c<i.length;c++)r+=i[c];const o=this.geometry.morphTargetsRelative?1:1-r,d=a*t;s[d]=o,s.set(i,d+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Oc extends Fi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ko=new he,Tr=new Sc,Fa=new zi,Oa=new S;class Xp extends Me{constructor(t=new Le,e=new Oc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,a=this.matrixWorld,s=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fa.copy(i.boundingSphere),Fa.applyMatrix4(a),Fa.radius+=s,t.ray.intersectsSphere(Fa)===!1)return;Ko.copy(a).invert(),Tr.copy(t.ray).applyMatrix4(Ko);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),d=o*o,c=i.index,p=i.attributes.position;if(c!==null){const f=Math.max(0,r.start),m=Math.min(c.count,r.start+r.count);for(let v=f,M=m;v<M;v++){const x=c.getX(v);Oa.fromBufferAttribute(p,x),Jo(Oa,x,d,a,t,e,this)}}else{const f=Math.max(0,r.start),m=Math.min(p.count,r.start+r.count);for(let v=f,M=m;v<M;v++)Oa.fromBufferAttribute(p,v),Jo(Oa,v,d,a,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const a=e[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Jo(n,t,e,i,a,s,r){const o=Tr.distanceSqToPoint(n);if(o<e){const d=new S;Tr.closestPointToPoint(n,d),d.applyMatrix4(i);const c=a.ray.origin.distanceTo(d);if(c<a.near||c>a.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:d,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class qp extends Ce{constructor(t,e,i,a,s,r,o,d,c){super(t,e,i,a,s,r,o,d,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class En{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,a=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),s+=i.distanceTo(a),e.push(s),a=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let a=0;const s=i.length;let r;e?r=e:r=t*i[s-1];let o=0,d=s-1,c;for(;o<=d;)if(a=Math.floor(o+(d-o)/2),c=i[a]-r,c<0)o=a+1;else if(c>0)d=a-1;else{d=a;break}if(a=d,i[a]===r)return a/(s-1);const h=i[a],f=i[a+1]-h,m=(r-h)/f;return(a+m)/(s-1)}getTangent(t,e){let a=t-1e-4,s=t+1e-4;a<0&&(a=0),s>1&&(s=1);const r=this.getPoint(a),o=this.getPoint(s),d=e||(r.isVector2?new Ct:new S);return d.copy(o).sub(r).normalize(),d}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new S,a=[],s=[],r=[],o=new S,d=new he;for(let m=0;m<=t;m++){const v=m/t;a[m]=this.getTangentAt(v,new S)}s[0]=new S,r[0]=new S;let c=Number.MAX_VALUE;const h=Math.abs(a[0].x),p=Math.abs(a[0].y),f=Math.abs(a[0].z);h<=c&&(c=h,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(a[0],i).normalize(),s[0].crossVectors(a[0],o),r[0].crossVectors(a[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),r[m]=r[m-1].clone(),o.crossVectors(a[m-1],a[m]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(Re(a[m-1].dot(a[m]),-1,1));s[m].applyMatrix4(d.makeRotationAxis(o,v))}r[m].crossVectors(a[m],s[m])}if(e===!0){let m=Math.acos(Re(s[0].dot(s[t]),-1,1));m/=t,a[0].dot(o.crossVectors(s[0],s[t]))>0&&(m=-m);for(let v=1;v<=t;v++)s[v].applyMatrix4(d.makeRotationAxis(a[v],m*v)),r[v].crossVectors(a[v],s[v])}return{tangents:a,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Bc extends En{constructor(t=0,e=0,i=1,a=1,s=0,r=Math.PI*2,o=!1,d=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=a,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=d}getPoint(t,e=new Ct){const i=e,a=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=a;for(;s>a;)s-=a;s<Number.EPSILON&&(r?s=0:s=a),this.aClockwise===!0&&!r&&(s===a?s=-a:s=s-a);const o=this.aStartAngle+t*s;let d=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),f=d-this.aX,m=c-this.aY;d=f*h-m*p+this.aX,c=f*p+m*h+this.aY}return i.set(d,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Yp extends Bc{constructor(t,e,i,a,s,r){super(t,e,i,i,a,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function kr(){let n=0,t=0,e=0,i=0;function a(s,r,o,d){n=s,t=o,e=-3*s+3*r-2*o-d,i=2*s-2*r+o+d}return{initCatmullRom:function(s,r,o,d,c){a(r,o,c*(o-s),c*(d-r))},initNonuniformCatmullRom:function(s,r,o,d,c,h,p){let f=(r-s)/c-(o-s)/(c+h)+(o-r)/h,m=(o-r)/h-(d-r)/(h+p)+(d-o)/p;f*=h,m*=h,a(r,o,f,m)},calc:function(s){const r=s*s,o=r*s;return n+t*s+e*r+i*o}}}const Ba=new S,Ns=new kr,zs=new kr,Fs=new kr;class ki extends En{constructor(t=[],e=!1,i="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=a}getPoint(t,e=new S){const i=e,a=this.points,s=a.length,r=(s-(this.closed?0:1))*t;let o=Math.floor(r),d=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:d===0&&o===s-1&&(o=s-2,d=1);let c,h;this.closed||o>0?c=a[(o-1)%s]:(Ba.subVectors(a[0],a[1]).add(a[0]),c=Ba);const p=a[o%s],f=a[(o+1)%s];if(this.closed||o+2<s?h=a[(o+2)%s]:(Ba.subVectors(a[s-1],a[s-2]).add(a[s-1]),h=Ba),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(p),m),M=Math.pow(p.distanceToSquared(f),m),x=Math.pow(f.distanceToSquared(h),m);M<1e-4&&(M=1),v<1e-4&&(v=M),x<1e-4&&(x=M),Ns.initNonuniformCatmullRom(c.x,p.x,f.x,h.x,v,M,x),zs.initNonuniformCatmullRom(c.y,p.y,f.y,h.y,v,M,x),Fs.initNonuniformCatmullRom(c.z,p.z,f.z,h.z,v,M,x)}else this.curveType==="catmullrom"&&(Ns.initCatmullRom(c.x,p.x,f.x,h.x,this.tension),zs.initCatmullRom(c.y,p.y,f.y,h.y,this.tension),Fs.initCatmullRom(c.z,p.z,f.z,h.z,this.tension));return i.set(Ns.calc(d),zs.calc(d),Fs.calc(d)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const a=t.points[e];this.points.push(a.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const a=this.points[e];t.points.push(a.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const a=t.points[e];this.points.push(new S().fromArray(a))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Zo(n,t,e,i,a){const s=(i-t)*.5,r=(a-e)*.5,o=n*n,d=n*o;return(2*e-2*i+s+r)*d+(-3*e+3*i-2*s-r)*o+s*n+e}function Kp(n,t){const e=1-n;return e*e*t}function Jp(n,t){return 2*(1-n)*n*t}function Zp(n,t){return n*n*t}function ta(n,t,e,i){return Kp(n,t)+Jp(n,e)+Zp(n,i)}function $p(n,t){const e=1-n;return e*e*e*t}function jp(n,t){const e=1-n;return 3*e*e*n*t}function Qp(n,t){return 3*(1-n)*n*n*t}function t0(n,t){return n*n*n*t}function ea(n,t,e,i,a){return $p(n,t)+jp(n,e)+Qp(n,i)+t0(n,a)}class e0 extends En{constructor(t=new Ct,e=new Ct,i=new Ct,a=new Ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=a}getPoint(t,e=new Ct){const i=e,a=this.v0,s=this.v1,r=this.v2,o=this.v3;return i.set(ea(t,a.x,s.x,r.x,o.x),ea(t,a.y,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class n0 extends En{constructor(t=new S,e=new S,i=new S,a=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=a}getPoint(t,e=new S){const i=e,a=this.v0,s=this.v1,r=this.v2,o=this.v3;return i.set(ea(t,a.x,s.x,r.x,o.x),ea(t,a.y,s.y,r.y,o.y),ea(t,a.z,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class i0 extends En{constructor(t=new Ct,e=new Ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ct){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class a0 extends En{constructor(t=new S,e=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new S){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new S){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class s0 extends En{constructor(t=new Ct,e=new Ct,i=new Ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Ct){const i=e,a=this.v0,s=this.v1,r=this.v2;return i.set(ta(t,a.x,s.x,r.x),ta(t,a.y,s.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kc extends En{constructor(t=new S,e=new S,i=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new S){const i=e,a=this.v0,s=this.v1,r=this.v2;return i.set(ta(t,a.x,s.x,r.x),ta(t,a.y,s.y,r.y),ta(t,a.z,s.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class r0 extends En{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ct){const i=e,a=this.points,s=(a.length-1)*t,r=Math.floor(s),o=s-r,d=a[r===0?r:r-1],c=a[r],h=a[r>a.length-2?a.length-1:r+1],p=a[r>a.length-3?a.length-1:r+2];return i.set(Zo(o,d.x,c.x,h.x,p.x),Zo(o,d.y,c.y,h.y,p.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const a=t.points[e];this.points.push(a.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const a=this.points[e];t.points.push(a.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const a=t.points[e];this.points.push(new Ct().fromArray(a))}return this}}var o0=Object.freeze({__proto__:null,ArcCurve:Yp,CatmullRomCurve3:ki,CubicBezierCurve:e0,CubicBezierCurve3:n0,EllipseCurve:Bc,LineCurve:i0,LineCurve3:a0,QuadraticBezierCurve:s0,QuadraticBezierCurve3:kc,SplineCurve:r0});class H extends Le{constructor(t=1,e=1,i=1,a=32,s=1,r=!1,o=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:a,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:d};const c=this;a=Math.floor(a),s=Math.floor(s);const h=[],p=[],f=[],m=[];let v=0;const M=[],x=i/2;let g=0;C(),r===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new fe(p,3)),this.setAttribute("normal",new fe(f,3)),this.setAttribute("uv",new fe(m,2));function C(){const y=new S,B=new S;let D=0;const I=(e-t)/i;for(let N=0;N<=s;N++){const T=[],b=N/s,U=b*(e-t)+t;for(let Y=0;Y<=a;Y++){const q=Y/a,Z=q*d+o,nt=Math.sin(Z),$=Math.cos(Z);B.x=U*nt,B.y=-b*i+x,B.z=U*$,p.push(B.x,B.y,B.z),y.set(nt,I,$).normalize(),f.push(y.x,y.y,y.z),m.push(q,1-b),T.push(v++)}M.push(T)}for(let N=0;N<a;N++)for(let T=0;T<s;T++){const b=M[T][N],U=M[T+1][N],Y=M[T+1][N+1],q=M[T][N+1];(t>0||T!==0)&&(h.push(b,U,q),D+=3),(e>0||T!==s-1)&&(h.push(U,Y,q),D+=3)}c.addGroup(g,D,0),g+=D}function A(y){const B=v,D=new Ct,I=new S;let N=0;const T=y===!0?t:e,b=y===!0?1:-1;for(let Y=1;Y<=a;Y++)p.push(0,x*b,0),f.push(0,b,0),m.push(.5,.5),v++;const U=v;for(let Y=0;Y<=a;Y++){const Z=Y/a*d+o,nt=Math.cos(Z),$=Math.sin(Z);I.x=T*$,I.y=x*b,I.z=T*nt,p.push(I.x,I.y,I.z),f.push(0,b,0),D.x=nt*.5+.5,D.y=$*.5*b+.5,m.push(D.x,D.y),v++}for(let Y=0;Y<a;Y++){const q=B+Y,Z=U+Y;y===!0?h.push(Z,Z+1,q):h.push(Z+1,Z,q),N+=3}c.addGroup(g,N,y===!0?1:2),g+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new H(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Hi extends H{constructor(t=1,e=1,i=32,a=1,s=!1,r=0,o=Math.PI*2){super(0,t,e,i,a,s,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:a,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(t){return new Hi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class oa extends Le{constructor(t=[],e=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:a};const s=[],r=[];o(a),c(i),h(),this.setAttribute("position",new fe(s,3)),this.setAttribute("normal",new fe(s.slice(),3)),this.setAttribute("uv",new fe(r,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(C){const A=new S,y=new S,B=new S;for(let D=0;D<e.length;D+=3)m(e[D+0],A),m(e[D+1],y),m(e[D+2],B),d(A,y,B,C)}function d(C,A,y,B){const D=B+1,I=[];for(let N=0;N<=D;N++){I[N]=[];const T=C.clone().lerp(y,N/D),b=A.clone().lerp(y,N/D),U=D-N;for(let Y=0;Y<=U;Y++)Y===0&&N===D?I[N][Y]=T:I[N][Y]=T.clone().lerp(b,Y/U)}for(let N=0;N<D;N++)for(let T=0;T<2*(D-N)-1;T++){const b=Math.floor(T/2);T%2===0?(f(I[N][b+1]),f(I[N+1][b]),f(I[N][b])):(f(I[N][b+1]),f(I[N+1][b+1]),f(I[N+1][b]))}}function c(C){const A=new S;for(let y=0;y<s.length;y+=3)A.x=s[y+0],A.y=s[y+1],A.z=s[y+2],A.normalize().multiplyScalar(C),s[y+0]=A.x,s[y+1]=A.y,s[y+2]=A.z}function h(){const C=new S;for(let A=0;A<s.length;A+=3){C.x=s[A+0],C.y=s[A+1],C.z=s[A+2];const y=x(C)/2/Math.PI+.5,B=g(C)/Math.PI+.5;r.push(y,1-B)}v(),p()}function p(){for(let C=0;C<r.length;C+=6){const A=r[C+0],y=r[C+2],B=r[C+4],D=Math.max(A,y,B),I=Math.min(A,y,B);D>.9&&I<.1&&(A<.2&&(r[C+0]+=1),y<.2&&(r[C+2]+=1),B<.2&&(r[C+4]+=1))}}function f(C){s.push(C.x,C.y,C.z)}function m(C,A){const y=C*3;A.x=t[y+0],A.y=t[y+1],A.z=t[y+2]}function v(){const C=new S,A=new S,y=new S,B=new S,D=new Ct,I=new Ct,N=new Ct;for(let T=0,b=0;T<s.length;T+=9,b+=6){C.set(s[T+0],s[T+1],s[T+2]),A.set(s[T+3],s[T+4],s[T+5]),y.set(s[T+6],s[T+7],s[T+8]),D.set(r[b+0],r[b+1]),I.set(r[b+2],r[b+3]),N.set(r[b+4],r[b+5]),B.copy(C).add(A).add(y).divideScalar(3);const U=x(B);M(D,b+0,C,U),M(I,b+2,A,U),M(N,b+4,y,U)}}function M(C,A,y,B){B<0&&C.x===1&&(r[A]=C.x-1),y.x===0&&y.z===0&&(r[A]=B/2/Math.PI+.5)}function x(C){return Math.atan2(C.z,-C.x)}function g(C){return Math.atan2(-C.y,Math.sqrt(C.x*C.x+C.z*C.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oa(t.vertices,t.indices,t.radius,t.details)}}class me extends oa{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,a=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-i,0,-a,i,0,a,-i,0,a,i,-a,-i,0,-a,i,0,a,-i,0,a,i,0,-i,0,-a,i,0,-a,-i,0,a,i,0,a],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new me(t.radius,t.detail)}}class Hr extends oa{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,a=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Hr(t.radius,t.detail)}}class Gr extends oa{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,a,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Gr(t.radius,t.detail)}}class ia extends Le{constructor(t=.5,e=1,i=32,a=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:a,thetaStart:s,thetaLength:r},i=Math.max(3,i),a=Math.max(1,a);const o=[],d=[],c=[],h=[];let p=t;const f=(e-t)/a,m=new S,v=new Ct;for(let M=0;M<=a;M++){for(let x=0;x<=i;x++){const g=s+x/i*r;m.x=p*Math.cos(g),m.y=p*Math.sin(g),d.push(m.x,m.y,m.z),c.push(0,0,1),v.x=(m.x/e+1)/2,v.y=(m.y/e+1)/2,h.push(v.x,v.y)}p+=f}for(let M=0;M<a;M++){const x=M*(i+1);for(let g=0;g<i;g++){const C=g+x,A=C,y=C+i+1,B=C+i+2,D=C+1;o.push(A,y,D),o.push(y,B,D)}}this.setIndex(o),this.setAttribute("position",new fe(d,3)),this.setAttribute("normal",new fe(c,3)),this.setAttribute("uv",new fe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ia(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ve extends Le{constructor(t=1,e=32,i=16,a=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:a,phiLength:s,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const d=Math.min(r+o,Math.PI);let c=0;const h=[],p=new S,f=new S,m=[],v=[],M=[],x=[];for(let g=0;g<=i;g++){const C=[],A=g/i;let y=0;g===0&&r===0?y=.5/e:g===i&&d===Math.PI&&(y=-.5/e);for(let B=0;B<=e;B++){const D=B/e;p.x=-t*Math.cos(a+D*s)*Math.sin(r+A*o),p.y=t*Math.cos(r+A*o),p.z=t*Math.sin(a+D*s)*Math.sin(r+A*o),v.push(p.x,p.y,p.z),f.copy(p).normalize(),M.push(f.x,f.y,f.z),x.push(D+y,1-A),C.push(c++)}h.push(C)}for(let g=0;g<i;g++)for(let C=0;C<e;C++){const A=h[g][C+1],y=h[g][C],B=h[g+1][C],D=h[g+1][C+1];(g!==0||r>0)&&m.push(A,y,D),(g!==i-1||d<Math.PI)&&m.push(y,B,D)}this.setIndex(m),this.setAttribute("position",new fe(v,3)),this.setAttribute("normal",new fe(M,3)),this.setAttribute("uv",new fe(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ve(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Wt extends Le{constructor(t=1,e=.4,i=12,a=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:a,arc:s},i=Math.floor(i),a=Math.floor(a);const r=[],o=[],d=[],c=[],h=new S,p=new S,f=new S;for(let m=0;m<=i;m++)for(let v=0;v<=a;v++){const M=v/a*s,x=m/i*Math.PI*2;p.x=(t+e*Math.cos(x))*Math.cos(M),p.y=(t+e*Math.cos(x))*Math.sin(M),p.z=e*Math.sin(x),o.push(p.x,p.y,p.z),h.x=t*Math.cos(M),h.y=t*Math.sin(M),f.subVectors(p,h).normalize(),d.push(f.x,f.y,f.z),c.push(v/a),c.push(m/i)}for(let m=1;m<=i;m++)for(let v=1;v<=a;v++){const M=(a+1)*m+v-1,x=(a+1)*(m-1)+v-1,g=(a+1)*(m-1)+v,C=(a+1)*m+v;r.push(M,x,C),r.push(x,g,C)}this.setIndex(r),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(d,3)),this.setAttribute("uv",new fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wt(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ai extends Le{constructor(t=new kc(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),e=64,i=1,a=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:a,closed:s};const r=t.computeFrenetFrames(e,s);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const o=new S,d=new S,c=new Ct;let h=new S;const p=[],f=[],m=[],v=[];M(),this.setIndex(v),this.setAttribute("position",new fe(p,3)),this.setAttribute("normal",new fe(f,3)),this.setAttribute("uv",new fe(m,2));function M(){for(let A=0;A<e;A++)x(A);x(s===!1?e:0),C(),g()}function x(A){h=t.getPointAt(A/e,h);const y=r.normals[A],B=r.binormals[A];for(let D=0;D<=a;D++){const I=D/a*Math.PI*2,N=Math.sin(I),T=-Math.cos(I);d.x=T*y.x+N*B.x,d.y=T*y.y+N*B.y,d.z=T*y.z+N*B.z,d.normalize(),f.push(d.x,d.y,d.z),o.x=h.x+i*d.x,o.y=h.y+i*d.y,o.z=h.z+i*d.z,p.push(o.x,o.y,o.z)}}function g(){for(let A=1;A<=e;A++)for(let y=1;y<=a;y++){const B=(a+1)*(A-1)+(y-1),D=(a+1)*A+(y-1),I=(a+1)*A+y,N=(a+1)*(A-1)+y;v.push(B,D,N),v.push(D,I,N)}}function C(){for(let A=0;A<=e;A++)for(let y=0;y<=a;y++)c.x=A/e,c.y=y/a,m.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ai(new o0[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Ft extends Fi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xc,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Vr extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class c0 extends Vr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Os=new he,$o=new S,jo=new S;class l0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fr,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;$o.setFromMatrixPosition(t.matrixWorld),e.position.copy($o),jo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(jo),e.updateMatrixWorld(),Os.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Os),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Os)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class d0 extends l0{constructor(){super(new Ic(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class h0 extends Vr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new d0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class u0 extends Vr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class d2{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Qo();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Qo(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rr);function ka(n,t){const e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function Wr(n,t){const e=Math.floor(n),i=Math.floor(t),a=n-e,s=t-i,r=a*a*(3-2*a),o=s*s*(3-2*s),d=ka(e,i),c=ka(e+1,i),h=ka(e,i+1),p=ka(e+1,i+1);return d+(c-d)*r+(h-d)*o+(d-c-h+p)*r*o}function tc(n,t,e=4){let i=0,a=.5,s=1;for(let r=0;r<e;r++)i+=Wr(n*s,t*s)*a,s*=2,a*=.5;return i}function $a(n,t,e){const i=Math.min(1,Math.max(0,(e-n)/(t-n)));return i*i*(3-2*i)}function f0(n,t,e){return n+(t-n)*e}const ja=640,ec=180,p0=[[180,-90,46,8],[-210,150,30,5.5],[95,230,18,3.2],[-70,-250,36,6],[250,80,14,2.4],[-160,-40,12,2]];function m0(n,t,e,i,a,s){const r=n-e,o=t-i,d=Math.sqrt(r*r+o*o);if(d>a)return 0;const c=d/a,h=-s*(1-c*c),p=s*.28*Math.exp(-((c-.86)*(c-.86))/.018);return h+p}const g0=[[0,0,48,100],[52,24,18,36],[22,82,14,28],[80,-44,40,60],[112,-83,18,30],[-32,-98,16,26],[-88,-188,24,42],[-68,-16,16,28],[22,-112,12,20],[-6,-108,18,32],[36,72,16,32],[-24,44,16,32],[-32,-148,12,22],[-64,-90,10,18],[-50,-100,16,28],[38,-126,12,20],[-60,-148,8,14],[-64,-118,8,14],[-18,-88,10,18],[68,-10,12,20],[-22,-88,8,14],[-48,68,16,32],[78,56,16,32],[-13,-134,16,28],[8,-142,12,20],[135,-40,20,34],[68,6,12,20],[-28,-138,8,14],[-36,-74,14,24],[2,-22,8,14],[-50,-72,10,16],[10,-124,12,20],[20,8,12,20],[-16,136,28,48],[158,-62,22,36],[158,-28,10,16],[-96,-16,16,26],[-78,-172,12,20],[66,-74,14,22],[18,-152,12,18],[-20,-100,10,16],[-8,-162,10,16],[8,-98,10,16],[48,-70,10,16],[-68,12,12,18],[22,-80,10,16],[52,-112,12,18],[-90,-158,10,16],[8,-78,10,16],[-8,-88,10,16],[-96,4,10,16],[142,-62,8,14],[28,-140,10,16],[-90,-148,8,14],[12,18,8,12],[36,8,10,16],[36,-6,10,16],[-50,4,10,16],[-58,-142,10,16],[-32,-22,10,16],[66,-90,10,16],[22,-98,10,16],[172,-48,10,16],[38,-104,10,16],[24,-128,8,14],[-80,20,10,16],[6,148,8,14],[-64,80,10,16],[-80,32,10,16],[100,-22,8,14],[-22,-56,10,16],[-124,-188,12,20],[-38,16,10,16],[70,-112,12,18],[16,48,8,14],[-58,-36,12,16],[50,4,10,18],[-40,-168,12,16],[82,-90,10,14],[4,-148,10,14],[148,-40,10,14],[124,-70,10,14],[96,-44,10,14],[-84,8,10,14],[16,-86,10,14],[135,-22,12,14],[100,-70,12,14],[82,-28,12,14],[-68,2,12,14],[122,-40,8,22],[98,-83,8,22],[70,-44,8,22],[-102,-158,10,14],[-18,-78,12,14],[-64,-184,12,16],[32,-152,10,12],[-96,16,16,10],[82,-74,16,14],[-78,-156,10,12],[-110,8,10,12],[-110,20,10,12],[-110,32,10,12],[-122,8,12,12],[-122,20,10,12],[-8,-98,12,12],[-22,-98,10,12],[8,-88,10,12],[-78,-36,12,12],[96,-90,10,12],[-5,-78,8,10],[16,-148,10,12],[-90,-136,10,12],[16,-74,8,10],[-48,-138,12,14],[52,-126,12,12],[70,-126,10,12],[0,-68,8,10],[48,-70,8,10],[-46,-148,8,10],[-38,16,8,10],[38,-104,8,10],[172,-48,8,10],[-16,36,8,10],[4,-138,8,10],[68,6,8,10],[66,-104,12,10],[80,-104,8,8],[18,136,10,8],[22,-98,8,8],[172,-62,10,10],[-92,-184,10,10]];function L(n,t){let e=0;e+=(tc(n*.0038,t*.0038,5)-.45)*16,e+=(tc(n*.018,t*.018,3)-.5)*2.8,e+=(Wr(n*.07,t*.07)-.5)*.45;for(const[i,a,s,r]of p0)e+=m0(n,t,i,a,s,r);for(const[i,a,s,r]of g0){const o=$a(r,s,Math.hypot(n-i,t-a));e=f0(e,.35+e*.12,o)}return e}function _0(n,t,e,i){const a=new Vt(9059108),s=new Vt(12085818),r=new Vt(12880469),o=new Vt(4858904),d=$a(-4,8,e),c=a.clone().lerp(s,d).lerp(r,$a(6,14,e)*.35);i>.45&&c.lerp(o,Math.min(.55,(i-.45)*1.4));const h=Wr(n*.11,t*.11);c.offsetHSL(0,(h-.5)*.08,(h-.5)*.06);const p=x0(n,t);return p>0&&c.lerp(new Vt(5911332),p*.85),c}function x0(n,t){const e=[{ax:0,az:18,bx:0,bz:-124},{ax:0,az:-40,bx:84,bz:-42},{ax:0,az:-40,bx:-68,bz:-16},{ax:0,az:-90,bx:-55,bz:-150},{ax:18,az:-70,bx:52,bz:-88},{ax:12,az:8,bx:50,bz:22},{ax:16,az:28,bx:22,bz:78},{ax:-58,az:-158,bx:-90,bz:-190},{ax:-14,az:-104,bx:-32,bz:-98},{ax:84,az:-42,bx:112,bz:-83},{ax:0,az:-108,bx:22,bz:-112},{ax:22,az:-112,bx:48,bz:-86},{ax:-6,az:-116,bx:-18,bz:-138},{ax:0,az:8,bx:-15,bz:-8},{ax:16,az:28,bx:36,bz:72},{ax:0,az:18,bx:-24,bz:44},{ax:-58,az:-158,bx:-64,bz:-90},{ax:-64,az:-90,bx:-68,bz:-16},{ax:-18,az:-138,bx:-32,bz:-148},{ax:-32,az:-98,bx:-46,bz:-100},{ax:22,az:-112,bx:38,bz:-126},{ax:-58,az:-158,bx:-60,bz:-148},{ax:-64,az:-118,bx:-18,bz:-88},{ax:84,az:-42,bx:68,bz:-10},{ax:-6,az:-108,bx:-18,bz:-88},{ax:0,az:18,bx:-48,bz:68},{ax:16,az:28,bx:78,bz:56},{ax:-6,az:-116,bx:-13,bz:-134},{ax:38,az:-126,bx:8,bz:-142},{ax:-13,az:-134,bx:8,bz:-142},{ax:112,az:-83,bx:135,bz:-40},{ax:68,az:-10,bx:68,bz:6},{ax:-13,az:-134,bx:-28,bz:-138},{ax:-46,az:-108,bx:-20,bz:-132},{ax:-6,az:-108,bx:-6,bz:-132},{ax:-6,az:-96,bx:2,bz:-22},{ax:-32,az:-98,bx:-36,bz:-74},{ax:-40,az:-76,bx:-32,bz:-98},{ax:-40,az:-76,bx:-50,bz:-72},{ax:-6,az:-132,bx:10,bz:-124},{ax:10,az:-124,bx:8,bz:-142},{ax:0,az:8,bx:20,bz:8},{ax:22,az:82,bx:-16,bz:136},{ax:0,az:32,bx:-16,bz:136},{ax:135,az:-40,bx:158,bz:-62},{ax:-68,az:-16,bx:-96,bz:-16},{ax:-58,az:-158,bx:-78,bz:-172},{ax:48,az:-86,bx:66,bz:-74},{ax:8,az:-142,bx:18,bz:-152},{ax:-32,az:-148,bx:-8,bz:-162},{ax:-6,az:-108,bx:8,bz:-98},{ax:22,az:-112,bx:8,bz:-98},{ax:48,az:-86,bx:48,bz:-70},{ax:-68,az:-16,bx:-68,bz:12},{ax:-36,az:-74,bx:22,bz:-80},{ax:48,az:-86,bx:22,bz:-80},{ax:22,az:-112,bx:52,bz:-112},{ax:38,az:-126,bx:52,bz:-112},{ax:-78,az:-172,bx:-90,bz:-158},{ax:8,az:-98,bx:8,bz:-78},{ax:22,az:-80,bx:8,bz:-78},{ax:8,az:-98,bx:-8,bz:-88},{ax:-22,az:-88,bx:-8,bz:-88},{ax:-96,az:-16,bx:-96,bz:4},{ax:158,az:-62,bx:142,bz:-62},{ax:8,az:-142,bx:28,bz:-140},{ax:18,az:-152,bx:28,bz:-140},{ax:-90,az:-158,bx:-90,bz:-148},{ax:5,az:16,bx:12,bz:18},{ax:20,az:8,bx:36,bz:8},{ax:36,az:8,bx:36,bz:-6},{ax:-68,az:4,bx:-50,bz:4},{ax:-58,az:-158,bx:-58,bz:-142},{ax:-15,az:-8,bx:-32,bz:-22},{ax:66,az:-74,bx:66,bz:-90},{ax:8,az:-98,bx:22,bz:-98},{ax:158,az:-62,bx:172,bz:-48},{ax:22,az:-112,bx:38,bz:-104},{ax:10,az:-124,bx:24,bz:-128},{ax:-68,az:12,bx:-80,bz:20},{ax:-16,az:136,bx:6,bz:148},{ax:-48,az:68,bx:-64,bz:80},{ax:-80,az:20,bx:-80,bz:32},{ax:135,az:-40,bx:100,bz:-22},{ax:100,az:-22,bx:68,bz:-10},{ax:-36,az:-74,bx:-22,bz:-56},{ax:-90,az:-158,bx:-124,bz:-188},{ax:-50,az:4,bx:-38,bz:16},{ax:52,az:-112,bx:70,bz:-112},{ax:22,az:82,bx:16,bz:48},{ax:-58,az:-142,bx:-58,bz:-36},{ax:-58,az:-36,bx:-68,bz:-16},{ax:36,az:8,bx:50,bz:4},{ax:-58,az:-158,bx:-40,bz:-168},{ax:66,az:-90,bx:82,bz:-90},{ax:-8,az:-162,bx:4,bz:-148},{ax:135,az:-40,bx:148,bz:-40},{ax:112,az:-83,bx:124,bz:-70},{ax:82,az:-44,bx:96,bz:-44},{ax:-68,az:12,bx:-84,bz:8},{ax:-8,az:-88,bx:16,bz:-86},{ax:135,az:-40,bx:135,bz:-22},{ax:124,az:-70,bx:100,bz:-70},{ax:82,az:-44,bx:82,bz:-28},{ax:-68,az:-16,bx:-68,bz:2},{ax:135,az:-40,bx:122,bz:-40},{ax:112,az:-83,bx:98,bz:-83},{ax:82,az:-44,bx:70,bz:-44},{ax:-90,az:-158,bx:-102,bz:-158},{ax:8,az:-78,bx:-18,bz:-78},{ax:-78,az:-172,bx:-64,bz:-184},{ax:18,az:-152,bx:32,bz:-152},{ax:-96,az:4,bx:-96,bz:16},{ax:66,az:-74,bx:82,bz:-74},{ax:-78,az:-172,bx:-78,bz:-156},{ax:-96,az:4,bx:-110,bz:8},{ax:-110,az:8,bx:-110,bz:20},{ax:-110,az:20,bx:-110,bz:32},{ax:-110,az:8,bx:-122,bz:8},{ax:-122,az:8,bx:-122,bz:20},{ax:8,az:-98,bx:-8,bz:-98},{ax:-8,az:-98,bx:-22,bz:-98},{ax:-8,az:-88,bx:8,bz:-88},{ax:-58,az:-36,bx:-78,bz:-36},{ax:82,az:-90,bx:96,bz:-90},{ax:8,az:-78,bx:-5,bz:-78},{ax:4,az:-148,bx:16,bz:-148},{ax:-90,az:-148,bx:-90,bz:-136},{ax:16,az:-86,bx:16,bz:-74},{ax:-32,az:-148,bx:-48,bz:-138},{ax:52,az:-112,bx:52,bz:-126},{ax:52,az:-126,bx:70,bz:-126},{ax:0,az:-68,bx:0,bz:-118},{ax:48,az:-70,bx:90,bz:-80},{ax:-46,az:-148,bx:-90,bz:-148},{ax:-38,az:16,bx:-68,bz:12},{ax:38,az:-104,bx:52,bz:-112},{ax:172,az:-48,bx:158,bz:-62},{ax:-16,az:36,bx:4,bz:32},{ax:4,az:-138,bx:-18,bz:-138},{ax:68,az:6,bx:50,bz:4},{ax:66,az:-90,bx:66,bz:-104},{ax:66,az:-104,bx:80,bz:-104},{ax:6,az:148,bx:18,bz:136},{ax:8,az:-98,bx:22,bz:-98},{ax:172,az:-48,bx:172,bz:-62},{ax:-64,az:-184,bx:-92,bz:-184}];let i=0;for(const a of e){const s=a.bx-a.ax,r=a.bz-a.az,o=s*s+r*r;let d=((n-a.ax)*s+(t-a.az)*r)/o;d=Math.min(1,Math.max(0,d));const c=a.ax+s*d,h=a.az+r*d,p=Math.hypot(n-c,t-h);i=Math.max(i,$a(5.4,1.6,p))}return i}function v0(){const n=new Oi(ja,ja,ec,ec);n.rotateX(-Math.PI/2);const t=n.attributes.position,e=new Float32Array(t.count*3);for(let r=0;r<t.count;r++){const o=t.getX(r),d=t.getZ(r),c=L(o,d);t.setY(r,c)}n.computeVertexNormals();const i=n.attributes.normal;for(let r=0;r<t.count;r++){const o=1-Math.abs(i.getY(r)),d=_0(t.getX(r),t.getZ(r),t.getY(r),o);e[r*3]=d.r,e[r*3+1]=d.g,e[r*3+2]=d.b}n.setAttribute("color",new Xe(e,3));const a=new Ft({vertexColors:!0,roughness:.94,metalness:.02,flatShading:!1}),s=new de(n,a);return s.receiveShadow=!0,s.name="terrain",s}function M0(){const n=new G;n.name="rocks";const t=[new me(1,0),new Hr(1,0),new Gr(1,0)],e=[new Ft({color:8011048,roughness:.95,flatShading:!0}),new Ft({color:6040604,roughness:.92,flatShading:!0}),new Ft({color:9260592,roughness:.9,flatShading:!0})],i=new Me,a=[220,160,90];for(let s=0;s<3;s++){const r=new Wp(t[s],e[s],a[s]);r.castShadow=!0,r.receiveShadow=!0;let o=0,d=0;for(;o<a[s]&&d<a[s]*8;){d++;const c=(Un(o,s,1)-.5)*ja*.92,h=(Un(o,s,2)-.5)*ja*.92;if(Math.hypot(c,h)<42||Math.hypot(c-52,h-24)<22||Math.hypot(c-22,h-82)<18||Math.hypot(c-80,h+44)<44||Math.hypot(c-112,h+83)<22||Math.hypot(c+32,h+98)<20||Math.hypot(c+88,h+188)<30||Math.hypot(c-22,h+112)<16||Math.hypot(c+68,h+16)<22||Math.hypot(c-36,h-72)<20||Math.hypot(c+24,h-44)<20||Math.hypot(c+32,h+148)<16||Math.hypot(c+64,h+90)<14||Math.hypot(c+50,h+100)<22||Math.hypot(c-38,h+126)<16||Math.hypot(c+18,h+88)<14||Math.hypot(c-68,h+10)<16||Math.hypot(c+60,h+148)<12||Math.hypot(c+64,h+118)<12||Math.hypot(c+48,h-68)<20||Math.hypot(c-78,h-56)<20||Math.hypot(c+13,h+134)<20||Math.hypot(c-8,h+142)<16||Math.hypot(c-135,h+40)<24||Math.hypot(c-68,h-6)<16||Math.hypot(c+28,h+138)<12||Math.hypot(c+36,h+74)<18||Math.hypot(c-2,h+22)<12||Math.hypot(c+50,h+72)<14||Math.hypot(c-10,h+124)<16||Math.hypot(c-20,h-8)<16||Math.hypot(c+16,h-136)<32||Math.hypot(c-158,h+62)<24||Math.hypot(c+96,h+16)<20||Math.hypot(c+78,h+172)<16||Math.hypot(c-66,h+74)<16||Math.hypot(c-18,h+152)<14||Math.hypot(c+20,h+100)<14||Math.hypot(c+8,h+162)<14||Math.hypot(c-8,h+98)<14||Math.hypot(c-48,h+70)<14||Math.hypot(c+68,h-12)<16||Math.hypot(c-22,h+80)<14||Math.hypot(c-52,h+112)<16||Math.hypot(c+90,h+158)<14||Math.hypot(c-8,h+78)<14||Math.hypot(c+8,h+88)<14||Math.hypot(c+96,h-4)<14||Math.hypot(c-142,h+62)<14||Math.hypot(c-28,h+140)<14||Math.hypot(c+90,h+148)<12||Math.hypot(c-12,h-18)<12||Math.hypot(c-36,h-8)<14||Math.hypot(c-36,h+6)<14||Math.hypot(c+50,h-4)<14||Math.hypot(c+58,h+142)<14||Math.hypot(c+32,h+22)<14||Math.hypot(c-66,h+90)<14||Math.hypot(c-22,h+98)<14||Math.hypot(c-172,h+48)<14||Math.hypot(c-38,h+104)<14||Math.hypot(c-24,h+128)<12||Math.hypot(c+80,h-20)<14||Math.hypot(c-6,h-148)<12||Math.hypot(c+64,h-80)<14||Math.hypot(c+80,h-32)<14||Math.hypot(c-100,h+22)<12||Math.hypot(c+22,h+56)<14||Math.hypot(c+124,h+188)<16||Math.hypot(c+38,h-16)<14||Math.hypot(c-70,h+112)<16||Math.hypot(c-16,h-48)<12||Math.hypot(c+58,h+36)<14||Math.hypot(c-50,h-4)<14||Math.hypot(c+40,h+168)<14||Math.hypot(c-82,h+90)<14||Math.hypot(c-4,h+148)<14||Math.hypot(c-148,h+40)<14||Math.hypot(c-124,h+70)<14||Math.hypot(c-96,h+44)<14||Math.hypot(c+84,h-8)<14||Math.hypot(c-16,h+86)<14||Math.hypot(c-135,h+22)<14||Math.hypot(c-100,h+70)<14||Math.hypot(c-82,h+28)<14||Math.hypot(c+68,h-2)<14||Math.hypot(c-122,h+40)<14||Math.hypot(c-98,h+83)<14||Math.hypot(c-70,h+44)<14||Math.hypot(c+102,h+158)<14||Math.hypot(c+18,h+78)<14||Math.hypot(c+64,h+184)<14||Math.hypot(c-32,h+152)<14||Math.hypot(c+96,h-16)<14||Math.hypot(c-82,h+74)<14||Math.hypot(c+78,h+156)<14||Math.hypot(c+110,h-8)<14||Math.hypot(c+110,h-20)<14||Math.hypot(c+110,h-32)<14||Math.hypot(c+122,h-8)<14||Math.hypot(c+122,h-20)<14||Math.hypot(c+8,h+98)<14||Math.hypot(c+22,h+98)<14||Math.hypot(c-8,h+88)<14||Math.hypot(c+78,h+36)<14||Math.hypot(c-96,h+90)<14||Math.hypot(c+5,h+78)<12||Math.hypot(c-16,h+148)<14||Math.hypot(c+90,h+136)<14||Math.hypot(c-16,h+74)<12||Math.hypot(c+48,h+138)<14||Math.hypot(c-52,h+126)<14||Math.hypot(c-70,h+126)<14||Math.hypot(c-0,h+68)<12||Math.hypot(c-48,h+70)<12||Math.hypot(c+46,h+148)<12||Math.hypot(c+38,h-16)<12||Math.hypot(c-38,h+104)<12||Math.hypot(c-172,h+48)<12||Math.hypot(c+16,h-36)<12||Math.hypot(c-4,h+138)<12||Math.hypot(c-68,h-6)<12||Math.hypot(c-66,h+104)<14||Math.hypot(c-80,h+104)<12||Math.hypot(c-18,h-136)<14||Math.hypot(c-22,h+98)<12||Math.hypot(c-172,h+62)<14||Math.hypot(c+92,h+184)<14)continue;const p=L(c,h),f=.35+Un(o,s,3)*(s===2?2.8:1.4);i.position.set(c,p+f*.25,h),i.rotation.set(Un(o,s,4)*6,Un(o,s,5)*6,Un(o,s,6)*6),i.scale.set(f,f*(.6+Un(o,s,7)*.7),f*(.7+Un(o,s,8)*.5)),i.updateMatrix(),r.setMatrixAt(o,i.matrix),o++}r.count=o,n.add(r)}return n}function Un(n,t,e){const i=Math.sin(n*12.9898+t*78.233+e*45.164)*43758.5453;return i-Math.floor(i)}const w0=`
varying vec3 vWorld;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWorld = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}
`,y0=`
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
`;function S0(n){const t=new ve(900,32,20),e=new bn({vertexShader:w0,fragmentShader:y0,uniforms:{uSunDir:{value:n.clone().normalize()}},side:Ie,depthWrite:!1}),i=new de(t,e);return i.name="sky",i}function b0(n){const t=new G,e=n.clone().normalize(),i=new h0(16769456,2.15);i.position.copy(e.clone().multiplyScalar(180)),i.castShadow=!0,i.shadow.mapSize.set(1536,1536),i.shadow.camera.near=10,i.shadow.camera.far=420,i.shadow.camera.left=-130,i.shadow.camera.right=130,i.shadow.camera.top=130,i.shadow.camera.bottom=-130,i.shadow.bias=-8e-4,t.add(i);const a=new c0(14727304,6959128,.55);t.add(a);const s=new u0(12611648,.16);t.add(s);const r=new de(new ve(7,16,16),new zr({color:16773572}));return r.position.copy(e.clone().multiplyScalar(420)),t.add(r),t.name="sun",t}function E0(){const n=new G;n.name="mountains";const t=new Ft({color:7024156,roughness:1,flatShading:!0}),e=[[0,-300,18,70],[80,-310,14,52],[-90,-305,16,60],[220,-280,12,40],[-240,-270,13,48],[300,-40,15,55],[305,80,11,38],[-310,20,16,62],[-300,140,12,44],[40,310,17,58],[-70,300,13,46],[160,290,10,36]];for(const[i,a,s,r]of e){const o=new Hi(s,r,6),d=new de(o,t),c=L(i,a)+r*.35;d.position.set(i,c,a),d.rotation.y=(i+a)*.01,n.add(d)}return n}function T0(){const t=new Float32Array(2100);for(let s=0;s<700;s++)t[s*3]=(Math.random()-.5)*220,t[s*3+1]=1+Math.random()*18,t[s*3+2]=(Math.random()-.5)*220;const e=new Le;e.setAttribute("position",new Xe(t,3));const i=new Oc({color:13934698,size:.18,transparent:!0,opacity:.35,depthWrite:!1}),a=new Xp(e,i);return a.name="dust",a}function A0(n){n.fog=new Br(12880472,.00155),n.background=new Vt(12880472)}const l={steel:new Ft({color:13225425,metalness:.88,roughness:.28}),steelDark:new Ft({color:9146518,metalness:.82,roughness:.38}),tiles:new Ft({color:1710620,metalness:.15,roughness:.72}),soot:new Ft({color:2763308,metalness:.4,roughness:.55}),pad:new Ft({color:7168600,metalness:.08,roughness:.88}),padRing:new Ft({color:4866876,metalness:.1,roughness:.8}),solar:new Ft({color:727603,metalness:.55,roughness:.22}),solarFrame:new Ft({color:10133670,metalness:.7,roughness:.35}),tankCh4:new Ft({color:12868132,metalness:.35,roughness:.45}),tankO2:new Ft({color:14212579,metalness:.4,roughness:.4}),hab:new Ft({color:13616824,metalness:.15,roughness:.62}),habDark:new Ft({color:6972508,metalness:.2,roughness:.55}),glass:new Ft({color:8963232,metalness:.1,roughness:.18,transparent:!0,opacity:.42,depthWrite:!1}),plant:new Ft({color:4160056,roughness:.85}),rover:new Ft({color:12106944,metalness:.55,roughness:.4}),roverDark:new Ft({color:3356218,metalness:.4,roughness:.5}),crate:new Ft({color:9080724,metalness:.45,roughness:.5}),ice:new Ft({color:14083823,metalness:.05,roughness:.35}),rust:new Ft({color:8011560,roughness:.9}),glowWarm:new Ft({color:16761994,emissive:16751178,emissiveIntensity:.85,roughness:.4}),glowPad:new Ft({color:16765056,emissive:16756800,emissiveIntensity:.7}),concrete:new Ft({color:9076852,roughness:.92}),lattice:new Ft({color:10133668,metalness:.7,roughness:.4}),graded:new Ft({color:6968134,roughness:.94,metalness:.04}),pipe:new Ft({color:8030868,metalness:.55,roughness:.4}),cable:new Ft({color:2762274,metalness:.35,roughness:.55}),robot:new Ft({color:13159632,metalness:.62,roughness:.38}),flagIce:new Ft({color:12966116,roughness:.72,metalness:.04}),flagDeposit:new Ft({color:12081704,roughness:.8,metalness:.06}),track:new Ft({color:4006936,roughness:.97}),roadBed:new Ft({color:6044202,roughness:.97,metalness:.02}),soil:new Ft({color:4861468,roughness:.96}),plantLeaf:new Ft({color:3107378,roughness:.88}),dish:new Ft({color:14210252,metalness:.38,roughness:.42}),suit:new Ft({color:15131352,metalness:.18,roughness:.55}),suitDark:new Ft({color:6052438,metalness:.35,roughness:.5}),visor:new Ft({color:12886090,metalness:.75,roughness:.18,emissive:3811336,emissiveIntensity:.28}),battery:new Ft({color:3817026,metalness:.48,roughness:.48})};function R0(n,t="#1c120c",e="#f3e2cc"){const i=document.createElement("canvas");i.width=512,i.height=128;const a=i.getContext("2d");a.fillStyle=t,a.fillRect(0,0,512,128),a.strokeStyle=e,a.lineWidth=6,a.strokeRect(10,10,492,108),a.fillStyle=e;const s=n.length>12?36:n.length>8?44:n.length>5?54:64;a.font=`bold ${s}px sans-serif`,a.textAlign="center",a.textBaseline="middle",a.fillText(n,256,68);const r=new qp(i);return r.colorSpace=Oe,r}function u(n,t,e,i,a,s=0,r=0,o=0){const d=new de(n,t);return d.position.set(e,i,a),d.rotation.set(s,r,o),d.castShadow=!0,d.receiveShadow=!0,d}function Be(n,t,e=0){return[n,L(n,t)+e,t]}function R(n,t,e,i,a,s,r,o,d=0){const c=new Ft({map:R0(n,t,e),side:cn,roughness:.55,metalness:.08}),h=new de(new Oi(i,a),c);return h.position.set(s,r,o),h.rotation.y=d,h.castShadow=!1,h}function Et(n,t,e,i=0,a=1){const s=L(t,e)+.85*a;n.add(u(new _(1.7*a,1.5*a,1.7*a),l.crate,t,s,e,0,i,0)),n.add(u(new _(1.78*a,.08,1.78*a),l.steelDark,t,s+.78*a,e,0,i,0))}function C0(){const n=new G;n.name="settlement";const t=[],e=[];n.add(Zn(0,0,{finished:!0}));const i=yi(0,0,{name:"starship",crewHab:!0});n.add(i),u1(t),e.push({id:"starship",name:"Crew hab Starship",position:new S(0,18,0)}),e.push({id:"eva",name:"EVA / airlock",position:new S(2,3,12)});const a=H1();n.add(a),t.push({type:"box",x:12,z:18,w:6,d:3}),e.push({id:"evarack",name:"EVA suit rack",position:new S(12,3,18)}),n.add(Zn(52,24,{finished:!1}));const s=yi(52,24,{name:"cargo-starship",cargoOpen:!0});n.add(s),t.push({type:"cyl",x:52,z:24,r:7.4}),e.push({id:"cargo",name:"Cargo Starship",position:new S(52,18,24)}),n.add(Zn(36,72,{finished:!1}));const r=yi(36,72,{name:"cargo-3",cargoOpen:!0});n.add(r),t.push({type:"cyl",x:36,z:72,r:7.4}),e.push({id:"cargo3",name:"Cargo Starship 3",position:new S(36,18,72)}),n.add(nc(24,70)),n.add(Zn(-24,44,{finished:!1}));const o=yi(-24,44,{name:"cargo-4"});n.add(o),t.push({type:"cyl",x:-24,z:44,r:7.4}),e.push({id:"cargo4",name:"Cargo Starship 4",position:new S(-24,18,44)}),n.add(Zn(-48,68,{finished:!1}));const d=yi(-48,68,{name:"cargo-5",cargoOpen:!0});n.add(d),t.push({type:"cyl",x:-48,z:68,r:7.4}),e.push({id:"cargo5",name:"Window-2 cargo Starship",position:new S(-48,18,68)}),n.add(nc(-60,66));const c=tm();n.add(c),t.push({type:"box",x:-64,z:80,w:8,d:8}),e.push({id:"crane",name:"Window-2 cargo crane",position:new S(-64,8,80)}),n.add(Zn(78,56,{finished:!1}));const h=yi(78,56,{name:"cargo-6"});n.add(h),t.push({type:"cyl",x:78,z:56,r:7.4}),e.push({id:"cargo6",name:"Window-2 cargo Starship",position:new S(78,18,56)}),n.add(P0()),n.add(D0()),n.add(I0()),n.add(L0()),e.push({id:"prep",name:"Landing prep",position:new S(22,4,82)});const p=om();n.add(p),t.push({type:"box",x:16,z:48,w:6,d:5});for(const[ze,An]of[[4,68],[4,50],[4,32]])t.push({type:"cyl",x:ze,z:An,r:.45});e.push({id:"aplights",name:"Pad approach lights",position:new S(16,4,48)});const f=e2();n.add(f),t.push({type:"box",x:-16,z:36,w:8,d:6}),e.push({id:"padflood",name:"Pad flood lights",position:new S(-16,4,36)}),n.add(w1()),t.push({type:"box",x:-38,z:148,w:10,d:8}),e.push({id:"pad2",name:"Next-window pad",position:new S(-16,6,136)}),e.push({id:"sinter",name:"Pad sinter rig",position:new S(-38,4,148)});const m=Q1();n.add(m),t.push({type:"box",x:6,z:148,w:6,d:5});for(const[ze,An]of[[2,154],[-34,154],[2,118],[-34,118]])t.push({type:"cyl",x:ze,z:An,r:.55});e.push({id:"beacons",name:"Pad 2 landing beacons",position:new S(6,5,148)});const v=r2();n.add(v),t.push({type:"box",x:18,z:136,w:10,d:6}),e.push({id:"roller",name:"Pad sinter roller",position:new S(18,4,136)});const M=U0();n.add(M),e.push({id:"solar",name:"Solar farm",position:new S(82,6,-44)});const x=bm();n.add(x),t.push({type:"box",x:70,z:-44,w:1.2,d:22}),e.push({id:"fence1",name:"Farm 1 dust fence",position:new S(70,4,-44)});const g=mm();n.add(g),t.push({type:"box",x:96,z:-44,w:10,d:8}),e.push({id:"comb1",name:"Farm 1 combiner",position:new S(96,4,-44)});const C=Mm();n.add(C),t.push({type:"box",x:82,z:-28,w:12,d:8}),e.push({id:"night1",name:"Farm 1 night store",position:new S(82,4,-28)});const A=V0();n.add(A),e.push({id:"solar2",name:"Solar field 2",position:new S(112,5,-83)});const y=Sm();n.add(y),t.push({type:"box",x:98,z:-83,w:1.2,d:22}),e.push({id:"fence2",name:"Field 2 dust fence",position:new S(98,4,-83)});const B=pm();n.add(B),t.push({type:"box",x:124,z:-70,w:10,d:8}),e.push({id:"comb2",name:"Field 2 combiner",position:new S(124,4,-70)});const D=vm();n.add(D),t.push({type:"box",x:100,z:-70,w:12,d:8}),e.push({id:"night2",name:"Field 2 night store",position:new S(100,4,-70)});const I=p1();n.add(I),e.push({id:"solar3",name:"Solar field 3",position:new S(135,5,-40)});const N=ym();n.add(N),t.push({type:"box",x:122,z:-40,w:1.2,d:22}),e.push({id:"fence3",name:"Field 3 dust fence",position:new S(122,4,-40)});const T=fm();n.add(T),t.push({type:"box",x:148,z:-40,w:10,d:8}),e.push({id:"comb3",name:"Field 3 combiner",position:new S(148,4,-40)});const b=xm();n.add(b),t.push({type:"box",x:135,z:-22,w:12,d:8}),e.push({id:"night3",name:"Field 3 night store",position:new S(135,4,-22)});const U=S1();n.add(U),t.push({type:"box",x:158,z:-28,w:12,d:8}),e.push({id:"solar4",name:"Solar field 4",position:new S(158,5,-62)});const Y=t2();n.add(Y),t.push({type:"box",x:172,z:-48,w:8,d:6}),e.push({id:"sol4light",name:"Field 4 lights",position:new S(172,4,-48)});const q=c2();n.add(q),t.push({type:"box",x:172,z:-62,w:10,d:8}),e.push({id:"inv4",name:"Field 4 spare inverter",position:new S(172,4,-62)});const Z=B1();n.add(Z),t.push({type:"box",x:142,z:-62,w:1.2,d:22}),e.push({id:"dustfence",name:"Solar dust fence",position:new S(142,4,-62)});const nt=J1();n.add(nt),t.push({type:"box",x:172,z:-48,w:10,d:8}),e.push({id:"combiner",name:"Field 4 combiner",position:new S(172,4,-48)});const $=nm();n.add($),t.push({type:"box",x:100,z:-22,w:8,d:6}),e.push({id:"trench",name:"Field 4 power trench",position:new S(100,3,-22)}),n.add(N0()),n.add(W0());const rt=F0();n.add(rt),t.push({type:"box",x:-68,z:-16,w:30,d:22}),e.push({id:"isru",name:"Sabatier ISRU",position:new S(-68,8,-16)});const J=wm();n.add(J),t.push({type:"box",x:-68,z:2,w:12,d:8}),e.push({id:"co2t1",name:"CO2 intake 1",position:new S(-68,5,2)});const ht=I1();n.add(ht),t.push({type:"box",x:-68,z:12,w:16,d:6}),e.push({id:"radiators",name:"ISRU radiators",position:new S(-68,5,12)});const _t=gm();n.add(_t),t.push({type:"box",x:-84,z:8,w:10,d:8}),e.push({id:"condense",name:"Sabatier condenser",position:new S(-84,5,8)});const Rt=b1();n.add(Rt),t.push({type:"box",x:-96,z:-16,w:18,d:18}),e.push({id:"isru2",name:"Sabatier train 2",position:new S(-96,8,-16)});const Xt=O1();n.add(Xt),t.push({type:"box",x:-96,z:4,w:12,d:8}),e.push({id:"co2cap",name:"CO2 intake 2",position:new S(-96,5,4)});const ie=Cm();n.add(ie),t.push({type:"box",x:-96,z:16,w:16,d:6}),e.push({id:"radiators2",name:"ISRU radiators 2",position:new S(-96,5,16)});const Q=Im();n.add(Q),t.push({type:"box",x:-110,z:8,w:10,d:8}),e.push({id:"condense2",name:"Sabatier condenser 2",position:new S(-110,5,8)});const ot=Lm();n.add(ot),t.push({type:"box",x:-110,z:20,w:10,d:8}),e.push({id:"chiller2",name:"CH4 liquefaction 2",position:new S(-110,5,20)});const bt=Um();n.add(bt),t.push({type:"box",x:-110,z:32,w:10,d:8}),e.push({id:"o2chill2",name:"O2 liquefaction 2",position:new S(-110,5,32)});const ut=Nm();n.add(ut),t.push({type:"box",x:-122,z:8,w:12,d:8}),e.push({id:"electro2",name:"ISRU electrolysis 2",position:new S(-122,5,8)});const Lt=zm();n.add(Lt),t.push({type:"box",x:-122,z:20,w:10,d:8}),e.push({id:"h2tank2",name:"H2 recycle tank 2",position:new S(-122,5,20)});const zt=W1();n.add(zt),t.push({type:"box",x:-50,z:4,w:12,d:8}),e.push({id:"electro",name:"ISRU electrolysis",position:new S(-50,5,4)});const qt=jm();n.add(qt),t.push({type:"box",x:-38,z:16,w:8,d:6}),e.push({id:"isrulight",name:"ISRU plant lights",position:new S(-38,4,16)});const ue=sm();n.add(ue),t.push({type:"box",x:-38,z:16,w:10,d:8}),e.push({id:"h2tank",name:"H2 recycle tank",position:new S(-38,5,16)});const Zt=cm();n.add(Zt),t.push({type:"box",x:-58,z:-36,w:12,d:8}),e.push({id:"pwater",name:"ISRU process water",position:new S(-58,5,-36)});const ge=km();n.add(ge),t.push({type:"box",x:-78,z:-36,w:12,d:8}),e.push({id:"pwater2",name:"ISRU process water 2",position:new S(-78,5,-36)});const k=j1();n.add(k),t.push({type:"box",x:-80,z:20,w:10,d:8}),e.push({id:"chiller",name:"CH4 liquefaction",position:new S(-80,5,20)});const Ue=em();n.add(Ue),t.push({type:"box",x:-80,z:32,w:10,d:8}),e.push({id:"o2chill",name:"O2 liquefaction",position:new S(-80,5,32)}),n.add(z0());const Yt=O0();n.add(Yt),t.push({type:"box",x:-14,z:-104,w:14,d:8}),t.push({type:"box",x:2,z:-104,w:14,d:8}),t.push({type:"box",x:-6,z:-116,w:8,d:14}),e.push({id:"habs",name:"Hab cluster",position:new S(-6,5,-108)});const Kt=X0();n.add(Kt),t.push({type:"box",x:-32,z:-98,w:16,d:12}),e.push({id:"hab-kit",name:"Hab from cargo",position:new S(-32,5,-98)});const Dt=q0();n.add(Dt),t.push({type:"box",x:-46,z:-108,w:14,d:8}),t.push({type:"box",x:-46,z:-94,w:14,d:8}),t.push({type:"box",x:-58,z:-102,w:8,d:14}),e.push({id:"pressure",name:"Pressure habs",position:new S(-50,5,-100)});const oe=h1();n.add(oe),t.push({type:"box",x:-20,z:-132,w:14,d:8}),t.push({type:"box",x:-6,z:-132,w:14,d:8}),t.push({type:"box",x:-13,z:-142,w:8,d:14}),e.push({id:"hab3",name:"Hab street",position:new S(-13,5,-134)});const Pt=g1();n.add(Pt),Si(t,-33,-120,"x",28),Si(t,-6,-120,"z",24),Si(t,-4,-58,"z",70),t.push({type:"cyl",x:2,z:-22,r:1.6}),e.push({id:"corridors",name:"Pressurized neighborhood",position:new S(-20,4,-120)});const P=_1();n.add(P),t.push({type:"box",x:-30,z:-69,w:9,d:9}),t.push({type:"box",x:-38,z:-74.2,w:7,d:4.4}),Si(t,-36,-87,"z",24),Si(t,-45,-74,"x",12),e.push({id:"yard",name:"Construction yard",position:new S(-36,5,-74)}),e.push({id:"hab6",name:"Hab 6",position:new S(-40,5,-76)});const w=im();n.add(w),t.push({type:"box",x:-22,z:-56,w:10,d:8}),e.push({id:"regolith",name:"Regolith stockpile",position:new S(-22,4,-56)});const V=x1();n.add(V),t.push({type:"box",x:-53,z:-72,w:6,d:7}),e.push({id:"med",name:"Crew ops / medical",position:new S(-50,5,-72)});const tt=v1();n.add(tt),t.push({type:"box",x:10,z:-124,w:14,d:10}),Si(t,2,-128,"x",10),e.push({id:"commons",name:"Crew commons / mess",position:new S(10,5,-124)});const it=B0();n.add(it),t.push({type:"box",x:22,z:-112,w:16,d:10}),t.push({type:"box",x:32,z:-112,w:8,d:6}),e.push({id:"greenhouse",name:"CO2 life support",position:new S(22,4,-112)});const j=U1();n.add(j),t.push({type:"box",x:52,z:-112,w:14,d:9}),e.push({id:"greenhouse2",name:"Greenhouse 2",position:new S(52,4,-112)});const Tt=Qm();n.add(Tt),t.push({type:"box",x:38,z:-104,w:8,d:6}),e.push({id:"ghlight",name:"Greenhouse lights",position:new S(38,4,-104)});const ft=rm();n.add(ft),t.push({type:"box",x:70,z:-112,w:12,d:8}),e.push({id:"food3",name:"Grow vault 4",position:new S(70,4,-112)});const xt=Z1();n.add(xt),t.push({type:"box",x:38,z:-104,w:10,d:6}),e.push({id:"ghfilter",name:"Grow dust filter",position:new S(38,4,-104)});const $t=Ym();n.add($t),t.push({type:"box",x:52,z:-126,w:12,d:8}),e.push({id:"ghwater",name:"Grow process water",position:new S(52,4,-126)});const at=Km();n.add(at),t.push({type:"box",x:70,z:-126,w:10,d:8}),e.push({id:"nutrient",name:"Grow nutrient skid",position:new S(70,4,-126)});const vt=P1();n.add(vt),t.push({type:"box",x:8,z:-98,w:12,d:8}),e.push({id:"eclss",name:"Hab ECLSS / CO2 scrub",position:new S(8,4,-98)});const It=o2();n.add(It),t.push({type:"box",x:22,z:-98,w:8,d:6}),e.push({id:"blower",name:"Hab spare blower",position:new S(22,4,-98)});const Ut=Fm();n.add(Ut),t.push({type:"box",x:-8,z:-98,w:12,d:8}),e.push({id:"eclss2",name:"Hab ECLSS 2",position:new S(-8,4,-98)});const Mt=K1();n.add(Mt),t.push({type:"box",x:22,z:-98,w:10,d:8}),e.push({id:"waste",name:"Waste / water recovery",position:new S(22,4,-98)});const Jt=Om();n.add(Jt),t.push({type:"box",x:-22,z:-98,w:10,d:8}),e.push({id:"waste2",name:"Waste recovery 2",position:new S(-22,4,-98)});const kt=F1();n.add(kt),t.push({type:"box",x:-8,z:-88,w:10,d:8}),e.push({id:"o2buf",name:"Crew O2 buffer",position:new S(-8,4,-88)});const ae=Bm();n.add(ae),t.push({type:"box",x:8,z:-88,w:10,d:8}),e.push({id:"o2buf2",name:"Crew O2 buffer 2",position:new S(8,4,-88)});const z=_m();n.add(z),t.push({type:"box",x:16,z:-86,w:10,d:8}),e.push({id:"dustlock",name:"Hab-street dust lock",position:new S(16,4,-86)});const dt=Xm();n.add(dt),t.push({type:"box",x:16,z:-74,w:8,d:6}),e.push({id:"evalocker",name:"Hab-street EVA locker",position:new S(16,4,-74)});const K=Jm();n.add(K),t.push({type:"box",x:0,z:-68,w:8,d:6}),e.push({id:"hablight",name:"Hab-street lights",position:new S(0,4,-68)});const et=o1();n.add(et),t.push({type:"box",x:38,z:-126,w:14,d:9}),e.push({id:"food",name:"Food / grow vault",position:new S(38,4,-126)});const gt=f1();n.add(gt),t.push({type:"box",x:8,z:-142,w:14,d:9}),e.push({id:"food2",name:"Hab-street grow vault",position:new S(8,4,-142)});const pt=k1();n.add(pt),t.push({type:"box",x:28,z:-140,w:10,d:8}),e.push({id:"condensate",name:"Condensate return",position:new S(28,4,-140)});const Ot=c1();n.add(Ot),t.push({type:"box",x:-60,z:-148,w:8,d:6}),t.push({type:"box",x:-64,z:-118,w:8,d:6}),t.push({type:"box",x:-18,z:-88,w:10,d:8}),e.push({id:"water",name:"Water loop",position:new S(-18,4,-88)});const pe=A1();n.add(pe),t.push({type:"box",x:18,z:-152,w:14,d:10}),e.push({id:"potable",name:"Potable water store",position:new S(18,4,-152)});const Se=Rm();n.add(Se),t.push({type:"box",x:32,z:-152,w:10,d:8}),e.push({id:"potable-uv",name:"Potable UV polish",position:new S(32,4,-152)});const ne=R1();n.add(ne),t.push({type:"box",x:-58,z:-108,w:10,d:3}),t.push({type:"box",x:-20,z:-100,w:18,d:3}),t.push({type:"box",x:22,z:-128,w:3,d:12}),e.push({id:"berms",name:"Hab dust berms",position:new S(-20,4,-100)});const ke=l1();n.add(ke),t.push({type:"box",x:68,z:-10,w:16,d:8}),t.push({type:"box",x:-22,z:-88,w:8,d:6}),e.push({id:"battery",name:"Night power store",position:new S(68,4,-10)});const Ke=m1();n.add(Ke),t.push({type:"box",x:68,z:6,w:16,d:8}),t.push({type:"box",x:-28,z:-138,w:8,d:6}),e.push({id:"battery2",name:"Crew night store",position:new S(68,4,6)});const ca=z1();n.add(ca),t.push({type:"box",x:8,z:-78,w:12,d:7}),e.push({id:"battery3",name:"Hab night store 3",position:new S(8,4,-78)});const la=Tm();n.add(la),t.push({type:"box",x:-18,z:-78,w:12,d:7}),e.push({id:"battery4",name:"Hab night store 4",position:new S(-18,4,-78)});const fn=Gm();n.add(fn),t.push({type:"box",x:-5,z:-78,w:8,d:6}),e.push({id:"habtrench",name:"Hab-street power trench",position:new S(-5,4,-78)});const Gi=j0();n.add(Gi),t.push({type:"box",x:-15,z:-8,w:10,d:7}),e.push({id:"spaceport",name:"Methalox spaceport",position:new S(-15,4,-8)});const da=M1();n.add(da),t.push({type:"box",x:20,z:8,w:16,d:12}),e.push({id:"stock",name:"Methalox stockpile",position:new S(20,4,8)});const ha=G1();n.add(ha),t.push({type:"box",x:36,z:8,w:10,d:8}),e.push({id:"ch4buf",name:"CH4 return buffer",position:new S(36,4,8)});const si=V1();n.add(si),t.push({type:"box",x:36,z:-6,w:10,d:8}),e.push({id:"o2ret",name:"O2 return buffer",position:new S(36,4,-6)});const ua=lm();n.add(ua),t.push({type:"box",x:50,z:4,w:8,d:18}),e.push({id:"mxberm",name:"Methalox farm berm",position:new S(50,4,4)});const ri=i2();n.add(ri),t.push({type:"box",x:68,z:6,w:8,d:6}),e.push({id:"mxlight",name:"Methalox farm lights",position:new S(68,4,6)});const fa=q1();n.add(fa),t.push({type:"box",x:-32,z:-22,w:10,d:8}),e.push({id:"pump",name:"Methalox pump house",position:new S(-32,4,-22)}),n.add($0()),n.add(Q0()),n.add(Zi(16,14,-.4)),n.add(Zi(8,-62,1.2)),n.add(Zi(30,74,-.2)),n.add(Zi(-94,-182,.7)),n.add(Mn(-90,-148,.4,{kind:"ice",loaded:!0})),e.push({id:"rover",name:"Haul rover",position:new S(8,2,-62)}),e.push({id:"haul2",name:"Ice haul at crush",position:new S(-90,3,-148)});const pa=r1();n.add(pa),t.push({type:"box",x:-64,z:-90,w:10,d:8}),e.push({id:"haul",name:"Ice haul",position:new S(-64,3,-90)});const ns=k0();n.add(ns),t.push({type:"box",x:48,z:-86,w:16,d:12}),e.push({id:"workshop",name:"Workshop",position:new S(48,5,-86)});const is=Zm();n.add(is),t.push({type:"box",x:48,z:-70,w:8,d:6}),e.push({id:"shoplight",name:"Workshop lights",position:new S(48,4,-70)});const as=L1();n.add(as),t.push({type:"box",x:22,z:-80,w:12,d:8}),e.push({id:"depot",name:"Spare-parts depot",position:new S(22,4,-80)});const E=T1();n.add(E),t.push({type:"box",x:66,z:-74,w:16,d:12}),e.push({id:"workshop2",name:"Workshop bay 2",position:new S(66,5,-74)});const F=Y1();n.add(F),t.push({type:"box",x:66,z:-90,w:10,d:8}),e.push({id:"press",name:"Sinter press",position:new S(66,4,-90)});const W=a2();n.add(W),t.push({type:"box",x:66,z:-104,w:12,d:8}),e.push({id:"kiln",name:"Sinter kiln",position:new S(66,4,-104)});const X=s2();n.add(X),t.push({type:"box",x:80,z:-104,w:8,d:6}),e.push({id:"bricks",name:"Sinter brick pallet",position:new S(80,4,-104)});const O=hm();n.add(O),t.push({type:"box",x:82,z:-90,w:10,d:8}),e.push({id:"crib",name:"Workshop tool crib",position:new S(82,4,-90)});const st=Hm();n.add(st),t.push({type:"box",x:96,z:-90,w:10,d:8}),e.push({id:"rack",name:"Workshop parts rack",position:new S(96,4,-90)});const mt=Pm();n.add(mt),t.push({type:"box",x:82,z:-74,w:16,d:12}),e.push({id:"workshop3",name:"Workshop bay 3",position:new S(82,5,-74)});const wt=D1();n.add(wt),n.add(Zi(48,-70,.2)),e.push({id:"shelter",name:"Rover dust shelter",position:new S(48,4,-70)});for(const[ze,An]of[[42.8,-73.4],[53.2,-73.4],[42.8,-66.6],[53.2,-66.6]])t.push({type:"cyl",x:ze,z:An,r:.45});const yt=H0();n.add(yt),t.push({type:"cyl",x:-18,z:-138,r:3}),e.push({id:"comms",name:"Comms tower",position:new S(-18,16,-138)});const Nt=n2();n.add(Nt),t.push({type:"box",x:4,z:-138,w:8,d:6}),e.push({id:"commslight",name:"Comms-yard lights",position:new S(4,4,-138)});const Bt=$1();n.add(Bt),t.push({type:"cyl",x:24,z:-128,r:2.2}),e.push({id:"weather",name:"Weather / dust mast",position:new S(24,12,-128)});const St=s1();n.add(St),t.push({type:"cyl",x:-32,z:-148,r:8.4}),t.push({type:"box",x:-40,z:-154,w:6,d:5}),e.push({id:"earth",name:"Earth dish · 12 min delay",position:new S(-32,12,-148)});const jt=qm();n.add(jt),t.push({type:"box",x:-48,z:-138,w:10,d:12}),e.push({id:"commsberm",name:"Comms dust berm",position:new S(-48,4,-138)});const se=C1();n.add(se),t.push({type:"cyl",x:-8,z:-162,r:6.2}),e.push({id:"earth2",name:"Backup Earth dish",position:new S(-8,10,-162)});const ce=um();n.add(ce),t.push({type:"box",x:4,z:-148,w:10,d:8}),e.push({id:"commsbatt",name:"Comms night store",position:new S(4,4,-148)});const Ee=Vm();n.add(Ee),t.push({type:"box",x:16,z:-148,w:10,d:8}),e.push({id:"commsinv",name:"Comms spare inverter",position:new S(16,4,-148)});const te=G0();n.add(te),t.push({type:"cyl",x:-58,z:-158,r:6}),e.push({id:"ice",name:"Ice mining rig",position:new S(-58,8,-158)});const At=$m();n.add(At),t.push({type:"box",x:-46,z:-148,w:8,d:6}),e.push({id:"icelight",name:"Ice-mine lights",position:new S(-46,4,-148)});const Je=dm();n.add(Je),t.push({type:"box",x:-40,z:-168,w:10,d:12}),e.push({id:"ice1berm",name:"Ice mine 1 berm",position:new S(-40,4,-168)});const ee=E1();n.add(ee),t.push({type:"cyl",x:-78,z:-172,r:6}),e.push({id:"ice2",name:"Ice mine 2",position:new S(-78,8,-172)});const He=Am();n.add(He),t.push({type:"box",x:-64,z:-184,w:10,d:12}),e.push({id:"ice2berm",name:"Ice mine 2 berm",position:new S(-64,4,-184)});const Tn=l2();n.add(Tn),t.push({type:"box",x:-92,z:-184,w:10,d:8}),e.push({id:"drill2",name:"Ice mine 2 spare drill",position:new S(-92,4,-184)});const Pe=Dm();n.add(Pe),t.push({type:"box",x:-78,z:-156,w:10,d:8}),e.push({id:"melt2",name:"Ice melt still 2",position:new S(-78,5,-156)});const kn=N1();n.add(kn),t.push({type:"box",x:-90,z:-158,w:12,d:10}),e.push({id:"ice-depot",name:"Ice crush depot",position:new S(-90,4,-158)});const le=Em();n.add(le),t.push({type:"box",x:-102,z:-158,w:10,d:8}),e.push({id:"crushcover",name:"Ice crush cover",position:new S(-102,4,-158)});const qe=Wm();n.add(qe),t.push({type:"box",x:-90,z:-136,w:10,d:8}),e.push({id:"weigh",name:"Ice haul weigh",position:new S(-90,4,-136)});const Hn=X1();n.add(Hn),t.push({type:"box",x:-58,z:-142,w:10,d:8}),e.push({id:"melt",name:"Ice melt still",position:new S(-58,5,-142)});const Ne=Z0();n.add(Ne),t.push({type:"cyl",x:-82,z:-176,r:2.4}),e.push({id:"survey",name:"Resource survey",position:new S(-88,5,-188)});const sn=am();return n.add(sn),t.push({type:"cyl",x:-124,z:-188,r:2.4}),e.push({id:"survey2",name:"West ice survey",position:new S(-124,5,-188)}),n.add(Qe(42,22,.6)),n.add(Qe(39,26,-.4)),n.add(Qe(26,78,2.2)),n.add(Qe(26,68,.5)),n.add(Qe(22,72,-.8)),n.add(Qe(-80,-174,.8)),n.add(Qe(-34,-92,-1.2)),n.add(Qe(-28,-104,.3)),n.add(Qe(16,-120,.6)),n.add(Qe(70,-70,.4)),n.add(Qe(-28,128,1.1)),n.add(J0()),d1(t),n.add(n1()),n.add(i1()),n.add(a1()),{group:n,colliders:t,landmarks:e}}function Zn(n,t,e={}){const i=new G;i.name=e.finished?"pad":"cargo-pad";const a=L(n,t),s=e.finished?20:16,r=e.finished?l.pad:l.graded;if(i.add(u(new H(s,s,.45,48),r,n,a+.15,t)),e.finished){i.add(u(new Wt(s+.4,.55,8,48),l.padRing,n,a+.4,t,Math.PI/2,0,0)),i.add(u(new ia(7.5,8.1,40),l.padRing,n,a+.4,t,-Math.PI/2,0,0)),i.add(u(new ia(13,13.5,40),l.padRing,n,a+.4,t,-Math.PI/2,0,0));for(let c=0;c<12;c++){const h=c/12*Math.PI*2;i.add(u(new _(.35,.55,.35),l.glowPad,n+Math.cos(h)*19.2,a+.55,t+Math.sin(h)*19.2))}}else{i.add(u(new Wt(s+.3,.4,8,36),l.padRing,n,a+.32,t,Math.PI/2,0,0));for(let c=0;c<8;c++){const h=c/8*Math.PI*2;i.add(u(new _(.28,.4,.28),l.glowPad,n+Math.cos(h)*(s-.6),a+.45,t+Math.sin(h)*(s-.6)))}}const o=e.finished?26:21,d=u(new Wt(o,e.finished?2.2:1.8,8,40),l.rust,n,a-.4,t,Math.PI/2,0,0);return d.scale.set(1,.45,1),i.add(d),i}function yi(n=0,t=0,e={}){const i=new G;i.name=e.name||"starship",i.position.set(n,0,t);const a=L(n,t)-3.1,s=36,r=4.4;i.add(u(new H(r,r,s,28),l.steel,0,a+8+s/2,0));const o=u(new ve(r,24,16,0,Math.PI*2,0,Math.PI/2),l.steel,0,a+8+s,0);o.scale.set(1,1.55,1),i.add(o);const d=u(new H(r+.04,r+.04,s*.72,20,1,!0,Math.PI*.55,Math.PI*.9),l.tiles,0,a+8+s*.38,0);i.add(d);const c=u(new H(r+.15,r+.55,3.2,24),l.soot,0,a+6.4,0);i.add(c);for(let f=0;f<3;f++){const m=f/3*Math.PI*2;i.add(u(new H(.55,1.15,2.2,12),l.soot,Math.cos(m)*1.5,a+4.6,Math.sin(m)*1.5))}const h=new _(1.1,7.2,3.6);i.add(u(h,l.steelDark,-r-.2,a+14,0,0,0,.18)),i.add(u(h,l.steelDark,r+.2,a+14,0,0,0,-.18));const p=new _(.45,4.2,2.4);i.add(u(p,l.steelDark,-r+.2,a+40,1.2,.15,0,.4)),i.add(u(p,l.steelDark,r-.2,a+40,1.2,.15,0,-.4));for(let f=0;f<6;f++){const m=f/6*Math.PI*2+.2,v=new G,M=u(new _(.22,8.2,.22),l.steelDark,0,0,0,0,0,.72),x=u(new _(1.3,.18,.9),l.steel,3.4,-3.7,0);v.add(M,x),v.position.set(Math.cos(m)*3.2,a+7.6,Math.sin(m)*3.2),v.rotation.y=-m,i.add(v)}for(let f=0;f<5;f++)i.add(u(new _(.7,.35,.08),l.tiles,0,a+28+f*2.1,r+.05));if(i.add(u(new _(1.6,.12,.12),l.glowWarm,0,a+44.5,0)),e.cargoOpen){i.add(u(new _(2.4,6.2,3.4),l.soot,-r+.4,a+16.4,0)),i.add(u(new _(.12,6.4,3.6),l.steel,-r-2.1,a+16.6,2,0,1.15,0));const f=a+13.2,m=L(n,t)+.22,v=-r-.3,M=-r-12.4,x=Math.hypot(v-M,f-m),g=Math.atan2(f-m,v-M);i.add(u(new _(x,.16,3.1),l.steelDark,(v+M)/2,(f+m)/2,0,0,0,g)),i.add(u(new _(10.5,.18,.18),l.lattice,-7.2,a+22.5,0,0,0,.55)),i.add(u(new H(.05,.05,7.2,6),l.cable,-12.2,a+16.2,0)),i.add(u(new _(1.5,1.3,1.5),l.crate,-12.2,a+12.4,0)),i.add(R("CARGO","#1a100c","#f0c089",3.4,.9,-r-.1,a+24,0,-Math.PI/2))}if(e.crewHab){const f=a+13;i.add(u(new H(1.2,1.2,2.7,14),l.habDark,0,f,r+1.35,Math.PI/2,0,0)),i.add(u(new Wt(1.22,.09,6,16),l.steel,0,f,r+.28)),i.add(u(new Wt(1.22,.09,6,16),l.steel,0,f,r+2.55)),i.add(u(new _(1.05,1.75,.1),l.steelDark,0,f,r+2.72)),i.add(u(new _(3.4,.14,2.6),l.steelDark,0,f-1.28,r+2.9)),i.add(u(new _(.1,1.15,2.5),l.steel,-1.6,f-.65,r+2.9)),i.add(u(new _(.1,1.15,2.5),l.steel,1.6,f-.65,r+2.9));const m=f-1.28,v=L(n,t)+.28,M=r+3.6,x=r+13.2,g=11;for(let D=0;D<g;D++){const I=D/(g-1);i.add(u(new _(2.15,.12,.95),l.steelDark,0,m+(v-m)*I,M+(x-M)*I))}const C=Math.hypot(M-x,m-v),A=Math.atan2(m-v,x-M);i.add(u(new _(2.25,.08,C),l.steel,0,(m+v)/2-.12,(M+x)/2,A,0,0)),i.add(u(new _(.08,.85,C),l.steel,-1.12,(m+v)/2+.35,(M+x)/2,A,0,0)),i.add(u(new _(.08,.85,C),l.steel,1.12,(m+v)/2+.35,(M+x)/2,A,0,0));const y=x+1.55,B=L(n,t)+1.35;i.add(u(new H(1.35,1.35,2.5,12),l.habDark,0,B,y)),i.add(u(new _(1.05,1.7,.1),l.steelDark,0,B+.05,y+1.4)),i.add(u(new Wt(1.38,.07,6,14),l.steel,0,B+1.28,y,Math.PI/2,0,0)),i.add(u(new _(2.2,.12,2.2),l.steelDark,0,L(n,t)+.12,y));for(let D=0;D<5;D++)i.add(u(new _(.85,.48,.08),l.glowWarm,1.55,a+16.5+D*3.4,r+.06)),i.add(u(new _(.08,.48,.85),l.glowWarm,r+.06,a+16.5+D*3.4,-1.35));i.add(u(new H(.55,.55,.2,12),l.steel,2.55,a+14.2,r+.04,Math.PI/2,0,0)),i.add(u(new Wt(.52,.06,6,12),l.steelDark,2.55,a+14.2,r+.14)),i.add(R("CREW HAB","#1a100c","#f0c089",3.4,.85,0,f+2.55,r+2.35)),i.add(R("AIRLOCK","#1a100c","#f0c089",2.3,.55,1.85,f+.15,r+2.05,Math.PI/2))}return i}function P0(){const n=new G;n.name="crates";const t=[[10,8,0],[12.2,8.4,.4],[10.4,10.6,1.6],[13.5,6.2,-.3],[-12,9,.5],[-14,7.2,2.1],[8.5,-11,0],[6.4,-12.5,1.1]];for(const[e,i,a]of t)Et(n,e,i,a);return n}function D0(){const n=new G;n.name="cargo-offload";const t=[[40,22,.2],[38.2,24.1,-.3],[41.4,26.2,.8],[36.5,21.4,.1],[37.8,27.6,1.4],[34.8,24.8,-.5],[39.2,19.6,.6],[35.4,19.2,.15]];for(const[s,r,o]of t)Et(n,s,r,o);Et(n,38.6,22.8,.1,1.15),Et(n,33.2,20.4,.25,1.2),Et(n,31.4,22.1,-.2,1.05);const[e,i,a]=Be(36,23.5,.08);return n.add(u(new _(8.5,.12,4.2),l.steelDark,e,i,a,0,.15,0)),n.add(R("HAB KIT","#1a100c","#f0c089",2.6,.7,33.2,L(33.2,20.4)+2.5,20.4,.35)),n}function I0(){const n=new G;n.name="approach";const t=[{fx:0,fz:118,tx:0,tz:32,n:7},{fx:52,fz:90,tx:52,tz:42,n:5},{fx:36,fz:128,tx:36,tz:90,n:4},{fx:-24,fz:92,tx:-24,tz:60,n:4},{fx:-48,fz:118,tx:-48,tz:86,n:4},{fx:78,fz:104,tx:78,tz:74,n:4},{fx:-16,fz:178,tx:-16,tz:154,n:5}];for(const e of t){const i=Math.atan2(e.tx-e.fx,e.tz-e.fz);for(let a=0;a<e.n;a++){const s=a/(e.n-1),r=e.fx+(e.tx-e.fx)*s,o=e.fz+(e.tz-e.fz)*s,d=L(r,o),c=new G;c.add(u(new _(2.5,.16,.34),l.glowPad,-.75,0,0,0,.5,0)),c.add(u(new _(2.5,.16,.34),l.glowPad,.75,0,0,0,-.5,0)),c.position.set(r,d+.14,o),c.rotation.y=i,n.add(c)}}return n}function L0(){const n=new G;n.name="prep-pad";const t=22,e=82,i=L(t,e);n.add(u(new H(14,14,.28,36),l.graded,t,i+.08,e));const a=u(new Wt(16.2,1.7,8,28,Math.PI*1.35),l.rust,t,i-.15,e,Math.PI/2,.5,0);a.scale.set(1,.42,1),n.add(a);for(let r=0;r<8;r++){const o=r/8*Math.PI*2+.2,d=t+Math.cos(o)*15.2,c=e+Math.sin(o)*15.2,h=L(d,c);n.add(u(new _(.08,1.7,.08),l.steel,d,h+.85,c)),n.add(u(new _(.28,.16,.06),l.glowPad,d,h+1.62,c,0,o,0))}const s=[[12,74],[30,88],[14,90]];for(const[r,o]of s){const d=u(new me(2.2,0),l.rust,r,L(r,o)+.9,o);d.scale.set(1.2,.65,1.05),n.add(d)}return n.add(R("LANDING PREP","#1a100c","#f0c089",4.4,1,t+10.5,i+2.4,e+2,-.6)),n.add(u(new _(.12,2.4,.12),l.steelDark,t+10.5,i+1.2,e+2)),n}function U0(){const n=new G;n.name="solar";const t=10,e=8;for(let r=0;r<t;r++)for(let o=0;o<e;o++){const d=58+r*5.4,c=-22-o*6.2,h=L(d,c),p=u(new _(.18,1.6,.18),l.solarFrame,d,h+.8,c),f=u(new _(4.6,.08,2.3),l.solar,d,h+1.55,c,-.55,.15,0),m=u(new _(4.75,.05,2.42),l.solarFrame,d,h+1.5,c,-.55,.15,0);n.add(p,f,m)}for(let r=0;r<5;r++){const o=58+r*5.4,d=-22-8*6.2,c=L(o,d);n.add(u(new _(.18,1.6,.18),l.solarFrame,o,c+.8,d)),r<2&&n.add(u(new _(4.6,.08,2.3),l.solar,o+1.1,c+.22,d+1.5,1.2,.25,0))}const[i,a,s]=Be(54,-18,.7);return n.add(u(new _(2.2,1.4,1.4),l.habDark,i,a,s)),n.add(R("POWER","#111111","#f4e6c8",2,.55,i,a+.2,s+.75)),n}function N0(){const n=new G;n.name="power-run";const t=54,e=-18,i=-54,a=-16,s=[],r=10;for(let o=0;o<=r;o++){const d=o/r,c=t+(i-t)*d,h=e+(a-e)*d,p=L(c,h);n.add(u(new H(.09,.11,4.4,6),l.steelDark,c,p+2.2,h)),n.add(u(new _(1.15,.08,.08),l.steel,c,p+4.35,h)),s.push({x:c,y:p+4.32,z:h})}for(let o=0;o<s.length-1;o++){const d=s[o],c=s[o+1];for(const h of[-.38,.38]){const p=new ki([new S(d.x,d.y,d.z+h),new S((d.x+c.x)/2,(d.y+c.y)/2-.75,(d.z+c.z)/2+h),new S(c.x,c.y,c.z+h)]),f=new de(new ai(p,6,.035,4,!1),l.cable);f.castShadow=!1,n.add(f)}}return n}function z0(){const n=new G;n.name="water-feed";const t=-58,e=-150,i=-68,a=-26,s=12,r=[];for(let c=0;c<=s;c++){const h=c/s,p=t+(i-t)*h,f=e+(a-e)*h,m=L(p,f)+1.15;r.push(new S(p,m,f)),c%2===0&&n.add(u(new _(.16,1.1,.16),l.steelDark,p,L(p,f)+.55,f))}const o=new ki(r),d=new de(new ai(o,24,.16,6,!1),l.pipe);return d.castShadow=!1,n.add(d),n}function F0(){const n=new G;n.name="isru";const t=-68,e=-16,i=L(t,e);n.add(u(new _(30,.4,22),l.concrete,t,i+.15,e));const a=u(new H(1.8,2,13,12),l.steelDark,t+4,i+6.8,e);n.add(a),n.add(u(new Wt(2.5,.18,6,16),l.steel,t+4,i+10.2,e,Math.PI/2,0,0)),n.add(u(new Wt(2.5,.18,6,16),l.steel,t+4,i+7.4,e,Math.PI/2,0,0)),n.add(R("SABATIER","#1a100c","#f0c089",5.2,1.15,t+6.1,i+8.2,e,Math.PI/2));const s=u(new H(3,3,13,20),l.tankCh4,t-8,i+7.1,e+5.4,0,0,Math.PI/2),r=u(new H(3,3,13,20),l.tankO2,t-8,i+7.1,e-5.2,0,0,Math.PI/2);n.add(s,r),n.add(R("CH4","#6a2208","#f4e6c8",3.6,1,t-1.2,i+7.1,e+5.4)),n.add(R("O2","#2a3340","#e8eef4",3.6,1,t-1.2,i+7.1,e-5.2)),n.add(u(new H(2.2,2.2,7.2,16),l.pipe,t-4,i+4,e-10.4)),n.add(R("H2O","#1a2830","#d6e6ef",2.6,.75,t-4,i+5.6,e-8.1));const o=u(new me(2.1,0),l.ice,t+1.5,i+1.1,e-10.2);return o.scale.set(1.15,.6,1),n.add(o),n.add(u(new H(.55,.55,7.5,10),l.steel,t+10.5,i+4.1,e-5.4)),n.add(u(new H(2.3,.7,2.6,14),l.steelDark,t+10.5,i+8.8,e-5.4)),n.add(u(new Wt(2.05,.1,6,16),l.steel,t+10.5,i+10.15,e-5.4,Math.PI/2,0,0)),n.add(R("CO2","#1a100c","#f0c089",2.4,.7,t+10.5,i+5.8,e-3.2)),n.add(u(new _(4.2,3,3.2),l.habDark,t+10,i+1.8,e+4.2)),n.add(R("POWER","#111111","#f4e6c8",2.2,.55,t+10,i+2.6,e+5.9)),n.add(u(new H(.16,.16,10,8),l.pipe,t+7.2,i+3.4,e-2.6,0,0,Math.PI/2)),n.add(u(new H(.16,.16,9,8),l.pipe,t-1.5,i+3.6,e+2.4,0,0,Math.PI/2)),n.add(u(new H(.16,.16,8.5,8),l.steel,t-1.5,i+3.6,e-2.2,0,0,Math.PI/2)),n.add(u(new H(.14,.14,6.4,8),l.cable,t+12.2,i+3.8,e+1.2,0,0,Math.PI/2)),n}function O0(){const n=new G;n.name="habs";const t=[[-14,-104,0],[2,-104,0],[-6,-116,1.57]];for(const[d,c,h]of t){const p=L(d,c),f=u(new H(3.1,3.1,12,18),l.hab,d,p+3.2,c,0,0,Math.PI/2);f.rotation.y=h,n.add(f),n.add(u(new ve(3.1,14,10),l.hab,d+Math.cos(h)*6,p+3.2,c+Math.sin(h)*6)),n.add(u(new ve(3.1,14,10),l.hab,d-Math.cos(h)*6,p+3.2,c-Math.sin(h)*6));for(let m=-2;m<=2;m++){const v=d+Math.cos(h)*m*2,M=c+Math.sin(h)*m*2;n.add(u(new _(.9,.7,.08),l.glowWarm,v,p+3.3,M+(h===0?3.15:0)))}}const[e,i,a]=Be(-6,-96,1.4);n.add(u(new H(1.5,1.5,2.6,12),l.habDark,e,i,a)),n.add(u(new _(1.1,1.8,.12),l.steelDark,e,i+.1,a+1.5));const[s,r,o]=Be(-6,-108,6.8);return n.add(u(new ve(4.4,18,12,0,Math.PI*2,0,Math.PI/2),l.hab,s,r,o)),n.add(R("HAB 1","#1a100c","#f0c089",2.6,.7,-6,L(-6,-96)+3.6,-94.4)),n}function B0(){const n=new G;n.name="greenhouse";const t=22,e=-112,i=L(t,e);n.add(u(new _(15.2,.25,8.6),l.concrete,t,i+.1,e));const a=new de(new H(4.15,4.15,14.2,18,1,!1,0,Math.PI),l.glass);a.rotation.z=Math.PI/2,a.position.set(t,i+4.1,e),a.castShadow=!1,n.add(a),n.add(u(new _(14.2,.1,8.4),l.solarFrame,t,i+4.15,e));for(let d=-2;d<=2;d++)n.add(u(new Wt(4.12,.055,6,16,Math.PI),l.solarFrame,t+d*2.7,i+4.1,e,0,Math.PI/2,0));for(let d=-2;d<=2;d++){n.add(u(new _(2.05,.26,6.6),l.soil,t+d*2.35,i+.36,e));for(let c=-2;c<=2;c++){const h=c%2===0?l.plant:l.plantLeaf;n.add(u(new _(1.45,.52,.82),h,t+d*2.35,i+.72,e+c*1.12)),n.add(u(new _(.55,.42,.4),l.plantLeaf,t+d*2.35+.2,i+1.05,e+c*1.12))}n.add(u(new _(1.7,.05,6.1),l.glowWarm,t+d*2.35,i+3.55,e))}n.add(u(new _(1.2,2,.15),l.habDark,t-7.1,i+1.2,e));const s=t+10.4,r=e,o=L(s,r);return n.add(u(new _(5.4,.2,4.6),l.concrete,s,o+.08,r)),n.add(u(new H(.52,.52,5.4,10),l.steel,s+1.15,o+2.9,r-1.05)),n.add(u(new H(1.75,.55,1.7,14),l.steelDark,s+1.15,o+6.2,r-1.05)),n.add(u(new Wt(1.5,.08,6,14),l.steel,s+1.15,o+7.1,r-1.05,Math.PI/2,0,0)),n.add(R("CO2","#1a100c","#f0c089",1.9,.5,s+1.15,o+3.7,r+.35)),n.add(u(new _(2.5,1.85,1.9),l.habDark,s-.7,o+1.08,r+.95)),n.add(R("COMPRESS","#1a100c","#f0c089",2.35,.55,s-.7,o+1.55,r+1.95)),n.add(u(new H(.14,.14,6.4,8),l.pipe,t+6.6,i+1.55,e,0,0,Math.PI/2)),n.add(u(new H(.68,.68,2.35,12),l.tankO2,t-5.5,i+1.45,e+5.15)),n.add(R("O2","#2a3340","#e8eef4",1.35,.42,t-5.5,i+1.65,e+5.95)),n.add(R("LIFE SUPPORT","#1a100c","#f0c089",3.7,.7,t,i+5.55,e+.15)),n.add(R("COMPRESSED CO2","#1a100c","#d6b48a",3.5,.55,t,i+4.75,e+.15)),n}function Zi(n,t,e){const i=new G;i.name="rover";const a=L(n,t);i.position.set(n,a,t),i.rotation.y=e,i.add(u(new _(3.4,1.1,2.1),l.rover,0,1.35,0)),i.add(u(new _(1.4,.7,1.5),l.roverDark,1.2,2.1,0)),i.add(u(new _(2.2,.08,1.6),l.solar,0,2,0)),i.add(u(new H(.07,.07,2.1,6),l.steel,-.4,2.9,0)),i.add(u(new _(.25,.2,.25),l.roverDark,-.4,4,0));const s=new H(.55,.55,.35,12),r=[[-1.2,.55,1.15],[.1,.55,1.15],[1.2,.55,1.15],[-1.2,.55,-1.15],[.1,.55,-1.15],[1.2,.55,-1.15]];for(const[o,d,c]of r)i.add(u(s,l.roverDark,o,d,c,Math.PI/2,0,0));return i}function Qe(n,t,e){const i=new G;i.name="optimus";const a=L(n,t);return i.position.set(n,a,t),i.rotation.y=e,i.add(u(new _(.42,.62,.24),l.robot,0,1.28,0)),i.add(u(new H(.14,.15,.22,10),l.robot,0,1.72,0)),i.add(u(new _(.16,.08,.04),l.steelDark,0,1.74,.14)),i.add(u(new _(.12,.48,.12),l.robot,-.28,1.22,0)),i.add(u(new _(.12,.48,.12),l.robot,.28,1.22,0)),i.add(u(new _(.14,.62,.14),l.steelDark,-.1,.62,0)),i.add(u(new _(.14,.62,.14),l.steelDark,.1,.62,0)),i}function k0(){const n=new G;n.name="workshop";const t=48,e=-86,i=L(t,e),a=u(new H(6.2,6.2,16,16,1,!1,0,Math.PI),l.habDark,t,i+3.4,e);return a.rotation.z=Math.PI/2,n.add(a),n.add(u(new _(16,.3,10),l.concrete,t,i+.1,e)),n.add(u(new _(.2,4.2,6.5),l.steelDark,t-7.8,i+2.2,e)),n.add(u(new _(2.4,1.1,1.4),l.crate,t+2,i+.8,e+1.5)),n.add(u(new _(4.6,.16,.16),l.steel,t+1.2,i+.35,e-2.8)),n.add(u(new _(4.6,.16,.16),l.steel,t+1.2,i+.55,e-3.05)),n.add(R("WORKSHOP","#1a100c","#f0c089",3.6,.85,t,i+5.6,e+.2)),n}function H0(){const n=new G;n.name="comms";const t=-18,e=-138,i=L(t,e);for(let s=0;s<8;s++)n.add(u(new _(.18,3.2,.18),l.lattice,t-.7,i+1.6+s*3,e-.7)),n.add(u(new _(.18,3.2,.18),l.lattice,t+.7,i+1.6+s*3,e-.7)),n.add(u(new _(.18,3.2,.18),l.lattice,t-.7,i+1.6+s*3,e+.7)),n.add(u(new _(.18,3.2,.18),l.lattice,t+.7,i+1.6+s*3,e+.7)),n.add(u(new _(1.6,.1,.1),l.lattice,t,i+3+s*3,e-.7)),n.add(u(new _(1.6,.1,.1),l.lattice,t,i+3+s*3,e+.7));const a=u(new ve(3.2,16,10,0,Math.PI*2,0,Math.PI/2.4),l.steel,t,i+26.5,e,-.7,.4,0);return n.add(a),n.add(u(new H(.08,.08,2.2,6),l.steelDark,t+.4,i+27.4,e+1.1,.6,0,0)),n}function G0(){const n=new G;n.name="ice-mine";const t=-58,e=-158,i=L(t,e);n.add(u(new _(8,.3,8),l.concrete,t,i+.1,e)),n.add(u(new _(.28,14,.28),l.lattice,t-2.2,i+7,e-2.2)),n.add(u(new _(.28,14,.28),l.lattice,t+2.2,i+7,e-2.2)),n.add(u(new _(.28,14,.28),l.lattice,t-2.2,i+7,e+2.2)),n.add(u(new _(.28,14,.28),l.lattice,t+2.2,i+7,e+2.2)),n.add(u(new _(5.2,.25,5.2),l.steelDark,t,i+14.2,e)),n.add(u(new H(.35,.55,9,10),l.steel,t,i+5,e)),n.add(u(new Hi(.7,1.6,8),l.soot,t,i+.9,e));const a=u(new me(3.4,0),l.ice,t+7.5,i+1.6,e+1.2);return a.scale.set(1.3,.7,1.1),n.add(a),n.add(u(new _(6,.35,1.1),l.steelDark,t+3.4,i+1.4,e,0,0,-.18)),n.add(R("ICE","#1a2830","#d6e6ef",2.2,.65,t,i+8.4,e+2.6)),n}function Ka(n,t,e,i,a){const s=L(t,e);n.add(u(new H(.05,.07,3.2,6),l.steelDark,t,s+1.6,e)),n.add(u(new _(1.15,.7,.04),a,t+.58,s+2.75,e)),n.add(R(i,"#1a100c","#f0c089",1.45,.4,t+.58,s+2.75,e+.05))}function Xr(n,t,e,i){const a=L(t,e);n.add(u(new _(.07,1.55,.07),l.steelDark,t,a+.78,e)),n.add(u(new _(.38,.22,.03),i,t+.2,a+1.42,e))}function Ar(n,t,e,i=0){const a=L(t,e);n.add(u(new _(.85,.55,.65),l.crate,t,a+.32,e,0,i,0)),n.add(u(new _(.88,.06,.68),l.steelDark,t,a+.62,e,0,i,0))}function V0(){const n=new G;n.name="solar-2";const t=6,e=4;for(let r=0;r<t;r++)for(let o=0;o<e;o++){const d=98+r*5.4,c=-74-o*6.2,h=L(d,c),p=u(new _(.18,1.6,.18),l.solarFrame,d,h+.8,c),f=u(new _(4.6,.08,2.3),l.solar,d,h+1.55,c,-.55,.15,0),m=u(new _(4.75,.05,2.42),l.solarFrame,d,h+1.5,c,-.55,.15,0);n.add(p,f,m)}const[i,a,s]=Be(96,-72,.7);return n.add(u(new _(2.2,1.4,1.4),l.habDark,i,a,s)),n.add(R("POWER","#111111","#f4e6c8",2,.55,i,a+.2,s+.75)),n}function W0(){const n=new G;n.name="solar-tie";const t=90,e=-48,i=112,a=-83,s=[],r=5;for(let o=0;o<=r;o++){const d=o/r,c=t+(i-t)*d,h=e+(a-e)*d,p=L(c,h);n.add(u(new H(.09,.11,4.4,6),l.steelDark,c,p+2.2,h)),n.add(u(new _(1.15,.08,.08),l.steel,c,p+4.35,h)),s.push({x:c,y:p+4.32,z:h})}for(let o=0;o<s.length-1;o++){const d=s[o],c=s[o+1];for(const h of[-.38,.38]){const p=new ki([new S(d.x,d.y,d.z+h),new S((d.x+c.x)/2,(d.y+c.y)/2-.65,(d.z+c.z)/2+h),new S(c.x,c.y,c.z+h)]),f=new de(new ai(p,6,.035,4,!1),l.cable);f.castShadow=!1,n.add(f)}}return n}function X0(){const n=new G;n.name="hab-assembly";const t=-32,e=-98,i=L(t,e);n.add(u(new _(18,.22,14),l.concrete,t,i+.08,e));const a=[[-5,-2.2],[5,-2.2],[-5,2.2],[5,2.2]];for(const[r,o]of a)n.add(u(new H(.18,.28,1.85,8),l.steelDark,t+r,i+1.02,e+o)),n.add(u(new _(.72,.12,.72),l.steel,t+r,i+.14,e+o)),n.add(u(new _(.55,.1,.55),l.steel,t+r,i+1.96,e+o));const s=i+3.55;n.add(u(new H(3,3,11,16),l.hab,t,s,e,0,0,Math.PI/2)),n.add(u(new ve(3,14,10),l.hab,t-5.5,s,e)),n.add(u(new ve(3,14,10,0,Math.PI*2,0,Math.PI/2),l.hab,t+8.4,i+1.55,e+.45,.22,.35,.12)),n.add(u(new H(1.35,1.35,2.4,12),l.habDark,t,s,e+4.15,Math.PI/2,0,0)),n.add(u(new _(1,1.65,.1),l.steelDark,t,s,e+5.45)),n.add(u(new Wt(1.38,.08,6,14),l.steel,t,s,e+3.05,0,0,0));for(const[r,o]of[[-7.2,4.6],[6.8,4.8],[-6.4,-5.2]])n.add(u(new _(.12,3.6,.12),l.lattice,t+r,i+1.9,e+o)),n.add(u(new _(.12,3.6,.12),l.lattice,t+r+1.4,i+1.9,e+o)),n.add(u(new _(1.6,.08,.08),l.lattice,t+r+.7,i+3.7,e+o));return Et(n,t-8.2,e+6.2,.2),Et(n,t-6.3,e+7.4,-.35),Et(n,t+7.1,e-5.6,.5,1.1),Et(n,t+5.4,e-6.4,.15),n.add(R("HAB KIT","#1a100c","#f0c089",3,.75,t,i+6.4,e+3.2)),n.add(R("AIRLOCK","#1a100c","#f0c089",2.2,.55,t+2.4,s+.2,e+4.2,Math.PI/2)),n}function hn(n,t,e,i,a={}){const s=L(t,e),r=a.r||2.85,o=a.len||10.4,d=a.onStands?s+3.4:s+3.05,c=Math.cos(i),h=Math.sin(i);if(a.onStands)for(const[f,m]of[[-4.1,-2.05],[4.1,-2.05],[-4.1,2.05],[4.1,2.05]]){const v=t+c*f-h*m,M=e+h*f+c*m;n.add(u(new H(.16,.26,1.75,8),l.steelDark,v,s+.98,M)),n.add(u(new _(.7,.12,.7),l.steel,v,s+.14,M)),n.add(u(new _(.52,.1,.52),l.steel,v,s+1.9,M))}else for(const[f,m]of[[-3.6,0],[3.6,0]]){const v=t+c*f-h*m,M=e+h*f+c*m;n.add(u(new _(1.6,.55,1.15),l.steelDark,v,s+.38,M,0,i,0))}const p=u(new H(r,r,o,16),l.hab,t,d,e,0,0,Math.PI/2);if(p.rotation.y=i,n.add(p),!a.partial)n.add(u(new ve(r,14,10),l.hab,t+c*(o/2),d,e+h*(o/2))),n.add(u(new ve(r,14,10),l.hab,t-c*(o/2),d,e-h*(o/2)));else{n.add(u(new ve(r,14,10),l.hab,t-c*(o/2),d,e-h*(o/2)));const f=t+c*(o/2+2.3),m=e+h*(o/2+2.3);n.add(u(new ve(r,14,10,0,Math.PI*2,0,Math.PI/2),l.hab,f,s+1.45,m,.22,.3,.1))}for(let f=-2;f<=2;f++){const m=t+c*f*1.75,v=e+h*f*1.75;n.add(u(new _(.8,.55,.08),l.glowWarm,m-h*r,d+.08,v+c*r))}if(a.airlock){const f=t-h*(r+1.15),m=e+c*(r+1.15);n.add(u(new H(1.15,1.15,2.2,12),l.habDark,f,d,m,Math.PI/2,i,0)),n.add(u(new _(1,1.6,.1),l.steelDark,f-h*1.15,d,m+c*1.15,0,i,0)),n.add(u(new Wt(1.18,.07,6,14),l.steel,f+h*.2,d,m-c*.2,0,i,0)),n.add(R("AIRLOCK","#1a100c","#f0c089",2.15,.5,f-h*.2,d+1.45,m+c*.2,i))}a.label&&n.add(R(a.label,"#1a100c","#f0c089",2.7,.65,t,d+r+.55,e+.15,i))}function q0(){const n=new G;n.name="pressure-habs";const t=L(-46,-101);n.add(u(new _(28,.2,22),l.concrete,-50,t+.06,-101)),hn(n,-46,-108,0,{airlock:!0,label:"HAB 2"}),hn(n,-46,-94,0,{onStands:!0,airlock:!0,label:"HAB KIT"});const e=L(-46,-101)+3.15;return n.add(u(new H(1.15,1.15,8.2,12),l.habDark,-46,e,-101,Math.PI/2,0,0)),n.add(u(new Wt(1.2,.08,6,14),l.steel,-46,e,-105.1,Math.PI/2,0,0)),n.add(u(new Wt(1.2,.08,6,14),l.steel,-46,e,-96.9,Math.PI/2,0,0)),n.add(R("CONNECT","#1a100c","#f0c089",2.4,.5,-46,e+1.55,-101)),hn(n,-58,-102,Math.PI/2,{onStands:!0,partial:!0,label:"MOD"}),Et(n,-54.5,-110.2,.25),Et(n,-52.8,-111.4,-.3,1.08),Et(n,-61.2,-96.4,.4),Et(n,-40.6,-90.8,.15,1.05),n}function an(n,t,e){const i=new G;i.name="eva";const a=L(n,t);return i.position.set(n,a,t),i.rotation.y=e,i.add(u(new _(.56,.8,.4),l.suit,0,1.46,0)),i.add(u(new _(.44,.5,.24),l.suitDark,0,1.52,-.3)),i.add(u(new ve(.21,12,10),l.suit,0,2.04,.02)),i.add(u(new ve(.165,10,8,0,Math.PI*2,0,Math.PI*.58),l.visor,0,2.04,.1)),i.add(u(new _(.17,.6,.17),l.suit,-.4,1.36,.04)),i.add(u(new _(.17,.6,.17),l.suit,.4,1.36,.04)),i.add(u(new _(.2,.76,.2),l.suitDark,-.15,.7,0)),i.add(u(new _(.2,.76,.2),l.suitDark,.15,.7,0)),i}function Y0(n,t,e,i){const a=L(t,e),s=new G;s.position.set(t,a,e),s.rotation.y=i,s.add(u(new _(1.2,.18,.72),l.steelDark,0,.62,0)),s.add(u(new _(1.15,.28,.68),l.crate,0,.86,0)),s.add(u(new _(.08,.55,.08),l.steel,-.48,.32,.26)),s.add(u(new _(.08,.55,.08),l.steel,.48,.32,.26)),s.add(u(new _(.08,.55,.08),l.steel,-.48,.32,-.26)),s.add(u(new _(.08,.55,.08),l.steel,.48,.32,-.26));const r=new H(.12,.12,.1,10);s.add(u(r,l.roverDark,-.48,.12,.3,Math.PI/2,0,0)),s.add(u(r,l.roverDark,.48,.12,.3,Math.PI/2,0,0)),s.add(u(r,l.roverDark,-.48,.12,-.3,Math.PI/2,0,0)),s.add(u(r,l.roverDark,.48,.12,-.3,Math.PI/2,0,0)),s.add(u(new _(.06,.7,.06),l.steel,-.22,1.3,.08)),s.add(u(new _(.06,.55,.06),l.steel,.18,1.22,-.06)),s.add(u(new _(.22,.12,.12),l.steelDark,-.22,1.68,.08)),n.add(s)}function K0(n,t,e,i){const a=L(t,e),s=new G;s.position.set(t,a,e),s.rotation.y=i,s.add(u(new _(.85,2.45,.32),l.steelDark,0,1.32,0)),s.add(u(new Wt(.42,.07,8,14),l.steel,0,1.58,.22)),s.add(u(new H(.38,.38,.1,12),l.habDark,0,1.58,.18,Math.PI/2,0,0)),s.add(u(new _(.7,.16,.55),l.steel,0,.12,.05)),n.add(s)}function J0(){const n=new G;n.name="eva-presence",n.add(an(2.4,12.2,rn(2.4,12.2,0,7))),n.add(an(-2.2,11.5,rn(-2.2,11.5,0,7))),n.add(an(3.8,15.6,.35)),n.add(an(.6,18.2,Math.PI)),Y0(n,4.3,14.8,.4),K0(n,-3.9,9.1,.2),Et(n,5.4,13.2,.2,.85);const t=L(5.1,16.4);return n.add(u(new _(.1,2.2,.1),l.steelDark,5.1,t+1.1,16.4)),n.add(R("EVA PREP","#1a100c","#f0c089",2.3,.55,5.1,t+2.45,16.4,-.35)),n}function Z0(){const n=new G;n.name="survey";const t=-82,e=-176,i=L(t,e);for(let c=0;c<3;c++){const h=c/3*Math.PI*2+.4,p=Math.cos(h)*.62,f=Math.sin(h)*.62;n.add(u(new _(.08,2.5,.08),l.steelDark,t+p,i+1.15,e+f,.32*Math.cos(h),0,.32*Math.sin(h)))}n.add(u(new _(.58,.32,.48),l.roverDark,t,i+2.28,e)),n.add(u(new H(.04,.04,1.35,6),l.steel,t,i+3.08,e)),n.add(u(new _(.22,.12,.22),l.steelDark,t,i+3.78,e)),n.add(u(new _(.12,2.2,.12),l.steelDark,t+1.15,i+1.1,e+.2)),n.add(R("SURVEY","#1a100c","#f0c089",2.6,.7,t+.2,i+3.55,e+1.15));const a=[[-108,-210],[-98,-210],[-88,-210],[-78,-210],[-68,-210],[-108,-198],[-98,-198],[-88,-198],[-78,-198],[-68,-198],[-108,-186],[-98,-186],[-88,-186],[-78,-186],[-68,-186],[-108,-174],[-98,-174],[-88,-174],[-78,-174],[-68,-174]];for(let c=0;c<a.length;c++){const[h,p]=a[c];Xr(n,h,p,c%3===0?l.flagIce:l.flagDeposit)}Ka(n,-96,-198,"ICE",l.flagIce),Ka(n,-72,-204,"H2O",l.flagIce),Ka(n,-104,-176,"DEPOSIT",l.flagDeposit);const s=[[-90,-184,.2],[-88.4,-182.6,-.4],[-91.2,-181.8,.7],[-86.6,-185.2,.1]];for(const[c,h,p]of s)Ar(n,c,h,p);Et(n,-84.5,-180.4,.15,.85),n.add(R("SAMPLES","#1a2830","#d6e6ef",2.2,.55,-90,L(-90,-184)+1.55,-184));const r={x:-60,z:-162},o={x:-100,z:-200},d=14;for(let c=0;c<d;c++){const h=c/(d-1),p=r.x+(o.x-r.x)*h,f=r.z+(o.z-r.z)*h,m=L(p,f),v=Math.atan2(o.x-r.x,o.z-r.z);for(const M of[-.55,.55]){const x=Math.cos(v)*M,g=-Math.sin(v)*M,C=u(new _(.42,.05,.85),l.track,p+x,m+.04,f+g,0,v,0);C.castShadow=!1,n.add(C)}}return n}function ct(n,t,e,i=.14){const a=[];for(let o=0;o<t.length;o++){const[d,c]=t[o],h=L(d,c)+1.05;a.push(new S(d,h,c)),o%2===0&&n.add(u(new _(.18,1.05,.18),l.steelDark,d,L(d,c)+.5,c))}const s=new ki(a),r=new de(new ai(s,28,i,6,!1),e);r.castShadow=!1,n.add(r)}function $0(){const n=new G;return n.name="methalox-lines",ct(n,[[-76,-10.6],[-52,-18],[-32,-14],[-18,-8.4]],l.tankCh4,.13),ct(n,[[-76,-21.2],[-52,-24],[-32,-18],[-18,-9.6]],l.steel,.13),n.add(R("TO PAD","#1a100c","#f0c089",2.2,.5,-50,L(-50,-18)+2.15,-16.4)),n}function j0(){const n=new G;n.name="methalox-stand";const t=-15,e=-8,i=L(t,e);n.add(u(new _(8.6,.16,5.4),l.steelDark,t,i+.42,e)),n.add(u(new H(.88,.88,3.5,14),l.tankCh4,t-2.25,i+2.2,e+.55)),n.add(u(new H(.88,.88,3.5,14),l.tankO2,t-2.25,i+2.2,e-1.25)),n.add(R("CH4","#6a2208","#f4e6c8",1.45,.42,t-1.3,i+2.25,e+.55,Math.PI/2)),n.add(R("O2","#2a3340","#e8eef4",1.45,.42,t-1.3,i+2.25,e-1.25,Math.PI/2));const a=[[1.55,1.65],[1.55,-1.65],[3.45,1.65],[3.45,-1.65]];for(const[s,r]of a)n.add(u(new _(.16,3.15,.16),l.steelDark,t+s,i+1.88,e+r));return n.add(u(new _(2.25,.12,3.5),l.steel,t+2.5,i+3.5,e)),n.add(u(new Wt(.42,.11,8,14),l.tankCh4,t+.15,i+1.45,e+.55,Math.PI/2,0,0)),n.add(u(new Wt(.42,.11,8,14),l.steel,t+.15,i+1.45,e-1.2,Math.PI/2,0,0)),n.add(u(new H(.09,.09,6.4,8),l.tankCh4,t+4.55,i+1.18,e+.55,0,0,Math.PI/2)),n.add(u(new H(.09,.09,6.4,8),l.steel,t+4.55,i+.98,e-1.2,0,0,Math.PI/2)),n.add(u(new _(1.55,1.05,1.15),l.habDark,t+.55,i+.98,e+1.85)),n.add(u(new H(.55,.55,2.8,12),l.tankCh4,t-.4,i+1.15,e+2.55,0,0,Math.PI/2)),n.add(u(new _(1.6,.35,.85),l.steelDark,t-.4,i+.55,e+2.55)),n.add(R("METHALOX","#1a100c","#f0c089",3.15,.68,t+2.5,i+4.12,e)),n.add(R("RETURN PROPELLANT","#1a100c","#f0c089",3.85,.58,t+2.5,i+3.42,e+.02)),n.add(u(new H(.22,.28,3.2,10),l.steelDark,t+5.4,i+2,e+.2)),n.add(u(new _(7.6,.22,.22),l.steel,t+8.8,i+3.55,e+1.4,0,-.45,.18)),n.add(u(new _(6.2,.18,.18),l.tankCh4,t+11.6,i+4.4,e+2.6,0,-.45,.12)),n.add(u(new _(6.2,.18,.18),l.steel,t+11.6,i+4.05,e+2.85,0,-.45,.12)),n.add(u(new H(.28,.22,1.1,10),l.steelDark,t+14.2,i+4.7,e+3.6)),n.add(R("LOAD ARM","#1a100c","#f0c089",2.8,.45,t+8.2,i+4.85,e+1.1,-.45)),n}function Q0(){const n=new G;n.name="spaceport-sign";const t=17,e=-17,i=L(t,e);return n.add(u(new _(.12,3.5,.12),l.steelDark,t,i+1.75,e)),n.add(R("SPACEPORT","#1a100c","#f0c089",3.5,.85,t,i+3.45,e,.55)),n.add(R("METHALOX PAD","#1a100c","#d6b48a",3.2,.58,t,i+2.55,e,.55)),n}function t1(n,t,e,i,a,s){const r=i-t,o=a-e,d=Math.hypot(r,o),c=Math.ceil(d/6),h=Math.atan2(r,o);for(let p=0;p<c;p++){const f=(p+.5)/c,m=t+r*f,v=e+o*f,M=L(m,v),x=d/c+.35,g=u(new _(s+1.7,.055,x+.25),l.roadBed,m,M+.03,v,0,h,0);g.castShadow=!1,n.add(g);const C=u(new _(s,.08,x+.15),l.padRing,m,M+.07,v,0,h,0);C.castShadow=!1,n.add(C)}}function e1(n,t,e,i=4.2){const a=L(t,e),s=u(new H(i+.8,i+.8,.06,20),l.roadBed,t,a+.03,e);s.castShadow=!1,n.add(s);const r=u(new H(i,i,.08,20),l.graded,t,a+.07,e);r.castShadow=!1,n.add(r)}function n1(){const n=new G;n.name="roads";const t=[[0,18,0,-124,5.2],[0,-40,84,-42,4.6],[0,-40,-68,-16,4.6],[0,-92,-56,-154,4],[16,-72,48,-86,3.6],[12,8,50,22,4.2],[16,28,22,78,3.5],[-58,-158,-90,-190,3.6],[-14,-104,-32,-98,3.4],[84,-42,112,-83,3.6],[0,-108,22,-112,3.6],[22,-112,48,-86,3.4],[-6,-116,-18,-138,3.2],[0,8,-15,-8,3.4],[16,28,36,72,3.8],[0,18,-24,44,3.8],[-58,-158,-64,-90,4.2],[-64,-90,-68,-16,4.2],[-18,-138,-32,-148,3.2],[-32,-98,-46,-100,3.4],[0,18,-48,68,3.8],[16,28,78,56,3.8],[-6,-116,-13,-134,3.4],[22,-112,38,-126,3.4],[-58,-158,-60,-148,3.2],[-64,-118,-18,-88,3.6],[84,-42,68,-10,3.4],[-6,-108,-18,-88,3.2],[38,-126,8,-142,3.4],[-13,-134,8,-142,3.2],[112,-83,135,-40,3.6],[68,-10,68,6,3.2],[-13,-134,-28,-138,3],[-46,-108,-20,-132,3.2],[-6,-108,-6,-132,3.2],[-6,-96,2,-22,3.4],[-32,-98,-36,-74,3.2],[-40,-76,-32,-98,3.2],[-40,-76,-50,-72,3],[-6,-132,10,-124,3.2],[10,-124,8,-142,3],[0,8,20,8,3.4],[22,82,-16,136,3.6],[0,32,-16,136,3.4],[135,-40,158,-62,3.4],[-68,-16,-96,-16,3.6],[-58,-158,-78,-172,3.4],[48,-86,66,-74,3.4],[8,-142,18,-152,3.2],[-18,-88,18,-152,3.2],[-32,-148,-8,-162,3.2],[-6,-108,8,-98,3.2],[22,-112,8,-98,3.2],[48,-86,48,-70,3.2],[-68,-16,-68,12,3.2],[-36,-74,22,-80,3.2],[48,-86,22,-80,3.2],[22,-112,52,-112,3.2],[38,-126,52,-112,3.2],[-78,-172,-90,-158,3.2],[8,-98,8,-78,3.2],[22,-80,8,-78,3.2],[8,-98,-8,-88,3.2],[-22,-88,-8,-88,3.2],[-96,-16,-96,4,3.2],[158,-62,142,-62,3.2],[8,-142,28,-140,3.2],[18,-152,28,-140,3.2],[-90,-158,-90,-148,3.2],[5,16,12,18,3],[20,8,36,8,3.2],[36,8,36,-6,3.2],[-68,4,-50,4,3.2],[-58,-158,-58,-142,3.2],[-15,-8,-32,-22,3.2],[66,-74,66,-90,3.2],[8,-98,22,-98,3.2],[158,-62,172,-48,3.2],[22,-112,38,-104,3.2],[10,-124,24,-128,3],[-68,12,-80,20,3.2],[-16,136,6,148,3],[-48,68,-64,80,3.2],[-80,20,-80,32,3.2],[135,-40,100,-22,3.2],[100,-22,68,-10,3.2],[-36,-74,-22,-56,3.2],[-90,-158,-124,-188,3.2],[-50,4,-38,16,3.2],[52,-112,70,-112,3.2],[22,82,16,48,3],[-58,-142,-58,-36,3.2],[-58,-36,-68,-16,3.2],[36,8,50,4,3],[-58,-158,-40,-168,3],[66,-90,82,-90,3.2],[-8,-162,4,-148,3],[135,-40,148,-40,3.2],[112,-83,124,-70,3.2],[82,-44,96,-44,3.2],[-68,12,-84,8,3.2],[-8,-88,16,-86,3.2],[135,-40,135,-22,3.2],[124,-70,100,-70,3.2],[82,-44,82,-28,3.2],[-68,-16,-68,2,3.2],[135,-40,122,-40,3],[112,-83,98,-83,3],[82,-44,70,-44,3],[-90,-158,-102,-158,3.2],[8,-78,-18,-78,3.2],[-78,-172,-64,-184,3.2],[18,-152,32,-152,3.2],[-96,4,-96,16,3.2],[66,-74,82,-74,3.2],[-78,-172,-78,-156,3.2],[-96,4,-110,8,3.2],[-110,8,-110,20,3.2],[-110,20,-110,32,3.2],[-110,8,-122,8,3.2],[-122,8,-122,20,3.2],[8,-98,-8,-98,3.2],[-8,-98,-22,-98,3.2],[-8,-88,8,-88,3.2],[-58,-36,-78,-36,3.2],[82,-90,96,-90,3.2],[8,-78,-5,-78,3],[4,-148,16,-148,3.2],[-90,-148,-90,-136,3.2],[16,-86,16,-74,3.2],[-32,-148,-48,-138,3.2],[52,-112,52,-126,3.2],[52,-126,70,-126,3.2],[0,-68,0,-118,3],[48,-70,90,-80,3],[-46,-148,-90,-148,3],[-38,16,-68,12,3],[38,-104,52,-112,3],[172,-48,158,-62,3],[-16,36,4,32,3],[4,-138,-18,-138,3],[68,6,50,4,3],[66,-90,66,-104,3.2],[66,-104,80,-104,3],[6,148,18,136,3],[8,-98,22,-98,3],[172,-48,172,-62,3],[-64,-184,-92,-184,3.2]];for(const[i,a,s,r,o]of t)t1(n,i,a,s,r,o);for(const[i,a,s]of[[0,-40,5.2],[0,-108,4.4],[84,-42,4],[22,-112,3.8],[0,10,4.6],[-64,-90,4.2],[36,72,3.6],[-46,-100,3.6],[38,-126,3.6],[-18,-88,3.8],[68,-10,3.8],[-48,68,3.6],[78,56,3.6],[-13,-134,3.6],[8,-142,3.6],[135,-40,3.6],[68,6,3.6],[-36,-74,3.6],[2,-22,3.4],[-50,-72,3.4],[10,-124,3.6],[20,8,3.6],[-16,136,4.2],[158,-62,3.6],[-96,-16,3.8],[-78,-172,3.6],[66,-74,3.6],[18,-152,3.4],[-8,-162,3.4],[8,-98,3.4],[48,-70,3.4],[-68,12,3.4],[22,-80,3.4],[52,-112,3.6],[-90,-158,3.4],[8,-78,3.4],[-8,-88,3.4],[-96,4,3.4],[142,-62,3.4],[28,-140,3.4],[-90,-148,3.4],[12,18,3.2],[36,8,3.4],[36,-6,3.4],[-50,4,3.4],[-58,-142,3.4],[-32,-22,3.4],[66,-90,3.4],[22,-98,3.4],[172,-48,3.4],[38,-104,3.4],[24,-128,3.2],[-80,20,3.4],[6,148,3.2],[-64,80,3.4],[-80,32,3.4],[100,-22,3.4],[-22,-56,3.4],[-124,-188,3.4],[-38,16,3.4],[70,-112,3.4],[16,48,3.2],[-58,-36,3.4],[50,4,3.2],[-40,-168,3.2],[82,-90,3.4],[4,-148,3.2],[148,-40,3.4],[124,-70,3.4],[96,-44,3.4],[-84,8,3.4],[16,-86,3.4],[135,-22,3.4],[100,-70,3.4],[82,-28,3.4],[-68,2,3.4],[122,-40,3.2],[98,-83,3.2],[70,-44,3.2],[-102,-158,3.4],[-18,-78,3.4],[-64,-184,3.2],[32,-152,3.4],[-96,16,3.4],[82,-74,3.6],[-78,-156,3.4],[-110,8,3.4],[-110,20,3.4],[-110,32,3.4],[-122,8,3.4],[-122,20,3.4],[-8,-98,3.4],[-22,-98,3.4],[8,-88,3.4],[-78,-36,3.4],[96,-90,3.4],[-5,-78,3.2],[16,-148,3.2],[-90,-136,3.4],[16,-74,3.2],[-48,-138,3.2],[52,-126,3.4],[70,-126,3.4],[0,-68,3.2],[48,-70,3.2],[-46,-148,3.2],[-38,16,3.2],[38,-104,3.2],[172,-48,3.2],[-16,36,3.2],[4,-138,3.2],[68,6,3.2],[66,-104,3.4],[80,-104,3.2],[18,136,3.2],[22,-98,3.2],[172,-62,3.2],[-92,-184,3.2]])e1(n,i,a,s);const e=[[3.2,-20],[-3.2,-20],[3.2,-60],[-3.2,-60],[3.2,-90],[22,-40],[42,-40],[64,-41],[-22,-32],[-44,-24],[8,-110],[16,-111],[-8,-130],[-28,-148],[-70,-172],[96,-58],[104,-72],[28,50],[32,62],[-12,30],[-20,40],[-60,-130],[-66,-70],[-66,-40],[-26,-144],[-40,-100],[-52,-108],[3.4,12],[-3.2,12],[30,-118],[38,-126],[-60,-148],[-64,-118],[-18,-88],[68,-10]];for(const[i,a]of e)Xr(n,i,a,l.flagDeposit);return n}function i1(){const n=new G,t=[[18,-8],[-16,-6],[12,-48],[-10,-70],[6,-100],[30,-100],[-30,-20],[40,-40],[40,18],[58,32],[16,70],[28,88],[-54,-8],[-80,-176],[-96,-196],[-28,-90],[112,-80],[100,-50],[0,-40],[22,-112],[32,-112],[70,-40],[84,-44],[36,60],[-24,32],[-64,-90],[-40,-148],[-32,-156],[4,14],[-46,-108],[-46,-92],[-58,-102],[38,-126],[-18,-88],[68,-10],[-60,-148],[-64,-118],[-22,-88]];for(const[e,i]of t){const a=L(e,i);n.add(u(new H(.1,.12,5.2,6),l.steelDark,e,a+2.6,i)),n.add(u(new _(.7,.15,.35),l.glowWarm,e,a+5.3,i))}return n}function a1(){const n=new G,t=14,e=22,i=L(t,e);n.add(u(new _(.12,3.6,.12),l.steelDark,t,i+1.8,e));const a=R("BASE ALPHA","#1a100c","#f0c089",3.8,1.05,t,i+3.55,e,.4);n.add(a);const s=R("CARGO CAMPAIGN","#1a100c","#f0c089",3.4,.7,t,i+2.55,e,.4);n.add(s);const r=R("ARCADIA PLANITIA","#1a100c","#d6b48a",3.2,.55,18,L(18,26)+2.15,26,.15);n.add(u(new _(.1,2.2,.1),l.steelDark,18,L(18,26)+1.1,26)),n.add(r);const o=20,d=36,c=L(o,d);return n.add(u(new _(.1,2.6,.1),l.steelDark,o,c+1.3,d)),n.add(R("6 SHIPS","#1a100c","#f0c089",2.6,.65,o,c+3.15,d,.25)),n.add(R("TWO WINDOWS","#1a100c","#d6b48a",2.8,.5,o,c+2.45,d,.25)),n}function rn(n,t,e,i){return Math.atan2(-(i-t),e-n)}function nc(n,t){const e=new G;e.name="window-offload";const i=[[n,t,.2],[n-1.8,t+2.1,-.3],[n+1.6,t+2.4,.7],[n-2.4,t-1.2,.15],[n+.8,t-2.2,1.1],[n-3.2,t+.6,-.4]];for(const[o,d,c]of i)Et(e,o,d,c);Et(e,n-4.2,t+1.4,.2,1.12),Et(e,n-5.4,t-.6,-.15,1.05);const[a,s,r]=Be(n-1.2,t,.08);return e.add(u(new _(7.2,.12,3.8),l.steelDark,a,s,r,0,.12,0)),e.add(R("CARGO","#1a100c","#f0c089",2.4,.65,n-4.2,L(n-4.2,t+1.4)+2.4,t+1.4,.4)),e}function s1(){const n=new G;n.name="earth-dish";const t=-32,e=-148,i=L(t,e);n.add(u(new H(8.6,8.6,.28,32),l.concrete,t,i+.1,e)),n.add(u(new H(1.45,1.85,5.4,14),l.steelDark,t,i+2.8,e)),n.add(u(new H(2.05,2.05,.42,18),l.steel,t,i+5.55,e)),n.add(u(new Wt(2.15,.12,8,20),l.lattice,t,i+5.8,e,Math.PI/2,0,0)),n.add(u(new _(.32,4.4,.32),l.lattice,t-2.55,i+7.6,e)),n.add(u(new _(.32,4.4,.32),l.lattice,t+2.55,i+7.6,e)),n.add(u(new _(5.6,.32,.32),l.lattice,t,i+9.75,e));const a=new G;a.position.set(t,i+9.5,e),a.rotation.set(-.92,.68,0);const s=u(new ve(7.6,28,16,0,Math.PI*2,0,Math.PI/2.28),l.dish,0,0,0);a.add(s);const r=u(new ve(7.72,20,10,0,Math.PI*2,0,Math.PI/2.45),l.steelDark,0,-.12,0);a.add(r);for(let h=0;h<8;h++){const p=h/8*Math.PI*2;a.add(u(new _(.07,.07,7.4),l.steelDark,0,.18,0,.12,p,0))}a.add(u(new H(.07,.07,5.4,6),l.steelDark,0,2.7,0)),a.add(u(new H(.38,.2,.75,10),l.steel,0,5.35,0)),n.add(a);const o=t-8.2,d=e-5.6,c=L(o,d);return n.add(u(new _(4.6,2.5,3.4),l.habDark,o,c+1.35,d)),n.add(u(new _(2.2,.85,1.4),l.steelDark,o+2.8,c+.55,d+.4)),n.add(R("EARTH LINK","#1a100c","#f0c089",3.6,.75,t,i+4.2,e+6.4)),n.add(R("LIGHT TIME 12 MIN","#1a100c","#d6b48a",3.9,.6,t,i+3.4,e+6.4)),n.add(R("NOT REAL-TIME","#1a100c","#d6b48a",3.3,.5,o,c+2.85,d+1.85)),n.add(u(new _(.1,2.8,.1),l.steelDark,t+6.6,i+1.4,e+5.2)),n.add(R("DSN / STARSHIP","#1a100c","#f0c089",3.2,.55,t+6.6,i+3.15,e+5.2,-.5)),n}function Mn(n,t,e,i={}){const a=new G;a.name=i.kind==="cargo"?"cargo-haul":"ice-haul";const s=L(n,t);a.position.set(n,s,t),a.rotation.y=e,a.add(u(new _(4.2,1.25,2.2),l.rover,.2,1.45,0)),a.add(u(new _(1.55,.85,1.7),l.roverDark,1.55,2.25,0)),a.add(u(new _(2.5,.08,1.7),l.solar,.05,2.16,0)),a.add(u(new H(.06,.06,1.6,6),l.steel,1.2,2.95,0)),a.add(u(new _(1.15,.2,.32),l.steelDark,-2.45,1.02,0));const r=new H(.62,.62,.38,12),o=[[-1.35,.62,1.22],[.25,.62,1.22],[1.55,.62,1.22],[-1.35,.62,-1.22],[.25,.62,-1.22],[1.55,.62,-1.22]];for(const[h,p,f]of o)a.add(u(r,l.roverDark,h,p,f,Math.PI/2,0,0));const d=-5.7;a.add(u(new _(4.5,.22,2.4),l.steelDark,d,1.02,0));const c=[[-4.5,.52,1.22],[-6.7,.52,1.22],[-4.5,.52,-1.22],[-6.7,.52,-1.22]];for(const[h,p,f]of c)a.add(u(new H(.5,.5,.32,12),l.roverDark,h,p,f,Math.PI/2,0,0));if(i.kind==="cargo")a.add(u(new _(1.55,1.2,1.55),l.crate,d-.95,1.78,.12)),a.add(u(new _(1.55,1.2,1.55),l.crate,d+.9,1.78,-.08)),i.loaded!==!1&&a.add(u(new _(1.35,1.05,1.35),l.crate,d,2.9,.05)),a.add(R("CARGO","#1a100c","#f0c089",1.7,.42,d,2.05,1.28));else{if(a.add(u(new _(4.2,1.15,.1),l.steel,d,1.68,1.12)),a.add(u(new _(4.2,1.15,.1),l.steel,d,1.68,-1.12)),a.add(u(new _(.1,1.15,2.25),l.steel,d-2.15,1.68,0)),a.add(u(new _(.1,1.15,2.25),l.steel,d+2.15,1.68,0)),i.loaded!==!1){const h=u(new me(1.15,0),l.ice,d,1.82,0);h.scale.set(1.65,.68,.95),a.add(h),a.add(u(new me(.52,0),l.ice,d+.95,1.92,.22)),a.add(u(new me(.4,0),l.ice,d-.85,1.88,-.18))}a.add(R("ICE","#1a2830","#d6e6ef",1.35,.38,d,2.35,1.24))}return a}function Ha(n,t,e,i,a,s=16){const r=Math.atan2(i-t,a-e);for(let o=0;o<s;o++){const d=o/(s-1),c=t+(i-t)*d,h=e+(a-e)*d,p=L(c,h);for(const f of[-.7,.7]){const m=Math.cos(r)*f,v=-Math.sin(r)*f,M=u(new _(.4,.05,.9),l.track,c+m,p+.04,h+v,0,r,0);M.castShadow=!1,n.add(M)}}}function r1(){const n=new G;n.name="haul-loop";const t=-64,e=-90,i=L(t,e);n.add(u(new _(11,.2,8.4),l.concrete,t,i+.08,e)),n.add(u(new _(2.6,3.2,2.6),l.steelDark,t+2.4,i+1.75,e-1.4)),n.add(u(new _(3.4,.18,1.3),l.steel,t+.2,i+2.35,e-1.4,0,0,.18));const a=u(new me(2.4,0),l.ice,t-2.6,i+1.15,e+1.6);a.scale.set(1.35,.7,1.15),n.add(a),n.add(u(new me(1.1,0),l.ice,t-1.2,i+.85,e+2.4)),n.add(u(new _(.22,5.6,.22),l.lattice,t+3.6,i+2.9,e+2.2)),n.add(u(new _(.22,4.2,.22),l.lattice,t+3.6,i+4.4,e+.4,.7,0,0)),n.add(u(new _(1.6,.7,.7),l.steelDark,t+3.6,i+5.5,e-.6)),n.add(R("ICE TRANSFER","#1a2830","#d6e6ef",3.5,.7,t,i+3.7,e+3.4)),n.add(R("MINE TO ISRU","#1a100c","#f0c089",3.1,.5,t,i+2.95,e+3.4));const s={x:-58,z:-158},r={x:-68,z:-16},o={x:0,z:0};return n.add(Mn(-55,-146,rn(-55,-146,r.x,r.z),{kind:"ice",loaded:!0})),n.add(Mn(-61,-118,rn(-61,-118,r.x,r.z),{kind:"ice",loaded:!0})),n.add(Mn(-66,-78,rn(-66,-78,r.x,r.z),{kind:"ice",loaded:!0})),n.add(Mn(-68,-38,rn(-68,-38,r.x,r.z),{kind:"ice",loaded:!0})),n.add(Mn(-70,-62,rn(-70,-62,s.x,s.z),{kind:"ice",loaded:!1})),n.add(Mn(-50,-24,rn(-50,-24,o.x,o.z),{kind:"cargo",loaded:!0})),n.add(Mn(-18,-14,rn(-18,-14,12,8),{kind:"cargo",loaded:!0})),n.add(Mn(22,12,rn(22,12,50,22),{kind:"cargo",loaded:!0})),Ha(n,-58,-156,-64,-92,18),Ha(n,-64,-88,-68,-20,16),Ha(n,-66,-18,-16,-10,12),Ha(n,-14,-8,20,12,10),n}function $i(n,t,e,i,a,s=8,r=1.15,o=.16){const d=[];for(let h=0;h<=s;h++){const p=h/s,f=t+(i-t)*p,m=e+(a-e)*p,v=L(f,m)+r;d.push(new S(f,v,m)),h%2===0&&n.add(u(new _(.16,r,.16),l.steelDark,f,L(f,m)+r*.5,m))}const c=new de(new ai(new ki(d),s*2,o,6,!1),l.pipe);c.castShadow=!1,n.add(c)}function o1(){const n=new G;n.name="food";const t=38,e=-126,i=L(t,e);n.add(u(new _(13.2,.25,7.6),l.concrete,t,i+.1,e));const a=new de(new H(3.55,3.55,12.4,18,1,!1,0,Math.PI),l.glass);a.rotation.z=Math.PI/2,a.position.set(t,i+3.55,e),a.castShadow=!1,n.add(a),n.add(u(new _(12.2,.1,7.2),l.solarFrame,t,i+3.6,e));for(let s=-2;s<=2;s++){n.add(u(new _(1.85,.24,5.6),l.soil,t+s*2.1,i+.34,e));for(let r=-2;r<=2;r++){const o=r%2===0?l.plant:l.plantLeaf;n.add(u(new _(1.25,.58,.72),o,t+s*2.1,i+.78,e+r*.95))}n.add(u(new _(1.5,.05,5.2),l.glowWarm,t+s*2.1,i+3.15,e))}return n.add(u(new _(1.1,1.8,.14),l.habDark,t-6.2,i+1.1,e)),n.add(u(new H(.14,.14,12,8),l.pipe,30,L(30,-119)+1.2,-119,0,0,Math.PI/2)),n.add(R("FOOD","#1a100c","#f0c089",2.8,.7,t,i+5.05,e+.15)),n.add(R("GROW FROM CO2","#1a100c","#d6b48a",3.6,.5,t,i+4.35,e+.15)),Et(n,45,-122,.2,.9),Et(n,46.2,-124.4,-.3,.85),n}function c1(){const n=new G;n.name="water-loop";const t=-60,e=-148,i=L(t,e);n.add(u(new _(7.2,.22,5.4),l.concrete,t,i+.1,e)),n.add(u(new _(3.4,2.1,2.4),l.habDark,t-1.1,i+1.2,e)),n.add(u(new H(1.15,1.15,2.6,12),l.steel,t+1.8,i+1.5,e+.4)),n.add(u(new _(1.6,.7,1.2),l.ice,t+1.8,i+3.05,e+.4)),n.add(R("MELT","#1a2830","#d6e6ef",2.2,.55,t-1.1,i+1.7,e+1.35)),n.add(R("ICE","#1a2830","#d6e6ef",1.5,.42,t+1.8,i+1.7,e+1.7));const a=-64,s=-118,r=L(a,s);n.add(u(new _(7.4,.22,5.2),l.concrete,a,r+.1,s)),n.add(u(new _(3.6,2.2,2.6),l.steelDark,a,r+1.25,s)),n.add(u(new H(.55,.55,2.8,10),l.pipe,a+2.2,r+1.6,s-.6)),n.add(R("FILTER","#1a2830","#d6e6ef",2.5,.55,a,r+1.85,s+1.45));const o=-18,d=-88,c=L(o,d);return n.add(u(new _(9.2,.22,7.2),l.concrete,o,c+.1,d)),n.add(u(new H(2.15,2.15,5.6,16),l.tankO2,o-1.6,c+3,d)),n.add(u(new H(1.55,1.55,4.2,14),l.pipe,o+2.4,c+2.3,d+1.1)),n.add(R("POTABLE","#1a2830","#d6e6ef",3.2,.7,o-1.6,c+3.2,d+2.35)),n.add(R("H2O","#1a2830","#d6e6ef",1.8,.5,o+2.4,c+2.5,d+2.55)),n.add(R("ICE TO CREW","#1a100c","#f0c089",3.1,.5,o,c+6.15,d)),$i(n,-58,-154,t,e,6,1.2,.15),$i(n,t,e,a,s,8,1.2,.15),$i(n,a,s,-68,-26,10,1.15,.14),$i(n,a,s,o,d,10,1.2,.15),$i(n,o,d,-6,-100,8,1.15,.13),n}function l1(){const n=new G;n.name="batteries";const t=68,e=-10,i=L(t,e);n.add(u(new _(15.2,.22,7.2),l.concrete,t,i+.1,e));for(let o=0;o<6;o++){const d=t-5.5+o*2.2;n.add(u(new _(1.85,2.15,4.4),l.battery,d,i+1.25,e)),n.add(u(new _(1.7,.08,4.2),l.steel,d,i+2.38,e))}n.add(R("BATTERY","#111111","#f4e6c8",3.4,.7,t,i+3.15,e+3.75)),n.add(R("NIGHT STORE","#111111","#d6b48a",3.5,.55,t,i+2.45,e+3.75)),n.add(u(new H(.12,.12,18,8),l.cable,61,L(61,-14)+1.4,-14,0,0,Math.PI/2));const a=-22,s=-88,r=L(a,s);n.add(u(new _(7.2,.2,5.2),l.concrete,a,r+.1,s));for(let o=0;o<3;o++)n.add(u(new _(1.7,1.9,3.6),l.battery,a-2+o*2,r+1.15,s));return n.add(R("NIGHT","#111111","#f4e6c8",2.2,.5,a,r+2.55,s+2.7)),n.add(R("HABS","#111111","#d6b48a",1.8,.42,a,r+2.05,s+2.7)),n}function d1(n){const t=(c,h,p=1)=>n.push({type:"box",x:c,z:h,w:1.9*p,d:1.9*p}),e=(c,h,p)=>n.push({type:"cyl",x:c,z:h,r:p}),i=(c,h,p,f)=>n.push({type:"box",x:c,z:h,w:p,d:f});for(const[c,h]of[[10,8],[12.2,8.4],[10.4,10.6],[13.5,6.2],[-12,9],[-14,7.2],[8.5,-11],[6.4,-12.5]])t(c,h);for(const[c,h]of[[40,22],[38.2,24.1],[41.4,26.2],[36.5,21.4],[37.8,27.6],[34.8,24.8],[39.2,19.6],[35.4,19.2]])t(c,h);t(38.6,22.8,1.15),t(33.2,20.4,1.2),t(31.4,22.1,1.05);const a=24,s=70;for(const[c,h]of[[a,s],[a-1.8,s+2.1],[a+1.6,s+2.4],[a-2.4,s-1.2],[a+.8,s-2.2],[a-3.2,s+.6]])t(c,h);t(a-4.2,s+1.4,1.12),t(a-5.4,s-.6,1.05),t(5.4,13.2,.85);for(const[c,h]of[[18,-78],[20.2,-77.4],[18.4,-81.2],[24.6,-78.6],[26.2,-81.8]])t(c,h);const r=-60,o=66;for(const[c,h]of[[r,o],[r-1.8,o+2.1],[r+1.6,o+2.4],[r-2.4,o-1.2],[r+.8,o-2.2],[r-3.2,o+.6]])t(c,h);t(r-4.2,o+1.4,1.12),t(r-5.4,o-.6,1.05);for(const[c,h]of[[16,14],[8,-62],[30,74],[-94,-182],[48,-70],[-90,-148]])e(c,h,2.4);for(const[c,h]of[[-55,-146],[-61,-118],[-66,-78],[-68,-38],[-70,-62],[-50,-24],[-18,-14],[22,12]])e(c,h,3.4);for(const[c,h]of[[42,22],[39,26],[26,78],[26,68],[22,72],[-80,-174],[-34,-92],[-28,-104],[16,-120],[-28,128]])e(c,h,.55);for(const[c,h]of[[2.4,12.2],[-2.2,11.5],[3.8,15.6],[.6,18.2]])e(c,h,.55);i(4.3,14.8,1.4,1),i(-3.9,9.1,1.1,.8),i(5.1,16.4,1.2,.8);for(let c=0;c<8;c++)i(82.3,-22-c*6.2,50,2.6);i(54,-18,3,2.2);for(let c=0;c<4;c++)i(111.5,-74-c*6.2,30,2.6);i(96,-72,3,2.2);for(let c=0;c<5;c++)i(135.5,-28-c*6.2,30,2.6);i(120,-26,3,2.2);for(let c=0;c<5;c++)i(158.5,-48-c*6.2,30,2.6);i(146,-46,3,2.2),i(14,22,2.4,1.6),i(18,26,1.8,1.3),i(20,36,2,1.3),i(17,-17,2.4,1.6);const d=[[-108,-210],[-98,-210],[-88,-210],[-78,-210],[-68,-210],[-108,-198],[-98,-198],[-88,-198],[-78,-198],[-68,-198],[-108,-186],[-98,-186],[-88,-186],[-78,-186],[-68,-186],[-108,-174],[-98,-174],[-88,-174],[-78,-174],[-68,-174]];for(const[c,h]of d)e(c,h,.4);e(-96,-198,.7),e(-72,-204,.7),e(-104,-176,.7);for(const[c,h]of[[-90,-184],[-88.4,-182.6],[-91.2,-181.8],[-86.6,-185.2]])i(c,h,1.2,1.2);t(-84.5,-180.4,.85),t(-28,-68),t(-27,-71,1.1),t(-44,-80),t(-42.5,-68.5,.95),t(17.2,-119.4),t(18.4,-121.8,1.05),t(3.2,-118.6,.9),t(16.6,-128.8,.95),t(27.2,12.4,.9),t(12.6,13.1,.95),t(-32,124,.9),t(-30.6,126.4,.95)}function h1(){const n=new G;n.name="hab-street";const t=L(-13,-134);n.add(u(new _(30,.2,24),l.concrete,-13,t+.06,-136)),hn(n,-20,-132,0,{airlock:!0,label:"HAB 3"}),hn(n,-6,-132,0,{airlock:!0,label:"HAB 4"}),hn(n,-13,-142,Math.PI/2,{airlock:!0,label:"HAB 5"});const e=L(-13,-132)+3.15;return n.add(u(new H(1.15,1.15,8.2,12),l.habDark,-13,e,-132,0,0,Math.PI/2)),n.add(u(new H(1.15,1.15,6.4,12),l.habDark,-13,e,-137,Math.PI/2,0,0)),n.add(R("HAB STREET","#1a100c","#f0c089",3.4,.65,-13,t+5.4,-126)),Et(n,-26,-128,.2),Et(n,1.2,-128.4,-.3,1.05),n}function Si(n,t,e,i,a){i==="x"?(n.push({type:"box",x:t,z:e-1.35,w:a,d:.4}),n.push({type:"box",x:t,z:e+1.35,w:a,d:.4})):(n.push({type:"box",x:t-1.35,z:e,w:.4,d:a}),n.push({type:"box",x:t+1.35,z:e,w:.4,d:a}))}function u1(n){const t=(e,i,a,s)=>n.push({type:"box",x:e,z:i,w:a,d:s});t(-6.2,0,5.2,14.8),t(6.2,0,5.2,14.8),t(0,-6.2,10,5.2),t(-4.35,5.8,6.4,5.2),t(4.35,5.8,6.4,5.2),t(0,7.15,3.8,.8),t(-1.45,7.15,.7,1.2),t(1.45,7.15,.7,1.2),t(-1.28,13,.36,12.4),t(1.28,13,.36,12.4),t(-1.45,19.2,.4,2.8),t(1.45,19.2,.4,2.8)}function f1(){const n=new G;n.name="food-3";const t=8,e=-142,i=L(t,e);n.add(u(new _(13.2,.25,7.6),l.concrete,t,i+.1,e));const a=new de(new H(3.55,3.55,12.4,18,1,!1,0,Math.PI),l.glass);a.rotation.z=Math.PI/2,a.position.set(t,i+3.55,e),a.castShadow=!1,n.add(a),n.add(u(new _(12.2,.1,7.2),l.solarFrame,t,i+3.6,e));for(let s=-2;s<=2;s++){n.add(u(new _(1.85,.24,5.6),l.soil,t+s*2.1,i+.34,e));for(let r=-2;r<=2;r++){const o=r%2===0?l.plant:l.plantLeaf;n.add(u(new _(1.25,.58,.72),o,t+s*2.1,i+.78,e+r*.95))}n.add(u(new _(1.5,.05,5.2),l.glowWarm,t+s*2.1,i+3.15,e))}return n.add(u(new _(1.1,1.8,.14),l.habDark,t-6.2,i+1.1,e)),n.add(R("FOOD","#1a100c","#f0c089",2.8,.7,t,i+5.05,e+.15)),n.add(R("HAB STREET","#1a100c","#d6b48a",3.4,.5,t,i+4.35,e+.15)),Et(n,15,-138,.2,.9),n}function p1(){const n=new G;n.name="solar-3";const t=6,e=5;for(let r=0;r<t;r++)for(let o=0;o<e;o++){const d=122+r*5.4,c=-28-o*6.2,h=L(d,c);n.add(u(new _(.18,1.6,.18),l.solarFrame,d,h+.8,c)),n.add(u(new _(4.6,.08,2.3),l.solar,d,h+1.55,c,-.55,.15,0)),n.add(u(new _(4.75,.05,2.42),l.solarFrame,d,h+1.5,c,-.55,.15,0))}const[i,a,s]=Be(120,-26,.7);return n.add(u(new _(2.2,1.4,1.4),l.habDark,i,a,s)),n.add(R("POWER","#111111","#f4e6c8",2,.55,i,a+.2,s+.75)),n.add(R("FIELD 3","#111111","#d6b48a",2.2,.45,i,a+.85,s+.75)),n}function m1(){const n=new G;n.name="batteries-2";const t=68,e=6,i=L(t,e);n.add(u(new _(15.2,.22,7.2),l.concrete,t,i+.1,e));for(let o=0;o<6;o++){const d=t-5.5+o*2.2;n.add(u(new _(1.85,2.15,4.4),l.battery,d,i+1.25,e)),n.add(u(new _(1.7,.08,4.2),l.steel,d,i+2.38,e))}n.add(R("BATTERY","#111111","#f4e6c8",3.4,.7,t,i+3.15,e+3.75)),n.add(R("CREW STORE","#111111","#d6b48a",3.5,.55,t,i+2.45,e+3.75));const a=-28,s=-138,r=L(a,s);n.add(u(new _(7.2,.2,5.2),l.concrete,a,r+.1,s));for(let o=0;o<3;o++)n.add(u(new _(1.7,1.9,3.6),l.battery,a-2+o*2,r+1.15,s));return n.add(R("NIGHT","#111111","#f4e6c8",2.2,.5,a,r+2.55,s+2.7)),n.add(R("HAB 3-5","#111111","#d6b48a",2.2,.42,a,r+2.05,s+2.7)),n}function Nn(n,t,e,i,a){const s=(t+i)*.5,r=(e+a)*.5,o=(L(t,e)+L(i,a))*.5+2.45,d=Math.hypot(i-t,a-e),c=u(new H(1.12,1.12,d,12),l.habDark,s,o,r,Math.PI/2,0,0);c.rotation.y=Math.atan2(i-t,a-e),n.add(c),n.add(u(new Wt(1.18,.07,6,14),l.steel,t,o,e,Math.PI/2,0,0)),n.add(u(new Wt(1.18,.07,6,14),l.steel,i,o,a,Math.PI/2,0,0))}function g1(){const n=new G;n.name="neighborhood",Nn(n,-46,-108,-20,-132),Nn(n,-6,-108,-6,-132),Nn(n,-46,-108,-32,-98),Nn(n,-6,-96,2,-22),Nn(n,-40,-76,-32,-98),Nn(n,-40,-76,-50,-72),Nn(n,-6,-132,10,-124),Nn(n,10,-124,8,-142);const[t,e,i]=Be(-33,-120,3.4);n.add(R("PRESSURE","#1a100c","#f0c089",3.2,.55,t,e+1.2,i)),n.add(R("HAB 2-5","#1a100c","#d6b48a",2.8,.45,t,e+.55,i));const a=2,s=-22,r=L(a,s);return n.add(u(new H(1.45,1.45,2.8,12),l.habDark,a,r+1.55,s)),n.add(u(new _(1.1,1.8,.12),l.steelDark,a,r+1.5,s+1.5)),n.add(u(new Wt(1.48,.08,6,14),l.steel,a,r+2.95,s,Math.PI/2,0,0)),n.add(R("CREW ACCESS","#1a100c","#f0c089",3.4,.6,a,r+3.55,s+.2)),n.add(R("TO STARSHIP","#1a100c","#d6b48a",3.1,.45,a,r+2.95,s+.2)),n}function _1(){const n=new G;n.name="yard";const t=-36,e=-74,i=L(t,e);return n.add(u(new _(18,.22,14),l.concrete,t,i+.08,e)),hn(n,-40,-76,0,{airlock:!0,label:"HAB 6"}),hn(n,-32,-70,-.2,{onStands:!0,label:"NEXT"}),n.add(u(new _(.28,9.2,.28),l.lattice,t+6.2,i+4.7,e-3.4)),n.add(u(new _(8.4,.22,.22),l.lattice,t+2.4,i+9.2,e-3.4)),n.add(u(new H(.05,.05,6.8,6),l.cable,t-1.2,i+6.2,e-2.2)),n.add(u(new _(1.4,1.2,1.4),l.crate,t+1.6,i+8.6,e-3.2)),Et(n,-28,-68,.2),Et(n,-27,-71,-.4,1.1),Et(n,-44,-80,.3),Et(n,-42.5,-68.5,.1,.95),n.add(R("CONSTRUCTION","#1a100c","#f0c089",4,.7,t,i+4.6,e+6.4)),n.add(R("NEXT KIT","#1a100c","#d6b48a",3.2,.5,t,i+3.9,e+6.4)),n}function x1(){const n=new G;n.name="crew-ops";const t=-50,e=-72,i=L(t,e);return n.add(u(new _(12,.2,10),l.concrete,t,i+.08,e)),hn(n,t,e,Math.PI/2,{r:2.2,len:7.6,airlock:!0,label:"MED"}),n.add(R("CREW OPS","#1a100c","#f0c089",3.4,.6,t,i+5.35,e+.2)),n.add(R("MEDICAL","#1a100c","#d6b48a",3,.45,t,i+4.75,e+.2)),Et(n,-55.2,-76.4,.2,.9),Et(n,-44.8,-68.6,-.25,.95),n}function v1(){const n=new G;n.name="commons";const t=10,e=-124,i=L(t,e);return n.add(u(new _(16,.22,12),l.concrete,t,i+.08,e)),hn(n,t,e,0,{airlock:!0,label:"MESS"}),n.add(R("CREW COMMONS","#1a100c","#f0c089",4.2,.7,t,i+6.15,e+.2)),n.add(R("FROM CARGO","#1a100c","#d6b48a",3.4,.48,t,i+5.5,e+.2)),Et(n,17.2,-119.4,.2),Et(n,18.4,-121.8,-.3,1.05),Et(n,3.2,-118.6,.15,.9),Et(n,16.6,-128.8,.4,.95),n}function M1(){const n=new G;n.name="methalox-stock";const t=20,e=8,i=L(t,e);n.add(u(new _(16,.22,12),l.concrete,t,i+.08,e));for(let a=0;a<3;a++){const s=e-3.4+a*3.4;n.add(u(new H(1.15,1.15,6.4,16),l.tankCh4,t-3.2,i+1.45,s,0,0,Math.PI/2)),n.add(u(new H(1.15,1.15,6.4,16),l.tankO2,t+3.2,i+1.45,s,0,0,Math.PI/2))}return n.add(R("METHALOX","#1a100c","#f0c089",3.6,.7,t,i+3.55,e+6.2)),n.add(R("RETURN STOCK","#1a100c","#d6b48a",3.8,.5,t,i+2.9,e+6.2)),n.add(R("CH4","#6a2208","#f4e6c8",1.6,.42,t-3.2,i+2.85,e+3.6)),n.add(R("O2","#2a3340","#e8eef4",1.4,.42,t+3.2,i+2.85,e+3.6)),ct(n,[[20,2],[8,-2],[-8,-6],[-15,-8]],l.tankCh4,.12),Et(n,27.2,12.4,.2,.9),Et(n,12.6,13.1,-.25,.95),n}function w1(){const n=new G;n.name="next-window-pad";const t=-16,e=136;n.add(Zn(t,e,{finished:!0}));const i=L(t,e);return n.add(R("NEXT WINDOW","#1a100c","#f0c089",4.6,.85,t+22,i+3.6,e+4,-.55)),n.add(R("26 MONTHS","#1a100c","#d6b48a",3.6,.55,t+22,i+2.75,e+4,-.55)),n.add(u(new _(.12,3.4,.12),l.steelDark,t+22,i+1.7,e+4)),n.add(R("PAD 2","#1a100c","#f0c089",2.4,.55,t,i+.55,e+22.4)),n.add(u(new H(18.4,18.4,.12,40),l.concrete,t,i+.38,e)),n.add(u(new ia(9.2,17.6,36),l.soot,t,i+.46,e,-Math.PI/2,0,0)),n.add(R("SINTERED","#1a100c","#f0c089",3.6,.55,t+22,i+1.95,e+4,-.55)),n.add(y1(-38,148)),Et(n,-32,124,.2,.9),Et(n,-30.6,126.4,-.25,.95),Et(n,-40,144,.1,.85),Et(n,-41.4,146.2,-.3,.8),n}function y1(n,t){const e=new G;e.name="sinter-rig";const i=L(n,t);e.add(u(new _(8.4,.22,6.2),l.concrete,n,i+.1,t)),e.add(u(new _(5.6,2.4,3.2),l.habDark,n,i+1.4,t)),e.add(u(new _(1.6,3.6,1.6),l.steelDark,n+2.8,i+2,t-.4)),e.add(u(new H(.18,.18,4.8,8),l.steel,n+2.8,i+5.2,t-.4)),e.add(u(new _(2.4,.18,1.1),l.glowWarm,n+2.8,i+7.6,t-.4)),e.add(R("SINTER","#1a100c","#f0c089",3.2,.6,n,i+2.9,t+1.85)),e.add(R("REGOLITH","#1a100c","#d6b48a",3.4,.45,n,i+2.3,t+1.85));for(let a=0;a<4;a++)e.add(u(new _(1.4,.28,.9),l.concrete,n-2.4,i+.35+a*.32,t+2.6));return e}function S1(){const n=new G;n.name="solar-4";const t=6,e=5;for(let c=0;c<t;c++)for(let h=0;h<e;h++){const p=145+c*5.4,f=-48-h*6.2,m=L(p,f);n.add(u(new _(.18,1.6,.18),l.solarFrame,p,m+.8,f)),n.add(u(new _(4.6,.08,2.3),l.solar,p,m+1.55,f,-.55,.15,0)),n.add(u(new _(4.75,.05,2.42),l.solarFrame,p,m+1.5,f,-.55,.15,0))}const[i,a,s]=Be(146,-46,.7);n.add(u(new _(2.2,1.4,1.4),l.habDark,i,a,s)),n.add(R("POWER","#111111","#f4e6c8",2,.55,i,a+.2,s+.75)),n.add(R("FIELD 4","#111111","#d6b48a",2.2,.45,i,a+.85,s+.75));const r=158,o=-28,d=L(r,o);n.add(u(new _(12,.2,7.2),l.concrete,r,d+.1,o));for(let c=0;c<5;c++)n.add(u(new _(1.7,2,4.2),l.battery,r-4+c*2,d+1.2,o));return n.add(R("NIGHT","#111111","#f4e6c8",2.2,.5,r,d+2.7,o+3.6)),n.add(R("FIELD 4","#111111","#d6b48a",2.4,.42,r,d+2.15,o+3.6)),n}function b1(){const n=new G;n.name="isru-2";const t=-96,e=-16,i=L(t,e);return n.add(u(new _(18,.35,18),l.concrete,t,i+.12,e)),n.add(u(new H(1.55,1.7,11,12),l.steelDark,t+2.2,i+5.8,e)),n.add(u(new Wt(2.15,.16,6,14),l.steel,t+2.2,i+8.8,e,Math.PI/2,0,0)),n.add(R("SABATIER","#1a100c","#f0c089",4.4,.9,t+4.2,i+7.2,e,Math.PI/2)),n.add(R("TRAIN 2","#1a100c","#d6b48a",3.2,.55,t+4.2,i+6.3,e,Math.PI/2)),n.add(u(new H(2.4,2.4,11,18),l.tankCh4,t-5.2,i+6,e+4.6,0,0,Math.PI/2)),n.add(u(new H(2.4,2.4,11,18),l.tankO2,t-5.2,i+6,e-4.4,0,0,Math.PI/2)),n.add(R("CH4","#6a2208","#f4e6c8",2.8,.8,t+.4,i+6,e+4.6)),n.add(R("O2","#2a3340","#e8eef4",2.6,.8,t+.4,i+6,e-4.4)),ct(n,[[-88,-16],[-80,-16],[-72,-16]],l.tankCh4,.14),ct(n,[[-88,-18],[-80,-20],[-72,-18]],l.steel,.12),n}function E1(){const n=new G;n.name="ice-mine-2";const t=-78,e=-172,i=L(t,e);n.add(u(new _(8,.3,8),l.concrete,t,i+.1,e)),n.add(u(new _(.28,14,.28),l.lattice,t-2.2,i+7,e-2.2)),n.add(u(new _(.28,14,.28),l.lattice,t+2.2,i+7,e-2.2)),n.add(u(new _(.28,14,.28),l.lattice,t-2.2,i+7,e+2.2)),n.add(u(new _(.28,14,.28),l.lattice,t+2.2,i+7,e+2.2)),n.add(u(new _(5.2,.25,5.2),l.steelDark,t,i+14.2,e)),n.add(u(new H(.35,.55,9,10),l.steel,t,i+5,e)),n.add(u(new Hi(.7,1.6,8),l.soot,t,i+.9,e));const a=u(new me(4,0),l.ice,t+8.2,i+1.8,e+1.4);return a.scale.set(1.45,.75,1.2),n.add(a),n.add(u(new _(6.4,.35,1.1),l.steelDark,t+3.6,i+1.4,e,0,0,-.18)),n.add(R("ICE 2","#1a2830","#d6e6ef",2.6,.65,t,i+8.4,e+2.6)),ct(n,[[-74,-168],[-68,-150],[-64,-90],[-68,-26]],l.pipe,.13),n}function T1(){const n=new G;n.name="workshop-2";const t=66,e=-74,i=L(t,e);n.add(u(new _(16,.28,12),l.concrete,t,i+.1,e));const a=u(new H(5.4,5.4,14,16,1,!1,0,Math.PI),l.habDark,t-1.2,i+3.1,e);return a.rotation.z=Math.PI/2,n.add(a),n.add(u(new _(.2,3.8,5.8),l.steelDark,t-8.1,i+2,e)),n.add(u(new _(.28,8.4,.28),l.lattice,t+6.4,i+4.3,e-3.6)),n.add(u(new _(7.2,.2,.2),l.lattice,t+3,i+8.5,e-3.6)),n.add(u(new _(1.5,1.1,1.5),l.crate,t+2.2,i+8,e-3.4)),Et(n,73.2,-69.4,.2),Et(n,74.4,-71.6,-.3,1.05),Et(n,58.6,-68.8,.15,.9),n.add(R("WORKSHOP","#1a100c","#f0c089",3.8,.75,t,i+5.4,e+.2)),n.add(R("BAY 2","#1a100c","#d6b48a",2.6,.5,t,i+4.7,e+.2)),n}function A1(){const n=new G;n.name="potable";const t=18,e=-152,i=L(t,e);n.add(u(new _(14,.22,10),l.concrete,t,i+.1,e));for(let a=0;a<4;a++){const s=t-4.5+a*3;n.add(u(new H(1.15,1.15,6.2,14),l.pipe,s,i+1.5,e,0,0,Math.PI/2))}return n.add(R("POTABLE","#1a2830","#d6e6ef",3.4,.7,t,i+3.35,e+4.6)),n.add(R("HAB STORE","#1a2830","#d6b48a",3.2,.5,t,i+2.7,e+4.6)),ct(n,[[18,-148],[8,-142],[-6,-120],[-18,-88]],l.pipe,.12),n}function R1(){const n=new G;n.name="hab-berms";const t=[[-58,-108,9.5,.2],[-20,-100,12.5,0],[22,-128,8.5,1.2],[-8,-148,7.5,.4]];for(const[s,r,o,d]of t){const c=L(s,r),h=u(new Wt(o,1.55,8,24,Math.PI*1.15),l.rust,s,c-.2,r,Math.PI/2,d,0);h.scale.set(1,.42,1),n.add(h)}for(const[s,r]of[[-62,-102],[-14,-96],[26,-122]]){const o=u(new me(2.4,0),l.rust,s,L(s,r)+.95,r);o.scale.set(1.25,.6,1.05),n.add(o)}const[e,i,a]=Be(-20,-100,2.4);return n.add(R("DUST BERM","#1a100c","#f0c089",3.6,.65,e,i+1.1,a)),n.add(R("HAB WIND","#1a100c","#d6b48a",3.2,.48,e,i+.5,a)),n}function C1(){const n=new G;n.name="earth-dish-2";const t=-8,e=-162,i=L(t,e);n.add(u(new H(6.2,6.2,.26,28),l.concrete,t,i+.1,e)),n.add(u(new H(1.1,1.4,4.2,12),l.steelDark,t,i+2.2,e));const a=new G;return a.position.set(t,i+6.8,e),a.rotation.set(-.88,.55,0),a.add(u(new ve(5.2,22,14,0,Math.PI*2,0,Math.PI/2.28),l.dish,0,0,0)),a.add(u(new H(.06,.06,3.8,6),l.steelDark,0,1.9,0)),n.add(a),n.add(R("EARTH 2","#1a100c","#f0c089",3.2,.65,t,i+3.6,e+5.2)),n.add(R("BACKUP LINK","#1a100c","#d6b48a",3.4,.5,t,i+2.95,e+5.2)),n}function P1(){const n=new G;n.name="eclss";const t=8,e=-98,i=L(t,e);return n.add(u(new _(11.2,.22,7.2),l.concrete,t,i+.1,e)),n.add(u(new _(4.8,2.6,3.4),l.habDark,t-2.4,i+1.5,e)),n.add(R("ECLSS","#1a100c","#f0c089",3.2,.6,t-2.4,i+3.05,e+1.85)),n.add(R("CO2 SCRUB","#1a100c","#d6b48a",3.4,.45,t-2.4,i+2.45,e+1.85)),n.add(u(new H(.85,.85,3.4,12),l.steelDark,t+1.6,i+1.9,e-1.4)),n.add(u(new H(.85,.85,3.4,12),l.steelDark,t+3.4,i+1.9,e-1.4)),n.add(R("AMINE","#1a100c","#d6b48a",2.2,.4,t+2.5,i+3.8,e-1.4)),n.add(u(new H(.7,.7,2.6,12),l.tankO2,t+1.6,i+1.5,e+1.8)),n.add(u(new H(.7,.7,2.6,12),l.tankO2,t+3.4,i+1.5,e+1.8)),n.add(R("O2","#2a3340","#e8eef4",1.4,.4,t+2.5,i+3.05,e+1.8)),ct(n,[[8,-98],[14,-104],[22,-112]],l.pipe,.1),ct(n,[[8,-98],[2,-102],[-6,-108]],l.tankO2,.09),n}function D1(){const n=new G;n.name="rover-shelter";const t=48,e=-70,i=L(t,e);n.add(u(new _(12.4,.18,8.6),l.concrete,t,i+.08,e));const a=[[-5.2,-3.4],[5.2,-3.4],[-5.2,3.4],[5.2,3.4]];for(const[s,r]of a)n.add(u(new _(.28,4.6,.28),l.steelDark,t+s,i+2.4,e+r));return n.add(u(new _(12.8,.16,9),l.steel,t,i+4.75,e)),n.add(u(new _(12.8,.06,9),l.solar,t,i+4.88,e)),n.add(R("DUST","#1a100c","#f0c089",2.6,.5,t,i+5.35,e+4.6)),n.add(R("ROVER","#1a100c","#d6b48a",2.8,.42,t,i+4.8,e+4.6)),n}function I1(){const n=new G;n.name="isru-radiators";const t=-68,e=12,i=L(t,e);n.add(u(new _(16.4,.18,6.2),l.concrete,t,i+.08,e));for(let a=0;a<5;a++){const s=t-6+a*3;n.add(u(new _(.16,3.6,.16),l.steelDark,s,i+1.9,e-1.8)),n.add(u(new _(.16,3.6,.16),l.steelDark,s,i+1.9,e+1.8)),n.add(u(new _(2.4,3.2,.08),l.solar,s,i+2.4,e,-.15,0,0)),n.add(u(new _(2.5,3.3,.04),l.steel,s,i+2.4,e+.06,-.15,0,0))}return n.add(R("REJECT","#1a100c","#f0c089",2.8,.5,t,i+4.55,e+3.2)),n.add(R("HEAT","#1a100c","#d6b48a",2.4,.42,t,i+4,e+3.2)),ct(n,[[-68,-6],[-68,4],[-68,12]],l.pipe,.1),n}function L1(){const n=new G;n.name="parts-depot";const t=22,e=-80,i=L(t,e);return n.add(u(new _(12.2,.18,8.2),l.concrete,t,i+.08,e)),n.add(u(new _(.22,3.8,8.2),l.steelDark,t-5.8,i+2,e)),n.add(u(new _(12.2,.14,8.4),l.steel,t,i+3.95,e)),Et(n,18,-78,.15,1),Et(n,20.2,-77.4,-.2,.95),Et(n,18.4,-81.2,.3,1.05),Et(n,24.6,-78.6,-.1,1),Et(n,26.2,-81.8,.25,.9),n.add(u(new _(2.4,1.1,1.4),l.steel,t+1.2,i+.75,e+.4)),n.add(R("PARTS","#1a100c","#f0c089",2.8,.55,t,i+4.45,e+4.2)),n.add(R("CARGO","#1a100c","#d6b48a",2.6,.42,t,i+3.9,e+4.2)),n}function U1(){const n=new G;n.name="greenhouse-2";const t=52,e=-112,i=L(t,e);n.add(u(new _(13.6,.22,8.2),l.concrete,t,i+.1,e));const a=new de(new H(3.7,3.7,12.6,16,1,!1,0,Math.PI),l.glass);a.rotation.z=Math.PI/2,a.position.set(t,i+3.7,e),a.castShadow=!1,n.add(a),n.add(u(new _(12.4,.1,7.6),l.solarFrame,t,i+3.75,e));for(let s=-2;s<=2;s++){n.add(u(new _(1.9,.24,6),l.soil,t+s*2.15,i+.34,e));for(let r=-2;r<=2;r++){const o=r%2===0?l.plant:l.plantLeaf;n.add(u(new _(1.3,.48,.74),o,t+s*2.15,i+.68,e+r*1.05))}n.add(u(new _(1.55,.05,5.6),l.glowWarm,t+s*2.15,i+3.2,e))}return n.add(R("GREENHOUSE 2","#1a100c","#f0c089",4,.65,t,i+5.15,e+.15)),n.add(R("GROW FROM CO2","#1a100c","#d6b48a",3.6,.48,t,i+4.5,e+.15)),ct(n,[[32,-112],[42,-112],[52,-112]],l.pipe,.1),n}function N1(){const n=new G;n.name="ice-depot";const t=-90,e=-158,i=L(t,e);n.add(u(new _(12,.22,10),l.concrete,t,i+.1,e)),n.add(u(new _(3.6,2.4,2.8),l.steelDark,t-1.8,i+1.35,e)),n.add(u(new H(.85,1.65,2.1,10),l.steelDark,t-1.8,i+3.35,e)),n.add(u(new _(2.4,.28,1.05),l.steel,t+.7,i+2.1,e,0,0,-.2));const a=u(new me(2.8,0),l.ice,t+3.6,i+1.25,e+1.5);return a.scale.set(1.35,.7,1.15),n.add(a),n.add(u(new me(1.15,0),l.ice,t+4.8,i+.85,e+.2)),n.add(R("ICE","#1a2830","#d6e6ef",2.2,.55,t,i+3.85,e+4.4)),n.add(R("CRUSH","#1a2830","#d6e6ef",2.6,.5,t,i+3.2,e+4.4)),ct(n,[[-86,-160],[-80,-166],[-74,-168]],l.pipe,.13),n}function z1(){const n=new G;n.name="batteries-3";const t=8,e=-78,i=L(t,e);n.add(u(new _(11.6,.2,6.4),l.concrete,t,i+.1,e));for(let a=0;a<5;a++)n.add(u(new _(1.7,1.95,3.8),l.battery,t-4+a*2,i+1.15,e)),n.add(u(new _(1.55,.08,3.6),l.steel,t-4+a*2,i+2.18,e));return n.add(R("NIGHT","#111111","#f4e6c8",2.4,.5,t,i+2.7,e+3.3)),n.add(R("HAB STORE","#111111","#d6b48a",3,.42,t,i+2.15,e+3.3)),n}function F1(){const n=new G;n.name="o2-buffer";const t=-8,e=-88,i=L(t,e);n.add(u(new _(10.2,.2,7.4),l.concrete,t,i+.1,e));for(let a=0;a<4;a++){const s=t-3.3+a*2.2;n.add(u(new H(.85,.85,3.6,12),l.tankO2,s,i+2,e))}return n.add(R("O2","#2a3340","#e8eef4",1.8,.5,t,i+4.15,e+3.7)),n.add(R("CREW","#2a3340","#d6b48a",2.2,.42,t,i+3.6,e+3.7)),ct(n,[[-8,-88],[0,-94],[8,-98]],l.tankO2,.1),n}function O1(){const n=new G;n.name="co2-capture";const t=-96,e=4,i=L(t,e);return n.add(u(new _(11.6,.2,7.4),l.concrete,t,i+.1,e)),n.add(u(new H(.55,.55,6.8,10),l.steel,t-2.4,i+3.6,e)),n.add(u(new H(2.1,.65,2.4,14),l.steelDark,t-2.4,i+7.8,e)),n.add(u(new Wt(1.85,.1,6,16),l.steel,t-2.4,i+9.1,e,Math.PI/2,0,0)),n.add(u(new _(3.2,2.2,2.4),l.habDark,t+2.2,i+1.3,e)),n.add(R("CO2","#1a100c","#f0c089",2.2,.55,t-2.4,i+4.8,e+1.4)),n.add(R("INTAKE 2","#1a100c","#d6b48a",3,.45,t+2.2,i+2.7,e+1.35)),ct(n,[[-96,4],[-96,-6],[-96,-16]],l.pipe,.12),n}function B1(){const n=new G;n.name="solar-dust-fence";const t=142,e=-62,i=L(t,e);for(let a=0;a<8;a++){const s=e-10.5+a*3;n.add(u(new _(.18,3.4,.18),l.steelDark,t,i+1.8,s)),a<7&&n.add(u(new _(.06,2.6,2.7),l.lattice,t,i+1.7,s+1.5))}return n.add(R("DUST","#1a100c","#f0c089",2.4,.45,t-1.4,i+3.5,e)),n.add(R("FENCE","#1a100c","#d6b48a",2.4,.4,t-1.4,i+3,e)),n}function k1(){const n=new G;n.name="condensate";const t=28,e=-140,i=L(t,e);return n.add(u(new _(9.6,.2,7.2),l.concrete,t,i+.1,e)),n.add(u(new H(1.35,1.35,3.8,14),l.pipe,t-1.6,i+2.1,e)),n.add(u(new H(1.35,1.35,3.8,14),l.pipe,t+1.8,i+2.1,e)),n.add(u(new _(2.4,1.6,1.8),l.habDark,t,i+1,e+2.2)),n.add(R("H2O","#1a2830","#d6e6ef",2.2,.5,t,i+4.3,e+3.6)),n.add(R("CONDENSATE","#1a2830","#d6b48a",3.6,.42,t,i+3.75,e+3.6)),ct(n,[[28,-140],[18,-146],[18,-152]],l.pipe,.1),ct(n,[[28,-140],[16,-142],[8,-142]],l.pipe,.09),n}function H1(){const n=new G;n.name="eva-rack";const t=12,e=18,i=L(t,e);return n.add(u(new _(5.8,.16,2.4),l.steelDark,t,i+.08,e)),n.add(u(new _(.16,2.8,.16),l.steel,t-2.4,i+1.5,e-.7)),n.add(u(new _(.16,2.8,.16),l.steel,t+2.4,i+1.5,e-.7)),n.add(u(new _(5,.12,.12),l.steel,t,i+2.9,e-.7)),n.add(an(t-1.5,e,.2)),n.add(an(t,e+.15,-.1)),n.add(an(t+1.5,e,.15)),n.add(R("SUITS","#1a100c","#f0c089",2.4,.45,t,i+3.35,e+1.2)),n.add(R("EVA RACK","#1a100c","#d6b48a",2.8,.4,t,i+2.85,e+1.2)),n}function G1(){const n=new G;n.name="ch4-buffer";const t=36,e=8,i=L(t,e);n.add(u(new _(9.6,.2,7.2),l.concrete,t,i+.1,e));for(let a=0;a<3;a++)n.add(u(new H(1.05,1.05,5.6,14),l.tankCh4,t-2.4+a*2.4,i+1.4,e,0,0,Math.PI/2));return n.add(R("CH4","#6a2208","#f4e6c8",2.2,.5,t,i+3.35,e+3.7)),n.add(R("RETURN","#6a2208","#d6b48a",2.6,.42,t,i+2.8,e+3.7)),ct(n,[[28,8],[32,8],[36,8]],l.tankCh4,.11),n}function V1(){const n=new G;n.name="o2-return";const t=36,e=-6,i=L(t,e);n.add(u(new _(9.6,.2,7.2),l.concrete,t,i+.1,e));for(let a=0;a<3;a++)n.add(u(new H(1.05,1.05,5.6,14),l.tankO2,t-2.4+a*2.4,i+1.4,e,0,0,Math.PI/2));return n.add(R("O2","#2a3340","#e8eef4",1.8,.5,t,i+3.35,e+3.7)),n.add(R("RETURN","#2a3340","#d6b48a",2.6,.42,t,i+2.8,e+3.7)),ct(n,[[36,8],[36,1],[36,-6]],l.steel,.11),n}function W1(){const n=new G;n.name="isru-electrolysis";const t=-50,e=4,i=L(t,e);n.add(u(new _(11.6,.2,7.4),l.concrete,t,i+.1,e)),n.add(u(new _(3.4,3.6,2.6),l.habDark,t-2.6,i+2,e)),n.add(u(new _(3.4,3.6,2.6),l.steelDark,t+1.2,i+2,e));for(let a=0;a<4;a++)n.add(u(new _(.18,3.1,2.2),l.steel,t-3.8+a*.7,i+2,e));return n.add(u(new H(1.15,1.15,5.2,14),l.steel,t+4.2,i+2.8,e+1.4)),n.add(u(new H(.95,.95,4.4,14),l.tankO2,t+4.2,i+2.4,e-1.6)),n.add(R("ELECTRO","#1a100c","#f0c089",3.2,.5,t,i+4.55,e+3.7)),n.add(R("H2 RECYCLE","#1a100c","#d6b48a",3.4,.42,t,i+4,e+3.7)),ct(n,[[-72,-26],[-50,-16],[-50,4]],l.pipe,.11),ct(n,[[-50,4],[-58,4],[-64,-8]],l.steel,.1),n}function X1(){const n=new G;n.name="ice-melt";const t=-58,e=-142,i=L(t,e);n.add(u(new _(9.6,.2,7.2),l.concrete,t,i+.1,e)),n.add(u(new _(3.6,2.8,3.2),l.habDark,t-1.8,i+1.6,e)),n.add(u(new H(1.45,1.45,4.2,14),l.pipe,t+2.2,i+2.3,e)),n.add(u(new H(.55,.85,1.6,10),l.steelDark,t+2.2,i+4.9,e));const a=u(new me(1.8,0),l.ice,t-3.4,i+.9,e+2.1);return a.scale.set(1.15,.55,1),n.add(a),n.add(R("MELT","#1a2830","#d6e6ef",2.4,.5,t,i+4.4,e+3.7)),n.add(R("STILL","#1a2830","#d6b48a",2.2,.42,t,i+3.85,e+3.7)),ct(n,[[-58,-158],[-58,-150],[-58,-142]],l.pipe,.11),ct(n,[[-58,-142],[-64,-90],[-68,-26]],l.pipe,.1),n}function q1(){const n=new G;n.name="methalox-pump";const t=-32,e=-22,i=L(t,e);return n.add(u(new _(9.6,.2,7.2),l.concrete,t,i+.1,e)),n.add(u(new _(5.2,3.2,4.4),l.habDark,t,i+1.8,e)),n.add(u(new _(5.4,.14,4.6),l.steel,t,i+3.5,e)),n.add(u(new H(.55,.55,1.8,10),l.tankCh4,t-1.4,i+1.1,e+2.6,0,0,Math.PI/2)),n.add(u(new H(.55,.55,1.8,10),l.steel,t+1.4,i+1.1,e+2.6,0,0,Math.PI/2)),n.add(R("PUMP","#1a100c","#f0c089",2.4,.5,t,i+4.15,e+3.7)),n.add(R("METHALOX","#1a100c","#d6b48a",3.2,.42,t,i+3.6,e+3.7)),ct(n,[[-32,-14],[-32,-18],[-32,-22]],l.tankCh4,.11),ct(n,[[-32,-18],[-32,-22],[-18,-10]],l.steel,.1),n}function Y1(){const n=new G;n.name="sinter-press";const t=66,e=-90,i=L(t,e);return n.add(u(new _(9.6,.2,7.2),l.concrete,t,i+.1,e)),n.add(u(new _(4.6,2.2,3.4),l.steelDark,t,i+1.3,e)),n.add(u(new _(1.4,3.4,1.4),l.steel,t,i+3.2,e)),n.add(u(new _(3.2,.35,2.4),l.steel,t,i+4.9,e)),n.add(u(new _(2.2,.55,1.6),l.habDark,t,i+2.55,e)),Et(n,62.2,-87.6,.2,.9),Et(n,70,-92.2,-.15,.85),n.add(R("SINTER","#1a100c","#f0c089",2.8,.5,t,i+5.55,e+3.7)),n.add(R("PRESS","#1a100c","#d6b48a",2.4,.42,t,i+5,e+3.7)),n}function K1(){const n=new G;n.name="waste-recycle";const t=22,e=-98,i=L(t,e);return n.add(u(new _(9.6,.2,7.2),l.concrete,t,i+.1,e)),n.add(u(new _(4.4,2.8,3.6),l.habDark,t-1.4,i+1.6,e)),n.add(u(new H(1.15,1.15,3.6,14),l.pipe,t+2.8,i+2,e)),n.add(u(new H(.85,.85,2.8,12),l.steelDark,t+2.8,i+1.6,e+2)),n.add(R("WASTE","#1a100c","#f0c089",2.6,.5,t,i+4.25,e+3.7)),n.add(R("RECOVERY","#1a100c","#d6b48a",3.2,.42,t,i+3.7,e+3.7)),ct(n,[[8,-98],[14,-98],[22,-98]],l.pipe,.1),ct(n,[[22,-98],[22,-112],[22,-112]],l.pipe,.09),n}function J1(){const n=new G;n.name="solar-combiner";const t=172,e=-48,i=L(t,e);n.add(u(new _(9.6,.2,7.2),l.concrete,t,i+.1,e)),n.add(u(new _(3.6,2.4,2.8),l.habDark,t-2,i+1.4,e)),n.add(u(new _(3.2,2,2.4),l.steelDark,t+2.2,i+1.2,e));for(let a=0;a<3;a++)n.add(u(new _(.7,1.5,1.8),l.battery,t+1.2+a*.85,i+1,e));return n.add(R("COMBINER","#111111","#f4e6c8",3.4,.5,t,i+3.55,e+3.7)),n.add(R("FIELD 4","#111111","#d6b48a",2.6,.42,t,i+3,e+3.7)),ct(n,[[158,-62],[166,-54],[172,-48]],l.cable,.1),ct(n,[[172,-48],[164,-38],[158,-28]],l.cable,.09),n}function Z1(){const n=new G;n.name="gh-dust-filter";const t=38,e=-104,i=L(t,e);return n.add(u(new _(9.2,.18,5.6),l.concrete,t,i+.09,e)),n.add(u(new _(3.8,2.6,2.4),l.habDark,t-1.6,i+1.5,e)),n.add(u(new H(.95,.95,3.2,12),l.steelDark,t+2.4,i+1.8,e)),n.add(u(new _(.12,2.2,2),l.lattice,t+3.5,i+1.4,e)),n.add(R("DUST","#1a100c","#f0c089",2.2,.45,t,i+3.55,e+2.9)),n.add(R("FILTER","#1a100c","#d6b48a",2.6,.4,t,i+3.05,e+2.9)),ct(n,[[22,-112],[30,-108],[38,-104]],l.pipe,.1),ct(n,[[38,-104],[46,-108],[52,-112]],l.pipe,.09),n}function $1(){const n=new G;n.name="weather-mast";const t=24,e=-128,i=L(t,e);return n.add(u(new _(3.6,.16,3.6),l.concrete,t,i+.08,e)),n.add(u(new H(.16,.22,14.4,8),l.lattice,t,i+7.3,e)),n.add(u(new _(2.8,.08,.08),l.steel,t,i+12.4,e)),n.add(u(new _(.08,.08,2.8),l.steel,t,i+12.4,e)),n.add(u(new _(2.2,.06,.06),l.steelDark,t,i+14.2,e)),n.add(u(new _(1.4,1.1,1.1),l.habDark,t+1.15,i+.75,e+.9)),n.add(R("MET","#1a100c","#f0c089",1.8,.42,t,i+8.6,e+1.6)),n.add(R("DUST","#1a100c","#d6b48a",2,.38,t,i+8.1,e+1.6)),n}function j1(){const n=new G;n.name="ch4-chiller";const t=-80,e=20,i=L(t,e);return n.add(u(new _(9.6,.2,7.2),l.concrete,t,i+.1,e)),n.add(u(new _(4.2,2.6,3.2),l.habDark,t-1.6,i+1.5,e)),n.add(u(new H(1.25,1.25,5,14),l.tankCh4,t+2.6,i+2.7,e)),n.add(u(new Wt(1.55,.1,6,14),l.steel,t+2.6,i+4.4,e,Math.PI/2,0,0)),n.add(R("CH4","#6a2208","#f4e6c8",2,.45,t,i+4.15,e+3.7)),n.add(R("CHILLER","#1a100c","#d6b48a",2.8,.4,t,i+3.6,e+3.7)),ct(n,[[-76,-10],[-80,6],[-80,20]],l.tankCh4,.11),ct(n,[[-68,12],[-74,16],[-80,20]],l.pipe,.09),n}function Q1(){const n=new G;n.name="pad2-beacons";const t=[[2,154],[-34,154],[2,118],[-34,118]];for(const[s,r]of t){const o=L(s,r);n.add(u(new H(.14,.18,5.6,8),l.steelDark,s,o+2.9,r)),n.add(u(new _(.55,.55,.55),l.glowPad,s,o+5.85,r)),n.add(u(new _(.22,.9,.22),l.steel,s,o+6.4,r))}const e=6,i=148,a=L(e,i);return n.add(u(new _(5.4,.16,4.2),l.concrete,e,a+.08,i)),n.add(u(new _(2.6,1.6,1.8),l.habDark,e,a+1,i)),n.add(R("PAD 2","#1a100c","#f0c089",2.2,.42,e,a+2.35,i+2.2)),n.add(R("BEACONS","#1a100c","#d6b48a",2.6,.38,e,a+1.88,i+2.2)),n}function tm(){const n=new G;n.name="cargo-crane";const t=-64,e=80,i=L(t,e);return n.add(u(new _(7.2,.2,7.2),l.concrete,t,i+.1,e)),n.add(u(new _(1.4,10.4,1.4),l.steelDark,t,i+5.3,e)),n.add(u(new _(.28,.28,12.4),l.steel,t+3.6,i+10.5,e-3.2,0,.55,.08)),n.add(u(new _(.18,3.2,.18),l.steelDark,t+7.4,i+8.4,e-6.6)),n.add(u(new _(1.5,1.3,1.5),l.crate,t+7.4,i+6.5,e-6.6)),Et(n,t-2.4,e+2.2,.2,1),Et(n,t-2.8,e-1.6,-.15,.9),n.add(R("CRANE","#1a100c","#f0c089",2.6,.5,t,i+6.4,e+3.6)),n.add(R("CARGO","#1a100c","#d6b48a",2.4,.42,t,i+5.85,e+3.6)),n}function em(){const n=new G;n.name="o2-chiller";const t=-80,e=32,i=L(t,e);return n.add(u(new _(9.6,.2,7.2),l.concrete,t,i+.1,e)),n.add(u(new _(4.2,2.6,3.2),l.habDark,t-1.6,i+1.5,e)),n.add(u(new H(1.25,1.25,5,14),l.tankO2,t+2.6,i+2.7,e)),n.add(u(new Wt(1.55,.1,6,14),l.steel,t+2.6,i+4.4,e,Math.PI/2,0,0)),n.add(R("O2","#2a3340","#e8eef4",1.8,.45,t,i+4.15,e+3.7)),n.add(R("CHILLER","#1a100c","#d6b48a",2.8,.4,t,i+3.6,e+3.7)),ct(n,[[-80,20],[-80,26],[-80,32]],l.steel,.11),ct(n,[[-72,-21],[-80,8],[-80,32]],l.steel,.09),n}function nm(){const n=new G;n.name="power-trench";const t=100,e=-22,i=L(t,e);n.add(u(new _(7.6,.18,5.4),l.concrete,t,i+.08,e)),n.add(u(new _(3.2,1.8,2.4),l.habDark,t,i+1.1,e)),n.add(u(new _(1.4,.9,1.1),l.steelDark,t+2.4,i+.65,e+1.2)),n.add(R("POWER","#111111","#f4e6c8",2.6,.45,t,i+2.45,e+2.8)),n.add(R("TRENCH","#111111","#d6b48a",2.4,.38,t,i+1.95,e+2.8)),ct(n,[[172,-48],[135,-40],[100,-22]],l.cable,.12),ct(n,[[100,-22],[84,-16],[68,-10]],l.cable,.12);for(const[a,s]of[[148,-44],[122,-34],[84,-16]]){const r=L(a,s);n.add(u(new _(2.4,.16,1.1),l.steelDark,a,r+.12,s))}return n}function im(){const n=new G;n.name="regolith-stock";const t=-22,e=-56,i=L(t,e);n.add(u(new _(9.6,.16,7.2),l.concrete,t,i+.08,e));const a=u(new me(2.6,0),l.soil,t-1.6,i+1.2,e);a.scale.set(1.35,.7,1.15),n.add(a);const s=u(new me(2,0),l.soil,t+2.2,i+.95,e+1.1);return s.scale.set(1.2,.6,1.05),n.add(s),n.add(u(new _(2.2,1.2,1.6),l.steelDark,t+2.6,i+.8,e-2)),Et(n,t-3.4,e-2.2,.2,.85),n.add(R("REGOLITH","#1a100c","#f0c089",3.4,.48,t,i+3.15,e+3.7)),n.add(R("SINTER FEED","#1a100c","#d6b48a",3.4,.4,t,i+2.6,e+3.7)),n}function am(){const n=new G;n.name="survey-2";const t=-124,e=-188,i=L(t,e);for(let s=0;s<3;s++){const r=s/3*Math.PI*2+.2,o=Math.cos(r)*.62,d=Math.sin(r)*.62;n.add(u(new _(.08,2.5,.08),l.steelDark,t+o,i+1.15,e+d,.32*Math.cos(r),0,.32*Math.sin(r)))}n.add(u(new _(.58,.32,.48),l.steelDark,t,i+2.28,e)),n.add(R("SURVEY 2","#1a100c","#f0c089",3,.55,t,i+3.4,e+1.2)),n.add(R("ICE WEST","#1a100c","#d6b48a",2.6,.4,t,i+2.85,e+1.2));const a=[[-136,-200],[-124,-200],[-112,-200],[-136,-188],[-124,-188],[-112,-188],[-136,-176],[-124,-176],[-112,-176]];for(let s=0;s<a.length;s++){const[r,o]=a[s];Xr(n,r,o,s%2===0?l.flagIce:l.flagDeposit)}return Ka(n,-130,-196,"ICE",l.flagIce),Ar(n,-122,-184,.2),Ar(n,-126.4,-182.6,-.3),n}function sm(){const n=new G;n.name="h2-recycle";const t=-38,e=16,i=L(t,e);return n.add(u(new _(9.6,.2,7.2),l.concrete,t,i+.1,e)),n.add(u(new H(1.55,1.55,6.4,16),l.steel,t-1.8,i+3.4,e)),n.add(u(new H(1.55,1.55,6.4,16),l.steel,t+1.8,i+3.4,e)),n.add(u(new _(2.2,1.4,1.6),l.habDark,t,i+.9,e+2.2)),n.add(R("H2","#1a100c","#f0c089",1.8,.5,t,i+5.15,e+3.7)),n.add(R("RECYCLE","#1a100c","#d6b48a",2.8,.42,t,i+4.55,e+3.7)),ct(n,[[-50,4],[-44,10],[-38,16]],l.steel,.11),ct(n,[[-38,16],[-52,8],[-64,-8]],l.steel,.1),n}function rm(){const n=new G;n.name="food-4";const t=70,e=-112,i=L(t,e);n.add(u(new _(11.6,.22,7.2),l.concrete,t,i+.1,e));const a=new de(new H(3.3,3.3,11.2,16,1,!1,0,Math.PI),l.glass);a.rotation.z=Math.PI/2,a.position.set(t,i+3.3,e),a.castShadow=!1,n.add(a),n.add(u(new _(10.8,.1,6.6),l.solarFrame,t,i+3.35,e));for(let s=-2;s<=2;s++){n.add(u(new _(1.7,.22,5.2),l.soil,t+s*1.95,i+.32,e));for(let r=-2;r<=2;r++){const o=r%2===0?l.plant:l.plantLeaf;n.add(u(new _(1.15,.5,.66),o,t+s*1.95,i+.7,e+r*.9))}}return n.add(R("GROW 4","#1a100c","#f0c089",2.8,.55,t,i+4.75,e+.15)),n.add(R("FROM CO2","#1a100c","#d6b48a",3,.42,t,i+4.15,e+.15)),ct(n,[[52,-112],[62,-112],[70,-112]],l.pipe,.1),n}function om(){const n=new G;n.name="approach-lights";for(const[a,s]of[[4,68],[4,50],[4,32]]){const r=L(a,s);n.add(u(new H(.12,.16,3.6,8),l.steelDark,a,r+1.9,s)),n.add(u(new _(.42,.42,.42),l.glowPad,a,r+3.85,s))}const t=16,e=48,i=L(t,e);return n.add(u(new _(5.2,.16,4),l.concrete,t,i+.08,e)),n.add(u(new _(2.4,1.5,1.6),l.habDark,t,i+.95,e)),n.add(R("APPROACH","#1a100c","#f0c089",3,.42,t,i+2.25,e+2.1)),n.add(R("LIGHTS","#1a100c","#d6b48a",2.2,.36,t,i+1.78,e+2.1)),n}function cm(){const n=new G;n.name="isru-process-water";const t=-58,e=-36,i=L(t,e);return n.add(u(new _(11.2,.2,7.4),l.concrete,t,i+.1,e)),n.add(u(new H(1.7,1.7,8.4,16),l.pipe,t-2.2,i+2,e,0,0,Math.PI/2)),n.add(u(new H(1.7,1.7,8.4,16),l.pipe,t+2,i+2,e,0,0,Math.PI/2)),n.add(u(new _(2.4,1.6,1.8),l.habDark,t,i+1,e+2.4)),n.add(R("PROCESS","#1a2830","#d6e6ef",3.2,.5,t,i+4.55,e+3.8)),n.add(R("H2O","#1a2830","#d6b48a",2,.42,t,i+4,e+3.8)),ct(n,[[-58,-142],[-58,-90],[-58,-36]],l.pipe,.11),ct(n,[[-58,-36],[-64,-26],[-68,-16]],l.pipe,.1),ct(n,[[-58,-36],[-50,-16],[-50,4]],l.pipe,.1),n}function lm(){const n=new G;n.name="methalox-berm";const t=u(new Wt(9.2,1.7,8,24,Math.PI*1.2),l.rust,50,L(50,4)-.15,4,Math.PI/2,1.6,0);t.scale.set(1,.45,1),n.add(t);for(const[s,r]of[[54,12],[56,4],[54,-4]]){const o=u(new me(2.2,0),l.rust,s,L(s,r)+.9,r);o.scale.set(1.2,.55,1.05),n.add(o)}const[e,i,a]=Be(50,4,2.2);return n.add(R("FARM BERM","#1a100c","#f0c089",3.4,.55,e,i+1.1,a)),n.add(R("METHALOX","#1a100c","#d6b48a",3.2,.42,e,i+.5,a)),n}function dm(){const n=new G;n.name="ice-mine-berm";const t=u(new Wt(8.4,1.6,8,24,Math.PI*1.15),l.rust,-40,L(-40,-168)-.15,-168,Math.PI/2,.4,0);t.scale.set(1,.44,1),n.add(t);for(const[s,r]of[[-34,-162],[-32,-170],[-38,-176]]){const o=u(new me(2.1,0),l.rust,s,L(s,r)+.85,r);o.scale.set(1.15,.55,1),n.add(o)}const[e,i,a]=Be(-40,-168,2.2);return n.add(R("MINE BERM","#1a2830","#d6e6ef",3.4,.55,e,i+1.1,a)),n.add(R("ICE 1","#1a2830","#d6b48a",2.2,.42,e,i+.5,a)),n}function hm(){const n=new G;n.name="tool-crib";const t=82,e=-90,i=L(t,e);n.add(u(new _(9.6,.2,7.2),l.concrete,t,i+.1,e)),n.add(u(new _(7.2,2.6,3.4),l.habDark,t,i+1.5,e)),n.add(u(new _(7.4,.12,3.6),l.steel,t,i+2.85,e));for(let a=-2;a<=2;a++)n.add(u(new _(.9,1.6,.55),l.steelDark,t+a*1.15,i+1.15,e+1.35));return Et(n,77.8,-87.4,.15,.85),Et(n,86.2,-92.4,-.1,.8),n.add(R("TOOL","#1a100c","#f0c089",2.2,.5,t,i+3.85,e+3.7)),n.add(R("CRIB","#1a100c","#d6b48a",2,.42,t,i+3.3,e+3.7)),n}function um(){const n=new G;n.name="comms-battery";const t=4,e=-148,i=L(t,e);n.add(u(new _(9.6,.2,7.2),l.concrete,t,i+.1,e));for(let a=0;a<4;a++)n.add(u(new _(1.7,1.9,3.6),l.battery,t-3.2+a*2.1,i+1.15,e)),n.add(u(new _(1.55,.08,3.4),l.steel,t-3.2+a*2.1,i+2.15,e));return n.add(R("COMMS","#111111","#f4e6c8",2.6,.5,t,i+3.15,e+3.7)),n.add(R("NIGHT","#111111","#d6b48a",2.2,.42,t,i+2.6,e+3.7)),n}function fm(){const n=new G;n.name="solar-combiner-3";const t=148,e=-40,i=L(t,e);n.add(u(new _(9.6,.2,7.2),l.concrete,t,i+.1,e)),n.add(u(new _(3.6,2.4,2.8),l.habDark,t-2,i+1.4,e)),n.add(u(new _(3.2,2,2.4),l.steelDark,t+2.2,i+1.2,e));for(let a=0;a<3;a++)n.add(u(new _(.7,1.5,1.8),l.battery,t+1.2+a*.85,i+1,e));return n.add(R("COMBINER","#111111","#f4e6c8",3.4,.5,t,i+3.55,e+3.7)),n.add(R("FIELD 3","#111111","#d6b48a",2.6,.42,t,i+3,e+3.7)),ct(n,[[135,-40],[142,-40],[148,-40]],l.cable,.1),ct(n,[[148,-40],[124,-30],[100,-22]],l.cable,.09),n}function pm(){const n=new G;n.name="solar-combiner-2";const t=124,e=-70,i=L(t,e);n.add(u(new _(9.6,.2,7.2),l.concrete,t,i+.1,e)),n.add(u(new _(3.6,2.4,2.8),l.habDark,t-2,i+1.4,e)),n.add(u(new _(3.2,2,2.4),l.steelDark,t+2.2,i+1.2,e));for(let a=0;a<3;a++)n.add(u(new _(.7,1.5,1.8),l.battery,t+1.2+a*.85,i+1,e));return n.add(R("COMBINER","#111111","#f4e6c8",3.4,.5,t,i+3.55,e+3.7)),n.add(R("FIELD 2","#111111","#d6b48a",2.6,.42,t,i+3,e+3.7)),ct(n,[[112,-83],[118,-76],[124,-70]],l.cable,.1),ct(n,[[124,-70],[136,-54],[148,-40]],l.cable,.09),n}function mm(){const n=new G;n.name="solar-combiner-1";const t=96,e=-44,i=L(t,e);n.add(u(new _(9.6,.2,7.2),l.concrete,t,i+.1,e)),n.add(u(new _(3.6,2.4,2.8),l.habDark,t-2,i+1.4,e)),n.add(u(new _(3.2,2,2.4),l.steelDark,t+2.2,i+1.2,e));for(let a=0;a<3;a++)n.add(u(new _(.7,1.5,1.8),l.battery,t+1.2+a*.85,i+1,e));return n.add(R("COMBINER","#111111","#f4e6c8",3.4,.5,t,i+3.55,e+3.7)),n.add(R("FARM 1","#111111","#d6b48a",2.4,.42,t,i+3,e+3.7)),ct(n,[[82,-44],[90,-44],[96,-44]],l.cable,.1),ct(n,[[96,-44],[98,-32],[100,-22]],l.cable,.09),n}function gm(){const n=new G;n.name="sabatier-condenser";const t=-84,e=8,i=L(t,e);return n.add(u(new _(9.6,.2,7.2),l.concrete,t,i+.1,e)),n.add(u(new _(3.8,2.4,2.8),l.habDark,t-2,i+1.4,e)),n.add(u(new H(1.35,1.35,4.6,14),l.pipe,t+2.4,i+2.5,e)),n.add(u(new Wt(1.65,.1,6,14),l.steel,t+2.4,i+4.1,e,Math.PI/2,0,0)),n.add(u(new H(.7,.7,2.4,12),l.steelDark,t+2.4,i+1.4,e+2.1)),n.add(R("KNOCKOUT","#1a2830","#d6e6ef",3.4,.45,t,i+4.15,e+3.7)),n.add(R("H2O","#1a2830","#d6b48a",1.8,.4,t,i+3.6,e+3.7)),ct(n,[[-68,-16],[-76,-4],[-84,8]],l.pipe,.11),ct(n,[[-84,8],[-80,14],[-80,20]],l.tankCh4,.09),n}function _m(){const n=new G;n.name="hab-dust-lock";const t=16,e=-86,i=L(t,e);return n.add(u(new _(8.4,.2,6.4),l.concrete,t,i+.1,e)),n.add(u(new _(6.2,3.4,4.4),l.habDark,t,i+1.9,e)),n.add(u(new _(6.4,.16,4.6),l.steel,t,i+3.65,e)),n.add(u(new _(1.8,2.4,.22),l.steelDark,t,i+1.5,e+2.3)),n.add(u(new _(1.8,2.4,.22),l.steelDark,t,i+1.5,e-2.3)),n.add(an(t+2.6,e+.2,.1)),n.add(R("DUST LOCK","#1a100c","#f0c089",3.4,.45,t,i+4.35,e+2.4)),n.add(R("HAB EVA","#1a100c","#d6b48a",2.6,.4,t,i+3.85,e+2.4)),n}function xm(){const n=new G;n.name="field3-night";const t=135,e=-22,i=L(t,e);n.add(u(new _(12,.2,7.2),l.concrete,t,i+.1,e));for(let a=0;a<5;a++)n.add(u(new _(1.7,2,4.2),l.battery,t-4+a*2,i+1.2,e));return n.add(R("NIGHT","#111111","#f4e6c8",2.2,.5,t,i+2.7,e+3.6)),n.add(R("FIELD 3","#111111","#d6b48a",2.4,.42,t,i+2.15,e+3.6)),ct(n,[[148,-40],[142,-30],[135,-22]],l.cable,.1),ct(n,[[135,-22],[118,-22],[100,-22]],l.cable,.09),n}function vm(){const n=new G;n.name="field2-night";const t=100,e=-70,i=L(t,e);n.add(u(new _(12,.2,7.2),l.concrete,t,i+.1,e));for(let a=0;a<5;a++)n.add(u(new _(1.7,2,4.2),l.battery,t-4+a*2,i+1.2,e));return n.add(R("NIGHT","#111111","#f4e6c8",2.2,.5,t,i+2.7,e+3.6)),n.add(R("FIELD 2","#111111","#d6b48a",2.4,.42,t,i+2.15,e+3.6)),ct(n,[[124,-70],[112,-70],[100,-70]],l.cable,.1),ct(n,[[100,-70],[100,-46],[100,-22]],l.cable,.09),n}function Mm(){const n=new G;n.name="farm1-night";const t=82,e=-28,i=L(t,e);n.add(u(new _(12,.2,7.2),l.concrete,t,i+.1,e));for(let a=0;a<5;a++)n.add(u(new _(1.7,2,4.2),l.battery,t-4+a*2,i+1.2,e));return n.add(R("NIGHT","#111111","#f4e6c8",2.2,.5,t,i+2.7,e+3.6)),n.add(R("FARM 1","#111111","#d6b48a",2.4,.42,t,i+2.15,e+3.6)),ct(n,[[82,-44],[82,-36],[82,-28]],l.cable,.1),ct(n,[[82,-28],[74,-18],[68,-10]],l.cable,.09),n}function wm(){const n=new G;n.name="co2-capture-1";const t=-68,e=2,i=L(t,e);return n.add(u(new _(11.6,.2,7.4),l.concrete,t,i+.1,e)),n.add(u(new H(.55,.55,6.8,10),l.steel,t-2.4,i+3.6,e)),n.add(u(new H(2.1,.65,2.4,14),l.steelDark,t-2.4,i+7.8,e)),n.add(u(new Wt(1.85,.1,6,16),l.steel,t-2.4,i+9.1,e,Math.PI/2,0,0)),n.add(u(new _(3.2,2.2,2.4),l.habDark,t+2.2,i+1.3,e)),n.add(R("CO2","#1a100c","#f0c089",2.2,.55,t-2.4,i+4.8,e+1.4)),n.add(R("INTAKE 1","#1a100c","#d6b48a",3,.45,t+2.2,i+2.7,e+1.35)),ct(n,[[-68,2],[-68,-8],[-68,-16]],l.pipe,.12),n}function ym(){const n=new G;n.name="field3-dust-fence";const t=122,e=-40,i=L(t,e);for(let a=0;a<8;a++){const s=e-10.5+a*3;n.add(u(new _(.18,3.4,.18),l.steelDark,t,i+1.8,s)),a<7&&n.add(u(new _(.06,2.6,2.7),l.lattice,t,i+1.7,s+1.5))}return n.add(R("DUST","#1a100c","#f0c089",2.4,.45,t-1.4,i+3.5,e)),n.add(R("FIELD 3","#1a100c","#d6b48a",2.6,.4,t-1.4,i+3,e)),n}function Sm(){const n=new G;n.name="field2-dust-fence";const t=98,e=-83,i=L(t,e);for(let a=0;a<8;a++){const s=e-10.5+a*3;n.add(u(new _(.18,3.4,.18),l.steelDark,t,i+1.8,s)),a<7&&n.add(u(new _(.06,2.6,2.7),l.lattice,t,i+1.7,s+1.5))}return n.add(R("DUST","#1a100c","#f0c089",2.4,.45,t-1.4,i+3.5,e)),n.add(R("FIELD 2","#1a100c","#d6b48a",2.6,.4,t-1.4,i+3,e)),n}function bm(){const n=new G;n.name="farm1-dust-fence";const t=70,e=-44,i=L(t,e);for(let a=0;a<8;a++){const s=e-10.5+a*3;n.add(u(new _(.18,3.4,.18),l.steelDark,t,i+1.8,s)),a<7&&n.add(u(new _(.06,2.6,2.7),l.lattice,t,i+1.7,s+1.5))}return n.add(R("DUST","#1a100c","#f0c089",2.4,.45,t-1.4,i+3.5,e)),n.add(R("FARM 1","#1a100c","#d6b48a",2.4,.4,t-1.4,i+3,e)),n}function Em(){const n=new G;n.name="ice-crush-cover";const t=-102,e=-158,i=L(t,e);n.add(u(new _(10.4,.18,8.2),l.concrete,t,i+.09,e));for(const[s,r]of[[-4.2,-3.2],[4.2,-3.2],[-4.2,3.2],[4.2,3.2]])n.add(u(new H(.16,.2,4.2,8),l.steelDark,t+s,i+2.2,e+r));n.add(u(new _(10.8,.14,8.6),l.steel,t,i+4.4,e)),n.add(u(new _(3.2,1.8,2.4),l.steelDark,t,i+1.1,e));const a=u(new me(1.6,0),l.ice,t+2.8,i+.85,e+1.6);return a.scale.set(1.2,.55,1.05),n.add(a),n.add(R("CRUSH","#1a2830","#d6e6ef",2.6,.45,t,i+4.95,e+4.3)),n.add(R("COVER","#1a2830","#d6b48a",2.4,.4,t,i+4.45,e+4.3)),n}function Tm(){const n=new G;n.name="batteries-4";const t=-18,e=-78,i=L(t,e);n.add(u(new _(11.6,.2,6.4),l.concrete,t,i+.1,e));for(let a=0;a<5;a++)n.add(u(new _(1.7,1.95,3.8),l.battery,t-4+a*2,i+1.15,e)),n.add(u(new _(1.55,.08,3.6),l.steel,t-4+a*2,i+2.18,e));return n.add(R("NIGHT","#111111","#f4e6c8",2.4,.5,t,i+2.7,e+3.3)),n.add(R("HAB 4","#111111","#d6b48a",2.2,.42,t,i+2.15,e+3.3)),n}function Am(){const n=new G;n.name="ice-mine-2-berm";const t=u(new Wt(8.4,1.6,8,24,Math.PI*1.15),l.rust,-64,L(-64,-184)-.15,-184,Math.PI/2,.55,0);t.scale.set(1,.44,1),n.add(t);for(const[s,r]of[[-58,-178],[-56,-186],[-62,-192]]){const o=u(new me(2.1,0),l.rust,s,L(s,r)+.85,r);o.scale.set(1.15,.55,1),n.add(o)}const[e,i,a]=Be(-64,-184,2.2);return n.add(R("MINE BERM","#1a2830","#d6e6ef",3.4,.55,e,i+1.1,a)),n.add(R("ICE 2","#1a2830","#d6b48a",2.2,.42,e,i+.5,a)),n}function Rm(){const n=new G;n.name="potable-uv";const t=32,e=-152,i=L(t,e);return n.add(u(new _(9.6,.2,7.2),l.concrete,t,i+.1,e)),n.add(u(new _(4.2,2.6,3.4),l.habDark,t-1.6,i+1.5,e)),n.add(u(new H(1.05,1.05,3.4,14),l.pipe,t+2.6,i+1.9,e)),n.add(u(new _(1.6,1.4,1.2),l.steel,t+2.6,i+3.9,e)),n.add(R("UV","#1a2830","#d6e6ef",1.6,.5,t,i+4.15,e+3.7)),n.add(R("POLISH","#1a2830","#d6b48a",2.6,.42,t,i+3.6,e+3.7)),ct(n,[[18,-152],[24,-152],[32,-152]],l.pipe,.1),n}function Cm(){const n=new G;n.name="isru-radiators-2";const t=-96,e=16,i=L(t,e);n.add(u(new _(16.4,.18,6.2),l.concrete,t,i+.08,e));for(let a=0;a<5;a++){const s=t-6+a*3;n.add(u(new _(.16,3.6,.16),l.steelDark,s,i+1.9,e-1.8)),n.add(u(new _(.16,3.6,.16),l.steelDark,s,i+1.9,e+1.8)),n.add(u(new _(2.4,3.2,.08),l.solar,s,i+2.4,e,-.15,0,0)),n.add(u(new _(2.5,3.3,.04),l.steel,s,i+2.4,e+.06,-.15,0,0))}return n.add(R("REJECT","#1a100c","#f0c089",2.8,.5,t,i+4.55,e+3.2)),n.add(R("TRAIN 2","#1a100c","#d6b48a",2.8,.42,t,i+4,e+3.2)),ct(n,[[-96,-6],[-96,4],[-96,16]],l.pipe,.1),n}function Pm(){const n=new G;n.name="workshop-3";const t=82,e=-74,i=L(t,e);n.add(u(new _(16,.28,12),l.concrete,t,i+.1,e));const a=u(new H(5.4,5.4,14,16,1,!1,0,Math.PI),l.habDark,t-1.2,i+3.1,e);return a.rotation.z=Math.PI/2,n.add(a),n.add(u(new _(.2,3.8,5.8),l.steelDark,t-8.1,i+2,e)),n.add(u(new _(.28,8.4,.28),l.lattice,t+6.4,i+4.3,e-3.6)),n.add(u(new _(7.2,.2,.2),l.lattice,t+3,i+8.5,e-3.6)),n.add(u(new _(1.5,1.1,1.5),l.crate,t+2.2,i+8,e-3.4)),Et(n,89.2,-69.4,.2),Et(n,90.4,-71.6,-.3,1.05),Et(n,74.6,-68.8,.15,.9),n.add(R("WORKSHOP","#1a100c","#f0c089",3.8,.75,t,i+5.4,e+.2)),n.add(R("BAY 3","#1a100c","#d6b48a",2.6,.5,t,i+4.7,e+.2)),n}function Dm(){const n=new G;n.name="ice-melt-2";const t=-78,e=-156,i=L(t,e);n.add(u(new _(9.6,.2,7.2),l.concrete,t,i+.1,e)),n.add(u(new _(3.6,2.8,3.2),l.habDark,t-1.8,i+1.6,e)),n.add(u(new H(1.45,1.45,4.2,14),l.pipe,t+2.2,i+2.3,e)),n.add(u(new H(.55,.85,1.6,10),l.steelDark,t+2.2,i+4.9,e));const a=u(new me(1.8,0),l.ice,t-3.4,i+.9,e+2.1);return a.scale.set(1.15,.55,1),n.add(a),n.add(R("MELT","#1a2830","#d6e6ef",2.4,.5,t,i+4.4,e+3.7)),n.add(R("MINE 2","#1a2830","#d6b48a",2.6,.42,t,i+3.85,e+3.7)),ct(n,[[-78,-172],[-78,-164],[-78,-156]],l.pipe,.11),ct(n,[[-78,-156],[-90,-90],[-96,-26]],l.pipe,.1),n}function Im(){const n=new G;n.name="sabatier-condenser-2";const t=-110,e=8,i=L(t,e);return n.add(u(new _(9.6,.2,7.2),l.concrete,t,i+.1,e)),n.add(u(new _(3.8,2.4,2.8),l.habDark,t-2,i+1.4,e)),n.add(u(new H(1.35,1.35,4.6,14),l.pipe,t+2.4,i+2.5,e)),n.add(u(new Wt(1.65,.1,6,14),l.steel,t+2.4,i+4.1,e,Math.PI/2,0,0)),n.add(u(new H(.7,.7,2.4,12),l.steelDark,t+2.4,i+1.4,e+2.1)),n.add(R("KNOCKOUT","#1a2830","#d6e6ef",3.4,.45,t,i+4.15,e+3.7)),n.add(R("TRAIN 2","#1a2830","#d6b48a",2.8,.4,t,i+3.6,e+3.7)),ct(n,[[-96,-16],[-104,-4],[-110,8]],l.pipe,.11),n}function Lm(){const n=new G;n.name="ch4-chiller-2";const t=-110,e=20,i=L(t,e);return n.add(u(new _(9.6,.2,7.2),l.concrete,t,i+.1,e)),n.add(u(new _(4.2,2.6,3.2),l.habDark,t-1.6,i+1.5,e)),n.add(u(new H(1.25,1.25,5,14),l.tankCh4,t+2.6,i+2.7,e)),n.add(u(new Wt(1.55,.1,6,14),l.steel,t+2.6,i+4.4,e,Math.PI/2,0,0)),n.add(R("CH4","#6a2208","#f4e6c8",2,.45,t,i+4.15,e+3.7)),n.add(R("TRAIN 2","#1a100c","#d6b48a",2.8,.4,t,i+3.6,e+3.7)),ct(n,[[-110,8],[-110,14],[-110,20]],l.tankCh4,.11),n}function Um(){const n=new G;n.name="o2-chiller-2";const t=-110,e=32,i=L(t,e);return n.add(u(new _(9.6,.2,7.2),l.concrete,t,i+.1,e)),n.add(u(new _(4.2,2.6,3.2),l.habDark,t-1.6,i+1.5,e)),n.add(u(new H(1.25,1.25,5,14),l.tankO2,t+2.6,i+2.7,e)),n.add(u(new Wt(1.55,.1,6,14),l.steel,t+2.6,i+4.4,e,Math.PI/2,0,0)),n.add(R("O2","#2a3340","#e8eef4",1.8,.45,t,i+4.15,e+3.7)),n.add(R("TRAIN 2","#1a100c","#d6b48a",2.8,.4,t,i+3.6,e+3.7)),ct(n,[[-110,20],[-110,26],[-110,32]],l.steel,.11),n}function Nm(){const n=new G;n.name="isru-electrolysis-2";const t=-122,e=8,i=L(t,e);n.add(u(new _(11.6,.2,7.4),l.concrete,t,i+.1,e)),n.add(u(new _(3.4,3.6,2.6),l.habDark,t-2.6,i+2,e)),n.add(u(new _(3.4,3.6,2.6),l.steelDark,t+1.2,i+2,e));for(let a=0;a<4;a++)n.add(u(new _(.18,3.1,2.2),l.steel,t-3.8+a*.7,i+2,e));return n.add(u(new H(1.15,1.15,5.2,14),l.steel,t+4.2,i+2.8,e+1.4)),n.add(u(new H(.95,.95,4.4,14),l.tankO2,t+4.2,i+2.4,e-1.6)),n.add(R("ELECTRO","#1a100c","#f0c089",3.2,.5,t,i+4.55,e+3.7)),n.add(R("TRAIN 2","#1a100c","#d6b48a",2.8,.42,t,i+4,e+3.7)),ct(n,[[-110,8],[-116,8],[-122,8]],l.pipe,.11),n}function zm(){const n=new G;n.name="h2-recycle-2";const t=-122,e=20,i=L(t,e);return n.add(u(new _(9.6,.2,7.2),l.concrete,t,i+.1,e)),n.add(u(new H(1.55,1.55,6.4,16),l.steel,t-1.8,i+3.4,e)),n.add(u(new H(1.55,1.55,6.4,16),l.steel,t+1.8,i+3.4,e)),n.add(u(new _(2.2,1.4,1.6),l.habDark,t,i+.9,e+2.2)),n.add(R("H2","#1a100c","#f0c089",1.8,.5,t,i+5.15,e+3.7)),n.add(R("TRAIN 2","#1a100c","#d6b48a",2.8,.42,t,i+4.55,e+3.7)),ct(n,[[-122,8],[-122,14],[-122,20]],l.steel,.11),n}function Fm(){const n=new G;n.name="eclss-2";const t=-8,e=-98,i=L(t,e);return n.add(u(new _(11.2,.22,7.2),l.concrete,t,i+.1,e)),n.add(u(new _(4.8,2.6,3.4),l.habDark,t-2.4,i+1.5,e)),n.add(R("ECLSS","#1a100c","#f0c089",3.2,.6,t-2.4,i+3.05,e+1.85)),n.add(R("SCRUB 2","#1a100c","#d6b48a",3,.45,t-2.4,i+2.45,e+1.85)),n.add(u(new H(.85,.85,3.4,12),l.steelDark,t+1.6,i+1.9,e-1.4)),n.add(u(new H(.85,.85,3.4,12),l.steelDark,t+3.4,i+1.9,e-1.4)),n.add(R("AMINE","#1a100c","#d6b48a",2.2,.4,t+2.5,i+3.8,e-1.4)),n.add(u(new H(.7,.7,2.6,12),l.tankO2,t+1.6,i+1.5,e+1.8)),n.add(u(new H(.7,.7,2.6,12),l.tankO2,t+3.4,i+1.5,e+1.8)),n.add(R("O2","#2a3340","#e8eef4",1.4,.4,t+2.5,i+3.05,e+1.8)),ct(n,[[8,-98],[0,-98],[-8,-98]],l.pipe,.1),n}function Om(){const n=new G;n.name="waste-recycle-2";const t=-22,e=-98,i=L(t,e);return n.add(u(new _(9.6,.2,7.2),l.concrete,t,i+.1,e)),n.add(u(new _(4.4,2.8,3.6),l.habDark,t-1.4,i+1.6,e)),n.add(u(new H(1.15,1.15,3.6,14),l.pipe,t+2.8,i+2,e)),n.add(u(new H(.85,.85,2.8,12),l.steelDark,t+2.8,i+1.6,e+2)),n.add(R("WASTE","#1a100c","#f0c089",2.6,.5,t,i+4.25,e+3.7)),n.add(R("RECOVERY 2","#1a100c","#d6b48a",3.6,.42,t,i+3.7,e+3.7)),ct(n,[[-8,-98],[-14,-98],[-22,-98]],l.pipe,.1),n}function Bm(){const n=new G;n.name="o2-buffer-2";const t=8,e=-88,i=L(t,e);n.add(u(new _(10.2,.2,7.4),l.concrete,t,i+.1,e));for(let a=0;a<4;a++){const s=t-3.3+a*2.2;n.add(u(new H(.85,.85,3.6,12),l.tankO2,s,i+2,e))}return n.add(R("O2","#2a3340","#e8eef4",1.8,.5,t,i+4.15,e+3.7)),n.add(R("CREW 2","#2a3340","#d6b48a",2.6,.42,t,i+3.6,e+3.7)),ct(n,[[-8,-88],[0,-88],[8,-88]],l.tankO2,.1),n}function km(){const n=new G;n.name="isru-process-water-2";const t=-78,e=-36,i=L(t,e);return n.add(u(new _(11.2,.2,7.4),l.concrete,t,i+.1,e)),n.add(u(new H(1.7,1.7,8.4,16),l.pipe,t-2.2,i+2,e,0,0,Math.PI/2)),n.add(u(new H(1.7,1.7,8.4,16),l.pipe,t+2,i+2,e,0,0,Math.PI/2)),n.add(u(new _(2.4,1.6,1.8),l.habDark,t,i+1,e+2.4)),n.add(R("PROCESS","#1a2830","#d6e6ef",3.2,.5,t,i+4.55,e+3.8)),n.add(R("TRAIN 2","#1a2830","#d6b48a",2.8,.42,t,i+4,e+3.8)),ct(n,[[-78,-156],[-78,-90],[-78,-36]],l.pipe,.11),ct(n,[[-78,-36],[-88,-26],[-96,-16]],l.pipe,.1),n}function Hm(){const n=new G;n.name="parts-rack";const t=96,e=-90,i=L(t,e);n.add(u(new _(9.6,.2,7.2),l.concrete,t,i+.1,e)),n.add(u(new _(8.4,2.8,.22),l.steelDark,t,i+1.6,e-2.4));for(let a=-3;a<=3;a++)n.add(u(new _(.16,2.6,1.8),l.steel,t+a*1.1,i+1.5,e-1.4));return Et(n,92.2,-87.6,.15,.85),Et(n,99.4,-88.2,-.2,1),n.add(R("PARTS","#1a100c","#f0c089",2.6,.5,t,i+3.35,e+3.5)),n.add(R("RACK","#1a100c","#d6b48a",2.2,.42,t,i+2.8,e+3.5)),n}function Gm(){const n=new G;n.name="hab-power-trench";const t=-5,e=-78,i=L(t,e);return n.add(u(new _(7.6,.18,5.4),l.concrete,t,i+.08,e)),n.add(u(new _(3.2,1.8,2.4),l.habDark,t,i+1.1,e)),n.add(u(new _(1.4,.9,1.1),l.steelDark,t+2.4,i+.65,e+1.2)),n.add(R("HAB","#111111","#f4e6c8",1.8,.45,t,i+2.45,e+2.8)),n.add(R("TRENCH","#111111","#d6b48a",2.4,.38,t,i+1.95,e+2.8)),ct(n,[[8,-78],[-5,-78],[-18,-78]],l.cable,.12),n}function Vm(){const n=new G;n.name="comms-inverter";const t=16,e=-148,i=L(t,e);n.add(u(new _(9.6,.2,7.2),l.concrete,t,i+.1,e)),n.add(u(new _(3.6,2.4,2.8),l.habDark,t-2,i+1.4,e)),n.add(u(new _(3.2,2,2.4),l.steelDark,t+2.2,i+1.2,e));for(let a=0;a<3;a++)n.add(u(new _(.7,1.5,1.8),l.battery,t+1.2+a*.85,i+1,e));return n.add(R("COMMS","#111111","#f4e6c8",2.6,.5,t,i+3.55,e+3.7)),n.add(R("INVERTER","#111111","#d6b48a",3.2,.42,t,i+3,e+3.7)),ct(n,[[4,-148],[10,-148],[16,-148]],l.cable,.1),ct(n,[[-8,-162],[4,-154],[16,-148]],l.cable,.09),n}function Wm(){const n=new G;n.name="ice-weigh";const t=-90,e=-136,i=L(t,e);return n.add(u(new _(9.6,.2,7.2),l.concrete,t,i+.1,e)),n.add(u(new _(6.4,.28,3.6),l.steel,t,i+.28,e)),n.add(u(new _(2.2,2.4,1.8),l.habDark,t+3.2,i+1.4,e+2)),n.add(u(new _(.18,3.2,.18),l.steelDark,t-3.6,i+1.8,e-2.4)),n.add(u(new _(.18,3.2,.18),l.steelDark,t+3.6,i+1.8,e-2.4)),n.add(u(new _(7.4,.12,.12),l.steel,t,i+3.45,e-2.4)),n.add(R("WEIGH","#1a2830","#d6e6ef",2.6,.5,t,i+3.15,e+3.7)),n.add(R("ICE HAUL","#1a2830","#d6b48a",3,.42,t,i+2.6,e+3.7)),n}function Xm(){const n=new G;n.name="hab-eva-locker";const t=16,e=-74,i=L(t,e);return n.add(u(new _(7.2,.16,5.4),l.concrete,t,i+.08,e)),n.add(u(new _(5.8,.16,2.4),l.steelDark,t,i+.18,e)),n.add(u(new _(.16,2.8,.16),l.steel,t-2.4,i+1.6,e-.7)),n.add(u(new _(.16,2.8,.16),l.steel,t+2.4,i+1.6,e-.7)),n.add(u(new _(5,.12,.12),l.steel,t,i+3,e-.7)),n.add(an(t-1.5,e,.2)),n.add(an(t,e+.15,-.1)),n.add(an(t+1.5,e,.15)),n.add(R("SUITS","#1a100c","#f0c089",2.4,.45,t,i+3.45,e+2.4)),n.add(R("HAB EVA","#1a100c","#d6b48a",2.8,.4,t,i+2.95,e+2.4)),n}function qm(){const n=new G;n.name="comms-berm";const t=u(new Wt(8.4,1.6,8,24,Math.PI*1.15),l.rust,-48,L(-48,-138)-.15,-138,Math.PI/2,.7,0);t.scale.set(1,.44,1),n.add(t);for(const[s,r]of[[-42,-132],[-40,-140],[-46,-146]]){const o=u(new me(2.1,0),l.rust,s,L(s,r)+.85,r);o.scale.set(1.15,.55,1),n.add(o)}const[e,i,a]=Be(-48,-138,2.2);return n.add(R("DUST BERM","#1a2830","#d6e6ef",3.4,.55,e,i+1.1,a)),n.add(R("COMMS","#1a2830","#d6b48a",2.4,.42,e,i+.5,a)),n}function Ym(){const n=new G;n.name="grow-water";const t=52,e=-126,i=L(t,e);return n.add(u(new _(11.2,.2,7.4),l.concrete,t,i+.1,e)),n.add(u(new H(1.7,1.7,8.4,16),l.pipe,t-2.2,i+2,e,0,0,Math.PI/2)),n.add(u(new H(1.7,1.7,8.4,16),l.pipe,t+2,i+2,e,0,0,Math.PI/2)),n.add(u(new _(2.4,1.6,1.8),l.habDark,t,i+1,e+2.4)),n.add(R("GROW","#1a2830","#d6e6ef",2.4,.5,t,i+4.55,e+3.8)),n.add(R("H2O","#1a2830","#d6b48a",2,.42,t,i+4,e+3.8)),ct(n,[[52,-112],[52,-118],[52,-126]],l.pipe,.11),ct(n,[[38,-126],[44,-126],[52,-126]],l.pipe,.1),n}function Km(){const n=new G;n.name="grow-nutrient";const t=70,e=-126,i=L(t,e);return n.add(u(new _(9.6,.2,7.2),l.concrete,t,i+.1,e)),n.add(u(new _(4.4,2.8,3.6),l.habDark,t-1.4,i+1.6,e)),n.add(u(new H(1.15,1.15,3.6,14),l.pipe,t+2.8,i+2,e)),n.add(u(new H(.85,.85,2.8,12),l.steelDark,t+2.8,i+1.6,e+2)),n.add(R("NUTRIENT","#1a100c","#f0c089",3.4,.5,t,i+4.25,e+3.7)),n.add(R("GROW","#1a100c","#d6b48a",2.2,.42,t,i+3.7,e+3.7)),ct(n,[[52,-126],[60,-126],[70,-126]],l.pipe,.1),ct(n,[[70,-112],[70,-118],[70,-126]],l.pipe,.09),n}function Jm(){const n=new G;n.name="hab-street-lights";for(const[a,s]of[[0,-78],[0,-98],[0,-118]]){const r=L(a,s);n.add(u(new H(.12,.16,3.6,8),l.steelDark,a,r+1.9,s)),n.add(u(new _(.42,.42,.42),l.glowPad,a,r+3.85,s))}const t=0,e=-68,i=L(t,e);return n.add(u(new _(5.2,.16,4),l.concrete,t,i+.08,e)),n.add(u(new _(2.4,1.5,1.6),l.habDark,t,i+.95,e)),n.add(R("HAB","#1a100c","#f0c089",1.8,.42,t,i+2.25,e+2.1)),n.add(R("LIGHTS","#1a100c","#d6b48a",2.2,.36,t,i+1.78,e+2.1)),n}function Zm(){const n=new G;n.name="workshop-lights";for(const[a,s]of[[58,-80],[74,-80],[90,-80]]){const r=L(a,s);n.add(u(new H(.12,.16,3.6,8),l.steelDark,a,r+1.9,s)),n.add(u(new _(.42,.42,.42),l.glowPad,a,r+3.85,s))}const t=48,e=-70,i=L(t,e);return n.add(u(new _(5.2,.16,4),l.concrete,t,i+.08,e)),n.add(u(new _(2.4,1.5,1.6),l.habDark,t,i+.95,e)),n.add(R("SHOP","#1a100c","#f0c089",2,.42,t,i+2.25,e+2.1)),n.add(R("LIGHTS","#1a100c","#d6b48a",2.2,.36,t,i+1.78,e+2.1)),n}function $m(){const n=new G;n.name="ice-mine-lights";for(const[a,s]of[[-58,-148],[-78,-148],[-90,-148]]){const r=L(a,s);n.add(u(new H(.12,.16,3.6,8),l.steelDark,a,r+1.9,s)),n.add(u(new _(.42,.42,.42),l.glowPad,a,r+3.85,s))}const t=-46,e=-148,i=L(t,e);return n.add(u(new _(5.2,.16,4),l.concrete,t,i+.08,e)),n.add(u(new _(2.4,1.5,1.6),l.habDark,t,i+.95,e)),n.add(R("ICE","#1a100c","#f0c089",1.8,.42,t,i+2.25,e+2.1)),n.add(R("LIGHTS","#1a100c","#d6b48a",2.2,.36,t,i+1.78,e+2.1)),n}function jm(){const n=new G;n.name="isru-lights";for(const[a,s]of[[-44,12],[-62,16],[-80,16]]){const r=L(a,s);n.add(u(new H(.12,.16,3.6,8),l.steelDark,a,r+1.9,s)),n.add(u(new _(.42,.42,.42),l.glowPad,a,r+3.85,s))}const t=-38,e=16,i=L(t,e);return n.add(u(new _(5.2,.16,4),l.concrete,t,i+.08,e)),n.add(u(new _(2.4,1.5,1.6),l.habDark,t,i+.95,e)),n.add(R("ISRU","#1a100c","#f0c089",2,.42,t,i+2.25,e+2.1)),n.add(R("LIGHTS","#1a100c","#d6b48a",2.2,.36,t,i+1.78,e+2.1)),n}function Qm(){const n=new G;n.name="grow-lights";for(const[a,s]of[[22,-104],[38,-118],[52,-104]]){const r=L(a,s);n.add(u(new H(.12,.16,3.6,8),l.steelDark,a,r+1.9,s)),n.add(u(new _(.42,.42,.42),l.glowPad,a,r+3.85,s))}const t=38,e=-104,i=L(t,e);return n.add(u(new _(5.2,.16,4),l.concrete,t,i+.08,e)),n.add(u(new _(2.4,1.5,1.6),l.habDark,t,i+.95,e)),n.add(R("GROW","#1a100c","#f0c089",2,.42,t,i+2.25,e+2.1)),n.add(R("LIGHTS","#1a100c","#d6b48a",2.2,.36,t,i+1.78,e+2.1)),n}function t2(){const n=new G;n.name="solar4-lights";for(const[a,s]of[[158,-48],[148,-48],[172,-62]]){const r=L(a,s);n.add(u(new H(.12,.16,3.6,8),l.steelDark,a,r+1.9,s)),n.add(u(new _(.42,.42,.42),l.glowPad,a,r+3.85,s))}const t=172,e=-48,i=L(t,e);return n.add(u(new _(5.2,.16,4),l.concrete,t,i+.08,e)),n.add(u(new _(2.4,1.5,1.6),l.habDark,t,i+.95,e)),n.add(R("FIELD 4","#1a100c","#f0c089",2.6,.42,t,i+2.25,e+2.1)),n.add(R("LIGHTS","#1a100c","#d6b48a",2.2,.36,t,i+1.78,e+2.1)),n}function e2(){const n=new G;n.name="pad-floods";for(const[a,s]of[[-8,48],[-8,32],[-8,16]]){const r=L(a,s);n.add(u(new H(.12,.16,3.6,8),l.steelDark,a,r+1.9,s)),n.add(u(new _(.42,.42,.42),l.glowPad,a,r+3.85,s))}const t=-16,e=36,i=L(t,e);return n.add(u(new _(5.2,.16,4),l.concrete,t,i+.08,e)),n.add(u(new _(2.4,1.5,1.6),l.habDark,t,i+.95,e)),n.add(R("PAD","#1a100c","#f0c089",1.8,.42,t,i+2.25,e+2.1)),n.add(R("FLOOD","#1a100c","#d6b48a",2.2,.36,t,i+1.78,e+2.1)),n}function n2(){const n=new G;n.name="comms-lights";for(const[a,s]of[[-8,-138],[4,-148],[16,-138]]){const r=L(a,s);n.add(u(new H(.12,.16,3.6,8),l.steelDark,a,r+1.9,s)),n.add(u(new _(.42,.42,.42),l.glowPad,a,r+3.85,s))}const t=4,e=-138,i=L(t,e);return n.add(u(new _(5.2,.16,4),l.concrete,t,i+.08,e)),n.add(u(new _(2.4,1.5,1.6),l.habDark,t,i+.95,e)),n.add(R("COMMS","#1a100c","#f0c089",2.4,.42,t,i+2.25,e+2.1)),n.add(R("LIGHTS","#1a100c","#d6b48a",2.2,.36,t,i+1.78,e+2.1)),n}function i2(){const n=new G;n.name="methalox-lights";for(const[a,s]of[[62,16],[68,-6],[58,16]]){const r=L(a,s);n.add(u(new H(.12,.16,3.6,8),l.steelDark,a,r+1.9,s)),n.add(u(new _(.42,.42,.42),l.glowPad,a,r+3.85,s))}const t=68,e=6,i=L(t,e);return n.add(u(new _(5.2,.16,4),l.concrete,t,i+.08,e)),n.add(u(new _(2.4,1.5,1.6),l.habDark,t,i+.95,e)),n.add(R("MX","#1a100c","#f0c089",1.6,.42,t,i+2.25,e+2.1)),n.add(R("LIGHTS","#1a100c","#d6b48a",2.2,.36,t,i+1.78,e+2.1)),n}function a2(){const n=new G;n.name="sinter-kiln";const t=66,e=-104,i=L(t,e);return n.add(u(new _(11.2,.2,7.4),l.concrete,t,i+.1,e)),n.add(u(new H(1.55,1.55,8.6,16),l.steelDark,t,i+2.15,e,0,0,Math.PI/2)),n.add(u(new H(.42,.55,3.2,10),l.steel,t+2.4,i+4.4,e)),n.add(u(new _(2.2,1.8,2),l.habDark,t-4.4,i+1.1,e+1.8)),n.add(u(new _(1.6,1.4,1.6),l.rust,t+4.2,i+.9,e-1.6)),n.add(R("SINTER","#1a100c","#f0c089",2.8,.5,t,i+4.85,e+3.8)),n.add(R("KILN","#1a100c","#d6b48a",2,.42,t,i+4.3,e+3.8)),n}function s2(){const n=new G;n.name="sinter-bricks";const t=80,e=-104,i=L(t,e);n.add(u(new _(7.6,.16,5.4),l.concrete,t,i+.08,e));for(let a=0;a<3;a++)for(let s=0;s<4;s++){const r=t-2.4+s*1.55,o=e-1.2+a*1.2;n.add(u(new _(1.35,.42,.95),l.rust,r,i+.38,o)),n.add(u(new _(1.35,.42,.95),l.habDark,r,i+.82,o))}return n.add(R("SINTER","#1a100c","#f0c089",2.6,.42,t,i+1.85,e+2.8)),n.add(R("BRICK","#1a100c","#d6b48a",2.2,.36,t,i+1.4,e+2.8)),n}function r2(){const n=new G;n.name="sinter-roller";const t=18,e=136,i=L(t,e);return n.add(u(new _(8.8,.16,5.2),l.concrete,t,i+.08,e)),n.add(u(new _(3.6,1.6,2.2),l.habDark,t-.6,i+1.15,e)),n.add(u(new H(1.15,1.15,2.6,14),l.steelDark,t+2.6,i+1.2,e,0,0,Math.PI/2)),n.add(u(new H(.55,.55,2.2,10),l.steel,t-2.6,i+.7,e,0,0,Math.PI/2)),n.add(R("SINTER","#1a100c","#f0c089",2.6,.42,t,i+2.55,e+2.7)),n.add(R("ROLLER","#1a100c","#d6b48a",2.4,.36,t,i+2.1,e+2.7)),n}function o2(){const n=new G;n.name="hab-blower";const t=22,e=-98,i=L(t,e);return n.add(u(new _(7.2,.18,5.2),l.concrete,t,i+.09,e)),n.add(u(new _(2.6,1.7,2),l.habDark,t-1.4,i+1.05,e)),n.add(u(new H(1.05,1.05,2.4,14),l.steelDark,t+1.8,i+1.35,e,0,0,Math.PI/2)),n.add(u(new H(.28,.28,2.8,8),l.pipe,t+1.8,i+2.55,e)),n.add(R("SPARE","#1a100c","#f0c089",2.2,.42,t,i+2.7,e+2.6)),n.add(R("BLOWER","#1a100c","#d6b48a",2.6,.36,t,i+2.25,e+2.6)),n}function c2(){const n=new G;n.name="solar4-inverter";const t=172,e=-62,i=L(t,e);n.add(u(new _(9.6,.2,7.2),l.concrete,t,i+.1,e)),n.add(u(new _(3.6,2.4,2.8),l.habDark,t-2,i+1.4,e)),n.add(u(new _(3.2,2,2.4),l.steelDark,t+2.2,i+1.2,e));for(let a=0;a<3;a++)n.add(u(new _(.7,1.5,1.8),l.battery,t+1.2+a*.85,i+1,e));return n.add(R("FIELD 4","#111111","#f4e6c8",2.8,.5,t,i+3.55,e+3.7)),n.add(R("INVERTER","#111111","#d6b48a",3.2,.42,t,i+3,e+3.7)),n}function l2(){const n=new G;n.name="ice-drill-2";const t=-92,e=-184,i=L(t,e);return n.add(u(new _(9.6,.2,7.2),l.concrete,t,i+.1,e)),n.add(u(new _(3.4,1.8,2.4),l.habDark,t-2.2,i+1.1,e)),n.add(u(new H(.28,.42,6.4,10),l.steel,t+2.2,i+3.4,e)),n.add(u(new Hi(.55,1.4,8),l.soot,t+2.2,i+.85,e)),n.add(u(new _(1.6,1.2,1.4),l.steelDark,t+2.2,i+6.5,e)),n.add(R("SPARE","#1a2830","#d6e6ef",2.2,.42,t,i+2.55,e+3.7)),n.add(R("DRILL","#1a2830","#d6b48a",2.2,.36,t,i+2.1,e+3.7)),n}const ic=new S(.55,.62,.38);function h2(){const n=new Hp;A0(n),n.add(S0(ic)),n.add(b0(ic)),n.add(v0()),n.add(M0()),n.add(E0());const t=T0();n.add(t);const e=C0();return n.add(e.group),{scene:n,dust:t,settlement:e,getHeight:L}}function u2(n){const t=new kp({canvas:n,antialias:!0,powerPreference:"high-performance"});return t.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),t.setSize(window.innerWidth,window.innerHeight),t.shadowMap.enabled=!0,t.shadowMap.type=sc,t.outputColorSpace=Oe,t.toneMapping=oc,t.toneMappingExposure=1.05,t}function f2(n,t){window.addEventListener("resize",()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)})}export{ki as C,tn as P,S as V,u2 as a,f2 as b,h2 as c,d2 as d};
