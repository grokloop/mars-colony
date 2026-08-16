(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pr="170",T0=0,Kr=1,A0=2,rc=1,oc=2,bn=3,Fn=0,Lt=1,dn=2,Nn=0,Ei=1,Jr=2,Zr=3,$r=4,R0=5,Zn=100,C0=101,P0=102,D0=103,z0=104,I0=200,L0=201,U0=202,N0=203,Hs=204,Gs=205,O0=206,F0=207,k0=208,B0=209,H0=210,G0=211,V0=212,W0=213,X0=214,Vs=0,Ws=1,Xs=2,Ri=3,qs=4,Ys=5,Ks=6,Js=7,cc=0,q0=1,Y0=2,On=0,K0=1,J0=2,Z0=3,dc=4,$0=5,j0=6,Q0=7,lc=300,Ci=301,Pi=302,Zs=303,$s=304,ts=306,js=1e3,jn=1001,Qs=1002,Wt=1003,eh=1004,ga=1005,ln=1006,os=1007,Qn=1008,yn=1009,hc=1010,uc=1011,ia=1012,Dr=1013,ei=1014,hn=1015,sa=1016,zr=1017,Ir=1018,Di=1020,fc=35902,pc=1021,mc=1022,nn=1023,xc=1024,gc=1025,Ti=1026,zi=1027,Lr=1028,Ur=1029,wc=1030,Nr=1031,Or=1033,Wa=33776,Xa=33777,qa=33778,Ya=33779,er=35840,tr=35841,nr=35842,ir=35843,ar=36196,sr=37492,rr=37496,or=37808,cr=37809,dr=37810,lr=37811,hr=37812,ur=37813,fr=37814,pr=37815,mr=37816,xr=37817,gr=37818,wr=37819,_r=37820,br=37821,Ka=36492,vr=36494,Mr=36495,_c=36283,yr=36284,Sr=36285,Er=36286,th=3200,nh=3201,bc=0,ih=1,Un="",kt="srgb",Li="srgb-linear",ns="linear",rt="srgb",oi=7680,jr=519,ah=512,sh=513,rh=514,vc=515,oh=516,ch=517,dh=518,lh=519,Qr=35044,eo="300 es",vn=2e3,$a=2001;class Ui{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const r=a.indexOf(t);r!==-1&&a.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let r=0,c=a.length;r<c;r++)a[r].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cs=Math.PI/180,Tr=180/Math.PI;function ra(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]).toLowerCase()}function Rt(n,e,t){return Math.max(e,Math.min(t,n))}function hh(n,e){return(n%e+e)%e}function ds(n,e,t){return(1-t)*n+t*e}function Wi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Pe{constructor(e=0,t=0){Pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),r=this.x-e.x,c=this.y-e.y;return this.x=r*i-c*a+e.x,this.y=r*a+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,a,r,c,l,f,d){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,r,c,l,f,d)}set(e,t,i,a,r,c,l,f,d){const u=this.elements;return u[0]=e,u[1]=a,u[2]=l,u[3]=t,u[4]=r,u[5]=f,u[6]=i,u[7]=c,u[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,r=this.elements,c=i[0],l=i[3],f=i[6],d=i[1],u=i[4],x=i[7],m=i[2],g=i[5],v=i[8],y=a[0],b=a[3],w=a[6],z=a[1],D=a[4],E=a[7],H=a[2],L=a[5],U=a[8];return r[0]=c*y+l*z+f*H,r[3]=c*b+l*D+f*L,r[6]=c*w+l*E+f*U,r[1]=d*y+u*z+x*H,r[4]=d*b+u*D+x*L,r[7]=d*w+u*E+x*U,r[2]=m*y+g*z+v*H,r[5]=m*b+g*D+v*L,r[8]=m*w+g*E+v*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],c=e[4],l=e[5],f=e[6],d=e[7],u=e[8];return t*c*u-t*l*d-i*r*u+i*l*f+a*r*d-a*c*f}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],c=e[4],l=e[5],f=e[6],d=e[7],u=e[8],x=u*c-l*d,m=l*f-u*r,g=d*r-c*f,v=t*x+i*m+a*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=x*y,e[1]=(a*d-u*i)*y,e[2]=(l*i-a*c)*y,e[3]=m*y,e[4]=(u*t-a*f)*y,e[5]=(a*r-l*t)*y,e[6]=g*y,e[7]=(i*f-d*t)*y,e[8]=(c*t-i*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,r,c,l){const f=Math.cos(r),d=Math.sin(r);return this.set(i*f,i*d,-i*(f*c+d*l)+c+e,-a*d,a*f,-a*(-d*c+f*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(ls.makeScale(e,t)),this}rotate(e){return this.premultiply(ls.makeRotation(-e)),this}translate(e,t){return this.premultiply(ls.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ls=new Ge;function Mc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ja(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function uh(){const n=ja("canvas");return n.style.display="block",n}const to={};function Qi(n){n in to||(to[n]=!0,console.warn(n))}function fh(n,e,t){return new Promise(function(i,a){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:a();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function ph(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function mh(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Qe={enabled:!0,workingColorSpace:Li,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===rt&&(n.r=Mn(n.r),n.g=Mn(n.g),n.b=Mn(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===rt&&(n.r=Ai(n.r),n.g=Ai(n.g),n.b=Ai(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Un?ns:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Mn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ai(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const no=[.64,.33,.3,.6,.15,.06],io=[.2126,.7152,.0722],ao=[.3127,.329],so=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ro=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qe.define({[Li]:{primaries:no,whitePoint:ao,transfer:ns,toXYZ:so,fromXYZ:ro,luminanceCoefficients:io,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:no,whitePoint:ao,transfer:rt,toXYZ:so,fromXYZ:ro,luminanceCoefficients:io,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}});let ci;class xh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ci===void 0&&(ci=ja("canvas")),ci.width=e.width,ci.height=e.height;const i=ci.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ci}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ja("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),r=a.data;for(let c=0;c<r.length;c++)r[c]=Mn(r[c]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Mn(t[i]/255)*255):t[i]=Mn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gh=0;class yc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=ra(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let c=0,l=a.length;c<l;c++)a[c].isDataTexture?r.push(hs(a[c].image)):r.push(hs(a[c]))}else r=hs(a);i.url=r}return t||(e.images[this.uuid]=i),i}}function hs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wh=0;class Ct extends Ui{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,i=jn,a=jn,r=ln,c=Qn,l=nn,f=yn,d=Ct.DEFAULT_ANISOTROPY,u=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=ra(),this.name="",this.source=new yc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=c,this.anisotropy=d,this.format=l,this.internalFormat=null,this.type=f,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case js:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case Qs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case js:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case Qs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=lc;Ct.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,i=0,a=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,r=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*a+c[12]*r,this.y=c[1]*t+c[5]*i+c[9]*a+c[13]*r,this.z=c[2]*t+c[6]*i+c[10]*a+c[14]*r,this.w=c[3]*t+c[7]*i+c[11]*a+c[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,r;const f=e.elements,d=f[0],u=f[4],x=f[8],m=f[1],g=f[5],v=f[9],y=f[2],b=f[6],w=f[10];if(Math.abs(u-m)<.01&&Math.abs(x-y)<.01&&Math.abs(v-b)<.01){if(Math.abs(u+m)<.1&&Math.abs(x+y)<.1&&Math.abs(v+b)<.1&&Math.abs(d+g+w-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(d+1)/2,E=(g+1)/2,H=(w+1)/2,L=(u+m)/4,U=(x+y)/4,O=(v+b)/4;return D>E&&D>H?D<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(D),a=L/i,r=U/i):E>H?E<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(E),i=L/a,r=O/a):H<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(H),i=U/r,a=O/r),this.set(i,a,r,t),this}let z=Math.sqrt((b-v)*(b-v)+(x-y)*(x-y)+(m-u)*(m-u));return Math.abs(z)<.001&&(z=1),this.x=(b-v)/z,this.y=(x-y)/z,this.z=(m-u)/z,this.w=Math.acos((d+g+w-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _h extends Ui{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const a={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ct(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const c=i.count;for(let l=0;l<c;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,a=e.textures.length;i<a;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new yc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends _h{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Sc extends Ct{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bh extends Ct{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oa{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,r,c,l){let f=i[a+0],d=i[a+1],u=i[a+2],x=i[a+3];const m=r[c+0],g=r[c+1],v=r[c+2],y=r[c+3];if(l===0){e[t+0]=f,e[t+1]=d,e[t+2]=u,e[t+3]=x;return}if(l===1){e[t+0]=m,e[t+1]=g,e[t+2]=v,e[t+3]=y;return}if(x!==y||f!==m||d!==g||u!==v){let b=1-l;const w=f*m+d*g+u*v+x*y,z=w>=0?1:-1,D=1-w*w;if(D>Number.EPSILON){const H=Math.sqrt(D),L=Math.atan2(H,w*z);b=Math.sin(b*L)/H,l=Math.sin(l*L)/H}const E=l*z;if(f=f*b+m*E,d=d*b+g*E,u=u*b+v*E,x=x*b+y*E,b===1-l){const H=1/Math.sqrt(f*f+d*d+u*u+x*x);f*=H,d*=H,u*=H,x*=H}}e[t]=f,e[t+1]=d,e[t+2]=u,e[t+3]=x}static multiplyQuaternionsFlat(e,t,i,a,r,c){const l=i[a],f=i[a+1],d=i[a+2],u=i[a+3],x=r[c],m=r[c+1],g=r[c+2],v=r[c+3];return e[t]=l*v+u*x+f*g-d*m,e[t+1]=f*v+u*m+d*x-l*g,e[t+2]=d*v+u*g+l*m-f*x,e[t+3]=u*v-l*x-f*m-d*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,r=e._z,c=e._order,l=Math.cos,f=Math.sin,d=l(i/2),u=l(a/2),x=l(r/2),m=f(i/2),g=f(a/2),v=f(r/2);switch(c){case"XYZ":this._x=m*u*x+d*g*v,this._y=d*g*x-m*u*v,this._z=d*u*v+m*g*x,this._w=d*u*x-m*g*v;break;case"YXZ":this._x=m*u*x+d*g*v,this._y=d*g*x-m*u*v,this._z=d*u*v-m*g*x,this._w=d*u*x+m*g*v;break;case"ZXY":this._x=m*u*x-d*g*v,this._y=d*g*x+m*u*v,this._z=d*u*v+m*g*x,this._w=d*u*x-m*g*v;break;case"ZYX":this._x=m*u*x-d*g*v,this._y=d*g*x+m*u*v,this._z=d*u*v-m*g*x,this._w=d*u*x+m*g*v;break;case"YZX":this._x=m*u*x+d*g*v,this._y=d*g*x+m*u*v,this._z=d*u*v-m*g*x,this._w=d*u*x-m*g*v;break;case"XZY":this._x=m*u*x-d*g*v,this._y=d*g*x-m*u*v,this._z=d*u*v+m*g*x,this._w=d*u*x+m*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],r=t[8],c=t[1],l=t[5],f=t[9],d=t[2],u=t[6],x=t[10],m=i+l+x;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(u-f)*g,this._y=(r-d)*g,this._z=(c-a)*g}else if(i>l&&i>x){const g=2*Math.sqrt(1+i-l-x);this._w=(u-f)/g,this._x=.25*g,this._y=(a+c)/g,this._z=(r+d)/g}else if(l>x){const g=2*Math.sqrt(1+l-i-x);this._w=(r-d)/g,this._x=(a+c)/g,this._y=.25*g,this._z=(f+u)/g}else{const g=2*Math.sqrt(1+x-i-l);this._w=(c-a)/g,this._x=(r+d)/g,this._y=(f+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,r=e._z,c=e._w,l=t._x,f=t._y,d=t._z,u=t._w;return this._x=i*u+c*l+a*d-r*f,this._y=a*u+c*f+r*l-i*d,this._z=r*u+c*d+i*f-a*l,this._w=c*u-i*l-a*f-r*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,a=this._y,r=this._z,c=this._w;let l=c*e._w+i*e._x+a*e._y+r*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=c,this._x=i,this._y=a,this._z=r,this;const f=1-l*l;if(f<=Number.EPSILON){const g=1-t;return this._w=g*c+t*this._w,this._x=g*i+t*this._x,this._y=g*a+t*this._y,this._z=g*r+t*this._z,this.normalize(),this}const d=Math.sqrt(f),u=Math.atan2(d,l),x=Math.sin((1-t)*u)/d,m=Math.sin(t*u)/d;return this._w=c*x+this._w*m,this._x=i*x+this._x*m,this._y=a*x+this._y*m,this._z=r*x+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class _{constructor(e=0,t=0,i=0){_.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(oo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(oo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*a,this.y=r[1]*t+r[4]*i+r[7]*a,this.z=r[2]*t+r[5]*i+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,r=e.elements,c=1/(r[3]*t+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*a+r[12])*c,this.y=(r[1]*t+r[5]*i+r[9]*a+r[13])*c,this.z=(r[2]*t+r[6]*i+r[10]*a+r[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,r=e.x,c=e.y,l=e.z,f=e.w,d=2*(c*a-l*i),u=2*(l*t-r*a),x=2*(r*i-c*t);return this.x=t+f*d+c*x-l*u,this.y=i+f*u+l*d-r*x,this.z=a+f*x+r*u-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*a,this.y=r[1]*t+r[5]*i+r[9]*a,this.z=r[2]*t+r[6]*i+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,r=e.z,c=t.x,l=t.y,f=t.z;return this.x=a*f-r*l,this.y=r*c-i*f,this.z=i*l-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return us.copy(this).projectOnVector(e),this.sub(us)}reflect(e){return this.sub(us.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const us=new _,oo=new oa;class ni{constructor(e=new _(1/0,1/0,1/0),t=new _(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let c=0,l=r.count;c<l;c++)e.isMesh===!0?e.getVertexPosition(c,Zt):Zt.fromBufferAttribute(r,c),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wa.copy(i.boundingBox)),wa.applyMatrix4(e.matrixWorld),this.union(wa)}const a=e.children;for(let r=0,c=a.length;r<c;r++)this.expandByObject(a[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xi),_a.subVectors(this.max,Xi),di.subVectors(e.a,Xi),li.subVectors(e.b,Xi),hi.subVectors(e.c,Xi),An.subVectors(li,di),Rn.subVectors(hi,li),Hn.subVectors(di,hi);let t=[0,-An.z,An.y,0,-Rn.z,Rn.y,0,-Hn.z,Hn.y,An.z,0,-An.x,Rn.z,0,-Rn.x,Hn.z,0,-Hn.x,-An.y,An.x,0,-Rn.y,Rn.x,0,-Hn.y,Hn.x,0];return!fs(t,di,li,hi,_a)||(t=[1,0,0,0,1,0,0,0,1],!fs(t,di,li,hi,_a))?!1:(ba.crossVectors(An,Rn),t=[ba.x,ba.y,ba.z],fs(t,di,li,hi,_a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mn=[new _,new _,new _,new _,new _,new _,new _,new _],Zt=new _,wa=new ni,di=new _,li=new _,hi=new _,An=new _,Rn=new _,Hn=new _,Xi=new _,_a=new _,ba=new _,Gn=new _;function fs(n,e,t,i,a){for(let r=0,c=n.length-3;r<=c;r+=3){Gn.fromArray(n,r);const l=a.x*Math.abs(Gn.x)+a.y*Math.abs(Gn.y)+a.z*Math.abs(Gn.z),f=e.dot(Gn),d=t.dot(Gn),u=i.dot(Gn);if(Math.max(-Math.max(f,d,u),Math.min(f,d,u))>l)return!1}return!0}const vh=new ni,qi=new _,ps=new _;class Ni{constructor(e=new _,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):vh.setFromPoints(e).getCenter(i);let a=0;for(let r=0,c=e.length;r<c;r++)a=Math.max(a,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qi.subVectors(e,this.center);const t=qi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(qi,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ps.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qi.copy(e.center).add(ps)),this.expandByPoint(qi.copy(e.center).sub(ps))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xn=new _,ms=new _,va=new _,Cn=new _,xs=new _,Ma=new _,gs=new _;class Ec{constructor(e=new _,t=new _(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xn.copy(this.origin).addScaledVector(this.direction,t),xn.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){ms.copy(e).add(t).multiplyScalar(.5),va.copy(t).sub(e).normalize(),Cn.copy(this.origin).sub(ms);const r=e.distanceTo(t)*.5,c=-this.direction.dot(va),l=Cn.dot(this.direction),f=-Cn.dot(va),d=Cn.lengthSq(),u=Math.abs(1-c*c);let x,m,g,v;if(u>0)if(x=c*f-l,m=c*l-f,v=r*u,x>=0)if(m>=-v)if(m<=v){const y=1/u;x*=y,m*=y,g=x*(x+c*m+2*l)+m*(c*x+m+2*f)+d}else m=r,x=Math.max(0,-(c*m+l)),g=-x*x+m*(m+2*f)+d;else m=-r,x=Math.max(0,-(c*m+l)),g=-x*x+m*(m+2*f)+d;else m<=-v?(x=Math.max(0,-(-c*r+l)),m=x>0?-r:Math.min(Math.max(-r,-f),r),g=-x*x+m*(m+2*f)+d):m<=v?(x=0,m=Math.min(Math.max(-r,-f),r),g=m*(m+2*f)+d):(x=Math.max(0,-(c*r+l)),m=x>0?r:Math.min(Math.max(-r,-f),r),g=-x*x+m*(m+2*f)+d);else m=c>0?-r:r,x=Math.max(0,-(c*m+l)),g=-x*x+m*(m+2*f)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(ms).addScaledVector(va,m),g}intersectSphere(e,t){xn.subVectors(e.center,this.origin);const i=xn.dot(this.direction),a=xn.dot(xn)-i*i,r=e.radius*e.radius;if(a>r)return null;const c=Math.sqrt(r-a),l=i-c,f=i+c;return f<0?null:l<0?this.at(f,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,r,c,l,f;const d=1/this.direction.x,u=1/this.direction.y,x=1/this.direction.z,m=this.origin;return d>=0?(i=(e.min.x-m.x)*d,a=(e.max.x-m.x)*d):(i=(e.max.x-m.x)*d,a=(e.min.x-m.x)*d),u>=0?(r=(e.min.y-m.y)*u,c=(e.max.y-m.y)*u):(r=(e.max.y-m.y)*u,c=(e.min.y-m.y)*u),i>c||r>a||((r>i||isNaN(i))&&(i=r),(c<a||isNaN(a))&&(a=c),x>=0?(l=(e.min.z-m.z)*x,f=(e.max.z-m.z)*x):(l=(e.max.z-m.z)*x,f=(e.min.z-m.z)*x),i>f||l>a)||((l>i||i!==i)&&(i=l),(f<a||a!==a)&&(a=f),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,xn)!==null}intersectTriangle(e,t,i,a,r){xs.subVectors(t,e),Ma.subVectors(i,e),gs.crossVectors(xs,Ma);let c=this.direction.dot(gs),l;if(c>0){if(a)return null;l=1}else if(c<0)l=-1,c=-c;else return null;Cn.subVectors(this.origin,e);const f=l*this.direction.dot(Ma.crossVectors(Cn,Ma));if(f<0)return null;const d=l*this.direction.dot(xs.cross(Cn));if(d<0||f+d>c)return null;const u=-l*Cn.dot(gs);return u<0?null:this.at(u/c,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,i,a,r,c,l,f,d,u,x,m,g,v,y,b){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,r,c,l,f,d,u,x,m,g,v,y,b)}set(e,t,i,a,r,c,l,f,d,u,x,m,g,v,y,b){const w=this.elements;return w[0]=e,w[4]=t,w[8]=i,w[12]=a,w[1]=r,w[5]=c,w[9]=l,w[13]=f,w[2]=d,w[6]=u,w[10]=x,w[14]=m,w[3]=g,w[7]=v,w[11]=y,w[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,a=1/ui.setFromMatrixColumn(e,0).length(),r=1/ui.setFromMatrixColumn(e,1).length(),c=1/ui.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,r=e.z,c=Math.cos(i),l=Math.sin(i),f=Math.cos(a),d=Math.sin(a),u=Math.cos(r),x=Math.sin(r);if(e.order==="XYZ"){const m=c*u,g=c*x,v=l*u,y=l*x;t[0]=f*u,t[4]=-f*x,t[8]=d,t[1]=g+v*d,t[5]=m-y*d,t[9]=-l*f,t[2]=y-m*d,t[6]=v+g*d,t[10]=c*f}else if(e.order==="YXZ"){const m=f*u,g=f*x,v=d*u,y=d*x;t[0]=m+y*l,t[4]=v*l-g,t[8]=c*d,t[1]=c*x,t[5]=c*u,t[9]=-l,t[2]=g*l-v,t[6]=y+m*l,t[10]=c*f}else if(e.order==="ZXY"){const m=f*u,g=f*x,v=d*u,y=d*x;t[0]=m-y*l,t[4]=-c*x,t[8]=v+g*l,t[1]=g+v*l,t[5]=c*u,t[9]=y-m*l,t[2]=-c*d,t[6]=l,t[10]=c*f}else if(e.order==="ZYX"){const m=c*u,g=c*x,v=l*u,y=l*x;t[0]=f*u,t[4]=v*d-g,t[8]=m*d+y,t[1]=f*x,t[5]=y*d+m,t[9]=g*d-v,t[2]=-d,t[6]=l*f,t[10]=c*f}else if(e.order==="YZX"){const m=c*f,g=c*d,v=l*f,y=l*d;t[0]=f*u,t[4]=y-m*x,t[8]=v*x+g,t[1]=x,t[5]=c*u,t[9]=-l*u,t[2]=-d*u,t[6]=g*x+v,t[10]=m-y*x}else if(e.order==="XZY"){const m=c*f,g=c*d,v=l*f,y=l*d;t[0]=f*u,t[4]=-x,t[8]=d*u,t[1]=m*x+y,t[5]=c*u,t[9]=g*x-v,t[2]=v*x-g,t[6]=l*u,t[10]=y*x+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mh,e,yh)}lookAt(e,t,i){const a=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Pn.crossVectors(i,Gt),Pn.lengthSq()===0&&(Math.abs(i.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Pn.crossVectors(i,Gt)),Pn.normalize(),ya.crossVectors(Gt,Pn),a[0]=Pn.x,a[4]=ya.x,a[8]=Gt.x,a[1]=Pn.y,a[5]=ya.y,a[9]=Gt.y,a[2]=Pn.z,a[6]=ya.z,a[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,r=this.elements,c=i[0],l=i[4],f=i[8],d=i[12],u=i[1],x=i[5],m=i[9],g=i[13],v=i[2],y=i[6],b=i[10],w=i[14],z=i[3],D=i[7],E=i[11],H=i[15],L=a[0],U=a[4],O=a[8],C=a[12],T=a[1],N=a[5],K=a[9],q=a[13],j=a[2],ae=a[6],Q=a[10],ce=a[14],$=a[3],ue=a[7],we=a[11],Re=a[15];return r[0]=c*L+l*T+f*j+d*$,r[4]=c*U+l*N+f*ae+d*ue,r[8]=c*O+l*K+f*Q+d*we,r[12]=c*C+l*q+f*ce+d*Re,r[1]=u*L+x*T+m*j+g*$,r[5]=u*U+x*N+m*ae+g*ue,r[9]=u*O+x*K+m*Q+g*we,r[13]=u*C+x*q+m*ce+g*Re,r[2]=v*L+y*T+b*j+w*$,r[6]=v*U+y*N+b*ae+w*ue,r[10]=v*O+y*K+b*Q+w*we,r[14]=v*C+y*q+b*ce+w*Re,r[3]=z*L+D*T+E*j+H*$,r[7]=z*U+D*N+E*ae+H*ue,r[11]=z*O+D*K+E*Q+H*we,r[15]=z*C+D*q+E*ce+H*Re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],r=e[12],c=e[1],l=e[5],f=e[9],d=e[13],u=e[2],x=e[6],m=e[10],g=e[14],v=e[3],y=e[7],b=e[11],w=e[15];return v*(+r*f*x-a*d*x-r*l*m+i*d*m+a*l*g-i*f*g)+y*(+t*f*g-t*d*m+r*c*m-a*c*g+a*d*u-r*f*u)+b*(+t*d*x-t*l*g-r*c*x+i*c*g+r*l*u-i*d*u)+w*(-a*l*u-t*f*x+t*l*m+a*c*x-i*c*m+i*f*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],c=e[4],l=e[5],f=e[6],d=e[7],u=e[8],x=e[9],m=e[10],g=e[11],v=e[12],y=e[13],b=e[14],w=e[15],z=x*b*d-y*m*d+y*f*g-l*b*g-x*f*w+l*m*w,D=v*m*d-u*b*d-v*f*g+c*b*g+u*f*w-c*m*w,E=u*y*d-v*x*d+v*l*g-c*y*g-u*l*w+c*x*w,H=v*x*f-u*y*f-v*l*m+c*y*m+u*l*b-c*x*b,L=t*z+i*D+a*E+r*H;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/L;return e[0]=z*U,e[1]=(y*m*r-x*b*r-y*a*g+i*b*g+x*a*w-i*m*w)*U,e[2]=(l*b*r-y*f*r+y*a*d-i*b*d-l*a*w+i*f*w)*U,e[3]=(x*f*r-l*m*r-x*a*d+i*m*d+l*a*g-i*f*g)*U,e[4]=D*U,e[5]=(u*b*r-v*m*r+v*a*g-t*b*g-u*a*w+t*m*w)*U,e[6]=(v*f*r-c*b*r-v*a*d+t*b*d+c*a*w-t*f*w)*U,e[7]=(c*m*r-u*f*r+u*a*d-t*m*d-c*a*g+t*f*g)*U,e[8]=E*U,e[9]=(v*x*r-u*y*r-v*i*g+t*y*g+u*i*w-t*x*w)*U,e[10]=(c*y*r-v*l*r+v*i*d-t*y*d-c*i*w+t*l*w)*U,e[11]=(u*l*r-c*x*r-u*i*d+t*x*d+c*i*g-t*l*g)*U,e[12]=H*U,e[13]=(u*y*a-v*x*a+v*i*m-t*y*m-u*i*b+t*x*b)*U,e[14]=(v*l*a-c*y*a-v*i*f+t*y*f+c*i*b-t*l*b)*U,e[15]=(c*x*a-u*l*a+u*i*f-t*x*f-c*i*m+t*l*m)*U,this}scale(e){const t=this.elements,i=e.x,a=e.y,r=e.z;return t[0]*=i,t[4]*=a,t[8]*=r,t[1]*=i,t[5]*=a,t[9]*=r,t[2]*=i,t[6]*=a,t[10]*=r,t[3]*=i,t[7]*=a,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),r=1-i,c=e.x,l=e.y,f=e.z,d=r*c,u=r*l;return this.set(d*c+i,d*l-a*f,d*f+a*l,0,d*l+a*f,u*l+i,u*f-a*c,0,d*f-a*l,u*f+a*c,r*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,r,c){return this.set(1,i,r,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,r=t._x,c=t._y,l=t._z,f=t._w,d=r+r,u=c+c,x=l+l,m=r*d,g=r*u,v=r*x,y=c*u,b=c*x,w=l*x,z=f*d,D=f*u,E=f*x,H=i.x,L=i.y,U=i.z;return a[0]=(1-(y+w))*H,a[1]=(g+E)*H,a[2]=(v-D)*H,a[3]=0,a[4]=(g-E)*L,a[5]=(1-(m+w))*L,a[6]=(b+z)*L,a[7]=0,a[8]=(v+D)*U,a[9]=(b-z)*U,a[10]=(1-(m+y))*U,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;let r=ui.set(a[0],a[1],a[2]).length();const c=ui.set(a[4],a[5],a[6]).length(),l=ui.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),e.x=a[12],e.y=a[13],e.z=a[14],$t.copy(this);const d=1/r,u=1/c,x=1/l;return $t.elements[0]*=d,$t.elements[1]*=d,$t.elements[2]*=d,$t.elements[4]*=u,$t.elements[5]*=u,$t.elements[6]*=u,$t.elements[8]*=x,$t.elements[9]*=x,$t.elements[10]*=x,t.setFromRotationMatrix($t),i.x=r,i.y=c,i.z=l,this}makePerspective(e,t,i,a,r,c,l=vn){const f=this.elements,d=2*r/(t-e),u=2*r/(i-a),x=(t+e)/(t-e),m=(i+a)/(i-a);let g,v;if(l===vn)g=-(c+r)/(c-r),v=-2*c*r/(c-r);else if(l===$a)g=-c/(c-r),v=-c*r/(c-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return f[0]=d,f[4]=0,f[8]=x,f[12]=0,f[1]=0,f[5]=u,f[9]=m,f[13]=0,f[2]=0,f[6]=0,f[10]=g,f[14]=v,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,a,r,c,l=vn){const f=this.elements,d=1/(t-e),u=1/(i-a),x=1/(c-r),m=(t+e)*d,g=(i+a)*u;let v,y;if(l===vn)v=(c+r)*x,y=-2*x;else if(l===$a)v=r*x,y=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return f[0]=2*d,f[4]=0,f[8]=0,f[12]=-m,f[1]=0,f[5]=2*u,f[9]=0,f[13]=-g,f[2]=0,f[6]=0,f[10]=y,f[14]=-v,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ui=new _,$t=new ht,Mh=new _(0,0,0),yh=new _(1,1,1),Pn=new _,ya=new _,Gt=new _,co=new ht,lo=new oa;class fn{constructor(e=0,t=0,i=0,a=fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,r=a[0],c=a[4],l=a[8],f=a[1],d=a[5],u=a[9],x=a[2],m=a[6],g=a[10];switch(t){case"XYZ":this._y=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-c,r)):(this._x=Math.atan2(m,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-x,r),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-x,g),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(f,r));break;case"ZYX":this._y=Math.asin(-Rt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(f,r)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(Rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-u,d),this._y=Math.atan2(-x,r)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-Rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,d),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return co.makeRotationFromQuaternion(e),this.setFromRotationMatrix(co,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lo.setFromEuler(this),this.setFromQuaternion(lo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fn.DEFAULT_ORDER="XYZ";class Tc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sh=0;const ho=new _,fi=new oa,gn=new ht,Sa=new _,Yi=new _,Eh=new _,Th=new oa,uo=new _(1,0,0),fo=new _(0,1,0),po=new _(0,0,1),mo={type:"added"},Ah={type:"removed"},pi={type:"childadded",child:null},ws={type:"childremoved",child:null};class bt extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=ra(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new _,t=new fn,i=new oa,a=new _(1,1,1);function r(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ge}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fi.setFromAxisAngle(e,t),this.quaternion.multiply(fi),this}rotateOnWorldAxis(e,t){return fi.setFromAxisAngle(e,t),this.quaternion.premultiply(fi),this}rotateX(e){return this.rotateOnAxis(uo,e)}rotateY(e){return this.rotateOnAxis(fo,e)}rotateZ(e){return this.rotateOnAxis(po,e)}translateOnAxis(e,t){return ho.copy(e).applyQuaternion(this.quaternion),this.position.add(ho.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uo,e)}translateY(e){return this.translateOnAxis(fo,e)}translateZ(e){return this.translateOnAxis(po,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Sa.copy(e):Sa.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(Yi,Sa,this.up):gn.lookAt(Sa,Yi,this.up),this.quaternion.setFromRotationMatrix(gn),a&&(gn.extractRotation(a.matrixWorld),fi.setFromRotationMatrix(gn),this.quaternion.premultiply(fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mo),pi.child=e,this.dispatchEvent(pi),pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ah),ws.child=e,this.dispatchEvent(ws),ws.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mo),pi.child=e,this.dispatchEvent(pi),pi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let r=0,c=a.length;r<c;r++)a[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,e,Eh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,Th,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let r=0,c=a.length;r<c;r++)a[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function r(l,f){return l[f.uuid]===void 0&&(l[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const f=l.shapes;if(Array.isArray(f))for(let d=0,u=f.length;d<u;d++){const x=f[d];r(e.shapes,x)}else r(e.shapes,f)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let f=0,d=this.material.length;f<d;f++)l.push(r(e.materials,this.material[f]));a.material=l}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let l=0;l<this.children.length;l++)a.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let l=0;l<this.animations.length;l++){const f=this.animations[l];a.animations.push(r(e.animations,f))}}if(t){const l=c(e.geometries),f=c(e.materials),d=c(e.textures),u=c(e.images),x=c(e.shapes),m=c(e.skeletons),g=c(e.animations),v=c(e.nodes);l.length>0&&(i.geometries=l),f.length>0&&(i.materials=f),d.length>0&&(i.textures=d),u.length>0&&(i.images=u),x.length>0&&(i.shapes=x),m.length>0&&(i.skeletons=m),g.length>0&&(i.animations=g),v.length>0&&(i.nodes=v)}return i.object=a,i;function c(l){const f=[];for(const d in l){const u=l[d];delete u.metadata,f.push(u)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}bt.DEFAULT_UP=new _(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jt=new _,wn=new _,_s=new _,_n=new _,mi=new _,xi=new _,xo=new _,bs=new _,vs=new _,Ms=new _,ys=new gt,Ss=new gt,Es=new gt;class tn{constructor(e=new _,t=new _,i=new _){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),jt.subVectors(e,t),a.cross(jt);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,t,i,a,r){jt.subVectors(a,t),wn.subVectors(i,t),_s.subVectors(e,t);const c=jt.dot(jt),l=jt.dot(wn),f=jt.dot(_s),d=wn.dot(wn),u=wn.dot(_s),x=c*d-l*l;if(x===0)return r.set(0,0,0),null;const m=1/x,g=(d*f-l*u)*m,v=(c*u-l*f)*m;return r.set(1-g-v,v,g)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getInterpolation(e,t,i,a,r,c,l,f){return this.getBarycoord(e,t,i,a,_n)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(r,_n.x),f.addScaledVector(c,_n.y),f.addScaledVector(l,_n.z),f)}static getInterpolatedAttribute(e,t,i,a,r,c){return ys.setScalar(0),Ss.setScalar(0),Es.setScalar(0),ys.fromBufferAttribute(e,t),Ss.fromBufferAttribute(e,i),Es.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(ys,r.x),c.addScaledVector(Ss,r.y),c.addScaledVector(Es,r.z),c}static isFrontFacing(e,t,i,a){return jt.subVectors(i,t),wn.subVectors(e,t),jt.cross(wn).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),jt.cross(wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,r){return tn.getInterpolation(e,this.a,this.b,this.c,t,i,a,r)}containsPoint(e){return tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,r=this.c;let c,l;mi.subVectors(a,i),xi.subVectors(r,i),bs.subVectors(e,i);const f=mi.dot(bs),d=xi.dot(bs);if(f<=0&&d<=0)return t.copy(i);vs.subVectors(e,a);const u=mi.dot(vs),x=xi.dot(vs);if(u>=0&&x<=u)return t.copy(a);const m=f*x-u*d;if(m<=0&&f>=0&&u<=0)return c=f/(f-u),t.copy(i).addScaledVector(mi,c);Ms.subVectors(e,r);const g=mi.dot(Ms),v=xi.dot(Ms);if(v>=0&&g<=v)return t.copy(r);const y=g*d-f*v;if(y<=0&&d>=0&&v<=0)return l=d/(d-v),t.copy(i).addScaledVector(xi,l);const b=u*v-g*x;if(b<=0&&x-u>=0&&g-v>=0)return xo.subVectors(r,a),l=(x-u)/(x-u+(g-v)),t.copy(a).addScaledVector(xo,l);const w=1/(b+y+m);return c=y*w,l=m*w,t.copy(i).addScaledVector(mi,c).addScaledVector(xi,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ac={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},Ea={h:0,s:0,l:0};function Ts(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class We{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,a=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.toWorkingColorSpace(this,a),this}setHSL(e,t,i,a=Qe.workingColorSpace){if(e=hh(e,1),t=Rt(t,0,1),i=Rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,c=2*i-r;this.r=Ts(c,r,e+1/3),this.g=Ts(c,r,e),this.b=Ts(c,r,e-1/3)}return Qe.toWorkingColorSpace(this,a),this}setStyle(e,t=kt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const c=a[1],l=a[2];switch(c){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=a[1],c=r.length;if(c===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){const i=Ac[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mn(e.r),this.g=Mn(e.g),this.b=Mn(e.b),this}copyLinearToSRGB(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return Qe.fromWorkingColorSpace(At.copy(this),e),Math.round(Rt(At.r*255,0,255))*65536+Math.round(Rt(At.g*255,0,255))*256+Math.round(Rt(At.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(At.copy(this),t);const i=At.r,a=At.g,r=At.b,c=Math.max(i,a,r),l=Math.min(i,a,r);let f,d;const u=(l+c)/2;if(l===c)f=0,d=0;else{const x=c-l;switch(d=u<=.5?x/(c+l):x/(2-c-l),c){case i:f=(a-r)/x+(a<r?6:0);break;case a:f=(r-i)/x+2;break;case r:f=(i-a)/x+4;break}f/=6}return e.h=f,e.s=d,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=kt){Qe.fromWorkingColorSpace(At.copy(this),e);const t=At.r,i=At.g,a=At.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(Dn),this.setHSL(Dn.h+e,Dn.s+t,Dn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Dn),e.getHSL(Ea);const i=ds(Dn.h,Ea.h,t),a=ds(Dn.s,Ea.s,t),r=ds(Dn.l,Ea.l,t);return this.setHSL(i,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*a,this.g=r[1]*t+r[4]*i+r[7]*a,this.b=r[2]*t+r[5]*i+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new We;We.NAMES=Ac;let Rh=0;class Oi extends Ui{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=ra(),this.name="",this.blending=Ei,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hs,this.blendDst=Gs,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oi,this.stencilZFail=oi,this.stencilZPass=oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(i.blending=this.blending),this.side!==Fn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Hs&&(i.blendSrc=this.blendSrc),this.blendDst!==Gs&&(i.blendDst=this.blendDst),this.blendEquation!==Zn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ri&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jr&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==oi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==oi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const c=[];for(const l in r){const f=r[l];delete f.metadata,c.push(f)}return c}if(t){const r=a(e.textures),c=a(e.images);r.length>0&&(i.textures=r),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Fr extends Oi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new _,Ta=new Pe;class Xt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qr,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ta.fromBufferAttribute(this,t),Ta.applyMatrix3(e),this.setXY(t,Ta.x,Ta.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Wi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),a=Ft(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),a=Ft(a,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qr&&(e.usage=this.usage),e}}class Rc extends Xt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Cc extends Xt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class pt extends Xt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ch=0;const Yt=new ht,As=new bt,gi=new _,Vt=new ni,Ki=new ni,St=new _;class Ut extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=ra(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mc(e)?Cc:Rc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ge().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,i){return Yt.makeTranslation(e,t,i),this.applyMatrix4(Yt),this}scale(e,t,i){return Yt.makeScale(e,t,i),this.applyMatrix4(Yt),this}lookAt(e){return As.lookAt(e),As.updateMatrix(),this.applyMatrix4(As.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,r=e.length;a<r;a++){const c=e[a];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new pt(i,3))}else{for(let i=0,a=t.count;i<a;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new _(-1/0,-1/0,-1/0),new _(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const r=t[i];Vt.setFromBufferAttribute(r),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new _,1/0);return}if(e){const i=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let r=0,c=t.length;r<c;r++){const l=t[r];Ki.setFromBufferAttribute(l),this.morphTargetsRelative?(St.addVectors(Vt.min,Ki.min),Vt.expandByPoint(St),St.addVectors(Vt.max,Ki.max),Vt.expandByPoint(St)):(Vt.expandByPoint(Ki.min),Vt.expandByPoint(Ki.max))}Vt.getCenter(i);let a=0;for(let r=0,c=e.count;r<c;r++)St.fromBufferAttribute(e,r),a=Math.max(a,i.distanceToSquared(St));if(t)for(let r=0,c=t.length;r<c;r++){const l=t[r],f=this.morphTargetsRelative;for(let d=0,u=l.count;d<u;d++)St.fromBufferAttribute(l,d),f&&(gi.fromBufferAttribute(e,d),St.add(gi)),a=Math.max(a,i.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),l=[],f=[];for(let O=0;O<i.count;O++)l[O]=new _,f[O]=new _;const d=new _,u=new _,x=new _,m=new Pe,g=new Pe,v=new Pe,y=new _,b=new _;function w(O,C,T){d.fromBufferAttribute(i,O),u.fromBufferAttribute(i,C),x.fromBufferAttribute(i,T),m.fromBufferAttribute(r,O),g.fromBufferAttribute(r,C),v.fromBufferAttribute(r,T),u.sub(d),x.sub(d),g.sub(m),v.sub(m);const N=1/(g.x*v.y-v.x*g.y);isFinite(N)&&(y.copy(u).multiplyScalar(v.y).addScaledVector(x,-g.y).multiplyScalar(N),b.copy(x).multiplyScalar(g.x).addScaledVector(u,-v.x).multiplyScalar(N),l[O].add(y),l[C].add(y),l[T].add(y),f[O].add(b),f[C].add(b),f[T].add(b))}let z=this.groups;z.length===0&&(z=[{start:0,count:e.count}]);for(let O=0,C=z.length;O<C;++O){const T=z[O],N=T.start,K=T.count;for(let q=N,j=N+K;q<j;q+=3)w(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const D=new _,E=new _,H=new _,L=new _;function U(O){H.fromBufferAttribute(a,O),L.copy(H);const C=l[O];D.copy(C),D.sub(H.multiplyScalar(H.dot(C))).normalize(),E.crossVectors(L,C);const N=E.dot(f[O])<0?-1:1;c.setXYZW(O,D.x,D.y,D.z,N)}for(let O=0,C=z.length;O<C;++O){const T=z[O],N=T.start,K=T.count;for(let q=N,j=N+K;q<j;q+=3)U(e.getX(q+0)),U(e.getX(q+1)),U(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,g=i.count;m<g;m++)i.setXYZ(m,0,0,0);const a=new _,r=new _,c=new _,l=new _,f=new _,d=new _,u=new _,x=new _;if(e)for(let m=0,g=e.count;m<g;m+=3){const v=e.getX(m+0),y=e.getX(m+1),b=e.getX(m+2);a.fromBufferAttribute(t,v),r.fromBufferAttribute(t,y),c.fromBufferAttribute(t,b),u.subVectors(c,r),x.subVectors(a,r),u.cross(x),l.fromBufferAttribute(i,v),f.fromBufferAttribute(i,y),d.fromBufferAttribute(i,b),l.add(u),f.add(u),d.add(u),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(y,f.x,f.y,f.z),i.setXYZ(b,d.x,d.y,d.z)}else for(let m=0,g=t.count;m<g;m+=3)a.fromBufferAttribute(t,m+0),r.fromBufferAttribute(t,m+1),c.fromBufferAttribute(t,m+2),u.subVectors(c,r),x.subVectors(a,r),u.cross(x),i.setXYZ(m+0,u.x,u.y,u.z),i.setXYZ(m+1,u.x,u.y,u.z),i.setXYZ(m+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(l,f){const d=l.array,u=l.itemSize,x=l.normalized,m=new d.constructor(f.length*u);let g=0,v=0;for(let y=0,b=f.length;y<b;y++){l.isInterleavedBufferAttribute?g=f[y]*l.data.stride+l.offset:g=f[y]*u;for(let w=0;w<u;w++)m[v++]=d[g++]}return new Xt(m,u,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ut,i=this.index.array,a=this.attributes;for(const l in a){const f=a[l],d=e(f,i);t.setAttribute(l,d)}const r=this.morphAttributes;for(const l in r){const f=[],d=r[l];for(let u=0,x=d.length;u<x;u++){const m=d[u],g=e(m,i);f.push(g)}t.morphAttributes[l]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let l=0,f=c.length;l<f;l++){const d=c[l];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(e[d]=f[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const d=i[f];e.data.attributes[f]=d.toJSON(e.data)}const a={};let r=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],u=[];for(let x=0,m=d.length;x<m;x++){const g=d[x];u.push(g.toJSON(e.data))}u.length>0&&(a[f]=u,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const a=e.attributes;for(const d in a){const u=a[d];this.setAttribute(d,u.clone(t))}const r=e.morphAttributes;for(const d in r){const u=[],x=r[d];for(let m=0,g=x.length;m<g;m++)u.push(x[m].clone(t));this.morphAttributes[d]=u}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,u=c.length;d<u;d++){const x=c[d];this.addGroup(x.start,x.count,x.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const go=new ht,Vn=new Ec,Aa=new Ni,wo=new _,Ra=new _,Ca=new _,Pa=new _,Rs=new _,Da=new _,_o=new _,za=new _;class ot extends bt{constructor(e=new Ut,t=new Fr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,c=a.length;r<c;r++){const l=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const l=this.morphTargetInfluences;if(r&&l){Da.set(0,0,0);for(let f=0,d=r.length;f<d;f++){const u=l[f],x=r[f];u!==0&&(Rs.fromBufferAttribute(x,e),c?Da.addScaledVector(Rs,u):Da.addScaledVector(Rs.sub(t),u))}t.add(Da)}return t}raycast(e,t){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Aa.copy(i.boundingSphere),Aa.applyMatrix4(r),Vn.copy(e.ray).recast(e.near),!(Aa.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(Aa,wo)===null||Vn.origin.distanceToSquared(wo)>(e.far-e.near)**2))&&(go.copy(r).invert(),Vn.copy(e.ray).applyMatrix4(go),!(i.boundingBox!==null&&Vn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Vn)))}_computeIntersections(e,t,i){let a;const r=this.geometry,c=this.material,l=r.index,f=r.attributes.position,d=r.attributes.uv,u=r.attributes.uv1,x=r.attributes.normal,m=r.groups,g=r.drawRange;if(l!==null)if(Array.isArray(c))for(let v=0,y=m.length;v<y;v++){const b=m[v],w=c[b.materialIndex],z=Math.max(b.start,g.start),D=Math.min(l.count,Math.min(b.start+b.count,g.start+g.count));for(let E=z,H=D;E<H;E+=3){const L=l.getX(E),U=l.getX(E+1),O=l.getX(E+2);a=Ia(this,w,e,i,d,u,x,L,U,O),a&&(a.faceIndex=Math.floor(E/3),a.face.materialIndex=b.materialIndex,t.push(a))}}else{const v=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let b=v,w=y;b<w;b+=3){const z=l.getX(b),D=l.getX(b+1),E=l.getX(b+2);a=Ia(this,c,e,i,d,u,x,z,D,E),a&&(a.faceIndex=Math.floor(b/3),t.push(a))}}else if(f!==void 0)if(Array.isArray(c))for(let v=0,y=m.length;v<y;v++){const b=m[v],w=c[b.materialIndex],z=Math.max(b.start,g.start),D=Math.min(f.count,Math.min(b.start+b.count,g.start+g.count));for(let E=z,H=D;E<H;E+=3){const L=E,U=E+1,O=E+2;a=Ia(this,w,e,i,d,u,x,L,U,O),a&&(a.faceIndex=Math.floor(E/3),a.face.materialIndex=b.materialIndex,t.push(a))}}else{const v=Math.max(0,g.start),y=Math.min(f.count,g.start+g.count);for(let b=v,w=y;b<w;b+=3){const z=b,D=b+1,E=b+2;a=Ia(this,c,e,i,d,u,x,z,D,E),a&&(a.faceIndex=Math.floor(b/3),t.push(a))}}}}function Ph(n,e,t,i,a,r,c,l){let f;if(e.side===Lt?f=i.intersectTriangle(c,r,a,!0,l):f=i.intersectTriangle(a,r,c,e.side===Fn,l),f===null)return null;za.copy(l),za.applyMatrix4(n.matrixWorld);const d=t.ray.origin.distanceTo(za);return d<t.near||d>t.far?null:{distance:d,point:za.clone(),object:n}}function Ia(n,e,t,i,a,r,c,l,f,d){n.getVertexPosition(l,Ra),n.getVertexPosition(f,Ca),n.getVertexPosition(d,Pa);const u=Ph(n,e,t,i,Ra,Ca,Pa,_o);if(u){const x=new _;tn.getBarycoord(_o,Ra,Ca,Pa,x),a&&(u.uv=tn.getInterpolatedAttribute(a,l,f,d,x,new Pe)),r&&(u.uv1=tn.getInterpolatedAttribute(r,l,f,d,x,new Pe)),c&&(u.normal=tn.getInterpolatedAttribute(c,l,f,d,x,new _),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const m={a:l,b:f,c:d,normal:new _,materialIndex:0};tn.getNormal(Ra,Ca,Pa,m.normal),u.face=m,u.barycoord=x}return u}class h extends Ut{constructor(e=1,t=1,i=1,a=1,r=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:r,depthSegments:c};const l=this;a=Math.floor(a),r=Math.floor(r),c=Math.floor(c);const f=[],d=[],u=[],x=[];let m=0,g=0;v("z","y","x",-1,-1,i,t,e,c,r,0),v("z","y","x",1,-1,i,t,-e,c,r,1),v("x","z","y",1,1,e,i,t,a,c,2),v("x","z","y",1,-1,e,i,-t,a,c,3),v("x","y","z",1,-1,e,t,i,a,r,4),v("x","y","z",-1,-1,e,t,-i,a,r,5),this.setIndex(f),this.setAttribute("position",new pt(d,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(x,2));function v(y,b,w,z,D,E,H,L,U,O,C){const T=E/U,N=H/O,K=E/2,q=H/2,j=L/2,ae=U+1,Q=O+1;let ce=0,$=0;const ue=new _;for(let we=0;we<Q;we++){const Re=we*N-q;for(let Xe=0;Xe<ae;Xe++){const it=Xe*T-K;ue[y]=it*z,ue[b]=Re*D,ue[w]=j,d.push(ue.x,ue.y,ue.z),ue[y]=0,ue[b]=0,ue[w]=L>0?1:-1,u.push(ue.x,ue.y,ue.z),x.push(Xe/U),x.push(1-we/O),ce+=1}}for(let we=0;we<O;we++)for(let Re=0;Re<U;Re++){const Xe=m+Re+ae*we,it=m+Re+ae*(we+1),te=m+(Re+1)+ae*(we+1),de=m+(Re+1)+ae*we;f.push(Xe,it,de),f.push(it,te,de),$+=6}l.addGroup(g,$,C),g+=$,m+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new h(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ii(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const a=n[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function zt(n){const e={};for(let t=0;t<n.length;t++){const i=Ii(n[t]);for(const a in i)e[a]=i[a]}return e}function Dh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Pc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const zh={clone:Ii,merge:zt};var Ih=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends Oi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ih,this.fragmentShader=Lh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ii(e.uniforms),this.uniformsGroups=Dh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Dc extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=vn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zn=new _,bo=new Pe,vo=new Pe;class en extends Dc{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Tr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zn.x,zn.y).multiplyScalar(-e/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zn.x,zn.y).multiplyScalar(-e/zn.z)}getViewSize(e,t){return this.getViewBounds(e,bo,vo),t.subVectors(vo,bo)}setViewOffset(e,t,i,a,r,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cs*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,r=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,d=c.fullHeight;r+=c.offsetX*a/f,t-=c.offsetY*i/d,a*=c.width/f,i*=c.height/d}const l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const wi=-90,_i=1;class Uh extends bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new en(wi,_i,e,t);a.layers=this.layers,this.add(a);const r=new en(wi,_i,e,t);r.layers=this.layers,this.add(r);const c=new en(wi,_i,e,t);c.layers=this.layers,this.add(c);const l=new en(wi,_i,e,t);l.layers=this.layers,this.add(l);const f=new en(wi,_i,e,t);f.layers=this.layers,this.add(f);const d=new en(wi,_i,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,r,c,l,f]=t;for(const d of t)this.remove(d);if(e===vn)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===$a)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,c,l,f,d,u]=this.children,x=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,r),e.setRenderTarget(i,1,a),e.render(t,c),e.setRenderTarget(i,2,a),e.render(t,l),e.setRenderTarget(i,3,a),e.render(t,f),e.setRenderTarget(i,4,a),e.render(t,d),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,a),e.render(t,u),e.setRenderTarget(x,m,g),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class zc extends Ct{constructor(e,t,i,a,r,c,l,f,d,u){e=e!==void 0?e:[],t=t!==void 0?t:Ci,super(e,t,i,a,r,c,l,f,d,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Nh extends ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new zc(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new h(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:Ii(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Lt,blending:Nn});r.uniforms.tEquirect.value=t;const c=new ot(a,r),l=t.minFilter;return t.minFilter===Qn&&(t.minFilter=ln),new Uh(1,10,this).update(e,c),t.minFilter=l,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,i,a){const r=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,a);e.setRenderTarget(r)}}const Cs=new _,Oh=new _,Fh=new Ge;class Yn{constructor(e=new _(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=Cs.subVectors(i,t).cross(Oh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Cs),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Fh.getNormalMatrix(e),a=this.coplanarPoint(Cs).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wn=new Ni,La=new _;class kr{constructor(e=new Yn,t=new Yn,i=new Yn,a=new Yn,r=new Yn,c=new Yn){this.planes=[e,t,i,a,r,c]}set(e,t,i,a,r,c){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(a),l[4].copy(r),l[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=vn){const i=this.planes,a=e.elements,r=a[0],c=a[1],l=a[2],f=a[3],d=a[4],u=a[5],x=a[6],m=a[7],g=a[8],v=a[9],y=a[10],b=a[11],w=a[12],z=a[13],D=a[14],E=a[15];if(i[0].setComponents(f-r,m-d,b-g,E-w).normalize(),i[1].setComponents(f+r,m+d,b+g,E+w).normalize(),i[2].setComponents(f+c,m+u,b+v,E+z).normalize(),i[3].setComponents(f-c,m-u,b-v,E-z).normalize(),i[4].setComponents(f-l,m-x,b-y,E-D).normalize(),t===vn)i[5].setComponents(f+l,m+x,b+y,E+D).normalize();else if(t===$a)i[5].setComponents(l,x,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(e){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(La.x=a.normal.x>0?e.max.x:e.min.x,La.y=a.normal.y>0?e.max.y:e.min.y,La.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(La)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ic(){let n=null,e=!1,t=null,i=null;function a(r,c){t(r,c),i=n.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(a),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function kh(n){const e=new WeakMap;function t(l,f){const d=l.array,u=l.usage,x=d.byteLength,m=n.createBuffer();n.bindBuffer(f,m),n.bufferData(f,d,u),l.onUploadCallback();let g;if(d instanceof Float32Array)g=n.FLOAT;else if(d instanceof Uint16Array)l.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=n.SHORT;else if(d instanceof Uint32Array)g=n.UNSIGNED_INT;else if(d instanceof Int32Array)g=n.INT;else if(d instanceof Int8Array)g=n.BYTE;else if(d instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:x}}function i(l,f,d){const u=f.array,x=f.updateRanges;if(n.bindBuffer(d,l),x.length===0)n.bufferSubData(d,0,u);else{x.sort((g,v)=>g.start-v.start);let m=0;for(let g=1;g<x.length;g++){const v=x[m],y=x[g];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++m,x[m]=y)}x.length=m+1;for(let g=0,v=x.length;g<v;g++){const y=x[g];n.bufferSubData(d,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}f.clearUpdateRanges()}f.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const f=e.get(l);f&&(n.deleteBuffer(f.buffer),e.delete(l))}function c(l,f){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const u=e.get(l);(!u||u.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const d=e.get(l);if(d===void 0)e.set(l,t(l,f));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,l,f),d.version=l.version}}return{get:a,remove:r,update:c}}class Fi extends Ut{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const r=e/2,c=t/2,l=Math.floor(i),f=Math.floor(a),d=l+1,u=f+1,x=e/l,m=t/f,g=[],v=[],y=[],b=[];for(let w=0;w<u;w++){const z=w*m-c;for(let D=0;D<d;D++){const E=D*x-r;v.push(E,-z,0),y.push(0,0,1),b.push(D/l),b.push(1-w/f)}}for(let w=0;w<f;w++)for(let z=0;z<l;z++){const D=z+d*w,E=z+d*(w+1),H=z+1+d*(w+1),L=z+1+d*w;g.push(D,E,L),g.push(E,H,L)}this.setIndex(g),this.setAttribute("position",new pt(v,3)),this.setAttribute("normal",new pt(y,3)),this.setAttribute("uv",new pt(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Bh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hh=`#ifdef USE_ALPHAHASH
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
#endif`,Gh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qh=`#ifdef USE_AOMAP
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
#endif`,Yh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kh=`#ifdef USE_BATCHING
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
#endif`,Jh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$h=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qh=`#ifdef USE_IRIDESCENCE
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
#endif`,e1=`#ifdef USE_BUMPMAP
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
#endif`,t1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,n1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,i1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,a1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,s1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,r1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,o1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,c1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,d1=`#define PI 3.141592653589793
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
} // validated`,l1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,h1=`vec3 transformedNormal = objectNormal;
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
#endif`,u1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,f1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,p1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,m1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,x1="gl_FragColor = linearToOutputTexel( gl_FragColor );",g1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,w1=`#ifdef USE_ENVMAP
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
#endif`,_1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,b1=`#ifdef USE_ENVMAP
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
#endif`,v1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,M1=`#ifdef USE_ENVMAP
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
#endif`,y1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,S1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,E1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,T1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,A1=`#ifdef USE_GRADIENTMAP
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
}`,R1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,C1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,P1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,D1=`uniform bool receiveShadow;
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
#endif`,z1=`#ifdef USE_ENVMAP
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
#endif`,I1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,L1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,U1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,N1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,O1=`PhysicalMaterial material;
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
#endif`,F1=`struct PhysicalMaterial {
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
}`,k1=`
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
#endif`,B1=`#if defined( RE_IndirectDiffuse )
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
#endif`,H1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,G1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,V1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,q1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Y1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,K1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,J1=`#if defined( USE_POINTS_UV )
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
#endif`,Z1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Q1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tu=`#ifdef USE_MORPHTARGETS
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
#endif`,nu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,au=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,su=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ru=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ou=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cu=`#ifdef USE_NORMALMAP
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
#endif`,du=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_u=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Su=`float getShadowMask() {
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
}`,Eu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tu=`#ifdef USE_SKINNING
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
#endif`,Au=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ru=`#ifdef USE_SKINNING
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
#endif`,Cu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Du=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Iu=`#ifdef USE_TRANSMISSION
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
#endif`,Lu=`#ifdef USE_TRANSMISSION
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
#endif`,Uu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ou=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ku=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bu=`uniform sampler2D t2D;
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
}`,Hu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xu=`#include <common>
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
}`,qu=`#if DEPTH_PACKING == 3200
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
}`,Yu=`#define DISTANCE
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
}`,Ku=`#define DISTANCE
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
}`,Ju=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$u=`uniform float scale;
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
}`,ju=`uniform vec3 diffuse;
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
}`,Qu=`#include <common>
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
}`,ef=`uniform vec3 diffuse;
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
}`,tf=`#define LAMBERT
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
}`,nf=`#define LAMBERT
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
}`,af=`#define MATCAP
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
}`,sf=`#define MATCAP
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
}`,rf=`#define NORMAL
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
}`,of=`#define NORMAL
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
}`,cf=`#define PHONG
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
}`,df=`#define PHONG
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
}`,lf=`#define STANDARD
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
}`,hf=`#define STANDARD
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
}`,uf=`#define TOON
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
}`,ff=`#define TOON
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
}`,pf=`uniform float size;
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
}`,mf=`uniform vec3 diffuse;
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
}`,xf=`#include <common>
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
}`,gf=`uniform vec3 color;
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
}`,wf=`uniform float rotation;
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
}`,_f=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:Bh,alphahash_pars_fragment:Hh,alphamap_fragment:Gh,alphamap_pars_fragment:Vh,alphatest_fragment:Wh,alphatest_pars_fragment:Xh,aomap_fragment:qh,aomap_pars_fragment:Yh,batching_pars_vertex:Kh,batching_vertex:Jh,begin_vertex:Zh,beginnormal_vertex:$h,bsdfs:jh,iridescence_fragment:Qh,bumpmap_pars_fragment:e1,clipping_planes_fragment:t1,clipping_planes_pars_fragment:n1,clipping_planes_pars_vertex:i1,clipping_planes_vertex:a1,color_fragment:s1,color_pars_fragment:r1,color_pars_vertex:o1,color_vertex:c1,common:d1,cube_uv_reflection_fragment:l1,defaultnormal_vertex:h1,displacementmap_pars_vertex:u1,displacementmap_vertex:f1,emissivemap_fragment:p1,emissivemap_pars_fragment:m1,colorspace_fragment:x1,colorspace_pars_fragment:g1,envmap_fragment:w1,envmap_common_pars_fragment:_1,envmap_pars_fragment:b1,envmap_pars_vertex:v1,envmap_physical_pars_fragment:z1,envmap_vertex:M1,fog_vertex:y1,fog_pars_vertex:S1,fog_fragment:E1,fog_pars_fragment:T1,gradientmap_pars_fragment:A1,lightmap_pars_fragment:R1,lights_lambert_fragment:C1,lights_lambert_pars_fragment:P1,lights_pars_begin:D1,lights_toon_fragment:I1,lights_toon_pars_fragment:L1,lights_phong_fragment:U1,lights_phong_pars_fragment:N1,lights_physical_fragment:O1,lights_physical_pars_fragment:F1,lights_fragment_begin:k1,lights_fragment_maps:B1,lights_fragment_end:H1,logdepthbuf_fragment:G1,logdepthbuf_pars_fragment:V1,logdepthbuf_pars_vertex:W1,logdepthbuf_vertex:X1,map_fragment:q1,map_pars_fragment:Y1,map_particle_fragment:K1,map_particle_pars_fragment:J1,metalnessmap_fragment:Z1,metalnessmap_pars_fragment:$1,morphinstance_vertex:j1,morphcolor_vertex:Q1,morphnormal_vertex:eu,morphtarget_pars_vertex:tu,morphtarget_vertex:nu,normal_fragment_begin:iu,normal_fragment_maps:au,normal_pars_fragment:su,normal_pars_vertex:ru,normal_vertex:ou,normalmap_pars_fragment:cu,clearcoat_normal_fragment_begin:du,clearcoat_normal_fragment_maps:lu,clearcoat_pars_fragment:hu,iridescence_pars_fragment:uu,opaque_fragment:fu,packing:pu,premultiplied_alpha_fragment:mu,project_vertex:xu,dithering_fragment:gu,dithering_pars_fragment:wu,roughnessmap_fragment:_u,roughnessmap_pars_fragment:bu,shadowmap_pars_fragment:vu,shadowmap_pars_vertex:Mu,shadowmap_vertex:yu,shadowmask_pars_fragment:Su,skinbase_vertex:Eu,skinning_pars_vertex:Tu,skinning_vertex:Au,skinnormal_vertex:Ru,specularmap_fragment:Cu,specularmap_pars_fragment:Pu,tonemapping_fragment:Du,tonemapping_pars_fragment:zu,transmission_fragment:Iu,transmission_pars_fragment:Lu,uv_pars_fragment:Uu,uv_pars_vertex:Nu,uv_vertex:Ou,worldpos_vertex:Fu,background_vert:ku,background_frag:Bu,backgroundCube_vert:Hu,backgroundCube_frag:Gu,cube_vert:Vu,cube_frag:Wu,depth_vert:Xu,depth_frag:qu,distanceRGBA_vert:Yu,distanceRGBA_frag:Ku,equirect_vert:Ju,equirect_frag:Zu,linedashed_vert:$u,linedashed_frag:ju,meshbasic_vert:Qu,meshbasic_frag:ef,meshlambert_vert:tf,meshlambert_frag:nf,meshmatcap_vert:af,meshmatcap_frag:sf,meshnormal_vert:rf,meshnormal_frag:of,meshphong_vert:cf,meshphong_frag:df,meshphysical_vert:lf,meshphysical_frag:hf,meshtoon_vert:uf,meshtoon_frag:ff,points_vert:pf,points_frag:mf,shadow_vert:xf,shadow_frag:gf,sprite_vert:wf,sprite_frag:_f},le={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},cn={basic:{uniforms:zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new We(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:zt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:zt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new We(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:zt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:zt([le.points,le.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:zt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:zt([le.common,le.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:zt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:zt([le.sprite,le.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:zt([le.common,le.displacementmap,{referencePosition:{value:new _},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:zt([le.lights,le.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};cn.physical={uniforms:zt([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Ua={r:0,b:0,g:0},Xn=new fn,bf=new ht;function vf(n,e,t,i,a,r,c){const l=new We(0);let f=r===!0?0:1,d,u,x=null,m=0,g=null;function v(z){let D=z.isScene===!0?z.background:null;return D&&D.isTexture&&(D=(z.backgroundBlurriness>0?t:e).get(D)),D}function y(z){let D=!1;const E=v(z);E===null?w(l,f):E&&E.isColor&&(w(E,1),D=!0);const H=n.xr.getEnvironmentBlendMode();H==="additive"?i.buffers.color.setClear(0,0,0,1,c):H==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(n.autoClear||D)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function b(z,D){const E=v(D);E&&(E.isCubeTexture||E.mapping===ts)?(u===void 0&&(u=new ot(new h(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:Ii(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(H,L,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(u)),Xn.copy(D.backgroundRotation),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(bf.makeRotationFromEuler(Xn)),u.material.toneMapped=Qe.getTransfer(E.colorSpace)!==rt,(x!==E||m!==E.version||g!==n.toneMapping)&&(u.material.needsUpdate=!0,x=E,m=E.version,g=n.toneMapping),u.layers.enableAll(),z.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(d===void 0&&(d=new ot(new Fi(2,2),new Sn({name:"BackgroundMaterial",uniforms:Ii(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(d)),d.material.uniforms.t2D.value=E,d.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,d.material.toneMapped=Qe.getTransfer(E.colorSpace)!==rt,E.matrixAutoUpdate===!0&&E.updateMatrix(),d.material.uniforms.uvTransform.value.copy(E.matrix),(x!==E||m!==E.version||g!==n.toneMapping)&&(d.material.needsUpdate=!0,x=E,m=E.version,g=n.toneMapping),d.layers.enableAll(),z.unshift(d,d.geometry,d.material,0,0,null))}function w(z,D){z.getRGB(Ua,Pc(n)),i.buffers.color.setClear(Ua.r,Ua.g,Ua.b,D,c)}return{getClearColor:function(){return l},setClearColor:function(z,D=1){l.set(z),f=D,w(l,f)},getClearAlpha:function(){return f},setClearAlpha:function(z){f=z,w(l,f)},render:y,addToRenderList:b}}function Mf(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},a=m(null);let r=a,c=!1;function l(T,N,K,q,j){let ae=!1;const Q=x(q,K,N);r!==Q&&(r=Q,d(r.object)),ae=g(T,q,K,j),ae&&v(T,q,K,j),j!==null&&e.update(j,n.ELEMENT_ARRAY_BUFFER),(ae||c)&&(c=!1,E(T,N,K,q),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function f(){return n.createVertexArray()}function d(T){return n.bindVertexArray(T)}function u(T){return n.deleteVertexArray(T)}function x(T,N,K){const q=K.wireframe===!0;let j=i[T.id];j===void 0&&(j={},i[T.id]=j);let ae=j[N.id];ae===void 0&&(ae={},j[N.id]=ae);let Q=ae[q];return Q===void 0&&(Q=m(f()),ae[q]=Q),Q}function m(T){const N=[],K=[],q=[];for(let j=0;j<t;j++)N[j]=0,K[j]=0,q[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:K,attributeDivisors:q,object:T,attributes:{},index:null}}function g(T,N,K,q){const j=r.attributes,ae=N.attributes;let Q=0;const ce=K.getAttributes();for(const $ in ce)if(ce[$].location>=0){const we=j[$];let Re=ae[$];if(Re===void 0&&($==="instanceMatrix"&&T.instanceMatrix&&(Re=T.instanceMatrix),$==="instanceColor"&&T.instanceColor&&(Re=T.instanceColor)),we===void 0||we.attribute!==Re||Re&&we.data!==Re.data)return!0;Q++}return r.attributesNum!==Q||r.index!==q}function v(T,N,K,q){const j={},ae=N.attributes;let Q=0;const ce=K.getAttributes();for(const $ in ce)if(ce[$].location>=0){let we=ae[$];we===void 0&&($==="instanceMatrix"&&T.instanceMatrix&&(we=T.instanceMatrix),$==="instanceColor"&&T.instanceColor&&(we=T.instanceColor));const Re={};Re.attribute=we,we&&we.data&&(Re.data=we.data),j[$]=Re,Q++}r.attributes=j,r.attributesNum=Q,r.index=q}function y(){const T=r.newAttributes;for(let N=0,K=T.length;N<K;N++)T[N]=0}function b(T){w(T,0)}function w(T,N){const K=r.newAttributes,q=r.enabledAttributes,j=r.attributeDivisors;K[T]=1,q[T]===0&&(n.enableVertexAttribArray(T),q[T]=1),j[T]!==N&&(n.vertexAttribDivisor(T,N),j[T]=N)}function z(){const T=r.newAttributes,N=r.enabledAttributes;for(let K=0,q=N.length;K<q;K++)N[K]!==T[K]&&(n.disableVertexAttribArray(K),N[K]=0)}function D(T,N,K,q,j,ae,Q){Q===!0?n.vertexAttribIPointer(T,N,K,j,ae):n.vertexAttribPointer(T,N,K,q,j,ae)}function E(T,N,K,q){y();const j=q.attributes,ae=K.getAttributes(),Q=N.defaultAttributeValues;for(const ce in ae){const $=ae[ce];if($.location>=0){let ue=j[ce];if(ue===void 0&&(ce==="instanceMatrix"&&T.instanceMatrix&&(ue=T.instanceMatrix),ce==="instanceColor"&&T.instanceColor&&(ue=T.instanceColor)),ue!==void 0){const we=ue.normalized,Re=ue.itemSize,Xe=e.get(ue);if(Xe===void 0)continue;const it=Xe.buffer,te=Xe.type,de=Xe.bytesPerElement,Ee=te===n.INT||te===n.UNSIGNED_INT||ue.gpuType===Dr;if(ue.isInterleavedBufferAttribute){const fe=ue.data,Le=fe.stride,Oe=ue.offset;if(fe.isInstancedInterleavedBuffer){for(let qe=0;qe<$.locationSize;qe++)w($.location+qe,fe.meshPerAttribute);T.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let qe=0;qe<$.locationSize;qe++)b($.location+qe);n.bindBuffer(n.ARRAY_BUFFER,it);for(let qe=0;qe<$.locationSize;qe++)D($.location+qe,Re/$.locationSize,te,we,Le*de,(Oe+Re/$.locationSize*qe)*de,Ee)}else{if(ue.isInstancedBufferAttribute){for(let fe=0;fe<$.locationSize;fe++)w($.location+fe,ue.meshPerAttribute);T.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let fe=0;fe<$.locationSize;fe++)b($.location+fe);n.bindBuffer(n.ARRAY_BUFFER,it);for(let fe=0;fe<$.locationSize;fe++)D($.location+fe,Re/$.locationSize,te,we,Re*de,Re/$.locationSize*fe*de,Ee)}}else if(Q!==void 0){const we=Q[ce];if(we!==void 0)switch(we.length){case 2:n.vertexAttrib2fv($.location,we);break;case 3:n.vertexAttrib3fv($.location,we);break;case 4:n.vertexAttrib4fv($.location,we);break;default:n.vertexAttrib1fv($.location,we)}}}}z()}function H(){O();for(const T in i){const N=i[T];for(const K in N){const q=N[K];for(const j in q)u(q[j].object),delete q[j];delete N[K]}delete i[T]}}function L(T){if(i[T.id]===void 0)return;const N=i[T.id];for(const K in N){const q=N[K];for(const j in q)u(q[j].object),delete q[j];delete N[K]}delete i[T.id]}function U(T){for(const N in i){const K=i[N];if(K[T.id]===void 0)continue;const q=K[T.id];for(const j in q)u(q[j].object),delete q[j];delete K[T.id]}}function O(){C(),c=!0,r!==a&&(r=a,d(r.object))}function C(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:l,reset:O,resetDefaultState:C,dispose:H,releaseStatesOfGeometry:L,releaseStatesOfProgram:U,initAttributes:y,enableAttribute:b,disableUnusedAttributes:z}}function yf(n,e,t){let i;function a(d){i=d}function r(d,u){n.drawArrays(i,d,u),t.update(u,i,1)}function c(d,u,x){x!==0&&(n.drawArraysInstanced(i,d,u,x),t.update(u,i,x))}function l(d,u,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,u,0,x);let g=0;for(let v=0;v<x;v++)g+=u[v];t.update(g,i,1)}function f(d,u,x,m){if(x===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<d.length;v++)c(d[v],u[v],m[v]);else{g.multiDrawArraysInstancedWEBGL(i,d,0,u,0,m,0,x);let v=0;for(let y=0;y<x;y++)v+=u[y]*m[y];t.update(v,i,1)}}this.setMode=a,this.render=r,this.renderInstances=c,this.renderMultiDraw=l,this.renderMultiDrawInstances=f}function Sf(n,e,t,i){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");a=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(U){return!(U!==nn&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(U){const O=U===sa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==yn&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==hn&&!O)}function f(U){if(U==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const u=f(d);u!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",u,"instead."),d=u);const x=t.logarithmicDepthBuffer===!0,m=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),g=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),b=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),w=n.getParameter(n.MAX_VERTEX_ATTRIBS),z=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),D=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),H=v>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:l,precision:d,logarithmicDepthBuffer:x,reverseDepthBuffer:m,maxTextures:g,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:b,maxAttributes:w,maxVertexUniforms:z,maxVaryings:D,maxFragmentUniforms:E,vertexTextures:H,maxSamples:L}}function Ef(n){const e=this;let t=null,i=0,a=!1,r=!1;const c=new Yn,l=new Ge,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(x,m){const g=x.length!==0||m||i!==0||a;return a=m,i=x.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(x,m){t=u(x,m,0)},this.setState=function(x,m,g){const v=x.clippingPlanes,y=x.clipIntersection,b=x.clipShadows,w=n.get(x);if(!a||v===null||v.length===0||r&&!b)r?u(null):d();else{const z=r?0:i,D=z*4;let E=w.clippingState||null;f.value=E,E=u(v,m,D,g);for(let H=0;H!==D;++H)E[H]=t[H];w.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=z}};function d(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(x,m,g,v){const y=x!==null?x.length:0;let b=null;if(y!==0){if(b=f.value,v!==!0||b===null){const w=g+y*4,z=m.matrixWorldInverse;l.getNormalMatrix(z),(b===null||b.length<w)&&(b=new Float32Array(w));for(let D=0,E=g;D!==y;++D,E+=4)c.copy(x[D]).applyMatrix4(z,l),c.normal.toArray(b,E),b[E+3]=c.constant}f.value=b,f.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,b}}function Tf(n){let e=new WeakMap;function t(c,l){return l===Zs?c.mapping=Ci:l===$s&&(c.mapping=Pi),c}function i(c){if(c&&c.isTexture){const l=c.mapping;if(l===Zs||l===$s)if(e.has(c)){const f=e.get(c).texture;return t(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const d=new Nh(f.height);return d.fromEquirectangularTexture(n,c),e.set(c,d),c.addEventListener("dispose",a),t(d.texture,c.mapping)}else return null}}return c}function a(c){const l=c.target;l.removeEventListener("dispose",a);const f=e.get(l);f!==void 0&&(e.delete(l),f.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Lc extends Dc{constructor(e=-1,t=1,i=1,a=-1,r=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=r,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,r,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-e,c=i+e,l=a+t,f=a-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=d*this.view.offsetX,c=r+d*this.view.width,l-=u*this.view.offsetY,f=l-u*this.view.height}this.projectionMatrix.makeOrthographic(r,c,l,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Si=4,Mo=[.125,.215,.35,.446,.526,.582],$n=20,Ps=new Lc,yo=new We;let Ds=null,zs=0,Is=0,Ls=!1;const Kn=(1+Math.sqrt(5))/2,bi=1/Kn,So=[new _(-Kn,bi,0),new _(Kn,bi,0),new _(-bi,0,Kn),new _(bi,0,Kn),new _(0,Kn,-bi),new _(0,Kn,bi),new _(-1,1,-1),new _(1,1,-1),new _(-1,1,1),new _(1,1,1)];class Eo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,a=100){Ds=this._renderer.getRenderTarget(),zs=this._renderer.getActiveCubeFace(),Is=this._renderer.getActiveMipmapLevel(),Ls=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,a,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ro(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ao(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ds,zs,Is),this._renderer.xr.enabled=Ls,e.scissorTest=!1,Na(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ci||e.mapping===Pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ds=this._renderer.getRenderTarget(),zs=this._renderer.getActiveCubeFace(),Is=this._renderer.getActiveMipmapLevel(),Ls=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:sa,format:nn,colorSpace:Li,depthBuffer:!1},a=To(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=To(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Af(r)),this._blurMaterial=Rf(r,e,t)}return a}_compileMaterial(e){const t=new ot(this._lodPlanes[0],e);this._renderer.compile(t,Ps)}_sceneToCubeUV(e,t,i,a){const l=new en(90,1,t,i),f=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,x=u.autoClear,m=u.toneMapping;u.getClearColor(yo),u.toneMapping=On,u.autoClear=!1;const g=new Fr({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),v=new ot(new h,g);let y=!1;const b=e.background;b?b.isColor&&(g.color.copy(b),e.background=null,y=!0):(g.color.copy(yo),y=!0);for(let w=0;w<6;w++){const z=w%3;z===0?(l.up.set(0,f[w],0),l.lookAt(d[w],0,0)):z===1?(l.up.set(0,0,f[w]),l.lookAt(0,d[w],0)):(l.up.set(0,f[w],0),l.lookAt(0,0,d[w]));const D=this._cubeSize;Na(a,z*D,w>2?D:0,D,D),u.setRenderTarget(a),y&&u.render(v,l),u.render(e,l)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=m,u.autoClear=x,e.background=b}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===Ci||e.mapping===Pi;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ro()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ao());const r=a?this._cubemapMaterial:this._equirectMaterial,c=new ot(this._lodPlanes[0],r),l=r.uniforms;l.envMap.value=e;const f=this._cubeSize;Na(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(c,Ps)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let r=1;r<a;r++){const c=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=So[(a-r-1)%So.length];this._blur(e,r-1,r,c,l)}t.autoClear=i}_blur(e,t,i,a,r){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,a,"latitudinal",r),this._halfBlur(c,e,i,i,a,"longitudinal",r)}_halfBlur(e,t,i,a,r,c,l){const f=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,x=new ot(this._lodPlanes[a],d),m=d.uniforms,g=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*$n-1),y=r/v,b=isFinite(r)?1+Math.floor(u*y):$n;b>$n&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${$n}`);const w=[];let z=0;for(let U=0;U<$n;++U){const O=U/y,C=Math.exp(-O*O/2);w.push(C),U===0?z+=C:U<b&&(z+=2*C)}for(let U=0;U<w.length;U++)w[U]=w[U]/z;m.envMap.value=e.texture,m.samples.value=b,m.weights.value=w,m.latitudinal.value=c==="latitudinal",l&&(m.poleAxis.value=l);const{_lodMax:D}=this;m.dTheta.value=v,m.mipInt.value=D-i;const E=this._sizeLods[a],H=3*E*(a>D-Si?a-D+Si:0),L=4*(this._cubeSize-E);Na(t,H,L,3*E,2*E),f.setRenderTarget(t),f.render(x,Ps)}}function Af(n){const e=[],t=[],i=[];let a=n;const r=n-Si+1+Mo.length;for(let c=0;c<r;c++){const l=Math.pow(2,a);t.push(l);let f=1/l;c>n-Si?f=Mo[c-n+Si-1]:c===0&&(f=0),i.push(f);const d=1/(l-2),u=-d,x=1+d,m=[u,u,x,u,x,x,u,u,x,x,u,x],g=6,v=6,y=3,b=2,w=1,z=new Float32Array(y*v*g),D=new Float32Array(b*v*g),E=new Float32Array(w*v*g);for(let L=0;L<g;L++){const U=L%3*2/3-1,O=L>2?0:-1,C=[U,O,0,U+2/3,O,0,U+2/3,O+1,0,U,O,0,U+2/3,O+1,0,U,O+1,0];z.set(C,y*v*L),D.set(m,b*v*L);const T=[L,L,L,L,L,L];E.set(T,w*v*L)}const H=new Ut;H.setAttribute("position",new Xt(z,y)),H.setAttribute("uv",new Xt(D,b)),H.setAttribute("faceIndex",new Xt(E,w)),e.push(H),a>Si&&a--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function To(n,e,t){const i=new ti(n,e,t);return i.texture.mapping=ts,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Na(n,e,t,i,a){n.viewport.set(e,t,i,a),n.scissor.set(e,t,i,a)}function Rf(n,e,t){const i=new Float32Array($n),a=new _(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Br(),fragmentShader:`

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
	`}function Cf(n){let e=new WeakMap,t=null;function i(l){if(l&&l.isTexture){const f=l.mapping,d=f===Zs||f===$s,u=f===Ci||f===Pi;if(d||u){let x=e.get(l);const m=x!==void 0?x.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==m)return t===null&&(t=new Eo(n)),x=d?t.fromEquirectangular(l,x):t.fromCubemap(l,x),x.texture.pmremVersion=l.pmremVersion,e.set(l,x),x.texture;if(x!==void 0)return x.texture;{const g=l.image;return d&&g&&g.height>0||u&&g&&a(g)?(t===null&&(t=new Eo(n)),x=d?t.fromEquirectangular(l):t.fromCubemap(l),x.texture.pmremVersion=l.pmremVersion,e.set(l,x),l.addEventListener("dispose",r),x.texture):null}}}return l}function a(l){let f=0;const d=6;for(let u=0;u<d;u++)l[u]!==void 0&&f++;return f===d}function r(l){const f=l.target;f.removeEventListener("dispose",r);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function Pf(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=n.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&Qi("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function Df(n,e,t,i){const a={},r=new WeakMap;function c(x){const m=x.target;m.index!==null&&e.remove(m.index);for(const v in m.attributes)e.remove(m.attributes[v]);for(const v in m.morphAttributes){const y=m.morphAttributes[v];for(let b=0,w=y.length;b<w;b++)e.remove(y[b])}m.removeEventListener("dispose",c),delete a[m.id];const g=r.get(m);g&&(e.remove(g),r.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(x,m){return a[m.id]===!0||(m.addEventListener("dispose",c),a[m.id]=!0,t.memory.geometries++),m}function f(x){const m=x.attributes;for(const v in m)e.update(m[v],n.ARRAY_BUFFER);const g=x.morphAttributes;for(const v in g){const y=g[v];for(let b=0,w=y.length;b<w;b++)e.update(y[b],n.ARRAY_BUFFER)}}function d(x){const m=[],g=x.index,v=x.attributes.position;let y=0;if(g!==null){const z=g.array;y=g.version;for(let D=0,E=z.length;D<E;D+=3){const H=z[D+0],L=z[D+1],U=z[D+2];m.push(H,L,L,U,U,H)}}else if(v!==void 0){const z=v.array;y=v.version;for(let D=0,E=z.length/3-1;D<E;D+=3){const H=D+0,L=D+1,U=D+2;m.push(H,L,L,U,U,H)}}else return;const b=new(Mc(m)?Cc:Rc)(m,1);b.version=y;const w=r.get(x);w&&e.remove(w),r.set(x,b)}function u(x){const m=r.get(x);if(m){const g=x.index;g!==null&&m.version<g.version&&d(x)}else d(x);return r.get(x)}return{get:l,update:f,getWireframeAttribute:u}}function zf(n,e,t){let i;function a(m){i=m}let r,c;function l(m){r=m.type,c=m.bytesPerElement}function f(m,g){n.drawElements(i,g,r,m*c),t.update(g,i,1)}function d(m,g,v){v!==0&&(n.drawElementsInstanced(i,g,r,m*c,v),t.update(g,i,v))}function u(m,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,r,m,0,v);let b=0;for(let w=0;w<v;w++)b+=g[w];t.update(b,i,1)}function x(m,g,v,y){if(v===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let w=0;w<m.length;w++)d(m[w]/c,g[w],y[w]);else{b.multiDrawElementsInstancedWEBGL(i,g,0,r,m,0,y,0,v);let w=0;for(let z=0;z<v;z++)w+=g[z]*y[z];t.update(w,i,1)}}this.setMode=a,this.setIndex=l,this.render=f,this.renderInstances=d,this.renderMultiDraw=u,this.renderMultiDrawInstances=x}function If(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,c,l){switch(t.calls++,c){case n.TRIANGLES:t.triangles+=l*(r/3);break;case n.LINES:t.lines+=l*(r/2);break;case n.LINE_STRIP:t.lines+=l*(r-1);break;case n.LINE_LOOP:t.lines+=l*r;break;case n.POINTS:t.points+=l*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function Lf(n,e,t){const i=new WeakMap,a=new gt;function r(c,l,f){const d=c.morphTargetInfluences,u=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,x=u!==void 0?u.length:0;let m=i.get(l);if(m===void 0||m.count!==x){let C=function(){U.dispose(),i.delete(l),l.removeEventListener("dispose",C)};m!==void 0&&m.texture.dispose();const g=l.morphAttributes.position!==void 0,v=l.morphAttributes.normal!==void 0,y=l.morphAttributes.color!==void 0,b=l.morphAttributes.position||[],w=l.morphAttributes.normal||[],z=l.morphAttributes.color||[];let D=0;g===!0&&(D=1),v===!0&&(D=2),y===!0&&(D=3);let E=l.attributes.position.count*D,H=1;E>e.maxTextureSize&&(H=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const L=new Float32Array(E*H*4*x),U=new Sc(L,E,H,x);U.type=hn,U.needsUpdate=!0;const O=D*4;for(let T=0;T<x;T++){const N=b[T],K=w[T],q=z[T],j=E*H*4*T;for(let ae=0;ae<N.count;ae++){const Q=ae*O;g===!0&&(a.fromBufferAttribute(N,ae),L[j+Q+0]=a.x,L[j+Q+1]=a.y,L[j+Q+2]=a.z,L[j+Q+3]=0),v===!0&&(a.fromBufferAttribute(K,ae),L[j+Q+4]=a.x,L[j+Q+5]=a.y,L[j+Q+6]=a.z,L[j+Q+7]=0),y===!0&&(a.fromBufferAttribute(q,ae),L[j+Q+8]=a.x,L[j+Q+9]=a.y,L[j+Q+10]=a.z,L[j+Q+11]=q.itemSize===4?a.w:1)}}m={count:x,texture:U,size:new Pe(E,H)},i.set(l,m),l.addEventListener("dispose",C)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",c.morphTexture,t);else{let g=0;for(let y=0;y<d.length;y++)g+=d[y];const v=l.morphTargetsRelative?1:1-g;f.getUniforms().setValue(n,"morphTargetBaseInfluence",v),f.getUniforms().setValue(n,"morphTargetInfluences",d)}f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:r}}function Uf(n,e,t,i){let a=new WeakMap;function r(f){const d=i.render.frame,u=f.geometry,x=e.get(f,u);if(a.get(x)!==d&&(e.update(x),a.set(x,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",l)===!1&&f.addEventListener("dispose",l),a.get(f)!==d&&(t.update(f.instanceMatrix,n.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,n.ARRAY_BUFFER),a.set(f,d))),f.isSkinnedMesh){const m=f.skeleton;a.get(m)!==d&&(m.update(),a.set(m,d))}return x}function c(){a=new WeakMap}function l(f){const d=f.target;d.removeEventListener("dispose",l),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:r,dispose:c}}class Uc extends Ct{constructor(e,t,i,a,r,c,l,f,d,u=Ti){if(u!==Ti&&u!==zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ti&&(i=ei),i===void 0&&u===zi&&(i=Di),super(null,a,r,c,l,f,u,i,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:Wt,this.minFilter=f!==void 0?f:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Nc=new Ct,Co=new Uc(1,1),Oc=new Sc,Fc=new bh,kc=new zc,Po=[],Do=[],zo=new Float32Array(16),Io=new Float32Array(9),Lo=new Float32Array(4);function ki(n,e,t){const i=n[0];if(i<=0||i>0)return n;const a=e*t;let r=Po[a];if(r===void 0&&(r=new Float32Array(a),Po[a]=r),e!==0){i.toArray(r,0);for(let c=1,l=0;c!==e;++c)l+=t,n[c].toArray(r,l)}return r}function vt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function is(n,e){let t=Do[e];t===void 0&&(t=new Int32Array(e),Do[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Nf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Of(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2fv(this.addr,e),Mt(t,e)}}function Ff(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;n.uniform3fv(this.addr,e),Mt(t,e)}}function kf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4fv(this.addr,e),Mt(t,e)}}function Bf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(vt(t,i))return;Lo.set(i),n.uniformMatrix2fv(this.addr,!1,Lo),Mt(t,i)}}function Hf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(vt(t,i))return;Io.set(i),n.uniformMatrix3fv(this.addr,!1,Io),Mt(t,i)}}function Gf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(vt(t,i))return;zo.set(i),n.uniformMatrix4fv(this.addr,!1,zo),Mt(t,i)}}function Vf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Wf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2iv(this.addr,e),Mt(t,e)}}function Xf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;n.uniform3iv(this.addr,e),Mt(t,e)}}function qf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4iv(this.addr,e),Mt(t,e)}}function Yf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Kf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2uiv(this.addr,e),Mt(t,e)}}function Jf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;n.uniform3uiv(this.addr,e),Mt(t,e)}}function Zf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4uiv(this.addr,e),Mt(t,e)}}function $f(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);let r;this.type===n.SAMPLER_2D_SHADOW?(Co.compareFunction=vc,r=Co):r=Nc,t.setTexture2D(e||r,a)}function jf(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||Fc,a)}function Qf(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||kc,a)}function ep(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||Oc,a)}function tp(n){switch(n){case 5126:return Nf;case 35664:return Of;case 35665:return Ff;case 35666:return kf;case 35674:return Bf;case 35675:return Hf;case 35676:return Gf;case 5124:case 35670:return Vf;case 35667:case 35671:return Wf;case 35668:case 35672:return Xf;case 35669:case 35673:return qf;case 5125:return Yf;case 36294:return Kf;case 36295:return Jf;case 36296:return Zf;case 35678:case 36198:case 36298:case 36306:case 35682:return $f;case 35679:case 36299:case 36307:return jf;case 35680:case 36300:case 36308:case 36293:return Qf;case 36289:case 36303:case 36311:case 36292:return ep}}function np(n,e){n.uniform1fv(this.addr,e)}function ip(n,e){const t=ki(e,this.size,2);n.uniform2fv(this.addr,t)}function ap(n,e){const t=ki(e,this.size,3);n.uniform3fv(this.addr,t)}function sp(n,e){const t=ki(e,this.size,4);n.uniform4fv(this.addr,t)}function rp(n,e){const t=ki(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function op(n,e){const t=ki(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function cp(n,e){const t=ki(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function dp(n,e){n.uniform1iv(this.addr,e)}function lp(n,e){n.uniform2iv(this.addr,e)}function hp(n,e){n.uniform3iv(this.addr,e)}function up(n,e){n.uniform4iv(this.addr,e)}function fp(n,e){n.uniform1uiv(this.addr,e)}function pp(n,e){n.uniform2uiv(this.addr,e)}function mp(n,e){n.uniform3uiv(this.addr,e)}function xp(n,e){n.uniform4uiv(this.addr,e)}function gp(n,e,t){const i=this.cache,a=e.length,r=is(t,a);vt(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||Nc,r[c])}function wp(n,e,t){const i=this.cache,a=e.length,r=is(t,a);vt(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||Fc,r[c])}function _p(n,e,t){const i=this.cache,a=e.length,r=is(t,a);vt(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||kc,r[c])}function bp(n,e,t){const i=this.cache,a=e.length,r=is(t,a);vt(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||Oc,r[c])}function vp(n){switch(n){case 5126:return np;case 35664:return ip;case 35665:return ap;case 35666:return sp;case 35674:return rp;case 35675:return op;case 35676:return cp;case 5124:case 35670:return dp;case 35667:case 35671:return lp;case 35668:case 35672:return hp;case 35669:case 35673:return up;case 5125:return fp;case 36294:return pp;case 36295:return mp;case 36296:return xp;case 35678:case 36198:case 36298:case 36306:case 35682:return gp;case 35679:case 36299:case 36307:return wp;case 35680:case 36300:case 36308:case 36293:return _p;case 36289:case 36303:case 36311:case 36292:return bp}}class Mp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=tp(t.type)}}class yp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vp(t.type)}}class Sp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let r=0,c=a.length;r!==c;++r){const l=a[r];l.setValue(e,t[l.id],i)}}}const Us=/(\w+)(\])?(\[|\.)?/g;function Uo(n,e){n.seq.push(e),n.map[e.id]=e}function Ep(n,e,t){const i=n.name,a=i.length;for(Us.lastIndex=0;;){const r=Us.exec(i),c=Us.lastIndex;let l=r[1];const f=r[2]==="]",d=r[3];if(f&&(l=l|0),d===void 0||d==="["&&c+2===a){Uo(t,d===void 0?new Mp(l,n,e):new yp(l,n,e));break}else{let x=t.map[l];x===void 0&&(x=new Sp(l),Uo(t,x)),t=x}}}class Ja{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const r=e.getActiveUniform(t,a),c=e.getUniformLocation(t,r.name);Ep(r,c,this)}}setValue(e,t,i,a){const r=this.map[t];r!==void 0&&r.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let r=0,c=t.length;r!==c;++r){const l=t[r],f=i[l.id];f.needsUpdate!==!1&&l.setValue(e,f.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,r=e.length;a!==r;++a){const c=e[a];c.id in t&&i.push(c)}return i}}function No(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Tp=37297;let Ap=0;function Rp(n,e){const t=n.split(`
`),i=[],a=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let c=a;c<r;c++){const l=c+1;i.push(`${l===e?">":" "} ${l}: ${t[c]}`)}return i.join(`
`)}const Oo=new Ge;function Cp(n){Qe._getMatrix(Oo,Qe.workingColorSpace,n);const e=`mat3( ${Oo.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(n)){case ns:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Fo(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=n.getShaderInfoLog(e).trim();if(i&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const c=parseInt(r[1]);return t.toUpperCase()+`

`+a+`

`+Rp(n.getShaderSource(e),c)}else return a}function Pp(n,e){const t=Cp(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Dp(n,e){let t;switch(e){case K0:t="Linear";break;case J0:t="Reinhard";break;case Z0:t="Cineon";break;case dc:t="ACESFilmic";break;case j0:t="AgX";break;case Q0:t="Neutral";break;case $0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Oa=new _;function zp(){Qe.getLuminanceCoefficients(Oa);const n=Oa.x.toFixed(4),e=Oa.y.toFixed(4),t=Oa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ip(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function Lp(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Up(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=n.getActiveAttrib(e,a),c=r.name;let l=1;r.type===n.FLOAT_MAT2&&(l=2),r.type===n.FLOAT_MAT3&&(l=3),r.type===n.FLOAT_MAT4&&(l=4),t[c]={type:r.type,location:n.getAttribLocation(e,c),locationSize:l}}return t}function ea(n){return n!==""}function ko(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bo(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Np=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ar(n){return n.replace(Np,Fp)}const Op=new Map;function Fp(n,e){let t=Ve[e];if(t===void 0){const i=Op.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ar(t)}const kp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ho(n){return n.replace(kp,Bp)}function Bp(n,e,t,i){let a="";for(let r=parseInt(e);r<parseInt(t);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function Go(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Hp(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===rc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===oc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bn&&(e="SHADOWMAP_TYPE_VSM"),e}function Gp(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ci:case Pi:e="ENVMAP_TYPE_CUBE";break;case ts:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vp(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Pi:e="ENVMAP_MODE_REFRACTION";break}return e}function Wp(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case cc:e="ENVMAP_BLENDING_MULTIPLY";break;case q0:e="ENVMAP_BLENDING_MIX";break;case Y0:e="ENVMAP_BLENDING_ADD";break}return e}function Xp(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function qp(n,e,t,i){const a=n.getContext(),r=t.defines;let c=t.vertexShader,l=t.fragmentShader;const f=Hp(t),d=Gp(t),u=Vp(t),x=Wp(t),m=Xp(t),g=Ip(t),v=Lp(r),y=a.createProgram();let b,w,z=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ea).join(`
`),b.length>0&&(b+=`
`),w=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ea).join(`
`),w.length>0&&(w+=`
`)):(b=[Go(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),w=[Go(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",t.envMap?"#define "+x:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?Ve.tonemapping_pars_fragment:"",t.toneMapping!==On?Dp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Pp("linearToOutputTexel",t.outputColorSpace),zp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ea).join(`
`)),c=Ar(c),c=ko(c,t),c=Bo(c,t),l=Ar(l),l=ko(l,t),l=Bo(l,t),c=Ho(c),l=Ho(l),t.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,b=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,w=["#define varying in",t.glslVersion===eo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);const D=z+b+c,E=z+w+l,H=No(a,a.VERTEX_SHADER,D),L=No(a,a.FRAGMENT_SHADER,E);a.attachShader(y,H),a.attachShader(y,L),t.index0AttributeName!==void 0?a.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(y,0,"position"),a.linkProgram(y);function U(N){if(n.debug.checkShaderErrors){const K=a.getProgramInfoLog(y).trim(),q=a.getShaderInfoLog(H).trim(),j=a.getShaderInfoLog(L).trim();let ae=!0,Q=!0;if(a.getProgramParameter(y,a.LINK_STATUS)===!1)if(ae=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,y,H,L);else{const ce=Fo(a,H,"vertex"),$=Fo(a,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(y,a.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+K+`
`+ce+`
`+$)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(q===""||j==="")&&(Q=!1);Q&&(N.diagnostics={runnable:ae,programLog:K,vertexShader:{log:q,prefix:b},fragmentShader:{log:j,prefix:w}})}a.deleteShader(H),a.deleteShader(L),O=new Ja(a,y),C=Up(a,y)}let O;this.getUniforms=function(){return O===void 0&&U(this),O};let C;this.getAttributes=function(){return C===void 0&&U(this),C};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=a.getProgramParameter(y,Tp)),T},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ap++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=H,this.fragmentShader=L,this}let Yp=0;class Kp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),r=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(r)===!1&&(c.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Jp(e),t.set(e,i)),i}}class Jp{constructor(e){this.id=Yp++,this.code=e,this.usedTimes=0}}function Zp(n,e,t,i,a,r,c){const l=new Tc,f=new Kp,d=new Set,u=[],x=a.logarithmicDepthBuffer,m=a.vertexTextures;let g=a.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(C){return d.add(C),C===0?"uv":`uv${C}`}function b(C,T,N,K,q){const j=K.fog,ae=q.geometry,Q=C.isMeshStandardMaterial?K.environment:null,ce=(C.isMeshStandardMaterial?t:e).get(C.envMap||Q),$=ce&&ce.mapping===ts?ce.image.height:null,ue=v[C.type];C.precision!==null&&(g=a.getMaxPrecision(C.precision),g!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",g,"instead."));const we=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Re=we!==void 0?we.length:0;let Xe=0;ae.morphAttributes.position!==void 0&&(Xe=1),ae.morphAttributes.normal!==void 0&&(Xe=2),ae.morphAttributes.color!==void 0&&(Xe=3);let it,te,de,Ee;if(ue){const nt=cn[ue];it=nt.vertexShader,te=nt.fragmentShader}else it=C.vertexShader,te=C.fragmentShader,f.update(C),de=f.getVertexShaderID(C),Ee=f.getFragmentShaderID(C);const fe=n.getRenderTarget(),Le=n.state.buffers.depth.getReversed(),Oe=q.isInstancedMesh===!0,qe=q.isBatchedMesh===!0,ft=!!C.map,Ze=!!C.matcap,xt=!!ce,G=!!C.aoMap,Nt=!!C.lightMap,Ye=!!C.bumpMap,Ke=!!C.normalMap,ze=!!C.displacementMap,ct=!!C.emissiveMap,De=!!C.metalnessMap,I=!!C.roughnessMap,S=C.anisotropy>0,V=C.clearcoat>0,ne=C.dispersion>0,se=C.iridescence>0,ee=C.sheen>0,Te=C.transmission>0,pe=S&&!!C.anisotropyMap,_e=V&&!!C.clearcoatMap,$e=V&&!!C.clearcoatNormalMap,re=V&&!!C.clearcoatRoughnessMap,be=se&&!!C.iridescenceMap,Ie=se&&!!C.iridescenceThicknessMap,Ue=ee&&!!C.sheenColorMap,ve=ee&&!!C.sheenRoughnessMap,Je=!!C.specularMap,He=!!C.specularColorMap,at=!!C.specularIntensityMap,F=Te&&!!C.transmissionMap,he=Te&&!!C.thicknessMap,Z=!!C.gradientMap,ie=!!C.alphaMap,ge=C.alphaTest>0,me=!!C.alphaHash,ke=!!C.extensions;let mt=On;C.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(mt=n.toneMapping);const yt={shaderID:ue,shaderType:C.type,shaderName:C.name,vertexShader:it,fragmentShader:te,defines:C.defines,customVertexShaderID:de,customFragmentShaderID:Ee,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:g,batching:qe,batchingColor:qe&&q._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&q.instanceColor!==null,instancingMorph:Oe&&q.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Li,alphaToCoverage:!!C.alphaToCoverage,map:ft,matcap:Ze,envMap:xt,envMapMode:xt&&ce.mapping,envMapCubeUVHeight:$,aoMap:G,lightMap:Nt,bumpMap:Ye,normalMap:Ke,displacementMap:m&&ze,emissiveMap:ct,normalMapObjectSpace:Ke&&C.normalMapType===ih,normalMapTangentSpace:Ke&&C.normalMapType===bc,metalnessMap:De,roughnessMap:I,anisotropy:S,anisotropyMap:pe,clearcoat:V,clearcoatMap:_e,clearcoatNormalMap:$e,clearcoatRoughnessMap:re,dispersion:ne,iridescence:se,iridescenceMap:be,iridescenceThicknessMap:Ie,sheen:ee,sheenColorMap:Ue,sheenRoughnessMap:ve,specularMap:Je,specularColorMap:He,specularIntensityMap:at,transmission:Te,transmissionMap:F,thicknessMap:he,gradientMap:Z,opaque:C.transparent===!1&&C.blending===Ei&&C.alphaToCoverage===!1,alphaMap:ie,alphaTest:ge,alphaHash:me,combine:C.combine,mapUv:ft&&y(C.map.channel),aoMapUv:G&&y(C.aoMap.channel),lightMapUv:Nt&&y(C.lightMap.channel),bumpMapUv:Ye&&y(C.bumpMap.channel),normalMapUv:Ke&&y(C.normalMap.channel),displacementMapUv:ze&&y(C.displacementMap.channel),emissiveMapUv:ct&&y(C.emissiveMap.channel),metalnessMapUv:De&&y(C.metalnessMap.channel),roughnessMapUv:I&&y(C.roughnessMap.channel),anisotropyMapUv:pe&&y(C.anisotropyMap.channel),clearcoatMapUv:_e&&y(C.clearcoatMap.channel),clearcoatNormalMapUv:$e&&y(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&y(C.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&y(C.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&y(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&y(C.sheenColorMap.channel),sheenRoughnessMapUv:ve&&y(C.sheenRoughnessMap.channel),specularMapUv:Je&&y(C.specularMap.channel),specularColorMapUv:He&&y(C.specularColorMap.channel),specularIntensityMapUv:at&&y(C.specularIntensityMap.channel),transmissionMapUv:F&&y(C.transmissionMap.channel),thicknessMapUv:he&&y(C.thicknessMap.channel),alphaMapUv:ie&&y(C.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(Ke||S),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ae.attributes.uv&&(ft||ie),fog:!!j,useFog:C.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Le,skinning:q.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Xe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:C.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:mt,decodeVideoTexture:ft&&C.map.isVideoTexture===!0&&Qe.getTransfer(C.map.colorSpace)===rt,decodeVideoTextureEmissive:ct&&C.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(C.emissiveMap.colorSpace)===rt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===dn,flipSided:C.side===Lt,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:ke&&C.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&C.extensions.multiDraw===!0||qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return yt.vertexUv1s=d.has(1),yt.vertexUv2s=d.has(2),yt.vertexUv3s=d.has(3),d.clear(),yt}function w(C){const T=[];if(C.shaderID?T.push(C.shaderID):(T.push(C.customVertexShaderID),T.push(C.customFragmentShaderID)),C.defines!==void 0)for(const N in C.defines)T.push(N),T.push(C.defines[N]);return C.isRawShaderMaterial===!1&&(z(T,C),D(T,C),T.push(n.outputColorSpace)),T.push(C.customProgramCacheKey),T.join()}function z(C,T){C.push(T.precision),C.push(T.outputColorSpace),C.push(T.envMapMode),C.push(T.envMapCubeUVHeight),C.push(T.mapUv),C.push(T.alphaMapUv),C.push(T.lightMapUv),C.push(T.aoMapUv),C.push(T.bumpMapUv),C.push(T.normalMapUv),C.push(T.displacementMapUv),C.push(T.emissiveMapUv),C.push(T.metalnessMapUv),C.push(T.roughnessMapUv),C.push(T.anisotropyMapUv),C.push(T.clearcoatMapUv),C.push(T.clearcoatNormalMapUv),C.push(T.clearcoatRoughnessMapUv),C.push(T.iridescenceMapUv),C.push(T.iridescenceThicknessMapUv),C.push(T.sheenColorMapUv),C.push(T.sheenRoughnessMapUv),C.push(T.specularMapUv),C.push(T.specularColorMapUv),C.push(T.specularIntensityMapUv),C.push(T.transmissionMapUv),C.push(T.thicknessMapUv),C.push(T.combine),C.push(T.fogExp2),C.push(T.sizeAttenuation),C.push(T.morphTargetsCount),C.push(T.morphAttributeCount),C.push(T.numDirLights),C.push(T.numPointLights),C.push(T.numSpotLights),C.push(T.numSpotLightMaps),C.push(T.numHemiLights),C.push(T.numRectAreaLights),C.push(T.numDirLightShadows),C.push(T.numPointLightShadows),C.push(T.numSpotLightShadows),C.push(T.numSpotLightShadowsWithMaps),C.push(T.numLightProbes),C.push(T.shadowMapType),C.push(T.toneMapping),C.push(T.numClippingPlanes),C.push(T.numClipIntersection),C.push(T.depthPacking)}function D(C,T){l.disableAll(),T.supportsVertexTextures&&l.enable(0),T.instancing&&l.enable(1),T.instancingColor&&l.enable(2),T.instancingMorph&&l.enable(3),T.matcap&&l.enable(4),T.envMap&&l.enable(5),T.normalMapObjectSpace&&l.enable(6),T.normalMapTangentSpace&&l.enable(7),T.clearcoat&&l.enable(8),T.iridescence&&l.enable(9),T.alphaTest&&l.enable(10),T.vertexColors&&l.enable(11),T.vertexAlphas&&l.enable(12),T.vertexUv1s&&l.enable(13),T.vertexUv2s&&l.enable(14),T.vertexUv3s&&l.enable(15),T.vertexTangents&&l.enable(16),T.anisotropy&&l.enable(17),T.alphaHash&&l.enable(18),T.batching&&l.enable(19),T.dispersion&&l.enable(20),T.batchingColor&&l.enable(21),C.push(l.mask),l.disableAll(),T.fog&&l.enable(0),T.useFog&&l.enable(1),T.flatShading&&l.enable(2),T.logarithmicDepthBuffer&&l.enable(3),T.reverseDepthBuffer&&l.enable(4),T.skinning&&l.enable(5),T.morphTargets&&l.enable(6),T.morphNormals&&l.enable(7),T.morphColors&&l.enable(8),T.premultipliedAlpha&&l.enable(9),T.shadowMapEnabled&&l.enable(10),T.doubleSided&&l.enable(11),T.flipSided&&l.enable(12),T.useDepthPacking&&l.enable(13),T.dithering&&l.enable(14),T.transmission&&l.enable(15),T.sheen&&l.enable(16),T.opaque&&l.enable(17),T.pointsUvs&&l.enable(18),T.decodeVideoTexture&&l.enable(19),T.decodeVideoTextureEmissive&&l.enable(20),T.alphaToCoverage&&l.enable(21),C.push(l.mask)}function E(C){const T=v[C.type];let N;if(T){const K=cn[T];N=zh.clone(K.uniforms)}else N=C.uniforms;return N}function H(C,T){let N;for(let K=0,q=u.length;K<q;K++){const j=u[K];if(j.cacheKey===T){N=j,++N.usedTimes;break}}return N===void 0&&(N=new qp(n,T,C,r),u.push(N)),N}function L(C){if(--C.usedTimes===0){const T=u.indexOf(C);u[T]=u[u.length-1],u.pop(),C.destroy()}}function U(C){f.remove(C)}function O(){f.dispose()}return{getParameters:b,getProgramCacheKey:w,getUniforms:E,acquireProgram:H,releaseProgram:L,releaseShaderCache:U,programs:u,dispose:O}}function $p(){let n=new WeakMap;function e(c){return n.has(c)}function t(c){let l=n.get(c);return l===void 0&&(l={},n.set(c,l)),l}function i(c){n.delete(c)}function a(c,l,f){n.get(c)[l]=f}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:r}}function jp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Vo(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Wo(){const n=[];let e=0;const t=[],i=[],a=[];function r(){e=0,t.length=0,i.length=0,a.length=0}function c(x,m,g,v,y,b){let w=n[e];return w===void 0?(w={id:x.id,object:x,geometry:m,material:g,groupOrder:v,renderOrder:x.renderOrder,z:y,group:b},n[e]=w):(w.id=x.id,w.object=x,w.geometry=m,w.material=g,w.groupOrder=v,w.renderOrder=x.renderOrder,w.z=y,w.group=b),e++,w}function l(x,m,g,v,y,b){const w=c(x,m,g,v,y,b);g.transmission>0?i.push(w):g.transparent===!0?a.push(w):t.push(w)}function f(x,m,g,v,y,b){const w=c(x,m,g,v,y,b);g.transmission>0?i.unshift(w):g.transparent===!0?a.unshift(w):t.unshift(w)}function d(x,m){t.length>1&&t.sort(x||jp),i.length>1&&i.sort(m||Vo),a.length>1&&a.sort(m||Vo)}function u(){for(let x=e,m=n.length;x<m;x++){const g=n[x];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:a,init:r,push:l,unshift:f,finish:u,sort:d}}function Qp(){let n=new WeakMap;function e(i,a){const r=n.get(i);let c;return r===void 0?(c=new Wo,n.set(i,[c])):a>=r.length?(c=new Wo,r.push(c)):c=r[a],c}function t(){n=new WeakMap}return{get:e,dispose:t}}function e2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new _,color:new We};break;case"SpotLight":t={position:new _,direction:new _,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new _,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new _,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new _,halfWidth:new _,halfHeight:new _};break}return n[e.id]=t,t}}}function t2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let n2=0;function i2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function a2(n){const e=new e2,t=t2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new _);const a=new _,r=new ht,c=new ht;function l(d){let u=0,x=0,m=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let g=0,v=0,y=0,b=0,w=0,z=0,D=0,E=0,H=0,L=0,U=0;d.sort(i2);for(let C=0,T=d.length;C<T;C++){const N=d[C],K=N.color,q=N.intensity,j=N.distance,ae=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=K.r*q,x+=K.g*q,m+=K.b*q;else if(N.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(N.sh.coefficients[Q],q);U++}else if(N.isDirectionalLight){const Q=e.get(N);if(Q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const ce=N.shadow,$=t.get(N);$.shadowIntensity=ce.intensity,$.shadowBias=ce.bias,$.shadowNormalBias=ce.normalBias,$.shadowRadius=ce.radius,$.shadowMapSize=ce.mapSize,i.directionalShadow[g]=$,i.directionalShadowMap[g]=ae,i.directionalShadowMatrix[g]=N.shadow.matrix,z++}i.directional[g]=Q,g++}else if(N.isSpotLight){const Q=e.get(N);Q.position.setFromMatrixPosition(N.matrixWorld),Q.color.copy(K).multiplyScalar(q),Q.distance=j,Q.coneCos=Math.cos(N.angle),Q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Q.decay=N.decay,i.spot[y]=Q;const ce=N.shadow;if(N.map&&(i.spotLightMap[H]=N.map,H++,ce.updateMatrices(N),N.castShadow&&L++),i.spotLightMatrix[y]=ce.matrix,N.castShadow){const $=t.get(N);$.shadowIntensity=ce.intensity,$.shadowBias=ce.bias,$.shadowNormalBias=ce.normalBias,$.shadowRadius=ce.radius,$.shadowMapSize=ce.mapSize,i.spotShadow[y]=$,i.spotShadowMap[y]=ae,E++}y++}else if(N.isRectAreaLight){const Q=e.get(N);Q.color.copy(K).multiplyScalar(q),Q.halfWidth.set(N.width*.5,0,0),Q.halfHeight.set(0,N.height*.5,0),i.rectArea[b]=Q,b++}else if(N.isPointLight){const Q=e.get(N);if(Q.color.copy(N.color).multiplyScalar(N.intensity),Q.distance=N.distance,Q.decay=N.decay,N.castShadow){const ce=N.shadow,$=t.get(N);$.shadowIntensity=ce.intensity,$.shadowBias=ce.bias,$.shadowNormalBias=ce.normalBias,$.shadowRadius=ce.radius,$.shadowMapSize=ce.mapSize,$.shadowCameraNear=ce.camera.near,$.shadowCameraFar=ce.camera.far,i.pointShadow[v]=$,i.pointShadowMap[v]=ae,i.pointShadowMatrix[v]=N.shadow.matrix,D++}i.point[v]=Q,v++}else if(N.isHemisphereLight){const Q=e.get(N);Q.skyColor.copy(N.color).multiplyScalar(q),Q.groundColor.copy(N.groundColor).multiplyScalar(q),i.hemi[w]=Q,w++}}b>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=x,i.ambient[2]=m;const O=i.hash;(O.directionalLength!==g||O.pointLength!==v||O.spotLength!==y||O.rectAreaLength!==b||O.hemiLength!==w||O.numDirectionalShadows!==z||O.numPointShadows!==D||O.numSpotShadows!==E||O.numSpotMaps!==H||O.numLightProbes!==U)&&(i.directional.length=g,i.spot.length=y,i.rectArea.length=b,i.point.length=v,i.hemi.length=w,i.directionalShadow.length=z,i.directionalShadowMap.length=z,i.pointShadow.length=D,i.pointShadowMap.length=D,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=z,i.pointShadowMatrix.length=D,i.spotLightMatrix.length=E+H-L,i.spotLightMap.length=H,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=U,O.directionalLength=g,O.pointLength=v,O.spotLength=y,O.rectAreaLength=b,O.hemiLength=w,O.numDirectionalShadows=z,O.numPointShadows=D,O.numSpotShadows=E,O.numSpotMaps=H,O.numLightProbes=U,i.version=n2++)}function f(d,u){let x=0,m=0,g=0,v=0,y=0;const b=u.matrixWorldInverse;for(let w=0,z=d.length;w<z;w++){const D=d[w];if(D.isDirectionalLight){const E=i.directional[x];E.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(b),x++}else if(D.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(D.matrixWorld),E.position.applyMatrix4(b),E.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(b),g++}else if(D.isRectAreaLight){const E=i.rectArea[v];E.position.setFromMatrixPosition(D.matrixWorld),E.position.applyMatrix4(b),c.identity(),r.copy(D.matrixWorld),r.premultiply(b),c.extractRotation(r),E.halfWidth.set(D.width*.5,0,0),E.halfHeight.set(0,D.height*.5,0),E.halfWidth.applyMatrix4(c),E.halfHeight.applyMatrix4(c),v++}else if(D.isPointLight){const E=i.point[m];E.position.setFromMatrixPosition(D.matrixWorld),E.position.applyMatrix4(b),m++}else if(D.isHemisphereLight){const E=i.hemi[y];E.direction.setFromMatrixPosition(D.matrixWorld),E.direction.transformDirection(b),y++}}}return{setup:l,setupView:f,state:i}}function Xo(n){const e=new a2(n),t=[],i=[];function a(u){d.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function c(u){i.push(u)}function l(){e.setup(t)}function f(u){e.setupView(t,u)}const d={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:d,setupLights:l,setupLightsView:f,pushLight:r,pushShadow:c}}function s2(n){let e=new WeakMap;function t(a,r=0){const c=e.get(a);let l;return c===void 0?(l=new Xo(n),e.set(a,[l])):r>=c.length?(l=new Xo(n),c.push(l)):l=c[r],l}function i(){e=new WeakMap}return{get:t,dispose:i}}class r2 extends Oi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=th,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class o2 extends Oi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const c2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,d2=`uniform sampler2D shadow_pass;
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
}`;function l2(n,e,t){let i=new kr;const a=new Pe,r=new Pe,c=new gt,l=new r2({depthPacking:nh}),f=new o2,d={},u=t.maxTextureSize,x={[Fn]:Lt,[Lt]:Fn,[dn]:dn},m=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:c2,fragmentShader:d2}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const v=new Ut;v.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ot(v,m),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rc;let w=this.type;this.render=function(L,U,O){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||L.length===0)return;const C=n.getRenderTarget(),T=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),K=n.state;K.setBlending(Nn),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const q=w!==bn&&this.type===bn,j=w===bn&&this.type!==bn;for(let ae=0,Q=L.length;ae<Q;ae++){const ce=L[ae],$=ce.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;a.copy($.mapSize);const ue=$.getFrameExtents();if(a.multiply(ue),r.copy($.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(r.x=Math.floor(u/ue.x),a.x=r.x*ue.x,$.mapSize.x=r.x),a.y>u&&(r.y=Math.floor(u/ue.y),a.y=r.y*ue.y,$.mapSize.y=r.y)),$.map===null||q===!0||j===!0){const Re=this.type!==bn?{minFilter:Wt,magFilter:Wt}:{};$.map!==null&&$.map.dispose(),$.map=new ti(a.x,a.y,Re),$.map.texture.name=ce.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const we=$.getViewportCount();for(let Re=0;Re<we;Re++){const Xe=$.getViewport(Re);c.set(r.x*Xe.x,r.y*Xe.y,r.x*Xe.z,r.y*Xe.w),K.viewport(c),$.updateMatrices(ce,Re),i=$.getFrustum(),E(U,O,$.camera,ce,this.type)}$.isPointLightShadow!==!0&&this.type===bn&&z($,O),$.needsUpdate=!1}w=this.type,b.needsUpdate=!1,n.setRenderTarget(C,T,N)};function z(L,U){const O=e.update(y);m.defines.VSM_SAMPLES!==L.blurSamples&&(m.defines.VSM_SAMPLES=L.blurSamples,g.defines.VSM_SAMPLES=L.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new ti(a.x,a.y)),m.uniforms.shadow_pass.value=L.map.texture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(U,null,O,m,y,null),g.uniforms.shadow_pass.value=L.mapPass.texture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(U,null,O,g,y,null)}function D(L,U,O,C){let T=null;const N=O.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(N!==void 0)T=N;else if(T=O.isPointLight===!0?f:l,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const K=T.uuid,q=U.uuid;let j=d[K];j===void 0&&(j={},d[K]=j);let ae=j[q];ae===void 0&&(ae=T.clone(),j[q]=ae,U.addEventListener("dispose",H)),T=ae}if(T.visible=U.visible,T.wireframe=U.wireframe,C===bn?T.side=U.shadowSide!==null?U.shadowSide:U.side:T.side=U.shadowSide!==null?U.shadowSide:x[U.side],T.alphaMap=U.alphaMap,T.alphaTest=U.alphaTest,T.map=U.map,T.clipShadows=U.clipShadows,T.clippingPlanes=U.clippingPlanes,T.clipIntersection=U.clipIntersection,T.displacementMap=U.displacementMap,T.displacementScale=U.displacementScale,T.displacementBias=U.displacementBias,T.wireframeLinewidth=U.wireframeLinewidth,T.linewidth=U.linewidth,O.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const K=n.properties.get(T);K.light=O}return T}function E(L,U,O,C,T){if(L.visible===!1)return;if(L.layers.test(U.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&T===bn)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,L.matrixWorld);const q=e.update(L),j=L.material;if(Array.isArray(j)){const ae=q.groups;for(let Q=0,ce=ae.length;Q<ce;Q++){const $=ae[Q],ue=j[$.materialIndex];if(ue&&ue.visible){const we=D(L,ue,C,T);L.onBeforeShadow(n,L,U,O,q,we,$),n.renderBufferDirect(O,null,q,we,L,$),L.onAfterShadow(n,L,U,O,q,we,$)}}}else if(j.visible){const ae=D(L,j,C,T);L.onBeforeShadow(n,L,U,O,q,ae,null),n.renderBufferDirect(O,null,q,ae,L,null),L.onAfterShadow(n,L,U,O,q,ae,null)}}const K=L.children;for(let q=0,j=K.length;q<j;q++)E(K[q],U,O,C,T)}function H(L){L.target.removeEventListener("dispose",H);for(const O in d){const C=d[O],T=L.target.uuid;T in C&&(C[T].dispose(),delete C[T])}}}const h2={[Vs]:Ws,[Xs]:Ks,[qs]:Js,[Ri]:Ys,[Ws]:Vs,[Ks]:Xs,[Js]:qs,[Ys]:Ri};function u2(n,e){function t(){let F=!1;const he=new gt;let Z=null;const ie=new gt(0,0,0,0);return{setMask:function(ge){Z!==ge&&!F&&(n.colorMask(ge,ge,ge,ge),Z=ge)},setLocked:function(ge){F=ge},setClear:function(ge,me,ke,mt,yt){yt===!0&&(ge*=mt,me*=mt,ke*=mt),he.set(ge,me,ke,mt),ie.equals(he)===!1&&(n.clearColor(ge,me,ke,mt),ie.copy(he))},reset:function(){F=!1,Z=null,ie.set(-1,0,0,0)}}}function i(){let F=!1,he=!1,Z=null,ie=null,ge=null;return{setReversed:function(me){if(he!==me){const ke=e.get("EXT_clip_control");he?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT);const mt=ge;ge=null,this.setClear(mt)}he=me},getReversed:function(){return he},setTest:function(me){me?fe(n.DEPTH_TEST):Le(n.DEPTH_TEST)},setMask:function(me){Z!==me&&!F&&(n.depthMask(me),Z=me)},setFunc:function(me){if(he&&(me=h2[me]),ie!==me){switch(me){case Vs:n.depthFunc(n.NEVER);break;case Ws:n.depthFunc(n.ALWAYS);break;case Xs:n.depthFunc(n.LESS);break;case Ri:n.depthFunc(n.LEQUAL);break;case qs:n.depthFunc(n.EQUAL);break;case Ys:n.depthFunc(n.GEQUAL);break;case Ks:n.depthFunc(n.GREATER);break;case Js:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ie=me}},setLocked:function(me){F=me},setClear:function(me){ge!==me&&(he&&(me=1-me),n.clearDepth(me),ge=me)},reset:function(){F=!1,Z=null,ie=null,ge=null,he=!1}}}function a(){let F=!1,he=null,Z=null,ie=null,ge=null,me=null,ke=null,mt=null,yt=null;return{setTest:function(nt){F||(nt?fe(n.STENCIL_TEST):Le(n.STENCIL_TEST))},setMask:function(nt){he!==nt&&!F&&(n.stencilMask(nt),he=nt)},setFunc:function(nt,Bt,Kt){(Z!==nt||ie!==Bt||ge!==Kt)&&(n.stencilFunc(nt,Bt,Kt),Z=nt,ie=Bt,ge=Kt)},setOp:function(nt,Bt,Kt){(me!==nt||ke!==Bt||mt!==Kt)&&(n.stencilOp(nt,Bt,Kt),me=nt,ke=Bt,mt=Kt)},setLocked:function(nt){F=nt},setClear:function(nt){yt!==nt&&(n.clearStencil(nt),yt=nt)},reset:function(){F=!1,he=null,Z=null,ie=null,ge=null,me=null,ke=null,mt=null,yt=null}}}const r=new t,c=new i,l=new a,f=new WeakMap,d=new WeakMap;let u={},x={},m=new WeakMap,g=[],v=null,y=!1,b=null,w=null,z=null,D=null,E=null,H=null,L=null,U=new We(0,0,0),O=0,C=!1,T=null,N=null,K=null,q=null,j=null;const ae=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,ce=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec($)[1]),Q=ce>=1):$.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Q=ce>=2);let ue=null,we={};const Re=n.getParameter(n.SCISSOR_BOX),Xe=n.getParameter(n.VIEWPORT),it=new gt().fromArray(Re),te=new gt().fromArray(Xe);function de(F,he,Z,ie){const ge=new Uint8Array(4),me=n.createTexture();n.bindTexture(F,me),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ke=0;ke<Z;ke++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(he,0,n.RGBA,1,1,ie,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(he+ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return me}const Ee={};Ee[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),Ee[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ee[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),c.setClear(1),l.setClear(0),fe(n.DEPTH_TEST),c.setFunc(Ri),Ye(!1),Ke(Kr),fe(n.CULL_FACE),G(Nn);function fe(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function Le(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function Oe(F,he){return x[F]!==he?(n.bindFramebuffer(F,he),x[F]=he,F===n.DRAW_FRAMEBUFFER&&(x[n.FRAMEBUFFER]=he),F===n.FRAMEBUFFER&&(x[n.DRAW_FRAMEBUFFER]=he),!0):!1}function qe(F,he){let Z=g,ie=!1;if(F){Z=m.get(he),Z===void 0&&(Z=[],m.set(he,Z));const ge=F.textures;if(Z.length!==ge.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let me=0,ke=ge.length;me<ke;me++)Z[me]=n.COLOR_ATTACHMENT0+me;Z.length=ge.length,ie=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,ie=!0);ie&&n.drawBuffers(Z)}function ft(F){return v!==F?(n.useProgram(F),v=F,!0):!1}const Ze={[Zn]:n.FUNC_ADD,[C0]:n.FUNC_SUBTRACT,[P0]:n.FUNC_REVERSE_SUBTRACT};Ze[D0]=n.MIN,Ze[z0]=n.MAX;const xt={[I0]:n.ZERO,[L0]:n.ONE,[U0]:n.SRC_COLOR,[Hs]:n.SRC_ALPHA,[H0]:n.SRC_ALPHA_SATURATE,[k0]:n.DST_COLOR,[O0]:n.DST_ALPHA,[N0]:n.ONE_MINUS_SRC_COLOR,[Gs]:n.ONE_MINUS_SRC_ALPHA,[B0]:n.ONE_MINUS_DST_COLOR,[F0]:n.ONE_MINUS_DST_ALPHA,[G0]:n.CONSTANT_COLOR,[V0]:n.ONE_MINUS_CONSTANT_COLOR,[W0]:n.CONSTANT_ALPHA,[X0]:n.ONE_MINUS_CONSTANT_ALPHA};function G(F,he,Z,ie,ge,me,ke,mt,yt,nt){if(F===Nn){y===!0&&(Le(n.BLEND),y=!1);return}if(y===!1&&(fe(n.BLEND),y=!0),F!==R0){if(F!==b||nt!==C){if((w!==Zn||E!==Zn)&&(n.blendEquation(n.FUNC_ADD),w=Zn,E=Zn),nt)switch(F){case Ei:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jr:n.blendFunc(n.ONE,n.ONE);break;case Zr:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $r:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ei:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Zr:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $r:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}z=null,D=null,H=null,L=null,U.set(0,0,0),O=0,b=F,C=nt}return}ge=ge||he,me=me||Z,ke=ke||ie,(he!==w||ge!==E)&&(n.blendEquationSeparate(Ze[he],Ze[ge]),w=he,E=ge),(Z!==z||ie!==D||me!==H||ke!==L)&&(n.blendFuncSeparate(xt[Z],xt[ie],xt[me],xt[ke]),z=Z,D=ie,H=me,L=ke),(mt.equals(U)===!1||yt!==O)&&(n.blendColor(mt.r,mt.g,mt.b,yt),U.copy(mt),O=yt),b=F,C=!1}function Nt(F,he){F.side===dn?Le(n.CULL_FACE):fe(n.CULL_FACE);let Z=F.side===Lt;he&&(Z=!Z),Ye(Z),F.blending===Ei&&F.transparent===!1?G(Nn):G(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),c.setFunc(F.depthFunc),c.setTest(F.depthTest),c.setMask(F.depthWrite),r.setMask(F.colorWrite);const ie=F.stencilWrite;l.setTest(ie),ie&&(l.setMask(F.stencilWriteMask),l.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),l.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ct(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):Le(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(F){T!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),T=F)}function Ke(F){F!==T0?(fe(n.CULL_FACE),F!==N&&(F===Kr?n.cullFace(n.BACK):F===A0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Le(n.CULL_FACE),N=F}function ze(F){F!==K&&(Q&&n.lineWidth(F),K=F)}function ct(F,he,Z){F?(fe(n.POLYGON_OFFSET_FILL),(q!==he||j!==Z)&&(n.polygonOffset(he,Z),q=he,j=Z)):Le(n.POLYGON_OFFSET_FILL)}function De(F){F?fe(n.SCISSOR_TEST):Le(n.SCISSOR_TEST)}function I(F){F===void 0&&(F=n.TEXTURE0+ae-1),ue!==F&&(n.activeTexture(F),ue=F)}function S(F,he,Z){Z===void 0&&(ue===null?Z=n.TEXTURE0+ae-1:Z=ue);let ie=we[Z];ie===void 0&&(ie={type:void 0,texture:void 0},we[Z]=ie),(ie.type!==F||ie.texture!==he)&&(ue!==Z&&(n.activeTexture(Z),ue=Z),n.bindTexture(F,he||Ee[F]),ie.type=F,ie.texture=he)}function V(){const F=we[ue];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ne(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ee(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $e(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ue(F){it.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),it.copy(F))}function ve(F){te.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),te.copy(F))}function Je(F,he){let Z=d.get(he);Z===void 0&&(Z=new WeakMap,d.set(he,Z));let ie=Z.get(F);ie===void 0&&(ie=n.getUniformBlockIndex(he,F.name),Z.set(F,ie))}function He(F,he){const ie=d.get(he).get(F);f.get(he)!==ie&&(n.uniformBlockBinding(he,ie,F.__bindingPointIndex),f.set(he,ie))}function at(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),c.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ue=null,we={},x={},m=new WeakMap,g=[],v=null,y=!1,b=null,w=null,z=null,D=null,E=null,H=null,L=null,U=new We(0,0,0),O=0,C=!1,T=null,N=null,K=null,q=null,j=null,it.set(0,0,n.canvas.width,n.canvas.height),te.set(0,0,n.canvas.width,n.canvas.height),r.reset(),c.reset(),l.reset()}return{buffers:{color:r,depth:c,stencil:l},enable:fe,disable:Le,bindFramebuffer:Oe,drawBuffers:qe,useProgram:ft,setBlending:G,setMaterial:Nt,setFlipSided:Ye,setCullFace:Ke,setLineWidth:ze,setPolygonOffset:ct,setScissorTest:De,activeTexture:I,bindTexture:S,unbindTexture:V,compressedTexImage2D:ne,compressedTexImage3D:se,texImage2D:be,texImage3D:Ie,updateUBOMapping:Je,uniformBlockBinding:He,texStorage2D:$e,texStorage3D:re,texSubImage2D:ee,texSubImage3D:Te,compressedTexSubImage2D:pe,compressedTexSubImage3D:_e,scissor:Ue,viewport:ve,reset:at}}function qo(n,e,t,i){const a=f2(i);switch(t){case pc:return n*e;case xc:return n*e;case gc:return n*e*2;case Lr:return n*e/a.components*a.byteLength;case Ur:return n*e/a.components*a.byteLength;case wc:return n*e*2/a.components*a.byteLength;case Nr:return n*e*2/a.components*a.byteLength;case mc:return n*e*3/a.components*a.byteLength;case nn:return n*e*4/a.components*a.byteLength;case Or:return n*e*4/a.components*a.byteLength;case Wa:case Xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case qa:case Ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case tr:case ir:return Math.max(n,16)*Math.max(e,8)/4;case er:case nr:return Math.max(n,8)*Math.max(e,8)/2;case ar:case sr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case rr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case or:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cr:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case dr:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case lr:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case hr:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ur:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case fr:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case pr:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case mr:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case xr:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case gr:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case wr:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case _r:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case br:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ka:case vr:case Mr:return Math.ceil(n/4)*Math.ceil(e/4)*16;case _c:case yr:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Sr:case Er:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function f2(n){switch(n){case yn:case hc:return{byteLength:1,components:1};case ia:case uc:case sa:return{byteLength:2,components:1};case zr:case Ir:return{byteLength:2,components:4};case ei:case Dr:case hn:return{byteLength:4,components:1};case fc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function p2(n,e,t,i,a,r,c){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Pe,u=new WeakMap;let x;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(I,S){return g?new OffscreenCanvas(I,S):ja("canvas")}function y(I,S,V){let ne=1;const se=De(I);if((se.width>V||se.height>V)&&(ne=V/Math.max(se.width,se.height)),ne<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ee=Math.floor(ne*se.width),Te=Math.floor(ne*se.height);x===void 0&&(x=v(ee,Te));const pe=S?v(ee,Te):x;return pe.width=ee,pe.height=Te,pe.getContext("2d").drawImage(I,0,0,ee,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+ee+"x"+Te+")."),pe}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),I;return I}function b(I){return I.generateMipmaps}function w(I){n.generateMipmap(I)}function z(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function D(I,S,V,ne,se=!1){if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ee=S;if(S===n.RED&&(V===n.FLOAT&&(ee=n.R32F),V===n.HALF_FLOAT&&(ee=n.R16F),V===n.UNSIGNED_BYTE&&(ee=n.R8)),S===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(ee=n.R8UI),V===n.UNSIGNED_SHORT&&(ee=n.R16UI),V===n.UNSIGNED_INT&&(ee=n.R32UI),V===n.BYTE&&(ee=n.R8I),V===n.SHORT&&(ee=n.R16I),V===n.INT&&(ee=n.R32I)),S===n.RG&&(V===n.FLOAT&&(ee=n.RG32F),V===n.HALF_FLOAT&&(ee=n.RG16F),V===n.UNSIGNED_BYTE&&(ee=n.RG8)),S===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(ee=n.RG8UI),V===n.UNSIGNED_SHORT&&(ee=n.RG16UI),V===n.UNSIGNED_INT&&(ee=n.RG32UI),V===n.BYTE&&(ee=n.RG8I),V===n.SHORT&&(ee=n.RG16I),V===n.INT&&(ee=n.RG32I)),S===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(ee=n.RGB8UI),V===n.UNSIGNED_SHORT&&(ee=n.RGB16UI),V===n.UNSIGNED_INT&&(ee=n.RGB32UI),V===n.BYTE&&(ee=n.RGB8I),V===n.SHORT&&(ee=n.RGB16I),V===n.INT&&(ee=n.RGB32I)),S===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(ee=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(ee=n.RGBA16UI),V===n.UNSIGNED_INT&&(ee=n.RGBA32UI),V===n.BYTE&&(ee=n.RGBA8I),V===n.SHORT&&(ee=n.RGBA16I),V===n.INT&&(ee=n.RGBA32I)),S===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(ee=n.RGB9_E5),S===n.RGBA){const Te=se?ns:Qe.getTransfer(ne);V===n.FLOAT&&(ee=n.RGBA32F),V===n.HALF_FLOAT&&(ee=n.RGBA16F),V===n.UNSIGNED_BYTE&&(ee=Te===rt?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function E(I,S){let V;return I?S===null||S===ei||S===Di?V=n.DEPTH24_STENCIL8:S===hn?V=n.DEPTH32F_STENCIL8:S===ia&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ei||S===Di?V=n.DEPTH_COMPONENT24:S===hn?V=n.DEPTH_COMPONENT32F:S===ia&&(V=n.DEPTH_COMPONENT16),V}function H(I,S){return b(I)===!0||I.isFramebufferTexture&&I.minFilter!==Wt&&I.minFilter!==ln?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function L(I){const S=I.target;S.removeEventListener("dispose",L),O(S),S.isVideoTexture&&u.delete(S)}function U(I){const S=I.target;S.removeEventListener("dispose",U),T(S)}function O(I){const S=i.get(I);if(S.__webglInit===void 0)return;const V=I.source,ne=m.get(V);if(ne){const se=ne[S.__cacheKey];se.usedTimes--,se.usedTimes===0&&C(I),Object.keys(ne).length===0&&m.delete(V)}i.remove(I)}function C(I){const S=i.get(I);n.deleteTexture(S.__webglTexture);const V=I.source,ne=m.get(V);delete ne[S.__cacheKey],c.memory.textures--}function T(I){const S=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(S.__webglFramebuffer[ne]))for(let se=0;se<S.__webglFramebuffer[ne].length;se++)n.deleteFramebuffer(S.__webglFramebuffer[ne][se]);else n.deleteFramebuffer(S.__webglFramebuffer[ne]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[ne])}else{if(Array.isArray(S.__webglFramebuffer))for(let ne=0;ne<S.__webglFramebuffer.length;ne++)n.deleteFramebuffer(S.__webglFramebuffer[ne]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ne=0;ne<S.__webglColorRenderbuffer.length;ne++)S.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[ne]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const V=I.textures;for(let ne=0,se=V.length;ne<se;ne++){const ee=i.get(V[ne]);ee.__webglTexture&&(n.deleteTexture(ee.__webglTexture),c.memory.textures--),i.remove(V[ne])}i.remove(I)}let N=0;function K(){N=0}function q(){const I=N;return I>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+a.maxTextures),N+=1,I}function j(I){const S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function ae(I,S){const V=i.get(I);if(I.isVideoTexture&&ze(I),I.isRenderTargetTexture===!1&&I.version>0&&V.__version!==I.version){const ne=I.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(V,I,S);return}}t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+S)}function Q(I,S){const V=i.get(I);if(I.version>0&&V.__version!==I.version){te(V,I,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+S)}function ce(I,S){const V=i.get(I);if(I.version>0&&V.__version!==I.version){te(V,I,S);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+S)}function $(I,S){const V=i.get(I);if(I.version>0&&V.__version!==I.version){de(V,I,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+S)}const ue={[js]:n.REPEAT,[jn]:n.CLAMP_TO_EDGE,[Qs]:n.MIRRORED_REPEAT},we={[Wt]:n.NEAREST,[eh]:n.NEAREST_MIPMAP_NEAREST,[ga]:n.NEAREST_MIPMAP_LINEAR,[ln]:n.LINEAR,[os]:n.LINEAR_MIPMAP_NEAREST,[Qn]:n.LINEAR_MIPMAP_LINEAR},Re={[ah]:n.NEVER,[lh]:n.ALWAYS,[sh]:n.LESS,[vc]:n.LEQUAL,[rh]:n.EQUAL,[dh]:n.GEQUAL,[oh]:n.GREATER,[ch]:n.NOTEQUAL};function Xe(I,S){if(S.type===hn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===ln||S.magFilter===os||S.magFilter===ga||S.magFilter===Qn||S.minFilter===ln||S.minFilter===os||S.minFilter===ga||S.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,ue[S.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,ue[S.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,ue[S.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,we[S.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,we[S.minFilter]),S.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,Re[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Wt||S.minFilter!==ga&&S.minFilter!==Qn||S.type===hn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function it(I,S){let V=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",L));const ne=S.source;let se=m.get(ne);se===void 0&&(se={},m.set(ne,se));const ee=j(S);if(ee!==I.__cacheKey){se[ee]===void 0&&(se[ee]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,V=!0),se[ee].usedTimes++;const Te=se[I.__cacheKey];Te!==void 0&&(se[I.__cacheKey].usedTimes--,Te.usedTimes===0&&C(S)),I.__cacheKey=ee,I.__webglTexture=se[ee].texture}return V}function te(I,S,V){let ne=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ne=n.TEXTURE_3D);const se=it(I,S),ee=S.source;t.bindTexture(ne,I.__webglTexture,n.TEXTURE0+V);const Te=i.get(ee);if(ee.version!==Te.__version||se===!0){t.activeTexture(n.TEXTURE0+V);const pe=Qe.getPrimaries(Qe.workingColorSpace),_e=S.colorSpace===Un?null:Qe.getPrimaries(S.colorSpace),$e=S.colorSpace===Un||pe===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let re=y(S.image,!1,a.maxTextureSize);re=ct(S,re);const be=r.convert(S.format,S.colorSpace),Ie=r.convert(S.type);let Ue=D(S.internalFormat,be,Ie,S.colorSpace,S.isVideoTexture);Xe(ne,S);let ve;const Je=S.mipmaps,He=S.isVideoTexture!==!0,at=Te.__version===void 0||se===!0,F=ee.dataReady,he=H(S,re);if(S.isDepthTexture)Ue=E(S.format===zi,S.type),at&&(He?t.texStorage2D(n.TEXTURE_2D,1,Ue,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,Ue,re.width,re.height,0,be,Ie,null));else if(S.isDataTexture)if(Je.length>0){He&&at&&t.texStorage2D(n.TEXTURE_2D,he,Ue,Je[0].width,Je[0].height);for(let Z=0,ie=Je.length;Z<ie;Z++)ve=Je[Z],He?F&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,ve.width,ve.height,be,Ie,ve.data):t.texImage2D(n.TEXTURE_2D,Z,Ue,ve.width,ve.height,0,be,Ie,ve.data);S.generateMipmaps=!1}else He?(at&&t.texStorage2D(n.TEXTURE_2D,he,Ue,re.width,re.height),F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,re.width,re.height,be,Ie,re.data)):t.texImage2D(n.TEXTURE_2D,0,Ue,re.width,re.height,0,be,Ie,re.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){He&&at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Ue,Je[0].width,Je[0].height,re.depth);for(let Z=0,ie=Je.length;Z<ie;Z++)if(ve=Je[Z],S.format!==nn)if(be!==null)if(He){if(F)if(S.layerUpdates.size>0){const ge=qo(ve.width,ve.height,S.format,S.type);for(const me of S.layerUpdates){const ke=ve.data.subarray(me*ge/ve.data.BYTES_PER_ELEMENT,(me+1)*ge/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,me,ve.width,ve.height,1,be,ke)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,ve.width,ve.height,re.depth,be,ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,Ue,ve.width,ve.height,re.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,ve.width,ve.height,re.depth,be,Ie,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Z,Ue,ve.width,ve.height,re.depth,0,be,Ie,ve.data)}else{He&&at&&t.texStorage2D(n.TEXTURE_2D,he,Ue,Je[0].width,Je[0].height);for(let Z=0,ie=Je.length;Z<ie;Z++)ve=Je[Z],S.format!==nn?be!==null?He?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,ve.width,ve.height,be,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,Z,Ue,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?F&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,ve.width,ve.height,be,Ie,ve.data):t.texImage2D(n.TEXTURE_2D,Z,Ue,ve.width,ve.height,0,be,Ie,ve.data)}else if(S.isDataArrayTexture)if(He){if(at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Ue,re.width,re.height,re.depth),F)if(S.layerUpdates.size>0){const Z=qo(re.width,re.height,S.format,S.type);for(const ie of S.layerUpdates){const ge=re.data.subarray(ie*Z/re.data.BYTES_PER_ELEMENT,(ie+1)*Z/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ie,re.width,re.height,1,be,Ie,ge)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,be,Ie,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,re.width,re.height,re.depth,0,be,Ie,re.data);else if(S.isData3DTexture)He?(at&&t.texStorage3D(n.TEXTURE_3D,he,Ue,re.width,re.height,re.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,be,Ie,re.data)):t.texImage3D(n.TEXTURE_3D,0,Ue,re.width,re.height,re.depth,0,be,Ie,re.data);else if(S.isFramebufferTexture){if(at)if(He)t.texStorage2D(n.TEXTURE_2D,he,Ue,re.width,re.height);else{let Z=re.width,ie=re.height;for(let ge=0;ge<he;ge++)t.texImage2D(n.TEXTURE_2D,ge,Ue,Z,ie,0,be,Ie,null),Z>>=1,ie>>=1}}else if(Je.length>0){if(He&&at){const Z=De(Je[0]);t.texStorage2D(n.TEXTURE_2D,he,Ue,Z.width,Z.height)}for(let Z=0,ie=Je.length;Z<ie;Z++)ve=Je[Z],He?F&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,be,Ie,ve):t.texImage2D(n.TEXTURE_2D,Z,Ue,be,Ie,ve);S.generateMipmaps=!1}else if(He){if(at){const Z=De(re);t.texStorage2D(n.TEXTURE_2D,he,Ue,Z.width,Z.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,Ie,re)}else t.texImage2D(n.TEXTURE_2D,0,Ue,be,Ie,re);b(S)&&w(ne),Te.__version=ee.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function de(I,S,V){if(S.image.length!==6)return;const ne=it(I,S),se=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+V);const ee=i.get(se);if(se.version!==ee.__version||ne===!0){t.activeTexture(n.TEXTURE0+V);const Te=Qe.getPrimaries(Qe.workingColorSpace),pe=S.colorSpace===Un?null:Qe.getPrimaries(S.colorSpace),_e=S.colorSpace===Un||Te===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const $e=S.isCompressedTexture||S.image[0].isCompressedTexture,re=S.image[0]&&S.image[0].isDataTexture,be=[];for(let ie=0;ie<6;ie++)!$e&&!re?be[ie]=y(S.image[ie],!0,a.maxCubemapSize):be[ie]=re?S.image[ie].image:S.image[ie],be[ie]=ct(S,be[ie]);const Ie=be[0],Ue=r.convert(S.format,S.colorSpace),ve=r.convert(S.type),Je=D(S.internalFormat,Ue,ve,S.colorSpace),He=S.isVideoTexture!==!0,at=ee.__version===void 0||ne===!0,F=se.dataReady;let he=H(S,Ie);Xe(n.TEXTURE_CUBE_MAP,S);let Z;if($e){He&&at&&t.texStorage2D(n.TEXTURE_CUBE_MAP,he,Je,Ie.width,Ie.height);for(let ie=0;ie<6;ie++){Z=be[ie].mipmaps;for(let ge=0;ge<Z.length;ge++){const me=Z[ge];S.format!==nn?Ue!==null?He?F&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge,0,0,me.width,me.height,Ue,me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge,Je,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge,0,0,me.width,me.height,Ue,ve,me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge,Je,me.width,me.height,0,Ue,ve,me.data)}}}else{if(Z=S.mipmaps,He&&at){Z.length>0&&he++;const ie=De(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,he,Je,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(re){He?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,be[ie].width,be[ie].height,Ue,ve,be[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Je,be[ie].width,be[ie].height,0,Ue,ve,be[ie].data);for(let ge=0;ge<Z.length;ge++){const ke=Z[ge].image[ie].image;He?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge+1,0,0,ke.width,ke.height,Ue,ve,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge+1,Je,ke.width,ke.height,0,Ue,ve,ke.data)}}else{He?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ue,ve,be[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Je,Ue,ve,be[ie]);for(let ge=0;ge<Z.length;ge++){const me=Z[ge];He?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge+1,0,0,Ue,ve,me.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge+1,Je,Ue,ve,me.image[ie])}}}b(S)&&w(n.TEXTURE_CUBE_MAP),ee.__version=se.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function Ee(I,S,V,ne,se,ee){const Te=r.convert(V.format,V.colorSpace),pe=r.convert(V.type),_e=D(V.internalFormat,Te,pe,V.colorSpace),$e=i.get(S),re=i.get(V);if(re.__renderTarget=S,!$e.__hasExternalTextures){const be=Math.max(1,S.width>>ee),Ie=Math.max(1,S.height>>ee);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,ee,_e,be,Ie,S.depth,0,Te,pe,null):t.texImage2D(se,ee,_e,be,Ie,0,Te,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),Ke(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,se,re.__webglTexture,0,Ye(S)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,se,re.__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function fe(I,S,V){if(n.bindRenderbuffer(n.RENDERBUFFER,I),S.depthBuffer){const ne=S.depthTexture,se=ne&&ne.isDepthTexture?ne.type:null,ee=E(S.stencilBuffer,se),Te=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=Ye(S);Ke(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,ee,S.width,S.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,ee,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ee,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,I)}else{const ne=S.textures;for(let se=0;se<ne.length;se++){const ee=ne[se],Te=r.convert(ee.format,ee.colorSpace),pe=r.convert(ee.type),_e=D(ee.internalFormat,Te,pe,ee.colorSpace),$e=Ye(S);V&&Ke(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,$e,_e,S.width,S.height):Ke(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$e,_e,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,_e,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Le(I,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=i.get(S.depthTexture);ne.__renderTarget=S,(!ne.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ae(S.depthTexture,0);const se=ne.__webglTexture,ee=Ye(S);if(S.depthTexture.format===Ti)Ke(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0);else if(S.depthTexture.format===zi)Ke(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Oe(I){const S=i.get(I),V=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){const ne=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ne){const se=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ne.removeEventListener("dispose",se)};ne.addEventListener("dispose",se),S.__depthDisposeCallback=se}S.__boundDepthTexture=ne}if(I.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Le(S.__webglFramebuffer,I)}else if(V){S.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[ne]),S.__webglDepthbuffer[ne]===void 0)S.__webglDepthbuffer[ne]=n.createRenderbuffer(),fe(S.__webglDepthbuffer[ne],I,!1);else{const se=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=S.__webglDepthbuffer[ne];n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,ee)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),fe(S.__webglDepthbuffer,I,!1);else{const ne=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,se)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function qe(I,S,V){const ne=i.get(I);S!==void 0&&Ee(ne.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Oe(I)}function ft(I){const S=I.texture,V=i.get(I),ne=i.get(S);I.addEventListener("dispose",U);const se=I.textures,ee=I.isWebGLCubeRenderTarget===!0,Te=se.length>1;if(Te||(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=S.version,c.memory.textures++),ee){V.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[pe]=[];for(let _e=0;_e<S.mipmaps.length;_e++)V.__webglFramebuffer[pe][_e]=n.createFramebuffer()}else V.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let pe=0;pe<S.mipmaps.length;pe++)V.__webglFramebuffer[pe]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Te)for(let pe=0,_e=se.length;pe<_e;pe++){const $e=i.get(se[pe]);$e.__webglTexture===void 0&&($e.__webglTexture=n.createTexture(),c.memory.textures++)}if(I.samples>0&&Ke(I)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let pe=0;pe<se.length;pe++){const _e=se[pe];V.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[pe]);const $e=r.convert(_e.format,_e.colorSpace),re=r.convert(_e.type),be=D(_e.internalFormat,$e,re,_e.colorSpace,I.isXRRenderTarget===!0),Ie=Ye(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,be,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,V.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),fe(V.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),Xe(n.TEXTURE_CUBE_MAP,S);for(let pe=0;pe<6;pe++)if(S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)Ee(V.__webglFramebuffer[pe][_e],I,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,_e);else Ee(V.__webglFramebuffer[pe],I,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);b(S)&&w(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let pe=0,_e=se.length;pe<_e;pe++){const $e=se[pe],re=i.get($e);t.bindTexture(n.TEXTURE_2D,re.__webglTexture),Xe(n.TEXTURE_2D,$e),Ee(V.__webglFramebuffer,I,$e,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,0),b($e)&&w(n.TEXTURE_2D)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(pe=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,ne.__webglTexture),Xe(pe,S),S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)Ee(V.__webglFramebuffer[_e],I,S,n.COLOR_ATTACHMENT0,pe,_e);else Ee(V.__webglFramebuffer,I,S,n.COLOR_ATTACHMENT0,pe,0);b(S)&&w(pe),t.unbindTexture()}I.depthBuffer&&Oe(I)}function Ze(I){const S=I.textures;for(let V=0,ne=S.length;V<ne;V++){const se=S[V];if(b(se)){const ee=z(I),Te=i.get(se).__webglTexture;t.bindTexture(ee,Te),w(ee),t.unbindTexture()}}}const xt=[],G=[];function Nt(I){if(I.samples>0){if(Ke(I)===!1){const S=I.textures,V=I.width,ne=I.height;let se=n.COLOR_BUFFER_BIT;const ee=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(I),pe=S.length>1;if(pe)for(let _e=0;_e<S.length;_e++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let _e=0;_e<S.length;_e++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[_e]);const $e=i.get(S[_e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$e,0)}n.blitFramebuffer(0,0,V,ne,0,0,V,ne,se,n.NEAREST),f===!0&&(xt.length=0,G.length=0,xt.push(n.COLOR_ATTACHMENT0+_e),I.depthBuffer&&I.resolveDepthBuffer===!1&&(xt.push(ee),G.push(ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,G)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,xt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let _e=0;_e<S.length;_e++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,Te.__webglColorRenderbuffer[_e]);const $e=i.get(S[_e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,$e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&f){const S=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function Ye(I){return Math.min(a.maxSamples,I.samples)}function Ke(I){const S=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ze(I){const S=c.render.frame;u.get(I)!==S&&(u.set(I,S),I.update())}function ct(I,S){const V=I.colorSpace,ne=I.format,se=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||V!==Li&&V!==Un&&(Qe.getTransfer(V)===rt?(ne!==nn||se!==yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}function De(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(d.width=I.naturalWidth||I.width,d.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(d.width=I.displayWidth,d.height=I.displayHeight):(d.width=I.width,d.height=I.height),d}this.allocateTextureUnit=q,this.resetTextureUnits=K,this.setTexture2D=ae,this.setTexture2DArray=Q,this.setTexture3D=ce,this.setTextureCube=$,this.rebindTextures=qe,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Ke}function m2(n,e){function t(i,a=Un){let r;const c=Qe.getTransfer(a);if(i===yn)return n.UNSIGNED_BYTE;if(i===zr)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ir)return n.UNSIGNED_SHORT_5_5_5_1;if(i===fc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===hc)return n.BYTE;if(i===uc)return n.SHORT;if(i===ia)return n.UNSIGNED_SHORT;if(i===Dr)return n.INT;if(i===ei)return n.UNSIGNED_INT;if(i===hn)return n.FLOAT;if(i===sa)return n.HALF_FLOAT;if(i===pc)return n.ALPHA;if(i===mc)return n.RGB;if(i===nn)return n.RGBA;if(i===xc)return n.LUMINANCE;if(i===gc)return n.LUMINANCE_ALPHA;if(i===Ti)return n.DEPTH_COMPONENT;if(i===zi)return n.DEPTH_STENCIL;if(i===Lr)return n.RED;if(i===Ur)return n.RED_INTEGER;if(i===wc)return n.RG;if(i===Nr)return n.RG_INTEGER;if(i===Or)return n.RGBA_INTEGER;if(i===Wa||i===Xa||i===qa||i===Ya)if(c===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Wa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Wa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ya)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===er||i===tr||i===nr||i===ir)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===er)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===tr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===nr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ir)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ar||i===sr||i===rr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ar||i===sr)return c===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===rr)return c===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===or||i===cr||i===dr||i===lr||i===hr||i===ur||i===fr||i===pr||i===mr||i===xr||i===gr||i===wr||i===_r||i===br)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===or)return c===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cr)return c===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===dr)return c===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===lr)return c===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hr)return c===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ur)return c===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fr)return c===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===pr)return c===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===mr)return c===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xr)return c===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gr)return c===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wr)return c===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_r)return c===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===br)return c===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ka||i===vr||i===Mr)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ka)return c===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Mr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_c||i===yr||i===Sr||i===Er)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ka)return r.COMPRESSED_RED_RGTC1_EXT;if(i===yr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Sr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Er)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Di?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class x2 extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class R extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const g2={type:"move"};class Ns{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new R,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new R,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new _,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new _),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new R,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new _,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new _),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,r=null,c=null;const l=this._targetRay,f=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const y of e.hand.values()){const b=t.getJointPose(y,i),w=this._getHandJoint(d,y);b!==null&&(w.matrix.fromArray(b.transform.matrix),w.matrix.decompose(w.position,w.rotation,w.scale),w.matrixWorldNeedsUpdate=!0,w.jointRadius=b.radius),w.visible=b!==null}const u=d.joints["index-finger-tip"],x=d.joints["thumb-tip"],m=u.position.distanceTo(x.position),g=.02,v=.005;d.inputState.pinching&&m>g+v?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&m<=g-v&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(f.matrix.fromArray(r.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,r.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(r.linearVelocity)):f.hasLinearVelocity=!1,r.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(r.angularVelocity)):f.hasAngularVelocity=!1));l!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(g2)))}return l!==null&&(l.visible=a!==null),f!==null&&(f.visible=r!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new R;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const w2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_2=`
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

}`;class b2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const a=new Ct,r=e.properties.get(a);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Sn({vertexShader:w2,fragmentShader:_2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ot(new Fi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class v2 extends Ui{constructor(e,t){super();const i=this;let a=null,r=1,c=null,l="local-floor",f=1,d=null,u=null,x=null,m=null,g=null,v=null;const y=new b2,b=t.getContextAttributes();let w=null,z=null;const D=[],E=[],H=new Pe;let L=null;const U=new en;U.viewport=new gt;const O=new en;O.viewport=new gt;const C=[U,O],T=new x2;let N=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let de=D[te];return de===void 0&&(de=new Ns,D[te]=de),de.getTargetRaySpace()},this.getControllerGrip=function(te){let de=D[te];return de===void 0&&(de=new Ns,D[te]=de),de.getGripSpace()},this.getHand=function(te){let de=D[te];return de===void 0&&(de=new Ns,D[te]=de),de.getHandSpace()};function q(te){const de=E.indexOf(te.inputSource);if(de===-1)return;const Ee=D[de];Ee!==void 0&&(Ee.update(te.inputSource,te.frame,d||c),Ee.dispatchEvent({type:te.type,data:te.inputSource}))}function j(){a.removeEventListener("select",q),a.removeEventListener("selectstart",q),a.removeEventListener("selectend",q),a.removeEventListener("squeeze",q),a.removeEventListener("squeezestart",q),a.removeEventListener("squeezeend",q),a.removeEventListener("end",j),a.removeEventListener("inputsourceschange",ae);for(let te=0;te<D.length;te++){const de=E[te];de!==null&&(E[te]=null,D[te].disconnect(de))}N=null,K=null,y.reset(),e.setRenderTarget(w),g=null,m=null,x=null,a=null,z=null,it.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(H.width,H.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){l=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(te){d=te},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return x},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=async function(te){if(a=te,a!==null){if(w=e.getRenderTarget(),a.addEventListener("select",q),a.addEventListener("selectstart",q),a.addEventListener("selectend",q),a.addEventListener("squeeze",q),a.addEventListener("squeezestart",q),a.addEventListener("squeezeend",q),a.addEventListener("end",j),a.addEventListener("inputsourceschange",ae),b.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(H),a.renderState.layers===void 0){const de={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(a,t,de),a.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),z=new ti(g.framebufferWidth,g.framebufferHeight,{format:nn,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil})}else{let de=null,Ee=null,fe=null;b.depth&&(fe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=b.stencil?zi:Ti,Ee=b.stencil?Di:ei);const Le={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};x=new XRWebGLBinding(a,t),m=x.createProjectionLayer(Le),a.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),z=new ti(m.textureWidth,m.textureHeight,{format:nn,type:yn,depthTexture:new Uc(m.textureWidth,m.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(f),d=null,c=await a.requestReferenceSpace(l),it.setContext(a),it.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ae(te){for(let de=0;de<te.removed.length;de++){const Ee=te.removed[de],fe=E.indexOf(Ee);fe>=0&&(E[fe]=null,D[fe].disconnect(Ee))}for(let de=0;de<te.added.length;de++){const Ee=te.added[de];let fe=E.indexOf(Ee);if(fe===-1){for(let Oe=0;Oe<D.length;Oe++)if(Oe>=E.length){E.push(Ee),fe=Oe;break}else if(E[Oe]===null){E[Oe]=Ee,fe=Oe;break}if(fe===-1)break}const Le=D[fe];Le&&Le.connect(Ee)}}const Q=new _,ce=new _;function $(te,de,Ee){Q.setFromMatrixPosition(de.matrixWorld),ce.setFromMatrixPosition(Ee.matrixWorld);const fe=Q.distanceTo(ce),Le=de.projectionMatrix.elements,Oe=Ee.projectionMatrix.elements,qe=Le[14]/(Le[10]-1),ft=Le[14]/(Le[10]+1),Ze=(Le[9]+1)/Le[5],xt=(Le[9]-1)/Le[5],G=(Le[8]-1)/Le[0],Nt=(Oe[8]+1)/Oe[0],Ye=qe*G,Ke=qe*Nt,ze=fe/(-G+Nt),ct=ze*-G;if(de.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(ct),te.translateZ(ze),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Le[10]===-1)te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const De=qe+ze,I=ft+ze,S=Ye-ct,V=Ke+(fe-ct),ne=Ze*ft/I*De,se=xt*ft/I*De;te.projectionMatrix.makePerspective(S,V,ne,se,De,I),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function ue(te,de){de===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(de.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(a===null)return;let de=te.near,Ee=te.far;y.texture!==null&&(y.depthNear>0&&(de=y.depthNear),y.depthFar>0&&(Ee=y.depthFar)),T.near=O.near=U.near=de,T.far=O.far=U.far=Ee,(N!==T.near||K!==T.far)&&(a.updateRenderState({depthNear:T.near,depthFar:T.far}),N=T.near,K=T.far),U.layers.mask=te.layers.mask|2,O.layers.mask=te.layers.mask|4,T.layers.mask=U.layers.mask|O.layers.mask;const fe=te.parent,Le=T.cameras;ue(T,fe);for(let Oe=0;Oe<Le.length;Oe++)ue(Le[Oe],fe);Le.length===2?$(T,U,O):T.projectionMatrix.copy(U.projectionMatrix),we(te,T,fe)};function we(te,de,Ee){Ee===null?te.matrix.copy(de.matrixWorld):(te.matrix.copy(Ee.matrixWorld),te.matrix.invert(),te.matrix.multiply(de.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Tr*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(m===null&&g===null))return f},this.setFoveation=function(te){f=te,m!==null&&(m.fixedFoveation=te),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=te)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(T)};let Re=null;function Xe(te,de){if(u=de.getViewerPose(d||c),v=de,u!==null){const Ee=u.views;g!==null&&(e.setRenderTargetFramebuffer(z,g.framebuffer),e.setRenderTarget(z));let fe=!1;Ee.length!==T.cameras.length&&(T.cameras.length=0,fe=!0);for(let Oe=0;Oe<Ee.length;Oe++){const qe=Ee[Oe];let ft=null;if(g!==null)ft=g.getViewport(qe);else{const xt=x.getViewSubImage(m,qe);ft=xt.viewport,Oe===0&&(e.setRenderTargetTextures(z,xt.colorTexture,m.ignoreDepthValues?void 0:xt.depthStencilTexture),e.setRenderTarget(z))}let Ze=C[Oe];Ze===void 0&&(Ze=new en,Ze.layers.enable(Oe),Ze.viewport=new gt,C[Oe]=Ze),Ze.matrix.fromArray(qe.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(qe.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(ft.x,ft.y,ft.width,ft.height),Oe===0&&(T.matrix.copy(Ze.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),fe===!0&&T.cameras.push(Ze)}const Le=a.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const Oe=x.getDepthInformation(Ee[0]);Oe&&Oe.isValid&&Oe.texture&&y.init(e,Oe,a.renderState)}}for(let Ee=0;Ee<D.length;Ee++){const fe=E[Ee],Le=D[Ee];fe!==null&&Le!==void 0&&Le.update(fe,de,d||c)}Re&&Re(te,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),v=null}const it=new Ic;it.setAnimationLoop(Xe),this.setAnimationLoop=function(te){Re=te},this.dispose=function(){}}}const qn=new fn,M2=new ht;function y2(n,e){function t(b,w){b.matrixAutoUpdate===!0&&b.updateMatrix(),w.value.copy(b.matrix)}function i(b,w){w.color.getRGB(b.fogColor.value,Pc(n)),w.isFog?(b.fogNear.value=w.near,b.fogFar.value=w.far):w.isFogExp2&&(b.fogDensity.value=w.density)}function a(b,w,z,D,E){w.isMeshBasicMaterial||w.isMeshLambertMaterial?r(b,w):w.isMeshToonMaterial?(r(b,w),x(b,w)):w.isMeshPhongMaterial?(r(b,w),u(b,w)):w.isMeshStandardMaterial?(r(b,w),m(b,w),w.isMeshPhysicalMaterial&&g(b,w,E)):w.isMeshMatcapMaterial?(r(b,w),v(b,w)):w.isMeshDepthMaterial?r(b,w):w.isMeshDistanceMaterial?(r(b,w),y(b,w)):w.isMeshNormalMaterial?r(b,w):w.isLineBasicMaterial?(c(b,w),w.isLineDashedMaterial&&l(b,w)):w.isPointsMaterial?f(b,w,z,D):w.isSpriteMaterial?d(b,w):w.isShadowMaterial?(b.color.value.copy(w.color),b.opacity.value=w.opacity):w.isShaderMaterial&&(w.uniformsNeedUpdate=!1)}function r(b,w){b.opacity.value=w.opacity,w.color&&b.diffuse.value.copy(w.color),w.emissive&&b.emissive.value.copy(w.emissive).multiplyScalar(w.emissiveIntensity),w.map&&(b.map.value=w.map,t(w.map,b.mapTransform)),w.alphaMap&&(b.alphaMap.value=w.alphaMap,t(w.alphaMap,b.alphaMapTransform)),w.bumpMap&&(b.bumpMap.value=w.bumpMap,t(w.bumpMap,b.bumpMapTransform),b.bumpScale.value=w.bumpScale,w.side===Lt&&(b.bumpScale.value*=-1)),w.normalMap&&(b.normalMap.value=w.normalMap,t(w.normalMap,b.normalMapTransform),b.normalScale.value.copy(w.normalScale),w.side===Lt&&b.normalScale.value.negate()),w.displacementMap&&(b.displacementMap.value=w.displacementMap,t(w.displacementMap,b.displacementMapTransform),b.displacementScale.value=w.displacementScale,b.displacementBias.value=w.displacementBias),w.emissiveMap&&(b.emissiveMap.value=w.emissiveMap,t(w.emissiveMap,b.emissiveMapTransform)),w.specularMap&&(b.specularMap.value=w.specularMap,t(w.specularMap,b.specularMapTransform)),w.alphaTest>0&&(b.alphaTest.value=w.alphaTest);const z=e.get(w),D=z.envMap,E=z.envMapRotation;D&&(b.envMap.value=D,qn.copy(E),qn.x*=-1,qn.y*=-1,qn.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),b.envMapRotation.value.setFromMatrix4(M2.makeRotationFromEuler(qn)),b.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=w.reflectivity,b.ior.value=w.ior,b.refractionRatio.value=w.refractionRatio),w.lightMap&&(b.lightMap.value=w.lightMap,b.lightMapIntensity.value=w.lightMapIntensity,t(w.lightMap,b.lightMapTransform)),w.aoMap&&(b.aoMap.value=w.aoMap,b.aoMapIntensity.value=w.aoMapIntensity,t(w.aoMap,b.aoMapTransform))}function c(b,w){b.diffuse.value.copy(w.color),b.opacity.value=w.opacity,w.map&&(b.map.value=w.map,t(w.map,b.mapTransform))}function l(b,w){b.dashSize.value=w.dashSize,b.totalSize.value=w.dashSize+w.gapSize,b.scale.value=w.scale}function f(b,w,z,D){b.diffuse.value.copy(w.color),b.opacity.value=w.opacity,b.size.value=w.size*z,b.scale.value=D*.5,w.map&&(b.map.value=w.map,t(w.map,b.uvTransform)),w.alphaMap&&(b.alphaMap.value=w.alphaMap,t(w.alphaMap,b.alphaMapTransform)),w.alphaTest>0&&(b.alphaTest.value=w.alphaTest)}function d(b,w){b.diffuse.value.copy(w.color),b.opacity.value=w.opacity,b.rotation.value=w.rotation,w.map&&(b.map.value=w.map,t(w.map,b.mapTransform)),w.alphaMap&&(b.alphaMap.value=w.alphaMap,t(w.alphaMap,b.alphaMapTransform)),w.alphaTest>0&&(b.alphaTest.value=w.alphaTest)}function u(b,w){b.specular.value.copy(w.specular),b.shininess.value=Math.max(w.shininess,1e-4)}function x(b,w){w.gradientMap&&(b.gradientMap.value=w.gradientMap)}function m(b,w){b.metalness.value=w.metalness,w.metalnessMap&&(b.metalnessMap.value=w.metalnessMap,t(w.metalnessMap,b.metalnessMapTransform)),b.roughness.value=w.roughness,w.roughnessMap&&(b.roughnessMap.value=w.roughnessMap,t(w.roughnessMap,b.roughnessMapTransform)),w.envMap&&(b.envMapIntensity.value=w.envMapIntensity)}function g(b,w,z){b.ior.value=w.ior,w.sheen>0&&(b.sheenColor.value.copy(w.sheenColor).multiplyScalar(w.sheen),b.sheenRoughness.value=w.sheenRoughness,w.sheenColorMap&&(b.sheenColorMap.value=w.sheenColorMap,t(w.sheenColorMap,b.sheenColorMapTransform)),w.sheenRoughnessMap&&(b.sheenRoughnessMap.value=w.sheenRoughnessMap,t(w.sheenRoughnessMap,b.sheenRoughnessMapTransform))),w.clearcoat>0&&(b.clearcoat.value=w.clearcoat,b.clearcoatRoughness.value=w.clearcoatRoughness,w.clearcoatMap&&(b.clearcoatMap.value=w.clearcoatMap,t(w.clearcoatMap,b.clearcoatMapTransform)),w.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=w.clearcoatRoughnessMap,t(w.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),w.clearcoatNormalMap&&(b.clearcoatNormalMap.value=w.clearcoatNormalMap,t(w.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(w.clearcoatNormalScale),w.side===Lt&&b.clearcoatNormalScale.value.negate())),w.dispersion>0&&(b.dispersion.value=w.dispersion),w.iridescence>0&&(b.iridescence.value=w.iridescence,b.iridescenceIOR.value=w.iridescenceIOR,b.iridescenceThicknessMinimum.value=w.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=w.iridescenceThicknessRange[1],w.iridescenceMap&&(b.iridescenceMap.value=w.iridescenceMap,t(w.iridescenceMap,b.iridescenceMapTransform)),w.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=w.iridescenceThicknessMap,t(w.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),w.transmission>0&&(b.transmission.value=w.transmission,b.transmissionSamplerMap.value=z.texture,b.transmissionSamplerSize.value.set(z.width,z.height),w.transmissionMap&&(b.transmissionMap.value=w.transmissionMap,t(w.transmissionMap,b.transmissionMapTransform)),b.thickness.value=w.thickness,w.thicknessMap&&(b.thicknessMap.value=w.thicknessMap,t(w.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=w.attenuationDistance,b.attenuationColor.value.copy(w.attenuationColor)),w.anisotropy>0&&(b.anisotropyVector.value.set(w.anisotropy*Math.cos(w.anisotropyRotation),w.anisotropy*Math.sin(w.anisotropyRotation)),w.anisotropyMap&&(b.anisotropyMap.value=w.anisotropyMap,t(w.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=w.specularIntensity,b.specularColor.value.copy(w.specularColor),w.specularColorMap&&(b.specularColorMap.value=w.specularColorMap,t(w.specularColorMap,b.specularColorMapTransform)),w.specularIntensityMap&&(b.specularIntensityMap.value=w.specularIntensityMap,t(w.specularIntensityMap,b.specularIntensityMapTransform))}function v(b,w){w.matcap&&(b.matcap.value=w.matcap)}function y(b,w){const z=e.get(w).light;b.referencePosition.value.setFromMatrixPosition(z.matrixWorld),b.nearDistance.value=z.shadow.camera.near,b.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function S2(n,e,t,i){let a={},r={},c=[];const l=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function f(z,D){const E=D.program;i.uniformBlockBinding(z,E)}function d(z,D){let E=a[z.id];E===void 0&&(v(z),E=u(z),a[z.id]=E,z.addEventListener("dispose",b));const H=D.program;i.updateUBOMapping(z,H);const L=e.render.frame;r[z.id]!==L&&(m(z),r[z.id]=L)}function u(z){const D=x();z.__bindingPointIndex=D;const E=n.createBuffer(),H=z.__size,L=z.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,H,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,D,E),E}function x(){for(let z=0;z<l;z++)if(c.indexOf(z)===-1)return c.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(z){const D=a[z.id],E=z.uniforms,H=z.__cache;n.bindBuffer(n.UNIFORM_BUFFER,D);for(let L=0,U=E.length;L<U;L++){const O=Array.isArray(E[L])?E[L]:[E[L]];for(let C=0,T=O.length;C<T;C++){const N=O[C];if(g(N,L,C,H)===!0){const K=N.__offset,q=Array.isArray(N.value)?N.value:[N.value];let j=0;for(let ae=0;ae<q.length;ae++){const Q=q[ae],ce=y(Q);typeof Q=="number"||typeof Q=="boolean"?(N.__data[0]=Q,n.bufferSubData(n.UNIFORM_BUFFER,K+j,N.__data)):Q.isMatrix3?(N.__data[0]=Q.elements[0],N.__data[1]=Q.elements[1],N.__data[2]=Q.elements[2],N.__data[3]=0,N.__data[4]=Q.elements[3],N.__data[5]=Q.elements[4],N.__data[6]=Q.elements[5],N.__data[7]=0,N.__data[8]=Q.elements[6],N.__data[9]=Q.elements[7],N.__data[10]=Q.elements[8],N.__data[11]=0):(Q.toArray(N.__data,j),j+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,K,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(z,D,E,H){const L=z.value,U=D+"_"+E;if(H[U]===void 0)return typeof L=="number"||typeof L=="boolean"?H[U]=L:H[U]=L.clone(),!0;{const O=H[U];if(typeof L=="number"||typeof L=="boolean"){if(O!==L)return H[U]=L,!0}else if(O.equals(L)===!1)return O.copy(L),!0}return!1}function v(z){const D=z.uniforms;let E=0;const H=16;for(let U=0,O=D.length;U<O;U++){const C=Array.isArray(D[U])?D[U]:[D[U]];for(let T=0,N=C.length;T<N;T++){const K=C[T],q=Array.isArray(K.value)?K.value:[K.value];for(let j=0,ae=q.length;j<ae;j++){const Q=q[j],ce=y(Q),$=E%H,ue=$%ce.boundary,we=$+ue;E+=ue,we!==0&&H-we<ce.storage&&(E+=H-we),K.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=E,E+=ce.storage}}}const L=E%H;return L>0&&(E+=H-L),z.__size=E,z.__cache={},this}function y(z){const D={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(D.boundary=4,D.storage=4):z.isVector2?(D.boundary=8,D.storage=8):z.isVector3||z.isColor?(D.boundary=16,D.storage=12):z.isVector4?(D.boundary=16,D.storage=16):z.isMatrix3?(D.boundary=48,D.storage=48):z.isMatrix4?(D.boundary=64,D.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),D}function b(z){const D=z.target;D.removeEventListener("dispose",b);const E=c.indexOf(D.__bindingPointIndex);c.splice(E,1),n.deleteBuffer(a[D.id]),delete a[D.id],delete r[D.id]}function w(){for(const z in a)n.deleteBuffer(a[z]);c=[],a={},r={}}return{bind:f,update:d,dispose:w}}class E2{constructor(e={}){const{canvas:t=uh(),context:i=null,depth:a=!0,stencil:r=!1,alpha:c=!1,antialias:l=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:m=!1}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=c;const v=new Uint32Array(4),y=new Int32Array(4);let b=null,w=null;const z=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kt,this.toneMapping=On,this.toneMappingExposure=1;const E=this;let H=!1,L=0,U=0,O=null,C=-1,T=null;const N=new gt,K=new gt;let q=null;const j=new We(0);let ae=0,Q=t.width,ce=t.height,$=1,ue=null,we=null;const Re=new gt(0,0,Q,ce),Xe=new gt(0,0,Q,ce);let it=!1;const te=new kr;let de=!1,Ee=!1;const fe=new ht,Le=new ht,Oe=new _,qe=new gt,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function xt(){return O===null?$:1}let G=i;function Nt(A,k){return t.getContext(A,k)}try{const A={alpha:!0,depth:a,stencil:r,antialias:l,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:u,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pr}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",me,!1),G===null){const k="webgl2";if(G=Nt(k,A),G===null)throw Nt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ye,Ke,ze,ct,De,I,S,V,ne,se,ee,Te,pe,_e,$e,re,be,Ie,Ue,ve,Je,He,at,F;function he(){Ye=new Pf(G),Ye.init(),He=new m2(G,Ye),Ke=new Sf(G,Ye,e,He),ze=new u2(G,Ye),Ke.reverseDepthBuffer&&m&&ze.buffers.depth.setReversed(!0),ct=new If(G),De=new $p,I=new p2(G,Ye,ze,De,Ke,He,ct),S=new Tf(E),V=new Cf(E),ne=new kh(G),at=new Mf(G,ne),se=new Df(G,ne,ct,at),ee=new Uf(G,se,ne,ct),Ue=new Lf(G,Ke,I),re=new Ef(De),Te=new Zp(E,S,V,Ye,Ke,at,re),pe=new y2(E,De),_e=new Qp,$e=new s2(Ye),Ie=new vf(E,S,V,ze,ee,g,f),be=new l2(E,ee,Ke),F=new S2(G,ct,Ke,ze),ve=new yf(G,Ye,ct),Je=new zf(G,Ye,ct),ct.programs=Te.programs,E.capabilities=Ke,E.extensions=Ye,E.properties=De,E.renderLists=_e,E.shadowMap=be,E.state=ze,E.info=ct}he();const Z=new v2(E,G);this.xr=Z,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=Ye.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ye.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(A){A!==void 0&&($=A,this.setSize(Q,ce,!1))},this.getSize=function(A){return A.set(Q,ce)},this.setSize=function(A,k,W=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=A,ce=k,t.width=Math.floor(A*$),t.height=Math.floor(k*$),W===!0&&(t.style.width=A+"px",t.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(Q*$,ce*$).floor()},this.setDrawingBufferSize=function(A,k,W){Q=A,ce=k,$=W,t.width=Math.floor(A*W),t.height=Math.floor(k*W),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(N)},this.getViewport=function(A){return A.copy(Re)},this.setViewport=function(A,k,W,X){A.isVector4?Re.set(A.x,A.y,A.z,A.w):Re.set(A,k,W,X),ze.viewport(N.copy(Re).multiplyScalar($).round())},this.getScissor=function(A){return A.copy(Xe)},this.setScissor=function(A,k,W,X){A.isVector4?Xe.set(A.x,A.y,A.z,A.w):Xe.set(A,k,W,X),ze.scissor(K.copy(Xe).multiplyScalar($).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(A){ze.setScissorTest(it=A)},this.setOpaqueSort=function(A){ue=A},this.setTransparentSort=function(A){we=A},this.getClearColor=function(A){return A.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(A=!0,k=!0,W=!0){let X=0;if(A){let B=!1;if(O!==null){const oe=O.texture.format;B=oe===Or||oe===Nr||oe===Ur}if(B){const oe=O.texture.type,xe=oe===yn||oe===ei||oe===ia||oe===Di||oe===zr||oe===Ir,Me=Ie.getClearColor(),ye=Ie.getClearAlpha(),Ne=Me.r,Be=Me.g,Se=Me.b;xe?(v[0]=Ne,v[1]=Be,v[2]=Se,v[3]=ye,G.clearBufferuiv(G.COLOR,0,v)):(y[0]=Ne,y[1]=Be,y[2]=Se,y[3]=ye,G.clearBufferiv(G.COLOR,0,y))}else X|=G.COLOR_BUFFER_BIT}k&&(X|=G.DEPTH_BUFFER_BIT),W&&(X|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",me,!1),_e.dispose(),$e.dispose(),De.dispose(),S.dispose(),V.dispose(),ee.dispose(),at.dispose(),F.dispose(),Te.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",da),Z.removeEventListener("sessionend",la),pn.stop()};function ie(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const A=ct.autoReset,k=be.enabled,W=be.autoUpdate,X=be.needsUpdate,B=be.type;he(),ct.autoReset=A,be.enabled=k,be.autoUpdate=W,be.needsUpdate=X,be.type=B}function me(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ke(A){const k=A.target;k.removeEventListener("dispose",ke),mt(k)}function mt(A){yt(A),De.remove(A)}function yt(A){const k=De.get(A).programs;k!==void 0&&(k.forEach(function(W){Te.releaseProgram(W)}),A.isShaderMaterial&&Te.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,W,X,B,oe){k===null&&(k=ft);const xe=B.isMesh&&B.matrixWorld.determinant()<0,Me=as(A,k,W,X,B);ze.setMaterial(X,xe);let ye=W.index,Ne=1;if(X.wireframe===!0){if(ye=se.getWireframeAttribute(W),ye===void 0)return;Ne=2}const Be=W.drawRange,Se=W.attributes.position;let je=Be.start*Ne,st=(Be.start+Be.count)*Ne;oe!==null&&(je=Math.max(je,oe.start*Ne),st=Math.min(st,(oe.start+oe.count)*Ne)),ye!==null?(je=Math.max(je,0),st=Math.min(st,ye.count)):Se!=null&&(je=Math.max(je,0),st=Math.min(st,Se.count));const dt=st-je;if(dt<0||dt===1/0)return;at.setup(B,X,Me,W,ye);let Et,et=ve;if(ye!==null&&(Et=ne.get(ye),et=Je,et.setIndex(Et)),B.isMesh)X.wireframe===!0?(ze.setLineWidth(X.wireframeLinewidth*xt()),et.setMode(G.LINES)):et.setMode(G.TRIANGLES);else if(B.isLine){let Ae=X.linewidth;Ae===void 0&&(Ae=1),ze.setLineWidth(Ae*xt()),B.isLineSegments?et.setMode(G.LINES):B.isLineLoop?et.setMode(G.LINE_LOOP):et.setMode(G.LINE_STRIP)}else B.isPoints?et.setMode(G.POINTS):B.isSprite&&et.setMode(G.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)et.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))et.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ae=B._multiDrawStarts,Jt=B._multiDrawCounts,tt=B._multiDrawCount,Ht=ye?ne.get(ye).bytesPerElement:1,Tn=De.get(X).currentProgram.getUniforms();for(let Dt=0;Dt<tt;Dt++)Tn.setValue(G,"_gl_DrawID",Dt),et.render(Ae[Dt]/Ht,Jt[Dt])}else if(B.isInstancedMesh)et.renderInstances(je,dt,B.count);else if(W.isInstancedBufferGeometry){const Ae=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Jt=Math.min(W.instanceCount,Ae);et.renderInstances(je,dt,Jt)}else et.render(je,dt)};function nt(A,k,W){A.transparent===!0&&A.side===dn&&A.forceSinglePass===!1?(A.side=Lt,A.needsUpdate=!0,ri(A,k,W),A.side=Fn,A.needsUpdate=!0,ri(A,k,W),A.side=dn):ri(A,k,W)}this.compile=function(A,k,W=null){W===null&&(W=A),w=$e.get(W),w.init(k),D.push(w),W.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(w.pushLight(B),B.castShadow&&w.pushShadow(B))}),A!==W&&A.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(w.pushLight(B),B.castShadow&&w.pushShadow(B))}),w.setupLights();const X=new Set;return A.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const oe=B.material;if(oe)if(Array.isArray(oe))for(let xe=0;xe<oe.length;xe++){const Me=oe[xe];nt(Me,W,B),X.add(Me)}else nt(oe,W,B),X.add(oe)}),D.pop(),w=null,X},this.compileAsync=function(A,k,W=null){const X=this.compile(A,k,W);return new Promise(B=>{function oe(){if(X.forEach(function(xe){De.get(xe).currentProgram.isReady()&&X.delete(xe)}),X.size===0){B(A);return}setTimeout(oe,10)}Ye.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Bt=null;function Kt(A){Bt&&Bt(A)}function da(){pn.stop()}function la(){pn.start()}const pn=new Ic;pn.setAnimationLoop(Kt),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(A){Bt=A,Z.setAnimationLoop(A),A===null?pn.stop():pn.start()},Z.addEventListener("sessionstart",da),Z.addEventListener("sessionend",la),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(k),k=Z.getCamera()),A.isScene===!0&&A.onBeforeRender(E,A,k,O),w=$e.get(A,D.length),w.init(k),D.push(w),Le.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),te.setFromProjectionMatrix(Le),Ee=this.localClippingEnabled,de=re.init(this.clippingPlanes,Ee),b=_e.get(A,z.length),b.init(),z.push(b),Z.enabled===!0&&Z.isPresenting===!0){const oe=E.xr.getDepthSensingMesh();oe!==null&&Hi(oe,k,-1/0,E.sortObjects)}Hi(A,k,0,E.sortObjects),b.finish(),E.sortObjects===!0&&b.sort(ue,we),Ze=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Ze&&Ie.addToRenderList(b,A),this.info.render.frame++,de===!0&&re.beginShadows();const W=w.state.shadowsArray;be.render(W,A,k),de===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=b.opaque,B=b.transmissive;if(w.setupLights(),k.isArrayCamera){const oe=k.cameras;if(B.length>0)for(let xe=0,Me=oe.length;xe<Me;xe++){const ye=oe[xe];ua(X,B,A,ye)}Ze&&Ie.render(A);for(let xe=0,Me=oe.length;xe<Me;xe++){const ye=oe[xe];ha(b,A,ye,ye.viewport)}}else B.length>0&&ua(X,B,A,k),Ze&&Ie.render(A),ha(b,A,k);O!==null&&(I.updateMultisampleRenderTarget(O),I.updateRenderTargetMipmap(O)),A.isScene===!0&&A.onAfterRender(E,A,k),at.resetDefaultState(),C=-1,T=null,D.pop(),D.length>0?(w=D[D.length-1],de===!0&&re.setGlobalState(E.clippingPlanes,w.state.camera)):w=null,z.pop(),z.length>0?b=z[z.length-1]:b=null};function Hi(A,k,W,X){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)w.pushLight(A),A.castShadow&&w.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||te.intersectsSprite(A)){X&&qe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Le);const xe=ee.update(A),Me=A.material;Me.visible&&b.push(A,xe,Me,W,qe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||te.intersectsObject(A))){const xe=ee.update(A),Me=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),qe.copy(A.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),qe.copy(xe.boundingSphere.center)),qe.applyMatrix4(A.matrixWorld).applyMatrix4(Le)),Array.isArray(Me)){const ye=xe.groups;for(let Ne=0,Be=ye.length;Ne<Be;Ne++){const Se=ye[Ne],je=Me[Se.materialIndex];je&&je.visible&&b.push(A,xe,je,W,qe.z,Se)}}else Me.visible&&b.push(A,xe,Me,W,qe.z,null)}}const oe=A.children;for(let xe=0,Me=oe.length;xe<Me;xe++)Hi(oe[xe],k,W,X)}function ha(A,k,W,X){const B=A.opaque,oe=A.transmissive,xe=A.transparent;w.setupLightsView(W),de===!0&&re.setGlobalState(E.clippingPlanes,W),X&&ze.viewport(N.copy(X)),B.length>0&&si(B,k,W),oe.length>0&&si(oe,k,W),xe.length>0&&si(xe,k,W),ze.buffers.depth.setTest(!0),ze.buffers.depth.setMask(!0),ze.buffers.color.setMask(!0),ze.setPolygonOffset(!1)}function ua(A,k,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;w.state.transmissionRenderTarget[X.id]===void 0&&(w.state.transmissionRenderTarget[X.id]=new ti(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?sa:yn,minFilter:Qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const oe=w.state.transmissionRenderTarget[X.id],xe=X.viewport||N;oe.setSize(xe.z,xe.w);const Me=E.getRenderTarget();E.setRenderTarget(oe),E.getClearColor(j),ae=E.getClearAlpha(),ae<1&&E.setClearColor(16777215,.5),E.clear(),Ze&&Ie.render(W);const ye=E.toneMapping;E.toneMapping=On;const Ne=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),w.setupLightsView(X),de===!0&&re.setGlobalState(E.clippingPlanes,X),si(A,W,X),I.updateMultisampleRenderTarget(oe),I.updateRenderTargetMipmap(oe),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Se=0,je=k.length;Se<je;Se++){const st=k[Se],dt=st.object,Et=st.geometry,et=st.material,Ae=st.group;if(et.side===dn&&dt.layers.test(X.layers)){const Jt=et.side;et.side=Lt,et.needsUpdate=!0,fa(dt,W,X,Et,et,Ae),et.side=Jt,et.needsUpdate=!0,Be=!0}}Be===!0&&(I.updateMultisampleRenderTarget(oe),I.updateRenderTargetMipmap(oe))}E.setRenderTarget(Me),E.setClearColor(j,ae),Ne!==void 0&&(X.viewport=Ne),E.toneMapping=ye}function si(A,k,W){const X=k.isScene===!0?k.overrideMaterial:null;for(let B=0,oe=A.length;B<oe;B++){const xe=A[B],Me=xe.object,ye=xe.geometry,Ne=X===null?xe.material:X,Be=xe.group;Me.layers.test(W.layers)&&fa(Me,k,W,ye,Ne,Be)}}function fa(A,k,W,X,B,oe){A.onBeforeRender(E,k,W,X,B,oe),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),B.onBeforeRender(E,k,W,X,A,oe),B.transparent===!0&&B.side===dn&&B.forceSinglePass===!1?(B.side=Lt,B.needsUpdate=!0,E.renderBufferDirect(W,k,X,B,A,oe),B.side=Fn,B.needsUpdate=!0,E.renderBufferDirect(W,k,X,B,A,oe),B.side=dn):E.renderBufferDirect(W,k,X,B,A,oe),A.onAfterRender(E,k,W,X,B,oe)}function ri(A,k,W){k.isScene!==!0&&(k=ft);const X=De.get(A),B=w.state.lights,oe=w.state.shadowsArray,xe=B.state.version,Me=Te.getParameters(A,B.state,oe,k,W),ye=Te.getProgramCacheKey(Me);let Ne=X.programs;X.environment=A.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(A.isMeshStandardMaterial?V:S).get(A.envMap||X.environment),X.envMapRotation=X.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Ne===void 0&&(A.addEventListener("dispose",ke),Ne=new Map,X.programs=Ne);let Be=Ne.get(ye);if(Be!==void 0){if(X.currentProgram===Be&&X.lightsStateVersion===xe)return ma(A,Me),Be}else Me.uniforms=Te.getUniforms(A),A.onBeforeCompile(Me,E),Be=Te.acquireProgram(Me,ye),Ne.set(ye,Be),X.uniforms=Me.uniforms;const Se=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Se.clippingPlanes=re.uniform),ma(A,Me),X.needsLights=rs(A),X.lightsStateVersion=xe,X.needsLights&&(Se.ambientLightColor.value=B.state.ambient,Se.lightProbe.value=B.state.probe,Se.directionalLights.value=B.state.directional,Se.directionalLightShadows.value=B.state.directionalShadow,Se.spotLights.value=B.state.spot,Se.spotLightShadows.value=B.state.spotShadow,Se.rectAreaLights.value=B.state.rectArea,Se.ltc_1.value=B.state.rectAreaLTC1,Se.ltc_2.value=B.state.rectAreaLTC2,Se.pointLights.value=B.state.point,Se.pointLightShadows.value=B.state.pointShadow,Se.hemisphereLights.value=B.state.hemi,Se.directionalShadowMap.value=B.state.directionalShadowMap,Se.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Se.spotShadowMap.value=B.state.spotShadowMap,Se.spotLightMatrix.value=B.state.spotLightMatrix,Se.spotLightMap.value=B.state.spotLightMap,Se.pointShadowMap.value=B.state.pointShadowMap,Se.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=Be,X.uniformsList=null,Be}function pa(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=Ja.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function ma(A,k){const W=De.get(A);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.batchingColor=k.batchingColor,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.instancingMorph=k.instancingMorph,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function as(A,k,W,X,B){k.isScene!==!0&&(k=ft),I.resetTextureUnits();const oe=k.fog,xe=X.isMeshStandardMaterial?k.environment:null,Me=O===null?E.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Li,ye=(X.isMeshStandardMaterial?V:S).get(X.envMap||xe),Ne=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Be=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Se=!!W.morphAttributes.position,je=!!W.morphAttributes.normal,st=!!W.morphAttributes.color;let dt=On;X.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(dt=E.toneMapping);const Et=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,et=Et!==void 0?Et.length:0,Ae=De.get(X),Jt=w.state.lights;if(de===!0&&(Ee===!0||A!==T)){const Ot=A===T&&X.id===C;re.setState(X,A,Ot)}let tt=!1;X.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Jt.state.version||Ae.outputColorSpace!==Me||B.isBatchedMesh&&Ae.batching===!1||!B.isBatchedMesh&&Ae.batching===!0||B.isBatchedMesh&&Ae.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ae.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ae.instancing===!1||!B.isInstancedMesh&&Ae.instancing===!0||B.isSkinnedMesh&&Ae.skinning===!1||!B.isSkinnedMesh&&Ae.skinning===!0||B.isInstancedMesh&&Ae.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ae.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ae.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ae.instancingMorph===!1&&B.morphTexture!==null||Ae.envMap!==ye||X.fog===!0&&Ae.fog!==oe||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==re.numPlanes||Ae.numIntersection!==re.numIntersection)||Ae.vertexAlphas!==Ne||Ae.vertexTangents!==Be||Ae.morphTargets!==Se||Ae.morphNormals!==je||Ae.morphColors!==st||Ae.toneMapping!==dt||Ae.morphTargetsCount!==et)&&(tt=!0):(tt=!0,Ae.__version=X.version);let Ht=Ae.currentProgram;tt===!0&&(Ht=ri(X,k,B));let Tn=!1,Dt=!1,kn=!1;const lt=Ht.getUniforms(),qt=Ae.uniforms;if(ze.useProgram(Ht.program)&&(Tn=!0,Dt=!0,kn=!0),X.id!==C&&(C=X.id,Dt=!0),Tn||T!==A){ze.buffers.depth.getReversed()?(fe.copy(A.projectionMatrix),ph(fe),mh(fe),lt.setValue(G,"projectionMatrix",fe)):lt.setValue(G,"projectionMatrix",A.projectionMatrix),lt.setValue(G,"viewMatrix",A.matrixWorldInverse);const an=lt.map.cameraPosition;an!==void 0&&an.setValue(G,Oe.setFromMatrixPosition(A.matrixWorld)),Ke.logarithmicDepthBuffer&&lt.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&lt.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),T!==A&&(T=A,Dt=!0,kn=!0)}if(B.isSkinnedMesh){lt.setOptional(G,B,"bindMatrix"),lt.setOptional(G,B,"bindMatrixInverse");const Ot=B.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),lt.setValue(G,"boneTexture",Ot.boneTexture,I))}B.isBatchedMesh&&(lt.setOptional(G,B,"batchingTexture"),lt.setValue(G,"batchingTexture",B._matricesTexture,I),lt.setOptional(G,B,"batchingIdTexture"),lt.setValue(G,"batchingIdTexture",B._indirectTexture,I),lt.setOptional(G,B,"batchingColorTexture"),B._colorsTexture!==null&&lt.setValue(G,"batchingColorTexture",B._colorsTexture,I));const Bn=W.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&Ue.update(B,W,Ht),(Dt||Ae.receiveShadow!==B.receiveShadow)&&(Ae.receiveShadow=B.receiveShadow,lt.setValue(G,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(qt.envMap.value=ye,qt.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&k.environment!==null&&(qt.envMapIntensity.value=k.environmentIntensity),Dt&&(lt.setValue(G,"toneMappingExposure",E.toneMappingExposure),Ae.needsLights&&ss(qt,kn),oe&&X.fog===!0&&pe.refreshFogUniforms(qt,oe),pe.refreshMaterialUniforms(qt,X,$,ce,w.state.transmissionRenderTarget[A.id]),Ja.upload(G,pa(Ae),qt,I)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ja.upload(G,pa(Ae),qt,I),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&lt.setValue(G,"center",B.center),lt.setValue(G,"modelViewMatrix",B.modelViewMatrix),lt.setValue(G,"normalMatrix",B.normalMatrix),lt.setValue(G,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Ot=X.uniformsGroups;for(let an=0,sn=Ot.length;an<sn;an++){const xa=Ot[an];F.update(xa,Ht),F.bind(xa,Ht)}}return Ht}function ss(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function rs(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(A,k,W){De.get(A.texture).__webglTexture=k,De.get(A.depthTexture).__webglTexture=W;const X=De.get(A);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,k){const W=De.get(A);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,W=0){O=A,L=k,U=W;let X=!0,B=null,oe=!1,xe=!1;if(A){const ye=De.get(A);if(ye.__useDefaultFramebuffer!==void 0)ze.bindFramebuffer(G.FRAMEBUFFER,null),X=!1;else if(ye.__webglFramebuffer===void 0)I.setupRenderTarget(A);else if(ye.__hasExternalTextures)I.rebindTextures(A,De.get(A.texture).__webglTexture,De.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Se=A.depthTexture;if(ye.__boundDepthTexture!==Se){if(Se!==null&&De.has(Se)&&(A.width!==Se.image.width||A.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(A)}}const Ne=A.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(xe=!0);const Be=De.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Be[k])?B=Be[k][W]:B=Be[k],oe=!0):A.samples>0&&I.useMultisampledRTT(A)===!1?B=De.get(A).__webglMultisampledFramebuffer:Array.isArray(Be)?B=Be[W]:B=Be,N.copy(A.viewport),K.copy(A.scissor),q=A.scissorTest}else N.copy(Re).multiplyScalar($).floor(),K.copy(Xe).multiplyScalar($).floor(),q=it;if(ze.bindFramebuffer(G.FRAMEBUFFER,B)&&X&&ze.drawBuffers(A,B),ze.viewport(N),ze.scissor(K),ze.setScissorTest(q),oe){const ye=De.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+k,ye.__webglTexture,W)}else if(xe){const ye=De.get(A.texture),Ne=k||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,ye.__webglTexture,W||0,Ne)}C=-1},this.readRenderTargetPixels=function(A,k,W,X,B,oe,xe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=De.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xe!==void 0&&(Me=Me[xe]),Me){ze.bindFramebuffer(G.FRAMEBUFFER,Me);try{const ye=A.texture,Ne=ye.format,Be=ye.type;if(!Ke.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-X&&W>=0&&W<=A.height-B&&G.readPixels(k,W,X,B,He.convert(Ne),He.convert(Be),oe)}finally{const ye=O!==null?De.get(O).__webglFramebuffer:null;ze.bindFramebuffer(G.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(A,k,W,X,B,oe,xe){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=De.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xe!==void 0&&(Me=Me[xe]),Me){const ye=A.texture,Ne=ye.format,Be=ye.type;if(!Ke.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=A.width-X&&W>=0&&W<=A.height-B){ze.bindFramebuffer(G.FRAMEBUFFER,Me);const Se=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Se),G.bufferData(G.PIXEL_PACK_BUFFER,oe.byteLength,G.STREAM_READ),G.readPixels(k,W,X,B,He.convert(Ne),He.convert(Be),0);const je=O!==null?De.get(O).__webglFramebuffer:null;ze.bindFramebuffer(G.FRAMEBUFFER,je);const st=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await fh(G,st,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Se),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,oe),G.deleteBuffer(Se),G.deleteSync(st),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,k=null,W=0){A.isTexture!==!0&&(Qi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,A=arguments[1]);const X=Math.pow(2,-W),B=Math.floor(A.image.width*X),oe=Math.floor(A.image.height*X),xe=k!==null?k.x:0,Me=k!==null?k.y:0;I.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,W,0,0,xe,Me,B,oe),ze.unbindTexture()},this.copyTextureToTexture=function(A,k,W=null,X=null,B=0){A.isTexture!==!0&&(Qi("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1],k=arguments[2],B=arguments[3]||0,W=null);let oe,xe,Me,ye,Ne,Be,Se,je,st;const dt=A.isCompressedTexture?A.mipmaps[B]:A.image;W!==null?(oe=W.max.x-W.min.x,xe=W.max.y-W.min.y,Me=W.isBox3?W.max.z-W.min.z:1,ye=W.min.x,Ne=W.min.y,Be=W.isBox3?W.min.z:0):(oe=dt.width,xe=dt.height,Me=dt.depth||1,ye=0,Ne=0,Be=0),X!==null?(Se=X.x,je=X.y,st=X.z):(Se=0,je=0,st=0);const Et=He.convert(k.format),et=He.convert(k.type);let Ae;k.isData3DTexture?(I.setTexture3D(k,0),Ae=G.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(I.setTexture2DArray(k,0),Ae=G.TEXTURE_2D_ARRAY):(I.setTexture2D(k,0),Ae=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,k.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,k.unpackAlignment);const Jt=G.getParameter(G.UNPACK_ROW_LENGTH),tt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Ht=G.getParameter(G.UNPACK_SKIP_PIXELS),Tn=G.getParameter(G.UNPACK_SKIP_ROWS),Dt=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,dt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,dt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ye),G.pixelStorei(G.UNPACK_SKIP_ROWS,Ne),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Be);const kn=A.isDataArrayTexture||A.isData3DTexture,lt=k.isDataArrayTexture||k.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const qt=De.get(A),Bn=De.get(k),Ot=De.get(qt.__renderTarget),an=De.get(Bn.__renderTarget);ze.bindFramebuffer(G.READ_FRAMEBUFFER,Ot.__webglFramebuffer),ze.bindFramebuffer(G.DRAW_FRAMEBUFFER,an.__webglFramebuffer);for(let sn=0;sn<Me;sn++)kn&&G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,De.get(A).__webglTexture,B,Be+sn),A.isDepthTexture?(lt&&G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,De.get(k).__webglTexture,B,st+sn),G.blitFramebuffer(ye,Ne,oe,xe,Se,je,oe,xe,G.DEPTH_BUFFER_BIT,G.NEAREST)):lt?G.copyTexSubImage3D(Ae,B,Se,je,st+sn,ye,Ne,oe,xe):G.copyTexSubImage2D(Ae,B,Se,je,st+sn,ye,Ne,oe,xe);ze.bindFramebuffer(G.READ_FRAMEBUFFER,null),ze.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else lt?A.isDataTexture||A.isData3DTexture?G.texSubImage3D(Ae,B,Se,je,st,oe,xe,Me,Et,et,dt.data):k.isCompressedArrayTexture?G.compressedTexSubImage3D(Ae,B,Se,je,st,oe,xe,Me,Et,dt.data):G.texSubImage3D(Ae,B,Se,je,st,oe,xe,Me,Et,et,dt):A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,B,Se,je,oe,xe,Et,et,dt.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,B,Se,je,dt.width,dt.height,Et,dt.data):G.texSubImage2D(G.TEXTURE_2D,B,Se,je,oe,xe,Et,et,dt);G.pixelStorei(G.UNPACK_ROW_LENGTH,Jt),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,tt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ht),G.pixelStorei(G.UNPACK_SKIP_ROWS,Tn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Dt),B===0&&k.generateMipmaps&&G.generateMipmap(Ae),ze.unbindTexture()},this.copyTextureToTexture3D=function(A,k,W=null,X=null,B=0){return A.isTexture!==!0&&(Qi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,A=arguments[2],k=arguments[3],B=arguments[4]||0),Qi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,k,W,X,B)},this.initRenderTarget=function(A){De.get(A).__webglFramebuffer===void 0&&I.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?I.setTextureCube(A,0):A.isData3DTexture?I.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?I.setTexture2DArray(A,0):I.setTexture2D(A,0),ze.unbindTexture()},this.resetState=function(){L=0,U=0,O=null,ze.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}class Hr{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new We(e),this.density=t}clone(){return new Hr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class T2 extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class A2 extends Ct{constructor(e=null,t=1,i=1,a,r,c,l,f,d=Wt,u=Wt,x,m){super(null,c,l,f,d,u,a,r,x,m),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yo extends Xt{constructor(e,t,i,a=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const vi=new ht,Ko=new ht,Fa=[],Jo=new ni,R2=new ht,Ji=new ot,Zi=new Ni;class C2 extends ot{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Yo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<i;a++)this.setMatrixAt(a,R2)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ni),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,vi),Jo.copy(e.boundingBox).applyMatrix4(vi),this.boundingBox.union(Jo)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ni),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,vi),Zi.copy(e.boundingSphere).applyMatrix4(vi),this.boundingSphere.union(Zi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,a=this.morphTexture.source.data.data,r=i.length+1,c=e*r+1;for(let l=0;l<i.length;l++)i[l]=a[c+l]}raycast(e,t){const i=this.matrixWorld,a=this.count;if(Ji.geometry=this.geometry,Ji.material=this.material,Ji.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zi.copy(this.boundingSphere),Zi.applyMatrix4(i),e.ray.intersectsSphere(Zi)!==!1))for(let r=0;r<a;r++){this.getMatrixAt(r,vi),Ko.multiplyMatrices(i,vi),Ji.matrixWorld=Ko,Ji.raycast(e,Fa);for(let c=0,l=Fa.length;c<l;c++){const f=Fa[c];f.instanceId=r,f.object=this,t.push(f)}Fa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Yo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,a=i.length+1;this.morphTexture===null&&(this.morphTexture=new A2(new Float32Array(a*this.count),a,this.count,Lr,hn));const r=this.morphTexture.source.data.data;let c=0;for(let d=0;d<i.length;d++)c+=i[d];const l=this.geometry.morphTargetsRelative?1:1-c,f=a*e;r[f]=l,r.set(i,f+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Bc extends Oi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Zo=new ht,Rr=new Ec,ka=new Ni,Ba=new _;class P2 extends bt{constructor(e=new Ut,t=new Bc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,r=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ka.copy(i.boundingSphere),ka.applyMatrix4(a),ka.radius+=r,e.ray.intersectsSphere(ka)===!1)return;Zo.copy(a).invert(),Rr.copy(e.ray).applyMatrix4(Zo);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),f=l*l,d=i.index,x=i.attributes.position;if(d!==null){const m=Math.max(0,c.start),g=Math.min(d.count,c.start+c.count);for(let v=m,y=g;v<y;v++){const b=d.getX(v);Ba.fromBufferAttribute(x,b),$o(Ba,b,f,a,e,t,this)}}else{const m=Math.max(0,c.start),g=Math.min(x.count,c.start+c.count);for(let v=m,y=g;v<y;v++)Ba.fromBufferAttribute(x,v),$o(Ba,v,f,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,c=a.length;r<c;r++){const l=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}}function $o(n,e,t,i,a,r,c){const l=Rr.distanceSqToPoint(n);if(l<t){const f=new _;Rr.closestPointToPoint(n,f),f.applyMatrix4(i);const d=a.ray.origin.distanceTo(f);if(d<a.near||d>a.far)return;r.push({distance:d,distanceToRay:Math.sqrt(l),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class D2 extends Ct{constructor(e,t,i,a,r,c,l,f,d){super(e,t,i,a,r,c,l,f,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class En{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,a=this.getPoint(0),r=0;t.push(0);for(let c=1;c<=e;c++)i=this.getPoint(c/e),r+=i.distanceTo(a),t.push(r),a=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let a=0;const r=i.length;let c;t?c=t:c=e*i[r-1];let l=0,f=r-1,d;for(;l<=f;)if(a=Math.floor(l+(f-l)/2),d=i[a]-c,d<0)l=a+1;else if(d>0)f=a-1;else{f=a;break}if(a=f,i[a]===c)return a/(r-1);const u=i[a],m=i[a+1]-u,g=(c-u)/m;return(a+g)/(r-1)}getTangent(e,t){let a=e-1e-4,r=e+1e-4;a<0&&(a=0),r>1&&(r=1);const c=this.getPoint(a),l=this.getPoint(r),f=t||(c.isVector2?new Pe:new _);return f.copy(l).sub(c).normalize(),f}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new _,a=[],r=[],c=[],l=new _,f=new ht;for(let g=0;g<=e;g++){const v=g/e;a[g]=this.getTangentAt(v,new _)}r[0]=new _,c[0]=new _;let d=Number.MAX_VALUE;const u=Math.abs(a[0].x),x=Math.abs(a[0].y),m=Math.abs(a[0].z);u<=d&&(d=u,i.set(1,0,0)),x<=d&&(d=x,i.set(0,1,0)),m<=d&&i.set(0,0,1),l.crossVectors(a[0],i).normalize(),r[0].crossVectors(a[0],l),c[0].crossVectors(a[0],r[0]);for(let g=1;g<=e;g++){if(r[g]=r[g-1].clone(),c[g]=c[g-1].clone(),l.crossVectors(a[g-1],a[g]),l.length()>Number.EPSILON){l.normalize();const v=Math.acos(Rt(a[g-1].dot(a[g]),-1,1));r[g].applyMatrix4(f.makeRotationAxis(l,v))}c[g].crossVectors(a[g],r[g])}if(t===!0){let g=Math.acos(Rt(r[0].dot(r[e]),-1,1));g/=e,a[0].dot(l.crossVectors(r[0],r[e]))>0&&(g=-g);for(let v=1;v<=e;v++)r[v].applyMatrix4(f.makeRotationAxis(a[v],g*v)),c[v].crossVectors(a[v],r[v])}return{tangents:a,normals:r,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Hc extends En{constructor(e=0,t=0,i=1,a=1,r=0,c=Math.PI*2,l=!1,f=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=a,this.aStartAngle=r,this.aEndAngle=c,this.aClockwise=l,this.aRotation=f}getPoint(e,t=new Pe){const i=t,a=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const c=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=a;for(;r>a;)r-=a;r<Number.EPSILON&&(c?r=0:r=a),this.aClockwise===!0&&!c&&(r===a?r=-a:r=r-a);const l=this.aStartAngle+e*r;let f=this.aX+this.xRadius*Math.cos(l),d=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const u=Math.cos(this.aRotation),x=Math.sin(this.aRotation),m=f-this.aX,g=d-this.aY;f=m*u-g*x+this.aX,d=m*x+g*u+this.aY}return i.set(f,d)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class z2 extends Hc{constructor(e,t,i,a,r,c){super(e,t,i,i,a,r,c),this.isArcCurve=!0,this.type="ArcCurve"}}function Gr(){let n=0,e=0,t=0,i=0;function a(r,c,l,f){n=r,e=l,t=-3*r+3*c-2*l-f,i=2*r-2*c+l+f}return{initCatmullRom:function(r,c,l,f,d){a(c,l,d*(l-r),d*(f-c))},initNonuniformCatmullRom:function(r,c,l,f,d,u,x){let m=(c-r)/d-(l-r)/(d+u)+(l-c)/u,g=(l-c)/u-(f-c)/(u+x)+(f-l)/x;m*=u,g*=u,a(c,l,m,g)},calc:function(r){const c=r*r,l=c*r;return n+e*r+t*c+i*l}}}const Ha=new _,Os=new Gr,Fs=new Gr,ks=new Gr;class Bi extends En{constructor(e=[],t=!1,i="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=a}getPoint(e,t=new _){const i=t,a=this.points,r=a.length,c=(r-(this.closed?0:1))*e;let l=Math.floor(c),f=c-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:f===0&&l===r-1&&(l=r-2,f=1);let d,u;this.closed||l>0?d=a[(l-1)%r]:(Ha.subVectors(a[0],a[1]).add(a[0]),d=Ha);const x=a[l%r],m=a[(l+1)%r];if(this.closed||l+2<r?u=a[(l+2)%r]:(Ha.subVectors(a[r-1],a[r-2]).add(a[r-1]),u=Ha),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let v=Math.pow(d.distanceToSquared(x),g),y=Math.pow(x.distanceToSquared(m),g),b=Math.pow(m.distanceToSquared(u),g);y<1e-4&&(y=1),v<1e-4&&(v=y),b<1e-4&&(b=y),Os.initNonuniformCatmullRom(d.x,x.x,m.x,u.x,v,y,b),Fs.initNonuniformCatmullRom(d.y,x.y,m.y,u.y,v,y,b),ks.initNonuniformCatmullRom(d.z,x.z,m.z,u.z,v,y,b)}else this.curveType==="catmullrom"&&(Os.initCatmullRom(d.x,x.x,m.x,u.x,this.tension),Fs.initCatmullRom(d.y,x.y,m.y,u.y,this.tension),ks.initCatmullRom(d.z,x.z,m.z,u.z,this.tension));return i.set(Os.calc(f),Fs.calc(f),ks.calc(f)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new _().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function jo(n,e,t,i,a){const r=(i-e)*.5,c=(a-t)*.5,l=n*n,f=n*l;return(2*t-2*i+r+c)*f+(-3*t+3*i-2*r-c)*l+r*n+t}function I2(n,e){const t=1-n;return t*t*e}function L2(n,e){return 2*(1-n)*n*e}function U2(n,e){return n*n*e}function ta(n,e,t,i){return I2(n,e)+L2(n,t)+U2(n,i)}function N2(n,e){const t=1-n;return t*t*t*e}function O2(n,e){const t=1-n;return 3*t*t*n*e}function F2(n,e){return 3*(1-n)*n*n*e}function k2(n,e){return n*n*n*e}function na(n,e,t,i,a){return N2(n,e)+O2(n,t)+F2(n,i)+k2(n,a)}class B2 extends En{constructor(e=new Pe,t=new Pe,i=new Pe,a=new Pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new Pe){const i=t,a=this.v0,r=this.v1,c=this.v2,l=this.v3;return i.set(na(e,a.x,r.x,c.x,l.x),na(e,a.y,r.y,c.y,l.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class H2 extends En{constructor(e=new _,t=new _,i=new _,a=new _){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new _){const i=t,a=this.v0,r=this.v1,c=this.v2,l=this.v3;return i.set(na(e,a.x,r.x,c.x,l.x),na(e,a.y,r.y,c.y,l.y),na(e,a.z,r.z,c.z,l.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class G2 extends En{constructor(e=new Pe,t=new Pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Pe){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class V2 extends En{constructor(e=new _,t=new _){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new _){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class W2 extends En{constructor(e=new Pe,t=new Pe,i=new Pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Pe){const i=t,a=this.v0,r=this.v1,c=this.v2;return i.set(ta(e,a.x,r.x,c.x),ta(e,a.y,r.y,c.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gc extends En{constructor(e=new _,t=new _,i=new _){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new _){const i=t,a=this.v0,r=this.v1,c=this.v2;return i.set(ta(e,a.x,r.x,c.x),ta(e,a.y,r.y,c.y),ta(e,a.z,r.z,c.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class X2 extends En{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Pe){const i=t,a=this.points,r=(a.length-1)*e,c=Math.floor(r),l=r-c,f=a[c===0?c:c-1],d=a[c],u=a[c>a.length-2?a.length-1:c+1],x=a[c>a.length-3?a.length-1:c+2];return i.set(jo(l,f.x,d.x,u.x,x.x),jo(l,f.y,d.y,u.y,x.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new Pe().fromArray(a))}return this}}var q2=Object.freeze({__proto__:null,ArcCurve:z2,CatmullRomCurve3:Bi,CubicBezierCurve:B2,CubicBezierCurve3:H2,EllipseCurve:Hc,LineCurve:G2,LineCurve3:V2,QuadraticBezierCurve:W2,QuadraticBezierCurve3:Gc,SplineCurve:X2});class P extends Ut{constructor(e=1,t=1,i=1,a=32,r=1,c=!1,l=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:a,heightSegments:r,openEnded:c,thetaStart:l,thetaLength:f};const d=this;a=Math.floor(a),r=Math.floor(r);const u=[],x=[],m=[],g=[];let v=0;const y=[],b=i/2;let w=0;z(),c===!1&&(e>0&&D(!0),t>0&&D(!1)),this.setIndex(u),this.setAttribute("position",new pt(x,3)),this.setAttribute("normal",new pt(m,3)),this.setAttribute("uv",new pt(g,2));function z(){const E=new _,H=new _;let L=0;const U=(t-e)/i;for(let O=0;O<=r;O++){const C=[],T=O/r,N=T*(t-e)+e;for(let K=0;K<=a;K++){const q=K/a,j=q*f+l,ae=Math.sin(j),Q=Math.cos(j);H.x=N*ae,H.y=-T*i+b,H.z=N*Q,x.push(H.x,H.y,H.z),E.set(ae,U,Q).normalize(),m.push(E.x,E.y,E.z),g.push(q,1-T),C.push(v++)}y.push(C)}for(let O=0;O<a;O++)for(let C=0;C<r;C++){const T=y[C][O],N=y[C+1][O],K=y[C+1][O+1],q=y[C][O+1];(e>0||C!==0)&&(u.push(T,N,q),L+=3),(t>0||C!==r-1)&&(u.push(N,K,q),L+=3)}d.addGroup(w,L,0),w+=L}function D(E){const H=v,L=new Pe,U=new _;let O=0;const C=E===!0?e:t,T=E===!0?1:-1;for(let K=1;K<=a;K++)x.push(0,b*T,0),m.push(0,T,0),g.push(.5,.5),v++;const N=v;for(let K=0;K<=a;K++){const j=K/a*f+l,ae=Math.cos(j),Q=Math.sin(j);U.x=C*Q,U.y=b*T,U.z=C*ae,x.push(U.x,U.y,U.z),m.push(0,T,0),L.x=ae*.5+.5,L.y=Q*.5*T+.5,g.push(L.x,L.y),v++}for(let K=0;K<a;K++){const q=H+K,j=N+K;E===!0?u.push(j,j+1,q):u.push(j+1,j,q),O+=3}d.addGroup(w,O,E===!0?1:2),w+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new P(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ii extends P{constructor(e=1,t=1,i=32,a=1,r=!1,c=0,l=Math.PI*2){super(0,e,t,i,a,r,c,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:a,openEnded:r,thetaStart:c,thetaLength:l}}static fromJSON(e){return new ii(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ca extends Ut{constructor(e=[],t=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:a};const r=[],c=[];l(a),d(i),u(),this.setAttribute("position",new pt(r,3)),this.setAttribute("normal",new pt(r.slice(),3)),this.setAttribute("uv",new pt(c,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function l(z){const D=new _,E=new _,H=new _;for(let L=0;L<t.length;L+=3)g(t[L+0],D),g(t[L+1],E),g(t[L+2],H),f(D,E,H,z)}function f(z,D,E,H){const L=H+1,U=[];for(let O=0;O<=L;O++){U[O]=[];const C=z.clone().lerp(E,O/L),T=D.clone().lerp(E,O/L),N=L-O;for(let K=0;K<=N;K++)K===0&&O===L?U[O][K]=C:U[O][K]=C.clone().lerp(T,K/N)}for(let O=0;O<L;O++)for(let C=0;C<2*(L-O)-1;C++){const T=Math.floor(C/2);C%2===0?(m(U[O][T+1]),m(U[O+1][T]),m(U[O][T])):(m(U[O][T+1]),m(U[O+1][T+1]),m(U[O+1][T]))}}function d(z){const D=new _;for(let E=0;E<r.length;E+=3)D.x=r[E+0],D.y=r[E+1],D.z=r[E+2],D.normalize().multiplyScalar(z),r[E+0]=D.x,r[E+1]=D.y,r[E+2]=D.z}function u(){const z=new _;for(let D=0;D<r.length;D+=3){z.x=r[D+0],z.y=r[D+1],z.z=r[D+2];const E=b(z)/2/Math.PI+.5,H=w(z)/Math.PI+.5;c.push(E,1-H)}v(),x()}function x(){for(let z=0;z<c.length;z+=6){const D=c[z+0],E=c[z+2],H=c[z+4],L=Math.max(D,E,H),U=Math.min(D,E,H);L>.9&&U<.1&&(D<.2&&(c[z+0]+=1),E<.2&&(c[z+2]+=1),H<.2&&(c[z+4]+=1))}}function m(z){r.push(z.x,z.y,z.z)}function g(z,D){const E=z*3;D.x=e[E+0],D.y=e[E+1],D.z=e[E+2]}function v(){const z=new _,D=new _,E=new _,H=new _,L=new Pe,U=new Pe,O=new Pe;for(let C=0,T=0;C<r.length;C+=9,T+=6){z.set(r[C+0],r[C+1],r[C+2]),D.set(r[C+3],r[C+4],r[C+5]),E.set(r[C+6],r[C+7],r[C+8]),L.set(c[T+0],c[T+1]),U.set(c[T+2],c[T+3]),O.set(c[T+4],c[T+5]),H.copy(z).add(D).add(E).divideScalar(3);const N=b(H);y(L,T+0,z,N),y(U,T+2,D,N),y(O,T+4,E,N)}}function y(z,D,E,H){H<0&&z.x===1&&(c[D]=z.x-1),E.x===0&&E.z===0&&(c[D]=H/2/Math.PI+.5)}function b(z){return Math.atan2(z.z,-z.x)}function w(z){return Math.atan2(-z.y,Math.sqrt(z.x*z.x+z.z*z.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ca(e.vertices,e.indices,e.radius,e.details)}}class ut extends ca{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,a=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-i,0,-a,i,0,a,-i,0,a,i,-a,-i,0,-a,i,0,a,-i,0,a,i,0,-i,0,-a,i,0,-a,-i,0,a,i,0,a],c=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,c,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ut(e.radius,e.detail)}}class Vr extends ca{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,a=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Vr(e.radius,e.detail)}}class Wr extends ca{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,a,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Wr(e.radius,e.detail)}}class aa extends Ut{constructor(e=.5,t=1,i=32,a=1,r=0,c=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:a,thetaStart:r,thetaLength:c},i=Math.max(3,i),a=Math.max(1,a);const l=[],f=[],d=[],u=[];let x=e;const m=(t-e)/a,g=new _,v=new Pe;for(let y=0;y<=a;y++){for(let b=0;b<=i;b++){const w=r+b/i*c;g.x=x*Math.cos(w),g.y=x*Math.sin(w),f.push(g.x,g.y,g.z),d.push(0,0,1),v.x=(g.x/t+1)/2,v.y=(g.y/t+1)/2,u.push(v.x,v.y)}x+=m}for(let y=0;y<a;y++){const b=y*(i+1);for(let w=0;w<i;w++){const z=w+b,D=z,E=z+i+1,H=z+i+2,L=z+1;l.push(D,E,L),l.push(E,H,L)}}this.setIndex(l),this.setAttribute("position",new pt(f,3)),this.setAttribute("normal",new pt(d,3)),this.setAttribute("uv",new pt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new aa(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class _t extends Ut{constructor(e=1,t=32,i=16,a=0,r=Math.PI*2,c=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:r,thetaStart:c,thetaLength:l},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const f=Math.min(c+l,Math.PI);let d=0;const u=[],x=new _,m=new _,g=[],v=[],y=[],b=[];for(let w=0;w<=i;w++){const z=[],D=w/i;let E=0;w===0&&c===0?E=.5/t:w===i&&f===Math.PI&&(E=-.5/t);for(let H=0;H<=t;H++){const L=H/t;x.x=-e*Math.cos(a+L*r)*Math.sin(c+D*l),x.y=e*Math.cos(c+D*l),x.z=e*Math.sin(a+L*r)*Math.sin(c+D*l),v.push(x.x,x.y,x.z),m.copy(x).normalize(),y.push(m.x,m.y,m.z),b.push(L+E,1-D),z.push(d++)}u.push(z)}for(let w=0;w<i;w++)for(let z=0;z<t;z++){const D=u[w][z+1],E=u[w][z],H=u[w+1][z],L=u[w+1][z+1];(w!==0||c>0)&&g.push(D,E,L),(w!==i-1||f<Math.PI)&&g.push(E,H,L)}this.setIndex(g),this.setAttribute("position",new pt(v,3)),this.setAttribute("normal",new pt(y,3)),this.setAttribute("uv",new pt(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _t(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ce extends Ut{constructor(e=1,t=.4,i=12,a=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:a,arc:r},i=Math.floor(i),a=Math.floor(a);const c=[],l=[],f=[],d=[],u=new _,x=new _,m=new _;for(let g=0;g<=i;g++)for(let v=0;v<=a;v++){const y=v/a*r,b=g/i*Math.PI*2;x.x=(e+t*Math.cos(b))*Math.cos(y),x.y=(e+t*Math.cos(b))*Math.sin(y),x.z=t*Math.sin(b),l.push(x.x,x.y,x.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),m.subVectors(x,u).normalize(),f.push(m.x,m.y,m.z),d.push(v/a),d.push(g/i)}for(let g=1;g<=i;g++)for(let v=1;v<=a;v++){const y=(a+1)*g+v-1,b=(a+1)*(g-1)+v-1,w=(a+1)*(g-1)+v,z=(a+1)*g+v;c.push(y,b,z),c.push(b,w,z)}this.setIndex(c),this.setAttribute("position",new pt(l,3)),this.setAttribute("normal",new pt(f,3)),this.setAttribute("uv",new pt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ce(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ai extends Ut{constructor(e=new Gc(new _(-1,-1,0),new _(-1,1,0),new _(1,1,0)),t=64,i=1,a=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:a,closed:r};const c=e.computeFrenetFrames(t,r);this.tangents=c.tangents,this.normals=c.normals,this.binormals=c.binormals;const l=new _,f=new _,d=new Pe;let u=new _;const x=[],m=[],g=[],v=[];y(),this.setIndex(v),this.setAttribute("position",new pt(x,3)),this.setAttribute("normal",new pt(m,3)),this.setAttribute("uv",new pt(g,2));function y(){for(let D=0;D<t;D++)b(D);b(r===!1?t:0),z(),w()}function b(D){u=e.getPointAt(D/t,u);const E=c.normals[D],H=c.binormals[D];for(let L=0;L<=a;L++){const U=L/a*Math.PI*2,O=Math.sin(U),C=-Math.cos(U);f.x=C*E.x+O*H.x,f.y=C*E.y+O*H.y,f.z=C*E.z+O*H.z,f.normalize(),m.push(f.x,f.y,f.z),l.x=u.x+i*f.x,l.y=u.y+i*f.y,l.z=u.z+i*f.z,x.push(l.x,l.y,l.z)}}function w(){for(let D=1;D<=t;D++)for(let E=1;E<=a;E++){const H=(a+1)*(D-1)+(E-1),L=(a+1)*D+(E-1),U=(a+1)*D+E,O=(a+1)*(D-1)+E;v.push(H,L,O),v.push(L,U,O)}}function z(){for(let D=0;D<=t;D++)for(let E=0;E<=a;E++)d.x=D/t,d.y=E/a,g.push(d.x,d.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ai(new q2[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Fe extends Oi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bc,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xr extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Y2 extends Xr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Bs=new ht,Qo=new _,ec=new _;class K2{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kr,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Qo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qo),ec.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ec),t.updateMatrixWorld(),Bs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bs),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Bs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class J2 extends K2{constructor(){super(new Lc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Z2 extends Xr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new J2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class $2 extends Xr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Lg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=tc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=tc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function tc(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pr);function Ga(n,e){const t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function qr(n,e){const t=Math.floor(n),i=Math.floor(e),a=n-t,r=e-i,c=a*a*(3-2*a),l=r*r*(3-2*r),f=Ga(t,i),d=Ga(t+1,i),u=Ga(t,i+1),x=Ga(t+1,i+1);return f+(d-f)*c+(u-f)*l+(f-d-u+x)*c*l}function nc(n,e,t=4){let i=0,a=.5,r=1;for(let c=0;c<t;c++)i+=qr(n*r,e*r)*a,r*=2,a*=.5;return i}function Qa(n,e,t){const i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)}function j2(n,e,t){return n+(e-n)*t}const es=640,ic=180,Q2=[[180,-90,46,8],[-210,150,30,5.5],[95,230,18,3.2],[-70,-250,36,6],[250,80,14,2.4],[-160,-40,12,2]];function em(n,e,t,i,a,r){const c=n-t,l=e-i,f=Math.sqrt(c*c+l*l);if(f>a)return 0;const d=f/a,u=-r*(1-d*d),x=r*.28*Math.exp(-((d-.86)*(d-.86))/.018);return u+x}const tm=[[0,0,48,100],[52,24,18,36],[22,82,14,28],[80,-44,40,60],[112,-83,18,30],[-32,-98,16,26],[-88,-188,24,42],[-68,-16,16,28],[22,-112,12,20],[-6,-108,18,32],[36,72,16,32],[-24,44,16,32],[-32,-148,12,22],[-64,-90,10,18],[-50,-100,16,28],[38,-126,12,20],[-60,-148,8,14],[-64,-118,8,14],[-18,-88,10,18],[68,-10,12,20],[-22,-88,8,14],[-48,68,16,32],[78,56,16,32],[-13,-134,16,28],[8,-142,12,20],[135,-40,20,34],[68,6,12,20],[-28,-138,8,14],[-36,-74,14,24],[2,-22,8,14],[-50,-72,10,16],[10,-124,12,20],[20,8,12,20],[-16,136,28,48],[158,-62,22,36],[158,-28,10,16],[-96,-16,16,26],[-78,-172,12,20],[66,-74,14,22],[18,-152,12,18],[-20,-100,10,16],[-8,-162,10,16],[8,-98,10,16],[48,-70,10,16],[-68,12,12,18],[22,-80,10,16],[52,-112,12,18],[-90,-158,10,16],[8,-78,10,16],[-8,-88,10,16],[-96,4,10,16],[142,-62,8,14],[28,-140,10,16],[-90,-148,8,14],[12,18,8,12],[36,8,10,16],[36,-6,10,16],[-50,4,10,16],[-58,-142,10,16],[-32,-22,10,16],[66,-90,10,16],[22,-98,10,16],[172,-48,10,16],[38,-104,10,16],[24,-128,8,14],[-80,20,10,16],[6,148,8,14],[-64,80,10,16],[-80,32,10,16],[100,-22,8,14],[-22,-56,10,16],[-124,-188,12,20],[-38,16,10,16],[70,-112,12,18],[16,48,8,14],[-58,-36,12,16],[50,4,10,18],[-40,-168,12,16],[82,-90,10,14],[4,-148,10,14],[148,-40,10,14],[124,-70,10,14],[96,-44,10,14],[-84,8,10,14],[16,-86,10,14],[135,-22,12,14],[100,-70,12,14],[82,-28,12,14],[-68,2,12,14],[122,-40,8,22],[98,-83,8,22],[70,-44,8,22],[-102,-158,10,14],[-18,-78,12,14],[-64,-184,12,16],[32,-152,10,12],[-96,16,16,10],[82,-74,16,14],[-78,-156,10,12],[-110,8,10,12],[-110,20,10,12],[-110,32,10,12],[-122,8,12,12],[-122,20,10,12],[-8,-98,12,12],[-22,-98,10,12],[8,-88,10,12],[-78,-36,12,12],[96,-90,10,12],[-5,-78,8,10],[16,-148,10,12],[-90,-136,10,12],[16,-74,8,10],[-48,-138,12,14],[52,-126,12,12],[70,-126,10,12],[0,-68,8,10],[48,-70,8,10],[-46,-148,8,10],[-38,16,8,10],[38,-104,8,10],[172,-48,8,10],[-16,36,8,10],[4,-138,8,10],[68,6,8,10],[66,-104,12,10],[80,-104,8,8],[18,136,10,8],[22,-98,8,8],[172,-62,10,10],[-92,-184,10,10],[-32,-88,10,10],[96,-104,10,10],[-28,-8,8,8],[-28,6,8,8],[-46,-88,10,10],[-50,-22,10,10],[-80,20,10,10],[-38,28,10,10],[-46,-132,10,10],[24,-118,10,10],[-110,-136,12,10],[-22,-110,10,10],[158,-48,12,10],[110,-90,10,10],[8,-110,10,10],[-70,-148,10,10],[96,-28,10,8],[124,-83,10,8],[148,-22,10,8],[46,-152,10,10],[32,136,10,10],[-8,-110,10,10],[110,-104,10,10],[70,-28,10,10],[136,-70,10,10],[122,-22,10,10],[-114,-158,10,10],[-32,-36,10,10],[-42,6,10,10],[28,-74,10,10],[80,-118,10,10],[38,-132,10,10],[46,136,10,10],[40,-140,10,10],[52,-90,10,10],[-124,-136,10,10],[28,-162,10,10],[46,148,10,10],[96,-118,10,10],[-102,-148,10,10],[110,-118,10,10],[-18,-36,10,10],[-42,-8,10,10],[8,-68,10,10],[8,-162,10,10],[40,-74,10,10],[-70,-136,10,10],[124,-90,10,10],[52,-140,10,10],[16,-136,10,10],[124,-104,10,10],[-92,-172,10,10],[36,-128,10,10],[-58,-88,10,10],[36,36,10,10],[22,-110,10,10],[108,-44,10,10],[-64,-172,10,10],[124,-118,10,10],[136,-83,10,10],[160,-40,10,10],[184,-62,10,10],[36,48,10,10],[-36,-110,10,10],[22,36,10,10],[-8,-76,10,10],[70,-140,14,10],[8,36,10,8],[28,-148,10,10],[-58,-76,10,10],[-114,-148,10,10],[68,18,16,10],[-122,-4,12,10],[-84,-4,10,10],[-80,44,10,10],[-80,56,10,10],[-28,-180,10,12],[-52,-196,10,12],[138,-118,10,10],[8,-56,10,10],[-68,-10,12,10],[-54,24,16,8],[-58,-48,12,10],[-38,40,10,10],[138,-132,10,10],[52,-74,10,8],[28,-86,10,8],[138,-146,10,10],[-70,-76,10,10],[-46,-100,10,10],[138,-160,10,10],[-8,-98,10,10],[-90,-124,10,10],[70,-152,10,10],[138,-174,10,10],[52,-154,12,10],[8,-122,10,10],[22,-122,10,10],[138,-188,10,10],[38,-146,10,10],[138,-202,10,10],[52,-168,10,10],[138,-216,10,10],[-34,-146,10,10],[138,-230,10,10],[36,-110,10,10],[40,-162,10,10],[138,-244,10,10],[60,136,10,10],[138,-258,10,10],[50,-110,10,10],[138,-272,10,10],[138,-286,10,10],[138,-300,10,10],[138,-314,10,10],[138,-328,10,10],[-82,-76,10,10],[-58,-100,10,10],[32,-176,10,10],[50,36,10,10],[50,48,10,10],[22,48,10,10],[8,48,10,10],[60,148,10,10],[32,148,10,10],[18,148,10,10],[50,-122,10,10],[138,-342,10,10],[138,-356,10,10],[138,-370,10,10],[138,-384,10,10],[138,-398,10,10],[64,-122,10,10],[-22,-146,10,10],[138,-412,10,10],[138,-426,10,10],[138,-440,10,10],[138,-454,10,10],[138,-468,10,10],[138,-482,10,10],[-94,-76,10,10],[-70,-100,10,10],[46,-176,10,10],[138,-496,10,10],[74,136,10,10],[74,148,10,10],[32,160,10,10]];function M(n,e){let t=0;t+=(nc(n*.0038,e*.0038,5)-.45)*16,t+=(nc(n*.018,e*.018,3)-.5)*2.8,t+=(qr(n*.07,e*.07)-.5)*.45;for(const[i,a,r,c]of Q2)t+=em(n,e,i,a,r,c);for(const[i,a,r,c]of tm){const l=Qa(c,r,Math.hypot(n-i,e-a));t=j2(t,.35+t*.12,l)}return t}function nm(n,e,t,i){const a=new We(9059108),r=new We(12085818),c=new We(12880469),l=new We(4858904),f=Qa(-4,8,t),d=a.clone().lerp(r,f).lerp(c,Qa(6,14,t)*.35);i>.45&&d.lerp(l,Math.min(.55,(i-.45)*1.4));const u=qr(n*.11,e*.11);d.offsetHSL(0,(u-.5)*.08,(u-.5)*.06);const x=im(n,e);return x>0&&d.lerp(new We(5911332),x*.85),d}function im(n,e){const t=[{ax:0,az:18,bx:0,bz:-124},{ax:0,az:-40,bx:84,bz:-42},{ax:0,az:-40,bx:-68,bz:-16},{ax:0,az:-90,bx:-55,bz:-150},{ax:18,az:-70,bx:52,bz:-88},{ax:12,az:8,bx:50,bz:22},{ax:16,az:28,bx:22,bz:78},{ax:-58,az:-158,bx:-90,bz:-190},{ax:-14,az:-104,bx:-32,bz:-98},{ax:84,az:-42,bx:112,bz:-83},{ax:0,az:-108,bx:22,bz:-112},{ax:22,az:-112,bx:48,bz:-86},{ax:-6,az:-116,bx:-18,bz:-138},{ax:0,az:8,bx:-15,bz:-8},{ax:16,az:28,bx:36,bz:72},{ax:0,az:18,bx:-24,bz:44},{ax:-58,az:-158,bx:-64,bz:-90},{ax:-64,az:-90,bx:-68,bz:-16},{ax:-18,az:-138,bx:-32,bz:-148},{ax:-32,az:-98,bx:-46,bz:-100},{ax:22,az:-112,bx:38,bz:-126},{ax:-58,az:-158,bx:-60,bz:-148},{ax:-64,az:-118,bx:-18,bz:-88},{ax:84,az:-42,bx:68,bz:-10},{ax:-6,az:-108,bx:-18,bz:-88},{ax:0,az:18,bx:-48,bz:68},{ax:16,az:28,bx:78,bz:56},{ax:-6,az:-116,bx:-13,bz:-134},{ax:38,az:-126,bx:8,bz:-142},{ax:-13,az:-134,bx:8,bz:-142},{ax:112,az:-83,bx:135,bz:-40},{ax:68,az:-10,bx:68,bz:6},{ax:-13,az:-134,bx:-28,bz:-138},{ax:-46,az:-108,bx:-20,bz:-132},{ax:-6,az:-108,bx:-6,bz:-132},{ax:-6,az:-96,bx:2,bz:-22},{ax:-32,az:-98,bx:-36,bz:-74},{ax:-40,az:-76,bx:-32,bz:-98},{ax:-40,az:-76,bx:-50,bz:-72},{ax:-6,az:-132,bx:10,bz:-124},{ax:10,az:-124,bx:8,bz:-142},{ax:0,az:8,bx:20,bz:8},{ax:22,az:82,bx:-16,bz:136},{ax:0,az:32,bx:-16,bz:136},{ax:135,az:-40,bx:158,bz:-62},{ax:-68,az:-16,bx:-96,bz:-16},{ax:-58,az:-158,bx:-78,bz:-172},{ax:48,az:-86,bx:66,bz:-74},{ax:8,az:-142,bx:18,bz:-152},{ax:-32,az:-148,bx:-8,bz:-162},{ax:-6,az:-108,bx:8,bz:-98},{ax:22,az:-112,bx:8,bz:-98},{ax:48,az:-86,bx:48,bz:-70},{ax:-68,az:-16,bx:-68,bz:12},{ax:-36,az:-74,bx:22,bz:-80},{ax:48,az:-86,bx:22,bz:-80},{ax:22,az:-112,bx:52,bz:-112},{ax:38,az:-126,bx:52,bz:-112},{ax:-78,az:-172,bx:-90,bz:-158},{ax:8,az:-98,bx:8,bz:-78},{ax:22,az:-80,bx:8,bz:-78},{ax:8,az:-98,bx:-8,bz:-88},{ax:-22,az:-88,bx:-8,bz:-88},{ax:-96,az:-16,bx:-96,bz:4},{ax:158,az:-62,bx:142,bz:-62},{ax:8,az:-142,bx:28,bz:-140},{ax:18,az:-152,bx:28,bz:-140},{ax:-90,az:-158,bx:-90,bz:-148},{ax:5,az:16,bx:12,bz:18},{ax:20,az:8,bx:36,bz:8},{ax:36,az:8,bx:36,bz:-6},{ax:-68,az:4,bx:-50,bz:4},{ax:-58,az:-158,bx:-58,bz:-142},{ax:-15,az:-8,bx:-32,bz:-22},{ax:66,az:-74,bx:66,bz:-90},{ax:8,az:-98,bx:22,bz:-98},{ax:158,az:-62,bx:172,bz:-48},{ax:22,az:-112,bx:38,bz:-104},{ax:10,az:-124,bx:24,bz:-128},{ax:-68,az:12,bx:-80,bz:20},{ax:-16,az:136,bx:6,bz:148},{ax:-48,az:68,bx:-64,bz:80},{ax:-80,az:20,bx:-80,bz:32},{ax:135,az:-40,bx:100,bz:-22},{ax:100,az:-22,bx:68,bz:-10},{ax:-36,az:-74,bx:-22,bz:-56},{ax:-90,az:-158,bx:-124,bz:-188},{ax:-50,az:4,bx:-38,bz:16},{ax:52,az:-112,bx:70,bz:-112},{ax:22,az:82,bx:16,bz:48},{ax:-58,az:-142,bx:-58,bz:-36},{ax:-58,az:-36,bx:-68,bz:-16},{ax:36,az:8,bx:50,bz:4},{ax:-58,az:-158,bx:-40,bz:-168},{ax:66,az:-90,bx:82,bz:-90},{ax:-8,az:-162,bx:4,bz:-148},{ax:135,az:-40,bx:148,bz:-40},{ax:112,az:-83,bx:124,bz:-70},{ax:82,az:-44,bx:96,bz:-44},{ax:-68,az:12,bx:-84,bz:8},{ax:-8,az:-88,bx:16,bz:-86},{ax:135,az:-40,bx:135,bz:-22},{ax:124,az:-70,bx:100,bz:-70},{ax:82,az:-44,bx:82,bz:-28},{ax:-68,az:-16,bx:-68,bz:2},{ax:135,az:-40,bx:122,bz:-40},{ax:112,az:-83,bx:98,bz:-83},{ax:82,az:-44,bx:70,bz:-44},{ax:-90,az:-158,bx:-102,bz:-158},{ax:8,az:-78,bx:-18,bz:-78},{ax:-78,az:-172,bx:-64,bz:-184},{ax:18,az:-152,bx:32,bz:-152},{ax:-96,az:4,bx:-96,bz:16},{ax:66,az:-74,bx:82,bz:-74},{ax:-78,az:-172,bx:-78,bz:-156},{ax:-96,az:4,bx:-110,bz:8},{ax:-110,az:8,bx:-110,bz:20},{ax:-110,az:20,bx:-110,bz:32},{ax:-110,az:8,bx:-122,bz:8},{ax:-122,az:8,bx:-122,bz:20},{ax:8,az:-98,bx:-8,bz:-98},{ax:-8,az:-98,bx:-22,bz:-98},{ax:-8,az:-88,bx:8,bz:-88},{ax:-58,az:-36,bx:-78,bz:-36},{ax:82,az:-90,bx:96,bz:-90},{ax:8,az:-78,bx:-5,bz:-78},{ax:4,az:-148,bx:16,bz:-148},{ax:-90,az:-148,bx:-90,bz:-136},{ax:16,az:-86,bx:16,bz:-74},{ax:-32,az:-148,bx:-48,bz:-138},{ax:52,az:-112,bx:52,bz:-126},{ax:52,az:-126,bx:70,bz:-126},{ax:0,az:-68,bx:0,bz:-118},{ax:48,az:-70,bx:90,bz:-80},{ax:-46,az:-148,bx:-90,bz:-148},{ax:-38,az:16,bx:-68,bz:12},{ax:38,az:-104,bx:52,bz:-112},{ax:172,az:-48,bx:158,bz:-62},{ax:-16,az:36,bx:4,bz:32},{ax:4,az:-138,bx:-18,bz:-138},{ax:68,az:6,bx:50,bz:4},{ax:66,az:-90,bx:66,bz:-104},{ax:66,az:-104,bx:80,bz:-104},{ax:6,az:148,bx:18,bz:136},{ax:8,az:-98,bx:22,bz:-98},{ax:172,az:-48,bx:172,bz:-62},{ax:-64,az:-184,bx:-92,bz:-184},{ax:-18,az:-88,bx:-32,bz:-88},{ax:96,az:-90,bx:96,bz:-104},{ax:-15,az:-8,bx:-28,bz:-8},{ax:-28,az:-8,bx:-28,bz:6},{ax:-32,az:-88,bx:-46,bz:-88},{ax:-50,az:4,bx:-50,bz:-22},{ax:-68,az:12,bx:-80,bz:20},{ax:-38,az:16,bx:-38,bz:28},{ax:-58,az:-142,bx:-46,bz:-132},{ax:38,az:-104,bx:24,bz:-118},{ax:-90,az:-136,bx:-110,bz:-136},{ax:-32,az:-98,bx:-22,bz:-110},{ax:172,az:-62,bx:158,bz:-48},{ax:96,az:-90,bx:110,bz:-90},{ax:8,az:-98,bx:8,bz:-110},{ax:-46,az:-148,bx:-70,bz:-148},{ax:82,az:-28,bx:96,bz:-28},{ax:124,az:-70,bx:124,bz:-83},{ax:148,az:-40,bx:148,bz:-22},{ax:32,az:-152,bx:46,bz:-152},{ax:18,az:136,bx:32,bz:136},{ax:-8,az:-98,bx:-8,bz:-110},{ax:96,az:-104,bx:110,bz:-104},{ax:82,az:-28,bx:70,bz:-28},{ax:124,az:-70,bx:136,bz:-70},{ax:135,az:-22,bx:122,bz:-22},{ax:-102,az:-158,bx:-114,bz:-158},{ax:-32,az:-22,bx:-32,bz:-36},{ax:-28,az:6,bx:-42,bz:6},{ax:16,az:-74,bx:28,bz:-74},{ax:80,az:-104,bx:80,bz:-118},{ax:52,az:-126,bx:38,bz:-132},{ax:32,az:136,bx:46,bz:136},{ax:28,az:-140,bx:40,bz:-140},{ax:66,az:-90,bx:52,bz:-90},{ax:-110,az:-136,bx:-124,bz:-136},{ax:16,az:-148,bx:28,bz:-162},{ax:46,az:136,bx:46,bz:148},{ax:96,az:-104,bx:96,bz:-118},{ax:-102,az:-158,bx:-102,bz:-148},{ax:110,az:-104,bx:110,bz:-118},{ax:-32,az:-36,bx:-18,bz:-36},{ax:-42,az:6,bx:-42,bz:-8},{ax:0,az:-68,bx:8,bz:-68},{ax:18,az:-152,bx:8,bz:-162},{ax:28,az:-74,bx:40,bz:-74},{ax:-58,az:-142,bx:-70,bz:-136},{ax:110,az:-90,bx:124,bz:-90},{ax:52,az:-126,bx:52,bz:-140},{ax:16,az:-148,bx:16,bz:-136},{ax:110,az:-104,bx:124,bz:-104},{ax:-78,az:-156,bx:-92,bz:-172},{ax:24,az:-128,bx:36,bz:-128},{ax:-46,az:-88,bx:-58,bz:-88},{ax:36,az:23.5,bx:36,bz:36},{ax:22,az:-98,bx:22,bz:-110},{ax:96,az:-44,bx:108,bz:-44},{ax:-78,az:-172,bx:-64,bz:-172},{ax:110,az:-118,bx:124,bz:-118},{ax:124,az:-83,bx:136,bz:-83},{ax:148,az:-40,bx:160,bz:-40},{ax:172,az:-62,bx:184,bz:-62},{ax:36,az:36,bx:36,bz:48},{ax:-22,az:-110,bx:-36,bz:-110},{ax:36,az:36,bx:22,bz:36},{ax:-8,az:-88,bx:-8,bz:-76},{ax:70,az:-126,bx:70,bz:-140},{ax:22,az:36,bx:8,bz:36},{ax:16,az:-148,bx:28,bz:-148},{ax:-58,az:-88,bx:-58,bz:-76},{ax:-114,az:-158,bx:-114,bz:-148},{ax:68,az:6,bx:68,bz:18},{ax:-122,az:8,bx:-122,bz:-4},{ax:-84,az:8,bx:-84,bz:-4},{ax:-80,az:32,bx:-80,bz:44},{ax:-80,az:44,bx:-80,bz:56},{ax:-40,az:-168,bx:-28,bz:-180},{ax:-64,az:-184,bx:-52,bz:-196},{ax:124,az:-118,bx:138,bz:-118},{ax:8,az:-68,bx:8,bz:-56},{ax:-68,az:2,bx:-68,bz:-10},{ax:-68,az:12,bx:-54,bz:24},{ax:-58,az:-36,bx:-58,bz:-48},{ax:-38,az:28,bx:-38,bz:40},{ax:138,az:-118,bx:138,bz:-132},{ax:40,az:-74,bx:52,bz:-74},{ax:16,az:-86,bx:28,bz:-86},{ax:138,az:-132,bx:138,bz:-146},{ax:-58,az:-76,bx:-70,bz:-76},{ax:-46,az:-88,bx:-46,bz:-100},{ax:138,az:-146,bx:138,bz:-160},{ax:-22,az:-110,bx:-8,bz:-98},{ax:-90,az:-136,bx:-90,bz:-124},{ax:70,az:-140,bx:70,bz:-152},{ax:138,az:-160,bx:138,bz:-174},{ax:52,az:-140,bx:52,bz:-154},{ax:8,az:-110,bx:8,bz:-122},{ax:22,az:-110,bx:22,bz:-122},{ax:138,az:-174,bx:138,bz:-188},{ax:38,az:-132,bx:38,bz:-146},{ax:138,az:-188,bx:138,bz:-202},{ax:52,az:-154,bx:52,bz:-168},{ax:138,az:-202,bx:138,bz:-216},{ax:-46,az:-132,bx:-34,bz:-146},{ax:138,az:-216,bx:138,bz:-230},{ax:22,az:-98,bx:36,bz:-110},{ax:28,az:-162,bx:40,bz:-162},{ax:138,az:-230,bx:138,bz:-244},{ax:46,az:136,bx:60,bz:136},{ax:138,az:-244,bx:138,bz:-258},{ax:36,az:-110,bx:50,bz:-110},{ax:138,az:-258,bx:138,bz:-272},{ax:138,az:-272,bx:138,bz:-286},{ax:138,az:-286,bx:138,bz:-300},{ax:138,az:-300,bx:138,bz:-314},{ax:138,az:-314,bx:138,bz:-328},{ax:-70,az:-76,bx:-82,bz:-76},{ax:-46,az:-100,bx:-58,bz:-100},{ax:32,az:-152,bx:32,bz:-176},{ax:36,az:36,bx:50,bz:36},{ax:36,az:48,bx:50,bz:48},{ax:22,az:36,bx:22,bz:48},{ax:8,az:36,bx:8,bz:48},{ax:46,az:148,bx:60,bz:148},{ax:32,az:136,bx:32,bz:148},{ax:18,az:136,bx:18,bz:148},{ax:50,az:-110,bx:50,bz:-122},{ax:138,az:-328,bx:138,bz:-342},{ax:138,az:-342,bx:138,bz:-356},{ax:138,az:-356,bx:138,bz:-370},{ax:138,az:-370,bx:138,bz:-384},{ax:138,az:-384,bx:138,bz:-398},{ax:50,az:-122,bx:64,bz:-122},{ax:-34,az:-146,bx:-22,bz:-146},{ax:138,az:-398,bx:138,bz:-412},{ax:138,az:-412,bx:138,bz:-426},{ax:138,az:-426,bx:138,bz:-440},{ax:138,az:-440,bx:138,bz:-454},{ax:138,az:-454,bx:138,bz:-468},{ax:138,az:-468,bx:138,bz:-482},{ax:-82,az:-76,bx:-94,bz:-76},{ax:-58,az:-100,bx:-70,bz:-100},{ax:32,az:-176,bx:46,bz:-176},{ax:138,az:-482,bx:138,bz:-496},{ax:60,az:136,bx:74,bz:136},{ax:74,az:136,bx:74,bz:148},{ax:32,az:148,bx:32,bz:160}];let i=0;for(const a of t){const r=a.bx-a.ax,c=a.bz-a.az,l=r*r+c*c;let f=((n-a.ax)*r+(e-a.az)*c)/l;f=Math.min(1,Math.max(0,f));const d=a.ax+r*f,u=a.az+c*f,x=Math.hypot(n-d,e-u);i=Math.max(i,Qa(5.4,1.6,x))}return i}function am(){const n=new Fi(es,es,ic,ic);n.rotateX(-Math.PI/2);const e=n.attributes.position,t=new Float32Array(e.count*3);for(let c=0;c<e.count;c++){const l=e.getX(c),f=e.getZ(c),d=M(l,f);e.setY(c,d)}n.computeVertexNormals();const i=n.attributes.normal;for(let c=0;c<e.count;c++){const l=1-Math.abs(i.getY(c)),f=nm(e.getX(c),e.getZ(c),e.getY(c),l);t[c*3]=f.r,t[c*3+1]=f.g,t[c*3+2]=f.b}n.setAttribute("color",new Xt(t,3));const a=new Fe({vertexColors:!0,roughness:.94,metalness:.02,flatShading:!1}),r=new ot(n,a);return r.receiveShadow=!0,r.name="terrain",r}function sm(){const n=new R;n.name="rocks";const e=[new ut(1,0),new Vr(1,0),new Wr(1,0)],t=[new Fe({color:8011048,roughness:.95,flatShading:!0}),new Fe({color:6040604,roughness:.92,flatShading:!0}),new Fe({color:9260592,roughness:.9,flatShading:!0})],i=new bt,a=[220,160,90];for(let r=0;r<3;r++){const c=new C2(e[r],t[r],a[r]);c.castShadow=!0,c.receiveShadow=!0;let l=0,f=0;for(;l<a[r]&&f<a[r]*8;){f++;const d=(In(l,r,1)-.5)*es*.92,u=(In(l,r,2)-.5)*es*.92;if(Math.hypot(d,u)<42||Math.hypot(d-52,u-24)<22||Math.hypot(d-22,u-82)<18||Math.hypot(d-80,u+44)<44||Math.hypot(d-112,u+83)<22||Math.hypot(d+32,u+98)<20||Math.hypot(d+88,u+188)<30||Math.hypot(d-22,u+112)<16||Math.hypot(d+68,u+16)<22||Math.hypot(d-36,u-72)<20||Math.hypot(d+24,u-44)<20||Math.hypot(d+32,u+148)<16||Math.hypot(d+64,u+90)<14||Math.hypot(d+50,u+100)<22||Math.hypot(d-38,u+126)<16||Math.hypot(d+18,u+88)<14||Math.hypot(d-68,u+10)<16||Math.hypot(d+60,u+148)<12||Math.hypot(d+64,u+118)<12||Math.hypot(d+48,u-68)<20||Math.hypot(d-78,u-56)<20||Math.hypot(d+13,u+134)<20||Math.hypot(d-8,u+142)<16||Math.hypot(d-135,u+40)<24||Math.hypot(d-68,u-6)<16||Math.hypot(d+28,u+138)<12||Math.hypot(d+36,u+74)<18||Math.hypot(d-2,u+22)<12||Math.hypot(d+50,u+72)<14||Math.hypot(d-10,u+124)<16||Math.hypot(d-20,u-8)<16||Math.hypot(d+16,u-136)<32||Math.hypot(d-158,u+62)<24||Math.hypot(d+96,u+16)<20||Math.hypot(d+78,u+172)<16||Math.hypot(d-66,u+74)<16||Math.hypot(d-18,u+152)<14||Math.hypot(d+20,u+100)<14||Math.hypot(d+8,u+162)<14||Math.hypot(d-8,u+98)<14||Math.hypot(d-48,u+70)<14||Math.hypot(d+68,u-12)<16||Math.hypot(d-22,u+80)<14||Math.hypot(d-52,u+112)<16||Math.hypot(d+90,u+158)<14||Math.hypot(d-8,u+78)<14||Math.hypot(d+8,u+88)<14||Math.hypot(d+96,u-4)<14||Math.hypot(d-142,u+62)<14||Math.hypot(d-28,u+140)<14||Math.hypot(d+90,u+148)<12||Math.hypot(d-12,u-18)<12||Math.hypot(d-36,u-8)<14||Math.hypot(d-36,u+6)<14||Math.hypot(d+50,u-4)<14||Math.hypot(d+58,u+142)<14||Math.hypot(d+32,u+22)<14||Math.hypot(d-66,u+90)<14||Math.hypot(d-22,u+98)<14||Math.hypot(d-172,u+48)<14||Math.hypot(d-38,u+104)<14||Math.hypot(d-24,u+128)<12||Math.hypot(d+80,u-20)<14||Math.hypot(d+110,u+136)<14||Math.hypot(d+22,u+110)<14||Math.hypot(d-158,u+48)<14||Math.hypot(d+38,u-28)<14||Math.hypot(d+46,u+132)<14||Math.hypot(d-24,u+118)<14||Math.hypot(d-6,u-148)<12||Math.hypot(d+64,u-80)<14||Math.hypot(d+80,u-32)<14||Math.hypot(d-100,u+22)<12||Math.hypot(d+22,u+56)<14||Math.hypot(d+124,u+188)<16||Math.hypot(d+38,u-16)<14||Math.hypot(d-70,u+112)<16||Math.hypot(d-16,u-48)<12||Math.hypot(d+58,u+36)<14||Math.hypot(d-50,u-4)<14||Math.hypot(d+40,u+168)<14||Math.hypot(d-82,u+90)<14||Math.hypot(d-4,u+148)<14||Math.hypot(d-148,u+40)<14||Math.hypot(d-124,u+70)<14||Math.hypot(d-96,u+44)<14||Math.hypot(d+84,u-8)<14||Math.hypot(d-16,u+86)<14||Math.hypot(d-135,u+22)<14||Math.hypot(d-100,u+70)<14||Math.hypot(d-82,u+28)<14||Math.hypot(d+68,u-2)<14||Math.hypot(d-122,u+40)<14||Math.hypot(d-98,u+83)<14||Math.hypot(d-70,u+44)<14||Math.hypot(d+102,u+158)<14||Math.hypot(d+18,u+78)<14||Math.hypot(d+64,u+184)<14||Math.hypot(d-32,u+152)<14||Math.hypot(d+96,u-16)<14||Math.hypot(d-82,u+74)<14||Math.hypot(d+78,u+156)<14||Math.hypot(d+110,u-8)<14||Math.hypot(d+110,u-20)<14||Math.hypot(d+110,u-32)<14||Math.hypot(d+122,u-8)<14||Math.hypot(d+122,u-20)<14||Math.hypot(d+8,u+98)<14||Math.hypot(d+22,u+98)<14||Math.hypot(d-8,u+88)<14||Math.hypot(d+78,u+36)<14||Math.hypot(d-96,u+90)<14||Math.hypot(d+5,u+78)<12||Math.hypot(d-16,u+148)<14||Math.hypot(d+90,u+136)<14||Math.hypot(d-16,u+74)<12||Math.hypot(d+48,u+138)<14||Math.hypot(d-52,u+126)<14||Math.hypot(d-70,u+126)<14||Math.hypot(d-0,u+68)<12||Math.hypot(d-48,u+70)<12||Math.hypot(d+46,u+148)<12||Math.hypot(d+38,u-16)<12||Math.hypot(d-38,u+104)<12||Math.hypot(d-172,u+48)<12||Math.hypot(d+16,u-36)<12||Math.hypot(d-4,u+138)<12||Math.hypot(d-68,u-6)<12||Math.hypot(d-66,u+104)<14||Math.hypot(d-80,u+104)<12||Math.hypot(d-18,u-136)<14||Math.hypot(d-22,u+98)<12||Math.hypot(d-172,u+62)<14||Math.hypot(d+92,u+184)<14||Math.hypot(d+32,u+88)<14||Math.hypot(d-96,u+104)<14||Math.hypot(d+28,u+8)<12||Math.hypot(d+28,u-6)<12||Math.hypot(d+46,u+88)<14||Math.hypot(d+50,u+22)<14||Math.hypot(d+80,u-20)<14||Math.hypot(d-110,u+90)<14||Math.hypot(d-8,u+110)<14||Math.hypot(d+70,u+148)<14||Math.hypot(d-96,u+28)<14||Math.hypot(d-124,u+83)<14||Math.hypot(d-148,u+22)<14||Math.hypot(d-46,u+152)<14||Math.hypot(d-32,u-136)<14||Math.hypot(d+8,u+110)<14||Math.hypot(d-110,u+104)<14||Math.hypot(d-70,u+28)<14||Math.hypot(d-136,u+70)<14||Math.hypot(d-122,u+22)<14||Math.hypot(d+114,u+158)<14||Math.hypot(d+32,u+36)<14||Math.hypot(d+42,u-6)<14||Math.hypot(d-28,u+74)<14||Math.hypot(d-80,u+118)<14||Math.hypot(d-38,u+132)<14||Math.hypot(d-46,u-136)<14||Math.hypot(d-40,u+140)<14||Math.hypot(d-52,u+90)<14||Math.hypot(d+124,u+136)<14||Math.hypot(d-28,u+162)<14||Math.hypot(d-46,u-148)<14||Math.hypot(d-96,u+118)<14||Math.hypot(d+102,u+148)<14||Math.hypot(d-110,u+118)<14||Math.hypot(d+18,u+36)<14||Math.hypot(d+42,u+8)<14||Math.hypot(d-8,u+68)<14||Math.hypot(d-8,u+162)<14||Math.hypot(d-40,u+74)<14||Math.hypot(d+70,u+136)<14||Math.hypot(d-124,u+90)<14||Math.hypot(d-52,u+140)<14||Math.hypot(d-16,u+136)<14||Math.hypot(d-124,u+104)<14||Math.hypot(d+92,u+172)<14||Math.hypot(d-36,u+128)<14||Math.hypot(d+58,u+88)<14||Math.hypot(d-36,u-36)<14||Math.hypot(d-22,u+110)<14||Math.hypot(d-108,u+44)<14||Math.hypot(d+64,u+172)<14||Math.hypot(d-124,u+118)<14||Math.hypot(d-136,u+83)<14||Math.hypot(d-160,u+40)<14||Math.hypot(d-184,u+62)<14||Math.hypot(d-36,u-48)<14||Math.hypot(d+36,u+110)<14||Math.hypot(d-22,u-36)<14||Math.hypot(d+8,u+76)<14||Math.hypot(d-70,u+140)<16||Math.hypot(d-8,u-36)<14||Math.hypot(d-28,u+148)<14||Math.hypot(d+58,u+76)<14||Math.hypot(d+114,u+148)<14||Math.hypot(d-68,u-18)<16||Math.hypot(d+122,u+4)<16||Math.hypot(d+84,u+4)<14||Math.hypot(d+80,u-44)<14||Math.hypot(d+80,u-56)<14||Math.hypot(d+28,u+180)<14||Math.hypot(d+52,u+196)<14||Math.hypot(d-138,u+118)<14||Math.hypot(d-8,u+56)<14||Math.hypot(d+68,u+10)<14||Math.hypot(d+54,u-24)<16||Math.hypot(d+58,u+48)<14||Math.hypot(d+38,u-40)<14||Math.hypot(d-138,u+132)<14||Math.hypot(d-52,u+74)<14||Math.hypot(d-28,u+86)<14||Math.hypot(d-138,u+146)<14||Math.hypot(d+70,u+76)<14||Math.hypot(d+46,u+100)<14||Math.hypot(d-138,u+160)<14||Math.hypot(d+8,u+98)<14||Math.hypot(d+90,u+124)<14||Math.hypot(d-70,u+152)<14||Math.hypot(d-138,u+174)<14||Math.hypot(d-52,u+154)<14||Math.hypot(d-8,u+122)<14||Math.hypot(d-22,u+122)<14||Math.hypot(d-138,u+188)<14||Math.hypot(d-38,u+146)<14||Math.hypot(d-138,u+202)<14||Math.hypot(d-52,u+168)<14||Math.hypot(d-138,u+216)<14||Math.hypot(d+34,u+146)<14||Math.hypot(d-138,u+230)<14||Math.hypot(d-36,u+110)<14||Math.hypot(d-40,u+162)<14||Math.hypot(d-138,u+244)<14||Math.hypot(d-60,u-136)<14||Math.hypot(d-138,u+258)<14||Math.hypot(d-50,u+110)<14||Math.hypot(d-138,u+272)<14||Math.hypot(d-138,u+286)<14||Math.hypot(d-138,u+300)<14||Math.hypot(d-138,u+314)<14||Math.hypot(d-138,u+328)<14||Math.hypot(d+82,u+76)<14||Math.hypot(d+58,u+100)<14||Math.hypot(d-32,u+176)<14||Math.hypot(d-50,u-36)<14||Math.hypot(d-50,u-48)<14||Math.hypot(d-22,u-48)<14||Math.hypot(d-8,u-48)<14||Math.hypot(d-60,u-148)<14||Math.hypot(d-32,u-148)<14||Math.hypot(d-18,u-148)<14||Math.hypot(d-50,u+122)<14||Math.hypot(d-138,u+342)<14||Math.hypot(d-138,u+356)<14||Math.hypot(d-138,u+370)<14||Math.hypot(d-138,u+384)<14||Math.hypot(d-138,u+398)<14||Math.hypot(d-64,u+122)<14||Math.hypot(d+22,u+146)<14||Math.hypot(d-138,u+412)<14||Math.hypot(d-138,u+426)<14||Math.hypot(d-138,u+440)<14||Math.hypot(d-138,u+454)<14||Math.hypot(d-138,u+468)<14||Math.hypot(d-138,u+482)<14||Math.hypot(d+94,u+76)<14||Math.hypot(d+70,u+100)<14||Math.hypot(d-46,u+176)<14||Math.hypot(d-138,u+496)<14||Math.hypot(d-74,u-136)<14||Math.hypot(d-74,u-148)<14||Math.hypot(d-32,u-160)<14)continue;const x=M(d,u),m=.35+In(l,r,3)*(r===2?2.8:1.4);i.position.set(d,x+m*.25,u),i.rotation.set(In(l,r,4)*6,In(l,r,5)*6,In(l,r,6)*6),i.scale.set(m,m*(.6+In(l,r,7)*.7),m*(.7+In(l,r,8)*.5)),i.updateMatrix(),c.setMatrixAt(l,i.matrix),l++}c.count=l,n.add(c)}return n}function In(n,e,t){const i=Math.sin(n*12.9898+e*78.233+t*45.164)*43758.5453;return i-Math.floor(i)}const rm=`
varying vec3 vWorld;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWorld = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}
`,om=`
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
`;function cm(n){const e=new _t(900,32,20),t=new Sn({vertexShader:rm,fragmentShader:om,uniforms:{uSunDir:{value:n.clone().normalize()}},side:Lt,depthWrite:!1}),i=new ot(e,t);return i.name="sky",i}function dm(n){const e=new R,t=n.clone().normalize(),i=new Z2(16769456,2.15);i.position.copy(t.clone().multiplyScalar(180)),i.castShadow=!0,i.shadow.mapSize.set(1536,1536),i.shadow.camera.near=10,i.shadow.camera.far=420,i.shadow.camera.left=-130,i.shadow.camera.right=130,i.shadow.camera.top=130,i.shadow.camera.bottom=-130,i.shadow.bias=-8e-4,e.add(i);const a=new Y2(14727304,6959128,.55);e.add(a);const r=new $2(12611648,.16);e.add(r);const c=new ot(new _t(7,16,16),new Fr({color:16773572}));return c.position.copy(t.clone().multiplyScalar(420)),e.add(c),e.name="sun",e}function lm(){const n=new R;n.name="mountains";const e=new Fe({color:7024156,roughness:1,flatShading:!0}),t=[[0,-300,18,70],[80,-310,14,52],[-90,-305,16,60],[220,-280,12,40],[-240,-270,13,48],[300,-40,15,55],[305,80,11,38],[-310,20,16,62],[-300,140,12,44],[40,310,17,58],[-70,300,13,46],[160,290,10,36]];for(const[i,a,r,c]of t){const l=new ii(r,c,6),f=new ot(l,e),d=M(i,a)+c*.35;f.position.set(i,d,a),f.rotation.y=(i+a)*.01,n.add(f)}return n}function hm(){const e=new Float32Array(2100);for(let r=0;r<700;r++)e[r*3]=(Math.random()-.5)*220,e[r*3+1]=1+Math.random()*18,e[r*3+2]=(Math.random()-.5)*220;const t=new Ut;t.setAttribute("position",new Xt(e,3));const i=new Bc({color:13934698,size:.18,transparent:!0,opacity:.35,depthWrite:!1}),a=new P2(t,i);return a.name="dust",a}function um(n){n.fog=new Hr(12880472,.00155),n.background=new We(12880472)}const s={steel:new Fe({color:13225425,metalness:.88,roughness:.28}),steelDark:new Fe({color:9146518,metalness:.82,roughness:.38}),tiles:new Fe({color:1710620,metalness:.15,roughness:.72}),soot:new Fe({color:2763308,metalness:.4,roughness:.55}),pad:new Fe({color:7168600,metalness:.08,roughness:.88}),padRing:new Fe({color:4866876,metalness:.1,roughness:.8}),solar:new Fe({color:727603,metalness:.55,roughness:.22}),solarFrame:new Fe({color:10133670,metalness:.7,roughness:.35}),tankCh4:new Fe({color:12868132,metalness:.35,roughness:.45}),tankO2:new Fe({color:14212579,metalness:.4,roughness:.4}),hab:new Fe({color:13616824,metalness:.15,roughness:.62}),habDark:new Fe({color:6972508,metalness:.2,roughness:.55}),glass:new Fe({color:8963232,metalness:.1,roughness:.18,transparent:!0,opacity:.42,depthWrite:!1}),plant:new Fe({color:4160056,roughness:.85}),rover:new Fe({color:12106944,metalness:.55,roughness:.4}),roverDark:new Fe({color:3356218,metalness:.4,roughness:.5}),crate:new Fe({color:9080724,metalness:.45,roughness:.5}),ice:new Fe({color:14083823,metalness:.05,roughness:.35}),rust:new Fe({color:8011560,roughness:.9}),glowWarm:new Fe({color:16761994,emissive:16751178,emissiveIntensity:.85,roughness:.4}),glowPad:new Fe({color:16765056,emissive:16756800,emissiveIntensity:.7}),concrete:new Fe({color:9076852,roughness:.92}),lattice:new Fe({color:10133668,metalness:.7,roughness:.4}),graded:new Fe({color:6968134,roughness:.94,metalness:.04}),pipe:new Fe({color:8030868,metalness:.55,roughness:.4}),cable:new Fe({color:2762274,metalness:.35,roughness:.55}),robot:new Fe({color:13159632,metalness:.62,roughness:.38}),flagIce:new Fe({color:12966116,roughness:.72,metalness:.04}),flagDeposit:new Fe({color:12081704,roughness:.8,metalness:.06}),track:new Fe({color:4006936,roughness:.97}),roadBed:new Fe({color:6044202,roughness:.97,metalness:.02}),soil:new Fe({color:4861468,roughness:.96}),plantLeaf:new Fe({color:3107378,roughness:.88}),dish:new Fe({color:14210252,metalness:.38,roughness:.42}),suit:new Fe({color:15131352,metalness:.18,roughness:.55}),suitDark:new Fe({color:6052438,metalness:.35,roughness:.5}),visor:new Fe({color:12886090,metalness:.75,roughness:.18,emissive:3811336,emissiveIntensity:.28}),battery:new Fe({color:3817026,metalness:.48,roughness:.48})};function fm(n,e="#1c120c",t="#f3e2cc"){const i=document.createElement("canvas");i.width=512,i.height=128;const a=i.getContext("2d");a.fillStyle=e,a.fillRect(0,0,512,128),a.strokeStyle=t,a.lineWidth=6,a.strokeRect(10,10,492,108),a.fillStyle=t;const r=n.length>12?36:n.length>8?44:n.length>5?54:64;a.font=`bold ${r}px sans-serif`,a.textAlign="center",a.textBaseline="middle",a.fillText(n,256,68);const c=new D2(i);return c.colorSpace=kt,c}function o(n,e,t,i,a,r=0,c=0,l=0){const f=new ot(n,e);return f.position.set(t,i,a),f.rotation.set(r,c,l),f.castShadow=!0,f.receiveShadow=!0,f}function Pt(n,e,t=0){return[n,M(n,e)+t,e]}function p(n,e,t,i,a,r,c,l,f=0){const d=new Fe({map:fm(n,e,t),side:dn,roughness:.55,metalness:.08}),u=new ot(new Fi(i,a),d);return u.position.set(r,c,l),u.rotation.y=f,u.castShadow=!1,u}function J(n,e,t,i=0,a=1){const r=M(e,t)+.85*a;n.add(o(new h(1.7*a,1.5*a,1.7*a),s.crate,e,r,t,0,i,0)),n.add(o(new h(1.78*a,.08,1.78*a),s.steelDark,e,r+.78*a,t,0,i,0))}function pm(){const n=new R;n.name="settlement";const e=[],t=[];n.add(Jn(0,0,{finished:!0}));const i=Mi(0,0,{name:"starship",crewHab:!0});n.add(i),$m(e),t.push({id:"starship",name:"Crew hab Starship",position:new _(0,18,0)}),t.push({id:"eva",name:"EVA / airlock",position:new _(2,3,12)});const a=T4();n.add(a),e.push({type:"box",x:12,z:18,w:6,d:3}),t.push({id:"evarack",name:"EVA suit rack",position:new _(12,3,18)}),n.add(Jn(52,24,{finished:!1}));const r=Mi(52,24,{name:"cargo-starship",cargoOpen:!0});n.add(r),e.push({type:"cyl",x:52,z:24,r:7.4}),t.push({id:"cargo",name:"Cargo Starship",position:new _(52,18,24)}),n.add(Jn(36,72,{finished:!1}));const c=Mi(36,72,{name:"cargo-3",cargoOpen:!0});n.add(c),e.push({type:"cyl",x:36,z:72,r:7.4}),t.push({id:"cargo3",name:"Cargo Starship 3",position:new _(36,18,72)}),n.add(ac(24,70)),n.add(Jn(-24,44,{finished:!1}));const l=Mi(-24,44,{name:"cargo-4"});n.add(l),e.push({type:"cyl",x:-24,z:44,r:7.4}),t.push({id:"cargo4",name:"Cargo Starship 4",position:new _(-24,18,44)}),n.add(Jn(-48,68,{finished:!1}));const f=Mi(-48,68,{name:"cargo-5",cargoOpen:!0});n.add(f),e.push({type:"cyl",x:-48,z:68,r:7.4}),t.push({id:"cargo5",name:"Window-2 cargo Starship",position:new _(-48,18,68)}),n.add(ac(-60,66));const d=k4();n.add(d),e.push({type:"box",x:-64,z:80,w:8,d:8}),t.push({id:"crane",name:"Window-2 cargo crane",position:new _(-64,8,80)}),n.add(Jn(78,56,{finished:!1}));const u=Mi(78,56,{name:"cargo-6"});n.add(u),e.push({type:"cyl",x:78,z:56,r:7.4}),t.push({id:"cargo6",name:"Window-2 cargo Starship",position:new _(78,18,56)}),n.add(mm()),n.add(xm()),n.add(gm()),n.add(wm()),t.push({id:"prep",name:"Landing prep",position:new _(22,4,82)});const x=q4();n.add(x),e.push({type:"box",x:16,z:48,w:6,d:5});for(const[Gi,Vi]of[[4,68],[4,50],[4,32]])e.push({type:"cyl",x:Gi,z:Vi,r:.45});t.push({id:"aplights",name:"Pad approach lights",position:new _(16,4,48)});const m=B8();n.add(m),e.push({type:"box",x:-16,z:36,w:8,d:6}),t.push({id:"padflood",name:"Pad flood lights",position:new _(-16,4,36)}),n.add(r4()),e.push({type:"box",x:-38,z:148,w:10,d:8}),t.push({id:"pad2",name:"Next-window pad",position:new _(-16,6,136)}),t.push({id:"sinter",name:"Pad sinter rig",position:new _(-38,4,148)});const g=F4();n.add(g),e.push({type:"box",x:6,z:148,w:6,d:5});for(const[Gi,Vi]of[[2,154],[-34,154],[2,118],[-34,118]])e.push({type:"cyl",x:Gi,z:Vi,r:.55});t.push({id:"beacons",name:"Pad 2 landing beacons",position:new _(6,5,148)});const v=X8();n.add(v),e.push({type:"box",x:18,z:136,w:10,d:6}),t.push({id:"roller",name:"Pad sinter roller",position:new _(18,4,136)});const y=ug();n.add(y),e.push({type:"box",x:18,z:148,w:10,d:6}),t.push({id:"pad2roller2",name:"Pad 2 sinter roller 2",position:new _(18,4,148)});const b=m3();n.add(b),e.push({type:"box",x:32,z:136,w:10,d:8}),t.push({id:"pad2bricks",name:"Pad 2 sinter bricks",position:new _(32,4,136)});const w=hg();n.add(w),e.push({type:"box",x:32,z:148,w:10,d:8}),t.push({id:"pad2bricks2",name:"Pad 2 sinter bricks 2",position:new _(32,4,148)});const z=Ig();n.add(z),e.push({type:"box",x:32,z:160,w:10,d:8}),t.push({id:"pad2bricks3",name:"Pad 2 sinter bricks 3",position:new _(32,4,160)});const D=A3();n.add(D),e.push({type:"box",x:46,z:136,w:10,d:8}),t.push({id:"pad2cargo",name:"Pad 2 spare cargo",position:new _(46,4,136)});const E=Jx();n.add(E),e.push({type:"box",x:60,z:136,w:10,d:8}),t.push({id:"pad2cargo2",name:"Pad 2 spare cargo 2",position:new _(60,4,136)});const H=Dg();n.add(H),e.push({type:"box",x:74,z:136,w:10,d:8}),t.push({id:"pad2cargo3",name:"Pad 2 spare cargo 3",position:new _(74,4,136)});const L=z3();n.add(L),e.push({type:"box",x:46,z:148,w:10,d:8}),t.push({id:"pad2unload",name:"Pad 2 spare unloader",position:new _(46,4,148)});const U=lg();n.add(U),e.push({type:"box",x:60,z:148,w:10,d:8}),t.push({id:"pad2unload2",name:"Pad 2 spare unloader 2",position:new _(60,4,148)});const O=zg();n.add(O),e.push({type:"box",x:74,z:148,w:10,d:8}),t.push({id:"pad2unload3",name:"Pad 2 spare unloader 3",position:new _(74,4,148)});const C=J3();n.add(C),e.push({type:"box",x:36,z:36,w:10,d:8}),t.push({id:"pad1cargo",name:"Pad 1 spare cargo",position:new _(36,4,36)});const T=rg();n.add(T),e.push({type:"box",x:50,z:36,w:10,d:8}),t.push({id:"pad1cargo2",name:"Pad 1 spare cargo 2",position:new _(50,4,36)});const N=Z3();n.add(N),e.push({type:"box",x:22,z:-110,w:10,d:8}),t.push({id:"dscrub",name:"Spare hab dust scrub",position:new _(22,4,-110)});const K=$x();n.add(K),e.push({type:"box",x:50,z:-110,w:10,d:8}),t.push({id:"dscrub2",name:"Spare hab dust scrub 2",position:new _(50,4,-110)});const q=$3();n.add(q),e.push({type:"box",x:108,z:-44,w:10,d:8}),t.push({id:"f1str",name:"Farm 1 spare string",position:new _(108,4,-44)});const j=j3();n.add(j),e.push({type:"box",x:-64,z:-172,w:8,d:6}),t.push({id:"mine2light",name:"Ice mine 2 lights",position:new _(-64,4,-172)});const ae=Q3();n.add(ae),e.push({type:"box",x:124,z:-118,w:10,d:8}),t.push({id:"shopcrate",name:"Spare shop parts crate",position:new _(124,4,-118)});const Q=_x();n.add(Q),e.push({type:"box",x:138,z:-118,w:10,d:8}),t.push({id:"shopdrill",name:"Spare workshop drill press",position:new _(138,4,-118)});const ce=Ex();n.add(ce),e.push({type:"box",x:138,z:-132,w:10,d:8}),t.push({id:"shopsaw",name:"Spare workshop bandsaw",position:new _(138,4,-132)});const $=Rx();n.add($),e.push({type:"box",x:138,z:-146,w:10,d:8}),t.push({id:"shopshear",name:"Spare workshop shear",position:new _(138,4,-146)});const ue=Dx();n.add(ue),e.push({type:"box",x:138,z:-160,w:10,d:8}),t.push({id:"shoppress",name:"Spare workshop press",position:new _(138,4,-160)});const we=Ux();n.add(we),e.push({type:"box",x:138,z:-174,w:10,d:8}),t.push({id:"shopweld2",name:"Spare workshop welder 2",position:new _(138,4,-174)});const Re=kx();n.add(Re),e.push({type:"box",x:138,z:-188,w:10,d:8}),t.push({id:"shopmill2",name:"Spare workshop mill 2",position:new _(138,4,-188)});const Xe=Hx();n.add(Xe),e.push({type:"box",x:138,z:-202,w:10,d:8}),t.push({id:"shoplathe2",name:"Spare workshop lathe 2",position:new _(138,4,-202)});const it=Vx();n.add(it),e.push({type:"box",x:138,z:-216,w:10,d:8}),t.push({id:"shopvise2",name:"Spare workshop vise 2",position:new _(138,4,-216)});const te=Xx();n.add(te),e.push({type:"box",x:138,z:-230,w:10,d:8}),t.push({id:"shopgrind2",name:"Spare workshop grinder 2",position:new _(138,4,-230)});const de=Kx();n.add(de),e.push({type:"box",x:138,z:-244,w:10,d:8}),t.push({id:"shophoist2",name:"Spare workshop hoist 2",position:new _(138,4,-244)});const Ee=Zx();n.add(Ee),e.push({type:"box",x:138,z:-258,w:10,d:8}),t.push({id:"shopair2",name:"Spare workshop air 2",position:new _(138,4,-258)});const fe=jx();n.add(fe),e.push({type:"box",x:138,z:-272,w:10,d:8}),t.push({id:"shopcrate2",name:"Spare shop parts crate 2",position:new _(138,4,-272)});const Le=Qx();n.add(Le),e.push({type:"box",x:138,z:-286,w:10,d:8}),t.push({id:"shopdrill2",name:"Spare workshop drill 2",position:new _(138,4,-286)});const Oe=eg();n.add(Oe),e.push({type:"box",x:138,z:-300,w:10,d:8}),t.push({id:"shopsaw2",name:"Spare workshop bandsaw 2",position:new _(138,4,-300)});const qe=tg();n.add(qe),e.push({type:"box",x:138,z:-314,w:10,d:8}),t.push({id:"shopshear2",name:"Spare workshop shear 2",position:new _(138,4,-314)});const ft=ng();n.add(ft),e.push({type:"box",x:138,z:-328,w:10,d:8}),t.push({id:"shoppress2",name:"Spare workshop press 2",position:new _(138,4,-328)});const Ze=pg();n.add(Ze),e.push({type:"box",x:138,z:-342,w:10,d:8}),t.push({id:"shopmill3",name:"Spare workshop mill 3",position:new _(138,4,-342)});const xt=mg();n.add(xt),e.push({type:"box",x:138,z:-356,w:10,d:8}),t.push({id:"shoplathe3",name:"Spare workshop lathe 3",position:new _(138,4,-356)});const G=xg();n.add(G),e.push({type:"box",x:138,z:-370,w:10,d:8}),t.push({id:"shopvise3",name:"Spare workshop vise 3",position:new _(138,4,-370)});const Nt=gg();n.add(Nt),e.push({type:"box",x:138,z:-384,w:10,d:8}),t.push({id:"shopgrind3",name:"Spare workshop grinder 3",position:new _(138,4,-384)});const Ye=wg();n.add(Ye),e.push({type:"box",x:138,z:-398,w:10,d:8}),t.push({id:"shophoist3",name:"Spare workshop hoist 3",position:new _(138,4,-398)});const Ke=_g();n.add(Ke),e.push({type:"box",x:64,z:-122,w:8,d:6}),t.push({id:"blower3",name:"Hab spare blower 3",position:new _(64,4,-122)});const ze=bg();n.add(ze),e.push({type:"box",x:-22,z:-146,w:10,d:8}),t.push({id:"melt5",name:"Spare ice-melt still 5",position:new _(-22,4,-146)});const ct=vg();n.add(ct),e.push({type:"box",x:138,z:-412,w:10,d:8}),t.push({id:"shopair3",name:"Spare shop-air 3",position:new _(138,4,-412)});const De=Mg();n.add(De),e.push({type:"box",x:138,z:-426,w:10,d:8}),t.push({id:"shopcrate3",name:"Spare shop crate 3",position:new _(138,4,-426)});const I=yg();n.add(I),e.push({type:"box",x:138,z:-440,w:10,d:8}),t.push({id:"shopdrill3",name:"Spare workshop drill 3",position:new _(138,4,-440)});const S=Sg();n.add(S),e.push({type:"box",x:138,z:-454,w:10,d:8}),t.push({id:"shopband3",name:"Spare workshop bandsaw 3",position:new _(138,4,-454)});const V=Eg();n.add(V),e.push({type:"box",x:138,z:-468,w:10,d:8}),t.push({id:"shopshear3",name:"Spare workshop shear 3",position:new _(138,4,-468)});const ne=Tg();n.add(ne),e.push({type:"box",x:138,z:-482,w:10,d:8}),t.push({id:"shoppress3",name:"Spare workshop press 3",position:new _(138,4,-482)});const se=Pg();n.add(se),e.push({type:"box",x:138,z:-496,w:10,d:8}),t.push({id:"shopweld3",name:"Spare workshop welder 3",position:new _(138,4,-496)});const ee=ex();n.add(ee),e.push({type:"box",x:136,z:-83,w:10,d:8}),t.push({id:"f2str",name:"Field 2 spare string",position:new _(136,4,-83)});const Te=tx();n.add(Te),e.push({type:"box",x:160,z:-40,w:10,d:8}),t.push({id:"f3str",name:"Field 3 spare string",position:new _(160,4,-40)});const pe=nx();n.add(pe),e.push({type:"box",x:184,z:-62,w:10,d:8}),t.push({id:"f4str",name:"Field 4 spare string",position:new _(184,4,-62)});const _e=ix();n.add(_e),e.push({type:"box",x:36,z:48,w:10,d:8}),t.push({id:"pad1unload",name:"Pad 1 spare unloader",position:new _(36,4,48)});const $e=og();n.add($e),e.push({type:"box",x:50,z:48,w:10,d:8}),t.push({id:"pad1unload2",name:"Pad 1 spare unloader 2",position:new _(50,4,48)});const re=ax();n.add(re),e.push({type:"box",x:-36,z:-110,w:10,d:8}),t.push({id:"wastesp",name:"Spare waste recovery",position:new _(-36,4,-110)});const be=sx();n.add(be),e.push({type:"box",x:22,z:36,w:10,d:8}),t.push({id:"pad1bricks",name:"Pad 1 sinter bricks",position:new _(22,4,36)});const Ie=cg();n.add(Ie),e.push({type:"box",x:22,z:48,w:10,d:8}),t.push({id:"pad1bricks2",name:"Pad 1 sinter bricks 2",position:new _(22,4,48)});const Ue=rx();n.add(Ue),e.push({type:"box",x:-8,z:-76,w:10,d:8}),t.push({id:"o2buf3",name:"Spare crew O2 buffer",position:new _(-8,4,-76)});const ve=ox();n.add(ve),e.push({type:"box",x:70,z:-140,w:14,d:9}),t.push({id:"food5",name:"Spare grow vault",position:new _(70,4,-140)});const Je=cx();n.add(Je),e.push({type:"box",x:8,z:36,w:10,d:6}),t.push({id:"pad1roller",name:"Pad 1 sinter roller",position:new _(8,4,36)});const He=dg();n.add(He),e.push({type:"box",x:8,z:48,w:10,d:6}),t.push({id:"pad1roller2",name:"Pad 1 sinter roller 2",position:new _(8,4,48)});const at=dx();n.add(at),e.push({type:"box",x:28,z:-148,w:10,d:8}),t.push({id:"commshpa",name:"Spare Earth-link HPA",position:new _(28,4,-148)});const F=lx();n.add(F),e.push({type:"box",x:-58,z:-76,w:10,d:8}),t.push({id:"n2b",name:"Spare hab N2 2",position:new _(-58,4,-76)});const he=Cx();n.add(he),e.push({type:"box",x:-70,z:-76,w:10,d:8}),t.push({id:"n2c",name:"Spare hab N2 3",position:new _(-70,4,-76)});const Z=ig();n.add(Z),e.push({type:"box",x:-82,z:-76,w:10,d:8}),t.push({id:"n2d",name:"Spare hab N2 4",position:new _(-82,4,-76)});const ie=Ag();n.add(ie),e.push({type:"box",x:-94,z:-76,w:10,d:8}),t.push({id:"n2e",name:"Spare hab N2 5",position:new _(-94,4,-76)});const ge=hx();n.add(ge),e.push({type:"box",x:-114,z:-148,w:10,d:8}),t.push({id:"crushscreen",name:"Spare ice crush screen",position:new _(-114,4,-148)});const me=ux();n.add(me),e.push({type:"box",x:68,z:18,w:16,d:8}),t.push({id:"padnight",name:"Spare pad night store",position:new _(68,4,18)});const ke=fx();n.add(ke),e.push({type:"box",x:-122,z:-4,w:12,d:8}),t.push({id:"electrosp",name:"Spare ISRU electrolysis",position:new _(-122,5,-4)});const mt=px();n.add(mt),e.push({type:"box",x:-84,z:-4,w:10,d:8}),t.push({id:"knocksp",name:"Spare Sabatier knockout",position:new _(-84,5,-4)});const yt=mx();n.add(yt),e.push({type:"box",x:-80,z:44,w:10,d:8}),t.push({id:"chillsp",name:"Spare CH4 chiller",position:new _(-80,5,44)});const nt=xx();n.add(nt),e.push({type:"box",x:-80,z:56,w:10,d:8}),t.push({id:"o2chillsp",name:"Spare O2 chiller",position:new _(-80,5,56)});const Bt=_m();n.add(Bt),t.push({id:"solar",name:"Solar farm",position:new _(82,6,-44)});const Kt=d8();n.add(Kt),e.push({type:"box",x:70,z:-44,w:1.2,d:22}),t.push({id:"fence1",name:"Farm 1 dust fence",position:new _(70,4,-44)});const da=e8();n.add(da),e.push({type:"box",x:96,z:-44,w:10,d:8}),t.push({id:"comb1",name:"Farm 1 combiner",position:new _(96,4,-44)});const la=s8();n.add(la),e.push({type:"box",x:82,z:-28,w:12,d:8}),t.push({id:"night1",name:"Farm 1 night store",position:new _(82,4,-28)});const pn=h3();n.add(pn),e.push({type:"box",x:96,z:-28,w:8,d:6}),t.push({id:"farm1light",name:"Farm 1 lights",position:new _(96,4,-28)});const Hi=w3();n.add(Hi),e.push({type:"box",x:70,z:-28,w:10,d:8}),t.push({id:"inv1",name:"Farm 1 spare inverter",position:new _(70,4,-28)});const ha=Rm();n.add(ha),t.push({id:"solar2",name:"Solar field 2",position:new _(112,5,-83)});const ua=c8();n.add(ua),e.push({type:"box",x:98,z:-83,w:1.2,d:22}),t.push({id:"fence2",name:"Field 2 dust fence",position:new _(98,4,-83)});const si=Q4();n.add(si),e.push({type:"box",x:124,z:-70,w:10,d:8}),t.push({id:"comb2",name:"Field 2 combiner",position:new _(124,4,-70)});const fa=a8();n.add(fa),e.push({type:"box",x:100,z:-70,w:12,d:8}),t.push({id:"night2",name:"Field 2 night store",position:new _(100,4,-70)});const ri=u3();n.add(ri),e.push({type:"box",x:124,z:-83,w:8,d:6}),t.push({id:"field2light",name:"Field 2 lights",position:new _(124,4,-83)});const pa=_3();n.add(pa),e.push({type:"box",x:136,z:-70,w:10,d:8}),t.push({id:"inv2",name:"Field 2 spare inverter",position:new _(136,4,-70)});const ma=Qm();n.add(ma),t.push({id:"solar3",name:"Solar field 3",position:new _(135,5,-40)});const as=o8();n.add(as),e.push({type:"box",x:122,z:-40,w:1.2,d:22}),t.push({id:"fence3",name:"Field 3 dust fence",position:new _(122,4,-40)});const ss=j4();n.add(ss),e.push({type:"box",x:148,z:-40,w:10,d:8}),t.push({id:"comb3",name:"Field 3 combiner",position:new _(148,4,-40)});const rs=i8();n.add(rs),e.push({type:"box",x:135,z:-22,w:12,d:8}),t.push({id:"night3",name:"Field 3 night store",position:new _(135,4,-22)});const A=f3();n.add(A),e.push({type:"box",x:148,z:-22,w:8,d:6}),t.push({id:"field3light",name:"Field 3 lights",position:new _(148,4,-22)});const k=b3();n.add(k),e.push({type:"box",x:122,z:-22,w:10,d:8}),t.push({id:"inv3",name:"Field 3 spare inverter",position:new _(122,4,-22)});const W=c4();n.add(W),e.push({type:"box",x:158,z:-28,w:12,d:8}),t.push({id:"solar4",name:"Solar field 4",position:new _(158,5,-62)});const X=k8();n.add(X),e.push({type:"box",x:172,z:-48,w:8,d:6}),t.push({id:"sol4light",name:"Field 4 lights",position:new _(172,4,-48)});const B=Y8();n.add(B),e.push({type:"box",x:172,z:-62,w:10,d:8}),t.push({id:"inv4",name:"Field 4 spare inverter",position:new _(172,4,-62)});const oe=o3();n.add(oe),e.push({type:"box",x:158,z:-48,w:12,d:8}),t.push({id:"night4",name:"Field 4 night store",position:new _(158,4,-48)});const xe=S4();n.add(xe),e.push({type:"box",x:142,z:-62,w:1.2,d:22}),t.push({id:"dustfence",name:"Solar dust fence",position:new _(142,4,-62)});const Me=L4();n.add(Me),e.push({type:"box",x:172,z:-48,w:10,d:8}),t.push({id:"combiner",name:"Field 4 combiner",position:new _(172,4,-48)});const ye=H4();n.add(ye),e.push({type:"box",x:100,z:-22,w:8,d:6}),t.push({id:"trench",name:"Field 4 power trench",position:new _(100,3,-22)}),n.add(bm()),n.add(Cm());const Ne=Mm();n.add(Ne),e.push({type:"box",x:-68,z:-16,w:30,d:22}),t.push({id:"isru",name:"Sabatier ISRU",position:new _(-68,8,-16)});const Be=e3();n.add(Be),e.push({type:"box",x:-50,z:-22,w:10,d:8}),t.push({id:"catalyst",name:"Spare Sabatier catalyst",position:new _(-50,4,-22)});const Se=r8();n.add(Se),e.push({type:"box",x:-68,z:2,w:12,d:8}),t.push({id:"co2t1",name:"CO2 intake 1",position:new _(-68,5,2)});const je=vx();n.add(je),e.push({type:"box",x:-68,z:-10,w:12,d:8}),t.push({id:"co2insp",name:"Spare CO2 intake",position:new _(-68,5,-10)});const st=t3();n.add(st),e.push({type:"box",x:-80,z:20,w:10,d:8}),t.push({id:"co2sp",name:"Spare CO2 compressor",position:new _(-80,4,20)});const dt=g4();n.add(dt),e.push({type:"box",x:-68,z:12,w:16,d:6}),t.push({id:"radiators",name:"ISRU radiators",position:new _(-68,5,12)});const Et=Mx();n.add(Et),e.push({type:"box",x:-54,z:24,w:16,d:6}),t.push({id:"radssp",name:"Spare ISRU radiators",position:new _(-54,5,24)});const et=t8();n.add(et),e.push({type:"box",x:-84,z:8,w:10,d:8}),t.push({id:"condense",name:"Sabatier condenser",position:new _(-84,5,8)});const Ae=d4();n.add(Ae),e.push({type:"box",x:-96,z:-16,w:18,d:18}),t.push({id:"isru2",name:"Sabatier train 2",position:new _(-96,8,-16)});const Jt=y4();n.add(Jt),e.push({type:"box",x:-96,z:4,w:12,d:8}),t.push({id:"co2cap",name:"CO2 intake 2",position:new _(-96,5,4)});const tt=p8();n.add(tt),e.push({type:"box",x:-96,z:16,w:16,d:6}),t.push({id:"radiators2",name:"ISRU radiators 2",position:new _(-96,5,16)});const Ht=g8();n.add(Ht),e.push({type:"box",x:-110,z:8,w:10,d:8}),t.push({id:"condense2",name:"Sabatier condenser 2",position:new _(-110,5,8)});const Tn=w8();n.add(Tn),e.push({type:"box",x:-110,z:20,w:10,d:8}),t.push({id:"chiller2",name:"CH4 liquefaction 2",position:new _(-110,5,20)});const Dt=_8();n.add(Dt),e.push({type:"box",x:-110,z:32,w:10,d:8}),t.push({id:"o2chill2",name:"O2 liquefaction 2",position:new _(-110,5,32)});const kn=b8();n.add(kn),e.push({type:"box",x:-122,z:8,w:12,d:8}),t.push({id:"electro2",name:"ISRU electrolysis 2",position:new _(-122,5,8)});const lt=v8();n.add(lt),e.push({type:"box",x:-122,z:20,w:10,d:8}),t.push({id:"h2tank2",name:"H2 recycle tank 2",position:new _(-122,5,20)});const qt=C4();n.add(qt),e.push({type:"box",x:-50,z:4,w:12,d:8}),t.push({id:"electro",name:"ISRU electrolysis",position:new _(-50,5,4)});const Bn=O8();n.add(Bn),e.push({type:"box",x:-38,z:16,w:8,d:6}),t.push({id:"isrulight",name:"ISRU plant lights",position:new _(-38,4,16)});const Ot=W4();n.add(Ot),e.push({type:"box",x:-38,z:16,w:10,d:8}),t.push({id:"h2tank",name:"H2 recycle tank",position:new _(-38,5,16)});const an=n3();n.add(an),e.push({type:"box",x:-38,z:28,w:10,d:8}),t.push({id:"h2dry",name:"Spare H2 dryer",position:new _(-38,4,28)});const sn=Sx();n.add(sn),e.push({type:"box",x:-38,z:40,w:10,d:8}),t.push({id:"h2sp",name:"Spare H2 recycle",position:new _(-38,5,40)});const xa=Y4();n.add(xa),e.push({type:"box",x:-58,z:-36,w:12,d:8}),t.push({id:"pwater",name:"ISRU process water",position:new _(-58,5,-36)});const Vc=yx();n.add(Vc),e.push({type:"box",x:-58,z:-48,w:12,d:8}),t.push({id:"pwatersp",name:"Spare process water",position:new _(-58,5,-48)});const Wc=E8();n.add(Wc),e.push({type:"box",x:-78,z:-36,w:12,d:8}),t.push({id:"pwater2",name:"ISRU process water 2",position:new _(-78,5,-36)});const Xc=O4();n.add(Xc),e.push({type:"box",x:-80,z:20,w:10,d:8}),t.push({id:"chiller",name:"CH4 liquefaction",position:new _(-80,5,20)});const qc=B4();n.add(qc),e.push({type:"box",x:-80,z:32,w:10,d:8}),t.push({id:"o2chill",name:"O2 liquefaction",position:new _(-80,5,32)}),n.add(vm());const Yc=ym();n.add(Yc),e.push({type:"box",x:-14,z:-104,w:14,d:8}),e.push({type:"box",x:2,z:-104,w:14,d:8}),e.push({type:"box",x:-6,z:-116,w:8,d:14}),t.push({id:"habs",name:"Hab cluster",position:new _(-6,5,-108)});const Kc=Pm();n.add(Kc),e.push({type:"box",x:-32,z:-98,w:16,d:12}),t.push({id:"hab-kit",name:"Hab from cargo",position:new _(-32,5,-98)});const Jc=r3();n.add(Jc),e.push({type:"box",x:-22,z:-110,w:10,d:8}),t.push({id:"coupler",name:"Spare hab coupler",position:new _(-22,4,-110)});const Zc=zx();n.add(Zc),e.push({type:"box",x:-8,z:-98,w:10,d:8}),t.push({id:"couplersp",name:"Spare hab coupler 2",position:new _(-8,4,-98)});const $c=Dm();n.add($c),e.push({type:"box",x:-46,z:-108,w:14,d:8}),e.push({type:"box",x:-46,z:-94,w:14,d:8}),e.push({type:"box",x:-58,z:-102,w:8,d:14}),t.push({id:"pressure",name:"Pressure habs",position:new _(-50,5,-100)});const jc=Zm();n.add(jc),e.push({type:"box",x:-20,z:-132,w:14,d:8}),e.push({type:"box",x:-6,z:-132,w:14,d:8}),e.push({type:"box",x:-13,z:-142,w:8,d:14}),t.push({id:"hab3",name:"Hab street",position:new _(-13,5,-134)});const Qc=t4();n.add(Qc),yi(e,-33,-120,"x",28),yi(e,-6,-120,"z",24),yi(e,-4,-58,"z",70),e.push({type:"cyl",x:2,z:-22,r:1.6}),t.push({id:"corridors",name:"Pressurized neighborhood",position:new _(-20,4,-120)});const ed=n4();n.add(ed),e.push({type:"box",x:-30,z:-69,w:9,d:9}),e.push({type:"box",x:-38,z:-74.2,w:7,d:4.4}),yi(e,-36,-87,"z",24),yi(e,-45,-74,"x",12),t.push({id:"yard",name:"Construction yard",position:new _(-36,5,-74)}),t.push({id:"hab6",name:"Hab 6",position:new _(-40,5,-76)});const td=G4();n.add(td),e.push({type:"box",x:-22,z:-56,w:10,d:8}),t.push({id:"regolith",name:"Regolith stockpile",position:new _(-22,4,-56)});const nd=i4();n.add(nd),e.push({type:"box",x:-53,z:-72,w:6,d:7}),t.push({id:"med",name:"Crew ops / medical",position:new _(-50,5,-72)});const id=a4();n.add(id),e.push({type:"box",x:10,z:-124,w:14,d:10}),yi(e,2,-128,"x",10),t.push({id:"commons",name:"Crew commons / mess",position:new _(10,5,-124)});const ad=Sm();n.add(ad),e.push({type:"box",x:22,z:-112,w:16,d:10}),e.push({type:"box",x:32,z:-112,w:8,d:6}),t.push({id:"greenhouse",name:"CO2 life support",position:new _(22,4,-112)});const sd=_4();n.add(sd),e.push({type:"box",x:52,z:-112,w:14,d:9}),t.push({id:"greenhouse2",name:"Greenhouse 2",position:new _(52,4,-112)});const rd=F8();n.add(rd),e.push({type:"box",x:38,z:-104,w:8,d:6}),t.push({id:"ghlight",name:"Greenhouse lights",position:new _(38,4,-104)});const od=X4();n.add(od),e.push({type:"box",x:70,z:-112,w:12,d:8}),t.push({id:"food3",name:"Grow vault 4",position:new _(70,4,-112)});const cd=U4();n.add(cd),e.push({type:"box",x:38,z:-104,w:10,d:6}),t.push({id:"ghfilter",name:"Grow dust filter",position:new _(38,4,-104)});const dd=a3();n.add(dd),e.push({type:"box",x:24,z:-118,w:10,d:8}),t.push({id:"ghf2",name:"Spare grow dust filter",position:new _(24,4,-118)});const ld=z8();n.add(ld),e.push({type:"box",x:52,z:-126,w:12,d:8}),t.push({id:"ghwater",name:"Grow process water",position:new _(52,4,-126)});const hd=Nx();n.add(hd),e.push({type:"box",x:52,z:-154,w:12,d:8}),t.push({id:"ghwatersp",name:"Spare grow water",position:new _(52,4,-154)});const ud=V3();n.add(ud),e.push({type:"box",x:52,z:-140,w:10,d:8}),t.push({id:"ghpump",name:"Spare grow-water pump",position:new _(52,4,-140)});const fd=Gx();n.add(fd),e.push({type:"box",x:52,z:-168,w:10,d:8}),t.push({id:"ghpump2",name:"Spare grow-water pump 2",position:new _(52,4,-168)});const pd=T3();n.add(pd),e.push({type:"box",x:38,z:-132,w:10,d:8}),t.push({id:"growco2",name:"Spare grow CO2 tank",position:new _(38,4,-132)});const md=Bx();n.add(md),e.push({type:"box",x:38,z:-146,w:10,d:8}),t.push({id:"growco2sp",name:"Spare grow CO2 2",position:new _(38,4,-146)});const xd=I8();n.add(xd),e.push({type:"box",x:70,z:-126,w:10,d:8}),t.push({id:"nutrient",name:"Grow nutrient skid",position:new _(70,4,-126)});const gd=Lx();n.add(gd),e.push({type:"box",x:70,z:-152,w:10,d:8}),t.push({id:"nutrientsp",name:"Spare grow nutrient",position:new _(70,4,-152)});const wd=m4();n.add(wd),e.push({type:"box",x:8,z:-98,w:12,d:8}),t.push({id:"eclss",name:"Hab ECLSS / CO2 scrub",position:new _(8,4,-98)});const _d=q8();n.add(_d),e.push({type:"box",x:22,z:-98,w:8,d:6}),t.push({id:"blower",name:"Hab spare blower",position:new _(22,4,-98)});const bd=qx();n.add(bd),e.push({type:"box",x:36,z:-110,w:8,d:6}),t.push({id:"blower2",name:"Hab spare blower 2",position:new _(36,4,-110)});const vd=M8();n.add(vd),e.push({type:"box",x:-8,z:-98,w:12,d:8}),t.push({id:"eclss2",name:"Hab ECLSS 2",position:new _(-8,4,-98)});const Md=fg();n.add(Md),e.push({type:"box",x:50,z:-122,w:12,d:8}),t.push({id:"eclss3",name:"Hab ECLSS 3",position:new _(50,4,-122)});const yd=d3();n.add(yd),e.push({type:"box",x:8,z:-110,w:10,d:8}),t.push({id:"amine",name:"Hab spare amine bed",position:new _(8,4,-110)});const Sd=Ox();n.add(Sd),e.push({type:"box",x:8,z:-122,w:10,d:8}),t.push({id:"aminesp",name:"Spare hab amine 2",position:new _(8,4,-122)});const Ed=x3();n.add(Ed),e.push({type:"box",x:-8,z:-110,w:10,d:8}),t.push({id:"regulator",name:"Hab spare pressure regulator",position:new _(-8,4,-110)});const Td=Fx();n.add(Td),e.push({type:"box",x:22,z:-122,w:10,d:8}),t.push({id:"regsp",name:"Spare hab regulator 2",position:new _(22,4,-122)});const Ad=I4();n.add(Ad),e.push({type:"box",x:22,z:-98,w:10,d:8}),t.push({id:"waste",name:"Waste / water recovery",position:new _(22,4,-98)});const Rd=y8();n.add(Rd),e.push({type:"box",x:-22,z:-98,w:10,d:8}),t.push({id:"waste2",name:"Waste recovery 2",position:new _(-22,4,-98)});const Cd=M4();n.add(Cd),e.push({type:"box",x:-8,z:-88,w:10,d:8}),t.push({id:"o2buf",name:"Crew O2 buffer",position:new _(-8,4,-88)});const Pd=S8();n.add(Pd),e.push({type:"box",x:8,z:-88,w:10,d:8}),t.push({id:"o2buf2",name:"Crew O2 buffer 2",position:new _(8,4,-88)});const Dd=J8();n.add(Dd),e.push({type:"box",x:-32,z:-88,w:10,d:8}),t.push({id:"n2",name:"Hab spare N2",position:new _(-32,4,-88)});const zd=Q8();n.add(zd),e.push({type:"box",x:-46,z:-88,w:10,d:8}),t.push({id:"habh2o",name:"Hab spare water",position:new _(-46,4,-88)});const Id=Px();n.add(Id),e.push({type:"box",x:-46,z:-100,w:10,d:8}),t.push({id:"habh2osp",name:"Spare hab water 2",position:new _(-46,4,-100)});const Ld=ag();n.add(Ld),e.push({type:"box",x:-58,z:-100,w:10,d:8}),t.push({id:"habh2o3",name:"Spare hab water 3",position:new _(-58,4,-100)});const Ud=Rg();n.add(Ud),e.push({type:"box",x:-70,z:-100,w:10,d:8}),t.push({id:"habh2o4",name:"Spare hab water 4",position:new _(-70,4,-100)});const Nd=K3();n.add(Nd),e.push({type:"box",x:-58,z:-88,w:10,d:8}),t.push({id:"wpump",name:"Spare water-loop pump",position:new _(-58,4,-88)});const Od=n8();n.add(Od),e.push({type:"box",x:16,z:-86,w:10,d:8}),t.push({id:"dustlock",name:"Hab-street dust lock",position:new _(16,4,-86)});const Fd=Ax();n.add(Fd),e.push({type:"box",x:28,z:-86,w:10,d:8}),t.push({id:"dustlocksp",name:"Spare hab-street dust lock",position:new _(28,4,-86)});const kd=P8();n.add(kd),e.push({type:"box",x:16,z:-74,w:8,d:6}),t.push({id:"evalocker",name:"Hab-street EVA locker",position:new _(16,4,-74)});const Bd=Tx();n.add(Bd),e.push({type:"box",x:52,z:-74,w:8,d:6}),t.push({id:"evalockersp",name:"Spare hab-street EVA locker",position:new _(52,4,-74)});const Hd=S3();n.add(Hd),e.push({type:"box",x:28,z:-74,w:10,d:8}),t.push({id:"evabatt",name:"Spare EVA battery cart",position:new _(28,4,-74)});const Gd=B3();n.add(Gd),e.push({type:"box",x:40,z:-74,w:10,d:8}),t.push({id:"rcharge",name:"Spare rover charge post",position:new _(40,4,-74)});const Vd=L8();n.add(Vd),e.push({type:"box",x:0,z:-68,w:8,d:6}),t.push({id:"hablight",name:"Hab-street lights",position:new _(0,4,-68)});const Wd=F3();n.add(Wd),e.push({type:"box",x:8,z:-68,w:10,d:8}),t.push({id:"habinv",name:"Hab-street spare inverter",position:new _(8,4,-68)});const Xd=bx();n.add(Xd),e.push({type:"box",x:8,z:-56,w:10,d:8}),t.push({id:"habbatt",name:"Hab-street spare battery",position:new _(8,4,-56)});const qd=qm();n.add(qd),e.push({type:"box",x:38,z:-126,w:14,d:9}),t.push({id:"food",name:"Food / grow vault",position:new _(38,4,-126)});const Yd=jm();n.add(Yd),e.push({type:"box",x:8,z:-142,w:14,d:9}),t.push({id:"food2",name:"Hab-street grow vault",position:new _(8,4,-142)});const Kd=E4();n.add(Kd),e.push({type:"box",x:28,z:-140,w:10,d:8}),t.push({id:"condensate",name:"Condensate return",position:new _(28,4,-140)});const Jd=R3();n.add(Jd),e.push({type:"box",x:40,z:-140,w:10,d:8}),t.push({id:"condensate2",name:"Spare hab condensate",position:new _(40,4,-140)});const Zd=Ym();n.add(Zd),e.push({type:"box",x:-60,z:-148,w:8,d:6}),e.push({type:"box",x:-64,z:-118,w:8,d:6}),e.push({type:"box",x:-18,z:-88,w:10,d:8}),t.push({id:"water",name:"Water loop",position:new _(-18,4,-88)});const $d=u4();n.add($d),e.push({type:"box",x:18,z:-152,w:14,d:10}),t.push({id:"potable",name:"Potable water store",position:new _(18,4,-152)});const jd=f8();n.add(jd),e.push({type:"box",x:32,z:-152,w:10,d:8}),t.push({id:"potable-uv",name:"Potable UV polish",position:new _(32,4,-152)});const Qd=p3();n.add(Qd),e.push({type:"box",x:46,z:-152,w:10,d:8}),t.push({id:"potable-uv2",name:"Spare potable UV",position:new _(46,4,-152)});const el=sg();n.add(el),e.push({type:"box",x:32,z:-176,w:10,d:8}),t.push({id:"potable-uv3",name:"Spare potable UV 2",position:new _(32,4,-176)});const tl=Cg();n.add(tl),e.push({type:"box",x:46,z:-176,w:10,d:8}),t.push({id:"potable-uv4",name:"Spare potable UV 3",position:new _(46,4,-176)});const nl=k3();n.add(nl),e.push({type:"box",x:8,z:-162,w:10,d:8}),t.push({id:"potpump",name:"Spare potable pump",position:new _(8,4,-162)});const il=f4();n.add(il),e.push({type:"box",x:-58,z:-108,w:10,d:3}),e.push({type:"box",x:-20,z:-100,w:18,d:3}),e.push({type:"box",x:22,z:-128,w:3,d:12}),t.push({id:"berms",name:"Hab dust berms",position:new _(-20,4,-100)});const al=Km();n.add(al),e.push({type:"box",x:68,z:-10,w:16,d:8}),e.push({type:"box",x:-22,z:-88,w:8,d:6}),t.push({id:"battery",name:"Night power store",position:new _(68,4,-10)});const sl=e4();n.add(sl),e.push({type:"box",x:68,z:6,w:16,d:8}),e.push({type:"box",x:-28,z:-138,w:8,d:6}),t.push({id:"battery2",name:"Crew night store",position:new _(68,4,6)});const rl=v4();n.add(rl),e.push({type:"box",x:8,z:-78,w:12,d:7}),t.push({id:"battery3",name:"Hab night store 3",position:new _(8,4,-78)});const ol=h8();n.add(ol),e.push({type:"box",x:-18,z:-78,w:12,d:7}),t.push({id:"battery4",name:"Hab night store 4",position:new _(-18,4,-78)});const cl=A8();n.add(cl),e.push({type:"box",x:-5,z:-78,w:8,d:6}),t.push({id:"habtrench",name:"Hab-street power trench",position:new _(-5,4,-78)});const dl=Om();n.add(dl),e.push({type:"box",x:-15,z:-8,w:10,d:7}),t.push({id:"spaceport",name:"Methalox spaceport",position:new _(-15,4,-8)});const ll=$8();n.add(ll),e.push({type:"box",x:-28,z:-8,w:8,d:6}),t.push({id:"ch4hose",name:"Spare CH4 load hose",position:new _(-28,4,-8)});const hl=j8();n.add(hl),e.push({type:"box",x:-28,z:6,w:8,d:6}),t.push({id:"o2hose",name:"Spare O2 load hose",position:new _(-28,4,6)});const ul=y3();n.add(ul),e.push({type:"box",x:-42,z:6,w:10,d:8}),t.push({id:"o2pump",name:"Spare O2 transfer pump",position:new _(-42,4,6)});const fl=O3();n.add(fl),e.push({type:"box",x:-42,z:-8,w:10,d:8}),t.push({id:"o2tank",name:"Spare O2 buffer tank",position:new _(-42,4,-8)});const pl=s4();n.add(pl),e.push({type:"box",x:20,z:8,w:16,d:12}),t.push({id:"stock",name:"Methalox stockpile",position:new _(20,4,8)});const ml=A4();n.add(ml),e.push({type:"box",x:36,z:8,w:10,d:8}),t.push({id:"ch4buf",name:"CH4 return buffer",position:new _(36,4,8)});const xl=R4();n.add(xl),e.push({type:"box",x:36,z:-6,w:10,d:8}),t.push({id:"o2ret",name:"O2 return buffer",position:new _(36,4,-6)});const gl=K4();n.add(gl),e.push({type:"box",x:50,z:4,w:8,d:18}),t.push({id:"mxberm",name:"Methalox farm berm",position:new _(50,4,4)});const wl=G8();n.add(wl),e.push({type:"box",x:68,z:6,w:8,d:6}),t.push({id:"mxlight",name:"Methalox farm lights",position:new _(68,4,6)});const _l=D4();n.add(_l),e.push({type:"box",x:-32,z:-22,w:10,d:8}),t.push({id:"pump",name:"Methalox pump house",position:new _(-32,4,-22)});const bl=M3();n.add(bl),e.push({type:"box",x:-32,z:-36,w:10,d:8}),t.push({id:"ch4pump",name:"Spare CH4 transfer pump",position:new _(-32,4,-36)});const vl=N3();n.add(vl),e.push({type:"box",x:-18,z:-36,w:10,d:8}),t.push({id:"ch4tank",name:"Spare CH4 buffer tank",position:new _(-18,4,-36)}),n.add(Nm()),n.add(Fm()),n.add($i(16,14,-.4)),n.add($i(8,-62,1.2)),n.add($i(30,74,-.2)),n.add($i(-94,-182,.7)),n.add(on(-90,-148,.4,{kind:"ice",loaded:!0})),t.push({id:"rover",name:"Haul rover",position:new _(8,2,-62)}),t.push({id:"haul2",name:"Ice haul at crush",position:new _(-90,3,-148)});const Ml=Xm();n.add(Ml),e.push({type:"box",x:-64,z:-90,w:10,d:8}),t.push({id:"haul",name:"Ice haul",position:new _(-64,3,-90)});const yl=Em();n.add(yl),e.push({type:"box",x:48,z:-86,w:16,d:12}),t.push({id:"workshop",name:"Workshop",position:new _(48,5,-86)});const Sl=U8();n.add(Sl),e.push({type:"box",x:48,z:-70,w:8,d:6}),t.push({id:"shoplight",name:"Workshop lights",position:new _(48,4,-70)});const El=w4();n.add(El),e.push({type:"box",x:22,z:-80,w:12,d:8}),t.push({id:"depot",name:"Spare-parts depot",position:new _(22,4,-80)});const Tl=h4();n.add(Tl),e.push({type:"box",x:66,z:-74,w:16,d:12}),t.push({id:"workshop2",name:"Workshop bay 2",position:new _(66,5,-74)});const Al=z4();n.add(Al),e.push({type:"box",x:66,z:-90,w:10,d:8}),t.push({id:"press",name:"Sinter press",position:new _(66,4,-90)});const Rl=C3();n.add(Rl),e.push({type:"box",x:52,z:-90,w:10,d:8}),t.push({id:"pressdie",name:"Spare sinter press die",position:new _(52,4,-90)});const Cl=V8();n.add(Cl),e.push({type:"box",x:66,z:-104,w:12,d:8}),t.push({id:"kiln",name:"Sinter kiln",position:new _(66,4,-104)});const Pl=W8();n.add(Pl),e.push({type:"box",x:80,z:-104,w:8,d:6}),t.push({id:"bricks",name:"Sinter brick pallet",position:new _(80,4,-104)});const Dl=E3();n.add(Dl),e.push({type:"box",x:80,z:-118,w:10,d:8}),t.push({id:"kilnfeed",name:"Spare kiln-feed hopper",position:new _(80,4,-118)});const zl=Z4();n.add(zl),e.push({type:"box",x:82,z:-90,w:10,d:8}),t.push({id:"crib",name:"Workshop tool crib",position:new _(82,4,-90)});const Il=T8();n.add(Il),e.push({type:"box",x:96,z:-90,w:10,d:8}),t.push({id:"rack",name:"Workshop parts rack",position:new _(96,4,-90)});const Ll=Z8();n.add(Ll),e.push({type:"box",x:96,z:-104,w:10,d:8}),t.push({id:"welder",name:"Workshop spare welder",position:new _(96,4,-104)});const Ul=I3();n.add(Ul),e.push({type:"box",x:96,z:-118,w:10,d:8}),t.push({id:"mill",name:"Workshop spare mill",position:new _(96,4,-118)});const Nl=c3();n.add(Nl),e.push({type:"box",x:110,z:-90,w:10,d:8}),t.push({id:"shopair",name:"Workshop spare air compressor",position:new _(110,4,-90)});const Ol=G3();n.add(Ol),e.push({type:"box",x:124,z:-90,w:10,d:8}),t.push({id:"grinder",name:"Workshop spare grinder",position:new _(124,4,-90)});const Fl=g3();n.add(Fl),e.push({type:"box",x:110,z:-104,w:10,d:8}),t.push({id:"hoist",name:"Workshop spare hoist",position:new _(110,4,-104)});const kl=X3();n.add(kl),e.push({type:"box",x:124,z:-104,w:10,d:8}),t.push({id:"lathe",name:"Workshop spare lathe",position:new _(124,4,-104)});const Bl=U3();n.add(Bl),e.push({type:"box",x:110,z:-118,w:10,d:8}),t.push({id:"vise",name:"Workshop spare vise",position:new _(110,4,-118)});const Hl=m8();n.add(Hl),e.push({type:"box",x:82,z:-74,w:16,d:12}),t.push({id:"workshop3",name:"Workshop bay 3",position:new _(82,5,-74)});const Gl=x4();n.add(Gl),n.add($i(48,-70,.2)),t.push({id:"shelter",name:"Rover dust shelter",position:new _(48,4,-70)});for(const[Gi,Vi]of[[42.8,-73.4],[53.2,-73.4],[42.8,-66.6],[53.2,-66.6]])e.push({type:"cyl",x:Gi,z:Vi,r:.45});const Vl=Tm();n.add(Vl),e.push({type:"cyl",x:-18,z:-138,r:3}),t.push({id:"comms",name:"Comms tower",position:new _(-18,16,-138)});const Wl=H8();n.add(Wl),e.push({type:"box",x:4,z:-138,w:8,d:6}),t.push({id:"commslight",name:"Comms-yard lights",position:new _(4,4,-138)});const Xl=N4();n.add(Xl),e.push({type:"cyl",x:24,z:-128,r:2.2}),t.push({id:"weather",name:"Weather / dust mast",position:new _(24,12,-128)});const ql=Y3();n.add(ql),e.push({type:"box",x:36,z:-128,w:10,d:8}),t.push({id:"wxpack",name:"Spare weather sensor pack",position:new _(36,4,-128)});const Yl=Wm();n.add(Yl),e.push({type:"cyl",x:-32,z:-148,r:8.4}),e.push({type:"box",x:-40,z:-154,w:6,d:5}),t.push({id:"earth",name:"Earth dish · 12 min delay",position:new _(-32,12,-148)});const Kl=D8();n.add(Kl),e.push({type:"box",x:-48,z:-138,w:10,d:12}),t.push({id:"commsberm",name:"Comms dust berm",position:new _(-48,4,-138)});const Jl=p4();n.add(Jl),e.push({type:"cyl",x:-8,z:-162,r:6.2}),t.push({id:"earth2",name:"Backup Earth dish",position:new _(-8,10,-162)});const Zl=$4();n.add(Zl),e.push({type:"box",x:4,z:-148,w:10,d:8}),t.push({id:"commsbatt",name:"Comms night store",position:new _(4,4,-148)});const $l=R8();n.add($l),e.push({type:"box",x:16,z:-148,w:10,d:8}),t.push({id:"commsinv",name:"Comms spare inverter",position:new _(16,4,-148)});const jl=W3();n.add(jl),e.push({type:"box",x:16,z:-136,w:10,d:8}),t.push({id:"commslna",name:"Spare Earth-link LNA",position:new _(16,4,-136)});const Ql=D3();n.add(Ql),e.push({type:"box",x:28,z:-162,w:10,d:8}),t.push({id:"earthbatt",name:"Spare Earth-link battery",position:new _(28,4,-162)});const e0=Yx();n.add(e0),e.push({type:"box",x:40,z:-162,w:10,d:8}),t.push({id:"earthbatt2",name:"Spare Earth-link battery 2",position:new _(40,4,-162)});const t0=Am();n.add(t0),e.push({type:"cyl",x:-58,z:-158,r:6}),t.push({id:"ice",name:"Ice mining rig",position:new _(-58,8,-158)});const n0=N8();n.add(n0),e.push({type:"box",x:-46,z:-148,w:8,d:6}),t.push({id:"icelight",name:"Ice-mine lights",position:new _(-46,4,-148)});const i0=l3();n.add(i0),e.push({type:"box",x:-70,z:-148,w:10,d:8}),t.push({id:"drill1",name:"Ice mine 1 spare drill",position:new _(-70,4,-148)});const a0=J4();n.add(a0),e.push({type:"box",x:-40,z:-168,w:10,d:12}),t.push({id:"ice1berm",name:"Ice mine 1 berm",position:new _(-40,4,-168)});const s0=gx();n.add(s0),e.push({type:"box",x:-28,z:-180,w:10,d:12}),t.push({id:"ice1bermsp",name:"Spare ice mine 1 berm",position:new _(-28,4,-180)});const r0=l4();n.add(r0),e.push({type:"cyl",x:-78,z:-172,r:6}),t.push({id:"ice2",name:"Ice mine 2",position:new _(-78,8,-172)});const o0=u8();n.add(o0),e.push({type:"box",x:-64,z:-184,w:10,d:12}),t.push({id:"ice2berm",name:"Ice mine 2 berm",position:new _(-64,4,-184)});const c0=wx();n.add(c0),e.push({type:"box",x:-52,z:-196,w:10,d:12}),t.push({id:"ice2bermsp",name:"Spare ice mine 2 berm",position:new _(-52,4,-196)});const d0=K8();n.add(d0),e.push({type:"box",x:-92,z:-184,w:10,d:8}),t.push({id:"drill2",name:"Ice mine 2 spare drill",position:new _(-92,4,-184)});const l0=x8();n.add(l0),e.push({type:"box",x:-78,z:-156,w:10,d:8}),t.push({id:"melt2",name:"Ice melt still 2",position:new _(-78,5,-156)});const h0=q3();n.add(h0),e.push({type:"box",x:-92,z:-172,w:10,d:8}),t.push({id:"melt2pump",name:"Spare ice-melt pump 2",position:new _(-92,4,-172)});const u0=b4();n.add(u0),e.push({type:"box",x:-90,z:-158,w:12,d:10}),t.push({id:"ice-depot",name:"Ice crush depot",position:new _(-90,4,-158)});const f0=l8();n.add(f0),e.push({type:"box",x:-102,z:-158,w:10,d:8}),t.push({id:"crushcover",name:"Ice crush cover",position:new _(-102,4,-158)});const p0=L3();n.add(p0),e.push({type:"box",x:-102,z:-148,w:10,d:8}),t.push({id:"conveyor",name:"Spare ice conveyor",position:new _(-102,4,-148)});const m0=v3();n.add(m0),e.push({type:"box",x:-114,z:-158,w:10,d:8}),t.push({id:"hopper",name:"Spare ice crush hopper",position:new _(-114,4,-158)});const x0=C8();n.add(x0),e.push({type:"box",x:-90,z:-136,w:10,d:8}),t.push({id:"weigh",name:"Ice haul weigh",position:new _(-90,4,-136)});const g0=Ix();n.add(g0),e.push({type:"box",x:-90,z:-124,w:10,d:8}),t.push({id:"weighsp",name:"Spare ice haul weigh",position:new _(-90,4,-124)});const w0=s3();n.add(w0),e.push({type:"box",x:-110,z:-136,w:12,d:8}),t.push({id:"haul3",name:"Spare ice haul",position:new _(-110,3,-136)});const _0=P3();n.add(_0),e.push({type:"box",x:-124,z:-136,w:10,d:8}),t.push({id:"trailer",name:"Spare ice-haul trailer",position:new _(-124,3,-136)});const b0=P4();n.add(b0),e.push({type:"box",x:-58,z:-142,w:10,d:8}),t.push({id:"melt",name:"Ice melt still",position:new _(-58,5,-142)});const v0=H3();n.add(v0),e.push({type:"box",x:-70,z:-136,w:10,d:8}),t.push({id:"meltpump",name:"Spare ice-melt pump",position:new _(-70,4,-136)});const M0=i3();n.add(M0),e.push({type:"box",x:-46,z:-132,w:10,d:8}),t.push({id:"melt3",name:"Spare ice-melt still",position:new _(-46,4,-132)});const y0=Wx();n.add(y0),e.push({type:"box",x:-34,z:-146,w:10,d:8}),t.push({id:"melt4",name:"Spare ice-melt still 2",position:new _(-34,4,-146)});const S0=Um();n.add(S0),e.push({type:"cyl",x:-82,z:-176,r:2.4}),t.push({id:"survey",name:"Resource survey",position:new _(-88,5,-188)});const E0=V4();return n.add(E0),e.push({type:"cyl",x:-124,z:-188,r:2.4}),t.push({id:"survey2",name:"West ice survey",position:new _(-124,5,-188)}),n.add(Qt(42,22,.6)),n.add(Qt(39,26,-.4)),n.add(Qt(26,78,2.2)),n.add(Qt(26,68,.5)),n.add(Qt(22,72,-.8)),n.add(Qt(-80,-174,.8)),n.add(Qt(-34,-92,-1.2)),n.add(Qt(-28,-104,.3)),n.add(Qt(16,-120,.6)),n.add(Qt(70,-70,.4)),n.add(Qt(-28,128,1.1)),n.add(Lm()),Jm(e),n.add(Hm()),n.add(Gm()),n.add(Vm()),{group:n,colliders:e,landmarks:t}}function Jn(n,e,t={}){const i=new R;i.name=t.finished?"pad":"cargo-pad";const a=M(n,e),r=t.finished?20:16,c=t.finished?s.pad:s.graded;if(i.add(o(new P(r,r,.45,48),c,n,a+.15,e)),t.finished){i.add(o(new Ce(r+.4,.55,8,48),s.padRing,n,a+.4,e,Math.PI/2,0,0)),i.add(o(new aa(7.5,8.1,40),s.padRing,n,a+.4,e,-Math.PI/2,0,0)),i.add(o(new aa(13,13.5,40),s.padRing,n,a+.4,e,-Math.PI/2,0,0));for(let d=0;d<12;d++){const u=d/12*Math.PI*2;i.add(o(new h(.35,.55,.35),s.glowPad,n+Math.cos(u)*19.2,a+.55,e+Math.sin(u)*19.2))}}else{i.add(o(new Ce(r+.3,.4,8,36),s.padRing,n,a+.32,e,Math.PI/2,0,0));for(let d=0;d<8;d++){const u=d/8*Math.PI*2;i.add(o(new h(.28,.4,.28),s.glowPad,n+Math.cos(u)*(r-.6),a+.45,e+Math.sin(u)*(r-.6)))}}const l=t.finished?26:21,f=o(new Ce(l,t.finished?2.2:1.8,8,40),s.rust,n,a-.4,e,Math.PI/2,0,0);return f.scale.set(1,.45,1),i.add(f),i}function Mi(n=0,e=0,t={}){const i=new R;i.name=t.name||"starship",i.position.set(n,0,e);const a=M(n,e)-3.1,r=36,c=4.4;i.add(o(new P(c,c,r,28),s.steel,0,a+8+r/2,0));const l=o(new _t(c,24,16,0,Math.PI*2,0,Math.PI/2),s.steel,0,a+8+r,0);l.scale.set(1,1.55,1),i.add(l);const f=o(new P(c+.04,c+.04,r*.72,20,1,!0,Math.PI*.55,Math.PI*.9),s.tiles,0,a+8+r*.38,0);i.add(f);const d=o(new P(c+.15,c+.55,3.2,24),s.soot,0,a+6.4,0);i.add(d);for(let m=0;m<3;m++){const g=m/3*Math.PI*2;i.add(o(new P(.55,1.15,2.2,12),s.soot,Math.cos(g)*1.5,a+4.6,Math.sin(g)*1.5))}const u=new h(1.1,7.2,3.6);i.add(o(u,s.steelDark,-c-.2,a+14,0,0,0,.18)),i.add(o(u,s.steelDark,c+.2,a+14,0,0,0,-.18));const x=new h(.45,4.2,2.4);i.add(o(x,s.steelDark,-c+.2,a+40,1.2,.15,0,.4)),i.add(o(x,s.steelDark,c-.2,a+40,1.2,.15,0,-.4));for(let m=0;m<6;m++){const g=m/6*Math.PI*2+.2,v=new R,y=o(new h(.22,8.2,.22),s.steelDark,0,0,0,0,0,.72),b=o(new h(1.3,.18,.9),s.steel,3.4,-3.7,0);v.add(y,b),v.position.set(Math.cos(g)*3.2,a+7.6,Math.sin(g)*3.2),v.rotation.y=-g,i.add(v)}for(let m=0;m<5;m++)i.add(o(new h(.7,.35,.08),s.tiles,0,a+28+m*2.1,c+.05));if(i.add(o(new h(1.6,.12,.12),s.glowWarm,0,a+44.5,0)),t.cargoOpen){i.add(o(new h(2.4,6.2,3.4),s.soot,-c+.4,a+16.4,0)),i.add(o(new h(.12,6.4,3.6),s.steel,-c-2.1,a+16.6,2,0,1.15,0));const m=a+13.2,g=M(n,e)+.22,v=-c-.3,y=-c-12.4,b=Math.hypot(v-y,m-g),w=Math.atan2(m-g,v-y);i.add(o(new h(b,.16,3.1),s.steelDark,(v+y)/2,(m+g)/2,0,0,0,w)),i.add(o(new h(10.5,.18,.18),s.lattice,-7.2,a+22.5,0,0,0,.55)),i.add(o(new P(.05,.05,7.2,6),s.cable,-12.2,a+16.2,0)),i.add(o(new h(1.5,1.3,1.5),s.crate,-12.2,a+12.4,0)),i.add(p("CARGO","#1a100c","#f0c089",3.4,.9,-c-.1,a+24,0,-Math.PI/2))}if(t.crewHab){const m=a+13;i.add(o(new P(1.2,1.2,2.7,14),s.habDark,0,m,c+1.35,Math.PI/2,0,0)),i.add(o(new Ce(1.22,.09,6,16),s.steel,0,m,c+.28)),i.add(o(new Ce(1.22,.09,6,16),s.steel,0,m,c+2.55)),i.add(o(new h(1.05,1.75,.1),s.steelDark,0,m,c+2.72)),i.add(o(new h(3.4,.14,2.6),s.steelDark,0,m-1.28,c+2.9)),i.add(o(new h(.1,1.15,2.5),s.steel,-1.6,m-.65,c+2.9)),i.add(o(new h(.1,1.15,2.5),s.steel,1.6,m-.65,c+2.9));const g=m-1.28,v=M(n,e)+.28,y=c+3.6,b=c+13.2,w=11;for(let L=0;L<w;L++){const U=L/(w-1);i.add(o(new h(2.15,.12,.95),s.steelDark,0,g+(v-g)*U,y+(b-y)*U))}const z=Math.hypot(y-b,g-v),D=Math.atan2(g-v,b-y);i.add(o(new h(2.25,.08,z),s.steel,0,(g+v)/2-.12,(y+b)/2,D,0,0)),i.add(o(new h(.08,.85,z),s.steel,-1.12,(g+v)/2+.35,(y+b)/2,D,0,0)),i.add(o(new h(.08,.85,z),s.steel,1.12,(g+v)/2+.35,(y+b)/2,D,0,0));const E=b+1.55,H=M(n,e)+1.35;i.add(o(new P(1.35,1.35,2.5,12),s.habDark,0,H,E)),i.add(o(new h(1.05,1.7,.1),s.steelDark,0,H+.05,E+1.4)),i.add(o(new Ce(1.38,.07,6,14),s.steel,0,H+1.28,E,Math.PI/2,0,0)),i.add(o(new h(2.2,.12,2.2),s.steelDark,0,M(n,e)+.12,E));for(let L=0;L<5;L++)i.add(o(new h(.85,.48,.08),s.glowWarm,1.55,a+16.5+L*3.4,c+.06)),i.add(o(new h(.08,.48,.85),s.glowWarm,c+.06,a+16.5+L*3.4,-1.35));i.add(o(new P(.55,.55,.2,12),s.steel,2.55,a+14.2,c+.04,Math.PI/2,0,0)),i.add(o(new Ce(.52,.06,6,12),s.steelDark,2.55,a+14.2,c+.14)),i.add(p("CREW HAB","#1a100c","#f0c089",3.4,.85,0,m+2.55,c+2.35)),i.add(p("AIRLOCK","#1a100c","#f0c089",2.3,.55,1.85,m+.15,c+2.05,Math.PI/2))}return i}function mm(){const n=new R;n.name="crates";const e=[[10,8,0],[12.2,8.4,.4],[10.4,10.6,1.6],[13.5,6.2,-.3],[-12,9,.5],[-14,7.2,2.1],[8.5,-11,0],[6.4,-12.5,1.1]];for(const[t,i,a]of e)J(n,t,i,a);return n}function xm(){const n=new R;n.name="cargo-offload";const e=[[40,22,.2],[38.2,24.1,-.3],[41.4,26.2,.8],[36.5,21.4,.1],[37.8,27.6,1.4],[34.8,24.8,-.5],[39.2,19.6,.6],[35.4,19.2,.15]];for(const[r,c,l]of e)J(n,r,c,l);J(n,38.6,22.8,.1,1.15),J(n,33.2,20.4,.25,1.2),J(n,31.4,22.1,-.2,1.05);const[t,i,a]=Pt(36,23.5,.08);return n.add(o(new h(8.5,.12,4.2),s.steelDark,t,i,a,0,.15,0)),n.add(p("HAB KIT","#1a100c","#f0c089",2.6,.7,33.2,M(33.2,20.4)+2.5,20.4,.35)),n}function gm(){const n=new R;n.name="approach";const e=[{fx:0,fz:118,tx:0,tz:32,n:7},{fx:52,fz:90,tx:52,tz:42,n:5},{fx:36,fz:128,tx:36,tz:90,n:4},{fx:-24,fz:92,tx:-24,tz:60,n:4},{fx:-48,fz:118,tx:-48,tz:86,n:4},{fx:78,fz:104,tx:78,tz:74,n:4},{fx:-16,fz:178,tx:-16,tz:154,n:5}];for(const t of e){const i=Math.atan2(t.tx-t.fx,t.tz-t.fz);for(let a=0;a<t.n;a++){const r=a/(t.n-1),c=t.fx+(t.tx-t.fx)*r,l=t.fz+(t.tz-t.fz)*r,f=M(c,l),d=new R;d.add(o(new h(2.5,.16,.34),s.glowPad,-.75,0,0,0,.5,0)),d.add(o(new h(2.5,.16,.34),s.glowPad,.75,0,0,0,-.5,0)),d.position.set(c,f+.14,l),d.rotation.y=i,n.add(d)}}return n}function wm(){const n=new R;n.name="prep-pad";const e=22,t=82,i=M(e,t);n.add(o(new P(14,14,.28,36),s.graded,e,i+.08,t));const a=o(new Ce(16.2,1.7,8,28,Math.PI*1.35),s.rust,e,i-.15,t,Math.PI/2,.5,0);a.scale.set(1,.42,1),n.add(a);for(let c=0;c<8;c++){const l=c/8*Math.PI*2+.2,f=e+Math.cos(l)*15.2,d=t+Math.sin(l)*15.2,u=M(f,d);n.add(o(new h(.08,1.7,.08),s.steel,f,u+.85,d)),n.add(o(new h(.28,.16,.06),s.glowPad,f,u+1.62,d,0,l,0))}const r=[[12,74],[30,88],[14,90]];for(const[c,l]of r){const f=o(new ut(2.2,0),s.rust,c,M(c,l)+.9,l);f.scale.set(1.2,.65,1.05),n.add(f)}return n.add(p("LANDING PREP","#1a100c","#f0c089",4.4,1,e+10.5,i+2.4,t+2,-.6)),n.add(o(new h(.12,2.4,.12),s.steelDark,e+10.5,i+1.2,t+2)),n}function _m(){const n=new R;n.name="solar";const e=10,t=8;for(let c=0;c<e;c++)for(let l=0;l<t;l++){const f=58+c*5.4,d=-22-l*6.2,u=M(f,d),x=o(new h(.18,1.6,.18),s.solarFrame,f,u+.8,d),m=o(new h(4.6,.08,2.3),s.solar,f,u+1.55,d,-.55,.15,0),g=o(new h(4.75,.05,2.42),s.solarFrame,f,u+1.5,d,-.55,.15,0);n.add(x,m,g)}for(let c=0;c<5;c++){const l=58+c*5.4,f=-22-8*6.2,d=M(l,f);n.add(o(new h(.18,1.6,.18),s.solarFrame,l,d+.8,f)),c<2&&n.add(o(new h(4.6,.08,2.3),s.solar,l+1.1,d+.22,f+1.5,1.2,.25,0))}const[i,a,r]=Pt(54,-18,.7);return n.add(o(new h(2.2,1.4,1.4),s.habDark,i,a,r)),n.add(p("POWER","#111111","#f4e6c8",2,.55,i,a+.2,r+.75)),n}function bm(){const n=new R;n.name="power-run";const e=54,t=-18,i=-54,a=-16,r=[],c=10;for(let l=0;l<=c;l++){const f=l/c,d=e+(i-e)*f,u=t+(a-t)*f,x=M(d,u);n.add(o(new P(.09,.11,4.4,6),s.steelDark,d,x+2.2,u)),n.add(o(new h(1.15,.08,.08),s.steel,d,x+4.35,u)),r.push({x:d,y:x+4.32,z:u})}for(let l=0;l<r.length-1;l++){const f=r[l],d=r[l+1];for(const u of[-.38,.38]){const x=new Bi([new _(f.x,f.y,f.z+u),new _((f.x+d.x)/2,(f.y+d.y)/2-.75,(f.z+d.z)/2+u),new _(d.x,d.y,d.z+u)]),m=new ot(new ai(x,6,.035,4,!1),s.cable);m.castShadow=!1,n.add(m)}}return n}function vm(){const n=new R;n.name="water-feed";const e=-58,t=-150,i=-68,a=-26,r=12,c=[];for(let d=0;d<=r;d++){const u=d/r,x=e+(i-e)*u,m=t+(a-t)*u,g=M(x,m)+1.15;c.push(new _(x,g,m)),d%2===0&&n.add(o(new h(.16,1.1,.16),s.steelDark,x,M(x,m)+.55,m))}const l=new Bi(c),f=new ot(new ai(l,24,.16,6,!1),s.pipe);return f.castShadow=!1,n.add(f),n}function Mm(){const n=new R;n.name="isru";const e=-68,t=-16,i=M(e,t);n.add(o(new h(30,.4,22),s.concrete,e,i+.15,t));const a=o(new P(1.8,2,13,12),s.steelDark,e+4,i+6.8,t);n.add(a),n.add(o(new Ce(2.5,.18,6,16),s.steel,e+4,i+10.2,t,Math.PI/2,0,0)),n.add(o(new Ce(2.5,.18,6,16),s.steel,e+4,i+7.4,t,Math.PI/2,0,0)),n.add(p("SABATIER","#1a100c","#f0c089",5.2,1.15,e+6.1,i+8.2,t,Math.PI/2));const r=o(new P(3,3,13,20),s.tankCh4,e-8,i+7.1,t+5.4,0,0,Math.PI/2),c=o(new P(3,3,13,20),s.tankO2,e-8,i+7.1,t-5.2,0,0,Math.PI/2);n.add(r,c),n.add(p("CH4","#6a2208","#f4e6c8",3.6,1,e-1.2,i+7.1,t+5.4)),n.add(p("O2","#2a3340","#e8eef4",3.6,1,e-1.2,i+7.1,t-5.2)),n.add(o(new P(2.2,2.2,7.2,16),s.pipe,e-4,i+4,t-10.4)),n.add(p("H2O","#1a2830","#d6e6ef",2.6,.75,e-4,i+5.6,t-8.1));const l=o(new ut(2.1,0),s.ice,e+1.5,i+1.1,t-10.2);return l.scale.set(1.15,.6,1),n.add(l),n.add(o(new P(.55,.55,7.5,10),s.steel,e+10.5,i+4.1,t-5.4)),n.add(o(new P(2.3,.7,2.6,14),s.steelDark,e+10.5,i+8.8,t-5.4)),n.add(o(new Ce(2.05,.1,6,16),s.steel,e+10.5,i+10.15,t-5.4,Math.PI/2,0,0)),n.add(p("CO2","#1a100c","#f0c089",2.4,.7,e+10.5,i+5.8,t-3.2)),n.add(o(new h(4.2,3,3.2),s.habDark,e+10,i+1.8,t+4.2)),n.add(p("POWER","#111111","#f4e6c8",2.2,.55,e+10,i+2.6,t+5.9)),n.add(o(new P(.16,.16,10,8),s.pipe,e+7.2,i+3.4,t-2.6,0,0,Math.PI/2)),n.add(o(new P(.16,.16,9,8),s.pipe,e-1.5,i+3.6,t+2.4,0,0,Math.PI/2)),n.add(o(new P(.16,.16,8.5,8),s.steel,e-1.5,i+3.6,t-2.2,0,0,Math.PI/2)),n.add(o(new P(.14,.14,6.4,8),s.cable,e+12.2,i+3.8,t+1.2,0,0,Math.PI/2)),n}function ym(){const n=new R;n.name="habs";const e=[[-14,-104,0],[2,-104,0],[-6,-116,1.57]];for(const[f,d,u]of e){const x=M(f,d),m=o(new P(3.1,3.1,12,18),s.hab,f,x+3.2,d,0,0,Math.PI/2);m.rotation.y=u,n.add(m),n.add(o(new _t(3.1,14,10),s.hab,f+Math.cos(u)*6,x+3.2,d+Math.sin(u)*6)),n.add(o(new _t(3.1,14,10),s.hab,f-Math.cos(u)*6,x+3.2,d-Math.sin(u)*6));for(let g=-2;g<=2;g++){const v=f+Math.cos(u)*g*2,y=d+Math.sin(u)*g*2;n.add(o(new h(.9,.7,.08),s.glowWarm,v,x+3.3,y+(u===0?3.15:0)))}}const[t,i,a]=Pt(-6,-96,1.4);n.add(o(new P(1.5,1.5,2.6,12),s.habDark,t,i,a)),n.add(o(new h(1.1,1.8,.12),s.steelDark,t,i+.1,a+1.5));const[r,c,l]=Pt(-6,-108,6.8);return n.add(o(new _t(4.4,18,12,0,Math.PI*2,0,Math.PI/2),s.hab,r,c,l)),n.add(p("HAB 1","#1a100c","#f0c089",2.6,.7,-6,M(-6,-96)+3.6,-94.4)),n}function Sm(){const n=new R;n.name="greenhouse";const e=22,t=-112,i=M(e,t);n.add(o(new h(15.2,.25,8.6),s.concrete,e,i+.1,t));const a=new ot(new P(4.15,4.15,14.2,18,1,!1,0,Math.PI),s.glass);a.rotation.z=Math.PI/2,a.position.set(e,i+4.1,t),a.castShadow=!1,n.add(a),n.add(o(new h(14.2,.1,8.4),s.solarFrame,e,i+4.15,t));for(let f=-2;f<=2;f++)n.add(o(new Ce(4.12,.055,6,16,Math.PI),s.solarFrame,e+f*2.7,i+4.1,t,0,Math.PI/2,0));for(let f=-2;f<=2;f++){n.add(o(new h(2.05,.26,6.6),s.soil,e+f*2.35,i+.36,t));for(let d=-2;d<=2;d++){const u=d%2===0?s.plant:s.plantLeaf;n.add(o(new h(1.45,.52,.82),u,e+f*2.35,i+.72,t+d*1.12)),n.add(o(new h(.55,.42,.4),s.plantLeaf,e+f*2.35+.2,i+1.05,t+d*1.12))}n.add(o(new h(1.7,.05,6.1),s.glowWarm,e+f*2.35,i+3.55,t))}n.add(o(new h(1.2,2,.15),s.habDark,e-7.1,i+1.2,t));const r=e+10.4,c=t,l=M(r,c);return n.add(o(new h(5.4,.2,4.6),s.concrete,r,l+.08,c)),n.add(o(new P(.52,.52,5.4,10),s.steel,r+1.15,l+2.9,c-1.05)),n.add(o(new P(1.75,.55,1.7,14),s.steelDark,r+1.15,l+6.2,c-1.05)),n.add(o(new Ce(1.5,.08,6,14),s.steel,r+1.15,l+7.1,c-1.05,Math.PI/2,0,0)),n.add(p("CO2","#1a100c","#f0c089",1.9,.5,r+1.15,l+3.7,c+.35)),n.add(o(new h(2.5,1.85,1.9),s.habDark,r-.7,l+1.08,c+.95)),n.add(p("COMPRESS","#1a100c","#f0c089",2.35,.55,r-.7,l+1.55,c+1.95)),n.add(o(new P(.14,.14,6.4,8),s.pipe,e+6.6,i+1.55,t,0,0,Math.PI/2)),n.add(o(new P(.68,.68,2.35,12),s.tankO2,e-5.5,i+1.45,t+5.15)),n.add(p("O2","#2a3340","#e8eef4",1.35,.42,e-5.5,i+1.65,t+5.95)),n.add(p("LIFE SUPPORT","#1a100c","#f0c089",3.7,.7,e,i+5.55,t+.15)),n.add(p("COMPRESSED CO2","#1a100c","#d6b48a",3.5,.55,e,i+4.75,t+.15)),n}function $i(n,e,t){const i=new R;i.name="rover";const a=M(n,e);i.position.set(n,a,e),i.rotation.y=t,i.add(o(new h(3.4,1.1,2.1),s.rover,0,1.35,0)),i.add(o(new h(1.4,.7,1.5),s.roverDark,1.2,2.1,0)),i.add(o(new h(2.2,.08,1.6),s.solar,0,2,0)),i.add(o(new P(.07,.07,2.1,6),s.steel,-.4,2.9,0)),i.add(o(new h(.25,.2,.25),s.roverDark,-.4,4,0));const r=new P(.55,.55,.35,12),c=[[-1.2,.55,1.15],[.1,.55,1.15],[1.2,.55,1.15],[-1.2,.55,-1.15],[.1,.55,-1.15],[1.2,.55,-1.15]];for(const[l,f,d]of c)i.add(o(r,s.roverDark,l,f,d,Math.PI/2,0,0));return i}function Qt(n,e,t){const i=new R;i.name="optimus";const a=M(n,e);return i.position.set(n,a,e),i.rotation.y=t,i.add(o(new h(.42,.62,.24),s.robot,0,1.28,0)),i.add(o(new P(.14,.15,.22,10),s.robot,0,1.72,0)),i.add(o(new h(.16,.08,.04),s.steelDark,0,1.74,.14)),i.add(o(new h(.12,.48,.12),s.robot,-.28,1.22,0)),i.add(o(new h(.12,.48,.12),s.robot,.28,1.22,0)),i.add(o(new h(.14,.62,.14),s.steelDark,-.1,.62,0)),i.add(o(new h(.14,.62,.14),s.steelDark,.1,.62,0)),i}function Em(){const n=new R;n.name="workshop";const e=48,t=-86,i=M(e,t),a=o(new P(6.2,6.2,16,16,1,!1,0,Math.PI),s.habDark,e,i+3.4,t);return a.rotation.z=Math.PI/2,n.add(a),n.add(o(new h(16,.3,10),s.concrete,e,i+.1,t)),n.add(o(new h(.2,4.2,6.5),s.steelDark,e-7.8,i+2.2,t)),n.add(o(new h(2.4,1.1,1.4),s.crate,e+2,i+.8,t+1.5)),n.add(o(new h(4.6,.16,.16),s.steel,e+1.2,i+.35,t-2.8)),n.add(o(new h(4.6,.16,.16),s.steel,e+1.2,i+.55,t-3.05)),n.add(p("WORKSHOP","#1a100c","#f0c089",3.6,.85,e,i+5.6,t+.2)),n}function Tm(){const n=new R;n.name="comms";const e=-18,t=-138,i=M(e,t);for(let r=0;r<8;r++)n.add(o(new h(.18,3.2,.18),s.lattice,e-.7,i+1.6+r*3,t-.7)),n.add(o(new h(.18,3.2,.18),s.lattice,e+.7,i+1.6+r*3,t-.7)),n.add(o(new h(.18,3.2,.18),s.lattice,e-.7,i+1.6+r*3,t+.7)),n.add(o(new h(.18,3.2,.18),s.lattice,e+.7,i+1.6+r*3,t+.7)),n.add(o(new h(1.6,.1,.1),s.lattice,e,i+3+r*3,t-.7)),n.add(o(new h(1.6,.1,.1),s.lattice,e,i+3+r*3,t+.7));const a=o(new _t(3.2,16,10,0,Math.PI*2,0,Math.PI/2.4),s.steel,e,i+26.5,t,-.7,.4,0);return n.add(a),n.add(o(new P(.08,.08,2.2,6),s.steelDark,e+.4,i+27.4,t+1.1,.6,0,0)),n}function Am(){const n=new R;n.name="ice-mine";const e=-58,t=-158,i=M(e,t);n.add(o(new h(8,.3,8),s.concrete,e,i+.1,t)),n.add(o(new h(.28,14,.28),s.lattice,e-2.2,i+7,t-2.2)),n.add(o(new h(.28,14,.28),s.lattice,e+2.2,i+7,t-2.2)),n.add(o(new h(.28,14,.28),s.lattice,e-2.2,i+7,t+2.2)),n.add(o(new h(.28,14,.28),s.lattice,e+2.2,i+7,t+2.2)),n.add(o(new h(5.2,.25,5.2),s.steelDark,e,i+14.2,t)),n.add(o(new P(.35,.55,9,10),s.steel,e,i+5,t)),n.add(o(new ii(.7,1.6,8),s.soot,e,i+.9,t));const a=o(new ut(3.4,0),s.ice,e+7.5,i+1.6,t+1.2);return a.scale.set(1.3,.7,1.1),n.add(a),n.add(o(new h(6,.35,1.1),s.steelDark,e+3.4,i+1.4,t,0,0,-.18)),n.add(p("ICE","#1a2830","#d6e6ef",2.2,.65,e,i+8.4,t+2.6)),n}function Za(n,e,t,i,a){const r=M(e,t);n.add(o(new P(.05,.07,3.2,6),s.steelDark,e,r+1.6,t)),n.add(o(new h(1.15,.7,.04),a,e+.58,r+2.75,t)),n.add(p(i,"#1a100c","#f0c089",1.45,.4,e+.58,r+2.75,t+.05))}function Yr(n,e,t,i){const a=M(e,t);n.add(o(new h(.07,1.55,.07),s.steelDark,e,a+.78,t)),n.add(o(new h(.38,.22,.03),i,e+.2,a+1.42,t))}function Cr(n,e,t,i=0){const a=M(e,t);n.add(o(new h(.85,.55,.65),s.crate,e,a+.32,t,0,i,0)),n.add(o(new h(.88,.06,.68),s.steelDark,e,a+.62,t,0,i,0))}function Rm(){const n=new R;n.name="solar-2";const e=6,t=4;for(let c=0;c<e;c++)for(let l=0;l<t;l++){const f=98+c*5.4,d=-74-l*6.2,u=M(f,d),x=o(new h(.18,1.6,.18),s.solarFrame,f,u+.8,d),m=o(new h(4.6,.08,2.3),s.solar,f,u+1.55,d,-.55,.15,0),g=o(new h(4.75,.05,2.42),s.solarFrame,f,u+1.5,d,-.55,.15,0);n.add(x,m,g)}const[i,a,r]=Pt(96,-72,.7);return n.add(o(new h(2.2,1.4,1.4),s.habDark,i,a,r)),n.add(p("POWER","#111111","#f4e6c8",2,.55,i,a+.2,r+.75)),n}function Cm(){const n=new R;n.name="solar-tie";const e=90,t=-48,i=112,a=-83,r=[],c=5;for(let l=0;l<=c;l++){const f=l/c,d=e+(i-e)*f,u=t+(a-t)*f,x=M(d,u);n.add(o(new P(.09,.11,4.4,6),s.steelDark,d,x+2.2,u)),n.add(o(new h(1.15,.08,.08),s.steel,d,x+4.35,u)),r.push({x:d,y:x+4.32,z:u})}for(let l=0;l<r.length-1;l++){const f=r[l],d=r[l+1];for(const u of[-.38,.38]){const x=new Bi([new _(f.x,f.y,f.z+u),new _((f.x+d.x)/2,(f.y+d.y)/2-.65,(f.z+d.z)/2+u),new _(d.x,d.y,d.z+u)]),m=new ot(new ai(x,6,.035,4,!1),s.cable);m.castShadow=!1,n.add(m)}}return n}function Pm(){const n=new R;n.name="hab-assembly";const e=-32,t=-98,i=M(e,t);n.add(o(new h(18,.22,14),s.concrete,e,i+.08,t));const a=[[-5,-2.2],[5,-2.2],[-5,2.2],[5,2.2]];for(const[c,l]of a)n.add(o(new P(.18,.28,1.85,8),s.steelDark,e+c,i+1.02,t+l)),n.add(o(new h(.72,.12,.72),s.steel,e+c,i+.14,t+l)),n.add(o(new h(.55,.1,.55),s.steel,e+c,i+1.96,t+l));const r=i+3.55;n.add(o(new P(3,3,11,16),s.hab,e,r,t,0,0,Math.PI/2)),n.add(o(new _t(3,14,10),s.hab,e-5.5,r,t)),n.add(o(new _t(3,14,10,0,Math.PI*2,0,Math.PI/2),s.hab,e+8.4,i+1.55,t+.45,.22,.35,.12)),n.add(o(new P(1.35,1.35,2.4,12),s.habDark,e,r,t+4.15,Math.PI/2,0,0)),n.add(o(new h(1,1.65,.1),s.steelDark,e,r,t+5.45)),n.add(o(new Ce(1.38,.08,6,14),s.steel,e,r,t+3.05,0,0,0));for(const[c,l]of[[-7.2,4.6],[6.8,4.8],[-6.4,-5.2]])n.add(o(new h(.12,3.6,.12),s.lattice,e+c,i+1.9,t+l)),n.add(o(new h(.12,3.6,.12),s.lattice,e+c+1.4,i+1.9,t+l)),n.add(o(new h(1.6,.08,.08),s.lattice,e+c+.7,i+3.7,t+l));return J(n,e-8.2,t+6.2,.2),J(n,e-6.3,t+7.4,-.35),J(n,e+7.1,t-5.6,.5,1.1),J(n,e+5.4,t-6.4,.15),n.add(p("HAB KIT","#1a100c","#f0c089",3,.75,e,i+6.4,t+3.2)),n.add(p("AIRLOCK","#1a100c","#f0c089",2.2,.55,e+2.4,r+.2,t+4.2,Math.PI/2)),n}function un(n,e,t,i,a={}){const r=M(e,t),c=a.r||2.85,l=a.len||10.4,f=a.onStands?r+3.4:r+3.05,d=Math.cos(i),u=Math.sin(i);if(a.onStands)for(const[m,g]of[[-4.1,-2.05],[4.1,-2.05],[-4.1,2.05],[4.1,2.05]]){const v=e+d*m-u*g,y=t+u*m+d*g;n.add(o(new P(.16,.26,1.75,8),s.steelDark,v,r+.98,y)),n.add(o(new h(.7,.12,.7),s.steel,v,r+.14,y)),n.add(o(new h(.52,.1,.52),s.steel,v,r+1.9,y))}else for(const[m,g]of[[-3.6,0],[3.6,0]]){const v=e+d*m-u*g,y=t+u*m+d*g;n.add(o(new h(1.6,.55,1.15),s.steelDark,v,r+.38,y,0,i,0))}const x=o(new P(c,c,l,16),s.hab,e,f,t,0,0,Math.PI/2);if(x.rotation.y=i,n.add(x),!a.partial)n.add(o(new _t(c,14,10),s.hab,e+d*(l/2),f,t+u*(l/2))),n.add(o(new _t(c,14,10),s.hab,e-d*(l/2),f,t-u*(l/2)));else{n.add(o(new _t(c,14,10),s.hab,e-d*(l/2),f,t-u*(l/2)));const m=e+d*(l/2+2.3),g=t+u*(l/2+2.3);n.add(o(new _t(c,14,10,0,Math.PI*2,0,Math.PI/2),s.hab,m,r+1.45,g,.22,.3,.1))}for(let m=-2;m<=2;m++){const g=e+d*m*1.75,v=t+u*m*1.75;n.add(o(new h(.8,.55,.08),s.glowWarm,g-u*c,f+.08,v+d*c))}if(a.airlock){const m=e-u*(c+1.15),g=t+d*(c+1.15);n.add(o(new P(1.15,1.15,2.2,12),s.habDark,m,f,g,Math.PI/2,i,0)),n.add(o(new h(1,1.6,.1),s.steelDark,m-u*1.15,f,g+d*1.15,0,i,0)),n.add(o(new Ce(1.18,.07,6,14),s.steel,m+u*.2,f,g-d*.2,0,i,0)),n.add(p("AIRLOCK","#1a100c","#f0c089",2.15,.5,m-u*.2,f+1.45,g+d*.2,i))}a.label&&n.add(p(a.label,"#1a100c","#f0c089",2.7,.65,e,f+c+.55,t+.15,i))}function Dm(){const n=new R;n.name="pressure-habs";const e=M(-46,-101);n.add(o(new h(28,.2,22),s.concrete,-50,e+.06,-101)),un(n,-46,-108,0,{airlock:!0,label:"HAB 2"}),un(n,-46,-94,0,{onStands:!0,airlock:!0,label:"HAB KIT"});const t=M(-46,-101)+3.15;return n.add(o(new P(1.15,1.15,8.2,12),s.habDark,-46,t,-101,Math.PI/2,0,0)),n.add(o(new Ce(1.2,.08,6,14),s.steel,-46,t,-105.1,Math.PI/2,0,0)),n.add(o(new Ce(1.2,.08,6,14),s.steel,-46,t,-96.9,Math.PI/2,0,0)),n.add(p("CONNECT","#1a100c","#f0c089",2.4,.5,-46,t+1.55,-101)),un(n,-58,-102,Math.PI/2,{onStands:!0,partial:!0,label:"MOD"}),J(n,-54.5,-110.2,.25),J(n,-52.8,-111.4,-.3,1.08),J(n,-61.2,-96.4,.4),J(n,-40.6,-90.8,.15,1.05),n}function It(n,e,t){const i=new R;i.name="eva";const a=M(n,e);return i.position.set(n,a,e),i.rotation.y=t,i.add(o(new h(.56,.8,.4),s.suit,0,1.46,0)),i.add(o(new h(.44,.5,.24),s.suitDark,0,1.52,-.3)),i.add(o(new _t(.21,12,10),s.suit,0,2.04,.02)),i.add(o(new _t(.165,10,8,0,Math.PI*2,0,Math.PI*.58),s.visor,0,2.04,.1)),i.add(o(new h(.17,.6,.17),s.suit,-.4,1.36,.04)),i.add(o(new h(.17,.6,.17),s.suit,.4,1.36,.04)),i.add(o(new h(.2,.76,.2),s.suitDark,-.15,.7,0)),i.add(o(new h(.2,.76,.2),s.suitDark,.15,.7,0)),i}function zm(n,e,t,i){const a=M(e,t),r=new R;r.position.set(e,a,t),r.rotation.y=i,r.add(o(new h(1.2,.18,.72),s.steelDark,0,.62,0)),r.add(o(new h(1.15,.28,.68),s.crate,0,.86,0)),r.add(o(new h(.08,.55,.08),s.steel,-.48,.32,.26)),r.add(o(new h(.08,.55,.08),s.steel,.48,.32,.26)),r.add(o(new h(.08,.55,.08),s.steel,-.48,.32,-.26)),r.add(o(new h(.08,.55,.08),s.steel,.48,.32,-.26));const c=new P(.12,.12,.1,10);r.add(o(c,s.roverDark,-.48,.12,.3,Math.PI/2,0,0)),r.add(o(c,s.roverDark,.48,.12,.3,Math.PI/2,0,0)),r.add(o(c,s.roverDark,-.48,.12,-.3,Math.PI/2,0,0)),r.add(o(c,s.roverDark,.48,.12,-.3,Math.PI/2,0,0)),r.add(o(new h(.06,.7,.06),s.steel,-.22,1.3,.08)),r.add(o(new h(.06,.55,.06),s.steel,.18,1.22,-.06)),r.add(o(new h(.22,.12,.12),s.steelDark,-.22,1.68,.08)),n.add(r)}function Im(n,e,t,i){const a=M(e,t),r=new R;r.position.set(e,a,t),r.rotation.y=i,r.add(o(new h(.85,2.45,.32),s.steelDark,0,1.32,0)),r.add(o(new Ce(.42,.07,8,14),s.steel,0,1.58,.22)),r.add(o(new P(.38,.38,.1,12),s.habDark,0,1.58,.18,Math.PI/2,0,0)),r.add(o(new h(.7,.16,.55),s.steel,0,.12,.05)),n.add(r)}function Lm(){const n=new R;n.name="eva-presence",n.add(It(2.4,12.2,rn(2.4,12.2,0,7))),n.add(It(-2.2,11.5,rn(-2.2,11.5,0,7))),n.add(It(3.8,15.6,.35)),n.add(It(.6,18.2,Math.PI)),zm(n,4.3,14.8,.4),Im(n,-3.9,9.1,.2),J(n,5.4,13.2,.2,.85);const e=M(5.1,16.4);return n.add(o(new h(.1,2.2,.1),s.steelDark,5.1,e+1.1,16.4)),n.add(p("EVA PREP","#1a100c","#f0c089",2.3,.55,5.1,e+2.45,16.4,-.35)),n}function Um(){const n=new R;n.name="survey";const e=-82,t=-176,i=M(e,t);for(let d=0;d<3;d++){const u=d/3*Math.PI*2+.4,x=Math.cos(u)*.62,m=Math.sin(u)*.62;n.add(o(new h(.08,2.5,.08),s.steelDark,e+x,i+1.15,t+m,.32*Math.cos(u),0,.32*Math.sin(u)))}n.add(o(new h(.58,.32,.48),s.roverDark,e,i+2.28,t)),n.add(o(new P(.04,.04,1.35,6),s.steel,e,i+3.08,t)),n.add(o(new h(.22,.12,.22),s.steelDark,e,i+3.78,t)),n.add(o(new h(.12,2.2,.12),s.steelDark,e+1.15,i+1.1,t+.2)),n.add(p("SURVEY","#1a100c","#f0c089",2.6,.7,e+.2,i+3.55,t+1.15));const a=[[-108,-210],[-98,-210],[-88,-210],[-78,-210],[-68,-210],[-108,-198],[-98,-198],[-88,-198],[-78,-198],[-68,-198],[-108,-186],[-98,-186],[-88,-186],[-78,-186],[-68,-186],[-108,-174],[-98,-174],[-88,-174],[-78,-174],[-68,-174]];for(let d=0;d<a.length;d++){const[u,x]=a[d];Yr(n,u,x,d%3===0?s.flagIce:s.flagDeposit)}Za(n,-96,-198,"ICE",s.flagIce),Za(n,-72,-204,"H2O",s.flagIce),Za(n,-104,-176,"DEPOSIT",s.flagDeposit);const r=[[-90,-184,.2],[-88.4,-182.6,-.4],[-91.2,-181.8,.7],[-86.6,-185.2,.1]];for(const[d,u,x]of r)Cr(n,d,u,x);J(n,-84.5,-180.4,.15,.85),n.add(p("SAMPLES","#1a2830","#d6e6ef",2.2,.55,-90,M(-90,-184)+1.55,-184));const c={x:-60,z:-162},l={x:-100,z:-200},f=14;for(let d=0;d<f;d++){const u=d/(f-1),x=c.x+(l.x-c.x)*u,m=c.z+(l.z-c.z)*u,g=M(x,m),v=Math.atan2(l.x-c.x,l.z-c.z);for(const y of[-.55,.55]){const b=Math.cos(v)*y,w=-Math.sin(v)*y,z=o(new h(.42,.05,.85),s.track,x+b,g+.04,m+w,0,v,0);z.castShadow=!1,n.add(z)}}return n}function Y(n,e,t,i=.14){const a=[];for(let l=0;l<e.length;l++){const[f,d]=e[l],u=M(f,d)+1.05;a.push(new _(f,u,d)),l%2===0&&n.add(o(new h(.18,1.05,.18),s.steelDark,f,M(f,d)+.5,d))}const r=new Bi(a),c=new ot(new ai(r,28,i,6,!1),t);c.castShadow=!1,n.add(c)}function Nm(){const n=new R;return n.name="methalox-lines",Y(n,[[-76,-10.6],[-52,-18],[-32,-14],[-18,-8.4]],s.tankCh4,.13),Y(n,[[-76,-21.2],[-52,-24],[-32,-18],[-18,-9.6]],s.steel,.13),n.add(p("TO PAD","#1a100c","#f0c089",2.2,.5,-50,M(-50,-18)+2.15,-16.4)),n}function Om(){const n=new R;n.name="methalox-stand";const e=-15,t=-8,i=M(e,t);n.add(o(new h(8.6,.16,5.4),s.steelDark,e,i+.42,t)),n.add(o(new P(.88,.88,3.5,14),s.tankCh4,e-2.25,i+2.2,t+.55)),n.add(o(new P(.88,.88,3.5,14),s.tankO2,e-2.25,i+2.2,t-1.25)),n.add(p("CH4","#6a2208","#f4e6c8",1.45,.42,e-1.3,i+2.25,t+.55,Math.PI/2)),n.add(p("O2","#2a3340","#e8eef4",1.45,.42,e-1.3,i+2.25,t-1.25,Math.PI/2));const a=[[1.55,1.65],[1.55,-1.65],[3.45,1.65],[3.45,-1.65]];for(const[r,c]of a)n.add(o(new h(.16,3.15,.16),s.steelDark,e+r,i+1.88,t+c));return n.add(o(new h(2.25,.12,3.5),s.steel,e+2.5,i+3.5,t)),n.add(o(new Ce(.42,.11,8,14),s.tankCh4,e+.15,i+1.45,t+.55,Math.PI/2,0,0)),n.add(o(new Ce(.42,.11,8,14),s.steel,e+.15,i+1.45,t-1.2,Math.PI/2,0,0)),n.add(o(new P(.09,.09,6.4,8),s.tankCh4,e+4.55,i+1.18,t+.55,0,0,Math.PI/2)),n.add(o(new P(.09,.09,6.4,8),s.steel,e+4.55,i+.98,t-1.2,0,0,Math.PI/2)),n.add(o(new h(1.55,1.05,1.15),s.habDark,e+.55,i+.98,t+1.85)),n.add(o(new P(.55,.55,2.8,12),s.tankCh4,e-.4,i+1.15,t+2.55,0,0,Math.PI/2)),n.add(o(new h(1.6,.35,.85),s.steelDark,e-.4,i+.55,t+2.55)),n.add(p("METHALOX","#1a100c","#f0c089",3.15,.68,e+2.5,i+4.12,t)),n.add(p("RETURN PROPELLANT","#1a100c","#f0c089",3.85,.58,e+2.5,i+3.42,t+.02)),n.add(o(new P(.22,.28,3.2,10),s.steelDark,e+5.4,i+2,t+.2)),n.add(o(new h(7.6,.22,.22),s.steel,e+8.8,i+3.55,t+1.4,0,-.45,.18)),n.add(o(new h(6.2,.18,.18),s.tankCh4,e+11.6,i+4.4,t+2.6,0,-.45,.12)),n.add(o(new h(6.2,.18,.18),s.steel,e+11.6,i+4.05,t+2.85,0,-.45,.12)),n.add(o(new P(.28,.22,1.1,10),s.steelDark,e+14.2,i+4.7,t+3.6)),n.add(p("LOAD ARM","#1a100c","#f0c089",2.8,.45,e+8.2,i+4.85,t+1.1,-.45)),n}function Fm(){const n=new R;n.name="spaceport-sign";const e=17,t=-17,i=M(e,t);return n.add(o(new h(.12,3.5,.12),s.steelDark,e,i+1.75,t)),n.add(p("SPACEPORT","#1a100c","#f0c089",3.5,.85,e,i+3.45,t,.55)),n.add(p("METHALOX PAD","#1a100c","#d6b48a",3.2,.58,e,i+2.55,t,.55)),n}function km(n,e,t,i,a,r){const c=i-e,l=a-t,f=Math.hypot(c,l),d=Math.ceil(f/6),u=Math.atan2(c,l);for(let x=0;x<d;x++){const m=(x+.5)/d,g=e+c*m,v=t+l*m,y=M(g,v),b=f/d+.35,w=o(new h(r+1.7,.055,b+.25),s.roadBed,g,y+.03,v,0,u,0);w.castShadow=!1,n.add(w);const z=o(new h(r,.08,b+.15),s.padRing,g,y+.07,v,0,u,0);z.castShadow=!1,n.add(z)}}function Bm(n,e,t,i=4.2){const a=M(e,t),r=o(new P(i+.8,i+.8,.06,20),s.roadBed,e,a+.03,t);r.castShadow=!1,n.add(r);const c=o(new P(i,i,.08,20),s.graded,e,a+.07,t);c.castShadow=!1,n.add(c)}function Hm(){const n=new R;n.name="roads";const e=[[0,18,0,-124,5.2],[0,-40,84,-42,4.6],[0,-40,-68,-16,4.6],[0,-92,-56,-154,4],[16,-72,48,-86,3.6],[12,8,50,22,4.2],[16,28,22,78,3.5],[-58,-158,-90,-190,3.6],[-14,-104,-32,-98,3.4],[84,-42,112,-83,3.6],[0,-108,22,-112,3.6],[22,-112,48,-86,3.4],[-6,-116,-18,-138,3.2],[0,8,-15,-8,3.4],[16,28,36,72,3.8],[0,18,-24,44,3.8],[-58,-158,-64,-90,4.2],[-64,-90,-68,-16,4.2],[-18,-138,-32,-148,3.2],[-32,-98,-46,-100,3.4],[0,18,-48,68,3.8],[16,28,78,56,3.8],[-6,-116,-13,-134,3.4],[22,-112,38,-126,3.4],[-58,-158,-60,-148,3.2],[-64,-118,-18,-88,3.6],[84,-42,68,-10,3.4],[-6,-108,-18,-88,3.2],[38,-126,8,-142,3.4],[-13,-134,8,-142,3.2],[112,-83,135,-40,3.6],[68,-10,68,6,3.2],[-13,-134,-28,-138,3],[-46,-108,-20,-132,3.2],[-6,-108,-6,-132,3.2],[-6,-96,2,-22,3.4],[-32,-98,-36,-74,3.2],[-40,-76,-32,-98,3.2],[-40,-76,-50,-72,3],[-6,-132,10,-124,3.2],[10,-124,8,-142,3],[0,8,20,8,3.4],[22,82,-16,136,3.6],[0,32,-16,136,3.4],[135,-40,158,-62,3.4],[-68,-16,-96,-16,3.6],[-58,-158,-78,-172,3.4],[48,-86,66,-74,3.4],[8,-142,18,-152,3.2],[-18,-88,18,-152,3.2],[-32,-148,-8,-162,3.2],[-6,-108,8,-98,3.2],[22,-112,8,-98,3.2],[48,-86,48,-70,3.2],[-68,-16,-68,12,3.2],[-36,-74,22,-80,3.2],[48,-86,22,-80,3.2],[22,-112,52,-112,3.2],[38,-126,52,-112,3.2],[-78,-172,-90,-158,3.2],[8,-98,8,-78,3.2],[22,-80,8,-78,3.2],[8,-98,-8,-88,3.2],[-22,-88,-8,-88,3.2],[-96,-16,-96,4,3.2],[158,-62,142,-62,3.2],[8,-142,28,-140,3.2],[18,-152,28,-140,3.2],[-90,-158,-90,-148,3.2],[5,16,12,18,3],[20,8,36,8,3.2],[36,8,36,-6,3.2],[-68,4,-50,4,3.2],[-58,-158,-58,-142,3.2],[-15,-8,-32,-22,3.2],[66,-74,66,-90,3.2],[8,-98,22,-98,3.2],[158,-62,172,-48,3.2],[22,-112,38,-104,3.2],[10,-124,24,-128,3],[-68,12,-80,20,3.2],[-16,136,6,148,3],[-48,68,-64,80,3.2],[-80,20,-80,32,3.2],[135,-40,100,-22,3.2],[100,-22,68,-10,3.2],[-36,-74,-22,-56,3.2],[-90,-158,-124,-188,3.2],[-50,4,-38,16,3.2],[52,-112,70,-112,3.2],[22,82,16,48,3],[-58,-142,-58,-36,3.2],[-58,-36,-68,-16,3.2],[36,8,50,4,3],[-58,-158,-40,-168,3],[66,-90,82,-90,3.2],[-8,-162,4,-148,3],[135,-40,148,-40,3.2],[112,-83,124,-70,3.2],[82,-44,96,-44,3.2],[-68,12,-84,8,3.2],[-8,-88,16,-86,3.2],[135,-40,135,-22,3.2],[124,-70,100,-70,3.2],[82,-44,82,-28,3.2],[-68,-16,-68,2,3.2],[135,-40,122,-40,3],[112,-83,98,-83,3],[82,-44,70,-44,3],[-90,-158,-102,-158,3.2],[8,-78,-18,-78,3.2],[-78,-172,-64,-184,3.2],[18,-152,32,-152,3.2],[-96,4,-96,16,3.2],[66,-74,82,-74,3.2],[-78,-172,-78,-156,3.2],[-96,4,-110,8,3.2],[-110,8,-110,20,3.2],[-110,20,-110,32,3.2],[-110,8,-122,8,3.2],[-122,8,-122,20,3.2],[8,-98,-8,-98,3.2],[-8,-98,-22,-98,3.2],[-8,-88,8,-88,3.2],[-58,-36,-78,-36,3.2],[82,-90,96,-90,3.2],[8,-78,-5,-78,3],[4,-148,16,-148,3.2],[-90,-148,-90,-136,3.2],[16,-86,16,-74,3.2],[-32,-148,-48,-138,3.2],[52,-112,52,-126,3.2],[52,-126,70,-126,3.2],[0,-68,0,-118,3],[48,-70,90,-80,3],[-46,-148,-90,-148,3],[-38,16,-68,12,3],[38,-104,52,-112,3],[172,-48,158,-62,3],[-16,36,4,32,3],[4,-138,-18,-138,3],[68,6,50,4,3],[66,-90,66,-104,3.2],[66,-104,80,-104,3],[6,148,18,136,3],[8,-98,22,-98,3],[172,-48,172,-62,3],[-64,-184,-92,-184,3.2],[-18,-88,-32,-88,3],[96,-90,96,-104,3],[-15,-8,-28,-8,3],[-28,-8,-28,6,3],[-32,-88,-46,-88,3],[-50,4,-50,-22,3],[-68,12,-80,20,3],[-38,16,-38,28,3],[-58,-142,-46,-132,3],[38,-104,24,-118,3],[-90,-136,-110,-136,3.2],[-32,-98,-22,-110,3],[172,-62,158,-48,3],[96,-90,110,-90,3],[8,-98,8,-110,3],[-46,-148,-70,-148,3],[82,-28,96,-28,3],[124,-70,124,-83,3],[148,-40,148,-22,3],[32,-152,46,-152,3],[18,136,32,136,3],[-8,-98,-8,-110,3],[96,-104,110,-104,3],[82,-28,70,-28,3],[124,-70,136,-70,3],[135,-22,122,-22,3],[-102,-158,-114,-158,3],[-32,-22,-32,-36,3],[-28,6,-42,6,3],[16,-74,28,-74,3],[80,-104,80,-118,3],[52,-126,38,-132,3],[32,136,46,136,3],[28,-140,40,-140,3],[66,-90,52,-90,3],[-110,-136,-124,-136,3],[16,-148,28,-162,3],[46,136,46,148,3],[96,-104,96,-118,3],[-102,-158,-102,-148,3],[110,-104,110,-118,3],[-32,-36,-18,-36,3],[-42,6,-42,-8,3],[0,-68,8,-68,3],[18,-152,8,-162,3],[28,-74,40,-74,3],[-58,-142,-70,-136,3],[110,-90,124,-90,3],[52,-126,52,-140,3],[16,-148,16,-136,3],[110,-104,124,-104,3],[-78,-156,-92,-172,3],[24,-128,36,-128,3],[-46,-88,-58,-88,3],[36,23.5,36,36,3],[22,-98,22,-110,3],[96,-44,108,-44,3],[-78,-172,-64,-172,3],[110,-118,124,-118,3],[124,-83,136,-83,3],[148,-40,160,-40,3],[172,-62,184,-62,3],[36,36,36,48,3],[-22,-110,-36,-110,3],[36,36,22,36,3],[-8,-88,-8,-76,3],[70,-126,70,-140,3],[22,36,8,36,3],[16,-148,28,-148,3],[-58,-88,-58,-76,3],[-114,-158,-114,-148,3],[68,6,68,18,3],[-122,8,-122,-4,3],[-84,8,-84,-4,3],[-80,32,-80,44,3],[-80,44,-80,56,3],[-40,-168,-28,-180,3],[-64,-184,-52,-196,3],[124,-118,138,-118,3],[8,-68,8,-56,3],[-68,2,-68,-10,3],[-68,12,-54,24,3],[-58,-36,-58,-48,3],[-38,28,-38,40,3],[138,-118,138,-132,3],[40,-74,52,-74,3],[16,-86,28,-86,3],[138,-132,138,-146,3],[-58,-76,-70,-76,3],[-46,-88,-46,-100,3],[138,-146,138,-160,3],[-22,-110,-8,-98,3],[-90,-136,-90,-124,3],[70,-140,70,-152,3],[138,-160,138,-174,3],[52,-140,52,-154,3],[8,-110,8,-122,3],[22,-110,22,-122,3],[138,-174,138,-188,3],[38,-132,38,-146,3],[138,-188,138,-202,3],[52,-154,52,-168,3],[138,-202,138,-216,3],[-46,-132,-34,-146,3],[138,-216,138,-230,3],[22,-98,36,-110,3],[28,-162,40,-162,3],[138,-230,138,-244,3],[46,136,60,136,3],[138,-244,138,-258,3],[36,-110,50,-110,3],[138,-258,138,-272,3],[138,-272,138,-286,3],[138,-286,138,-300,3],[138,-300,138,-314,3],[138,-314,138,-328,3],[-70,-76,-82,-76,3],[-46,-100,-58,-100,3],[32,-152,32,-176,3],[36,36,50,36,3],[36,48,50,48,3],[22,36,22,48,3],[8,36,8,48,3],[46,148,60,148,3],[32,136,32,148,3],[18,136,18,148,3],[50,-110,50,-122,3],[138,-328,138,-342,3],[138,-342,138,-356,3],[138,-356,138,-370,3],[138,-370,138,-384,3],[138,-384,138,-398,3],[50,-122,64,-122,3],[-34,-146,-22,-146,3],[138,-398,138,-412,3],[138,-412,138,-426,3],[138,-426,138,-440,3],[138,-440,138,-454,3],[138,-454,138,-468,3],[138,-468,138,-482,3],[-82,-76,-94,-76,3],[-58,-100,-70,-100,3],[32,-176,46,-176,3],[138,-482,138,-496,3],[60,136,74,136,3],[74,136,74,148,3],[32,148,32,160,3]];for(const[i,a,r,c,l]of e)km(n,i,a,r,c,l);for(const[i,a,r]of[[0,-40,5.2],[0,-108,4.4],[84,-42,4],[22,-112,3.8],[0,10,4.6],[-64,-90,4.2],[36,72,3.6],[-46,-100,3.6],[38,-126,3.6],[-18,-88,3.8],[68,-10,3.8],[-48,68,3.6],[78,56,3.6],[-13,-134,3.6],[8,-142,3.6],[135,-40,3.6],[68,6,3.6],[-36,-74,3.6],[2,-22,3.4],[-50,-72,3.4],[10,-124,3.6],[20,8,3.6],[-16,136,4.2],[158,-62,3.6],[-96,-16,3.8],[-78,-172,3.6],[66,-74,3.6],[18,-152,3.4],[-8,-162,3.4],[8,-98,3.4],[48,-70,3.4],[-68,12,3.4],[22,-80,3.4],[52,-112,3.6],[-90,-158,3.4],[8,-78,3.4],[-8,-88,3.4],[-96,4,3.4],[142,-62,3.4],[28,-140,3.4],[-90,-148,3.4],[12,18,3.2],[36,8,3.4],[36,-6,3.4],[-50,4,3.4],[-58,-142,3.4],[-32,-22,3.4],[66,-90,3.4],[22,-98,3.4],[172,-48,3.4],[38,-104,3.4],[24,-128,3.2],[-80,20,3.4],[6,148,3.2],[-64,80,3.4],[-80,32,3.4],[100,-22,3.4],[-22,-56,3.4],[-124,-188,3.4],[-38,16,3.4],[70,-112,3.4],[16,48,3.2],[-58,-36,3.4],[50,4,3.2],[-40,-168,3.2],[82,-90,3.4],[4,-148,3.2],[148,-40,3.4],[124,-70,3.4],[96,-44,3.4],[-84,8,3.4],[16,-86,3.4],[135,-22,3.4],[100,-70,3.4],[82,-28,3.4],[-68,2,3.4],[122,-40,3.2],[98,-83,3.2],[70,-44,3.2],[-102,-158,3.4],[-18,-78,3.4],[-64,-184,3.2],[32,-152,3.4],[-96,16,3.4],[82,-74,3.6],[-78,-156,3.4],[-110,8,3.4],[-110,20,3.4],[-110,32,3.4],[-122,8,3.4],[-122,20,3.4],[-8,-98,3.4],[-22,-98,3.4],[8,-88,3.4],[-78,-36,3.4],[96,-90,3.4],[-5,-78,3.2],[16,-148,3.2],[-90,-136,3.4],[16,-74,3.2],[-48,-138,3.2],[52,-126,3.4],[70,-126,3.4],[0,-68,3.2],[48,-70,3.2],[-46,-148,3.2],[-38,16,3.2],[38,-104,3.2],[172,-48,3.2],[-16,36,3.2],[4,-138,3.2],[68,6,3.2],[66,-104,3.4],[80,-104,3.2],[18,136,3.2],[22,-98,3.2],[172,-62,3.2],[-92,-184,3.2],[-32,-88,3.2],[96,-104,3.2],[-28,-8,3.2],[-28,6,3.2],[-46,-88,3.2],[-50,-22,3.2],[-80,20,3.2],[-38,28,3.2],[-46,-132,3.2],[24,-118,3.2],[-110,-136,3.2],[-22,-110,3.2],[158,-48,3.2],[110,-90,3.2],[8,-110,3.2],[-70,-148,3.2],[96,-28,3.2],[124,-83,3.2],[148,-22,3.2],[46,-152,3.2],[32,136,3.2],[-8,-110,3.2],[110,-104,3.2],[70,-28,3.2],[136,-70,3.2],[122,-22,3.2],[-114,-158,3.2],[-32,-36,3.2],[-42,6,3.2],[28,-74,3.2],[80,-118,3.2],[38,-132,3.2],[46,136,3.2],[40,-140,3.2],[52,-90,3.2],[-124,-136,3.2],[28,-162,3.2],[46,148,3.2],[96,-118,3.2],[-102,-148,3.2],[110,-118,3.2],[-18,-36,3.2],[-42,-8,3.2],[8,-68,3.2],[8,-162,3.2],[40,-74,3.2],[-70,-136,3.2],[124,-90,3.2],[52,-140,3.2],[16,-136,3.2],[124,-104,3.2],[-92,-172,3.2],[36,-128,3.2],[-58,-88,3.2],[36,36,3.2],[22,-110,3.2],[108,-44,3.2],[-64,-172,3.2],[124,-118,3.2],[136,-83,3.2],[160,-40,3.2],[184,-62,3.2],[36,48,3.2],[-36,-110,3.2],[22,36,3.2],[-8,-76,3.2],[70,-140,3.2],[8,36,3.2],[28,-148,3.2],[-58,-76,3.2],[-114,-148,3.2],[68,18,3.2],[-122,-4,3.2],[-84,-4,3.2],[-80,44,3.2],[-80,56,3.2],[-28,-180,3.2],[-52,-196,3.2],[138,-118,3.2],[8,-56,3.2],[-68,-10,3.2],[-54,24,3.2],[-58,-48,3.2],[-38,40,3.2],[138,-132,3.2],[52,-74,3.2],[28,-86,3.2],[138,-146,3.2],[-70,-76,3.2],[-46,-100,3.2],[138,-160,3.2],[-8,-98,3.2],[-90,-124,3.2],[70,-152,3.2],[138,-174,3.2],[52,-154,3.2],[8,-122,3.2],[22,-122,3.2],[138,-188,3.2],[38,-146,3.2],[138,-202,3.2],[52,-168,3.2],[138,-216,3.2],[-34,-146,3.2],[138,-230,3.2],[36,-110,3.2],[40,-162,3.2],[138,-244,3.2],[60,136,3.2],[138,-258,3.2],[50,-110,3.2],[138,-272,3.2],[138,-286,3.2],[138,-300,3.2],[138,-314,3.2],[138,-328,3.2],[-82,-76,3.2],[-58,-100,3.2],[32,-176,3.2],[50,36,3.2],[50,48,3.2],[22,48,3.2],[8,48,3.2],[60,148,3.2],[32,148,3.2],[18,148,3.2],[50,-122,3.2],[138,-342,3.2],[138,-356,3.2],[138,-370,3.2],[138,-384,3.2],[138,-398,3.2],[64,-122,3.2],[-22,-146,3.2],[138,-412,3.2],[138,-426,3.2],[138,-440,3.2],[138,-454,3.2],[138,-468,3.2],[138,-482,3.2],[-94,-76,3.2],[-70,-100,3.2],[46,-176,3.2],[138,-496,3.2],[74,136,3.2],[74,148,3.2],[32,160,3.2]])Bm(n,i,a,r);const t=[[3.2,-20],[-3.2,-20],[3.2,-60],[-3.2,-60],[3.2,-90],[22,-40],[42,-40],[64,-41],[-22,-32],[-44,-24],[8,-110],[16,-111],[-8,-130],[-28,-148],[-70,-172],[96,-58],[104,-72],[28,50],[32,62],[-12,30],[-20,40],[-60,-130],[-66,-70],[-66,-40],[-26,-144],[-40,-100],[-52,-108],[3.4,12],[-3.2,12],[30,-118],[38,-126],[-60,-148],[-64,-118],[-18,-88],[68,-10]];for(const[i,a]of t)Yr(n,i,a,s.flagDeposit);return n}function Gm(){const n=new R,e=[[18,-8],[-16,-6],[12,-48],[-10,-70],[6,-100],[30,-100],[-30,-20],[40,-40],[40,18],[58,32],[16,70],[28,88],[-54,-8],[-80,-176],[-96,-196],[-28,-90],[112,-80],[100,-50],[0,-40],[22,-112],[32,-112],[70,-40],[84,-44],[36,60],[-24,32],[-64,-90],[-40,-148],[-32,-156],[4,14],[-46,-108],[-46,-92],[-58,-102],[38,-126],[-18,-88],[68,-10],[-60,-148],[-64,-118],[-22,-88]];for(const[t,i]of e){const a=M(t,i);n.add(o(new P(.1,.12,5.2,6),s.steelDark,t,a+2.6,i)),n.add(o(new h(.7,.15,.35),s.glowWarm,t,a+5.3,i))}return n}function Vm(){const n=new R,e=14,t=22,i=M(e,t);n.add(o(new h(.12,3.6,.12),s.steelDark,e,i+1.8,t));const a=p("BASE ALPHA","#1a100c","#f0c089",3.8,1.05,e,i+3.55,t,.4);n.add(a);const r=p("CARGO CAMPAIGN","#1a100c","#f0c089",3.4,.7,e,i+2.55,t,.4);n.add(r);const c=p("ARCADIA PLANITIA","#1a100c","#d6b48a",3.2,.55,18,M(18,26)+2.15,26,.15);n.add(o(new h(.1,2.2,.1),s.steelDark,18,M(18,26)+1.1,26)),n.add(c);const l=20,f=36,d=M(l,f);return n.add(o(new h(.1,2.6,.1),s.steelDark,l,d+1.3,f)),n.add(p("6 SHIPS","#1a100c","#f0c089",2.6,.65,l,d+3.15,f,.25)),n.add(p("TWO WINDOWS","#1a100c","#d6b48a",2.8,.5,l,d+2.45,f,.25)),n}function rn(n,e,t,i){return Math.atan2(-(i-e),t-n)}function ac(n,e){const t=new R;t.name="window-offload";const i=[[n,e,.2],[n-1.8,e+2.1,-.3],[n+1.6,e+2.4,.7],[n-2.4,e-1.2,.15],[n+.8,e-2.2,1.1],[n-3.2,e+.6,-.4]];for(const[l,f,d]of i)J(t,l,f,d);J(t,n-4.2,e+1.4,.2,1.12),J(t,n-5.4,e-.6,-.15,1.05);const[a,r,c]=Pt(n-1.2,e,.08);return t.add(o(new h(7.2,.12,3.8),s.steelDark,a,r,c,0,.12,0)),t.add(p("CARGO","#1a100c","#f0c089",2.4,.65,n-4.2,M(n-4.2,e+1.4)+2.4,e+1.4,.4)),t}function Wm(){const n=new R;n.name="earth-dish";const e=-32,t=-148,i=M(e,t);n.add(o(new P(8.6,8.6,.28,32),s.concrete,e,i+.1,t)),n.add(o(new P(1.45,1.85,5.4,14),s.steelDark,e,i+2.8,t)),n.add(o(new P(2.05,2.05,.42,18),s.steel,e,i+5.55,t)),n.add(o(new Ce(2.15,.12,8,20),s.lattice,e,i+5.8,t,Math.PI/2,0,0)),n.add(o(new h(.32,4.4,.32),s.lattice,e-2.55,i+7.6,t)),n.add(o(new h(.32,4.4,.32),s.lattice,e+2.55,i+7.6,t)),n.add(o(new h(5.6,.32,.32),s.lattice,e,i+9.75,t));const a=new R;a.position.set(e,i+9.5,t),a.rotation.set(-.92,.68,0);const r=o(new _t(7.6,28,16,0,Math.PI*2,0,Math.PI/2.28),s.dish,0,0,0);a.add(r);const c=o(new _t(7.72,20,10,0,Math.PI*2,0,Math.PI/2.45),s.steelDark,0,-.12,0);a.add(c);for(let u=0;u<8;u++){const x=u/8*Math.PI*2;a.add(o(new h(.07,.07,7.4),s.steelDark,0,.18,0,.12,x,0))}a.add(o(new P(.07,.07,5.4,6),s.steelDark,0,2.7,0)),a.add(o(new P(.38,.2,.75,10),s.steel,0,5.35,0)),n.add(a);const l=e-8.2,f=t-5.6,d=M(l,f);return n.add(o(new h(4.6,2.5,3.4),s.habDark,l,d+1.35,f)),n.add(o(new h(2.2,.85,1.4),s.steelDark,l+2.8,d+.55,f+.4)),n.add(p("EARTH LINK","#1a100c","#f0c089",3.6,.75,e,i+4.2,t+6.4)),n.add(p("LIGHT TIME 12 MIN","#1a100c","#d6b48a",3.9,.6,e,i+3.4,t+6.4)),n.add(p("NOT REAL-TIME","#1a100c","#d6b48a",3.3,.5,l,d+2.85,f+1.85)),n.add(o(new h(.1,2.8,.1),s.steelDark,e+6.6,i+1.4,t+5.2)),n.add(p("DSN / STARSHIP","#1a100c","#f0c089",3.2,.55,e+6.6,i+3.15,t+5.2,-.5)),n}function on(n,e,t,i={}){const a=new R;a.name=i.kind==="cargo"?"cargo-haul":"ice-haul";const r=M(n,e);a.position.set(n,r,e),a.rotation.y=t,a.add(o(new h(4.2,1.25,2.2),s.rover,.2,1.45,0)),a.add(o(new h(1.55,.85,1.7),s.roverDark,1.55,2.25,0)),a.add(o(new h(2.5,.08,1.7),s.solar,.05,2.16,0)),a.add(o(new P(.06,.06,1.6,6),s.steel,1.2,2.95,0)),a.add(o(new h(1.15,.2,.32),s.steelDark,-2.45,1.02,0));const c=new P(.62,.62,.38,12),l=[[-1.35,.62,1.22],[.25,.62,1.22],[1.55,.62,1.22],[-1.35,.62,-1.22],[.25,.62,-1.22],[1.55,.62,-1.22]];for(const[u,x,m]of l)a.add(o(c,s.roverDark,u,x,m,Math.PI/2,0,0));const f=-5.7;a.add(o(new h(4.5,.22,2.4),s.steelDark,f,1.02,0));const d=[[-4.5,.52,1.22],[-6.7,.52,1.22],[-4.5,.52,-1.22],[-6.7,.52,-1.22]];for(const[u,x,m]of d)a.add(o(new P(.5,.5,.32,12),s.roverDark,u,x,m,Math.PI/2,0,0));if(i.kind==="cargo")a.add(o(new h(1.55,1.2,1.55),s.crate,f-.95,1.78,.12)),a.add(o(new h(1.55,1.2,1.55),s.crate,f+.9,1.78,-.08)),i.loaded!==!1&&a.add(o(new h(1.35,1.05,1.35),s.crate,f,2.9,.05)),a.add(p("CARGO","#1a100c","#f0c089",1.7,.42,f,2.05,1.28));else{if(a.add(o(new h(4.2,1.15,.1),s.steel,f,1.68,1.12)),a.add(o(new h(4.2,1.15,.1),s.steel,f,1.68,-1.12)),a.add(o(new h(.1,1.15,2.25),s.steel,f-2.15,1.68,0)),a.add(o(new h(.1,1.15,2.25),s.steel,f+2.15,1.68,0)),i.loaded!==!1){const u=o(new ut(1.15,0),s.ice,f,1.82,0);u.scale.set(1.65,.68,.95),a.add(u),a.add(o(new ut(.52,0),s.ice,f+.95,1.92,.22)),a.add(o(new ut(.4,0),s.ice,f-.85,1.88,-.18))}a.add(p("ICE","#1a2830","#d6e6ef",1.35,.38,f,2.35,1.24))}return a}function Va(n,e,t,i,a,r=16){const c=Math.atan2(i-e,a-t);for(let l=0;l<r;l++){const f=l/(r-1),d=e+(i-e)*f,u=t+(a-t)*f,x=M(d,u);for(const m of[-.7,.7]){const g=Math.cos(c)*m,v=-Math.sin(c)*m,y=o(new h(.4,.05,.9),s.track,d+g,x+.04,u+v,0,c,0);y.castShadow=!1,n.add(y)}}}function Xm(){const n=new R;n.name="haul-loop";const e=-64,t=-90,i=M(e,t);n.add(o(new h(11,.2,8.4),s.concrete,e,i+.08,t)),n.add(o(new h(2.6,3.2,2.6),s.steelDark,e+2.4,i+1.75,t-1.4)),n.add(o(new h(3.4,.18,1.3),s.steel,e+.2,i+2.35,t-1.4,0,0,.18));const a=o(new ut(2.4,0),s.ice,e-2.6,i+1.15,t+1.6);a.scale.set(1.35,.7,1.15),n.add(a),n.add(o(new ut(1.1,0),s.ice,e-1.2,i+.85,t+2.4)),n.add(o(new h(.22,5.6,.22),s.lattice,e+3.6,i+2.9,t+2.2)),n.add(o(new h(.22,4.2,.22),s.lattice,e+3.6,i+4.4,t+.4,.7,0,0)),n.add(o(new h(1.6,.7,.7),s.steelDark,e+3.6,i+5.5,t-.6)),n.add(p("ICE TRANSFER","#1a2830","#d6e6ef",3.5,.7,e,i+3.7,t+3.4)),n.add(p("MINE TO ISRU","#1a100c","#f0c089",3.1,.5,e,i+2.95,t+3.4));const r={x:-58,z:-158},c={x:-68,z:-16},l={x:0,z:0};return n.add(on(-55,-146,rn(-55,-146,c.x,c.z),{kind:"ice",loaded:!0})),n.add(on(-61,-118,rn(-61,-118,c.x,c.z),{kind:"ice",loaded:!0})),n.add(on(-66,-78,rn(-66,-78,c.x,c.z),{kind:"ice",loaded:!0})),n.add(on(-68,-38,rn(-68,-38,c.x,c.z),{kind:"ice",loaded:!0})),n.add(on(-70,-62,rn(-70,-62,r.x,r.z),{kind:"ice",loaded:!1})),n.add(on(-50,-24,rn(-50,-24,l.x,l.z),{kind:"cargo",loaded:!0})),n.add(on(-18,-14,rn(-18,-14,12,8),{kind:"cargo",loaded:!0})),n.add(on(22,12,rn(22,12,50,22),{kind:"cargo",loaded:!0})),Va(n,-58,-156,-64,-92,18),Va(n,-64,-88,-68,-20,16),Va(n,-66,-18,-16,-10,12),Va(n,-14,-8,20,12,10),n}function ji(n,e,t,i,a,r=8,c=1.15,l=.16){const f=[];for(let u=0;u<=r;u++){const x=u/r,m=e+(i-e)*x,g=t+(a-t)*x,v=M(m,g)+c;f.push(new _(m,v,g)),u%2===0&&n.add(o(new h(.16,c,.16),s.steelDark,m,M(m,g)+c*.5,g))}const d=new ot(new ai(new Bi(f),r*2,l,6,!1),s.pipe);d.castShadow=!1,n.add(d)}function qm(){const n=new R;n.name="food";const e=38,t=-126,i=M(e,t);n.add(o(new h(13.2,.25,7.6),s.concrete,e,i+.1,t));const a=new ot(new P(3.55,3.55,12.4,18,1,!1,0,Math.PI),s.glass);a.rotation.z=Math.PI/2,a.position.set(e,i+3.55,t),a.castShadow=!1,n.add(a),n.add(o(new h(12.2,.1,7.2),s.solarFrame,e,i+3.6,t));for(let r=-2;r<=2;r++){n.add(o(new h(1.85,.24,5.6),s.soil,e+r*2.1,i+.34,t));for(let c=-2;c<=2;c++){const l=c%2===0?s.plant:s.plantLeaf;n.add(o(new h(1.25,.58,.72),l,e+r*2.1,i+.78,t+c*.95))}n.add(o(new h(1.5,.05,5.2),s.glowWarm,e+r*2.1,i+3.15,t))}return n.add(o(new h(1.1,1.8,.14),s.habDark,e-6.2,i+1.1,t)),n.add(o(new P(.14,.14,12,8),s.pipe,30,M(30,-119)+1.2,-119,0,0,Math.PI/2)),n.add(p("FOOD","#1a100c","#f0c089",2.8,.7,e,i+5.05,t+.15)),n.add(p("GROW FROM CO2","#1a100c","#d6b48a",3.6,.5,e,i+4.35,t+.15)),J(n,45,-122,.2,.9),J(n,46.2,-124.4,-.3,.85),n}function Ym(){const n=new R;n.name="water-loop";const e=-60,t=-148,i=M(e,t);n.add(o(new h(7.2,.22,5.4),s.concrete,e,i+.1,t)),n.add(o(new h(3.4,2.1,2.4),s.habDark,e-1.1,i+1.2,t)),n.add(o(new P(1.15,1.15,2.6,12),s.steel,e+1.8,i+1.5,t+.4)),n.add(o(new h(1.6,.7,1.2),s.ice,e+1.8,i+3.05,t+.4)),n.add(p("MELT","#1a2830","#d6e6ef",2.2,.55,e-1.1,i+1.7,t+1.35)),n.add(p("ICE","#1a2830","#d6e6ef",1.5,.42,e+1.8,i+1.7,t+1.7));const a=-64,r=-118,c=M(a,r);n.add(o(new h(7.4,.22,5.2),s.concrete,a,c+.1,r)),n.add(o(new h(3.6,2.2,2.6),s.steelDark,a,c+1.25,r)),n.add(o(new P(.55,.55,2.8,10),s.pipe,a+2.2,c+1.6,r-.6)),n.add(p("FILTER","#1a2830","#d6e6ef",2.5,.55,a,c+1.85,r+1.45));const l=-18,f=-88,d=M(l,f);return n.add(o(new h(9.2,.22,7.2),s.concrete,l,d+.1,f)),n.add(o(new P(2.15,2.15,5.6,16),s.tankO2,l-1.6,d+3,f)),n.add(o(new P(1.55,1.55,4.2,14),s.pipe,l+2.4,d+2.3,f+1.1)),n.add(p("POTABLE","#1a2830","#d6e6ef",3.2,.7,l-1.6,d+3.2,f+2.35)),n.add(p("H2O","#1a2830","#d6e6ef",1.8,.5,l+2.4,d+2.5,f+2.55)),n.add(p("ICE TO CREW","#1a100c","#f0c089",3.1,.5,l,d+6.15,f)),ji(n,-58,-154,e,t,6,1.2,.15),ji(n,e,t,a,r,8,1.2,.15),ji(n,a,r,-68,-26,10,1.15,.14),ji(n,a,r,l,f,10,1.2,.15),ji(n,l,f,-6,-100,8,1.15,.13),n}function Km(){const n=new R;n.name="batteries";const e=68,t=-10,i=M(e,t);n.add(o(new h(15.2,.22,7.2),s.concrete,e,i+.1,t));for(let l=0;l<6;l++){const f=e-5.5+l*2.2;n.add(o(new h(1.85,2.15,4.4),s.battery,f,i+1.25,t)),n.add(o(new h(1.7,.08,4.2),s.steel,f,i+2.38,t))}n.add(p("BATTERY","#111111","#f4e6c8",3.4,.7,e,i+3.15,t+3.75)),n.add(p("NIGHT STORE","#111111","#d6b48a",3.5,.55,e,i+2.45,t+3.75)),n.add(o(new P(.12,.12,18,8),s.cable,61,M(61,-14)+1.4,-14,0,0,Math.PI/2));const a=-22,r=-88,c=M(a,r);n.add(o(new h(7.2,.2,5.2),s.concrete,a,c+.1,r));for(let l=0;l<3;l++)n.add(o(new h(1.7,1.9,3.6),s.battery,a-2+l*2,c+1.15,r));return n.add(p("NIGHT","#111111","#f4e6c8",2.2,.5,a,c+2.55,r+2.7)),n.add(p("HABS","#111111","#d6b48a",1.8,.42,a,c+2.05,r+2.7)),n}function Jm(n){const e=(d,u,x=1)=>n.push({type:"box",x:d,z:u,w:1.9*x,d:1.9*x}),t=(d,u,x)=>n.push({type:"cyl",x:d,z:u,r:x}),i=(d,u,x,m)=>n.push({type:"box",x:d,z:u,w:x,d:m});for(const[d,u]of[[10,8],[12.2,8.4],[10.4,10.6],[13.5,6.2],[-12,9],[-14,7.2],[8.5,-11],[6.4,-12.5]])e(d,u);for(const[d,u]of[[40,22],[38.2,24.1],[41.4,26.2],[36.5,21.4],[37.8,27.6],[34.8,24.8],[39.2,19.6],[35.4,19.2]])e(d,u);e(38.6,22.8,1.15),e(33.2,20.4,1.2),e(31.4,22.1,1.05);const a=24,r=70;for(const[d,u]of[[a,r],[a-1.8,r+2.1],[a+1.6,r+2.4],[a-2.4,r-1.2],[a+.8,r-2.2],[a-3.2,r+.6]])e(d,u);e(a-4.2,r+1.4,1.12),e(a-5.4,r-.6,1.05),e(5.4,13.2,.85);for(const[d,u]of[[18,-78],[20.2,-77.4],[18.4,-81.2],[24.6,-78.6],[26.2,-81.8]])e(d,u);const c=-60,l=66;for(const[d,u]of[[c,l],[c-1.8,l+2.1],[c+1.6,l+2.4],[c-2.4,l-1.2],[c+.8,l-2.2],[c-3.2,l+.6]])e(d,u);e(c-4.2,l+1.4,1.12),e(c-5.4,l-.6,1.05);for(const[d,u]of[[16,14],[8,-62],[30,74],[-94,-182],[48,-70],[-90,-148]])t(d,u,2.4);for(const[d,u]of[[-55,-146],[-61,-118],[-66,-78],[-68,-38],[-70,-62],[-50,-24],[-18,-14],[22,12]])t(d,u,3.4);for(const[d,u]of[[42,22],[39,26],[26,78],[26,68],[22,72],[-80,-174],[-34,-92],[-28,-104],[16,-120],[-28,128]])t(d,u,.55);for(const[d,u]of[[2.4,12.2],[-2.2,11.5],[3.8,15.6],[.6,18.2]])t(d,u,.55);i(4.3,14.8,1.4,1),i(-3.9,9.1,1.1,.8),i(5.1,16.4,1.2,.8);for(let d=0;d<8;d++)i(82.3,-22-d*6.2,50,2.6);i(54,-18,3,2.2);for(let d=0;d<4;d++)i(111.5,-74-d*6.2,30,2.6);i(96,-72,3,2.2);for(let d=0;d<5;d++)i(135.5,-28-d*6.2,30,2.6);i(120,-26,3,2.2);for(let d=0;d<5;d++)i(158.5,-48-d*6.2,30,2.6);i(146,-46,3,2.2),i(14,22,2.4,1.6),i(18,26,1.8,1.3),i(20,36,2,1.3),i(17,-17,2.4,1.6);const f=[[-108,-210],[-98,-210],[-88,-210],[-78,-210],[-68,-210],[-108,-198],[-98,-198],[-88,-198],[-78,-198],[-68,-198],[-108,-186],[-98,-186],[-88,-186],[-78,-186],[-68,-186],[-108,-174],[-98,-174],[-88,-174],[-78,-174],[-68,-174]];for(const[d,u]of f)t(d,u,.4);t(-96,-198,.7),t(-72,-204,.7),t(-104,-176,.7);for(const[d,u]of[[-90,-184],[-88.4,-182.6],[-91.2,-181.8],[-86.6,-185.2]])i(d,u,1.2,1.2);e(-84.5,-180.4,.85),e(-28,-68),e(-27,-71,1.1),e(-44,-80),e(-42.5,-68.5,.95),e(17.2,-119.4),e(18.4,-121.8,1.05),e(3.2,-118.6,.9),e(16.6,-128.8,.95),e(27.2,12.4,.9),e(12.6,13.1,.95),e(-32,124,.9),e(-30.6,126.4,.95)}function Zm(){const n=new R;n.name="hab-street";const e=M(-13,-134);n.add(o(new h(30,.2,24),s.concrete,-13,e+.06,-136)),un(n,-20,-132,0,{airlock:!0,label:"HAB 3"}),un(n,-6,-132,0,{airlock:!0,label:"HAB 4"}),un(n,-13,-142,Math.PI/2,{airlock:!0,label:"HAB 5"});const t=M(-13,-132)+3.15;return n.add(o(new P(1.15,1.15,8.2,12),s.habDark,-13,t,-132,0,0,Math.PI/2)),n.add(o(new P(1.15,1.15,6.4,12),s.habDark,-13,t,-137,Math.PI/2,0,0)),n.add(p("HAB STREET","#1a100c","#f0c089",3.4,.65,-13,e+5.4,-126)),J(n,-26,-128,.2),J(n,1.2,-128.4,-.3,1.05),n}function yi(n,e,t,i,a){i==="x"?(n.push({type:"box",x:e,z:t-1.35,w:a,d:.4}),n.push({type:"box",x:e,z:t+1.35,w:a,d:.4})):(n.push({type:"box",x:e-1.35,z:t,w:.4,d:a}),n.push({type:"box",x:e+1.35,z:t,w:.4,d:a}))}function $m(n){const e=(t,i,a,r)=>n.push({type:"box",x:t,z:i,w:a,d:r});e(-6.2,0,5.2,14.8),e(6.2,0,5.2,14.8),e(0,-6.2,10,5.2),e(-4.35,5.8,6.4,5.2),e(4.35,5.8,6.4,5.2),e(0,7.15,3.8,.8),e(-1.45,7.15,.7,1.2),e(1.45,7.15,.7,1.2),e(-1.28,13,.36,12.4),e(1.28,13,.36,12.4),e(-1.45,19.2,.4,2.8),e(1.45,19.2,.4,2.8)}function jm(){const n=new R;n.name="food-3";const e=8,t=-142,i=M(e,t);n.add(o(new h(13.2,.25,7.6),s.concrete,e,i+.1,t));const a=new ot(new P(3.55,3.55,12.4,18,1,!1,0,Math.PI),s.glass);a.rotation.z=Math.PI/2,a.position.set(e,i+3.55,t),a.castShadow=!1,n.add(a),n.add(o(new h(12.2,.1,7.2),s.solarFrame,e,i+3.6,t));for(let r=-2;r<=2;r++){n.add(o(new h(1.85,.24,5.6),s.soil,e+r*2.1,i+.34,t));for(let c=-2;c<=2;c++){const l=c%2===0?s.plant:s.plantLeaf;n.add(o(new h(1.25,.58,.72),l,e+r*2.1,i+.78,t+c*.95))}n.add(o(new h(1.5,.05,5.2),s.glowWarm,e+r*2.1,i+3.15,t))}return n.add(o(new h(1.1,1.8,.14),s.habDark,e-6.2,i+1.1,t)),n.add(p("FOOD","#1a100c","#f0c089",2.8,.7,e,i+5.05,t+.15)),n.add(p("HAB STREET","#1a100c","#d6b48a",3.4,.5,e,i+4.35,t+.15)),J(n,15,-138,.2,.9),n}function Qm(){const n=new R;n.name="solar-3";const e=6,t=5;for(let c=0;c<e;c++)for(let l=0;l<t;l++){const f=122+c*5.4,d=-28-l*6.2,u=M(f,d);n.add(o(new h(.18,1.6,.18),s.solarFrame,f,u+.8,d)),n.add(o(new h(4.6,.08,2.3),s.solar,f,u+1.55,d,-.55,.15,0)),n.add(o(new h(4.75,.05,2.42),s.solarFrame,f,u+1.5,d,-.55,.15,0))}const[i,a,r]=Pt(120,-26,.7);return n.add(o(new h(2.2,1.4,1.4),s.habDark,i,a,r)),n.add(p("POWER","#111111","#f4e6c8",2,.55,i,a+.2,r+.75)),n.add(p("FIELD 3","#111111","#d6b48a",2.2,.45,i,a+.85,r+.75)),n}function e4(){const n=new R;n.name="batteries-2";const e=68,t=6,i=M(e,t);n.add(o(new h(15.2,.22,7.2),s.concrete,e,i+.1,t));for(let l=0;l<6;l++){const f=e-5.5+l*2.2;n.add(o(new h(1.85,2.15,4.4),s.battery,f,i+1.25,t)),n.add(o(new h(1.7,.08,4.2),s.steel,f,i+2.38,t))}n.add(p("BATTERY","#111111","#f4e6c8",3.4,.7,e,i+3.15,t+3.75)),n.add(p("CREW STORE","#111111","#d6b48a",3.5,.55,e,i+2.45,t+3.75));const a=-28,r=-138,c=M(a,r);n.add(o(new h(7.2,.2,5.2),s.concrete,a,c+.1,r));for(let l=0;l<3;l++)n.add(o(new h(1.7,1.9,3.6),s.battery,a-2+l*2,c+1.15,r));return n.add(p("NIGHT","#111111","#f4e6c8",2.2,.5,a,c+2.55,r+2.7)),n.add(p("HAB 3-5","#111111","#d6b48a",2.2,.42,a,c+2.05,r+2.7)),n}function Ln(n,e,t,i,a){const r=(e+i)*.5,c=(t+a)*.5,l=(M(e,t)+M(i,a))*.5+2.45,f=Math.hypot(i-e,a-t),d=o(new P(1.12,1.12,f,12),s.habDark,r,l,c,Math.PI/2,0,0);d.rotation.y=Math.atan2(i-e,a-t),n.add(d),n.add(o(new Ce(1.18,.07,6,14),s.steel,e,l,t,Math.PI/2,0,0)),n.add(o(new Ce(1.18,.07,6,14),s.steel,i,l,a,Math.PI/2,0,0))}function t4(){const n=new R;n.name="neighborhood",Ln(n,-46,-108,-20,-132),Ln(n,-6,-108,-6,-132),Ln(n,-46,-108,-32,-98),Ln(n,-6,-96,2,-22),Ln(n,-40,-76,-32,-98),Ln(n,-40,-76,-50,-72),Ln(n,-6,-132,10,-124),Ln(n,10,-124,8,-142);const[e,t,i]=Pt(-33,-120,3.4);n.add(p("PRESSURE","#1a100c","#f0c089",3.2,.55,e,t+1.2,i)),n.add(p("HAB 2-5","#1a100c","#d6b48a",2.8,.45,e,t+.55,i));const a=2,r=-22,c=M(a,r);return n.add(o(new P(1.45,1.45,2.8,12),s.habDark,a,c+1.55,r)),n.add(o(new h(1.1,1.8,.12),s.steelDark,a,c+1.5,r+1.5)),n.add(o(new Ce(1.48,.08,6,14),s.steel,a,c+2.95,r,Math.PI/2,0,0)),n.add(p("CREW ACCESS","#1a100c","#f0c089",3.4,.6,a,c+3.55,r+.2)),n.add(p("TO STARSHIP","#1a100c","#d6b48a",3.1,.45,a,c+2.95,r+.2)),n}function n4(){const n=new R;n.name="yard";const e=-36,t=-74,i=M(e,t);return n.add(o(new h(18,.22,14),s.concrete,e,i+.08,t)),un(n,-40,-76,0,{airlock:!0,label:"HAB 6"}),un(n,-32,-70,-.2,{onStands:!0,label:"NEXT"}),n.add(o(new h(.28,9.2,.28),s.lattice,e+6.2,i+4.7,t-3.4)),n.add(o(new h(8.4,.22,.22),s.lattice,e+2.4,i+9.2,t-3.4)),n.add(o(new P(.05,.05,6.8,6),s.cable,e-1.2,i+6.2,t-2.2)),n.add(o(new h(1.4,1.2,1.4),s.crate,e+1.6,i+8.6,t-3.2)),J(n,-28,-68,.2),J(n,-27,-71,-.4,1.1),J(n,-44,-80,.3),J(n,-42.5,-68.5,.1,.95),n.add(p("CONSTRUCTION","#1a100c","#f0c089",4,.7,e,i+4.6,t+6.4)),n.add(p("NEXT KIT","#1a100c","#d6b48a",3.2,.5,e,i+3.9,t+6.4)),n}function i4(){const n=new R;n.name="crew-ops";const e=-50,t=-72,i=M(e,t);return n.add(o(new h(12,.2,10),s.concrete,e,i+.08,t)),un(n,e,t,Math.PI/2,{r:2.2,len:7.6,airlock:!0,label:"MED"}),n.add(p("CREW OPS","#1a100c","#f0c089",3.4,.6,e,i+5.35,t+.2)),n.add(p("MEDICAL","#1a100c","#d6b48a",3,.45,e,i+4.75,t+.2)),J(n,-55.2,-76.4,.2,.9),J(n,-44.8,-68.6,-.25,.95),n}function a4(){const n=new R;n.name="commons";const e=10,t=-124,i=M(e,t);return n.add(o(new h(16,.22,12),s.concrete,e,i+.08,t)),un(n,e,t,0,{airlock:!0,label:"MESS"}),n.add(p("CREW COMMONS","#1a100c","#f0c089",4.2,.7,e,i+6.15,t+.2)),n.add(p("FROM CARGO","#1a100c","#d6b48a",3.4,.48,e,i+5.5,t+.2)),J(n,17.2,-119.4,.2),J(n,18.4,-121.8,-.3,1.05),J(n,3.2,-118.6,.15,.9),J(n,16.6,-128.8,.4,.95),n}function s4(){const n=new R;n.name="methalox-stock";const e=20,t=8,i=M(e,t);n.add(o(new h(16,.22,12),s.concrete,e,i+.08,t));for(let a=0;a<3;a++){const r=t-3.4+a*3.4;n.add(o(new P(1.15,1.15,6.4,16),s.tankCh4,e-3.2,i+1.45,r,0,0,Math.PI/2)),n.add(o(new P(1.15,1.15,6.4,16),s.tankO2,e+3.2,i+1.45,r,0,0,Math.PI/2))}return n.add(p("METHALOX","#1a100c","#f0c089",3.6,.7,e,i+3.55,t+6.2)),n.add(p("RETURN STOCK","#1a100c","#d6b48a",3.8,.5,e,i+2.9,t+6.2)),n.add(p("CH4","#6a2208","#f4e6c8",1.6,.42,e-3.2,i+2.85,t+3.6)),n.add(p("O2","#2a3340","#e8eef4",1.4,.42,e+3.2,i+2.85,t+3.6)),Y(n,[[20,2],[8,-2],[-8,-6],[-15,-8]],s.tankCh4,.12),J(n,27.2,12.4,.2,.9),J(n,12.6,13.1,-.25,.95),n}function r4(){const n=new R;n.name="next-window-pad";const e=-16,t=136;n.add(Jn(e,t,{finished:!0}));const i=M(e,t);return n.add(p("NEXT WINDOW","#1a100c","#f0c089",4.6,.85,e+22,i+3.6,t+4,-.55)),n.add(p("26 MONTHS","#1a100c","#d6b48a",3.6,.55,e+22,i+2.75,t+4,-.55)),n.add(o(new h(.12,3.4,.12),s.steelDark,e+22,i+1.7,t+4)),n.add(p("PAD 2","#1a100c","#f0c089",2.4,.55,e,i+.55,t+22.4)),n.add(o(new P(18.4,18.4,.12,40),s.concrete,e,i+.38,t)),n.add(o(new aa(9.2,17.6,36),s.soot,e,i+.46,t,-Math.PI/2,0,0)),n.add(p("SINTERED","#1a100c","#f0c089",3.6,.55,e+22,i+1.95,t+4,-.55)),n.add(o4(-38,148)),J(n,-32,124,.2,.9),J(n,-30.6,126.4,-.25,.95),J(n,-40,144,.1,.85),J(n,-41.4,146.2,-.3,.8),n}function o4(n,e){const t=new R;t.name="sinter-rig";const i=M(n,e);t.add(o(new h(8.4,.22,6.2),s.concrete,n,i+.1,e)),t.add(o(new h(5.6,2.4,3.2),s.habDark,n,i+1.4,e)),t.add(o(new h(1.6,3.6,1.6),s.steelDark,n+2.8,i+2,e-.4)),t.add(o(new P(.18,.18,4.8,8),s.steel,n+2.8,i+5.2,e-.4)),t.add(o(new h(2.4,.18,1.1),s.glowWarm,n+2.8,i+7.6,e-.4)),t.add(p("SINTER","#1a100c","#f0c089",3.2,.6,n,i+2.9,e+1.85)),t.add(p("REGOLITH","#1a100c","#d6b48a",3.4,.45,n,i+2.3,e+1.85));for(let a=0;a<4;a++)t.add(o(new h(1.4,.28,.9),s.concrete,n-2.4,i+.35+a*.32,e+2.6));return t}function c4(){const n=new R;n.name="solar-4";const e=6,t=5;for(let d=0;d<e;d++)for(let u=0;u<t;u++){const x=145+d*5.4,m=-48-u*6.2,g=M(x,m);n.add(o(new h(.18,1.6,.18),s.solarFrame,x,g+.8,m)),n.add(o(new h(4.6,.08,2.3),s.solar,x,g+1.55,m,-.55,.15,0)),n.add(o(new h(4.75,.05,2.42),s.solarFrame,x,g+1.5,m,-.55,.15,0))}const[i,a,r]=Pt(146,-46,.7);n.add(o(new h(2.2,1.4,1.4),s.habDark,i,a,r)),n.add(p("POWER","#111111","#f4e6c8",2,.55,i,a+.2,r+.75)),n.add(p("FIELD 4","#111111","#d6b48a",2.2,.45,i,a+.85,r+.75));const c=158,l=-28,f=M(c,l);n.add(o(new h(12,.2,7.2),s.concrete,c,f+.1,l));for(let d=0;d<5;d++)n.add(o(new h(1.7,2,4.2),s.battery,c-4+d*2,f+1.2,l));return n.add(p("NIGHT","#111111","#f4e6c8",2.2,.5,c,f+2.7,l+3.6)),n.add(p("FIELD 4","#111111","#d6b48a",2.4,.42,c,f+2.15,l+3.6)),n}function d4(){const n=new R;n.name="isru-2";const e=-96,t=-16,i=M(e,t);return n.add(o(new h(18,.35,18),s.concrete,e,i+.12,t)),n.add(o(new P(1.55,1.7,11,12),s.steelDark,e+2.2,i+5.8,t)),n.add(o(new Ce(2.15,.16,6,14),s.steel,e+2.2,i+8.8,t,Math.PI/2,0,0)),n.add(p("SABATIER","#1a100c","#f0c089",4.4,.9,e+4.2,i+7.2,t,Math.PI/2)),n.add(p("TRAIN 2","#1a100c","#d6b48a",3.2,.55,e+4.2,i+6.3,t,Math.PI/2)),n.add(o(new P(2.4,2.4,11,18),s.tankCh4,e-5.2,i+6,t+4.6,0,0,Math.PI/2)),n.add(o(new P(2.4,2.4,11,18),s.tankO2,e-5.2,i+6,t-4.4,0,0,Math.PI/2)),n.add(p("CH4","#6a2208","#f4e6c8",2.8,.8,e+.4,i+6,t+4.6)),n.add(p("O2","#2a3340","#e8eef4",2.6,.8,e+.4,i+6,t-4.4)),Y(n,[[-88,-16],[-80,-16],[-72,-16]],s.tankCh4,.14),Y(n,[[-88,-18],[-80,-20],[-72,-18]],s.steel,.12),n}function l4(){const n=new R;n.name="ice-mine-2";const e=-78,t=-172,i=M(e,t);n.add(o(new h(8,.3,8),s.concrete,e,i+.1,t)),n.add(o(new h(.28,14,.28),s.lattice,e-2.2,i+7,t-2.2)),n.add(o(new h(.28,14,.28),s.lattice,e+2.2,i+7,t-2.2)),n.add(o(new h(.28,14,.28),s.lattice,e-2.2,i+7,t+2.2)),n.add(o(new h(.28,14,.28),s.lattice,e+2.2,i+7,t+2.2)),n.add(o(new h(5.2,.25,5.2),s.steelDark,e,i+14.2,t)),n.add(o(new P(.35,.55,9,10),s.steel,e,i+5,t)),n.add(o(new ii(.7,1.6,8),s.soot,e,i+.9,t));const a=o(new ut(4,0),s.ice,e+8.2,i+1.8,t+1.4);return a.scale.set(1.45,.75,1.2),n.add(a),n.add(o(new h(6.4,.35,1.1),s.steelDark,e+3.6,i+1.4,t,0,0,-.18)),n.add(p("ICE 2","#1a2830","#d6e6ef",2.6,.65,e,i+8.4,t+2.6)),Y(n,[[-74,-168],[-68,-150],[-64,-90],[-68,-26]],s.pipe,.13),n}function h4(){const n=new R;n.name="workshop-2";const e=66,t=-74,i=M(e,t);n.add(o(new h(16,.28,12),s.concrete,e,i+.1,t));const a=o(new P(5.4,5.4,14,16,1,!1,0,Math.PI),s.habDark,e-1.2,i+3.1,t);return a.rotation.z=Math.PI/2,n.add(a),n.add(o(new h(.2,3.8,5.8),s.steelDark,e-8.1,i+2,t)),n.add(o(new h(.28,8.4,.28),s.lattice,e+6.4,i+4.3,t-3.6)),n.add(o(new h(7.2,.2,.2),s.lattice,e+3,i+8.5,t-3.6)),n.add(o(new h(1.5,1.1,1.5),s.crate,e+2.2,i+8,t-3.4)),J(n,73.2,-69.4,.2),J(n,74.4,-71.6,-.3,1.05),J(n,58.6,-68.8,.15,.9),n.add(p("WORKSHOP","#1a100c","#f0c089",3.8,.75,e,i+5.4,t+.2)),n.add(p("BAY 2","#1a100c","#d6b48a",2.6,.5,e,i+4.7,t+.2)),n}function u4(){const n=new R;n.name="potable";const e=18,t=-152,i=M(e,t);n.add(o(new h(14,.22,10),s.concrete,e,i+.1,t));for(let a=0;a<4;a++){const r=e-4.5+a*3;n.add(o(new P(1.15,1.15,6.2,14),s.pipe,r,i+1.5,t,0,0,Math.PI/2))}return n.add(p("POTABLE","#1a2830","#d6e6ef",3.4,.7,e,i+3.35,t+4.6)),n.add(p("HAB STORE","#1a2830","#d6b48a",3.2,.5,e,i+2.7,t+4.6)),Y(n,[[18,-148],[8,-142],[-6,-120],[-18,-88]],s.pipe,.12),n}function f4(){const n=new R;n.name="hab-berms";const e=[[-58,-108,9.5,.2],[-20,-100,12.5,0],[22,-128,8.5,1.2],[-8,-148,7.5,.4]];for(const[r,c,l,f]of e){const d=M(r,c),u=o(new Ce(l,1.55,8,24,Math.PI*1.15),s.rust,r,d-.2,c,Math.PI/2,f,0);u.scale.set(1,.42,1),n.add(u)}for(const[r,c]of[[-62,-102],[-14,-96],[26,-122]]){const l=o(new ut(2.4,0),s.rust,r,M(r,c)+.95,c);l.scale.set(1.25,.6,1.05),n.add(l)}const[t,i,a]=Pt(-20,-100,2.4);return n.add(p("DUST BERM","#1a100c","#f0c089",3.6,.65,t,i+1.1,a)),n.add(p("HAB WIND","#1a100c","#d6b48a",3.2,.48,t,i+.5,a)),n}function p4(){const n=new R;n.name="earth-dish-2";const e=-8,t=-162,i=M(e,t);n.add(o(new P(6.2,6.2,.26,28),s.concrete,e,i+.1,t)),n.add(o(new P(1.1,1.4,4.2,12),s.steelDark,e,i+2.2,t));const a=new R;return a.position.set(e,i+6.8,t),a.rotation.set(-.88,.55,0),a.add(o(new _t(5.2,22,14,0,Math.PI*2,0,Math.PI/2.28),s.dish,0,0,0)),a.add(o(new P(.06,.06,3.8,6),s.steelDark,0,1.9,0)),n.add(a),n.add(p("EARTH 2","#1a100c","#f0c089",3.2,.65,e,i+3.6,t+5.2)),n.add(p("BACKUP LINK","#1a100c","#d6b48a",3.4,.5,e,i+2.95,t+5.2)),n}function m4(){const n=new R;n.name="eclss";const e=8,t=-98,i=M(e,t);return n.add(o(new h(11.2,.22,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(4.8,2.6,3.4),s.habDark,e-2.4,i+1.5,t)),n.add(p("ECLSS","#1a100c","#f0c089",3.2,.6,e-2.4,i+3.05,t+1.85)),n.add(p("CO2 SCRUB","#1a100c","#d6b48a",3.4,.45,e-2.4,i+2.45,t+1.85)),n.add(o(new P(.85,.85,3.4,12),s.steelDark,e+1.6,i+1.9,t-1.4)),n.add(o(new P(.85,.85,3.4,12),s.steelDark,e+3.4,i+1.9,t-1.4)),n.add(p("AMINE","#1a100c","#d6b48a",2.2,.4,e+2.5,i+3.8,t-1.4)),n.add(o(new P(.7,.7,2.6,12),s.tankO2,e+1.6,i+1.5,t+1.8)),n.add(o(new P(.7,.7,2.6,12),s.tankO2,e+3.4,i+1.5,t+1.8)),n.add(p("O2","#2a3340","#e8eef4",1.4,.4,e+2.5,i+3.05,t+1.8)),Y(n,[[8,-98],[14,-104],[22,-112]],s.pipe,.1),Y(n,[[8,-98],[2,-102],[-6,-108]],s.tankO2,.09),n}function x4(){const n=new R;n.name="rover-shelter";const e=48,t=-70,i=M(e,t);n.add(o(new h(12.4,.18,8.6),s.concrete,e,i+.08,t));const a=[[-5.2,-3.4],[5.2,-3.4],[-5.2,3.4],[5.2,3.4]];for(const[r,c]of a)n.add(o(new h(.28,4.6,.28),s.steelDark,e+r,i+2.4,t+c));return n.add(o(new h(12.8,.16,9),s.steel,e,i+4.75,t)),n.add(o(new h(12.8,.06,9),s.solar,e,i+4.88,t)),n.add(p("DUST","#1a100c","#f0c089",2.6,.5,e,i+5.35,t+4.6)),n.add(p("ROVER","#1a100c","#d6b48a",2.8,.42,e,i+4.8,t+4.6)),n}function g4(){const n=new R;n.name="isru-radiators";const e=-68,t=12,i=M(e,t);n.add(o(new h(16.4,.18,6.2),s.concrete,e,i+.08,t));for(let a=0;a<5;a++){const r=e-6+a*3;n.add(o(new h(.16,3.6,.16),s.steelDark,r,i+1.9,t-1.8)),n.add(o(new h(.16,3.6,.16),s.steelDark,r,i+1.9,t+1.8)),n.add(o(new h(2.4,3.2,.08),s.solar,r,i+2.4,t,-.15,0,0)),n.add(o(new h(2.5,3.3,.04),s.steel,r,i+2.4,t+.06,-.15,0,0))}return n.add(p("REJECT","#1a100c","#f0c089",2.8,.5,e,i+4.55,t+3.2)),n.add(p("HEAT","#1a100c","#d6b48a",2.4,.42,e,i+4,t+3.2)),Y(n,[[-68,-6],[-68,4],[-68,12]],s.pipe,.1),n}function w4(){const n=new R;n.name="parts-depot";const e=22,t=-80,i=M(e,t);return n.add(o(new h(12.2,.18,8.2),s.concrete,e,i+.08,t)),n.add(o(new h(.22,3.8,8.2),s.steelDark,e-5.8,i+2,t)),n.add(o(new h(12.2,.14,8.4),s.steel,e,i+3.95,t)),J(n,18,-78,.15,1),J(n,20.2,-77.4,-.2,.95),J(n,18.4,-81.2,.3,1.05),J(n,24.6,-78.6,-.1,1),J(n,26.2,-81.8,.25,.9),n.add(o(new h(2.4,1.1,1.4),s.steel,e+1.2,i+.75,t+.4)),n.add(p("PARTS","#1a100c","#f0c089",2.8,.55,e,i+4.45,t+4.2)),n.add(p("CARGO","#1a100c","#d6b48a",2.6,.42,e,i+3.9,t+4.2)),n}function _4(){const n=new R;n.name="greenhouse-2";const e=52,t=-112,i=M(e,t);n.add(o(new h(13.6,.22,8.2),s.concrete,e,i+.1,t));const a=new ot(new P(3.7,3.7,12.6,16,1,!1,0,Math.PI),s.glass);a.rotation.z=Math.PI/2,a.position.set(e,i+3.7,t),a.castShadow=!1,n.add(a),n.add(o(new h(12.4,.1,7.6),s.solarFrame,e,i+3.75,t));for(let r=-2;r<=2;r++){n.add(o(new h(1.9,.24,6),s.soil,e+r*2.15,i+.34,t));for(let c=-2;c<=2;c++){const l=c%2===0?s.plant:s.plantLeaf;n.add(o(new h(1.3,.48,.74),l,e+r*2.15,i+.68,t+c*1.05))}n.add(o(new h(1.55,.05,5.6),s.glowWarm,e+r*2.15,i+3.2,t))}return n.add(p("GREENHOUSE 2","#1a100c","#f0c089",4,.65,e,i+5.15,t+.15)),n.add(p("GROW FROM CO2","#1a100c","#d6b48a",3.6,.48,e,i+4.5,t+.15)),Y(n,[[32,-112],[42,-112],[52,-112]],s.pipe,.1),n}function b4(){const n=new R;n.name="ice-depot";const e=-90,t=-158,i=M(e,t);n.add(o(new h(12,.22,10),s.concrete,e,i+.1,t)),n.add(o(new h(3.6,2.4,2.8),s.steelDark,e-1.8,i+1.35,t)),n.add(o(new P(.85,1.65,2.1,10),s.steelDark,e-1.8,i+3.35,t)),n.add(o(new h(2.4,.28,1.05),s.steel,e+.7,i+2.1,t,0,0,-.2));const a=o(new ut(2.8,0),s.ice,e+3.6,i+1.25,t+1.5);return a.scale.set(1.35,.7,1.15),n.add(a),n.add(o(new ut(1.15,0),s.ice,e+4.8,i+.85,t+.2)),n.add(p("ICE","#1a2830","#d6e6ef",2.2,.55,e,i+3.85,t+4.4)),n.add(p("CRUSH","#1a2830","#d6e6ef",2.6,.5,e,i+3.2,t+4.4)),Y(n,[[-86,-160],[-80,-166],[-74,-168]],s.pipe,.13),n}function v4(){const n=new R;n.name="batteries-3";const e=8,t=-78,i=M(e,t);n.add(o(new h(11.6,.2,6.4),s.concrete,e,i+.1,t));for(let a=0;a<5;a++)n.add(o(new h(1.7,1.95,3.8),s.battery,e-4+a*2,i+1.15,t)),n.add(o(new h(1.55,.08,3.6),s.steel,e-4+a*2,i+2.18,t));return n.add(p("NIGHT","#111111","#f4e6c8",2.4,.5,e,i+2.7,t+3.3)),n.add(p("HAB STORE","#111111","#d6b48a",3,.42,e,i+2.15,t+3.3)),n}function M4(){const n=new R;n.name="o2-buffer";const e=-8,t=-88,i=M(e,t);n.add(o(new h(10.2,.2,7.4),s.concrete,e,i+.1,t));for(let a=0;a<4;a++){const r=e-3.3+a*2.2;n.add(o(new P(.85,.85,3.6,12),s.tankO2,r,i+2,t))}return n.add(p("O2","#2a3340","#e8eef4",1.8,.5,e,i+4.15,t+3.7)),n.add(p("CREW","#2a3340","#d6b48a",2.2,.42,e,i+3.6,t+3.7)),Y(n,[[-8,-88],[0,-94],[8,-98]],s.tankO2,.1),n}function y4(){const n=new R;n.name="co2-capture";const e=-96,t=4,i=M(e,t);return n.add(o(new h(11.6,.2,7.4),s.concrete,e,i+.1,t)),n.add(o(new P(.55,.55,6.8,10),s.steel,e-2.4,i+3.6,t)),n.add(o(new P(2.1,.65,2.4,14),s.steelDark,e-2.4,i+7.8,t)),n.add(o(new Ce(1.85,.1,6,16),s.steel,e-2.4,i+9.1,t,Math.PI/2,0,0)),n.add(o(new h(3.2,2.2,2.4),s.habDark,e+2.2,i+1.3,t)),n.add(p("CO2","#1a100c","#f0c089",2.2,.55,e-2.4,i+4.8,t+1.4)),n.add(p("INTAKE 2","#1a100c","#d6b48a",3,.45,e+2.2,i+2.7,t+1.35)),Y(n,[[-96,4],[-96,-6],[-96,-16]],s.pipe,.12),n}function S4(){const n=new R;n.name="solar-dust-fence";const e=142,t=-62,i=M(e,t);for(let a=0;a<8;a++){const r=t-10.5+a*3;n.add(o(new h(.18,3.4,.18),s.steelDark,e,i+1.8,r)),a<7&&n.add(o(new h(.06,2.6,2.7),s.lattice,e,i+1.7,r+1.5))}return n.add(p("DUST","#1a100c","#f0c089",2.4,.45,e-1.4,i+3.5,t)),n.add(p("FENCE","#1a100c","#d6b48a",2.4,.4,e-1.4,i+3,t)),n}function E4(){const n=new R;n.name="condensate";const e=28,t=-140,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new P(1.35,1.35,3.8,14),s.pipe,e-1.6,i+2.1,t)),n.add(o(new P(1.35,1.35,3.8,14),s.pipe,e+1.8,i+2.1,t)),n.add(o(new h(2.4,1.6,1.8),s.habDark,e,i+1,t+2.2)),n.add(p("H2O","#1a2830","#d6e6ef",2.2,.5,e,i+4.3,t+3.6)),n.add(p("CONDENSATE","#1a2830","#d6b48a",3.6,.42,e,i+3.75,t+3.6)),Y(n,[[28,-140],[18,-146],[18,-152]],s.pipe,.1),Y(n,[[28,-140],[16,-142],[8,-142]],s.pipe,.09),n}function T4(){const n=new R;n.name="eva-rack";const e=12,t=18,i=M(e,t);return n.add(o(new h(5.8,.16,2.4),s.steelDark,e,i+.08,t)),n.add(o(new h(.16,2.8,.16),s.steel,e-2.4,i+1.5,t-.7)),n.add(o(new h(.16,2.8,.16),s.steel,e+2.4,i+1.5,t-.7)),n.add(o(new h(5,.12,.12),s.steel,e,i+2.9,t-.7)),n.add(It(e-1.5,t,.2)),n.add(It(e,t+.15,-.1)),n.add(It(e+1.5,t,.15)),n.add(p("SUITS","#1a100c","#f0c089",2.4,.45,e,i+3.35,t+1.2)),n.add(p("EVA RACK","#1a100c","#d6b48a",2.8,.4,e,i+2.85,t+1.2)),n}function A4(){const n=new R;n.name="ch4-buffer";const e=36,t=8,i=M(e,t);n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t));for(let a=0;a<3;a++)n.add(o(new P(1.05,1.05,5.6,14),s.tankCh4,e-2.4+a*2.4,i+1.4,t,0,0,Math.PI/2));return n.add(p("CH4","#6a2208","#f4e6c8",2.2,.5,e,i+3.35,t+3.7)),n.add(p("RETURN","#6a2208","#d6b48a",2.6,.42,e,i+2.8,t+3.7)),Y(n,[[28,8],[32,8],[36,8]],s.tankCh4,.11),n}function R4(){const n=new R;n.name="o2-return";const e=36,t=-6,i=M(e,t);n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t));for(let a=0;a<3;a++)n.add(o(new P(1.05,1.05,5.6,14),s.tankO2,e-2.4+a*2.4,i+1.4,t,0,0,Math.PI/2));return n.add(p("O2","#2a3340","#e8eef4",1.8,.5,e,i+3.35,t+3.7)),n.add(p("RETURN","#2a3340","#d6b48a",2.6,.42,e,i+2.8,t+3.7)),Y(n,[[36,8],[36,1],[36,-6]],s.steel,.11),n}function C4(){const n=new R;n.name="isru-electrolysis";const e=-50,t=4,i=M(e,t);n.add(o(new h(11.6,.2,7.4),s.concrete,e,i+.1,t)),n.add(o(new h(3.4,3.6,2.6),s.habDark,e-2.6,i+2,t)),n.add(o(new h(3.4,3.6,2.6),s.steelDark,e+1.2,i+2,t));for(let a=0;a<4;a++)n.add(o(new h(.18,3.1,2.2),s.steel,e-3.8+a*.7,i+2,t));return n.add(o(new P(1.15,1.15,5.2,14),s.steel,e+4.2,i+2.8,t+1.4)),n.add(o(new P(.95,.95,4.4,14),s.tankO2,e+4.2,i+2.4,t-1.6)),n.add(p("ELECTRO","#1a100c","#f0c089",3.2,.5,e,i+4.55,t+3.7)),n.add(p("H2 RECYCLE","#1a100c","#d6b48a",3.4,.42,e,i+4,t+3.7)),Y(n,[[-72,-26],[-50,-16],[-50,4]],s.pipe,.11),Y(n,[[-50,4],[-58,4],[-64,-8]],s.steel,.1),n}function P4(){const n=new R;n.name="ice-melt";const e=-58,t=-142,i=M(e,t);n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.6,2.8,3.2),s.habDark,e-1.8,i+1.6,t)),n.add(o(new P(1.45,1.45,4.2,14),s.pipe,e+2.2,i+2.3,t)),n.add(o(new P(.55,.85,1.6,10),s.steelDark,e+2.2,i+4.9,t));const a=o(new ut(1.8,0),s.ice,e-3.4,i+.9,t+2.1);return a.scale.set(1.15,.55,1),n.add(a),n.add(p("MELT","#1a2830","#d6e6ef",2.4,.5,e,i+4.4,t+3.7)),n.add(p("STILL","#1a2830","#d6b48a",2.2,.42,e,i+3.85,t+3.7)),Y(n,[[-58,-158],[-58,-150],[-58,-142]],s.pipe,.11),Y(n,[[-58,-142],[-64,-90],[-68,-26]],s.pipe,.1),n}function D4(){const n=new R;n.name="methalox-pump";const e=-32,t=-22,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(5.2,3.2,4.4),s.habDark,e,i+1.8,t)),n.add(o(new h(5.4,.14,4.6),s.steel,e,i+3.5,t)),n.add(o(new P(.55,.55,1.8,10),s.tankCh4,e-1.4,i+1.1,t+2.6,0,0,Math.PI/2)),n.add(o(new P(.55,.55,1.8,10),s.steel,e+1.4,i+1.1,t+2.6,0,0,Math.PI/2)),n.add(p("PUMP","#1a100c","#f0c089",2.4,.5,e,i+4.15,t+3.7)),n.add(p("METHALOX","#1a100c","#d6b48a",3.2,.42,e,i+3.6,t+3.7)),Y(n,[[-32,-14],[-32,-18],[-32,-22]],s.tankCh4,.11),Y(n,[[-32,-18],[-32,-22],[-18,-10]],s.steel,.1),n}function z4(){const n=new R;n.name="sinter-press";const e=66,t=-90,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(4.6,2.2,3.4),s.steelDark,e,i+1.3,t)),n.add(o(new h(1.4,3.4,1.4),s.steel,e,i+3.2,t)),n.add(o(new h(3.2,.35,2.4),s.steel,e,i+4.9,t)),n.add(o(new h(2.2,.55,1.6),s.habDark,e,i+2.55,t)),J(n,62.2,-87.6,.2,.9),J(n,70,-92.2,-.15,.85),n.add(p("SINTER","#1a100c","#f0c089",2.8,.5,e,i+5.55,t+3.7)),n.add(p("PRESS","#1a100c","#d6b48a",2.4,.42,e,i+5,t+3.7)),n}function I4(){const n=new R;n.name="waste-recycle";const e=22,t=-98,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(4.4,2.8,3.6),s.habDark,e-1.4,i+1.6,t)),n.add(o(new P(1.15,1.15,3.6,14),s.pipe,e+2.8,i+2,t)),n.add(o(new P(.85,.85,2.8,12),s.steelDark,e+2.8,i+1.6,t+2)),n.add(p("WASTE","#1a100c","#f0c089",2.6,.5,e,i+4.25,t+3.7)),n.add(p("RECOVERY","#1a100c","#d6b48a",3.2,.42,e,i+3.7,t+3.7)),Y(n,[[8,-98],[14,-98],[22,-98]],s.pipe,.1),Y(n,[[22,-98],[22,-112],[22,-112]],s.pipe,.09),n}function L4(){const n=new R;n.name="solar-combiner";const e=172,t=-48,i=M(e,t);n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.6,2.4,2.8),s.habDark,e-2,i+1.4,t)),n.add(o(new h(3.2,2,2.4),s.steelDark,e+2.2,i+1.2,t));for(let a=0;a<3;a++)n.add(o(new h(.7,1.5,1.8),s.battery,e+1.2+a*.85,i+1,t));return n.add(p("COMBINER","#111111","#f4e6c8",3.4,.5,e,i+3.55,t+3.7)),n.add(p("FIELD 4","#111111","#d6b48a",2.6,.42,e,i+3,t+3.7)),Y(n,[[158,-62],[166,-54],[172,-48]],s.cable,.1),Y(n,[[172,-48],[164,-38],[158,-28]],s.cable,.09),n}function U4(){const n=new R;n.name="gh-dust-filter";const e=38,t=-104,i=M(e,t);return n.add(o(new h(9.2,.18,5.6),s.concrete,e,i+.09,t)),n.add(o(new h(3.8,2.6,2.4),s.habDark,e-1.6,i+1.5,t)),n.add(o(new P(.95,.95,3.2,12),s.steelDark,e+2.4,i+1.8,t)),n.add(o(new h(.12,2.2,2),s.lattice,e+3.5,i+1.4,t)),n.add(p("DUST","#1a100c","#f0c089",2.2,.45,e,i+3.55,t+2.9)),n.add(p("FILTER","#1a100c","#d6b48a",2.6,.4,e,i+3.05,t+2.9)),Y(n,[[22,-112],[30,-108],[38,-104]],s.pipe,.1),Y(n,[[38,-104],[46,-108],[52,-112]],s.pipe,.09),n}function N4(){const n=new R;n.name="weather-mast";const e=24,t=-128,i=M(e,t);return n.add(o(new h(3.6,.16,3.6),s.concrete,e,i+.08,t)),n.add(o(new P(.16,.22,14.4,8),s.lattice,e,i+7.3,t)),n.add(o(new h(2.8,.08,.08),s.steel,e,i+12.4,t)),n.add(o(new h(.08,.08,2.8),s.steel,e,i+12.4,t)),n.add(o(new h(2.2,.06,.06),s.steelDark,e,i+14.2,t)),n.add(o(new h(1.4,1.1,1.1),s.habDark,e+1.15,i+.75,t+.9)),n.add(p("MET","#1a100c","#f0c089",1.8,.42,e,i+8.6,t+1.6)),n.add(p("DUST","#1a100c","#d6b48a",2,.38,e,i+8.1,t+1.6)),n}function O4(){const n=new R;n.name="ch4-chiller";const e=-80,t=20,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(4.2,2.6,3.2),s.habDark,e-1.6,i+1.5,t)),n.add(o(new P(1.25,1.25,5,14),s.tankCh4,e+2.6,i+2.7,t)),n.add(o(new Ce(1.55,.1,6,14),s.steel,e+2.6,i+4.4,t,Math.PI/2,0,0)),n.add(p("CH4","#6a2208","#f4e6c8",2,.45,e,i+4.15,t+3.7)),n.add(p("CHILLER","#1a100c","#d6b48a",2.8,.4,e,i+3.6,t+3.7)),Y(n,[[-76,-10],[-80,6],[-80,20]],s.tankCh4,.11),Y(n,[[-68,12],[-74,16],[-80,20]],s.pipe,.09),n}function F4(){const n=new R;n.name="pad2-beacons";const e=[[2,154],[-34,154],[2,118],[-34,118]];for(const[r,c]of e){const l=M(r,c);n.add(o(new P(.14,.18,5.6,8),s.steelDark,r,l+2.9,c)),n.add(o(new h(.55,.55,.55),s.glowPad,r,l+5.85,c)),n.add(o(new h(.22,.9,.22),s.steel,r,l+6.4,c))}const t=6,i=148,a=M(t,i);return n.add(o(new h(5.4,.16,4.2),s.concrete,t,a+.08,i)),n.add(o(new h(2.6,1.6,1.8),s.habDark,t,a+1,i)),n.add(p("PAD 2","#1a100c","#f0c089",2.2,.42,t,a+2.35,i+2.2)),n.add(p("BEACONS","#1a100c","#d6b48a",2.6,.38,t,a+1.88,i+2.2)),n}function k4(){const n=new R;n.name="cargo-crane";const e=-64,t=80,i=M(e,t);return n.add(o(new h(7.2,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(1.4,10.4,1.4),s.steelDark,e,i+5.3,t)),n.add(o(new h(.28,.28,12.4),s.steel,e+3.6,i+10.5,t-3.2,0,.55,.08)),n.add(o(new h(.18,3.2,.18),s.steelDark,e+7.4,i+8.4,t-6.6)),n.add(o(new h(1.5,1.3,1.5),s.crate,e+7.4,i+6.5,t-6.6)),J(n,e-2.4,t+2.2,.2,1),J(n,e-2.8,t-1.6,-.15,.9),n.add(p("CRANE","#1a100c","#f0c089",2.6,.5,e,i+6.4,t+3.6)),n.add(p("CARGO","#1a100c","#d6b48a",2.4,.42,e,i+5.85,t+3.6)),n}function B4(){const n=new R;n.name="o2-chiller";const e=-80,t=32,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(4.2,2.6,3.2),s.habDark,e-1.6,i+1.5,t)),n.add(o(new P(1.25,1.25,5,14),s.tankO2,e+2.6,i+2.7,t)),n.add(o(new Ce(1.55,.1,6,14),s.steel,e+2.6,i+4.4,t,Math.PI/2,0,0)),n.add(p("O2","#2a3340","#e8eef4",1.8,.45,e,i+4.15,t+3.7)),n.add(p("CHILLER","#1a100c","#d6b48a",2.8,.4,e,i+3.6,t+3.7)),Y(n,[[-80,20],[-80,26],[-80,32]],s.steel,.11),Y(n,[[-72,-21],[-80,8],[-80,32]],s.steel,.09),n}function H4(){const n=new R;n.name="power-trench";const e=100,t=-22,i=M(e,t);n.add(o(new h(7.6,.18,5.4),s.concrete,e,i+.08,t)),n.add(o(new h(3.2,1.8,2.4),s.habDark,e,i+1.1,t)),n.add(o(new h(1.4,.9,1.1),s.steelDark,e+2.4,i+.65,t+1.2)),n.add(p("POWER","#111111","#f4e6c8",2.6,.45,e,i+2.45,t+2.8)),n.add(p("TRENCH","#111111","#d6b48a",2.4,.38,e,i+1.95,t+2.8)),Y(n,[[172,-48],[135,-40],[100,-22]],s.cable,.12),Y(n,[[100,-22],[84,-16],[68,-10]],s.cable,.12);for(const[a,r]of[[148,-44],[122,-34],[84,-16]]){const c=M(a,r);n.add(o(new h(2.4,.16,1.1),s.steelDark,a,c+.12,r))}return n}function G4(){const n=new R;n.name="regolith-stock";const e=-22,t=-56,i=M(e,t);n.add(o(new h(9.6,.16,7.2),s.concrete,e,i+.08,t));const a=o(new ut(2.6,0),s.soil,e-1.6,i+1.2,t);a.scale.set(1.35,.7,1.15),n.add(a);const r=o(new ut(2,0),s.soil,e+2.2,i+.95,t+1.1);return r.scale.set(1.2,.6,1.05),n.add(r),n.add(o(new h(2.2,1.2,1.6),s.steelDark,e+2.6,i+.8,t-2)),J(n,e-3.4,t-2.2,.2,.85),n.add(p("REGOLITH","#1a100c","#f0c089",3.4,.48,e,i+3.15,t+3.7)),n.add(p("SINTER FEED","#1a100c","#d6b48a",3.4,.4,e,i+2.6,t+3.7)),n}function V4(){const n=new R;n.name="survey-2";const e=-124,t=-188,i=M(e,t);for(let r=0;r<3;r++){const c=r/3*Math.PI*2+.2,l=Math.cos(c)*.62,f=Math.sin(c)*.62;n.add(o(new h(.08,2.5,.08),s.steelDark,e+l,i+1.15,t+f,.32*Math.cos(c),0,.32*Math.sin(c)))}n.add(o(new h(.58,.32,.48),s.steelDark,e,i+2.28,t)),n.add(p("SURVEY 2","#1a100c","#f0c089",3,.55,e,i+3.4,t+1.2)),n.add(p("ICE WEST","#1a100c","#d6b48a",2.6,.4,e,i+2.85,t+1.2));const a=[[-136,-200],[-124,-200],[-112,-200],[-136,-188],[-124,-188],[-112,-188],[-136,-176],[-124,-176],[-112,-176]];for(let r=0;r<a.length;r++){const[c,l]=a[r];Yr(n,c,l,r%2===0?s.flagIce:s.flagDeposit)}return Za(n,-130,-196,"ICE",s.flagIce),Cr(n,-122,-184,.2),Cr(n,-126.4,-182.6,-.3),n}function W4(){const n=new R;n.name="h2-recycle";const e=-38,t=16,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new P(1.55,1.55,6.4,16),s.steel,e-1.8,i+3.4,t)),n.add(o(new P(1.55,1.55,6.4,16),s.steel,e+1.8,i+3.4,t)),n.add(o(new h(2.2,1.4,1.6),s.habDark,e,i+.9,t+2.2)),n.add(p("H2","#1a100c","#f0c089",1.8,.5,e,i+5.15,t+3.7)),n.add(p("RECYCLE","#1a100c","#d6b48a",2.8,.42,e,i+4.55,t+3.7)),Y(n,[[-50,4],[-44,10],[-38,16]],s.steel,.11),Y(n,[[-38,16],[-52,8],[-64,-8]],s.steel,.1),n}function X4(){const n=new R;n.name="food-4";const e=70,t=-112,i=M(e,t);n.add(o(new h(11.6,.22,7.2),s.concrete,e,i+.1,t));const a=new ot(new P(3.3,3.3,11.2,16,1,!1,0,Math.PI),s.glass);a.rotation.z=Math.PI/2,a.position.set(e,i+3.3,t),a.castShadow=!1,n.add(a),n.add(o(new h(10.8,.1,6.6),s.solarFrame,e,i+3.35,t));for(let r=-2;r<=2;r++){n.add(o(new h(1.7,.22,5.2),s.soil,e+r*1.95,i+.32,t));for(let c=-2;c<=2;c++){const l=c%2===0?s.plant:s.plantLeaf;n.add(o(new h(1.15,.5,.66),l,e+r*1.95,i+.7,t+c*.9))}}return n.add(p("GROW 4","#1a100c","#f0c089",2.8,.55,e,i+4.75,t+.15)),n.add(p("FROM CO2","#1a100c","#d6b48a",3,.42,e,i+4.15,t+.15)),Y(n,[[52,-112],[62,-112],[70,-112]],s.pipe,.1),n}function q4(){const n=new R;n.name="approach-lights";for(const[a,r]of[[4,68],[4,50],[4,32]]){const c=M(a,r);n.add(o(new P(.12,.16,3.6,8),s.steelDark,a,c+1.9,r)),n.add(o(new h(.42,.42,.42),s.glowPad,a,c+3.85,r))}const e=16,t=48,i=M(e,t);return n.add(o(new h(5.2,.16,4),s.concrete,e,i+.08,t)),n.add(o(new h(2.4,1.5,1.6),s.habDark,e,i+.95,t)),n.add(p("APPROACH","#1a100c","#f0c089",3,.42,e,i+2.25,t+2.1)),n.add(p("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function Y4(){const n=new R;n.name="isru-process-water";const e=-58,t=-36,i=M(e,t);return n.add(o(new h(11.2,.2,7.4),s.concrete,e,i+.1,t)),n.add(o(new P(1.7,1.7,8.4,16),s.pipe,e-2.2,i+2,t,0,0,Math.PI/2)),n.add(o(new P(1.7,1.7,8.4,16),s.pipe,e+2,i+2,t,0,0,Math.PI/2)),n.add(o(new h(2.4,1.6,1.8),s.habDark,e,i+1,t+2.4)),n.add(p("PROCESS","#1a2830","#d6e6ef",3.2,.5,e,i+4.55,t+3.8)),n.add(p("H2O","#1a2830","#d6b48a",2,.42,e,i+4,t+3.8)),Y(n,[[-58,-142],[-58,-90],[-58,-36]],s.pipe,.11),Y(n,[[-58,-36],[-64,-26],[-68,-16]],s.pipe,.1),Y(n,[[-58,-36],[-50,-16],[-50,4]],s.pipe,.1),n}function K4(){const n=new R;n.name="methalox-berm";const e=o(new Ce(9.2,1.7,8,24,Math.PI*1.2),s.rust,50,M(50,4)-.15,4,Math.PI/2,1.6,0);e.scale.set(1,.45,1),n.add(e);for(const[r,c]of[[54,12],[56,4],[54,-4]]){const l=o(new ut(2.2,0),s.rust,r,M(r,c)+.9,c);l.scale.set(1.2,.55,1.05),n.add(l)}const[t,i,a]=Pt(50,4,2.2);return n.add(p("FARM BERM","#1a100c","#f0c089",3.4,.55,t,i+1.1,a)),n.add(p("METHALOX","#1a100c","#d6b48a",3.2,.42,t,i+.5,a)),n}function J4(){const n=new R;n.name="ice-mine-berm";const e=o(new Ce(8.4,1.6,8,24,Math.PI*1.15),s.rust,-40,M(-40,-168)-.15,-168,Math.PI/2,.4,0);e.scale.set(1,.44,1),n.add(e);for(const[r,c]of[[-34,-162],[-32,-170],[-38,-176]]){const l=o(new ut(2.1,0),s.rust,r,M(r,c)+.85,c);l.scale.set(1.15,.55,1),n.add(l)}const[t,i,a]=Pt(-40,-168,2.2);return n.add(p("MINE BERM","#1a2830","#d6e6ef",3.4,.55,t,i+1.1,a)),n.add(p("ICE 1","#1a2830","#d6b48a",2.2,.42,t,i+.5,a)),n}function Z4(){const n=new R;n.name="tool-crib";const e=82,t=-90,i=M(e,t);n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(7.2,2.6,3.4),s.habDark,e,i+1.5,t)),n.add(o(new h(7.4,.12,3.6),s.steel,e,i+2.85,t));for(let a=-2;a<=2;a++)n.add(o(new h(.9,1.6,.55),s.steelDark,e+a*1.15,i+1.15,t+1.35));return J(n,77.8,-87.4,.15,.85),J(n,86.2,-92.4,-.1,.8),n.add(p("TOOL","#1a100c","#f0c089",2.2,.5,e,i+3.85,t+3.7)),n.add(p("CRIB","#1a100c","#d6b48a",2,.42,e,i+3.3,t+3.7)),n}function $4(){const n=new R;n.name="comms-battery";const e=4,t=-148,i=M(e,t);n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t));for(let a=0;a<4;a++)n.add(o(new h(1.7,1.9,3.6),s.battery,e-3.2+a*2.1,i+1.15,t)),n.add(o(new h(1.55,.08,3.4),s.steel,e-3.2+a*2.1,i+2.15,t));return n.add(p("COMMS","#111111","#f4e6c8",2.6,.5,e,i+3.15,t+3.7)),n.add(p("NIGHT","#111111","#d6b48a",2.2,.42,e,i+2.6,t+3.7)),n}function j4(){const n=new R;n.name="solar-combiner-3";const e=148,t=-40,i=M(e,t);n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.6,2.4,2.8),s.habDark,e-2,i+1.4,t)),n.add(o(new h(3.2,2,2.4),s.steelDark,e+2.2,i+1.2,t));for(let a=0;a<3;a++)n.add(o(new h(.7,1.5,1.8),s.battery,e+1.2+a*.85,i+1,t));return n.add(p("COMBINER","#111111","#f4e6c8",3.4,.5,e,i+3.55,t+3.7)),n.add(p("FIELD 3","#111111","#d6b48a",2.6,.42,e,i+3,t+3.7)),Y(n,[[135,-40],[142,-40],[148,-40]],s.cable,.1),Y(n,[[148,-40],[124,-30],[100,-22]],s.cable,.09),n}function Q4(){const n=new R;n.name="solar-combiner-2";const e=124,t=-70,i=M(e,t);n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.6,2.4,2.8),s.habDark,e-2,i+1.4,t)),n.add(o(new h(3.2,2,2.4),s.steelDark,e+2.2,i+1.2,t));for(let a=0;a<3;a++)n.add(o(new h(.7,1.5,1.8),s.battery,e+1.2+a*.85,i+1,t));return n.add(p("COMBINER","#111111","#f4e6c8",3.4,.5,e,i+3.55,t+3.7)),n.add(p("FIELD 2","#111111","#d6b48a",2.6,.42,e,i+3,t+3.7)),Y(n,[[112,-83],[118,-76],[124,-70]],s.cable,.1),Y(n,[[124,-70],[136,-54],[148,-40]],s.cable,.09),n}function e8(){const n=new R;n.name="solar-combiner-1";const e=96,t=-44,i=M(e,t);n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.6,2.4,2.8),s.habDark,e-2,i+1.4,t)),n.add(o(new h(3.2,2,2.4),s.steelDark,e+2.2,i+1.2,t));for(let a=0;a<3;a++)n.add(o(new h(.7,1.5,1.8),s.battery,e+1.2+a*.85,i+1,t));return n.add(p("COMBINER","#111111","#f4e6c8",3.4,.5,e,i+3.55,t+3.7)),n.add(p("FARM 1","#111111","#d6b48a",2.4,.42,e,i+3,t+3.7)),Y(n,[[82,-44],[90,-44],[96,-44]],s.cable,.1),Y(n,[[96,-44],[98,-32],[100,-22]],s.cable,.09),n}function t8(){const n=new R;n.name="sabatier-condenser";const e=-84,t=8,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.8,2.4,2.8),s.habDark,e-2,i+1.4,t)),n.add(o(new P(1.35,1.35,4.6,14),s.pipe,e+2.4,i+2.5,t)),n.add(o(new Ce(1.65,.1,6,14),s.steel,e+2.4,i+4.1,t,Math.PI/2,0,0)),n.add(o(new P(.7,.7,2.4,12),s.steelDark,e+2.4,i+1.4,t+2.1)),n.add(p("KNOCKOUT","#1a2830","#d6e6ef",3.4,.45,e,i+4.15,t+3.7)),n.add(p("H2O","#1a2830","#d6b48a",1.8,.4,e,i+3.6,t+3.7)),Y(n,[[-68,-16],[-76,-4],[-84,8]],s.pipe,.11),Y(n,[[-84,8],[-80,14],[-80,20]],s.tankCh4,.09),n}function n8(){const n=new R;n.name="hab-dust-lock";const e=16,t=-86,i=M(e,t);return n.add(o(new h(8.4,.2,6.4),s.concrete,e,i+.1,t)),n.add(o(new h(6.2,3.4,4.4),s.habDark,e,i+1.9,t)),n.add(o(new h(6.4,.16,4.6),s.steel,e,i+3.65,t)),n.add(o(new h(1.8,2.4,.22),s.steelDark,e,i+1.5,t+2.3)),n.add(o(new h(1.8,2.4,.22),s.steelDark,e,i+1.5,t-2.3)),n.add(It(e+2.6,t+.2,.1)),n.add(p("DUST LOCK","#1a100c","#f0c089",3.4,.45,e,i+4.35,t+2.4)),n.add(p("HAB EVA","#1a100c","#d6b48a",2.6,.4,e,i+3.85,t+2.4)),n}function i8(){const n=new R;n.name="field3-night";const e=135,t=-22,i=M(e,t);n.add(o(new h(12,.2,7.2),s.concrete,e,i+.1,t));for(let a=0;a<5;a++)n.add(o(new h(1.7,2,4.2),s.battery,e-4+a*2,i+1.2,t));return n.add(p("NIGHT","#111111","#f4e6c8",2.2,.5,e,i+2.7,t+3.6)),n.add(p("FIELD 3","#111111","#d6b48a",2.4,.42,e,i+2.15,t+3.6)),Y(n,[[148,-40],[142,-30],[135,-22]],s.cable,.1),Y(n,[[135,-22],[118,-22],[100,-22]],s.cable,.09),n}function a8(){const n=new R;n.name="field2-night";const e=100,t=-70,i=M(e,t);n.add(o(new h(12,.2,7.2),s.concrete,e,i+.1,t));for(let a=0;a<5;a++)n.add(o(new h(1.7,2,4.2),s.battery,e-4+a*2,i+1.2,t));return n.add(p("NIGHT","#111111","#f4e6c8",2.2,.5,e,i+2.7,t+3.6)),n.add(p("FIELD 2","#111111","#d6b48a",2.4,.42,e,i+2.15,t+3.6)),Y(n,[[124,-70],[112,-70],[100,-70]],s.cable,.1),Y(n,[[100,-70],[100,-46],[100,-22]],s.cable,.09),n}function s8(){const n=new R;n.name="farm1-night";const e=82,t=-28,i=M(e,t);n.add(o(new h(12,.2,7.2),s.concrete,e,i+.1,t));for(let a=0;a<5;a++)n.add(o(new h(1.7,2,4.2),s.battery,e-4+a*2,i+1.2,t));return n.add(p("NIGHT","#111111","#f4e6c8",2.2,.5,e,i+2.7,t+3.6)),n.add(p("FARM 1","#111111","#d6b48a",2.4,.42,e,i+2.15,t+3.6)),Y(n,[[82,-44],[82,-36],[82,-28]],s.cable,.1),Y(n,[[82,-28],[74,-18],[68,-10]],s.cable,.09),n}function r8(){const n=new R;n.name="co2-capture-1";const e=-68,t=2,i=M(e,t);return n.add(o(new h(11.6,.2,7.4),s.concrete,e,i+.1,t)),n.add(o(new P(.55,.55,6.8,10),s.steel,e-2.4,i+3.6,t)),n.add(o(new P(2.1,.65,2.4,14),s.steelDark,e-2.4,i+7.8,t)),n.add(o(new Ce(1.85,.1,6,16),s.steel,e-2.4,i+9.1,t,Math.PI/2,0,0)),n.add(o(new h(3.2,2.2,2.4),s.habDark,e+2.2,i+1.3,t)),n.add(p("CO2","#1a100c","#f0c089",2.2,.55,e-2.4,i+4.8,t+1.4)),n.add(p("INTAKE 1","#1a100c","#d6b48a",3,.45,e+2.2,i+2.7,t+1.35)),Y(n,[[-68,2],[-68,-8],[-68,-16]],s.pipe,.12),n}function o8(){const n=new R;n.name="field3-dust-fence";const e=122,t=-40,i=M(e,t);for(let a=0;a<8;a++){const r=t-10.5+a*3;n.add(o(new h(.18,3.4,.18),s.steelDark,e,i+1.8,r)),a<7&&n.add(o(new h(.06,2.6,2.7),s.lattice,e,i+1.7,r+1.5))}return n.add(p("DUST","#1a100c","#f0c089",2.4,.45,e-1.4,i+3.5,t)),n.add(p("FIELD 3","#1a100c","#d6b48a",2.6,.4,e-1.4,i+3,t)),n}function c8(){const n=new R;n.name="field2-dust-fence";const e=98,t=-83,i=M(e,t);for(let a=0;a<8;a++){const r=t-10.5+a*3;n.add(o(new h(.18,3.4,.18),s.steelDark,e,i+1.8,r)),a<7&&n.add(o(new h(.06,2.6,2.7),s.lattice,e,i+1.7,r+1.5))}return n.add(p("DUST","#1a100c","#f0c089",2.4,.45,e-1.4,i+3.5,t)),n.add(p("FIELD 2","#1a100c","#d6b48a",2.6,.4,e-1.4,i+3,t)),n}function d8(){const n=new R;n.name="farm1-dust-fence";const e=70,t=-44,i=M(e,t);for(let a=0;a<8;a++){const r=t-10.5+a*3;n.add(o(new h(.18,3.4,.18),s.steelDark,e,i+1.8,r)),a<7&&n.add(o(new h(.06,2.6,2.7),s.lattice,e,i+1.7,r+1.5))}return n.add(p("DUST","#1a100c","#f0c089",2.4,.45,e-1.4,i+3.5,t)),n.add(p("FARM 1","#1a100c","#d6b48a",2.4,.4,e-1.4,i+3,t)),n}function l8(){const n=new R;n.name="ice-crush-cover";const e=-102,t=-158,i=M(e,t);n.add(o(new h(10.4,.18,8.2),s.concrete,e,i+.09,t));for(const[r,c]of[[-4.2,-3.2],[4.2,-3.2],[-4.2,3.2],[4.2,3.2]])n.add(o(new P(.16,.2,4.2,8),s.steelDark,e+r,i+2.2,t+c));n.add(o(new h(10.8,.14,8.6),s.steel,e,i+4.4,t)),n.add(o(new h(3.2,1.8,2.4),s.steelDark,e,i+1.1,t));const a=o(new ut(1.6,0),s.ice,e+2.8,i+.85,t+1.6);return a.scale.set(1.2,.55,1.05),n.add(a),n.add(p("CRUSH","#1a2830","#d6e6ef",2.6,.45,e,i+4.95,t+4.3)),n.add(p("COVER","#1a2830","#d6b48a",2.4,.4,e,i+4.45,t+4.3)),n}function h8(){const n=new R;n.name="batteries-4";const e=-18,t=-78,i=M(e,t);n.add(o(new h(11.6,.2,6.4),s.concrete,e,i+.1,t));for(let a=0;a<5;a++)n.add(o(new h(1.7,1.95,3.8),s.battery,e-4+a*2,i+1.15,t)),n.add(o(new h(1.55,.08,3.6),s.steel,e-4+a*2,i+2.18,t));return n.add(p("NIGHT","#111111","#f4e6c8",2.4,.5,e,i+2.7,t+3.3)),n.add(p("HAB 4","#111111","#d6b48a",2.2,.42,e,i+2.15,t+3.3)),n}function u8(){const n=new R;n.name="ice-mine-2-berm";const e=o(new Ce(8.4,1.6,8,24,Math.PI*1.15),s.rust,-64,M(-64,-184)-.15,-184,Math.PI/2,.55,0);e.scale.set(1,.44,1),n.add(e);for(const[r,c]of[[-58,-178],[-56,-186],[-62,-192]]){const l=o(new ut(2.1,0),s.rust,r,M(r,c)+.85,c);l.scale.set(1.15,.55,1),n.add(l)}const[t,i,a]=Pt(-64,-184,2.2);return n.add(p("MINE BERM","#1a2830","#d6e6ef",3.4,.55,t,i+1.1,a)),n.add(p("ICE 2","#1a2830","#d6b48a",2.2,.42,t,i+.5,a)),n}function f8(){const n=new R;n.name="potable-uv";const e=32,t=-152,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(4.2,2.6,3.4),s.habDark,e-1.6,i+1.5,t)),n.add(o(new P(1.05,1.05,3.4,14),s.pipe,e+2.6,i+1.9,t)),n.add(o(new h(1.6,1.4,1.2),s.steel,e+2.6,i+3.9,t)),n.add(p("UV","#1a2830","#d6e6ef",1.6,.5,e,i+4.15,t+3.7)),n.add(p("POLISH","#1a2830","#d6b48a",2.6,.42,e,i+3.6,t+3.7)),Y(n,[[18,-152],[24,-152],[32,-152]],s.pipe,.1),n}function p8(){const n=new R;n.name="isru-radiators-2";const e=-96,t=16,i=M(e,t);n.add(o(new h(16.4,.18,6.2),s.concrete,e,i+.08,t));for(let a=0;a<5;a++){const r=e-6+a*3;n.add(o(new h(.16,3.6,.16),s.steelDark,r,i+1.9,t-1.8)),n.add(o(new h(.16,3.6,.16),s.steelDark,r,i+1.9,t+1.8)),n.add(o(new h(2.4,3.2,.08),s.solar,r,i+2.4,t,-.15,0,0)),n.add(o(new h(2.5,3.3,.04),s.steel,r,i+2.4,t+.06,-.15,0,0))}return n.add(p("REJECT","#1a100c","#f0c089",2.8,.5,e,i+4.55,t+3.2)),n.add(p("TRAIN 2","#1a100c","#d6b48a",2.8,.42,e,i+4,t+3.2)),Y(n,[[-96,-6],[-96,4],[-96,16]],s.pipe,.1),n}function m8(){const n=new R;n.name="workshop-3";const e=82,t=-74,i=M(e,t);n.add(o(new h(16,.28,12),s.concrete,e,i+.1,t));const a=o(new P(5.4,5.4,14,16,1,!1,0,Math.PI),s.habDark,e-1.2,i+3.1,t);return a.rotation.z=Math.PI/2,n.add(a),n.add(o(new h(.2,3.8,5.8),s.steelDark,e-8.1,i+2,t)),n.add(o(new h(.28,8.4,.28),s.lattice,e+6.4,i+4.3,t-3.6)),n.add(o(new h(7.2,.2,.2),s.lattice,e+3,i+8.5,t-3.6)),n.add(o(new h(1.5,1.1,1.5),s.crate,e+2.2,i+8,t-3.4)),J(n,89.2,-69.4,.2),J(n,90.4,-71.6,-.3,1.05),J(n,74.6,-68.8,.15,.9),n.add(p("WORKSHOP","#1a100c","#f0c089",3.8,.75,e,i+5.4,t+.2)),n.add(p("BAY 3","#1a100c","#d6b48a",2.6,.5,e,i+4.7,t+.2)),n}function x8(){const n=new R;n.name="ice-melt-2";const e=-78,t=-156,i=M(e,t);n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.6,2.8,3.2),s.habDark,e-1.8,i+1.6,t)),n.add(o(new P(1.45,1.45,4.2,14),s.pipe,e+2.2,i+2.3,t)),n.add(o(new P(.55,.85,1.6,10),s.steelDark,e+2.2,i+4.9,t));const a=o(new ut(1.8,0),s.ice,e-3.4,i+.9,t+2.1);return a.scale.set(1.15,.55,1),n.add(a),n.add(p("MELT","#1a2830","#d6e6ef",2.4,.5,e,i+4.4,t+3.7)),n.add(p("MINE 2","#1a2830","#d6b48a",2.6,.42,e,i+3.85,t+3.7)),Y(n,[[-78,-172],[-78,-164],[-78,-156]],s.pipe,.11),Y(n,[[-78,-156],[-90,-90],[-96,-26]],s.pipe,.1),n}function g8(){const n=new R;n.name="sabatier-condenser-2";const e=-110,t=8,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.8,2.4,2.8),s.habDark,e-2,i+1.4,t)),n.add(o(new P(1.35,1.35,4.6,14),s.pipe,e+2.4,i+2.5,t)),n.add(o(new Ce(1.65,.1,6,14),s.steel,e+2.4,i+4.1,t,Math.PI/2,0,0)),n.add(o(new P(.7,.7,2.4,12),s.steelDark,e+2.4,i+1.4,t+2.1)),n.add(p("KNOCKOUT","#1a2830","#d6e6ef",3.4,.45,e,i+4.15,t+3.7)),n.add(p("TRAIN 2","#1a2830","#d6b48a",2.8,.4,e,i+3.6,t+3.7)),Y(n,[[-96,-16],[-104,-4],[-110,8]],s.pipe,.11),n}function w8(){const n=new R;n.name="ch4-chiller-2";const e=-110,t=20,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(4.2,2.6,3.2),s.habDark,e-1.6,i+1.5,t)),n.add(o(new P(1.25,1.25,5,14),s.tankCh4,e+2.6,i+2.7,t)),n.add(o(new Ce(1.55,.1,6,14),s.steel,e+2.6,i+4.4,t,Math.PI/2,0,0)),n.add(p("CH4","#6a2208","#f4e6c8",2,.45,e,i+4.15,t+3.7)),n.add(p("TRAIN 2","#1a100c","#d6b48a",2.8,.4,e,i+3.6,t+3.7)),Y(n,[[-110,8],[-110,14],[-110,20]],s.tankCh4,.11),n}function _8(){const n=new R;n.name="o2-chiller-2";const e=-110,t=32,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(4.2,2.6,3.2),s.habDark,e-1.6,i+1.5,t)),n.add(o(new P(1.25,1.25,5,14),s.tankO2,e+2.6,i+2.7,t)),n.add(o(new Ce(1.55,.1,6,14),s.steel,e+2.6,i+4.4,t,Math.PI/2,0,0)),n.add(p("O2","#2a3340","#e8eef4",1.8,.45,e,i+4.15,t+3.7)),n.add(p("TRAIN 2","#1a100c","#d6b48a",2.8,.4,e,i+3.6,t+3.7)),Y(n,[[-110,20],[-110,26],[-110,32]],s.steel,.11),n}function b8(){const n=new R;n.name="isru-electrolysis-2";const e=-122,t=8,i=M(e,t);n.add(o(new h(11.6,.2,7.4),s.concrete,e,i+.1,t)),n.add(o(new h(3.4,3.6,2.6),s.habDark,e-2.6,i+2,t)),n.add(o(new h(3.4,3.6,2.6),s.steelDark,e+1.2,i+2,t));for(let a=0;a<4;a++)n.add(o(new h(.18,3.1,2.2),s.steel,e-3.8+a*.7,i+2,t));return n.add(o(new P(1.15,1.15,5.2,14),s.steel,e+4.2,i+2.8,t+1.4)),n.add(o(new P(.95,.95,4.4,14),s.tankO2,e+4.2,i+2.4,t-1.6)),n.add(p("ELECTRO","#1a100c","#f0c089",3.2,.5,e,i+4.55,t+3.7)),n.add(p("TRAIN 2","#1a100c","#d6b48a",2.8,.42,e,i+4,t+3.7)),Y(n,[[-110,8],[-116,8],[-122,8]],s.pipe,.11),n}function v8(){const n=new R;n.name="h2-recycle-2";const e=-122,t=20,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new P(1.55,1.55,6.4,16),s.steel,e-1.8,i+3.4,t)),n.add(o(new P(1.55,1.55,6.4,16),s.steel,e+1.8,i+3.4,t)),n.add(o(new h(2.2,1.4,1.6),s.habDark,e,i+.9,t+2.2)),n.add(p("H2","#1a100c","#f0c089",1.8,.5,e,i+5.15,t+3.7)),n.add(p("TRAIN 2","#1a100c","#d6b48a",2.8,.42,e,i+4.55,t+3.7)),Y(n,[[-122,8],[-122,14],[-122,20]],s.steel,.11),n}function M8(){const n=new R;n.name="eclss-2";const e=-8,t=-98,i=M(e,t);return n.add(o(new h(11.2,.22,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(4.8,2.6,3.4),s.habDark,e-2.4,i+1.5,t)),n.add(p("ECLSS","#1a100c","#f0c089",3.2,.6,e-2.4,i+3.05,t+1.85)),n.add(p("SCRUB 2","#1a100c","#d6b48a",3,.45,e-2.4,i+2.45,t+1.85)),n.add(o(new P(.85,.85,3.4,12),s.steelDark,e+1.6,i+1.9,t-1.4)),n.add(o(new P(.85,.85,3.4,12),s.steelDark,e+3.4,i+1.9,t-1.4)),n.add(p("AMINE","#1a100c","#d6b48a",2.2,.4,e+2.5,i+3.8,t-1.4)),n.add(o(new P(.7,.7,2.6,12),s.tankO2,e+1.6,i+1.5,t+1.8)),n.add(o(new P(.7,.7,2.6,12),s.tankO2,e+3.4,i+1.5,t+1.8)),n.add(p("O2","#2a3340","#e8eef4",1.4,.4,e+2.5,i+3.05,t+1.8)),Y(n,[[8,-98],[0,-98],[-8,-98]],s.pipe,.1),n}function y8(){const n=new R;n.name="waste-recycle-2";const e=-22,t=-98,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(4.4,2.8,3.6),s.habDark,e-1.4,i+1.6,t)),n.add(o(new P(1.15,1.15,3.6,14),s.pipe,e+2.8,i+2,t)),n.add(o(new P(.85,.85,2.8,12),s.steelDark,e+2.8,i+1.6,t+2)),n.add(p("WASTE","#1a100c","#f0c089",2.6,.5,e,i+4.25,t+3.7)),n.add(p("RECOVERY 2","#1a100c","#d6b48a",3.6,.42,e,i+3.7,t+3.7)),Y(n,[[-8,-98],[-14,-98],[-22,-98]],s.pipe,.1),n}function S8(){const n=new R;n.name="o2-buffer-2";const e=8,t=-88,i=M(e,t);n.add(o(new h(10.2,.2,7.4),s.concrete,e,i+.1,t));for(let a=0;a<4;a++){const r=e-3.3+a*2.2;n.add(o(new P(.85,.85,3.6,12),s.tankO2,r,i+2,t))}return n.add(p("O2","#2a3340","#e8eef4",1.8,.5,e,i+4.15,t+3.7)),n.add(p("CREW 2","#2a3340","#d6b48a",2.6,.42,e,i+3.6,t+3.7)),Y(n,[[-8,-88],[0,-88],[8,-88]],s.tankO2,.1),n}function E8(){const n=new R;n.name="isru-process-water-2";const e=-78,t=-36,i=M(e,t);return n.add(o(new h(11.2,.2,7.4),s.concrete,e,i+.1,t)),n.add(o(new P(1.7,1.7,8.4,16),s.pipe,e-2.2,i+2,t,0,0,Math.PI/2)),n.add(o(new P(1.7,1.7,8.4,16),s.pipe,e+2,i+2,t,0,0,Math.PI/2)),n.add(o(new h(2.4,1.6,1.8),s.habDark,e,i+1,t+2.4)),n.add(p("PROCESS","#1a2830","#d6e6ef",3.2,.5,e,i+4.55,t+3.8)),n.add(p("TRAIN 2","#1a2830","#d6b48a",2.8,.42,e,i+4,t+3.8)),Y(n,[[-78,-156],[-78,-90],[-78,-36]],s.pipe,.11),Y(n,[[-78,-36],[-88,-26],[-96,-16]],s.pipe,.1),n}function T8(){const n=new R;n.name="parts-rack";const e=96,t=-90,i=M(e,t);n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(8.4,2.8,.22),s.steelDark,e,i+1.6,t-2.4));for(let a=-3;a<=3;a++)n.add(o(new h(.16,2.6,1.8),s.steel,e+a*1.1,i+1.5,t-1.4));return J(n,92.2,-87.6,.15,.85),J(n,99.4,-88.2,-.2,1),n.add(p("PARTS","#1a100c","#f0c089",2.6,.5,e,i+3.35,t+3.5)),n.add(p("RACK","#1a100c","#d6b48a",2.2,.42,e,i+2.8,t+3.5)),n}function A8(){const n=new R;n.name="hab-power-trench";const e=-5,t=-78,i=M(e,t);return n.add(o(new h(7.6,.18,5.4),s.concrete,e,i+.08,t)),n.add(o(new h(3.2,1.8,2.4),s.habDark,e,i+1.1,t)),n.add(o(new h(1.4,.9,1.1),s.steelDark,e+2.4,i+.65,t+1.2)),n.add(p("HAB","#111111","#f4e6c8",1.8,.45,e,i+2.45,t+2.8)),n.add(p("TRENCH","#111111","#d6b48a",2.4,.38,e,i+1.95,t+2.8)),Y(n,[[8,-78],[-5,-78],[-18,-78]],s.cable,.12),n}function R8(){const n=new R;n.name="comms-inverter";const e=16,t=-148,i=M(e,t);n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.6,2.4,2.8),s.habDark,e-2,i+1.4,t)),n.add(o(new h(3.2,2,2.4),s.steelDark,e+2.2,i+1.2,t));for(let a=0;a<3;a++)n.add(o(new h(.7,1.5,1.8),s.battery,e+1.2+a*.85,i+1,t));return n.add(p("COMMS","#111111","#f4e6c8",2.6,.5,e,i+3.55,t+3.7)),n.add(p("INVERTER","#111111","#d6b48a",3.2,.42,e,i+3,t+3.7)),Y(n,[[4,-148],[10,-148],[16,-148]],s.cable,.1),Y(n,[[-8,-162],[4,-154],[16,-148]],s.cable,.09),n}function C8(){const n=new R;n.name="ice-weigh";const e=-90,t=-136,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(6.4,.28,3.6),s.steel,e,i+.28,t)),n.add(o(new h(2.2,2.4,1.8),s.habDark,e+3.2,i+1.4,t+2)),n.add(o(new h(.18,3.2,.18),s.steelDark,e-3.6,i+1.8,t-2.4)),n.add(o(new h(.18,3.2,.18),s.steelDark,e+3.6,i+1.8,t-2.4)),n.add(o(new h(7.4,.12,.12),s.steel,e,i+3.45,t-2.4)),n.add(p("WEIGH","#1a2830","#d6e6ef",2.6,.5,e,i+3.15,t+3.7)),n.add(p("ICE HAUL","#1a2830","#d6b48a",3,.42,e,i+2.6,t+3.7)),n}function P8(){const n=new R;n.name="hab-eva-locker";const e=16,t=-74,i=M(e,t);return n.add(o(new h(7.2,.16,5.4),s.concrete,e,i+.08,t)),n.add(o(new h(5.8,.16,2.4),s.steelDark,e,i+.18,t)),n.add(o(new h(.16,2.8,.16),s.steel,e-2.4,i+1.6,t-.7)),n.add(o(new h(.16,2.8,.16),s.steel,e+2.4,i+1.6,t-.7)),n.add(o(new h(5,.12,.12),s.steel,e,i+3,t-.7)),n.add(It(e-1.5,t,.2)),n.add(It(e,t+.15,-.1)),n.add(It(e+1.5,t,.15)),n.add(p("SUITS","#1a100c","#f0c089",2.4,.45,e,i+3.45,t+2.4)),n.add(p("HAB EVA","#1a100c","#d6b48a",2.8,.4,e,i+2.95,t+2.4)),n}function D8(){const n=new R;n.name="comms-berm";const e=o(new Ce(8.4,1.6,8,24,Math.PI*1.15),s.rust,-48,M(-48,-138)-.15,-138,Math.PI/2,.7,0);e.scale.set(1,.44,1),n.add(e);for(const[r,c]of[[-42,-132],[-40,-140],[-46,-146]]){const l=o(new ut(2.1,0),s.rust,r,M(r,c)+.85,c);l.scale.set(1.15,.55,1),n.add(l)}const[t,i,a]=Pt(-48,-138,2.2);return n.add(p("DUST BERM","#1a2830","#d6e6ef",3.4,.55,t,i+1.1,a)),n.add(p("COMMS","#1a2830","#d6b48a",2.4,.42,t,i+.5,a)),n}function z8(){const n=new R;n.name="grow-water";const e=52,t=-126,i=M(e,t);return n.add(o(new h(11.2,.2,7.4),s.concrete,e,i+.1,t)),n.add(o(new P(1.7,1.7,8.4,16),s.pipe,e-2.2,i+2,t,0,0,Math.PI/2)),n.add(o(new P(1.7,1.7,8.4,16),s.pipe,e+2,i+2,t,0,0,Math.PI/2)),n.add(o(new h(2.4,1.6,1.8),s.habDark,e,i+1,t+2.4)),n.add(p("GROW","#1a2830","#d6e6ef",2.4,.5,e,i+4.55,t+3.8)),n.add(p("H2O","#1a2830","#d6b48a",2,.42,e,i+4,t+3.8)),Y(n,[[52,-112],[52,-118],[52,-126]],s.pipe,.11),Y(n,[[38,-126],[44,-126],[52,-126]],s.pipe,.1),n}function I8(){const n=new R;n.name="grow-nutrient";const e=70,t=-126,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(4.4,2.8,3.6),s.habDark,e-1.4,i+1.6,t)),n.add(o(new P(1.15,1.15,3.6,14),s.pipe,e+2.8,i+2,t)),n.add(o(new P(.85,.85,2.8,12),s.steelDark,e+2.8,i+1.6,t+2)),n.add(p("NUTRIENT","#1a100c","#f0c089",3.4,.5,e,i+4.25,t+3.7)),n.add(p("GROW","#1a100c","#d6b48a",2.2,.42,e,i+3.7,t+3.7)),Y(n,[[52,-126],[60,-126],[70,-126]],s.pipe,.1),Y(n,[[70,-112],[70,-118],[70,-126]],s.pipe,.09),n}function L8(){const n=new R;n.name="hab-street-lights";for(const[a,r]of[[0,-78],[0,-98],[0,-118]]){const c=M(a,r);n.add(o(new P(.12,.16,3.6,8),s.steelDark,a,c+1.9,r)),n.add(o(new h(.42,.42,.42),s.glowPad,a,c+3.85,r))}const e=0,t=-68,i=M(e,t);return n.add(o(new h(5.2,.16,4),s.concrete,e,i+.08,t)),n.add(o(new h(2.4,1.5,1.6),s.habDark,e,i+.95,t)),n.add(p("HAB","#1a100c","#f0c089",1.8,.42,e,i+2.25,t+2.1)),n.add(p("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function U8(){const n=new R;n.name="workshop-lights";for(const[a,r]of[[58,-80],[74,-80],[90,-80]]){const c=M(a,r);n.add(o(new P(.12,.16,3.6,8),s.steelDark,a,c+1.9,r)),n.add(o(new h(.42,.42,.42),s.glowPad,a,c+3.85,r))}const e=48,t=-70,i=M(e,t);return n.add(o(new h(5.2,.16,4),s.concrete,e,i+.08,t)),n.add(o(new h(2.4,1.5,1.6),s.habDark,e,i+.95,t)),n.add(p("SHOP","#1a100c","#f0c089",2,.42,e,i+2.25,t+2.1)),n.add(p("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function N8(){const n=new R;n.name="ice-mine-lights";for(const[a,r]of[[-58,-148],[-78,-148],[-90,-148]]){const c=M(a,r);n.add(o(new P(.12,.16,3.6,8),s.steelDark,a,c+1.9,r)),n.add(o(new h(.42,.42,.42),s.glowPad,a,c+3.85,r))}const e=-46,t=-148,i=M(e,t);return n.add(o(new h(5.2,.16,4),s.concrete,e,i+.08,t)),n.add(o(new h(2.4,1.5,1.6),s.habDark,e,i+.95,t)),n.add(p("ICE","#1a100c","#f0c089",1.8,.42,e,i+2.25,t+2.1)),n.add(p("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function O8(){const n=new R;n.name="isru-lights";for(const[a,r]of[[-44,12],[-62,16],[-80,16]]){const c=M(a,r);n.add(o(new P(.12,.16,3.6,8),s.steelDark,a,c+1.9,r)),n.add(o(new h(.42,.42,.42),s.glowPad,a,c+3.85,r))}const e=-38,t=16,i=M(e,t);return n.add(o(new h(5.2,.16,4),s.concrete,e,i+.08,t)),n.add(o(new h(2.4,1.5,1.6),s.habDark,e,i+.95,t)),n.add(p("ISRU","#1a100c","#f0c089",2,.42,e,i+2.25,t+2.1)),n.add(p("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function F8(){const n=new R;n.name="grow-lights";for(const[a,r]of[[22,-104],[38,-118],[52,-104]]){const c=M(a,r);n.add(o(new P(.12,.16,3.6,8),s.steelDark,a,c+1.9,r)),n.add(o(new h(.42,.42,.42),s.glowPad,a,c+3.85,r))}const e=38,t=-104,i=M(e,t);return n.add(o(new h(5.2,.16,4),s.concrete,e,i+.08,t)),n.add(o(new h(2.4,1.5,1.6),s.habDark,e,i+.95,t)),n.add(p("GROW","#1a100c","#f0c089",2,.42,e,i+2.25,t+2.1)),n.add(p("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function k8(){const n=new R;n.name="solar4-lights";for(const[a,r]of[[158,-48],[148,-48],[172,-62]]){const c=M(a,r);n.add(o(new P(.12,.16,3.6,8),s.steelDark,a,c+1.9,r)),n.add(o(new h(.42,.42,.42),s.glowPad,a,c+3.85,r))}const e=172,t=-48,i=M(e,t);return n.add(o(new h(5.2,.16,4),s.concrete,e,i+.08,t)),n.add(o(new h(2.4,1.5,1.6),s.habDark,e,i+.95,t)),n.add(p("FIELD 4","#1a100c","#f0c089",2.6,.42,e,i+2.25,t+2.1)),n.add(p("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function B8(){const n=new R;n.name="pad-floods";for(const[a,r]of[[-8,48],[-8,32],[-8,16]]){const c=M(a,r);n.add(o(new P(.12,.16,3.6,8),s.steelDark,a,c+1.9,r)),n.add(o(new h(.42,.42,.42),s.glowPad,a,c+3.85,r))}const e=-16,t=36,i=M(e,t);return n.add(o(new h(5.2,.16,4),s.concrete,e,i+.08,t)),n.add(o(new h(2.4,1.5,1.6),s.habDark,e,i+.95,t)),n.add(p("PAD","#1a100c","#f0c089",1.8,.42,e,i+2.25,t+2.1)),n.add(p("FLOOD","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function H8(){const n=new R;n.name="comms-lights";for(const[a,r]of[[-8,-138],[4,-148],[16,-138]]){const c=M(a,r);n.add(o(new P(.12,.16,3.6,8),s.steelDark,a,c+1.9,r)),n.add(o(new h(.42,.42,.42),s.glowPad,a,c+3.85,r))}const e=4,t=-138,i=M(e,t);return n.add(o(new h(5.2,.16,4),s.concrete,e,i+.08,t)),n.add(o(new h(2.4,1.5,1.6),s.habDark,e,i+.95,t)),n.add(p("COMMS","#1a100c","#f0c089",2.4,.42,e,i+2.25,t+2.1)),n.add(p("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function G8(){const n=new R;n.name="methalox-lights";for(const[a,r]of[[62,16],[68,-6],[58,16]]){const c=M(a,r);n.add(o(new P(.12,.16,3.6,8),s.steelDark,a,c+1.9,r)),n.add(o(new h(.42,.42,.42),s.glowPad,a,c+3.85,r))}const e=68,t=6,i=M(e,t);return n.add(o(new h(5.2,.16,4),s.concrete,e,i+.08,t)),n.add(o(new h(2.4,1.5,1.6),s.habDark,e,i+.95,t)),n.add(p("MX","#1a100c","#f0c089",1.6,.42,e,i+2.25,t+2.1)),n.add(p("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function V8(){const n=new R;n.name="sinter-kiln";const e=66,t=-104,i=M(e,t);return n.add(o(new h(11.2,.2,7.4),s.concrete,e,i+.1,t)),n.add(o(new P(1.55,1.55,8.6,16),s.steelDark,e,i+2.15,t,0,0,Math.PI/2)),n.add(o(new P(.42,.55,3.2,10),s.steel,e+2.4,i+4.4,t)),n.add(o(new h(2.2,1.8,2),s.habDark,e-4.4,i+1.1,t+1.8)),n.add(o(new h(1.6,1.4,1.6),s.rust,e+4.2,i+.9,t-1.6)),n.add(p("SINTER","#1a100c","#f0c089",2.8,.5,e,i+4.85,t+3.8)),n.add(p("KILN","#1a100c","#d6b48a",2,.42,e,i+4.3,t+3.8)),n}function W8(){const n=new R;n.name="sinter-bricks";const e=80,t=-104,i=M(e,t);n.add(o(new h(7.6,.16,5.4),s.concrete,e,i+.08,t));for(let a=0;a<3;a++)for(let r=0;r<4;r++){const c=e-2.4+r*1.55,l=t-1.2+a*1.2;n.add(o(new h(1.35,.42,.95),s.rust,c,i+.38,l)),n.add(o(new h(1.35,.42,.95),s.habDark,c,i+.82,l))}return n.add(p("SINTER","#1a100c","#f0c089",2.6,.42,e,i+1.85,t+2.8)),n.add(p("BRICK","#1a100c","#d6b48a",2.2,.36,e,i+1.4,t+2.8)),n}function X8(){const n=new R;n.name="sinter-roller";const e=18,t=136,i=M(e,t);return n.add(o(new h(8.8,.16,5.2),s.concrete,e,i+.08,t)),n.add(o(new h(3.6,1.6,2.2),s.habDark,e-.6,i+1.15,t)),n.add(o(new P(1.15,1.15,2.6,14),s.steelDark,e+2.6,i+1.2,t,0,0,Math.PI/2)),n.add(o(new P(.55,.55,2.2,10),s.steel,e-2.6,i+.7,t,0,0,Math.PI/2)),n.add(p("SINTER","#1a100c","#f0c089",2.6,.42,e,i+2.55,t+2.7)),n.add(p("ROLLER","#1a100c","#d6b48a",2.4,.36,e,i+2.1,t+2.7)),n}function q8(){const n=new R;n.name="hab-blower";const e=22,t=-98,i=M(e,t);return n.add(o(new h(7.2,.18,5.2),s.concrete,e,i+.09,t)),n.add(o(new h(2.6,1.7,2),s.habDark,e-1.4,i+1.05,t)),n.add(o(new P(1.05,1.05,2.4,14),s.steelDark,e+1.8,i+1.35,t,0,0,Math.PI/2)),n.add(o(new P(.28,.28,2.8,8),s.pipe,e+1.8,i+2.55,t)),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+2.7,t+2.6)),n.add(p("BLOWER","#1a100c","#d6b48a",2.6,.36,e,i+2.25,t+2.6)),n}function Y8(){const n=new R;n.name="solar4-inverter";const e=172,t=-62,i=M(e,t);n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.6,2.4,2.8),s.habDark,e-2,i+1.4,t)),n.add(o(new h(3.2,2,2.4),s.steelDark,e+2.2,i+1.2,t));for(let a=0;a<3;a++)n.add(o(new h(.7,1.5,1.8),s.battery,e+1.2+a*.85,i+1,t));return n.add(p("FIELD 4","#111111","#f4e6c8",2.8,.5,e,i+3.55,t+3.7)),n.add(p("INVERTER","#111111","#d6b48a",3.2,.42,e,i+3,t+3.7)),n}function K8(){const n=new R;n.name="ice-drill-2";const e=-92,t=-184,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.4,1.8,2.4),s.habDark,e-2.2,i+1.1,t)),n.add(o(new P(.28,.42,6.4,10),s.steel,e+2.2,i+3.4,t)),n.add(o(new ii(.55,1.4,8),s.soot,e+2.2,i+.85,t)),n.add(o(new h(1.6,1.2,1.4),s.steelDark,e+2.2,i+6.5,t)),n.add(p("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+2.55,t+3.7)),n.add(p("DRILL","#1a2830","#d6b48a",2.2,.36,e,i+2.1,t+3.7)),n}function J8(){const n=new R;n.name="hab-n2";const e=-32,t=-88,i=M(e,t);n.add(o(new h(10.2,.2,7.4),s.concrete,e,i+.1,t));for(let a=0;a<4;a++){const r=e-3.3+a*2.2;n.add(o(new P(.85,.85,3.6,12),s.steel,r,i+2,t))}return n.add(p("N2","#1a2830","#d6e6ef",1.8,.5,e,i+4.15,t+3.7)),n.add(p("SPARE","#1a2830","#d6b48a",2.2,.42,e,i+3.6,t+3.7)),Y(n,[[-32,-88],[-18,-88],[-8,-88]],s.pipe,.1),n}function Z8(){const n=new R;n.name="workshop-welder";const e=96,t=-104,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.4,2.2,2.6),s.habDark,e-2.2,i+1.3,t)),n.add(o(new h(.35,2.8,.35),s.steel,e+2,i+1.6,t)),n.add(o(new h(2.2,.28,.28),s.steel,e+3,i+2.9,t)),n.add(o(new h(1.8,1.2,1.6),s.steelDark,e+2.4,i+.8,t+1.6)),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.15,t+3.7)),n.add(p("WELDER","#1a100c","#d6b48a",2.6,.36,e,i+2.7,t+3.7)),n}function $8(){const n=new R;n.name="ch4-hose";const e=-28,t=-8,i=M(e,t);return n.add(o(new h(7.6,.18,5.4),s.concrete,e,i+.09,t)),n.add(o(new h(2.4,1.6,2),s.habDark,e-1.6,i+1,t)),n.add(o(new Ce(1.05,.22,8,16),s.tankCh4,e+1.8,i+1.35,t,Math.PI/2,0,0)),n.add(o(new Ce(.72,.16,8,14),s.tankCh4,e+1.8,i+1.35,t,Math.PI/2,0,0)),n.add(p("CH4","#6a2208","#f4e6c8",1.8,.42,e,i+2.55,t+2.8)),n.add(p("HOSE","#6a2208","#d6b48a",2,.36,e,i+2.1,t+2.8)),n}function j8(){const n=new R;n.name="o2-hose";const e=-28,t=6,i=M(e,t);return n.add(o(new h(7.6,.18,5.4),s.concrete,e,i+.09,t)),n.add(o(new h(2.4,1.6,2),s.habDark,e-1.6,i+1,t)),n.add(o(new Ce(1.05,.22,8,16),s.tankO2,e+1.8,i+1.35,t,Math.PI/2,0,0)),n.add(o(new Ce(.72,.16,8,14),s.steel,e+1.8,i+1.35,t,Math.PI/2,0,0)),n.add(p("O2","#2a3340","#e8eef4",1.6,.42,e,i+2.55,t+2.8)),n.add(p("HOSE","#2a3340","#d6b48a",2,.36,e,i+2.1,t+2.8)),n}function Q8(){const n=new R;n.name="hab-water";const e=-46,t=-88,i=M(e,t);return n.add(o(new h(10.2,.2,7.4),s.concrete,e,i+.1,t)),n.add(o(new P(1.55,1.55,7.6,16),s.pipe,e-1.8,i+1.9,t,0,0,Math.PI/2)),n.add(o(new P(1.55,1.55,7.6,16),s.pipe,e+1.8,i+1.9,t,0,0,Math.PI/2)),n.add(o(new h(2.2,1.4,1.6),s.habDark,e,i+.9,t+2.2)),n.add(p("HAB","#1a2830","#d6e6ef",1.8,.5,e,i+4.35,t+3.8)),n.add(p("H2O","#1a2830","#d6b48a",2,.42,e,i+3.8,t+3.8)),Y(n,[[-46,-88],[-32,-88],[-18,-88]],s.pipe,.1),n}function e3(){const n=new R;n.name="sabatier-catalyst";const e=-50,t=-22,i=M(e,t);n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.4,2,2.6),s.habDark,e-2.2,i+1.2,t));for(let a=0;a<3;a++)n.add(o(new P(.55,.55,2.4,12),s.steelDark,e+1+a*1.35,i+1.4,t));return n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.05,t+3.7)),n.add(p("CATALYST","#1a100c","#d6b48a",3.2,.36,e,i+2.6,t+3.7)),n}function t3(){const n=new R;n.name="co2-spare";const e=-80,t=20,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.2,2,2.4),s.habDark,e-2,i+1.2,t)),n.add(o(new P(.7,.7,3.2,12),s.steelDark,e+2.2,i+1.8,t)),n.add(o(new P(1.15,.45,1.4,12),s.steel,e+2.2,i+4,t)),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.05,t+3.7)),n.add(p("CO2 COMP","#1a100c","#d6b48a",3.2,.36,e,i+2.6,t+3.7)),n}function n3(){const n=new R;n.name="h2-dryer";const e=-38,t=28,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.2,2,2.4),s.habDark,e-2.2,i+1.2,t)),n.add(o(new P(.95,.95,3.4,14),s.steelDark,e+2,i+1.9,t)),n.add(o(new P(.35,.35,2.2,8),s.pipe,e+2,i+4,t)),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.15,t+3.7)),n.add(p("H2 DRYER","#1a100c","#d6b48a",3,.36,e,i+2.7,t+3.7)),n}function i3(){const n=new R;n.name="ice-melt-3";const e=-46,t=-132,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.6,2.8,3.2),s.habDark,e-1.8,i+1.6,t)),n.add(o(new P(1.45,1.45,4.2,14),s.pipe,e+2.2,i+2.3,t)),n.add(o(new P(.55,.85,1.6,10),s.steelDark,e+2.2,i+4.9,t)),n.add(p("SPARE","#1a2830","#d6e6ef",2.2,.5,e,i+4.4,t+3.7)),n.add(p("MELT","#1a2830","#d6b48a",2,.42,e,i+3.85,t+3.7)),Y(n,[[-46,-132],[-58,-142],[-58,-150]],s.pipe,.1),n}function a3(){const n=new R;n.name="gh-dust-filter-2";const e=24,t=-118,i=M(e,t);return n.add(o(new h(9.2,.18,5.6),s.concrete,e,i+.09,t)),n.add(o(new h(3.8,2.6,2.4),s.habDark,e-1.6,i+1.5,t)),n.add(o(new P(.95,.95,3.2,12),s.steelDark,e+2.4,i+1.8,t)),n.add(o(new h(.12,2.2,2),s.lattice,e+3.5,i+1.4,t)),n.add(p("SPARE","#1a100c","#f0c089",2.2,.45,e,i+3.55,t+2.9)),n.add(p("FILTER","#1a100c","#d6b48a",2.6,.4,e,i+3.05,t+2.9)),Y(n,[[24,-118],[30,-112],[38,-104]],s.pipe,.1),n}function s3(){const n=new R;n.name="spare-ice-haul";const e=-110,t=-136,i=M(e,t);return n.add(o(new h(12.4,.16,6.4),s.concrete,e,i+.08,t)),n.add(on(e,t,-.25,{kind:"ice"})),n.add(p("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+3.4,t+3.4)),n.add(p("HAUL","#1a2830","#d6b48a",2,.36,e,i+2.95,t+3.4)),n}function r3(){const n=new R;n.name="hab-coupler";const e=-22,t=-110,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new P(1.35,1.35,6.4,16),s.habDark,e,i+1.7,t,0,0,Math.PI/2)),n.add(o(new Ce(1.4,.16,8,16),s.steel,e-3.2,i+1.7,t,0,0,Math.PI/2)),n.add(o(new Ce(1.4,.16,8,16),s.steel,e+3.2,i+1.7,t,0,0,Math.PI/2)),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.55,t+3.7)),n.add(p("TUBE","#1a100c","#d6b48a",2,.36,e,i+3.1,t+3.7)),n}function o3(){const n=new R;n.name="field4-night";const e=158,t=-48,i=M(e,t);n.add(o(new h(12,.2,7.2),s.concrete,e,i+.1,t));for(let a=0;a<5;a++)n.add(o(new h(1.7,2,4.2),s.battery,e-4+a*2,i+1.2,t));return n.add(p("NIGHT","#111111","#f4e6c8",2.2,.5,e,i+2.7,t+3.6)),n.add(p("FIELD 4","#111111","#d6b48a",2.4,.42,e,i+2.15,t+3.6)),Y(n,[[172,-62],[166,-54],[158,-48]],s.cable,.1),n}function c3(){const n=new R;n.name="workshop-air";const e=110,t=-90,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.2,2.2,2.6),s.habDark,e-2.2,i+1.3,t)),n.add(o(new P(1.15,1.15,3.4,16),s.steelDark,e+2,i+1.9,t)),n.add(o(new h(1.6,1.1,1.4),s.steel,e+2,i+.75,t+2)),n.add(o(new h(.22,1.6,.22),s.steel,e+3.4,i+1,t-1.6)),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.05,t+3.7)),n.add(p("AIR","#1a100c","#d6b48a",1.8,.36,e,i+3.6,t+3.7)),n}function d3(){const n=new R;n.name="hab-amine";const e=8,t=-110,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.2,2.2,2.6),s.habDark,e-2.4,i+1.3,t)),n.add(o(new P(.9,.9,3.6,14),s.steelDark,e+1.4,i+2,t)),n.add(o(new P(.9,.9,3.6,14),s.steelDark,e+3.4,i+2,t)),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.15,t+3.7)),n.add(p("AMINE","#1a100c","#d6b48a",2.4,.36,e,i+3.7,t+3.7)),Y(n,[[8,-98],[8,-104],[8,-110]],s.pipe,.1),n}function l3(){const n=new R;n.name="ice-drill-1";const e=-70,t=-148,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.4,1.8,2.4),s.habDark,e-2.2,i+1.1,t)),n.add(o(new P(.28,.42,6.4,10),s.steel,e+2.2,i+3.4,t)),n.add(o(new ii(.55,1.4,8),s.soot,e+2.2,i+.85,t)),n.add(o(new h(1.6,1.2,1.4),s.steelDark,e+2.2,i+6.5,t)),n.add(p("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+2.55,t+3.7)),n.add(p("DRILL","#1a2830","#d6b48a",2.2,.36,e,i+2.1,t+3.7)),n}function h3(){const n=new R;n.name="farm1-lights";for(const[a,r]of[[82,-28],[82,-44],[96,-44]]){const c=M(a,r);n.add(o(new P(.12,.16,3.6,8),s.steelDark,a,c+1.9,r)),n.add(o(new h(.42,.42,.42),s.glowPad,a,c+3.85,r))}const e=96,t=-28,i=M(e,t);return n.add(o(new h(5.2,.16,4),s.concrete,e,i+.08,t)),n.add(o(new h(2.4,1.5,1.6),s.habDark,e,i+.95,t)),n.add(p("FARM 1","#1a100c","#f0c089",2.4,.42,e,i+2.25,t+2.1)),n.add(p("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function u3(){const n=new R;n.name="field2-lights";for(const[a,r]of[[100,-70],[112,-83],[124,-70]]){const c=M(a,r);n.add(o(new P(.12,.16,3.6,8),s.steelDark,a,c+1.9,r)),n.add(o(new h(.42,.42,.42),s.glowPad,a,c+3.85,r))}const e=124,t=-83,i=M(e,t);return n.add(o(new h(5.2,.16,4),s.concrete,e,i+.08,t)),n.add(o(new h(2.4,1.5,1.6),s.habDark,e,i+.95,t)),n.add(p("FIELD 2","#1a100c","#f0c089",2.6,.42,e,i+2.25,t+2.1)),n.add(p("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function f3(){const n=new R;n.name="field3-lights";for(const[a,r]of[[135,-22],[135,-40],[148,-40]]){const c=M(a,r);n.add(o(new P(.12,.16,3.6,8),s.steelDark,a,c+1.9,r)),n.add(o(new h(.42,.42,.42),s.glowPad,a,c+3.85,r))}const e=148,t=-22,i=M(e,t);return n.add(o(new h(5.2,.16,4),s.concrete,e,i+.08,t)),n.add(o(new h(2.4,1.5,1.6),s.habDark,e,i+.95,t)),n.add(p("FIELD 3","#1a100c","#f0c089",2.6,.42,e,i+2.25,t+2.1)),n.add(p("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function p3(){const n=new R;n.name="spare-potable-uv";const e=46,t=-152,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(4.2,2.6,3.4),s.habDark,e-1.6,i+1.5,t)),n.add(o(new P(1.05,1.05,3.4,14),s.pipe,e+2.6,i+1.9,t)),n.add(o(new h(1.6,1.4,1.2),s.steel,e+2.6,i+3.9,t)),n.add(p("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+4.15,t+3.7)),n.add(p("UV","#1a2830","#d6b48a",1.6,.36,e,i+3.7,t+3.7)),Y(n,[[32,-152],[38,-152],[46,-152]],s.pipe,.1),n}function m3(){const n=new R;n.name="pad2-bricks";const e=32,t=136,i=M(e,t);n.add(o(new h(7.6,.16,5.4),s.concrete,e,i+.08,t));for(let a=0;a<3;a++)for(let r=0;r<4;r++){const c=e-2.4+r*1.55,l=t-1.2+a*1.2;n.add(o(new h(1.35,.42,.95),s.rust,c,i+.38,l)),n.add(o(new h(1.35,.42,.95),s.habDark,c,i+.82,l))}return n.add(p("PAD 2","#1a100c","#f0c089",2.2,.42,e,i+1.85,t+2.8)),n.add(p("BRICK","#1a100c","#d6b48a",2.2,.36,e,i+1.4,t+2.8)),n}function x3(){const n=new R;n.name="hab-regulator";const e=-8,t=-110,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.4,2.2,2.6),s.habDark,e-2.2,i+1.3,t)),n.add(o(new P(.95,.95,2.8,14),s.steelDark,e+2,i+1.6,t)),n.add(o(new P(.55,.55,1.6,12),s.steel,e+3.4,i+1,t+1.4)),n.add(o(new h(1.4,1.1,1.2),s.steel,e+2,i+.75,t+2)),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.35,t+3.7)),n.add(p("REG","#1a100c","#d6b48a",1.8,.36,e,i+2.9,t+3.7)),Y(n,[[-8,-98],[-8,-104],[-8,-110]],s.pipe,.1),n}function g3(){const n=new R;n.name="workshop-hoist";const e=110,t=-104,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(2.8,2,2.4),s.habDark,e-2.4,i+1.2,t)),n.add(o(new h(.28,5.2,.28),s.steelDark,e+1.6,i+2.8,t)),n.add(o(new h(4.2,.22,.22),s.steel,e+3.4,i+5.3,t)),n.add(o(new h(.16,1.6,.16),s.steel,e+5.2,i+4.4,t)),n.add(o(new h(.7,.5,.5),s.steelDark,e+5.2,i+3.5,t)),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+2.85,t+3.7)),n.add(p("HOIST","#1a100c","#d6b48a",2.2,.36,e,i+2.4,t+3.7)),n}function w3(){const n=new R;n.name="farm1-inverter";const e=70,t=-28,i=M(e,t);n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.6,2.4,2.8),s.habDark,e-2,i+1.4,t)),n.add(o(new h(3.2,2,2.4),s.steelDark,e+2.2,i+1.2,t));for(let a=0;a<3;a++)n.add(o(new h(.7,1.5,1.8),s.battery,e+1.2+a*.85,i+1,t));return n.add(p("FARM 1","#111111","#f4e6c8",2.6,.5,e,i+3.55,t+3.7)),n.add(p("INVERTER","#111111","#d6b48a",3.2,.42,e,i+3,t+3.7)),Y(n,[[82,-28],[76,-28],[70,-28]],s.cable,.1),n}function _3(){const n=new R;n.name="field2-inverter";const e=136,t=-70,i=M(e,t);n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.6,2.4,2.8),s.habDark,e-2,i+1.4,t)),n.add(o(new h(3.2,2,2.4),s.steelDark,e+2.2,i+1.2,t));for(let a=0;a<3;a++)n.add(o(new h(.7,1.5,1.8),s.battery,e+1.2+a*.85,i+1,t));return n.add(p("FIELD 2","#111111","#f4e6c8",2.8,.5,e,i+3.55,t+3.7)),n.add(p("INVERTER","#111111","#d6b48a",3.2,.42,e,i+3,t+3.7)),Y(n,[[124,-70],[130,-70],[136,-70]],s.cable,.1),n}function b3(){const n=new R;n.name="field3-inverter";const e=122,t=-22,i=M(e,t);n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.6,2.4,2.8),s.habDark,e-2,i+1.4,t)),n.add(o(new h(3.2,2,2.4),s.steelDark,e+2.2,i+1.2,t));for(let a=0;a<3;a++)n.add(o(new h(.7,1.5,1.8),s.battery,e+1.2+a*.85,i+1,t));return n.add(p("FIELD 3","#111111","#f4e6c8",2.8,.5,e,i+3.55,t+3.7)),n.add(p("INVERTER","#111111","#d6b48a",3.2,.42,e,i+3,t+3.7)),Y(n,[[135,-22],[128,-22],[122,-22]],s.cable,.1),n}function v3(){const n=new R;n.name="crush-hopper";const e=-114,t=-158,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.2,1.8,2.6),s.habDark,e-2.4,i+1.1,t)),n.add(o(new P(.35,1.55,3.2,12),s.steelDark,e+2,i+2,t)),n.add(o(new h(1.6,.7,1.4),s.steel,e+2,i+.55,t+2)),n.add(p("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+4.05,t+3.7)),n.add(p("HOPPER","#1a2830","#d6b48a",2.6,.36,e,i+3.6,t+3.7)),n}function M3(){const n=new R;n.name="spare-ch4-pump";const e=-32,t=-36,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.6,2.2,2.8),s.habDark,e-2,i+1.3,t)),n.add(o(new P(.7,.7,2.2,12),s.tankCh4,e+2,i+1.3,t,0,0,Math.PI/2)),n.add(o(new h(1.8,1.4,1.6),s.steelDark,e+2,i+.9,t+1.8)),n.add(p("SPARE","#6a2208","#f4e6c8",2.2,.42,e,i+3.15,t+3.7)),n.add(p("CH4 PUMP","#6a2208","#d6b48a",3,.36,e,i+2.7,t+3.7)),Y(n,[[-32,-22],[-32,-28],[-32,-36]],s.tankCh4,.11),n}function y3(){const n=new R;n.name="spare-o2-pump";const e=-42,t=6,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.6,2.2,2.8),s.habDark,e-2,i+1.3,t)),n.add(o(new P(.7,.7,2.2,12),s.tankO2,e+2,i+1.3,t,0,0,Math.PI/2)),n.add(o(new h(1.8,1.4,1.6),s.steelDark,e+2,i+.9,t+1.8)),n.add(p("SPARE","#2a3340","#e8eef4",2.2,.42,e,i+3.15,t+3.7)),n.add(p("O2 PUMP","#2a3340","#d6b48a",2.8,.36,e,i+2.7,t+3.7)),Y(n,[[-28,6],[-34,6],[-42,6]],s.tankO2,.11),n}function S3(){const n=new R;n.name="eva-battery";const e=28,t=-74,i=M(e,t);n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.2,1.6,2.2),s.habDark,e-2.2,i+1,t));for(let a=0;a<4;a++)n.add(o(new h(1.1,1.4,1.8),s.battery,e+.6+a*1.25,i+.9,t));return n.add(p("SPARE","#111111","#f4e6c8",2.2,.42,e,i+2.55,t+3.7)),n.add(p("EVA BATT","#111111","#d6b48a",3,.36,e,i+2.1,t+3.7)),n}function E3(){const n=new R;n.name="kiln-feed";const e=80,t=-118,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.2,1.8,2.6),s.habDark,e-2.4,i+1.1,t)),n.add(o(new P(.35,1.55,3.2,12),s.rust,e+2,i+2,t)),n.add(o(new h(1.6,.7,1.4),s.steelDark,e+2,i+.55,t+2)),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.05,t+3.7)),n.add(p("FEED","#1a100c","#d6b48a",2,.36,e,i+3.6,t+3.7)),n}function T3(){const n=new R;n.name="grow-co2";const e=38,t=-132,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3,1.8,2.4),s.habDark,e-2.6,i+1.1,t)),n.add(o(new P(1.15,1.15,3.6,14),s.steelDark,e+1.4,i+2,t)),n.add(o(new P(1.15,1.15,3.6,14),s.steelDark,e+3.6,i+2,t)),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.15,t+3.7)),n.add(p("CO2","#1a100c","#d6b48a",1.8,.36,e,i+3.7,t+3.7)),Y(n,[[52,-126],[44,-128],[38,-132]],s.pipe,.1),n}function A3(){const n=new R;n.name="pad2-cargo";const e=46,t=136,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),J(n,42.4,134.2,.1,1),J(n,45.2,133.8,-.15,.9),J(n,48.6,134.6,.2,1.05),J(n,43,137.6,-.1,.85),J(n,47.4,137.8,.05,.95),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+2.35,t+3.7)),n.add(p("CARGO","#1a100c","#d6b48a",2.4,.36,e,i+1.9,t+3.7)),n}function R3(){const n=new R;n.name="spare-condensate";const e=40,t=-140,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new P(1.25,1.25,3.6,14),s.pipe,e-1.8,i+2,t)),n.add(o(new P(1.25,1.25,3.6,14),s.pipe,e+1.6,i+2,t)),n.add(o(new h(2.2,1.5,1.7),s.habDark,e,i+.95,t+2.1)),n.add(p("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+4.15,t+3.6)),n.add(p("COND","#1a2830","#d6b48a",2,.36,e,i+3.7,t+3.6)),Y(n,[[28,-140],[34,-140],[40,-140]],s.pipe,.1),n}function C3(){const n=new R;n.name="press-die";const e=52,t=-90,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.6,.55,2.6),s.steelDark,e,i+.48,t)),n.add(o(new h(3.2,.45,2.2),s.habDark,e,i+.98,t)),n.add(o(new h(2.8,.4,1.8),s.rust,e,i+1.4,t)),n.add(o(new h(1.2,1.6,1.2),s.steel,e+2.8,i+1,t+1.6)),n.add(o(new h(2,1.2,1.4),s.habDark,e-2.6,i+.8,t+1.8)),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+2.35,t+3.7)),n.add(p("DIE","#1a100c","#d6b48a",1.6,.36,e,i+1.9,t+3.7)),n}function P3(){const n=new R;n.name="ice-trailer";const e=-124,t=-136,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(7.2,.45,3.2),s.steelDark,e,i+.85,t)),n.add(o(new h(1.4,.55,.7),s.steel,e+4.2,i+.85,t)),n.add(o(new P(.55,.55,.4,12),s.steelDark,e-2.2,i+.55,t+1.7,0,0,Math.PI/2)),n.add(o(new P(.55,.55,.4,12),s.steelDark,e-2.2,i+.55,t-1.7,0,0,Math.PI/2)),n.add(o(new P(.55,.55,.4,12),s.steelDark,e+2,i+.55,t+1.7,0,0,Math.PI/2)),n.add(o(new P(.55,.55,.4,12),s.steelDark,e+2,i+.55,t-1.7,0,0,Math.PI/2)),n.add(o(new h(1.6,1.1,1.4),s.habDark,e-2,i+1.6,t)),n.add(o(new h(1.6,1.1,1.4),s.habDark,e+.2,i+1.6,t)),n.add(o(new h(1.6,1.1,1.4),s.pipe,e+2.2,i+1.6,t)),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+2.55,t+3.7)),n.add(p("TRAIL","#1a100c","#d6b48a",2.2,.36,e,i+2.1,t+3.7)),n}function D3(){const n=new R;n.name="earth-battery";const e=28,t=-162,i=M(e,t);n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t));for(let a=0;a<4;a++)n.add(o(new h(1.7,1.9,3.6),s.battery,e-3.2+a*2.1,i+1.15,t)),n.add(o(new h(1.55,.08,3.4),s.steel,e-3.2+a*2.1,i+2.15,t));return n.add(p("SPARE","#111111","#f4e6c8",2.2,.42,e,i+3.15,t+3.7)),n.add(p("LINK","#111111","#d6b48a",1.8,.36,e,i+2.6,t+3.7)),n}function z3(){const n=new R;n.name="pad2-unloader";const e=46,t=148,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(1.2,8.4,1.2),s.steelDark,e-2.4,i+4.3,t)),n.add(o(new h(1.2,8.4,1.2),s.steelDark,e+2.4,i+4.3,t)),n.add(o(new h(7.2,.35,1.2),s.steel,e,i+8.6,t)),n.add(o(new h(.16,2.8,.16),s.steelDark,e,i+7,t+1.6)),n.add(o(new h(1.4,1.2,1.4),s.crate,e,i+5.4,t+1.6)),J(n,42.6,146.2,.15,.9),J(n,49.2,149.4,-.1,.85),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.55,t+3.7)),n.add(p("UNLOAD","#1a100c","#d6b48a",2.6,.36,e,i+4.1,t+3.7)),n}function I3(){const n=new R;n.name="workshop-mill";const e=96,t=-118,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(4.6,1.6,3.2),s.habDark,e,i+1,t)),n.add(o(new h(1.4,2.4,1.4),s.steelDark,e+1.2,i+2.4,t)),n.add(o(new h(2.6,.35,1.8),s.steel,e+1.2,i+3.7,t)),n.add(o(new P(.18,.18,1.2,10),s.steel,e+1.2,i+2.9,t+.9)),n.add(o(new h(2.2,1.1,1.6),s.steelDark,e-2.4,i+.75,t+1.8)),J(n,91.8,-115.6,.12,.85),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.25,t+3.7)),n.add(p("MILL","#1a100c","#d6b48a",1.8,.36,e,i+3.8,t+3.7)),n}function L3(){const n=new R;n.name="ice-conveyor";const e=-102,t=-148,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(7.6,.35,1.6),s.steelDark,e,i+1.15,t)),n.add(o(new h(7.2,.12,1.2),s.steel,e,i+1.4,t)),n.add(o(new h(.35,1.4,.35),s.steelDark,e-3.4,i+.8,t+1.1)),n.add(o(new h(.35,1.4,.35),s.steelDark,e+3.4,i+.8,t+1.1)),n.add(o(new h(.35,1.4,.35),s.steelDark,e-3.4,i+.8,t-1.1)),n.add(o(new h(.35,1.4,.35),s.steelDark,e+3.4,i+.8,t-1.1)),n.add(o(new h(1.8,1.2,1.5),s.habDark,e-2.6,i+2,t)),n.add(o(new P(.45,.45,1.4,10),s.steel,e+3.2,i+1.5,t,0,0,Math.PI/2)),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+2.85,t+3.7)),n.add(p("BELT","#1a100c","#d6b48a",1.8,.36,e,i+2.4,t+3.7)),n}function U3(){const n=new R;n.name="workshop-vise";const e=110,t=-118,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(5.2,1.15,2.6),s.habDark,e,i+.75,t)),n.add(o(new h(1.4,.85,1.1),s.steelDark,e+1.4,i+1.75,t)),n.add(o(new h(.35,.7,.9),s.steel,e+2.15,i+1.7,t)),n.add(o(new h(.35,.7,.9),s.steel,e+.65,i+1.7,t)),n.add(o(new h(2,1.3,1.5),s.steelDark,e-2.4,i+.85,t+1.8)),J(n,105.8,-115.4,.1,.8),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+2.55,t+3.7)),n.add(p("VISE","#1a100c","#d6b48a",1.8,.36,e,i+2.1,t+3.7)),n}function N3(){const n=new R;n.name="spare-ch4-tank";const e=-18,t=-36,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new P(1.25,1.25,3.8,14),s.tankCh4,e-1.8,i+2.1,t)),n.add(o(new P(1.25,1.25,3.8,14),s.tankCh4,e+1.6,i+2.1,t)),n.add(o(new h(2.2,1.4,1.6),s.habDark,e,i+.9,t+2.1)),n.add(p("SPARE","#6a2208","#f4e6c8",2.2,.42,e,i+4.35,t+3.7)),n.add(p("CH4","#6a2208","#d6b48a",1.8,.36,e,i+3.9,t+3.7)),Y(n,[[-32,-36],[-26,-36],[-18,-36]],s.tankCh4,.11),n}function O3(){const n=new R;n.name="spare-o2-tank";const e=-42,t=-8,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new P(1.25,1.25,3.8,14),s.tankO2,e-1.8,i+2.1,t)),n.add(o(new P(1.25,1.25,3.8,14),s.tankO2,e+1.6,i+2.1,t)),n.add(o(new h(2.2,1.4,1.6),s.habDark,e,i+.9,t+2.1)),n.add(p("SPARE","#2a3340","#e8eef4",2.2,.42,e,i+4.35,t+3.7)),n.add(p("O2","#2a3340","#d6b48a",1.6,.36,e,i+3.9,t+3.7)),Y(n,[[-42,6],[-42,-2],[-42,-8]],s.tankO2,.11),n}function F3(){const n=new R;n.name="hab-inverter";const e=8,t=-68,i=M(e,t);n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.6,2.4,2.8),s.habDark,e-2,i+1.4,t)),n.add(o(new h(3.2,2,2.4),s.steelDark,e+2.2,i+1.2,t));for(let a=0;a<3;a++)n.add(o(new h(.7,1.5,1.8),s.battery,e+1.2+a*.85,i+1,t));return n.add(p("SPARE","#111111","#f4e6c8",2.2,.42,e,i+3.55,t+3.7)),n.add(p("INVERTER","#111111","#d6b48a",3.2,.36,e,i+3.1,t+3.7)),Y(n,[[8,-78],[8,-74],[8,-68]],s.cable,.1),n}function k3(){const n=new R;n.name="potable-pump";const e=8,t=-162,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.4,2,2.6),s.habDark,e-2,i+1.2,t)),n.add(o(new P(.7,.7,2.2,12),s.pipe,e+2,i+1.3,t,0,0,Math.PI/2)),n.add(o(new h(1.8,1.3,1.5),s.steelDark,e+2,i+.85,t+1.8)),n.add(p("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+3.15,t+3.7)),n.add(p("H2O PUMP","#1a2830","#d6b48a",3,.36,e,i+2.7,t+3.7)),Y(n,[[18,-152],[12,-156],[8,-162]],s.pipe,.1),n}function B3(){const n=new R;n.name="rover-charge";const e=40,t=-74,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(1.4,3.2,1.4),s.steelDark,e-2.2,i+1.8,t)),n.add(o(new h(2.6,1.6,2),s.habDark,e+1.8,i+1,t)),n.add(o(new h(1.7,1.4,1.4),s.battery,e+1.8,i+1,t+.1)),n.add(o(new h(.18,.18,2.8),s.cable,e-.2,i+2.6,t)),n.add(p("SPARE","#111111","#f4e6c8",2.2,.42,e,i+3.75,t+3.7)),n.add(p("CHARGE","#111111","#d6b48a",2.6,.36,e,i+3.3,t+3.7)),Y(n,[[28,-74],[34,-74],[40,-74]],s.cable,.1),n}function H3(){const n=new R;n.name="melt-pump";const e=-70,t=-136,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.4,2,2.6),s.habDark,e-2,i+1.2,t)),n.add(o(new P(.75,.75,2.4,12),s.pipe,e+2,i+1.4,t,0,0,Math.PI/2)),n.add(o(new h(1.8,1.3,1.5),s.steelDark,e+2,i+.85,t+1.8)),n.add(p("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+3.15,t+3.7)),n.add(p("MELT","#1a2830","#d6b48a",2,.36,e,i+2.7,t+3.7)),Y(n,[[-58,-142],[-64,-140],[-70,-136]],s.pipe,.1),n}function G3(){const n=new R;n.name="workshop-grinder";const e=124,t=-90,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(4.2,1.5,2.8),s.habDark,e,i+.95,t)),n.add(o(new P(.85,.85,.35,14),s.steelDark,e+1.6,i+1.9,t,0,0,Math.PI/2)),n.add(o(new h(1.6,1.4,1.4),s.steelDark,e-2.2,i+1.8,t)),J(n,119.6,-87.4,.1,.8),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.15,t+3.7)),n.add(p("GRIND","#1a100c","#d6b48a",2.2,.36,e,i+2.7,t+3.7)),n}function V3(){const n=new R;n.name="grow-pump";const e=52,t=-140,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.4,2,2.6),s.habDark,e-2,i+1.2,t)),n.add(o(new P(.7,.7,2.2,12),s.pipe,e+2,i+1.3,t,0,0,Math.PI/2)),n.add(o(new h(1.8,1.3,1.5),s.steelDark,e+2,i+.85,t+1.8)),n.add(p("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+3.15,t+3.7)),n.add(p("GROW","#1a2830","#d6b48a",2,.36,e,i+2.7,t+3.7)),Y(n,[[52,-126],[52,-132],[52,-140]],s.pipe,.1),n}function W3(){const n=new R;n.name="comms-lna";const e=16,t=-136,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.4,2,2.6),s.habDark,e-1.8,i+1.2,t)),n.add(o(new P(.85,1.15,1.6,12),s.steel,e+2.2,i+2,t)),n.add(o(new h(1.6,1.2,1.4),s.steelDark,e+2.2,i+.8,t+1.8)),n.add(p("SPARE","#111111","#f4e6c8",2.2,.42,e,i+3.35,t+3.7)),n.add(p("LNA","#111111","#d6b48a",1.8,.36,e,i+2.9,t+3.7)),Y(n,[[16,-148],[16,-142],[16,-136]],s.cable,.1),n}function X3(){const n=new R;n.name="workshop-lathe";const e=124,t=-104,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(5.4,1.4,2.4),s.habDark,e,i+.9,t)),n.add(o(new P(.45,.45,3.2,12),s.steel,e,i+1.85,t,0,0,Math.PI/2)),n.add(o(new h(1.5,1.6,1.6),s.steelDark,e-2.4,i+1.9,t)),n.add(o(new h(1.2,1.1,1.4),s.steelDark,e+2.6,i+1.65,t)),J(n,119.8,-101.6,.12,.8),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.15,t+3.7)),n.add(p("LATHE","#1a100c","#d6b48a",2.2,.36,e,i+2.7,t+3.7)),n}function q3(){const n=new R;n.name="melt2-pump";const e=-92,t=-172,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.4,2,2.6),s.habDark,e-2,i+1.2,t)),n.add(o(new P(.75,.75,2.4,12),s.pipe,e+2,i+1.4,t,0,0,Math.PI/2)),n.add(o(new h(1.8,1.3,1.5),s.steelDark,e+2,i+.85,t+1.8)),n.add(p("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+3.15,t+3.7)),n.add(p("MELT 2","#1a2830","#d6b48a",2.4,.36,e,i+2.7,t+3.7)),Y(n,[[-78,-156],[-86,-164],[-92,-172]],s.pipe,.1),n}function Y3(){const n=new R;n.name="weather-pack";const e=36,t=-128,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.2,1.8,2.4),s.habDark,e-1.6,i+1.1,t)),n.add(o(new h(1.2,2.6,1.2),s.steelDark,e+2.2,i+1.5,t)),n.add(o(new h(.35,.9,.35),s.steel,e+2.2,i+3.1,t)),n.add(o(new h(1.6,1.1,1.4),s.steel,e+2.2,i+.75,t+1.8)),n.add(p("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+3.55,t+3.7)),n.add(p("WX","#1a2830","#d6b48a",1.6,.36,e,i+3.1,t+3.7)),n}function K3(){const n=new R;n.name="water-pump";const e=-58,t=-88,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.4,2,2.6),s.habDark,e-2,i+1.2,t)),n.add(o(new P(.7,.7,2.2,12),s.pipe,e+2,i+1.3,t,0,0,Math.PI/2)),n.add(o(new h(1.8,1.3,1.5),s.steelDark,e+2,i+.85,t+1.8)),n.add(p("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+3.15,t+3.7)),n.add(p("H2O","#1a2830","#d6b48a",1.8,.36,e,i+2.7,t+3.7)),Y(n,[[-46,-88],[-52,-88],[-58,-88]],s.pipe,.1),n}function J3(){const n=new R;n.name="pad1-cargo";const e=36,t=36,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),J(n,32.4,34.2,.1,1),J(n,35.2,33.8,-.15,.9),J(n,38.6,34.6,.2,1.05),J(n,33,37.6,-.1,.85),J(n,37.4,37.8,.05,.95),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+2.35,t+3.7)),n.add(p("CARGO","#1a100c","#d6b48a",2.4,.36,e,i+1.9,t+3.7)),n}function Z3(){const n=new R;n.name="dust-scrub";const e=22,t=-110,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.2,2,2.4),s.habDark,e-2,i+1.2,t)),n.add(o(new P(1.05,1.05,2.6,14),s.steelDark,e+2,i+1.5,t,0,0,Math.PI/2)),n.add(o(new h(1.6,1.2,1.4),s.steelDark,e+2,i+.8,t+1.8)),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.15,t+3.7)),n.add(p("SCRUB","#1a100c","#d6b48a",2.2,.36,e,i+2.7,t+3.7)),Y(n,[[22,-98],[22,-104],[22,-110]],s.pipe,.1),n}function $3(){const n=new R;n.name="farm1-string";const e=108,t=-44,i=M(e,t);n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.4,2,2.6),s.habDark,e-2,i+1.2,t)),n.add(o(new h(2.8,1.6,2.2),s.steelDark,e+2.2,i+1,t));for(let a=0;a<3;a++)n.add(o(new h(.6,1.3,1.6),s.battery,e+1.3+a*.75,i+.85,t));return n.add(p("SPARE","#111111","#f4e6c8",2.2,.42,e,i+3.15,t+3.7)),n.add(p("STRING","#111111","#d6b48a",2.6,.36,e,i+2.7,t+3.7)),Y(n,[[96,-44],[102,-44],[108,-44]],s.cable,.1),n}function j3(){const n=new R;n.name="mine2-lights";for(const[a,r]of[[-78,-172],[-78,-156],[-64,-184]]){const c=M(a,r);n.add(o(new P(.12,.16,3.6,8),s.steelDark,a,c+1.9,r)),n.add(o(new h(.42,.42,.42),s.glowPad,a,c+3.85,r))}const e=-64,t=-172,i=M(e,t);return n.add(o(new h(5.2,.16,4),s.concrete,e,i+.08,t)),n.add(o(new h(2.4,1.5,1.6),s.habDark,e,i+.95,t)),n.add(p("MINE 2","#1a100c","#f0c089",2.4,.42,e,i+2.25,t+2.1)),n.add(p("LIGHTS","#1a100c","#d6b48a",2.2,.36,e,i+1.78,t+2.1)),n}function Q3(){const n=new R;n.name="shop-crate";const e=124,t=-118,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),J(n,120.4,-119.8,.1,1),J(n,123.2,-120.2,-.15,.9),J(n,126.6,-119.4,.2,1.05),J(n,121,-116.4,-.1,.85),J(n,125.4,-116.2,.05,.95),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+2.35,t+3.7)),n.add(p("PARTS","#1a100c","#d6b48a",2.4,.36,e,i+1.9,t+3.7)),n}function ex(){const n=new R;n.name="field2-string";const e=136,t=-83,i=M(e,t);n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.4,2,2.6),s.habDark,e-2,i+1.2,t)),n.add(o(new h(2.8,1.6,2.2),s.steelDark,e+2.2,i+1,t));for(let a=0;a<3;a++)n.add(o(new h(.6,1.3,1.6),s.battery,e+1.3+a*.75,i+.85,t));return n.add(p("SPARE","#111111","#f4e6c8",2.2,.42,e,i+3.15,t+3.7)),n.add(p("STRING","#111111","#d6b48a",2.6,.36,e,i+2.7,t+3.7)),Y(n,[[124,-83],[130,-83],[136,-83]],s.cable,.1),n}function tx(){const n=new R;n.name="field3-string";const e=160,t=-40,i=M(e,t);n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.4,2,2.6),s.habDark,e-2,i+1.2,t)),n.add(o(new h(2.8,1.6,2.2),s.steelDark,e+2.2,i+1,t));for(let a=0;a<3;a++)n.add(o(new h(.6,1.3,1.6),s.battery,e+1.3+a*.75,i+.85,t));return n.add(p("SPARE","#111111","#f4e6c8",2.2,.42,e,i+3.15,t+3.7)),n.add(p("STRING","#111111","#d6b48a",2.6,.36,e,i+2.7,t+3.7)),Y(n,[[148,-40],[154,-40],[160,-40]],s.cable,.1),n}function nx(){const n=new R;n.name="field4-string";const e=184,t=-62,i=M(e,t);n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.4,2,2.6),s.habDark,e-2,i+1.2,t)),n.add(o(new h(2.8,1.6,2.2),s.steelDark,e+2.2,i+1,t));for(let a=0;a<3;a++)n.add(o(new h(.6,1.3,1.6),s.battery,e+1.3+a*.75,i+.85,t));return n.add(p("SPARE","#111111","#f4e6c8",2.2,.42,e,i+3.15,t+3.7)),n.add(p("STRING","#111111","#d6b48a",2.6,.36,e,i+2.7,t+3.7)),Y(n,[[172,-62],[178,-62],[184,-62]],s.cable,.1),n}function ix(){const n=new R;n.name="pad1-unloader";const e=36,t=48,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(1.2,8.4,1.2),s.steelDark,e-2.4,i+4.3,t)),n.add(o(new h(1.2,8.4,1.2),s.steelDark,e+2.4,i+4.3,t)),n.add(o(new h(7.2,.35,1.2),s.steel,e,i+8.6,t)),n.add(o(new h(.16,2.8,.16),s.steelDark,e,i+7,t+1.6)),n.add(o(new h(1.4,1.2,1.4),s.crate,e,i+5.4,t+1.6)),J(n,32.6,46.2,.15,.9),J(n,39.2,49.4,-.1,.85),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.55,t+3.7)),n.add(p("UNLOAD","#1a100c","#d6b48a",2.6,.36,e,i+4.1,t+3.7)),n}function ax(){const n=new R;n.name="waste-spare";const e=-36,t=-110,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(4.4,2.8,3.6),s.habDark,e-1.4,i+1.6,t)),n.add(o(new P(1.15,1.15,3.6,14),s.pipe,e+2.8,i+2,t)),n.add(o(new P(.85,.85,2.8,12),s.steelDark,e+2.8,i+1.6,t+2)),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.25,t+3.7)),n.add(p("WASTE","#1a100c","#d6b48a",2.4,.36,e,i+3.7,t+3.7)),Y(n,[[-22,-110],[-29,-110],[-36,-110]],s.pipe,.1),n}function sx(){const n=new R;n.name="pad1-bricks";const e=22,t=36,i=M(e,t);n.add(o(new h(7.6,.16,5.4),s.concrete,e,i+.08,t));for(let a=0;a<3;a++)for(let r=0;r<4;r++){const c=e-2.4+r*1.55,l=t-1.2+a*1.2;n.add(o(new h(1.35,.42,.95),s.rust,c,i+.38,l)),n.add(o(new h(1.35,.42,.95),s.habDark,c,i+.82,l))}return n.add(p("PAD 1","#1a100c","#f0c089",2.2,.42,e,i+1.85,t+2.8)),n.add(p("BRICK","#1a100c","#d6b48a",2.2,.36,e,i+1.4,t+2.8)),n}function rx(){const n=new R;n.name="o2-buffer-3";const e=-8,t=-76,i=M(e,t);n.add(o(new h(10.2,.2,7.4),s.concrete,e,i+.1,t));for(let a=0;a<4;a++){const r=e-3.3+a*2.2;n.add(o(new P(.85,.85,3.6,12),s.tankO2,r,i+2,t))}return n.add(p("SPARE","#2a3340","#e8eef4",2.2,.42,e,i+4.15,t+3.7)),n.add(p("O2","#2a3340","#d6b48a",1.8,.36,e,i+3.6,t+3.7)),Y(n,[[-8,-88],[-8,-82],[-8,-76]],s.tankO2,.1),n}function ox(){const n=new R;n.name="food-5";const e=70,t=-140,i=M(e,t);n.add(o(new h(11.6,.22,7.2),s.concrete,e,i+.1,t));const a=new ot(new P(3.3,3.3,11.2,16,1,!1,0,Math.PI),s.glass);a.rotation.z=Math.PI/2,a.position.set(e,i+3.3,t),a.castShadow=!1,n.add(a),n.add(o(new h(10.8,.1,6.6),s.solarFrame,e,i+3.35,t));for(let r=-2;r<=2;r++){n.add(o(new h(1.7,.22,5.2),s.soil,e+r*1.95,i+.32,t));for(let c=-2;c<=2;c++){const l=c%2===0?s.plant:s.plantLeaf;n.add(o(new h(1.15,.5,.66),l,e+r*1.95,i+.7,t+c*.9))}}return n.add(p("SPARE","#1a100c","#f0c089",2.4,.42,e,i+4.75,t+.15)),n.add(p("GROW","#1a100c","#d6b48a",2.2,.36,e,i+4.15,t+.15)),Y(n,[[70,-126],[70,-133],[70,-140]],s.pipe,.1),n}function cx(){const n=new R;n.name="pad1-roller";const e=8,t=36,i=M(e,t);return n.add(o(new h(8.8,.16,5.2),s.concrete,e,i+.08,t)),n.add(o(new h(3.6,1.6,2.2),s.habDark,e-.6,i+1.15,t)),n.add(o(new P(1.15,1.15,2.6,14),s.steelDark,e+2.6,i+1.2,t,0,0,Math.PI/2)),n.add(o(new P(.55,.55,2.2,10),s.steel,e-2.6,i+.7,t,0,0,Math.PI/2)),n.add(p("PAD 1","#1a100c","#f0c089",2.2,.42,e,i+2.55,t+2.7)),n.add(p("ROLLER","#1a100c","#d6b48a",2.4,.36,e,i+2.1,t+2.7)),n}function dx(){const n=new R;n.name="comms-hpa";const e=28,t=-148,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.4,2.2,2.6),s.habDark,e-2,i+1.3,t)),n.add(o(new h(2.8,1.6,2.2),s.steelDark,e+2.2,i+1,t)),n.add(o(new P(.45,.45,2.4,10),s.steel,e+2.2,i+2.4,t)),n.add(p("SPARE","#111111","#f4e6c8",2.2,.42,e,i+3.35,t+3.7)),n.add(p("HPA","#111111","#d6b48a",1.8,.36,e,i+2.9,t+3.7)),Y(n,[[16,-148],[22,-148],[28,-148]],s.cable,.1),n}function lx(){const n=new R;n.name="hab-n2-2";const e=-58,t=-76,i=M(e,t);n.add(o(new h(10.2,.2,7.4),s.concrete,e,i+.1,t));for(let a=0;a<4;a++){const r=e-3.3+a*2.2;n.add(o(new P(.85,.85,3.6,12),s.steel,r,i+2,t))}return n.add(p("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+4.15,t+3.7)),n.add(p("N2","#1a2830","#d6b48a",1.8,.36,e,i+3.6,t+3.7)),Y(n,[[-58,-88],[-58,-82],[-58,-76]],s.pipe,.1),n}function hx(){const n=new R;n.name="ice-crush-screen";const e=-114,t=-148,i=M(e,t);n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(6.4,.16,3.2),s.steelDark,e,i+2.4,t,.35,0,0)),n.add(o(new h(2.8,1.8,2.2),s.habDark,e-2.4,i+1.1,t)),n.add(o(new h(.22,2.2,3.4),s.steel,e+2.6,i+1.3,t));const a=o(new ut(1.2,0),s.ice,e+1.6,i+.7,t+1.8);return a.scale.set(1.1,.5,1),n.add(a),n.add(p("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+3.35,t+3.7)),n.add(p("SCREEN","#1a2830","#d6b48a",2.6,.36,e,i+2.9,t+3.7)),n}function ux(){const n=new R;n.name="pad-night";const e=68,t=18,i=M(e,t);n.add(o(new h(15.2,.22,7.2),s.concrete,e,i+.1,t));for(let a=0;a<6;a++){const r=e-5.5+a*2.2;n.add(o(new h(1.85,2.15,4.4),s.battery,r,i+1.25,t)),n.add(o(new h(1.7,.08,4.2),s.steel,r,i+2.38,t))}return n.add(p("SPARE","#111111","#f4e6c8",2.4,.42,e,i+3.15,t+3.75)),n.add(p("PAD STORE","#111111","#d6b48a",3.4,.36,e,i+2.7,t+3.75)),n}function fx(){const n=new R;n.name="isru-electro-spare";const e=-122,t=-4,i=M(e,t);n.add(o(new h(11.6,.2,7.4),s.concrete,e,i+.1,t)),n.add(o(new h(3.4,3.6,2.6),s.habDark,e-2.6,i+2,t)),n.add(o(new h(3.4,3.6,2.6),s.steelDark,e+1.2,i+2,t));for(let a=0;a<4;a++)n.add(o(new h(.18,3.1,2.2),s.steel,e-3.8+a*.7,i+2,t));return n.add(o(new P(1.15,1.15,5.2,14),s.steel,e+4.2,i+2.8,t+1.4)),n.add(o(new P(.95,.95,4.4,14),s.tankO2,e+4.2,i+2.4,t-1.6)),n.add(p("SPARE","#1a100c","#f0c089",2.4,.42,e,i+4.55,t+3.7)),n.add(p("ELECTRO","#1a100c","#d6b48a",3.2,.36,e,i+4.1,t+3.7)),Y(n,[[-122,8],[-122,2],[-122,-4]],s.pipe,.1),n}function px(){const n=new R;n.name="sabatier-knockout-spare";const e=-84,t=-4,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.8,2.4,2.8),s.habDark,e-2,i+1.4,t)),n.add(o(new P(1.35,1.35,4.6,14),s.pipe,e+2.4,i+2.5,t)),n.add(o(new Ce(1.65,.1,6,14),s.steel,e+2.4,i+4.1,t,Math.PI/2,0,0)),n.add(o(new P(.7,.7,2.4,12),s.steelDark,e+2.4,i+1.4,t+2.1)),n.add(p("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+4.15,t+3.7)),n.add(p("KNOCKOUT","#1a2830","#d6b48a",3.4,.36,e,i+3.7,t+3.7)),Y(n,[[-84,8],[-84,2],[-84,-4]],s.pipe,.1),n}function mx(){const n=new R;n.name="ch4-chiller-spare";const e=-80,t=44,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(4.2,2.6,3.2),s.habDark,e-1.6,i+1.5,t)),n.add(o(new P(1.25,1.25,5,14),s.tankCh4,e+2.6,i+2.7,t)),n.add(o(new Ce(1.55,.1,6,14),s.steel,e+2.6,i+4.4,t,Math.PI/2,0,0)),n.add(p("SPARE","#6a2208","#f4e6c8",2.2,.42,e,i+4.15,t+3.7)),n.add(p("CH4 CHILL","#1a100c","#d6b48a",3.2,.36,e,i+3.7,t+3.7)),Y(n,[[-80,32],[-80,38],[-80,44]],s.tankCh4,.1),n}function xx(){const n=new R;n.name="o2-chiller-spare";const e=-80,t=56,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(4.2,2.6,3.2),s.habDark,e-1.6,i+1.5,t)),n.add(o(new P(1.25,1.25,5,14),s.tankO2,e+2.6,i+2.7,t)),n.add(o(new Ce(1.55,.1,6,14),s.steel,e+2.6,i+4.4,t,Math.PI/2,0,0)),n.add(p("SPARE","#2a3340","#e8eef4",2.2,.42,e,i+4.15,t+3.7)),n.add(p("O2 CHILL","#1a100c","#d6b48a",3,.36,e,i+3.7,t+3.7)),Y(n,[[-80,44],[-80,50],[-80,56]],s.steel,.1),n}function gx(){const n=new R;n.name="ice-mine-1-berm-spare";const e=o(new Ce(8.4,1.6,8,24,Math.PI*1.15),s.rust,-28,M(-28,-180)-.15,-180,Math.PI/2,.4,0);e.scale.set(1,.44,1),n.add(e);for(const[r,c]of[[-22,-174],[-20,-182],[-26,-188]]){const l=o(new ut(2.1,0),s.rust,r,M(r,c)+.85,c);l.scale.set(1.15,.55,1),n.add(l)}const[t,i,a]=Pt(-28,-180,2.2);return n.add(p("SPARE","#1a2830","#d6e6ef",2.2,.42,t,i+1.1,a)),n.add(p("MINE BERM","#1a2830","#d6b48a",3.4,.55,t,i+.5,a)),n}function wx(){const n=new R;n.name="ice-mine-2-berm-spare";const e=o(new Ce(8.4,1.6,8,24,Math.PI*1.15),s.rust,-52,M(-52,-196)-.15,-196,Math.PI/2,.55,0);e.scale.set(1,.44,1),n.add(e);for(const[r,c]of[[-46,-190],[-44,-198],[-50,-204]]){const l=o(new ut(2.1,0),s.rust,r,M(r,c)+.85,c);l.scale.set(1.15,.55,1),n.add(l)}const[t,i,a]=Pt(-52,-196,2.2);return n.add(p("SPARE","#1a2830","#d6e6ef",2.2,.42,t,i+1.1,a)),n.add(p("MINE BERM","#1a2830","#d6b48a",3.4,.55,t,i+.5,a)),n}function _x(){const n=new R;n.name="shop-drill";const e=138,t=-118,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.2,1.2,2.4),s.habDark,e,i+.8,t)),n.add(o(new h(1.1,3.4,1.1),s.steelDark,e-1.4,i+2.3,t)),n.add(o(new h(2.4,.22,1.8),s.steel,e+.3,i+1.55,t)),n.add(o(new P(.12,.12,1.1,10),s.steel,e+.3,i+2.2,t)),J(n,133.8,-115.6,.1,.8),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.15,t+3.7)),n.add(p("DRILL","#1a100c","#d6b48a",2.2,.36,e,i+3.7,t+3.7)),n}function bx(){const n=new R;n.name="hab-street-battery";const e=8,t=-56,i=M(e,t);n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t));for(let a=0;a<4;a++)n.add(o(new h(1.7,1.95,3.8),s.battery,e-3+a*2,i+1.15,t)),n.add(o(new h(1.55,.08,3.6),s.steel,e-3+a*2,i+2.18,t));return n.add(p("SPARE","#111111","#f4e6c8",2.2,.42,e,i+3.15,t+3.7)),n.add(p("HAB BATT","#111111","#d6b48a",3,.36,e,i+2.7,t+3.7)),Y(n,[[8,-68],[8,-62],[8,-56]],s.cable,.1),n}function vx(){const n=new R;n.name="co2-intake-spare";const e=-68,t=-10,i=M(e,t);return n.add(o(new h(11.6,.2,7.4),s.concrete,e,i+.1,t)),n.add(o(new P(.55,.55,6.8,10),s.steel,e-2.4,i+3.6,t)),n.add(o(new P(2.1,.65,2.4,14),s.steelDark,e-2.4,i+7.8,t)),n.add(o(new Ce(1.85,.1,6,16),s.steel,e-2.4,i+9.1,t,Math.PI/2,0,0)),n.add(o(new h(3.2,2.2,2.4),s.habDark,e+2.2,i+1.3,t)),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e-2.4,i+4.8,t+1.4)),n.add(p("CO2 INTAKE","#1a100c","#d6b48a",3.4,.36,e+2.2,i+2.7,t+1.35)),Y(n,[[-68,2],[-68,-4],[-68,-10]],s.pipe,.12),n}function Mx(){const n=new R;n.name="isru-radiators-spare";const e=-54,t=24,i=M(e,t);n.add(o(new h(16.4,.18,6.2),s.concrete,e,i+.08,t));for(let a=0;a<5;a++){const r=e-6+a*3;n.add(o(new h(.16,3.6,.16),s.steelDark,r,i+1.9,t-1.8)),n.add(o(new h(.16,3.6,.16),s.steelDark,r,i+1.9,t+1.8)),n.add(o(new h(2.4,3.2,.08),s.solar,r,i+2.4,t,-.15,0,0)),n.add(o(new h(2.5,3.3,.04),s.steel,r,i+2.4,t+.06,-.15,0,0))}return n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.55,t+3.2)),n.add(p("REJECT","#1a100c","#d6b48a",2.8,.36,e,i+4,t+3.2)),Y(n,[[-68,12],[-62,18],[-54,24]],s.pipe,.1),n}function yx(){const n=new R;n.name="isru-process-water-spare";const e=-58,t=-48,i=M(e,t);return n.add(o(new h(11.2,.2,7.4),s.concrete,e,i+.1,t)),n.add(o(new P(1.7,1.7,8.4,16),s.pipe,e-2.2,i+2,t,0,0,Math.PI/2)),n.add(o(new P(1.7,1.7,8.4,16),s.pipe,e+2,i+2,t,0,0,Math.PI/2)),n.add(o(new h(2.4,1.6,1.8),s.habDark,e,i+1,t+2.4)),n.add(p("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+4.55,t+3.8)),n.add(p("PROCESS H2O","#1a2830","#d6b48a",3.6,.36,e,i+4,t+3.8)),Y(n,[[-58,-36],[-58,-42],[-58,-48]],s.pipe,.11),n}function Sx(){const n=new R;n.name="h2-recycle-spare";const e=-38,t=40,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new P(1.55,1.55,6.4,16),s.steel,e-1.8,i+3.4,t)),n.add(o(new P(1.55,1.55,6.4,16),s.steel,e+1.8,i+3.4,t)),n.add(o(new h(2.2,1.4,1.6),s.habDark,e,i+.9,t+2.2)),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+5.15,t+3.7)),n.add(p("H2 RECYCLE","#1a100c","#d6b48a",3.4,.36,e,i+4.55,t+3.7)),Y(n,[[-38,28],[-38,34],[-38,40]],s.steel,.11),n}function Ex(){const n=new R;n.name="shop-bandsaw";const e=138,t=-132,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.6,1.4,2.2),s.habDark,e,i+.9,t)),n.add(o(new h(.22,2.8,1.6),s.steelDark,e-1.1,i+2.5,t)),n.add(o(new h(.22,2.8,1.6),s.steelDark,e+1.1,i+2.5,t)),n.add(o(new h(2.4,.12,.12),s.steel,e,i+3.7,t)),J(n,133.8,-129.6,.1,.8),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.15,t+3.7)),n.add(p("BANDSAW","#1a100c","#d6b48a",2.8,.36,e,i+3.7,t+3.7)),n}function Tx(){const n=new R;n.name="hab-eva-locker-spare";const e=52,t=-74,i=M(e,t);return n.add(o(new h(7.2,.16,5.4),s.concrete,e,i+.08,t)),n.add(o(new h(5.8,.16,2.4),s.steelDark,e,i+.18,t)),n.add(o(new h(.16,2.8,.16),s.steel,e-2.4,i+1.6,t-.7)),n.add(o(new h(.16,2.8,.16),s.steel,e+2.4,i+1.6,t-.7)),n.add(o(new h(5,.12,.12),s.steel,e,i+3,t-.7)),n.add(It(e-1.5,t,.2)),n.add(It(e,t+.15,-.1)),n.add(It(e+1.5,t,.15)),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.45,t+2.4)),n.add(p("HAB EVA","#1a100c","#d6b48a",2.8,.36,e,i+2.95,t+2.4)),n}function Ax(){const n=new R;n.name="hab-dust-lock-spare";const e=28,t=-86,i=M(e,t);return n.add(o(new h(8.4,.2,6.4),s.concrete,e,i+.1,t)),n.add(o(new h(6.2,3.4,4.4),s.habDark,e,i+1.9,t)),n.add(o(new h(6.4,.16,4.6),s.steel,e,i+3.65,t)),n.add(o(new h(1.8,2.4,.22),s.steelDark,e,i+1.5,t+2.3)),n.add(o(new h(1.8,2.4,.22),s.steelDark,e,i+1.5,t-2.3)),n.add(It(e+2.6,t+.2,.1)),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.35,t+2.4)),n.add(p("DUST LOCK","#1a100c","#d6b48a",3.4,.36,e,i+3.85,t+2.4)),n}function Rx(){const n=new R;n.name="shop-shear";const e=138,t=-146,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(5.2,1.5,2.4),s.habDark,e,i+.95,t)),n.add(o(new h(4.6,.18,.7),s.steel,e,i+1.85,t+.4)),n.add(o(new h(1.4,1.8,1.2),s.steelDark,e-2.4,i+1.9,t)),J(n,133.8,-143.6,.1,.8),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.35,t+3.7)),n.add(p("SHEAR","#1a100c","#d6b48a",2.4,.36,e,i+2.9,t+3.7)),n}function Cx(){const n=new R;n.name="hab-n2-3";const e=-70,t=-76,i=M(e,t);n.add(o(new h(10.2,.2,7.4),s.concrete,e,i+.1,t));for(let a=0;a<4;a++){const r=e-3.3+a*2.2;n.add(o(new P(.85,.85,3.6,12),s.steel,r,i+2,t))}return n.add(p("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+4.15,t+3.7)),n.add(p("N2","#1a2830","#d6b48a",1.8,.36,e,i+3.6,t+3.7)),Y(n,[[-58,-76],[-64,-76],[-70,-76]],s.pipe,.1),n}function Px(){const n=new R;n.name="hab-water-spare";const e=-46,t=-100,i=M(e,t);return n.add(o(new h(10.2,.2,7.4),s.concrete,e,i+.1,t)),n.add(o(new P(1.55,1.55,7.6,16),s.pipe,e-1.8,i+1.9,t,0,0,Math.PI/2)),n.add(o(new P(1.55,1.55,7.6,16),s.pipe,e+1.8,i+1.9,t,0,0,Math.PI/2)),n.add(o(new h(2.2,1.4,1.6),s.habDark,e,i+.9,t+2.2)),n.add(p("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+4.35,t+3.8)),n.add(p("HAB H2O","#1a2830","#d6b48a",2.8,.36,e,i+3.8,t+3.8)),Y(n,[[-46,-88],[-46,-94],[-46,-100]],s.pipe,.1),n}function Dx(){const n=new R;n.name="shop-press";const e=138,t=-160,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.6,1.2,2.6),s.habDark,e,i+.8,t)),n.add(o(new h(1.1,3.2,1.1),s.steelDark,e-1.5,i+2.2,t)),n.add(o(new h(1.1,3.2,1.1),s.steelDark,e+1.5,i+2.2,t)),n.add(o(new h(4.2,.28,2),s.steel,e,i+3.75,t)),n.add(o(new P(.35,.35,1.2,12),s.steel,e,i+2.4,t)),J(n,133.8,-157.6,.1,.8),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.35,t+3.7)),n.add(p("PRESS","#1a100c","#d6b48a",2.4,.36,e,i+3.9,t+3.7)),n}function zx(){const n=new R;n.name="hab-coupler-spare";const e=-8,t=-98,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new P(1.35,1.35,6.4,16),s.habDark,e,i+1.7,t,0,0,Math.PI/2)),n.add(o(new Ce(1.4,.16,8,16),s.steel,e-3.2,i+1.7,t,0,0,Math.PI/2)),n.add(o(new Ce(1.4,.16,8,16),s.steel,e+3.2,i+1.7,t,0,0,Math.PI/2)),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.55,t+3.7)),n.add(p("TUBE","#1a100c","#d6b48a",2,.36,e,i+3.1,t+3.7)),n}function Ix(){const n=new R;n.name="ice-weigh-spare";const e=-90,t=-124,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(6.4,.28,3.6),s.steel,e,i+.28,t)),n.add(o(new h(2.2,2.4,1.8),s.habDark,e+3.2,i+1.4,t+2)),n.add(o(new h(.18,3.2,.18),s.steelDark,e-3.6,i+1.8,t-2.4)),n.add(o(new h(.18,3.2,.18),s.steelDark,e+3.6,i+1.8,t-2.4)),n.add(o(new h(7.4,.12,.12),s.steel,e,i+3.45,t-2.4)),n.add(p("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+3.15,t+3.7)),n.add(p("WEIGH","#1a2830","#d6b48a",2.6,.36,e,i+2.6,t+3.7)),n}function Lx(){const n=new R;n.name="grow-nutrient-spare";const e=70,t=-152,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(4.4,2.8,3.6),s.habDark,e-1.4,i+1.6,t)),n.add(o(new P(1.15,1.15,3.6,14),s.pipe,e+2.8,i+2,t)),n.add(o(new P(.85,.85,2.8,12),s.steelDark,e+2.8,i+1.6,t+2)),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.25,t+3.7)),n.add(p("NUTRIENT","#1a100c","#d6b48a",3.4,.36,e,i+3.7,t+3.7)),Y(n,[[70,-140],[70,-146],[70,-152]],s.pipe,.1),n}function Ux(){const n=new R;n.name="shop-welder-2";const e=138,t=-174,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.4,2.2,2.6),s.habDark,e-2.2,i+1.3,t)),n.add(o(new h(.35,2.8,.35),s.steel,e+2,i+1.6,t)),n.add(o(new h(2.2,.28,.28),s.steel,e+3,i+2.9,t)),n.add(o(new h(1.8,1.2,1.6),s.steelDark,e+2.4,i+.8,t+1.6)),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.15,t+3.7)),n.add(p("WELDER","#1a100c","#d6b48a",2.6,.36,e,i+2.7,t+3.7)),n}function Nx(){const n=new R;n.name="grow-water-spare";const e=52,t=-154,i=M(e,t);return n.add(o(new h(11.2,.2,7.4),s.concrete,e,i+.1,t)),n.add(o(new P(1.7,1.7,8.4,16),s.pipe,e-2.2,i+2,t,0,0,Math.PI/2)),n.add(o(new P(1.7,1.7,8.4,16),s.pipe,e+2,i+2,t,0,0,Math.PI/2)),n.add(o(new h(2.4,1.6,1.8),s.habDark,e,i+1,t+2.4)),n.add(p("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+4.55,t+3.8)),n.add(p("GROW H2O","#1a2830","#d6b48a",3.2,.36,e,i+4,t+3.8)),Y(n,[[52,-140],[52,-147],[52,-154]],s.pipe,.11),n}function Ox(){const n=new R;n.name="hab-amine-spare";const e=8,t=-122,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.2,2.2,2.6),s.habDark,e-2.4,i+1.3,t)),n.add(o(new P(.9,.9,3.6,14),s.steelDark,e+1.4,i+2,t)),n.add(o(new P(.9,.9,3.6,14),s.steelDark,e+3.4,i+2,t)),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.15,t+3.7)),n.add(p("AMINE","#1a100c","#d6b48a",2.4,.36,e,i+3.7,t+3.7)),Y(n,[[8,-110],[8,-116],[8,-122]],s.pipe,.1),n}function Fx(){const n=new R;n.name="hab-regulator-spare";const e=22,t=-122,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.4,2.2,2.6),s.habDark,e-2.2,i+1.3,t)),n.add(o(new P(.95,.95,2.8,14),s.steelDark,e+2,i+1.6,t)),n.add(o(new P(.55,.55,1.6,12),s.steel,e+3.4,i+1,t+1.4)),n.add(o(new h(1.4,1.1,1.2),s.steel,e+2,i+.75,t+2)),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.35,t+3.7)),n.add(p("REG","#1a100c","#d6b48a",1.8,.36,e,i+2.9,t+3.7)),Y(n,[[22,-110],[22,-116],[22,-122]],s.pipe,.1),n}function kx(){const n=new R;n.name="shop-mill-2";const e=138,t=-188,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(4.6,1.6,3.2),s.habDark,e,i+1,t)),n.add(o(new h(1.4,2.4,1.4),s.steelDark,e+1.2,i+2.4,t)),n.add(o(new h(2.6,.35,1.8),s.steel,e+1.2,i+3.7,t)),n.add(o(new P(.18,.18,1.2,10),s.steel,e+1.2,i+2.9,t+.9)),n.add(o(new h(2.2,1.1,1.6),s.steelDark,e-2.4,i+.75,t+1.8)),J(n,133.8,-185.6,.12,.85),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.25,t+3.7)),n.add(p("MILL","#1a100c","#d6b48a",1.8,.36,e,i+3.8,t+3.7)),n}function Bx(){const n=new R;n.name="grow-co2-spare";const e=38,t=-146,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3,1.8,2.4),s.habDark,e-2.6,i+1.1,t)),n.add(o(new P(1.15,1.15,3.6,14),s.steelDark,e+1.4,i+2,t)),n.add(o(new P(1.15,1.15,3.6,14),s.steelDark,e+3.6,i+2,t)),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.15,t+3.7)),n.add(p("CO2","#1a100c","#d6b48a",1.8,.36,e,i+3.7,t+3.7)),Y(n,[[38,-132],[38,-139],[38,-146]],s.pipe,.1),n}function Hx(){const n=new R;n.name="workshop-lathe-2";const e=138,t=-202,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(5.4,1.4,2.4),s.habDark,e,i+.9,t)),n.add(o(new P(.45,.45,3.2,12),s.steel,e,i+1.85,t,0,0,Math.PI/2)),n.add(o(new h(1.5,1.6,1.6),s.steelDark,e-2.4,i+1.9,t)),n.add(o(new h(1.2,1.1,1.4),s.steelDark,e+2.6,i+1.65,t)),J(n,133.8,-199.6,.12,.8),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.15,t+3.7)),n.add(p("LATHE","#1a100c","#d6b48a",2.2,.36,e,i+2.7,t+3.7)),n}function Gx(){const n=new R;n.name="grow-pump-2";const e=52,t=-168,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.4,2,2.6),s.habDark,e-2,i+1.2,t)),n.add(o(new P(.7,.7,2.2,12),s.pipe,e+2,i+1.3,t,0,0,Math.PI/2)),n.add(o(new h(1.8,1.3,1.5),s.steelDark,e+2,i+.85,t+1.8)),n.add(p("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+3.15,t+3.7)),n.add(p("GROW","#1a2830","#d6b48a",2,.36,e,i+2.7,t+3.7)),Y(n,[[52,-154],[52,-161],[52,-168]],s.pipe,.1),n}function Vx(){const n=new R;n.name="workshop-vise-2";const e=138,t=-216,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(5.2,1.15,2.6),s.habDark,e,i+.75,t)),n.add(o(new h(1.4,.85,1.1),s.steelDark,e+1.4,i+1.75,t)),n.add(o(new h(.35,.7,.9),s.steel,e+2.15,i+1.7,t)),n.add(o(new h(.35,.7,.9),s.steel,e+.65,i+1.7,t)),n.add(o(new h(2,1.3,1.5),s.steelDark,e-2.4,i+.85,t+1.8)),J(n,133.8,-213.4,.1,.8),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+2.55,t+3.7)),n.add(p("VISE","#1a100c","#d6b48a",1.8,.36,e,i+2.1,t+3.7)),n}function Wx(){const n=new R;n.name="ice-melt-4";const e=-34,t=-146,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.6,2.8,3.2),s.habDark,e-1.8,i+1.6,t)),n.add(o(new P(1.45,1.45,4.2,14),s.pipe,e+2.2,i+2.3,t)),n.add(o(new P(.55,.85,1.6,10),s.steelDark,e+2.2,i+4.9,t)),n.add(p("SPARE","#1a2830","#d6e6ef",2.2,.5,e,i+4.4,t+3.7)),n.add(p("MELT","#1a2830","#d6b48a",2,.42,e,i+3.85,t+3.7)),Y(n,[[-46,-132],[-40,-139],[-34,-146]],s.pipe,.1),n}function Xx(){const n=new R;n.name="workshop-grinder-2";const e=138,t=-230,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(4.2,1.5,2.8),s.habDark,e,i+.95,t)),n.add(o(new P(.85,.85,.35,14),s.steelDark,e+1.6,i+1.9,t,0,0,Math.PI/2)),n.add(o(new h(1.6,1.4,1.4),s.steelDark,e-2.2,i+1.8,t)),J(n,133.6,-227.4,.1,.8),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.15,t+3.7)),n.add(p("GRIND","#1a100c","#d6b48a",2.2,.36,e,i+2.7,t+3.7)),n}function qx(){const n=new R;n.name="hab-blower-2";const e=36,t=-110,i=M(e,t);return n.add(o(new h(7.2,.18,5.2),s.concrete,e,i+.09,t)),n.add(o(new h(2.6,1.7,2),s.habDark,e-1.4,i+1.05,t)),n.add(o(new P(1.05,1.05,2.4,14),s.steelDark,e+1.8,i+1.35,t,0,0,Math.PI/2)),n.add(o(new P(.28,.28,2.8,8),s.pipe,e+1.8,i+2.55,t)),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+2.7,t+2.6)),n.add(p("BLOWER","#1a100c","#d6b48a",2.6,.36,e,i+2.25,t+2.6)),n}function Yx(){const n=new R;n.name="earth-battery-2";const e=40,t=-162,i=M(e,t);n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t));for(let a=0;a<4;a++)n.add(o(new h(1.7,1.9,3.6),s.battery,e-3.2+a*2.1,i+1.15,t)),n.add(o(new h(1.55,.08,3.4),s.steel,e-3.2+a*2.1,i+2.15,t));return n.add(p("SPARE","#111111","#f4e6c8",2.2,.42,e,i+3.15,t+3.7)),n.add(p("LINK","#111111","#d6b48a",1.8,.36,e,i+2.6,t+3.7)),n}function Kx(){const n=new R;n.name="workshop-hoist-2";const e=138,t=-244,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(2.8,2,2.4),s.habDark,e-2.4,i+1.2,t)),n.add(o(new h(.28,5.2,.28),s.steelDark,e+1.6,i+2.8,t)),n.add(o(new h(4.2,.22,.22),s.steel,e+3.4,i+5.3,t)),n.add(o(new h(.16,1.6,.16),s.steel,e+5.2,i+4.4,t)),n.add(o(new h(.7,.5,.5),s.steelDark,e+5.2,i+3.5,t)),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+2.85,t+3.7)),n.add(p("HOIST","#1a100c","#d6b48a",2.2,.36,e,i+2.4,t+3.7)),n}function Jx(){const n=new R;n.name="pad2-cargo-2";const e=60,t=136,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),J(n,56.4,134.2,.1,1),J(n,59.2,133.8,-.15,.9),J(n,62.6,134.6,.2,1.05),J(n,57,137.6,-.1,.85),J(n,61.4,137.8,.05,.95),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+2.35,t+3.7)),n.add(p("CARGO","#1a100c","#d6b48a",2.4,.36,e,i+1.9,t+3.7)),n}function Zx(){const n=new R;n.name="workshop-air-2";const e=138,t=-258,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.2,2.2,2.6),s.habDark,e-2.2,i+1.3,t)),n.add(o(new P(1.15,1.15,3.4,16),s.steelDark,e+2,i+1.9,t)),n.add(o(new h(1.6,1.1,1.4),s.steel,e+2,i+.75,t+2)),n.add(o(new h(.22,1.6,.22),s.steel,e+3.4,i+1,t-1.6)),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.05,t+3.7)),n.add(p("AIR","#1a100c","#d6b48a",1.8,.36,e,i+3.6,t+3.7)),n}function $x(){const n=new R;n.name="dust-scrub-2";const e=50,t=-110,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.2,2,2.4),s.habDark,e-2,i+1.2,t)),n.add(o(new P(1.05,1.05,2.6,14),s.steelDark,e+2,i+1.5,t,0,0,Math.PI/2)),n.add(o(new h(1.6,1.2,1.4),s.steelDark,e+2,i+.8,t+1.8)),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.15,t+3.7)),n.add(p("SCRUB","#1a100c","#d6b48a",2.2,.36,e,i+2.7,t+3.7)),Y(n,[[36,-110],[43,-110],[50,-110]],s.pipe,.1),n}function jx(){const n=new R;n.name="shop-crate-2";const e=138,t=-272,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),J(n,134.4,-273.8,.1,1),J(n,137.2,-274.2,-.15,.9),J(n,140.6,-273.4,.2,1.05),J(n,135,-270.4,-.1,.85),J(n,139.4,-270.2,.05,.95),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+2.35,t+3.7)),n.add(p("PARTS","#1a100c","#d6b48a",2.4,.36,e,i+1.9,t+3.7)),n}function Qx(){const n=new R;n.name="shop-drill-2";const e=138,t=-286,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.2,1.2,2.4),s.habDark,e,i+.8,t)),n.add(o(new h(1.1,3.4,1.1),s.steelDark,e-1.4,i+2.3,t)),n.add(o(new h(2.4,.22,1.8),s.steel,e+.3,i+1.55,t)),n.add(o(new P(.12,.12,1.1,10),s.steel,e+.3,i+2.2,t)),J(n,133.8,-283.6,.1,.8),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.15,t+3.7)),n.add(p("DRILL","#1a100c","#d6b48a",2.2,.36,e,i+3.7,t+3.7)),n}function eg(){const n=new R;n.name="shop-bandsaw-2";const e=138,t=-300,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.6,1.4,2.2),s.habDark,e,i+.9,t)),n.add(o(new h(.22,2.8,1.6),s.steelDark,e-1.1,i+2.5,t)),n.add(o(new h(.22,2.8,1.6),s.steelDark,e+1.1,i+2.5,t)),n.add(o(new h(2.4,.12,.12),s.steel,e,i+3.7,t)),J(n,133.8,-297.6,.1,.8),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.15,t+3.7)),n.add(p("BANDSAW","#1a100c","#d6b48a",2.8,.36,e,i+3.7,t+3.7)),n}function tg(){const n=new R;n.name="shop-shear-2";const e=138,t=-314,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(5.2,1.5,2.4),s.habDark,e,i+.95,t)),n.add(o(new h(4.6,.18,.7),s.steel,e,i+1.85,t+.4)),n.add(o(new h(1.4,1.8,1.2),s.steelDark,e-2.4,i+1.9,t)),J(n,133.8,-311.6,.1,.8),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.35,t+3.7)),n.add(p("SHEAR","#1a100c","#d6b48a",2.4,.36,e,i+2.9,t+3.7)),n}function ng(){const n=new R;n.name="shop-press-2";const e=138,t=-328,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.6,1.2,2.6),s.habDark,e,i+.8,t)),n.add(o(new h(1.1,3.2,1.1),s.steelDark,e-1.5,i+2.2,t)),n.add(o(new h(1.1,3.2,1.1),s.steelDark,e+1.5,i+2.2,t)),n.add(o(new h(4.2,.28,2),s.steel,e,i+3.75,t)),n.add(o(new P(.35,.35,1.2,12),s.steel,e,i+2.4,t)),J(n,133.8,-325.6,.1,.8),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.35,t+3.7)),n.add(p("PRESS","#1a100c","#d6b48a",2.4,.36,e,i+3.9,t+3.7)),n}function ig(){const n=new R;n.name="hab-n2-4";const e=-82,t=-76,i=M(e,t);n.add(o(new h(10.2,.2,7.4),s.concrete,e,i+.1,t));for(let a=0;a<4;a++){const r=e-3.3+a*2.2;n.add(o(new P(.85,.85,3.6,12),s.steel,r,i+2,t))}return n.add(p("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+4.15,t+3.7)),n.add(p("N2","#1a2830","#d6b48a",1.8,.36,e,i+3.6,t+3.7)),Y(n,[[-70,-76],[-76,-76],[-82,-76]],s.pipe,.1),n}function ag(){const n=new R;n.name="hab-water-3";const e=-58,t=-100,i=M(e,t);return n.add(o(new h(10.2,.2,7.4),s.concrete,e,i+.1,t)),n.add(o(new P(1.55,1.55,7.6,16),s.pipe,e-1.8,i+1.9,t,0,0,Math.PI/2)),n.add(o(new P(1.55,1.55,7.6,16),s.pipe,e+1.8,i+1.9,t,0,0,Math.PI/2)),n.add(o(new h(2.2,1.4,1.6),s.habDark,e,i+.9,t+2.2)),n.add(p("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+4.35,t+3.8)),n.add(p("HAB H2O","#1a2830","#d6b48a",2.8,.36,e,i+3.8,t+3.8)),Y(n,[[-46,-100],[-52,-100],[-58,-100]],s.pipe,.1),n}function sg(){const n=new R;n.name="spare-potable-uv-3";const e=32,t=-176,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(4.2,2.6,3.4),s.habDark,e-1.6,i+1.5,t)),n.add(o(new P(1.05,1.05,3.4,14),s.pipe,e+2.6,i+1.9,t)),n.add(o(new h(1.6,1.4,1.2),s.steel,e+2.6,i+3.9,t)),n.add(p("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+4.15,t+3.7)),n.add(p("UV","#1a2830","#d6b48a",1.6,.36,e,i+3.7,t+3.7)),Y(n,[[32,-152],[32,-164],[32,-176]],s.pipe,.1),n}function rg(){const n=new R;n.name="pad1-cargo-2";const e=50,t=36,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),J(n,46.4,34.2,.1,1),J(n,49.2,33.8,-.15,.9),J(n,52.6,34.6,.2,1.05),J(n,47,37.6,-.1,.85),J(n,51.4,37.8,.05,.95),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+2.35,t+3.7)),n.add(p("CARGO","#1a100c","#d6b48a",2.4,.36,e,i+1.9,t+3.7)),n}function og(){const n=new R;n.name="pad1-unloader-2";const e=50,t=48,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(1.2,8.4,1.2),s.steelDark,e-2.4,i+4.3,t)),n.add(o(new h(1.2,8.4,1.2),s.steelDark,e+2.4,i+4.3,t)),n.add(o(new h(7.2,.35,1.2),s.steel,e,i+8.6,t)),n.add(o(new h(.16,2.8,.16),s.steelDark,e,i+7,t+1.6)),n.add(o(new h(1.4,1.2,1.4),s.crate,e,i+5.4,t+1.6)),J(n,46.6,46.2,.15,.9),J(n,53.2,49.4,-.1,.85),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.55,t+3.7)),n.add(p("UNLOAD","#1a100c","#d6b48a",2.6,.36,e,i+4.1,t+3.7)),n}function cg(){const n=new R;n.name="pad1-bricks-2";const e=22,t=48,i=M(e,t);n.add(o(new h(7.6,.16,5.4),s.concrete,e,i+.08,t));for(let a=0;a<3;a++)for(let r=0;r<4;r++){const c=e-2.4+r*1.55,l=t-1.2+a*1.2;n.add(o(new h(1.35,.42,.95),s.rust,c,i+.38,l)),n.add(o(new h(1.35,.42,.95),s.habDark,c,i+.82,l))}return n.add(p("PAD 1","#1a100c","#f0c089",2.2,.42,e,i+1.85,t+2.8)),n.add(p("BRICK","#1a100c","#d6b48a",2.2,.36,e,i+1.4,t+2.8)),n}function dg(){const n=new R;n.name="pad1-roller-2";const e=8,t=48,i=M(e,t);return n.add(o(new h(8.8,.16,5.2),s.concrete,e,i+.08,t)),n.add(o(new h(3.6,1.6,2.2),s.habDark,e-.6,i+1.15,t)),n.add(o(new P(1.15,1.15,2.6,14),s.steelDark,e+2.6,i+1.2,t,0,0,Math.PI/2)),n.add(o(new P(.55,.55,2.2,10),s.steel,e-2.6,i+.7,t,0,0,Math.PI/2)),n.add(p("PAD 1","#1a100c","#f0c089",2.2,.42,e,i+2.55,t+2.7)),n.add(p("ROLLER","#1a100c","#d6b48a",2.4,.36,e,i+2.1,t+2.7)),n}function lg(){const n=new R;n.name="pad2-unloader-2";const e=60,t=148,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(1.2,8.4,1.2),s.steelDark,e-2.4,i+4.3,t)),n.add(o(new h(1.2,8.4,1.2),s.steelDark,e+2.4,i+4.3,t)),n.add(o(new h(7.2,.35,1.2),s.steel,e,i+8.6,t)),n.add(o(new h(.16,2.8,.16),s.steelDark,e,i+7,t+1.6)),n.add(o(new h(1.4,1.2,1.4),s.crate,e,i+5.4,t+1.6)),J(n,56.6,146.2,.15,.9),J(n,63.2,149.4,-.1,.85),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.55,t+3.7)),n.add(p("UNLOAD","#1a100c","#d6b48a",2.6,.36,e,i+4.1,t+3.7)),n}function hg(){const n=new R;n.name="pad2-bricks-2";const e=32,t=148,i=M(e,t);n.add(o(new h(7.6,.16,5.4),s.concrete,e,i+.08,t));for(let a=0;a<3;a++)for(let r=0;r<4;r++){const c=e-2.4+r*1.55,l=t-1.2+a*1.2;n.add(o(new h(1.35,.42,.95),s.rust,c,i+.38,l)),n.add(o(new h(1.35,.42,.95),s.habDark,c,i+.82,l))}return n.add(p("PAD 2","#1a100c","#f0c089",2.2,.42,e,i+1.85,t+2.8)),n.add(p("BRICK","#1a100c","#d6b48a",2.2,.36,e,i+1.4,t+2.8)),n}function ug(){const n=new R;n.name="pad2-roller-2";const e=18,t=148,i=M(e,t);return n.add(o(new h(8.8,.16,5.2),s.concrete,e,i+.08,t)),n.add(o(new h(3.6,1.6,2.2),s.habDark,e-.6,i+1.15,t)),n.add(o(new P(1.15,1.15,2.6,14),s.steelDark,e+2.6,i+1.2,t,0,0,Math.PI/2)),n.add(o(new P(.55,.55,2.2,10),s.steel,e-2.6,i+.7,t,0,0,Math.PI/2)),n.add(p("SINTER","#1a100c","#f0c089",2.6,.42,e,i+2.55,t+2.7)),n.add(p("ROLLER","#1a100c","#d6b48a",2.4,.36,e,i+2.1,t+2.7)),n}function fg(){const n=new R;n.name="eclss-3";const e=50,t=-122,i=M(e,t);return n.add(o(new h(11.2,.22,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(4.8,2.6,3.4),s.habDark,e-2.4,i+1.5,t)),n.add(p("ECLSS","#1a100c","#f0c089",3.2,.6,e-2.4,i+3.05,t+1.85)),n.add(p("SCRUB 3","#1a100c","#d6b48a",3,.45,e-2.4,i+2.45,t+1.85)),n.add(o(new P(.85,.85,3.4,12),s.steelDark,e+1.6,i+1.9,t-1.4)),n.add(o(new P(.85,.85,3.4,12),s.steelDark,e+3.4,i+1.9,t-1.4)),n.add(p("AMINE","#1a100c","#d6b48a",2.2,.4,e+2.5,i+3.8,t-1.4)),n.add(o(new P(.7,.7,2.6,12),s.tankO2,e+1.6,i+1.5,t+1.8)),n.add(o(new P(.7,.7,2.6,12),s.tankO2,e+3.4,i+1.5,t+1.8)),n.add(p("O2","#2a3340","#e8eef4",1.4,.4,e+2.5,i+3.05,t+1.8)),Y(n,[[50,-110],[50,-116],[50,-122]],s.pipe,.1),n}function pg(){const n=new R;n.name="shop-mill-3";const e=138,t=-342,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(4.6,1.6,3.2),s.habDark,e,i+1,t)),n.add(o(new h(1.4,2.4,1.4),s.steelDark,e+1.2,i+2.4,t)),n.add(o(new h(2.6,.35,1.8),s.steel,e+1.2,i+3.7,t)),n.add(o(new P(.18,.18,1.2,10),s.steel,e+1.2,i+2.9,t+.9)),n.add(o(new h(2.2,1.1,1.6),s.steelDark,e-2.4,i+.75,t+1.8)),J(n,133.8,-339.6,.12,.85),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.25,t+3.7)),n.add(p("MILL 3","#1a100c","#d6b48a",2,.36,e,i+3.8,t+3.7)),n}function mg(){const n=new R;n.name="workshop-lathe-3";const e=138,t=-356,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(5.4,1.4,2.4),s.habDark,e,i+.9,t)),n.add(o(new P(.45,.45,3.2,12),s.steel,e,i+1.85,t,0,0,Math.PI/2)),n.add(o(new h(1.5,1.6,1.6),s.steelDark,e-2.4,i+1.9,t)),n.add(o(new h(1.2,1.1,1.4),s.steelDark,e+2.6,i+1.65,t)),J(n,133.8,-353.6,.12,.8),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.15,t+3.7)),n.add(p("LATHE 3","#1a100c","#d6b48a",2.4,.36,e,i+2.7,t+3.7)),n}function xg(){const n=new R;n.name="workshop-vise-3";const e=138,t=-370,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(5.2,1.15,2.6),s.habDark,e,i+.75,t)),n.add(o(new h(1.4,.85,1.1),s.steelDark,e+1.4,i+1.75,t)),n.add(o(new h(.35,.7,.9),s.steel,e+2.15,i+1.7,t)),n.add(o(new h(.35,.7,.9),s.steel,e+.65,i+1.7,t)),n.add(o(new h(2,1.3,1.5),s.steelDark,e-2.4,i+.85,t+1.8)),J(n,133.8,-367.4,.1,.8),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+2.55,t+3.7)),n.add(p("VISE 3","#1a100c","#d6b48a",2,.36,e,i+2.1,t+3.7)),n}function gg(){const n=new R;n.name="workshop-grinder-3";const e=138,t=-384,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(4.2,1.5,2.8),s.habDark,e,i+.95,t)),n.add(o(new P(.85,.85,.35,14),s.steelDark,e+1.6,i+1.9,t,0,0,Math.PI/2)),n.add(o(new h(1.6,1.4,1.4),s.steelDark,e-2.2,i+1.8,t)),J(n,133.6,-381.4,.1,.8),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.15,t+3.7)),n.add(p("GRIND 3","#1a100c","#d6b48a",2.4,.36,e,i+2.7,t+3.7)),n}function wg(){const n=new R;n.name="workshop-hoist-3";const e=138,t=-398,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(2.8,2,2.4),s.habDark,e-2.4,i+1.2,t)),n.add(o(new h(.28,5.2,.28),s.steelDark,e+1.6,i+2.8,t)),n.add(o(new h(4.2,.22,.22),s.steel,e+3.4,i+5.3,t)),n.add(o(new h(.16,1.6,.16),s.steel,e+5.2,i+4.4,t)),n.add(o(new h(.7,.5,.5),s.steelDark,e+5.2,i+3.5,t)),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+2.85,t+3.7)),n.add(p("HOIST 3","#1a100c","#d6b48a",2.4,.36,e,i+2.4,t+3.7)),n}function _g(){const n=new R;n.name="hab-blower-3";const e=64,t=-122,i=M(e,t);return n.add(o(new h(7.2,.18,5.2),s.concrete,e,i+.09,t)),n.add(o(new h(2.6,1.7,2),s.habDark,e-1.4,i+1.05,t)),n.add(o(new P(1.05,1.05,2.4,14),s.steelDark,e+1.8,i+1.35,t,0,0,Math.PI/2)),n.add(o(new P(.28,.28,2.8,8),s.pipe,e+1.8,i+2.55,t)),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+2.7,t+2.6)),n.add(p("BLOWER 3","#1a100c","#d6b48a",2.8,.36,e,i+2.25,t+2.6)),n}function bg(){const n=new R;n.name="ice-melt-5";const e=-22,t=-146,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.6,2.8,3.2),s.habDark,e-1.8,i+1.6,t)),n.add(o(new P(1.45,1.45,4.2,14),s.pipe,e+2.2,i+2.3,t)),n.add(o(new P(.55,.85,1.6,10),s.steelDark,e+2.2,i+4.9,t)),n.add(p("SPARE","#1a2830","#d6e6ef",2.2,.5,e,i+4.4,t+3.7)),n.add(p("MELT 5","#1a2830","#d6b48a",2.2,.42,e,i+3.85,t+3.7)),Y(n,[[-34,-146],[-28,-146],[-22,-146]],s.pipe,.1),n}function vg(){const n=new R;n.name="workshop-air-3";const e=138,t=-412,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.2,2.2,2.6),s.habDark,e-2.2,i+1.3,t)),n.add(o(new P(1.15,1.15,3.4,16),s.steelDark,e+2,i+1.9,t)),n.add(o(new h(1.6,1.1,1.4),s.steel,e+2,i+.75,t+2)),n.add(o(new h(.22,1.6,.22),s.steel,e+3.4,i+1,t-1.6)),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.05,t+3.7)),n.add(p("AIR 3","#1a100c","#d6b48a",2,.36,e,i+3.6,t+3.7)),n}function Mg(){const n=new R;n.name="shop-crate-3";const e=138,t=-426,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),J(n,134.4,-427.8,.1,1),J(n,137.2,-428.2,-.15,.9),J(n,140.6,-427.4,.2,1.05),J(n,135,-424.4,-.1,.85),J(n,139.4,-424.2,.05,.95),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+2.35,t+3.7)),n.add(p("PARTS 3","#1a100c","#d6b48a",2.6,.36,e,i+1.9,t+3.7)),n}function yg(){const n=new R;n.name="shop-drill-3";const e=138,t=-440,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.2,1.2,2.4),s.habDark,e,i+.8,t)),n.add(o(new h(1.1,3.4,1.1),s.steelDark,e-1.4,i+2.3,t)),n.add(o(new h(2.4,.22,1.8),s.steel,e+.3,i+1.55,t)),n.add(o(new P(.12,.12,1.1,10),s.steel,e+.3,i+2.2,t)),J(n,133.8,-437.6,.1,.8),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.15,t+3.7)),n.add(p("DRILL 3","#1a100c","#d6b48a",2.4,.36,e,i+3.7,t+3.7)),n}function Sg(){const n=new R;n.name="shop-bandsaw-3";const e=138,t=-454,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.6,1.4,2.2),s.habDark,e,i+.9,t)),n.add(o(new h(.22,2.8,1.6),s.steelDark,e-1.1,i+2.5,t)),n.add(o(new h(.22,2.8,1.6),s.steelDark,e+1.1,i+2.5,t)),n.add(o(new h(2.4,.12,.12),s.steel,e,i+3.7,t)),J(n,133.8,-451.6,.1,.8),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.15,t+3.7)),n.add(p("BAND 3","#1a100c","#d6b48a",2.4,.36,e,i+3.7,t+3.7)),n}function Eg(){const n=new R;n.name="shop-shear-3";const e=138,t=-468,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(5.2,1.5,2.4),s.habDark,e,i+.95,t)),n.add(o(new h(4.6,.18,.7),s.steel,e,i+1.85,t+.4)),n.add(o(new h(1.4,1.8,1.2),s.steelDark,e-2.4,i+1.9,t)),J(n,133.8,-465.6,.1,.8),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.35,t+3.7)),n.add(p("SHEAR 3","#1a100c","#d6b48a",2.6,.36,e,i+2.9,t+3.7)),n}function Tg(){const n=new R;n.name="shop-press-3";const e=138,t=-482,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.6,1.2,2.6),s.habDark,e,i+.8,t)),n.add(o(new h(1.1,3.2,1.1),s.steelDark,e-1.5,i+2.2,t)),n.add(o(new h(1.1,3.2,1.1),s.steelDark,e+1.5,i+2.2,t)),n.add(o(new h(4.2,.28,2),s.steel,e,i+3.75,t)),n.add(o(new P(.35,.35,1.2,12),s.steel,e,i+2.4,t)),J(n,133.8,-479.6,.1,.8),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.35,t+3.7)),n.add(p("PRESS 3","#1a100c","#d6b48a",2.6,.36,e,i+3.9,t+3.7)),n}function Ag(){const n=new R;n.name="hab-n2-5";const e=-94,t=-76,i=M(e,t);n.add(o(new h(10.2,.2,7.4),s.concrete,e,i+.1,t));for(let a=0;a<4;a++){const r=e-3.3+a*2.2;n.add(o(new P(.85,.85,3.6,12),s.steel,r,i+2,t))}return n.add(p("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+4.15,t+3.7)),n.add(p("N2 5","#1a2830","#d6b48a",2,.36,e,i+3.6,t+3.7)),Y(n,[[-82,-76],[-88,-76],[-94,-76]],s.pipe,.1),n}function Rg(){const n=new R;n.name="hab-water-4";const e=-70,t=-100,i=M(e,t);return n.add(o(new h(10.2,.2,7.4),s.concrete,e,i+.1,t)),n.add(o(new P(1.55,1.55,7.6,16),s.pipe,e-1.8,i+1.9,t,0,0,Math.PI/2)),n.add(o(new P(1.55,1.55,7.6,16),s.pipe,e+1.8,i+1.9,t,0,0,Math.PI/2)),n.add(o(new h(2.2,1.4,1.6),s.habDark,e,i+.9,t+2.2)),n.add(p("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+4.35,t+3.8)),n.add(p("HAB H2O 4","#1a2830","#d6b48a",3.2,.36,e,i+3.8,t+3.8)),Y(n,[[-58,-100],[-64,-100],[-70,-100]],s.pipe,.1),n}function Cg(){const n=new R;n.name="spare-potable-uv-4";const e=46,t=-176,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(4.2,2.6,3.4),s.habDark,e-1.6,i+1.5,t)),n.add(o(new P(1.05,1.05,3.4,14),s.pipe,e+2.6,i+1.9,t)),n.add(o(new h(1.6,1.4,1.2),s.steel,e+2.6,i+3.9,t)),n.add(p("SPARE","#1a2830","#d6e6ef",2.2,.42,e,i+4.15,t+3.7)),n.add(p("UV 4","#1a2830","#d6b48a",2,.36,e,i+3.7,t+3.7)),Y(n,[[32,-176],[39,-176],[46,-176]],s.pipe,.1),n}function Pg(){const n=new R;n.name="shop-welder-3";const e=138,t=-496,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(3.4,2.2,2.6),s.habDark,e-2.2,i+1.3,t)),n.add(o(new h(.35,2.8,.35),s.steel,e+2,i+1.6,t)),n.add(o(new h(2.2,.28,.28),s.steel,e+3,i+2.9,t)),n.add(o(new h(1.8,1.2,1.6),s.steelDark,e+2.4,i+.8,t+1.6)),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+3.15,t+3.7)),n.add(p("WELD 3","#1a100c","#d6b48a",2.4,.36,e,i+2.7,t+3.7)),n}function Dg(){const n=new R;n.name="pad2-cargo-3";const e=74,t=136,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),J(n,70.4,134.2,.1,1),J(n,73.2,133.8,-.15,.9),J(n,76.6,134.6,.2,1.05),J(n,71,137.6,-.1,.85),J(n,75.4,137.8,.05,.95),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+2.35,t+3.7)),n.add(p("CARGO 3","#1a100c","#d6b48a",2.8,.36,e,i+1.9,t+3.7)),n}function zg(){const n=new R;n.name="pad2-unloader-3";const e=74,t=148,i=M(e,t);return n.add(o(new h(9.6,.2,7.2),s.concrete,e,i+.1,t)),n.add(o(new h(1.2,8.4,1.2),s.steelDark,e-2.4,i+4.3,t)),n.add(o(new h(1.2,8.4,1.2),s.steelDark,e+2.4,i+4.3,t)),n.add(o(new h(7.2,.35,1.2),s.steel,e,i+8.6,t)),n.add(o(new h(.16,2.8,.16),s.steelDark,e,i+7,t+1.6)),n.add(o(new h(1.4,1.2,1.4),s.crate,e,i+5.4,t+1.6)),J(n,70.6,146.2,.15,.9),J(n,77.2,149.4,-.1,.85),n.add(p("SPARE","#1a100c","#f0c089",2.2,.42,e,i+4.55,t+3.7)),n.add(p("UNLOAD 3","#1a100c","#d6b48a",2.8,.36,e,i+4.1,t+3.7)),n}function Ig(){const n=new R;n.name="pad2-bricks-3";const e=32,t=160,i=M(e,t);n.add(o(new h(7.6,.16,5.4),s.concrete,e,i+.08,t));for(let a=0;a<3;a++)for(let r=0;r<4;r++){const c=e-2.4+r*1.55,l=t-1.2+a*1.2;n.add(o(new h(1.35,.42,.95),s.rust,c,i+.38,l)),n.add(o(new h(1.35,.42,.95),s.habDark,c,i+.82,l))}return n.add(p("PAD 2","#1a100c","#f0c089",2.2,.42,e,i+1.85,t+2.8)),n.add(p("BRICK 3","#1a100c","#d6b48a",2.6,.36,e,i+1.4,t+2.8)),n}const sc=new _(.55,.62,.38);function Ug(){const n=new T2;um(n),n.add(cm(sc)),n.add(dm(sc)),n.add(am()),n.add(sm()),n.add(lm());const e=hm();n.add(e);const t=pm();return n.add(t.group),{scene:n,dust:e,settlement:t,getHeight:M}}function Ng(n){const e=new E2({canvas:n,antialias:!0,powerPreference:"high-performance"});return e.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),e.setSize(window.innerWidth,window.innerHeight),e.shadowMap.enabled=!0,e.shadowMap.type=oc,e.outputColorSpace=kt,e.toneMapping=dc,e.toneMappingExposure=1.05,e}function Og(n,e){window.addEventListener("resize",()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)})}export{Bi as C,en as P,_ as V,Ng as a,Og as b,Ug as c,Lg as d};
