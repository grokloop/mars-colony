(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ar="170",Hc=0,qr=1,Gc=2,sc=1,ac=2,_n=3,Fn=0,Ie=1,rn=2,Nn=0,yi=1,Yr=2,Kr=3,Jr=4,Vc=5,Yn=100,Wc=101,Xc=102,qc=103,Yc=104,Kc=200,Jc=201,Zc=202,$c=203,Oa=204,Ba=205,jc=206,Qc=207,tl=208,el=209,nl=210,il=211,sl=212,al=213,rl=214,ka=0,Ha=1,Ga=2,Ei=3,Va=4,Wa=5,Xa=6,qa=7,rc=0,ol=1,cl=2,zn=0,ll=1,dl=2,hl=3,oc=4,ul=5,fl=6,pl=7,cc=300,Ti=301,Ai=302,Ya=303,Ka=304,js=306,Ja=1e3,Jn=1001,Za=1002,Ge=1003,ml=1004,ps=1005,on=1006,sa=1007,Zn=1008,wn=1009,lc=1010,dc=1011,ts=1012,Rr=1013,$n=1014,cn=1015,ns=1016,Cr=1017,Pr=1018,Ri=1020,hc=35902,uc=1021,fc=1022,tn=1023,pc=1024,mc=1025,Si=1026,Ci=1027,Dr=1028,Ir=1029,gc=1030,Lr=1031,Ur=1033,Hs=33776,Gs=33777,Vs=33778,Ws=33779,$a=35840,ja=35841,Qa=35842,tr=35843,er=36196,nr=37492,ir=37496,sr=37808,ar=37809,rr=37810,or=37811,cr=37812,lr=37813,dr=37814,hr=37815,ur=37816,fr=37817,pr=37818,mr=37819,gr=37820,_r=37821,Xs=36492,xr=36494,vr=36495,_c=36283,Mr=36284,wr=36285,yr=36286,gl=3200,_l=3201,xc=0,xl=1,Un="",ze="srgb",Di="srgb-linear",Qs="linear",re="srgb",si=7680,Zr=519,vl=512,Ml=513,wl=514,vc=515,yl=516,Sl=517,bl=518,El=519,$r=35044,jr="300 es",vn=2e3,Ks=2001;class Ii{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],aa=Math.PI/180,Sr=180/Math.PI;function is(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]).toLowerCase()}function Re(n,t,e){return Math.max(t,Math.min(e,n))}function Tl(n,t){return(n%t+t)%t}function ra(n,t,e){return(1-e)*n+e*t}function Hi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ne(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ct{constructor(t=0,e=0){Ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,i,s,a,r,o,l,c){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,a,r,o,l,c)}set(t,e,i,s,a,r,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=a,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],p=i[7],f=i[2],m=i[5],v=i[8],M=s[0],_=s[3],g=s[6],R=s[1],A=s[4],y=s[7],B=s[2],D=s[5],I=s[8];return a[0]=r*M+o*R+l*B,a[3]=r*_+o*A+l*D,a[6]=r*g+o*y+l*I,a[1]=c*M+h*R+p*B,a[4]=c*_+h*A+p*D,a[7]=c*g+h*y+p*I,a[2]=f*M+m*R+v*B,a[5]=f*_+m*A+v*D,a[8]=f*g+m*y+v*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*o*c-i*a*h+i*o*l+s*a*c-s*r*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=h*r-o*c,f=o*l-h*a,m=c*a-r*l,v=e*p+i*f+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return t[0]=p*M,t[1]=(s*c-h*i)*M,t[2]=(o*i-s*r)*M,t[3]=f*M,t[4]=(h*e-s*l)*M,t[5]=(s*a-o*e)*M,t[6]=m*M,t[7]=(i*l-c*e)*M,t[8]=(r*e-i*a)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(oa.makeScale(t,e)),this}rotate(t){return this.premultiply(oa.makeRotation(-t)),this}translate(t,e){return this.premultiply(oa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const oa=new Ht;function Mc(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Js(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Al(){const n=Js("canvas");return n.style.display="block",n}const Qr={};function Zi(n){n in Qr||(Qr[n]=!0,console.warn(n))}function Rl(n,t,e){return new Promise(function(i,s){function a(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:i()}}setTimeout(a,e)})}function Cl(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Pl(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const te={enabled:!0,workingColorSpace:Di,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===re&&(n.r=Mn(n.r),n.g=Mn(n.g),n.b=Mn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===re&&(n.r=bi(n.r),n.g=bi(n.g),n.b=bi(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Un?Qs:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Mn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function bi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const to=[.64,.33,.3,.6,.15,.06],eo=[.2126,.7152,.0722],no=[.3127,.329],io=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),so=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[Di]:{primaries:to,whitePoint:no,transfer:Qs,toXYZ:io,fromXYZ:so,luminanceCoefficients:eo,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:to,whitePoint:no,transfer:re,toXYZ:io,fromXYZ:so,luminanceCoefficients:eo,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}});let ai;class Dl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ai===void 0&&(ai=Js("canvas")),ai.width=t.width,ai.height=t.height;const i=ai.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ai}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Js("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Mn(a[r]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Mn(e[i]/255)*255):e[i]=Mn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Il=0;class wc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Il++}),this.uuid=is(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(ca(s[r].image)):a.push(ca(s[r]))}else a=ca(s);i.url=a}return e||(t.images[this.uuid]=i),i}}function ca(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Dl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ll=0;class Ce extends Ii{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,i=Jn,s=Jn,a=on,r=Zn,o=tn,l=wn,c=Ce.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ll++}),this.uuid=is(),this.name="",this.source=new wc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ja:t.x=t.x-Math.floor(t.x);break;case Jn:t.x=t.x<0?0:1;break;case Za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ja:t.y=t.y-Math.floor(t.y);break;case Jn:t.y=t.y<0?0:1;break;case Za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=cc;Ce.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,i=0,s=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*e+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*e+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*e+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,a;const l=t.elements,c=l[0],h=l[4],p=l[8],f=l[1],m=l[5],v=l[9],M=l[2],_=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(p-M)<.01&&Math.abs(v-_)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+M)<.1&&Math.abs(v+_)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(c+1)/2,y=(m+1)/2,B=(g+1)/2,D=(h+f)/4,I=(p+M)/4,U=(v+_)/4;return A>y&&A>B?A<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(A),s=D/i,a=I/i):y>B?y<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(y),i=D/s,a=U/s):B<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(B),i=I/a,s=U/a),this.set(i,s,a,e),this}let R=Math.sqrt((_-v)*(_-v)+(p-M)*(p-M)+(f-h)*(f-h));return Math.abs(R)<.001&&(R=1),this.x=(_-v)/R,this.y=(p-M)/R,this.z=(f-h)/R,this.w=Math.acos((c+m+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ul extends Ii{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new Ce(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new wc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends Ul{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class yc extends Ce{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nl extends Ce{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ss{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,a,r,o){let l=i[s+0],c=i[s+1],h=i[s+2],p=i[s+3];const f=a[r+0],m=a[r+1],v=a[r+2],M=a[r+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=p;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=v,t[e+3]=M;return}if(p!==M||l!==f||c!==m||h!==v){let _=1-o;const g=l*f+c*m+h*v+p*M,R=g>=0?1:-1,A=1-g*g;if(A>Number.EPSILON){const B=Math.sqrt(A),D=Math.atan2(B,g*R);_=Math.sin(_*D)/B,o=Math.sin(o*D)/B}const y=o*R;if(l=l*_+f*y,c=c*_+m*y,h=h*_+v*y,p=p*_+M*y,_===1-o){const B=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=B,c*=B,h*=B,p*=B}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=p}static multiplyQuaternionsFlat(t,e,i,s,a,r){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],p=a[r],f=a[r+1],m=a[r+2],v=a[r+3];return t[e]=o*v+h*p+l*m-c*f,t[e+1]=l*v+h*f+c*p-o*m,t[e+2]=c*v+h*m+o*f-l*p,t[e+3]=h*v-o*p-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),p=o(a/2),f=l(i/2),m=l(s/2),v=l(a/2);switch(r){case"XYZ":this._x=f*h*p+c*m*v,this._y=c*m*p-f*h*v,this._z=c*h*v+f*m*p,this._w=c*h*p-f*m*v;break;case"YXZ":this._x=f*h*p+c*m*v,this._y=c*m*p-f*h*v,this._z=c*h*v-f*m*p,this._w=c*h*p+f*m*v;break;case"ZXY":this._x=f*h*p-c*m*v,this._y=c*m*p+f*h*v,this._z=c*h*v+f*m*p,this._w=c*h*p-f*m*v;break;case"ZYX":this._x=f*h*p-c*m*v,this._y=c*m*p+f*h*v,this._z=c*h*v-f*m*p,this._w=c*h*p+f*m*v;break;case"YZX":this._x=f*h*p+c*m*v,this._y=c*m*p+f*h*v,this._z=c*h*v-f*m*p,this._w=c*h*p-f*m*v;break;case"XZY":this._x=f*h*p-c*m*v,this._y=c*m*p-f*h*v,this._z=c*h*v+f*m*p,this._w=c*h*p+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],a=e[8],r=e[1],o=e[5],l=e[9],c=e[2],h=e[6],p=e[10],f=i+o+p;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(a-c)*m,this._z=(r-s)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(h-l)/m,this._x=.25*m,this._y=(s+r)/m,this._z=(a+c)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(a-c)/m,this._x=(s+r)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(r-s)/m,this._x=(a+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,a=t._z,r=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+r*o+s*c-a*l,this._y=s*h+r*l+a*o-i*c,this._z=a*h+r*c+i*l-s*o,this._w=r*h-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,a=this._z,r=this._w;let o=r*t._w+i*t._x+s*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=s,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*r+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*a+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),p=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=r*p+this._w*f,this._x=i*p+this._x*f,this._y=s*p+this._y*f,this._z=a*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(t=0,e=0,i=0){E.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ao.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ao.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*s,this.y=a[1]*e+a[4]*i+a[7]*s,this.z=a[2]*e+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*e+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*e+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*e+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),h=2*(o*e-a*s),p=2*(a*i-r*e);return this.x=e+l*c+r*p-o*h,this.y=i+l*h+o*c-a*p,this.z=s+l*p+a*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s,this.y=a[1]*e+a[5]*i+a[9]*s,this.z=a[2]*e+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,a=t.z,r=e.x,o=e.y,l=e.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return la.copy(this).projectOnVector(t),this.sub(la)}reflect(t){return this.sub(la.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const la=new E,ao=new ss;class Qn{constructor(t=new E(1/0,1/0,1/0),e=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Ke):Ke.fromBufferAttribute(a,r),Ke.applyMatrix4(t.matrixWorld),this.expandByPoint(Ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ms.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ms.copy(i.boundingBox)),ms.applyMatrix4(t.matrixWorld),this.union(ms)}const s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ke),Ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gi),gs.subVectors(this.max,Gi),ri.subVectors(t.a,Gi),oi.subVectors(t.b,Gi),ci.subVectors(t.c,Gi),Tn.subVectors(oi,ri),An.subVectors(ci,oi),On.subVectors(ri,ci);let e=[0,-Tn.z,Tn.y,0,-An.z,An.y,0,-On.z,On.y,Tn.z,0,-Tn.x,An.z,0,-An.x,On.z,0,-On.x,-Tn.y,Tn.x,0,-An.y,An.x,0,-On.y,On.x,0];return!da(e,ri,oi,ci,gs)||(e=[1,0,0,0,1,0,0,0,1],!da(e,ri,oi,ci,gs))?!1:(_s.crossVectors(Tn,An),e=[_s.x,_s.y,_s.z],da(e,ri,oi,ci,gs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const un=[new E,new E,new E,new E,new E,new E,new E,new E],Ke=new E,ms=new Qn,ri=new E,oi=new E,ci=new E,Tn=new E,An=new E,On=new E,Gi=new E,gs=new E,_s=new E,Bn=new E;function da(n,t,e,i,s){for(let a=0,r=n.length-3;a<=r;a+=3){Bn.fromArray(n,a);const o=s.x*Math.abs(Bn.x)+s.y*Math.abs(Bn.y)+s.z*Math.abs(Bn.z),l=t.dot(Bn),c=e.dot(Bn),h=i.dot(Bn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const zl=new Qn,Vi=new E,ha=new E;class Li{constructor(t=new E,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):zl.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vi.subVectors(t,this.center);const e=Vi.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Vi,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ha.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vi.copy(t.center).add(ha)),this.expandByPoint(Vi.copy(t.center).sub(ha))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fn=new E,ua=new E,xs=new E,Rn=new E,fa=new E,vs=new E,pa=new E;class Sc{constructor(t=new E,e=new E(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fn.copy(this.origin).addScaledVector(this.direction,e),fn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ua.copy(t).add(e).multiplyScalar(.5),xs.copy(e).sub(t).normalize(),Rn.copy(this.origin).sub(ua);const a=t.distanceTo(e)*.5,r=-this.direction.dot(xs),o=Rn.dot(this.direction),l=-Rn.dot(xs),c=Rn.lengthSq(),h=Math.abs(1-r*r);let p,f,m,v;if(h>0)if(p=r*l-o,f=r*o-l,v=a*h,p>=0)if(f>=-v)if(f<=v){const M=1/h;p*=M,f*=M,m=p*(p+r*f+2*o)+f*(r*p+f+2*l)+c}else f=a,p=Math.max(0,-(r*f+o)),m=-p*p+f*(f+2*l)+c;else f=-a,p=Math.max(0,-(r*f+o)),m=-p*p+f*(f+2*l)+c;else f<=-v?(p=Math.max(0,-(-r*a+o)),f=p>0?-a:Math.min(Math.max(-a,-l),a),m=-p*p+f*(f+2*l)+c):f<=v?(p=0,f=Math.min(Math.max(-a,-l),a),m=f*(f+2*l)+c):(p=Math.max(0,-(r*a+o)),f=p>0?a:Math.min(Math.max(-a,-l),a),m=-p*p+f*(f+2*l)+c);else f=r>0?-a:a,p=Math.max(0,-(r*f+o)),m=-p*p+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(ua).addScaledVector(xs,f),m}intersectSphere(t,e){fn.subVectors(t.center,this.origin);const i=fn.dot(this.direction),s=fn.dot(fn)-i*i,a=t.radius*t.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,a,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(a=(t.min.y-f.y)*h,r=(t.max.y-f.y)*h):(a=(t.max.y-f.y)*h,r=(t.min.y-f.y)*h),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),p>=0?(o=(t.min.z-f.z)*p,l=(t.max.z-f.z)*p):(o=(t.max.z-f.z)*p,l=(t.min.z-f.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,fn)!==null}intersectTriangle(t,e,i,s,a){fa.subVectors(e,t),vs.subVectors(i,t),pa.crossVectors(fa,vs);let r=this.direction.dot(pa),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Rn.subVectors(this.origin,t);const l=o*this.direction.dot(vs.crossVectors(Rn,vs));if(l<0)return null;const c=o*this.direction.dot(fa.cross(Rn));if(c<0||l+c>r)return null;const h=-o*Rn.dot(pa);return h<0?null:this.at(h/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de{constructor(t,e,i,s,a,r,o,l,c,h,p,f,m,v,M,_){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,a,r,o,l,c,h,p,f,m,v,M,_)}set(t,e,i,s,a,r,o,l,c,h,p,f,m,v,M,_){const g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=s,g[1]=a,g[5]=r,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=p,g[14]=f,g[3]=m,g[7]=v,g[11]=M,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/li.setFromMatrixColumn(t,0).length(),a=1/li.setFromMatrixColumn(t,1).length(),r=1/li.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),p=Math.sin(a);if(t.order==="XYZ"){const f=r*h,m=r*p,v=o*h,M=o*p;e[0]=l*h,e[4]=-l*p,e[8]=c,e[1]=m+v*c,e[5]=f-M*c,e[9]=-o*l,e[2]=M-f*c,e[6]=v+m*c,e[10]=r*l}else if(t.order==="YXZ"){const f=l*h,m=l*p,v=c*h,M=c*p;e[0]=f+M*o,e[4]=v*o-m,e[8]=r*c,e[1]=r*p,e[5]=r*h,e[9]=-o,e[2]=m*o-v,e[6]=M+f*o,e[10]=r*l}else if(t.order==="ZXY"){const f=l*h,m=l*p,v=c*h,M=c*p;e[0]=f-M*o,e[4]=-r*p,e[8]=v+m*o,e[1]=m+v*o,e[5]=r*h,e[9]=M-f*o,e[2]=-r*c,e[6]=o,e[10]=r*l}else if(t.order==="ZYX"){const f=r*h,m=r*p,v=o*h,M=o*p;e[0]=l*h,e[4]=v*c-m,e[8]=f*c+M,e[1]=l*p,e[5]=M*c+f,e[9]=m*c-v,e[2]=-c,e[6]=o*l,e[10]=r*l}else if(t.order==="YZX"){const f=r*l,m=r*c,v=o*l,M=o*c;e[0]=l*h,e[4]=M-f*p,e[8]=v*p+m,e[1]=p,e[5]=r*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*p+v,e[10]=f-M*p}else if(t.order==="XZY"){const f=r*l,m=r*c,v=o*l,M=o*c;e[0]=l*h,e[4]=-p,e[8]=c*h,e[1]=f*p+M,e[5]=r*h,e[9]=m*p-v,e[2]=v*p-m,e[6]=o*h,e[10]=M*p+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fl,t,Ol)}lookAt(t,e,i){const s=this.elements;return ke.subVectors(t,e),ke.lengthSq()===0&&(ke.z=1),ke.normalize(),Cn.crossVectors(i,ke),Cn.lengthSq()===0&&(Math.abs(i.z)===1?ke.x+=1e-4:ke.z+=1e-4,ke.normalize(),Cn.crossVectors(i,ke)),Cn.normalize(),Ms.crossVectors(ke,Cn),s[0]=Cn.x,s[4]=Ms.x,s[8]=ke.x,s[1]=Cn.y,s[5]=Ms.y,s[9]=ke.y,s[2]=Cn.z,s[6]=Ms.z,s[10]=ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],p=i[5],f=i[9],m=i[13],v=i[2],M=i[6],_=i[10],g=i[14],R=i[3],A=i[7],y=i[11],B=i[15],D=s[0],I=s[4],U=s[8],T=s[12],S=s[1],L=s[5],Y=s[9],q=s[13],Z=s[2],nt=s[6],$=s[10],rt=s[14],J=s[3],ht=s[7],_t=s[11],Rt=s[15];return a[0]=r*D+o*S+l*Z+c*J,a[4]=r*I+o*L+l*nt+c*ht,a[8]=r*U+o*Y+l*$+c*_t,a[12]=r*T+o*q+l*rt+c*Rt,a[1]=h*D+p*S+f*Z+m*J,a[5]=h*I+p*L+f*nt+m*ht,a[9]=h*U+p*Y+f*$+m*_t,a[13]=h*T+p*q+f*rt+m*Rt,a[2]=v*D+M*S+_*Z+g*J,a[6]=v*I+M*L+_*nt+g*ht,a[10]=v*U+M*Y+_*$+g*_t,a[14]=v*T+M*q+_*rt+g*Rt,a[3]=R*D+A*S+y*Z+B*J,a[7]=R*I+A*L+y*nt+B*ht,a[11]=R*U+A*Y+y*$+B*_t,a[15]=R*T+A*q+y*rt+B*Rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],p=t[6],f=t[10],m=t[14],v=t[3],M=t[7],_=t[11],g=t[15];return v*(+a*l*p-s*c*p-a*o*f+i*c*f+s*o*m-i*l*m)+M*(+e*l*m-e*c*f+a*r*f-s*r*m+s*c*h-a*l*h)+_*(+e*c*p-e*o*m-a*r*p+i*r*m+a*o*h-i*c*h)+g*(-s*o*h-e*l*p+e*o*f+s*r*p-i*r*f+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=t[9],f=t[10],m=t[11],v=t[12],M=t[13],_=t[14],g=t[15],R=p*_*c-M*f*c+M*l*m-o*_*m-p*l*g+o*f*g,A=v*f*c-h*_*c-v*l*m+r*_*m+h*l*g-r*f*g,y=h*M*c-v*p*c+v*o*m-r*M*m-h*o*g+r*p*g,B=v*p*l-h*M*l-v*o*f+r*M*f+h*o*_-r*p*_,D=e*R+i*A+s*y+a*B;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/D;return t[0]=R*I,t[1]=(M*f*a-p*_*a-M*s*m+i*_*m+p*s*g-i*f*g)*I,t[2]=(o*_*a-M*l*a+M*s*c-i*_*c-o*s*g+i*l*g)*I,t[3]=(p*l*a-o*f*a-p*s*c+i*f*c+o*s*m-i*l*m)*I,t[4]=A*I,t[5]=(h*_*a-v*f*a+v*s*m-e*_*m-h*s*g+e*f*g)*I,t[6]=(v*l*a-r*_*a-v*s*c+e*_*c+r*s*g-e*l*g)*I,t[7]=(r*f*a-h*l*a+h*s*c-e*f*c-r*s*m+e*l*m)*I,t[8]=y*I,t[9]=(v*p*a-h*M*a-v*i*m+e*M*m+h*i*g-e*p*g)*I,t[10]=(r*M*a-v*o*a+v*i*c-e*M*c-r*i*g+e*o*g)*I,t[11]=(h*o*a-r*p*a-h*i*c+e*p*c+r*i*m-e*o*m)*I,t[12]=B*I,t[13]=(h*M*s-v*p*s+v*i*f-e*M*f-h*i*_+e*p*_)*I,t[14]=(v*o*s-r*M*s-v*i*l+e*M*l+r*i*_-e*o*_)*I,t[15]=(r*p*s-h*o*s+h*i*l-e*p*l-r*i*f+e*o*f)*I,this}scale(t){const e=this.elements,i=t.x,s=t.y,a=t.z;return e[0]*=i,e[4]*=s,e[8]*=a,e[1]*=i,e[5]*=s,e[9]*=a,e[2]*=i,e[6]*=s,e[10]*=a,e[3]*=i,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,h=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*r,0,c*l-s*o,h*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,a=e._x,r=e._y,o=e._z,l=e._w,c=a+a,h=r+r,p=o+o,f=a*c,m=a*h,v=a*p,M=r*h,_=r*p,g=o*p,R=l*c,A=l*h,y=l*p,B=i.x,D=i.y,I=i.z;return s[0]=(1-(M+g))*B,s[1]=(m+y)*B,s[2]=(v-A)*B,s[3]=0,s[4]=(m-y)*D,s[5]=(1-(f+g))*D,s[6]=(_+R)*D,s[7]=0,s[8]=(v+A)*I,s[9]=(_-R)*I,s[10]=(1-(f+M))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let a=li.set(s[0],s[1],s[2]).length();const r=li.set(s[4],s[5],s[6]).length(),o=li.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],Je.copy(this);const c=1/a,h=1/r,p=1/o;return Je.elements[0]*=c,Je.elements[1]*=c,Je.elements[2]*=c,Je.elements[4]*=h,Je.elements[5]*=h,Je.elements[6]*=h,Je.elements[8]*=p,Je.elements[9]*=p,Je.elements[10]*=p,e.setFromRotationMatrix(Je),i.x=a,i.y=r,i.z=o,this}makePerspective(t,e,i,s,a,r,o=vn){const l=this.elements,c=2*a/(e-t),h=2*a/(i-s),p=(e+t)/(e-t),f=(i+s)/(i-s);let m,v;if(o===vn)m=-(r+a)/(r-a),v=-2*r*a/(r-a);else if(o===Ks)m=-r/(r-a),v=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,a,r,o=vn){const l=this.elements,c=1/(e-t),h=1/(i-s),p=1/(r-a),f=(e+t)*c,m=(i+s)*h;let v,M;if(o===vn)v=(r+a)*p,M=-2*p;else if(o===Ks)v=a*p,M=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=M,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const li=new E,Je=new de,Fl=new E(0,0,0),Ol=new E(1,1,1),Cn=new E,Ms=new E,ke=new E,ro=new de,oo=new ss;class dn{constructor(t=0,e=0,i=0,s=dn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],h=s[9],p=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(Re(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Re(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Re(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ro.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ro,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return oo.setFromEuler(this),this.setFromQuaternion(oo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dn.DEFAULT_ORDER="XYZ";class bc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Bl=0;const co=new E,di=new ss,pn=new de,ws=new E,Wi=new E,kl=new E,Hl=new ss,lo=new E(1,0,0),ho=new E(0,1,0),uo=new E(0,0,1),fo={type:"added"},Gl={type:"removed"},hi={type:"childadded",child:null},ma={type:"childremoved",child:null};class Me extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bl++}),this.uuid=is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new E,e=new dn,i=new ss,s=new E(1,1,1);function a(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new Ht}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return di.setFromAxisAngle(t,e),this.quaternion.multiply(di),this}rotateOnWorldAxis(t,e){return di.setFromAxisAngle(t,e),this.quaternion.premultiply(di),this}rotateX(t){return this.rotateOnAxis(lo,t)}rotateY(t){return this.rotateOnAxis(ho,t)}rotateZ(t){return this.rotateOnAxis(uo,t)}translateOnAxis(t,e){return co.copy(t).applyQuaternion(this.quaternion),this.position.add(co.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(lo,t)}translateY(t){return this.translateOnAxis(ho,t)}translateZ(t){return this.translateOnAxis(uo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ws.copy(t):ws.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(Wi,ws,this.up):pn.lookAt(ws,Wi,this.up),this.quaternion.setFromRotationMatrix(pn),s&&(pn.extractRotation(s.matrixWorld),di.setFromRotationMatrix(pn),this.quaternion.premultiply(di.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fo),hi.child=t,this.dispatchEvent(hi),hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gl),ma.child=t,this.dispatchEvent(ma),ma.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fo),hi.child=t,this.dispatchEvent(hi),hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,t,kl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,Hl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];a(t.shapes,p)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(a(t.animations,l))}}if(e){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),p=r(t.shapes),f=r(t.skeletons),m=r(t.animations),v=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=s,i;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Me.DEFAULT_UP=new E(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ze=new E,mn=new E,ga=new E,gn=new E,ui=new E,fi=new E,po=new E,_a=new E,xa=new E,va=new E,Ma=new _e,wa=new _e,ya=new _e;class Qe{constructor(t=new E,e=new E,i=new E){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ze.subVectors(t,e),s.cross(Ze);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,i,s,a){Ze.subVectors(s,e),mn.subVectors(i,e),ga.subVectors(t,e);const r=Ze.dot(Ze),o=Ze.dot(mn),l=Ze.dot(ga),c=mn.dot(mn),h=mn.dot(ga),p=r*c-o*o;if(p===0)return a.set(0,0,0),null;const f=1/p,m=(c*l-o*h)*f,v=(r*h-o*l)*f;return a.set(1-m-v,v,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getInterpolation(t,e,i,s,a,r,o,l){return this.getBarycoord(t,e,i,s,gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,gn.x),l.addScaledVector(r,gn.y),l.addScaledVector(o,gn.z),l)}static getInterpolatedAttribute(t,e,i,s,a,r){return Ma.setScalar(0),wa.setScalar(0),ya.setScalar(0),Ma.fromBufferAttribute(t,e),wa.fromBufferAttribute(t,i),ya.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Ma,a.x),r.addScaledVector(wa,a.y),r.addScaledVector(ya,a.z),r}static isFrontFacing(t,e,i,s){return Ze.subVectors(i,e),mn.subVectors(t,e),Ze.cross(mn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ze.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),Ze.cross(mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Qe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,a){return Qe.getInterpolation(t,this.a,this.b,this.c,e,i,s,a)}containsPoint(t){return Qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,a=this.c;let r,o;ui.subVectors(s,i),fi.subVectors(a,i),_a.subVectors(t,i);const l=ui.dot(_a),c=fi.dot(_a);if(l<=0&&c<=0)return e.copy(i);xa.subVectors(t,s);const h=ui.dot(xa),p=fi.dot(xa);if(h>=0&&p<=h)return e.copy(s);const f=l*p-h*c;if(f<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(i).addScaledVector(ui,r);va.subVectors(t,a);const m=ui.dot(va),v=fi.dot(va);if(v>=0&&m<=v)return e.copy(a);const M=m*c-l*v;if(M<=0&&c>=0&&v<=0)return o=c/(c-v),e.copy(i).addScaledVector(fi,o);const _=h*v-m*p;if(_<=0&&p-h>=0&&m-v>=0)return po.subVectors(a,s),o=(p-h)/(p-h+(m-v)),e.copy(s).addScaledVector(po,o);const g=1/(_+M+f);return r=M*g,o=f*g,e.copy(i).addScaledVector(ui,r).addScaledVector(fi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ec={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},ys={h:0,s:0,l:0};function Sa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Vt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=te.workingColorSpace){if(t=Tl(t,1),e=Re(e,0,1),i=Re(i,0,1),e===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+e):i+e-i*e,r=2*i-a;this.r=Sa(r,a,t+1/3),this.g=Sa(r,a,t),this.b=Sa(r,a,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=ze){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){const i=Ec[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mn(t.r),this.g=Mn(t.g),this.b=Mn(t.b),this}copyLinearToSRGB(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return te.fromWorkingColorSpace(Ae.copy(this),t),Math.round(Re(Ae.r*255,0,255))*65536+Math.round(Re(Ae.g*255,0,255))*256+Math.round(Re(Ae.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Ae.copy(this),e);const i=Ae.r,s=Ae.g,a=Ae.b,r=Math.max(i,s,a),o=Math.min(i,s,a);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const p=r-o;switch(c=h<=.5?p/(r+o):p/(2-r-o),r){case i:l=(s-a)/p+(s<a?6:0);break;case s:l=(a-i)/p+2;break;case a:l=(i-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=ze){te.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,i=Ae.g,s=Ae.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Pn),this.setHSL(Pn.h+t,Pn.s+e,Pn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Pn),t.getHSL(ys);const i=ra(Pn.h,ys.h,e),s=ra(Pn.s,ys.s,e),a=ra(Pn.l,ys.l,e);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*s,this.g=a[1]*e+a[4]*i+a[7]*s,this.b=a[2]*e+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new Vt;Vt.NAMES=Ec;let Vl=0;class Ui extends Ii{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vl++}),this.uuid=is(),this.name="",this.blending=yi,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oa,this.blendDst=Ba,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Ei,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=si,this.stencilZFail=si,this.stencilZPass=si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==yi&&(i.blending=this.blending),this.side!==Fn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Oa&&(i.blendSrc=this.blendSrc),this.blendDst!==Ba&&(i.blendDst=this.blendDst),this.blendEquation!==Yn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ei&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zr&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==si&&(i.stencilFail=this.stencilFail),this.stencilZFail!==si&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==si&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(e){const a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Nr extends Ui{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new E,Ss=new Ct;class Ve{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=$r,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ss.fromBufferAttribute(this,e),Ss.applyMatrix3(t),this.setXY(e,Ss.x,Ss.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Hi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ne(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,a){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array),s=Ne(s,this.array),a=Ne(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$r&&(t.usage=this.usage),t}}class Tc extends Ve{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ac extends Ve{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class fe extends Ve{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Wl=0;const Xe=new de,ba=new Me,pi=new E,He=new Qn,Xi=new Qn,be=new E;class Le extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wl++}),this.uuid=is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mc(t)?Ac:Tc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Ht().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,i){return Xe.makeTranslation(t,e,i),this.applyMatrix4(Xe),this}scale(t,e,i){return Xe.makeScale(t,e,i),this.applyMatrix4(Xe),this}lookAt(t){return ba.lookAt(t),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,a=t.length;s<a;s++){const r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new fe(i,3))}else{for(let i=0,s=e.count;i<s;i++){const a=t[i];e.setXYZ(i,a.x,a.y,a.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const a=e[i];He.setFromBufferAttribute(a),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Li);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(t){const i=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const o=e[a];Xi.setFromBufferAttribute(o),this.morphTargetsRelative?(be.addVectors(He.min,Xi.min),He.expandByPoint(be),be.addVectors(He.max,Xi.max),He.expandByPoint(be)):(He.expandByPoint(Xi.min),He.expandByPoint(Xi.max))}He.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)be.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(be));if(e)for(let a=0,r=e.length;a<r;a++){const o=e[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)be.fromBufferAttribute(o,c),l&&(pi.fromBufferAttribute(t,c),be.add(pi)),s=Math.max(s,i.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ve(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new E,l[U]=new E;const c=new E,h=new E,p=new E,f=new Ct,m=new Ct,v=new Ct,M=new E,_=new E;function g(U,T,S){c.fromBufferAttribute(i,U),h.fromBufferAttribute(i,T),p.fromBufferAttribute(i,S),f.fromBufferAttribute(a,U),m.fromBufferAttribute(a,T),v.fromBufferAttribute(a,S),h.sub(c),p.sub(c),m.sub(f),v.sub(f);const L=1/(m.x*v.y-v.x*m.y);isFinite(L)&&(M.copy(h).multiplyScalar(v.y).addScaledVector(p,-m.y).multiplyScalar(L),_.copy(p).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(L),o[U].add(M),o[T].add(M),o[S].add(M),l[U].add(_),l[T].add(_),l[S].add(_))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let U=0,T=R.length;U<T;++U){const S=R[U],L=S.start,Y=S.count;for(let q=L,Z=L+Y;q<Z;q+=3)g(t.getX(q+0),t.getX(q+1),t.getX(q+2))}const A=new E,y=new E,B=new E,D=new E;function I(U){B.fromBufferAttribute(s,U),D.copy(B);const T=o[U];A.copy(T),A.sub(B.multiplyScalar(B.dot(T))).normalize(),y.crossVectors(D,T);const L=y.dot(l[U])<0?-1:1;r.setXYZW(U,A.x,A.y,A.z,L)}for(let U=0,T=R.length;U<T;++U){const S=R[U],L=S.start,Y=S.count;for(let q=L,Z=L+Y;q<Z;q+=3)I(t.getX(q+0)),I(t.getX(q+1)),I(t.getX(q+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const s=new E,a=new E,r=new E,o=new E,l=new E,c=new E,h=new E,p=new E;if(t)for(let f=0,m=t.count;f<m;f+=3){const v=t.getX(f+0),M=t.getX(f+1),_=t.getX(f+2);s.fromBufferAttribute(e,v),a.fromBufferAttribute(e,M),r.fromBufferAttribute(e,_),h.subVectors(r,a),p.subVectors(s,a),h.cross(p),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,_),o.add(h),l.add(h),c.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),a.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),h.subVectors(r,a),p.subVectors(s,a),h.cross(p),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,p=o.normalized,f=new c.constructor(l.length*h);let m=0,v=0;for(let M=0,_=l.length;M<_;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*h;for(let g=0;g<h;g++)f[v++]=c[m++]}return new Ve(f,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Le,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,p=c.length;h<p;h++){const f=c[h],m=t(f,i);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,f=c.length;p<f;p++){const m=c[p];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const a=t.morphAttributes;for(const c in a){const h=[],p=a[c];for(let f=0,m=p.length;f<m;f++)h.push(p[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mo=new de,kn=new Sc,bs=new Li,go=new E,Es=new E,Ts=new E,As=new E,Ea=new E,Rs=new E,_o=new E,Cs=new E;class le extends Me{constructor(t=new Le,e=new Nr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(a&&o){Rs.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],p=a[l];h!==0&&(Ea.fromBufferAttribute(p,t),r?Rs.addScaledVector(Ea,h):Rs.addScaledVector(Ea.sub(e),h))}e.add(Rs)}return e}raycast(t,e){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bs.copy(i.boundingSphere),bs.applyMatrix4(a),kn.copy(t.ray).recast(t.near),!(bs.containsPoint(kn.origin)===!1&&(kn.intersectSphere(bs,go)===null||kn.origin.distanceToSquared(go)>(t.far-t.near)**2))&&(mo.copy(a).invert(),kn.copy(t.ray).applyMatrix4(mo),!(i.boundingBox!==null&&kn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,kn)))}_computeIntersections(t,e,i){let s;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,p=a.attributes.normal,f=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,M=f.length;v<M;v++){const _=f[v],g=r[_.materialIndex],R=Math.max(_.start,m.start),A=Math.min(o.count,Math.min(_.start+_.count,m.start+m.count));for(let y=R,B=A;y<B;y+=3){const D=o.getX(y),I=o.getX(y+1),U=o.getX(y+2);s=Ps(this,g,t,i,c,h,p,D,I,U),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{const v=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let _=v,g=M;_<g;_+=3){const R=o.getX(_),A=o.getX(_+1),y=o.getX(_+2);s=Ps(this,r,t,i,c,h,p,R,A,y),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,M=f.length;v<M;v++){const _=f[v],g=r[_.materialIndex],R=Math.max(_.start,m.start),A=Math.min(l.count,Math.min(_.start+_.count,m.start+m.count));for(let y=R,B=A;y<B;y+=3){const D=y,I=y+1,U=y+2;s=Ps(this,g,t,i,c,h,p,D,I,U),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{const v=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let _=v,g=M;_<g;_+=3){const R=_,A=_+1,y=_+2;s=Ps(this,r,t,i,c,h,p,R,A,y),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}}function Xl(n,t,e,i,s,a,r,o){let l;if(t.side===Ie?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===Fn,o),l===null)return null;Cs.copy(o),Cs.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Cs);return c<e.near||c>e.far?null:{distance:c,point:Cs.clone(),object:n}}function Ps(n,t,e,i,s,a,r,o,l,c){n.getVertexPosition(o,Es),n.getVertexPosition(l,Ts),n.getVertexPosition(c,As);const h=Xl(n,t,e,i,Es,Ts,As,_o);if(h){const p=new E;Qe.getBarycoord(_o,Es,Ts,As,p),s&&(h.uv=Qe.getInterpolatedAttribute(s,o,l,c,p,new Ct)),a&&(h.uv1=Qe.getInterpolatedAttribute(a,o,l,c,p,new Ct)),r&&(h.normal=Qe.getInterpolatedAttribute(r,o,l,c,p,new E),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new E,materialIndex:0};Qe.getNormal(Es,Ts,As,f.normal),h.face=f,h.barycoord=p}return h}class x extends Le{constructor(t=1,e=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],h=[],p=[];let f=0,m=0;v("z","y","x",-1,-1,i,e,t,r,a,0),v("z","y","x",1,-1,i,e,-t,r,a,1),v("x","z","y",1,1,t,i,e,s,r,2),v("x","z","y",1,-1,t,i,-e,s,r,3),v("x","y","z",1,-1,t,e,i,s,a,4),v("x","y","z",-1,-1,t,e,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(p,2));function v(M,_,g,R,A,y,B,D,I,U,T){const S=y/I,L=B/U,Y=y/2,q=B/2,Z=D/2,nt=I+1,$=U+1;let rt=0,J=0;const ht=new E;for(let _t=0;_t<$;_t++){const Rt=_t*L-q;for(let Xt=0;Xt<nt;Xt++){const ie=Xt*S-Y;ht[M]=ie*R,ht[_]=Rt*A,ht[g]=Z,c.push(ht.x,ht.y,ht.z),ht[M]=0,ht[_]=0,ht[g]=D>0?1:-1,h.push(ht.x,ht.y,ht.z),p.push(Xt/I),p.push(1-_t/U),rt+=1}}for(let _t=0;_t<U;_t++)for(let Rt=0;Rt<I;Rt++){const Xt=f+Rt+nt*_t,ie=f+Rt+nt*(_t+1),Q=f+(Rt+1)+nt*(_t+1),ot=f+(Rt+1)+nt*_t;l.push(Xt,ie,ot),l.push(ie,Q,ot),J+=6}o.addGroup(m,J,T),m+=J,f+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new x(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Pi(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function De(n){const t={};for(let e=0;e<n.length;e++){const i=Pi(n[e]);for(const s in i)t[s]=i[s]}return t}function ql(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Rc(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const Yl={clone:Pi,merge:De};var Kl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends Ui{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kl,this.fragmentShader=Jl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Pi(t.uniforms),this.uniformsGroups=ql(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Cc extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Dn=new E,xo=new Ct,vo=new Ct;class je extends Cc{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Sr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(aa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Sr*2*Math.atan(Math.tan(aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Dn.x,Dn.y).multiplyScalar(-t/Dn.z),Dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Dn.x,Dn.y).multiplyScalar(-t/Dn.z)}getViewSize(t,e){return this.getViewBounds(t,xo,vo),e.subVectors(vo,xo)}setViewOffset(t,e,i,s,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(aa*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,e-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const mi=-90,gi=1;class Zl extends Me{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new je(mi,gi,t,e);s.layers=this.layers,this.add(s);const a=new je(mi,gi,t,e);a.layers=this.layers,this.add(a);const r=new je(mi,gi,t,e);r.layers=this.layers,this.add(r);const o=new je(mi,gi,t,e);o.layers=this.layers,this.add(o);const l=new je(mi,gi,t,e);l.layers=this.layers,this.add(l);const c=new je(mi,gi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,a,r,o,l]=e;for(const c of e)this.remove(c);if(t===vn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ks)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,h]=this.children,p=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,a),t.setRenderTarget(i,1,s),t.render(e,r),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(p,f,m),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Pc extends Ce{constructor(t,e,i,s,a,r,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ti,super(t,e,i,s,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class $l extends jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Pc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:on}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new x(5,5,5),a=new yn({name:"CubemapFromEquirect",uniforms:Pi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ie,blending:Nn});a.uniforms.tEquirect.value=e;const r=new le(s,a),o=e.minFilter;return e.minFilter===Zn&&(e.minFilter=on),new Zl(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,s){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,s);t.setRenderTarget(a)}}const Ta=new E,jl=new E,Ql=new Ht;class Wn{constructor(t=new E(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Ta.subVectors(i,e).cross(jl.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ta),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Ql.getNormalMatrix(t),s=this.coplanarPoint(Ta).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hn=new Li,Ds=new E;class zr{constructor(t=new Wn,e=new Wn,i=new Wn,s=new Wn,a=new Wn,r=new Wn){this.planes=[t,e,i,s,a,r]}set(t,e,i,s,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=vn){const i=this.planes,s=t.elements,a=s[0],r=s[1],o=s[2],l=s[3],c=s[4],h=s[5],p=s[6],f=s[7],m=s[8],v=s[9],M=s[10],_=s[11],g=s[12],R=s[13],A=s[14],y=s[15];if(i[0].setComponents(l-a,f-c,_-m,y-g).normalize(),i[1].setComponents(l+a,f+c,_+m,y+g).normalize(),i[2].setComponents(l+r,f+h,_+v,y+R).normalize(),i[3].setComponents(l-r,f-h,_-v,y-R).normalize(),i[4].setComponents(l-o,f-p,_-M,y-A).normalize(),e===vn)i[5].setComponents(l+o,f+p,_+M,y+A).normalize();else if(e===Ks)i[5].setComponents(o,p,M,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(t){return Hn.center.set(0,0,0),Hn.radius=.7071067811865476,Hn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Ds.x=s.normal.x>0?t.max.x:t.min.x,Ds.y=s.normal.y>0?t.max.y:t.min.y,Ds.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ds)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Dc(){let n=null,t=!1,e=null,i=null;function s(a,r){e(a,r),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){n=a}}}function td(n){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,p=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const h=l.array,p=l.updateRanges;if(n.bindBuffer(c,o),p.length===0)n.bufferSubData(c,0,h);else{p.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<p.length;m++){const v=p[f],M=p[m];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++f,p[f]=M)}p.length=f+1;for(let m=0,v=p.length;m<v;m++){const M=p[m];n.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}class Ni extends Le{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const a=t/2,r=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,p=t/o,f=e/l,m=[],v=[],M=[],_=[];for(let g=0;g<h;g++){const R=g*f-r;for(let A=0;A<c;A++){const y=A*p-a;v.push(y,-R,0),M.push(0,0,1),_.push(A/o),_.push(1-g/l)}}for(let g=0;g<l;g++)for(let R=0;R<o;R++){const A=R+c*g,y=R+c*(g+1),B=R+1+c*(g+1),D=R+1+c*g;m.push(A,y,D),m.push(y,B,D)}this.setIndex(m),this.setAttribute("position",new fe(v,3)),this.setAttribute("normal",new fe(M,3)),this.setAttribute("uv",new fe(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ni(t.width,t.height,t.widthSegments,t.heightSegments)}}var ed=`#ifdef USE_ALPHAHASH
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
#endif`,sd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ad=`#ifdef USE_ALPHATEST
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
#endif`,sh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ah=`#ifdef USE_LOGDEPTHBUF
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
}`,su=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,au=`uniform samplerCube tCube;
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
}`,Gt={alphahash_fragment:ed,alphahash_pars_fragment:nd,alphamap_fragment:id,alphamap_pars_fragment:sd,alphatest_fragment:ad,alphatest_pars_fragment:rd,aomap_fragment:od,aomap_pars_fragment:cd,batching_pars_vertex:ld,batching_vertex:dd,begin_vertex:hd,beginnormal_vertex:ud,bsdfs:fd,iridescence_fragment:pd,bumpmap_pars_fragment:md,clipping_planes_fragment:gd,clipping_planes_pars_fragment:_d,clipping_planes_pars_vertex:xd,clipping_planes_vertex:vd,color_fragment:Md,color_pars_fragment:wd,color_pars_vertex:yd,color_vertex:Sd,common:bd,cube_uv_reflection_fragment:Ed,defaultnormal_vertex:Td,displacementmap_pars_vertex:Ad,displacementmap_vertex:Rd,emissivemap_fragment:Cd,emissivemap_pars_fragment:Pd,colorspace_fragment:Dd,colorspace_pars_fragment:Id,envmap_fragment:Ld,envmap_common_pars_fragment:Ud,envmap_pars_fragment:Nd,envmap_pars_vertex:zd,envmap_physical_pars_fragment:Yd,envmap_vertex:Fd,fog_vertex:Od,fog_pars_vertex:Bd,fog_fragment:kd,fog_pars_fragment:Hd,gradientmap_pars_fragment:Gd,lightmap_pars_fragment:Vd,lights_lambert_fragment:Wd,lights_lambert_pars_fragment:Xd,lights_pars_begin:qd,lights_toon_fragment:Kd,lights_toon_pars_fragment:Jd,lights_phong_fragment:Zd,lights_phong_pars_fragment:$d,lights_physical_fragment:jd,lights_physical_pars_fragment:Qd,lights_fragment_begin:th,lights_fragment_maps:eh,lights_fragment_end:nh,logdepthbuf_fragment:ih,logdepthbuf_pars_fragment:sh,logdepthbuf_pars_vertex:ah,logdepthbuf_vertex:rh,map_fragment:oh,map_pars_fragment:ch,map_particle_fragment:lh,map_particle_pars_fragment:dh,metalnessmap_fragment:hh,metalnessmap_pars_fragment:uh,morphinstance_vertex:fh,morphcolor_vertex:ph,morphnormal_vertex:mh,morphtarget_pars_vertex:gh,morphtarget_vertex:_h,normal_fragment_begin:xh,normal_fragment_maps:vh,normal_pars_fragment:Mh,normal_pars_vertex:wh,normal_vertex:yh,normalmap_pars_fragment:Sh,clearcoat_normal_fragment_begin:bh,clearcoat_normal_fragment_maps:Eh,clearcoat_pars_fragment:Th,iridescence_pars_fragment:Ah,opaque_fragment:Rh,packing:Ch,premultiplied_alpha_fragment:Ph,project_vertex:Dh,dithering_fragment:Ih,dithering_pars_fragment:Lh,roughnessmap_fragment:Uh,roughnessmap_pars_fragment:Nh,shadowmap_pars_fragment:zh,shadowmap_pars_vertex:Fh,shadowmap_vertex:Oh,shadowmask_pars_fragment:Bh,skinbase_vertex:kh,skinning_pars_vertex:Hh,skinning_vertex:Gh,skinnormal_vertex:Vh,specularmap_fragment:Wh,specularmap_pars_fragment:Xh,tonemapping_fragment:qh,tonemapping_pars_fragment:Yh,transmission_fragment:Kh,transmission_pars_fragment:Jh,uv_pars_fragment:Zh,uv_pars_vertex:$h,uv_vertex:jh,worldpos_vertex:Qh,background_vert:tu,background_frag:eu,backgroundCube_vert:nu,backgroundCube_frag:iu,cube_vert:su,cube_frag:au,depth_vert:ru,depth_frag:ou,distanceRGBA_vert:cu,distanceRGBA_frag:lu,equirect_vert:du,equirect_frag:hu,linedashed_vert:uu,linedashed_frag:fu,meshbasic_vert:pu,meshbasic_frag:mu,meshlambert_vert:gu,meshlambert_frag:_u,meshmatcap_vert:xu,meshmatcap_frag:vu,meshnormal_vert:Mu,meshnormal_frag:wu,meshphong_vert:yu,meshphong_frag:Su,meshphysical_vert:bu,meshphysical_frag:Eu,meshtoon_vert:Tu,meshtoon_frag:Au,points_vert:Ru,points_frag:Cu,shadow_vert:Pu,shadow_frag:Du,sprite_vert:Iu,sprite_frag:Lu},lt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},an={basic:{uniforms:De([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:De([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:De([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:De([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:De([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:De([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:De([lt.points,lt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:De([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:De([lt.common,lt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:De([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:De([lt.sprite,lt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:De([lt.common,lt.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:De([lt.lights,lt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};an.physical={uniforms:De([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const Is={r:0,b:0,g:0},Gn=new dn,Uu=new de;function Nu(n,t,e,i,s,a,r){const o=new Vt(0);let l=a===!0?0:1,c,h,p=null,f=0,m=null;function v(R){let A=R.isScene===!0?R.background:null;return A&&A.isTexture&&(A=(R.backgroundBlurriness>0?e:t).get(A)),A}function M(R){let A=!1;const y=v(R);y===null?g(o,l):y&&y.isColor&&(g(y,1),A=!0);const B=n.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,r):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(R,A){const y=v(A);y&&(y.isCubeTexture||y.mapping===js)?(h===void 0&&(h=new le(new x(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:Pi(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,D,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Gn.copy(A.backgroundRotation),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Uu.makeRotationFromEuler(Gn)),h.material.toneMapped=te.getTransfer(y.colorSpace)!==re,(p!==y||f!==y.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,p=y,f=y.version,m=n.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new le(new Ni(2,2),new yn({name:"BackgroundMaterial",uniforms:Pi(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=te.getTransfer(y.colorSpace)!==re,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(p!==y||f!==y.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,p=y,f=y.version,m=n.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null))}function g(R,A){R.getRGB(Is,Rc(n)),i.buffers.color.setClear(Is.r,Is.g,Is.b,A,r)}return{getClearColor:function(){return o},setClearColor:function(R,A=1){o.set(R),l=A,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(R){l=R,g(o,l)},render:M,addToRenderList:_}}function zu(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let a=s,r=!1;function o(S,L,Y,q,Z){let nt=!1;const $=p(q,Y,L);a!==$&&(a=$,c(a.object)),nt=m(S,q,Y,Z),nt&&v(S,q,Y,Z),Z!==null&&t.update(Z,n.ELEMENT_ARRAY_BUFFER),(nt||r)&&(r=!1,y(S,L,Y,q),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function h(S){return n.deleteVertexArray(S)}function p(S,L,Y){const q=Y.wireframe===!0;let Z=i[S.id];Z===void 0&&(Z={},i[S.id]=Z);let nt=Z[L.id];nt===void 0&&(nt={},Z[L.id]=nt);let $=nt[q];return $===void 0&&($=f(l()),nt[q]=$),$}function f(S){const L=[],Y=[],q=[];for(let Z=0;Z<e;Z++)L[Z]=0,Y[Z]=0,q[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:Y,attributeDivisors:q,object:S,attributes:{},index:null}}function m(S,L,Y,q){const Z=a.attributes,nt=L.attributes;let $=0;const rt=Y.getAttributes();for(const J in rt)if(rt[J].location>=0){const _t=Z[J];let Rt=nt[J];if(Rt===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(Rt=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(Rt=S.instanceColor)),_t===void 0||_t.attribute!==Rt||Rt&&_t.data!==Rt.data)return!0;$++}return a.attributesNum!==$||a.index!==q}function v(S,L,Y,q){const Z={},nt=L.attributes;let $=0;const rt=Y.getAttributes();for(const J in rt)if(rt[J].location>=0){let _t=nt[J];_t===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(_t=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(_t=S.instanceColor));const Rt={};Rt.attribute=_t,_t&&_t.data&&(Rt.data=_t.data),Z[J]=Rt,$++}a.attributes=Z,a.attributesNum=$,a.index=q}function M(){const S=a.newAttributes;for(let L=0,Y=S.length;L<Y;L++)S[L]=0}function _(S){g(S,0)}function g(S,L){const Y=a.newAttributes,q=a.enabledAttributes,Z=a.attributeDivisors;Y[S]=1,q[S]===0&&(n.enableVertexAttribArray(S),q[S]=1),Z[S]!==L&&(n.vertexAttribDivisor(S,L),Z[S]=L)}function R(){const S=a.newAttributes,L=a.enabledAttributes;for(let Y=0,q=L.length;Y<q;Y++)L[Y]!==S[Y]&&(n.disableVertexAttribArray(Y),L[Y]=0)}function A(S,L,Y,q,Z,nt,$){$===!0?n.vertexAttribIPointer(S,L,Y,Z,nt):n.vertexAttribPointer(S,L,Y,q,Z,nt)}function y(S,L,Y,q){M();const Z=q.attributes,nt=Y.getAttributes(),$=L.defaultAttributeValues;for(const rt in nt){const J=nt[rt];if(J.location>=0){let ht=Z[rt];if(ht===void 0&&(rt==="instanceMatrix"&&S.instanceMatrix&&(ht=S.instanceMatrix),rt==="instanceColor"&&S.instanceColor&&(ht=S.instanceColor)),ht!==void 0){const _t=ht.normalized,Rt=ht.itemSize,Xt=t.get(ht);if(Xt===void 0)continue;const ie=Xt.buffer,Q=Xt.type,ot=Xt.bytesPerElement,bt=Q===n.INT||Q===n.UNSIGNED_INT||ht.gpuType===Rr;if(ht.isInterleavedBufferAttribute){const ut=ht.data,Lt=ut.stride,zt=ht.offset;if(ut.isInstancedInterleavedBuffer){for(let qt=0;qt<J.locationSize;qt++)g(J.location+qt,ut.meshPerAttribute);S.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let qt=0;qt<J.locationSize;qt++)_(J.location+qt);n.bindBuffer(n.ARRAY_BUFFER,ie);for(let qt=0;qt<J.locationSize;qt++)A(J.location+qt,Rt/J.locationSize,Q,_t,Lt*ot,(zt+Rt/J.locationSize*qt)*ot,bt)}else{if(ht.isInstancedBufferAttribute){for(let ut=0;ut<J.locationSize;ut++)g(J.location+ut,ht.meshPerAttribute);S.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let ut=0;ut<J.locationSize;ut++)_(J.location+ut);n.bindBuffer(n.ARRAY_BUFFER,ie);for(let ut=0;ut<J.locationSize;ut++)A(J.location+ut,Rt/J.locationSize,Q,_t,Rt*ot,Rt/J.locationSize*ut*ot,bt)}}else if($!==void 0){const _t=$[rt];if(_t!==void 0)switch(_t.length){case 2:n.vertexAttrib2fv(J.location,_t);break;case 3:n.vertexAttrib3fv(J.location,_t);break;case 4:n.vertexAttrib4fv(J.location,_t);break;default:n.vertexAttrib1fv(J.location,_t)}}}}R()}function B(){U();for(const S in i){const L=i[S];for(const Y in L){const q=L[Y];for(const Z in q)h(q[Z].object),delete q[Z];delete L[Y]}delete i[S]}}function D(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const Y in L){const q=L[Y];for(const Z in q)h(q[Z].object),delete q[Z];delete L[Y]}delete i[S.id]}function I(S){for(const L in i){const Y=i[L];if(Y[S.id]===void 0)continue;const q=Y[S.id];for(const Z in q)h(q[Z].object),delete q[Z];delete Y[S.id]}}function U(){T(),r=!0,a!==s&&(a=s,c(a.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:T,dispose:B,releaseStatesOfGeometry:D,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:_,disableUnusedAttributes:R}}function Fu(n,t,e){let i;function s(c){i=c}function a(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function r(c,h,p){p!==0&&(n.drawArraysInstanced(i,c,h,p),e.update(h,i,p))}function o(c,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,p);let m=0;for(let v=0;v<p;v++)m+=h[v];e.update(m,i,1)}function l(c,h,p,f){if(p===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)r(c[v],h[v],f[v]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,p);let v=0;for(let M=0;M<p;M++)v+=h[M]*f[M];e.update(v,i,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ou(n,t,e,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(I){return!(I!==tn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const U=I===ns&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==wn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==cn&&!U)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),B=v>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:R,maxVaryings:A,maxFragmentUniforms:y,vertexTextures:B,maxSamples:D}}function Bu(n){const t=this;let e=null,i=0,s=!1,a=!1;const r=new Wn,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const m=p.length!==0||f||i!==0||s;return s=f,i=p.length,m},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,f){e=h(p,f,0)},this.setState=function(p,f,m){const v=p.clippingPlanes,M=p.clipIntersection,_=p.clipShadows,g=n.get(p);if(!s||v===null||v.length===0||a&&!_)a?h(null):c();else{const R=a?0:i,A=R*4;let y=g.clippingState||null;l.value=y,y=h(v,f,A,m);for(let B=0;B!==A;++B)y[B]=e[B];g.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(p,f,m,v){const M=p!==null?p.length:0;let _=null;if(M!==0){if(_=l.value,v!==!0||_===null){const g=m+M*4,R=f.matrixWorldInverse;o.getNormalMatrix(R),(_===null||_.length<g)&&(_=new Float32Array(g));for(let A=0,y=m;A!==M;++A,y+=4)r.copy(p[A]).applyMatrix4(R,o),r.normal.toArray(_,y),_[y+3]=r.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,_}}function ku(n){let t=new WeakMap;function e(r,o){return o===Ya?r.mapping=Ti:o===Ka&&(r.mapping=Ai),r}function i(r){if(r&&r.isTexture){const o=r.mapping;if(o===Ya||o===Ka)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new $l(l.height);return c.fromEquirectangularTexture(n,r),t.set(r,c),r.addEventListener("dispose",s),e(c.texture,r.mapping)}else return null}}return r}function s(r){const o=r.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}class Ic extends Cc{constructor(t=-1,e=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-t,r=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const wi=4,Mo=[.125,.215,.35,.446,.526,.582],Kn=20,Aa=new Ic,wo=new Vt;let Ra=null,Ca=0,Pa=0,Da=!1;const Xn=(1+Math.sqrt(5))/2,_i=1/Xn,yo=[new E(-Xn,_i,0),new E(Xn,_i,0),new E(-_i,0,Xn),new E(_i,0,Xn),new E(0,Xn,-_i),new E(0,Xn,_i),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)];class So{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Ra=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),Da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,s,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=To(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ra,Ca,Pa),this._renderer.xr.enabled=Da,t.scissorTest=!1,Ls(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ti||t.mapping===Ai?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ra=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),Da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:on,minFilter:on,generateMipmaps:!1,type:ns,format:tn,colorSpace:Di,depthBuffer:!1},s=bo(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bo(t,e,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hu(a)),this._blurMaterial=Gu(a,t,e)}return s}_compileMaterial(t){const e=new le(this._lodPlanes[0],t);this._renderer.compile(e,Aa)}_sceneToCubeUV(t,e,i,s){const o=new je(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,f=h.toneMapping;h.getClearColor(wo),h.toneMapping=zn,h.autoClear=!1;const m=new Nr({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),v=new le(new x,m);let M=!1;const _=t.background;_?_.isColor&&(m.color.copy(_),t.background=null,M=!0):(m.color.copy(wo),M=!0);for(let g=0;g<6;g++){const R=g%3;R===0?(o.up.set(0,l[g],0),o.lookAt(c[g],0,0)):R===1?(o.up.set(0,0,l[g]),o.lookAt(0,c[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,c[g]));const A=this._cubeSize;Ls(s,R*A,g>2?A:0,A,A),h.setRenderTarget(s),M&&h.render(v,o),h.render(t,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=p,t.background=_}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Ti||t.mapping===Ai;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=To()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eo());const a=s?this._cubemapMaterial:this._equirectMaterial,r=new le(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;const l=this._cubeSize;Ls(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(r,Aa)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=yo[(s-a-1)%yo.length];this._blur(t,a-1,a,r,o)}e.autoClear=i}_blur(t,e,i,s,a){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,e,i,s,a,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new le(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*Kn-1),M=a/v,_=isFinite(a)?1+Math.floor(h*M):Kn;_>Kn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Kn}`);const g=[];let R=0;for(let I=0;I<Kn;++I){const U=I/M,T=Math.exp(-U*U/2);g.push(T),I===0?R+=T:I<_&&(R+=2*T)}for(let I=0;I<g.length;I++)g[I]=g[I]/R;f.envMap.value=t.texture,f.samples.value=_,f.weights.value=g,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:A}=this;f.dTheta.value=v,f.mipInt.value=A-i;const y=this._sizeLods[s],B=3*y*(s>A-wi?s-A+wi:0),D=4*(this._cubeSize-y);Ls(e,B,D,3*y,2*y),l.setRenderTarget(e),l.render(p,Aa)}}function Hu(n){const t=[],e=[],i=[];let s=n;const a=n-wi+1+Mo.length;for(let r=0;r<a;r++){const o=Math.pow(2,s);e.push(o);let l=1/o;r>n-wi?l=Mo[r-n+wi-1]:r===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,p=1+c,f=[h,h,p,h,p,p,h,h,p,p,h,p],m=6,v=6,M=3,_=2,g=1,R=new Float32Array(M*v*m),A=new Float32Array(_*v*m),y=new Float32Array(g*v*m);for(let D=0;D<m;D++){const I=D%3*2/3-1,U=D>2?0:-1,T=[I,U,0,I+2/3,U,0,I+2/3,U+1,0,I,U,0,I+2/3,U+1,0,I,U+1,0];R.set(T,M*v*D),A.set(f,_*v*D);const S=[D,D,D,D,D,D];y.set(S,g*v*D)}const B=new Le;B.setAttribute("position",new Ve(R,M)),B.setAttribute("uv",new Ve(A,_)),B.setAttribute("faceIndex",new Ve(y,g)),t.push(B),s>wi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function bo(n,t,e){const i=new jn(n,t,e);return i.texture.mapping=js,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ls(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Gu(n,t,e){const i=new Float32Array(Kn),s=new E(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fr(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Eo(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fr(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function To(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Fr(){return`

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
	`}function Vu(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ya||l===Ka,h=l===Ti||l===Ai;if(c||h){let p=t.get(o);const f=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new So(n)),p=c?e.fromEquirectangular(o,p):e.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,t.set(o,p),p.texture;if(p!==void 0)return p.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new So(n)),p=c?e.fromEquirectangular(o):e.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,t.set(o,p),o.addEventListener("dispose",a),p.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function Wu(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Zi("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Xu(n,t,e,i){const s={},a=new WeakMap;function r(p){const f=p.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);for(const v in f.morphAttributes){const M=f.morphAttributes[v];for(let _=0,g=M.length;_<g;_++)t.remove(M[_])}f.removeEventListener("dispose",r),delete s[f.id];const m=a.get(f);m&&(t.remove(m),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(p,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,e.memory.geometries++),f}function l(p){const f=p.attributes;for(const v in f)t.update(f[v],n.ARRAY_BUFFER);const m=p.morphAttributes;for(const v in m){const M=m[v];for(let _=0,g=M.length;_<g;_++)t.update(M[_],n.ARRAY_BUFFER)}}function c(p){const f=[],m=p.index,v=p.attributes.position;let M=0;if(m!==null){const R=m.array;M=m.version;for(let A=0,y=R.length;A<y;A+=3){const B=R[A+0],D=R[A+1],I=R[A+2];f.push(B,D,D,I,I,B)}}else if(v!==void 0){const R=v.array;M=v.version;for(let A=0,y=R.length/3-1;A<y;A+=3){const B=A+0,D=A+1,I=A+2;f.push(B,D,D,I,I,B)}}else return;const _=new(Mc(f)?Ac:Tc)(f,1);_.version=M;const g=a.get(p);g&&t.remove(g),a.set(p,_)}function h(p){const f=a.get(p);if(f){const m=p.index;m!==null&&f.version<m.version&&c(p)}else c(p);return a.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function qu(n,t,e){let i;function s(f){i=f}let a,r;function o(f){a=f.type,r=f.bytesPerElement}function l(f,m){n.drawElements(i,m,a,f*r),e.update(m,i,1)}function c(f,m,v){v!==0&&(n.drawElementsInstanced(i,m,a,f*r,v),e.update(m,i,v))}function h(f,m,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,a,f,0,v);let _=0;for(let g=0;g<v;g++)_+=m[g];e.update(_,i,1)}function p(f,m,v,M){if(v===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<f.length;g++)c(f[g]/r,m[g],M[g]);else{_.multiDrawElementsInstancedWEBGL(i,m,0,a,f,0,M,0,v);let g=0;for(let R=0;R<v;R++)g+=m[R]*M[R];e.update(g,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function Yu(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=o*(a/3);break;case n.LINES:e.lines+=o*(a/2);break;case n.LINE_STRIP:e.lines+=o*(a-1);break;case n.LINE_LOOP:e.lines+=o*a;break;case n.POINTS:e.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Ku(n,t,e){const i=new WeakMap,s=new _e;function a(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==p){let T=function(){I.dispose(),i.delete(o),o.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let A=0;m===!0&&(A=1),v===!0&&(A=2),M===!0&&(A=3);let y=o.attributes.position.count*A,B=1;y>t.maxTextureSize&&(B=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const D=new Float32Array(y*B*4*p),I=new yc(D,y,B,p);I.type=cn,I.needsUpdate=!0;const U=A*4;for(let S=0;S<p;S++){const L=_[S],Y=g[S],q=R[S],Z=y*B*4*S;for(let nt=0;nt<L.count;nt++){const $=nt*U;m===!0&&(s.fromBufferAttribute(L,nt),D[Z+$+0]=s.x,D[Z+$+1]=s.y,D[Z+$+2]=s.z,D[Z+$+3]=0),v===!0&&(s.fromBufferAttribute(Y,nt),D[Z+$+4]=s.x,D[Z+$+5]=s.y,D[Z+$+6]=s.z,D[Z+$+7]=0),M===!0&&(s.fromBufferAttribute(q,nt),D[Z+$+8]=s.x,D[Z+$+9]=s.y,D[Z+$+10]=s.z,D[Z+$+11]=q.itemSize===4?s.w:1)}}f={count:p,texture:I,size:new Ct(y,B)},i.set(o,f),o.addEventListener("dispose",T)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let m=0;for(let M=0;M<c.length;M++)m+=c[M];const v=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:a}}function Ju(n,t,e,i){let s=new WeakMap;function a(l){const c=i.render.frame,h=l.geometry,p=t.get(l,h);if(s.get(p)!==c&&(t.update(p),s.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return p}function r(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:a,dispose:r}}class Lc extends Ce{constructor(t,e,i,s,a,r,o,l,c,h=Si){if(h!==Si&&h!==Ci)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Si&&(i=$n),i===void 0&&h===Ci&&(i=Ri),super(null,s,a,r,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ge,this.minFilter=l!==void 0?l:Ge,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Uc=new Ce,Ao=new Lc(1,1),Nc=new yc,zc=new Nl,Fc=new Pc,Ro=[],Co=[],Po=new Float32Array(16),Do=new Float32Array(9),Io=new Float32Array(4);function zi(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let a=Ro[s];if(a===void 0&&(a=new Float32Array(s),Ro[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,n[r].toArray(a,o)}return a}function we(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ye(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ta(n,t){let e=Co[t];e===void 0&&(e=new Int32Array(t),Co[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Zu(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function $u(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;n.uniform2fv(this.addr,t),ye(e,t)}}function ju(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;n.uniform3fv(this.addr,t),ye(e,t)}}function Qu(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;n.uniform4fv(this.addr,t),ye(e,t)}}function tf(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(we(e,i))return;Io.set(i),n.uniformMatrix2fv(this.addr,!1,Io),ye(e,i)}}function ef(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(we(e,i))return;Do.set(i),n.uniformMatrix3fv(this.addr,!1,Do),ye(e,i)}}function nf(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(we(e,i))return;Po.set(i),n.uniformMatrix4fv(this.addr,!1,Po),ye(e,i)}}function sf(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function af(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;n.uniform2iv(this.addr,t),ye(e,t)}}function rf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;n.uniform3iv(this.addr,t),ye(e,t)}}function of(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;n.uniform4iv(this.addr,t),ye(e,t)}}function cf(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function lf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;n.uniform2uiv(this.addr,t),ye(e,t)}}function df(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;n.uniform3uiv(this.addr,t),ye(e,t)}}function hf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;n.uniform4uiv(this.addr,t),ye(e,t)}}function uf(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let a;this.type===n.SAMPLER_2D_SHADOW?(Ao.compareFunction=vc,a=Ao):a=Uc,e.setTexture2D(t||a,s)}function ff(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||zc,s)}function pf(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Fc,s)}function mf(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Nc,s)}function gf(n){switch(n){case 5126:return Zu;case 35664:return $u;case 35665:return ju;case 35666:return Qu;case 35674:return tf;case 35675:return ef;case 35676:return nf;case 5124:case 35670:return sf;case 35667:case 35671:return af;case 35668:case 35672:return rf;case 35669:case 35673:return of;case 5125:return cf;case 36294:return lf;case 36295:return df;case 36296:return hf;case 35678:case 36198:case 36298:case 36306:case 35682:return uf;case 35679:case 36299:case 36307:return ff;case 35680:case 36300:case 36308:case 36293:return pf;case 36289:case 36303:case 36311:case 36292:return mf}}function _f(n,t){n.uniform1fv(this.addr,t)}function xf(n,t){const e=zi(t,this.size,2);n.uniform2fv(this.addr,e)}function vf(n,t){const e=zi(t,this.size,3);n.uniform3fv(this.addr,e)}function Mf(n,t){const e=zi(t,this.size,4);n.uniform4fv(this.addr,e)}function wf(n,t){const e=zi(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function yf(n,t){const e=zi(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Sf(n,t){const e=zi(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function bf(n,t){n.uniform1iv(this.addr,t)}function Ef(n,t){n.uniform2iv(this.addr,t)}function Tf(n,t){n.uniform3iv(this.addr,t)}function Af(n,t){n.uniform4iv(this.addr,t)}function Rf(n,t){n.uniform1uiv(this.addr,t)}function Cf(n,t){n.uniform2uiv(this.addr,t)}function Pf(n,t){n.uniform3uiv(this.addr,t)}function Df(n,t){n.uniform4uiv(this.addr,t)}function If(n,t,e){const i=this.cache,s=t.length,a=ta(e,s);we(i,a)||(n.uniform1iv(this.addr,a),ye(i,a));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Uc,a[r])}function Lf(n,t,e){const i=this.cache,s=t.length,a=ta(e,s);we(i,a)||(n.uniform1iv(this.addr,a),ye(i,a));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||zc,a[r])}function Uf(n,t,e){const i=this.cache,s=t.length,a=ta(e,s);we(i,a)||(n.uniform1iv(this.addr,a),ye(i,a));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Fc,a[r])}function Nf(n,t,e){const i=this.cache,s=t.length,a=ta(e,s);we(i,a)||(n.uniform1iv(this.addr,a),ye(i,a));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Nc,a[r])}function zf(n){switch(n){case 5126:return _f;case 35664:return xf;case 35665:return vf;case 35666:return Mf;case 35674:return wf;case 35675:return yf;case 35676:return Sf;case 5124:case 35670:return bf;case 35667:case 35671:return Ef;case 35668:case 35672:return Tf;case 35669:case 35673:return Af;case 5125:return Rf;case 36294:return Cf;case 36295:return Pf;case 36296:return Df;case 35678:case 36198:case 36298:case 36306:case 35682:return If;case 35679:case 36299:case 36307:return Lf;case 35680:case 36300:case 36308:case 36293:return Uf;case 36289:case 36303:case 36311:case 36292:return Nf}}class Ff{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=gf(e.type)}}class Of{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=zf(e.type)}}class Bf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(t,e[o.id],i)}}}const Ia=/(\w+)(\])?(\[|\.)?/g;function Lo(n,t){n.seq.push(t),n.map[t.id]=t}function kf(n,t,e){const i=n.name,s=i.length;for(Ia.lastIndex=0;;){const a=Ia.exec(i),r=Ia.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){Lo(e,c===void 0?new Ff(o,n,t):new Of(o,n,t));break}else{let p=e.map[o];p===void 0&&(p=new Bf(o),Lo(e,p)),e=p}}}class qs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=t.getActiveUniform(e,s),r=t.getUniformLocation(e,a.name);kf(a,r,this)}}setValue(t,e,i,s){const a=this.map[e];a!==void 0&&a.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let a=0,r=e.length;a!==r;++a){const o=e[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,a=t.length;s!==a;++s){const r=t[s];r.id in e&&i.push(r)}return i}}function Uo(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Hf=37297;let Gf=0;function Vf(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=s;r<a;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return i.join(`
`)}const No=new Ht;function Wf(n){te._getMatrix(No,te.workingColorSpace,n);const t=`mat3( ${No.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(n)){case Qs:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function zo(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const r=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+Vf(n.getShaderSource(t),r)}else return s}function Xf(n,t){const e=Wf(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function qf(n,t){let e;switch(t){case ll:e="Linear";break;case dl:e="Reinhard";break;case hl:e="Cineon";break;case oc:e="ACESFilmic";break;case fl:e="AgX";break;case pl:e="Neutral";break;case ul:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Us=new E;function Yf(){te.getLuminanceCoefficients(Us);const n=Us.x.toFixed(4),t=Us.y.toFixed(4),e=Us.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kf(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($i).join(`
`)}function Jf(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Zf(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=n.getActiveAttrib(t,s),r=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:n.getAttribLocation(t,r),locationSize:o}}return e}function $i(n){return n!==""}function Fo(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Oo(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const $f=/^[ \t]*#include +<([\w\d./]+)>/gm;function br(n){return n.replace($f,Qf)}const jf=new Map;function Qf(n,t){let e=Gt[t];if(e===void 0){const i=jf.get(t);if(i!==void 0)e=Gt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return br(e)}const tp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bo(n){return n.replace(tp,ep)}function ep(n,t,e,i){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function ko(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function np(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===sc?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===ac?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===_n&&(t="SHADOWMAP_TYPE_VSM"),t}function ip(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ti:case Ai:t="ENVMAP_TYPE_CUBE";break;case js:t="ENVMAP_TYPE_CUBE_UV";break}return t}function sp(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ai:t="ENVMAP_MODE_REFRACTION";break}return t}function ap(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case rc:t="ENVMAP_BLENDING_MULTIPLY";break;case ol:t="ENVMAP_BLENDING_MIX";break;case cl:t="ENVMAP_BLENDING_ADD";break}return t}function rp(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function op(n,t,e,i){const s=n.getContext(),a=e.defines;let r=e.vertexShader,o=e.fragmentShader;const l=np(e),c=ip(e),h=sp(e),p=ap(e),f=rp(e),m=Kf(e),v=Jf(a),M=s.createProgram();let _,g,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter($i).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter($i).join(`
`),g.length>0&&(g+=`
`)):(_=[ko(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($i).join(`
`),g=[ko(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zn?"#define TONE_MAPPING":"",e.toneMapping!==zn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==zn?qf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,Xf("linearToOutputTexel",e.outputColorSpace),Yf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($i).join(`
`)),r=br(r),r=Fo(r,e),r=Oo(r,e),o=br(o),o=Fo(o,e),o=Oo(o,e),r=Bo(r),o=Bo(o),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",e.glslVersion===jr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const A=R+_+r,y=R+g+o,B=Uo(s,s.VERTEX_SHADER,A),D=Uo(s,s.FRAGMENT_SHADER,y);s.attachShader(M,B),s.attachShader(M,D),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function I(L){if(n.debug.checkShaderErrors){const Y=s.getProgramInfoLog(M).trim(),q=s.getShaderInfoLog(B).trim(),Z=s.getShaderInfoLog(D).trim();let nt=!0,$=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(nt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,B,D);else{const rt=zo(s,B,"vertex"),J=zo(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+Y+`
`+rt+`
`+J)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(q===""||Z==="")&&($=!1);$&&(L.diagnostics={runnable:nt,programLog:Y,vertexShader:{log:q,prefix:_},fragmentShader:{log:Z,prefix:g}})}s.deleteShader(B),s.deleteShader(D),U=new qs(s,M),T=Zf(s,M)}let U;this.getUniforms=function(){return U===void 0&&I(this),U};let T;this.getAttributes=function(){return T===void 0&&I(this),T};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(M,Hf)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gf++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=B,this.fragmentShader=D,this}let cp=0;class lp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new dp(t),e.set(t,i)),i}}class dp{constructor(t){this.id=cp++,this.code=t,this.usedTimes=0}}function hp(n,t,e,i,s,a,r){const o=new bc,l=new lp,c=new Set,h=[],p=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return c.add(T),T===0?"uv":`uv${T}`}function _(T,S,L,Y,q){const Z=Y.fog,nt=q.geometry,$=T.isMeshStandardMaterial?Y.environment:null,rt=(T.isMeshStandardMaterial?e:t).get(T.envMap||$),J=rt&&rt.mapping===js?rt.image.height:null,ht=v[T.type];T.precision!==null&&(m=s.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const _t=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,Rt=_t!==void 0?_t.length:0;let Xt=0;nt.morphAttributes.position!==void 0&&(Xt=1),nt.morphAttributes.normal!==void 0&&(Xt=2),nt.morphAttributes.color!==void 0&&(Xt=3);let ie,Q,ot,bt;if(ht){const ne=an[ht];ie=ne.vertexShader,Q=ne.fragmentShader}else ie=T.vertexShader,Q=T.fragmentShader,l.update(T),ot=l.getVertexShaderID(T),bt=l.getFragmentShaderID(T);const ut=n.getRenderTarget(),Lt=n.state.buffers.depth.getReversed(),zt=q.isInstancedMesh===!0,qt=q.isBatchedMesh===!0,he=!!T.map,$t=!!T.matcap,ge=!!rt,k=!!T.aoMap,Ue=!!T.lightMap,Yt=!!T.bumpMap,Kt=!!T.normalMap,Dt=!!T.displacementMap,oe=!!T.emissiveMap,Pt=!!T.metalnessMap,P=!!T.roughnessMap,w=T.anisotropy>0,G=T.clearcoat>0,tt=T.dispersion>0,it=T.iridescence>0,j=T.sheen>0,Tt=T.transmission>0,ft=w&&!!T.anisotropyMap,xt=G&&!!T.clearcoatMap,jt=G&&!!T.clearcoatNormalMap,st=G&&!!T.clearcoatRoughnessMap,vt=it&&!!T.iridescenceMap,It=it&&!!T.iridescenceThicknessMap,Ut=j&&!!T.sheenColorMap,Mt=j&&!!T.sheenRoughnessMap,Jt=!!T.specularMap,kt=!!T.specularColorMap,se=!!T.specularIntensityMap,z=Tt&&!!T.transmissionMap,dt=Tt&&!!T.thicknessMap,K=!!T.gradientMap,et=!!T.alphaMap,gt=T.alphaTest>0,pt=!!T.alphaHash,Ot=!!T.extensions;let pe=zn;T.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(pe=n.toneMapping);const Se={shaderID:ht,shaderType:T.type,shaderName:T.name,vertexShader:ie,fragmentShader:Q,defines:T.defines,customVertexShaderID:ot,customFragmentShaderID:bt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:qt,batchingColor:qt&&q._colorsTexture!==null,instancing:zt,instancingColor:zt&&q.instanceColor!==null,instancingMorph:zt&&q.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ut===null?n.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Di,alphaToCoverage:!!T.alphaToCoverage,map:he,matcap:$t,envMap:ge,envMapMode:ge&&rt.mapping,envMapCubeUVHeight:J,aoMap:k,lightMap:Ue,bumpMap:Yt,normalMap:Kt,displacementMap:f&&Dt,emissiveMap:oe,normalMapObjectSpace:Kt&&T.normalMapType===xl,normalMapTangentSpace:Kt&&T.normalMapType===xc,metalnessMap:Pt,roughnessMap:P,anisotropy:w,anisotropyMap:ft,clearcoat:G,clearcoatMap:xt,clearcoatNormalMap:jt,clearcoatRoughnessMap:st,dispersion:tt,iridescence:it,iridescenceMap:vt,iridescenceThicknessMap:It,sheen:j,sheenColorMap:Ut,sheenRoughnessMap:Mt,specularMap:Jt,specularColorMap:kt,specularIntensityMap:se,transmission:Tt,transmissionMap:z,thicknessMap:dt,gradientMap:K,opaque:T.transparent===!1&&T.blending===yi&&T.alphaToCoverage===!1,alphaMap:et,alphaTest:gt,alphaHash:pt,combine:T.combine,mapUv:he&&M(T.map.channel),aoMapUv:k&&M(T.aoMap.channel),lightMapUv:Ue&&M(T.lightMap.channel),bumpMapUv:Yt&&M(T.bumpMap.channel),normalMapUv:Kt&&M(T.normalMap.channel),displacementMapUv:Dt&&M(T.displacementMap.channel),emissiveMapUv:oe&&M(T.emissiveMap.channel),metalnessMapUv:Pt&&M(T.metalnessMap.channel),roughnessMapUv:P&&M(T.roughnessMap.channel),anisotropyMapUv:ft&&M(T.anisotropyMap.channel),clearcoatMapUv:xt&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:jt&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:It&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&M(T.sheenRoughnessMap.channel),specularMapUv:Jt&&M(T.specularMap.channel),specularColorMapUv:kt&&M(T.specularColorMap.channel),specularIntensityMapUv:se&&M(T.specularIntensityMap.channel),transmissionMapUv:z&&M(T.transmissionMap.channel),thicknessMapUv:dt&&M(T.thicknessMap.channel),alphaMapUv:et&&M(T.alphaMap.channel),vertexTangents:!!nt.attributes.tangent&&(Kt||w),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!nt.attributes.uv&&(he||et),fog:!!Z,useFog:T.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:Lt,skinning:q.isSkinnedMesh===!0,morphTargets:nt.morphAttributes.position!==void 0,morphNormals:nt.morphAttributes.normal!==void 0,morphColors:nt.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:Xt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:pe,decodeVideoTexture:he&&T.map.isVideoTexture===!0&&te.getTransfer(T.map.colorSpace)===re,decodeVideoTextureEmissive:oe&&T.emissiveMap.isVideoTexture===!0&&te.getTransfer(T.emissiveMap.colorSpace)===re,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===rn,flipSided:T.side===Ie,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ot&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&T.extensions.multiDraw===!0||qt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Se.vertexUv1s=c.has(1),Se.vertexUv2s=c.has(2),Se.vertexUv3s=c.has(3),c.clear(),Se}function g(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const L in T.defines)S.push(L),S.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(R(S,T),A(S,T),S.push(n.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function R(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function A(T,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),T.push(o.mask)}function y(T){const S=v[T.type];let L;if(S){const Y=an[S];L=Yl.clone(Y.uniforms)}else L=T.uniforms;return L}function B(T,S){let L;for(let Y=0,q=h.length;Y<q;Y++){const Z=h[Y];if(Z.cacheKey===S){L=Z,++L.usedTimes;break}}return L===void 0&&(L=new op(n,S,T,a),h.push(L)),L}function D(T){if(--T.usedTimes===0){const S=h.indexOf(T);h[S]=h[h.length-1],h.pop(),T.destroy()}}function I(T){l.remove(T)}function U(){l.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:y,acquireProgram:B,releaseProgram:D,releaseShaderCache:I,programs:h,dispose:U}}function up(){let n=new WeakMap;function t(r){return n.has(r)}function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function i(r){n.delete(r)}function s(r,o,l){n.get(r)[o]=l}function a(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:a}}function fp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Ho(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Go(){const n=[];let t=0;const e=[],i=[],s=[];function a(){t=0,e.length=0,i.length=0,s.length=0}function r(p,f,m,v,M,_){let g=n[t];return g===void 0?(g={id:p.id,object:p,geometry:f,material:m,groupOrder:v,renderOrder:p.renderOrder,z:M,group:_},n[t]=g):(g.id=p.id,g.object=p,g.geometry=f,g.material=m,g.groupOrder=v,g.renderOrder=p.renderOrder,g.z=M,g.group=_),t++,g}function o(p,f,m,v,M,_){const g=r(p,f,m,v,M,_);m.transmission>0?i.push(g):m.transparent===!0?s.push(g):e.push(g)}function l(p,f,m,v,M,_){const g=r(p,f,m,v,M,_);m.transmission>0?i.unshift(g):m.transparent===!0?s.unshift(g):e.unshift(g)}function c(p,f){e.length>1&&e.sort(p||fp),i.length>1&&i.sort(f||Ho),s.length>1&&s.sort(f||Ho)}function h(){for(let p=t,f=n.length;p<f;p++){const m=n[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:a,push:o,unshift:l,finish:h,sort:c}}function pp(){let n=new WeakMap;function t(i,s){const a=n.get(i);let r;return a===void 0?(r=new Go,n.set(i,[r])):s>=a.length?(r=new Go,a.push(r)):r=a[s],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function mp(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new E,color:new Vt};break;case"SpotLight":e={position:new E,direction:new E,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new E,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new E,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new E,halfWidth:new E,halfHeight:new E};break}return n[t.id]=e,e}}}function gp(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let _p=0;function xp(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function vp(n){const t=new mp,e=gp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new E);const s=new E,a=new de,r=new de;function o(c){let h=0,p=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let m=0,v=0,M=0,_=0,g=0,R=0,A=0,y=0,B=0,D=0,I=0;c.sort(xp);for(let T=0,S=c.length;T<S;T++){const L=c[T],Y=L.color,q=L.intensity,Z=L.distance,nt=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=Y.r*q,p+=Y.g*q,f+=Y.b*q;else if(L.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(L.sh.coefficients[$],q);I++}else if(L.isDirectionalLight){const $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const rt=L.shadow,J=e.get(L);J.shadowIntensity=rt.intensity,J.shadowBias=rt.bias,J.shadowNormalBias=rt.normalBias,J.shadowRadius=rt.radius,J.shadowMapSize=rt.mapSize,i.directionalShadow[m]=J,i.directionalShadowMap[m]=nt,i.directionalShadowMatrix[m]=L.shadow.matrix,R++}i.directional[m]=$,m++}else if(L.isSpotLight){const $=t.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(Y).multiplyScalar(q),$.distance=Z,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,i.spot[M]=$;const rt=L.shadow;if(L.map&&(i.spotLightMap[B]=L.map,B++,rt.updateMatrices(L),L.castShadow&&D++),i.spotLightMatrix[M]=rt.matrix,L.castShadow){const J=e.get(L);J.shadowIntensity=rt.intensity,J.shadowBias=rt.bias,J.shadowNormalBias=rt.normalBias,J.shadowRadius=rt.radius,J.shadowMapSize=rt.mapSize,i.spotShadow[M]=J,i.spotShadowMap[M]=nt,y++}M++}else if(L.isRectAreaLight){const $=t.get(L);$.color.copy(Y).multiplyScalar(q),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),i.rectArea[_]=$,_++}else if(L.isPointLight){const $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),$.distance=L.distance,$.decay=L.decay,L.castShadow){const rt=L.shadow,J=e.get(L);J.shadowIntensity=rt.intensity,J.shadowBias=rt.bias,J.shadowNormalBias=rt.normalBias,J.shadowRadius=rt.radius,J.shadowMapSize=rt.mapSize,J.shadowCameraNear=rt.camera.near,J.shadowCameraFar=rt.camera.far,i.pointShadow[v]=J,i.pointShadowMap[v]=nt,i.pointShadowMatrix[v]=L.shadow.matrix,A++}i.point[v]=$,v++}else if(L.isHemisphereLight){const $=t.get(L);$.skyColor.copy(L.color).multiplyScalar(q),$.groundColor.copy(L.groundColor).multiplyScalar(q),i.hemi[g]=$,g++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=f;const U=i.hash;(U.directionalLength!==m||U.pointLength!==v||U.spotLength!==M||U.rectAreaLength!==_||U.hemiLength!==g||U.numDirectionalShadows!==R||U.numPointShadows!==A||U.numSpotShadows!==y||U.numSpotMaps!==B||U.numLightProbes!==I)&&(i.directional.length=m,i.spot.length=M,i.rectArea.length=_,i.point.length=v,i.hemi.length=g,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=y+B-D,i.spotLightMap.length=B,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=I,U.directionalLength=m,U.pointLength=v,U.spotLength=M,U.rectAreaLength=_,U.hemiLength=g,U.numDirectionalShadows=R,U.numPointShadows=A,U.numSpotShadows=y,U.numSpotMaps=B,U.numLightProbes=I,i.version=_p++)}function l(c,h){let p=0,f=0,m=0,v=0,M=0;const _=h.matrixWorldInverse;for(let g=0,R=c.length;g<R;g++){const A=c[g];if(A.isDirectionalLight){const y=i.directional[p];y.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(_),p++}else if(A.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(_),m++}else if(A.isRectAreaLight){const y=i.rectArea[v];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(_),r.identity(),a.copy(A.matrixWorld),a.premultiply(_),r.extractRotation(a),y.halfWidth.set(A.width*.5,0,0),y.halfHeight.set(0,A.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),v++}else if(A.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(_),f++}else if(A.isHemisphereLight){const y=i.hemi[M];y.direction.setFromMatrixPosition(A.matrixWorld),y.direction.transformDirection(_),M++}}}return{setup:o,setupView:l,state:i}}function Vo(n){const t=new vp(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function a(h){e.push(h)}function r(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function Mp(n){let t=new WeakMap;function e(s,a=0){const r=t.get(s);let o;return r===void 0?(o=new Vo(n),t.set(s,[o])):a>=r.length?(o=new Vo(n),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class wp extends Ui{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=gl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class yp extends Ui{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Sp=`void main() {
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
}`;function Ep(n,t,e){let i=new zr;const s=new Ct,a=new Ct,r=new _e,o=new wp({depthPacking:_l}),l=new yp,c={},h=e.maxTextureSize,p={[Fn]:Ie,[Ie]:Fn,[rn]:rn},f=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:Sp,fragmentShader:bp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new Le;v.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new le(v,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sc;let g=this.type;this.render=function(D,I,U){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||D.length===0)return;const T=n.getRenderTarget(),S=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(Nn),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const q=g!==_n&&this.type===_n,Z=g===_n&&this.type!==_n;for(let nt=0,$=D.length;nt<$;nt++){const rt=D[nt],J=rt.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);const ht=J.getFrameExtents();if(s.multiply(ht),a.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/ht.x),s.x=a.x*ht.x,J.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/ht.y),s.y=a.y*ht.y,J.mapSize.y=a.y)),J.map===null||q===!0||Z===!0){const Rt=this.type!==_n?{minFilter:Ge,magFilter:Ge}:{};J.map!==null&&J.map.dispose(),J.map=new jn(s.x,s.y,Rt),J.map.texture.name=rt.name+".shadowMap",J.camera.updateProjectionMatrix()}n.setRenderTarget(J.map),n.clear();const _t=J.getViewportCount();for(let Rt=0;Rt<_t;Rt++){const Xt=J.getViewport(Rt);r.set(a.x*Xt.x,a.y*Xt.y,a.x*Xt.z,a.y*Xt.w),Y.viewport(r),J.updateMatrices(rt,Rt),i=J.getFrustum(),y(I,U,J.camera,rt,this.type)}J.isPointLightShadow!==!0&&this.type===_n&&R(J,U),J.needsUpdate=!1}g=this.type,_.needsUpdate=!1,n.setRenderTarget(T,S,L)};function R(D,I){const U=t.update(M);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,m.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new jn(s.x,s.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(I,null,U,f,M,null),m.uniforms.shadow_pass.value=D.mapPass.texture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(I,null,U,m,M,null)}function A(D,I,U,T){let S=null;const L=U.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(L!==void 0)S=L;else if(S=U.isPointLight===!0?l:o,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const Y=S.uuid,q=I.uuid;let Z=c[Y];Z===void 0&&(Z={},c[Y]=Z);let nt=Z[q];nt===void 0&&(nt=S.clone(),Z[q]=nt,I.addEventListener("dispose",B)),S=nt}if(S.visible=I.visible,S.wireframe=I.wireframe,T===_n?S.side=I.shadowSide!==null?I.shadowSide:I.side:S.side=I.shadowSide!==null?I.shadowSide:p[I.side],S.alphaMap=I.alphaMap,S.alphaTest=I.alphaTest,S.map=I.map,S.clipShadows=I.clipShadows,S.clippingPlanes=I.clippingPlanes,S.clipIntersection=I.clipIntersection,S.displacementMap=I.displacementMap,S.displacementScale=I.displacementScale,S.displacementBias=I.displacementBias,S.wireframeLinewidth=I.wireframeLinewidth,S.linewidth=I.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const Y=n.properties.get(S);Y.light=U}return S}function y(D,I,U,T,S){if(D.visible===!1)return;if(D.layers.test(I.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&S===_n)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,D.matrixWorld);const q=t.update(D),Z=D.material;if(Array.isArray(Z)){const nt=q.groups;for(let $=0,rt=nt.length;$<rt;$++){const J=nt[$],ht=Z[J.materialIndex];if(ht&&ht.visible){const _t=A(D,ht,T,S);D.onBeforeShadow(n,D,I,U,q,_t,J),n.renderBufferDirect(U,null,q,_t,D,J),D.onAfterShadow(n,D,I,U,q,_t,J)}}}else if(Z.visible){const nt=A(D,Z,T,S);D.onBeforeShadow(n,D,I,U,q,nt,null),n.renderBufferDirect(U,null,q,nt,D,null),D.onAfterShadow(n,D,I,U,q,nt,null)}}const Y=D.children;for(let q=0,Z=Y.length;q<Z;q++)y(Y[q],I,U,T,S)}function B(D){D.target.removeEventListener("dispose",B);for(const U in c){const T=c[U],S=D.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}const Tp={[ka]:Ha,[Ga]:Xa,[Va]:qa,[Ei]:Wa,[Ha]:ka,[Xa]:Ga,[qa]:Va,[Wa]:Ei};function Ap(n,t){function e(){let z=!1;const dt=new _e;let K=null;const et=new _e(0,0,0,0);return{setMask:function(gt){K!==gt&&!z&&(n.colorMask(gt,gt,gt,gt),K=gt)},setLocked:function(gt){z=gt},setClear:function(gt,pt,Ot,pe,Se){Se===!0&&(gt*=pe,pt*=pe,Ot*=pe),dt.set(gt,pt,Ot,pe),et.equals(dt)===!1&&(n.clearColor(gt,pt,Ot,pe),et.copy(dt))},reset:function(){z=!1,K=null,et.set(-1,0,0,0)}}}function i(){let z=!1,dt=!1,K=null,et=null,gt=null;return{setReversed:function(pt){if(dt!==pt){const Ot=t.get("EXT_clip_control");dt?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT);const pe=gt;gt=null,this.setClear(pe)}dt=pt},getReversed:function(){return dt},setTest:function(pt){pt?ut(n.DEPTH_TEST):Lt(n.DEPTH_TEST)},setMask:function(pt){K!==pt&&!z&&(n.depthMask(pt),K=pt)},setFunc:function(pt){if(dt&&(pt=Tp[pt]),et!==pt){switch(pt){case ka:n.depthFunc(n.NEVER);break;case Ha:n.depthFunc(n.ALWAYS);break;case Ga:n.depthFunc(n.LESS);break;case Ei:n.depthFunc(n.LEQUAL);break;case Va:n.depthFunc(n.EQUAL);break;case Wa:n.depthFunc(n.GEQUAL);break;case Xa:n.depthFunc(n.GREATER);break;case qa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}et=pt}},setLocked:function(pt){z=pt},setClear:function(pt){gt!==pt&&(dt&&(pt=1-pt),n.clearDepth(pt),gt=pt)},reset:function(){z=!1,K=null,et=null,gt=null,dt=!1}}}function s(){let z=!1,dt=null,K=null,et=null,gt=null,pt=null,Ot=null,pe=null,Se=null;return{setTest:function(ne){z||(ne?ut(n.STENCIL_TEST):Lt(n.STENCIL_TEST))},setMask:function(ne){dt!==ne&&!z&&(n.stencilMask(ne),dt=ne)},setFunc:function(ne,Oe,qe){(K!==ne||et!==Oe||gt!==qe)&&(n.stencilFunc(ne,Oe,qe),K=ne,et=Oe,gt=qe)},setOp:function(ne,Oe,qe){(pt!==ne||Ot!==Oe||pe!==qe)&&(n.stencilOp(ne,Oe,qe),pt=ne,Ot=Oe,pe=qe)},setLocked:function(ne){z=ne},setClear:function(ne){Se!==ne&&(n.clearStencil(ne),Se=ne)},reset:function(){z=!1,dt=null,K=null,et=null,gt=null,pt=null,Ot=null,pe=null,Se=null}}}const a=new e,r=new i,o=new s,l=new WeakMap,c=new WeakMap;let h={},p={},f=new WeakMap,m=[],v=null,M=!1,_=null,g=null,R=null,A=null,y=null,B=null,D=null,I=new Vt(0,0,0),U=0,T=!1,S=null,L=null,Y=null,q=null,Z=null;const nt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,rt=0;const J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(J)[1]),$=rt>=1):J.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),$=rt>=2);let ht=null,_t={};const Rt=n.getParameter(n.SCISSOR_BOX),Xt=n.getParameter(n.VIEWPORT),ie=new _e().fromArray(Rt),Q=new _e().fromArray(Xt);function ot(z,dt,K,et){const gt=new Uint8Array(4),pt=n.createTexture();n.bindTexture(z,pt),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ot=0;Ot<K;Ot++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(dt,0,n.RGBA,1,1,et,0,n.RGBA,n.UNSIGNED_BYTE,gt):n.texImage2D(dt+Ot,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,gt);return pt}const bt={};bt[n.TEXTURE_2D]=ot(n.TEXTURE_2D,n.TEXTURE_2D,1),bt[n.TEXTURE_CUBE_MAP]=ot(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[n.TEXTURE_2D_ARRAY]=ot(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),bt[n.TEXTURE_3D]=ot(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ut(n.DEPTH_TEST),r.setFunc(Ei),Yt(!1),Kt(qr),ut(n.CULL_FACE),k(Nn);function ut(z){h[z]!==!0&&(n.enable(z),h[z]=!0)}function Lt(z){h[z]!==!1&&(n.disable(z),h[z]=!1)}function zt(z,dt){return p[z]!==dt?(n.bindFramebuffer(z,dt),p[z]=dt,z===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=dt),z===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=dt),!0):!1}function qt(z,dt){let K=m,et=!1;if(z){K=f.get(dt),K===void 0&&(K=[],f.set(dt,K));const gt=z.textures;if(K.length!==gt.length||K[0]!==n.COLOR_ATTACHMENT0){for(let pt=0,Ot=gt.length;pt<Ot;pt++)K[pt]=n.COLOR_ATTACHMENT0+pt;K.length=gt.length,et=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,et=!0);et&&n.drawBuffers(K)}function he(z){return v!==z?(n.useProgram(z),v=z,!0):!1}const $t={[Yn]:n.FUNC_ADD,[Wc]:n.FUNC_SUBTRACT,[Xc]:n.FUNC_REVERSE_SUBTRACT};$t[qc]=n.MIN,$t[Yc]=n.MAX;const ge={[Kc]:n.ZERO,[Jc]:n.ONE,[Zc]:n.SRC_COLOR,[Oa]:n.SRC_ALPHA,[nl]:n.SRC_ALPHA_SATURATE,[tl]:n.DST_COLOR,[jc]:n.DST_ALPHA,[$c]:n.ONE_MINUS_SRC_COLOR,[Ba]:n.ONE_MINUS_SRC_ALPHA,[el]:n.ONE_MINUS_DST_COLOR,[Qc]:n.ONE_MINUS_DST_ALPHA,[il]:n.CONSTANT_COLOR,[sl]:n.ONE_MINUS_CONSTANT_COLOR,[al]:n.CONSTANT_ALPHA,[rl]:n.ONE_MINUS_CONSTANT_ALPHA};function k(z,dt,K,et,gt,pt,Ot,pe,Se,ne){if(z===Nn){M===!0&&(Lt(n.BLEND),M=!1);return}if(M===!1&&(ut(n.BLEND),M=!0),z!==Vc){if(z!==_||ne!==T){if((g!==Yn||y!==Yn)&&(n.blendEquation(n.FUNC_ADD),g=Yn,y=Yn),ne)switch(z){case yi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yr:n.blendFunc(n.ONE,n.ONE);break;case Kr:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jr:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case yi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Kr:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jr:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}R=null,A=null,B=null,D=null,I.set(0,0,0),U=0,_=z,T=ne}return}gt=gt||dt,pt=pt||K,Ot=Ot||et,(dt!==g||gt!==y)&&(n.blendEquationSeparate($t[dt],$t[gt]),g=dt,y=gt),(K!==R||et!==A||pt!==B||Ot!==D)&&(n.blendFuncSeparate(ge[K],ge[et],ge[pt],ge[Ot]),R=K,A=et,B=pt,D=Ot),(pe.equals(I)===!1||Se!==U)&&(n.blendColor(pe.r,pe.g,pe.b,Se),I.copy(pe),U=Se),_=z,T=!1}function Ue(z,dt){z.side===rn?Lt(n.CULL_FACE):ut(n.CULL_FACE);let K=z.side===Ie;dt&&(K=!K),Yt(K),z.blending===yi&&z.transparent===!1?k(Nn):k(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),r.setFunc(z.depthFunc),r.setTest(z.depthTest),r.setMask(z.depthWrite),a.setMask(z.colorWrite);const et=z.stencilWrite;o.setTest(et),et&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),oe(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ut(n.SAMPLE_ALPHA_TO_COVERAGE):Lt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(z){S!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),S=z)}function Kt(z){z!==Hc?(ut(n.CULL_FACE),z!==L&&(z===qr?n.cullFace(n.BACK):z===Gc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Lt(n.CULL_FACE),L=z}function Dt(z){z!==Y&&($&&n.lineWidth(z),Y=z)}function oe(z,dt,K){z?(ut(n.POLYGON_OFFSET_FILL),(q!==dt||Z!==K)&&(n.polygonOffset(dt,K),q=dt,Z=K)):Lt(n.POLYGON_OFFSET_FILL)}function Pt(z){z?ut(n.SCISSOR_TEST):Lt(n.SCISSOR_TEST)}function P(z){z===void 0&&(z=n.TEXTURE0+nt-1),ht!==z&&(n.activeTexture(z),ht=z)}function w(z,dt,K){K===void 0&&(ht===null?K=n.TEXTURE0+nt-1:K=ht);let et=_t[K];et===void 0&&(et={type:void 0,texture:void 0},_t[K]=et),(et.type!==z||et.texture!==dt)&&(ht!==K&&(n.activeTexture(K),ht=K),n.bindTexture(z,dt||bt[z]),et.type=z,et.texture=dt)}function G(){const z=_t[ht];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function tt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function it(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function j(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Tt(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ft(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function jt(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function st(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function vt(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function It(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ut(z){ie.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),ie.copy(z))}function Mt(z){Q.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),Q.copy(z))}function Jt(z,dt){let K=c.get(dt);K===void 0&&(K=new WeakMap,c.set(dt,K));let et=K.get(z);et===void 0&&(et=n.getUniformBlockIndex(dt,z.name),K.set(z,et))}function kt(z,dt){const et=c.get(dt).get(z);l.get(dt)!==et&&(n.uniformBlockBinding(dt,et,z.__bindingPointIndex),l.set(dt,et))}function se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ht=null,_t={},p={},f=new WeakMap,m=[],v=null,M=!1,_=null,g=null,R=null,A=null,y=null,B=null,D=null,I=new Vt(0,0,0),U=0,T=!1,S=null,L=null,Y=null,q=null,Z=null,ie.set(0,0,n.canvas.width,n.canvas.height),Q.set(0,0,n.canvas.width,n.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:ut,disable:Lt,bindFramebuffer:zt,drawBuffers:qt,useProgram:he,setBlending:k,setMaterial:Ue,setFlipSided:Yt,setCullFace:Kt,setLineWidth:Dt,setPolygonOffset:oe,setScissorTest:Pt,activeTexture:P,bindTexture:w,unbindTexture:G,compressedTexImage2D:tt,compressedTexImage3D:it,texImage2D:vt,texImage3D:It,updateUBOMapping:Jt,uniformBlockBinding:kt,texStorage2D:jt,texStorage3D:st,texSubImage2D:j,texSubImage3D:Tt,compressedTexSubImage2D:ft,compressedTexSubImage3D:xt,scissor:Ut,viewport:Mt,reset:se}}function Wo(n,t,e,i){const s=Rp(i);switch(e){case uc:return n*t;case pc:return n*t;case mc:return n*t*2;case Dr:return n*t/s.components*s.byteLength;case Ir:return n*t/s.components*s.byteLength;case gc:return n*t*2/s.components*s.byteLength;case Lr:return n*t*2/s.components*s.byteLength;case fc:return n*t*3/s.components*s.byteLength;case tn:return n*t*4/s.components*s.byteLength;case Ur:return n*t*4/s.components*s.byteLength;case Hs:case Gs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Vs:case Ws:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ja:case tr:return Math.max(n,16)*Math.max(t,8)/4;case $a:case Qa:return Math.max(n,8)*Math.max(t,8)/2;case er:case nr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ir:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case sr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ar:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case rr:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case or:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case cr:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case lr:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case dr:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case hr:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case ur:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case fr:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case pr:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case mr:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case gr:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case _r:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Xs:case xr:case vr:return Math.ceil(n/4)*Math.ceil(t/4)*16;case _c:case Mr:return Math.ceil(n/4)*Math.ceil(t/4)*8;case wr:case yr:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Rp(n){switch(n){case wn:case lc:return{byteLength:1,components:1};case ts:case dc:case ns:return{byteLength:2,components:1};case Cr:case Pr:return{byteLength:2,components:4};case $n:case Rr:case cn:return{byteLength:4,components:1};case hc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Cp(n,t,e,i,s,a,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ct,h=new WeakMap;let p;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,w){return m?new OffscreenCanvas(P,w):Js("canvas")}function M(P,w,G){let tt=1;const it=Pt(P);if((it.width>G||it.height>G)&&(tt=G/Math.max(it.width,it.height)),tt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const j=Math.floor(tt*it.width),Tt=Math.floor(tt*it.height);p===void 0&&(p=v(j,Tt));const ft=w?v(j,Tt):p;return ft.width=j,ft.height=Tt,ft.getContext("2d").drawImage(P,0,0,j,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+j+"x"+Tt+")."),ft}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),P;return P}function _(P){return P.generateMipmaps}function g(P){n.generateMipmap(P)}function R(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(P,w,G,tt,it=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let j=w;if(w===n.RED&&(G===n.FLOAT&&(j=n.R32F),G===n.HALF_FLOAT&&(j=n.R16F),G===n.UNSIGNED_BYTE&&(j=n.R8)),w===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(j=n.R8UI),G===n.UNSIGNED_SHORT&&(j=n.R16UI),G===n.UNSIGNED_INT&&(j=n.R32UI),G===n.BYTE&&(j=n.R8I),G===n.SHORT&&(j=n.R16I),G===n.INT&&(j=n.R32I)),w===n.RG&&(G===n.FLOAT&&(j=n.RG32F),G===n.HALF_FLOAT&&(j=n.RG16F),G===n.UNSIGNED_BYTE&&(j=n.RG8)),w===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(j=n.RG8UI),G===n.UNSIGNED_SHORT&&(j=n.RG16UI),G===n.UNSIGNED_INT&&(j=n.RG32UI),G===n.BYTE&&(j=n.RG8I),G===n.SHORT&&(j=n.RG16I),G===n.INT&&(j=n.RG32I)),w===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(j=n.RGB8UI),G===n.UNSIGNED_SHORT&&(j=n.RGB16UI),G===n.UNSIGNED_INT&&(j=n.RGB32UI),G===n.BYTE&&(j=n.RGB8I),G===n.SHORT&&(j=n.RGB16I),G===n.INT&&(j=n.RGB32I)),w===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),G===n.UNSIGNED_INT&&(j=n.RGBA32UI),G===n.BYTE&&(j=n.RGBA8I),G===n.SHORT&&(j=n.RGBA16I),G===n.INT&&(j=n.RGBA32I)),w===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),w===n.RGBA){const Tt=it?Qs:te.getTransfer(tt);G===n.FLOAT&&(j=n.RGBA32F),G===n.HALF_FLOAT&&(j=n.RGBA16F),G===n.UNSIGNED_BYTE&&(j=Tt===re?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function y(P,w){let G;return P?w===null||w===$n||w===Ri?G=n.DEPTH24_STENCIL8:w===cn?G=n.DEPTH32F_STENCIL8:w===ts&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===$n||w===Ri?G=n.DEPTH_COMPONENT24:w===cn?G=n.DEPTH_COMPONENT32F:w===ts&&(G=n.DEPTH_COMPONENT16),G}function B(P,w){return _(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ge&&P.minFilter!==on?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function D(P){const w=P.target;w.removeEventListener("dispose",D),U(w),w.isVideoTexture&&h.delete(w)}function I(P){const w=P.target;w.removeEventListener("dispose",I),S(w)}function U(P){const w=i.get(P);if(w.__webglInit===void 0)return;const G=P.source,tt=f.get(G);if(tt){const it=tt[w.__cacheKey];it.usedTimes--,it.usedTimes===0&&T(P),Object.keys(tt).length===0&&f.delete(G)}i.remove(P)}function T(P){const w=i.get(P);n.deleteTexture(w.__webglTexture);const G=P.source,tt=f.get(G);delete tt[w.__cacheKey],r.memory.textures--}function S(P){const w=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(w.__webglFramebuffer[tt]))for(let it=0;it<w.__webglFramebuffer[tt].length;it++)n.deleteFramebuffer(w.__webglFramebuffer[tt][it]);else n.deleteFramebuffer(w.__webglFramebuffer[tt]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[tt])}else{if(Array.isArray(w.__webglFramebuffer))for(let tt=0;tt<w.__webglFramebuffer.length;tt++)n.deleteFramebuffer(w.__webglFramebuffer[tt]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let tt=0;tt<w.__webglColorRenderbuffer.length;tt++)w.__webglColorRenderbuffer[tt]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[tt]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const G=P.textures;for(let tt=0,it=G.length;tt<it;tt++){const j=i.get(G[tt]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),r.memory.textures--),i.remove(G[tt])}i.remove(P)}let L=0;function Y(){L=0}function q(){const P=L;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),L+=1,P}function Z(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function nt(P,w){const G=i.get(P);if(P.isVideoTexture&&Dt(P),P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){const tt=P.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(G,P,w);return}}e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+w)}function $(P,w){const G=i.get(P);if(P.version>0&&G.__version!==P.version){Q(G,P,w);return}e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+w)}function rt(P,w){const G=i.get(P);if(P.version>0&&G.__version!==P.version){Q(G,P,w);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+w)}function J(P,w){const G=i.get(P);if(P.version>0&&G.__version!==P.version){ot(G,P,w);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+w)}const ht={[Ja]:n.REPEAT,[Jn]:n.CLAMP_TO_EDGE,[Za]:n.MIRRORED_REPEAT},_t={[Ge]:n.NEAREST,[ml]:n.NEAREST_MIPMAP_NEAREST,[ps]:n.NEAREST_MIPMAP_LINEAR,[on]:n.LINEAR,[sa]:n.LINEAR_MIPMAP_NEAREST,[Zn]:n.LINEAR_MIPMAP_LINEAR},Rt={[vl]:n.NEVER,[El]:n.ALWAYS,[Ml]:n.LESS,[vc]:n.LEQUAL,[wl]:n.EQUAL,[bl]:n.GEQUAL,[yl]:n.GREATER,[Sl]:n.NOTEQUAL};function Xt(P,w){if(w.type===cn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===on||w.magFilter===sa||w.magFilter===ps||w.magFilter===Zn||w.minFilter===on||w.minFilter===sa||w.minFilter===ps||w.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,ht[w.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,ht[w.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,ht[w.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,_t[w.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,_t[w.minFilter]),w.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Rt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ge||w.minFilter!==ps&&w.minFilter!==Zn||w.type===cn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");n.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function ie(P,w){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",D));const tt=w.source;let it=f.get(tt);it===void 0&&(it={},f.set(tt,it));const j=Z(w);if(j!==P.__cacheKey){it[j]===void 0&&(it[j]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,G=!0),it[j].usedTimes++;const Tt=it[P.__cacheKey];Tt!==void 0&&(it[P.__cacheKey].usedTimes--,Tt.usedTimes===0&&T(w)),P.__cacheKey=j,P.__webglTexture=it[j].texture}return G}function Q(P,w,G){let tt=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(tt=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(tt=n.TEXTURE_3D);const it=ie(P,w),j=w.source;e.bindTexture(tt,P.__webglTexture,n.TEXTURE0+G);const Tt=i.get(j);if(j.version!==Tt.__version||it===!0){e.activeTexture(n.TEXTURE0+G);const ft=te.getPrimaries(te.workingColorSpace),xt=w.colorSpace===Un?null:te.getPrimaries(w.colorSpace),jt=w.colorSpace===Un||ft===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let st=M(w.image,!1,s.maxTextureSize);st=oe(w,st);const vt=a.convert(w.format,w.colorSpace),It=a.convert(w.type);let Ut=A(w.internalFormat,vt,It,w.colorSpace,w.isVideoTexture);Xt(tt,w);let Mt;const Jt=w.mipmaps,kt=w.isVideoTexture!==!0,se=Tt.__version===void 0||it===!0,z=j.dataReady,dt=B(w,st);if(w.isDepthTexture)Ut=y(w.format===Ci,w.type),se&&(kt?e.texStorage2D(n.TEXTURE_2D,1,Ut,st.width,st.height):e.texImage2D(n.TEXTURE_2D,0,Ut,st.width,st.height,0,vt,It,null));else if(w.isDataTexture)if(Jt.length>0){kt&&se&&e.texStorage2D(n.TEXTURE_2D,dt,Ut,Jt[0].width,Jt[0].height);for(let K=0,et=Jt.length;K<et;K++)Mt=Jt[K],kt?z&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,Mt.width,Mt.height,vt,It,Mt.data):e.texImage2D(n.TEXTURE_2D,K,Ut,Mt.width,Mt.height,0,vt,It,Mt.data);w.generateMipmaps=!1}else kt?(se&&e.texStorage2D(n.TEXTURE_2D,dt,Ut,st.width,st.height),z&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,st.width,st.height,vt,It,st.data)):e.texImage2D(n.TEXTURE_2D,0,Ut,st.width,st.height,0,vt,It,st.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){kt&&se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,Ut,Jt[0].width,Jt[0].height,st.depth);for(let K=0,et=Jt.length;K<et;K++)if(Mt=Jt[K],w.format!==tn)if(vt!==null)if(kt){if(z)if(w.layerUpdates.size>0){const gt=Wo(Mt.width,Mt.height,w.format,w.type);for(const pt of w.layerUpdates){const Ot=Mt.data.subarray(pt*gt/Mt.data.BYTES_PER_ELEMENT,(pt+1)*gt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,pt,Mt.width,Mt.height,1,vt,Ot)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Mt.width,Mt.height,st.depth,vt,Mt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,Ut,Mt.width,Mt.height,st.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?z&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Mt.width,Mt.height,st.depth,vt,It,Mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,K,Ut,Mt.width,Mt.height,st.depth,0,vt,It,Mt.data)}else{kt&&se&&e.texStorage2D(n.TEXTURE_2D,dt,Ut,Jt[0].width,Jt[0].height);for(let K=0,et=Jt.length;K<et;K++)Mt=Jt[K],w.format!==tn?vt!==null?kt?z&&e.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,Mt.width,Mt.height,vt,Mt.data):e.compressedTexImage2D(n.TEXTURE_2D,K,Ut,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?z&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,Mt.width,Mt.height,vt,It,Mt.data):e.texImage2D(n.TEXTURE_2D,K,Ut,Mt.width,Mt.height,0,vt,It,Mt.data)}else if(w.isDataArrayTexture)if(kt){if(se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,Ut,st.width,st.height,st.depth),z)if(w.layerUpdates.size>0){const K=Wo(st.width,st.height,w.format,w.type);for(const et of w.layerUpdates){const gt=st.data.subarray(et*K/st.data.BYTES_PER_ELEMENT,(et+1)*K/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,et,st.width,st.height,1,vt,It,gt)}w.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,vt,It,st.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ut,st.width,st.height,st.depth,0,vt,It,st.data);else if(w.isData3DTexture)kt?(se&&e.texStorage3D(n.TEXTURE_3D,dt,Ut,st.width,st.height,st.depth),z&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,vt,It,st.data)):e.texImage3D(n.TEXTURE_3D,0,Ut,st.width,st.height,st.depth,0,vt,It,st.data);else if(w.isFramebufferTexture){if(se)if(kt)e.texStorage2D(n.TEXTURE_2D,dt,Ut,st.width,st.height);else{let K=st.width,et=st.height;for(let gt=0;gt<dt;gt++)e.texImage2D(n.TEXTURE_2D,gt,Ut,K,et,0,vt,It,null),K>>=1,et>>=1}}else if(Jt.length>0){if(kt&&se){const K=Pt(Jt[0]);e.texStorage2D(n.TEXTURE_2D,dt,Ut,K.width,K.height)}for(let K=0,et=Jt.length;K<et;K++)Mt=Jt[K],kt?z&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,vt,It,Mt):e.texImage2D(n.TEXTURE_2D,K,Ut,vt,It,Mt);w.generateMipmaps=!1}else if(kt){if(se){const K=Pt(st);e.texStorage2D(n.TEXTURE_2D,dt,Ut,K.width,K.height)}z&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,vt,It,st)}else e.texImage2D(n.TEXTURE_2D,0,Ut,vt,It,st);_(w)&&g(tt),Tt.__version=j.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function ot(P,w,G){if(w.image.length!==6)return;const tt=ie(P,w),it=w.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+G);const j=i.get(it);if(it.version!==j.__version||tt===!0){e.activeTexture(n.TEXTURE0+G);const Tt=te.getPrimaries(te.workingColorSpace),ft=w.colorSpace===Un?null:te.getPrimaries(w.colorSpace),xt=w.colorSpace===Un||Tt===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const jt=w.isCompressedTexture||w.image[0].isCompressedTexture,st=w.image[0]&&w.image[0].isDataTexture,vt=[];for(let et=0;et<6;et++)!jt&&!st?vt[et]=M(w.image[et],!0,s.maxCubemapSize):vt[et]=st?w.image[et].image:w.image[et],vt[et]=oe(w,vt[et]);const It=vt[0],Ut=a.convert(w.format,w.colorSpace),Mt=a.convert(w.type),Jt=A(w.internalFormat,Ut,Mt,w.colorSpace),kt=w.isVideoTexture!==!0,se=j.__version===void 0||tt===!0,z=it.dataReady;let dt=B(w,It);Xt(n.TEXTURE_CUBE_MAP,w);let K;if(jt){kt&&se&&e.texStorage2D(n.TEXTURE_CUBE_MAP,dt,Jt,It.width,It.height);for(let et=0;et<6;et++){K=vt[et].mipmaps;for(let gt=0;gt<K.length;gt++){const pt=K[gt];w.format!==tn?Ut!==null?kt?z&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt,0,0,pt.width,pt.height,Ut,pt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt,Jt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt,0,0,pt.width,pt.height,Ut,Mt,pt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt,Jt,pt.width,pt.height,0,Ut,Mt,pt.data)}}}else{if(K=w.mipmaps,kt&&se){K.length>0&&dt++;const et=Pt(vt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,dt,Jt,et.width,et.height)}for(let et=0;et<6;et++)if(st){kt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,vt[et].width,vt[et].height,Ut,Mt,vt[et].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Jt,vt[et].width,vt[et].height,0,Ut,Mt,vt[et].data);for(let gt=0;gt<K.length;gt++){const Ot=K[gt].image[et].image;kt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt+1,0,0,Ot.width,Ot.height,Ut,Mt,Ot.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt+1,Jt,Ot.width,Ot.height,0,Ut,Mt,Ot.data)}}else{kt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Ut,Mt,vt[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Jt,Ut,Mt,vt[et]);for(let gt=0;gt<K.length;gt++){const pt=K[gt];kt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt+1,0,0,Ut,Mt,pt.image[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt+1,Jt,Ut,Mt,pt.image[et])}}}_(w)&&g(n.TEXTURE_CUBE_MAP),j.__version=it.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function bt(P,w,G,tt,it,j){const Tt=a.convert(G.format,G.colorSpace),ft=a.convert(G.type),xt=A(G.internalFormat,Tt,ft,G.colorSpace),jt=i.get(w),st=i.get(G);if(st.__renderTarget=w,!jt.__hasExternalTextures){const vt=Math.max(1,w.width>>j),It=Math.max(1,w.height>>j);it===n.TEXTURE_3D||it===n.TEXTURE_2D_ARRAY?e.texImage3D(it,j,xt,vt,It,w.depth,0,Tt,ft,null):e.texImage2D(it,j,xt,vt,It,0,Tt,ft,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),Kt(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,it,st.__webglTexture,0,Yt(w)):(it===n.TEXTURE_2D||it>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,tt,it,st.__webglTexture,j),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(P,w,G){if(n.bindRenderbuffer(n.RENDERBUFFER,P),w.depthBuffer){const tt=w.depthTexture,it=tt&&tt.isDepthTexture?tt.type:null,j=y(w.stencilBuffer,it),Tt=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=Yt(w);Kt(w)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ft,j,w.width,w.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,ft,j,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,j,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Tt,n.RENDERBUFFER,P)}else{const tt=w.textures;for(let it=0;it<tt.length;it++){const j=tt[it],Tt=a.convert(j.format,j.colorSpace),ft=a.convert(j.type),xt=A(j.internalFormat,Tt,ft,j.colorSpace),jt=Yt(w);G&&Kt(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,jt,xt,w.width,w.height):Kt(w)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,jt,xt,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,xt,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Lt(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=i.get(w.depthTexture);tt.__renderTarget=w,(!tt.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),nt(w.depthTexture,0);const it=tt.__webglTexture,j=Yt(w);if(w.depthTexture.format===Si)Kt(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,it,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,it,0);else if(w.depthTexture.format===Ci)Kt(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,it,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function zt(P){const w=i.get(P),G=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const tt=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),tt){const it=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,tt.removeEventListener("dispose",it)};tt.addEventListener("dispose",it),w.__depthDisposeCallback=it}w.__boundDepthTexture=tt}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Lt(w.__webglFramebuffer,P)}else if(G){w.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[tt]),w.__webglDepthbuffer[tt]===void 0)w.__webglDepthbuffer[tt]=n.createRenderbuffer(),ut(w.__webglDepthbuffer[tt],P,!1);else{const it=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=w.__webglDepthbuffer[tt];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,it,n.RENDERBUFFER,j)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),ut(w.__webglDepthbuffer,P,!1);else{const tt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,it=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,it),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,it)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function qt(P,w,G){const tt=i.get(P);w!==void 0&&bt(tt.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&zt(P)}function he(P){const w=P.texture,G=i.get(P),tt=i.get(w);P.addEventListener("dispose",I);const it=P.textures,j=P.isWebGLCubeRenderTarget===!0,Tt=it.length>1;if(Tt||(tt.__webglTexture===void 0&&(tt.__webglTexture=n.createTexture()),tt.__version=w.version,r.memory.textures++),j){G.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[ft]=[];for(let xt=0;xt<w.mipmaps.length;xt++)G.__webglFramebuffer[ft][xt]=n.createFramebuffer()}else G.__webglFramebuffer[ft]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let ft=0;ft<w.mipmaps.length;ft++)G.__webglFramebuffer[ft]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Tt)for(let ft=0,xt=it.length;ft<xt;ft++){const jt=i.get(it[ft]);jt.__webglTexture===void 0&&(jt.__webglTexture=n.createTexture(),r.memory.textures++)}if(P.samples>0&&Kt(P)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ft=0;ft<it.length;ft++){const xt=it[ft];G.__webglColorRenderbuffer[ft]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[ft]);const jt=a.convert(xt.format,xt.colorSpace),st=a.convert(xt.type),vt=A(xt.internalFormat,jt,st,xt.colorSpace,P.isXRRenderTarget===!0),It=Yt(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,It,vt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,G.__webglColorRenderbuffer[ft])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),ut(G.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture),Xt(n.TEXTURE_CUBE_MAP,w);for(let ft=0;ft<6;ft++)if(w.mipmaps&&w.mipmaps.length>0)for(let xt=0;xt<w.mipmaps.length;xt++)bt(G.__webglFramebuffer[ft][xt],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,xt);else bt(G.__webglFramebuffer[ft],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);_(w)&&g(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let ft=0,xt=it.length;ft<xt;ft++){const jt=it[ft],st=i.get(jt);e.bindTexture(n.TEXTURE_2D,st.__webglTexture),Xt(n.TEXTURE_2D,jt),bt(G.__webglFramebuffer,P,jt,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,0),_(jt)&&g(n.TEXTURE_2D)}e.unbindTexture()}else{let ft=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ft=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ft,tt.__webglTexture),Xt(ft,w),w.mipmaps&&w.mipmaps.length>0)for(let xt=0;xt<w.mipmaps.length;xt++)bt(G.__webglFramebuffer[xt],P,w,n.COLOR_ATTACHMENT0,ft,xt);else bt(G.__webglFramebuffer,P,w,n.COLOR_ATTACHMENT0,ft,0);_(w)&&g(ft),e.unbindTexture()}P.depthBuffer&&zt(P)}function $t(P){const w=P.textures;for(let G=0,tt=w.length;G<tt;G++){const it=w[G];if(_(it)){const j=R(P),Tt=i.get(it).__webglTexture;e.bindTexture(j,Tt),g(j),e.unbindTexture()}}}const ge=[],k=[];function Ue(P){if(P.samples>0){if(Kt(P)===!1){const w=P.textures,G=P.width,tt=P.height;let it=n.COLOR_BUFFER_BIT;const j=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Tt=i.get(P),ft=w.length>1;if(ft)for(let xt=0;xt<w.length;xt++)e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let xt=0;xt<w.length;xt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(it|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(it|=n.STENCIL_BUFFER_BIT)),ft){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[xt]);const jt=i.get(w[xt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,jt,0)}n.blitFramebuffer(0,0,G,tt,0,0,G,tt,it,n.NEAREST),l===!0&&(ge.length=0,k.length=0,ge.push(n.COLOR_ATTACHMENT0+xt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ge.push(j),k.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,k)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ge))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ft)for(let xt=0;xt<w.length;xt++){e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[xt]);const jt=i.get(w[xt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,jt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const w=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Yt(P){return Math.min(s.maxSamples,P.samples)}function Kt(P){const w=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Dt(P){const w=r.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function oe(P,w){const G=P.colorSpace,tt=P.format,it=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==Di&&G!==Un&&(te.getTransfer(G)===re?(tt!==tn||it!==wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}function Pt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=Y,this.setTexture2D=nt,this.setTexture2DArray=$,this.setTexture3D=rt,this.setTextureCube=J,this.rebindTextures=qt,this.setupRenderTarget=he,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=Kt}function Pp(n,t){function e(i,s=Un){let a;const r=te.getTransfer(s);if(i===wn)return n.UNSIGNED_BYTE;if(i===Cr)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Pr)return n.UNSIGNED_SHORT_5_5_5_1;if(i===hc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===lc)return n.BYTE;if(i===dc)return n.SHORT;if(i===ts)return n.UNSIGNED_SHORT;if(i===Rr)return n.INT;if(i===$n)return n.UNSIGNED_INT;if(i===cn)return n.FLOAT;if(i===ns)return n.HALF_FLOAT;if(i===uc)return n.ALPHA;if(i===fc)return n.RGB;if(i===tn)return n.RGBA;if(i===pc)return n.LUMINANCE;if(i===mc)return n.LUMINANCE_ALPHA;if(i===Si)return n.DEPTH_COMPONENT;if(i===Ci)return n.DEPTH_STENCIL;if(i===Dr)return n.RED;if(i===Ir)return n.RED_INTEGER;if(i===gc)return n.RG;if(i===Lr)return n.RG_INTEGER;if(i===Ur)return n.RGBA_INTEGER;if(i===Hs||i===Gs||i===Vs||i===Ws)if(r===re)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Hs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Gs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Vs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ws)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Hs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Gs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Vs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ws)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$a||i===ja||i===Qa||i===tr)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===$a)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ja)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===tr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===er||i===nr||i===ir)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===er||i===nr)return r===re?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===ir)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===sr||i===ar||i===rr||i===or||i===cr||i===lr||i===dr||i===hr||i===ur||i===fr||i===pr||i===mr||i===gr||i===_r)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===sr)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ar)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===rr)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===or)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===cr)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===lr)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===dr)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hr)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ur)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fr)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===pr)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===mr)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gr)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_r)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xs||i===xr||i===vr)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Xs)return r===re?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xr)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vr)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_c||i===Mr||i===wr||i===yr)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Xs)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Mr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===yr)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ri?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Dp extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class V extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ip={type:"move"};class La{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new V,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new V,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new V,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const M of t.hand.values()){const _=e.getJointPose(M,i),g=this._getHandJoint(c,M);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],f=h.position.distanceTo(p.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ip)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new V;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Lp=`
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

}`;class Np{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Ce,a=t.properties.get(s);a.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new yn({vertexShader:Lp,fragmentShader:Up,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new le(new Ni(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zp extends Ii{constructor(t,e){super();const i=this;let s=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,p=null,f=null,m=null,v=null;const M=new Np,_=e.getContextAttributes();let g=null,R=null;const A=[],y=[],B=new Ct;let D=null;const I=new je;I.viewport=new _e;const U=new je;U.viewport=new _e;const T=[I,U],S=new Dp;let L=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ot=A[Q];return ot===void 0&&(ot=new La,A[Q]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(Q){let ot=A[Q];return ot===void 0&&(ot=new La,A[Q]=ot),ot.getGripSpace()},this.getHand=function(Q){let ot=A[Q];return ot===void 0&&(ot=new La,A[Q]=ot),ot.getHandSpace()};function q(Q){const ot=y.indexOf(Q.inputSource);if(ot===-1)return;const bt=A[ot];bt!==void 0&&(bt.update(Q.inputSource,Q.frame,c||r),bt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Z(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",nt);for(let Q=0;Q<A.length;Q++){const ot=y[Q];ot!==null&&(y[Q]=null,A[Q].disconnect(ot))}L=null,Y=null,M.reset(),t.setRenderTarget(g),m=null,f=null,p=null,s=null,R=null,ie.stop(),i.isPresenting=!1,t.setPixelRatio(D),t.setSize(B.width,B.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",nt),_.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(B),s.renderState.layers===void 0){const ot={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),R=new jn(m.framebufferWidth,m.framebufferHeight,{format:tn,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let ot=null,bt=null,ut=null;_.depth&&(ut=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=_.stencil?Ci:Si,bt=_.stencil?Ri:$n);const Lt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:a};p=new XRWebGLBinding(s,e),f=p.createProjectionLayer(Lt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),R=new jn(f.textureWidth,f.textureHeight,{format:tn,type:wn,depthTexture:new Lc(f.textureWidth,f.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),ie.setContext(s),ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function nt(Q){for(let ot=0;ot<Q.removed.length;ot++){const bt=Q.removed[ot],ut=y.indexOf(bt);ut>=0&&(y[ut]=null,A[ut].disconnect(bt))}for(let ot=0;ot<Q.added.length;ot++){const bt=Q.added[ot];let ut=y.indexOf(bt);if(ut===-1){for(let zt=0;zt<A.length;zt++)if(zt>=y.length){y.push(bt),ut=zt;break}else if(y[zt]===null){y[zt]=bt,ut=zt;break}if(ut===-1)break}const Lt=A[ut];Lt&&Lt.connect(bt)}}const $=new E,rt=new E;function J(Q,ot,bt){$.setFromMatrixPosition(ot.matrixWorld),rt.setFromMatrixPosition(bt.matrixWorld);const ut=$.distanceTo(rt),Lt=ot.projectionMatrix.elements,zt=bt.projectionMatrix.elements,qt=Lt[14]/(Lt[10]-1),he=Lt[14]/(Lt[10]+1),$t=(Lt[9]+1)/Lt[5],ge=(Lt[9]-1)/Lt[5],k=(Lt[8]-1)/Lt[0],Ue=(zt[8]+1)/zt[0],Yt=qt*k,Kt=qt*Ue,Dt=ut/(-k+Ue),oe=Dt*-k;if(ot.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(oe),Q.translateZ(Dt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Lt[10]===-1)Q.projectionMatrix.copy(ot.projectionMatrix),Q.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const Pt=qt+Dt,P=he+Dt,w=Yt-oe,G=Kt+(ut-oe),tt=$t*he/P*Pt,it=ge*he/P*Pt;Q.projectionMatrix.makePerspective(w,G,tt,it,Pt,P),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ht(Q,ot){ot===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ot.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ot=Q.near,bt=Q.far;M.texture!==null&&(M.depthNear>0&&(ot=M.depthNear),M.depthFar>0&&(bt=M.depthFar)),S.near=U.near=I.near=ot,S.far=U.far=I.far=bt,(L!==S.near||Y!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,Y=S.far),I.layers.mask=Q.layers.mask|2,U.layers.mask=Q.layers.mask|4,S.layers.mask=I.layers.mask|U.layers.mask;const ut=Q.parent,Lt=S.cameras;ht(S,ut);for(let zt=0;zt<Lt.length;zt++)ht(Lt[zt],ut);Lt.length===2?J(S,I,U):S.projectionMatrix.copy(I.projectionMatrix),_t(Q,S,ut)};function _t(Q,ot,bt){bt===null?Q.matrix.copy(ot.matrixWorld):(Q.matrix.copy(bt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ot.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ot.projectionMatrix),Q.projectionMatrixInverse.copy(ot.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Sr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(S)};let Rt=null;function Xt(Q,ot){if(h=ot.getViewerPose(c||r),v=ot,h!==null){const bt=h.views;m!==null&&(t.setRenderTargetFramebuffer(R,m.framebuffer),t.setRenderTarget(R));let ut=!1;bt.length!==S.cameras.length&&(S.cameras.length=0,ut=!0);for(let zt=0;zt<bt.length;zt++){const qt=bt[zt];let he=null;if(m!==null)he=m.getViewport(qt);else{const ge=p.getViewSubImage(f,qt);he=ge.viewport,zt===0&&(t.setRenderTargetTextures(R,ge.colorTexture,f.ignoreDepthValues?void 0:ge.depthStencilTexture),t.setRenderTarget(R))}let $t=T[zt];$t===void 0&&($t=new je,$t.layers.enable(zt),$t.viewport=new _e,T[zt]=$t),$t.matrix.fromArray(qt.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(qt.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(he.x,he.y,he.width,he.height),zt===0&&(S.matrix.copy($t.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ut===!0&&S.cameras.push($t)}const Lt=s.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){const zt=p.getDepthInformation(bt[0]);zt&&zt.isValid&&zt.texture&&M.init(t,zt,s.renderState)}}for(let bt=0;bt<A.length;bt++){const ut=y[bt],Lt=A[bt];ut!==null&&Lt!==void 0&&Lt.update(ut,ot,c||r)}Rt&&Rt(Q,ot),ot.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ot}),v=null}const ie=new Dc;ie.setAnimationLoop(Xt),this.setAnimationLoop=function(Q){Rt=Q},this.dispose=function(){}}}const Vn=new dn,Fp=new de;function Op(n,t){function e(_,g){_.matrixAutoUpdate===!0&&_.updateMatrix(),g.value.copy(_.matrix)}function i(_,g){g.color.getRGB(_.fogColor.value,Rc(n)),g.isFog?(_.fogNear.value=g.near,_.fogFar.value=g.far):g.isFogExp2&&(_.fogDensity.value=g.density)}function s(_,g,R,A,y){g.isMeshBasicMaterial||g.isMeshLambertMaterial?a(_,g):g.isMeshToonMaterial?(a(_,g),p(_,g)):g.isMeshPhongMaterial?(a(_,g),h(_,g)):g.isMeshStandardMaterial?(a(_,g),f(_,g),g.isMeshPhysicalMaterial&&m(_,g,y)):g.isMeshMatcapMaterial?(a(_,g),v(_,g)):g.isMeshDepthMaterial?a(_,g):g.isMeshDistanceMaterial?(a(_,g),M(_,g)):g.isMeshNormalMaterial?a(_,g):g.isLineBasicMaterial?(r(_,g),g.isLineDashedMaterial&&o(_,g)):g.isPointsMaterial?l(_,g,R,A):g.isSpriteMaterial?c(_,g):g.isShadowMaterial?(_.color.value.copy(g.color),_.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function a(_,g){_.opacity.value=g.opacity,g.color&&_.diffuse.value.copy(g.color),g.emissive&&_.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(_.map.value=g.map,e(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,e(g.alphaMap,_.alphaMapTransform)),g.bumpMap&&(_.bumpMap.value=g.bumpMap,e(g.bumpMap,_.bumpMapTransform),_.bumpScale.value=g.bumpScale,g.side===Ie&&(_.bumpScale.value*=-1)),g.normalMap&&(_.normalMap.value=g.normalMap,e(g.normalMap,_.normalMapTransform),_.normalScale.value.copy(g.normalScale),g.side===Ie&&_.normalScale.value.negate()),g.displacementMap&&(_.displacementMap.value=g.displacementMap,e(g.displacementMap,_.displacementMapTransform),_.displacementScale.value=g.displacementScale,_.displacementBias.value=g.displacementBias),g.emissiveMap&&(_.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,_.emissiveMapTransform)),g.specularMap&&(_.specularMap.value=g.specularMap,e(g.specularMap,_.specularMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest);const R=t.get(g),A=R.envMap,y=R.envMapRotation;A&&(_.envMap.value=A,Vn.copy(y),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),_.envMapRotation.value.setFromMatrix4(Fp.makeRotationFromEuler(Vn)),_.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=g.reflectivity,_.ior.value=g.ior,_.refractionRatio.value=g.refractionRatio),g.lightMap&&(_.lightMap.value=g.lightMap,_.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,_.lightMapTransform)),g.aoMap&&(_.aoMap.value=g.aoMap,_.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,_.aoMapTransform))}function r(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,g.map&&(_.map.value=g.map,e(g.map,_.mapTransform))}function o(_,g){_.dashSize.value=g.dashSize,_.totalSize.value=g.dashSize+g.gapSize,_.scale.value=g.scale}function l(_,g,R,A){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.size.value=g.size*R,_.scale.value=A*.5,g.map&&(_.map.value=g.map,e(g.map,_.uvTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,e(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function c(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.rotation.value=g.rotation,g.map&&(_.map.value=g.map,e(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,e(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function h(_,g){_.specular.value.copy(g.specular),_.shininess.value=Math.max(g.shininess,1e-4)}function p(_,g){g.gradientMap&&(_.gradientMap.value=g.gradientMap)}function f(_,g){_.metalness.value=g.metalness,g.metalnessMap&&(_.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,_.metalnessMapTransform)),_.roughness.value=g.roughness,g.roughnessMap&&(_.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,_.roughnessMapTransform)),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)}function m(_,g,R){_.ior.value=g.ior,g.sheen>0&&(_.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),_.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(_.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,_.sheenColorMapTransform)),g.sheenRoughnessMap&&(_.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,_.sheenRoughnessMapTransform))),g.clearcoat>0&&(_.clearcoat.value=g.clearcoat,_.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(_.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,_.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(_.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ie&&_.clearcoatNormalScale.value.negate())),g.dispersion>0&&(_.dispersion.value=g.dispersion),g.iridescence>0&&(_.iridescence.value=g.iridescence,_.iridescenceIOR.value=g.iridescenceIOR,_.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(_.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,_.iridescenceMapTransform)),g.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),g.transmission>0&&(_.transmission.value=g.transmission,_.transmissionSamplerMap.value=R.texture,_.transmissionSamplerSize.value.set(R.width,R.height),g.transmissionMap&&(_.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,_.transmissionMapTransform)),_.thickness.value=g.thickness,g.thicknessMap&&(_.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=g.attenuationDistance,_.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(_.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(_.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=g.specularIntensity,_.specularColor.value.copy(g.specularColor),g.specularColorMap&&(_.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,_.specularColorMapTransform)),g.specularIntensityMap&&(_.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,g){g.matcap&&(_.matcap.value=g.matcap)}function M(_,g){const R=t.get(g).light;_.referencePosition.value.setFromMatrixPosition(R.matrixWorld),_.nearDistance.value=R.shadow.camera.near,_.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Bp(n,t,e,i){let s={},a={},r=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,A){const y=A.program;i.uniformBlockBinding(R,y)}function c(R,A){let y=s[R.id];y===void 0&&(v(R),y=h(R),s[R.id]=y,R.addEventListener("dispose",_));const B=A.program;i.updateUBOMapping(R,B);const D=t.render.frame;a[R.id]!==D&&(f(R),a[R.id]=D)}function h(R){const A=p();R.__bindingPointIndex=A;const y=n.createBuffer(),B=R.__size,D=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,B,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,y),y}function p(){for(let R=0;R<o;R++)if(r.indexOf(R)===-1)return r.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(R){const A=s[R.id],y=R.uniforms,B=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let D=0,I=y.length;D<I;D++){const U=Array.isArray(y[D])?y[D]:[y[D]];for(let T=0,S=U.length;T<S;T++){const L=U[T];if(m(L,D,T,B)===!0){const Y=L.__offset,q=Array.isArray(L.value)?L.value:[L.value];let Z=0;for(let nt=0;nt<q.length;nt++){const $=q[nt],rt=M($);typeof $=="number"||typeof $=="boolean"?(L.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,Y+Z,L.__data)):$.isMatrix3?(L.__data[0]=$.elements[0],L.__data[1]=$.elements[1],L.__data[2]=$.elements[2],L.__data[3]=0,L.__data[4]=$.elements[3],L.__data[5]=$.elements[4],L.__data[6]=$.elements[5],L.__data[7]=0,L.__data[8]=$.elements[6],L.__data[9]=$.elements[7],L.__data[10]=$.elements[8],L.__data[11]=0):($.toArray(L.__data,Z),Z+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Y,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(R,A,y,B){const D=R.value,I=A+"_"+y;if(B[I]===void 0)return typeof D=="number"||typeof D=="boolean"?B[I]=D:B[I]=D.clone(),!0;{const U=B[I];if(typeof D=="number"||typeof D=="boolean"){if(U!==D)return B[I]=D,!0}else if(U.equals(D)===!1)return U.copy(D),!0}return!1}function v(R){const A=R.uniforms;let y=0;const B=16;for(let I=0,U=A.length;I<U;I++){const T=Array.isArray(A[I])?A[I]:[A[I]];for(let S=0,L=T.length;S<L;S++){const Y=T[S],q=Array.isArray(Y.value)?Y.value:[Y.value];for(let Z=0,nt=q.length;Z<nt;Z++){const $=q[Z],rt=M($),J=y%B,ht=J%rt.boundary,_t=J+ht;y+=ht,_t!==0&&B-_t<rt.storage&&(y+=B-_t),Y.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=y,y+=rt.storage}}}const D=y%B;return D>0&&(y+=B-D),R.__size=y,R.__cache={},this}function M(R){const A={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(A.boundary=4,A.storage=4):R.isVector2?(A.boundary=8,A.storage=8):R.isVector3||R.isColor?(A.boundary=16,A.storage=12):R.isVector4?(A.boundary=16,A.storage=16):R.isMatrix3?(A.boundary=48,A.storage=48):R.isMatrix4?(A.boundary=64,A.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),A}function _(R){const A=R.target;A.removeEventListener("dispose",_);const y=r.indexOf(A.__bindingPointIndex);r.splice(y,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete a[A.id]}function g(){for(const R in s)n.deleteBuffer(s[R]);r=[],s={},a={}}return{bind:l,update:c,dispose:g}}class kp{constructor(t={}){const{canvas:e=Al(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=r;const v=new Uint32Array(4),M=new Int32Array(4);let _=null,g=null;const R=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ze,this.toneMapping=zn,this.toneMappingExposure=1;const y=this;let B=!1,D=0,I=0,U=null,T=-1,S=null;const L=new _e,Y=new _e;let q=null;const Z=new Vt(0);let nt=0,$=e.width,rt=e.height,J=1,ht=null,_t=null;const Rt=new _e(0,0,$,rt),Xt=new _e(0,0,$,rt);let ie=!1;const Q=new zr;let ot=!1,bt=!1;const ut=new de,Lt=new de,zt=new E,qt=new _e,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $t=!1;function ge(){return U===null?J:1}let k=i;function Ue(b,F){return e.getContext(b,F)}try{const b={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ar}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),k===null){const F="webgl2";if(k=Ue(F,b),k===null)throw Ue(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Yt,Kt,Dt,oe,Pt,P,w,G,tt,it,j,Tt,ft,xt,jt,st,vt,It,Ut,Mt,Jt,kt,se,z;function dt(){Yt=new Wu(k),Yt.init(),kt=new Pp(k,Yt),Kt=new Ou(k,Yt,t,kt),Dt=new Ap(k,Yt),Kt.reverseDepthBuffer&&f&&Dt.buffers.depth.setReversed(!0),oe=new Yu(k),Pt=new up,P=new Cp(k,Yt,Dt,Pt,Kt,kt,oe),w=new ku(y),G=new Vu(y),tt=new td(k),se=new zu(k,tt),it=new Xu(k,tt,oe,se),j=new Ju(k,it,tt,oe),Ut=new Ku(k,Kt,P),st=new Bu(Pt),Tt=new hp(y,w,G,Yt,Kt,se,st),ft=new Op(y,Pt),xt=new pp,jt=new Mp(Yt),It=new Nu(y,w,G,Dt,j,m,l),vt=new Ep(y,j,Kt),z=new Bp(k,oe,Kt,Dt),Mt=new Fu(k,Yt,oe),Jt=new qu(k,Yt,oe),oe.programs=Tt.programs,y.capabilities=Kt,y.extensions=Yt,y.properties=Pt,y.renderLists=xt,y.shadowMap=vt,y.state=Dt,y.info=oe}dt();const K=new zp(y,k);this.xr=K,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const b=Yt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Yt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(b){b!==void 0&&(J=b,this.setSize($,rt,!1))},this.getSize=function(b){return b.set($,rt)},this.setSize=function(b,F,W=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=b,rt=F,e.width=Math.floor(b*J),e.height=Math.floor(F*J),W===!0&&(e.style.width=b+"px",e.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set($*J,rt*J).floor()},this.setDrawingBufferSize=function(b,F,W){$=b,rt=F,J=W,e.width=Math.floor(b*W),e.height=Math.floor(F*W),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(Rt)},this.setViewport=function(b,F,W,X){b.isVector4?Rt.set(b.x,b.y,b.z,b.w):Rt.set(b,F,W,X),Dt.viewport(L.copy(Rt).multiplyScalar(J).round())},this.getScissor=function(b){return b.copy(Xt)},this.setScissor=function(b,F,W,X){b.isVector4?Xt.set(b.x,b.y,b.z,b.w):Xt.set(b,F,W,X),Dt.scissor(Y.copy(Xt).multiplyScalar(J).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(b){Dt.setScissorTest(ie=b)},this.setOpaqueSort=function(b){ht=b},this.setTransparentSort=function(b){_t=b},this.getClearColor=function(b){return b.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(b=!0,F=!0,W=!0){let X=0;if(b){let O=!1;if(U!==null){const at=U.texture.format;O=at===Ur||at===Lr||at===Ir}if(O){const at=U.texture.type,mt=at===wn||at===$n||at===ts||at===Ri||at===Cr||at===Pr,wt=It.getClearColor(),yt=It.getClearAlpha(),Nt=wt.r,Bt=wt.g,St=wt.b;mt?(v[0]=Nt,v[1]=Bt,v[2]=St,v[3]=yt,k.clearBufferuiv(k.COLOR,0,v)):(M[0]=Nt,M[1]=Bt,M[2]=St,M[3]=yt,k.clearBufferiv(k.COLOR,0,M))}else X|=k.COLOR_BUFFER_BIT}F&&(X|=k.DEPTH_BUFFER_BIT),W&&(X|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),xt.dispose(),jt.dispose(),Pt.dispose(),w.dispose(),G.dispose(),j.dispose(),se.dispose(),z.dispose(),Tt.dispose(),K.dispose(),K.removeEventListener("sessionstart",os),K.removeEventListener("sessionend",cs),hn.stop()};function et(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const b=oe.autoReset,F=vt.enabled,W=vt.autoUpdate,X=vt.needsUpdate,O=vt.type;dt(),oe.autoReset=b,vt.enabled=F,vt.autoUpdate=W,vt.needsUpdate=X,vt.type=O}function pt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ot(b){const F=b.target;F.removeEventListener("dispose",Ot),pe(F)}function pe(b){Se(b),Pt.remove(b)}function Se(b){const F=Pt.get(b).programs;F!==void 0&&(F.forEach(function(W){Tt.releaseProgram(W)}),b.isShaderMaterial&&Tt.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,W,X,O,at){F===null&&(F=he);const mt=O.isMesh&&O.matrixWorld.determinant()<0,wt=ea(b,F,W,X,O);Dt.setMaterial(X,mt);let yt=W.index,Nt=1;if(X.wireframe===!0){if(yt=it.getWireframeAttribute(W),yt===void 0)return;Nt=2}const Bt=W.drawRange,St=W.attributes.position;let Qt=Bt.start*Nt,ae=(Bt.start+Bt.count)*Nt;at!==null&&(Qt=Math.max(Qt,at.start*Nt),ae=Math.min(ae,(at.start+at.count)*Nt)),yt!==null?(Qt=Math.max(Qt,0),ae=Math.min(ae,yt.count)):St!=null&&(Qt=Math.max(Qt,0),ae=Math.min(ae,St.count));const ce=ae-Qt;if(ce<0||ce===1/0)return;se.setup(O,X,wt,W,yt);let Ee,ee=Mt;if(yt!==null&&(Ee=tt.get(yt),ee=Jt,ee.setIndex(Ee)),O.isMesh)X.wireframe===!0?(Dt.setLineWidth(X.wireframeLinewidth*ge()),ee.setMode(k.LINES)):ee.setMode(k.TRIANGLES);else if(O.isLine){let At=X.linewidth;At===void 0&&(At=1),Dt.setLineWidth(At*ge()),O.isLineSegments?ee.setMode(k.LINES):O.isLineLoop?ee.setMode(k.LINE_LOOP):ee.setMode(k.LINE_STRIP)}else O.isPoints?ee.setMode(k.POINTS):O.isSprite&&ee.setMode(k.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ee.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Yt.get("WEBGL_multi_draw"))ee.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const At=O._multiDrawStarts,Pe=O._multiDrawCounts,Zt=O._multiDrawCount,Ye=yt?tt.get(yt).bytesPerElement:1,ii=Pt.get(X).currentProgram.getUniforms();for(let Be=0;Be<Zt;Be++)ii.setValue(k,"_gl_DrawID",Be),ee.render(At[Be]/Ye,Pe[Be])}else if(O.isInstancedMesh)ee.renderInstances(Qt,ce,O.count);else if(W.isInstancedBufferGeometry){const At=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Pe=Math.min(W.instanceCount,At);ee.renderInstances(Qt,ce,Pe)}else ee.render(Qt,ce)};function ne(b,F,W){b.transparent===!0&&b.side===rn&&b.forceSinglePass===!1?(b.side=Ie,b.needsUpdate=!0,ni(b,F,W),b.side=Fn,b.needsUpdate=!0,ni(b,F,W),b.side=rn):ni(b,F,W)}this.compile=function(b,F,W=null){W===null&&(W=b),g=jt.get(W),g.init(F),A.push(g),W.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(g.pushLight(O),O.castShadow&&g.pushShadow(O))}),b!==W&&b.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(g.pushLight(O),O.castShadow&&g.pushShadow(O))}),g.setupLights();const X=new Set;return b.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const at=O.material;if(at)if(Array.isArray(at))for(let mt=0;mt<at.length;mt++){const wt=at[mt];ne(wt,W,O),X.add(wt)}else ne(at,W,O),X.add(at)}),A.pop(),g=null,X},this.compileAsync=function(b,F,W=null){const X=this.compile(b,F,W);return new Promise(O=>{function at(){if(X.forEach(function(mt){Pt.get(mt).currentProgram.isReady()&&X.delete(mt)}),X.size===0){O(b);return}setTimeout(at,10)}Yt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let Oe=null;function qe(b){Oe&&Oe(b)}function os(){hn.stop()}function cs(){hn.start()}const hn=new Dc;hn.setAnimationLoop(qe),typeof self<"u"&&hn.setContext(self),this.setAnimationLoop=function(b){Oe=b,K.setAnimationLoop(b),b===null?hn.stop():hn.start()},K.addEventListener("sessionstart",os),K.addEventListener("sessionend",cs),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(F),F=K.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,F,U),g=jt.get(b,A.length),g.init(F),A.push(g),Lt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Q.setFromProjectionMatrix(Lt),bt=this.localClippingEnabled,ot=st.init(this.clippingPlanes,bt),_=xt.get(b,R.length),_.init(),R.push(_),K.enabled===!0&&K.isPresenting===!0){const at=y.xr.getDepthSensingMesh();at!==null&&Oi(at,F,-1/0,y.sortObjects)}Oi(b,F,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(ht,_t),$t=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,$t&&It.addToRenderList(_,b),this.info.render.frame++,ot===!0&&st.beginShadows();const W=g.state.shadowsArray;vt.render(W,b,F),ot===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=_.opaque,O=_.transmissive;if(g.setupLights(),F.isArrayCamera){const at=F.cameras;if(O.length>0)for(let mt=0,wt=at.length;mt<wt;mt++){const yt=at[mt];ds(X,O,b,yt)}$t&&It.render(b);for(let mt=0,wt=at.length;mt<wt;mt++){const yt=at[mt];ls(_,b,yt,yt.viewport)}}else O.length>0&&ds(X,O,b,F),$t&&It.render(b),ls(_,b,F);U!==null&&(P.updateMultisampleRenderTarget(U),P.updateRenderTargetMipmap(U)),b.isScene===!0&&b.onAfterRender(y,b,F),se.resetDefaultState(),T=-1,S=null,A.pop(),A.length>0?(g=A[A.length-1],ot===!0&&st.setGlobalState(y.clippingPlanes,g.state.camera)):g=null,R.pop(),R.length>0?_=R[R.length-1]:_=null};function Oi(b,F,W,X){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)g.pushLight(b),b.castShadow&&g.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Q.intersectsSprite(b)){X&&qt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Lt);const mt=j.update(b),wt=b.material;wt.visible&&_.push(b,mt,wt,W,qt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Q.intersectsObject(b))){const mt=j.update(b),wt=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),qt.copy(b.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),qt.copy(mt.boundingSphere.center)),qt.applyMatrix4(b.matrixWorld).applyMatrix4(Lt)),Array.isArray(wt)){const yt=mt.groups;for(let Nt=0,Bt=yt.length;Nt<Bt;Nt++){const St=yt[Nt],Qt=wt[St.materialIndex];Qt&&Qt.visible&&_.push(b,mt,Qt,W,qt.z,St)}}else wt.visible&&_.push(b,mt,wt,W,qt.z,null)}}const at=b.children;for(let mt=0,wt=at.length;mt<wt;mt++)Oi(at[mt],F,W,X)}function ls(b,F,W,X){const O=b.opaque,at=b.transmissive,mt=b.transparent;g.setupLightsView(W),ot===!0&&st.setGlobalState(y.clippingPlanes,W),X&&Dt.viewport(L.copy(X)),O.length>0&&ei(O,F,W),at.length>0&&ei(at,F,W),mt.length>0&&ei(mt,F,W),Dt.buffers.depth.setTest(!0),Dt.buffers.depth.setMask(!0),Dt.buffers.color.setMask(!0),Dt.setPolygonOffset(!1)}function ds(b,F,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[X.id]===void 0&&(g.state.transmissionRenderTarget[X.id]=new jn(1,1,{generateMipmaps:!0,type:Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float")?ns:wn,minFilter:Zn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const at=g.state.transmissionRenderTarget[X.id],mt=X.viewport||L;at.setSize(mt.z,mt.w);const wt=y.getRenderTarget();y.setRenderTarget(at),y.getClearColor(Z),nt=y.getClearAlpha(),nt<1&&y.setClearColor(16777215,.5),y.clear(),$t&&It.render(W);const yt=y.toneMapping;y.toneMapping=zn;const Nt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),g.setupLightsView(X),ot===!0&&st.setGlobalState(y.clippingPlanes,X),ei(b,W,X),P.updateMultisampleRenderTarget(at),P.updateRenderTargetMipmap(at),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let St=0,Qt=F.length;St<Qt;St++){const ae=F[St],ce=ae.object,Ee=ae.geometry,ee=ae.material,At=ae.group;if(ee.side===rn&&ce.layers.test(X.layers)){const Pe=ee.side;ee.side=Ie,ee.needsUpdate=!0,hs(ce,W,X,Ee,ee,At),ee.side=Pe,ee.needsUpdate=!0,Bt=!0}}Bt===!0&&(P.updateMultisampleRenderTarget(at),P.updateRenderTargetMipmap(at))}y.setRenderTarget(wt),y.setClearColor(Z,nt),Nt!==void 0&&(X.viewport=Nt),y.toneMapping=yt}function ei(b,F,W){const X=F.isScene===!0?F.overrideMaterial:null;for(let O=0,at=b.length;O<at;O++){const mt=b[O],wt=mt.object,yt=mt.geometry,Nt=X===null?mt.material:X,Bt=mt.group;wt.layers.test(W.layers)&&hs(wt,F,W,yt,Nt,Bt)}}function hs(b,F,W,X,O,at){b.onBeforeRender(y,F,W,X,O,at),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),O.onBeforeRender(y,F,W,X,b,at),O.transparent===!0&&O.side===rn&&O.forceSinglePass===!1?(O.side=Ie,O.needsUpdate=!0,y.renderBufferDirect(W,F,X,O,b,at),O.side=Fn,O.needsUpdate=!0,y.renderBufferDirect(W,F,X,O,b,at),O.side=rn):y.renderBufferDirect(W,F,X,O,b,at),b.onAfterRender(y,F,W,X,O,at)}function ni(b,F,W){F.isScene!==!0&&(F=he);const X=Pt.get(b),O=g.state.lights,at=g.state.shadowsArray,mt=O.state.version,wt=Tt.getParameters(b,O.state,at,F,W),yt=Tt.getProgramCacheKey(wt);let Nt=X.programs;X.environment=b.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(b.isMeshStandardMaterial?G:w).get(b.envMap||X.environment),X.envMapRotation=X.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Nt===void 0&&(b.addEventListener("dispose",Ot),Nt=new Map,X.programs=Nt);let Bt=Nt.get(yt);if(Bt!==void 0){if(X.currentProgram===Bt&&X.lightsStateVersion===mt)return fs(b,wt),Bt}else wt.uniforms=Tt.getUniforms(b),b.onBeforeCompile(wt,y),Bt=Tt.acquireProgram(wt,yt),Nt.set(yt,Bt),X.uniforms=wt.uniforms;const St=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(St.clippingPlanes=st.uniform),fs(b,wt),X.needsLights=ia(b),X.lightsStateVersion=mt,X.needsLights&&(St.ambientLightColor.value=O.state.ambient,St.lightProbe.value=O.state.probe,St.directionalLights.value=O.state.directional,St.directionalLightShadows.value=O.state.directionalShadow,St.spotLights.value=O.state.spot,St.spotLightShadows.value=O.state.spotShadow,St.rectAreaLights.value=O.state.rectArea,St.ltc_1.value=O.state.rectAreaLTC1,St.ltc_2.value=O.state.rectAreaLTC2,St.pointLights.value=O.state.point,St.pointLightShadows.value=O.state.pointShadow,St.hemisphereLights.value=O.state.hemi,St.directionalShadowMap.value=O.state.directionalShadowMap,St.directionalShadowMatrix.value=O.state.directionalShadowMatrix,St.spotShadowMap.value=O.state.spotShadowMap,St.spotLightMatrix.value=O.state.spotLightMatrix,St.spotLightMap.value=O.state.spotLightMap,St.pointShadowMap.value=O.state.pointShadowMap,St.pointShadowMatrix.value=O.state.pointShadowMatrix),X.currentProgram=Bt,X.uniformsList=null,Bt}function us(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=qs.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function fs(b,F){const W=Pt.get(b);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function ea(b,F,W,X,O){F.isScene!==!0&&(F=he),P.resetTextureUnits();const at=F.fog,mt=X.isMeshStandardMaterial?F.environment:null,wt=U===null?y.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Di,yt=(X.isMeshStandardMaterial?G:w).get(X.envMap||mt),Nt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Bt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),St=!!W.morphAttributes.position,Qt=!!W.morphAttributes.normal,ae=!!W.morphAttributes.color;let ce=zn;X.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ce=y.toneMapping);const Ee=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ee=Ee!==void 0?Ee.length:0,At=Pt.get(X),Pe=g.state.lights;if(ot===!0&&(bt===!0||b!==S)){const We=b===S&&X.id===T;st.setState(X,b,We)}let Zt=!1;X.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Pe.state.version||At.outputColorSpace!==wt||O.isBatchedMesh&&At.batching===!1||!O.isBatchedMesh&&At.batching===!0||O.isBatchedMesh&&At.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&At.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&At.instancing===!1||!O.isInstancedMesh&&At.instancing===!0||O.isSkinnedMesh&&At.skinning===!1||!O.isSkinnedMesh&&At.skinning===!0||O.isInstancedMesh&&At.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&At.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&At.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&At.instancingMorph===!1&&O.morphTexture!==null||At.envMap!==yt||X.fog===!0&&At.fog!==at||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==st.numPlanes||At.numIntersection!==st.numIntersection)||At.vertexAlphas!==Nt||At.vertexTangents!==Bt||At.morphTargets!==St||At.morphNormals!==Qt||At.morphColors!==ae||At.toneMapping!==ce||At.morphTargetsCount!==ee)&&(Zt=!0):(Zt=!0,At.__version=X.version);let Ye=At.currentProgram;Zt===!0&&(Ye=ni(X,F,O));let ii=!1,Be=!1,Bi=!1;const ue=Ye.getUniforms(),nn=At.uniforms;if(Dt.useProgram(Ye.program)&&(ii=!0,Be=!0,Bi=!0),X.id!==T&&(T=X.id,Be=!0),ii||S!==b){Dt.buffers.depth.getReversed()?(ut.copy(b.projectionMatrix),Cl(ut),Pl(ut),ue.setValue(k,"projectionMatrix",ut)):ue.setValue(k,"projectionMatrix",b.projectionMatrix),ue.setValue(k,"viewMatrix",b.matrixWorldInverse);const bn=ue.map.cameraPosition;bn!==void 0&&bn.setValue(k,zt.setFromMatrixPosition(b.matrixWorld)),Kt.logarithmicDepthBuffer&&ue.setValue(k,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ue.setValue(k,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,Be=!0,Bi=!0)}if(O.isSkinnedMesh){ue.setOptional(k,O,"bindMatrix"),ue.setOptional(k,O,"bindMatrixInverse");const We=O.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),ue.setValue(k,"boneTexture",We.boneTexture,P))}O.isBatchedMesh&&(ue.setOptional(k,O,"batchingTexture"),ue.setValue(k,"batchingTexture",O._matricesTexture,P),ue.setOptional(k,O,"batchingIdTexture"),ue.setValue(k,"batchingIdTexture",O._indirectTexture,P),ue.setOptional(k,O,"batchingColorTexture"),O._colorsTexture!==null&&ue.setValue(k,"batchingColorTexture",O._colorsTexture,P));const ki=W.morphAttributes;if((ki.position!==void 0||ki.normal!==void 0||ki.color!==void 0)&&Ut.update(O,W,Ye),(Be||At.receiveShadow!==O.receiveShadow)&&(At.receiveShadow=O.receiveShadow,ue.setValue(k,"receiveShadow",O.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(nn.envMap.value=yt,nn.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(nn.envMapIntensity.value=F.environmentIntensity),Be&&(ue.setValue(k,"toneMappingExposure",y.toneMappingExposure),At.needsLights&&na(nn,Bi),at&&X.fog===!0&&ft.refreshFogUniforms(nn,at),ft.refreshMaterialUniforms(nn,X,J,rt,g.state.transmissionRenderTarget[b.id]),qs.upload(k,us(At),nn,P)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(qs.upload(k,us(At),nn,P),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ue.setValue(k,"center",O.center),ue.setValue(k,"modelViewMatrix",O.modelViewMatrix),ue.setValue(k,"normalMatrix",O.normalMatrix),ue.setValue(k,"modelMatrix",O.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const We=X.uniformsGroups;for(let bn=0,En=We.length;bn<En;bn++){const Xr=We[bn];z.update(Xr,Ye),z.bind(Xr,Ye)}}return Ye}function na(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function ia(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(b,F,W){Pt.get(b.texture).__webglTexture=F,Pt.get(b.depthTexture).__webglTexture=W;const X=Pt.get(b);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,F){const W=Pt.get(b);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,W=0){U=b,D=F,I=W;let X=!0,O=null,at=!1,mt=!1;if(b){const yt=Pt.get(b);if(yt.__useDefaultFramebuffer!==void 0)Dt.bindFramebuffer(k.FRAMEBUFFER,null),X=!1;else if(yt.__webglFramebuffer===void 0)P.setupRenderTarget(b);else if(yt.__hasExternalTextures)P.rebindTextures(b,Pt.get(b.texture).__webglTexture,Pt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const St=b.depthTexture;if(yt.__boundDepthTexture!==St){if(St!==null&&Pt.has(St)&&(b.width!==St.image.width||b.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(b)}}const Nt=b.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(mt=!0);const Bt=Pt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Bt[F])?O=Bt[F][W]:O=Bt[F],at=!0):b.samples>0&&P.useMultisampledRTT(b)===!1?O=Pt.get(b).__webglMultisampledFramebuffer:Array.isArray(Bt)?O=Bt[W]:O=Bt,L.copy(b.viewport),Y.copy(b.scissor),q=b.scissorTest}else L.copy(Rt).multiplyScalar(J).floor(),Y.copy(Xt).multiplyScalar(J).floor(),q=ie;if(Dt.bindFramebuffer(k.FRAMEBUFFER,O)&&X&&Dt.drawBuffers(b,O),Dt.viewport(L),Dt.scissor(Y),Dt.setScissorTest(q),at){const yt=Pt.get(b.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+F,yt.__webglTexture,W)}else if(mt){const yt=Pt.get(b.texture),Nt=F||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,yt.__webglTexture,W||0,Nt)}T=-1},this.readRenderTargetPixels=function(b,F,W,X,O,at,mt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Pt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&mt!==void 0&&(wt=wt[mt]),wt){Dt.bindFramebuffer(k.FRAMEBUFFER,wt);try{const yt=b.texture,Nt=yt.format,Bt=yt.type;if(!Kt.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-X&&W>=0&&W<=b.height-O&&k.readPixels(F,W,X,O,kt.convert(Nt),kt.convert(Bt),at)}finally{const yt=U!==null?Pt.get(U).__webglFramebuffer:null;Dt.bindFramebuffer(k.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(b,F,W,X,O,at,mt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Pt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&mt!==void 0&&(wt=wt[mt]),wt){const yt=b.texture,Nt=yt.format,Bt=yt.type;if(!Kt.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=b.width-X&&W>=0&&W<=b.height-O){Dt.bindFramebuffer(k.FRAMEBUFFER,wt);const St=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,St),k.bufferData(k.PIXEL_PACK_BUFFER,at.byteLength,k.STREAM_READ),k.readPixels(F,W,X,O,kt.convert(Nt),kt.convert(Bt),0);const Qt=U!==null?Pt.get(U).__webglFramebuffer:null;Dt.bindFramebuffer(k.FRAMEBUFFER,Qt);const ae=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Rl(k,ae,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,St),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,at),k.deleteBuffer(St),k.deleteSync(ae),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,F=null,W=0){b.isTexture!==!0&&(Zi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,b=arguments[1]);const X=Math.pow(2,-W),O=Math.floor(b.image.width*X),at=Math.floor(b.image.height*X),mt=F!==null?F.x:0,wt=F!==null?F.y:0;P.setTexture2D(b,0),k.copyTexSubImage2D(k.TEXTURE_2D,W,0,0,mt,wt,O,at),Dt.unbindTexture()},this.copyTextureToTexture=function(b,F,W=null,X=null,O=0){b.isTexture!==!0&&(Zi("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,b=arguments[1],F=arguments[2],O=arguments[3]||0,W=null);let at,mt,wt,yt,Nt,Bt,St,Qt,ae;const ce=b.isCompressedTexture?b.mipmaps[O]:b.image;W!==null?(at=W.max.x-W.min.x,mt=W.max.y-W.min.y,wt=W.isBox3?W.max.z-W.min.z:1,yt=W.min.x,Nt=W.min.y,Bt=W.isBox3?W.min.z:0):(at=ce.width,mt=ce.height,wt=ce.depth||1,yt=0,Nt=0,Bt=0),X!==null?(St=X.x,Qt=X.y,ae=X.z):(St=0,Qt=0,ae=0);const Ee=kt.convert(F.format),ee=kt.convert(F.type);let At;F.isData3DTexture?(P.setTexture3D(F,0),At=k.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(P.setTexture2DArray(F,0),At=k.TEXTURE_2D_ARRAY):(P.setTexture2D(F,0),At=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,F.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,F.unpackAlignment);const Pe=k.getParameter(k.UNPACK_ROW_LENGTH),Zt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Ye=k.getParameter(k.UNPACK_SKIP_PIXELS),ii=k.getParameter(k.UNPACK_SKIP_ROWS),Be=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,ce.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ce.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,yt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Nt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Bt);const Bi=b.isDataArrayTexture||b.isData3DTexture,ue=F.isDataArrayTexture||F.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const nn=Pt.get(b),ki=Pt.get(F),We=Pt.get(nn.__renderTarget),bn=Pt.get(ki.__renderTarget);Dt.bindFramebuffer(k.READ_FRAMEBUFFER,We.__webglFramebuffer),Dt.bindFramebuffer(k.DRAW_FRAMEBUFFER,bn.__webglFramebuffer);for(let En=0;En<wt;En++)Bi&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Pt.get(b).__webglTexture,O,Bt+En),b.isDepthTexture?(ue&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Pt.get(F).__webglTexture,O,ae+En),k.blitFramebuffer(yt,Nt,at,mt,St,Qt,at,mt,k.DEPTH_BUFFER_BIT,k.NEAREST)):ue?k.copyTexSubImage3D(At,O,St,Qt,ae+En,yt,Nt,at,mt):k.copyTexSubImage2D(At,O,St,Qt,ae+En,yt,Nt,at,mt);Dt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else ue?b.isDataTexture||b.isData3DTexture?k.texSubImage3D(At,O,St,Qt,ae,at,mt,wt,Ee,ee,ce.data):F.isCompressedArrayTexture?k.compressedTexSubImage3D(At,O,St,Qt,ae,at,mt,wt,Ee,ce.data):k.texSubImage3D(At,O,St,Qt,ae,at,mt,wt,Ee,ee,ce):b.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,O,St,Qt,at,mt,Ee,ee,ce.data):b.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,O,St,Qt,ce.width,ce.height,Ee,ce.data):k.texSubImage2D(k.TEXTURE_2D,O,St,Qt,at,mt,Ee,ee,ce);k.pixelStorei(k.UNPACK_ROW_LENGTH,Pe),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Zt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ye),k.pixelStorei(k.UNPACK_SKIP_ROWS,ii),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Be),O===0&&F.generateMipmaps&&k.generateMipmap(At),Dt.unbindTexture()},this.copyTextureToTexture3D=function(b,F,W=null,X=null,O=0){return b.isTexture!==!0&&(Zi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,b=arguments[2],F=arguments[3],O=arguments[4]||0),Zi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,F,W,X,O)},this.initRenderTarget=function(b){Pt.get(b).__webglFramebuffer===void 0&&P.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?P.setTextureCube(b,0):b.isData3DTexture?P.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?P.setTexture2DArray(b,0):P.setTexture2D(b,0),Dt.unbindTexture()},this.resetState=function(){D=0,I=0,U=null,Dt.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}class Or{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Vt(t),this.density=e}clone(){return new Or(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Hp extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Gp extends Ce{constructor(t=null,e=1,i=1,s,a,r,o,l,c=Ge,h=Ge,p,f){super(null,r,o,l,c,h,s,a,p,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xo extends Ve{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const xi=new de,qo=new de,Ns=[],Yo=new Qn,Vp=new de,qi=new le,Yi=new Li;class Wp extends le{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Xo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Vp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Qn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,xi),Yo.copy(t.boundingBox).applyMatrix4(xi),this.boundingBox.union(Yo)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Li),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,xi),Yi.copy(t.boundingSphere).applyMatrix4(xi),this.boundingSphere.union(Yi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,r=t*a+1;for(let o=0;o<i.length;o++)i[o]=s[r+o]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(qi.geometry=this.geometry,qi.material=this.material,qi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yi.copy(this.boundingSphere),Yi.applyMatrix4(i),t.ray.intersectsSphere(Yi)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,xi),qo.multiplyMatrices(i,xi),qi.matrixWorld=qo,qi.raycast(t,Ns);for(let r=0,o=Ns.length;r<o;r++){const l=Ns[r];l.instanceId=a,l.object=this,e.push(l)}Ns.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Xo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Gp(new Float32Array(s*this.count),s,this.count,Dr,cn));const a=this.morphTexture.source.data.data;let r=0;for(let c=0;c<i.length;c++)r+=i[c];const o=this.geometry.morphTargetsRelative?1:1-r,l=s*t;a[l]=o,a.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Oc extends Ui{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ko=new de,Er=new Sc,zs=new Li,Fs=new E;class Xp extends Me{constructor(t=new Le,e=new Oc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,a=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zs.copy(i.boundingSphere),zs.applyMatrix4(s),zs.radius+=a,t.ray.intersectsSphere(zs)===!1)return;Ko.copy(s).invert(),Er.copy(t.ray).applyMatrix4(Ko);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,p=i.attributes.position;if(c!==null){const f=Math.max(0,r.start),m=Math.min(c.count,r.start+r.count);for(let v=f,M=m;v<M;v++){const _=c.getX(v);Fs.fromBufferAttribute(p,_),Jo(Fs,_,l,s,t,e,this)}}else{const f=Math.max(0,r.start),m=Math.min(p.count,r.start+r.count);for(let v=f,M=m;v<M;v++)Fs.fromBufferAttribute(p,v),Jo(Fs,v,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Jo(n,t,e,i,s,a,r){const o=Er.distanceSqToPoint(n);if(o<e){const l=new E;Er.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class qp extends Ce{constructor(t,e,i,s,a,r,o,l,c){super(t,e,i,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),a=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),a+=i.distanceTo(s),e.push(a),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const a=i.length;let r;e?r=e:r=t*i[a-1];let o=0,l=a-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-r,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===r)return s/(a-1);const h=i[s],f=i[s+1]-h,m=(r-h)/f;return(s+m)/(a-1)}getTangent(t,e){let s=t-1e-4,a=t+1e-4;s<0&&(s=0),a>1&&(a=1);const r=this.getPoint(s),o=this.getPoint(a),l=e||(r.isVector2?new Ct:new E);return l.copy(o).sub(r).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new E,s=[],a=[],r=[],o=new E,l=new de;for(let m=0;m<=t;m++){const v=m/t;s[m]=this.getTangentAt(v,new E)}a[0]=new E,r[0]=new E;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),p=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let m=1;m<=t;m++){if(a[m]=a[m-1].clone(),r[m]=r[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(Re(s[m-1].dot(s[m]),-1,1));a[m].applyMatrix4(l.makeRotationAxis(o,v))}r[m].crossVectors(s[m],a[m])}if(e===!0){let m=Math.acos(Re(a[0].dot(a[t]),-1,1));m/=t,s[0].dot(o.crossVectors(a[0],a[t]))>0&&(m=-m);for(let v=1;v<=t;v++)a[v].applyMatrix4(l.makeRotationAxis(s[v],m*v)),r[v].crossVectors(s[v],a[v])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Bc extends Sn{constructor(t=0,e=0,i=1,s=1,a=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Ct){const i=e,s=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);const o=this.aStartAngle+t*a;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*h-m*p+this.aX,c=f*p+m*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Yp extends Bc{constructor(t,e,i,s,a,r){super(t,e,i,i,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Br(){let n=0,t=0,e=0,i=0;function s(a,r,o,l){n=a,t=o,e=-3*a+3*r-2*o-l,i=2*a-2*r+o+l}return{initCatmullRom:function(a,r,o,l,c){s(r,o,c*(o-a),c*(l-r))},initNonuniformCatmullRom:function(a,r,o,l,c,h,p){let f=(r-a)/c-(o-a)/(c+h)+(o-r)/h,m=(o-r)/h-(l-r)/(h+p)+(l-o)/p;f*=h,m*=h,s(r,o,f,m)},calc:function(a){const r=a*a,o=r*a;return n+t*a+e*r+i*o}}}const Os=new E,Ua=new Br,Na=new Br,za=new Br;class Fi extends Sn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new E){const i=e,s=this.points,a=s.length,r=(a-(this.closed?0:1))*t;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%a]:(Os.subVectors(s[0],s[1]).add(s[0]),c=Os);const p=s[o%a],f=s[(o+1)%a];if(this.closed||o+2<a?h=s[(o+2)%a]:(Os.subVectors(s[a-1],s[a-2]).add(s[a-1]),h=Os),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(p),m),M=Math.pow(p.distanceToSquared(f),m),_=Math.pow(f.distanceToSquared(h),m);M<1e-4&&(M=1),v<1e-4&&(v=M),_<1e-4&&(_=M),Ua.initNonuniformCatmullRom(c.x,p.x,f.x,h.x,v,M,_),Na.initNonuniformCatmullRom(c.y,p.y,f.y,h.y,v,M,_),za.initNonuniformCatmullRom(c.z,p.z,f.z,h.z,v,M,_)}else this.curveType==="catmullrom"&&(Ua.initCatmullRom(c.x,p.x,f.x,h.x,this.tension),Na.initCatmullRom(c.y,p.y,f.y,h.y,this.tension),za.initCatmullRom(c.z,p.z,f.z,h.z,this.tension));return i.set(Ua.calc(l),Na.calc(l),za.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new E().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Zo(n,t,e,i,s){const a=(i-t)*.5,r=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+a+r)*l+(-3*e+3*i-2*a-r)*o+a*n+e}function Kp(n,t){const e=1-n;return e*e*t}function Jp(n,t){return 2*(1-n)*n*t}function Zp(n,t){return n*n*t}function ji(n,t,e,i){return Kp(n,t)+Jp(n,e)+Zp(n,i)}function $p(n,t){const e=1-n;return e*e*e*t}function jp(n,t){const e=1-n;return 3*e*e*n*t}function Qp(n,t){return 3*(1-n)*n*n*t}function t0(n,t){return n*n*n*t}function Qi(n,t,e,i,s){return $p(n,t)+jp(n,e)+Qp(n,i)+t0(n,s)}class e0 extends Sn{constructor(t=new Ct,e=new Ct,i=new Ct,s=new Ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Ct){const i=e,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(Qi(t,s.x,a.x,r.x,o.x),Qi(t,s.y,a.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class n0 extends Sn{constructor(t=new E,e=new E,i=new E,s=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new E){const i=e,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(Qi(t,s.x,a.x,r.x,o.x),Qi(t,s.y,a.y,r.y,o.y),Qi(t,s.z,a.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class i0 extends Sn{constructor(t=new Ct,e=new Ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ct){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class s0 extends Sn{constructor(t=new E,e=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new E){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new E){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class a0 extends Sn{constructor(t=new Ct,e=new Ct,i=new Ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Ct){const i=e,s=this.v0,a=this.v1,r=this.v2;return i.set(ji(t,s.x,a.x,r.x),ji(t,s.y,a.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kc extends Sn{constructor(t=new E,e=new E,i=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new E){const i=e,s=this.v0,a=this.v1,r=this.v2;return i.set(ji(t,s.x,a.x,r.x),ji(t,s.y,a.y,r.y),ji(t,s.z,a.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class r0 extends Sn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ct){const i=e,s=this.points,a=(s.length-1)*t,r=Math.floor(a),o=a-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],p=s[r>s.length-3?s.length-1:r+2];return i.set(Zo(o,l.x,c.x,h.x,p.x),Zo(o,l.y,c.y,h.y,p.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new Ct().fromArray(s))}return this}}var o0=Object.freeze({__proto__:null,ArcCurve:Yp,CatmullRomCurve3:Fi,CubicBezierCurve:e0,CubicBezierCurve3:n0,EllipseCurve:Bc,LineCurve:i0,LineCurve3:s0,QuadraticBezierCurve:a0,QuadraticBezierCurve3:kc,SplineCurve:r0});class H extends Le{constructor(t=1,e=1,i=1,s=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),a=Math.floor(a);const h=[],p=[],f=[],m=[];let v=0;const M=[],_=i/2;let g=0;R(),r===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new fe(p,3)),this.setAttribute("normal",new fe(f,3)),this.setAttribute("uv",new fe(m,2));function R(){const y=new E,B=new E;let D=0;const I=(e-t)/i;for(let U=0;U<=a;U++){const T=[],S=U/a,L=S*(e-t)+t;for(let Y=0;Y<=s;Y++){const q=Y/s,Z=q*l+o,nt=Math.sin(Z),$=Math.cos(Z);B.x=L*nt,B.y=-S*i+_,B.z=L*$,p.push(B.x,B.y,B.z),y.set(nt,I,$).normalize(),f.push(y.x,y.y,y.z),m.push(q,1-S),T.push(v++)}M.push(T)}for(let U=0;U<s;U++)for(let T=0;T<a;T++){const S=M[T][U],L=M[T+1][U],Y=M[T+1][U+1],q=M[T][U+1];(t>0||T!==0)&&(h.push(S,L,q),D+=3),(e>0||T!==a-1)&&(h.push(L,Y,q),D+=3)}c.addGroup(g,D,0),g+=D}function A(y){const B=v,D=new Ct,I=new E;let U=0;const T=y===!0?t:e,S=y===!0?1:-1;for(let Y=1;Y<=s;Y++)p.push(0,_*S,0),f.push(0,S,0),m.push(.5,.5),v++;const L=v;for(let Y=0;Y<=s;Y++){const Z=Y/s*l+o,nt=Math.cos(Z),$=Math.sin(Z);I.x=T*$,I.y=_*S,I.z=T*nt,p.push(I.x,I.y,I.z),f.push(0,S,0),D.x=nt*.5+.5,D.y=$*.5*S+.5,m.push(D.x,D.y),v++}for(let Y=0;Y<s;Y++){const q=B+Y,Z=L+Y;y===!0?h.push(Z,Z+1,q):h.push(Z+1,Z,q),U+=3}c.addGroup(g,U,y===!0?1:2),g+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new H(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class as extends H{constructor(t=1,e=1,i=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,t,e,i,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(t){return new as(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class rs extends Le{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const a=[],r=[];o(s),c(i),h(),this.setAttribute("position",new fe(a,3)),this.setAttribute("normal",new fe(a.slice(),3)),this.setAttribute("uv",new fe(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(R){const A=new E,y=new E,B=new E;for(let D=0;D<e.length;D+=3)m(e[D+0],A),m(e[D+1],y),m(e[D+2],B),l(A,y,B,R)}function l(R,A,y,B){const D=B+1,I=[];for(let U=0;U<=D;U++){I[U]=[];const T=R.clone().lerp(y,U/D),S=A.clone().lerp(y,U/D),L=D-U;for(let Y=0;Y<=L;Y++)Y===0&&U===D?I[U][Y]=T:I[U][Y]=T.clone().lerp(S,Y/L)}for(let U=0;U<D;U++)for(let T=0;T<2*(D-U)-1;T++){const S=Math.floor(T/2);T%2===0?(f(I[U][S+1]),f(I[U+1][S]),f(I[U][S])):(f(I[U][S+1]),f(I[U+1][S+1]),f(I[U+1][S]))}}function c(R){const A=new E;for(let y=0;y<a.length;y+=3)A.x=a[y+0],A.y=a[y+1],A.z=a[y+2],A.normalize().multiplyScalar(R),a[y+0]=A.x,a[y+1]=A.y,a[y+2]=A.z}function h(){const R=new E;for(let A=0;A<a.length;A+=3){R.x=a[A+0],R.y=a[A+1],R.z=a[A+2];const y=_(R)/2/Math.PI+.5,B=g(R)/Math.PI+.5;r.push(y,1-B)}v(),p()}function p(){for(let R=0;R<r.length;R+=6){const A=r[R+0],y=r[R+2],B=r[R+4],D=Math.max(A,y,B),I=Math.min(A,y,B);D>.9&&I<.1&&(A<.2&&(r[R+0]+=1),y<.2&&(r[R+2]+=1),B<.2&&(r[R+4]+=1))}}function f(R){a.push(R.x,R.y,R.z)}function m(R,A){const y=R*3;A.x=t[y+0],A.y=t[y+1],A.z=t[y+2]}function v(){const R=new E,A=new E,y=new E,B=new E,D=new Ct,I=new Ct,U=new Ct;for(let T=0,S=0;T<a.length;T+=9,S+=6){R.set(a[T+0],a[T+1],a[T+2]),A.set(a[T+3],a[T+4],a[T+5]),y.set(a[T+6],a[T+7],a[T+8]),D.set(r[S+0],r[S+1]),I.set(r[S+2],r[S+3]),U.set(r[S+4],r[S+5]),B.copy(R).add(A).add(y).divideScalar(3);const L=_(B);M(D,S+0,R,L),M(I,S+2,A,L),M(U,S+4,y,L)}}function M(R,A,y,B){B<0&&R.x===1&&(r[A]=R.x-1),y.x===0&&y.z===0&&(r[A]=B/2/Math.PI+.5)}function _(R){return Math.atan2(R.z,-R.x)}function g(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rs(t.vertices,t.indices,t.radius,t.details)}}class me extends rs{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=1/i,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new me(t.radius,t.detail)}}class kr extends rs{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,a,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new kr(t.radius,t.detail)}}class Hr extends rs{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Hr(t.radius,t.detail)}}class es extends Le{constructor(t=.5,e=1,i=32,s=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:a,thetaLength:r},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let p=t;const f=(e-t)/s,m=new E,v=new Ct;for(let M=0;M<=s;M++){for(let _=0;_<=i;_++){const g=a+_/i*r;m.x=p*Math.cos(g),m.y=p*Math.sin(g),l.push(m.x,m.y,m.z),c.push(0,0,1),v.x=(m.x/e+1)/2,v.y=(m.y/e+1)/2,h.push(v.x,v.y)}p+=f}for(let M=0;M<s;M++){const _=M*(i+1);for(let g=0;g<i;g++){const R=g+_,A=R,y=R+i+1,B=R+i+2,D=R+1;o.push(A,y,D),o.push(y,B,D)}}this.setIndex(o),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(c,3)),this.setAttribute("uv",new fe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new es(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ve extends Le{constructor(t=1,e=32,i=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let c=0;const h=[],p=new E,f=new E,m=[],v=[],M=[],_=[];for(let g=0;g<=i;g++){const R=[],A=g/i;let y=0;g===0&&r===0?y=.5/e:g===i&&l===Math.PI&&(y=-.5/e);for(let B=0;B<=e;B++){const D=B/e;p.x=-t*Math.cos(s+D*a)*Math.sin(r+A*o),p.y=t*Math.cos(r+A*o),p.z=t*Math.sin(s+D*a)*Math.sin(r+A*o),v.push(p.x,p.y,p.z),f.copy(p).normalize(),M.push(f.x,f.y,f.z),_.push(D+y,1-A),R.push(c++)}h.push(R)}for(let g=0;g<i;g++)for(let R=0;R<e;R++){const A=h[g][R+1],y=h[g][R],B=h[g+1][R],D=h[g+1][R+1];(g!==0||r>0)&&m.push(A,y,D),(g!==i-1||l<Math.PI)&&m.push(y,B,D)}this.setIndex(m),this.setAttribute("position",new fe(v,3)),this.setAttribute("normal",new fe(M,3)),this.setAttribute("uv",new fe(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ve(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Wt extends Le{constructor(t=1,e=.4,i=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:a},i=Math.floor(i),s=Math.floor(s);const r=[],o=[],l=[],c=[],h=new E,p=new E,f=new E;for(let m=0;m<=i;m++)for(let v=0;v<=s;v++){const M=v/s*a,_=m/i*Math.PI*2;p.x=(t+e*Math.cos(_))*Math.cos(M),p.y=(t+e*Math.cos(_))*Math.sin(M),p.z=e*Math.sin(_),o.push(p.x,p.y,p.z),h.x=t*Math.cos(M),h.y=t*Math.sin(M),f.subVectors(p,h).normalize(),l.push(f.x,f.y,f.z),c.push(v/s),c.push(m/i)}for(let m=1;m<=i;m++)for(let v=1;v<=s;v++){const M=(s+1)*m+v-1,_=(s+1)*(m-1)+v-1,g=(s+1)*(m-1)+v,R=(s+1)*m+v;r.push(M,_,R),r.push(_,g,R)}this.setIndex(r),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(l,3)),this.setAttribute("uv",new fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wt(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ti extends Le{constructor(t=new kc(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),e=64,i=1,s=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:a};const r=t.computeFrenetFrames(e,a);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const o=new E,l=new E,c=new Ct;let h=new E;const p=[],f=[],m=[],v=[];M(),this.setIndex(v),this.setAttribute("position",new fe(p,3)),this.setAttribute("normal",new fe(f,3)),this.setAttribute("uv",new fe(m,2));function M(){for(let A=0;A<e;A++)_(A);_(a===!1?e:0),R(),g()}function _(A){h=t.getPointAt(A/e,h);const y=r.normals[A],B=r.binormals[A];for(let D=0;D<=s;D++){const I=D/s*Math.PI*2,U=Math.sin(I),T=-Math.cos(I);l.x=T*y.x+U*B.x,l.y=T*y.y+U*B.y,l.z=T*y.z+U*B.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,p.push(o.x,o.y,o.z)}}function g(){for(let A=1;A<=e;A++)for(let y=1;y<=s;y++){const B=(s+1)*(A-1)+(y-1),D=(s+1)*A+(y-1),I=(s+1)*A+y,U=(s+1)*(A-1)+y;v.push(B,D,U),v.push(D,I,U)}}function R(){for(let A=0;A<=e;A++)for(let y=0;y<=s;y++)c.x=A/e,c.y=y/s,m.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ti(new o0[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Ft extends Ui{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xc,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Gr extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class c0 extends Gr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Fa=new de,$o=new E,jo=new E;class l0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zr,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;$o.setFromMatrixPosition(t.matrixWorld),e.position.copy($o),jo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(jo),e.updateMatrixWorld(),Fa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Fa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class d0 extends l0{constructor(){super(new Ic(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class h0 extends Gr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new d0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class u0 extends Gr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Qm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Qo();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Qo(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ar}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ar);function Bs(n,t){const e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function Vr(n,t){const e=Math.floor(n),i=Math.floor(t),s=n-e,a=t-i,r=s*s*(3-2*s),o=a*a*(3-2*a),l=Bs(e,i),c=Bs(e+1,i),h=Bs(e,i+1),p=Bs(e+1,i+1);return l+(c-l)*r+(h-l)*o+(l-c-h+p)*r*o}function tc(n,t,e=4){let i=0,s=.5,a=1;for(let r=0;r<e;r++)i+=Vr(n*a,t*a)*s,a*=2,s*=.5;return i}function Zs(n,t,e){const i=Math.min(1,Math.max(0,(e-n)/(t-n)));return i*i*(3-2*i)}function f0(n,t,e){return n+(t-n)*e}const $s=640,ec=180,p0=[[180,-90,46,8],[-210,150,30,5.5],[95,230,18,3.2],[-70,-250,36,6],[250,80,14,2.4],[-160,-40,12,2]];function m0(n,t,e,i,s,a){const r=n-e,o=t-i,l=Math.sqrt(r*r+o*o);if(l>s)return 0;const c=l/s,h=-a*(1-c*c),p=a*.28*Math.exp(-((c-.86)*(c-.86))/.018);return h+p}const g0=[[0,0,48,100],[52,24,18,36],[22,82,14,28],[80,-44,40,60],[112,-83,18,30],[-32,-98,16,26],[-88,-188,24,42],[-68,-16,16,28],[22,-112,12,20],[-6,-108,18,32],[36,72,16,32],[-24,44,16,32],[-32,-148,12,22],[-64,-90,10,18],[-50,-100,16,28],[38,-126,12,20],[-60,-148,8,14],[-64,-118,8,14],[-18,-88,10,18],[68,-10,12,20],[-22,-88,8,14],[-48,68,16,32],[78,56,16,32],[-13,-134,16,28],[8,-142,12,20],[135,-40,20,34],[68,6,12,20],[-28,-138,8,14],[-36,-74,14,24],[2,-22,8,14],[-50,-72,10,16],[10,-124,12,20],[20,8,12,20],[-16,136,28,48],[158,-62,22,36],[158,-28,10,16],[-96,-16,16,26],[-78,-172,12,20],[66,-74,14,22],[18,-152,12,18],[-20,-100,10,16],[-8,-162,10,16],[8,-98,10,16],[48,-70,10,16],[-68,12,12,18],[22,-80,10,16],[52,-112,12,18],[-90,-158,10,16],[8,-78,10,16],[-8,-88,10,16],[-96,4,10,16],[142,-62,8,14],[28,-140,10,16],[-90,-148,8,14],[12,18,8,12],[36,8,10,16],[36,-6,10,16],[-50,4,10,16],[-58,-142,10,16],[-32,-22,10,16],[66,-90,10,16],[22,-98,10,16],[172,-48,10,16],[38,-104,10,16],[24,-128,8,14],[-80,20,10,16],[6,148,8,14],[-64,80,10,16],[-80,32,10,16],[100,-22,8,14],[-22,-56,10,16],[-124,-188,12,20],[-38,16,10,16],[70,-112,12,18],[16,48,8,14],[-58,-36,12,16],[50,4,10,18],[-40,-168,12,16],[82,-90,10,14],[4,-148,10,14],[148,-40,10,14],[124,-70,10,14],[96,-44,10,14],[-84,8,10,14],[16,-86,10,14],[135,-22,12,14],[100,-70,12,14],[82,-28,12,14],[-68,2,12,14],[122,-40,8,22],[98,-83,8,22],[70,-44,8,22],[-102,-158,10,14],[-18,-78,12,14],[-64,-184,12,16],[32,-152,10,12],[-96,16,16,10],[82,-74,16,14],[-78,-156,10,12],[-110,8,10,12],[-110,20,10,12],[-110,32,10,12],[-122,8,12,12],[-122,20,10,12],[-8,-98,12,12],[-22,-98,10,12],[8,-88,10,12],[-78,-36,12,12],[96,-90,10,12],[-5,-78,8,10],[16,-148,10,12],[-90,-136,10,12],[16,-74,8,10],[-48,-138,12,14],[52,-126,12,12],[70,-126,10,12],[0,-68,8,10],[48,-70,8,10],[-46,-148,8,10],[-38,16,8,10]];function N(n,t){let e=0;e+=(tc(n*.0038,t*.0038,5)-.45)*16,e+=(tc(n*.018,t*.018,3)-.5)*2.8,e+=(Vr(n*.07,t*.07)-.5)*.45;for(const[i,s,a,r]of p0)e+=m0(n,t,i,s,a,r);for(const[i,s,a,r]of g0){const o=Zs(r,a,Math.hypot(n-i,t-s));e=f0(e,.35+e*.12,o)}return e}function _0(n,t,e,i){const s=new Vt(9059108),a=new Vt(12085818),r=new Vt(12880469),o=new Vt(4858904),l=Zs(-4,8,e),c=s.clone().lerp(a,l).lerp(r,Zs(6,14,e)*.35);i>.45&&c.lerp(o,Math.min(.55,(i-.45)*1.4));const h=Vr(n*.11,t*.11);c.offsetHSL(0,(h-.5)*.08,(h-.5)*.06);const p=x0(n,t);return p>0&&c.lerp(new Vt(5911332),p*.85),c}function x0(n,t){const e=[{ax:0,az:18,bx:0,bz:-124},{ax:0,az:-40,bx:84,bz:-42},{ax:0,az:-40,bx:-68,bz:-16},{ax:0,az:-90,bx:-55,bz:-150},{ax:18,az:-70,bx:52,bz:-88},{ax:12,az:8,bx:50,bz:22},{ax:16,az:28,bx:22,bz:78},{ax:-58,az:-158,bx:-90,bz:-190},{ax:-14,az:-104,bx:-32,bz:-98},{ax:84,az:-42,bx:112,bz:-83},{ax:0,az:-108,bx:22,bz:-112},{ax:22,az:-112,bx:48,bz:-86},{ax:-6,az:-116,bx:-18,bz:-138},{ax:0,az:8,bx:-15,bz:-8},{ax:16,az:28,bx:36,bz:72},{ax:0,az:18,bx:-24,bz:44},{ax:-58,az:-158,bx:-64,bz:-90},{ax:-64,az:-90,bx:-68,bz:-16},{ax:-18,az:-138,bx:-32,bz:-148},{ax:-32,az:-98,bx:-46,bz:-100},{ax:22,az:-112,bx:38,bz:-126},{ax:-58,az:-158,bx:-60,bz:-148},{ax:-64,az:-118,bx:-18,bz:-88},{ax:84,az:-42,bx:68,bz:-10},{ax:-6,az:-108,bx:-18,bz:-88},{ax:0,az:18,bx:-48,bz:68},{ax:16,az:28,bx:78,bz:56},{ax:-6,az:-116,bx:-13,bz:-134},{ax:38,az:-126,bx:8,bz:-142},{ax:-13,az:-134,bx:8,bz:-142},{ax:112,az:-83,bx:135,bz:-40},{ax:68,az:-10,bx:68,bz:6},{ax:-13,az:-134,bx:-28,bz:-138},{ax:-46,az:-108,bx:-20,bz:-132},{ax:-6,az:-108,bx:-6,bz:-132},{ax:-6,az:-96,bx:2,bz:-22},{ax:-32,az:-98,bx:-36,bz:-74},{ax:-40,az:-76,bx:-32,bz:-98},{ax:-40,az:-76,bx:-50,bz:-72},{ax:-6,az:-132,bx:10,bz:-124},{ax:10,az:-124,bx:8,bz:-142},{ax:0,az:8,bx:20,bz:8},{ax:22,az:82,bx:-16,bz:136},{ax:0,az:32,bx:-16,bz:136},{ax:135,az:-40,bx:158,bz:-62},{ax:-68,az:-16,bx:-96,bz:-16},{ax:-58,az:-158,bx:-78,bz:-172},{ax:48,az:-86,bx:66,bz:-74},{ax:8,az:-142,bx:18,bz:-152},{ax:-32,az:-148,bx:-8,bz:-162},{ax:-6,az:-108,bx:8,bz:-98},{ax:22,az:-112,bx:8,bz:-98},{ax:48,az:-86,bx:48,bz:-70},{ax:-68,az:-16,bx:-68,bz:12},{ax:-36,az:-74,bx:22,bz:-80},{ax:48,az:-86,bx:22,bz:-80},{ax:22,az:-112,bx:52,bz:-112},{ax:38,az:-126,bx:52,bz:-112},{ax:-78,az:-172,bx:-90,bz:-158},{ax:8,az:-98,bx:8,bz:-78},{ax:22,az:-80,bx:8,bz:-78},{ax:8,az:-98,bx:-8,bz:-88},{ax:-22,az:-88,bx:-8,bz:-88},{ax:-96,az:-16,bx:-96,bz:4},{ax:158,az:-62,bx:142,bz:-62},{ax:8,az:-142,bx:28,bz:-140},{ax:18,az:-152,bx:28,bz:-140},{ax:-90,az:-158,bx:-90,bz:-148},{ax:5,az:16,bx:12,bz:18},{ax:20,az:8,bx:36,bz:8},{ax:36,az:8,bx:36,bz:-6},{ax:-68,az:4,bx:-50,bz:4},{ax:-58,az:-158,bx:-58,bz:-142},{ax:-15,az:-8,bx:-32,bz:-22},{ax:66,az:-74,bx:66,bz:-90},{ax:8,az:-98,bx:22,bz:-98},{ax:158,az:-62,bx:172,bz:-48},{ax:22,az:-112,bx:38,bz:-104},{ax:10,az:-124,bx:24,bz:-128},{ax:-68,az:12,bx:-80,bz:20},{ax:-16,az:136,bx:6,bz:148},{ax:-48,az:68,bx:-64,bz:80},{ax:-80,az:20,bx:-80,bz:32},{ax:135,az:-40,bx:100,bz:-22},{ax:100,az:-22,bx:68,bz:-10},{ax:-36,az:-74,bx:-22,bz:-56},{ax:-90,az:-158,bx:-124,bz:-188},{ax:-50,az:4,bx:-38,bz:16},{ax:52,az:-112,bx:70,bz:-112},{ax:22,az:82,bx:16,bz:48},{ax:-58,az:-142,bx:-58,bz:-36},{ax:-58,az:-36,bx:-68,bz:-16},{ax:36,az:8,bx:50,bz:4},{ax:-58,az:-158,bx:-40,bz:-168},{ax:66,az:-90,bx:82,bz:-90},{ax:-8,az:-162,bx:4,bz:-148},{ax:135,az:-40,bx:148,bz:-40},{ax:112,az:-83,bx:124,bz:-70},{ax:82,az:-44,bx:96,bz:-44},{ax:-68,az:12,bx:-84,bz:8},{ax:-8,az:-88,bx:16,bz:-86},{ax:135,az:-40,bx:135,bz:-22},{ax:124,az:-70,bx:100,bz:-70},{ax:82,az:-44,bx:82,bz:-28},{ax:-68,az:-16,bx:-68,bz:2},{ax:135,az:-40,bx:122,bz:-40},{ax:112,az:-83,bx:98,bz:-83},{ax:82,az:-44,bx:70,bz:-44},{ax:-90,az:-158,bx:-102,bz:-158},{ax:8,az:-78,bx:-18,bz:-78},{ax:-78,az:-172,bx:-64,bz:-184},{ax:18,az:-152,bx:32,bz:-152},{ax:-96,az:4,bx:-96,bz:16},{ax:66,az:-74,bx:82,bz:-74},{ax:-78,az:-172,bx:-78,bz:-156},{ax:-96,az:4,bx:-110,bz:8},{ax:-110,az:8,bx:-110,bz:20},{ax:-110,az:20,bx:-110,bz:32},{ax:-110,az:8,bx:-122,bz:8},{ax:-122,az:8,bx:-122,bz:20},{ax:8,az:-98,bx:-8,bz:-98},{ax:-8,az:-98,bx:-22,bz:-98},{ax:-8,az:-88,bx:8,bz:-88},{ax:-58,az:-36,bx:-78,bz:-36},{ax:82,az:-90,bx:96,bz:-90},{ax:8,az:-78,bx:-5,bz:-78},{ax:4,az:-148,bx:16,bz:-148},{ax:-90,az:-148,bx:-90,bz:-136},{ax:16,az:-86,bx:16,bz:-74},{ax:-32,az:-148,bx:-48,bz:-138},{ax:52,az:-112,bx:52,bz:-126},{ax:52,az:-126,bx:70,bz:-126},{ax:0,az:-68,bx:0,bz:-118},{ax:48,az:-70,bx:90,bz:-80},{ax:-46,az:-148,bx:-90,bz:-148},{ax:-38,az:16,bx:-68,bz:12}];let i=0;for(const s of e){const a=s.bx-s.ax,r=s.bz-s.az,o=a*a+r*r;let l=((n-s.ax)*a+(t-s.az)*r)/o;l=Math.min(1,Math.max(0,l));const c=s.ax+a*l,h=s.az+r*l,p=Math.hypot(n-c,t-h);i=Math.max(i,Zs(5.4,1.6,p))}return i}function v0(){const n=new Ni($s,$s,ec,ec);n.rotateX(-Math.PI/2);const t=n.attributes.position,e=new Float32Array(t.count*3);for(let r=0;r<t.count;r++){const o=t.getX(r),l=t.getZ(r),c=N(o,l);t.setY(r,c)}n.computeVertexNormals();const i=n.attributes.normal;for(let r=0;r<t.count;r++){const o=1-Math.abs(i.getY(r)),l=_0(t.getX(r),t.getZ(r),t.getY(r),o);e[r*3]=l.r,e[r*3+1]=l.g,e[r*3+2]=l.b}n.setAttribute("color",new Ve(e,3));const s=new Ft({vertexColors:!0,roughness:.94,metalness:.02,flatShading:!1}),a=new le(n,s);return a.receiveShadow=!0,a.name="terrain",a}function M0(){const n=new V;n.name="rocks";const t=[new me(1,0),new kr(1,0),new Hr(1,0)],e=[new Ft({color:8011048,roughness:.95,flatShading:!0}),new Ft({color:6040604,roughness:.92,flatShading:!0}),new Ft({color:9260592,roughness:.9,flatShading:!0})],i=new Me,s=[220,160,90];for(let a=0;a<3;a++){const r=new Wp(t[a],e[a],s[a]);r.castShadow=!0,r.receiveShadow=!0;let o=0,l=0;for(;o<s[a]&&l<s[a]*8;){l++;const c=(In(o,a,1)-.5)*$s*.92,h=(In(o,a,2)-.5)*$s*.92;if(Math.hypot(c,h)<42||Math.hypot(c-52,h-24)<22||Math.hypot(c-22,h-82)<18||Math.hypot(c-80,h+44)<44||Math.hypot(c-112,h+83)<22||Math.hypot(c+32,h+98)<20||Math.hypot(c+88,h+188)<30||Math.hypot(c-22,h+112)<16||Math.hypot(c+68,h+16)<22||Math.hypot(c-36,h-72)<20||Math.hypot(c+24,h-44)<20||Math.hypot(c+32,h+148)<16||Math.hypot(c+64,h+90)<14||Math.hypot(c+50,h+100)<22||Math.hypot(c-38,h+126)<16||Math.hypot(c+18,h+88)<14||Math.hypot(c-68,h+10)<16||Math.hypot(c+60,h+148)<12||Math.hypot(c+64,h+118)<12||Math.hypot(c+48,h-68)<20||Math.hypot(c-78,h-56)<20||Math.hypot(c+13,h+134)<20||Math.hypot(c-8,h+142)<16||Math.hypot(c-135,h+40)<24||Math.hypot(c-68,h-6)<16||Math.hypot(c+28,h+138)<12||Math.hypot(c+36,h+74)<18||Math.hypot(c-2,h+22)<12||Math.hypot(c+50,h+72)<14||Math.hypot(c-10,h+124)<16||Math.hypot(c-20,h-8)<16||Math.hypot(c+16,h-136)<32||Math.hypot(c-158,h+62)<24||Math.hypot(c+96,h+16)<20||Math.hypot(c+78,h+172)<16||Math.hypot(c-66,h+74)<16||Math.hypot(c-18,h+152)<14||Math.hypot(c+20,h+100)<14||Math.hypot(c+8,h+162)<14||Math.hypot(c-8,h+98)<14||Math.hypot(c-48,h+70)<14||Math.hypot(c+68,h-12)<16||Math.hypot(c-22,h+80)<14||Math.hypot(c-52,h+112)<16||Math.hypot(c+90,h+158)<14||Math.hypot(c-8,h+78)<14||Math.hypot(c+8,h+88)<14||Math.hypot(c+96,h-4)<14||Math.hypot(c-142,h+62)<14||Math.hypot(c-28,h+140)<14||Math.hypot(c+90,h+148)<12||Math.hypot(c-12,h-18)<12||Math.hypot(c-36,h-8)<14||Math.hypot(c-36,h+6)<14||Math.hypot(c+50,h-4)<14||Math.hypot(c+58,h+142)<14||Math.hypot(c+32,h+22)<14||Math.hypot(c-66,h+90)<14||Math.hypot(c-22,h+98)<14||Math.hypot(c-172,h+48)<14||Math.hypot(c-38,h+104)<14||Math.hypot(c-24,h+128)<12||Math.hypot(c+80,h-20)<14||Math.hypot(c-6,h-148)<12||Math.hypot(c+64,h-80)<14||Math.hypot(c+80,h-32)<14||Math.hypot(c-100,h+22)<12||Math.hypot(c+22,h+56)<14||Math.hypot(c+124,h+188)<16||Math.hypot(c+38,h-16)<14||Math.hypot(c-70,h+112)<16||Math.hypot(c-16,h-48)<12||Math.hypot(c+58,h+36)<14||Math.hypot(c-50,h-4)<14||Math.hypot(c+40,h+168)<14||Math.hypot(c-82,h+90)<14||Math.hypot(c-4,h+148)<14||Math.hypot(c-148,h+40)<14||Math.hypot(c-124,h+70)<14||Math.hypot(c-96,h+44)<14||Math.hypot(c+84,h-8)<14||Math.hypot(c-16,h+86)<14||Math.hypot(c-135,h+22)<14||Math.hypot(c-100,h+70)<14||Math.hypot(c-82,h+28)<14||Math.hypot(c+68,h-2)<14||Math.hypot(c-122,h+40)<14||Math.hypot(c-98,h+83)<14||Math.hypot(c-70,h+44)<14||Math.hypot(c+102,h+158)<14||Math.hypot(c+18,h+78)<14||Math.hypot(c+64,h+184)<14||Math.hypot(c-32,h+152)<14||Math.hypot(c+96,h-16)<14||Math.hypot(c-82,h+74)<14||Math.hypot(c+78,h+156)<14||Math.hypot(c+110,h-8)<14||Math.hypot(c+110,h-20)<14||Math.hypot(c+110,h-32)<14||Math.hypot(c+122,h-8)<14||Math.hypot(c+122,h-20)<14||Math.hypot(c+8,h+98)<14||Math.hypot(c+22,h+98)<14||Math.hypot(c-8,h+88)<14||Math.hypot(c+78,h+36)<14||Math.hypot(c-96,h+90)<14||Math.hypot(c+5,h+78)<12||Math.hypot(c-16,h+148)<14||Math.hypot(c+90,h+136)<14||Math.hypot(c-16,h+74)<12||Math.hypot(c+48,h+138)<14||Math.hypot(c-52,h+126)<14||Math.hypot(c-70,h+126)<14||Math.hypot(c-0,h+68)<12||Math.hypot(c-48,h+70)<12||Math.hypot(c+46,h+148)<12||Math.hypot(c+38,h-16)<12)continue;const p=N(c,h),f=.35+In(o,a,3)*(a===2?2.8:1.4);i.position.set(c,p+f*.25,h),i.rotation.set(In(o,a,4)*6,In(o,a,5)*6,In(o,a,6)*6),i.scale.set(f,f*(.6+In(o,a,7)*.7),f*(.7+In(o,a,8)*.5)),i.updateMatrix(),r.setMatrixAt(o,i.matrix),o++}r.count=o,n.add(r)}return n}function In(n,t,e){const i=Math.sin(n*12.9898+t*78.233+e*45.164)*43758.5453;return i-Math.floor(i)}const w0=`
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
`;function S0(n){const t=new ve(900,32,20),e=new yn({vertexShader:w0,fragmentShader:y0,uniforms:{uSunDir:{value:n.clone().normalize()}},side:Ie,depthWrite:!1}),i=new le(t,e);return i.name="sky",i}function b0(n){const t=new V,e=n.clone().normalize(),i=new h0(16769456,2.15);i.position.copy(e.clone().multiplyScalar(180)),i.castShadow=!0,i.shadow.mapSize.set(1536,1536),i.shadow.camera.near=10,i.shadow.camera.far=420,i.shadow.camera.left=-130,i.shadow.camera.right=130,i.shadow.camera.top=130,i.shadow.camera.bottom=-130,i.shadow.bias=-8e-4,t.add(i);const s=new c0(14727304,6959128,.55);t.add(s);const a=new u0(12611648,.16);t.add(a);const r=new le(new ve(7,16,16),new Nr({color:16773572}));return r.position.copy(e.clone().multiplyScalar(420)),t.add(r),t.name="sun",t}function E0(){const n=new V;n.name="mountains";const t=new Ft({color:7024156,roughness:1,flatShading:!0}),e=[[0,-300,18,70],[80,-310,14,52],[-90,-305,16,60],[220,-280,12,40],[-240,-270,13,48],[300,-40,15,55],[305,80,11,38],[-310,20,16,62],[-300,140,12,44],[40,310,17,58],[-70,300,13,46],[160,290,10,36]];for(const[i,s,a,r]of e){const o=new as(a,r,6),l=new le(o,t),c=N(i,s)+r*.35;l.position.set(i,c,s),l.rotation.y=(i+s)*.01,n.add(l)}return n}function T0(){const t=new Float32Array(2100);for(let a=0;a<700;a++)t[a*3]=(Math.random()-.5)*220,t[a*3+1]=1+Math.random()*18,t[a*3+2]=(Math.random()-.5)*220;const e=new Le;e.setAttribute("position",new Ve(t,3));const i=new Oc({color:13934698,size:.18,transparent:!0,opacity:.35,depthWrite:!1}),s=new Xp(e,i);return s.name="dust",s}function A0(n){n.fog=new Or(12880472,.00155),n.background=new Vt(12880472)}const d={steel:new Ft({color:13225425,metalness:.88,roughness:.28}),steelDark:new Ft({color:9146518,metalness:.82,roughness:.38}),tiles:new Ft({color:1710620,metalness:.15,roughness:.72}),soot:new Ft({color:2763308,metalness:.4,roughness:.55}),pad:new Ft({color:7168600,metalness:.08,roughness:.88}),padRing:new Ft({color:4866876,metalness:.1,roughness:.8}),solar:new Ft({color:727603,metalness:.55,roughness:.22}),solarFrame:new Ft({color:10133670,metalness:.7,roughness:.35}),tankCh4:new Ft({color:12868132,metalness:.35,roughness:.45}),tankO2:new Ft({color:14212579,metalness:.4,roughness:.4}),hab:new Ft({color:13616824,metalness:.15,roughness:.62}),habDark:new Ft({color:6972508,metalness:.2,roughness:.55}),glass:new Ft({color:8963232,metalness:.1,roughness:.18,transparent:!0,opacity:.42,depthWrite:!1}),plant:new Ft({color:4160056,roughness:.85}),rover:new Ft({color:12106944,metalness:.55,roughness:.4}),roverDark:new Ft({color:3356218,metalness:.4,roughness:.5}),crate:new Ft({color:9080724,metalness:.45,roughness:.5}),ice:new Ft({color:14083823,metalness:.05,roughness:.35}),rust:new Ft({color:8011560,roughness:.9}),glowWarm:new Ft({color:16761994,emissive:16751178,emissiveIntensity:.85,roughness:.4}),glowPad:new Ft({color:16765056,emissive:16756800,emissiveIntensity:.7}),concrete:new Ft({color:9076852,roughness:.92}),lattice:new Ft({color:10133668,metalness:.7,roughness:.4}),graded:new Ft({color:6968134,roughness:.94,metalness:.04}),pipe:new Ft({color:8030868,metalness:.55,roughness:.4}),cable:new Ft({color:2762274,metalness:.35,roughness:.55}),robot:new Ft({color:13159632,metalness:.62,roughness:.38}),flagIce:new Ft({color:12966116,roughness:.72,metalness:.04}),flagDeposit:new Ft({color:12081704,roughness:.8,metalness:.06}),track:new Ft({color:4006936,roughness:.97}),roadBed:new Ft({color:6044202,roughness:.97,metalness:.02}),soil:new Ft({color:4861468,roughness:.96}),plantLeaf:new Ft({color:3107378,roughness:.88}),dish:new Ft({color:14210252,metalness:.38,roughness:.42}),suit:new Ft({color:15131352,metalness:.18,roughness:.55}),suitDark:new Ft({color:6052438,metalness:.35,roughness:.5}),visor:new Ft({color:12886090,metalness:.75,roughness:.18,emissive:3811336,emissiveIntensity:.28}),battery:new Ft({color:3817026,metalness:.48,roughness:.48})};function R0(n,t="#1c120c",e="#f3e2cc"){const i=document.createElement("canvas");i.width=512,i.height=128;const s=i.getContext("2d");s.fillStyle=t,s.fillRect(0,0,512,128),s.strokeStyle=e,s.lineWidth=6,s.strokeRect(10,10,492,108),s.fillStyle=e;const a=n.length>12?36:n.length>8?44:n.length>5?54:64;s.font=`bold ${a}px sans-serif`,s.textAlign="center",s.textBaseline="middle",s.fillText(n,256,68);const r=new qp(i);return r.colorSpace=ze,r}function u(n,t,e,i,s,a=0,r=0,o=0){const l=new le(n,t);return l.position.set(e,i,s),l.rotation.set(a,r,o),l.castShadow=!0,l.receiveShadow=!0,l}function Fe(n,t,e=0){return[n,N(n,t)+e,t]}function C(n,t,e,i,s,a,r,o,l=0){const c=new Ft({map:R0(n,t,e),side:rn,roughness:.55,metalness:.08}),h=new le(new Ni(i,s),c);return h.position.set(a,r,o),h.rotation.y=l,h.castShadow=!1,h}function Et(n,t,e,i=0,s=1){const a=N(t,e)+.85*s;n.add(u(new x(1.7*s,1.5*s,1.7*s),d.crate,t,a,e,0,i,0)),n.add(u(new x(1.78*s,.08,1.78*s),d.steelDark,t,a+.78*s,e,0,i,0))}function C0(){const n=new V;n.name="settlement";const t=[],e=[];n.add(qn(0,0,{finished:!0}));const i=vi(0,0,{name:"starship",crewHab:!0});n.add(i),u1(t),e.push({id:"starship",name:"Crew hab Starship",position:new E(0,18,0)}),e.push({id:"eva",name:"EVA / airlock",position:new E(2,3,12)});const s=H1();n.add(s),t.push({type:"box",x:12,z:18,w:6,d:3}),e.push({id:"evarack",name:"EVA suit rack",position:new E(12,3,18)}),n.add(qn(52,24,{finished:!1}));const a=vi(52,24,{name:"cargo-starship",cargoOpen:!0});n.add(a),t.push({type:"cyl",x:52,z:24,r:7.4}),e.push({id:"cargo",name:"Cargo Starship",position:new E(52,18,24)}),n.add(qn(36,72,{finished:!1}));const r=vi(36,72,{name:"cargo-3",cargoOpen:!0});n.add(r),t.push({type:"cyl",x:36,z:72,r:7.4}),e.push({id:"cargo3",name:"Cargo Starship 3",position:new E(36,18,72)}),n.add(nc(24,70)),n.add(qn(-24,44,{finished:!1}));const o=vi(-24,44,{name:"cargo-4"});n.add(o),t.push({type:"cyl",x:-24,z:44,r:7.4}),e.push({id:"cargo4",name:"Cargo Starship 4",position:new E(-24,18,44)}),n.add(qn(-48,68,{finished:!1}));const l=vi(-48,68,{name:"cargo-5",cargoOpen:!0});n.add(l),t.push({type:"cyl",x:-48,z:68,r:7.4}),e.push({id:"cargo5",name:"Window-2 cargo Starship",position:new E(-48,18,68)}),n.add(nc(-60,66));const c=tm();n.add(c),t.push({type:"box",x:-64,z:80,w:8,d:8}),e.push({id:"crane",name:"Window-2 cargo crane",position:new E(-64,8,80)}),n.add(qn(78,56,{finished:!1}));const h=vi(78,56,{name:"cargo-6"});n.add(h),t.push({type:"cyl",x:78,z:56,r:7.4}),e.push({id:"cargo6",name:"Window-2 cargo Starship",position:new E(78,18,56)}),n.add(P0()),n.add(D0()),n.add(I0()),n.add(L0()),e.push({id:"prep",name:"Landing prep",position:new E(22,4,82)});const p=om();n.add(p),t.push({type:"box",x:16,z:48,w:6,d:5});for(const[Pe,Zt]of[[4,68],[4,50],[4,32]])t.push({type:"cyl",x:Pe,z:Zt,r:.45});e.push({id:"aplights",name:"Pad approach lights",position:new E(16,4,48)}),n.add(w1()),t.push({type:"box",x:-38,z:148,w:10,d:8}),e.push({id:"pad2",name:"Next-window pad",position:new E(-16,6,136)}),e.push({id:"sinter",name:"Pad sinter rig",position:new E(-38,4,148)});const f=Q1();n.add(f),t.push({type:"box",x:6,z:148,w:6,d:5});for(const[Pe,Zt]of[[2,154],[-34,154],[2,118],[-34,118]])t.push({type:"cyl",x:Pe,z:Zt,r:.55});e.push({id:"beacons",name:"Pad 2 landing beacons",position:new E(6,5,148)});const m=U0();n.add(m),e.push({id:"solar",name:"Solar farm",position:new E(82,6,-44)});const v=bm();n.add(v),t.push({type:"box",x:70,z:-44,w:1.2,d:22}),e.push({id:"fence1",name:"Farm 1 dust fence",position:new E(70,4,-44)});const M=mm();n.add(M),t.push({type:"box",x:96,z:-44,w:10,d:8}),e.push({id:"comb1",name:"Farm 1 combiner",position:new E(96,4,-44)});const _=Mm();n.add(_),t.push({type:"box",x:82,z:-28,w:12,d:8}),e.push({id:"night1",name:"Farm 1 night store",position:new E(82,4,-28)});const g=V0();n.add(g),e.push({id:"solar2",name:"Solar field 2",position:new E(112,5,-83)});const R=Sm();n.add(R),t.push({type:"box",x:98,z:-83,w:1.2,d:22}),e.push({id:"fence2",name:"Field 2 dust fence",position:new E(98,4,-83)});const A=pm();n.add(A),t.push({type:"box",x:124,z:-70,w:10,d:8}),e.push({id:"comb2",name:"Field 2 combiner",position:new E(124,4,-70)});const y=vm();n.add(y),t.push({type:"box",x:100,z:-70,w:12,d:8}),e.push({id:"night2",name:"Field 2 night store",position:new E(100,4,-70)});const B=p1();n.add(B),e.push({id:"solar3",name:"Solar field 3",position:new E(135,5,-40)});const D=ym();n.add(D),t.push({type:"box",x:122,z:-40,w:1.2,d:22}),e.push({id:"fence3",name:"Field 3 dust fence",position:new E(122,4,-40)});const I=fm();n.add(I),t.push({type:"box",x:148,z:-40,w:10,d:8}),e.push({id:"comb3",name:"Field 3 combiner",position:new E(148,4,-40)});const U=xm();n.add(U),t.push({type:"box",x:135,z:-22,w:12,d:8}),e.push({id:"night3",name:"Field 3 night store",position:new E(135,4,-22)});const T=S1();n.add(T),t.push({type:"box",x:158,z:-28,w:12,d:8}),e.push({id:"solar4",name:"Solar field 4",position:new E(158,5,-62)});const S=B1();n.add(S),t.push({type:"box",x:142,z:-62,w:1.2,d:22}),e.push({id:"dustfence",name:"Solar dust fence",position:new E(142,4,-62)});const L=J1();n.add(L),t.push({type:"box",x:172,z:-48,w:10,d:8}),e.push({id:"combiner",name:"Field 4 combiner",position:new E(172,4,-48)});const Y=nm();n.add(Y),t.push({type:"box",x:100,z:-22,w:8,d:6}),e.push({id:"trench",name:"Field 4 power trench",position:new E(100,3,-22)}),n.add(N0()),n.add(W0());const q=F0();n.add(q),t.push({type:"box",x:-68,z:-16,w:30,d:22}),e.push({id:"isru",name:"Sabatier ISRU",position:new E(-68,8,-16)});const Z=wm();n.add(Z),t.push({type:"box",x:-68,z:2,w:12,d:8}),e.push({id:"co2t1",name:"CO2 intake 1",position:new E(-68,5,2)});const nt=I1();n.add(nt),t.push({type:"box",x:-68,z:12,w:16,d:6}),e.push({id:"radiators",name:"ISRU radiators",position:new E(-68,5,12)});const $=gm();n.add($),t.push({type:"box",x:-84,z:8,w:10,d:8}),e.push({id:"condense",name:"Sabatier condenser",position:new E(-84,5,8)});const rt=b1();n.add(rt),t.push({type:"box",x:-96,z:-16,w:18,d:18}),e.push({id:"isru2",name:"Sabatier train 2",position:new E(-96,8,-16)});const J=O1();n.add(J),t.push({type:"box",x:-96,z:4,w:12,d:8}),e.push({id:"co2cap",name:"CO2 intake 2",position:new E(-96,5,4)});const ht=Cm();n.add(ht),t.push({type:"box",x:-96,z:16,w:16,d:6}),e.push({id:"radiators2",name:"ISRU radiators 2",position:new E(-96,5,16)});const _t=Im();n.add(_t),t.push({type:"box",x:-110,z:8,w:10,d:8}),e.push({id:"condense2",name:"Sabatier condenser 2",position:new E(-110,5,8)});const Rt=Lm();n.add(Rt),t.push({type:"box",x:-110,z:20,w:10,d:8}),e.push({id:"chiller2",name:"CH4 liquefaction 2",position:new E(-110,5,20)});const Xt=Um();n.add(Xt),t.push({type:"box",x:-110,z:32,w:10,d:8}),e.push({id:"o2chill2",name:"O2 liquefaction 2",position:new E(-110,5,32)});const ie=Nm();n.add(ie),t.push({type:"box",x:-122,z:8,w:12,d:8}),e.push({id:"electro2",name:"ISRU electrolysis 2",position:new E(-122,5,8)});const Q=zm();n.add(Q),t.push({type:"box",x:-122,z:20,w:10,d:8}),e.push({id:"h2tank2",name:"H2 recycle tank 2",position:new E(-122,5,20)});const ot=W1();n.add(ot),t.push({type:"box",x:-50,z:4,w:12,d:8}),e.push({id:"electro",name:"ISRU electrolysis",position:new E(-50,5,4)});const bt=jm();n.add(bt),t.push({type:"box",x:-38,z:16,w:8,d:6}),e.push({id:"isrulight",name:"ISRU plant lights",position:new E(-38,4,16)});const ut=am();n.add(ut),t.push({type:"box",x:-38,z:16,w:10,d:8}),e.push({id:"h2tank",name:"H2 recycle tank",position:new E(-38,5,16)});const Lt=cm();n.add(Lt),t.push({type:"box",x:-58,z:-36,w:12,d:8}),e.push({id:"pwater",name:"ISRU process water",position:new E(-58,5,-36)});const zt=km();n.add(zt),t.push({type:"box",x:-78,z:-36,w:12,d:8}),e.push({id:"pwater2",name:"ISRU process water 2",position:new E(-78,5,-36)});const qt=j1();n.add(qt),t.push({type:"box",x:-80,z:20,w:10,d:8}),e.push({id:"chiller",name:"CH4 liquefaction",position:new E(-80,5,20)});const he=em();n.add(he),t.push({type:"box",x:-80,z:32,w:10,d:8}),e.push({id:"o2chill",name:"O2 liquefaction",position:new E(-80,5,32)}),n.add(z0());const $t=O0();n.add($t),t.push({type:"box",x:-14,z:-104,w:14,d:8}),t.push({type:"box",x:2,z:-104,w:14,d:8}),t.push({type:"box",x:-6,z:-116,w:8,d:14}),e.push({id:"habs",name:"Hab cluster",position:new E(-6,5,-108)});const ge=X0();n.add(ge),t.push({type:"box",x:-32,z:-98,w:16,d:12}),e.push({id:"hab-kit",name:"Hab from cargo",position:new E(-32,5,-98)});const k=q0();n.add(k),t.push({type:"box",x:-46,z:-108,w:14,d:8}),t.push({type:"box",x:-46,z:-94,w:14,d:8}),t.push({type:"box",x:-58,z:-102,w:8,d:14}),e.push({id:"pressure",name:"Pressure habs",position:new E(-50,5,-100)});const Ue=h1();n.add(Ue),t.push({type:"box",x:-20,z:-132,w:14,d:8}),t.push({type:"box",x:-6,z:-132,w:14,d:8}),t.push({type:"box",x:-13,z:-142,w:8,d:14}),e.push({id:"hab3",name:"Hab street",position:new E(-13,5,-134)});const Yt=g1();n.add(Yt),Mi(t,-33,-120,"x",28),Mi(t,-6,-120,"z",24),Mi(t,-4,-58,"z",70),t.push({type:"cyl",x:2,z:-22,r:1.6}),e.push({id:"corridors",name:"Pressurized neighborhood",position:new E(-20,4,-120)});const Kt=_1();n.add(Kt),t.push({type:"box",x:-30,z:-69,w:9,d:9}),t.push({type:"box",x:-38,z:-74.2,w:7,d:4.4}),Mi(t,-36,-87,"z",24),Mi(t,-45,-74,"x",12),e.push({id:"yard",name:"Construction yard",position:new E(-36,5,-74)}),e.push({id:"hab6",name:"Hab 6",position:new E(-40,5,-76)});const Dt=im();n.add(Dt),t.push({type:"box",x:-22,z:-56,w:10,d:8}),e.push({id:"regolith",name:"Regolith stockpile",position:new E(-22,4,-56)});const oe=x1();n.add(oe),t.push({type:"box",x:-53,z:-72,w:6,d:7}),e.push({id:"med",name:"Crew ops / medical",position:new E(-50,5,-72)});const Pt=v1();n.add(Pt),t.push({type:"box",x:10,z:-124,w:14,d:10}),Mi(t,2,-128,"x",10),e.push({id:"commons",name:"Crew commons / mess",position:new E(10,5,-124)});const P=B0();n.add(P),t.push({type:"box",x:22,z:-112,w:16,d:10}),t.push({type:"box",x:32,z:-112,w:8,d:6}),e.push({id:"greenhouse",name:"CO2 life support",position:new E(22,4,-112)});const w=U1();n.add(w),t.push({type:"box",x:52,z:-112,w:14,d:9}),e.push({id:"greenhouse2",name:"Greenhouse 2",position:new E(52,4,-112)});const G=rm();n.add(G),t.push({type:"box",x:70,z:-112,w:12,d:8}),e.push({id:"food3",name:"Grow vault 4",position:new E(70,4,-112)});const tt=Z1();n.add(tt),t.push({type:"box",x:38,z:-104,w:10,d:6}),e.push({id:"ghfilter",name:"Grow dust filter",position:new E(38,4,-104)});const it=Ym();n.add(it),t.push({type:"box",x:52,z:-126,w:12,d:8}),e.push({id:"ghwater",name:"Grow process water",position:new E(52,4,-126)});const j=Km();n.add(j),t.push({type:"box",x:70,z:-126,w:10,d:8}),e.push({id:"nutrient",name:"Grow nutrient skid",position:new E(70,4,-126)});const Tt=P1();n.add(Tt),t.push({type:"box",x:8,z:-98,w:12,d:8}),e.push({id:"eclss",name:"Hab ECLSS / CO2 scrub",position:new E(8,4,-98)});const ft=Fm();n.add(ft),t.push({type:"box",x:-8,z:-98,w:12,d:8}),e.push({id:"eclss2",name:"Hab ECLSS 2",position:new E(-8,4,-98)});const xt=K1();n.add(xt),t.push({type:"box",x:22,z:-98,w:10,d:8}),e.push({id:"waste",name:"Waste / water recovery",position:new E(22,4,-98)});const jt=Om();n.add(jt),t.push({type:"box",x:-22,z:-98,w:10,d:8}),e.push({id:"waste2",name:"Waste recovery 2",position:new E(-22,4,-98)});const st=F1();n.add(st),t.push({type:"box",x:-8,z:-88,w:10,d:8}),e.push({id:"o2buf",name:"Crew O2 buffer",position:new E(-8,4,-88)});const vt=Bm();n.add(vt),t.push({type:"box",x:8,z:-88,w:10,d:8}),e.push({id:"o2buf2",name:"Crew O2 buffer 2",position:new E(8,4,-88)});const It=_m();n.add(It),t.push({type:"box",x:16,z:-86,w:10,d:8}),e.push({id:"dustlock",name:"Hab-street dust lock",position:new E(16,4,-86)});const Ut=Xm();n.add(Ut),t.push({type:"box",x:16,z:-74,w:8,d:6}),e.push({id:"evalocker",name:"Hab-street EVA locker",position:new E(16,4,-74)});const Mt=Jm();n.add(Mt),t.push({type:"box",x:0,z:-68,w:8,d:6}),e.push({id:"hablight",name:"Hab-street lights",position:new E(0,4,-68)});const Jt=o1();n.add(Jt),t.push({type:"box",x:38,z:-126,w:14,d:9}),e.push({id:"food",name:"Food / grow vault",position:new E(38,4,-126)});const kt=f1();n.add(kt),t.push({type:"box",x:8,z:-142,w:14,d:9}),e.push({id:"food2",name:"Hab-street grow vault",position:new E(8,4,-142)});const se=k1();n.add(se),t.push({type:"box",x:28,z:-140,w:10,d:8}),e.push({id:"condensate",name:"Condensate return",position:new E(28,4,-140)});const z=c1();n.add(z),t.push({type:"box",x:-60,z:-148,w:8,d:6}),t.push({type:"box",x:-64,z:-118,w:8,d:6}),t.push({type:"box",x:-18,z:-88,w:10,d:8}),e.push({id:"water",name:"Water loop",position:new E(-18,4,-88)});const dt=A1();n.add(dt),t.push({type:"box",x:18,z:-152,w:14,d:10}),e.push({id:"potable",name:"Potable water store",position:new E(18,4,-152)});const K=Rm();n.add(K),t.push({type:"box",x:32,z:-152,w:10,d:8}),e.push({id:"potable-uv",name:"Potable UV polish",position:new E(32,4,-152)});const et=R1();n.add(et),t.push({type:"box",x:-58,z:-108,w:10,d:3}),t.push({type:"box",x:-20,z:-100,w:18,d:3}),t.push({type:"box",x:22,z:-128,w:3,d:12}),e.push({id:"berms",name:"Hab dust berms",position:new E(-20,4,-100)});const gt=l1();n.add(gt),t.push({type:"box",x:68,z:-10,w:16,d:8}),t.push({type:"box",x:-22,z:-88,w:8,d:6}),e.push({id:"battery",name:"Night power store",position:new E(68,4,-10)});const pt=m1();n.add(pt),t.push({type:"box",x:68,z:6,w:16,d:8}),t.push({type:"box",x:-28,z:-138,w:8,d:6}),e.push({id:"battery2",name:"Crew night store",position:new E(68,4,6)});const Ot=z1();n.add(Ot),t.push({type:"box",x:8,z:-78,w:12,d:7}),e.push({id:"battery3",name:"Hab night store 3",position:new E(8,4,-78)});const pe=Tm();n.add(pe),t.push({type:"box",x:-18,z:-78,w:12,d:7}),e.push({id:"battery4",name:"Hab night store 4",position:new E(-18,4,-78)});const Se=Gm();n.add(Se),t.push({type:"box",x:-5,z:-78,w:8,d:6}),e.push({id:"habtrench",name:"Hab-street power trench",position:new E(-5,4,-78)});const ne=j0();n.add(ne),t.push({type:"box",x:-15,z:-8,w:10,d:7}),e.push({id:"spaceport",name:"Methalox spaceport",position:new E(-15,4,-8)});const Oe=M1();n.add(Oe),t.push({type:"box",x:20,z:8,w:16,d:12}),e.push({id:"stock",name:"Methalox stockpile",position:new E(20,4,8)});const qe=G1();n.add(qe),t.push({type:"box",x:36,z:8,w:10,d:8}),e.push({id:"ch4buf",name:"CH4 return buffer",position:new E(36,4,8)});const os=V1();n.add(os),t.push({type:"box",x:36,z:-6,w:10,d:8}),e.push({id:"o2ret",name:"O2 return buffer",position:new E(36,4,-6)});const cs=lm();n.add(cs),t.push({type:"box",x:50,z:4,w:8,d:18}),e.push({id:"mxberm",name:"Methalox farm berm",position:new E(50,4,4)});const hn=q1();n.add(hn),t.push({type:"box",x:-32,z:-22,w:10,d:8}),e.push({id:"pump",name:"Methalox pump house",position:new E(-32,4,-22)}),n.add($0()),n.add(Q0()),n.add(Ki(16,14,-.4)),n.add(Ki(8,-62,1.2)),n.add(Ki(30,74,-.2)),n.add(Ki(-94,-182,.7)),n.add(xn(-90,-148,.4,{kind:"ice",loaded:!0})),e.push({id:"rover",name:"Haul rover",position:new E(8,2,-62)}),e.push({id:"haul2",name:"Ice haul at crush",position:new E(-90,3,-148)});const Oi=r1();n.add(Oi),t.push({type:"box",x:-64,z:-90,w:10,d:8}),e.push({id:"haul",name:"Ice haul",position:new E(-64,3,-90)});const ls=k0();n.add(ls),t.push({type:"box",x:48,z:-86,w:16,d:12}),e.push({id:"workshop",name:"Workshop",position:new E(48,5,-86)});const ds=Zm();n.add(ds),t.push({type:"box",x:48,z:-70,w:8,d:6}),e.push({id:"shoplight",name:"Workshop lights",position:new E(48,4,-70)});const ei=L1();n.add(ei),t.push({type:"box",x:22,z:-80,w:12,d:8}),e.push({id:"depot",name:"Spare-parts depot",position:new E(22,4,-80)});const hs=T1();n.add(hs),t.push({type:"box",x:66,z:-74,w:16,d:12}),e.push({id:"workshop2",name:"Workshop bay 2",position:new E(66,5,-74)});const ni=Y1();n.add(ni),t.push({type:"box",x:66,z:-90,w:10,d:8}),e.push({id:"press",name:"Sinter press",position:new E(66,4,-90)});const us=hm();n.add(us),t.push({type:"box",x:82,z:-90,w:10,d:8}),e.push({id:"crib",name:"Workshop tool crib",position:new E(82,4,-90)});const fs=Hm();n.add(fs),t.push({type:"box",x:96,z:-90,w:10,d:8}),e.push({id:"rack",name:"Workshop parts rack",position:new E(96,4,-90)});const ea=Pm();n.add(ea),t.push({type:"box",x:82,z:-74,w:16,d:12}),e.push({id:"workshop3",name:"Workshop bay 3",position:new E(82,5,-74)});const na=D1();n.add(na),n.add(Ki(48,-70,.2)),e.push({id:"shelter",name:"Rover dust shelter",position:new E(48,4,-70)});for(const[Pe,Zt]of[[42.8,-73.4],[53.2,-73.4],[42.8,-66.6],[53.2,-66.6]])t.push({type:"cyl",x:Pe,z:Zt,r:.45});const ia=H0();n.add(ia),t.push({type:"cyl",x:-18,z:-138,r:3}),e.push({id:"comms",name:"Comms tower",position:new E(-18,16,-138)});const b=$1();n.add(b),t.push({type:"cyl",x:24,z:-128,r:2.2}),e.push({id:"weather",name:"Weather / dust mast",position:new E(24,12,-128)});const F=a1();n.add(F),t.push({type:"cyl",x:-32,z:-148,r:8.4}),t.push({type:"box",x:-40,z:-154,w:6,d:5}),e.push({id:"earth",name:"Earth dish · 12 min delay",position:new E(-32,12,-148)});const W=qm();n.add(W),t.push({type:"box",x:-48,z:-138,w:10,d:12}),e.push({id:"commsberm",name:"Comms dust berm",position:new E(-48,4,-138)});const X=C1();n.add(X),t.push({type:"cyl",x:-8,z:-162,r:6.2}),e.push({id:"earth2",name:"Backup Earth dish",position:new E(-8,10,-162)});const O=um();n.add(O),t.push({type:"box",x:4,z:-148,w:10,d:8}),e.push({id:"commsbatt",name:"Comms night store",position:new E(4,4,-148)});const at=Vm();n.add(at),t.push({type:"box",x:16,z:-148,w:10,d:8}),e.push({id:"commsinv",name:"Comms spare inverter",position:new E(16,4,-148)});const mt=G0();n.add(mt),t.push({type:"cyl",x:-58,z:-158,r:6}),e.push({id:"ice",name:"Ice mining rig",position:new E(-58,8,-158)});const wt=$m();n.add(wt),t.push({type:"box",x:-46,z:-148,w:8,d:6}),e.push({id:"icelight",name:"Ice-mine lights",position:new E(-46,4,-148)});const yt=dm();n.add(yt),t.push({type:"box",x:-40,z:-168,w:10,d:12}),e.push({id:"ice1berm",name:"Ice mine 1 berm",position:new E(-40,4,-168)});const Nt=E1();n.add(Nt),t.push({type:"cyl",x:-78,z:-172,r:6}),e.push({id:"ice2",name:"Ice mine 2",position:new E(-78,8,-172)});const Bt=Am();n.add(Bt),t.push({type:"box",x:-64,z:-184,w:10,d:12}),e.push({id:"ice2berm",name:"Ice mine 2 berm",position:new E(-64,4,-184)});const St=Dm();n.add(St),t.push({type:"box",x:-78,z:-156,w:10,d:8}),e.push({id:"melt2",name:"Ice melt still 2",position:new E(-78,5,-156)});const Qt=N1();n.add(Qt),t.push({type:"box",x:-90,z:-158,w:12,d:10}),e.push({id:"ice-depot",name:"Ice crush depot",position:new E(-90,4,-158)});const ae=Em();n.add(ae),t.push({type:"box",x:-102,z:-158,w:10,d:8}),e.push({id:"crushcover",name:"Ice crush cover",position:new E(-102,4,-158)});const ce=Wm();n.add(ce),t.push({type:"box",x:-90,z:-136,w:10,d:8}),e.push({id:"weigh",name:"Ice haul weigh",position:new E(-90,4,-136)});const Ee=X1();n.add(Ee),t.push({type:"box",x:-58,z:-142,w:10,d:8}),e.push({id:"melt",name:"Ice melt still",position:new E(-58,5,-142)});const ee=Z0();n.add(ee),t.push({type:"cyl",x:-82,z:-176,r:2.4}),e.push({id:"survey",name:"Resource survey",position:new E(-88,5,-188)});const At=sm();return n.add(At),t.push({type:"cyl",x:-124,z:-188,r:2.4}),e.push({id:"survey2",name:"West ice survey",position:new E(-124,5,-188)}),n.add($e(42,22,.6)),n.add($e(39,26,-.4)),n.add($e(26,78,2.2)),n.add($e(26,68,.5)),n.add($e(22,72,-.8)),n.add($e(-80,-174,.8)),n.add($e(-34,-92,-1.2)),n.add($e(-28,-104,.3)),n.add($e(16,-120,.6)),n.add($e(70,-70,.4)),n.add($e(-28,128,1.1)),n.add(J0()),d1(t),n.add(n1()),n.add(i1()),n.add(s1()),{group:n,colliders:t,landmarks:e}}function qn(n,t,e={}){const i=new V;i.name=e.finished?"pad":"cargo-pad";const s=N(n,t),a=e.finished?20:16,r=e.finished?d.pad:d.graded;if(i.add(u(new H(a,a,.45,48),r,n,s+.15,t)),e.finished){i.add(u(new Wt(a+.4,.55,8,48),d.padRing,n,s+.4,t,Math.PI/2,0,0)),i.add(u(new es(7.5,8.1,40),d.padRing,n,s+.4,t,-Math.PI/2,0,0)),i.add(u(new es(13,13.5,40),d.padRing,n,s+.4,t,-Math.PI/2,0,0));for(let c=0;c<12;c++){const h=c/12*Math.PI*2;i.add(u(new x(.35,.55,.35),d.glowPad,n+Math.cos(h)*19.2,s+.55,t+Math.sin(h)*19.2))}}else{i.add(u(new Wt(a+.3,.4,8,36),d.padRing,n,s+.32,t,Math.PI/2,0,0));for(let c=0;c<8;c++){const h=c/8*Math.PI*2;i.add(u(new x(.28,.4,.28),d.glowPad,n+Math.cos(h)*(a-.6),s+.45,t+Math.sin(h)*(a-.6)))}}const o=e.finished?26:21,l=u(new Wt(o,e.finished?2.2:1.8,8,40),d.rust,n,s-.4,t,Math.PI/2,0,0);return l.scale.set(1,.45,1),i.add(l),i}function vi(n=0,t=0,e={}){const i=new V;i.name=e.name||"starship",i.position.set(n,0,t);const s=N(n,t)-3.1,a=36,r=4.4;i.add(u(new H(r,r,a,28),d.steel,0,s+8+a/2,0));const o=u(new ve(r,24,16,0,Math.PI*2,0,Math.PI/2),d.steel,0,s+8+a,0);o.scale.set(1,1.55,1),i.add(o);const l=u(new H(r+.04,r+.04,a*.72,20,1,!0,Math.PI*.55,Math.PI*.9),d.tiles,0,s+8+a*.38,0);i.add(l);const c=u(new H(r+.15,r+.55,3.2,24),d.soot,0,s+6.4,0);i.add(c);for(let f=0;f<3;f++){const m=f/3*Math.PI*2;i.add(u(new H(.55,1.15,2.2,12),d.soot,Math.cos(m)*1.5,s+4.6,Math.sin(m)*1.5))}const h=new x(1.1,7.2,3.6);i.add(u(h,d.steelDark,-r-.2,s+14,0,0,0,.18)),i.add(u(h,d.steelDark,r+.2,s+14,0,0,0,-.18));const p=new x(.45,4.2,2.4);i.add(u(p,d.steelDark,-r+.2,s+40,1.2,.15,0,.4)),i.add(u(p,d.steelDark,r-.2,s+40,1.2,.15,0,-.4));for(let f=0;f<6;f++){const m=f/6*Math.PI*2+.2,v=new V,M=u(new x(.22,8.2,.22),d.steelDark,0,0,0,0,0,.72),_=u(new x(1.3,.18,.9),d.steel,3.4,-3.7,0);v.add(M,_),v.position.set(Math.cos(m)*3.2,s+7.6,Math.sin(m)*3.2),v.rotation.y=-m,i.add(v)}for(let f=0;f<5;f++)i.add(u(new x(.7,.35,.08),d.tiles,0,s+28+f*2.1,r+.05));if(i.add(u(new x(1.6,.12,.12),d.glowWarm,0,s+44.5,0)),e.cargoOpen){i.add(u(new x(2.4,6.2,3.4),d.soot,-r+.4,s+16.4,0)),i.add(u(new x(.12,6.4,3.6),d.steel,-r-2.1,s+16.6,2,0,1.15,0));const f=s+13.2,m=N(n,t)+.22,v=-r-.3,M=-r-12.4,_=Math.hypot(v-M,f-m),g=Math.atan2(f-m,v-M);i.add(u(new x(_,.16,3.1),d.steelDark,(v+M)/2,(f+m)/2,0,0,0,g)),i.add(u(new x(10.5,.18,.18),d.lattice,-7.2,s+22.5,0,0,0,.55)),i.add(u(new H(.05,.05,7.2,6),d.cable,-12.2,s+16.2,0)),i.add(u(new x(1.5,1.3,1.5),d.crate,-12.2,s+12.4,0)),i.add(C("CARGO","#1a100c","#f0c089",3.4,.9,-r-.1,s+24,0,-Math.PI/2))}if(e.crewHab){const f=s+13;i.add(u(new H(1.2,1.2,2.7,14),d.habDark,0,f,r+1.35,Math.PI/2,0,0)),i.add(u(new Wt(1.22,.09,6,16),d.steel,0,f,r+.28)),i.add(u(new Wt(1.22,.09,6,16),d.steel,0,f,r+2.55)),i.add(u(new x(1.05,1.75,.1),d.steelDark,0,f,r+2.72)),i.add(u(new x(3.4,.14,2.6),d.steelDark,0,f-1.28,r+2.9)),i.add(u(new x(.1,1.15,2.5),d.steel,-1.6,f-.65,r+2.9)),i.add(u(new x(.1,1.15,2.5),d.steel,1.6,f-.65,r+2.9));const m=f-1.28,v=N(n,t)+.28,M=r+3.6,_=r+13.2,g=11;for(let D=0;D<g;D++){const I=D/(g-1);i.add(u(new x(2.15,.12,.95),d.steelDark,0,m+(v-m)*I,M+(_-M)*I))}const R=Math.hypot(M-_,m-v),A=Math.atan2(m-v,_-M);i.add(u(new x(2.25,.08,R),d.steel,0,(m+v)/2-.12,(M+_)/2,A,0,0)),i.add(u(new x(.08,.85,R),d.steel,-1.12,(m+v)/2+.35,(M+_)/2,A,0,0)),i.add(u(new x(.08,.85,R),d.steel,1.12,(m+v)/2+.35,(M+_)/2,A,0,0));const y=_+1.55,B=N(n,t)+1.35;i.add(u(new H(1.35,1.35,2.5,12),d.habDark,0,B,y)),i.add(u(new x(1.05,1.7,.1),d.steelDark,0,B+.05,y+1.4)),i.add(u(new Wt(1.38,.07,6,14),d.steel,0,B+1.28,y,Math.PI/2,0,0)),i.add(u(new x(2.2,.12,2.2),d.steelDark,0,N(n,t)+.12,y));for(let D=0;D<5;D++)i.add(u(new x(.85,.48,.08),d.glowWarm,1.55,s+16.5+D*3.4,r+.06)),i.add(u(new x(.08,.48,.85),d.glowWarm,r+.06,s+16.5+D*3.4,-1.35));i.add(u(new H(.55,.55,.2,12),d.steel,2.55,s+14.2,r+.04,Math.PI/2,0,0)),i.add(u(new Wt(.52,.06,6,12),d.steelDark,2.55,s+14.2,r+.14)),i.add(C("CREW HAB","#1a100c","#f0c089",3.4,.85,0,f+2.55,r+2.35)),i.add(C("AIRLOCK","#1a100c","#f0c089",2.3,.55,1.85,f+.15,r+2.05,Math.PI/2))}return i}function P0(){const n=new V;n.name="crates";const t=[[10,8,0],[12.2,8.4,.4],[10.4,10.6,1.6],[13.5,6.2,-.3],[-12,9,.5],[-14,7.2,2.1],[8.5,-11,0],[6.4,-12.5,1.1]];for(const[e,i,s]of t)Et(n,e,i,s);return n}function D0(){const n=new V;n.name="cargo-offload";const t=[[40,22,.2],[38.2,24.1,-.3],[41.4,26.2,.8],[36.5,21.4,.1],[37.8,27.6,1.4],[34.8,24.8,-.5],[39.2,19.6,.6],[35.4,19.2,.15]];for(const[a,r,o]of t)Et(n,a,r,o);Et(n,38.6,22.8,.1,1.15),Et(n,33.2,20.4,.25,1.2),Et(n,31.4,22.1,-.2,1.05);const[e,i,s]=Fe(36,23.5,.08);return n.add(u(new x(8.5,.12,4.2),d.steelDark,e,i,s,0,.15,0)),n.add(C("HAB KIT","#1a100c","#f0c089",2.6,.7,33.2,N(33.2,20.4)+2.5,20.4,.35)),n}function I0(){const n=new V;n.name="approach";const t=[{fx:0,fz:118,tx:0,tz:32,n:7},{fx:52,fz:90,tx:52,tz:42,n:5},{fx:36,fz:128,tx:36,tz:90,n:4},{fx:-24,fz:92,tx:-24,tz:60,n:4},{fx:-48,fz:118,tx:-48,tz:86,n:4},{fx:78,fz:104,tx:78,tz:74,n:4},{fx:-16,fz:178,tx:-16,tz:154,n:5}];for(const e of t){const i=Math.atan2(e.tx-e.fx,e.tz-e.fz);for(let s=0;s<e.n;s++){const a=s/(e.n-1),r=e.fx+(e.tx-e.fx)*a,o=e.fz+(e.tz-e.fz)*a,l=N(r,o),c=new V;c.add(u(new x(2.5,.16,.34),d.glowPad,-.75,0,0,0,.5,0)),c.add(u(new x(2.5,.16,.34),d.glowPad,.75,0,0,0,-.5,0)),c.position.set(r,l+.14,o),c.rotation.y=i,n.add(c)}}return n}function L0(){const n=new V;n.name="prep-pad";const t=22,e=82,i=N(t,e);n.add(u(new H(14,14,.28,36),d.graded,t,i+.08,e));const s=u(new Wt(16.2,1.7,8,28,Math.PI*1.35),d.rust,t,i-.15,e,Math.PI/2,.5,0);s.scale.set(1,.42,1),n.add(s);for(let r=0;r<8;r++){const o=r/8*Math.PI*2+.2,l=t+Math.cos(o)*15.2,c=e+Math.sin(o)*15.2,h=N(l,c);n.add(u(new x(.08,1.7,.08),d.steel,l,h+.85,c)),n.add(u(new x(.28,.16,.06),d.glowPad,l,h+1.62,c,0,o,0))}const a=[[12,74],[30,88],[14,90]];for(const[r,o]of a){const l=u(new me(2.2,0),d.rust,r,N(r,o)+.9,o);l.scale.set(1.2,.65,1.05),n.add(l)}return n.add(C("LANDING PREP","#1a100c","#f0c089",4.4,1,t+10.5,i+2.4,e+2,-.6)),n.add(u(new x(.12,2.4,.12),d.steelDark,t+10.5,i+1.2,e+2)),n}function U0(){const n=new V;n.name="solar";const t=10,e=8;for(let r=0;r<t;r++)for(let o=0;o<e;o++){const l=58+r*5.4,c=-22-o*6.2,h=N(l,c),p=u(new x(.18,1.6,.18),d.solarFrame,l,h+.8,c),f=u(new x(4.6,.08,2.3),d.solar,l,h+1.55,c,-.55,.15,0),m=u(new x(4.75,.05,2.42),d.solarFrame,l,h+1.5,c,-.55,.15,0);n.add(p,f,m)}for(let r=0;r<5;r++){const o=58+r*5.4,l=-22-8*6.2,c=N(o,l);n.add(u(new x(.18,1.6,.18),d.solarFrame,o,c+.8,l)),r<2&&n.add(u(new x(4.6,.08,2.3),d.solar,o+1.1,c+.22,l+1.5,1.2,.25,0))}const[i,s,a]=Fe(54,-18,.7);return n.add(u(new x(2.2,1.4,1.4),d.habDark,i,s,a)),n.add(C("POWER","#111111","#f4e6c8",2,.55,i,s+.2,a+.75)),n}function N0(){const n=new V;n.name="power-run";const t=54,e=-18,i=-54,s=-16,a=[],r=10;for(let o=0;o<=r;o++){const l=o/r,c=t+(i-t)*l,h=e+(s-e)*l,p=N(c,h);n.add(u(new H(.09,.11,4.4,6),d.steelDark,c,p+2.2,h)),n.add(u(new x(1.15,.08,.08),d.steel,c,p+4.35,h)),a.push({x:c,y:p+4.32,z:h})}for(let o=0;o<a.length-1;o++){const l=a[o],c=a[o+1];for(const h of[-.38,.38]){const p=new Fi([new E(l.x,l.y,l.z+h),new E((l.x+c.x)/2,(l.y+c.y)/2-.75,(l.z+c.z)/2+h),new E(c.x,c.y,c.z+h)]),f=new le(new ti(p,6,.035,4,!1),d.cable);f.castShadow=!1,n.add(f)}}return n}function z0(){const n=new V;n.name="water-feed";const t=-58,e=-150,i=-68,s=-26,a=12,r=[];for(let c=0;c<=a;c++){const h=c/a,p=t+(i-t)*h,f=e+(s-e)*h,m=N(p,f)+1.15;r.push(new E(p,m,f)),c%2===0&&n.add(u(new x(.16,1.1,.16),d.steelDark,p,N(p,f)+.55,f))}const o=new Fi(r),l=new le(new ti(o,24,.16,6,!1),d.pipe);return l.castShadow=!1,n.add(l),n}function F0(){const n=new V;n.name="isru";const t=-68,e=-16,i=N(t,e);n.add(u(new x(30,.4,22),d.concrete,t,i+.15,e));const s=u(new H(1.8,2,13,12),d.steelDark,t+4,i+6.8,e);n.add(s),n.add(u(new Wt(2.5,.18,6,16),d.steel,t+4,i+10.2,e,Math.PI/2,0,0)),n.add(u(new Wt(2.5,.18,6,16),d.steel,t+4,i+7.4,e,Math.PI/2,0,0)),n.add(C("SABATIER","#1a100c","#f0c089",5.2,1.15,t+6.1,i+8.2,e,Math.PI/2));const a=u(new H(3,3,13,20),d.tankCh4,t-8,i+7.1,e+5.4,0,0,Math.PI/2),r=u(new H(3,3,13,20),d.tankO2,t-8,i+7.1,e-5.2,0,0,Math.PI/2);n.add(a,r),n.add(C("CH4","#6a2208","#f4e6c8",3.6,1,t-1.2,i+7.1,e+5.4)),n.add(C("O2","#2a3340","#e8eef4",3.6,1,t-1.2,i+7.1,e-5.2)),n.add(u(new H(2.2,2.2,7.2,16),d.pipe,t-4,i+4,e-10.4)),n.add(C("H2O","#1a2830","#d6e6ef",2.6,.75,t-4,i+5.6,e-8.1));const o=u(new me(2.1,0),d.ice,t+1.5,i+1.1,e-10.2);return o.scale.set(1.15,.6,1),n.add(o),n.add(u(new H(.55,.55,7.5,10),d.steel,t+10.5,i+4.1,e-5.4)),n.add(u(new H(2.3,.7,2.6,14),d.steelDark,t+10.5,i+8.8,e-5.4)),n.add(u(new Wt(2.05,.1,6,16),d.steel,t+10.5,i+10.15,e-5.4,Math.PI/2,0,0)),n.add(C("CO2","#1a100c","#f0c089",2.4,.7,t+10.5,i+5.8,e-3.2)),n.add(u(new x(4.2,3,3.2),d.habDark,t+10,i+1.8,e+4.2)),n.add(C("POWER","#111111","#f4e6c8",2.2,.55,t+10,i+2.6,e+5.9)),n.add(u(new H(.16,.16,10,8),d.pipe,t+7.2,i+3.4,e-2.6,0,0,Math.PI/2)),n.add(u(new H(.16,.16,9,8),d.pipe,t-1.5,i+3.6,e+2.4,0,0,Math.PI/2)),n.add(u(new H(.16,.16,8.5,8),d.steel,t-1.5,i+3.6,e-2.2,0,0,Math.PI/2)),n.add(u(new H(.14,.14,6.4,8),d.cable,t+12.2,i+3.8,e+1.2,0,0,Math.PI/2)),n}function O0(){const n=new V;n.name="habs";const t=[[-14,-104,0],[2,-104,0],[-6,-116,1.57]];for(const[l,c,h]of t){const p=N(l,c),f=u(new H(3.1,3.1,12,18),d.hab,l,p+3.2,c,0,0,Math.PI/2);f.rotation.y=h,n.add(f),n.add(u(new ve(3.1,14,10),d.hab,l+Math.cos(h)*6,p+3.2,c+Math.sin(h)*6)),n.add(u(new ve(3.1,14,10),d.hab,l-Math.cos(h)*6,p+3.2,c-Math.sin(h)*6));for(let m=-2;m<=2;m++){const v=l+Math.cos(h)*m*2,M=c+Math.sin(h)*m*2;n.add(u(new x(.9,.7,.08),d.glowWarm,v,p+3.3,M+(h===0?3.15:0)))}}const[e,i,s]=Fe(-6,-96,1.4);n.add(u(new H(1.5,1.5,2.6,12),d.habDark,e,i,s)),n.add(u(new x(1.1,1.8,.12),d.steelDark,e,i+.1,s+1.5));const[a,r,o]=Fe(-6,-108,6.8);return n.add(u(new ve(4.4,18,12,0,Math.PI*2,0,Math.PI/2),d.hab,a,r,o)),n.add(C("HAB 1","#1a100c","#f0c089",2.6,.7,-6,N(-6,-96)+3.6,-94.4)),n}function B0(){const n=new V;n.name="greenhouse";const t=22,e=-112,i=N(t,e);n.add(u(new x(15.2,.25,8.6),d.concrete,t,i+.1,e));const s=new le(new H(4.15,4.15,14.2,18,1,!1,0,Math.PI),d.glass);s.rotation.z=Math.PI/2,s.position.set(t,i+4.1,e),s.castShadow=!1,n.add(s),n.add(u(new x(14.2,.1,8.4),d.solarFrame,t,i+4.15,e));for(let l=-2;l<=2;l++)n.add(u(new Wt(4.12,.055,6,16,Math.PI),d.solarFrame,t+l*2.7,i+4.1,e,0,Math.PI/2,0));for(let l=-2;l<=2;l++){n.add(u(new x(2.05,.26,6.6),d.soil,t+l*2.35,i+.36,e));for(let c=-2;c<=2;c++){const h=c%2===0?d.plant:d.plantLeaf;n.add(u(new x(1.45,.52,.82),h,t+l*2.35,i+.72,e+c*1.12)),n.add(u(new x(.55,.42,.4),d.plantLeaf,t+l*2.35+.2,i+1.05,e+c*1.12))}n.add(u(new x(1.7,.05,6.1),d.glowWarm,t+l*2.35,i+3.55,e))}n.add(u(new x(1.2,2,.15),d.habDark,t-7.1,i+1.2,e));const a=t+10.4,r=e,o=N(a,r);return n.add(u(new x(5.4,.2,4.6),d.concrete,a,o+.08,r)),n.add(u(new H(.52,.52,5.4,10),d.steel,a+1.15,o+2.9,r-1.05)),n.add(u(new H(1.75,.55,1.7,14),d.steelDark,a+1.15,o+6.2,r-1.05)),n.add(u(new Wt(1.5,.08,6,14),d.steel,a+1.15,o+7.1,r-1.05,Math.PI/2,0,0)),n.add(C("CO2","#1a100c","#f0c089",1.9,.5,a+1.15,o+3.7,r+.35)),n.add(u(new x(2.5,1.85,1.9),d.habDark,a-.7,o+1.08,r+.95)),n.add(C("COMPRESS","#1a100c","#f0c089",2.35,.55,a-.7,o+1.55,r+1.95)),n.add(u(new H(.14,.14,6.4,8),d.pipe,t+6.6,i+1.55,e,0,0,Math.PI/2)),n.add(u(new H(.68,.68,2.35,12),d.tankO2,t-5.5,i+1.45,e+5.15)),n.add(C("O2","#2a3340","#e8eef4",1.35,.42,t-5.5,i+1.65,e+5.95)),n.add(C("LIFE SUPPORT","#1a100c","#f0c089",3.7,.7,t,i+5.55,e+.15)),n.add(C("COMPRESSED CO2","#1a100c","#d6b48a",3.5,.55,t,i+4.75,e+.15)),n}function Ki(n,t,e){const i=new V;i.name="rover";const s=N(n,t);i.position.set(n,s,t),i.rotation.y=e,i.add(u(new x(3.4,1.1,2.1),d.rover,0,1.35,0)),i.add(u(new x(1.4,.7,1.5),d.roverDark,1.2,2.1,0)),i.add(u(new x(2.2,.08,1.6),d.solar,0,2,0)),i.add(u(new H(.07,.07,2.1,6),d.steel,-.4,2.9,0)),i.add(u(new x(.25,.2,.25),d.roverDark,-.4,4,0));const a=new H(.55,.55,.35,12),r=[[-1.2,.55,1.15],[.1,.55,1.15],[1.2,.55,1.15],[-1.2,.55,-1.15],[.1,.55,-1.15],[1.2,.55,-1.15]];for(const[o,l,c]of r)i.add(u(a,d.roverDark,o,l,c,Math.PI/2,0,0));return i}function $e(n,t,e){const i=new V;i.name="optimus";const s=N(n,t);return i.position.set(n,s,t),i.rotation.y=e,i.add(u(new x(.42,.62,.24),d.robot,0,1.28,0)),i.add(u(new H(.14,.15,.22,10),d.robot,0,1.72,0)),i.add(u(new x(.16,.08,.04),d.steelDark,0,1.74,.14)),i.add(u(new x(.12,.48,.12),d.robot,-.28,1.22,0)),i.add(u(new x(.12,.48,.12),d.robot,.28,1.22,0)),i.add(u(new x(.14,.62,.14),d.steelDark,-.1,.62,0)),i.add(u(new x(.14,.62,.14),d.steelDark,.1,.62,0)),i}function k0(){const n=new V;n.name="workshop";const t=48,e=-86,i=N(t,e),s=u(new H(6.2,6.2,16,16,1,!1,0,Math.PI),d.habDark,t,i+3.4,e);return s.rotation.z=Math.PI/2,n.add(s),n.add(u(new x(16,.3,10),d.concrete,t,i+.1,e)),n.add(u(new x(.2,4.2,6.5),d.steelDark,t-7.8,i+2.2,e)),n.add(u(new x(2.4,1.1,1.4),d.crate,t+2,i+.8,e+1.5)),n.add(u(new x(4.6,.16,.16),d.steel,t+1.2,i+.35,e-2.8)),n.add(u(new x(4.6,.16,.16),d.steel,t+1.2,i+.55,e-3.05)),n.add(C("WORKSHOP","#1a100c","#f0c089",3.6,.85,t,i+5.6,e+.2)),n}function H0(){const n=new V;n.name="comms";const t=-18,e=-138,i=N(t,e);for(let a=0;a<8;a++)n.add(u(new x(.18,3.2,.18),d.lattice,t-.7,i+1.6+a*3,e-.7)),n.add(u(new x(.18,3.2,.18),d.lattice,t+.7,i+1.6+a*3,e-.7)),n.add(u(new x(.18,3.2,.18),d.lattice,t-.7,i+1.6+a*3,e+.7)),n.add(u(new x(.18,3.2,.18),d.lattice,t+.7,i+1.6+a*3,e+.7)),n.add(u(new x(1.6,.1,.1),d.lattice,t,i+3+a*3,e-.7)),n.add(u(new x(1.6,.1,.1),d.lattice,t,i+3+a*3,e+.7));const s=u(new ve(3.2,16,10,0,Math.PI*2,0,Math.PI/2.4),d.steel,t,i+26.5,e,-.7,.4,0);return n.add(s),n.add(u(new H(.08,.08,2.2,6),d.steelDark,t+.4,i+27.4,e+1.1,.6,0,0)),n}function G0(){const n=new V;n.name="ice-mine";const t=-58,e=-158,i=N(t,e);n.add(u(new x(8,.3,8),d.concrete,t,i+.1,e)),n.add(u(new x(.28,14,.28),d.lattice,t-2.2,i+7,e-2.2)),n.add(u(new x(.28,14,.28),d.lattice,t+2.2,i+7,e-2.2)),n.add(u(new x(.28,14,.28),d.lattice,t-2.2,i+7,e+2.2)),n.add(u(new x(.28,14,.28),d.lattice,t+2.2,i+7,e+2.2)),n.add(u(new x(5.2,.25,5.2),d.steelDark,t,i+14.2,e)),n.add(u(new H(.35,.55,9,10),d.steel,t,i+5,e)),n.add(u(new as(.7,1.6,8),d.soot,t,i+.9,e));const s=u(new me(3.4,0),d.ice,t+7.5,i+1.6,e+1.2);return s.scale.set(1.3,.7,1.1),n.add(s),n.add(u(new x(6,.35,1.1),d.steelDark,t+3.4,i+1.4,e,0,0,-.18)),n.add(C("ICE","#1a2830","#d6e6ef",2.2,.65,t,i+8.4,e+2.6)),n}function Ys(n,t,e,i,s){const a=N(t,e);n.add(u(new H(.05,.07,3.2,6),d.steelDark,t,a+1.6,e)),n.add(u(new x(1.15,.7,.04),s,t+.58,a+2.75,e)),n.add(C(i,"#1a100c","#f0c089",1.45,.4,t+.58,a+2.75,e+.05))}function Wr(n,t,e,i){const s=N(t,e);n.add(u(new x(.07,1.55,.07),d.steelDark,t,s+.78,e)),n.add(u(new x(.38,.22,.03),i,t+.2,s+1.42,e))}function Tr(n,t,e,i=0){const s=N(t,e);n.add(u(new x(.85,.55,.65),d.crate,t,s+.32,e,0,i,0)),n.add(u(new x(.88,.06,.68),d.steelDark,t,s+.62,e,0,i,0))}function V0(){const n=new V;n.name="solar-2";const t=6,e=4;for(let r=0;r<t;r++)for(let o=0;o<e;o++){const l=98+r*5.4,c=-74-o*6.2,h=N(l,c),p=u(new x(.18,1.6,.18),d.solarFrame,l,h+.8,c),f=u(new x(4.6,.08,2.3),d.solar,l,h+1.55,c,-.55,.15,0),m=u(new x(4.75,.05,2.42),d.solarFrame,l,h+1.5,c,-.55,.15,0);n.add(p,f,m)}const[i,s,a]=Fe(96,-72,.7);return n.add(u(new x(2.2,1.4,1.4),d.habDark,i,s,a)),n.add(C("POWER","#111111","#f4e6c8",2,.55,i,s+.2,a+.75)),n}function W0(){const n=new V;n.name="solar-tie";const t=90,e=-48,i=112,s=-83,a=[],r=5;for(let o=0;o<=r;o++){const l=o/r,c=t+(i-t)*l,h=e+(s-e)*l,p=N(c,h);n.add(u(new H(.09,.11,4.4,6),d.steelDark,c,p+2.2,h)),n.add(u(new x(1.15,.08,.08),d.steel,c,p+4.35,h)),a.push({x:c,y:p+4.32,z:h})}for(let o=0;o<a.length-1;o++){const l=a[o],c=a[o+1];for(const h of[-.38,.38]){const p=new Fi([new E(l.x,l.y,l.z+h),new E((l.x+c.x)/2,(l.y+c.y)/2-.65,(l.z+c.z)/2+h),new E(c.x,c.y,c.z+h)]),f=new le(new ti(p,6,.035,4,!1),d.cable);f.castShadow=!1,n.add(f)}}return n}function X0(){const n=new V;n.name="hab-assembly";const t=-32,e=-98,i=N(t,e);n.add(u(new x(18,.22,14),d.concrete,t,i+.08,e));const s=[[-5,-2.2],[5,-2.2],[-5,2.2],[5,2.2]];for(const[r,o]of s)n.add(u(new H(.18,.28,1.85,8),d.steelDark,t+r,i+1.02,e+o)),n.add(u(new x(.72,.12,.72),d.steel,t+r,i+.14,e+o)),n.add(u(new x(.55,.1,.55),d.steel,t+r,i+1.96,e+o));const a=i+3.55;n.add(u(new H(3,3,11,16),d.hab,t,a,e,0,0,Math.PI/2)),n.add(u(new ve(3,14,10),d.hab,t-5.5,a,e)),n.add(u(new ve(3,14,10,0,Math.PI*2,0,Math.PI/2),d.hab,t+8.4,i+1.55,e+.45,.22,.35,.12)),n.add(u(new H(1.35,1.35,2.4,12),d.habDark,t,a,e+4.15,Math.PI/2,0,0)),n.add(u(new x(1,1.65,.1),d.steelDark,t,a,e+5.45)),n.add(u(new Wt(1.38,.08,6,14),d.steel,t,a,e+3.05,0,0,0));for(const[r,o]of[[-7.2,4.6],[6.8,4.8],[-6.4,-5.2]])n.add(u(new x(.12,3.6,.12),d.lattice,t+r,i+1.9,e+o)),n.add(u(new x(.12,3.6,.12),d.lattice,t+r+1.4,i+1.9,e+o)),n.add(u(new x(1.6,.08,.08),d.lattice,t+r+.7,i+3.7,e+o));return Et(n,t-8.2,e+6.2,.2),Et(n,t-6.3,e+7.4,-.35),Et(n,t+7.1,e-5.6,.5,1.1),Et(n,t+5.4,e-6.4,.15),n.add(C("HAB KIT","#1a100c","#f0c089",3,.75,t,i+6.4,e+3.2)),n.add(C("AIRLOCK","#1a100c","#f0c089",2.2,.55,t+2.4,a+.2,e+4.2,Math.PI/2)),n}function ln(n,t,e,i,s={}){const a=N(t,e),r=s.r||2.85,o=s.len||10.4,l=s.onStands?a+3.4:a+3.05,c=Math.cos(i),h=Math.sin(i);if(s.onStands)for(const[f,m]of[[-4.1,-2.05],[4.1,-2.05],[-4.1,2.05],[4.1,2.05]]){const v=t+c*f-h*m,M=e+h*f+c*m;n.add(u(new H(.16,.26,1.75,8),d.steelDark,v,a+.98,M)),n.add(u(new x(.7,.12,.7),d.steel,v,a+.14,M)),n.add(u(new x(.52,.1,.52),d.steel,v,a+1.9,M))}else for(const[f,m]of[[-3.6,0],[3.6,0]]){const v=t+c*f-h*m,M=e+h*f+c*m;n.add(u(new x(1.6,.55,1.15),d.steelDark,v,a+.38,M,0,i,0))}const p=u(new H(r,r,o,16),d.hab,t,l,e,0,0,Math.PI/2);if(p.rotation.y=i,n.add(p),!s.partial)n.add(u(new ve(r,14,10),d.hab,t+c*(o/2),l,e+h*(o/2))),n.add(u(new ve(r,14,10),d.hab,t-c*(o/2),l,e-h*(o/2)));else{n.add(u(new ve(r,14,10),d.hab,t-c*(o/2),l,e-h*(o/2)));const f=t+c*(o/2+2.3),m=e+h*(o/2+2.3);n.add(u(new ve(r,14,10,0,Math.PI*2,0,Math.PI/2),d.hab,f,a+1.45,m,.22,.3,.1))}for(let f=-2;f<=2;f++){const m=t+c*f*1.75,v=e+h*f*1.75;n.add(u(new x(.8,.55,.08),d.glowWarm,m-h*r,l+.08,v+c*r))}if(s.airlock){const f=t-h*(r+1.15),m=e+c*(r+1.15);n.add(u(new H(1.15,1.15,2.2,12),d.habDark,f,l,m,Math.PI/2,i,0)),n.add(u(new x(1,1.6,.1),d.steelDark,f-h*1.15,l,m+c*1.15,0,i,0)),n.add(u(new Wt(1.18,.07,6,14),d.steel,f+h*.2,l,m-c*.2,0,i,0)),n.add(C("AIRLOCK","#1a100c","#f0c089",2.15,.5,f-h*.2,l+1.45,m+c*.2,i))}s.label&&n.add(C(s.label,"#1a100c","#f0c089",2.7,.65,t,l+r+.55,e+.15,i))}function q0(){const n=new V;n.name="pressure-habs";const t=N(-46,-101);n.add(u(new x(28,.2,22),d.concrete,-50,t+.06,-101)),ln(n,-46,-108,0,{airlock:!0,label:"HAB 2"}),ln(n,-46,-94,0,{onStands:!0,airlock:!0,label:"HAB KIT"});const e=N(-46,-101)+3.15;return n.add(u(new H(1.15,1.15,8.2,12),d.habDark,-46,e,-101,Math.PI/2,0,0)),n.add(u(new Wt(1.2,.08,6,14),d.steel,-46,e,-105.1,Math.PI/2,0,0)),n.add(u(new Wt(1.2,.08,6,14),d.steel,-46,e,-96.9,Math.PI/2,0,0)),n.add(C("CONNECT","#1a100c","#f0c089",2.4,.5,-46,e+1.55,-101)),ln(n,-58,-102,Math.PI/2,{onStands:!0,partial:!0,label:"MOD"}),Et(n,-54.5,-110.2,.25),Et(n,-52.8,-111.4,-.3,1.08),Et(n,-61.2,-96.4,.4),Et(n,-40.6,-90.8,.15,1.05),n}function en(n,t,e){const i=new V;i.name="eva";const s=N(n,t);return i.position.set(n,s,t),i.rotation.y=e,i.add(u(new x(.56,.8,.4),d.suit,0,1.46,0)),i.add(u(new x(.44,.5,.24),d.suitDark,0,1.52,-.3)),i.add(u(new ve(.21,12,10),d.suit,0,2.04,.02)),i.add(u(new ve(.165,10,8,0,Math.PI*2,0,Math.PI*.58),d.visor,0,2.04,.1)),i.add(u(new x(.17,.6,.17),d.suit,-.4,1.36,.04)),i.add(u(new x(.17,.6,.17),d.suit,.4,1.36,.04)),i.add(u(new x(.2,.76,.2),d.suitDark,-.15,.7,0)),i.add(u(new x(.2,.76,.2),d.suitDark,.15,.7,0)),i}function Y0(n,t,e,i){const s=N(t,e),a=new V;a.position.set(t,s,e),a.rotation.y=i,a.add(u(new x(1.2,.18,.72),d.steelDark,0,.62,0)),a.add(u(new x(1.15,.28,.68),d.crate,0,.86,0)),a.add(u(new x(.08,.55,.08),d.steel,-.48,.32,.26)),a.add(u(new x(.08,.55,.08),d.steel,.48,.32,.26)),a.add(u(new x(.08,.55,.08),d.steel,-.48,.32,-.26)),a.add(u(new x(.08,.55,.08),d.steel,.48,.32,-.26));const r=new H(.12,.12,.1,10);a.add(u(r,d.roverDark,-.48,.12,.3,Math.PI/2,0,0)),a.add(u(r,d.roverDark,.48,.12,.3,Math.PI/2,0,0)),a.add(u(r,d.roverDark,-.48,.12,-.3,Math.PI/2,0,0)),a.add(u(r,d.roverDark,.48,.12,-.3,Math.PI/2,0,0)),a.add(u(new x(.06,.7,.06),d.steel,-.22,1.3,.08)),a.add(u(new x(.06,.55,.06),d.steel,.18,1.22,-.06)),a.add(u(new x(.22,.12,.12),d.steelDark,-.22,1.68,.08)),n.add(a)}function K0(n,t,e,i){const s=N(t,e),a=new V;a.position.set(t,s,e),a.rotation.y=i,a.add(u(new x(.85,2.45,.32),d.steelDark,0,1.32,0)),a.add(u(new Wt(.42,.07,8,14),d.steel,0,1.58,.22)),a.add(u(new H(.38,.38,.1,12),d.habDark,0,1.58,.18,Math.PI/2,0,0)),a.add(u(new x(.7,.16,.55),d.steel,0,.12,.05)),n.add(a)}function J0(){const n=new V;n.name="eva-presence",n.add(en(2.4,12.2,sn(2.4,12.2,0,7))),n.add(en(-2.2,11.5,sn(-2.2,11.5,0,7))),n.add(en(3.8,15.6,.35)),n.add(en(.6,18.2,Math.PI)),Y0(n,4.3,14.8,.4),K0(n,-3.9,9.1,.2),Et(n,5.4,13.2,.2,.85);const t=N(5.1,16.4);return n.add(u(new x(.1,2.2,.1),d.steelDark,5.1,t+1.1,16.4)),n.add(C("EVA PREP","#1a100c","#f0c089",2.3,.55,5.1,t+2.45,16.4,-.35)),n}function Z0(){const n=new V;n.name="survey";const t=-82,e=-176,i=N(t,e);for(let c=0;c<3;c++){const h=c/3*Math.PI*2+.4,p=Math.cos(h)*.62,f=Math.sin(h)*.62;n.add(u(new x(.08,2.5,.08),d.steelDark,t+p,i+1.15,e+f,.32*Math.cos(h),0,.32*Math.sin(h)))}n.add(u(new x(.58,.32,.48),d.roverDark,t,i+2.28,e)),n.add(u(new H(.04,.04,1.35,6),d.steel,t,i+3.08,e)),n.add(u(new x(.22,.12,.22),d.steelDark,t,i+3.78,e)),n.add(u(new x(.12,2.2,.12),d.steelDark,t+1.15,i+1.1,e+.2)),n.add(C("SURVEY","#1a100c","#f0c089",2.6,.7,t+.2,i+3.55,e+1.15));const s=[[-108,-210],[-98,-210],[-88,-210],[-78,-210],[-68,-210],[-108,-198],[-98,-198],[-88,-198],[-78,-198],[-68,-198],[-108,-186],[-98,-186],[-88,-186],[-78,-186],[-68,-186],[-108,-174],[-98,-174],[-88,-174],[-78,-174],[-68,-174]];for(let c=0;c<s.length;c++){const[h,p]=s[c];Wr(n,h,p,c%3===0?d.flagIce:d.flagDeposit)}Ys(n,-96,-198,"ICE",d.flagIce),Ys(n,-72,-204,"H2O",d.flagIce),Ys(n,-104,-176,"DEPOSIT",d.flagDeposit);const a=[[-90,-184,.2],[-88.4,-182.6,-.4],[-91.2,-181.8,.7],[-86.6,-185.2,.1]];for(const[c,h,p]of a)Tr(n,c,h,p);Et(n,-84.5,-180.4,.15,.85),n.add(C("SAMPLES","#1a2830","#d6e6ef",2.2,.55,-90,N(-90,-184)+1.55,-184));const r={x:-60,z:-162},o={x:-100,z:-200},l=14;for(let c=0;c<l;c++){const h=c/(l-1),p=r.x+(o.x-r.x)*h,f=r.z+(o.z-r.z)*h,m=N(p,f),v=Math.atan2(o.x-r.x,o.z-r.z);for(const M of[-.55,.55]){const _=Math.cos(v)*M,g=-Math.sin(v)*M,R=u(new x(.42,.05,.85),d.track,p+_,m+.04,f+g,0,v,0);R.castShadow=!1,n.add(R)}}return n}function ct(n,t,e,i=.14){const s=[];for(let o=0;o<t.length;o++){const[l,c]=t[o],h=N(l,c)+1.05;s.push(new E(l,h,c)),o%2===0&&n.add(u(new x(.18,1.05,.18),d.steelDark,l,N(l,c)+.5,c))}const a=new Fi(s),r=new le(new ti(a,28,i,6,!1),e);r.castShadow=!1,n.add(r)}function $0(){const n=new V;return n.name="methalox-lines",ct(n,[[-76,-10.6],[-52,-18],[-32,-14],[-18,-8.4]],d.tankCh4,.13),ct(n,[[-76,-21.2],[-52,-24],[-32,-18],[-18,-9.6]],d.steel,.13),n.add(C("TO PAD","#1a100c","#f0c089",2.2,.5,-50,N(-50,-18)+2.15,-16.4)),n}function j0(){const n=new V;n.name="methalox-stand";const t=-15,e=-8,i=N(t,e);n.add(u(new x(8.6,.16,5.4),d.steelDark,t,i+.42,e)),n.add(u(new H(.88,.88,3.5,14),d.tankCh4,t-2.25,i+2.2,e+.55)),n.add(u(new H(.88,.88,3.5,14),d.tankO2,t-2.25,i+2.2,e-1.25)),n.add(C("CH4","#6a2208","#f4e6c8",1.45,.42,t-1.3,i+2.25,e+.55,Math.PI/2)),n.add(C("O2","#2a3340","#e8eef4",1.45,.42,t-1.3,i+2.25,e-1.25,Math.PI/2));const s=[[1.55,1.65],[1.55,-1.65],[3.45,1.65],[3.45,-1.65]];for(const[a,r]of s)n.add(u(new x(.16,3.15,.16),d.steelDark,t+a,i+1.88,e+r));return n.add(u(new x(2.25,.12,3.5),d.steel,t+2.5,i+3.5,e)),n.add(u(new Wt(.42,.11,8,14),d.tankCh4,t+.15,i+1.45,e+.55,Math.PI/2,0,0)),n.add(u(new Wt(.42,.11,8,14),d.steel,t+.15,i+1.45,e-1.2,Math.PI/2,0,0)),n.add(u(new H(.09,.09,6.4,8),d.tankCh4,t+4.55,i+1.18,e+.55,0,0,Math.PI/2)),n.add(u(new H(.09,.09,6.4,8),d.steel,t+4.55,i+.98,e-1.2,0,0,Math.PI/2)),n.add(u(new x(1.55,1.05,1.15),d.habDark,t+.55,i+.98,e+1.85)),n.add(u(new H(.55,.55,2.8,12),d.tankCh4,t-.4,i+1.15,e+2.55,0,0,Math.PI/2)),n.add(u(new x(1.6,.35,.85),d.steelDark,t-.4,i+.55,e+2.55)),n.add(C("METHALOX","#1a100c","#f0c089",3.15,.68,t+2.5,i+4.12,e)),n.add(C("RETURN PROPELLANT","#1a100c","#f0c089",3.85,.58,t+2.5,i+3.42,e+.02)),n.add(u(new H(.22,.28,3.2,10),d.steelDark,t+5.4,i+2,e+.2)),n.add(u(new x(7.6,.22,.22),d.steel,t+8.8,i+3.55,e+1.4,0,-.45,.18)),n.add(u(new x(6.2,.18,.18),d.tankCh4,t+11.6,i+4.4,e+2.6,0,-.45,.12)),n.add(u(new x(6.2,.18,.18),d.steel,t+11.6,i+4.05,e+2.85,0,-.45,.12)),n.add(u(new H(.28,.22,1.1,10),d.steelDark,t+14.2,i+4.7,e+3.6)),n.add(C("LOAD ARM","#1a100c","#f0c089",2.8,.45,t+8.2,i+4.85,e+1.1,-.45)),n}function Q0(){const n=new V;n.name="spaceport-sign";const t=17,e=-17,i=N(t,e);return n.add(u(new x(.12,3.5,.12),d.steelDark,t,i+1.75,e)),n.add(C("SPACEPORT","#1a100c","#f0c089",3.5,.85,t,i+3.45,e,.55)),n.add(C("METHALOX PAD","#1a100c","#d6b48a",3.2,.58,t,i+2.55,e,.55)),n}function t1(n,t,e,i,s,a){const r=i-t,o=s-e,l=Math.hypot(r,o),c=Math.ceil(l/6),h=Math.atan2(r,o);for(let p=0;p<c;p++){const f=(p+.5)/c,m=t+r*f,v=e+o*f,M=N(m,v),_=l/c+.35,g=u(new x(a+1.7,.055,_+.25),d.roadBed,m,M+.03,v,0,h,0);g.castShadow=!1,n.add(g);const R=u(new x(a,.08,_+.15),d.padRing,m,M+.07,v,0,h,0);R.castShadow=!1,n.add(R)}}function e1(n,t,e,i=4.2){const s=N(t,e),a=u(new H(i+.8,i+.8,.06,20),d.roadBed,t,s+.03,e);a.castShadow=!1,n.add(a);const r=u(new H(i,i,.08,20),d.graded,t,s+.07,e);r.castShadow=!1,n.add(r)}function n1(){const n=new V;n.name="roads";const t=[[0,18,0,-124,5.2],[0,-40,84,-42,4.6],[0,-40,-68,-16,4.6],[0,-92,-56,-154,4],[16,-72,48,-86,3.6],[12,8,50,22,4.2],[16,28,22,78,3.5],[-58,-158,-90,-190,3.6],[-14,-104,-32,-98,3.4],[84,-42,112,-83,3.6],[0,-108,22,-112,3.6],[22,-112,48,-86,3.4],[-6,-116,-18,-138,3.2],[0,8,-15,-8,3.4],[16,28,36,72,3.8],[0,18,-24,44,3.8],[-58,-158,-64,-90,4.2],[-64,-90,-68,-16,4.2],[-18,-138,-32,-148,3.2],[-32,-98,-46,-100,3.4],[0,18,-48,68,3.8],[16,28,78,56,3.8],[-6,-116,-13,-134,3.4],[22,-112,38,-126,3.4],[-58,-158,-60,-148,3.2],[-64,-118,-18,-88,3.6],[84,-42,68,-10,3.4],[-6,-108,-18,-88,3.2],[38,-126,8,-142,3.4],[-13,-134,8,-142,3.2],[112,-83,135,-40,3.6],[68,-10,68,6,3.2],[-13,-134,-28,-138,3],[-46,-108,-20,-132,3.2],[-6,-108,-6,-132,3.2],[-6,-96,2,-22,3.4],[-32,-98,-36,-74,3.2],[-40,-76,-32,-98,3.2],[-40,-76,-50,-72,3],[-6,-132,10,-124,3.2],[10,-124,8,-142,3],[0,8,20,8,3.4],[22,82,-16,136,3.6],[0,32,-16,136,3.4],[135,-40,158,-62,3.4],[-68,-16,-96,-16,3.6],[-58,-158,-78,-172,3.4],[48,-86,66,-74,3.4],[8,-142,18,-152,3.2],[-18,-88,18,-152,3.2],[-32,-148,-8,-162,3.2],[-6,-108,8,-98,3.2],[22,-112,8,-98,3.2],[48,-86,48,-70,3.2],[-68,-16,-68,12,3.2],[-36,-74,22,-80,3.2],[48,-86,22,-80,3.2],[22,-112,52,-112,3.2],[38,-126,52,-112,3.2],[-78,-172,-90,-158,3.2],[8,-98,8,-78,3.2],[22,-80,8,-78,3.2],[8,-98,-8,-88,3.2],[-22,-88,-8,-88,3.2],[-96,-16,-96,4,3.2],[158,-62,142,-62,3.2],[8,-142,28,-140,3.2],[18,-152,28,-140,3.2],[-90,-158,-90,-148,3.2],[5,16,12,18,3],[20,8,36,8,3.2],[36,8,36,-6,3.2],[-68,4,-50,4,3.2],[-58,-158,-58,-142,3.2],[-15,-8,-32,-22,3.2],[66,-74,66,-90,3.2],[8,-98,22,-98,3.2],[158,-62,172,-48,3.2],[22,-112,38,-104,3.2],[10,-124,24,-128,3],[-68,12,-80,20,3.2],[-16,136,6,148,3],[-48,68,-64,80,3.2],[-80,20,-80,32,3.2],[135,-40,100,-22,3.2],[100,-22,68,-10,3.2],[-36,-74,-22,-56,3.2],[-90,-158,-124,-188,3.2],[-50,4,-38,16,3.2],[52,-112,70,-112,3.2],[22,82,16,48,3],[-58,-142,-58,-36,3.2],[-58,-36,-68,-16,3.2],[36,8,50,4,3],[-58,-158,-40,-168,3],[66,-90,82,-90,3.2],[-8,-162,4,-148,3],[135,-40,148,-40,3.2],[112,-83,124,-70,3.2],[82,-44,96,-44,3.2],[-68,12,-84,8,3.2],[-8,-88,16,-86,3.2],[135,-40,135,-22,3.2],[124,-70,100,-70,3.2],[82,-44,82,-28,3.2],[-68,-16,-68,2,3.2],[135,-40,122,-40,3],[112,-83,98,-83,3],[82,-44,70,-44,3],[-90,-158,-102,-158,3.2],[8,-78,-18,-78,3.2],[-78,-172,-64,-184,3.2],[18,-152,32,-152,3.2],[-96,4,-96,16,3.2],[66,-74,82,-74,3.2],[-78,-172,-78,-156,3.2],[-96,4,-110,8,3.2],[-110,8,-110,20,3.2],[-110,20,-110,32,3.2],[-110,8,-122,8,3.2],[-122,8,-122,20,3.2],[8,-98,-8,-98,3.2],[-8,-98,-22,-98,3.2],[-8,-88,8,-88,3.2],[-58,-36,-78,-36,3.2],[82,-90,96,-90,3.2],[8,-78,-5,-78,3],[4,-148,16,-148,3.2],[-90,-148,-90,-136,3.2],[16,-86,16,-74,3.2],[-32,-148,-48,-138,3.2],[52,-112,52,-126,3.2],[52,-126,70,-126,3.2],[0,-68,0,-118,3],[48,-70,90,-80,3],[-46,-148,-90,-148,3],[-38,16,-68,12,3]];for(const[i,s,a,r,o]of t)t1(n,i,s,a,r,o);for(const[i,s,a]of[[0,-40,5.2],[0,-108,4.4],[84,-42,4],[22,-112,3.8],[0,10,4.6],[-64,-90,4.2],[36,72,3.6],[-46,-100,3.6],[38,-126,3.6],[-18,-88,3.8],[68,-10,3.8],[-48,68,3.6],[78,56,3.6],[-13,-134,3.6],[8,-142,3.6],[135,-40,3.6],[68,6,3.6],[-36,-74,3.6],[2,-22,3.4],[-50,-72,3.4],[10,-124,3.6],[20,8,3.6],[-16,136,4.2],[158,-62,3.6],[-96,-16,3.8],[-78,-172,3.6],[66,-74,3.6],[18,-152,3.4],[-8,-162,3.4],[8,-98,3.4],[48,-70,3.4],[-68,12,3.4],[22,-80,3.4],[52,-112,3.6],[-90,-158,3.4],[8,-78,3.4],[-8,-88,3.4],[-96,4,3.4],[142,-62,3.4],[28,-140,3.4],[-90,-148,3.4],[12,18,3.2],[36,8,3.4],[36,-6,3.4],[-50,4,3.4],[-58,-142,3.4],[-32,-22,3.4],[66,-90,3.4],[22,-98,3.4],[172,-48,3.4],[38,-104,3.4],[24,-128,3.2],[-80,20,3.4],[6,148,3.2],[-64,80,3.4],[-80,32,3.4],[100,-22,3.4],[-22,-56,3.4],[-124,-188,3.4],[-38,16,3.4],[70,-112,3.4],[16,48,3.2],[-58,-36,3.4],[50,4,3.2],[-40,-168,3.2],[82,-90,3.4],[4,-148,3.2],[148,-40,3.4],[124,-70,3.4],[96,-44,3.4],[-84,8,3.4],[16,-86,3.4],[135,-22,3.4],[100,-70,3.4],[82,-28,3.4],[-68,2,3.4],[122,-40,3.2],[98,-83,3.2],[70,-44,3.2],[-102,-158,3.4],[-18,-78,3.4],[-64,-184,3.2],[32,-152,3.4],[-96,16,3.4],[82,-74,3.6],[-78,-156,3.4],[-110,8,3.4],[-110,20,3.4],[-110,32,3.4],[-122,8,3.4],[-122,20,3.4],[-8,-98,3.4],[-22,-98,3.4],[8,-88,3.4],[-78,-36,3.4],[96,-90,3.4],[-5,-78,3.2],[16,-148,3.2],[-90,-136,3.4],[16,-74,3.2],[-48,-138,3.2],[52,-126,3.4],[70,-126,3.4],[0,-68,3.2],[48,-70,3.2],[-46,-148,3.2],[-38,16,3.2]])e1(n,i,s,a);const e=[[3.2,-20],[-3.2,-20],[3.2,-60],[-3.2,-60],[3.2,-90],[22,-40],[42,-40],[64,-41],[-22,-32],[-44,-24],[8,-110],[16,-111],[-8,-130],[-28,-148],[-70,-172],[96,-58],[104,-72],[28,50],[32,62],[-12,30],[-20,40],[-60,-130],[-66,-70],[-66,-40],[-26,-144],[-40,-100],[-52,-108],[3.4,12],[-3.2,12],[30,-118],[38,-126],[-60,-148],[-64,-118],[-18,-88],[68,-10]];for(const[i,s]of e)Wr(n,i,s,d.flagDeposit);return n}function i1(){const n=new V,t=[[18,-8],[-16,-6],[12,-48],[-10,-70],[6,-100],[30,-100],[-30,-20],[40,-40],[40,18],[58,32],[16,70],[28,88],[-54,-8],[-80,-176],[-96,-196],[-28,-90],[112,-80],[100,-50],[0,-40],[22,-112],[32,-112],[70,-40],[84,-44],[36,60],[-24,32],[-64,-90],[-40,-148],[-32,-156],[4,14],[-46,-108],[-46,-92],[-58,-102],[38,-126],[-18,-88],[68,-10],[-60,-148],[-64,-118],[-22,-88]];for(const[e,i]of t){const s=N(e,i);n.add(u(new H(.1,.12,5.2,6),d.steelDark,e,s+2.6,i)),n.add(u(new x(.7,.15,.35),d.glowWarm,e,s+5.3,i))}return n}function s1(){const n=new V,t=14,e=22,i=N(t,e);n.add(u(new x(.12,3.6,.12),d.steelDark,t,i+1.8,e));const s=C("BASE ALPHA","#1a100c","#f0c089",3.8,1.05,t,i+3.55,e,.4);n.add(s);const a=C("CARGO CAMPAIGN","#1a100c","#f0c089",3.4,.7,t,i+2.55,e,.4);n.add(a);const r=C("ARCADIA PLANITIA","#1a100c","#d6b48a",3.2,.55,18,N(18,26)+2.15,26,.15);n.add(u(new x(.1,2.2,.1),d.steelDark,18,N(18,26)+1.1,26)),n.add(r);const o=20,l=36,c=N(o,l);return n.add(u(new x(.1,2.6,.1),d.steelDark,o,c+1.3,l)),n.add(C("6 SHIPS","#1a100c","#f0c089",2.6,.65,o,c+3.15,l,.25)),n.add(C("TWO WINDOWS","#1a100c","#d6b48a",2.8,.5,o,c+2.45,l,.25)),n}function sn(n,t,e,i){return Math.atan2(-(i-t),e-n)}function nc(n,t){const e=new V;e.name="window-offload";const i=[[n,t,.2],[n-1.8,t+2.1,-.3],[n+1.6,t+2.4,.7],[n-2.4,t-1.2,.15],[n+.8,t-2.2,1.1],[n-3.2,t+.6,-.4]];for(const[o,l,c]of i)Et(e,o,l,c);Et(e,n-4.2,t+1.4,.2,1.12),Et(e,n-5.4,t-.6,-.15,1.05);const[s,a,r]=Fe(n-1.2,t,.08);return e.add(u(new x(7.2,.12,3.8),d.steelDark,s,a,r,0,.12,0)),e.add(C("CARGO","#1a100c","#f0c089",2.4,.65,n-4.2,N(n-4.2,t+1.4)+2.4,t+1.4,.4)),e}function a1(){const n=new V;n.name="earth-dish";const t=-32,e=-148,i=N(t,e);n.add(u(new H(8.6,8.6,.28,32),d.concrete,t,i+.1,e)),n.add(u(new H(1.45,1.85,5.4,14),d.steelDark,t,i+2.8,e)),n.add(u(new H(2.05,2.05,.42,18),d.steel,t,i+5.55,e)),n.add(u(new Wt(2.15,.12,8,20),d.lattice,t,i+5.8,e,Math.PI/2,0,0)),n.add(u(new x(.32,4.4,.32),d.lattice,t-2.55,i+7.6,e)),n.add(u(new x(.32,4.4,.32),d.lattice,t+2.55,i+7.6,e)),n.add(u(new x(5.6,.32,.32),d.lattice,t,i+9.75,e));const s=new V;s.position.set(t,i+9.5,e),s.rotation.set(-.92,.68,0);const a=u(new ve(7.6,28,16,0,Math.PI*2,0,Math.PI/2.28),d.dish,0,0,0);s.add(a);const r=u(new ve(7.72,20,10,0,Math.PI*2,0,Math.PI/2.45),d.steelDark,0,-.12,0);s.add(r);for(let h=0;h<8;h++){const p=h/8*Math.PI*2;s.add(u(new x(.07,.07,7.4),d.steelDark,0,.18,0,.12,p,0))}s.add(u(new H(.07,.07,5.4,6),d.steelDark,0,2.7,0)),s.add(u(new H(.38,.2,.75,10),d.steel,0,5.35,0)),n.add(s);const o=t-8.2,l=e-5.6,c=N(o,l);return n.add(u(new x(4.6,2.5,3.4),d.habDark,o,c+1.35,l)),n.add(u(new x(2.2,.85,1.4),d.steelDark,o+2.8,c+.55,l+.4)),n.add(C("EARTH LINK","#1a100c","#f0c089",3.6,.75,t,i+4.2,e+6.4)),n.add(C("LIGHT TIME 12 MIN","#1a100c","#d6b48a",3.9,.6,t,i+3.4,e+6.4)),n.add(C("NOT REAL-TIME","#1a100c","#d6b48a",3.3,.5,o,c+2.85,l+1.85)),n.add(u(new x(.1,2.8,.1),d.steelDark,t+6.6,i+1.4,e+5.2)),n.add(C("DSN / STARSHIP","#1a100c","#f0c089",3.2,.55,t+6.6,i+3.15,e+5.2,-.5)),n}function xn(n,t,e,i={}){const s=new V;s.name=i.kind==="cargo"?"cargo-haul":"ice-haul";const a=N(n,t);s.position.set(n,a,t),s.rotation.y=e,s.add(u(new x(4.2,1.25,2.2),d.rover,.2,1.45,0)),s.add(u(new x(1.55,.85,1.7),d.roverDark,1.55,2.25,0)),s.add(u(new x(2.5,.08,1.7),d.solar,.05,2.16,0)),s.add(u(new H(.06,.06,1.6,6),d.steel,1.2,2.95,0)),s.add(u(new x(1.15,.2,.32),d.steelDark,-2.45,1.02,0));const r=new H(.62,.62,.38,12),o=[[-1.35,.62,1.22],[.25,.62,1.22],[1.55,.62,1.22],[-1.35,.62,-1.22],[.25,.62,-1.22],[1.55,.62,-1.22]];for(const[h,p,f]of o)s.add(u(r,d.roverDark,h,p,f,Math.PI/2,0,0));const l=-5.7;s.add(u(new x(4.5,.22,2.4),d.steelDark,l,1.02,0));const c=[[-4.5,.52,1.22],[-6.7,.52,1.22],[-4.5,.52,-1.22],[-6.7,.52,-1.22]];for(const[h,p,f]of c)s.add(u(new H(.5,.5,.32,12),d.roverDark,h,p,f,Math.PI/2,0,0));if(i.kind==="cargo")s.add(u(new x(1.55,1.2,1.55),d.crate,l-.95,1.78,.12)),s.add(u(new x(1.55,1.2,1.55),d.crate,l+.9,1.78,-.08)),i.loaded!==!1&&s.add(u(new x(1.35,1.05,1.35),d.crate,l,2.9,.05)),s.add(C("CARGO","#1a100c","#f0c089",1.7,.42,l,2.05,1.28));else{if(s.add(u(new x(4.2,1.15,.1),d.steel,l,1.68,1.12)),s.add(u(new x(4.2,1.15,.1),d.steel,l,1.68,-1.12)),s.add(u(new x(.1,1.15,2.25),d.steel,l-2.15,1.68,0)),s.add(u(new x(.1,1.15,2.25),d.steel,l+2.15,1.68,0)),i.loaded!==!1){const h=u(new me(1.15,0),d.ice,l,1.82,0);h.scale.set(1.65,.68,.95),s.add(h),s.add(u(new me(.52,0),d.ice,l+.95,1.92,.22)),s.add(u(new me(.4,0),d.ice,l-.85,1.88,-.18))}s.add(C("ICE","#1a2830","#d6e6ef",1.35,.38,l,2.35,1.24))}return s}function ks(n,t,e,i,s,a=16){const r=Math.atan2(i-t,s-e);for(let o=0;o<a;o++){const l=o/(a-1),c=t+(i-t)*l,h=e+(s-e)*l,p=N(c,h);for(const f of[-.7,.7]){const m=Math.cos(r)*f,v=-Math.sin(r)*f,M=u(new x(.4,.05,.9),d.track,c+m,p+.04,h+v,0,r,0);M.castShadow=!1,n.add(M)}}}function r1(){const n=new V;n.name="haul-loop";const t=-64,e=-90,i=N(t,e);n.add(u(new x(11,.2,8.4),d.concrete,t,i+.08,e)),n.add(u(new x(2.6,3.2,2.6),d.steelDark,t+2.4,i+1.75,e-1.4)),n.add(u(new x(3.4,.18,1.3),d.steel,t+.2,i+2.35,e-1.4,0,0,.18));const s=u(new me(2.4,0),d.ice,t-2.6,i+1.15,e+1.6);s.scale.set(1.35,.7,1.15),n.add(s),n.add(u(new me(1.1,0),d.ice,t-1.2,i+.85,e+2.4)),n.add(u(new x(.22,5.6,.22),d.lattice,t+3.6,i+2.9,e+2.2)),n.add(u(new x(.22,4.2,.22),d.lattice,t+3.6,i+4.4,e+.4,.7,0,0)),n.add(u(new x(1.6,.7,.7),d.steelDark,t+3.6,i+5.5,e-.6)),n.add(C("ICE TRANSFER","#1a2830","#d6e6ef",3.5,.7,t,i+3.7,e+3.4)),n.add(C("MINE TO ISRU","#1a100c","#f0c089",3.1,.5,t,i+2.95,e+3.4));const a={x:-58,z:-158},r={x:-68,z:-16},o={x:0,z:0};return n.add(xn(-55,-146,sn(-55,-146,r.x,r.z),{kind:"ice",loaded:!0})),n.add(xn(-61,-118,sn(-61,-118,r.x,r.z),{kind:"ice",loaded:!0})),n.add(xn(-66,-78,sn(-66,-78,r.x,r.z),{kind:"ice",loaded:!0})),n.add(xn(-68,-38,sn(-68,-38,r.x,r.z),{kind:"ice",loaded:!0})),n.add(xn(-70,-62,sn(-70,-62,a.x,a.z),{kind:"ice",loaded:!1})),n.add(xn(-50,-24,sn(-50,-24,o.x,o.z),{kind:"cargo",loaded:!0})),n.add(xn(-18,-14,sn(-18,-14,12,8),{kind:"cargo",loaded:!0})),n.add(xn(22,12,sn(22,12,50,22),{kind:"cargo",loaded:!0})),ks(n,-58,-156,-64,-92,18),ks(n,-64,-88,-68,-20,16),ks(n,-66,-18,-16,-10,12),ks(n,-14,-8,20,12,10),n}function Ji(n,t,e,i,s,a=8,r=1.15,o=.16){const l=[];for(let h=0;h<=a;h++){const p=h/a,f=t+(i-t)*p,m=e+(s-e)*p,v=N(f,m)+r;l.push(new E(f,v,m)),h%2===0&&n.add(u(new x(.16,r,.16),d.steelDark,f,N(f,m)+r*.5,m))}const c=new le(new ti(new Fi(l),a*2,o,6,!1),d.pipe);c.castShadow=!1,n.add(c)}function o1(){const n=new V;n.name="food";const t=38,e=-126,i=N(t,e);n.add(u(new x(13.2,.25,7.6),d.concrete,t,i+.1,e));const s=new le(new H(3.55,3.55,12.4,18,1,!1,0,Math.PI),d.glass);s.rotation.z=Math.PI/2,s.position.set(t,i+3.55,e),s.castShadow=!1,n.add(s),n.add(u(new x(12.2,.1,7.2),d.solarFrame,t,i+3.6,e));for(let a=-2;a<=2;a++){n.add(u(new x(1.85,.24,5.6),d.soil,t+a*2.1,i+.34,e));for(let r=-2;r<=2;r++){const o=r%2===0?d.plant:d.plantLeaf;n.add(u(new x(1.25,.58,.72),o,t+a*2.1,i+.78,e+r*.95))}n.add(u(new x(1.5,.05,5.2),d.glowWarm,t+a*2.1,i+3.15,e))}return n.add(u(new x(1.1,1.8,.14),d.habDark,t-6.2,i+1.1,e)),n.add(u(new H(.14,.14,12,8),d.pipe,30,N(30,-119)+1.2,-119,0,0,Math.PI/2)),n.add(C("FOOD","#1a100c","#f0c089",2.8,.7,t,i+5.05,e+.15)),n.add(C("GROW FROM CO2","#1a100c","#d6b48a",3.6,.5,t,i+4.35,e+.15)),Et(n,45,-122,.2,.9),Et(n,46.2,-124.4,-.3,.85),n}function c1(){const n=new V;n.name="water-loop";const t=-60,e=-148,i=N(t,e);n.add(u(new x(7.2,.22,5.4),d.concrete,t,i+.1,e)),n.add(u(new x(3.4,2.1,2.4),d.habDark,t-1.1,i+1.2,e)),n.add(u(new H(1.15,1.15,2.6,12),d.steel,t+1.8,i+1.5,e+.4)),n.add(u(new x(1.6,.7,1.2),d.ice,t+1.8,i+3.05,e+.4)),n.add(C("MELT","#1a2830","#d6e6ef",2.2,.55,t-1.1,i+1.7,e+1.35)),n.add(C("ICE","#1a2830","#d6e6ef",1.5,.42,t+1.8,i+1.7,e+1.7));const s=-64,a=-118,r=N(s,a);n.add(u(new x(7.4,.22,5.2),d.concrete,s,r+.1,a)),n.add(u(new x(3.6,2.2,2.6),d.steelDark,s,r+1.25,a)),n.add(u(new H(.55,.55,2.8,10),d.pipe,s+2.2,r+1.6,a-.6)),n.add(C("FILTER","#1a2830","#d6e6ef",2.5,.55,s,r+1.85,a+1.45));const o=-18,l=-88,c=N(o,l);return n.add(u(new x(9.2,.22,7.2),d.concrete,o,c+.1,l)),n.add(u(new H(2.15,2.15,5.6,16),d.tankO2,o-1.6,c+3,l)),n.add(u(new H(1.55,1.55,4.2,14),d.pipe,o+2.4,c+2.3,l+1.1)),n.add(C("POTABLE","#1a2830","#d6e6ef",3.2,.7,o-1.6,c+3.2,l+2.35)),n.add(C("H2O","#1a2830","#d6e6ef",1.8,.5,o+2.4,c+2.5,l+2.55)),n.add(C("ICE TO CREW","#1a100c","#f0c089",3.1,.5,o,c+6.15,l)),Ji(n,-58,-154,t,e,6,1.2,.15),Ji(n,t,e,s,a,8,1.2,.15),Ji(n,s,a,-68,-26,10,1.15,.14),Ji(n,s,a,o,l,10,1.2,.15),Ji(n,o,l,-6,-100,8,1.15,.13),n}function l1(){const n=new V;n.name="batteries";const t=68,e=-10,i=N(t,e);n.add(u(new x(15.2,.22,7.2),d.concrete,t,i+.1,e));for(let o=0;o<6;o++){const l=t-5.5+o*2.2;n.add(u(new x(1.85,2.15,4.4),d.battery,l,i+1.25,e)),n.add(u(new x(1.7,.08,4.2),d.steel,l,i+2.38,e))}n.add(C("BATTERY","#111111","#f4e6c8",3.4,.7,t,i+3.15,e+3.75)),n.add(C("NIGHT STORE","#111111","#d6b48a",3.5,.55,t,i+2.45,e+3.75)),n.add(u(new H(.12,.12,18,8),d.cable,61,N(61,-14)+1.4,-14,0,0,Math.PI/2));const s=-22,a=-88,r=N(s,a);n.add(u(new x(7.2,.2,5.2),d.concrete,s,r+.1,a));for(let o=0;o<3;o++)n.add(u(new x(1.7,1.9,3.6),d.battery,s-2+o*2,r+1.15,a));return n.add(C("NIGHT","#111111","#f4e6c8",2.2,.5,s,r+2.55,a+2.7)),n.add(C("HABS","#111111","#d6b48a",1.8,.42,s,r+2.05,a+2.7)),n}function d1(n){const t=(c,h,p=1)=>n.push({type:"box",x:c,z:h,w:1.9*p,d:1.9*p}),e=(c,h,p)=>n.push({type:"cyl",x:c,z:h,r:p}),i=(c,h,p,f)=>n.push({type:"box",x:c,z:h,w:p,d:f});for(const[c,h]of[[10,8],[12.2,8.4],[10.4,10.6],[13.5,6.2],[-12,9],[-14,7.2],[8.5,-11],[6.4,-12.5]])t(c,h);for(const[c,h]of[[40,22],[38.2,24.1],[41.4,26.2],[36.5,21.4],[37.8,27.6],[34.8,24.8],[39.2,19.6],[35.4,19.2]])t(c,h);t(38.6,22.8,1.15),t(33.2,20.4,1.2),t(31.4,22.1,1.05);const s=24,a=70;for(const[c,h]of[[s,a],[s-1.8,a+2.1],[s+1.6,a+2.4],[s-2.4,a-1.2],[s+.8,a-2.2],[s-3.2,a+.6]])t(c,h);t(s-4.2,a+1.4,1.12),t(s-5.4,a-.6,1.05),t(5.4,13.2,.85);for(const[c,h]of[[18,-78],[20.2,-77.4],[18.4,-81.2],[24.6,-78.6],[26.2,-81.8]])t(c,h);const r=-60,o=66;for(const[c,h]of[[r,o],[r-1.8,o+2.1],[r+1.6,o+2.4],[r-2.4,o-1.2],[r+.8,o-2.2],[r-3.2,o+.6]])t(c,h);t(r-4.2,o+1.4,1.12),t(r-5.4,o-.6,1.05);for(const[c,h]of[[16,14],[8,-62],[30,74],[-94,-182],[48,-70],[-90,-148]])e(c,h,2.4);for(const[c,h]of[[-55,-146],[-61,-118],[-66,-78],[-68,-38],[-70,-62],[-50,-24],[-18,-14],[22,12]])e(c,h,3.4);for(const[c,h]of[[42,22],[39,26],[26,78],[26,68],[22,72],[-80,-174],[-34,-92],[-28,-104],[16,-120],[-28,128]])e(c,h,.55);for(const[c,h]of[[2.4,12.2],[-2.2,11.5],[3.8,15.6],[.6,18.2]])e(c,h,.55);i(4.3,14.8,1.4,1),i(-3.9,9.1,1.1,.8),i(5.1,16.4,1.2,.8);for(let c=0;c<8;c++)i(82.3,-22-c*6.2,50,2.6);i(54,-18,3,2.2);for(let c=0;c<4;c++)i(111.5,-74-c*6.2,30,2.6);i(96,-72,3,2.2);for(let c=0;c<5;c++)i(135.5,-28-c*6.2,30,2.6);i(120,-26,3,2.2);for(let c=0;c<5;c++)i(158.5,-48-c*6.2,30,2.6);i(146,-46,3,2.2),i(14,22,2.4,1.6),i(18,26,1.8,1.3),i(20,36,2,1.3),i(17,-17,2.4,1.6);const l=[[-108,-210],[-98,-210],[-88,-210],[-78,-210],[-68,-210],[-108,-198],[-98,-198],[-88,-198],[-78,-198],[-68,-198],[-108,-186],[-98,-186],[-88,-186],[-78,-186],[-68,-186],[-108,-174],[-98,-174],[-88,-174],[-78,-174],[-68,-174]];for(const[c,h]of l)e(c,h,.4);e(-96,-198,.7),e(-72,-204,.7),e(-104,-176,.7);for(const[c,h]of[[-90,-184],[-88.4,-182.6],[-91.2,-181.8],[-86.6,-185.2]])i(c,h,1.2,1.2);t(-84.5,-180.4,.85),t(-28,-68),t(-27,-71,1.1),t(-44,-80),t(-42.5,-68.5,.95),t(17.2,-119.4),t(18.4,-121.8,1.05),t(3.2,-118.6,.9),t(16.6,-128.8,.95),t(27.2,12.4,.9),t(12.6,13.1,.95),t(-32,124,.9),t(-30.6,126.4,.95)}function h1(){const n=new V;n.name="hab-street";const t=N(-13,-134);n.add(u(new x(30,.2,24),d.concrete,-13,t+.06,-136)),ln(n,-20,-132,0,{airlock:!0,label:"HAB 3"}),ln(n,-6,-132,0,{airlock:!0,label:"HAB 4"}),ln(n,-13,-142,Math.PI/2,{airlock:!0,label:"HAB 5"});const e=N(-13,-132)+3.15;return n.add(u(new H(1.15,1.15,8.2,12),d.habDark,-13,e,-132,0,0,Math.PI/2)),n.add(u(new H(1.15,1.15,6.4,12),d.habDark,-13,e,-137,Math.PI/2,0,0)),n.add(C("HAB STREET","#1a100c","#f0c089",3.4,.65,-13,t+5.4,-126)),Et(n,-26,-128,.2),Et(n,1.2,-128.4,-.3,1.05),n}function Mi(n,t,e,i,s){i==="x"?(n.push({type:"box",x:t,z:e-1.35,w:s,d:.4}),n.push({type:"box",x:t,z:e+1.35,w:s,d:.4})):(n.push({type:"box",x:t-1.35,z:e,w:.4,d:s}),n.push({type:"box",x:t+1.35,z:e,w:.4,d:s}))}function u1(n){const t=(e,i,s,a)=>n.push({type:"box",x:e,z:i,w:s,d:a});t(-6.2,0,5.2,14.8),t(6.2,0,5.2,14.8),t(0,-6.2,10,5.2),t(-4.35,5.8,6.4,5.2),t(4.35,5.8,6.4,5.2),t(0,7.15,3.8,.8),t(-1.45,7.15,.7,1.2),t(1.45,7.15,.7,1.2),t(-1.28,13,.36,12.4),t(1.28,13,.36,12.4),t(-1.45,19.2,.4,2.8),t(1.45,19.2,.4,2.8)}function f1(){const n=new V;n.name="food-3";const t=8,e=-142,i=N(t,e);n.add(u(new x(13.2,.25,7.6),d.concrete,t,i+.1,e));const s=new le(new H(3.55,3.55,12.4,18,1,!1,0,Math.PI),d.glass);s.rotation.z=Math.PI/2,s.position.set(t,i+3.55,e),s.castShadow=!1,n.add(s),n.add(u(new x(12.2,.1,7.2),d.solarFrame,t,i+3.6,e));for(let a=-2;a<=2;a++){n.add(u(new x(1.85,.24,5.6),d.soil,t+a*2.1,i+.34,e));for(let r=-2;r<=2;r++){const o=r%2===0?d.plant:d.plantLeaf;n.add(u(new x(1.25,.58,.72),o,t+a*2.1,i+.78,e+r*.95))}n.add(u(new x(1.5,.05,5.2),d.glowWarm,t+a*2.1,i+3.15,e))}return n.add(u(new x(1.1,1.8,.14),d.habDark,t-6.2,i+1.1,e)),n.add(C("FOOD","#1a100c","#f0c089",2.8,.7,t,i+5.05,e+.15)),n.add(C("HAB STREET","#1a100c","#d6b48a",3.4,.5,t,i+4.35,e+.15)),Et(n,15,-138,.2,.9),n}function p1(){const n=new V;n.name="solar-3";const t=6,e=5;for(let r=0;r<t;r++)for(let o=0;o<e;o++){const l=122+r*5.4,c=-28-o*6.2,h=N(l,c);n.add(u(new x(.18,1.6,.18),d.solarFrame,l,h+.8,c)),n.add(u(new x(4.6,.08,2.3),d.solar,l,h+1.55,c,-.55,.15,0)),n.add(u(new x(4.75,.05,2.42),d.solarFrame,l,h+1.5,c,-.55,.15,0))}const[i,s,a]=Fe(120,-26,.7);return n.add(u(new x(2.2,1.4,1.4),d.habDark,i,s,a)),n.add(C("POWER","#111111","#f4e6c8",2,.55,i,s+.2,a+.75)),n.add(C("FIELD 3","#111111","#d6b48a",2.2,.45,i,s+.85,a+.75)),n}function m1(){const n=new V;n.name="batteries-2";const t=68,e=6,i=N(t,e);n.add(u(new x(15.2,.22,7.2),d.concrete,t,i+.1,e));for(let o=0;o<6;o++){const l=t-5.5+o*2.2;n.add(u(new x(1.85,2.15,4.4),d.battery,l,i+1.25,e)),n.add(u(new x(1.7,.08,4.2),d.steel,l,i+2.38,e))}n.add(C("BATTERY","#111111","#f4e6c8",3.4,.7,t,i+3.15,e+3.75)),n.add(C("CREW STORE","#111111","#d6b48a",3.5,.55,t,i+2.45,e+3.75));const s=-28,a=-138,r=N(s,a);n.add(u(new x(7.2,.2,5.2),d.concrete,s,r+.1,a));for(let o=0;o<3;o++)n.add(u(new x(1.7,1.9,3.6),d.battery,s-2+o*2,r+1.15,a));return n.add(C("NIGHT","#111111","#f4e6c8",2.2,.5,s,r+2.55,a+2.7)),n.add(C("HAB 3-5","#111111","#d6b48a",2.2,.42,s,r+2.05,a+2.7)),n}function Ln(n,t,e,i,s){const a=(t+i)*.5,r=(e+s)*.5,o=(N(t,e)+N(i,s))*.5+2.45,l=Math.hypot(i-t,s-e),c=u(new H(1.12,1.12,l,12),d.habDark,a,o,r,Math.PI/2,0,0);c.rotation.y=Math.atan2(i-t,s-e),n.add(c),n.add(u(new Wt(1.18,.07,6,14),d.steel,t,o,e,Math.PI/2,0,0)),n.add(u(new Wt(1.18,.07,6,14),d.steel,i,o,s,Math.PI/2,0,0))}function g1(){const n=new V;n.name="neighborhood",Ln(n,-46,-108,-20,-132),Ln(n,-6,-108,-6,-132),Ln(n,-46,-108,-32,-98),Ln(n,-6,-96,2,-22),Ln(n,-40,-76,-32,-98),Ln(n,-40,-76,-50,-72),Ln(n,-6,-132,10,-124),Ln(n,10,-124,8,-142);const[t,e,i]=Fe(-33,-120,3.4);n.add(C("PRESSURE","#1a100c","#f0c089",3.2,.55,t,e+1.2,i)),n.add(C("HAB 2-5","#1a100c","#d6b48a",2.8,.45,t,e+.55,i));const s=2,a=-22,r=N(s,a);return n.add(u(new H(1.45,1.45,2.8,12),d.habDark,s,r+1.55,a)),n.add(u(new x(1.1,1.8,.12),d.steelDark,s,r+1.5,a+1.5)),n.add(u(new Wt(1.48,.08,6,14),d.steel,s,r+2.95,a,Math.PI/2,0,0)),n.add(C("CREW ACCESS","#1a100c","#f0c089",3.4,.6,s,r+3.55,a+.2)),n.add(C("TO STARSHIP","#1a100c","#d6b48a",3.1,.45,s,r+2.95,a+.2)),n}function _1(){const n=new V;n.name="yard";const t=-36,e=-74,i=N(t,e);return n.add(u(new x(18,.22,14),d.concrete,t,i+.08,e)),ln(n,-40,-76,0,{airlock:!0,label:"HAB 6"}),ln(n,-32,-70,-.2,{onStands:!0,label:"NEXT"}),n.add(u(new x(.28,9.2,.28),d.lattice,t+6.2,i+4.7,e-3.4)),n.add(u(new x(8.4,.22,.22),d.lattice,t+2.4,i+9.2,e-3.4)),n.add(u(new H(.05,.05,6.8,6),d.cable,t-1.2,i+6.2,e-2.2)),n.add(u(new x(1.4,1.2,1.4),d.crate,t+1.6,i+8.6,e-3.2)),Et(n,-28,-68,.2),Et(n,-27,-71,-.4,1.1),Et(n,-44,-80,.3),Et(n,-42.5,-68.5,.1,.95),n.add(C("CONSTRUCTION","#1a100c","#f0c089",4,.7,t,i+4.6,e+6.4)),n.add(C("NEXT KIT","#1a100c","#d6b48a",3.2,.5,t,i+3.9,e+6.4)),n}function x1(){const n=new V;n.name="crew-ops";const t=-50,e=-72,i=N(t,e);return n.add(u(new x(12,.2,10),d.concrete,t,i+.08,e)),ln(n,t,e,Math.PI/2,{r:2.2,len:7.6,airlock:!0,label:"MED"}),n.add(C("CREW OPS","#1a100c","#f0c089",3.4,.6,t,i+5.35,e+.2)),n.add(C("MEDICAL","#1a100c","#d6b48a",3,.45,t,i+4.75,e+.2)),Et(n,-55.2,-76.4,.2,.9),Et(n,-44.8,-68.6,-.25,.95),n}function v1(){const n=new V;n.name="commons";const t=10,e=-124,i=N(t,e);return n.add(u(new x(16,.22,12),d.concrete,t,i+.08,e)),ln(n,t,e,0,{airlock:!0,label:"MESS"}),n.add(C("CREW COMMONS","#1a100c","#f0c089",4.2,.7,t,i+6.15,e+.2)),n.add(C("FROM CARGO","#1a100c","#d6b48a",3.4,.48,t,i+5.5,e+.2)),Et(n,17.2,-119.4,.2),Et(n,18.4,-121.8,-.3,1.05),Et(n,3.2,-118.6,.15,.9),Et(n,16.6,-128.8,.4,.95),n}function M1(){const n=new V;n.name="methalox-stock";const t=20,e=8,i=N(t,e);n.add(u(new x(16,.22,12),d.concrete,t,i+.08,e));for(let s=0;s<3;s++){const a=e-3.4+s*3.4;n.add(u(new H(1.15,1.15,6.4,16),d.tankCh4,t-3.2,i+1.45,a,0,0,Math.PI/2)),n.add(u(new H(1.15,1.15,6.4,16),d.tankO2,t+3.2,i+1.45,a,0,0,Math.PI/2))}return n.add(C("METHALOX","#1a100c","#f0c089",3.6,.7,t,i+3.55,e+6.2)),n.add(C("RETURN STOCK","#1a100c","#d6b48a",3.8,.5,t,i+2.9,e+6.2)),n.add(C("CH4","#6a2208","#f4e6c8",1.6,.42,t-3.2,i+2.85,e+3.6)),n.add(C("O2","#2a3340","#e8eef4",1.4,.42,t+3.2,i+2.85,e+3.6)),ct(n,[[20,2],[8,-2],[-8,-6],[-15,-8]],d.tankCh4,.12),Et(n,27.2,12.4,.2,.9),Et(n,12.6,13.1,-.25,.95),n}function w1(){const n=new V;n.name="next-window-pad";const t=-16,e=136;n.add(qn(t,e,{finished:!0}));const i=N(t,e);return n.add(C("NEXT WINDOW","#1a100c","#f0c089",4.6,.85,t+22,i+3.6,e+4,-.55)),n.add(C("26 MONTHS","#1a100c","#d6b48a",3.6,.55,t+22,i+2.75,e+4,-.55)),n.add(u(new x(.12,3.4,.12),d.steelDark,t+22,i+1.7,e+4)),n.add(C("PAD 2","#1a100c","#f0c089",2.4,.55,t,i+.55,e+22.4)),n.add(u(new H(18.4,18.4,.12,40),d.concrete,t,i+.38,e)),n.add(u(new es(9.2,17.6,36),d.soot,t,i+.46,e,-Math.PI/2,0,0)),n.add(C("SINTERED","#1a100c","#f0c089",3.6,.55,t+22,i+1.95,e+4,-.55)),n.add(y1(-38,148)),Et(n,-32,124,.2,.9),Et(n,-30.6,126.4,-.25,.95),Et(n,-40,144,.1,.85),Et(n,-41.4,146.2,-.3,.8),n}function y1(n,t){const e=new V;e.name="sinter-rig";const i=N(n,t);e.add(u(new x(8.4,.22,6.2),d.concrete,n,i+.1,t)),e.add(u(new x(5.6,2.4,3.2),d.habDark,n,i+1.4,t)),e.add(u(new x(1.6,3.6,1.6),d.steelDark,n+2.8,i+2,t-.4)),e.add(u(new H(.18,.18,4.8,8),d.steel,n+2.8,i+5.2,t-.4)),e.add(u(new x(2.4,.18,1.1),d.glowWarm,n+2.8,i+7.6,t-.4)),e.add(C("SINTER","#1a100c","#f0c089",3.2,.6,n,i+2.9,t+1.85)),e.add(C("REGOLITH","#1a100c","#d6b48a",3.4,.45,n,i+2.3,t+1.85));for(let s=0;s<4;s++)e.add(u(new x(1.4,.28,.9),d.concrete,n-2.4,i+.35+s*.32,t+2.6));return e}function S1(){const n=new V;n.name="solar-4";const t=6,e=5;for(let c=0;c<t;c++)for(let h=0;h<e;h++){const p=145+c*5.4,f=-48-h*6.2,m=N(p,f);n.add(u(new x(.18,1.6,.18),d.solarFrame,p,m+.8,f)),n.add(u(new x(4.6,.08,2.3),d.solar,p,m+1.55,f,-.55,.15,0)),n.add(u(new x(4.75,.05,2.42),d.solarFrame,p,m+1.5,f,-.55,.15,0))}const[i,s,a]=Fe(146,-46,.7);n.add(u(new x(2.2,1.4,1.4),d.habDark,i,s,a)),n.add(C("POWER","#111111","#f4e6c8",2,.55,i,s+.2,a+.75)),n.add(C("FIELD 4","#111111","#d6b48a",2.2,.45,i,s+.85,a+.75));const r=158,o=-28,l=N(r,o);n.add(u(new x(12,.2,7.2),d.concrete,r,l+.1,o));for(let c=0;c<5;c++)n.add(u(new x(1.7,2,4.2),d.battery,r-4+c*2,l+1.2,o));return n.add(C("NIGHT","#111111","#f4e6c8",2.2,.5,r,l+2.7,o+3.6)),n.add(C("FIELD 4","#111111","#d6b48a",2.4,.42,r,l+2.15,o+3.6)),n}function b1(){const n=new V;n.name="isru-2";const t=-96,e=-16,i=N(t,e);return n.add(u(new x(18,.35,18),d.concrete,t,i+.12,e)),n.add(u(new H(1.55,1.7,11,12),d.steelDark,t+2.2,i+5.8,e)),n.add(u(new Wt(2.15,.16,6,14),d.steel,t+2.2,i+8.8,e,Math.PI/2,0,0)),n.add(C("SABATIER","#1a100c","#f0c089",4.4,.9,t+4.2,i+7.2,e,Math.PI/2)),n.add(C("TRAIN 2","#1a100c","#d6b48a",3.2,.55,t+4.2,i+6.3,e,Math.PI/2)),n.add(u(new H(2.4,2.4,11,18),d.tankCh4,t-5.2,i+6,e+4.6,0,0,Math.PI/2)),n.add(u(new H(2.4,2.4,11,18),d.tankO2,t-5.2,i+6,e-4.4,0,0,Math.PI/2)),n.add(C("CH4","#6a2208","#f4e6c8",2.8,.8,t+.4,i+6,e+4.6)),n.add(C("O2","#2a3340","#e8eef4",2.6,.8,t+.4,i+6,e-4.4)),ct(n,[[-88,-16],[-80,-16],[-72,-16]],d.tankCh4,.14),ct(n,[[-88,-18],[-80,-20],[-72,-18]],d.steel,.12),n}function E1(){const n=new V;n.name="ice-mine-2";const t=-78,e=-172,i=N(t,e);n.add(u(new x(8,.3,8),d.concrete,t,i+.1,e)),n.add(u(new x(.28,14,.28),d.lattice,t-2.2,i+7,e-2.2)),n.add(u(new x(.28,14,.28),d.lattice,t+2.2,i+7,e-2.2)),n.add(u(new x(.28,14,.28),d.lattice,t-2.2,i+7,e+2.2)),n.add(u(new x(.28,14,.28),d.lattice,t+2.2,i+7,e+2.2)),n.add(u(new x(5.2,.25,5.2),d.steelDark,t,i+14.2,e)),n.add(u(new H(.35,.55,9,10),d.steel,t,i+5,e)),n.add(u(new as(.7,1.6,8),d.soot,t,i+.9,e));const s=u(new me(4,0),d.ice,t+8.2,i+1.8,e+1.4);return s.scale.set(1.45,.75,1.2),n.add(s),n.add(u(new x(6.4,.35,1.1),d.steelDark,t+3.6,i+1.4,e,0,0,-.18)),n.add(C("ICE 2","#1a2830","#d6e6ef",2.6,.65,t,i+8.4,e+2.6)),ct(n,[[-74,-168],[-68,-150],[-64,-90],[-68,-26]],d.pipe,.13),n}function T1(){const n=new V;n.name="workshop-2";const t=66,e=-74,i=N(t,e);n.add(u(new x(16,.28,12),d.concrete,t,i+.1,e));const s=u(new H(5.4,5.4,14,16,1,!1,0,Math.PI),d.habDark,t-1.2,i+3.1,e);return s.rotation.z=Math.PI/2,n.add(s),n.add(u(new x(.2,3.8,5.8),d.steelDark,t-8.1,i+2,e)),n.add(u(new x(.28,8.4,.28),d.lattice,t+6.4,i+4.3,e-3.6)),n.add(u(new x(7.2,.2,.2),d.lattice,t+3,i+8.5,e-3.6)),n.add(u(new x(1.5,1.1,1.5),d.crate,t+2.2,i+8,e-3.4)),Et(n,73.2,-69.4,.2),Et(n,74.4,-71.6,-.3,1.05),Et(n,58.6,-68.8,.15,.9),n.add(C("WORKSHOP","#1a100c","#f0c089",3.8,.75,t,i+5.4,e+.2)),n.add(C("BAY 2","#1a100c","#d6b48a",2.6,.5,t,i+4.7,e+.2)),n}function A1(){const n=new V;n.name="potable";const t=18,e=-152,i=N(t,e);n.add(u(new x(14,.22,10),d.concrete,t,i+.1,e));for(let s=0;s<4;s++){const a=t-4.5+s*3;n.add(u(new H(1.15,1.15,6.2,14),d.pipe,a,i+1.5,e,0,0,Math.PI/2))}return n.add(C("POTABLE","#1a2830","#d6e6ef",3.4,.7,t,i+3.35,e+4.6)),n.add(C("HAB STORE","#1a2830","#d6b48a",3.2,.5,t,i+2.7,e+4.6)),ct(n,[[18,-148],[8,-142],[-6,-120],[-18,-88]],d.pipe,.12),n}function R1(){const n=new V;n.name="hab-berms";const t=[[-58,-108,9.5,.2],[-20,-100,12.5,0],[22,-128,8.5,1.2],[-8,-148,7.5,.4]];for(const[a,r,o,l]of t){const c=N(a,r),h=u(new Wt(o,1.55,8,24,Math.PI*1.15),d.rust,a,c-.2,r,Math.PI/2,l,0);h.scale.set(1,.42,1),n.add(h)}for(const[a,r]of[[-62,-102],[-14,-96],[26,-122]]){const o=u(new me(2.4,0),d.rust,a,N(a,r)+.95,r);o.scale.set(1.25,.6,1.05),n.add(o)}const[e,i,s]=Fe(-20,-100,2.4);return n.add(C("DUST BERM","#1a100c","#f0c089",3.6,.65,e,i+1.1,s)),n.add(C("HAB WIND","#1a100c","#d6b48a",3.2,.48,e,i+.5,s)),n}function C1(){const n=new V;n.name="earth-dish-2";const t=-8,e=-162,i=N(t,e);n.add(u(new H(6.2,6.2,.26,28),d.concrete,t,i+.1,e)),n.add(u(new H(1.1,1.4,4.2,12),d.steelDark,t,i+2.2,e));const s=new V;return s.position.set(t,i+6.8,e),s.rotation.set(-.88,.55,0),s.add(u(new ve(5.2,22,14,0,Math.PI*2,0,Math.PI/2.28),d.dish,0,0,0)),s.add(u(new H(.06,.06,3.8,6),d.steelDark,0,1.9,0)),n.add(s),n.add(C("EARTH 2","#1a100c","#f0c089",3.2,.65,t,i+3.6,e+5.2)),n.add(C("BACKUP LINK","#1a100c","#d6b48a",3.4,.5,t,i+2.95,e+5.2)),n}function P1(){const n=new V;n.name="eclss";const t=8,e=-98,i=N(t,e);return n.add(u(new x(11.2,.22,7.2),d.concrete,t,i+.1,e)),n.add(u(new x(4.8,2.6,3.4),d.habDark,t-2.4,i+1.5,e)),n.add(C("ECLSS","#1a100c","#f0c089",3.2,.6,t-2.4,i+3.05,e+1.85)),n.add(C("CO2 SCRUB","#1a100c","#d6b48a",3.4,.45,t-2.4,i+2.45,e+1.85)),n.add(u(new H(.85,.85,3.4,12),d.steelDark,t+1.6,i+1.9,e-1.4)),n.add(u(new H(.85,.85,3.4,12),d.steelDark,t+3.4,i+1.9,e-1.4)),n.add(C("AMINE","#1a100c","#d6b48a",2.2,.4,t+2.5,i+3.8,e-1.4)),n.add(u(new H(.7,.7,2.6,12),d.tankO2,t+1.6,i+1.5,e+1.8)),n.add(u(new H(.7,.7,2.6,12),d.tankO2,t+3.4,i+1.5,e+1.8)),n.add(C("O2","#2a3340","#e8eef4",1.4,.4,t+2.5,i+3.05,e+1.8)),ct(n,[[8,-98],[14,-104],[22,-112]],d.pipe,.1),ct(n,[[8,-98],[2,-102],[-6,-108]],d.tankO2,.09),n}function D1(){const n=new V;n.name="rover-shelter";const t=48,e=-70,i=N(t,e);n.add(u(new x(12.4,.18,8.6),d.concrete,t,i+.08,e));const s=[[-5.2,-3.4],[5.2,-3.4],[-5.2,3.4],[5.2,3.4]];for(const[a,r]of s)n.add(u(new x(.28,4.6,.28),d.steelDark,t+a,i+2.4,e+r));return n.add(u(new x(12.8,.16,9),d.steel,t,i+4.75,e)),n.add(u(new x(12.8,.06,9),d.solar,t,i+4.88,e)),n.add(C("DUST","#1a100c","#f0c089",2.6,.5,t,i+5.35,e+4.6)),n.add(C("ROVER","#1a100c","#d6b48a",2.8,.42,t,i+4.8,e+4.6)),n}function I1(){const n=new V;n.name="isru-radiators";const t=-68,e=12,i=N(t,e);n.add(u(new x(16.4,.18,6.2),d.concrete,t,i+.08,e));for(let s=0;s<5;s++){const a=t-6+s*3;n.add(u(new x(.16,3.6,.16),d.steelDark,a,i+1.9,e-1.8)),n.add(u(new x(.16,3.6,.16),d.steelDark,a,i+1.9,e+1.8)),n.add(u(new x(2.4,3.2,.08),d.solar,a,i+2.4,e,-.15,0,0)),n.add(u(new x(2.5,3.3,.04),d.steel,a,i+2.4,e+.06,-.15,0,0))}return n.add(C("REJECT","#1a100c","#f0c089",2.8,.5,t,i+4.55,e+3.2)),n.add(C("HEAT","#1a100c","#d6b48a",2.4,.42,t,i+4,e+3.2)),ct(n,[[-68,-6],[-68,4],[-68,12]],d.pipe,.1),n}function L1(){const n=new V;n.name="parts-depot";const t=22,e=-80,i=N(t,e);return n.add(u(new x(12.2,.18,8.2),d.concrete,t,i+.08,e)),n.add(u(new x(.22,3.8,8.2),d.steelDark,t-5.8,i+2,e)),n.add(u(new x(12.2,.14,8.4),d.steel,t,i+3.95,e)),Et(n,18,-78,.15,1),Et(n,20.2,-77.4,-.2,.95),Et(n,18.4,-81.2,.3,1.05),Et(n,24.6,-78.6,-.1,1),Et(n,26.2,-81.8,.25,.9),n.add(u(new x(2.4,1.1,1.4),d.steel,t+1.2,i+.75,e+.4)),n.add(C("PARTS","#1a100c","#f0c089",2.8,.55,t,i+4.45,e+4.2)),n.add(C("CARGO","#1a100c","#d6b48a",2.6,.42,t,i+3.9,e+4.2)),n}function U1(){const n=new V;n.name="greenhouse-2";const t=52,e=-112,i=N(t,e);n.add(u(new x(13.6,.22,8.2),d.concrete,t,i+.1,e));const s=new le(new H(3.7,3.7,12.6,16,1,!1,0,Math.PI),d.glass);s.rotation.z=Math.PI/2,s.position.set(t,i+3.7,e),s.castShadow=!1,n.add(s),n.add(u(new x(12.4,.1,7.6),d.solarFrame,t,i+3.75,e));for(let a=-2;a<=2;a++){n.add(u(new x(1.9,.24,6),d.soil,t+a*2.15,i+.34,e));for(let r=-2;r<=2;r++){const o=r%2===0?d.plant:d.plantLeaf;n.add(u(new x(1.3,.48,.74),o,t+a*2.15,i+.68,e+r*1.05))}n.add(u(new x(1.55,.05,5.6),d.glowWarm,t+a*2.15,i+3.2,e))}return n.add(C("GREENHOUSE 2","#1a100c","#f0c089",4,.65,t,i+5.15,e+.15)),n.add(C("GROW FROM CO2","#1a100c","#d6b48a",3.6,.48,t,i+4.5,e+.15)),ct(n,[[32,-112],[42,-112],[52,-112]],d.pipe,.1),n}function N1(){const n=new V;n.name="ice-depot";const t=-90,e=-158,i=N(t,e);n.add(u(new x(12,.22,10),d.concrete,t,i+.1,e)),n.add(u(new x(3.6,2.4,2.8),d.steelDark,t-1.8,i+1.35,e)),n.add(u(new H(.85,1.65,2.1,10),d.steelDark,t-1.8,i+3.35,e)),n.add(u(new x(2.4,.28,1.05),d.steel,t+.7,i+2.1,e,0,0,-.2));const s=u(new me(2.8,0),d.ice,t+3.6,i+1.25,e+1.5);return s.scale.set(1.35,.7,1.15),n.add(s),n.add(u(new me(1.15,0),d.ice,t+4.8,i+.85,e+.2)),n.add(C("ICE","#1a2830","#d6e6ef",2.2,.55,t,i+3.85,e+4.4)),n.add(C("CRUSH","#1a2830","#d6e6ef",2.6,.5,t,i+3.2,e+4.4)),ct(n,[[-86,-160],[-80,-166],[-74,-168]],d.pipe,.13),n}function z1(){const n=new V;n.name="batteries-3";const t=8,e=-78,i=N(t,e);n.add(u(new x(11.6,.2,6.4),d.concrete,t,i+.1,e));for(let s=0;s<5;s++)n.add(u(new x(1.7,1.95,3.8),d.battery,t-4+s*2,i+1.15,e)),n.add(u(new x(1.55,.08,3.6),d.steel,t-4+s*2,i+2.18,e));return n.add(C("NIGHT","#111111","#f4e6c8",2.4,.5,t,i+2.7,e+3.3)),n.add(C("HAB STORE","#111111","#d6b48a",3,.42,t,i+2.15,e+3.3)),n}function F1(){const n=new V;n.name="o2-buffer";const t=-8,e=-88,i=N(t,e);n.add(u(new x(10.2,.2,7.4),d.concrete,t,i+.1,e));for(let s=0;s<4;s++){const a=t-3.3+s*2.2;n.add(u(new H(.85,.85,3.6,12),d.tankO2,a,i+2,e))}return n.add(C("O2","#2a3340","#e8eef4",1.8,.5,t,i+4.15,e+3.7)),n.add(C("CREW","#2a3340","#d6b48a",2.2,.42,t,i+3.6,e+3.7)),ct(n,[[-8,-88],[0,-94],[8,-98]],d.tankO2,.1),n}function O1(){const n=new V;n.name="co2-capture";const t=-96,e=4,i=N(t,e);return n.add(u(new x(11.6,.2,7.4),d.concrete,t,i+.1,e)),n.add(u(new H(.55,.55,6.8,10),d.steel,t-2.4,i+3.6,e)),n.add(u(new H(2.1,.65,2.4,14),d.steelDark,t-2.4,i+7.8,e)),n.add(u(new Wt(1.85,.1,6,16),d.steel,t-2.4,i+9.1,e,Math.PI/2,0,0)),n.add(u(new x(3.2,2.2,2.4),d.habDark,t+2.2,i+1.3,e)),n.add(C("CO2","#1a100c","#f0c089",2.2,.55,t-2.4,i+4.8,e+1.4)),n.add(C("INTAKE 2","#1a100c","#d6b48a",3,.45,t+2.2,i+2.7,e+1.35)),ct(n,[[-96,4],[-96,-6],[-96,-16]],d.pipe,.12),n}function B1(){const n=new V;n.name="solar-dust-fence";const t=142,e=-62,i=N(t,e);for(let s=0;s<8;s++){const a=e-10.5+s*3;n.add(u(new x(.18,3.4,.18),d.steelDark,t,i+1.8,a)),s<7&&n.add(u(new x(.06,2.6,2.7),d.lattice,t,i+1.7,a+1.5))}return n.add(C("DUST","#1a100c","#f0c089",2.4,.45,t-1.4,i+3.5,e)),n.add(C("FENCE","#1a100c","#d6b48a",2.4,.4,t-1.4,i+3,e)),n}function k1(){const n=new V;n.name="condensate";const t=28,e=-140,i=N(t,e);return n.add(u(new x(9.6,.2,7.2),d.concrete,t,i+.1,e)),n.add(u(new H(1.35,1.35,3.8,14),d.pipe,t-1.6,i+2.1,e)),n.add(u(new H(1.35,1.35,3.8,14),d.pipe,t+1.8,i+2.1,e)),n.add(u(new x(2.4,1.6,1.8),d.habDark,t,i+1,e+2.2)),n.add(C("H2O","#1a2830","#d6e6ef",2.2,.5,t,i+4.3,e+3.6)),n.add(C("CONDENSATE","#1a2830","#d6b48a",3.6,.42,t,i+3.75,e+3.6)),ct(n,[[28,-140],[18,-146],[18,-152]],d.pipe,.1),ct(n,[[28,-140],[16,-142],[8,-142]],d.pipe,.09),n}function H1(){const n=new V;n.name="eva-rack";const t=12,e=18,i=N(t,e);return n.add(u(new x(5.8,.16,2.4),d.steelDark,t,i+.08,e)),n.add(u(new x(.16,2.8,.16),d.steel,t-2.4,i+1.5,e-.7)),n.add(u(new x(.16,2.8,.16),d.steel,t+2.4,i+1.5,e-.7)),n.add(u(new x(5,.12,.12),d.steel,t,i+2.9,e-.7)),n.add(en(t-1.5,e,.2)),n.add(en(t,e+.15,-.1)),n.add(en(t+1.5,e,.15)),n.add(C("SUITS","#1a100c","#f0c089",2.4,.45,t,i+3.35,e+1.2)),n.add(C("EVA RACK","#1a100c","#d6b48a",2.8,.4,t,i+2.85,e+1.2)),n}function G1(){const n=new V;n.name="ch4-buffer";const t=36,e=8,i=N(t,e);n.add(u(new x(9.6,.2,7.2),d.concrete,t,i+.1,e));for(let s=0;s<3;s++)n.add(u(new H(1.05,1.05,5.6,14),d.tankCh4,t-2.4+s*2.4,i+1.4,e,0,0,Math.PI/2));return n.add(C("CH4","#6a2208","#f4e6c8",2.2,.5,t,i+3.35,e+3.7)),n.add(C("RETURN","#6a2208","#d6b48a",2.6,.42,t,i+2.8,e+3.7)),ct(n,[[28,8],[32,8],[36,8]],d.tankCh4,.11),n}function V1(){const n=new V;n.name="o2-return";const t=36,e=-6,i=N(t,e);n.add(u(new x(9.6,.2,7.2),d.concrete,t,i+.1,e));for(let s=0;s<3;s++)n.add(u(new H(1.05,1.05,5.6,14),d.tankO2,t-2.4+s*2.4,i+1.4,e,0,0,Math.PI/2));return n.add(C("O2","#2a3340","#e8eef4",1.8,.5,t,i+3.35,e+3.7)),n.add(C("RETURN","#2a3340","#d6b48a",2.6,.42,t,i+2.8,e+3.7)),ct(n,[[36,8],[36,1],[36,-6]],d.steel,.11),n}function W1(){const n=new V;n.name="isru-electrolysis";const t=-50,e=4,i=N(t,e);n.add(u(new x(11.6,.2,7.4),d.concrete,t,i+.1,e)),n.add(u(new x(3.4,3.6,2.6),d.habDark,t-2.6,i+2,e)),n.add(u(new x(3.4,3.6,2.6),d.steelDark,t+1.2,i+2,e));for(let s=0;s<4;s++)n.add(u(new x(.18,3.1,2.2),d.steel,t-3.8+s*.7,i+2,e));return n.add(u(new H(1.15,1.15,5.2,14),d.steel,t+4.2,i+2.8,e+1.4)),n.add(u(new H(.95,.95,4.4,14),d.tankO2,t+4.2,i+2.4,e-1.6)),n.add(C("ELECTRO","#1a100c","#f0c089",3.2,.5,t,i+4.55,e+3.7)),n.add(C("H2 RECYCLE","#1a100c","#d6b48a",3.4,.42,t,i+4,e+3.7)),ct(n,[[-72,-26],[-50,-16],[-50,4]],d.pipe,.11),ct(n,[[-50,4],[-58,4],[-64,-8]],d.steel,.1),n}function X1(){const n=new V;n.name="ice-melt";const t=-58,e=-142,i=N(t,e);n.add(u(new x(9.6,.2,7.2),d.concrete,t,i+.1,e)),n.add(u(new x(3.6,2.8,3.2),d.habDark,t-1.8,i+1.6,e)),n.add(u(new H(1.45,1.45,4.2,14),d.pipe,t+2.2,i+2.3,e)),n.add(u(new H(.55,.85,1.6,10),d.steelDark,t+2.2,i+4.9,e));const s=u(new me(1.8,0),d.ice,t-3.4,i+.9,e+2.1);return s.scale.set(1.15,.55,1),n.add(s),n.add(C("MELT","#1a2830","#d6e6ef",2.4,.5,t,i+4.4,e+3.7)),n.add(C("STILL","#1a2830","#d6b48a",2.2,.42,t,i+3.85,e+3.7)),ct(n,[[-58,-158],[-58,-150],[-58,-142]],d.pipe,.11),ct(n,[[-58,-142],[-64,-90],[-68,-26]],d.pipe,.1),n}function q1(){const n=new V;n.name="methalox-pump";const t=-32,e=-22,i=N(t,e);return n.add(u(new x(9.6,.2,7.2),d.concrete,t,i+.1,e)),n.add(u(new x(5.2,3.2,4.4),d.habDark,t,i+1.8,e)),n.add(u(new x(5.4,.14,4.6),d.steel,t,i+3.5,e)),n.add(u(new H(.55,.55,1.8,10),d.tankCh4,t-1.4,i+1.1,e+2.6,0,0,Math.PI/2)),n.add(u(new H(.55,.55,1.8,10),d.steel,t+1.4,i+1.1,e+2.6,0,0,Math.PI/2)),n.add(C("PUMP","#1a100c","#f0c089",2.4,.5,t,i+4.15,e+3.7)),n.add(C("METHALOX","#1a100c","#d6b48a",3.2,.42,t,i+3.6,e+3.7)),ct(n,[[-32,-14],[-32,-18],[-32,-22]],d.tankCh4,.11),ct(n,[[-32,-18],[-32,-22],[-18,-10]],d.steel,.1),n}function Y1(){const n=new V;n.name="sinter-press";const t=66,e=-90,i=N(t,e);return n.add(u(new x(9.6,.2,7.2),d.concrete,t,i+.1,e)),n.add(u(new x(4.6,2.2,3.4),d.steelDark,t,i+1.3,e)),n.add(u(new x(1.4,3.4,1.4),d.steel,t,i+3.2,e)),n.add(u(new x(3.2,.35,2.4),d.steel,t,i+4.9,e)),n.add(u(new x(2.2,.55,1.6),d.habDark,t,i+2.55,e)),Et(n,62.2,-87.6,.2,.9),Et(n,70,-92.2,-.15,.85),n.add(C("SINTER","#1a100c","#f0c089",2.8,.5,t,i+5.55,e+3.7)),n.add(C("PRESS","#1a100c","#d6b48a",2.4,.42,t,i+5,e+3.7)),n}function K1(){const n=new V;n.name="waste-recycle";const t=22,e=-98,i=N(t,e);return n.add(u(new x(9.6,.2,7.2),d.concrete,t,i+.1,e)),n.add(u(new x(4.4,2.8,3.6),d.habDark,t-1.4,i+1.6,e)),n.add(u(new H(1.15,1.15,3.6,14),d.pipe,t+2.8,i+2,e)),n.add(u(new H(.85,.85,2.8,12),d.steelDark,t+2.8,i+1.6,e+2)),n.add(C("WASTE","#1a100c","#f0c089",2.6,.5,t,i+4.25,e+3.7)),n.add(C("RECOVERY","#1a100c","#d6b48a",3.2,.42,t,i+3.7,e+3.7)),ct(n,[[8,-98],[14,-98],[22,-98]],d.pipe,.1),ct(n,[[22,-98],[22,-112],[22,-112]],d.pipe,.09),n}function J1(){const n=new V;n.name="solar-combiner";const t=172,e=-48,i=N(t,e);n.add(u(new x(9.6,.2,7.2),d.concrete,t,i+.1,e)),n.add(u(new x(3.6,2.4,2.8),d.habDark,t-2,i+1.4,e)),n.add(u(new x(3.2,2,2.4),d.steelDark,t+2.2,i+1.2,e));for(let s=0;s<3;s++)n.add(u(new x(.7,1.5,1.8),d.battery,t+1.2+s*.85,i+1,e));return n.add(C("COMBINER","#111111","#f4e6c8",3.4,.5,t,i+3.55,e+3.7)),n.add(C("FIELD 4","#111111","#d6b48a",2.6,.42,t,i+3,e+3.7)),ct(n,[[158,-62],[166,-54],[172,-48]],d.cable,.1),ct(n,[[172,-48],[164,-38],[158,-28]],d.cable,.09),n}function Z1(){const n=new V;n.name="gh-dust-filter";const t=38,e=-104,i=N(t,e);return n.add(u(new x(9.2,.18,5.6),d.concrete,t,i+.09,e)),n.add(u(new x(3.8,2.6,2.4),d.habDark,t-1.6,i+1.5,e)),n.add(u(new H(.95,.95,3.2,12),d.steelDark,t+2.4,i+1.8,e)),n.add(u(new x(.12,2.2,2),d.lattice,t+3.5,i+1.4,e)),n.add(C("DUST","#1a100c","#f0c089",2.2,.45,t,i+3.55,e+2.9)),n.add(C("FILTER","#1a100c","#d6b48a",2.6,.4,t,i+3.05,e+2.9)),ct(n,[[22,-112],[30,-108],[38,-104]],d.pipe,.1),ct(n,[[38,-104],[46,-108],[52,-112]],d.pipe,.09),n}function $1(){const n=new V;n.name="weather-mast";const t=24,e=-128,i=N(t,e);return n.add(u(new x(3.6,.16,3.6),d.concrete,t,i+.08,e)),n.add(u(new H(.16,.22,14.4,8),d.lattice,t,i+7.3,e)),n.add(u(new x(2.8,.08,.08),d.steel,t,i+12.4,e)),n.add(u(new x(.08,.08,2.8),d.steel,t,i+12.4,e)),n.add(u(new x(2.2,.06,.06),d.steelDark,t,i+14.2,e)),n.add(u(new x(1.4,1.1,1.1),d.habDark,t+1.15,i+.75,e+.9)),n.add(C("MET","#1a100c","#f0c089",1.8,.42,t,i+8.6,e+1.6)),n.add(C("DUST","#1a100c","#d6b48a",2,.38,t,i+8.1,e+1.6)),n}function j1(){const n=new V;n.name="ch4-chiller";const t=-80,e=20,i=N(t,e);return n.add(u(new x(9.6,.2,7.2),d.concrete,t,i+.1,e)),n.add(u(new x(4.2,2.6,3.2),d.habDark,t-1.6,i+1.5,e)),n.add(u(new H(1.25,1.25,5,14),d.tankCh4,t+2.6,i+2.7,e)),n.add(u(new Wt(1.55,.1,6,14),d.steel,t+2.6,i+4.4,e,Math.PI/2,0,0)),n.add(C("CH4","#6a2208","#f4e6c8",2,.45,t,i+4.15,e+3.7)),n.add(C("CHILLER","#1a100c","#d6b48a",2.8,.4,t,i+3.6,e+3.7)),ct(n,[[-76,-10],[-80,6],[-80,20]],d.tankCh4,.11),ct(n,[[-68,12],[-74,16],[-80,20]],d.pipe,.09),n}function Q1(){const n=new V;n.name="pad2-beacons";const t=[[2,154],[-34,154],[2,118],[-34,118]];for(const[a,r]of t){const o=N(a,r);n.add(u(new H(.14,.18,5.6,8),d.steelDark,a,o+2.9,r)),n.add(u(new x(.55,.55,.55),d.glowPad,a,o+5.85,r)),n.add(u(new x(.22,.9,.22),d.steel,a,o+6.4,r))}const e=6,i=148,s=N(e,i);return n.add(u(new x(5.4,.16,4.2),d.concrete,e,s+.08,i)),n.add(u(new x(2.6,1.6,1.8),d.habDark,e,s+1,i)),n.add(C("PAD 2","#1a100c","#f0c089",2.2,.42,e,s+2.35,i+2.2)),n.add(C("BEACONS","#1a100c","#d6b48a",2.6,.38,e,s+1.88,i+2.2)),n}function tm(){const n=new V;n.name="cargo-crane";const t=-64,e=80,i=N(t,e);return n.add(u(new x(7.2,.2,7.2),d.concrete,t,i+.1,e)),n.add(u(new x(1.4,10.4,1.4),d.steelDark,t,i+5.3,e)),n.add(u(new x(.28,.28,12.4),d.steel,t+3.6,i+10.5,e-3.2,0,.55,.08)),n.add(u(new x(.18,3.2,.18),d.steelDark,t+7.4,i+8.4,e-6.6)),n.add(u(new x(1.5,1.3,1.5),d.crate,t+7.4,i+6.5,e-6.6)),Et(n,t-2.4,e+2.2,.2,1),Et(n,t-2.8,e-1.6,-.15,.9),n.add(C("CRANE","#1a100c","#f0c089",2.6,.5,t,i+6.4,e+3.6)),n.add(C("CARGO","#1a100c","#d6b48a",2.4,.42,t,i+5.85,e+3.6)),n}function em(){const n=new V;n.name="o2-chiller";const t=-80,e=32,i=N(t,e);return n.add(u(new x(9.6,.2,7.2),d.concrete,t,i+.1,e)),n.add(u(new x(4.2,2.6,3.2),d.habDark,t-1.6,i+1.5,e)),n.add(u(new H(1.25,1.25,5,14),d.tankO2,t+2.6,i+2.7,e)),n.add(u(new Wt(1.55,.1,6,14),d.steel,t+2.6,i+4.4,e,Math.PI/2,0,0)),n.add(C("O2","#2a3340","#e8eef4",1.8,.45,t,i+4.15,e+3.7)),n.add(C("CHILLER","#1a100c","#d6b48a",2.8,.4,t,i+3.6,e+3.7)),ct(n,[[-80,20],[-80,26],[-80,32]],d.steel,.11),ct(n,[[-72,-21],[-80,8],[-80,32]],d.steel,.09),n}function nm(){const n=new V;n.name="power-trench";const t=100,e=-22,i=N(t,e);n.add(u(new x(7.6,.18,5.4),d.concrete,t,i+.08,e)),n.add(u(new x(3.2,1.8,2.4),d.habDark,t,i+1.1,e)),n.add(u(new x(1.4,.9,1.1),d.steelDark,t+2.4,i+.65,e+1.2)),n.add(C("POWER","#111111","#f4e6c8",2.6,.45,t,i+2.45,e+2.8)),n.add(C("TRENCH","#111111","#d6b48a",2.4,.38,t,i+1.95,e+2.8)),ct(n,[[172,-48],[135,-40],[100,-22]],d.cable,.12),ct(n,[[100,-22],[84,-16],[68,-10]],d.cable,.12);for(const[s,a]of[[148,-44],[122,-34],[84,-16]]){const r=N(s,a);n.add(u(new x(2.4,.16,1.1),d.steelDark,s,r+.12,a))}return n}function im(){const n=new V;n.name="regolith-stock";const t=-22,e=-56,i=N(t,e);n.add(u(new x(9.6,.16,7.2),d.concrete,t,i+.08,e));const s=u(new me(2.6,0),d.soil,t-1.6,i+1.2,e);s.scale.set(1.35,.7,1.15),n.add(s);const a=u(new me(2,0),d.soil,t+2.2,i+.95,e+1.1);return a.scale.set(1.2,.6,1.05),n.add(a),n.add(u(new x(2.2,1.2,1.6),d.steelDark,t+2.6,i+.8,e-2)),Et(n,t-3.4,e-2.2,.2,.85),n.add(C("REGOLITH","#1a100c","#f0c089",3.4,.48,t,i+3.15,e+3.7)),n.add(C("SINTER FEED","#1a100c","#d6b48a",3.4,.4,t,i+2.6,e+3.7)),n}function sm(){const n=new V;n.name="survey-2";const t=-124,e=-188,i=N(t,e);for(let a=0;a<3;a++){const r=a/3*Math.PI*2+.2,o=Math.cos(r)*.62,l=Math.sin(r)*.62;n.add(u(new x(.08,2.5,.08),d.steelDark,t+o,i+1.15,e+l,.32*Math.cos(r),0,.32*Math.sin(r)))}n.add(u(new x(.58,.32,.48),d.steelDark,t,i+2.28,e)),n.add(C("SURVEY 2","#1a100c","#f0c089",3,.55,t,i+3.4,e+1.2)),n.add(C("ICE WEST","#1a100c","#d6b48a",2.6,.4,t,i+2.85,e+1.2));const s=[[-136,-200],[-124,-200],[-112,-200],[-136,-188],[-124,-188],[-112,-188],[-136,-176],[-124,-176],[-112,-176]];for(let a=0;a<s.length;a++){const[r,o]=s[a];Wr(n,r,o,a%2===0?d.flagIce:d.flagDeposit)}return Ys(n,-130,-196,"ICE",d.flagIce),Tr(n,-122,-184,.2),Tr(n,-126.4,-182.6,-.3),n}function am(){const n=new V;n.name="h2-recycle";const t=-38,e=16,i=N(t,e);return n.add(u(new x(9.6,.2,7.2),d.concrete,t,i+.1,e)),n.add(u(new H(1.55,1.55,6.4,16),d.steel,t-1.8,i+3.4,e)),n.add(u(new H(1.55,1.55,6.4,16),d.steel,t+1.8,i+3.4,e)),n.add(u(new x(2.2,1.4,1.6),d.habDark,t,i+.9,e+2.2)),n.add(C("H2","#1a100c","#f0c089",1.8,.5,t,i+5.15,e+3.7)),n.add(C("RECYCLE","#1a100c","#d6b48a",2.8,.42,t,i+4.55,e+3.7)),ct(n,[[-50,4],[-44,10],[-38,16]],d.steel,.11),ct(n,[[-38,16],[-52,8],[-64,-8]],d.steel,.1),n}function rm(){const n=new V;n.name="food-4";const t=70,e=-112,i=N(t,e);n.add(u(new x(11.6,.22,7.2),d.concrete,t,i+.1,e));const s=new le(new H(3.3,3.3,11.2,16,1,!1,0,Math.PI),d.glass);s.rotation.z=Math.PI/2,s.position.set(t,i+3.3,e),s.castShadow=!1,n.add(s),n.add(u(new x(10.8,.1,6.6),d.solarFrame,t,i+3.35,e));for(let a=-2;a<=2;a++){n.add(u(new x(1.7,.22,5.2),d.soil,t+a*1.95,i+.32,e));for(let r=-2;r<=2;r++){const o=r%2===0?d.plant:d.plantLeaf;n.add(u(new x(1.15,.5,.66),o,t+a*1.95,i+.7,e+r*.9))}}return n.add(C("GROW 4","#1a100c","#f0c089",2.8,.55,t,i+4.75,e+.15)),n.add(C("FROM CO2","#1a100c","#d6b48a",3,.42,t,i+4.15,e+.15)),ct(n,[[52,-112],[62,-112],[70,-112]],d.pipe,.1),n}function om(){const n=new V;n.name="approach-lights";for(const[s,a]of[[4,68],[4,50],[4,32]]){const r=N(s,a);n.add(u(new H(.12,.16,3.6,8),d.steelDark,s,r+1.9,a)),n.add(u(new x(.42,.42,.42),d.glowPad,s,r+3.85,a))}const t=16,e=48,i=N(t,e);return n.add(u(new x(5.2,.16,4),d.concrete,t,i+.08,e)),n.add(u(new x(2.4,1.5,1.6),d.habDark,t,i+.95,e)),n.add(C("APPROACH","#1a100c","#f0c089",3,.42,t,i+2.25,e+2.1)),n.add(C("LIGHTS","#1a100c","#d6b48a",2.2,.36,t,i+1.78,e+2.1)),n}function cm(){const n=new V;n.name="isru-process-water";const t=-58,e=-36,i=N(t,e);return n.add(u(new x(11.2,.2,7.4),d.concrete,t,i+.1,e)),n.add(u(new H(1.7,1.7,8.4,16),d.pipe,t-2.2,i+2,e,0,0,Math.PI/2)),n.add(u(new H(1.7,1.7,8.4,16),d.pipe,t+2,i+2,e,0,0,Math.PI/2)),n.add(u(new x(2.4,1.6,1.8),d.habDark,t,i+1,e+2.4)),n.add(C("PROCESS","#1a2830","#d6e6ef",3.2,.5,t,i+4.55,e+3.8)),n.add(C("H2O","#1a2830","#d6b48a",2,.42,t,i+4,e+3.8)),ct(n,[[-58,-142],[-58,-90],[-58,-36]],d.pipe,.11),ct(n,[[-58,-36],[-64,-26],[-68,-16]],d.pipe,.1),ct(n,[[-58,-36],[-50,-16],[-50,4]],d.pipe,.1),n}function lm(){const n=new V;n.name="methalox-berm";const t=u(new Wt(9.2,1.7,8,24,Math.PI*1.2),d.rust,50,N(50,4)-.15,4,Math.PI/2,1.6,0);t.scale.set(1,.45,1),n.add(t);for(const[a,r]of[[54,12],[56,4],[54,-4]]){const o=u(new me(2.2,0),d.rust,a,N(a,r)+.9,r);o.scale.set(1.2,.55,1.05),n.add(o)}const[e,i,s]=Fe(50,4,2.2);return n.add(C("FARM BERM","#1a100c","#f0c089",3.4,.55,e,i+1.1,s)),n.add(C("METHALOX","#1a100c","#d6b48a",3.2,.42,e,i+.5,s)),n}function dm(){const n=new V;n.name="ice-mine-berm";const t=u(new Wt(8.4,1.6,8,24,Math.PI*1.15),d.rust,-40,N(-40,-168)-.15,-168,Math.PI/2,.4,0);t.scale.set(1,.44,1),n.add(t);for(const[a,r]of[[-34,-162],[-32,-170],[-38,-176]]){const o=u(new me(2.1,0),d.rust,a,N(a,r)+.85,r);o.scale.set(1.15,.55,1),n.add(o)}const[e,i,s]=Fe(-40,-168,2.2);return n.add(C("MINE BERM","#1a2830","#d6e6ef",3.4,.55,e,i+1.1,s)),n.add(C("ICE 1","#1a2830","#d6b48a",2.2,.42,e,i+.5,s)),n}function hm(){const n=new V;n.name="tool-crib";const t=82,e=-90,i=N(t,e);n.add(u(new x(9.6,.2,7.2),d.concrete,t,i+.1,e)),n.add(u(new x(7.2,2.6,3.4),d.habDark,t,i+1.5,e)),n.add(u(new x(7.4,.12,3.6),d.steel,t,i+2.85,e));for(let s=-2;s<=2;s++)n.add(u(new x(.9,1.6,.55),d.steelDark,t+s*1.15,i+1.15,e+1.35));return Et(n,77.8,-87.4,.15,.85),Et(n,86.2,-92.4,-.1,.8),n.add(C("TOOL","#1a100c","#f0c089",2.2,.5,t,i+3.85,e+3.7)),n.add(C("CRIB","#1a100c","#d6b48a",2,.42,t,i+3.3,e+3.7)),n}function um(){const n=new V;n.name="comms-battery";const t=4,e=-148,i=N(t,e);n.add(u(new x(9.6,.2,7.2),d.concrete,t,i+.1,e));for(let s=0;s<4;s++)n.add(u(new x(1.7,1.9,3.6),d.battery,t-3.2+s*2.1,i+1.15,e)),n.add(u(new x(1.55,.08,3.4),d.steel,t-3.2+s*2.1,i+2.15,e));return n.add(C("COMMS","#111111","#f4e6c8",2.6,.5,t,i+3.15,e+3.7)),n.add(C("NIGHT","#111111","#d6b48a",2.2,.42,t,i+2.6,e+3.7)),n}function fm(){const n=new V;n.name="solar-combiner-3";const t=148,e=-40,i=N(t,e);n.add(u(new x(9.6,.2,7.2),d.concrete,t,i+.1,e)),n.add(u(new x(3.6,2.4,2.8),d.habDark,t-2,i+1.4,e)),n.add(u(new x(3.2,2,2.4),d.steelDark,t+2.2,i+1.2,e));for(let s=0;s<3;s++)n.add(u(new x(.7,1.5,1.8),d.battery,t+1.2+s*.85,i+1,e));return n.add(C("COMBINER","#111111","#f4e6c8",3.4,.5,t,i+3.55,e+3.7)),n.add(C("FIELD 3","#111111","#d6b48a",2.6,.42,t,i+3,e+3.7)),ct(n,[[135,-40],[142,-40],[148,-40]],d.cable,.1),ct(n,[[148,-40],[124,-30],[100,-22]],d.cable,.09),n}function pm(){const n=new V;n.name="solar-combiner-2";const t=124,e=-70,i=N(t,e);n.add(u(new x(9.6,.2,7.2),d.concrete,t,i+.1,e)),n.add(u(new x(3.6,2.4,2.8),d.habDark,t-2,i+1.4,e)),n.add(u(new x(3.2,2,2.4),d.steelDark,t+2.2,i+1.2,e));for(let s=0;s<3;s++)n.add(u(new x(.7,1.5,1.8),d.battery,t+1.2+s*.85,i+1,e));return n.add(C("COMBINER","#111111","#f4e6c8",3.4,.5,t,i+3.55,e+3.7)),n.add(C("FIELD 2","#111111","#d6b48a",2.6,.42,t,i+3,e+3.7)),ct(n,[[112,-83],[118,-76],[124,-70]],d.cable,.1),ct(n,[[124,-70],[136,-54],[148,-40]],d.cable,.09),n}function mm(){const n=new V;n.name="solar-combiner-1";const t=96,e=-44,i=N(t,e);n.add(u(new x(9.6,.2,7.2),d.concrete,t,i+.1,e)),n.add(u(new x(3.6,2.4,2.8),d.habDark,t-2,i+1.4,e)),n.add(u(new x(3.2,2,2.4),d.steelDark,t+2.2,i+1.2,e));for(let s=0;s<3;s++)n.add(u(new x(.7,1.5,1.8),d.battery,t+1.2+s*.85,i+1,e));return n.add(C("COMBINER","#111111","#f4e6c8",3.4,.5,t,i+3.55,e+3.7)),n.add(C("FARM 1","#111111","#d6b48a",2.4,.42,t,i+3,e+3.7)),ct(n,[[82,-44],[90,-44],[96,-44]],d.cable,.1),ct(n,[[96,-44],[98,-32],[100,-22]],d.cable,.09),n}function gm(){const n=new V;n.name="sabatier-condenser";const t=-84,e=8,i=N(t,e);return n.add(u(new x(9.6,.2,7.2),d.concrete,t,i+.1,e)),n.add(u(new x(3.8,2.4,2.8),d.habDark,t-2,i+1.4,e)),n.add(u(new H(1.35,1.35,4.6,14),d.pipe,t+2.4,i+2.5,e)),n.add(u(new Wt(1.65,.1,6,14),d.steel,t+2.4,i+4.1,e,Math.PI/2,0,0)),n.add(u(new H(.7,.7,2.4,12),d.steelDark,t+2.4,i+1.4,e+2.1)),n.add(C("KNOCKOUT","#1a2830","#d6e6ef",3.4,.45,t,i+4.15,e+3.7)),n.add(C("H2O","#1a2830","#d6b48a",1.8,.4,t,i+3.6,e+3.7)),ct(n,[[-68,-16],[-76,-4],[-84,8]],d.pipe,.11),ct(n,[[-84,8],[-80,14],[-80,20]],d.tankCh4,.09),n}function _m(){const n=new V;n.name="hab-dust-lock";const t=16,e=-86,i=N(t,e);return n.add(u(new x(8.4,.2,6.4),d.concrete,t,i+.1,e)),n.add(u(new x(6.2,3.4,4.4),d.habDark,t,i+1.9,e)),n.add(u(new x(6.4,.16,4.6),d.steel,t,i+3.65,e)),n.add(u(new x(1.8,2.4,.22),d.steelDark,t,i+1.5,e+2.3)),n.add(u(new x(1.8,2.4,.22),d.steelDark,t,i+1.5,e-2.3)),n.add(en(t+2.6,e+.2,.1)),n.add(C("DUST LOCK","#1a100c","#f0c089",3.4,.45,t,i+4.35,e+2.4)),n.add(C("HAB EVA","#1a100c","#d6b48a",2.6,.4,t,i+3.85,e+2.4)),n}function xm(){const n=new V;n.name="field3-night";const t=135,e=-22,i=N(t,e);n.add(u(new x(12,.2,7.2),d.concrete,t,i+.1,e));for(let s=0;s<5;s++)n.add(u(new x(1.7,2,4.2),d.battery,t-4+s*2,i+1.2,e));return n.add(C("NIGHT","#111111","#f4e6c8",2.2,.5,t,i+2.7,e+3.6)),n.add(C("FIELD 3","#111111","#d6b48a",2.4,.42,t,i+2.15,e+3.6)),ct(n,[[148,-40],[142,-30],[135,-22]],d.cable,.1),ct(n,[[135,-22],[118,-22],[100,-22]],d.cable,.09),n}function vm(){const n=new V;n.name="field2-night";const t=100,e=-70,i=N(t,e);n.add(u(new x(12,.2,7.2),d.concrete,t,i+.1,e));for(let s=0;s<5;s++)n.add(u(new x(1.7,2,4.2),d.battery,t-4+s*2,i+1.2,e));return n.add(C("NIGHT","#111111","#f4e6c8",2.2,.5,t,i+2.7,e+3.6)),n.add(C("FIELD 2","#111111","#d6b48a",2.4,.42,t,i+2.15,e+3.6)),ct(n,[[124,-70],[112,-70],[100,-70]],d.cable,.1),ct(n,[[100,-70],[100,-46],[100,-22]],d.cable,.09),n}function Mm(){const n=new V;n.name="farm1-night";const t=82,e=-28,i=N(t,e);n.add(u(new x(12,.2,7.2),d.concrete,t,i+.1,e));for(let s=0;s<5;s++)n.add(u(new x(1.7,2,4.2),d.battery,t-4+s*2,i+1.2,e));return n.add(C("NIGHT","#111111","#f4e6c8",2.2,.5,t,i+2.7,e+3.6)),n.add(C("FARM 1","#111111","#d6b48a",2.4,.42,t,i+2.15,e+3.6)),ct(n,[[82,-44],[82,-36],[82,-28]],d.cable,.1),ct(n,[[82,-28],[74,-18],[68,-10]],d.cable,.09),n}function wm(){const n=new V;n.name="co2-capture-1";const t=-68,e=2,i=N(t,e);return n.add(u(new x(11.6,.2,7.4),d.concrete,t,i+.1,e)),n.add(u(new H(.55,.55,6.8,10),d.steel,t-2.4,i+3.6,e)),n.add(u(new H(2.1,.65,2.4,14),d.steelDark,t-2.4,i+7.8,e)),n.add(u(new Wt(1.85,.1,6,16),d.steel,t-2.4,i+9.1,e,Math.PI/2,0,0)),n.add(u(new x(3.2,2.2,2.4),d.habDark,t+2.2,i+1.3,e)),n.add(C("CO2","#1a100c","#f0c089",2.2,.55,t-2.4,i+4.8,e+1.4)),n.add(C("INTAKE 1","#1a100c","#d6b48a",3,.45,t+2.2,i+2.7,e+1.35)),ct(n,[[-68,2],[-68,-8],[-68,-16]],d.pipe,.12),n}function ym(){const n=new V;n.name="field3-dust-fence";const t=122,e=-40,i=N(t,e);for(let s=0;s<8;s++){const a=e-10.5+s*3;n.add(u(new x(.18,3.4,.18),d.steelDark,t,i+1.8,a)),s<7&&n.add(u(new x(.06,2.6,2.7),d.lattice,t,i+1.7,a+1.5))}return n.add(C("DUST","#1a100c","#f0c089",2.4,.45,t-1.4,i+3.5,e)),n.add(C("FIELD 3","#1a100c","#d6b48a",2.6,.4,t-1.4,i+3,e)),n}function Sm(){const n=new V;n.name="field2-dust-fence";const t=98,e=-83,i=N(t,e);for(let s=0;s<8;s++){const a=e-10.5+s*3;n.add(u(new x(.18,3.4,.18),d.steelDark,t,i+1.8,a)),s<7&&n.add(u(new x(.06,2.6,2.7),d.lattice,t,i+1.7,a+1.5))}return n.add(C("DUST","#1a100c","#f0c089",2.4,.45,t-1.4,i+3.5,e)),n.add(C("FIELD 2","#1a100c","#d6b48a",2.6,.4,t-1.4,i+3,e)),n}function bm(){const n=new V;n.name="farm1-dust-fence";const t=70,e=-44,i=N(t,e);for(let s=0;s<8;s++){const a=e-10.5+s*3;n.add(u(new x(.18,3.4,.18),d.steelDark,t,i+1.8,a)),s<7&&n.add(u(new x(.06,2.6,2.7),d.lattice,t,i+1.7,a+1.5))}return n.add(C("DUST","#1a100c","#f0c089",2.4,.45,t-1.4,i+3.5,e)),n.add(C("FARM 1","#1a100c","#d6b48a",2.4,.4,t-1.4,i+3,e)),n}function Em(){const n=new V;n.name="ice-crush-cover";const t=-102,e=-158,i=N(t,e);n.add(u(new x(10.4,.18,8.2),d.concrete,t,i+.09,e));for(const[a,r]of[[-4.2,-3.2],[4.2,-3.2],[-4.2,3.2],[4.2,3.2]])n.add(u(new H(.16,.2,4.2,8),d.steelDark,t+a,i+2.2,e+r));n.add(u(new x(10.8,.14,8.6),d.steel,t,i+4.4,e)),n.add(u(new x(3.2,1.8,2.4),d.steelDark,t,i+1.1,e));const s=u(new me(1.6,0),d.ice,t+2.8,i+.85,e+1.6);return s.scale.set(1.2,.55,1.05),n.add(s),n.add(C("CRUSH","#1a2830","#d6e6ef",2.6,.45,t,i+4.95,e+4.3)),n.add(C("COVER","#1a2830","#d6b48a",2.4,.4,t,i+4.45,e+4.3)),n}function Tm(){const n=new V;n.name="batteries-4";const t=-18,e=-78,i=N(t,e);n.add(u(new x(11.6,.2,6.4),d.concrete,t,i+.1,e));for(let s=0;s<5;s++)n.add(u(new x(1.7,1.95,3.8),d.battery,t-4+s*2,i+1.15,e)),n.add(u(new x(1.55,.08,3.6),d.steel,t-4+s*2,i+2.18,e));return n.add(C("NIGHT","#111111","#f4e6c8",2.4,.5,t,i+2.7,e+3.3)),n.add(C("HAB 4","#111111","#d6b48a",2.2,.42,t,i+2.15,e+3.3)),n}function Am(){const n=new V;n.name="ice-mine-2-berm";const t=u(new Wt(8.4,1.6,8,24,Math.PI*1.15),d.rust,-64,N(-64,-184)-.15,-184,Math.PI/2,.55,0);t.scale.set(1,.44,1),n.add(t);for(const[a,r]of[[-58,-178],[-56,-186],[-62,-192]]){const o=u(new me(2.1,0),d.rust,a,N(a,r)+.85,r);o.scale.set(1.15,.55,1),n.add(o)}const[e,i,s]=Fe(-64,-184,2.2);return n.add(C("MINE BERM","#1a2830","#d6e6ef",3.4,.55,e,i+1.1,s)),n.add(C("ICE 2","#1a2830","#d6b48a",2.2,.42,e,i+.5,s)),n}function Rm(){const n=new V;n.name="potable-uv";const t=32,e=-152,i=N(t,e);return n.add(u(new x(9.6,.2,7.2),d.concrete,t,i+.1,e)),n.add(u(new x(4.2,2.6,3.4),d.habDark,t-1.6,i+1.5,e)),n.add(u(new H(1.05,1.05,3.4,14),d.pipe,t+2.6,i+1.9,e)),n.add(u(new x(1.6,1.4,1.2),d.steel,t+2.6,i+3.9,e)),n.add(C("UV","#1a2830","#d6e6ef",1.6,.5,t,i+4.15,e+3.7)),n.add(C("POLISH","#1a2830","#d6b48a",2.6,.42,t,i+3.6,e+3.7)),ct(n,[[18,-152],[24,-152],[32,-152]],d.pipe,.1),n}function Cm(){const n=new V;n.name="isru-radiators-2";const t=-96,e=16,i=N(t,e);n.add(u(new x(16.4,.18,6.2),d.concrete,t,i+.08,e));for(let s=0;s<5;s++){const a=t-6+s*3;n.add(u(new x(.16,3.6,.16),d.steelDark,a,i+1.9,e-1.8)),n.add(u(new x(.16,3.6,.16),d.steelDark,a,i+1.9,e+1.8)),n.add(u(new x(2.4,3.2,.08),d.solar,a,i+2.4,e,-.15,0,0)),n.add(u(new x(2.5,3.3,.04),d.steel,a,i+2.4,e+.06,-.15,0,0))}return n.add(C("REJECT","#1a100c","#f0c089",2.8,.5,t,i+4.55,e+3.2)),n.add(C("TRAIN 2","#1a100c","#d6b48a",2.8,.42,t,i+4,e+3.2)),ct(n,[[-96,-6],[-96,4],[-96,16]],d.pipe,.1),n}function Pm(){const n=new V;n.name="workshop-3";const t=82,e=-74,i=N(t,e);n.add(u(new x(16,.28,12),d.concrete,t,i+.1,e));const s=u(new H(5.4,5.4,14,16,1,!1,0,Math.PI),d.habDark,t-1.2,i+3.1,e);return s.rotation.z=Math.PI/2,n.add(s),n.add(u(new x(.2,3.8,5.8),d.steelDark,t-8.1,i+2,e)),n.add(u(new x(.28,8.4,.28),d.lattice,t+6.4,i+4.3,e-3.6)),n.add(u(new x(7.2,.2,.2),d.lattice,t+3,i+8.5,e-3.6)),n.add(u(new x(1.5,1.1,1.5),d.crate,t+2.2,i+8,e-3.4)),Et(n,89.2,-69.4,.2),Et(n,90.4,-71.6,-.3,1.05),Et(n,74.6,-68.8,.15,.9),n.add(C("WORKSHOP","#1a100c","#f0c089",3.8,.75,t,i+5.4,e+.2)),n.add(C("BAY 3","#1a100c","#d6b48a",2.6,.5,t,i+4.7,e+.2)),n}function Dm(){const n=new V;n.name="ice-melt-2";const t=-78,e=-156,i=N(t,e);n.add(u(new x(9.6,.2,7.2),d.concrete,t,i+.1,e)),n.add(u(new x(3.6,2.8,3.2),d.habDark,t-1.8,i+1.6,e)),n.add(u(new H(1.45,1.45,4.2,14),d.pipe,t+2.2,i+2.3,e)),n.add(u(new H(.55,.85,1.6,10),d.steelDark,t+2.2,i+4.9,e));const s=u(new me(1.8,0),d.ice,t-3.4,i+.9,e+2.1);return s.scale.set(1.15,.55,1),n.add(s),n.add(C("MELT","#1a2830","#d6e6ef",2.4,.5,t,i+4.4,e+3.7)),n.add(C("MINE 2","#1a2830","#d6b48a",2.6,.42,t,i+3.85,e+3.7)),ct(n,[[-78,-172],[-78,-164],[-78,-156]],d.pipe,.11),ct(n,[[-78,-156],[-90,-90],[-96,-26]],d.pipe,.1),n}function Im(){const n=new V;n.name="sabatier-condenser-2";const t=-110,e=8,i=N(t,e);return n.add(u(new x(9.6,.2,7.2),d.concrete,t,i+.1,e)),n.add(u(new x(3.8,2.4,2.8),d.habDark,t-2,i+1.4,e)),n.add(u(new H(1.35,1.35,4.6,14),d.pipe,t+2.4,i+2.5,e)),n.add(u(new Wt(1.65,.1,6,14),d.steel,t+2.4,i+4.1,e,Math.PI/2,0,0)),n.add(u(new H(.7,.7,2.4,12),d.steelDark,t+2.4,i+1.4,e+2.1)),n.add(C("KNOCKOUT","#1a2830","#d6e6ef",3.4,.45,t,i+4.15,e+3.7)),n.add(C("TRAIN 2","#1a2830","#d6b48a",2.8,.4,t,i+3.6,e+3.7)),ct(n,[[-96,-16],[-104,-4],[-110,8]],d.pipe,.11),n}function Lm(){const n=new V;n.name="ch4-chiller-2";const t=-110,e=20,i=N(t,e);return n.add(u(new x(9.6,.2,7.2),d.concrete,t,i+.1,e)),n.add(u(new x(4.2,2.6,3.2),d.habDark,t-1.6,i+1.5,e)),n.add(u(new H(1.25,1.25,5,14),d.tankCh4,t+2.6,i+2.7,e)),n.add(u(new Wt(1.55,.1,6,14),d.steel,t+2.6,i+4.4,e,Math.PI/2,0,0)),n.add(C("CH4","#6a2208","#f4e6c8",2,.45,t,i+4.15,e+3.7)),n.add(C("TRAIN 2","#1a100c","#d6b48a",2.8,.4,t,i+3.6,e+3.7)),ct(n,[[-110,8],[-110,14],[-110,20]],d.tankCh4,.11),n}function Um(){const n=new V;n.name="o2-chiller-2";const t=-110,e=32,i=N(t,e);return n.add(u(new x(9.6,.2,7.2),d.concrete,t,i+.1,e)),n.add(u(new x(4.2,2.6,3.2),d.habDark,t-1.6,i+1.5,e)),n.add(u(new H(1.25,1.25,5,14),d.tankO2,t+2.6,i+2.7,e)),n.add(u(new Wt(1.55,.1,6,14),d.steel,t+2.6,i+4.4,e,Math.PI/2,0,0)),n.add(C("O2","#2a3340","#e8eef4",1.8,.45,t,i+4.15,e+3.7)),n.add(C("TRAIN 2","#1a100c","#d6b48a",2.8,.4,t,i+3.6,e+3.7)),ct(n,[[-110,20],[-110,26],[-110,32]],d.steel,.11),n}function Nm(){const n=new V;n.name="isru-electrolysis-2";const t=-122,e=8,i=N(t,e);n.add(u(new x(11.6,.2,7.4),d.concrete,t,i+.1,e)),n.add(u(new x(3.4,3.6,2.6),d.habDark,t-2.6,i+2,e)),n.add(u(new x(3.4,3.6,2.6),d.steelDark,t+1.2,i+2,e));for(let s=0;s<4;s++)n.add(u(new x(.18,3.1,2.2),d.steel,t-3.8+s*.7,i+2,e));return n.add(u(new H(1.15,1.15,5.2,14),d.steel,t+4.2,i+2.8,e+1.4)),n.add(u(new H(.95,.95,4.4,14),d.tankO2,t+4.2,i+2.4,e-1.6)),n.add(C("ELECTRO","#1a100c","#f0c089",3.2,.5,t,i+4.55,e+3.7)),n.add(C("TRAIN 2","#1a100c","#d6b48a",2.8,.42,t,i+4,e+3.7)),ct(n,[[-110,8],[-116,8],[-122,8]],d.pipe,.11),n}function zm(){const n=new V;n.name="h2-recycle-2";const t=-122,e=20,i=N(t,e);return n.add(u(new x(9.6,.2,7.2),d.concrete,t,i+.1,e)),n.add(u(new H(1.55,1.55,6.4,16),d.steel,t-1.8,i+3.4,e)),n.add(u(new H(1.55,1.55,6.4,16),d.steel,t+1.8,i+3.4,e)),n.add(u(new x(2.2,1.4,1.6),d.habDark,t,i+.9,e+2.2)),n.add(C("H2","#1a100c","#f0c089",1.8,.5,t,i+5.15,e+3.7)),n.add(C("TRAIN 2","#1a100c","#d6b48a",2.8,.42,t,i+4.55,e+3.7)),ct(n,[[-122,8],[-122,14],[-122,20]],d.steel,.11),n}function Fm(){const n=new V;n.name="eclss-2";const t=-8,e=-98,i=N(t,e);return n.add(u(new x(11.2,.22,7.2),d.concrete,t,i+.1,e)),n.add(u(new x(4.8,2.6,3.4),d.habDark,t-2.4,i+1.5,e)),n.add(C("ECLSS","#1a100c","#f0c089",3.2,.6,t-2.4,i+3.05,e+1.85)),n.add(C("SCRUB 2","#1a100c","#d6b48a",3,.45,t-2.4,i+2.45,e+1.85)),n.add(u(new H(.85,.85,3.4,12),d.steelDark,t+1.6,i+1.9,e-1.4)),n.add(u(new H(.85,.85,3.4,12),d.steelDark,t+3.4,i+1.9,e-1.4)),n.add(C("AMINE","#1a100c","#d6b48a",2.2,.4,t+2.5,i+3.8,e-1.4)),n.add(u(new H(.7,.7,2.6,12),d.tankO2,t+1.6,i+1.5,e+1.8)),n.add(u(new H(.7,.7,2.6,12),d.tankO2,t+3.4,i+1.5,e+1.8)),n.add(C("O2","#2a3340","#e8eef4",1.4,.4,t+2.5,i+3.05,e+1.8)),ct(n,[[8,-98],[0,-98],[-8,-98]],d.pipe,.1),n}function Om(){const n=new V;n.name="waste-recycle-2";const t=-22,e=-98,i=N(t,e);return n.add(u(new x(9.6,.2,7.2),d.concrete,t,i+.1,e)),n.add(u(new x(4.4,2.8,3.6),d.habDark,t-1.4,i+1.6,e)),n.add(u(new H(1.15,1.15,3.6,14),d.pipe,t+2.8,i+2,e)),n.add(u(new H(.85,.85,2.8,12),d.steelDark,t+2.8,i+1.6,e+2)),n.add(C("WASTE","#1a100c","#f0c089",2.6,.5,t,i+4.25,e+3.7)),n.add(C("RECOVERY 2","#1a100c","#d6b48a",3.6,.42,t,i+3.7,e+3.7)),ct(n,[[-8,-98],[-14,-98],[-22,-98]],d.pipe,.1),n}function Bm(){const n=new V;n.name="o2-buffer-2";const t=8,e=-88,i=N(t,e);n.add(u(new x(10.2,.2,7.4),d.concrete,t,i+.1,e));for(let s=0;s<4;s++){const a=t-3.3+s*2.2;n.add(u(new H(.85,.85,3.6,12),d.tankO2,a,i+2,e))}return n.add(C("O2","#2a3340","#e8eef4",1.8,.5,t,i+4.15,e+3.7)),n.add(C("CREW 2","#2a3340","#d6b48a",2.6,.42,t,i+3.6,e+3.7)),ct(n,[[-8,-88],[0,-88],[8,-88]],d.tankO2,.1),n}function km(){const n=new V;n.name="isru-process-water-2";const t=-78,e=-36,i=N(t,e);return n.add(u(new x(11.2,.2,7.4),d.concrete,t,i+.1,e)),n.add(u(new H(1.7,1.7,8.4,16),d.pipe,t-2.2,i+2,e,0,0,Math.PI/2)),n.add(u(new H(1.7,1.7,8.4,16),d.pipe,t+2,i+2,e,0,0,Math.PI/2)),n.add(u(new x(2.4,1.6,1.8),d.habDark,t,i+1,e+2.4)),n.add(C("PROCESS","#1a2830","#d6e6ef",3.2,.5,t,i+4.55,e+3.8)),n.add(C("TRAIN 2","#1a2830","#d6b48a",2.8,.42,t,i+4,e+3.8)),ct(n,[[-78,-156],[-78,-90],[-78,-36]],d.pipe,.11),ct(n,[[-78,-36],[-88,-26],[-96,-16]],d.pipe,.1),n}function Hm(){const n=new V;n.name="parts-rack";const t=96,e=-90,i=N(t,e);n.add(u(new x(9.6,.2,7.2),d.concrete,t,i+.1,e)),n.add(u(new x(8.4,2.8,.22),d.steelDark,t,i+1.6,e-2.4));for(let s=-3;s<=3;s++)n.add(u(new x(.16,2.6,1.8),d.steel,t+s*1.1,i+1.5,e-1.4));return Et(n,92.2,-87.6,.15,.85),Et(n,99.4,-88.2,-.2,1),n.add(C("PARTS","#1a100c","#f0c089",2.6,.5,t,i+3.35,e+3.5)),n.add(C("RACK","#1a100c","#d6b48a",2.2,.42,t,i+2.8,e+3.5)),n}function Gm(){const n=new V;n.name="hab-power-trench";const t=-5,e=-78,i=N(t,e);return n.add(u(new x(7.6,.18,5.4),d.concrete,t,i+.08,e)),n.add(u(new x(3.2,1.8,2.4),d.habDark,t,i+1.1,e)),n.add(u(new x(1.4,.9,1.1),d.steelDark,t+2.4,i+.65,e+1.2)),n.add(C("HAB","#111111","#f4e6c8",1.8,.45,t,i+2.45,e+2.8)),n.add(C("TRENCH","#111111","#d6b48a",2.4,.38,t,i+1.95,e+2.8)),ct(n,[[8,-78],[-5,-78],[-18,-78]],d.cable,.12),n}function Vm(){const n=new V;n.name="comms-inverter";const t=16,e=-148,i=N(t,e);n.add(u(new x(9.6,.2,7.2),d.concrete,t,i+.1,e)),n.add(u(new x(3.6,2.4,2.8),d.habDark,t-2,i+1.4,e)),n.add(u(new x(3.2,2,2.4),d.steelDark,t+2.2,i+1.2,e));for(let s=0;s<3;s++)n.add(u(new x(.7,1.5,1.8),d.battery,t+1.2+s*.85,i+1,e));return n.add(C("COMMS","#111111","#f4e6c8",2.6,.5,t,i+3.55,e+3.7)),n.add(C("INVERTER","#111111","#d6b48a",3.2,.42,t,i+3,e+3.7)),ct(n,[[4,-148],[10,-148],[16,-148]],d.cable,.1),ct(n,[[-8,-162],[4,-154],[16,-148]],d.cable,.09),n}function Wm(){const n=new V;n.name="ice-weigh";const t=-90,e=-136,i=N(t,e);return n.add(u(new x(9.6,.2,7.2),d.concrete,t,i+.1,e)),n.add(u(new x(6.4,.28,3.6),d.steel,t,i+.28,e)),n.add(u(new x(2.2,2.4,1.8),d.habDark,t+3.2,i+1.4,e+2)),n.add(u(new x(.18,3.2,.18),d.steelDark,t-3.6,i+1.8,e-2.4)),n.add(u(new x(.18,3.2,.18),d.steelDark,t+3.6,i+1.8,e-2.4)),n.add(u(new x(7.4,.12,.12),d.steel,t,i+3.45,e-2.4)),n.add(C("WEIGH","#1a2830","#d6e6ef",2.6,.5,t,i+3.15,e+3.7)),n.add(C("ICE HAUL","#1a2830","#d6b48a",3,.42,t,i+2.6,e+3.7)),n}function Xm(){const n=new V;n.name="hab-eva-locker";const t=16,e=-74,i=N(t,e);return n.add(u(new x(7.2,.16,5.4),d.concrete,t,i+.08,e)),n.add(u(new x(5.8,.16,2.4),d.steelDark,t,i+.18,e)),n.add(u(new x(.16,2.8,.16),d.steel,t-2.4,i+1.6,e-.7)),n.add(u(new x(.16,2.8,.16),d.steel,t+2.4,i+1.6,e-.7)),n.add(u(new x(5,.12,.12),d.steel,t,i+3,e-.7)),n.add(en(t-1.5,e,.2)),n.add(en(t,e+.15,-.1)),n.add(en(t+1.5,e,.15)),n.add(C("SUITS","#1a100c","#f0c089",2.4,.45,t,i+3.45,e+2.4)),n.add(C("HAB EVA","#1a100c","#d6b48a",2.8,.4,t,i+2.95,e+2.4)),n}function qm(){const n=new V;n.name="comms-berm";const t=u(new Wt(8.4,1.6,8,24,Math.PI*1.15),d.rust,-48,N(-48,-138)-.15,-138,Math.PI/2,.7,0);t.scale.set(1,.44,1),n.add(t);for(const[a,r]of[[-42,-132],[-40,-140],[-46,-146]]){const o=u(new me(2.1,0),d.rust,a,N(a,r)+.85,r);o.scale.set(1.15,.55,1),n.add(o)}const[e,i,s]=Fe(-48,-138,2.2);return n.add(C("DUST BERM","#1a2830","#d6e6ef",3.4,.55,e,i+1.1,s)),n.add(C("COMMS","#1a2830","#d6b48a",2.4,.42,e,i+.5,s)),n}function Ym(){const n=new V;n.name="grow-water";const t=52,e=-126,i=N(t,e);return n.add(u(new x(11.2,.2,7.4),d.concrete,t,i+.1,e)),n.add(u(new H(1.7,1.7,8.4,16),d.pipe,t-2.2,i+2,e,0,0,Math.PI/2)),n.add(u(new H(1.7,1.7,8.4,16),d.pipe,t+2,i+2,e,0,0,Math.PI/2)),n.add(u(new x(2.4,1.6,1.8),d.habDark,t,i+1,e+2.4)),n.add(C("GROW","#1a2830","#d6e6ef",2.4,.5,t,i+4.55,e+3.8)),n.add(C("H2O","#1a2830","#d6b48a",2,.42,t,i+4,e+3.8)),ct(n,[[52,-112],[52,-118],[52,-126]],d.pipe,.11),ct(n,[[38,-126],[44,-126],[52,-126]],d.pipe,.1),n}function Km(){const n=new V;n.name="grow-nutrient";const t=70,e=-126,i=N(t,e);return n.add(u(new x(9.6,.2,7.2),d.concrete,t,i+.1,e)),n.add(u(new x(4.4,2.8,3.6),d.habDark,t-1.4,i+1.6,e)),n.add(u(new H(1.15,1.15,3.6,14),d.pipe,t+2.8,i+2,e)),n.add(u(new H(.85,.85,2.8,12),d.steelDark,t+2.8,i+1.6,e+2)),n.add(C("NUTRIENT","#1a100c","#f0c089",3.4,.5,t,i+4.25,e+3.7)),n.add(C("GROW","#1a100c","#d6b48a",2.2,.42,t,i+3.7,e+3.7)),ct(n,[[52,-126],[60,-126],[70,-126]],d.pipe,.1),ct(n,[[70,-112],[70,-118],[70,-126]],d.pipe,.09),n}function Jm(){const n=new V;n.name="hab-street-lights";for(const[s,a]of[[0,-78],[0,-98],[0,-118]]){const r=N(s,a);n.add(u(new H(.12,.16,3.6,8),d.steelDark,s,r+1.9,a)),n.add(u(new x(.42,.42,.42),d.glowPad,s,r+3.85,a))}const t=0,e=-68,i=N(t,e);return n.add(u(new x(5.2,.16,4),d.concrete,t,i+.08,e)),n.add(u(new x(2.4,1.5,1.6),d.habDark,t,i+.95,e)),n.add(C("HAB","#1a100c","#f0c089",1.8,.42,t,i+2.25,e+2.1)),n.add(C("LIGHTS","#1a100c","#d6b48a",2.2,.36,t,i+1.78,e+2.1)),n}function Zm(){const n=new V;n.name="workshop-lights";for(const[s,a]of[[58,-80],[74,-80],[90,-80]]){const r=N(s,a);n.add(u(new H(.12,.16,3.6,8),d.steelDark,s,r+1.9,a)),n.add(u(new x(.42,.42,.42),d.glowPad,s,r+3.85,a))}const t=48,e=-70,i=N(t,e);return n.add(u(new x(5.2,.16,4),d.concrete,t,i+.08,e)),n.add(u(new x(2.4,1.5,1.6),d.habDark,t,i+.95,e)),n.add(C("SHOP","#1a100c","#f0c089",2,.42,t,i+2.25,e+2.1)),n.add(C("LIGHTS","#1a100c","#d6b48a",2.2,.36,t,i+1.78,e+2.1)),n}function $m(){const n=new V;n.name="ice-mine-lights";for(const[s,a]of[[-58,-148],[-78,-148],[-90,-148]]){const r=N(s,a);n.add(u(new H(.12,.16,3.6,8),d.steelDark,s,r+1.9,a)),n.add(u(new x(.42,.42,.42),d.glowPad,s,r+3.85,a))}const t=-46,e=-148,i=N(t,e);return n.add(u(new x(5.2,.16,4),d.concrete,t,i+.08,e)),n.add(u(new x(2.4,1.5,1.6),d.habDark,t,i+.95,e)),n.add(C("ICE","#1a100c","#f0c089",1.8,.42,t,i+2.25,e+2.1)),n.add(C("LIGHTS","#1a100c","#d6b48a",2.2,.36,t,i+1.78,e+2.1)),n}function jm(){const n=new V;n.name="isru-lights";for(const[s,a]of[[-44,12],[-62,16],[-80,16]]){const r=N(s,a);n.add(u(new H(.12,.16,3.6,8),d.steelDark,s,r+1.9,a)),n.add(u(new x(.42,.42,.42),d.glowPad,s,r+3.85,a))}const t=-38,e=16,i=N(t,e);return n.add(u(new x(5.2,.16,4),d.concrete,t,i+.08,e)),n.add(u(new x(2.4,1.5,1.6),d.habDark,t,i+.95,e)),n.add(C("ISRU","#1a100c","#f0c089",2,.42,t,i+2.25,e+2.1)),n.add(C("LIGHTS","#1a100c","#d6b48a",2.2,.36,t,i+1.78,e+2.1)),n}const ic=new E(.55,.62,.38);function t2(){const n=new Hp;A0(n),n.add(S0(ic)),n.add(b0(ic)),n.add(v0()),n.add(M0()),n.add(E0());const t=T0();n.add(t);const e=C0();return n.add(e.group),{scene:n,dust:t,settlement:e,getHeight:N}}function e2(n){const t=new kp({canvas:n,antialias:!0,powerPreference:"high-performance"});return t.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),t.setSize(window.innerWidth,window.innerHeight),t.shadowMap.enabled=!0,t.shadowMap.type=ac,t.outputColorSpace=ze,t.toneMapping=oc,t.toneMappingExposure=1.05,t}function n2(n,t){window.addEventListener("resize",()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)})}export{Fi as C,je as P,E as V,e2 as a,n2 as b,t2 as c,Qm as d};
