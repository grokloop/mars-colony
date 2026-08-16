(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _a="170",Hc=0,Va=1,Gc=2,ec=1,nc=2,mn=3,Fn=0,De=1,nn=2,Un=0,Mi=1,Wa=2,Xa=3,qa=4,Vc=5,Yn=100,Wc=101,Xc=102,qc=103,Yc=104,Kc=200,Jc=201,Zc=202,$c=203,Rr=204,Cr=205,jc=206,Qc=207,tl=208,el=209,nl=210,il=211,sl=212,rl=213,al=214,Pr=0,Dr=1,Ir=2,wi=3,Lr=4,Ur=5,Nr=6,Fr=7,ic=0,ol=1,cl=2,Nn=0,ll=1,dl=2,hl=3,sc=4,ul=5,fl=6,pl=7,rc=300,Ei=301,bi=302,zr=303,Or=304,Ws=306,Br=1e3,Jn=1001,kr=1002,ke=1003,ml=1004,as=1005,sn=1006,Ks=1007,Zn=1008,vn=1009,ac=1010,oc=1011,$i=1012,xa=1013,$n=1014,rn=1015,Qi=1016,va=1017,Ma=1018,Ti=1020,cc=35902,lc=1021,dc=1022,je=1023,hc=1024,uc=1025,yi=1026,Ai=1027,ya=1028,Sa=1029,fc=1030,wa=1031,Ea=1033,Ls=33776,Us=33777,Ns=33778,Fs=33779,Hr=35840,Gr=35841,Vr=35842,Wr=35843,Xr=36196,qr=37492,Yr=37496,Kr=37808,Jr=37809,Zr=37810,$r=37811,jr=37812,Qr=37813,ta=37814,ea=37815,na=37816,ia=37817,sa=37818,ra=37819,aa=37820,oa=37821,zs=36492,ca=36494,la=36495,pc=36283,da=36284,ha=36285,ua=36286,gl=3200,_l=3201,mc=0,xl=1,In="",Fe="srgb",Ci="srgb-linear",Xs="linear",re="srgb",ni=7680,Ya=519,vl=512,Ml=513,yl=514,gc=515,Sl=516,wl=517,El=518,bl=519,Ka=35044,Ja="300 es",_n=2e3,ks=2001;class Pi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Js=Math.PI/180,fa=180/Math.PI;function ts(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]).toLowerCase()}function Re(n,t,e){return Math.max(t,Math.min(e,n))}function Tl(n,t){return(n%t+t)%t}function Zs(n,t,e){return(1-e)*n+e*t}function Oi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ne(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Rt{constructor(t=0,e=0){Rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,i,s,r,a,o,l,c){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){const d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=e,d[4]=r,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],p=i[7],u=i[2],m=i[5],x=i[8],M=s[0],_=s[3],g=s[6],R=s[1],T=s[4],S=s[7],O=s[2],P=s[5],D=s[8];return r[0]=a*M+o*R+l*O,r[3]=a*_+o*T+l*P,r[6]=a*g+o*S+l*D,r[1]=c*M+d*R+p*O,r[4]=c*_+d*T+p*P,r[7]=c*g+d*S+p*D,r[2]=u*M+m*R+x*O,r[5]=u*_+m*T+x*P,r[8]=u*g+m*S+x*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return e*a*d-e*o*c-i*r*d+i*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],p=d*a-o*c,u=o*l-d*r,m=c*r-a*l,x=e*p+i*u+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/x;return t[0]=p*M,t[1]=(s*c-d*i)*M,t[2]=(o*i-s*a)*M,t[3]=u*M,t[4]=(d*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=m*M,t[7]=(i*l-c*e)*M,t[8]=(a*e-i*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply($s.makeScale(t,e)),this}rotate(t){return this.premultiply($s.makeRotation(-t)),this}translate(t,e){return this.premultiply($s.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const $s=new Ht;function _c(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Hs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Al(){const n=Hs("canvas");return n.style.display="block",n}const Za={};function Yi(n){n in Za||(Za[n]=!0,console.warn(n))}function Rl(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Cl(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Pl(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Qt={enabled:!0,workingColorSpace:Ci,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===re&&(n.r=xn(n.r),n.g=xn(n.g),n.b=xn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===re&&(n.r=Si(n.r),n.g=Si(n.g),n.b=Si(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===In?Xs:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function xn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Si(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const $a=[.64,.33,.3,.6,.15,.06],ja=[.2126,.7152,.0722],Qa=[.3127,.329],to=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eo=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qt.define({[Ci]:{primaries:$a,whitePoint:Qa,transfer:Xs,toXYZ:to,fromXYZ:eo,luminanceCoefficients:ja,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:$a,whitePoint:Qa,transfer:re,toXYZ:to,fromXYZ:eo,luminanceCoefficients:ja,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}});let ii;class Dl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ii===void 0&&(ii=Hs("canvas")),ii.width=t.width,ii.height=t.height;const i=ii.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ii}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Hs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=xn(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(xn(e[i]/255)*255):e[i]=xn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Il=0;class xc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Il++}),this.uuid=ts(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(js(s[a].image)):r.push(js(s[a]))}else r=js(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function js(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Dl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ll=0;class Ce extends Pi{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,i=Jn,s=Jn,r=sn,a=Zn,o=je,l=vn,c=Ce.DEFAULT_ANISOTROPY,d=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ll++}),this.uuid=ts(),this.name="",this.source=new xc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Br:t.x=t.x-Math.floor(t.x);break;case Jn:t.x=t.x<0?0:1;break;case kr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Br:t.y=t.y-Math.floor(t.y);break;case Jn:t.y=t.y<0?0:1;break;case kr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=rc;Ce.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,i=0,s=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],d=l[4],p=l[8],u=l[1],m=l[5],x=l[9],M=l[2],_=l[6],g=l[10];if(Math.abs(d-u)<.01&&Math.abs(p-M)<.01&&Math.abs(x-_)<.01){if(Math.abs(d+u)<.1&&Math.abs(p+M)<.1&&Math.abs(x+_)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,S=(m+1)/2,O=(g+1)/2,P=(d+u)/4,D=(p+M)/4,L=(x+_)/4;return T>S&&T>O?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=P/i,r=D/i):S>O?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=P/s,r=L/s):O<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),i=D/r,s=L/r),this.set(i,s,r,e),this}let R=Math.sqrt((_-x)*(_-x)+(p-M)*(p-M)+(u-d)*(u-d));return Math.abs(R)<.001&&(R=1),this.x=(_-x)/R,this.y=(p-M)/R,this.z=(u-d)/R,this.w=Math.acos((c+m+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ul extends Pi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ce(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new xc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends Ul{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class vc extends Ce{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nl extends Ce{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class es{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],d=i[s+2],p=i[s+3];const u=r[a+0],m=r[a+1],x=r[a+2],M=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=p;return}if(o===1){t[e+0]=u,t[e+1]=m,t[e+2]=x,t[e+3]=M;return}if(p!==M||l!==u||c!==m||d!==x){let _=1-o;const g=l*u+c*m+d*x+p*M,R=g>=0?1:-1,T=1-g*g;if(T>Number.EPSILON){const O=Math.sqrt(T),P=Math.atan2(O,g*R);_=Math.sin(_*P)/O,o=Math.sin(o*P)/O}const S=o*R;if(l=l*_+u*S,c=c*_+m*S,d=d*_+x*S,p=p*_+M*S,_===1-o){const O=1/Math.sqrt(l*l+c*c+d*d+p*p);l*=O,c*=O,d*=O,p*=O}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=p}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],d=i[s+3],p=r[a],u=r[a+1],m=r[a+2],x=r[a+3];return t[e]=o*x+d*p+l*m-c*u,t[e+1]=l*x+d*u+c*p-o*m,t[e+2]=c*x+d*m+o*u-l*p,t[e+3]=d*x-o*p-l*u-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(s/2),p=o(r/2),u=l(i/2),m=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=u*d*p+c*m*x,this._y=c*m*p-u*d*x,this._z=c*d*x+u*m*p,this._w=c*d*p-u*m*x;break;case"YXZ":this._x=u*d*p+c*m*x,this._y=c*m*p-u*d*x,this._z=c*d*x-u*m*p,this._w=c*d*p+u*m*x;break;case"ZXY":this._x=u*d*p-c*m*x,this._y=c*m*p+u*d*x,this._z=c*d*x+u*m*p,this._w=c*d*p-u*m*x;break;case"ZYX":this._x=u*d*p-c*m*x,this._y=c*m*p+u*d*x,this._z=c*d*x-u*m*p,this._w=c*d*p+u*m*x;break;case"YZX":this._x=u*d*p+c*m*x,this._y=c*m*p+u*d*x,this._z=c*d*x-u*m*p,this._w=c*d*p-u*m*x;break;case"XZY":this._x=u*d*p-c*m*x,this._y=c*m*p-u*d*x,this._z=c*d*x+u*m*p,this._w=c*d*p+u*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],d=e[6],p=e[10],u=i+o+p;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(d-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(d-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,d=e._w;return this._x=i*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-i*c,this._z=r*d+a*c+i*l-s*o,this._w=a*d-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),p=Math.sin((1-e)*d)/c,u=Math.sin(e*d)/c;return this._w=a*p+this._w*u,this._x=i*p+this._x*u,this._y=s*p+this._y*u,this._z=r*p+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,i=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(no.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(no.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),d=2*(o*e-r*s),p=2*(r*i-a*e);return this.x=e+l*c+a*p-o*d,this.y=i+l*d+o*c-r*p,this.z=s+l*p+r*d-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Qs.copy(this).projectOnVector(t),this.sub(Qs)}reflect(t){return this.sub(Qs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qs=new A,no=new es;class Qn{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,qe):qe.fromBufferAttribute(r,a),qe.applyMatrix4(t.matrixWorld),this.expandByPoint(qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),os.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),os.copy(i.boundingBox)),os.applyMatrix4(t.matrixWorld),this.union(os)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qe),qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bi),cs.subVectors(this.max,Bi),si.subVectors(t.a,Bi),ri.subVectors(t.b,Bi),ai.subVectors(t.c,Bi),En.subVectors(ri,si),bn.subVectors(ai,ri),On.subVectors(si,ai);let e=[0,-En.z,En.y,0,-bn.z,bn.y,0,-On.z,On.y,En.z,0,-En.x,bn.z,0,-bn.x,On.z,0,-On.x,-En.y,En.x,0,-bn.y,bn.x,0,-On.y,On.x,0];return!tr(e,si,ri,ai,cs)||(e=[1,0,0,0,1,0,0,0,1],!tr(e,si,ri,ai,cs))?!1:(ls.crossVectors(En,bn),e=[ls.x,ls.y,ls.z],tr(e,si,ri,ai,cs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const dn=[new A,new A,new A,new A,new A,new A,new A,new A],qe=new A,os=new Qn,si=new A,ri=new A,ai=new A,En=new A,bn=new A,On=new A,Bi=new A,cs=new A,ls=new A,Bn=new A;function tr(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Bn.fromArray(n,r);const o=s.x*Math.abs(Bn.x)+s.y*Math.abs(Bn.y)+s.z*Math.abs(Bn.z),l=t.dot(Bn),c=e.dot(Bn),d=i.dot(Bn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Fl=new Qn,ki=new A,er=new A;class Di{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Fl.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ki.subVectors(t,this.center);const e=ki.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ki,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(er.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ki.copy(t.center).add(er)),this.expandByPoint(ki.copy(t.center).sub(er))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hn=new A,nr=new A,ds=new A,Tn=new A,ir=new A,hs=new A,sr=new A;class Mc{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hn.copy(this.origin).addScaledVector(this.direction,e),hn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){nr.copy(t).add(e).multiplyScalar(.5),ds.copy(e).sub(t).normalize(),Tn.copy(this.origin).sub(nr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ds),o=Tn.dot(this.direction),l=-Tn.dot(ds),c=Tn.lengthSq(),d=Math.abs(1-a*a);let p,u,m,x;if(d>0)if(p=a*l-o,u=a*o-l,x=r*d,p>=0)if(u>=-x)if(u<=x){const M=1/d;p*=M,u*=M,m=p*(p+a*u+2*o)+u*(a*p+u+2*l)+c}else u=r,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*l)+c;else u=-r,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*l)+c;else u<=-x?(p=Math.max(0,-(-a*r+o)),u=p>0?-r:Math.min(Math.max(-r,-l),r),m=-p*p+u*(u+2*l)+c):u<=x?(p=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(p=Math.max(0,-(a*r+o)),u=p>0?r:Math.min(Math.max(-r,-l),r),m=-p*p+u*(u+2*l)+c);else u=a>0?-r:r,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(nr).addScaledVector(ds,u),m}intersectSphere(t,e){hn.subVectors(t.center,this.origin);const i=hn.dot(this.direction),s=hn.dot(hn)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),d>=0?(r=(t.min.y-u.y)*d,a=(t.max.y-u.y)*d):(r=(t.max.y-u.y)*d,a=(t.min.y-u.y)*d),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,hn)!==null}intersectTriangle(t,e,i,s,r){ir.subVectors(e,t),hs.subVectors(i,t),sr.crossVectors(ir,hs);let a=this.direction.dot(sr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Tn.subVectors(this.origin,t);const l=o*this.direction.dot(hs.crossVectors(Tn,hs));if(l<0)return null;const c=o*this.direction.dot(ir.cross(Tn));if(c<0||l+c>a)return null;const d=-o*Tn.dot(sr);return d<0?null:this.at(d/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,i,s,r,a,o,l,c,d,p,u,m,x,M,_){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,d,p,u,m,x,M,_)}set(t,e,i,s,r,a,o,l,c,d,p,u,m,x,M,_){const g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=d,g[10]=p,g[14]=u,g[3]=m,g[7]=x,g[11]=M,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/oi.setFromMatrixColumn(t,0).length(),r=1/oi.setFromMatrixColumn(t,1).length(),a=1/oi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){const u=a*d,m=a*p,x=o*d,M=o*p;e[0]=l*d,e[4]=-l*p,e[8]=c,e[1]=m+x*c,e[5]=u-M*c,e[9]=-o*l,e[2]=M-u*c,e[6]=x+m*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*d,m=l*p,x=c*d,M=c*p;e[0]=u+M*o,e[4]=x*o-m,e[8]=a*c,e[1]=a*p,e[5]=a*d,e[9]=-o,e[2]=m*o-x,e[6]=M+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*d,m=l*p,x=c*d,M=c*p;e[0]=u-M*o,e[4]=-a*p,e[8]=x+m*o,e[1]=m+x*o,e[5]=a*d,e[9]=M-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*d,m=a*p,x=o*d,M=o*p;e[0]=l*d,e[4]=x*c-m,e[8]=u*c+M,e[1]=l*p,e[5]=M*c+u,e[9]=m*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,m=a*c,x=o*l,M=o*c;e[0]=l*d,e[4]=M-u*p,e[8]=x*p+m,e[1]=p,e[5]=a*d,e[9]=-o*d,e[2]=-c*d,e[6]=m*p+x,e[10]=u-M*p}else if(t.order==="XZY"){const u=a*l,m=a*c,x=o*l,M=o*c;e[0]=l*d,e[4]=-p,e[8]=c*d,e[1]=u*p+M,e[5]=a*d,e[9]=m*p-x,e[2]=x*p-m,e[6]=o*d,e[10]=M*p+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zl,t,Ol)}lookAt(t,e,i){const s=this.elements;return Oe.subVectors(t,e),Oe.lengthSq()===0&&(Oe.z=1),Oe.normalize(),An.crossVectors(i,Oe),An.lengthSq()===0&&(Math.abs(i.z)===1?Oe.x+=1e-4:Oe.z+=1e-4,Oe.normalize(),An.crossVectors(i,Oe)),An.normalize(),us.crossVectors(Oe,An),s[0]=An.x,s[4]=us.x,s[8]=Oe.x,s[1]=An.y,s[5]=us.y,s[9]=Oe.y,s[2]=An.z,s[6]=us.z,s[10]=Oe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],p=i[5],u=i[9],m=i[13],x=i[2],M=i[6],_=i[10],g=i[14],R=i[3],T=i[7],S=i[11],O=i[15],P=s[0],D=s[4],L=s[8],b=s[12],w=s[1],I=s[5],X=s[9],G=s[13],J=s[2],nt=s[6],Z=s[10],rt=s[14],K=s[3],dt=s[7],gt=s[11],Tt=s[15];return r[0]=a*P+o*w+l*J+c*K,r[4]=a*D+o*I+l*nt+c*dt,r[8]=a*L+o*X+l*Z+c*gt,r[12]=a*b+o*G+l*rt+c*Tt,r[1]=d*P+p*w+u*J+m*K,r[5]=d*D+p*I+u*nt+m*dt,r[9]=d*L+p*X+u*Z+m*gt,r[13]=d*b+p*G+u*rt+m*Tt,r[2]=x*P+M*w+_*J+g*K,r[6]=x*D+M*I+_*nt+g*dt,r[10]=x*L+M*X+_*Z+g*gt,r[14]=x*b+M*G+_*rt+g*Tt,r[3]=R*P+T*w+S*J+O*K,r[7]=R*D+T*I+S*nt+O*dt,r[11]=R*L+T*X+S*Z+O*gt,r[15]=R*b+T*G+S*rt+O*Tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],d=t[2],p=t[6],u=t[10],m=t[14],x=t[3],M=t[7],_=t[11],g=t[15];return x*(+r*l*p-s*c*p-r*o*u+i*c*u+s*o*m-i*l*m)+M*(+e*l*m-e*c*u+r*a*u-s*a*m+s*c*d-r*l*d)+_*(+e*c*p-e*o*m-r*a*p+i*a*m+r*o*d-i*c*d)+g*(-s*o*d-e*l*p+e*o*u+s*a*p-i*a*u+i*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],p=t[9],u=t[10],m=t[11],x=t[12],M=t[13],_=t[14],g=t[15],R=p*_*c-M*u*c+M*l*m-o*_*m-p*l*g+o*u*g,T=x*u*c-d*_*c-x*l*m+a*_*m+d*l*g-a*u*g,S=d*M*c-x*p*c+x*o*m-a*M*m-d*o*g+a*p*g,O=x*p*l-d*M*l-x*o*u+a*M*u+d*o*_-a*p*_,P=e*R+i*T+s*S+r*O;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/P;return t[0]=R*D,t[1]=(M*u*r-p*_*r-M*s*m+i*_*m+p*s*g-i*u*g)*D,t[2]=(o*_*r-M*l*r+M*s*c-i*_*c-o*s*g+i*l*g)*D,t[3]=(p*l*r-o*u*r-p*s*c+i*u*c+o*s*m-i*l*m)*D,t[4]=T*D,t[5]=(d*_*r-x*u*r+x*s*m-e*_*m-d*s*g+e*u*g)*D,t[6]=(x*l*r-a*_*r-x*s*c+e*_*c+a*s*g-e*l*g)*D,t[7]=(a*u*r-d*l*r+d*s*c-e*u*c-a*s*m+e*l*m)*D,t[8]=S*D,t[9]=(x*p*r-d*M*r-x*i*m+e*M*m+d*i*g-e*p*g)*D,t[10]=(a*M*r-x*o*r+x*i*c-e*M*c-a*i*g+e*o*g)*D,t[11]=(d*o*r-a*p*r-d*i*c+e*p*c+a*i*m-e*o*m)*D,t[12]=O*D,t[13]=(d*M*s-x*p*s+x*i*u-e*M*u-d*i*_+e*p*_)*D,t[14]=(x*o*s-a*M*s-x*i*l+e*M*l+a*i*_-e*o*_)*D,t[15]=(a*p*s-d*o*s+d*i*l-e*p*l-a*i*u+e*o*u)*D,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,d=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+i,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,d=a+a,p=o+o,u=r*c,m=r*d,x=r*p,M=a*d,_=a*p,g=o*p,R=l*c,T=l*d,S=l*p,O=i.x,P=i.y,D=i.z;return s[0]=(1-(M+g))*O,s[1]=(m+S)*O,s[2]=(x-T)*O,s[3]=0,s[4]=(m-S)*P,s[5]=(1-(u+g))*P,s[6]=(_+R)*P,s[7]=0,s[8]=(x+T)*D,s[9]=(_-R)*D,s[10]=(1-(u+M))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=oi.set(s[0],s[1],s[2]).length();const a=oi.set(s[4],s[5],s[6]).length(),o=oi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ye.copy(this);const c=1/r,d=1/a,p=1/o;return Ye.elements[0]*=c,Ye.elements[1]*=c,Ye.elements[2]*=c,Ye.elements[4]*=d,Ye.elements[5]*=d,Ye.elements[6]*=d,Ye.elements[8]*=p,Ye.elements[9]*=p,Ye.elements[10]*=p,e.setFromRotationMatrix(Ye),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=_n){const l=this.elements,c=2*r/(e-t),d=2*r/(i-s),p=(e+t)/(e-t),u=(i+s)/(i-s);let m,x;if(o===_n)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===ks)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=_n){const l=this.elements,c=1/(e-t),d=1/(i-s),p=1/(a-r),u=(e+t)*c,m=(i+s)*d;let x,M;if(o===_n)x=(a+r)*p,M=-2*p;else if(o===ks)x=r*p,M=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=M,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const oi=new A,Ye=new ce,zl=new A(0,0,0),Ol=new A(1,1,1),An=new A,us=new A,Oe=new A,io=new ce,so=new es;class on{constructor(t=0,e=0,i=0,s=on.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],p=s[2],u=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Re(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return io.makeRotationFromQuaternion(t),this.setFromRotationMatrix(io,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return so.setFromEuler(this),this.setFromQuaternion(so,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}on.DEFAULT_ORDER="XYZ";class yc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Bl=0;const ro=new A,ci=new es,un=new ce,fs=new A,Hi=new A,kl=new A,Hl=new es,ao=new A(1,0,0),oo=new A(0,1,0),co=new A(0,0,1),lo={type:"added"},Gl={type:"removed"},li={type:"childadded",child:null},rr={type:"childremoved",child:null};class Me extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bl++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new A,e=new on,i=new es,s=new A(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new Ht}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.multiply(ci),this}rotateOnWorldAxis(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.premultiply(ci),this}rotateX(t){return this.rotateOnAxis(ao,t)}rotateY(t){return this.rotateOnAxis(oo,t)}rotateZ(t){return this.rotateOnAxis(co,t)}translateOnAxis(t,e){return ro.copy(t).applyQuaternion(this.quaternion),this.position.add(ro.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ao,t)}translateY(t){return this.translateOnAxis(oo,t)}translateZ(t){return this.translateOnAxis(co,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?fs.copy(t):fs.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Hi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(Hi,fs,this.up):un.lookAt(fs,Hi,this.up),this.quaternion.setFromRotationMatrix(un),s&&(un.extractRotation(s.matrixWorld),ci.setFromRotationMatrix(un),this.quaternion.premultiply(ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lo),li.child=t,this.dispatchEvent(li),li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gl),rr.child=t,this.dispatchEvent(rr),rr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),un.multiply(t.parent.matrixWorld)),t.applyMatrix4(un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lo),li.child=t,this.dispatchEvent(li),li.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,t,kl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,Hl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),d=a(t.images),p=a(t.shapes),u=a(t.skeletons),m=a(t.animations),x=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=s,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Me.DEFAULT_UP=new A(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ke=new A,fn=new A,ar=new A,pn=new A,di=new A,hi=new A,ho=new A,or=new A,cr=new A,lr=new A,dr=new ge,hr=new ge,ur=new ge;class $e{constructor(t=new A,e=new A,i=new A){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ke.subVectors(t,e),s.cross(Ke);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Ke.subVectors(s,e),fn.subVectors(i,e),ar.subVectors(t,e);const a=Ke.dot(Ke),o=Ke.dot(fn),l=Ke.dot(ar),c=fn.dot(fn),d=fn.dot(ar),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;const u=1/p,m=(c*l-o*d)*u,x=(a*d-o*l)*u;return r.set(1-m-x,x,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,pn)===null?!1:pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,pn.x),l.addScaledVector(a,pn.y),l.addScaledVector(o,pn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return dr.setScalar(0),hr.setScalar(0),ur.setScalar(0),dr.fromBufferAttribute(t,e),hr.fromBufferAttribute(t,i),ur.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(dr,r.x),a.addScaledVector(hr,r.y),a.addScaledVector(ur,r.z),a}static isFrontFacing(t,e,i,s){return Ke.subVectors(i,e),fn.subVectors(t,e),Ke.cross(fn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),Ke.cross(fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return $e.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return $e.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return $e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;di.subVectors(s,i),hi.subVectors(r,i),or.subVectors(t,i);const l=di.dot(or),c=hi.dot(or);if(l<=0&&c<=0)return e.copy(i);cr.subVectors(t,s);const d=di.dot(cr),p=hi.dot(cr);if(d>=0&&p<=d)return e.copy(s);const u=l*p-d*c;if(u<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(i).addScaledVector(di,a);lr.subVectors(t,r);const m=di.dot(lr),x=hi.dot(lr);if(x>=0&&m<=x)return e.copy(r);const M=m*c-l*x;if(M<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(i).addScaledVector(hi,o);const _=d*x-m*p;if(_<=0&&p-d>=0&&m-x>=0)return ho.subVectors(r,s),o=(p-d)/(p-d+(m-x)),e.copy(s).addScaledVector(ho,o);const g=1/(_+M+u);return a=M*g,o=u*g,e.copy(i).addScaledVector(di,a).addScaledVector(hi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Sc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},ps={h:0,s:0,l:0};function fr(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Vt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Qt.workingColorSpace){if(t=Tl(t,1),e=Re(e,0,1),i=Re(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=fr(a,r,t+1/3),this.g=fr(a,r,t),this.b=fr(a,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=Fe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){const i=Sc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xn(t.r),this.g=xn(t.g),this.b=xn(t.b),this}copyLinearToSRGB(t){return this.r=Si(t.r),this.g=Si(t.g),this.b=Si(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return Qt.fromWorkingColorSpace(Ae.copy(this),t),Math.round(Re(Ae.r*255,0,255))*65536+Math.round(Re(Ae.g*255,0,255))*256+Math.round(Re(Ae.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Ae.copy(this),e);const i=Ae.r,s=Ae.g,r=Ae.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=d<=.5?p/(a+o):p/(2-a-o),a){case i:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-i)/p+2;break;case r:l=(i-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=Fe){Qt.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,i=Ae.g,s=Ae.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Rn),this.setHSL(Rn.h+t,Rn.s+e,Rn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Rn),t.getHSL(ps);const i=Zs(Rn.h,ps.h,e),s=Zs(Rn.s,ps.s,e),r=Zs(Rn.l,ps.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new Vt;Vt.NAMES=Sc;let Vl=0;class Ii extends Pi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vl++}),this.uuid=ts(),this.name="",this.blending=Mi,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rr,this.blendDst=Cr,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ya,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ni,this.stencilZFail=ni,this.stencilZPass=ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Mi&&(i.blending=this.blending),this.side!==Fn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Rr&&(i.blendSrc=this.blendSrc),this.blendDst!==Cr&&(i.blendDst=this.blendDst),this.blendEquation!==Yn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==wi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ya&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ni&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ni&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ni&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ba extends Ii{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new A,ms=new Rt;class He{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ka,this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ms.fromBufferAttribute(this,e),ms.applyMatrix3(t),this.setXY(e,ms.x,ms.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Oi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ne(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Oi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Oi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Oi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Oi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array),s=Ne(s,this.array),r=Ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ka&&(t.usage=this.usage),t}}class wc extends He{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ec extends He{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class fe extends He{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Wl=0;const Ve=new ce,pr=new Me,ui=new A,Be=new Qn,Gi=new Qn,Ee=new A;class Ie extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wl++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_c(t)?Ec:wc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ht().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ve.makeRotationFromQuaternion(t),this.applyMatrix4(Ve),this}rotateX(t){return Ve.makeRotationX(t),this.applyMatrix4(Ve),this}rotateY(t){return Ve.makeRotationY(t),this.applyMatrix4(Ve),this}rotateZ(t){return Ve.makeRotationZ(t),this.applyMatrix4(Ve),this}translate(t,e,i){return Ve.makeTranslation(t,e,i),this.applyMatrix4(Ve),this}scale(t,e,i){return Ve.makeScale(t,e,i),this.applyMatrix4(Ve),this}lookAt(t){return pr.lookAt(t),pr.updateMatrix(),this.applyMatrix4(pr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new fe(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Be.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,Be.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,Be.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(Be.min),this.boundingBox.expandByPoint(Be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Di);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const i=this.boundingSphere.center;if(Be.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Gi.setFromBufferAttribute(o),this.morphTargetsRelative?(Ee.addVectors(Be.min,Gi.min),Be.expandByPoint(Ee),Ee.addVectors(Be.max,Gi.max),Be.expandByPoint(Ee)):(Be.expandByPoint(Gi.min),Be.expandByPoint(Gi.max))}Be.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Ee.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ee));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Ee.fromBufferAttribute(o,c),l&&(ui.fromBufferAttribute(t,c),Ee.add(ui)),s=Math.max(s,i.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new He(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new A,l[L]=new A;const c=new A,d=new A,p=new A,u=new Rt,m=new Rt,x=new Rt,M=new A,_=new A;function g(L,b,w){c.fromBufferAttribute(i,L),d.fromBufferAttribute(i,b),p.fromBufferAttribute(i,w),u.fromBufferAttribute(r,L),m.fromBufferAttribute(r,b),x.fromBufferAttribute(r,w),d.sub(c),p.sub(c),m.sub(u),x.sub(u);const I=1/(m.x*x.y-x.x*m.y);isFinite(I)&&(M.copy(d).multiplyScalar(x.y).addScaledVector(p,-m.y).multiplyScalar(I),_.copy(p).multiplyScalar(m.x).addScaledVector(d,-x.x).multiplyScalar(I),o[L].add(M),o[b].add(M),o[w].add(M),l[L].add(_),l[b].add(_),l[w].add(_))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let L=0,b=R.length;L<b;++L){const w=R[L],I=w.start,X=w.count;for(let G=I,J=I+X;G<J;G+=3)g(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const T=new A,S=new A,O=new A,P=new A;function D(L){O.fromBufferAttribute(s,L),P.copy(O);const b=o[L];T.copy(b),T.sub(O.multiplyScalar(O.dot(b))).normalize(),S.crossVectors(P,b);const I=S.dot(l[L])<0?-1:1;a.setXYZW(L,T.x,T.y,T.z,I)}for(let L=0,b=R.length;L<b;++L){const w=R[L],I=w.start,X=w.count;for(let G=I,J=I+X;G<J;G+=3)D(t.getX(G+0)),D(t.getX(G+1)),D(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);const s=new A,r=new A,a=new A,o=new A,l=new A,c=new A,d=new A,p=new A;if(t)for(let u=0,m=t.count;u<m;u+=3){const x=t.getX(u+0),M=t.getX(u+1),_=t.getX(u+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,_),d.subVectors(a,r),p.subVectors(s,r),d.cross(p),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,_),o.add(d),l.add(d),c.add(d),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let u=0,m=e.count;u<m;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),d.subVectors(a,r),p.subVectors(s,r),d.cross(p),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(o,l){const c=o.array,d=o.itemSize,p=o.normalized,u=new c.constructor(l.length*d);let m=0,x=0;for(let M=0,_=l.length;M<_;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*d;for(let g=0;g<d;g++)u[x++]=c[m++]}return new He(u,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ie,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,p=c.length;d<p;d++){const u=c[d],m=t(u,i);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let p=0,u=c.length;p<u;p++){const m=c[p];d.push(m.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(e))}const r=t.morphAttributes;for(const c in r){const d=[],p=r[c];for(let u=0,m=p.length;u<m;u++)d.push(p[u].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,d=a.length;c<d;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uo=new ce,kn=new Mc,gs=new Di,fo=new A,_s=new A,xs=new A,vs=new A,mr=new A,Ms=new A,po=new A,ys=new A;class oe extends Me{constructor(t=new Ie,e=new ba){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Ms.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],p=r[l];d!==0&&(mr.fromBufferAttribute(p,t),a?Ms.addScaledVector(mr,d):Ms.addScaledVector(mr.sub(e),d))}e.add(Ms)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),gs.copy(i.boundingSphere),gs.applyMatrix4(r),kn.copy(t.ray).recast(t.near),!(gs.containsPoint(kn.origin)===!1&&(kn.intersectSphere(gs,fo)===null||kn.origin.distanceToSquared(fo)>(t.far-t.near)**2))&&(uo.copy(r).invert(),kn.copy(t.ray).applyMatrix4(uo),!(i.boundingBox!==null&&kn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,kn)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,p=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,M=u.length;x<M;x++){const _=u[x],g=a[_.materialIndex],R=Math.max(_.start,m.start),T=Math.min(o.count,Math.min(_.start+_.count,m.start+m.count));for(let S=R,O=T;S<O;S+=3){const P=o.getX(S),D=o.getX(S+1),L=o.getX(S+2);s=Ss(this,g,t,i,c,d,p,P,D,L),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{const x=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let _=x,g=M;_<g;_+=3){const R=o.getX(_),T=o.getX(_+1),S=o.getX(_+2);s=Ss(this,a,t,i,c,d,p,R,T,S),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,M=u.length;x<M;x++){const _=u[x],g=a[_.materialIndex],R=Math.max(_.start,m.start),T=Math.min(l.count,Math.min(_.start+_.count,m.start+m.count));for(let S=R,O=T;S<O;S+=3){const P=S,D=S+1,L=S+2;s=Ss(this,g,t,i,c,d,p,P,D,L),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{const x=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let _=x,g=M;_<g;_+=3){const R=_,T=_+1,S=_+2;s=Ss(this,a,t,i,c,d,p,R,T,S),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}}function Xl(n,t,e,i,s,r,a,o){let l;if(t.side===De?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Fn,o),l===null)return null;ys.copy(o),ys.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ys);return c<e.near||c>e.far?null:{distance:c,point:ys.clone(),object:n}}function Ss(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,_s),n.getVertexPosition(l,xs),n.getVertexPosition(c,vs);const d=Xl(n,t,e,i,_s,xs,vs,po);if(d){const p=new A;$e.getBarycoord(po,_s,xs,vs,p),s&&(d.uv=$e.getInterpolatedAttribute(s,o,l,c,p,new Rt)),r&&(d.uv1=$e.getInterpolatedAttribute(r,o,l,c,p,new Rt)),a&&(d.normal=$e.getInterpolatedAttribute(a,o,l,c,p,new A),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new A,materialIndex:0};$e.getNormal(_s,xs,vs,u.normal),d.face=u,d.barycoord=p}return d}class v extends Ie{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],p=[];let u=0,m=0;x("z","y","x",-1,-1,i,e,t,a,r,0),x("z","y","x",1,-1,i,e,-t,a,r,1),x("x","z","y",1,1,t,i,e,s,a,2),x("x","z","y",1,-1,t,i,-e,s,a,3),x("x","y","z",1,-1,t,e,i,s,r,4),x("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(d,3)),this.setAttribute("uv",new fe(p,2));function x(M,_,g,R,T,S,O,P,D,L,b){const w=S/D,I=O/L,X=S/2,G=O/2,J=P/2,nt=D+1,Z=L+1;let rt=0,K=0;const dt=new A;for(let gt=0;gt<Z;gt++){const Tt=gt*I-G;for(let Wt=0;Wt<nt;Wt++){const ie=Wt*w-X;dt[M]=ie*R,dt[_]=Tt*T,dt[g]=J,c.push(dt.x,dt.y,dt.z),dt[M]=0,dt[_]=0,dt[g]=P>0?1:-1,d.push(dt.x,dt.y,dt.z),p.push(Wt/D),p.push(1-gt/L),rt+=1}}for(let gt=0;gt<L;gt++)for(let Tt=0;Tt<D;Tt++){const Wt=u+Tt+nt*gt,ie=u+Tt+nt*(gt+1),j=u+(Tt+1)+nt*(gt+1),at=u+(Tt+1)+nt*gt;l.push(Wt,ie,at),l.push(ie,j,at),K+=6}o.addGroup(m,K,b),m+=K,u+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new v(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ri(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Pe(n){const t={};for(let e=0;e<n.length;e++){const i=Ri(n[e]);for(const s in i)t[s]=i[s]}return t}function ql(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function bc(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const Yl={clone:Ri,merge:Pe};var Kl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mn extends Ii{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kl,this.fragmentShader=Jl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ri(t.uniforms),this.uniformsGroups=ql(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Tc extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=_n}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Cn=new A,mo=new Rt,go=new Rt;class Ze extends Tc{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fa*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Cn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Cn.x,Cn.y).multiplyScalar(-t/Cn.z),Cn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Cn.x,Cn.y).multiplyScalar(-t/Cn.z)}getViewSize(t,e){return this.getViewBounds(t,mo,go),e.subVectors(go,mo)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Js*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const fi=-90,pi=1;class Zl extends Me{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ze(fi,pi,t,e);s.layers=this.layers,this.add(s);const r=new Ze(fi,pi,t,e);r.layers=this.layers,this.add(r);const a=new Ze(fi,pi,t,e);a.layers=this.layers,this.add(a);const o=new Ze(fi,pi,t,e);o.layers=this.layers,this.add(o);const l=new Ze(fi,pi,t,e);l.layers=this.layers,this.add(l);const c=new Ze(fi,pi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===_n)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ks)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),t.render(e,d),t.setRenderTarget(p,u,m),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Ac extends Ce{constructor(t,e,i,s,r,a,o,l,c,d){t=t!==void 0?t:[],e=e!==void 0?e:Ei,super(t,e,i,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class $l extends jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ac(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new v(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:Ri(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:De,blending:Un});r.uniforms.tEquirect.value=e;const a=new oe(s,r),o=e.minFilter;return e.minFilter===Zn&&(e.minFilter=sn),new Zl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}const gr=new A,jl=new A,Ql=new Ht;class Wn{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=gr.subVectors(i,e).cross(jl.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(gr),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Ql.getNormalMatrix(t),s=this.coplanarPoint(gr).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hn=new Di,ws=new A;class Ta{constructor(t=new Wn,e=new Wn,i=new Wn,s=new Wn,r=new Wn,a=new Wn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=_n){const i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],d=s[5],p=s[6],u=s[7],m=s[8],x=s[9],M=s[10],_=s[11],g=s[12],R=s[13],T=s[14],S=s[15];if(i[0].setComponents(l-r,u-c,_-m,S-g).normalize(),i[1].setComponents(l+r,u+c,_+m,S+g).normalize(),i[2].setComponents(l+a,u+d,_+x,S+R).normalize(),i[3].setComponents(l-a,u-d,_-x,S-R).normalize(),i[4].setComponents(l-o,u-p,_-M,S-T).normalize(),e===_n)i[5].setComponents(l+o,u+p,_+M,S+T).normalize();else if(e===ks)i[5].setComponents(o,p,M,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(t){return Hn.center.set(0,0,0),Hn.radius=.7071067811865476,Hn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(ws.x=s.normal.x>0?t.max.x:t.min.x,ws.y=s.normal.y>0?t.max.y:t.min.y,ws.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ws)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Rc(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function td(n){const t=new WeakMap;function e(o,l){const c=o.array,d=o.usage,p=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const d=l.array,p=l.updateRanges;if(n.bindBuffer(c,o),p.length===0)n.bufferSubData(c,0,d);else{p.sort((m,x)=>m.start-x.start);let u=0;for(let m=1;m<p.length;m++){const x=p[u],M=p[m];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++u,p[u]=M)}p.length=u+1;for(let m=0,x=p.length;m<x;m++){const M=p[m];n.bufferSubData(c,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Li extends Ie{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,d=l+1,p=t/o,u=e/l,m=[],x=[],M=[],_=[];for(let g=0;g<d;g++){const R=g*u-a;for(let T=0;T<c;T++){const S=T*p-r;x.push(S,-R,0),M.push(0,0,1),_.push(T/o),_.push(1-g/l)}}for(let g=0;g<l;g++)for(let R=0;R<o;R++){const T=R+c*g,S=R+c*(g+1),O=R+1+c*(g+1),P=R+1+c*g;m.push(T,S,P),m.push(S,O,P)}this.setIndex(m),this.setAttribute("position",new fe(x,3)),this.setAttribute("normal",new fe(M,3)),this.setAttribute("uv",new fe(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Li(t.width,t.height,t.widthSegments,t.heightSegments)}}var ed=`#ifdef USE_ALPHAHASH
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
#endif`,rd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ad=`#ifdef USE_ALPHATEST
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
#endif`,yd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ed=`#define PI 3.141592653589793
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
} // validated`,bd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zd=`#ifdef USE_ENVMAP
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
#endif`,rh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ah=`#ifdef USE_LOGDEPTHBUF
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
#endif`,yh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wh=`#ifdef USE_NORMALMAP
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
#endif`,Eh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bh=`#ifdef USE_CLEARCOAT_NORMALMAP
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
#endif`,Fh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
}`,ru=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,au=`#include <common>
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
}`,yu=`#define NORMAL
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
}`,Su=`#define PHONG
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
}`,wu=`#define PHONG
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
}`,Eu=`#define STANDARD
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
}`,bu=`#define STANDARD
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
}`,Gt={alphahash_fragment:ed,alphahash_pars_fragment:nd,alphamap_fragment:id,alphamap_pars_fragment:sd,alphatest_fragment:rd,alphatest_pars_fragment:ad,aomap_fragment:od,aomap_pars_fragment:cd,batching_pars_vertex:ld,batching_vertex:dd,begin_vertex:hd,beginnormal_vertex:ud,bsdfs:fd,iridescence_fragment:pd,bumpmap_pars_fragment:md,clipping_planes_fragment:gd,clipping_planes_pars_fragment:_d,clipping_planes_pars_vertex:xd,clipping_planes_vertex:vd,color_fragment:Md,color_pars_fragment:yd,color_pars_vertex:Sd,color_vertex:wd,common:Ed,cube_uv_reflection_fragment:bd,defaultnormal_vertex:Td,displacementmap_pars_vertex:Ad,displacementmap_vertex:Rd,emissivemap_fragment:Cd,emissivemap_pars_fragment:Pd,colorspace_fragment:Dd,colorspace_pars_fragment:Id,envmap_fragment:Ld,envmap_common_pars_fragment:Ud,envmap_pars_fragment:Nd,envmap_pars_vertex:Fd,envmap_physical_pars_fragment:Yd,envmap_vertex:zd,fog_vertex:Od,fog_pars_vertex:Bd,fog_fragment:kd,fog_pars_fragment:Hd,gradientmap_pars_fragment:Gd,lightmap_pars_fragment:Vd,lights_lambert_fragment:Wd,lights_lambert_pars_fragment:Xd,lights_pars_begin:qd,lights_toon_fragment:Kd,lights_toon_pars_fragment:Jd,lights_phong_fragment:Zd,lights_phong_pars_fragment:$d,lights_physical_fragment:jd,lights_physical_pars_fragment:Qd,lights_fragment_begin:th,lights_fragment_maps:eh,lights_fragment_end:nh,logdepthbuf_fragment:ih,logdepthbuf_pars_fragment:sh,logdepthbuf_pars_vertex:rh,logdepthbuf_vertex:ah,map_fragment:oh,map_pars_fragment:ch,map_particle_fragment:lh,map_particle_pars_fragment:dh,metalnessmap_fragment:hh,metalnessmap_pars_fragment:uh,morphinstance_vertex:fh,morphcolor_vertex:ph,morphnormal_vertex:mh,morphtarget_pars_vertex:gh,morphtarget_vertex:_h,normal_fragment_begin:xh,normal_fragment_maps:vh,normal_pars_fragment:Mh,normal_pars_vertex:yh,normal_vertex:Sh,normalmap_pars_fragment:wh,clearcoat_normal_fragment_begin:Eh,clearcoat_normal_fragment_maps:bh,clearcoat_pars_fragment:Th,iridescence_pars_fragment:Ah,opaque_fragment:Rh,packing:Ch,premultiplied_alpha_fragment:Ph,project_vertex:Dh,dithering_fragment:Ih,dithering_pars_fragment:Lh,roughnessmap_fragment:Uh,roughnessmap_pars_fragment:Nh,shadowmap_pars_fragment:Fh,shadowmap_pars_vertex:zh,shadowmap_vertex:Oh,shadowmask_pars_fragment:Bh,skinbase_vertex:kh,skinning_pars_vertex:Hh,skinning_vertex:Gh,skinnormal_vertex:Vh,specularmap_fragment:Wh,specularmap_pars_fragment:Xh,tonemapping_fragment:qh,tonemapping_pars_fragment:Yh,transmission_fragment:Kh,transmission_pars_fragment:Jh,uv_pars_fragment:Zh,uv_pars_vertex:$h,uv_vertex:jh,worldpos_vertex:Qh,background_vert:tu,background_frag:eu,backgroundCube_vert:nu,backgroundCube_frag:iu,cube_vert:su,cube_frag:ru,depth_vert:au,depth_frag:ou,distanceRGBA_vert:cu,distanceRGBA_frag:lu,equirect_vert:du,equirect_frag:hu,linedashed_vert:uu,linedashed_frag:fu,meshbasic_vert:pu,meshbasic_frag:mu,meshlambert_vert:gu,meshlambert_frag:_u,meshmatcap_vert:xu,meshmatcap_frag:vu,meshnormal_vert:Mu,meshnormal_frag:yu,meshphong_vert:Su,meshphong_frag:wu,meshphysical_vert:Eu,meshphysical_frag:bu,meshtoon_vert:Tu,meshtoon_frag:Au,points_vert:Ru,points_frag:Cu,shadow_vert:Pu,shadow_frag:Du,sprite_vert:Iu,sprite_frag:Lu},ct={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},en={basic:{uniforms:Pe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Pe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Pe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Pe([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Pe([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Pe([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Pe([ct.points,ct.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Pe([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Pe([ct.common,ct.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Pe([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Pe([ct.sprite,ct.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Pe([ct.common,ct.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Pe([ct.lights,ct.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};en.physical={uniforms:Pe([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const Es={r:0,b:0,g:0},Gn=new on,Uu=new ce;function Nu(n,t,e,i,s,r,a){const o=new Vt(0);let l=r===!0?0:1,c,d,p=null,u=0,m=null;function x(R){let T=R.isScene===!0?R.background:null;return T&&T.isTexture&&(T=(R.backgroundBlurriness>0?e:t).get(T)),T}function M(R){let T=!1;const S=x(R);S===null?g(o,l):S&&S.isColor&&(g(S,1),T=!0);const O=n.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,a):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(R,T){const S=x(T);S&&(S.isCubeTexture||S.mapping===Ws)?(d===void 0&&(d=new oe(new v(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Ri(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(O,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Gn.copy(T.backgroundRotation),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),d.material.uniforms.envMap.value=S,d.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Uu.makeRotationFromEuler(Gn)),d.material.toneMapped=Qt.getTransfer(S.colorSpace)!==re,(p!==S||u!==S.version||m!==n.toneMapping)&&(d.material.needsUpdate=!0,p=S,u=S.version,m=n.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new oe(new Li(2,2),new Mn({name:"BackgroundMaterial",uniforms:Ri(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(S.colorSpace)!==re,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(p!==S||u!==S.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,p=S,u=S.version,m=n.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null))}function g(R,T){R.getRGB(Es,bc(n)),i.buffers.color.setClear(Es.r,Es.g,Es.b,T,a)}return{getClearColor:function(){return o},setClearColor:function(R,T=1){o.set(R),l=T,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(R){l=R,g(o,l)},render:M,addToRenderList:_}}function Fu(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,a=!1;function o(w,I,X,G,J){let nt=!1;const Z=p(G,X,I);r!==Z&&(r=Z,c(r.object)),nt=m(w,G,X,J),nt&&x(w,G,X,J),J!==null&&t.update(J,n.ELEMENT_ARRAY_BUFFER),(nt||a)&&(a=!1,S(w,I,X,G),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function l(){return n.createVertexArray()}function c(w){return n.bindVertexArray(w)}function d(w){return n.deleteVertexArray(w)}function p(w,I,X){const G=X.wireframe===!0;let J=i[w.id];J===void 0&&(J={},i[w.id]=J);let nt=J[I.id];nt===void 0&&(nt={},J[I.id]=nt);let Z=nt[G];return Z===void 0&&(Z=u(l()),nt[G]=Z),Z}function u(w){const I=[],X=[],G=[];for(let J=0;J<e;J++)I[J]=0,X[J]=0,G[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:X,attributeDivisors:G,object:w,attributes:{},index:null}}function m(w,I,X,G){const J=r.attributes,nt=I.attributes;let Z=0;const rt=X.getAttributes();for(const K in rt)if(rt[K].location>=0){const gt=J[K];let Tt=nt[K];if(Tt===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(Tt=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(Tt=w.instanceColor)),gt===void 0||gt.attribute!==Tt||Tt&&gt.data!==Tt.data)return!0;Z++}return r.attributesNum!==Z||r.index!==G}function x(w,I,X,G){const J={},nt=I.attributes;let Z=0;const rt=X.getAttributes();for(const K in rt)if(rt[K].location>=0){let gt=nt[K];gt===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(gt=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(gt=w.instanceColor));const Tt={};Tt.attribute=gt,gt&&gt.data&&(Tt.data=gt.data),J[K]=Tt,Z++}r.attributes=J,r.attributesNum=Z,r.index=G}function M(){const w=r.newAttributes;for(let I=0,X=w.length;I<X;I++)w[I]=0}function _(w){g(w,0)}function g(w,I){const X=r.newAttributes,G=r.enabledAttributes,J=r.attributeDivisors;X[w]=1,G[w]===0&&(n.enableVertexAttribArray(w),G[w]=1),J[w]!==I&&(n.vertexAttribDivisor(w,I),J[w]=I)}function R(){const w=r.newAttributes,I=r.enabledAttributes;for(let X=0,G=I.length;X<G;X++)I[X]!==w[X]&&(n.disableVertexAttribArray(X),I[X]=0)}function T(w,I,X,G,J,nt,Z){Z===!0?n.vertexAttribIPointer(w,I,X,J,nt):n.vertexAttribPointer(w,I,X,G,J,nt)}function S(w,I,X,G){M();const J=G.attributes,nt=X.getAttributes(),Z=I.defaultAttributeValues;for(const rt in nt){const K=nt[rt];if(K.location>=0){let dt=J[rt];if(dt===void 0&&(rt==="instanceMatrix"&&w.instanceMatrix&&(dt=w.instanceMatrix),rt==="instanceColor"&&w.instanceColor&&(dt=w.instanceColor)),dt!==void 0){const gt=dt.normalized,Tt=dt.itemSize,Wt=t.get(dt);if(Wt===void 0)continue;const ie=Wt.buffer,j=Wt.type,at=Wt.bytesPerElement,Mt=j===n.INT||j===n.UNSIGNED_INT||dt.gpuType===xa;if(dt.isInterleavedBufferAttribute){const ht=dt.data,Lt=ht.stride,Nt=dt.offset;if(ht.isInstancedInterleavedBuffer){for(let Xt=0;Xt<K.locationSize;Xt++)g(K.location+Xt,ht.meshPerAttribute);w.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Xt=0;Xt<K.locationSize;Xt++)_(K.location+Xt);n.bindBuffer(n.ARRAY_BUFFER,ie);for(let Xt=0;Xt<K.locationSize;Xt++)T(K.location+Xt,Tt/K.locationSize,j,gt,Lt*at,(Nt+Tt/K.locationSize*Xt)*at,Mt)}else{if(dt.isInstancedBufferAttribute){for(let ht=0;ht<K.locationSize;ht++)g(K.location+ht,dt.meshPerAttribute);w.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let ht=0;ht<K.locationSize;ht++)_(K.location+ht);n.bindBuffer(n.ARRAY_BUFFER,ie);for(let ht=0;ht<K.locationSize;ht++)T(K.location+ht,Tt/K.locationSize,j,gt,Tt*at,Tt/K.locationSize*ht*at,Mt)}}else if(Z!==void 0){const gt=Z[rt];if(gt!==void 0)switch(gt.length){case 2:n.vertexAttrib2fv(K.location,gt);break;case 3:n.vertexAttrib3fv(K.location,gt);break;case 4:n.vertexAttrib4fv(K.location,gt);break;default:n.vertexAttrib1fv(K.location,gt)}}}}R()}function O(){L();for(const w in i){const I=i[w];for(const X in I){const G=I[X];for(const J in G)d(G[J].object),delete G[J];delete I[X]}delete i[w]}}function P(w){if(i[w.id]===void 0)return;const I=i[w.id];for(const X in I){const G=I[X];for(const J in G)d(G[J].object),delete G[J];delete I[X]}delete i[w.id]}function D(w){for(const I in i){const X=i[I];if(X[w.id]===void 0)continue;const G=X[w.id];for(const J in G)d(G[J].object),delete G[J];delete X[w.id]}}function L(){b(),a=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:b,dispose:O,releaseStatesOfGeometry:P,releaseStatesOfProgram:D,initAttributes:M,enableAttribute:_,disableUnusedAttributes:R}}function zu(n,t,e){let i;function s(c){i=c}function r(c,d){n.drawArrays(i,c,d),e.update(d,i,1)}function a(c,d,p){p!==0&&(n.drawArraysInstanced(i,c,d,p),e.update(d,i,p))}function o(c,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,p);let m=0;for(let x=0;x<p;x++)m+=d[x];e.update(m,i,1)}function l(c,d,p,u){if(p===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<c.length;x++)a(c[x],d[x],u[x]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,d,0,u,0,p);let x=0;for(let M=0;M<p;M++)x+=d[M]*u[M];e.update(x,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ou(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(D){return!(D!==je&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const L=D===Qi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==vn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==rn&&!L)}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const p=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=x>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reverseDepthBuffer:u,maxTextures:m,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:R,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:O,maxSamples:P}}function Bu(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new Wn,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const m=p.length!==0||u||i!==0||s;return s=u,i=p.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){e=d(p,u,0)},this.setState=function(p,u,m){const x=p.clippingPlanes,M=p.clipIntersection,_=p.clipShadows,g=n.get(p);if(!s||x===null||x.length===0||r&&!_)r?d(null):c();else{const R=r?0:i,T=R*4;let S=g.clippingState||null;l.value=S,S=d(x,u,T,m);for(let O=0;O!==T;++O)S[O]=e[O];g.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(p,u,m,x){const M=p!==null?p.length:0;let _=null;if(M!==0){if(_=l.value,x!==!0||_===null){const g=m+M*4,R=u.matrixWorldInverse;o.getNormalMatrix(R),(_===null||_.length<g)&&(_=new Float32Array(g));for(let T=0,S=m;T!==M;++T,S+=4)a.copy(p[T]).applyMatrix4(R,o),a.normal.toArray(_,S),_[S+3]=a.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,_}}function ku(n){let t=new WeakMap;function e(a,o){return o===zr?a.mapping=Ei:o===Or&&(a.mapping=bi),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===zr||o===Or)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new $l(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Cc extends Tc{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const vi=4,_o=[.125,.215,.35,.446,.526,.582],Kn=20,_r=new Cc,xo=new Vt;let xr=null,vr=0,Mr=0,yr=!1;const Xn=(1+Math.sqrt(5))/2,mi=1/Xn,vo=[new A(-Xn,mi,0),new A(Xn,mi,0),new A(-mi,0,Xn),new A(mi,0,Xn),new A(0,Xn,-mi),new A(0,Xn,mi),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class Mo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){xr=this._renderer.getRenderTarget(),vr=this._renderer.getActiveCubeFace(),Mr=this._renderer.getActiveMipmapLevel(),yr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=So(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xr,vr,Mr),this._renderer.xr.enabled=yr,t.scissorTest=!1,bs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ei||t.mapping===bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xr=this._renderer.getRenderTarget(),vr=this._renderer.getActiveCubeFace(),Mr=this._renderer.getActiveMipmapLevel(),yr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Qi,format:je,colorSpace:Ci,depthBuffer:!1},s=yo(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yo(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hu(r)),this._blurMaterial=Gu(r,t,e)}return s}_compileMaterial(t){const e=new oe(this._lodPlanes[0],t);this._renderer.compile(e,_r)}_sceneToCubeUV(t,e,i,s){const o=new Ze(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,u=d.toneMapping;d.getClearColor(xo),d.toneMapping=Nn,d.autoClear=!1;const m=new ba({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),x=new oe(new v,m);let M=!1;const _=t.background;_?_.isColor&&(m.color.copy(_),t.background=null,M=!0):(m.color.copy(xo),M=!0);for(let g=0;g<6;g++){const R=g%3;R===0?(o.up.set(0,l[g],0),o.lookAt(c[g],0,0)):R===1?(o.up.set(0,0,l[g]),o.lookAt(0,c[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,c[g]));const T=this._cubeSize;bs(s,R*T,g>2?T:0,T,T),d.setRenderTarget(s),M&&d.render(x,o),d.render(t,o)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=u,d.autoClear=p,t.background=_}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Ei||t.mapping===bi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=So());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new oe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;bs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,_r)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=vo[(s-r-1)%vo.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new oe(this._lodPlanes[s],c),u=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Kn-1),M=r/x,_=isFinite(r)?1+Math.floor(d*M):Kn;_>Kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Kn}`);const g=[];let R=0;for(let D=0;D<Kn;++D){const L=D/M,b=Math.exp(-L*L/2);g.push(b),D===0?R+=b:D<_&&(R+=2*b)}for(let D=0;D<g.length;D++)g[D]=g[D]/R;u.envMap.value=t.texture,u.samples.value=_,u.weights.value=g,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:T}=this;u.dTheta.value=x,u.mipInt.value=T-i;const S=this._sizeLods[s],O=3*S*(s>T-vi?s-T+vi:0),P=4*(this._cubeSize-S);bs(e,O,P,3*S,2*S),l.setRenderTarget(e),l.render(p,_r)}}function Hu(n){const t=[],e=[],i=[];let s=n;const r=n-vi+1+_o.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-vi?l=_o[a-n+vi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,p=1+c,u=[d,d,p,d,p,p,d,d,p,p,d,p],m=6,x=6,M=3,_=2,g=1,R=new Float32Array(M*x*m),T=new Float32Array(_*x*m),S=new Float32Array(g*x*m);for(let P=0;P<m;P++){const D=P%3*2/3-1,L=P>2?0:-1,b=[D,L,0,D+2/3,L,0,D+2/3,L+1,0,D,L,0,D+2/3,L+1,0,D,L+1,0];R.set(b,M*x*P),T.set(u,_*x*P);const w=[P,P,P,P,P,P];S.set(w,g*x*P)}const O=new Ie;O.setAttribute("position",new He(R,M)),O.setAttribute("uv",new He(T,_)),O.setAttribute("faceIndex",new He(S,g)),t.push(O),s>vi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function yo(n,t,e){const i=new jn(n,t,e);return i.texture.mapping=Ws,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function bs(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Gu(n,t,e){const i=new Float32Array(Kn),s=new A(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function So(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function wo(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Aa(){return`

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
	`}function Vu(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===zr||l===Or,d=l===Ei||l===bi;if(c||d){let p=t.get(o);const u=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new Mo(n)),p=c?e.fromEquirectangular(o,p):e.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,t.set(o,p),p.texture;if(p!==void 0)return p.texture;{const m=o.image;return c&&m&&m.height>0||d&&m&&s(m)?(e===null&&(e=new Mo(n)),p=c?e.fromEquirectangular(o):e.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,t.set(o,p),o.addEventListener("dispose",r),p.texture):null}}}return o}function s(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Wu(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Yi("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Xu(n,t,e,i){const s={},r=new WeakMap;function a(p){const u=p.target;u.index!==null&&t.remove(u.index);for(const x in u.attributes)t.remove(u.attributes[x]);for(const x in u.morphAttributes){const M=u.morphAttributes[x];for(let _=0,g=M.length;_<g;_++)t.remove(M[_])}u.removeEventListener("dispose",a),delete s[u.id];const m=r.get(u);m&&(t.remove(m),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(p,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(p){const u=p.attributes;for(const x in u)t.update(u[x],n.ARRAY_BUFFER);const m=p.morphAttributes;for(const x in m){const M=m[x];for(let _=0,g=M.length;_<g;_++)t.update(M[_],n.ARRAY_BUFFER)}}function c(p){const u=[],m=p.index,x=p.attributes.position;let M=0;if(m!==null){const R=m.array;M=m.version;for(let T=0,S=R.length;T<S;T+=3){const O=R[T+0],P=R[T+1],D=R[T+2];u.push(O,P,P,D,D,O)}}else if(x!==void 0){const R=x.array;M=x.version;for(let T=0,S=R.length/3-1;T<S;T+=3){const O=T+0,P=T+1,D=T+2;u.push(O,P,P,D,D,O)}}else return;const _=new(_c(u)?Ec:wc)(u,1);_.version=M;const g=r.get(p);g&&t.remove(g),r.set(p,_)}function d(p){const u=r.get(p);if(u){const m=p.index;m!==null&&u.version<m.version&&c(p)}else c(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function qu(n,t,e){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,m){n.drawElements(i,m,r,u*a),e.update(m,i,1)}function c(u,m,x){x!==0&&(n.drawElementsInstanced(i,m,r,u*a,x),e.update(m,i,x))}function d(u,m,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,u,0,x);let _=0;for(let g=0;g<x;g++)_+=m[g];e.update(_,i,1)}function p(u,m,x,M){if(x===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<u.length;g++)c(u[g]/a,m[g],M[g]);else{_.multiDrawElementsInstancedWEBGL(i,m,0,r,u,0,M,0,x);let g=0;for(let R=0;R<x;R++)g+=m[R]*M[R];e.update(g,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function Yu(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Ku(n,t,e){const i=new WeakMap,s=new ge;function r(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0;let u=i.get(o);if(u===void 0||u.count!==p){let b=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",b)};u!==void 0&&u.texture.dispose();const m=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let T=0;m===!0&&(T=1),x===!0&&(T=2),M===!0&&(T=3);let S=o.attributes.position.count*T,O=1;S>t.maxTextureSize&&(O=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const P=new Float32Array(S*O*4*p),D=new vc(P,S,O,p);D.type=rn,D.needsUpdate=!0;const L=T*4;for(let w=0;w<p;w++){const I=_[w],X=g[w],G=R[w],J=S*O*4*w;for(let nt=0;nt<I.count;nt++){const Z=nt*L;m===!0&&(s.fromBufferAttribute(I,nt),P[J+Z+0]=s.x,P[J+Z+1]=s.y,P[J+Z+2]=s.z,P[J+Z+3]=0),x===!0&&(s.fromBufferAttribute(X,nt),P[J+Z+4]=s.x,P[J+Z+5]=s.y,P[J+Z+6]=s.z,P[J+Z+7]=0),M===!0&&(s.fromBufferAttribute(G,nt),P[J+Z+8]=s.x,P[J+Z+9]=s.y,P[J+Z+10]=s.z,P[J+Z+11]=G.itemSize===4?s.w:1)}}u={count:p,texture:D,size:new Rt(S,O)},i.set(o,u),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let m=0;for(let M=0;M<c.length;M++)m+=c[M];const x=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Ju(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,d=l.geometry,p=t.get(l,d);if(s.get(p)!==c&&(t.update(p),s.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return p}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Pc extends Ce{constructor(t,e,i,s,r,a,o,l,c,d=yi){if(d!==yi&&d!==Ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===yi&&(i=$n),i===void 0&&d===Ai&&(i=Ti),super(null,s,r,a,o,l,d,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ke,this.minFilter=l!==void 0?l:ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Dc=new Ce,Eo=new Pc(1,1),Ic=new vc,Lc=new Nl,Uc=new Ac,bo=[],To=[],Ao=new Float32Array(16),Ro=new Float32Array(9),Co=new Float32Array(4);function Ui(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=bo[s];if(r===void 0&&(r=new Float32Array(s),bo[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function ye(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Se(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function qs(n,t){let e=To[t];e===void 0&&(e=new Int32Array(t),To[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Zu(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function $u(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;n.uniform2fv(this.addr,t),Se(e,t)}}function ju(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;n.uniform3fv(this.addr,t),Se(e,t)}}function Qu(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;n.uniform4fv(this.addr,t),Se(e,t)}}function tf(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ye(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(ye(e,i))return;Co.set(i),n.uniformMatrix2fv(this.addr,!1,Co),Se(e,i)}}function ef(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ye(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(ye(e,i))return;Ro.set(i),n.uniformMatrix3fv(this.addr,!1,Ro),Se(e,i)}}function nf(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ye(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(ye(e,i))return;Ao.set(i),n.uniformMatrix4fv(this.addr,!1,Ao),Se(e,i)}}function sf(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function rf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;n.uniform2iv(this.addr,t),Se(e,t)}}function af(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;n.uniform3iv(this.addr,t),Se(e,t)}}function of(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;n.uniform4iv(this.addr,t),Se(e,t)}}function cf(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function lf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;n.uniform2uiv(this.addr,t),Se(e,t)}}function df(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;n.uniform3uiv(this.addr,t),Se(e,t)}}function hf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;n.uniform4uiv(this.addr,t),Se(e,t)}}function uf(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Eo.compareFunction=gc,r=Eo):r=Dc,e.setTexture2D(t||r,s)}function ff(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Lc,s)}function pf(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Uc,s)}function mf(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Ic,s)}function gf(n){switch(n){case 5126:return Zu;case 35664:return $u;case 35665:return ju;case 35666:return Qu;case 35674:return tf;case 35675:return ef;case 35676:return nf;case 5124:case 35670:return sf;case 35667:case 35671:return rf;case 35668:case 35672:return af;case 35669:case 35673:return of;case 5125:return cf;case 36294:return lf;case 36295:return df;case 36296:return hf;case 35678:case 36198:case 36298:case 36306:case 35682:return uf;case 35679:case 36299:case 36307:return ff;case 35680:case 36300:case 36308:case 36293:return pf;case 36289:case 36303:case 36311:case 36292:return mf}}function _f(n,t){n.uniform1fv(this.addr,t)}function xf(n,t){const e=Ui(t,this.size,2);n.uniform2fv(this.addr,e)}function vf(n,t){const e=Ui(t,this.size,3);n.uniform3fv(this.addr,e)}function Mf(n,t){const e=Ui(t,this.size,4);n.uniform4fv(this.addr,e)}function yf(n,t){const e=Ui(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Sf(n,t){const e=Ui(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function wf(n,t){const e=Ui(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Ef(n,t){n.uniform1iv(this.addr,t)}function bf(n,t){n.uniform2iv(this.addr,t)}function Tf(n,t){n.uniform3iv(this.addr,t)}function Af(n,t){n.uniform4iv(this.addr,t)}function Rf(n,t){n.uniform1uiv(this.addr,t)}function Cf(n,t){n.uniform2uiv(this.addr,t)}function Pf(n,t){n.uniform3uiv(this.addr,t)}function Df(n,t){n.uniform4uiv(this.addr,t)}function If(n,t,e){const i=this.cache,s=t.length,r=qs(e,s);ye(i,r)||(n.uniform1iv(this.addr,r),Se(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Dc,r[a])}function Lf(n,t,e){const i=this.cache,s=t.length,r=qs(e,s);ye(i,r)||(n.uniform1iv(this.addr,r),Se(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Lc,r[a])}function Uf(n,t,e){const i=this.cache,s=t.length,r=qs(e,s);ye(i,r)||(n.uniform1iv(this.addr,r),Se(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Uc,r[a])}function Nf(n,t,e){const i=this.cache,s=t.length,r=qs(e,s);ye(i,r)||(n.uniform1iv(this.addr,r),Se(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ic,r[a])}function Ff(n){switch(n){case 5126:return _f;case 35664:return xf;case 35665:return vf;case 35666:return Mf;case 35674:return yf;case 35675:return Sf;case 35676:return wf;case 5124:case 35670:return Ef;case 35667:case 35671:return bf;case 35668:case 35672:return Tf;case 35669:case 35673:return Af;case 5125:return Rf;case 36294:return Cf;case 36295:return Pf;case 36296:return Df;case 35678:case 36198:case 36298:case 36306:case 35682:return If;case 35679:case 36299:case 36307:return Lf;case 35680:case 36300:case 36308:case 36293:return Uf;case 36289:case 36303:case 36311:case 36292:return Nf}}class zf{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=gf(e.type)}}class Of{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ff(e.type)}}class Bf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const Sr=/(\w+)(\])?(\[|\.)?/g;function Po(n,t){n.seq.push(t),n.map[t.id]=t}function kf(n,t,e){const i=n.name,s=i.length;for(Sr.lastIndex=0;;){const r=Sr.exec(i),a=Sr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Po(e,c===void 0?new zf(o,n,t):new Of(o,n,t));break}else{let p=e.map[o];p===void 0&&(p=new Bf(o),Po(e,p)),e=p}}}class Os{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);kf(r,a,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function Do(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Hf=37297;let Gf=0;function Vf(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Io=new Ht;function Wf(n){Qt._getMatrix(Io,Qt.workingColorSpace,n);const t=`mat3( ${Io.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(n)){case Xs:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Lo(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Vf(n.getShaderSource(t),a)}else return s}function Xf(n,t){const e=Wf(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function qf(n,t){let e;switch(t){case ll:e="Linear";break;case dl:e="Reinhard";break;case hl:e="Cineon";break;case sc:e="ACESFilmic";break;case fl:e="AgX";break;case pl:e="Neutral";break;case ul:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ts=new A;function Yf(){Qt.getLuminanceCoefficients(Ts);const n=Ts.x.toFixed(4),t=Ts.y.toFixed(4),e=Ts.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kf(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ki).join(`
`)}function Jf(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Zf(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Ki(n){return n!==""}function Uo(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function No(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const $f=/^[ \t]*#include +<([\w\d./]+)>/gm;function pa(n){return n.replace($f,Qf)}const jf=new Map;function Qf(n,t){let e=Gt[t];if(e===void 0){const i=jf.get(t);if(i!==void 0)e=Gt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return pa(e)}const tp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fo(n){return n.replace(tp,ep)}function ep(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zo(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function np(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ec?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===nc?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===mn&&(t="SHADOWMAP_TYPE_VSM"),t}function ip(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ei:case bi:t="ENVMAP_TYPE_CUBE";break;case Ws:t="ENVMAP_TYPE_CUBE_UV";break}return t}function sp(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case bi:t="ENVMAP_MODE_REFRACTION";break}return t}function rp(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ic:t="ENVMAP_BLENDING_MULTIPLY";break;case ol:t="ENVMAP_BLENDING_MIX";break;case cl:t="ENVMAP_BLENDING_ADD";break}return t}function ap(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function op(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=np(e),c=ip(e),d=sp(e),p=rp(e),u=ap(e),m=Kf(e),x=Jf(r),M=s.createProgram();let _,g,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ki).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ki).join(`
`),g.length>0&&(g+=`
`)):(_=[zo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ki).join(`
`),g=[zo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Nn?"#define TONE_MAPPING":"",e.toneMapping!==Nn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Nn?qf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,Xf("linearToOutputTexel",e.outputColorSpace),Yf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ki).join(`
`)),a=pa(a),a=Uo(a,e),a=No(a,e),o=pa(o),o=Uo(o,e),o=No(o,e),a=Fo(a),o=Fo(o),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",e.glslVersion===Ja?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ja?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const T=R+_+a,S=R+g+o,O=Do(s,s.VERTEX_SHADER,T),P=Do(s,s.FRAGMENT_SHADER,S);s.attachShader(M,O),s.attachShader(M,P),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function D(I){if(n.debug.checkShaderErrors){const X=s.getProgramInfoLog(M).trim(),G=s.getShaderInfoLog(O).trim(),J=s.getShaderInfoLog(P).trim();let nt=!0,Z=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(nt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,O,P);else{const rt=Lo(s,O,"vertex"),K=Lo(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+X+`
`+rt+`
`+K)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(G===""||J==="")&&(Z=!1);Z&&(I.diagnostics={runnable:nt,programLog:X,vertexShader:{log:G,prefix:_},fragmentShader:{log:J,prefix:g}})}s.deleteShader(O),s.deleteShader(P),L=new Os(s,M),b=Zf(s,M)}let L;this.getUniforms=function(){return L===void 0&&D(this),L};let b;this.getAttributes=function(){return b===void 0&&D(this),b};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(M,Hf)),w},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gf++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=O,this.fragmentShader=P,this}let cp=0;class lp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new dp(t),e.set(t,i)),i}}class dp{constructor(t){this.id=cp++,this.code=t,this.usedTimes=0}}function hp(n,t,e,i,s,r,a){const o=new yc,l=new lp,c=new Set,d=[],p=s.logarithmicDepthBuffer,u=s.vertexTextures;let m=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(b){return c.add(b),b===0?"uv":`uv${b}`}function _(b,w,I,X,G){const J=X.fog,nt=G.geometry,Z=b.isMeshStandardMaterial?X.environment:null,rt=(b.isMeshStandardMaterial?e:t).get(b.envMap||Z),K=rt&&rt.mapping===Ws?rt.image.height:null,dt=x[b.type];b.precision!==null&&(m=s.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const gt=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,Tt=gt!==void 0?gt.length:0;let Wt=0;nt.morphAttributes.position!==void 0&&(Wt=1),nt.morphAttributes.normal!==void 0&&(Wt=2),nt.morphAttributes.color!==void 0&&(Wt=3);let ie,j,at,Mt;if(dt){const $t=en[dt];ie=$t.vertexShader,j=$t.fragmentShader}else ie=b.vertexShader,j=b.fragmentShader,l.update(b),at=l.getVertexShaderID(b),Mt=l.getFragmentShaderID(b);const ht=n.getRenderTarget(),Lt=n.state.buffers.depth.getReversed(),Nt=G.isInstancedMesh===!0,Xt=G.isBatchedMesh===!0,de=!!b.map,Jt=!!b.matcap,me=!!rt,B=!!b.aoMap,Le=!!b.lightMap,qt=!!b.bumpMap,Yt=!!b.normalMap,Pt=!!b.displacementMap,ae=!!b.emissiveMap,Ct=!!b.metalnessMap,C=!!b.roughnessMap,y=b.anisotropy>0,k=b.clearcoat>0,tt=b.dispersion>0,it=b.iridescence>0,$=b.sheen>0,yt=b.transmission>0,ut=y&&!!b.anisotropyMap,_t=k&&!!b.clearcoatMap,Zt=k&&!!b.clearcoatNormalMap,st=k&&!!b.clearcoatRoughnessMap,xt=it&&!!b.iridescenceMap,Dt=it&&!!b.iridescenceThicknessMap,Ut=$&&!!b.sheenColorMap,vt=$&&!!b.sheenRoughnessMap,Kt=!!b.specularMap,Bt=!!b.specularColorMap,se=!!b.specularIntensityMap,N=yt&&!!b.transmissionMap,lt=yt&&!!b.thicknessMap,q=!!b.gradientMap,et=!!b.alphaMap,pt=b.alphaTest>0,ft=!!b.alphaHash,Ot=!!b.extensions;let pe=Nn;b.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(pe=n.toneMapping);const we={shaderID:dt,shaderType:b.type,shaderName:b.name,vertexShader:ie,fragmentShader:j,defines:b.defines,customVertexShaderID:at,customFragmentShaderID:Mt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Xt,batchingColor:Xt&&G._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&G.instanceColor!==null,instancingMorph:Nt&&G.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ht===null?n.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Ci,alphaToCoverage:!!b.alphaToCoverage,map:de,matcap:Jt,envMap:me,envMapMode:me&&rt.mapping,envMapCubeUVHeight:K,aoMap:B,lightMap:Le,bumpMap:qt,normalMap:Yt,displacementMap:u&&Pt,emissiveMap:ae,normalMapObjectSpace:Yt&&b.normalMapType===xl,normalMapTangentSpace:Yt&&b.normalMapType===mc,metalnessMap:Ct,roughnessMap:C,anisotropy:y,anisotropyMap:ut,clearcoat:k,clearcoatMap:_t,clearcoatNormalMap:Zt,clearcoatRoughnessMap:st,dispersion:tt,iridescence:it,iridescenceMap:xt,iridescenceThicknessMap:Dt,sheen:$,sheenColorMap:Ut,sheenRoughnessMap:vt,specularMap:Kt,specularColorMap:Bt,specularIntensityMap:se,transmission:yt,transmissionMap:N,thicknessMap:lt,gradientMap:q,opaque:b.transparent===!1&&b.blending===Mi&&b.alphaToCoverage===!1,alphaMap:et,alphaTest:pt,alphaHash:ft,combine:b.combine,mapUv:de&&M(b.map.channel),aoMapUv:B&&M(b.aoMap.channel),lightMapUv:Le&&M(b.lightMap.channel),bumpMapUv:qt&&M(b.bumpMap.channel),normalMapUv:Yt&&M(b.normalMap.channel),displacementMapUv:Pt&&M(b.displacementMap.channel),emissiveMapUv:ae&&M(b.emissiveMap.channel),metalnessMapUv:Ct&&M(b.metalnessMap.channel),roughnessMapUv:C&&M(b.roughnessMap.channel),anisotropyMapUv:ut&&M(b.anisotropyMap.channel),clearcoatMapUv:_t&&M(b.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&M(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&M(b.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&M(b.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&M(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&M(b.sheenColorMap.channel),sheenRoughnessMapUv:vt&&M(b.sheenRoughnessMap.channel),specularMapUv:Kt&&M(b.specularMap.channel),specularColorMapUv:Bt&&M(b.specularColorMap.channel),specularIntensityMapUv:se&&M(b.specularIntensityMap.channel),transmissionMapUv:N&&M(b.transmissionMap.channel),thicknessMapUv:lt&&M(b.thicknessMap.channel),alphaMapUv:et&&M(b.alphaMap.channel),vertexTangents:!!nt.attributes.tangent&&(Yt||y),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!nt.attributes.uv&&(de||et),fog:!!J,useFog:b.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:Lt,skinning:G.isSkinnedMesh===!0,morphTargets:nt.morphAttributes.position!==void 0,morphNormals:nt.morphAttributes.normal!==void 0,morphColors:nt.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Wt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:pe,decodeVideoTexture:de&&b.map.isVideoTexture===!0&&Qt.getTransfer(b.map.colorSpace)===re,decodeVideoTextureEmissive:ae&&b.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(b.emissiveMap.colorSpace)===re,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===nn,flipSided:b.side===De,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ot&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&b.extensions.multiDraw===!0||Xt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return we.vertexUv1s=c.has(1),we.vertexUv2s=c.has(2),we.vertexUv3s=c.has(3),c.clear(),we}function g(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)w.push(I),w.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(R(w,b),T(w,b),w.push(n.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function R(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function T(b,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),b.push(o.mask)}function S(b){const w=x[b.type];let I;if(w){const X=en[w];I=Yl.clone(X.uniforms)}else I=b.uniforms;return I}function O(b,w){let I;for(let X=0,G=d.length;X<G;X++){const J=d[X];if(J.cacheKey===w){I=J,++I.usedTimes;break}}return I===void 0&&(I=new op(n,w,b,r),d.push(I)),I}function P(b){if(--b.usedTimes===0){const w=d.indexOf(b);d[w]=d[d.length-1],d.pop(),b.destroy()}}function D(b){l.remove(b)}function L(){l.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:S,acquireProgram:O,releaseProgram:P,releaseShaderCache:D,programs:d,dispose:L}}function up(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function fp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Oo(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Bo(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(p,u,m,x,M,_){let g=n[t];return g===void 0?(g={id:p.id,object:p,geometry:u,material:m,groupOrder:x,renderOrder:p.renderOrder,z:M,group:_},n[t]=g):(g.id=p.id,g.object=p,g.geometry=u,g.material=m,g.groupOrder=x,g.renderOrder=p.renderOrder,g.z=M,g.group=_),t++,g}function o(p,u,m,x,M,_){const g=a(p,u,m,x,M,_);m.transmission>0?i.push(g):m.transparent===!0?s.push(g):e.push(g)}function l(p,u,m,x,M,_){const g=a(p,u,m,x,M,_);m.transmission>0?i.unshift(g):m.transparent===!0?s.unshift(g):e.unshift(g)}function c(p,u){e.length>1&&e.sort(p||fp),i.length>1&&i.sort(u||Oo),s.length>1&&s.sort(u||Oo)}function d(){for(let p=t,u=n.length;p<u;p++){const m=n[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:d,sort:c}}function pp(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new Bo,n.set(i,[a])):s>=r.length?(a=new Bo,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function mp(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new Vt};break;case"SpotLight":e={position:new A,direction:new A,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new A,halfWidth:new A,halfHeight:new A};break}return n[t.id]=e,e}}}function gp(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let _p=0;function xp(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function vp(n){const t=new mp,e=gp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new A);const s=new A,r=new ce,a=new ce;function o(c){let d=0,p=0,u=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let m=0,x=0,M=0,_=0,g=0,R=0,T=0,S=0,O=0,P=0,D=0;c.sort(xp);for(let b=0,w=c.length;b<w;b++){const I=c[b],X=I.color,G=I.intensity,J=I.distance,nt=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=X.r*G,p+=X.g*G,u+=X.b*G;else if(I.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(I.sh.coefficients[Z],G);D++}else if(I.isDirectionalLight){const Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const rt=I.shadow,K=e.get(I);K.shadowIntensity=rt.intensity,K.shadowBias=rt.bias,K.shadowNormalBias=rt.normalBias,K.shadowRadius=rt.radius,K.shadowMapSize=rt.mapSize,i.directionalShadow[m]=K,i.directionalShadowMap[m]=nt,i.directionalShadowMatrix[m]=I.shadow.matrix,R++}i.directional[m]=Z,m++}else if(I.isSpotLight){const Z=t.get(I);Z.position.setFromMatrixPosition(I.matrixWorld),Z.color.copy(X).multiplyScalar(G),Z.distance=J,Z.coneCos=Math.cos(I.angle),Z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Z.decay=I.decay,i.spot[M]=Z;const rt=I.shadow;if(I.map&&(i.spotLightMap[O]=I.map,O++,rt.updateMatrices(I),I.castShadow&&P++),i.spotLightMatrix[M]=rt.matrix,I.castShadow){const K=e.get(I);K.shadowIntensity=rt.intensity,K.shadowBias=rt.bias,K.shadowNormalBias=rt.normalBias,K.shadowRadius=rt.radius,K.shadowMapSize=rt.mapSize,i.spotShadow[M]=K,i.spotShadowMap[M]=nt,S++}M++}else if(I.isRectAreaLight){const Z=t.get(I);Z.color.copy(X).multiplyScalar(G),Z.halfWidth.set(I.width*.5,0,0),Z.halfHeight.set(0,I.height*.5,0),i.rectArea[_]=Z,_++}else if(I.isPointLight){const Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),Z.distance=I.distance,Z.decay=I.decay,I.castShadow){const rt=I.shadow,K=e.get(I);K.shadowIntensity=rt.intensity,K.shadowBias=rt.bias,K.shadowNormalBias=rt.normalBias,K.shadowRadius=rt.radius,K.shadowMapSize=rt.mapSize,K.shadowCameraNear=rt.camera.near,K.shadowCameraFar=rt.camera.far,i.pointShadow[x]=K,i.pointShadowMap[x]=nt,i.pointShadowMatrix[x]=I.shadow.matrix,T++}i.point[x]=Z,x++}else if(I.isHemisphereLight){const Z=t.get(I);Z.skyColor.copy(I.color).multiplyScalar(G),Z.groundColor.copy(I.groundColor).multiplyScalar(G),i.hemi[g]=Z,g++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ct.LTC_FLOAT_1,i.rectAreaLTC2=ct.LTC_FLOAT_2):(i.rectAreaLTC1=ct.LTC_HALF_1,i.rectAreaLTC2=ct.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=u;const L=i.hash;(L.directionalLength!==m||L.pointLength!==x||L.spotLength!==M||L.rectAreaLength!==_||L.hemiLength!==g||L.numDirectionalShadows!==R||L.numPointShadows!==T||L.numSpotShadows!==S||L.numSpotMaps!==O||L.numLightProbes!==D)&&(i.directional.length=m,i.spot.length=M,i.rectArea.length=_,i.point.length=x,i.hemi.length=g,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=S+O-P,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=D,L.directionalLength=m,L.pointLength=x,L.spotLength=M,L.rectAreaLength=_,L.hemiLength=g,L.numDirectionalShadows=R,L.numPointShadows=T,L.numSpotShadows=S,L.numSpotMaps=O,L.numLightProbes=D,i.version=_p++)}function l(c,d){let p=0,u=0,m=0,x=0,M=0;const _=d.matrixWorldInverse;for(let g=0,R=c.length;g<R;g++){const T=c[g];if(T.isDirectionalLight){const S=i.directional[p];S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(_),p++}else if(T.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(_),m++}else if(T.isRectAreaLight){const S=i.rectArea[x];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(_),a.identity(),r.copy(T.matrixWorld),r.premultiply(_),a.extractRotation(r),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(T.isPointLight){const S=i.point[u];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(_),u++}else if(T.isHemisphereLight){const S=i.hemi[M];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(_),M++}}}return{setup:o,setupView:l,state:i}}function ko(n){const t=new vp(n),e=[],i=[];function s(d){c.camera=d,e.length=0,i.length=0}function r(d){e.push(d)}function a(d){i.push(d)}function o(){t.setup(e)}function l(d){t.setupView(e,d)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Mp(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new ko(n),t.set(s,[o])):r>=a.length?(o=new ko(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class yp extends Ii{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=gl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Sp extends Ii{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const wp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ep=`uniform sampler2D shadow_pass;
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
}`;function bp(n,t,e){let i=new Ta;const s=new Rt,r=new Rt,a=new ge,o=new yp({depthPacking:_l}),l=new Sp,c={},d=e.maxTextureSize,p={[Fn]:De,[De]:Fn,[nn]:nn},u=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:wp,fragmentShader:Ep}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const x=new Ie;x.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new oe(x,u),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ec;let g=this.type;this.render=function(P,D,L){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||P.length===0)return;const b=n.getRenderTarget(),w=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),X=n.state;X.setBlending(Un),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const G=g!==mn&&this.type===mn,J=g===mn&&this.type!==mn;for(let nt=0,Z=P.length;nt<Z;nt++){const rt=P[nt],K=rt.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const dt=K.getFrameExtents();if(s.multiply(dt),r.copy(K.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/dt.x),s.x=r.x*dt.x,K.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/dt.y),s.y=r.y*dt.y,K.mapSize.y=r.y)),K.map===null||G===!0||J===!0){const Tt=this.type!==mn?{minFilter:ke,magFilter:ke}:{};K.map!==null&&K.map.dispose(),K.map=new jn(s.x,s.y,Tt),K.map.texture.name=rt.name+".shadowMap",K.camera.updateProjectionMatrix()}n.setRenderTarget(K.map),n.clear();const gt=K.getViewportCount();for(let Tt=0;Tt<gt;Tt++){const Wt=K.getViewport(Tt);a.set(r.x*Wt.x,r.y*Wt.y,r.x*Wt.z,r.y*Wt.w),X.viewport(a),K.updateMatrices(rt,Tt),i=K.getFrustum(),S(D,L,K.camera,rt,this.type)}K.isPointLightShadow!==!0&&this.type===mn&&R(K,L),K.needsUpdate=!1}g=this.type,_.needsUpdate=!1,n.setRenderTarget(b,w,I)};function R(P,D){const L=t.update(M);u.defines.VSM_SAMPLES!==P.blurSamples&&(u.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new jn(s.x,s.y)),u.uniforms.shadow_pass.value=P.map.texture,u.uniforms.resolution.value=P.mapSize,u.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(D,null,L,u,M,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(D,null,L,m,M,null)}function T(P,D,L,b){let w=null;const I=L.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(I!==void 0)w=I;else if(w=L.isPointLight===!0?l:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const X=w.uuid,G=D.uuid;let J=c[X];J===void 0&&(J={},c[X]=J);let nt=J[G];nt===void 0&&(nt=w.clone(),J[G]=nt,D.addEventListener("dispose",O)),w=nt}if(w.visible=D.visible,w.wireframe=D.wireframe,b===mn?w.side=D.shadowSide!==null?D.shadowSide:D.side:w.side=D.shadowSide!==null?D.shadowSide:p[D.side],w.alphaMap=D.alphaMap,w.alphaTest=D.alphaTest,w.map=D.map,w.clipShadows=D.clipShadows,w.clippingPlanes=D.clippingPlanes,w.clipIntersection=D.clipIntersection,w.displacementMap=D.displacementMap,w.displacementScale=D.displacementScale,w.displacementBias=D.displacementBias,w.wireframeLinewidth=D.wireframeLinewidth,w.linewidth=D.linewidth,L.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const X=n.properties.get(w);X.light=L}return w}function S(P,D,L,b,w){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&w===mn)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,P.matrixWorld);const G=t.update(P),J=P.material;if(Array.isArray(J)){const nt=G.groups;for(let Z=0,rt=nt.length;Z<rt;Z++){const K=nt[Z],dt=J[K.materialIndex];if(dt&&dt.visible){const gt=T(P,dt,b,w);P.onBeforeShadow(n,P,D,L,G,gt,K),n.renderBufferDirect(L,null,G,gt,P,K),P.onAfterShadow(n,P,D,L,G,gt,K)}}}else if(J.visible){const nt=T(P,J,b,w);P.onBeforeShadow(n,P,D,L,G,nt,null),n.renderBufferDirect(L,null,G,nt,P,null),P.onAfterShadow(n,P,D,L,G,nt,null)}}const X=P.children;for(let G=0,J=X.length;G<J;G++)S(X[G],D,L,b,w)}function O(P){P.target.removeEventListener("dispose",O);for(const L in c){const b=c[L],w=P.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}const Tp={[Pr]:Dr,[Ir]:Nr,[Lr]:Fr,[wi]:Ur,[Dr]:Pr,[Nr]:Ir,[Fr]:Lr,[Ur]:wi};function Ap(n,t){function e(){let N=!1;const lt=new ge;let q=null;const et=new ge(0,0,0,0);return{setMask:function(pt){q!==pt&&!N&&(n.colorMask(pt,pt,pt,pt),q=pt)},setLocked:function(pt){N=pt},setClear:function(pt,ft,Ot,pe,we){we===!0&&(pt*=pe,ft*=pe,Ot*=pe),lt.set(pt,ft,Ot,pe),et.equals(lt)===!1&&(n.clearColor(pt,ft,Ot,pe),et.copy(lt))},reset:function(){N=!1,q=null,et.set(-1,0,0,0)}}}function i(){let N=!1,lt=!1,q=null,et=null,pt=null;return{setReversed:function(ft){if(lt!==ft){const Ot=t.get("EXT_clip_control");lt?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT);const pe=pt;pt=null,this.setClear(pe)}lt=ft},getReversed:function(){return lt},setTest:function(ft){ft?ht(n.DEPTH_TEST):Lt(n.DEPTH_TEST)},setMask:function(ft){q!==ft&&!N&&(n.depthMask(ft),q=ft)},setFunc:function(ft){if(lt&&(ft=Tp[ft]),et!==ft){switch(ft){case Pr:n.depthFunc(n.NEVER);break;case Dr:n.depthFunc(n.ALWAYS);break;case Ir:n.depthFunc(n.LESS);break;case wi:n.depthFunc(n.LEQUAL);break;case Lr:n.depthFunc(n.EQUAL);break;case Ur:n.depthFunc(n.GEQUAL);break;case Nr:n.depthFunc(n.GREATER);break;case Fr:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}et=ft}},setLocked:function(ft){N=ft},setClear:function(ft){pt!==ft&&(lt&&(ft=1-ft),n.clearDepth(ft),pt=ft)},reset:function(){N=!1,q=null,et=null,pt=null,lt=!1}}}function s(){let N=!1,lt=null,q=null,et=null,pt=null,ft=null,Ot=null,pe=null,we=null;return{setTest:function($t){N||($t?ht(n.STENCIL_TEST):Lt(n.STENCIL_TEST))},setMask:function($t){lt!==$t&&!N&&(n.stencilMask($t),lt=$t)},setFunc:function($t,be,cn){(q!==$t||et!==be||pt!==cn)&&(n.stencilFunc($t,be,cn),q=$t,et=be,pt=cn)},setOp:function($t,be,cn){(ft!==$t||Ot!==be||pe!==cn)&&(n.stencilOp($t,be,cn),ft=$t,Ot=be,pe=cn)},setLocked:function($t){N=$t},setClear:function($t){we!==$t&&(n.clearStencil($t),we=$t)},reset:function(){N=!1,lt=null,q=null,et=null,pt=null,ft=null,Ot=null,pe=null,we=null}}}const r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let d={},p={},u=new WeakMap,m=[],x=null,M=!1,_=null,g=null,R=null,T=null,S=null,O=null,P=null,D=new Vt(0,0,0),L=0,b=!1,w=null,I=null,X=null,G=null,J=null;const nt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,rt=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(K)[1]),Z=rt>=1):K.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Z=rt>=2);let dt=null,gt={};const Tt=n.getParameter(n.SCISSOR_BOX),Wt=n.getParameter(n.VIEWPORT),ie=new ge().fromArray(Tt),j=new ge().fromArray(Wt);function at(N,lt,q,et){const pt=new Uint8Array(4),ft=n.createTexture();n.bindTexture(N,ft),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ot=0;Ot<q;Ot++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(lt,0,n.RGBA,1,1,et,0,n.RGBA,n.UNSIGNED_BYTE,pt):n.texImage2D(lt+Ot,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pt);return ft}const Mt={};Mt[n.TEXTURE_2D]=at(n.TEXTURE_2D,n.TEXTURE_2D,1),Mt[n.TEXTURE_CUBE_MAP]=at(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[n.TEXTURE_2D_ARRAY]=at(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Mt[n.TEXTURE_3D]=at(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ht(n.DEPTH_TEST),a.setFunc(wi),qt(!1),Yt(Va),ht(n.CULL_FACE),B(Un);function ht(N){d[N]!==!0&&(n.enable(N),d[N]=!0)}function Lt(N){d[N]!==!1&&(n.disable(N),d[N]=!1)}function Nt(N,lt){return p[N]!==lt?(n.bindFramebuffer(N,lt),p[N]=lt,N===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=lt),N===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=lt),!0):!1}function Xt(N,lt){let q=m,et=!1;if(N){q=u.get(lt),q===void 0&&(q=[],u.set(lt,q));const pt=N.textures;if(q.length!==pt.length||q[0]!==n.COLOR_ATTACHMENT0){for(let ft=0,Ot=pt.length;ft<Ot;ft++)q[ft]=n.COLOR_ATTACHMENT0+ft;q.length=pt.length,et=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,et=!0);et&&n.drawBuffers(q)}function de(N){return x!==N?(n.useProgram(N),x=N,!0):!1}const Jt={[Yn]:n.FUNC_ADD,[Wc]:n.FUNC_SUBTRACT,[Xc]:n.FUNC_REVERSE_SUBTRACT};Jt[qc]=n.MIN,Jt[Yc]=n.MAX;const me={[Kc]:n.ZERO,[Jc]:n.ONE,[Zc]:n.SRC_COLOR,[Rr]:n.SRC_ALPHA,[nl]:n.SRC_ALPHA_SATURATE,[tl]:n.DST_COLOR,[jc]:n.DST_ALPHA,[$c]:n.ONE_MINUS_SRC_COLOR,[Cr]:n.ONE_MINUS_SRC_ALPHA,[el]:n.ONE_MINUS_DST_COLOR,[Qc]:n.ONE_MINUS_DST_ALPHA,[il]:n.CONSTANT_COLOR,[sl]:n.ONE_MINUS_CONSTANT_COLOR,[rl]:n.CONSTANT_ALPHA,[al]:n.ONE_MINUS_CONSTANT_ALPHA};function B(N,lt,q,et,pt,ft,Ot,pe,we,$t){if(N===Un){M===!0&&(Lt(n.BLEND),M=!1);return}if(M===!1&&(ht(n.BLEND),M=!0),N!==Vc){if(N!==_||$t!==b){if((g!==Yn||S!==Yn)&&(n.blendEquation(n.FUNC_ADD),g=Yn,S=Yn),$t)switch(N){case Mi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wa:n.blendFunc(n.ONE,n.ONE);break;case Xa:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qa:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Mi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wa:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Xa:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qa:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}R=null,T=null,O=null,P=null,D.set(0,0,0),L=0,_=N,b=$t}return}pt=pt||lt,ft=ft||q,Ot=Ot||et,(lt!==g||pt!==S)&&(n.blendEquationSeparate(Jt[lt],Jt[pt]),g=lt,S=pt),(q!==R||et!==T||ft!==O||Ot!==P)&&(n.blendFuncSeparate(me[q],me[et],me[ft],me[Ot]),R=q,T=et,O=ft,P=Ot),(pe.equals(D)===!1||we!==L)&&(n.blendColor(pe.r,pe.g,pe.b,we),D.copy(pe),L=we),_=N,b=!1}function Le(N,lt){N.side===nn?Lt(n.CULL_FACE):ht(n.CULL_FACE);let q=N.side===De;lt&&(q=!q),qt(q),N.blending===Mi&&N.transparent===!1?B(Un):B(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const et=N.stencilWrite;o.setTest(et),et&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ae(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ht(n.SAMPLE_ALPHA_TO_COVERAGE):Lt(n.SAMPLE_ALPHA_TO_COVERAGE)}function qt(N){w!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),w=N)}function Yt(N){N!==Hc?(ht(n.CULL_FACE),N!==I&&(N===Va?n.cullFace(n.BACK):N===Gc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Lt(n.CULL_FACE),I=N}function Pt(N){N!==X&&(Z&&n.lineWidth(N),X=N)}function ae(N,lt,q){N?(ht(n.POLYGON_OFFSET_FILL),(G!==lt||J!==q)&&(n.polygonOffset(lt,q),G=lt,J=q)):Lt(n.POLYGON_OFFSET_FILL)}function Ct(N){N?ht(n.SCISSOR_TEST):Lt(n.SCISSOR_TEST)}function C(N){N===void 0&&(N=n.TEXTURE0+nt-1),dt!==N&&(n.activeTexture(N),dt=N)}function y(N,lt,q){q===void 0&&(dt===null?q=n.TEXTURE0+nt-1:q=dt);let et=gt[q];et===void 0&&(et={type:void 0,texture:void 0},gt[q]=et),(et.type!==N||et.texture!==lt)&&(dt!==q&&(n.activeTexture(q),dt=q),n.bindTexture(N,lt||Mt[N]),et.type=N,et.texture=lt)}function k(){const N=gt[dt];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function tt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function yt(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ut(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _t(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Zt(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function st(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xt(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Dt(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ut(N){ie.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),ie.copy(N))}function vt(N){j.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),j.copy(N))}function Kt(N,lt){let q=c.get(lt);q===void 0&&(q=new WeakMap,c.set(lt,q));let et=q.get(N);et===void 0&&(et=n.getUniformBlockIndex(lt,N.name),q.set(N,et))}function Bt(N,lt){const et=c.get(lt).get(N);l.get(lt)!==et&&(n.uniformBlockBinding(lt,et,N.__bindingPointIndex),l.set(lt,et))}function se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},dt=null,gt={},p={},u=new WeakMap,m=[],x=null,M=!1,_=null,g=null,R=null,T=null,S=null,O=null,P=null,D=new Vt(0,0,0),L=0,b=!1,w=null,I=null,X=null,G=null,J=null,ie.set(0,0,n.canvas.width,n.canvas.height),j.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ht,disable:Lt,bindFramebuffer:Nt,drawBuffers:Xt,useProgram:de,setBlending:B,setMaterial:Le,setFlipSided:qt,setCullFace:Yt,setLineWidth:Pt,setPolygonOffset:ae,setScissorTest:Ct,activeTexture:C,bindTexture:y,unbindTexture:k,compressedTexImage2D:tt,compressedTexImage3D:it,texImage2D:xt,texImage3D:Dt,updateUBOMapping:Kt,uniformBlockBinding:Bt,texStorage2D:Zt,texStorage3D:st,texSubImage2D:$,texSubImage3D:yt,compressedTexSubImage2D:ut,compressedTexSubImage3D:_t,scissor:Ut,viewport:vt,reset:se}}function Ho(n,t,e,i){const s=Rp(i);switch(e){case lc:return n*t;case hc:return n*t;case uc:return n*t*2;case ya:return n*t/s.components*s.byteLength;case Sa:return n*t/s.components*s.byteLength;case fc:return n*t*2/s.components*s.byteLength;case wa:return n*t*2/s.components*s.byteLength;case dc:return n*t*3/s.components*s.byteLength;case je:return n*t*4/s.components*s.byteLength;case Ea:return n*t*4/s.components*s.byteLength;case Ls:case Us:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ns:case Fs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Gr:case Wr:return Math.max(n,16)*Math.max(t,8)/4;case Hr:case Vr:return Math.max(n,8)*Math.max(t,8)/2;case Xr:case qr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Yr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Kr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Jr:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Zr:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case $r:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case jr:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Qr:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ta:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ea:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case na:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ia:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case sa:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ra:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case aa:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case oa:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case zs:case ca:case la:return Math.ceil(n/4)*Math.ceil(t/4)*16;case pc:case da:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ha:case ua:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Rp(n){switch(n){case vn:case ac:return{byteLength:1,components:1};case $i:case oc:case Qi:return{byteLength:2,components:1};case va:case Ma:return{byteLength:2,components:4};case $n:case xa:case rn:return{byteLength:4,components:1};case cc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Cp(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Rt,d=new WeakMap;let p;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,y){return m?new OffscreenCanvas(C,y):Hs("canvas")}function M(C,y,k){let tt=1;const it=Ct(C);if((it.width>k||it.height>k)&&(tt=k/Math.max(it.width,it.height)),tt<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const $=Math.floor(tt*it.width),yt=Math.floor(tt*it.height);p===void 0&&(p=x($,yt));const ut=y?x($,yt):p;return ut.width=$,ut.height=yt,ut.getContext("2d").drawImage(C,0,0,$,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+$+"x"+yt+")."),ut}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),C;return C}function _(C){return C.generateMipmaps}function g(C){n.generateMipmap(C)}function R(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(C,y,k,tt,it=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let $=y;if(y===n.RED&&(k===n.FLOAT&&($=n.R32F),k===n.HALF_FLOAT&&($=n.R16F),k===n.UNSIGNED_BYTE&&($=n.R8)),y===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&($=n.R8UI),k===n.UNSIGNED_SHORT&&($=n.R16UI),k===n.UNSIGNED_INT&&($=n.R32UI),k===n.BYTE&&($=n.R8I),k===n.SHORT&&($=n.R16I),k===n.INT&&($=n.R32I)),y===n.RG&&(k===n.FLOAT&&($=n.RG32F),k===n.HALF_FLOAT&&($=n.RG16F),k===n.UNSIGNED_BYTE&&($=n.RG8)),y===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&($=n.RG8UI),k===n.UNSIGNED_SHORT&&($=n.RG16UI),k===n.UNSIGNED_INT&&($=n.RG32UI),k===n.BYTE&&($=n.RG8I),k===n.SHORT&&($=n.RG16I),k===n.INT&&($=n.RG32I)),y===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&($=n.RGB8UI),k===n.UNSIGNED_SHORT&&($=n.RGB16UI),k===n.UNSIGNED_INT&&($=n.RGB32UI),k===n.BYTE&&($=n.RGB8I),k===n.SHORT&&($=n.RGB16I),k===n.INT&&($=n.RGB32I)),y===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&($=n.RGBA8UI),k===n.UNSIGNED_SHORT&&($=n.RGBA16UI),k===n.UNSIGNED_INT&&($=n.RGBA32UI),k===n.BYTE&&($=n.RGBA8I),k===n.SHORT&&($=n.RGBA16I),k===n.INT&&($=n.RGBA32I)),y===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),y===n.RGBA){const yt=it?Xs:Qt.getTransfer(tt);k===n.FLOAT&&($=n.RGBA32F),k===n.HALF_FLOAT&&($=n.RGBA16F),k===n.UNSIGNED_BYTE&&($=yt===re?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function S(C,y){let k;return C?y===null||y===$n||y===Ti?k=n.DEPTH24_STENCIL8:y===rn?k=n.DEPTH32F_STENCIL8:y===$i&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===$n||y===Ti?k=n.DEPTH_COMPONENT24:y===rn?k=n.DEPTH_COMPONENT32F:y===$i&&(k=n.DEPTH_COMPONENT16),k}function O(C,y){return _(C)===!0||C.isFramebufferTexture&&C.minFilter!==ke&&C.minFilter!==sn?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function P(C){const y=C.target;y.removeEventListener("dispose",P),L(y),y.isVideoTexture&&d.delete(y)}function D(C){const y=C.target;y.removeEventListener("dispose",D),w(y)}function L(C){const y=i.get(C);if(y.__webglInit===void 0)return;const k=C.source,tt=u.get(k);if(tt){const it=tt[y.__cacheKey];it.usedTimes--,it.usedTimes===0&&b(C),Object.keys(tt).length===0&&u.delete(k)}i.remove(C)}function b(C){const y=i.get(C);n.deleteTexture(y.__webglTexture);const k=C.source,tt=u.get(k);delete tt[y.__cacheKey],a.memory.textures--}function w(C){const y=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(y.__webglFramebuffer[tt]))for(let it=0;it<y.__webglFramebuffer[tt].length;it++)n.deleteFramebuffer(y.__webglFramebuffer[tt][it]);else n.deleteFramebuffer(y.__webglFramebuffer[tt]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[tt])}else{if(Array.isArray(y.__webglFramebuffer))for(let tt=0;tt<y.__webglFramebuffer.length;tt++)n.deleteFramebuffer(y.__webglFramebuffer[tt]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let tt=0;tt<y.__webglColorRenderbuffer.length;tt++)y.__webglColorRenderbuffer[tt]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[tt]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const k=C.textures;for(let tt=0,it=k.length;tt<it;tt++){const $=i.get(k[tt]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(k[tt])}i.remove(C)}let I=0;function X(){I=0}function G(){const C=I;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),I+=1,C}function J(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function nt(C,y){const k=i.get(C);if(C.isVideoTexture&&Pt(C),C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){const tt=C.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(k,C,y);return}}e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+y)}function Z(C,y){const k=i.get(C);if(C.version>0&&k.__version!==C.version){j(k,C,y);return}e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+y)}function rt(C,y){const k=i.get(C);if(C.version>0&&k.__version!==C.version){j(k,C,y);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+y)}function K(C,y){const k=i.get(C);if(C.version>0&&k.__version!==C.version){at(k,C,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+y)}const dt={[Br]:n.REPEAT,[Jn]:n.CLAMP_TO_EDGE,[kr]:n.MIRRORED_REPEAT},gt={[ke]:n.NEAREST,[ml]:n.NEAREST_MIPMAP_NEAREST,[as]:n.NEAREST_MIPMAP_LINEAR,[sn]:n.LINEAR,[Ks]:n.LINEAR_MIPMAP_NEAREST,[Zn]:n.LINEAR_MIPMAP_LINEAR},Tt={[vl]:n.NEVER,[bl]:n.ALWAYS,[Ml]:n.LESS,[gc]:n.LEQUAL,[yl]:n.EQUAL,[El]:n.GEQUAL,[Sl]:n.GREATER,[wl]:n.NOTEQUAL};function Wt(C,y){if(y.type===rn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===sn||y.magFilter===Ks||y.magFilter===as||y.magFilter===Zn||y.minFilter===sn||y.minFilter===Ks||y.minFilter===as||y.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,dt[y.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,dt[y.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,dt[y.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,gt[y.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,gt[y.minFilter]),y.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Tt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===ke||y.minFilter!==as&&y.minFilter!==Zn||y.type===rn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ie(C,y){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",P));const tt=y.source;let it=u.get(tt);it===void 0&&(it={},u.set(tt,it));const $=J(y);if($!==C.__cacheKey){it[$]===void 0&&(it[$]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),it[$].usedTimes++;const yt=it[C.__cacheKey];yt!==void 0&&(it[C.__cacheKey].usedTimes--,yt.usedTimes===0&&b(y)),C.__cacheKey=$,C.__webglTexture=it[$].texture}return k}function j(C,y,k){let tt=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(tt=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(tt=n.TEXTURE_3D);const it=ie(C,y),$=y.source;e.bindTexture(tt,C.__webglTexture,n.TEXTURE0+k);const yt=i.get($);if($.version!==yt.__version||it===!0){e.activeTexture(n.TEXTURE0+k);const ut=Qt.getPrimaries(Qt.workingColorSpace),_t=y.colorSpace===In?null:Qt.getPrimaries(y.colorSpace),Zt=y.colorSpace===In||ut===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let st=M(y.image,!1,s.maxTextureSize);st=ae(y,st);const xt=r.convert(y.format,y.colorSpace),Dt=r.convert(y.type);let Ut=T(y.internalFormat,xt,Dt,y.colorSpace,y.isVideoTexture);Wt(tt,y);let vt;const Kt=y.mipmaps,Bt=y.isVideoTexture!==!0,se=yt.__version===void 0||it===!0,N=$.dataReady,lt=O(y,st);if(y.isDepthTexture)Ut=S(y.format===Ai,y.type),se&&(Bt?e.texStorage2D(n.TEXTURE_2D,1,Ut,st.width,st.height):e.texImage2D(n.TEXTURE_2D,0,Ut,st.width,st.height,0,xt,Dt,null));else if(y.isDataTexture)if(Kt.length>0){Bt&&se&&e.texStorage2D(n.TEXTURE_2D,lt,Ut,Kt[0].width,Kt[0].height);for(let q=0,et=Kt.length;q<et;q++)vt=Kt[q],Bt?N&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,vt.width,vt.height,xt,Dt,vt.data):e.texImage2D(n.TEXTURE_2D,q,Ut,vt.width,vt.height,0,xt,Dt,vt.data);y.generateMipmaps=!1}else Bt?(se&&e.texStorage2D(n.TEXTURE_2D,lt,Ut,st.width,st.height),N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,st.width,st.height,xt,Dt,st.data)):e.texImage2D(n.TEXTURE_2D,0,Ut,st.width,st.height,0,xt,Dt,st.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Bt&&se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,lt,Ut,Kt[0].width,Kt[0].height,st.depth);for(let q=0,et=Kt.length;q<et;q++)if(vt=Kt[q],y.format!==je)if(xt!==null)if(Bt){if(N)if(y.layerUpdates.size>0){const pt=Ho(vt.width,vt.height,y.format,y.type);for(const ft of y.layerUpdates){const Ot=vt.data.subarray(ft*pt/vt.data.BYTES_PER_ELEMENT,(ft+1)*pt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,ft,vt.width,vt.height,1,xt,Ot)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,vt.width,vt.height,st.depth,xt,vt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,Ut,vt.width,vt.height,st.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?N&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,vt.width,vt.height,st.depth,xt,Dt,vt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,q,Ut,vt.width,vt.height,st.depth,0,xt,Dt,vt.data)}else{Bt&&se&&e.texStorage2D(n.TEXTURE_2D,lt,Ut,Kt[0].width,Kt[0].height);for(let q=0,et=Kt.length;q<et;q++)vt=Kt[q],y.format!==je?xt!==null?Bt?N&&e.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,vt.width,vt.height,xt,vt.data):e.compressedTexImage2D(n.TEXTURE_2D,q,Ut,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?N&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,vt.width,vt.height,xt,Dt,vt.data):e.texImage2D(n.TEXTURE_2D,q,Ut,vt.width,vt.height,0,xt,Dt,vt.data)}else if(y.isDataArrayTexture)if(Bt){if(se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,lt,Ut,st.width,st.height,st.depth),N)if(y.layerUpdates.size>0){const q=Ho(st.width,st.height,y.format,y.type);for(const et of y.layerUpdates){const pt=st.data.subarray(et*q/st.data.BYTES_PER_ELEMENT,(et+1)*q/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,et,st.width,st.height,1,xt,Dt,pt)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,xt,Dt,st.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ut,st.width,st.height,st.depth,0,xt,Dt,st.data);else if(y.isData3DTexture)Bt?(se&&e.texStorage3D(n.TEXTURE_3D,lt,Ut,st.width,st.height,st.depth),N&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,xt,Dt,st.data)):e.texImage3D(n.TEXTURE_3D,0,Ut,st.width,st.height,st.depth,0,xt,Dt,st.data);else if(y.isFramebufferTexture){if(se)if(Bt)e.texStorage2D(n.TEXTURE_2D,lt,Ut,st.width,st.height);else{let q=st.width,et=st.height;for(let pt=0;pt<lt;pt++)e.texImage2D(n.TEXTURE_2D,pt,Ut,q,et,0,xt,Dt,null),q>>=1,et>>=1}}else if(Kt.length>0){if(Bt&&se){const q=Ct(Kt[0]);e.texStorage2D(n.TEXTURE_2D,lt,Ut,q.width,q.height)}for(let q=0,et=Kt.length;q<et;q++)vt=Kt[q],Bt?N&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,xt,Dt,vt):e.texImage2D(n.TEXTURE_2D,q,Ut,xt,Dt,vt);y.generateMipmaps=!1}else if(Bt){if(se){const q=Ct(st);e.texStorage2D(n.TEXTURE_2D,lt,Ut,q.width,q.height)}N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,xt,Dt,st)}else e.texImage2D(n.TEXTURE_2D,0,Ut,xt,Dt,st);_(y)&&g(tt),yt.__version=$.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function at(C,y,k){if(y.image.length!==6)return;const tt=ie(C,y),it=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+k);const $=i.get(it);if(it.version!==$.__version||tt===!0){e.activeTexture(n.TEXTURE0+k);const yt=Qt.getPrimaries(Qt.workingColorSpace),ut=y.colorSpace===In?null:Qt.getPrimaries(y.colorSpace),_t=y.colorSpace===In||yt===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Zt=y.isCompressedTexture||y.image[0].isCompressedTexture,st=y.image[0]&&y.image[0].isDataTexture,xt=[];for(let et=0;et<6;et++)!Zt&&!st?xt[et]=M(y.image[et],!0,s.maxCubemapSize):xt[et]=st?y.image[et].image:y.image[et],xt[et]=ae(y,xt[et]);const Dt=xt[0],Ut=r.convert(y.format,y.colorSpace),vt=r.convert(y.type),Kt=T(y.internalFormat,Ut,vt,y.colorSpace),Bt=y.isVideoTexture!==!0,se=$.__version===void 0||tt===!0,N=it.dataReady;let lt=O(y,Dt);Wt(n.TEXTURE_CUBE_MAP,y);let q;if(Zt){Bt&&se&&e.texStorage2D(n.TEXTURE_CUBE_MAP,lt,Kt,Dt.width,Dt.height);for(let et=0;et<6;et++){q=xt[et].mipmaps;for(let pt=0;pt<q.length;pt++){const ft=q[pt];y.format!==je?Ut!==null?Bt?N&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt,0,0,ft.width,ft.height,Ut,ft.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt,Kt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt,0,0,ft.width,ft.height,Ut,vt,ft.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt,Kt,ft.width,ft.height,0,Ut,vt,ft.data)}}}else{if(q=y.mipmaps,Bt&&se){q.length>0&&lt++;const et=Ct(xt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,lt,Kt,et.width,et.height)}for(let et=0;et<6;et++)if(st){Bt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,xt[et].width,xt[et].height,Ut,vt,xt[et].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Kt,xt[et].width,xt[et].height,0,Ut,vt,xt[et].data);for(let pt=0;pt<q.length;pt++){const Ot=q[pt].image[et].image;Bt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt+1,0,0,Ot.width,Ot.height,Ut,vt,Ot.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt+1,Kt,Ot.width,Ot.height,0,Ut,vt,Ot.data)}}else{Bt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Ut,vt,xt[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Kt,Ut,vt,xt[et]);for(let pt=0;pt<q.length;pt++){const ft=q[pt];Bt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt+1,0,0,Ut,vt,ft.image[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt+1,Kt,Ut,vt,ft.image[et])}}}_(y)&&g(n.TEXTURE_CUBE_MAP),$.__version=it.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Mt(C,y,k,tt,it,$){const yt=r.convert(k.format,k.colorSpace),ut=r.convert(k.type),_t=T(k.internalFormat,yt,ut,k.colorSpace),Zt=i.get(y),st=i.get(k);if(st.__renderTarget=y,!Zt.__hasExternalTextures){const xt=Math.max(1,y.width>>$),Dt=Math.max(1,y.height>>$);it===n.TEXTURE_3D||it===n.TEXTURE_2D_ARRAY?e.texImage3D(it,$,_t,xt,Dt,y.depth,0,yt,ut,null):e.texImage2D(it,$,_t,xt,Dt,0,yt,ut,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),Yt(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,it,st.__webglTexture,0,qt(y)):(it===n.TEXTURE_2D||it>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,tt,it,st.__webglTexture,$),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ht(C,y,k){if(n.bindRenderbuffer(n.RENDERBUFFER,C),y.depthBuffer){const tt=y.depthTexture,it=tt&&tt.isDepthTexture?tt.type:null,$=S(y.stencilBuffer,it),yt=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=qt(y);Yt(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut,$,y.width,y.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,$,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,$,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,yt,n.RENDERBUFFER,C)}else{const tt=y.textures;for(let it=0;it<tt.length;it++){const $=tt[it],yt=r.convert($.format,$.colorSpace),ut=r.convert($.type),_t=T($.internalFormat,yt,ut,$.colorSpace),Zt=qt(y);k&&Yt(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Zt,_t,y.width,y.height):Yt(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Zt,_t,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,_t,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Lt(C,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=i.get(y.depthTexture);tt.__renderTarget=y,(!tt.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),nt(y.depthTexture,0);const it=tt.__webglTexture,$=qt(y);if(y.depthTexture.format===yi)Yt(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,it,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,it,0);else if(y.depthTexture.format===Ai)Yt(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,it,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Nt(C){const y=i.get(C),k=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const tt=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),tt){const it=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,tt.removeEventListener("dispose",it)};tt.addEventListener("dispose",it),y.__depthDisposeCallback=it}y.__boundDepthTexture=tt}if(C.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Lt(y.__webglFramebuffer,C)}else if(k){y.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[tt]),y.__webglDepthbuffer[tt]===void 0)y.__webglDepthbuffer[tt]=n.createRenderbuffer(),ht(y.__webglDepthbuffer[tt],C,!1);else{const it=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=y.__webglDepthbuffer[tt];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,it,n.RENDERBUFFER,$)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),ht(y.__webglDepthbuffer,C,!1);else{const tt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,it=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,it),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,it)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Xt(C,y,k){const tt=i.get(C);y!==void 0&&Mt(tt.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Nt(C)}function de(C){const y=C.texture,k=i.get(C),tt=i.get(y);C.addEventListener("dispose",D);const it=C.textures,$=C.isWebGLCubeRenderTarget===!0,yt=it.length>1;if(yt||(tt.__webglTexture===void 0&&(tt.__webglTexture=n.createTexture()),tt.__version=y.version,a.memory.textures++),$){k.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[ut]=[];for(let _t=0;_t<y.mipmaps.length;_t++)k.__webglFramebuffer[ut][_t]=n.createFramebuffer()}else k.__webglFramebuffer[ut]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let ut=0;ut<y.mipmaps.length;ut++)k.__webglFramebuffer[ut]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(yt)for(let ut=0,_t=it.length;ut<_t;ut++){const Zt=i.get(it[ut]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&Yt(C)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ut=0;ut<it.length;ut++){const _t=it[ut];k.__webglColorRenderbuffer[ut]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[ut]);const Zt=r.convert(_t.format,_t.colorSpace),st=r.convert(_t.type),xt=T(_t.internalFormat,Zt,st,_t.colorSpace,C.isXRRenderTarget===!0),Dt=qt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Dt,xt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,k.__webglColorRenderbuffer[ut])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),ht(k.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture),Wt(n.TEXTURE_CUBE_MAP,y);for(let ut=0;ut<6;ut++)if(y.mipmaps&&y.mipmaps.length>0)for(let _t=0;_t<y.mipmaps.length;_t++)Mt(k.__webglFramebuffer[ut][_t],C,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,_t);else Mt(k.__webglFramebuffer[ut],C,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);_(y)&&g(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let ut=0,_t=it.length;ut<_t;ut++){const Zt=it[ut],st=i.get(Zt);e.bindTexture(n.TEXTURE_2D,st.__webglTexture),Wt(n.TEXTURE_2D,Zt),Mt(k.__webglFramebuffer,C,Zt,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,0),_(Zt)&&g(n.TEXTURE_2D)}e.unbindTexture()}else{let ut=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ut=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,tt.__webglTexture),Wt(ut,y),y.mipmaps&&y.mipmaps.length>0)for(let _t=0;_t<y.mipmaps.length;_t++)Mt(k.__webglFramebuffer[_t],C,y,n.COLOR_ATTACHMENT0,ut,_t);else Mt(k.__webglFramebuffer,C,y,n.COLOR_ATTACHMENT0,ut,0);_(y)&&g(ut),e.unbindTexture()}C.depthBuffer&&Nt(C)}function Jt(C){const y=C.textures;for(let k=0,tt=y.length;k<tt;k++){const it=y[k];if(_(it)){const $=R(C),yt=i.get(it).__webglTexture;e.bindTexture($,yt),g($),e.unbindTexture()}}}const me=[],B=[];function Le(C){if(C.samples>0){if(Yt(C)===!1){const y=C.textures,k=C.width,tt=C.height;let it=n.COLOR_BUFFER_BIT;const $=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,yt=i.get(C),ut=y.length>1;if(ut)for(let _t=0;_t<y.length;_t++)e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let _t=0;_t<y.length;_t++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(it|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(it|=n.STENCIL_BUFFER_BIT)),ut){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,yt.__webglColorRenderbuffer[_t]);const Zt=i.get(y[_t]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Zt,0)}n.blitFramebuffer(0,0,k,tt,0,0,k,tt,it,n.NEAREST),l===!0&&(me.length=0,B.length=0,me.push(n.COLOR_ATTACHMENT0+_t),C.depthBuffer&&C.resolveDepthBuffer===!1&&(me.push($),B.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,B)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,me))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ut)for(let _t=0;_t<y.length;_t++){e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,yt.__webglColorRenderbuffer[_t]);const Zt=i.get(y[_t]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,Zt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const y=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function qt(C){return Math.min(s.maxSamples,C.samples)}function Yt(C){const y=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Pt(C){const y=a.render.frame;d.get(C)!==y&&(d.set(C,y),C.update())}function ae(C,y){const k=C.colorSpace,tt=C.format,it=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==Ci&&k!==In&&(Qt.getTransfer(k)===re?(tt!==je||it!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}function Ct(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=X,this.setTexture2D=nt,this.setTexture2DArray=Z,this.setTexture3D=rt,this.setTextureCube=K,this.rebindTextures=Xt,this.setupRenderTarget=de,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Yt}function Pp(n,t){function e(i,s=In){let r;const a=Qt.getTransfer(s);if(i===vn)return n.UNSIGNED_BYTE;if(i===va)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ma)return n.UNSIGNED_SHORT_5_5_5_1;if(i===cc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ac)return n.BYTE;if(i===oc)return n.SHORT;if(i===$i)return n.UNSIGNED_SHORT;if(i===xa)return n.INT;if(i===$n)return n.UNSIGNED_INT;if(i===rn)return n.FLOAT;if(i===Qi)return n.HALF_FLOAT;if(i===lc)return n.ALPHA;if(i===dc)return n.RGB;if(i===je)return n.RGBA;if(i===hc)return n.LUMINANCE;if(i===uc)return n.LUMINANCE_ALPHA;if(i===yi)return n.DEPTH_COMPONENT;if(i===Ai)return n.DEPTH_STENCIL;if(i===ya)return n.RED;if(i===Sa)return n.RED_INTEGER;if(i===fc)return n.RG;if(i===wa)return n.RG_INTEGER;if(i===Ea)return n.RGBA_INTEGER;if(i===Ls||i===Us||i===Ns||i===Fs)if(a===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ls)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ns)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ls)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Us)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ns)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Hr||i===Gr||i===Vr||i===Wr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Hr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Gr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Vr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xr||i===qr||i===Yr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Xr||i===qr)return a===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Yr)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Kr||i===Jr||i===Zr||i===$r||i===jr||i===Qr||i===ta||i===ea||i===na||i===ia||i===sa||i===ra||i===aa||i===oa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Kr)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Jr)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zr)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$r)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===jr)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qr)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ta)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ea)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===na)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ia)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ra)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===aa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===oa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zs||i===ca||i===la)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===zs)return a===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ca)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===la)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===pc||i===da||i===ha||i===ua)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===zs)return r.COMPRESSED_RED_RGTC1_EXT;if(i===da)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ha)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ua)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ti?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Dp extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Q extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ip={type:"move"};class wr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Q,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Q,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Q,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const M of t.hand.values()){const _=e.getJointPose(M,i),g=this._getHandJoint(c,M);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}const d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=d.position.distanceTo(p.position),m=.02,x=.005;c.inputState.pinching&&u>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ip)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Q;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Lp=`
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

}`;class Np{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Ce,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Mn({vertexShader:Lp,fragmentShader:Up,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new oe(new Li(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fp extends Pi{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,p=null,u=null,m=null,x=null;const M=new Np,_=e.getContextAttributes();let g=null,R=null;const T=[],S=[],O=new Rt;let P=null;const D=new Ze;D.viewport=new ge;const L=new Ze;L.viewport=new ge;const b=[D,L],w=new Dp;let I=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let at=T[j];return at===void 0&&(at=new wr,T[j]=at),at.getTargetRaySpace()},this.getControllerGrip=function(j){let at=T[j];return at===void 0&&(at=new wr,T[j]=at),at.getGripSpace()},this.getHand=function(j){let at=T[j];return at===void 0&&(at=new wr,T[j]=at),at.getHandSpace()};function G(j){const at=S.indexOf(j.inputSource);if(at===-1)return;const Mt=T[at];Mt!==void 0&&(Mt.update(j.inputSource,j.frame,c||a),Mt.dispatchEvent({type:j.type,data:j.inputSource}))}function J(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",nt);for(let j=0;j<T.length;j++){const at=S[j];at!==null&&(S[j]=null,T[j].disconnect(at))}I=null,X=null,M.reset(),t.setRenderTarget(g),m=null,u=null,p=null,s=null,R=null,ie.stop(),i.isPresenting=!1,t.setPixelRatio(P),t.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return p},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",J),s.addEventListener("inputsourceschange",nt),_.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(O),s.renderState.layers===void 0){const at={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),R=new jn(m.framebufferWidth,m.framebufferHeight,{format:je,type:vn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let at=null,Mt=null,ht=null;_.depth&&(ht=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=_.stencil?Ai:yi,Mt=_.stencil?Ti:$n);const Lt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};p=new XRWebGLBinding(s,e),u=p.createProjectionLayer(Lt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),R=new jn(u.textureWidth,u.textureHeight,{format:je,type:vn,depthTexture:new Pc(u.textureWidth,u.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ie.setContext(s),ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function nt(j){for(let at=0;at<j.removed.length;at++){const Mt=j.removed[at],ht=S.indexOf(Mt);ht>=0&&(S[ht]=null,T[ht].disconnect(Mt))}for(let at=0;at<j.added.length;at++){const Mt=j.added[at];let ht=S.indexOf(Mt);if(ht===-1){for(let Nt=0;Nt<T.length;Nt++)if(Nt>=S.length){S.push(Mt),ht=Nt;break}else if(S[Nt]===null){S[Nt]=Mt,ht=Nt;break}if(ht===-1)break}const Lt=T[ht];Lt&&Lt.connect(Mt)}}const Z=new A,rt=new A;function K(j,at,Mt){Z.setFromMatrixPosition(at.matrixWorld),rt.setFromMatrixPosition(Mt.matrixWorld);const ht=Z.distanceTo(rt),Lt=at.projectionMatrix.elements,Nt=Mt.projectionMatrix.elements,Xt=Lt[14]/(Lt[10]-1),de=Lt[14]/(Lt[10]+1),Jt=(Lt[9]+1)/Lt[5],me=(Lt[9]-1)/Lt[5],B=(Lt[8]-1)/Lt[0],Le=(Nt[8]+1)/Nt[0],qt=Xt*B,Yt=Xt*Le,Pt=ht/(-B+Le),ae=Pt*-B;if(at.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ae),j.translateZ(Pt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Lt[10]===-1)j.projectionMatrix.copy(at.projectionMatrix),j.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const Ct=Xt+Pt,C=de+Pt,y=qt-ae,k=Yt+(ht-ae),tt=Jt*de/C*Ct,it=me*de/C*Ct;j.projectionMatrix.makePerspective(y,k,tt,it,Ct,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function dt(j,at){at===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(at.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let at=j.near,Mt=j.far;M.texture!==null&&(M.depthNear>0&&(at=M.depthNear),M.depthFar>0&&(Mt=M.depthFar)),w.near=L.near=D.near=at,w.far=L.far=D.far=Mt,(I!==w.near||X!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),I=w.near,X=w.far),D.layers.mask=j.layers.mask|2,L.layers.mask=j.layers.mask|4,w.layers.mask=D.layers.mask|L.layers.mask;const ht=j.parent,Lt=w.cameras;dt(w,ht);for(let Nt=0;Nt<Lt.length;Nt++)dt(Lt[Nt],ht);Lt.length===2?K(w,D,L):w.projectionMatrix.copy(D.projectionMatrix),gt(j,w,ht)};function gt(j,at,Mt){Mt===null?j.matrix.copy(at.matrixWorld):(j.matrix.copy(Mt.matrixWorld),j.matrix.invert(),j.matrix.multiply(at.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(at.projectionMatrix),j.projectionMatrixInverse.copy(at.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=fa*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(w)};let Tt=null;function Wt(j,at){if(d=at.getViewerPose(c||a),x=at,d!==null){const Mt=d.views;m!==null&&(t.setRenderTargetFramebuffer(R,m.framebuffer),t.setRenderTarget(R));let ht=!1;Mt.length!==w.cameras.length&&(w.cameras.length=0,ht=!0);for(let Nt=0;Nt<Mt.length;Nt++){const Xt=Mt[Nt];let de=null;if(m!==null)de=m.getViewport(Xt);else{const me=p.getViewSubImage(u,Xt);de=me.viewport,Nt===0&&(t.setRenderTargetTextures(R,me.colorTexture,u.ignoreDepthValues?void 0:me.depthStencilTexture),t.setRenderTarget(R))}let Jt=b[Nt];Jt===void 0&&(Jt=new Ze,Jt.layers.enable(Nt),Jt.viewport=new ge,b[Nt]=Jt),Jt.matrix.fromArray(Xt.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(Xt.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(de.x,de.y,de.width,de.height),Nt===0&&(w.matrix.copy(Jt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ht===!0&&w.cameras.push(Jt)}const Lt=s.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){const Nt=p.getDepthInformation(Mt[0]);Nt&&Nt.isValid&&Nt.texture&&M.init(t,Nt,s.renderState)}}for(let Mt=0;Mt<T.length;Mt++){const ht=S[Mt],Lt=T[Mt];ht!==null&&Lt!==void 0&&Lt.update(ht,at,c||a)}Tt&&Tt(j,at),at.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:at}),x=null}const ie=new Rc;ie.setAnimationLoop(Wt),this.setAnimationLoop=function(j){Tt=j},this.dispose=function(){}}}const Vn=new on,zp=new ce;function Op(n,t){function e(_,g){_.matrixAutoUpdate===!0&&_.updateMatrix(),g.value.copy(_.matrix)}function i(_,g){g.color.getRGB(_.fogColor.value,bc(n)),g.isFog?(_.fogNear.value=g.near,_.fogFar.value=g.far):g.isFogExp2&&(_.fogDensity.value=g.density)}function s(_,g,R,T,S){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(_,g):g.isMeshToonMaterial?(r(_,g),p(_,g)):g.isMeshPhongMaterial?(r(_,g),d(_,g)):g.isMeshStandardMaterial?(r(_,g),u(_,g),g.isMeshPhysicalMaterial&&m(_,g,S)):g.isMeshMatcapMaterial?(r(_,g),x(_,g)):g.isMeshDepthMaterial?r(_,g):g.isMeshDistanceMaterial?(r(_,g),M(_,g)):g.isMeshNormalMaterial?r(_,g):g.isLineBasicMaterial?(a(_,g),g.isLineDashedMaterial&&o(_,g)):g.isPointsMaterial?l(_,g,R,T):g.isSpriteMaterial?c(_,g):g.isShadowMaterial?(_.color.value.copy(g.color),_.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(_,g){_.opacity.value=g.opacity,g.color&&_.diffuse.value.copy(g.color),g.emissive&&_.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(_.map.value=g.map,e(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,e(g.alphaMap,_.alphaMapTransform)),g.bumpMap&&(_.bumpMap.value=g.bumpMap,e(g.bumpMap,_.bumpMapTransform),_.bumpScale.value=g.bumpScale,g.side===De&&(_.bumpScale.value*=-1)),g.normalMap&&(_.normalMap.value=g.normalMap,e(g.normalMap,_.normalMapTransform),_.normalScale.value.copy(g.normalScale),g.side===De&&_.normalScale.value.negate()),g.displacementMap&&(_.displacementMap.value=g.displacementMap,e(g.displacementMap,_.displacementMapTransform),_.displacementScale.value=g.displacementScale,_.displacementBias.value=g.displacementBias),g.emissiveMap&&(_.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,_.emissiveMapTransform)),g.specularMap&&(_.specularMap.value=g.specularMap,e(g.specularMap,_.specularMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest);const R=t.get(g),T=R.envMap,S=R.envMapRotation;T&&(_.envMap.value=T,Vn.copy(S),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),_.envMapRotation.value.setFromMatrix4(zp.makeRotationFromEuler(Vn)),_.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=g.reflectivity,_.ior.value=g.ior,_.refractionRatio.value=g.refractionRatio),g.lightMap&&(_.lightMap.value=g.lightMap,_.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,_.lightMapTransform)),g.aoMap&&(_.aoMap.value=g.aoMap,_.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,_.aoMapTransform))}function a(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,g.map&&(_.map.value=g.map,e(g.map,_.mapTransform))}function o(_,g){_.dashSize.value=g.dashSize,_.totalSize.value=g.dashSize+g.gapSize,_.scale.value=g.scale}function l(_,g,R,T){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.size.value=g.size*R,_.scale.value=T*.5,g.map&&(_.map.value=g.map,e(g.map,_.uvTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,e(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function c(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.rotation.value=g.rotation,g.map&&(_.map.value=g.map,e(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,e(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function d(_,g){_.specular.value.copy(g.specular),_.shininess.value=Math.max(g.shininess,1e-4)}function p(_,g){g.gradientMap&&(_.gradientMap.value=g.gradientMap)}function u(_,g){_.metalness.value=g.metalness,g.metalnessMap&&(_.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,_.metalnessMapTransform)),_.roughness.value=g.roughness,g.roughnessMap&&(_.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,_.roughnessMapTransform)),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)}function m(_,g,R){_.ior.value=g.ior,g.sheen>0&&(_.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),_.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(_.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,_.sheenColorMapTransform)),g.sheenRoughnessMap&&(_.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,_.sheenRoughnessMapTransform))),g.clearcoat>0&&(_.clearcoat.value=g.clearcoat,_.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(_.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,_.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(_.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===De&&_.clearcoatNormalScale.value.negate())),g.dispersion>0&&(_.dispersion.value=g.dispersion),g.iridescence>0&&(_.iridescence.value=g.iridescence,_.iridescenceIOR.value=g.iridescenceIOR,_.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(_.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,_.iridescenceMapTransform)),g.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),g.transmission>0&&(_.transmission.value=g.transmission,_.transmissionSamplerMap.value=R.texture,_.transmissionSamplerSize.value.set(R.width,R.height),g.transmissionMap&&(_.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,_.transmissionMapTransform)),_.thickness.value=g.thickness,g.thicknessMap&&(_.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=g.attenuationDistance,_.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(_.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(_.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=g.specularIntensity,_.specularColor.value.copy(g.specularColor),g.specularColorMap&&(_.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,_.specularColorMapTransform)),g.specularIntensityMap&&(_.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,_.specularIntensityMapTransform))}function x(_,g){g.matcap&&(_.matcap.value=g.matcap)}function M(_,g){const R=t.get(g).light;_.referencePosition.value.setFromMatrixPosition(R.matrixWorld),_.nearDistance.value=R.shadow.camera.near,_.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Bp(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,T){const S=T.program;i.uniformBlockBinding(R,S)}function c(R,T){let S=s[R.id];S===void 0&&(x(R),S=d(R),s[R.id]=S,R.addEventListener("dispose",_));const O=T.program;i.updateUBOMapping(R,O);const P=t.render.frame;r[R.id]!==P&&(u(R),r[R.id]=P)}function d(R){const T=p();R.__bindingPointIndex=T;const S=n.createBuffer(),O=R.__size,P=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,O,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,S),S}function p(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(R){const T=s[R.id],S=R.uniforms,O=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let P=0,D=S.length;P<D;P++){const L=Array.isArray(S[P])?S[P]:[S[P]];for(let b=0,w=L.length;b<w;b++){const I=L[b];if(m(I,P,b,O)===!0){const X=I.__offset,G=Array.isArray(I.value)?I.value:[I.value];let J=0;for(let nt=0;nt<G.length;nt++){const Z=G[nt],rt=M(Z);typeof Z=="number"||typeof Z=="boolean"?(I.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,X+J,I.__data)):Z.isMatrix3?(I.__data[0]=Z.elements[0],I.__data[1]=Z.elements[1],I.__data[2]=Z.elements[2],I.__data[3]=0,I.__data[4]=Z.elements[3],I.__data[5]=Z.elements[4],I.__data[6]=Z.elements[5],I.__data[7]=0,I.__data[8]=Z.elements[6],I.__data[9]=Z.elements[7],I.__data[10]=Z.elements[8],I.__data[11]=0):(Z.toArray(I.__data,J),J+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,X,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(R,T,S,O){const P=R.value,D=T+"_"+S;if(O[D]===void 0)return typeof P=="number"||typeof P=="boolean"?O[D]=P:O[D]=P.clone(),!0;{const L=O[D];if(typeof P=="number"||typeof P=="boolean"){if(L!==P)return O[D]=P,!0}else if(L.equals(P)===!1)return L.copy(P),!0}return!1}function x(R){const T=R.uniforms;let S=0;const O=16;for(let D=0,L=T.length;D<L;D++){const b=Array.isArray(T[D])?T[D]:[T[D]];for(let w=0,I=b.length;w<I;w++){const X=b[w],G=Array.isArray(X.value)?X.value:[X.value];for(let J=0,nt=G.length;J<nt;J++){const Z=G[J],rt=M(Z),K=S%O,dt=K%rt.boundary,gt=K+dt;S+=dt,gt!==0&&O-gt<rt.storage&&(S+=O-gt),X.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=S,S+=rt.storage}}}const P=S%O;return P>0&&(S+=O-P),R.__size=S,R.__cache={},this}function M(R){const T={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(T.boundary=4,T.storage=4):R.isVector2?(T.boundary=8,T.storage=8):R.isVector3||R.isColor?(T.boundary=16,T.storage=12):R.isVector4?(T.boundary=16,T.storage=16):R.isMatrix3?(T.boundary=48,T.storage=48):R.isMatrix4?(T.boundary=64,T.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),T}function _(R){const T=R.target;T.removeEventListener("dispose",_);const S=a.indexOf(T.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function g(){for(const R in s)n.deleteBuffer(s[R]);a=[],s={},r={}}return{bind:l,update:c,dispose:g}}class kp{constructor(t={}){const{canvas:e=Al(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const x=new Uint32Array(4),M=new Int32Array(4);let _=null,g=null;const R=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fe,this.toneMapping=Nn,this.toneMappingExposure=1;const S=this;let O=!1,P=0,D=0,L=null,b=-1,w=null;const I=new ge,X=new ge;let G=null;const J=new Vt(0);let nt=0,Z=e.width,rt=e.height,K=1,dt=null,gt=null;const Tt=new ge(0,0,Z,rt),Wt=new ge(0,0,Z,rt);let ie=!1;const j=new Ta;let at=!1,Mt=!1;const ht=new ce,Lt=new ce,Nt=new A,Xt=new ge,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Jt=!1;function me(){return L===null?K:1}let B=i;function Le(E,F){return e.getContext(E,F)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_a}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),B===null){const F="webgl2";if(B=Le(F,E),B===null)throw Le(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let qt,Yt,Pt,ae,Ct,C,y,k,tt,it,$,yt,ut,_t,Zt,st,xt,Dt,Ut,vt,Kt,Bt,se,N;function lt(){qt=new Wu(B),qt.init(),Bt=new Pp(B,qt),Yt=new Ou(B,qt,t,Bt),Pt=new Ap(B,qt),Yt.reverseDepthBuffer&&u&&Pt.buffers.depth.setReversed(!0),ae=new Yu(B),Ct=new up,C=new Cp(B,qt,Pt,Ct,Yt,Bt,ae),y=new ku(S),k=new Vu(S),tt=new td(B),se=new Fu(B,tt),it=new Xu(B,tt,ae,se),$=new Ju(B,it,tt,ae),Ut=new Ku(B,Yt,C),st=new Bu(Ct),yt=new hp(S,y,k,qt,Yt,se,st),ut=new Op(S,Ct),_t=new pp,Zt=new Mp(qt),Dt=new Nu(S,y,k,Pt,$,m,l),xt=new bp(S,$,Yt),N=new Bp(B,ae,Yt,Pt),vt=new zu(B,qt,ae),Kt=new qu(B,qt,ae),ae.programs=yt.programs,S.capabilities=Yt,S.extensions=qt,S.properties=Ct,S.renderLists=_t,S.shadowMap=xt,S.state=Pt,S.info=ae}lt();const q=new Fp(S,B);this.xr=q,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const E=qt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=qt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(E){E!==void 0&&(K=E,this.setSize(Z,rt,!1))},this.getSize=function(E){return E.set(Z,rt)},this.setSize=function(E,F,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=E,rt=F,e.width=Math.floor(E*K),e.height=Math.floor(F*K),V===!0&&(e.style.width=E+"px",e.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(Z*K,rt*K).floor()},this.setDrawingBufferSize=function(E,F,V){Z=E,rt=F,K=V,e.width=Math.floor(E*V),e.height=Math.floor(F*V),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(I)},this.getViewport=function(E){return E.copy(Tt)},this.setViewport=function(E,F,V,W){E.isVector4?Tt.set(E.x,E.y,E.z,E.w):Tt.set(E,F,V,W),Pt.viewport(I.copy(Tt).multiplyScalar(K).round())},this.getScissor=function(E){return E.copy(Wt)},this.setScissor=function(E,F,V,W){E.isVector4?Wt.set(E.x,E.y,E.z,E.w):Wt.set(E,F,V,W),Pt.scissor(X.copy(Wt).multiplyScalar(K).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(E){Pt.setScissorTest(ie=E)},this.setOpaqueSort=function(E){dt=E},this.setTransparentSort=function(E){gt=E},this.getClearColor=function(E){return E.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(E=!0,F=!0,V=!0){let W=0;if(E){let z=!1;if(L!==null){const ot=L.texture.format;z=ot===Ea||ot===wa||ot===Sa}if(z){const ot=L.texture.type,mt=ot===vn||ot===$n||ot===$i||ot===Ti||ot===va||ot===Ma,St=Dt.getClearColor(),wt=Dt.getClearAlpha(),Ft=St.r,kt=St.g,Et=St.b;mt?(x[0]=Ft,x[1]=kt,x[2]=Et,x[3]=wt,B.clearBufferuiv(B.COLOR,0,x)):(M[0]=Ft,M[1]=kt,M[2]=Et,M[3]=wt,B.clearBufferiv(B.COLOR,0,M))}else W|=B.COLOR_BUFFER_BIT}F&&(W|=B.DEPTH_BUFFER_BIT),V&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),_t.dispose(),Zt.dispose(),Ct.dispose(),y.dispose(),k.dispose(),$.dispose(),se.dispose(),N.dispose(),yt.dispose(),q.dispose(),q.removeEventListener("sessionstart",Na),q.removeEventListener("sessionend",Fa),zn.stop()};function et(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const E=ae.autoReset,F=xt.enabled,V=xt.autoUpdate,W=xt.needsUpdate,z=xt.type;lt(),ae.autoReset=E,xt.enabled=F,xt.autoUpdate=V,xt.needsUpdate=W,xt.type=z}function ft(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ot(E){const F=E.target;F.removeEventListener("dispose",Ot),pe(F)}function pe(E){we(E),Ct.remove(E)}function we(E){const F=Ct.get(E).programs;F!==void 0&&(F.forEach(function(V){yt.releaseProgram(V)}),E.isShaderMaterial&&yt.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,V,W,z,ot){F===null&&(F=de);const mt=z.isMesh&&z.matrixWorld.determinant()<0,St=Oc(E,F,V,W,z);Pt.setMaterial(W,mt);let wt=V.index,Ft=1;if(W.wireframe===!0){if(wt=it.getWireframeAttribute(V),wt===void 0)return;Ft=2}const kt=V.drawRange,Et=V.attributes.position;let te=kt.start*Ft,le=(kt.start+kt.count)*Ft;ot!==null&&(te=Math.max(te,ot.start*Ft),le=Math.min(le,(ot.start+ot.count)*Ft)),wt!==null?(te=Math.max(te,0),le=Math.min(le,wt.count)):Et!=null&&(te=Math.max(te,0),le=Math.min(le,Et.count));const he=le-te;if(he<0||he===1/0)return;se.setup(z,W,St,V,wt);let Ue,ee=vt;if(wt!==null&&(Ue=tt.get(wt),ee=Kt,ee.setIndex(Ue)),z.isMesh)W.wireframe===!0?(Pt.setLineWidth(W.wireframeLinewidth*me()),ee.setMode(B.LINES)):ee.setMode(B.TRIANGLES);else if(z.isLine){let bt=W.linewidth;bt===void 0&&(bt=1),Pt.setLineWidth(bt*me()),z.isLineSegments?ee.setMode(B.LINES):z.isLineLoop?ee.setMode(B.LINE_LOOP):ee.setMode(B.LINE_STRIP)}else z.isPoints?ee.setMode(B.POINTS):z.isSprite&&ee.setMode(B.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ee.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(qt.get("WEBGL_multi_draw"))ee.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const bt=z._multiDrawStarts,ln=z._multiDrawCounts,ne=z._multiDrawCount,Xe=wt?tt.get(wt).bytesPerElement:1,ei=Ct.get(W).currentProgram.getUniforms();for(let ze=0;ze<ne;ze++)ei.setValue(B,"_gl_DrawID",ze),ee.render(bt[ze]/Xe,ln[ze])}else if(z.isInstancedMesh)ee.renderInstances(te,he,z.count);else if(V.isInstancedBufferGeometry){const bt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ln=Math.min(V.instanceCount,bt);ee.renderInstances(te,he,ln)}else ee.render(te,he)};function $t(E,F,V){E.transparent===!0&&E.side===nn&&E.forceSinglePass===!1?(E.side=De,E.needsUpdate=!0,rs(E,F,V),E.side=Fn,E.needsUpdate=!0,rs(E,F,V),E.side=nn):rs(E,F,V)}this.compile=function(E,F,V=null){V===null&&(V=E),g=Zt.get(V),g.init(F),T.push(g),V.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(g.pushLight(z),z.castShadow&&g.pushShadow(z))}),E!==V&&E.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(g.pushLight(z),z.castShadow&&g.pushShadow(z))}),g.setupLights();const W=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ot=z.material;if(ot)if(Array.isArray(ot))for(let mt=0;mt<ot.length;mt++){const St=ot[mt];$t(St,V,z),W.add(St)}else $t(ot,V,z),W.add(ot)}),T.pop(),g=null,W},this.compileAsync=function(E,F,V=null){const W=this.compile(E,F,V);return new Promise(z=>{function ot(){if(W.forEach(function(mt){Ct.get(mt).currentProgram.isReady()&&W.delete(mt)}),W.size===0){z(E);return}setTimeout(ot,10)}qt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let be=null;function cn(E){be&&be(E)}function Na(){zn.stop()}function Fa(){zn.start()}const zn=new Rc;zn.setAnimationLoop(cn),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(E){be=E,q.setAnimationLoop(E),E===null?zn.stop():zn.start()},q.addEventListener("sessionstart",Na),q.addEventListener("sessionend",Fa),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(F),F=q.getCamera()),E.isScene===!0&&E.onBeforeRender(S,E,F,L),g=Zt.get(E,T.length),g.init(F),T.push(g),Lt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),j.setFromProjectionMatrix(Lt),Mt=this.localClippingEnabled,at=st.init(this.clippingPlanes,Mt),_=_t.get(E,R.length),_.init(),R.push(_),q.enabled===!0&&q.isPresenting===!0){const ot=S.xr.getDepthSensingMesh();ot!==null&&Ys(ot,F,-1/0,S.sortObjects)}Ys(E,F,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(dt,gt),Jt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Jt&&Dt.addToRenderList(_,E),this.info.render.frame++,at===!0&&st.beginShadows();const V=g.state.shadowsArray;xt.render(V,E,F),at===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=_.opaque,z=_.transmissive;if(g.setupLights(),F.isArrayCamera){const ot=F.cameras;if(z.length>0)for(let mt=0,St=ot.length;mt<St;mt++){const wt=ot[mt];Oa(W,z,E,wt)}Jt&&Dt.render(E);for(let mt=0,St=ot.length;mt<St;mt++){const wt=ot[mt];za(_,E,wt,wt.viewport)}}else z.length>0&&Oa(W,z,E,F),Jt&&Dt.render(E),za(_,E,F);L!==null&&(C.updateMultisampleRenderTarget(L),C.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(S,E,F),se.resetDefaultState(),b=-1,w=null,T.pop(),T.length>0?(g=T[T.length-1],at===!0&&st.setGlobalState(S.clippingPlanes,g.state.camera)):g=null,R.pop(),R.length>0?_=R[R.length-1]:_=null};function Ys(E,F,V,W){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||j.intersectsSprite(E)){W&&Xt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Lt);const mt=$.update(E),St=E.material;St.visible&&_.push(E,mt,St,V,Xt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||j.intersectsObject(E))){const mt=$.update(E),St=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Xt.copy(E.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Xt.copy(mt.boundingSphere.center)),Xt.applyMatrix4(E.matrixWorld).applyMatrix4(Lt)),Array.isArray(St)){const wt=mt.groups;for(let Ft=0,kt=wt.length;Ft<kt;Ft++){const Et=wt[Ft],te=St[Et.materialIndex];te&&te.visible&&_.push(E,mt,te,V,Xt.z,Et)}}else St.visible&&_.push(E,mt,St,V,Xt.z,null)}}const ot=E.children;for(let mt=0,St=ot.length;mt<St;mt++)Ys(ot[mt],F,V,W)}function za(E,F,V,W){const z=E.opaque,ot=E.transmissive,mt=E.transparent;g.setupLightsView(V),at===!0&&st.setGlobalState(S.clippingPlanes,V),W&&Pt.viewport(I.copy(W)),z.length>0&&ss(z,F,V),ot.length>0&&ss(ot,F,V),mt.length>0&&ss(mt,F,V),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function Oa(E,F,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[W.id]===void 0&&(g.state.transmissionRenderTarget[W.id]=new jn(1,1,{generateMipmaps:!0,type:qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float")?Qi:vn,minFilter:Zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const ot=g.state.transmissionRenderTarget[W.id],mt=W.viewport||I;ot.setSize(mt.z,mt.w);const St=S.getRenderTarget();S.setRenderTarget(ot),S.getClearColor(J),nt=S.getClearAlpha(),nt<1&&S.setClearColor(16777215,.5),S.clear(),Jt&&Dt.render(V);const wt=S.toneMapping;S.toneMapping=Nn;const Ft=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),g.setupLightsView(W),at===!0&&st.setGlobalState(S.clippingPlanes,W),ss(E,V,W),C.updateMultisampleRenderTarget(ot),C.updateRenderTargetMipmap(ot),qt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Et=0,te=F.length;Et<te;Et++){const le=F[Et],he=le.object,Ue=le.geometry,ee=le.material,bt=le.group;if(ee.side===nn&&he.layers.test(W.layers)){const ln=ee.side;ee.side=De,ee.needsUpdate=!0,Ba(he,V,W,Ue,ee,bt),ee.side=ln,ee.needsUpdate=!0,kt=!0}}kt===!0&&(C.updateMultisampleRenderTarget(ot),C.updateRenderTargetMipmap(ot))}S.setRenderTarget(St),S.setClearColor(J,nt),Ft!==void 0&&(W.viewport=Ft),S.toneMapping=wt}function ss(E,F,V){const W=F.isScene===!0?F.overrideMaterial:null;for(let z=0,ot=E.length;z<ot;z++){const mt=E[z],St=mt.object,wt=mt.geometry,Ft=W===null?mt.material:W,kt=mt.group;St.layers.test(V.layers)&&Ba(St,F,V,wt,Ft,kt)}}function Ba(E,F,V,W,z,ot){E.onBeforeRender(S,F,V,W,z,ot),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(S,F,V,W,E,ot),z.transparent===!0&&z.side===nn&&z.forceSinglePass===!1?(z.side=De,z.needsUpdate=!0,S.renderBufferDirect(V,F,W,z,E,ot),z.side=Fn,z.needsUpdate=!0,S.renderBufferDirect(V,F,W,z,E,ot),z.side=nn):S.renderBufferDirect(V,F,W,z,E,ot),E.onAfterRender(S,F,V,W,z,ot)}function rs(E,F,V){F.isScene!==!0&&(F=de);const W=Ct.get(E),z=g.state.lights,ot=g.state.shadowsArray,mt=z.state.version,St=yt.getParameters(E,z.state,ot,F,V),wt=yt.getProgramCacheKey(St);let Ft=W.programs;W.environment=E.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(E.isMeshStandardMaterial?k:y).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Ft===void 0&&(E.addEventListener("dispose",Ot),Ft=new Map,W.programs=Ft);let kt=Ft.get(wt);if(kt!==void 0){if(W.currentProgram===kt&&W.lightsStateVersion===mt)return Ha(E,St),kt}else St.uniforms=yt.getUniforms(E),E.onBeforeCompile(St,S),kt=yt.acquireProgram(St,wt),Ft.set(wt,kt),W.uniforms=St.uniforms;const Et=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Et.clippingPlanes=st.uniform),Ha(E,St),W.needsLights=kc(E),W.lightsStateVersion=mt,W.needsLights&&(Et.ambientLightColor.value=z.state.ambient,Et.lightProbe.value=z.state.probe,Et.directionalLights.value=z.state.directional,Et.directionalLightShadows.value=z.state.directionalShadow,Et.spotLights.value=z.state.spot,Et.spotLightShadows.value=z.state.spotShadow,Et.rectAreaLights.value=z.state.rectArea,Et.ltc_1.value=z.state.rectAreaLTC1,Et.ltc_2.value=z.state.rectAreaLTC2,Et.pointLights.value=z.state.point,Et.pointLightShadows.value=z.state.pointShadow,Et.hemisphereLights.value=z.state.hemi,Et.directionalShadowMap.value=z.state.directionalShadowMap,Et.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Et.spotShadowMap.value=z.state.spotShadowMap,Et.spotLightMatrix.value=z.state.spotLightMatrix,Et.spotLightMap.value=z.state.spotLightMap,Et.pointShadowMap.value=z.state.pointShadowMap,Et.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=kt,W.uniformsList=null,kt}function ka(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Os.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Ha(E,F){const V=Ct.get(E);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function Oc(E,F,V,W,z){F.isScene!==!0&&(F=de),C.resetTextureUnits();const ot=F.fog,mt=W.isMeshStandardMaterial?F.environment:null,St=L===null?S.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ci,wt=(W.isMeshStandardMaterial?k:y).get(W.envMap||mt),Ft=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,kt=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Et=!!V.morphAttributes.position,te=!!V.morphAttributes.normal,le=!!V.morphAttributes.color;let he=Nn;W.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(he=S.toneMapping);const Ue=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ee=Ue!==void 0?Ue.length:0,bt=Ct.get(W),ln=g.state.lights;if(at===!0&&(Mt===!0||E!==w)){const Ge=E===w&&W.id===b;st.setState(W,E,Ge)}let ne=!1;W.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==ln.state.version||bt.outputColorSpace!==St||z.isBatchedMesh&&bt.batching===!1||!z.isBatchedMesh&&bt.batching===!0||z.isBatchedMesh&&bt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&bt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&bt.instancing===!1||!z.isInstancedMesh&&bt.instancing===!0||z.isSkinnedMesh&&bt.skinning===!1||!z.isSkinnedMesh&&bt.skinning===!0||z.isInstancedMesh&&bt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&bt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&bt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&bt.instancingMorph===!1&&z.morphTexture!==null||bt.envMap!==wt||W.fog===!0&&bt.fog!==ot||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==st.numPlanes||bt.numIntersection!==st.numIntersection)||bt.vertexAlphas!==Ft||bt.vertexTangents!==kt||bt.morphTargets!==Et||bt.morphNormals!==te||bt.morphColors!==le||bt.toneMapping!==he||bt.morphTargetsCount!==ee)&&(ne=!0):(ne=!0,bt.__version=W.version);let Xe=bt.currentProgram;ne===!0&&(Xe=rs(W,F,z));let ei=!1,ze=!1,Fi=!1;const ue=Xe.getUniforms(),Qe=bt.uniforms;if(Pt.useProgram(Xe.program)&&(ei=!0,ze=!0,Fi=!0),W.id!==b&&(b=W.id,ze=!0),ei||w!==E){Pt.buffers.depth.getReversed()?(ht.copy(E.projectionMatrix),Cl(ht),Pl(ht),ue.setValue(B,"projectionMatrix",ht)):ue.setValue(B,"projectionMatrix",E.projectionMatrix),ue.setValue(B,"viewMatrix",E.matrixWorldInverse);const Sn=ue.map.cameraPosition;Sn!==void 0&&Sn.setValue(B,Nt.setFromMatrixPosition(E.matrixWorld)),Yt.logarithmicDepthBuffer&&ue.setValue(B,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ue.setValue(B,"isOrthographic",E.isOrthographicCamera===!0),w!==E&&(w=E,ze=!0,Fi=!0)}if(z.isSkinnedMesh){ue.setOptional(B,z,"bindMatrix"),ue.setOptional(B,z,"bindMatrixInverse");const Ge=z.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),ue.setValue(B,"boneTexture",Ge.boneTexture,C))}z.isBatchedMesh&&(ue.setOptional(B,z,"batchingTexture"),ue.setValue(B,"batchingTexture",z._matricesTexture,C),ue.setOptional(B,z,"batchingIdTexture"),ue.setValue(B,"batchingIdTexture",z._indirectTexture,C),ue.setOptional(B,z,"batchingColorTexture"),z._colorsTexture!==null&&ue.setValue(B,"batchingColorTexture",z._colorsTexture,C));const zi=V.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&Ut.update(z,V,Xe),(ze||bt.receiveShadow!==z.receiveShadow)&&(bt.receiveShadow=z.receiveShadow,ue.setValue(B,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Qe.envMap.value=wt,Qe.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(Qe.envMapIntensity.value=F.environmentIntensity),ze&&(ue.setValue(B,"toneMappingExposure",S.toneMappingExposure),bt.needsLights&&Bc(Qe,Fi),ot&&W.fog===!0&&ut.refreshFogUniforms(Qe,ot),ut.refreshMaterialUniforms(Qe,W,K,rt,g.state.transmissionRenderTarget[E.id]),Os.upload(B,ka(bt),Qe,C)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Os.upload(B,ka(bt),Qe,C),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ue.setValue(B,"center",z.center),ue.setValue(B,"modelViewMatrix",z.modelViewMatrix),ue.setValue(B,"normalMatrix",z.normalMatrix),ue.setValue(B,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Ge=W.uniformsGroups;for(let Sn=0,wn=Ge.length;Sn<wn;Sn++){const Ga=Ge[Sn];N.update(Ga,Xe),N.bind(Ga,Xe)}}return Xe}function Bc(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function kc(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,F,V){Ct.get(E.texture).__webglTexture=F,Ct.get(E.depthTexture).__webglTexture=V;const W=Ct.get(E);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||qt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,F){const V=Ct.get(E);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,V=0){L=E,P=F,D=V;let W=!0,z=null,ot=!1,mt=!1;if(E){const wt=Ct.get(E);if(wt.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(B.FRAMEBUFFER,null),W=!1;else if(wt.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(wt.__hasExternalTextures)C.rebindTextures(E,Ct.get(E.texture).__webglTexture,Ct.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Et=E.depthTexture;if(wt.__boundDepthTexture!==Et){if(Et!==null&&Ct.has(Et)&&(E.width!==Et.image.width||E.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}const Ft=E.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(mt=!0);const kt=Ct.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(kt[F])?z=kt[F][V]:z=kt[F],ot=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?z=Ct.get(E).__webglMultisampledFramebuffer:Array.isArray(kt)?z=kt[V]:z=kt,I.copy(E.viewport),X.copy(E.scissor),G=E.scissorTest}else I.copy(Tt).multiplyScalar(K).floor(),X.copy(Wt).multiplyScalar(K).floor(),G=ie;if(Pt.bindFramebuffer(B.FRAMEBUFFER,z)&&W&&Pt.drawBuffers(E,z),Pt.viewport(I),Pt.scissor(X),Pt.setScissorTest(G),ot){const wt=Ct.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+F,wt.__webglTexture,V)}else if(mt){const wt=Ct.get(E.texture),Ft=F||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,wt.__webglTexture,V||0,Ft)}b=-1},this.readRenderTargetPixels=function(E,F,V,W,z,ot,mt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Ct.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&mt!==void 0&&(St=St[mt]),St){Pt.bindFramebuffer(B.FRAMEBUFFER,St);try{const wt=E.texture,Ft=wt.format,kt=wt.type;if(!Yt.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Yt.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-W&&V>=0&&V<=E.height-z&&B.readPixels(F,V,W,z,Bt.convert(Ft),Bt.convert(kt),ot)}finally{const wt=L!==null?Ct.get(L).__webglFramebuffer:null;Pt.bindFramebuffer(B.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(E,F,V,W,z,ot,mt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Ct.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&mt!==void 0&&(St=St[mt]),St){const wt=E.texture,Ft=wt.format,kt=wt.type;if(!Yt.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Yt.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=E.width-W&&V>=0&&V<=E.height-z){Pt.bindFramebuffer(B.FRAMEBUFFER,St);const Et=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Et),B.bufferData(B.PIXEL_PACK_BUFFER,ot.byteLength,B.STREAM_READ),B.readPixels(F,V,W,z,Bt.convert(Ft),Bt.convert(kt),0);const te=L!==null?Ct.get(L).__webglFramebuffer:null;Pt.bindFramebuffer(B.FRAMEBUFFER,te);const le=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Rl(B,le,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Et),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ot),B.deleteBuffer(Et),B.deleteSync(le),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,F=null,V=0){E.isTexture!==!0&&(Yi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1]);const W=Math.pow(2,-V),z=Math.floor(E.image.width*W),ot=Math.floor(E.image.height*W),mt=F!==null?F.x:0,St=F!==null?F.y:0;C.setTexture2D(E,0),B.copyTexSubImage2D(B.TEXTURE_2D,V,0,0,mt,St,z,ot),Pt.unbindTexture()},this.copyTextureToTexture=function(E,F,V=null,W=null,z=0){E.isTexture!==!0&&(Yi("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,E=arguments[1],F=arguments[2],z=arguments[3]||0,V=null);let ot,mt,St,wt,Ft,kt,Et,te,le;const he=E.isCompressedTexture?E.mipmaps[z]:E.image;V!==null?(ot=V.max.x-V.min.x,mt=V.max.y-V.min.y,St=V.isBox3?V.max.z-V.min.z:1,wt=V.min.x,Ft=V.min.y,kt=V.isBox3?V.min.z:0):(ot=he.width,mt=he.height,St=he.depth||1,wt=0,Ft=0,kt=0),W!==null?(Et=W.x,te=W.y,le=W.z):(Et=0,te=0,le=0);const Ue=Bt.convert(F.format),ee=Bt.convert(F.type);let bt;F.isData3DTexture?(C.setTexture3D(F,0),bt=B.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(C.setTexture2DArray(F,0),bt=B.TEXTURE_2D_ARRAY):(C.setTexture2D(F,0),bt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,F.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,F.unpackAlignment);const ln=B.getParameter(B.UNPACK_ROW_LENGTH),ne=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Xe=B.getParameter(B.UNPACK_SKIP_PIXELS),ei=B.getParameter(B.UNPACK_SKIP_ROWS),ze=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,he.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,he.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,wt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ft),B.pixelStorei(B.UNPACK_SKIP_IMAGES,kt);const Fi=E.isDataArrayTexture||E.isData3DTexture,ue=F.isDataArrayTexture||F.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Qe=Ct.get(E),zi=Ct.get(F),Ge=Ct.get(Qe.__renderTarget),Sn=Ct.get(zi.__renderTarget);Pt.bindFramebuffer(B.READ_FRAMEBUFFER,Ge.__webglFramebuffer),Pt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Sn.__webglFramebuffer);for(let wn=0;wn<St;wn++)Fi&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ct.get(E).__webglTexture,z,kt+wn),E.isDepthTexture?(ue&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ct.get(F).__webglTexture,z,le+wn),B.blitFramebuffer(wt,Ft,ot,mt,Et,te,ot,mt,B.DEPTH_BUFFER_BIT,B.NEAREST)):ue?B.copyTexSubImage3D(bt,z,Et,te,le+wn,wt,Ft,ot,mt):B.copyTexSubImage2D(bt,z,Et,te,le+wn,wt,Ft,ot,mt);Pt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else ue?E.isDataTexture||E.isData3DTexture?B.texSubImage3D(bt,z,Et,te,le,ot,mt,St,Ue,ee,he.data):F.isCompressedArrayTexture?B.compressedTexSubImage3D(bt,z,Et,te,le,ot,mt,St,Ue,he.data):B.texSubImage3D(bt,z,Et,te,le,ot,mt,St,Ue,ee,he):E.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,z,Et,te,ot,mt,Ue,ee,he.data):E.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,z,Et,te,he.width,he.height,Ue,he.data):B.texSubImage2D(B.TEXTURE_2D,z,Et,te,ot,mt,Ue,ee,he);B.pixelStorei(B.UNPACK_ROW_LENGTH,ln),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ne),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Xe),B.pixelStorei(B.UNPACK_SKIP_ROWS,ei),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ze),z===0&&F.generateMipmaps&&B.generateMipmap(bt),Pt.unbindTexture()},this.copyTextureToTexture3D=function(E,F,V=null,W=null,z=0){return E.isTexture!==!0&&(Yi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,E=arguments[2],F=arguments[3],z=arguments[4]||0),Yi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,F,V,W,z)},this.initRenderTarget=function(E){Ct.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),Pt.unbindTexture()},this.resetState=function(){P=0,D=0,L=null,Pt.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}class Ra{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Vt(t),this.density=e}clone(){return new Ra(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Hp extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Gp extends Ce{constructor(t=null,e=1,i=1,s,r,a,o,l,c=ke,d=ke,p,u){super(null,a,o,l,c,d,s,r,p,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Go extends He{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const gi=new ce,Vo=new ce,As=[],Wo=new Qn,Vp=new ce,Vi=new oe,Wi=new Di;class Wp extends oe{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Go(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Vp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Qn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,gi),Wo.copy(t.boundingBox).applyMatrix4(gi),this.boundingBox.union(Wo)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Di),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,gi),Wi.copy(t.boundingSphere).applyMatrix4(gi),this.boundingSphere.union(Wi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Vi.geometry=this.geometry,Vi.material=this.material,Vi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wi.copy(this.boundingSphere),Wi.applyMatrix4(i),t.ray.intersectsSphere(Wi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,gi),Vo.multiplyMatrices(i,gi),Vi.matrixWorld=Vo,Vi.raycast(t,As);for(let a=0,o=As.length;a<o;a++){const l=As[a];l.instanceId=r,l.object=this,e.push(l)}As.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Go(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Gp(new Float32Array(s*this.count),s,this.count,ya,rn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Nc extends Ii{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Xo=new ce,ma=new Mc,Rs=new Di,Cs=new A;class Xp extends Me{constructor(t=new Ie,e=new Nc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Rs.copy(i.boundingSphere),Rs.applyMatrix4(s),Rs.radius+=r,t.ray.intersectsSphere(Rs)===!1)return;Xo.copy(s).invert(),ma.copy(t.ray).applyMatrix4(Xo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,p=i.attributes.position;if(c!==null){const u=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let x=u,M=m;x<M;x++){const _=c.getX(x);Cs.fromBufferAttribute(p,_),qo(Cs,_,l,s,t,e,this)}}else{const u=Math.max(0,a.start),m=Math.min(p.count,a.start+a.count);for(let x=u,M=m;x<M;x++)Cs.fromBufferAttribute(p,x),qo(Cs,x,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function qo(n,t,e,i,s,r,a){const o=ma.distanceSqToPoint(n);if(o<e){const l=new A;ma.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class qp extends Ce{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const d=i[s],u=i[s+1]-d,m=(a-d)/u;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Rt:new A);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new A,s=[],r=[],a=[],o=new A,l=new ce;for(let m=0;m<=t;m++){const x=m/t;s[m]=this.getTangentAt(x,new A)}r[0]=new A,a[0]=new A;let c=Number.MAX_VALUE;const d=Math.abs(s[0].x),p=Math.abs(s[0].y),u=Math.abs(s[0].z);d<=c&&(c=d,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();const x=Math.acos(Re(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,x))}a[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(Re(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],m*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Fc extends yn{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Rt){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const d=Math.cos(this.aRotation),p=Math.sin(this.aRotation),u=l-this.aX,m=c-this.aY;l=u*d-m*p+this.aX,c=u*p+m*d+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Yp extends Fc{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ca(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,d,p){let u=(a-r)/c-(o-r)/(c+d)+(o-a)/d,m=(o-a)/d-(l-a)/(d+p)+(l-o)/p;u*=d,m*=d,s(a,o,u,m)},calc:function(r){const a=r*r,o=a*r;return n+t*r+e*a+i*o}}}const Ps=new A,Er=new Ca,br=new Ca,Tr=new Ca;class Ni extends yn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new A){const i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,d;this.closed||o>0?c=s[(o-1)%r]:(Ps.subVectors(s[0],s[1]).add(s[0]),c=Ps);const p=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?d=s[(o+2)%r]:(Ps.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=Ps),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(p),m),M=Math.pow(p.distanceToSquared(u),m),_=Math.pow(u.distanceToSquared(d),m);M<1e-4&&(M=1),x<1e-4&&(x=M),_<1e-4&&(_=M),Er.initNonuniformCatmullRom(c.x,p.x,u.x,d.x,x,M,_),br.initNonuniformCatmullRom(c.y,p.y,u.y,d.y,x,M,_),Tr.initNonuniformCatmullRom(c.z,p.z,u.z,d.z,x,M,_)}else this.curveType==="catmullrom"&&(Er.initCatmullRom(c.x,p.x,u.x,d.x,this.tension),br.initCatmullRom(c.y,p.y,u.y,d.y,this.tension),Tr.initCatmullRom(c.z,p.z,u.z,d.z,this.tension));return i.set(Er.calc(l),br.calc(l),Tr.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Yo(n,t,e,i,s){const r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function Kp(n,t){const e=1-n;return e*e*t}function Jp(n,t){return 2*(1-n)*n*t}function Zp(n,t){return n*n*t}function Ji(n,t,e,i){return Kp(n,t)+Jp(n,e)+Zp(n,i)}function $p(n,t){const e=1-n;return e*e*e*t}function jp(n,t){const e=1-n;return 3*e*e*n*t}function Qp(n,t){return 3*(1-n)*n*n*t}function t0(n,t){return n*n*n*t}function Zi(n,t,e,i,s){return $p(n,t)+jp(n,e)+Qp(n,i)+t0(n,s)}class e0 extends yn{constructor(t=new Rt,e=new Rt,i=new Rt,s=new Rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Rt){const i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Zi(t,s.x,r.x,a.x,o.x),Zi(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class n0 extends yn{constructor(t=new A,e=new A,i=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new A){const i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Zi(t,s.x,r.x,a.x,o.x),Zi(t,s.y,r.y,a.y,o.y),Zi(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class i0 extends yn{constructor(t=new Rt,e=new Rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Rt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class s0 extends yn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class r0 extends yn{constructor(t=new Rt,e=new Rt,i=new Rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Rt){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Ji(t,s.x,r.x,a.x),Ji(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zc extends yn{constructor(t=new A,e=new A,i=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new A){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Ji(t,s.x,r.x,a.x),Ji(t,s.y,r.y,a.y),Ji(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class a0 extends yn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Rt){const i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],d=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return i.set(Yo(o,l.x,c.x,d.x,p.x),Yo(o,l.y,c.y,d.y,p.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new Rt().fromArray(s))}return this}}var o0=Object.freeze({__proto__:null,ArcCurve:Yp,CatmullRomCurve3:Ni,CubicBezierCurve:e0,CubicBezierCurve3:n0,EllipseCurve:Fc,LineCurve:i0,LineCurve3:s0,QuadraticBezierCurve:r0,QuadraticBezierCurve3:zc,SplineCurve:a0});class Y extends Ie{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const d=[],p=[],u=[],m=[];let x=0;const M=[],_=i/2;let g=0;R(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(d),this.setAttribute("position",new fe(p,3)),this.setAttribute("normal",new fe(u,3)),this.setAttribute("uv",new fe(m,2));function R(){const S=new A,O=new A;let P=0;const D=(e-t)/i;for(let L=0;L<=r;L++){const b=[],w=L/r,I=w*(e-t)+t;for(let X=0;X<=s;X++){const G=X/s,J=G*l+o,nt=Math.sin(J),Z=Math.cos(J);O.x=I*nt,O.y=-w*i+_,O.z=I*Z,p.push(O.x,O.y,O.z),S.set(nt,D,Z).normalize(),u.push(S.x,S.y,S.z),m.push(G,1-w),b.push(x++)}M.push(b)}for(let L=0;L<s;L++)for(let b=0;b<r;b++){const w=M[b][L],I=M[b+1][L],X=M[b+1][L+1],G=M[b][L+1];(t>0||b!==0)&&(d.push(w,I,G),P+=3),(e>0||b!==r-1)&&(d.push(I,X,G),P+=3)}c.addGroup(g,P,0),g+=P}function T(S){const O=x,P=new Rt,D=new A;let L=0;const b=S===!0?t:e,w=S===!0?1:-1;for(let X=1;X<=s;X++)p.push(0,_*w,0),u.push(0,w,0),m.push(.5,.5),x++;const I=x;for(let X=0;X<=s;X++){const J=X/s*l+o,nt=Math.cos(J),Z=Math.sin(J);D.x=b*Z,D.y=_*w,D.z=b*nt,p.push(D.x,D.y,D.z),u.push(0,w,0),P.x=nt*.5+.5,P.y=Z*.5*w+.5,m.push(P.x,P.y),x++}for(let X=0;X<s;X++){const G=O+X,J=I+X;S===!0?d.push(J,J+1,G):d.push(J+1,J,G),L+=3}c.addGroup(g,L,S===!0?1:2),g+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Y(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ns extends Y{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new ns(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class is extends Ie{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],a=[];o(s),c(i),d(),this.setAttribute("position",new fe(r,3)),this.setAttribute("normal",new fe(r.slice(),3)),this.setAttribute("uv",new fe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(R){const T=new A,S=new A,O=new A;for(let P=0;P<e.length;P+=3)m(e[P+0],T),m(e[P+1],S),m(e[P+2],O),l(T,S,O,R)}function l(R,T,S,O){const P=O+1,D=[];for(let L=0;L<=P;L++){D[L]=[];const b=R.clone().lerp(S,L/P),w=T.clone().lerp(S,L/P),I=P-L;for(let X=0;X<=I;X++)X===0&&L===P?D[L][X]=b:D[L][X]=b.clone().lerp(w,X/I)}for(let L=0;L<P;L++)for(let b=0;b<2*(P-L)-1;b++){const w=Math.floor(b/2);b%2===0?(u(D[L][w+1]),u(D[L+1][w]),u(D[L][w])):(u(D[L][w+1]),u(D[L+1][w+1]),u(D[L+1][w]))}}function c(R){const T=new A;for(let S=0;S<r.length;S+=3)T.x=r[S+0],T.y=r[S+1],T.z=r[S+2],T.normalize().multiplyScalar(R),r[S+0]=T.x,r[S+1]=T.y,r[S+2]=T.z}function d(){const R=new A;for(let T=0;T<r.length;T+=3){R.x=r[T+0],R.y=r[T+1],R.z=r[T+2];const S=_(R)/2/Math.PI+.5,O=g(R)/Math.PI+.5;a.push(S,1-O)}x(),p()}function p(){for(let R=0;R<a.length;R+=6){const T=a[R+0],S=a[R+2],O=a[R+4],P=Math.max(T,S,O),D=Math.min(T,S,O);P>.9&&D<.1&&(T<.2&&(a[R+0]+=1),S<.2&&(a[R+2]+=1),O<.2&&(a[R+4]+=1))}}function u(R){r.push(R.x,R.y,R.z)}function m(R,T){const S=R*3;T.x=t[S+0],T.y=t[S+1],T.z=t[S+2]}function x(){const R=new A,T=new A,S=new A,O=new A,P=new Rt,D=new Rt,L=new Rt;for(let b=0,w=0;b<r.length;b+=9,w+=6){R.set(r[b+0],r[b+1],r[b+2]),T.set(r[b+3],r[b+4],r[b+5]),S.set(r[b+6],r[b+7],r[b+8]),P.set(a[w+0],a[w+1]),D.set(a[w+2],a[w+3]),L.set(a[w+4],a[w+5]),O.copy(R).add(T).add(S).divideScalar(3);const I=_(O);M(P,w+0,R,I),M(D,w+2,T,I),M(L,w+4,S,I)}}function M(R,T,S,O){O<0&&R.x===1&&(a[T]=R.x-1),S.x===0&&S.z===0&&(a[T]=O/2/Math.PI+.5)}function _(R){return Math.atan2(R.z,-R.x)}function g(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new is(t.vertices,t.indices,t.radius,t.details)}}class ve extends is{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ve(t.radius,t.detail)}}class Pa extends is{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Pa(t.radius,t.detail)}}class Da extends is{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Da(t.radius,t.detail)}}class ji extends Ie{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],d=[];let p=t;const u=(e-t)/s,m=new A,x=new Rt;for(let M=0;M<=s;M++){for(let _=0;_<=i;_++){const g=r+_/i*a;m.x=p*Math.cos(g),m.y=p*Math.sin(g),l.push(m.x,m.y,m.z),c.push(0,0,1),x.x=(m.x/e+1)/2,x.y=(m.y/e+1)/2,d.push(x.x,x.y)}p+=u}for(let M=0;M<s;M++){const _=M*(i+1);for(let g=0;g<i;g++){const R=g+_,T=R,S=R+i+1,O=R+i+2,P=R+1;o.push(T,S,P),o.push(S,O,P)}}this.setIndex(o),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(c,3)),this.setAttribute("uv",new fe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ji(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class xe extends Ie{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const d=[],p=new A,u=new A,m=[],x=[],M=[],_=[];for(let g=0;g<=i;g++){const R=[],T=g/i;let S=0;g===0&&a===0?S=.5/e:g===i&&l===Math.PI&&(S=-.5/e);for(let O=0;O<=e;O++){const P=O/e;p.x=-t*Math.cos(s+P*r)*Math.sin(a+T*o),p.y=t*Math.cos(a+T*o),p.z=t*Math.sin(s+P*r)*Math.sin(a+T*o),x.push(p.x,p.y,p.z),u.copy(p).normalize(),M.push(u.x,u.y,u.z),_.push(P+S,1-T),R.push(c++)}d.push(R)}for(let g=0;g<i;g++)for(let R=0;R<e;R++){const T=d[g][R+1],S=d[g][R],O=d[g+1][R],P=d[g+1][R+1];(g!==0||a>0)&&m.push(T,S,P),(g!==i-1||l<Math.PI)&&m.push(S,O,P)}this.setIndex(m),this.setAttribute("position",new fe(x,3)),this.setAttribute("normal",new fe(M,3)),this.setAttribute("uv",new fe(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class jt extends Ie{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],l=[],c=[],d=new A,p=new A,u=new A;for(let m=0;m<=i;m++)for(let x=0;x<=s;x++){const M=x/s*r,_=m/i*Math.PI*2;p.x=(t+e*Math.cos(_))*Math.cos(M),p.y=(t+e*Math.cos(_))*Math.sin(M),p.z=e*Math.sin(_),o.push(p.x,p.y,p.z),d.x=t*Math.cos(M),d.y=t*Math.sin(M),u.subVectors(p,d).normalize(),l.push(u.x,u.y,u.z),c.push(x/s),c.push(m/i)}for(let m=1;m<=i;m++)for(let x=1;x<=s;x++){const M=(s+1)*m+x-1,_=(s+1)*(m-1)+x-1,g=(s+1)*(m-1)+x,R=(s+1)*m+x;a.push(M,_,R),a.push(_,g,R)}this.setIndex(a),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(l,3)),this.setAttribute("uv",new fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jt(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ti extends Ie{constructor(t=new zc(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new A,l=new A,c=new Rt;let d=new A;const p=[],u=[],m=[],x=[];M(),this.setIndex(x),this.setAttribute("position",new fe(p,3)),this.setAttribute("normal",new fe(u,3)),this.setAttribute("uv",new fe(m,2));function M(){for(let T=0;T<e;T++)_(T);_(r===!1?e:0),R(),g()}function _(T){d=t.getPointAt(T/e,d);const S=a.normals[T],O=a.binormals[T];for(let P=0;P<=s;P++){const D=P/s*Math.PI*2,L=Math.sin(D),b=-Math.cos(D);l.x=b*S.x+L*O.x,l.y=b*S.y+L*O.y,l.z=b*S.z+L*O.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=d.x+i*l.x,o.y=d.y+i*l.y,o.z=d.z+i*l.z,p.push(o.x,o.y,o.z)}}function g(){for(let T=1;T<=e;T++)for(let S=1;S<=s;S++){const O=(s+1)*(T-1)+(S-1),P=(s+1)*T+(S-1),D=(s+1)*T+S,L=(s+1)*(T-1)+S;x.push(O,P,L),x.push(P,D,L)}}function R(){for(let T=0;T<=e;T++)for(let S=0;S<=s;S++)c.x=T/e,c.y=S/s,m.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ti(new o0[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class zt extends Ii{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mc,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ia extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class c0 extends Ia{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ar=new ce,Ko=new A,Jo=new A;class l0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ta,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Ko.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ko),Jo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jo),e.updateMatrixWorld(),Ar.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ar),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ar)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class d0 extends l0{constructor(){super(new Cc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class h0 extends Ia{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new d0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class u0 extends Ia{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class x1{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Zo();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Zo(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_a}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_a);function Ds(n,t){const e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function La(n,t){const e=Math.floor(n),i=Math.floor(t),s=n-e,r=t-i,a=s*s*(3-2*s),o=r*r*(3-2*r),l=Ds(e,i),c=Ds(e+1,i),d=Ds(e,i+1),p=Ds(e+1,i+1);return l+(c-l)*a+(d-l)*o+(l-c-d+p)*a*o}function $o(n,t,e=4){let i=0,s=.5,r=1;for(let a=0;a<e;a++)i+=La(n*r,t*r)*s,r*=2,s*=.5;return i}function Gs(n,t,e){const i=Math.min(1,Math.max(0,(e-n)/(t-n)));return i*i*(3-2*i)}function f0(n,t,e){return n+(t-n)*e}const Vs=640,jo=180,p0=[[180,-90,46,8],[-210,150,30,5.5],[95,230,18,3.2],[-70,-250,36,6],[250,80,14,2.4],[-160,-40,12,2]];function m0(n,t,e,i,s,r){const a=n-e,o=t-i,l=Math.sqrt(a*a+o*o);if(l>s)return 0;const c=l/s,d=-r*(1-c*c),p=r*.28*Math.exp(-((c-.86)*(c-.86))/.018);return d+p}const g0=[[0,0,48,100],[52,24,18,36],[22,82,14,28],[80,-44,40,60],[112,-83,18,30],[-32,-98,16,26],[-88,-188,24,42],[-68,-16,16,28],[22,-112,12,20],[-6,-108,18,32],[36,72,16,32],[-24,44,16,32],[-32,-148,12,22],[-64,-90,10,18],[-50,-100,16,28],[38,-126,12,20],[-60,-148,8,14],[-64,-118,8,14],[-18,-88,10,18],[68,-10,12,20],[-22,-88,8,14],[-48,68,16,32],[78,56,16,32],[-13,-134,16,28],[8,-142,12,20],[135,-40,20,34],[68,6,12,20],[-28,-138,8,14],[-36,-74,14,24],[2,-22,8,14],[-50,-72,10,16],[10,-124,12,20],[20,8,12,20],[-16,136,28,48],[158,-62,22,36],[158,-28,10,16],[-96,-16,16,26],[-78,-172,12,20],[66,-74,14,22],[18,-152,12,18],[-20,-100,10,16],[-8,-162,10,16],[8,-98,10,16],[48,-70,10,16],[-68,12,12,18],[22,-80,10,16],[52,-112,12,18],[-90,-158,10,16],[8,-78,10,16],[-8,-88,10,16],[-96,4,10,16],[142,-62,8,14],[28,-140,10,16],[-90,-148,8,14],[12,18,8,12],[36,8,10,16],[36,-6,10,16],[-50,4,10,16],[-58,-142,10,16],[-32,-22,10,16],[66,-90,10,16],[22,-98,10,16],[172,-48,10,16],[38,-104,10,16],[24,-128,8,14],[-80,20,10,16],[6,148,8,14],[-64,80,10,16],[-80,32,10,16],[100,-22,8,14],[-22,-56,10,16],[-124,-188,12,20],[-38,16,10,16],[70,-112,12,18],[16,48,8,14],[-58,-36,12,16],[50,4,10,18],[-40,-168,12,16],[82,-90,10,14],[4,-148,10,14],[148,-40,10,14],[124,-70,10,14],[96,-44,10,14],[-84,8,10,14],[16,-86,10,14]];function H(n,t){let e=0;e+=($o(n*.0038,t*.0038,5)-.45)*16,e+=($o(n*.018,t*.018,3)-.5)*2.8,e+=(La(n*.07,t*.07)-.5)*.45;for(const[i,s,r,a]of p0)e+=m0(n,t,i,s,r,a);for(const[i,s,r,a]of g0){const o=Gs(a,r,Math.hypot(n-i,t-s));e=f0(e,.35+e*.12,o)}return e}function _0(n,t,e,i){const s=new Vt(9059108),r=new Vt(12085818),a=new Vt(12880469),o=new Vt(4858904),l=Gs(-4,8,e),c=s.clone().lerp(r,l).lerp(a,Gs(6,14,e)*.35);i>.45&&c.lerp(o,Math.min(.55,(i-.45)*1.4));const d=La(n*.11,t*.11);c.offsetHSL(0,(d-.5)*.08,(d-.5)*.06);const p=x0(n,t);return p>0&&c.lerp(new Vt(5911332),p*.85),c}function x0(n,t){const e=[{ax:0,az:18,bx:0,bz:-124},{ax:0,az:-40,bx:84,bz:-42},{ax:0,az:-40,bx:-68,bz:-16},{ax:0,az:-90,bx:-55,bz:-150},{ax:18,az:-70,bx:52,bz:-88},{ax:12,az:8,bx:50,bz:22},{ax:16,az:28,bx:22,bz:78},{ax:-58,az:-158,bx:-90,bz:-190},{ax:-14,az:-104,bx:-32,bz:-98},{ax:84,az:-42,bx:112,bz:-83},{ax:0,az:-108,bx:22,bz:-112},{ax:22,az:-112,bx:48,bz:-86},{ax:-6,az:-116,bx:-18,bz:-138},{ax:0,az:8,bx:-15,bz:-8},{ax:16,az:28,bx:36,bz:72},{ax:0,az:18,bx:-24,bz:44},{ax:-58,az:-158,bx:-64,bz:-90},{ax:-64,az:-90,bx:-68,bz:-16},{ax:-18,az:-138,bx:-32,bz:-148},{ax:-32,az:-98,bx:-46,bz:-100},{ax:22,az:-112,bx:38,bz:-126},{ax:-58,az:-158,bx:-60,bz:-148},{ax:-64,az:-118,bx:-18,bz:-88},{ax:84,az:-42,bx:68,bz:-10},{ax:-6,az:-108,bx:-18,bz:-88},{ax:0,az:18,bx:-48,bz:68},{ax:16,az:28,bx:78,bz:56},{ax:-6,az:-116,bx:-13,bz:-134},{ax:38,az:-126,bx:8,bz:-142},{ax:-13,az:-134,bx:8,bz:-142},{ax:112,az:-83,bx:135,bz:-40},{ax:68,az:-10,bx:68,bz:6},{ax:-13,az:-134,bx:-28,bz:-138},{ax:-46,az:-108,bx:-20,bz:-132},{ax:-6,az:-108,bx:-6,bz:-132},{ax:-6,az:-96,bx:2,bz:-22},{ax:-32,az:-98,bx:-36,bz:-74},{ax:-40,az:-76,bx:-32,bz:-98},{ax:-40,az:-76,bx:-50,bz:-72},{ax:-6,az:-132,bx:10,bz:-124},{ax:10,az:-124,bx:8,bz:-142},{ax:0,az:8,bx:20,bz:8},{ax:22,az:82,bx:-16,bz:136},{ax:0,az:32,bx:-16,bz:136},{ax:135,az:-40,bx:158,bz:-62},{ax:-68,az:-16,bx:-96,bz:-16},{ax:-58,az:-158,bx:-78,bz:-172},{ax:48,az:-86,bx:66,bz:-74},{ax:8,az:-142,bx:18,bz:-152},{ax:-32,az:-148,bx:-8,bz:-162},{ax:-6,az:-108,bx:8,bz:-98},{ax:22,az:-112,bx:8,bz:-98},{ax:48,az:-86,bx:48,bz:-70},{ax:-68,az:-16,bx:-68,bz:12},{ax:-36,az:-74,bx:22,bz:-80},{ax:48,az:-86,bx:22,bz:-80},{ax:22,az:-112,bx:52,bz:-112},{ax:38,az:-126,bx:52,bz:-112},{ax:-78,az:-172,bx:-90,bz:-158},{ax:8,az:-98,bx:8,bz:-78},{ax:22,az:-80,bx:8,bz:-78},{ax:8,az:-98,bx:-8,bz:-88},{ax:-22,az:-88,bx:-8,bz:-88},{ax:-96,az:-16,bx:-96,bz:4},{ax:158,az:-62,bx:142,bz:-62},{ax:8,az:-142,bx:28,bz:-140},{ax:18,az:-152,bx:28,bz:-140},{ax:-90,az:-158,bx:-90,bz:-148},{ax:5,az:16,bx:12,bz:18},{ax:20,az:8,bx:36,bz:8},{ax:36,az:8,bx:36,bz:-6},{ax:-68,az:4,bx:-50,bz:4},{ax:-58,az:-158,bx:-58,bz:-142},{ax:-15,az:-8,bx:-32,bz:-22},{ax:66,az:-74,bx:66,bz:-90},{ax:8,az:-98,bx:22,bz:-98},{ax:158,az:-62,bx:172,bz:-48},{ax:22,az:-112,bx:38,bz:-104},{ax:10,az:-124,bx:24,bz:-128},{ax:-68,az:12,bx:-80,bz:20},{ax:-16,az:136,bx:6,bz:148},{ax:-48,az:68,bx:-64,bz:80},{ax:-80,az:20,bx:-80,bz:32},{ax:135,az:-40,bx:100,bz:-22},{ax:100,az:-22,bx:68,bz:-10},{ax:-36,az:-74,bx:-22,bz:-56},{ax:-90,az:-158,bx:-124,bz:-188},{ax:-50,az:4,bx:-38,bz:16},{ax:52,az:-112,bx:70,bz:-112},{ax:22,az:82,bx:16,bz:48},{ax:-58,az:-142,bx:-58,bz:-36},{ax:-58,az:-36,bx:-68,bz:-16},{ax:36,az:8,bx:50,bz:4},{ax:-58,az:-158,bx:-40,bz:-168},{ax:66,az:-90,bx:82,bz:-90},{ax:-8,az:-162,bx:4,bz:-148},{ax:135,az:-40,bx:148,bz:-40},{ax:112,az:-83,bx:124,bz:-70},{ax:82,az:-44,bx:96,bz:-44},{ax:-68,az:12,bx:-84,bz:8},{ax:-8,az:-88,bx:16,bz:-86}];let i=0;for(const s of e){const r=s.bx-s.ax,a=s.bz-s.az,o=r*r+a*a;let l=((n-s.ax)*r+(t-s.az)*a)/o;l=Math.min(1,Math.max(0,l));const c=s.ax+r*l,d=s.az+a*l,p=Math.hypot(n-c,t-d);i=Math.max(i,Gs(5.4,1.6,p))}return i}function v0(){const n=new Li(Vs,Vs,jo,jo);n.rotateX(-Math.PI/2);const t=n.attributes.position,e=new Float32Array(t.count*3);for(let a=0;a<t.count;a++){const o=t.getX(a),l=t.getZ(a),c=H(o,l);t.setY(a,c)}n.computeVertexNormals();const i=n.attributes.normal;for(let a=0;a<t.count;a++){const o=1-Math.abs(i.getY(a)),l=_0(t.getX(a),t.getZ(a),t.getY(a),o);e[a*3]=l.r,e[a*3+1]=l.g,e[a*3+2]=l.b}n.setAttribute("color",new He(e,3));const s=new zt({vertexColors:!0,roughness:.94,metalness:.02,flatShading:!1}),r=new oe(n,s);return r.receiveShadow=!0,r.name="terrain",r}function M0(){const n=new Q;n.name="rocks";const t=[new ve(1,0),new Pa(1,0),new Da(1,0)],e=[new zt({color:8011048,roughness:.95,flatShading:!0}),new zt({color:6040604,roughness:.92,flatShading:!0}),new zt({color:9260592,roughness:.9,flatShading:!0})],i=new Me,s=[220,160,90];for(let r=0;r<3;r++){const a=new Wp(t[r],e[r],s[r]);a.castShadow=!0,a.receiveShadow=!0;let o=0,l=0;for(;o<s[r]&&l<s[r]*8;){l++;const c=(Pn(o,r,1)-.5)*Vs*.92,d=(Pn(o,r,2)-.5)*Vs*.92;if(Math.hypot(c,d)<42||Math.hypot(c-52,d-24)<22||Math.hypot(c-22,d-82)<18||Math.hypot(c-80,d+44)<44||Math.hypot(c-112,d+83)<22||Math.hypot(c+32,d+98)<20||Math.hypot(c+88,d+188)<30||Math.hypot(c-22,d+112)<16||Math.hypot(c+68,d+16)<22||Math.hypot(c-36,d-72)<20||Math.hypot(c+24,d-44)<20||Math.hypot(c+32,d+148)<16||Math.hypot(c+64,d+90)<14||Math.hypot(c+50,d+100)<22||Math.hypot(c-38,d+126)<16||Math.hypot(c+18,d+88)<14||Math.hypot(c-68,d+10)<16||Math.hypot(c+60,d+148)<12||Math.hypot(c+64,d+118)<12||Math.hypot(c+48,d-68)<20||Math.hypot(c-78,d-56)<20||Math.hypot(c+13,d+134)<20||Math.hypot(c-8,d+142)<16||Math.hypot(c-135,d+40)<24||Math.hypot(c-68,d-6)<16||Math.hypot(c+28,d+138)<12||Math.hypot(c+36,d+74)<18||Math.hypot(c-2,d+22)<12||Math.hypot(c+50,d+72)<14||Math.hypot(c-10,d+124)<16||Math.hypot(c-20,d-8)<16||Math.hypot(c+16,d-136)<32||Math.hypot(c-158,d+62)<24||Math.hypot(c+96,d+16)<20||Math.hypot(c+78,d+172)<16||Math.hypot(c-66,d+74)<16||Math.hypot(c-18,d+152)<14||Math.hypot(c+20,d+100)<14||Math.hypot(c+8,d+162)<14||Math.hypot(c-8,d+98)<14||Math.hypot(c-48,d+70)<14||Math.hypot(c+68,d-12)<16||Math.hypot(c-22,d+80)<14||Math.hypot(c-52,d+112)<16||Math.hypot(c+90,d+158)<14||Math.hypot(c-8,d+78)<14||Math.hypot(c+8,d+88)<14||Math.hypot(c+96,d-4)<14||Math.hypot(c-142,d+62)<14||Math.hypot(c-28,d+140)<14||Math.hypot(c+90,d+148)<12||Math.hypot(c-12,d-18)<12||Math.hypot(c-36,d-8)<14||Math.hypot(c-36,d+6)<14||Math.hypot(c+50,d-4)<14||Math.hypot(c+58,d+142)<14||Math.hypot(c+32,d+22)<14||Math.hypot(c-66,d+90)<14||Math.hypot(c-22,d+98)<14||Math.hypot(c-172,d+48)<14||Math.hypot(c-38,d+104)<14||Math.hypot(c-24,d+128)<12||Math.hypot(c+80,d-20)<14||Math.hypot(c-6,d-148)<12||Math.hypot(c+64,d-80)<14||Math.hypot(c+80,d-32)<14||Math.hypot(c-100,d+22)<12||Math.hypot(c+22,d+56)<14||Math.hypot(c+124,d+188)<16||Math.hypot(c+38,d-16)<14||Math.hypot(c-70,d+112)<16||Math.hypot(c-16,d-48)<12||Math.hypot(c+58,d+36)<14||Math.hypot(c-50,d-4)<14||Math.hypot(c+40,d+168)<14||Math.hypot(c-82,d+90)<14||Math.hypot(c-4,d+148)<14||Math.hypot(c-148,d+40)<14||Math.hypot(c-124,d+70)<14||Math.hypot(c-96,d+44)<14||Math.hypot(c+84,d-8)<14||Math.hypot(c-16,d+86)<14)continue;const p=H(c,d),u=.35+Pn(o,r,3)*(r===2?2.8:1.4);i.position.set(c,p+u*.25,d),i.rotation.set(Pn(o,r,4)*6,Pn(o,r,5)*6,Pn(o,r,6)*6),i.scale.set(u,u*(.6+Pn(o,r,7)*.7),u*(.7+Pn(o,r,8)*.5)),i.updateMatrix(),a.setMatrixAt(o,i.matrix),o++}a.count=o,n.add(a)}return n}function Pn(n,t,e){const i=Math.sin(n*12.9898+t*78.233+e*45.164)*43758.5453;return i-Math.floor(i)}const y0=`
varying vec3 vWorld;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWorld = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}
`,S0=`
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
`;function w0(n){const t=new xe(900,32,20),e=new Mn({vertexShader:y0,fragmentShader:S0,uniforms:{uSunDir:{value:n.clone().normalize()}},side:De,depthWrite:!1}),i=new oe(t,e);return i.name="sky",i}function E0(n){const t=new Q,e=n.clone().normalize(),i=new h0(16769456,2.15);i.position.copy(e.clone().multiplyScalar(180)),i.castShadow=!0,i.shadow.mapSize.set(1536,1536),i.shadow.camera.near=10,i.shadow.camera.far=420,i.shadow.camera.left=-130,i.shadow.camera.right=130,i.shadow.camera.top=130,i.shadow.camera.bottom=-130,i.shadow.bias=-8e-4,t.add(i);const s=new c0(14727304,6959128,.55);t.add(s);const r=new u0(12611648,.16);t.add(r);const a=new oe(new xe(7,16,16),new ba({color:16773572}));return a.position.copy(e.clone().multiplyScalar(420)),t.add(a),t.name="sun",t}function b0(){const n=new Q;n.name="mountains";const t=new zt({color:7024156,roughness:1,flatShading:!0}),e=[[0,-300,18,70],[80,-310,14,52],[-90,-305,16,60],[220,-280,12,40],[-240,-270,13,48],[300,-40,15,55],[305,80,11,38],[-310,20,16,62],[-300,140,12,44],[40,310,17,58],[-70,300,13,46],[160,290,10,36]];for(const[i,s,r,a]of e){const o=new ns(r,a,6),l=new oe(o,t),c=H(i,s)+a*.35;l.position.set(i,c,s),l.rotation.y=(i+s)*.01,n.add(l)}return n}function T0(){const t=new Float32Array(2100);for(let r=0;r<700;r++)t[r*3]=(Math.random()-.5)*220,t[r*3+1]=1+Math.random()*18,t[r*3+2]=(Math.random()-.5)*220;const e=new Ie;e.setAttribute("position",new He(t,3));const i=new Nc({color:13934698,size:.18,transparent:!0,opacity:.35,depthWrite:!1}),s=new Xp(e,i);return s.name="dust",s}function A0(n){n.fog=new Ra(12880472,.00155),n.background=new Vt(12880472)}const h={steel:new zt({color:13225425,metalness:.88,roughness:.28}),steelDark:new zt({color:9146518,metalness:.82,roughness:.38}),tiles:new zt({color:1710620,metalness:.15,roughness:.72}),soot:new zt({color:2763308,metalness:.4,roughness:.55}),pad:new zt({color:7168600,metalness:.08,roughness:.88}),padRing:new zt({color:4866876,metalness:.1,roughness:.8}),solar:new zt({color:727603,metalness:.55,roughness:.22}),solarFrame:new zt({color:10133670,metalness:.7,roughness:.35}),tankCh4:new zt({color:12868132,metalness:.35,roughness:.45}),tankO2:new zt({color:14212579,metalness:.4,roughness:.4}),hab:new zt({color:13616824,metalness:.15,roughness:.62}),habDark:new zt({color:6972508,metalness:.2,roughness:.55}),glass:new zt({color:8963232,metalness:.1,roughness:.18,transparent:!0,opacity:.42,depthWrite:!1}),plant:new zt({color:4160056,roughness:.85}),rover:new zt({color:12106944,metalness:.55,roughness:.4}),roverDark:new zt({color:3356218,metalness:.4,roughness:.5}),crate:new zt({color:9080724,metalness:.45,roughness:.5}),ice:new zt({color:14083823,metalness:.05,roughness:.35}),rust:new zt({color:8011560,roughness:.9}),glowWarm:new zt({color:16761994,emissive:16751178,emissiveIntensity:.85,roughness:.4}),glowPad:new zt({color:16765056,emissive:16756800,emissiveIntensity:.7}),concrete:new zt({color:9076852,roughness:.92}),lattice:new zt({color:10133668,metalness:.7,roughness:.4}),graded:new zt({color:6968134,roughness:.94,metalness:.04}),pipe:new zt({color:8030868,metalness:.55,roughness:.4}),cable:new zt({color:2762274,metalness:.35,roughness:.55}),robot:new zt({color:13159632,metalness:.62,roughness:.38}),flagIce:new zt({color:12966116,roughness:.72,metalness:.04}),flagDeposit:new zt({color:12081704,roughness:.8,metalness:.06}),track:new zt({color:4006936,roughness:.97}),roadBed:new zt({color:6044202,roughness:.97,metalness:.02}),soil:new zt({color:4861468,roughness:.96}),plantLeaf:new zt({color:3107378,roughness:.88}),dish:new zt({color:14210252,metalness:.38,roughness:.42}),suit:new zt({color:15131352,metalness:.18,roughness:.55}),suitDark:new zt({color:6052438,metalness:.35,roughness:.5}),visor:new zt({color:12886090,metalness:.75,roughness:.18,emissive:3811336,emissiveIntensity:.28}),battery:new zt({color:3817026,metalness:.48,roughness:.48})};function R0(n,t="#1c120c",e="#f3e2cc"){const i=document.createElement("canvas");i.width=512,i.height=128;const s=i.getContext("2d");s.fillStyle=t,s.fillRect(0,0,512,128),s.strokeStyle=e,s.lineWidth=6,s.strokeRect(10,10,492,108),s.fillStyle=e;const r=n.length>12?36:n.length>8?44:n.length>5?54:64;s.font=`bold ${r}px sans-serif`,s.textAlign="center",s.textBaseline="middle",s.fillText(n,256,68);const a=new qp(i);return a.colorSpace=Fe,a}function f(n,t,e,i,s,r=0,a=0,o=0){const l=new oe(n,t);return l.position.set(e,i,s),l.rotation.set(r,a,o),l.castShadow=!0,l.receiveShadow=!0,l}function We(n,t,e=0){return[n,H(n,t)+e,t]}function U(n,t,e,i,s,r,a,o,l=0){const c=new zt({map:R0(n,t,e),side:nn,roughness:.55,metalness:.08}),d=new oe(new Li(i,s),c);return d.position.set(r,a,o),d.rotation.y=l,d.castShadow=!1,d}function At(n,t,e,i=0,s=1){const r=H(t,e)+.85*s;n.add(f(new v(1.7*s,1.5*s,1.7*s),h.crate,t,r,e,0,i,0)),n.add(f(new v(1.78*s,.08,1.78*s),h.steelDark,t,r+.78*s,e,0,i,0))}function C0(){const n=new Q;n.name="settlement";const t=[],e=[];n.add(qn(0,0,{finished:!0}));const i=_i(0,0,{name:"starship",crewHab:!0});n.add(i),um(t),e.push({id:"starship",name:"Crew hab Starship",position:new A(0,18,0)}),e.push({id:"eva",name:"EVA / airlock",position:new A(2,3,12)});const s=Hm();n.add(s),t.push({type:"box",x:12,z:18,w:6,d:3}),e.push({id:"evarack",name:"EVA suit rack",position:new A(12,3,18)}),n.add(qn(52,24,{finished:!1}));const r=_i(52,24,{name:"cargo-starship",cargoOpen:!0});n.add(r),t.push({type:"cyl",x:52,z:24,r:7.4}),e.push({id:"cargo",name:"Cargo Starship",position:new A(52,18,24)}),n.add(qn(36,72,{finished:!1}));const a=_i(36,72,{name:"cargo-3",cargoOpen:!0});n.add(a),t.push({type:"cyl",x:36,z:72,r:7.4}),e.push({id:"cargo3",name:"Cargo Starship 3",position:new A(36,18,72)}),n.add(Qo(24,70)),n.add(qn(-24,44,{finished:!1}));const o=_i(-24,44,{name:"cargo-4"});n.add(o),t.push({type:"cyl",x:-24,z:44,r:7.4}),e.push({id:"cargo4",name:"Cargo Starship 4",position:new A(-24,18,44)}),n.add(qn(-48,68,{finished:!1}));const l=_i(-48,68,{name:"cargo-5",cargoOpen:!0});n.add(l),t.push({type:"cyl",x:-48,z:68,r:7.4}),e.push({id:"cargo5",name:"Window-2 cargo Starship",position:new A(-48,18,68)}),n.add(Qo(-60,66));const c=t1();n.add(c),t.push({type:"box",x:-64,z:80,w:8,d:8}),e.push({id:"crane",name:"Window-2 cargo crane",position:new A(-64,8,80)}),n.add(qn(78,56,{finished:!1}));const d=_i(78,56,{name:"cargo-6"});n.add(d),t.push({type:"cyl",x:78,z:56,r:7.4}),e.push({id:"cargo6",name:"Window-2 cargo Starship",position:new A(78,18,56)}),n.add(P0()),n.add(D0()),n.add(I0()),n.add(L0()),e.push({id:"prep",name:"Landing prep",position:new A(22,4,82)});const p=o1();n.add(p),t.push({type:"box",x:16,z:48,w:6,d:5});for(const[$t,be]of[[4,68],[4,50],[4,32]])t.push({type:"cyl",x:$t,z:be,r:.45});e.push({id:"aplights",name:"Pad approach lights",position:new A(16,4,48)}),n.add(ym()),t.push({type:"box",x:-38,z:148,w:10,d:8}),e.push({id:"pad2",name:"Next-window pad",position:new A(-16,6,136)}),e.push({id:"sinter",name:"Pad sinter rig",position:new A(-38,4,148)});const u=Qm();n.add(u),t.push({type:"box",x:6,z:148,w:6,d:5});for(const[$t,be]of[[2,154],[-34,154],[2,118],[-34,118]])t.push({type:"cyl",x:$t,z:be,r:.55});e.push({id:"beacons",name:"Pad 2 landing beacons",position:new A(6,5,148)});const m=U0();n.add(m),e.push({id:"solar",name:"Solar farm",position:new A(82,6,-44)});const x=m1();n.add(x),t.push({type:"box",x:96,z:-44,w:10,d:8}),e.push({id:"comb1",name:"Farm 1 combiner",position:new A(96,4,-44)});const M=V0();n.add(M),e.push({id:"solar2",name:"Solar field 2",position:new A(112,5,-83)});const _=p1();n.add(_),t.push({type:"box",x:124,z:-70,w:10,d:8}),e.push({id:"comb2",name:"Field 2 combiner",position:new A(124,4,-70)});const g=pm();n.add(g),e.push({id:"solar3",name:"Solar field 3",position:new A(135,5,-40)});const R=f1();n.add(R),t.push({type:"box",x:148,z:-40,w:10,d:8}),e.push({id:"comb3",name:"Field 3 combiner",position:new A(148,4,-40)});const T=wm();n.add(T),t.push({type:"box",x:158,z:-28,w:12,d:8}),e.push({id:"solar4",name:"Solar field 4",position:new A(158,5,-62)});const S=Bm();n.add(S),t.push({type:"box",x:142,z:-62,w:1.2,d:22}),e.push({id:"dustfence",name:"Solar dust fence",position:new A(142,4,-62)});const O=Jm();n.add(O),t.push({type:"box",x:172,z:-48,w:10,d:8}),e.push({id:"combiner",name:"Field 4 combiner",position:new A(172,4,-48)});const P=n1();n.add(P),t.push({type:"box",x:100,z:-22,w:8,d:6}),e.push({id:"trench",name:"Field 4 power trench",position:new A(100,3,-22)}),n.add(N0()),n.add(W0());const D=z0();n.add(D),t.push({type:"box",x:-68,z:-16,w:30,d:22}),e.push({id:"isru",name:"Sabatier ISRU",position:new A(-68,8,-16)});const L=Im();n.add(L),t.push({type:"box",x:-68,z:12,w:16,d:6}),e.push({id:"radiators",name:"ISRU radiators",position:new A(-68,5,12)});const b=g1();n.add(b),t.push({type:"box",x:-84,z:8,w:10,d:8}),e.push({id:"condense",name:"Sabatier condenser",position:new A(-84,5,8)});const w=Em();n.add(w),t.push({type:"box",x:-96,z:-16,w:18,d:18}),e.push({id:"isru2",name:"Sabatier train 2",position:new A(-96,8,-16)});const I=Om();n.add(I),t.push({type:"box",x:-96,z:4,w:12,d:8}),e.push({id:"co2cap",name:"CO2 intake 2",position:new A(-96,5,4)});const X=Wm();n.add(X),t.push({type:"box",x:-50,z:4,w:12,d:8}),e.push({id:"electro",name:"ISRU electrolysis",position:new A(-50,5,4)});const G=r1();n.add(G),t.push({type:"box",x:-38,z:16,w:10,d:8}),e.push({id:"h2tank",name:"H2 recycle tank",position:new A(-38,5,16)});const J=c1();n.add(J),t.push({type:"box",x:-58,z:-36,w:12,d:8}),e.push({id:"pwater",name:"ISRU process water",position:new A(-58,5,-36)});const nt=jm();n.add(nt),t.push({type:"box",x:-80,z:20,w:10,d:8}),e.push({id:"chiller",name:"CH4 liquefaction",position:new A(-80,5,20)});const Z=e1();n.add(Z),t.push({type:"box",x:-80,z:32,w:10,d:8}),e.push({id:"o2chill",name:"O2 liquefaction",position:new A(-80,5,32)}),n.add(F0());const rt=O0();n.add(rt),t.push({type:"box",x:-14,z:-104,w:14,d:8}),t.push({type:"box",x:2,z:-104,w:14,d:8}),t.push({type:"box",x:-6,z:-116,w:8,d:14}),e.push({id:"habs",name:"Hab cluster",position:new A(-6,5,-108)});const K=X0();n.add(K),t.push({type:"box",x:-32,z:-98,w:16,d:12}),e.push({id:"hab-kit",name:"Hab from cargo",position:new A(-32,5,-98)});const dt=q0();n.add(dt),t.push({type:"box",x:-46,z:-108,w:14,d:8}),t.push({type:"box",x:-46,z:-94,w:14,d:8}),t.push({type:"box",x:-58,z:-102,w:8,d:14}),e.push({id:"pressure",name:"Pressure habs",position:new A(-50,5,-100)});const gt=hm();n.add(gt),t.push({type:"box",x:-20,z:-132,w:14,d:8}),t.push({type:"box",x:-6,z:-132,w:14,d:8}),t.push({type:"box",x:-13,z:-142,w:8,d:14}),e.push({id:"hab3",name:"Hab street",position:new A(-13,5,-134)});const Tt=gm();n.add(Tt),xi(t,-33,-120,"x",28),xi(t,-6,-120,"z",24),xi(t,-4,-58,"z",70),t.push({type:"cyl",x:2,z:-22,r:1.6}),e.push({id:"corridors",name:"Pressurized neighborhood",position:new A(-20,4,-120)});const Wt=_m();n.add(Wt),t.push({type:"box",x:-30,z:-69,w:9,d:9}),t.push({type:"box",x:-38,z:-74.2,w:7,d:4.4}),xi(t,-36,-87,"z",24),xi(t,-45,-74,"x",12),e.push({id:"yard",name:"Construction yard",position:new A(-36,5,-74)}),e.push({id:"hab6",name:"Hab 6",position:new A(-40,5,-76)});const ie=i1();n.add(ie),t.push({type:"box",x:-22,z:-56,w:10,d:8}),e.push({id:"regolith",name:"Regolith stockpile",position:new A(-22,4,-56)});const j=xm();n.add(j),t.push({type:"box",x:-53,z:-72,w:6,d:7}),e.push({id:"med",name:"Crew ops / medical",position:new A(-50,5,-72)});const at=vm();n.add(at),t.push({type:"box",x:10,z:-124,w:14,d:10}),xi(t,2,-128,"x",10),e.push({id:"commons",name:"Crew commons / mess",position:new A(10,5,-124)});const Mt=B0();n.add(Mt),t.push({type:"box",x:22,z:-112,w:16,d:10}),t.push({type:"box",x:32,z:-112,w:8,d:6}),e.push({id:"greenhouse",name:"CO2 life support",position:new A(22,4,-112)});const ht=Um();n.add(ht),t.push({type:"box",x:52,z:-112,w:14,d:9}),e.push({id:"greenhouse2",name:"Greenhouse 2",position:new A(52,4,-112)});const Lt=a1();n.add(Lt),t.push({type:"box",x:70,z:-112,w:12,d:8}),e.push({id:"food3",name:"Grow vault 4",position:new A(70,4,-112)});const Nt=Zm();n.add(Nt),t.push({type:"box",x:38,z:-104,w:10,d:6}),e.push({id:"ghfilter",name:"Grow dust filter",position:new A(38,4,-104)});const Xt=Pm();n.add(Xt),t.push({type:"box",x:8,z:-98,w:12,d:8}),e.push({id:"eclss",name:"Hab ECLSS / CO2 scrub",position:new A(8,4,-98)});const de=Km();n.add(de),t.push({type:"box",x:22,z:-98,w:10,d:8}),e.push({id:"waste",name:"Waste / water recovery",position:new A(22,4,-98)});const Jt=zm();n.add(Jt),t.push({type:"box",x:-8,z:-88,w:10,d:8}),e.push({id:"o2buf",name:"Crew O2 buffer",position:new A(-8,4,-88)});const me=_1();n.add(me),t.push({type:"box",x:16,z:-86,w:10,d:8}),e.push({id:"dustlock",name:"Hab-street dust lock",position:new A(16,4,-86)});const B=om();n.add(B),t.push({type:"box",x:38,z:-126,w:14,d:9}),e.push({id:"food",name:"Food / grow vault",position:new A(38,4,-126)});const Le=fm();n.add(Le),t.push({type:"box",x:8,z:-142,w:14,d:9}),e.push({id:"food2",name:"Hab-street grow vault",position:new A(8,4,-142)});const qt=km();n.add(qt),t.push({type:"box",x:28,z:-140,w:10,d:8}),e.push({id:"condensate",name:"Condensate return",position:new A(28,4,-140)});const Yt=cm();n.add(Yt),t.push({type:"box",x:-60,z:-148,w:8,d:6}),t.push({type:"box",x:-64,z:-118,w:8,d:6}),t.push({type:"box",x:-18,z:-88,w:10,d:8}),e.push({id:"water",name:"Water loop",position:new A(-18,4,-88)});const Pt=Am();n.add(Pt),t.push({type:"box",x:18,z:-152,w:14,d:10}),e.push({id:"potable",name:"Potable water store",position:new A(18,4,-152)});const ae=Rm();n.add(ae),t.push({type:"box",x:-58,z:-108,w:10,d:3}),t.push({type:"box",x:-20,z:-100,w:18,d:3}),t.push({type:"box",x:22,z:-128,w:3,d:12}),e.push({id:"berms",name:"Hab dust berms",position:new A(-20,4,-100)});const Ct=lm();n.add(Ct),t.push({type:"box",x:68,z:-10,w:16,d:8}),t.push({type:"box",x:-22,z:-88,w:8,d:6}),e.push({id:"battery",name:"Night power store",position:new A(68,4,-10)});const C=mm();n.add(C),t.push({type:"box",x:68,z:6,w:16,d:8}),t.push({type:"box",x:-28,z:-138,w:8,d:6}),e.push({id:"battery2",name:"Crew night store",position:new A(68,4,6)});const y=Fm();n.add(y),t.push({type:"box",x:8,z:-78,w:12,d:7}),e.push({id:"battery3",name:"Hab night store 3",position:new A(8,4,-78)});const k=j0();n.add(k),t.push({type:"box",x:-15,z:-8,w:10,d:7}),e.push({id:"spaceport",name:"Methalox spaceport",position:new A(-15,4,-8)});const tt=Mm();n.add(tt),t.push({type:"box",x:20,z:8,w:16,d:12}),e.push({id:"stock",name:"Methalox stockpile",position:new A(20,4,8)});const it=Gm();n.add(it),t.push({type:"box",x:36,z:8,w:10,d:8}),e.push({id:"ch4buf",name:"CH4 return buffer",position:new A(36,4,8)});const $=Vm();n.add($),t.push({type:"box",x:36,z:-6,w:10,d:8}),e.push({id:"o2ret",name:"O2 return buffer",position:new A(36,4,-6)});const yt=l1();n.add(yt),t.push({type:"box",x:50,z:4,w:8,d:18}),e.push({id:"mxberm",name:"Methalox farm berm",position:new A(50,4,4)});const ut=qm();n.add(ut),t.push({type:"box",x:-32,z:-22,w:10,d:8}),e.push({id:"pump",name:"Methalox pump house",position:new A(-32,4,-22)}),n.add($0()),n.add(Q0()),n.add(Xi(16,14,-.4)),n.add(Xi(8,-62,1.2)),n.add(Xi(30,74,-.2)),n.add(Xi(-94,-182,.7)),n.add(gn(-90,-148,.4,{kind:"ice",loaded:!0})),e.push({id:"rover",name:"Haul rover",position:new A(8,2,-62)}),e.push({id:"haul2",name:"Ice haul at crush",position:new A(-90,3,-148)});const _t=am();n.add(_t),t.push({type:"box",x:-64,z:-90,w:10,d:8}),e.push({id:"haul",name:"Ice haul",position:new A(-64,3,-90)});const Zt=k0();n.add(Zt),t.push({type:"box",x:48,z:-86,w:16,d:12}),e.push({id:"workshop",name:"Workshop",position:new A(48,5,-86)});const st=Lm();n.add(st),t.push({type:"box",x:22,z:-80,w:12,d:8}),e.push({id:"depot",name:"Spare-parts depot",position:new A(22,4,-80)});const xt=Tm();n.add(xt),t.push({type:"box",x:66,z:-74,w:16,d:12}),e.push({id:"workshop2",name:"Workshop bay 2",position:new A(66,5,-74)});const Dt=Ym();n.add(Dt),t.push({type:"box",x:66,z:-90,w:10,d:8}),e.push({id:"press",name:"Sinter press",position:new A(66,4,-90)});const Ut=h1();n.add(Ut),t.push({type:"box",x:82,z:-90,w:10,d:8}),e.push({id:"crib",name:"Workshop tool crib",position:new A(82,4,-90)});const vt=Dm();n.add(vt),n.add(Xi(48,-70,.2)),e.push({id:"shelter",name:"Rover dust shelter",position:new A(48,4,-70)});for(const[$t,be]of[[42.8,-73.4],[53.2,-73.4],[42.8,-66.6],[53.2,-66.6]])t.push({type:"cyl",x:$t,z:be,r:.45});const Kt=H0();n.add(Kt),t.push({type:"cyl",x:-18,z:-138,r:3}),e.push({id:"comms",name:"Comms tower",position:new A(-18,16,-138)});const Bt=$m();n.add(Bt),t.push({type:"cyl",x:24,z:-128,r:2.2}),e.push({id:"weather",name:"Weather / dust mast",position:new A(24,12,-128)});const se=rm();n.add(se),t.push({type:"cyl",x:-32,z:-148,r:8.4}),t.push({type:"box",x:-40,z:-154,w:6,d:5}),e.push({id:"earth",name:"Earth dish · 12 min delay",position:new A(-32,12,-148)});const N=Cm();n.add(N),t.push({type:"cyl",x:-8,z:-162,r:6.2}),e.push({id:"earth2",name:"Backup Earth dish",position:new A(-8,10,-162)});const lt=u1();n.add(lt),t.push({type:"box",x:4,z:-148,w:10,d:8}),e.push({id:"commsbatt",name:"Comms night store",position:new A(4,4,-148)});const q=G0();n.add(q),t.push({type:"cyl",x:-58,z:-158,r:6}),e.push({id:"ice",name:"Ice mining rig",position:new A(-58,8,-158)});const et=d1();n.add(et),t.push({type:"box",x:-40,z:-168,w:10,d:12}),e.push({id:"ice1berm",name:"Ice mine 1 berm",position:new A(-40,4,-168)});const pt=bm();n.add(pt),t.push({type:"cyl",x:-78,z:-172,r:6}),e.push({id:"ice2",name:"Ice mine 2",position:new A(-78,8,-172)});const ft=Nm();n.add(ft),t.push({type:"box",x:-90,z:-158,w:12,d:10}),e.push({id:"ice-depot",name:"Ice crush depot",position:new A(-90,4,-158)});const Ot=Xm();n.add(Ot),t.push({type:"box",x:-58,z:-142,w:10,d:8}),e.push({id:"melt",name:"Ice melt still",position:new A(-58,5,-142)});const pe=Z0();n.add(pe),t.push({type:"cyl",x:-82,z:-176,r:2.4}),e.push({id:"survey",name:"Resource survey",position:new A(-88,5,-188)});const we=s1();return n.add(we),t.push({type:"cyl",x:-124,z:-188,r:2.4}),e.push({id:"survey2",name:"West ice survey",position:new A(-124,5,-188)}),n.add(Je(42,22,.6)),n.add(Je(39,26,-.4)),n.add(Je(26,78,2.2)),n.add(Je(26,68,.5)),n.add(Je(22,72,-.8)),n.add(Je(-80,-174,.8)),n.add(Je(-34,-92,-1.2)),n.add(Je(-28,-104,.3)),n.add(Je(16,-120,.6)),n.add(Je(70,-70,.4)),n.add(Je(-28,128,1.1)),n.add(J0()),dm(t),n.add(nm()),n.add(im()),n.add(sm()),{group:n,colliders:t,landmarks:e}}function qn(n,t,e={}){const i=new Q;i.name=e.finished?"pad":"cargo-pad";const s=H(n,t),r=e.finished?20:16,a=e.finished?h.pad:h.graded;if(i.add(f(new Y(r,r,.45,48),a,n,s+.15,t)),e.finished){i.add(f(new jt(r+.4,.55,8,48),h.padRing,n,s+.4,t,Math.PI/2,0,0)),i.add(f(new ji(7.5,8.1,40),h.padRing,n,s+.4,t,-Math.PI/2,0,0)),i.add(f(new ji(13,13.5,40),h.padRing,n,s+.4,t,-Math.PI/2,0,0));for(let c=0;c<12;c++){const d=c/12*Math.PI*2;i.add(f(new v(.35,.55,.35),h.glowPad,n+Math.cos(d)*19.2,s+.55,t+Math.sin(d)*19.2))}}else{i.add(f(new jt(r+.3,.4,8,36),h.padRing,n,s+.32,t,Math.PI/2,0,0));for(let c=0;c<8;c++){const d=c/8*Math.PI*2;i.add(f(new v(.28,.4,.28),h.glowPad,n+Math.cos(d)*(r-.6),s+.45,t+Math.sin(d)*(r-.6)))}}const o=e.finished?26:21,l=f(new jt(o,e.finished?2.2:1.8,8,40),h.rust,n,s-.4,t,Math.PI/2,0,0);return l.scale.set(1,.45,1),i.add(l),i}function _i(n=0,t=0,e={}){const i=new Q;i.name=e.name||"starship",i.position.set(n,0,t);const s=H(n,t)-3.1,r=36,a=4.4;i.add(f(new Y(a,a,r,28),h.steel,0,s+8+r/2,0));const o=f(new xe(a,24,16,0,Math.PI*2,0,Math.PI/2),h.steel,0,s+8+r,0);o.scale.set(1,1.55,1),i.add(o);const l=f(new Y(a+.04,a+.04,r*.72,20,1,!0,Math.PI*.55,Math.PI*.9),h.tiles,0,s+8+r*.38,0);i.add(l);const c=f(new Y(a+.15,a+.55,3.2,24),h.soot,0,s+6.4,0);i.add(c);for(let u=0;u<3;u++){const m=u/3*Math.PI*2;i.add(f(new Y(.55,1.15,2.2,12),h.soot,Math.cos(m)*1.5,s+4.6,Math.sin(m)*1.5))}const d=new v(1.1,7.2,3.6);i.add(f(d,h.steelDark,-a-.2,s+14,0,0,0,.18)),i.add(f(d,h.steelDark,a+.2,s+14,0,0,0,-.18));const p=new v(.45,4.2,2.4);i.add(f(p,h.steelDark,-a+.2,s+40,1.2,.15,0,.4)),i.add(f(p,h.steelDark,a-.2,s+40,1.2,.15,0,-.4));for(let u=0;u<6;u++){const m=u/6*Math.PI*2+.2,x=new Q,M=f(new v(.22,8.2,.22),h.steelDark,0,0,0,0,0,.72),_=f(new v(1.3,.18,.9),h.steel,3.4,-3.7,0);x.add(M,_),x.position.set(Math.cos(m)*3.2,s+7.6,Math.sin(m)*3.2),x.rotation.y=-m,i.add(x)}for(let u=0;u<5;u++)i.add(f(new v(.7,.35,.08),h.tiles,0,s+28+u*2.1,a+.05));if(i.add(f(new v(1.6,.12,.12),h.glowWarm,0,s+44.5,0)),e.cargoOpen){i.add(f(new v(2.4,6.2,3.4),h.soot,-a+.4,s+16.4,0)),i.add(f(new v(.12,6.4,3.6),h.steel,-a-2.1,s+16.6,2,0,1.15,0));const u=s+13.2,m=H(n,t)+.22,x=-a-.3,M=-a-12.4,_=Math.hypot(x-M,u-m),g=Math.atan2(u-m,x-M);i.add(f(new v(_,.16,3.1),h.steelDark,(x+M)/2,(u+m)/2,0,0,0,g)),i.add(f(new v(10.5,.18,.18),h.lattice,-7.2,s+22.5,0,0,0,.55)),i.add(f(new Y(.05,.05,7.2,6),h.cable,-12.2,s+16.2,0)),i.add(f(new v(1.5,1.3,1.5),h.crate,-12.2,s+12.4,0)),i.add(U("CARGO","#1a100c","#f0c089",3.4,.9,-a-.1,s+24,0,-Math.PI/2))}if(e.crewHab){const u=s+13;i.add(f(new Y(1.2,1.2,2.7,14),h.habDark,0,u,a+1.35,Math.PI/2,0,0)),i.add(f(new jt(1.22,.09,6,16),h.steel,0,u,a+.28)),i.add(f(new jt(1.22,.09,6,16),h.steel,0,u,a+2.55)),i.add(f(new v(1.05,1.75,.1),h.steelDark,0,u,a+2.72)),i.add(f(new v(3.4,.14,2.6),h.steelDark,0,u-1.28,a+2.9)),i.add(f(new v(.1,1.15,2.5),h.steel,-1.6,u-.65,a+2.9)),i.add(f(new v(.1,1.15,2.5),h.steel,1.6,u-.65,a+2.9));const m=u-1.28,x=H(n,t)+.28,M=a+3.6,_=a+13.2,g=11;for(let P=0;P<g;P++){const D=P/(g-1);i.add(f(new v(2.15,.12,.95),h.steelDark,0,m+(x-m)*D,M+(_-M)*D))}const R=Math.hypot(M-_,m-x),T=Math.atan2(m-x,_-M);i.add(f(new v(2.25,.08,R),h.steel,0,(m+x)/2-.12,(M+_)/2,T,0,0)),i.add(f(new v(.08,.85,R),h.steel,-1.12,(m+x)/2+.35,(M+_)/2,T,0,0)),i.add(f(new v(.08,.85,R),h.steel,1.12,(m+x)/2+.35,(M+_)/2,T,0,0));const S=_+1.55,O=H(n,t)+1.35;i.add(f(new Y(1.35,1.35,2.5,12),h.habDark,0,O,S)),i.add(f(new v(1.05,1.7,.1),h.steelDark,0,O+.05,S+1.4)),i.add(f(new jt(1.38,.07,6,14),h.steel,0,O+1.28,S,Math.PI/2,0,0)),i.add(f(new v(2.2,.12,2.2),h.steelDark,0,H(n,t)+.12,S));for(let P=0;P<5;P++)i.add(f(new v(.85,.48,.08),h.glowWarm,1.55,s+16.5+P*3.4,a+.06)),i.add(f(new v(.08,.48,.85),h.glowWarm,a+.06,s+16.5+P*3.4,-1.35));i.add(f(new Y(.55,.55,.2,12),h.steel,2.55,s+14.2,a+.04,Math.PI/2,0,0)),i.add(f(new jt(.52,.06,6,12),h.steelDark,2.55,s+14.2,a+.14)),i.add(U("CREW HAB","#1a100c","#f0c089",3.4,.85,0,u+2.55,a+2.35)),i.add(U("AIRLOCK","#1a100c","#f0c089",2.3,.55,1.85,u+.15,a+2.05,Math.PI/2))}return i}function P0(){const n=new Q;n.name="crates";const t=[[10,8,0],[12.2,8.4,.4],[10.4,10.6,1.6],[13.5,6.2,-.3],[-12,9,.5],[-14,7.2,2.1],[8.5,-11,0],[6.4,-12.5,1.1]];for(const[e,i,s]of t)At(n,e,i,s);return n}function D0(){const n=new Q;n.name="cargo-offload";const t=[[40,22,.2],[38.2,24.1,-.3],[41.4,26.2,.8],[36.5,21.4,.1],[37.8,27.6,1.4],[34.8,24.8,-.5],[39.2,19.6,.6],[35.4,19.2,.15]];for(const[r,a,o]of t)At(n,r,a,o);At(n,38.6,22.8,.1,1.15),At(n,33.2,20.4,.25,1.2),At(n,31.4,22.1,-.2,1.05);const[e,i,s]=We(36,23.5,.08);return n.add(f(new v(8.5,.12,4.2),h.steelDark,e,i,s,0,.15,0)),n.add(U("HAB KIT","#1a100c","#f0c089",2.6,.7,33.2,H(33.2,20.4)+2.5,20.4,.35)),n}function I0(){const n=new Q;n.name="approach";const t=[{fx:0,fz:118,tx:0,tz:32,n:7},{fx:52,fz:90,tx:52,tz:42,n:5},{fx:36,fz:128,tx:36,tz:90,n:4},{fx:-24,fz:92,tx:-24,tz:60,n:4},{fx:-48,fz:118,tx:-48,tz:86,n:4},{fx:78,fz:104,tx:78,tz:74,n:4},{fx:-16,fz:178,tx:-16,tz:154,n:5}];for(const e of t){const i=Math.atan2(e.tx-e.fx,e.tz-e.fz);for(let s=0;s<e.n;s++){const r=s/(e.n-1),a=e.fx+(e.tx-e.fx)*r,o=e.fz+(e.tz-e.fz)*r,l=H(a,o),c=new Q;c.add(f(new v(2.5,.16,.34),h.glowPad,-.75,0,0,0,.5,0)),c.add(f(new v(2.5,.16,.34),h.glowPad,.75,0,0,0,-.5,0)),c.position.set(a,l+.14,o),c.rotation.y=i,n.add(c)}}return n}function L0(){const n=new Q;n.name="prep-pad";const t=22,e=82,i=H(t,e);n.add(f(new Y(14,14,.28,36),h.graded,t,i+.08,e));const s=f(new jt(16.2,1.7,8,28,Math.PI*1.35),h.rust,t,i-.15,e,Math.PI/2,.5,0);s.scale.set(1,.42,1),n.add(s);for(let a=0;a<8;a++){const o=a/8*Math.PI*2+.2,l=t+Math.cos(o)*15.2,c=e+Math.sin(o)*15.2,d=H(l,c);n.add(f(new v(.08,1.7,.08),h.steel,l,d+.85,c)),n.add(f(new v(.28,.16,.06),h.glowPad,l,d+1.62,c,0,o,0))}const r=[[12,74],[30,88],[14,90]];for(const[a,o]of r){const l=f(new ve(2.2,0),h.rust,a,H(a,o)+.9,o);l.scale.set(1.2,.65,1.05),n.add(l)}return n.add(U("LANDING PREP","#1a100c","#f0c089",4.4,1,t+10.5,i+2.4,e+2,-.6)),n.add(f(new v(.12,2.4,.12),h.steelDark,t+10.5,i+1.2,e+2)),n}function U0(){const n=new Q;n.name="solar";const t=10,e=8;for(let a=0;a<t;a++)for(let o=0;o<e;o++){const l=58+a*5.4,c=-22-o*6.2,d=H(l,c),p=f(new v(.18,1.6,.18),h.solarFrame,l,d+.8,c),u=f(new v(4.6,.08,2.3),h.solar,l,d+1.55,c,-.55,.15,0),m=f(new v(4.75,.05,2.42),h.solarFrame,l,d+1.5,c,-.55,.15,0);n.add(p,u,m)}for(let a=0;a<5;a++){const o=58+a*5.4,l=-22-8*6.2,c=H(o,l);n.add(f(new v(.18,1.6,.18),h.solarFrame,o,c+.8,l)),a<2&&n.add(f(new v(4.6,.08,2.3),h.solar,o+1.1,c+.22,l+1.5,1.2,.25,0))}const[i,s,r]=We(54,-18,.7);return n.add(f(new v(2.2,1.4,1.4),h.habDark,i,s,r)),n.add(U("POWER","#111111","#f4e6c8",2,.55,i,s+.2,r+.75)),n}function N0(){const n=new Q;n.name="power-run";const t=54,e=-18,i=-54,s=-16,r=[],a=10;for(let o=0;o<=a;o++){const l=o/a,c=t+(i-t)*l,d=e+(s-e)*l,p=H(c,d);n.add(f(new Y(.09,.11,4.4,6),h.steelDark,c,p+2.2,d)),n.add(f(new v(1.15,.08,.08),h.steel,c,p+4.35,d)),r.push({x:c,y:p+4.32,z:d})}for(let o=0;o<r.length-1;o++){const l=r[o],c=r[o+1];for(const d of[-.38,.38]){const p=new Ni([new A(l.x,l.y,l.z+d),new A((l.x+c.x)/2,(l.y+c.y)/2-.75,(l.z+c.z)/2+d),new A(c.x,c.y,c.z+d)]),u=new oe(new ti(p,6,.035,4,!1),h.cable);u.castShadow=!1,n.add(u)}}return n}function F0(){const n=new Q;n.name="water-feed";const t=-58,e=-150,i=-68,s=-26,r=12,a=[];for(let c=0;c<=r;c++){const d=c/r,p=t+(i-t)*d,u=e+(s-e)*d,m=H(p,u)+1.15;a.push(new A(p,m,u)),c%2===0&&n.add(f(new v(.16,1.1,.16),h.steelDark,p,H(p,u)+.55,u))}const o=new Ni(a),l=new oe(new ti(o,24,.16,6,!1),h.pipe);return l.castShadow=!1,n.add(l),n}function z0(){const n=new Q;n.name="isru";const t=-68,e=-16,i=H(t,e);n.add(f(new v(30,.4,22),h.concrete,t,i+.15,e));const s=f(new Y(1.8,2,13,12),h.steelDark,t+4,i+6.8,e);n.add(s),n.add(f(new jt(2.5,.18,6,16),h.steel,t+4,i+10.2,e,Math.PI/2,0,0)),n.add(f(new jt(2.5,.18,6,16),h.steel,t+4,i+7.4,e,Math.PI/2,0,0)),n.add(U("SABATIER","#1a100c","#f0c089",5.2,1.15,t+6.1,i+8.2,e,Math.PI/2));const r=f(new Y(3,3,13,20),h.tankCh4,t-8,i+7.1,e+5.4,0,0,Math.PI/2),a=f(new Y(3,3,13,20),h.tankO2,t-8,i+7.1,e-5.2,0,0,Math.PI/2);n.add(r,a),n.add(U("CH4","#6a2208","#f4e6c8",3.6,1,t-1.2,i+7.1,e+5.4)),n.add(U("O2","#2a3340","#e8eef4",3.6,1,t-1.2,i+7.1,e-5.2)),n.add(f(new Y(2.2,2.2,7.2,16),h.pipe,t-4,i+4,e-10.4)),n.add(U("H2O","#1a2830","#d6e6ef",2.6,.75,t-4,i+5.6,e-8.1));const o=f(new ve(2.1,0),h.ice,t+1.5,i+1.1,e-10.2);return o.scale.set(1.15,.6,1),n.add(o),n.add(f(new Y(.55,.55,7.5,10),h.steel,t+10.5,i+4.1,e-5.4)),n.add(f(new Y(2.3,.7,2.6,14),h.steelDark,t+10.5,i+8.8,e-5.4)),n.add(f(new jt(2.05,.1,6,16),h.steel,t+10.5,i+10.15,e-5.4,Math.PI/2,0,0)),n.add(U("CO2","#1a100c","#f0c089",2.4,.7,t+10.5,i+5.8,e-3.2)),n.add(f(new v(4.2,3,3.2),h.habDark,t+10,i+1.8,e+4.2)),n.add(U("POWER","#111111","#f4e6c8",2.2,.55,t+10,i+2.6,e+5.9)),n.add(f(new Y(.16,.16,10,8),h.pipe,t+7.2,i+3.4,e-2.6,0,0,Math.PI/2)),n.add(f(new Y(.16,.16,9,8),h.pipe,t-1.5,i+3.6,e+2.4,0,0,Math.PI/2)),n.add(f(new Y(.16,.16,8.5,8),h.steel,t-1.5,i+3.6,e-2.2,0,0,Math.PI/2)),n.add(f(new Y(.14,.14,6.4,8),h.cable,t+12.2,i+3.8,e+1.2,0,0,Math.PI/2)),n}function O0(){const n=new Q;n.name="habs";const t=[[-14,-104,0],[2,-104,0],[-6,-116,1.57]];for(const[l,c,d]of t){const p=H(l,c),u=f(new Y(3.1,3.1,12,18),h.hab,l,p+3.2,c,0,0,Math.PI/2);u.rotation.y=d,n.add(u),n.add(f(new xe(3.1,14,10),h.hab,l+Math.cos(d)*6,p+3.2,c+Math.sin(d)*6)),n.add(f(new xe(3.1,14,10),h.hab,l-Math.cos(d)*6,p+3.2,c-Math.sin(d)*6));for(let m=-2;m<=2;m++){const x=l+Math.cos(d)*m*2,M=c+Math.sin(d)*m*2;n.add(f(new v(.9,.7,.08),h.glowWarm,x,p+3.3,M+(d===0?3.15:0)))}}const[e,i,s]=We(-6,-96,1.4);n.add(f(new Y(1.5,1.5,2.6,12),h.habDark,e,i,s)),n.add(f(new v(1.1,1.8,.12),h.steelDark,e,i+.1,s+1.5));const[r,a,o]=We(-6,-108,6.8);return n.add(f(new xe(4.4,18,12,0,Math.PI*2,0,Math.PI/2),h.hab,r,a,o)),n.add(U("HAB 1","#1a100c","#f0c089",2.6,.7,-6,H(-6,-96)+3.6,-94.4)),n}function B0(){const n=new Q;n.name="greenhouse";const t=22,e=-112,i=H(t,e);n.add(f(new v(15.2,.25,8.6),h.concrete,t,i+.1,e));const s=new oe(new Y(4.15,4.15,14.2,18,1,!1,0,Math.PI),h.glass);s.rotation.z=Math.PI/2,s.position.set(t,i+4.1,e),s.castShadow=!1,n.add(s),n.add(f(new v(14.2,.1,8.4),h.solarFrame,t,i+4.15,e));for(let l=-2;l<=2;l++)n.add(f(new jt(4.12,.055,6,16,Math.PI),h.solarFrame,t+l*2.7,i+4.1,e,0,Math.PI/2,0));for(let l=-2;l<=2;l++){n.add(f(new v(2.05,.26,6.6),h.soil,t+l*2.35,i+.36,e));for(let c=-2;c<=2;c++){const d=c%2===0?h.plant:h.plantLeaf;n.add(f(new v(1.45,.52,.82),d,t+l*2.35,i+.72,e+c*1.12)),n.add(f(new v(.55,.42,.4),h.plantLeaf,t+l*2.35+.2,i+1.05,e+c*1.12))}n.add(f(new v(1.7,.05,6.1),h.glowWarm,t+l*2.35,i+3.55,e))}n.add(f(new v(1.2,2,.15),h.habDark,t-7.1,i+1.2,e));const r=t+10.4,a=e,o=H(r,a);return n.add(f(new v(5.4,.2,4.6),h.concrete,r,o+.08,a)),n.add(f(new Y(.52,.52,5.4,10),h.steel,r+1.15,o+2.9,a-1.05)),n.add(f(new Y(1.75,.55,1.7,14),h.steelDark,r+1.15,o+6.2,a-1.05)),n.add(f(new jt(1.5,.08,6,14),h.steel,r+1.15,o+7.1,a-1.05,Math.PI/2,0,0)),n.add(U("CO2","#1a100c","#f0c089",1.9,.5,r+1.15,o+3.7,a+.35)),n.add(f(new v(2.5,1.85,1.9),h.habDark,r-.7,o+1.08,a+.95)),n.add(U("COMPRESS","#1a100c","#f0c089",2.35,.55,r-.7,o+1.55,a+1.95)),n.add(f(new Y(.14,.14,6.4,8),h.pipe,t+6.6,i+1.55,e,0,0,Math.PI/2)),n.add(f(new Y(.68,.68,2.35,12),h.tankO2,t-5.5,i+1.45,e+5.15)),n.add(U("O2","#2a3340","#e8eef4",1.35,.42,t-5.5,i+1.65,e+5.95)),n.add(U("LIFE SUPPORT","#1a100c","#f0c089",3.7,.7,t,i+5.55,e+.15)),n.add(U("COMPRESSED CO2","#1a100c","#d6b48a",3.5,.55,t,i+4.75,e+.15)),n}function Xi(n,t,e){const i=new Q;i.name="rover";const s=H(n,t);i.position.set(n,s,t),i.rotation.y=e,i.add(f(new v(3.4,1.1,2.1),h.rover,0,1.35,0)),i.add(f(new v(1.4,.7,1.5),h.roverDark,1.2,2.1,0)),i.add(f(new v(2.2,.08,1.6),h.solar,0,2,0)),i.add(f(new Y(.07,.07,2.1,6),h.steel,-.4,2.9,0)),i.add(f(new v(.25,.2,.25),h.roverDark,-.4,4,0));const r=new Y(.55,.55,.35,12),a=[[-1.2,.55,1.15],[.1,.55,1.15],[1.2,.55,1.15],[-1.2,.55,-1.15],[.1,.55,-1.15],[1.2,.55,-1.15]];for(const[o,l,c]of a)i.add(f(r,h.roverDark,o,l,c,Math.PI/2,0,0));return i}function Je(n,t,e){const i=new Q;i.name="optimus";const s=H(n,t);return i.position.set(n,s,t),i.rotation.y=e,i.add(f(new v(.42,.62,.24),h.robot,0,1.28,0)),i.add(f(new Y(.14,.15,.22,10),h.robot,0,1.72,0)),i.add(f(new v(.16,.08,.04),h.steelDark,0,1.74,.14)),i.add(f(new v(.12,.48,.12),h.robot,-.28,1.22,0)),i.add(f(new v(.12,.48,.12),h.robot,.28,1.22,0)),i.add(f(new v(.14,.62,.14),h.steelDark,-.1,.62,0)),i.add(f(new v(.14,.62,.14),h.steelDark,.1,.62,0)),i}function k0(){const n=new Q;n.name="workshop";const t=48,e=-86,i=H(t,e),s=f(new Y(6.2,6.2,16,16,1,!1,0,Math.PI),h.habDark,t,i+3.4,e);return s.rotation.z=Math.PI/2,n.add(s),n.add(f(new v(16,.3,10),h.concrete,t,i+.1,e)),n.add(f(new v(.2,4.2,6.5),h.steelDark,t-7.8,i+2.2,e)),n.add(f(new v(2.4,1.1,1.4),h.crate,t+2,i+.8,e+1.5)),n.add(f(new v(4.6,.16,.16),h.steel,t+1.2,i+.35,e-2.8)),n.add(f(new v(4.6,.16,.16),h.steel,t+1.2,i+.55,e-3.05)),n.add(U("WORKSHOP","#1a100c","#f0c089",3.6,.85,t,i+5.6,e+.2)),n}function H0(){const n=new Q;n.name="comms";const t=-18,e=-138,i=H(t,e);for(let r=0;r<8;r++)n.add(f(new v(.18,3.2,.18),h.lattice,t-.7,i+1.6+r*3,e-.7)),n.add(f(new v(.18,3.2,.18),h.lattice,t+.7,i+1.6+r*3,e-.7)),n.add(f(new v(.18,3.2,.18),h.lattice,t-.7,i+1.6+r*3,e+.7)),n.add(f(new v(.18,3.2,.18),h.lattice,t+.7,i+1.6+r*3,e+.7)),n.add(f(new v(1.6,.1,.1),h.lattice,t,i+3+r*3,e-.7)),n.add(f(new v(1.6,.1,.1),h.lattice,t,i+3+r*3,e+.7));const s=f(new xe(3.2,16,10,0,Math.PI*2,0,Math.PI/2.4),h.steel,t,i+26.5,e,-.7,.4,0);return n.add(s),n.add(f(new Y(.08,.08,2.2,6),h.steelDark,t+.4,i+27.4,e+1.1,.6,0,0)),n}function G0(){const n=new Q;n.name="ice-mine";const t=-58,e=-158,i=H(t,e);n.add(f(new v(8,.3,8),h.concrete,t,i+.1,e)),n.add(f(new v(.28,14,.28),h.lattice,t-2.2,i+7,e-2.2)),n.add(f(new v(.28,14,.28),h.lattice,t+2.2,i+7,e-2.2)),n.add(f(new v(.28,14,.28),h.lattice,t-2.2,i+7,e+2.2)),n.add(f(new v(.28,14,.28),h.lattice,t+2.2,i+7,e+2.2)),n.add(f(new v(5.2,.25,5.2),h.steelDark,t,i+14.2,e)),n.add(f(new Y(.35,.55,9,10),h.steel,t,i+5,e)),n.add(f(new ns(.7,1.6,8),h.soot,t,i+.9,e));const s=f(new ve(3.4,0),h.ice,t+7.5,i+1.6,e+1.2);return s.scale.set(1.3,.7,1.1),n.add(s),n.add(f(new v(6,.35,1.1),h.steelDark,t+3.4,i+1.4,e,0,0,-.18)),n.add(U("ICE","#1a2830","#d6e6ef",2.2,.65,t,i+8.4,e+2.6)),n}function Bs(n,t,e,i,s){const r=H(t,e);n.add(f(new Y(.05,.07,3.2,6),h.steelDark,t,r+1.6,e)),n.add(f(new v(1.15,.7,.04),s,t+.58,r+2.75,e)),n.add(U(i,"#1a100c","#f0c089",1.45,.4,t+.58,r+2.75,e+.05))}function Ua(n,t,e,i){const s=H(t,e);n.add(f(new v(.07,1.55,.07),h.steelDark,t,s+.78,e)),n.add(f(new v(.38,.22,.03),i,t+.2,s+1.42,e))}function ga(n,t,e,i=0){const s=H(t,e);n.add(f(new v(.85,.55,.65),h.crate,t,s+.32,e,0,i,0)),n.add(f(new v(.88,.06,.68),h.steelDark,t,s+.62,e,0,i,0))}function V0(){const n=new Q;n.name="solar-2";const t=6,e=4;for(let a=0;a<t;a++)for(let o=0;o<e;o++){const l=98+a*5.4,c=-74-o*6.2,d=H(l,c),p=f(new v(.18,1.6,.18),h.solarFrame,l,d+.8,c),u=f(new v(4.6,.08,2.3),h.solar,l,d+1.55,c,-.55,.15,0),m=f(new v(4.75,.05,2.42),h.solarFrame,l,d+1.5,c,-.55,.15,0);n.add(p,u,m)}const[i,s,r]=We(96,-72,.7);return n.add(f(new v(2.2,1.4,1.4),h.habDark,i,s,r)),n.add(U("POWER","#111111","#f4e6c8",2,.55,i,s+.2,r+.75)),n}function W0(){const n=new Q;n.name="solar-tie";const t=90,e=-48,i=112,s=-83,r=[],a=5;for(let o=0;o<=a;o++){const l=o/a,c=t+(i-t)*l,d=e+(s-e)*l,p=H(c,d);n.add(f(new Y(.09,.11,4.4,6),h.steelDark,c,p+2.2,d)),n.add(f(new v(1.15,.08,.08),h.steel,c,p+4.35,d)),r.push({x:c,y:p+4.32,z:d})}for(let o=0;o<r.length-1;o++){const l=r[o],c=r[o+1];for(const d of[-.38,.38]){const p=new Ni([new A(l.x,l.y,l.z+d),new A((l.x+c.x)/2,(l.y+c.y)/2-.65,(l.z+c.z)/2+d),new A(c.x,c.y,c.z+d)]),u=new oe(new ti(p,6,.035,4,!1),h.cable);u.castShadow=!1,n.add(u)}}return n}function X0(){const n=new Q;n.name="hab-assembly";const t=-32,e=-98,i=H(t,e);n.add(f(new v(18,.22,14),h.concrete,t,i+.08,e));const s=[[-5,-2.2],[5,-2.2],[-5,2.2],[5,2.2]];for(const[a,o]of s)n.add(f(new Y(.18,.28,1.85,8),h.steelDark,t+a,i+1.02,e+o)),n.add(f(new v(.72,.12,.72),h.steel,t+a,i+.14,e+o)),n.add(f(new v(.55,.1,.55),h.steel,t+a,i+1.96,e+o));const r=i+3.55;n.add(f(new Y(3,3,11,16),h.hab,t,r,e,0,0,Math.PI/2)),n.add(f(new xe(3,14,10),h.hab,t-5.5,r,e)),n.add(f(new xe(3,14,10,0,Math.PI*2,0,Math.PI/2),h.hab,t+8.4,i+1.55,e+.45,.22,.35,.12)),n.add(f(new Y(1.35,1.35,2.4,12),h.habDark,t,r,e+4.15,Math.PI/2,0,0)),n.add(f(new v(1,1.65,.1),h.steelDark,t,r,e+5.45)),n.add(f(new jt(1.38,.08,6,14),h.steel,t,r,e+3.05,0,0,0));for(const[a,o]of[[-7.2,4.6],[6.8,4.8],[-6.4,-5.2]])n.add(f(new v(.12,3.6,.12),h.lattice,t+a,i+1.9,e+o)),n.add(f(new v(.12,3.6,.12),h.lattice,t+a+1.4,i+1.9,e+o)),n.add(f(new v(1.6,.08,.08),h.lattice,t+a+.7,i+3.7,e+o));return At(n,t-8.2,e+6.2,.2),At(n,t-6.3,e+7.4,-.35),At(n,t+7.1,e-5.6,.5,1.1),At(n,t+5.4,e-6.4,.15),n.add(U("HAB KIT","#1a100c","#f0c089",3,.75,t,i+6.4,e+3.2)),n.add(U("AIRLOCK","#1a100c","#f0c089",2.2,.55,t+2.4,r+.2,e+4.2,Math.PI/2)),n}function an(n,t,e,i,s={}){const r=H(t,e),a=s.r||2.85,o=s.len||10.4,l=s.onStands?r+3.4:r+3.05,c=Math.cos(i),d=Math.sin(i);if(s.onStands)for(const[u,m]of[[-4.1,-2.05],[4.1,-2.05],[-4.1,2.05],[4.1,2.05]]){const x=t+c*u-d*m,M=e+d*u+c*m;n.add(f(new Y(.16,.26,1.75,8),h.steelDark,x,r+.98,M)),n.add(f(new v(.7,.12,.7),h.steel,x,r+.14,M)),n.add(f(new v(.52,.1,.52),h.steel,x,r+1.9,M))}else for(const[u,m]of[[-3.6,0],[3.6,0]]){const x=t+c*u-d*m,M=e+d*u+c*m;n.add(f(new v(1.6,.55,1.15),h.steelDark,x,r+.38,M,0,i,0))}const p=f(new Y(a,a,o,16),h.hab,t,l,e,0,0,Math.PI/2);if(p.rotation.y=i,n.add(p),!s.partial)n.add(f(new xe(a,14,10),h.hab,t+c*(o/2),l,e+d*(o/2))),n.add(f(new xe(a,14,10),h.hab,t-c*(o/2),l,e-d*(o/2)));else{n.add(f(new xe(a,14,10),h.hab,t-c*(o/2),l,e-d*(o/2)));const u=t+c*(o/2+2.3),m=e+d*(o/2+2.3);n.add(f(new xe(a,14,10,0,Math.PI*2,0,Math.PI/2),h.hab,u,r+1.45,m,.22,.3,.1))}for(let u=-2;u<=2;u++){const m=t+c*u*1.75,x=e+d*u*1.75;n.add(f(new v(.8,.55,.08),h.glowWarm,m-d*a,l+.08,x+c*a))}if(s.airlock){const u=t-d*(a+1.15),m=e+c*(a+1.15);n.add(f(new Y(1.15,1.15,2.2,12),h.habDark,u,l,m,Math.PI/2,i,0)),n.add(f(new v(1,1.6,.1),h.steelDark,u-d*1.15,l,m+c*1.15,0,i,0)),n.add(f(new jt(1.18,.07,6,14),h.steel,u+d*.2,l,m-c*.2,0,i,0)),n.add(U("AIRLOCK","#1a100c","#f0c089",2.15,.5,u-d*.2,l+1.45,m+c*.2,i))}s.label&&n.add(U(s.label,"#1a100c","#f0c089",2.7,.65,t,l+a+.55,e+.15,i))}function q0(){const n=new Q;n.name="pressure-habs";const t=H(-46,-101);n.add(f(new v(28,.2,22),h.concrete,-50,t+.06,-101)),an(n,-46,-108,0,{airlock:!0,label:"HAB 2"}),an(n,-46,-94,0,{onStands:!0,airlock:!0,label:"HAB KIT"});const e=H(-46,-101)+3.15;return n.add(f(new Y(1.15,1.15,8.2,12),h.habDark,-46,e,-101,Math.PI/2,0,0)),n.add(f(new jt(1.2,.08,6,14),h.steel,-46,e,-105.1,Math.PI/2,0,0)),n.add(f(new jt(1.2,.08,6,14),h.steel,-46,e,-96.9,Math.PI/2,0,0)),n.add(U("CONNECT","#1a100c","#f0c089",2.4,.5,-46,e+1.55,-101)),an(n,-58,-102,Math.PI/2,{onStands:!0,partial:!0,label:"MOD"}),At(n,-54.5,-110.2,.25),At(n,-52.8,-111.4,-.3,1.08),At(n,-61.2,-96.4,.4),At(n,-40.6,-90.8,.15,1.05),n}function Ln(n,t,e){const i=new Q;i.name="eva";const s=H(n,t);return i.position.set(n,s,t),i.rotation.y=e,i.add(f(new v(.56,.8,.4),h.suit,0,1.46,0)),i.add(f(new v(.44,.5,.24),h.suitDark,0,1.52,-.3)),i.add(f(new xe(.21,12,10),h.suit,0,2.04,.02)),i.add(f(new xe(.165,10,8,0,Math.PI*2,0,Math.PI*.58),h.visor,0,2.04,.1)),i.add(f(new v(.17,.6,.17),h.suit,-.4,1.36,.04)),i.add(f(new v(.17,.6,.17),h.suit,.4,1.36,.04)),i.add(f(new v(.2,.76,.2),h.suitDark,-.15,.7,0)),i.add(f(new v(.2,.76,.2),h.suitDark,.15,.7,0)),i}function Y0(n,t,e,i){const s=H(t,e),r=new Q;r.position.set(t,s,e),r.rotation.y=i,r.add(f(new v(1.2,.18,.72),h.steelDark,0,.62,0)),r.add(f(new v(1.15,.28,.68),h.crate,0,.86,0)),r.add(f(new v(.08,.55,.08),h.steel,-.48,.32,.26)),r.add(f(new v(.08,.55,.08),h.steel,.48,.32,.26)),r.add(f(new v(.08,.55,.08),h.steel,-.48,.32,-.26)),r.add(f(new v(.08,.55,.08),h.steel,.48,.32,-.26));const a=new Y(.12,.12,.1,10);r.add(f(a,h.roverDark,-.48,.12,.3,Math.PI/2,0,0)),r.add(f(a,h.roverDark,.48,.12,.3,Math.PI/2,0,0)),r.add(f(a,h.roverDark,-.48,.12,-.3,Math.PI/2,0,0)),r.add(f(a,h.roverDark,.48,.12,-.3,Math.PI/2,0,0)),r.add(f(new v(.06,.7,.06),h.steel,-.22,1.3,.08)),r.add(f(new v(.06,.55,.06),h.steel,.18,1.22,-.06)),r.add(f(new v(.22,.12,.12),h.steelDark,-.22,1.68,.08)),n.add(r)}function K0(n,t,e,i){const s=H(t,e),r=new Q;r.position.set(t,s,e),r.rotation.y=i,r.add(f(new v(.85,2.45,.32),h.steelDark,0,1.32,0)),r.add(f(new jt(.42,.07,8,14),h.steel,0,1.58,.22)),r.add(f(new Y(.38,.38,.1,12),h.habDark,0,1.58,.18,Math.PI/2,0,0)),r.add(f(new v(.7,.16,.55),h.steel,0,.12,.05)),n.add(r)}function J0(){const n=new Q;n.name="eva-presence",n.add(Ln(2.4,12.2,tn(2.4,12.2,0,7))),n.add(Ln(-2.2,11.5,tn(-2.2,11.5,0,7))),n.add(Ln(3.8,15.6,.35)),n.add(Ln(.6,18.2,Math.PI)),Y0(n,4.3,14.8,.4),K0(n,-3.9,9.1,.2),At(n,5.4,13.2,.2,.85);const t=H(5.1,16.4);return n.add(f(new v(.1,2.2,.1),h.steelDark,5.1,t+1.1,16.4)),n.add(U("EVA PREP","#1a100c","#f0c089",2.3,.55,5.1,t+2.45,16.4,-.35)),n}function Z0(){const n=new Q;n.name="survey";const t=-82,e=-176,i=H(t,e);for(let c=0;c<3;c++){const d=c/3*Math.PI*2+.4,p=Math.cos(d)*.62,u=Math.sin(d)*.62;n.add(f(new v(.08,2.5,.08),h.steelDark,t+p,i+1.15,e+u,.32*Math.cos(d),0,.32*Math.sin(d)))}n.add(f(new v(.58,.32,.48),h.roverDark,t,i+2.28,e)),n.add(f(new Y(.04,.04,1.35,6),h.steel,t,i+3.08,e)),n.add(f(new v(.22,.12,.22),h.steelDark,t,i+3.78,e)),n.add(f(new v(.12,2.2,.12),h.steelDark,t+1.15,i+1.1,e+.2)),n.add(U("SURVEY","#1a100c","#f0c089",2.6,.7,t+.2,i+3.55,e+1.15));const s=[[-108,-210],[-98,-210],[-88,-210],[-78,-210],[-68,-210],[-108,-198],[-98,-198],[-88,-198],[-78,-198],[-68,-198],[-108,-186],[-98,-186],[-88,-186],[-78,-186],[-68,-186],[-108,-174],[-98,-174],[-88,-174],[-78,-174],[-68,-174]];for(let c=0;c<s.length;c++){const[d,p]=s[c];Ua(n,d,p,c%3===0?h.flagIce:h.flagDeposit)}Bs(n,-96,-198,"ICE",h.flagIce),Bs(n,-72,-204,"H2O",h.flagIce),Bs(n,-104,-176,"DEPOSIT",h.flagDeposit);const r=[[-90,-184,.2],[-88.4,-182.6,-.4],[-91.2,-181.8,.7],[-86.6,-185.2,.1]];for(const[c,d,p]of r)ga(n,c,d,p);At(n,-84.5,-180.4,.15,.85),n.add(U("SAMPLES","#1a2830","#d6e6ef",2.2,.55,-90,H(-90,-184)+1.55,-184));const a={x:-60,z:-162},o={x:-100,z:-200},l=14;for(let c=0;c<l;c++){const d=c/(l-1),p=a.x+(o.x-a.x)*d,u=a.z+(o.z-a.z)*d,m=H(p,u),x=Math.atan2(o.x-a.x,o.z-a.z);for(const M of[-.55,.55]){const _=Math.cos(x)*M,g=-Math.sin(x)*M,R=f(new v(.42,.05,.85),h.track,p+_,m+.04,u+g,0,x,0);R.castShadow=!1,n.add(R)}}return n}function It(n,t,e,i=.14){const s=[];for(let o=0;o<t.length;o++){const[l,c]=t[o],d=H(l,c)+1.05;s.push(new A(l,d,c)),o%2===0&&n.add(f(new v(.18,1.05,.18),h.steelDark,l,H(l,c)+.5,c))}const r=new Ni(s),a=new oe(new ti(r,28,i,6,!1),e);a.castShadow=!1,n.add(a)}function $0(){const n=new Q;return n.name="methalox-lines",It(n,[[-76,-10.6],[-52,-18],[-32,-14],[-18,-8.4]],h.tankCh4,.13),It(n,[[-76,-21.2],[-52,-24],[-32,-18],[-18,-9.6]],h.steel,.13),n.add(U("TO PAD","#1a100c","#f0c089",2.2,.5,-50,H(-50,-18)+2.15,-16.4)),n}function j0(){const n=new Q;n.name="methalox-stand";const t=-15,e=-8,i=H(t,e);n.add(f(new v(8.6,.16,5.4),h.steelDark,t,i+.42,e)),n.add(f(new Y(.88,.88,3.5,14),h.tankCh4,t-2.25,i+2.2,e+.55)),n.add(f(new Y(.88,.88,3.5,14),h.tankO2,t-2.25,i+2.2,e-1.25)),n.add(U("CH4","#6a2208","#f4e6c8",1.45,.42,t-1.3,i+2.25,e+.55,Math.PI/2)),n.add(U("O2","#2a3340","#e8eef4",1.45,.42,t-1.3,i+2.25,e-1.25,Math.PI/2));const s=[[1.55,1.65],[1.55,-1.65],[3.45,1.65],[3.45,-1.65]];for(const[r,a]of s)n.add(f(new v(.16,3.15,.16),h.steelDark,t+r,i+1.88,e+a));return n.add(f(new v(2.25,.12,3.5),h.steel,t+2.5,i+3.5,e)),n.add(f(new jt(.42,.11,8,14),h.tankCh4,t+.15,i+1.45,e+.55,Math.PI/2,0,0)),n.add(f(new jt(.42,.11,8,14),h.steel,t+.15,i+1.45,e-1.2,Math.PI/2,0,0)),n.add(f(new Y(.09,.09,6.4,8),h.tankCh4,t+4.55,i+1.18,e+.55,0,0,Math.PI/2)),n.add(f(new Y(.09,.09,6.4,8),h.steel,t+4.55,i+.98,e-1.2,0,0,Math.PI/2)),n.add(f(new v(1.55,1.05,1.15),h.habDark,t+.55,i+.98,e+1.85)),n.add(f(new Y(.55,.55,2.8,12),h.tankCh4,t-.4,i+1.15,e+2.55,0,0,Math.PI/2)),n.add(f(new v(1.6,.35,.85),h.steelDark,t-.4,i+.55,e+2.55)),n.add(U("METHALOX","#1a100c","#f0c089",3.15,.68,t+2.5,i+4.12,e)),n.add(U("RETURN PROPELLANT","#1a100c","#f0c089",3.85,.58,t+2.5,i+3.42,e+.02)),n.add(f(new Y(.22,.28,3.2,10),h.steelDark,t+5.4,i+2,e+.2)),n.add(f(new v(7.6,.22,.22),h.steel,t+8.8,i+3.55,e+1.4,0,-.45,.18)),n.add(f(new v(6.2,.18,.18),h.tankCh4,t+11.6,i+4.4,e+2.6,0,-.45,.12)),n.add(f(new v(6.2,.18,.18),h.steel,t+11.6,i+4.05,e+2.85,0,-.45,.12)),n.add(f(new Y(.28,.22,1.1,10),h.steelDark,t+14.2,i+4.7,e+3.6)),n.add(U("LOAD ARM","#1a100c","#f0c089",2.8,.45,t+8.2,i+4.85,e+1.1,-.45)),n}function Q0(){const n=new Q;n.name="spaceport-sign";const t=17,e=-17,i=H(t,e);return n.add(f(new v(.12,3.5,.12),h.steelDark,t,i+1.75,e)),n.add(U("SPACEPORT","#1a100c","#f0c089",3.5,.85,t,i+3.45,e,.55)),n.add(U("METHALOX PAD","#1a100c","#d6b48a",3.2,.58,t,i+2.55,e,.55)),n}function tm(n,t,e,i,s,r){const a=i-t,o=s-e,l=Math.hypot(a,o),c=Math.ceil(l/6),d=Math.atan2(a,o);for(let p=0;p<c;p++){const u=(p+.5)/c,m=t+a*u,x=e+o*u,M=H(m,x),_=l/c+.35,g=f(new v(r+1.7,.055,_+.25),h.roadBed,m,M+.03,x,0,d,0);g.castShadow=!1,n.add(g);const R=f(new v(r,.08,_+.15),h.padRing,m,M+.07,x,0,d,0);R.castShadow=!1,n.add(R)}}function em(n,t,e,i=4.2){const s=H(t,e),r=f(new Y(i+.8,i+.8,.06,20),h.roadBed,t,s+.03,e);r.castShadow=!1,n.add(r);const a=f(new Y(i,i,.08,20),h.graded,t,s+.07,e);a.castShadow=!1,n.add(a)}function nm(){const n=new Q;n.name="roads";const t=[[0,18,0,-124,5.2],[0,-40,84,-42,4.6],[0,-40,-68,-16,4.6],[0,-92,-56,-154,4],[16,-72,48,-86,3.6],[12,8,50,22,4.2],[16,28,22,78,3.5],[-58,-158,-90,-190,3.6],[-14,-104,-32,-98,3.4],[84,-42,112,-83,3.6],[0,-108,22,-112,3.6],[22,-112,48,-86,3.4],[-6,-116,-18,-138,3.2],[0,8,-15,-8,3.4],[16,28,36,72,3.8],[0,18,-24,44,3.8],[-58,-158,-64,-90,4.2],[-64,-90,-68,-16,4.2],[-18,-138,-32,-148,3.2],[-32,-98,-46,-100,3.4],[0,18,-48,68,3.8],[16,28,78,56,3.8],[-6,-116,-13,-134,3.4],[22,-112,38,-126,3.4],[-58,-158,-60,-148,3.2],[-64,-118,-18,-88,3.6],[84,-42,68,-10,3.4],[-6,-108,-18,-88,3.2],[38,-126,8,-142,3.4],[-13,-134,8,-142,3.2],[112,-83,135,-40,3.6],[68,-10,68,6,3.2],[-13,-134,-28,-138,3],[-46,-108,-20,-132,3.2],[-6,-108,-6,-132,3.2],[-6,-96,2,-22,3.4],[-32,-98,-36,-74,3.2],[-40,-76,-32,-98,3.2],[-40,-76,-50,-72,3],[-6,-132,10,-124,3.2],[10,-124,8,-142,3],[0,8,20,8,3.4],[22,82,-16,136,3.6],[0,32,-16,136,3.4],[135,-40,158,-62,3.4],[-68,-16,-96,-16,3.6],[-58,-158,-78,-172,3.4],[48,-86,66,-74,3.4],[8,-142,18,-152,3.2],[-18,-88,18,-152,3.2],[-32,-148,-8,-162,3.2],[-6,-108,8,-98,3.2],[22,-112,8,-98,3.2],[48,-86,48,-70,3.2],[-68,-16,-68,12,3.2],[-36,-74,22,-80,3.2],[48,-86,22,-80,3.2],[22,-112,52,-112,3.2],[38,-126,52,-112,3.2],[-78,-172,-90,-158,3.2],[8,-98,8,-78,3.2],[22,-80,8,-78,3.2],[8,-98,-8,-88,3.2],[-22,-88,-8,-88,3.2],[-96,-16,-96,4,3.2],[158,-62,142,-62,3.2],[8,-142,28,-140,3.2],[18,-152,28,-140,3.2],[-90,-158,-90,-148,3.2],[5,16,12,18,3],[20,8,36,8,3.2],[36,8,36,-6,3.2],[-68,4,-50,4,3.2],[-58,-158,-58,-142,3.2],[-15,-8,-32,-22,3.2],[66,-74,66,-90,3.2],[8,-98,22,-98,3.2],[158,-62,172,-48,3.2],[22,-112,38,-104,3.2],[10,-124,24,-128,3],[-68,12,-80,20,3.2],[-16,136,6,148,3],[-48,68,-64,80,3.2],[-80,20,-80,32,3.2],[135,-40,100,-22,3.2],[100,-22,68,-10,3.2],[-36,-74,-22,-56,3.2],[-90,-158,-124,-188,3.2],[-50,4,-38,16,3.2],[52,-112,70,-112,3.2],[22,82,16,48,3],[-58,-142,-58,-36,3.2],[-58,-36,-68,-16,3.2],[36,8,50,4,3],[-58,-158,-40,-168,3],[66,-90,82,-90,3.2],[-8,-162,4,-148,3],[135,-40,148,-40,3.2],[112,-83,124,-70,3.2],[82,-44,96,-44,3.2],[-68,12,-84,8,3.2],[-8,-88,16,-86,3.2]];for(const[i,s,r,a,o]of t)tm(n,i,s,r,a,o);for(const[i,s,r]of[[0,-40,5.2],[0,-108,4.4],[84,-42,4],[22,-112,3.8],[0,10,4.6],[-64,-90,4.2],[36,72,3.6],[-46,-100,3.6],[38,-126,3.6],[-18,-88,3.8],[68,-10,3.8],[-48,68,3.6],[78,56,3.6],[-13,-134,3.6],[8,-142,3.6],[135,-40,3.6],[68,6,3.6],[-36,-74,3.6],[2,-22,3.4],[-50,-72,3.4],[10,-124,3.6],[20,8,3.6],[-16,136,4.2],[158,-62,3.6],[-96,-16,3.8],[-78,-172,3.6],[66,-74,3.6],[18,-152,3.4],[-8,-162,3.4],[8,-98,3.4],[48,-70,3.4],[-68,12,3.4],[22,-80,3.4],[52,-112,3.6],[-90,-158,3.4],[8,-78,3.4],[-8,-88,3.4],[-96,4,3.4],[142,-62,3.4],[28,-140,3.4],[-90,-148,3.4],[12,18,3.2],[36,8,3.4],[36,-6,3.4],[-50,4,3.4],[-58,-142,3.4],[-32,-22,3.4],[66,-90,3.4],[22,-98,3.4],[172,-48,3.4],[38,-104,3.4],[24,-128,3.2],[-80,20,3.4],[6,148,3.2],[-64,80,3.4],[-80,32,3.4],[100,-22,3.4],[-22,-56,3.4],[-124,-188,3.4],[-38,16,3.4],[70,-112,3.4],[16,48,3.2],[-58,-36,3.4],[50,4,3.2],[-40,-168,3.2],[82,-90,3.4],[4,-148,3.2],[148,-40,3.4],[124,-70,3.4],[96,-44,3.4],[-84,8,3.4],[16,-86,3.4]])em(n,i,s,r);const e=[[3.2,-20],[-3.2,-20],[3.2,-60],[-3.2,-60],[3.2,-90],[22,-40],[42,-40],[64,-41],[-22,-32],[-44,-24],[8,-110],[16,-111],[-8,-130],[-28,-148],[-70,-172],[96,-58],[104,-72],[28,50],[32,62],[-12,30],[-20,40],[-60,-130],[-66,-70],[-66,-40],[-26,-144],[-40,-100],[-52,-108],[3.4,12],[-3.2,12],[30,-118],[38,-126],[-60,-148],[-64,-118],[-18,-88],[68,-10]];for(const[i,s]of e)Ua(n,i,s,h.flagDeposit);return n}function im(){const n=new Q,t=[[18,-8],[-16,-6],[12,-48],[-10,-70],[6,-100],[30,-100],[-30,-20],[40,-40],[40,18],[58,32],[16,70],[28,88],[-54,-8],[-80,-176],[-96,-196],[-28,-90],[112,-80],[100,-50],[0,-40],[22,-112],[32,-112],[70,-40],[84,-44],[36,60],[-24,32],[-64,-90],[-40,-148],[-32,-156],[4,14],[-46,-108],[-46,-92],[-58,-102],[38,-126],[-18,-88],[68,-10],[-60,-148],[-64,-118],[-22,-88]];for(const[e,i]of t){const s=H(e,i);n.add(f(new Y(.1,.12,5.2,6),h.steelDark,e,s+2.6,i)),n.add(f(new v(.7,.15,.35),h.glowWarm,e,s+5.3,i))}return n}function sm(){const n=new Q,t=14,e=22,i=H(t,e);n.add(f(new v(.12,3.6,.12),h.steelDark,t,i+1.8,e));const s=U("BASE ALPHA","#1a100c","#f0c089",3.8,1.05,t,i+3.55,e,.4);n.add(s);const r=U("CARGO CAMPAIGN","#1a100c","#f0c089",3.4,.7,t,i+2.55,e,.4);n.add(r);const a=U("ARCADIA PLANITIA","#1a100c","#d6b48a",3.2,.55,18,H(18,26)+2.15,26,.15);n.add(f(new v(.1,2.2,.1),h.steelDark,18,H(18,26)+1.1,26)),n.add(a);const o=20,l=36,c=H(o,l);return n.add(f(new v(.1,2.6,.1),h.steelDark,o,c+1.3,l)),n.add(U("6 SHIPS","#1a100c","#f0c089",2.6,.65,o,c+3.15,l,.25)),n.add(U("TWO WINDOWS","#1a100c","#d6b48a",2.8,.5,o,c+2.45,l,.25)),n}function tn(n,t,e,i){return Math.atan2(-(i-t),e-n)}function Qo(n,t){const e=new Q;e.name="window-offload";const i=[[n,t,.2],[n-1.8,t+2.1,-.3],[n+1.6,t+2.4,.7],[n-2.4,t-1.2,.15],[n+.8,t-2.2,1.1],[n-3.2,t+.6,-.4]];for(const[o,l,c]of i)At(e,o,l,c);At(e,n-4.2,t+1.4,.2,1.12),At(e,n-5.4,t-.6,-.15,1.05);const[s,r,a]=We(n-1.2,t,.08);return e.add(f(new v(7.2,.12,3.8),h.steelDark,s,r,a,0,.12,0)),e.add(U("CARGO","#1a100c","#f0c089",2.4,.65,n-4.2,H(n-4.2,t+1.4)+2.4,t+1.4,.4)),e}function rm(){const n=new Q;n.name="earth-dish";const t=-32,e=-148,i=H(t,e);n.add(f(new Y(8.6,8.6,.28,32),h.concrete,t,i+.1,e)),n.add(f(new Y(1.45,1.85,5.4,14),h.steelDark,t,i+2.8,e)),n.add(f(new Y(2.05,2.05,.42,18),h.steel,t,i+5.55,e)),n.add(f(new jt(2.15,.12,8,20),h.lattice,t,i+5.8,e,Math.PI/2,0,0)),n.add(f(new v(.32,4.4,.32),h.lattice,t-2.55,i+7.6,e)),n.add(f(new v(.32,4.4,.32),h.lattice,t+2.55,i+7.6,e)),n.add(f(new v(5.6,.32,.32),h.lattice,t,i+9.75,e));const s=new Q;s.position.set(t,i+9.5,e),s.rotation.set(-.92,.68,0);const r=f(new xe(7.6,28,16,0,Math.PI*2,0,Math.PI/2.28),h.dish,0,0,0);s.add(r);const a=f(new xe(7.72,20,10,0,Math.PI*2,0,Math.PI/2.45),h.steelDark,0,-.12,0);s.add(a);for(let d=0;d<8;d++){const p=d/8*Math.PI*2;s.add(f(new v(.07,.07,7.4),h.steelDark,0,.18,0,.12,p,0))}s.add(f(new Y(.07,.07,5.4,6),h.steelDark,0,2.7,0)),s.add(f(new Y(.38,.2,.75,10),h.steel,0,5.35,0)),n.add(s);const o=t-8.2,l=e-5.6,c=H(o,l);return n.add(f(new v(4.6,2.5,3.4),h.habDark,o,c+1.35,l)),n.add(f(new v(2.2,.85,1.4),h.steelDark,o+2.8,c+.55,l+.4)),n.add(U("EARTH LINK","#1a100c","#f0c089",3.6,.75,t,i+4.2,e+6.4)),n.add(U("LIGHT TIME 12 MIN","#1a100c","#d6b48a",3.9,.6,t,i+3.4,e+6.4)),n.add(U("NOT REAL-TIME","#1a100c","#d6b48a",3.3,.5,o,c+2.85,l+1.85)),n.add(f(new v(.1,2.8,.1),h.steelDark,t+6.6,i+1.4,e+5.2)),n.add(U("DSN / STARSHIP","#1a100c","#f0c089",3.2,.55,t+6.6,i+3.15,e+5.2,-.5)),n}function gn(n,t,e,i={}){const s=new Q;s.name=i.kind==="cargo"?"cargo-haul":"ice-haul";const r=H(n,t);s.position.set(n,r,t),s.rotation.y=e,s.add(f(new v(4.2,1.25,2.2),h.rover,.2,1.45,0)),s.add(f(new v(1.55,.85,1.7),h.roverDark,1.55,2.25,0)),s.add(f(new v(2.5,.08,1.7),h.solar,.05,2.16,0)),s.add(f(new Y(.06,.06,1.6,6),h.steel,1.2,2.95,0)),s.add(f(new v(1.15,.2,.32),h.steelDark,-2.45,1.02,0));const a=new Y(.62,.62,.38,12),o=[[-1.35,.62,1.22],[.25,.62,1.22],[1.55,.62,1.22],[-1.35,.62,-1.22],[.25,.62,-1.22],[1.55,.62,-1.22]];for(const[d,p,u]of o)s.add(f(a,h.roverDark,d,p,u,Math.PI/2,0,0));const l=-5.7;s.add(f(new v(4.5,.22,2.4),h.steelDark,l,1.02,0));const c=[[-4.5,.52,1.22],[-6.7,.52,1.22],[-4.5,.52,-1.22],[-6.7,.52,-1.22]];for(const[d,p,u]of c)s.add(f(new Y(.5,.5,.32,12),h.roverDark,d,p,u,Math.PI/2,0,0));if(i.kind==="cargo")s.add(f(new v(1.55,1.2,1.55),h.crate,l-.95,1.78,.12)),s.add(f(new v(1.55,1.2,1.55),h.crate,l+.9,1.78,-.08)),i.loaded!==!1&&s.add(f(new v(1.35,1.05,1.35),h.crate,l,2.9,.05)),s.add(U("CARGO","#1a100c","#f0c089",1.7,.42,l,2.05,1.28));else{if(s.add(f(new v(4.2,1.15,.1),h.steel,l,1.68,1.12)),s.add(f(new v(4.2,1.15,.1),h.steel,l,1.68,-1.12)),s.add(f(new v(.1,1.15,2.25),h.steel,l-2.15,1.68,0)),s.add(f(new v(.1,1.15,2.25),h.steel,l+2.15,1.68,0)),i.loaded!==!1){const d=f(new ve(1.15,0),h.ice,l,1.82,0);d.scale.set(1.65,.68,.95),s.add(d),s.add(f(new ve(.52,0),h.ice,l+.95,1.92,.22)),s.add(f(new ve(.4,0),h.ice,l-.85,1.88,-.18))}s.add(U("ICE","#1a2830","#d6e6ef",1.35,.38,l,2.35,1.24))}return s}function Is(n,t,e,i,s,r=16){const a=Math.atan2(i-t,s-e);for(let o=0;o<r;o++){const l=o/(r-1),c=t+(i-t)*l,d=e+(s-e)*l,p=H(c,d);for(const u of[-.7,.7]){const m=Math.cos(a)*u,x=-Math.sin(a)*u,M=f(new v(.4,.05,.9),h.track,c+m,p+.04,d+x,0,a,0);M.castShadow=!1,n.add(M)}}}function am(){const n=new Q;n.name="haul-loop";const t=-64,e=-90,i=H(t,e);n.add(f(new v(11,.2,8.4),h.concrete,t,i+.08,e)),n.add(f(new v(2.6,3.2,2.6),h.steelDark,t+2.4,i+1.75,e-1.4)),n.add(f(new v(3.4,.18,1.3),h.steel,t+.2,i+2.35,e-1.4,0,0,.18));const s=f(new ve(2.4,0),h.ice,t-2.6,i+1.15,e+1.6);s.scale.set(1.35,.7,1.15),n.add(s),n.add(f(new ve(1.1,0),h.ice,t-1.2,i+.85,e+2.4)),n.add(f(new v(.22,5.6,.22),h.lattice,t+3.6,i+2.9,e+2.2)),n.add(f(new v(.22,4.2,.22),h.lattice,t+3.6,i+4.4,e+.4,.7,0,0)),n.add(f(new v(1.6,.7,.7),h.steelDark,t+3.6,i+5.5,e-.6)),n.add(U("ICE TRANSFER","#1a2830","#d6e6ef",3.5,.7,t,i+3.7,e+3.4)),n.add(U("MINE TO ISRU","#1a100c","#f0c089",3.1,.5,t,i+2.95,e+3.4));const r={x:-58,z:-158},a={x:-68,z:-16},o={x:0,z:0};return n.add(gn(-55,-146,tn(-55,-146,a.x,a.z),{kind:"ice",loaded:!0})),n.add(gn(-61,-118,tn(-61,-118,a.x,a.z),{kind:"ice",loaded:!0})),n.add(gn(-66,-78,tn(-66,-78,a.x,a.z),{kind:"ice",loaded:!0})),n.add(gn(-68,-38,tn(-68,-38,a.x,a.z),{kind:"ice",loaded:!0})),n.add(gn(-70,-62,tn(-70,-62,r.x,r.z),{kind:"ice",loaded:!1})),n.add(gn(-50,-24,tn(-50,-24,o.x,o.z),{kind:"cargo",loaded:!0})),n.add(gn(-18,-14,tn(-18,-14,12,8),{kind:"cargo",loaded:!0})),n.add(gn(22,12,tn(22,12,50,22),{kind:"cargo",loaded:!0})),Is(n,-58,-156,-64,-92,18),Is(n,-64,-88,-68,-20,16),Is(n,-66,-18,-16,-10,12),Is(n,-14,-8,20,12,10),n}function qi(n,t,e,i,s,r=8,a=1.15,o=.16){const l=[];for(let d=0;d<=r;d++){const p=d/r,u=t+(i-t)*p,m=e+(s-e)*p,x=H(u,m)+a;l.push(new A(u,x,m)),d%2===0&&n.add(f(new v(.16,a,.16),h.steelDark,u,H(u,m)+a*.5,m))}const c=new oe(new ti(new Ni(l),r*2,o,6,!1),h.pipe);c.castShadow=!1,n.add(c)}function om(){const n=new Q;n.name="food";const t=38,e=-126,i=H(t,e);n.add(f(new v(13.2,.25,7.6),h.concrete,t,i+.1,e));const s=new oe(new Y(3.55,3.55,12.4,18,1,!1,0,Math.PI),h.glass);s.rotation.z=Math.PI/2,s.position.set(t,i+3.55,e),s.castShadow=!1,n.add(s),n.add(f(new v(12.2,.1,7.2),h.solarFrame,t,i+3.6,e));for(let r=-2;r<=2;r++){n.add(f(new v(1.85,.24,5.6),h.soil,t+r*2.1,i+.34,e));for(let a=-2;a<=2;a++){const o=a%2===0?h.plant:h.plantLeaf;n.add(f(new v(1.25,.58,.72),o,t+r*2.1,i+.78,e+a*.95))}n.add(f(new v(1.5,.05,5.2),h.glowWarm,t+r*2.1,i+3.15,e))}return n.add(f(new v(1.1,1.8,.14),h.habDark,t-6.2,i+1.1,e)),n.add(f(new Y(.14,.14,12,8),h.pipe,30,H(30,-119)+1.2,-119,0,0,Math.PI/2)),n.add(U("FOOD","#1a100c","#f0c089",2.8,.7,t,i+5.05,e+.15)),n.add(U("GROW FROM CO2","#1a100c","#d6b48a",3.6,.5,t,i+4.35,e+.15)),At(n,45,-122,.2,.9),At(n,46.2,-124.4,-.3,.85),n}function cm(){const n=new Q;n.name="water-loop";const t=-60,e=-148,i=H(t,e);n.add(f(new v(7.2,.22,5.4),h.concrete,t,i+.1,e)),n.add(f(new v(3.4,2.1,2.4),h.habDark,t-1.1,i+1.2,e)),n.add(f(new Y(1.15,1.15,2.6,12),h.steel,t+1.8,i+1.5,e+.4)),n.add(f(new v(1.6,.7,1.2),h.ice,t+1.8,i+3.05,e+.4)),n.add(U("MELT","#1a2830","#d6e6ef",2.2,.55,t-1.1,i+1.7,e+1.35)),n.add(U("ICE","#1a2830","#d6e6ef",1.5,.42,t+1.8,i+1.7,e+1.7));const s=-64,r=-118,a=H(s,r);n.add(f(new v(7.4,.22,5.2),h.concrete,s,a+.1,r)),n.add(f(new v(3.6,2.2,2.6),h.steelDark,s,a+1.25,r)),n.add(f(new Y(.55,.55,2.8,10),h.pipe,s+2.2,a+1.6,r-.6)),n.add(U("FILTER","#1a2830","#d6e6ef",2.5,.55,s,a+1.85,r+1.45));const o=-18,l=-88,c=H(o,l);return n.add(f(new v(9.2,.22,7.2),h.concrete,o,c+.1,l)),n.add(f(new Y(2.15,2.15,5.6,16),h.tankO2,o-1.6,c+3,l)),n.add(f(new Y(1.55,1.55,4.2,14),h.pipe,o+2.4,c+2.3,l+1.1)),n.add(U("POTABLE","#1a2830","#d6e6ef",3.2,.7,o-1.6,c+3.2,l+2.35)),n.add(U("H2O","#1a2830","#d6e6ef",1.8,.5,o+2.4,c+2.5,l+2.55)),n.add(U("ICE TO CREW","#1a100c","#f0c089",3.1,.5,o,c+6.15,l)),qi(n,-58,-154,t,e,6,1.2,.15),qi(n,t,e,s,r,8,1.2,.15),qi(n,s,r,-68,-26,10,1.15,.14),qi(n,s,r,o,l,10,1.2,.15),qi(n,o,l,-6,-100,8,1.15,.13),n}function lm(){const n=new Q;n.name="batteries";const t=68,e=-10,i=H(t,e);n.add(f(new v(15.2,.22,7.2),h.concrete,t,i+.1,e));for(let o=0;o<6;o++){const l=t-5.5+o*2.2;n.add(f(new v(1.85,2.15,4.4),h.battery,l,i+1.25,e)),n.add(f(new v(1.7,.08,4.2),h.steel,l,i+2.38,e))}n.add(U("BATTERY","#111111","#f4e6c8",3.4,.7,t,i+3.15,e+3.75)),n.add(U("NIGHT STORE","#111111","#d6b48a",3.5,.55,t,i+2.45,e+3.75)),n.add(f(new Y(.12,.12,18,8),h.cable,61,H(61,-14)+1.4,-14,0,0,Math.PI/2));const s=-22,r=-88,a=H(s,r);n.add(f(new v(7.2,.2,5.2),h.concrete,s,a+.1,r));for(let o=0;o<3;o++)n.add(f(new v(1.7,1.9,3.6),h.battery,s-2+o*2,a+1.15,r));return n.add(U("NIGHT","#111111","#f4e6c8",2.2,.5,s,a+2.55,r+2.7)),n.add(U("HABS","#111111","#d6b48a",1.8,.42,s,a+2.05,r+2.7)),n}function dm(n){const t=(c,d,p=1)=>n.push({type:"box",x:c,z:d,w:1.9*p,d:1.9*p}),e=(c,d,p)=>n.push({type:"cyl",x:c,z:d,r:p}),i=(c,d,p,u)=>n.push({type:"box",x:c,z:d,w:p,d:u});for(const[c,d]of[[10,8],[12.2,8.4],[10.4,10.6],[13.5,6.2],[-12,9],[-14,7.2],[8.5,-11],[6.4,-12.5]])t(c,d);for(const[c,d]of[[40,22],[38.2,24.1],[41.4,26.2],[36.5,21.4],[37.8,27.6],[34.8,24.8],[39.2,19.6],[35.4,19.2]])t(c,d);t(38.6,22.8,1.15),t(33.2,20.4,1.2),t(31.4,22.1,1.05);const s=24,r=70;for(const[c,d]of[[s,r],[s-1.8,r+2.1],[s+1.6,r+2.4],[s-2.4,r-1.2],[s+.8,r-2.2],[s-3.2,r+.6]])t(c,d);t(s-4.2,r+1.4,1.12),t(s-5.4,r-.6,1.05),t(5.4,13.2,.85);for(const[c,d]of[[18,-78],[20.2,-77.4],[18.4,-81.2],[24.6,-78.6],[26.2,-81.8]])t(c,d);const a=-60,o=66;for(const[c,d]of[[a,o],[a-1.8,o+2.1],[a+1.6,o+2.4],[a-2.4,o-1.2],[a+.8,o-2.2],[a-3.2,o+.6]])t(c,d);t(a-4.2,o+1.4,1.12),t(a-5.4,o-.6,1.05);for(const[c,d]of[[16,14],[8,-62],[30,74],[-94,-182],[48,-70],[-90,-148]])e(c,d,2.4);for(const[c,d]of[[-55,-146],[-61,-118],[-66,-78],[-68,-38],[-70,-62],[-50,-24],[-18,-14],[22,12]])e(c,d,3.4);for(const[c,d]of[[42,22],[39,26],[26,78],[26,68],[22,72],[-80,-174],[-34,-92],[-28,-104],[16,-120],[-28,128]])e(c,d,.55);for(const[c,d]of[[2.4,12.2],[-2.2,11.5],[3.8,15.6],[.6,18.2]])e(c,d,.55);i(4.3,14.8,1.4,1),i(-3.9,9.1,1.1,.8),i(5.1,16.4,1.2,.8);for(let c=0;c<8;c++)i(82.3,-22-c*6.2,50,2.6);i(54,-18,3,2.2);for(let c=0;c<4;c++)i(111.5,-74-c*6.2,30,2.6);i(96,-72,3,2.2);for(let c=0;c<5;c++)i(135.5,-28-c*6.2,30,2.6);i(120,-26,3,2.2);for(let c=0;c<5;c++)i(158.5,-48-c*6.2,30,2.6);i(146,-46,3,2.2),i(14,22,2.4,1.6),i(18,26,1.8,1.3),i(20,36,2,1.3),i(17,-17,2.4,1.6);const l=[[-108,-210],[-98,-210],[-88,-210],[-78,-210],[-68,-210],[-108,-198],[-98,-198],[-88,-198],[-78,-198],[-68,-198],[-108,-186],[-98,-186],[-88,-186],[-78,-186],[-68,-186],[-108,-174],[-98,-174],[-88,-174],[-78,-174],[-68,-174]];for(const[c,d]of l)e(c,d,.4);e(-96,-198,.7),e(-72,-204,.7),e(-104,-176,.7);for(const[c,d]of[[-90,-184],[-88.4,-182.6],[-91.2,-181.8],[-86.6,-185.2]])i(c,d,1.2,1.2);t(-84.5,-180.4,.85),t(-28,-68),t(-27,-71,1.1),t(-44,-80),t(-42.5,-68.5,.95),t(17.2,-119.4),t(18.4,-121.8,1.05),t(3.2,-118.6,.9),t(16.6,-128.8,.95),t(27.2,12.4,.9),t(12.6,13.1,.95),t(-32,124,.9),t(-30.6,126.4,.95)}function hm(){const n=new Q;n.name="hab-street";const t=H(-13,-134);n.add(f(new v(30,.2,24),h.concrete,-13,t+.06,-136)),an(n,-20,-132,0,{airlock:!0,label:"HAB 3"}),an(n,-6,-132,0,{airlock:!0,label:"HAB 4"}),an(n,-13,-142,Math.PI/2,{airlock:!0,label:"HAB 5"});const e=H(-13,-132)+3.15;return n.add(f(new Y(1.15,1.15,8.2,12),h.habDark,-13,e,-132,0,0,Math.PI/2)),n.add(f(new Y(1.15,1.15,6.4,12),h.habDark,-13,e,-137,Math.PI/2,0,0)),n.add(U("HAB STREET","#1a100c","#f0c089",3.4,.65,-13,t+5.4,-126)),At(n,-26,-128,.2),At(n,1.2,-128.4,-.3,1.05),n}function xi(n,t,e,i,s){i==="x"?(n.push({type:"box",x:t,z:e-1.35,w:s,d:.4}),n.push({type:"box",x:t,z:e+1.35,w:s,d:.4})):(n.push({type:"box",x:t-1.35,z:e,w:.4,d:s}),n.push({type:"box",x:t+1.35,z:e,w:.4,d:s}))}function um(n){const t=(e,i,s,r)=>n.push({type:"box",x:e,z:i,w:s,d:r});t(-6.2,0,5.2,14.8),t(6.2,0,5.2,14.8),t(0,-6.2,10,5.2),t(-4.35,5.8,6.4,5.2),t(4.35,5.8,6.4,5.2),t(0,7.15,3.8,.8),t(-1.45,7.15,.7,1.2),t(1.45,7.15,.7,1.2),t(-1.28,13,.36,12.4),t(1.28,13,.36,12.4),t(-1.45,19.2,.4,2.8),t(1.45,19.2,.4,2.8)}function fm(){const n=new Q;n.name="food-3";const t=8,e=-142,i=H(t,e);n.add(f(new v(13.2,.25,7.6),h.concrete,t,i+.1,e));const s=new oe(new Y(3.55,3.55,12.4,18,1,!1,0,Math.PI),h.glass);s.rotation.z=Math.PI/2,s.position.set(t,i+3.55,e),s.castShadow=!1,n.add(s),n.add(f(new v(12.2,.1,7.2),h.solarFrame,t,i+3.6,e));for(let r=-2;r<=2;r++){n.add(f(new v(1.85,.24,5.6),h.soil,t+r*2.1,i+.34,e));for(let a=-2;a<=2;a++){const o=a%2===0?h.plant:h.plantLeaf;n.add(f(new v(1.25,.58,.72),o,t+r*2.1,i+.78,e+a*.95))}n.add(f(new v(1.5,.05,5.2),h.glowWarm,t+r*2.1,i+3.15,e))}return n.add(f(new v(1.1,1.8,.14),h.habDark,t-6.2,i+1.1,e)),n.add(U("FOOD","#1a100c","#f0c089",2.8,.7,t,i+5.05,e+.15)),n.add(U("HAB STREET","#1a100c","#d6b48a",3.4,.5,t,i+4.35,e+.15)),At(n,15,-138,.2,.9),n}function pm(){const n=new Q;n.name="solar-3";const t=6,e=5;for(let a=0;a<t;a++)for(let o=0;o<e;o++){const l=122+a*5.4,c=-28-o*6.2,d=H(l,c);n.add(f(new v(.18,1.6,.18),h.solarFrame,l,d+.8,c)),n.add(f(new v(4.6,.08,2.3),h.solar,l,d+1.55,c,-.55,.15,0)),n.add(f(new v(4.75,.05,2.42),h.solarFrame,l,d+1.5,c,-.55,.15,0))}const[i,s,r]=We(120,-26,.7);return n.add(f(new v(2.2,1.4,1.4),h.habDark,i,s,r)),n.add(U("POWER","#111111","#f4e6c8",2,.55,i,s+.2,r+.75)),n.add(U("FIELD 3","#111111","#d6b48a",2.2,.45,i,s+.85,r+.75)),n}function mm(){const n=new Q;n.name="batteries-2";const t=68,e=6,i=H(t,e);n.add(f(new v(15.2,.22,7.2),h.concrete,t,i+.1,e));for(let o=0;o<6;o++){const l=t-5.5+o*2.2;n.add(f(new v(1.85,2.15,4.4),h.battery,l,i+1.25,e)),n.add(f(new v(1.7,.08,4.2),h.steel,l,i+2.38,e))}n.add(U("BATTERY","#111111","#f4e6c8",3.4,.7,t,i+3.15,e+3.75)),n.add(U("CREW STORE","#111111","#d6b48a",3.5,.55,t,i+2.45,e+3.75));const s=-28,r=-138,a=H(s,r);n.add(f(new v(7.2,.2,5.2),h.concrete,s,a+.1,r));for(let o=0;o<3;o++)n.add(f(new v(1.7,1.9,3.6),h.battery,s-2+o*2,a+1.15,r));return n.add(U("NIGHT","#111111","#f4e6c8",2.2,.5,s,a+2.55,r+2.7)),n.add(U("HAB 3-5","#111111","#d6b48a",2.2,.42,s,a+2.05,r+2.7)),n}function Dn(n,t,e,i,s){const r=(t+i)*.5,a=(e+s)*.5,o=(H(t,e)+H(i,s))*.5+2.45,l=Math.hypot(i-t,s-e),c=f(new Y(1.12,1.12,l,12),h.habDark,r,o,a,Math.PI/2,0,0);c.rotation.y=Math.atan2(i-t,s-e),n.add(c),n.add(f(new jt(1.18,.07,6,14),h.steel,t,o,e,Math.PI/2,0,0)),n.add(f(new jt(1.18,.07,6,14),h.steel,i,o,s,Math.PI/2,0,0))}function gm(){const n=new Q;n.name="neighborhood",Dn(n,-46,-108,-20,-132),Dn(n,-6,-108,-6,-132),Dn(n,-46,-108,-32,-98),Dn(n,-6,-96,2,-22),Dn(n,-40,-76,-32,-98),Dn(n,-40,-76,-50,-72),Dn(n,-6,-132,10,-124),Dn(n,10,-124,8,-142);const[t,e,i]=We(-33,-120,3.4);n.add(U("PRESSURE","#1a100c","#f0c089",3.2,.55,t,e+1.2,i)),n.add(U("HAB 2-5","#1a100c","#d6b48a",2.8,.45,t,e+.55,i));const s=2,r=-22,a=H(s,r);return n.add(f(new Y(1.45,1.45,2.8,12),h.habDark,s,a+1.55,r)),n.add(f(new v(1.1,1.8,.12),h.steelDark,s,a+1.5,r+1.5)),n.add(f(new jt(1.48,.08,6,14),h.steel,s,a+2.95,r,Math.PI/2,0,0)),n.add(U("CREW ACCESS","#1a100c","#f0c089",3.4,.6,s,a+3.55,r+.2)),n.add(U("TO STARSHIP","#1a100c","#d6b48a",3.1,.45,s,a+2.95,r+.2)),n}function _m(){const n=new Q;n.name="yard";const t=-36,e=-74,i=H(t,e);return n.add(f(new v(18,.22,14),h.concrete,t,i+.08,e)),an(n,-40,-76,0,{airlock:!0,label:"HAB 6"}),an(n,-32,-70,-.2,{onStands:!0,label:"NEXT"}),n.add(f(new v(.28,9.2,.28),h.lattice,t+6.2,i+4.7,e-3.4)),n.add(f(new v(8.4,.22,.22),h.lattice,t+2.4,i+9.2,e-3.4)),n.add(f(new Y(.05,.05,6.8,6),h.cable,t-1.2,i+6.2,e-2.2)),n.add(f(new v(1.4,1.2,1.4),h.crate,t+1.6,i+8.6,e-3.2)),At(n,-28,-68,.2),At(n,-27,-71,-.4,1.1),At(n,-44,-80,.3),At(n,-42.5,-68.5,.1,.95),n.add(U("CONSTRUCTION","#1a100c","#f0c089",4,.7,t,i+4.6,e+6.4)),n.add(U("NEXT KIT","#1a100c","#d6b48a",3.2,.5,t,i+3.9,e+6.4)),n}function xm(){const n=new Q;n.name="crew-ops";const t=-50,e=-72,i=H(t,e);return n.add(f(new v(12,.2,10),h.concrete,t,i+.08,e)),an(n,t,e,Math.PI/2,{r:2.2,len:7.6,airlock:!0,label:"MED"}),n.add(U("CREW OPS","#1a100c","#f0c089",3.4,.6,t,i+5.35,e+.2)),n.add(U("MEDICAL","#1a100c","#d6b48a",3,.45,t,i+4.75,e+.2)),At(n,-55.2,-76.4,.2,.9),At(n,-44.8,-68.6,-.25,.95),n}function vm(){const n=new Q;n.name="commons";const t=10,e=-124,i=H(t,e);return n.add(f(new v(16,.22,12),h.concrete,t,i+.08,e)),an(n,t,e,0,{airlock:!0,label:"MESS"}),n.add(U("CREW COMMONS","#1a100c","#f0c089",4.2,.7,t,i+6.15,e+.2)),n.add(U("FROM CARGO","#1a100c","#d6b48a",3.4,.48,t,i+5.5,e+.2)),At(n,17.2,-119.4,.2),At(n,18.4,-121.8,-.3,1.05),At(n,3.2,-118.6,.15,.9),At(n,16.6,-128.8,.4,.95),n}function Mm(){const n=new Q;n.name="methalox-stock";const t=20,e=8,i=H(t,e);n.add(f(new v(16,.22,12),h.concrete,t,i+.08,e));for(let s=0;s<3;s++){const r=e-3.4+s*3.4;n.add(f(new Y(1.15,1.15,6.4,16),h.tankCh4,t-3.2,i+1.45,r,0,0,Math.PI/2)),n.add(f(new Y(1.15,1.15,6.4,16),h.tankO2,t+3.2,i+1.45,r,0,0,Math.PI/2))}return n.add(U("METHALOX","#1a100c","#f0c089",3.6,.7,t,i+3.55,e+6.2)),n.add(U("RETURN STOCK","#1a100c","#d6b48a",3.8,.5,t,i+2.9,e+6.2)),n.add(U("CH4","#6a2208","#f4e6c8",1.6,.42,t-3.2,i+2.85,e+3.6)),n.add(U("O2","#2a3340","#e8eef4",1.4,.42,t+3.2,i+2.85,e+3.6)),It(n,[[20,2],[8,-2],[-8,-6],[-15,-8]],h.tankCh4,.12),At(n,27.2,12.4,.2,.9),At(n,12.6,13.1,-.25,.95),n}function ym(){const n=new Q;n.name="next-window-pad";const t=-16,e=136;n.add(qn(t,e,{finished:!0}));const i=H(t,e);return n.add(U("NEXT WINDOW","#1a100c","#f0c089",4.6,.85,t+22,i+3.6,e+4,-.55)),n.add(U("26 MONTHS","#1a100c","#d6b48a",3.6,.55,t+22,i+2.75,e+4,-.55)),n.add(f(new v(.12,3.4,.12),h.steelDark,t+22,i+1.7,e+4)),n.add(U("PAD 2","#1a100c","#f0c089",2.4,.55,t,i+.55,e+22.4)),n.add(f(new Y(18.4,18.4,.12,40),h.concrete,t,i+.38,e)),n.add(f(new ji(9.2,17.6,36),h.soot,t,i+.46,e,-Math.PI/2,0,0)),n.add(U("SINTERED","#1a100c","#f0c089",3.6,.55,t+22,i+1.95,e+4,-.55)),n.add(Sm(-38,148)),At(n,-32,124,.2,.9),At(n,-30.6,126.4,-.25,.95),At(n,-40,144,.1,.85),At(n,-41.4,146.2,-.3,.8),n}function Sm(n,t){const e=new Q;e.name="sinter-rig";const i=H(n,t);e.add(f(new v(8.4,.22,6.2),h.concrete,n,i+.1,t)),e.add(f(new v(5.6,2.4,3.2),h.habDark,n,i+1.4,t)),e.add(f(new v(1.6,3.6,1.6),h.steelDark,n+2.8,i+2,t-.4)),e.add(f(new Y(.18,.18,4.8,8),h.steel,n+2.8,i+5.2,t-.4)),e.add(f(new v(2.4,.18,1.1),h.glowWarm,n+2.8,i+7.6,t-.4)),e.add(U("SINTER","#1a100c","#f0c089",3.2,.6,n,i+2.9,t+1.85)),e.add(U("REGOLITH","#1a100c","#d6b48a",3.4,.45,n,i+2.3,t+1.85));for(let s=0;s<4;s++)e.add(f(new v(1.4,.28,.9),h.concrete,n-2.4,i+.35+s*.32,t+2.6));return e}function wm(){const n=new Q;n.name="solar-4";const t=6,e=5;for(let c=0;c<t;c++)for(let d=0;d<e;d++){const p=145+c*5.4,u=-48-d*6.2,m=H(p,u);n.add(f(new v(.18,1.6,.18),h.solarFrame,p,m+.8,u)),n.add(f(new v(4.6,.08,2.3),h.solar,p,m+1.55,u,-.55,.15,0)),n.add(f(new v(4.75,.05,2.42),h.solarFrame,p,m+1.5,u,-.55,.15,0))}const[i,s,r]=We(146,-46,.7);n.add(f(new v(2.2,1.4,1.4),h.habDark,i,s,r)),n.add(U("POWER","#111111","#f4e6c8",2,.55,i,s+.2,r+.75)),n.add(U("FIELD 4","#111111","#d6b48a",2.2,.45,i,s+.85,r+.75));const a=158,o=-28,l=H(a,o);n.add(f(new v(12,.2,7.2),h.concrete,a,l+.1,o));for(let c=0;c<5;c++)n.add(f(new v(1.7,2,4.2),h.battery,a-4+c*2,l+1.2,o));return n.add(U("NIGHT","#111111","#f4e6c8",2.2,.5,a,l+2.7,o+3.6)),n.add(U("FIELD 4","#111111","#d6b48a",2.4,.42,a,l+2.15,o+3.6)),n}function Em(){const n=new Q;n.name="isru-2";const t=-96,e=-16,i=H(t,e);return n.add(f(new v(18,.35,18),h.concrete,t,i+.12,e)),n.add(f(new Y(1.55,1.7,11,12),h.steelDark,t+2.2,i+5.8,e)),n.add(f(new jt(2.15,.16,6,14),h.steel,t+2.2,i+8.8,e,Math.PI/2,0,0)),n.add(U("SABATIER","#1a100c","#f0c089",4.4,.9,t+4.2,i+7.2,e,Math.PI/2)),n.add(U("TRAIN 2","#1a100c","#d6b48a",3.2,.55,t+4.2,i+6.3,e,Math.PI/2)),n.add(f(new Y(2.4,2.4,11,18),h.tankCh4,t-5.2,i+6,e+4.6,0,0,Math.PI/2)),n.add(f(new Y(2.4,2.4,11,18),h.tankO2,t-5.2,i+6,e-4.4,0,0,Math.PI/2)),n.add(U("CH4","#6a2208","#f4e6c8",2.8,.8,t+.4,i+6,e+4.6)),n.add(U("O2","#2a3340","#e8eef4",2.6,.8,t+.4,i+6,e-4.4)),It(n,[[-88,-16],[-80,-16],[-72,-16]],h.tankCh4,.14),It(n,[[-88,-18],[-80,-20],[-72,-18]],h.steel,.12),n}function bm(){const n=new Q;n.name="ice-mine-2";const t=-78,e=-172,i=H(t,e);n.add(f(new v(8,.3,8),h.concrete,t,i+.1,e)),n.add(f(new v(.28,14,.28),h.lattice,t-2.2,i+7,e-2.2)),n.add(f(new v(.28,14,.28),h.lattice,t+2.2,i+7,e-2.2)),n.add(f(new v(.28,14,.28),h.lattice,t-2.2,i+7,e+2.2)),n.add(f(new v(.28,14,.28),h.lattice,t+2.2,i+7,e+2.2)),n.add(f(new v(5.2,.25,5.2),h.steelDark,t,i+14.2,e)),n.add(f(new Y(.35,.55,9,10),h.steel,t,i+5,e)),n.add(f(new ns(.7,1.6,8),h.soot,t,i+.9,e));const s=f(new ve(4,0),h.ice,t+8.2,i+1.8,e+1.4);return s.scale.set(1.45,.75,1.2),n.add(s),n.add(f(new v(6.4,.35,1.1),h.steelDark,t+3.6,i+1.4,e,0,0,-.18)),n.add(U("ICE 2","#1a2830","#d6e6ef",2.6,.65,t,i+8.4,e+2.6)),It(n,[[-74,-168],[-68,-150],[-64,-90],[-68,-26]],h.pipe,.13),n}function Tm(){const n=new Q;n.name="workshop-2";const t=66,e=-74,i=H(t,e);n.add(f(new v(16,.28,12),h.concrete,t,i+.1,e));const s=f(new Y(5.4,5.4,14,16,1,!1,0,Math.PI),h.habDark,t-1.2,i+3.1,e);return s.rotation.z=Math.PI/2,n.add(s),n.add(f(new v(.2,3.8,5.8),h.steelDark,t-8.1,i+2,e)),n.add(f(new v(.28,8.4,.28),h.lattice,t+6.4,i+4.3,e-3.6)),n.add(f(new v(7.2,.2,.2),h.lattice,t+3,i+8.5,e-3.6)),n.add(f(new v(1.5,1.1,1.5),h.crate,t+2.2,i+8,e-3.4)),At(n,73.2,-69.4,.2),At(n,74.4,-71.6,-.3,1.05),At(n,58.6,-68.8,.15,.9),n.add(U("WORKSHOP","#1a100c","#f0c089",3.8,.75,t,i+5.4,e+.2)),n.add(U("BAY 2","#1a100c","#d6b48a",2.6,.5,t,i+4.7,e+.2)),n}function Am(){const n=new Q;n.name="potable";const t=18,e=-152,i=H(t,e);n.add(f(new v(14,.22,10),h.concrete,t,i+.1,e));for(let s=0;s<4;s++){const r=t-4.5+s*3;n.add(f(new Y(1.15,1.15,6.2,14),h.pipe,r,i+1.5,e,0,0,Math.PI/2))}return n.add(U("POTABLE","#1a2830","#d6e6ef",3.4,.7,t,i+3.35,e+4.6)),n.add(U("HAB STORE","#1a2830","#d6b48a",3.2,.5,t,i+2.7,e+4.6)),It(n,[[18,-148],[8,-142],[-6,-120],[-18,-88]],h.pipe,.12),n}function Rm(){const n=new Q;n.name="hab-berms";const t=[[-58,-108,9.5,.2],[-20,-100,12.5,0],[22,-128,8.5,1.2],[-8,-148,7.5,.4]];for(const[r,a,o,l]of t){const c=H(r,a),d=f(new jt(o,1.55,8,24,Math.PI*1.15),h.rust,r,c-.2,a,Math.PI/2,l,0);d.scale.set(1,.42,1),n.add(d)}for(const[r,a]of[[-62,-102],[-14,-96],[26,-122]]){const o=f(new ve(2.4,0),h.rust,r,H(r,a)+.95,a);o.scale.set(1.25,.6,1.05),n.add(o)}const[e,i,s]=We(-20,-100,2.4);return n.add(U("DUST BERM","#1a100c","#f0c089",3.6,.65,e,i+1.1,s)),n.add(U("HAB WIND","#1a100c","#d6b48a",3.2,.48,e,i+.5,s)),n}function Cm(){const n=new Q;n.name="earth-dish-2";const t=-8,e=-162,i=H(t,e);n.add(f(new Y(6.2,6.2,.26,28),h.concrete,t,i+.1,e)),n.add(f(new Y(1.1,1.4,4.2,12),h.steelDark,t,i+2.2,e));const s=new Q;return s.position.set(t,i+6.8,e),s.rotation.set(-.88,.55,0),s.add(f(new xe(5.2,22,14,0,Math.PI*2,0,Math.PI/2.28),h.dish,0,0,0)),s.add(f(new Y(.06,.06,3.8,6),h.steelDark,0,1.9,0)),n.add(s),n.add(U("EARTH 2","#1a100c","#f0c089",3.2,.65,t,i+3.6,e+5.2)),n.add(U("BACKUP LINK","#1a100c","#d6b48a",3.4,.5,t,i+2.95,e+5.2)),n}function Pm(){const n=new Q;n.name="eclss";const t=8,e=-98,i=H(t,e);return n.add(f(new v(11.2,.22,7.2),h.concrete,t,i+.1,e)),n.add(f(new v(4.8,2.6,3.4),h.habDark,t-2.4,i+1.5,e)),n.add(U("ECLSS","#1a100c","#f0c089",3.2,.6,t-2.4,i+3.05,e+1.85)),n.add(U("CO2 SCRUB","#1a100c","#d6b48a",3.4,.45,t-2.4,i+2.45,e+1.85)),n.add(f(new Y(.85,.85,3.4,12),h.steelDark,t+1.6,i+1.9,e-1.4)),n.add(f(new Y(.85,.85,3.4,12),h.steelDark,t+3.4,i+1.9,e-1.4)),n.add(U("AMINE","#1a100c","#d6b48a",2.2,.4,t+2.5,i+3.8,e-1.4)),n.add(f(new Y(.7,.7,2.6,12),h.tankO2,t+1.6,i+1.5,e+1.8)),n.add(f(new Y(.7,.7,2.6,12),h.tankO2,t+3.4,i+1.5,e+1.8)),n.add(U("O2","#2a3340","#e8eef4",1.4,.4,t+2.5,i+3.05,e+1.8)),It(n,[[8,-98],[14,-104],[22,-112]],h.pipe,.1),It(n,[[8,-98],[2,-102],[-6,-108]],h.tankO2,.09),n}function Dm(){const n=new Q;n.name="rover-shelter";const t=48,e=-70,i=H(t,e);n.add(f(new v(12.4,.18,8.6),h.concrete,t,i+.08,e));const s=[[-5.2,-3.4],[5.2,-3.4],[-5.2,3.4],[5.2,3.4]];for(const[r,a]of s)n.add(f(new v(.28,4.6,.28),h.steelDark,t+r,i+2.4,e+a));return n.add(f(new v(12.8,.16,9),h.steel,t,i+4.75,e)),n.add(f(new v(12.8,.06,9),h.solar,t,i+4.88,e)),n.add(U("DUST","#1a100c","#f0c089",2.6,.5,t,i+5.35,e+4.6)),n.add(U("ROVER","#1a100c","#d6b48a",2.8,.42,t,i+4.8,e+4.6)),n}function Im(){const n=new Q;n.name="isru-radiators";const t=-68,e=12,i=H(t,e);n.add(f(new v(16.4,.18,6.2),h.concrete,t,i+.08,e));for(let s=0;s<5;s++){const r=t-6+s*3;n.add(f(new v(.16,3.6,.16),h.steelDark,r,i+1.9,e-1.8)),n.add(f(new v(.16,3.6,.16),h.steelDark,r,i+1.9,e+1.8)),n.add(f(new v(2.4,3.2,.08),h.solar,r,i+2.4,e,-.15,0,0)),n.add(f(new v(2.5,3.3,.04),h.steel,r,i+2.4,e+.06,-.15,0,0))}return n.add(U("REJECT","#1a100c","#f0c089",2.8,.5,t,i+4.55,e+3.2)),n.add(U("HEAT","#1a100c","#d6b48a",2.4,.42,t,i+4,e+3.2)),It(n,[[-68,-6],[-68,4],[-68,12]],h.pipe,.1),n}function Lm(){const n=new Q;n.name="parts-depot";const t=22,e=-80,i=H(t,e);return n.add(f(new v(12.2,.18,8.2),h.concrete,t,i+.08,e)),n.add(f(new v(.22,3.8,8.2),h.steelDark,t-5.8,i+2,e)),n.add(f(new v(12.2,.14,8.4),h.steel,t,i+3.95,e)),At(n,18,-78,.15,1),At(n,20.2,-77.4,-.2,.95),At(n,18.4,-81.2,.3,1.05),At(n,24.6,-78.6,-.1,1),At(n,26.2,-81.8,.25,.9),n.add(f(new v(2.4,1.1,1.4),h.steel,t+1.2,i+.75,e+.4)),n.add(U("PARTS","#1a100c","#f0c089",2.8,.55,t,i+4.45,e+4.2)),n.add(U("CARGO","#1a100c","#d6b48a",2.6,.42,t,i+3.9,e+4.2)),n}function Um(){const n=new Q;n.name="greenhouse-2";const t=52,e=-112,i=H(t,e);n.add(f(new v(13.6,.22,8.2),h.concrete,t,i+.1,e));const s=new oe(new Y(3.7,3.7,12.6,16,1,!1,0,Math.PI),h.glass);s.rotation.z=Math.PI/2,s.position.set(t,i+3.7,e),s.castShadow=!1,n.add(s),n.add(f(new v(12.4,.1,7.6),h.solarFrame,t,i+3.75,e));for(let r=-2;r<=2;r++){n.add(f(new v(1.9,.24,6),h.soil,t+r*2.15,i+.34,e));for(let a=-2;a<=2;a++){const o=a%2===0?h.plant:h.plantLeaf;n.add(f(new v(1.3,.48,.74),o,t+r*2.15,i+.68,e+a*1.05))}n.add(f(new v(1.55,.05,5.6),h.glowWarm,t+r*2.15,i+3.2,e))}return n.add(U("GREENHOUSE 2","#1a100c","#f0c089",4,.65,t,i+5.15,e+.15)),n.add(U("GROW FROM CO2","#1a100c","#d6b48a",3.6,.48,t,i+4.5,e+.15)),It(n,[[32,-112],[42,-112],[52,-112]],h.pipe,.1),n}function Nm(){const n=new Q;n.name="ice-depot";const t=-90,e=-158,i=H(t,e);n.add(f(new v(12,.22,10),h.concrete,t,i+.1,e)),n.add(f(new v(3.6,2.4,2.8),h.steelDark,t-1.8,i+1.35,e)),n.add(f(new Y(.85,1.65,2.1,10),h.steelDark,t-1.8,i+3.35,e)),n.add(f(new v(2.4,.28,1.05),h.steel,t+.7,i+2.1,e,0,0,-.2));const s=f(new ve(2.8,0),h.ice,t+3.6,i+1.25,e+1.5);return s.scale.set(1.35,.7,1.15),n.add(s),n.add(f(new ve(1.15,0),h.ice,t+4.8,i+.85,e+.2)),n.add(U("ICE","#1a2830","#d6e6ef",2.2,.55,t,i+3.85,e+4.4)),n.add(U("CRUSH","#1a2830","#d6e6ef",2.6,.5,t,i+3.2,e+4.4)),It(n,[[-86,-160],[-80,-166],[-74,-168]],h.pipe,.13),n}function Fm(){const n=new Q;n.name="batteries-3";const t=8,e=-78,i=H(t,e);n.add(f(new v(11.6,.2,6.4),h.concrete,t,i+.1,e));for(let s=0;s<5;s++)n.add(f(new v(1.7,1.95,3.8),h.battery,t-4+s*2,i+1.15,e)),n.add(f(new v(1.55,.08,3.6),h.steel,t-4+s*2,i+2.18,e));return n.add(U("NIGHT","#111111","#f4e6c8",2.4,.5,t,i+2.7,e+3.3)),n.add(U("HAB STORE","#111111","#d6b48a",3,.42,t,i+2.15,e+3.3)),n}function zm(){const n=new Q;n.name="o2-buffer";const t=-8,e=-88,i=H(t,e);n.add(f(new v(10.2,.2,7.4),h.concrete,t,i+.1,e));for(let s=0;s<4;s++){const r=t-3.3+s*2.2;n.add(f(new Y(.85,.85,3.6,12),h.tankO2,r,i+2,e))}return n.add(U("O2","#2a3340","#e8eef4",1.8,.5,t,i+4.15,e+3.7)),n.add(U("CREW","#2a3340","#d6b48a",2.2,.42,t,i+3.6,e+3.7)),It(n,[[-8,-88],[0,-94],[8,-98]],h.tankO2,.1),n}function Om(){const n=new Q;n.name="co2-capture";const t=-96,e=4,i=H(t,e);return n.add(f(new v(11.6,.2,7.4),h.concrete,t,i+.1,e)),n.add(f(new Y(.55,.55,6.8,10),h.steel,t-2.4,i+3.6,e)),n.add(f(new Y(2.1,.65,2.4,14),h.steelDark,t-2.4,i+7.8,e)),n.add(f(new jt(1.85,.1,6,16),h.steel,t-2.4,i+9.1,e,Math.PI/2,0,0)),n.add(f(new v(3.2,2.2,2.4),h.habDark,t+2.2,i+1.3,e)),n.add(U("CO2","#1a100c","#f0c089",2.2,.55,t-2.4,i+4.8,e+1.4)),n.add(U("INTAKE 2","#1a100c","#d6b48a",3,.45,t+2.2,i+2.7,e+1.35)),It(n,[[-96,4],[-96,-6],[-96,-16]],h.pipe,.12),n}function Bm(){const n=new Q;n.name="solar-dust-fence";const t=142,e=-62,i=H(t,e);for(let s=0;s<8;s++){const r=e-10.5+s*3;n.add(f(new v(.18,3.4,.18),h.steelDark,t,i+1.8,r)),s<7&&n.add(f(new v(.06,2.6,2.7),h.lattice,t,i+1.7,r+1.5))}return n.add(U("DUST","#1a100c","#f0c089",2.4,.45,t-1.4,i+3.5,e)),n.add(U("FENCE","#1a100c","#d6b48a",2.4,.4,t-1.4,i+3,e)),n}function km(){const n=new Q;n.name="condensate";const t=28,e=-140,i=H(t,e);return n.add(f(new v(9.6,.2,7.2),h.concrete,t,i+.1,e)),n.add(f(new Y(1.35,1.35,3.8,14),h.pipe,t-1.6,i+2.1,e)),n.add(f(new Y(1.35,1.35,3.8,14),h.pipe,t+1.8,i+2.1,e)),n.add(f(new v(2.4,1.6,1.8),h.habDark,t,i+1,e+2.2)),n.add(U("H2O","#1a2830","#d6e6ef",2.2,.5,t,i+4.3,e+3.6)),n.add(U("CONDENSATE","#1a2830","#d6b48a",3.6,.42,t,i+3.75,e+3.6)),It(n,[[28,-140],[18,-146],[18,-152]],h.pipe,.1),It(n,[[28,-140],[16,-142],[8,-142]],h.pipe,.09),n}function Hm(){const n=new Q;n.name="eva-rack";const t=12,e=18,i=H(t,e);return n.add(f(new v(5.8,.16,2.4),h.steelDark,t,i+.08,e)),n.add(f(new v(.16,2.8,.16),h.steel,t-2.4,i+1.5,e-.7)),n.add(f(new v(.16,2.8,.16),h.steel,t+2.4,i+1.5,e-.7)),n.add(f(new v(5,.12,.12),h.steel,t,i+2.9,e-.7)),n.add(Ln(t-1.5,e,.2)),n.add(Ln(t,e+.15,-.1)),n.add(Ln(t+1.5,e,.15)),n.add(U("SUITS","#1a100c","#f0c089",2.4,.45,t,i+3.35,e+1.2)),n.add(U("EVA RACK","#1a100c","#d6b48a",2.8,.4,t,i+2.85,e+1.2)),n}function Gm(){const n=new Q;n.name="ch4-buffer";const t=36,e=8,i=H(t,e);n.add(f(new v(9.6,.2,7.2),h.concrete,t,i+.1,e));for(let s=0;s<3;s++)n.add(f(new Y(1.05,1.05,5.6,14),h.tankCh4,t-2.4+s*2.4,i+1.4,e,0,0,Math.PI/2));return n.add(U("CH4","#6a2208","#f4e6c8",2.2,.5,t,i+3.35,e+3.7)),n.add(U("RETURN","#6a2208","#d6b48a",2.6,.42,t,i+2.8,e+3.7)),It(n,[[28,8],[32,8],[36,8]],h.tankCh4,.11),n}function Vm(){const n=new Q;n.name="o2-return";const t=36,e=-6,i=H(t,e);n.add(f(new v(9.6,.2,7.2),h.concrete,t,i+.1,e));for(let s=0;s<3;s++)n.add(f(new Y(1.05,1.05,5.6,14),h.tankO2,t-2.4+s*2.4,i+1.4,e,0,0,Math.PI/2));return n.add(U("O2","#2a3340","#e8eef4",1.8,.5,t,i+3.35,e+3.7)),n.add(U("RETURN","#2a3340","#d6b48a",2.6,.42,t,i+2.8,e+3.7)),It(n,[[36,8],[36,1],[36,-6]],h.steel,.11),n}function Wm(){const n=new Q;n.name="isru-electrolysis";const t=-50,e=4,i=H(t,e);n.add(f(new v(11.6,.2,7.4),h.concrete,t,i+.1,e)),n.add(f(new v(3.4,3.6,2.6),h.habDark,t-2.6,i+2,e)),n.add(f(new v(3.4,3.6,2.6),h.steelDark,t+1.2,i+2,e));for(let s=0;s<4;s++)n.add(f(new v(.18,3.1,2.2),h.steel,t-3.8+s*.7,i+2,e));return n.add(f(new Y(1.15,1.15,5.2,14),h.steel,t+4.2,i+2.8,e+1.4)),n.add(f(new Y(.95,.95,4.4,14),h.tankO2,t+4.2,i+2.4,e-1.6)),n.add(U("ELECTRO","#1a100c","#f0c089",3.2,.5,t,i+4.55,e+3.7)),n.add(U("H2 RECYCLE","#1a100c","#d6b48a",3.4,.42,t,i+4,e+3.7)),It(n,[[-72,-26],[-50,-16],[-50,4]],h.pipe,.11),It(n,[[-50,4],[-58,4],[-64,-8]],h.steel,.1),n}function Xm(){const n=new Q;n.name="ice-melt";const t=-58,e=-142,i=H(t,e);n.add(f(new v(9.6,.2,7.2),h.concrete,t,i+.1,e)),n.add(f(new v(3.6,2.8,3.2),h.habDark,t-1.8,i+1.6,e)),n.add(f(new Y(1.45,1.45,4.2,14),h.pipe,t+2.2,i+2.3,e)),n.add(f(new Y(.55,.85,1.6,10),h.steelDark,t+2.2,i+4.9,e));const s=f(new ve(1.8,0),h.ice,t-3.4,i+.9,e+2.1);return s.scale.set(1.15,.55,1),n.add(s),n.add(U("MELT","#1a2830","#d6e6ef",2.4,.5,t,i+4.4,e+3.7)),n.add(U("STILL","#1a2830","#d6b48a",2.2,.42,t,i+3.85,e+3.7)),It(n,[[-58,-158],[-58,-150],[-58,-142]],h.pipe,.11),It(n,[[-58,-142],[-64,-90],[-68,-26]],h.pipe,.1),n}function qm(){const n=new Q;n.name="methalox-pump";const t=-32,e=-22,i=H(t,e);return n.add(f(new v(9.6,.2,7.2),h.concrete,t,i+.1,e)),n.add(f(new v(5.2,3.2,4.4),h.habDark,t,i+1.8,e)),n.add(f(new v(5.4,.14,4.6),h.steel,t,i+3.5,e)),n.add(f(new Y(.55,.55,1.8,10),h.tankCh4,t-1.4,i+1.1,e+2.6,0,0,Math.PI/2)),n.add(f(new Y(.55,.55,1.8,10),h.steel,t+1.4,i+1.1,e+2.6,0,0,Math.PI/2)),n.add(U("PUMP","#1a100c","#f0c089",2.4,.5,t,i+4.15,e+3.7)),n.add(U("METHALOX","#1a100c","#d6b48a",3.2,.42,t,i+3.6,e+3.7)),It(n,[[-32,-14],[-32,-18],[-32,-22]],h.tankCh4,.11),It(n,[[-32,-18],[-32,-22],[-18,-10]],h.steel,.1),n}function Ym(){const n=new Q;n.name="sinter-press";const t=66,e=-90,i=H(t,e);return n.add(f(new v(9.6,.2,7.2),h.concrete,t,i+.1,e)),n.add(f(new v(4.6,2.2,3.4),h.steelDark,t,i+1.3,e)),n.add(f(new v(1.4,3.4,1.4),h.steel,t,i+3.2,e)),n.add(f(new v(3.2,.35,2.4),h.steel,t,i+4.9,e)),n.add(f(new v(2.2,.55,1.6),h.habDark,t,i+2.55,e)),At(n,62.2,-87.6,.2,.9),At(n,70,-92.2,-.15,.85),n.add(U("SINTER","#1a100c","#f0c089",2.8,.5,t,i+5.55,e+3.7)),n.add(U("PRESS","#1a100c","#d6b48a",2.4,.42,t,i+5,e+3.7)),n}function Km(){const n=new Q;n.name="waste-recycle";const t=22,e=-98,i=H(t,e);return n.add(f(new v(9.6,.2,7.2),h.concrete,t,i+.1,e)),n.add(f(new v(4.4,2.8,3.6),h.habDark,t-1.4,i+1.6,e)),n.add(f(new Y(1.15,1.15,3.6,14),h.pipe,t+2.8,i+2,e)),n.add(f(new Y(.85,.85,2.8,12),h.steelDark,t+2.8,i+1.6,e+2)),n.add(U("WASTE","#1a100c","#f0c089",2.6,.5,t,i+4.25,e+3.7)),n.add(U("RECOVERY","#1a100c","#d6b48a",3.2,.42,t,i+3.7,e+3.7)),It(n,[[8,-98],[14,-98],[22,-98]],h.pipe,.1),It(n,[[22,-98],[22,-112],[22,-112]],h.pipe,.09),n}function Jm(){const n=new Q;n.name="solar-combiner";const t=172,e=-48,i=H(t,e);n.add(f(new v(9.6,.2,7.2),h.concrete,t,i+.1,e)),n.add(f(new v(3.6,2.4,2.8),h.habDark,t-2,i+1.4,e)),n.add(f(new v(3.2,2,2.4),h.steelDark,t+2.2,i+1.2,e));for(let s=0;s<3;s++)n.add(f(new v(.7,1.5,1.8),h.battery,t+1.2+s*.85,i+1,e));return n.add(U("COMBINER","#111111","#f4e6c8",3.4,.5,t,i+3.55,e+3.7)),n.add(U("FIELD 4","#111111","#d6b48a",2.6,.42,t,i+3,e+3.7)),It(n,[[158,-62],[166,-54],[172,-48]],h.cable,.1),It(n,[[172,-48],[164,-38],[158,-28]],h.cable,.09),n}function Zm(){const n=new Q;n.name="gh-dust-filter";const t=38,e=-104,i=H(t,e);return n.add(f(new v(9.2,.18,5.6),h.concrete,t,i+.09,e)),n.add(f(new v(3.8,2.6,2.4),h.habDark,t-1.6,i+1.5,e)),n.add(f(new Y(.95,.95,3.2,12),h.steelDark,t+2.4,i+1.8,e)),n.add(f(new v(.12,2.2,2),h.lattice,t+3.5,i+1.4,e)),n.add(U("DUST","#1a100c","#f0c089",2.2,.45,t,i+3.55,e+2.9)),n.add(U("FILTER","#1a100c","#d6b48a",2.6,.4,t,i+3.05,e+2.9)),It(n,[[22,-112],[30,-108],[38,-104]],h.pipe,.1),It(n,[[38,-104],[46,-108],[52,-112]],h.pipe,.09),n}function $m(){const n=new Q;n.name="weather-mast";const t=24,e=-128,i=H(t,e);return n.add(f(new v(3.6,.16,3.6),h.concrete,t,i+.08,e)),n.add(f(new Y(.16,.22,14.4,8),h.lattice,t,i+7.3,e)),n.add(f(new v(2.8,.08,.08),h.steel,t,i+12.4,e)),n.add(f(new v(.08,.08,2.8),h.steel,t,i+12.4,e)),n.add(f(new v(2.2,.06,.06),h.steelDark,t,i+14.2,e)),n.add(f(new v(1.4,1.1,1.1),h.habDark,t+1.15,i+.75,e+.9)),n.add(U("MET","#1a100c","#f0c089",1.8,.42,t,i+8.6,e+1.6)),n.add(U("DUST","#1a100c","#d6b48a",2,.38,t,i+8.1,e+1.6)),n}function jm(){const n=new Q;n.name="ch4-chiller";const t=-80,e=20,i=H(t,e);return n.add(f(new v(9.6,.2,7.2),h.concrete,t,i+.1,e)),n.add(f(new v(4.2,2.6,3.2),h.habDark,t-1.6,i+1.5,e)),n.add(f(new Y(1.25,1.25,5,14),h.tankCh4,t+2.6,i+2.7,e)),n.add(f(new jt(1.55,.1,6,14),h.steel,t+2.6,i+4.4,e,Math.PI/2,0,0)),n.add(U("CH4","#6a2208","#f4e6c8",2,.45,t,i+4.15,e+3.7)),n.add(U("CHILLER","#1a100c","#d6b48a",2.8,.4,t,i+3.6,e+3.7)),It(n,[[-76,-10],[-80,6],[-80,20]],h.tankCh4,.11),It(n,[[-68,12],[-74,16],[-80,20]],h.pipe,.09),n}function Qm(){const n=new Q;n.name="pad2-beacons";const t=[[2,154],[-34,154],[2,118],[-34,118]];for(const[r,a]of t){const o=H(r,a);n.add(f(new Y(.14,.18,5.6,8),h.steelDark,r,o+2.9,a)),n.add(f(new v(.55,.55,.55),h.glowPad,r,o+5.85,a)),n.add(f(new v(.22,.9,.22),h.steel,r,o+6.4,a))}const e=6,i=148,s=H(e,i);return n.add(f(new v(5.4,.16,4.2),h.concrete,e,s+.08,i)),n.add(f(new v(2.6,1.6,1.8),h.habDark,e,s+1,i)),n.add(U("PAD 2","#1a100c","#f0c089",2.2,.42,e,s+2.35,i+2.2)),n.add(U("BEACONS","#1a100c","#d6b48a",2.6,.38,e,s+1.88,i+2.2)),n}function t1(){const n=new Q;n.name="cargo-crane";const t=-64,e=80,i=H(t,e);return n.add(f(new v(7.2,.2,7.2),h.concrete,t,i+.1,e)),n.add(f(new v(1.4,10.4,1.4),h.steelDark,t,i+5.3,e)),n.add(f(new v(.28,.28,12.4),h.steel,t+3.6,i+10.5,e-3.2,0,.55,.08)),n.add(f(new v(.18,3.2,.18),h.steelDark,t+7.4,i+8.4,e-6.6)),n.add(f(new v(1.5,1.3,1.5),h.crate,t+7.4,i+6.5,e-6.6)),At(n,t-2.4,e+2.2,.2,1),At(n,t-2.8,e-1.6,-.15,.9),n.add(U("CRANE","#1a100c","#f0c089",2.6,.5,t,i+6.4,e+3.6)),n.add(U("CARGO","#1a100c","#d6b48a",2.4,.42,t,i+5.85,e+3.6)),n}function e1(){const n=new Q;n.name="o2-chiller";const t=-80,e=32,i=H(t,e);return n.add(f(new v(9.6,.2,7.2),h.concrete,t,i+.1,e)),n.add(f(new v(4.2,2.6,3.2),h.habDark,t-1.6,i+1.5,e)),n.add(f(new Y(1.25,1.25,5,14),h.tankO2,t+2.6,i+2.7,e)),n.add(f(new jt(1.55,.1,6,14),h.steel,t+2.6,i+4.4,e,Math.PI/2,0,0)),n.add(U("O2","#2a3340","#e8eef4",1.8,.45,t,i+4.15,e+3.7)),n.add(U("CHILLER","#1a100c","#d6b48a",2.8,.4,t,i+3.6,e+3.7)),It(n,[[-80,20],[-80,26],[-80,32]],h.steel,.11),It(n,[[-72,-21],[-80,8],[-80,32]],h.steel,.09),n}function n1(){const n=new Q;n.name="power-trench";const t=100,e=-22,i=H(t,e);n.add(f(new v(7.6,.18,5.4),h.concrete,t,i+.08,e)),n.add(f(new v(3.2,1.8,2.4),h.habDark,t,i+1.1,e)),n.add(f(new v(1.4,.9,1.1),h.steelDark,t+2.4,i+.65,e+1.2)),n.add(U("POWER","#111111","#f4e6c8",2.6,.45,t,i+2.45,e+2.8)),n.add(U("TRENCH","#111111","#d6b48a",2.4,.38,t,i+1.95,e+2.8)),It(n,[[172,-48],[135,-40],[100,-22]],h.cable,.12),It(n,[[100,-22],[84,-16],[68,-10]],h.cable,.12);for(const[s,r]of[[148,-44],[122,-34],[84,-16]]){const a=H(s,r);n.add(f(new v(2.4,.16,1.1),h.steelDark,s,a+.12,r))}return n}function i1(){const n=new Q;n.name="regolith-stock";const t=-22,e=-56,i=H(t,e);n.add(f(new v(9.6,.16,7.2),h.concrete,t,i+.08,e));const s=f(new ve(2.6,0),h.soil,t-1.6,i+1.2,e);s.scale.set(1.35,.7,1.15),n.add(s);const r=f(new ve(2,0),h.soil,t+2.2,i+.95,e+1.1);return r.scale.set(1.2,.6,1.05),n.add(r),n.add(f(new v(2.2,1.2,1.6),h.steelDark,t+2.6,i+.8,e-2)),At(n,t-3.4,e-2.2,.2,.85),n.add(U("REGOLITH","#1a100c","#f0c089",3.4,.48,t,i+3.15,e+3.7)),n.add(U("SINTER FEED","#1a100c","#d6b48a",3.4,.4,t,i+2.6,e+3.7)),n}function s1(){const n=new Q;n.name="survey-2";const t=-124,e=-188,i=H(t,e);for(let r=0;r<3;r++){const a=r/3*Math.PI*2+.2,o=Math.cos(a)*.62,l=Math.sin(a)*.62;n.add(f(new v(.08,2.5,.08),h.steelDark,t+o,i+1.15,e+l,.32*Math.cos(a),0,.32*Math.sin(a)))}n.add(f(new v(.58,.32,.48),h.steelDark,t,i+2.28,e)),n.add(U("SURVEY 2","#1a100c","#f0c089",3,.55,t,i+3.4,e+1.2)),n.add(U("ICE WEST","#1a100c","#d6b48a",2.6,.4,t,i+2.85,e+1.2));const s=[[-136,-200],[-124,-200],[-112,-200],[-136,-188],[-124,-188],[-112,-188],[-136,-176],[-124,-176],[-112,-176]];for(let r=0;r<s.length;r++){const[a,o]=s[r];Ua(n,a,o,r%2===0?h.flagIce:h.flagDeposit)}return Bs(n,-130,-196,"ICE",h.flagIce),ga(n,-122,-184,.2),ga(n,-126.4,-182.6,-.3),n}function r1(){const n=new Q;n.name="h2-recycle";const t=-38,e=16,i=H(t,e);return n.add(f(new v(9.6,.2,7.2),h.concrete,t,i+.1,e)),n.add(f(new Y(1.55,1.55,6.4,16),h.steel,t-1.8,i+3.4,e)),n.add(f(new Y(1.55,1.55,6.4,16),h.steel,t+1.8,i+3.4,e)),n.add(f(new v(2.2,1.4,1.6),h.habDark,t,i+.9,e+2.2)),n.add(U("H2","#1a100c","#f0c089",1.8,.5,t,i+5.15,e+3.7)),n.add(U("RECYCLE","#1a100c","#d6b48a",2.8,.42,t,i+4.55,e+3.7)),It(n,[[-50,4],[-44,10],[-38,16]],h.steel,.11),It(n,[[-38,16],[-52,8],[-64,-8]],h.steel,.1),n}function a1(){const n=new Q;n.name="food-4";const t=70,e=-112,i=H(t,e);n.add(f(new v(11.6,.22,7.2),h.concrete,t,i+.1,e));const s=new oe(new Y(3.3,3.3,11.2,16,1,!1,0,Math.PI),h.glass);s.rotation.z=Math.PI/2,s.position.set(t,i+3.3,e),s.castShadow=!1,n.add(s),n.add(f(new v(10.8,.1,6.6),h.solarFrame,t,i+3.35,e));for(let r=-2;r<=2;r++){n.add(f(new v(1.7,.22,5.2),h.soil,t+r*1.95,i+.32,e));for(let a=-2;a<=2;a++){const o=a%2===0?h.plant:h.plantLeaf;n.add(f(new v(1.15,.5,.66),o,t+r*1.95,i+.7,e+a*.9))}}return n.add(U("GROW 4","#1a100c","#f0c089",2.8,.55,t,i+4.75,e+.15)),n.add(U("FROM CO2","#1a100c","#d6b48a",3,.42,t,i+4.15,e+.15)),It(n,[[52,-112],[62,-112],[70,-112]],h.pipe,.1),n}function o1(){const n=new Q;n.name="approach-lights";for(const[s,r]of[[4,68],[4,50],[4,32]]){const a=H(s,r);n.add(f(new Y(.12,.16,3.6,8),h.steelDark,s,a+1.9,r)),n.add(f(new v(.42,.42,.42),h.glowPad,s,a+3.85,r))}const t=16,e=48,i=H(t,e);return n.add(f(new v(5.2,.16,4),h.concrete,t,i+.08,e)),n.add(f(new v(2.4,1.5,1.6),h.habDark,t,i+.95,e)),n.add(U("APPROACH","#1a100c","#f0c089",3,.42,t,i+2.25,e+2.1)),n.add(U("LIGHTS","#1a100c","#d6b48a",2.2,.36,t,i+1.78,e+2.1)),n}function c1(){const n=new Q;n.name="isru-process-water";const t=-58,e=-36,i=H(t,e);return n.add(f(new v(11.2,.2,7.4),h.concrete,t,i+.1,e)),n.add(f(new Y(1.7,1.7,8.4,16),h.pipe,t-2.2,i+2,e,0,0,Math.PI/2)),n.add(f(new Y(1.7,1.7,8.4,16),h.pipe,t+2,i+2,e,0,0,Math.PI/2)),n.add(f(new v(2.4,1.6,1.8),h.habDark,t,i+1,e+2.4)),n.add(U("PROCESS","#1a2830","#d6e6ef",3.2,.5,t,i+4.55,e+3.8)),n.add(U("H2O","#1a2830","#d6b48a",2,.42,t,i+4,e+3.8)),It(n,[[-58,-142],[-58,-90],[-58,-36]],h.pipe,.11),It(n,[[-58,-36],[-64,-26],[-68,-16]],h.pipe,.1),It(n,[[-58,-36],[-50,-16],[-50,4]],h.pipe,.1),n}function l1(){const n=new Q;n.name="methalox-berm";const t=f(new jt(9.2,1.7,8,24,Math.PI*1.2),h.rust,50,H(50,4)-.15,4,Math.PI/2,1.6,0);t.scale.set(1,.45,1),n.add(t);for(const[r,a]of[[54,12],[56,4],[54,-4]]){const o=f(new ve(2.2,0),h.rust,r,H(r,a)+.9,a);o.scale.set(1.2,.55,1.05),n.add(o)}const[e,i,s]=We(50,4,2.2);return n.add(U("FARM BERM","#1a100c","#f0c089",3.4,.55,e,i+1.1,s)),n.add(U("METHALOX","#1a100c","#d6b48a",3.2,.42,e,i+.5,s)),n}function d1(){const n=new Q;n.name="ice-mine-berm";const t=f(new jt(8.4,1.6,8,24,Math.PI*1.15),h.rust,-40,H(-40,-168)-.15,-168,Math.PI/2,.4,0);t.scale.set(1,.44,1),n.add(t);for(const[r,a]of[[-34,-162],[-32,-170],[-38,-176]]){const o=f(new ve(2.1,0),h.rust,r,H(r,a)+.85,a);o.scale.set(1.15,.55,1),n.add(o)}const[e,i,s]=We(-40,-168,2.2);return n.add(U("MINE BERM","#1a2830","#d6e6ef",3.4,.55,e,i+1.1,s)),n.add(U("ICE 1","#1a2830","#d6b48a",2.2,.42,e,i+.5,s)),n}function h1(){const n=new Q;n.name="tool-crib";const t=82,e=-90,i=H(t,e);n.add(f(new v(9.6,.2,7.2),h.concrete,t,i+.1,e)),n.add(f(new v(7.2,2.6,3.4),h.habDark,t,i+1.5,e)),n.add(f(new v(7.4,.12,3.6),h.steel,t,i+2.85,e));for(let s=-2;s<=2;s++)n.add(f(new v(.9,1.6,.55),h.steelDark,t+s*1.15,i+1.15,e+1.35));return At(n,77.8,-87.4,.15,.85),At(n,86.2,-92.4,-.1,.8),n.add(U("TOOL","#1a100c","#f0c089",2.2,.5,t,i+3.85,e+3.7)),n.add(U("CRIB","#1a100c","#d6b48a",2,.42,t,i+3.3,e+3.7)),n}function u1(){const n=new Q;n.name="comms-battery";const t=4,e=-148,i=H(t,e);n.add(f(new v(9.6,.2,7.2),h.concrete,t,i+.1,e));for(let s=0;s<4;s++)n.add(f(new v(1.7,1.9,3.6),h.battery,t-3.2+s*2.1,i+1.15,e)),n.add(f(new v(1.55,.08,3.4),h.steel,t-3.2+s*2.1,i+2.15,e));return n.add(U("COMMS","#111111","#f4e6c8",2.6,.5,t,i+3.15,e+3.7)),n.add(U("NIGHT","#111111","#d6b48a",2.2,.42,t,i+2.6,e+3.7)),n}function f1(){const n=new Q;n.name="solar-combiner-3";const t=148,e=-40,i=H(t,e);n.add(f(new v(9.6,.2,7.2),h.concrete,t,i+.1,e)),n.add(f(new v(3.6,2.4,2.8),h.habDark,t-2,i+1.4,e)),n.add(f(new v(3.2,2,2.4),h.steelDark,t+2.2,i+1.2,e));for(let s=0;s<3;s++)n.add(f(new v(.7,1.5,1.8),h.battery,t+1.2+s*.85,i+1,e));return n.add(U("COMBINER","#111111","#f4e6c8",3.4,.5,t,i+3.55,e+3.7)),n.add(U("FIELD 3","#111111","#d6b48a",2.6,.42,t,i+3,e+3.7)),It(n,[[135,-40],[142,-40],[148,-40]],h.cable,.1),It(n,[[148,-40],[124,-30],[100,-22]],h.cable,.09),n}function p1(){const n=new Q;n.name="solar-combiner-2";const t=124,e=-70,i=H(t,e);n.add(f(new v(9.6,.2,7.2),h.concrete,t,i+.1,e)),n.add(f(new v(3.6,2.4,2.8),h.habDark,t-2,i+1.4,e)),n.add(f(new v(3.2,2,2.4),h.steelDark,t+2.2,i+1.2,e));for(let s=0;s<3;s++)n.add(f(new v(.7,1.5,1.8),h.battery,t+1.2+s*.85,i+1,e));return n.add(U("COMBINER","#111111","#f4e6c8",3.4,.5,t,i+3.55,e+3.7)),n.add(U("FIELD 2","#111111","#d6b48a",2.6,.42,t,i+3,e+3.7)),It(n,[[112,-83],[118,-76],[124,-70]],h.cable,.1),It(n,[[124,-70],[136,-54],[148,-40]],h.cable,.09),n}function m1(){const n=new Q;n.name="solar-combiner-1";const t=96,e=-44,i=H(t,e);n.add(f(new v(9.6,.2,7.2),h.concrete,t,i+.1,e)),n.add(f(new v(3.6,2.4,2.8),h.habDark,t-2,i+1.4,e)),n.add(f(new v(3.2,2,2.4),h.steelDark,t+2.2,i+1.2,e));for(let s=0;s<3;s++)n.add(f(new v(.7,1.5,1.8),h.battery,t+1.2+s*.85,i+1,e));return n.add(U("COMBINER","#111111","#f4e6c8",3.4,.5,t,i+3.55,e+3.7)),n.add(U("FARM 1","#111111","#d6b48a",2.4,.42,t,i+3,e+3.7)),It(n,[[82,-44],[90,-44],[96,-44]],h.cable,.1),It(n,[[96,-44],[98,-32],[100,-22]],h.cable,.09),n}function g1(){const n=new Q;n.name="sabatier-condenser";const t=-84,e=8,i=H(t,e);return n.add(f(new v(9.6,.2,7.2),h.concrete,t,i+.1,e)),n.add(f(new v(3.8,2.4,2.8),h.habDark,t-2,i+1.4,e)),n.add(f(new Y(1.35,1.35,4.6,14),h.pipe,t+2.4,i+2.5,e)),n.add(f(new jt(1.65,.1,6,14),h.steel,t+2.4,i+4.1,e,Math.PI/2,0,0)),n.add(f(new Y(.7,.7,2.4,12),h.steelDark,t+2.4,i+1.4,e+2.1)),n.add(U("KNOCKOUT","#1a2830","#d6e6ef",3.4,.45,t,i+4.15,e+3.7)),n.add(U("H2O","#1a2830","#d6b48a",1.8,.4,t,i+3.6,e+3.7)),It(n,[[-68,-16],[-76,-4],[-84,8]],h.pipe,.11),It(n,[[-84,8],[-80,14],[-80,20]],h.tankCh4,.09),n}function _1(){const n=new Q;n.name="hab-dust-lock";const t=16,e=-86,i=H(t,e);return n.add(f(new v(8.4,.2,6.4),h.concrete,t,i+.1,e)),n.add(f(new v(6.2,3.4,4.4),h.habDark,t,i+1.9,e)),n.add(f(new v(6.4,.16,4.6),h.steel,t,i+3.65,e)),n.add(f(new v(1.8,2.4,.22),h.steelDark,t,i+1.5,e+2.3)),n.add(f(new v(1.8,2.4,.22),h.steelDark,t,i+1.5,e-2.3)),n.add(Ln(t+2.6,e+.2,.1)),n.add(U("DUST LOCK","#1a100c","#f0c089",3.4,.45,t,i+4.35,e+2.4)),n.add(U("HAB EVA","#1a100c","#d6b48a",2.6,.4,t,i+3.85,e+2.4)),n}const tc=new A(.55,.62,.38);function v1(){const n=new Hp;A0(n),n.add(w0(tc)),n.add(E0(tc)),n.add(v0()),n.add(M0()),n.add(b0());const t=T0();n.add(t);const e=C0();return n.add(e.group),{scene:n,dust:t,settlement:e,getHeight:H}}function M1(n){const t=new kp({canvas:n,antialias:!0,powerPreference:"high-performance"});return t.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),t.setSize(window.innerWidth,window.innerHeight),t.shadowMap.enabled=!0,t.shadowMap.type=nc,t.outputColorSpace=Fe,t.toneMapping=sc,t.toneMappingExposure=1.05,t}function y1(n,t){window.addEventListener("resize",()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)})}export{Ni as C,Ze as P,A as V,M1 as a,y1 as b,v1 as c,x1 as d};
